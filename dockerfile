FROM node:18-slim

RUN npm install -g nodemon

WORKDIR /app

COPY package*.json ./ 

RUN npm install

COPY . .

EXPOSE 5000

CMD ["nodemon", "--watch", "src", "--legacy-watch", "--exec", "ts-node", "src/index.ts"]


#====== For Production =============
# FROM node:18-slim
# RUN npm install -g nodemon
# WORKDIR /app
# COPY package*.json . 
# RUN npm install --production
# COPY dist .
# EXPOSE 5000
# CMD ["nodemon", "-L", "dist/index.js"]