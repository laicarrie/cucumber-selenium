let {until, By} = require('selenium-webdriver')


class View {

  constructor(driver) {

    this.driver = driver
    this.sleepBeforeRun = 300

  }

  get by() { return By }

  get elements() { return { } }

  /*
   * pass the key to get corresponding element by elementId
   * WARNING: the input key can be the elementId as a string or a actual webdriver selector
   *
   * @method getSelector
   * @param {string} elementId the elementId being used to get the selector. TEMP: we accpet a selector too.
   *
   * @return {object} the selector of that element
   */

  getSelector(elementId) {

    let selector = this.elements[elementId]

    selector = selector ? selector : elementId

    return selector

  }

  /* check if the page is the current page
     * TO BE OVERRIDED
     *
     * @method exist
     *
     * @return {object} a promise
     */

  exist() {

      return this.locate('ID')

  }

  /*
   * scroll to a point until the element is visible
   *
   * @method scrollTo
   * @param {string} elementId the elementId being used to get the selector. TEMP: we accpet a selector too.
   *
   * @return {obj} a promise
   */

  scrollTo(elementId) {

    this.driver.sleep(this.sleepBeforeRun)

    let condition = this.driver.findElement(this.getSelector(elementId))

    return this.driver.executeScript("arguments[0].scrollIntoView()", condition)

  }

 /*
  * click an element
  *
  * @method click
  *
  * @param {string} elementId the elementId being used to get the selector. TEMP: we accpet a selector too.
  *
  * @return {obj} a promise
  */

  click(elementId) {

    this.driver.sleep(this.sleepBeforeRun)

    return this.driver.findElement(this.getSelector(elementId))
      .then(function(element) {

        return element.click();

    });

  }
/*
  click(elementId) {

    let element = this.elements[elementId]

    element = element ? element : elementId

    this.driver.executeScript("arguments[0].scrollIntoView()", this.driver.findElement(element))

    return this.driver.findElement(element)
    .then(function(element) {

      return element.click()
    })

  }
*/

  /*
   * locate an element
   *
   * @method locate
   *
   * @param {string} elementId the elementId being used to get the selector. TEMP: we accpet a selector too.
   *
   * @return {obj} a promise
   */

  locate(elementId, timeout = 5000) {

    var condition = until.elementLocated(this.getSelector(elementId));

    return this.driver.wait(condition, timeout);

  }


  /*
   * wait for an alert box and assert the text Inside
   * TODO: need to upate the implementation.
   *
   * @method waitForAlert
   *
   * @param {string} elementId the elementId being used to get the selector. TEMP: we accpet a selector too.
   *
   * @return {obj} a promise
   */

  waitForAlert(text, timeout = 5000) {

    var condition = until.alertIsPresent();

    return this.driver.wait(condition, timeout)
      .then( () => {

        let alertBox = driver.switchTo().alert()
        alertText = alertBox.getText();

      })
  }

  checkAlertMsg (text, timeout = 5000) {

    let condition = until.alertIsPresent()

    return this.driver.wait(condition , timeout)
      .then( () => {
        return this.driver.switchTo().alert().getText()
        }).then( (alertMsg) => {
          if (alertMsg != text){
            return Promise.reject(new Error(`alert box with message ${text} does not exist`))
          }
          return alertMsg
          }).then( () => {
              return this.driver.switchTo().alert().accept()
            })
  }

  /*
   * fill the element with value, it will clear the field and send the keys to field WITHOUT pressing ENTER
   *
   * @method fill
   *
   * @param {string} elementId the elementId being used to get the selector. TEMP: we accpet a selector too.
   * @param {string} value the value being filled to the field
   *
   * @return {obj} a promise
   */

  fill(elementId, value) {

    this.driver.sleep(this.sleepBeforeRun)

    return this.driver.findElement(this.getSelector(elementId))
      .then( (element) => {

        element.clear()

        return element.sendKeys(value)
      })
  }


  /*
   * fill the element with value, it will clear the field and send the keys to field AND press ENTER
   *
   * @method input
   *
   * @param {string} elementId the elementId being used to get the selector. TEMP: we accpet a selector too.
   * @param {string} value the value being filled to the field
   *
   * @return {obj} a promise
   */

  input(elementId, value) {

    this.driver.sleep(this.sleepBeforeRun)

    return this.driver.findElement(this.getSelector(elementId))
      .then( (element) => {

        element.clear()

        return element.sendKeys(value, Key.RETURN)
      })
  }

  /*
   * find elements array by selector, fill the elements[idx] with value, it will clear the field and send the keys to field AND press ENTER
   *
   * @method inputToOneOfElements
   *
   * @param {string} elementId the elementId being used to get the selector. TEMP: we accpet a selector too.
   * @param {integer} idx the index of the element in the array
   * @param {string} value the value being filled to the field
   *
   * @return {obj} a promise
   */

  inputToOneOfElements(elementId, idx, value) {

    this.driver.sleep(this.sleepBeforeRun)

    return this.driver.findElements(this.getSelector(elementId))
      .then( (elements) => {

        /* convert human understanding to array perspective */
        let element = elements[idx - 1]

        element.clear()

        return element.sendKeys(value, Key.RETURN)
      })
  }



  /*
   * count the number of element exist
   *
   * @method count
   *
   * @param {string} elementId the elementId being used to get the selector. TEMP: we accpet a selector too.
   * @param {integer} count the length of the elements expected
   *
   * @return {obj} a promise}
   */

  expectCount(elementId, count) {

    this.driver.sleep(this.sleepBeforeRun)

    return this.driver.findElements(this.getSelector(elementId))
      .then( (elements) => {

        assert.lengthOf(elements, count)
      })
  }

  selectFromList(option, timeout = 5000) {

//    return this.waitAndLocate(elementId, timeout).click()
//    .then( () => {
      let xpath = this.by.xpath(`//option[contains(text(), '${option}')]`)
      return this.locate(xpath, 5000).click()
//    });

  }
  /*
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


  snapShot(world) {

    return this.driver.takeScreenshot()
      .then(function(buffer) {
        return world.attach(buffer, 'image/png')
      })
  }


  getListLength (elementId){
      let element = this.elements[elementId]

      element = element ? element : elementId

      return this.driver.findElements(element).options.length
        .then ( function(element) {
        let length = element.options.length
        console.log(length)
        return length
      })
  }*/

  snapShot(world) {

    return this.driver.takeScreenshot()
      .then(function(buffer) {
        return world.attach(buffer, 'image/png')
      })
  }


}

module.exports = View
