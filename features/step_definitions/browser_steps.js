var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

  let ViewMapping = {
    "Login page": LoginPage,
    "Search page": SearchPage,
    "Logged in header": loggedInHeader,
    "Search Result page": SearchResultPage
  }


  Given('I am on {string}', function(text) {
    let viewClass = ViewMapping[text]
    let view = new viewClass(app.driver)

    this.view = view
    return view.go()
    
  });

  When('I type in "{string}" on {string}', function (text, inputfield) {

    return this.view.waitAndFill(inputfield, text, 5000)
//   return this.driver.findElement({xpath: `//input[contains(@value,'${text}')]`})
  });

  When('I click on {string} button', function (text) {

    return this.view.click(text)

  });


  Then('I should see {string}', function (text) {
    let viewClass = ViewMapping[text]
    let view

    if (viewClass) {
      view = new viewClass(app.driver)
      return view.exist() 
    } 
    
    return this.view.waitAndLocate(text, 5000)

  });

  Then('I should land on {string}', function (text) {
    let viewClass = ViewMapping[text]
    let view = new viewClass(app.driver)
    
    this.view = view
    return view.exist() 

  });


});