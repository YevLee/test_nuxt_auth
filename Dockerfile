FROM node:6.10.3-slim
RUN apt-get update \
    && apt-get install -y nginx
RUN rm /etc/nginx/sites-enabled/default
ADD default.conf /etc/nginx/sites-enabled/
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN  npm install \
     && npm run generate \
     && cp -r dist/* /var/www/html \
     && rm -rf /app
CMD ["nginx","-g","daemon off;"]

