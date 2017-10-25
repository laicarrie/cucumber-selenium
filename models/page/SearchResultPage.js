let Page = require('../../framework/models/Page.js')

class SearchResultPage extends Page {

  get elements() {

    return {
        "ID": this.by.id('searchResultPage'),
//      "Search jobs": this.by.xPath("//input[contains(@value,'Log in')]")
		    "Edit Search": this.by.linkText('Edit Search'),
		    "keyword at the title": this.by.xpath('//title[contains(text(), `${keyword}`)]'),
        "Search Criteria": this.by.xpath('//*[@id="searchResultPage"]/div[1]/h1/span'),
		    "Job Ad title": this.by.className('job_detail_link'),
		    "View": this.by.className('searchResults_area'),
        "Save": this.by.className('btn_favor'),
        "Current page": this.by.xpath('//a[contains(@class, "current")]'),
        "Next page": this.by.linkText('>'),
        "Previous page": this.by.linkText('<')
    }

  }

  get url() {
    let view = new SearchPage(app.driver)
//    return ''
    return view.getAllJobSRP_url()

  }


  savedOrNot(jobNo, status) {
    let number = jobNo - 1
    let elementId

//    if (status == "saved") { elementId = this.by.xpath(`//*[@id="searchResults_area_`+ number + `"]/div/a[1][@class="btn_favor btn_on"]`) }
//    if (status == "unsaved") { elementId = this.by.css(`.//*[@id="searchResults_area_`+ number + `"]/div/a[1][@class="btn_favor.btn_off"]`) }
    if (status == "unsaved") { elementId = this.by.css(`div[data-offset="` + number + `"] a.btn_favor.btn_off`) }
    if (status == "saved") { elementId = this.by.css(`div[data-offset="` + number + `"] a.btn_favor`) }

    return this.locate(elementId)
      .then(function (element) {

        console.log(element)
        return element.getAttribute("class")

      })
      .then(function(cssClass) {

        console.log(cssClass)
        return

      })
  }

  goToNextPage () {

    return this.locate("Next page")
      .then( () => {
        return this.scrollTo("Next page")
      })
      .then ( () => {
        return this.click("Next page")
      })
  }

  goToPreviousPage () {

    return this.locate("Previous page")
      .then( () => {
        return this.scrollTo("Previous page")
      })
      .then( () => {
        return this.click("Previous page")
      })
  }

}

module.exports = SearchResultPage
