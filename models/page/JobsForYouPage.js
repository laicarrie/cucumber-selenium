let Page = require('../../framework/models/Page.js')

class JobsForYouPage extends Page {

  get elements() {

    return {

  		"ID": this.by.xpath('//*[@id="homeStartStates"]'),
      "Title": this.by.xpath('//*[@id="homeStartStates"]/div/div[2]/h2'),
      "Job Ad title": this.by.className('ng-binding'),
      "View": this.by.className('searchResults_area'),
      "Save": this.by.className('btn_favor'),
      "Search jobs": this.by.className('startstate-tosearch'),
    }


  }

  get url() {

    return app.config.domain + '/jobsForYou.do'

  }
}

module.exports = JobsForYouPage
