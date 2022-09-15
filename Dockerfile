FROM node:16-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -g wrangler
RUN npm i -g webpack
COPY . .
CMD ["npm", "run", "publish"]