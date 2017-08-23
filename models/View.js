let {until, By} = require('selenium-webdriver')

class View {

  constructor(driver) {

    this.driver = driver

  }

  get by() {
  
    return By
  
  }

  get elements() {
  
    return { } 

  }

  click(elementId) {

    let element = this.elements[elementId]
 
    element = element ? element : elementId

    return this.driver.findElement(element).then(function(element) {

      return element.click();

    });
  
  }

  waitAndLocate(elementId, timeout = 5000) {

    let element = this.elements[elementId]

    element = element ? element : elementId

    var condition = until.elementLocated(element);
    return this.driver.wait(condition, timeout); 

  }

  waitAndFill(elementId, keyin, timeout = 5000) {

    return this.waitAndLocate(elementId, timeout).sendKeys(keyin); 

  }

  exist() {

    let ID = this.elements["ID"];
    return this.waitAndLocate(ID, 5000)
  }

  screenshot(fileName) {

    return this.driver.takeScreenshot().then(
      function(image, err) {
        require('fs').writeFile(`./screenshot/${fileName}.png`, image, 'base64', function(err) {
          if (err)
            console.log(err);
        });
      }
    );
  }


}

module.exports = View
