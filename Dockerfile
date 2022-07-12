FROM node:16.15.0-alpine 

WORKDIR /test
COPY package.json /test
COPY package-lock.json /test



RUN npm install

COPY / /test

RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 3000
