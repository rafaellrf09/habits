FROM node:18.18.2

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

COPY .env-dev ./.env

EXPOSE 3333

RUN npm run db:push

CMD ["npm", "run", "dev"]