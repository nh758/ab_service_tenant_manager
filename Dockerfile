##
## digiserve/ab-tenant-manager:develop
##
## This is our microservice for managing our tenant data and operations.
##
## Docker Commands:
## ---------------
## $ docker build -t digiserve/ab-tenant-manager:develop .
## $ docker push digiserve/ab-tenant-manager:develop
##

FROM digiserve/service-cli:develop

RUN git clone --recursive https://github.com/digi-serve/ab_service_tenant_manager.git app && cd app && git checkout develop && npm install

WORKDIR /app

CMD [ "node", "--inspect=0.0.0.0:9229", "app.js" ]
