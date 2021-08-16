# 清廉街

![GitHub](https://img.shields.io/github/license/QingLianJie/Frontend)
![Docker Image Version (latest by date)](https://img.shields.io/docker/v/lifeni/qinglianjie)

「清廉街」的前端仓库。

## 部署

可运行的版本已经上传到 [Docker Hub](https://hub.docker.com/r/lifeni/qinglianjie/tags?page=1&ordering=last_updated) 了，使用下面的命令运行一个实例。

```shell
# -p 映射端口 10000
# --name 容器的名字
# -d 后台运行
docker run -p 10000:3000 -d --name qinglianjie lifeni/qinglianjie:latest
```

运行后请使用 Caddy 等反向代理域名到 10000 端口或者使用 `localhost:10000` 查看网页。

## 开发

### 前提

开发环境需要 Git、Node.js 16+、Yarn 包管理器。

如果需要进行部署，则还需要使用最新版 Docker 制作镜像。

### 运行

1. 首先克隆项目。

    ```shell
    git clone https://github.com/QingLianJie/Frontend.git
    cd Frontend
    ```

2. 其次安装依赖。

   ```shell
   # 没有 yarn 的话，先安装：
   # npm i yarn -g
   yarn
   ```

3. 如果你要使用出自己的后端的话，在 [`data/api-config.ts`](./data/api-config.ts) 文件里修改 API 和头像的地址。

   > **注意：** 这个仓库只是前端的项目，网站的大部分功能需要接入后端 API 才能运行。
   >
   > [线上 API 地址](https://api.qinglianjie.cn) 有跨域限制，在本地开发无法进行连接，因此在运行前端项目的同时，请确保当前机器上运行有后端程序，且端口为 80（可在 [`data/api-config.ts`](./data/api-config.ts) 中修改）。

4. 最后运行网站，默认地址为 [localhost:3000](http://localhost:3000/) 。

   ```shell
   # 运行开发环境
   yarn dev

   # 运行生产环境
   yarn build
   yarn start
   ```

## 协议相关

[MIT License](./LICENSE) © 2021 清廉街