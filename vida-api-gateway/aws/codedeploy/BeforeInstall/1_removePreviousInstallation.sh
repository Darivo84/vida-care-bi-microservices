#!/bin/sh

deployment_dir=/opt/vida-microservices
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  # cd /opt/vida-microservices/vida-api-gateway

  # rm -rf *
  rm -rf $deployment_dir
fi
