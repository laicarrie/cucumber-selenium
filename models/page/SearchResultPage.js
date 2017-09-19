let Page = require('../../framework/models/Page.js')

class SearchResultPage extends Page {

  get elements() {

    return {
        "ID": this.by.id('searchResultPage'),
//      "Search jobs": this.by.xPath("//input[contains(@value,'Log in')]")
		    "Edit Search": this.by.linkText('Edit Search'),
		    "keyword at the title": this.by.xpath('//title[contains(text(), `${keyword}`)]'),
		    "job(s) for": this.by.xpath('//*[@id="searchResultPage"]/div[1]/h1/span'),
		    "Job Ad title": this.by.className('job_detail_link'),
		    "Job Ad": this.by.id('searchResults_area_X')
    }

  }

  get url() {

    return ''

  }


  containSearchCriteria (text) {
  	let xpath = this.by.xpath(`//span[contains(text(), '${text}')]`)
  	return this.locate(xpath, 5000)
  }

// N should be within 0-9
  goToNthJobAd (N) {
    let elementId = this.by.id('searchResults_area_' + N)

    return this.scrollTo(elementId)
      .then( () => {
        return this.click(elementId)
    })

  }


}

module.exports = SearchResultPage
//*[@id="searchResultPage"]
