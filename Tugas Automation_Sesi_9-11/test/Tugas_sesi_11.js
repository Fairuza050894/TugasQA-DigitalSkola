const { Builder, until } = require('selenium-webdriver');
const { expect } = require('chai');
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const { compareScreenshots } = require('../utils/visualTestHelper');
const fs = require('fs-extra');

describe('Tugas 3 - POM dan Visual Testing', function () {
  this.timeout(30000);
  let driver, loginPage, inventoryPage;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    loginPage = new LoginPage(driver);
    inventoryPage = new InventoryPage(driver);
  });

  after(async function () {
    await driver.quit();
  });

  it('Login dan sort dengan POM', async function () {
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    await driver.wait(until.urlContains('inventory'), 5000);
    await inventoryPage.sortByAZ();
    await driver.sleep(2000);
    const itemName = await inventoryPage.getFirstItemName();
    expect(itemName).to.equal('Test.allTheThings() T-Shirt (Red)');
  });

  it('Visual Testing pada halaman Inventory', async function () {
    const baseline = 'test/visual/baseline.png';
    const current = 'test/visual/current.png';
    const diff = 'test/visual/diff.png';

    await inventoryPage.takeScreenshot(current);

    if (!fs.existsSync(baseline)) {
      fs.copyFileSync(current, baseline);
      console.log('Baseline image saved.');
    } else {
      const mismatch = compareScreenshots(baseline, current, diff);
      expect(mismatch).to.equal(0, 'Visual mismatch detected!');
    }
  });
});
