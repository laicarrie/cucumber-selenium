let Transformer = require('../../framework/models/Transformer.js')

class PageTransformer extends Transformer {

  defineMapping(){

    return app.defaultPageRouting

  }
}

module.exports = PageTransformer
