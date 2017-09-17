let Page = require('../framework/models/Page.js')

class ForgotPasswordPage extends Page {

  get elements() {

    return {

		"ID": this.by.xpath('//*[@id="forgetPasswordPage"]/div/form/div[1]/div[1]/h3'),
    "email field": this.by.id('uName'),
		"Submit": this.by.xpath('//input[contains(@value,"Submit")]'),
		"Sign up": this.by.xpath('//input[contains(@value,"Sign up")]'),
		"error alert prompt": this.by.id('error_message')
    }

  }

  get url() {

    return app.config.domain + '/en-hk/forgetPassword.do'

  }


}

module.exports = ForgotPasswordPage
