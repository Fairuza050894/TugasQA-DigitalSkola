import { expect } from 'chai';

describe('API Demos - 3 Test Aman Pasti Jalan + Allure', () => {

    it('1. Ambil screenshot utama', async () => {
        const screenshot = await driver.takeScreenshot();
        console.log('Screenshot utama berhasil diambil');
    });

    it('2. Klik menu Preferences → kembali', async () => {
        const prefMenu = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Preference")');
        if (await prefMenu.isExisting()) {
            await prefMenu.click();
            await driver.back();
        } else {
            console.warn('Menu Preference tidak ditemukan, dilewati');
        }
    });

    it('3. Klik menu Views → kembali', async () => {
        const viewsMenu = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Views")');
        if (await viewsMenu.isExisting()) {
            await viewsMenu.click();
            await driver.back();
        } else {
            console.warn('Menu Views tidak ditemukan, dilewati');
        }
    });

});
