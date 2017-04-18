require("../../css/common.less");
require("./jsData/exports.js");
var localStorage = require("localStorage");
var queryString = require("queryString");

var common = {
    lS: localStorage,
    qS: queryString
};

module.exports = common;