# Build stage

FROM node:22-alpine AS build

# working dir
WORKDIR /app

# current dir
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Produciton Stage

FROM node:22-alpine 

WORKDIR /app

RUN npm i -g serve
ENV PATH="/usr/local/bin:$PATH"
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD [ "serve", "-s", "dist", "-l", "3000"]