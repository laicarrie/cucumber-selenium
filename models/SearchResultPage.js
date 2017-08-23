let Page = require('./Page.js')

class SearchResultPage extends Page {

  get elements() {

    return {
       	"ID": this.by.xpath('//title[contains(text(), "jobs for all jobs")]'),
//      "Search jobs": this.by.xPath("//input[contains(@value,'Log in')]")
		"Edit Search button": this.by.linkText('Edit Search')
    }
  
  }

  get url() {
  
    return ''
  
  }

}

module.exports = SearchResultPage
