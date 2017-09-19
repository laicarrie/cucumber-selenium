let Page = require('../../framework/models/Page.js')

class LoginPage extends Page {

  get elements() {

    return {

		"ID": this.by.xpath('//title[contains(text(), "Already have a jobsDB Profile? Login")]'),
		"email field": this.by.id('uName'),
		"password field": this.by.id('uPwd'),
		"Log in": this.by.xpath('//input[contains(@value,"Log in")]'),
		"Forgot password": this.by.linkText('Forgot password?'),
		"Sign up": this.by.linkText('Sign up'),
		"error alert prompt": this.by.id('error_message')
    }

  }

  get url() {

    return app.config.domain + '/login.do'

  }


  login(email, password) {

  	return this.go()
	  .then( () => {
    	return this.waitAndFill('email field', email, 5000)
      })
      .then( () => {

        return this.waitAndFill('password field', password, 5000)
      })
      .then( () => {

        return this.click('Log in')
      });
  }


}

module.exports = LoginPage