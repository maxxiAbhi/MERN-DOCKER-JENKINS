# Stage 1
FROM node:16-alpine as build-stage
WORKDIR /admin
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:1.17.0-alpine
COPY --from=build-stage /admin/build /usr/share/nginx/html
EXPOSE 80
CMD nginx -g 'daemon off;'