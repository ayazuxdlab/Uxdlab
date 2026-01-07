@echo off
cd /d C:\node-server\my-app

"C:\Program Files\Git\cmd\git.exe" fetch origin
"C:\Program Files\Git\cmd\git.exe" reset --hard origin/main

"C:\Program Files\nodejs\npm.cmd" install --production

pm2 restart my-node-app
