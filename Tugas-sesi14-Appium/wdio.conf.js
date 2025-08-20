export const config = {
  runner: 'local',
  specs: ['./test/*.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Pixel_5_API_33',
    'appium:platformVersion': '13.0', // sesuai emulator
    'appium:app': '/Users/user/Downloads/ApiDemos-debug.apk', // ganti path sesuai lokasi apk
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'io.appium.android.apis',
    'appium:appActivity': '.ApiDemos',
  }],
  reporters: ['spec', ['allure', { outputDir: 'allure-results-sesi14' }]],
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec', ['allure', {
  outputDir: 'allure-results-sesi14',
  disableWebdriverStepsReporting: true,
  disableWebdriverScreenshotsReporting: false
  }]],
  hostname: 'localhost',
  port: 4723,
  path: '/',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  afterTest: async function (_, __, { passed }) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  }
};
