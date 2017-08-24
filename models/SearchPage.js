let Page = require('./Page.js')

class SearchPage extends Page {

  get elements() {

    return {

		"ID": this.by.xpath('//title[contains(text(), "Search and apply jobs")]'),
		"Keyword field": this.by.id('txtKeyword'),
		"Job function list": this.by.id('jobFunctionId'),
		"More options": this.by.linkText('More options'),
		"Search jobs button": this.by.id('submitButton'),
		"Location list": this.by.id('locationId'),
		"Career level from list": this.by.id('careerLevelFromId'),
		"Career level to list": this.by.id('careerLevelToId'),
		"Employment type list": this.by.id('employmentTermId'),
		"Industry list": this.by.id('industryId')
    }
  

  }

  get url() {
  
    return 'https://m.jobsdb.com/en-hk/search.do'
  
  }

}

module.exports = SearchPage
