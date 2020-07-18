const path = require('path')

// webpack配置文件遵循commonjs规范
module.exports = {
    entry: './src/index.js',
    output:{
        // path:'./dist/' // 会报错，因为读取的是绝对路径
        // path.resolve() 解析当前路径的绝对路径
        // path:path.resolve('./dist/')
        // path:path.resolve(__dirname,'./dist/')
        path:path.join(__dirname,'./dist/'), // 打包生成的目录
        filename:'bundle.js' // 打包生成的文件名
    },
    mode:"development"
}