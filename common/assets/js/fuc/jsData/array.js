Array.prototype = {
    //数组去重 [1,2,3,4,1,2,36] => [1,2,3,4,36]
    unique: function() {
        var tmpArr = [];
        for (var i = 0; i < this.length; i++) {
            if (tmpArr.indexOf(this[i]) == -1) {
                tmpArr.push(this[i]);
            }
        }
        return tmpArr;
    }
};