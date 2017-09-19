let Transformer = require('../../framework/models/Transformer.js')

class ModuleTransformer extends Transformer {

  defineMapping(){

    return app.defaultModuleRouting

  }
}

module.exports = ModuleTransformer
