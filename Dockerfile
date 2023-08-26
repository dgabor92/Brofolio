FROM node:16.3.0-alpine3.13

RUN mkdir -p /var/www/html/coaching

WORKDIR /var/www/html/coaching

COPY package.json /var/www/html/coaching

RUN npm install --legacy-peer-deps

COPY . /var/www/html/coaching

EXPOSE 3000
CMD ["npm", "run", "start"]