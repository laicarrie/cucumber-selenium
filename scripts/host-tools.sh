docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

docker-compose -f docker-compose-tools.yml build 

docker-compose -f docker-compose-tools.yml up -d
