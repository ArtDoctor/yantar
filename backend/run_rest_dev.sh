#!/bin/bash
set -a
source .env
source venv/bin/activate
set +a
gunicorn main:app -w 2 -k uvicorn.workers.UvicornWorker --bind localhost:9023 --reload --timeout 120 --access-logfile -
