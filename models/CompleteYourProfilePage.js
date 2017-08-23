let View = require('./View.js')

class CompleteYourProfilePage extends View {

  get elements() {

    return {
       
		"ID": this.by.className('icon-notdoneprofile'),
		"App Store button": this.by.xpath("//img[contains(@src, '/jobsdb/xhtml_res/images/app_upsell/app_upsell_app_store.png')]"),
		"Google Play button": this.by.xpath("//img[contains(@src, '/jobsdb/xhtml_res/images/app_upsell/app_upsell_play_store.png')]"),
		"Continue in app button": this.by.linkText('Continue in app'),
		"Back button": this.by.className('back')

    }
  
  }


}

module.exports = CompleteYourProfilePage
