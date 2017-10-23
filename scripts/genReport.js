var reporter = require('cucumber-html-reporter');
 
let env = process.env.NODE_ENV ? process.env.NODE_ENV : 'local'
let client = process.env.TEST_CLIENT? process.env.TEST_CLIENT : 'chrome'
let filename = process.env.JSON_FILE_PATH

var options = {
  theme: 'bootstrap',
  jsonFile: `./reports/${env}/${filename}.json`,
  output: `./reports/${env}/${filename}.html`,
  reportSuiteAsScenarios: true,
  launchReport: true,
};
 
reporter.generate(options);
