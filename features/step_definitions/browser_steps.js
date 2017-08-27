var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

  let viewMapping = {
    "Login page": LoginPage,
    "Search page": SearchPage,
    "Logged in header": loggedInHeader,
    "Search Result page": SearchResultPage,
    "Job Ad page": JobAdPage,
    "Complete Your Profile page": CompleteYourProfilePage
  }

  let accountMapping = {
    "account": ["carrielai@seekasia.com", "Carrie1234"],
    "account without resume": ["jobsdbcarrielai4@gmail.com", "carrie1234"]
  }

  Given('I am on {string}', function(text) {
    let viewClass = viewMapping[text]
    let view = new viewClass(app.driver)

    this.view = view
    return view.go()

  });

  Given('I am logged in to an {string}', function(text) {
    let account = accountMapping[text]
    let email = account[0]
    let password = account[1]
    let view = new LoginPage(app.driver)

    view.login(email, password)

  });


  Given('{string} is selected', function(text) {
    return this.view.click(text)
    .then( () => {
      return this.view.screenshot(text)
    })
  });


  When('I type in "{string}" on {string}', function (text, inputfield) {

    return this.view.waitAndFill(inputfield, text, 5000)
//   return this.driver.findElement({xpath: `//input[contains(@value,'${text}')]`})
  });


  When('I select "{string}" from {string}', function (text, optionlist) {

    return this.view.clickAndSelect(optionlist, text, 5000)
  });


  When('I click on {string}', function (text) {

    return this.view.click(text)

  });


  Then('I should see {string}', function (text) {
    let viewClass = viewMapping[text]

    if (viewClass) {
      let view = new viewClass(app.driver)
      view.screenshot(text)
      return view.exist() 
    } 
    
    this.view.screenshot(text)
    return this.view.waitAndLocate(text, 5000)

  });

  Then('the Search criteria contains {string}', function (text) {
    let criteria = this.view.containSearchCriteria(text)
    return this.view.screenshot("jobs(s) for " + text)
  });


  Then('I should land on {string}', function (text) {
    let viewClass = viewMapping[text]
    let view = new viewClass(app.driver)
    
    view.screenshot(text)

    this.view = view
    return view.exist() 

  });

  Then('error alert popups: {string}', function (text) {

    this.view.checkAlertMsg(text, 5000)

    return this.view.screenshot("error")
  });

  Then('{string} ranges from {string} to {string}', function (elementID, from, to) {

    return this.view.checkSalaryMin(elementID, from)
    .then( () => {

      return this.view.checkSalaryMax(elementID, to)
      
    })


  });


});