require("./mask.less");
var html = require("./mask.html");
function Mask(ops) {
    $.extend({},ops);
    this.init();
}

Mask.prototype = {
    init: function() {
        $("body").append(html);
    },
    open: function() {
        $("#mask").css("display", "block");
    },
    close: function() {
        $("#mask").css("display", "none");
    }
};

module.exports = Mask;