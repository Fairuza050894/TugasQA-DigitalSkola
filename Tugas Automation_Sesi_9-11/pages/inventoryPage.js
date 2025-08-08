const { By, until } = require('selenium-webdriver');
const fs = require('fs-extra');

class InventoryPage {
  constructor(driver) {
    this.driver = driver;
    this.sortDropdown = By.className('product_sort_container');
    this.firstProductName = By.className('inventory_item_name');
  }

  async waitForPage() {
    await this.driver.wait(until.urlContains('inventory'), 5000);
  }

  async sortByAZ() {
    await this.driver.findElement(this.sortDropdown).sendKeys('Name (A to Z)');
  }

  async getFirstItemName() {
    return await this.driver.findElement(this.firstProductName).getText();
  }

  async takeScreenshot(path) {
    const image = await this.driver.takeScreenshot();
    await fs.outputFile(path, image, 'base64');
  }
}

module.exports = InventoryPage;
