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

    this.driver.executeScript("arguments[0].scrollIntoView()", this.driver.findElement(element))

    return this.driver.findElement(element)
    .then(function(element) {

      return element.click()
    })

  }

  waitAndLocate(elementId, timeout = 5000) {

    let element = this.elements[elementId]

    element = element ? element : elementId

    var condition = until.elementLocated(element);
    return this.driver.wait(condition, timeout);

  }

  waitAndFill(elementId, keyin, timeout = 5000) {

    return this.waitAndLocate(elementId, timeout).sendKeys(keyin)

  }

  clickAndSelect(elementId, option, timeout = 5000) {

    return this.waitAndLocate(elementId, timeout).click()
    .then( () => {
      let xpath = this.by.xpath(`//option[contains(text(), '${option}')]`)
      return this.waitAndLocate(xpath, 5000).click()
    });

  }

  exist() {

    let ID = this.elements["ID"];
    return this.waitAndLocate(ID, 5000)
  }

  screenshot(fileName) {

    return this.driver.takeScreenshot()
    .then(function(image) {

      return new Promise(function(resolve, reject) {

        require('fs').writeFile(`./screenshot/${fileName}.png`, image, 'base64', function(err) {

          if (err) { reject(err); }

          resolve(image);

        })
      })
    });
  }

  checkAlertMsg (text, timeout = 5000) {

    let condition = until.alertIsPresent()

    return this.driver.wait(condition , timeout)
      .then( () => {
        return this.driver.switchTo().alert().getText()
      })
      .then( (alertMsg) => {
        if (alertMsg != text){
          return Promise.reject(new Error(`alert box with message ${text} does not exist`))
        }
        return alertMsg
      })
      .then( () => {
        return this.driver.switchTo().alert().accept()
      })
  }

  getListLength (elementId){
      let element = this.elements[elementId]

      element = element ? element : elementId

      return this.driver.findElements(element).options.length
/*      then ( function(element) {
        let length = element.options.length
        console.log(length)
        return length
      })*/
  }



}

module.exports = View
