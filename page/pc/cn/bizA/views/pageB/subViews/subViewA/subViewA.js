require("./subViewA.less");
var tpl = _.template(require("./subViewA.html"));
var html = tpl({data: {content:"localData"}});
$("#content1").append(html);