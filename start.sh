export NODE_ENV=production
forever restart /var/www/ixiao/server/index.js||forever start /var/www/ixiao/server/index.js
