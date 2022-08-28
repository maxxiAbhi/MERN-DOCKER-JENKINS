FROM node:16-alpine as build-stage
WORKDIR /admin
COPY package.json .
RUN npm install
COPY . .
RUN npm run build