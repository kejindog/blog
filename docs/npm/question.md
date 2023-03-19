
[npmjs](https://www.npmjs.com/)
[node download releases](https://nodejs.org/zh-cn/download/releases/)

### 1.错误日志提示互联网下载地址 404

检查项目package-lock.json 文件的resolved是否指向的互联网地址

**解决方案**：
1. 配置[云桌面代理源](/npm/registry)
2. 云桌面本地环境删除**package-lock.json**文件，执行一次**npmi i** 生成云桌面的代理源的文件，推送到**gitlab**
3. 流水线执行构建

> 很多项目都会选择讲lock文件不上传到仓库，云桌面环境建议上传

### 2. node-sass

由于云桌面的代理没有开通github相关地址，故涉及到node-gyp去github下载资源的依赖都会安装失败

**解决方案**
1. 使用 [sass](https://sass-lang.com/documentation/js-api/) 代替 node-sass

``` json
{
  "sass": "^1.26.8",
  "sass-loader": "^7.1.0"
}
```

> 影响：关于scope 穿透的写法需要改动 /deep/ -> ::v-deep

2. 将github资源下载手动上传公司nexus并在项目 **.npmrc** 配置文件中增加配置

```
sass_binary_site={https://npm.taobao.org/mirrors/node-sass/}
```

### 3. 其他需要github资源的依赖

**解决方案**

2. 将github资源下载手动上传公司nexus并在项目 **.npmrc** 配置文件中增加配置

```
sass_binary_site={https://npm.taobao.org/mirrors/node-sass/}
sharp_dist_base_url={https://npm.taobao.org/mirrors/sharp-libvips/}
electron_mirror={https://npm.taobao.org/mirrors/electron/}
puppeteer_download_host={https://npm.taobao.org/mirrors/}
phantomjs_cdnurl={https://npm.taobao.org/mirrors/phantomjs/}
sentrycli_cdnurl={https://npm.taobao.org/mirrors/sentry-cli/}
python_mirror={https://npm.taobao.org/mirrors/python/}
```

### 4. hw过程中生产的proxy会被禁掉

为了保证**hw**期间可以正常使用敏捷开发平台，建议将项目以来固定版本并且将lock文件维护到gitlab，在**hw**前执行一次构建，生成缓存到nexus服务

关于 **@type/node**、**electron-chromium** 拉去最新版本404的问题，可以在package.json文件中的 **devDependencies** 中手动指定版本

``` json
{
  "@type/node": "18.6.3",
  "electron-chromium": "1.4.313"
}
```

### 5. 流水线代码源

流水线代码源是关联的仓库ID不是仓库名称，如果删除原有仓库需要从新绑定新的数据源