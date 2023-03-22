<template><div><p><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npmjs<ExternalLinkIcon/></a>
<a href="https://nodejs.org/zh-cn/download/releases/" target="_blank" rel="noopener noreferrer">node download releases<ExternalLinkIcon/></a></p>
<h3 id="_1-错误日志提示互联网下载地址-404" tabindex="-1"><a class="header-anchor" href="#_1-错误日志提示互联网下载地址-404" aria-hidden="true">#</a> 1.错误日志提示互联网下载地址 404</h3>
<p>检查项目package-lock.json 文件的resolved是否指向的互联网地址</p>
<p><strong>解决方案</strong>：</p>
<ol>
<li>配置<a href="/npm/registry" target="_blank" rel="noopener noreferrer">云桌面代理源<ExternalLinkIcon/></a></li>
<li>云桌面本地环境删除<strong>package-lock.json</strong>文件，执行一次<strong>npmi i</strong> 生成云桌面的代理源的文件，推送到<strong>gitlab</strong></li>
<li>流水线执行构建</li>
</ol>
<blockquote>
<p>很多项目都会选择讲lock文件不上传到仓库，云桌面环境建议上传</p>
</blockquote>
<h3 id="_2-node-sass" tabindex="-1"><a class="header-anchor" href="#_2-node-sass" aria-hidden="true">#</a> 2. node-sass</h3>
<p>由于云桌面的代理没有开通github相关地址，故涉及到node-gyp去github下载资源的依赖都会安装失败</p>
<p><strong>解决方案</strong></p>
<ol>
<li>使用 <a href="https://sass-lang.com/documentation/js-api/" target="_blank" rel="noopener noreferrer">sass<ExternalLinkIcon/></a> 代替 node-sass</li>
</ol>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"sass"</span><span class="token operator">:</span> <span class="token string">"^1.26.8"</span><span class="token punctuation">,</span>
  <span class="token property">"sass-loader"</span><span class="token operator">:</span> <span class="token string">"^7.1.0"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>影响：关于scope 穿透的写法需要改动 /deep/ -&gt; ::v-deep</p>
</blockquote>
<ol start="2">
<li>将github资源下载手动上传公司nexus并在项目 <strong>.npmrc</strong> 配置文件中增加配置</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sass_binary_site={https://npm.taobao.org/mirrors/node-sass/}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-其他需要github资源的依赖" tabindex="-1"><a class="header-anchor" href="#_3-其他需要github资源的依赖" aria-hidden="true">#</a> 3. 其他需要github资源的依赖</h3>
<p><strong>解决方案</strong></p>
<ol start="2">
<li>将github资源下载手动上传公司nexus并在项目 <strong>.npmrc</strong> 配置文件中增加配置</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sass_binary_site={https://npm.taobao.org/mirrors/node-sass/}
sharp_dist_base_url={https://npm.taobao.org/mirrors/sharp-libvips/}
electron_mirror={https://npm.taobao.org/mirrors/electron/}
puppeteer_download_host={https://npm.taobao.org/mirrors/}
phantomjs_cdnurl={https://npm.taobao.org/mirrors/phantomjs/}
sentrycli_cdnurl={https://npm.taobao.org/mirrors/sentry-cli/}
python_mirror={https://npm.taobao.org/mirrors/python/}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-hw过程中生产的proxy会被禁掉" tabindex="-1"><a class="header-anchor" href="#_4-hw过程中生产的proxy会被禁掉" aria-hidden="true">#</a> 4. hw过程中生产的proxy会被禁掉</h3>
<p>为了保证<strong>hw</strong>期间可以正常使用敏捷开发平台，建议将项目以来固定版本并且将lock文件维护到gitlab，在<strong>hw</strong>前执行一次构建，生成缓存到nexus服务</p>
<p>关于 <strong>@type/node</strong>、<strong>electron-chromium</strong> 拉去最新版本404的问题，可以在package.json文件中的 <strong>devDependencies</strong> 中手动指定版本</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"@type/node"</span><span class="token operator">:</span> <span class="token string">"18.6.3"</span><span class="token punctuation">,</span>
  <span class="token property">"electron-chromium"</span><span class="token operator">:</span> <span class="token string">"1.4.313"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-流水线代码源" tabindex="-1"><a class="header-anchor" href="#_5-流水线代码源" aria-hidden="true">#</a> 5. 流水线代码源</h3>
<p>流水线代码源是关联的仓库ID不是仓库名称，如果删除原有仓库需要从新绑定新的数据源</p>
</div></template>


