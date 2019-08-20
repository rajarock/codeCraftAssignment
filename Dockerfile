# FROM node as builder
FROM mhart/alpine-node:12.4 as builder
WORKDIR /usr/src/app


RUN apk add --no-cache git
WORKDIR /usr/src/app
ARG BRANCH=dev
RUN git clone -b $BRANCH https://rajarock:Password.123@github.com/rajarock/codeCraftAssignment.git /usr/src/app

WORKDIR /usr/src/app
# RUN npm install && npm run build

RUN yarn --cache-folder ./ycache && rm -rf ./ycache
# RUN echo "$(ls -1 ./ycache/)"

EXPOSE 5000
RUN yarn install && yarn build 

# RUN apk del git

FROM nginx:1.12-alpine
WORKDIR /usr/src/app
# RUN cat /usr/src/app/nginxConfig/default.conf
# COPY /usr/src/app/config/nginxConfig/ /etc/nginx/conf.d/
# COPY /usr/src/app/dist/ /usr/share/nginx/html

# FROM nginx
# COPY --from=builder /usr/src/app/nginxConfig/ /etc/nginx/conf.d/
COPY --from=builder /usr/src/app/build /usr/share/nginx/html/
# EXPOSE 80

RUN rm -rf /usr/src/app/*
RUN echo "$(ls -1 /usr/src/app)"

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



# FROM nginx

# COPY --from=builder /usr/src/app/build /usr/share/nginx/html/
# EXPOSE 80