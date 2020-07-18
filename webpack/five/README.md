### 1、初始化项目

1. 执行命令行`npm init -y`初始化一个默认目录
2. 新建一个`index.js`，输入一个 js 语句

```js
console.log("This is webpack learning Five");
```

### 2.安装`webpack`

1. 安装

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

2. 执行命令`npm run build`

```bash
npm run build

> webpack@1.0.0 build /Users/chenhaoyin/Documents/Mine/Github/HigherJS/webpack/five
> webpack --config webpack.config.test.js

Hash: 9127791ed731d0eb4ba7
Version: webpack 4.43.0
Time: 45ms
Built at: 2020-07-18 14:48:57
         Asset      Size  Chunks             Chunk Names
bundle_test.js  3.79 KiB    main  [emitted]  main
Entrypoint main = bundle_test.js
[./src/index.js] 25 bytes {main} [built]
```

3. 打开 index.html

### 3、本地文件监听

1. webpack 实时监听
   由于我们每次改变文件都需要重新执行命令才可以打包，所以 webpack 官方提供了实时监听的功能，方便我们改变了本地代码之后实时监听并打包出最新的代码。
2. `--watch`
   我们在 scripts 中的 buid 修改一下

```bash
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --watch"
  },
```

然后执行命令`npm run build`

```bash
npm run build

> webpack@1.0.0 build /Users/chenhaoyin/Documents/Mine/Github/HigherJS/webpack/five
> webpack --watch


webpack is watching the files…

Hash: f4d2449aaf51ed3e3e84
Version: webpack 4.43.0
Time: 55ms
Built at: 2020-07-18 15:03:56
    Asset       Size  Chunks             Chunk Names
bundle.js  954 bytes       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./src/index.js 25 bytes {0} [built]
```

可以发现其中有一行内容`webpack is watching the files…`，表示的是 webpack 正在监听我们的文件，如果文件内容有改变，会自动重新编译打包。
我们在 index.js 中新增语句

```js
console.log("Part Five");
console.log("webpack watching...");
```

可以发现代码确实有重新被编译，刷新浏览器，新增的 console 语句也有输出。

### 4、配置中 watch

1. 在配置`webpack.config.js`中新增`watch:true`
2. 在`package.json`的 scripts 中新增`"watch": "webpack",`

```bash
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack",
    "build": "webpack --watch"
  },
```

3. 执行命令`npm run watch`
   可以发现文件同样被监听。
