### 1、初始化项目

1. 执行命令行`npm init -y`初始化一个默认目录
2. 新建一个`index.js`，输入一个 js 语句

```js
console.log("This is webpack learning Four");
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

### 4、--config 执行指定配置文件

1. 把`webpack.config.js`文件复制一份，并重命名为`webpack.config.test.js`,把`filename`改成`'bundle_test.js'`
2. 执行`npx webpack --config webpack.config.test.js`

```bash
npx webpack --config webpack.config.test.js
Hash: 9127791ed731d0eb4ba7
Version: webpack 4.43.0
Time: 42ms
Built at: 2020-07-18 14:40:39
         Asset      Size  Chunks             Chunk Names
bundle_test.js  3.79 KiB    main  [emitted]  main
Entrypoint main = bundle_test.js
[./src/index.js] 25 bytes {main} [built]
```

检查 dist 文件夹，可以发现多了`bundle.test.js`文件，也就是说`--config`命令参数可以指定执行的配置文件

### 5、scripts 执行脚本

1. package.json
   在这个文件中，我们首先可以看见`scripts`中有一个 test 属性，它的值就是 webpack 命令。
2. 在下面添加一行命令，删除 dist 文件夹

```bash
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.test.js"
  },
```

3. 执行命令`npm run build`

```bash
npm run build

> webpack@1.0.0 build /Users/chenhaoyin/Documents/Mine/Github/HigherJS/webpack/four
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

可以发现执行的结果和上一步打包的结果一样的。
所以为了简化执行命令，可以在`package.json`文件的`scripts`中配置执行的命令脚本。
比如新建一个脚本命令

```bash
"start":"webpack --config webpack.config.dev.js"
```

这个脚本命令表示执行的是`webpack.config.dev.js`文件的配置。
