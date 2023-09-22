FROM node:18.17.0-alpine

WORKDIR /app

COPY package*.json nx.json ./

RUN npm install && npm install -g @angular/cli

COPY . .
