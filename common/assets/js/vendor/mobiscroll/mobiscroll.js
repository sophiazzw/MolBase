/* 56d438aa-aa47-4ec7-885f-1d0fa1eac951 */
require("./mobiscroll.less");
(function (a, n) {
    function t(a) {
        for (var f in a)if (r[a[f]] !== n)return !0;
        return !1
    }

    function w(d, b, g) {
        var o = d;
        if ("object" === typeof b)return d.each(function () {
            f[this.id] && f[this.id].destroy();
            new a.mobiscroll.classes[b.component || "Scroller"](this, b)
        });
        "string" === typeof b && d.each(function () {
            var a;
            if ((a = f[this.id]) && a[b])if (a = a[b].apply(this, Array.prototype.slice.call(g, 1)), a !== n)return o = a, !1
        });
        return o
    }

    function h(a) {
        if (j.tapped && !a.tap && !("TEXTAREA" == a.target.nodeName && "mousedown" == a.type))return a.stopPropagation(),
            a.preventDefault(), !1
    }

    var j, d = +new Date, f = {}, s = a.extend, r = document.createElement("modernizr").style, b = t(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]), g = t(["flex", "msFlex", "WebkitBoxDirection"]), P = function () {
        var a = ["Webkit", "Moz", "O", "ms"], b;
        for (b in a)if (t([a[b] + "Transform"]))return "-" + a[b].toLowerCase() + "-";
        return ""
    }(), i = P.replace(/^\-/, "").replace(/\-$/, "").replace("moz", "Moz");
    a.fn.mobiscroll = function (b) {
        s(this, a.mobiscroll.components);
        return w(this,
            b, arguments)
    };
    j = a.mobiscroll = a.mobiscroll || {
            version: "2.17.0",
            util: {
                prefix: P,
                jsPrefix: i,
                has3d: b,
                hasFlex: g,
                isOldAndroid: /android [1-3]/i.test(navigator.userAgent),
                preventClick: function () {
                    j.tapped++;
                    setTimeout(function () {
                        j.tapped--
                    }, 500)
                },
                testTouch: function (b, d) {
                    if ("touchstart" == b.type)a(d).attr("data-touch", "1"); else if (a(d).attr("data-touch"))return a(d).removeAttr("data-touch"), !1;
                    return !0
                },
                objectToArray: function (a) {
                    var b = [], d;
                    for (d in a)b.push(a[d]);
                    return b
                },
                arrayToObject: function (a) {
                    var b = {}, d;
                    if (a)for (d = 0; d < a.length; d++)b[a[d]] = a[d];
                    return b
                },
                isNumeric: function (a) {
                    return 0 <= a - parseFloat(a)
                },
                isString: function (a) {
                    return "string" === typeof a
                },
                getCoord: function (a, b, d) {
                    var o = a.originalEvent || a, b = (d ? "client" : "page") + b;
                    return o.changedTouches ? o.changedTouches[0][b] : a[b]
                },
                getPosition: function (d, f) {
                    var g = window.getComputedStyle ? getComputedStyle(d[0]) : d[0].style, o, i;
                    b ? (a.each(["t", "webkitT", "MozT", "OT", "msT"], function (a, b) {
                        if (g[b + "ransform"] !== n)return o = g[b + "ransform"], !1
                    }), o = o.split(")")[0].split(", "),
                        i = f ? o[13] || o[5] : o[12] || o[4]) : i = f ? g.top.replace("px", "") : g.left.replace("px", "");
                    return i
                },
                addIcon: function (b, d) {
                    var f = {}, o = b.parent(), g = o.find(".mbsc-err-msg"), i = b.attr("data-icon-align") || "left", k = b.attr("data-icon");
                    a('<span class="mbsc-input-wrap"></span>').insertAfter(b).append(b);
                    g && o.find(".mbsc-input-wrap").append(g);
                    k && (-1 !== k.indexOf("{") ? f = JSON.parse(k) : f[i] = k, s(f, d), o.addClass((f.right ? "mbsc-ic-right " : "") + (f.left ? " mbsc-ic-left" : "")).find(".mbsc-input-wrap").append(f.left ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' +
                    f.left + '"></span>' : "").append(f.right ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' + f.right + '"></span>' : ""))
                },
                constrain: function (a, b, d) {
                    return Math.max(b, Math.min(a, d))
                },
                vibrate: function (a) {
                    "vibrate"in navigator && navigator.vibrate(a || 50)
                }
            },
            tapped: 0,
            autoTheme: "mobiscroll",
            presets: {scroller: {}, numpad: {}, listview: {}, menustrip: {}},
            themes: {form: {}, frame: {}, listview: {}, menustrip: {}, progress: {}},
            i18n: {},
            instances: f,
            classes: {},
            components: {},
            defaults: {context: "body", mousewheel: !0, vibrate: !0},
            setDefaults: function (a) {
                s(this.defaults, a)
            },
            presetShort: function (a, b, d) {
                this.components[a] = function (f) {
                    return w(this, s(f, {component: b, preset: !1 === d ? n : a}), arguments)
                }
            }
        };
    a.mobiscroll.classes.Base = function (b, g) {
        var i, o, h, j, k, e, q = a.mobiscroll, y = q.util, I = y.getCoord, m = this;
        m.settings = {};
        m._presetLoad = function () {
        };
        m._init = function (a) {
            h = m.settings;
            s(g, a);
            m._hasDef && (e = q.defaults);
            s(h, m._defaults, e, g);
            if (m._hasTheme) {
                k = h.theme;
                if ("auto" == k || !k)k = q.autoTheme;
                "default" == k && (k = "mobiscroll");
                g.theme = k;
                j = q.themes[m._class] ?
                    q.themes[m._class][k] : {}
            }
            m._hasLang && (i = q.i18n[h.lang]);
            m._hasTheme && m.trigger("onThemeLoad", [i, g]);
            s(h, j, i, e, g);
            if (m._hasPreset && (m._presetLoad(h), o = q.presets[m._class][h.preset]))o = o.call(b, m), s(h, o, g)
        };
        m._destroy = function () {
            m.trigger("onDestroy", []);
            delete f[b.id];
            m = null
        };
        m.tap = function (b, e, d) {
            function f(b) {
                if (!l && (d && b.preventDefault(), l = this, i = I(b, "X"), k = I(b, "Y"), q = !1, "pointerdown" == b.type))a(document).on("pointermove", g).on("pointerup", c)
            }

            function g(a) {
                if (l && !q && 20 < Math.abs(I(a, "X") - i) || 20 <
                    Math.abs(I(a, "Y") - k))q = !0
            }

            function c(b) {
                l && (q || (b.preventDefault(), e.call(l, b, m)), "pointerup" == b.type && a(document).off("pointermove", g).off("pointerup", c), l = !1, y.preventClick())
            }

            function o() {
                l = !1
            }

            var i, k, l, q;
            if (h.tap)b.on("touchstart.dw pointerdown.dw", f).on("touchcancel.dw pointercancel.dw", o).on("touchmove.dw", g).on("touchend.dw", c);
            b.on("click.dw", function (a) {
                a.preventDefault();
                e.call(this, a, m)
            })
        };
        m.trigger = function (d, f) {
            var i;
            f.push(m);
            a.each([e, j, o, g], function (a, e) {
                e && e[d] && (i = e[d].apply(b, f))
            });
            return i
        };
        m.option = function (a, b) {
            var e = {};
            "object" === typeof a ? e = a : e[a] = b;
            m.init(e)
        };
        m.getInst = function () {
            return m
        };
        g = g || {};
        b.id || (b.id = "mobiscroll" + ++d);
        f[b.id] = m
    };
    document.addEventListener && a.each(["mouseover", "mousedown", "mouseup", "click"], function (a, b) {
        document.addEventListener(b, h, !0)
    })
})($);
(function (a) {
    a.mobiscroll.i18n.zh = {
        setText: "\u786e\u5b9a",
        cancelText: "\u53d6\u6d88",
        clearText: "\u660e\u786e",
        selectedText: "{count} \u9009",
        dateFormat: "yy/mm/dd",
        dateOrder: "yymmdd",
        dayNames: "\u5468\u65e5,\u5468\u4e00,\u5468\u4e8c,\u5468\u4e09,\u5468\u56db,\u5468\u4e94,\u5468\u516d".split(","),
        dayNamesShort: "\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),
        dayNamesMin: "\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),
        dayText: "\u65e5",
        hourText: "\u65f6",
        minuteText: "\u5206",
        monthNames: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
        monthNamesShort: "\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d,\u4e03,\u516b,\u4e5d,\u5341,\u5341\u4e00,\u5341\u4e8c".split(","),
        monthText: "\u6708",
        secText: "\u79d2",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "\u5e74",
        nowText: "\u5f53\u524d",
        pmText: "\u4e0b\u5348",
        amText: "\u4e0a\u5348",
        dateText: "\u65e5",
        timeText: "\u65f6\u95f4",
        calendarText: "\u65e5\u5386",
        closeText: "\u5173\u95ed",
        fromText: "\u5f00\u59cb\u65f6\u95f4",
        toText: "\u7ed3\u675f\u65f6\u95f4",
        wholeText: "\u5408\u8ba1",
        fractionText: "\u5206\u6570",
        unitText: "\u5355\u4f4d",
        labels: "\u5e74,\u6708,\u65e5,\u5c0f\u65f6,\u5206\u949f,\u79d2,".split(","),
        labelsShort: "\u5e74,\u6708,\u65e5,\u70b9,\u5206,\u79d2,".split(","),
        startText: "\u5f00\u59cb",
        stopText: "\u505c\u6b62",
        resetText: "\u91cd\u7f6e",
        lapText: "\u5708",
        hideText: "\u9690\u85cf",
        backText: "\u80cc\u90e8",
        undoText: "\u590d\u539f",
        offText: "\u5173\u95ed",
        onText: "\u5f00\u542f"
    }
})($);
(function (a, n) {
    var t = function () {
    }, w = a.mobiscroll;
    w.classes.Progress = function (h, j, d) {
        function f() {
            var a = s("value", o);
            a !== e && r(a)
        }

        function s(a, b) {
            var e = g.attr(a);
            return e === n || "" === e ? b : +e
        }

        function r(b, d, f, k) {
            b = a.mobiscroll.running && Math.min(B, Math.max(b, o));
            i.css("width", 100 * (b - o) / (B - o) + "%");
            f === n && (f = !0);
            k === n && (k = f);
            (b !== e || d) && y._display(b);
            b !== e && (e = b, f && g.attr("value", e), k && g.change())
        }

        var b, g, P, i, O, u, A, o, B, D, k, e, q, y = this;
        w.classes.Base.call(this, h, j, !0);
        y._processItem = new Function("$, p", function () {
            var a =
                [5, 2], b;
            a:{
                b = a[0];
                var e;
                for (e = 0; 16 > e; ++e)if (1 == b * e % 16) {
                    b = [e, a[1]];
                    break a
                }
                b = void 0
            }
            a = b[0];
            b = b[1];
            e = "";
            var d;
            for (d = 0; 1062 > d; ++d)e += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[d]) -
            a * b) % 16 + 16) % 16];
            b = e;
            e = b.length;
            a = [];
            for (d = 0; d < e; d += 2)a.push(b[d] + b[d + 1]);
            b = "";
            e = a.length;
            for (d = 0; d < e; d++)b += String.fromCharCode(parseInt(a[d], 16));
            b = b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
            return b
        }());
        y._onInit = t;
        y._onDestroy = t;
        y._display = function (a) {
            q = k && D.returnAffix ? k.replace(/\{value\}/, a).replace(/\{max\}/, B) : a;
            O && O.html(q);
            b && b.html(q)
        };
        y._attachChange = function () {
            g.on("change", f)
        };
        y.init = function (d) {
            var f, q;
            y._processItem(a, 0);
            y._init(d);
            D = y.settings;
            g = a(h);
            P = y._$parent = g.parent();
            o = y._min = d.min === n ? s("min", D.min) : d.min;
            B = y._max = d.max ===
            n ? s("max", D.max) : d.max;
            e = s("value", o);
            f = g.attr("data-val") || D.val;
            q = g.attr("data-step-labels") || D.stepLabels;
            k = g.attr("data-template") || (100 == B && !D.template ? "{value}%" : D.template);
            A = y._css + " mbsc-progress-w mbsc-" + D.theme + (D.baseTheme ? " mbsc-" + D.baseTheme : "");
            P.addClass(A);
            y._wrap && w.util.addIcon(g);
            g.attr("min", o).attr("max", B);
            P.find(".mbsc-input-wrap").append('<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>');
            i = y._$progress = P.find(".mbsc-progress-bar");
            u = y._$track = P.find(".mbsc-progress-track");
            O = a(g.attr("data-target") || D.target);
            f && (b = a('<span class="mbsc-progress-value"></span>'), P.addClass("mbsc-progress-value-" + ("right" == f ? "right" : "left")).find(".mbsc-input-wrap").append(b));
            if (q) {
                q = JSON.parse(q);
                for (f = 0; f < q.length; ++f)u.append('<span class="mbsc-progress-step-label" style="left: ' + 100 * (q[f] - o) / (B - o) + '%" >  ' + q[f] + "</span>")
            }
            y._onInit(d);
            y._attachChange();
            y.refresh()
        };
        y.refresh = function () {
            r(s("value",
                o), !0, !1)
        };
        y.destroy = function () {
            y._onDestroy();
            P.find(".mbsc-progress-cont").remove();
            P.removeClass(A).find(".mbsc-input-wrap").before(g).remove();
            g.removeClass("mbsc-control").off("change", f);
            y._destroy()
        };
        y.getVal = function () {
            return e
        };
        y.setVal = function (a, b, e) {
            r(a, !0, b, e)
        };
        d || y.init(j)
    };
    w.classes.Progress.prototype = {
        _class: "progress",
        _css: "mbsc-progress",
        _hasTheme: !0,
        _wrap: !0,
        _defaults: {min: 0, max: 100, returnAffix: !0}
    };
    w.presetShort("progress", "Progress")
})($);
(function (a, n) {
    var t = function () {
    }, w = a.mobiscroll, h = w.util, j = h.getCoord, d = h.testTouch;
    w.classes.Slider = function (f, s, r) {
        function b(b) {
            d(b, this) && !H && !f.disabled && a.mobiscroll.running && (H = !0, x = Y = !1, fa = j(b, "X"), v = j(b, "Y"), M = fa, c.removeClass("mbsc-progress-anim"), I = E ? a(".mbsc-slider-handle", this) : L, m = I.parent().addClass("mbsc-active"), p = +I.attr("data-index"), ka = c.width(), N = c.offset().left, "mousedown" === b.type && (b.preventDefault(), a(document).on("mousemove", g).on("mouseup", P)))
        }

        function g(a) {
            if (H) {
                M =
                    j(a, "X");
                R = j(a, "Y");
                J = M - fa;
                l = R - v;
                if (5 < Math.abs(J) || Y)Y = !0, 50 < Math.abs(ua - new Date) && (ua = new Date, k(M, ga.round, Q));
                Y ? a.preventDefault() : 7 < Math.abs(l) && D(a)
            }
        }

        function P(a) {
            H && (a.preventDefault(), E || c.addClass("mbsc-progress-anim"), k(M, !0, !0), !Y && !x && (h.preventClick(), C._onTap(W[p])), D())
        }

        function i() {
            H && D()
        }

        function O() {
            var c = C._readValue(a(this)), b = +a(this).attr("data-index");
            c !== W[b] && (W[b] = c, q(c, b))
        }

        function u(a) {
            a.stopPropagation()
        }

        function A(a) {
            a.preventDefault()
        }

        function o(c) {
            var b;
            if (!f.disabled) {
                switch (c.keyCode) {
                    case 38:
                    case 39:
                        b =
                            1;
                        break;
                    case 40:
                    case 37:
                        b = -1
                }
                b && (c.preventDefault(), da || (p = +a(this).attr("data-index"), q(W[p] + ea * b, p, !0), da = setInterval(function () {
                    q(W[p] + ea * b, p, !0)
                }, 200)))
            }
        }

        function B(a) {
            a.preventDefault();
            clearInterval(da);
            da = null
        }

        function D() {
            H = !1;
            m.removeClass("mbsc-active");
            a(document).off("mousemove", g).off("mouseup", P)
        }

        function k(a, c, b) {
            a = c ? Math.min(100 * Math.round(Math.max(100 * (a - N) / ka, 0) / ha / ea) * ea / (T - aa), 100) : Math.max(0, Math.min(100 * (a - N) / ka, 100));
            q(Math.round((aa + a / ha) * X) / X, p, b, a)
        }

        function e(a) {
            return 100 *
                (a - aa) / (T - aa)
        }

        function q(a, c, b, d, f, g) {
            var l = L.eq(c), i = l.parent(), a = Math.min(T, Math.max(a, aa));
            g === n && (g = b);
            F ? 0 === c ? (a = Math.min(a, W[1]), G.css({
                width: e(W[1]) - e(a) + "%",
                left: e(a) + "%"
            })) : (a = Math.max(a, W[0]), G.css({width: e(a) - e(W[0]) + "%"})) : E || !V ? i.css({
                left: (d || e(a)) + "%",
                right: "auto"
            }) : G.css("width", (d || e(a)) + "%");
            Z && S.eq(c).html(a);
            a > aa ? i.removeClass("mbsc-slider-start") : (W[c] > aa || f) && i.addClass("mbsc-slider-start");
            !E && (W[c] != a || f) && C._display(a);
            b && W[c] != a && (x = !0, W[c] = a, C._fillValue(a, c, g));
            l.attr("aria-valuenow",
                a)
        }

        var y, I, m, L, K, U, G, S, c, H, x, J, l, N, M, R, p, V, Z, F, Q, T, aa, Y, E, ea, ga, ha, fa, v, X, da, ka, W, C = this, ua = new Date;
        w.classes.Progress.call(this, f, s, !0);
        C._onTap = t;
        C.__onInit = t;
        C._readValue = function (a) {
            return +a.val()
        };
        C._fillValue = function (a, c, b) {
            y.eq(c).val(a);
            b && y.eq(c).change()
        };
        C._attachChange = function () {
            y.on(ga.changeEvent, O)
        };
        C._onInit = function (e) {
            var d;
            C.__onInit();
            U = C._$parent;
            c = C._$track;
            G = C._$progress;
            y = U.find("input");
            ga = C.settings;
            aa = C._min;
            T = C._max;
            ea = e.step === n ? +y.attr("step") || ga.step : e.step;
            Q = "true" ===
                y.attr("data-live") || ga.live;
            Z = "true" === y.attr("data-tooltip") || ga.tooltip;
            V = "false" !== y.attr("data-highlight") && !1 !== ga.highlight && 3 > y.length;
            X = 0 !== ea % 1 ? 100 / (100 * +(ea % 1).toFixed(2)) : 1;
            ha = 100 / (T - aa) || 100;
            E = 1 < y.length;
            F = V && 2 == y.length;
            W = [];
            Z && U.addClass("mbsc-slider-has-tooltip");
            if (1 != ea) {
                d = (T - aa) / ea;
                for (e = 0; e <= d; ++e)c.append('<span class="mbsc-slider-step" style="left:' + 100 / d * e + '%"></span>')
            }
            a.each(y, function (b) {
                W[b] = C._readValue(a(this));
                a(this).attr("data-index", b).attr("min", aa).attr("max", T).attr("step",
                    ea);
                ga.handle && (V ? G : c).append('<span class="mbsc-slider-handle-cont' + (F && !b ? " mbsc-slider-handle-left" : "") + '"><span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + aa + '" aria-valuemax="' + T + '" data-index="' + b + '"></span>' + (Z ? '<span class="mbsc-slider-tooltip"></span>' : "") + "</span>")
            });
            L = U.find(".mbsc-slider-handle");
            S = U.find(".mbsc-slider-tooltip");
            K = U.find(E ? ".mbsc-slider-handle-cont" : ".mbsc-progress-cont");
            L.on("keydown", o).on("keyup", B).on("blur", B);
            K.on("touchstart mousedown", b).on("touchmove",
                g).on("touchend touchcancel", P).on("pointercancel", i);
            y.on("click", u);
            U.on("click", A)
        };
        C._onDestroy = function () {
            U.off("click", A);
            y.off(ga.changeEvent, O).off("click", u);
            L.off("keydown", o).off("keyup", B).off("blur", B);
            K.off("touchstart mousedown", b).off("touchmove", g).off("touchend", P).off("touchcancel pointercancel", i)
        };
        C.refresh = function () {
            y.each(function (c) {
                q(C._readValue(a(this)), c, !0, !1, !0, !1)
            })
        };
        C.getVal = function () {
            return E ? W.slice(0) : W[0]
        };
        C.setVal = C._setVal = function (c, b, e) {
            a.isArray(c) || (c = [c]);
            a.each(c, function (a, c) {
                q(c, a, !0, !1, !0, e)
            })
        };
        r || C.init(s)
    };
    w.classes.Slider.prototype = {
        _class: "progress",
        _css: "mbsc-progress mbsc-slider",
        _hasTheme: !0,
        _wrap: !0,
        _defaults: {changeEvent: "change", min: 0, max: 100, step: 1, live: !0, handle: !0, round: !0, returnAffix: !0}
    };
    w.presetShort("slider", "Slider")
})($);
(function (a, n, t, w) {
    var h, j, d = a.mobiscroll, f = d.util, s = f.jsPrefix, r = f.has3d, b = f.constrain, g = f.isString, P = f.isOldAndroid, f = /(iphone|ipod|ipad).* os 8_/i.test(navigator.userAgent), i = function () {
    }, O = function (a) {
        a.preventDefault()
    };
    d.classes.Frame = function (f, A, o) {
        function B(c) {
            R && R.removeClass("dwb-a");
            R = a(this);
            !R.hasClass("dwb-d") && !R.hasClass("dwb-nhl") && R.addClass("dwb-a");
            if ("mousedown" === c.type)a(t).on("mouseup", D); else if ("pointerdown" === c.type)a(t).on("pointerup", D)
        }

        function D(c) {
            R && (R.removeClass("dwb-a"),
                R = null);
            "mouseup" === c.type ? a(t).off("mouseup", D) : "pointerup" === c.type && a(t).off("pointerup", D)
        }

        function k(a) {
            13 == a.keyCode ? v.select() : 27 == a.keyCode && v.cancel()
        }

        function e(b) {
            var e, d, f, g = E.focusOnClose;
            v._markupRemove();
            c.remove();
            h && !b && setTimeout(function () {
                if (g === w || !0 === g) {
                    j = !0;
                    e = h[0];
                    f = e.type;
                    d = e.value;
                    try {
                        e.type = "button"
                    } catch (c) {
                    }
                    h.focus();
                    e.type = f;
                    e.value = d
                } else g && a(g).focus()
            }, 200);
            v._isVisible = !1;
            V("onHide", [])
        }

        function q(a) {
            clearTimeout(ka[a.type]);
            ka[a.type] = setTimeout(function () {
                var c =
                    "scroll" == a.type;
                (!c || ea) && v.position(!c)
            }, 200)
        }

        function y(a) {
            a.target.nodeType && !J[0].contains(a.target) && J.focus()
        }

        function I(c, b) {
            c && c();
            a(t.activeElement).is("input,textarea") && a(t.activeElement).blur();
            !1 !== v.show() && (h = b, setTimeout(function () {
                j = !1
            }, 300))
        }

        function m() {
            v._fillValue();
            V("onSelect", [v._value])
        }

        function L() {
            V("onCancel", [v._value])
        }

        function K() {
            v.setVal(null, !0)
        }

        var U, G, S, c, H, x, J, l, N, M, R, p, V, Z, F, Q, T, aa, Y, E, ea, ga, ha, fa, v = this, X = a(f), da = [], ka = {};
        d.classes.Base.call(this, f, A, !0);
        v.position =
            function (e) {
                var d, f, g, i, o, oa, k, h, H, q, p = 0, j = 0;
                H = {};
                var B = Math.min(l[0].innerWidth || l.innerWidth(), x.width()), s = l[0].innerHeight || l.innerHeight();
                if (!(ha === B && fa === s && e || Y))if ((v._isFullScreen || /top|bottom/.test(E.display)) && J.width(B), !1 !== V("onPosition", [c, B, s]) && F) {
                    f = l.scrollLeft();
                    e = l.scrollTop();
                    i = E.anchor === w ? X : a(E.anchor);
                    v._isLiquid && "liquid" !== E.layout && (400 > B ? c.addClass("dw-liq") : c.removeClass("dw-liq"));
                    !v._isFullScreen && /modal|bubble/.test(E.display) && (N.width(""), a(".mbsc-w-p", c).each(function () {
                        d =
                            a(this).width(!0);
                        p += d;
                        j = d > j ? d : j
                    }), d = p > B ? j : p, N.width(d + 1).css("white-space", p > B ? "" : "nowrap"));
                    Q = J.width();
                    T = J.height(!0);
                    ea = T <= s && Q <= B;
                    (v.scrollLock = ea) ? G.addClass("mbsc-fr-lock") : G.removeClass("mbsc-fr-lock");
                    "modal" == E.display ? (f = Math.max(0, f + (B - Q) / 2), g = e + (s - T) / 2) : "bubble" == E.display ? (q = !0, h = a(".dw-arrw-i", c), g = i.offset(), oa = Math.abs(G.offset().top - g.top), k = Math.abs(G.offset().left - g.left), o = i.width(), i = i.height(), f = b(k - (J.width(!0) - o) / 2, f + 3, f + B - Q - 3), g = oa - T, g < e || oa >
                    e + s ? (J.removeClass("dw-bubble-top").addClass("dw-bubble-bottom"), g = oa + i) : J.removeClass("dw-bubble-bottom").addClass("dw-bubble-top"), h = h.width(), o = b(k + o / 2 - (f + (Q - h) / 2), 0, h), a(".dw-arr", c).css({left: o})) : "top" == E.display ? g = e : "bottom" == E.display && (g = e + s - T);
                    g = 0 > g ? 0 : g;
                    H.top = g;
                    H.left = f;
                    J.css(H);
                    x.height(0);
                    H = Math.max(g + T, "body" == E.context ? a(t).height() : G[0].scrollHeight);
                    x.css({height: H});
                    if (q && (g + T > e + s || oa > e + s))Y = !0, setTimeout(function () {
                        Y = false
                    }, 300), l.scrollTop(Math.min(g + T - s, H - s));
                    ha = B;
                    fa = s
                }
            };
        v.attachShow = function (a, c) {
            da.push({readOnly: a.prop("readonly"), el: a});
            if ("inline" !== E.display) {
                if (ga && a.is("input"))a.prop("readonly", !0).on("mousedown.dw", function (a) {
                    a.preventDefault()
                });
                if (E.showOnFocus)a.on("focus.dw", function () {
                    j || I(c, a)
                });
                E.showOnTap && (a.on("keydown.dw", function (b) {
                    if (32 == b.keyCode || 13 == b.keyCode)b.preventDefault(), b.stopPropagation(), I(c, a)
                }), v.tap(a, function () {
                    I(c, a)
                }))
            }
        };
        v.select = function () {
            F ? v.hide(!1, "set", !1, m) : m()
        };
        v.cancel = function () {
            F ? v.hide(!1, "cancel", !1, L) : m()
        };
        v.clear = function () {
            V("onClear", [c]);
            F && !v.live ? v.hide(!1, "clear", !1, K) : K()
        };
        v.enable = function () {
            E.disabled = !1;
            v._isInput && X.prop("disabled", !1)
        };
        v.disable = function () {
            E.disabled = !0;
            v._isInput && X.prop("disabled", !0)
        };
        v.show = function (b, e) {
            var f;
            if (!E.disabled && !v._isVisible) {
                v._readValue();
                if (!1 === V("onBeforeShow", []))return !1;
                p = P ? !1 : E.animate;
                !1 !== p && ("top" == E.display && (p = "slidedown"), "bottom" == E.display && (p = "slideup"));
                f = '<div lang="' + E.lang + '" class="mbsc-' + E.theme + (E.baseTheme ? " mbsc-" + E.baseTheme :
                        "") + " dw-" + E.display + " " + (E.cssClass || "") + (v._isLiquid ? " dw-liq" : "") + (P ? " mbsc-old" : "") + (Z ? "" : " dw-nobtn") + '"><div class="dw-persp">' + (F ? '<div class="dwo"></div>' : "") + "<div" + (F ? ' role="dialog" tabindex="-1"' : "") + ' class="dw' + (E.rtl ? " dw-rtl" : " dw-ltr") + '">' + ("bubble" === E.display ? '<div class="dw-arrw"><div class="dw-arrw-i"><div class="dw-arr"></div></div></div>' : "") + '<div class="dwwr"><div aria-live="assertive" class="dw-aria dw-hidden"></div>' + (E.headerText ? '<div class="dwv">' + (g(E.headerText) ? E.headerText :
                        "") + "</div>" : "") + '<div class="dwcc">';
                f += v._generateContent();
                f += "</div>";
                Z && (f += '<div class="dwbc">', a.each(M, function (a, c) {
                    c = g(c) ? v.buttons[c] : c;
                    if (c.handler === "set")c.parentClass = "dwb-s";
                    if (c.handler === "cancel")c.parentClass = "dwb-c";
                    f = f + ("<div" + (E.btnWidth ? ' style="width:' + 100 / M.length + '%"' : "") + ' class="dwbw ' + (c.parentClass || "") + '"><div tabindex="0" role="button" class="dwb' + a + " dwb-e " + (c.cssClass === w ? E.btnClass : c.cssClass) + (c.icon ? " mbsc-ic mbsc-ic-" + c.icon : "") + '">' + (c.text || "") + "</div></div>")
                }),
                    f += "</div>");
                f += "</div></div></div></div>";
                c = a(f);
                x = a(".dw-persp", c);
                H = a(".dwo", c);
                N = a(".dwwr", c);
                S = a(".dwv", c);
                J = a(".dw", c);
                U = a(".dw-aria", c);
                v._markup = c;
                v._header = S;
                v._isVisible = !0;
                aa = "orientationchange resize";
                v._markupReady(c);
                V("onMarkupReady", [c]);
                if (F) {
                    a(n).on("keydown", k);
                    if (E.scrollLock)c.on("touchmove mousewheel wheel", function (a) {
                        ea && a.preventDefault()
                    });
                    "Moz" !== s && a("input,select,button", G).each(function () {
                        this.disabled || a(this).addClass("dwtd").prop("disabled", true)
                    });
                    d.activeInstance &&
                    d.activeInstance.hide();
                    aa += " scroll";
                    d.activeInstance = v;
                    c.appendTo(G);
                    if (E.focusTrap)l.on("focusin", y);
                    r && p && !b && c.on("webkitAnimationEnd animationend", function () {
                        c.off("webkitAnimationEnd animationend");
                        e || J.focus();
                        v.ariaMessage(E.ariaMessage)
                    }).find(".dw")
                } else X.is("div") && !v._hasContent ? X.html(c) : c.insertAfter(X);
                v._markupInserted(c);
                V("onMarkupInserted", [c]);
                v.position();
                l.on(aa, q);
                c.on("selectstart mousedown",
                    O).on("click", ".dwb-e", O).on("keydown", ".dwb-e", function (c) {
                        if (c.keyCode == 32) {
                            c.preventDefault();
                            c.stopPropagation();
                            a(this).click()
                        }
                    }).on("keydown", function (b) {
                        if (b.keyCode == 32)b.preventDefault(); else if (b.keyCode == 9 && F && E.focusTrap) {
                            var e = c.find('[tabindex="0"]').filter(function () {
                                return this.offsetWidth > 0 || this.offsetHeight > 0
                            }), d = e.index(a(":focus", c)), f = e.length - 1, g = 0;
                            if (b.shiftKey) {
                                f = 0;
                                g = -1
                            }
                            if (d === f) {
                                e.eq(g).focus();
                                b.preventDefault()
                            }
                        }
                    });
                a("input,select,textarea", c).on("selectstart mousedown",
                    function (a) {
                        a.stopPropagation()
                    }).on("keydown", function (a) {
                        a.keyCode == 32 && a.stopPropagation()
                    });
                a.each(M, function (b, e) {
                    v.tap(a(".dwb" + b, c), function (a) {
                        e = g(e) ? v.buttons[e] : e;
                        (g(e.handler) ? v.handlers[e.handler] : e.handler).call(this, a, v)
                    }, true)
                });
                E.closeOnOverlay && v.tap(H, function () {
                    v.cancel()
                });
                F && !p && (e || J.focus(), v.ariaMessage(E.ariaMessage));
                c.on("touchstart mousedown pointerdown", ".dwb-e", B).on("touchend", ".dwb-e", D);
                v._attachEvents(c);
                V("onShow", [c, v._tempValue])
            }
        };
        v.hide = function (b, f, g, i) {
            if (!v._isVisible ||
                !g && !v._isValid && "set" == f || !g && !1 === V("onBeforeClose", [v._tempValue, f]))return !1;
            if (c) {
                "Moz" !== s && a(".dwtd", G).each(function () {
                    a(this).prop("disabled", !1).removeClass("dwtd")
                });
                if (r && F && p && !b && !c.hasClass("dw-trans"))c.addClass("dw-out dw-trans").find(".dw").addClass("dw-" + p).on("webkitAnimationEnd animationend", function () {
                    e(b)
                }); else e(b);
                l.off(aa, q).off("focusin", y)
            }
            F && (G.removeClass("mbsc-fr-lock"), a(n).off("keydown", k), delete d.activeInstance);
            i && i();
            V("onClosed", [v._value])
        };
        v.ariaMessage = function (a) {
            U.html("");
            setTimeout(function () {
                U.html(a)
            }, 100)
        };
        v.isVisible = function () {
            return v._isVisible
        };
        v.setVal = i;
        v.getVal = i;
        v._generateContent = i;
        v._attachEvents = i;
        v._readValue = i;
        v._fillValue = i;
        v._markupReady = i;
        v._markupInserted = i;
        v._markupRemove = i;
        v._processSettings = i;
        v._presetLoad = function (a) {
            a.buttons = a.buttons || ("inline" !== a.display ? ["set", "cancel"] : []);
            a.headerText = a.headerText === w ? "inline" !== a.display ? "{value}" : !1 : a.headerText
        };
        v.destroy = function () {
            v.hide(!0, !1, !0);
            a.each(da, function (a, c) {
                c.el.off(".dw").prop("readonly",
                    c.readOnly)
            });
            v._destroy()
        };
        v.init = function (c) {
            c.onClose && (c.onBeforeClose = c.onClose);
            v._init(c);
            v._isLiquid = "liquid" === (E.layout || (/top|bottom/.test(E.display) ? "liquid" : ""));
            v._processSettings();
            X.off(".dw");
            M = E.buttons || [];
            F = "inline" !== E.display;
            ga = E.showOnFocus || E.showOnTap;
            l = a("body" == E.context ? n : E.context);
            G = a(E.context);
            v.context = l;
            v.live = !0;
            a.each(M, function (a, c) {
                if (c == "ok" || c == "set" || c.handler == "set")return v.live = false
            });
            v.buttons.set = {text: E.setText, handler: "set"};
            v.buttons.cancel = {
                text: v.live ?
                    E.closeText : E.cancelText, handler: "cancel"
            };
            v.buttons.clear = {text: E.clearText, handler: "clear"};
            v._isInput = X.is("input");
            Z = 0 < M.length;
            v._isVisible && v.hide(!0, !1, !0);
            V("onInit", []);
            F ? (v._readValue(), v._hasContent || v.attachShow(X)) : v.show();
            X.on("change.dw", function () {
                v._preventChange || v.setVal(X.val(), true, false);
                v._preventChange = false
            })
        };
        v.buttons = {};
        v.handlers = {set: v.select, cancel: v.cancel, clear: v.clear};
        v._value = null;
        v._isValid = !0;
        v._isVisible = !1;
        E = v.settings;
        V = v.trigger;
        o || v.init(A)
    };
    d.classes.Frame.prototype._defaults =
    {
        lang: "en",
        setText: "Set",
        selectedText: "{count} selected",
        closeText: "Close",
        cancelText: "Cancel",
        clearText: "Clear",
        disabled: !1,
        closeOnOverlay: !0,
        showOnFocus: !1,
        showOnTap: !0,
        display: "modal",
        scrollLock: !0,
        tap: !0,
        btnClass: "dwb",
        btnWidth: !0,
        focusTrap: !0,
        focusOnClose: !f
    };
    d.themes.frame.mobiscroll = {
        rows: 5,
        showLabel: !1,
        headerText: !1,
        btnWidth: !1,
        selectedLineHeight: !0,
        selectedLineBorder: 1,
        dateOrder: "MMddyy",
        weekDays: "min",
        checkIcon: "ion-ios7-checkmark-empty",
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
    };
    a(n).on("focus", function () {
        h && (j = !0)
    })
})($, window, document);
(function (a, n, t, w) {
    var h, j = a.extend, d = a.mobiscroll, f = d.classes, s = d.util, r = s.prefix, b = s.jsPrefix, g = s.has3d, P = s.getCoord, i = s.testTouch, O = s.vibrate, u = 1, A = function () {
    }, o = n.requestAnimationFrame || function (a) {
            a()
        }, B = n.cancelAnimationFrame || A, D = "webkitAnimationEnd animationend", k = "transparent";
    f.ListView = function (e, d) {
        function y() {
            Kb = Lb = !1;
            fc = oa = 0;
            gc = new Date;
            ab = ja.width();
            Db = ea(ja);
            ra = Db.index(ba);
            Ca = ba.height();
            La = ba[0].offsetTop;
            za = ub[ba.attr("data-type") || "defaults"];
            Eb = za.stages
        }

        function I(c) {
            "touchstart" ===
            c.type && (Mb = !0, clearTimeout(hc));
            if (i(c, this) && !pa && !ib && !h && !Nb && a.mobiscroll.running && (Fa = pa = !0, Ob = P(c, "X"), Pb = P(c, "Y"), Ea = la = 0, ba = a(this), y(), Xb = ca.onItemTap || za.tap || ba.hasClass("mbsc-lv-parent") || ba.hasClass("mbsc-lv-back"), Ma.offset(), pb = ba.offset().top, Xb && (Ba = setTimeout(function () {
                    ba.addClass("mbsc-lv-item-active");
                    xa("onItemActivate", [ba, c])
                }, 120)), $.sortable && !ba.hasClass("mbsc-lv-back") && (($.sortable.group || (Yb = ba.nextUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item"), Zb = ba.prevUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item")),
                    qb = (!$.sortable.group ? Zb.length ? Zb.eq(-1) : ba : ja.children("li").eq(0))[0].offsetTop - La, jb = (!$.sortable.group ? Yb.length ? Yb.eq(-1) : ba : ja.children("li").eq(-1))[0].offsetTop - La, $.sortable.handle) ? a(c.target).hasClass("mbsc-lv-handle") && (clearTimeout(Ba), "Moz" === b ? (c.preventDefault(), S()) : Qb = setTimeout(function () {
                    S()
                }, 100)) : Qb = setTimeout(function () {
                    if (ca.fillAnimation) {
                        va.appendTo(ba);
                        va[0].style[b + "Animation"] = "mbsc-lv-fill " + (ca.sortDelay - 100) + "ms linear"
                    }
                    clearTimeout(bb);
                    clearTimeout(Ba);
                    Fa = false;
                    Qb =
                        setTimeout(function () {
                            va[0].style[b + "Animation"] = "";
                            S()
                        }, ca.sortDelay - 80)
                }, 80)), "mousedown" == c.type))a(t).on("mousemove", m).on("mouseup", L)
        }

        function m(a) {
            var c = !1, b = !0;
            if (pa)if (rb = P(a, "X"), Fb = P(a, "Y"), la = rb - Ob, Ea = Fb - Pb, clearTimeout(bb), !Wa && !kb && !vb && !ba.hasClass("mbsc-lv-back") && (10 < Math.abs(Ea) ? (vb = !0, ba.trigger("mousemove" == a.type ? "mouseup" : "touchend"), clearTimeout(Ba)) : 7 < Math.abs(la) ? K() : "touchmove" === a.type && (bb = setTimeout(function () {
                    ba.trigger("touchend")
                }, 300))), kb)a.preventDefault(), oa = 100 *
                (la / ab), U(); else if (Wa) {
                a.preventDefault();
                var e, d = Ha.scrollTop(), a = Math.max(qb, Math.min(Ea + wb, jb)), f = Ta ? pb - $b + d - wb : pb;
                Gb + d < f + a + Ca ? (Ha.scrollTop(f + a - Gb + Ca), e = !0) : f + a < d && (Ha.scrollTop(f + a), e = !0);
                e && (e = Ta ? Ha.scrollTop() - d : 0, wb += e);
                if (lb && ($.sortable.multiLevel && sa.hasClass("mbsc-lv-parent") ? La + Ca / 4 + a > lb ? c = !0 : La + Ca - Ca / 4 + a > lb && (Ia = sa.addClass("mbsc-lv-item-hl"), b = !1) : La + Ca / 2 + a > lb && (sa.hasClass("mbsc-lv-back") ? $.sortable.multiLevel && (ma = sa.addClass("mbsc-lv-item-hl"), b = !1) : c = !0), c))cb.insertAfter(sa),
                    Na = sa, sa = ha(sa, "next"), mb = lb, lb = sa.length && sa[0].offsetTop, ya++;
                if (!c && mb && ($.sortable.multiLevel && Na.hasClass("mbsc-lv-parent") ? La + Ca - Ca / 4 + a < mb ? c = !0 : La + Ca / 4 + a < mb && (Ia = Na.addClass("mbsc-lv-item-hl"), b = !1) : La + Ca / 2 + a < mb && (Na.hasClass("mbsc-lv-back") ? $.sortable.multiLevel && (ma = Na.addClass("mbsc-lv-item-hl"), b = !1) : c = !0), c))cb.insertBefore(Na), sa = Na, Na = ha(Na, "prev"), lb = mb, mb = Na.length && Na[0].offsetTop + Na.height(), ya--;
                if (b && (Ia && (Ia.removeClass("mbsc-lv-item-hl"), Ia = !1), ma))ma.removeClass("mbsc-lv-item-hl"),
                    ma = !1;
                c && xa("onSortChange", [ba, ya]);
                p(ba, a);
                xa("onSort", [ba, ya])
            } else(5 < Math.abs(la) || 5 < Math.abs(Ea)) && V()
        }

        function L(b) {
            var e, d;
            if (pa) {
                pa = !1;
                V();
                "mouseup" == b.type && a(t).off("mousemove", m).off("mouseup", L);
                vb || (hc = setTimeout(function () {
                    Mb = !1
                }, 300));
                if (kb || vb || Wa)Kb = !0;
                kb ? G() : Wa ? (e = ja, Ia ? (T(ba.detach()), b = db[Ia.attr("data-ref")], ya = ea(b.child).length, Ia.removeClass("mbsc-lv-item-hl"), ca.navigateOnDrop ? ka(Ia, function () {
                    $.add(null, ba, null, null, Ia, !0);
                    X(ba);
                    c(ba, ra, e, !0)
                }) : ($.add(null, ba, null, null, Ia,
                    !0), c(ba, ra, e, !0))) : ma ? (T(ba.detach()), b = db[ma.attr("data-back")], ya = ea(b.parent).index(b.item) + 1, ma.removeClass("mbsc-lv-item-hl"), ca.navigateOnDrop ? ka(ma, function () {
                    $.add(null, ba, ya, null, ja, !0);
                    X(ba);
                    c(ba, ra, e, !0)
                }) : ($.add(null, ba, ya, null, b.parent, !0), c(ba, ra, e, !0))) : (b = cb[0].offsetTop - La, p(ba, b, 6 * Math.abs(b - Math.max(qb, Math.min(Ea + wb, jb))), function () {
                    T(ba);
                    ba.insertBefore(cb);
                    c(ba, ra, e, ya !== ra)
                })), Wa = !1) : !vb && 5 > Math.abs(la) && 5 > Math.abs(Ea) && (za.tap && (d = za.tap.call(Qa, ba, ra, b, $)), Xb && ("touchend" ===
                b.type && s.preventClick(), ba.addClass("mbsc-lv-item-active"), xa("onItemActivate", [ba, b])), d = xa("onItemTap", [ba, ra, b]), !1 !== d && ka(ba));
                clearTimeout(Ba);
                setTimeout(function () {
                    ba.removeClass("mbsc-lv-item-active");
                    xa("onItemDeactivate", [ba])
                }, 100);
                vb = !1;
                Ja = null
            }
        }

        function K() {
            if (kb = aa(za.swipe, [ba, ra, 0 < la ? "right" : "left", $]))V(), clearTimeout(Ba), za.actions ? (ia = v(za), Oa.html(za.icons).show().children().css("width", ia + "%"), Oa.find(".mbsc-lv-multi-ic-right").css("margin-left", 100 - ia + "%"), Da.hide(), a(".mbsc-lv-ic-m",
                Aa).removeClass("mbsc-lv-ic-disabled"), a(za.leftMenu).each(x), a(za.rightMenu).each(x)) : (Da.show(), Oa.hide(), Ra = za.start + (0 < la ? 0 : 1), sb = Eb[Ra - 1], tb = Eb[Ra]), ba.addClass("mbsc-lv-item-swiping").removeClass("mbsc-lv-item-active"), Rb.css("line-height", Ca + "px"), Aa.css({
                top: La,
                height: Ca,
                backgroundColor: (0 < la ? za.right : za.left).color || k
            }).addClass("mbsc-lv-stage-c-v").appendTo(ja), ca.iconSlide && ba.append(Da), xa("onSlideStart", [ba, ra])
        }

        function U() {
            var a = !1;
            if (!Sb) {
                if (za.actions)Aa.attr("class", "mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-" +
                    (0 > oa ? "right" : "left")); else if (sb && oa <= sb.percent ? (Ra--, tb = sb, sb = Eb[Ra], a = !0) : tb && oa >= tb.percent && (Ra++, sb = tb, tb = Eb[Ra], a = !0), a)if (Ja = 0 < oa ? sb : tb)Z(Ja, ca.iconSlide), xa("onStageChange", [ba, ra, Ja]);
                xb || (Sb = !0, ic = o(N))
            }
        }

        function G(c) {
            var b, e, d = !1;
            B(ic);
            Sb = !1;
            xb || N();
            if (za.actions)10 < Math.abs(oa) && ia && (R(ba, 0 > oa ? -ia : ia, 200), h = d = !0, Ka = ba, gb = ra, a(t).on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function (a) {
                a.preventDefault();
                M(ba, !0, c)
            })); else if (ca.quickSwipe && !xb && (e = new Date - gc, b = 300 > e && -50 > la,
                    e = 300 > e && 50 < la, b ? (Lb = !0, Ja = za.left, Z(Ja, ca.iconSlide)) : e && (Lb = !0, Ja = za.right, Z(Ja, ca.iconSlide))), Ja && Ja.action)Sa = aa(Ja.disabled, [ba, ra, $]), Sa || (d = !0, (h = xb || aa(Ja.confirm, [ba, ra, $])) ? (R(ba, 100 * (0 > oa ? -1 : 1) * Da.width(!0) / ab, 200, !0), l(Ja, ba, ra, !1, c)) : J(Ja, ba, ra, c));
            d || M(ba, !0, c);
            kb = !1
        }

        function S() {
            Wa = !0;
            ma = Ia = !1;
            wb = 0;
            ya = ra;
            ca.vibrate && O();
            sa = ha(ba, "next");
            lb = sa.length && sa[0].offsetTop;
            Na = ha(ba, "prev");
            mb = Na.length && Na[0].offsetTop + Na.height();
            cb.height(Ca).insertAfter(ba);
            ba.css({top: La}).addClass("mbsc-lv-item-dragging").removeClass("mbsc-lv-item-active").appendTo(Ua);
            xa("onSortStart", [ba, ya])
        }

        function c(a, c, b, e) {
            a.removeClass("mbsc-lv-item-dragging");
            cb.remove();
            xa("onSortStop", [a, ya]);
            ca.vibrate && O();
            e && ($.addUndoAction(function (e) {
                $.move(a, c, null, e, b, !0)
            }, !0), xa("onSortUpdate", [a, ya]))
        }

        function H() {
            Mb || (clearTimeout(Hb), h && a(t).trigger("touchstart"), yb && ($.close(Ga, Xa), yb = !1, Ga = null))
        }

        function x(c, b) {
            aa(b.disabled, [ba, ra, $]) && a(".mbsc-ic-" + b.icon, Aa).addClass("mbsc-lv-ic-disabled")
        }

        function J(c, b, e, d) {
            var f, g = {
                icon: "undo2", text: ca.undoText, color: "#b1b1b1", action: function () {
                    $.undo()
                }
            };
            c.undo && ($.startActionTrack(), a.isFunction(c.undo) && $.addUndoAction(function () {
                c.undo.call(Qa, b, $, e)
            }), Tb = b.attr("data-ref"));
            f = c.action.call(Qa, b, $, e);
            c.undo ? ($.endActionTrack(), !1 !== f && R(b, 0 > +b.attr("data-pos") ? -100 : 100, 200), cb.height(Ca).insertAfter(b), b.css("top", La).addClass("mbsc-lv-item-undo"), Oa.hide(), Da.show(), Aa.append(Da), Z(g), l(g, b, e, !0, d)) : M(b, f, d)
        }

        function l(c, b, e, d, f) {
            var g, oa;
            h = !0;
            a(t).off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function (a) {
                a.preventDefault();
                d && Q(b);
                M(b, !0, f)
            });
            if (!Ya)Da.off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function (a) {
                a.stopPropagation();
                g = P(a, "X");
                oa = P(a, "Y")
            }).on("touchend.mbsc-lv-conf mouseup.mbsc-lv-conf", function (a) {
                a.preventDefault();
                "touchend" === a.type && s.preventClick();
                20 > Math.abs(P(a, "X") - g) && 20 > Math.abs(P(a, "Y") - oa) && (J(c, b, e, f), d && (Ub = null, Q(b)))
            })
        }

        function N() {
            R(ba, fc + 100 * la / ab);
            Sb = !1
        }

        function M(c, b, e) {
            a(t).off(".mbsc-lv-conf");
            Da.off(".mbsc-lv-conf");
            !1 !== b ? R(c, 0, "0" !== c.attr("data-pos") ?
                200 : 0, !1, function () {
                F(c, e);
                T(c)
            }) : F(c, e);
            h = !1
        }

        function R(a, c, e, d, f) {
            c = Math.max("right" == kb ? 0 : -100, Math.min(c, "left" == kb ? 0 : 100));
            Za = a[0].style;
            a.attr("data-pos", c);
            g ? (Za[b + "Transform"] = "translate3d(" + (d ? ab * c / 100 + "px" : c + "%") + ",0,0)", Za[b + "Transition"] = r + "transform " + (e || 0) + "ms") : Za.left = c + "%";
            f && (ib++, setTimeout(function () {
                f();
                ib--
            }, e));
            oa = c
        }

        function p(a, c, e, d) {
            c = Math.max(qb, Math.min(c, jb));
            Za = a[0].style;
            g ? (Za[b + "Transform"] = "translate3d(0," + c + "px,0)", Za[b + "Transition"] = r + "transform " + (e || 0) + "ms ease-out") :
                Za.top = La + c + "px";
            d && (ib++, setTimeout(function () {
                d();
                ib--
            }, e))
        }

        function V() {
            clearTimeout(Qb);
            !Fa && $.sortable && ca.fillAnimation && (Fa = !0, va.remove())
        }

        function Z(a, c) {
            var b = aa(a.text, [ba, ra, $]) || "";
            aa(a.disabled, [ba, ra, $]) ? Aa.addClass("mbsc-lv-ic-disabled") : Aa.removeClass("mbsc-lv-ic-disabled");
            Aa.css("background-color", a.color || (0 === a.percent ? (0 < oa ? za.right : za.left).color || k : k));
            Da.attr("class", "mbsc-lv-ic-c mbsc-lv-ic-" + (c ? "move-" : "") + (0 > oa ? "right" : "left"));
            na.attr("class", " mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-" +
                (a.icon || "none"));
            Rb.attr("class", "mbsc-lv-ic-text" + (a.icon ? "" : " mbsc-lv-ic-text-only") + (b ? "" : " mbsc-lv-ic-only")).html(b || "&nbsp;");
            ca.animateIcons && (Lb ? na.addClass("mbsc-lv-ic-v") : setTimeout(function () {
                na.addClass("mbsc-lv-ic-a")
            }, 10))
        }

        function F(a, c) {
            pa || (na.attr("class", "mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"), Aa.attr("style", "").removeClass("mbsc-lv-stage-c-v"), Rb.html(""));
            Aa.removeClass("mbsc-lv-left mbsc-lv-right");
            a && (xa("onSlideEnd", [a, ra]), c && c())
        }

        function Q(a) {
            a.css("top", "").removeClass("mbsc-lv-item-undo");
            Ub ? $.animate(cb, "collapse", function () {
                cb.remove()
            }) : cb.remove();
            F();
            Ub = Tb = null
        }

        function T(a) {
            Za = a[0].style;
            Za[b + "Transform"] = "";
            Za[b + "Transition"] = "";
            Za.top = "";
            a.removeClass("mbsc-lv-item-swiping")
        }

        function aa(c, b) {
            return a.isFunction(c) ? c.apply(this, b) : c
        }

        function Y(c) {
            var b;
            c.attr("data-ref") || (b = u++, c.attr("data-ref", b), db[b] = {
                item: c,
                child: c.children("ul,ol"),
                parent: c.parent(),
                ref: c.parent()[0] === Qa ? null : c.parent().parent().attr("data-ref")
            });
            c.addClass("mbsc-lv-item");
            $.sortable.handle && "list-divider" !=
            c.attr("data-role") && !c.children(".mbsc-lv-handle-c").length && c.append(nb);
            if (ca.enhance && !c.hasClass("mbsc-lv-item-enhanced")) {
                b = c.attr("data-icon");
                var e = c.find("img").eq(0).addClass("mbsc-lv-img");
                e.is(":first-child") ? c.addClass("mbsc-lv-img-" + (ca.rtl ? "right" : "left")) : e.length && c.addClass("mbsc-lv-img-" + (ca.rtl ? "left" : "right"));
                c.addClass("mbsc-lv-item-enhanced").children().each(function (c, b) {
                    b = a(b);
                    b.is("p, h1, h2, h3, h4, h5, h6") && b.addClass("mbsc-lv-txt")
                });
                b && c.addClass("mbsc-lv-item-ic-" +
                    (c.attr("data-icon-align") || (ca.rtl ? "right" : "left"))).append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' + b + '"></div')
            }
            c.append($._processItem(a, 0.2))
        }

        function E(c) {
            a("li", c).not(".mbsc-lv-item").each(function () {
                Y(a(this))
            });
            a('li[data-role="list-divider"]', c).removeClass("mbsc-lv-item").addClass("mbsc-lv-gr-title");
            a("ul,ol", c).not(".mbsc-lv").addClass("mbsc-lv").prepend(Pa).parent().addClass("mbsc-lv-parent").prepend($a);
            a(".mbsc-lv-back", c).each(function () {
                a(this).attr("data-back", a(this).parent().parent().attr("data-ref"))
            })
        }

        function ea(a) {
            return a.children("li").not(".mbsc-lv-back").not(".mbsc-lv-removed").not(".mbsc-lv-ph")
        }

        function ga(c) {
            "object" !== typeof c && (c = a('li[data-id="' + c + '"]', wa));
            return c
        }

        function ha(a, c) {
            for (a = a[c](); a.length && (!a.hasClass("mbsc-lv-item") || a.hasClass("mbsc-lv-ph") || a.hasClass("mbsc-lv-item-dragging"));) {
                if (!$.sortable.group && a.hasClass("mbsc-lv-gr-title"))return !1;
                a = a[c]()
            }
            return a
        }

        function fa(a) {
            return s.isNumeric(a) ? a + "" : 0
        }

        function v(a) {
            return +(0 > la ? fa((a.actionsWidth || 0).right) || fa(a.actionsWidth) ||
            fa(ca.actionsWidth.right) || fa(ca.actionsWidth) : fa((a.actionsWidth || 0).left) || fa(a.actionsWidth) || fa(ca.actionsWidth.left) || fa(ca.actionsWidth))
        }

        function X(a) {
            var c;
            a && (a = a.offset().top, c = Ta ? $b : Ha.scrollTop(), a < c ? Ha.scrollTop(a - (Ta ? Ha.children().offset().top : 0)) : a > c + Gb && Ha.scrollTop(a - Gb / 2))
        }

        function da(a, c, b, e) {
            var d = c.parent(), f = c.prev(), e = e || A;
            f[0] === Da[0] && (f = Da.prev());
            ja[0] !== c[0] ? (xa("onNavStart", [zb, a, c]), ac.prepend(c.addClass("mbsc-lv-v mbsc-lv-sl-new")), X(wa), W(ac, "mbsc-lv-sl-" + a, function () {
                ja.removeClass("mbsc-lv-sl-curr");
                c.removeClass("mbsc-lv-sl-new").addClass("mbsc-lv-sl-curr");
                hb && hb.length ? ja.removeClass("mbsc-lv-v").insertAfter(hb) : ob.append(ja.removeClass("mbsc-lv-v"));
                hb = f;
                ob = d;
                ja = c;
                X(b);
                e.call(Qa, b);
                xa("onNavEnd", [zb, a, c])
            })) : (X(b), e.call(Qa, b))
        }

        function ka(a, c) {
            ib || (a.hasClass("mbsc-lv-parent") ? (zb++, da("r", db[a.attr("data-ref")].child, null, c)) : a.hasClass("mbsc-lv-back") && (zb--, da("l", db[a.attr("data-back")].parent, db[a.attr("data-back")].item, c)))
        }

        function W(a, c, b) {
            function e() {
                clearTimeout(d);
                ib--;
                a.off(D,
                    e).removeClass(c);
                b.call(Qa, a)
            }

            var d, b = b || A;
            g && ca.animation && "mbsc-lv-item-none" !== c ? (ib++, a.on(D, e).addClass(c), d = setTimeout(e, 500)) : b.call(Qa, a)
        }

        function C(a, c) {
            var b, e = a.attr("data-ref");
            b = bc[e] = bc[e] || [];
            c && b.push(c);
            a.attr("data-action") || (c = b.shift(), a.attr("data-action", 1), c(function () {
                a.removeAttr("data-action");
                b.length ? C(a) : delete bc[e]
            }))
        }

        function ua(c, b, e) {
            var d, f;
            c && c.length && (d = 100 / (c.length + 2), a.each(c, function (a, g) {
                g.key === w && (g.key = cc++);
                g.percent === w && (g.percent = b * d * (a + 1), e && (f =
                    j({}, g), f.key = cc++, f.percent = -d * (a + 1), c.push(f), Vb[f.key] = f));
                Vb[g.key] = g
            }))
        }

        var pa, ia, Ba, oa, Fa, Ka, gb, wa, ya, qa, ja, hb, ob, Db, Ja, Ra, Va, Ya, Sa, la, Ea, Ia, ma, Wa, Ua, bb, rb, Fb, xa, va, eb, ta, Ab, Bb, Wb, z, Ta, nb, Ib, Ga, yb, Xa, fb, Hb, Pa, $a, na, Da, Aa, ab, ba, Ca, ra, pb, jb, qb, Oa, sa, lb, tb, Yb, Kb, Mb, hc, Zb, cb, Na, mb, sb, Lb, ic, Sb, ca, vb, xb, ac, cc, Eb, fc, gc, Ob, Pb, Za, kb, dc, jc, Xb, Rb, Qb, za, ub, Tb, Ub, Ha, Gb, wb, $b, $ = this, Qa = e, Ma = a(Qa), ib = 0, zb = 0, La = 0, Vb = {}, bc = {}, db = {};
        f.Base.call(this, e, d, !0);
        $._processItem = new Function("$, p", function () {
            var a =
                [5, 2], c;
            a:{
                c = a[0];
                var b;
                for (b = 0; 16 > b; ++b)if (1 == c * b % 16) {
                    c = [b, a[1]];
                    break a
                }
                c = void 0
            }
            a = c[0];
            c = c[1];
            b = "";
            var e;
            for (e = 0; 1062 > e; ++e)b += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[e]) -
            a * c) % 16 + 16) % 16];
            c = b;
            b = c.length;
            a = [];
            for (e = 0; e < b; e += 2)a.push(c[e] + c[e + 1]);
            c = "";
            b = a.length;
            for (e = 0; e < b; e++)c += String.fromCharCode(parseInt(a[e], 16));
            c = c.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
            return c
        }());
        $.animate = function (a, c, b) {
            W(a, "mbsc-lv-item-" + c, b)
        };
        $.add = function (c, b, e, d, f, g) {
            var oa, i, l, o, k, x, h = "", H = f === w ? Ma : ga(f), q = H, p = "object" !== typeof b ? a('<li data-ref="' + u++ + '" data-id="' + c + '">' + b + "</li>") : b, B = 0 > p.attr("data-pos") ? "left" : "right", F = p.attr("data-ref"), d = d || A;
            F || (F = u++, p.addClass("mbsc-lv-item").attr("data-ref", F));
            Y(p);
            g || $.addUndoAction(function (a) {
                o ?
                    $.navigate(H, function () {
                        q.remove();
                        H.removeClass("mbsc-lv-parent").children(".mbsc-lv-arr").remove();
                        k.child = H.children("ul,ol");
                        $.remove(p, null, a, true)
                    }) : $.remove(p, null, a, true)
            }, !0);
            C(p, function (c) {
                T(p.css("top", "").removeClass("mbsc-lv-item-undo"));
                if (H.is("li")) {
                    x = H.attr("data-ref");
                    if (!H.children("ul,ol").length) {
                        o = true;
                        H.append("<ul></ul>")
                    }
                } else x = H.children(".mbsc-lv-back").attr("data-back");
                if (k = db[x])if (k.child.length)q = k.child; else {
                    H.addClass("mbsc-lv-parent").prepend($a);
                    q = H.children("ul,ol").prepend(Pa).addClass("mbsc-lv");
                    k.child = q;
                    a(".mbsc-lv-back", H).attr("data-back", x)
                }
                db[F] = {item: p, child: p.children("ul,ol"), parent: q, ref: x};
                l = ea(q);
                i = l.length;
                if (e === w || e === null)e = i;
                g && (h = "mbsc-lv-item-new-" + (g ? B : ""));
                E(p.addClass(h));
                if (e !== false)if (i)e < i ? p.insertBefore(l.eq(e)) : p.insertAfter(l.eq(i - 1)); else {
                    oa = a(".mbsc-lv-back", q);
                    oa.length ? p.insertAfter(oa) : q.append(p)
                }
                if (q.hasClass("mbsc-lv-v"))$.animate(p.height(p.height()), g && Tb === F ? "none" : "expand", function (a) {
                    $.animate(a.height(""), g ? "add-" + B : "pop-in", function (a) {
                        d.call(Qa,
                            a.removeClass(h));
                        c()
                    })
                }); else {
                    d.call(Qa, p.removeClass(h));
                    c()
                }
                wa.trigger("mbsc-enhance", [{theme: ca.theme, lang: ca.lang}]);
                xa("onItemAdd", [p])
            })
        };
        $.swipe = function (a, c, b, e, d) {
            ba = a = ga(a);
            Ya = e;
            pa = xb = !0;
            b = b === w ? 300 : b;
            la = 0 < c ? 1 : -1;
            y();
            K();
            R(a, c, b);
            clearTimeout(jc);
            clearInterval(dc);
            dc = setInterval(function () {
                oa = 100 * (s.getPosition(a) / ab);
                U()
            }, 10);
            jc = setTimeout(function () {
                clearInterval(dc);
                oa = c;
                U();
                G(d);
                pa = xb = Ya = !1
            }, b)
        };
        $.openStage = function (a, c, b, e) {
            Vb[c] && $.swipe(a, Vb[c].percent, b, e)
        };
        $.openActions = function (a,
                                  c, b, e) {
            var d = v(ub[a.attr("data-type") || "defaults"]);
            $.swipe(a, "left" == c ? -d : d, b, e)
        };
        $.close = function (a, c) {
            $.swipe(a, 0, c)
        };
        $.remove = function (a, c, b, e) {
            var d, f, b = b || A, a = ga(a);
            a.length && (f = a.parent(), d = ea(f).index(a), e || (a.attr("data-ref") === Tb && (Ub = !0), $.addUndoAction(function (c) {
                $.add(null, a, d, c, f, !0)
            }, !0)), C(a, function (d) {
                c = c || a.attr("data-pos") < 0 ? "left" : "right";
                if (f.hasClass("mbsc-lv-v"))$.animate(a.addClass("mbsc-lv-removed"), e ? "pop-out" : "remove-" + c, function (a) {
                    $.animate(a.height(a.height()),
                        "collapse", function (a) {
                            T(a.height("").removeClass("mbsc-lv-removed").remove());
                            b.call(Qa, a);
                            d()
                        })
                }); else {
                    a.remove();
                    b.call(Qa, a);
                    d()
                }
                xa("onItemRemove", [a])
            }))
        };
        $.move = function (a, c, b, e, d, f) {
            a = ga(a);
            f || $.startActionTrack();
            Aa.append(Da);
            $.remove(a, b, null, f);
            $.add(null, a, c, e, d, f);
            f || $.endActionTrack()
        };
        $.navigate = function (a, c) {
            var b, e, a = ga(a);
            b = db[a.attr("data-ref")];
            e = 0;
            for (var d = db[a.attr("data-ref")]; d.ref;)e++, d = db[d.ref];
            b && (da(e >= zb ? "r" : "l", b.parent, a, c), zb = e)
        };
        $.init = function (c) {
            var b = Ma.find("ul,ol").length ?
                "left" : "right", e = 0, d = "", f = "", i = "";
            $._init(c);
            c = ca.sort || ca.sortable;
            "group" === c && (c = {group: !1, multiLevel: !0});
            !0 === c && (c = {group: !0, multiLevel: !0, handle: ca.sortHandle});
            c && c.handle === w && (c.handle = ca.sortHandle);
            $.sortable = c || !1;
            d += '<div class="mbsc-lv-multi-c"></div><div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>';
            Ma.addClass("mbsc-lv mbsc-lv-v mbsc-lv-root").show();
            Aa = a('<div class="mbsc-lv-stage-c">' + d + "</div>");
            Da = a(".mbsc-lv-ic-c", Aa);
            Oa = a(".mbsc-lv-multi-c", Aa);
            na = a(".mbsc-lv-ic-s", Aa);
            Rb = a(".mbsc-lv-ic-text", Aa);
            cb = a('<li class="mbsc-lv-item mbsc-lv-ph"></li>');
            va = a('<div class="mbsc-lv-fill-item"></div>');
            wa = a('<div class="mbsc-lv-cont mbsc-lv-' + ca.theme + (ca.baseTheme ? " mbsc-lv-" + ca.baseTheme : "") + (ca.animateIcons ? " mbsc-lv-ic-anim" : "") + (g ? "" : " mbsc-lv-no3d") + (ca.altRow ? " mbsc-lv-alt-row " : "") + '"><ul class="mbsc-lv mbsc-lv-dummy"></ul><div class="mbsc-lv-sl-c"></div></div>');
            Ta = "body" !== ca.context;
            Ha =
                a(Ta ? ca.context : n);
            Ua = a(".mbsc-lv-dummy", wa);
            wa.insertAfter(Ma);
            $.sortable.handle && (z = !0 === $.sortable.handle ? b : $.sortable.handle, nb = '<div class="mbsc-lv-handle-c mbsc-lv-item-h-' + z + ' mbsc-lv-handle"><div class="' + ca.handleClass + ' mbsc-lv-handle-bar-c mbsc-lv-handle">' + ca.handleMarkup + "</div></div>", wa.addClass("mbsc-lv-handle-" + z));
            Ha.on("orientationchange.mbsc-lv resize.mbsc-lv", function () {
                clearTimeout(Va);
                Va = setTimeout(function () {
                    Gb = Ha[0].innerHeight || Ha.innerHeight();
                    $b = Ta ? Ha.offset().top : 0;
                    if (pa) {
                        La =
                            ba[0].offsetTop;
                        Ca = ba.height();
                        Aa.css({top: La, height: Ca})
                    }
                }, 200)
            }).trigger("resize.mbsc-lv");
            wa.on("touchstart mousedown", ".mbsc-lv-item", I).on("touchmove", ".mbsc-lv-item", m).on("touchend touchcancel", ".mbsc-lv-item", L);
            Qa.addEventListener && Qa.addEventListener("click", function (a) {
                if (Kb) {
                    a.stopPropagation();
                    a.preventDefault();
                    Kb = false
                }
            }, !0);
            wa.on("touchstart mousedown", ".mbsc-lv-ic-m", function (a) {
                if (!Ya) {
                    a.stopPropagation();
                    a.preventDefault()
                }
                Ob = P(a, "X");
                Pb = P(a, "Y")
            }).on("touchend mouseup", ".mbsc-lv-ic-m",
                function (c) {
                    if (!Ya) {
                        c.type === "touchend" && s.preventClick();
                        h && !a(this).hasClass("mbsc-lv-ic-disabled") && Math.abs(P(c, "X") - Ob) < 20 && Math.abs(P(c, "Y") - Pb) < 20 && J((oa < 0 ? za.rightMenu : za.leftMenu)[a(this).index()], Ka, gb)
                    }
                });
            ac = a(".mbsc-lv-sl-c", wa).append(Ma.addClass("mbsc-lv-sl-curr")).attr("data-ref", u++);
            ja = Ma;
            ob = wa;
            Pa = '<li class="mbsc-lv-item mbsc-lv-back">' + ca.backText + '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + ca.leftArrowClass + '"></div></li>';
            $a = '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + ca.rightArrowClass +
                '"></div>';
            E(Ma);
            cc = 0;
            ub = ca.itemGroups || {};
            ub.defaults = {
                swipeleft: ca.swipeleft,
                swiperight: ca.swiperight,
                stages: ca.stages,
                actions: ca.actions,
                actionsWidth: ca.actionsWidth
            };
            a.each(ub, function (c, b) {
                b.swipe = b.swipe || ca.swipe;
                b.stages = b.stages || [];
                ua(b.stages, 1, true);
                ua(b.stages.left, 1);
                ua(b.stages.right, -1);
                if (b.stages.left || b.stages.right)b.stages = [].concat(b.stages.left || [], b.stages.right || []);
                eb = false;
                if (!b.stages.length) {
                    b.swipeleft && b.stages.push({percent: -30, action: b.swipeleft});
                    b.swiperight && b.stages.push({
                        percent: 30,
                        action: b.swiperight
                    })
                }
                a.each(b.stages, function (a, c) {
                    if (c.percent === 0) {
                        eb = true;
                        return false
                    }
                });
                eb || b.stages.push({percent: 0});
                b.stages.sort(function (a, c) {
                    return a.percent - c.percent
                });
                a.each(b.stages, function (a, c) {
                    if (c.percent === 0) {
                        b.start = a;
                        return false
                    }
                });
                if (eb)b.left = b.right = b.stages[b.start]; else {
                    b.left = b.stages[b.start - 1] || {};
                    b.right = b.stages[b.start + 1] || {}
                }
                if (b.actions) {
                    b.leftMenu = b.actions.left || b.actions;
                    b.rightMenu = b.actions.right || b.leftMenu;
                    i = f = "";
                    for (e = 0; e < b.leftMenu.length; e++)f = f + ('<div class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' +
                        b.leftMenu[e].icon + '"></div>');
                    for (e = 0; e < b.rightMenu.length; ++e)i = i + ('<div class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + b.rightMenu[e].icon + '"></div>');
                    if (b.actions.left)b.swipe = b.actions.right ? b.swipe : "right";
                    if (b.actions.right)b.swipe = b.actions.left ? b.swipe : "left";
                    b.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + f + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + i + "</div>"
                }
            });
            ca.fixedHeader && (ta = a('<div class="mbsc-lv-fixed-header"></div>'), Ab = a(".mbsc-lv-gr-title", Ma),
                Ta ? (Ha.before(ta), ta.addClass("mbsc-lv-fixed-header-ctx mbsc-lv-" + ca.theme + (ca.baseTheme ? " mbsc-lv-" + ca.baseTheme : ""))) : wa.prepend(ta), Ha.on("scroll.mbsc-lv touchmove.mbsc-lv", function () {
                if (Wa || !pa) {
                    var c = a(this).scrollTop(), b = Ma.offset().top;
                    Ab.each(function (e, d) {
                        if (a(d).offset().top - (Ta ? b : 0) < c)Bb = e
                    });
                    qa = Ab[Bb];
                    b < (Ta ? Ha.offset().top : c) && c < (Ta ? Ma[0].scrollHeight : b + Ma.height()) ? ta.empty().append(a(qa).clone()).show() : ta.hide()
                }
            }));
            ca.rtl && wa.addClass("mbsc-lv-rtl");
            ca.hover && (Xa = ca.hover.time || 200,
                fb = ca.hover.timeout || 200, Ib = ca.hover.direction || ca.hover || "right", wa.on("mouseenter.mbsc-lv", ".mbsc-lv-item", function () {
                if (!Ga || Ga[0] != this) {
                    H();
                    Ga = a(this);
                    if (ub[Ga.attr("data-type") || "defaults"].actions)Hb = setTimeout(function () {
                        if (Mb)Ga = null; else {
                            yb = true;
                            $.openActions(Ga, Ib, Xa, false)
                        }
                    }, fb)
                }
            }).on("mouseleave.mbsc-lv", H));
            Ma.is("[mbsc-enhance]") && (Wb = !0, Ma.removeAttr("mbsc-enhance"), wa.attr("mbsc-enhance", ""));
            wa.trigger("mbsc-enhance", [{theme: ca.theme, lang: ca.lang}]);
            xa("onInit", [])
        };
        $.destroy = function () {
            ob.append(ja);
            Ta && ta && ta.remove();
            Wb && Ma.attr("mbsc-enhance", "");
            wa.find(".mbsc-lv-txt,.mbsc-lv-img").removeClass("mbsc-lv-txt mbsc-lv-img");
            wa.find("ul,ol").removeClass("mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr").find("li").removeClass("mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right").removeAttr("data-ref");
            a(".mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic", wa).remove();
            Ma.insertAfter(wa);
            wa.off().remove();
            Aa.remove();
            Ha.off(".mbsc-lv");
            $._destroy()
        };
        var Nb, kc = [], Cb = [], ec = [], Jb = 0;
        $.startActionTrack = function () {
            Jb || (ec = []);
            Jb++
        };
        $.endActionTrack = function () {
            Jb--;
            Jb || Cb.push(ec)
        };
        $.addUndoAction = function (a, c) {
            var b = {action: a, async: c};
            Jb ? ec.push(b) : (Cb.push([b]), Cb.length > ca.undoLimit && Cb.shift())
        };
        $.undo = function () {
            function a() {
                0 > e ? (Nb = !1, c()) : (b = d[e], e--, b.async ? b.action(a) : (b.action(), a()))
            }

            function c() {
                if (d = kc.shift())Nb = !0, e = d.length - 1, a()
            }

            var b, e, d;
            Cb.length && kc.push(Cb.pop());
            Nb || c()
        };
        ca = $.settings;
        xa = $.trigger;
        $.init(d)
    };
    f.ListView.prototype = {
        _class: "listview", _hasDef: !0, _hasTheme: !0, _hasLang: !0, _defaults: {
            actionsWidth: 90,
            sortDelay: 250,
            undoLimit: 10,
            swipe: !0,
            quickSwipe: !0,
            animateIcons: !0,
            fillAnimation: !0,
            animation: !0,
            revert: !0,
            handleClass: "",
            handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>',
            leftArrowClass: "mbsc-ic-arrow-left4",
            rightArrowClass: "mbsc-ic-arrow-right4",
            backText: "Back",
            undoText: "Undo",
            stages: []
        }
    };
    d.themes.listview.mobiscroll = {leftArrowClass: "mbsc-ic-arrow-left5", rightArrowClass: "mbsc-ic-arrow-right5"};
    d.presetShort("listview", "ListView")
})($, window, document);
(function (a, n) {
    var t, w = function () {
    }, h = a.mobiscroll, j = h.util, d = j.getCoord, f = j.testTouch;
    h.classes.Form = function (s, n) {
        function b(b) {
            var d = {}, f = b[0], g = b.parent(), i = b.attr("data-password-toggle"), o = b.attr("data-icon-show") || "eye", h = b.attr("data-icon-hide") || "eye-blocked";
            i && (d.right = "password" == f.type ? o : h);
            j.addIcon(b, d);
            i && k.tap(g.find(".mbsc-right-ic"), function () {
                if (f.type == "text") {
                    f.type = "password";
                    a(this).addClass("mbsc-ic-" + o).removeClass("mbsc-ic-" + h)
                } else {
                    f.type = "text";
                    a(this).removeClass("mbsc-ic-" +
                        o).addClass("mbsc-ic-" + h)
                }
            })
        }

        function g() {
            if (!a(this).hasClass("mbsc-textarea-scroll")) {
                var b = this.offsetHeight + (this.scrollHeight - this.offsetHeight);
                this.scrollTop = 0;
                this.style.height = b + "px"
            }
        }

        function P(b) {
            var d, f;
            if (b.offsetHeight && (b.style.height = "", d = b.scrollHeight - b.offsetHeight, d = b.offsetHeight + (0 < d ? d : 0), f = Math.round(d / 24), 10 < f ? (b.scrollTop = d, d = 240 + (d - 24 * f), a(b).addClass("mbsc-textarea-scroll")) : a(b).removeClass("mbsc-textarea-scroll"), d))b.style.height = d + "px"
        }

        function i() {
            clearTimeout(o);
            o =
                setTimeout(function () {
                    a("textarea.mbsc-control", D).each(function () {
                        P(this)
                    })
                }, 100)
        }

        function O(a) {
            return !(!a.id || !h.instances[a.id])
        }

        var u, A, o, B, D = a(s), k = this;
        h.classes.Base.call(this, s, n, !0);
        k._processItem = new Function("$, p", function () {
            var a = [5, 2], b;
            a:{
                b = a[0];
                var d;
                for (d = 0; 16 > d; ++d)if (1 == b * d % 16) {
                    b = [d, a[1]];
                    break a
                }
                b = void 0
            }
            a = b[0];
            b = b[1];
            d = "";
            var f;
            for (f = 0; 1062 > f; ++f)d += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[f]) -
            a * b) % 16 + 16) % 16];
            b = d;
            d = b.length;
            a = [];
            for (f = 0; f < d; f += 2)a.push(b[f] + b[f + 1]);
            b = "";
            d = a.length;
            for (f = 0; f < d; f++)b += String.fromCharCode(parseInt(a[f], 16));
            b = b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
            return b
        }());
        k.refresh = function () {
            a("input,select,textarea,progress,button", D).each(function () {
                function e() {
                    a("input", w).val(-1 != u.selectedIndex ? u.options[u.selectedIndex].text : "")
                }

                var i, s, n, m, u = this, r = a(u), w = r.parent();
                i = r.attr("data-role");
                var G = r.attr("type") || u.nodeName.toLowerCase();
                r.hasClass("mbsc-control") || ("button" != G && "submit" != G ? w : r).prepend(k._processItem(a,
                    0.2));
                if ("false" != r.attr("data-enhance") && a.mobiscroll.running) {
                    if (!r.hasClass("mbsc-control"))switch (/(switch|range|segmented|stepper)/.test(i) && (G = i), "button" != G && "submit" != G && "segmented" != G && (w.find("label").addClass("mbsc-label"), w.contents().filter(function () {
                        return 3 == this.nodeType && this.nodeValue && /\S/.test(this.nodeValue)
                    }).each(function () {
                        a('<span class="mbsc-label"></span>').insertAfter(this).append(this)
                    })), r.addClass("mbsc-control"), G) {
                        case "button":
                        case "submit":
                            i = r.attr("data-icon");
                            r.addClass("mbsc-btn");
                            i && (r.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + i + '"></span>'), "" === r.text() && r.addClass("mbsc-btn-icon-only"));
                            break;
                        case "switch":
                            w.prepend(r);
                            O(u) || new h.classes.Switch(u, {theme: A.theme, onText: A.onText, offText: A.offText});
                            break;
                        case "checkbox":
                            w.prepend(r).addClass("mbsc-checkbox");
                            r.after('<span class="mbsc-checkbox-box"></span>');
                            break;
                        case "range":
                            !w.hasClass("mbsc-slider") && !O(u) && new h.classes.Slider(u, {theme: A.theme});
                            break;
                        case "progress":
                            O(u) || new h.classes.Progress(u,
                                {theme: A.theme});
                            break;
                        case "radio":
                            w.addClass("mbsc-radio");
                            r.after('<span class="mbsc-radio-box"><span></span></span>');
                            break;
                        case "select":
                        case "select-one":
                        case "select-multiple":
                            i = r.prev().is("input.mbsc-control") ? r.prev() : a('<input tabindex="-1" type="text" class="mbsc-control mbsc-control-ev" readonly>');
                            b(r);
                            w.addClass("mbsc-input mbsc-select");
                            r.after(i);
                            i.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>');
                            break;
                        case "textarea":
                            b(r);
                            w.addClass("mbsc-input mbsc-textarea");
                            break;
                        case "segmented":
                            var S, c;
                            r.parent().hasClass("mbsc-segmented-item") || (c = a('<div class="mbsc-segmented"></div>'), w.after(c), a('input[name="' + r.attr("name") + '"]', D).each(function (b, e) {
                                S = a(e).parent();
                                S.addClass("mbsc-segmented-item").append('<span class="mbsc-segmented-content">' + (a(e).attr("data-icon") ? ' <span class="mbsc-ic mbsc-ic-' + a(e).attr("data-icon") + '"></span> ' : "") + (S.text() || "") + "</span>");
                                S.contents().filter(function () {
                                    return this.nodeType === 3
                                }).remove();
                                c.append(S)
                            }));
                            break;
                        case "stepper":
                            O(u) ||
                            new h.classes.Stepper(u, {form: k});
                            break;
                        case "hidden":
                            break;
                        default:
                            b(r), w.addClass("mbsc-input")
                    }
                    if (!r.hasClass("mbsc-control-ev")) {
                        /select/.test(G) && (r.on("change.mbsc-form", e), e());
                        if ("textarea" == G)r.on("keydown.mbsc-form input.mbsc-form", function () {
                            clearTimeout(o);
                            o = setTimeout(function () {
                                P(u)
                            }, 100)
                        }).on("scroll.mbsc-form", g);
                        r.addClass("mbsc-control-ev").on("touchstart.mbsc-form mousedown.mbsc-form", function (c) {
                            if (f(c, this)) {
                                n = d(c, "X", true);
                                m = d(c, "Y", true);
                                t && t.removeClass("mbsc-active");
                                if (!u.disabled) {
                                    s =
                                        true;
                                    t = a(this);
                                    a(this).addClass("mbsc-active");
                                    B("onControlActivate", [a(this), c])
                                }
                            }
                        }).on("touchmove.mbsc-form mousemove.mbsc-form", function (a) {
                            if (s && Math.abs(d(a, "X", true) - n) > 20 || Math.abs(d(a, "Y", true) - m) > 20) {
                                r.removeClass("mbsc-active");
                                B("onControlDeactivate", [r, a]);
                                s = false
                            }
                        }).on("touchend.mbsc-form touchcancel.mbsc-form mouseleave.mbsc-form mouseup.mbsc-form", function (a) {
                            if (s && a.type == "touchend" && !u.readOnly) {
                                r.focus();
                                /(button|submit|checkbox|switch|radio)/.test(G) && a.preventDefault();
                                if (!/select/.test(G)) {
                                    var c =
                                        (a.originalEvent || a).changedTouches[0], b = document.createEvent("MouseEvents");
                                    b.initMouseEvent("click", true, true, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, false, false, false, false, 0, null);
                                    b.tap = true;
                                    u.dispatchEvent(b);
                                    j.preventClick()
                                }
                            }
                            s && setTimeout(function () {
                                r.removeClass("mbsc-active");
                                B("onControlDeactivate", [r, a])
                            }, 100);
                            s = false;
                            t = null
                        })
                    }
                }
            });
            i()
        };
        k.init = function (b) {
            k._init(b);
            h.themes.form[A.theme] || (A.theme = "mobiscroll");
            u = "mbsc-form mbsc-" + A.theme + (A.baseTheme ? " mbsc-" + A.baseTheme : "") +
                (A.rtl ? " mbsc-rtl" : " mbsc-ltr");
            D.hasClass("mbsc-form") || D.addClass(u).on("touchstart", w).show();
            a(window).on("resize orientationchange", i);
            k.refresh()
        };
        k.destroy = function () {
            D.removeClass(u).off("touchstart", w);
            a(window).off("resize orientationchange", i);
            a(".mbsc-control", D).off(".mbsc-form").removeClass("mbsc-control-ev");
            k._destroy();
            a(".mbsc-progress progress", D).mobiscroll("destroy");
            a(".mbsc-slider input", D).mobiscroll("destroy");
            a(".mbsc-stepper input", D).mobiscroll("destroy");
            a(".mbsc-switch input",
                D).mobiscroll("destroy")
        };
        A = k.settings;
        B = k.trigger;
        k.init(n)
    };
    h.classes.Form.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "form",
        _defaults: {tap: !0, lang: "en", offText: "Off", onText: "On"}
    };
    h.themes.form.mobiscroll = {};
    h.presetShort("form", "Form");
    h.classes.Stepper = function (s, j) {
        function b(c) {
            32 == c.keyCode && (c.preventDefault(), !I && !s.disabled && (k = a(this).addClass("mbsc-active"), o(c)))
        }

        function g(a) {
            I && (a.preventDefault(), B(!0))
        }

        function P(c) {
            if (f(c, this) && !s.disabled && a.mobiscroll.running && (k =
                    a(this).addClass("mbsc-active").focus(), Q && Q.trigger("onControlActivate", [k, c]), o(c), "mousedown" === c.type))a(document).on("mousemove", O).on("mouseup", i)
        }

        function i(c) {
            I && (c.preventDefault(), B(!0, c), "mouseup" === c.type && a(document).off("mousemove", O).off("mouseup", i))
        }

        function O(a) {
            I && (U = d(a, "X"), G = d(a, "Y"), w = U - l, t = G - N, (7 < Math.abs(w) || 7 < Math.abs(t)) && B())
        }

        function u() {
            var c;
            s.disabled || (c = parseFloat(a(this).val()), A(isNaN(c) ? M : c))
        }

        function A(a, b, d) {
            F = M;
            b === n && (b = !0);
            d === n && (d = b);
            M = a !== n ? Math.min(c,
                Math.max(Math.round(a / x) * x, H)) : Math.min(c, Math.max(M + (k.hasClass("mbsc-stepper-minus") ? -x : x), H));
            m = !0;
            y.removeClass("mbsc-step-disabled");
            b && p.val(M);
            M == H ? q.addClass("mbsc-step-disabled") : M == c && e.addClass("mbsc-step-disabled");
            M !== F && d && p.change()
        }

        function o(a) {
            I || (I = !0, m = !1, l = d(a, "X"), N = d(a, "Y"), clearInterval(S), clearTimeout(S), S = setTimeout(function () {
                A();
                S = setInterval(function () {
                    A()
                }, 150)
            }, 300))
        }

        function B(a, c) {
            clearInterval(S);
            clearTimeout(S);
            !m && a && A();
            m = I = !1;
            k.removeClass("mbsc-active");
            Q && setTimeout(function () {
                Q.trigger("onControlDeactivate",
                    [k, c])
            }, 100)
        }

        function D(a, c) {
            var b = p.attr(a);
            return b === n || "" === b ? c : +b
        }

        var k, e, q, y, I, m, w, t, U, G, S, c, H, x, J, l, N, M, R = this, p = a(s), V = p.hasClass("mbsc-stepper-ready"), Z = V ? p.closest(".mbsc-stepper-cont") : p.parent(), F = M, Q = j.form;
        h.classes.Base.call(this, s, j, !0);
        R._processItem = new Function("$, p", function () {
            var a = [5, 2], c;
            a:{
                c = a[0];
                var b;
                for (b = 0; 16 > b; ++b)if (1 == c * b % 16) {
                    c = [b, a[1]];
                    break a
                }
                c = void 0
            }
            a = c[0];
            c = c[1];
            b = "";
            var e;
            for (e = 0; 1062 > e; ++e)b += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[e]) -
            a * c) % 16 + 16) % 16];
            c = b;
            b = c.length;
            a = [];
            for (e = 0; e < b; e += 2)a.push(c[e] + c[e + 1]);
            c = "";
            b = a.length;
            for (e = 0; e < b; e++)c += String.fromCharCode(parseInt(a[e], 16));
            c = c.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
            return c
        }());
        R.getVal = function () {
            var a = parseFloat(p.val()), a = isNaN(a) ? M : a;
            return Math.min(c, Math.max(Math.round(a / x) * x, H))
        };
        R.setVal = function (a, c, b) {
            a = parseFloat(a);
            A(isNaN(a) ? M : a, c, b)
        };
        R.init = function (d) {
            R._init(d);
            J = R.settings;
            H = d.min === n ? D("min", J.min) : d.min;
            c = d.max === n ? D("max", J.max) : d.max;
            x = d.step === n ? D("step", J.step) : d.step;
            M = Math.round(+s.value /
                    x) * x || 0;
            V || Z.addClass("mbsc-stepper-cont").append('<span class="mbsc-segmented mbsc-stepper"></span>').find(".mbsc-stepper").append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' + (M == H ? "mbsc-step-disabled" : "") + '"  tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' + (M == c ? "mbsc-step-disabled" : "") + '"  tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span> </span></span>').prepend(p);
            q = a(".mbsc-stepper-minus", Z);
            e = a(".mbsc-stepper-plus", Z);
            V || ("left" == p.attr("data-val") ? (Z.addClass("mbsc-stepper-val-left"), p.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : "right" == p.attr("data-val") ? (Z.addClass("mbsc-stepper-val-right"), e.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : q.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>'));
            p.val(M).attr("data-role", "stepper").attr("min", H).attr("max", c).attr("step", x).on("change", u);
            y = a(".mbsc-stepper-control", Z).on("keydown", b).on("keyup", g).on("mousedown touchstart", P).on("touchmove", O).on("touchend touchcancel", i);
            p.addClass("mbsc-stepper-ready mbsc-control");
            p.hasClass("mbsc-control") || ("button" != type && "submit" != type ? Z : p).prepend(R._processItem(a, 0.2))
        };
        R.destroy = function () {
            p.removeClass("mbsc-control").off("change", u);
            y.off("keydown", b).off("keyup", g).off("mousedown touchstart",
                P).off("touchmove", O).off("touchend touchcancel", i);
            R._destroy()
        };
        R.init(j)
    };
    h.classes.Stepper.prototype = {_class: "stepper", _defaults: {min: 0, max: 100, step: 1}};
    h.presetShort("stepper", "Stepper");
    h.classes.Switch = function (d, f) {
        var b, g, j, i = this, f = f || {};
        a.extend(f, {changeEvent: "click", min: 0, max: 1, step: 1, live: !1, round: !1, handle: !1, highlight: !1});
        h.classes.Slider.call(this, d, f, !0);
        i._readValue = function () {
            return d.checked ? 1 : 0
        };
        i._fillValue = function (a, d, f) {
            b.prop("checked", !!a);
            f && b.change()
        };
        i._onTap = function (a) {
            i._setVal(a ?
                0 : 1)
        };
        i.__onInit = function () {
            j = i.settings;
            b = a(d);
            g = b.parent();
            b.attr("data-role", "switch").after('<span class="mbsc-progress-cont mbsc-switch-track"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-slider-handle-cont"><span class="mbsc-slider-handle mbsc-switch-handle" data-index="0"><span class="mbsc-switch-txt-off">' + j.offText + '</span><span class="mbsc-switch-txt-on">' + j.onText + "</span></span></span></span></span>");
            i._$track = g.find(".mbsc-progress-track")
        };
        i.getVal = function () {
            return d.checked
        };
        i.setVal = function (a, b, d) {
            i._setVal(a ? 1 : 0, b, d)
        };
        i.init(f)
    };
    h.classes.Switch.prototype = {_class: "switch", _css: "mbsc-switch", _hasTheme: !0, _defaults: {}};
    h.presetShort("switch", "Switch");
    a(function () {
        a("[mbsc-enhance]").each(function () {
            a(this).mobiscroll().form()
        });
        a(document).on("mbsc-enhance", function (d, f) {
            a(d.target).is("[mbsc-enhance]") ? a(d.target).mobiscroll().form(f) : a("[mbsc-enhance]", d.target).each(function () {
                a(this).mobiscroll().form(f)
            })
        });
        a(document).on("mbsc-refresh", function (d) {
            a(d.target).is("[mbsc-enhance]") ?
                a(d.target).mobiscroll("refresh") : a("[mbsc-enhance]", d.target).each(function () {
                a(this).mobiscroll("refresh")
            })
        })
    })
})($);
(function (a, n, t, w) {
    var n = a.mobiscroll, h = n.classes, j = n.util, d = j.jsPrefix, f = j.has3d, s = j.hasFlex, r = j.getCoord, b = j.constrain, g = j.testTouch;
    n.presetShort("scroller", "Scroller", !1);
    h.Scroller = function (P, i, n) {
        function u(c) {
            if (g(c, this) && !X && !aa && !M && !I(this) && a.mobiscroll.running && (c.preventDefault(), c.stopPropagation(), R = "clickpick" != F.mode, X = a(".dw-ul", this), L(X), ha = (Y = pa[da] !== w) ? Math.round(-j.getPosition(X, !0) / p) : ia[da], E = r(c, "Y"), ea = new Date, ga = E, G(X, da, ha, 0.001), R && X.closest(".dwwl").addClass("dwa"),
                "mousedown" === c.type))a(t).on("mousemove", A).on("mouseup", o)
        }

        function A(a) {
            if (X && R && (a.preventDefault(), a.stopPropagation(), ga = r(a, "Y"), 3 < Math.abs(ga - E) || Y))G(X, da, b(ha + (E - ga) / p, fa - 1, v + 1)), Y = !0
        }

        function o(c) {
            if (X) {
                var e = new Date - ea, d = b(Math.round(ha + (E - ga) / p), fa - 1, v + 1), g = d, i, l = X.offset().top;
                c.stopPropagation();
                "mouseup" === c.type && a(t).off("mousemove", A).off("mouseup", o);
                f && 300 > e ? (i = (ga - E) / e, e = i * i / F.speedUnit, 0 > ga - E && (e = -e)) : e = ga - E;
                if (Y)g = b(Math.round(ha - e / p), fa, v), e = i ? Math.max(0.1, Math.abs((g - d) /
                        i) * F.timeUnit) : 0.1; else {
                    var d = Math.floor((ga - l) / p), k = a(a(".dw-li", X)[d]);
                    i = k.hasClass("dw-v");
                    l = R;
                    e = 0.1;
                    !1 !== T("onValueTap", [k]) && i ? g = d : l = !0;
                    l && i && (k.addClass("dw-hl"), setTimeout(function () {
                        k.removeClass("dw-hl")
                    }, 100));
                    if (!V && (!0 === F.confirmOnTap || F.confirmOnTap[da]) && k.hasClass("dw-sel")) {
                        C.select();
                        X = !1;
                        return
                    }
                }
                R && H(X, da, g, 0, e, !0);
                X = !1
            }
        }

        function B(c) {
            M = a(this);
            g(c, this) && a.mobiscroll.running && y(c, M.closest(".dwwl"), M.hasClass("dwwbp") ? x : J);
            if ("mousedown" === c.type)a(t).on("mouseup", D)
        }

        function D(c) {
            M =
                null;
            aa && (clearInterval(W), aa = !1);
            "mouseup" === c.type && a(t).off("mouseup", D)
        }

        function k(c) {
            38 == c.keyCode ? y(c, a(this), J) : 40 == c.keyCode && y(c, a(this), x)
        }

        function e() {
            aa && (clearInterval(W), aa = !1)
        }

        function q(c) {
            if (!I(this) && a.mobiscroll.running) {
                c.preventDefault();
                var c = c.originalEvent || c, e = c.deltaY || c.wheelDelta || c.detail, d = a(".dw-ul", this);
                L(d);
                G(d, da, b(((0 > e ? -20 : 20) - Z[da]) / p, fa - 1, v + 1));
                clearTimeout(Q);
                Q = setTimeout(function () {
                    H(d, da, Math.round(ia[da]), 0 < e ? 1 : 2, 0.1)
                }, 200)
            }
        }

        function y(a, c, b) {
            a.stopPropagation();
            a.preventDefault();
            if (!aa && !I(c) && !c.hasClass("dwa")) {
                aa = !0;
                var e = c.find(".dw-ul");
                L(e);
                clearInterval(W);
                W = setInterval(function () {
                    b(e)
                }, F.delay);
                b(e)
            }
        }

        function I(c) {
            return a.isArray(F.readonly) ? (c = a(".dwwl", N).index(c), F.readonly[c]) : F.readonly
        }

        function m(c) {
            var b = '<div class="dw-bf">', c = Ba[c], e = 1, d = c.labels || [], f = c.values || [], g = c.keys || f;
            a.each(f, function (c, f) {
                0 === e % 20 && (b += '</div><div class="dw-bf">');
                b += '<div role="option" aria-selected="false" class="dw-li dw-v" data-val="' + g[c] + '"' + (d[c] ? ' aria-label="' +
                    d[c] + '"' : "") + ' style="height:' + p + "px;line-height:" + p + 'px;"><div class="dw-i"' + (1 < ka ? ' style="line-height:' + Math.round(p / ka) + "px;font-size:" + Math.round(0.8 * (p / ka)) + 'px;"' : "") + ">" + f + C._processItem(a, 0.2) + "</div></div>";
                e++
            });
            return b += "</div>"
        }

        function L(c) {
            V = c.closest(".dwwl").hasClass("dwwms");
            fa = a(".dw-li", c).index(a(V ? ".dw-li" : ".dw-v", c).eq(0));
            v = Math.max(fa, a(".dw-li", c).index(a(V ? ".dw-li" : ".dw-v", c).eq(-1)) - (V ? F.rows - ("scroller" == F.mode ? 1 : 3) : 0));
            da = a(".dw-ul", N).index(c)
        }

        function K(a) {
            var c = F.headerText;
            return c ? "function" === typeof c ? c.call(P, a) : c.replace(/\{value\}/i, a) : ""
        }

        function U(a, c) {
            clearTimeout(pa[c]);
            delete pa[c];
            a.closest(".dwwl").removeClass("dwa")
        }

        function G(a, c, b, e, g) {
            var i = -b * p, l = a[0].style;
            i == Z[c] && pa[c] || (Z[c] = i, f ? (l[d + "Transition"] = j.prefix + "transform " + (e ? e.toFixed(3) : 0) + "s ease-out", l[d + "Transform"] = "translate3d(0," + i + "px,0)") : l.top = i + "px", pa[c] && U(a, c), e && g && (a.closest(".dwwl").addClass("dwa"), pa[c] = setTimeout(function () {
                U(a, c)
            }, 1E3 * e)), ia[c] = b)
        }

        function S(c, e, d, f, g) {
            var i = a('.dw-li[data-val="' +
                c + '"]', e), l = a(".dw-li", e), c = l.index(i), o = l.length;
            if (f)L(e); else if (!i.hasClass("dw-v")) {
                for (var k = i, h = 0, x = 0; 0 <= c - h && !k.hasClass("dw-v");)h++, k = l.eq(c - h);
                for (; c + x < o && !i.hasClass("dw-v");)x++, i = l.eq(c + x);
                (x < h && x && 2 !== d || !h || 0 > c - h || 1 == d) && i.hasClass("dw-v") ? c += x : (i = k, c -= h)
            }
            d = i.hasClass("dw-sel");
            g && (f || (a(".dw-sel", e).removeAttr("aria-selected"), i.attr("aria-selected", "true")), a(".dw-sel", e).removeClass("dw-sel"), i.addClass("dw-sel"));
            return {
                selected: d, v: f ? b(c, fa, v) : c, val: i.hasClass("dw-v") || f ? i.attr("data-val") :
                    null
            }
        }

        function c(c, b, e, d, f) {
            !1 !== T("validate", [N, b, c, d]) && (a(".dw-ul", N).each(function (e) {
                var g = a(this), i = g.closest(".dwwl").hasClass("dwwms"), l = e == b || b === w, i = S(C._tempWheelArray[e], g, d, i, !0);
                if (!i.selected || l)C._tempWheelArray[e] = i.val, G(g, e, i.v, l ? c : 0.1, l ? f : !1)
            }), T("onValidated", [b]), C._tempValue = F.formatValue(C._tempWheelArray, C), C.live && (C._hasValue = e || C._hasValue, l(e, e, 0, !0)), C._header.html(K(C._tempValue)), e && T("onChange", [C._tempValue]))
        }

        function H(e, d, f, g, i, l) {
            f = b(f, fa, v);
            C._tempWheelArray[d] =
                a(".dw-li", e).eq(f).attr("data-val");
            G(e, d, f, i, l);
            setTimeout(function () {
                c(i, d, !0, g, l)
            }, 10)
        }

        function x(a) {
            var c = ia[da] + 1;
            H(a, da, c > v ? fa : c, 1, 0.1)
        }

        function J(a) {
            var c = ia[da] - 1;
            H(a, da, c < fa ? v : c, 2, 0.1)
        }

        function l(a, b, e, d, f) {
            C._isVisible && !d && c(e);
            C._tempValue = F.formatValue(C._tempWheelArray, C);
            f || (C._wheelArray = C._tempWheelArray.slice(0), C._value = C._hasValue ? C._tempValue : null);
            a && (T("onValueFill", [C._hasValue ? C._tempValue : "", b]), C._isInput && ua.val(C._hasValue ? C._tempValue : ""), b && (C._preventChange = !0, ua.change()))
        }

        var N, M, R, p, V, Z, F, Q, T, aa, Y, E, ea, ga, ha, fa, v, X, da, ka, W, C = this, ua = a(P), pa = {}, ia = {}, Ba = [];
        h.Frame.call(this, P, i, !0);
        C.setVal = C._setVal = function (c, b, e, d, f) {
            C._hasValue = null !== c && c !== w;
            C._tempWheelArray = a.isArray(c) ? c.slice(0) : F.parseValue.call(P, c, C) || [];
            l(b, e === w ? b : e, f, !1, d)
        };
        C.getVal = C._getVal = function (a) {
            a = C._hasValue || a ? C[a ? "_tempValue" : "_value"] : null;
            return j.isNumeric(a) ? +a : a
        };
        C.setArrayVal = C.setVal;
        C.getArrayVal = function (a) {
            return a ? C._tempWheelArray : C._wheelArray
        };
        C.setValue = function (a, c, b, e, d) {
            C.setVal(a,
                c, d, e, b)
        };
        C.getValue = C.getArrayVal;
        C.changeWheel = function (b, e, d) {
            if (N) {
                var f = 0, g = b.length;
                a.each(F.wheels, function (i, l) {
                    a.each(l, function (i, l) {
                        if (-1 < a.inArray(f, b) && (Ba[f] = l, a(".dw-ul", N).eq(f).html(m(f)), g--, !g))return C.position(), c(e, w, d), !1;
                        f++
                    });
                    if (!g)return !1
                })
            }
        };
        C.getValidCell = S;
        C.scroll = G;
        C._processItem = new Function("$, p", function () {
            var a = [5, 2], c;
            a:{
                c = a[0];
                var b;
                for (b = 0; 16 > b; ++b)if (1 == c * b % 16) {
                    c = [b, a[1]];
                    break a
                }
                c = void 0
            }
            a = c[0];
            c = c[1];
            b = "";
            var e;
            for (e = 0; 1062 > e; ++e)b += "0123456789abcdef"[((a *
            "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[e]) -
            a * c) % 16 + 16) % 16];
            c = b;
            b = c.length;
            a = [];
            for (e = 0; e < b; e += 2)a.push(c[e] + c[e + 1]);
            c = "";
            b = a.length;
            for (e = 0; e < b; e++)c += String.fromCharCode(parseInt(a[e], 16));
            c = c.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
            return c
        }());
        C._generateContent = function () {
            var c, b = "", e = 0;
            a.each(F.wheels, function (d, f) {
                b += '<div class="mbsc-w-p dwc' + ("scroller" != F.mode ? " dwpm" : " dwsc") + (F.showLabel ? "" : " dwhl") + '"><div class="dwwc"' + (F.maxWidth ? "" : ' style="max-width:600px;"') + ">" + (s ? "" : '<table class="dw-tbl" cellpadding="0" cellspacing="0"><tr>');
                a.each(f, function (a, d) {
                    Ba[e] = d;
                    c = d.label !==
                    w ? d.label : a;
                    b += "<" + (s ? "div" : "td") + ' class="dwfl" style="' + (F.fixedWidth ? "width:" + (F.fixedWidth[e] || F.fixedWidth) + "px;" : (F.minWidth ? "min-width:" + (F.minWidth[e] || F.minWidth) + "px;" : "min-width:" + F.width + "px;") + (F.maxWidth ? "max-width:" + (F.maxWidth[e] || F.maxWidth) + "px;" : "")) + '"><div class="dwwl dwwl' + e + (d.multiple ? " dwwms" : "") + '">' + ("scroller" != F.mode ? '<div class="dwb-e dwwb dwwbp ' + (F.btnPlusClass || "") + '" style="height:' + p + "px;line-height:" + p + 'px;"><span>+</span></div><div class="dwb-e dwwb dwwbm ' + (F.btnMinusClass ||
                        "") + '" style="height:' + p + "px;line-height:" + p + 'px;"><span>&ndash;</span></div>' : "") + '<div class="dwl">' + c + '</div><div tabindex="0" aria-live="off" aria-label="' + c + '" role="listbox" class="dwww"><div class="dww" style="height:' + F.rows * p + 'px;"><div class="dw-ul" style="margin-top:' + (d.multiple ? "scroller" == F.mode ? 0 : p : F.rows / 2 * p - p / 2) + 'px;">';
                    b += m(e) + '</div></div><div class="dwwo"></div></div><div class="dwwol"' + (F.selectedLineHeight ? ' style="height:' + p + "px;margin-top:-" + (p / 2 + (F.selectedLineBorder || 0)) +
                        'px;"' : "") + "></div></div>" + (s ? "</div>" : "</td>");
                    e++
                });
                b += (s ? "" : "</tr></table>") + "</div></div>"
            });
            return b
        };
        C._attachEvents = function (a) {
            a.on("keydown", ".dwwl", k).on("keyup", ".dwwl", e).on("touchstart mousedown", ".dwwl", u).on("touchmove", ".dwwl", A).on("touchend", ".dwwl", o).on("touchstart mousedown", ".dwwb", B).on("touchend touchcancel", ".dwwb", D);
            if (F.mousewheel)a.on("wheel mousewheel", ".dwwl", q)
        };
        C._markupReady = function (a) {
            N = a;
            Z = {};
            c()
        };
        C._fillValue = function () {
            C._hasValue = !0;
            l(!0, !0, 0, !0)
        };
        C._readValue =
            function () {
                var a = ua.val() || "";
                "" !== a && (C._hasValue = !0);
                C._tempWheelArray = C._hasValue && C._wheelArray ? C._wheelArray.slice(0) : F.parseValue.call(P, a, C) || [];
                l()
            };
        C._processSettings = function () {
            F = C.settings;
            T = C.trigger;
            p = F.height;
            ka = F.multiline;
            C._isLiquid = "liquid" === (F.layout || (/top|bottom/.test(F.display) && 1 == F.wheels.length ? "liquid" : ""));
            F.formatResult && (F.formatValue = F.formatResult);
            1 < ka && (F.cssClass = (F.cssClass || "") + " dw-ml");
            "scroller" != F.mode && (F.rows = Math.max(3, F.rows))
        };
        C._selectedValues = {};
        n ||
        C.init(i)
    };
    h.Scroller.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _hasPreset: !0,
        _class: "scroller",
        _defaults: a.extend({}, h.Frame.prototype._defaults, {
            minWidth: 80,
            height: 40,
            rows: 3,
            multiline: 1,
            delay: 300,
            readonly: !1,
            showLabel: !0,
            confirmOnTap: !0,
            wheels: [],
            mode: "scroller",
            preset: "",
            speedUnit: 0.0012,
            timeUnit: 0.08,
            formatValue: function (a) {
                return a.join(" ")
            },
            parseValue: function (b, d) {
                var f = [], g = [], h = 0, o, j;
                null !== b && b !== w && (f = (b + "").split(" "));
                a.each(d.settings.wheels, function (b, d) {
                    a.each(d, function (b, d) {
                        j =
                            d.keys || d.values;
                        o = j[0];
                        a.each(j, function (a, b) {
                            if (f[h] == b)return o = b, !1
                        });
                        g.push(o);
                        h++
                    })
                });
                return g
            }
        })
    };
    n.themes.scroller = n.themes.frame
})($, window, document);
(function (a, n) {
    var t = a.mobiscroll, w = t.util.isNumeric, h = function () {
    }, j = t.classes;
    j.Numpad = function (d, f, h) {
        function r(c) {
            var f, g = (f = B.validate.call(d, k.slice(0), U, m) || []) && f.disabled || [];
            m._isValid = f.invalid ? !1 : !0;
            m._tempValue = B.formatValue.call(d, k.slice(0), U, m);
            o = k.length;
            e = f.length || q;
            if (m._isVisible && a.mobiscroll.running) {
                a(".mbsc-np-ph", O).each(function (c) {
                    a(this).html("ltr" == B.fill ? c >= o ? A : D || k[c] : c >= q - e ? c + o < q ? A : D || k[c + o - q] : "")
                });
                a(".mbsc-np-cph", O).each(function () {
                    a(this).html(U[a(this).attr("data-var")] ||
                        a(this).attr("data-ph"))
                });
                if (o === q)for (f = 0; 9 >= f; f++)g.push(f);
                a(".mbsc-np-btn", O).removeClass(u);
                for (f = 0; f < g.length; f++)a('.mbsc-np-btn[data-val="' + g[f] + '"]', O).addClass(u);
                m._isValid ? a(".dwb-s .dwb", O).removeClass(u) : a(".dwb-s .dwb", O).addClass(u);
                m.live && (m._hasValue = c || m._hasValue, b(c))
            }
        }

        function b(c, b, e, d) {
            b && r();
            d || (y = k.slice(0), G = a.extend({}, U), t = K.slice(0), m._value = m._tempValue);
            c && (m._isInput && I.val(m._hasValue && m._isValid ? m._value : ""), e && (m._preventChange = !0, I.change()))
        }

        function g(a) {
            var b,
                e = a || [], d = [];
            K = [];
            U = {};
            for (a = 0; a < e.length; a++)/:/.test(e[a]) ? (b = e[a].split(":"), U[b[0]] = b[1], K.push(b[0])) : (d.push(e[a]), K.push("digit"));
            return d
        }

        function P(c, b) {
            if (!(!o && !b && !B.allowLeadingZero || c.hasClass("dwb-d") || c.hasClass("mbsc-np-btn-empty")) && o < q && a.mobiscroll.running)K.push("digit"), k.push(b), r(!0)
        }

        function i() {
            var a, b, e = K.pop();
            if (o || "digit" !== e) {
                if ("digit" !== e && U[e]) {
                    delete U[e];
                    b = K.slice(0);
                    K = [];
                    for (a = 0; a < b.length; a++)b[a] !== e && K.push(b[a])
                } else k.pop();
                r(!0)
            }
        }

        var O, u, A, o, B, D, k, e, q, y,
            I = a(d), m = this, t = [], K = [], U = {}, G = {}, S = {
                48: 0,
                49: 1,
                50: 2,
                51: 3,
                52: 4,
                53: 5,
                54: 6,
                55: 7,
                56: 8,
                57: 9,
                96: 0,
                97: 1,
                98: 2,
                99: 3,
                100: 4,
                101: 5,
                102: 6,
                103: 7,
                104: 8,
                105: 9
            };
        j.Frame.call(this, d, f, !0);
        m.setVal = m._setVal = function (c, e, f, i) {
            m._hasValue = null !== c && c !== n;
            k = g(a.isArray(c) ? c.slice(0) : B.parseValue.call(d, c, m));
            b(e, !0, f === n ? e : f, i)
        };
        m.getVal = m._getVal = function (a) {
            return m._hasValue || a ? m[a ? "_tempValue" : "_value"] : null
        };
        m.setArrayVal = m.setVal;
        m.getArrayVal = function (a) {
            return a ? k.slice(0) : m._hasValue ? y.slice(0) : null
        };
        m.setValue =
            m.setVal;
        m.getValue = m.getArrayVal;
        m._processItem = new Function("$, p", function () {
            var a = [5, 2], b;
            a:{
                b = a[0];
                var e;
                for (e = 0; 16 > e; ++e)if (1 == b * e % 16) {
                    b = [e, a[1]];
                    break a
                }
                b = void 0
            }
            a = b[0];
            b = b[1];
            e = "";
            var d;
            for (d = 0; 1062 > d; ++d)e += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[d]) -
            a * b) % 16 + 16) % 16];
            b = e;
            e = b.length;
            a = [];
            for (d = 0; d < e; d += 2)a.push(b[d] + b[d + 1]);
            b = "";
            e = a.length;
            for (d = 0; d < e; d++)b += String.fromCharCode(parseInt(a[d], 16));
            b = b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
            return b
        }());
        m._readValue = function () {
            var a = I.val() || "";
            "" !== a && (m._hasValue = !0);
            D ? (U = {}, K = [], k = []) : (U = m._hasValue ? G : {}, K = m._hasValue ? t : [], k = m._hasValue && y ? y.slice(0) : g(B.parseValue.call(d, a, m)), b(!1, !0))
        };
        m._fillValue = function () {
            m._hasValue = !0;
            b(!0, !1, !0)
        };
        m._generateContent = function () {
            var c, b, e, d = 1;
            c = "";
            var f;
            f = "" + ('<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' +
                B.deleteText + '" class="mbsc-np-del dwb-e mbsc-ic mbsc-ic-' + B.deleteIcon + '"></div><div class="mbsc-np-dsp">');
            c = B.template.replace(/d/g, '<span class="mbsc-np-ph">' + A + "</span>").replace(/&#100;/g, "d");
            c = c.replace(/{([a-zA-Z0-9]*)\:?([a-zA-Z0-9\-\_]*)}/g, '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>');
            f = f + c + '</div></div><div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">';
            for (c = 0; 4 > c; c++) {
                f += '<div class="mbsc-np-row">';
                for (b = 0; 3 > b; b++)e = d, 10 == d || 12 == d ? e = "" : 11 == d && (e = 0), f =
                    "" === e ? 10 == d && B.leftButton ? f + ('<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom dwb-e" ' + (B.leftButton.variable ? 'data-var="' + B.leftButton.variable + '"' : "") + ' data-val="' + B.leftButton.value + '" >' + B.leftButton.text + "</div>") : 12 == d && B.rightButton ? f + ('<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom dwb-e" ' + (B.rightButton.variable ? 'data-var="' + B.rightButton.variable + '"' : "") + ' data-val="' + B.rightButton.value + '" >' + B.rightButton.text + "</div>") : f + '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>' :
                    f + ('<div tabindex="0" role="button" class="mbsc-np-btn dwb-e" data-val="' + e + '">' + e + m._processItem(a, 0.2) + "</div>"), d++;
                f += "</div>"
            }
            return f + "</div></div>"
        };
        m._markupReady = function () {
            O = m._markup;
            r()
        };
        m._attachEvents = function (c) {
            c.on("keydown", function (c) {
                S[c.keyCode] !== n ? P(a('.mbsc-np-btn[data-val="' + S[c.keyCode] + '"]'), S[c.keyCode]) : 8 == c.keyCode && (c.preventDefault(), i())
            });
            m.tap(a(".mbsc-np-btn", c), function () {
                var c = a(this);
                if (c.hasClass("mbsc-np-btn-custom")) {
                    var b = c.attr("data-val"), d = c.attr("data-var");
                    if (!c.hasClass("dwb-d")) {
                        d && (c = d.split(":"), K.push(c[0]), U[c[0]] = c[1]);
                        if (b.length + o <= e)for (c = 0; c < b.length; ++c)K.push("digit"), k.push(w(b[c]) ? +b[c] : b[c]);
                        r(!0)
                    }
                } else P(c, +c.attr("data-val"))
            });
            m.tap(a(".mbsc-np-del", c), i)
        };
        m._processSettings = function () {
            B = m.settings;
            B.headerText = (B.headerText || "").replace("{value}", "");
            B.cssClass = (B.cssClass || "") + " mbsc-np";
            B.template = B.template.replace(/\\d/, "&#100;");
            A = B.placeholder;
            q = (B.template.match(/d/g) || []).length;
            u = "dwb-d " + (B.disabledClass || "");
            (D = B.mask) &&
            I.is("input") && I.attr("type", "password")
        };
        m._indexOf = function (a, b) {
            var e;
            for (e = 0; e < a.length; ++e)if (a[e].toString() === b.toString())return e;
            return -1
        };
        h || m.init(f)
    };
    j.Numpad.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _hasPreset: !0,
        _class: "numpad",
        _defaults: a.extend({}, j.Frame.prototype._defaults, {
            template: "dd.dd",
            placeholder: "0",
            deleteIcon: "backspace",
            allowLeadingZero: !1,
            fill: "rtl",
            deleteText: "Delete",
            validate: h,
            parseValue: h,
            formatValue: function (d, f, h) {
                var j, b = 1;
                j = h.settings;
                var h = j.placeholder,
                    g = j.template, n = d.length, i = g.length, O = "";
                for (j = 0; j < i; j++)"d" == g[i - j - 1] ? (O = b <= n ? d[n - b] + O : h + O, b++) : O = g[i - j - 1] + O;
                a.each(f, function (a, b) {
                    O = O.replace("{" + a + "}", b)
                });
                return a("<div>" + O + "</div>").text()
            }
        })
    };
    t.themes.numpad = t.themes.frame;
    t.presetShort("numpad", "Numpad", !1)
})($);
(function (a) {
    var n = a.mobiscroll, t = {min: 0, max: 99.99, scale: 2, prefix: "", suffix: "", returnAffix: !1};
    n.presets.numpad.decimal = function (w) {
        function h(a) {
            var h;
            h = a.slice(0);
            for (a = 0; h.length;)a = 10 * a + h.shift();
            for (h = 0; h < d.scale; h++)a /= 10;
            return a
        }

        var j = a.extend({}, w.settings), d = a.extend(w.settings, t, j);
        w.getVal = function (a) {
            a = w._getVal(a);
            return n.util.isNumeric(a) ? +a : a
        };
        return {
            template: d.prefix.replace(/d/g, "\\d") + Array((Math.floor(d.max) + "").length + 1).join("d") + (d.scale ? "." + Array(d.scale + 1).join("d") : "") +
            d.suffix.replace(/d/g, "\\d"), parseValue: function (a) {
                var h, j;
                h = a || d.defaultValue;
                a = [];
                if (h && (j = (h + "").match(/\d+\.?\d*/g))) {
                    j = (+j[0]).toFixed(d.scale);
                    for (h = 0; h < j.length; h++)"." != j[h] && (+j[h] ? a.push(+j[h]) : a.length && a.push(0))
                }
                return a
            }, formatValue: function (a) {
                a = h(a).toFixed(d.scale);
                return d.returnAffix ? d.prefix + a + d.suffix : a
            }, validate: function (f) {
                var j = h(f).toFixed(d.scale), n = [];
                !f.length && !d.allowLeadingZero && n.push(0);
                w.isVisible() && a(".mbsc-np-dsp", w._markup).html(d.prefix + j + d.suffix);
                return {
                    disabled: n,
                    invalid: +j > d.max || +j < d.min || (d.invalid ? -1 != w._indexOf(d.invalid, +j) : !1)
                }
            }
        }
    }
})($);
(function (a) {
    function n(a) {
        for (var d = 0, f = 1, h = 0; a.length;)3 < d ? f = 3600 : 1 < d && (f = 60), h += a.pop() * f * (d % 2 ? 10 : 1), d++;
        return h
    }

    var t = a.mobiscroll, w = ["h", "m", "s"], h = {
        min: 0,
        max: 362439,
        defaultValue: 0,
        hourTextShort: "h",
        minuteTextShort: "m",
        secTextShort: "s"
    };
    t.presets.numpad.timespan = function (j) {
        function d(b) {
            var d, f = "", i = 3600;
            a(w).each(function (a, h) {
                d = Math.floor(b / i);
                b -= d * i;
                i /= 60;
                if (0 < d || "s" == h && !f)f = f + (f ? " " : "") + d + r[h]
            });
            return f
        }

        var f = a.extend({}, j.settings), s = a.extend(j.settings, h, f), r = {
            h: s.hourTextShort.replace(/d/g,
                "\\d"), m: s.minuteTextShort.replace(/d/g, "\\d"), s: s.secTextShort.replace(/d/g, "\\d")
        }, f = 'd<span class="mbsc-np-sup mbsc-np-time">' + r.s + "</span>";
        9 < s.max && (f = "d" + f);
        99 < s.max && (f = '<span class="mbsc-np-ts-m">' + (639 < s.max ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + r.m + "</span>" + f);
        6039 < s.max && (f = '<span class="mbsc-np-ts-h">' + (38439 < s.max ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + r.h + "</span>" + f);
        j.setVal = function (a, f, h, i) {
            t.util.isNumeric(a) && (a = d(a));
            return j._setVal(a,
                f, h, i)
        };
        j.getVal = function (a) {
            return j._hasValue || a ? n(j.getArrayVal(a)) : null
        };
        return {
            template: f, parseValue: function (b) {
                var f, h = b || d(s.defaultValue), i = [];
                h && a(w).each(function (a, b) {
                    (f = RegExp("(\\d+)" + r[b], "gi").exec(h)) ? (f = +f[1], 9 < f ? (i.push(Math.floor(f / 10)), i.push(f % 10)) : (i.length && i.push(0), (f || i.length) && i.push(f))) : i.length && (i.push(0), i.push(0))
                });
                return i
            }, formatValue: function (a) {
                return d(n(a))
            }, validate: function (a) {
                var d = n(a.slice(0)), f = [];
                a.length || f.push(0);
                return {
                    disabled: f, invalid: d > s.max ||
                    d < s.min || (s.invalid ? -1 != j._indexOf(s.invalid, +d) : !1)
                }
            }
        }
    }
})($);
(function (a) {
    var n = {timeFormat: "hh:ii A", amText: "am", pmText: "pm"};
    a.mobiscroll.presets.numpad.time = function (t) {
        function w(b, d) {
            var f, i = "";
            for (f = 0; f < b.length; ++f)i += b[f] + (f % 2 == (1 == b.length % 2 ? 0 : 1) && f != b.length - 1 ? ":" : "");
            a.each(d, function (a, b) {
                i += " " + b
            });
            return i
        }

        var h = a.extend({}, t.settings), j = a.extend(t.settings, n, h), d = j.timeFormat.split(":"), f = j.timeFormat.match(/a/i), s = f ? "a" == f[0] ? j.amText : j.amText.toUpperCase() : "", r = f ? "a" == f[0] ? j.pmText : j.pmText.toUpperCase() : "", b = 0, g = j.min ? "" + j.min.getHours() :
            "", P = j.max ? "" + j.max.getHours() : "", i = j.min ? "" + (10 > j.min.getMinutes() ? "0" + j.min.getMinutes() : j.min.getMinutes()) : "", O = j.max ? "" + (10 > j.max.getMinutes() ? "0" + j.max.getMinutes() : j.max.getMinutes()) : "", u = j.min ? "" + (10 > j.min.getSeconds() ? "0" + j.min.getSeconds() : j.min.getSeconds()) : "", A = j.max ? "" + (10 > j.max.getSeconds() ? "0" + j.max.getSeconds() : j.max.getSeconds()) : "";
        j.min && j.min.setFullYear(2014, 7, 20);
        j.max && j.max.setFullYear(2014, 7, 20);
        return {
            placeholder: "-",
            allowLeadingZero: !0,
            template: (3 == d.length ? "dd:dd:dd" :
                2 == d.length ? "dd:dd" : "dd") + (f ? '<span class="mbsc-np-sup">{ampm:--}</span>' : ""),
            leftButton: f ? {text: s, variable: "ampm:" + s, value: "00"} : {text: ":00", value: "00"},
            rightButton: f ? {text: r, variable: "ampm:" + r, value: "00"} : {text: ":30", value: "30"},
            parseValue: function (a) {
                var b, d = a || j.defaultValue, i = [];
                if (d) {
                    d += "";
                    if (b = d.match(/\d/g))for (a = 0; a < b.length; a++)i.push(+b[a]);
                    f && i.push("ampm:" + (d.match(RegExp(j.pmText, "gi")) ? r : s))
                }
                return i
            },
            formatValue: function (a, b) {
                return w(a, b)
            },
            validate: function (a, h) {
                var s = w(a, h), k = 3 <=
                a.length ? new Date(2014, 7, 20, "" + a[0] + (0 === a.length % 2 ? a[1] : ""), "" + a[0 === a.length % 2 ? 2 : 1] + a[0 === a.length % 2 ? 3 : 2]) : "", e, q, n, r, m, L, K = [];
                b = e = 2 * d.length;
                a.length || (f && (K.push(0), K.push(j.leftButton.value)), K.push(j.rightButton.value));
                if (!f && (2 > e - a.length || 1 != a[0] && (2 < a[0] || 3 < a[1]) && 2 >= e - a.length))K.push("30"), K.push("00");
                if ((f ? 1 < a[0] || 2 < a[1] : 1 != a[0] && (2 < a[0] || 3 < a[1])) && a[0])a.unshift(0), b = e - 1;
                if (a.length == e)for (e = 0; 9 >= e; ++e)K.push(e); else if (1 == a.length && f && 1 == a[0] || a.length && 0 === a.length % 2 || !f && 2 == a[0] &&
                    3 < a[1] && 1 == a.length % 2)for (e = 6; 9 >= e; ++e)K.push(e);
                n = void 0 !== a[1] ? "" + a[0] + a[1] : "";
                r = +O == +(void 0 !== a[3] ? "" + a[2] + a[3] : 0);
                if (j.invalid)for (e = 0; e < j.invalid.length; ++e)if (q = j.invalid[e].getHours(), m = j.invalid[e].getMinutes(), L = j.invalid[e].getSeconds(), q == +n)if (2 == d.length && (10 > m ? 0 : +("" + m)[0]) == +a[2]) {
                    K.push(10 > m ? m : +("" + m)[1]);
                    break
                } else if ((10 > L ? 0 : +("" + L)[0]) == +a[4]) {
                    K.push(10 > L ? L : +("" + L)[1]);
                    break
                }
                if (j.min || j.max) {
                    q = +g == +n;
                    m = (n = +P == +n) && r;
                    r = q && r;
                    if (0 === a.length) {
                        for (e = f ? 2 : 19 < g ? g[0] : 3; e <= (1 == g[0] ? 9 : g[0] -
                        1); ++e)K.push(e);
                        if (10 <= g && (K.push(0), 2 == g[0]))for (e = 3; 9 >= e; ++e)K.push(e);
                        if (P && 10 > P || g && 10 <= g)for (e = P && 10 > P ? +P[0] + 1 : 0; e < (g && 10 <= g ? g[0] : 10); ++e)K.push(e)
                    }
                    if (1 == a.length) {
                        if (0 === a[0])for (e = 0; e < g[0]; ++e)K.push(e);
                        if (g && 0 !== a[0] && (f ? 1 == a[0] : 2 == a[0]))for (e = f ? 3 : 4; 9 >= e; ++e)K.push(e);
                        if (a[0] == g[0])for (e = 0; e < g[1]; ++e)K.push(e);
                        if (a[0] == P[0] && !f)for (e = +P[1] + 1; 9 >= e; ++e)K.push(e)
                    }
                    if (2 == a.length && (q || n))for (e = n ? +O[0] + 1 : 0; e < (q ? +i[0] : 10); ++e)K.push(e);
                    if (3 == a.length && (n && a[2] == O[0] || q && a[2] == i[0]))for (e = n && a[2] ==
                    O[0] ? +O[1] + 1 : 0; e < (q && a[2] == i[0] ? +i[1] : 10); ++e)K.push(e);
                    if (4 == a.length && (r || m))for (e = m ? +A[0] + 1 : 0; e < (r ? +u[0] : 10); ++e)K.push(e);
                    if (5 == a.length && (r && a[4] == u[0] || m && a[4] == A[0]))for (e = m && a[4] == A[0] ? +A[1] + 1 : 0; e < (r && a[4] == u[0] ? +u[1] : 10); ++e)K.push(e)
                }
                return {
                    disabled: K,
                    length: b,
                    invalid: (f ? !RegExp("^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9]) (?:" + j.amText + "|" + j.pmText + ")$", "i").test(s) : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(s)) || (j.invalid ? -1 != t._indexOf(j.invalid, k) : !1) || !((j.min ? j.min <=
                    k : 1) && (j.max ? k <= j.max : 1))
                }
            }
        }
    }
})($);
(function (a) {
    var n = a.mobiscroll, t = {dateOrder: "mdy", dateFormat: "mm/dd/yy", delimiter: "/"};
    n.presets.numpad.date = function (w) {
        function h(a) {
            return new Date(+("" + a[j] + a[j + 1] + a[j + 2] + a[j + 3]), +("" + a[d] + a[d + 1]) - 1, +("" + a[f] + a[f + 1]))
        }

        var j, d, f, s, r = [];
        s = a.extend({}, w.settings);
        var b = a.extend(w.settings, n.datetime.defaults, t, s), g = b.dateOrder, P = b.min ? "" + (b.getMonth(b.min) + 1) : 0, i = b.max ? "" + (b.getMonth(b.max) + 1) : 0, O = b.min ? "" + b.getDay(b.min) : 0, u = b.max ? "" + b.getDay(b.max) : 0, A = b.min ? "" + b.getYear(b.min) : 0, o = b.max ? "" + b.getYear(b.max) :
            0, g = g.replace(/y+/gi, "yyyy"), g = g.replace(/m+/gi, "mm"), g = g.replace(/d+/gi, "dd");
        j = g.toUpperCase().indexOf("Y");
        d = g.toUpperCase().indexOf("M");
        f = g.toUpperCase().indexOf("D");
        g = "";
        r.push({val: j, n: "yyyy"}, {val: d, n: "mm"}, {val: f, n: "dd"});
        r.sort(function (a, b) {
            return a.val - b.val
        });
        a.each(r, function (a, b) {
            g += b.n
        });
        j = g.indexOf("y");
        d = g.indexOf("m");
        f = g.indexOf("d");
        g = "";
        for (s = 0; 8 > s; ++s)if (g += "d", s + 1 == j || s + 1 == d || s + 1 == f)g += b.delimiter;
        w.getVal = function (a) {
            return w._hasValue || a ? h(w.getArrayVal(a)) : null
        };
        return {
            placeholder: "-",
            fill: "ltr", allowLeadingZero: !0, template: g, parseValue: function (a) {
                var d, f = [];
                d = a || b.defaultValue;
                a = n.datetime.parseDate(b.dateFormat, d);
                if (d)for (d = 0; d < r.length; ++d)f = /m/i.test(r[d].n) ? f.concat(((9 > b.getMonth(a) ? "0" : "") + (b.getMonth(a) + 1)).split("")) : /d/i.test(r[d].n) ? f.concat(((10 > b.getDay(a) ? "0" : "") + b.getDay(a)).split("")) : f.concat((b.getYear(a) + "").split(""));
                return f
            }, formatValue: function (a) {
                return n.datetime.formatDate(b.dateFormat, h(a))
            }, validate: function (a) {
                var g = h(a), k, e, q, n, s = [], m = void 0 !==
                a[j + 3] ? "" + a[j] + a[j + 1] + a[j + 2] + a[j + 3] : "", r = void 0 !== a[d + 1] ? "" + a[d] + a[d + 1] : "", t = void 0 !== a[f + 1] ? "" + a[f] + a[f + 1] : "", U = "" + b.getMaxDayOfMonth(m || 2012, r - 1 || 0), G = A === m && +P === +r, S = o === m && +i === +r;
                if (b.invalid)for (k = 0; k < b.invalid.length; ++k) {
                    e = b.getYear(b.invalid[k]);
                    q = b.getMonth(b.invalid[k]);
                    n = b.getDay(b.invalid[k]);
                    if (e == +m && q + 1 == +r && (10 > n ? 0 : +("" + n)[0]) == +a[f]) {
                        s.push(10 > n ? n : +("" + n)[1]);
                        break
                    }
                    if (q + 1 == +r && n == +t && ("" + e).substring(0, 3) == "" + a[j] + a[j + 1] + a[j + 2]) {
                        s.push(("" + e)[3]);
                        break
                    }
                    if (e == +m && n == +t && (10 > q ? 0 :
                            +("" + (q + 1))[0]) == +a[d]) {
                        s.push(10 > q ? q : +("" + (q + 1))[1]);
                        break
                    }
                }
                if ("31" == t && (a.length == d || a.length == d + 1))1 != a[d] ? s.push(2, 4, 6, 9, 11) : s.push(1);
                "30" == t && 0 === a[d] && a.length <= d + 1 && s.push(2);
                if (a.length == d) {
                    for (k = o === m && 10 > +i ? 1 : 2; 9 >= k; ++k)s.push(k);
                    A === m && 10 <= +P && s.push(0)
                }
                if (a.length == d + 1) {
                    if (1 == a[d]) {
                        for (k = o === m ? +i[1] + 1 : 3; 9 >= k; ++k)s.push(k);
                        if (A == m)for (k = 0; k < +P[1]; ++k)s.push(k)
                    }
                    if (0 === a[d] && (s.push(0), o === m || A === m))for (k = o === m ? +t > +u ? +i : +i + 1 : 0; k <= (A === m ? +P - 1 : 9); ++k)s.push(k)
                }
                if (a.length == f) {
                    for (k = S ? (10 < +u ? +u[0] : 0) + 1 : +U[0] + 1; 9 >= k; ++k)s.push(k);
                    if (G)for (k = 0; k < (10 > +O ? 0 : O[0]); ++k)s.push(k)
                }
                if (a.length == f + 1) {
                    if (3 <= a[f] || "02" == r)for (k = +U[1] + 1; 9 >= k; ++k)s.push(k);
                    if (S && +u[0] == a[f])for (k = +u[1] + 1; 9 >= k; ++k)s.push(k);
                    if (G && O[0] == a[f])for (k = 0; k < +O[1]; ++k)s.push(k);
                    if (0 === a[f] && (s.push(0), S || G))for (k = S ? +u + 1 : 1; k <= (G ? +O - 1 : 9); ++k)s.push(k)
                }
                if (void 0 !== a[j + 2] && "02" == r && "29" == t)for (e = +("" + a[j] + a[j + 1] + a[j + 2] + 0); e <= +("" + a[j] + a[j + 1] + a[j + 2] + 9); ++e)s.push(!(0 === e % 4 && 0 !== e % 100 || 0 === e % 400) ? e % 10 : "");
                if (a.length == j) {
                    if (b.min)for (k =
                                       0; k < +A[0]; ++k)s.push(k);
                    if (b.max)for (k = +o[0] + 1; 9 >= k; ++k)s.push(k);
                    s.push(0)
                }
                if (b.min || b.max)for (e = 1; 4 > e; ++e)if (a.length == j + e) {
                    if (a[j + e - 1] == +A[e - 1] && (3 == e ? a[j + e - 2] == +A[e - 2] : 1))for (k = 0; k < +A[e] + (3 == e && a[d + 1] && +P > +r ? 1 : 0); ++k)s.push(k);
                    if (a[j + e - 1] == +o[e - 1] && (3 == e ? a[j + e - 2] == +o[e - 2] : 1))for (k = +o[e] + (3 == e && +i < +r ? 0 : 1); 9 >= k; ++k)s.push(k)
                }
                return {
                    disabled: s,
                    invalid: !("Invalid Date" != g && (b.min ? b.min <= g : 1) && (b.max ? g <= b.max : 1)) || (b.invalid ? -1 != w._indexOf(b.invalid, g) : !1)
                }
            }
        }
    }
})($);
(function (a) {
    var n = a.mobiscroll;
    n.datetime = {
        defaults: {
            shortYearCutoff: "+10",
            monthNames: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            monthNamesShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            dayNames: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            dayNamesShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
            dayNamesMin: "S,M,T,W,T,F,S".split(","),
            amText: "am",
            pmText: "pm",
            getYear: function (a) {
                return a.getFullYear()
            },
            getMonth: function (a) {
                return a.getMonth()
            },
            getDay: function (a) {
                return a.getDate()
            },
            getDate: function (a, n, h, j, d, f, s) {
                return new Date(a, n, h, j || 0, d || 0, f || 0, s || 0)
            },
            getMaxDayOfMonth: function (a, n) {
                return 32 - (new Date(a, n, 32)).getDate()
            },
            getWeekNumber: function (a) {
                a = new Date(a);
                a.setHours(0, 0, 0);
                a.setDate(a.getDate() + 4 - (a.getDay() || 7));
                var n = new Date(a.getFullYear(), 0, 1);
                return Math.ceil(((a - n) / 864E5 + 1) / 7)
            }
        }, formatDate: function (t, w, h) {
            if (!w)return null;
            var h = a.extend({}, n.datetime.defaults, h), j = function (a) {
                for (var b =
                    0; s + 1 < t.length && t.charAt(s + 1) == a;)b++, s++;
                return b
            }, d = function (a, b, d) {
                b = "" + b;
                if (j(a))for (; b.length < d;)b = "0" + b;
                return b
            }, f = function (a, b, d, f) {
                return j(a) ? f[b] : d[b]
            }, s, r, b = "", g = !1;
            for (s = 0; s < t.length; s++)if (g)"'" == t.charAt(s) && !j("'") ? g = !1 : b += t.charAt(s); else switch (t.charAt(s)) {
                case "d":
                    b += d("d", h.getDay(w), 2);
                    break;
                case "D":
                    b += f("D", w.getDay(), h.dayNamesShort, h.dayNames);
                    break;
                case "o":
                    b += d("o", (w.getTime() - (new Date(w.getFullYear(), 0, 0)).getTime()) / 864E5, 3);
                    break;
                case "m":
                    b += d("m", h.getMonth(w) + 1,
                        2);
                    break;
                case "M":
                    b += f("M", h.getMonth(w), h.monthNamesShort, h.monthNames);
                    break;
                case "y":
                    r = h.getYear(w);
                    b += j("y") ? r : (10 > r % 100 ? "0" : "") + r % 100;
                    break;
                case "h":
                    r = w.getHours();
                    b += d("h", 12 < r ? r - 12 : 0 === r ? 12 : r, 2);
                    break;
                case "H":
                    b += d("H", w.getHours(), 2);
                    break;
                case "i":
                    b += d("i", w.getMinutes(), 2);
                    break;
                case "s":
                    b += d("s", w.getSeconds(), 2);
                    break;
                case "a":
                    b += 11 < w.getHours() ? h.pmText : h.amText;
                    break;
                case "A":
                    b += 11 < w.getHours() ? h.pmText.toUpperCase() : h.amText.toUpperCase();
                    break;
                case "'":
                    j("'") ? b += "'" : g = !0;
                    break;
                default:
                    b +=
                        t.charAt(s)
            }
            return b
        }, parseDate: function (t, w, h) {
            var h = a.extend({}, n.datetime.defaults, h), j = h.defaultValue || new Date;
            if (!t || !w)return j;
            if (w.getTime)return w;
            var w = "object" == typeof w ? w.toString() : w + "", d = h.shortYearCutoff, f = h.getYear(j), s = h.getMonth(j) + 1, r = h.getDay(j), b = -1, g = j.getHours(), P = j.getMinutes(), i = 0, O = -1, u = !1, A = function (a) {
                (a = k + 1 < t.length && t.charAt(k + 1) == a) && k++;
                return a
            }, o = function (a) {
                A(a);
                a = w.substr(D).match(RegExp("^\\d{1," + ("@" == a ? 14 : "!" == a ? 20 : "y" == a ? 4 : "o" == a ? 3 : 2) + "}"));
                if (!a)return 0;
                D += a[0].length;
                return parseInt(a[0], 10)
            }, B = function (a, b, d) {
                a = A(a) ? d : b;
                for (b = 0; b < a.length; b++)if (w.substr(D, a[b].length).toLowerCase() == a[b].toLowerCase())return D += a[b].length, b + 1;
                return 0
            }, D = 0, k;
            for (k = 0; k < t.length; k++)if (u)"'" == t.charAt(k) && !A("'") ? u = !1 : D++; else switch (t.charAt(k)) {
                case "d":
                    r = o("d");
                    break;
                case "D":
                    B("D", h.dayNamesShort, h.dayNames);
                    break;
                case "o":
                    b = o("o");
                    break;
                case "m":
                    s = o("m");
                    break;
                case "M":
                    s = B("M", h.monthNamesShort, h.monthNames);
                    break;
                case "y":
                    f = o("y");
                    break;
                case "H":
                    g = o("H");
                    break;
                case "h":
                    g = o("h");
                    break;
                case "i":
                    P = o("i");
                    break;
                case "s":
                    i = o("s");
                    break;
                case "a":
                    O = B("a", [h.amText, h.pmText], [h.amText, h.pmText]) - 1;
                    break;
                case "A":
                    O = B("A", [h.amText, h.pmText], [h.amText, h.pmText]) - 1;
                    break;
                case "'":
                    A("'") ? D++ : u = !0;
                    break;
                default:
                    D++
            }
            100 > f && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (f <= ("string" != typeof d ? d : (new Date).getFullYear() % 100 + parseInt(d, 10)) ? 0 : -100));
            if (-1 < b) {
                s = 1;
                r = b;
                do {
                    d = 32 - (new Date(f, s - 1, 32)).getDate();
                    if (r <= d)break;
                    s++;
                    r -= d
                } while (1)
            }
            g = h.getDate(f, s -
                1, r, -1 == O ? g : O && 12 > g ? g + 12 : !O && 12 == g ? 0 : g, P, i);
            return h.getYear(g) != f || h.getMonth(g) + 1 != s || h.getDay(g) != r ? j : g
        }
    };
    n.formatDate = n.datetime.formatDate;
    n.parseDate = n.datetime.parseDate
})($);
(function (a, n) {
    var t = {invalid: [], showInput: !0, inputClass: ""};
    a.mobiscroll.presets.scroller.list = function (w) {
        function h(b, d, c, e) {
            for (var f, g = 0; g < d;) {
                var i = a(".dwwl" + g, b), h;
                f = 0;
                h = void 0;
                for (var k = c, j = []; f < g;) {
                    var p = e[f];
                    for (h in k)if (k[h].key == p) {
                        k = k[h].children;
                        break
                    }
                    f++
                }
                for (f = 0; f < k.length;)k[f].invalid && j.push(k[f].key), f++;
                h = j;
                for (f = 0; f < h.length; f++)a('.dw-li[data-val="' + h[f] + '"]', i).removeClass("dw-v");
                g++
            }
        }

        function j(a, b) {
            for (var c = []; a;)c[--a] = !0;
            c[b] = !1;
            return c
        }

        function d(a, b, c) {
            var d = 0, e, g,
                i = [[]], h = m;
            if (b)for (e = 0; e < b; e++)O ? i[0][e] = {} : i[e] = [{}];
            for (; d < a.length;) {
                O ? i[0][d] = s(h, L[d]) : i[d] = [s(h, L[d])];
                e = 0;
                for (b = n; e < h.length && b === n;) {
                    if (h[e].key == a[d] && (c !== n && d <= c || c === n))b = e;
                    e++
                }
                if (b !== n && h[b].children)d++, h = h[b].children; else if ((g = f(h)) && g.children)d++, h = g.children; else break
            }
            return i
        }

        function f(a, b) {
            if (!a)return !1;
            for (var c = 0, d; c < a.length;)if (!(d = a[c++]).invalid)return b ? c - 1 : d;
            return !1
        }

        function s(a, b) {
            for (var c = {
                keys: [],
                values: [],
                label: b
            }, d = 0; d < a.length;)c.values.push(a[d].value), c.keys.push(a[d].key),
                d++;
            return c
        }

        function r(b, d) {
            a(".dwfl", b).css("display", "").slice(d).hide()
        }

        function b(a, b) {
            var c = [], d = m, e = 0, g = !1, i, h;
            if (a[e] !== n && e <= b) {
                g = 0;
                i = a[e];
                for (h = n; g < d.length && h === n;)d[g].key == a[e] && !d[g].invalid && (h = g), g++
            } else h = f(d, !0), i = d[h].key;
            g = h !== n ? d[h].children : !1;
            for (c[e] = i; g;) {
                d = d[h].children;
                e++;
                if (a[e] !== n && e <= b) {
                    g = 0;
                    i = a[e];
                    for (h = n; g < d.length && h === n;)d[g].key == a[e] && !d[g].invalid && (h = g), g++
                } else h = f(d, !0), h = !1 === h ? n : h, i = d[h].key;
                g = h !== n && f(d[h].children) ? d[h].children : !1;
                c[e] = i
            }
            return {
                lvl: e +
                1, nVector: c
            }
        }

        function g(b) {
            var d = [];
            k = k > e++ ? k : e;
            b.children("li").each(function (c) {
                var b = a(this), e = b.clone();
                e.children("ul,ol").remove();
                var e = w._processMarkup ? w._processMarkup(e) : e.html().replace(/^\s\s*/, "").replace(/\s\s*$/, ""), f = b.attr("data-invalid") ? !0 : !1, c = {
                    key: b.attr("data-val") === n || null === b.attr("data-val") ? c : b.attr("data-val"),
                    value: e,
                    invalid: f,
                    children: null
                }, b = b.children("ul,ol");
                b.length && (c.children = g(b));
                d.push(c)
            });
            e--;
            return d
        }

        var P = a.extend({}, w.settings), i = a.extend(w.settings, t,
            P), P = i.layout || (/top|bottom/.test(i.display) ? "liquid" : ""), O = "liquid" == P, u = i.readonly, A = a(this), o, B, D = this.id + "_dummy", k = 0, e = 0, q = {}, y, I = [], m = i.wheelArray || g(A), L = function (a) {
            var b = [], c;
            for (c = 0; c < a; c++)b[c] = i.labels && i.labels[c] ? i.labels[c] : c;
            return b
        }(k), K = function (a) {
            var b = [], c;
            c = !0;
            for (var d = 0; c;)c = f(a), b[d++] = c.key, (c = c.children) && (a = c);
            return b
        }(m), U = d(K, k);
        a("#" + D).remove();
        i.showInput && (o = a('<input type="text" id="' + D + '" value="" class="' + i.inputClass + '" placeholder="' + (i.placeholder || "") + '" readonly />').insertBefore(A),
            i.anchor = o, w.attachShow(o));
        i.wheelArray || A.hide().closest(".ui-field-contain").trigger("create");
        return {
            width: 50, wheels: U, layout: P, headerText: !1, formatValue: function (a) {
                if (y === n)y = b(a, a.length).lvl;
                return a.slice(0, y).join(" ")
            }, parseValue: function (a) {
                return a ? (a + "").split(" ") : (i.defaultValue || K).slice(0)
            }, onBeforeShow: function () {
                var a = w.getArrayVal(true);
                I = a.slice(0);
                i.wheels = d(a, k, k);
                B = true
            }, onValueFill: function (a) {
                y = n;
                o && o.val(a)
            }, onShow: function (b) {
                a(".dwwl", b).on("mousedown touchstart", function () {
                    clearTimeout(q[a(".dwwl",
                        b).index(this)])
                })
            }, onDestroy: function () {
                o && o.remove();
                A.show()
            }, validate: function (a, e, c) {
                var f = [], g = w.getArrayVal(true), s = (e || 0) + 1, l, o;
                if (e !== n && I[e] != g[e] || e === n && !B) {
                    i.wheels = d(g, null, e);
                    o = b(g, e === n ? g.length : e);
                    y = o.lvl;
                    for (l = 0; l < g.length; l++)g[l] = o.nVector[l] || 0;
                    for (; s < o.lvl;)f.push(s++);
                    if (f.length) {
                        i.readonly = j(k, e);
                        clearTimeout(q[e]);
                        q[e] = setTimeout(function () {
                            B = true;
                            r(a, o.lvl);
                            I = g.slice(0);
                            w.changeWheel(f, e === n ? c : 0, e !== n);
                            i.readonly = u
                        }, e === n ? 0 : c * 1E3);
                        return false
                    }
                } else {
                    o = b(g, g.length);
                    y = o.lvl
                }
                I =
                    g.slice(0);
                h(a, o.lvl, m, g);
                r(a, o.lvl);
                B = false
            }
        }
    }
})($);
(function (a, n) {
    var t = a.mobiscroll, w = t.classes, h = t.util, j = h.constrain, d = h.jsPrefix, f = h.prefix, s = h.has3d, r = h.getCoord, b = h.getPosition, g = h.testTouch, P = h.isNumeric, i = h.isString, O = window.requestAnimationFrame || function (a) {
            a()
        }, u = window.cancelAnimationFrame || function () {
        };
    w.ScrollView = function (h, o, B) {
        function D(d) {
            if ((!ia.lock || !F) && g(d, this) && !Z && a.mobiscroll.running) {
                "mousedown" == d.type && d.preventDefault();
                L && L.removeClass("mbsc-btn-a");
                N = !1;
                L = a(d.target).closest(".mbsc-btn-e", this);
                L.length && !L.hasClass("mbsc-btn-d") &&
                (N = !0, K = setTimeout(function () {
                    L.addClass("mbsc-btn-a")
                }, 100));
                Z = !0;
                V = !1;
                W.scrolled = F;
                ha = r(d, "X");
                fa = r(d, "Y");
                J = ha;
                c = S = G = 0;
                ga = new Date;
                ea = +b(X, ka) || 0;
                m(ea, 1);
                if ("mousedown" === d.type)a(document).on("mousemove", k).on("mouseup", q); else if ("pointerdown" === d.type)a(document).on("pointermove", k).on("pointerup", q);
                da("onScrollStart", [C])
            }
        }

        function k(a) {
            if (Z) {
                J = r(a, "X");
                l = r(a, "Y");
                G = J - ha;
                S = l - fa;
                c = ka ? S : G;
                if (N && (5 < Math.abs(S) || 5 < Math.abs(G)))clearTimeout(K), L.removeClass("mbsc-btn-a"), N = !1;
                !V && 5 < Math.abs(c) &&
                (W.scrolled = !0, ia.liveSwipe && !T && (T = !0, Q = O(e)));
                ka || ia.scrollLock ? a.preventDefault() : W.scrolled ? a.preventDefault() : 7 < Math.abs(S) && (V = !0, W.scrolled = !0, Ba.trigger("touchend"))
            }
        }

        function e() {
            R && (c = j(c, -Y * R, Y * R));
            m(j(ea + c, p - x, M + x));
            T = !1
        }

        function q(b) {
            if (Z) {
                var d;
                d = new Date - ga;
                u(Q);
                T = !1;
                !V && W.scrolled && (ia.momentum && s && 300 > d && (d = c / d, c = Math.max(Math.abs(c), d * d / ia.speedUnit) * (0 > c ? -1 : 1)), t(c));
                N && (clearTimeout(K), L.addClass("mbsc-btn-a"), setTimeout(function () {
                    L.removeClass("mbsc-btn-a")
                }, 100), !V && !W.scrolled &&
                da("onBtnTap", [L]));
                "mouseup" == b.type ? a(document).off("mousemove", k).off("mouseup", q) : "pointerup" == b.type && a(document).off("pointermove", k).off("pointerup", q);
                Z = !1
            }
        }

        function y(b) {
            b = b.originalEvent || b;
            if ((c = ka ? b.deltaY || b.wheelDelta || b.detail : b.deltaX) && a.mobiscroll.running)b.preventDefault(), c = 0 > c ? 20 : -20, ea = C, T || (T = !0, Q = O(e)), clearTimeout(aa), aa = setTimeout(function () {
                u(Q);
                T = false;
                t(c)
            }, 200)
        }

        function t(a) {
            var b;
            R && (a = j(a, -Y * R, Y * R));
            ua = Math.round((ea + a) / Y);
            b = j(ua * Y, p, M);
            if (E) {
                if (0 > a)for (a = E.length -
                    1; 0 <= a; a--) {
                    if (Math.abs(b) + U >= E[a].breakpoint) {
                        ua = a;
                        pa = 2;
                        b = E[a].snap2;
                        break
                    }
                } else if (0 <= a)for (a = 0; a < E.length; a++)if (Math.abs(b) <= E[a].breakpoint) {
                    ua = a;
                    pa = 1;
                    b = E[a].snap1;
                    break
                }
                b = j(b, p, M)
            }
            m(b, ia.time || (C < p || C > M ? 200 : Math.max(200, Math.abs(b - C) * ia.timeUnit)), function () {
                da("onScrollEnd", [C])
            })
        }

        function m(a, b, c) {
            var e = function () {
                F = !1;
                c && c()
            };
            F = !0;
            s ? (v[d + "Transition"] = b ? f + "transform " + Math.round(b) + "ms " + ia.easing : "", v[d + "Transform"] = "translate3d(" + (ka ? "0," + a + "px," : a + "px,0,") + "0)", C == a || !b ? e() : b && setTimeout(function () {
                v[d +
                "Transition"] = "";
                e()
            }, b)) : (setTimeout(e, b || 0), v[H] = a + "px");
            C = a
        }

        var L, K, U, G, S, c, H, x, J, l, N, M, R, p, V, Z, F, Q, T, aa, Y, E, ea, ga, ha, fa, v, X, da, ka, W = this, C = 0, ua = 0, pa = 1, ia = o, Ba = a(h);
        w.Base.call(this, h, o, !0);
        W.scrolled = !1;
        W.scroll = function (b, c, d) {
            b = P(b) ? Math.round(b / Y) * Y : Math.ceil((a(b, h).length ? Math.round(X.offset()[H] - a(b, h).offset()[H]) : C) / Y) * Y;
            ua = Math.round(b / Y);
            m(j(b, p, M), c, d)
        };
        W.refresh = function () {
            var a;
            U = ia.contSize === n ? ka ? Ba.height() : Ba.width() : ia.contSize;
            p = ia.minScroll === n ? ka ? U - X.height() : U - X.width() :
                ia.minScroll;
            M = ia.maxScroll === n ? 0 : ia.maxScroll;
            !ka && ia.rtl && (a = M, M = -p, p = -a);
            i(ia.snap) && (E = [], X.find(ia.snap).each(function () {
                var a = ka ? this.offsetTop : this.offsetLeft, b = ka ? this.offsetHeight : this.offsetWidth;
                E.push({breakpoint: a + b / 2, snap1: -a, snap2: U - a - b})
            }));
            Y = P(ia.snap) ? ia.snap : 1;
            R = ia.snap ? ia.maxSnapScroll : 0;
            x = ia.elastic ? P(ia.snap) ? Y : P(ia.elastic) ? ia.elastic : 0 : 0;
            W.scroll(ia.snap ? E ? E[ua]["snap" + pa] : ua * Y : C)
        };
        W.init = function (a) {
            W._init(a);
            H = (ka = "Y" == ia.axis) ? "top" : "left";
            X = ia.moveElement || Ba.children().eq(0);
            v = X[0].style;
            W.refresh();
            if (ia.swipe)Ba.on("touchstart mousedown pointerdown", D).on("touchmove", k).on("touchend touchcancel pointercancel", q);
            if (ia.mousewheel)Ba.on("wheel mousewheel", y);
            h.addEventListener && h.addEventListener("click", function (a) {
                W.scrolled && (a.stopPropagation(), a.preventDefault())
            }, !0)
        };
        W.destroy = function () {
            Ba.off("touchstart mousedown pointerdown", D).off("touchmove", k).off("touchend touchcancel pointercancel", q).off("wheel mousewheel", y);
            W._destroy()
        };
        ia = W.settings;
        da = W.trigger;
        B || W.init(o)
    };
    w.ScrollView.prototype = {
        _class: "scrollview",
        _defaults: {
            speedUnit: 0.0022,
            timeUnit: 0.8,
            axis: "Y",
            easing: "ease-out",
            swipe: !0,
            liveSwipe: !0,
            momentum: !0,
            elastic: !0
        }
    };
    t.presetShort("scrollview", "ScrollView", !1)
})($);
(function (a, n) {
    var t = a.mobiscroll, w = {
        batch: 50,
        min: 0,
        max: 100,
        defUnit: "",
        units: null,
        unitNames: null,
        invalid: [],
        sign: !1,
        step: 0.05,
        scale: 2,
        convert: function (a) {
            return a
        },
        signText: "&nbsp;",
        wholeText: "Whole",
        fractionText: "Fraction",
        unitText: "Unit"
    };
    t.presets.scroller.measurement = function (h) {
        function j(a) {
            return Math.max(ea, Math.min(ga, J ? 0 > a ? Math.ceil(a) : Math.floor(a) : r(Math.round(a - X), R) + X))
        }

        function d(a) {
            return J ? r((Math.abs(a) - Math.abs(j(a))) * M - da, R) + da : 0
        }

        function f(a) {
            var b = j(a), c = d(a);
            c >= M && (0 > a ? b-- :
                b++, c = 0);
            return [0 > a ? "-" : "+", b, c]
        }

        function s(a) {
            var b = +a[T], c = J ? g(a[Q]) / M * (0 > b ? -1 : 1) : 0;
            return (S && "-" == a[0] ? -1 : 1) * (b + c)
        }

        function r(a, b) {
            return Math.round(a / b) * b
        }

        function b(a, b) {
            for (a += ""; a.length < b;)a = "0" + a;
            return a
        }

        function g(a) {
            return a ? (a + "").replace(/\+|\-/g, "") : ""
        }

        function P(a, b, c) {
            return b === c || !D.convert ? a : D.convert.call(this, a, b, c)
        }

        function i(a, b, c) {
            a = a > c ? c : a;
            return a < b ? b : a
        }

        function O(a) {
            Y = P(D.min, H, a);
            E = P(D.max, H, a);
            J ? (ea = 0 > Y ? Math.ceil(Y) : Math.floor(Y), ga = 0 > E ? Math.ceil(E) : Math.floor(E), ha =
                d(Y), fa = d(E)) : (ea = Math.round(Y), ga = Math.round(E), ga = ea + Math.floor((ga - ea) / R) * R, X = ea % R)
        }

        function u(a, b) {
            var c = +ea, d = +ga, e = J ? 1 : R, f;
            S && (d = Math.abs(c) > Math.abs(d) ? Math.abs(c) : Math.abs(d), c = 0 > c ? 0 : c);
            f = b - m * e;
            f = f < c ? c : f;
            c = f + 2 * m * e;
            c = c > d ? d : c;
            if (f !== L || c !== K) {
                q.values = [];
                q.label = D.wholeText;
                for (W = f; W <= c; W += e)q.values.push(W);
                U = f;
                G = c;
                return !0
            }
            return !1
        }

        function A(c) {
            if (l) {
                var d = t.length, c = a.inArray(+c, t), e, f;
                y.keys = [];
                y.values = [];
                for (W = -50; 50 > W; W++)e = (W + c) % d, f = t[0 > e ? d + e : e], e = Math.abs(Math.floor((W + c) / d)), y.keys.push(Array(e).join(0 >
                    W + c ? "-" : "+") + f), y.values.push("." + b(f, N))
            }
        }

        function o(a) {
            return s(a).toFixed(J ? N : 0) + (c ? " " + x[a[aa]] : "")
        }

        var B = a.extend({}, h.settings), D = a.extend(h.settings, w, B), B = {}, k = [[]], e = {}, q = {}, y = {}, t = [], m = D.batch, L, K, U, G, S = D.sign, c = D.units && D.units.length, H = c ? D.defUnit || D.units[0] : "", x = D.unitNames || D.units, J = 1 > D.step, l = !1, N = J ? Math.max(D.scale, (D.step + "").split(".")[1].length) : 1, M = Math.pow(10, N), R = Math.round(J ? D.step * M : D.step), p, V, Z, F = -1, Q, T, aa, Y, E, ea, ga, ha, fa, v, X = 0, da = 0, ka = {}, W, C = 0;
        h.setVal = function (b, c, d,
                             e, f) {
            h._setVal(a.isArray(b) ? o(b) : b, c, d, e, f)
        };
        h.setValue = function (a, b, c, d, e) {
            h.setVal(a, b, e, d, c)
        };
        O(H);
        if (S)if (S = !1, c)for (W = 0; W < D.units.length; W++)0 > P(D.min, H, D.units[W]) && (S = !0); else S = 0 > D.min;
        S && (k[0].push({values: ["-", "+"], label: D.signText}), F = C++);
        k[0].push(q);
        T = C++;
        if (J) {
            k[0].push(y);
            y.keys = [];
            y.values = [];
            y.label = D.fractionText;
            for (W = da; W < M; W += R)t.push(W), y.keys.push(W), y.values.push("." + b(W, N));
            l = t.length > D.rows;
            Q = C++;
            p = Math.ceil(100 / R);
            D.invalid && D.invalid.length && (a.each(D.invalid, function (a,
                                                                          b) {
                var c = b > 0 ? Math.floor(b) : Math.ceil(b);
                c === 0 && (c = b <= 0 ? -0.001 : 0.001);
                e[c] = (e[c] || 0) + 1;
                if (b === 0) {
                    c = 0.001;
                    e[c] = (e[c] || 0) + 1
                }
            }), a.each(e, function (a, b) {
                b < p ? delete e[a] : e[a] = a
            }))
        }
        if (c) {
            B = {keys: [], values: [], label: D.unitText};
            for (W = 0; W < D.units.length; W++)B.keys.push(W), B.values.push(x[W]);
            k[0].push(B)
        }
        aa = C;
        return {
            width: 55, wheels: k, showLabel: !1, formatValue: o, parseValue: function (b) {
                var d = ((b || D.defaultValue) + "").split(" "), b = +d[0], e = [], g = "";
                if (c) {
                    g = a.inArray(d[1], x);
                    g = g == -1 ? a.inArray(H, D.units) : g;
                    g = g == -1 ? 0 :
                        g
                }
                Z = c ? D.units[g] : "";
                O(Z);
                b = isNaN(b) ? 0 : b;
                b = i(b, Y, E);
                d = f(b);
                d[1] = i(d[1], ea, ga);
                V = b;
                if (S) {
                    e[0] = d[0];
                    d[1] = Math.abs(d[1])
                }
                e[T] = d[1];
                J && (e[Q] = d[2]);
                c && (e[aa] = g);
                return e
            }, onBeforeShow: function () {
                u(Z, h._tempWheelArray[T]);
                A(g(h._tempWheelArray[Q]));
                L = U;
                K = G;
                v = true
            }, onShow: function (b) {
                a(".dwwl", b).on("mousedown touchstart", function () {
                    clearTimeout(ka[a(".dwwl", b).index(this)])
                })
            }, onCancel: function () {
                V = n
            }, validate: function (b, d, k, j) {
                var p = h._tempWheelArray, o, m = [], q, C, N, w, x, M, y, B = +g(p[Q]), t = c ? D.units[p[aa]] : "";
                if (S && d === 0) {
                    V = Math.abs(V) * (p[d] === "-" ? -1 : 1);
                    m = l ? [T, Q] : [T]
                }
                if (d === T || d === Q && J || V === n || d === n && !v) {
                    V = s(p);
                    Z = t
                }
                if (c && d === aa && Z !== t || d === n && !v) {
                    O(t);
                    V = P(V, Z, t);
                    Z = t;
                    C = f(V);
                    S && (p[0] = C[0]);
                    u(t, S ? Math.abs(C[1]) : C[1]);
                    A(B);
                    m = l ? [T, Q] : [T];
                    q = d ? 0.2 : k
                }
                V = i(V, Y, E);
                C = f(V);
                w = S ? Math.abs(C[1]) : C[1];
                o = S ? p[0] == "-" : V < 0;
                p[T] = w;
                o && (C[0] = "-");
                J && (p[Q] = C[2]);
                if (d === T || S && d === 0)x = u(t, w);
                d === T && x && m.push(T);
                if (d === Q && l) {
                    A(B);
                    m.push(Q)
                }
                if (m.length) {
                    ka[d] = setTimeout(function () {
                        v = true;
                        L = U;
                        K = G;
                        h.changeWheel(m, q, d !== n)
                    }, d === n ? 0 : k *
                    1E3);
                    return false
                }
                if (S && d === n) {
                    M = a(".dw-ul", b).eq(F);
                    a(".dw-li", M).addClass("dw-v");
                    Y > 0 && a(".dw-li", M).eq(0).removeClass("dw-v");
                    E < 0 && a(".dw-li", M).eq(1).removeClass("dw-v")
                }
                M = a(".dw-ul", b).eq(T);
                if (S && !d) {
                    a(".dw-li", M).addClass("dw-v");
                    W = a(".dw-li", M).index(a('.dw-li[data-val="' + Math.abs(o ? ea : ga) + '"]', M));
                    W != -1 && a(".dw-li", M).slice(W + 1).removeClass("dw-v")
                }
                a.each(J ? e : D.invalid, function (b, c) {
                    if (S && o)if (c <= 0)c = Math.abs(c); else return;
                    a('.dw-li[data-val="' + r(P(c, H, t), J ? 1 : R) + '"]', M).removeClass("dw-v")
                });
                p[T] = +h.getValidCell(w, M, j).val;
                C[1] = p[T] * (S && o ? -1 : 1);
                if (d !== Q && J) {
                    M = a(".dw-ul", b).eq(Q);
                    a(".dw-li", M).addClass("dw-v");
                    b = S ? p[0] + g(p[1]) : (V < 0 ? "-" : "+") + Math.abs(C[1]);
                    k = (Y < 0 ? "-" : "+") + Math.abs(ea);
                    j = (E < 0 ? "-" : "+") + Math.abs(ga);
                    b === k && a(".dw-li", M).each(function () {
                        y = g(a(this).attr("data-val"));
                        (o ? y > ha : y < ha) && a(this).removeClass("dw-v")
                    });
                    b === j && a(".dw-li", M).each(function () {
                        y = g(a(this).attr("data-val"));
                        (o ? y < fa : y > fa) && a(this).removeClass("dw-v")
                    });
                    a.each(D.invalid, function (b, c) {
                        N = f(P(c, H, t));
                        (C[0] ===
                        N[0] || C[1] === 0 && N[1] === 0 && N[2] === 0) && C[1] === N[1] && a(".dw-li", M).each(function () {
                            g(a(this).attr("data-val")) == N[2] && a(this).removeClass("dw-v")
                        })
                    })
                }
                v = false
            }
        }
    };
    t.presetShort("measurement")
})($);
(function (a, n, t, w) {
    var h = a.mobiscroll, j = h.presets.scroller, d = h.util, f = d.has3d, s = d.jsPrefix, r = d.testTouch, b = {
        controls: ["calendar"],
        firstDay: 0,
        weekDays: "short",
        maxMonthWidth: 170,
        months: 1,
        preMonths: 1,
        highlight: !0,
        highlightNow: !0,
        swipe: !0,
        liveSwipe: !0,
        divergentDayChange: !0,
        quickNav: !0,
        navigation: "yearMonth",
        todayClass: "dw-cal-today",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left6",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right6",
        dateText: "Date",
        timeText: "Time",
        calendarText: "Calendar",
        todayText: "Today",
        prevMonthText: "Previous Month",
        nextMonthText: "Next Month",
        prevYearText: "Previous Year",
        nextYearText: "Next Year"
    };
    j.calbase = function (g) {
        function n(b, c, d) {
            var e, f, g, i, h = {}, l = na + Ia;
            b && a.each(b, function (a, b) {
                e = b.d || b.start || b;
                f = e + "";
                if (b.start && b.end)for (i = new Date(b.start); i <= b.end;)g = new Date(i.getFullYear(), i.getMonth(), i.getDate()), h[g] = h[g] || [], h[g].push(b), i.setDate(i.getDate() + 1); else if (e.getTime)g = new Date(e.getFullYear(), e.getMonth(), e.getDate()), h[g] = h[g] || [], h[g].push(b); else if (f.match(/w/i)) {
                    var k = +f.replace("w", ""),
                        j = 0, p = z.getDate(c, d - na - ma, 1).getDay();
                    1 < z.firstDay - p + 1 && (j = 7);
                    for (N = 0; N < 5 * Ea; N++)g = z.getDate(c, d - na - ma, 7 * N - j - p + 1 + k), h[g] = h[g] || [], h[g].push(b)
                } else if (f = f.split("/"), f[1])11 <= d + l && (g = z.getDate(c + 1, f[0] - 1, f[1]), h[g] = h[g] || [], h[g].push(b)), 1 >= d - l && (g = z.getDate(c - 1, f[0] - 1, f[1]), h[g] = h[g] || [], h[g].push(b)), g = z.getDate(c, f[0] - 1, f[1]), h[g] = h[g] || [], h[g].push(b); else for (N = 0; N < Ea; N++)g = z.getDate(c, d - na - ma + N, f[0]), z.getDay(g) == f[0] && (h[g] = h[g] || [], h[g].push(b))
            });
            return h
        }

        function i(a, b) {
            Ja = n(z.invalid, a,
                b);
            Db = n(z.valid, a, b);
            g.onGenMonth(a, b)
        }

        function O(a, b, c, d, e, f, g) {
            var h = '<div class="dw-cal-h dw-cal-sc-c dw-cal-' + a + "-c " + (z.calendarClass || "") + '"><div class="dw-cal-sc"><div class="dw-cal-sc-p"><div class="dw-cal-sc-tbl"><div class="dw-cal-sc-row">';
            for (l = 1; l <= b; l++)h = 12 >= l || l > c ? h + '<div class="dw-cal-sc-m-cell dw-cal-sc-cell dw-cal-sc-empty"><div class="dw-i">&nbsp;</div></div>' : h + ('<div tabindex="0" role="button"' + (f ? ' aria-label="' + f[l - 13] + '"' : "") + ' class="dwb-e dwb-nhl dw-cal-sc-m-cell dw-cal-sc-cell dw-cal-' +
            a + '-s" data-val=' + (d + l - 13) + '><div class="dw-i dw-cal-sc-tbl"><div class="dw-cal-sc-cell">' + (g ? g[l - 13] : d + l - 13 + e) + "</div></div></div>"), l < b && (0 === l % 12 ? h += '</div></div></div><div class="dw-cal-sc-p" style="' + (Pa ? "top" : Xa ? "right" : "left") + ":" + 100 * Math.round(l / 12) + '%"><div class="dw-cal-sc-tbl"><div class="dw-cal-sc-row">' : 0 === l % 3 && (h += '</div><div class="dw-cal-sc-row">'));
            return h + "</div></div></div></div></div>"
        }

        function u(b, c) {
            var d, e, f, h, i, l, k, j, p, F, o, s, m, n, Y = 1, q = 0;
            d = z.getDate(b, c, 1);
            var v = z.getYear(d),
                E = z.getMonth(d), C = null === z.defaultValue && !g._hasValue ? null : g.getDate(!0), r = z.getDate(v, E, 1).getDay(), R = '<div class="dw-cal-table">', u = '<div class="dw-week-nr-c">';
            1 < z.firstDay - r + 1 && (q = 7);
            for (n = 0; 42 > n; n++)m = n + z.firstDay - q, d = z.getDate(v, E, m - r + 1), e = d.getFullYear(), f = d.getMonth(), h = d.getDate(), i = z.getMonth(d), l = z.getDay(d), s = z.getMaxDayOfMonth(e, f), k = e + "-" + f + "-" + h, f = a.extend({
                valid: d < new Date(gb.getFullYear(), gb.getMonth(), gb.getDate()) || d > wa ? !1 : Ja[d] === w || Db[d] !== w,
                selected: C && C.getFullYear() === e && C.getMonth() ===
                f && C.getDate() === h
            }, g.getDayProps(d, C)), j = f.valid, p = f.selected, e = f.cssClass, F = d.getTime() === (new Date).setHours(0, 0, 0, 0), o = i !== E, Ab[k] = f, 0 === n % 7 && (R += (n ? "</div>" : "") + '<div class="dw-cal-row' + (z.highlight && C && 0 <= C - d && 6048E5 > C - d ? " dw-cal-week-hl" : "") + '">'), nb && 1 == d.getDay() && ("month" == nb && o && 1 < Y ? Y = 1 == h ? 1 : 2 : "year" == nb && (Y = z.getWeekNumber(d)), u += '<div class="dw-week-nr"><div class="dw-week-nr-i">' + Y + "</div></div>", Y++), R += '<div role="button" tabindex="-1" aria-label="' + (F ? z.todayText + ", " : "") + z.dayNames[d.getDay()] +
                ", " + z.monthNames[i] + " " + l + " " + (f.ariaLabel ? ", " + f.ariaLabel : "") + '"' + (o && !Wa ? ' aria-hidden="true"' : "") + (p ? ' aria-selected="true"' : "") + (j ? "" : ' aria-disabled="true"') + ' data-day="' + m % 7 + '" data-full="' + k + '"class="dw-cal-day ' + (z.dayClass || "") + (p ? " dw-sel" : "") + (F ? " " + z.todayClass : "") + (e ? " " + e : "") + (1 == l ? " dw-cal-day-first" : "") + (l == s ? " dw-cal-day-last" : "") + (o ? " dw-cal-day-diff" : "") + (j ? " dw-cal-day-v dwb-e dwb-nhl" : " dw-cal-day-inv") + '"><div class="dw-i ' + (p ? ra : "") + " " + (z.innerDayClass || "") + '"><div class="dw-cal-day-fg">' +
                l + g._processItem(a, 0.06) + "</div>" + (f.markup || "") + '<div class="dw-cal-day-frame"></div></div></div>';
            return R + ("</div></div>" + u + "</div>")
        }

        function A(b, c, d) {
            var e = z.getDate(b, c, 1), f = z.getYear(e), e = z.getMonth(e), g = f + Ca;
            if ($a) {
                bb && bb.removeClass("dw-sel").removeAttr("aria-selected").find(".dw-i").removeClass(ra);
                rb && rb.removeClass("dw-sel").removeAttr("aria-selected").find(".dw-i").removeClass(ra);
                bb = a('.dw-cal-year-s[data-val="' + f + '"]', p).addClass("dw-sel").attr("aria-selected", "true");
                rb = a('.dw-cal-month-s[data-val="' +
                    e + '"]', p).addClass("dw-sel").attr("aria-selected", "true");
                bb.find(".dw-i").addClass(ra);
                rb.find(".dw-i").addClass(ra);
                Ua && Ua.scroll(bb, d);
                a(".dw-cal-month-s", p).removeClass("dwb-d");
                if (f === pa)for (l = 0; l < Ba; l++)a('.dw-cal-month-s[data-val="' + l + '"]', p).addClass("dwb-d");
                if (f === ia)for (l = oa + 1; 12 >= l; l++)a('.dw-cal-month-s[data-val="' + l + '"]', p).addClass("dwb-d")
            }
            1 == C.length && C.attr("aria-label", f).html(g);
            for (l = 0; l < la; ++l)e = z.getDate(b, c - ma + l, 1), f = z.getYear(e), e = z.getMonth(e), g = f + Ca, a(ka[l]).attr("aria-label",
                z.monthNames[e] + (Da ? "" : " " + f)).html((!Da && ua < W ? g + " " : "") + v[e] + (!Da && ua > W ? " " + g : "")), 1 < C.length && a(C[l]).html(g);
            z.getDate(b, c - ma - 1, 1) < Fa ? B(a(".dw-cal-prev-m", p)) : o(a(".dw-cal-prev-m", p));
            z.getDate(b, c + la - ma, 1) > Ka ? B(a(".dw-cal-next-m", p)) : o(a(".dw-cal-next-m", p));
            z.getDate(b, c, 1).getFullYear() <= Fa.getFullYear() ? B(a(".dw-cal-prev-y", p)) : o(a(".dw-cal-prev-y", p));
            z.getDate(b, c, 1).getFullYear() >= Ka.getFullYear() ? B(a(".dw-cal-next-y", p)) : o(a(".dw-cal-next-y", p))
        }

        function o(a) {
            a.removeClass(qb).find(".dw-cal-btn-txt").removeAttr("aria-disabled")
        }

        function B(a) {
            a.addClass(qb).find(".dw-cal-btn-txt").attr("aria-disabled", "true")
        }

        function D(b, c) {
            if (Y && ("calendar" === Va || c)) {
                var d, e, f = z.getDate(qa, ja, 1), h = Math.abs(12 * (z.getYear(b) - z.getYear(f)) + z.getMonth(b) - z.getMonth(f));
                g.needsSlide && h && (qa = z.getYear(b), ja = z.getMonth(b), b > f ? (e = h > na - ma + la - 1, ja -= e ? 0 : h - na, d = "next") : b < f && (e = h > na + ma, ja += e ? 0 : h - na, d = "prev"), y(qa, ja, d, Math.min(h, na), e, !0));
                c || (g.trigger("onDayHighlight", [b]), z.highlight && (a(".dw-sel .dw-i", Z).removeClass(ra), a(".dw-sel", Z).removeClass("dw-sel").removeAttr("aria-selected"),
                    a(".dw-cal-week-hl", Z).removeClass("dw-cal-week-hl"), (null !== z.defaultValue || g._hasValue) && a('.dw-cal-day[data-full="' + b.getFullYear() + "-" + b.getMonth() + "-" + b.getDate() + '"]', Z).addClass("dw-sel").attr("aria-selected", "true").find(".dw-i").addClass(ra).closest(".dw-cal-row").addClass("dw-cal-week-hl")));
                g.needsSlide = !0
            }
        }

        function k(a, b) {
            i(a, b);
            for (l = 0; l < Ea; l++)va[l].html(u(a, b - ma - na + l));
            q();
            g.needsRefresh = !1;
            g.trigger("onMonthLoaded", [a, b])
        }

        function e(b, c, d) {
            var e = na, f = na;
            if (d) {
                for (; f && z.getDate(b, c +
                    e + la - ma - 1, 1) > Ka;)f--;
                for (; e && z.getDate(b, c - f - ma, 1) < Fa;)e--
            }
            a.extend(X.settings, {
                contSize: la * Q,
                snap: Q,
                minScroll: T - (Xa ? e : f) * Q,
                maxScroll: T + (Xa ? f : e) * Q
            });
            X.refresh()
        }

        function q() {
            nb && ga.html(a(".dw-week-nr-c", va[na]).html());
            a(".dw-cal-slide-a .dw-cal-day", F).attr("tabindex", 0)
        }

        function y(b, c, d, f, h, p, j) {
            b && eb.push({y: b, m: c, dir: d, slideNr: f, load: h, active: p, callback: j});
            if (!Ya) {
                var o = eb.shift(), b = o.y, c = o.m, d = "next" === o.dir, f = o.slideNr, h = o.load, p = o.active, j = o.callback || Bb, o = z.getDate(b, c, 1), b = z.getYear(o),
                    c = z.getMonth(o);
                Ya = !0;
                g.changing = !0;
                g.trigger("onMonthChange", [b, c]);
                i(b, c);
                if (h)for (l = 0; l < la; l++)va[d ? Ea - la + l : l].html(u(b, c - ma + l));
                p && xa.addClass("dw-cal-slide-a");
                setTimeout(function () {
                        g.ariaMessage(z.monthNames[c] + " " + b);
                        A(b, c, 200);
                        T = d ? T - Q * f * fb : T + Q * f * fb;
                        X.scroll(T, fa ? 200 : 0, function () {
                            setTimeout(function () {
                                var i;
                                if (va.length) {
                                    xa.removeClass("dw-cal-slide-a").attr("aria-hidden", "true");
                                    if (d) {
                                        i = va.splice(0, f);
                                        for (l = 0; l < f; l++)va.push(i[l]), m(va[va.length - 1], +va[va.length - 2].data("curr") + 100 * fb)
                                    } else {
                                        i =
                                            va.splice(Ea - f, f);
                                        for (l = f - 1; 0 <= l; l--)va.unshift(i[l]), m(va[0], +va[1].data("curr") - 100 * fb)
                                    }
                                    for (l = 0; l < f; l++)va[d ? Ea - f + l : l].html(u(b, c - ma - na + l + (d ? Ea - f : 0))), h && va[d ? l : Ea - f + l].html(u(b, c - ma - na + l + (d ? 0 : Ea - f)));
                                    for (l = 0; l < la; l++)va[na + l].addClass("dw-cal-slide-a").removeAttr("aria-hidden");
                                    e(b, c, !0);
                                    Ya = !1
                                }
                                eb.length ? setTimeout(function () {
                                    y()
                                }, 10) : (qa = b, ja = c, g.changing = !1, a(".dw-cal-day", F).attr("tabindex", -1), q(), g.needsRefresh ? g.isVisible() && Y && k(qa, ja) : g.trigger("onMonthLoaded", [b, c]), j())
                            }, fa ? 0 : 200)
                        })
                    },
                    10)
            }
        }

        function I() {
            var b = a(this), c = g.live, d = g.getDate(!0), e = b.attr("data-full"), f = e.split("-"), f = new Date(f[0], f[1], f[2]), d = new Date(f.getFullYear(), f.getMonth(), f.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()), h = b.hasClass("dw-sel");
            if ((Wa || !b.hasClass("dw-cal-day-diff")) && !1 !== g.trigger("onDayChange", [a.extend(Ab[e], {
                    date: d,
                    cell: this,
                    selected: h
                })]))g.needsSlide = !1, aa = !0, g.setDate(d, c, 0.2, !c, !0), z.divergentDayChange && (Sa = !0, f < z.getDate(qa, ja - ma, 1) ? K() : f > z.getDate(qa, ja - ma + la, 0) && L(), Sa = !1)
        }

        function m(a, b) {
            a.data("curr", b);
            f ? a[0].style[s + "Transform"] = "translate3d(" + (Pa ? "0," + b + "%," : b + "%,0,") + "0)" : a[0].style[Pa ? "top" : "left"] = b + "%"
        }

        function L() {
            Sa && z.getDate(qa, ja + la - ma, 1) <= Ka && a.mobiscroll.running && y(qa, ++ja, "next", 1, !1, !0, L)
        }

        function K() {
            Sa && z.getDate(qa, ja - ma - 1, 1) >= Fa && a.mobiscroll.running && y(qa, --ja, "prev", 1, !1, !0, K)
        }

        function U(b) {
            Sa && z.getDate(qa, ja, 1) <= z.getDate(z.getYear(Ka) - 1, z.getMonth(Ka) - Ia, 1) && a.mobiscroll.running ? y(++qa, ja, "next", na, !0, !0, function () {
                U(b)
            }) : Sa && !b.hasClass("dwb-d") &&
            a.mobiscroll.running && y(z.getYear(Ka), z.getMonth(Ka) - Ia, "next", na, !0, !0)
        }

        function G(b) {
            Sa && z.getDate(qa, ja, 1) >= z.getDate(z.getYear(Fa) + 1, z.getMonth(Fa) + ma, 1) && a.mobiscroll.running ? y(--qa, ja, "prev", na, !0, !0, function () {
                G(b)
            }) : Sa && !b.hasClass("dwb-d") && a.mobiscroll.running && y(z.getYear(Fa), z.getMonth(Fa) + ma, "prev", na, !0, !0)
        }

        function S(a, b) {
            a.hasClass("dw-cal-v") || (a.addClass("dw-cal-v" + (b ? "" : " dw-cal-p-in")).removeClass("dw-cal-p-out dw-cal-h"), g.trigger("onSelectShow", []))
        }

        function c(a, b) {
            a.hasClass("dw-cal-v") &&
            a.removeClass("dw-cal-v dw-cal-p-in").addClass("dw-cal-h" + (b ? "" : " dw-cal-p-out"))
        }

        function H(a, b) {
            (b || a).hasClass("dw-cal-v") ? c(a) : S(a)
        }

        function x() {
            a(this).removeClass("dw-cal-p-out dw-cal-p-in")
        }

        var J, l, N, M, R, p, V, Z, F, Q, T, aa, Y, E, ea, ga, ha, fa, v, X, da, ka, W, C, ua, pa, ia, Ba, oa, Fa, Ka, gb, wa, ya, qa, ja, hb, ob, Db, Ja, Ra, Va, Ya, Sa, la, Ea, Ia, ma, Wa, Ua, bb, rb, Fb = this, xa = [], va = [], eb = [], ta = {}, Ab = {}, Bb = function () {
            }, Wb = a.extend({}, g.settings), z = a.extend(g.settings, b, Wb), Ta = "full" == z.weekDays ? "" : "min" == z.weekDays ? "Min" : "Short",
            nb = z.weekCounter, Ib = z.layout || (/top|bottom/.test(z.display) ? "liquid" : ""), Ga = "liquid" == Ib && "bubble" !== z.display, yb = "modal" == z.display, Xa = z.rtl, fb = Xa ? -1 : 1, Hb = Ga ? null : z.calendarWidth, Pa = "vertical" == z.swipeDirection, $a = z.quickNav, na = z.preMonths, Da = "yearMonth" == z.navigation, Aa = z.controls.join(","), ab = (!0 === z.tabs || !1 !== z.tabs && Ga) && 1 < z.controls.length, ba = !ab && z.tabs === w && !Ga && 1 < z.controls.length, Ca = z.yearSuffix || "", ra = z.activeClass || "", pb = "dw-sel " + (z.activeTabClass || ""), jb = z.activeTabInnerClass || "", qb =
                "dwb-d " + (z.disabledClass || ""), Oa = "", sa = "";
        Aa.match(/calendar/) ? Y = !0 : $a = !1;
        Aa.match(/date/) && (ta.date = 1);
        Aa.match(/time/) && (ta.time = 1);
        Y && ta.date && (ab = !0, ba = !1);
        z.layout = Ib;
        z.preset = (ta.date || Y ? "date" : "") + (ta.time ? "time" : "");
        if ("inline" == z.display)a(this).closest('[data-role="page"]').on("pageshow", function () {
            g.position()
        });
        g.changing = !1;
        g.needsRefresh = !1;
        g.needsSlide = !0;
        g.getDayProps = Bb;
        g.onGenMonth = Bb;
        g.prepareObj = n;
        g.refresh = function () {
            g.changing ? g.needsRefresh = true : g.isVisible() && Y && k(qa, ja)
        };
        g.navigate = function (a, b) {
            var c, d, e = g.isVisible();
            if (b && e)D(a, true); else {
                c = z.getYear(a);
                d = z.getMonth(a);
                if (e && (c != qa || d != ja)) {
                    g.trigger("onMonthChange", [c, d]);
                    A(c, d);
                    k(c, d)
                }
                qa = c;
                ja = d
            }
        };
        g.showMonthView = function () {
            if ($a && !fa) {
                c(sa, true);
                c(Oa, true);
                S(ha, true);
                fa = true
            }
        };
        g.changeTab = function (b) {
            if (g._isVisible && ta[b] && Va != b) {
                Va = b;
                a(".dw-cal-pnl", p).removeClass("dw-cal-p-in").addClass("dw-cal-pnl-h");
                a(".dw-cal-tab", p).removeClass(pb).removeAttr("aria-selected").find(".dw-i").removeClass(jb);
                a('.dw-cal-tab[data-control="' +
                    b + '"]', p).addClass(pb).attr("aria-selected", "true").find(".dw-i").addClass(jb);
                ta[Va].removeClass("dw-cal-pnl-h").addClass("dw-cal-p-in");
                if (Va === "calendar") {
                    J = g.getDate(true);
                    (J.getFullYear() !== ya.getFullYear() || J.getMonth() !== ya.getMonth() || J.getDate() !== ya.getDate()) && D(J)
                } else {
                    ya = g.getDate(true);
                    g.setDate(ya, false, 0, true)
                }
                g.showMonthView();
                g.trigger("onTabChange", [Va])
            }
        };
        M = j.datetime.call(this, g);
        W = z.dateOrder.search(/m/i);
        ua = z.dateOrder.search(/y/i);
        a.extend(M, {
            ariaMessage: z.calendarText, onMarkupReady: function (b) {
                var e,
                    i, j = "";
                p = b;
                V = z.display == "inline" ? a(this).is("div") ? a(this) : a(this).parent() : g.context;
                ya = g.getDate(true);
                if (!qa) {
                    qa = z.getYear(ya);
                    ja = z.getMonth(ya)
                }
                T = 0;
                ea = true;
                Ya = false;
                v = z.monthNames;
                Va = "calendar";
                if (z.minDate) {
                    Fa = new Date(z.minDate.getFullYear(), z.minDate.getMonth(), 1);
                    gb = z.minDate
                } else gb = Fa = new Date(z.startYear, 0, 1);
                if (z.maxDate) {
                    Ka = new Date(z.maxDate.getFullYear(), z.maxDate.getMonth(), 1);
                    wa = z.maxDate
                } else wa = Ka = new Date(z.endYear, 11, 31, 23, 59, 59);
                b.addClass("dw-calendar" + (f ? "" : " dw-cal-no3d"));
                R = a(".dw", b);
                Ra = a(".dwcc", b);
                ta.date ? ta.date = a(".dwc", p).eq(0) : Y && a(".dwc", p).eq(0).addClass("dwc-hh");
                if (ta.time)ta.time = a(".dwc", p).eq(1);
                if (Y) {
                    la = z.months == "auto" ? Math.max(1, Math.min(3, Math.floor((Hb || V[0].innerWidth || V.innerWidth()) / 280))) : z.months;
                    Ea = la + 2 * na;
                    Ia = Math.floor(la / 2);
                    ma = Math.round(la / 2) - 1;
                    Wa = z.showDivergentDays === w ? la < 2 : z.showDivergentDays;
                    Pa = Pa && la < 2;
                    i = '<div class="dw-cal-btnw"><div class="' + (Xa ? "dw-cal-next-m" : "dw-cal-prev-m") + ' dw-cal-prev dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' +
                        (z.btnCalPrevClass || "") + '" aria-label="' + z.prevMonthText + '"></div></div>';
                    for (l = 0; l < la; ++l)i = i + ('<div class="dw-cal-btnw-m" style="width: ' + 100 / la + '%"><span role="button" class="dw-cal-month"></span></div>');
                    i = i + ('<div class="' + (Xa ? "dw-cal-prev-m" : "dw-cal-next-m") + ' dw-cal-next dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' + (z.btnCalNextClass || "") + '" aria-label="' + z.nextMonthText + '"></div></div></div>');
                    Da && (j = '<div class="dw-cal-btnw"><div class="' + (Xa ? "dw-cal-next-y" :
                            "dw-cal-prev-y") + ' dw-cal-prev dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' + (z.btnCalPrevClass || "") + '" aria-label="' + z.prevYearText + '"></div></div><span role="button" class="dw-cal-year"></span><div class="' + (Xa ? "dw-cal-prev-y" : "dw-cal-next-y") + ' dw-cal-next dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' + (z.btnCalNextClass || "") + '" aria-label="' + z.nextYearText + '"></div></div></div>');
                    if ($a) {
                        pa = z.getYear(Fa);
                        ia = z.getYear(Ka);
                        Ba = z.getMonth(Fa);
                        oa = z.getMonth(Ka);
                        ob = Math.ceil((ia - pa + 1) / 12) + 2;
                        Oa = O("month", 36, 24, 0, "", z.monthNames, z.monthNamesShort);
                        sa = O("year", ob * 12, ia - pa + 13, pa, Ca)
                    }
                    E = '<div class="mbsc-w-p dw-cal-c"><div class="dw-cal ' + (la > 1 ? " dw-cal-multi " : "") + (nb ? " dw-weeks " : "") + (Pa ? " mbsc-cal-vertical" : "") + (Wa ? "" : " dw-hide-diff ") + (z.highlightNow ? " dw-hl-now " : "") + (z.calendarClass || "") + '"><div class="dw-cal-header"><div class="dw-cal-btnc ' + (Da ? "dw-cal-btnc-ym" : "dw-cal-btnc-m") + '">' + (ua < W || la > 1 ? j + i : i + j) + '</div></div><div class="dw-cal-body"><div class="dw-cal-m-c dw-cal-v"><div class="dw-cal-days-c">';
                    for (N = 0; N < la; ++N) {
                        E = E + ('<div aria-hidden="true" class="dw-cal-days" style="width: ' + 100 / la + '%"><table cellpadding="0" cellspacing="0"><tr>');
                        for (l = 0; l < 7; l++)E = E + ("<th>" + z["dayNames" + Ta][(l + z.firstDay) % 7] + "</th>");
                        E = E + "</tr></table></div>"
                    }
                    E = E + ('</div><div class="dw-cal-anim-c ' + (z.calendarClass || "") + '"><div class="dw-week-nrs-c ' + (z.weekNrClass || "") + '"><div class="dw-week-nrs"></div></div><div class="dw-cal-anim">');
                    for (l = 0; l < la + 2 * na; l++)E = E + '<div class="dw-cal-slide" aria-hidden="true"></div>';
                    E =
                        E + ("</div></div></div>" + Oa + sa + "</div></div></div>");
                    ta.calendar = a(E)
                }
                a.each(z.controls, function (b, c) {
                    ta[c] = a('<div class="dw-cal-pnl" id="' + (Fb.id + "_dw_pnl_" + b) + '"></div>').append(a('<div class="dw-cal-pnl-i"></div>').append(ta[c])).appendTo(Ra)
                });
                e = '<div class="dw-cal-tabs"><ul role="tablist">';
                a.each(z.controls, function (a, b) {
                    ta[b] && (e = e + ('<li role="tab" aria-controls="' + (Fb.id + "_dw_pnl_" + a) + '" class="dw-cal-tab ' + (a ? "" : pb) + '" data-control="' + b + '"><a href="#" class="dwb-e dwb-nhl dw-i ' + (!a ? jb : "") +
                        '">' + z[b + "Text"] + "</a></li>"))
                });
                e = e + "</ul></div>";
                Ra.before(e);
                Z = a(".dw-cal-anim-c", p);
                F = a(".dw-cal-anim", Z);
                ga = a(".dw-week-nrs", Z);
                if (Y) {
                    fa = true;
                    xa = a(".dw-cal-slide", F).each(function (b, c) {
                        va.push(a(c))
                    });
                    xa.slice(na, na + la).addClass("dw-cal-slide-a").removeAttr("aria-hidden");
                    for (l = 0; l < Ea; l++)m(va[l], 100 * (l - na) * fb);
                    k(qa, ja);
                    X = new h.classes.ScrollView(Z[0], {
                        axis: Pa ? "Y" : "X",
                        easing: "",
                        contSize: 0,
                        snap: 1,
                        maxSnapScroll: na,
                        moveElement: F,
                        mousewheel: z.mousewheel,
                        swipe: z.swipe,
                        liveSwipe: z.liveSwipe,
                        time: 200,
                        lock: true,
                        onScrollStart: function (a, b) {
                            b.settings.scrollLock = g.scrollLock
                        },
                        onScrollEnd: function (a) {
                            (a = Math.round((a - T) / Q) * fb) && y(qa, ja - a, a > 0 ? "prev" : "next", a > 0 ? a : -a)
                        }
                    })
                }
                ka = a(".dw-cal-month", p);
                C = a(".dw-cal-year", p);
                ha = a(".dw-cal-m-c", p);
                if ($a) {
                    ha.on("webkitAnimationEnd animationend", x);
                    Oa = a(".dw-cal-month-c", p).on("webkitAnimationEnd animationend", x);
                    sa = a(".dw-cal-year-c", p).on("webkitAnimationEnd animationend", x);
                    a(".dw-cal-sc-p", p);
                    hb = {
                        axis: Pa ? "Y" : "X",
                        contSize: 0,
                        snap: 1,
                        maxSnapScroll: 1,
                        rtl: z.rtl,
                        mousewheel: z.mousewheel,
                        swipe: z.swipe,
                        liveSwipe: z.liveSwipe,
                        time: 200
                    };
                    Ua = new h.classes.ScrollView(sa[0], hb);
                    da = new h.classes.ScrollView(Oa[0], hb)
                }
                Ga ? b.addClass("dw-cal-liq") : a(".dw-cal", p).width(Hb || 280 * la);
                z.calendarHeight && a(".dw-cal-anim-c", p).height(z.calendarHeight);
                g.tap(Z, function (b) {
                    b = a(b.target);
                    if (!Ya && !X.scrolled) {
                        b = b.closest(".dw-cal-day", this);
                        b.hasClass("dw-cal-day-v") && I.call(b[0])
                    }
                });
                a(".dw-cal-btn", p).on("touchstart mousedown keydown", function (b) {
                    var c = a(this);
                    if (b.type !== "keydown") {
                        b.preventDefault();
                        b =
                            r(b, this)
                    } else b = b.keyCode === 32;
                    if (!Sa && b && !c.hasClass("dwb-d")) {
                        Sa = true;
                        c.hasClass("dw-cal-prev-m") ? K() : c.hasClass("dw-cal-next-m") ? L() : c.hasClass("dw-cal-prev-y") ? G(c) : c.hasClass("dw-cal-next-y") && U(c);
                        a(t).on("mouseup.dwbtn", function () {
                            a(t).off(".dwbtn");
                            Sa = false
                        })
                    }
                }).on("touchend touchcancel keyup", function () {
                    Sa = false
                });
                a(".dw-cal-tab", p).on("touchstart click", function (b) {
                    r(b, this) && a.mobiscroll.running && g.changeTab(a(this).attr("data-control"))
                });
                if ($a) {
                    g.tap(a(".dw-cal-month", p), function () {
                        if (!sa.hasClass("dw-cal-v")) {
                            H(ha);
                            fa = ha.hasClass("dw-cal-v")
                        }
                        H(Oa);
                        c(sa)
                    });
                    g.tap(a(".dw-cal-year", p), function () {
                        sa.hasClass("dw-cal-v") || Ua.scroll(bb);
                        if (!Oa.hasClass("dw-cal-v")) {
                            H(ha);
                            fa = ha.hasClass("dw-cal-v")
                        }
                        H(sa);
                        c(Oa)
                    });
                    g.tap(a(".dw-cal-month-s", p), function () {
                        !da.scrolled && !a(this).hasClass("dwb-d") && g.navigate(z.getDate(qa, a(this).attr("data-val"), 1))
                    });
                    g.tap(a(".dw-cal-year-s", p), function () {
                        if (!Ua.scrolled) {
                            J = z.getDate(a(this).attr("data-val"), ja, 1);
                            g.navigate(new Date(d.constrain(J, Fa, Ka)))
                        }
                    });
                    g.tap(sa, function () {
                        if (!Ua.scrolled) {
                            c(sa);
                            S(ha);
                            fa = true
                        }
                    });
                    g.tap(Oa, function () {
                        if (!da.scrolled) {
                            c(Oa);
                            S(ha);
                            fa = true
                        }
                    })
                }
            }, onShow: function () {
                Y && A(qa, ja)
            }, onPosition: function (b, c, d) {
                var f, h, i, j = 0, k = 0, o = 0;
                if (Ga) {
                    yb && Z.height("");
                    Ra.height("");
                    F.width("")
                }
                Q && (i = Q);
                if (Q = Math.round(Math.round(parseInt(Z.css(Pa ? "height" : "width"))) / la)) {
                    p.removeClass("mbsc-cal-m mbsc-cal-l");
                    Q > 1024 ? p.addClass("mbsc-cal-l") : Q > 640 && p.addClass("mbsc-cal-m")
                }
                if (ab && (ea || Ga) || ba) {
                    a(".dw-cal-pnl", p).removeClass("dw-cal-pnl-h");
                    a.each(ta, function (a, b) {
                        f = b.width();
                        j =
                            Math.max(j, f);
                        k = Math.max(k, b.height());
                        o = o + f
                    });
                    if (ab || ba && o > (V[0].innerWidth || V.innerWidth())) {
                        h = true;
                        Va = a(".dw-cal-tabs .dw-sel", p).attr("data-control");
                        R.addClass("dw-cal-tabbed")
                    } else {
                        Va = "calendar";
                        k = j = "";
                        R.removeClass("dw-cal-tabbed");
                        Ra.css({width: "", height: ""})
                    }
                }
                if (Ga && yb) {
                    g._isFullScreen = true;
                    h && Y && Ra.height(ta.calendar.height());
                    b = R.height();
                    d >= b && Z.height(d - b + Z.height());
                    Y && (k = Math.max(k, ta.calendar.height()))
                }
                if (h) {
                    Ra.css({width: Ga ? "" : j, height: k});
                    Q = Math.round(Math.round(parseInt(Z.css(Pa ?
                            "height" : "width"))) / la)
                }
                if (Q) {
                    F[Pa ? "height" : "width"](Q);
                    if (Q !== i) {
                        if (Da) {
                            v = z.maxMonthWidth > a(".dw-cal-btnw-m", p).width() ? z.monthNamesShort : z.monthNames;
                            for (l = 0; l < la; ++l)a(ka[l]).text(v[z.getMonth(z.getDate(qa, ja - ma + l, 1))])
                        }
                        if ($a) {
                            d = sa[Pa ? "height" : "width"]();
                            a.extend(Ua.settings, {contSize: d, snap: d, minScroll: (2 - ob) * d, maxScroll: -d});
                            a.extend(da.settings, {contSize: d, snap: d, minScroll: -d, maxScroll: -d});
                            Ua.refresh();
                            da.refresh();
                            sa.hasClass("dw-cal-v") && Ua.scroll(bb)
                        }
                        if (Ga && !ea && i) {
                            d = T / i;
                            T = d * Q
                        }
                        e(qa, ja, !i)
                    }
                } else Q =
                    i;
                if (h) {
                    a(".dw-cal-pnl", p).addClass("dw-cal-pnl-h");
                    ta[Va].removeClass("dw-cal-pnl-h")
                }
                g.trigger("onCalResize", []);
                ea = false
            }, onHide: function () {
                eb = [];
                va = [];
                ja = qa = Va = null;
                Ya = true;
                Q = 0;
                X && X.destroy();
                if ($a && Ua && da) {
                    Ua.destroy();
                    da.destroy()
                }
            }, onValidated: function (a) {
                var b, c, d;
                c = g.getDate(true);
                if (aa)b = "calendar"; else for (d in g.order)d && g.order[d] === a && (b = /[mdy]/.test(d) ? "date" : "time");
                g.trigger("onSetDate", [{date: c, control: b}]);
                D(c);
                aa = false
            }
        });
        return M
    }
})($, window, document);
(function (a, n) {
    var t = a.mobiscroll, w = t.datetime, h = new Date, j = {
        startYear: h.getFullYear() - 100,
        endYear: h.getFullYear() + 1,
        separator: " ",
        dateFormat: "mm/dd/yy",
        dateOrder: "mmddy",
        timeWheels: "hhiiA",
        timeFormat: "hh:ii A",
        dayText: "Day",
        monthText: "Month",
        yearText: "Year",
        hourText: "Hours",
        minuteText: "Minutes",
        ampmText: "&nbsp;",
        secText: "Seconds",
        nowText: "Now"
    }, d = function (d) {
        function h(a, b, c) {
            return M[b] !== n ? +a[M[b]] : R[b] !== n ? R[b] : c !== n ? c : p[b](ea)
        }

        function r(a, b, c, d) {
            a.push({values: c, keys: b, label: d})
        }

        function b(a,
                   b, c, d) {
            return Math.min(d, Math.floor(a / b) * b + c)
        }

        function g(a) {
            if (null === a)return a;
            var b = h(a, "y"), c = h(a, "m"), d = Math.min(h(a, "d", 1), x.getMaxDayOfMonth(b, c)), e = h(a, "h", 0);
            return x.getDate(b, c, d, h(a, "a", 0) ? e + 12 : e, h(a, "i", 0), h(a, "s", 0), h(a, "u", 0))
        }

        function P(a, b) {
            var c, d, e = !1, f = !1, h = 0, l = 0;
            v = g(B(v));
            X = g(B(X));
            if (i(a))return a;
            a < v && (a = v);
            a > X && (a = X);
            d = c = a;
            if (2 !== b)for (e = i(c); !e && c < X;)c = new Date(c.getTime() + 864E5), e = i(c), h++;
            if (1 !== b)for (f = i(d); !f && d > v;)d = new Date(d.getTime() - 864E5), f = i(d), l++;
            return 1 === b &&
            e ? c : 2 === b && f ? d : l <= h && f ? d : c
        }

        function i(a) {
            return a < v || a > X ? !1 : O(a, Z) ? !0 : O(a, V) ? !1 : !0
        }

        function O(a, b) {
            var c, d, e;
            if (b)for (d = 0; d < b.length; d++)if (c = b[d], e = c + "", !c.start)if (c.getTime) {
                if (a.getFullYear() == c.getFullYear() && a.getMonth() == c.getMonth() && a.getDate() == c.getDate())return !0
            } else if (e.match(/w/i)) {
                if (e = +e.replace("w", ""), e == a.getDay())return !0
            } else if (e = e.split("/"), e[1]) {
                if (e[0] - 1 == a.getMonth() && e[1] == a.getDate())return !0
            } else if (e[0] == a.getDate())return !0;
            return !1
        }

        function u(a, b, c, d, e, f, g) {
            var h,
                i, l;
            if (a)for (h = 0; h < a.length; h++)if (i = a[h], l = i + "", !i.start)if (i.getTime)x.getYear(i) == b && x.getMonth(i) == c && (f[x.getDay(i) - 1] = g); else if (l.match(/w/i)) {
                l = +l.replace("w", "");
                for (m = l - d; m < e; m += 7)0 <= m && (f[m] = g)
            } else l = l.split("/"), l[1] ? l[0] - 1 == c && (f[l[1] - 1] = g) : f[l[0] - 1] = g
        }

        function A(d, e, f, g, h, i, k, j, p) {
            var F, m, s, q, v, E, C, r, R, u, N, M, A, w, O, y, t, B, Q = {}, J = {
                h: ga,
                i: ha,
                s: fa,
                a: 1
            }, W = x.getDate(h, i, k), P = ["a", "h", "i", "s"];
            d && (a.each(d, function (a, b) {
                if (b.start && (b.apply = !1, F = b.d, m = F + "", s = m.split("/"), F && (F.getTime && h ==
                    x.getYear(F) && i == x.getMonth(F) && k == x.getDay(F) || !m.match(/w/i) && (s[1] && k == s[1] && i == s[0] - 1 || !s[1] && k == s[0]) || m.match(/w/i) && W.getDay() == +m.replace("w", ""))))b.apply = !0, Q[W] = !0
            }), a.each(d, function (d, g) {
                N = w = A = 0;
                M = n;
                C = E = !0;
                O = !1;
                if (g.start && (g.apply || !g.d && !Q[W])) {
                    q = g.start.split(":");
                    v = g.end.split(":");
                    for (u = 0; 3 > u; u++)q[u] === n && (q[u] = 0), v[u] === n && (v[u] = 59), q[u] = +q[u], v[u] = +v[u];
                    q.unshift(11 < q[0] ? 1 : 0);
                    v.unshift(11 < v[0] ? 1 : 0);
                    Y && (12 <= q[1] && (q[1] -= 12), 12 <= v[1] && (v[1] -= 12));
                    for (u = 0; u < e; u++)if (l[u] !== n) {
                        r =
                            b(q[u], J[P[u]], c[P[u]], H[P[u]]);
                        R = b(v[u], J[P[u]], c[P[u]], H[P[u]]);
                        B = t = y = 0;
                        Y && 1 == u && (y = q[0] ? 12 : 0, t = v[0] ? 12 : 0, B = l[0] ? 12 : 0);
                        E || (r = 0);
                        C || (R = H[P[u]]);
                        if ((E || C) && r + y < l[u] + B && l[u] + B < R + t)O = !0;
                        l[u] != r && (E = !1);
                        l[u] != R && (C = !1)
                    }
                    if (!p)for (u = e + 1; 4 > u; u++)0 < q[u] && (A = J[f]), v[u] < H[P[u]] && (w = J[f]);
                    O || (r = b(q[e], J[f], c[f], H[f]) + A, R = b(v[e], J[f], c[f], H[f]) - w, E && (N = 0 > r ? 0 : r > H[f] ? a(".dw-li", j).length : o(j, r) + 0), C && (M = 0 > R ? 0 : R > H[f] ? a(".dw-li", j).length : o(j, R) + 1));
                    if (E || C || O)p ? a(".dw-li", j).slice(N, M).addClass("dw-v") : a(".dw-li",
                        j).slice(N, M).removeClass("dw-v")
                }
            }))
        }

        function o(b, c) {
            return a(".dw-li", b).index(a('.dw-li[data-val="' + c + '"]', b))
        }

        function B(b, c) {
            var d = [];
            if (null === b || b === n)return b;
            a.each("y,m,d,a,h,i,s,u".split(","), function (a, e) {
                M[e] !== n && (d[M[e]] = p[e](b));
                c && (R[e] = p[e](b))
            });
            return d
        }

        function D(a) {
            var b, c, d, e = [];
            if (a) {
                for (b = 0; b < a.length; b++)if (c = a[b], c.start && c.start.getTime)for (d = new Date(c.start); d <= c.end;)e.push(new Date(d.getFullYear(), d.getMonth(), d.getDate())), d.setDate(d.getDate() + 1); else e.push(c);
                return e
            }
            return a
        }

        var k = a(this), e = {}, q;
        if (k.is("input")) {
            switch (k.attr("type")) {
                case "date":
                    q = "yy-mm-dd";
                    break;
                case "datetime":
                    q = "yy-mm-ddTHH:ii:ssZ";
                    break;
                case "datetime-local":
                    q = "yy-mm-ddTHH:ii:ss";
                    break;
                case "month":
                    q = "yy-mm";
                    e.dateOrder = "mmyy";
                    break;
                case "time":
                    q = "HH:ii:ss"
            }
            var y = k.attr("min"), k = k.attr("max");
            y && (e.minDate = w.parseDate(q, y));
            k && (e.maxDate = w.parseDate(q, k))
        }
        var I, m, L, K, U, G, S, c, H, y = a.extend({}, d.settings), x = a.extend(d.settings, t.datetime.defaults, j, e, y), J = 0, l = [], e = [], N = [], M = {}, R = {}, p = {
            y: function (a) {
                return x.getYear(a)
            },
            m: function (a) {
                return x.getMonth(a)
            }, d: function (a) {
                return x.getDay(a)
            }, h: function (a) {
                a = a.getHours();
                a = Y && 12 <= a ? a - 12 : a;
                return b(a, ga, da, C)
            }, i: function (a) {
                return b(a.getMinutes(), ha, ka, ua)
            }, s: function (a) {
                return b(a.getSeconds(), fa, W, pa)
            }, u: function (a) {
                return a.getMilliseconds()
            }, a: function (a) {
                return aa && 11 < a.getHours() ? 1 : 0
            }
        }, V = x.invalid, Z = x.valid, y = x.preset, F = x.dateOrder, Q = x.timeWheels, T = F.match(/D/), aa = Q.match(/a/i), Y = Q.match(/h/), E = "datetime" == y ? x.dateFormat + x.separator + x.timeFormat : "time" == y ? x.timeFormat :
            x.dateFormat, ea = new Date, k = x.steps || {}, ga = k.hour || x.stepHour || 1, ha = k.minute || x.stepMinute || 1, fa = k.second || x.stepSecond || 1, k = k.zeroBased, v = x.minDate || new Date(x.startYear, 0, 1), X = x.maxDate || new Date(x.endYear, 11, 31, 23, 59, 59), da = k ? 0 : v.getHours() % ga, ka = k ? 0 : v.getMinutes() % ha, W = k ? 0 : v.getSeconds() % fa, C = Math.floor(((Y ? 11 : 23) - da) / ga) * ga + da, ua = Math.floor((59 - ka) / ha) * ha + ka, pa = Math.floor((59 - ka) / ha) * ha + ka;
        q = q || E;
        if (y.match(/date/i)) {
            a.each(["y", "m", "d"], function (a, b) {
                I = F.search(RegExp(b, "i"));
                -1 < I && N.push({
                    o: I,
                    v: b
                })
            });
            N.sort(function (a, b) {
                return a.o > b.o ? 1 : -1
            });
            a.each(N, function (a, b) {
                M[b.v] = a
            });
            k = [];
            for (m = 0; 3 > m; m++)if (m == M.y) {
                J++;
                K = [];
                L = [];
                U = x.getYear(v);
                G = x.getYear(X);
                for (I = U; I <= G; I++)L.push(I), K.push((F.match(/yy/i) ? I : (I + "").substr(2, 2)) + (x.yearSuffix || ""));
                r(k, L, K, x.yearText)
            } else if (m == M.m) {
                J++;
                K = [];
                L = [];
                for (I = 0; 12 > I; I++)U = F.replace(/[dy]/gi, "").replace(/mm/, (9 > I ? "0" + (I + 1) : I + 1) + (x.monthSuffix || "")).replace(/m/, I + 1 + (x.monthSuffix || "")), L.push(I), K.push(U.match(/MM/) ? U.replace(/MM/, '<span class="dw-mon">' +
                    x.monthNames[I] + "</span>") : U.replace(/M/, '<span class="dw-mon">' + x.monthNamesShort[I] + "</span>"));
                r(k, L, K, x.monthText)
            } else if (m == M.d) {
                J++;
                K = [];
                L = [];
                for (I = 1; 32 > I; I++)L.push(I), K.push((F.match(/dd/i) && 10 > I ? "0" + I : I) + (x.daySuffix || ""));
                r(k, L, K, x.dayText)
            }
            e.push(k)
        }
        if (y.match(/time/i)) {
            S = !0;
            N = [];
            a.each(["h", "i", "s", "a"], function (a, b) {
                a = Q.search(RegExp(b, "i"));
                -1 < a && N.push({o: a, v: b})
            });
            N.sort(function (a, b) {
                return a.o > b.o ? 1 : -1
            });
            a.each(N, function (a, b) {
                M[b.v] = J + a
            });
            k = [];
            for (m = J; m < J + 4; m++)if (m == M.h) {
                J++;
                K = [];
                L = [];
                for (I = da; I < (Y ? 12 : 24); I += ga)L.push(I), K.push(Y && 0 === I ? 12 : Q.match(/hh/i) && 10 > I ? "0" + I : I);
                r(k, L, K, x.hourText)
            } else if (m == M.i) {
                J++;
                K = [];
                L = [];
                for (I = ka; 60 > I; I += ha)L.push(I), K.push(Q.match(/ii/) && 10 > I ? "0" + I : I);
                r(k, L, K, x.minuteText)
            } else if (m == M.s) {
                J++;
                K = [];
                L = [];
                for (I = W; 60 > I; I += fa)L.push(I), K.push(Q.match(/ss/) && 10 > I ? "0" + I : I);
                r(k, L, K, x.secText)
            } else m == M.a && (J++, y = Q.match(/A/), r(k, [0, 1], y ? [x.amText.toUpperCase(), x.pmText.toUpperCase()] : [x.amText, x.pmText], x.ampmText));
            e.push(k)
        }
        d.getVal = function (a) {
            return d._hasValue ||
            a ? g(d.getArrayVal(a)) : null
        };
        d.setDate = function (a, b, c, e, g) {
            d.setArrayVal(B(a), b, g, e, c)
        };
        d.getDate = d.getVal;
        d.format = E;
        d.order = M;
        d.handlers.now = function () {
            d.setDate(new Date, !1, 0.3, !0, !0)
        };
        d.buttons.now = {text: x.nowText, handler: "now"};
        V = D(V);
        Z = D(Z);
        c = {y: v.getFullYear(), m: 0, d: 1, h: da, i: ka, s: W, a: 0};
        H = {y: X.getFullYear(), m: 11, d: 31, h: C, i: ua, s: pa, a: 1};
        return {
            wheels: e, headerText: x.headerText ? function () {
                return w.formatDate(E, g(d.getArrayVal(!0)), x)
            } : !1, formatValue: function (a) {
                return w.formatDate(q, g(a), x)
            }, parseValue: function (a) {
                a ||
                (R = {});
                return B(a ? w.parseDate(q, a, x) : x.defaultValue || new Date, !!a && !!a.getTime)
            }, validate: function (b, e, i, j) {
                var e = P(g(d.getArrayVal(!0)), j), k = B(e), m = h(k, "y"), q = h(k, "m"), Y = !0, E = !0;
                a.each("y,m,d,a,h,i,s".split(","), function (d, e) {
                    if (M[e] !== n) {
                        var f = c[e], g = H[e], i = 31, l = h(k, e), j = a(".dw-ul", b).eq(M[e]);
                        if (e == "d") {
                            g = i = x.getMaxDayOfMonth(m, q);
                            T && a(".dw-li", j).each(function () {
                                var b = a(this), c = b.data("val"), d = x.getDate(m, q, c).getDay(), c = F.replace(/[my]/gi, "").replace(/dd/, (c < 10 ? "0" + c : c) + (x.daySuffix || "")).replace(/d/,
                                    c + (x.daySuffix || ""));
                                a(".dw-i", b).html(c.match(/DD/) ? c.replace(/DD/, '<span class="dw-day">' + x.dayNames[d] + "</span>") : c.replace(/D/, '<span class="dw-day">' + x.dayNamesShort[d] + "</span>"))
                            })
                        }
                        Y && v && (f = p[e](v));
                        E && X && (g = p[e](X));
                        if (e != "y") {
                            var C = o(j, f), r = o(j, g);
                            a(".dw-li", j).removeClass("dw-v").slice(C, r + 1).addClass("dw-v");
                            e == "d" && a(".dw-li", j).removeClass("dw-h").slice(i).addClass("dw-h")
                        }
                        l < f && (l = f);
                        l > g && (l = g);
                        Y && (Y = l == f);
                        E && (E = l == g);
                        if (e == "d") {
                            f = x.getDate(m, q, 1).getDay();
                            g = {};
                            u(V, m, q, f, i, g, 1);
                            u(Z, m,
                                q, f, i, g, 0);
                            a.each(g, function (b, c) {
                                c && a(".dw-li", j).eq(b).removeClass("dw-v")
                            })
                        }
                    }
                });
                S && a.each(["a", "h", "i", "s"], function (c, e) {
                    var g = h(k, e), i = h(k, "d"), p = a(".dw-ul", b).eq(M[e]);
                    M[e] !== n && (A(V, c, e, k, m, q, i, p, 0), A(Z, c, e, k, m, q, i, p, 1), l[c] = +d.getValidCell(g, p, j).val)
                });
                d._tempWheelArray = k
            }
        }
    };
    a.each(["date", "time", "datetime"], function (a, h) {
        t.presets.scroller[h] = d
    })
})($);
(function (a, n) {
    var t = a.mobiscroll, w = t.presets.scroller, h = t.datetime, j = t.util.testTouch, d = {
        autoCorrect: !0,
        showSelector: !0,
        minRange: 1,
        fromText: "Start",
        toText: "End"
    };
    t.presetShort("rangepicker");
    t.presetShort("range");
    w.range = w.rangepicker = function (f) {
        function s(a, b) {
            a && (a.setFullYear(b.getFullYear()), a.setMonth(b.getMonth()), a.setDate(b.getDate()))
        }

        function r(b, d) {
            var f = !0;
            if (b && e && q && (q - e > c.maxRange - 1 && (f = !1, G ? e = new Date(q - c.maxRange + 1) : q = new Date(+e + c.maxRange - 1)), q - e < c.minRange - 1))f = !1, G ? e = new Date(q -
                c.minRange + 1) : q = new Date(+e + c.minRange - 1);
            if (!e || !q)f = !1;
            if (d) {
                var g, l, j, o, m, n = 0, s = x || !G ? " dw-cal-day-hl dw-cal-sel-start" : " dw-cal-sel-start", r = x || G ? " dw-cal-day-hl dw-cal-sel-end" : " dw-cal-sel-end";
                D = e ? h.formatDate(u, e, c) : "";
                k = q ? h.formatDate(u, q, c) : "";
                if (i && (a(".dw-drv0", i).html(D || "&nbsp;"), a(".dw-drv1", i).html(k || "&nbsp;"), g = e ? new Date(e) : null, j = q ? new Date(q) : null, !g && j && (g = new Date(j)), !j && g && (j = new Date(g)), m = G ? j : g, a(".dw-cal-table .dw-sel .dw-i", i).removeClass(J), a(".dw-cal-table .dw-cal-day-hl",
                        i).removeClass(N), a(".dw-cal-table .dw-sel", i).removeClass("dw-sel dw-cal-sel-start dw-cal-sel-end").removeAttr("aria-selected"), g && j)) {
                    l = g.setHours(0, 0, 0, 0);
                    for (o = j.setHours(0, 0, 0, 0); j >= g && 84 > n;)a('.dw-cal-day[data-full="' + m.getFullYear() + "-" + m.getMonth() + "-" + m.getDate() + '"]', i).addClass("dw-sel" + (m.getTime() === l ? s : "") + (m.getTime() === o ? r : "")).attr("aria-selected", "true").find(".dw-i ").addClass(J), m.setDate(m.getDate() + (G ? -1 : 1)), n++
                }
            }
            return f
        }

        function b(a) {
            a.addClass("dw-sel").attr("aria-checked",
                "true").find(".dw-dr").addClass(J)
        }

        function g() {
            L && (a(".dw-dr-c", i).removeClass("dw-sel").removeAttr("aria-checked").find(".dw-dr", i).removeClass(J), x ? (e && b(a(".dw-dr-c", i).eq(0)), q && b(a(".dw-dr-c", i).eq(1))) : b(a(".dw-dr-c", i).eq(G)))
        }

        var t, i, O, u, A, o, B, D, k, e, q, y, I, m, L, K = f._startDate, U = f._endDate, G = 0;
        A = new Date;
        var S = a.extend({}, f.settings), c = a.extend(f.settings, d, S), H = c.anchor, x = c.rangeTap, J = c.activeClass || "", l = "dwb-d " + (c.disabledClass || ""), N = "dw-cal-day-hl", M = null === c.defaultValue ? [] : c.defaultValue ||
        [new Date(A.setHours(0, 0, 0, 0)), new Date(A.getFullYear(), A.getMonth(), A.getDate() + 6, 23, 59, 59, 999)];
        x && (c.tabs = !0);
        A = w.calbase.call(this, f);
        t = a.extend({}, A);
        u = f.format;
        y = "time" === c.controls.join("");
        L = 1 == c.controls.length && "calendar" == c.controls[0] ? c.showSelector : !0;
        c.startInput && (I = a(c.startInput).prop("readonly"), f.attachShow(a(c.startInput).prop("readonly", !0), function () {
            G = 0;
            c.anchor = H || a(c.startInput)
        }));
        c.endInput && (m = a(c.endInput).prop("readonly"), f.attachShow(a(c.endInput).prop("readonly", !0),
            function () {
                G = 1;
                c.anchor = H || a(c.endInput)
            }));
        f.setVal = function (a, b, d, g, i) {
            var l = a || [];
            if (l[0] === n || l[0] === null || l[0].getTime) {
                B = true;
                D = (e = l[0] || null) ? h.formatDate(u, e, c) : "";
                G || (a = t.parseValue(D, f))
            }
            if (l[1] === n || l[1] === null || l[1].getTime) {
                B = true;
                k = (q = l[1] || null) ? h.formatDate(u, q, c) : "";
                G && (a = t.parseValue(k, f))
            }
            if (!g) {
                f._startDate = K = e;
                f._endDate = U = q
            }
            f._setVal(a, b, d, g, i)
        };
        f.getVal = function (a) {
            return a ? [e, q] : f._hasValue ? [K, U] : null
        };
        f.getDayProps = function (a) {
            var b = e ? new Date(e.getFullYear(), e.getMonth(),
                e.getDate()) : null, c = q ? new Date(q.getFullYear(), q.getMonth(), q.getDate()) : null;
            return {
                selected: b && c && a >= b && a <= q,
                cssClass: ((x || !G) && b && b.getTime() === a.getTime() || (x || G) && c && c.getTime() === a.getTime() ? N : "") + (b && b.getTime() === a.getTime() ? " dw-cal-sel-start" : "") + (c && c.getTime() === a.getTime() ? " dw-cal-sel-end" : "")
            }
        };
        f.setActiveDate = function (b) {
            b = (G = b == "start" ? 0 : 1) ? q : e;
            if (f.isVisible()) {
                if (!x) {
                    g();
                    a(".dw-cal-table .dw-cal-day-hl", i).removeClass(N);
                    b && a('.dw-cal-day[data-full="' + b.getFullYear() + "-" + b.getMonth() +
                        "-" + b.getDate() + '"]', i).addClass(N)
                }
                if (b) {
                    o = true;
                    f.setDate(b, false, 0.2, true)
                }
            }
        };
        f.setValue = function (a, b, c, d, e) {
            f.setVal(a, b, e, d, c)
        };
        f.getValue = f.getVal;
        a.extend(A, {
            highlight: !1, divergentDayChange: !1, formatValue: function () {
                return D + (c.endInput ? "" : k ? " - " + k : "")
            }, parseValue: function (b) {
                b = b ? b.split(" - ") : [];
                c.defaultValue = M[1];
                U = c.endInput ? a(c.endInput).val() ? h.parseDate(u, a(c.endInput).val(), c) : M[1] : b[1] ? h.parseDate(u, b[1], c) : M[1];
                c.defaultValue = M[0];
                K = c.startInput ? a(c.startInput).val() ? h.parseDate(u,
                    a(c.startInput).val(), c) : M[0] : b[0] ? h.parseDate(u, b[0], c) : M[0];
                c.defaultValue = M[G];
                D = K ? h.formatDate(u, K, c) : "";
                k = U ? h.formatDate(u, U, c) : "";
                f._startDate = K;
                f._endDate = U;
                return t.parseValue(G ? k : D, f)
            }, onValueFill: function (b, d) {
                f._startDate = K = e;
                f._endDate = U = q;
                if (c.startInput) {
                    a(c.startInput).val(D);
                    d && a(c.startInput).change()
                }
                if (c.endInput) {
                    a(c.endInput).val(k);
                    d && a(c.endInput).change()
                }
            }, onBeforeClose: function (a, b) {
                if (b === "set" && !r(true, true)) {
                    f.setActiveDate(G ? "start" : "end");
                    return false
                }
            }, onHide: function () {
                t.onHide.call(f);
                G = 0;
                i = null;
                c.anchor = H
            }, onClear: function () {
                x && (G = 0)
            }, onBeforeShow: function () {
                c.headerText = false;
                e = K;
                q = U;
                if (c.counter)c.headerText = function () {
                    var a = e && q ? Math.max(1, Math.round(((new Date(q)).setHours(0, 0, 0, 0) - (new Date(e)).setHours(0, 0, 0, 0)) / 864E5) + 1) : 0;
                    return (a > 1 ? c.selectedPluralText || c.selectedText : c.selectedText).replace(/{count}/, a)
                };
                B = true
            }, onMarkupReady: function (b) {
                var d;
                i = b;
                if (e) {
                    o = true;
                    f.setDate(e, false, 0, true);
                    e = f.getDate(true)
                }
                if (q) {
                    o = true;
                    f.setDate(q, false, 0, true);
                    q = f.getDate(true)
                }
                if (G &&
                    q || !G && e) {
                    o = true;
                    f.setDate(G ? q : e, false, 0, true)
                }
                t.onMarkupReady.call(this, b);
                b.addClass("dw-range");
                if (L) {
                    d = '<div class="dw-dr-t" role="radiogroup"><div class="dw-dr-c dw-dr0"><div role="radio" class="dwb-e dwb-nhl dw-i dw-dr">' + c.fromText + '<div class="dw-drv dw-drv0">' + (D || "&nbsp;") + '</div></div></div><div class="dw-dr-c dw-dr1"><div role="radio" class="dwb-e dwb-nhl dw-i dw-dr">' + c.toText + '<div class="dw-drv dw-drv1">' + (k || "&nbsp;") + "</div></div></div></div>";
                    a(".dw-cal-tabs", b).before(d);
                    g()
                }
                a(".dw-dr-c",
                    b).on("touchstart click", function (b) {
                        if (j(b, this)) {
                            f.showMonthView();
                            f.setActiveDate(a(this).index() ? "end" : "start")
                        }
                    })
            }, onDayChange: function (a) {
                a.active = G ? "end" : "start";
                O = true
            }, onSetDate: function (b) {
                var d = b.date, h = f.order;
                if (!o) {
                    h.h === n && d.setHours(G ? 23 : 0);
                    h.i === n && d.setMinutes(G ? 59 : 0);
                    h.s === n && d.setSeconds(G ? 59 : 0);
                    d.setMilliseconds(G ? 999 : 0);
                    if (!B || O) {
                        if (x && O) {
                            G == 1 && d < e && (G = 0);
                            G ? d.setHours(23, 59, 59, 999) : d.setHours(0, 0, 0, 0)
                        }
                        G ? q = new Date(d) : e = new Date(d);
                        if (y) {
                            s(e, d);
                            s(q, d)
                        }
                        x && O && !G && (q = null)
                    }
                }
                f._isValid =
                    r(B || O || c.autoCorrect, !o);
                b.active = G ? "end" : "start";
                if (!o && x) {
                    O && (G = G ? 0 : 1);
                    g()
                }
                f.isVisible() && (f._isValid ? a(".dwb-s .dwb", f._markup).removeClass(l) : a(".dwb-s .dwb", f._markup).addClass(l));
                o = B = O = false
            }, onTabChange: function () {
                r(true, true)
            }, onDestroy: function () {
                a(c.startInput).prop("readonly", I);
                a(c.endInput).prop("readonly", m)
            }
        });
        return A
    }
})($);
(function (a, n) {
    var t = a.mobiscroll, w = {
        wheelOrder: "hhiiss",
        useShortLabels: !1,
        minTime: 0,
        maxTime: Infinity,
        labels: "Years,Months,Days,Hours,Minutes,Seconds".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs".split(",")
    };
    t.presetShort("timespan");
    t.presets.scroller.timespan = function (h) {
        function j(b) {
            var c = {};
            a(m).each(function (a, d) {
                c[d] = G[d] ? Math.floor(b / L[d].limit) : 0;
                b -= c[d] * L[d].limit
            });
            return c
        }

        function d(a, b) {
            var c = !1, d = U[G[a] - 1] || 1, f = L[a], h = f.wheel, i = f.prefix;
            A = 0;
            o = f.until;
            a == S && (A = Math.max(k[a],
                b[a] - 50 * d), o = Math.min(e[a], A + 100 * d), g = A + 5 * d, P = o - 5 * d);
            h.keys = [];
            h.values = [];
            h.label = f.label;
            I.match(RegExp(f.re + f.re, "i")) && (c = !0);
            for (s = A; s <= o; s += d)h.keys.push(s), h.values.push((i || "") + (10 > s && c ? "0" : "") + s + '<span class="dwtlbl">' + f.label + "</span>")
        }

        function f(b) {
            var c = 0;
            a.each(K, function (a, d) {
                isNaN(+b[0]) || (c += L[d.v].limit * b[a])
            });
            return c
        }

        var s, r, b, g, P, i, O, u, A, o, B, D, k, e, q = a.extend({}, h.settings), y = a.extend(h.settings, w, q), I = y.wheelOrder, q = y.useShortLabels ? y.labelsShort : y.labels, m = "years,months,days,hours,minutes,seconds".split(","),
            L = {
                years: {ord: 0, index: 6, until: 10, limit: 31536E6, label: q[0], re: "y", wheel: {}},
                months: {ord: 1, index: 5, until: 11, limit: 2592E6, label: q[1], re: "m", wheel: {}},
                days: {ord: 2, index: 4, until: 31, limit: 864E5, label: q[2], re: "d", wheel: {}},
                hours: {ord: 3, index: 3, until: 23, limit: 36E5, label: q[3], re: "h", wheel: {}},
                minutes: {ord: 4, index: 2, until: 59, limit: 6E4, label: q[4], re: "i", wheel: {}},
                seconds: {ord: 5, index: 1, until: 59, limit: 1E3, label: q[5], re: "s", wheel: {}}
            }, K = [], U = y.steps || [], G = {}, S = "seconds", c = 0, H = y.defaultValue || Math.max(y.minTime,
                    Math.min(0, y.maxTime)), x = [[]];
        b = 0;
        u = j(b);
        k = j(y.minTime);
        e = j(y.maxTime);
        a(m).each(function (a, b) {
            r = I.search(RegExp(L[b].re, "i"));
            -1 < r && (K.push({o: r, v: b}), L[b].index > L[S].index && (S = b))
        });
        K.sort(function (a, b) {
            return a.o > b.o ? 1 : -1
        });
        a.each(K, function (a, b) {
            b.v == S && (c = a);
            G[b.v] = a + 1;
            x[0].push(L[b.v].wheel);
            d(b.v, u)
        });
        h.getVal = function (a, b) {
            return b ? h._getVal(a) : h._hasValue || a ? f(h.getArrayVal(a)) : null
        };
        return {
            mode: "scroller", showLabel: !0, wheels: x, parseValue: function (b) {
                var c = [], d;
                t.util.isNumeric(b) || !b ? (u =
                    j(b || H), a.each(K, function (a, b) {
                    c.push(u[b.v])
                })) : a.each(K, function (a, e) {
                    d = RegExp("(\\d+)\\s?(" + y.labels[L[e.v].ord] + "|" + y.labelsShort[L[e.v].ord] + ")", "gi").exec(b);
                    c.push(d ? d[1] : 0)
                });
                a(c).each(function (a, b) {
                    c[a] = Math.floor(b / (U[a] || 1)) * (U[a] || 1)
                });
                return c
            }, formatValue: function (b) {
                var c = "";
                a.each(K, function (a, d) {
                    c += +b[a] ? b[a] + " " + L[d.v].label + " " : ""
                });
                return c.replace(/\s+$/g, "")
            }, validate: function (q, l, s) {
                var u, r, p = h._tempWheelArray;
                b = f(p);
                u = j(b);
                if (l === c || !i && (p[c] < g || p[c] > P))if (d(S, u), B !== A || D !==
                    o)r = p[c], O = setTimeout(function () {
                    B = A;
                    D = o;
                    i = !0;
                    p[c] = r;
                    h.changeWheel([c], n, l !== n)
                }, 1E3 * s);
                var w = !0, t = !0;
                a(m).each(function (b, c) {
                    if (G[c] !== n) {
                        var d = a(".dw-ul", q).eq(G[c] - 1), f = a(".dw-li", d).index(a('.dw-li[data-val="' + e[c] + '"]', d)), g = a(".dw-li", d).index(a('.dw-li[data-val="' + k[c] + '"]', d));
                        a(".dw-li", d).addClass("dw-v");
                        w && -1 < f && a(".dw-li", d).slice(f + 1).removeClass("dw-v");
                        t && -1 < g && a(".dw-li", d).slice(0, g).removeClass("dw-v");
                        w = w && u[c] == e[c];
                        t = t && u[c] == k[c]
                    }
                });
                i = !1
            }, onBeforeShow: function () {
                b = f(h._tempWheelArray);
                u = j(b);
                k = j(y.minTime);
                e = j(y.maxTime);
                d(S, u)
            }, onMarkupReady: function (b) {
                b.addClass("dw-timespan");
                a(".dwwl" + c, b).on("mousedown touchstart", function () {
                    clearTimeout(O)
                })
            }
        }
    }
})($);
(function (a, n) {
    var t = a.mobiscroll, w = {
        controls: ["start", "reset"],
        autostart: !1,
        step: 1,
        useShortLabels: !1,
        labels: "Years,Months,Days,Hours,Minutes,Seconds,".split(","),
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Lap",
        hideText: "Hide"
    };
    t.presetShort("timer");
    t.presets.scroller.timer = function (h) {
        function j(a) {
            return new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds())
        }

        function d(b) {
            var c = {};
            if (Y && J[F].index > J.days.index) {
                var d, e, f, g;
                d = new Date;
                var h = B ? d : aa;
                d = B ? aa : d;
                d = j(d);
                h = j(h);
                c.years = h.getFullYear() - d.getFullYear();
                c.months = h.getMonth() - d.getMonth();
                c.days = h.getDate() - d.getDate();
                c.hours = h.getHours() - d.getHours();
                c.minutes = h.getMinutes() - d.getMinutes();
                c.seconds = h.getSeconds() - d.getSeconds();
                c.fract = (h.getMilliseconds() - d.getMilliseconds()) / 10;
                for (d = x.length; 0 < d; d--)e = x[d - 1], f = J[e], g = x[a.inArray(e, x) - 1], J[g] && 0 > c[e] && (c[g]--, c[e] += "months" == g ? 32 - (new Date(h.getFullYear(),
                    h.getMonth(), 32)).getDate() : f.until + 1);
                "months" == F && (c.months += 12 * c.years, delete c.years)
            } else a(x).each(function (a, d) {
                J[d].index <= J[F].index && (c[d] = Math.floor(b / J[d].limit), b -= c[d] * J[d].limit)
            });
            return c
        }

        function f(c, d) {
            var f = 1, g = J[c], h = g.wheel, i = g.prefix, j = J[x[a.inArray(c, x) - 1]];
            L = 0;
            K = g.until;
            c == F && (L = Math.max(0, d[c] - 50), K = L + 100, k = L + 5, e = K - 5);
            if (g.index <= J[F].index && (!j || j.limit > Z)) {
                l[c] || ea[0].push(h);
                l[c] = 1;
                h.keys = [];
                h.values = [];
                h.label = g.label || "";
                Z >= g.limit && (f = Math.max(Math.round(Z / g.limit),
                    1), t = f * g.limit);
                for (b = L; b <= K; b += f)h.keys.push(b), h.values.push((i || "") + (10 > b ? "0" : "") + b + '<span class="dwtlbl">' + (g.label || "") + "</span>")
            }
        }

        function s(b) {
            var c = [], e, f = d(b);
            a(x).each(function (a, b) {
                l[b] && (e = Math.max(Math.round(Z / J[b].limit), 1), c.push(Math.round(f[b] / e) * e))
            });
            return c
        }

        function r(a) {
            Y ? (A = aa - new Date, 0 > A ? (A *= -1, B = !0) : B = !1, o = 0, V = !0) : (aa !== n ? (V = !1, A = 1E3 * aa, B = "down" !== c.countDirection) : (A = 0, V = B = "down" !== c.countDirection), a && (o = 0))
        }

        var b, g, t, i, O, u, A, o, B, D, k, e, q, y, I, m, L, K, U, G, S = a.extend({}, h.settings),
            c = a.extend(h.settings, w, S), H = c.useShortLabels ? c.labelsShort : c.labels, x = "years,months,days,hours,minutes,seconds,fract".split(","), J = {
                years: {index: 6, until: 10, limit: 31536E6, label: H[0], wheel: {}},
                months: {index: 5, until: 11, limit: 2592E6, label: H[1], wheel: {}},
                days: {index: 4, until: 31, limit: 864E5, label: H[2], wheel: {}},
                hours: {index: 3, until: 23, limit: 36E5, label: H[3], wheel: {}},
                minutes: {index: 2, until: 59, limit: 6E4, label: H[4], wheel: {}},
                seconds: {index: 1, until: 59, limit: 1E3, label: H[5], wheel: {}},
                fract: {
                    index: 0, until: 99,
                    limit: 10, label: H[6], prefix: ".", wheel: {}
                }
            }, l = {}, N = [], M = 0, R = !1, p = !0, V = !1, Z = Math.max(10, 1E3 * c.step), F = c.maxWheel, Q = c.locked || Y, T = (a.isArray(c.controls) ? c.controls : []).join(","), aa = c.targetTime, Y = aa && aa.getTime !== n, E = "jqm" == c.theme, ea = [[]];
        h.start = function () {
            p && h.reset();
            if (!R && (r(), V || !(o >= A)))R = !0, p = !1, O = new Date, i = o, c.readonly = !0, h.setValue(s(B ? o : A - o), !0, 0.1), g = setInterval(function () {
                o = new Date - O + i;
                h.setValue(s(B ? o : A - o), !0, 0.1);
                !V && o + t >= A && (clearInterval(g), setTimeout(function () {
                    h.stop();
                    o = A;
                    h.setValue(s(B ?
                        o : 0), !0, 0.1);
                    h.trigger("onFinish", [A]);
                    p = !0
                }, A - o))
            }, t), a(".dwwr", D).addClass("dw-running dw-locked"), a(".dw-timer-st", D).removeClass(c.btnStartClass || "").addClass(c.btnStopClass || "").attr("title", c.stopText).find(".dwb-txt").text(c.stopText), h.trigger("onStart", [])
        };
        h.stop = function () {
            R && (R = !1, clearInterval(g), o = new Date - O + i, a(".dwwr", D).removeClass("dw-running"), a(".dw-timer-st", D).removeClass(c.btnStopClass || "").addClass(c.btnStartClass || "").attr("title", c.startText).find(".dwb-txt").text(c.startText),
                h.trigger("onStop", [o]))
        };
        h.reset = function () {
            h.stop();
            o = 0;
            N = [];
            M = 0;
            h.setValue(s(B ? 0 : A), !0, 0.1);
            h.settings.readonly = Q;
            p = !0;
            Q || a(".dwwr", D).removeClass("dw-locked");
            h.trigger("onReset", [])
        };
        h.lap = function () {
            R && (u = new Date - O + i, q = u - M, M = u, N.push(u), h.trigger("lap", [u, q, N]))
        };
        h.getTime = function () {
            return A
        };
        h.setTime = function (a) {
            aa = a / 1E3;
            A = a
        };
        h.getElapsedTime = h.getEllapsedTime = function () {
            return R ? new Date - O + i : 0
        };
        h.setElapsedTime = h.setEllapsedTime = function (a, b) {
            p || (i = o = a, O = new Date, h.setValue(s(B ? o : A - o),
                !0, 0.1, !1, b))
        };
        r(!0);
        !F && !A && (F = "minutes");
        F || a(x).each(function (a, b) {
            if (!F && A >= J[b].limit)return F = b, !1
        });
        m = d(A);
        a(x).each(function (a, b) {
            f(b, m)
        });
        t = Math.max(87, t);
        c.autostart && setTimeout(function () {
            h.start()
        }, 0);
        return {
            wheels: ea, headerText: !1, readonly: Q, parseValue: function () {
                return s(B ? 0 : A)
            }, formatValue: function (b) {
                var c = "", d = 0;
                a(x).each(function (a, e) {
                    "fract" != e && l[e] && (c += b[d] + ("seconds" == e && l.fract ? "." + b[d + 1] : "") + " " + H[a] + " ", d++)
                });
                return c
            }, validate: function (b, c, g) {
                var i, j, m = 0, q = h._tempWheelArray,
                    b = !1;
                p && c !== n && (aa = 0, a(x).each(function (a, b) {
                    l[b] && (aa += J[b].limit * q[m], m++)
                }), aa /= 1E3, r(!0));
                if (p && 0 === c)b = !0, i = d(A); else if (!y && (q[0] < k || q[0] > e))i = d(B ? o : A - o), b = !0;
                if (b && (f(F, i), U !== L || G !== K))j = q[0], I = setTimeout(function () {
                    U = L;
                    G = K;
                    y = true;
                    q[0] = j;
                    h.changeWheel([0], n, c !== n)
                }, 1E3 * g);
                y = !1
            }, onBeforeShow: function () {
                c.mode = "scroller";
                c.showLabel = !0
            }, onMarkupReady: function (b) {
                var d = 0;
                D = b;
                b.addClass("dw-timer");
                R ? a(".dwwr", b).addClass("dw-running") : a(".dwwr", b).removeClass("dw-running");
                Q && a(".dwwr", D).addClass("dw-locked");
                a(".dwbc", b).remove();
                a(".dwwl0", b).on("mousedown touchstart", function () {
                    clearTimeout(I)
                });
                a(x).each(function (c, e) {
                    l[e] && (a(".dwwl" + d, b).addClass("dwwl-" + e), d++)
                });
                var e = T.match(/start/), f = T.match(/reset/) && !Y, g = T.match(/lap/) && !Y, i = "inline" !== c.display;
                if (e || f || g || i)a(".dwwr", b).addClass("dw-timer-btns").append('<div class="dwbc">' + (e ? '<span class="dwbw dwbgr dwbgrf' + (!f && !g ? " dwbgrl" : "") + '"><a href="#" role="button" class="dwb-e dwb dw-timer-st ' + (R ? c.btnStopClass || "" : c.btnStartClass || "") + '"' + (E ?
                        ' data-role="button" data-icon="arrow-r" data-iconpos="notext"' : "") + ' title="' + (R ? c.stopText : c.startText) + '"><span class="dwb-i"><span class="dwb-txt">' + (R ? c.stopText : c.startText) + "</span></span></a></span>" : "") + (f ? '<span class="dwbw dwbgr' + (!e ? " dwbgrf" : "") + (!g ? " dwbgrl" : "") + '"><a href="#" role="button" class="dwb-e dwb dw-timer-r ' + (c.btnResetClass || "") + '"' + (E ? ' data-role="button" data-icon="delete" data-iconpos="notext"' : "") + ' title="' + c.resetText + '"><span class="dwb-i"><span class="dwb-txt">' +
                    c.resetText + "</span></span></a></span>" : "") + (g ? '<span class="dwbw dwbgr dwbgrl' + (!e && !f ? " dwbgrf" : "") + '"><a href="#" role="button" class="dwb-e dwb dw-timer-l ' + (c.btnLapClass || "") + '"' + (E ? ' data-role="button" data-icon="refresh" data-iconpos="notext"' : "") + ' title="' + c.lapText + '"><span class="dwb-i"><span class="dwb-txt">' + c.lapText + "</span></span></a></span>" : "") + (i ? '<span class="dwbw dwtcl"><a href="#" role="button" class="dwb-e dwb dw-timer-cl ' + (c.btnHideClass || "") + ' "' + (E ? ' data-role="button" data-mini="true"' :
                        "") + ">" + c.hideText + "</a></span>" : "") + "</div>"), h.tap(a(".dw-timer-st", b), function () {
                    R ? h.stop() : h.start()
                }, !0), h.tap(a(".dw-timer-r", b), function () {
                    h.reset()
                }, !0), h.tap(a(".dw-timer-l", b), function () {
                    h.lap()
                }, !0), h.tap(a(".dw-timer-cl", b), function () {
                    h.hide()
                }, !0)
            }, onPosition: function (b) {
                a(".dwwr", b).css("min-width", 0).css("min-width", a(".dwbc", b).width())
            }, onDestroy: function () {
                clearInterval(g)
            }
        }
    }
})($);
(function (a, n) {
    function t(b) {
        var d = [Math.round(b.r).toString(16), Math.round(b.g).toString(16), Math.round(b.b).toString(16)];
        a.each(d, function (a, b) {
            1 == b.length && (d[a] = "0" + b)
        });
        return "#" + d.join("")
    }

    function w(a) {
        a = parseInt(-1 < a.indexOf("#") ? a.substring(1) : a, 16);
        return {r: a >> 16, g: (a & 65280) >> 8, b: a & 255}
    }

    function h(a) {
        var b, d, f;
        b = a.h;
        var g = 255 * a.s / 100, a = 255 * a.v / 100;
        if (0 === g)b = d = f = a; else {
            var g = (255 - g) * a / 255, h = (a - g) * (b % 60) / 60;
            360 == b && (b = 0);
            60 > b ? (b = a, f = g, d = g + h) : 120 > b ? (d = a, f = g, b = a - h) : 180 > b ? (d = a, b = g, f = g + h) : 240 >
            b ? (f = a, b = g, d = a - h) : 300 > b ? (f = a, d = g, b = g + h) : 360 > b ? (b = a, d = g, f = a - h) : b = d = f = 0
        }
        return {r: b, g: d, b: f}
    }

    function j(a) {
        var b = 0, d;
        d = Math.min(a.r, a.g, a.b);
        var f = Math.max(a.r, a.g, a.b), b = f - d, b = (d = f ? 255 * b / f : 0) ? a.r == f ? (a.g - a.b) / b : a.g == f ? 2 + (a.b - a.r) / b : 4 + (a.r - a.g) / b : -1, b = 60 * b;
        0 > b && (b += 360);
        return {h: b, s: d * (100 / 255), v: f * (100 / 255)}
    }

    function d(a) {
        return t(h(a))
    }

    function f(a) {
        var b = a.h, d = a.l, a = a.s / 100, a = a * (50 >= d ? d : 100 - d), d = d + a;
        return {h: b, s: 100 * (d ? 2 * a / d : 0), v: d}
    }

    function s(a) {
        return j(w(a))
    }

    var r = a.mobiscroll, b = r.util.prefix,
        g = r.presets.scroller, P = {
            preview: !0,
            previewText: !0,
            label: "Color",
            refineLabel: "Refine",
            step: 10,
            nr: 10,
            format: "hex",
            hueText: "Hue",
            saturationText: "Saturation",
            valueText: "Value"
        };
    r.presetShort("colorpicker");
    r.presetShort("color");
    g.color = g.colorpicker = function (g) {
        function r(a) {
            return isNaN(+a) ? 0 : +a
        }

        function u(a) {
            return a.r ? t(a) : a.h ? d(a) : a
        }

        function A(a) {
            a = u(a);
            return "rgb" === N ? (a = w(a), Math.round(a.r) + "," + Math.round(a.g) + "," + Math.round(a.b)) : "hsv" === N ? (a = s(a), Math.round(a.h) + "," + Math.round(a.s) + "," + Math.round(a.v)) :
                a
        }

        function o(a) {
            return x ? "hsv" == N ? a.join(",") : "rgb" == N ? (a = h({
                h: a[0],
                s: a[1],
                v: a[2]
            }), Math.round(a.r) + "," + Math.round(a.g) + "," + Math.round(a.b)) : d({
                h: a[0],
                s: a[1],
                v: a[2]
            }) : l ? a[1] : a[0]
        }

        function B(a, c, d) {
            a[0].style.backgroundImage = b + ("-webkit-" == b ? "gradient(linear,left top,left bottom,from(" + c + "),to(" + d + "))" : "linear-gradient(" + c + "," + d + ")")
        }

        function D(b, c) {
            var e = g._tempWheelArray;
            1 !== c && 2 !== c && B(a(".dwwl1 .dw-ul", b), d({h: e[0], s: 0, v: 100}), d({h: e[0], s: 100, v: 100}));
            2 !== c && B(a(".dwwl2 .dw-ul", b), d({
                h: e[0], s: e[1],
                v: 0
            }), d({h: e[0], s: e[1], v: 100}));
            if (M) {
                var f = h({h: e[0], s: e[1], v: e[2]}), f = 0.299 * f.r + 0.587 * f.g + 0.114 * f.b;
                a(".dw-color-preview", b).attr("style", "background:" + d({
                        h: e[0],
                        s: e[1],
                        v: e[2]
                    }) + ";color:" + (130 < f ? "#000" : "#fff")).text(R ? o(e) : "")
            }
        }

        function k() {
            var a = 0, b = {keys: [], values: [], labels: [], label: p}, c = {
                keys: [],
                values: [],
                labels: [],
                label: V
            }, e = {keys: [], values: [], labels: [], label: Z};
            for (a; 360 > a; a += 3)b.keys.push(a), b.values.push('<div class="dw-color" style="background:' + d({
                    h: a,
                    s: 100,
                    v: 100
                }) + '"><div class="dw-color-hl"></div></div>'),
                b.labels.push(a);
            for (a = 0; 101 > a; a += 1)c.keys.push(a), e.keys.push(a), c.values.push('<div class="dw-color"><div class="dw-color-hl"></div></div>'), e.values.push('<div class="dw-color"><div class="dw-color-hl"></div></div>'), c.labels.push(a), e.labels.push(a);
            return [[b, c, e]]
        }

        function e(b, c, d) {
            var e, f, g = {keys: [], values: [], label: c || H.label};
            a.each(b, function (a, b) {
                e = u(b);
                f = A(b);
                g.keys.push(f);
                g.values.push('<div class="dw-cbc"><div class="dw-cb' + ("circle" === H.style ? " dw-cb-circle" : "") + '" style="background:' +
                    e + '"></div></div>' + f);
                d && (K[f] = d)
            });
            return g
        }

        function q(a, b, c) {
            var e, g = a.h, h = (2 - a.s / 100) * a.v, a = a.s * a.v, a = (e = 100 >= h ? h : 200 - h) ? a / e : 0;
            e = h / 2 - c / 2 * b;
            for (h = []; 0 > e + b;)e += b;
            for (c = e + (c + 1) * b; 100 <= c - b;)c -= b;
            for (; e <= c; e += b)h.push(d(f({h: g, s: a, l: Math.max(0, Math.min(e, 100))})));
            return h
        }

        var y, I, m, L, K = {}, U = {}, G = {}, S, c = a.extend({}, g.settings), H = a.extend(g.settings, P, c), x = !H.colors, c = a.isArray(H.colors) ? H.colors : [H.colors], J = H.defaultValue || c[0], l = H.refine && 1 < c.length, N = H.format, M = x && H.preview, R = H.previewText, p = H.hueText,
            V = H.saturationText, Z = H.valueText;
        !x && 1 == c.length && (c = q(s(u(c[0])), H.step, H.nr));
        x ? (L = k(), G = {
            width: 70,
            height: 15,
            rows: 13,
            speedUnit: 0.006,
            timeUnit: 0.05,
            showLabel: !0
        }) : l ? (a.each(c, function (a, b) {
            I = u(b);
            m = A(b);
            U[m] = e(q(s(I), H.step, H.nr), H.refineLabel, m);
            a || (y = U[m])
        }), L = [[e(c), y]]) : (G = {width: 180}, L = [[e(c)]]);
        return a.extend({
            wheels: L, parseValue: function (a) {
                if (x) {
                    if (a = a || J) {
                        if (N == "hsv") {
                            a = a.split(",");
                            a = {h: r(a[0]), s: r(a[1]), v: r(a[2])}
                        } else if (N == "rgb") {
                            a = a.split(",");
                            a = j({r: r(a[0]), g: r(a[1]), b: r(a[2])})
                        } else {
                            a =
                                a.replace("#", "");
                            a.length == 3 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]);
                            a = s(a)
                        }
                        var b = Math.round(a.h);
                        return [Math.floor(b / 3) * 3, Math.round(a.s), Math.round(a.v)]
                    }
                    return [0, 100, 100]
                }
                if (l) {
                    if (a && K[a])return [K[a], a];
                    A(J);
                    return [K[J], J]
                }
                return [a || A(J)]
            }, formatValue: o, onBeforeShow: function () {
                if (x)H.mode = "scroller";
                if (M)H.headerText = false
            }, onMarkupReady: function (a) {
                a.addClass("dw-colorpicker");
                M && a.find(".dwc").before('<div class="dw-color-preview"></div>');
                if (x) {
                    a.addClass("dw-cp-hsv");
                    D(a)
                }
            }, validate: function (a,
                                   b) {
                var c = g._tempWheelArray;
                if (x)setTimeout(function () {
                    D(a, b)
                }, 1); else if (l && !b && !S) {
                    S = true;
                    L[0][1] = U[c[0]];
                    b === 0 && (c[1] = c[0]);
                    g.changeWheel([1], n, b !== n)
                }
                S = false
            }
        }, G)
    };
    r.colorpicker = {hsv2hex: d, hsv2rgb: h, rgb2hsv: j, rgb2hex: t, hex2rgb: w, hex2hsv: s}
})($);
(function (a, n, t, w) {
    var h = a.extend, j = a.mobiscroll, d = j.classes;
    d.MenuStrip = function (f, s) {
        function r(a) {
            clearTimeout(L);
            L = setTimeout(function () {
                u("load" !== a.type)
            }, 200)
        }

        function b(b, c) {
            if (b.length) {
                var d = b.offset().left, e = b[0].offsetLeft, f = b.width(), h = o.offset().left;
                A = b;
                c === w && (c = !I);
                K && c && (I ? b.attr("data-selected") ? t(b) : g(b) : (t(a(".mbsc-ms-item-sel", l)), g(b)));
                "a" == S ? d < h ? G.scroll(-e, 200) : d + f > h + k && G.scroll(k - e - f, 200) : G.scroll(k / 2 - e - f / 2, 200);
                c && x("onItemTap", [b])
            }
        }

        function g(a) {
            a.addClass(U).attr("data-selected",
                "true").attr("aria-selected", "true")
        }

        function t(a) {
            a.removeClass(U).removeAttr("data-selected").removeAttr("aria-selected")
        }

        function i(a) {
            "object" !== typeof a && (a = l.children('[data-id="' + a + '"]'));
            return a
        }

        function O() {
            l.children().each(function (b) {
                var d, f = a(this), g = K && "true" == f.attr("data-selected"), h = "true" == f.attr("data-disabled"), i = f.attr("data-icon");
                0 === b && (B = f);
                K && !I && g && (A = f);
                1 !== f.children().length && a("<span></span>").append(f.contents()).appendTo(f);
                d = f.children().eq(0);
                i && (e = !0);
                d.html() &&
                (q = !0);
                d.hasClass("mbsc-ms-item-i") || (b = a('<span class="mbsc-ms-item-i-t"><span class="mbsc-ms-item-i-c"></span></span>'), b.find(".mbsc-ms-item-i-c").append(d.contents()), d.addClass("mbsc-ms-item-i" + (i ? " mbsc-ms-ic mbsc-ic mbsc-ic-" + i : "")).append(b), f.attr("data-role", "button").attr("aria-selected", g ? "true" : null).attr("aria-disabled", h ? "true" : null).addClass("mbsc-ms-item mbsc-btn-e " + (c.itemClass || "") + (g ? U : "") + (h ? " mbsc-btn-d " + (c.disabledClass || "") : "")), f.find(".mbsc-ms-item-i").append(J._processItem(a,
                    0.2)))
            });
            e && o.addClass("mbsc-ms-icons");
            q && o.addClass("mbsc-ms-txt")
        }

        function u(a) {
            k = o.width();
            a && m === k || (m = k, c.itemWidth && (y = k / Math.min(Math.floor(k / c.itemWidth), l.children().length), l.children().css("width", y + "px")), l.contents().filter(function () {
                return this.nodeType == 3 && !/\S/.test(this.nodeValue)
            }).remove(), H = l.width(), h(G.settings, {
                contSize: k,
                maxSnapScroll: c.paging ? 1 : !1,
                maxScroll: 0,
                minScroll: H > k ? k - H : 0,
                snap: c.paging ? k : c.snap ? y || ".mbsc-ms-item" : !1,
                elastic: H > k ? y || k : !1
            }), G.refresh())
        }

        var A, o, B, D,
            k, e, q, y, I, m, L, K, U, G, S, c, H, x, J = this, l = a(f);
        d.Base.call(this, f, s, !0);
        J._processItem = new Function("$, p", function () {
            var a = [5, 2], b;
            a:{
                b = a[0];
                var c;
                for (c = 0; 16 > c; ++c)if (1 == b * c % 16) {
                    b = [c, a[1]];
                    break a
                }
                b = void 0
            }
            a = b[0];
            b = b[1];
            c = "";
            var d;
            for (d = 0; 1062 > d; ++d)c += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[d]) -
            a * b) % 16 + 16) % 16];
            b = c;
            c = b.length;
            a = [];
            for (d = 0; d < c; d += 2)a.push(b[d] + b[d + 1]);
            b = "";
            c = a.length;
            for (d = 0; d < c; d++)b += String.fromCharCode(parseInt(a[d], 16));
            b = b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
            return b
        }());
        J.navigate = function (a, c) {
            b(i(a), c)
        };
        J.next = function (a) {
            var c = A ? A.next() : B;
            c.length && (A = c, b(A, a))
        };
        J.prev = function (a) {
            var c = A ? A.prev() : B;
            c.length && (A = c, b(A, a))
        };
        J.select = function (b) {
            I || t(a(".mbsc-ms-item-sel", l));
            g(i(b))
        };
        J.deselect = function (a) {
            t(i(a))
        };
        J.enable = function (a) {
            i(a).removeClass("mbsc-btn-d").removeAttr("data-disabled").removeAttr("aria-disabled")
        };
        J.disable = function (a) {
            i(a).addClass("mbsc-btn-d").attr("data-disabled", "true").attr("aria-disabled", "true")
        };
        J.refresh = function () {
            l.height("");
            O();
            u();
            l.height(l.height())
        };
        J.init = function (d) {
            J._init(d);
            D = a("body" == c.context ? n : c.context);
            "tabs" == c.type ? (c.select = c.select || "single", c.variant = c.variant || "b") : "options" == c.type ? (c.select = c.select || "multi", c.variant = c.variant || "a") : "menu" == c.type && (c.select = c.select || "off", c.variant = c.variant || "a");
            c.itemWidth && c.snap === w && (c.snap = !0);
            S = c.variant;
            K = "off" !=
                c.select;
            I = "multi" == c.select;
            U = " mbsc-ms-item-sel " + (c.activeClass || "");
            o = a('<div class="mbsc-ms-c mbsc-ms-' + S + " mbsc-ms-" + c.display + " mbsc-" + c.theme + " " + (c.baseTheme ? " mbsc-" + c.baseTheme : "") + " " + (c.cssClass || "") + " " + (c.wrapperClass || "") + (c.rtl ? " mbsc-ms-rtl" : " mbsc-ms-ltr") + (c.itemWidth ? " mbsc-ms-hasw" : "") + ("body" == c.context ? "" : " mbsc-ms-ctx") + (K ? "" : " mbsc-ms-nosel") + '"><div class="mbsc-ms-sc"></div></div>').insertAfter(l);
            o.find(".mbsc-ms-sc").append(l);
            l.css("display", "").addClass("mbsc-ms " + (c.groupClass ||
                ""));
            O();
            x("onMarkupReady", [o]);
            l.height(l.height());
            G = new j.classes.ScrollView(o[0], {
                axis: "X",
                contSize: 0,
                maxScroll: 0,
                maxSnapScroll: 1,
                minScroll: 0,
                snap: 1,
                elastic: 1,
                rtl: c.rtl,
                mousewheel: c.mousewheel,
                onBtnTap: function (a) {
                    b(a, true)
                }
            });
            u();
            o.find("img").on("load", r);
            D.on("orientationchange resize", r);
            x("onInit", [])
        };
        J.destroy = function () {
            D.off("orientationchange resize", r);
            l.height("").insertAfter(o).find(".mbsc-ms-item").width("");
            o.off().remove();
            G.destroy();
            J._destroy()
        };
        c = J.settings;
        x = J.trigger;
        J.init(s)
    };
    d.MenuStrip.prototype = {
        _class: "menustrip",
        _hasDef: !0,
        _hasTheme: !0,
        _defaults: {type: "options", display: "inline"}
    };
    j.presetShort("menustrip", "MenuStrip")
})($, window, document);
(function (a) {
    var n = a.mobiscroll, t = n.classes;
    t.Widget = function (n, h, j) {
        function d(d) {
            a(".dwcc", d).append(g._processItem(a, 0.7));
            !a(".dwcc", d).hasClass("mbsc-w-p") && a.mobiscroll.running && a(".dwcc", d).addClass("mbsc-w-p").append(b.show())
        }

        var f, s, r, b = a(n), g = this;
        t.Frame.call(this, n, h, !0);
        g._processItem = new Function("$, p", function () {
            var a = [5, 2], b;
            a:{
                b = a[0];
                var d;
                for (d = 0; 16 > d; ++d)if (1 == b * d % 16) {
                    b = [d, a[1]];
                    break a
                }
                b = void 0
            }
            a = b[0];
            b = b[1];
            d = "";
            var f;
            for (f = 0; 1062 > f; ++f)d += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[f]) -
            a * b) % 16 + 16) % 16];
            b = d;
            d = b.length;
            a = [];
            for (f = 0; f < d; f += 2)a.push(b[f] + b[f + 1]);
            b = "";
            d = a.length;
            for (f = 0; f < d; f++)b += String.fromCharCode(parseInt(a[f], 16));
            b = b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
            return b
        }());
        g._generateContent = function () {
            return ""
        };
        g._markupReady = function (a) {
            "inline" != f.display && d(a)
        };
        g._markupInserted = function (a) {
            "inline" == f.display && d(a);
            a.trigger("mbsc-enhance", [{theme: f.theme, lang: f.lang}])
        };
        g._markupRemove = function () {
            b.hide();
            s ? s.prepend(b) : r.after(b)
        };
        g._processSettings = function () {
            f = g.settings;
            g.buttons.close = {
                text: f.closeText,
                handler: "cancel"
            };
            g.buttons.ok = {text: f.okText, handler: "set"};
            f.cssClass = (f.cssClass || "") + " mbsc-wdg";
            f.buttons = f.buttons || ("inline" == f.display ? [] : ["ok"]);
            r = b.prev();
            r.length || (s = b.parent());
            b.hide()
        };
        j || g.init(h)
    };
    t.Widget.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasContent: !0,
        _class: "widget",
        _defaults: a.extend({}, t.Frame.prototype._defaults, {okText: "OK"})
    };
    n.themes.widget = n.themes.frame;
    n.presetShort("widget", "Widget", !1)
})($);
(function (a) {
    var a = a.mobiscroll, n = a.presets.scroller;
    n.number = n.measurement;
    a.presetShort("number")
})($);
(function (a) {
    var n = a.mobiscroll, t = n.presets.scroller;
    n.presetShort("image");
    t.image = function (n) {
        n.settings.enhance && (n._processMarkup = function (h) {
            var j = h.attr("data-icon");
            h.children().each(function (d, f) {
                f = a(f);
                f.is("img") ? a('<div class="mbsc-img-c"></div>').insertAfter(f).append(f.addClass("mbsc-img")) : f.is("p") && f.addClass("mbsc-img-txt")
            });
            j && h.prepend('<div class="mbsc-ic mbsc-ic-' + j + '"></div');
            h.html('<div class="mbsc-img-w">' + h.html() + "</div>");
            return h.html()
        });
        return t.list.call(this, n)
    }
})($);
(function (a, n, t, w) {
    var h = a.mobiscroll, j = a.extend, d = h.util, f = h.datetime, s = h.presets.scroller, r = {
        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs".split(","),
        fromText: "Start",
        toText: "End",
        eventText: "event",
        eventsText: "events"
    };
    h.presetShort("calendar");
    s.calendar = function (b) {
        function g(b) {
            if (b) {
                if (J[b])return J[b];
                var c = a('<div style="background-color:' + b + ';"></div>').appendTo("body"), d = (n.getComputedStyle ? getComputedStyle(c[0]) : c[0].style).backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, "").split(","), d = 130 <
                0.299 * d[0] + 0.587 * d[1] + 0.114 * d[2] ? "#000" : "#fff";
                c.remove();
                return J[b] = d
            }
        }

        function t(a) {
            return a.sort(function (a, b) {
                var c = a.d || a.start, d = b.d || b.start, c = !c.getTime ? 0 : a.start && a.end && a.start.toDateString() !== a.end.toDateString() ? 1 : c.getTime(), d = !d.getTime ? 0 : b.start && b.end && b.start.toDateString() !== b.end.toDateString() ? 1 : d.getTime();
                return c - d
            })
        }

        function i(b) {
            var c;
            c = a(".dw-cal-c", k).height();
            var d = b.height(), f = b.width(), g = b.offset().top - a(".dw-cal-c", k).offset().top, h = 2 > b.closest(".dw-cal-row").index();
            c = e.addClass("dw-cal-events-t").css({
                top: h ? g + d : "0",
                bottom: h ? "0" : c - g
            }).addClass("dw-cal-events-v").height();
            e.css(h ? "bottom" : "top", "auto").removeClass("dw-cal-events-t");
            m.css("max-height", c);
            I.refresh();
            I.scroll(0);
            h ? e.addClass("dw-cal-events-b") : e.removeClass("dw-cal-events-b");
            a(".dw-cal-events-arr", e).css("left", b.offset().left - e.offset().left + f / 2)
        }

        function O(c, d) {
            var f = y[c];
            if (f) {
                var j, k, m, o, n, s = '<ul class="dw-cal-event-list">';
                q = d;
                d.addClass(N).find(".dw-i").addClass(R);
                d.hasClass(M) && d.attr("data-hl",
                    "true").removeClass(M);
                t(f);
                a.each(f, function (a, b) {
                    o = b.d || b.start;
                    n = b.start && b.end && b.start.toDateString() !== b.end.toDateString();
                    m = b.color;
                    g(m);
                    k = j = "";
                    o.getTime && (j = h.datetime.formatDate((n ? "MM d yy " : "") + l.timeFormat, o));
                    b.end && (k = h.datetime.formatDate((n ? "MM d yy " : "") + l.timeFormat, b.end));
                    var c = s, d = '<li role="button" aria-label="' + b.text + (j ? ", " + l.fromText + " " + j : "") + (k ? ", " + l.toText + " " + k : "") + '" class="dw-cal-event"><div class="dw-cal-event-color" style="' + (m ? "background:" + m + ";" : "") + '"></div><div class="dw-cal-event-text">' +
                        (o.getTime && !n ? '<div class="dw-cal-event-time">' + h.datetime.formatDate(l.timeFormat, o) + "</div>" : "") + b.text + "</div>", e;
                    if (b.start && b.end) {
                        e = l.labelsShort;
                        var f = Math.abs(b.end - b.start) / 1E3, i = f / 60, q = i / 60, p = q / 24, r = p / 365;
                        e = '<div class="dw-cal-event-dur">' + (45 > f && Math.round(f) + " " + e[5].toLowerCase() || 45 > i && Math.round(i) + " " + e[4].toLowerCase() || 24 > q && Math.round(q) + " " + e[3].toLowerCase() || 30 > p && Math.round(p) + " " + e[2].toLowerCase() || 365 > p && Math.round(p / 30) + " " + e[1].toLowerCase() || Math.round(r) + " " + e[0].toLowerCase()) +
                            "</div>"
                    } else e = "";
                    s = c + (d + e + "</li>")
                });
                s += "</ul>";
                L.html(s);
                i(q);
                b.tap(a(".dw-cal-event", L), function (d) {
                    I.scrolled || b.trigger("onEventSelect", [d, f[a(this).index()], c])
                });
                K = !0;
                b.trigger("onEventBubbleShow", [q, e])
            }
        }

        function u() {
            e && e.removeClass("dw-cal-events-v");
            q && (q.removeClass(N).find(".dw-i").removeClass(R), q.attr("data-hl") && q.removeAttr("data-hl").addClass(M));
            K = !1
        }

        function A(a) {
            return new Date(a.getFullYear(), a.getMonth(), a.getDate())
        }

        function o(a) {
            Q = {};
            if (a && a.length)for (G = 0; G < a.length; G++)Q[A(a[G])] =
                a[G]
        }

        function B() {
            T && u();
            b.refresh()
        }

        var D, k, e, q, y, I, m, L, K, U, G, S, c, H, x, J = {};
        H = j({}, b.settings);
        var l = j(b.settings, r, H), N = "dw-sel dw-cal-day-ev", M = "dw-cal-day-hl", R = l.activeClass || "", p = l.multiSelect || "week" == l.selectType, V = l.markedDisplay, Z = !0 === l.events || !0 === l.markedText, F = 0, Q = {}, T = a.isArray(l.events), aa = T ? j(!0, [], l.events) : [];
        H = s.calbase.call(this, b);
        D = j({}, H);
        U = l.firstSelectDay === w ? l.firstDay : l.firstSelectDay;
        if (l.selectedValues)for (G = 0; G < l.selectedValues.length; G++)Q[A(l.selectedValues[G])] = l.selectedValues[G];
        T && a.each(aa, function (a, b) {
            b._id === w && (b._id = F++)
        });
        b.onGenMonth = function (a, c) {
            y = b.prepareObj(aa, a, c);
            S = b.prepareObj(l.marked, a, c)
        };
        b.getDayProps = function (b) {
            for (var c = p ? Q[b] !== w : T ? b.getTime() === (new Date).setHours(0, 0, 0, 0) : w, d = S[b] ? S[b][0] : !1, e = y[b] ? y[b][0] : !1, f = d || e, d = d.text || (e ? y[b].length + " " + (1 < y[b].length ? l.eventsText : l.eventText) : 0), e = S[b] || y[b] || [], h = f.color, i = Z && d ? g(h) : "", j = "", k = '<div class="dw-cal-day-m"' + (h ? ' style="background-color:' + h + ";border-color:" + h + " " + h + ' transparent transparent"' :
                    "") + "></div>", b = 0; b < e.length; b++)e[b].icon && (j += '<span class="mbsc-ic mbsc-ic-' + e[b].icon + '"' + (e[b].text ? "" : e[b].color ? ' style="color:' + e[b].color + ';"' : "") + "></span>\n");
            if ("bottom" == V) {
                k = '<div class="dw-cal-day-m"><div class="dw-cal-day-m-t">';
                for (b = 0; b < e.length; b++)k += '<div class="dw-cal-day-m-c"' + (e[b].color ? ' style="background:' + e[b].color + ';"' : "") + "></div>";
                k += "</div></div>"
            }
            return {
                marked: f,
                selected: T ? !1 : c,
                cssClass: T && c ? "dw-cal-day-hl" : f ? "dw-cal-day-marked" : "",
                ariaLabel: Z || T ? d : "",
                markup: Z && d ?
                '<div class="dw-cal-day-txt-c"><div class="dw-cal-day-txt ' + (l.eventTextClass || "") + '" title="' + a("<div>" + d + "</div>").text() + '"' + (h ? ' style="background:' + h + ";color:" + i + ';text-shadow:none;"' : "") + ">" + j + d + "</div></div>" : Z && j ? '<div class="dw-cal-day-ic-c">' + j + "</div>" : f ? k : ""
            }
        };
        b.addValue = function (a) {
            Q[A(a)] = a;
            B()
        };
        b.removeValue = function (a) {
            delete Q[A(a)];
            B()
        };
        b.setVal = function (a, c, d, e, f) {
            p && (o(a), a = a ? a[0] : null);
            b._setVal(a, c, d, e, f);
            B()
        };
        b.getVal = function (a) {
            return p ? d.objectToArray(Q) : b.getDate(a)
        };
        b.setValues =
            function (a, c) {
                b.setDate(a ? a[0] : null, c);
                o(a);
                B()
            };
        b.getValues = function () {
            return p ? b.getVal() : [b.getDate()]
        };
        T && (b.addEvent = function (b) {
            var c = [], b = j(!0, [], a.isArray(b) ? b : [b]);
            a.each(b, function (a, b) {
                b._id === w && (b._id = F++);
                aa.push(b);
                c.push(b._id)
            });
            B();
            return c
        }, b.removeEvent = function (b) {
            b = a.isArray(b) ? b : [b];
            a.each(b, function (b, c) {
                a.each(aa, function (a, b) {
                    if (b._id === c)return aa.splice(a, 1), !1
                })
            });
            B()
        }, b.getEvents = function (a) {
            var c;
            return a ? (a.setHours(0, 0, 0, 0), c = b.prepareObj(aa, a.getFullYear(), a.getMonth()),
                c[a] ? t(c[a]) : []) : j(!0, [], aa)
        }, b.setEvents = function (b) {
            var c = [];
            aa = j(!0, [], b);
            a.each(aa, function (a, b) {
                b._id === w && (b._id = F++);
                c.push(b._id)
            });
            B();
            return c
        });
        j(H, {
            highlight: !p && !T,
            divergentDayChange: !p && !T,
            buttons: T && "inline" !== l.display ? ["cancel"] : l.buttons,
            parseValue: function (a) {
                var c, d;
                if (p && a && typeof a === "string") {
                    Q = {};
                    a = a.split(",");
                    for (c = 0; c < a.length; c++) {
                        d = f.parseDate(b.format, a[c].replace(/^\s+|\s+$/g, ""), l);
                        Q[A(d)] = d
                    }
                    a = a[0]
                }
                return D.parseValue.call(this, a)
            },
            formatValue: function (a) {
                var c, d = [];
                if (p) {
                    for (c in Q)d.push(f.formatDate(b.format, Q[c], l));
                    return d.join(", ")
                }
                return D.formatValue.call(this, a)
            },
            onClear: function () {
                if (p) {
                    Q = {};
                    b.refresh()
                }
            },
            onBeforeShow: function () {
                if (T)l.headerText = false;
                if (l.closeOnSelect)l.divergentDayChange = false;
                if (l.counter && p)l.headerText = function () {
                    var b = 0, c = l.selectType == "week" ? 7 : 1;
                    a.each(Q, function () {
                        b++
                    });
                    b = Math.round(b / c);
                    return (b > 1 ? l.selectedPluralText || l.selectedText : l.selectedText).replace(/{count}/, b)
                }
            },
            onMarkupReady: function (d) {
                D.onMarkupReady.call(this,
                    d);
                k = d;
                if (p) {
                    a(".dwv", d).attr("aria-live", "off");
                    c = j({}, Q)
                }
                Z && a(".dw-cal", d).addClass("dw-cal-ev");
                V && a(".dw-cal", d).addClass("dw-cal-m-" + V);
                if (T) {
                    d.addClass("dw-cal-em");
                    e = a('<div class="dw-cal-events ' + (l.eventBubbleClass || "") + '"><div class="dw-cal-events-arr"></div><div class="dw-cal-events-i"><div class="dw-cal-events-sc"></div></div></div>').appendTo(a(".dw-cal-c", d));
                    m = a(".dw-cal-events-i", e);
                    L = a(".dw-cal-events-sc", e);
                    I = new h.classes.ScrollView(m[0]);
                    K = false;
                    b.tap(m, function () {
                        I.scrolled ||
                        u()
                    })
                }
            },
            onMonthChange: function () {
                T && u()
            },
            onSelectShow: function () {
                T && u()
            },
            onMonthLoaded: function () {
                if (x) {
                    O(x.d, a('.dw-cal-day-v[data-full="' + x.full + '"]:not(.dw-cal-day-diff)', k));
                    x = false
                }
            },
            onDayChange: function (c) {
                var d = c.date, e = A(d), f = a(c.cell), c = c.selected;
                if (T) {
                    u();
                    f.hasClass("dw-cal-day-ev") || setTimeout(function () {
                        b.changing ? x = {d: e, full: f.attr("data-full")} : O(e, f)
                    }, 10)
                } else if (p)if (l.selectType == "week") {
                    var g, h, i = e.getDay() - U, i = i < 0 ? 7 + i : i;
                    l.multiSelect || (Q = {});
                    for (g = 0; g < 7; g++) {
                        h = new Date(e.getFullYear(),
                            e.getMonth(), e.getDate() - i + g);
                        c ? delete Q[h] : Q[h] = h
                    }
                    B()
                } else {
                    g = a('.dw-cal .dw-cal-day[data-full="' + f.attr("data-full") + '"]', k);
                    if (c) {
                        g.removeClass("dw-sel").removeAttr("aria-selected").find(".dw-i").removeClass(R);
                        delete Q[e]
                    } else {
                        g.addClass("dw-sel").attr("aria-selected", "true").find(".dw-i").addClass(R);
                        Q[e] = e
                    }
                }
                if (!T && !l.multiSelect && l.closeOnSelect && l.display !== "inline") {
                    b.needsSlide = false;
                    b.setDate(d);
                    b.select();
                    return false
                }
            },
            onCalResize: function () {
                K && i(q)
            },
            onCancel: function () {
                !b.live && p && (Q =
                    j({}, c))
            }
        });
        return H
    }
})($, window, document);
(function (a, n) {
    var t = a.mobiscroll, w = {
        inputClass: "",
        values: 5,
        order: "desc",
        style: "icon",
        invalid: [],
        layout: "fixed",
        icon: {filled: "star3", empty: "star3"}
    };
    t.presetShort("rating");
    t.presets.scroller.rating = function (h) {
        var j = a.extend({}, h.settings), d = a.extend(h.settings, w, j), f = a(this), j = this.id + "_dummy", s = a('label[for="' + this.id + '"]').attr("for", j), r = d.label !== n ? d.label : s.length ? s.text() : f.attr("name"), b = d.defaultValue, s = [[]], r = {
            keys: [],
            values: [],
            labels: [],
            label: r
        }, g = {}, P = [], i, O = !1, u, A, o, B, D, k, e = "grade" ===
        d.style ? "circle" : "icon";
        f.is("select") && (d.values = {}, a("option", f).each(function () {
            d.values[a(this).val()] = a(this).text()
        }), a("#" + j).remove());
        if (a.isArray(d.values))for (u = 0; u < d.values.length; u++)o = +d.values[u], isNaN(o) && (o = u + 1, O = !0), P.push({
            order: o,
            key: d.values[u],
            value: d.values[u]
        }); else if (a.isPlainObject(d.values))for (A in u = 1, O = !0, d.values)o = +A, isNaN(o) && (o = u), P.push({
            order: o,
            key: A,
            value: d.values[A]
        }), u++; else for (u = 1; u <= d.values; u++)P.push({order: u, key: u, value: u});
        d.showText === n && O && (d.showText = !0);
        d.icon.empty === n && (d.icon.empty = d.icon.filled);
        P.sort(function (a, b) {
            return d.order == "desc" ? b.order - a.order : a.order - b.order
        });
        k = "desc" == d.order ? P[0].order : P[P.length - 1].order;
        for (u = 0; u < P.length; u++) {
            D = P[u].order;
            o = P[u].key;
            B = P[u].value;
            O = "";
            for (A = 1; A < D + 1; A++)O += '<span class="mbsc-rating-' + e + ("circle" === e ? "" : " mbsc-ic mbsc-ic-" + d.icon.filled) + ' ">' + ("circle" == e ? A : " ") + "</span>";
            for (A = D + 1; A <= k; A++)O += '<span class="mbsc-rating-' + e + ("circle" === e ? " mbsc-rating-circle-unf" : " mbsc-ic mbsc-ic-" + (d.icon.empty ?
                d.icon.empty + " mbsc-rating-icon-unf" : "") + (d.icon.empty === d.icon.filled ? " mbsc-rating-icon-same" : "")) + '"></span>';
            b === n && (b = o);
            O += d.showText ? '<span class="mbsc-rating-txt">' + B + "</span>" : "";
            r.keys.push(o);
            r.values.push(O);
            r.labels.push(B);
            g[o] = B
        }
        f.is("select") && (i = a('<input type="text" id="' + j + '" value="' + g[f.val()] + '" class="' + d.inputClass + '" placeholder="' + (d.placeholder || "") + '" readonly />').insertBefore(f));
        s[0].push(r);
        i && h.attachShow(i);
        f.is("select") && f.hide().closest(".ui-field-contain").trigger("create");
        h.getVal = function (a) {
            a = h._hasValue ? h[a ? "_tempWheelArray" : "_wheelArray"][0] : null;
            return t.util.isNumeric(a) ? +a : a
        };
        return {
            anchor: i, wheels: s, headerText: !1, formatValue: function (a) {
                return g[a[0]]
            }, parseValue: function (a) {
                for (var d in g)if (i && d == a || !i && g[d] == a)return [d];
                return [b]
            }, validate: function (b) {
                a.each(d.invalid, function (d, e) {
                    a('.dw-li[data-val="' + e + '"]', b).removeClass("dw-v")
                })
            }, onMarkupReady: function (a) {
                a.addClass("dw-rating")
            }, onValueFill: function (a) {
                if (i) {
                    i.val(a);
                    f.val(h._tempWheelArray[0])
                }
            },
            onDestroy: function () {
                i && i.remove();
                f.show()
            }
        }
    }
})($);
(function (a) {
    var a = a.mobiscroll, n = a.presets.scroller;
    n.treelist = n.list;
    a.presetShort("list");
    a.presetShort("treelist")
})($);
(function (a, n) {
    var t = a.mobiscroll, w = t.util, h = w.isString, j = {
        batch: 40,
        inputClass: "",
        invalid: [],
        rtl: !1,
        showInput: !0,
        groupLabel: "Groups",
        checkIcon: "checkmark",
        dataText: "text",
        dataValue: "value",
        dataGroup: "group",
        dataDisabled: "disabled"
    };
    t.presetShort("select");
    t.presets.scroller.select = function (d) {
        function f() {
            var b, c, d, e, f, g = 0, h = 0, i = {};
            X = {};
            da = {};
            I = [];
            B = [];
            fa.length = 0;
            aa ? a.each(N.data, function (a, g) {
                e = g[N.dataText];
                f = g[N.dataValue];
                c = g[N.dataGroup];
                d = {value: f, text: e, index: a};
                X[f] = d;
                I.push(d);
                Y && (i[c] ===
                n ? (b = {
                    text: c,
                    value: h,
                    options: [],
                    index: h
                }, da[h] = b, i[c] = h, B.push(b), h++) : b = da[i[c]], ea && (d.index = b.options.length), d.group = i[c], b.options.push(d));
                g[N.dataDisabled] && fa.push(f)
            }) : Y ? a("optgroup", p).each(function (b) {
                da[b] = {text: this.label, value: b, options: [], index: b};
                B.push(da[b]);
                a("option", this).each(function (a) {
                    d = {value: this.value, text: this.text, index: ea ? a : g++, group: b};
                    X[this.value] = d;
                    I.push(d);
                    da[b].options.push(d);
                    this.disabled && fa.push(this.value)
                })
            }) : a("option", p).each(function (a) {
                d = {
                    value: this.value,
                    text: this.text, index: a
                };
                X[this.value] = d;
                I.push(d);
                this.disabled && fa.push(this.value)
            });
            I.length && (A = I[0].value);
            ga && (I = [], g = 0, a.each(da, function (b, c) {
                f = "__group" + b;
                d = {text: c.text, value: f, group: b, index: g++};
                X[f] = d;
                I.push(d);
                fa.push(d.value);
                a.each(c.options, function (a, b) {
                    b.index = g++;
                    I.push(b)
                })
            }))
        }

        function s(a, b, d, e, f, g, h) {
            var i = [], j = [], e = Math.max(0, (d[e] !== n ? d[e].index : 0) - M), k = Math.min(b.length - 1, e + 2 * M);
            if (c[f] !== e || H[f] !== k) {
                for (d = e; d <= k; d++)j.push(b[d].text), i.push(b[d].value);
                S[f] = !0;
                x[f] = e;
                J[f] =
                    k;
                b = {multiple: g, values: j, keys: i, label: h};
                R ? a[0][f] = b : a[f] = [b]
            } else S[f] = !1
        }

        function r(a) {
            s(a, B, da, o, e, !1, N.groupLabel)
        }

        function b(a) {
            s(a, ea ? da[o].options : I, X, L, m, V, F)
        }

        function g(b) {
            V && (b && h(b) && (b = b.split(",")), a.isArray(b) && (b = b[0]));
            L = b === n || null === b || "" === b || !X[b] ? A : b;
            E && (U = o = X[L] ? X[L].group : null)
        }

        function t(a, b) {
            var c = a ? d._tempWheelArray : d._hasValue ? d._wheelArray : null;
            return c ? N.group && b ? c : c[m] : null
        }

        function i() {
            var a, b;
            a = [];
            var c = 0;
            if (V) {
                b = [];
                for (c in v)a.push(X[c] ? X[c].text : ""), b.push(c);
                a =
                    a.join(", ")
            } else b = L, a = X[L] ? X[L].text : "";
            d._tempValue = b;
            y.val(a);
            p.val(b)
        }

        function O(a) {
            var b = a.attr("data-val"), c = a.hasClass("dw-msel");
            if (V && a.closest(".dwwl").hasClass("dwwms"))return a.hasClass("dw-v") && (c ? (a.removeClass(Q).removeAttr("aria-selected"), delete v[b]) : (a.addClass(Q).attr("aria-selected", "true"), v[b] = b)), !1;
            a.hasClass("dw-w-gr") && (k = a.attr("data-val"))
        }

        var u, A, o, B, D, k, e, q, y, I, m, L, K, U, G, S = {}, c = {}, H = {}, x = {}, J = {}, l = a.extend({}, d.settings), N = a.extend(d.settings, j, l), M = N.batch, l = N.layout ||
            (/top|bottom/.test(N.display) ? "liquid" : ""), R = "liquid" == l, p = a(this), V = N.multiple || p.prop("multiple"), Z = this.id + "_dummy";
        q = a('label[for="' + this.id + '"]').attr("for", Z);
        var F = N.label !== n ? N.label : q.length ? q.text() : p.attr("name"), Q = "dw-msel mbsc-ic mbsc-ic-" + N.checkIcon, T = N.readonly, aa = !!N.data, Y = aa ? !!N.group : a("optgroup", p).length;
        q = N.group;
        var E = Y && q && !1 !== q.groupWheel, ea = Y && q && E && !0 === q.clustered, ga = Y && (!q || !1 !== q.header && !ea), ha = p.val() || [], fa = [], v = {}, X = {}, da = {};
        N.invalid.length || (N.invalid = fa);
        E ? (e =
            0, m = 1) : (e = -1, m = 0);
        if (V) {
            p.prop("multiple", !0);
            ha && h(ha) && (ha = ha.split(","));
            for (q = 0; q < ha.length; q++)v[ha[q]] = ha[q]
        }
        f();
        g(p.val());
        a("#" + Z).remove();
        p.next().is("input.mbsc-control") ? y = p.off(".mbsc-form").next().removeAttr("tabindex") : (y = a('<input type="text" id="' + Z + '" class="mbsc-control mbsc-control-ev ' + N.inputClass + '" readonly />'), N.showInput && y.insertBefore(p));
        d.attachShow(y.attr("placeholder", N.placeholder || ""));
        p.addClass("dw-hsel").attr("tabindex", -1).closest(".ui-field-contain").trigger("create");
        i();
        d.setVal = function (a, b, c, e, f) {
            if (V) {
                a && h(a) && (a = a.split(","));
                v = w.arrayToObject(a);
                a = a ? a[0] : null
            }
            d._setVal(a, b, c, e, f)
        };
        d.getVal = function (a, b) {
            return V ? w.objectToArray(v) : t(a, b)
        };
        d.refresh = function () {
            f();
            c = {};
            H = {};
            var a = N, h = [[]];
            E && r(h);
            b(h);
            a.wheels = h;
            c[e] = x[e];
            H[e] = J[e];
            c[m] = x[m];
            H[m] = J[m];
            u = true;
            g(L);
            d._tempWheelArray = E ? [o, L] : [L];
            d._isVisible && d.changeWheel(E ? [e, m] : [m])
        };
        d.getValues = d.getVal;
        d.getValue = t;
        return {
            width: 50,
            layout: l,
            headerText: !1,
            anchor: y,
            confirmOnTap: E ? [!1, !0] : !0,
            formatValue: function (a) {
                var b,
                    c = [];
                if (V) {
                    for (b in v)c.push(X[b] ? X[b].text : "");
                    return c.join(", ")
                }
                a = a[m];
                return X[a] ? X[a].text : ""
            },
            parseValue: function (a) {
                g(a === n ? p.val() : a);
                return E ? [o, L] : [L]
            },
            onValueTap: O,
            onValueFill: i,
            onBeforeShow: function () {
                if (V && N.counter)N.headerText = function () {
                    var b = 0;
                    a.each(v, function () {
                        b++
                    });
                    return (b > 1 ? N.selectedPluralText || N.selectedText : N.selectedText).replace(/{count}/, b)
                };
                g(p.val());
                if (E)d._tempWheelArray = [o, L];
                d.refresh()
            },
            onMarkupReady: function (b) {
                b.addClass("dw-select");
                a(".dwwl" + e, b).on("mousedown touchstart",
                    function () {
                        clearTimeout(G)
                    });
                a(".dwwl" + m, b).on("mousedown touchstart", function () {
                    D || clearTimeout(G)
                });
                ga && a(".dwwl" + m, b).addClass("dw-select-gr");
                if (V) {
                    b.addClass("dwms");
                    a(".dwwl", b).on("keydown", function (b) {
                        if (b.keyCode == 32) {
                            b.preventDefault();
                            b.stopPropagation();
                            O(a(".dw-sel", this))
                        }
                    }).eq(m).attr("aria-multiselectable", "true");
                    K = a.extend({}, v)
                }
            },
            validate: function (f, g, h, i) {
                var j, l = [];
                j = d.getArrayVal(true);
                var s = j[e], p = j[m], q = a(".dw-ul", f).eq(e), t = a(".dw-ul", f).eq(m);
                c[e] > 1 && a(".dw-li", q).slice(0,
                    2).removeClass("dw-v").addClass("dw-fv");
                H[e] < B.length - 2 && a(".dw-li", q).slice(-2).removeClass("dw-v").addClass("dw-fv");
                c[m] > 1 && a(".dw-li", t).slice(0, 2).removeClass("dw-v").addClass("dw-fv");
                H[m] < (ea ? da[s].options : I).length - 2 && a(".dw-li", t).slice(-2).removeClass("dw-v").addClass("dw-fv");
                if (!u) {
                    L = p;
                    if (E) {
                        o = X[L].group;
                        if (g === n || g === e) {
                            o = +j[e];
                            D = false;
                            if (o !== U) {
                                L = da[o].options[0].value;
                                c[m] = null;
                                H[m] = null;
                                D = true;
                                N.readonly = [false, true]
                            } else N.readonly = T
                        }
                    }
                    if (Y && (/__group/.test(L) || k)) {
                        p = L = da[X[k || L].group].options[0].value;
                        k = false
                    }
                    d._tempWheelArray = E ? [s, p] : [p];
                    if (E) {
                        r(N.wheels);
                        S[e] && l.push(e)
                    }
                    b(N.wheels);
                    S[m] && l.push(m);
                    clearTimeout(G);
                    G = setTimeout(function () {
                        if (l.length) {
                            u = true;
                            D = false;
                            U = o;
                            c[e] = x[e];
                            H[e] = J[e];
                            c[m] = x[m];
                            H[m] = J[m];
                            d._tempWheelArray = E ? [s, L] : [L];
                            d.changeWheel(l, 0, g !== n)
                        }
                        if (E) {
                            g === m && d.scroll(q, e, d.getValidCell(o, q, i, false, true).v, 0.1);
                            d._tempWheelArray[e] = o
                        }
                        N.readonly = T
                    }, g === n ? 100 : h * 1E3);
                    if (l.length)return D ? false : true
                }
                if (g === n && V) {
                    j = v;
                    h = 0;
                    a(".dwwl" + m + " .dw-li", f).removeClass(Q).removeAttr("aria-selected");
                    for (h in j)a(".dwwl" + m + ' .dw-li[data-val="' + j[h] + '"]', f).addClass(Q).attr("aria-selected", "true")
                }
                ga && a('.dw-li[data-val^="__group"]', f).addClass("dw-w-gr");
                a.each(N.invalid, function (b, c) {
                    a('.dw-li[data-val="' + c + '"]', t).removeClass("dw-v dw-fv")
                });
                u = false
            },
            onValidated: function () {
                L = d._tempWheelArray[m]
            },
            onClear: function (b) {
                v = {};
                y.val("");
                a(".dwwl" + m + " .dw-li", b).removeClass(Q).removeAttr("aria-selected")
            },
            onCancel: function () {
                !d.live && V && (v = a.extend({}, K))
            },
            onDestroy: function () {
                y.hasClass("mbsc-control") ||
                y.remove();
                p.removeClass("dw-hsel").removeAttr("tabindex")
            }
        }
    }
})($);
(function (a) {
    a.each(["date", "time", "datetime"], function (n, t) {
        a.mobiscroll.presetShort(t)
    })
})($);
(function (a) {
    var n = a.mobiscroll, t = n.presets.scroller, w = {
        min: 0,
        max: 100,
        defUnit: "km",
        units: "m,km,in,ft,yd,mi".split(",")
    }, h = {
        mm: 0.001,
        cm: 0.01,
        dm: 0.1,
        m: 1,
        dam: 10,
        hm: 100,
        km: 1E3,
        "in": 0.0254,
        ft: 0.3048,
        yd: 0.9144,
        ch: 20.1168,
        fur: 201.168,
        mi: 1609.344,
        lea: 4828.032
    };
    n.presetShort("distance");
    t.distance = function (j) {
        var d = a.extend({}, w, j.settings), f = [], n, r;
        if (d.units)for (r = 0; r < d.units.length; r++)n = d.units[r], h[n] && f.push(n);
        a.extend(j.settings, d, {
            sign: !1, units: f, unitNames: null, convert: function (a, d, f) {
                return a * h[d] /
                    h[f]
            }
        });
        return t.measurement.call(this, j)
    }
})($);
(function (a) {
    var n = a.mobiscroll, t = n.presets.scroller, w = {
        min: 0,
        max: 1E3,
        defUnit: "kg",
        units: ["g", "kg", "oz", "lb"],
        unitNames: {tlong: "t (long)", tshort: "t (short)"}
    }, h = {
        mg: 0.001,
        cg: 0.01,
        dg: 0.1,
        g: 1,
        dag: 10,
        hg: 100,
        kg: 1E3,
        t: 1E6,
        drc: 1.7718452,
        oz: 28.3495,
        lb: 453.59237,
        st: 6350.29318,
        qtr: 12700.58636,
        cwt: 50802.34544,
        tlong: 1016046.9088,
        tshort: 907184.74
    };
    n.presetShort("mass");
    t.mass = function (j) {
        var d = a.extend({}, w, j.settings), f = [], n = [], r, b;
        if (d.units)for (b = 0; b < d.units.length; b++)r = d.units[b], h[r] && (f.push(r), n.push(d.unitNames[r] ||
            r));
        a.extend(j.settings, d, {
            sign: !1, units: f, unitNames: n, convert: function (a, b, d) {
                return a * h[b] / h[d]
            }
        });
        return t.measurement.call(this, j)
    }
})($);
(function (a) {
    var n = a.mobiscroll, t = n.presets.scroller, w = {
        min: 0,
        max: 100,
        defUnit: "N",
        units: ["N", "kp", "lbf", "pdl"]
    }, h = {N: 1, kp: 9.80665, lbf: 4.448222, pdl: 0.138255};
    n.presetShort("force");
    t.force = function (j) {
        var d = a.extend({}, w, j.settings), f = [], n, r;
        if (d.units)for (r = 0; r < d.units.length; r++)n = d.units[r], h[n] && f.push(n);
        a.extend(j.settings, d, {
            sign: !1, units: f, unitNames: null, convert: function (a, d, f) {
                return a * h[d] / h[f]
            }
        });
        return t.measurement.call(this, j)
    }
})($);
(function (a) {
    var n = a.mobiscroll, t = n.presets.scroller, w = {
        min: -20,
        max: 40,
        defUnit: "c",
        units: ["c", "k", "f", "r"],
        unitNames: {c: "\u00b0C", k: "K", f: "\u00b0F", r: "\u00b0R"}
    }, h = {c: 1, k: 1, f: 1, r: 1}, j = {
        c2k: function (a) {
            return a + 273.15
        }, c2f: function (a) {
            return 9 * a / 5 + 32
        }, c2r: function (a) {
            return 9 * (a + 273.15) / 5
        }, k2c: function (a) {
            return a - 273.15
        }, k2f: function (a) {
            return 9 * a / 5 - 459.67
        }, k2r: function (a) {
            return 9 * a / 5
        }, f2c: function (a) {
            return 5 * (a - 32) / 9
        }, f2k: function (a) {
            return 5 * (a + 459.67) / 9
        }, f2r: function (a) {
            return a + 459.67
        }, r2c: function (a) {
            return 5 *
                (a - 491.67) / 9
        }, r2k: function (a) {
            return 5 * a / 9
        }, r2f: function (a) {
            return a - 459.67
        }
    };
    n.presetShort("temperature");
    t.temperature = function (d) {
        var f = a.extend({}, w, d.settings), n = [], r = [], b, g;
        if (f.units)for (g = 0; g < f.units.length; g++)b = f.units[g], h[b] && (n.push(b), r.push(f.unitNames[b] || b));
        a.extend(d.settings, f, {
            sign: !0, units: n, unitNames: r, convert: function (a, b, d) {
                return j[b + "2" + d](a)
            }
        });
        return t.measurement.call(this, d)
    }
})($);
(function (a) {
    var n = a.mobiscroll, t = n.presets.scroller, w = {
        min: 0,
        max: 100,
        defUnit: "kph",
        units: ["kph", "mph", "mps", "fps", "knot"],
        unitNames: {kph: "km/h", mph: "mi/h", mps: "m/s", fps: "ft/s", knot: "knot"}
    }, h = {kph: 1, mph: 1.60934, mps: 3.6, fps: 1.09728, knot: 1.852};
    n.presetShort("speed");
    t.speed = function (j) {
        var d = a.extend({}, w, j.settings), f = [], n = [], r, b;
        if (d.units)for (b = 0; b < d.units.length; b++)r = d.units[b], h[r] && (f.push(r), n.push(d.unitNames[r] || r));
        a.extend(j.settings, d, {
            sign: !1, units: f, unitNames: n, convert: function (a, b,
                                                                 d) {
                return a * h[b] / h[d]
            }
        });
        return t.measurement.call(this, j)
    }
})($);
