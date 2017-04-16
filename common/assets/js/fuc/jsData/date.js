Date.prototype = {
    //数字日期转日历(1490177082535 => 2017-3-22 18:04)
    formatDate: function() {
        var tempDate = new Date(tshis);
        var year = tempDate.getFullYear();
        var month = tempDate.getMonth() + 1;
        var date = tempDate.getDate();
        var hour = tempDate.getHours();
        var min = tempDate.getMinutes();
        var fullDate = year + "-" + (month > 9 ? month : '0' + month) + '-' + (date > 9 ? date : '0' + date) + ' ' + (hour > 9 ? hour : "0" + hour) + ':' + (min > 9 ? min : "0" + min);
        return fullDate;
    }
}