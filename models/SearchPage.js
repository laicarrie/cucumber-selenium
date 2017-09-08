let Page = require('../framework/models/Page.js')

class SearchPage extends Page {

  get elements() {

    return {

		"ID": this.by.xpath('//title[contains(text(), "Search and apply jobs")]'),
		"Keyword field": this.by.id('txtKeyword'),
		"Job function list": this.by.id('jobFunctionId'),
		"Monthly": this.by.className('left spanFour blueDiv'),
		"Hourly": this.by.className('right spanFour blueDiv'),
		"minimum salary": this.by.id('salaryF'),
		"maximum salary": this.by.id('salaryT'),
		"More options": this.by.linkText('More options'),
		"Search jobs": this.by.id('submitButton'),
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
// //*[@id="salaryF"]/option[1]
  checkSalaryMin (elementID, from){
  	let minOptionPath
  	if (elementID == "minimum salary") { minOptionPath = this.by.xpath('//*[@id="salaryF"]/option[contains(@value, "0")]') }
  	if (elementID == "maximum salary") { minOptionPath = this.by.xpath('//option[contains(@value, "10999")]') }

  	return this.waitAndLocate(minOptionPath, 5000).getText()
    .then( (text) => {
    	if (text == from) { return }
  	})
  }

  checkSalaryMax (elementID, to){
  	let maxOptionPath
  	if (elementID == "minimum salary") { maxOptionPath = this.by.xpath('//option[contains(@value, "120000")]')}
  	if (elementID == "maximum salary") { maxOptionPath = this.by.xpath('//option[contains(@value, "2147483647")]') }

  	return this.waitAndLocate(maxOptionPath, 5000).getText()
  	.then( (text) => {
  		if (text == to) { return }
  	})
  }


}

module.exports = SearchPage
