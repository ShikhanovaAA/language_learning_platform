FROM node:18.17.0-alpine

WORKDIR /app

COPY package*.json ./
COPY nx.json ./

RUN npm install
RUN npm install -g @angular/cli

COPY . .
