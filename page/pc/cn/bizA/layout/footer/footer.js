require("./footer.less");

var footer = {
    render: function() {
        var tpl = _.template(require("./footer.html"));
        $("footer").append(tpl());
    }
};

footer.render();
