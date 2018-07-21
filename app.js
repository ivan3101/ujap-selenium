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

    const logout = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/ul/li[18]/a[@href='#/login']"));

    // Informacion sin materias
    await driver.findElement(By.xpath('/html/body/div/div/div/div/div/ul/li[2]/a')).click();
    await driver.sleep(1000);
    await driver.executeScript('return window.scrollTo(0, document.body.scrollHeight)');
    await driver.sleep(2000);

    // Adicionar materias
    await driver.findElement(By.xpath('/html/body/div/div/div/div/div/ul/li[9]/a')).click();
    await driver.sleep(2500);

    const seleccionarBtn = await driver.findElement(By.xpath('/html/body/div/div/div/main/div/div/div[2]/div/button[contains(., "Seleccione una materia")]'));
    await seleccionarBtn.click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath('//button[contains(.,"Interfaces con el Usuario 308c1 | Lunes 07:00 - 08:30am/ Miercoles 07:00 - 08:30am")]')).click();
    await driver.sleep(2000);
    const agregarBtn = await driver.findElement(By.xpath('/html/body/div/div/div/main/div/div/div[4]/button[1]'));
    await agregarBtn.click();

    await driver.sleep(2000);
    await seleccionarBtn.click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//button[contains(., "Electiva II Computacion Emergente 309c1 | Viernes 10:20 - 11:50am")]')).click();
    await driver.sleep(1000);
    await agregarBtn.click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath('/html/body/div/div/div/main/div/div/div[4]/button[3]')).click();
    await driver.sleep(2500);

    // Informacion con materias
    await driver.findElement(By.xpath('/html/body/div/div/div/div/div/ul/li[2]/a')).click();
    await driver.sleep(1000);
    await driver.executeScript('return window.scrollTo(0, document.body.scrollHeight)');
    await driver.sleep(2500);

    // Logout
    await driver.executeScript('return arguments[0].click();', logout);
    await driver.sleep(1500);

  } finally {
    await driver.quit();
  }
})();