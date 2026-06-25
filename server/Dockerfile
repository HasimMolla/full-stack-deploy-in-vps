FROM node:22-alpine  

# apline version of node sprink

# working dir
WORKDIR /app

# current dir
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ] 