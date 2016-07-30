FROM node:6
RUN mkdir -p /usr/share/worldbrain-client
WORKDIR /usr/share/worldbrain-client
COPY package.json /usr/share/worldbrain-client
RUN npm install
COPY ./build /usr/share/worldbrain-client
EXPOSE 3000
CMD [ "npm", "start" ]
