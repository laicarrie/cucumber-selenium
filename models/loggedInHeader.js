let View = require('../framework/models/View.js')

class LoggedInHeader extends View {

  get elements() {

    return {
       
       "ID": this.by.className('icon-menu')
    }
  
  }


}

module.exports = LoggedInHeader
