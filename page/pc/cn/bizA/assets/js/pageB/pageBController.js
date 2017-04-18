require("css/pageB.less");
var Model = require("./pageBModel.js");
var fuc = {
    config: {
        token: Model.getToken()
    },
    init: function() {
        console.log("pageB render success!");
        console.log(this.config.token);
        this.renderTpl();
    },
    renderTpl: function() {
        require("pageB-subViews/subViewA/subViewA.js");
        //require("pageB-subViews/subViewB/subViewB.js");
    }
};

$(document).ready(function(){
    fuc.init();
});