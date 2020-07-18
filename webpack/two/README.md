### 1.安装`webpack`

```bash
cnpm install webpack -webpack-cli -D
```

### 2、初始化项目

1. 执行命令行`npm init -y`初始化一个默认目录
2. 新建一个`index.js`，输入一个 js 语句

### 3、引入模块

1. 再新建一个`a.js`文件，输入语句并导出

```js
const a = console.log("这是a模块");

export default a;
```

2. 在 index.js 中引入

```js
import a from "./a";

a;
console.log("webpack first");
```

3. 执行打包命令`npx webpack`
4. 执行`node dist/main.js`命令

```bash
$ node dist/main.js
这是a模块
webpack first
```

可以看到模块能正常引入并输出。
要注意的是这个引入输出的是 ES6 的语法，而 node 是使用`commonjs`语法的。

### 4、页面引入

在目录中建一个`index.html`文件并初始化页面内容，然后引入`./dist/main.js`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./dist/main.js"></script>
  </body>
</html>
```

### 5、页面输出

安装个插件如`staticserver`，在浏览器打开`index.html`，打开控制台，可以看到输出

```bash
这是a模块
webpack first
```

要注意的是为什么不能直接引入`src/index.js`呢？因为这个文件是执行在 node 环境中的，它只是一个模块，如果要在浏览器环境中执行，需要打包处理，也就是生成如`dist/main.js`文件内的内容才可以被浏览器执行。
