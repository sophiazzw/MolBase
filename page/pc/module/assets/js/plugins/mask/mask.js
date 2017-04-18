var Mask = require("common-plugins-mask");
var mask = {};
mask = $.extend(mask, new Mask());
mask.pcMask = function() {
    alert("我是pc平台的mask");
};

module.exports = mask;
