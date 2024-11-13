FROM node:20.17.0-alpine

RUN mkdir -p /srv/app/core
WORKDIR /srv/app/core

ARG TIMEZONE

RUN apk --no-cache add tzdata \
&& ln -snf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime

RUN npm i -g @nestjs/cli@10.1.16

CMD ["npm", "run", "start:dev"]