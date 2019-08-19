FROM node as builder

ARG BRANCH=dev
ARG TOKEN=91f20f0b33ab3c7d7075050bb3abfbbb5a2773be
RUN git clone -b $BRANCH https://rajarock:Rocket.1989@github.com/rajarock/codeCraftAssignment.git /usr/src/app

WORKDIR /usr/src/app
# RUN npm install && npm run build

RUN yarn --cache-folder ./ycache && rm -rf ./ycache
RUN echo "$(ls -1 ./ycache/)"

EXPOSE 5000
RUN yarn install && yarn build 


FROM nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html/
EXPOSE 80