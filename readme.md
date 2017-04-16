框架目录结构说明(使用tab符区分目录层级):
common --全站公共组件库,与系统维度和业务均无关.可以从整个框架中剥离作为单独的git仓库维护和扩展,通过submodule引入对应业务仓库
    assets --全站公共静态资源
        css --全站公共样式
            common.less --全站公共样式入口(import tree形式)
            xx.less/file --其他需要被引入的公共样式或文件夹
        fonts --全站字体
        imgs --全站公共图片
        js --全站公共js文件
            fuc --全站自定义js
                common.js --全站自定义js入口
                xx.js/file --其他需要被引入的公共js或文件夹
            plugins --全站自定义插件
            vendor --全站可引入的第三方符合amd/cmd规范的插件
    component --全站组件
        componentA --具体组件文件夹
            componentA.js --组件的js文件,exports的主文件,相关资源都在此js里引入
            componentA.less --组件的css文件
            componentA.html --组件的模板文件
            imgs --组件用到的图片存放目录
config --框架配置目录
    pageList --页面配置列表.根据全站系统实际情况进行配置(按维度和业务拆分).目前只有语言维度
        app.js --app端(hybrid)页面列表
        mobile.js --纯H5(微信)页面列表
        pc.js --pc端页面列表
page --业务目录.可与common库完全剥离.第一级子目录对应系统第一级维度.目前根据实际业务情况第一级维度定义为设备平台维度.每个维度的子目录内容需要根据具体业务判断,如果下一级还是维度那子目录中包含了下一个维度的目录以及该维度的公共组件库.如果下一级是具体业务了那子目录就包含业务具体的目录.框架说明中以pc维度为例,其余同级维度的目录结构请参照此目录.
    pc --pc端的业务目录
    