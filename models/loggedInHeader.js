let Page = require('./Page.js')

class LoggedInHeader extends Page {

  get elements() {

    return {
       
       "pageID": this.by.className('icon-menu')
    }
  
  }

  get url() {
  
    return ''
  
  }

}

module.exports = LoggedInHeader
