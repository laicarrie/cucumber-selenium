let {until, By} = require('selenium-webdriver')
let View = require('./View.js')

class Page extends View{

  get url() {
  
    return ''
  
  }

  go () {
  
    return this.driver.get(this.url)

  }

}

module.exports = Page
