let Page = require('./Page.js')

class LoginPage extends Page {

  get elements() {

    return {
       
		"ID": this.by.xpath('//title[contains(text(), "Already have a jobsDB Profile? Login")]'),
		"email field": this.by.id('uName'),
		"password field": this.by.id('uPwd'),
		"Log in button": this.by.xpath('//input[contains(@value,"Log in")]'),
		"Forgot password": this.by.linkText('Forgot password?'),
		"Sign up": this.by.linkText('Sign up'),
		"error alert prompt": this.by.id('error_message')
    }
  
  }

  get url() {
  
    return 'https://m.jobsdb.com/en-hk/login.do'
  
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

        return this.click('Log in button')
      });
  }


}

module.exports = LoginPage
