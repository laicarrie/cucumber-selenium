let Page = require('./Page.js')

class SearchPage extends Page {

  get elements() {

    return {
       
//      "Search jobs": this.by.xPath("//input[contains(@value,'Log in')]")
		"More options": this.by.linkText('More options')
//		"Search jobs": this.by.id('submitButton')
    }
  
  }

  get url() {
  
    return 'https://m.jobsdb.com/en-hk/search.do'
  
  }

}

module.exports = SearchPage
