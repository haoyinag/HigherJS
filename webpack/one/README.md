### 1.安装`webpack`

```bash
cnpm install webpack -webpack-cli -D
```

`-D`指的是开发过程中使用，只下载到本地

### 2、初始化项目

1. 执行命令行`npm init -y`初始化一个默认目录
2. 新建一个`index.js`，输入一个 js 语句

```js
console.log("This is webpack learning One");
```

3. npx

执行命令`webpack index.js`报错

```bash
bash:webpack:command not found
```

是因为 webpack 不是全局安装的
所以要安装一个`npx`命令

```bash
npx webpack
```

执行之后会自动下载安装`npx`，安装之后会在`webpack/one/node_modules/.bin`下多了一个 webpack 文件

> 文件内的代码会告诉你会在`node_modules`中寻找`webpack/bin/webpack.js`，所以`npx webpack`执行的其实是这个文件`webpack/one/node_modules/webpack/bin/webpack.js`的内容
> 而如果是全局安装，一般会在 C 盘的`用户/xxx/xxx/.bin`目录

4. 继续报错

```bash
ERROR in Entry module not found: Error: Can't resolve './src' in '/Users/chenhaoyin/Documents/Mine/Github/HigherJS/webpack/one'
```

是因为 webpack4.x 之后默认打包的是`./src`目录下的`index.js`文件的
所以要建一个`src`目录，然后把`index.js`放进去，在执行命令`npx webpack`

5. 执行完上面的命令之后 webpack 会把 index.js 打包压缩
   可以看到多了文件`dist/main.js`，在压缩的文件内最后，能看到`console.log('webpack first')`

### 3、注意

要注意的是，webpack 打包默认打包的是`src/index.js`，如果没有 src 目录并且文件名不是 index.js 都会打包报错
