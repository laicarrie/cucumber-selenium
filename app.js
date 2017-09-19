let fs = require('fs')
let deepExtend = require('deep-extend')
let Promise = require('bluebird')
let colors = require('colors')
let seleniumWebdriver = require('selenium-webdriver')
let chrome = require('selenium-webdriver/chrome')
let firefox = require('selenium-webdriver/firefox')
let reporter = require('cucumber-html-reporter')
let chromedriver = require('chromedriver')


class App {

  constructor() {

    this._defaultPageRouting = {}
    this._defaultModuleRouting = {}
    this._defaultTransformerRouting = {}

  }

  get defaultPageRouting() {return this._defaultPageRouting}

  get defaultModuleRouting() {return this._defaultModuleRouting}

  get defaultTransformerRouting() {return this._defaultTransformerRouting}

  importDir(dirPath) {

    let obj = {}

    fs.readdirSync(dirPath + '/').forEach( (file) => {

      if (file.match(/\.js$/) !== null && file !== 'index.js') {

        let name = file.replace('.js', '');
        obj[name] = require(`${dirPath}/` + file);

      }

    })

    return obj

  }

  loadConfig() {

    let configFile = this.importDir('./config');

    let envConfig = {};
    if (process.env.NODE_ENV) { envConfig = require(`./config/env/${process.env.NODE_ENV}.js`); }

    this.config = deepExtend({}, configFile, envConfig);

  }

  loadPage() {

    this.pages = this.importDir('./models/page')

    Object.keys(this.pages).forEach((key) => {

      if (key.match(/Page$/)){

        //conversion e.g. SearchResultPage to Search Result
        let tmpKey = key.replace('Page', '').replace(/([A-Z])/g, ' $1').substring(1)
        this._defaultPageRouting[tmpKey] = this.pages[key]
      }
    })
  }

  loadModule() {

    this.modules = this.importDir('./models/module')

    Object.keys(this.modules).forEach((key) => {

      if (key.match(/Module$/)){

        //conversion e.g. SearchResultPage to Search Result
        let tmpKey = key.replace('Module', '').replace(/([A-Z])/g, ' $1').substring(1)
        this._defaultModuleRouting[tmpKey] = this.modules[key]
      }
    })
  }

  loadTransformer(){
    this.transformers = this.importDir('./models/transformer')
    Object.keys(this.transformers).forEach((key) => {
      if (key.match(/Transformer$/)) {

        //conversion PageTransformer to Page
        let tmpKey = key.replace('Transformer', '').replace(/([A-Z])/g, ' $1').substring(1)
        this._defaultTransformerRouting[tmpKey] = this.transformers[key]
      }
    })
  }

  prepare() {

    this.loadConfig()
    this.loadPage()
    this.loadModule()
    this.loadTransformer()

  }

  exportToContext(context) {

    context.app = this

    Object.keys(this.pages).forEach( (key) => {

      context[key] = this.pages[key]

    })

    Object.keys(this.modules).forEach( (key) => {

      context[key] = this.modules[key]

    })

    Object.keys(this.transformers).forEach( (key) => {

      context[key] = this.transformers[key]

    })

  }


  initDriver() {
    let server = this.config.server
    let client = this.config.client[this.config.testClient]

    if (client.browser == 'localchrome') {

      this.driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build()
    }else {
      let opts
      if (client.browser == 'chrome') { opts = new chrome.Options(); }
      if (client.browser == 'firefox') { opts = new firefox.Options(); }

      if (client.optsArguments) { opts.addArguments(client.optsArguments) }

      this.driver = new seleniumWebdriver.Builder()
          .withCapabilities(opts.toCapabilities())
          .usingServer(`http://${server.host}:${server.port}/wd/hub`)
          .build()
    }

    if (client.width && client.height) { this.driver.manage().window().setSize(client.width, client.height) }
    return this.driver

  }

  quitDriver() {

    return this.driver.quit();

  }

  //helper
  trans(type, key){

    let transformerClass = app.defaultTransformerRouting[type]

    let transformer = new transformerClass()
    let value = transformer.transform(key)
    return value ? value : key
  }


  genHTMLReport() {

    let client = this.config.client[this.config.testClient]
    let date = new Date()
    date = date.toDateString()

    let reportName = `${this.config.testClient}`

    let options = {
      theme: 'bootstrap',
      jsonFile: `reports/json/${reportName}.json`,
      output: `reports/html/${reportName}.html`,
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
          "App Version":"0.3.2",
          "Server Host" : this.config.server.host,
          "Client Name" : this.config.testClient,
          "Test Environment": process.env.NODE_ENV,
          "Browser": client.browser,
          "Platform": "Mac OS",
          "Parallel": "Scenarios",
          "Executed": "Remote"
      }
    }

    reporter.generate(options);

  }

}

module.exports = App
