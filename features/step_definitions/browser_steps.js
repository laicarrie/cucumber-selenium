var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

  Given('I am on Search page', function() {

    var page = new SearchPage(this.driver)
    return page.go()
//    .then(function(){
//      console.log("> On jobsdb Search page")
//    })
  });

  When('I click on {string} button', function (text) {
    var page = new SearchPage(this.driver)
    return page.click(text)
//   return this.driver.findElement({xpath: `//input[contains(@value,'${text}')]`})
//   .then(function(element) {
//      return element.click().then(function(element) {
//        console.log("> Clicked " + text + " button")
//        return element
     
//    });
  });

  Then('I should see {string} button', function (text) {

//    var xpath = "//*[contains(text(),'" + text + "')]";
    
    let page = new SearchResultPage(this.driver)
//    var path = page.elements(text)
//    console.log(path)
    return page.waitAndLocate(text, 10000)
/*

    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    console.log(condition);
    return this.driver.wait(condition, 5000);
    */
  });
});



/*
  Scenario: Login
    Given I am on Login page
    When I type in email
    When I type in password
    When I click on "Log in" button
    Then I should see hamburger menu
    */
