(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["album"], {
    "0312": function(t, e, n) {},
    "0778": function(t, e, n) {},
    "0965": function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("transition", {
                attrs: {
                    name: "slideInRight"
                }
            }, [n("section", {
                staticClass: "album-component-scrollPosition"
            }, [t._v(t._s(t.passCount) + " / " + t._s(t.count))])])
        }
          , i = []
          , o = (n("c5f6"),
        {
            name: "scrollPosition",
            props: {
                count: {
                    type: Number,
                    default: 0
                },
                scrollTop: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    passCount: 0,
                    allPhotoPosition: []
                }
            },
            mounted: function() {
                this.compute()
            },
            methods: {
                compute: function() {
                    var t = this.getScreenBottom();
                    this.passCount = this.allPhotoPosition.filter((function(e) {
                        return e < t
                    }
                    )).length
                },
                getScreenBottom: function() {
                    return window.innerHeight + this.scrollTop
                },
                getAllPhotoPosition: function() {
                    var t = document.getElementsByClassName("album-list")[0]
                      , e = [];
                    e = t.getElementsByClassName("album-component-videoList").length ? t.getElementsByClassName("component-videoPlayer") : t.getElementsByClassName("component-imageBox");
                    for (var n = t.offsetTop, a = [], i = 0, o = e.length; i < o; i++)
                        a.push(e[i].offsetTop + n);
                    this.allPhotoPosition = a,
                    this.compute()
                }
            }
        })
          , s = o
          , c = (n("d6dd"),
        n("2877"))
          , r = Object(c["a"])(s, a, i, !1, null, null, null);
        e["a"] = r.exports
    },
    "098e": function(t, e, n) {
        "use strict";
        var a = n("8c23")
          , i = n.n(a);
        i.a
    },
    "0aa8": function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("sideButton", {
                attrs: {
                    icon: "sort"
                },
                nativeOn: {
                    click: function(e) {
                        return t.change(e)
                    }
                }
            }, [t._v(t._s(t.sort ? t.$t("album.sideBar.inverse") : t.$t("album.sideBar.order")))])
        }
          , i = []
          , o = (n("55dd"),
        n("631e"))
          , s = {
            name: "sort",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            methods: {
                change: function() {
                    this.album.sort % 2 === 0 ? this.album.sort-- : this.album.sort++,
                    this.$emit("click", this.album.sort)
                }
            },
            computed: {
                sort: function() {
                    return this.album.sort % 2 === 0
                }
            },
            components: {
                sideButton: o["a"]
            }
        }
          , c = s
          , r = n("2877")
          , l = Object(r["a"])(c, a, i, !1, null, null, null);
        e["a"] = l.exports
    },
    "0d2c": function(t, e, n) {
        "use strict";
        var a = n("976f")
          , i = n.n(a);
        i.a
    },
    "0d44": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "simpleImg"
            }, [t.photos ? n("bigImage", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.bigImageStatus,
                    expression: "bigImageStatus"
                }],
                attrs: {
                    data: t.photos
                },
                on: {
                    photoInit: t.photoInit,
                    close: t.backAlbum
                },
                scopedSlots: t._u([{
                    key: "header",
                    fn: function(e) {
                        return [t.album.photoInfo ? n("photoInfo", {
                            attrs: {
                                album: t.album,
                                slotProps: e
                            }
                        }) : t._e()]
                    }
                }, {
                    key: "default",
                    fn: function(e) {
                        return [n("bigImageLayer", {
                            attrs: {
                                album: t.album,
                                nowClassify: t.nowClassify,
                                slotProps: e,
                                comments: t.comments
                            }
                        })]
                    }
                }], null, !1, 2933702835),
                model: {
                    value: t.bigImageIndex,
                    callback: function(e) {
                        t.bigImageIndex = e
                    },
                    expression: "bigImageIndex"
                }
            }) : t._e()], 1)
        }
          , i = []
          , o = (n("8e6e"),
        n("456d"),
        n("7514"),
        n("ac6a"),
        n("bd86"))
          , s = (n("96cf"),
        n("3b8d"))
          , c = n("2f62")
          , r = n("6937")
          , l = n("0c4f")
          , u = n("83a8")
          , h = n("5985")
          , m = n("a0d9")
          , d = n("fa89")
          , g = n("6e02");
        function p(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function f(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? p(n, !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var b = {
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                hasMore: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    nowClassify: null,
                    bigImageIndex: 0,
                    userInfo: this.getUserInfo(),
                    bigImageStatus: !0,
                    photos: null,
                    comments: [],
                    albumId: this.$route.params.id,
                    sepId: this.$route.params.sep,
                    pid: this.$route.params.pid
                }
            },
            mounted: function() {
                var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                    var e, n;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return e = this.album.findClassify(this.$route.params.sep),
                                this.nowClassify = e || this.album.classify[0],
                                this.getComment(),
                                t.next = 5,
                                this.getPhoto();
                            case 5:
                                n = t.sent,
                                this.userInfo.token && this.album.isCharge && this.getPayPhoto(n),
                                this.$emit("loadingScore"),
                                this.$emit("loadingScore"),
                                Object(d["a"])({
                                    title: this.album.share.title,
                                    imgUrl: Object(g["a"])(this.photos[0].msrc, {
                                        w: 200,
                                        h: 200,
                                        m: "fill"
                                    }),
                                    desc: this.album.share.desc,
                                    link: "".concat(location.origin, "/album/sharimg/").concat(this.album.id, "/").concat(this.nowClassify.id, "/").concat(this.photos[0].id)
                                });
                            case 10:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                function e() {
                    return t.apply(this, arguments)
                }
                return e
            }(),
            methods: f({}, Object(c["b"])(["getUserInfo"]), {
                getComment: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.$parent.getComments();
                                case 2:
                                    this.comments = t.sent;
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                photoInit: function(t) {
                    t.faceState || this.$API.v4cFfl(this.album.id, t.id, this.$parent.version.fpl[this.nowClassify.id]).then((function(e) {
                        var n = [];
                        e.d.forEach((function(t) {
                            n.push(new r["a"](t))
                        }
                        )),
                        t.faceList = n,
                        t.faceState = !0
                    }
                    ))
                },
                getPhoto: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e, n, a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e = this.$parent.version.fpl[this.sepId],
                                    t.next = 3,
                                    this.$API.v4Fp(this.pid, e);
                                case 3:
                                    if (n = t.sent,
                                    0 !== n.e) {
                                        t.next = 9;
                                        break
                                    }
                                    return a = new m["a"](n.d),
                                    a.index = 0,
                                    this.photos = [a],
                                    t.abrupt("return", a);
                                case 9:
                                    300019 === n.e && this.$router.push("/album/".concat(this.albumId, "/").concat(this.sepId, "/"));
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                backAlbum: function() {
                    this.$router.push("/album/".concat(this.albumId, "/").concat(this.sepId, "/")),
                    this.bigImageStatus = !1
                },
                getPayPhoto: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e) {
                        var n, a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.$API.v4oFppl(this.albumId, this.userInfo.token);
                                case 2:
                                    n = t.sent,
                                    0 === n.e && (a = n.d.find((function(t) {
                                        return t.pc === e.id
                                    }
                                    )),
                                    a && (e.isBuy = !0,
                                    e.osrc = a.ol));
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }),
            components: {
                bigImageLayer: h["a"],
                bigImage: l["a"],
                photoInfo: u["a"]
            }
        }
          , v = b
          , w = (n("3b87"),
        n("2877"))
          , y = Object(w["a"])(v, a, i, !1, null, null, null);
        e["default"] = y.exports
    },
    "0d58d": function(t, e, n) {},
    "0f92": function(t, e, n) {
        "use strict";
        var a = n("94d8")
          , i = n.n(a);
        i.a
    },
    "117e": function(t, e, n) {},
    "16d8": function(t, e, n) {},
    "180f": function(t, e, n) {
        "use strict";
        var a = n("636f")
          , i = n.n(a);
        i.a
    },
    1840: function(t, e, n) {
        "use strict";
        var a = n("cfac")
          , i = n.n(a);
        i.a
    },
    "1cc2": function(t, e, n) {
        "use strict";
        var a = n("9c02")
          , i = n.n(a);
        i.a
    },
    "213c": function(t, e, n) {},
    2410: function(t, e, n) {
        "use strict";
        var a = n("a3d0")
          , i = n.n(a);
        i.a
    },
    2783: function(t, e, n) {},
    "2b9a": function(t, e, n) {
        t.exports = n.p + "img/pecket-littleShow.b243a7eb.png"
    },
    "2d25": function(t, e, n) {
        "use strict";
        var a = n("a36a")
          , i = n.n(a);
        i.a
    },
    "2dcf": function(t, e, n) {
        "use strict";
        var a = n("117e")
          , i = n.n(a);
        i.a
    },
    "33d3": function(t, e, n) {
        "use strict";
        var a = n("a164")
          , i = n.n(a);
        i.a
    },
    "36bd": function(t, e, n) {
        "use strict";
        var a = n("4bf8")
          , i = n("77f1")
          , o = n("9def");
        t.exports = function(t) {
            var e = a(this)
              , n = o(e.length)
              , s = arguments.length
              , c = i(s > 1 ? arguments[1] : void 0, n)
              , r = s > 2 ? arguments[2] : void 0
              , l = void 0 === r ? n : i(r, n);
            while (l > c)
                e[c++] = t;
            return e
        }
    },
    3701: function(t, e, n) {
        "use strict";
        var a = n("cf0c")
          , i = n.n(a);
        i.a
    },
    "37ee": function(t, e, n) {},
    "3b2b": function(t, e, n) {
        var a = n("7726")
          , i = n("5dbc")
          , o = n("86cc").f
          , s = n("9093").f
          , c = n("aae3")
          , r = n("0bfb")
          , l = a.RegExp
          , u = l
          , h = l.prototype
          , m = /a/g
          , d = /a/g
          , g = new l(m) !== m;
        if (n("9e1e") && (!g || n("79e5")((function() {
            return d[n("2b4c")("match")] = !1,
            l(m) != m || l(d) == d || "/a/i" != l(m, "i")
        }
        )))) {
            l = function(t, e) {
                var n = this instanceof l
                  , a = c(t)
                  , o = void 0 === e;
                return !n && a && t.constructor === l && o ? t : i(g ? new u(a && !o ? t.source : t,e) : u((a = t instanceof l) ? t.source : t, a && o ? r.call(t) : e), n ? this : h, l)
            }
            ;
            for (var p = function(t) {
                t in l || o(l, t, {
                    configurable: !0,
                    get: function() {
                        return u[t]
                    },
                    set: function(e) {
                        u[t] = e
                    }
                })
            }, f = s(u), b = 0; f.length > b; )
                p(f[b++]);
            h.constructor = l,
            l.prototype = h,
            n("2aba")(a, "RegExp", l)
        }
        n("7a56")("RegExp")
    },
    "3b87": function(t, e, n) {
        "use strict";
        var a = n("c1ab")
          , i = n.n(a);
        i.a
    },
    4064: function(t, e, n) {},
    "438b": function(t, e, n) {
        t.exports = n.p + "img/noLive.69dfa649.png"
    },
    "44e3": function(t, e, n) {},
    4736: function(t, e, n) {
        "use strict";
        var a = n("bf75")
          , i = n.n(a);
        i.a
    },
    "4a22": function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("ul", {
                ref: "navigation",
                staticClass: "album-component-navigation display-horizontal"
            }, [t._l(t.album.navigationItem, (function(e, a) {
                return ["comment" !== e || "comment" === e && t.album.isShowLoginAboutComponent ? n("li", {
                    key: a,
                    staticClass: "album-component-navigation-item",
                    attrs: {
                        "primary-color": t.value === e
                    },
                    on: {
                        click: function(n) {
                            return t.selected(e, a)
                        }
                    }
                }, [t._v("\n      " + t._s(t.$t("album.navigation." + e)) + "\n      "), t.value === e ? n("div", {
                    staticClass: "album-component-navigation-item-hr",
                    attrs: {
                        "primary-background": ""
                    }
                }) : t._e()]) : t._e()]
            }
            )), t._t("default")], 2)
        }
          , i = []
          , o = {
            name: "navigation",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                value: {
                    type: String
                }
            },
            data: function() {
                return {
                    oldValue: this.value
                }
            },
            methods: {
                selected: function(t, e) {
                    var n = this.$refs.navigation
                      , a = n.childNodes[e]
                      , i = a.offsetLeft - n.clientWidth / 2 + a.clientWidth / 2;
                    Math.animation(n.scrollLeft, i, 300, "Cubic.easeOut", (function(t) {
                        n.scrollLeft = t
                    }
                    )),
                    this.$emit("input", t, this.oldValue)
                }
            },
            watch: {
                value: function() {
                    this.oldValue = this.value
                }
            }
        }
          , s = o
          , c = (n("4db3"),
        n("2877"))
          , r = Object(c["a"])(s, a, i, !1, null, null, null);
        e["a"] = r.exports
    },
    "4db3": function(t, e, n) {
        "use strict";
        var a = n("7d6e")
          , i = n.n(a);
        i.a
    },
    "4f7d": function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return t.album.albumInfoSwitch.title ? n("section", {
                staticClass: "album-component-albumInfo"
            }, [n("h2", {
                staticClass: "album-component-albumInfo-title text-overflow-2 text-pre",
                on: {
                    click: function(e) {
                        t.showDetail = !0
                    }
                }
            }, [t._v(t._s(t.album.titleLanguage[t.$i18n.locale]))]), n("div", {
                staticClass: "album-component-albumInfo-detail",
                on: {
                    click: function(e) {
                        t.showDetail = !0
                    }
                }
            }, [t._v(t._s(t.$t("album.albumInfo.detail")) + " "), n("i", {
                staticClass: "iconfont icon-right"
            })]), t.album.albumInfoSwitch.view ? n("div", {
                staticClass: "album-component-albumInfo-pageviews",
                domProps: {
                    innerHTML: t._s(t.$t("album.albumInfo.pageviews", {
                        count: t.album.pageviews
                    }))
                }
            }) : t._e(), t.album.albumInfoSwitch.date ? n("div", {
                staticClass: "text-overflow album-component-albumInfo-content",
                on: {
                    click: function(e) {
                        t.showDetail = !0
                    }
                }
            }, [n("i", {
                staticClass: "iconfont icon-time"
            }), n("span", [t._v(t._s(t.formatDate(t.album.startDate, "YYYY.MM.DD")))]), t.album.startDate !== t.album.endDate ? n("span", [t._v("-" + t._s(t.formatDate(t.album.endDate, "YYYY.MM.DD")))]) : t._e()]) : t._e(), t.album.albumInfoSwitch.addr ? n("div", {
                staticClass: "text-overflow album-component-albumInfo-content",
                on: {
                    click: function(e) {
                        t.showDetail = !0
                    }
                }
            }, [n("i", {
                staticClass: "iconfont icon-location"
            }), t.album.addrDetails ? n("span", [t._v(t._s(t.album.addrDetails))]) : t._e(), t.album.addrDetails ? t._e() : n("span", [t._v(t._s(t.album.city.result.language[t.$i18n.locale]))])]) : t._e(), n("detail", {
                attrs: {
                    album: t.album
                },
                model: {
                    value: t.showDetail,
                    callback: function(e) {
                        t.showDetail = e
                    },
                    expression: "showDetail"
                }
            })], 1) : t._e()
        }
          , i = []
          , o = n("d18c")
          , s = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("section", [n("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.value ? n("div", {
                staticClass: "tool-layout",
                staticStyle: {
                    "z-index": "2"
                },
                on: {
                    touchmove: function(t) {
                        t.preventDefault()
                    },
                    click: function(e) {
                        return t.$emit("input", !1)
                    }
                }
            }) : t._e()]), n("transition", {
                attrs: {
                    name: "slideInBottom"
                }
            }, [t.value ? n("div", {
                staticClass: "album-component-albumInfoDetail"
            }, [n("div", {
                on: {
                    touchmove: function(t) {
                        t.preventDefault()
                    }
                }
            }, [n("div", {
                staticClass: "tool-close album-component-albumInfoDetail-close",
                on: {
                    click: function(e) {
                        return t.$emit("input", !1)
                    }
                }
            }, [n("i", {
                staticClass: "iconfont icon-bottom"
            })]), n("h2", {
                staticClass: "album-component-albumInfoDetail-title text-pre"
            }, [t._v(t._s(t.album.title))]), t.album.albumInfoSwitch.view ? n("div", {
                staticClass: "album-component-albumInfoDetail-pageviews",
                domProps: {
                    innerHTML: t._s(t.$t("album.albumInfo.pageviews", {
                        count: t.album.pageviews
                    }))
                }
            }) : t._e(), t.album.albumInfoSwitch.date ? n("div", {
                staticClass: "album-component-albumInfoDetail-content"
            }, [n("i", {
                staticClass: "iconfont icon-time"
            }), n("span", [t._v(t._s(t.formatDate(t.album.startDate, "YYYY.MM.DD")))]), t.album.startDate !== t.album.endDate ? n("span", [t._v("-" + t._s(t.formatDate(t.album.endDate, "YYYY.MM.DD")))]) : t._e()]) : t._e(), t.album.albumInfoSwitch.addr ? n("div", {
                staticClass: "album-component-albumInfoDetail-content"
            }, [n("div", {
                staticClass: "album-component-albumInfoDetail-content-left"
            }, [n("i", {
                staticClass: "iconfont icon-location"
            }), t.album.addrDetails ? n("span", [t._v(t._s(t.album.addrDetails))]) : t._e(), t.album.addrDetails ? t._e() : n("span", [t._v(t._s(t.album.city.result.language[t.$i18n.locale]))])]), t.album.gcjLongitude && t.album.gcjLatitude ? n("div", {
                staticClass: "album-component-albumInfoDetail-content-right"
            }, [n("a", {
                staticClass: "album-component-albumInfoDetail-content-geolocation",
                attrs: {
                    href: "https://uri.amap.com/marker?position=" + t.album.gcjLongitude + "," + t.album.gcjLatitude + "&name=" + t.album.addr + "&src=mypage&coordinate=gaode&callnative=0",
                    "primary-color": ""
                }
            }, [n("i", {
                staticClass: "iconfont icon-geolocation"
            }), t._v(t._s(t.$t("album.albumInfo.directions")) + "\n            ")])]) : t._e()]) : t._e(), n("div", {
                staticClass: "album-component-albumInfoDetail-hr"
            }), t.album.detail ? n("div", {
                staticClass: "album-component-albumInfoDetail-detailTitle"
            }, [t._v(t._s(t.$t("album.albumInfo.introduction")))]) : t._e()]), t.album.detail ? n("div", {
                staticClass: "scroll album-component-albumInfoDetail-detailContent"
            }, [n("pre", {
                staticClass: "album-component-albumInfoDetail-detailContent-text"
            }, [t._v(t._s(t.album.detail))])]) : t._e()]) : t._e()])], 1)
        }
          , c = []
          , r = {
            name: "albumInfoDetail",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                value: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    formatDate: o["a"]
                }
            }
        }
          , l = r
          , u = (n("f137"),
        n("2877"))
          , h = Object(u["a"])(l, s, c, !1, null, null, null)
          , m = h.exports
          , d = {
            name: "albumInfo",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    formatDate: o["a"],
                    showDetail: !1
                }
            },
            components: {
                detail: m
            }
        }
          , g = d
          , p = (n("d878"),
        Object(u["a"])(g, a, i, !1, null, null, null));
        e["a"] = p.exports
    },
    "524d": function(t, e, n) {},
    5372: function(t, e, n) {},
    "549c": function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.value ? n("section", {
                staticClass: "tool-layout album-component-qrShare",
                on: {
                    touchmove: function(t) {
                        t.stopPropagation()
                    }
                }
            }, [n("div", {
                staticClass: "tool-content album-component-qrShare-content"
            }, [n("img", {
                staticClass: "album-component-qrShare-image download",
                attrs: {
                    src: t.qrSrc
                }
            }), n("button", {
                staticClass: "tool-close album-component-qrShare-close",
                on: {
                    click: function(e) {
                        return t.$emit("input", !t.value)
                    }
                }
            }, [n("i", {
                staticClass: "iconfont icon-close"
            })])])]) : t._e()])
        }
          , i = []
          , o = (n("96cf"),
        n("3b8d"))
          , s = n("4a37")
          , c = n.n(s)
          , r = n("f53f")
          , l = {
            name: "qrShare",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                value: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    qrImg: "",
                    qrSrc: ""
                }
            },
            mounted: function() {
                var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                Object(r["a"])(c.a.getQrBase64("".concat(location.origin, "/q/").concat(this.album.shorturl), {
                                    correctLevel: window.QRErrorCorrectLevel.M,
                                    width: 314,
                                    height: 314,
                                    foreground: "#333"
                                }));
                            case 2:
                                this.qrImg = t.sent;
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                function e() {
                    return t.apply(this, arguments)
                }
                return e
            }(),
            methods: {
                fontWidth: function(t, e) {
                    var n = document.createElement("canvas").getContext("2d");
                    return n.lineWidth = 6,
                    n.font = e,
                    n.measureText(t).width
                },
                createQR: function() {
                    var t = document.createElement("canvas");
                    t.width = 570,
                    t.height = 664;
                    var e = t.getContext("2d");
                    e.fillStyle = "#2998FF",
                    e.fillRect(0, 0, 570, 112),
                    e.fillStyle = "#FFF",
                    e.lineWidth = 6,
                    e.font = "32px Arial",
                    e.fillText(this.$t("album.qrShare.albumQr"), (570 - this.fontWidth(this.$t("album.qrShare.albumQr"), e.font)) / 2, 66),
                    e.fillStyle = "#FFF",
                    e.fillRect(0, 112, 570, 664),
                    e.drawImage(this.qrImg, 0, 0, 314, 314, 128, 170, 314, 314),
                    e.fillStyle = "#333",
                    e.font = "28px Arial",
                    e.fillText(this.$t("album.qrShare.scanCode"), (570 - this.fontWidth(this.$t("album.qrShare.scanCode"), e.font)) / 2, 560),
                    e.font = "24px Arial",
                    e.fillText(this.$t("album.qrShare.save"), (570 - this.fontWidth(this.$t("album.qrShare.save"), e.font)) / 2, 600),
                    this.qrSrc = t.toDataURL("image/jpeg")
                }
            },
            watch: {
                value: function(t) {
                    t && this.createQR()
                }
            }
        }
          , u = l
          , h = (n("ee67"),
        n("2877"))
          , m = Object(h["a"])(u, a, i, !1, null, null, null);
        e["a"] = m.exports
    },
    "5b38": function(t, e, n) {
        "use strict";
        var a = n("213c")
          , i = n.n(a);
        i.a
    },
    "5d2a": function(t, e, n) {
        "use strict";
        var a = n("eebd")
          , i = n.n(a);
        i.a
    },
    "5fa7": function(t, e, n) {},
    "631e": function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("a", {
                staticClass: "album-component-sideButton",
                attrs: {
                    href: t.hrefIsString ? t.href : "javascript:;",
                    lang: t.$i18n.locale,
                    "primary-color": ""
                },
                on: {
                    click: function(e) {
                        !t.hrefIsString && t.$emit("click")
                    }
                }
            }, [t.icon ? n("p", {
                staticClass: "album-component-sideButton-icon"
            }, [n("i", {
                staticClass: "iconfont",
                class: "icon-" + t.icon
            })]) : t._e(), n("p", {
                staticClass: "album-component-sideButton-text"
            }, [t._t("default")], 2), n("transition", {
                attrs: {
                    name: "sideButton"
                }
            }, [t.sub ? n("div", {
                staticClass: "album-component-sideButton-sub"
            }, [t._v(t._s(t.sub))]) : t._e()])], 1)
        }
          , i = []
          , o = (n("c5f6"),
        {
            name: "sideButton",
            props: {
                icon: {
                    type: String,
                    default: ""
                },
                href: {
                    type: [Object, String]
                },
                sub: {
                    type: [String, Number],
                    default: 0
                }
            },
            computed: {
                hrefIsString: function() {
                    return "string" === typeof this.href
                }
            }
        })
          , s = o
          , c = (n("9ad2"),
        n("2877"))
          , r = Object(c["a"])(s, a, i, !1, null, null, null);
        e["a"] = r.exports
    },
    "636f": function(t, e, n) {},
    "63bf": function(t, e, n) {
        "use strict";
        var a = n("8f32")
          , i = n.n(a);
        i.a
    },
    "64ae": function(t, e, n) {
        "use strict";
        var a = n("0d58d")
          , i = n.n(a);
        i.a
    },
    6522: function(t, e, n) {
        "use strict";
        var a = n("8f51")
          , i = n.n(a);
        i.a
    },
    "65ac": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "album",
                class: {
                    scroll: t.scrollState,
                    rollingDelay: t.rollingDelay
                }
            }, [n("scrollList", {
                ref: "scrollList",
                staticClass: "album-scrollList",
                attrs: {
                    scroll: t.scrollListDom,
                    loadText: "live" !== t.nowTab && "hot" !== t.nowTab || !t.hasMore ? t.$t("album.scrollList.end") : t.$t("album.scrollList.loading")
                },
                on: {
                    loadmore: t.loadmore,
                    scroll: t.scroll,
                    scrollEnd: t.scrollEnd
                }
            }, [t.album.isBanner && t.album.banner.length ? n("banner", {
                ref: "banner",
                staticClass: "album-banner",
                attrs: {
                    data: t.album.banner,
                    contentHeight: 100 * t.album.banner[0].scale + "vw"
                },
                on: {
                    click: function(e) {
                        return t.sendStatistics(2)
                    }
                },
                model: {
                    value: t.bannerIndex,
                    callback: function(e) {
                        t.bannerIndex = e
                    },
                    expression: "bannerIndex"
                }
            }) : t._e(), n("div", {
                ref: "albumTop",
                staticClass: "position-rel album-top"
            }, [n("div", {
                ref: "albumTopAnimation",
                staticClass: "album-top-animation"
            }), t.album.banner.length > 1 && "live" === t.album.banner[0].type ? n("liveMenu", {
                attrs: {
                    data: t.album.banner
                },
                model: {
                    value: t.bannerIndex,
                    callback: function(e) {
                        t.bannerIndex = e
                    },
                    expression: "bannerIndex"
                }
            }) : t._e(), n("albumInfo", {
                attrs: {
                    album: t.album
                }
            }), t.album.isSponsor ? n("sponsor", {
                attrs: {
                    album: t.album
                }
            }) : t._e(), n("div", {
                staticClass: "position-rel album-navigation"
            }, [n("div", {
                staticClass: "display-horizontal album-navigation-box",
                attrs: {
                    float: "video" !== t.nowTab && t.scrolltop > t.albumTopHeight
                }
            }, [n("div", {
                staticClass: "album-navigation-background",
                style: {
                    height: t.navHeight + "px"
                }
            }), n("navigation", {
                attrs: {
                    album: t.album
                },
                on: {
                    input: t.classifySwitch
                },
                model: {
                    value: t.nowTab,
                    callback: function(e) {
                        t.nowTab = e
                    },
                    expression: "nowTab"
                }
            }, [t.verify("wechat") && t.album.isInteractiveUpload ? n("li", {
                staticClass: "album-component-navigation-item",
                on: {
                    click: function(e) {
                        t.interactiveUploadSwitch = !0
                    }
                }
            }, [t._v(t._s(t.$t("album.navigation.interactiveUpload")))]) : t._e(), "1010062553" === t.album.id ? n("li", {
                staticClass: "album-component-navigation-item"
            }, [n("a", {
                attrs: {
                    href: "https://h.alltuu.com/alibaba20th/index.html"
                }
            }, [n("div", [n("span", [t._v(t._s(t.$t("album.navigation.customize.1010062553")))])])])]) : t._e(), "1033174408" === t.album.id ? n("li", {
                staticClass: "album-component-navigation-item"
            }, [n("a", {
                attrs: {
                    href: "http://ysgy.org.cn/cloud/met/61"
                }
            }, [n("div", [n("span", [t._v(t._s(t.$t("album.navigation.customize.1033174408")))])])])]) : t._e(), "1012367633" === t.album.id ? n("li", {
                staticClass: "album-component-navigation-item"
            }, [n("a", {
                attrs: {
                    href: "https://h.alltuu.com/tmall20191111/index.html?isappinstalled=0#/albumset/1000660553/home"
                }
            }, [n("div", [n("span", [t._v(t._s(t.$t("album.navigation.customize.1012367633")))])])])]) : t._e()]), n("ul", {
                staticClass: "album-functionBar"
            }, [n("li", {
                staticClass: "album-functionBar-item"
            }, [n("button", {
                staticClass: "album-functionBar-item-button",
                attrs: {
                    "aria-label": "qr"
                },
                on: {
                    click: function(e) {
                        t.qrShareSwitch = !0
                    }
                }
            }, [n("i", {
                staticClass: "iconfont icon-qr",
                attrs: {
                    alt: "qr"
                }
            })])]), n("li", {
                staticClass: "album-functionBar-item"
            }, [n("button", {
                staticClass: "album-functionBar-item-button",
                attrs: {
                    "aria-label": "lang"
                }
            }, [n("i", {
                staticClass: "iconfont icon-language",
                attrs: {
                    alt: "lang"
                }
            })]), n("dropDown", {
                ref: "dropDown-language",
                on: {
                    input: function(e) {
                        t.$i18n.locale = e
                    }
                }
            }, t._l(t.language, (function(e, a) {
                return n("li", {
                    key: a,
                    attrs: {
                        "data-value": a
                    }
                }, [t._v(t._s(e))])
            }
            )), 0)], 1), n("li", {
                staticClass: "album-functionBar-item"
            }, [n("button", {
                staticClass: "album-functionBar-item-button",
                attrs: {
                    "aria-label": "model"
                }
            }, [n("i", {
                staticClass: "iconfont",
                class: "icon-" + t.layoutIcon,
                attrs: {
                    alt: "model"
                }
            })]), n("dropDown", {
                ref: "dropDown-layout",
                on: {
                    input: function(e) {
                        t.nowlayout = e
                    }
                }
            }, [n("li", {
                attrs: {
                    "data-value": "waterfall"
                }
            }, [n("i", {
                staticClass: "iconfont icon-waterfall"
            }), t._v(" " + t._s(t.$t("album.layout.feed")))]), n("li", {
                attrs: {
                    "data-value": "timeline"
                }
            }, [n("i", {
                staticClass: "iconfont icon-time"
            }), t._v(" " + t._s(t.$t("album.layout.time")))]), n("li", {
                attrs: {
                    "data-value": "grid"
                }
            }, [n("i", {
                staticClass: "iconfont icon-gridLine"
            }), t._v(" " + t._s(t.$t("album.layout.grids")))])])], 1)]), t.nowClassify ? n("classify", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isShowClassify && "live" === t.nowTab,
                    expression: "isShowClassify && nowTab === 'live'"
                }],
                attrs: {
                    album: t.album
                },
                on: {
                    input: t.classifyChanger
                },
                model: {
                    value: t.nowClassify,
                    callback: function(e) {
                        t.nowClassify = e
                    },
                    expression: "nowClassify"
                }
            }) : t._e()], 1)])], 1), n("section", {
                ref: "list",
                staticClass: "position-rel album-list",
                style: {
                    paddingTop: (t.isShowClassify && "live" === t.nowTab ? t.navHeight : 0) + "px"
                }
            }, ["live" === t.nowTab && "timeline" === t.nowlayout && t.nowClassify ? n("photoListTimeLine", {
                ref: "photoListTimeLine",
                attrs: {
                    bigImageIndex: t.bigImageIndex,
                    bigImageStatus: t.bigImageStatus,
                    photos: t.photos,
                    album: t.album,
                    select: t.jigsawSelectPhoto,
                    selecteds: t.jigsawPhotos,
                    nowClassify: t.nowClassify
                },
                on: {
                    click: t.openBigImage,
                    selecte: t.selectePhoto
                }
            }) : t._e(), "live" === t.nowTab && "grid" === t.nowlayout && t.nowClassify.desc ? n("pre", {
                staticClass: "album-component-listGraphic album-component-photoListGrid-item album-component-listGraphic-text",
                staticStyle: {
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                    "box-sizing": "border-box"
                }
            }, [t._v(t._s(t.nowClassify.desc))]) : t._e(), "live" === t.nowTab && "grid" === t.nowlayout ? n("photoListGrid", {
                attrs: {
                    album: t.album,
                    photos: t.graphics,
                    select: t.jigsawSelectPhoto,
                    selecteds: t.jigsawPhotos,
                    hasMore: t.hasMore
                },
                on: {
                    click: t.openBigImage,
                    selecte: t.selectePhoto
                }
            }) : t._e(), "live" === t.nowTab && "waterfall" === t.nowlayout ? n("photoListWaterfall", {
                attrs: {
                    album: t.album,
                    photos: t.photos,
                    select: t.jigsawSelectPhoto,
                    selecteds: t.jigsawPhotos,
                    hasMore: t.hasMore
                },
                on: {
                    click: t.openBigImage,
                    selecte: t.selectePhoto
                }
            }) : t._e(), "hot" === t.nowTab ? n("photoListHot", {
                attrs: {
                    album: t.album,
                    photos: t.photos,
                    select: t.jigsawSelectPhoto,
                    selecteds: t.jigsawPhotos,
                    hasMore: t.hasMore
                },
                on: {
                    click: t.openBigImage,
                    selecte: t.selectePhoto
                }
            }) : t._e(), "video" === t.nowTab ? n("videoList", {
                attrs: {
                    album: t.album,
                    videos: t.videos,
                    hasMore: t.hasMore
                }
            }) : t._e(), "comment" === t.nowTab && t.album.isShowLoginAboutComponent && t.comments.length ? n("commentList", {
                attrs: {
                    album: t.album,
                    comments: t.comments,
                    hasMore: t.hasMore
                },
                on: {
                    showOperation: t.clickCommentHandle
                }
            }) : t._e(), "comment" === t.nowTab && t.album.isShowLoginAboutComponent && 0 === t.comments.length ? n("div", {
                staticClass: "album-comment"
            }, [n("div", {
                staticClass: "album-comment-empty"
            }), n("p", {
                staticClass: "album-comment-hint"
            }, [t._v(t._s(t.$t("album.comment.empty")))])]) : t._e()], 1)], 1), t.album.isBottomAd ? n("bottomAd", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "live" === t.nowTab || "hot" === t.nowTab,
                    expression: "nowTab === 'live' || nowTab === 'hot'"
                }],
                attrs: {
                    bottomAd: t.album.bottomAd
                },
                on: {
                    click: function(e) {
                        return t.sendStatistics(3)
                    }
                }
            }) : t._e(), t.album.isEndAD ? n("endingAD", {
                attrs: {
                    data: t.album.endingAd
                }
            }) : t._e(), n("version"), n("sideBar", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: ("live" === t.nowTab || "hot" === t.nowTab) && !t.jigsawSwitch,
                    expression: "(nowTab === 'live' || nowTab === 'hot') && !jigsawSwitch"
                }],
                attrs: {
                    value: t.sideBarSwitch
                },
                on: {
                    input: t.sideBarStateSwitch
                }
            }, [t._l(t.album.sideButtons, (function(e) {
                return n("sideButton", {
                    key: e.id,
                    attrs: {
                        slot: "after",
                        href: e.url,
                        icon: "home",
                        large: ""
                    },
                    slot: "after"
                }, [t._v("主页")])
            }
            )), t.album.faceRecognize && t.nowClassify && t.album.isShowLoginAboutComponent ? n("sideButton", {
                attrs: {
                    icon: "findme"
                },
                on: {
                    click: t.hasPhoneDiscan
                }
            }, [t._v(t._s(t.$t("album.findme")))]) : t._e(), n("sideButton", {
                attrs: {
                    icon: "puzzle"
                },
                on: {
                    click: function(e) {
                        t.jigsawSwitch = !0,
                        t.sendStatistics(14)
                    }
                }
            }, [t._v(t._s(t.$t("album.jigsaw.jigsaw")))]), "live" === t.nowTab ? n("sort", {
                attrs: {
                    album: t.album
                },
                on: {
                    click: t.classifyChanger
                }
            }) : t._e(), t.album.isAlbumCollection && t.album.isShowAlbumCollection ? n("collection", {
                attrs: {
                    slot: "after",
                    album: t.album
                },
                slot: "after"
            }) : t._e(), t.album.isShowLoginAboutComponent ? n("sideButton", {
                attrs: {
                    slot: "after",
                    icon: "mine",
                    href: "/mine?isCustom=" + t.album.custom + "&albumTitle=" + encodeURIComponent(t.album.title) + "&isDrainage=" + t.album.isDrainage,
                    large: ""
                },
                slot: "after"
            }, [t._v(t._s(t.$t("album.personal")))]) : t._e(), n("transition", {
                attrs: {
                    slot: "after",
                    name: "fade"
                },
                slot: "after"
            }, [t.album.isSideAd && t.album.sideAd && null !== t.album.sideAd.type ? n("sideAd", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.favoriteSwitch,
                    expression: "!favoriteSwitch"
                }],
                attrs: {
                    actId: t.album.id,
                    sideAd: t.album.sideAd,
                    scrollState: t.scrollState
                },
                on: {
                    click: function(e) {
                        return t.sendStatistics(3)
                    }
                }
            }) : t._e()], 1)], 2), t.album.comment ? n("div", {
                staticClass: "album-commentSend"
            }, ["comment" === t.nowTab ? n("commentSend", {
                ref: "commentSend",
                attrs: {
                    commentReview: t.album.commentReview,
                    album: t.album
                },
                on: {
                    flushComment: t.getComment
                }
            }) : t._e(), t.isShowOperation ? n("operation", {
                on: {
                    cancel: function(e) {
                        t.isShowOperation = !1
                    },
                    inform: t.informComment,
                    reply: t.replyComment
                }
            }) : t._e()], 1) : t._e(), t.album.isPoster ? n("poster", {
                staticClass: "album-poster",
                attrs: {
                    poster: t.album.poster
                },
                on: {
                    load: function(e) {
                        return t.$emit("loadingScore")
                    }
                }
            }) : t._e(), t.verify("wechat") && t.album.pecket && t.album.isShowLoginAboutComponent ? n("pecket", {
                attrs: {
                    album: t.album
                }
            }) : t._e(), n("keep-alive", [!t.album.comment || "live" !== t.nowTab && "hot" !== t.nowTab || t.jigsawSwitch || !t.album.isShowLoginAboutComponent ? t._e() : n("barrage", {
                ref: "barrage",
                attrs: {
                    album: t.album,
                    comments: t.comments
                }
            })], 1), "live" === t.nowTab || t.nowClassify ? n("liveCount", {
                attrs: {
                    classify: t.album.findClassify(t.nowClassify.id)
                },
                nativeOn: {
                    click: function(e) {
                        return t.reloadAll(e)
                    }
                }
            }) : t._e(), t.photos.length ? n("bigImage", {
                attrs: {
                    open: t.bigImageStatus,
                    data: t.photos
                },
                on: {
                    photoInit: t.photoInit,
                    loadmore: t.loadmore,
                    close: function(e) {
                        t.bigImageStatus = !1
                    },
                    longtap: t.bigImageLongTap
                },
                scopedSlots: t._u([{
                    key: "header",
                    fn: function(e) {
                        return [t.album.photoInfo && t.photos.length ? n("photoInfo", {
                            attrs: {
                                album: t.album,
                                slotProps: e
                            }
                        }) : t._e()]
                    }
                }, {
                    key: "default",
                    fn: function(e) {
                        return [t.photos.length ? n("bigImageLayer", {
                            attrs: {
                                album: t.album,
                                slotProps: e,
                                comments: t.comments,
                                nowClassify: t.nowClassify
                            },
                            on: {
                                flushComment: t.getComment
                            }
                        }) : t._e()]
                    }
                }], null, !1, 2215518773),
                model: {
                    value: t.bigImageIndex,
                    callback: function(e) {
                        t.bigImageIndex = e
                    },
                    expression: "bigImageIndex"
                }
            }) : t._e(), t.isShowScrollPosition ? n("scrollPosition", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.scrolltop > t.albumTopHeight && t.photoTotol,
                    expression: "scrolltop > albumTopHeight && photoTotol"
                }],
                ref: "scrollPosition",
                attrs: {
                    count: t.photoTotol,
                    scrollTop: t.scrolltop
                },
                nativeOn: {
                    click: function(e) {
                        return t.$refs.scrollList.scrollToA(0)
                    }
                }
            }) : t._e(), n("favorite", {
                attrs: {
                    album: t.album
                },
                model: {
                    value: t.favoriteSwitch,
                    callback: function(e) {
                        t.favoriteSwitch = e
                    },
                    expression: "favoriteSwitch"
                }
            }), n("qrShare", {
                attrs: {
                    album: t.album
                },
                model: {
                    value: t.qrShareSwitch,
                    callback: function(e) {
                        t.qrShareSwitch = e
                    },
                    expression: "qrShareSwitch"
                }
            }), t.album.isInteractiveUpload ? n("interactiveUpload", {
                attrs: {
                    album: t.album,
                    participation: t.album.interactiveUploadParticipation
                },
                model: {
                    value: t.interactiveUploadSwitch,
                    callback: function(e) {
                        t.interactiveUploadSwitch = e
                    },
                    expression: "interactiveUploadSwitch"
                }
            }) : t._e(), t.jigsawSwitch ? n("jigsaw", {
                attrs: {
                    photoList: t.jigsawPhotos,
                    info: t.album.jigsawInfo ? {
                        title: t.album.title,
                        href: t.location.origin + "/q/" + t.album.shorturl,
                        nineGrids: t.album.nineGrids
                    } : {
                        nineGrids: t.album.nineGrids
                    }
                },
                on: {
                    selectedStyle: function(e) {
                        t.jigsawSelectPhoto = !0
                    },
                    close: function(e) {
                        t.jigsawSwitch = !1,
                        t.jigsawSelectPhoto = !1
                    }
                }
            }) : t._e(), n("findMe", {
                attrs: {
                    show: t.isShowFindMeCard
                },
                on: {
                    close: function(e) {
                        t.isShowFindMeCard = !1
                    },
                    findMe: t.toFindeMe,
                    findPhone: t.toFindPhone
                }
            })], 1)
        }
          , i = []
          , o = (n("8e6e"),
        n("456d"),
        n("75fc"))
          , s = (n("7514"),
        n("55dd"),
        n("20d6"),
        n("7618"))
          , c = (n("ac6a"),
        n("bd86"))
          , r = (n("a481"),
        n("96cf"),
        n("3b8d"))
          , l = n("2f62")
          , u = n("ace7")
          , h = n("f8bd")
          , m = n("2b83")
          , d = n("d083")
          , g = n("a47e")
          , p = n("6937")
          , f = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("section", {
                staticClass: "album-components-pecket"
            }, [a("div", {
                staticClass: "album-components-pecket-logo",
                on: {
                    click: function(e) {
                        t.openGrab(),
                        t.showGrab = !0
                    }
                }
            }, [a("img", {
                staticClass: "album-components-pecket-logo-little",
                attrs: {
                    src: n("2b9a"),
                    alt: ""
                }
            })]), t.showGrab ? a("div", {
                staticClass: "tool-layout"
            }) : t._e(), t.showGrab ? a("div", {
                staticClass: "album-components-pecket-grab"
            }, [a("div", {
                staticClass: "album-components-pecket-grab-close",
                on: {
                    click: function(e) {
                        t.showGrab = !t.showGrab
                    }
                }
            }, [a("span", {
                staticClass: "iconfont icon-close"
            })]), t.peckets ? [t.notGet || t.haveGrabPecket ? t._e() : a("div", {
                staticClass: "album-components-pecket-pecketSize"
            }, [t.peckets.size > 0 ? a("span", {
                staticClass: "album-components-pecket-pecketSize-number"
            }, [t._v("  " + t._s(t.$t("album.pecket.isBeingOpened", {
                count: t.peckets.size
            })) + " ")]) : t._e(), 0 == t.peckets.size && t.peckets.time < t.peckets.startTime ? a("span", {
                staticClass: "album-components-pecket-pecketSize-number"
            }, [t._v(t._s(t.$t("album.pecket.openAt")))]) : t._e(), 0 == t.peckets.size && t.peckets.time < t.peckets.startTime ? a("div", {
                staticClass: "album-components-pecket-pecketSize-countDown"
            }, [a("span", {
                staticClass: "album-components-pecket-pecketSize-countDown-span"
            }, [t._v(t._s(t.showHour))]), a("span", {
                staticClass: "album-components-pecket-pecketSize-countDown-symbol"
            }, [t._v(":")]), a("span", {
                staticClass: "album-components-pecket-pecketSize-countDown-span"
            }, [t._v(t._s(t.showMinute))]), a("span", {
                staticClass: "album-components-pecket-pecketSize-countDown-symbol"
            }, [t._v(":")]), a("span", {
                staticClass: "album-components-pecket-pecketSize-countDown-span"
            }, [t._v(t._s(t.showSecend))])]) : t._e(), t.peckets.totalSize > t.peckets.size && 0 == t.peckets.size ? a("span", {
                staticClass: "album-components-pecket-pecketSize-number"
            }, [t._v(t._s(t.$t("album.pecket.allPecketHasBeenReceived")))]) : t._e()])] : t._e(), t.haveGrabPecket ? a("div", {
                staticClass: "album-components-pecket-getMoney"
            }, [a("span", {
                staticClass: "album-components-pecket-getMoney-from"
            }, [t._v(t._s(t.$t("album.pecket.pecketFrom")))]), a("span", {
                staticClass: "album-components-pecket-getMoney-command"
            }, [t._v('"' + t._s(t.getPecketHost.command) + '"')]), a("span", {
                staticClass: "album-components-pecket-getMoney-money"
            }, [t._v("\n        " + t._s(t.getPecketHost.money / 100) + "\n        "), a("span", {
                staticClass: "album-components-pecket-getMoney-money-unit"
            }, [t._v(t._s(t.$t("album.pecket.unit")))])]), a("span", {
                staticClass: "album-components-pecket-getMoney-save"
            }, [t._v(t._s(t.$t("album.pecket.gotoOfficialAccounts")))])]) : t._e(), t.notGet ? a("div", {
                staticClass: "album-components-pecket-slow"
            }, [a("span", {
                staticClass: "album-components-pecket-getMoney-from"
            }, [t._v(t._s(t.$t("album.pecket.pecketFrom")))]), a("span", {
                staticClass: "album-components-pecket-getMoney-command"
            }, [t._v(t._s(t.command))]), a("span", {
                staticClass: "album-components-pecket-slow-none"
            }, [t._v(t._s(t.$t("album.pecket.hasBeenReceived")))])]) : t._e(), t.getPecketHost ? t._e() : a("div", {
                staticClass: "album-components-pecket-grab-moneyLogo",
                style: {
                    backgroundImage: "url(" + t.moneyLogo + ")"
                }
            }), t.getPecketHost ? a("div", {
                staticClass: "album-components-pecket-grab-moneyLogo",
                style: {
                    backgroundImage: "url(" + t.getPecketHost.logo + ")"
                }
            }) : t._e(), t.haveGrabPecket ? t._e() : a("input", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.notGet,
                    expression: "!notGet"
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: t.command,
                    expression: "command"
                }],
                staticClass: "album-components-pecket-grab-command",
                attrs: {
                    type: "text",
                    placeholder: t.$t("album.pecket.enterCode")
                },
                domProps: {
                    value: t.command
                },
                on: {
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.toGrab(e)
                    },
                    focus: t.checkLogin,
                    blur: t.hideKeyboard,
                    input: function(e) {
                        e.target.composing || (t.command = e.target.value)
                    }
                }
            }), t.haveGrabPecket ? t._e() : a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.notGet,
                    expression: "!notGet"
                }],
                staticClass: "album-components-pecket-grab-submit",
                on: {
                    click: t.toGrab
                }
            }, [t._v(t._s(t.grapPecketTitle) + "\n    ")]), t.peckets && 0 == t.peckets.size && t.peckets.totalSize > 0 && !t.notGet ? a("div", {
                staticClass: "album-components-pecket-grab-submit album-components-pecket-grab-submit-none",
                on: {
                    click: t.toGrab
                }
            }, [t._v(t._s(t.$t("album.pecket.justOpen")) + "\n    ")]) : t._e(), t.notGet ? a("div", {
                staticClass: "album-components-pecket-grab-goGrad",
                on: {
                    click: function(e) {
                        t.notGet = !1,
                        t.getPecketHost = null,
                        t.getPecketNum(),
                        t.command = ""
                    }
                }
            }, [t._v(t._s(t.$t("album.pecket.continue")) + "\n    ")]) : t._e(), t.haveGrabPecket || t.notGet ? a("div", {
                staticClass: "album-components-pecket-grab-details",
                on: {
                    click: t.details
                }
            }, [t._v(t._s(t.$t("album.pecket.details")) + ">")]) : t._e()], 2) : t._e()])
        }
          , b = []
          , v = {
            name: "pecket",
            props: {
                album: {
                    type: Object,
                    default: null
                }
            },
            data: function() {
                return {
                    showGrab: !1,
                    command: "",
                    getPecketDetail: null,
                    getPecketHost: null,
                    peckets: null,
                    notGet: !1,
                    haveGrabPecket: !1,
                    moneyLogo: n("d0f4"),
                    hour: 0,
                    time: 0,
                    minute: 0,
                    secend: 0,
                    day: 0,
                    showHour: "00",
                    showMinute: "00",
                    showSecend: "00",
                    getPecketCommand: "",
                    grapPecketTitle: this.$t("album.pecket.justOpen"),
                    interval: null,
                    scrollTop: 0
                }
            },
            mounted: function() {
                document.body.addEventListener("focusout", (function() {
                    window.scrollTo(0, this.scrollTop)
                }
                ))
            },
            methods: {
                getTime: function() {
                    var t = this;
                    if (!this.peckets)
                        return !1;
                    this.peckets.startTime < this.peckets.time ? clearInterval(this.interval) : this.interval = setInterval((function() {
                        t.peckets.startTime > t.peckets.time ? (t.peckets.startTime - t.peckets.time <= 0 && clearTimeout(t.interval),
                        t.hour = Math.floor((t.peckets.startTime - t.peckets.time) / 36e5 - 24 * t.day),
                        t.minute = Math.floor((t.peckets.startTime - t.peckets.time) / 6e4 - 24 * t.day - 60 * t.hour),
                        t.secend = Math.floor((t.peckets.startTime - t.peckets.time) / 1e3 - 24 * t.day * 60 - 60 * t.hour * 60 - 60 * t.minute),
                        t.hour < 10 ? t.showHour = "0" + t.hour : t.showHour = t.hour,
                        t.minute < 10 ? t.showMinute = "0" + t.minute : t.showMinute = t.minute,
                        t.secend < 10 ? t.showSecend = "0" + t.secend : t.showSecend = t.secend,
                        t.peckets.time = t.peckets.time + 1e3) : (t.getPecketNum(),
                        clearInterval(t.interval))
                    }
                    ), 1e3)
                },
                getPecketNum: function() {
                    var t = this;
                    clearInterval(this.interval),
                    this.$API.getPecket(this.album.id).then((function(e) {
                        0 === e.e && (t.peckets = e.d,
                        t.getTime())
                    }
                    ))
                },
                openGrab: function() {
                    this.showGrab = !0,
                    this.command = "",
                    this.notGet = !1,
                    this.haveGrabPecket = !1,
                    this.getPecketHost = null,
                    this.grapPecketTitle = this.$t("album.pecket.justOpen"),
                    this.$userInfo().isWxlogin ? this.getPecketNum() : this.$login(this.album.isCustom)
                },
                toGrab: function() {
                    var t = this;
                    if (!this.peckets)
                        return this.$notify("服务器繁忙， 请稍后再试");
                    this.command = this.command.replace(/^\s+|\s+$/g, ""),
                    "" !== this.command.replace(/^\s|\s$/g, "") ? (this.grapPecketTitle = this.$t("album.pecket.opening"),
                    this.$API.grabPecket(this.album.id, this.command).then((function(e) {
                        if (0 === e.e)
                            if (t.grapPecketTitle = t.$t("album.pecket.justOpen"),
                            t.getPecketCommand = e.d.command,
                            t.getPecketDetail = e.d.userList,
                            t.getPecketDetail[t.$userInfo().id])
                                t.getPecketHost = t.getPecketDetail[t.$userInfo().id],
                                t.getPecketHost.logo = e.d.logo,
                                t.haveGrabPecket = !0,
                                t.notGet = !1;
                            else {
                                for (var n in e.d.userList)
                                    t.getPecketHost = t.getPecketDetail[n],
                                    t.getPecketHost.logo = e.d.logo;
                                t.notGet = !0
                            }
                        else if (10006 === e.e)
                            if (t.grapPecketTitle = t.$t("album.pecket.justOpen"),
                            t.getPecketCommand = e.d.command,
                            t.getPecketDetail = e.d.userList,
                            t.getPecketDetail[t.$userInfo().id])
                                t.$notify(t.$t("album.pecket.youHasBeenReceived")),
                                t.getPecketHost = t.getPecketDetail[t.$userInfo().id],
                                t.getPecketHost.logo = e.d.logo,
                                t.haveGrabPecket = !0,
                                t.notGet = !1;
                            else {
                                for (var a in t.$notify(t.$t("album.pecket.hasBeenReceived")),
                                e.d.userList)
                                    t.getPecketHost = t.getPecketDetail[a],
                                    t.getPecketHost.logo = e.d.logo;
                                t.notGet = !0
                            }
                        else
                            10004 === e.e ? (t.grapPecketTitle = t.$t("album.pecket.justOpen"),
                            t.notGet = !0) : 10005 === e.e ? t.$emit("getWxappCode") : 10016 === e.e ? t.toGrab() : 10014 === e.e ? (t.$notify(t.$t("album.pecket.youHasBeenReceived")),
                            t.getPecketDetail = e.d.userList,
                            t.getPecketHost = t.getPecketDetail[t.$userInfo().id],
                            t.getPecketHost.logo = e.d.logo,
                            t.getPecketCommand = e.d.command,
                            t.haveGrabPecket = !0,
                            t.notGet = !1) : t.grapPecketTitle = t.$t("album.pecket.justOpen")
                    }
                    ))) : this.$notify(this.$t("album.pecket.enterCode"))
                },
                details: function() {
                    location.href = "".concat(location.origin, "/pecketDetail?id=").concat(this.album.id, "&command=").concat(this.getPecketCommand)
                },
                checkLogin: function() {
                    this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
                    this.$userInfo().isWxlogin || this.$login(this.album.isCustom)
                },
                hideKeyboard: function() {
                    window.scrollTo(0, this.scrollTop)
                }
            }
        }
          , w = v
          , y = (n("2410"),
        n("2877"))
          , C = Object(y["a"])(w, f, b, !1, null, null, null)
          , k = C.exports
          , S = n("b9ad")
          , z = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                ref: "liveMenu",
                staticClass: "display-horizontal scroll album-component-liveMenu"
            }, t._l(t.data, (function(e, a) {
                return n("li", {
                    key: a,
                    staticClass: "album-component-liveMenu-item",
                    attrs: {
                        "primary-border": t.value === a,
                        state: e.live.state
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("input", a)
                        }
                    }
                }, [0 === e.live.state ? n("label", {
                    staticClass: "album-component-liveMenu-item-label",
                    attrs: {
                        "primary-background": t.value === a
                    }
                }, [t._v(t._s(t.$t("components.liveMenu.notStarted")))]) : t._e(), 1 === e.live.state ? n("label", {
                    staticClass: "album-component-liveMenu-item-label",
                    attrs: {
                        "primary-background": t.value === a
                    }
                }, [t._v(t._s(t.$t("components.liveMenu.live")))]) : t._e(), 2 === e.live.state ? n("label", {
                    staticClass: "album-component-liveMenu-item-label",
                    attrs: {
                        "primary-background": t.value === a
                    }
                }, [t._v(t._s(t.$t("components.liveMenu.completed")))]) : t._e(), 3 === e.live.state ? n("label", {
                    staticClass: "album-component-liveMenu-item-label",
                    attrs: {
                        "primary-background": t.value === a
                    }
                }, [t._v(t._s(t.$t("components.liveMenu.completed")))]) : t._e(), 4 === e.live.state ? n("label", {
                    staticClass: "album-component-liveMenu-item-label",
                    attrs: {
                        "primary-background": t.value === a
                    }
                }, [t._v(t._s(t.$t("components.liveMenu.playBack")))]) : t._e(), 5 === e.live.state ? n("label", {
                    staticClass: "album-component-liveMenu-item-label",
                    attrs: {
                        "primary-background": t.value === a
                    }
                }, [t._v(t._s(t.$t("components.liveMenu.completed")))]) : t._e(), n("span", {
                    staticClass: "text-overflow-2 album-component-liveMenu-item-text",
                    attrs: {
                        "primary-color": t.value === a
                    }
                }, [t._v(t._s(e.live.title))])])
            }
            )), 0)
        }
          , _ = []
          , P = (n("c5f6"),
        {
            name: "liveMenu",
            props: {
                data: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                value: {
                    type: Number,
                    default: 0
                }
            },
            mounted: function() {
                console.log(this.data)
            },
            watch: {
                value: function(t) {
                    if ("live" === this.data[0].type) {
                        var e = this.$refs.liveMenu
                          , n = e.childNodes[t]
                          , a = n.offsetLeft - e.clientWidth / 2 + n.clientWidth / 2;
                        Math.animation(e.scrollLeft, a, 300, "Cubic.easeOut", (function(t) {
                            e.scrollLeft = t
                        }
                        ))
                    }
                }
            }
        })
          , x = P
          , O = (n("2dcf"),
        Object(y["a"])(x, z, _, !1, null, null, null))
          , T = O.exports
          , j = n("4f7d")
          , I = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("section", [n("div", {
                staticClass: "scroll album-component-sponsor"
            }, t._l(t.album.sponsor, (function(e, a) {
                return n("sponsorItem", {
                    key: a,
                    attrs: {
                        data: e
                    },
                    nativeOn: {
                        click: function(n) {
                            t.data = e,
                            t.$parent.$parent.sendStatistics(16)
                        }
                    }
                })
            }
            )), 1), t.data ? n("sponsorLayout", {
                attrs: {
                    data: t.data
                },
                on: {
                    close: function(e) {
                        t.data = null
                    }
                }
            }) : t._e()], 1)
        }
          , $ = []
          , L = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("figure", {
                staticClass: "album-component-sponsorItem",
                attrs: {
                    sizeType: t.data.type
                }
            }, [n("imageBox", {
                staticClass: "album-component-sponsorItem-image",
                attrs: {
                    url: t.data.image
                }
            }), n("div", {
                staticClass: "album-component-sponsorItem-text"
            }, [0 === t.data.type ? n("span", {
                class: t.data.name.length > 8 && "sponsorAnimate-100"
            }, [t._v(t._s(t.data.name))]) : t._e(), 1 === t.data.type ? n("span", {
                class: t.data.name.length > 6 && "sponsorAnimate-64"
            }, [t._v(t._s(t.data.name))]) : t._e()]), n("div", {
                staticClass: "album-component-sponsorItem-text text-overflow"
            }, [t._v(t._s(t.data.title))])], 1)
        }
          , D = []
          , A = n("cca9")
          , B = {
            name: "sponsorItem",
            props: {
                data: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {}
            },
            mounted: function() {},
            methods: {},
            components: {
                imageBox: A["a"]
            }
        }
          , E = B
          , M = (n("6522"),
        Object(y["a"])(E, L, D, !1, null, null, null))
          , R = M.exports
          , H = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "tool-layout album-component-sponsorLayout",
                on: {
                    touchmove: function(t) {
                        t.preventDefault()
                    }
                }
            }, [n("div", {
                staticClass: "tool-close album-component-sponsorLayout-close",
                on: {
                    click: function(e) {
                        return t.$emit("close")
                    }
                }
            }, [n("i", {
                staticClass: "iconfont icon-close"
            })]), n("div", {
                staticClass: "album-component-sponsorLayout-content"
            }, [n("imageBox", {
                staticClass: "album-component-sponsorLayout-image",
                attrs: {
                    sizeType: t.data.type,
                    url: t.data.image
                }
            }), n("h3", {
                staticClass: "album-component-sponsorLayout-title"
            }, [t._v(t._s(t.data.name) + "(" + t._s(t.data.title) + ")")]), t.data.faceRecognize ? n("h4", {
                staticClass: "album-component-sponsorLayout-identity"
            }, [t._v(t._s(t.data.faceRecognize))]) : t._e(), n("div", {
                staticClass: "album-component-sponsorLayout-desc"
            }, [t._v(t._s(t.data.desc))]), t.data.link && 0 == t.data.type ? n("a", {
                staticClass: "album-component-sponsorLayout-link",
                attrs: {
                    href: t.data.link,
                    target: "_block"
                }
            }, [t._v("点击前往了解更多>")]) : t._e()], 1)])
        }
          , N = []
          , G = {
            name: "sponsorLayout",
            props: {
                data: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            components: {
                imageBox: A["a"]
            }
        }
          , q = G
          , F = (n("fe31"),
        Object(y["a"])(q, H, N, !1, null, null, null))
          , U = F.exports
          , Y = {
            name: "sponsor",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    data: null
                }
            },
            methods: {
                open: function(t) {
                    this.data = t
                }
            },
            components: {
                sponsorItem: R,
                sponsorLayout: U
            }
        }
          , V = Y
          , W = (n("3701"),
        Object(y["a"])(V, I, $, !1, null, null, null))
          , Q = W.exports
          , J = n("4a22")
          , Z = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.value ? n("section", {
                staticClass: "tool-layout album-component-interactiveUpload",
                on: {
                    touchmove: function(t) {
                        t.stopPropagation()
                    }
                }
            }, [n("div", {
                staticClass: "tool-content album-component-interactiveUpload-content"
            }, [n("img", {
                staticClass: "album-component-interactiveUpload-image download",
                attrs: {
                    src: t.qrSrc
                }
            }), n("button", {
                staticClass: "tool-close album-component-interactiveUpload-close",
                on: {
                    click: function(e) {
                        return t.$emit("input", !t.value)
                    }
                }
            }, [n("i", {
                staticClass: "iconfont icon-close"
            })])])]) : t._e()])
        }
          , X = []
          , K = n("f53f")
          , tt = {
            name: "interactiveUpload",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                participation: {
                    type: Number,
                    default: 0
                },
                value: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    qrSrc: ""
                }
            },
            mounted: function() {
                var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
                    var e, n, a, i, o, s, c, r, l;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0,
                                t.next = 3,
                                Object(K["a"])(this.album.aiphotoQR, !0);
                            case 3:
                                for (e = t.sent,
                                n = document.createElement("canvas"),
                                n.width = 570,
                                n.height = 700,
                                a = n.getContext("2d"),
                                a.fillStyle = "#FFF",
                                a.fillRect(0, 0, n.width, n.height),
                                i = 14,
                                a.fillStyle = "#333",
                                a.lineWidth = 6,
                                a.font = "32px Arial",
                                o = 0,
                                s = this.album.title.length; o < s; o += i)
                                    c = this.album.title.substr(o, i),
                                    a.fillText(c, (570 - this.fontWidth(c, a.font)) / 2, 66 + o / i * 48);
                                a.drawImage(e, 0, 0, e.width, e.width, 128, 190, 314, 314),
                                a.fillStyle = "#333",
                                a.font = "bold 24px Arial",
                                r = "已有".concat(this.participation, "人参与上传"),
                                l = (570 - this.fontWidth(r, a.font)) / 2,
                                a.fillText(r, l, 540),
                                a.fillStyle = "#fff",
                                a.fillRect(l + 48, 518, this.fontWidth(this.participation, a.font), 26),
                                a.fillStyle = "#2996FF",
                                a.fillText(this.participation, l + 48, 540),
                                a.fillStyle = "#333",
                                a.font = "24px Arial",
                                a.fillText("长按识别二维码参与互动上传", (570 - this.fontWidth("长按识别二维码参与互动上传", a.font)) / 2, 620),
                                this.qrSrc = n.toDataURL("image/jpeg"),
                                t.next = 35;
                                break;
                            case 31:
                                t.prev = 31,
                                t.t0 = t["catch"](0),
                                console.warn("【互动上传】小程序码加载失败，请确认图片是否存在", this.album.aiphotoQR),
                                this.album.isInteractiveUpload = !1;
                            case 35:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[0, 31]])
                }
                )));
                function e() {
                    return t.apply(this, arguments)
                }
                return e
            }(),
            methods: {
                fontWidth: function(t, e) {
                    var n = document.createElement("canvas").getContext("2d");
                    return n.lineWidth = 6,
                    n.font = e,
                    n.measureText(t).width
                }
            }
        }
          , et = tt
          , nt = (n("0f92"),
        Object(y["a"])(et, Z, X, !1, null, null, null))
          , at = nt.exports
          , it = n("549c")
          , ot = n("e1e0")
          , st = n("924a")
          , ct = n("e2e5")
          , rt = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("section", {
                staticClass: "album-component-endingAD"
            }, [t.data.title ? n("h4", {
                staticClass: "album-component-endingAD-title"
            }, [t._v(t._s(t.data.title))]) : t._e(), t.data.intro ? n("div", {
                staticClass: "text-pre album-component-endingAD-intro"
            }, [t._v(t._s(t.data.intro))]) : t._e(), n("div", {
                staticClass: "album-component-endingAD-logo",
                attrs: {
                    type: t.data.type
                }
            }, [t.hue ? n("img", {
                staticClass: "album-component-endingAD-logo-diy",
                attrs: {
                    src: t.data.logo || t.themePath + "/ending/" + (t.data.official ? "official" : "nofficial") + "-" + t.hue + (t.data.official ? "" : "-" + t.$i18n.locale) + ".png",
                    alt: "image"
                }
            }) : t._e()])])
        }
          , lt = []
          , ut = {
            name: "endingAD",
            props: {
                data: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    themePath: u["themePath"],
                    hue: ""
                }
            },
            mounted: function() {
                this.getHue()
            },
            methods: {
                getHue: function() {
                    var t = this;
                    try {
                        var e = window.getComputedStyle(document.getElementsByClassName("album")[0]).content.replace(/"/g, "");
                        "dark" === e || "light" === e ? this.hue = "light" === e ? "dark" : "light" : setTimeout((function() {
                            t.getHue()
                        }
                        ), 300)
                    } catch (n) {
                        setTimeout((function() {
                            t.getHue()
                        }
                        ), 300)
                    }
                }
            }
        }
          , ht = ut
          , mt = (n("e6df"),
        Object(y["a"])(ht, rt, lt, !1, null, null, null))
          , dt = mt.exports
          , gt = n("6755")
          , pt = n("631e")
          , ft = n("04b7")
          , bt = n("0aa8")
          , vt = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("sideButton", {
                staticClass: "album-views-album-components-collection-sideButton",
                attrs: {
                    icon: "category",
                    large: "",
                    compact: ""
                },
                on: {
                    click: t.clickMain
                }
            }, [t._v("\n    " + t._s(t.$t("album.homepage")) + "\n    "), t.album.collectionStyle ? n("div", {
                staticClass: "album-views-album-components-collection-sideButton-layer",
                style: t.getCollectionBg
            }) : t._e()]), n("albumCollection", {
                attrs: {
                    album: t.album,
                    show: t.isShow,
                    title: t.title,
                    collectionData: t.collectionData
                },
                on: {
                    close: function(e) {
                        t.isShowMeetingPlace = !1
                    }
                }
            })], 1)
        }
          , wt = []
          , yt = n("d225")
          , Ct = function t(e) {
            Object(yt["a"])(this, t),
            this.title = e.albumTitle,
            this.cover = e.coverUrl,
            this.id = e.idEnc,
            this.total = e.photoTotal,
            this.pageViews = e.pageviews
        }
          , kt = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("section", [n("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.show ? n("div", {
                staticClass: "tool-layout album-component-albumCollection-layout",
                on: {
                    click: function(e) {
                        return t.$emit("close")
                    }
                }
            }) : t._e()]), n("transition", {
                attrs: {
                    name: "slideInBottom"
                }
            }, [t.show ? n("div", {
                staticClass: "album-component-albumCollection album-component-albumCollection-bg",
                style: {
                    bottom: t.bottom
                }
            }, [n("div", {
                on: {
                    touchstart: t.touchstart,
                    touchmove: t.touchmove,
                    touchend: t.touchend
                }
            }, [n("div", {
                staticClass: "album-component-albumCollection-shrink album-component-albumCollection-color",
                on: {
                    click: function(e) {
                        return t.$emit("close")
                    }
                }
            }, [n("i", {
                staticClass: "iconfont icon-bottom"
            })]), n("div", {
                staticClass: "album-component-albumCollection-header album-component-albumCollection-color"
            }, [t._v("\n          " + t._s(t.title) + "\n        ")])]), n("div", {
                staticClass: "album-component-albumCollection-scroll"
            }, [n("div", {
                staticClass: "album-component-albumCollection-scroll-container"
            }, t._l(t.collectionData, (function(e) {
                return n("router-link", {
                    key: e.id,
                    staticClass: "album-component-albumCollection-scroll-container-album",
                    attrs: {
                        tag: "div",
                        active: e.id === t.album.id,
                        "data-title": t.$t("album.mainMeeting.curAlbum"),
                        to: {
                            name: "album",
                            params: {
                                id: e.id
                            }
                        }
                    }
                }, [n("imageBox", {
                    staticClass: "album-component-albumCollection-scroll-container-album-cover",
                    attrs: {
                        url: e.cover
                    }
                }), n("div", {
                    staticClass: "text-overflow-2 album-component-albumCollection-scroll-container-album-name"
                }, [t._v(t._s(e.title))]), n("div", {
                    staticClass: "album-component-albumCollection-scroll-container-album-info"
                }, [n("span", [n("i", {
                    staticClass: "iconfont icon-photo"
                }), t._v(" " + t._s(e.total))]), n("span", [n("i", {
                    staticClass: "iconfont icon-view"
                }), t._v("  " + t._s(e.pageViews))])])], 1)
            }
            )), 1)]), n("a", {
                staticClass: "album-component-albumCollection-jump",
                attrs: {
                    href: "/albumsView/albumList?id=" + t.album.albumSetIds,
                    "primary-color": "",
                    "primary-border": ""
                }
            }, [t._v("\n        " + t._s(t.$t("album.mainMeeting.gotoMainMeeting")) + "\n      ")])]) : t._e()])], 1)
        }
          , St = []
          , zt = document.documentElement.clientHeight
          , _t = zt - 338
          , Pt = 0
          , xt = 0
          , Ot = {
            name: "albumCollection",
            props: {
                title: {
                    type: String,
                    default: ""
                },
                collectionData: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                show: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    bottom: 0
                }
            },
            methods: {
                touchstart: function(t) {
                    Pt = t.touches[0].clientY
                },
                touchmove: function(t) {
                    xt = t.touches[0].clientY,
                    t.touches[0].clientY > _t && -(xt - Pt) < 0 && (this.bottom = -(xt - Pt) + "px"),
                    t.preventDefault()
                },
                touchend: function() {
                    var t = this
                      , e = xt - _t;
                    e > 50 ? (t.$emit("close"),
                    this.$nextTick((function() {
                        t.bottom = "0px"
                    }
                    ))) : setTimeout((function n() {
                        e > 5 ? (e /= 3,
                        t.bottom = -e + "px",
                        setTimeout(n, 16.6)) : t.bottom = "0px"
                    }
                    ), 16.6)
                }
            },
            components: {
                imageBox: A["a"]
            }
        }
          , Tt = Ot
          , jt = (n("33d3"),
        Object(y["a"])(Tt, kt, St, !1, null, null, null))
          , It = jt.exports
          , $t = {
            name: "collection",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    isShowMeetingPlace: !1,
                    collectionData: [],
                    title: ""
                }
            },
            mounted: function() {
                this.getPhotoAlbumSetInfo()
            },
            computed: {
                getCollectionBg: function() {
                    return "background-image: url('".concat(this.album.collectionStyle, "');")
                },
                isShow: function() {
                    return !(!this.collectionData || !this.isShowMeetingPlace)
                }
            },
            methods: {
                clickMain: function() {
                    this.album.isAlbumSetNavigate && (this.isShowMeetingPlace = !0),
                    this.album.isAlbumSetNavigate || (location.href = "/albumsView/albumList?id=".concat(this.album.albumSetIds))
                },
                getPhotoAlbumSetInfo: function() {
                    var t = this;
                    this.$API.v4cNfas(this.album.albumSetIds, this.$parent.$parent.$parent.version.nfas).then((function(e) {
                        0 === e.e && (t.title = e.d.bannerTitle,
                        t.collectionData.length = 0,
                        e.d.list && e.d.list.forEach((function(e) {
                            t.collectionData.push(new Ct(e))
                        }
                        )),
                        e.d.sepList && e.d.sepList.forEach((function(e) {
                            e.list.forEach((function(e) {
                                t.collectionData.push(new Ct(e))
                            }
                            ))
                        }
                        )))
                    }
                    ))
                }
            },
            components: {
                sideButton: pt["a"],
                albumCollection: It
            }
        }
          , Lt = $t
          , Dt = (n("63bf"),
        Object(y["a"])(Lt, vt, wt, !1, null, null, null))
          , At = Dt.exports
          , Bt = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "album-component-sideAd",
                on: {
                    touchmove: function(t) {
                        t.preventDefault()
                    }
                }
            }, [t.sideAd.isOpen ? n("sideButton", {
                style: {
                    opacity: t.show ? 0 : 1
                },
                attrs: {
                    href: t.sideAd.href,
                    large: "",
                    compact: ""
                },
                nativeOn: {
                    click: function(e) {
                        return t.$emit("click")
                    }
                }
            }, [n("img", {
                staticClass: "album-component-sideAd-sideImage",
                attrs: {
                    src: t.sideAd.logo,
                    alt: "logo"
                }
            })]) : t._e(), t.sideAd.isOpen ? t._e() : n("sideButton", {
                attrs: {
                    icon: "subscribe",
                    href: t.sideAd.href,
                    large: "",
                    compact: ""
                },
                nativeOn: {
                    click: function(e) {
                        return t.$emit("click")
                    }
                }
            }, [t._v(t._s(t.$t("album.reserve")))]), t.sideAd.isOpen && t.show || !t.text ? t._e() : n("section", {
                staticClass: "album-component-sideAd-crossBar"
            }, [n("a", {
                staticClass: "album-component-sideAd-crossBar-content",
                attrs: {
                    href: t.sideAd.href,
                    "primary-background": ""
                },
                on: {
                    click: function(e) {
                        return t.$emit("click")
                    }
                }
            }, [t._v("\n      " + t._s(t.text) + "\n      "), n("div", {
                staticClass: "album-component-sideAd-crossBar-arrow",
                attrs: {
                    "primary-background": ""
                }
            })])]), t.sideAd.isOpen && t.show ? n("section", {
                staticClass: "tool-layout",
                staticStyle: {
                    "z-index": "0"
                }
            }) : t._e(), t.sideAd.isOpen && t.show ? n("section", {
                staticClass: "album-component-sideAd-modal",
                attrs: {
                    close: t.animation
                }
            }, [n("button", {
                staticClass: "tool-close album-component-sideAd-modal-close",
                attrs: {
                    "aria-label": "sideAd-close"
                },
                on: {
                    click: t.close
                }
            }, [n("i", {
                staticClass: "iconfont icon-close"
            })]), n("img", {
                staticClass: "album-component-sideAd-modal-image",
                attrs: {
                    src: t.sideAd.logo,
                    alt: "logo"
                }
            }), n("pre", {
                staticClass: "album-component-sideAd-modal-text"
            }, [t._v(t._s(t.text))]), n("a", {
                staticClass: "album-component-sideAd-modal-link",
                attrs: {
                    href: t.sideAd.href
                },
                on: {
                    click: function(e) {
                        return t.$emit("click")
                    }
                }
            }, [t._v(t._s(t.sideAd.buttonText) + " "), n("i", {
                staticClass: "iconfont icon-goin"
            })])]) : t._e()], 1)
        }
          , Et = [];
        function Mt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Rt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Mt(n, !0).forEach((function(e) {
                    Object(c["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Mt(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Ht = {
            name: "sideAd",
            props: {
                sideAd: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                actId: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    animation: !1,
                    show: !this.getHistryOpen(),
                    crossBarTimeout: null
                }
            },
            mounted: function() {
                this.SAVE_SIDEAD_OPEN(this.actId)
            },
            methods: Rt({}, Object(l["c"])(["SAVE_SIDEAD_OPEN"]), {}, Object(l["b"])(["getAlbumState"]), {
                getHistryOpen: function() {
                    var t = this.getAlbumState()[this.actId] || {};
                    return !!t.sideAd
                },
                close: function() {
                    var t = this;
                    this.animation = !0,
                    setTimeout((function() {
                        t.show = !1
                    }
                    ), 800)
                }
            }),
            computed: {
                text: function() {
                    return this.$t("album.bottomAd.".concat(this.sideAd.text)).replace("album.bottomAd.", "")
                }
            },
            components: {
                sideButton: pt["a"]
            }
        }
          , Nt = Ht
          , Gt = (n("dafb"),
        Object(y["a"])(Nt, Bt, Et, !1, null, null, null))
          , qt = Gt.exports
          , Ft = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("a", {
                staticClass: "album-component-bottomAd",
                attrs: {
                    href: t.bottomAd.link
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.$emit("click", t.item)
                    }
                }
            }, [t._v(t._s(t.text) + " "), n("i", {
                staticClass: "iconfont icon-goin"
            })])
        }
          , Ut = []
          , Yt = {
            name: "bottomAd",
            props: {
                bottomAd: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                text: function() {
                    return this.$t("album.bottomAd.".concat(this.bottomAd.text)).replace("album.bottomAd.", "")
                }
            }
        }
          , Vt = Yt
          , Wt = (n("1840"),
        Object(y["a"])(Vt, Ft, Ut, !1, null, null, null))
          , Qt = Wt.exports
          , Jt = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("section", {
                staticClass: "album-component-barrage"
            }, [n("setting", {
                attrs: {
                    album: t.album || t.config,
                    isBarrage: t.isBarrage
                },
                on: {
                    reset: t.reset,
                    barrageSwitch: function(e) {
                        t.isBarrage = !t.isBarrage
                    }
                },
                model: {
                    value: t.config,
                    callback: function(e) {
                        t.config = e
                    },
                    expression: "config"
                }
            }), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isBarrage,
                    expression: "isBarrage"
                }],
                ref: "content",
                staticClass: "album-component-barrage-content",
                on: {
                    contextmenu: function(t) {
                        t.preventDefault(),
                        t.stopPropagation()
                    }
                }
            }, [t._l(t.data, (function(e) {
                return [e.top + t.scrollTop < 200 && e.top + t.scrollTop > -t.barrageHeight ? n("barrageItem", {
                    key: e.id,
                    style: {
                        transform: "translateY(" + (e.top + t.scrollTop) + "px)",
                        width: e.width + "px",
                        height: e.height + "px",
                        background: "rgba(0, 0, 0, " + t.config.backgroundOpacity / 100 + ")"
                    },
                    attrs: {
                        album: t.album,
                        barrage: e
                    },
                    on: {
                        longTap: t.pause,
                        stopLongTap: t.play
                    }
                }) : t._e()]
            }
            ))], 2)], 1)
        }
          , Zt = []
          , Xt = (n("28a5"),
        function t(e) {
            var n = this;
            for (var a in Object(yt["a"])(this, t),
            e)
                this[a] = e[a];
            this.height = 0,
            this.width = 10,
            this.maxWidth = parseInt(.76 * window.innerWidth - 110),
            this.heightLine = 18,
            this.size = 12,
            this.family = "Arial",
            this.texts = [],
            this.font = function() {
                return "".concat(n.size, "px ").concat(n.family)
            }
            ,
            this.everyRow = function() {
                var t = document.createElement("canvas").getContext("2d");
                t.font = n.font();
                for (var e = n.comment.split(""), a = "", i = 0, o = e.length; i < o; i++)
                    a += e.shift(),
                    t.measureText(a).width > n.maxWidth && (n.texts.push(a),
                    a = a.substring(i));
                n.texts.push(a),
                n.width += parseInt(t.measureText(n.texts[0]).width),
                n.height += n.texts.length * n.heightLine
            }
            ,
            this.everyRow()
        }
        )
          , Kt = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("button", {
                staticClass: "album-component-barrage-setting-switch",
                style: {
                    transform: "translate(" + (t.configSwitch.original.x + t.configSwitch.move.x) + "px, " + (t.configSwitch.original.y + t.configSwitch.move.y) + "px)"
                },
                attrs: {
                    full: t.configSwitch.isFull,
                    touch: !t.configSwitch.isTouch
                },
                on: {
                    touchstart: function(e) {
                        return t.switchTouchStart(e)
                    },
                    touchmove: function(e) {
                        return t.switchTouchMove(e)
                    },
                    touchend: function(e) {
                        return t.switchTouchEnd(e)
                    }
                }
            }, [n("i", {
                staticClass: "iconfont icon-barrage"
            }), t._v(t._s(t.$t("album.barrage.title")))]), t.isConfig ? n("div", {
                staticClass: "tool-layout album-component-barrage-setting",
                on: {
                    touchmove: function(t) {
                        t.preventDefault()
                    }
                }
            }, [n("div", {
                staticClass: "album-component-barrage-setting-model"
            }, [n("button", {
                staticClass: "tool-close album-component-barrage-setting-model-close",
                on: {
                    click: function(e) {
                        t.isConfig = !1
                    }
                }
            }, [n("i", {
                staticClass: "iconfont icon-close"
            })]), n("h3", {
                staticClass: "album-component-barrage-setting-model-title"
            }, [t._v(t._s(t.$t("album.barrage.setting")))]), n("li", {
                staticClass: "album-component-barrage-setting-model-item"
            }, [n("label", {
                staticClass: "album-component-barrage-setting-model-item-name"
            }, [t._v(t._s(t.$t("album.barrage.opacity")))]), n("formRange", {
                staticClass: "album-component-barrage-setting-model-item-range",
                model: {
                    value: t.value.backgroundOpacity,
                    callback: function(e) {
                        t.$set(t.value, "backgroundOpacity", e)
                    },
                    expression: "value.backgroundOpacity"
                }
            }), n("span", {
                staticClass: "album-component-barrage-setting-model-item-value"
            }, [t._v(t._s(t.value.backgroundOpacity) + "%")])], 1), n("li", {
                staticClass: "album-component-barrage-setting-model-item"
            }, [n("label", {
                staticClass: "album-component-barrage-setting-model-item-name"
            }, [t._v(t._s(t.$t("album.barrage.display")))]), n("formRange", {
                staticClass: "album-component-barrage-setting-model-item-range",
                attrs: {
                    min: 10
                },
                model: {
                    value: t.value.height,
                    callback: function(e) {
                        t.$set(t.value, "height", e)
                    },
                    expression: "value.height"
                }
            }), n("span", {
                staticClass: "album-component-barrage-setting-model-item-value"
            }, [t._v(t._s(t.value.height) + "%")])], 1), n("button", {
                staticClass: "album-component-barrage-setting-model-reset",
                on: {
                    click: function(e) {
                        return t.$emit("reset")
                    }
                }
            }, [t._v(t._s(t.$t("album.barrage.reset")))]), n("button", {
                staticClass: "album-component-barrage-setting-model-closeBarrage",
                on: {
                    click: function(e) {
                        return t.$emit("barrageSwitch")
                    }
                }
            }, [t._v(t._s(t.isBarrage ? t.$t("album.barrage.close") : t.$t("album.barrage.open")))])])]) : t._e()])
        }
          , te = []
          , ee = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                ref: "content",
                staticClass: "form-range",
                attrs: {
                    disabled: t.disabled
                }
            }, [n("div", {
                staticClass: "form-range-runway"
            }), n("div", {
                staticClass: "form-range-progress",
                style: {
                    width: t.progress + "%"
                }
            }, [n("div", {
                ref: "thumb",
                staticClass: "form-range-thumb",
                on: {
                    touchstart: function(e) {
                        return t.start(e)
                    },
                    touchmove: function(e) {
                        return t.move(e)
                    },
                    touchend: t.end
                }
            })])])
        }
          , ne = []
          , ae = {
            name: "form-range",
            props: {
                min: {
                    type: Number,
                    default: 0
                },
                max: {
                    type: Number,
                    default: 100
                },
                step: {
                    type: Number,
                    default: 1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                value: {
                    type: Number
                }
            },
            data: function() {
                return {
                    dragState: {}
                }
            },
            methods: {
                start: function(t) {
                    if (!this.disabled) {
                        var e = this.$refs.content.getBoundingClientRect()
                          , n = this.$refs.thumb.getBoundingClientRect()
                          , a = {
                            left: n.left - e.left,
                            top: n.top - e.top,
                            thumbBoxLeft: n.left
                        }
                          , i = t.touches[0].clientX - a.thumbBoxLeft;
                        this.dragState = {
                            thumbStartLeft: a.left,
                            thumbStartTop: a.top,
                            thumbClickDetalX: i
                        },
                        this.$emit("before", this.value)
                    }
                },
                move: function(t) {
                    if (!this.disabled) {
                        var e = this.$refs.content
                          , n = e.getBoundingClientRect()
                          , a = t.touches[0].pageX - n.left - this.dragState.thumbStartLeft - this.dragState.thumbClickDetalX
                          , i = Math.ceil((this.max - this.min) / this.step)
                          , o = this.dragState.thumbStartLeft + a - (this.dragState.thumbStartLeft + a) % (n.width / i)
                          , s = Math.range(0, o / n.width, 1);
                        this.$emit("input", Math.round(this.min + s * (this.max - this.min)))
                    }
                },
                end: function() {
                    this.disabled || (this.$emit("change", this.value),
                    this.dragState = {})
                }
            },
            computed: {
                progress: function() {
                    var t = this.value;
                    return t ? Math.floor((t - this.min) / (this.max - this.min) * 100) : 0
                }
            }
        }
          , ie = ae
          , oe = (n("2d25"),
        Object(y["a"])(ie, ee, ne, !1, null, null, null))
          , se = oe.exports
          , ce = {
            name: "setting",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                isBarrage: {
                    type: Boolean,
                    default: !0
                },
                value: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    configSwitch: {
                        showRange: {
                            sx: 10,
                            sy: 10,
                            ex: window.innerWidth - 115,
                            ey: window.innerHeight - 42
                        },
                        original: {
                            x: window.innerWidth,
                            y: 0
                        },
                        touchStart: {
                            x: 0,
                            y: 0
                        },
                        move: {
                            x: 0,
                            y: 0
                        },
                        touchStartTime: 0,
                        isTouch: !1,
                        isFull: !0
                    },
                    isConfig: !1
                }
            },
            mounted: function() {
                var t = this;
                setTimeout((function() {
                    t.switchPosition(t.configSwitch.original.x, document.getElementsByClassName("album-top")[0].offsetTop + 38)
                }
                ), 100),
                setTimeout((function() {
                    t.configSwitch.isFull = !1
                }
                ), 8e3)
            },
            methods: {
                switchTouchStart: function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    this.configSwitch.isTouch = !0,
                    this.configSwitch.touchStartTime = (new Date).getTime(),
                    this.configSwitch.touchStart.x = t.touches[0].clientX,
                    this.configSwitch.touchStart.y = t.touches[0].clientY
                },
                switchTouchMove: function(t) {
                    this.configSwitch.touchStartTime = 0,
                    this.configSwitch.move.x = parseInt(t.touches[0].clientX - this.configSwitch.touchStart.x),
                    this.configSwitch.move.y = parseInt(t.touches[0].clientY - this.configSwitch.touchStart.y)
                },
                switchTouchEnd: function(t) {
                    (new Date).getTime() - this.configSwitch.touchStartTime < 300 && this.configSwitch.move.x + this.configSwitch.move.y < 10 && (this.isConfig = !0),
                    this.configSwitch.isTouch = !1,
                    this.configSwitch.original.x += this.configSwitch.move.x,
                    this.configSwitch.original.y += this.configSwitch.move.y,
                    this.configSwitch.touchStart.x = 0,
                    this.configSwitch.touchStart.y = 0,
                    this.configSwitch.move.x = 0,
                    this.configSwitch.move.y = 0,
                    this.switchPosition()
                },
                switchPosition: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.configSwitch.original.x
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.configSwitch.original.y;
                    this.configSwitch.original.x = Math.range(this.configSwitch.showRange.sx, t, this.configSwitch.showRange.ex),
                    this.configSwitch.original.y = Math.range(this.configSwitch.showRange.sy, e, this.configSwitch.showRange.ey),
                    this.configSwitch.original.x = this.configSwitch.original.x < (window.innerWidth - 32) / 2 ? this.configSwitch.showRange.sx : this.configSwitch.showRange.ex
                },
                resize: function() {
                    this.configSwitch.showRange.ex = window.innerWidth - (this.configSwitch.isFull ? 115 : 42),
                    this.configSwitch.showRange.ey = window.innerHeight - 42,
                    this.switchPosition()
                }
            },
            watch: {
                "configSwitch.isFull": function() {
                    this.configSwitch.showRange.ex = window.innerWidth - 42,
                    this.switchPosition()
                }
            },
            components: {
                formRange: se
            }
        }
          , re = ce
          , le = (n("86d3"),
        Object(y["a"])(re, Kt, te, !1, null, null, null))
          , ue = le.exports
          , he = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("transition", {
                attrs: {
                    name: "fade"
                }
            }, [n("div", {
                staticClass: "album-component-barrage-barrageItem",
                on: {
                    touchstart: function(e) {
                        return e.preventDefault(),
                        t.praise(e)
                    },
                    touchend: t.stopPraise,
                    touchcancel: t.stopPraise
                }
            }, [n("img", {
                staticClass: "album-component-barrage-barrageItem-head",
                attrs: {
                    src: t.barrage.portrait,
                    alt: "portrait"
                }
            }), n("span", {
                staticClass: "album-component-barrage-barrageItem-text"
            }, [t._v(t._s(t.barrage.comment))]), n("div", {
                ref: "animation",
                staticClass: "album-component-barrage-barrageItem-like",
                attrs: {
                    liked: t.barrage.isLike
                }
            }, [t._v("\n      " + t._s(t.count) + "\n      "), n("i", {
                staticClass: "iconfont",
                class: t.barrage.isLike ? "icon-liked" : "icon-like"
            })])])])
        }
          , me = [];
        function de(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function ge(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? de(n, !0).forEach((function(e) {
                    Object(c["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : de(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var pe = {
            name: "barrageItem",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                barrage: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    touchTimeout: null,
                    praiseTimeout: null,
                    anim: null,
                    delayPraise: !1
                }
            },
            methods: ge({}, Object(l["c"])(["SAVE_COMMENT_LIKED"]), {
                praise: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t(e) {
                        var n, a = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.barrage.isLike) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.next = 3,
                                    this.submit();
                                case 3:
                                    if (n = t.sent,
                                    n && (this.barrage.isLike = !0,
                                    this.$emit("praise", this.barrage)),
                                    !this.delayPraise) {
                                        t.next = 10;
                                        break
                                    }
                                    return this.delayPraise = !1,
                                    this.barrage.likeTotal++,
                                    this.animation(e),
                                    t.abrupt("return");
                                case 10:
                                    this.barrage.likeTotal++,
                                    this.animation(e),
                                    this.touchTimeout = setTimeout((function() {
                                        a.$emit("longTap", a.barrage),
                                        a.touchTimeout = null,
                                        a.praiseTimeout = setInterval((function() {
                                            a.animation(e)
                                        }
                                        ), 300)
                                    }
                                    ), 100);
                                case 13:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                submit: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
                        var e;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    this.$API.upLikes(this.album.id, 1, this.barrage.id, this.album.custom);
                                case 3:
                                    if (e = t.sent,
                                    0 !== e.e) {
                                        t.next = 9;
                                        break
                                    }
                                    return this.SAVE_COMMENT_LIKED({
                                        actId: this.album.id,
                                        commentId: this.barrage.id
                                    }),
                                    t.abrupt("return", !0);
                                case 9:
                                    return t.abrupt("return", !1);
                                case 10:
                                    t.next = 15;
                                    break;
                                case 12:
                                    return t.prev = 12,
                                    t.t0 = t["catch"](0),
                                    t.abrupt("return", !1);
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[0, 12]])
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                animation: function(t) {
                    this.barrage.likeCount++;
                    var e = document.createElement("div");
                    e.className = "commentLike iconfont icon-liked",
                    t.target.appendChild(e),
                    setTimeout((function() {
                        t.target.removeChild(e)
                    }
                    ), 2e3)
                },
                stopPraise: function() {
                    this.delayPraise = !0,
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    this.touchTimeout = null,
                    this.$emit("stopLongTap", this.barrage.id),
                    this.praiseTimeout && clearInterval(this.praiseTimeout),
                    this.praiseTimeout = null
                }
            }),
            computed: {
                count: function() {
                    return this.barrage.likeTotal > 999 ? "999+" : this.barrage.likeTotal
                }
            }
        }
          , fe = pe
          , be = (n("f4e1"),
        Object(y["a"])(fe, he, me, !1, null, null, null))
          , ve = be.exports;
        function we(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function ye(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? we(n, !0).forEach((function(e) {
                    Object(c["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : we(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Ce = {
            name: "barrage",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                defaultHeight: {
                    type: Number,
                    default: 40
                },
                isCustom: {
                    type: Number,
                    default: 1
                },
                comments: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    data: [],
                    config: this.cacheConfig() || {
                        backgroundOpacity: 50,
                        height: this.defaultHeight
                    },
                    isBarrage: !0,
                    isEnd: !1,
                    isPlay: !0,
                    steep: 1,
                    scrollTop: 0,
                    barrageHeight: 0,
                    barrageTimeout: null,
                    touchTimeout: null,
                    praiseTimeout: null,
                    requireTimeout: null
                }
            },
            mounted: function() {
                this.comments.length > 0 || this.getData(),
                this.play(),
                this.barrageHeight = parseInt(this.config.height * window.innerHeight / 100)
            },
            methods: ye({}, Object(l["c"])(["SAVE_BARRAGE_CONFIG"]), {}, Object(l["b"])(["getAlbumState"]), {
                cacheConfig: function() {
                    var t = this.getAlbumState()[this.album.id];
                    return t ? t.barrage : void 0
                },
                getData: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.$parent.getComment();
                                case 2:
                                    this.processData();
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                processData: function() {
                    var t = []
                      , e = 0;
                    this.comments.forEach((function(n) {
                        var a = new Xt(n);
                        a.top = e,
                        t.push(a),
                        e += a.height + 24
                    }
                    )),
                    this.data = t
                },
                play: function() {
                    var t = this;
                    setTimeout((function() {
                        t.runBarrage()
                    }
                    ), 100)
                },
                pause: function() {
                    this.barrageTimeout && cancelAnimationFrame(this.barrageTimeout)
                },
                reset: function() {
                    this.config.backgroundOpacity = 50,
                    this.config.height = this.defaultHeight
                },
                runBarrage: function() {
                    var t = this;
                    this.pause(),
                    this.isPlay && !this.isEnd && this.isBarrage && (this.scrollTop -= this.steep,
                    this.$refs.content.children.length ? this.barrageTimeout = requestAnimationFrame((function() {
                        t.runBarrage()
                    }
                    )) : this.isEnd = !0)
                }
            }),
            beforeDestroy: function() {
                this.pause(),
                this.requireTimeout && clearTimeout(this.requireTimeout)
            },
            watch: {
                isBarrage: function(t) {
                    t && (this.isEnd && (this.isEnd = !1,
                    this.scrollTop = 0),
                    this.play())
                },
                isPlay: function(t, e) {
                    t && !e && this.play()
                },
                "config.backgroundOpacity": function() {
                    this.SAVE_BARRAGE_CONFIG({
                        actId: this.album.id,
                        config: this.config
                    })
                },
                "config.height": function(t, e) {
                    this.barrageHeight = parseInt(t * window.innerHeight / 100),
                    this.SAVE_BARRAGE_CONFIG({
                        actId: this.album.id,
                        config: this.config
                    }),
                    this.isEnd = !1,
                    this.play()
                },
                isEnd: function(t) {
                    var e = this;
                    t && (clearTimeout(this.requireTimeout),
                    this.requireTimeout = setTimeout((function() {
                        e.getData(),
                        e.isEnd = !1,
                        e.scrollTop = 0,
                        e.play()
                    }
                    ), 1e4))
                }
            },
            components: {
                setting: ue,
                barrageItem: ve
            }
        }
          , ke = Ce
          , Se = (n("098e"),
        Object(y["a"])(ke, Jt, Zt, !1, null, null, null))
          , ze = Se.exports
          , _e = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("transition", {
                attrs: {
                    name: "slideInRight"
                }
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.updateCount > 0,
                    expression: "updateCount > 0"
                }],
                staticClass: "album-component-liveCount",
                attrs: {
                    "primary-background": ""
                }
            }, [t._v(t._s(t.$tc("album.liveCount", t.updateCount, {
                count: t.updateCount
            })))])])
        }
          , Pe = []
          , xe = {
            name: "liveCount",
            props: {
                classify: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                updateCount: function() {
                    return this.classify.lastCount - this.classify.count
                }
            }
        }
          , Oe = xe
          , Te = (n("4736"),
        Object(y["a"])(Oe, _e, Pe, !1, null, null, null))
          , je = Te.exports
          , Ie = n("847d")
          , $e = n("0c4f")
          , Le = n("83a8")
          , De = n("5985")
          , Ae = n("de7c")
          , Be = n("f616")
          , Ee = n("c0c7")
          , Me = n("69dd")
          , Re = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "album-component-commentList"
            }, t._l(t.comments, (function(e) {
                return n("commentItem", {
                    key: e.id,
                    attrs: {
                        album: t.album,
                        comment: e
                    },
                    nativeOn: {
                        click: function(n) {
                            return t.$emit("showOperation", e)
                        }
                    }
                })
            }
            )), 1)
        }
          , He = []
          , Ne = n("3275")
          , Ge = {
            name: "commentList",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                comments: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                slotProps: {
                    type: Object,
                    default: function() {
                        return {
                            clickHandle: function() {}
                        }
                    }
                }
            },
            components: {
                commentItem: Ne["a"]
            }
        }
          , qe = Ge
          , Fe = Object(y["a"])(qe, Re, He, !1, null, null, null)
          , Ue = Fe.exports
          , Ye = n("8927")
          , Ve = n("8476")
          , We = n("0965")
          , Qe = n("685c")
          , Je = n("fa89")
          , Ze = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.value ? a("div", {
                staticClass: "tool-layout alvum-component-favorite",
                on: {
                    touchmove: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("div", {
                staticClass: "tool-content"
            }, [a("img", {
                staticClass: "alvum-component-favorite-image",
                attrs: {
                    src: n("fd15"),
                    alt: "favorite"
                }
            }), a("button", {
                staticClass: "alvum-component-favorite-button",
                on: {
                    click: function(e) {
                        t.show = !1
                    }
                }
            }, [t._v(t._s(t.$t("album.favorite.ok")))])])]) : t._e()])
        }
          , Xe = [];
        function Ke(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function tn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ke(n, !0).forEach((function(e) {
                    Object(c["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ke(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var en = {
            name: "favorite",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                value: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    show: !1
                }
            },
            mounted: function() {
                if (Object(d["a"])("wechat")) {
                    var t = this.getAlbumState()[this.album.id] || {};
                    this.show = !t.favorite,
                    this.SAVE_FAVORITE_OPEN(this.album.id),
                    this.$emit("input", this.show)
                }
            },
            methods: tn({}, Object(l["c"])(["SAVE_FAVORITE_OPEN"]), {}, Object(l["b"])(["getAlbumState"])),
            watch: {
                show: function() {
                    this.$emit("input", this.show)
                }
            }
        }
          , nn = en
          , an = (n("0d2c"),
        Object(y["a"])(nn, Ze, Xe, !1, null, null, null))
          , on = an.exports
          , sn = n("6e02")
          , cn = n("3264")
          , rn = n("0b61")
          , ln = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return t.isShowLayer ? n("div", {
                staticClass: "album-component-findMe ",
                on: {
                    click: function(e) {
                        return e.target !== e.currentTarget ? null : t.$emit("close")
                    }
                }
            }, [n("transition", {
                attrs: {
                    name: "slideInBottom"
                },
                on: {
                    "after-leave": t.alfterCardLeave
                }
            }, [t.isShowCard ? n("div", {
                staticClass: "album-component-findMe-card  album-component-findMeCard",
                style: {
                    bottom: t.bottom
                }
            }, [n("div", {
                staticClass: "album-component-findMe-card-title ",
                on: {
                    touchstart: t.touchstart,
                    touchmove: t.touchmove,
                    touchend: t.touchend
                }
            }, [n("div", {
                staticClass: "album-component-findMe-card-title-icon album-component-findMeCard-icon",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.$emit("close")
                    }
                }
            }, [n("i", {
                staticClass: "iconfont icon-bottom"
            })]), n("div", {
                staticClass: "album-component-findMe-card-title-font album-component-findMeCard-font"
            }, [t._v("\n          " + t._s(t.$t("album.findMe.placeCheckWay")) + "\n        ")])]), n("div", {
                staticClass: "album-component-findMe-card-body"
            }, [n("div", {
                staticClass: "album-component-findMe-card-body-findFace",
                on: {
                    click: function(e) {
                        return t.$emit("findMe")
                    }
                }
            }, [n("div", {
                staticClass: "album-component-findMe-card-body-findFace-head"
            }, [n("span", [t._v(t._s(t.$t("album.findMe.faceScan")))])]), n("div", {
                staticClass: "album-component-findMe-card-body-findFace-footer"
            }, [t._v("\n            " + t._s(t.$t("album.findMe.faceHint")) + "\n          ")])]), n("div", {
                staticClass: "album-component-findMe-card-body-findPhone",
                on: {
                    click: function(e) {
                        return t.$emit("findPhone")
                    }
                }
            }, [n("div", {
                staticClass: "album-component-findMe-card-body-findPhone-head"
            }, [n("span", [t._v(t._s(t.$t("album.findMe.numberScan")))])]), n("div", {
                staticClass: "album-component-findMe-card-body-findPhone-footer"
            }, [t._v("\n            " + t._s(t.$t("album.findMe.numberHint")) + "\n          ")])])])]) : t._e()])], 1) : t._e()
        }
          , un = []
          , hn = document.documentElement.clientHeight
          , mn = hn - 338
          , dn = 0
          , gn = 0
          , pn = {
            name: "findMe",
            props: {
                album: {
                    type: Object,
                    default: function() {}
                },
                show: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    bottom: 0,
                    isShowLayer: !1,
                    isShowCard: !1
                }
            },
            mounted: function() {},
            methods: {
                touchstart: function(t) {
                    dn = t.touches[0].clientY
                },
                touchmove: function(t) {
                    gn = t.touches[0].clientY,
                    t.touches[0].clientY > mn && -(gn - dn) < 0 && (this.bottom = -(gn - dn) + "px"),
                    t.preventDefault()
                },
                touchend: function() {
                    var t = this
                      , e = gn - mn;
                    e > 50 ? (t.$emit("close"),
                    this.$nextTick((function() {
                        t.bottom = "0px"
                    }
                    ))) : setTimeout((function n() {
                        e > 5 ? (e /= 3,
                        t.bottom = -e + "px",
                        setTimeout(n, 16.6)) : t.bottom = "0px"
                    }
                    ), 16.6)
                },
                alfterCardLeave: function() {
                    !1 === this.isShowCard && (this.isShowLayer = !1)
                }
            },
            components: {},
            watch: {
                show: function(t) {
                    var e = this;
                    t ? (this.isShowLayer = !0,
                    window.setTimeout((function() {
                        e.isShowCard = t
                    }
                    ), 100)) : this.isShowCard = t
                }
            }
        }
          , fn = pn
          , bn = (n("ac4c"),
        Object(y["a"])(fn, ln, un, !1, null, null, null))
          , vn = bn.exports;
        function wn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function yn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? wn(n, !0).forEach((function(e) {
                    Object(c["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : wn(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var Cn = {
            name: "album",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                hasMore: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    from: this.$route.query.from,
                    curComment: null,
                    isShowOperation: !1,
                    nowTab: "",
                    nowClassify: null,
                    nowlayout: this.album.displayType,
                    isShowClassify: !0,
                    sideBarDefaultSwitch: this.album.sideBarStatus,
                    sideBarManualSwitch: !1,
                    favoriteSwitch: !1,
                    qrShareSwitch: !1,
                    interactiveUploadSwitch: !1,
                    bannerIndex: 0,
                    bigImageStatus: !1,
                    bigImageIndex: 0,
                    jigsawSwitch: !1,
                    jigsawSelectPhoto: !1,
                    jigsawPhotos: [],
                    albumTopHeight: 0,
                    navHeight: 44,
                    scrolltop: 0,
                    scrollState: !1,
                    rollingDelay: !1,
                    rollingDelayTimeout: null,
                    photos: [],
                    graphics: [],
                    photoRequest: !1,
                    photoCheckTimeout: null,
                    videos: [],
                    comments: [],
                    language: g["a"],
                    location: window.location,
                    isShowFindMeCard: !1,
                    verify: d["a"]
                }
            },
            beforeDestroy: function() {
                this.sendStatistics(10),
                this.stopCheckNewPhoto();
                try {
                    document.head.removeChild(document.getElementById("albumTheme"))
                } catch (t) {}
            },
            mounted: function() {
                var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
                    var e, n;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                Object(m["a"])("link", {
                                    id: "albumTheme",
                                    title: "albumTheme",
                                    rel: "stylesheet",
                                    href: "".concat(u["themePath"], "/theme-").concat(this.album.style, "/index.css")
                                });
                            case 2:
                                e = this.album.findClassify(this.$route.params.sep),
                                this.nowClassify = e || this.album.classify[0],
                                this.albumTopHeight = this.beforeNavHeight(),
                                this.isShowClassify = this.album.classify.length > 1,
                                [""].indexOf(this.album.id) >= 0 ? this.nowTab = "hot" : this.nowTab = "live",
                                this.sendStatistics(1, {
                                    from: this.$route.query.from || ""
                                }),
                                this.sendStatistics(7),
                                this.sendUv();
                                try {
                                    n = window.getComputedStyle(document.getElementsByClassName("album-top-animation")[0]).content.replace(/"/g, ""),
                                    "true" === n && Object(h["a"])(this.$refs.albumTopAnimation, "".concat(u["themePath"], "/theme-").concat(this.album.style, "/topBgLottie.json"))
                                } catch (a) {}
                                this.$emit("loadingScore"),
                                !this.album.isPoster && this.$emit("loadingScore"),
                                this.album.share.link = location.href,
                                Object(Je["a"])(this.album.share);
                            case 15:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                function e() {
                    return t.apply(this, arguments)
                }
                return e
            }(),
            methods: yn({}, Object(l["c"])(["SAVE_LANGUAGE"]), {
                beforeNavHeight: function() {
                    var t = -this.navHeight;
                    return this.$refs.albumTop && (t += this.$refs.albumTop.clientHeight),
                    this.$refs.banner && (t += this.$refs.banner.$el.clientHeight),
                    t
                },
                clickCommentHandle: function(t) {
                    this.curComment = t,
                    this.isShowOperation = !0
                },
                replyComment: function() {
                    this.isShowComment = !0,
                    this.isShowOperation = !1;
                    var t = this.$refs.commentSend;
                    t && t.showLayerHandle(this.curComment)
                },
                informComment: function() {
                    var t = this;
                    this.$API.informComment(this.curComment.id).then((function(e) {
                        e && 0 === e.e && (t.isShowOperation = !1,
                        t.$notify(t.$t("album.notify.reportSuccess")))
                    }
                    ))
                },
                classifySwitch: function(t, e) {
                    t === e && "live" === t && (this.isShowClassify = !this.isShowClassify)
                },
                classifyChanger: function() {
                    this.photos = [],
                    this.graphics = [],
                    this.resetGetPhotos(),
                    this.startCheckNewPhoto(),
                    this.routerReplaceForClassify(),
                    this.album.share.link = location.href,
                    Object(Je["a"])(this.album.share)
                },
                routerReplaceForClassify: function() {
                    this.$router.replace("/album/".concat(this.album.id, "/").concat(this.nowClassify.id, "/").concat(this.from ? "?from=" + this.from : "")),
                    this.sendStatistics(7),
                    this.sendUv()
                },
                getPhoto: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
                        var e, n, a, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.hasMore) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (!this.photoRequest) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 4:
                                    return this.photoRequest = !0,
                                    e = "live" === this.nowTab ? this.nowClassify.id : 0,
                                    t.next = 8,
                                    this.$parent.getPhotos(e);
                                case 8:
                                    n = t.sent,
                                    a = n.graphics,
                                    i = n.photos,
                                    this.photos = i,
                                    this.graphics = a,
                                    this.photoRequest = !1;
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                updateScrollPosition: function() {
                    var t = this;
                    setTimeout((function() {
                        t.$refs.scrollPosition && t.$refs.scrollPosition.getAllPhotoPosition()
                    }
                    ), 300)
                },
                resetGetPhotos: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.$parent.resetPhotos();
                                case 2:
                                    return t.next = 4,
                                    this.getPhoto();
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                reloadAll: function() {
                    this.nowClassify.count = this.nowClassify.lastCount,
                    this.$parent.updatePhotos(),
                    this.resetGetPhotos(),
                    this.$refs.scrollList.scrollToA(0)
                },
                startCheckNewPhoto: function() {
                    var t = this;
                    this.stopCheckNewPhoto(),
                    "live" === this.nowTab && (this.photoCheckTimeout = setInterval((function() {
                        t.$parent.checkNewPhoto()
                    }
                    ), 6e3))
                },
                stopCheckNewPhoto: function() {
                    this.photoCheckTimeout && clearInterval(this.photoCheckTimeout),
                    this.photoCheckTimeout = null
                },
                getVideo: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.$parent.getVideos();
                                case 2:
                                    this.videos = t.sent;
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                getComment: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.$parent.checkNewPhoto();
                                case 2:
                                    return t.next = 4,
                                    this.$parent.getComments();
                                case 4:
                                    this.comments = t.sent;
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                scroll: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.scrollState = !0,
                    this.scrolltop = t,
                    this.$refs.scrollPosition && this.$refs.scrollPosition.compute(),
                    this.sideBarDefaultSwitch = !1,
                    this.rollingDelay = !0,
                    this.rollingDelayTimeout && clearTimeout(this.rollingDelayTimeout)
                },
                scrollEnd: function() {
                    var t = this;
                    this.scrollState = !1,
                    this.rollingDelayTimeout = setTimeout((function() {
                        t.rollingDelay = !1,
                        t.rollingDelayTimeout = null
                    }
                    ), 500)
                },
                loadmore: function() {
                    this.photos.length && ("live" !== this.nowTab && "hot" !== this.nowTab || this.getPhoto(),
                    "live" === this.nowTab && "timeline" === this.nowlayout && this.$refs.photoListTimeLine.timeLineScrollLoadMore())
                },
                sideBarStateSwitch: function(t) {
                    t ? (this.sideBarDefaultSwitch = !1,
                    this.sideBarManualSwitch = !0) : (this.sideBarDefaultSwitch = !1,
                    this.sideBarManualSwitch = !1)
                },
                favoriteState: function(t) {
                    this.favoriteSwitch = t
                },
                openBigImage: function(t, e) {
                    this.bigImageIndex = e,
                    this.bigImageStatus = !0
                },
                photoInit: function(t) {
                    t.faceState || this.$API.v4cFfl(this.album.id, t.id, this.$parent.version.fpl[this.nowClassify.id]).then((function(e) {
                        var n = [];
                        e.d.forEach((function(t) {
                            n.push(new p["a"](t))
                        }
                        )),
                        t.faceList = n,
                        t.faceState = !0
                    }
                    ))
                },
                selectePhoto: function(t) {
                    if ("string" === typeof t) {
                        var e = this.jigsawPhotos.indexOf(t);
                        e < 0 ? this.jigsawPhotos.push(t) : this.jigsawPhotos.splice(e, 1)
                    }
                    if ("object" === Object(s["a"])(t)) {
                        var n = this.jigsawPhotos.findIndex((function(e) {
                            return e.id === t.id
                        }
                        ));
                        n < 0 ? this.jigsawPhotos.push(t) : this.jigsawPhotos.splice(n, 1)
                    }
                },
                setBigImgShare: function() {
                    var t = this.photos[this.bigImageIndex];
                    this.sendStatistics(4, {
                        pc: t.id
                    }),
                    Object(Je["a"])({
                        title: this.album.share.title,
                        imgUrl: Object(sn["a"])(t.msrc, {
                            w: 200,
                            h: 200,
                            m: "fill"
                        }),
                        desc: this.album.share.desc,
                        link: "".concat(location.origin, "/album/sharimg/").concat(this.album.id, "/").concat(this.nowClassify.id, "/").concat(t.id)
                    })
                },
                sendStatistics: function(t, e) {
                    Object(cn["a"])(t, Object.assign({
                        actId: this.album.id,
                        sepId: this.nowClassify.id
                    }, e))
                },
                bigImageLongTap: function(t) {
                    this.sendStatistics(5, {
                        pc: t.id
                    })
                },
                sendUv: function() {
                    var t = this;
                    this.sendStatistics(6),
                    this.uvTimeout && clearInterval(this.uvTimeout),
                    setInterval((function() {
                        t.sendStatistics(6)
                    }
                    ), 54e4)
                },
                getElementToPageTop: function(t) {
                    return t.parentElement ? this.getElementToPageTop(t.parentElement) + t.offsetTop : t.offsetTop
                },
                toFindeMe: function() {
                    this.$router.push({
                        path: "/album/findMe/index/".concat(this.album.id, "/").concat(this.nowClassify.id, "/").concat(this.album.custom, "/")
                    })
                },
                toFindPhone: function() {
                    location.href = "".concat(location.origin, "/textRecognize?id=").concat(this.album.id, "&sepId=").concat(this.nowClassify.id)
                },
                hasPhoneDiscan: function() {
                    this.album.textRecognize ? this.isShowFindMeCard = !0 : this.toFindeMe()
                }
            }),
            computed: {
                scrollListDom: function() {
                    return document.documentElement
                },
                sideBarSwitch: function() {
                    return this.sideBarDefaultSwitch || this.sideBarManualSwitch
                },
                photoTotol: function() {
                    return "live" === this.nowTab ? this.album.findClassify(this.nowClassify.id).count : "hot" === this.nowTab ? this.photos.length : "video" === this.nowTab ? this.videos.length : 0
                },
                layoutIcon: function() {
                    return "waterfall" === this.nowlayout ? "waterfall" : "timeline" === this.nowlayout ? "time" : "gridLine"
                },
                isShowScrollPosition: function() {
                    return "live" === this.nowTab && "timeline" !== this.nowlayout || "hot" === this.nowTab || "video" === this.nowTab
                }
            },
            watch: {
                nowTab: function(t) {
                    this.photos.length = 0,
                    "live" === t && (this.resetGetPhotos(),
                    this.startCheckNewPhoto()),
                    "hot" === t && (this.$parent.version.fpl["0"] = this.$parent.version.newFpl["0"],
                    this.resetGetPhotos(),
                    this.stopCheckNewPhoto()),
                    "video" === t && (this.getVideo(),
                    this.stopCheckNewPhoto()),
                    "comment" === t && (this.getComment(),
                    this.stopCheckNewPhoto())
                },
                nowlayout: function(t) {
                    var e = this;
                    "waterfall" === t && "grid" === t && (this.album.sort = this.album.sort % 2 === 0 ? 4 : 3),
                    "timeline" === t && (this.album.sort = this.album.sort % 2 === 0 ? 6 : 5),
                    setTimeout((function() {
                        e.$refs.scrollPosition && e.$refs.scrollPosition.getAllPhotoPosition()
                    }
                    ), 100)
                },
                bigImageIndex: function(t) {
                    this.setBigImgShare()
                },
                photos: function() {
                    this.updateScrollPosition()
                },
                videos: function() {
                    this.updateScrollPosition()
                },
                "album.sort": function() {
                    this.sendStatistics(13)
                },
                bigImageStatus: function() {
                    if (this.bigImageStatus)
                        this.setBigImgShare();
                    else {
                        Object(Je["a"])(this.album.share);
                        var t = this.$refs.list.getElementsByClassName("album-component-listPhoto")[this.bigImageIndex]
                          , e = 0;
                        if ("timeline" === this.nowlayout) {
                            var n = this.photos[this.bigImageIndex].id;
                            return t = Object(o["a"])(this.$refs.list.getElementsByClassName("album-component-listPhoto")).find((function(t) {
                                return t.getAttribute("data-pid") === n
                            }
                            )),
                            t && (e = this.getElementToPageTop(t) - document.documentElement.clientHeight / 2,
                            this.$refs.scrollList.scrollToA(e)),
                            !1
                        }
                        this.$refs.scrollList.scrollToA(this.albumTopHeight + 54 + e + t.offsetTop + t.clientHeight / 2 - document.documentElement.clientHeight / 2)
                    }
                }
            },
            components: {
                findMe: vn,
                scrollList: Ve["a"],
                banner: S["a"],
                liveMenu: T,
                albumInfo: j["a"],
                sponsor: Q,
                navigation: J["a"],
                interactiveUpload: at,
                qrShare: it["a"],
                dropDown: ot["a"],
                pecket: k,
                classify: st["a"],
                photoListGrid: Ae["a"],
                photoListWaterfall: Be["a"],
                photoListHot: Ee["a"],
                videoList: ct["a"],
                commentList: Ue,
                commentSend: Ye["a"],
                endingAD: dt,
                sideBar: gt["a"],
                sideButton: pt["a"],
                jigsaw: ft["a"],
                sort: bt["a"],
                collection: At,
                sideAd: qt,
                bottomAd: Qt,
                barrage: ze,
                liveCount: je,
                poster: Ie["a"],
                bigImage: $e["a"],
                photoInfo: Le["a"],
                bigImageLayer: De["a"],
                scrollPosition: We["a"],
                photoListTimeLine: Me["a"],
                version: Qe["a"],
                favorite: on,
                operation: rn["a"]
            }
        }
          , kn = Cn
          , Sn = (n("5d2a"),
        Object(y["a"])(kn, a, i, !1, null, null, null));
        e["default"] = Sn.exports
    },
    6755: function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("section", {
                staticClass: "album-component-sideBar"
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.contentCount,
                    expression: "contentCount"
                }],
                ref: "content",
                staticClass: "album-component-sideBar-content",
                attrs: {
                    open: t.show
                }
            }, [t._t("default")], 2), t.contentCount ? n("button", {
                staticClass: "album-component-sideBar-switch",
                attrs: {
                    open: t.show,
                    "primary-background": "",
                    "aria-label": "switch"
                },
                on: {
                    click: function(e) {
                        t.show = !t.show
                    }
                }
            }, [n("i", {
                staticClass: "iconfont icon-close"
            })]) : t._e(), n("div", {
                staticClass: "album-component-sideBar-after"
            }, [t._t("after")], 2)])
        }
          , i = []
          , o = {
            name: "sideBar",
            props: {
                value: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    contentHeight: 0,
                    show: this.value,
                    contentCount: 0
                }
            },
            mounted: function() {
                this.contentCount = this.$refs.content.childNodes.length
            },
            watch: {
                show: function() {
                    var t = this;
                    this.show ? this.$emit("input", this.show) : setTimeout((function() {
                        t.$emit("input", t.show)
                    }
                    ), 300)
                },
                value: function() {
                    this.show = this.value
                }
            }
        }
          , s = o
          , c = (n("5b38"),
        n("2877"))
          , r = Object(c["a"])(s, a, i, !1, null, null, null);
        e["a"] = r.exports
    },
    "685c": function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "components-version"
            }, [t._v(t._s(t.version))])
        }
          , i = []
          , o = n("9224")
          , s = {
            name: "version",
            data: function() {
                return {
                    version: o.version
                }
            }
        }
          , c = s
          , r = (n("aca2"),
        n("2877"))
          , l = Object(r["a"])(c, a, i, !1, null, null, null);
        e["a"] = l.exports
    },
    "69dd": function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "album-components-photoTimeLine"
            }, [t.timeStampFrag && t.timeStampFrag.length ? t._l(t.timeStampFrag, (function(e, a) {
                return n("photoListTimeLineBox", {
                    key: a,
                    attrs: {
                        time: e.time,
                        dataList: e.data,
                        startShowStatus: 0 === a,
                        timeLineGroup: t.timePhotosOne,
                        isShowLine: a !== t.timeStampFrag.length - 1,
                        select: t.select,
                        selecteds: t.selecteds,
                        bigImgCurPhoto: t.bigImgCurPhoto
                    },
                    on: {
                        selecte: t.selecteEvent,
                        loadData: function(n) {
                            return t.clickLoadData(e.p)
                        },
                        clickEvent: t.bubblingEvent
                    }
                })
            }
            )) : t._e(), t.timeStampFrag && !t.timeStampFrag.length ? n("nullData", [t._v(t._s(t.$t("album.nullData.live")))]) : t._e()], 2)
        }
          , i = []
          , o = (n("8e6e"),
        n("20d6"),
        n("75fc"))
          , s = (n("456d"),
        n("ac6a"),
        n("bd86"))
          , c = (n("55dd"),
        n("96cf"),
        n("3b8d"))
          , r = (n("c5f6"),
        function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "album-components-photoTimeLineBox"
            }, [t.isShowLine ? n("div", {
                staticClass: "album-components-photoTimeLineBox-string album-component-timeline-bg"
            }) : t._e(), n("div", {
                staticClass: "album-components-photoTimeLineBox-date album-component-timeline-color",
                on: {
                    click: function(e) {
                        t.$emit("loadData"),
                        t.isShowImg = !t.isShowImg
                    }
                }
            }, [n("i", {
                staticClass: "iconfont icon-timeLine"
            }), t._v("\n    " + t._s(t.time) + "\n    "), n("span", {
                staticClass: "album-components-photoTimeLineBox-date-goin",
                attrs: {
                    opened: t.isShowImg
                }
            }, [n("i", {
                staticClass: "iconfont icon-goin"
            })])]), t.isShowImg ? n("div", {
                staticClass: "album-components-photoTimeLineBox-imgWrap"
            }, [t._l(t.dataList, (function(e) {
                return [n("listPhoto", {
                    key: e.id,
                    staticClass: "album-components-photoTimeLineBox-imgWrap-item",
                    attrs: {
                        "data-pid": e.id,
                        item: e
                    },
                    nativeOn: {
                        click: function(n) {
                            return t.clickImgBoxHandle(e)
                        }
                    }
                }, [!t.select || "photo" !== e.type && "video" !== e.type ? t._e() : n("div", {
                    staticClass: "album-component-listPhoto-select",
                    attrs: {
                        sort: t.selecteds.findIndex((function(t) {
                            return t.id === e.id
                        }
                        )) + 1
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            t.$emit("selecte", e)
                        }
                    }
                })])]
            }
            ))], 2) : t._e()])
        }
        )
          , l = []
          , u = n("ddeb")
          , h = n("6e02")
          , m = {
            props: {
                isShowLine: {
                    type: Boolean,
                    default: !0
                },
                timeLineGroup: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                time: {
                    type: String,
                    default: null
                },
                dataList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                startShowStatus: {
                    type: Boolean,
                    default: !1
                },
                select: {
                    type: Boolean,
                    default: !1
                },
                selecteds: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                bigImgCurPhoto: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    isShowImg: !1
                }
            },
            components: {
                listPhoto: u["a"]
            },
            methods: {
                getImage: h["a"],
                clickImgBoxHandle: function(t) {
                    this.$emit("clickEvent", t, t.index)
                }
            },
            mounted: function() {
                var t = this;
                this.startShowStatus && this.$emit("loadData"),
                setTimeout((function() {
                    t.isShowImg = t.startShowStatus
                }
                ), 300)
            }
        }
          , d = m
          , g = (n("f18b"),
        n("2877"))
          , p = Object(g["a"])(d, r, l, !1, null, null, null)
          , f = p.exports
          , b = n("fdd7")
          , v = n("d18c");
        function w(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function y(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? w(n, !0).forEach((function(e) {
                    Object(s["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : w(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var C = {
            props: {
                photos: {
                    type: Array,
                    default: null
                },
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                nowClassify: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                select: {
                    type: Boolean,
                    default: !1
                },
                selecteds: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                hasMore: {
                    type: Boolean,
                    default: !0
                },
                bigImageIndex: {
                    type: Number,
                    default: 0
                },
                bigImageStatus: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    timeStampFrag: [],
                    pageNumbersSet: {},
                    timePhotosOne: [],
                    count: 60,
                    curPageStart: 1,
                    maxPage: 9999999999,
                    waitLoad: [],
                    curEvent: "normal",
                    bigImgCurPhoto: {}
                }
            },
            components: {
                photoListTimeLineBox: f,
                nullData: b["a"]
            },
            methods: {
                init: function() {
                    var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.getTimeLineTimeStamp();
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                getTimeLineTimeStamp: function() {
                    var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                        var e, n, a = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return e = this.$parent.$parent.$parent.version.newFpl[this.nowClassify.id],
                                    t.next = 3,
                                    this.$API.v4Fptl(this.album.id, this.count, this.album.sort, this.nowClassify.id, e);
                                case 3:
                                    n = t.sent,
                                    0 === n.e && (this.timeStampFrag = n.d.map((function(t) {
                                        return y({}, t, {
                                            time: a.formateDateByHour(t.h),
                                            data: []
                                        })
                                    }
                                    )));
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                getPhotosByParentFunc: function() {
                    var t = Object(c["a"])(regeneratorRuntime.mark((function t(e) {
                        var n, a = arguments;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (a.length > 1 && void 0 !== a[1] ? a[1] : null,
                                    !this.pageNumbersSet[e]) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return", !1);
                                case 3:
                                    return this.pageNumbersSet[e] = [],
                                    t.next = 6,
                                    this.$parent.$parent.$parent.requestPhotos(this.nowClassify.id, e);
                                case 6:
                                    n = t.sent,
                                    n.length < this.count && (this.curPageStart = 1,
                                    this.maxPage = e),
                                    this.addNewPhotoToPageSet(e, n),
                                    this.objTransformToArray(e, n),
                                    this.setParentPhotos();
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                flatPolyfill: function(t) {
                    return Array.prototype.concat.apply([], t)
                },
                addNewPhotoToPageSet: function(t, e) {
                    var n = this;
                    e.forEach((function(t) {
                        t.hourClassify = n.formateDateByHour(t.timeStamp)
                    }
                    )),
                    this.pageNumbersSet[t] = e
                },
                objTransformToArray: function(t, e) {
                    var n = this
                      , a = Object.keys(this.pageNumbersSet)
                      , i = [];
                    a.forEach((function(t) {
                        var e = n.pageNumbersSet[t];
                        i = [].concat(Object(o["a"])(i), Object(o["a"])(e))
                    }
                    ));
                    var s = [];
                    this.timeStampFrag.forEach((function(t) {
                        var e = i.filter((function(e) {
                            return e.hourClassify === t.time
                        }
                        ));
                        t.data = e,
                        s = [].concat(Object(o["a"])(s), Object(o["a"])(e))
                    }
                    )),
                    this.timePhotosOne = s
                },
                setParentPhotos: function() {
                    this.timePhotosOne.forEach((function(t, e) {
                        t.index = e
                    }
                    )),
                    this.timePhotosOne.push = function() {}
                    ;
                    var t = this.$parent.$parent.photos[this.bigImageIndex];
                    if (t) {
                        var e = this.timePhotosOne.findIndex((function(e) {
                            return e.id === t.id
                        }
                        ));
                        e > -1 && (this.$parent.$parent.bigImageIndex = e)
                    }
                    this.$parent.$parent.photos = this.$parent.$parent.$parent.photos = this.timePhotosOne
                },
                formateDateByHour: function(t) {
                    return Object(v["a"])(t, "YYYY-MM-DD hh:00")
                },
                bubblingEvent: function(t, e) {
                    this.setParentPhotos(),
                    this.$emit("click", t, t.index)
                },
                reset: function() {
                    this.waitLoad = [],
                    this.dateKeyMap = {},
                    this.timeStampFrag = [],
                    this.pageNumbersSet = {},
                    this.timePhotosOne = [],
                    this.curPageStart = 1,
                    this.maxPage = 9999999999
                },
                scrollLoadData: function() {
                    var t = Object(c["a"])(regeneratorRuntime.mark((function t(e) {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return this.curEvent = "scroll",
                                    t.next = 3,
                                    this.getPhotosByParentFunc(e);
                                case 3:
                                    this.curEvent = "normal";
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                clickLoadData: function() {
                    var t = Object(c["a"])(regeneratorRuntime.mark((function t(e) {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return this.curEvent = "click",
                                    this.curPageStart = e,
                                    t.next = 4,
                                    this.getPhotosByParentFunc(e, "click");
                                case 4:
                                    this.curEvent = "normal";
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                selecteEvent: function(t) {
                    this.setParentPhotos(),
                    this.$emit("selecte", t, t.index)
                },
                checkoutBigImgData: function(t) {
                    var e = this.$parent.$parent.photos[t];
                    this.bigImgCurPhoto = e
                },
                timeLineScrollLoadMore: function() {
                    var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                        var e, n, a, i = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e = this.curPageStart,
                                    n = this.timeStampFrag.findIndex((function(t) {
                                        return t.p === i.curPageStart
                                    }
                                    )),
                                    a = this.timeStampFrag[n + 1],
                                    !a) {
                                        t.next = 11;
                                        break
                                    }
                                case 4:
                                    if (!(e <= a.p)) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 7,
                                    this.scrollLoadData(e++);
                                case 7:
                                    t.next = 4;
                                    break;
                                case 9:
                                    t.next = 16;
                                    break;
                                case 11:
                                    if (!(e <= this.maxPage)) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.next = 14,
                                    this.scrollLoadData(e++);
                                case 14:
                                    t.next = 11;
                                    break;
                                case 16:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            },
            mounted: function() {
                this.init()
            },
            beforeDestroy: function() {
                this.reset()
            },
            watch: {
                "album.sort": function() {
                    this.reset(),
                    this.init()
                },
                nowClassify: function() {
                    this.reset(),
                    this.init()
                },
                bigImageStatus: function(t) {
                    t || this.checkoutBigImgData(this.bigImageIndex)
                }
            }
        }
          , k = C
          , S = (n("825e"),
        Object(g["a"])(k, a, i, !1, null, null, null));
        e["a"] = S.exports
    },
    "6cd2": function(t, e, n) {
        "use strict";
        var a = n("8364")
          , i = n.n(a);
        i.a
    },
    "6eea": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "album"
            }, [n("scrollList", {
                ref: "scrollList",
                staticClass: "album-scrollList",
                attrs: {
                    scroll: t.scrollListDom,
                    loadText: "live" !== t.nowTab && "hot" !== t.nowTab || !t.hasMore ? t.$t("album.scrollList.end") : t.$t("album.scrollList.loading")
                },
                on: {
                    loadmore: t.loadmore,
                    scroll: t.scroll
                }
            }, [n("div", {
                ref: "albumTop",
                staticClass: "position-rel album-top"
            }, [n("div", {
                ref: "albumTopAnimation",
                staticClass: "album-top-animation"
            }), n("albumInfo", {
                attrs: {
                    album: t.album
                }
            }), n("div", {
                staticClass: "position-rel album-navigation"
            }, [n("div", {
                staticClass: "display-horizontal album-navigation-box",
                attrs: {
                    float: "video" !== t.nowTab && t.scrolltop > t.albumTopHeight
                }
            }, [n("div", {
                staticClass: "album-navigation-background",
                style: {
                    height: t.navHeight + "px"
                }
            }), n("navigation", {
                attrs: {
                    album: t.album
                },
                on: {
                    input: t.classifySwitch
                },
                model: {
                    value: t.nowTab,
                    callback: function(e) {
                        t.nowTab = e
                    },
                    expression: "nowTab"
                }
            }), n("ul", {
                staticClass: "album-functionBar"
            }, [n("li", {
                staticClass: "album-functionBar-item"
            }, [n("button", {
                staticClass: "album-functionBar-item-button",
                on: {
                    click: function(e) {
                        t.qrShareSwitch = !0
                    }
                }
            }, [n("i", {
                staticClass: "iconfont icon-qr"
            })])]), n("li", {
                staticClass: "album-functionBar-item"
            }, [n("button", {
                staticClass: "album-functionBar-item-button"
            }, [n("i", {
                staticClass: "iconfont icon-language"
            })]), n("dropDown", {
                ref: "dropDown-language",
                on: {
                    input: function(e) {
                        t.$i18n.locale = e
                    }
                }
            }, t._l(t.language, (function(e, a) {
                return n("li", {
                    key: a,
                    attrs: {
                        "data-value": a
                    }
                }, [t._v(t._s(e))])
            }
            )), 0)], 1), n("li", {
                staticClass: "album-functionBar-item"
            }, [n("button", {
                staticClass: "album-functionBar-item-button"
            }, [n("i", {
                staticClass: "iconfont",
                class: "icon-" + t.layoutIcon
            })]), n("dropDown", {
                ref: "dropDown-layout",
                on: {
                    input: function(e) {
                        t.nowlayout = e
                    }
                }
            }, [n("li", {
                attrs: {
                    "data-value": "waterfall"
                }
            }, [n("i", {
                staticClass: "iconfont icon-waterfall"
            }), t._v(" " + t._s(t.$t("album.layout.feed")))]), n("li", {
                attrs: {
                    "data-value": "timeline"
                }
            }, [n("i", {
                staticClass: "iconfont icon-time"
            }), t._v(" " + t._s(t.$t("album.layout.time")))]), n("li", {
                attrs: {
                    "data-value": "grid"
                }
            }, [n("i", {
                staticClass: "iconfont icon-gridLine"
            }), t._v(" " + t._s(t.$t("album.layout.grids")))])])], 1)]), t.nowClassify ? n("classify", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isShowClassify && "live" === t.nowTab,
                    expression: "isShowClassify && nowTab === 'live'"
                }],
                attrs: {
                    album: t.album
                },
                on: {
                    input: t.classifyChanger
                },
                model: {
                    value: t.nowClassify,
                    callback: function(e) {
                        t.nowClassify = e
                    },
                    expression: "nowClassify"
                }
            }) : t._e()], 1)])], 1), n("section", {
                ref: "list",
                staticClass: "position-rel album-list",
                style: {
                    paddingTop: (t.isShowClassify && "live" === t.nowTab ? t.navHeight : 0) + "px"
                }
            }, ["live" === t.nowTab && "timeline" === t.nowlayout && t.nowClassify ? n("photoListTimeLine", {
                ref: "photoListTimeLine",
                attrs: {
                    photos: t.photos,
                    album: t.album,
                    nowClassify: t.nowClassify
                },
                on: {
                    click: t.openBigImage
                }
            }) : t._e(), "live" === t.nowTab && "grid" === t.nowlayout && t.nowClassify.desc ? n("pre", {
                staticClass: "album-component-listGraphic album-component-photoListGrid-item album-component-listGraphic-text",
                staticStyle: {
                    "padding-top": "10px",
                    "padding-bottom": "10px"
                }
            }, [t._v(t._s(t.nowClassify.desc))]) : t._e(), "live" === t.nowTab && "grid" === t.nowlayout ? n("photoListGrid", {
                attrs: {
                    album: t.album,
                    photos: t.graphics,
                    hasMore: t.hasMore
                },
                on: {
                    click: t.openBigImage
                }
            }) : t._e(), "live" === t.nowTab && "waterfall" === t.nowlayout ? n("photoListWaterfall", {
                attrs: {
                    album: t.album,
                    photos: t.photos,
                    hasMore: t.hasMore
                },
                on: {
                    click: t.openBigImage
                }
            }) : t._e(), "hot" === t.nowTab ? n("photoListHot", {
                attrs: {
                    album: t.album,
                    photos: t.photos,
                    hasMore: t.hasMore
                },
                on: {
                    click: t.openBigImage
                }
            }) : t._e(), "video" === t.nowTab ? n("videoList", {
                attrs: {
                    album: t.album,
                    videos: t.videos,
                    hasMore: t.hasMore
                }
            }) : t._e()], 1)]), n("sideBar", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "live" === t.nowTab || "hot" === t.nowTab,
                    expression: "nowTab === 'live' || nowTab === 'hot'"
                }],
                attrs: {
                    value: !1
                }
            }, ["live" === t.nowTab ? n("sort", {
                attrs: {
                    slot: "after",
                    album: t.album
                },
                on: {
                    click: t.classifyChanger
                },
                slot: "after"
            }) : t._e(), n("sideButton", {
                staticStyle: {
                    color: "#fff !important"
                },
                attrs: {
                    slot: "after",
                    icon: "refresh",
                    theme: t.album.theme,
                    "primary-background": ""
                },
                nativeOn: {
                    click: function(e) {
                        return t.classifyChanger(e)
                    }
                },
                slot: "after"
            }, [t._v(t._s(t.$t("album.sideBar.refresh")))])], 1), t.photos.length ? n("bigImage", {
                attrs: {
                    open: t.bigImageStatus,
                    data: t.photos
                },
                on: {
                    photoInit: t.photoInit,
                    loadmore: t.loadmore,
                    close: function(e) {
                        t.bigImageStatus = !1,
                        t.resetShare
                    },
                    longTap: t.bigImageLongTap
                },
                scopedSlots: t._u([{
                    key: "header",
                    fn: function(e) {
                        return [t.album.photoInfo && t.photos.length ? n("photoInfo", {
                            attrs: {
                                album: t.album,
                                slotProps: e
                            }
                        }) : t._e()]
                    }
                }], null, !1, 3245588640),
                model: {
                    value: t.bigImageIndex,
                    callback: function(e) {
                        t.bigImageIndex = e
                    },
                    expression: "bigImageIndex"
                }
            }) : t._e(), "live" === t.nowTab || "hot" === t.nowTab || "video" === t.nowTab ? n("scrollPosition", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.scrolltop > t.albumTopHeight,
                    expression: "scrolltop > albumTopHeight"
                }],
                ref: "scrollPosition",
                attrs: {
                    count: t.photoTotol,
                    scrollTop: t.scrolltop
                },
                nativeOn: {
                    click: function(e) {
                        return t.$refs.scrollList.scrollToA(0)
                    }
                }
            }) : t._e(), n("qrShare", {
                attrs: {
                    album: t.album
                },
                model: {
                    value: t.qrShareSwitch,
                    callback: function(e) {
                        t.qrShareSwitch = e
                    },
                    expression: "qrShareSwitch"
                }
            })], 1)
        }
          , i = []
          , o = (n("8e6e"),
        n("456d"),
        n("55dd"),
        n("ac6a"),
        n("a481"),
        n("bd86"))
          , s = (n("96cf"),
        n("3b8d"))
          , c = n("2f62")
          , r = n("ace7")
          , l = n("2b83")
          , u = n("a47e")
          , h = n("6937")
          , m = n("8476")
          , d = n("4f7d")
          , g = n("4a22")
          , p = n("549c")
          , f = n("e1e0")
          , b = n("924a")
          , v = n("de7c")
          , w = n("f616")
          , y = n("c0c7")
          , C = n("e2e5")
          , k = n("6755")
          , S = n("631e")
          , z = n("0aa8")
          , _ = n("0c4f")
          , P = n("83a8")
          , x = n("0965")
          , O = n("fa89")
          , T = n("69dd")
          , j = n("6e02")
          , I = n("3264");
        function $(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function L(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? $(n, !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : $(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var D = {
            name: "albumNoMark",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                hasMore: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    nowTab: "",
                    nowClassify: null,
                    nowlayout: this.album.displayType,
                    isShowClassify: !0,
                    qrShareSwitch: !1,
                    bigImageStatus: !1,
                    bigImageIndex: 0,
                    albumTopHeight: 0,
                    navHeight: 44,
                    scrolltop: 0,
                    photos: [],
                    graphics: [],
                    photoRequest: !1,
                    photoCheckTimeout: null,
                    videos: [],
                    language: u["a"]
                }
            },
            beforeDestroy: function() {
                this.sendStatistics(10),
                this.stopCheckNewPhoto();
                try {
                    document.head.removeChild(document.getElementById("albumTheme"))
                } catch (t) {}
            },
            mounted: function() {
                var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                    var e;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                Object(l["a"])("link", {
                                    id: "albumTheme",
                                    title: "albumTheme",
                                    rel: "stylesheet",
                                    href: "".concat(r["themePath"], "/theme-").concat(this.album.style, "/index.css")
                                });
                            case 2:
                                e = this.album.findClassify(this.$route.params.sep),
                                e ? this.nowClassify = e : (this.nowClassify = this.album.classify[0],
                                this.routerReplaceForClassify()),
                                this.albumTopHeight = this.beforeNavHeight(),
                                this.isShowClassify = this.album.classify.length > 1,
                                this.nowTab = "live",
                                this.sendStatistics(1, {
                                    from: this.$route.query.from || ""
                                }),
                                this.sendStatistics(7),
                                this.sendUv(),
                                this.$emit("loadingScore"),
                                this.album.share.link = "".concat(location.origin, "/album/").concat(this.album.id, "/").concat(this.nowClassify.id, "/").concat(this.$route.params.ver, "/"),
                                Object(O["a"])(this.album.share),
                                this.$emit("loadingScore");
                            case 14:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                function e() {
                    return t.apply(this, arguments)
                }
                return e
            }(),
            methods: L({}, Object(c["c"])(["SAVE_LANGUAGE"]), {
                beforeNavHeight: function() {
                    var t = -this.navHeight;
                    return this.$refs.albumTop && (t += this.$refs.albumTop.clientHeight),
                    this.$refs.banner && (t += this.$refs.banner.$el.clientHeight),
                    t
                },
                classifySwitch: function(t, e) {
                    t === e && "live" === t && (this.isShowClassify = !this.isShowClassify)
                },
                classifyChanger: function() {
                    this.photos = [],
                    this.graphics = [],
                    this.album.share.link = "".concat(location.origin, "/album/").concat(this.album.id, "/").concat(this.nowClassify.id, "/").concat(this.$route.params.ver, "/"),
                    this.resetGetPhotos(),
                    this.startCheckNewPhoto(),
                    this.routerReplaceForClassify()
                },
                routerReplaceForClassify: function() {
                    this.$router.replace("/album/".concat(this.album.id, "/").concat(this.nowClassify.id, "/").concat(this.$route.params.ver, "/")),
                    this.sendStatistics(7),
                    this.sendUv()
                },
                getPhoto: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e, n, a, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.hasMore) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (!this.photoRequest) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 4:
                                    return this.photoRequest = !0,
                                    e = "live" === this.nowTab ? this.nowClassify.id : 0,
                                    t.next = 8,
                                    this.$parent.getPhotos(e);
                                case 8:
                                    n = t.sent,
                                    a = n.graphics,
                                    i = n.photos,
                                    this.photos = i,
                                    this.graphics = a,
                                    this.photoRequest = !1;
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                updateScrollPosition: function() {
                    var t = this;
                    setTimeout((function() {
                        t.$refs.scrollPosition && t.$refs.scrollPosition.getAllPhotoPosition()
                    }
                    ), 300)
                },
                resetGetPhotos: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.$parent.resetPhotos();
                                case 2:
                                    return t.next = 4,
                                    this.getPhoto();
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                reloadAll: function() {
                    this.nowClassify.count = this.nowClassify.lastCount,
                    this.$parent.updatePhotos(),
                    this.resetGetPhotos()
                },
                startCheckNewPhoto: function() {
                    var t = this;
                    this.stopCheckNewPhoto(),
                    "live" === this.nowTab && (this.photoCheckTimeout = setInterval((function() {
                        t.$parent.checkNewPhoto()
                    }
                    ), 6e3))
                },
                stopCheckNewPhoto: function() {
                    this.photoCheckTimeout && clearInterval(this.photoCheckTimeout),
                    this.photoCheckTimeout = null
                },
                getVideo: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.$parent.getVideos();
                                case 2:
                                    this.videos = t.sent;
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                scroll: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.scrolltop = t,
                    this.$refs.scrollPosition && this.$refs.scrollPosition.compute()
                },
                loadmore: function() {
                    this.photos.length && ("live" !== this.nowTab && "hot" !== this.nowTab || this.getPhoto(),
                    "live" === this.nowTab && "timeline" === this.nowlayout && this.$refs.photoListTimeLine.timeLineScrollLoadMore())
                },
                openBigImage: function(t, e) {
                    this.bigImageIndex = e,
                    this.bigImageStatus = !0
                },
                photoInit: function(t) {
                    t.faceState || this.$API.v4cFfl(this.album.id, t.id, this.$parent.version.fpl[this.nowClassify.id]).then((function(e) {
                        var n = [];
                        e.d.forEach((function(t) {
                            n.push(new h["a"](t))
                        }
                        )),
                        t.faceList = n,
                        t.faceState = !0
                    }
                    ))
                },
                resetShare: function() {
                    Object(O["a"])(this.album.share)
                },
                setBigImgShare: function() {
                    var t = this.photos[this.bigImageIndex];
                    this.sendStatistics(4, {
                        pc: t.id
                    }),
                    Object(O["a"])({
                        title: this.album.share.title,
                        imgUrl: Object(j["a"])(t.msrc, {
                            w: 200,
                            h: 200,
                            m: "fill"
                        }),
                        desc: this.album.share.desc,
                        link: "".concat(location.origin, "/album/sharimg/").concat(this.album.id, "/").concat(this.nowClassify.id, "/").concat(t.id)
                    })
                },
                sendStatistics: function(t, e) {
                    Object(I["a"])(t, Object.assign({
                        actId: this.album.id,
                        sepId: this.nowClassify.id
                    }, e))
                },
                bigImageLongTap: function(t) {
                    this.sendStatistics(5, {
                        pc: t.id
                    })
                },
                sendUv: function() {
                    var t = this;
                    this.sendStatistics(6),
                    this.uvTimeout && clearInterval(this.uvTimeout),
                    setInterval((function() {
                        t.sendStatistics(6)
                    }
                    ), 54e4)
                }
            }),
            computed: {
                scrollListDom: function() {
                    return document.documentElement
                },
                photoTotol: function() {
                    return "live" === this.nowTab ? this.nowClassify.count : "hot" === this.nowTab ? this.photos.length : "video" === this.nowTab ? this.videos.length : 0
                },
                layoutIcon: function() {
                    return "waterfall" === this.nowlayout ? "waterfall" : "timeline" === this.nowlayout ? "time" : "gridLine"
                }
            },
            watch: {
                nowTab: function(t) {
                    this.photos.length = 0,
                    "live" === t && (this.resetGetPhotos(),
                    this.startCheckNewPhoto()),
                    "hot" === t && (this.resetGetPhotos(),
                    this.stopCheckNewPhoto()),
                    "video" === t && (this.getVideo(),
                    this.stopCheckNewPhoto())
                },
                nowlayout: function(t) {
                    var e = this;
                    "waterfall" === t && "grid" === t && (this.album.sort = this.album.sort % 2 === 0 ? 4 : 3),
                    "timeline" === t && (this.album.sort = this.album.sort % 2 === 0 ? 6 : 5),
                    setTimeout((function() {
                        e.$refs.scrollPosition && e.$refs.scrollPosition.getAllPhotoPosition()
                    }
                    ), 100)
                },
                bigImageIndex: function(t) {
                    this.setBigImgShare()
                },
                photos: function() {
                    this.updateScrollPosition()
                },
                videos: function() {
                    this.updateScrollPosition()
                },
                "album.sort": function() {
                    this.sendStatistics(13)
                },
                bigImageStatus: function() {
                    if (!this.bigImageStatus) {
                        Object(O["a"])(this.album.share);
                        var t = this.$refs.list.getElementsByClassName("album-component-listPhoto")[this.bigImageIndex]
                          , e = 0;
                        "album-components-photoTimeLineBox" === t.parentNode.parentNode.className && (e = t.parentNode.parentNode.offsetTop),
                        this.$refs.scrollList.scrollToA(this.albumTopHeight + 54 + e + t.offsetTop + t.clientHeight / 2 - document.documentElement.clientHeight / 2)
                    }
                }
            },
            components: {
                scrollList: m["a"],
                albumInfo: d["a"],
                navigation: g["a"],
                qrShare: p["a"],
                dropDown: f["a"],
                classify: b["a"],
                photoListGrid: v["a"],
                photoListWaterfall: w["a"],
                photoListHot: y["a"],
                videoList: C["a"],
                sideBar: k["a"],
                sideButton: S["a"],
                sort: z["a"],
                bigImage: _["a"],
                photoInfo: P["a"],
                scrollPosition: x["a"],
                photoListTimeLine: T["a"]
            }
        }
          , A = D
          , B = (n("d7cd"),
        n("2877"))
          , E = Object(B["a"])(A, a, i, !1, null, null, null);
        e["default"] = E.exports
    },
    "6ef7": function(t, e, n) {
        "use strict";
        var a = n("b29f")
          , i = n.n(a);
        i.a
    },
    "7d6e": function(t, e, n) {},
    "825e": function(t, e, n) {
        "use strict";
        var a = n("9714")
          , i = n.n(a);
        i.a
    },
    8364: function(t, e, n) {},
    "83d8": function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("imageBox", {
                staticClass: "album-component-listPhoto",
                attrs: {
                    url: t.item.msrc
                }
            }, [n("div", {
                staticClass: "album-component-listVideo-time"
            }, [n("i", {
                staticClass: "iconfont icon-play"
            }), t._v(" " + t._s(t.time(t.item.videoTime)) + "\n  ")]), t._t("default")], 2)
        }
          , i = []
          , o = n("cca9")
          , s = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
              , n = String(t);
            if (n.length < e)
                for (var a = n.length; a < e; a++)
                    n = "0" + n;
            return n
        }
          , c = function(t) {
            return "".concat(s(parseInt(t / 60)), ":").concat(s(t % 60))
        }
          , r = {
            name: "listVideo",
            props: {
                item: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    time: c
                }
            },
            components: {
                imageBox: o["a"]
            }
        }
          , l = r
          , u = (n("6cd2"),
        n("2877"))
          , h = Object(u["a"])(l, a, i, !1, null, null, null);
        e["a"] = h.exports
    },
    8681: function(t, e, n) {
        "use strict";
        var a = n("37ee")
          , i = n.n(a);
        i.a
    },
    "86d3": function(t, e, n) {
        "use strict";
        var a = n("5372")
          , i = n.n(a);
        i.a
    },
    "8c23": function(t, e, n) {},
    "8ecd": function(t, e, n) {},
    "8f32": function(t, e, n) {},
    "8f51": function(t, e, n) {},
    "91e4": function(t, e, n) {
        "use strict";
        var a = n("d532")
          , i = n.n(a);
        i.a
    },
    "924a": function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("transition", {
                attrs: {
                    name: "fade"
                }
            }, [n("ul", {
                ref: "classify",
                staticClass: "album-component-classify display-horizontal"
            }, t._l(t.album.classify, (function(e, a) {
                return n("li", {
                    key: e.idEnc,
                    staticClass: "album-component-classify-item",
                    attrs: {
                        classifystyle: t.album.classifyStyle,
                        "primary-color": t.color && t.value.id === e.id,
                        "primary-border": t.borderColor && t.value.id === e.id,
                        "primary-background": t.backgroundColor && t.value.id === e.id,
                        active: t.value.id === e.id
                    },
                    on: {
                        click: function(n) {
                            return t.classifySwitch(e, a)
                        }
                    }
                }, [t._v(t._s(e.language[t.$i18n.locale]))])
            }
            )), 0)])
        }
          , i = []
          , o = {
            name: "classify",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                value: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            methods: {
                classifySwitch: function(t, e) {
                    var n = this.$refs.classify
                      , a = n.childNodes[e]
                      , i = a.offsetLeft - n.clientWidth / 2 + a.clientWidth / 2;
                    Math.animation(n.scrollLeft, i, 300, "Cubic.easeOut", (function(t) {
                        n.scrollLeft = t
                    }
                    )),
                    this.value.id !== t.id && this.$emit("input", t)
                }
            },
            computed: {
                color: function() {
                    var t = [0, 1];
                    return t.indexOf(this.album.classifyStyle) >= 0
                },
                borderColor: function() {
                    var t = [1];
                    return t.indexOf(this.album.classifyStyle) >= 0
                },
                backgroundColor: function() {
                    var t = [2];
                    return t.indexOf(this.album.classifyStyle) >= 0
                }
            }
        }
          , s = o
          , c = (n("9fe0"),
        n("2877"))
          , r = Object(c["a"])(s, a, i, !1, null, null, null);
        e["a"] = r.exports
    },
    "94d8": function(t, e, n) {},
    9714: function(t, e, n) {},
    "976f": function(t, e, n) {},
    "9ad2": function(t, e, n) {
        "use strict";
        var a = n("0778")
          , i = n.n(a);
        i.a
    },
    "9c02": function(t, e, n) {},
    "9f61": function(t, e, n) {},
    "9fe0": function(t, e, n) {
        "use strict";
        var a = n("0312")
          , i = n.n(a);
        i.a
    },
    a164: function(t, e, n) {},
    a1a4: function(t, e, n) {
        "use strict";
        var a = n("a448")
          , i = n.n(a);
        i.a
    },
    a36a: function(t, e, n) {},
    a3d0: function(t, e, n) {},
    a448: function(t, e, n) {},
    ac4c: function(t, e, n) {
        "use strict";
        var a = n("4064")
          , i = n.n(a);
        i.a
    },
    aca2: function(t, e, n) {
        "use strict";
        var a = n("5fa7")
          , i = n.n(a);
        i.a
    },
    b29f: function(t, e, n) {},
    b589: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAaVBMVEUAAAAlqicOnxAlqiYZpB4hqCMeqCEkqiYkqSYiqCQapRwToxggpyIlqiciqCQkqSYjqSUiqCUlqSckqSYjqSUjqSUepiIkqSYkqSckqCUgpyMipyQkqSYjqSUiqSUeqCAkqSckqSUkqCZYHtUTAAAAI3RSTlMA/gf3FE403K9pHA5F8nrBk3HuzoyEJerZqDxZx7maK+Oi1EceStoAAAFgSURBVDjLlZLZloMgEESnaEBBxD2u0ST//5FzQCegmZfwIB7qdlex/Hw3pOo6Zdj/Ip/HHMhzAHelP3XTg0bBGcvMmoOqa/lKQyjL5gLpLdazAuPZ2VKiT3p1TSbqJPRoESwDQel7c3ka12uzl9q/MjY8siDfUgCFdL8F7TEMbNDZgHayqJ00Qx0JtgBUNDvT+umy53e/1iRRgDHhrs/SuFQluS+jLgJSD/CHr51gXDuIC8BkQ8YHQuUzyiOfsjvQEql9Je8iQD5o4B7YKv0TAdthMZDgvkN0BVA+ZOlP1nEXwGBy01LvB8A/gDH3U+dDSLhGOinCtfDjuia0HsddqJ6iPSvMe9ai145va6CJdPbqDztdN5kPLeNnxtbQzTr/61C0BviJMjvLTNHiDALR6JOeojiVMFv3rXy/KptQyS+WegH6Umw3Y19AMn2GYlPXENwYSsFiJYakENJ5fzF+AYUFD0RmWDmPAAAAAElFTkSuQmCC"
    },
    b6d8: function(t, e, n) {},
    b8c8: function(t) {
        t.exports = JSON.parse('[{"code":"000000","name":"全国","language":{"zh":"全国","cht":"全國","en":"China"}},{"code":"110000","name":"北京","language":{"zh":"北京","cht":"北京","en":"Beijing"}},{"code":"120000","name":"天津","language":{"zh":"天津","cht":"天津","en":"Tianjin"}},{"code":"130000","name":"河北","language":{"zh":"河北","cht":"河北","en":"Hebei"}},{"code":"130100","name":"石家庄","language":{"zh":"石家庄","cht":"石家莊","en":"Shijiazhuang"}},{"code":"130200","name":"唐山","language":{"zh":"唐山","cht":"唐山","en":"Tangshan"}},{"code":"130300","name":"秦皇岛","language":{"zh":"秦皇岛","cht":"秦皇島","en":"Qinghuangdao"}},{"code":"130400","name":"邯郸","language":{"zh":"邯郸","cht":"邯鄲","en":"Handan"}},{"code":"130500","name":"邢台","language":{"zh":"邢台","cht":"邢臺","en":"Xingtai"}},{"code":"130600","name":"保定","language":{"zh":"保定","cht":"保定","en":"Baoding"}},{"code":"130700","name":"张家口","language":{"zh":"张家口","cht":"張家口","en":"Zhangjiakou"}},{"code":"130800","name":"承德","language":{"zh":"承德","cht":"承德","en":"Chengde"}},{"code":"130900","name":"沧州","language":{"zh":"沧州","cht":"滄州","en":"Cangzhou"}},{"code":"131000","name":"廊坊","language":{"zh":"廊坊","cht":"廊坊","en":"Langfang"}},{"code":"131100","name":"衡水","language":{"zh":"衡水","cht":"衡水","en":"Hengshui"}},{"code":"140000","name":"山西","language":{"zh":"山西","cht":"山西","en":"Shanxi"}},{"code":"140100","name":"太原","language":{"zh":"太原","cht":"太原","en":"Taiyuan"}},{"code":"140200","name":"大同","language":{"zh":"大同","cht":"大同","en":"Datong"}},{"code":"140300","name":"阳泉","language":{"zh":"阳泉","cht":"陽泉","en":"Yangquan"}},{"code":"140400","name":"长治","language":{"zh":"长治","cht":"長治","en":"Changzhi"}},{"code":"140500","name":"晋城","language":{"zh":"晋城","cht":"晉城","en":"Jincheng"}},{"code":"140600","name":"朔州","language":{"zh":"朔州","cht":"朔州","en":"Shuozhou"}},{"code":"140700","name":"晋中","language":{"zh":"晋中","cht":"晉中","en":"Jinzhong"}},{"code":"140800","name":"运城","language":{"zh":"运城","cht":"運城","en":"Yuncheng"}},{"code":"140900","name":"忻州","language":{"zh":"忻州","cht":"忻州","en":"Xinzhou"}},{"code":"141000","name":"临汾","language":{"zh":"临汾","cht":"臨汾","en":"Linfen"}},{"code":"141100","name":"吕梁","language":{"zh":"吕梁","cht":"呂梁","en":"Lvliang"}},{"code":"150000","name":"内蒙古","language":{"zh":"内蒙古","cht":"內蒙古","en":"Neimenggu"}},{"code":"150100","name":"呼和浩特","language":{"zh":"呼和浩特","cht":"呼和浩特","en":"Huhehaote"}},{"code":"150200","name":"包头","language":{"zh":"包头","cht":"包頭","en":"Baotou"}},{"code":"150300","name":"乌海","language":{"zh":"乌海","cht":"烏海","en":"Wuhai"}},{"code":"150400","name":"赤峰","language":{"zh":"赤峰","cht":"赤峰","en":"Chifeng"}},{"code":"150500","name":"通辽","language":{"zh":"通辽","cht":"通遼","en":"Tongliao"}},{"code":"150600","name":"鄂尔多斯","language":{"zh":"鄂尔多斯","cht":"鄂爾多斯","en":"Erdos"}},{"code":"150700","name":"呼伦贝尔","language":{"zh":"呼伦贝尔","cht":"呼倫貝爾","en":"Hulun Buir"}},{"code":"150800","name":"巴彦淖尔","language":{"zh":"巴彦淖尔","cht":"巴彥綽爾","en":"Bayan Nur"}},{"code":"150900","name":"乌兰察布","language":{"zh":"乌兰察布","cht":"烏蘭察布","en":"Ulanqab"}},{"code":"152200","name":"兴安盟","language":{"zh":"兴安盟","cht":"興安盟","en":"Hinggan League"}},{"code":"152500","name":"锡林郭勒盟","language":{"zh":"锡林郭勒盟","cht":"錫林郭勒盟","en":"Xilingol League"}},{"code":"152900","name":"阿拉善盟","language":{"zh":"阿拉善盟","cht":"阿拉善盟","en":"Alxa League"}},{"code":"210000","name":"辽宁","language":{"zh":"辽宁","cht":"遼寧","en":"Liaoning"}},{"code":"210100","name":"沈阳","language":{"zh":"沈阳","cht":"沈阳","en":"Shenyang"}},{"code":"210200","name":"大连","language":{"zh":"大连","cht":"大連","en":"Dalian"}},{"code":"210300","name":"鞍山","language":{"zh":"鞍山","cht":"鞍山","en":"Anshan"}},{"code":"210400","name":"抚顺","language":{"zh":"抚顺","cht":"撫順","en":"Fushun"}},{"code":"210500","name":"本溪","language":{"zh":"本溪","cht":"本溪","en":"Benxi"}},{"code":"210600","name":"丹东","language":{"zh":"丹东","cht":"丹東","en":"Dandong"}},{"code":"210700","name":"锦州","language":{"zh":"锦州","cht":"錦州","en":"Jinzhou"}},{"code":"210800","name":"营口","language":{"zh":"营口","cht":"營口","en":"Yingkou"}},{"code":"210900","name":"阜新","language":{"zh":"阜新","cht":"阜新","en":"Fuxin"}},{"code":"211000","name":"辽阳","language":{"zh":"辽阳","cht":"遼陽","en":"Liaoyang"}},{"code":"211100","name":"盘锦","language":{"zh":"盘锦","cht":"盤錦","en":"Panjin"}},{"code":"211200","name":"铁岭","language":{"zh":"铁岭","cht":"鐵嶺","en":"Tieling"}},{"code":"211300","name":"朝阳","language":{"zh":"朝阳","cht":"朝陽","en":"Chaoyang"}},{"code":"211400","name":"葫芦岛","language":{"zh":"葫芦岛","cht":"葫蘆島","en":"Huludao"}},{"code":"220000","name":"吉林","language":{"zh":"吉林","cht":"吉林","en":"Jilin"}},{"code":"220100","name":"长春","language":{"zh":"长春","cht":"長春","en":"Changchun"}},{"code":"220200","name":"吉林","language":{"zh":"吉林","cht":"吉林","en":"Jilin"}},{"code":"220300","name":"四平","language":{"zh":"四平","cht":"四平","en":"Siping"}},{"code":"220400","name":"辽源","language":{"zh":"辽源","cht":"遼源","en":"Liaoyuan"}},{"code":"220500","name":"通化","language":{"zh":"通化","cht":"通化","en":"Tonghua"}},{"code":"220600","name":"白山","language":{"zh":"白山","cht":"白山","en":"Baishan"}},{"code":"220700","name":"松原","language":{"zh":"松原","cht":"松原","en":"Songyuan"}},{"code":"220800","name":"白城","language":{"zh":"白城","cht":"白城","en":"Baicheng"}},{"code":"222400","name":"延边朝鲜族自治州","language":{"zh":"延边朝鲜族自治州","cht":"延邊朝鮮族自治州","en":"Yanbian Korean Autonomous Prefecture"}},{"code":"230000","name":"黑龙江","language":{"zh":"黑龙江","cht":"黑龍江","en":"Heilongjiang"}},{"code":"230100","name":"哈尔滨","language":{"zh":"哈尔滨","cht":"哈爾濱","en":"Harbin"}},{"code":"230200","name":"齐齐哈尔","language":{"zh":"齐齐哈尔","cht":"齊齊哈爾","en":"Qiqihar"}},{"code":"230300","name":"鸡西","language":{"zh":"鸡西","cht":"雞西","en":"Jixi"}},{"code":"230400","name":"鹤岗","language":{"zh":"鹤岗","cht":"鶴崗","en":"Hegang"}},{"code":"230500","name":"双鸭山","language":{"zh":"双鸭山","cht":"雙鴨山","en":"Shuangyashan"}},{"code":"230600","name":"大庆","language":{"zh":"大庆","cht":"大慶","en":"Daqing"}},{"code":"230700","name":"伊春","language":{"zh":"伊春","cht":"伊春","en":"Yichun"}},{"code":"230800","name":"佳木斯","language":{"zh":"佳木斯","cht":"佳木斯","en":"Jiamusi"}},{"code":"230900","name":"七台河","language":{"zh":"七台河","cht":"七台河","en":"Qitaihe"}},{"code":"231000","name":"牡丹江","language":{"zh":"牡丹江","cht":"牡丹江","en":"Mudanjiang"}},{"code":"231100","name":"黑河","language":{"zh":"黑河","cht":"黑河","en":"Heihe"}},{"code":"231200","name":"绥化","language":{"zh":"绥化","cht":"綏化","en":"Suihua"}},{"code":"232700","name":"大兴安岭","language":{"zh":"大兴安岭","cht":"大興安嶺","en":"DaXingAnLing"}},{"code":"310000","name":"上海","language":{"zh":"上海","cht":"上海","en":"Shanghai"}},{"code":"320000","name":"江苏","language":{"zh":"江苏","cht":"江蘇","en":"Jiangsu"}},{"code":"320100","name":"南京","language":{"zh":"南京","cht":"南京","en":"Nanjing"}},{"code":"320200","name":"无锡","language":{"zh":"无锡","cht":"無錫","en":"Wuxi"}},{"code":"320300","name":"徐州","language":{"zh":"徐州","cht":"徐州","en":"Xuzhou"}},{"code":"320400","name":"常州","language":{"zh":"常州","cht":"常州","en":"Changzhou"}},{"code":"320500","name":"苏州","language":{"zh":"苏州","cht":"蘇州","en":"Suzhou"}},{"code":"320600","name":"南通","language":{"zh":"南通","cht":"南通","en":"Nantong"}},{"code":"320700","name":"连云港","language":{"zh":"连云港","cht":"連雲港","en":"Lianyungang"}},{"code":"320800","name":"淮安","language":{"zh":"淮安","cht":"淮安","en":"Huaian"}},{"code":"320900","name":"盐城","language":{"zh":"盐城","cht":"鹽城","en":"Yencheng"}},{"code":"321000","name":"扬州","language":{"zh":"扬州","cht":"揚州","en":"Yangzhou"}},{"code":"321100","name":"镇江","language":{"zh":"镇江","cht":"鎮江","en":"Zhenjiang"}},{"code":"321200","name":"泰州","language":{"zh":"泰州","cht":"泰州","en":"Taizhou"}},{"code":"321300","name":"宿迁","language":{"zh":"宿迁","cht":"宿遷","en":"Suqian"}},{"code":"330000","name":"浙江","language":{"zh":"浙江","cht":"浙江","en":"Zhejiang"}},{"code":"330100","name":"杭州","language":{"zh":"杭州","cht":"杭州","en":"Hangzhou"}},{"code":"330200","name":"宁波","language":{"zh":"宁波","cht":"寧波","en":"Ningbo"}},{"code":"330300","name":"温州","language":{"zh":"温州","cht":"溫州","en":"Wenzhou"}},{"code":"330400","name":"嘉兴","language":{"zh":"嘉兴","cht":"嘉興","en":"Jiaxing"}},{"code":"330500","name":"湖州","language":{"zh":"湖州","cht":"湖州","en":"Huzhou"}},{"code":"330600","name":"绍兴","language":{"zh":"绍兴","cht":"紹興","en":"Shaoxing"}},{"code":"330700","name":"金华","language":{"zh":"金华","cht":"金華","en":"Jinhua"}},{"code":"330800","name":"衢州","language":{"zh":"衢州","cht":"衢州","en":"Quzhou"}},{"code":"330900","name":"舟山","language":{"zh":"舟山","cht":"舟山","en":"Zhoushan"}},{"code":"331000","name":"台州","language":{"zh":"台州","cht":"台州","en":"Taizhou"}},{"code":"331100","name":"丽水","language":{"zh":"丽水","cht":"麗水","en":"Lishui"}},{"code":"340000","name":"安徽","language":{"zh":"安徽","cht":"安徽","en":"Anhui"}},{"code":"340100","name":"合肥","language":{"zh":"合肥","cht":"合肥","en":"Hefei"}},{"code":"340200","name":"芜湖","language":{"zh":"芜湖","cht":"蕪湖","en":"Wuhu"}},{"code":"340300","name":"蚌埠","language":{"zh":"蚌埠","cht":"蚌埠","en":"Bengbu"}},{"code":"340400","name":"淮南","language":{"zh":"淮南","cht":"淮南","en":"Huainan"}},{"code":"340500","name":"马鞍山","language":{"zh":"马鞍山","cht":"馬鞍山","en":"MaAnshan"}},{"code":"340600","name":"淮北","language":{"zh":"淮北","cht":"淮北","en":"Huaibei"}},{"code":"340700","name":"铜陵","language":{"zh":"铜陵","cht":"銅陵","en":"Tongling"}},{"code":"340800","name":"安庆","language":{"zh":"安庆","cht":"安慶","en":"Anqing"}},{"code":"341000","name":"黄山","language":{"zh":"黄山","cht":"黃山","en":"Huangshan"}},{"code":"341100","name":"滁州","language":{"zh":"滁州","cht":"滁州","en":"Chuzhou"}},{"code":"341200","name":"阜阳","language":{"zh":"阜阳","cht":"阜陽","en":"Fuyang"}},{"code":"341300","name":"宿州","language":{"zh":"宿州","cht":"宿州","en":"Suzhou"}},{"code":"341400","name":"巢湖","language":{"zh":"巢湖","cht":"巢湖","en":"Chaohu"}},{"code":"341500","name":"六安","language":{"zh":"六安","cht":"六安","en":"Luan"}},{"code":"341600","name":"亳州","language":{"zh":"亳州","cht":"亳州","en":"Bozhou"}},{"code":"341700","name":"池州","language":{"zh":"池州","cht":"池州","en":"Chizhou"}},{"code":"341800","name":"宣城","language":{"zh":"宣城","cht":"宣城","en":"Xuancheng"}},{"code":"350000","name":"福建","language":{"zh":"福建","cht":"福建","en":"Fujian"}},{"code":"350100","name":"福州","language":{"zh":"福州","cht":"福州","en":"Fuzhou"}},{"code":"350200","name":"厦门","language":{"zh":"厦门","cht":"廈門","en":"Xiamen"}},{"code":"350300","name":"莆田","language":{"zh":"莆田","cht":"莆田","en":"Putian"}},{"code":"350400","name":"三明","language":{"zh":"三明","cht":"三明","en":"Sanming"}},{"code":"350500","name":"泉州","language":{"zh":"泉州","cht":"泉州","en":"Quanzhou"}},{"code":"350600","name":"漳州","language":{"zh":"漳州","cht":"漳州","en":"Zhangzhou"}},{"code":"350700","name":"南平","language":{"zh":"南平","cht":"南平","en":"Nanping"}},{"code":"350800","name":"龙岩","language":{"zh":"龙岩","cht":"龍岩","en":"Longyan"}},{"code":"350900","name":"宁德","language":{"zh":"宁德","cht":"寧德","en":"Ningde"}},{"code":"360000","name":"江西","language":{"zh":"江西","cht":"江西","en":"Jiangxi"}},{"code":"360100","name":"南昌","language":{"zh":"南昌","cht":"南昌","en":"Nanchang"}},{"code":"360200","name":"景德镇","language":{"zh":"景德镇","cht":"景德鎮","en":"Jingdezhen"}},{"code":"360300","name":"萍乡","language":{"zh":"萍乡","cht":"萍鄉","en":"Pingxiang"}},{"code":"360400","name":"九江","language":{"zh":"九江","cht":"九江","en":"Jiujiang"}},{"code":"360500","name":"新余","language":{"zh":"新余","cht":"新余","en":"Xinyu"}},{"code":"360600","name":"鹰潭","language":{"zh":"鹰潭","cht":"鷹潭","en":"Yingtan"}},{"code":"360700","name":"赣州","language":{"zh":"赣州","cht":"贛州","en":"Ganzhou"}},{"code":"360800","name":"吉安","language":{"zh":"吉安","cht":"吉安","en":"Jian"}},{"code":"360900","name":"宜春","language":{"zh":"宜春","cht":"宜春","en":"Yichun"}},{"code":"361000","name":"抚州","language":{"zh":"抚州","cht":"撫州","en":"Fuzhou"}},{"code":"361100","name":"上饶","language":{"zh":"上饶","cht":"上饒","en":"Shangrao"}},{"code":"370000","name":"山东","language":{"zh":"山东","cht":"山東","en":"Shandong"}},{"code":"370100","name":"济南","language":{"zh":"济南","cht":"濟南","en":"Jinan"}},{"code":"370200","name":"青岛","language":{"zh":"青岛","cht":"青島","en":"Qingdao"}},{"code":"370300","name":"淄博","language":{"zh":"淄博","cht":"淄博","en":"Zibo"}},{"code":"370400","name":"枣庄","language":{"zh":"枣庄","cht":"棗莊","en":"Zaozhuang"}},{"code":"370500","name":"东营","language":{"zh":"东营","cht":"東營","en":"Dongying"}},{"code":"370600","name":"烟台","language":{"zh":"烟台","cht":"煙台","en":"Yantai"}},{"code":"370700","name":"潍坊","language":{"zh":"潍坊","cht":"濰坊","en":"Weifang"}},{"code":"370800","name":"济宁","language":{"zh":"济宁","cht":"濟寧","en":"Jining"}},{"code":"370900","name":"泰安","language":{"zh":"泰安","cht":"泰安","en":"Taian"}},{"code":"371000","name":"威海","language":{"zh":"威海","cht":"威海","en":"Weihai"}},{"code":"371100","name":"日照","language":{"zh":"日照","cht":"日照","en":"Rizhao"}},{"code":"371200","name":"莱芜","language":{"zh":"莱芜","cht":"萊蕪","en":"Laiwu"}},{"code":"371300","name":"临沂","language":{"zh":"临沂","cht":"臨沂","en":"Linyi"}},{"code":"371400","name":"德州","language":{"zh":"德州","cht":"德州","en":"Dezhou"}},{"code":"371500","name":"聊城","language":{"zh":"聊城","cht":"聊城","en":"Liaocheng"}},{"code":"371600","name":"滨州","language":{"zh":"滨州","cht":"濱州","en":"Binzhou"}},{"code":"371700","name":"菏泽","language":{"zh":"菏泽","cht":"菏澤","en":"Heze"}},{"code":"410000","name":"河南","language":{"zh":"河南","cht":"河南","en":"Henan"}},{"code":"410100","name":"郑州","language":{"zh":"郑州","cht":"鄭州","en":"Zhengzhou"}},{"code":"410200","name":"开封","language":{"zh":"开封","cht":"開封","en":"Kaifeng"}},{"code":"410300","name":"洛阳","language":{"zh":"洛阳","cht":"洛陽","en":"Luoyang"}},{"code":"410400","name":"平顶山","language":{"zh":"平顶山","cht":"平頂山","en":"Pingdingshan"}},{"code":"410500","name":"安阳","language":{"zh":"安阳","cht":"安陽","en":"Anyang"}},{"code":"410600","name":"鹤壁","language":{"zh":"鹤壁","cht":"鶴壁","en":"Hebi"}},{"code":"410700","name":"新乡","language":{"zh":"新乡","cht":"新鄉","en":"Xinxiang"}},{"code":"410800","name":"焦作","language":{"zh":"焦作","cht":"焦作","en":"Jiaozuo"}},{"code":"410900","name":"濮阳","language":{"zh":"濮阳","cht":"濮陽","en":"Puyang"}},{"code":"411000","name":"许昌","language":{"zh":"许昌","cht":"許昌","en":"Xuchang"}},{"code":"411100","name":"漯河","language":{"zh":"漯河","cht":"漯河","en":"Luohe"}},{"code":"411200","name":"三门峡","language":{"zh":"三门峡","cht":"三門峽","en":"Sanmenxia"}},{"code":"411300","name":"南阳","language":{"zh":"南阳","cht":"南陽","en":"Nanyang"}},{"code":"411400","name":"商丘","language":{"zh":"商丘","cht":"商丘","en":"Shangqiu"}},{"code":"411500","name":"信阳","language":{"zh":"信阳","cht":"信陽","en":"Xinyang"}},{"code":"411600","name":"周口","language":{"zh":"周口","cht":"周口","en":"Zhoukou"}},{"code":"411700","name":"驻马店","language":{"zh":"驻马店","cht":"駐馬店","en":"Zhumadian"}},{"code":"419001","name":"济源","language":{"zh":"济源","cht":"濟源","en":"Jiyuan"}},{"code":"420000","name":"湖北","language":{"zh":"湖北","cht":"湖北","en":"Hubei"}},{"code":"420100","name":"武汉","language":{"zh":"武汉","cht":"武漢","en":"Wuhan"}},{"code":"420200","name":"黄石","language":{"zh":"黄石","cht":"黃石","en":"Huangshi"}},{"code":"420300","name":"十堰","language":{"zh":"十堰","cht":"十堰","en":"Shiyan"}},{"code":"420500","name":"宜昌","language":{"zh":"宜昌","cht":"宜昌","en":"Yichang"}},{"code":"420600","name":"襄樊","language":{"zh":"襄樊","cht":"襄樊","en":"Xiangfan"}},{"code":"420700","name":"鄂州","language":{"zh":"鄂州","cht":"鄂州","en":"Ezhou"}},{"code":"420800","name":"荆门","language":{"zh":"荆门","cht":"荊門","en":"Jingmen"}},{"code":"420900","name":"孝感","language":{"zh":"孝感","cht":"孝感","en":"Xiaogan"}},{"code":"421000","name":"荆州","language":{"zh":"荆州","cht":"荊州","en":"Jingzhou"}},{"code":"421100","name":"黄冈","language":{"zh":"黄冈","cht":"黃岡","en":"Huanggang"}},{"code":"421200","name":"咸宁","language":{"zh":"咸宁","cht":"咸寧","en":"Xianning"}},{"code":"421300","name":"随州","language":{"zh":"随州","cht":"隨州","en":"Suizhou"}},{"code":"422800","name":"恩施","language":{"zh":"恩施","cht":"恩施","en":"Enshi"}},{"code":"429004","name":"仙桃","language":{"zh":"仙桃","cht":"仙桃","en":"Xiantao"}},{"code":"429005","name":"潜江","language":{"zh":"潜江","cht":"潛江","en":"Qianjiang"}},{"code":"429006","name":"天门","language":{"zh":"天门","cht":"天門","en":"Tianmen"}},{"code":"429021","name":"神农架","language":{"zh":"神农架","cht":"神農架","en":"Shennongjia"}},{"code":"430000","name":"湖南","language":{"zh":"湖南","cht":"湖南","en":"Hunan"}},{"code":"430100","name":"长沙","language":{"zh":"长沙","cht":"長沙","en":"Changsha"}},{"code":"430200","name":"株洲","language":{"zh":"株洲","cht":"株洲","en":"Zhuzhou"}},{"code":"430300","name":"湘潭","language":{"zh":"湘潭","cht":"湘潭","en":"Xiangtan"}},{"code":"430400","name":"衡阳","language":{"zh":"衡阳","cht":"衡陽","en":"Hengyang"}},{"code":"430500","name":"邵阳","language":{"zh":"邵阳","cht":"邵陽","en":"Shaoyang"}},{"code":"430600","name":"岳阳","language":{"zh":"岳阳","cht":"岳陽","en":"Yueyang"}},{"code":"430700","name":"常德","language":{"zh":"常德","cht":"常德","en":"Changde"}},{"code":"430800","name":"张家界","language":{"zh":"张家界","cht":"張家界","en":"Zhangjiajie"}},{"code":"430900","name":"益阳","language":{"zh":"益阳","cht":"益陽","en":"Yiyang"}},{"code":"431000","name":"郴州","language":{"zh":"郴州","cht":"郴州","en":"Chenzhou"}},{"code":"431100","name":"永州","language":{"zh":"永州","cht":"永州","en":"Yongzhou"}},{"code":"431200","name":"怀化","language":{"zh":"怀化","cht":"懷化","en":"Huaihua"}},{"code":"431300","name":"娄底","language":{"zh":"娄底","cht":"婁底","en":"Loudi"}},{"code":"433100","name":"湘西","language":{"zh":"湘西","cht":"湘西","en":"Xiangxi"}},{"code":"440000","name":"广东","language":{"zh":"广东","cht":"廣東","en":"Guangdong"}},{"code":"440100","name":"广州","language":{"zh":"广州","cht":"廣州","en":"Guangzhou"}},{"code":"440200","name":"韶关","language":{"zh":"韶关","cht":"韶關","en":"Shaoguan"}},{"code":"440300","name":"深圳","language":{"zh":"深圳","cht":"深圳","en":"Shenzhen"}},{"code":"440400","name":"珠海","language":{"zh":"珠海","cht":"珠海","en":"Zhuhai"}},{"code":"440500","name":"汕头","language":{"zh":"汕头","cht":"汕頭","en":"Shantou"}},{"code":"440600","name":"佛山","language":{"zh":"佛山","cht":"佛山","en":"Foshan"}},{"code":"440700","name":"江门","language":{"zh":"江门","cht":"江門","en":"Jiangmen"}},{"code":"440800","name":"湛江","language":{"zh":"湛江","cht":"湛江","en":"Zhanjiang"}},{"code":"440900","name":"茂名","language":{"zh":"茂名","cht":"茂名","en":"Maoming"}},{"code":"441200","name":"肇庆","language":{"zh":"肇庆","cht":"肇慶","en":"Zhaoqing"}},{"code":"441300","name":"惠州","language":{"zh":"惠州","cht":"惠州","en":"Huizhou"}},{"code":"441400","name":"梅州","language":{"zh":"梅州","cht":"梅州","en":"Meizhou"}},{"code":"441500","name":"汕尾","language":{"zh":"汕尾","cht":"汕尾","en":"Shanwei"}},{"code":"441600","name":"河源","language":{"zh":"河源","cht":"河源","en":"Heyuan"}},{"code":"441700","name":"阳江","language":{"zh":"阳江","cht":"陽江","en":"Yangjiang"}},{"code":"441800","name":"清远","language":{"zh":"清远","cht":"清遠","en":"Qingyuan"}},{"code":"441900","name":"东莞","language":{"zh":"东莞","cht":"東莞","en":"Dongguan"}},{"code":"442000","name":"中山","language":{"zh":"中山","cht":"中山","en":"Zhongshan"}},{"code":"445100","name":"潮州","language":{"zh":"潮州","cht":"潮州","en":"Chaozhou"}},{"code":"445200","name":"揭阳","language":{"zh":"揭阳","cht":"揭陽","en":"Jieyang"}},{"code":"445300","name":"云浮","language":{"zh":"云浮","cht":"雲浮","en":"Yunfu"}},{"code":"450000","name":"广西","language":{"zh":"广西","cht":"廣西","en":"Guangxi"}},{"code":"450100","name":"南宁","language":{"zh":"南宁","cht":"南寧","en":"Nanning"}},{"code":"450200","name":"柳州","language":{"zh":"柳州","cht":"柳州","en":"Liuzhou"}},{"code":"450300","name":"桂林","language":{"zh":"桂林","cht":"桂林","en":"Guilin"}},{"code":"450400","name":"梧州","language":{"zh":"梧州","cht":"梧州","en":"Wuzhou"}},{"code":"450500","name":"北海","language":{"zh":"北海","cht":"北海","en":"Beihai"}},{"code":"450600","name":"防城港","language":{"zh":"防城港","cht":"防城港","en":"Fangchenggang"}},{"code":"450700","name":"钦州","language":{"zh":"钦州","cht":"欽州","en":"Qinzhou"}},{"code":"450800","name":"贵港","language":{"zh":"贵港","cht":"貴港","en":"Guigang"}},{"code":"450900","name":"玉林","language":{"zh":"玉林","cht":"玉林","en":"Yulin"}},{"code":"451000","name":"百色","language":{"zh":"百色","cht":"百色","en":"Baise"}},{"code":"451100","name":"贺州","language":{"zh":"贺州","cht":"賀州","en":"Hezhou"}},{"code":"451200","name":"河池","language":{"zh":"河池","cht":"河池","en":"Hechi"}},{"code":"451300","name":"来宾","language":{"zh":"来宾","cht":"來賓","en":"Laibin"}},{"code":"451400","name":"崇左","language":{"zh":"崇左","cht":"崇左","en":"Chongzuo"}},{"code":"460000","name":"海南","language":{"zh":"海南","cht":"海南","en":"Hainan"}},{"code":"460100","name":"海口","language":{"zh":"海口","cht":"海口","en":"Haikou"}},{"code":"460200","name":"三亚","language":{"zh":"三亚","cht":"三亞","en":"Sanya"}},{"code":"469001","name":"五指山","language":{"zh":"五指山","cht":"五指山","en":"Wuzhishan"}},{"code":"469002","name":"琼海","language":{"zh":"琼海","cht":"瓊海","en":"Qionghai"}},{"code":"469005","name":"文昌","language":{"zh":"文昌","cht":"文昌","en":"Wenchang"}},{"code":"469006","name":"万宁","language":{"zh":"万宁","cht":"萬寧","en":"Wanning"}},{"code":"469007","name":"东方","language":{"zh":"东方","cht":"東方","en":"Dongfang"}},{"code":"469021","name":"定安","language":{"zh":"定安","cht":"定安","en":"Dingan"}},{"code":"469022","name":"屯昌","language":{"zh":"屯昌","cht":"屯昌","en":"Tunchang"}},{"code":"469023","name":"澄迈","language":{"zh":"澄迈","cht":"澄邁","en":"Chengmai"}},{"code":"469024","name":"临高","language":{"zh":"临高","cht":"臨高","en":"Lingao"}},{"code":"469025","name":"白沙","language":{"zh":"白沙","cht":"白沙","en":"Baisha"}},{"code":"469026","name":"昌江","language":{"zh":"昌江","cht":"昌江","en":"Changjiang"}},{"code":"469027","name":"乐东","language":{"zh":"乐东","cht":"樂東","en":"Ledong"}},{"code":"469028","name":"陵水","language":{"zh":"陵水","cht":"陵水","en":"Lingshui"}},{"code":"469029","name":"保亭","language":{"zh":"保亭","cht":"保亭","en":"Baoting"}},{"code":"469030","name":"琼中","language":{"zh":"琼中","cht":"瓊中","en":"Qiongzhong"}},{"code":"500000","name":"重庆","language":{"zh":"重庆","cht":"重慶","en":"Chongqing"}},{"code":"510000","name":"四川","language":{"zh":"四川","cht":"四川","en":"Sichuan"}},{"code":"510100","name":"成都","language":{"zh":"成都","cht":"成都","en":"Chengdu"}},{"code":"510300","name":"自贡","language":{"zh":"自贡","cht":"自貢","en":"Zigong"}},{"code":"510400","name":"攀枝花","language":{"zh":"攀枝花","cht":"攀枝花","en":"Panzhihua"}},{"code":"510500","name":"泸州","language":{"zh":"泸州","cht":"瀘州","en":"Luzhou"}},{"code":"510600","name":"德阳","language":{"zh":"德阳","cht":"德陽","en":"Deyang"}},{"code":"510700","name":"绵阳","language":{"zh":"绵阳","cht":"綿陽","en":"Mianyang"}},{"code":"510800","name":"广元","language":{"zh":"广元","cht":"廣元","en":"Guangyuan"}},{"code":"510900","name":"遂宁","language":{"zh":"遂宁","cht":"遂宁","en":"Suining"}},{"code":"511000","name":"内江","language":{"zh":"内江","cht":"內江","en":"Neijiang"}},{"code":"511100","name":"乐山","language":{"zh":"乐山","cht":"樂山","en":"Leshan"}},{"code":"511300","name":"南充","language":{"zh":"南充","cht":"南充","en":"Nanchong"}},{"code":"511400","name":"眉山","language":{"zh":"眉山","cht":"眉山","en":"Meishan"}},{"code":"511500","name":"宜宾","language":{"zh":"宜宾","cht":"宜陽","en":"Yibin"}},{"code":"511600","name":"广安","language":{"zh":"广安","cht":"廣安","en":"Guangan"}},{"code":"511700","name":"达州","language":{"zh":"达州","cht":"達州","en":"Dazhou"}},{"code":"511800","name":"雅安","language":{"zh":"雅安","cht":"雅安","en":"Yaan"}},{"code":"511900","name":"巴中","language":{"zh":"巴中","cht":"巴中","en":"Bazhong"}},{"code":"512000","name":"资阳","language":{"zh":"资阳","cht":"資陽","en":"Ziyang"}},{"code":"513200","name":"阿坝","language":{"zh":"阿坝","cht":"阿壩","en":"Tibetan"}},{"code":"513300","name":"甘孜","language":{"zh":"甘孜","cht":"甘孜","en":"Garze"}},{"code":"513400","name":"凉山","language":{"zh":"凉山","cht":"涼山","en":"Liangshan"}},{"code":"520000","name":"贵州","language":{"zh":"贵州","cht":"貴州","en":"Guizhou"}},{"code":"520100","name":"贵阳","language":{"zh":"贵阳","cht":"貴陽","en":"Guiyang"}},{"code":"520200","name":"六盘水","language":{"zh":"六盘水","cht":"六盤水","en":"Liupanshui"}},{"code":"520300","name":"遵义","language":{"zh":"遵义","cht":"遵義","en":"Zunyi"}},{"code":"520400","name":"安顺","language":{"zh":"安顺","cht":"安順","en":"Anshun"}},{"code":"522200","name":"铜仁","language":{"zh":"铜仁","cht":"銅仁","en":"Tongren"}},{"code":"522300","name":"黔西南","language":{"zh":"黔西南","cht":"黔西南","en":"Qianxinan"}},{"code":"522400","name":"毕节","language":{"zh":"毕节","cht":"畢節","en":"Bijie"}},{"code":"522600","name":"黔东南","language":{"zh":"黔东南","cht":"黔東南","en":"Qiandongnan"}},{"code":"522700","name":"黔南","language":{"zh":"黔南","cht":"黔南","en":"Qiannan"}},{"code":"530000","name":"云南","language":{"zh":"云南","cht":"雲南","en":"Yunnan"}},{"code":"530100","name":"昆明","language":{"zh":"昆明","cht":"昆明","en":"Kunming"}},{"code":"530300","name":"曲靖","language":{"zh":"曲靖","cht":"曲靖","en":"Qujing"}},{"code":"530400","name":"玉溪","language":{"zh":"玉溪","cht":"玉溪","en":"Yuxi"}},{"code":"530500","name":"保山","language":{"zh":"保山","cht":"保山","en":"Baoshan"}},{"code":"530600","name":"昭通","language":{"zh":"昭通","cht":"昭通","en":"Zhaotong"}},{"code":"530700","name":"丽江","language":{"zh":"丽江","cht":"麗江","en":"Lijiang"}},{"code":"530800","name":"思茅","language":{"zh":"思茅","cht":"思茅","en":"Simao"}},{"code":"530900","name":"临沧","language":{"zh":"临沧","cht":"臨滄","en":"Lincang"}},{"code":"532300","name":"楚雄","language":{"zh":"楚雄","cht":"楚雄","en":"Chuxiong"}},{"code":"532500","name":"红河","language":{"zh":"红河","cht":"紅河","en":"Honghe"}},{"code":"532600","name":"文山","language":{"zh":"文山","cht":"文山","en":"Wenshan"}},{"code":"532800","name":"西双版纳","language":{"zh":"西双版纳","cht":"西雙版納","en":"Xishuangbanna"}},{"code":"532900","name":"大理","language":{"zh":"大理","cht":"大理","en":"Dali"}},{"code":"533100","name":"德宏","language":{"zh":"德宏","cht":"德宏","en":"Dehong"}},{"code":"533300","name":"怒江","language":{"zh":"怒江","cht":"怒江","en":"salween"}},{"code":"533400","name":"迪庆","language":{"zh":"迪庆","cht":"迪慶","en":"Diqing"}},{"code":"540000","name":"西藏","language":{"zh":"西藏","cht":"西藏","en":"Tibet"}},{"code":"540100","name":"拉萨","language":{"zh":"拉萨","cht":"拉薩","en":"Lhasa"}},{"code":"542100","name":"昌都","language":{"zh":"昌都","cht":"昌都","en":"Changdu"}},{"code":"542200","name":"山南","language":{"zh":"山南","cht":"山南","en":"Shannan"}},{"code":"542300","name":"日喀则","language":{"zh":"日喀则","cht":"日喀則","en":"Shigatse"}},{"code":"542400","name":"那曲","language":{"zh":"那曲","cht":"那曲","en":"Nagqu"}},{"code":"542500","name":"阿里","language":{"zh":"阿里","cht":"阿里","en":"Ali"}},{"code":"542600","name":"林芝","language":{"zh":"林芝","cht":"林芝","en":"Nyingchi"}},{"code":"610000","name":"陕西","language":{"zh":"陕西","cht":"陝西","en":"Shaanxi"}},{"code":"610100","name":"西安","language":{"zh":"西安","cht":"西安","en":"Xian"}},{"code":"610200","name":"铜川","language":{"zh":"铜川","cht":"銅川","en":"Tongchuan"}},{"code":"610300","name":"宝鸡","language":{"zh":"宝鸡","cht":"白雞","en":"Baoji"}},{"code":"610400","name":"咸阳","language":{"zh":"咸阳","cht":"咸陽","en":"Xianyang"}},{"code":"610500","name":"渭南","language":{"zh":"渭南","cht":"渭南","en":"Weinan"}},{"code":"610600","name":"延安","language":{"zh":"延安","cht":"延安","en":"Yanan"}},{"code":"610700","name":"汉中","language":{"zh":"汉中","cht":"漢中","en":"Hanzhoung"}},{"code":"610800","name":"榆林","language":{"zh":"榆林","cht":"榆林","en":"Yulin"}},{"code":"610900","name":"安康","language":{"zh":"安康","cht":"安康","en":"Ankang"}},{"code":"611000","name":"商洛","language":{"zh":"商洛","cht":"商洛","en":"Shangluo"}},{"code":"620000","name":"甘肃","language":{"zh":"甘肃","cht":"甘肅","en":"Gansu"}},{"code":"620100","name":"兰州","language":{"zh":"兰州","cht":"蘭州","en":"Lanzhou"}},{"code":"620200","name":"嘉峪关","language":{"zh":"嘉峪关","cht":"嘉峪關","en":"Jiayuguan"}},{"code":"620300","name":"金昌","language":{"zh":"金昌","cht":"金昌","en":"Jinchang"}},{"code":"620400","name":"白银","language":{"zh":"白银","cht":"白銀","en":"Baiyin"}},{"code":"620500","name":"天水","language":{"zh":"天水","cht":"天水","en":"Tianshui"}},{"code":"620600","name":"武威","language":{"zh":"武威","cht":"武威","en":"Wuwei"}},{"code":"620700","name":"张掖","language":{"zh":"张掖","cht":"張掖","en":"Zhangye"}},{"code":"620800","name":"平凉","language":{"zh":"平凉","cht":"平涼","en":"Pingliang"}},{"code":"620900","name":"酒泉","language":{"zh":"酒泉","cht":"酒泉","en":"Jiuquan"}},{"code":"621000","name":"庆阳","language":{"zh":"庆阳","cht":"慶陽","en":"Qingyang"}},{"code":"621100","name":"定西","language":{"zh":"定西","cht":"定西","en":"Dingxi"}},{"code":"621200","name":"陇南","language":{"zh":"陇南","cht":"隴南","en":"Longnan"}},{"code":"622900","name":"临夏","language":{"zh":"临夏","cht":"臨夏","en":"Linxia"}},{"code":"623000","name":"甘南","language":{"zh":"甘南","cht":"甘南","en":"Gannan"}},{"code":"630000","name":"青海","language":{"zh":"青海","cht":"青海","en":"Qinghai"}},{"code":"630100","name":"西宁","language":{"zh":"西宁","cht":"西寧","en":"Xining"}},{"code":"632100","name":"海东","language":{"zh":"海东","cht":"海東","en":"Haidong"}},{"code":"632200","name":"海北","language":{"zh":"海北","cht":"海北","en":"Haibei"}},{"code":"632300","name":"黄南","language":{"zh":"黄南","cht":"黃南","en":"Huangnan"}},{"code":"632500","name":"海南","language":{"zh":"海南","cht":"海南","en":"Hainan"}},{"code":"632600","name":"果洛","language":{"zh":"果洛","cht":"果洛","en":"Guoluo"}},{"code":"632700","name":"玉树","language":{"zh":"玉树","cht":"玉樹","en":"Yushu"}},{"code":"632800","name":"海西","language":{"zh":"海西","cht":"海西","en":"Haixi"}},{"code":"640000","name":"宁夏","language":{"zh":"宁夏","cht":"寧夏","en":"Ningxia"}},{"code":"640100","name":"银川","language":{"zh":"银川","cht":"銀川","en":"Yinchuan"}},{"code":"640200","name":"石嘴山","language":{"zh":"石嘴山","cht":"石嘴山","en":"Shizuishan"}},{"code":"640300","name":"吴忠","language":{"zh":"吴忠","cht":"吳中","en":"Wuzhong"}},{"code":"640400","name":"固原","language":{"zh":"固原","cht":"固原","en":"Guyuan"}},{"code":"640500","name":"中卫","language":{"zh":"中卫","cht":"中衛","en":"Zhongwei"}},{"code":"650000","name":"新疆","language":{"zh":"新疆","cht":"新疆","en":"Xinjiang"}},{"code":"650100","name":"乌鲁木齐","language":{"zh":"乌鲁木齐","cht":"烏魯木齊","en":"Urumchi"}},{"code":"650200","name":"克拉玛依","language":{"zh":"克拉玛依","cht":"克拉瑪依","en":"Karamay"}},{"code":"652100","name":"吐鲁番","language":{"zh":"吐鲁番","cht":"吐魯番","en":"Turpan"}},{"code":"652200","name":"哈密","language":{"zh":"哈密","cht":"哈密","en":"Hami"}},{"code":"652300","name":"昌吉","language":{"zh":"昌吉","cht":"昌吉","en":"Changji"}},{"code":"652700","name":"博尔塔拉","language":{"zh":"博尔塔拉","cht":"博爾塔拉","en":"Mongolia"}},{"code":"652800","name":"巴音郭楞","language":{"zh":"巴音郭楞","cht":"巴音郭楞","en":"Mongolia"}},{"code":"652900","name":"阿克苏","language":{"zh":"阿克苏","cht":"阿克蘇","en":"Akesu"}},{"code":"653000","name":"克孜勒苏柯尔克孜自治州","language":{"zh":"克孜勒苏柯尔克孜自治州","cht":"克孜勒蘇柯爾克孜自治州","en":"Kiriz Kirgiz Autonomous Prefecture"}},{"code":"653100","name":"喀什","language":{"zh":"喀什","cht":"喀什","en":"Kashi"}},{"code":"653200","name":"和田","language":{"zh":"和田","cht":"和田","en":"Hetian"}},{"code":"654000","name":"伊犁","language":{"zh":"伊犁","cht":"伊犁","en":"Yili"}},{"code":"654200","name":"塔城","language":{"zh":"塔城","cht":"塔城","en":"Tacheng"}},{"code":"654300","name":"阿勒泰","language":{"zh":"阿勒泰","cht":"阿勒泰","en":"Aletai"}},{"code":"659001","name":"石河子","language":{"zh":"石河子","cht":"石河子","en":"Shihezi"}},{"code":"659002","name":"阿拉尔","language":{"zh":"阿拉尔","cht":"阿拉爾","en":"Alaer"}},{"code":"659003","name":"图木舒克","language":{"zh":"图木舒克","cht":"圖木舒克","en":"Tumushuke"}},{"code":"659004","name":"五家渠","language":{"zh":"五家渠","cht":"五家渠","en":"Wujiaqu"}},{"code":"659005","name":"北屯","language":{"zh":"北屯","cht":"北屯","en":"Beitun"}},{"code":"659006","name":"铁门关","language":{"zh":"铁门关","cht":"鐵門關","en":"Tiemenguan"}},{"code":"659007","name":"双河","language":{"zh":"双河","cht":"雙河","en":"Shuanghe"}},{"code":"659008","name":"可克达拉","language":{"zh":"可克达拉","cht":"可克達拉","en":"Kekedala"}},{"code":"659009","name":"昆玉","language":{"zh":"昆玉","cht":"昆玉","en":"Kunyu"}},{"code":"700000","name":"香港","language":{"zh":"香港","cht":"香港","en":"Hong Kong"}},{"code":"710000","name":"澳门","language":{"zh":"澳门","cht":"澳門","en":"Macao"}},{"code":"720000","name":"台湾","language":{"zh":"台湾","cht":"台灣","en":"Taiwan"}},{"code":"800000","name":"中国","language":{"zh":"中国","cht":"中國","en":"China"}},{"code":"900000","name":"海外","language":{"zh":"海外","cht":"海外","en":"overseas"}},{"code":"900100","name":"日本","language":{"zh":"日本","cht":"日本","en":"Japan"}},{"code":"900200","name":"印度","language":{"zh":"印度","cht":"印度","en":"India"}},{"code":"900300","name":"韩国","language":{"zh":"韩国","cht":"韓國","en":"South Korea"}},{"code":"900400","name":"菲律宾","language":{"zh":"菲律宾","cht":"菲律賓","en":"Philippines"}},{"code":"900500","name":"新加坡","language":{"zh":"新加坡","cht":"新加坡","en":"Singapore"}},{"code":"900600","name":"泰国","language":{"zh":"泰国","cht":"泰國","en":"Thailand"}},{"code":"900700","name":"缅甸","language":{"zh":"缅甸","cht":"緬甸","en":"Myanmar"}},{"code":"900800","name":"越南","language":{"zh":"越南","cht":"越南","en":"Vietnam"}},{"code":"900900","name":"马来西亚","language":{"zh":"马来西亚","cht":"馬來西亞","en":"Malaysia"}},{"code":"901000","name":"印度尼西亚","language":{"zh":"印度尼西亚","cht":"印度尼西亞","en":"Indonesia"}},{"code":"901100","name":"澳大利亚","language":{"zh":"澳大利亚","cht":"澳大利亞","en":"Australia"}},{"code":"901200","name":"新西兰","language":{"zh":"新西兰","cht":"新西蘭","en":"New Zealand"}},{"code":"901300","name":"美国","language":{"zh":"美国","cht":"美國","en":"U.S.A"}},{"code":"901400","name":"加拿大","language":{"zh":"加拿大","cht":"加拿大","en":"Canada"}},{"code":"901500","name":"巴西","language":{"zh":"巴西","cht":"巴西","en":"Brazil"}},{"code":"901600","name":"阿根廷","language":{"zh":"阿根廷","cht":"阿根廷","en":"Argentina"}},{"code":"901700","name":"英国","language":{"zh":"英国","cht":"英國","en":"Britain"}},{"code":"901800","name":"德国","language":{"zh":"德国","cht":"德國","en":"Germany"}},{"code":"901900","name":"法国","language":{"zh":"法国","cht":"法國","en":"France"}},{"code":"902000","name":"西班牙","language":{"zh":"西班牙","cht":"西班牙","en":"Spain"}},{"code":"902100","name":"意大利","language":{"zh":"意大利","cht":"意大利","en":"Italy"}},{"code":"902200","name":"埃及","language":{"zh":"埃及","cht":"埃及","en":"Egypt"}},{"code":"902300","name":"阿拉伯","language":{"zh":"阿拉伯","cht":"阿拉伯","en":"Arab"}},{"code":"902400","name":"巴黎","language":{"zh":"巴黎","cht":"巴黎","en":"Paris"}},{"code":"902500","name":"伦敦","language":{"zh":"伦敦","cht":"倫敦","en":"London"}},{"code":"902600","name":"布鲁塞尔","language":{"zh":"布鲁塞尔","cht":"布魯塞爾","en":"Brussels"}},{"code":"902700","name":"柏林","language":{"zh":"柏林","cht":"柏林","en":"Berlin"}},{"code":"902800","name":"意大利","language":{"zh":"意大利","cht":"意大利","en":"Italy"}}]')
    },
    bf75: function(t, e, n) {},
    c0c7: function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                ref: "content",
                staticClass: "album-component-photoListHot display-horizontal"
            }, [t._l(t.photos, (function(e, n) {
                return a("list" + e.class, {
                    key: e.id,
                    tag: "component",
                    staticClass: "album-component-photoListHot-item",
                    style: n < 4 && {
                        height: t.heights[n] + "px"
                    },
                    attrs: {
                        rank: n < 3 && n + 1,
                        item: e
                    },
                    nativeOn: {
                        click: function(a) {
                            return t.$emit("click", e, n)
                        }
                    }
                }, [n < 9 ? a("div", {
                    staticClass: "album-component-photoListHot-item-rank"
                }, [t._v(t._s(n + 1))]) : t._e(), 1 == e.type ? a("div", {
                    staticClass: "album-component-photoListHot-item-video"
                }, [a("i", {
                    staticClass: "iconfont icon-play"
                }), t._v(" " + t._s(t.time(e.videoTime)))]) : t._e(), !t.select || "photo" !== e.type && "video" !== e.type ? t._e() : a("div", {
                    staticClass: "album-component-listPhoto-select",
                    attrs: {
                        sort: t.selecteds.findIndex((function(t) {
                            return t.id === e.id
                        }
                        )) + 1
                    },
                    on: {
                        click: function(a) {
                            return a.stopPropagation(),
                            t.$emit("selecte", e, n)
                        }
                    }
                })])
            }
            )), t.photos.length || t.hasMore ? t._e() : a("nullData", {
                attrs: {
                    image: n("dde7")
                }
            }, [t._v(t._s(t.$t("album.nullData.hot")))])], 2)
        }
          , i = []
          , o = n("ddeb")
          , s = n("83d8")
          , c = n("fdd7")
          , r = {
            name: "photoListHot",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                photos: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                select: {
                    type: Boolean,
                    default: !1
                },
                selecteds: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                hasMore: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    heights: [],
                    edge: 3
                }
            },
            mounted: function() {
                this.computeHeight()
            },
            methods: {
                computeHeight: function() {
                    if (this.heights = [],
                    this.photos.length)
                        for (var t = this.$refs.content.clientWidth, e = 0; e < Math.min(this.photos.length, 3); e++)
                            this.heights.push(parseInt(this.photos[e].height / this.photos[e].width * t))
                }
            },
            watch: {
                photos: function() {
                    this.computeHeight()
                }
            },
            components: {
                listPhoto: o["a"],
                listVideo: s["a"],
                nullData: c["a"]
            }
        }
          , l = r
          , u = (n("64ae"),
        n("2877"))
          , h = Object(u["a"])(l, a, i, !1, null, null, null);
        e["a"] = h.exports
    },
    c1ab: function(t, e, n) {},
    c794: function(t, e, n) {
        "use strict";
        var a = n("9f61")
          , i = n.n(a);
        i.a
    },
    cf0c: function(t, e, n) {},
    cfac: function(t, e, n) {},
    d0ee: function(t, e, n) {},
    d0f4: function(t, e, n) {
        t.exports = n.p + "img/money-logo.3d3e52f4.png"
    },
    d166: function(t, e, n) {},
    d532: function(t, e, n) {},
    d6dd: function(t, e, n) {
        "use strict";
        var a = n("2783")
          , i = n.n(a);
        i.a
    },
    d7cd: function(t, e, n) {
        "use strict";
        var a = n("b6d8")
          , i = n.n(a);
        i.a
    },
    d878: function(t, e, n) {
        "use strict";
        var a = n("8ecd")
          , i = n.n(a);
        i.a
    },
    dafb: function(t, e, n) {
        "use strict";
        var a = n("524d")
          , i = n.n(a);
        i.a
    },
    dbea: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [t.loadPageState < 4 ? n("loadPage", {
                attrs: {
                    url: t.publicBacketPath + "/loading/ALBUM" + t.id + "/0.png",
                    svg: "15" === t.style || "16" === t.style ? t.publicBacketPath + "/loading/album" + t.id + "/bottom-0.svg" : "",
                    size: "15" === t.style || "16" === t.style ? "180x180" : "80x80"
                },
                on: {
                    response: t.loadingResponse
                }
            }) : t._e(), t.passwordBox ? n("password", {
                attrs: {
                    id: t.id
                },
                on: {
                    submit: t.passed
                }
            }) : t._e(), t.album ? n("router-view", {
                attrs: {
                    album: t.album,
                    likePhoto: t.likePhoto,
                    collectionPhoto: t.collectionPhoto,
                    photoLikeNum: t.photoLikeNum,
                    payPhoto: t.payPhoto,
                    hasMore: t.hasMore
                },
                on: {
                    loadingScore: function(e) {
                        t.loadPageState++
                    }
                }
            }) : t._e()], 1)
        }
          , i = []
          , o = (n("8e6e"),
        n("55dd"),
        n("ac6a"),
        n("456d"),
        n("a481"),
        n("bd86"))
          , s = (n("96cf"),
        n("3b8d"))
          , c = n("2f62")
          , r = n("ace7")
          , l = (n("7514"),
        n("d225"))
          , u = n("b0b4")
          , h = (n("7f7f"),
        n("3b2b"),
        n("b8c8"))
          , m = n("a47e")
          , d = function t(e) {
            var n = this;
            Object(l["a"])(this, t),
            this.result = {},
            this.arrayData = h,
            this.reset = function() {
                n.result = {
                    result: {
                        code: "",
                        name: "",
                        language: g()
                    },
                    province: {
                        code: "",
                        name: "",
                        language: g()
                    },
                    city: {
                        code: "",
                        name: "",
                        language: g()
                    }
                }
            }
            ,
            this.reset(),
            this.setParams = function(t, e) {
                n.result[t] = e,
                n.result.result.code = e.code,
                Object.keys(m["a"]).forEach((function(t) {
                    n.result.result.language[t] = n.result.province.language[t] + " " + n.result.city.language[t]
                }
                )),
                n.result.result.language.en = n.result.city.language.en + " " + n.result.province.language.en,
                n.result.result.name = n.result.result.language.zh
            }
            ,
            this.set = function(t) {
                return n.reset(),
                t && (/^\d{6}$/.test(t) ? n.getCityFormCode(t) : n.getCityFormAddr(t)),
                n.result
            }
            ,
            this.get = function() {
                return n.result
            }
            ,
            this.provinceArr = [],
            this.getProvince = function() {
                if (n.provinceArr.length)
                    return n.provinceArr;
                var t = [];
                return n.arrayData.forEach((function(e) {
                    return /\d{2}0000/.test(e.code) ? t.push(e) : ""
                }
                )),
                n.provinceArr = t,
                t
            }
            ,
            this.getCity = function(t) {
                if (!t)
                    throw new Error("没有省code：需要通过省code获取市数据");
                var e = [];
                return n.arrayData.forEach((function(n) {
                    RegExp(t.replace(/0{4}$/, "\\d{4}")).test(n.code) && n.code !== t && e.push(n)
                }
                )),
                e
            }
            ,
            this.getCityFormCode = function(t) {
                if (!t)
                    throw new Error("没有code：需要通过code获取市数据");
                var e = null
                  , a = null
                  , i = t.substr(0, 2) + "0000"
                  , o = t.substr(0, 4) + "00";
                n.arrayData.forEach((function(n) {
                    i === n.code && (e = n),
                    o === n.code && t !== i && (a = n)
                }
                )),
                e && n.setParams("province", e),
                a && n.setParams("city", a)
            }
            ,
            this.getCityFormAddr = function(t) {
                if (!t)
                    throw new Error("没有地址：需要通过地址获取市数据");
                var e = t
                  , a = n.getProvince()
                  , i = []
                  , o = null
                  , s = null;
                a.forEach((function(t) {
                    e.indexOf(t.name) > -1 && (o = t,
                    e = e.replace(t.name, ""))
                }
                )),
                i = n.getCity(o.code),
                i.forEach((function(t) {
                    e.indexOf(t.name) > -1 && (s = t)
                }
                )),
                o && n.setParams("province", o),
                s && n.setParams("city", s)
            }
            ,
            this.formatConversion = function() {
                var t = []
                  , e = n.getProvince();
                return e.forEach((function(e) {
                    var a = n.formatConversionObj(e)
                      , i = n.getCity(e.code);
                    i.length > 0 && (a.chlidren = [],
                    i.forEach((function(t) {
                        a.chlidren.push(n.formatConversionObj(t))
                    }
                    ))),
                    t.push(a)
                }
                )),
                t
            }
            ,
            this.formatConversionObj = function(t) {
                return {
                    label: t.name,
                    value: {
                        pCode: t.code,
                        name: t.name
                    }
                }
            }
            ,
            this.set(e)
        };
        function g() {
            var t = {};
            return Object.keys(m["a"]).forEach((function(e) {
                t[e] = ""
            }
            )),
            t
        }
        var p = n("e278")
          , f = n("171e")
          , b = function t(e) {
            var n = this;
            Object(l["a"])(this, t),
            this.id = e.idEnc,
            this.name = e.name,
            this.desc = e.dsc,
            this.count = 0,
            this.lastCount = 0,
            this.language = {},
            Object.keys(m["a"]).forEach((function(t) {
                n.language[t] = e.name || e.enName,
                "zh" === t && (n.language[t] = e.name || e.enName),
                "en" === t && (n.language[t] = e.enName || e.name)
            }
            )),
            this._count = this.count,
            Object.defineProperty(this, "count", {
                get: function() {
                    return n._count
                },
                set: function(t) {
                    n._count = t,
                    n.lastCount = t
                }
            })
        }
          , v = function t(e) {
            Object(l["a"])(this, t),
            this.id = e.id,
            this.nick = e.nick,
            this.portrait = e.portrait,
            this.userId = e.usrId
        }
          , w = function t(e) {
            Object(l["a"])(this, t),
            this.image = e.m,
            this.desc = e.d,
            this.identity = 1 === e.type ? e.u : void 0,
            this.link = 0 === e.type ? e.u : void 0,
            this.name = e.n,
            this.type = e.type,
            this.title = e.typeTitle
        }
          , y = n("6e02")
          , C = function t(e) {
            Object(l["a"])(this, t);
            var n = e.title;
            n = e.shareNewTitle ? e.shareNewTitle : e.isHasGraphic ? "".concat(e.title, "|").concat(e.language ? "Live Photo" : "图文直播") : "".concat(e.title, "|").concat(e.language ? "Live Photo" : "图片直播"),
            this.title = n,
            this.imgUrl = Object(y["a"])(e.shareCoverUrl, {
                w: 200,
                h: 200,
                m: "fill"
            }),
            this.desc = e.shareTxt,
            this.link = "".concat(location.origin, "/r/").concat(e.linkIndex)
        }
          , k = function t(e) {
            Object(l["a"])(this, t),
            this.type = e.t,
            this.isOpen = !(3 === e.t || 4 === e.t || 5 === e.t),
            this.buttonText = S(e),
            this.text = z(e),
            this.logo = e.lu,
            this.once = !!e.adOnce,
            this.externalLinks = !0,
            this.location = {},
            this.href = e.u,
            /^\/\//.test(this.href) && (this.href = r["path"] + this.href),
            new RegExp("\\w?" + r["domain"] + ".com/activityApply").test(this.href) && (this.href = this.href.replace("/activityApply", "/v4/activityApply/")),
            new RegExp("\\w?" + r["domain"] + ".com/activityOpen").test(this.href) && (this.href = this.href.replace("/activityOpen", "/v4/activityOpen/")),
            5 === this.type && (this.href = "/PhotographerMarketing?id=".concat(e.id))
        };
        function S(t) {
            var e = "";
            switch (t.t) {
            case 0:
                e = "立即了解";
                break;
            case 1:
                e = "立即了解";
                break;
            case 2:
                e = "点击拨打";
                break
            }
            return t.bt || e
        }
        function z(t) {
            switch (t.t) {
            case 3:
                return "点我了解喔图云摄影";
            case 4:
                return "点我使用闪传直播平台";
            case 5:
                return "立即预约拍摄";
            default:
                return t.at
            }
        }
        var _ = function t(e) {
            Object(l["a"])(this, t),
            this.id = e.id,
            this.actId = e.actId,
            this.url = e.url,
            this.buttonImg = e.buttonImg
        }
          , P = function t(e) {
            Object(l["a"])(this, t),
            this.official = !e.official,
            this.title = e.endTitle,
            this.intro = e.endIntro,
            this.type = e.endType,
            this.logo = e.endPhoto
        }
          , x = function() {
            function t(e) {
                var n = this;
                Object(l["a"])(this, t);
                var a = e.albumDTO || {}
                  , i = e.bannerUrlDTOList || {}
                  , o = e.seperateDTOList || {}
                  , s = e.plannerProDTOList || {}
                  , c = e.posterDTO || {}
                  , u = e.proDTOList || {}
                  , h = e.mbDTOList || {}
                  , g = e.endingDTO || {}
                  , y = e.sideAdDTO || {}
                  , S = e.albumSideButtons || [];
                switch (this.id = a.idEnc,
                this.title = a.title,
                this.detail = a.detail,
                this.pageviews = a.pageviews || 0,
                this.photoTotol = 0,
                this.videoTotol = 0,
                this.pageTitle = a.bannerTitle,
                this.language = Object.keys(m["a"])[a.language],
                this.custom = a.custom,
                this.isCustom = 2 === a.custom,
                this.nineGrids = a.jigsawImg || "",
                this.sort = a.order || 4,
                this.displayType = "",
                a.displayType) {
                case 0:
                    this.displayType = "grid";
                    break;
                case 1:
                    this.displayType = "waterfall";
                    break;
                case 2:
                    this.displayType = "timeline";
                    break;
                default:
                    this.displayType = "grid";
                    break
                }
                switch ("timeline" === this.displayType && (this.sort = a.order % 2 ? 5 : 6),
                this.ownerId = a.ownerId,
                this.classifyStyle = a.categoryStyle || 0,
                this.style = a.style,
                this.shorturl = a.linkIndex,
                this.startDate = a.startDate,
                this.endDate = a.endDate,
                this.addr = a.adrString,
                this.city = new d(a.adrString).get(),
                this.addrDetails = a.addrDetail,
                this.collectionId = a.albumSetId,
                this.gcjLatitude = a.gcjLatitude,
                this.gcjLongitude = a.gcjLongitude,
                this.wgsLatitude = a.wgsLatitude,
                this.wgsLongitude = a.wgsLongitude,
                this.likeTotol = 0,
                this.collectionButtonFunction = a.backAlbumSetStyle || 0,
                this.systemVersion = a.systemVersion,
                this.live = !!a.isLive,
                this.liveState = !!a.isLiveStat,
                this.isPhotographer = !!a.isPhotographer,
                this.isPlanner = !!a.isPlanner,
                this.isVideo = !1,
                this.praise = !!a.isLike,
                this.comment = !!a.isComment,
                this.commentReview = !!a.cmtAuditing,
                this.search = !!a.isSearch,
                this.faceRecognize = !!a.isIdentity,
                this.textRecognize = !!a.textRecognize,
                this.download = !!a.isDownload,
                this.graphic = !!a.isGraphic && !!a.isHasGraphic,
                this.isPoster = !!a.isPoster,
                this.isBanner = !!a.isBanner,
                this.sideBarStatus = !!a.isToolsSpread,
                this.isSideAd = !!a.isSideAd || !!a.isPersonalMarket,
                this.isBottomAd = !!a.isFooter,
                this.isEndAD = !!a.isEnd,
                this.isSponsor = !!a.isSponsor,
                this.photoInfo = !!a.isPhotoInfo,
                this.jigsawInfo = !!a.isJigsawQr,
                this.hotCategory = !!a.isHot,
                this.albumSetIds = a.albumSetIds,
                this.version = !!a.version,
                this.isCharge = !a.isFree,
                this.isFreePrice = a.price || 0,
                this.shareNewTitle = a.shareNewTitle,
                this.pecket = !!a.isRe,
                this.isShowLoginAboutComponent = location.origin === r["path"] || !1,
                this.isAlbumCollection = "0" !== a.albumSetIds,
                this.isShowAlbumCollection = !!a.isAlbumSetSide,
                this.isAlbumSetNavigate = !!a.isAlbumSetNavigate,
                this.collectionStyle = a.albumSetIconUrl,
                this.isInteractiveUpload = !!a.isInteractive,
                this.interactiveUploadParticipation = 0,
                this.aiphotoQR = a.cloudAlbumLink,
                this.isDrainage = !1,
                this.albumInfoSwitch = {
                    title: !!a.isTitleDisplay,
                    view: !!a.showVisitors,
                    date: !!a.showTime,
                    addr: !!a.showAddress
                },
                this.titleLanguage = {},
                Object.keys(m["a"]).forEach((function(t) {
                    n.titleLanguage[t] = "zh" === t ? a.title || a.englishTitle : "en" === t ? a.englishTitle || a.title : n.titleLanguage["zh"]
                }
                )),
                a.addrDetail && "" !== a.addrDetail && (this.addr = a.addrDetail),
                this.style) {
                case 0:
                    this.style = 3;
                    break;
                case 1:
                    this.style = 4;
                    break;
                case 2:
                    this.style = 9;
                    break;
                case 10:
                    this.style = 3;
                    break
                }
                this.banner = [],
                i.forEach((function(t) {
                    t.type = a.isBanner,
                    n.banner.push(new f["a"](t))
                }
                )),
                this.navigationItem = this.getNavigationItem(),
                this._isVideo = this.isVideo,
                Object.defineProperty(this, "isVideo", {
                    get: function() {
                        return n._isVideo
                    },
                    set: function(t) {
                        n._isVideo = t,
                        n.navigationItem = n.getNavigationItem()
                    }
                }),
                this.classify = [],
                o.forEach((function(t) {
                    var e = new b(t);
                    n.classify.push(e)
                }
                )),
                this.photographer = [],
                u.forEach((function(t) {
                    n.photographer.push(new v(t))
                }
                )),
                this.planner = [],
                s.forEach((function(t) {
                    n.planner.push(new v(t))
                }
                )),
                this.sponsor = [],
                h[0].list.forEach((function(t) {
                    n.sponsor.push(new w(t))
                }
                )),
                c.custom = a.custom,
                c.official = !g.official,
                this.poster = new p["a"](c),
                this.share = new C(a),
                this.bottomAd = {
                    text: a.adText,
                    link: a.adLink
                },
                a.isPersonalMarket && (y.t = 5),
                y.id = this.id,
                this.sideAd = new k(y),
                this.sideButtons = [],
                S.forEach((function(t) {
                    n.sideButtons.push(new _(t))
                }
                )),
                g.official = a.official,
                this.endingAd = new P(g)
            }
            return Object(u["a"])(t, [{
                key: "getNavigationItem",
                value: function() {
                    var t = ["live"];
                    return this.hotCategory && t.push("hot"),
                    this.isVideo && t.push("video"),
                    this.comment && t.push("comment"),
                    t
                }
            }, {
                key: "findClassify",
                value: function(t) {
                    if (this.classify && !(this.classify && this.classify.length < 1) && void 0 !== t && null !== t)
                        return this.classify.find((function(e) {
                            return e.id === t
                        }
                        ))
                }
            }, {
                key: "findPhotographer",
                value: function(t) {
                    if (this.photographer && !(this.photographer && this.photographer.length < 1) && void 0 !== t && null !== t)
                        return this.photographer.find((function(e) {
                            return e.id === t
                        }
                        ))
                }
            }, {
                key: "findPhotographerByUserId",
                value: function(t) {
                    if (this.photographer && !(this.photographer && this.photographer.length < 1))
                        return void 0 !== t && null !== t && this.photographer.find((function(e) {
                            return e.userId === t
                        }
                        ))
                }
            }, {
                key: "findPlannerByUserId",
                value: function(t) {
                    if (this.planner && !(this.planner && this.planner.length < 1) && void 0 !== t && null !== t)
                        return this.planner.find((function(e) {
                            return e.userId === t
                        }
                        ))
                }
            }]),
            t
        }()
          , O = n("a0d9")
          , T = n("308d")
          , j = n("6bb5")
          , I = n("4e2b")
          , $ = n("8188")
          , L = function(t) {
            function e(t) {
                var n;
                return Object(l["a"])(this, e),
                n = Object(T["a"])(this, Object(j["a"])(e).call(this, t)),
                n.type = t.vt ? "iframe" : "video",
                n.class = "Video",
                n.videoTime = t.mtime || 0,
                n.videoType = t.vt,
                n.url = t.ol,
                n.msrc = t.sl,
                n.src = t.bl,
                n.size = t.size,
                n
            }
            return Object(I["a"])(e, t),
            e
        }($["a"])
          , D = function t(e) {
            Object(l["a"])(this, t),
            this.type = "graphic",
            this.class = "Graphic",
            this.id = e.pc,
            this.text = e.text,
            this.date = e.tt
        }
          , A = function t(e) {
            Object(l["a"])(this, t),
            this.id = e.id,
            this.nick = e.userName,
            this.portrait = e.faceUrl,
            this.date = e.created,
            this.comment = e.comment,
            this.isLike = !1,
            this.likeTotal = 0,
            this.photo = e.photoUrl || "",
            this.dadDelete = !!e.dadType,
            this.reply = e.dadId ? {
                id: e.dadId,
                nick: e.dadName,
                comment: e.dadComment
            } : null
        }
          , B = n("8400")
          , E = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("section", {
                staticClass: "album-component-password"
            }, [n("div", {
                staticClass: "album-component-password-blueLayer"
            }, [n("ul", {
                staticClass: "album-component-password-blueLayer-language"
            }, t._l(t.language, (function(e, a) {
                return n("li", {
                    key: a,
                    staticClass: "album-component-password-blueLayer-language-item",
                    attrs: {
                        active: t.$i18n.locale === a
                    },
                    on: {
                        click: function(e) {
                            t.$i18n.locale = a
                        }
                    }
                }, [t._v(" " + t._s(e) + " ")])
            }
            )), 0), n("div", {
                staticClass: "album-component-password-blueLayer-container"
            }, [n("div", {
                staticClass: "album-component-password-title"
            }, [t._v(t._s(t.$t("album.password.title")))]), n("div", {
                staticClass: "album-component-password-input",
                attrs: {
                    forbidden: t.isForbidden
                }
            }, [n("i", {
                staticClass: "iconfont icon-lock"
            }), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.password,
                    expression: "password"
                }],
                attrs: {
                    type: "password",
                    placeholder: t.$t("album.password.input")
                },
                domProps: {
                    value: t.password
                },
                on: {
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.verify(e)
                    },
                    input: function(e) {
                        e.target.composing || (t.password = e.target.value)
                    }
                }
            })]), n("button", {
                staticClass: "album-component-password-btn",
                attrs: {
                    forbidden: t.isForbidden
                },
                on: {
                    click: t.verify
                }
            }, [t._v(t._s(t.$t("album.password.enter")))])])])])
        }
          , M = []
          , R = (n("6b54"),
        n("87b3"),
        n("d083"))
          , H = n("72fe")
          , N = n.n(H);
        function G(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function q(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? G(n, !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : G(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var F = {
            name: "password",
            props: {
                id: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    password: "",
                    albumState: this.getAlbumState(),
                    language: m["a"],
                    submitRequest: !1
                }
            },
            mounted: function() {
                var t = this
                  , e = this.albumState[this.id] || {}
                  , n = "";
                e.password && (n = e.password),
                this.$route.query.password && (n = this.$route.query.password),
                n && (this.password = "......",
                setTimeout((function() {
                    t.submit(n)
                }
                ), 300))
            },
            computed: {
                isForbidden: function() {
                    return 0 === this.password.length
                }
            },
            methods: q({}, Object(c["c"])(["SAVE_PASSWORD", "DELETE_PASSWORD"]), {}, Object(c["b"])(["getAlbumState"]), {
                verify: function() {
                    if (this.isForbidden)
                        return !1;
                    "......" !== this.password && (Object(R["a"])("albumpwd", this.password) ? this.submit(N()(this.password).toString()) : this.$notify(this.$t("album.password.verify")))
                },
                submit: function(t) {
                    var e = this;
                    this.submitRequest || (this.submitRequest = !0,
                    this.$emit("submit", t, (function(n) {
                        e.submitRequest = !1,
                        0 === n.e ? ("......" === e.password && e.$notify(e.$t("album.password.jump")),
                        e.SAVE_PASSWORD({
                            actId: e.id,
                            password: t
                        })) : ("......" === e.password ? e.password = "" : e.$notify(e.$t("album.password.error")),
                        e.DELETE_PASSWORD({
                            actId: e.id
                        }))
                    }
                    )))
                }
            })
        }
          , U = F
          , Y = (n("6ef7"),
        n("2877"))
          , V = Object(Y["a"])(U, E, M, !1, null, null, null)
          , W = V.exports
          , Q = n("fa89")
          , J = n("7601")
          , Z = n("3264");
        function X(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function K(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? X(n, !0).forEach((function(e) {
                    Object(o["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : X(n).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var tt = {
            name: "albumBase",
            data: function() {
                return {
                    publicBacketPath: r["publicBacketPath"],
                    loadPageState: 0,
                    id: this.$route.params.id,
                    ver: this.$route.params.ver || 1,
                    album: null,
                    share: null,
                    passwordBox: !1,
                    password: "",
                    style: -1,
                    version: {
                        fa: 0,
                        fpl: {},
                        newFpl: {},
                        fvl: 0,
                        fac: 0,
                        nfas: 0
                    },
                    con: 60,
                    page: 0,
                    photos: [],
                    graphics: [],
                    payPhoto: {},
                    likePhoto: [],
                    photoLikeNum: {},
                    collectionPhoto: [],
                    hasMore: !0
                }
            },
            mounted: function() {
                var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                    var e;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                if (this.SAVE_ENTER_ALBUM_TIME(this.id),
                                this.id) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return");
                            case 3:
                                return t.next = 5,
                                this.checkNewPhoto();
                            case 5:
                                e = t.sent,
                                this.share = new C(e.d.albumShareDTO),
                                e.d.fa && this.init(e.d);
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )));
                function e() {
                    return t.apply(this, arguments)
                }
                return e
            }(),
            methods: K({}, Object(c["c"])(["SAVE_ENTER_ALBUM_TIME", "SAVE_PAGEVIEWS"]), {}, Object(c["b"])(["getAlbumState", "getUserInfo"]), {
                passed: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n) {
                        var a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return this.password = e,
                                    t.next = 3,
                                    this.checkNewPhoto();
                                case 3:
                                    a = t.sent,
                                    n && n(a),
                                    0 === a.e && (this.passwordBox = !1,
                                    this.init(a.d));
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                init: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e) {
                        var n, a, i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return this.updatePhotos(),
                                    t.next = 3,
                                    this.getCollectionPhoto();
                                case 3:
                                    return t.next = 5,
                                    this.getAlbum();
                                case 5:
                                    n = t.sent,
                                    this.album = new x(n),
                                    this.album.videoTotol = e.vt,
                                    this.album.isVideo = !!e.vt,
                                    this.album.interactiveUploadParticipation = e.interactTotal || 0;
                                    try {
                                        this.album.pageviews = Math.max(e.flowTotal, this.getAlbumState()[this.album.id].pageviews || 0)
                                    } catch (o) {
                                        this.album.pageviews = e.flowTotal
                                    }
                                    if (this.$route.params.ver && (this.album.style = 3,
                                    this.album.comment = !1,
                                    this.album.navigationItem = this.album.getNavigationItem()),
                                    "3.0" === this.album.systemVersion || this.$route.query.debug) {
                                        t.next = 16;
                                        break
                                    }
                                    return a = this.$route.params.sep,
                                    this.$route.params.ver ? location.replace("/albumNoMark?id=".concat(this.id).concat(a ? "&sepId=" + a : "").concat(this.ver ? "&ver=" + this.ver : "")) : location.replace("/album?id=".concat(this.id).concat(a ? "&sepId=" + a : "")),
                                    t.abrupt("return");
                                case 16:
                                    if (!this.getUserInfo().token) {
                                        t.next = 21;
                                        break
                                    }
                                    if (this.$API.browseRecord(this.id),
                                    !this.album.isCharge) {
                                        t.next = 21;
                                        break
                                    }
                                    return t.next = 21,
                                    this.getPayPhoto();
                                case 21:
                                    for (i in this.album.likeTotol = Object.keys(this.likePhoto).length,
                                    e.s)
                                        this.version.fpl[i] = e.s[i].v,
                                        "0" !== i && (this.album.findClassify(i).count = e.s[i].t);
                                    this.loadPageState++,
                                    this.$i18n.locale = Object(J["a"])("language") || this.album.language,
                                    this.setPageTitle();
                                case 26:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                loadingResponse: function(t) {
                    var e = this;
                    for (var n in t)
                        "x-oss-meta-style" === n && (this.style = t[n]);
                    setTimeout((function() {
                        e.loadPageState++
                    }
                    ), 1e3)
                },
                setPageTitle: function() {
                    document.title = this.$t("album.pageTitle.".concat(this.album.pageTitle)).replace("album.pageTitle.", "")
                },
                checkNewPhoto: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    this.$API.v4cUs(this.id, this.password);
                                case 3:
                                    if (e = t.sent,
                                    e) {
                                        t.next = 6;
                                        break
                                    }
                                    throw Error();
                                case 6:
                                    t.next = 13;
                                    break;
                                case 8:
                                    return t.prev = 8,
                                    t.t0 = t["catch"](0),
                                    t.next = 12,
                                    this.$API.v4oUs(this.id, this.password);
                                case 12:
                                    e = t.sent;
                                case 13:
                                    if (e && 0 === e.e) {
                                        for (n in this.version.fa = e.d.fa,
                                        this.version.fac = e.d.fac,
                                        this.version.fvl = e.d.fvl,
                                        this.version.nfas = e.d.albumSetTime,
                                        e.d.s)
                                            this.version.newFpl[n] = e.d.s[n].v,
                                            this.album && "0" !== n && (this.album.findClassify(n).lastCount = e.d.s[n].t);
                                        this.album && (this.album.interactiveUploadParticipation = e.d.interactTotal || 0,
                                        e.d.flowTotal >= this.album.pageviews ? (this.album.pageviews = e.d.flowTotal,
                                        this.SAVE_PAGEVIEWS({
                                            actId: this.id,
                                            pageviews: this.album.pageviews
                                        })) : Object(Z["a"])(18, Object.assign({
                                            actId: this.album.id,
                                            sepId: 0
                                        }))),
                                        this.photoLikeNum = Object.assign(this.photoLikeNum, e.d.tempLikeTotalList),
                                        this.updatePhotoLikeNumber()
                                    }
                                    return !e || 300005 !== e.e && 100003 !== e.e || (this.passwordBox = !0,
                                    this.album = null),
                                    t.abrupt("return", e);
                                case 16:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[0, 8]])
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                updatePhotos: function() {
                    this.version.fpl = Object.assign({}, this.version.newFpl),
                    this.resetPhotos()
                },
                getAlbum: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.version.fa) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.next = 4,
                                    this.$API.v4cFa(this.id, this.version.fa);
                                case 4:
                                    if (e = t.sent,
                                    !e || 0 !== e.e) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return", e.d);
                                case 7:
                                    return t.abrupt("return", {});
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                getCollectionPhoto: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.getUserInfo().token) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.prev = 2,
                                    t.next = 5,
                                    this.$API.v4Cl(this.id);
                                case 5:
                                    e = t.sent,
                                    e && 0 === e.e && (this.collectionPhoto = e.d.c,
                                    this.likePhoto = e.d.l),
                                    t.next = 11;
                                    break;
                                case 9:
                                    t.prev = 9,
                                    t.t0 = t["catch"](2);
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[2, 9]])
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                updatePhotoLikeNumber: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e, n, a;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    for (e in this.photoLikeNum)
                                        for (n = 0,
                                        a = this.photos.length; n < a; n++)
                                            this.photos[n] && e === this.photos[n].id && (this.photos[n].likeNum = this.photoLikeNum[e]);
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                getPayPhoto: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e, n = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.$API.v4oFppl(this.id, this.getUserInfo().token);
                                case 2:
                                    e = t.sent,
                                    e && 0 === e.e && (this.payPhoto = {},
                                    e.d.forEach((function(t) {
                                        n.payPhoto[t.pc] = t.ol
                                    }
                                    )),
                                    this.graphics.forEach((function(t) {
                                        n.pictureIsPurchased(t)
                                    }
                                    )),
                                    this.photos.forEach((function(t) {
                                        n.pictureIsPurchased(t)
                                    }
                                    )));
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                resetPhotos: function() {
                    this.page = 0,
                    this.photos = [],
                    this.graphics = [],
                    this.hasMore = !0
                },
                getPhotos: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e) {
                        var n, a = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!this.hasMore) {
                                        t.next = 7;
                                        break
                                    }
                                    return this.page++,
                                    t.next = 4,
                                    this.requestPhotos(e, this.page);
                                case 4:
                                    n = t.sent,
                                    n.length < this.con && (this.hasMore = !1),
                                    n.forEach((function(t) {
                                        "photo" !== t.type && "video" !== t.type || (t.index = a.photos.length,
                                        a.photos.push(t),
                                        a.graphics.push(t)),
                                        "graphic" === t.type && a.graphics.push(t)
                                    }
                                    ));
                                case 7:
                                    return t.abrupt("return", {
                                        graphics: this.graphics,
                                        photos: this.photos
                                    });
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                requestPhotos: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, n) {
                        var a, i, o, s = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.$API.v4cFpl(this.album.id, e, this.con, n, this.album.sort, this.version.fpl[e], this.ver);
                                case 2:
                                    if (a = t.sent,
                                    !this.getUserInfo().id || this.album.ownerId !== this.getUserInfo().id || !this.album.isCharge) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 6,
                                    this.$API.v4Faopl(this.album.id, e, this.con, n, this.album.sort);
                                case 6:
                                    i = t.sent,
                                    i && 0 === i.e && i.d.forEach((function(t) {
                                        s.payPhoto[t.pc] = t.ol
                                    }
                                    ));
                                case 8:
                                    if (!a || 0 !== a.e) {
                                        t.next = 12;
                                        break
                                    }
                                    return o = [],
                                    a.d.forEach((function(t) {
                                        if (0 === t.t) {
                                            var e = new O["a"](t);
                                            e.isCollection = s.collectionPhoto.indexOf(e.id) >= 0,
                                            e.isLike = s.likePhoto.indexOf(e.id) >= 0,
                                            e.likeNum = s.photoLikeNum[e.id] || 0,
                                            s.album.isCharge && s.pictureIsPurchased(e),
                                            o.push(e)
                                        }
                                        if (1 === t.t) {
                                            var n = new L(t);
                                            n.isCollection = s.collectionPhoto.indexOf(n.id) >= 0,
                                            n.isLike = s.likePhoto.indexOf(n.id) >= 0,
                                            n.likeNum = s.photoLikeNum[n.id] || 0,
                                            o.push(n)
                                        }
                                        if (2 === t.t) {
                                            var a = new D(t);
                                            o.push(a)
                                        }
                                    }
                                    )),
                                    t.abrupt("return", o);
                                case 12:
                                    return t.abrupt("return", []);
                                case 13:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                pictureIsPurchased: function(t) {
                    t.osrc = this.payPhoto[t.id] || "",
                    t.isBuy = !!this.payPhoto[t.id]
                },
                getVideos: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.$API.v4cFvl(this.album.id, this.version.fvl);
                                case 2:
                                    return e = t.sent,
                                    n = [],
                                    e.d.forEach((function(t) {
                                        var e = new L({
                                            pc: t.vid,
                                            sl: t.image,
                                            bl: t.image,
                                            ol: t.url,
                                            t: 1,
                                            w: t.wide,
                                            h: t.high,
                                            vt: t.type,
                                            delete: t.deleted,
                                            likeTotal: t.like_total || 0,
                                            os: t.size,
                                            n: t.title || "",
                                            time: t.created,
                                            size: t.size
                                        });
                                        n.push(e)
                                    }
                                    )),
                                    t.abrupt("return", n);
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                getComments: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e, n, a, i, o, s;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.$API.v4cFac(this.album.id, this.version.fac);
                                case 2:
                                    if (e = t.sent,
                                    n = {},
                                    !(e.d.length > 0)) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 7,
                                    this.$API.getCommentNum(this.album.id);
                                case 7:
                                    a = t.sent,
                                    n = a.d;
                                case 9:
                                    return i = [],
                                    o = [],
                                    s = this.getAlbumState()[this.album.id],
                                    s && (o = s.commentLiked || []),
                                    e.d.forEach((function(t) {
                                        var e = new A(t);
                                        e.isLike = o.indexOf(e.id) >= 0,
                                        e.likeTotal = n[e.id] || 0,
                                        i.push(e)
                                    }
                                    )),
                                    t.abrupt("return", i);
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }),
            watch: {
                "$i18n.locale": function() {
                    this.album && this.setPageTitle()
                },
                $route: function(t, e) {
                    e.params.id !== t.params.id && this.$router.go(0)
                },
                passwordBox: function(t) {
                    t && Object(Q["a"])(this.share)
                }
            },
            components: {
                loadPage: B["a"],
                password: W
            }
        }
          , et = tt
          , nt = Object(Y["a"])(et, a, i, !1, null, null, null);
        e["default"] = nt.exports
    },
    dde7: function(t, e, n) {
        t.exports = n.p + "img/noHot.2469c830.png"
    },
    de7c: function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "album-component-photoListGrid display-horizontal"
            }, [t._l(t.photos, (function(e, a) {
                return n("list" + e.class, {
                    key: a,
                    tag: "component",
                    staticClass: "album-component-photoListGrid-item",
                    style: e.choice && {
                        width: "100vw",
                        height: e.height / e.width * 100 + "vw"
                    },
                    attrs: {
                        album: t.album,
                        item: e
                    },
                    nativeOn: {
                        click: function(n) {
                            "Graphic" !== e.class && t.$emit("click", e, e.index)
                        }
                    }
                }, [!t.select || "photo" !== e.type && "video" !== e.type ? t._e() : n("div", {
                    staticClass: "album-component-listPhoto-select",
                    attrs: {
                        sort: t.selecteds.findIndex((function(t) {
                            return t.id === e.id
                        }
                        )) + 1
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            t.$emit("selecte", e, a)
                        }
                    }
                })])
            }
            )), t.photos.length || t.hasMore ? t._e() : n("nullData", [t._v(t._s(t.$t("album.nullData.live")))])], 2)
        }
          , i = []
          , o = n("ddeb")
          , s = n("83d8")
          , c = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("section", {
                staticClass: "album-component-listGraphic",
                attrs: {
                    sort: t.sort
                }
            }, [t.item.date ? n("div", {
                staticClass: "album-component-listGraphic-info"
            }, [n("span", {
                staticClass: "album-component-listGraphic-info-logo"
            }), n("span", {
                staticClass: "album-component-listGraphic-info-time"
            }, [t._v(t._s(t.formatDate(new Date(t.item.date), "YYYY-MM-DD hh:mm")))])]) : t._e(), n("pre", {
                staticClass: "album-component-listGraphic-text"
            }, [t._v(t._s(t.item.text))])])
        }
          , r = []
          , l = (n("55dd"),
        n("d18c"))
          , u = {
            name: "listGraphic",
            props: {
                item: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    formatDate: l["a"]
                }
            },
            computed: {
                sort: function() {
                    return this.album.sort % 2 === 0 ? "desc" : "asc"
                }
            }
        }
          , h = u
          , m = (n("8681"),
        n("2877"))
          , d = Object(m["a"])(h, c, r, !1, null, null, null)
          , g = d.exports
          , p = n("fdd7")
          , f = {
            name: "photoListGrid",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                photos: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                select: {
                    type: Boolean,
                    default: !1
                },
                selecteds: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                hasMore: {
                    type: Boolean,
                    default: !0
                }
            },
            components: {
                listPhoto: o["a"],
                listVideo: s["a"],
                listGraphic: g,
                nullData: p["a"]
            }
        }
          , b = f
          , v = (n("a1a4"),
        Object(m["a"])(b, a, i, !1, null, null, null));
        e["a"] = v.exports
    },
    dfd5: function(t, e, n) {},
    e1e0: function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.show ? n("div", {
                staticClass: "tool-layout",
                on: {
                    touchmove: function(t) {
                        t.preventDefault()
                    },
                    click: function(e) {
                        t.show = !1
                    }
                }
            }) : t._e()]), n("transition", {
                attrs: {
                    name: "fade"
                }
            }, [n("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.show,
                    expression: "show"
                }],
                ref: "dropDown",
                staticClass: "album-component-dropDown"
            }, [t._t("default")], 2)])], 1)
        }
          , i = []
          , o = {
            name: "dropDown",
            data: function() {
                return {
                    show: !1
                }
            },
            mounted: function() {
                var t = this;
                this.$refs.dropDown.parentNode.previousSibling.addEventListener("click", (function(e) {
                    e.stopPropagation(),
                    e.preventDefault(),
                    t.show = !t.show
                }
                ));
                for (var e = 0, n = this.$refs.dropDown.childNodes.length; e < n; e++)
                    this.$refs.dropDown.childNodes[e].addEventListener("click", (function(e) {
                        e.stopPropagation(),
                        e.preventDefault(),
                        t.$emit("input", e.target.dataset.value),
                        t.show = !t.show
                    }
                    ))
            }
        }
          , s = o
          , c = (n("180f"),
        n("2877"))
          , r = Object(c["a"])(s, a, i, !1, null, null, null);
        e["a"] = r.exports
    },
    e20c: function(t, e, n) {},
    e2e5: function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "album-component-videoList"
            }, [t._l(t.videos, (function(e, a) {
                return n("section", {
                    key: a,
                    staticClass: "album-component-videoList-item"
                }, [n("figure", {
                    style: {
                        width: "93vw",
                        height: e.height / e.width * 93 + "vw"
                    }
                }, [n("videoPlayer", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.downloadModel,
                        expression: "!downloadModel"
                    }],
                    staticClass: "album-component-videoList-item-video",
                    attrs: {
                        poster: e.msrc,
                        src: e.url,
                        type: e.type
                    }
                })], 1), n("div", {
                    staticClass: "album-component-videoList-item-statusbar"
                }, [n("h3", {
                    staticClass: "album-component-videoList-item-statusbar-title text-overflow"
                }, [t._v(t._s(e.fileName))]), t.album.isShowLoginAboutComponent ? n("ul", {
                    staticClass: "album-component-videoList-item-statusbar-menu"
                }, [!t.isDingding && t.checkVideoSize(e) && 0 === e.videoType ? n("li", {
                    staticClass: "album-component-videoList-item-statusbar-menu-item",
                    on: {
                        click: function(n) {
                            return t.download(e)
                        }
                    }
                }, [n("i", {
                    staticClass: "iconfont icon-download"
                }), t._v(t._s(t.$t("album.video.download")))]) : t._e(), n("li", {
                    staticClass: "album-component-videoList-item-statusbar-menu-item",
                    on: {
                        click: function(n) {
                            return t.report(e)
                        }
                    }
                }, [n("i", {
                    staticClass: "iconfont icon-report"
                }), t._v(t._s(t.$t("album.video.report")))])]) : t._e()])])
            }
            )), t.downloadModel ? n("section", {
                staticClass: "tool-layout",
                staticStyle: {
                    "background-color": "rgba(0,0,0,.9)"
                },
                on: {
                    touchmove: function(t) {
                        t.preventDefault()
                    }
                }
            }, [n("div", {
                staticClass: "album-component-videoList-download",
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    }
                }
            }, [n("img", {
                staticClass: "album-component-videoList-download-qrCode download",
                attrs: {
                    src: t.downloadSrc,
                    alt: "下载视频"
                }
            }), n("div", {
                staticClass: "album-component-videoList-download-close",
                on: {
                    click: function(e) {
                        t.downloadModel = !1
                    }
                }
            }, [n("i", {
                staticClass: "iconfont icon-close"
            })]), n("div", [t._v(t._s(t.$t("album.video.longPressQRDownloadVideo")))])])]) : t._e()], 2)
        }
          , i = []
          , o = (n("6c7b"),
        n("96cf"),
        n("3b8d"))
          , s = n("f53f")
          , c = n("c8e2")
          , r = n("4a37")
          , l = n.n(r)
          , u = n("b589")
          , h = n.n(u)
          , m = n("d083")
          , d = {
            name: "videoList",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                videos: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    downloadModel: !1,
                    downloadSrc: "",
                    isDingding: !1
                }
            },
            mounted: function() {
                this.isDingding = Object(m["a"])("dingtalk")
            },
            methods: {
                checkVideoSize: function(t) {
                    return t.size / 1048576 < 20
                },
                download: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                        var n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return this.downloadModel = !0,
                                    this.downloadSrc = "",
                                    n = "".concat(location.origin, "/downLoadVideo?actId=").concat(this.album.idEnc, "&vid=").concat(e.id),
                                    t.next = 5,
                                    this.createQr(n);
                                case 5:
                                    this.downloadSrc = t.sent;
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                createQr: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t(e) {
                        var n, a, i, o;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = document.createElement("canvas"),
                                    n.width = 588,
                                    n.height = 316,
                                    a = n.getContext("2d"),
                                    a.fillStyle = "#fff",
                                    a.fillRect(0, 0, n.width, n.height),
                                    t.next = 8,
                                    Object(s["a"])(l.a.getQrBase64(e, {
                                        correctLevel: window.QRErrorCorrectLevel.M,
                                        width: 200,
                                        height: 200,
                                        foreground: "#333"
                                    }));
                                case 8:
                                    return i = t.sent,
                                    a.drawImage(i, 0, 0, i.width, i.height, 154, 36, 280, 280),
                                    a.arc(294, 172, 32, 0 * Math.PI, 360 * Math.PI),
                                    a.fill(),
                                    t.next = 14,
                                    Object(s["a"])(h.a);
                                case 14:
                                    return o = t.sent,
                                    a.drawImage(o, 0, 0, o.width, o.height, 272, 150, 44, 44),
                                    t.abrupt("return", n.toDataURL("image/jpeg"));
                                case 17:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                report: function(t) {
                    var e = this.$API.reportVideo(t.id);
                    0 === e.e && window.$notify(this.$t("album.notify.reportSuccess"))
                }
            },
            components: {
                videoPlayer: c["a"]
            }
        }
          , g = d
          , p = (n("91e4"),
        n("2877"))
          , f = Object(p["a"])(g, a, i, !1, null, null, null);
        e["a"] = f.exports
    },
    e6df: function(t, e, n) {
        "use strict";
        var a = n("e20c")
          , i = n.n(a);
        i.a
    },
    ee67: function(t, e, n) {
        "use strict";
        var a = n("d0ee")
          , i = n.n(a);
        i.a
    },
    eebd: function(t, e, n) {},
    f137: function(t, e, n) {
        "use strict";
        var a = n("d166")
          , i = n.n(a);
        i.a
    },
    f18b: function(t, e, n) {
        "use strict";
        var a = n("44e3")
          , i = n.n(a);
        i.a
    },
    f4e1: function(t, e, n) {
        "use strict";
        var a = n("dfd5")
          , i = n.n(a);
        i.a
    },
    f616: function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                ref: "content",
                staticClass: "album-component-photoListWaterfall display-horizontal",
                style: {
                    height: (t.contentHeight || 163) + "px"
                },
                on: {
                    resize: t.computePosition
                }
            }, [t._l(t.positions, (function(e, a) {
                return n("list" + t.photos[a].class, {
                    key: a,
                    tag: "component",
                    staticClass: "album-component-photoListWaterfall-item",
                    style: {
                        height: e.height + "px",
                        top: " " + e.top + "px",
                        left: e.left + "px"
                    },
                    attrs: {
                        item: t.photos[a]
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.$emit("click", t.photos[a], a)
                        }
                    }
                }, [!t.select || "photo" !== t.photos[a].type && "video" !== t.photos[a].type ? t._e() : n("div", {
                    staticClass: "album-component-listPhoto-select",
                    attrs: {
                        sort: t.selecteds.findIndex((function(e) {
                            return e.id === t.photos[a].id
                        }
                        )) + 1
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.$emit("selecte", t.photos[a], a)
                        }
                    }
                })])
            }
            )), t.photos.length || t.hasMore ? t._e() : n("nullData", [t._v(t._s(t.$t("album.nullData.live")))])], 2)
        }
          , i = []
          , o = (n("ac6a"),
        n("ddeb"))
          , s = n("83d8")
          , c = n("fdd7")
          , r = {
            name: "photoListWaterfall",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                photos: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                select: {
                    type: Boolean,
                    default: !1
                },
                selecteds: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                hasMore: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    contentHeight: 0,
                    edge: 3,
                    positions: []
                }
            },
            mounted: function() {
                this.computePosition()
            },
            methods: {
                computePosition: function() {
                    var t = this;
                    if (this.$refs.content) {
                        var e = this.$refs.content.clientWidth
                          , n = e / 2 - 1.5 * this.edge
                          , a = this.edge
                          , i = e / 2 + .5 * this.edge
                          , o = 0
                          , s = 0;
                        this.positions = [],
                        this.photos.forEach((function(e) {
                            var c = {};
                            c.height = parseInt(e.height / e.width * n),
                            s >= o ? (c.top = o,
                            c.left = a,
                            o += t.edge + c.height) : (c.top = s,
                            c.left = i,
                            s += t.edge + c.height),
                            t.positions.push(c)
                        }
                        )),
                        this.contentHeight = Math.max(o, s)
                    }
                }
            },
            watch: {
                photos: function() {
                    this.computePosition()
                }
            },
            components: {
                listPhoto: o["a"],
                listVideo: s["a"],
                nullData: c["a"]
            }
        }
          , l = r
          , u = (n("c794"),
        n("2877"))
          , h = Object(u["a"])(l, a, i, !1, null, null, null);
        e["a"] = h.exports
    },
    fd15: function(t, e, n) {
        t.exports = n.p + "img/favorite.03f5734c.png"
    },
    fdd7: function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "album-component-nullData"
            }, [n("img", {
                staticClass: "album-component-nullData-image",
                attrs: {
                    src: t.image
                }
            }), n("div", {
                staticClass: "album-component-nullData-text"
            }, [t._t("default")], 2)])
        }
          , i = []
          , o = {
            name: "nullData",
            props: {
                image: {
                    type: String,
                    default: n("438b")
                }
            }
        }
          , s = o
          , c = (n("1cc2"),
        n("2877"))
          , r = Object(c["a"])(s, a, i, !1, null, null, null);
        e["a"] = r.exports
    },
    fe31: function(t, e, n) {
        "use strict";
        var a = n("16d8")
          , i = n.n(a);
        i.a
    }
}]);
