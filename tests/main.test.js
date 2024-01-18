const { Builder, By, Key, until } = require('selenium-webdriver');

async function example() {
    let driver;

    try {
      
        driver = await new Builder().forBrowser('chrome').build();

        // Navigate to the website
        await driver.get('https://www.example.com');

        // Perform actions on the page
        await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);

        // Wait for the title to change (adjust the timeout as needed)
        await driver.wait(until.titleIs('Selenium - Google Search'), 5000);

        // Add a delay before quitting (adjust the duration as needed)
        await driver.sleep(2000);

    } catch (error) {
        // Handle errors and capture screenshots
        console.error('Test failed:', error);

        // Capture screenshot on failure
        const screenshot = await driver.takeScreenshot();
        console.error('Capturing screenshot...');
        console.error(screenshot);

    } finally {
        // Quit the browser
        if (driver) {
            await driver.quit();
        }
    }
}


example();
