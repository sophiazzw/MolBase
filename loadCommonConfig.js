var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function loadCommonConfig(platform, language, biz, platformPages) {
    var languagePages = platformPages[language];
    var pageList = languagePages[biz];
    var moduleName = platform + "-" + language + "-" + biz;
    var moduleRoute = platform + "/" + language + "/" + biz;
    var config = {
        resolve: {
            alias: {
                js: path.join(__dirname, "page/" + moduleRoute + "/assets/js"),
                css: path.join(__dirname, "page/" + moduleRoute + "/assets/css"),
                imgs: path.join(__dirname, "page/" + moduleRoute + "/assets/imgs"),
                'common-fuc': path.join(__dirname, "common/assets/js/fuc/common.js"),
                'common-imgs': path.join(__dirname, "common/assets/imgs"),
                'common-plugins': path.join(__dirname, "common/assets/js/plugins"),
                'common-plugins-mask': path.join(__dirname, "common/assets/js/plugins/mask/mask.js"),
                'common-component':path.join(__dirname, "common/component/"),
                'common-component-noDataPage': path.join(__dirname, "common/component/noDataPage/noDataPage.js"),
                'common-vendor': path.join(__dirname, "common/assets/js/vendor/"),
                'common-vendor-mobiscroll': path.join(__dirname, "common/assets/js/vendor/mobiscroll/mobiscroll.js"),
                zepto: path.join(__dirname, 'common/assets/js/vendor/zepto.js'),
                underscore: path.join(__dirname, "common/assets/js/vendor/underscore.js"),
                queryString: path.join(__dirname, "common/assets/js/fuc/queryString.js"),
                localStorage: path.join(__dirname, "common/assets/js/fuc/localStorage.js"),
                'biz-imgs': path.join(__dirname, "page/" + moduleRoute + "/assets/imgs"),
                'biz-layout': path.join(__dirname, "page/" + moduleRoute + "/layout"),
                'pc-plugins-mask': path.join(__dirname, "page/pc/module/assets/js/plugins/mask/mask.js")
            }
        },
        module: {
            loaders: [ //加载器，关于各个加载器的参数配置，可自行搜索之。
                {
                    test: /\.css$/,
                    //配置css的抽取器、加载器。'-loader'可以省去
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                }, {
                    test: /\.less$/,
                    //配置less的抽取器、加载器。中间!有必要解释一下，
                    //根据从右到左的顺序依次调用less、css加载器，前一个的输出是后一个的输入
                    //你也可以开发自己的loader哟。有关loader的写法可自行谷歌之。
                    loader: ExtractTextPlugin.extract('css!less')
                }, {
                    //html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
                    //比如你配置，attrs=img:src img:data-src就可以一并处理data-src引用的资源了，就像下面这样
                    test: /\.html$/,
                    loader: "html?attrs=img:src img:data-src"
                }, {
                    //文件加载器，处理文件静态资源
                    test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'file-loader?name=' + moduleName + '/common/fonts/[name].[ext]'
                }, {
//图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
//如下配置，将小于8192byte的图片转成base64码
                    test: /\.(png|jpg|gif)$/,
                    loader: 'url-loader?limit=8192&name=' + moduleName + '/common/imgs/[hash].[ext]'
                }
            ]
        }
    };

    loadPageAlias(pageList, ["subViews"]);

    function loadPageAlias(pageList, aliasList) {
        for(var i=0;i<pageList.length;i++) {
            for(var j=0;j<aliasList.length;j++) {
                var key = pageList[i] + "-" + aliasList[j];
                config.resolve.alias[key] = path.join(__dirname, "page/" + moduleRoute + "/views/" + pageList[i] +  "/" + aliasList[j]);
            }
        }
    }
    return config;
}

module.exports = loadCommonConfig;