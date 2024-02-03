FROM nginx:stable-alpine3.17
RUN mkdir -p /usr/local/blog/blog-vue/blog-web/
RUN mkdir -p /usr/local/blog/blog-vue/blog-admin/
COPY blog-web/dist/ /usr/local/blog-vue/blog/
COPY blog-admin/dist/ /usr/local/blog-vue/admin/
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
EXPOSE 443
