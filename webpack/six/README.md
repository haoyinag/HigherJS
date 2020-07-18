### 1、初始化项目

1. 执行命令行`npm init -y`初始化一个默认目录
2. 新建一个`index.js`，输入一个 js 语句

```js
console.log("This is webpack learning Six");
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
