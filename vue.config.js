const path=require('path');

module.exports={
    publicPath:'/',
    outputDir:'dist',//生成的文件夹名称
    assetsDir:'assets',//生成后JS、img、css的存放文件夹名称
    filenameHashing:false,//生成的静态资源在他们的文件中包含了hash，通过他来关闭hash
    lintOnSave:true,//是否使用eslint
    //lintOnSave:process.env.NODE_ENV!=='production',生产构建时禁用
    runtimeCompiler:false,//是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    productionSourceMap:true,//如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    /*打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
    *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
    */
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname,'src/assets/css/public.less'),
            ],
        },
    },
    chainWebpack: config => {
    },
    css: {

    },
    devServer: {
        host: "localhost",
        port: 721, // 端口号
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理

        // 配置多个代理
       /* proxy: {
            "/api": {
                target: "<url>",
                ws: true,
                changeOrigin: true
            },
            "/foo": {
                target: "<other_url>"
            }
        }*/
    },

};

