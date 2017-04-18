require("css/pageB.less");
require("biz-layout/header/header.js");
require("biz-layout/footer/footer.js");
var Mask = require("common-plugins-mask");
var mask = new Mask();

var PcMask = require("pc-plugins-mask");
var Model = require("./pageBModel.js");
var fuc = {
    config: {
        token: Model.getToken()
    },
    init: function() {
        console.log("pageB render success!");
        console.log(this.config.token);
        console.log(common.qS.getQueryStringByName("test"));
        this.renderTpl();
        this.bindEvent();
    },
    renderTpl: function() {
        require("pageB-subViews/subViewA/subViewA.js");
        require("pageB-subViews/subViewB/subViewB.js");
    },
    bindEvent: function() {
        $("#showMask").click(function() {
            mask.open();
        });

        $("#pcMask").click(function() {
            PcMask.pcMask();
        });
    }
};

$(document).ready(function(){
    fuc.init();
});