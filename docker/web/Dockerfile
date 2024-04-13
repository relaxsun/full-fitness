FROM nginx:1.24.0

WORKDIR /workspace

COPY ./src/public /workspace/public
COPY ./docker/web/default.conf.template /etc/nginx/templates/

EXPOSE 80
