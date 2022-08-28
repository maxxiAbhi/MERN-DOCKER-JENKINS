FROM node:16-alpine
WORKDIR /backend/
COPY package*.json /backend/
RUN npm install
COPY . .
EXPOSE 8000
CMD [ "npm", "run", "start" ]