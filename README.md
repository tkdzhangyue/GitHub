这个小项目是给实验室一个项目搭建的H5网站，主要用到了node.js，express，socket.io，dgram，bootstrap，highcharts。服务器方面用的centos，nginx。
<br>[项目地址：www.tkdzhangyue.cn](http://www.tkdzhangyue.cn)<br>
腾讯云服务器需要安装nodejs，npm和ngnix，可以直接yum命令安装。<br>
nginx需要使用nginx的反向代理，加入配置文件nginx.config,来自cnodejs.org。
```
upstream web{
server 127.0.0.1:3000;
keepalive 64;
}
server {
listen       80;
server_name  你的域名;

#access_log  /var/log/nginx/log/host.access.log  main;
#client_max_body_size 100m;
location / {
    proxy_read_timeout 300;
    proxy_pass http://web;
    proxy_set_header Host $http_host;
}

error_page  404              /404.html;
location = /50x.html {
    root   /usr/share/nginx/html;
    proxy_set_header Host $http_host;
}
}
```
