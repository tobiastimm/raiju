FROM keymetrics/pm2:8-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Clean Caches
RUN npm cache clean --force

COPY . /usr/src/app

RUN npm run build

# Switch user
USER node

EXPOSE 3000

CMD [ "pm2-runtime", "start", "process.json" ]
