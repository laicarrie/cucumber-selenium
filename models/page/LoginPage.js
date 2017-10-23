let Page = require('../../framework/models/Page.js')

class LoginPage extends Page {

  get elements() {

    return {

		"ID": this.by.xpath('//title[contains(text(), "Already have a jobsDB Profile? Login")]'),
		"email field": this.by.id('uName'),
		"password field": this.by.id('uPwd'),
		"Log in": this.by.xpath('//input[contains(@value,"Log in")]'),
		"Forgot password": this.by.linkText('Forgot password?'),
    "Sign up button at the header": this.by.className('a_signin'),
		"Sign up": this.by.xpath('//div[contains(@class, "reg")]/p/a'),
		"error alert prompt": this.by.id('error_message')
    }

  }

  get url() {

    return app.config.domain + '/login.do'

  }


}

module.exports = LoginPage
