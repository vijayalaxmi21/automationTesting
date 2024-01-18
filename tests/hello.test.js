const puppeteer = require('puppeteer');

describe('Login functionality', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: 'new' });
    page = await browser.newPage();
    await page.goto('D:/automationTesting/src/hello.html');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Valid credentials should log in successfully', async () => {

    await page.type('#username', 'demo');
    await page.type('#password', 'password');
    await page.click('button');

    const alertMessage = await page.evaluate(() => window.alert);
    expect(alertMessage).toBe('Login successful!');

    // Check the redirected URL
    const urlAfterLogin = page.url();
    expect(urlAfterLogin).toBe('D:\\automationTesting\\src\\hello.html');
  }, 9000);
});
