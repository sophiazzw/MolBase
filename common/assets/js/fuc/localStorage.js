/*
 * API: setItem
 * params: moduleName  选填   模块名,用以区分是什么业务线,
 *         key  必填  存放在localstorage中的键名
 *         value  必填  存放的具体值,可以是任何格式,但注意转成字符串
 * 数据结构:  {
 *               "webapp-rentCar-oversea": "{key:value,key:value}"
 *               "webapp-rentCar-domestic": "{key:value,key:value}"
 *           }
 * API: getItem
 * params: moduleName  选填   模块名,用以区分是什么业务线,
 *         key  必填  存放在localstorage中的键名
 *
 * API: removeItem
 * params: moduleName  选填   模块名,用以区分是什么业务线,
 *         key  必填  存放在localstorage中的键名
 */
//var path = require("path");
var lS = {
    loader:function(){console.log("localstorage load success!")}
    //setItem: function(ops) {
    //    var options = $.extend({moduleName: path.getModuleName()},ops);
    //    //设置值
    //    if(!localStorage.getItem(options.moduleName)) {
    //        localStorage.setItem(options.moduleName, JSON.stringify({}));
    //    }
    //    var moduleStorage = JSON.parse(localStorage.getItem(options.moduleName));
    //    moduleStorage[options.key] = options.value;
    //    localStorage.setItem(options.moduleName, JSON.stringify(moduleStorage));
    //},
    //
    //getItem: function(ops) {
    //    var options = $.extend({moduleName: path.getModuleName()},ops);
    //    if(localStorage.getItem(options.moduleName)) {
    //        if(JSON.parse(localStorage.getItem(options.moduleName))[options.key]) {
    //            return JSON.parse(localStorage.getItem(options.moduleName))[options.key];
    //        } else {
    //            return "";
    //        }
    //    } else {
    //        return "";
    //    }
    //},
    //
    //removeItem: function(ops) {
    //    var options = $.extend({moduleName: path.getModuleName()},ops);
    //    if(localStorage.getItem(options.moduleName)) {
    //        if(JSON.parse(localStorage.getItem(options.moduleName))[options.key]) {
    //            var data = JSON.parse(localStorage.getItem(options.moduleName));
    //            delete data[options.key];
    //            localStorage.setItem(options.moduleName, JSON.stringify(data));
    //        }
    //    }
    //}
};

module.exports = lS;