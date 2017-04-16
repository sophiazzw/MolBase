require("./noData.less");

var noData = {
    defaultConf: {
        text: "没有数据"
    },
    render: function(ops) {
        this.mergeConf(ops);
        this.renderComponent();
        this.bindEvent();
    },
    mergeConf: function(ops) {
        this.ops = $.extend(this.defaultConf, ops);
    },
    renderComponent: function() {
        if(this.ops.css) {
            require(this.ops.css);
        }
        var tmp = require("./noData.html");
        var html = _.template(tmp);
        $("#" + this.ops.dom).append(html({data: this.ops.text}));
    },
    bindEvent: function() {
        var that = this;
        $("#" + this.ops.dom).find(".btn").click(function() {
            if(that.ops.clickEvent) {
                that.ops.clickEvent.call(this);
            } else {
                alert("pc平台的按钮被点击了")
            }
        });
    }
};

module.exports = noData;