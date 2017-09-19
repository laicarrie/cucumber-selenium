var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');


defineSupportCode(function({Given, When, Then}) {

  Given("I am on {page}", function(viewClass){
    let view = new viewClass(app.driver)

    this.view = view
    return this.view.go()
  });

  Given("I go to {page}", function(viewClass){
    let view = new viewClass(app.driver)

    this.view = view
    return this.view.go()
  });

  Given("I go to the {order} Job Ad", function(order){
    let number = parseInt(order) - 1

    return this.view.goToNthJobAd(number)
  });

/*
  Given('I am on {string}', function(text) {
    let viewClass = viewMapping[text]
    let view = new viewClass(app.driver)

    this.view = view
    return view.go()

  });
  */

  Given('I am logged in with {string} and {string}', function(email, password) {
/*    let account = accountMapping[text]
    let email = account[0]
    let password = account[1]  */
    let view = new LoginPage(app.driver)

    this.view = view
    return this.view.login(email, password)

  });


  Given('{noQuoteString} is selected', function(text) {
//    return this.view.click(text)
    if (text == "Monthly") {
      return this.view.checkSalaryMin("minimum salary", "0")
      .then( () => {
        return this.view.checkSalaryMax("minimum salary", "120000")
      })

    } else if (text == "Hourly") {
      return this.view.checkSalaryMin("minimum salary", "0")
      .then( () => {
        return this.view.checkSalaryMax("minimum salary", "600")
      })

    }
  });


  When('I type in {noQuoteString} on {noQuoteString}', function (text, inputfield) {

//    return this.view.waitAndFill(inputfield, text, 5000)
    return this.view.fill(inputfield, text)
//   return this.driver.findElement({xpath: `//input[contains(@value,'${text}')]`})
  });


  When('I select {noQuoteString} from {noQuoteString}', function (text, optionlist) {

    return this.view.selectFromList(text, 5000)
  });

/*
  When('I select a resume', function () {
    let optionsLength = this.view.getListLength("Resume list")
    let select = Math.floor((Math.random() * optionsLength) + 1);
    return this.view.click("#resume option:nth-child(select)");
  });
  */


  When('I click on {noQuoteString}', function (text) {

    return this.view.scrollTo(text)
    .then( () => {
      return this.view.click(text)
    })
  });

  Then('I take snapshot', function () {

    return this.view.snapShot(this)
  });

  Then('I should see {noQuoteString} button', function (text) {

//    return this.view.waitAndLocate(text, 5000)
    return this.view.locate(text, 5000)
  });


  Then('the Search criteria contains {noQuoteString}', function (text) {
    return this.view.containSearchCriteria(text)
  });

  Then('I should see {module}', function (viewClass) {
    let view = new viewClass(app.driver)
    return view.exist()
  });

  Then('I should land on {page}', function (viewClass) {
    let view = new viewClass(app.driver)
    this.view = view

    return this.view.exist()
  });

  Then('error alert pops up: {noQuoteString}', function (text) {

    return this.view.checkAlertMsg(text, 5000)
  });

  Then('{noQuoteString} ranges from {noQuoteString} to {noQuoteString}', function (elementId, from, to) {

    return this.view.checkSalaryMin(elementId, from)
    .then( () => {

      return this.view.checkSalaryMax(elementId, to)
    })
  });


});
