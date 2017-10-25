#!/bin/bash

./node_modules/.bin/cucumber-js --dry-run  

if [ "$#" == 1 ]; then

  ./node_modules/.bin/cucumber-js --dry-run -t $1 

else

  ./node_modules/.bin/cucumber-js --dry-run  

fi
