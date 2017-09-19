let Transformer = require('../../framework/models/Transformer.js')

class SampleTransformer extends Transformer {

  defineMapping(){
    return {
      "email of account with resume": app.config.sampleWithResume.email,
      "password of account with resume": app.config.sampleWithResume.password,
      "email of account without resume": app.config.sampleWithoutResume.email,
      "password of account without resume": app.config.sampleWithoutResume.password,
      "correct email": app.config.sampleWithResume.email,
      "correct password": app.config.sampleWithResume.password
    }
  }
}

module.exports = SampleTransformer
