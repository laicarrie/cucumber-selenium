let Page = require('./Page.js')

class JobAdPage extends Page {

  get elements() {

    return {
       
		"ID": this.by.className('jobs_title'),
		"Apply button": this.by.id('applynow'),
		"Save button": this.by.className('save btn_favor '),
		"Share button": this.by.className('share'),
		"Back button": this.by.className('back'),
		"first button": this.by.className('btn btn-first'),
		"previous button": this.by.className('btn btn-prev'),
		"next button": this.by.className('btn btn-next'),

    }
  
  }

  get url() {
  
    return 'https://m.jobsdb.com/en-hk/jobad/development-engineer-working-in-japan-100003005522795'
  
  }

}

module.exports = JobAdPage
