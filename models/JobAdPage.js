let Page = require('../framework/models/Page.js')

class JobAdPage extends Page {

  get elements() {

    return {
       
		"ID": this.by.className('jobs_title'),
		"Apply": this.by.id('applynow'),
		"Save": this.by.className('save btn_favor '),
		"Share": this.by.className('share'),
		"Back": this.by.className('back'),
		"first": this.by.className('btn btn-first'),
		"previous": this.by.className('btn btn-prev'),
		"next": this.by.className('btn btn-next'),

    }
  
  }

  get url() {
  
    return 'https://m.jobsdb.com/en-hk/jobad/english-teacher-100003005557944'
  
  }

}

module.exports = JobAdPage
