let Page = require('./Page.js')

class SearchResultPage extends Page {

  get elements() {

    return {
//       	"ID": this.by.xpath('//title[contains(text(), "jobs for")]'),
       	"ID": this.by.xpath('//*[@id="searchResultPage"]'),
//      "Search jobs": this.by.xPath("//input[contains(@value,'Log in')]")
		"Edit Search button": this.by.linkText('Edit Search'),
		"keyword at the title": this.by.xpath('//title[contains(text(), `${keyword}`)]'),
		"job(s) for": this.by.xpath('//*[@id="searchResultPage"]/div[1]/h1/span'),
		"Job Ad title": this.by.className('job_detail_link'),
		"1st Job Ad": this.by.id('searchResults_area_0')
    }
  
  }

  get url() {
  
    return ''
  
  }


  containSearchCriteria (text) {
  	let xpath = this.by.xpath(`//span[contains(text(), '${text}')]`)
  	return this.waitAndLocate(xpath, 5000)
  }
  

}

module.exports = SearchResultPage
//*[@id="searchResultPage"]