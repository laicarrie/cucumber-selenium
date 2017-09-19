let Page = require('../../framework/models/Page.js')

class ApplyPage extends Page {

  get elements() {

    return {
        "ID": this.by.id('applyJobPage'),
//      "Search jobs": this.by.xPath("//input[contains(@value,'Log in')]")
        "Back": this.by.className('back'),
		    "Resume list": this.by.id('resume'),
        "Cover Letter list": this.by.id('coverLetterId'),
        "First Name": this.by.id('txtfirstName'),
        "Last Name": this.by.id('txtLastName'),
        "Live in (level 1) list": this.by.id('liveIn'),
        "Live in (level 2) list": this.by.id('locationLv2'),
        "Live in (level 3) list": this.by.id('locationLv3'),
        "Work Permit list": this.by.id('workPermit'),
        "Highest Education list": this.by.id('highestEducation'),
        "Country code list": this.by.id('zoneCode'),
        "Contact no.": this.by.id('txtContactNo'),
        "Total year of experience": this.by.id('yrsOfExp'),
        "Latest Job Title": this.by.id('txtLatestJobTitle'),
        "Latest Job Function (level 1) list": this.by.id('latestJobFunction'),
        "Latest Job Function (level 2) list": this.by.id('jobFunctionLv2'),
        "Latest Job Industry list": this.by.id('latestJobIndustry'),
        "Latest employer": this.by.id('txtLatestemployer'),
        "Employment period (from - month)": this.by.id('startMonth'),
        "Employment period (from - year)": this.by.id('startYear'),
        "Employment period (until - month)": this.by.id('untilMonth'),
        "Employment period (until - year)": this.by.id('untilYear'),
        "Apply": this.by.id('doApply'),


//		    "keyword at the title": this.by.xpath('//title[contains(text(), `${keyword}`)]'),

    }

  }

  get url() {

    return ''

  }



}

module.exports = ApplyPage
