let Transformer = require('../../framework/models/Transformer.js')

class SampleTransformer extends Transformer {

  defineMapping(){
    return {
      "an account with resume": app.config.sampleWithResume1,
      "email of account with resume": app.config.sampleWithResume1.email,
      "password of account with resume": app.config.sampleWithResume1.password,

      "an account without resume": app.config.sampleWithoutResume,
      "email of account without resume": app.config.sampleWithoutResume.email,
      "password of account without resume": app.config.sampleWithoutResume.password,

      "an account": app.config.sampleWithResume2,
      "correct email": app.config.sampleWithResume2.email,
      "correct password": app.config.sampleWithResume2.password
    }
  }
}

module.exports = SampleTransformer
