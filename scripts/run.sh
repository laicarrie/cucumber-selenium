#!/bin/bash

if [ "$#" == 0 ]; then

  echo "No arguments supplied"
  exit 1

fi

mkdir -p ./reports/$1

if [ "$#" == 3 ]; then

  filename="$2-$3"
  filename="${filename/ /_}"
  filename="${filename/\"/}"

  NODE_ENV=$1 TEST_CLIENT=$2 ./node_modules/.bin/cucumber-js -t "$3" -f json:reports/$1/$filename.json

else

  filename=$2
  NODE_ENV=$1 TEST_CLIENT=$2 ./node_modules/.bin/cucumber-js -f json:reports/$1/$filename.json

fi

NODE_ENV=$1 TEST_CLIENT=$2 JSON_FILE_PATH=$filename node scripts/genReport.js
