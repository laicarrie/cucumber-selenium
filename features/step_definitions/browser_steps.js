var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

  let pageMapping = {
    "Login page": LoginPage,
    "Search page": SearchPage,
    "Logged in header": loggedInHeader,
    "Logged in header module": loggedInHeader
  }


  Given('I am on {string}', function(text) {
    var pageClass = pageMapping[text]
    var page = new pageClass(this.driver)

    this.page = page
    return page.go()
  });

  When('I type in {string} on {string}', function (text, inputfield) {
//    var page = new LoginPage(this.driver)
    
    return this.page.waitAndFill(inputfield, text, 5000)
//   return this.driver.findElement({xpath: `//input[contains(@value,'${text}')]`})
  });

  When('I click on {string} button', function (text) {
//    var page = new SearchPage(this.driver)
    return this.page.click(text)
//   return this.driver.findElement({xpath: `//input[contains(@value,'${text}')]`})
  });

//   Then('I should see {string} module', function (text) {
//     var moduleClass = moduleMapping[text]
//     var module = new moduleClass(this.driver)
// //    var xpath = "//*[contains(text(),'" + text + "')]";
    
// //    let page = new SearchResultPage(this.driver)
//     return this.module.isCurrentPage(text);

//   });

  Then('I should see {string}', function (text) {

//    var xpath = "//*[contains(text(),'" + text + "')]";
    
//    let page = new SearchResultPage(this.driver)
    return this.page.waitAndLocate(text, 5000)

  });


});