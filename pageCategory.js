/* var pageListExample = {
    "hybrid": {
        "rentCar/oversea/": [
            "addDriver",
            "carDetail",
            "carList",
            "confirmOrder",
            "orderList",
            "orderResult",
            "selectCity",
            "transDriverLicense",
            "fetchCarForm",
            "welfare",
            "storeMap",
            "help",
            "helpSub",
            "helpDtl"
        ]
    }
}
*/
var pageList = {};
var platformList = ["hybrid", "webapp"];
for(var i=0;i<platformList.length;i++) {
    var platform = platformList[i];
    var route = "./config/pageList/" + platform + ".js";
    pageList[platform] = require(route);
}

module.exports = pageList;