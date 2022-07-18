#Build
FROM node:lts-buster AS builder
ENV DEBIAN_FRONTEND noninteractive
WORKDIR /opt/web
COPY package*.json ./
RUN npm install
ENV PATH="./node_modules/.bin:$PATH"
COPY . ./

#Serve
FROM nginx:1.18
COPY ./nginx.config /etc/nginx/conf.d/default.conf
COPY --from=builder /opt/web/ /usr/share/nginx/html