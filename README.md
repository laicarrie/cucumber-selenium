HOW TO USE
==========

DOCKERIZED TEST
---------------
1. install docker
Please google how to install docker in your host

2. start the whole architecture
    (*when need to rebuild) docker-compose build
    docker-compose up

3. get inside the dev-node container. e.g: docker exec -it cucumber_dev-node_1 /bin/bash

    docker exec -it $(foldername)_dev-node_1 /bin/bash
    e.g. docker exec -it cucumberselenium_dev-node_1 /bin/bash

4. run test. feel free to check package.json
	// run all tests with TEST_CLIENT=chrome
    NODE_ENV=local TEST_CLIENT=chrome npm run test

    // run tests that are not tagged as @Android with TEST_CLIENT=iPhone6S_9_0_chrome
    NODE_ENV=local TEST_CLIENT=iPhone6S_9_0_chrome ./node_modules/.bin/cucumber-js --tags "not @Android"

    // run tests on HK stage environment that tagged as @test
    NODE_ENV=stg-hk TEST_CLIENT=iPhone6S_9_0_chrome ./node_modules/.bin/cucumber-js --tags @test

    // run specific feature file tests on HK stage
    NODE_ENV=stg-hk TEST_CLIENT=iPhone6S_9_0_chrome ./node_modules/.bin/cucumber-js features/Search.feature
5. if you need to restart everything. WARNING: this will stop all your containers. Be aware if you are using containers in other project

    docker stop $(docker ps -a -q)
    docker rm $(docker ps -a -q)

6. Generate report
	NODE_ENV=local TEST_CLIENT=iPhone6S_9_0_chrome node generateReport.js
  NODE_ENV=stg-hk TEST_CLIENT=iPhone6S_9_0_chrome node generateReport.js

DEV. REMARK
-----------

## app
1. App is a class handling the whole framework. Some key phases' implementation are also inside.
2. Any other component setup can be implemented there and call in the prepare phase
3. the instance of App (app) is exported to global, so it is accessible any where like other frameworks.

## models
1. they are the page objects.
2. Page should be the superclass of every page
3. every common features of page objects should be implemented in superclass.
4. Other page objects should be implemented like a config file.

## config
1. files under config directory and file matched the NODE_ENV in /env will be merged deeply.
2. the merged object can be accessed by app.config

## features
1. mainly follow the cucumber folder structure.

CHANGE LOG
==========

20/8
1. Alpha phase. basic framework structure.
# cucumber-selenium
