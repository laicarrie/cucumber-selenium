let readline = require('readline')
let fs= require('fs')
let Promise = require('bluebird')
let _ = require('underscore')

class LineReader {

  constructor(file) {
  
    this.file = file
    this.json = []
    this.count = 0
    this.lastDescription = ''
    this.lastExample = ''
    this.argsDesc = {}
  
  }

  run() {

    return new Promise( (resolve, reject) => {

      let lineReader = readline.createInterface({
        input: fs.createReadStream(this.file) 
      })
  
      lineReader.on('line', (line) =>{

        this.count++ 

        let desc = this.matchDescription(line)

        if (desc) { this.lastDescription = desc }

        let example = this.matchExample(line)

        if (example) { this.lastExample = example }

        let argDesc = this.matchArg(line) 

        if (argDesc) { Object.assign(this.argsDesc, argDesc) }

        let matchGerkin = this.matchGerkin(line)
      
        if (matchGerkin) {
          
          let definition = matchGerkin
          definition.file = this.file
          definition.line = this.count
          definition.description = this.lastDescription 
          definition.example = this.lastExample 
          definition.argDescription = this.argsDesc 

          this.lastDescription = ''
          this.lastExample = ''
          this.argsDesc = {}
        
          this.json.push(definition)
        }

      })

      lineReader.on('close', () =>{
          
        return resolve(this.json)

      })

    })
 
  }

  matchDescription(line) {
  
    let result = line.match(/@description (.*)/)
  
    return result ? result[1] : null 
  }

  matchExample(line) {
  
    let result = line.match(/@example (.*)/)

    return result ? result[1] : null 

  }

  matchArg(line) {
  
    let result = line.match(/@param ([a-zA-Z]*) (.*)/)

    if (!result) return null

    let key = result[1]
    let tmp = {}
    tmp[result[1]] = result[2] 

    return result ? tmp : null
  
  } 

  matchGerkin(line) {
  
    let result = line.match(/^[^\/]*(Given|When|Then)\(('|"|\/)(.*)(?:'|"|\/)(?:.*),(?:.*)function\((.*)\)/)

    if (!result) return null 

    let flow = result[1] //Give / When / Then
    let isRegex = result[2] == "/"
    let definition = result[3] //e.g. I fill {noQouteString} to {noQouteString}}}
    let args = result[4] //e.g. sample, elementId

    args = args.match(/(\w+)(,\s*\+)*/g)
   
    if (!isRegex) {

      result = definition.match(/{[^{}]*}/g)

      if (result) {
        result = result.map( (match) => match.replace(/([{}])/g, ''))
      }

    }else {

      result = definition.match(/\([^\(\)]*\)/g)
     
    }
    
    let argTypes = result ? result : []

    return {
      flow,
      isRegex,
      definition,
      argTypes,
      args
    } 
  }



}

class StepListGenerator {

  constructor() {
 
    this.json = []
    this.jsonPath = './tools/stepList.json'


  }

  get files() {
  
    return ['./features/step_definitions/browser_steps.js']

  }



  exportJSON() {
  
    return new Promise( (resolve, reject) => {

      fs.writeFile(this.jsonPath, JSON.stringify(this.json), (err) => {

        return resolve(this.json) 

      }) 
   
    })

  }
  
  exportHTML() {

    let indexTemp = './framework/templates/index.tmpl'

    fs.writeFileSync(
      './tools/index.html',
      _.template(fs.readFileSync(indexTemp, 'utf-8'))({
        definitions: this.json
//      suite: suite,
//      features: getFeaturesTemplate(suite),
//      styles: readFileForRespectiveTemplates('style.css'),
//      script: readFileForRespectiveTemplates('script.js'),
//      screenshot: readFile('../_common/screenshot.js'),
//      piechart: ((options.theme === 'bootstrap') || (options.theme === 'hierarchy')) ? readFileForRespectiveTemplates('piechart.js') : undefined
      })
    );      
 
  }

  run() {
  
    return Promise.map(this.files, (file) => { let reader = new LineReader(file); return reader.run()})
      .then( (jsons) => {

        jsons.forEach( (json) => this.json = this.json.concat(json) )
     
        return this.exportJSON() 

      })
      .then( () => {

        return this.exportHTML()

      })

  }

}

module.exports = StepListGenerator
