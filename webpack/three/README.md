### 1、初始化项目

1. 执行命令行`npm init -y`初始化一个默认目录
2. 新建一个`index.js`，输入一个 js 语句

1) 安装

```bash
cnpm install webpack -webpack-cli -D
```

`-D`指的是开发过程中使用，只下载到本地

2. npx

执行命令`npx webpack`

### 3、webpack 配置

1. 在根目录新建文件`webpack.config.js`，并输入代码

```js
const path = require("path");

// webpack配置文件遵循commonjs规范
module.exports = {
  entry: "./src/index.js",
  output: {
    // path:'./dist/' // 会报错，因为读取的是绝对路径
    // path.resolve() 解析当前路径的绝对路径
    // path:path.resolve('./dist/')
    // path:path.resolve(__dirname,'./dist/')
    path: path.join(__dirname, "./dist/"), // 打包生成的目录
    filename: "bundle.js", // 打包生成的文件名
  },
};
```

2. 执行`npx webpack`

```bash
npx webpack
Hash: e084e94d51c7911f0d13
Version: webpack 4.43.0
Time: 47ms
Built at: 2020-07-18 14:16:31
    Asset       Size  Chunks             Chunk Names
bundle.js  955 bytes       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./src/index.js 26 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

可以看到`dist/bundle.js`
这个文件就是根据配置打包生成的文件

3. 页面引入

在目录中建一个`index.html`文件并初始化页面内容，然后引入`./dist/bundle.js`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./dist/bundle.js"></script>
  </body>
</html>
```

4. 页面输出

安装个插件如`staticserver`，在浏览器打开`index.html`，打开控制台，可以看到输出

### 4、打包模式 mode

1. 在上面执行`npx webpack`命令后，可以看到警告信息中有`mode`相关内容

```bash
... Set 'mode' option to 'development' or 'production' ...
```

意思是打包模式可以通过 mode 属性配置，值是`development or production`，也就是开发模式和生产模式，默认的是生产模式`production`。

2. 验证
   在配置中新增属性`mode:"development"`

```js
const path = require("path");

// webpack配置文件遵循commonjs规范
module.exports = {
  entry: "./src/index.js",
  output: {
    // path:'./dist/' // 会报错，因为读取的是绝对路径
    // path.resolve() 解析当前路径的绝对路径
    // path:path.resolve('./dist/')
    // path:path.resolve(__dirname,'./dist/')
    path: path.join(__dirname, "./dist/"), // 打包生成的目录
    filename: "bundle.js", // 打包生成的文件名
  },
  mode: "development",
};
```

重新打包`npx webpack`，完成之后再进入`dist/bundle.js`看，可以发现代码虽然被处理过，但并非是压缩后的，而之前打包后是被压缩后的代码，也就是说`production`模式打包后的代码会被压缩。
