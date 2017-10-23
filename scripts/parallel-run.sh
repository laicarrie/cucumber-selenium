NODE_ENV=production TEST_CLIENT=chrome TEST_ID=$1 TEST_WORKER=5 node framework/scripts/parallel-run.js \
&& bash tmp-$1.sh \
&& NODE_ENV=production TEST_CLIENT=chrome TEST_ID=$1 TEST_WORKER=5  node framework/scripts/gen-parallel-run-report.js \
&& rm -rf reports/tmp-parallel-$1 \
&& rm tmp-$1.sh 

