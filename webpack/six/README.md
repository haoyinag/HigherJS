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

在根目录新建文件`webpack.config.js`，并输入代码

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

### 4、webpack-dev-server

webpack 的开发服务器

1. 安装`devServer`

```bash
cnpm install webpack-dev-server -D
```

因为是开发过程使用，所以用`-D`

2. 使用`devServer`
   在`package.json`的`scripts`中新增脚本命令

```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server"
  },
```

执行`npm run dev`，会发现跟之前一样文件被编译

```bash
npm run dev

> six@1.0.0 dev /Users/chenhaoyin/Documents/Mine/Github/HigherJS/webpack/six
> webpack-dev-server

ℹ ｢wds｣: Project is running at http://localhost:8080/
...
    + 18 hidden modules
ℹ ｢wdm｣: Compiled successfully.
```

在浏览器中打开`http://localhost:8080`，会发现控制台中报错

```json
GET http://localhost:8080/dist/bundle.js net::ERR_ABORTED 404 (Not Found)
```

3. 正确使用
   上面的报错，是因为执行`npm run dev`后有有一段提示

```bash

```
