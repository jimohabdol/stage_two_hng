FROM --platform=linux/amd64 node:20-alpine as build

# Create app directory
RUN mkdir /var/movable/ && mkdir /var/movable/app
WORKDIR /var/movable/app

RUN npm install

COPY . /var/app

EXPOSE 3000

CMD ["node", "index.mjs"]