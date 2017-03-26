FROM node:6-alpine

# Need to install extra dependencies for native modules.
RUN apk add --no-cache make gcc g++ python git libc6-compat

# Install the latest version by default.
ARG VERSION=latest

# Install Composer REST Server.
RUN npm install -g composer-rest-server
CMD composer-rest-server

# Expose port 3000.
EXPOSE 3000
