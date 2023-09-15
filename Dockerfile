From --platform=linux/amd64 node:20-alpine as build

RUN mkdir /var/app

WORKDIR /var/app

copy package.json /var/app

RUN npm install

copy . /var/app

EXPOSE 3000

CMD ["node", "index.mjs"]