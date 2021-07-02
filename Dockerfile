##
## digiserve/ab-tenant-manager:master
##
## This is our microservice for managing our tenant data and operations.
##
## Docker Commands:
## ---------------
## $ docker build -t digiserve/ab-tenant-manager:master .
## $ docker push digiserve/ab-tenant-manager:master
##

FROM digiserve/service-cli:master

RUN git clone --recursive https://github.com/appdevdesigns/ab_service_tenant_manager.git app && cd app && npm install

WORKDIR /app

CMD [ "node", "--inspect=0.0.0.0:9229", "app.js" ]
