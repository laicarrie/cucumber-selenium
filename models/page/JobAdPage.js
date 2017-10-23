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

//    if (env == "prod") { return 'https://m.jobsdb.com/en-hk/jobad/english-teacher-100003005557944' }
//    return 'https://v8.preview.m.jobsdb.com/en-hk/jobad/carrie-branded-ad-100003000211873'
//    return this.searchAndGoToFirstJobID()
    return app.config.domain + '/jobad/english-teacher-100003005557944'

  }


}

module.exports = JobAdPage
