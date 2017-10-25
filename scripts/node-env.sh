#!/bin/bash
docker exec -it $(docker ps --filter="name=_dev-node" -a -q) /bin/bash
