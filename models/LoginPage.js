let Page = require('./Page.js')

class LoginPage extends Page {

  get elements() {

    return {
       
		"ID": this.by.xpath('//title[contains(text(), "Already have a jobsDB Profile? Login")]'),
		"email field": this.by.id('uName'),
		"password field": this.by.id('uPwd'),
		"Log in": this.by.xpath('//input[contains(@value,"Log in")]'),
		"Forgot password": this.by.linkText('Forgot password?'),
		"Sign up": this.by.linkText('Sign up')
    }
  
  }

  get url() {
  
    return 'https://m.jobsdb.com/en-hk/login.do'
  
  }

}

module.exports = LoginPage
