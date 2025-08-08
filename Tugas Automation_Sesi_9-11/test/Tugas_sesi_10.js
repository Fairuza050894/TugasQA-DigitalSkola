const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Tugas 2 - Dengan Hooks', function () {
  this.timeout(30000);
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    await driver.quit();
  });

  it('Login dan sort produk', async function () {
    await driver.get('https://www.saucedemo.com/');
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();

    await driver.wait(until.urlContains('inventory'), 5000);
    expect(await driver.getCurrentUrl()).to.include('/inventory.html');

    const dropdown = await driver.findElement(By.className('product_sort_container'));
    await dropdown.sendKeys('Name (A to Z)');

    // Tambahkan waktu tunggu agar UI update selesai
    await driver.sleep(2000);

    const firstItem = await driver.findElement(By.className('inventory_item_name'));
    const itemName = await firstItem.getText();
    expect(itemName).to.equal('Test.allTheThings() T-Shirt (Red)');
    // Sesuaikan dengan produk asli
  });
});
