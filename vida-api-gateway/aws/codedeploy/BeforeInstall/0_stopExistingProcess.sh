#!/bin/sh

deployment_dir=/opt/vida-microservices/vida-api-gateway
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  # cd /opt/vida-microservices/vida-api-gateway
  cd $deployment_dir

  # we have to do this because it throws an error if it can't find the process... and then the whole build breaks
  # node -e 'try{require("child_process").execSync("pm2 stop vida-api-gateway")}catch(e){}';
  pm2 stop vida-api-gateway || true
fi
