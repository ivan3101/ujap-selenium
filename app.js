const {Builder, By, Key, until, Capabilities} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().withCapabilities(Capabilities.chrome()).forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:5000');
    await driver.wait(until.titleIs('CoreUI for React'), 5000);

    // Login fail
    await driver.sleep(1000);
    await driver.findElement(By.name('username')).sendKeys('idemeneze14');
    await driver.sleep(1500);
    await driver.findElement(By.name('password')).sendKeys('12356');
    await driver.sleep(1500);
    await driver.findElement(By.id('login')).click();

    // Login successful
    await driver.sleep(2000);
    await driver.findElement(By.name('username')).clear();
    await driver.findElement(By.name('username')).sendKeys('idemeneze14');
    await driver.sleep(1500);
    await driver.findElement(By.name('password')).clear();
    await driver.findElement(By.name('password')).sendKeys('123456');
    await driver.sleep(1500);
    await driver.findElement(By.id('login')).click();
    await driver.sleep(2000);

    const logout = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/ul/li[18]/a[@href='#/login']"))

    // Navigate to 'Liberacion Articulo 58'
    await driver.findElement(By.linkText('Liberacion Articulo 58')).click();
    await driver.sleep(2000);

    // Liberacion Articulo 58
    await driver.findElement(By.id('liberar')).click();
    await driver.sleep(2500);
    await driver.findElement(By.id('liberar')).click();
    await driver.sleep(2500);

    // Logout
    await driver.executeScript('return arguments[0].click();', logout);
    await driver.sleep(1500);

  } finally {
    await driver.quit();
  }
})();