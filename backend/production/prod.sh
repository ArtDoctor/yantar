#!/bin/bash

set -a
source ../.env

cd ..
bash build_docker.sh
cd production/

docker compose -f docker-compose-prod.yml up -d
