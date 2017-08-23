var {defineSupportCode } = require('cucumber');

defineSupportCode(function({Before, After, setDefaultTimeout}) {

  setDefaultTimeout(40 *1000)

  Before(function() {
  
    return app.initDriver()
    
  })

  After(function() {

    return app.driver.quit();

  });

});

