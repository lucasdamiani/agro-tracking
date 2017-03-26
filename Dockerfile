FROM beevelop/nodejs-python

ENV NODE_ENV=production PORT=8888

COPY ./html /var/app
WORKDIR /var/app

EXPOSE $PORT

RUN npm install -g http-server
CMD http-server -c-1 -p $PORT /var/app
