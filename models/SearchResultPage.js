let Page = require('./Page.js')

class SearchResultPage extends Page {

  get elements() {

//  	console.log(Object.keys(this.by));
    return {
       
//      "Search jobs": this.by.xPath("//input[contains(@value,'Log in')]")
		"Edit Search": this.by.id('editSearch')
    }
  
  }

  get url() {
  
    return ''
  
  }

}

module.exports = SearchResultPage
