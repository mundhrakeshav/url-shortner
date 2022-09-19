FROM node:16-alpine
WORKDIR "/app"
COPY package.json .
RUN npm install
COPY . .

RUN npm install -g pm2

RUN npm run build

# CMD ["node", "build/src/app.js"]
CMD ["pm2-runtime", "process.json"]
