let ParallelRunner = require('../models/ParallelRunner.js')

let runner = new ParallelRunner(process.env.TEST_ID, process.env.TEST_WORKER, process.env.NODE_ENV, process.env.TEST_CLIENT, process.env.TEST_TAG)

runner.run()
