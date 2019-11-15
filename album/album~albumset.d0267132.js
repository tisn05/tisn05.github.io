(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["album~albumset"], {
    1185: function(t, e, i) {
        "use strict";
        var a = i("c573")
          , n = i.n(a);
        n.a
    },
    "171e": function(t, e, i) {
        "use strict";
        var a = i("d225")
          , n = function t(e) {
            switch (Object(a["a"])(this, t),
            this.type = "live",
            this.class = "Live",
            this.href = e.href || "",
            this.cover = e.url || "",
            this.startTime = e.startTime,
            this.title = e.title,
            this.state = e.state || 0,
            this.stateText = "",
            e.state) {
            case 0:
                this.stateText = "begin";
                break;
            case 1:
                this.stateText = "living";
                break;
            case 2:
                this.stateText = "end";
                break;
            case 3:
                this.stateText = "recording";
                break;
            case 4:
                this.stateText = "recorded";
                break;
            case 5:
                this.stateText = "recording";
                break
            }
        };
        i.d(e, "a", (function() {
            return s
        }
        ));
        var s = function t(e) {
            switch (Object(a["a"])(this, t),
            this.href = e.href.trim() || "",
            this.image = e.url || "",
            this.scale = Math.range(.3, parseFloat(e.size), .75),
            e.type) {
            case 1:
                this.type = "image";
                break;
            case 2:
                this.type = "video";
                break;
            case 3:
                this.type = "iframe";
                break;
            case 4:
                this.type = "live";
                break;
            default:
                this.type = null;
                break
            }
            "live" === this.type && (this.live = new n(e))
        }
    },
    "1bd8": function(t, e, i) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("section", {
                staticClass: "component-slider"
            }, [i("div", {
                staticClass: "component-slider-content",
                style: {
                    width: t.width + "px",
                    height: t.height + "px"
                }
            }, [i("div", {
                staticClass: "component-slider-container",
                class: t.isTouch ? "" : "touch",
                style: {
                    width: t.width * t.count + "px",
                    transform: "translate(" + (t.value * -t.width - t.touchDistance) + "px, 0)"
                },
                on: {
                    touchstart: function(e) {
                        return t.touchstart(e)
                    },
                    touchmove: t.touchmove,
                    touchend: t.touchend
                }
            }, [t._t("default")], 2)]), t.nav ? i("ul", {
                staticClass: "component-slider-nav"
            }, t._l(t.count, (function(e) {
                return i("li", {
                    key: e,
                    attrs: {
                        avtive: t.value === e - 1
                    }
                })
            }
            )), 0) : t._e()])
        }
          , n = []
          , s = (i("c5f6"),
        {
            name: "slider",
            props: {
                value: {
                    type: Number,
                    default: 0
                },
                nav: {
                    type: Boolean,
                    default: !0
                },
                rebound: {
                    type: Boolean,
                    default: !0
                },
                autoPlayTime: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    width: 0,
                    height: 0,
                    count: 0,
                    playStart: !!this.autoPlayTime,
                    autoPlayTimeout: null,
                    isTouch: !1,
                    touchDistance: 0,
                    target: {
                        touch: {
                            x: 0,
                            y: 0
                        },
                        moveTouch: {
                            x: 0,
                            y: 0
                        },
                        direction: ""
                    }
                }
            },
            mounted: function() {
                this.computedSize(),
                this.$addScreenListener(this.resize),
                this.dataChange(),
                this.change(),
                this.playStart && this.play()
            },
            beforeDestroy: function() {
                this.$removeScreenListener(this.resize),
                this.stop()
            },
            methods: {
                computedSize: function() {
                    this.width = Math.min(this.$el.clientWidth, 1960),
                    this.height = Math.min(this.$el.clientHeight, 1080)
                },
                resize: function() {
                    this.computedSize(),
                    this.$emit("resize", this.width, this.height)
                },
                dataChange: function() {
                    this.stop();
                    var t = this.$el.children[0].children[0];
                    this.count = t.children.length,
                    this.playStart && this.play()
                },
                touchstart: function(t) {
                    this.stop(),
                    this.isTouch = !0,
                    this.target.touch.x = t.touches[0].pageX,
                    this.target.touch.y = t.touches[0].pageY,
                    this.target.moveTouch.x = t.touches[0].pageX,
                    this.target.moveTouch.y = t.touches[0].pageY
                },
                touchmove: function(t) {
                    this.target.moveTouch.x = t.touches[0].pageX,
                    this.target.moveTouch.y = t.touches[0].pageY;
                    var e = t.touches[0].pageX - this.target.touch.x
                      , i = t.touches[0].pageY - this.target.touch.y;
                    this.target.direction || (this.target.direction = Math.abs(e) < Math.abs(i) ? "v" : "h"),
                    "h" === this.target.direction && t.preventDefault()
                },
                touchend: function() {
                    var t = this;
                    this.isTouch = !1,
                    this.touchDistance = 0,
                    this.target.direction = "",
                    setTimeout((function() {
                        t.touchDistance = 0
                    }
                    ), 50),
                    this.target.moveTouch.x > this.target.touch.x + 10 && this.value > 0 && this.prev(),
                    this.target.moveTouch.x < this.target.touch.x - 10 && this.value < this.count - 1 && this.next(),
                    this.playStart && this.play()
                },
                prev: function() {
                    this.value <= 0 || (this.$emit("input", this.value - 1),
                    this.change())
                },
                next: function() {
                    this.value >= this.count - 1 || (this.$emit("input", this.value + 1),
                    this.change())
                },
                change: function() {
                    this.$emit("change", this.value)
                },
                play: function() {
                    var t = this;
                    this.count < 2 || this.autoPlayTimeout || (this.autoPlayTimeout = setInterval((function() {
                        t.value >= t.count - 1 ? t.$emit("input", 0) : t.next()
                    }
                    ), 1e3 * this.autoPlayTime),
                    this.$emit("play", this.value))
                },
                stop: function() {
                    this.autoPlayTimeout && clearInterval(this.autoPlayTimeout),
                    this.autoPlayTimeout = null
                }
            },
            watch: {
                "target.moveTouch.x": function() {
                    this.rebound && "v" !== this.target.direction && (this.touchDistance = this.target.touch.x - this.target.moveTouch.x,
                    this.value < 1 && this.target.moveTouch.x > this.target.touch.x && (this.touchDistance = this.touchDistance / 5),
                    this.value > this.count - 2 && this.target.moveTouch.x < this.target.touch.x && (this.touchDistance = this.touchDistance / 5))
                },
                autoPlayTime: function(t) {
                    this.playStart = !!t
                }
            }
        })
          , r = s
          , o = (i("a3a0"),
        i("2877"))
          , c = Object(o["a"])(r, a, n, !1, null, null, null);
        e["a"] = c.exports
    },
    "21fe": function(t, e, i) {
        "use strict";
        var a = i("c39e")
          , n = i.n(a);
        n.a
    },
    6062: function(t, e, i) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "aliPlayer",
                style: t.playState && {
                    backgroundImage: "url(" + t.cover + ")"
                },
                attrs: {
                    id: t.id
                }
            })
        }
          , n = []
          , s = (i("96cf"),
        i("3b8d"))
          , r = {
            name: "aliPlayer",
            props: {
                url: {
                    type: String,
                    default: ""
                },
                cover: {
                    type: String,
                    default: ""
                },
                option: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    playState: !1,
                    aliPlayer: null,
                    id: "aliPlayer-".concat(parseInt(1e11 * Math.random()))
                }
            },
            mounted: function() {
                var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0,
                                t.next = 3,
                                this.$loadResources("script", {
                                    src: "https://g.alicdn.com/de/prismplayer/2.8.2/aliplayer-min.js"
                                });
                            case 3:
                                return t.next = 5,
                                this.$loadResources("link", {
                                    href: "https://g.alicdn.com/de/prismplayer/2.8.2/skins/default/aliplayer-min.css",
                                    rel: "stylesheet"
                                });
                            case 5:
                                this.init(),
                                t.next = 10;
                                break;
                            case 8:
                                t.prev = 8,
                                t.t0 = t["catch"](0);
                            case 10:
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
            beforeDestroy: function() {
                this.dispose()
            },
            methods: {
                init: function() {
                    var t = this;
                    this.aliPlayer = new window.Aliplayer(Object.assign({
                        id: this.id,
                        width: "100%",
                        height: "100%",
                        useH5Prism: !0,
                        playsinline: !0,
                        controlBarVisibility: "click",
                        autoplay: !1,
                        source: this.url,
                        cover: this.cover
                    }, this.option),(function(e) {
                        t.$emit("ready", e)
                    }
                    )),
                    this.aliPlayer.on("play", (function(e) {
                        t.playState = !0,
                        t.$emit("play", e)
                    }
                    )),
                    this.aliPlayer.on("pause", (function(e) {
                        t.playState = !1,
                        t.$emit("pause", e)
                    }
                    )),
                    this.aliPlayer.on("ended", (function(e) {
                        t.playState = !1,
                        t.$emit("ended", e)
                    }
                    )),
                    this.aliPlayer.on("liveStreamStop", (function(e) {
                        t.playState = !1,
                        t.$emit("liveStreamStop", e)
                    }
                    )),
                    this.aliPlayer.on("onM3u8Retry", (function(e) {
                        t.playState = !1,
                        t.$emit("onM3u8Retry", e)
                    }
                    )),
                    this.aliPlayer.on("x5requestFullScreen", (function(t) {}
                    )),
                    this.aliPlayer.on("x5cancelFullScreen", (function(t) {}
                    ))
                },
                dispose: function() {
                    this.aliPlayer && this.aliPlayer.dispose()
                },
                reInit: function() {
                    this.dispose(),
                    this.init()
                }
            },
            watch: {
                url: function() {
                    this.aliPlayer.loadByUrl(this.url)
                }
            }
        }
          , o = r
          , c = (i("7dd3"),
        i("2877"))
          , l = Object(c["a"])(o, a, n, !1, null, null, null);
        e["a"] = l.exports
    },
    6422: function(t, e, i) {},
    "6b5d": function(t, e, i) {},
    7541: function(t, e, i) {},
    "7dd3": function(t, e, i) {
        "use strict";
        var a = i("7541")
          , n = i.n(a);
        n.a
    },
    8087: function(t, e, i) {
        "use strict";
        var a = i("6422")
          , n = i.n(a);
        n.a
    },
    8400: function(t, e, i) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "tool-layout component-loadPage",
                on: {
                    touchmove: function(t) {
                        t.preventDefault()
                    }
                }
            }, [i("div", {
                staticClass: "component-loadPage-loader"
            }, [t.loadingShow ? i("img", {
                style: {
                    "max-width": t.loadingImageWidth + "px",
                    "max-height": t.loadingImageHeight + "px"
                },
                attrs: {
                    src: t.url
                }
            }) : t._e(), i("br"), t.svgShow ? i("img", {
                staticClass: "component-loadPage-loader-svg",
                attrs: {
                    src: t.svg
                }
            }) : t._e()])])
        }
          , n = []
          , s = (i("96cf"),
        i("3b8d"))
          , r = (i("28a5"),
        function(t) {
            return new Promise((function(e, i) {
                var a = new XMLHttpRequest;
                a.open("GET", t, !1),
                a.send(null),
                200 === a.status ? e(a) : i(a)
            }
            ))
        }
        )
          , o = {
            name: "loadPage",
            props: {
                url: {
                    type: String,
                    default: i("941b")
                },
                svg: {
                    type: String,
                    default: ""
                },
                size: {
                    type: String,
                    default: "80x80"
                }
            },
            data: function() {
                return {
                    loadingShow: !1,
                    loadingImageWidth: 0,
                    loadingImageHeight: 0,
                    svgShow: !1
                }
            },
            mounted: function() {
                this.setSize(),
                this.loadLoading(),
                this.loadSvg()
            },
            methods: {
                setSize: function() {
                    var t = this.size.toLowerCase().split("x");
                    this.loadingImageWidth = t[0],
                    this.loadingImageHeight = t[1]
                },
                loadLoading: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        var e, i, a, n, s, o, c;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.url) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.prev = 2,
                                    t.next = 5,
                                    r(this.url);
                                case 5:
                                    e = t.sent,
                                    i = e.getAllResponseHeaders().split("\n"),
                                    a = {},
                                    n = 0,
                                    s = i.length;
                                case 9:
                                    if (!(n < s)) {
                                        t.next = 17;
                                        break
                                    }
                                    if (i[n]) {
                                        t.next = 12;
                                        break
                                    }
                                    return t.abrupt("break", 17);
                                case 12:
                                    o = i[n],
                                    o && (c = o.split(": "),
                                    a[c[0]] = c[1].trim());
                                case 14:
                                    n++,
                                    t.next = 9;
                                    break;
                                case 17:
                                    this.$emit("response", a),
                                    this.loadingShow = !0,
                                    t.next = 23;
                                    break;
                                case 21:
                                    t.prev = 21,
                                    t.t0 = t["catch"](2);
                                case 23:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[2, 21]])
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                loadSvg: function() {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.svg) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.prev = 2,
                                    t.next = 5,
                                    r(this.svg);
                                case 5:
                                    this.svgShow = !0,
                                    t.next = 10;
                                    break;
                                case 8:
                                    t.prev = 8,
                                    t.t0 = t["catch"](2);
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[2, 8]])
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            },
            watch: {
                size: function() {
                    this.setSize()
                }
            }
        }
          , c = o
          , l = (i("1185"),
        i("2877"))
          , u = Object(l["a"])(c, a, n, !1, null, null, null);
        e["a"] = u.exports
    },
    "847d": function(t, e, i) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.show ? i("section", {
                staticClass: "album-component-poster",
                on: {
                    touchmove: function(t) {
                        t.preventDefault()
                    }
                }
            }, [i("div", {
                staticClass: "album-component-poster-background",
                style: {
                    backgroundImage: "url(" + t.poster.image + ")"
                },
                attrs: {
                    shrink: t.shrink
                }
            }), t.poster.countdown ? i("div", {
                staticClass: "album-component-poster-countdown"
            }, [t._v(t._s(t.time) + "s")]) : t._e(), i("div", {
                staticClass: "album-component-poster-top"
            }, [t.poster.title ? i("h2", {
                staticClass: "album-component-poster-title"
            }, [t._v(t._s(t.poster.title))]) : t._e(), i("h3", {
                staticClass: "album-component-poster-subtitle"
            }, [t._v(t._s(t.poster.subtitle ? t.poster.subtitle : " "))]), t.poster.logo ? i("img", {
                staticClass: "album-component-poster-logo",
                attrs: {
                    src: t.poster.logo
                }
            }) : t._e()]), i("div", {
                staticClass: "album-component-poster-bottom"
            }, [t.poster.date ? i("div", {
                staticClass: "album-component-poster-time"
            }, [t._v(t._s(t.poster.date))]) : t._e(), t.poster.city ? i("address", {
                staticClass: "album-component-poster-address"
            }, [t._v(t._s(t.poster.city))]) : t._e()]), i("button", {
                staticClass: "album-component-poster-close",
                attrs: {
                    type: t.poster.buttonType
                },
                on: {
                    click: t.close
                }
            }, [t._v(t._s(t.$t("album.poster")[t.poster.buttonText] || t.poster.buttonText))])]) : t._e()])
        }
          , n = []
          , s = (i("96cf"),
        i("3b8d"))
          , r = i("f53f")
          , o = {
            name: "poster",
            props: {
                poster: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                autoStart: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    show: !0,
                    time: 0,
                    Interval: null,
                    shrink: !1
                }
            },
            mounted: function() {
                var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return this.time = this.poster.countdown,
                                t.prev = 1,
                                t.next = 4,
                                Object(r["a"])(this.poster.image);
                            case 4:
                                this.autoStart && this.start(),
                                t.next = 10;
                                break;
                            case 7:
                                t.prev = 7,
                                t.t0 = t["catch"](1),
                                this.close();
                            case 10:
                                this.$emit("load");
                            case 11:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[1, 7]])
                }
                )));
                function e() {
                    return t.apply(this, arguments)
                }
                return e
            }(),
            methods: {
                start: function() {
                    var t = this;
                    this.poster.countdown && (this.shrink = !0,
                    this.Interval = setInterval((function() {
                        t.time || t.close(),
                        t.time--
                    }
                    ), 1e3))
                },
                close: function() {
                    clearInterval(this.Interval),
                    this.show = !1,
                    this.$emit("close")
                }
            }
        }
          , c = o
          , l = (i("b18d"),
        i("2877"))
          , u = Object(l["a"])(c, a, n, !1, null, null, null);
        e["a"] = u.exports
    },
    "8a54": function(t, e, i) {},
    "941b": function(t, e, i) {
        t.exports = i.p + "img/loadPage.f6147123.gif"
    },
    a3a0: function(t, e, i) {
        "use strict";
        var a = i("6b5d")
          , n = i.n(a);
        n.a
    },
    b18d: function(t, e, i) {
        "use strict";
        var a = i("8a54")
          , n = i.n(a);
        n.a
    },
    b9ad: function(t, e, i) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("slider", {
                ref: "banner",
                staticClass: "components-banner",
                style: {
                    height: t.contentHeight
                },
                attrs: {
                    nav: t.data.length > 1 && !t.isLive,
                    rebound: t.data.length > 1,
                    autoPlayTime: t.isLive ? 0 : 5
                },
                on: {
                    resize: t.resize
                },
                model: {
                    value: t.sliderIndex,
                    callback: function(e) {
                        t.sliderIndex = e
                    },
                    expression: "sliderIndex"
                }
            }, t._l(t.data, (function(e, a) {
                return i("div", {
                    key: a,
                    staticClass: "components-banner-item"
                }, ["image" === e.type ? i("a", {
                    attrs: {
                        href: e.href || "javascript:;",
                        "aria-label": "banner-" + a
                    },
                    on: {
                        click: function(i) {
                            return i.stopPropagation(),
                            t.$emit("click", e)
                        }
                    }
                }, [t.width * t.height ? i("imageBox", {
                    staticClass: "components-banner-image",
                    style: {
                        width: t.width + "px",
                        height: t.height + "px"
                    },
                    attrs: {
                        url: t.getImage(e.image, {
                            w: 2 * t.width,
                            h: 2 * t.height
                        })
                    }
                }) : t._e(), e.href ? i("div", {
                    staticClass: "components-banner-arrow"
                }, [i("i", {
                    staticClass: "iconfont icon-right"
                })]) : t._e()], 1) : t._e(), "video" === e.type ? i("videoPlayer", {
                    style: {
                        width: t.width + "px",
                        height: t.height + "px"
                    },
                    attrs: {
                        poster: t.getImage(e.image, {
                            w: 2 * t.width,
                            h: 2 * t.height
                        }),
                        src: e.href
                    }
                }) : t._e(), "iframe" === e.type ? i("iframe", {
                    style: {
                        width: t.width + "px",
                        height: t.height + "px"
                    },
                    attrs: {
                        src: e.href,
                        frameborder: "0",
                        scrolling: "no"
                    }
                }) : t._e(), "live" === e.type ? i("livePlayer", {
                    style: {
                        margin: "-1px",
                        width: t.width + 2 + "px",
                        height: t.height + 2 + "px"
                    },
                    attrs: {
                        poster: t.getImage(e.image, {
                            w: 2 * t.width,
                            h: 2 * t.height
                        }),
                        live: e.live
                    }
                }) : t._e()], 1)
            }
            )), 0)
        }
          , n = []
          , s = (i("c5f6"),
        i("6e02"))
          , r = i("cca9")
          , o = i("c8e2")
          , c = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "component-livePlayer"
            }, [t.isLive ? i("aliPlayer", {
                ref: "aliPlayer",
                staticClass: "component-livePlayer-player",
                attrs: {
                    url: t.live.href,
                    cover: t.live.cover,
                    option: {
                        isLive: "living" === t.live.stateText
                    }
                },
                on: {
                    liveStreamStop: function(e) {
                        t.error = !0
                    }
                }
            }) : t._e(), t.isLive ? t._e() : i("imageBox", {
                staticClass: "component-livePlayer-cover",
                attrs: {
                    url: t.live.cover
                }
            }, [t.isCountdown ? t._e() : i("div", {
                staticClass: "component-livePlayer-countdown"
            }, [t._v(t._s(t.$t("components.livePlayer.countdown" + t.countdownLength, t.countdownTime)))]), i("div", {
                staticClass: "component-livePlayer-hint"
            }, [t.error ? i("span", [t._v(t._s(t.$t("components.livePlayer.reReload")))]) : t._e(), i("br"), t.error ? i("button", {
                staticClass: "component-livePlayer-retry",
                on: {
                    click: function(e) {
                        t.error = !1
                    }
                }
            }, [i("i", {
                staticClass: "iconfont icon-refresh"
            }), t._v("  " + t._s(t.$t("components.livePlayer.flush")))]) : t._e(), "begin" === t.live.stateText && t.isCountdown ? i("span", [t._v(t._s(t.$t("components.livePlayer.comingSoon")))]) : t._e(), "end" === t.live.stateText ? i("span", [t._v(t._s(t.$t("components.livePlayer.finished")))]) : t._e(), "recording" === t.live.stateText ? i("span", [t._v(t._s(t.$t("components.livePlayer.GenerateAReplay")))]) : t._e()])])], 1)
        }
          , l = []
          , u = (i("f576"),
        i("6062"))
          , h = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3
              , i = arguments.length > 2 ? arguments[2] : void 0
              , a = arguments.length > 3 ? arguments[3] : void 0
              , n = null;
            t && "number" === typeof t ? n = setInterval((function() {
                t <= 0 && (n && clearInterval(n),
                a && a()),
                t -= e,
                i && i(t)
            }
            ), 1e3) : n && clearInterval(n)
        }
          , p = i("d18c")
          , d = {
            name: "livePlayer",
            props: {
                live: {
                    type: Object,
                    required: !0,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    error: !1,
                    countdownLength: 4,
                    countdownTime: {
                        d: 0,
                        h: 0,
                        m: 0,
                        s: 0
                    }
                }
            },
            mounted: function() {
                var t = this;
                this.isCountdown || (this.countdown(),
                h(this.live.startTime - (new Date).getTime(), 1e3, (function() {
                    t.countdown()
                }
                )))
            },
            methods: {
                countdown: function() {
                    var t = Object(p["c"])(this.live.startTime);
                    this.countdownLength = t.length,
                    this.countdownTime = {
                        d: t[3],
                        h: t[2] && t[2].padStart(2, "0"),
                        m: t[1] && t[1].padStart(2, "0"),
                        s: t[0] && t[0].padStart(2, "0")
                    }
                }
            },
            computed: {
                isLive: function() {
                    return ("living" === this.live.stateText || "recorded" === this.live.stateText) && this.isCountdown && !this.error
                },
                isCountdown: function() {
                    return this.live.startTime - (new Date).getTime() <= 0
                }
            },
            components: {
                aliPlayer: u["a"],
                imageBox: r["a"]
            }
        }
          , m = d
          , v = (i("21fe"),
        i("2877"))
          , f = Object(v["a"])(m, c, l, !1, null, null, null)
          , g = f.exports
          , y = i("1bd8")
          , b = {
            name: "banner",
            props: {
                data: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                contentHeight: {
                    type: String,
                    redirect: !0
                },
                value: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    sliderIndex: 0,
                    width: 0,
                    height: 0,
                    getImage: s["a"]
                }
            },
            mounted: function() {
                if (this.resize(),
                this.isLive)
                    for (var t = 0, e = this.data.length; t < e; t++)
                        if ("living" === this.data[t].live.stateText) {
                            this.sliderIndex = t;
                            break
                        }
            },
            methods: {
                resize: function() {
                    this.width = Math.min(this.$refs.banner.$el.clientWidth, 1440),
                    this.height = Math.min(this.$refs.banner.$el.clientHeight, 1080)
                }
            },
            computed: {
                isLive: function() {
                    return "live" === this.data[0].type
                }
            },
            watch: {
                value: function() {
                    this.sliderIndex = this.value
                },
                sliderIndex: function() {
                    this.$emit("input", this.sliderIndex)
                }
            },
            components: {
                slider: y["a"],
                imageBox: r["a"],
                videoPlayer: o["a"],
                livePlayer: g
            }
        }
          , x = b
          , w = (i("bf41"),
        Object(v["a"])(x, a, n, !1, null, null, null));
        e["a"] = w.exports
    },
    bf41: function(t, e, i) {
        "use strict";
        var a = i("feda")
          , n = i.n(a);
        n.a
    },
    c39e: function(t, e, i) {},
    c573: function(t, e, i) {},
    c8e2: function(t, e, i) {
        "use strict";
        var a = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "component-videoPlayer"
            }, ["iframe" !== t.type ? i("aliPlayer", {
                staticClass: "component-videoPlayer-player",
                attrs: {
                    url: t.src,
                    cover: t.poster
                }
            }) : t._e(), "iframe" === t.type && t.iframeLoad ? i("iframe", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isPlay,
                    expression: "isPlay"
                }],
                staticClass: "component-videoPlayer-player",
                attrs: {
                    src: t.src,
                    frameborder: "0",
                    scrolling: "no"
                }
            }) : t._e(), "iframe" === t.type ? i("imageBox", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isPlay,
                    expression: "!isPlay"
                }],
                staticClass: "component-videoPlayer-cover",
                attrs: {
                    url: t.poster
                },
                nativeOn: {
                    click: function(e) {
                        return t.play()
                    }
                }
            }, [i("div", {
                staticClass: "component-videoPlayer-playicon iconfont icon-play"
            })]) : t._e()], 1)
        }
          , n = []
          , s = i("6062")
          , r = i("cca9")
          , o = {
            name: "videoPlayer",
            props: {
                src: {
                    type: String,
                    required: !0,
                    default: ""
                },
                poster: {
                    type: String,
                    required: !0,
                    default: ""
                },
                type: {
                    type: String,
                    default: "video"
                }
            },
            data: function() {
                return {
                    isPlay: !1,
                    iframeLoad: !1
                }
            },
            methods: {
                emit: function(t, e) {
                    this.$emit(t, e)
                },
                play: function() {
                    "iframe" === this.type && (this.iframeLoad = !0),
                    this.isPlay = !0,
                    this.$emit("play")
                },
                pause: function() {
                    this.isPlay = !1,
                    this.$emit("pause")
                }
            },
            components: {
                aliPlayer: s["a"],
                imageBox: r["a"]
            }
        }
          , c = o
          , l = (i("8087"),
        i("2877"))
          , u = Object(l["a"])(c, a, n, !1, null, null, null);
        e["a"] = u.exports
    },
    e278: function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return n
        }
        ));
        var a = i("d225")
          , n = function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object(a["a"])(this, t),
            this.image = e.posterUrl,
            this.title = e.mainTitle,
            this.subtitle = e.subTitle,
            this.date = e.date,
            this.city = e.addr,
            this.countdown = Math.isNumber(e.posterTime) ? e.posterTime : 5,
            this.buttonType = e.buttonType,
            this.buttonText = e.posterButtonEnterTxt || "进入直播相册"
        }
    },
    feda: function(t, e, i) {}
}]);
