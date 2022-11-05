# Stage 1 - Build react project
FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY app/ ./
RUN npm install
RUN npm run build

# Stage 2 - Deploy to Nginx Server
FROM nginx:1.12-alpine
COPY --from=ui-build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]