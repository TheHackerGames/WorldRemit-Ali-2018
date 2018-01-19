#!/usr/bin/env bash

echo "Login into Docker"
az acr login --name hackthonconreg --resource-group hackergames-rg-wr
eval "$login_command"

echo "Build latest version of the application"
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo $DIR

docker build -t ally .
echo "Push the latest version of docker to REPO"
docker tag ally hackthonconreg.azurecr.io/ally:v1
docker push hackthonconreg.azurecr.io/ally:v1

echo "Done"