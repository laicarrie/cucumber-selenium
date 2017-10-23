var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');


defineSupportCode(function({Given, When, Then}) {

  let handleSample = function(context, sample) {

    if (context.sample && context.sample[sample]) {

      return context.sample[sample]

    }

    let value = app.trans('Sample', sample)
    context.sample = context.sample ? context.sample : {}
    context.sample[sample] = value

    return value
  }



  Given("I go to {page}", function(viewClass){

    let view = new viewClass(app.driver)

    this.view = view
    return this.view.go()

  });


  Given("I browse to the {noQuoteString} page", function(text){

    if ( text == 'next' ) { return this.view.goToNextPage() }
    if ( text == 'previous' ) { return this.view.goToPreviousPage() }

  });


  Given("The page number should be {noQuoteString}", function(text){

    return this.view.scrollTo("Current page")
      .then( () => {
        return this.view.checkText("Current page", text)
      })

  });

  Given('I am logged in to {noQuoteString}', function(account) {

    let view = new LoginPage(app.driver)
    this.view = view
    return this.view.go()
      .then ( () => {
        return this.view.fill('email field', account.email)
      })
      .then( () => {
        return this.view.fill('password field', account.password)
      })
      .then( () => {
        return this.view.click("Log in")
      })

  });


  Given('Salary unit should be selected as {noQuoteString}', function(text) {

    if (text == "Monthly") {

      return this.view.checkSalaryFrom("minimum salary", "0")
        .then( () => {
          return this.view.checkSalaryTo("minimum salary", "120,000")
        })

    } else if (text == "Hourly") {

      return this.view.checkSalaryFrom("minimum salary", "0")
        .then( () => {
          return this.view.checkSalaryTo("minimum salary", "600")
        })

    }
  });


  When('I get number of {noQuoteString}', function (text) {

    return this.view.getDropdownOptionCount(text)

  });


  When('I type in {noQuoteString} on {noQuoteString}', function (text, inputField) {

    return this.view.fill(inputField, text)

  });


  When('I select {noQuoteString} from {noQuoteString}', function (text, optionList) {

    return this.view.selectFromDropdownList(optionList, text, 5000)

  });

  Then('{noQuoteString} should be selected on {noQuoteString}', function (text, optionList) {

    return this.view.getSelectedDropdownOption(optionList, text, 5000)
    .then( (selectedOption) => {
      return console.log(selectedOption)
    })

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

  When('I click to {noQuoteString} the {order} Job Ad', function (text, order) {

    return this.view.clickOneOfElements(text, order)

  });

  Then('The {order} job is {noQuoteString}', function (order, status) {

    return this.view.savedOrNot(order, status)

  });

  Then('I take snapshot', function () {

    return this.view.snapShot(this)

  });

  Then('I should see {noQuoteString} button', function (text) {

    return this.view.locate(text, 5000)

  });


  Then('The {noQuoteString} should contain {noQuoteString}', function (elementId, text) {

    return this.view.checkContainText(elementId, text)

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

  Then('Alert pops up: {noQuoteString}', function (text) {

    return this.view.checkAlertMsg(text, 5000)

  });

  Then('{noQuoteString} should be ranged from {noQuoteString} to {noQuoteString}', function (elementId, from, to) {

    return this.view.checkSalaryFrom(elementId, from)
      .then( () => {

        return this.view.checkSalaryTo(elementId, to)
      })

  });



});
