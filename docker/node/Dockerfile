FROM node:12-alpine
WORKDIR /usr/src/app
copy ./src/ .
RUN rm -rf node_modules
RUN npm install
RUN npm install -g sequelize-cli
RUN npm install -g nodemon
cmd ["nodemon","index.js"]