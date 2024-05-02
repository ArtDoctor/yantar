#!/bin/bash

set -e
apt-get update
apt-get upgrade
apt-get dist-upgrade

# install pip and venv
apt-get install python3-pip
apt install python3.10-venv
pip install --upgrade pip
pip install virtualenv

bash setup_venv.sh

bash get-docker.sh

bash install_gcloud.sh
# don't forget to authorize in new terminal
# bash google_authorize.sh
