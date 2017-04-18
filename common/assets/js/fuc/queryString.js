var queryString = {
    //获取QueryString的数组, return [key1=val1, key2=val2....]
    getQueryString: function() {
        var result = location.search.match(new RegExp("[\?\&][^\?\&]+=[^\?\&]+","g"));
        if(result == null){
            return "";
        }
        for(var i = 0; i < result.length; i++){
            result[i] = result[i].substring(1);
        }
        return result;
    },

    //根据QueryString参数名称获取值 return val
    getQueryStringByName: function(name) {
        var result = location.search.match(new RegExp("[\?\&]" + name+ "=([^\&]+)","i"));
        if(result == null || result.length < 1){
            return "";
        }
        return decodeURIComponent(result[1]);
    },

    //根据QueryString参数索引获取值 return val
    getQueryStringByIndex: function(index) {
        if(index == null){
            return "";
        }
        var queryStringList = this.getQueryString();
        if (index >= queryStringList.length){
            return "";
        }
        var result = queryStringList[index];
        var startIndex = result.indexOf("=") + 1;
        result = result.substring(startIndex);
        return decodeURIComponent(result);
    }
};

module.exports = queryString;