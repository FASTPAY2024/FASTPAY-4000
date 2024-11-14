(function() {
    "use strict";
    var n = {
            6741: function(n, e, t) {
                var r = t(9963),
                    o = t(6086),
                    u = t(6252);
                const i = {
                    id: "nav"
                };

                function a(n, e) {
                    const t = (0, u.up)("router-view");
                    return (0, u.wg)(), (0, u.iD)("section", i, [(0, u.Wm)(t)])
                }
                var c = t(3744);
                const f = {},
                    p = (0, c.Z)(f, [
                        ["render", a]
                    ]);
                var l = p,
                    d = t(2201),
                    s = [{
                        path: "/pullUpLink",
                        name: "pullUpLink",
                        component: function() {
                            return t.e(443).then(t.bind(t, 575))
                        }
                    }, {
                        path: "/repayToApp",
                        name: "repayToApp",
                        component: function() {
                            return t.e(443).then(t.bind(t, 8005))
                        }
                    }, {
                        path: "/scanqrcode",
                        name: "scanqrcode",
                        component: function() {
                            return t.e(443).then(t.bind(t, 6936))
                        }
                    }, {
                        path: "/copycard",
                        name: "copycard",
                        component: function() {
                            return t.e(443).then(t.bind(t, 9232))
                        }
                    }, {
                        path: "/ccnk",
                        name: "ccnk",
                        component: function() {
                            return t.e(443).then(t.bind(t, 2445))
                        }
                    }, {
                        path: "/upiandcard",
                        name: "upiandcard",
                        component: function() {
                            return t.e(443).then(t.bind(t, 3928))
                        }
                    }, {
                        path: "/upint",
                        name: "upint",
                        component: function() {
                            return t.e(443).then(t.bind(t, 6650))
                        }
                    }, {
                        path: "/upicpandqr",
                        name: "upicpandqr",
                        component: function() {
                            return t.e(443).then(t.bind(t, 2662))
                        }
                    }, {
                        path: "/pullQrCp",
                        name: "pullQrCp",
                        component: function() {
                            return t.e(443).then(t.bind(t, 9761))
                        }
                    }, {
                        path: "/pullQrCp2",
                        name: "pullQrCp2",
                        component: function() {
                            return t.e(443).then(t.bind(t, 6486))
                        }
                    }],
                    h = (0, d.p7)({
                        history: (0, d.PO)(""),
                        routes: s
                    }),
                    m = h,
                    v = (t(9763), t(492), t(9517), t(8374), (0, r.ri)(l));
                v.use((0, o.WB)()).use(m).mount("#app")
            }
        },
        e = {};

    function t(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var u = e[r] = {
            exports: {}
        };
        return n[r].call(u.exports, u, u.exports, t), u.exports
    }
    t.m = n,
        function() {
            var n = [];
            t.O = function(e, r, o, u) {
                if (!r) {
                    var i = 1 / 0;
                    for (p = 0; p < n.length; p++) {
                        r = n[p][0], o = n[p][1], u = n[p][2];
                        for (var a = !0, c = 0; c < r.length; c++)(!1 & u || i >= u) && Object.keys(t.O).every((function(n) {
                            return t.O[n](r[c])
                        })) ? r.splice(c--, 1) : (a = !1, u < i && (i = u));
                        if (a) {
                            n.splice(p--, 1);
                            var f = o();
                            void 0 !== f && (e = f)
                        }
                    }
                    return e
                }
                u = u || 0;
                for (var p = n.length; p > 0 && n[p - 1][2] > u; p--) n[p] = n[p - 1];
                n[p] = [r, o, u]
            }
        }(),
        function() {
            t.n = function(n) {
                var e = n && n.__esModule ? function() {
                    return n["default"]
                } : function() {
                    return n
                };
                return t.d(e, {
                    a: e
                }), e
            }
        }(),
        function() {
            t.d = function(n, e) {
                for (var r in e) t.o(e, r) && !t.o(n, r) && Object.defineProperty(n, r, {
                    enumerable: !0,
                    get: e[r]
                })
            }
        }(),
        function() {
            t.f = {}, t.e = function(n) {
                return Promise.all(Object.keys(t.f).reduce((function(e, r) {
                    return t.f[r](n, e), e
                }), []))
            }
        }(),
        function() {
            t.u = function(n) {
                return "js/about.4d2af733.js"
            }
        }(),
        function() {
            t.miniCssF = function(n) {
                return "css/about.3da65cb6.css"
            }
        }(),
        function() {
            t.g = function() {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (n) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function() {
            t.o = function(n, e) {
                return Object.prototype.hasOwnProperty.call(n, e)
            }
        }(),
        function() {
            var n = {},
                e = "vue3-vant4-h5-template-ts:";
            t.l = function(r, o, u, i) {
                if (n[r]) n[r].push(o);
                else {
                    var a, c;
                    if (void 0 !== u)
                        for (var f = document.getElementsByTagName("script"), p = 0; p < f.length; p++) {
                            var l = f[p];
                            if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == e + u) {
                                a = l;
                                break
                            }
                        }
                    a || (c = !0, a = document.createElement("script"), a.charset = "utf-8", a.timeout = 120, t.nc && a.setAttribute("nonce", t.nc), a.setAttribute("data-webpack", e + u), a.src = r), n[r] = [o];
                    var d = function(e, t) {
                            a.onerror = a.onload = null, clearTimeout(s);
                            var o = n[r];
                            if (delete n[r], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((function(n) {
                                    return n(t)
                                })), e) return e(t)
                        },
                        s = setTimeout(d.bind(null, void 0, {
                            type: "timeout",
                            target: a
                        }), 12e4);
                    a.onerror = d.bind(null, a.onerror), a.onload = d.bind(null, a.onload), c && document.head.appendChild(a)
                }
            }
        }(),
        function() {
            t.r = function(n) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(n, "__esModule", {
                    value: !0
                })
            }
        }(),
        function() {
            t.p = ""
        }(),
        function() {
            if ("undefined" !== typeof document) {
                var n = function(n, e, t, r, o) {
                        var u = document.createElement("link");
                        u.rel = "stylesheet", u.type = "text/css";
                        var i = function(t) {
                            if (u.onerror = u.onload = null, "load" === t.type) r();
                            else {
                                var i = t && ("load" === t.type ? "missing" : t.type),
                                    a = t && t.target && t.target.href || e,
                                    c = new Error("Loading CSS chunk " + n + " failed.\n(" + a + ")");
                                c.code = "CSS_CHUNK_LOAD_FAILED", c.type = i, c.request = a, u.parentNode.removeChild(u), o(c)
                            }
                        };
                        return u.onerror = u.onload = i, u.href = e, t ? t.parentNode.insertBefore(u, t.nextSibling) : document.head.appendChild(u), u
                    },
                    e = function(n, e) {
                        for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                            var o = t[r],
                                u = o.getAttribute("data-href") || o.getAttribute("href");
                            if ("stylesheet" === o.rel && (u === n || u === e)) return o
                        }
                        var i = document.getElementsByTagName("style");
                        for (r = 0; r < i.length; r++) {
                            o = i[r], u = o.getAttribute("data-href");
                            if (u === n || u === e) return o
                        }
                    },
                    r = function(r) {
                        return new Promise((function(o, u) {
                            var i = t.miniCssF(r),
                                a = t.p + i;
                            if (e(i, a)) return o();
                            n(r, a, null, o, u)
                        }))
                    },
                    o = {
                        143: 0
                    };
                t.f.miniCss = function(n, e) {
                    var t = {
                        443: 1
                    };
                    o[n] ? e.push(o[n]) : 0 !== o[n] && t[n] && e.push(o[n] = r(n).then((function() {
                        o[n] = 0
                    }), (function(e) {
                        throw delete o[n], e
                    })))
                }
            }
        }(),
        function() {
            var n = {
                143: 0
            };
            t.f.j = function(e, r) {
                var o = t.o(n, e) ? n[e] : void 0;
                if (0 !== o)
                    if (o) r.push(o[2]);
                    else {
                        var u = new Promise((function(t, r) {
                            o = n[e] = [t, r]
                        }));
                        r.push(o[2] = u);
                        var i = t.p + t.u(e),
                            a = new Error,
                            c = function(r) {
                                if (t.o(n, e) && (o = n[e], 0 !== o && (n[e] = void 0), o)) {
                                    var u = r && ("load" === r.type ? "missing" : r.type),
                                        i = r && r.target && r.target.src;
                                    a.message = "Loading chunk " + e + " failed.\n(" + u + ": " + i + ")", a.name = "ChunkLoadError", a.type = u, a.request = i, o[1](a)
                                }
                            };
                        t.l(i, c, "chunk-" + e, e)
                    }
            }, t.O.j = function(e) {
                return 0 === n[e]
            };
            var e = function(e, r) {
                    var o, u, i = r[0],
                        a = r[1],
                        c = r[2],
                        f = 0;
                    if (i.some((function(e) {
                            return 0 !== n[e]
                        }))) {
                        for (o in a) t.o(a, o) && (t.m[o] = a[o]);
                        if (c) var p = c(t)
                    }
                    for (e && e(r); f < i.length; f++) u = i[f], t.o(n, u) && n[u] && n[u][0](), n[u] = 0;
                    return t.O(p)
                },
                r = self["webpackChunkvue3_vant4_h5_template_ts"] = self["webpackChunkvue3_vant4_h5_template_ts"] || [];
            r.forEach(e.bind(null, 0)), r.push = e.bind(null, r.push.bind(r))
        }();
    var r = t.O(void 0, [998], (function() {
        return t(6741)
    }));
    r = t.O(r)
})();
//# sourceMappingURL=app.202e040c.js.map