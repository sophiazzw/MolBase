var header = {
    render: function() {
        var tpl = _.template(require("./header.html"));
        $("header").append(tpl());
    }
};

header.render();
