Curvytron
=========
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/eleven-labs/curvytron?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A web multiplayer Tron game like with curves

## Installation

    npm install
    bower install
    gulp

## Launch server:

    node bin/curvytron.js

## Play:

Go to `http://localhost:8080/`, join a room, choose a player name and get ready!

## Setting it up with Nginx:

Create a virtual host:

```
server {
    listen 80;

    server_name curvytron.acme.com;

    root /path/to/curvytron/web;
    index index.html;

    access_log  /var/log/nginx/curvytron/access.log combined;
    error_log   /var/log/nginx/curvytron/error.log;

    location / {

        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;

        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```
