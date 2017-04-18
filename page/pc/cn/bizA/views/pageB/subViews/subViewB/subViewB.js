$.ajax({
    type: "get",
    url: "/mockData/bizA/pageA/getRmoteData.json",
    success: function(data) {
        var tpl = _.template($("#content2_tpl").html());
        var html = tpl({data: data});
        $("#content2").append(html);
    }
})