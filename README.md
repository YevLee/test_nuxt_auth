# test_nuxt_auth

> Nuxt.js project

## Build Setup

``` bash

# 安装依赖
$ npm install # Or yarn install

# 用docker构建镜像(提前在当前系统上面安装好docker,在官网下载安装即可, 里面使用了nginx)
$ docker build -t test_nuxt_auth .

# 使用docker部署
$ docker run -dt -p 80:80 test_nuxt_auth

# 打开localhost测试，登录一下：输入 18518368050 1234 登录，登录成功之后刷新首页会报一个错误
# 如果把nuxt.config.js中token里面的localStorage和cookie项全部从true换成false则没问题，不过这样的话就没办法用本地存储存token了，刷新页面登录就会失效
# 在本地测试，npm run dev即可，本地跑起来是没问题
# 线上环境，使用docker部署，docker里面有执行npm run generate，然后把生成的文件放到nginx里面去，这种情况会出问题

```

