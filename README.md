# Default user/password
```
"participantId" : "WebAppAdmin",
"participantPwd" :"DJY27pEnl16d",
```

# Start hyperledger
```
cd sample-applications/packages/getting-started/scripts
docker-compose up -d
```

# Start composer-ui
```
nohup composer-ui > composer-ui.log &
```

# Start composer-rest-server
```
nohup composer-rest-server --businessNetworkName org.acme.biznet --connectionProfileName hlf2 --enrollId WebAppAdmin --enrollSecret DJY27pEnl16d > composer-rest-server.log &
```

# Clone the repository
```
git clone https://github.com/lucasdamiani/agro-tracking
```

# Configure local dashboard
```
npm install -g http-server
http-server -c-1 .
```

# Fabric configuration
```
KEYVALUE_STORE=/home/lucasdamiani/.composer-credentials
```

# Run dashboard on Docker
```
docker run --rm -d -p 8888:8888 agro-tracking:0.0.2
```
