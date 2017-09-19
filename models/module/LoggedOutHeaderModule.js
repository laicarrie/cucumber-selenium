let View = require('../../framework/models/View.js')

class LoggedOutHeader extends View {

  get elements() {

    return {

       "ID": this.by.className('icon-menu')
    }

  }


}

module.exports = LoggedOutHeader
