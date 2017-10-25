let Page = require('../../framework/models/Page.js')

class JobAdPage extends Page {

  get elements() {

    return {

		"ID": this.by.className('jobs_title'),
		"Apply": this.by.linkText('Apply'),
		"Save": this.by.className('save btn_favor '),
		"Share": this.by.className('share'),
		"Back": this.by.className('back'),
		"first": this.by.className('btn btn-first'),
		"previous": this.by.className('btn btn-prev'),
		"next": this.by.className('btn btn-next'),

    }

  }

  get url() {

    return app.config.domain + '/jobad/' + app.config.activeJobAd

  }


}

module.exports = JobAdPage
