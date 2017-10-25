let Page = require('../../framework/models/Page.js')

class SignUpPage extends Page {

  get elements() {

    return {

		"ID": this.by.xpath('//title[contains(text(), "Present yourself professionally to hirers with a jobsDB profile")]'),
		"App Store": this.by.xpath("//img[contains(@src, '/jobsdb/xhtml_res/images/app_upsell/app_upsell_app_store.png')]"),
    "Google Play": this.by.xpath("//img[contains(@src, '/jobsdb/xhtml_res/images/app_upsell/app_upsell_play_store.png')]"),
    "Continue in app": this.by.linkText('Continue in app'),
    "first name field": this.by.id('firstName'),
    "last name field": this.by.id('lastName'),
    "email field": this.by.id('uName'),
		"password field": this.by.id('uPwd'),
		"Log in button at the header": this.by.xpath('//*[@id="search"]/div[1]/div/a'),
    "Log in": this.by.xpath('//div[contains(@class, "reg")]/p/a'),
		"Sign up": this.by.xpath('//input[contains(@value,"Sign up")]'),
		"error alert prompt": this.by.id('error_message')
    }

  }

  get url() {

    return app.config.domain + '/register.do'

  }


}

module.exports = SignUpPage
