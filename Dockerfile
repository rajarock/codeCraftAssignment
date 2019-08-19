# FROM node as builder
FROM mhart/alpine-node:12.4 as builder
WORKDIR /usr/src/app


RUN apk add --no-cache git
WORKDIR /usr/src/app
ARG BRANCH=dev
ARG TOKEN=91f20f0b33ab3c7d7075050bb3abfbbb5a2773be
RUN git clone -b $BRANCH https://rajarock:Rocket.1989@github.com/rajarock/codeCraftAssignment.git /usr/src/app

WORKDIR /usr/src/app
# RUN npm install && npm run build

RUN yarn --cache-folder ./ycache && rm -rf ./ycache
# RUN echo "$(ls -1 ./ycache/)"

EXPOSE 5000
RUN yarn install && yarn build 

# RUN apk del git

FROM nginx:1.12-alpine
WORKDIR /usr/src/app
# COPY /usr/src/app/config/nginxConfig/ /etc/nginx/conf.d/
# COPY /usr/src/app/dist/ /usr/share/nginx/html

# FROM nginx
COPY /usr/src/app/nginxConfig/ /etc/nginx/conf.d/
COPY /usr/src/app/build /usr/share/nginx/html/
# EXPOSE 80

RUN rm -rf /usr/src/app/*
RUN echo "$(ls -1 /usr/src/app)"

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



# FROM nginx

# COPY --from=builder /usr/src/app/build /usr/share/nginx/html/
# EXPOSE 80