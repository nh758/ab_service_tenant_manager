##
## digiserve/ab-tenant-manager
##
## This is our microservice for managing our tenant data and operations.
##
## Docker Commands:
## ---------------
## $ docker build -t digiserve/ab-tenant-manager:master .
## $ docker push digiserve/ab-tenant-manager:master
##

ARG BRANCH=master

FROM digiserve/service-cli:${BRANCH}

COPY . /app

WORKDIR /app

RUN npm i -f

CMD [ "node", "--inspect=0.0.0.0:9229", "app.js" ]
