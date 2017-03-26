# Default user/password
```
"participantId" : "WebAppAdmin",
"participantPwd" :"DJY27pEnl16d",
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
