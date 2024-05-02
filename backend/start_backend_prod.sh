#!/bin/bash
set -a
source .env
set +a
gunicorn -w 100 --keep-alive 50 -k uvicorn.workers.UvicornWorker -b 0.0.0.0:9024 --timeout 320 --access-logfile - --preload main:app
