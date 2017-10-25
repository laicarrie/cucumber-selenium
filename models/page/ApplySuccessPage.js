let Page = require('../../framework/models/Page.js')

class ApplySuccessPage extends Page {

  get elements() {

    return {
        "ID": this.by.className('applyJobMessage'),
		    "Apply Success message": this.by.className('applyJobMessage'),
        "Upsell message": this.by.className('upsellMessage'),
        "App Store": this.by.xpath("//img[contains(@src, '/jobsdb/xhtml_res/images/app_upsell/app_upsell_app_store.png')]"),
        "Google Play": this.by.xpath("//img[contains(@src, '/jobsdb/xhtml_res/images/app_upsell/app_upsell_play_store.png')]"),
		    "Continue search": this.by.linkText('Continue search'),
    }

  }

  get url() {

    return ''

  }


}

module.exports = ApplySuccessPage
