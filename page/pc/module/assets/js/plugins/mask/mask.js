var Mask = require("common-plugins-mask");
var mask = {};
mask.prototype = new Mask();
mask.prototype.pcMask = function() {
    alert("我是pc平台的mask");
};

module.exports = mask;
