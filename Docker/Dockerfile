# Description : Dockerfile for building the image for webmarks
# Version : 1.0
# Date Created : 19 October 2016\
# Author : Amit Kumar Jaiswal

FROM node:argon

MAINTAINER Amit Kumar Jaiswal <amitkumarj441@gmail.com>

####### Build #######

# Create app directory
RUN mkdir -p /usr/share/worldbrain-client
WORKDIR /usr/share/worldbrain-client

# Install app dependencies
COPY package.json /usr/share/worldbrain-client
RUN npm install

# Bundle app source
COPY ./build /usr/share/worldbrain-client

EXPOSE 8080
CMD [ "npm", "start" ]
