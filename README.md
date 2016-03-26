# nobreaks

```
$ npm install
$ npm run front
```


## Production Deployment

To see the running projects:
```
$ pm2 list
$ pm2 show <id>
```

Make note of the id of the current production project

Pull the changes into the project that is NOT running
Run `npm install` then `npm run build`
Start the process on an empty port with `PORT=5000 pm2 start ubuntu`


Update `/etc/nginx/sites-available/default` to point to the new port on the proxy_pass field
Restart nginx with `sudo service nginx restart`
