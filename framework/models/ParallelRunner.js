let fs = require('fs');
let Promise = require('bluebird')
let _ = require('underscore')
let reporter = require('cucumber-html-reporter');

class ParallelRunner {

  constructor(id, numWorker, environment, client, tags) {
  
    this.id = id
    this.reportPath = `reports/tmp-parallel-${this.id}`

    this.numWorker = numWorker;
    this.workerIndex = 0;
    this.workers = []

    this.environment = environment
    this.client = client 
    this.tags = tags 

    this.dirPaths = [ 'features/page', 'features/story', 'features/bug' ]
  }

  getTestPaths(dir) {

    return new Promise(function(resolve, reject) {

      fs.readdir(dir, (err, files) => {
       
        if (err) {
       
          return reject(err)
        
        }

        files = files.map( (file) => `${dir}/${file}` )
        return resolve(files)
     
      })

    })
       
  }

  addPathToWorker(path) {

    if (!this.workers[this.workerIndex] || !Array.isArray(this.workers[this.workerIndex])) {
    
      this.workers[this.workerIndex] = []

    }

    this.workers[this.workerIndex].push(path) 
  
    this.workerIndex++

    if (this.workerIndex >= this.numWorker) {
    
      this.workerIndex = 0

    }

  }

  exportScript(commands) {

    let template = './framework/templates/parallel-run.tmpl'

    fs.writeFileSync(
      `./tmp-${this.id}.sh`,
      _.template(fs.readFileSync(template, 'utf-8'))({
        commands: commands,
        reportPath: this.reportPath
      })
    );      
 
  
  }

  commandize(worker, index) {
  
    return `NODE_ENV=${this.environment} TEST_CLIENT=${this.client} ./node_modules/.bin/cucumber-js ${worker.join(' ')} -f json:${this.reportPath}/${index}.json &`

  }

  run() {
    
    return Promise.map(this.dirPaths, (path) => this.getTestPaths(path))
      .then( (testPathsArray) => {

         testPathsArray.forEach( (testPaths) => {
         
           testPaths.forEach( (testPath) => {
            
              this.addPathToWorker(testPath)

           })

         })

         return this.workers
      })
      .then( (workers) => {

        let commands = workers.map( (worker, idx) => {

          return this.commandize(worker, idx)

        })        
      
        return commands
      })
      .then( (commands) => {

        this.exportScript(commands)
      
      })

  }

  genReport() {

    var options = {
      theme: 'bootstrap',
      jsonDir: this.reportPath,
      output: `./reports/${this.id}.html`,
      reportSuiteAsScenarios: true,
      launchReport: true,
    };
     
    reporter.generate(options); 
  }

}

module.exports = ParallelRunner
