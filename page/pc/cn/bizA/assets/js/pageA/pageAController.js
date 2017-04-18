require("css/pageA.less");
var fuc = {
    config: {

    },
    init: function() {
        console.log("pageA render success!");
        this.renderTpl();
    },
    renderTpl: function() {
        this.renderLocalData();
        this.renderRemoteData();
    },
    renderLocalData: function() {
        var tpl = _.template($("#content1_tpl").html());
        var html = tpl({data: {content:"localData"}});
        $("#content1").append(html);
    },
    renderRemoteData: function() {
        $.ajax({
            type: "get",
            url: "/mockData/bizA/pageA/getRmoteData.json",
            success: function(data) {
                var tpl = _.template($("#content2_tpl").html());
                var html = tpl({data: data});
                $("#content2").append(html);
            }
        })
    }
};

$(document).ready(function(){
    fuc.init();
});