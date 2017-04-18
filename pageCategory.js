/* var pageListExample = {
    "pc": {
        "en": {
            "bizA": [
                "enBizApageA",
                "enBizApageB"
            ],
            "bizB": [
                "enBizBpageA",
                "enBizBpageB"
            ]
        },
        "cn": {
            "bizA": [
                "enBizApageA",
                "enBizApageB"
            ],
            "bizB": [
                "enBizBpageA",
                "enBizBpageB"
            ]
        }
    }
}
*/
var pageList = {};
var platformList = ["pc", "mobile", "app"];
for(var i=0;i<platformList.length;i++) {
    var platform = platformList[i];
    var route = "./config/pageList/" + platform + ".js";
    pageList[platform] = require(route);
}

module.exports = pageList;