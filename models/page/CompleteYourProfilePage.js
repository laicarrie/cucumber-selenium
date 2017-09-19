let Page = require('../../framework/models/Page.js')

class CompleteYourProfilePage extends Page {

  get elements() {

    return {

		"ID": this.by.className('icon-notdoneprofile'),
		"App Store": this.by.xpath("//img[contains(@src, '/jobsdb/xhtml_res/images/app_upsell/app_upsell_app_store.png')]"),
		"Google Play": this.by.xpath("//img[contains(@src, '/jobsdb/xhtml_res/images/app_upsell/app_upsell_play_store.png')]"),
		"Continue in app": this.by.linkText('Continue in app'),
		"Back": this.by.className('back')

    }

  }


}

module.exports = CompleteYourProfilePage
