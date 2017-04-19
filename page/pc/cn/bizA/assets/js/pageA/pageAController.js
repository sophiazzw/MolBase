require("css/pageA.less");
require("common-vendor-mobiscroll");

var fuc = {
    config: {

    },
    init: function() {
        console.log("pageA render success!");
        this.renderTpl();
        this.bindEvent();
    },
    renderTpl: function() {
        this.renderLocalData();
        this.renderRemoteData();
    },
    renderLocalData: function() {
        // var tpl = _.template($("#content1_tpl").html());
        // var html = tpl({data: {content:"localData"}});
        // $("#content1").append(html);
    },
    renderRemoteData: function() {
        $.ajax({
            type: "get",
            url: "/mockData/bizA/pageA/getRemoteData.json",
            success: function(data) {
                var tpl = _.template($("#content1_tpl").html());
                var html = tpl({data: data});
                $("#content2").append(html);
            }
        })
    },
    bindEvent: function() {
        $("#birthDaySelect").mobiscroll().date({
            headerText: "请选择出生日期",
            dateFormat: 'yy' + "-" + 'mm' + "-" + 'dd',
            lang: 'zh',
            defaultValue: new Date(),
            maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
            theme: 'mobiscroll',
            mode: 'scroller',
            display: 'bottom',
            onSelect: function (valueText, inst) {
                $("input[name=birthday]").val(inst.getArrayVal()[0] + "-" + (parseInt(inst.getArrayVal()[1], 10) + 1) + "-" + inst.getArrayVal()[2]);
            }
        })
    }
};

$(document).ready(function(){
    fuc.init();
});