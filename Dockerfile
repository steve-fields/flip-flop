FROM node:lts

WORKDIR /usr/src/app

ADD . /usr/src/app

RUN yarn
RUN yarn build

CMD [ "yarn", "start", "--host", "0.0.0.0"]



