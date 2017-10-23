let Page = require('../../framework/models/Page.js')

class SearchPage extends Page {

  get elements() {

    return {

  		"ID": this.by.xpath('//title[contains(text(), "Search and apply jobs")]'),
  		"Keyword field": this.by.id('txtKeyword'),
  		"Job function dropdown list": `//*[@id="jobFunctionId"]/`,
  		"Monthly": this.by.className('left spanFour blueDiv'),
  		"Hourly": this.by.className('right spanFour blueDiv'),
  		"minimum salary": this.by.xpath('salaryF'),
      "Minimum salary dropdown list": `//*[@id="salaryF"]/`,
  		"maximum salary": this.by.id('salaryT'),
      "Maximum salary dropdown list": `//*[@id="salaryT"]/`,
  		"More options": this.by.linkText('More options'),
  		"Search jobs": this.by.id('submitButton'),
  		"Location list": this.by.id('locationId'),
      "Location dropdown list": `//*[@id="locationId"]/`,
  		"(From) Career level dropdown list": `//*[@id="careerLevelFromId"]/`,
  		"(To) Career level dropdown list": `//*[@id="careerLevelToId"]/`,
  		"Employment type dropdown list": `//*[@id="employmentTermId"]/`,
  		"Industry dropdown list": `//*[@id="industryId"]/`,
      "Clear all": this.by.id('ClearAll'),
    }


  }

  get url() {

    return app.config.domain + '/search.do'

  }

  checkSalaryFrom (elementId, from){

    let optionPath
    if (elementId == "minimum salary") { optionPath = this.by.xpath('//*[@id="salaryF"]/option[1]') }
    if (elementId == "maximum salary") { optionPath = this.by.xpath('//*[@id="salaryT"]/option[1]') }

    return this.checkText(optionPath, from)
  }


  checkSalaryTo (elementId, to){

    let optionPath
    if (elementId == "minimum salary") { optionPath = this.by.xpath('//*[@id="salaryF"]/option[10]') }
    if (elementId == "maximum salary") { optionPath = this.by.xpath('//*[@id="salaryT"]/option[10]') }

    return this.checkText(optionPath, to)
  }


  getAllJobSRP_url(){

    return this.go()
    .then( () => {
      return this.click("Search jobs")
      .then( () => {
        return this.driver.getCurrentUrl()
      })
    })
  }


}

module.exports = SearchPage
