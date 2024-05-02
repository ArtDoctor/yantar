#!/bin/bash

set -a
source ../.env
set +a

docker compose -f docker-compose-prod-networking.yml up -d
