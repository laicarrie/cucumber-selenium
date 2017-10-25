#!/bin/bash

echo "===== STOPING ALL DOCKER CONTAINER ... ====="
docker stop $(docker ps -a -q)
echo ""

echo "===== REMOVING ALL DOCKER CONTAINER ... ====="
docker rm $(docker ps -a -q)
echo ""

echo "===== BUILDING DOCKER-COMPOSE... ====="
docker-compose build
echo ""

echo "===== STARTING DOCKER-COMPOSE... ====="
docker-compose up --scale chrome=5
echo ""
