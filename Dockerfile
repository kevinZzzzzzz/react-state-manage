FROM nginx:stable-alpine3.17

COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf