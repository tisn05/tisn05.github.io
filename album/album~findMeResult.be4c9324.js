(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["album~findMeResult"], {
    "002d": function(t, e, i) {
        t.exports = i.p + "img/text-1.00febd83.png"
    },
    "0302": function(t, e, i) {
        "use strict";
        var s = i("3a06")
          , r = i.n(s);
        r.a
    },
    "036e": function(t, e, i) {},
    "036e7": function(t, e, i) {
        t.exports = i.p + "img/onetext-3.22d51e0c.png"
    },
    "04b7": function(t, e, i) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "component-jigsawv2"
            }, ["style" === t.speed ? i("selectStyle", {
                attrs: {
                    info: t.jigsawInfo
                },
                on: {
                    next: t.selectedStyle,
                    close: t.close
                }
            }) : t._e(), "gifType" === t.speed ? i("gifType", {
                on: {
                    input: t.selectedGifType,
                    close: t.close
                }
            }) : t._e(), "block" === t.pattern ? i("blockEdit", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "block" === t.speed,
                    expression: "speed === 'block'"
                }],
                ref: "blockEdit",
                attrs: {
                    photoList: t.photoList,
                    info: t.jigsawInfo
                },
                on: {
                    selectPhoto: function(e) {
                        t.speed = "select",
                        t.clear()
                    },
                    splic: t.splic,
                    close: t.close
                }
            }) : t._e(), "select" === t.speed ? i("selectPhoto", {
                attrs: {
                    photoList: t.photoList,
                    maxCount: t.maxSelectCount
                },
                on: {
                    next: t.choose,
                    close: t.close
                }
            }) : t._e(), "splic" === t.speed ? i("jigsawMap", {
                attrs: {
                    photoList: t.jigsawPhoto.length ? t.jigsawPhoto : t.photoList,
                    info: t.jigsawInfo,
                    pattern: t.pattern
                },
                on: {
                    close: t.jigsawClose
                }
            }) : t._e()], 1)
        }
          , r = []
          , a = i("75fc")
          , n = (i("c5f6"),
        function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("section", {
                staticClass: "tool-layout component-jigsaw-style"
            }, [i("section", {
                staticClass: "component-jigsaw-style-model"
            }, [i("button", {
                staticClass: "tool-close component-jigsaw-style-close",
                on: {
                    click: function(e) {
                        return t.$emit("close")
                    }
                }
            }, [i("i", {
                staticClass: "iconfont icon-close"
            })]), i("div", {
                staticClass: "component-jigsaw-style-name"
            }, [t._v(t._s(t.$t("album.jigsaw.jigsawNameStyle")))]), i("ul", {
                staticClass: "component-jigsaw-style-group"
            }, ["1010062553" === t.$route.params.id ? i("li", {
                staticClass: "component-jigsaw-style-item",
                attrs: {
                    active: "alibaba20th" === t.pattern
                },
                on: {
                    click: function(e) {
                        t.pattern = "alibaba20th"
                    }
                }
            }, [i("i", {
                staticClass: "iconfont icon-alibaba20th"
            }), i("p", [t._v(t._s(t.$t("album.jigsaw.alibaba20th")))]), i("div", {
                staticClass: "component-jigsaw-style-item-new"
            })]) : t._e(), i("li", {
                staticClass: "component-jigsaw-style-item",
                attrs: {
                    active: "vertical" === t.pattern
                },
                on: {
                    click: function(e) {
                        t.pattern = "vertical"
                    }
                }
            }, [i("i", {
                staticClass: "iconfont icon-vertical"
            }), i("p", [t._v(t._s(t.$t("album.jigsaw.jigsawJoint")))])]), i("li", {
                staticClass: "component-jigsaw-style-item",
                attrs: {
                    active: "grid" === t.pattern
                },
                on: {
                    click: function(e) {
                        t.pattern = "grid"
                    }
                }
            }, [i("i", {
                staticClass: "iconfont icon-grid"
            }), i("p", [t._v(t._s(t.$t("album.jigsaw.jigsawLattice")))])]), i("li", {
                staticClass: "component-jigsaw-style-item",
                attrs: {
                    active: "poster" === t.pattern
                },
                on: {
                    click: function(e) {
                        t.pattern = "poster"
                    }
                }
            }, [i("i", {
                staticClass: "iconfont icon-poster"
            }), i("p", [t._v(t._s(t.$t("album.jigsaw.jigsawPoster")))])]), t.info.nineGrids ? i("li", {
                staticClass: "component-jigsaw-style-item",
                attrs: {
                    active: "block" === t.pattern
                },
                on: {
                    click: function(e) {
                        t.pattern = "block"
                    }
                }
            }, [i("i", {
                staticClass: "iconfont icon-fourColum"
            }), i("p", [t._v(t._s(t.$t("album.jigsaw.jigsawNineGrids")))])]) : t._e(), "1010062553" !== t.$route.params.id ? i("li", {
                staticClass: "component-jigsaw-style-item",
                attrs: {
                    active: "gif" === t.pattern
                },
                on: {
                    click: function(e) {
                        t.pattern = "gif"
                    }
                }
            }, [i("i", {
                staticClass: "iconfont icon-gif"
            }), i("p", [t._v(t._s(t.$t("album.jigsaw.jigsawGif")))])]) : t._e()]), t.info.title ? i("div", {
                staticClass: "component-jigsaw-style-titleName",
                style: ("block" === t.pattern || "gif" === t.pattern) && {
                    visibility: "hidden"
                }
            }, [t._v(t._s(t.$t("album.jigsaw.jigsawName")))]) : t._e(), t.info.title ? i("div", {
                staticClass: "component-jigsaw-style-input",
                style: ("block" === t.pattern || "gif" === t.pattern) && {
                    visibility: "hidden"
                }
            }, [i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.text,
                    expression: "text"
                }],
                attrs: {
                    id: "component-jigsaw-style-title",
                    type: "text",
                    maxlength: "30",
                    placeholder: t.$t("album.jigsaw.thereCanInputTitle", {
                        count: 30
                    })
                },
                domProps: {
                    value: t.text
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.text = e.target.value)
                    }
                }
            })]) : t._e(), i("div", {
                staticClass: "component-jigsaw-style-next",
                on: {
                    click: function(e) {
                        return t.$emit("next", t.pattern, t.text)
                    }
                }
            }, [t._v(t._s(t.$t("album.jigsaw.jigsawStart")))])])])
        }
        )
          , o = []
          , h = {
            name: "selectStyle",
            props: {
                info: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    text: this.info.title || "",
                    pattern: "1010062553" === this.$route.params.id ? "alibaba20th" : "vertical"
                }
            }
        }
          , l = h
          , p = (i("de43"),
        i("2877"))
          , c = Object(p["a"])(l, n, o, !1, null, null, null)
          , m = c.exports
          , f = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "tool-layout"
            }, [i("section", {
                staticClass: "component-jigsaw-gifType-model"
            }, [i("button", {
                staticClass: "tool-close component-jigsaw-style-close",
                on: {
                    click: function(e) {
                        return t.$emit("close")
                    }
                }
            }, [i("i", {
                staticClass: "iconfont icon-close"
            })]), i("div", {
                staticClass: "component-jigsaw-gifType-name"
            }, [t._v(t._s(t.$t("album.jigsaw.pleaseChooseTheType")))]), i("ul", {
                staticClass: "component-jigsaw-gifType-group"
            }, [i("li", {
                staticClass: "component-jigsaw-gifType-item",
                on: {
                    click: function(e) {
                        return t.$emit("input", 0)
                    }
                }
            }, [i("div", {
                staticClass: "component-jigsaw-gifType-item-icon transverse"
            }), i("p", [t._v(t._s(t.$t("album.jigsaw.horizontal")))])]), i("li", {
                staticClass: "component-jigsaw-gifType-item",
                on: {
                    click: function(e) {
                        return t.$emit("input", 1)
                    }
                }
            }, [i("div", {
                staticClass: "component-jigsaw-gifType-item-icon portrait"
            }), i("p", [t._v(t._s(t.$t("album.jigsaw.vertical")))])])])])])
        }
          , u = []
          , d = {
            name: "gifType"
        }
          , g = d
          , y = (i("5eab"),
        Object(p["a"])(g, f, u, !1, null, null, null))
          , v = y.exports
          , b = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "component-jigsaw-blockEdit"
            }, [i("button", {
                staticClass: "tool-close component-jigsaw-blockEdit-close",
                on: {
                    click: function(e) {
                        return t.$emit("close")
                    }
                }
            }, [i("i", {
                staticClass: "iconfont icon-close"
            })]), i("section", {
                staticClass: "component-jigsaw-blockEdit-block"
            }, [i("div", {
                staticClass: "component-jigsaw-blockEdit-block-background",
                style: {
                    backgroundImage: "url('" + t.info.nineGrids + "')"
                }
            }), i("div", {
                staticClass: "component-jigsaw-blockEdit-block-slice transverse",
                staticStyle: {
                    top: "calc(33.333333% - 2px)"
                }
            }), i("div", {
                staticClass: "component-jigsaw-blockEdit-block-slice transverse",
                staticStyle: {
                    top: "calc(66.666666% - 2px)"
                }
            }), i("div", {
                staticClass: "component-jigsaw-blockEdit-block-slice portrait",
                staticStyle: {
                    left: "calc(33.333333% - 2px)"
                }
            }), i("div", {
                staticClass: "component-jigsaw-blockEdit-block-slice portrait",
                staticStyle: {
                    left: "calc(66.666666% - 2px)"
                }
            }), t._l(t.blockList, (function(e, s) {
                return i("div", {
                    key: s,
                    staticClass: "component-jigsaw-blockEdit-block-item",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.splicPhoto(s)
                        }
                    }
                }, [e.has ? t._e() : i("div", {
                    staticClass: "component-jigsaw-blockEdit-block-item-nullPhoto",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.selectPhoto(s)
                        }
                    }
                }, [t._v("点击拼图")]), e.has ? i("div", {
                    staticClass: "component-jigsaw-blockEdit-block-item-hasPhoto",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.selectPhoto(s)
                        }
                    }
                }, [t._v("重拼")]) : t._e(), e.has ? i("div", {
                    staticClass: "component-jigsaw-blockEdit-block-item-logo"
                }, [i("i", {
                    staticClass: "iconfont icon-gou"
                })]) : t._e()])
            }
            ))], 2), t._m(0)])
        }
          , x = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("section", {
                staticClass: "component-jigsaw-blockEdit-init"
            }, [s("img", {
                staticClass: "component-jigsaw-blockEdit-init-image",
                attrs: {
                    src: i("655b"),
                    alt: "九宫格应用技巧"
                }
            })])
        }
        ]
          , E = (i("96cf"),
        i("3b8d"))
          , w = i("f53f")
          , C = {
            name: "blockEdit",
            props: {
                photoList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                info: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    blockList: [{
                        has: !1,
                        data: []
                    }, {
                        has: !1,
                        data: []
                    }, {
                        has: !1,
                        data: []
                    }, {
                        has: !1,
                        data: []
                    }, {
                        has: !1,
                        data: []
                    }, {
                        has: !1,
                        data: []
                    }, {
                        has: !1,
                        data: []
                    }, {
                        has: !1,
                        data: []
                    }, {
                        has: !1,
                        data: []
                    }],
                    blockIndex: 0
                }
            },
            mounted: function() {
                var t = Object(E["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                Object(w["a"])(this.info.nineGrids, !0);
                            case 2:
                                this.info.blockObj = t.sent;
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
                selectPhoto: function(t) {
                    this.blockIndex = t,
                    this.info.blockIndex = t,
                    this.$emit("selectPhoto")
                },
                splicPhoto: function(t) {
                    this.blockIndex = t,
                    this.info.blockIndex = t,
                    this.$emit("splic", this.blockList[t].data)
                },
                updata: function(t) {
                    t.length < 1 || (this.blockList[this.blockIndex].has = !0,
                    this.blockList[this.blockIndex].data = t)
                }
            }
        }
          , _ = C
          , k = (i("89a8"),
        Object(p["a"])(_, b, x, !1, null, null, null))
          , A = k.exports
          , S = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("section", {
                staticClass: "component-jigsaw-select"
            }, [i("div", {
                staticClass: "component-jigsaw-select-hint"
            }, [t._v(t._s(t.$t("album.jigsaw.jigsawAlsoChoose", {
                count1: t.photoList.length,
                count2: t.maxCount - t.photoList.length
            })))]), i("button", {
                staticClass: "component-jigsaw-select-next",
                on: {
                    click: t.next
                }
            }, [t._v(t._s(t.$t("album.jigsaw.jigsawNext")))]), i("button", {
                staticClass: "component-jigsaw-select-cancel",
                on: {
                    click: function(e) {
                        return t.$emit("close")
                    }
                }
            }, [t._v(t._s(t.$t("album.jigsaw.cancel")))])])
        }
          , P = []
          , T = {
            name: "selectPhoto",
            props: ["photoList", "maxCount"],
            methods: {
                next: function() {
                    this.photoList.length ? this.$emit("next") : window.$notify(this.$t("album.jigsaw.jigsawPleaseSelectPhotos"))
                }
            },
            watch: {
                photoList: function() {
                    this.photoList.length > this.maxCount && (window.$notify(this.$t("album.jigsaw.canNotSurpass", {
                        count: this.maxCount
                    })),
                    this.photoList.pop())
                }
            }
        }
          , I = T
          , D = (i("842c"),
        Object(p["a"])(I, S, P, !1, null, null, null))
          , M = D.exports
          , F = i("5ee1")
          , B = {
            name: "jigsaw",
            props: {
                photoList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                info: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                maxCount: {
                    type: Number,
                    default: 10
                }
            },
            data: function() {
                return {
                    speed: "style",
                    pattern: "vertical",
                    jigsawInfo: this.info,
                    jigsawPhoto: []
                }
            },
            methods: {
                selectedStyle: function(t, e) {
                    switch (this.jigsawInfo.title = e,
                    this.pattern = t,
                    t) {
                    case "block":
                        this.speed = "block";
                        break;
                    case "gif":
                        this.speed = "gifType";
                        break;
                    default:
                        this.speed = "select";
                        break
                    }
                    this.$emit("selectedStyle", t, e)
                },
                jigsawClose: function() {
                    "block" === this.pattern ? this.speed = "block" : this.close()
                },
                close: function() {
                    this.speed = "style",
                    this.clear(),
                    this.$emit("close")
                },
                clear: function() {
                    this.photoList.splice(0, this.photoList.length),
                    this.jigsawPhoto.length = 0,
                    this.$emit("clear")
                },
                choose: function() {
                    "grid" === this.pattern ? this.photoList.length % 2 === 1 ? this.$notify(this.$t("album.jigsaw.gonggeNotSingular")) : this.speed = "splic" : "block" === this.pattern ? this.photoList.length < 2 ? this.$notify(this.$t("album.jigsaw.selectMoreThan", {
                        count: 2
                    })) : (this.$refs.blockEdit.updata(Object(a["a"])(this.photoList)),
                    this.speed = "splic") : this.speed = "splic"
                },
                splic: function(t) {
                    this.jigsawPhoto = t,
                    this.speed = "splic"
                },
                selectedGifType: function(t) {
                    this.jigsawInfo.gifMod = t,
                    this.speed = "select"
                }
            },
            computed: {
                maxSelectCount: function() {
                    var t = this.maxCount;
                    switch (this.pattern) {
                    case "alibaba20th":
                        t = 6;
                        break;
                    default:
                        t = this.maxCount
                    }
                    return t
                }
            },
            watch: {
                speed: function(t) {
                    "select" === t && this.$emit("beforSelectPhoto")
                }
            },
            components: {
                selectStyle: m,
                gifType: v,
                blockEdit: A,
                selectPhoto: M,
                jigsawMap: F["a"]
            }
        }
          , L = B
          , R = Object(p["a"])(L, s, r, !1, null, null, null);
        e["a"] = R.exports
    },
    "08ca": function(t, e, i) {
        "use strict";
        var s = i("ad95")
          , r = i.n(s);
        r.a
    },
    "0b61": function(t, e, i) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "album-component-operation",
                on: {
                    click: function(e) {
                        return t.$emit("cancel")
                    }
                }
            }, [i("div", {
                staticClass: "album-component-operation-container"
            }, t._l(t.operateList, (function(e, s) {
                return i("div", {
                    key: s,
                    staticClass: "album-component-operation-container-group"
                }, t._l(e, (function(e) {
                    return i("div", {
                        key: e.title,
                        staticClass: "album-component-operation-container-group-item",
                        style: t.getStyle(e.color),
                        on: {
                            click: function(i) {
                                return i.stopPropagation(),
                                t.clickHandle(e)
                            }
                        }
                    }, [t._v(t._s(t.$t(e.title)))])
                }
                )), 0)
            }
            )), 0)])
        }
          , r = []
          , a = {
            props: {
                operateList: {
                    type: Array,
                    default: function() {
                        return [[{
                            title: "album.comment.reply",
                            emit: "reply"
                        }, {
                            title: "album.comment.report",
                            emit: "inform",
                            color: "#FF2929"
                        }], [{
                            title: "album.comment.cancel",
                            emit: "cancel"
                        }]]
                    }
                }
            },
            methods: {
                getStyle: function(t) {
                    return {
                        color: t
                    }
                },
                clickHandle: function(t) {
                    this.$emit(t.emit)
                }
            }
        }
          , n = a
          , o = (i("08ca"),
        i("2877"))
          , h = Object(o["a"])(n, s, r, !1, null, null, null);
        e["a"] = h.exports
    },
    "0c4f": function(t, e, i) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("transition", {
                attrs: {
                    name: "fade"
                },
                on: {
                    "after-leave": t.afterLeave
                }
            }, [i("section", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.open,
                    expression: "open"
                }],
                staticClass: "album-component-bigImage"
            }, [i("div", {
                staticClass: "album-component-bigImage-background",
                style: {
                    opacity: t.opacity
                }
            }), i("div", {
                staticClass: "album-component-bigImage-content",
                class: !t.isTouch && "transition",
                style: {
                    transform: "translate(" + (t.value * -(t.screen.w + t.edge) - t.touch.distance.x) + "px, 0)"
                }
            }, [i("div", {
                staticClass: "album-component-bigImage-content-limit",
                style: {
                    transform: "translate(-46px, -50%)"
                }
            }, [t._v(t._s(t.$t("album.bigImage.atFirst")))]), t._l(t.photoItems, (function(e) {
                return i("bigImageItem", {
                    key: e.id,
                    ref: e.index === t.value && "photoItem",
                    refInFor: !0,
                    staticClass: "album-component-bigImage-item",
                    style: {
                        transform: "translate(" + e.index * (t.screen.w + t.edge) + "px, " + (e.index === t.value ? -t.touch.distance.y : 0) + "px) scale(" + (e.index === t.value ? Math.max(t.opacity, .5) : 1) + ")"
                    },
                    attrs: {
                        data: e
                    },
                    on: {
                        init: t.photoInit,
                        touchstart: t.touchstart,
                        touchmove: t.touchmove,
                        touchend: t.touchend,
                        click: function(e) {
                            t.isShowLayout = !t.isShowLayout
                        },
                        longtap: t.longtap
                    }
                })
            }
            )), i("div", {
                staticClass: "album-component-bigImage-content-limit",
                style: {
                    transform: "translate(" + (t.data.length * (t.screen.w + t.edge) - 10) + "px, -50%)"
                }
            }, [t._v(t._s(t.$t("album.bigImage.atEnd")))])], 2), i("transition", {
                attrs: {
                    name: "fade"
                }
            }, [i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isShowLayout,
                    expression: "isShowLayout"
                }],
                staticClass: "album-component-bigImage-layer"
            }, [i("div", {
                staticClass: "album-component-bigImage-layer-header"
            }, [i("div", {
                staticClass: "album-component-bigImage-layer-header-shadown"
            }), i("button", {
                staticClass: "tool-close album-component-bigImage-close",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.close(e)
                    }
                }
            }, [i("i", {
                staticClass: "iconfont icon-close"
            })]), t._t("header", null, {
                open: t.open,
                index: t.value,
                photo: t.data[t.value],
                touch: {
                    distance: t.touch.distance,
                    isTouch: t.isTouch
                }
            })], 2), i("div", {
                staticClass: "album-component-bigImage-layer-footer"
            }, [t._t("default", null, {
                open: t.open,
                index: t.value,
                photo: t.data[t.value],
                touch: {
                    distance: t.touch.distance,
                    isTouch: t.isTouch
                }
            })], 2)])])], 1)])
        }
          , r = []
          , a = (i("c5f6"),
        function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("figure", {
                staticClass: "bigImageItem",
                on: {
                    touchstart: function(e) {
                        return e.stopPropagation(),
                        t.touchstart(e)
                    },
                    touchmove: function(e) {
                        return e.stopPropagation(),
                        t.touchmove(e)
                    },
                    touchend: function(e) {
                        return e.stopPropagation(),
                        t.touchend(e)
                    }
                }
            }, [i("div", {
                staticClass: "bigImageItem-content",
                class: t.target.finger < 1 && "transition",
                style: {
                    width: t.size.w + "px",
                    height: t.size.h + "px",
                    transform: "translate(" + t.afterTransform.x + "px, " + t.afterTransform.y + "px) scale(" + t.afterTransform.scale + ")"
                }
            }, [i("imageBox", {
                staticClass: "bigImageItem-image download",
                attrs: {
                    url: t.data[t.data.currentSrc],
                    type: "img",
                    placeholder: t.data.msrc,
                    transition: ""
                }
            })], 1)])
        }
        )
          , n = []
          , o = i("cca9")
          , h = {
            name: "bigImageItem",
            props: {
                data: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                minScale: {
                    type: Number,
                    default: 1
                },
                maxScale: {
                    type: Number,
                    default: 3
                }
            },
            data: function() {
                return {
                    screen: {
                        w: 0,
                        h: 0
                    },
                    size: {
                        w: 0,
                        h: 0
                    },
                    beforeTransform: {},
                    afterTransform: {},
                    target: {
                        finger: 0,
                        isMove: !1,
                        direction: "",
                        startTime: 0,
                        touchTimeout: null,
                        doubleTimeout: null,
                        doubleCount: 0,
                        touch: [{
                            x: 0,
                            y: 0
                        }, {
                            x: 0,
                            y: 0
                        }]
                    },
                    nextScale: 1
                }
            },
            beforeMount: function() {
                this.init()
            },
            beforeDestroy: function() {
                this.$removeScreenListener(this.relayout)
            },
            methods: {
                init: function() {
                    this.afterTransform = {
                        x: 0,
                        y: 0,
                        scale: 1,
                        rangeX: [0, 0],
                        rangeY: [0, 0],
                        afterScaling: {
                            w: 0,
                            h: 0,
                            x: 0,
                            y: 0
                        }
                    },
                    this.beforeTransform = Object.assign({}, this.afterTransform),
                    this.data.transform = this.afterTransform,
                    this.$addScreenListener(this.relayout),
                    this.$emit("init", this.data)
                },
                relayout: function() {
                    this.screen.w = window.innerWidth,
                    this.screen.h = window.innerHeight,
                    this.adaptiveSize(),
                    this.targetPosition(),
                    this.beforeTransform = Object.assign({}, this.afterTransform)
                },
                adaptiveSize: function() {
                    this.data.width / this.data.height > this.screen.w / this.screen.h ? (this.size.w = this.screen.w,
                    this.size.h = parseInt(this.screen.w / this.data.width * this.data.height)) : (this.size.h = this.screen.h,
                    this.size.w = parseInt(this.data.width / this.data.height * this.screen.h))
                },
                toTransform: function(t, e, i) {
                    var s = {
                        x: this.afterTransform.x - this.size.w * (i - 1) / 2,
                        y: this.afterTransform.y - this.size.h * (i - 1) / 2
                    }
                      , r = {
                        x: t.x - s.x,
                        y: t.y - s.y
                    }
                      , a = {
                        x: this.afterTransform.x - this.size.w * (e - 1) / 2,
                        y: this.afterTransform.y - this.size.h * (e - 1) / 2
                    }
                      , n = {
                        x: a.x + r.x / this.nextScale * e,
                        y: a.y + r.y / this.nextScale * e
                    };
                    return {
                        x: t.x - n.x + this.afterTransform.x,
                        y: t.y - n.y + this.afterTransform.y
                    }
                },
                toOriginal: function(t, e) {
                    return {
                        x: this.size.w * e - this.size.w / 2 - t.x,
                        y: this.size.h * e - this.size.h / 2 - t.y
                    }
                },
                originalToTransform: function(t, e) {
                    var i = {
                        x: t.x + this.size.w / 2,
                        y: t.y + this.size.h / 2
                    };
                    return {
                        x: i.x - this.size.w * e / 2,
                        y: i.y - this.size.h * e / 2
                    }
                },
                targetPosition: function() {
                    this.afterTransform.scale = Math.range(this.minScale, this.afterTransform.scale, this.maxScale),
                    this.nextScale = this.afterTransform.scale;
                    var t = 0
                      , e = 0;
                    this.size.w * this.afterTransform.scale > this.screen.w && (t = this.screen.w - this.size.w * this.afterTransform.scale),
                    this.size.h * this.afterTransform.scale > this.screen.h && (e = this.screen.h - this.size.h * this.afterTransform.scale);
                    var i = {
                        x: (this.screen.w - this.size.w) / 2,
                        y: (this.screen.h - this.size.h) / 2
                    };
                    this.afterTransform.rangeX = t >= 0 ? [t / 2 + i.x, t / 2 + i.x] : [t / 2 + i.x, -t / 2 + i.x],
                    this.afterTransform.rangeY = e >= 0 ? [e / 2 + i.y, e / 2 + i.y] : [e / 2 + i.y, -e / 2 + i.y],
                    this.afterTransform.x = Math.range(this.afterTransform.rangeX[0], this.afterTransform.x, this.afterTransform.rangeX[1]),
                    this.afterTransform.y = Math.range(this.afterTransform.rangeY[0], this.afterTransform.y, this.afterTransform.rangeY[1]),
                    this.afterScaling()
                },
                afterScaling: function() {
                    var t = this.originalToTransform(this.afterTransform, this.afterTransform.scale)
                      , e = t.x
                      , i = t.y;
                    this.afterTransform.afterScaling.x = e,
                    this.afterTransform.afterScaling.y = i,
                    this.afterTransform.afterScaling.w = this.size.w * this.afterTransform.scale,
                    this.afterTransform.afterScaling.h = this.size.h * this.afterTransform.scale
                },
                touchstart: function(t) {
                    this.target.finger = t.touches.length,
                    this.target.startTime = (new Date).getTime(),
                    this.target.touch[0].x = t.touches[0].clientX,
                    this.target.touch[0].y = t.touches[0].clientY,
                    this.longTap(),
                    1 === this.target.finger && this.$emit("touchstart", t),
                    2 === this.target.finger && (this.longTap(!1),
                    this.dblclick(!1),
                    this.target.touch[1].x = t.touches[1].clientX,
                    this.target.touch[1].y = t.touches[1].clientY)
                },
                touchmove: function(t) {
                    if (t.preventDefault(),
                    this.longTap(!1),
                    this.dblclick(!1),
                    1 === this.target.finger) {
                        var e = 5
                          , i = t.touches[0].clientX - this.target.touch[0].x
                          , s = t.touches[0].clientY - this.target.touch[0].y;
                        (Math.abs(i) > e || Math.abs(s) > e) && (this.target.isMove = !0),
                        this.target.direction || (this.target.direction = Math.abs(i) < Math.abs(s) ? "v" : "h"),
                        i > e && (this.beforeTransform.x < this.beforeTransform.rangeX[1] ? this.afterTransform.x = this.beforeTransform.x + i - e : "h" === this.target.direction && this.$emit("touchmove", t)),
                        i < -e && (this.beforeTransform.x > this.beforeTransform.rangeX[0] ? this.afterTransform.x = this.beforeTransform.x + i + e : "h" === this.target.direction && this.$emit("touchmove", t)),
                        s < -e && (this.beforeTransform.scale > 1 || this.beforeTransform.y > this.screen.h - this.beforeTransform.h ? this.afterTransform.y = this.beforeTransform.y + s + e : "v" === this.target.direction && this.$emit("touchmove", t)),
                        s > e && (this.beforeTransform.scale > 1 || this.beforeTransform.y < 0 ? this.afterTransform.y = this.beforeTransform.y + s - e : "v" === this.target.direction && this.$emit("touchmove", t)),
                        this.afterScaling()
                    }
                    if (2 === this.target.finger) {
                        var r = Math.sqrt(Math.pow(t.touches[0].clientX - t.touches[1].clientX, 2) + Math.pow(t.touches[0].clientY - t.touches[1].clientY, 2)) / Math.sqrt(Math.pow(this.target.touch[0].x - this.target.touch[1].x, 2) + Math.pow(this.target.touch[0].y - this.target.touch[1].y, 2));
                        this.zoom({
                            x: (t.touches[0].clientX + t.touches[1].clientX) / 2,
                            y: (t.touches[0].clientY + t.touches[1].clientY) / 2
                        }, r)
                    }
                },
                touchend: function() {
                    var t = this;
                    this.longTap(!1),
                    1 === this.target.finger && (this.dblclick((function() {
                        t.zoom(t.target.touch[0], t.beforeTransform.scale > t.minScale ? 1 / t.beforeTransform.scale : t.maxScale),
                        t.targetPosition(),
                        t.beforeTransform = Object.assign({}, t.afterTransform)
                    }
                    )),
                    this.target.isMove && this.targetPosition()),
                    2 === this.target.finger && this.targetPosition(),
                    this.target.finger = 0,
                    this.target.isMove = !1,
                    this.beforeTransform = Object.assign({}, this.afterTransform),
                    this.target.direction = "",
                    this.$emit("touchend")
                },
                zoom: function(t, e) {
                    var i = this.maxScale / this.target.scale;
                    if (e > i && (e = .1 + i),
                    this.beforeTransform.scale * e < 5) {
                        this.afterTransform.scale = this.beforeTransform.scale * e;
                        var s = this.toTransform(t, this.afterTransform.scale, this.nextScale);
                        this.nextScale = this.beforeTransform.scale * e,
                        this.afterTransform.x = s.x,
                        this.afterTransform.y = s.y
                    }
                    this.afterScaling(),
                    this.$emit("zoom", this.afterTransform)
                },
                longTap: function() {
                    var t = this
                      , e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    e ? this.target.touchTimeout = setTimeout((function() {
                        t.$emit("longtap", t.data),
                        t.target.touchTimeout = null
                    }
                    ), 500) : (this.target.touchTimeout && clearTimeout(this.target.touchTimeout),
                    this.target.touchTimeout = null)
                },
                dblclick: function() {
                    var t = this
                      , e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    e ? (new Date).getTime() - this.target.startTime < 200 && (this.target.doubleCount++,
                    this.target.doubleCount > 1 && (this.target.doubleCount = 0,
                    this.$emit("dblclick", this.data),
                    "function" === typeof e && e()),
                    this.target.doubleTimeout && clearTimeout(this.target.doubleTimeout),
                    this.target.doubleTimeout = setTimeout((function() {
                        1 === t.target.doubleCount && t.$emit("click", t.data),
                        t.dblclick(!1)
                    }
                    ), 200)) : (this.target.startTime = 0,
                    this.target.doubleCount = 0,
                    this.target.doubleTimeout && clearTimeout(this.target.doubleTimeout),
                    this.target.doubleTimeout = null)
                },
                delayedInit: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300;
                    setTimeout((function() {
                        t.init()
                    }
                    ), e)
                }
            },
            components: {
                imageBox: o["a"]
            }
        }
          , l = h
          , p = (i("f670"),
        i("2877"))
          , c = Object(p["a"])(l, a, n, !1, null, null, null)
          , m = c.exports
          , f = {
            name: "bigImage",
            props: {
                open: {
                    type: Boolean,
                    default: !1
                },
                data: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                edge: {
                    type: Number,
                    default: 20
                },
                value: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    isShowLayout: !0,
                    isTouch: !1,
                    damping: 4,
                    opacity: 1,
                    isClose: !1,
                    screen: {
                        w: window.innerWidth,
                        h: window.innerHeight
                    },
                    touch: {
                        start: {
                            x: 0,
                            y: 0,
                            time: 0
                        },
                        distance: {
                            x: 0,
                            y: 0
                        },
                        direction: ""
                    }
                }
            },
            mounted: function() {
                var t = this;
                document.onkeydown = function(e) {
                    t.open && (39 === e.keyCode && (e.preventDefault(),
                    t.next()),
                    37 === e.keyCode && (e.preventDefault(),
                    t.prev()),
                    27 === e.keyCode && (e.preventDefault(),
                    t.close()))
                }
                ,
                this.$addScreenListener((function() {
                    t.screen.w = window.innerWidth,
                    t.screen.h = window.innerHeight
                }
                ))
            },
            methods: {
                photoInit: function(t) {
                    this.$emit("photoInit", t)
                },
                touchstart: function(t) {
                    this.isTouch = !0,
                    this.touch.start.x = t.touches[0].pageX,
                    this.touch.start.y = t.touches[0].pageY,
                    this.touch.start.time = (new Date).getTime()
                },
                touchmove: function(t) {
                    0 === this.value && this.touch.start.x < t.touches[0].pageX || this.value === this.data.length - 1 && this.touch.start.x > t.touches[0].pageX ? this.touch.distance.x = (this.touch.start.x - t.touches[0].pageX) / this.damping : this.touch.distance.x = this.touch.start.x - t.touches[0].pageX,
                    this.touch.distance.y = this.touch.start.y - t.touches[0].pageY,
                    !this.touch.direction && Math.abs(this.touch.distance.x) + Math.abs(this.touch.distance.y) > 20 && (Math.abs(this.touch.distance.x) > Math.abs(this.touch.distance.y) && (this.touch.direction = "v"),
                    Math.abs(this.touch.distance.x) < Math.abs(this.touch.distance.y) && (this.touch.direction = "h")),
                    this.opacity = 1,
                    "v" === this.touch.direction && (this.touch.distance.y = 0,
                    this.opacity = 1),
                    "h" === this.touch.direction && (this.touch.distance.x = 0,
                    this.opacity = 1 - Math.abs(this.touch.distance.y) / (2 * this.screen.h / 3),
                    this.isClose = this.touch.distance.x < 50 && Math.abs(this.touch.distance.y) > 100)
                },
                touchend: function() {
                    this.touch.direction = "",
                    this.isTouch = !1;
                    var t = !1
                      , e = (new Date).getTime();
                    e - this.touch.start.time < 200 && (t = !0),
                    (this.touch.distance.x < -this.screen.w / 3 || this.touch.distance.x < -10 && t) && this.prev(),
                    (this.touch.distance.x > this.screen.w / 3 || this.touch.distance.x > 10 && t) && this.next(),
                    this.isClose ? this.close() : (this.touch.distance.x = 0,
                    this.touch.distance.y = 0,
                    this.opacity = 1,
                    this.isClose = !1)
                },
                afterLeave: function() {
                    this.touch.distance.x = 0,
                    this.touch.distance.y = 0,
                    this.opacity = 1,
                    this.isClose = !1
                },
                prev: function() {
                    this.value <= 0 || (this.$refs.photoItem[0].delayedInit(),
                    this.$emit("input", this.value - 1))
                },
                next: function() {
                    this.value >= this.data.length - 1 || (this.$refs.photoItem[0].delayedInit(),
                    this.$emit("input", this.value + 1),
                    this.value + 5 > this.data.length && this.$emit("loadmore"))
                },
                close: function() {
                    this.$emit("close")
                },
                longtap: function(t) {
                    this.$emit("longtap", t)
                }
            },
            computed: {
                photoItems: function() {
                    var t = this;
                    return this.data.length ? this.data.filter((function(e) {
                        return e.index > t.value - 2 && e.index < t.value + 2
                    }
                    )) : []
                }
            },
            components: {
                bigImageItem: m
            }
        }
          , u = f
          , d = (i("954d"),
        Object(p["a"])(u, s, r, !1, null, null, null));
        e["a"] = d.exports
    },
    1908: function(t, e, i) {
        var s = {
            "./text-1.png": "002d",
            "./text-2.png": "491a",
            "./text-3.png": "5d41",
            "./text-4.png": "9c1d",
            "./text-5.png": "81cd",
            "./text-6.png": "f9215"
        };
        function r(t) {
            var e = a(t);
            return i(e)
        }
        function a(t) {
            if (!i.o(s, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            return s[t]
        }
        r.keys = function() {
            return Object.keys(s)
        }
        ,
        r.resolve = a,
        t.exports = r,
        r.id = "1908"
    },
    "1e62": function(t, e, i) {
        "use strict";
        var s = i("9f7e")
          , r = i.n(s);
        r.a
    },
    "20fd": function(t, e, i) {
        "use strict";
        var s = i("d9f6")
          , r = i("aebd");
        t.exports = function(t, e, i) {
            e in t ? s.f(t, e, r(0, i)) : t[e] = i
        }
    },
    "262b": function(t, e, i) {
        "use strict";
        var s = i("d306")
          , r = i.n(s);
        r.a
    },
    2692: function(t, e, i) {},
    "27ab": function(t, e, i) {
        t.exports = i.p + "img/top.572c7e58.jpg"
    },
    "317a": function(t, e, i) {
        "use strict";
        var s = i("e6e3")
          , r = i.n(s);
        r.a
    },
    3275: function(t, e, i) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("section", {
                staticClass: "album-component-commentItem"
            }, [i("div", {
                staticClass: "album-component-commentItem-left"
            }, [i("imageBox", {
                staticClass: "album-component-commentItem-portrait",
                attrs: {
                    url: t.getImage(t.comment.portrait, {
                        w: 64,
                        h: 64,
                        m: "fill"
                    })
                }
            })], 1), i("div", {
                staticClass: "album-component-commentItem-center"
            }, [i("div", {
                staticClass: "album-component-commentItem-nick"
            }, [t._v(t._s(t.comment.nick))]), i("div", {
                staticClass: "album-component-commentItem-time"
            }, [t._v(t._s(t.getDate))]), i("div", {
                staticClass: "album-component-commentItem-text"
            }, [t._v("\n      " + t._s(t.comment.comment) + "\n      "), t.comment.reply ? i("div", {
                staticClass: "album-component-commentItem-reply"
            }, [i("span", {
                staticClass: "album-component-commentItem-reply-nick"
            }, [t._v(t._s(t.comment.reply.nick) + ":")]), t._v("\n        " + t._s(t.comment.reply.comment) + "\n      ")]) : t._e()])]), i("div", {
                staticClass: "album-component-commentItem-like",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.praise(e)
                    }
                }
            }, [i("i", {
                staticClass: "iconfont album-component-commentItem-like-icon",
                class: t.comment.isLike ? "icon-xihuan1" : "icon-xihuan",
                attrs: {
                    active: t.comment.isLike
                }
            }), i("span", [t._v(t._s(t.comment.isLike ? Math.max(t.comment.isLike, 1) : t.comment.likeTotal))])])])
        }
          , r = []
          , a = (i("8e6e"),
        i("ac6a"),
        i("456d"),
        i("96cf"),
        i("3b8d"))
          , n = i("bd86")
          , o = i("2f62")
          , h = i("cca9")
          , l = i("d18c")
          , p = i("6e02");
        function c(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                i.push.apply(i, s)
            }
            return i
        }
        function m(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(i, !0).forEach((function(e) {
                    Object(n["a"])(t, e, i[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : c(i).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }
                ))
            }
            return t
        }
        var f = {
            name: "commentItem",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                comment: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    toNowDate: l["b"],
                    getImage: p["a"],
                    request: !1
                }
            },
            methods: m({}, Object(o["c"])(["SAVE_COMMENT_LIKED"]), {
                praise: function() {
                    var t = Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var e;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.$userInfo().token) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", this.$login(this.album.isCustom));
                                case 2:
                                    if (!this.request) {
                                        t.next = 5;
                                        break
                                    }
                                    return this.$notify(this.$t("album.notify.tooBusy")),
                                    t.abrupt("return");
                                case 5:
                                    return this.request = !0,
                                    t.next = 8,
                                    this.$API.upLikes(this.album.id, this.comment.isLike ? 0 : 1, this.comment.id, this.album.custom);
                                case 8:
                                    e = t.sent,
                                    this.request = !1,
                                    0 === e.e && (this.comment.isLike ? this.comment.likeTotal = Math.max(this.comment.likeTotal - 1, 0) : this.comment.likeTotal++,
                                    this.SAVE_COMMENT_LIKED({
                                        actId: this.album.id,
                                        commentId: this.comment.id
                                    }),
                                    this.comment.isLike = !this.comment.isLike);
                                case 11:
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
            computed: {
                getDate: function() {
                    var t = Object(l["b"])(this.comment.date);
                    return this.$t("module.date.toNowDate.".concat(t[1]), {
                        date: t[0]
                    })
                }
            },
            components: {
                imageBox: h["a"]
            },
            mounted: function() {}
        }
          , u = f
          , d = (i("acdc"),
        i("2877"))
          , g = Object(d["a"])(u, s, r, !1, null, null, null);
        e["a"] = g.exports
    },
    "3a06": function(t, e, i) {},
    "3a6c": function(t, e, i) {
        "use strict";
        var s = i("7f0b")
          , r = i.n(s);
        r.a
    },
    "47be": function(t, e, i) {},
    "48c0": function(t, e, i) {
        "use strict";
        i("386b")("bold", (function(t) {
            return function() {
                return t(this, "b", "", "")
            }
        }
        ))
    },
    "491a": function(t, e, i) {
        t.exports = i.p + "img/text-2.092eb0f6.png"
    },
    "4a37": function(t, e, i) {
        !function(e, i) {
            t.exports = i()
        }(0, (function() {
            return function(t) {
                function e(s) {
                    if (i[s])
                        return i[s].exports;
                    var r = i[s] = {
                        exports: {},
                        id: s,
                        loaded: !1
                    };
                    return t[s].call(r.exports, r, r.exports, e),
                    r.loaded = !0,
                    r.exports
                }
                var i = {};
                return e.m = t,
                e.c = i,
                e.p = "",
                e(0)
            }([function(t, e, i) {
                "use strict";
                t.exports = i(3)
            }
            , function(t, e) {
                "use strict";
                !function() {
                    Object.assign || Object.defineProperty(Object, "assign", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function(t) {
                            if (void 0 === t || null === t)
                                throw new TypeError("Cannot convert first argument to object");
                            for (var e = Object(t), i = 1; i < arguments.length; i++) {
                                var s = arguments[i];
                                if (void 0 !== s && null !== s) {
                                    s = Object(s);
                                    for (var r = Object.keys(Object(s)), a = 0, n = r.length; a < n; a++) {
                                        var o = r[a]
                                          , h = Object.getOwnPropertyDescriptor(s, o);
                                        void 0 !== h && h.enumerable && (e[o] = s[o])
                                    }
                                }
                            }
                            return e
                        }
                    })
                }()
            }
            , function(t, e) {
                "use strict";
                t.exports = function() {
                    var t = {
                        utf16to8: function(t) {
                            var e, i, s, r;
                            for (e = "",
                            s = t.length,
                            i = 0; i < s; i++)
                                r = t.charCodeAt(i),
                                r >= 1 && r <= 127 ? e += t.charAt(i) : r > 2047 ? (e += String.fromCharCode(224 | r >> 12 & 15),
                                e += String.fromCharCode(128 | r >> 6 & 63),
                                e += String.fromCharCode(128 | r >> 0 & 63)) : (e += String.fromCharCode(192 | r >> 6 & 31),
                                e += String.fromCharCode(128 | r >> 0 & 63));
                            return e
                        },
                        utf8to16: function(t) {
                            var e, i, s, r, a, n;
                            for (e = "",
                            s = t.length,
                            i = 0; i < s; )
                                switch (r = t.charCodeAt(i++),
                                r >> 4) {
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                    e += t.charAt(i - 1);
                                    break;
                                case 12:
                                case 13:
                                    a = t.charCodeAt(i++),
                                    e += String.fromCharCode((31 & r) << 6 | 63 & a);
                                    break;
                                case 14:
                                    a = t.charCodeAt(i++),
                                    n = t.charCodeAt(i++),
                                    e += String.fromCharCode((15 & r) << 12 | (63 & a) << 6 | (63 & n) << 0)
                                }
                            return e
                        }
                    };
                    return t
                }()
            }
            , function(t, e, i) {
                "use strict";
                i(1),
                i(4);
                var s = i(2)
                  , r = function() {
                    function t(t) {
                        var e = new QRCode(t.typeNumber,t.correctLevel);
                        e.addData(t.text),
                        e.make();
                        var i = document.createElement("canvas");
                        i.width = t.width,
                        i.height = t.height;
                        var s = i.getContext("2d")
                          , r = (t.width - 2 * t.padding) / e.getModuleCount()
                          , a = (t.height - 2 * t.padding) / e.getModuleCount();
                        if (t.reverse) {
                            var n = "rgba(0, 0, 0, 0)";
                            s.fillStyle = n,
                            t.foreground = n
                        } else
                            s.fillStyle = t.background;
                        s.fillRect(0, 0, i.width, i.height);
                        for (var o = 0; o < e.getModuleCount(); o++)
                            for (var h = 0; h < e.getModuleCount(); h++) {
                                s.fillStyle = e.isDark(o, h) ? t.foreground : t.background;
                                var l = Math.ceil((h + 1) * r) - Math.floor(h * r)
                                  , p = Math.ceil((o + 1) * r) - Math.floor(o * r);
                                s.fillRect(Math.round(h * r) + t.padding, Math.round(o * a) + t.padding, l, p)
                            }
                        return i
                    }
                    var e = {
                        getQrBase64: function(e, i) {
                            "string" != typeof e && (e = ""),
                            "string" == typeof i ? i = {
                                text: i
                            } : "object" != typeof i && (i = {}),
                            i = Object.assign({
                                padding: 10,
                                width: 256,
                                height: 256,
                                typeNumber: -1,
                                correctLevel: QRErrorCorrectLevel.H,
                                reverse: !1,
                                background: "#ffffff",
                                foreground: "#000000"
                            }, i);
                            try {
                                i.text = s.utf16to8(e)
                            } catch (t) {
                                i.text = "" + t
                            }
                            var r = t(i);
                            return r.toDataURL()
                        }
                    };
                    return e.QRErrorCorrectLevel = QRErrorCorrectLevel,
                    e
                }();
                !window.jrQrcode && (window.jrQrcode = r),
                t.exports = r
            }
            , function(t, e) {
                function i(t) {
                    this.mode = o.MODE_8BIT_BYTE,
                    this.data = t
                }
                function s(t, e) {
                    this.typeNumber = t,
                    this.errorCorrectLevel = e,
                    this.modules = null,
                    this.moduleCount = 0,
                    this.dataCache = null,
                    this.dataList = new Array
                }
                function r(t, e) {
                    if (void 0 == t.length)
                        throw new Error(t.length + "/" + e);
                    for (var i = 0; i < t.length && 0 == t[i]; )
                        i++;
                    this.num = new Array(t.length - i + e);
                    for (var s = 0; s < t.length - i; s++)
                        this.num[s] = t[s + i]
                }
                function a(t, e) {
                    this.totalCount = t,
                    this.dataCount = e
                }
                function n() {
                    this.buffer = new Array,
                    this.length = 0
                }
                i.prototype = {
                    getLength: function(t) {
                        return this.data.length
                    },
                    write: function(t) {
                        for (var e = 0; e < this.data.length; e++)
                            t.put(this.data.charCodeAt(e), 8)
                    }
                },
                s.prototype = {
                    addData: function(t) {
                        var e = new i(t);
                        this.dataList.push(e),
                        this.dataCache = null
                    },
                    isDark: function(t, e) {
                        if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
                            throw new Error(t + "," + e);
                        return this.modules[t][e]
                    },
                    getModuleCount: function() {
                        return this.moduleCount
                    },
                    make: function() {
                        if (this.typeNumber < 1) {
                            var t = 1;
                            for (t = 1; t < 40; t++) {
                                for (var e = a.getRSBlocks(t, this.errorCorrectLevel), i = new n, s = 0, r = 0; r < e.length; r++)
                                    s += e[r].dataCount;
                                for (r = 0; r < this.dataList.length; r++) {
                                    var o = this.dataList[r];
                                    i.put(o.mode, 4),
                                    i.put(o.getLength(), p.getLengthInBits(o.mode, t)),
                                    o.write(i)
                                }
                                if (i.getLengthInBits() <= 8 * s)
                                    break
                            }
                            this.typeNumber = t
                        }
                        this.makeImpl(!1, this.getBestMaskPattern())
                    },
                    makeImpl: function(t, e) {
                        this.moduleCount = 4 * this.typeNumber + 17,
                        this.modules = new Array(this.moduleCount);
                        for (var i = 0; i < this.moduleCount; i++) {
                            this.modules[i] = new Array(this.moduleCount);
                            for (var r = 0; r < this.moduleCount; r++)
                                this.modules[i][r] = null
                        }
                        this.setupPositionProbePattern(0, 0),
                        this.setupPositionProbePattern(this.moduleCount - 7, 0),
                        this.setupPositionProbePattern(0, this.moduleCount - 7),
                        this.setupPositionAdjustPattern(),
                        this.setupTimingPattern(),
                        this.setupTypeInfo(t, e),
                        this.typeNumber >= 7 && this.setupTypeNumber(t),
                        null == this.dataCache && (this.dataCache = s.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                        this.mapData(this.dataCache, e)
                    },
                    setupPositionProbePattern: function(t, e) {
                        for (var i = -1; i <= 7; i++)
                            if (!(t + i <= -1 || this.moduleCount <= t + i))
                                for (var s = -1; s <= 7; s++)
                                    e + s <= -1 || this.moduleCount <= e + s || (this.modules[t + i][e + s] = 0 <= i && i <= 6 && (0 == s || 6 == s) || 0 <= s && s <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= s && s <= 4)
                    },
                    getBestMaskPattern: function() {
                        for (var t = 0, e = 0, i = 0; i < 8; i++) {
                            this.makeImpl(!0, i);
                            var s = p.getLostPoint(this);
                            (0 == i || t > s) && (t = s,
                            e = i)
                        }
                        return e
                    },
                    createMovieClip: function(t, e, i) {
                        var s = t.createEmptyMovieClip(e, i)
                          , r = 1;
                        this.make();
                        for (var a = 0; a < this.modules.length; a++)
                            for (var n = a * r, o = 0; o < this.modules[a].length; o++) {
                                var h = o * r
                                  , l = this.modules[a][o];
                                l && (s.beginFill(0, 100),
                                s.moveTo(h, n),
                                s.lineTo(h + r, n),
                                s.lineTo(h + r, n + r),
                                s.lineTo(h, n + r),
                                s.endFill())
                            }
                        return s
                    },
                    setupTimingPattern: function() {
                        for (var t = 8; t < this.moduleCount - 8; t++)
                            null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
                        for (var e = 8; e < this.moduleCount - 8; e++)
                            null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
                    },
                    setupPositionAdjustPattern: function() {
                        for (var t = p.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                            for (var i = 0; i < t.length; i++) {
                                var s = t[e]
                                  , r = t[i];
                                if (null == this.modules[s][r])
                                    for (var a = -2; a <= 2; a++)
                                        for (var n = -2; n <= 2; n++)
                                            this.modules[s + a][r + n] = -2 == a || 2 == a || -2 == n || 2 == n || 0 == a && 0 == n
                            }
                    },
                    setupTypeNumber: function(t) {
                        for (var e = p.getBCHTypeNumber(this.typeNumber), i = 0; i < 18; i++) {
                            var s = !t && 1 == (e >> i & 1);
                            this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = s
                        }
                        for (i = 0; i < 18; i++) {
                            s = !t && 1 == (e >> i & 1);
                            this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = s
                        }
                    },
                    setupTypeInfo: function(t, e) {
                        for (var i = this.errorCorrectLevel << 3 | e, s = p.getBCHTypeInfo(i), r = 0; r < 15; r++) {
                            var a = !t && 1 == (s >> r & 1);
                            r < 6 ? this.modules[r][8] = a : r < 8 ? this.modules[r + 1][8] = a : this.modules[this.moduleCount - 15 + r][8] = a
                        }
                        for (r = 0; r < 15; r++) {
                            a = !t && 1 == (s >> r & 1);
                            r < 8 ? this.modules[8][this.moduleCount - r - 1] = a : r < 9 ? this.modules[8][15 - r - 1 + 1] = a : this.modules[8][15 - r - 1] = a
                        }
                        this.modules[this.moduleCount - 8][8] = !t
                    },
                    mapData: function(t, e) {
                        for (var i = -1, s = this.moduleCount - 1, r = 7, a = 0, n = this.moduleCount - 1; n > 0; n -= 2)
                            for (6 == n && n--; ; ) {
                                for (var o = 0; o < 2; o++)
                                    if (null == this.modules[s][n - o]) {
                                        var h = !1;
                                        a < t.length && (h = 1 == (t[a] >>> r & 1));
                                        var l = p.getMask(e, s, n - o);
                                        l && (h = !h),
                                        this.modules[s][n - o] = h,
                                        r--,
                                        -1 == r && (a++,
                                        r = 7)
                                    }
                                if (s += i,
                                s < 0 || this.moduleCount <= s) {
                                    s -= i,
                                    i = -i;
                                    break
                                }
                            }
                    }
                },
                s.PAD0 = 236,
                s.PAD1 = 17,
                s.createData = function(t, e, i) {
                    for (var r = a.getRSBlocks(t, e), o = new n, h = 0; h < i.length; h++) {
                        var l = i[h];
                        o.put(l.mode, 4),
                        o.put(l.getLength(), p.getLengthInBits(l.mode, t)),
                        l.write(o)
                    }
                    var c = 0;
                    for (h = 0; h < r.length; h++)
                        c += r[h].dataCount;
                    if (o.getLengthInBits() > 8 * c)
                        throw new Error("code length overflow. (" + o.getLengthInBits() + ">" + 8 * c + ")");
                    for (o.getLengthInBits() + 4 <= 8 * c && o.put(0, 4); o.getLengthInBits() % 8 != 0; )
                        o.putBit(!1);
                    for (; ; ) {
                        if (o.getLengthInBits() >= 8 * c)
                            break;
                        if (o.put(s.PAD0, 8),
                        o.getLengthInBits() >= 8 * c)
                            break;
                        o.put(s.PAD1, 8)
                    }
                    return s.createBytes(o, r)
                }
                ,
                s.createBytes = function(t, e) {
                    for (var i = 0, s = 0, a = 0, n = new Array(e.length), o = new Array(e.length), h = 0; h < e.length; h++) {
                        var l = e[h].dataCount
                          , c = e[h].totalCount - l;
                        s = Math.max(s, l),
                        a = Math.max(a, c),
                        n[h] = new Array(l);
                        for (var m = 0; m < n[h].length; m++)
                            n[h][m] = 255 & t.buffer[m + i];
                        i += l;
                        var f = p.getErrorCorrectPolynomial(c)
                          , u = new r(n[h],f.getLength() - 1)
                          , d = u.mod(f);
                        o[h] = new Array(f.getLength() - 1);
                        for (m = 0; m < o[h].length; m++) {
                            var g = m + d.getLength() - o[h].length;
                            o[h][m] = g >= 0 ? d.get(g) : 0
                        }
                    }
                    var y = 0;
                    for (m = 0; m < e.length; m++)
                        y += e[m].totalCount;
                    var v = new Array(y)
                      , b = 0;
                    for (m = 0; m < s; m++)
                        for (h = 0; h < e.length; h++)
                            m < n[h].length && (v[b++] = n[h][m]);
                    for (m = 0; m < a; m++)
                        for (h = 0; h < e.length; h++)
                            m < o[h].length && (v[b++] = o[h][m]);
                    return v
                }
                ;
                for (var o = {
                    MODE_NUMBER: 1,
                    MODE_ALPHA_NUM: 2,
                    MODE_8BIT_BYTE: 4,
                    MODE_KANJI: 8
                }, h = {
                    L: 1,
                    M: 0,
                    Q: 3,
                    H: 2
                }, l = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                }, p = {
                    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(t) {
                        for (var e = t << 10; p.getBCHDigit(e) - p.getBCHDigit(p.G15) >= 0; )
                            e ^= p.G15 << p.getBCHDigit(e) - p.getBCHDigit(p.G15);
                        return (t << 10 | e) ^ p.G15_MASK
                    },
                    getBCHTypeNumber: function(t) {
                        for (var e = t << 12; p.getBCHDigit(e) - p.getBCHDigit(p.G18) >= 0; )
                            e ^= p.G18 << p.getBCHDigit(e) - p.getBCHDigit(p.G18);
                        return t << 12 | e
                    },
                    getBCHDigit: function(t) {
                        for (var e = 0; 0 != t; )
                            e++,
                            t >>>= 1;
                        return e
                    },
                    getPatternPosition: function(t) {
                        return p.PATTERN_POSITION_TABLE[t - 1]
                    },
                    getMask: function(t, e, i) {
                        switch (t) {
                        case l.PATTERN000:
                            return (e + i) % 2 == 0;
                        case l.PATTERN001:
                            return e % 2 == 0;
                        case l.PATTERN010:
                            return i % 3 == 0;
                        case l.PATTERN011:
                            return (e + i) % 3 == 0;
                        case l.PATTERN100:
                            return (Math.floor(e / 2) + Math.floor(i / 3)) % 2 == 0;
                        case l.PATTERN101:
                            return e * i % 2 + e * i % 3 == 0;
                        case l.PATTERN110:
                            return (e * i % 2 + e * i % 3) % 2 == 0;
                        case l.PATTERN111:
                            return (e * i % 3 + (e + i) % 2) % 2 == 0;
                        default:
                            throw new Error("bad maskPattern:" + t)
                        }
                    },
                    getErrorCorrectPolynomial: function(t) {
                        for (var e = new r([1],0), i = 0; i < t; i++)
                            e = e.multiply(new r([1, c.gexp(i)],0));
                        return e
                    },
                    getLengthInBits: function(t, e) {
                        if (1 <= e && e < 10)
                            switch (t) {
                            case o.MODE_NUMBER:
                                return 10;
                            case o.MODE_ALPHA_NUM:
                                return 9;
                            case o.MODE_8BIT_BYTE:
                                return 8;
                            case o.MODE_KANJI:
                                return 8;
                            default:
                                throw new Error("mode:" + t)
                            }
                        else if (e < 27)
                            switch (t) {
                            case o.MODE_NUMBER:
                                return 12;
                            case o.MODE_ALPHA_NUM:
                                return 11;
                            case o.MODE_8BIT_BYTE:
                                return 16;
                            case o.MODE_KANJI:
                                return 10;
                            default:
                                throw new Error("mode:" + t)
                            }
                        else {
                            if (!(e < 41))
                                throw new Error("type:" + e);
                            switch (t) {
                            case o.MODE_NUMBER:
                                return 14;
                            case o.MODE_ALPHA_NUM:
                                return 13;
                            case o.MODE_8BIT_BYTE:
                                return 16;
                            case o.MODE_KANJI:
                                return 12;
                            default:
                                throw new Error("mode:" + t)
                            }
                        }
                    },
                    getLostPoint: function(t) {
                        for (var e = t.getModuleCount(), i = 0, s = 0; s < e; s++)
                            for (var r = 0; r < e; r++) {
                                for (var a = 0, n = t.isDark(s, r), o = -1; o <= 1; o++)
                                    if (!(s + o < 0 || e <= s + o))
                                        for (var h = -1; h <= 1; h++)
                                            r + h < 0 || e <= r + h || 0 == o && 0 == h || n == t.isDark(s + o, r + h) && a++;
                                a > 5 && (i += 3 + a - 5)
                            }
                        for (s = 0; s < e - 1; s++)
                            for (r = 0; r < e - 1; r++) {
                                var l = 0;
                                t.isDark(s, r) && l++,
                                t.isDark(s + 1, r) && l++,
                                t.isDark(s, r + 1) && l++,
                                t.isDark(s + 1, r + 1) && l++,
                                0 != l && 4 != l || (i += 3)
                            }
                        for (s = 0; s < e; s++)
                            for (r = 0; r < e - 6; r++)
                                t.isDark(s, r) && !t.isDark(s, r + 1) && t.isDark(s, r + 2) && t.isDark(s, r + 3) && t.isDark(s, r + 4) && !t.isDark(s, r + 5) && t.isDark(s, r + 6) && (i += 40);
                        for (r = 0; r < e; r++)
                            for (s = 0; s < e - 6; s++)
                                t.isDark(s, r) && !t.isDark(s + 1, r) && t.isDark(s + 2, r) && t.isDark(s + 3, r) && t.isDark(s + 4, r) && !t.isDark(s + 5, r) && t.isDark(s + 6, r) && (i += 40);
                        var p = 0;
                        for (r = 0; r < e; r++)
                            for (s = 0; s < e; s++)
                                t.isDark(s, r) && p++;
                        var c = Math.abs(100 * p / e / e - 50) / 5;
                        return i + 10 * c
                    }
                }, c = {
                    glog: function(t) {
                        if (t < 1)
                            throw new Error("glog(" + t + ")");
                        return c.LOG_TABLE[t]
                    },
                    gexp: function(t) {
                        for (; t < 0; )
                            t += 255;
                        for (; t >= 256; )
                            t -= 255;
                        return c.EXP_TABLE[t]
                    },
                    EXP_TABLE: new Array(256),
                    LOG_TABLE: new Array(256)
                }, m = 0; m < 8; m++)
                    c.EXP_TABLE[m] = 1 << m;
                for (m = 8; m < 256; m++)
                    c.EXP_TABLE[m] = c.EXP_TABLE[m - 4] ^ c.EXP_TABLE[m - 5] ^ c.EXP_TABLE[m - 6] ^ c.EXP_TABLE[m - 8];
                for (m = 0; m < 255; m++)
                    c.LOG_TABLE[c.EXP_TABLE[m]] = m;
                r.prototype = {
                    get: function(t) {
                        return this.num[t]
                    },
                    getLength: function() {
                        return this.num.length
                    },
                    multiply: function(t) {
                        for (var e = new Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++)
                            for (var s = 0; s < t.getLength(); s++)
                                e[i + s] ^= c.gexp(c.glog(this.get(i)) + c.glog(t.get(s)));
                        return new r(e,0)
                    },
                    mod: function(t) {
                        if (this.getLength() - t.getLength() < 0)
                            return this;
                        for (var e = c.glog(this.get(0)) - c.glog(t.get(0)), i = new Array(this.getLength()), s = 0; s < this.getLength(); s++)
                            i[s] = this.get(s);
                        for (s = 0; s < t.getLength(); s++)
                            i[s] ^= c.gexp(c.glog(t.get(s)) + e);
                        return new r(i,0).mod(t)
                    }
                },
                a.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
                a.getRSBlocks = function(t, e) {
                    var i = a.getRsBlockTable(t, e);
                    if (void 0 == i)
                        throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
                    for (var s = i.length / 3, r = new Array, n = 0; n < s; n++)
                        for (var o = i[3 * n + 0], h = i[3 * n + 1], l = i[3 * n + 2], p = 0; p < o; p++)
                            r.push(new a(h,l));
                    return r
                }
                ,
                a.getRsBlockTable = function(t, e) {
                    switch (e) {
                    case h.L:
                        return a.RS_BLOCK_TABLE[4 * (t - 1) + 0];
                    case h.M:
                        return a.RS_BLOCK_TABLE[4 * (t - 1) + 1];
                    case h.Q:
                        return a.RS_BLOCK_TABLE[4 * (t - 1) + 2];
                    case h.H:
                        return a.RS_BLOCK_TABLE[4 * (t - 1) + 3];
                    default:
                        return
                    }
                }
                ,
                n.prototype = {
                    get: function(t) {
                        var e = Math.floor(t / 8);
                        return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
                    },
                    put: function(t, e) {
                        for (var i = 0; i < e; i++)
                            this.putBit(1 == (t >>> e - i - 1 & 1))
                    },
                    getLengthInBits: function() {
                        return this.length
                    },
                    putBit: function(t) {
                        var e = Math.floor(this.length / 8);
                        this.buffer.length <= e && this.buffer.push(0),
                        t && (this.buffer[e] |= 128 >>> this.length % 8),
                        this.length++
                    }
                },
                window.QRCode = s,
                window.QRErrorCorrectLevel = h;
                try {
                    t.exports = {
                        QRCode: s,
                        QRErrorCorrectLevel: h
                    }
                } catch (t) {}
            }
            ])
        }
        ))
    },
    5383: function(t, e, i) {
        "use strict";
        var s = i("bb9c")
          , r = i.n(s);
        r.a
    },
    "549b": function(t, e, i) {
        "use strict";
        var s = i("d864")
          , r = i("63b6")
          , a = i("241e")
          , n = i("b0dc")
          , o = i("3702")
          , h = i("b447")
          , l = i("20fd")
          , p = i("7cd6");
        r(r.S + r.F * !i("4ee1")((function(t) {
            Array.from(t)
        }
        )), "Array", {
            from: function(t) {
                var e, i, r, c, m = a(t), f = "function" == typeof this ? this : Array, u = arguments.length, d = u > 1 ? arguments[1] : void 0, g = void 0 !== d, y = 0, v = p(m);
                if (g && (d = s(d, u > 2 ? arguments[2] : void 0, 2)),
                void 0 == v || f == Array && o(v))
                    for (e = h(m.length),
                    i = new f(e); e > y; y++)
                        l(i, y, g ? d(m[y], y) : m[y]);
                else
                    for (c = v.call(m),
                    i = new f; !(r = c.next()).done; y++)
                        l(i, y, g ? n(c, d, [r.value, y], !0) : r.value);
                return i.length = y,
                i
            }
        })
    },
    5985: function(t, e, i) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "album-component-bigImageLayer clearfix"
            }, [t.loadingState ? s("img", {
                staticClass: "album-component-bigImageLayer-loadingImg",
                attrs: {
                    src: i("d176")
                }
            }) : t._e(), s("div", {
                staticClass: "album-component-bigImageLayer-longPress"
            }, [t._v(t._s(t.$t("album.bigImageLayer.longPressSave")))]), t.album.faceRecognize && t.slotProps.open ? s("face", {
                attrs: {
                    album: t.album,
                    nowClassify: t.nowClassify,
                    index: t.index,
                    slotProps: t.slotProps
                }
            }) : t._e(), t.slotProps.open ? s("div", {
                staticClass: "album-component-bigImageLayer-faceList"
            }) : t._e(), s("div", {
                staticClass: "album-component-bigImageLayer-left display-horizontal"
            }, [t.album.isShowLoginAboutComponent ? s("collectionBtn", {
                attrs: {
                    album: t.album,
                    photo: t.slotProps.photo
                },
                on: {
                    pay: function(e) {
                        t.isShowBuyAlbumPhoto = !0
                    }
                }
            }) : t._e(), t.album.comment && t.album.isShowLoginAboutComponent ? s("button", {
                staticClass: "album-component-bigImageLayer-button",
                on: {
                    click: function(e) {
                        t.isShowComment = !0
                    }
                }
            }, [t._m(0), s("p", {
                staticClass: "album-component-bigImageLayer-button-text"
            }, [t._v(t._s(t.$t("album.bigImageLayer.comment")))])]) : t._e(), s("button", {
                staticClass: "album-component-bigImageLayer-button",
                on: {
                    click: function(e) {
                        t.isShowJigsaw = !0,
                        t.$parent.$parent.sendStatistics(17, {
                            pc: t.slotProps.photo.id
                        })
                    }
                }
            }, [t._m(1), s("p", {
                staticClass: "album-component-bigImageLayer-button-text"
            }, [t._v(t._s(t.$t("album.bigImageLayer.share")))])]), t.album.praise && t.album.isShowLoginAboutComponent ? s("likeBtn", {
                attrs: {
                    album: t.album,
                    photo: t.slotProps.photo
                }
            }) : t._e()], 1), t.album.isShowLoginAboutComponent || !t.album.isCharge ? s("div", {
                staticClass: "album-component-bigImageLayer-right"
            }, [t.slotProps.photo && "osrc" != t.slotProps.photo.currentSrc ? s("button", {
                staticClass: "album-component-bigImageLayer-loading",
                attrs: {
                    disabled: t.loadingState
                },
                on: {
                    click: t.loadingLarge
                }
            }, [t._v(t._s(t.loadBigImgFont))]) : t._e()]) : t._e(), s("albumInteraction", {
                attrs: {
                    isShowComment: t.isShowComment,
                    album: t.album,
                    photo: t.slotProps.photo
                },
                scopedSlots: t._u([{
                    key: "commentList",
                    fn: function(e) {
                        return [s("albumComment", {
                            attrs: {
                                comments: t.comments,
                                isShow: t.isShowComment,
                                album: t.album,
                                slotProps: e
                            },
                            on: {
                                close: function(e) {
                                    t.isShowComment = !1
                                }
                            }
                        }), t.isShowComment ? s("commentSend", {
                            ref: "commentSend",
                            attrs: {
                                commentReview: t.album.commentReview,
                                album: t.album,
                                photoId: t.slotProps.photo.id
                            },
                            on: {
                                flushComment: function(e) {
                                    return t.$emit("flushComment")
                                }
                            }
                        }) : t._e()]
                    }
                }])
            }), t.isShowJigsaw ? s("jigsaw", {
                attrs: {
                    photoList: [t.slotProps.photo],
                    info: {
                        title: t.album.title,
                        href: t.path + "/r/" + t.album.shorturl,
                        addr: t.album.addr,
                        time: t.jigsawTime
                    }
                },
                on: {
                    close: function(e) {
                        t.isShowJigsaw = !1
                    }
                }
            }) : t._e(), t.album.isCharge && t.isShowBuyAlbumPhoto ? s("buyAlbumPhoto", {
                attrs: {
                    nowClassify: t.nowClassify,
                    albumId: t.album.id,
                    price: t.album.isFreePrice,
                    photoInfo: t.slotProps.photo
                },
                on: {
                    close: function(e) {
                        t.isShowBuyAlbumPhoto = !1
                    }
                }
            }) : t._e()], 1)
        }
          , r = [function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("p", {
                staticClass: "album-component-bigImageLayer-button-icon"
            }, [i("i", {
                staticClass: "iconfont icon-dialog"
            })])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("p", {
                staticClass: "album-component-bigImageLayer-button-icon"
            }, [i("i", {
                staticClass: "iconfont icon-share"
            })])
        }
        ]
          , a = (i("96cf"),
        i("3b8d"))
          , n = (i("c5f6"),
        function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "component-jigsawv2"
            }, ["style" === t.speed ? i("oneSelectStyle", {
                on: {
                    next: t.selectedStyle,
                    close: t.close
                }
            }) : t._e(), "splic" === t.speed ? i("jigsawMap", {
                attrs: {
                    photoList: t.photoList,
                    info: t.jigsawInfo,
                    pattern: t.pattern
                },
                on: {
                    close: t.close
                }
            }) : t._e()], 1)
        }
        )
          , o = []
          , h = (i("28a5"),
        function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("section", {
                staticClass: "tool-layout component-jigsaw-oneSelectStyle"
            }, [i("section", {
                staticClass: "component-jigsaw-oneSelectStyle-model"
            }, [i("button", {
                staticClass: "tool-close component-jigsaw-oneSelectStyle-close",
                on: {
                    click: function(e) {
                        return t.$emit("close")
                    }
                }
            }, [i("i", {
                staticClass: "iconfont icon-close"
            })]), i("div", {
                staticClass: "component-jigsaw-oneSelectStyle-name"
            }, [t._v(t._s(t.$t("album.jigsaw.jigsawSelectBigImgStyle")))]), i("ul", {
                staticClass: "component-jigsaw-oneSelectStyle-group"
            }, [i("li", {
                staticClass: "component-jigsaw-oneSelectStyle-item",
                attrs: {
                    active: "oneClassic-1" === t.pattern
                },
                on: {
                    click: function(e) {
                        t.pattern = "oneClassic-1"
                    }
                }
            }, [i("div", {
                staticClass: "component-jigsaw-oneSelectStyle-item-image",
                staticStyle: {
                    "background-position": "0 0"
                }
            }), i("p", [t._v(t._s(t.$t("album.jigsaw.jigsawClassic") + "1"))])]), i("li", {
                staticClass: "component-jigsaw-oneSelectStyle-item",
                attrs: {
                    active: "oneClassic-2" === t.pattern
                },
                on: {
                    click: function(e) {
                        t.pattern = "oneClassic-2"
                    }
                }
            }, [i("div", {
                staticClass: "component-jigsaw-oneSelectStyle-item-image",
                staticStyle: {
                    "background-position": "25% 0"
                }
            }), i("p", [t._v(t._s(t.$t("album.jigsaw.jigsawClassic") + "2"))])]), i("li", {
                staticClass: "component-jigsaw-oneSelectStyle-item",
                attrs: {
                    active: "onePoster-1" === t.pattern
                },
                on: {
                    click: function(e) {
                        t.pattern = "onePoster-1"
                    }
                }
            }, [i("div", {
                staticClass: "component-jigsaw-oneSelectStyle-item-image",
                staticStyle: {
                    "background-position": "50% 0"
                }
            }), i("p", [t._v(t._s(t.$t("album.jigsaw.jigsawPoster") + "1"))])]), i("li", {
                staticClass: "component-jigsaw-oneSelectStyle-item",
                attrs: {
                    active: "onePoster-2" === t.pattern
                },
                on: {
                    click: function(e) {
                        t.pattern = "onePoster-2"
                    }
                }
            }, [i("div", {
                staticClass: "component-jigsaw-oneSelectStyle-item-image",
                staticStyle: {
                    "background-position": "75% 0"
                }
            }), i("p", [t._v(t._s(t.$t("album.jigsaw.jigsawPoster") + "2"))])])]), i("div", {
                staticClass: "component-jigsaw-oneSelectStyle-next",
                on: {
                    click: function(e) {
                        return t.$emit("next", t.pattern)
                    }
                }
            }, [t._v(t._s(t.$t("album.jigsaw.sure")))])])])
        }
        )
          , l = []
          , p = {
            name: "oneSelectStyle",
            data: function() {
                return {
                    pattern: "oneClassic-1"
                }
            }
        }
          , c = p
          , m = (i("c927"),
        i("2877"))
          , f = Object(m["a"])(c, h, l, !1, null, null, null)
          , u = f.exports
          , d = i("5ee1")
          , g = {
            name: "jigsaw",
            props: {
                photoList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                info: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    speed: "style",
                    pattern: "oneClassic1",
                    jigsawInfo: this.info
                }
            },
            methods: {
                selectedStyle: function(t) {
                    this.speed = "splic",
                    t = t.split("-"),
                    this.pattern = t[0],
                    "2" === t[1] && delete this.jigsawInfo.href,
                    this.$emit("selectedStyle", t)
                },
                close: function() {
                    this.speed = "style",
                    this.$emit("close")
                },
                choose: function() {
                    this.photoList.length % 2 === 1 && "grid" === this.pattern ? this.$notify(this.$t("album.jigsaw.gonggeNotSingular")) : this.speed = "splic"
                }
            },
            components: {
                oneSelectStyle: u,
                jigsawMap: d["a"]
            }
        }
          , y = g
          , v = Object(m["a"])(y, n, o, !1, null, null, null)
          , b = v.exports
          , x = i("8927")
          , E = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "album-component-comment-albumComment"
            }, [i("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.isShow ? i("div", {
                staticClass: "tool-layout album-component-comment-albumComment-bg",
                on: {
                    click: function(e) {
                        return e.target !== e.currentTarget ? null : t.$emit("close")
                    }
                }
            }) : t._e()]), i("transition", {
                attrs: {
                    name: "slideInBottom"
                }
            }, [t.isShow ? i("div", {
                staticClass: "album-component-comment-albumComment-comment"
            }, [i("div", {
                staticClass: "album-component-comment-albumComment-comment-title"
            }, [t._v("\n        " + t._s(t.$t("album.comment.title")) + "(" + t._s(t.comments.length) + ")\n        "), i("div", {
                staticClass: "album-component-comment-albumComment-comment-title-close",
                on: {
                    click: function(e) {
                        return t.$emit("close")
                    }
                }
            }, [i("i", {
                staticClass: "iconfont icon-close"
            })])]), i("scrollList", {
                ref: "parent",
                staticClass: "album-component-comment-albumComment-comment-container",
                attrs: {
                    loadText: t.loadText,
                    scroll: t.scrollDom
                }
            }, [t.showList ? t._l(t.comments, (function(e) {
                return i("commentItem", {
                    key: e.id,
                    attrs: {
                        album: t.album,
                        comment: e
                    },
                    nativeOn: {
                        click: function(i) {
                            return t.slotProps.clickHandle(e)
                        }
                    }
                })
            }
            )) : t._e()], 2)], 1) : t._e()])], 1)
        }
          , w = []
          , C = i("3275")
          , _ = i("8476")
          , k = {
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
                },
                isShow: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    scrollDom: this.$refs.parent,
                    curItem: null,
                    showList: !1,
                    isShowOperation: !1,
                    curComment: null
                }
            },
            computed: {
                loadText: function() {
                    switch (!0) {
                    case !this.showList:
                        return this.$t("album.scrollList.loading");
                    case 0 === this.comments.length:
                        return this.$t("album.nullData.comment")
                    }
                    return this.$t("album.scrollList.end")
                }
            },
            mounted: function() {
                var t = this;
                setTimeout((function() {
                    t.showList = !0
                }
                ), 350)
            },
            components: {
                commentItem: C["a"],
                scrollList: _["a"]
            }
        }
          , A = k
          , S = (i("5383"),
        Object(m["a"])(A, E, w, !1, null, null, null))
          , P = S.exports
          , T = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "album-component-comment-Enabling"
            }, [t._t("commentList", null, {
                clickHandle: t.clickCommentHandle
            }), i("operation", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isShowOperation,
                    expression: "isShowOperation"
                }],
                on: {
                    cancel: function(e) {
                        t.isShowOperation = !1
                    },
                    inform: t.informComment,
                    reply: t.replyComment
                }
            })], 2)
        }
          , I = []
          , D = i("0b61")
          , M = {
            name: "albumInteraction",
            props: {
                isShowComment: {
                    type: Boolean,
                    default: !1
                },
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                photo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    curComment: null,
                    isShowOperation: !1
                }
            },
            components: {
                operation: D["a"]
            },
            methods: {
                clickCommentHandle: function(t) {
                    this.curComment = t,
                    this.isShowOperation = !0
                },
                replyComment: function() {
                    this.isShowComment = !0,
                    this.isShowOperation = !1;
                    var t = this.getCommentSend(this);
                    t && t.showLayerHandle(this.curComment)
                },
                informComment: function() {
                    var t = this;
                    this.$API.informComment(this.curComment.id).then((function(e) {
                        0 === e.e && (t.isShowOperation = !1,
                        t.$notify(t.$t("album.notify.reportSuccess")))
                    }
                    ))
                },
                getCommentSend: function(t) {
                    var e = t.$refs.commentSend;
                    return e || this.getCommentSend(t.$parent)
                }
            }
        }
          , F = M
          , B = Object(m["a"])(F, T, I, !1, null, null, null)
          , L = B.exports
          , R = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("button", {
                staticClass: "album-component-bigImageLayer-collectionBtn",
                on: {
                    click: t.collection
                }
            }, [i("p", {
                staticClass: "album-component-bigImageLayer-collectionBtn-icon",
                attrs: {
                    active: t.photo.isCollection
                }
            }, [i("i", {
                staticClass: "iconfont",
                class: t.photo.isCollection ? "icon-star" : "icon-collecteStar"
            })]), i("p", {
                staticClass: "album-component-bigImageLayer-collectionBtn-text"
            }, [t._v(t._s(t.$t("album.bigImageLayer.collect")))])])
        }
          , V = []
          , j = {
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                photo: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    clickTime: !0
                }
            },
            methods: {
                collection: function() {
                    var t = Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var e;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.$userInfo().token) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", this.$login(this.album.isCustom));
                                case 2:
                                    if (!this.album.isCharge || this.photo.isBuy || this.album.ownerId === this.$userInfo().id) {
                                        t.next = 6;
                                        break
                                    }
                                    return this.$notify(this.$t("album.bigImageLayer.collectionFailed")),
                                    this.$emit("pay"),
                                    t.abrupt("return");
                                case 6:
                                    if (!this.clickTime) {
                                        t.next = 12;
                                        break
                                    }
                                    return this.clickTime = !1,
                                    t.next = 10,
                                    this.$API.imgCollection(this.photo.isCollection ? 0 : 1, this.photo.id, this.album.custom);
                                case 10:
                                    e = t.sent,
                                    0 === e.e ? (this.photo.isCollection = !this.photo.isCollection,
                                    this.clickTime = !0) : this.$notify(this.$t("album.notify.tooBusy"));
                                case 12:
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
            }
        }
          , O = j
          , G = (i("1e62"),
        Object(m["a"])(O, R, V, !1, null, null, null))
          , z = G.exports
          , N = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("button", {
                staticClass: "album-component-bigImageLayer-button album-component-praise",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.onClick(e)
                    }
                }
            }, [i("transition", {
                attrs: {
                    name: "fade"
                }
            }, [["1021103646"].indexOf(t.album.id) >= 0 ? i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.guideShow && !t.photo.isLike,
                    expression: "guideShow && !photo.isLike"
                }],
                staticClass: "album-component-praise-guide"
            }, [i("div", {
                staticClass: "album-component-praise-guide-text"
            }, [t._v(t._s(t.$t("album.bigImageLayer.likeGuide")))]), i("div", {
                staticClass: "album-component-praise-guide-arrow"
            })]) : t._e()]), i("p", {
                staticClass: "album-component-bigImageLayer-button-icon"
            }, [i("i", {
                staticClass: "iconfont",
                class: t.photo.isLike ? "icon-liked" : "icon-like",
                attrs: {
                    liked: t.photo.isLike
                }
            }), i("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.photo.isLike && t.startAni,
                    expression: "photo.isLike && startAni"
                }],
                ref: "likeAnim",
                staticClass: "album-component-praise-animation"
            })]), i("p", {
                staticClass: "album-component-bigImageLayer-button-text"
            }, [t._v(t._s(t.$tc("album.bigImageLayer.like", t.photo.likeNum, {
                likeNum: t.photo.likeNum
            })))])], 1)
        }
          , H = []
          , Y = i("f8bd")
          , Q = {
            name: "praise",
            props: {
                photo: {
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
                    praiseRequre: !1,
                    likeAnim: null,
                    startAni: !1,
                    guideShow: !0,
                    guideTimeout: null
                }
            },
            mounted: function() {
                var t = Object(a["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0,
                                t.next = 3,
                                Object(Y["a"])(this.$refs.likeAnim, i("9f22"), {
                                    loop: !1
                                });
                            case 3:
                                this.likeAnim = t.sent,
                                t.next = 8;
                                break;
                            case 6:
                                t.prev = 6,
                                t.t0 = t["catch"](0);
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[0, 6]])
                }
                )));
                function e() {
                    return t.apply(this, arguments)
                }
                return e
            }(),
            methods: {
                onClick: function() {
                    this.albumPraise()
                },
                albumPraise: function() {
                    var t = this;
                    if (!this.$userInfo().token)
                        return this.$login(this.album.isCustom);
                    this.praiseRequre || (this.praiseRequre = !0,
                    this.$API.albumPraise(this.album.id, +!this.photo.isLike, this.photo.id, this.album.custom).then((function(e) {
                        t.praiseRequre = !1,
                        0 === e.e ? (t.$set(t.photo, "isLike", !t.photo.isLike),
                        t.photo.isLike ? (t.photo.likeNum++,
                        t.startAni = !0,
                        t.likeAnim.goToAndPlay(0, !0),
                        window.setTimeout((function() {
                            t.startAni = !1
                        }
                        ), 1200)) : t.photo.likeNum--,
                        t.updateLike(),
                        t.$emit("praise")) : t.$notify(t.$t("album.bigImageLayer.likeError"))
                    }
                    )))
                },
                updateLike: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this;
                    if (t.getCollectionPhoto)
                        t.getCollectionPhoto();
                    else {
                        if (!t.$parent)
                            return;
                        this.updateLike(t.$parent)
                    }
                }
            },
            watch: {
                photo: function() {
                    var t = this;
                    this.guideShow = !1,
                    this.guideTimeout && clearTimeout(this.guideTimeout),
                    this.guideTimeout = setTimeout((function() {
                        t.guideTimeout = null,
                        t.guideShow = !0
                    }
                    ), 1e3)
                }
            }
        }
          , $ = Q
          , Z = (i("9400"),
        Object(m["a"])($, N, H, !1, null, null, null))
          , W = Z.exports
          , q = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("transition", {
                attrs: {
                    name: "fade"
                }
            }, [i("div", {
                staticClass: "album-components-buyAlbumPhoto",
                on: {
                    click: function(e) {
                        return e.target !== e.currentTarget ? null : t.$emit("close")
                    },
                    touchmove: function(t) {
                        t.preventDefault()
                    }
                }
            }, [i("div", {
                staticClass: "album-components-buyAlbumPhoto-container"
            }, [i("div", {
                staticClass: "album-components-buyAlbumPhoto-container-close",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.$emit("close")
                    }
                }
            }, [i("i", {
                staticClass: "iconfont icon-close"
            })]), i("div", {
                staticClass: "album-components-buyAlbumPhoto-container-title"
            }, [t._v(t._s(t.$t("album.buyAlbumPhoto.needToPay")))]), i("div", {
                staticClass: "album-components-buyAlbumPhoto-container-price"
            }, [t._v("￥" + t._s(t.price / 100))]), i("div", {
                staticClass: "album-components-buyAlbumPhoto-container-youcan"
            }, [t._v(t._s(t.$t("album.buyAlbumPhoto.saveHdAfterPay")))]), i("div", {
                staticClass: "album-components-buyAlbumPhoto-container-pay",
                on: {
                    click: t.buyPhoto
                }
            }, [t._v(t._s(t.$t("album.buyAlbumPhoto.payNow")))]), i("div", {
                staticClass: "album-components-buyAlbumPhoto-container-explain"
            }, [i("p", [t._v("1." + t._s(t.$t("album.buyAlbumPhoto.downloadRule01")))]), i("p", [t._v("2." + t._s(t.$t("album.buyAlbumPhoto.downloadRule02")))])])])])])
        }
          , X = []
          , J = {
            props: {
                photoInfo: {
                    type: Object,
                    default: null
                },
                price: {
                    type: Number,
                    default: 0
                },
                albumId: {
                    type: String
                },
                nowClassify: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {}
            },
            methods: {
                buyPhoto: function() {
                    var t = this;
                    if (!this.$userInfo().token)
                        return this.$login(this.album.isCustom);
                    this.$API.buyOnePhoto(this.albumId, this.photoInfo.id).then((function(e) {
                        if (0 === e.e) {
                            var i = "".concat(location.origin, "/album/sharimg/").concat(t.albumId, "/").concat(t.nowClassify.id, "/").concat(t.photoInfo.id, "/");
                            location.href = "/paymentBrand?orderId=".concat(e.d.id, "&type=buyOnePhoto&payBack=").concat(i)
                        }
                    }
                    ))
                }
            }
        }
          , K = J
          , U = (i("dd0c"),
        Object(m["a"])(K, q, X, !1, null, null, null))
          , tt = U.exports
          , et = i("f53f")
          , it = i("d18c")
          , st = i("ace7")
          , rt = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "album-component-face"
            }, [t.slotProps.photo.faceList.length ? i("div", {
                staticClass: "album-component-face-faceTitle"
            }, [t._v(t._s(t.$t("album.bigImageLayer.clickAvatar")))]) : t._e(), i("div", {
                staticClass: "album-component-face-faceList"
            }, [i("sliderTab", {
                ref: "sliderTab",
                attrs: {
                    nav: !1
                },
                model: {
                    value: t.sliderIndex,
                    callback: function(e) {
                        t.sliderIndex = e
                    },
                    expression: "sliderIndex"
                }
            }, t._l(t.slotProps.photo.faceList, (function(e, s) {
                return i("face-item", {
                    key: s,
                    attrs: {
                        active: s === t.sliderIndex,
                        faceImg: e.url
                    },
                    nativeOn: {
                        click: function(i) {
                            return t.toFindMe(e)
                        }
                    }
                })
            }
            )), 1)], 1), t.show && t.slotProps.photo.faceList.length && t.moved ? i("onImage", {
                staticClass: "album-component-face-faceBox",
                attrs: {
                    index: t.sliderIndex,
                    slotProps: t.slotProps
                }
            }) : t._e()], 1)
        }
          , at = []
          , nt = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "album-component-face-onImage",
                class: !t.slotProps.touch.isTouch && "transition",
                style: {
                    width: t.slotProps.photo.transform.afterScaling.w + "px",
                    height: t.slotProps.photo.transform.afterScaling.h + "px",
                    transform: "translate(" + (t.slotProps.photo.transform.afterScaling.x - t.slotProps.touch.distance.x) + "px, " + t.slotProps.photo.transform.afterScaling.y + "px)"
                }
            }, [t._l(t.slotProps.photo.faceList, (function(e, s) {
                return [s === t.index ? i("div", {
                    key: e.id,
                    staticClass: "album-component-face-onImage-item",
                    class: !t.slotProps.touch.isTouch && "transition",
                    style: {
                        width: e.width * t.scale + "px",
                        height: e.height * t.scale + "px",
                        transform: "translate(" + e.x * t.scale + "px, " + e.y * t.scale + "px)"
                    }
                }, [i("div", {
                    staticClass: "album-component-face-onImage-border",
                    style: {
                        width: t.borderSize + "px",
                        height: t.borderSize + "px"
                    },
                    attrs: {
                        top: "",
                        left: ""
                    }
                }), i("div", {
                    staticClass: "album-component-face-onImage-border",
                    style: {
                        width: t.borderSize + "px",
                        height: t.borderSize + "px"
                    },
                    attrs: {
                        top: "",
                        right: ""
                    }
                }), i("div", {
                    staticClass: "album-component-face-onImage-border",
                    style: {
                        width: t.borderSize + "px",
                        height: t.borderSize + "px"
                    },
                    attrs: {
                        bottom: "",
                        right: ""
                    }
                }), i("div", {
                    staticClass: "album-component-face-onImage-border",
                    style: {
                        width: t.borderSize + "px",
                        height: t.borderSize + "px"
                    },
                    attrs: {
                        bottom: "",
                        left: ""
                    }
                })]) : t._e()]
            }
            ))], 2)
        }
          , ot = []
          , ht = {
            name: "onImage",
            props: {
                slotProps: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                index: {
                    type: Number,
                    default: 0
                }
            },
            computed: {
                scale: function() {
                    return this.slotProps.photo.transform.afterScaling.w / this.slotProps.photo.width
                },
                borderSize: function() {
                    return Math.range(3, 12 * this.scale, 12)
                }
            },
            components: {}
        }
          , lt = ht
          , pt = (i("3a6c"),
        Object(m["a"])(lt, nt, ot, !1, null, null, null))
          , ct = pt.exports
          , mt = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "album-component-faceItem"
            }, [i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.active,
                    expression: "active"
                }],
                staticClass: "album-component-faceItem-boder"
            }, [i("div", {
                staticClass: "album-component-faceItem-boder-img"
            }, [i("imageBox", {
                attrs: {
                    url: t.faceImg,
                    type: "img"
                }
            })], 1)]), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.active,
                    expression: "!active"
                }],
                staticClass: "album-component-faceItem-noborder"
            }, [i("imageBox", {
                attrs: {
                    url: t.faceImg,
                    type: "img"
                }
            })], 1)])
        }
          , ft = []
          , ut = i("cca9")
          , dt = {
            name: "faceItem",
            props: {
                faceImg: {
                    type: String,
                    default: ""
                },
                active: {
                    type: Boolean,
                    default: !1
                }
            },
            components: {
                imageBox: ut["a"]
            }
        }
          , gt = dt
          , yt = (i("8850"),
        Object(m["a"])(gt, mt, ft, !1, null, null, null))
          , vt = yt.exports
          , bt = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "sliderTab",
                on: {
                    touchstart: function(e) {
                        return e.stopPropagation(),
                        t.touchStart(e)
                    },
                    touchmove: function(e) {
                        return e.stopPropagation(),
                        t.touchMove(e)
                    },
                    touchend: function(e) {
                        return e.stopPropagation(),
                        t.touchEnd(e)
                    }
                }
            }, [i("div", {
                staticClass: "sliderTab-content"
            }, [i("div", {
                ref: "container",
                staticClass: "sliderTab-container",
                style: t.getTransformSize,
                attrs: {
                    ani: t.ani
                }
            }, [t._t("default")], 2)])])
        }
          , xt = []
          , Et = {
            name: "sliderTab",
            props: {
                value: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    prevTransform: 0,
                    sliderTransform: 0,
                    touchStartX: 0,
                    touchMoveX: 0,
                    elWidth: 0,
                    viewPortWidth: 0,
                    ani: !1
                }
            },
            mounted: function() {
                this.init()
            },
            computed: {
                getTransformSize: function() {
                    return "transform: translate3d(".concat(this.sliderTransform, "px, 0, 0)")
                }
            },
            methods: {
                touchStart: function(t) {
                    this.ani = !1,
                    this.touchStartX = t.touches[0].clientX
                },
                touchMove: function(t) {
                    var e = -(this.touchStartX - t.touches[0].clientX) + this.prevTransform;
                    this.sliderTransform = e > 0 ? 0 : e;
                    var i = this.$refs.container.children[0].clientWidth
                      , s = Math.max(Math.min(Math.round(Math.abs(this.sliderTransform / i)), this.$refs.container.children.length - 1), 0);
                    this.$emit("input", s)
                },
                touchEnd: function() {
                    this.ani = !0;
                    var t = this.$refs.container.children[0].clientWidth
                      , e = Math.max(Math.min(Math.round(Math.abs(this.sliderTransform / t)), this.$refs.container.children.length - 1), 0);
                    this.sliderTransform = -e * t,
                    this.prevTransform = this.sliderTransform,
                    this.$emit("input", e)
                },
                init: function() {
                    this.sliderTransform = 0,
                    this.prevTransform = 0,
                    this.elWidth = this.$el.clientWidth,
                    this.viewPortWidth = document.body.clientWidth
                }
            }
        }
          , wt = Et
          , Ct = (i("fcf6"),
        Object(m["a"])(wt, bt, xt, !1, null, null, null))
          , _t = Ct.exports
          , kt = {
            name: "face",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                slotProps: {
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
                index: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    sliderIndex: 0,
                    show: !0,
                    moved: !1
                }
            },
            methods: {
                toFindMe: function(t) {
                    this.$router.push({
                        path: "/album/findMe/findMeResult/".concat(this.album.id, "/").concat(this.nowClassify.id, "/").concat(this.album.custom, "/?photoIndex=").concat(this.index, "&imgId=").concat(t.photoId, "&faceId=").concat(t.id, "&from=bigImg")
                    })
                }
            },
            components: {
                onImage: ct,
                faceItem: vt,
                sliderTab: _t
            },
            watch: {
                "slotProps.index": function(t) {
                    var e = this;
                    this.sliderIndex = 0,
                    this.$refs.sliderTab.init(),
                    setTimeout((function() {
                        e.moved = !1
                    }
                    ), 123)
                },
                sliderIndex: function() {
                    this.moved = !0
                }
            }
        }
          , At = kt
          , St = (i("8d8c"),
        Object(m["a"])(At, rt, at, !1, null, null, null))
          , Pt = St.exports
          , Tt = {
            name: "bigImageLayer",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                slotProps: {
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
                nowClassify: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                index: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    loadingState: !1,
                    isShowComment: !1,
                    isShowJigsaw: !1,
                    isShowBuyAlbumPhoto: !1,
                    path: st["path"],
                    sliderIndex: 0
                }
            },
            methods: {
                loadingLarge: function() {
                    var t = Object(a["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!this.album.isCharge || this.slotProps.photo.isBuy) {
                                        t.next = 14;
                                        break
                                    }
                                    if (this.$userInfo().token) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return", this.$login(this.album.isCustom));
                                case 3:
                                    if (this.album.ownerId === this.$userInfo().id) {
                                        t.next = 10;
                                        break
                                    }
                                    if (this.album.isShowLoginAboutComponent) {
                                        t.next = 7;
                                        break
                                    }
                                    return this.$notify("小程序暂不支持付费下载"),
                                    t.abrupt("return");
                                case 7:
                                    this.isShowBuyAlbumPhoto = !0,
                                    t.next = 12;
                                    break;
                                case 10:
                                    return t.next = 12,
                                    this.downloadOrigin();
                                case 12:
                                    t.next = 16;
                                    break;
                                case 14:
                                    return t.next = 16,
                                    this.downloadOrigin();
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
                }(),
                downloadOrigin: function() {
                    (function() {
                        var t = Object(a["a"])(regeneratorRuntime.mark((function t(e, i) {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return i.loadingState = !0,
                                        t.next = 3,
                                        Object(et["a"])(e.osrc);
                                    case 3:
                                        e.currentSrc = "osrc",
                                        i.loadingState = !1;
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e, i) {
                            return t.apply(this, arguments)
                        }
                    }
                    )()(this.slotProps.photo, this)
                }
            },
            computed: {
                currentSize: function() {
                    try {
                        if ("src" === this.slotProps.photo.currentSrc)
                            return this.slotProps.photo.mSize;
                        if ("osrc" === this.slotProps.photo.currentSrc)
                            return this.slotProps.photo.oSize
                    } catch (t) {}
                    return ""
                },
                jigsawTime: function() {
                    return this.album.startDate === this.album.endDate ? Object(it["a"])(this.album.startDate, "YYYY.MM.DD") : "".concat(Object(it["a"])(this.album.startDate, "YYYY.MM.DD"), " - ").concat(Object(it["a"])(this.album.endDate, "YYYY.MM.DD"))
                },
                loadBigImgFont: function() {
                    if (this.loadingState)
                        return this.$t("album.bigImageLayer.loading");
                    var t = this.slotProps.photo
                      , e = t.isBuy
                      , i = t.oSize;
                    return this.album.ownerId === this.$userInfo().id ? this.$t("album.bigImageLayer.load", {
                        size: i
                    }) : this.album.isCharge && !e ? this.$t("album.bigImageLayer.buyPhoto") : this.$t("album.bigImageLayer.load", {
                        size: i
                    })
                }
            },
            watch: {
                "slotProps.photo": function(t, e) {
                    t !== e && (this.loadingState = !1)
                }
            },
            components: {
                face: Pt,
                collectionBtn: z,
                likeBtn: W,
                jigsaw: b,
                albumComment: P,
                commentSend: x["a"],
                buyAlbumPhoto: tt,
                albumInteraction: L
            }
        }
          , It = Tt
          , Dt = (i("262b"),
        Object(m["a"])(It, s, r, !1, null, null, null));
        e["a"] = Dt.exports
    },
    "5d41": function(t, e, i) {
        t.exports = i.p + "img/text-3.0a5d248a.png"
    },
    "5d7c": function(t, e, i) {},
    "5eab": function(t, e, i) {
        "use strict";
        var s = i("b1ec")
          , r = i.n(s);
        r.a
    },
    "5ee1": function(t, e, i) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("section", {
                staticClass: "component-jigsaw-jigsawMap"
            }, [i("button", {
                staticClass: "tool-close",
                on: {
                    click: t.close
                }
            }, [i("i", {
                staticClass: "iconfont icon-close"
            })]), t.state < 4 ? i("div", {
                staticClass: "tool-layout component-jigsaw-jigsawMap-layout"
            }, [i("div", {
                staticClass: "component-jigsaw-jigsawMap-speed"
            }, [0 === t.state ? i("div", [t._v(t._s(t.$t("album.jigsaw.loadingResoure") + "(" + t.loadIndex + "/" + t.photoList.length + ")"))]) : t._e(), 1 === t.state ? i("div", [t._v(t._s(t.$t("album.jigsaw.computedLayout")))]) : t._e(), 2 === t.state ? i("div", [t._v(t._s(t.$t("album.jigsaw.jigsawProcessing")))]) : t._e(), 3 === t.state ? i("div", [t._v(t._s(t.$t("album.jigsaw.export")))]) : t._e()])]) : t._e(), 4 === t.state ? i("div", {
                staticClass: "component-jigsaw-jigsawMap-tips"
            }, [t._v("Tips:" + t._s(t.$t("album.jigsaw.longPressToSaveJigsaw")))]) : t._e()])
        }
          , r = []
          , a = i("75fc")
          , n = (i("96cf"),
        i("3b8d"))
          , o = (i("ac6a"),
        i("7618"))
          , h = {
            width: 1600,
            topPlaceholder: 316,
            bottomPlaceholder: 612,
            edge: 14,
            titleLineWidth: 6,
            titleSize: 72,
            qrSize: 300
        }
          , l = i("f53f")
          , p = (i("28a5"),
        i("48c0"),
        i("d225"))
          , c = function t() {
            var e = this
              , i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object(p["a"])(this, t),
            this.text = i.text,
            this.color = i.color || "#333",
            this.lineWidth = i.lineWidth || "6",
            this.size = i.size || 72,
            this.bold = !!i.bold,
            this.family = i.family || "Arial",
            this.top = i.top || 0,
            this.left = i.left || 0,
            this.rotate = i.rotate || 0,
            this.font = function() {
                return "".concat(e.bold ? "bold " : "").concat(e.size, "px ").concat(e.family)
            }
            ,
            this.width = function() {
                var t = document.createElement("canvas").getContext("2d");
                return t.lineWidth = e.lineWidth,
                t.font = e.font(),
                t.measureText(e.text).width
            }
            ,
            this.shrink = function(t) {
                e.lineWidth = parseInt(e.lineWidth * t),
                e.size = parseInt(e.size * t),
                e.left = parseInt(e.left * t),
                e.top = parseInt(e.top * t)
            }
            ,
            this.draw = function(t) {
                t.fillStyle = e.color,
                t.lineWidth = e.lineWidth,
                t.font = e.font(),
                t.fillText(e.text, e.left, e.top)
            }
        }
          , m = function(t) {
            var e = t.title
              , i = []
              , s = []
              , r = document.createElement("canvas").getContext("2d");
            r.lineWidth = h.titleLineWidth,
            r.font = "bold ".concat(h.titleSize, "px Arial"),
            e = e.split("");
            for (var a = "", n = 0, o = e.length; n < o; n++)
                a += e.shift(),
                r.measureText(a).width > .8 * h.width && (i.push(a.substring(0, n)),
                a = a.substring(n));
            if (i.push(a),
            1 === i.length) {
                var l = new c({
                    text: i[0],
                    bold: !0,
                    lineWidth: h.titleLineWidth,
                    size: h.titleSize
                });
                l.top = parseInt((h.topPlaceholder + l.size) / 2),
                l.left = parseInt((h.width - r.measureText(i[0]).width) / 2),
                s.push(l)
            } else {
                var p = 14
                  , m = new c({
                    text: i[0],
                    bold: !0,
                    lineWidth: h.titleLineWidth,
                    size: h.titleSize,
                    color: "#333"
                });
                m.top = parseInt(h.topPlaceholder / 2 - p),
                m.left = parseInt((h.width - r.measureText(i[0]).width) / 2),
                s.push(m),
                m = new c({
                    text: i[1],
                    bold: !0,
                    lineWidth: h.titleLineWidth,
                    size: h.titleSize
                }),
                m.top = parseInt(h.topPlaceholder / 2 + m.size + p / 2),
                m.left = parseInt((h.width - r.measureText(i[1]).width) / 2),
                s.push(m)
            }
            return s
        }
          , f = function t() {
            var e = this
              , i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object(p["a"])(this, t),
            this.img = i,
            this.width = i.width,
            this.height = i.height,
            this.top = 0,
            this.left = 0,
            this.cutSX = 0,
            this.cutSY = 0,
            this.cutW = i.width,
            this.cutH = i.height,
            this.rotate = 0,
            this.lfitW = function(t) {
                e.width = t,
                e.height = parseInt(i.height / i.width * t)
            }
            ,
            this.lfitH = function(t) {
                e.width = parseInt(i.width / i.height * t),
                e.height = t
            }
            ,
            this.mfit = function(t, s) {
                var r = s / t
                  , a = e.height / e.width;
                if (r > a) {
                    e.width = t,
                    e.height = s;
                    var n = i.height / r;
                    e.cutSX = parseInt((i.width - n) / 2),
                    e.cutW = i.width - 2 * e.cutSX
                } else {
                    e.width = t,
                    e.height = s;
                    var o = i.width * r;
                    e.cutSY = parseInt((i.height - o) / 2),
                    e.cutH = i.height - 2 * e.cutSY
                }
            }
            ,
            this.resize = function(t, i) {
                t > 0 && !i && (e.width < t && e.shrink(t / e.width),
                e.lfitW(t)),
                !t && i > 0 && (e.height < i && e.shrink(i / e.height),
                e.lfitH(i)),
                t >= 0 && i >= 0 && ((e.width < t || e.height < i) && e.shrink(Math.max(t / e.width, i / e.height)),
                e.mfit(t, i))
            }
            ,
            this.shrink = function(t) {
                e.width = parseInt(e.width * t),
                e.height = parseInt(e.height * t),
                e.left = parseInt(e.left * t),
                e.top = parseInt(e.top * t)
            }
            ,
            this.draw = function(t) {
                t.drawImage(e.img, e.cutSX, e.cutSY, e.cutW, e.cutH, e.left, e.top, e.width, e.height)
            }
        }
          , u = function(t, e) {
            var i = new f(t);
            i.width = i.height = h.qrSize,
            i.top = parseInt(e + .19 * h.bottomPlaceholder),
            i.left = parseInt((h.width - i.width) / 2);
            var s = new c({
                text: "扫码查看相册其他高清大图",
                lineWidth: 3,
                size: 44,
                color: "#999"
            })
              , r = document.createElement("canvas").getContext("2d");
            return r.lineWidth = s.lineWidth,
            r.font = s.font(),
            s.top = parseInt(e + h.bottomPlaceholder - (h.bottomPlaceholder - .29 * h.bottomPlaceholder - i.height)),
            s.left = parseInt((h.width - r.measureText(s.text).width) / 2),
            {
                qr: i,
                text: s
            }
        }
          , d = function t() {
            var e = this
              , i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object(p["a"])(this, t),
            this.width = i.width || 0,
            this.height = i.height || 0,
            this.background = i.background || "#fff",
            this.shrink = function(t) {
                e.width = parseInt(e.width * t),
                e.height = parseInt(e.height * t)
            }
            ,
            this.draw = function(t) {
                t.fillStyle = e.background,
                t.fillRect(0, 0, e.width, e.height)
            }
        }
          , g = function t() {
            var e = this
              , i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object(p["a"])(this, t),
            this.width = h.width || 0,
            this.height = i.height || 0,
            this.background = i.background || "#fff",
            this.drawItem = [],
            this.drawItem.push(new d(this)),
            this.push = function(t) {
                e.drawItem.push(t)
            }
            ,
            this.shrink = function(t) {
                e.width = parseInt(e.width * t),
                e.height = parseInt(e.height * t);
                for (var i = 0, s = e.drawItem.length; i < s; i++)
                    e.drawItem[i].shrink(t)
            }
            ,
            this.draw = function(t) {
                e.drawItem[0].height = e.height;
                for (var i = 0, s = e.drawItem.length; i < s; i++)
                    e.drawItem[i].draw(t)
            }
        }
          , y = function(t, e) {
            var i = new g;
            if (e.title) {
                var s = m(e);
                s.forEach((function(t) {
                    i.push(t)
                }
                )),
                i.height += h.topPlaceholder
            }
            if (t.forEach((function(t) {
                var e = new f(t);
                e.resize(h.width),
                e.top = i.height,
                i.push(e),
                i.height += e.height
            }
            )),
            e.href) {
                var r = u(e.qrImage, i.height);
                i.push(r.qr),
                i.push(r.text),
                i.height += h.bottomPlaceholder
            }
            return i
        }
          , v = function(t, e) {
            var i = new g;
            if (e.title) {
                var s = m(e);
                s.forEach((function(t) {
                    i.drawItem.push(t)
                }
                )),
                i.height += h.topPlaceholder
            } else
                i.height += h.edge;
            var r = (h.width - h.edge) / 2;
            if (t.forEach((function(t, e) {
                var s = new f(t);
                s.resize(r, r),
                s.top = i.height,
                s.cutSX = (s.img.width - Math.min(s.img.width, s.img.height)) / 2,
                s.cutSY = (s.img.height - Math.min(s.img.width, s.img.height)) / 2,
                s.cutW = s.cutH = Math.min(s.img.width, s.img.height),
                e % 2 === 1 && (s.left = s.width + h.edge,
                i.height += r + h.edge),
                i.push(s)
            }
            )),
            t.length % 2 === 1 && (i.height += r + h.edge),
            i.height -= h.edge,
            e.href) {
                var a = u(e.qrImage, i.height);
                i.push(a.qr),
                i.push(a.text),
                i.height += h.bottomPlaceholder
            }
            return i
        }
          , b = function(t, e) {
            var i = new g;
            if (e.title) {
                var s = m(e);
                s.forEach((function(t) {
                    i.drawItem.push(t)
                }
                )),
                i.height += h.topPlaceholder
            } else
                i.height += h.edge;
            var r = [];
            t.forEach((function(t, e) {
                t.height > t.width && r.push(e)
            }
            ));
            var a = 0;
            if (t.forEach((function(e, s) {
                var n = new f(e);
                if (!(e.height > e.width && (s < r[a] || void 0 === r[a]))) {
                    if (s === r[a] && a < r.length - 1) {
                        n.resize((h.width - h.edge) / 2),
                        n.top = i.height;
                        var o = new f(t[r[a + 1]]);
                        o.resize((h.width - h.edge) / 2, n.height),
                        o.top = i.height,
                        o.left = (h.width + h.edge) / 2,
                        i.push(o),
                        i.height += n.height + h.edge,
                        a += 2
                    } else
                        n.resize(h.width),
                        n.top = i.height,
                        i.height += n.height + h.edge;
                    i.push(n)
                }
            }
            )),
            i.height -= h.edge,
            e.href) {
                var n = u(e.qrImage, i.height);
                i.push(n.qr),
                i.push(n.text),
                i.height += h.bottomPlaceholder
            }
            return i
        }
          , x = function(t, e) {
            var i = 16
              , s = new g
              , r = [];
            t.forEach((function(t) {
                var e = new f(t);
                e.resize(h.width),
                r.push(e)
            }
            ));
            var a = 0
              , n = r.length - 1
              , o = r[a].height
              , l = r[n].height;
            if (r.length > 2)
                for (; n - a > 1; )
                    o < l + r[a + 1].height ? (a++,
                    o += r[a].height) : (n--,
                    l += r[n].height);
            var p = Math.max(l - o, 0);
            return s.height += Math.abs(l - o),
            r.forEach((function(t, r) {
                if (t.top = p,
                s.drawItem.push(t),
                p += t.height + i,
                s.height += t.height + i,
                r === a) {
                    var n = new f(e.blockObj);
                    n.resize(h.width, h.width),
                    n.top = p,
                    n.cutW /= 3,
                    n.cutH /= 3;
                    var o = Math.min(n.img.width, n.img.height) / 3;
                    n.cutSX += e.blockIndex % 3 * o,
                    n.cutSY += parseInt(e.blockIndex / 3) * o,
                    s.drawItem.push(n),
                    p += n.height + i,
                    s.height += n.height + i
                }
            }
            )),
            s.height -= i,
            s
        }
          , E = function() {
            var t = Object(n["a"])(regeneratorRuntime.mark((function t(e) {
                var s, r, a, n, o, p, c, m;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            s = [],
                            r = 1;
                        case 2:
                            if (!(r <= 6)) {
                                t.next = 10;
                                break
                            }
                            return t.next = 5,
                            Object(l["a"])(i("1908")("./text-".concat(r, ".png")), !0);
                        case 5:
                            a = t.sent,
                            s.push(a);
                        case 7:
                            r++,
                            t.next = 2;
                            break;
                        case 10:
                            return n = new g,
                            t.next = 13,
                            Object(l["a"])(i("27ab"), !0);
                        case 13:
                            return o = t.sent,
                            p = new f(o),
                            p.resize(h.width),
                            n.push(p),
                            n.height += p.height,
                            e.forEach((function(t) {
                                var e = new f(t);
                                e.resize(parseInt(.926 * h.width)),
                                e.left = parseInt(.037 * h.width),
                                e.top = n.height,
                                n.push(e),
                                n.height += e.height;
                                var i = parseInt(Math.random() * (s.length - 1))
                                  , r = s.splice(i, 1)[0]
                                  , a = new f(r);
                                a.resize(h.width),
                                a.top = n.height,
                                n.push(a),
                                n.height += a.height
                            }
                            )),
                            t.next = 21,
                            Object(l["a"])(i("b534"), !0);
                        case 21:
                            return c = t.sent,
                            m = u(c, n.height),
                            n.push(m.qr),
                            n.push(m.text),
                            n.height += h.bottomPlaceholder,
                            t.abrupt("return", n);
                        case 27:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function(e) {
                return t.apply(this, arguments)
            }
        }()
          , w = function t() {
            var e = this
              , i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object(p["a"])(this, t),
            this.text = i.text,
            this.color = i.color || "#333",
            this.lineWidth = i.lineWidth || "6",
            this.size = i.size || 72,
            this.bold = !!i.bold,
            this.family = i.family || "Arial",
            this.top = i.top || 0,
            this.left = i.left || 0,
            this.rotate = i.rotate || 0,
            this.width = i.width || 1e7,
            this.lineHeigth = i.lineHeigth || parseInt(1.5 * this.size),
            this.height = 0,
            this.align = i.align || "left",
            this.texts = [],
            this.font = function() {
                return "".concat(e.bold ? "bold " : "").concat(e.size, "px ").concat(e.family)
            }
            ,
            this.getLeft = function(t) {
                var i = 0;
                switch (e.align) {
                case "center":
                    i = e.left + (e.width - t.width()) / 2;
                    break;
                case "right":
                    i = e.left + e.width - t.width();
                    break;
                default:
                    i = e.left;
                    break
                }
                return i
            }
            ,
            this.addRow = function(t) {
                var i = new c({
                    text: t,
                    color: e.color,
                    lineWidth: e.lineWidth,
                    size: e.size,
                    bold: e.bold,
                    family: e.family,
                    top: e.top + e.lineHeigth * e.texts.length,
                    left: e.left,
                    rotate: e.rotate
                });
                i.left = e.getLeft(i),
                e.texts.push(i)
            }
            ,
            this.everyRow = function() {
                var t = document.createElement("canvas").getContext("2d");
                t.lineWidth = e.lineWidth,
                t.font = e.font();
                for (var i = e.text.split(""), s = "", r = 0, a = i.length; r < a; r++)
                    if (s += i.shift(),
                    t.measureText(s).width > e.width || s.indexOf("^") >= 0) {
                        if ("^ " === s) {
                            s = " ";
                            continue
                        }
                        e.addRow(s.substring(0, r)),
                        s = s.substring(r)
                    }
                e.addRow(s)
            }
            ,
            this.everyRow(),
            this.shrink = function(t) {
                e.texts.forEach((function(e) {
                    e.shrink(t)
                }
                ))
            }
            ,
            this.draw = function(t) {
                e.texts.forEach((function(e) {
                    e.draw(t)
                }
                ))
            }
        }
          , C = function() {
            var t = Object(n["a"])(regeneratorRuntime.mark((function t(e, i) {
                var s, r, a, n, o, p, c, m, u, d, y, v, b;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            if (s = new g,
                            r = 38,
                            a = new f(e[0]),
                            a.resize(h.width - 2 * r),
                            a.top = r,
                            a.left = r,
                            s.push(a),
                            s.height = r + a.height + 567,
                            i.title && (n = new w({
                                text: i.title,
                                color: "#333",
                                size: 78,
                                width: 1118,
                                bold: !0,
                                lineHeight: 80,
                                top: r + a.height + 130,
                                left: r
                            }),
                            n.texts.forEach((function(t) {
                                s.push(t)
                            }
                            ))),
                            !i.addr && !i.time) {
                                t.next = 19;
                                break
                            }
                            return t.next = 12,
                            Object(l["a"])("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAilBMVEUAAACZmZmYmJiXl5eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmampqZmZmZmZmZmZmZmZmZmZmZmZmYmJiZmZmYmJiZmZmYmJiZmZmZmZmZmZmZmZmZmZmZmZmYmJiZmZmZmZmYmJiXl5eYmJiZmZmZmZmYmJiZmZmYmJiZmZmZmZmZmZmZmZnhkkmVAAAALXRSTlMAmBoI+ycU3dVLNvTwIaumRCwN5cZqwXFZU+t8MdCMgnY+XgSzhve7sJ+RzGKNSqHIAAAFaklEQVR42u3d6ZLaMAwH8H9uQg4gXMt9loWlev/X67T90KXt1vbGEnYnvweAySS2ZMmJ0el0Op1Op9PxU3jIF8fpfLWaT4+L/BDCP2m+v01K+k05ue3zFL5IX4Ie/UMvePHgYpIvPdLQ+1LBYdHXCWmbHSO4KQkKMlIELt6WpI7JWDxI4JZRTd/5finhgFoYOBNf5iW1ctk5MezXG2ptfMSzRQFZMQnxVKOMLFkO8UT7mOzZ4VnCGVk1S/EUyZIsy0I8wbok68YJxB0KYrAcQdjwQizKPkQtiMvlAEH9mNiUI4gZlcRoGUJItSRWWQoRYUbMNg0kTIjdGQK2JGAOdjlJiPtgVhUkYpmCV4+EvILVisS8gFF4ITHLBnxeSdAb2ORkKjtv58d8eJxvzxmZWoNJNCYTs90wwjvRcDchExMwmZK++zzEX4TzDenLweI0Jk3x9YAPHc6kawYWR9LUUzzcfe3h0ocCayz8ApVoS3pqMMhJS9aHhsOYtCSwb0Y6rg20pHohKYB1le0/HpCGIoJtO9Kwh4HtczKusekwV7s9IwkektoNhq6kFsKuASltTjDUZDpPq10FqRQVjPVJ6Q6rDqT0lWmhlgKic9aGK6FewKYJV1r0IhsTI1Kp2TK4DBblfEnRQnQC/sJY4+wJBnd15MoZ150ryC1Fxvi8JqZ/G8AedZLVQi1Xg6hIYchZ0yjlJq04Qgsjudg+5a12LMVKECve4DtTJSliYWSKVgJlOirVbRuilblYHy7gfYhfmCZ388X1mncZHYitc0doZS0W2gfqR4szkNRiY+SAVvrK6owtb6rc15cxooojR95ZaysW2XdO/7xBrlXzziVTsex3g1Y2BkOQd6KPU7TQyDXgQtYi2kKwjMJaRAtIAfb0GFejp1LVJIY9NWM5aEGCVZQVYx/5KlnXWpBCXOGTEtFyfEIqAV8rrIJFJVcVe00qS9h0JpUJ176QK2B5tHNkRHtSmkv3EC8JjI1i6R1CEan1wNGevsCuV1IbtBl56iEiuA1w22LmVZYZRTcHrUwrAWopLNtY3uZ0qp+003RHWuoIWpoZadnDthHpuYfQkGSkJ4R1un+9zKH0tSA9d9i3I12vitDYvz/1zZ4RaYsHa3wofyV9KRj0yMDsBX8TTc1+BRzmZGS8O+BRk7+VZOQrOKRkbBbMh+swQrXO97c7mSoisKhJWIDf+fTm3jt9MBmTqB647EnUEVyaggQtT2DzRoL24BPGJObSgNGAxGzBKSE26uaRn0HxDbxGJCMOocBXPPUiO1HeEu9uyD9GiT9T1k9JTOyKFAJu9CG/Pn5WEbeywYe8yrjmkJGWxCqDgi/rkgWknDIy48YXEhR73lTc+WaFRgPLr+TkveoxKvryXReN/ZoeVBxUr3T6O9J/GhKHOIEW57PgHeSFBVmXncBH3Xr3oNir8Uq1vyHkl+pCVmURdLn9cPVhwt1MZYvnCUsfuiGyaXA8wlNdfWgi6GjGvuZYvzuQDYUDJ15s/Vqmf+y08TekP6pKaqnnxPkjwILaKZw5cyjwf4D8dOpRCze4Iyl8zHntpioXl45/AhA4+aHlTzjd3exCmwuXfqZYdpKusZMHI+7JVLyGk85kaAo3NRkZqeGqUUEGNk5FwkfD2PeBbvzdbCodi+ifbgAN4bjaz8zkT9HG9aqirnDsyBk8ApPw3eGJ93ESduOcKu5JuHSm1tDurfFLHx650Udi5wPIo9rfAPLoNPMrczcNjCv4J+35UGrQkWZuFt3NVWN6MICvHo+yvMJfSfl/XMf7Y1LPJ3itX9APr54kvKormXl/HT+T+k2D/8CwmP0X1wE4WuHtdDqdTqfT6ej6Bs4eXEJ5rLARAAAAAElFTkSuQmCC", !0);
                        case 12:
                            return o = t.sent,
                            p = new f(o),
                            t.next = 16,
                            Object(l["a"])("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAflBMVEUAAACZmZmZmZmWlpaZmZmZmZmYmJiYmJiZmZmYmJiYmJiYmJiZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYmJiampqZmZmZmZmZmZmZmZmampqXl5eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmampqYmJiZmZmZmZmZmZmZmZnsga6KAAAAKXRSTlMAwLcF+/BiCalysHzq1DQty3bYhYIM9+QYjyEU3KFORziYa0EoikpZUhOjRlgAAATASURBVHja7d2JspowGIbhT0LYRVRQxH3psf/932Dt6UyXacuSBPzD8NzBO4eYkOEkmEwmk8lkMplMJtr8x9nLj87sxQmuuzj0vt4fPmxSneIok/RPMgviUwX2RBpGkhrJKEwFuBKXpbOh1mTwLMBQepXUlevcSrCyX65IURbuwYQ4RS5pcKMTh/FShFvStg19vNd+LckIud7jffxYkjEy9vEewkvIqMTDO3ysyLj5B4a2mFEvZgsMSeQu9cTNBQZzWVGPVimG4e9c6pW78zGAy4F6d7igd7lLA3Bz9EsENJBAoEf7jAaT7dGbxZYGtF2gJ88NDWrzRC/WNLg1erCjN9iNpKOHki/0Jl9gVExvE8OgG73RDcZ4pGSTHcgED4acXVIwOwmgOBlocc8wIlWZBzcefihmpG2TwoBKkoJfk7IwUCIraPNXpMDBL/sNaVv50BWRirvpOSiCppBUyD8HGRkQQsvDJRUz/K4gA9wHNIg5KXHwBzJhLrRW7nxCdNb0qcspxE2hyD8QpxD1h+tKvEJoCSV34hbiVlAxZxeiNi16xC+E7uhMbDmGHAS6WhLHkO4rlSLhGZL46CYmniFdf4ILyTVEFh1HCNeQbqNEJHxDEtFpDuEbQh7aW3EOWXVZZXEO6TC9B7xDArRUurxD3LL1ZMg7hGK0c+AeMkcrC+IeQg+0kfMPydHGin/IHC1UxD+EKjS72RDioZljQ0iARr5rQ4hEowvZEEILNFnaEXJDk8iOkABNEjtCEjQoyY4QKlHvbEvIGfWWtoSEqHe0JeSIepktIRnqJbaEJKglyJYQ8lFnYU/IAnU+7An5QB3PnhAPdUJ7QkLU+WJPyBp1rvaEXFHnaE/IEXUCe0IC1InsCYlQx7EnxBnmL6KpPOeS6kVWhLyUjs4YCfiEAEeNkCOnEHFQ//m9cgqBpz4hrlmFFOpLlJBVCKTyotEjI2YwY0v/9xzixWo+wKP1McSrLpUwwVN/1fXp7Z9/t/2sUrTYDmLyz0RfdHaxMzJDnqAr1tqgO5Ipx4WAhkumt2W6JHM22UzZXHcT+0yWOKNeSZYo0SAhKyRoEpAVIt7/KG3y698FWeGCRpIs4PoYxyBxWi05LXBDs4osUKKFObE3Rxs5sZfjZQw/wAu0siLmDvxPc2knbv+RP2tuiU/Wz4kBfrL77eqOT9ZPJT8nEduXKR7aE4zfE7cCHSyJrSW6KNi+lcjCmiPOzJ77UDAdJYmPlxGMkqXKnj5DW4HOTsTQEwocYmcOFdWGuLnjk/XjfQc1gtna8eBDUcrqDctN8S/2bajkeBnBwzUX0PBg83B9HqZn67myRs+YjYiFCLp8Ftt1Kx/aKgbvWLKCAenblyqbFEacXdLA5+Dit+8OeTAmpPY4d4znuPXxHIA/nisJ2n2kbUPHeK7tAL4OfZHKV9SZrrYZ0WVD47n+aTwXco3oirTxXFr3ko7jGsEXse7vYse1QGfTVZsjuvy0n+toBZRNFwSP6srmEV2iPaJrzT/tlxkpWi33YKW8OS51Ja8XMFQ8A9khwokvbB6pv4g0jGSLiChM+Ub8VJ3iKJP/SciC+FTBJsXj/tUL8y/XYPadc8y984PDr+xkMplMJpPJZGK7bwplNvWvCigIAAAAAElFTkSuQmCC", !0);
                        case 16:
                            c = t.sent,
                            m = new f(c),
                            i.href ? (u = new w({
                                text: "    ".concat(i.addr || "", "^    ").concat(i.time || ""),
                                color: "#666",
                                size: 58,
                                lineHeigth: 100,
                                top: s.height - 180,
                                left: r + 20
                            }),
                            s.push(u),
                            p.resize(u.size + 5),
                            p.top = s.height - 2.5 * u.size - 86,
                            p.left = r,
                            s.push(p),
                            m.resize(u.size),
                            m.top = s.height - u.size - 70,
                            m.left = r,
                            s.push(m)) : (d = new w({
                                text: "    ".concat(i.addr || "", "        ").concat(i.time || ""),
                                color: "#666",
                                size: 58,
                                width: a.width,
                                top: s.height - 60,
                                left: r,
                                align: "right"
                            }),
                            s.push(d),
                            p.resize(d.size + 5),
                            p.top = s.height - d.size - 54,
                            p.left = h.width - r - d.texts[0].width(),
                            s.push(p),
                            y = i.time.length,
                            m.resize(d.size),
                            m.top = s.height - d.size - 52,
                            m.left = h.width - r - (10 === y ? 366 : 700),
                            s.push(m));
                        case 19:
                            return i.href && (v = new f(i.qrImage),
                            v.resize(300, 300),
                            v.top = r + a.height + 50,
                            v.left = 1200,
                            s.push(v),
                            b = new w({
                                text: "长按识别二维码进入图片直播",
                                lineWidth: 3,
                                size: 46,
                                width: 330,
                                color: "#666",
                                top: r + a.height + 410,
                                left: 1184,
                                align: "center"
                            }),
                            s.push(b)),
                            t.abrupt("return", s);
                        case 21:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function(e, i) {
                return t.apply(this, arguments)
            }
        }()
          , _ = (i("6c7b"),
        function t(e) {
            var i = this;
            Object(p["a"])(this, t),
            this.color = e.color || "#000",
            this.lineWidth = e.lineWidth || 2,
            this.point = e.point || [],
            this.fill = !!e.fill,
            this.shrink = function(t) {
                for (var e = 0, s = i.point.length; e < s; e++)
                    i.point[e].x = parseInt(i.point[e].x * t),
                    i.point[e].y = parseInt(i.point[e].y * t)
            }
            ,
            this.draw = function(t) {
                t.beginPath(),
                t.moveTo(i.point[0].x, i.point[0].y);
                for (var e = 1, s = i.point.length; e < s; e++)
                    t.lineTo(i.point[e].x, i.point[e].y);
                i.fill ? (t.fillStyle = i.color,
                t.fill()) : (t.strokeStyle = i.color,
                t.lineWidth = i.lineWidth,
                t.stroke())
            }
        }
        )
          , k = function() {
            var t = Object(n["a"])(regeneratorRuntime.mark((function t(e, i) {
                var s, r, a, n, o, p, m, u, d, y, v;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            return s = new g({
                                background: "#F8FEFF"
                            }),
                            r = 1234,
                            a = 650,
                            i.title && (n = new w({
                                text: i.title,
                                color: "#2C6E81",
                                size: 78,
                                width: 1060,
                                bold: !0,
                                lineHeight: 89,
                                top: 250,
                                left: (h.width - r) / 2
                            }),
                            n.texts.forEach((function(t) {
                                s.push(t)
                            }
                            ))),
                            (i.addr || i.time) && s.push(new w({
                                text: "".concat(i.addr || "", " ").concat(i.time || ""),
                                color: "#2C6E81",
                                size: 50,
                                width: r,
                                top: a - 38,
                                left: (h.width - r) / 2,
                                align: "right"
                            })),
                            o = new f(e[0]),
                            o.resize(r),
                            o.top = a,
                            o.left = (h.width - r) / 2,
                            s.push(o),
                            s.push(new _({
                                color: "#80BECE",
                                point: [{
                                    x: 102,
                                    y: 0
                                }, {
                                    x: 102,
                                    y: 1035
                                }]
                            })),
                            s.push(new _({
                                color: "#80BECE",
                                point: [{
                                    x: 0,
                                    y: 1238
                                }, {
                                    x: 142,
                                    y: 1090
                                }]
                            })),
                            s.push(new _({
                                color: "#80BECE",
                                point: [{
                                    x: 102,
                                    y: 1220
                                }, {
                                    x: 102,
                                    y: a + o.height + 165
                                }, {
                                    x: 1498,
                                    y: a + o.height + 165
                                }, {
                                    x: 1498,
                                    y: a + o.height + 58
                                }]
                            })),
                            s.push(new _({
                                color: "#80BECE",
                                point: [{
                                    x: 1430,
                                    y: a + o.height + 42
                                }, {
                                    x: h.width,
                                    y: a + o.height - 110
                                }]
                            })),
                            s.push(new _({
                                color: "#80BECE",
                                point: [{
                                    x: 1490,
                                    y: 394
                                }, {
                                    x: 1490,
                                    y: a + o.height - 130
                                }]
                            })),
                            s.push(new _({
                                color: "#80BECE",
                                point: [{
                                    x: 1365,
                                    y: 276
                                }, {
                                    x: h.width,
                                    y: 42
                                }]
                            })),
                            s.push(new _({
                                color: "#80BECE",
                                point: [{
                                    x: 1338,
                                    y: 368
                                }, {
                                    x: h.width,
                                    y: 106
                                }]
                            })),
                            t.next = 19,
                            Object(l["a"])("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAAEECAYAAAAs1FFzAAAKBUlEQVR4nO3dx3Jcxx2F8XMHiV5IpB7MNuRMJznQOcqBCi/gLMk5ypJzzjm+ib30wiuXWYIJEiC9IEES4IQbzu3uf/f3W2PunAX6q0Jjqqb71+HhZQFnnNve0vZiMeg112/c0OHR8UyLsMp21/3nRTvb/5z4mIPuHy8c3LQsQjUe3NvR3tbWoNccHB3rhWvXZ1qEVRZdp4f2drW16KY85kDSi4elH9UjBHEYQ/ASSX8nBrjjwV1CEIU5BH+TJGIASbdDsE0IIpgjBBIxgMaF4CohyGKuEEjEoHljQ3CFECRnDMFLdSYEEjFoGiGIwxyCvy59jylPRlyEII4UIZCIQZMIQRypQiARg+YQgjiMIdjXhhBIxKAphCAOcwj+0us9p7wT4iAEceQIgUQMmkAI4sgVAokYVI8QxGEMwcMaGAKJGFSNEMRhDsGfR22Y8s4oFyGIo4QQSMSgSoQgDlMI/qeJIZCIQXUIQRzGEOz/++DqpBBIxKAqhCCO0kIgEYNqEII4SgyBRAyqQAjiKDUEEjEIjxDE4bwsdIdAIgahEYI4zCH4k2nWKcQgKEIQR4QQSMQgJEIQhykEVzVzCCRiEA4hiGPRdbrgCcH+3CGQiEEohCCOkxBsBwmBRAzCeIAQhBExBBIxCOGB3R2dIwQhRA2BRAyKRwjiMIZg9svCZYhBwQhBHOYQ/NE0axBiUChCEEcNIZCIQZEIQRymEBwqcwgkYlAcQhCHMQT7uUMgEYOiEII4aguBRAyKQQjiqDEEEjEoAiGIo9YQSMQgO0IQR02XhcsQg4wIQRzmEPzBNMuKGGRCCOJoIQQSMciCEMRhCsE1FR4CiRgkRwjiMIZgv/QQSMQgKUIQR2shkIhBMoQgjhZDIBGDJAhBHK2GQCIGsyMEcbR0WbgMMZgRIYjDHILfm2YlRQxmQgjiIAS3EIMZEII4CMFdxMCMEMRhDMHLoodAIgZWhCAOcwh+Z5qVFTEwIQRxEILliIEBIYiDEKxGDCYiBHHcCsGOIwQvry0EEjGYhBDEcTcEk37lT0LwW9OsohCDkQhBHISgH2IwAiGIgxD0RwwGIgRxGEPwitpDIBGDQQhBHOYQ/MY0q2jEoCdCEAchGIcY9EAI4iAE4xGDDQhBHMYQvLK1EEjEYC1CEIc5BL82zQqFGKxACOIgBB7EYAlCEEdHCGyIwRljQnBICLLouk4PeULwqtZDIBGDU/a2t0aF4L+EIDlzCH5lmhUaMbjH4dGxrh4dD/p5QpAeIZgHMTjjyrXrvYJACPIwhuDVhOA0YrDEpiAQgjzMIfilaVY1iMEKq4JACPIgBPMjBmucDQIhyIMQpLGde0DpTv5l2EmEIANCkA4x6IHPEORhDMFrCMFm/JmAIplD8AvTrKoRAxSHEORBDFAUYwguEoJhiAGKYQ7Bz02zmkEMUARCkB8xQHaEoAzEAFkRgnIQA2RjDMFrCcF0xABZmEPwM9OsphEDJEcIykQMkJQpBNdFCOyIAZIxhuAiIfAjBkiCEJSPGGB2hCAGYoBZdZ0IQRDEALO5FYJdLguDIAaYhTkEPzXNwhrEAHaEICZiACtTCI5ECJIjBrAxhuAiIUiPGMCCEMRHDDAZIagDMcAkhKAexACjcVlYF2KAUcwh+IlpFiYgBhiMENSJGGCQrpMuTA/BsQhBcYgBejsJwc70EFwkBOUhBuiFENSPGGAjQtAGYoC1CEE7iAFWMoaAy8IAiAGWMofgx6ZZmBExwH0IQZuIAU4hBO0iBrjDGILXEYJ4iAEk2UPwI9MsJEQMQAggiRg0jxDgBDFomDEErycE8RGDRplD8EPTLGREDBpECLAMMWgMIcAqxKAhxhC8gRDUhxg0whyCH5hmoSDEoAGEAH0Qg8oRAvRFDCpmDMEbCUH9iEGlzCH4vmkWCkYMKkQIMAYxqAwhwFjEoCLGEDxCCNpDDCphDsH3TLMQCDGoACGAAzEIzhiCNxGCthGDwMwh+K5pFoIiBkERArgRg4A6EQL4EYNgOkkXzhEC+BGDQIwheDMhwFnEIAhzCL7jWYWaEIMACAFSIAaFM4bgLYQA6xCDgplD8G3PKtSKGBSKECA1YlAgQoAciEFhCAFyIQYFMYbgrYQAQxGDQphD8C3PKrSEGBSAEKAExCAzYwguEQJMQQwyMofgecsoNIsYZEIIUBpikAEhQImIQWKEAKUiBgkZQ/A2QgA3YpCIOQTPeVYBdxGDBAgBIiAGMzOF4IYIAWZGDGZkDMElQoC5EYOZEAJEQwxmQAgQETEwM33BCSFAcsTA6E4ItrgsRDzEwMQcgm96VgH9EQMDQoAaEIOJTCG4KUKAzIjBBMYQXCIEyI0YjEQIUBtiMAIhQI2IwUCEALUiBgNwWYiaEYOezCF41rMK8CEGPXSSzhMCVI4YbHASgl1CgMoRgzWMIXg7IUDpiMEK5hB8w7MKmA8xWIIQoEXE4AxCgFYRg3sYQ/AOQoBoiMFt5hB83bMKSIcYiBAAEjEgBMBtTcfAGIJ3EgJE12wMzCH4mmcVkE+TMSAEwP2aiwEhAJZrKgbGELyLEKA2zcTAHIKvelYB5WgiBoQA2Kz6GBACoJ+qY2AMwbsJAWpXbQzMIfiKZxVQripjQAiA4aqLgTEE7yEEaElVMTCH4MueVUAM1cSAEADTVBEDQgBMFz4GhADwCB0DYwjeSwjQurAxMIfgS55VQFwhY0AIAL9wMTCG4H2EALgrVAzMIfiiZxVQhzAxIATAvELEgBAA8ys+BoQASKPoGBhD8H5CAKxXbAzMIfiCZxVQryJjQAiA9IqLgTEEHyAEQH9FxcAcgs97VgFtKCoGhADIp5gYXCAEQFZFxIAQAPllj4EpBB8kBMA0WWNgDMHnTJOAZmWLASEAypIlBqYQPEoIAJ/kMTCG4LOmSQCUOAaEAChXshgQAqBsSWJACIDyzR4DUwg+RAiAec0aA2MInjFNArDCbDEgBEAss8TAEAKJEABJ2WNgCsGjhABIyxoDQgDEZYsBIQBis8SAEADxTT7BXBYCdZh0io0heHrqQwBMM/okEwKgLqNOMyEA6jP4RJtC8GFCAJRl0Kk2huCpqQ8B4NX7ZBu+4EQiBECxep3u83u72iMEQNU2nnBTCD5CCICyrT3l5/d2XCH4zNSHAJjXypN+KwRbU59PCIAglsaAEADtuS8GphB8lBAAsZyKgTEEn576EABp3YkBIQDatpBsIbhMCIC4FsYQfMoxCEAeC0IAQJK6Kzdv3Jzw+suSCAFQgSkfLyQEQEXGxuAxEQKgKmNi8JikT7qHAMhraAwIAVCpITF4XIQAqFbfGDwu6RNzDgGQV58YEAKgAZtiQAiARqyLASEAGrIqBk+IEABNWRaDJyR9PPUQAHmdjQEhABp1bwyeFCEAmnUSgyclfSznEAB5LUQIAEj6P0cxc39wmsevAAAAAElFTkSuQmCC", !0);
                        case 19:
                            return p = t.sent,
                            m = new f(p),
                            m.resize(218, 218),
                            m.top = a - 1,
                            m.left = o.left,
                            s.push(m),
                            t.next = 27,
                            Object(l["a"])("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB9CAYAAABgQgcbAAAEcklEQVR4nO3dy24cRRiG4dcWIhAIiBW5Bja1STifKpx8QXUZ3ARXgB3bmSQgIS4BEdsJJAhipAQSMFgCwiLTbHpCezzu6nGf6vC9218z+qVH1V2rmZXDYorKpldWx95ADdYa8JnA82gNWAfOCDz9nmADCDztjmCDwFNuDficCjYIPNVm2M/MD56q+9SnX33T10Kqp5w1J2KDTnhS+bDBc8JVPDlrPqEG+/G04Os7984LPIFK7HVqsDdu/MjBP/+e0yM98ppi//DbIaB3eNQtiw0Cj7Ym7+x5bBB4lFWwn100fzwt2Ng5jg0Cj67G2A+PY4PAo6otNgg8mpw1H+PBvrzzUy02CDyKSux1PNh3Hv7p/S6BB16X2CDwoOsaGwQebH1gg8CDrOkFbVlsEHhwVbDPLpq3wQaBB1Xf2CDwYHLWfETP2CDwICqx16nB3uwAGwQ+ek2xb3eADQIftaGxQeCjNQY2CHyUnDUf4sPe7R4bBD54JfYGPuwH3WODwAdtbGwQ+GCFgA0CHyRnzQd4sLcGwAaB916JfRkP9vcDYIPAey00bBB4b4WIDQLvpVCxQeCd56y5hBf77ijYIPBOK7E38WL/MexilQTeUTFgg8A7yVljqcGeFmFgg8BbV2JvUYO9uRMGNgi8VbFhg8BPXYzYIPBTFSs2CHzpnDXv48HeDhQbBL5UJfY2HuxbgWKDwBuXAjYIvFGpYIPAvTlr3iMRbBB4bSX2FRLBBoGfWIrYIPCFpYoNAj9Wytign88+krPmXTzYW7t3+S5SbNAJf1KJPcGH/Wu82CBwIB9sELgXu0gIGzIH972zi6JgMyFsyBi8gv3conmK2JApeK7YkCF4ztiQGbiz5h0yxoaMwEvsCRljQybgwv6/5MGFfbSkwYV9vGTBm1zQtjPDhkTBK9jPL5rPsG9mhg0Jggu7vqTAnTVv48XezxYbEgIvsSd4sQ+GXSywkgAXdvOiBxf2ckUNLuzlixa8yQXtyp6w54sSvIJ9btF8hr33i7Dniw5c2O2KClzY7YsG3FnzFsJuXRTgJfYEYbcueHBhd1vQ4MLuvmDBm2BPhL10QYI3uaBN9vbZFfbSBQdewX5h0VzY7QoKXNj9Fwy4s+ZNhN17QYCX2BOE3Xujgwt72EYFF/bwjQYu7HEaBbzJBe3qzZ+F3UODg1ewX1w0n2Hv3P992MUyaVBwYY/fYODCDqNBwJ01byDsIOodvMSeIOwg6hVc2OHVG7iww6wXcGGHW+fgzprXEXawdQpeYl9F2MHWGbiw46gTcGfNa3iwrwk7iFqDl9jX8GDfEHYQtQIXdnydGlzYcXYqcGHH29LgzppX8WHfEnaoLQVeYl/Hh31P2KHWGFzYadQI3I+NsCPJC+6suYgXe1/YkbRyWEzr5heBLxB2Er109syjuhMu7AQ7CVzYibYI/AIe7OvCjrZ58AvAl3iwvxV2tFXBhZ1BM3BhZ9IqHmwQdkqtHBbT85zw/9kAD/569PTu/YOXB9xJ9dTqysrf/wGwdoXofY2vYwAAAABJRU5ErkJggg==", !0);
                        case 27:
                            return u = t.sent,
                            d = new f(u),
                            d.resize(109, 109),
                            d.top = a + o.height - d.height + 1,
                            d.left = o.left + o.width - d.width,
                            s.push(d),
                            s.height = a + o.height + 167,
                            i.href && (s.push(new _({
                                color: "#DBF5F6",
                                point: [{
                                    x: 486,
                                    y: a + o.height + 167 + 597
                                }, {
                                    x: 486,
                                    y: a + o.height + 167 + 670
                                }, {
                                    x: 1113,
                                    y: a + o.height + 167 + 670
                                }, {
                                    x: 1113,
                                    y: a + o.height + 167 + 597
                                }],
                                fill: !0
                            })),
                            s.push(new _({
                                color: "#74BECE",
                                point: [{
                                    x: 1084,
                                    y: a + o.height + 167 + 672
                                }, {
                                    x: 1116,
                                    y: a + o.height + 167 + 672
                                }, {
                                    x: 1116,
                                    y: a + o.height + 167 + 640
                                }],
                                fill: !0
                            })),
                            y = new f(i.qrImage),
                            y.resize(448, 448),
                            y.top = a + o.height + 167 + 111,
                            y.left = (h.width - y.width) / 2,
                            s.push(y),
                            v = new c({
                                text: "长按识别二维码进入图片直播",
                                lineWidth: 3,
                                size: 42,
                                color: "#333",
                                top: a + o.height + 167 + 648,
                                left: 530
                            }),
                            s.push(v),
                            s.height += 652),
                            s.height += 235,
                            t.abrupt("return", s);
                        case 37:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function(e, i) {
                return t.apply(this, arguments)
            }
        }()
          , A = function() {
            var t = Object(n["a"])(regeneratorRuntime.mark((function t(e) {
                var s, r, a, n, o;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            return s = new g,
                            t.next = 3,
                            Object(l["a"])(i("27ab"), !0);
                        case 3:
                            return r = t.sent,
                            a = new f(r),
                            a.resize(h.width),
                            s.push(a),
                            s.height += a.height,
                            e.forEach((function(t) {
                                var e = new f(t);
                                e.resize(parseInt(.926 * h.width)),
                                e.left = parseInt(.037 * h.width),
                                e.top = s.height,
                                s.push(e),
                                s.height += e.height
                            }
                            )),
                            t.next = 11,
                            Object(l["a"])(i("a55a")("./onetext-".concat(parseInt(5 * Math.random()) + 1, ".png")), !0);
                        case 11:
                            return n = t.sent,
                            o = new f(n),
                            o.resize(h.width),
                            o.top = s.height,
                            s.push(o),
                            s.height += o.height,
                            t.abrupt("return", s);
                        case 18:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function(e) {
                return t.apply(this, arguments)
            }
        }()
          , S = {
            vertical: y,
            grid: v,
            poster: b,
            block: x,
            alibaba20th: E,
            oneClassic: C,
            onePoster: k,
            oneAlibaba20th: A
        }
          , P = function(t, e, i) {
            return S[t](e, i)
        }
          , T = function(t, e) {
            var i = 8e6;
            return t * e <= i ? 1 : parseFloat(Math.sqrt(i / t / e).toFixed(2) - .01)
        }
          , I = i("4a37")
          , D = i.n(I)
          , M = {
            name: "jigsawMap",
            props: {
                photoList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                info: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                pattern: {
                    type: String,
                    default: "vertical"
                }
            },
            data: function() {
                return {
                    requirePhotos: [],
                    state: 0,
                    loadIndex: 0
                }
            },
            mounted: function() {
                this.start()
            },
            methods: {
                requireSrcs: function(t) {
                    if ("object" === Object(o["a"])(t[0])) {
                        var e = [];
                        return t.forEach((function(t) {
                            e.push(t.osrc || t.src || t.msrc)
                        }
                        )),
                        e
                    }
                    return t
                },
                start: function() {
                    var t = Object(n["a"])(regeneratorRuntime.mark((function t() {
                        var e, i, s, r, n, o, p = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.requirePhotos = this.requireSrcs(this.photoList),
                                    "gif" !== this.pattern) {
                                        t.next = 6;
                                        break
                                    }
                                    this.state = 2,
                                    this.$API.gifJigsaw(this.requirePhotos.join(";"), this.info.gifMod).then((function(t) {
                                        0 === t.e && p.checkGif(t.d.uuid)
                                    }
                                    )),
                                    t.next = 31;
                                    break;
                                case 6:
                                    return e = this.createCanvas(),
                                    this.state = 0,
                                    t.t0 = a["a"],
                                    t.next = 11,
                                    this.load(this.requirePhotos);
                                case 11:
                                    if (t.t1 = t.sent,
                                    i = (0,
                                    t.t0)(t.t1),
                                    s = Object.assign({}, this.info),
                                    !s.href) {
                                        t.next = 19;
                                        break
                                    }
                                    return s.href = this.info.href,
                                    t.next = 18,
                                    Object(l["a"])(D.a.getQrBase64(s.href, {
                                        correctLevel: window.QRErrorCorrectLevel.M,
                                        width: h.qrSize,
                                        height: h.qrSize,
                                        foreground: "#333"
                                    }), !1);
                                case 18:
                                    s.qrImage = t.sent;
                                case 19:
                                    return this.state = 1,
                                    t.next = 22,
                                    P(this.pattern, i, s);
                                case 22:
                                    r = t.sent,
                                    n = T(r.width, r.height),
                                    r.shrink(n),
                                    this.state = 2,
                                    this.resizeCanvas(e, r),
                                    o = e.getContext("2d"),
                                    r.draw(o),
                                    this.state = 3,
                                    this.export(e.toDataURL("image/jpeg"));
                                case 31:
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
                load: function() {
                    var t = Object(n["a"])(regeneratorRuntime.mark((function t(e) {
                        var i, s, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    i = [],
                                    s = 0;
                                case 2:
                                    if (!(s < e.length)) {
                                        t.next = 17;
                                        break
                                    }
                                    return t.prev = 3,
                                    this.loadIndex++,
                                    t.next = 7,
                                    Object(l["a"])(e[s], !0);
                                case 7:
                                    r = t.sent,
                                    i.push(r),
                                    t.next = 14;
                                    break;
                                case 11:
                                    t.prev = 11,
                                    t.t0 = t["catch"](3),
                                    window.$notify(this.$t("album.jigsaw.loadDefeatRemoveImg"));
                                case 14:
                                    s++,
                                    t.next = 2;
                                    break;
                                case 17:
                                    return t.abrupt("return", i);
                                case 18:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[3, 11]])
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                createCanvas: function() {
                    var t = document.createElement("canvas");
                    return t.getContext ? t : (alert(this.$t("album.jigsaw.notSupportJigsaw")),
                    void this.close())
                },
                resizeCanvas: function(t, e) {
                    t.width = e.width,
                    t.height = e.height
                },
                checkGif: function(t) {
                    var e = this;
                    this.$API.checkGifJigsaw(t).then((function(i) {
                        0 === i.e && (0 === i.d.status && setTimeout((function() {
                            e.checkGif(t)
                        }
                        ), 2e3),
                        1 === i.d.status && (e.state = 3,
                        e.export(i.d.url)))
                    }
                    ))
                },
                export: function() {
                    var t = Object(n["a"])(regeneratorRuntime.mark((function t(e) {
                        var i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Object(l["a"])(e, !1);
                                case 2:
                                    i = t.sent,
                                    i.className = "download component-jigsaw-jigsawMap-image",
                                    document.getElementsByClassName("component-jigsaw-jigsawMap")[0].appendChild(i),
                                    this.state = 4;
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
                close: function() {
                    this.$emit("close")
                }
            }
        }
          , F = M
          , B = (i("6202"),
        i("2877"))
          , L = Object(B["a"])(F, s, r, !1, null, null, null);
        e["a"] = L.exports
    },
    6202: function(t, e, i) {
        "use strict";
        var s = i("47be")
          , r = i.n(s);
        r.a
    },
    "655b": function(t, e, i) {
        t.exports = i.p + "img/directions.0dc41696.png"
    },
    "660c": function(t, e, i) {},
    6937: function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return r
        }
        ));
        var s = i("d225")
          , r = function t(e) {
            Object(s["a"])(this, t),
            this.id = e.fid,
            this.photoId = e.ids,
            this.definition = e.idx,
            this.url = e.fu,
            this.height = e.fh,
            this.width = e.fw,
            this.x = e.fx,
            this.y = e.fy
        }
    },
    "6c7b": function(t, e, i) {
        var s = i("5ca1");
        s(s.P, "Array", {
            fill: i("36bd")
        }),
        i("9c6c")("fill")
    },
    "6cce": function(t, e, i) {},
    "6e02": function(t, e, i) {
        "use strict";
        var s = i("7618")
          , r = function(t) {
            if (!t)
                return "";
            var e = "?x-oss-process=image/resize";
            for (var i in t)
                "h" !== i && "w" !== i || (t[i] = parseInt(t[i])),
                e += ",".concat(i, "_").concat(t[i]);
            return e + "/interlace,1"
        };
        e["a"] = function(t, e) {
            if ("object" === Object(s["a"])(e))
                return t ? t + r(e) : "../assets/default.jpg".concat(r(e));
            console.warn("图片裁剪格式出错:", t, e)
        }
    },
    "75fc": function(t, e, i) {
        "use strict";
        var s = i("a745")
          , r = i.n(s);
        function a(t) {
            if (r()(t)) {
                for (var e = 0, i = new Array(t.length); e < t.length; e++)
                    i[e] = t[e];
                return i
            }
        }
        var n = i("774e")
          , o = i.n(n)
          , h = i("c8bb")
          , l = i.n(h);
        function p(t) {
            if (l()(Object(t)) || "[object Arguments]" === Object.prototype.toString.call(t))
                return o()(t)
        }
        function c() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
        function m(t) {
            return a(t) || p(t) || c()
        }
        i.d(e, "a", (function() {
            return m
        }
        ))
    },
    "774e": function(t, e, i) {
        t.exports = i("d2d5")
    },
    "7b5b": function(t, e, i) {},
    "7c35": function(t, e, i) {},
    "7f0b": function(t, e, i) {},
    8188: function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return o
        }
        ));
        var s = i("7618")
          , r = i("d225")
          , a = i("b0b4")
          , n = i("d18c")
          , o = function() {
            function t(e) {
                Object(r["a"])(this, t),
                this.id = e.pc,
                this.pgId = e.pg,
                this.userId = e.pguid,
                this.plannerid = e.plannerid,
                this.choice = !!e.choice,
                this.fileName = e.n || "",
                this.date = e.time ? Object(n["a"])(new Date(e.time), "YYYY-MM-DD hh:mm:ss") : "未知",
                this.timeStamp = e.time,
                this.delete = !1,
                this.isLike = !1,
                this.likeNum = 0,
                this.isCollection = !1,
                this.isBuy = !1,
                this.width = e.w,
                this.height = e.h,
                this.desc = e.desc,
                this.lng = e.lon,
                this.lat = e.lat,
                this.width > 2048 && (this.height = Math.round(2048 / this.width * this.height),
                this.width = 2048),
                this.height > 2048 && (this.width = Math.round(2048 / this.height * this.width),
                this.height = 2048)
            }
            return Object(a["a"])(t, [{
                key: "setAttr",
                value: function(t, e) {
                    if ("string" === typeof t && (this[t] = e),
                    "object" === Object(s["a"])(t))
                        for (var i in t)
                            this[i] = t[i]
                }
            }]),
            t
        }()
    },
    "81cd": function(t, e, i) {
        t.exports = i.p + "img/text-5.542b8ab2.png"
    },
    "83a8": function(t, e, i) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "album-component-photoInfo"
            }, [i("div", {
                staticClass: "tool-close album-component-photoInfo-open",
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        t.show = !0
                    }
                }
            }, [i("i", {
                staticClass: "iconfont icon-pictureInfo"
            })]), i("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.show ? i("section", {
                staticClass: "tool-layout album-component-photoInfo-layout",
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        t.show = !1
                    }
                }
            }, [t.slotProps.photo.oSize ? i("p", {
                staticClass: "album-component-photoInfo-row"
            }, [i("span", {
                staticClass: "album-component-photoInfo-name"
            }, [t._v(t._s(t.$t("album.exif.fileSize")))]), t._v(t._s(t.slotProps.photo.oSize))]) : t._e(), t.slotProps.photo.date ? i("p", {
                staticClass: "album-component-photoInfo-row"
            }, [i("span", {
                staticClass: "album-component-photoInfo-name"
            }, [t._v(t._s(t.$t("album.exif.shootingTime")))]), t._v(t._s(t.slotProps.photo.date))]) : t._e(), t.slotProps.photo.fileName ? i("p", {
                staticClass: "album-component-photoInfo-row"
            }, [i("span", {
                staticClass: "album-component-photoInfo-name"
            }, [t._v(t._s(t.$t("album.exif.number")))]), t._v(t._s(t.slotProps.photo.fileName))]) : t._e(), t.album.isPhotographer && t.slotProps.photo.pgId && t.photographer ? i("p", {
                staticClass: "album-component-photoInfo-row"
            }, [i("span", {
                staticClass: "album-component-photoInfo-name"
            }, [t._v(t._s(t.$t("album.exif.Photographer")))]), t._v(t._s(t.photographer.nick))]) : t._e(), t.album.isPlanner && t.slotProps.photo.plannerid && t.planner ? i("p", {
                staticClass: "album-component-photoInfo-row"
            }, [i("span", {
                staticClass: "album-component-photoInfo-name"
            }, [t._v(t._s(t.$t("album.exif.Retoucher")))]), t._v(t._s(t.planner.nick))]) : t._e(), t.slotProps.photo.id ? i("p", {
                staticClass: "album-component-photoInfo-row"
            }, [i("span", {
                staticClass: "album-component-photoInfo-name"
            }, [t._v(t._s(t.$t("album.exif.ID")))]), t._v(t._s(t.slotProps.photo.id))]) : t._e()]) : t._e()])], 1)
        }
          , r = []
          , a = {
            name: "photoInfo",
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                slotProps: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                planner: function() {
                    return this.album.findPlannerByUserId(this.slotProps.photo.plannerid)
                },
                photographer: function() {
                    return this.album.findPhotographer(this.slotProps.photo.pgId)
                }
            },
            data: function() {
                return {
                    show: !1
                }
            }
        }
          , n = a
          , o = (i("980d"),
        i("2877"))
          , h = Object(o["a"])(n, s, r, !1, null, null, null);
        e["a"] = h.exports
    },
    "842c": function(t, e, i) {
        "use strict";
        var s = i("660c")
          , r = i.n(s);
        r.a
    },
    8476: function(t, e, i) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                ref: "scroll",
                staticClass: "album-component-scroll",
                on: {
                    touchmove: function(t) {
                        t.stopPropagation()
                    }
                }
            }, [i("section", {
                staticClass: "album-component-scroll-list",
                style: {
                    minHeight: t.minHeight,
                    paddingBottom: t.bottomOffset
                }
            }, [t._t("default"), i("aside", [t._t("footer", [t.loadText ? i("span", {
                staticClass: "album-component-scroll-loading"
            }, [t._v(t._s(t.loadText))]) : t._e()])], 2)], 2)])
        }
          , r = []
          , a = (i("c5f6"),
        {
            name: "scrollList",
            props: {
                scroll: {
                    type: HTMLElement
                },
                loadText: {
                    type: String,
                    default: ""
                },
                loadOffset: {
                    type: Number,
                    default: window.outerHeight
                },
                bottomOffset: {
                    type: String,
                    default: "0"
                },
                minHeight: {
                    type: String,
                    default: "auto"
                }
            },
            data: function() {
                return {
                    scrollDom: null,
                    histroyScrollTop: 0,
                    lastY: 0,
                    debounceTimeout: null,
                    stopTimeout: null
                }
            },
            mounted: function() {
                clearTimeout(this.debounceTimeout),
                this.scrollElement.addEventListener("scroll", this.scrollEvent)
            },
            beforeDestroy: function() {
                this.scrollElement.removeEventListener("scroll", this.scrollEvent)
            },
            methods: {
                scrollEvent: function() {
                    var t = this;
                    this.debounceTimeout || (this.debounceTimeout = setTimeout((function() {
                        t.scrollCallback(),
                        t.debounceTimeout = null
                    }
                    ), 40),
                    this.stopTimeout && clearTimeout(this.stopTimeout),
                    this.stopTimeout = setTimeout((function() {
                        t.scrollCallback(),
                        t.$emit("scrollEnd"),
                        t.stopTimeout = null
                    }
                    ), 100))
                },
                scrollCallback: function() {
                    var t = this.getScrollTop();
                    this.$emit("scroll", t),
                    this.getDirection(t),
                    this.loadMore(t)
                },
                getScrollTop: function() {
                    var t = this.scrollElement;
                    return t.scrollTop || t.pageYOffset || t.lastChild && t.lastChild.scrollTop || 0
                },
                getDirection: function(t) {
                    this.scrollDirection = t > this.histroyScrollTop ? "top" : "down",
                    this.histroyScrollTop = t
                },
                scrollTo: function(t) {
                    this.scrollElement.scrollTop ? this.scrollElement.scrollTop = t : this.scrollElement.scrollTo(0, t)
                },
                scrollToA: function(t) {
                    var e = this;
                    Math.animation(this.getScrollTop(), t, 500, "Quart.easeInOut", (function(t) {
                        e.scrollElement.scrollTop ? e.scrollElement.scrollTop = t : e.scrollElement.scrollTo(0, t)
                    }
                    ))
                },
                loadMore: function() {
                    var t = this.scrollDom;
                    this.getScrollTop() + t.clientHeight >= t.scrollHeight - this.loadOffset && this.$emit("loadmore")
                }
            },
            computed: {
                scrollElement: function() {
                    return this.scrollDom = this.scroll || this.$refs.scroll,
                    "HTML" === this.scrollDom.nodeName ? window : this.scrollDom
                }
            }
        })
          , n = a
          , o = (i("d877"),
        i("2877"))
          , h = Object(o["a"])(n, s, r, !1, null, null, null);
        e["a"] = h.exports
    },
    8850: function(t, e, i) {
        "use strict";
        var s = i("7b5b")
          , r = i.n(s);
        r.a
    },
    8927: function(t, e, i) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "album-component-commentSend"
            }, [i("div", {
                staticClass: "album-component-commentSend-reply"
            }, [i("div", {
                staticClass: "album-component-commentSend-reply-container"
            }, [i("div", {
                staticClass: "album-component-commentSend-reply-container__input",
                on: {
                    click: t.showLayerHandle
                }
            }, [t._v(" " + t._s(t.commentTxt || t.$t("album.comment.add")))]), i("div", {
                staticClass: "album-component-commentSend-reply-container__submit",
                on: {
                    click: t.submitCommentHandle
                }
            }, [t._v(t._s(t.$t("album.comment.post")))])])]), t.isShowLayer ? i("div", {
                staticClass: "album-component-commentSend-layer"
            }, [i("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.commentTxt,
                    expression: "commentTxt"
                }],
                staticClass: "album-component-commentSend-layer__comment",
                attrs: {
                    active: "" === t.formVerify,
                    placeholder: t.placeholder,
                    maxlength: "120"
                },
                domProps: {
                    value: t.commentTxt
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.commentTxt = e.target.value)
                    }
                }
            }), i("div", {
                staticClass: "album-component-commentSend-layer-action"
            }, [i("div", {
                staticClass: "album-component-commentSend-layer-action__cancel",
                on: {
                    click: t.cancelLayerHandle
                }
            }, [t._v("\n        " + t._s(t.$t("album.comment.cancel")) + "\n      ")]), i("div", {
                staticClass: "album-component-commentSend-layer-action__submit",
                on: {
                    click: t.submitCommentHandle
                }
            }, [t._v("\n        " + t._s(t.$t("album.comment.post")) + "\n      ")])])]) : t._e()])
        }
          , r = []
          , a = (i("a481"),
        {
            props: {
                album: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                photoId: {
                    type: String,
                    default: "0"
                },
                commentReview: {
                    type: Boolean,
                    feault: !1
                }
            },
            data: function() {
                return {
                    commentTxt: "",
                    isShowLayer: !1,
                    parentId: 0,
                    isSending: !1,
                    placeholder: this.$t("album.comment.add")
                }
            },
            computed: {
                formVerify: function() {
                    var t = this.commentTxt
                      , e = "";
                    switch (!0) {
                    case "" === t:
                    case "" === t.replace(/^\s|\s$/g, ""):
                        e = "评论内容不能为空";
                        break
                    }
                    return e
                }
            },
            methods: {
                submitCommentHandle: function() {
                    var t = this;
                    if (this.isSending)
                        return !1;
                    if (this.isSending = !0,
                    !this.$userInfo().token)
                        return this.$login(this.album.isCustom);
                    var e = this.formVerify;
                    if ("" !== e)
                        return this.$notify(e);
                    this.$API.publishComment(encodeURIComponent(this.commentTxt), this.parentId, this.album.id, this.photoId).then((function(e) {
                        t.parentId = 0,
                        0 === e.e ? (t.isShowLayer = !1,
                        t.commentTxt = "",
                        t.placeholder = t.$t("album.comment.add"),
                        t.$notify(t.$t(t.commentReview ? "album.bigImageLayer.commentSuccess" : "album.bigImageLayer.commentWaitForReview")),
                        t.commentReview && t.$emit("flushComment")) : t.$notify(t.$t("album.bigImageLayer.commentFailed")),
                        t.isSending = !1
                    }
                    ))
                },
                cancelLayerHandle: function() {
                    this.isShowLayer = !1
                },
                showLayerHandle: function(t) {
                    var e = t.id
                      , i = void 0 === e ? 0 : e
                      , s = t.nick;
                    this.parentId = i,
                    this.placeholder = 0 === i ? this.$t("album.comment.add") : "".concat(this.$t("album.comment.reply"), "@").concat(s),
                    this.isShowLayer = !0
                }
            },
            watch: {
                isShowLayer: function() {
                    this.isShowLayer && !this.$userInfo().token && this.$login(this.album.isCustom)
                }
            }
        })
          , n = a
          , o = (i("317a"),
        i("2877"))
          , h = Object(o["a"])(n, s, r, !1, null, null, null);
        e["a"] = h.exports
    },
    "89a8": function(t, e, i) {
        "use strict";
        var s = i("f50f")
          , r = i.n(s);
        r.a
    },
    "8d8c": function(t, e, i) {
        "use strict";
        var s = i("ad51")
          , r = i.n(s);
        r.a
    },
    "8e6e": function(t, e, i) {
        var s = i("5ca1")
          , r = i("990b")
          , a = i("6821")
          , n = i("11e9")
          , o = i("f1ae");
        s(s.S, "Object", {
            getOwnPropertyDescriptors: function(t) {
                var e, i, s = a(t), h = n.f, l = r(s), p = {}, c = 0;
                while (l.length > c)
                    i = h(s, e = l[c++]),
                    void 0 !== i && o(p, e, i);
                return p
            }
        })
    },
    9400: function(t, e, i) {
        "use strict";
        var s = i("cc0d")
          , r = i.n(s);
        r.a
    },
    "94f1": function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        "undefined" !== typeof navigator && function(t, e) {
            __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return e(t)
            }
            .call(exports, __webpack_require__, exports, module),
            void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
        }(window || {}, (function(window) {
            "use strict";
            var svgNS = "http://www.w3.org/2000/svg", locationHref = "", initialDefaultFrame = -999999, subframeEnabled = !0, expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), cachedColors = {}, bm_rounder = Math.round, bm_rnd, bm_pow = Math.pow, bm_sqrt = Math.sqrt, bm_abs = Math.abs, bm_floor = Math.floor, bm_max = Math.max, bm_min = Math.min, blitter = 10, BMMath = {};
            function ProjectInterface() {
                return {}
            }
            (function() {
                var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], i = e.length;
                for (t = 0; t < i; t += 1)
                    BMMath[e[t]] = Math[e[t]]
            }
            )(),
            BMMath.random = Math.random,
            BMMath.abs = function(t) {
                var e = typeof t;
                if ("object" === e && t.length) {
                    var i, s = createSizedArray(t.length), r = t.length;
                    for (i = 0; i < r; i += 1)
                        s[i] = Math.abs(t[i]);
                    return s
                }
                return Math.abs(t)
            }
            ;
            var defaultCurveSegments = 150
              , degToRads = Math.PI / 180
              , roundCorner = .5519;
            function roundValues(t) {
                bm_rnd = t ? Math.round : function(t) {
                    return t
                }
            }
            function styleDiv(t) {
                t.style.position = "absolute",
                t.style.top = 0,
                t.style.left = 0,
                t.style.display = "block",
                t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0",
                t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible",
                t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d"
            }
            function BMEnterFrameEvent(t, e, i, s) {
                this.type = t,
                this.currentTime = e,
                this.totalTime = i,
                this.direction = s < 0 ? -1 : 1
            }
            function BMCompleteEvent(t, e) {
                this.type = t,
                this.direction = e < 0 ? -1 : 1
            }
            function BMCompleteLoopEvent(t, e, i, s) {
                this.type = t,
                this.currentLoop = i,
                this.totalLoops = e,
                this.direction = s < 0 ? -1 : 1
            }
            function BMSegmentStartEvent(t, e, i) {
                this.type = t,
                this.firstFrame = e,
                this.totalFrames = i
            }
            function BMDestroyEvent(t, e) {
                this.type = t,
                this.target = e
            }
            function BMRenderFrameErrorEvent(t, e) {
                this.type = "renderFrameError",
                this.nativeError = t,
                this.currentTime = e
            }
            function BMConfigErrorEvent(t) {
                this.type = "configError",
                this.nativeError = t
            }
            function BMAnimationConfigErrorEvent(t, e) {
                this.type = t,
                this.nativeError = e,
                this.currentTime = currentTime
            }
            roundValues(!1);
            var createElementID = function() {
                var t = 0;
                return function() {
                    return "__lottie_element_" + ++t
                }
            }();
            function HSVtoRGB(t, e, i) {
                var s, r, a, n, o, h, l, p;
                switch (n = Math.floor(6 * t),
                o = 6 * t - n,
                h = i * (1 - e),
                l = i * (1 - o * e),
                p = i * (1 - (1 - o) * e),
                n % 6) {
                case 0:
                    s = i,
                    r = p,
                    a = h;
                    break;
                case 1:
                    s = l,
                    r = i,
                    a = h;
                    break;
                case 2:
                    s = h,
                    r = i,
                    a = p;
                    break;
                case 3:
                    s = h,
                    r = l,
                    a = i;
                    break;
                case 4:
                    s = p,
                    r = h,
                    a = i;
                    break;
                case 5:
                    s = i,
                    r = h,
                    a = l;
                    break
                }
                return [s, r, a]
            }
            function RGBtoHSV(t, e, i) {
                var s, r = Math.max(t, e, i), a = Math.min(t, e, i), n = r - a, o = 0 === r ? 0 : n / r, h = r / 255;
                switch (r) {
                case a:
                    s = 0;
                    break;
                case t:
                    s = e - i + n * (e < i ? 6 : 0),
                    s /= 6 * n;
                    break;
                case e:
                    s = i - t + 2 * n,
                    s /= 6 * n;
                    break;
                case i:
                    s = t - e + 4 * n,
                    s /= 6 * n;
                    break
                }
                return [s, o, h]
            }
            function addSaturationToRGB(t, e) {
                var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[1] += e,
                i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0),
                HSVtoRGB(i[0], i[1], i[2])
            }
            function addBrightnessToRGB(t, e) {
                var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[2] += e,
                i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0),
                HSVtoRGB(i[0], i[1], i[2])
            }
            function addHueToRGB(t, e) {
                var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[0] += e / 360,
                i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1),
                HSVtoRGB(i[0], i[1], i[2])
            }
            var rgbToHex = function() {
                var t, e, i = [];
                for (t = 0; t < 256; t += 1)
                    e = t.toString(16),
                    i[t] = 1 == e.length ? "0" + e : e;
                return function(t, e, s) {
                    return t < 0 && (t = 0),
                    e < 0 && (e = 0),
                    s < 0 && (s = 0),
                    "#" + i[t] + i[e] + i[s]
                }
            }();
            function BaseEvent() {}
            BaseEvent.prototype = {
                triggerEvent: function(t, e) {
                    if (this._cbs[t])
                        for (var i = this._cbs[t].length, s = 0; s < i; s++)
                            this._cbs[t][s](e)
                },
                addEventListener: function(t, e) {
                    return this._cbs[t] || (this._cbs[t] = []),
                    this._cbs[t].push(e),
                    function() {
                        this.removeEventListener(t, e)
                    }
                    .bind(this)
                },
                removeEventListener: function(t, e) {
                    if (e) {
                        if (this._cbs[t]) {
                            var i = 0
                              , s = this._cbs[t].length;
                            while (i < s)
                                this._cbs[t][i] === e && (this._cbs[t].splice(i, 1),
                                i -= 1,
                                s -= 1),
                                i += 1;
                            this._cbs[t].length || (this._cbs[t] = null)
                        }
                    } else
                        this._cbs[t] = null
                }
            };
            var createTypedArray = function() {
                function t(t, e) {
                    var i, s = 0, r = [];
                    switch (t) {
                    case "int16":
                    case "uint8c":
                        i = 1;
                        break;
                    default:
                        i = 1.1;
                        break
                    }
                    for (s = 0; s < e; s += 1)
                        r.push(i);
                    return r
                }
                function e(t, e) {
                    return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0
                }
                return "function" === typeof Uint8ClampedArray && "function" === typeof Float32Array ? e : t
            }();
            function createSizedArray(t) {
                return Array.apply(null, {
                    length: t
                })
            }
            function createNS(t) {
                return document.createElementNS(svgNS, t)
            }
            function createTag(t) {
                return document.createElement(t)
            }
            function DynamicPropertyContainer() {}
            DynamicPropertyContainer.prototype = {
                addDynamicProperty: function(t) {
                    -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t),
                    this.container.addDynamicProperty(this),
                    this._isAnimated = !0)
                },
                iterateDynamicProperties: function() {
                    this._mdf = !1;
                    var t, e = this.dynamicProperties.length;
                    for (t = 0; t < e; t += 1)
                        this.dynamicProperties[t].getValue(),
                        this.dynamicProperties[t]._mdf && (this._mdf = !0)
                },
                initDynamicPropertyContainer: function(t) {
                    this.container = t,
                    this.dynamicProperties = [],
                    this._mdf = !1,
                    this._isAnimated = !1
                }
            };
            var getBlendMode = function() {
                var t = {
                    0: "source-over",
                    1: "multiply",
                    2: "screen",
                    3: "overlay",
                    4: "darken",
                    5: "lighten",
                    6: "color-dodge",
                    7: "color-burn",
                    8: "hard-light",
                    9: "soft-light",
                    10: "difference",
                    11: "exclusion",
                    12: "hue",
                    13: "saturation",
                    14: "color",
                    15: "luminosity"
                };
                return function(e) {
                    return t[e] || ""
                }
            }()/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */
              , Matrix = function() {
                var t = Math.cos
                  , e = Math.sin
                  , i = Math.tan
                  , s = Math.round;
                function r() {
                    return this.props[0] = 1,
                    this.props[1] = 0,
                    this.props[2] = 0,
                    this.props[3] = 0,
                    this.props[4] = 0,
                    this.props[5] = 1,
                    this.props[6] = 0,
                    this.props[7] = 0,
                    this.props[8] = 0,
                    this.props[9] = 0,
                    this.props[10] = 1,
                    this.props[11] = 0,
                    this.props[12] = 0,
                    this.props[13] = 0,
                    this.props[14] = 0,
                    this.props[15] = 1,
                    this
                }
                function a(i) {
                    if (0 === i)
                        return this;
                    var s = t(i)
                      , r = e(i);
                    return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }
                function n(i) {
                    if (0 === i)
                        return this;
                    var s = t(i)
                      , r = e(i);
                    return this._t(1, 0, 0, 0, 0, s, -r, 0, 0, r, s, 0, 0, 0, 0, 1)
                }
                function o(i) {
                    if (0 === i)
                        return this;
                    var s = t(i)
                      , r = e(i);
                    return this._t(s, 0, r, 0, 0, 1, 0, 0, -r, 0, s, 0, 0, 0, 0, 1)
                }
                function h(i) {
                    if (0 === i)
                        return this;
                    var s = t(i)
                      , r = e(i);
                    return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }
                function l(t, e) {
                    return this._t(1, e, t, 1, 0, 0)
                }
                function p(t, e) {
                    return this.shear(i(t), i(e))
                }
                function c(s, r) {
                    var a = t(r)
                      , n = e(r);
                    return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }
                function m(t, e, i) {
                    return i || 0 === i || (i = 1),
                    1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                }
                function f(t, e, i, s, r, a, n, o, h, l, p, c, m, f, u, d) {
                    return this.props[0] = t,
                    this.props[1] = e,
                    this.props[2] = i,
                    this.props[3] = s,
                    this.props[4] = r,
                    this.props[5] = a,
                    this.props[6] = n,
                    this.props[7] = o,
                    this.props[8] = h,
                    this.props[9] = l,
                    this.props[10] = p,
                    this.props[11] = c,
                    this.props[12] = m,
                    this.props[13] = f,
                    this.props[14] = u,
                    this.props[15] = d,
                    this
                }
                function u(t, e, i) {
                    return i = i || 0,
                    0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                }
                function d(t, e, i, s, r, a, n, o, h, l, p, c, m, f, u, d) {
                    var g = this.props;
                    if (1 === t && 0 === e && 0 === i && 0 === s && 0 === r && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === c)
                        return g[12] = g[12] * t + g[15] * m,
                        g[13] = g[13] * a + g[15] * f,
                        g[14] = g[14] * p + g[15] * u,
                        g[15] = g[15] * d,
                        this._identityCalculated = !1,
                        this;
                    var y = g[0]
                      , v = g[1]
                      , b = g[2]
                      , x = g[3]
                      , E = g[4]
                      , w = g[5]
                      , C = g[6]
                      , _ = g[7]
                      , k = g[8]
                      , A = g[9]
                      , S = g[10]
                      , P = g[11]
                      , T = g[12]
                      , I = g[13]
                      , D = g[14]
                      , M = g[15];
                    return g[0] = y * t + v * r + b * h + x * m,
                    g[1] = y * e + v * a + b * l + x * f,
                    g[2] = y * i + v * n + b * p + x * u,
                    g[3] = y * s + v * o + b * c + x * d,
                    g[4] = E * t + w * r + C * h + _ * m,
                    g[5] = E * e + w * a + C * l + _ * f,
                    g[6] = E * i + w * n + C * p + _ * u,
                    g[7] = E * s + w * o + C * c + _ * d,
                    g[8] = k * t + A * r + S * h + P * m,
                    g[9] = k * e + A * a + S * l + P * f,
                    g[10] = k * i + A * n + S * p + P * u,
                    g[11] = k * s + A * o + S * c + P * d,
                    g[12] = T * t + I * r + D * h + M * m,
                    g[13] = T * e + I * a + D * l + M * f,
                    g[14] = T * i + I * n + D * p + M * u,
                    g[15] = T * s + I * o + D * c + M * d,
                    this._identityCalculated = !1,
                    this
                }
                function g() {
                    return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]),
                    this._identityCalculated = !0),
                    this._identity
                }
                function y(t) {
                    var e = 0;
                    while (e < 16) {
                        if (t.props[e] !== this.props[e])
                            return !1;
                        e += 1
                    }
                    return !0
                }
                function v(t) {
                    var e;
                    for (e = 0; e < 16; e += 1)
                        t.props[e] = this.props[e]
                }
                function b(t) {
                    var e;
                    for (e = 0; e < 16; e += 1)
                        this.props[e] = t[e]
                }
                function x(t, e, i) {
                    return {
                        x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                        y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                        z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                    }
                }
                function E(t, e, i) {
                    return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                }
                function w(t, e, i) {
                    return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                }
                function C(t, e, i) {
                    return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                }
                function _(t) {
                    var e = this.props[0] * this.props[5] - this.props[1] * this.props[4]
                      , i = this.props[5] / e
                      , s = -this.props[1] / e
                      , r = -this.props[4] / e
                      , a = this.props[0] / e
                      , n = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e
                      , o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e;
                    return [t[0] * i + t[1] * r + n, t[0] * s + t[1] * a + o, 0]
                }
                function k(t) {
                    var e, i = t.length, s = [];
                    for (e = 0; e < i; e += 1)
                        s[e] = _(t[e]);
                    return s
                }
                function A(t, e, i) {
                    var s = createTypedArray("float32", 6);
                    if (this.isIdentity())
                        s[0] = t[0],
                        s[1] = t[1],
                        s[2] = e[0],
                        s[3] = e[1],
                        s[4] = i[0],
                        s[5] = i[1];
                    else {
                        var r = this.props[0]
                          , a = this.props[1]
                          , n = this.props[4]
                          , o = this.props[5]
                          , h = this.props[12]
                          , l = this.props[13];
                        s[0] = t[0] * r + t[1] * n + h,
                        s[1] = t[0] * a + t[1] * o + l,
                        s[2] = e[0] * r + e[1] * n + h,
                        s[3] = e[0] * a + e[1] * o + l,
                        s[4] = i[0] * r + i[1] * n + h,
                        s[5] = i[0] * a + i[1] * o + l
                    }
                    return s
                }
                function S(t, e, i) {
                    var s;
                    return s = this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]],
                    s
                }
                function P(t, e) {
                    if (this.isIdentity())
                        return t + "," + e;
                    var i = this.props;
                    return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                }
                function T() {
                    var t = 0
                      , e = this.props
                      , i = "matrix3d("
                      , r = 1e4;
                    while (t < 16)
                        i += s(e[t] * r) / r,
                        i += 15 === t ? ")" : ",",
                        t += 1;
                    return i
                }
                function I(t) {
                    var e = 1e4;
                    return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? s(t * e) / e : t
                }
                function D() {
                    var t = this.props
                      , e = I(t[0])
                      , i = I(t[1])
                      , s = I(t[4])
                      , r = I(t[5])
                      , a = I(t[12])
                      , n = I(t[13]);
                    return "matrix(" + e + "," + i + "," + s + "," + r + "," + a + "," + n + ")"
                }
                return function() {
                    this.reset = r,
                    this.rotate = a,
                    this.rotateX = n,
                    this.rotateY = o,
                    this.rotateZ = h,
                    this.skew = p,
                    this.skewFromAxis = c,
                    this.shear = l,
                    this.scale = m,
                    this.setTransform = f,
                    this.translate = u,
                    this.transform = d,
                    this.applyToPoint = x,
                    this.applyToX = E,
                    this.applyToY = w,
                    this.applyToZ = C,
                    this.applyToPointArray = S,
                    this.applyToTriplePoints = A,
                    this.applyToPointStringified = P,
                    this.toCSS = T,
                    this.to2dCSS = D,
                    this.clone = v,
                    this.cloneFromProps = b,
                    this.equals = y,
                    this.inversePoints = k,
                    this.inversePoint = _,
                    this._t = this.transform,
                    this.isIdentity = g,
                    this._identity = !0,
                    this._identityCalculated = !1,
                    this.props = createTypedArray("float32", 16),
                    this.reset()
                }
            }();
            (function(t, e) {
                var i, s = this, r = 256, a = 6, n = 52, o = "random", h = e.pow(r, a), l = e.pow(2, n), p = 2 * l, c = r - 1;
                function m(i, s, n) {
                    var c = [];
                    s = !0 === s ? {
                        entropy: !0
                    } : s || {};
                    var m = g(d(s.entropy ? [i, v(t)] : null === i ? y() : i, 3), c)
                      , b = new f(c)
                      , x = function() {
                        var t = b.g(a)
                          , e = h
                          , i = 0;
                        while (t < l)
                            t = (t + i) * r,
                            e *= r,
                            i = b.g(1);
                        while (t >= p)
                            t /= 2,
                            e /= 2,
                            i >>>= 1;
                        return (t + i) / e
                    };
                    return x.int32 = function() {
                        return 0 | b.g(4)
                    }
                    ,
                    x.quick = function() {
                        return b.g(4) / 4294967296
                    }
                    ,
                    x.double = x,
                    g(v(b.S), t),
                    (s.pass || n || function(t, i, s, r) {
                        return r && (r.S && u(r, b),
                        t.state = function() {
                            return u(b, {})
                        }
                        ),
                        s ? (e[o] = t,
                        i) : t
                    }
                    )(x, m, "global"in s ? s.global : this == e, s.state)
                }
                function f(t) {
                    var e, i = t.length, s = this, a = 0, n = s.i = s.j = 0, o = s.S = [];
                    i || (t = [i++]);
                    while (a < r)
                        o[a] = a++;
                    for (a = 0; a < r; a++)
                        o[a] = o[n = c & n + t[a % i] + (e = o[a])],
                        o[n] = e;
                    s.g = function(t) {
                        var e, i = 0, a = s.i, n = s.j, o = s.S;
                        while (t--)
                            e = o[a = c & a + 1],
                            i = i * r + o[c & (o[a] = o[n = c & n + e]) + (o[n] = e)];
                        return s.i = a,
                        s.j = n,
                        i
                    }
                }
                function u(t, e) {
                    return e.i = t.i,
                    e.j = t.j,
                    e.S = t.S.slice(),
                    e
                }
                function d(t, e) {
                    var i, s = [], r = typeof t;
                    if (e && "object" == r)
                        for (i in t)
                            try {
                                s.push(d(t[i], e - 1))
                            } catch (a) {}
                    return s.length ? s : "string" == r ? t : t + "\0"
                }
                function g(t, e) {
                    var i, s = t + "", r = 0;
                    while (r < s.length)
                        e[c & r] = c & (i ^= 19 * e[c & r]) + s.charCodeAt(r++);
                    return v(e)
                }
                function y() {
                    try {
                        if (i)
                            return v(i.randomBytes(r));
                        var e = new Uint8Array(r);
                        return (s.crypto || s.msCrypto).getRandomValues(e),
                        v(e)
                    } catch (o) {
                        var a = s.navigator
                          , n = a && a.plugins;
                        return [+new Date, s, n, s.screen, v(t)]
                    }
                }
                function v(t) {
                    return String.fromCharCode.apply(0, t)
                }
                e["seed" + o] = m,
                g(e.random(), t)
            }
            )([], BMMath);
            var BezierFactory = function() {
                var t = {};
                t.getBezierEasing = i;
                var e = {};
                function i(t, i, s, r, a) {
                    var n = a || ("bez_" + t + "_" + i + "_" + s + "_" + r).replace(/\./g, "p");
                    if (e[n])
                        return e[n];
                    var o = new y([t, i, s, r]);
                    return e[n] = o,
                    o
                }
                var s = 4
                  , r = .001
                  , a = 1e-7
                  , n = 10
                  , o = 11
                  , h = 1 / (o - 1)
                  , l = "function" === typeof Float32Array;
                function p(t, e) {
                    return 1 - 3 * e + 3 * t
                }
                function c(t, e) {
                    return 3 * e - 6 * t
                }
                function m(t) {
                    return 3 * t
                }
                function f(t, e, i) {
                    return ((p(e, i) * t + c(e, i)) * t + m(e)) * t
                }
                function u(t, e, i) {
                    return 3 * p(e, i) * t * t + 2 * c(e, i) * t + m(e)
                }
                function d(t, e, i, s, r) {
                    var o, h, l = 0;
                    do {
                        h = e + (i - e) / 2,
                        o = f(h, s, r) - t,
                        o > 0 ? i = h : e = h
                    } while (Math.abs(o) > a && ++l < n);return h
                }
                function g(t, e, i, r) {
                    for (var a = 0; a < s; ++a) {
                        var n = u(e, i, r);
                        if (0 === n)
                            return e;
                        var o = f(e, i, r) - t;
                        e -= o / n
                    }
                    return e
                }
                function y(t) {
                    this._p = t,
                    this._mSampleValues = l ? new Float32Array(o) : new Array(o),
                    this._precomputed = !1,
                    this.get = this.get.bind(this)
                }
                return y.prototype = {
                    get: function(t) {
                        var e = this._p[0]
                          , i = this._p[1]
                          , s = this._p[2]
                          , r = this._p[3];
                        return this._precomputed || this._precompute(),
                        e === i && s === r ? t : 0 === t ? 0 : 1 === t ? 1 : f(this._getTForX(t), i, r)
                    },
                    _precompute: function() {
                        var t = this._p[0]
                          , e = this._p[1]
                          , i = this._p[2]
                          , s = this._p[3];
                        this._precomputed = !0,
                        t === e && i === s || this._calcSampleValues()
                    },
                    _calcSampleValues: function() {
                        for (var t = this._p[0], e = this._p[2], i = 0; i < o; ++i)
                            this._mSampleValues[i] = f(i * h, t, e)
                    },
                    _getTForX: function(t) {
                        for (var e = this._p[0], i = this._p[2], s = this._mSampleValues, a = 0, n = 1, l = o - 1; n !== l && s[n] <= t; ++n)
                            a += h;
                        --n;
                        var p = (t - s[n]) / (s[n + 1] - s[n])
                          , c = a + p * h
                          , m = u(c, e, i);
                        return m >= r ? g(t, c, e, i) : 0 === m ? c : d(t, a, a + h, e, i)
                    }
                },
                t
            }();
            function extendPrototype(t, e) {
                var i, s, r = t.length;
                for (i = 0; i < r; i += 1)
                    for (var a in s = t[i].prototype,
                    s)
                        s.hasOwnProperty(a) && (e.prototype[a] = s[a])
            }
            function getDescriptor(t, e) {
                return Object.getOwnPropertyDescriptor(t, e)
            }
            function createProxyFunction(t) {
                function e() {}
                return e.prototype = t,
                e
            }
            function bezFunction() {
                Math;
                function t(t, e, i, s, r, a) {
                    var n = t * s + e * r + i * a - r * s - a * t - i * e;
                    return n > -.001 && n < .001
                }
                function e(e, i, s, r, a, n, o, h, l) {
                    if (0 === s && 0 === n && 0 === l)
                        return t(e, i, r, a, o, h);
                    var p, c = Math.sqrt(Math.pow(r - e, 2) + Math.pow(a - i, 2) + Math.pow(n - s, 2)), m = Math.sqrt(Math.pow(o - e, 2) + Math.pow(h - i, 2) + Math.pow(l - s, 2)), f = Math.sqrt(Math.pow(o - r, 2) + Math.pow(h - a, 2) + Math.pow(l - n, 2));
                    return p = c > m ? c > f ? c - m - f : f - m - c : f > m ? f - m - c : m - c - f,
                    p > -1e-4 && p < 1e-4
                }
                var i = function() {
                    return function(t, e, i, s) {
                        var r, a, n, o, h, l, p = defaultCurveSegments, c = 0, m = [], f = [], u = bezier_length_pool.newElement();
                        for (n = i.length,
                        r = 0; r < p; r += 1) {
                            for (h = r / (p - 1),
                            l = 0,
                            a = 0; a < n; a += 1)
                                o = bm_pow(1 - h, 3) * t[a] + 3 * bm_pow(1 - h, 2) * h * i[a] + 3 * (1 - h) * bm_pow(h, 2) * s[a] + bm_pow(h, 3) * e[a],
                                m[a] = o,
                                null !== f[a] && (l += bm_pow(m[a] - f[a], 2)),
                                f[a] = m[a];
                            l && (l = bm_sqrt(l),
                            c += l),
                            u.percents[r] = h,
                            u.lengths[r] = c
                        }
                        return u.addedLength = c,
                        u
                    }
                }();
                function s(t) {
                    var e, s = segments_length_pool.newElement(), r = t.c, a = t.v, n = t.o, o = t.i, h = t._length, l = s.lengths, p = 0;
                    for (e = 0; e < h - 1; e += 1)
                        l[e] = i(a[e], a[e + 1], n[e], o[e + 1]),
                        p += l[e].addedLength;
                    return r && h && (l[e] = i(a[e], a[0], n[e], o[0]),
                    p += l[e].addedLength),
                    s.totalLength = p,
                    s
                }
                function r(t) {
                    this.segmentLength = 0,
                    this.points = new Array(t)
                }
                function a(t, e) {
                    this.partialLength = t,
                    this.point = e
                }
                var n = function() {
                    var e = {};
                    return function(i, s, n, o) {
                        var h = (i[0] + "_" + i[1] + "_" + s[0] + "_" + s[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                        if (!e[h]) {
                            var l, p, c, m, f, u, d, g = defaultCurveSegments, y = 0, v = null;
                            2 === i.length && (i[0] != s[0] || i[1] != s[1]) && t(i[0], i[1], s[0], s[1], i[0] + n[0], i[1] + n[1]) && t(i[0], i[1], s[0], s[1], s[0] + o[0], s[1] + o[1]) && (g = 2);
                            var b = new r(g);
                            for (c = n.length,
                            l = 0; l < g; l += 1) {
                                for (d = createSizedArray(c),
                                f = l / (g - 1),
                                u = 0,
                                p = 0; p < c; p += 1)
                                    m = bm_pow(1 - f, 3) * i[p] + 3 * bm_pow(1 - f, 2) * f * (i[p] + n[p]) + 3 * (1 - f) * bm_pow(f, 2) * (s[p] + o[p]) + bm_pow(f, 3) * s[p],
                                    d[p] = m,
                                    null !== v && (u += bm_pow(d[p] - v[p], 2));
                                u = bm_sqrt(u),
                                y += u,
                                b.points[l] = new a(u,d),
                                v = d
                            }
                            b.segmentLength = y,
                            e[h] = b
                        }
                        return e[h]
                    }
                }();
                function o(t, e) {
                    var i = e.percents
                      , s = e.lengths
                      , r = i.length
                      , a = bm_floor((r - 1) * t)
                      , n = t * e.addedLength
                      , o = 0;
                    if (a === r - 1 || 0 === a || n === s[a])
                        return i[a];
                    var h = s[a] > n ? -1 : 1
                      , l = !0;
                    while (l)
                        if (s[a] <= n && s[a + 1] > n ? (o = (n - s[a]) / (s[a + 1] - s[a]),
                        l = !1) : a += h,
                        a < 0 || a >= r - 1) {
                            if (a === r - 1)
                                return i[a];
                            l = !1
                        }
                    return i[a] + (i[a + 1] - i[a]) * o
                }
                function h(t, e, i, s, r, a) {
                    var n = o(r, a)
                      , h = 1 - n
                      , l = Math.round(1e3 * (h * h * h * t[0] + (n * h * h + h * n * h + h * h * n) * i[0] + (n * n * h + h * n * n + n * h * n) * s[0] + n * n * n * e[0])) / 1e3
                      , p = Math.round(1e3 * (h * h * h * t[1] + (n * h * h + h * n * h + h * h * n) * i[1] + (n * n * h + h * n * n + n * h * n) * s[1] + n * n * n * e[1])) / 1e3;
                    return [l, p]
                }
                var l = createTypedArray("float32", 8);
                function p(t, e, i, s, r, a, n) {
                    r = r < 0 ? 0 : r > 1 ? 1 : r;
                    var h = o(r, n);
                    a = a > 1 ? 1 : a;
                    var p, c = o(a, n), m = t.length, f = 1 - h, u = 1 - c, d = f * f * f, g = h * f * f * 3, y = h * h * f * 3, v = h * h * h, b = f * f * u, x = h * f * u + f * h * u + f * f * c, E = h * h * u + f * h * c + h * f * c, w = h * h * c, C = f * u * u, _ = h * u * u + f * c * u + f * u * c, k = h * c * u + f * c * c + h * u * c, A = h * c * c, S = u * u * u, P = c * u * u + u * c * u + u * u * c, T = c * c * u + u * c * c + c * u * c, I = c * c * c;
                    for (p = 0; p < m; p += 1)
                        l[4 * p] = Math.round(1e3 * (d * t[p] + g * i[p] + y * s[p] + v * e[p])) / 1e3,
                        l[4 * p + 1] = Math.round(1e3 * (b * t[p] + x * i[p] + E * s[p] + w * e[p])) / 1e3,
                        l[4 * p + 2] = Math.round(1e3 * (C * t[p] + _ * i[p] + k * s[p] + A * e[p])) / 1e3,
                        l[4 * p + 3] = Math.round(1e3 * (S * t[p] + P * i[p] + T * s[p] + I * e[p])) / 1e3;
                    return l
                }
                return {
                    getSegmentsLength: s,
                    getNewSegment: p,
                    getPointInSegment: h,
                    buildBezierData: n,
                    pointOnLine2D: t,
                    pointOnLine3D: e
                }
            }
            (function() {
                for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i)
                    window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"],
                    window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
                    var s = (new Date).getTime()
                      , r = Math.max(0, 16 - (s - t))
                      , a = setTimeout((function() {
                        e(s + r)
                    }
                    ), r);
                    return t = s + r,
                    a
                }
                ),
                window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                    clearTimeout(t)
                }
                )
            }
            )();
            var bez = bezFunction();
            function dataFunctionManager() {
                function t(r, a, n) {
                    var o, h, l, c, m, f, u = r.length;
                    for (h = 0; h < u; h += 1)
                        if (o = r[h],
                        "ks"in o && !o.completed) {
                            if (o.completed = !0,
                            o.tt && (r[h - 1].td = o.tt),
                            [],
                            -1,
                            o.hasMask) {
                                var d = o.masksProperties;
                                for (c = d.length,
                                l = 0; l < c; l += 1)
                                    if (d[l].pt.k.i)
                                        s(d[l].pt.k);
                                    else
                                        for (f = d[l].pt.k.length,
                                        m = 0; m < f; m += 1)
                                            d[l].pt.k[m].s && s(d[l].pt.k[m].s[0]),
                                            d[l].pt.k[m].e && s(d[l].pt.k[m].e[0])
                            }
                            0 === o.ty ? (o.layers = e(o.refId, a),
                            t(o.layers, a, n)) : 4 === o.ty ? i(o.shapes) : 5 == o.ty && p(o, n)
                        }
                }
                function e(t, e) {
                    var i = 0
                      , s = e.length;
                    while (i < s) {
                        if (e[i].id === t)
                            return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : (e[i].layers.__used = !0,
                            e[i].layers);
                        i += 1
                    }
                }
                function i(t) {
                    var e, r, a, n = t.length;
                    for (e = n - 1; e >= 0; e -= 1)
                        if ("sh" == t[e].ty) {
                            if (t[e].ks.k.i)
                                s(t[e].ks.k);
                            else
                                for (a = t[e].ks.k.length,
                                r = 0; r < a; r += 1)
                                    t[e].ks.k[r].s && s(t[e].ks.k[r].s[0]),
                                    t[e].ks.k[r].e && s(t[e].ks.k[r].e[0]);
                            !0
                        } else
                            "gr" == t[e].ty && i(t[e].it)
                }
                function s(t) {
                    var e, i = t.i.length;
                    for (e = 0; e < i; e += 1)
                        t.i[e][0] += t.v[e][0],
                        t.i[e][1] += t.v[e][1],
                        t.o[e][0] += t.v[e][0],
                        t.o[e][1] += t.v[e][1]
                }
                function r(t, e) {
                    var i = e ? e.split(".") : [100, 100, 100];
                    return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && void 0))
                }
                var a = function() {
                    var t = [4, 4, 14];
                    function e(t) {
                        var e = t.t.d;
                        t.t.d = {
                            k: [{
                                s: e,
                                t: 0
                            }]
                        }
                    }
                    function i(t) {
                        var i, s = t.length;
                        for (i = 0; i < s; i += 1)
                            5 === t[i].ty && e(t[i])
                    }
                    return function(e) {
                        if (r(t, e.v) && (i(e.layers),
                        e.assets)) {
                            var s, a = e.assets.length;
                            for (s = 0; s < a; s += 1)
                                e.assets[s].layers && i(e.assets[s].layers)
                        }
                    }
                }()
                  , n = function() {
                    var t = [4, 7, 99];
                    return function(e) {
                        if (e.chars && !r(t, e.v)) {
                            var i, a, n, o, h, l = e.chars.length;
                            for (i = 0; i < l; i += 1)
                                if (e.chars[i].data && e.chars[i].data.shapes)
                                    for (h = e.chars[i].data.shapes[0].it,
                                    n = h.length,
                                    a = 0; a < n; a += 1)
                                        o = h[a].ks.k,
                                        o.__converted || (s(h[a].ks.k),
                                        o.__converted = !0)
                        }
                    }
                }()
                  , o = function() {
                    var t = [4, 1, 9];
                    function e(t) {
                        var i, s, r, a = t.length;
                        for (i = 0; i < a; i += 1)
                            if ("gr" === t[i].ty)
                                e(t[i].it);
                            else if ("fl" === t[i].ty || "st" === t[i].ty)
                                if (t[i].c.k && t[i].c.k[0].i)
                                    for (r = t[i].c.k.length,
                                    s = 0; s < r; s += 1)
                                        t[i].c.k[s].s && (t[i].c.k[s].s[0] /= 255,
                                        t[i].c.k[s].s[1] /= 255,
                                        t[i].c.k[s].s[2] /= 255,
                                        t[i].c.k[s].s[3] /= 255),
                                        t[i].c.k[s].e && (t[i].c.k[s].e[0] /= 255,
                                        t[i].c.k[s].e[1] /= 255,
                                        t[i].c.k[s].e[2] /= 255,
                                        t[i].c.k[s].e[3] /= 255);
                                else
                                    t[i].c.k[0] /= 255,
                                    t[i].c.k[1] /= 255,
                                    t[i].c.k[2] /= 255,
                                    t[i].c.k[3] /= 255
                    }
                    function i(t) {
                        var i, s = t.length;
                        for (i = 0; i < s; i += 1)
                            4 === t[i].ty && e(t[i].shapes)
                    }
                    return function(e) {
                        if (r(t, e.v) && (i(e.layers),
                        e.assets)) {
                            var s, a = e.assets.length;
                            for (s = 0; s < a; s += 1)
                                e.assets[s].layers && i(e.assets[s].layers)
                        }
                    }
                }()
                  , h = function() {
                    var t = [4, 4, 18];
                    function e(t) {
                        var i, s, r, a = t.length;
                        for (i = a - 1; i >= 0; i -= 1)
                            if ("sh" == t[i].ty) {
                                if (t[i].ks.k.i)
                                    t[i].ks.k.c = t[i].closed;
                                else
                                    for (r = t[i].ks.k.length,
                                    s = 0; s < r; s += 1)
                                        t[i].ks.k[s].s && (t[i].ks.k[s].s[0].c = t[i].closed),
                                        t[i].ks.k[s].e && (t[i].ks.k[s].e[0].c = t[i].closed);
                                !0
                            } else
                                "gr" == t[i].ty && e(t[i].it)
                    }
                    function i(t) {
                        var i, s, r, a, n, o, h = t.length;
                        for (s = 0; s < h; s += 1) {
                            if (i = t[s],
                            i.hasMask) {
                                var l = i.masksProperties;
                                for (a = l.length,
                                r = 0; r < a; r += 1)
                                    if (l[r].pt.k.i)
                                        l[r].pt.k.c = l[r].cl;
                                    else
                                        for (o = l[r].pt.k.length,
                                        n = 0; n < o; n += 1)
                                            l[r].pt.k[n].s && (l[r].pt.k[n].s[0].c = l[r].cl),
                                            l[r].pt.k[n].e && (l[r].pt.k[n].e[0].c = l[r].cl)
                            }
                            4 === i.ty && e(i.shapes)
                        }
                    }
                    return function(e) {
                        if (r(t, e.v) && (i(e.layers),
                        e.assets)) {
                            var s, a = e.assets.length;
                            for (s = 0; s < a; s += 1)
                                e.assets[s].layers && i(e.assets[s].layers)
                        }
                    }
                }();
                function l(e, i) {
                    e.__complete || (o(e),
                    a(e),
                    n(e),
                    h(e),
                    t(e.layers, e.assets, i),
                    e.__complete = !0)
                }
                function p(t, e) {
                    0 !== t.t.a.length || "m"in t.t.p || (t.singleShape = !0)
                }
                var c = {};
                return c.completeData = l,
                c
            }
            var dataManager = dataFunctionManager()
              , FontManager = function() {
                var t = 5e3
                  , e = {
                    w: 0,
                    size: 0,
                    shapes: []
                }
                  , i = [];
                function s(t, e) {
                    var i = createTag("span");
                    i.style.fontFamily = e;
                    var s = createTag("span");
                    s.innerHTML = "giItT1WQy@!-/#",
                    i.style.position = "absolute",
                    i.style.left = "-10000px",
                    i.style.top = "-10000px",
                    i.style.fontSize = "300px",
                    i.style.fontVariant = "normal",
                    i.style.fontStyle = "normal",
                    i.style.fontWeight = "normal",
                    i.style.letterSpacing = "0",
                    i.appendChild(s),
                    document.body.appendChild(i);
                    var r = s.offsetWidth;
                    return s.style.fontFamily = t + ", " + e,
                    {
                        node: s,
                        w: r,
                        parent: i
                    }
                }
                function r() {
                    var e, i, s, r = this.fonts.length, a = r;
                    for (e = 0; e < r; e += 1)
                        this.fonts[e].loaded ? a -= 1 : "n" === this.fonts[e].fOrigin || 0 === this.fonts[e].origin ? this.fonts[e].loaded = !0 : (i = this.fonts[e].monoCase.node,
                        s = this.fonts[e].monoCase.w,
                        i.offsetWidth !== s ? (a -= 1,
                        this.fonts[e].loaded = !0) : (i = this.fonts[e].sansCase.node,
                        s = this.fonts[e].sansCase.w,
                        i.offsetWidth !== s && (a -= 1,
                        this.fonts[e].loaded = !0)),
                        this.fonts[e].loaded && (this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent),
                        this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));
                    0 !== a && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFonts.bind(this), 20) : setTimeout(function() {
                        this.isLoaded = !0
                    }
                    .bind(this), 0)
                }
                function a(t, e) {
                    var i = createNS("text");
                    i.style.fontSize = "100px",
                    i.setAttribute("font-family", e.fFamily),
                    i.setAttribute("font-style", e.fStyle),
                    i.setAttribute("font-weight", e.fWeight),
                    i.textContent = "1",
                    e.fClass ? (i.style.fontFamily = "inherit",
                    i.setAttribute("class", e.fClass)) : i.style.fontFamily = e.fFamily,
                    t.appendChild(i);
                    var s = createTag("canvas").getContext("2d");
                    return s.font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily,
                    i
                }
                function n(t, e) {
                    if (t) {
                        if (this.chars)
                            return this.isLoaded = !0,
                            void (this.fonts = t.list);
                        var i, r = t.list, n = r.length, o = n;
                        for (i = 0; i < n; i += 1) {
                            var h, l, p = !0;
                            if (r[i].loaded = !1,
                            r[i].monoCase = s(r[i].fFamily, "monospace"),
                            r[i].sansCase = s(r[i].fFamily, "sans-serif"),
                            r[i].fPath) {
                                if ("p" === r[i].fOrigin || 3 === r[i].origin) {
                                    if (h = document.querySelectorAll('style[f-forigin="p"][f-family="' + r[i].fFamily + '"], style[f-origin="3"][f-family="' + r[i].fFamily + '"]'),
                                    h.length > 0 && (p = !1),
                                    p) {
                                        var c = createTag("style");
                                        c.setAttribute("f-forigin", r[i].fOrigin),
                                        c.setAttribute("f-origin", r[i].origin),
                                        c.setAttribute("f-family", r[i].fFamily),
                                        c.type = "text/css",
                                        c.innerHTML = "@font-face {font-family: " + r[i].fFamily + "; font-style: normal; src: url('" + r[i].fPath + "');}",
                                        e.appendChild(c)
                                    }
                                } else if ("g" === r[i].fOrigin || 1 === r[i].origin) {
                                    for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),
                                    l = 0; l < h.length; l++)
                                        -1 !== h[l].href.indexOf(r[i].fPath) && (p = !1);
                                    if (p) {
                                        var m = createTag("link");
                                        m.setAttribute("f-forigin", r[i].fOrigin),
                                        m.setAttribute("f-origin", r[i].origin),
                                        m.type = "text/css",
                                        m.rel = "stylesheet",
                                        m.href = r[i].fPath,
                                        document.body.appendChild(m)
                                    }
                                } else if ("t" === r[i].fOrigin || 2 === r[i].origin) {
                                    for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),
                                    l = 0; l < h.length; l++)
                                        r[i].fPath === h[l].src && (p = !1);
                                    if (p) {
                                        var f = createTag("link");
                                        f.setAttribute("f-forigin", r[i].fOrigin),
                                        f.setAttribute("f-origin", r[i].origin),
                                        f.setAttribute("rel", "stylesheet"),
                                        f.setAttribute("href", r[i].fPath),
                                        e.appendChild(f)
                                    }
                                }
                            } else
                                r[i].loaded = !0,
                                o -= 1;
                            r[i].helper = a(e, r[i]),
                            r[i].cache = {},
                            this.fonts.push(r[i])
                        }
                        0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                    } else
                        this.isLoaded = !0
                }
                function o(t) {
                    if (t) {
                        this.chars || (this.chars = []);
                        var e, i, s, r = t.length, a = this.chars.length;
                        for (e = 0; e < r; e += 1) {
                            i = 0,
                            s = !1;
                            while (i < a)
                                this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (s = !0),
                                i += 1;
                            s || (this.chars.push(t[e]),
                            a += 1)
                        }
                    }
                }
                function h(t, i, s) {
                    var r = 0
                      , a = this.chars.length;
                    while (r < a) {
                        if (this.chars[r].ch === t && this.chars[r].style === i && this.chars[r].fFamily === s)
                            return this.chars[r];
                        r += 1
                    }
                    return ("string" === typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && console.warn("Missing character from exported characters list: ", t, i, s),
                    e
                }
                function l(t, e, i) {
                    var s = this.getFontByName(e)
                      , r = t.charCodeAt(0);
                    if (!s.cache[r + 1]) {
                        var a = s.helper;
                        if (" " === t) {
                            a.textContent = "|" + t + "|";
                            var n = a.getComputedTextLength();
                            a.textContent = "||";
                            var o = a.getComputedTextLength();
                            s.cache[r + 1] = (n - o) / 100
                        } else
                            a.textContent = t,
                            s.cache[r + 1] = a.getComputedTextLength() / 100
                    }
                    return s.cache[r + 1] * i
                }
                function p(t) {
                    var e = 0
                      , i = this.fonts.length;
                    while (e < i) {
                        if (this.fonts[e].fName === t)
                            return this.fonts[e];
                        e += 1
                    }
                    return this.fonts[0]
                }
                function c() {
                    return i
                }
                function m() {
                    return this.isLoaded
                }
                i = i.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                var f = function() {
                    this.fonts = [],
                    this.chars = null,
                    this.typekitLoaded = 0,
                    this.isLoaded = !1,
                    this.initTime = Date.now()
                };
                return f.getCombinedCharacterCodes = c,
                f.prototype.addChars = o,
                f.prototype.addFonts = n,
                f.prototype.getCharData = h,
                f.prototype.getFontByName = p,
                f.prototype.measureText = l,
                f.prototype.checkLoadedFonts = r,
                f.prototype.loaded = m,
                f
            }()
              , PropertyFactory = function() {
                var t = initialDefaultFrame
                  , e = Math.abs;
                function i(t, e) {
                    var i, n = this.offsetTime;
                    "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
                    var o, h, l, p, c, m, f, u, d = e.lastIndex, g = d, y = this.keyframes.length - 1, v = !0;
                    while (v) {
                        if (o = this.keyframes[g],
                        h = this.keyframes[g + 1],
                        g === y - 1 && t >= h.t - n) {
                            o.h && (o = h),
                            d = 0;
                            break
                        }
                        if (h.t - n > t) {
                            d = g;
                            break
                        }
                        g < y - 1 ? g += 1 : (d = 0,
                        v = !1)
                    }
                    var b, x = h.t - n, E = o.t - n;
                    if (o.to) {
                        o.bezierData || (o.bezierData = bez.buildBezierData(o.s, h.s || o.e, o.to, o.ti));
                        var w = o.bezierData;
                        if (t >= x || t < E) {
                            var C = t >= x ? w.points.length - 1 : 0;
                            for (p = w.points[C].point.length,
                            l = 0; l < p; l += 1)
                                i[l] = w.points[C].point[l]
                        } else {
                            o.__fnct ? u = o.__fnct : (u = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get,
                            o.__fnct = u),
                            c = u((t - E) / (x - E));
                            var _, k = w.segmentLength * c, A = e.lastFrame < t && e._lastKeyframeIndex === g ? e._lastAddedLength : 0;
                            f = e.lastFrame < t && e._lastKeyframeIndex === g ? e._lastPoint : 0,
                            v = !0,
                            m = w.points.length;
                            while (v) {
                                if (A += w.points[f].partialLength,
                                0 === k || 0 === c || f === w.points.length - 1) {
                                    for (p = w.points[f].point.length,
                                    l = 0; l < p; l += 1)
                                        i[l] = w.points[f].point[l];
                                    break
                                }
                                if (k >= A && k < A + w.points[f + 1].partialLength) {
                                    for (_ = (k - A) / w.points[f + 1].partialLength,
                                    p = w.points[f].point.length,
                                    l = 0; l < p; l += 1)
                                        i[l] = w.points[f].point[l] + (w.points[f + 1].point[l] - w.points[f].point[l]) * _;
                                    break
                                }
                                f < m - 1 ? f += 1 : v = !1
                            }
                            e._lastPoint = f,
                            e._lastAddedLength = A - w.points[f].partialLength,
                            e._lastKeyframeIndex = g
                        }
                    } else {
                        var S, P, T, I, D;
                        if (y = o.s.length,
                        b = h.s || o.e,
                        this.sh && 1 !== o.h)
                            if (t >= x)
                                i[0] = b[0],
                                i[1] = b[1],
                                i[2] = b[2];
                            else if (t <= E)
                                i[0] = o.s[0],
                                i[1] = o.s[1],
                                i[2] = o.s[2];
                            else {
                                var M = a(o.s)
                                  , F = a(b)
                                  , B = (t - E) / (x - E);
                                r(i, s(M, F, B))
                            }
                        else
                            for (g = 0; g < y; g += 1)
                                1 !== o.h && (t >= x ? c = 1 : t < E ? c = 0 : (o.o.x.constructor === Array ? (o.__fnct || (o.__fnct = []),
                                o.__fnct[g] ? u = o.__fnct[g] : (S = "undefined" === typeof o.o.x[g] ? o.o.x[0] : o.o.x[g],
                                P = "undefined" === typeof o.o.y[g] ? o.o.y[0] : o.o.y[g],
                                T = "undefined" === typeof o.i.x[g] ? o.i.x[0] : o.i.x[g],
                                I = "undefined" === typeof o.i.y[g] ? o.i.y[0] : o.i.y[g],
                                u = BezierFactory.getBezierEasing(S, P, T, I).get,
                                o.__fnct[g] = u)) : o.__fnct ? u = o.__fnct : (S = o.o.x,
                                P = o.o.y,
                                T = o.i.x,
                                I = o.i.y,
                                u = BezierFactory.getBezierEasing(S, P, T, I).get,
                                o.__fnct = u),
                                c = u((t - E) / (x - E)))),
                                b = h.s || o.e,
                                D = 1 === o.h ? o.s[g] : o.s[g] + (b[g] - o.s[g]) * c,
                                "multidimensional" === this.propType ? i[g] = D : i = D
                    }
                    return e.lastIndex = d,
                    i
                }
                function s(t, e, i) {
                    var s, r, a, n, o, h = [], l = t[0], p = t[1], c = t[2], m = t[3], f = e[0], u = e[1], d = e[2], g = e[3];
                    return r = l * f + p * u + c * d + m * g,
                    r < 0 && (r = -r,
                    f = -f,
                    u = -u,
                    d = -d,
                    g = -g),
                    1 - r > 1e-6 ? (s = Math.acos(r),
                    a = Math.sin(s),
                    n = Math.sin((1 - i) * s) / a,
                    o = Math.sin(i * s) / a) : (n = 1 - i,
                    o = i),
                    h[0] = n * l + o * f,
                    h[1] = n * p + o * u,
                    h[2] = n * c + o * d,
                    h[3] = n * m + o * g,
                    h
                }
                function r(t, e) {
                    var i = e[0]
                      , s = e[1]
                      , r = e[2]
                      , a = e[3]
                      , n = Math.atan2(2 * s * a - 2 * i * r, 1 - 2 * s * s - 2 * r * r)
                      , o = Math.asin(2 * i * s + 2 * r * a)
                      , h = Math.atan2(2 * i * a - 2 * s * r, 1 - 2 * i * i - 2 * r * r);
                    t[0] = n / degToRads,
                    t[1] = o / degToRads,
                    t[2] = h / degToRads
                }
                function a(t) {
                    var e = t[0] * degToRads
                      , i = t[1] * degToRads
                      , s = t[2] * degToRads
                      , r = Math.cos(e / 2)
                      , a = Math.cos(i / 2)
                      , n = Math.cos(s / 2)
                      , o = Math.sin(e / 2)
                      , h = Math.sin(i / 2)
                      , l = Math.sin(s / 2)
                      , p = r * a * n - o * h * l
                      , c = o * h * n + r * a * l
                      , m = o * a * n + r * h * l
                      , f = r * h * n - o * a * l;
                    return [c, m, f, p]
                }
                function n() {
                    var e = this.comp.renderedFrame - this.offsetTime
                      , i = this.keyframes[0].t - this.offsetTime
                      , s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= s && e >= s || this._caching.lastFrame < i && e < i))) {
                        this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1,
                        this._caching.lastIndex = 0);
                        var r = this.interpolateValue(e, this._caching);
                        this.pv = r
                    }
                    return this._caching.lastFrame = e,
                    this.pv
                }
                function o(t) {
                    var i;
                    if ("unidimensional" === this.propType)
                        i = t * this.mult,
                        e(this.v - i) > 1e-5 && (this.v = i,
                        this._mdf = !0);
                    else {
                        var s = 0
                          , r = this.v.length;
                        while (s < r)
                            i = t[s] * this.mult,
                            e(this.v[s] - i) > 1e-5 && (this.v[s] = i,
                            this._mdf = !0),
                            s += 1
                    }
                }
                function h() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                        if (this.lock)
                            this.setVValue(this.pv);
                        else {
                            this.lock = !0,
                            this._mdf = this._isFirstFrame;
                            var t, e = this.effectsSequence.length, i = this.kf ? this.pv : this.data.k;
                            for (t = 0; t < e; t += 1)
                                i = this.effectsSequence[t](i);
                            this.setVValue(i),
                            this._isFirstFrame = !1,
                            this.lock = !1,
                            this.frameId = this.elem.globalData.frameId
                        }
                }
                function l(t) {
                    this.effectsSequence.push(t),
                    this.container.addDynamicProperty(this)
                }
                function p(t, e, i, s) {
                    this.propType = "unidimensional",
                    this.mult = i || 1,
                    this.data = e,
                    this.v = i ? e.k * i : e.k,
                    this.pv = e.k,
                    this._mdf = !1,
                    this.elem = t,
                    this.container = s,
                    this.comp = t.comp,
                    this.k = !1,
                    this.kf = !1,
                    this.vel = 0,
                    this.effectsSequence = [],
                    this._isFirstFrame = !0,
                    this.getValue = h,
                    this.setVValue = o,
                    this.addEffect = l
                }
                function c(t, e, i, s) {
                    this.propType = "multidimensional",
                    this.mult = i || 1,
                    this.data = e,
                    this._mdf = !1,
                    this.elem = t,
                    this.container = s,
                    this.comp = t.comp,
                    this.k = !1,
                    this.kf = !1,
                    this.frameId = -1;
                    var r, a = e.k.length;
                    this.v = createTypedArray("float32", a),
                    this.pv = createTypedArray("float32", a);
                    createTypedArray("float32", a);
                    for (this.vel = createTypedArray("float32", a),
                    r = 0; r < a; r += 1)
                        this.v[r] = e.k[r] * this.mult,
                        this.pv[r] = e.k[r];
                    this._isFirstFrame = !0,
                    this.effectsSequence = [],
                    this.getValue = h,
                    this.setVValue = o,
                    this.addEffect = l
                }
                function m(e, s, r, a) {
                    this.propType = "unidimensional",
                    this.keyframes = s.k,
                    this.offsetTime = e.data.st,
                    this.frameId = -1,
                    this._caching = {
                        lastFrame: t,
                        lastIndex: 0,
                        value: 0,
                        _lastKeyframeIndex: -1
                    },
                    this.k = !0,
                    this.kf = !0,
                    this.data = s,
                    this.mult = r || 1,
                    this.elem = e,
                    this.container = a,
                    this.comp = e.comp,
                    this.v = t,
                    this.pv = t,
                    this._isFirstFrame = !0,
                    this.getValue = h,
                    this.setVValue = o,
                    this.interpolateValue = i,
                    this.effectsSequence = [n.bind(this)],
                    this.addEffect = l
                }
                function f(e, s, r, a) {
                    this.propType = "multidimensional";
                    var p, c, m, f, u, d = s.k.length;
                    for (p = 0; p < d - 1; p += 1)
                        s.k[p].to && s.k[p].s && s.k[p].e && (c = s.k[p].s,
                        m = s.k[p].e,
                        f = s.k[p].to,
                        u = s.k[p].ti,
                        (2 === c.length && (c[0] !== m[0] || c[1] !== m[1]) && bez.pointOnLine2D(c[0], c[1], m[0], m[1], c[0] + f[0], c[1] + f[1]) && bez.pointOnLine2D(c[0], c[1], m[0], m[1], m[0] + u[0], m[1] + u[1]) || 3 === c.length && (c[0] !== m[0] || c[1] !== m[1] || c[2] !== m[2]) && bez.pointOnLine3D(c[0], c[1], c[2], m[0], m[1], m[2], c[0] + f[0], c[1] + f[1], c[2] + f[2]) && bez.pointOnLine3D(c[0], c[1], c[2], m[0], m[1], m[2], m[0] + u[0], m[1] + u[1], m[2] + u[2])) && (s.k[p].to = null,
                        s.k[p].ti = null),
                        c[0] === m[0] && c[1] === m[1] && 0 === f[0] && 0 === f[1] && 0 === u[0] && 0 === u[1] && (2 === c.length || c[2] === m[2] && 0 === f[2] && 0 === u[2]) && (s.k[p].to = null,
                        s.k[p].ti = null));
                    this.effectsSequence = [n.bind(this)],
                    this.keyframes = s.k,
                    this.offsetTime = e.data.st,
                    this.k = !0,
                    this.kf = !0,
                    this._isFirstFrame = !0,
                    this.mult = r || 1,
                    this.elem = e,
                    this.container = a,
                    this.comp = e.comp,
                    this.getValue = h,
                    this.setVValue = o,
                    this.interpolateValue = i,
                    this.frameId = -1;
                    var g = s.k[0].s.length;
                    for (this.v = createTypedArray("float32", g),
                    this.pv = createTypedArray("float32", g),
                    p = 0; p < g; p += 1)
                        this.v[p] = t,
                        this.pv[p] = t;
                    this._caching = {
                        lastFrame: t,
                        lastIndex: 0,
                        value: createTypedArray("float32", g)
                    },
                    this.addEffect = l
                }
                function u(t, e, i, s, r) {
                    var a;
                    if (e.k.length)
                        if ("number" === typeof e.k[0])
                            a = new c(t,e,s,r);
                        else
                            switch (i) {
                            case 0:
                                a = new m(t,e,s,r);
                                break;
                            case 1:
                                a = new f(t,e,s,r);
                                break
                            }
                    else
                        a = new p(t,e,s,r);
                    return a.effectsSequence.length && r.addDynamicProperty(a),
                    a
                }
                var d = {
                    getProp: u
                };
                return d
            }()
              , TransformPropertyFactory = function() {
                function t(t) {
                    var e = this._mdf;
                    this.iterateDynamicProperties(),
                    this._mdf = this._mdf || e,
                    this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                    this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                    this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                    this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                    this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                }
                function e(t) {
                    if (this.elem.globalData.frameId !== this.frameId) {
                        if (this._isDirty && (this.precalculateMatrix(),
                        this._isDirty = !1),
                        this.iterateDynamicProperties(),
                        this._mdf || t) {
                            if (this.v.cloneFromProps(this.pre.props),
                            this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                            this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                            this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v),
                            this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                            this.autoOriented) {
                                var e, i, s = this.elem.globalData.frameRate;
                                if (this.p && this.p.keyframes && this.p.getValueAtTime)
                                    this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / s, 0),
                                    i = this.p.getValueAtTime(this.p.keyframes[0].t / s, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / s, 0),
                                    i = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .01) / s, 0)) : (e = this.p.pv,
                                    i = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / s, this.p.offsetTime));
                                else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                    e = [],
                                    i = [];
                                    var r = this.px
                                      , a = this.py;
                                    r._caching.lastFrame + r.offsetTime <= r.keyframes[0].t ? (e[0] = r.getValueAtTime((r.keyframes[0].t + .01) / s, 0),
                                    e[1] = a.getValueAtTime((a.keyframes[0].t + .01) / s, 0),
                                    i[0] = r.getValueAtTime(r.keyframes[0].t / s, 0),
                                    i[1] = a.getValueAtTime(a.keyframes[0].t / s, 0)) : r._caching.lastFrame + r.offsetTime >= r.keyframes[r.keyframes.length - 1].t ? (e[0] = r.getValueAtTime(r.keyframes[r.keyframes.length - 1].t / s, 0),
                                    e[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / s, 0),
                                    i[0] = r.getValueAtTime((r.keyframes[r.keyframes.length - 1].t - .01) / s, 0),
                                    i[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / s, 0)) : (e = [r.pv, a.pv],
                                    i[0] = r.getValueAtTime((r._caching.lastFrame + r.offsetTime - .01) / s, r.offsetTime),
                                    i[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / s, a.offsetTime))
                                }
                                this.v.rotate(-Math.atan2(e[1] - i[1], e[0] - i[0]))
                            }
                            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                        }
                        this.frameId = this.elem.globalData.frameId
                    }
                }
                function i() {
                    if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                    this.appliedTransformations = 1,
                    !this.s.effectsSequence.length)) {
                        if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        this.appliedTransformations = 2,
                        this.sk) {
                            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length)
                                return;
                            this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                            this.appliedTransformations = 3
                        }
                        if (this.r) {
                            if (this.r.effectsSequence.length)
                                return;
                            this.pre.rotate(-this.r.v),
                            this.appliedTransformations = 4
                        } else
                            this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                            this.appliedTransformations = 4)
                    }
                }
                function s() {}
                function r(t) {
                    this._addDynamicProperty(t),
                    this.elem.addDynamicProperty(t),
                    this._isDirty = !0
                }
                function a(t, e, i) {
                    if (this.elem = t,
                    this.frameId = -1,
                    this.propType = "transform",
                    this.data = e,
                    this.v = new Matrix,
                    this.pre = new Matrix,
                    this.appliedTransformations = 0,
                    this.initDynamicPropertyContainer(i || t),
                    e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this),
                    this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this),
                    e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                        k: [0, 0, 0]
                    }, 1, 0, this),
                    e.rx) {
                        if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this),
                        this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this),
                        this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this),
                        e.or.k[0].ti) {
                            var s, r = e.or.k.length;
                            for (s = 0; s < r; s += 1)
                                e.or.k[s].to = e.or.k[s].ti = null
                        }
                        this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this),
                        this.or.sh = !0
                    } else
                        this.r = PropertyFactory.getProp(t, e.r || {
                            k: 0
                        }, 0, degToRads, this);
                    e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this),
                    this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)),
                    this.a = PropertyFactory.getProp(t, e.a || {
                        k: [0, 0, 0]
                    }, 1, 0, this),
                    this.s = PropertyFactory.getProp(t, e.s || {
                        k: [100, 100, 100]
                    }, 1, .01, this),
                    e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                        _mdf: !1,
                        v: 1
                    },
                    this._isDirty = !0,
                    this.dynamicProperties.length || this.getValue(!0)
                }
                function n(t, e, i) {
                    return new a(t,e,i)
                }
                return a.prototype = {
                    applyToMatrix: t,
                    getValue: e,
                    precalculateMatrix: i,
                    autoOrient: s
                },
                extendPrototype([DynamicPropertyContainer], a),
                a.prototype.addDynamicProperty = r,
                a.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty,
                {
                    getTransformProperty: n
                }
            }();
            function ShapePath() {
                this.c = !1,
                this._length = 0,
                this._maxLength = 8,
                this.v = createSizedArray(this._maxLength),
                this.o = createSizedArray(this._maxLength),
                this.i = createSizedArray(this._maxLength)
            }
            ShapePath.prototype.setPathData = function(t, e) {
                this.c = t,
                this.setLength(e);
                var i = 0;
                while (i < e)
                    this.v[i] = point_pool.newElement(),
                    this.o[i] = point_pool.newElement(),
                    this.i[i] = point_pool.newElement(),
                    i += 1
            }
            ,
            ShapePath.prototype.setLength = function(t) {
                while (this._maxLength < t)
                    this.doubleArrayLength();
                this._length = t
            }
            ,
            ShapePath.prototype.doubleArrayLength = function() {
                this.v = this.v.concat(createSizedArray(this._maxLength)),
                this.i = this.i.concat(createSizedArray(this._maxLength)),
                this.o = this.o.concat(createSizedArray(this._maxLength)),
                this._maxLength *= 2
            }
            ,
            ShapePath.prototype.setXYAt = function(t, e, i, s, r) {
                var a;
                switch (this._length = Math.max(this._length, s + 1),
                this._length >= this._maxLength && this.doubleArrayLength(),
                i) {
                case "v":
                    a = this.v;
                    break;
                case "i":
                    a = this.i;
                    break;
                case "o":
                    a = this.o;
                    break
                }
                (!a[s] || a[s] && !r) && (a[s] = point_pool.newElement()),
                a[s][0] = t,
                a[s][1] = e
            }
            ,
            ShapePath.prototype.setTripleAt = function(t, e, i, s, r, a, n, o) {
                this.setXYAt(t, e, "v", n, o),
                this.setXYAt(i, s, "o", n, o),
                this.setXYAt(r, a, "i", n, o)
            }
            ,
            ShapePath.prototype.reverse = function() {
                var t = new ShapePath;
                t.setPathData(this.c, this._length);
                var e = this.v
                  , i = this.o
                  , s = this.i
                  , r = 0;
                this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, !1),
                r = 1);
                var a, n = this._length - 1, o = this._length;
                for (a = r; a < o; a += 1)
                    t.setTripleAt(e[n][0], e[n][1], s[n][0], s[n][1], i[n][0], i[n][1], a, !1),
                    n -= 1;
                return t
            }
            ;
            var ShapePropertyFactory = function() {
                var t = -999999;
                function e(t, e, i) {
                    var s, r, a, n, o, h, l, p, c, m = i.lastIndex, f = this.keyframes;
                    if (t < f[0].t - this.offsetTime)
                        s = f[0].s[0],
                        a = !0,
                        m = 0;
                    else if (t >= f[f.length - 1].t - this.offsetTime)
                        s = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0],
                        a = !0;
                    else {
                        var u, d, g = m, y = f.length - 1, v = !0;
                        while (v) {
                            if (u = f[g],
                            d = f[g + 1],
                            d.t - this.offsetTime > t)
                                break;
                            g < y - 1 ? g += 1 : v = !1
                        }
                        if (a = 1 === u.h,
                        m = g,
                        !a) {
                            if (t >= d.t - this.offsetTime)
                                p = 1;
                            else if (t < u.t - this.offsetTime)
                                p = 0;
                            else {
                                var b;
                                u.__fnct ? b = u.__fnct : (b = BezierFactory.getBezierEasing(u.o.x, u.o.y, u.i.x, u.i.y).get,
                                u.__fnct = b),
                                p = b((t - (u.t - this.offsetTime)) / (d.t - this.offsetTime - (u.t - this.offsetTime)))
                            }
                            r = d.s ? d.s[0] : u.e[0]
                        }
                        s = u.s[0]
                    }
                    for (h = e._length,
                    l = s.i[0].length,
                    i.lastIndex = m,
                    n = 0; n < h; n += 1)
                        for (o = 0; o < l; o += 1)
                            c = a ? s.i[n][o] : s.i[n][o] + (r.i[n][o] - s.i[n][o]) * p,
                            e.i[n][o] = c,
                            c = a ? s.o[n][o] : s.o[n][o] + (r.o[n][o] - s.o[n][o]) * p,
                            e.o[n][o] = c,
                            c = a ? s.v[n][o] : s.v[n][o] + (r.v[n][o] - s.v[n][o]) * p,
                            e.v[n][o] = c
                }
                function i() {
                    var e = this.comp.renderedFrame - this.offsetTime
                      , i = this.keyframes[0].t - this.offsetTime
                      , s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime
                      , r = this._caching.lastFrame;
                    return r !== t && (r < i && e < i || r > s && e > s) || (this._caching.lastIndex = r < e ? this._caching.lastIndex : 0,
                    this.interpolateShape(e, this.pv, this._caching)),
                    this._caching.lastFrame = e,
                    this.pv
                }
                function s() {
                    this.paths = this.localShapeCollection
                }
                function r(t, e) {
                    if (t._length !== e._length || t.c !== e.c)
                        return !1;
                    var i, s = t._length;
                    for (i = 0; i < s; i += 1)
                        if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1])
                            return !1;
                    return !0
                }
                function a(t) {
                    r(this.v, t) || (this.v = shape_pool.clone(t),
                    this.localShapeCollection.releaseShapes(),
                    this.localShapeCollection.addShape(this.v),
                    this._mdf = !0,
                    this.paths = this.localShapeCollection)
                }
                function n() {
                    if (this.elem.globalData.frameId !== this.frameId)
                        if (this.effectsSequence.length)
                            if (this.lock)
                                this.setVValue(this.pv);
                            else {
                                this.lock = !0,
                                this._mdf = !1;
                                var t, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k, i = this.effectsSequence.length;
                                for (t = 0; t < i; t += 1)
                                    e = this.effectsSequence[t](e);
                                this.setVValue(e),
                                this.lock = !1,
                                this.frameId = this.elem.globalData.frameId
                            }
                        else
                            this._mdf = !1
                }
                function o(t, e, i) {
                    this.propType = "shape",
                    this.comp = t.comp,
                    this.container = t,
                    this.elem = t,
                    this.data = e,
                    this.k = !1,
                    this.kf = !1,
                    this._mdf = !1;
                    var r = 3 === i ? e.pt.k : e.ks.k;
                    this.v = shape_pool.clone(r),
                    this.pv = shape_pool.clone(this.v),
                    this.localShapeCollection = shapeCollection_pool.newShapeCollection(),
                    this.paths = this.localShapeCollection,
                    this.paths.addShape(this.v),
                    this.reset = s,
                    this.effectsSequence = []
                }
                function h(t) {
                    this.effectsSequence.push(t),
                    this.container.addDynamicProperty(this)
                }
                function l(e, r, a) {
                    this.propType = "shape",
                    this.comp = e.comp,
                    this.elem = e,
                    this.container = e,
                    this.offsetTime = e.data.st,
                    this.keyframes = 3 === a ? r.pt.k : r.ks.k,
                    this.k = !0,
                    this.kf = !0;
                    var n = this.keyframes[0].s[0].i.length;
                    this.keyframes[0].s[0].i[0].length;
                    this.v = shape_pool.newElement(),
                    this.v.setPathData(this.keyframes[0].s[0].c, n),
                    this.pv = shape_pool.clone(this.v),
                    this.localShapeCollection = shapeCollection_pool.newShapeCollection(),
                    this.paths = this.localShapeCollection,
                    this.paths.addShape(this.v),
                    this.lastFrame = t,
                    this.reset = s,
                    this._caching = {
                        lastFrame: t,
                        lastIndex: 0
                    },
                    this.effectsSequence = [i.bind(this)]
                }
                o.prototype.interpolateShape = e,
                o.prototype.getValue = n,
                o.prototype.setVValue = a,
                o.prototype.addEffect = h,
                l.prototype.getValue = n,
                l.prototype.interpolateShape = e,
                l.prototype.setVValue = a,
                l.prototype.addEffect = h;
                var p = function() {
                    var t = roundCorner;
                    function e(t, e) {
                        this.v = shape_pool.newElement(),
                        this.v.setPathData(!0, 4),
                        this.localShapeCollection = shapeCollection_pool.newShapeCollection(),
                        this.paths = this.localShapeCollection,
                        this.localShapeCollection.addShape(this.v),
                        this.d = e.d,
                        this.elem = t,
                        this.comp = t.comp,
                        this.frameId = -1,
                        this.initDynamicPropertyContainer(t),
                        this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                        this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
                        this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                        this.convertEllToPath())
                    }
                    return e.prototype = {
                        reset: s,
                        getValue: function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                            this.iterateDynamicProperties(),
                            this._mdf && this.convertEllToPath())
                        },
                        convertEllToPath: function() {
                            var e = this.p.v[0]
                              , i = this.p.v[1]
                              , s = this.s.v[0] / 2
                              , r = this.s.v[1] / 2
                              , a = 3 !== this.d
                              , n = this.v;
                            n.v[0][0] = e,
                            n.v[0][1] = i - r,
                            n.v[1][0] = a ? e + s : e - s,
                            n.v[1][1] = i,
                            n.v[2][0] = e,
                            n.v[2][1] = i + r,
                            n.v[3][0] = a ? e - s : e + s,
                            n.v[3][1] = i,
                            n.i[0][0] = a ? e - s * t : e + s * t,
                            n.i[0][1] = i - r,
                            n.i[1][0] = a ? e + s : e - s,
                            n.i[1][1] = i - r * t,
                            n.i[2][0] = a ? e + s * t : e - s * t,
                            n.i[2][1] = i + r,
                            n.i[3][0] = a ? e - s : e + s,
                            n.i[3][1] = i + r * t,
                            n.o[0][0] = a ? e + s * t : e - s * t,
                            n.o[0][1] = i - r,
                            n.o[1][0] = a ? e + s : e - s,
                            n.o[1][1] = i + r * t,
                            n.o[2][0] = a ? e - s * t : e + s * t,
                            n.o[2][1] = i + r,
                            n.o[3][0] = a ? e - s : e + s,
                            n.o[3][1] = i - r * t
                        }
                    },
                    extendPrototype([DynamicPropertyContainer], e),
                    e
                }()
                  , c = function() {
                    function t(t, e) {
                        this.v = shape_pool.newElement(),
                        this.v.setPathData(!0, 0),
                        this.elem = t,
                        this.comp = t.comp,
                        this.data = e,
                        this.frameId = -1,
                        this.d = e.d,
                        this.initDynamicPropertyContainer(t),
                        1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this),
                        this.is = PropertyFactory.getProp(t, e.is, 0, .01, this),
                        this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath,
                        this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this),
                        this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                        this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this),
                        this.or = PropertyFactory.getProp(t, e.or, 0, 0, this),
                        this.os = PropertyFactory.getProp(t, e.os, 0, .01, this),
                        this.localShapeCollection = shapeCollection_pool.newShapeCollection(),
                        this.localShapeCollection.addShape(this.v),
                        this.paths = this.localShapeCollection,
                        this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                        this.convertToPath())
                    }
                    return t.prototype = {
                        reset: s,
                        getValue: function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                            this.iterateDynamicProperties(),
                            this._mdf && this.convertToPath())
                        },
                        convertStarToPath: function() {
                            var t, e, i, s, r = 2 * Math.floor(this.pt.v), a = 2 * Math.PI / r, n = !0, o = this.or.v, h = this.ir.v, l = this.os.v, p = this.is.v, c = 2 * Math.PI * o / (2 * r), m = 2 * Math.PI * h / (2 * r), f = -Math.PI / 2;
                            f += this.r.v;
                            var u = 3 === this.data.d ? -1 : 1;
                            for (this.v._length = 0,
                            t = 0; t < r; t += 1) {
                                e = n ? o : h,
                                i = n ? l : p,
                                s = n ? c : m;
                                var d = e * Math.cos(f)
                                  , g = e * Math.sin(f)
                                  , y = 0 === d && 0 === g ? 0 : g / Math.sqrt(d * d + g * g)
                                  , v = 0 === d && 0 === g ? 0 : -d / Math.sqrt(d * d + g * g);
                                d += +this.p.v[0],
                                g += +this.p.v[1],
                                this.v.setTripleAt(d, g, d - y * s * i * u, g - v * s * i * u, d + y * s * i * u, g + v * s * i * u, t, !0),
                                n = !n,
                                f += a * u
                            }
                        },
                        convertPolygonToPath: function() {
                            var t, e = Math.floor(this.pt.v), i = 2 * Math.PI / e, s = this.or.v, r = this.os.v, a = 2 * Math.PI * s / (4 * e), n = -Math.PI / 2, o = 3 === this.data.d ? -1 : 1;
                            for (n += this.r.v,
                            this.v._length = 0,
                            t = 0; t < e; t += 1) {
                                var h = s * Math.cos(n)
                                  , l = s * Math.sin(n)
                                  , p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l)
                                  , c = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                h += +this.p.v[0],
                                l += +this.p.v[1],
                                this.v.setTripleAt(h, l, h - p * a * r * o, l - c * a * r * o, h + p * a * r * o, l + c * a * r * o, t, !0),
                                n += i * o
                            }
                            this.paths.length = 0,
                            this.paths[0] = this.v
                        }
                    },
                    extendPrototype([DynamicPropertyContainer], t),
                    t
                }()
                  , m = function() {
                    function t(t, e) {
                        this.v = shape_pool.newElement(),
                        this.v.c = !0,
                        this.localShapeCollection = shapeCollection_pool.newShapeCollection(),
                        this.localShapeCollection.addShape(this.v),
                        this.paths = this.localShapeCollection,
                        this.elem = t,
                        this.comp = t.comp,
                        this.frameId = -1,
                        this.d = e.d,
                        this.initDynamicPropertyContainer(t),
                        this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                        this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
                        this.r = PropertyFactory.getProp(t, e.r, 0, 0, this),
                        this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                        this.convertRectToPath())
                    }
                    return t.prototype = {
                        convertRectToPath: function() {
                            var t = this.p.v[0]
                              , e = this.p.v[1]
                              , i = this.s.v[0] / 2
                              , s = this.s.v[1] / 2
                              , r = bm_min(i, s, this.r.v)
                              , a = r * (1 - roundCorner);
                            this.v._length = 0,
                            2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + r, t + i, e - s + a, 0, !0),
                            this.v.setTripleAt(t + i, e + s - r, t + i, e + s - a, t + i, e + s - r, 1, !0),
                            0 !== r ? (this.v.setTripleAt(t + i - r, e + s, t + i - r, e + s, t + i - a, e + s, 2, !0),
                            this.v.setTripleAt(t - i + r, e + s, t - i + a, e + s, t - i + r, e + s, 3, !0),
                            this.v.setTripleAt(t - i, e + s - r, t - i, e + s - r, t - i, e + s - a, 4, !0),
                            this.v.setTripleAt(t - i, e - s + r, t - i, e - s + a, t - i, e - s + r, 5, !0),
                            this.v.setTripleAt(t - i + r, e - s, t - i + r, e - s, t - i + a, e - s, 6, !0),
                            this.v.setTripleAt(t + i - r, e - s, t + i - a, e - s, t + i - r, e - s, 7, !0)) : (this.v.setTripleAt(t - i, e + s, t - i + a, e + s, t - i, e + s, 2),
                            this.v.setTripleAt(t - i, e - s, t - i, e - s + a, t - i, e - s, 3))) : (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + a, t + i, e - s + r, 0, !0),
                            0 !== r ? (this.v.setTripleAt(t + i - r, e - s, t + i - r, e - s, t + i - a, e - s, 1, !0),
                            this.v.setTripleAt(t - i + r, e - s, t - i + a, e - s, t - i + r, e - s, 2, !0),
                            this.v.setTripleAt(t - i, e - s + r, t - i, e - s + r, t - i, e - s + a, 3, !0),
                            this.v.setTripleAt(t - i, e + s - r, t - i, e + s - a, t - i, e + s - r, 4, !0),
                            this.v.setTripleAt(t - i + r, e + s, t - i + r, e + s, t - i + a, e + s, 5, !0),
                            this.v.setTripleAt(t + i - r, e + s, t + i - a, e + s, t + i - r, e + s, 6, !0),
                            this.v.setTripleAt(t + i, e + s - r, t + i, e + s - r, t + i, e + s - a, 7, !0)) : (this.v.setTripleAt(t - i, e - s, t - i + a, e - s, t - i, e - s, 1, !0),
                            this.v.setTripleAt(t - i, e + s, t - i, e + s - a, t - i, e + s, 2, !0),
                            this.v.setTripleAt(t + i, e + s, t + i - a, e + s, t + i, e + s, 3, !0)))
                        },
                        getValue: function(t) {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                            this.iterateDynamicProperties(),
                            this._mdf && this.convertRectToPath())
                        },
                        reset: s
                    },
                    extendPrototype([DynamicPropertyContainer], t),
                    t
                }();
                function f(t, e, i) {
                    var s;
                    if (3 === i || 4 === i) {
                        var r = 3 === i ? e.pt : e.ks
                          , a = r.k;
                        s = a.length ? new l(t,e,i) : new o(t,e,i)
                    } else
                        5 === i ? s = new m(t,e) : 6 === i ? s = new p(t,e) : 7 === i && (s = new c(t,e));
                    return s.k && t.addDynamicProperty(s),
                    s
                }
                function u() {
                    return o
                }
                function d() {
                    return l
                }
                var g = {};
                return g.getShapeProp = f,
                g.getConstructorFunction = u,
                g.getKeyframedConstructorFunction = d,
                g
            }()
              , ShapeModifiers = function() {
                var t = {}
                  , e = {};
                function i(t, i) {
                    e[t] || (e[t] = i)
                }
                function s(t, i, s) {
                    return new e[t](i,s)
                }
                return t.registerModifier = i,
                t.getModifier = s,
                t
            }();
            function ShapeModifier() {}
            function TrimModifier() {}
            function RoundCornersModifier() {}
            function RepeaterModifier() {}
            function ShapeCollection() {
                this._length = 0,
                this._maxLength = 4,
                this.shapes = createSizedArray(this._maxLength)
            }
            function DashProperty(t, e, i, s) {
                this.elem = t,
                this.frameId = -1,
                this.dataProps = createSizedArray(e.length),
                this.renderer = i,
                this.k = !1,
                this.dashStr = "",
                this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0),
                this.dashoffset = createTypedArray("float32", 1),
                this.initDynamicPropertyContainer(s);
                var r, a, n = e.length || 0;
                for (r = 0; r < n; r += 1)
                    a = PropertyFactory.getProp(t, e[r].v, 0, 0, this),
                    this.k = a.k || this.k,
                    this.dataProps[r] = {
                        n: e[r].n,
                        p: a
                    };
                this.k || this.getValue(!0),
                this._isAnimated = this.k
            }
            function GradientProperty(t, e, i) {
                this.data = e,
                this.c = createTypedArray("uint8c", 4 * e.p);
                var s = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                this.o = createTypedArray("float32", s),
                this._cmdf = !1,
                this._omdf = !1,
                this._collapsable = this.checkCollapsable(),
                this._hasOpacity = s,
                this.initDynamicPropertyContainer(i),
                this.prop = PropertyFactory.getProp(t, e.k, 1, null, this),
                this.k = this.prop.k,
                this.getValue(!0)
            }
            ShapeModifier.prototype.initModifierProperties = function() {}
            ,
            ShapeModifier.prototype.addShapeToModifier = function() {}
            ,
            ShapeModifier.prototype.addShape = function(t) {
                if (!this.closed) {
                    t.sh.container.addDynamicProperty(t.sh);
                    var e = {
                        shape: t.sh,
                        data: t,
                        localShapeCollection: shapeCollection_pool.newShapeCollection()
                    };
                    this.shapes.push(e),
                    this.addShapeToModifier(e),
                    this._isAnimated && t.setAsAnimated()
                }
            }
            ,
            ShapeModifier.prototype.init = function(t, e) {
                this.shapes = [],
                this.elem = t,
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e),
                this.frameId = initialDefaultFrame,
                this.closed = !1,
                this.k = !1,
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }
            ,
            ShapeModifier.prototype.processKeys = function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                this.iterateDynamicProperties())
            }
            ,
            extendPrototype([DynamicPropertyContainer], ShapeModifier),
            extendPrototype([ShapeModifier], TrimModifier),
            TrimModifier.prototype.initModifierProperties = function(t, e) {
                this.s = PropertyFactory.getProp(t, e.s, 0, .01, this),
                this.e = PropertyFactory.getProp(t, e.e, 0, .01, this),
                this.o = PropertyFactory.getProp(t, e.o, 0, 0, this),
                this.sValue = 0,
                this.eValue = 0,
                this.getValue = this.processKeys,
                this.m = e.m,
                this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
            }
            ,
            TrimModifier.prototype.addShapeToModifier = function(t) {
                t.pathsData = []
            }
            ,
            TrimModifier.prototype.calculateShapeEdges = function(t, e, i, s, r) {
                var a = [];
                e <= 1 ? a.push({
                    s: t,
                    e: e
                }) : t >= 1 ? a.push({
                    s: t - 1,
                    e: e - 1
                }) : (a.push({
                    s: t,
                    e: 1
                }),
                a.push({
                    s: 0,
                    e: e - 1
                }));
                var n, o, h = [], l = a.length;
                for (n = 0; n < l; n += 1) {
                    var p, c;
                    if (o = a[n],
                    o.e * r < s || o.s * r > s + i)
                        ;
                    else
                        p = o.s * r <= s ? 0 : (o.s * r - s) / i,
                        c = o.e * r >= s + i ? 1 : (o.e * r - s) / i,
                        h.push([p, c])
                }
                return h.length || h.push([0, 0]),
                h
            }
            ,
            TrimModifier.prototype.releasePathsData = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1)
                    segments_length_pool.release(t[e]);
                return t.length = 0,
                t
            }
            ,
            TrimModifier.prototype.processShapes = function(t) {
                var e, i, s;
                if (this._mdf || t) {
                    var r = this.o.v % 360 / 360;
                    if (r < 0 && (r += 1),
                    e = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + r,
                    i = (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + r,
                    e > i) {
                        var a = e;
                        e = i,
                        i = a
                    }
                    e = 1e-4 * Math.round(1e4 * e),
                    i = 1e-4 * Math.round(1e4 * i),
                    this.sValue = e,
                    this.eValue = i
                } else
                    e = this.sValue,
                    i = this.eValue;
                var n, o, h, l, p, c, m = this.shapes.length, f = 0;
                if (i === e)
                    for (n = 0; n < m; n += 1)
                        this.shapes[n].localShapeCollection.releaseShapes(),
                        this.shapes[n].shape._mdf = !0,
                        this.shapes[n].shape.paths = this.shapes[n].localShapeCollection;
                else if (1 === i && 0 === e || 0 === i && 1 === e) {
                    if (this._mdf)
                        for (n = 0; n < m; n += 1)
                            this.shapes[n].pathsData.length = 0,
                            this.shapes[n].shape._mdf = !0
                } else {
                    var u, d, g = [];
                    for (n = 0; n < m; n += 1)
                        if (u = this.shapes[n],
                        u.shape._mdf || this._mdf || t || 2 === this.m) {
                            if (s = u.shape.paths,
                            h = s._length,
                            c = 0,
                            !u.shape._mdf && u.pathsData.length)
                                c = u.totalShapeLength;
                            else {
                                for (l = this.releasePathsData(u.pathsData),
                                o = 0; o < h; o += 1)
                                    p = bez.getSegmentsLength(s.shapes[o]),
                                    l.push(p),
                                    c += p.totalLength;
                                u.totalShapeLength = c,
                                u.pathsData = l
                            }
                            f += c,
                            u.shape._mdf = !0
                        } else
                            u.shape.paths = u.localShapeCollection;
                    var y, v = e, b = i, x = 0;
                    for (n = m - 1; n >= 0; n -= 1)
                        if (u = this.shapes[n],
                        u.shape._mdf) {
                            for (d = u.localShapeCollection,
                            d.releaseShapes(),
                            2 === this.m && m > 1 ? (y = this.calculateShapeEdges(e, i, u.totalShapeLength, x, f),
                            x += u.totalShapeLength) : y = [[v, b]],
                            h = y.length,
                            o = 0; o < h; o += 1) {
                                v = y[o][0],
                                b = y[o][1],
                                g.length = 0,
                                b <= 1 ? g.push({
                                    s: u.totalShapeLength * v,
                                    e: u.totalShapeLength * b
                                }) : v >= 1 ? g.push({
                                    s: u.totalShapeLength * (v - 1),
                                    e: u.totalShapeLength * (b - 1)
                                }) : (g.push({
                                    s: u.totalShapeLength * v,
                                    e: u.totalShapeLength
                                }),
                                g.push({
                                    s: 0,
                                    e: u.totalShapeLength * (b - 1)
                                }));
                                var E = this.addShapes(u, g[0]);
                                if (g[0].s !== g[0].e) {
                                    if (g.length > 1) {
                                        var w = u.shape.paths.shapes[u.shape.paths._length - 1];
                                        if (w.c) {
                                            var C = E.pop();
                                            this.addPaths(E, d),
                                            E = this.addShapes(u, g[1], C)
                                        } else
                                            this.addPaths(E, d),
                                            E = this.addShapes(u, g[1])
                                    }
                                    this.addPaths(E, d)
                                }
                            }
                            u.shape.paths = d
                        }
                }
            }
            ,
            TrimModifier.prototype.addPaths = function(t, e) {
                var i, s = t.length;
                for (i = 0; i < s; i += 1)
                    e.addShape(t[i])
            }
            ,
            TrimModifier.prototype.addSegment = function(t, e, i, s, r, a, n) {
                r.setXYAt(e[0], e[1], "o", a),
                r.setXYAt(i[0], i[1], "i", a + 1),
                n && r.setXYAt(t[0], t[1], "v", a),
                r.setXYAt(s[0], s[1], "v", a + 1)
            }
            ,
            TrimModifier.prototype.addSegmentFromArray = function(t, e, i, s) {
                e.setXYAt(t[1], t[5], "o", i),
                e.setXYAt(t[2], t[6], "i", i + 1),
                s && e.setXYAt(t[0], t[4], "v", i),
                e.setXYAt(t[3], t[7], "v", i + 1)
            }
            ,
            TrimModifier.prototype.addShapes = function(t, e, i) {
                var s, r, a, n, o, h, l, p, c = t.pathsData, m = t.shape.paths.shapes, f = t.shape.paths._length, u = 0, d = [], g = !0;
                for (i ? (o = i._length,
                p = i._length) : (i = shape_pool.newElement(),
                o = 0,
                p = 0),
                d.push(i),
                s = 0; s < f; s += 1) {
                    for (h = c[s].lengths,
                    i.c = m[s].c,
                    a = m[s].c ? h.length : h.length + 1,
                    r = 1; r < a; r += 1)
                        if (n = h[r - 1],
                        u + n.addedLength < e.s)
                            u += n.addedLength,
                            i.c = !1;
                        else {
                            if (u > e.e) {
                                i.c = !1;
                                break
                            }
                            e.s <= u && e.e >= u + n.addedLength ? (this.addSegment(m[s].v[r - 1], m[s].o[r - 1], m[s].i[r], m[s].v[r], i, o, g),
                            g = !1) : (l = bez.getNewSegment(m[s].v[r - 1], m[s].v[r], m[s].o[r - 1], m[s].i[r], (e.s - u) / n.addedLength, (e.e - u) / n.addedLength, h[r - 1]),
                            this.addSegmentFromArray(l, i, o, g),
                            g = !1,
                            i.c = !1),
                            u += n.addedLength,
                            o += 1
                        }
                    if (m[s].c && h.length) {
                        if (n = h[r - 1],
                        u <= e.e) {
                            var y = h[r - 1].addedLength;
                            e.s <= u && e.e >= u + y ? (this.addSegment(m[s].v[r - 1], m[s].o[r - 1], m[s].i[0], m[s].v[0], i, o, g),
                            g = !1) : (l = bez.getNewSegment(m[s].v[r - 1], m[s].v[0], m[s].o[r - 1], m[s].i[0], (e.s - u) / y, (e.e - u) / y, h[r - 1]),
                            this.addSegmentFromArray(l, i, o, g),
                            g = !1,
                            i.c = !1)
                        } else
                            i.c = !1;
                        u += n.addedLength,
                        o += 1
                    }
                    if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p),
                    i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)),
                    u > e.e)
                        break;
                    s < f - 1 && (i = shape_pool.newElement(),
                    g = !0,
                    d.push(i),
                    o = 0)
                }
                return d
            }
            ,
            ShapeModifiers.registerModifier("tm", TrimModifier),
            extendPrototype([ShapeModifier], RoundCornersModifier),
            RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys,
                this.rd = PropertyFactory.getProp(t, e.r, 0, null, this),
                this._isAnimated = !!this.rd.effectsSequence.length
            }
            ,
            RoundCornersModifier.prototype.processPath = function(t, e) {
                var i = shape_pool.newElement();
                i.c = t.c;
                var s, r, a, n, o, h, l, p, c, m, f, u, d, g = t._length, y = 0;
                for (s = 0; s < g; s += 1)
                    r = t.v[s],
                    n = t.o[s],
                    a = t.i[s],
                    r[0] === n[0] && r[1] === n[1] && r[0] === a[0] && r[1] === a[1] ? 0 !== s && s !== g - 1 || t.c ? (o = 0 === s ? t.v[g - 1] : t.v[s - 1],
                    h = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2)),
                    l = h ? Math.min(h / 2, e) / h : 0,
                    p = u = r[0] + (o[0] - r[0]) * l,
                    c = d = r[1] - (r[1] - o[1]) * l,
                    m = p - (p - r[0]) * roundCorner,
                    f = c - (c - r[1]) * roundCorner,
                    i.setTripleAt(p, c, m, f, u, d, y),
                    y += 1,
                    o = s === g - 1 ? t.v[0] : t.v[s + 1],
                    h = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2)),
                    l = h ? Math.min(h / 2, e) / h : 0,
                    p = m = r[0] + (o[0] - r[0]) * l,
                    c = f = r[1] + (o[1] - r[1]) * l,
                    u = p - (p - r[0]) * roundCorner,
                    d = c - (c - r[1]) * roundCorner,
                    i.setTripleAt(p, c, m, f, u, d, y),
                    y += 1) : (i.setTripleAt(r[0], r[1], n[0], n[1], a[0], a[1], y),
                    y += 1) : (i.setTripleAt(t.v[s][0], t.v[s][1], t.o[s][0], t.o[s][1], t.i[s][0], t.i[s][1], y),
                    y += 1);
                return i
            }
            ,
            RoundCornersModifier.prototype.processShapes = function(t) {
                var e, i, s, r, a, n, o = this.shapes.length, h = this.rd.v;
                if (0 !== h)
                    for (i = 0; i < o; i += 1) {
                        if (a = this.shapes[i],
                        a.shape.paths,
                        n = a.localShapeCollection,
                        a.shape._mdf || this._mdf || t)
                            for (n.releaseShapes(),
                            a.shape._mdf = !0,
                            e = a.shape.paths.shapes,
                            r = a.shape.paths._length,
                            s = 0; s < r; s += 1)
                                n.addShape(this.processPath(e[s], h));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }
            ,
            ShapeModifiers.registerModifier("rd", RoundCornersModifier),
            extendPrototype([ShapeModifier], RepeaterModifier),
            RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys,
                this.c = PropertyFactory.getProp(t, e.c, 0, null, this),
                this.o = PropertyFactory.getProp(t, e.o, 0, null, this),
                this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this),
                this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this),
                this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this),
                this.data = e,
                this.dynamicProperties.length || this.getValue(!0),
                this._isAnimated = !!this.dynamicProperties.length,
                this.pMatrix = new Matrix,
                this.rMatrix = new Matrix,
                this.sMatrix = new Matrix,
                this.tMatrix = new Matrix,
                this.matrix = new Matrix
            }
            ,
            RepeaterModifier.prototype.applyTransforms = function(t, e, i, s, r, a) {
                var n = a ? -1 : 1
                  , o = s.s.v[0] + (1 - s.s.v[0]) * (1 - r)
                  , h = s.s.v[1] + (1 - s.s.v[1]) * (1 - r);
                t.translate(s.p.v[0] * n * r, s.p.v[1] * n * r, s.p.v[2]),
                e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
                e.rotate(-s.r.v * n * r),
                e.translate(s.a.v[0], s.a.v[1], s.a.v[2]),
                i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
                i.scale(a ? 1 / o : o, a ? 1 / h : h),
                i.translate(s.a.v[0], s.a.v[1], s.a.v[2])
            }
            ,
            RepeaterModifier.prototype.init = function(t, e, i, s) {
                this.elem = t,
                this.arr = e,
                this.pos = i,
                this.elemsData = s,
                this._currentCopies = 0,
                this._elements = [],
                this._groups = [],
                this.frameId = -1,
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e[i]);
                while (i > 0)
                    i -= 1,
                    this._elements.unshift(e[i]),
                    1;
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }
            ,
            RepeaterModifier.prototype.resetElements = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1)
                    t[e]._processed = !1,
                    "gr" === t[e].ty && this.resetElements(t[e].it)
            }
            ,
            RepeaterModifier.prototype.cloneElements = function(t) {
                t.length;
                var e = JSON.parse(JSON.stringify(t));
                return this.resetElements(e),
                e
            }
            ,
            RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                var i, s = t.length;
                for (i = 0; i < s; i += 1)
                    t[i]._render = e,
                    "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
            }
            ,
            RepeaterModifier.prototype.processShapes = function(t) {
                var e, i, s, r, a;
                if (this._mdf || t) {
                    var n, o = Math.ceil(this.c.v);
                    if (this._groups.length < o) {
                        while (this._groups.length < o) {
                            var h = {
                                it: this.cloneElements(this._elements),
                                ty: "gr"
                            };
                            h.it.push({
                                a: {
                                    a: 0,
                                    ix: 1,
                                    k: [0, 0]
                                },
                                nm: "Transform",
                                o: {
                                    a: 0,
                                    ix: 7,
                                    k: 100
                                },
                                p: {
                                    a: 0,
                                    ix: 2,
                                    k: [0, 0]
                                },
                                r: {
                                    a: 1,
                                    ix: 6,
                                    k: [{
                                        s: 0,
                                        e: 0,
                                        t: 0
                                    }, {
                                        s: 0,
                                        e: 0,
                                        t: 1
                                    }]
                                },
                                s: {
                                    a: 0,
                                    ix: 3,
                                    k: [100, 100]
                                },
                                sa: {
                                    a: 0,
                                    ix: 5,
                                    k: 0
                                },
                                sk: {
                                    a: 0,
                                    ix: 4,
                                    k: 0
                                },
                                ty: "tr"
                            }),
                            this.arr.splice(0, 0, h),
                            this._groups.splice(0, 0, h),
                            this._currentCopies += 1
                        }
                        this.elem.reloadShapes()
                    }
                    for (a = 0,
                    s = 0; s <= this._groups.length - 1; s += 1)
                        n = a < o,
                        this._groups[s]._render = n,
                        this.changeGroupRender(this._groups[s].it, n),
                        a += 1;
                    this._currentCopies = o;
                    var l = this.o.v
                      , p = l % 1
                      , c = l > 0 ? Math.floor(l) : Math.ceil(l)
                      , m = (this.tr.v.props,
                    this.pMatrix.props)
                      , f = this.rMatrix.props
                      , u = this.sMatrix.props;
                    this.pMatrix.reset(),
                    this.rMatrix.reset(),
                    this.sMatrix.reset(),
                    this.tMatrix.reset(),
                    this.matrix.reset();
                    var d, g, y = 0;
                    if (l > 0) {
                        while (y < c)
                            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                            y += 1;
                        p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1),
                        y += p)
                    } else if (l < 0) {
                        while (y > c)
                            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0),
                            y -= 1;
                        p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0),
                        y -= p)
                    }
                    s = 1 === this.data.m ? 0 : this._currentCopies - 1,
                    r = 1 === this.data.m ? 1 : -1,
                    a = this._currentCopies;
                    while (a) {
                        if (e = this.elemsData[s].it,
                        i = e[e.length - 1].transform.mProps.v.props,
                        g = i.length,
                        e[e.length - 1].transform.mProps._mdf = !0,
                        e[e.length - 1].transform.op._mdf = !0,
                        e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)),
                        0 !== y) {
                            for ((0 !== s && 1 === r || s !== this._currentCopies - 1 && -1 === r) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                            this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]),
                            this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]),
                            this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]),
                            d = 0; d < g; d += 1)
                                i[d] = this.matrix.props[d];
                            this.matrix.reset()
                        } else
                            for (this.matrix.reset(),
                            d = 0; d < g; d += 1)
                                i[d] = this.matrix.props[d];
                        y += 1,
                        a -= 1,
                        s += r
                    }
                } else {
                    a = this._currentCopies,
                    s = 0,
                    r = 1;
                    while (a)
                        e = this.elemsData[s].it,
                        i = e[e.length - 1].transform.mProps.v.props,
                        e[e.length - 1].transform.mProps._mdf = !1,
                        e[e.length - 1].transform.op._mdf = !1,
                        a -= 1,
                        s += r
                }
            }
            ,
            RepeaterModifier.prototype.addShape = function() {}
            ,
            ShapeModifiers.registerModifier("rp", RepeaterModifier),
            ShapeCollection.prototype.addShape = function(t) {
                this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)),
                this._maxLength *= 2),
                this.shapes[this._length] = t,
                this._length += 1
            }
            ,
            ShapeCollection.prototype.releaseShapes = function() {
                var t;
                for (t = 0; t < this._length; t += 1)
                    shape_pool.release(this.shapes[t]);
                this._length = 0
            }
            ,
            DashProperty.prototype.getValue = function(t) {
                if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId,
                this.iterateDynamicProperties(),
                this._mdf = this._mdf || t,
                this._mdf)) {
                    var e = 0
                      , i = this.dataProps.length;
                    for ("svg" === this.renderer && (this.dashStr = ""),
                    e = 0; e < i; e += 1)
                        "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                }
            }
            ,
            extendPrototype([DynamicPropertyContainer], DashProperty),
            GradientProperty.prototype.comparePoints = function(t, e) {
                var i, s = 0, r = this.o.length / 2;
                while (s < r) {
                    if (i = Math.abs(t[4 * s] - t[4 * e + 2 * s]),
                    i > .01)
                        return !1;
                    s += 1
                }
                return !0
            }
            ,
            GradientProperty.prototype.checkCollapsable = function() {
                if (this.o.length / 2 !== this.c.length / 4)
                    return !1;
                if (this.data.k.k[0].s) {
                    var t = 0
                      , e = this.data.k.k.length;
                    while (t < e) {
                        if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                            return !1;
                        t += 1
                    }
                } else if (!this.comparePoints(this.data.k.k, this.data.p))
                    return !1;
                return !0
            }
            ,
            GradientProperty.prototype.getValue = function(t) {
                if (this.prop.getValue(),
                this._mdf = !1,
                this._cmdf = !1,
                this._omdf = !1,
                this.prop._mdf || t) {
                    var e, i, s, r = 4 * this.data.p;
                    for (e = 0; e < r; e += 1)
                        i = e % 4 === 0 ? 100 : 255,
                        s = Math.round(this.prop.v[e] * i),
                        this.c[e] !== s && (this.c[e] = s,
                        this._cmdf = !t);
                    if (this.o.length)
                        for (r = this.prop.v.length,
                        e = 4 * this.data.p; e < r; e += 1)
                            i = e % 2 === 0 ? 100 : 1,
                            s = e % 2 === 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e],
                            this.o[e - 4 * this.data.p] !== s && (this.o[e - 4 * this.data.p] = s,
                            this._omdf = !t);
                    this._mdf = !t
                }
            }
            ,
            extendPrototype([DynamicPropertyContainer], GradientProperty);
            var buildShapeString = function(t, e, i, s) {
                if (0 === e)
                    return "";
                var r, a = t.o, n = t.i, o = t.v, h = " M" + s.applyToPointStringified(o[0][0], o[0][1]);
                for (r = 1; r < e; r += 1)
                    h += " C" + s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) + " " + s.applyToPointStringified(n[r][0], n[r][1]) + " " + s.applyToPointStringified(o[r][0], o[r][1]);
                return i && e && (h += " C" + s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(o[0][0], o[0][1]),
                h += "z"),
                h
            }
              , ImagePreloader = function() {
                var t = function() {
                    var t = createTag("canvas");
                    t.width = 1,
                    t.height = 1;
                    var e = t.getContext("2d");
                    return e.fillStyle = "rgba(0,0,0,0)",
                    e.fillRect(0, 0, 1, 1),
                    t
                }();
                function e() {
                    this.loadedAssets += 1,
                    this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }
                function i(t, e, i) {
                    var s = "";
                    if (t.e)
                        s = t.p;
                    else if (e) {
                        var r = t.p;
                        -1 !== r.indexOf("images/") && (r = r.split("/")[1]),
                        s = e + r
                    } else
                        s = i,
                        s += t.u ? t.u : "",
                        s += t.p;
                    return s
                }
                function s(e) {
                    var s = i(e, this.assetsPath, this.path)
                      , r = createTag("img");
                    r.crossOrigin = "anonymous",
                    r.addEventListener("load", this._imageLoaded.bind(this), !1),
                    r.addEventListener("error", function() {
                        a.img = t,
                        this._imageLoaded()
                    }
                    .bind(this), !1),
                    r.src = s;
                    var a = {
                        img: r,
                        assetData: e
                    };
                    return a
                }
                function r(t, e) {
                    this.imagesLoadedCb = e;
                    var i, s = t.length;
                    for (i = 0; i < s; i += 1)
                        t[i].layers || (this.totalImages += 1,
                        this.images.push(this._createImageData(t[i])))
                }
                function a(t) {
                    this.path = t || ""
                }
                function n(t) {
                    this.assetsPath = t || ""
                }
                function o(t) {
                    var e = 0
                      , i = this.images.length;
                    while (e < i) {
                        if (this.images[e].assetData === t)
                            return this.images[e].img;
                        e += 1
                    }
                }
                function h() {
                    this.imagesLoadedCb = null,
                    this.images.length = 0
                }
                function l() {
                    return this.totalImages === this.loadedAssets
                }
                return function() {
                    this.loadAssets = r,
                    this.setAssetsPath = n,
                    this.setPath = a,
                    this.loaded = l,
                    this.destroy = h,
                    this.getImage = o,
                    this._createImageData = s,
                    this._imageLoaded = e,
                    this.assetsPath = "",
                    this.path = "",
                    this.totalImages = 0,
                    this.loadedAssets = 0,
                    this.imagesLoadedCb = null,
                    this.images = []
                }
            }()
              , featureSupport = function() {
                var t = {
                    maskType: !0
                };
                return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1),
                t
            }()
              , filtersFactory = function() {
                var t = {};
                function e(t) {
                    var e = createNS("filter");
                    return e.setAttribute("id", t),
                    e.setAttribute("filterUnits", "objectBoundingBox"),
                    e.setAttribute("x", "0%"),
                    e.setAttribute("y", "0%"),
                    e.setAttribute("width", "100%"),
                    e.setAttribute("height", "100%"),
                    e
                }
                function i() {
                    var t = createNS("feColorMatrix");
                    return t.setAttribute("type", "matrix"),
                    t.setAttribute("color-interpolation-filters", "sRGB"),
                    t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),
                    t
                }
                return t.createFilter = e,
                t.createAlphaToLuminanceFilter = i,
                t
            }()
              , assetLoader = function() {
                function t(t) {
                    return t.response && "object" === typeof t.response ? t.response : t.response && "string" === typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0
                }
                function e(e, i, s) {
                    var r, a = new XMLHttpRequest;
                    a.open("GET", e, !0);
                    try {
                        a.responseType = "json"
                    } catch (n) {}
                    a.send(),
                    a.onreadystatechange = function() {
                        if (4 == a.readyState)
                            if (200 == a.status)
                                r = t(a),
                                i(r);
                            else
                                try {
                                    r = t(a),
                                    i(r)
                                } catch (n) {
                                    s && s(n)
                                }
                    }
                }
                return {
                    load: e
                }
            }();
            function TextAnimatorProperty(t, e, i) {
                this._isFirstFrame = !0,
                this._hasMaskedPath = !1,
                this._frameId = -1,
                this._textData = t,
                this._renderType = e,
                this._elem = i,
                this._animatorsData = createSizedArray(this._textData.a.length),
                this._pathData = {},
                this._moreOptions = {
                    alignment: {}
                },
                this.renderedLetters = [],
                this.lettersChangedFlag = !1,
                this.initDynamicPropertyContainer(i)
            }
            function TextAnimatorDataProperty(t, e, i) {
                var s = {
                    propType: !1
                }
                  , r = PropertyFactory.getProp
                  , a = e.a;
                this.a = {
                    r: a.r ? r(t, a.r, 0, degToRads, i) : s,
                    rx: a.rx ? r(t, a.rx, 0, degToRads, i) : s,
                    ry: a.ry ? r(t, a.ry, 0, degToRads, i) : s,
                    sk: a.sk ? r(t, a.sk, 0, degToRads, i) : s,
                    sa: a.sa ? r(t, a.sa, 0, degToRads, i) : s,
                    s: a.s ? r(t, a.s, 1, .01, i) : s,
                    a: a.a ? r(t, a.a, 1, 0, i) : s,
                    o: a.o ? r(t, a.o, 0, .01, i) : s,
                    p: a.p ? r(t, a.p, 1, 0, i) : s,
                    sw: a.sw ? r(t, a.sw, 0, 0, i) : s,
                    sc: a.sc ? r(t, a.sc, 1, 0, i) : s,
                    fc: a.fc ? r(t, a.fc, 1, 0, i) : s,
                    fh: a.fh ? r(t, a.fh, 0, 0, i) : s,
                    fs: a.fs ? r(t, a.fs, 0, .01, i) : s,
                    fb: a.fb ? r(t, a.fb, 0, .01, i) : s,
                    t: a.t ? r(t, a.t, 0, 0, i) : s
                },
                this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i),
                this.s.t = e.s.t
            }
            function LetterProps(t, e, i, s, r, a) {
                this.o = t,
                this.sw = e,
                this.sc = i,
                this.fc = s,
                this.m = r,
                this.p = a,
                this._mdf = {
                    o: !0,
                    sw: !!e,
                    sc: !!i,
                    fc: !!s,
                    m: !0,
                    p: !0
                }
            }
            function TextProperty(t, e) {
                this._frameId = initialDefaultFrame,
                this.pv = "",
                this.v = "",
                this.kf = !1,
                this._isFirstFrame = !0,
                this._mdf = !1,
                this.data = e,
                this.elem = t,
                this.comp = this.elem.comp,
                this.keysIndex = 0,
                this.canResize = !1,
                this.minimumFontSize = 1,
                this.effectsSequence = [],
                this.currentData = {
                    ascent: 0,
                    boxWidth: this.defaultBoxWidth,
                    f: "",
                    fStyle: "",
                    fWeight: "",
                    fc: "",
                    j: "",
                    justifyOffset: "",
                    l: [],
                    lh: 0,
                    lineWidths: [],
                    ls: "",
                    of: "",
                    s: "",
                    sc: "",
                    sw: 0,
                    t: 0,
                    tr: 0,
                    sz: 0,
                    ps: null,
                    fillColorAnim: !1,
                    strokeColorAnim: !1,
                    strokeWidthAnim: !1,
                    yOffset: 0,
                    finalSize: 0,
                    finalText: [],
                    finalLineHeight: 0,
                    __complete: !1
                },
                this.copyData(this.currentData, this.data.d.k[0].s),
                this.searchProperty() || this.completeTextData(this.currentData)
            }
            TextAnimatorProperty.prototype.searchProperties = function() {
                var t, e, i = this._textData.a.length, s = PropertyFactory.getProp;
                for (t = 0; t < i; t += 1)
                    e = this._textData.a[t],
                    this._animatorsData[t] = new TextAnimatorDataProperty(this._elem,e,this);
                this._textData.p && "m"in this._textData.p ? (this._pathData = {
                    f: s(this._elem, this._textData.p.f, 0, 0, this),
                    l: s(this._elem, this._textData.p.l, 0, 0, this),
                    r: this._textData.p.r,
                    m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                },
                this._hasMaskedPath = !0) : this._hasMaskedPath = !1,
                this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this)
            }
            ,
            TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                if (this.lettersChangedFlag = e,
                this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                    this._isFirstFrame = !1;
                    var i, s, r, a, n, o, h, l, p, c, m, f, u, d, g, y, v, b, x, E = this._moreOptions.alignment.v, w = this._animatorsData, C = this._textData, _ = this.mHelper, k = this._renderType, A = this.renderedLetters.length, S = (this.data,
                    t.l);
                    if (this._hasMaskedPath) {
                        if (x = this._pathData.m,
                        !this._pathData.n || this._pathData._mdf) {
                            var P, T = x.v;
                            for (this._pathData.r && (T = T.reverse()),
                            n = {
                                tLength: 0,
                                segments: []
                            },
                            a = T._length - 1,
                            y = 0,
                            r = 0; r < a; r += 1)
                                P = bez.buildBezierData(T.v[r], T.v[r + 1], [T.o[r][0] - T.v[r][0], T.o[r][1] - T.v[r][1]], [T.i[r + 1][0] - T.v[r + 1][0], T.i[r + 1][1] - T.v[r + 1][1]]),
                                n.tLength += P.segmentLength,
                                n.segments.push(P),
                                y += P.segmentLength;
                            r = a,
                            x.v.c && (P = bez.buildBezierData(T.v[r], T.v[0], [T.o[r][0] - T.v[r][0], T.o[r][1] - T.v[r][1]], [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]]),
                            n.tLength += P.segmentLength,
                            n.segments.push(P),
                            y += P.segmentLength),
                            this._pathData.pi = n
                        }
                        if (n = this._pathData.pi,
                        o = this._pathData.f.v,
                        m = 0,
                        c = 1,
                        l = 0,
                        p = !0,
                        d = n.segments,
                        o < 0 && x.v.c) {
                            n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength),
                            m = d.length - 1,
                            u = d[m].points,
                            c = u.length - 1;
                            while (o < 0)
                                o += u[c].partialLength,
                                c -= 1,
                                c < 0 && (m -= 1,
                                u = d[m].points,
                                c = u.length - 1)
                        }
                        u = d[m].points,
                        f = u[c - 1],
                        h = u[c],
                        g = h.partialLength
                    }
                    a = S.length,
                    i = 0,
                    s = 0;
                    var I, D, M, F, B, L = 1.2 * t.finalSize * .714, R = !0;
                    F = w.length;
                    var V, j, O, G, z, N, H, Y, Q, $, Z, W, q, X = -1, J = o, K = m, U = c, tt = -1, et = "", it = this.defaultPropsArray;
                    if (2 === t.j || 1 === t.j) {
                        var st = 0
                          , rt = 0
                          , at = 2 === t.j ? -.5 : -1
                          , nt = 0
                          , ot = !0;
                        for (r = 0; r < a; r += 1)
                            if (S[r].n) {
                                st && (st += rt);
                                while (nt < r)
                                    S[nt].animatorJustifyOffset = st,
                                    nt += 1;
                                st = 0,
                                ot = !0
                            } else {
                                for (M = 0; M < F; M += 1)
                                    I = w[M].a,
                                    I.t.propType && (ot && 2 === t.j && (rt += I.t.v * at),
                                    D = w[M].s,
                                    V = D.getMult(S[r].anIndexes[M], C.a[M].s.totalChars),
                                    V.length ? st += I.t.v * V[0] * at : st += I.t.v * V * at);
                                ot = !1
                            }
                        st && (st += rt);
                        while (nt < r)
                            S[nt].animatorJustifyOffset = st,
                            nt += 1
                    }
                    for (r = 0; r < a; r += 1) {
                        if (_.reset(),
                        z = 1,
                        S[r].n)
                            i = 0,
                            s += t.yOffset,
                            s += R ? 1 : 0,
                            o = J,
                            R = !1,
                            0,
                            this._hasMaskedPath && (m = K,
                            c = U,
                            u = d[m].points,
                            f = u[c - 1],
                            h = u[c],
                            g = h.partialLength,
                            l = 0),
                            q = $ = W = et = "",
                            it = this.defaultPropsArray;
                        else {
                            if (this._hasMaskedPath) {
                                if (tt !== S[r].line) {
                                    switch (t.j) {
                                    case 1:
                                        o += y - t.lineWidths[S[r].line];
                                        break;
                                    case 2:
                                        o += (y - t.lineWidths[S[r].line]) / 2;
                                        break
                                    }
                                    tt = S[r].line
                                }
                                X !== S[r].ind && (S[X] && (o += S[X].extra),
                                o += S[r].an / 2,
                                X = S[r].ind),
                                o += E[0] * S[r].an / 200;
                                var ht = 0;
                                for (M = 0; M < F; M += 1)
                                    I = w[M].a,
                                    I.p.propType && (D = w[M].s,
                                    V = D.getMult(S[r].anIndexes[M], C.a[M].s.totalChars),
                                    V.length ? ht += I.p.v[0] * V[0] : ht += I.p.v[0] * V),
                                    I.a.propType && (D = w[M].s,
                                    V = D.getMult(S[r].anIndexes[M], C.a[M].s.totalChars),
                                    V.length ? ht += I.a.v[0] * V[0] : ht += I.a.v[0] * V);
                                p = !0;
                                while (p)
                                    l + g >= o + ht || !u ? (v = (o + ht - l) / h.partialLength,
                                    O = f.point[0] + (h.point[0] - f.point[0]) * v,
                                    G = f.point[1] + (h.point[1] - f.point[1]) * v,
                                    _.translate(-E[0] * S[r].an / 200, -E[1] * L / 100),
                                    p = !1) : u && (l += h.partialLength,
                                    c += 1,
                                    c >= u.length && (c = 0,
                                    m += 1,
                                    d[m] ? u = d[m].points : x.v.c ? (c = 0,
                                    m = 0,
                                    u = d[m].points) : (l -= h.partialLength,
                                    u = null)),
                                    u && (f = h,
                                    h = u[c],
                                    g = h.partialLength));
                                j = S[r].an / 2 - S[r].add,
                                _.translate(-j, 0, 0)
                            } else
                                j = S[r].an / 2 - S[r].add,
                                _.translate(-j, 0, 0),
                                _.translate(-E[0] * S[r].an / 200, -E[1] * L / 100, 0);
                            for (S[r].l / 2,
                            M = 0; M < F; M += 1)
                                I = w[M].a,
                                I.t.propType && (D = w[M].s,
                                V = D.getMult(S[r].anIndexes[M], C.a[M].s.totalChars),
                                0 === i && 0 === t.j || (this._hasMaskedPath ? V.length ? o += I.t.v * V[0] : o += I.t.v * V : V.length ? i += I.t.v * V[0] : i += I.t.v * V));
                            for (S[r].l / 2,
                            t.strokeWidthAnim && (H = t.sw || 0),
                            t.strokeColorAnim && (N = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                            t.fillColorAnim && t.fc && (Y = [t.fc[0], t.fc[1], t.fc[2]]),
                            M = 0; M < F; M += 1)
                                I = w[M].a,
                                I.a.propType && (D = w[M].s,
                                V = D.getMult(S[r].anIndexes[M], C.a[M].s.totalChars),
                                V.length ? _.translate(-I.a.v[0] * V[0], -I.a.v[1] * V[1], I.a.v[2] * V[2]) : _.translate(-I.a.v[0] * V, -I.a.v[1] * V, I.a.v[2] * V));
                            for (M = 0; M < F; M += 1)
                                I = w[M].a,
                                I.s.propType && (D = w[M].s,
                                V = D.getMult(S[r].anIndexes[M], C.a[M].s.totalChars),
                                V.length ? _.scale(1 + (I.s.v[0] - 1) * V[0], 1 + (I.s.v[1] - 1) * V[1], 1) : _.scale(1 + (I.s.v[0] - 1) * V, 1 + (I.s.v[1] - 1) * V, 1));
                            for (M = 0; M < F; M += 1) {
                                if (I = w[M].a,
                                D = w[M].s,
                                V = D.getMult(S[r].anIndexes[M], C.a[M].s.totalChars),
                                I.sk.propType && (V.length ? _.skewFromAxis(-I.sk.v * V[0], I.sa.v * V[1]) : _.skewFromAxis(-I.sk.v * V, I.sa.v * V)),
                                I.r.propType && (V.length ? _.rotateZ(-I.r.v * V[2]) : _.rotateZ(-I.r.v * V)),
                                I.ry.propType && (V.length ? _.rotateY(I.ry.v * V[1]) : _.rotateY(I.ry.v * V)),
                                I.rx.propType && (V.length ? _.rotateX(I.rx.v * V[0]) : _.rotateX(I.rx.v * V)),
                                I.o.propType && (V.length ? z += (I.o.v * V[0] - z) * V[0] : z += (I.o.v * V - z) * V),
                                t.strokeWidthAnim && I.sw.propType && (V.length ? H += I.sw.v * V[0] : H += I.sw.v * V),
                                t.strokeColorAnim && I.sc.propType)
                                    for (Q = 0; Q < 3; Q += 1)
                                        V.length ? N[Q] = N[Q] + (I.sc.v[Q] - N[Q]) * V[0] : N[Q] = N[Q] + (I.sc.v[Q] - N[Q]) * V;
                                if (t.fillColorAnim && t.fc) {
                                    if (I.fc.propType)
                                        for (Q = 0; Q < 3; Q += 1)
                                            V.length ? Y[Q] = Y[Q] + (I.fc.v[Q] - Y[Q]) * V[0] : Y[Q] = Y[Q] + (I.fc.v[Q] - Y[Q]) * V;
                                    I.fh.propType && (Y = V.length ? addHueToRGB(Y, I.fh.v * V[0]) : addHueToRGB(Y, I.fh.v * V)),
                                    I.fs.propType && (Y = V.length ? addSaturationToRGB(Y, I.fs.v * V[0]) : addSaturationToRGB(Y, I.fs.v * V)),
                                    I.fb.propType && (Y = V.length ? addBrightnessToRGB(Y, I.fb.v * V[0]) : addBrightnessToRGB(Y, I.fb.v * V))
                                }
                            }
                            for (M = 0; M < F; M += 1)
                                I = w[M].a,
                                I.p.propType && (D = w[M].s,
                                V = D.getMult(S[r].anIndexes[M], C.a[M].s.totalChars),
                                this._hasMaskedPath ? V.length ? _.translate(0, I.p.v[1] * V[0], -I.p.v[2] * V[1]) : _.translate(0, I.p.v[1] * V, -I.p.v[2] * V) : V.length ? _.translate(I.p.v[0] * V[0], I.p.v[1] * V[1], -I.p.v[2] * V[2]) : _.translate(I.p.v[0] * V, I.p.v[1] * V, -I.p.v[2] * V));
                            if (t.strokeWidthAnim && ($ = H < 0 ? 0 : H),
                            t.strokeColorAnim && (Z = "rgb(" + Math.round(255 * N[0]) + "," + Math.round(255 * N[1]) + "," + Math.round(255 * N[2]) + ")"),
                            t.fillColorAnim && t.fc && (W = "rgb(" + Math.round(255 * Y[0]) + "," + Math.round(255 * Y[1]) + "," + Math.round(255 * Y[2]) + ")"),
                            this._hasMaskedPath) {
                                if (_.translate(0, -t.ls),
                                _.translate(0, E[1] * L / 100 + s, 0),
                                C.p.p) {
                                    b = (h.point[1] - f.point[1]) / (h.point[0] - f.point[0]);
                                    var lt = 180 * Math.atan(b) / Math.PI;
                                    h.point[0] < f.point[0] && (lt += 180),
                                    _.rotate(-lt * Math.PI / 180)
                                }
                                _.translate(O, G, 0),
                                o -= E[0] * S[r].an / 200,
                                S[r + 1] && X !== S[r + 1].ind && (o += S[r].an / 2,
                                o += t.tr / 1e3 * t.finalSize)
                            } else {
                                switch (_.translate(i, s, 0),
                                t.ps && _.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                                t.j) {
                                case 1:
                                    _.translate(S[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[S[r].line]), 0, 0);
                                    break;
                                case 2:
                                    _.translate(S[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[S[r].line]) / 2, 0, 0);
                                    break
                                }
                                _.translate(0, -t.ls),
                                _.translate(j, 0, 0),
                                _.translate(E[0] * S[r].an / 200, E[1] * L / 100, 0),
                                i += S[r].l + t.tr / 1e3 * t.finalSize
                            }
                            "html" === k ? et = _.toCSS() : "svg" === k ? et = _.to2dCSS() : it = [_.props[0], _.props[1], _.props[2], _.props[3], _.props[4], _.props[5], _.props[6], _.props[7], _.props[8], _.props[9], _.props[10], _.props[11], _.props[12], _.props[13], _.props[14], _.props[15]],
                            q = z
                        }
                        A <= r ? (B = new LetterProps(q,$,Z,W,et,it),
                        this.renderedLetters.push(B),
                        A += 1,
                        this.lettersChangedFlag = !0) : (B = this.renderedLetters[r],
                        this.lettersChangedFlag = B.update(q, $, Z, W, et, it) || this.lettersChangedFlag)
                    }
                }
            }
            ,
            TextAnimatorProperty.prototype.getValue = function() {
                this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId,
                this.iterateDynamicProperties())
            }
            ,
            TextAnimatorProperty.prototype.mHelper = new Matrix,
            TextAnimatorProperty.prototype.defaultPropsArray = [],
            extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
            LetterProps.prototype.update = function(t, e, i, s, r, a) {
                this._mdf.o = !1,
                this._mdf.sw = !1,
                this._mdf.sc = !1,
                this._mdf.fc = !1,
                this._mdf.m = !1,
                this._mdf.p = !1;
                var n = !1;
                return this.o !== t && (this.o = t,
                this._mdf.o = !0,
                n = !0),
                this.sw !== e && (this.sw = e,
                this._mdf.sw = !0,
                n = !0),
                this.sc !== i && (this.sc = i,
                this._mdf.sc = !0,
                n = !0),
                this.fc !== s && (this.fc = s,
                this._mdf.fc = !0,
                n = !0),
                this.m !== r && (this.m = r,
                this._mdf.m = !0,
                n = !0),
                !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a,
                this._mdf.p = !0,
                n = !0),
                n
            }
            ,
            TextProperty.prototype.defaultBoxWidth = [0, 0],
            TextProperty.prototype.copyData = function(t, e) {
                for (var i in e)
                    e.hasOwnProperty(i) && (t[i] = e[i]);
                return t
            }
            ,
            TextProperty.prototype.setCurrentData = function(t) {
                t.__complete || this.completeTextData(t),
                this.currentData = t,
                this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth,
                this._mdf = !0
            }
            ,
            TextProperty.prototype.searchProperty = function() {
                return this.searchKeyframes()
            }
            ,
            TextProperty.prototype.searchKeyframes = function() {
                return this.kf = this.data.d.k.length > 1,
                this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
                this.kf
            }
            ,
            TextProperty.prototype.addEffect = function(t) {
                this.effectsSequence.push(t),
                this.elem.addDynamicProperty(this)
            }
            ,
            TextProperty.prototype.getValue = function(t) {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var e = this.currentData
                      , i = this.keysIndex;
                    if (this.lock)
                        this.setCurrentData(this.currentData);
                    else {
                        this.lock = !0,
                        this._mdf = !1;
                        var s, r = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s;
                        for (s = 0; s < r; s += 1)
                            a = i !== this.keysIndex ? this.effectsSequence[s](a, a.t) : this.effectsSequence[s](this.currentData, a.t);
                        e !== a && this.setCurrentData(a),
                        this.pv = this.v = this.currentData,
                        this.lock = !1,
                        this.frameId = this.elem.globalData.frameId
                    }
                }
            }
            ,
            TextProperty.prototype.getKeyframeValue = function() {
                var t = this.data.d.k
                  , e = this.elem.comp.renderedFrame
                  , i = 0
                  , s = t.length;
                while (i <= s - 1) {
                    if (t[i].s,
                    i === s - 1 || t[i + 1].t > e)
                        break;
                    i += 1
                }
                return this.keysIndex !== i && (this.keysIndex = i),
                this.data.d.k[this.keysIndex].s
            }
            ,
            TextProperty.prototype.buildFinalText = function(t) {
                var e, i = FontManager.getCombinedCharacterCodes(), s = [], r = 0, a = t.length;
                while (r < a)
                    e = t.charCodeAt(r),
                    -1 !== i.indexOf(e) ? s[s.length - 1] += t.charAt(r) : e >= 55296 && e <= 56319 ? (e = t.charCodeAt(r + 1),
                    e >= 56320 && e <= 57343 ? (s.push(t.substr(r, 2)),
                    ++r) : s.push(t.charAt(r))) : s.push(t.charAt(r)),
                    r += 1;
                return s
            }
            ,
            TextProperty.prototype.completeTextData = function(t) {
                t.__complete = !0;
                var e, i, s, r, a, n, o, h, l = this.elem.globalData.fontManager, p = this.data, c = [], m = 0, f = p.m.g, u = 0, d = 0, g = 0, y = [], v = 0, b = 0, x = l.getFontByName(t.f), E = 0, w = x.fStyle ? x.fStyle.split(" ") : [], C = "normal", _ = "normal";
                for (i = w.length,
                e = 0; e < i; e += 1)
                    switch (h = w[e].toLowerCase(),
                    h) {
                    case "italic":
                        _ = "italic";
                        break;
                    case "bold":
                        C = "700";
                        break;
                    case "black":
                        C = "900";
                        break;
                    case "medium":
                        C = "500";
                        break;
                    case "regular":
                    case "normal":
                        C = "400";
                        break;
                    case "light":
                    case "thin":
                        C = "200";
                        break
                    }
                t.fWeight = x.fWeight || C,
                t.fStyle = _,
                t.finalSize = t.s,
                t.finalText = this.buildFinalText(t.t),
                i = t.finalText.length,
                t.finalLineHeight = t.lh;
                var k, A = t.tr / 1e3 * t.finalSize;
                if (t.sz) {
                    var S, P, T = !0, I = t.sz[0], D = t.sz[1];
                    while (T) {
                        P = this.buildFinalText(t.t),
                        S = 0,
                        v = 0,
                        i = P.length,
                        A = t.tr / 1e3 * t.finalSize;
                        var M = -1;
                        for (e = 0; e < i; e += 1)
                            k = P[e].charCodeAt(0),
                            s = !1,
                            " " === P[e] ? M = e : 13 !== k && 3 !== k || (v = 0,
                            s = !0,
                            S += t.finalLineHeight || 1.2 * t.finalSize),
                            l.chars ? (o = l.getCharData(P[e], x.fStyle, x.fFamily),
                            E = s ? 0 : o.w * t.finalSize / 100) : E = l.measureText(P[e], t.f, t.finalSize),
                            v + E > I && " " !== P[e] ? (-1 === M ? i += 1 : e = M,
                            S += t.finalLineHeight || 1.2 * t.finalSize,
                            P.splice(e, M === e ? 1 : 0, "\r"),
                            M = -1,
                            v = 0) : (v += E,
                            v += A);
                        S += x.ascent * t.finalSize / 100,
                        this.canResize && t.finalSize > this.minimumFontSize && D < S ? (t.finalSize -= 1,
                        t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = P,
                        i = t.finalText.length,
                        T = !1)
                    }
                }
                v = -A,
                E = 0;
                var F, B = 0;
                for (e = 0; e < i; e += 1)
                    if (s = !1,
                    F = t.finalText[e],
                    k = F.charCodeAt(0),
                    " " === F ? r = " " : 13 === k || 3 === k ? (B = 0,
                    y.push(v),
                    b = v > b ? v : b,
                    v = -2 * A,
                    r = "",
                    s = !0,
                    g += 1) : r = t.finalText[e],
                    l.chars ? (o = l.getCharData(F, x.fStyle, l.getFontByName(t.f).fFamily),
                    E = s ? 0 : o.w * t.finalSize / 100) : E = l.measureText(r, t.f, t.finalSize),
                    " " === F ? B += E + A : (v += E + A + B,
                    B = 0),
                    c.push({
                        l: E,
                        an: E,
                        add: u,
                        n: s,
                        anIndexes: [],
                        val: r,
                        line: g,
                        animatorJustifyOffset: 0
                    }),
                    2 == f) {
                        if (u += E,
                        "" === r || " " === r || e === i - 1) {
                            "" !== r && " " !== r || (u -= E);
                            while (d <= e)
                                c[d].an = u,
                                c[d].ind = m,
                                c[d].extra = E,
                                d += 1;
                            m += 1,
                            u = 0
                        }
                    } else if (3 == f) {
                        if (u += E,
                        "" === r || e === i - 1) {
                            "" === r && (u -= E);
                            while (d <= e)
                                c[d].an = u,
                                c[d].ind = m,
                                c[d].extra = E,
                                d += 1;
                            u = 0,
                            m += 1
                        }
                    } else
                        c[m].ind = m,
                        c[m].extra = 0,
                        m += 1;
                if (t.l = c,
                b = v > b ? v : b,
                y.push(v),
                t.sz)
                    t.boxWidth = t.sz[0],
                    t.justifyOffset = 0;
                else
                    switch (t.boxWidth = b,
                    t.j) {
                    case 1:
                        t.justifyOffset = -t.boxWidth;
                        break;
                    case 2:
                        t.justifyOffset = -t.boxWidth / 2;
                        break;
                    default:
                        t.justifyOffset = 0
                    }
                t.lineWidths = y;
                var L, R, V = p.a;
                n = V.length;
                var j, O, G = [];
                for (a = 0; a < n; a += 1) {
                    for (L = V[a],
                    L.a.sc && (t.strokeColorAnim = !0),
                    L.a.sw && (t.strokeWidthAnim = !0),
                    (L.a.fc || L.a.fh || L.a.fs || L.a.fb) && (t.fillColorAnim = !0),
                    O = 0,
                    j = L.s.b,
                    e = 0; e < i; e += 1)
                        R = c[e],
                        R.anIndexes[a] = O,
                        (1 == j && "" !== R.val || 2 == j && "" !== R.val && " " !== R.val || 3 == j && (R.n || " " == R.val || e == i - 1) || 4 == j && (R.n || e == i - 1)) && (1 === L.s.rn && G.push(O),
                        O += 1);
                    p.a[a].s.totalChars = O;
                    var z, N = -1;
                    if (1 === L.s.rn)
                        for (e = 0; e < i; e += 1)
                            R = c[e],
                            N != R.anIndexes[a] && (N = R.anIndexes[a],
                            z = G.splice(Math.floor(Math.random() * G.length), 1)[0]),
                            R.anIndexes[a] = z
                }
                t.yOffset = t.finalLineHeight || 1.2 * t.finalSize,
                t.ls = t.ls || 0,
                t.ascent = x.ascent * t.finalSize / 100
            }
            ,
            TextProperty.prototype.updateDocumentData = function(t, e) {
                e = void 0 === e ? this.keysIndex : e;
                var i = this.copyData({}, this.data.d.k[e].s);
                i = this.copyData(i, t),
                this.data.d.k[e].s = i,
                this.recalculate(e),
                this.elem.addDynamicProperty(this)
            }
            ,
            TextProperty.prototype.recalculate = function(t) {
                var e = this.data.d.k[t].s;
                e.__complete = !1,
                this.keysIndex = 0,
                this._isFirstFrame = !0,
                this.getValue(e)
            }
            ,
            TextProperty.prototype.canResizeFont = function(t) {
                this.canResize = t,
                this.recalculate(this.keysIndex),
                this.elem.addDynamicProperty(this)
            }
            ,
            TextProperty.prototype.setMinimumFontSize = function(t) {
                this.minimumFontSize = Math.floor(t) || 1,
                this.recalculate(this.keysIndex),
                this.elem.addDynamicProperty(this)
            }
            ;
            var TextSelectorProp = function() {
                var t = Math.max
                  , e = Math.min
                  , i = Math.floor;
                function s(t, e) {
                    this._currentTextLength = -1,
                    this.k = !1,
                    this.data = e,
                    this.elem = t,
                    this.comp = t.comp,
                    this.finalS = 0,
                    this.finalE = 0,
                    this.initDynamicPropertyContainer(t),
                    this.s = PropertyFactory.getProp(t, e.s || {
                        k: 0
                    }, 0, 0, this),
                    this.e = "e"in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                        v: 100
                    },
                    this.o = PropertyFactory.getProp(t, e.o || {
                        k: 0
                    }, 0, 0, this),
                    this.xe = PropertyFactory.getProp(t, e.xe || {
                        k: 0
                    }, 0, 0, this),
                    this.ne = PropertyFactory.getProp(t, e.ne || {
                        k: 0
                    }, 0, 0, this),
                    this.a = PropertyFactory.getProp(t, e.a, 0, .01, this),
                    this.dynamicProperties.length || this.getValue()
                }
                function r(t, e, i) {
                    return new s(t,e,i)
                }
                return s.prototype = {
                    getMult: function(s) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var r = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get
                          , a = 0
                          , n = this.finalS
                          , o = this.finalE
                          , h = this.data.sh;
                        if (2 == h)
                            a = o === n ? s >= o ? 1 : 0 : t(0, e(.5 / (o - n) + (s - n) / (o - n), 1)),
                            a = r(a);
                        else if (3 == h)
                            a = o === n ? s >= o ? 0 : 1 : 1 - t(0, e(.5 / (o - n) + (s - n) / (o - n), 1)),
                            a = r(a);
                        else if (4 == h)
                            o === n ? a = 0 : (a = t(0, e(.5 / (o - n) + (s - n) / (o - n), 1)),
                            a < .5 ? a *= 2 : a = 1 - 2 * (a - .5)),
                            a = r(a);
                        else if (5 == h) {
                            if (o === n)
                                a = 0;
                            else {
                                var l = o - n;
                                s = e(t(0, s + .5 - n), o - n);
                                var p = -l / 2 + s
                                  , c = l / 2;
                                a = Math.sqrt(1 - p * p / (c * c))
                            }
                            a = r(a)
                        } else
                            6 == h ? (o === n ? a = 0 : (s = e(t(0, s + .5 - n), o - n),
                            a = (1 + Math.cos(Math.PI + 2 * Math.PI * s / (o - n))) / 2),
                            a = r(a)) : (s >= i(n) && (a = s - n < 0 ? 1 - (n - s) : t(0, e(o - s, 1))),
                            a = r(a));
                        return a * this.a.v
                    },
                    getValue: function(t) {
                        this.iterateDynamicProperties(),
                        this._mdf = t || this._mdf,
                        this._currentTextLength = this.elem.textProperty.currentData.l.length || 0,
                        t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars
                          , i = this.o.v / e
                          , s = this.s.v / e + i
                          , r = this.e.v / e + i;
                        if (s > r) {
                            var a = s;
                            s = r,
                            r = a
                        }
                        this.finalS = s,
                        this.finalE = r
                    }
                },
                extendPrototype([DynamicPropertyContainer], s),
                {
                    getTextSelectorProp: r
                }
            }()
              , pool_factory = function() {
                return function(t, e, i, s) {
                    var r = 0
                      , a = t
                      , n = createSizedArray(a)
                      , o = {
                        newElement: h,
                        release: l
                    };
                    function h() {
                        var t;
                        return r ? (r -= 1,
                        t = n[r]) : t = e(),
                        t
                    }
                    function l(t) {
                        r === a && (n = pooling.double(n),
                        a *= 2),
                        i && i(t),
                        n[r] = t,
                        r += 1
                    }
                    return o
                }
            }()
              , pooling = function() {
                function t(t) {
                    return t.concat(createSizedArray(t.length))
                }
                return {
                    double: t
                }
            }()
              , point_pool = function() {
                function t() {
                    return createTypedArray("float32", 2)
                }
                return pool_factory(8, t)
            }()
              , shape_pool = function() {
                function t() {
                    return new ShapePath
                }
                function e(t) {
                    var e, i = t._length;
                    for (e = 0; e < i; e += 1)
                        point_pool.release(t.v[e]),
                        point_pool.release(t.i[e]),
                        point_pool.release(t.o[e]),
                        t.v[e] = null,
                        t.i[e] = null,
                        t.o[e] = null;
                    t._length = 0,
                    t.c = !1
                }
                function i(t) {
                    var e, i = s.newElement(), r = void 0 === t._length ? t.v.length : t._length;
                    for (i.setLength(r),
                    i.c = t.c,
                    e = 0; e < r; e += 1)
                        i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                    return i
                }
                var s = pool_factory(4, t, e);
                return s.clone = i,
                s
            }()
              , shapeCollection_pool = function() {
                var t = {
                    newShapeCollection: r,
                    release: a
                }
                  , e = 0
                  , i = 4
                  , s = createSizedArray(i);
                function r() {
                    var t;
                    return e ? (e -= 1,
                    t = s[e]) : t = new ShapeCollection,
                    t
                }
                function a(t) {
                    var r, a = t._length;
                    for (r = 0; r < a; r += 1)
                        shape_pool.release(t.shapes[r]);
                    t._length = 0,
                    e === i && (s = pooling.double(s),
                    i *= 2),
                    s[e] = t,
                    e += 1
                }
                return t
            }()
              , segments_length_pool = function() {
                function t() {
                    return {
                        lengths: [],
                        totalLength: 0
                    }
                }
                function e(t) {
                    var e, i = t.lengths.length;
                    for (e = 0; e < i; e += 1)
                        bezier_length_pool.release(t.lengths[e]);
                    t.lengths.length = 0
                }
                return pool_factory(8, t, e)
            }()
              , bezier_length_pool = function() {
                function t() {
                    return {
                        addedLength: 0,
                        percents: createTypedArray("float32", defaultCurveSegments),
                        lengths: createTypedArray("float32", defaultCurveSegments)
                    }
                }
                return pool_factory(8, t)
            }();
            function BaseRenderer() {}
            function SVGRenderer(t, e) {
                this.animationItem = t,
                this.layers = null,
                this.renderedFrame = -1,
                this.svgElement = createNS("svg");
                var i = "";
                if (e && e.title) {
                    var s = createNS("title")
                      , r = createElementID();
                    s.setAttribute("id", r),
                    s.textContent = e.title,
                    this.svgElement.appendChild(s),
                    i += r
                }
                if (e && e.description) {
                    var a = createNS("desc")
                      , n = createElementID();
                    a.setAttribute("id", n),
                    a.textContent = e.description,
                    this.svgElement.appendChild(a),
                    i += " " + n
                }
                i && this.svgElement.setAttribute("aria-labelledby", i);
                var o = createNS("defs");
                this.svgElement.appendChild(o);
                var h = createNS("g");
                this.svgElement.appendChild(h),
                this.layerElement = h,
                this.renderConfig = {
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    progressiveLoad: e && e.progressiveLoad || !1,
                    hideOnTransparent: !e || !1 !== e.hideOnTransparent,
                    viewBoxOnly: e && e.viewBoxOnly || !1,
                    viewBoxSize: e && e.viewBoxSize || !1,
                    className: e && e.className || "",
                    focusable: e && e.focusable
                },
                this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    defs: o,
                    renderConfig: this.renderConfig
                },
                this.elements = [],
                this.pendingElements = [],
                this.destroyed = !1,
                this.rendererType = "svg"
            }
            function CanvasRenderer(t, e) {
                this.animationItem = t,
                this.renderConfig = {
                    clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                    context: e && e.context || null,
                    progressiveLoad: e && e.progressiveLoad || !1,
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    className: e && e.className || ""
                },
                this.renderConfig.dpr = e && e.dpr || 1,
                this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1),
                this.renderedFrame = -1,
                this.globalData = {
                    frameNum: -1,
                    _mdf: !1,
                    renderConfig: this.renderConfig,
                    currentGlobalAlpha: -1
                },
                this.contextData = new CVContextData,
                this.elements = [],
                this.pendingElements = [],
                this.transformMat = new Matrix,
                this.completeLayers = !1,
                this.rendererType = "canvas"
            }
            function HybridRenderer(t, e) {
                this.animationItem = t,
                this.layers = null,
                this.renderedFrame = -1,
                this.renderConfig = {
                    className: e && e.className || "",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    hideOnTransparent: !e || !1 !== e.hideOnTransparent
                },
                this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                },
                this.pendingElements = [],
                this.elements = [],
                this.threeDElements = [],
                this.destroyed = !1,
                this.camera = null,
                this.supports3d = !0,
                this.rendererType = "html"
            }
            function MaskElement(t, e, i) {
                this.data = t,
                this.element = e,
                this.globalData = i,
                this.storedData = [],
                this.masksProperties = this.data.masksProperties || [],
                this.maskElement = null;
                var s, r = this.globalData.defs, a = this.masksProperties ? this.masksProperties.length : 0;
                this.viewData = createSizedArray(a),
                this.solidPath = "";
                var n, o, h, l, p, c, m, f = this.masksProperties, u = 0, d = [], g = createElementID(), y = "clipPath", v = "clip-path";
                for (s = 0; s < a; s++)
                    if (("a" !== f[s].mode && "n" !== f[s].mode || f[s].inv || 100 !== f[s].o.k || f[s].o.x) && (y = "mask",
                    v = "mask"),
                    "s" != f[s].mode && "i" != f[s].mode || 0 !== u ? l = null : (l = createNS("rect"),
                    l.setAttribute("fill", "#ffffff"),
                    l.setAttribute("width", this.element.comp.data.w || 0),
                    l.setAttribute("height", this.element.comp.data.h || 0),
                    d.push(l)),
                    n = createNS("path"),
                    "n" != f[s].mode) {
                        var b;
                        if (u += 1,
                        n.setAttribute("fill", "s" === f[s].mode ? "#000000" : "#ffffff"),
                        n.setAttribute("clip-rule", "nonzero"),
                        0 !== f[s].x.k ? (y = "mask",
                        v = "mask",
                        m = PropertyFactory.getProp(this.element, f[s].x, 0, null, this.element),
                        b = createElementID(),
                        p = createNS("filter"),
                        p.setAttribute("id", b),
                        c = createNS("feMorphology"),
                        c.setAttribute("operator", "erode"),
                        c.setAttribute("in", "SourceGraphic"),
                        c.setAttribute("radius", "0"),
                        p.appendChild(c),
                        r.appendChild(p),
                        n.setAttribute("stroke", "s" === f[s].mode ? "#000000" : "#ffffff")) : (c = null,
                        m = null),
                        this.storedData[s] = {
                            elem: n,
                            x: m,
                            expan: c,
                            lastPath: "",
                            lastOperator: "",
                            filterId: b,
                            lastRadius: 0
                        },
                        "i" == f[s].mode) {
                            h = d.length;
                            var x = createNS("g");
                            for (o = 0; o < h; o += 1)
                                x.appendChild(d[o]);
                            var E = createNS("mask");
                            E.setAttribute("mask-type", "alpha"),
                            E.setAttribute("id", g + "_" + u),
                            E.appendChild(n),
                            r.appendChild(E),
                            x.setAttribute("mask", "url(" + locationHref + "#" + g + "_" + u + ")"),
                            d.length = 0,
                            d.push(x)
                        } else
                            d.push(n);
                        f[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                        this.viewData[s] = {
                            elem: n,
                            lastPath: "",
                            op: PropertyFactory.getProp(this.element, f[s].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, f[s], 3),
                            invRect: l
                        },
                        this.viewData[s].prop.k || this.drawPath(f[s], this.viewData[s].prop.v, this.viewData[s])
                    } else
                        this.viewData[s] = {
                            op: PropertyFactory.getProp(this.element, f[s].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, f[s], 3),
                            elem: n,
                            lastPath: ""
                        },
                        r.appendChild(n);
                for (this.maskElement = createNS(y),
                a = d.length,
                s = 0; s < a; s += 1)
                    this.maskElement.appendChild(d[s]);
                u > 0 && (this.maskElement.setAttribute("id", g),
                this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + g + ")"),
                r.appendChild(this.maskElement)),
                this.viewData.length && this.element.addRenderableComponent(this)
            }
            function HierarchyElement() {}
            function FrameElement() {}
            function TransformElement() {}
            function RenderableElement() {}
            function RenderableDOMElement() {}
            function ProcessedElement(t, e) {
                this.elem = t,
                this.pos = e
            }
            function SVGStyleData(t, e) {
                this.data = t,
                this.type = t.ty,
                this.d = "",
                this.lvl = e,
                this._mdf = !1,
                this.closed = !0 === t.hd,
                this.pElem = createNS("path"),
                this.msElem = null
            }
            function SVGShapeData(t, e, i) {
                this.caches = [],
                this.styles = [],
                this.transformers = t,
                this.lStr = "",
                this.sh = i,
                this.lvl = e,
                this._isAnimated = !!i.k;
                var s = 0
                  , r = t.length;
                while (s < r) {
                    if (t[s].mProps.dynamicProperties.length) {
                        this._isAnimated = !0;
                        break
                    }
                    s += 1
                }
            }
            function SVGTransformData(t, e, i) {
                this.transform = {
                    mProps: t,
                    op: e,
                    container: i
                },
                this.elements = [],
                this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
            }
            function SVGStrokeStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
                this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
                this.d = new DashProperty(t,e.d || {},"svg",this),
                this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
                this.style = i,
                this._isAnimated = !!this._isAnimated
            }
            function SVGFillStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
                this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
                this.style = i
            }
            function SVGGradientFillStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.initGradientData(t, e, i)
            }
            function SVGGradientStrokeStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
                this.d = new DashProperty(t,e.d || {},"svg",this),
                this.initGradientData(t, e, i),
                this._isAnimated = !!this._isAnimated
            }
            function ShapeGroupData() {
                this.it = [],
                this.prevViewData = [],
                this.gr = createNS("g")
            }
            BaseRenderer.prototype.checkLayers = function(t) {
                var e, i, s = this.layers.length;
                for (this.completeLayers = !0,
                e = s - 1; e >= 0; e--)
                    this.elements[e] || (i = this.layers[e],
                    i.ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)),
                    this.completeLayers = !!this.elements[e] && this.completeLayers;
                this.checkPendingElements()
            }
            ,
            BaseRenderer.prototype.createItem = function(t) {
                switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 13:
                    return this.createCamera(t)
                }
                return this.createNull(t)
            }
            ,
            BaseRenderer.prototype.createCamera = function() {
                throw new Error("You're using a 3d camera. Try the html renderer.")
            }
            ,
            BaseRenderer.prototype.buildAllItems = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1)
                    this.buildItem(t);
                this.checkPendingElements()
            }
            ,
            BaseRenderer.prototype.includeLayers = function(t) {
                this.completeLayers = !1;
                var e, i, s = t.length, r = this.layers.length;
                for (e = 0; e < s; e += 1) {
                    i = 0;
                    while (i < r) {
                        if (this.layers[i].id == t[e].id) {
                            this.layers[i] = t[e];
                            break
                        }
                        i += 1
                    }
                }
            }
            ,
            BaseRenderer.prototype.setProjectInterface = function(t) {
                this.globalData.projectInterface = t
            }
            ,
            BaseRenderer.prototype.initItems = function() {
                this.globalData.progressiveLoad || this.buildAllItems()
            }
            ,
            BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
                var s = this.elements
                  , r = this.layers
                  , a = 0
                  , n = r.length;
                while (a < n)
                    r[a].ind == e && (s[a] && !0 !== s[a] ? (i.push(s[a]),
                    s[a].setAsParent(),
                    void 0 !== r[a].parent ? this.buildElementParenting(t, r[a].parent, i) : t.setHierarchy(i)) : (this.buildItem(a),
                    this.addPendingElement(t))),
                    a += 1
            }
            ,
            BaseRenderer.prototype.addPendingElement = function(t) {
                this.pendingElements.push(t)
            }
            ,
            BaseRenderer.prototype.searchExtraCompositions = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1)
                    if (t[e].xt) {
                        var s = this.createComp(t[e]);
                        s.initExpressions(),
                        this.globalData.projectInterface.registerComposition(s)
                    }
            }
            ,
            BaseRenderer.prototype.setupGlobalData = function(t, e) {
                this.globalData.fontManager = new FontManager,
                this.globalData.fontManager.addChars(t.chars),
                this.globalData.fontManager.addFonts(t.fonts, e),
                this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem),
                this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem),
                this.globalData.imageLoader = this.animationItem.imagePreloader,
                this.globalData.frameId = 0,
                this.globalData.frameRate = t.fr,
                this.globalData.nm = t.nm,
                this.globalData.compSize = {
                    w: t.w,
                    h: t.h
                }
            }
            ,
            extendPrototype([BaseRenderer], SVGRenderer),
            SVGRenderer.prototype.createNull = function(t) {
                return new NullElement(t,this.globalData,this)
            }
            ,
            SVGRenderer.prototype.createShape = function(t) {
                return new SVGShapeElement(t,this.globalData,this)
            }
            ,
            SVGRenderer.prototype.createText = function(t) {
                return new SVGTextElement(t,this.globalData,this)
            }
            ,
            SVGRenderer.prototype.createImage = function(t) {
                return new IImageElement(t,this.globalData,this)
            }
            ,
            SVGRenderer.prototype.createComp = function(t) {
                return new SVGCompElement(t,this.globalData,this)
            }
            ,
            SVGRenderer.prototype.createSolid = function(t) {
                return new ISolidElement(t,this.globalData,this)
            }
            ,
            SVGRenderer.prototype.configAnimation = function(t) {
                this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h),
                this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w),
                this.svgElement.setAttribute("height", t.h),
                this.svgElement.style.width = "100%",
                this.svgElement.style.height = "100%",
                this.svgElement.style.transform = "translate3d(0,0,0)"),
                this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className),
                void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable),
                this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio),
                this.animationItem.wrapper.appendChild(this.svgElement);
                var e = this.globalData.defs;
                this.setupGlobalData(t, e),
                this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
                this.data = t;
                var i = createNS("clipPath")
                  , s = createNS("rect");
                s.setAttribute("width", t.w),
                s.setAttribute("height", t.h),
                s.setAttribute("x", 0),
                s.setAttribute("y", 0);
                var r = createElementID();
                i.setAttribute("id", r),
                i.appendChild(s),
                this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + r + ")"),
                e.appendChild(i),
                this.layers = t.layers,
                this.elements = createSizedArray(t.layers.length)
            }
            ,
            SVGRenderer.prototype.destroy = function() {
                this.animationItem.wrapper.innerHTML = "",
                this.layerElement = null,
                this.globalData.defs = null;
                var t, e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t++)
                    this.elements[t] && this.elements[t].destroy();
                this.elements.length = 0,
                this.destroyed = !0,
                this.animationItem = null
            }
            ,
            SVGRenderer.prototype.updateContainerSize = function() {}
            ,
            SVGRenderer.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && 99 != this.layers[t].ty) {
                    e[t] = !0;
                    var i = this.createItem(this.layers[t]);
                    e[t] = i,
                    expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i),
                    i.initExpressions()),
                    this.appendElementInPos(i, t),
                    this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? i.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1),
                    this.addPendingElement(i)))
                }
            }
            ,
            SVGRenderer.prototype.checkPendingElements = function() {
                while (this.pendingElements.length) {
                    var t = this.pendingElements.pop();
                    if (t.checkParenting(),
                    t.data.tt) {
                        var e = 0
                          , i = this.elements.length;
                        while (e < i) {
                            if (this.elements[e] === t) {
                                t.setMatte(this.elements[e - 1].layerId);
                                break
                            }
                            e += 1
                        }
                    }
                }
            }
            ,
            SVGRenderer.prototype.renderFrame = function(t) {
                if (this.renderedFrame !== t && !this.destroyed) {
                    null === t ? t = this.renderedFrame : this.renderedFrame = t,
                    this.globalData.frameNum = t,
                    this.globalData.frameId += 1,
                    this.globalData.projectInterface.currentFrame = t,
                    this.globalData._mdf = !1;
                    var e, i = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t),
                    e = i - 1; e >= 0; e--)
                        (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                    if (this.globalData._mdf)
                        for (e = 0; e < i; e += 1)
                            (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                }
            }
            ,
            SVGRenderer.prototype.appendElementInPos = function(t, e) {
                var i = t.getBaseElement();
                if (i) {
                    var s, r = 0;
                    while (r < e)
                        this.elements[r] && !0 !== this.elements[r] && this.elements[r].getBaseElement() && (s = this.elements[r].getBaseElement()),
                        r += 1;
                    s ? this.layerElement.insertBefore(i, s) : this.layerElement.appendChild(i)
                }
            }
            ,
            SVGRenderer.prototype.hide = function() {
                this.layerElement.style.display = "none"
            }
            ,
            SVGRenderer.prototype.show = function() {
                this.layerElement.style.display = "block"
            }
            ,
            extendPrototype([BaseRenderer], CanvasRenderer),
            CanvasRenderer.prototype.createShape = function(t) {
                return new CVShapeElement(t,this.globalData,this)
            }
            ,
            CanvasRenderer.prototype.createText = function(t) {
                return new CVTextElement(t,this.globalData,this)
            }
            ,
            CanvasRenderer.prototype.createImage = function(t) {
                return new CVImageElement(t,this.globalData,this)
            }
            ,
            CanvasRenderer.prototype.createComp = function(t) {
                return new CVCompElement(t,this.globalData,this)
            }
            ,
            CanvasRenderer.prototype.createSolid = function(t) {
                return new CVSolidElement(t,this.globalData,this)
            }
            ,
            CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull,
            CanvasRenderer.prototype.ctxTransform = function(t) {
                if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                    if (this.renderConfig.clearCanvas) {
                        this.transformMat.cloneFromProps(t);
                        var e = this.contextData.cTr.props;
                        this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]),
                        this.contextData.cTr.cloneFromProps(this.transformMat.props);
                        var i = this.contextData.cTr.props;
                        this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
                    } else
                        this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
            }
            ,
            CanvasRenderer.prototype.ctxOpacity = function(t) {
                if (!this.renderConfig.clearCanvas)
                    return this.canvasContext.globalAlpha *= t < 0 ? 0 : t,
                    void (this.globalData.currentGlobalAlpha = this.contextData.cO);
                this.contextData.cO *= t < 0 ? 0 : t,
                this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO,
                this.globalData.currentGlobalAlpha = this.contextData.cO)
            }
            ,
            CanvasRenderer.prototype.reset = function() {
                this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
            }
            ,
            CanvasRenderer.prototype.save = function(t) {
                if (this.renderConfig.clearCanvas) {
                    t && this.canvasContext.save();
                    var e = this.contextData.cTr.props;
                    this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                    var i, s = this.contextData.saved[this.contextData.cArrPos];
                    for (i = 0; i < 16; i += 1)
                        s[i] = e[i];
                    this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO,
                    this.contextData.cArrPos += 1
                } else
                    this.canvasContext.save()
            }
            ,
            CanvasRenderer.prototype.restore = function(t) {
                if (this.renderConfig.clearCanvas) {
                    t && (this.canvasContext.restore(),
                    this.globalData.blendMode = "source-over"),
                    this.contextData.cArrPos -= 1;
                    var e, i = this.contextData.saved[this.contextData.cArrPos], s = this.contextData.cTr.props;
                    for (e = 0; e < 16; e += 1)
                        s[e] = i[e];
                    this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]),
                    i = this.contextData.savedOp[this.contextData.cArrPos],
                    this.contextData.cO = i,
                    this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i,
                    this.globalData.currentGlobalAlpha = i)
                } else
                    this.canvasContext.restore()
            }
            ,
            CanvasRenderer.prototype.configAnimation = function(t) {
                this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"),
                this.animationItem.container.style.width = "100%",
                this.animationItem.container.style.height = "100%",
                this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px",
                this.animationItem.wrapper.appendChild(this.animationItem.container),
                this.canvasContext = this.animationItem.container.getContext("2d"),
                this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className)) : this.canvasContext = this.renderConfig.context,
                this.data = t,
                this.layers = t.layers,
                this.transformCanvas = {
                    w: t.w,
                    h: t.h,
                    sx: 0,
                    sy: 0,
                    tx: 0,
                    ty: 0
                },
                this.setupGlobalData(t, document.body),
                this.globalData.canvasContext = this.canvasContext,
                this.globalData.renderer = this,
                this.globalData.isDashed = !1,
                this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
                this.globalData.transformCanvas = this.transformCanvas,
                this.elements = createSizedArray(t.layers.length),
                this.updateContainerSize()
            }
            ,
            CanvasRenderer.prototype.updateContainerSize = function() {
                var t, e, i, s;
                if (this.reset(),
                this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth,
                e = this.animationItem.wrapper.offsetHeight,
                this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr),
                this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr,
                e = this.canvasContext.canvas.height * this.renderConfig.dpr),
                -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                    var r = this.renderConfig.preserveAspectRatio.split(" ")
                      , a = r[1] || "meet"
                      , n = r[0] || "xMidYMid"
                      , o = n.substr(0, 4)
                      , h = n.substr(4);
                    i = t / e,
                    s = this.transformCanvas.w / this.transformCanvas.h,
                    s > i && "meet" === a || s < i && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr),
                    this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr),
                    this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)),
                    this.transformCanvas.tx = "xMid" === o && (s < i && "meet" === a || s > i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (s < i && "meet" === a || s > i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0,
                    this.transformCanvas.ty = "YMid" === h && (s > i && "meet" === a || s < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (s > i && "meet" === a || s < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                } else
                    "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr),
                    this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr),
                    this.transformCanvas.tx = 0,
                    this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr,
                    this.transformCanvas.sy = this.renderConfig.dpr,
                    this.transformCanvas.tx = 0,
                    this.transformCanvas.ty = 0);
                this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1],
                this.ctxTransform(this.transformCanvas.props),
                this.canvasContext.beginPath(),
                this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
                this.canvasContext.closePath(),
                this.canvasContext.clip(),
                this.renderFrame(this.renderedFrame, !0)
            }
            ,
            CanvasRenderer.prototype.destroy = function() {
                this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = "");
                var t, e = this.layers ? this.layers.length : 0;
                for (t = e - 1; t >= 0; t -= 1)
                    this.elements[t] && this.elements[t].destroy();
                this.elements.length = 0,
                this.globalData.canvasContext = null,
                this.animationItem.container = null,
                this.destroyed = !0
            }
            ,
            CanvasRenderer.prototype.renderFrame = function(t, e) {
                if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                    this.renderedFrame = t,
                    this.globalData.frameNum = t - this.animationItem._isFirstFrame,
                    this.globalData.frameId += 1,
                    this.globalData._mdf = !this.renderConfig.clearCanvas || e,
                    this.globalData.projectInterface.currentFrame = t;
                    var i, s = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t),
                    i = 0; i < s; i++)
                        (this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                    if (this.globalData._mdf) {
                        for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(),
                        i = s - 1; i >= 0; i -= 1)
                            (this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
                        !0 !== this.renderConfig.clearCanvas && this.restore()
                    }
                }
            }
            ,
            CanvasRenderer.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && 99 != this.layers[t].ty) {
                    var i = this.createItem(this.layers[t], this, this.globalData);
                    e[t] = i,
                    i.initExpressions()
                }
            }
            ,
            CanvasRenderer.prototype.checkPendingElements = function() {
                while (this.pendingElements.length) {
                    var t = this.pendingElements.pop();
                    t.checkParenting()
                }
            }
            ,
            CanvasRenderer.prototype.hide = function() {
                this.animationItem.container.style.display = "none"
            }
            ,
            CanvasRenderer.prototype.show = function() {
                this.animationItem.container.style.display = "block"
            }
            ,
            extendPrototype([BaseRenderer], HybridRenderer),
            HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem,
            HybridRenderer.prototype.checkPendingElements = function() {
                while (this.pendingElements.length) {
                    var t = this.pendingElements.pop();
                    t.checkParenting()
                }
            }
            ,
            HybridRenderer.prototype.appendElementInPos = function(t, e) {
                var i = t.getBaseElement();
                if (i) {
                    var s = this.layers[e];
                    if (s.ddd && this.supports3d)
                        this.addTo3dContainer(i, e);
                    else if (this.threeDElements)
                        this.addTo3dContainer(i, e);
                    else {
                        var r, a, n, o = 0;
                        while (o < e)
                            this.elements[o] && !0 !== this.elements[o] && this.elements[o].getBaseElement && (a = this.elements[o],
                            n = this.layers[o].ddd ? this.getThreeDContainerByPos(o) : a.getBaseElement(),
                            r = n || r),
                            o += 1;
                        r ? s.ddd && this.supports3d || this.layerElement.insertBefore(i, r) : s.ddd && this.supports3d || this.layerElement.appendChild(i)
                    }
                }
            }
            ,
            HybridRenderer.prototype.createShape = function(t) {
                return this.supports3d ? new HShapeElement(t,this.globalData,this) : new SVGShapeElement(t,this.globalData,this)
            }
            ,
            HybridRenderer.prototype.createText = function(t) {
                return this.supports3d ? new HTextElement(t,this.globalData,this) : new SVGTextElement(t,this.globalData,this)
            }
            ,
            HybridRenderer.prototype.createCamera = function(t) {
                return this.camera = new HCameraElement(t,this.globalData,this),
                this.camera
            }
            ,
            HybridRenderer.prototype.createImage = function(t) {
                return this.supports3d ? new HImageElement(t,this.globalData,this) : new IImageElement(t,this.globalData,this)
            }
            ,
            HybridRenderer.prototype.createComp = function(t) {
                return this.supports3d ? new HCompElement(t,this.globalData,this) : new SVGCompElement(t,this.globalData,this)
            }
            ,
            HybridRenderer.prototype.createSolid = function(t) {
                return this.supports3d ? new HSolidElement(t,this.globalData,this) : new ISolidElement(t,this.globalData,this)
            }
            ,
            HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull,
            HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
                var e = 0
                  , i = this.threeDElements.length;
                while (e < i) {
                    if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t)
                        return this.threeDElements[e].perspectiveElem;
                    e += 1
                }
            }
            ,
            HybridRenderer.prototype.createThreeDContainer = function(t, e) {
                var i = createTag("div");
                styleDiv(i);
                var s = createTag("div");
                styleDiv(s),
                "3d" === e && (i.style.width = this.globalData.compSize.w + "px",
                i.style.height = this.globalData.compSize.h + "px",
                i.style.transformOrigin = i.style.mozTransformOrigin = i.style.webkitTransformOrigin = "50% 50%",
                s.style.transform = s.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"),
                i.appendChild(s);
                var r = {
                    container: s,
                    perspectiveElem: i,
                    startPos: t,
                    endPos: t,
                    type: e
                };
                return this.threeDElements.push(r),
                r
            }
            ,
            HybridRenderer.prototype.build3dContainers = function() {
                var t, e, i = this.layers.length, s = "";
                for (t = 0; t < i; t += 1)
                    this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== s && (s = "3d",
                    e = this.createThreeDContainer(t, "3d")),
                    e.endPos = Math.max(e.endPos, t)) : ("2d" !== s && (s = "2d",
                    e = this.createThreeDContainer(t, "2d")),
                    e.endPos = Math.max(e.endPos, t));
                for (i = this.threeDElements.length,
                t = i - 1; t >= 0; t--)
                    this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
            }
            ,
            HybridRenderer.prototype.addTo3dContainer = function(t, e) {
                var i = 0
                  , s = this.threeDElements.length;
                while (i < s) {
                    if (e <= this.threeDElements[i].endPos) {
                        var r, a = this.threeDElements[i].startPos;
                        while (a < e)
                            this.elements[a] && this.elements[a].getBaseElement && (r = this.elements[a].getBaseElement()),
                            a += 1;
                        r ? this.threeDElements[i].container.insertBefore(t, r) : this.threeDElements[i].container.appendChild(t);
                        break
                    }
                    i += 1
                }
            }
            ,
            HybridRenderer.prototype.configAnimation = function(t) {
                var e = createTag("div")
                  , i = this.animationItem.wrapper;
                e.style.width = t.w + "px",
                e.style.height = t.h + "px",
                this.resizerElem = e,
                styleDiv(e),
                e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat",
                this.renderConfig.className && e.setAttribute("class", this.renderConfig.className),
                i.appendChild(e),
                e.style.overflow = "hidden";
                var s = createNS("svg");
                s.setAttribute("width", "1"),
                s.setAttribute("height", "1"),
                styleDiv(s),
                this.resizerElem.appendChild(s);
                var r = createNS("defs");
                s.appendChild(r),
                this.data = t,
                this.setupGlobalData(t, s),
                this.globalData.defs = r,
                this.layers = t.layers,
                this.layerElement = this.resizerElem,
                this.build3dContainers(),
                this.updateContainerSize()
            }
            ,
            HybridRenderer.prototype.destroy = function() {
                this.animationItem.wrapper.innerHTML = "",
                this.animationItem.container = null,
                this.globalData.defs = null;
                var t, e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t++)
                    this.elements[t].destroy();
                this.elements.length = 0,
                this.destroyed = !0,
                this.animationItem = null
            }
            ,
            HybridRenderer.prototype.updateContainerSize = function() {
                var t, e, i, s, r = this.animationItem.wrapper.offsetWidth, a = this.animationItem.wrapper.offsetHeight, n = r / a, o = this.globalData.compSize.w / this.globalData.compSize.h;
                o > n ? (t = r / this.globalData.compSize.w,
                e = r / this.globalData.compSize.w,
                i = 0,
                s = (a - this.globalData.compSize.h * (r / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h,
                e = a / this.globalData.compSize.h,
                i = (r - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2,
                s = 0),
                this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + s + ",0,1)"
            }
            ,
            HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame,
            HybridRenderer.prototype.hide = function() {
                this.resizerElem.style.display = "none"
            }
            ,
            HybridRenderer.prototype.show = function() {
                this.resizerElem.style.display = "block"
            }
            ,
            HybridRenderer.prototype.initItems = function() {
                if (this.buildAllItems(),
                this.camera)
                    this.camera.setup();
                else {
                    var t, e = this.globalData.compSize.w, i = this.globalData.compSize.h, s = this.threeDElements.length;
                    for (t = 0; t < s; t += 1)
                        this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px"
                }
            }
            ,
            HybridRenderer.prototype.searchExtraCompositions = function(t) {
                var e, i = t.length, s = createTag("div");
                for (e = 0; e < i; e += 1)
                    if (t[e].xt) {
                        var r = this.createComp(t[e], s, this.globalData.comp, null);
                        r.initExpressions(),
                        this.globalData.projectInterface.registerComposition(r)
                    }
            }
            ,
            MaskElement.prototype.getMaskProperty = function(t) {
                return this.viewData[t].prop
            }
            ,
            MaskElement.prototype.renderFrame = function(t) {
                var e, i = this.element.finalTransform.mat, s = this.masksProperties.length;
                for (e = 0; e < s; e++)
                    if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]),
                    (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v),
                    "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && (this.viewData[e].invRect.setAttribute("x", -i.props[12]),
                    this.viewData[e].invRect.setAttribute("y", -i.props[13])),
                    this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                        var r = this.storedData[e].expan;
                        this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode",
                        this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")),
                        r.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate",
                        this.storedData[e].elem.setAttribute("filter", null)),
                        this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                    }
            }
            ,
            MaskElement.prototype.getMaskelement = function() {
                return this.maskElement
            }
            ,
            MaskElement.prototype.createLayerSolidPath = function() {
                var t = "M0,0 ";
                return t += " h" + this.globalData.compSize.w,
                t += " v" + this.globalData.compSize.h,
                t += " h-" + this.globalData.compSize.w,
                t += " v-" + this.globalData.compSize.h + " ",
                t
            }
            ,
            MaskElement.prototype.drawPath = function(t, e, i) {
                var s, r, a = " M" + e.v[0][0] + "," + e.v[0][1];
                for (r = e._length,
                s = 1; s < r; s += 1)
                    a += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
                if (e.c && r > 1 && (a += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]),
                i.lastPath !== a) {
                    var n = "";
                    i.elem && (e.c && (n = t.inv ? this.solidPath + a : a),
                    i.elem.setAttribute("d", n)),
                    i.lastPath = a
                }
            }
            ,
            MaskElement.prototype.destroy = function() {
                this.element = null,
                this.globalData = null,
                this.maskElement = null,
                this.data = null,
                this.masksProperties = null
            }
            ,
            HierarchyElement.prototype = {
                initHierarchy: function() {
                    this.hierarchy = [],
                    this._isParent = !1,
                    this.checkParenting()
                },
                setHierarchy: function(t) {
                    this.hierarchy = t
                },
                setAsParent: function() {
                    this._isParent = !0
                },
                checkParenting: function() {
                    void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                }
            },
            FrameElement.prototype = {
                initFrame: function() {
                    this._isFirstFrame = !1,
                    this.dynamicProperties = [],
                    this._mdf = !1
                },
                prepareProperties: function(t, e) {
                    var i, s = this.dynamicProperties.length;
                    for (i = 0; i < s; i += 1)
                        (e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(),
                        this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0,
                        this._mdf = !0))
                },
                addDynamicProperty: function(t) {
                    -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                }
            },
            TransformElement.prototype = {
                initTransform: function() {
                    this.finalTransform = {
                        mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                            o: 0
                        },
                        _matMdf: !1,
                        _opMdf: !1,
                        mat: new Matrix
                    },
                    this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                    this.data.ty
                },
                renderTransform: function() {
                    if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame,
                    this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame,
                    this.hierarchy) {
                        var t, e = this.finalTransform.mat, i = 0, s = this.hierarchy.length;
                        if (!this.finalTransform._matMdf)
                            while (i < s) {
                                if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                    this.finalTransform._matMdf = !0;
                                    break
                                }
                                i += 1
                            }
                        if (this.finalTransform._matMdf)
                            for (t = this.finalTransform.mProp.v.props,
                            e.cloneFromProps(t),
                            i = 0; i < s; i += 1)
                                t = this.hierarchy[i].finalTransform.mProp.v.props,
                                e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                    }
                },
                globalToLocal: function(t) {
                    var e = [];
                    e.push(this.finalTransform);
                    var i = !0
                      , s = this.comp;
                    while (i)
                        s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform),
                        s = s.comp) : i = !1;
                    var r, a, n = e.length;
                    for (r = 0; r < n; r += 1)
                        a = e[r].mat.applyToPointArray(0, 0, 0),
                        t = [t[0] - a[0], t[1] - a[1], 0];
                    return t
                },
                mHelper: new Matrix
            },
            RenderableElement.prototype = {
                initRenderable: function() {
                    this.isInRange = !1,
                    this.hidden = !1,
                    this.isTransparent = !1,
                    this.renderableComponents = []
                },
                addRenderableComponent: function(t) {
                    -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                },
                removeRenderableComponent: function(t) {
                    -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                },
                prepareRenderableFrame: function(t) {
                    this.checkLayerLimits(t)
                },
                checkTransparency: function() {
                    this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0,
                    this.hide()) : this.isTransparent && (this.isTransparent = !1,
                    this.show())
                },
                checkLayerLimits: function(t) {
                    this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0,
                    this._mdf = !0,
                    this.isInRange = !0,
                    this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0,
                    this.isInRange = !1,
                    this.hide())
                },
                renderRenderable: function() {
                    var t, e = this.renderableComponents.length;
                    for (t = 0; t < e; t += 1)
                        this.renderableComponents[t].renderFrame(this._isFirstFrame)
                },
                sourceRectAtTime: function() {
                    return {
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100
                    }
                },
                getLayerSize: function() {
                    return 5 === this.data.ty ? {
                        w: this.data.textData.width,
                        h: this.data.textData.height
                    } : {
                        w: this.data.width,
                        h: this.data.height
                    }
                }
            },
            function() {
                var t = {
                    initElement: function(t, e, i) {
                        this.initFrame(),
                        this.initBaseData(t, e, i),
                        this.initTransform(t, e, i),
                        this.initHierarchy(),
                        this.initRenderable(),
                        this.initRendererElement(),
                        this.createContainerElements(),
                        this.createRenderableComponents(),
                        this.createContent(),
                        this.hide()
                    },
                    hide: function() {
                        if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                            var t = this.baseElement || this.layerElement;
                            t.style.display = "none",
                            this.hidden = !0
                        }
                    },
                    show: function() {
                        if (this.isInRange && !this.isTransparent) {
                            if (!this.data.hd) {
                                var t = this.baseElement || this.layerElement;
                                t.style.display = "block"
                            }
                            this.hidden = !1,
                            this._isFirstFrame = !0
                        }
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(),
                        this.renderRenderable(),
                        this.renderElement(),
                        this.renderInnerContent(),
                        this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    renderInnerContent: function() {},
                    prepareFrame: function(t) {
                        this._mdf = !1,
                        this.prepareRenderableFrame(t),
                        this.prepareProperties(t, this.isInRange),
                        this.checkTransparency()
                    },
                    destroy: function() {
                        this.innerElem = null,
                        this.destroyBaseElement()
                    }
                };
                extendPrototype([RenderableElement, createProxyFunction(t)], RenderableDOMElement)
            }(),
            SVGStyleData.prototype.reset = function() {
                this.d = "",
                this._mdf = !1
            }
            ,
            SVGShapeData.prototype.setAsAnimated = function() {
                this._isAnimated = !0
            }
            ,
            extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
            extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
            SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
                this.s = PropertyFactory.getProp(t, e.s, 1, null, this),
                this.e = PropertyFactory.getProp(t, e.e, 1, null, this),
                this.h = PropertyFactory.getProp(t, e.h || {
                    k: 0
                }, 0, .01, this),
                this.a = PropertyFactory.getProp(t, e.a || {
                    k: 0
                }, 0, degToRads, this),
                this.g = new GradientProperty(t,e.g,this),
                this.style = i,
                this.stops = [],
                this.setGradientData(i.pElem, e),
                this.setGradientOpacity(e, i),
                this._isAnimated = !!this._isAnimated
            }
            ,
            SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                var i = createElementID()
                  , s = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                s.setAttribute("id", i),
                s.setAttribute("spreadMethod", "pad"),
                s.setAttribute("gradientUnits", "userSpaceOnUse");
                var r, a, n, o = [];
                for (n = 4 * e.g.p,
                a = 0; a < n; a += 4)
                    r = createNS("stop"),
                    s.appendChild(r),
                    o.push(r);
                t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + i + ")"),
                this.gf = s,
                this.cst = o
            }
            ,
            SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var i, s, r, a = createNS("mask"), n = createNS("path");
                    a.appendChild(n);
                    var o = createElementID()
                      , h = createElementID();
                    a.setAttribute("id", h);
                    var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                    l.setAttribute("id", o),
                    l.setAttribute("spreadMethod", "pad"),
                    l.setAttribute("gradientUnits", "userSpaceOnUse"),
                    r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                    var p = this.stops;
                    for (s = 4 * t.g.p; s < r; s += 2)
                        i = createNS("stop"),
                        i.setAttribute("stop-color", "rgb(255,255,255)"),
                        l.appendChild(i),
                        p.push(i);
                    n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"),
                    this.of = l,
                    this.ms = a,
                    this.ost = p,
                    this.maskId = h,
                    e.msElem = n
                }
            }
            ,
            extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
            extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
            var SVGElementsRenderer = function() {
                var t = new Matrix
                  , e = new Matrix
                  , i = {
                    createRenderFunction: s
                };
                function s(t) {
                    t.ty;
                    switch (t.ty) {
                    case "fl":
                        return n;
                    case "gf":
                        return h;
                    case "gs":
                        return o;
                    case "st":
                        return l;
                    case "sh":
                    case "el":
                    case "rc":
                    case "sr":
                        return a;
                    case "tr":
                        return r
                    }
                }
                function r(t, e, i) {
                    (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v),
                    (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                }
                function a(i, s, r) {
                    var a, n, o, h, l, p, c, m, f, u, d, g = s.styles.length, y = s.lvl;
                    for (p = 0; p < g; p += 1) {
                        if (h = s.sh._mdf || r,
                        s.styles[p].lvl < y) {
                            m = e.reset(),
                            u = y - s.styles[p].lvl,
                            d = s.transformers.length - 1;
                            while (!h && u > 0)
                                h = s.transformers[d].mProps._mdf || h,
                                u--,
                                d--;
                            if (h) {
                                u = y - s.styles[p].lvl,
                                d = s.transformers.length - 1;
                                while (u > 0)
                                    f = s.transformers[d].mProps.v.props,
                                    m.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]),
                                    u--,
                                    d--
                            }
                        } else
                            m = t;
                        if (c = s.sh.paths,
                        n = c._length,
                        h) {
                            for (o = "",
                            a = 0; a < n; a += 1)
                                l = c.shapes[a],
                                l && l._length && (o += buildShapeString(l, l._length, l.c, m));
                            s.caches[p] = o
                        } else
                            o = s.caches[p];
                        s.styles[p].d += !0 === i.hd ? "" : o,
                        s.styles[p]._mdf = h || s.styles[p]._mdf
                    }
                }
                function n(t, e, i) {
                    var s = e.style;
                    (e.c._mdf || i) && s.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"),
                    (e.o._mdf || i) && s.pElem.setAttribute("fill-opacity", e.o.v)
                }
                function o(t, e, i) {
                    h(t, e, i),
                    l(t, e, i)
                }
                function h(t, e, i) {
                    var s, r, a, n, o, h = e.gf, l = e.g._hasOpacity, p = e.s.v, c = e.e.v;
                    if (e.o._mdf || i) {
                        var m = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                        e.style.pElem.setAttribute(m, e.o.v)
                    }
                    if (e.s._mdf || i) {
                        var f = 1 === t.t ? "x1" : "cx"
                          , u = "x1" === f ? "y1" : "cy";
                        h.setAttribute(f, p[0]),
                        h.setAttribute(u, p[1]),
                        l && !e.g._collapsable && (e.of.setAttribute(f, p[0]),
                        e.of.setAttribute(u, p[1]))
                    }
                    if (e.g._cmdf || i) {
                        s = e.cst;
                        var d = e.g.c;
                        for (a = s.length,
                        r = 0; r < a; r += 1)
                            n = s[r],
                            n.setAttribute("offset", d[4 * r] + "%"),
                            n.setAttribute("stop-color", "rgb(" + d[4 * r + 1] + "," + d[4 * r + 2] + "," + d[4 * r + 3] + ")")
                    }
                    if (l && (e.g._omdf || i)) {
                        var g = e.g.o;
                        for (s = e.g._collapsable ? e.cst : e.ost,
                        a = s.length,
                        r = 0; r < a; r += 1)
                            n = s[r],
                            e.g._collapsable || n.setAttribute("offset", g[2 * r] + "%"),
                            n.setAttribute("stop-opacity", g[2 * r + 1])
                    }
                    if (1 === t.t)
                        (e.e._mdf || i) && (h.setAttribute("x2", c[0]),
                        h.setAttribute("y2", c[1]),
                        l && !e.g._collapsable && (e.of.setAttribute("x2", c[0]),
                        e.of.setAttribute("y2", c[1])));
                    else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)),
                    h.setAttribute("r", o),
                    l && !e.g._collapsable && e.of.setAttribute("r", o)),
                    e.e._mdf || e.h._mdf || e.a._mdf || i) {
                        o || (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)));
                        var y = Math.atan2(c[1] - p[1], c[0] - p[0])
                          , v = e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v
                          , b = o * v
                          , x = Math.cos(y + e.a.v) * b + p[0]
                          , E = Math.sin(y + e.a.v) * b + p[1];
                        h.setAttribute("fx", x),
                        h.setAttribute("fy", E),
                        l && !e.g._collapsable && (e.of.setAttribute("fx", x),
                        e.of.setAttribute("fy", E))
                    }
                }
                function l(t, e, i) {
                    var s = e.style
                      , r = e.d;
                    r && (r._mdf || i) && r.dashStr && (s.pElem.setAttribute("stroke-dasharray", r.dashStr),
                    s.pElem.setAttribute("stroke-dashoffset", r.dashoffset[0])),
                    e.c && (e.c._mdf || i) && s.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"),
                    (e.o._mdf || i) && s.pElem.setAttribute("stroke-opacity", e.o.v),
                    (e.w._mdf || i) && (s.pElem.setAttribute("stroke-width", e.w.v),
                    s.msElem && s.msElem.setAttribute("stroke-width", e.w.v))
                }
                return i
            }();
            function ShapeTransformManager() {
                this.sequences = {},
                this.sequenceList = [],
                this.transform_key_count = 0
            }
            function CVShapeData(t, e, i, s) {
                this.styledShapes = [],
                this.tr = [0, 0, 0, 0, 0, 0];
                var r = 4;
                "rc" == e.ty ? r = 5 : "el" == e.ty ? r = 6 : "sr" == e.ty && (r = 7),
                this.sh = ShapePropertyFactory.getShapeProp(t, e, r, t);
                var a, n, o = i.length;
                for (a = 0; a < o; a += 1)
                    i[a].closed || (n = {
                        transforms: s.addTransformSequence(i[a].transforms),
                        trNodes: []
                    },
                    this.styledShapes.push(n),
                    i[a].elements.push(n))
            }
            function BaseElement() {}
            function NullElement(t, e, i) {
                this.initFrame(),
                this.initBaseData(t, e, i),
                this.initFrame(),
                this.initTransform(t, e, i),
                this.initHierarchy()
            }
            function SVGBaseElement() {}
            function IShapeElement() {}
            function ITextElement() {}
            function ICompElement() {}
            function IImageElement(t, e, i) {
                this.assetData = e.getAssetData(t.refId),
                this.initElement(t, e, i),
                this.sourceRect = {
                    top: 0,
                    left: 0,
                    width: this.assetData.w,
                    height: this.assetData.h
                }
            }
            function ISolidElement(t, e, i) {
                this.initElement(t, e, i)
            }
            function SVGCompElement(t, e, i) {
                this.layers = t.layers,
                this.supports3d = !0,
                this.completeLayers = !1,
                this.pendingElements = [],
                this.elements = this.layers ? createSizedArray(this.layers.length) : [],
                this.initElement(t, e, i),
                this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }
            function SVGTextElement(t, e, i) {
                this.textSpans = [],
                this.renderType = "svg",
                this.initElement(t, e, i)
            }
            function SVGShapeElement(t, e, i) {
                this.shapes = [],
                this.shapesData = t.shapes,
                this.stylesList = [],
                this.shapeModifiers = [],
                this.itemsData = [],
                this.processedElements = [],
                this.animatedContents = [],
                this.initElement(t, e, i),
                this.prevViewData = []
            }
            function SVGTintFilter(t, e) {
                this.filterManager = e;
                var i = createNS("feColorMatrix");
                if (i.setAttribute("type", "matrix"),
                i.setAttribute("color-interpolation-filters", "linearRGB"),
                i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
                i.setAttribute("result", "f1"),
                t.appendChild(i),
                i = createNS("feColorMatrix"),
                i.setAttribute("type", "matrix"),
                i.setAttribute("color-interpolation-filters", "sRGB"),
                i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
                i.setAttribute("result", "f2"),
                t.appendChild(i),
                this.matrixFilter = i,
                100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                    var s, r = createNS("feMerge");
                    t.appendChild(r),
                    s = createNS("feMergeNode"),
                    s.setAttribute("in", "SourceGraphic"),
                    r.appendChild(s),
                    s = createNS("feMergeNode"),
                    s.setAttribute("in", "f2"),
                    r.appendChild(s)
                }
            }
            function SVGFillFilter(t, e) {
                this.filterManager = e;
                var i = createNS("feColorMatrix");
                i.setAttribute("type", "matrix"),
                i.setAttribute("color-interpolation-filters", "sRGB"),
                i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
                t.appendChild(i),
                this.matrixFilter = i
            }
            function SVGGaussianBlurEffect(t, e) {
                t.setAttribute("x", "-100%"),
                t.setAttribute("y", "-100%"),
                t.setAttribute("width", "300%"),
                t.setAttribute("height", "300%"),
                this.filterManager = e;
                var i = createNS("feGaussianBlur");
                t.appendChild(i),
                this.feGaussianBlur = i
            }
            function SVGStrokeEffect(t, e) {
                this.initialized = !1,
                this.filterManager = e,
                this.elem = t,
                this.paths = []
            }
            function SVGTritoneFilter(t, e) {
                this.filterManager = e;
                var i = createNS("feColorMatrix");
                i.setAttribute("type", "matrix"),
                i.setAttribute("color-interpolation-filters", "linearRGB"),
                i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
                i.setAttribute("result", "f1"),
                t.appendChild(i);
                var s = createNS("feComponentTransfer");
                s.setAttribute("color-interpolation-filters", "sRGB"),
                t.appendChild(s),
                this.matrixFilter = s;
                var r = createNS("feFuncR");
                r.setAttribute("type", "table"),
                s.appendChild(r),
                this.feFuncR = r;
                var a = createNS("feFuncG");
                a.setAttribute("type", "table"),
                s.appendChild(a),
                this.feFuncG = a;
                var n = createNS("feFuncB");
                n.setAttribute("type", "table"),
                s.appendChild(n),
                this.feFuncB = n
            }
            function SVGProLevelsFilter(t, e) {
                this.filterManager = e;
                var i = this.filterManager.effectElements
                  , s = createNS("feComponentTransfer");
                (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", s)),
                (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", s)),
                (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", s)),
                (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", s)),
                (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s.setAttribute("color-interpolation-filters", "sRGB"),
                t.appendChild(s),
                s = createNS("feComponentTransfer")),
                (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && (s.setAttribute("color-interpolation-filters", "sRGB"),
                t.appendChild(s),
                this.feFuncRComposed = this.createFeFunc("feFuncR", s),
                this.feFuncGComposed = this.createFeFunc("feFuncG", s),
                this.feFuncBComposed = this.createFeFunc("feFuncB", s))
            }
            function SVGDropShadowEffect(t, e) {
                t.setAttribute("x", "-100%"),
                t.setAttribute("y", "-100%"),
                t.setAttribute("width", "400%"),
                t.setAttribute("height", "400%"),
                this.filterManager = e;
                var i = createNS("feGaussianBlur");
                i.setAttribute("in", "SourceAlpha"),
                i.setAttribute("result", "drop_shadow_1"),
                i.setAttribute("stdDeviation", "0"),
                this.feGaussianBlur = i,
                t.appendChild(i);
                var s = createNS("feOffset");
                s.setAttribute("dx", "25"),
                s.setAttribute("dy", "0"),
                s.setAttribute("in", "drop_shadow_1"),
                s.setAttribute("result", "drop_shadow_2"),
                this.feOffset = s,
                t.appendChild(s);
                var r = createNS("feFlood");
                r.setAttribute("flood-color", "#00ff00"),
                r.setAttribute("flood-opacity", "1"),
                r.setAttribute("result", "drop_shadow_3"),
                this.feFlood = r,
                t.appendChild(r);
                var a = createNS("feComposite");
                a.setAttribute("in", "drop_shadow_3"),
                a.setAttribute("in2", "drop_shadow_2"),
                a.setAttribute("operator", "in"),
                a.setAttribute("result", "drop_shadow_4"),
                t.appendChild(a);
                var n, o = createNS("feMerge");
                t.appendChild(o),
                n = createNS("feMergeNode"),
                o.appendChild(n),
                n = createNS("feMergeNode"),
                n.setAttribute("in", "SourceGraphic"),
                this.feMergeNode = n,
                this.feMerge = o,
                this.originalNodeAdded = !1,
                o.appendChild(n)
            }
            ShapeTransformManager.prototype = {
                addTransformSequence: function(t) {
                    var e, i = t.length, s = "_";
                    for (e = 0; e < i; e += 1)
                        s += t[e].transform.key + "_";
                    var r = this.sequences[s];
                    return r || (r = {
                        transforms: [].concat(t),
                        finalTransform: new Matrix,
                        _mdf: !1
                    },
                    this.sequences[s] = r,
                    this.sequenceList.push(r)),
                    r
                },
                processSequence: function(t, e) {
                    var i, s = 0, r = t.transforms.length, a = e;
                    while (s < r && !e) {
                        if (t.transforms[s].transform.mProps._mdf) {
                            a = !0;
                            break
                        }
                        s += 1
                    }
                    if (a)
                        for (t.finalTransform.reset(),
                        s = r - 1; s >= 0; s -= 1)
                            i = t.transforms[s].transform.mProps.v.props,
                            t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]);
                    t._mdf = a
                },
                processSequences: function(t) {
                    var e, i = this.sequenceList.length;
                    for (e = 0; e < i; e += 1)
                        this.processSequence(this.sequenceList[e], t)
                },
                getNewKey: function() {
                    return "_" + this.transform_key_count++
                }
            },
            CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated,
            BaseElement.prototype = {
                checkMasks: function() {
                    if (!this.data.hasMask)
                        return !1;
                    var t = 0
                      , e = this.data.masksProperties.length;
                    while (t < e) {
                        if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl)
                            return !0;
                        t += 1
                    }
                    return !1
                },
                initExpressions: function() {
                    this.layerInterface = LayerExpressionInterface(this),
                    this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(t),
                    0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface),
                    this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this),
                    this.layerInterface.text = this.layerInterface.textInterface)
                },
                setBlendMode: function() {
                    var t = getBlendMode(this.data.bm)
                      , e = this.baseElement || this.layerElement;
                    e.style["mix-blend-mode"] = t
                },
                initBaseData: function(t, e, i) {
                    this.globalData = e,
                    this.comp = i,
                    this.data = t,
                    this.layerId = createElementID(),
                    this.data.sr || (this.data.sr = 1),
                    this.effectsManager = new EffectsManager(this.data,this,this.dynamicProperties)
                },
                getType: function() {
                    return this.type
                },
                sourceRectAtTime: function() {}
            },
            NullElement.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0)
            }
            ,
            NullElement.prototype.renderFrame = function() {}
            ,
            NullElement.prototype.getBaseElement = function() {
                return null
            }
            ,
            NullElement.prototype.destroy = function() {}
            ,
            NullElement.prototype.sourceRectAtTime = function() {}
            ,
            NullElement.prototype.hide = function() {}
            ,
            extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement),
            SVGBaseElement.prototype = {
                initRendererElement: function() {
                    this.layerElement = createNS("g")
                },
                createContainerElements: function() {
                    this.matteElement = createNS("g"),
                    this.transformedElement = this.layerElement,
                    this.maskedElement = this.layerElement,
                    this._sizeChanged = !1;
                    var t, e, i, s = null;
                    if (this.data.td) {
                        if (3 == this.data.td || 1 == this.data.td) {
                            var r = createNS("mask");
                            r.setAttribute("id", this.layerId),
                            r.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"),
                            r.appendChild(this.layerElement),
                            s = r,
                            this.globalData.defs.appendChild(r),
                            featureSupport.maskType || 1 != this.data.td || (r.setAttribute("mask-type", "luminance"),
                            t = createElementID(),
                            e = filtersFactory.createFilter(t),
                            this.globalData.defs.appendChild(e),
                            e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                            i = createNS("g"),
                            i.appendChild(this.layerElement),
                            s = i,
                            r.appendChild(i),
                            i.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                        } else if (2 == this.data.td) {
                            var a = createNS("mask");
                            a.setAttribute("id", this.layerId),
                            a.setAttribute("mask-type", "alpha");
                            var n = createNS("g");
                            a.appendChild(n),
                            t = createElementID(),
                            e = filtersFactory.createFilter(t);
                            var o = createNS("feComponentTransfer");
                            o.setAttribute("in", "SourceGraphic"),
                            e.appendChild(o);
                            var h = createNS("feFuncA");
                            h.setAttribute("type", "table"),
                            h.setAttribute("tableValues", "1.0 0.0"),
                            o.appendChild(h),
                            this.globalData.defs.appendChild(e);
                            var l = createNS("rect");
                            l.setAttribute("width", this.comp.data.w),
                            l.setAttribute("height", this.comp.data.h),
                            l.setAttribute("x", "0"),
                            l.setAttribute("y", "0"),
                            l.setAttribute("fill", "#ffffff"),
                            l.setAttribute("opacity", "0"),
                            n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"),
                            n.appendChild(l),
                            n.appendChild(this.layerElement),
                            s = n,
                            featureSupport.maskType || (a.setAttribute("mask-type", "luminance"),
                            e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                            i = createNS("g"),
                            n.appendChild(l),
                            i.appendChild(this.layerElement),
                            s = i,
                            n.appendChild(i)),
                            this.globalData.defs.appendChild(a)
                        }
                    } else
                        this.data.tt ? (this.matteElement.appendChild(this.layerElement),
                        s = this.matteElement,
                        this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                    if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                    this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                    0 === this.data.ty && !this.data.hd) {
                        var p = createNS("clipPath")
                          , c = createNS("path");
                        c.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                        var m = createElementID();
                        if (p.setAttribute("id", m),
                        p.appendChild(c),
                        this.globalData.defs.appendChild(p),
                        this.checkMasks()) {
                            var f = createNS("g");
                            f.setAttribute("clip-path", "url(" + locationHref + "#" + m + ")"),
                            f.appendChild(this.layerElement),
                            this.transformedElement = f,
                            s ? s.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                        } else
                            this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + m + ")")
                    }
                    0 !== this.data.bm && this.setBlendMode()
                },
                renderElement: function() {
                    this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()),
                    this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                },
                destroyBaseElement: function() {
                    this.layerElement = null,
                    this.matteElement = null,
                    this.maskManager.destroy()
                },
                getBaseElement: function() {
                    return this.data.hd ? null : this.baseElement
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data,this,this.globalData),
                    this.renderableEffectsManager = new SVGEffects(this)
                },
                setMatte: function(t) {
                    this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
                }
            },
            IShapeElement.prototype = {
                addShapeToModifiers: function(t) {
                    var e, i = this.shapeModifiers.length;
                    for (e = 0; e < i; e += 1)
                        this.shapeModifiers[e].addShape(t)
                },
                isShapeInAnimatedModifiers: function(t) {
                    var e = 0
                      , i = this.shapeModifiers.length;
                    while (e < i)
                        if (this.shapeModifiers[e].isAnimatedWithShape(t))
                            return !0;
                    return !1
                },
                renderModifiers: function() {
                    if (this.shapeModifiers.length) {
                        var t, e = this.shapes.length;
                        for (t = 0; t < e; t += 1)
                            this.shapes[t].sh.reset();
                        for (e = this.shapeModifiers.length,
                        t = e - 1; t >= 0; t -= 1)
                            this.shapeModifiers[t].processShapes(this._isFirstFrame)
                    }
                },
                lcEnum: {
                    1: "butt",
                    2: "round",
                    3: "square"
                },
                ljEnum: {
                    1: "miter",
                    2: "round",
                    3: "bevel"
                },
                searchProcessedElement: function(t) {
                    var e = this.processedElements
                      , i = 0
                      , s = e.length;
                    while (i < s) {
                        if (e[i].elem === t)
                            return e[i].pos;
                        i += 1
                    }
                    return 0
                },
                addProcessedElement: function(t, e) {
                    var i = this.processedElements
                      , s = i.length;
                    while (s)
                        if (s -= 1,
                        i[s].elem === t)
                            return void (i[s].pos = e);
                    i.push(new ProcessedElement(t,e))
                },
                prepareFrame: function(t) {
                    this.prepareRenderableFrame(t),
                    this.prepareProperties(t, this.isInRange)
                }
            },
            ITextElement.prototype.initElement = function(t, e, i) {
                this.lettersChangedFlag = !0,
                this.initFrame(),
                this.initBaseData(t, e, i),
                this.textProperty = new TextProperty(this,t.t,this.dynamicProperties),
                this.textAnimator = new TextAnimatorProperty(t.t,this.renderType,this),
                this.initTransform(t, e, i),
                this.initHierarchy(),
                this.initRenderable(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                this.createContent(),
                this.hide(),
                this.textAnimator.searchProperties(this.dynamicProperties)
            }
            ,
            ITextElement.prototype.prepareFrame = function(t) {
                this._mdf = !1,
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(),
                this.textProperty._isFirstFrame = !1,
                this.textProperty._mdf = !1)
            }
            ,
            ITextElement.prototype.createPathShape = function(t, e) {
                var i, s, r = e.length, a = "";
                for (i = 0; i < r; i += 1)
                    s = e[i].ks.k,
                    a += buildShapeString(s, s.i.length, !0, t);
                return a
            }
            ,
            ITextElement.prototype.updateDocumentData = function(t, e) {
                this.textProperty.updateDocumentData(t, e)
            }
            ,
            ITextElement.prototype.canResizeFont = function(t) {
                this.textProperty.canResizeFont(t)
            }
            ,
            ITextElement.prototype.setMinimumFontSize = function(t) {
                this.textProperty.setMinimumFontSize(t)
            }
            ,
            ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, s, r) {
                switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                e.translate(0, -t.ls, 0),
                t.j) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
                    break
                }
                e.translate(s, r, 0)
            }
            ,
            ITextElement.prototype.buildColor = function(t) {
                return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
            }
            ,
            ITextElement.prototype.emptyProp = new LetterProps,
            ITextElement.prototype.destroy = function() {}
            ,
            extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement),
            ICompElement.prototype.initElement = function(t, e, i) {
                this.initFrame(),
                this.initBaseData(t, e, i),
                this.initTransform(t, e, i),
                this.initRenderable(),
                this.initHierarchy(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                !this.data.xt && e.progressiveLoad || this.buildAllItems(),
                this.hide()
            }
            ,
            ICompElement.prototype.prepareFrame = function(t) {
                if (this._mdf = !1,
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                this.isInRange || this.data.xt) {
                    if (this.tm._placeholder)
                        this.renderedFrame = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        e === this.data.op && (e = this.data.op - 1),
                        this.renderedFrame = e
                    }
                    var i, s = this.elements.length;
                    for (this.completeLayers || this.checkLayers(this.renderedFrame),
                    i = s - 1; i >= 0; i -= 1)
                        (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st),
                        this.elements[i]._mdf && (this._mdf = !0))
                }
            }
            ,
            ICompElement.prototype.renderInnerContent = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1)
                    (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
            }
            ,
            ICompElement.prototype.setElements = function(t) {
                this.elements = t
            }
            ,
            ICompElement.prototype.getElements = function() {
                return this.elements
            }
            ,
            ICompElement.prototype.destroyElements = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1)
                    this.elements[t] && this.elements[t].destroy()
            }
            ,
            ICompElement.prototype.destroy = function() {
                this.destroyElements(),
                this.destroyBaseElement()
            }
            ,
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement),
            IImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData);
                this.innerElem = createNS("image"),
                this.innerElem.setAttribute("width", this.assetData.w + "px"),
                this.innerElem.setAttribute("height", this.assetData.h + "px"),
                this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio),
                this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
                this.layerElement.appendChild(this.innerElem)
            }
            ,
            IImageElement.prototype.sourceRectAtTime = function() {
                return this.sourceRect
            }
            ,
            extendPrototype([IImageElement], ISolidElement),
            ISolidElement.prototype.createContent = function() {
                var t = createNS("rect");
                t.setAttribute("width", this.data.sw),
                t.setAttribute("height", this.data.sh),
                t.setAttribute("fill", this.data.sc),
                this.layerElement.appendChild(t)
            }
            ,
            extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement),
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextElement),
            SVGTextElement.prototype.createContent = function() {
                this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
            }
            ,
            SVGTextElement.prototype.buildTextContents = function(t) {
                var e = 0
                  , i = t.length
                  , s = []
                  , r = "";
                while (e < i)
                    t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (s.push(r),
                    r = "") : r += t[e],
                    e += 1;
                return s.push(r),
                s
            }
            ,
            SVGTextElement.prototype.buildNewText = function() {
                var t, e, i = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(i ? i.l.length : 0),
                i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
                i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)),
                this.layerElement.setAttribute("stroke-width", i.sw)),
                this.layerElement.setAttribute("font-size", i.finalSize);
                var s = this.globalData.fontManager.getFontByName(i.f);
                if (s.fClass)
                    this.layerElement.setAttribute("class", s.fClass);
                else {
                    this.layerElement.setAttribute("font-family", s.fFamily);
                    var r = i.fWeight
                      , a = i.fStyle;
                    this.layerElement.setAttribute("font-style", a),
                    this.layerElement.setAttribute("font-weight", r)
                }
                this.layerElement.setAttribute("aria-label", i.t);
                var n, o = i.l || [], h = !!this.globalData.fontManager.chars;
                e = o.length;
                var l, p = this.mHelper, c = "", m = this.data.singleShape, f = 0, u = 0, d = !0, g = i.tr / 1e3 * i.finalSize;
                if (!m || h || i.sz) {
                    var y, v, b = this.textSpans.length;
                    for (t = 0; t < e; t += 1)
                        h && m && 0 !== t || (n = b > t ? this.textSpans[t] : createNS(h ? "path" : "text"),
                        b <= t && (n.setAttribute("stroke-linecap", "butt"),
                        n.setAttribute("stroke-linejoin", "round"),
                        n.setAttribute("stroke-miterlimit", "4"),
                        this.textSpans[t] = n,
                        this.layerElement.appendChild(n)),
                        n.style.display = "inherit"),
                        p.reset(),
                        p.scale(i.finalSize / 100, i.finalSize / 100),
                        m && (o[t].n && (f = -g,
                        u += i.yOffset,
                        u += d ? 1 : 0,
                        d = !1),
                        this.applyTextPropertiesToMatrix(i, p, o[t].line, f, u),
                        f += o[t].l || 0,
                        f += g),
                        h ? (v = this.globalData.fontManager.getCharData(i.finalText[t], s.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily),
                        y = v && v.data || {},
                        l = y.shapes ? y.shapes[0].it : [],
                        m ? c += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (m && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"),
                        n.textContent = o[t].val,
                        n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                    m && n && n.setAttribute("d", c)
                } else {
                    var x = this.textContainer
                      , E = "start";
                    switch (i.j) {
                    case 1:
                        E = "end";
                        break;
                    case 2:
                        E = "middle";
                        break
                    }
                    x.setAttribute("text-anchor", E),
                    x.setAttribute("letter-spacing", g);
                    var w = this.buildTextContents(i.finalText);
                    for (e = w.length,
                    u = i.ps ? i.ps[1] + i.ascent : 0,
                    t = 0; t < e; t += 1)
                        n = this.textSpans[t] || createNS("tspan"),
                        n.textContent = w[t],
                        n.setAttribute("x", 0),
                        n.setAttribute("y", u),
                        n.style.display = "inherit",
                        x.appendChild(n),
                        this.textSpans[t] = n,
                        u += i.finalLineHeight;
                    this.layerElement.appendChild(x)
                }
                while (t < this.textSpans.length)
                    this.textSpans[t].style.display = "none",
                    t += 1;
                this._sizeChanged = !0
            }
            ,
            SVGTextElement.prototype.sourceRectAtTime = function(t) {
                if (this.prepareFrame(this.comp.renderedFrame - this.data.st),
                this.renderInnerContent(),
                this._sizeChanged) {
                    this._sizeChanged = !1;
                    var e = this.layerElement.getBBox();
                    this.bbox = {
                        top: e.y,
                        left: e.x,
                        width: e.width,
                        height: e.height
                    }
                }
                return this.bbox
            }
            ,
            SVGTextElement.prototype.renderInnerContent = function() {
                if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
                this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                    var t, e;
                    this._sizeChanged = !0;
                    var i, s, r = this.textAnimator.renderedLetters, a = this.textProperty.currentData.l;
                    for (e = a.length,
                    t = 0; t < e; t += 1)
                        a[t].n || (i = r[t],
                        s = this.textSpans[t],
                        i._mdf.m && s.setAttribute("transform", i.m),
                        i._mdf.o && s.setAttribute("opacity", i.o),
                        i._mdf.sw && s.setAttribute("stroke-width", i.sw),
                        i._mdf.sc && s.setAttribute("stroke", i.sc),
                        i._mdf.fc && s.setAttribute("fill", i.fc))
                }
            }
            ,
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement),
            SVGShapeElement.prototype.initSecondaryElement = function() {}
            ,
            SVGShapeElement.prototype.identityMatrix = new Matrix,
            SVGShapeElement.prototype.buildExpressionInterface = function() {}
            ,
            SVGShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
                this.filterUniqueShapes()
            }
            ,
            SVGShapeElement.prototype.filterUniqueShapes = function() {
                var t, e, i, s, r = this.shapes.length, a = this.stylesList.length, n = [], o = !1;
                for (i = 0; i < a; i += 1) {
                    for (s = this.stylesList[i],
                    o = !1,
                    n.length = 0,
                    t = 0; t < r; t += 1)
                        e = this.shapes[t],
                        -1 !== e.styles.indexOf(s) && (n.push(e),
                        o = e._isAnimated || o);
                    n.length > 1 && o && this.setShapesAsAnimated(n)
                }
            }
            ,
            SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1)
                    t[e].setAsAnimated()
            }
            ,
            SVGShapeElement.prototype.createStyleElement = function(t, e) {
                var i, s = new SVGStyleData(t,e), r = s.pElem;
                if ("st" === t.ty)
                    i = new SVGStrokeStyleData(this,t,s);
                else if ("fl" === t.ty)
                    i = new SVGFillStyleData(this,t,s);
                else if ("gf" === t.ty || "gs" === t.ty) {
                    var a = "gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
                    i = new a(this,t,s),
                    this.globalData.defs.appendChild(i.gf),
                    i.maskId && (this.globalData.defs.appendChild(i.ms),
                    this.globalData.defs.appendChild(i.of),
                    r.setAttribute("mask", "url(" + locationHref + "#" + i.maskId + ")"))
                }
                return "st" !== t.ty && "gs" !== t.ty || (r.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"),
                r.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"),
                r.setAttribute("fill-opacity", "0"),
                1 === t.lj && r.setAttribute("stroke-miterlimit", t.ml)),
                2 === t.r && r.setAttribute("fill-rule", "evenodd"),
                t.ln && r.setAttribute("id", t.ln),
                t.cl && r.setAttribute("class", t.cl),
                t.bm && (r.style["mix-blend-mode"] = getBlendMode(t.bm)),
                this.stylesList.push(s),
                this.addToAnimatedContents(t, i),
                i
            }
            ,
            SVGShapeElement.prototype.createGroupElement = function(t) {
                var e = new ShapeGroupData;
                return t.ln && e.gr.setAttribute("id", t.ln),
                t.cl && e.gr.setAttribute("class", t.cl),
                t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
                e
            }
            ,
            SVGShapeElement.prototype.createTransformElement = function(t, e) {
                var i = TransformPropertyFactory.getTransformProperty(this, t, this)
                  , s = new SVGTransformData(i,i.o,e);
                return this.addToAnimatedContents(t, s),
                s
            }
            ,
            SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
                var s = 4;
                "rc" === t.ty ? s = 5 : "el" === t.ty ? s = 6 : "sr" === t.ty && (s = 7);
                var r = ShapePropertyFactory.getShapeProp(this, t, s, this)
                  , a = new SVGShapeData(e,i,r);
                return this.shapes.push(a),
                this.addShapeToModifiers(a),
                this.addToAnimatedContents(t, a),
                a
            }
            ,
            SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                var i = 0
                  , s = this.animatedContents.length;
                while (i < s) {
                    if (this.animatedContents[i].element === e)
                        return;
                    i += 1
                }
                this.animatedContents.push({
                    fn: SVGElementsRenderer.createRenderFunction(t),
                    element: e,
                    data: t
                })
            }
            ,
            SVGShapeElement.prototype.setElementStyles = function(t) {
                var e, i = t.styles, s = this.stylesList.length;
                for (e = 0; e < s; e += 1)
                    this.stylesList[e].closed || i.push(this.stylesList[e])
            }
            ,
            SVGShapeElement.prototype.reloadShapes = function() {
                this._isFirstFrame = !0;
                var t, e = this.itemsData.length;
                for (t = 0; t < e; t += 1)
                    this.prevViewData[t] = this.itemsData[t];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
                this.filterUniqueShapes(),
                e = this.dynamicProperties.length,
                t = 0; t < e; t += 1)
                    this.dynamicProperties[t].getValue();
                this.renderModifiers()
            }
            ,
            SVGShapeElement.prototype.searchShapes = function(t, e, i, s, r, a, n) {
                var o, h, l, p, c, m, f = [].concat(a), u = t.length - 1, d = [], g = [];
                for (o = u; o >= 0; o -= 1) {
                    if (m = this.searchProcessedElement(t[o]),
                    m ? e[o] = i[m - 1] : t[o]._render = n,
                    "fl" == t[o].ty || "st" == t[o].ty || "gf" == t[o].ty || "gs" == t[o].ty)
                        m ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], r),
                        t[o]._render && s.appendChild(e[o].style.pElem),
                        d.push(e[o].style);
                    else if ("gr" == t[o].ty) {
                        if (m)
                            for (l = e[o].it.length,
                            h = 0; h < l; h += 1)
                                e[o].prevViewData[h] = e[o].it[h];
                        else
                            e[o] = this.createGroupElement(t[o]);
                        this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, r + 1, f, n),
                        t[o]._render && s.appendChild(e[o].gr)
                    } else
                        "tr" == t[o].ty ? (m || (e[o] = this.createTransformElement(t[o], s)),
                        p = e[o].transform,
                        f.push(p)) : "sh" == t[o].ty || "rc" == t[o].ty || "el" == t[o].ty || "sr" == t[o].ty ? (m || (e[o] = this.createShapeElement(t[o], f, r)),
                        this.setElementStyles(e[o])) : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty ? (m ? (c = e[o],
                        c.closed = !1) : (c = ShapeModifiers.getModifier(t[o].ty),
                        c.init(this, t[o]),
                        e[o] = c,
                        this.shapeModifiers.push(c)),
                        g.push(c)) : "rp" == t[o].ty && (m ? (c = e[o],
                        c.closed = !0) : (c = ShapeModifiers.getModifier(t[o].ty),
                        e[o] = c,
                        c.init(this, t, o, e),
                        this.shapeModifiers.push(c),
                        n = !1),
                        g.push(c));
                    this.addProcessedElement(t[o], o + 1)
                }
                for (u = d.length,
                o = 0; o < u; o += 1)
                    d[o].closed = !0;
                for (u = g.length,
                o = 0; o < u; o += 1)
                    g[o].closed = !0
            }
            ,
            SVGShapeElement.prototype.renderInnerContent = function() {
                this.renderModifiers();
                var t, e = this.stylesList.length;
                for (t = 0; t < e; t += 1)
                    this.stylesList[t].reset();
                for (this.renderShape(),
                t = 0; t < e; t += 1)
                    (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d),
                    this.stylesList[t].d = "M0 0" + this.stylesList[t].d),
                    this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
            }
            ,
            SVGShapeElement.prototype.renderShape = function() {
                var t, e, i = this.animatedContents.length;
                for (t = 0; t < i; t += 1)
                    e = this.animatedContents[t],
                    (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
            }
            ,
            SVGShapeElement.prototype.destroy = function() {
                this.destroyBaseElement(),
                this.shapesData = null,
                this.itemsData = null
            }
            ,
            SVGTintFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v
                      , i = this.filterManager.effectElements[1].p.v
                      , s = this.filterManager.effectElements[2].p.v / 100;
                    this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + s + " 0")
                }
            }
            ,
            SVGFillFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[2].p.v
                      , i = this.filterManager.effectElements[6].p.v;
                    this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
                }
            }
            ,
            SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = .3
                      , i = this.filterManager.effectElements[0].p.v * e
                      , s = this.filterManager.effectElements[1].p.v
                      , r = 3 == s ? 0 : i
                      , a = 2 == s ? 0 : i;
                    this.feGaussianBlur.setAttribute("stdDeviation", r + " " + a);
                    var n = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                    this.feGaussianBlur.setAttribute("edgeMode", n)
                }
            }
            ,
            SVGStrokeEffect.prototype.initialize = function() {
                var t, e, i, s, r = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                for (1 === this.filterManager.effectElements[1].p.v ? (s = this.elem.maskManager.masksProperties.length,
                i = 0) : (i = this.filterManager.effectElements[0].p.v - 1,
                s = i + 1),
                e = createNS("g"),
                e.setAttribute("fill", "none"),
                e.setAttribute("stroke-linecap", "round"),
                e.setAttribute("stroke-dashoffset", 1),
                i; i < s; i += 1)
                    t = createNS("path"),
                    e.appendChild(t),
                    this.paths.push({
                        p: t,
                        m: i
                    });
                if (3 === this.filterManager.effectElements[10].p.v) {
                    var a = createNS("mask")
                      , n = createElementID();
                    a.setAttribute("id", n),
                    a.setAttribute("mask-type", "alpha"),
                    a.appendChild(e),
                    this.elem.globalData.defs.appendChild(a);
                    var o = createNS("g");
                    o.setAttribute("mask", "url(" + locationHref + "#" + n + ")");
                    while (r[0])
                        o.appendChild(r[0]);
                    this.elem.layerElement.appendChild(o),
                    this.masker = a,
                    e.setAttribute("stroke", "#fff")
                } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                    if (2 === this.filterManager.effectElements[10].p.v) {
                        r = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                        while (r.length)
                            this.elem.layerElement.removeChild(r[0])
                    }
                    this.elem.layerElement.appendChild(e),
                    this.elem.layerElement.removeAttribute("mask"),
                    e.setAttribute("stroke", "#fff")
                }
                this.initialized = !0,
                this.pathMasker = e
            }
            ,
            SVGStrokeEffect.prototype.renderFrame = function(t) {
                this.initialized || this.initialize();
                var e, i, s, r = this.paths.length;
                for (e = 0; e < r; e += 1)
                    if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m],
                    s = this.paths[e].p,
                    (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath),
                    t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                        var a;
                        if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                            var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100
                              , o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100
                              , h = s.getTotalLength();
                            a = "0 0 0 " + h * n + " ";
                            var l, p = h * (o - n), c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100, m = Math.floor(p / c);
                            for (l = 0; l < m; l += 1)
                                a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
                            a += "0 " + 10 * h + " 0 0"
                        } else
                            a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
                        s.setAttribute("stroke-dasharray", a)
                    }
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v),
                (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v),
                (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                    var f = this.filterManager.effectElements[3].p.v;
                    this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * f[0]) + "," + bm_floor(255 * f[1]) + "," + bm_floor(255 * f[2]) + ")")
                }
            }
            ,
            SVGTritoneFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v
                      , i = this.filterManager.effectElements[1].p.v
                      , s = this.filterManager.effectElements[2].p.v
                      , r = s[0] + " " + i[0] + " " + e[0]
                      , a = s[1] + " " + i[1] + " " + e[1]
                      , n = s[2] + " " + i[2] + " " + e[2];
                    this.feFuncR.setAttribute("tableValues", r),
                    this.feFuncG.setAttribute("tableValues", a),
                    this.feFuncB.setAttribute("tableValues", n)
                }
            }
            ,
            SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                var i = createNS(t);
                return i.setAttribute("type", "table"),
                e.appendChild(i),
                i
            }
            ,
            SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, s, r) {
                var a, n, o = 0, h = 256, l = Math.min(t, e), p = Math.max(t, e), c = Array.call(null, {
                    length: h
                }), m = 0, f = r - s, u = e - t;
                while (o <= 256)
                    a = o / 256,
                    n = a <= l ? u < 0 ? r : s : a >= p ? u < 0 ? s : r : s + f * Math.pow((a - t) / u, 1 / i),
                    c[m++] = n,
                    o += 256 / (h - 1);
                return c.join(" ")
            }
            ,
            SVGProLevelsFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e, i = this.filterManager.effectElements;
                    this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v),
                    this.feFuncRComposed.setAttribute("tableValues", e),
                    this.feFuncGComposed.setAttribute("tableValues", e),
                    this.feFuncBComposed.setAttribute("tableValues", e)),
                    this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v),
                    this.feFuncR.setAttribute("tableValues", e)),
                    this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v),
                    this.feFuncG.setAttribute("tableValues", e)),
                    this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v),
                    this.feFuncB.setAttribute("tableValues", e)),
                    this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v),
                    this.feFuncA.setAttribute("tableValues", e))
                }
            }
            ,
            SVGDropShadowEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4),
                    t || this.filterManager.effectElements[0].p._mdf) {
                        var e = this.filterManager.effectElements[0].p.v;
                        this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                    }
                    if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255),
                    t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                        var i = this.filterManager.effectElements[3].p.v
                          , s = (this.filterManager.effectElements[2].p.v - 90) * degToRads
                          , r = i * Math.cos(s)
                          , a = i * Math.sin(s);
                        this.feOffset.setAttribute("dx", r),
                        this.feOffset.setAttribute("dy", a)
                    }
                }
            }
            ;
            var _svgMatteSymbols = [];
            function SVGMatte3Effect(t, e, i) {
                this.initialized = !1,
                this.filterManager = e,
                this.filterElem = t,
                this.elem = i,
                i.matteElement = createNS("g"),
                i.matteElement.appendChild(i.layerElement),
                i.matteElement.appendChild(i.transformedElement),
                i.baseElement = i.matteElement
            }
            function SVGEffects(t) {
                var e, i, s = t.data.ef ? t.data.ef.length : 0, r = createElementID(), a = filtersFactory.createFilter(r), n = 0;
                for (this.filters = [],
                e = 0; e < s; e += 1)
                    i = null,
                    20 === t.data.ef[e].ty ? (n += 1,
                    i = new SVGTintFilter(a,t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1,
                    i = new SVGFillFilter(a,t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? i = new SVGStrokeEffect(t,t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1,
                    i = new SVGTritoneFilter(a,t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1,
                    i = new SVGProLevelsFilter(a,t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1,
                    i = new SVGDropShadowEffect(a,t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? i = new SVGMatte3Effect(a,t.effectsManager.effectElements[e],t) : 29 === t.data.ef[e].ty && (n += 1,
                    i = new SVGGaussianBlurEffect(a,t.effectsManager.effectElements[e])),
                    i && this.filters.push(i);
                n && (t.globalData.defs.appendChild(a),
                t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + r + ")")),
                this.filters.length && t.addRenderableComponent(this)
            }
            function CVContextData() {
                this.saved = [],
                this.cArrPos = 0,
                this.cTr = new Matrix,
                this.cO = 1;
                var t, e = 15;
                for (this.savedOp = createTypedArray("float32", e),
                t = 0; t < e; t += 1)
                    this.saved[t] = createTypedArray("float32", 16);
                this._length = e
            }
            function CVBaseElement() {}
            function CVImageElement(t, e, i) {
                this.assetData = e.getAssetData(t.refId),
                this.img = e.imageLoader.getImage(this.assetData),
                this.initElement(t, e, i)
            }
            function CVCompElement(t, e, i) {
                this.completeLayers = !1,
                this.layers = t.layers,
                this.pendingElements = [],
                this.elements = createSizedArray(this.layers.length),
                this.initElement(t, e, i),
                this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }
            function CVMaskElement(t, e) {
                this.data = t,
                this.element = e,
                this.masksProperties = this.data.masksProperties || [],
                this.viewData = createSizedArray(this.masksProperties.length);
                var i, s = this.masksProperties.length, r = !1;
                for (i = 0; i < s; i++)
                    "n" !== this.masksProperties[i].mode && (r = !0),
                    this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
                this.hasMasks = r,
                r && this.element.addRenderableComponent(this)
            }
            function CVShapeElement(t, e, i) {
                this.shapes = [],
                this.shapesData = t.shapes,
                this.stylesList = [],
                this.itemsData = [],
                this.prevViewData = [],
                this.shapeModifiers = [],
                this.processedElements = [],
                this.transformsManager = new ShapeTransformManager,
                this.initElement(t, e, i)
            }
            function CVSolidElement(t, e, i) {
                this.initElement(t, e, i)
            }
            function CVTextElement(t, e, i) {
                this.textSpans = [],
                this.yOffset = 0,
                this.fillColorAnim = !1,
                this.strokeColorAnim = !1,
                this.strokeWidthAnim = !1,
                this.stroke = !1,
                this.fill = !1,
                this.justifyOffset = 0,
                this.currentRender = null,
                this.renderType = "canvas",
                this.values = {
                    fill: "rgba(0,0,0,0)",
                    stroke: "rgba(0,0,0,0)",
                    sWidth: 0,
                    fValue: ""
                },
                this.initElement(t, e, i)
            }
            function CVEffects() {}
            function HBaseElement(t, e, i) {}
            function HSolidElement(t, e, i) {
                this.initElement(t, e, i)
            }
            function HCompElement(t, e, i) {
                this.layers = t.layers,
                this.supports3d = !t.hasMask,
                this.completeLayers = !1,
                this.pendingElements = [],
                this.elements = this.layers ? createSizedArray(this.layers.length) : [],
                this.initElement(t, e, i),
                this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }
            function HShapeElement(t, e, i) {
                this.shapes = [],
                this.shapesData = t.shapes,
                this.stylesList = [],
                this.shapeModifiers = [],
                this.itemsData = [],
                this.processedElements = [],
                this.animatedContents = [],
                this.shapesContainer = createNS("g"),
                this.initElement(t, e, i),
                this.prevViewData = [],
                this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                }
            }
            function HTextElement(t, e, i) {
                this.textSpans = [],
                this.textPaths = [],
                this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                },
                this.renderType = "svg",
                this.isMasked = !1,
                this.initElement(t, e, i)
            }
            function HImageElement(t, e, i) {
                this.assetData = e.getAssetData(t.refId),
                this.initElement(t, e, i)
            }
            function HCameraElement(t, e, i) {
                this.initFrame(),
                this.initBaseData(t, e, i),
                this.initHierarchy();
                var s = PropertyFactory.getProp;
                if (this.pe = s(this, t.pe, 0, 0, this),
                t.ks.p.s ? (this.px = s(this, t.ks.p.x, 1, 0, this),
                this.py = s(this, t.ks.p.y, 1, 0, this),
                this.pz = s(this, t.ks.p.z, 1, 0, this)) : this.p = s(this, t.ks.p, 1, 0, this),
                t.ks.a && (this.a = s(this, t.ks.a, 1, 0, this)),
                t.ks.or.k.length && t.ks.or.k[0].to) {
                    var r, a = t.ks.or.k.length;
                    for (r = 0; r < a; r += 1)
                        t.ks.or.k[r].to = null,
                        t.ks.or.k[r].ti = null
                }
                this.or = s(this, t.ks.or, 1, degToRads, this),
                this.or.sh = !0,
                this.rx = s(this, t.ks.rx, 0, degToRads, this),
                this.ry = s(this, t.ks.ry, 0, degToRads, this),
                this.rz = s(this, t.ks.rz, 0, degToRads, this),
                this.mat = new Matrix,
                this._prevMat = new Matrix,
                this._isFirstFrame = !0,
                this.finalTransform = {
                    mProp: this
                }
            }
            function HEffects() {}
            SVGMatte3Effect.prototype.findSymbol = function(t) {
                var e = 0
                  , i = _svgMatteSymbols.length;
                while (e < i) {
                    if (_svgMatteSymbols[e] === t)
                        return _svgMatteSymbols[e];
                    e += 1
                }
                return null
            }
            ,
            SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                var i = t.layerElement.parentNode;
                if (i) {
                    var s, r = i.children, a = 0, n = r.length;
                    while (a < n) {
                        if (r[a] === t.layerElement)
                            break;
                        a += 1
                    }
                    a <= n - 2 && (s = r[a + 1]);
                    var o = createNS("use");
                    o.setAttribute("href", "#" + e),
                    s ? i.insertBefore(o, s) : i.appendChild(o)
                }
            }
            ,
            SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                if (!this.findSymbol(e)) {
                    var i = createElementID()
                      , s = createNS("mask");
                    s.setAttribute("id", e.layerId),
                    s.setAttribute("mask-type", "alpha"),
                    _svgMatteSymbols.push(e);
                    var r = t.globalData.defs;
                    r.appendChild(s);
                    var a = createNS("symbol");
                    a.setAttribute("id", i),
                    this.replaceInParent(e, i),
                    a.appendChild(e.layerElement),
                    r.appendChild(a);
                    var n = createNS("use");
                    n.setAttribute("href", "#" + i),
                    s.appendChild(n),
                    e.data.hd = !1,
                    e.show()
                }
                t.setMatte(e.layerId)
            }
            ,
            SVGMatte3Effect.prototype.initialize = function() {
                var t = this.filterManager.effectElements[0].p.v
                  , e = this.elem.comp.elements
                  , i = 0
                  , s = e.length;
                while (i < s)
                    e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]),
                    i += 1;
                this.initialized = !0
            }
            ,
            SVGMatte3Effect.prototype.renderFrame = function() {
                this.initialized || this.initialize()
            }
            ,
            SVGEffects.prototype.renderFrame = function(t) {
                var e, i = this.filters.length;
                for (e = 0; e < i; e += 1)
                    this.filters[e].renderFrame(t)
            }
            ,
            CVContextData.prototype.duplicate = function() {
                var t = 2 * this._length
                  , e = this.savedOp;
                this.savedOp = createTypedArray("float32", t),
                this.savedOp.set(e);
                var i = 0;
                for (i = this._length; i < t; i += 1)
                    this.saved[i] = createTypedArray("float32", 16);
                this._length = t
            }
            ,
            CVContextData.prototype.reset = function() {
                this.cArrPos = 0,
                this.cTr.reset(),
                this.cO = 1
            }
            ,
            CVBaseElement.prototype = {
                createElements: function() {},
                initRendererElement: function() {},
                createContainerElements: function() {
                    this.canvasContext = this.globalData.canvasContext,
                    this.renderableEffectsManager = new CVEffects(this)
                },
                createContent: function() {},
                setBlendMode: function() {
                    var t = this.globalData;
                    if (t.blendMode !== this.data.bm) {
                        t.blendMode = this.data.bm;
                        var e = getBlendMode(this.data.bm);
                        t.canvasContext.globalCompositeOperation = e
                    }
                },
                createRenderableComponents: function() {
                    this.maskManager = new CVMaskElement(this.data,this)
                },
                hideElement: function() {
                    this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                },
                showElement: function() {
                    this.isInRange && !this.isTransparent && (this.hidden = !1,
                    this._isFirstFrame = !0,
                    this.maskManager._isFirstFrame = !0)
                },
                renderFrame: function() {
                    this.hidden || this.data.hd || (this.renderTransform(),
                    this.renderRenderable(),
                    this.setBlendMode(),
                    this.globalData.renderer.save(),
                    this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),
                    this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),
                    this.renderInnerContent(),
                    this.globalData.renderer.restore(),
                    this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
                    this._isFirstFrame && (this._isFirstFrame = !1))
                },
                destroy: function() {
                    this.canvasContext = null,
                    this.data = null,
                    this.globalData = null,
                    this.maskManager.destroy()
                },
                mHelper: new Matrix
            },
            CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement,
            CVBaseElement.prototype.show = CVBaseElement.prototype.showElement,
            extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement),
            CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement,
            CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
            CVImageElement.prototype.createContent = function() {
                if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                    var t = createTag("canvas");
                    t.width = this.assetData.w,
                    t.height = this.assetData.h;
                    var e, i, s = t.getContext("2d"), r = this.img.width, a = this.img.height, n = r / a, o = this.assetData.w / this.assetData.h, h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                    n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? (i = a,
                    e = i * o) : (e = r,
                    i = e / o),
                    s.drawImage(this.img, (r - e) / 2, (a - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h),
                    this.img = t
                }
            }
            ,
            CVImageElement.prototype.renderInnerContent = function(t) {
                this.canvasContext.drawImage(this.img, 0, 0)
            }
            ,
            CVImageElement.prototype.destroy = function() {
                this.img = null
            }
            ,
            extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement),
            CVCompElement.prototype.renderInnerContent = function() {
                var t, e = this.layers.length;
                for (t = e - 1; t >= 0; t -= 1)
                    (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
            }
            ,
            CVCompElement.prototype.destroy = function() {
                var t, e = this.layers.length;
                for (t = e - 1; t >= 0; t -= 1)
                    this.elements[t] && this.elements[t].destroy();
                this.layers = null,
                this.elements = null
            }
            ,
            CVMaskElement.prototype.renderFrame = function() {
                if (this.hasMasks) {
                    var t, e, i, s, r = this.element.finalTransform.mat, a = this.element.canvasContext, n = this.masksProperties.length;
                    for (a.beginPath(),
                    t = 0; t < n; t++)
                        if ("n" !== this.masksProperties[t].mode) {
                            this.masksProperties[t].inv && (a.moveTo(0, 0),
                            a.lineTo(this.element.globalData.compSize.w, 0),
                            a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h),
                            a.lineTo(0, this.element.globalData.compSize.h),
                            a.lineTo(0, 0)),
                            s = this.viewData[t].v,
                            e = r.applyToPointArray(s.v[0][0], s.v[0][1], 0),
                            a.moveTo(e[0], e[1]);
                            var o, h = s._length;
                            for (o = 1; o < h; o++)
                                i = r.applyToTriplePoints(s.o[o - 1], s.i[o], s.v[o]),
                                a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                            i = r.applyToTriplePoints(s.o[o - 1], s.i[0], s.v[0]),
                            a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
                        }
                    this.element.globalData.renderer.save(!0),
                    a.clip()
                }
            }
            ,
            CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty,
            CVMaskElement.prototype.destroy = function() {
                this.element = null
            }
            ,
            extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement),
            CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement,
            CVShapeElement.prototype.transformHelper = {
                opacity: 1,
                _opMdf: !1
            },
            CVShapeElement.prototype.dashResetter = [],
            CVShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
            }
            ,
            CVShapeElement.prototype.createStyleElement = function(t, e) {
                var i = {
                    data: t,
                    type: t.ty,
                    preTransforms: this.transformsManager.addTransformSequence(e),
                    transforms: [],
                    elements: [],
                    closed: !0 === t.hd
                }
                  , s = {};
                if ("fl" == t.ty || "st" == t.ty ? (s.c = PropertyFactory.getProp(this, t.c, 1, 255, this),
                s.c.k || (i.co = "rgb(" + bm_floor(s.c.v[0]) + "," + bm_floor(s.c.v[1]) + "," + bm_floor(s.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (s.s = PropertyFactory.getProp(this, t.s, 1, null, this),
                s.e = PropertyFactory.getProp(this, t.e, 1, null, this),
                s.h = PropertyFactory.getProp(this, t.h || {
                    k: 0
                }, 0, .01, this),
                s.a = PropertyFactory.getProp(this, t.a || {
                    k: 0
                }, 0, degToRads, this),
                s.g = new GradientProperty(this,t.g,this)),
                s.o = PropertyFactory.getProp(this, t.o, 0, .01, this),
                "st" == t.ty || "gs" == t.ty) {
                    if (i.lc = this.lcEnum[t.lc] || "round",
                    i.lj = this.ljEnum[t.lj] || "round",
                    1 == t.lj && (i.ml = t.ml),
                    s.w = PropertyFactory.getProp(this, t.w, 0, null, this),
                    s.w.k || (i.wi = s.w.v),
                    t.d) {
                        var r = new DashProperty(this,t.d,"canvas",this);
                        s.d = r,
                        s.d.k || (i.da = s.d.dashArray,
                        i.do = s.d.dashoffset[0])
                    }
                } else
                    i.r = 2 === t.r ? "evenodd" : "nonzero";
                return this.stylesList.push(i),
                s.style = i,
                s
            }
            ,
            CVShapeElement.prototype.createGroupElement = function(t) {
                var e = {
                    it: [],
                    prevViewData: []
                };
                return e
            }
            ,
            CVShapeElement.prototype.createTransformElement = function(t) {
                var e = {
                    transform: {
                        opacity: 1,
                        _opMdf: !1,
                        key: this.transformsManager.getNewKey(),
                        op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                        mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                    }
                };
                return e
            }
            ,
            CVShapeElement.prototype.createShapeElement = function(t) {
                var e = new CVShapeData(this,t,this.stylesList,this.transformsManager);
                return this.shapes.push(e),
                this.addShapeToModifiers(e),
                e
            }
            ,
            CVShapeElement.prototype.reloadShapes = function() {
                this._isFirstFrame = !0;
                var t, e = this.itemsData.length;
                for (t = 0; t < e; t += 1)
                    this.prevViewData[t] = this.itemsData[t];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []),
                e = this.dynamicProperties.length,
                t = 0; t < e; t += 1)
                    this.dynamicProperties[t].getValue();
                this.renderModifiers(),
                this.transformsManager.processSequences(this._isFirstFrame)
            }
            ,
            CVShapeElement.prototype.addTransformToStyleList = function(t) {
                var e, i = this.stylesList.length;
                for (e = 0; e < i; e += 1)
                    this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
            }
            ,
            CVShapeElement.prototype.removeTransformFromStyleList = function() {
                var t, e = this.stylesList.length;
                for (t = 0; t < e; t += 1)
                    this.stylesList[t].closed || this.stylesList[t].transforms.pop()
            }
            ,
            CVShapeElement.prototype.closeStyles = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1)
                    t[e].closed = !0
            }
            ,
            CVShapeElement.prototype.searchShapes = function(t, e, i, s, r) {
                var a, n, o, h, l, p, c = t.length - 1, m = [], f = [], u = [].concat(r);
                for (a = c; a >= 0; a -= 1) {
                    if (h = this.searchProcessedElement(t[a]),
                    h ? e[a] = i[h - 1] : t[a]._shouldRender = s,
                    "fl" == t[a].ty || "st" == t[a].ty || "gf" == t[a].ty || "gs" == t[a].ty)
                        h ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], u),
                        m.push(e[a].style);
                    else if ("gr" == t[a].ty) {
                        if (h)
                            for (o = e[a].it.length,
                            n = 0; n < o; n += 1)
                                e[a].prevViewData[n] = e[a].it[n];
                        else
                            e[a] = this.createGroupElement(t[a]);
                        this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, s, u)
                    } else
                        "tr" == t[a].ty ? (h || (p = this.createTransformElement(t[a]),
                        e[a] = p),
                        u.push(e[a]),
                        this.addTransformToStyleList(e[a])) : "sh" == t[a].ty || "rc" == t[a].ty || "el" == t[a].ty || "sr" == t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" == t[a].ty || "rd" == t[a].ty ? (h ? (l = e[a],
                        l.closed = !1) : (l = ShapeModifiers.getModifier(t[a].ty),
                        l.init(this, t[a]),
                        e[a] = l,
                        this.shapeModifiers.push(l)),
                        f.push(l)) : "rp" == t[a].ty && (h ? (l = e[a],
                        l.closed = !0) : (l = ShapeModifiers.getModifier(t[a].ty),
                        e[a] = l,
                        l.init(this, t, a, e),
                        this.shapeModifiers.push(l),
                        s = !1),
                        f.push(l));
                    this.addProcessedElement(t[a], a + 1)
                }
                for (this.removeTransformFromStyleList(),
                this.closeStyles(m),
                c = f.length,
                a = 0; a < c; a += 1)
                    f[a].closed = !0
            }
            ,
            CVShapeElement.prototype.renderInnerContent = function() {
                this.transformHelper.opacity = 1,
                this.transformHelper._opMdf = !1,
                this.renderModifiers(),
                this.transformsManager.processSequences(this._isFirstFrame),
                this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
            }
            ,
            CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity,
                e.opacity *= e.op.v,
                e._opMdf = !0)
            }
            ,
            CVShapeElement.prototype.drawLayer = function() {
                var t, e, i, s, r, a, n, o, h, l = this.stylesList.length, p = this.globalData.renderer, c = this.globalData.canvasContext;
                for (t = 0; t < l; t += 1)
                    if (h = this.stylesList[t],
                    o = h.type,
                    ("st" !== o && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                        for (p.save(),
                        a = h.elements,
                        "st" === o || "gs" === o ? (c.strokeStyle = "st" === o ? h.co : h.grd,
                        c.lineWidth = h.wi,
                        c.lineCap = h.lc,
                        c.lineJoin = h.lj,
                        c.miterLimit = h.ml || 0) : c.fillStyle = "fl" === o ? h.co : h.grd,
                        p.ctxOpacity(h.coOp),
                        "st" !== o && "gs" !== o && c.beginPath(),
                        p.ctxTransform(h.preTransforms.finalTransform.props),
                        i = a.length,
                        e = 0; e < i; e += 1) {
                            for ("st" !== o && "gs" !== o || (c.beginPath(),
                            h.da && (c.setLineDash(h.da),
                            c.lineDashOffset = h.do)),
                            n = a[e].trNodes,
                            r = n.length,
                            s = 0; s < r; s += 1)
                                "m" == n[s].t ? c.moveTo(n[s].p[0], n[s].p[1]) : "c" == n[s].t ? c.bezierCurveTo(n[s].pts[0], n[s].pts[1], n[s].pts[2], n[s].pts[3], n[s].pts[4], n[s].pts[5]) : c.closePath();
                            "st" !== o && "gs" !== o || (c.stroke(),
                            h.da && c.setLineDash(this.dashResetter))
                        }
                        "st" !== o && "gs" !== o && c.fill(h.r),
                        p.restore()
                    }
            }
            ,
            CVShapeElement.prototype.renderShape = function(t, e, i, s) {
                var r, a, n = e.length - 1;
                for (a = t,
                r = n; r >= 0; r -= 1)
                    "tr" == e[r].ty ? (a = i[r].transform,
                    this.renderShapeTransform(t, a)) : "sh" == e[r].ty || "el" == e[r].ty || "rc" == e[r].ty || "sr" == e[r].ty ? this.renderPath(e[r], i[r]) : "fl" == e[r].ty ? this.renderFill(e[r], i[r], a) : "st" == e[r].ty ? this.renderStroke(e[r], i[r], a) : "gf" == e[r].ty || "gs" == e[r].ty ? this.renderGradientFill(e[r], i[r], a) : "gr" == e[r].ty ? this.renderShape(a, e[r].it, i[r].it) : e[r].ty;
                s && this.drawLayer()
            }
            ,
            CVShapeElement.prototype.renderStyledShape = function(t, e) {
                if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                    var i, s, r, a = t.trNodes, n = e.paths, o = n._length;
                    a.length = 0;
                    var h = t.transforms.finalTransform;
                    for (r = 0; r < o; r += 1) {
                        var l = n.shapes[r];
                        if (l && l.v) {
                            for (s = l._length,
                            i = 1; i < s; i += 1)
                                1 === i && a.push({
                                    t: "m",
                                    p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                                }),
                                a.push({
                                    t: "c",
                                    pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i])
                                });
                            1 === s && a.push({
                                t: "m",
                                p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                            }),
                            l.c && s && (a.push({
                                t: "c",
                                pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0])
                            }),
                            a.push({
                                t: "z"
                            }))
                        }
                    }
                    t.trNodes = a
                }
            }
            ,
            CVShapeElement.prototype.renderPath = function(t, e) {
                if (!0 !== t.hd && t._shouldRender) {
                    var i, s = e.styledShapes.length;
                    for (i = 0; i < s; i += 1)
                        this.renderStyledShape(e.styledShapes[i], e.sh)
                }
            }
            ,
            CVShapeElement.prototype.renderFill = function(t, e, i) {
                var s = e.style;
                (e.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"),
                (e.o._mdf || i._opMdf || this._isFirstFrame) && (s.coOp = e.o.v * i.opacity)
            }
            ,
            CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
                var s = e.style;
                if (!s.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                    var r = this.globalData.canvasContext
                      , a = e.s.v
                      , n = e.e.v;
                    if (1 === t.t)
                        f = r.createLinearGradient(a[0], a[1], n[0], n[1]);
                    else
                        var o = Math.sqrt(Math.pow(a[0] - n[0], 2) + Math.pow(a[1] - n[1], 2))
                          , h = Math.atan2(n[1] - a[1], n[0] - a[0])
                          , l = e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v
                          , p = o * l
                          , c = Math.cos(h + e.a.v) * p + a[0]
                          , m = Math.sin(h + e.a.v) * p + a[1]
                          , f = r.createRadialGradient(c, m, 0, a[0], a[1], o);
                    var u, d = t.g.p, g = e.g.c, y = 1;
                    for (u = 0; u < d; u += 1)
                        e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * u + 1]),
                        f.addColorStop(g[4 * u] / 100, "rgba(" + g[4 * u + 1] + "," + g[4 * u + 2] + "," + g[4 * u + 3] + "," + y + ")");
                    s.grd = f
                }
                s.coOp = e.o.v * i.opacity
            }
            ,
            CVShapeElement.prototype.renderStroke = function(t, e, i) {
                var s = e.style
                  , r = e.d;
                r && (r._mdf || this._isFirstFrame) && (s.da = r.dashArray,
                s.do = r.dashoffset[0]),
                (e.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"),
                (e.o._mdf || i._opMdf || this._isFirstFrame) && (s.coOp = e.o.v * i.opacity),
                (e.w._mdf || this._isFirstFrame) && (s.wi = e.w.v)
            }
            ,
            CVShapeElement.prototype.destroy = function() {
                this.shapesData = null,
                this.globalData = null,
                this.canvasContext = null,
                this.stylesList.length = 0,
                this.itemsData.length = 0
            }
            ,
            extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement),
            CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement,
            CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
            CVSolidElement.prototype.renderInnerContent = function() {
                var t = this.canvasContext;
                t.fillStyle = this.data.sc,
                t.fillRect(0, 0, this.data.sw, this.data.sh)
            }
            ,
            extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement),
            CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"),
            CVTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = !1;
                t.fc ? (e = !0,
                this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)",
                this.fill = e;
                var i = !1;
                t.sc && (i = !0,
                this.values.stroke = this.buildColor(t.sc),
                this.values.sWidth = t.sw);
                var s, r, a = this.globalData.fontManager.getFontByName(t.f), n = t.l, o = this.mHelper;
                this.stroke = i,
                this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily,
                r = t.finalText.length;
                var h, l, p, c, m, f, u, d, g, y, v = this.data.singleShape, b = t.tr / 1e3 * t.finalSize, x = 0, E = 0, w = !0, C = 0;
                for (s = 0; s < r; s += 1) {
                    for (h = this.globalData.fontManager.getCharData(t.finalText[s], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily),
                    l = h && h.data || {},
                    o.reset(),
                    v && n[s].n && (x = -b,
                    E += t.yOffset,
                    E += w ? 1 : 0,
                    w = !1),
                    m = l.shapes ? l.shapes[0].it : [],
                    u = m.length,
                    o.scale(t.finalSize / 100, t.finalSize / 100),
                    v && this.applyTextPropertiesToMatrix(t, o, n[s].line, x, E),
                    g = createSizedArray(u),
                    f = 0; f < u; f += 1) {
                        for (c = m[f].ks.k.i.length,
                        d = m[f].ks.k,
                        y = [],
                        p = 1; p < c; p += 1)
                            1 == p && y.push(o.applyToX(d.v[0][0], d.v[0][1], 0), o.applyToY(d.v[0][0], d.v[0][1], 0)),
                            y.push(o.applyToX(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToY(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToX(d.i[p][0], d.i[p][1], 0), o.applyToY(d.i[p][0], d.i[p][1], 0), o.applyToX(d.v[p][0], d.v[p][1], 0), o.applyToY(d.v[p][0], d.v[p][1], 0));
                        y.push(o.applyToX(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToY(d.o[p - 1][0], d.o[p - 1][1], 0), o.applyToX(d.i[0][0], d.i[0][1], 0), o.applyToY(d.i[0][0], d.i[0][1], 0), o.applyToX(d.v[0][0], d.v[0][1], 0), o.applyToY(d.v[0][0], d.v[0][1], 0)),
                        g[f] = y
                    }
                    v && (x += n[s].l,
                    x += b),
                    this.textSpans[C] ? this.textSpans[C].elem = g : this.textSpans[C] = {
                        elem: g
                    },
                    C += 1
                }
            }
            ,
            CVTextElement.prototype.renderInnerContent = function() {
                var t, e, i, s, r, a, n = this.canvasContext;
                this.finalTransform.mat.props;
                n.font = this.values.fValue,
                n.lineCap = "butt",
                n.lineJoin = "miter",
                n.miterLimit = 4,
                this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                var o, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
                e = l.length;
                var p, c, m = null, f = null, u = null;
                for (t = 0; t < e; t += 1)
                    if (!l[t].n) {
                        if (o = h[t],
                        o && (this.globalData.renderer.save(),
                        this.globalData.renderer.ctxTransform(o.p),
                        this.globalData.renderer.ctxOpacity(o.o)),
                        this.fill) {
                            for (o && o.fc ? m !== o.fc && (m = o.fc,
                            n.fillStyle = o.fc) : m !== this.values.fill && (m = this.values.fill,
                            n.fillStyle = this.values.fill),
                            p = this.textSpans[t].elem,
                            s = p.length,
                            this.globalData.canvasContext.beginPath(),
                            i = 0; i < s; i += 1)
                                for (c = p[i],
                                a = c.length,
                                this.globalData.canvasContext.moveTo(c[0], c[1]),
                                r = 2; r < a; r += 6)
                                    this.globalData.canvasContext.bezierCurveTo(c[r], c[r + 1], c[r + 2], c[r + 3], c[r + 4], c[r + 5]);
                            this.globalData.canvasContext.closePath(),
                            this.globalData.canvasContext.fill()
                        }
                        if (this.stroke) {
                            for (o && o.sw ? u !== o.sw && (u = o.sw,
                            n.lineWidth = o.sw) : u !== this.values.sWidth && (u = this.values.sWidth,
                            n.lineWidth = this.values.sWidth),
                            o && o.sc ? f !== o.sc && (f = o.sc,
                            n.strokeStyle = o.sc) : f !== this.values.stroke && (f = this.values.stroke,
                            n.strokeStyle = this.values.stroke),
                            p = this.textSpans[t].elem,
                            s = p.length,
                            this.globalData.canvasContext.beginPath(),
                            i = 0; i < s; i += 1)
                                for (c = p[i],
                                a = c.length,
                                this.globalData.canvasContext.moveTo(c[0], c[1]),
                                r = 2; r < a; r += 6)
                                    this.globalData.canvasContext.bezierCurveTo(c[r], c[r + 1], c[r + 2], c[r + 3], c[r + 4], c[r + 5]);
                            this.globalData.canvasContext.closePath(),
                            this.globalData.canvasContext.stroke()
                        }
                        o && this.globalData.renderer.restore()
                    }
            }
            ,
            CVEffects.prototype.renderFrame = function() {}
            ,
            HBaseElement.prototype = {
                checkBlendMode: function() {},
                initRendererElement: function() {
                    this.baseElement = createTag(this.data.tg || "div"),
                    this.data.hasMask ? (this.svgElement = createNS("svg"),
                    this.layerElement = createNS("g"),
                    this.maskedElement = this.layerElement,
                    this.svgElement.appendChild(this.layerElement),
                    this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement,
                    styleDiv(this.baseElement)
                },
                createContainerElements: function() {
                    this.renderableEffectsManager = new CVEffects(this),
                    this.transformedElement = this.baseElement,
                    this.maskedElement = this.layerElement,
                    this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                    this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                    0 !== this.data.bm && this.setBlendMode()
                },
                renderElement: function() {
                    this.finalTransform._matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()),
                    this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(),
                    this.renderRenderable(),
                    this.renderElement(),
                    this.renderInnerContent(),
                    this._isFirstFrame && (this._isFirstFrame = !1))
                },
                destroy: function() {
                    this.layerElement = null,
                    this.transformedElement = null,
                    this.matteElement && (this.matteElement = null),
                    this.maskManager && (this.maskManager.destroy(),
                    this.maskManager = null)
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data,this,this.globalData)
                },
                addEffects: function() {},
                setMatte: function() {}
            },
            HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement,
            HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy,
            HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting,
            extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement),
            HSolidElement.prototype.createContent = function() {
                var t;
                this.data.hasMask ? (t = createNS("rect"),
                t.setAttribute("width", this.data.sw),
                t.setAttribute("height", this.data.sh),
                t.setAttribute("fill", this.data.sc),
                this.svgElement.setAttribute("width", this.data.sw),
                this.svgElement.setAttribute("height", this.data.sh)) : (t = createTag("div"),
                t.style.width = this.data.sw + "px",
                t.style.height = this.data.sh + "px",
                t.style.backgroundColor = this.data.sc),
                this.layerElement.appendChild(t)
            }
            ,
            extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement),
            HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements,
            HCompElement.prototype.createContainerElements = function() {
                this._createBaseContainerElements(),
                this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w),
                this.svgElement.setAttribute("height", this.data.h),
                this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
            }
            ,
            HCompElement.prototype.addTo3dContainer = function(t, e) {
                var i, s = 0;
                while (s < e)
                    this.elements[s] && this.elements[s].getBaseElement && (i = this.elements[s].getBaseElement()),
                    s += 1;
                i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
            }
            ,
            extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement),
            HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent,
            HShapeElement.prototype.createContent = function() {
                var t;
                if (this.baseElement.style.fontSize = 0,
                this.data.hasMask)
                    this.layerElement.appendChild(this.shapesContainer),
                    t = this.svgElement;
                else {
                    t = createNS("svg");
                    var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                    t.setAttribute("width", e.w),
                    t.setAttribute("height", e.h),
                    t.appendChild(this.shapesContainer),
                    this.layerElement.appendChild(t)
                }
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0),
                this.filterUniqueShapes(),
                this.shapeCont = t
            }
            ,
            HShapeElement.prototype.getTransformedPoint = function(t, e) {
                var i, s = t.length;
                for (i = 0; i < s; i += 1)
                    e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
                return e
            }
            ,
            HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                var i, s, r, a, n, o = t.sh.v, h = t.transformers, l = o._length;
                if (!(l <= 1)) {
                    for (i = 0; i < l - 1; i += 1)
                        s = this.getTransformedPoint(h, o.v[i]),
                        r = this.getTransformedPoint(h, o.o[i]),
                        a = this.getTransformedPoint(h, o.i[i + 1]),
                        n = this.getTransformedPoint(h, o.v[i + 1]),
                        this.checkBounds(s, r, a, n, e);
                    o.c && (s = this.getTransformedPoint(h, o.v[i]),
                    r = this.getTransformedPoint(h, o.o[i]),
                    a = this.getTransformedPoint(h, o.i[0]),
                    n = this.getTransformedPoint(h, o.v[0]),
                    this.checkBounds(s, r, a, n, e))
                }
            }
            ,
            HShapeElement.prototype.checkBounds = function(t, e, i, s, r) {
                this.getBoundsOfCurve(t, e, i, s);
                var a = this.shapeBoundingBox;
                r.x = bm_min(a.left, r.x),
                r.xMax = bm_max(a.right, r.xMax),
                r.y = bm_min(a.top, r.y),
                r.yMax = bm_max(a.bottom, r.yMax)
            }
            ,
            HShapeElement.prototype.shapeBoundingBox = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            HShapeElement.prototype.tempBoundingBox = {
                x: 0,
                xMax: 0,
                y: 0,
                yMax: 0,
                width: 0,
                height: 0
            },
            HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, s) {
                for (var r, a, n, o, h, l, p, c = [[t[0], s[0]], [t[1], s[1]]], m = 0; m < 2; ++m)
                    if (a = 6 * t[m] - 12 * e[m] + 6 * i[m],
                    r = -3 * t[m] + 9 * e[m] - 9 * i[m] + 3 * s[m],
                    n = 3 * e[m] - 3 * t[m],
                    a |= 0,
                    r |= 0,
                    n |= 0,
                    0 !== r)
                        h = a * a - 4 * n * r,
                        h < 0 || (l = (-a + bm_sqrt(h)) / (2 * r),
                        0 < l && l < 1 && c[m].push(this.calculateF(l, t, e, i, s, m)),
                        p = (-a - bm_sqrt(h)) / (2 * r),
                        0 < p && p < 1 && c[m].push(this.calculateF(p, t, e, i, s, m)));
                    else {
                        if (0 === a)
                            continue;
                        o = -n / a,
                        0 < o && o < 1 && c[m].push(this.calculateF(o, t, e, i, s, m))
                    }
                this.shapeBoundingBox.left = bm_min.apply(null, c[0]),
                this.shapeBoundingBox.top = bm_min.apply(null, c[1]),
                this.shapeBoundingBox.right = bm_max.apply(null, c[0]),
                this.shapeBoundingBox.bottom = bm_max.apply(null, c[1])
            }
            ,
            HShapeElement.prototype.calculateF = function(t, e, i, s, r, a) {
                return bm_pow(1 - t, 3) * e[a] + 3 * bm_pow(1 - t, 2) * t * i[a] + 3 * (1 - t) * bm_pow(t, 2) * s[a] + bm_pow(t, 3) * r[a]
            }
            ,
            HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                var i, s = t.length;
                for (i = 0; i < s; i += 1)
                    t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e)
            }
            ,
            HShapeElement.prototype.currentBoxContains = function(t) {
                return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
            }
            ,
            HShapeElement.prototype.renderInnerContent = function() {
                if (this._renderShapeFrame(),
                !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var t = this.tempBoundingBox
                      , e = 999999;
                    if (t.x = e,
                    t.xMax = -e,
                    t.y = e,
                    t.yMax = -e,
                    this.calculateBoundingBox(this.itemsData, t),
                    t.width = t.xMax < t.x ? 0 : t.xMax - t.x,
                    t.height = t.yMax < t.y ? 0 : t.yMax - t.y,
                    this.currentBoxContains(t))
                        return;
                    var i = !1;
                    this.currentBBox.w !== t.width && (this.currentBBox.w = t.width,
                    this.shapeCont.setAttribute("width", t.width),
                    i = !0),
                    this.currentBBox.h !== t.height && (this.currentBBox.h = t.height,
                    this.shapeCont.setAttribute("height", t.height),
                    i = !0),
                    (i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) && (this.currentBBox.w = t.width,
                    this.currentBBox.h = t.height,
                    this.currentBBox.x = t.x,
                    this.currentBBox.y = t.y,
                    this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h),
                    this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
                }
            }
            ,
            extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement),
            HTextElement.prototype.createContent = function() {
                if (this.isMasked = this.checkMasks(),
                this.isMasked) {
                    this.renderType = "svg",
                    this.compW = this.comp.data.w,
                    this.compH = this.comp.data.h,
                    this.svgElement.setAttribute("width", this.compW),
                    this.svgElement.setAttribute("height", this.compH);
                    var t = createNS("g");
                    this.maskedElement.appendChild(t),
                    this.innerElem = t
                } else
                    this.renderType = "html",
                    this.innerElem = this.layerElement;
                this.checkParenting()
            }
            ,
            HTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = this.innerElem.style;
                e.color = e.fill = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)",
                t.sc && (e.stroke = this.buildColor(t.sc),
                e.strokeWidth = t.sw + "px");
                var i, s, r = this.globalData.fontManager.getFontByName(t.f);
                if (!this.globalData.fontManager.chars)
                    if (e.fontSize = t.finalSize + "px",
                    e.lineHeight = t.finalSize + "px",
                    r.fClass)
                        this.innerElem.className = r.fClass;
                    else {
                        e.fontFamily = r.fFamily;
                        var a = t.fWeight
                          , n = t.fStyle;
                        e.fontStyle = n,
                        e.fontWeight = a
                    }
                var o, h, l, p = t.l;
                s = p.length;
                var c, m = this.mHelper, f = "", u = 0;
                for (i = 0; i < s; i += 1) {
                    if (this.globalData.fontManager.chars ? (this.textPaths[u] ? o = this.textPaths[u] : (o = createNS("path"),
                    o.setAttribute("stroke-linecap", "butt"),
                    o.setAttribute("stroke-linejoin", "round"),
                    o.setAttribute("stroke-miterlimit", "4")),
                    this.isMasked || (this.textSpans[u] ? (h = this.textSpans[u],
                    l = h.children[0]) : (h = createTag("div"),
                    h.style.lineHeight = 0,
                    l = createNS("svg"),
                    l.appendChild(o),
                    styleDiv(h)))) : this.isMasked ? o = this.textPaths[u] ? this.textPaths[u] : createNS("text") : this.textSpans[u] ? (h = this.textSpans[u],
                    o = this.textPaths[u]) : (h = createTag("span"),
                    styleDiv(h),
                    o = createTag("span"),
                    styleDiv(o),
                    h.appendChild(o)),
                    this.globalData.fontManager.chars) {
                        var d, g = this.globalData.fontManager.getCharData(t.finalText[i], r.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                        if (d = g ? g.data : null,
                        m.reset(),
                        d && d.shapes && (c = d.shapes[0].it,
                        m.scale(t.finalSize / 100, t.finalSize / 100),
                        f = this.createPathShape(m, c),
                        o.setAttribute("d", f)),
                        this.isMasked)
                            this.innerElem.appendChild(o);
                        else {
                            if (this.innerElem.appendChild(h),
                            d && d.shapes) {
                                document.body.appendChild(l);
                                var y = l.getBBox();
                                l.setAttribute("width", y.width + 2),
                                l.setAttribute("height", y.height + 2),
                                l.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2)),
                                l.style.transform = l.style.webkitTransform = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)",
                                p[i].yOffset = y.y - 1
                            } else
                                l.setAttribute("width", 1),
                                l.setAttribute("height", 1);
                            h.appendChild(l)
                        }
                    } else
                        o.textContent = p[i].val,
                        o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"),
                        this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(h),
                        o.style.transform = o.style.webkitTransform = "translate3d(0," + -t.finalSize / 1.2 + "px,0)");
                    this.isMasked ? this.textSpans[u] = o : this.textSpans[u] = h,
                    this.textSpans[u].style.display = "block",
                    this.textPaths[u] = o,
                    u += 1
                }
                while (u < this.textSpans.length)
                    this.textSpans[u].style.display = "none",
                    u += 1
            }
            ,
            HTextElement.prototype.renderInnerContent = function() {
                if (this.data.singleShape) {
                    if (!this._isFirstFrame && !this.lettersChangedFlag)
                        return;
                    this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH),
                    this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)")
                }
                if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
                this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                    var t, e, i, s, r, a = 0, n = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l;
                    for (e = o.length,
                    t = 0; t < e; t += 1)
                        o[t].n ? a += 1 : (s = this.textSpans[t],
                        r = this.textPaths[t],
                        i = n[a],
                        a += 1,
                        i._mdf.m && (this.isMasked ? s.setAttribute("transform", i.m) : s.style.transform = s.style.webkitTransform = i.m),
                        s.style.opacity = i.o,
                        i.sw && i._mdf.sw && r.setAttribute("stroke-width", i.sw),
                        i.sc && i._mdf.sc && r.setAttribute("stroke", i.sc),
                        i.fc && i._mdf.fc && (r.setAttribute("fill", i.fc),
                        r.style.color = i.fc));
                    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var h = this.innerElem.getBBox();
                        this.currentBBox.w !== h.width && (this.currentBBox.w = h.width,
                        this.svgElement.setAttribute("width", h.width)),
                        this.currentBBox.h !== h.height && (this.currentBBox.h = h.height,
                        this.svgElement.setAttribute("height", h.height));
                        var l = 1;
                        this.currentBBox.w === h.width + 2 * l && this.currentBBox.h === h.height + 2 * l && this.currentBBox.x === h.x - l && this.currentBBox.y === h.y - l || (this.currentBBox.w = h.width + 2 * l,
                        this.currentBBox.h = h.height + 2 * l,
                        this.currentBBox.x = h.x - l,
                        this.currentBBox.y = h.y - l,
                        this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h),
                        this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
                    }
                }
            }
            ,
            extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement),
            HImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData)
                  , e = new Image;
                this.data.hasMask ? (this.imageElem = createNS("image"),
                this.imageElem.setAttribute("width", this.assetData.w + "px"),
                this.imageElem.setAttribute("height", this.assetData.h + "px"),
                this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
                this.layerElement.appendChild(this.imageElem),
                this.baseElement.setAttribute("width", this.assetData.w),
                this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e),
                e.src = t,
                this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
            }
            ,
            extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
            HCameraElement.prototype.setup = function() {
                var t, e, i = this.comp.threeDElements.length;
                for (t = 0; t < i; t += 1)
                    e = this.comp.threeDElements[t],
                    "3d" === e.type && (e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px",
                    e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px",
                    e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)")
            }
            ,
            HCameraElement.prototype.createElements = function() {}
            ,
            HCameraElement.prototype.hide = function() {}
            ,
            HCameraElement.prototype.renderFrame = function() {
                var t, e, i = this._isFirstFrame;
                if (this.hierarchy)
                    for (e = this.hierarchy.length,
                    t = 0; t < e; t += 1)
                        i = this.hierarchy[t].finalTransform.mProp._mdf || i;
                if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                    if (this.mat.reset(),
                    this.hierarchy)
                        for (e = this.hierarchy.length - 1,
                        t = e; t >= 0; t -= 1) {
                            var s = this.hierarchy[t].finalTransform.mProp;
                            this.mat.translate(-s.p.v[0], -s.p.v[1], s.p.v[2]),
                            this.mat.rotateX(-s.or.v[0]).rotateY(-s.or.v[1]).rotateZ(s.or.v[2]),
                            this.mat.rotateX(-s.rx.v).rotateY(-s.ry.v).rotateZ(s.rz.v),
                            this.mat.scale(1 / s.s.v[0], 1 / s.s.v[1], 1 / s.s.v[2]),
                            this.mat.translate(s.a.v[0], s.a.v[1], s.a.v[2])
                        }
                    if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                    this.a) {
                        var r;
                        r = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                        var a = Math.sqrt(Math.pow(r[0], 2) + Math.pow(r[1], 2) + Math.pow(r[2], 2))
                          , n = [r[0] / a, r[1] / a, r[2] / a]
                          , o = Math.sqrt(n[2] * n[2] + n[0] * n[0])
                          , h = Math.atan2(n[1], o)
                          , l = Math.atan2(n[0], -n[2]);
                        this.mat.rotateY(l).rotateX(-h)
                    }
                    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
                    this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),
                    this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0),
                    this.mat.translate(0, 0, this.pe.v);
                    var p = !this._prevMat.equals(this.mat);
                    if ((p || this.pe._mdf) && this.comp.threeDElements) {
                        var c;
                        for (e = this.comp.threeDElements.length,
                        t = 0; t < e; t += 1)
                            c = this.comp.threeDElements[t],
                            "3d" === c.type && (p && (c.container.style.transform = c.container.style.webkitTransform = this.mat.toCSS()),
                            this.pe._mdf && (c.perspectiveElem.style.perspective = c.perspectiveElem.style.webkitPerspective = this.pe.v + "px"));
                        this.mat.clone(this._prevMat)
                    }
                }
                this._isFirstFrame = !1
            }
            ,
            HCameraElement.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0)
            }
            ,
            HCameraElement.prototype.destroy = function() {}
            ,
            HCameraElement.prototype.getBaseElement = function() {
                return null
            }
            ,
            HEffects.prototype.renderFrame = function() {}
            ;
            var animationManager = function() {
                var t = {}
                  , e = []
                  , i = 0
                  , s = 0
                  , r = 0
                  , a = !0
                  , n = !1;
                function o(t) {
                    var i = 0
                      , r = t.target;
                    while (i < s)
                        e[i].animation === r && (e.splice(i, 1),
                        i -= 1,
                        s -= 1,
                        r.isPaused || c()),
                        i += 1
                }
                function h(t, i) {
                    if (!t)
                        return null;
                    var r = 0;
                    while (r < s) {
                        if (e[r].elem == t && null !== e[r].elem)
                            return e[r].animation;
                        r += 1
                    }
                    var a = new AnimationItem;
                    return m(a, t),
                    a.setData(t, i),
                    a
                }
                function l() {
                    var t, i = e.length, s = [];
                    for (t = 0; t < i; t += 1)
                        s.push(e[t].animation);
                    return s
                }
                function p() {
                    r += 1,
                    A()
                }
                function c() {
                    r -= 1
                }
                function m(t, i) {
                    t.addEventListener("destroy", o),
                    t.addEventListener("_active", p),
                    t.addEventListener("_idle", c),
                    e.push({
                        elem: i,
                        animation: t
                    }),
                    s += 1
                }
                function f(t) {
                    var e = new AnimationItem;
                    return m(e, null),
                    e.setParams(t),
                    e
                }
                function u(t, i) {
                    var r;
                    for (r = 0; r < s; r += 1)
                        e[r].animation.setSpeed(t, i)
                }
                function d(t, i) {
                    var r;
                    for (r = 0; r < s; r += 1)
                        e[r].animation.setDirection(t, i)
                }
                function g(t) {
                    var i;
                    for (i = 0; i < s; i += 1)
                        e[i].animation.play(t)
                }
                function y(t) {
                    var o, h = t - i;
                    for (o = 0; o < s; o += 1)
                        e[o].animation.advanceTime(h);
                    i = t,
                    r && !n ? window.requestAnimationFrame(y) : a = !0
                }
                function v(t) {
                    i = t,
                    window.requestAnimationFrame(y)
                }
                function b(t) {
                    var i;
                    for (i = 0; i < s; i += 1)
                        e[i].animation.pause(t)
                }
                function x(t, i, r) {
                    var a;
                    for (a = 0; a < s; a += 1)
                        e[a].animation.goToAndStop(t, i, r)
                }
                function E(t) {
                    var i;
                    for (i = 0; i < s; i += 1)
                        e[i].animation.stop(t)
                }
                function w(t) {
                    var i;
                    for (i = 0; i < s; i += 1)
                        e[i].animation.togglePause(t)
                }
                function C(t) {
                    var i;
                    for (i = s - 1; i >= 0; i -= 1)
                        e[i].animation.destroy(t)
                }
                function _(t, e, i) {
                    var s, r = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), a = r.length;
                    for (s = 0; s < a; s += 1)
                        i && r[s].setAttribute("data-bm-type", i),
                        h(r[s], t);
                    if (e && 0 === a) {
                        i || (i = "svg");
                        var n = document.getElementsByTagName("body")[0];
                        n.innerHTML = "";
                        var o = createTag("div");
                        o.style.width = "100%",
                        o.style.height = "100%",
                        o.setAttribute("data-bm-type", i),
                        n.appendChild(o),
                        h(o, t)
                    }
                }
                function k() {
                    var t;
                    for (t = 0; t < s; t += 1)
                        e[t].animation.resize()
                }
                function A() {
                    !n && r && a && (window.requestAnimationFrame(v),
                    a = !1)
                }
                function S() {
                    n = !0
                }
                function P() {
                    n = !1,
                    A()
                }
                return t.registerAnimation = h,
                t.loadAnimation = f,
                t.setSpeed = u,
                t.setDirection = d,
                t.play = g,
                t.pause = b,
                t.stop = E,
                t.togglePause = w,
                t.searchAnimations = _,
                t.resize = k,
                t.goToAndStop = x,
                t.destroy = C,
                t.freeze = S,
                t.unfreeze = P,
                t.getRegisteredAnimations = l,
                t
            }()
              , AnimationItem = function() {
                this._cbs = [],
                this.name = "",
                this.path = "",
                this.isLoaded = !1,
                this.currentFrame = 0,
                this.currentRawFrame = 0,
                this.totalFrames = 0,
                this.frameRate = 0,
                this.frameMult = 0,
                this.playSpeed = 1,
                this.playDirection = 1,
                this.playCount = 0,
                this.animationData = {},
                this.assets = [],
                this.isPaused = !0,
                this.autoplay = !1,
                this.loop = !0,
                this.renderer = null,
                this.animationID = createElementID(),
                this.assetsPath = "",
                this.timeCompleted = 0,
                this.segmentPos = 0,
                this.subframeEnabled = subframeEnabled,
                this.segments = [],
                this._idle = !0,
                this._completedLoop = !1,
                this.projectInterface = ProjectInterface(),
                this.imagePreloader = new ImagePreloader
            };
            extendPrototype([BaseEvent], AnimationItem),
            AnimationItem.prototype.setParams = function(t) {
                t.context && (this.context = t.context),
                (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
                switch (e) {
                case "canvas":
                    this.renderer = new CanvasRenderer(this,t.rendererSettings);
                    break;
                case "svg":
                    this.renderer = new SVGRenderer(this,t.rendererSettings);
                    break;
                default:
                    this.renderer = new HybridRenderer(this,t.rendererSettings);
                    break
                }
                this.renderer.setProjectInterface(this.projectInterface),
                this.animType = e,
                "" === t.loop || null === t.loop || (!1 === t.loop ? this.loop = !1 : !0 === t.loop ? this.loop = !0 : this.loop = parseInt(t.loop)),
                this.autoplay = !("autoplay"in t) || t.autoplay,
                this.name = t.name ? t.name : "",
                this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments,
                this.assetsPath = t.assetsPath,
                t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1),
                this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1),
                this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")),
                assetLoader.load(t.path, this.configAnimation.bind(this), function() {
                    this.trigger("data_failed")
                }
                .bind(this)))
            }
            ,
            AnimationItem.prototype.setData = function(t, e) {
                var i = {
                    wrapper: t,
                    animationData: e ? "object" === typeof e ? e : JSON.parse(e) : null
                }
                  , s = t.attributes;
                i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "",
                i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : "canvas";
                var r = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
                "" === r || (i.loop = "false" !== r && ("true" === r || parseInt(r)));
                var a = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : !s.getNamedItem("bm-autoplay") || s.getNamedItem("bm-autoplay").value;
                i.autoplay = "false" !== a,
                i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "";
                var n = s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "";
                "false" === n && (i.prerender = !1),
                this.setParams(i)
            }
            ,
            AnimationItem.prototype.includeLayers = function(t) {
                t.op > this.animationData.op && (this.animationData.op = t.op,
                this.totalFrames = Math.floor(t.op - this.animationData.ip));
                var e, i, s = this.animationData.layers, r = s.length, a = t.layers, n = a.length;
                for (i = 0; i < n; i += 1) {
                    e = 0;
                    while (e < r) {
                        if (s[e].id == a[i].id) {
                            s[e] = a[i];
                            break
                        }
                        e += 1
                    }
                }
                if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars),
                this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)),
                t.assets)
                    for (r = t.assets.length,
                    e = 0; e < r; e += 1)
                        this.animationData.assets.push(t.assets[e]);
                this.animationData.__complete = !1,
                dataManager.completeData(this.animationData, this.renderer.globalData.fontManager),
                this.renderer.includeLayers(t.layers),
                expressionsPlugin && expressionsPlugin.initExpressions(this),
                this.loadNextSegment()
            }
            ,
            AnimationItem.prototype.loadNextSegment = function() {
                var t = this.animationData.segments;
                if (!t || 0 === t.length || !this.autoloadSegments)
                    return this.trigger("data_ready"),
                    void (this.timeCompleted = this.totalFrames);
                var e = t.shift();
                this.timeCompleted = e.time * this.frameRate;
                var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                this.segmentPos += 1,
                assetLoader.load(i, this.includeLayers.bind(this), function() {
                    this.trigger("data_failed")
                }
                .bind(this))
            }
            ,
            AnimationItem.prototype.loadSegments = function() {
                var t = this.animationData.segments;
                t || (this.timeCompleted = this.totalFrames),
                this.loadNextSegment()
            }
            ,
            AnimationItem.prototype.imagesLoaded = function() {
                this.trigger("loaded_images"),
                this.checkLoaded()
            }
            ,
            AnimationItem.prototype.preloadImages = function() {
                this.imagePreloader.setAssetsPath(this.assetsPath),
                this.imagePreloader.setPath(this.path),
                this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
            }
            ,
            AnimationItem.prototype.configAnimation = function(t) {
                if (this.renderer)
                    try {
                        this.animationData = t,
                        this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip),
                        this.renderer.configAnimation(t),
                        t.assets || (t.assets = []),
                        this.assets = this.animationData.assets,
                        this.frameRate = this.animationData.fr,
                        this.firstFrame = Math.round(this.animationData.ip),
                        this.frameMult = this.animationData.fr / 1e3,
                        this.renderer.searchExtraCompositions(t.assets),
                        this.trigger("config_ready"),
                        this.preloadImages(),
                        this.loadSegments(),
                        this.updaFrameModifier(),
                        this.waitForFontsLoaded()
                    } catch (e) {
                        this.triggerConfigError(e)
                    }
            }
            ,
            AnimationItem.prototype.waitForFontsLoaded = function() {
                this.renderer && (this.renderer.globalData.fontManager.loaded() ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
            }
            ,
            AnimationItem.prototype.checkLoaded = function() {
                this.isLoaded || !this.renderer.globalData.fontManager.loaded() || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0,
                dataManager.completeData(this.animationData, this.renderer.globalData.fontManager),
                expressionsPlugin && expressionsPlugin.initExpressions(this),
                this.renderer.initItems(),
                setTimeout(function() {
                    this.trigger("DOMLoaded")
                }
                .bind(this), 0),
                this.gotoFrame(),
                this.autoplay && this.play())
            }
            ,
            AnimationItem.prototype.resize = function() {
                this.renderer.updateContainerSize()
            }
            ,
            AnimationItem.prototype.setSubframe = function(t) {
                this.subframeEnabled = !!t
            }
            ,
            AnimationItem.prototype.gotoFrame = function() {
                this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame,
                this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted),
                this.trigger("enterFrame"),
                this.renderFrame()
            }
            ,
            AnimationItem.prototype.renderFrame = function() {
                if (!1 !== this.isLoaded)
                    try {
                        this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (t) {
                        this.triggerRenderFrameError(t)
                    }
            }
            ,
            AnimationItem.prototype.play = function(t) {
                t && this.name != t || !0 === this.isPaused && (this.isPaused = !1,
                this._idle && (this._idle = !1,
                this.trigger("_active")))
            }
            ,
            AnimationItem.prototype.pause = function(t) {
                t && this.name != t || !1 === this.isPaused && (this.isPaused = !0,
                this._idle = !0,
                this.trigger("_idle"))
            }
            ,
            AnimationItem.prototype.togglePause = function(t) {
                t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause())
            }
            ,
            AnimationItem.prototype.stop = function(t) {
                t && this.name != t || (this.pause(),
                this.playCount = 0,
                this._completedLoop = !1,
                this.setCurrentRawFrameValue(0))
            }
            ,
            AnimationItem.prototype.goToAndStop = function(t, e, i) {
                i && this.name != i || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier),
                this.pause())
            }
            ,
            AnimationItem.prototype.goToAndPlay = function(t, e, i) {
                this.goToAndStop(t, e, i),
                this.play()
            }
            ,
            AnimationItem.prototype.advanceTime = function(t) {
                if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                    var e = this.currentRawFrame + t * this.frameModifier
                      , i = !1;
                    e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1,
                    this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames),
                    this._completedLoop = !0,
                    this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0,
                    e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0,
                    e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames),
                    this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e),
                    i && (this.setCurrentRawFrameValue(e),
                    this.pause(),
                    this.trigger("complete"))
                }
            }
            ,
            AnimationItem.prototype.adjustSegment = function(t, e) {
                this.playCount = 0,
                t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)),
                this.timeCompleted = this.totalFrames = t[0] - t[1],
                this.firstFrame = t[1],
                this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)),
                this.timeCompleted = this.totalFrames = t[1] - t[0],
                this.firstFrame = t[0],
                this.setCurrentRawFrameValue(.001 + e)),
                this.trigger("segmentStart")
            }
            ,
            AnimationItem.prototype.setSegment = function(t, e) {
                var i = -1;
                this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)),
                this.firstFrame = t,
                this.timeCompleted = this.totalFrames = e - t,
                -1 !== i && this.goToAndStop(i, !0)
            }
            ,
            AnimationItem.prototype.playSegments = function(t, e) {
                if (e && (this.segments.length = 0),
                "object" === typeof t[0]) {
                    var i, s = t.length;
                    for (i = 0; i < s; i += 1)
                        this.segments.push(t[i])
                } else
                    this.segments.push(t);
                this.segments.length && e && this.adjustSegment(this.segments.shift(), 0),
                this.isPaused && this.play()
            }
            ,
            AnimationItem.prototype.resetSegments = function(t) {
                this.segments.length = 0,
                this.segments.push([this.animationData.ip, this.animationData.op]),
                t && this.checkSegments(0)
            }
            ,
            AnimationItem.prototype.checkSegments = function(t) {
                return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t),
                !0)
            }
            ,
            AnimationItem.prototype.destroy = function(t) {
                t && this.name != t || !this.renderer || (this.renderer.destroy(),
                this.imagePreloader.destroy(),
                this.trigger("destroy"),
                this._cbs = null,
                this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null,
                this.renderer = null)
            }
            ,
            AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                this.currentRawFrame = t,
                this.gotoFrame()
            }
            ,
            AnimationItem.prototype.setSpeed = function(t) {
                this.playSpeed = t,
                this.updaFrameModifier()
            }
            ,
            AnimationItem.prototype.setDirection = function(t) {
                this.playDirection = t < 0 ? -1 : 1,
                this.updaFrameModifier()
            }
            ,
            AnimationItem.prototype.updaFrameModifier = function() {
                this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
            }
            ,
            AnimationItem.prototype.getPath = function() {
                return this.path
            }
            ,
            AnimationItem.prototype.getAssetsPath = function(t) {
                var e = "";
                if (t.e)
                    e = t.p;
                else if (this.assetsPath) {
                    var i = t.p;
                    -1 !== i.indexOf("images/") && (i = i.split("/")[1]),
                    e = this.assetsPath + i
                } else
                    e = this.path,
                    e += t.u ? t.u : "",
                    e += t.p;
                return e
            }
            ,
            AnimationItem.prototype.getAssetData = function(t) {
                var e = 0
                  , i = this.assets.length;
                while (e < i) {
                    if (t == this.assets[e].id)
                        return this.assets[e];
                    e += 1
                }
            }
            ,
            AnimationItem.prototype.hide = function() {
                this.renderer.hide()
            }
            ,
            AnimationItem.prototype.show = function() {
                this.renderer.show()
            }
            ,
            AnimationItem.prototype.getDuration = function(t) {
                return t ? this.totalFrames : this.totalFrames / this.frameRate
            }
            ,
            AnimationItem.prototype.trigger = function(t) {
                if (this._cbs && this._cbs[t])
                    switch (t) {
                    case "enterFrame":
                        this.triggerEvent(t, new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));
                        break;
                    case "loopComplete":
                        this.triggerEvent(t, new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));
                        break;
                    case "complete":
                        this.triggerEvent(t, new BMCompleteEvent(t,this.frameMult));
                        break;
                    case "segmentStart":
                        this.triggerEvent(t, new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));
                        break;
                    case "destroy":
                        this.triggerEvent(t, new BMDestroyEvent(t,this));
                        break;
                    default:
                        this.triggerEvent(t)
                    }
                "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),
                "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),
                "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t,this.frameMult)),
                "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),
                "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t,this))
            }
            ,
            AnimationItem.prototype.triggerRenderFrameError = function(t) {
                var e = new BMRenderFrameErrorEvent(t,this.currentFrame);
                this.triggerEvent("error", e),
                this.onError && this.onError.call(this, e)
            }
            ,
            AnimationItem.prototype.triggerConfigError = function(t) {
                var e = new BMConfigErrorEvent(t,this.currentFrame);
                this.triggerEvent("error", e),
                this.onError && this.onError.call(this, e)
            }
            ;
            var Expressions = function() {
                var t = {};
                function e(t) {
                    var e = 0
                      , i = [];
                    function s() {
                        e += 1
                    }
                    function r() {
                        e -= 1,
                        0 === e && n()
                    }
                    function a(t) {
                        -1 === i.indexOf(t) && i.push(t)
                    }
                    function n() {
                        var t, e = i.length;
                        for (t = 0; t < e; t += 1)
                            i[t].release();
                        i.length = 0
                    }
                    t.renderer.compInterface = CompExpressionInterface(t.renderer),
                    t.renderer.globalData.projectInterface.registerComposition(t.renderer),
                    t.renderer.globalData.pushExpression = s,
                    t.renderer.globalData.popExpression = r,
                    t.renderer.globalData.registerExpressionProperty = a
                }
                return t.initExpressions = e,
                t
            }();
            expressionsPlugin = Expressions;
            var ExpressionManager = function() {
                var ob = {}
                  , Math = BMMath
                  , window = null
                  , document = null;
                function $bm_isInstanceOfArray(t) {
                    return t.constructor === Array || t.constructor === Float32Array
                }
                function isNumerable(t, e) {
                    return "number" === t || "boolean" === t || "string" === t || e instanceof Number
                }
                function $bm_neg(t) {
                    var e = typeof t;
                    if ("number" === e || "boolean" === e || t instanceof Number)
                        return -t;
                    if ($bm_isInstanceOfArray(t)) {
                        var i, s = t.length, r = [];
                        for (i = 0; i < s; i += 1)
                            r[i] = -t[i];
                        return r
                    }
                    return t.propType ? t.v : void 0
                }
                var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get
                  , easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get
                  , easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
                function sum(t, e) {
                    var i = typeof t
                      , s = typeof e;
                    if ("string" === i || "string" === s)
                        return t + e;
                    if (isNumerable(i, t) && isNumerable(s, e))
                        return t + e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(s, e))
                        return t = t.slice(0),
                        t[0] = t[0] + e,
                        t;
                    if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                        return e = e.slice(0),
                        e[0] = t + e[0],
                        e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        var r = 0
                          , a = t.length
                          , n = e.length
                          , o = [];
                        while (r < a || r < n)
                            ("number" === typeof t[r] || t[r]instanceof Number) && ("number" === typeof e[r] || e[r]instanceof Number) ? o[r] = t[r] + e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r],
                            r += 1;
                        return o
                    }
                    return 0
                }
                var add = sum;
                function sub(t, e) {
                    var i = typeof t
                      , s = typeof e;
                    if (isNumerable(i, t) && isNumerable(s, e))
                        return "string" === i && (t = parseInt(t)),
                        "string" === s && (e = parseInt(e)),
                        t - e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(s, e))
                        return t = t.slice(0),
                        t[0] = t[0] - e,
                        t;
                    if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
                        return e = e.slice(0),
                        e[0] = t - e[0],
                        e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        var r = 0
                          , a = t.length
                          , n = e.length
                          , o = [];
                        while (r < a || r < n)
                            ("number" === typeof t[r] || t[r]instanceof Number) && ("number" === typeof e[r] || e[r]instanceof Number) ? o[r] = t[r] - e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r],
                            r += 1;
                        return o
                    }
                    return 0
                }
                function mul(t, e) {
                    var i, s, r, a = typeof t, n = typeof e;
                    if (isNumerable(a, t) && isNumerable(n, e))
                        return t * e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                        for (r = t.length,
                        i = createTypedArray("float32", r),
                        s = 0; s < r; s += 1)
                            i[s] = t[s] * e;
                        return i
                    }
                    if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                        for (r = e.length,
                        i = createTypedArray("float32", r),
                        s = 0; s < r; s += 1)
                            i[s] = t * e[s];
                        return i
                    }
                    return 0
                }
                function div(t, e) {
                    var i, s, r, a = typeof t, n = typeof e;
                    if (isNumerable(a, t) && isNumerable(n, e))
                        return t / e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                        for (r = t.length,
                        i = createTypedArray("float32", r),
                        s = 0; s < r; s += 1)
                            i[s] = t[s] / e;
                        return i
                    }
                    if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                        for (r = e.length,
                        i = createTypedArray("float32", r),
                        s = 0; s < r; s += 1)
                            i[s] = t / e[s];
                        return i
                    }
                    return 0
                }
                function mod(t, e) {
                    return "string" === typeof t && (t = parseInt(t)),
                    "string" === typeof e && (e = parseInt(e)),
                    t % e
                }
                var $bm_sum = sum
                  , $bm_sub = sub
                  , $bm_mul = mul
                  , $bm_div = div
                  , $bm_mod = mod;
                function clamp(t, e, i) {
                    if (e > i) {
                        var s = i;
                        i = e,
                        e = s
                    }
                    return Math.min(Math.max(t, e), i)
                }
                function radiansToDegrees(t) {
                    return t / degToRads
                }
                var radians_to_degrees = radiansToDegrees;
                function degreesToRadians(t) {
                    return t * degToRads
                }
                var degrees_to_radians = radiansToDegrees
                  , helperLengthArray = [0, 0, 0, 0, 0, 0];
                function length(t, e) {
                    if ("number" === typeof t || t instanceof Number)
                        return e = e || 0,
                        Math.abs(t - e);
                    e || (e = helperLengthArray);
                    var i, s = Math.min(t.length, e.length), r = 0;
                    for (i = 0; i < s; i += 1)
                        r += Math.pow(e[i] - t[i], 2);
                    return Math.sqrt(r)
                }
                function normalize(t) {
                    return div(t, length(t))
                }
                function rgbToHsl(t) {
                    var e, i, s = t[0], r = t[1], a = t[2], n = Math.max(s, r, a), o = Math.min(s, r, a), h = (n + o) / 2;
                    if (n == o)
                        e = i = 0;
                    else {
                        var l = n - o;
                        switch (i = h > .5 ? l / (2 - n - o) : l / (n + o),
                        n) {
                        case s:
                            e = (r - a) / l + (r < a ? 6 : 0);
                            break;
                        case r:
                            e = (a - s) / l + 2;
                            break;
                        case a:
                            e = (s - r) / l + 4;
                            break
                        }
                        e /= 6
                    }
                    return [e, i, h, t[3]]
                }
                function hue2rgb(t, e, i) {
                    return i < 0 && (i += 1),
                    i > 1 && (i -= 1),
                    i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                }
                function hslToRgb(t) {
                    var e, i, s, r = t[0], a = t[1], n = t[2];
                    if (0 === a)
                        e = i = s = n;
                    else {
                        var o = n < .5 ? n * (1 + a) : n + a - n * a
                          , h = 2 * n - o;
                        e = hue2rgb(h, o, r + 1 / 3),
                        i = hue2rgb(h, o, r),
                        s = hue2rgb(h, o, r - 1 / 3)
                    }
                    return [e, i, s, t[3]]
                }
                function linear(t, e, i, s, r) {
                    if (void 0 !== s && void 0 !== r || (s = e,
                    r = i,
                    e = 0,
                    i = 1),
                    i < e) {
                        var a = i;
                        i = e,
                        e = a
                    }
                    if (t <= e)
                        return s;
                    if (t >= i)
                        return r;
                    var n = i === e ? 0 : (t - e) / (i - e);
                    if (!s.length)
                        return s + (r - s) * n;
                    var o, h = s.length, l = createTypedArray("float32", h);
                    for (o = 0; o < h; o += 1)
                        l[o] = s[o] + (r[o] - s[o]) * n;
                    return l
                }
                function random(t, e) {
                    if (void 0 === e && (void 0 === t ? (t = 0,
                    e = 1) : (e = t,
                    t = void 0)),
                    e.length) {
                        var i, s = e.length;
                        t || (t = createTypedArray("float32", s));
                        var r = createTypedArray("float32", s)
                          , a = BMMath.random();
                        for (i = 0; i < s; i += 1)
                            r[i] = t[i] + a * (e[i] - t[i]);
                        return r
                    }
                    void 0 === t && (t = 0);
                    var n = BMMath.random();
                    return t + n * (e - t)
                }
                function createPath(t, e, i, s) {
                    var r, a = t.length, n = shape_pool.newElement();
                    n.setPathData(!!s, a);
                    var o, h, l = [0, 0];
                    for (r = 0; r < a; r += 1)
                        o = e && e[r] ? e[r] : l,
                        h = i && i[r] ? i[r] : l,
                        n.setTripleAt(t[r][0], t[r][1], h[0] + t[r][0], h[1] + t[r][1], o[0] + t[r][0], o[1] + t[r][1], r, !0);
                    return n
                }
                function initiateExpression(elem, data, property) {
                    var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
                    thisProperty.valueAtTime = thisProperty.getValueAtTime,
                    Object.defineProperty(thisProperty, "value", {
                        get: function() {
                            return thisProperty.v
                        }
                    }),
                    elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate,
                    elem.comp.displayStartTime = 0;
                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, __expression_functions = [], scoped_bm_rt;
                    if (data.xf) {
                        var i, len = data.xf.length;
                        for (i = 0; i < len; i += 1)
                            __expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())")
                    }
                    var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0]
                      , numKeys = property.kf ? data.k.length : 0
                      , active = !this.data || !0 !== this.data.hd
                      , wiggle = function(t, e) {
                        var i, s, r = this.pv.length ? this.pv.length : 1, a = createTypedArray("float32", r);
                        t = 5;
                        var n = Math.floor(time * t);
                        i = 0,
                        s = 0;
                        while (i < n) {
                            for (s = 0; s < r; s += 1)
                                a[s] += -e + 2 * e * BMMath.random();
                            i += 1
                        }
                        var o = time * t
                          , h = o - Math.floor(o)
                          , l = createTypedArray("float32", r);
                        if (r > 1) {
                            for (s = 0; s < r; s += 1)
                                l[s] = this.pv[s] + a[s] + (-e + 2 * e * BMMath.random()) * h;
                            return l
                        }
                        return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h
                    }
                    .bind(this);
                    function loopInDuration(t, e) {
                        return loopIn(t, e, !0)
                    }
                    function loopOutDuration(t, e) {
                        return loopOut(t, e, !0)
                    }
                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty),
                    loop_in = loopIn),
                    thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty),
                    loop_out = loopOut),
                    thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)),
                    this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
                    this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue;
                    function lookAt(t, e) {
                        var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
                          , s = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads
                          , r = -Math.atan2(i[1], i[2]) / degToRads;
                        return [r, s, 0]
                    }
                    function easeOut(t, e, i, s, r) {
                        return applyEase(easeOutBez, t, e, i, s, r)
                    }
                    function easeIn(t, e, i, s, r) {
                        return applyEase(easeInBez, t, e, i, s, r)
                    }
                    function ease(t, e, i, s, r) {
                        return applyEase(easeInOutBez, t, e, i, s, r)
                    }
                    function applyEase(t, e, i, s, r, a) {
                        void 0 === r ? (r = i,
                        a = s) : e = (e - i) / (s - i),
                        e = e > 1 ? 1 : e < 0 ? 0 : e;
                        var n = t(e);
                        if ($bm_isInstanceOfArray(r)) {
                            var o, h = r.length, l = createTypedArray("float32", h);
                            for (o = 0; o < h; o += 1)
                                l[o] = (a[o] - r[o]) * n + r[o];
                            return l
                        }
                        return (a - r) * n + r
                    }
                    function nearestKey(t) {
                        var e, i, s, r = data.k.length;
                        if (data.k.length && "number" !== typeof data.k[0])
                            if (i = -1,
                            t *= elem.comp.globalData.frameRate,
                            t < data.k[0].t)
                                i = 1,
                                s = data.k[0].t;
                            else {
                                for (e = 0; e < r - 1; e += 1) {
                                    if (t === data.k[e].t) {
                                        i = e + 1,
                                        s = data.k[e].t;
                                        break
                                    }
                                    if (t > data.k[e].t && t < data.k[e + 1].t) {
                                        t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2,
                                        s = data.k[e + 1].t) : (i = e + 1,
                                        s = data.k[e].t);
                                        break
                                    }
                                }
                                -1 === i && (i = e + 1,
                                s = data.k[e].t)
                            }
                        else
                            i = 0,
                            s = 0;
                        var a = {};
                        return a.index = i,
                        a.time = s / elem.comp.globalData.frameRate,
                        a
                    }
                    function key(t) {
                        var e, i, s;
                        if (!data.k.length || "number" === typeof data.k[0])
                            throw new Error("The property has no keyframe at index " + t);
                        t -= 1,
                        e = {
                            time: data.k[t].t / elem.comp.globalData.frameRate,
                            value: []
                        };
                        var r = data.k[t].hasOwnProperty("s") ? data.k[t].s : data.k[t - 1].e;
                        for (s = r.length,
                        i = 0; i < s; i += 1)
                            e[i] = r[i],
                            e.value[i] = r[i];
                        return e
                    }
                    function framesToTime(t, e) {
                        return e || (e = elem.comp.globalData.frameRate),
                        t / e
                    }
                    function timeToFrames(t, e) {
                        return t || 0 === t || (t = time),
                        e || (e = elem.comp.globalData.frameRate),
                        t * e
                    }
                    function seedRandom(t) {
                        BMMath.seedrandom(randSeed + t)
                    }
                    function sourceRectAtTime() {
                        return elem.sourceRectAtTime()
                    }
                    function substring(t, e) {
                        return "string" === typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                    }
                    function substr(t, e) {
                        return "string" === typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                    }
                    var index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
                    function executeExpression(t) {
                        return value = t,
                        _needsRandom && seedRandom(randSeed),
                        this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex,
                        textTotal = this.textTotal,
                        selectorValue = this.selectorValue),
                        thisLayer || (text = elem.layerInterface.text,
                        thisLayer = elem.layerInterface,
                        thisComp = elem.comp.compInterface,
                        toWorld = thisLayer.toWorld.bind(thisLayer),
                        fromWorld = thisLayer.fromWorld.bind(thisLayer),
                        fromComp = thisLayer.fromComp.bind(thisLayer),
                        toComp = thisLayer.toComp.bind(thisLayer),
                        mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null,
                        fromCompToSurface = fromComp),
                        transform || (transform = elem.layerInterface("ADBE Transform Group"),
                        $bm_transform = transform,
                        transform && (anchorPoint = transform.anchorPoint)),
                        4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")),
                        effect || (effect = thisLayer(4)),
                        hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                        hasParent && !parent && (parent = elem.hierarchy[0].layerInterface),
                        time = this.comp.renderedFrame / this.comp.globalData.frameRate,
                        needsVelocity && (velocity = velocityAtTime(time)),
                        expression_function(),
                        this.frameExpressionId = elem.globalData.frameId,
                        "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v),
                        scoped_bm_rt)
                    }
                    return executeExpression
                }
                return ob.initiateExpression = initiateExpression,
                ob
            }()
              , expressionHelpers = function() {
                function t(t, e, i) {
                    e.x && (i.k = !0,
                    i.x = !0,
                    i.initiateExpression = ExpressionManager.initiateExpression,
                    i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
                }
                function e(t) {
                    return t *= this.elem.globalData.frameRate,
                    t -= this.offsetTime,
                    t !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0,
                    this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime),
                    this._cachingAtTime.lastFrame = t),
                    this._cachingAtTime.value
                }
                function i(t) {
                    var e = -.01
                      , i = this.getValueAtTime(t)
                      , s = this.getValueAtTime(t + e)
                      , r = 0;
                    if (i.length) {
                        var a;
                        for (a = 0; a < i.length; a += 1)
                            r += Math.pow(s[a] - i[a], 2);
                        r = 100 * Math.sqrt(r)
                    } else
                        r = 0;
                    return r
                }
                function s(t) {
                    if (void 0 !== this.vel)
                        return this.vel;
                    var e, i, s = -.001, r = this.getValueAtTime(t), a = this.getValueAtTime(t + s);
                    if (r.length)
                        for (e = createTypedArray("float32", r.length),
                        i = 0; i < r.length; i += 1)
                            e[i] = (a[i] - r[i]) / s;
                    else
                        e = (a - r) / s;
                    return e
                }
                function r() {
                    return this.pv
                }
                function a(t) {
                    this.propertyGroup = t
                }
                return {
                    searchExpressions: t,
                    getSpeedAtTime: i,
                    getVelocityAtTime: s,
                    getValueAtTime: e,
                    getStaticValueAtTime: r,
                    setGroupProperty: a
                }
            }();
            (function() {
                function t(t, e, i) {
                    if (!this.k || !this.keyframes)
                        return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var s, r, a, n, o, h = this.comp.renderedFrame, l = this.keyframes, p = l[l.length - 1].t;
                    if (h <= p)
                        return this.pv;
                    if (i ? (s = e ? Math.abs(p - elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip),
                    r = p - s) : ((!e || e > l.length - 1) && (e = l.length - 1),
                    r = l[l.length - 1 - e].t,
                    s = p - r),
                    "pingpong" === t) {
                        var c = Math.floor((h - r) / s);
                        if (c % 2 !== 0)
                            return this.getValueAtTime((s - (h - r) % s + r) / this.comp.globalData.frameRate, 0)
                    } else {
                        if ("offset" === t) {
                            var m = this.getValueAtTime(r / this.comp.globalData.frameRate, 0)
                              , f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                              , u = this.getValueAtTime(((h - r) % s + r) / this.comp.globalData.frameRate, 0)
                              , d = Math.floor((h - r) / s);
                            if (this.pv.length) {
                                for (o = new Array(m.length),
                                n = o.length,
                                a = 0; a < n; a += 1)
                                    o[a] = (f[a] - m[a]) * d + u[a];
                                return o
                            }
                            return (f - m) * d + u
                        }
                        if ("continue" === t) {
                            var g = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                              , y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (o = new Array(g.length),
                                n = o.length,
                                a = 0; a < n; a += 1)
                                    o[a] = g[a] + (g[a] - y[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                                return o
                            }
                            return g + (h - p) / .001 * (g - y)
                        }
                    }
                    return this.getValueAtTime(((h - r) % s + r) / this.comp.globalData.frameRate, 0)
                }
                function e(t, e, i) {
                    if (!this.k)
                        return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var s, r, a, n, o, h = this.comp.renderedFrame, l = this.keyframes, p = l[0].t;
                    if (h >= p)
                        return this.pv;
                    if (i ? (s = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p),
                    r = p + s) : ((!e || e > l.length - 1) && (e = l.length - 1),
                    r = l[e].t,
                    s = r - p),
                    "pingpong" === t) {
                        var c = Math.floor((p - h) / s);
                        if (c % 2 === 0)
                            return this.getValueAtTime(((p - h) % s + p) / this.comp.globalData.frameRate, 0)
                    } else {
                        if ("offset" === t) {
                            var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                              , f = this.getValueAtTime(r / this.comp.globalData.frameRate, 0)
                              , u = this.getValueAtTime((s - (p - h) % s + p) / this.comp.globalData.frameRate, 0)
                              , d = Math.floor((p - h) / s) + 1;
                            if (this.pv.length) {
                                for (o = new Array(m.length),
                                n = o.length,
                                a = 0; a < n; a += 1)
                                    o[a] = u[a] - (f[a] - m[a]) * d;
                                return o
                            }
                            return u - (f - m) * d
                        }
                        if ("continue" === t) {
                            var g = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                              , y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (o = new Array(g.length),
                                n = o.length,
                                a = 0; a < n; a += 1)
                                    o[a] = g[a] + (g[a] - y[a]) * (p - h) / .001;
                                return o
                            }
                            return g + (g - y) * (p - h) / .001
                        }
                    }
                    return this.getValueAtTime((s - (p - h) % s + p) / this.comp.globalData.frameRate, 0)
                }
                function i(t, e) {
                    if (!this.k)
                        return this.pv;
                    if (t = .5 * (t || .4),
                    e = Math.floor(e || 5),
                    e <= 1)
                        return this.pv;
                    var i, s, r = this.comp.renderedFrame / this.comp.globalData.frameRate, a = r - t, n = r + t, o = e > 1 ? (n - a) / (e - 1) : 1, h = 0, l = 0;
                    i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0;
                    while (h < e) {
                        if (s = this.getValueAtTime(a + h * o),
                        this.pv.length)
                            for (l = 0; l < this.pv.length; l += 1)
                                i[l] += s[l];
                        else
                            i += s;
                        h += 1
                    }
                    if (this.pv.length)
                        for (l = 0; l < this.pv.length; l += 1)
                            i[l] /= e;
                    else
                        i /= e;
                    return i
                }
                function s(t) {
                    console.warn("Transform at time not supported")
                }
                function r(t) {}
                var a = TransformPropertyFactory.getTransformProperty;
                TransformPropertyFactory.getTransformProperty = function(t, e, i) {
                    var n = a(t, e, i);
                    return n.dynamicProperties.length ? n.getValueAtTime = s.bind(n) : n.getValueAtTime = r.bind(n),
                    n.setGroupProperty = expressionHelpers.setGroupProperty,
                    n
                }
                ;
                var n = PropertyFactory.getProp;
                function o(t) {
                    return this._cachingAtTime || (this._cachingAtTime = {
                        shapeValue: shape_pool.clone(this.pv),
                        lastIndex: 0,
                        lastTime: initialDefaultFrame
                    }),
                    t *= this.elem.globalData.frameRate,
                    t -= this.offsetTime,
                    t !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0,
                    this._cachingAtTime.lastTime = t,
                    this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)),
                    this._cachingAtTime.shapeValue
                }
                PropertyFactory.getProp = function(s, r, a, o, h) {
                    var l = n(s, r, a, o, h);
                    l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l),
                    l.setGroupProperty = expressionHelpers.setGroupProperty,
                    l.loopOut = t,
                    l.loopIn = e,
                    l.smooth = i,
                    l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l),
                    l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l),
                    l.numKeys = 1 === r.a ? r.k.length : 0,
                    l.propertyIndex = r.ix;
                    var p = 0;
                    return 0 !== a && (p = createTypedArray("float32", 1 === r.a ? r.k[0].s.length : r.k.length)),
                    l._cachingAtTime = {
                        lastFrame: initialDefaultFrame,
                        lastIndex: 0,
                        value: p
                    },
                    expressionHelpers.searchExpressions(s, r, l),
                    l.k && h.addDynamicProperty(l),
                    l
                }
                ;
                var h = ShapePropertyFactory.getConstructorFunction()
                  , l = ShapePropertyFactory.getKeyframedConstructorFunction();
                function p() {}
                p.prototype = {
                    vertices: function(t, e) {
                        this.k && this.getValue();
                        var i = this.v;
                        void 0 !== e && (i = this.getValueAtTime(e, 0));
                        var s, r = i._length, a = i[t], n = i.v, o = createSizedArray(r);
                        for (s = 0; s < r; s += 1)
                            o[s] = "i" === t || "o" === t ? [a[s][0] - n[s][0], a[s][1] - n[s][1]] : [a[s][0], a[s][1]];
                        return o
                    },
                    points: function(t) {
                        return this.vertices("v", t)
                    },
                    inTangents: function(t) {
                        return this.vertices("i", t)
                    },
                    outTangents: function(t) {
                        return this.vertices("o", t)
                    },
                    isClosed: function() {
                        return this.v.c
                    },
                    pointOnPath: function(t, e) {
                        var i = this.v;
                        void 0 !== e && (i = this.getValueAtTime(e, 0)),
                        this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                        var s, r = this._segmentsLength, a = r.lengths, n = r.totalLength * t, o = 0, h = a.length, l = 0;
                        while (o < h) {
                            if (l + a[o].addedLength > n) {
                                var p = o
                                  , c = i.c && o === h - 1 ? 0 : o + 1
                                  , m = (n - l) / a[o].addedLength;
                                s = bez.getPointInSegment(i.v[p], i.v[c], i.o[p], i.i[c], m, a[o]);
                                break
                            }
                            l += a[o].addedLength,
                            o += 1
                        }
                        return s || (s = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]),
                        s
                    },
                    vectorOnPath: function(t, e, i) {
                        t = 1 == t ? this.v.c ? 0 : .999 : t;
                        var s = this.pointOnPath(t, e)
                          , r = this.pointOnPath(t + .001, e)
                          , a = r[0] - s[0]
                          , n = r[1] - s[1]
                          , o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
                        if (0 === o)
                            return [0, 0];
                        var h = "tangent" === i ? [a / o, n / o] : [-n / o, a / o];
                        return h
                    },
                    tangentOnPath: function(t, e) {
                        return this.vectorOnPath(t, e, "tangent")
                    },
                    normalOnPath: function(t, e) {
                        return this.vectorOnPath(t, e, "normal")
                    },
                    setGroupProperty: expressionHelpers.setGroupProperty,
                    getValueAtTime: expressionHelpers.getStaticValueAtTime
                },
                extendPrototype([p], h),
                extendPrototype([p], l),
                l.prototype.getValueAtTime = o,
                l.prototype.initiateExpression = ExpressionManager.initiateExpression;
                var c = ShapePropertyFactory.getShapeProp;
                ShapePropertyFactory.getShapeProp = function(t, e, i, s, r) {
                    var a = c(t, e, i, s, r);
                    return a.propertyIndex = e.ix,
                    a.lock = !1,
                    3 === i ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, a),
                    a.k && t.addDynamicProperty(a),
                    a
                }
            }
            )(),
            function() {
                function t() {
                    if (this.data.d.x)
                        return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this),
                        this.addEffect(this.getExpressionValue.bind(this)),
                        !0
                }
                TextProperty.prototype.getExpressionValue = function(t, e) {
                    var i = this.calculateExpression(e);
                    if (t.t !== i) {
                        var s = {};
                        return this.copyData(s, t),
                        s.t = i.toString(),
                        s.__complete = !1,
                        s
                    }
                    return t
                }
                ,
                TextProperty.prototype.searchProperty = function() {
                    var t = this.searchKeyframes()
                      , e = this.searchExpressions();
                    return this.kf = t || e,
                    this.kf
                }
                ,
                TextProperty.prototype.searchExpressions = t
            }();
            var ShapeExpressionInterface = function() {
                function t(t, e, n) {
                    var f, u = [], d = t ? t.length : 0;
                    for (f = 0; f < d; f += 1)
                        "gr" == t[f].ty ? u.push(i(t[f], e[f], n)) : "fl" == t[f].ty ? u.push(s(t[f], e[f], n)) : "st" == t[f].ty ? u.push(r(t[f], e[f], n)) : "tm" == t[f].ty ? u.push(a(t[f], e[f], n)) : "tr" == t[f].ty || ("el" == t[f].ty ? u.push(o(t[f], e[f], n)) : "sr" == t[f].ty ? u.push(h(t[f], e[f], n)) : "sh" == t[f].ty ? u.push(m(t[f], e[f], n)) : "rc" == t[f].ty ? u.push(l(t[f], e[f], n)) : "rd" == t[f].ty ? u.push(p(t[f], e[f], n)) : "rp" == t[f].ty && u.push(c(t[f], e[f], n)));
                    return u
                }
                function e(e, i, s) {
                    var r, a = function(t) {
                        var e = 0
                          , i = r.length;
                        while (e < i) {
                            if (r[e]._name === t || r[e].mn === t || r[e].propertyIndex === t || r[e].ix === t || r[e].ind === t)
                                return r[e];
                            e += 1
                        }
                        if ("number" === typeof t)
                            return r[t - 1]
                    };
                    return a.propertyGroup = function(t) {
                        return 1 === t ? a : s(t - 1)
                    }
                    ,
                    r = t(e.it, i.it, a.propertyGroup),
                    a.numProperties = r.length,
                    a.propertyIndex = e.cix,
                    a._name = e.nm,
                    a
                }
                function i(t, i, s) {
                    var r = function(t) {
                        switch (t) {
                        case "ADBE Vectors Group":
                        case "Contents":
                        case 2:
                            return r.content;
                        default:
                            return r.transform
                        }
                    };
                    r.propertyGroup = function(t) {
                        return 1 === t ? r : s(t - 1)
                    }
                    ;
                    var a = e(t, i, r.propertyGroup)
                      , o = n(t.it[t.it.length - 1], i.it[i.it.length - 1], r.propertyGroup);
                    return r.content = a,
                    r.transform = o,
                    Object.defineProperty(r, "_name", {
                        get: function() {
                            return t.nm
                        }
                    }),
                    r.numProperties = t.np,
                    r.propertyIndex = t.ix,
                    r.nm = t.nm,
                    r.mn = t.mn,
                    r
                }
                function s(t, e, i) {
                    function s(t) {
                        return "Color" === t || "color" === t ? s.color : "Opacity" === t || "opacity" === t ? s.opacity : void 0
                    }
                    return Object.defineProperties(s, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }),
                    e.c.setGroupProperty(i),
                    e.o.setGroupProperty(i),
                    s
                }
                function r(t, e, i) {
                    function s(t) {
                        return 1 === t ? ob : i(t - 1)
                    }
                    function r(t) {
                        return 1 === t ? h : s(t - 1)
                    }
                    function a(i) {
                        Object.defineProperty(h, t.d[i].nm, {
                            get: ExpressionPropertyInterface(e.d.dataProps[i].p)
                        })
                    }
                    var n, o = t.d ? t.d.length : 0, h = {};
                    for (n = 0; n < o; n += 1)
                        a(n),
                        e.d.dataProps[n].p.setGroupProperty(r);
                    function l(t) {
                        return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : void 0
                    }
                    return Object.defineProperties(l, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        strokeWidth: {
                            get: ExpressionPropertyInterface(e.w)
                        },
                        dash: {
                            get: function() {
                                return h
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }),
                    e.c.setGroupProperty(s),
                    e.o.setGroupProperty(s),
                    e.w.setGroupProperty(s),
                    l
                }
                function a(t, e, i) {
                    function s(t) {
                        return 1 == t ? r : i(--t)
                    }
                    function r(e) {
                        return e === t.e.ix || "End" === e || "end" === e ? r.end : e === t.s.ix ? r.start : e === t.o.ix ? r.offset : void 0
                    }
                    return r.propertyIndex = t.ix,
                    e.s.setGroupProperty(s),
                    e.e.setGroupProperty(s),
                    e.o.setGroupProperty(s),
                    r.propertyIndex = t.ix,
                    r.propertyGroup = i,
                    Object.defineProperties(r, {
                        start: {
                            get: ExpressionPropertyInterface(e.s)
                        },
                        end: {
                            get: ExpressionPropertyInterface(e.e)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    r.mn = t.mn,
                    r
                }
                function n(t, e, i) {
                    function s(t) {
                        return 1 == t ? r : i(--t)
                    }
                    function r(e) {
                        return t.a.ix === e || "Anchor Point" === e ? r.anchorPoint : t.o.ix === e || "Opacity" === e ? r.opacity : t.p.ix === e || "Position" === e ? r.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? r.rotation : t.s.ix === e || "Scale" === e ? r.scale : t.sk && t.sk.ix === e || "Skew" === e ? r.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? r.skewAxis : void 0
                    }
                    return e.transform.mProps.o.setGroupProperty(s),
                    e.transform.mProps.p.setGroupProperty(s),
                    e.transform.mProps.a.setGroupProperty(s),
                    e.transform.mProps.s.setGroupProperty(s),
                    e.transform.mProps.r.setGroupProperty(s),
                    e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(s),
                    e.transform.mProps.sa.setGroupProperty(s)),
                    e.transform.op.setGroupProperty(s),
                    Object.defineProperties(r, {
                        opacity: {
                            get: ExpressionPropertyInterface(e.transform.mProps.o)
                        },
                        position: {
                            get: ExpressionPropertyInterface(e.transform.mProps.p)
                        },
                        anchorPoint: {
                            get: ExpressionPropertyInterface(e.transform.mProps.a)
                        },
                        scale: {
                            get: ExpressionPropertyInterface(e.transform.mProps.s)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(e.transform.mProps.r)
                        },
                        skew: {
                            get: ExpressionPropertyInterface(e.transform.mProps.sk)
                        },
                        skewAxis: {
                            get: ExpressionPropertyInterface(e.transform.mProps.sa)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    r.ty = "tr",
                    r.mn = t.mn,
                    r.propertyGroup = i,
                    r
                }
                function o(t, e, i) {
                    function s(t) {
                        return 1 == t ? a : i(--t)
                    }
                    a.propertyIndex = t.ix;
                    var r = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    function a(e) {
                        return t.p.ix === e ? a.position : t.s.ix === e ? a.size : void 0
                    }
                    return r.s.setGroupProperty(s),
                    r.p.setGroupProperty(s),
                    Object.defineProperties(a, {
                        size: {
                            get: ExpressionPropertyInterface(r.s)
                        },
                        position: {
                            get: ExpressionPropertyInterface(r.p)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    a.mn = t.mn,
                    a
                }
                function h(t, e, i) {
                    function s(t) {
                        return 1 == t ? a : i(--t)
                    }
                    var r = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    function a(e) {
                        return t.p.ix === e ? a.position : t.r.ix === e ? a.rotation : t.pt.ix === e ? a.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? a.outerRadius : t.os.ix === e ? a.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? a.innerRoundness : void 0 : a.innerRadius
                    }
                    return a.propertyIndex = t.ix,
                    r.or.setGroupProperty(s),
                    r.os.setGroupProperty(s),
                    r.pt.setGroupProperty(s),
                    r.p.setGroupProperty(s),
                    r.r.setGroupProperty(s),
                    t.ir && (r.ir.setGroupProperty(s),
                    r.is.setGroupProperty(s)),
                    Object.defineProperties(a, {
                        position: {
                            get: ExpressionPropertyInterface(r.p)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(r.r)
                        },
                        points: {
                            get: ExpressionPropertyInterface(r.pt)
                        },
                        outerRadius: {
                            get: ExpressionPropertyInterface(r.or)
                        },
                        outerRoundness: {
                            get: ExpressionPropertyInterface(r.os)
                        },
                        innerRadius: {
                            get: ExpressionPropertyInterface(r.ir)
                        },
                        innerRoundness: {
                            get: ExpressionPropertyInterface(r.is)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    a.mn = t.mn,
                    a
                }
                function l(t, e, i) {
                    function s(t) {
                        return 1 == t ? a : i(--t)
                    }
                    var r = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    function a(e) {
                        return t.p.ix === e ? a.position : t.r.ix === e ? a.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? a.size : void 0
                    }
                    return a.propertyIndex = t.ix,
                    r.p.setGroupProperty(s),
                    r.s.setGroupProperty(s),
                    r.r.setGroupProperty(s),
                    Object.defineProperties(a, {
                        position: {
                            get: ExpressionPropertyInterface(r.p)
                        },
                        roundness: {
                            get: ExpressionPropertyInterface(r.r)
                        },
                        size: {
                            get: ExpressionPropertyInterface(r.s)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    a.mn = t.mn,
                    a
                }
                function p(t, e, i) {
                    function s(t) {
                        return 1 == t ? a : i(--t)
                    }
                    var r = e;
                    function a(e) {
                        if (t.r.ix === e || "Round Corners 1" === e)
                            return a.radius
                    }
                    return a.propertyIndex = t.ix,
                    r.rd.setGroupProperty(s),
                    Object.defineProperties(a, {
                        radius: {
                            get: ExpressionPropertyInterface(r.rd)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    a.mn = t.mn,
                    a
                }
                function c(t, e, i) {
                    function s(t) {
                        return 1 == t ? a : i(--t)
                    }
                    var r = e;
                    function a(e) {
                        return t.c.ix === e || "Copies" === e ? a.copies : t.o.ix === e || "Offset" === e ? a.offset : void 0
                    }
                    return a.propertyIndex = t.ix,
                    r.c.setGroupProperty(s),
                    r.o.setGroupProperty(s),
                    Object.defineProperties(a, {
                        copies: {
                            get: ExpressionPropertyInterface(r.c)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(r.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    a.mn = t.mn,
                    a
                }
                function m(t, e, i) {
                    var s = e.sh;
                    function r(t) {
                        return 1 == t ? a : i(--t)
                    }
                    function a(t) {
                        if ("Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t)
                            return a.path
                    }
                    return s.setGroupProperty(r),
                    Object.defineProperties(a, {
                        path: {
                            get: function() {
                                return s.k && s.getValue(),
                                s
                            }
                        },
                        shape: {
                            get: function() {
                                return s.k && s.getValue(),
                                s
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        ix: {
                            value: t.ix
                        },
                        propertyIndex: {
                            value: t.ix
                        },
                        mn: {
                            value: t.mn
                        }
                    }),
                    a
                }
                return function(e, i, s) {
                    var r;
                    function a(t) {
                        if ("number" === typeof t)
                            return r[t - 1];
                        var e = 0
                          , i = r.length;
                        while (e < i) {
                            if (r[e]._name === t)
                                return r[e];
                            e += 1
                        }
                    }
                    return a.propertyGroup = s,
                    r = t(e, i, a),
                    a.numProperties = r.length,
                    a
                }
            }()
              , TextExpressionInterface = function() {
                return function(t) {
                    var e, i;
                    function s() {}
                    return Object.defineProperty(s, "sourceText", {
                        get: function() {
                            t.textProperty.getValue();
                            var s = t.textProperty.currentData.t;
                            return s !== e && (t.textProperty.currentData.t = e,
                            i = new String(s),
                            i.value = s || new String(s)),
                            i
                        }
                    }),
                    s
                }
            }()
              , LayerExpressionInterface = function() {
                function t(t, e) {
                    var i, s = new Matrix;
                    if (s.reset(),
                    i = this._elem.finalTransform.mProp,
                    i.applyToMatrix(s),
                    this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r, a = this._elem.hierarchy.length;
                        for (r = 0; r < a; r += 1)
                            this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(s);
                        return s.applyToPointArray(t[0], t[1], t[2] || 0)
                    }
                    return s.applyToPointArray(t[0], t[1], t[2] || 0)
                }
                function e(t, e) {
                    var i, s = new Matrix;
                    if (s.reset(),
                    i = this._elem.finalTransform.mProp,
                    i.applyToMatrix(s),
                    this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r, a = this._elem.hierarchy.length;
                        for (r = 0; r < a; r += 1)
                            this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(s);
                        return s.inversePoint(t)
                    }
                    return s.inversePoint(t)
                }
                function i(t) {
                    var e = new Matrix;
                    if (e.reset(),
                    this._elem.finalTransform.mProp.applyToMatrix(e),
                    this._elem.hierarchy && this._elem.hierarchy.length) {
                        var i, s = this._elem.hierarchy.length;
                        for (i = 0; i < s; i += 1)
                            this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
                        return e.inversePoint(t)
                    }
                    return e.inversePoint(t)
                }
                function s() {
                    return [1, 1, 1, 1]
                }
                return function(r) {
                    var a;
                    function n(t) {
                        h.mask = new MaskManagerInterface(t,r)
                    }
                    function o(t) {
                        h.effect = t
                    }
                    function h(t) {
                        switch (t) {
                        case "ADBE Root Vectors Group":
                        case "Contents":
                        case 2:
                            return h.shapeInterface;
                        case 1:
                        case 6:
                        case "Transform":
                        case "transform":
                        case "ADBE Transform Group":
                            return a;
                        case 4:
                        case "ADBE Effect Parade":
                        case "effects":
                        case "Effects":
                            return h.effect
                        }
                    }
                    h.toWorld = t,
                    h.fromWorld = e,
                    h.toComp = t,
                    h.fromComp = i,
                    h.sampleImage = s,
                    h.sourceRectAtTime = r.sourceRectAtTime.bind(r),
                    h._elem = r,
                    a = TransformExpressionInterface(r.finalTransform.mProp);
                    var l = getDescriptor(a, "anchorPoint");
                    return Object.defineProperties(h, {
                        hasParent: {
                            get: function() {
                                return r.hierarchy.length
                            }
                        },
                        parent: {
                            get: function() {
                                return r.hierarchy[0].layerInterface
                            }
                        },
                        rotation: getDescriptor(a, "rotation"),
                        scale: getDescriptor(a, "scale"),
                        position: getDescriptor(a, "position"),
                        opacity: getDescriptor(a, "opacity"),
                        anchorPoint: l,
                        anchor_point: l,
                        transform: {
                            get: function() {
                                return a
                            }
                        },
                        active: {
                            get: function() {
                                return r.isInRange
                            }
                        }
                    }),
                    h.startTime = r.data.st,
                    h.index = r.data.ind,
                    h.source = r.data.refId,
                    h.height = 0 === r.data.ty ? r.data.h : 100,
                    h.width = 0 === r.data.ty ? r.data.w : 100,
                    h.inPoint = r.data.ip / r.comp.globalData.frameRate,
                    h.outPoint = r.data.op / r.comp.globalData.frameRate,
                    h._name = r.data.nm,
                    h.registerMaskInterface = n,
                    h.registerEffectsInterface = o,
                    h
                }
            }()
              , CompExpressionInterface = function() {
                return function(t) {
                    function e(e) {
                        var i = 0
                          , s = t.layers.length;
                        while (i < s) {
                            if (t.layers[i].nm === e || t.layers[i].ind === e)
                                return t.elements[i].layerInterface;
                            i += 1
                        }
                        return null
                    }
                    return Object.defineProperty(e, "_name", {
                        value: t.data.nm
                    }),
                    e.layer = e,
                    e.pixelAspect = 1,
                    e.height = t.data.h || t.globalData.compSize.h,
                    e.width = t.data.w || t.globalData.compSize.w,
                    e.pixelAspect = 1,
                    e.frameDuration = 1 / t.globalData.frameRate,
                    e.displayStartTime = 0,
                    e.numLayers = t.layers.length,
                    e
                }
            }()
              , TransformExpressionInterface = function() {
                return function(t) {
                    function e(t) {
                        switch (t) {
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                        case 6:
                            return e.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                        case "ADBE Rotate Z":
                        case 10:
                            return e.rotation;
                        case "ADBE Rotate X":
                            return e.xRotation;
                        case "ADBE Rotate Y":
                            return e.yRotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                        case 2:
                            return e.position;
                        case "ADBE Position_0":
                            return e.xPosition;
                        case "ADBE Position_1":
                            return e.yPosition;
                        case "ADBE Position_2":
                            return e.zPosition;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "Anchor Point":
                        case "ADBE AnchorPoint":
                        case 1:
                            return e.anchorPoint;
                        case "opacity":
                        case "Opacity":
                        case 11:
                            return e.opacity
                        }
                    }
                    if (Object.defineProperty(e, "rotation", {
                        get: ExpressionPropertyInterface(t.r || t.rz)
                    }),
                    Object.defineProperty(e, "zRotation", {
                        get: ExpressionPropertyInterface(t.rz || t.r)
                    }),
                    Object.defineProperty(e, "xRotation", {
                        get: ExpressionPropertyInterface(t.rx)
                    }),
                    Object.defineProperty(e, "yRotation", {
                        get: ExpressionPropertyInterface(t.ry)
                    }),
                    Object.defineProperty(e, "scale", {
                        get: ExpressionPropertyInterface(t.s)
                    }),
                    t.p)
                        var i = ExpressionPropertyInterface(t.p);
                    return Object.defineProperty(e, "position", {
                        get: function() {
                            return t.p ? i() : [t.px.v, t.py.v, t.pz ? t.pz.v : 0]
                        }
                    }),
                    Object.defineProperty(e, "xPosition", {
                        get: ExpressionPropertyInterface(t.px)
                    }),
                    Object.defineProperty(e, "yPosition", {
                        get: ExpressionPropertyInterface(t.py)
                    }),
                    Object.defineProperty(e, "zPosition", {
                        get: ExpressionPropertyInterface(t.pz)
                    }),
                    Object.defineProperty(e, "anchorPoint", {
                        get: ExpressionPropertyInterface(t.a)
                    }),
                    Object.defineProperty(e, "opacity", {
                        get: ExpressionPropertyInterface(t.o)
                    }),
                    Object.defineProperty(e, "skew", {
                        get: ExpressionPropertyInterface(t.sk)
                    }),
                    Object.defineProperty(e, "skewAxis", {
                        get: ExpressionPropertyInterface(t.sa)
                    }),
                    Object.defineProperty(e, "orientation", {
                        get: ExpressionPropertyInterface(t.or)
                    }),
                    e
                }
            }()
              , ProjectInterface = function() {
                function t(t) {
                    this.compositions.push(t)
                }
                return function() {
                    function e(t) {
                        var e = 0
                          , i = this.compositions.length;
                        while (e < i) {
                            if (this.compositions[e].data && this.compositions[e].data.nm === t)
                                return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame),
                                this.compositions[e].compInterface;
                            e += 1
                        }
                    }
                    return e.compositions = [],
                    e.currentFrame = 0,
                    e.registerComposition = t,
                    e
                }
            }()
              , EffectsExpressionInterface = function() {
                var t = {
                    createEffectsInterface: e
                };
                function e(t, e) {
                    if (t.effectsManager) {
                        var s, r = [], a = t.data.ef, n = t.effectsManager.effectElements.length;
                        for (s = 0; s < n; s += 1)
                            r.push(i(a[s], t.effectsManager.effectElements[s], e, t));
                        return function(e) {
                            var i = t.data.ef || []
                              , s = 0
                              , a = i.length;
                            while (s < a) {
                                if (e === i[s].nm || e === i[s].mn || e === i[s].ix)
                                    return r[s];
                                s += 1
                            }
                        }
                    }
                }
                function i(t, e, r, a) {
                    var n, o = [], h = t.ef.length;
                    for (n = 0; n < h; n += 1)
                        5 === t.ef[n].ty ? o.push(i(t.ef[n], e.effectElements[n], e.effectElements[n].propertyGroup, a)) : o.push(s(e.effectElements[n], t.ef[n].ty, a, l));
                    function l(t) {
                        return 1 === t ? p : r(t - 1)
                    }
                    var p = function(e) {
                        var i = t.ef
                          , s = 0
                          , r = i.length;
                        while (s < r) {
                            if (e === i[s].nm || e === i[s].mn || e === i[s].ix)
                                return 5 === i[s].ty ? o[s] : o[s]();
                            s += 1
                        }
                        return o[0]()
                    };
                    return p.propertyGroup = l,
                    "ADBE Color Control" === t.mn && Object.defineProperty(p, "color", {
                        get: function() {
                            return o[0]()
                        }
                    }),
                    Object.defineProperty(p, "numProperties", {
                        get: function() {
                            return t.np
                        }
                    }),
                    p.active = p.enabled = 0 !== t.en,
                    p
                }
                function s(t, e, i, s) {
                    var r = ExpressionPropertyInterface(t.p);
                    function a() {
                        return 10 === e ? i.comp.compInterface(t.p.v) : r()
                    }
                    return t.p.setGroupProperty && t.p.setGroupProperty(s),
                    a
                }
                return t
            }()
              , MaskManagerInterface = function() {
                function t(t, e) {
                    this._mask = t,
                    this._data = e
                }
                Object.defineProperty(t.prototype, "maskPath", {
                    get: function() {
                        return this._mask.prop.k && this._mask.prop.getValue(),
                        this._mask.prop
                    }
                }),
                Object.defineProperty(t.prototype, "maskOpacity", {
                    get: function() {
                        return this._mask.op.k && this._mask.op.getValue(),
                        100 * this._mask.op.v
                    }
                });
                var e = function(e, i) {
                    var s, r = createSizedArray(e.viewData.length), a = e.viewData.length;
                    for (s = 0; s < a; s += 1)
                        r[s] = new t(e.viewData[s],e.masksProperties[s]);
                    var n = function(t) {
                        s = 0;
                        while (s < a) {
                            if (e.masksProperties[s].nm === t)
                                return r[s];
                            s += 1
                        }
                    };
                    return n
                };
                return e
            }()
              , ExpressionPropertyInterface = function() {
                var t = {
                    pv: 0,
                    v: 0,
                    mult: 1
                }
                  , e = {
                    pv: [0, 0, 0],
                    v: [0, 0, 0],
                    mult: 1
                };
                function i(t, e, i) {
                    Object.defineProperty(t, "velocity", {
                        get: function() {
                            return e.getVelocityAtTime(e.comp.currentFrame)
                        }
                    }),
                    t.numKeys = e.keyframes ? e.keyframes.length : 0,
                    t.key = function(s) {
                        if (t.numKeys) {
                            var r = "";
                            r = "s"in e.keyframes[s - 1] ? e.keyframes[s - 1].s : "e"in e.keyframes[s - 2] ? e.keyframes[s - 2].e : e.keyframes[s - 2].s;
                            var a = "unidimensional" === i ? new Number(r) : Object.assign({}, r);
                            return a.time = e.keyframes[s - 1].t / e.elem.comp.globalData.frameRate,
                            a
                        }
                        return 0
                    }
                    ,
                    t.valueAtTime = e.getValueAtTime,
                    t.speedAtTime = e.getSpeedAtTime,
                    t.velocityAtTime = e.getVelocityAtTime,
                    t.propertyGroup = e.propertyGroup
                }
                function s(e) {
                    e && "pv"in e || (e = t);
                    var s = 1 / e.mult
                      , r = e.pv * s
                      , a = new Number(r);
                    return a.value = r,
                    i(a, e, "unidimensional"),
                    function() {
                        return e.k && e.getValue(),
                        r = e.v * s,
                        a.value !== r && (a = new Number(r),
                        a.value = r,
                        i(a, e, "unidimensional")),
                        a
                    }
                }
                function r(t) {
                    t && "pv"in t || (t = e);
                    var s = 1 / t.mult
                      , r = t.pv.length
                      , a = createTypedArray("float32", r)
                      , n = createTypedArray("float32", r);
                    return a.value = n,
                    i(a, t, "multidimensional"),
                    function() {
                        t.k && t.getValue();
                        for (var e = 0; e < r; e += 1)
                            a[e] = n[e] = t.v[e] * s;
                        return a
                    }
                }
                function a() {
                    return t
                }
                return function(t) {
                    return t ? "unidimensional" === t.propType ? s(t) : r(t) : a
                }
            }();
            function SliderEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }
            function AngleEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }
            function ColorEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
            }
            function PointEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
            }
            function LayerIndexEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }
            function MaskIndexEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }
            function CheckboxEffect(t, e, i) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
            }
            function NoValueEffect() {
                this.p = {}
            }
            function EffectsManager() {}
            function EffectsManager(t, e) {
                var i = t.ef || [];
                this.effectElements = [];
                var s, r, a = i.length;
                for (s = 0; s < a; s++)
                    r = new GroupEffect(i[s],e),
                    this.effectElements.push(r)
            }
            function GroupEffect(t, e) {
                this.init(t, e)
            }
            (function() {
                var t = function() {
                    function t(t, e) {
                        return this.textIndex = t + 1,
                        this.textTotal = e,
                        this.v = this.getValue() * this.mult,
                        this.v
                    }
                    return function(e, i) {
                        this.pv = 1,
                        this.comp = e.comp,
                        this.elem = e,
                        this.mult = .01,
                        this.propType = "textSelector",
                        this.textTotal = i.totalChars,
                        this.selectorValue = 100,
                        this.lastValue = [1, 1, 1],
                        this.k = !0,
                        this.x = !0,
                        this.getValue = ExpressionManager.initiateExpression.bind(this)(e, i, this),
                        this.getMult = t,
                        this.getVelocityAtTime = expressionHelpers.getVelocityAtTime,
                        this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this),
                        this.setGroupProperty = expressionHelpers.setGroupProperty
                    }
                }()
                  , e = TextSelectorProp.getTextSelectorProp;
                TextSelectorProp.getTextSelectorProp = function(i, s, r) {
                    return 1 === s.t ? new t(i,s,r) : e(i, s, r)
                }
            }
            )(),
            extendPrototype([DynamicPropertyContainer], GroupEffect),
            GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties,
            GroupEffect.prototype.init = function(t, e) {
                this.data = t,
                this.effectElements = [],
                this.initDynamicPropertyContainer(e);
                var i, s, r = this.data.ef.length, a = this.data.ef;
                for (i = 0; i < r; i += 1) {
                    switch (s = null,
                    a[i].ty) {
                    case 0:
                        s = new SliderEffect(a[i],e,this);
                        break;
                    case 1:
                        s = new AngleEffect(a[i],e,this);
                        break;
                    case 2:
                        s = new ColorEffect(a[i],e,this);
                        break;
                    case 3:
                        s = new PointEffect(a[i],e,this);
                        break;
                    case 4:
                    case 7:
                        s = new CheckboxEffect(a[i],e,this);
                        break;
                    case 10:
                        s = new LayerIndexEffect(a[i],e,this);
                        break;
                    case 11:
                        s = new MaskIndexEffect(a[i],e,this);
                        break;
                    case 5:
                        s = new EffectsManager(a[i],e,this);
                        break;
                    default:
                        s = new NoValueEffect(a[i],e,this);
                        break
                    }
                    s && this.effectElements.push(s)
                }
            }
            ;
            var lottiejs = {}
              , _isFrozen = !1;
            function setLocationHref(t) {
                locationHref = t
            }
            function searchAnimations() {
                !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
            }
            function setSubframeRendering(t) {
                subframeEnabled = t
            }
            function loadAnimation(t) {
                return !0 === standalone && (t.animationData = JSON.parse(animationData)),
                animationManager.loadAnimation(t)
            }
            function setQuality(t) {
                if ("string" === typeof t)
                    switch (t) {
                    case "high":
                        defaultCurveSegments = 200;
                        break;
                    case "medium":
                        defaultCurveSegments = 50;
                        break;
                    case "low":
                        defaultCurveSegments = 10;
                        break
                    }
                else
                    !isNaN(t) && t > 1 && (defaultCurveSegments = t);
                roundValues(!(defaultCurveSegments >= 50))
            }
            function inBrowser() {
                return "undefined" !== typeof navigator
            }
            function installPlugin(t, e) {
                "expressions" === t && (expressionsPlugin = e)
            }
            function getFactory(t) {
                switch (t) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix
                }
            }
            function checkReady() {
                "complete" === document.readyState && (clearInterval(readyStateCheckInterval),
                searchAnimations())
            }
            function getQueryVariable(t) {
                for (var e = queryString.split("&"), i = 0; i < e.length; i++) {
                    var s = e[i].split("=");
                    if (decodeURIComponent(s[0]) == t)
                        return decodeURIComponent(s[1])
                }
            }
            lottiejs.play = animationManager.play,
            lottiejs.pause = animationManager.pause,
            lottiejs.setLocationHref = setLocationHref,
            lottiejs.togglePause = animationManager.togglePause,
            lottiejs.setSpeed = animationManager.setSpeed,
            lottiejs.setDirection = animationManager.setDirection,
            lottiejs.stop = animationManager.stop,
            lottiejs.searchAnimations = searchAnimations,
            lottiejs.registerAnimation = animationManager.registerAnimation,
            lottiejs.loadAnimation = loadAnimation,
            lottiejs.setSubframeRendering = setSubframeRendering,
            lottiejs.resize = animationManager.resize,
            lottiejs.goToAndStop = animationManager.goToAndStop,
            lottiejs.destroy = animationManager.destroy,
            lottiejs.setQuality = setQuality,
            lottiejs.inBrowser = inBrowser,
            lottiejs.installPlugin = installPlugin,
            lottiejs.freeze = animationManager.freeze,
            lottiejs.unfreeze = animationManager.unfreeze,
            lottiejs.getRegisteredAnimations = animationManager.getRegisteredAnimations,
            lottiejs.__getFactory = getFactory,
            lottiejs.version = "5.5.8";
            var standalone = "__[STANDALONE]__"
              , animationData = "__[ANIMATIONDATA]__"
              , renderer = "";
            if (standalone) {
                var scripts = document.getElementsByTagName("script")
                  , index = scripts.length - 1
                  , myScript = scripts[index] || {
                    src: ""
                }
                  , queryString = myScript.src.replace(/^[^\?]+\??/, "");
                renderer = getQueryVariable("renderer")
            }
            var readyStateCheckInterval = setInterval(checkReady, 100);
            return lottiejs
        }
        ))
    },
    "954d": function(t, e, i) {
        "use strict";
        var s = i("2692")
          , r = i.n(s);
        r.a
    },
    "980d": function(t, e, i) {
        "use strict";
        var s = i("ed35")
          , r = i.n(s);
        r.a
    },
    "990b": function(t, e, i) {
        var s = i("9093")
          , r = i("2621")
          , a = i("cb7c")
          , n = i("7726").Reflect;
        t.exports = n && n.ownKeys || function(t) {
            var e = s.f(a(t))
              , i = r.f;
            return i ? e.concat(i(t)) : e
        }
    },
    "9c1d": function(t, e, i) {
        t.exports = i.p + "img/text-4.59ae553f.png"
    },
    "9f22": function(t) {
        t.exports = JSON.parse('{"v":"4.6.9","fr":30,"ip":0,"op":38,"w":100,"h":100,"nm":"heart","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"飛沫_08","ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":14,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":18,"s":[100],"e":[0]},{"t":32}]},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":14,"s":[50,50,0],"e":[87,28.25,0],"to":[6.16666650772095,-3.625,0],"ti":[-4.75,2.75000834465027,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":18,"s":[87,28.25,0],"e":[78.5,33.5,0],"to":[4.75,-2.75000834465027,0],"ti":[1.41666662693024,-0.87499165534973,0]},{"t":32}]},"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":14,"s":[100,100,100],"e":[250,250,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":18,"s":[250,250,100],"e":[50,50,100]},{"t":32}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[3,3]},"p":{"a":0,"k":[0,0]},"nm":"楕円形パス 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0.6078431,0.9215686,0.8745098,1]},"o":{"a":0,"k":100},"r":1,"nm":"塗り 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"楕円形 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":150,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":2,"ty":4,"nm":"飛沫_07","ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":18,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":22,"s":[100],"e":[0]},{"t":32}]},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":18,"s":[50,50,0],"e":[13.5,28.75,0],"to":[-6.08333349227905,-3.54166674613953,0],"ti":[5.22916650772095,2.765625,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":22,"s":[13.5,28.75,0],"e":[18.625,33.406,0],"to":[-5.22916650772095,-2.765625,0],"ti":[-0.85416668653488,-0.77604168653488,0]},{"t":32}]},"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":18,"s":[100,100,100],"e":[250,250,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":22,"s":[250,250,100],"e":[50,50,100]},{"t":32}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[3,3]},"p":{"a":0,"k":[0,0]},"nm":"楕円形パス 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0.9568627,0.9058824,0.5372549,1]},"o":{"a":0,"k":100},"r":1,"nm":"塗り 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"楕円形 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":150,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"飛沫_06","ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":14,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":18,"s":[100],"e":[0]},{"t":32}]},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":14,"s":[50,50,0],"e":[14,70.5,0],"to":[-6,3.41666674613953,0],"ti":[5.16666650772095,-2.64583325386047,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":18,"s":[14,70.5,0],"e":[19,65.875,0],"to":[-5.16666650772095,2.64583325386047,0],"ti":[-0.83333331346512,0.77083331346512,0]},{"t":32}]},"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":14,"s":[100,100,100],"e":[250,250,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":18,"s":[250,250,100],"e":[50,50,100]},{"t":32}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[3,3]},"p":{"a":0,"k":[0,0]},"nm":"楕円形パス 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0.6078431,0.9215686,0.8745098,1]},"o":{"a":0,"k":100},"r":1,"nm":"塗り 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"楕円形 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":150,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"飛沫_05","ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":18,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":22,"s":[100],"e":[0]},{"t":32}]},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":18,"s":[50,50,0],"e":[85.5,70.5,0],"to":[5.91666650772095,3.41666674613953,0],"ti":[-5.04166650772095,-2.64583325386047,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":22,"s":[85.5,70.5,0],"e":[80.25,65.875,0],"to":[5.04166650772095,2.64583325386047,0],"ti":[0.875,0.77083331346512,0]},{"t":32}]},"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":18,"s":[100,100,100],"e":[250,250,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":22,"s":[250,250,100],"e":[50,50,100]},{"t":32}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[3,3]},"p":{"a":0,"k":[0,0]},"nm":"楕円形パス 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0.9568627,0.9058824,0.5372549,1]},"o":{"a":0,"k":100},"r":1,"nm":"塗り 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"楕円形 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":150,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":5,"ty":4,"nm":"飛沫_02","ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":10,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":14,"s":[100],"e":[0]},{"t":32}]},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":10,"s":[50,50,0],"e":[50,92,0],"to":[0,7,0],"ti":[0,-5.33333349227905,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":14,"s":[50,92,0],"e":[50,82,0],"to":[0,5.33333349227905,0],"ti":[0,1.66666662693024,0]},{"t":32}]},"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":10,"s":[100,100,100],"e":[180,180,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":14,"s":[180,180,100],"e":[50,50,100]},{"t":32}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[3,3]},"p":{"a":0,"k":[0,0]},"nm":"楕円形パス 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0.8784314,0.5882353,0.8509804,1]},"o":{"a":0,"k":100},"r":1,"nm":"塗り 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"楕円形 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":150,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":6,"ty":4,"nm":"飛沫_01","ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":10,"s":[0],"e":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":14,"s":[100],"e":[0]},{"t":32}]},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":10,"s":[50,50,0],"e":[50,8,0],"to":[0,-7,0],"ti":[0,5.33333349227905,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":14,"s":[50,8,0],"e":[50,18,0],"to":[0,-5.33333349227905,0],"ti":[0,-1.66666662693024,0]},{"t":32}]},"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":10,"s":[100,100,100],"e":[180,180,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":14,"s":[180,180,100],"e":[50,50,100]},{"t":32}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[3,3]},"p":{"a":0,"k":[0,0]},"nm":"楕円形パス 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0.8784314,0.5882353,0.8509804,1]},"o":{"a":0,"k":100},"r":1,"nm":"塗り 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"楕円形 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":150,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":7,"ty":4,"nm":"heart_03","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[50,50,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"i":{"x":[0.589,0.589,0.685],"y":[1,1,0.685]},"o":{"x":[0.183,0.183,0.173],"y":[0.041,0.041,0.173]},"n":["0p589_1_0p183_0p041","0p589_1_0p183_0p041","0p685_0p685_0p173_0p173"],"t":11,"s":[0,0,100],"e":[300,300,100]},{"i":{"x":[0.418,0.418,0.833],"y":[1.005,1.005,0.833]},"o":{"x":[0.483,0.483,0.333],"y":[0,0,0.333]},"n":["0p418_1p005_0p483_0","0p418_1p005_0p483_0","0p833_0p833_0p333_0p333"],"t":16,"s":[300,300,100],"e":[200,200,100]},{"i":{"x":[0.639,0.639,0.778],"y":[1,1,0.778]},"o":{"x":[0.412,0.412,0.157],"y":[0,0,0.157]},"n":["0p639_1_0p412_0","0p639_1_0p412_0","0p778_0p778_0p157_0p157"],"t":21,"s":[200,200,100],"e":[240,240,100]},{"i":{"x":[0.625,0.625,0.833],"y":[1,1,0.833]},"o":{"x":[0.359,0.359,0.167],"y":[0,0,0.167]},"n":["0p625_1_0p359_0","0p625_1_0p359_0","0p833_0p833_0p167_0p167"],"t":25,"s":[240,240,100],"e":[200,200,100]},{"i":{"x":[0.593,0.593,0.833],"y":[1,1,0.833]},"o":{"x":[0.395,0.395,0.167],"y":[0,0,0.167]},"n":["0p593_1_0p395_0","0p593_1_0p395_0","0p833_0p833_0p167_0p167"],"t":29,"s":[200,200,100],"e":[215,215,100]},{"i":{"x":[0.533,0.533,0.833],"y":[1,1,0.833]},"o":{"x":[0.579,0.579,0.167],"y":[0,0,0.167]},"n":["0p533_1_0p579_0","0p533_1_0p579_0","0p833_0p833_0p167_0p167"],"t":32,"s":[215,215,100],"e":[200,200,100]},{"t":35}]}},"ao":0,"ef":[{"ty":5,"nm":"グラデーション","mn":"ADBE Ramp","ix":1,"en":1,"ef":[{"ty":3,"nm":"グラデーションの開始","mn":"ADBE Ramp-0001","ix":1,"v":{"a":0,"k":[30.5,67.25]}},{"ty":2,"nm":"開始色","mn":"ADBE Ramp-0002","ix":2,"v":{"a":0,"k":[0.9764706,0.2588235,0.2431373,1]}},{"ty":3,"nm":"グラデーションの終了","mn":"ADBE Ramp-0003","ix":3,"v":{"a":0,"k":[70,33]}},{"ty":2,"nm":"終了色","mn":"ADBE Ramp-0004","ix":4,"v":{"a":0,"k":[0.9803922,0.2666667,0.5294118,1]}},{"ty":7,"nm":"グラデーションのシェイプ","mn":"ADBE Ramp-0005","ix":5,"v":{"a":0,"k":1}},{"ty":0,"nm":"グラデーションの拡散","mn":"ADBE Ramp-0006","ix":6,"v":{"a":0,"k":0}},{"ty":0,"nm":"元の画像とブレンド","mn":"ADBE Ramp-0007","ix":7,"v":{"a":0,"k":0}},{"ty":6,"nm":"","mn":"ADBE Ramp-0008","ix":8,"v":0}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.339,1.458],[1.963,-0.285],[0.72,-0.686],[1.543,0.226],[1.224,-1.331],[-0.71,-2.118],[-1.501,-0.867],[-0.207,-0.025],[-0.082,0.05],[-1.083,3.23]],"o":[[-1.226,-1.329],[-1.544,0.226],[-0.72,-0.686],[-1.958,-0.285],[-1.338,1.457],[1.085,3.233],[0.072,0.046],[0.248,0],[1.509,-0.873],[0.712,-2.117]],"v":[[8.503,-6.715],[3.569,-8.338],[0,-6.268],[-3.57,-8.338],[-8.504,-6.715],[-9.523,-0.92],[-0.521,8.451],[-0.009,8.623],[0.519,8.451],[9.521,-0.92]],"c":true}},"nm":"パス 1","mn":"ADBE Vector Shape - Group"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[0.9764706,0.2588235,0.2431373,1]},"o":{"a":0,"k":100},"r":1,"nm":"塗り 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"シェイプ 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":150,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":8,"ty":4,"nm":"heart_02","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[50,50,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.339,1.458],[1.963,-0.285],[0.72,-0.686],[1.543,0.226],[1.224,-1.331],[-0.71,-2.118],[-1.501,-0.867],[-0.207,-0.025],[-0.082,0.05],[-1.083,3.23]],"o":[[-1.226,-1.329],[-1.544,0.226],[-0.72,-0.686],[-1.958,-0.285],[-1.338,1.457],[1.085,3.233],[0.072,0.046],[0.248,0],[1.509,-0.873],[0.712,-2.117]],"v":[[8.503,-6.715],[3.569,-8.338],[0,-6.268],[-3.57,-8.338],[-8.504,-6.715],[-9.523,-0.92],[-0.521,8.451],[-0.009,8.623],[0.519,8.451],[9.521,-0.92]],"c":true}},"nm":"パス 1","mn":"ADBE Vector Shape - Group"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"nm":"塗り 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":4,"s":[0,0],"e":[300,300]},{"t":15}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":4,"s":[100],"e":[70]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":10,"s":[70],"e":[0]},{"t":15}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"シェイプ 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":150,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":9,"ty":4,"nm":"heart_01","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[50,49.893,0]},"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":0,"s":[0,0,100],"e":[300,300,100]},{"t":13}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.339,1.458],[1.963,-0.285],[0.72,-0.686],[1.543,0.226],[1.224,-1.331],[-0.71,-2.118],[-1.501,-0.867],[-0.207,-0.025],[-0.082,0.05],[-1.083,3.23]],"o":[[-1.226,-1.329],[-1.544,0.226],[-0.72,-0.686],[-1.958,-0.285],[-1.338,1.457],[1.085,3.233],[0.072,0.046],[0.248,0],[1.509,-0.873],[0.712,-2.117]],"v":[[8.503,-6.715],[3.569,-8.338],[0,-6.268],[-3.57,-8.338],[-8.504,-6.715],[-9.523,-0.92],[-0.521,8.451],[-0.009,8.623],[0.519,8.451],[9.521,-0.92]],"c":true}},"nm":"パス 1","mn":"ADBE Vector Shape - Group"},{"ty":"st","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":0},"lc":1,"lj":1,"ml":4,"nm":"線 1","mn":"ADBE Vector Graphic - Stroke"},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0.8784314,0.5882353,0.8509804,1],"e":[0.9568627,0.9058824,0.5372549,1]},{"t":17}]},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[100],"e":[0]},{"t":17}]},"r":1,"nm":"塗り 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"トランスフォーム"}],"nm":"シェイプ 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group"}],"ip":0,"op":150,"st":0,"bm":0,"sr":1}]}')
    },
    "9f7e": function(t, e, i) {},
    a0d9: function(t, e, i) {
        "use strict";
        var s = i("d225")
          , r = i("308d")
          , a = i("6bb5")
          , n = i("4e2b")
          , o = i("8188")
          , h = function(t) {
            return t <= 1024 ? t + "B" : t <= 1048576 ? parseFloat(t / 1024).toFixed(2) + "KB" : t <= 1073741824 ? parseFloat(t / 1048576).toFixed(2) + "MB" : t <= 1099511627776 ? parseFloat(t / 1073741824).toFixed(2) + "GB" : t <= 0x4000000000000 ? parseFloat(t / 1099511627776).toFixed(2) + "TB" : parseFloat(t / 0x4000000000000).toFixed(2) + "PB"
        };
        i.d(e, "a", (function() {
            return l
        }
        ));
        var l = function(t) {
            function e(t) {
                var i;
                return Object(s["a"])(this, e),
                i = Object(r["a"])(this, Object(a["a"])(e).call(this, t)),
                i.type = "photo",
                i.class = "Photo",
                i.msrc = t.sl,
                i.src = t.bl,
                i.mSize = t.ms ? h(t.ms) : "",
                i.osrc = t.ol || "",
                i.oSize = "".concat(h(parseInt(t.os || 0))),
                i.currentSrc = "src",
                i.frs = t.frs,
                i.faceList = [],
                i.faceState = !1,
                i
            }
            return Object(n["a"])(e, t),
            e
        }(o["a"])
    },
    a55a: function(t, e, i) {
        var s = {
            "./onetext-1.png": "bded",
            "./onetext-2.png": "aad2",
            "./onetext-3.png": "036e7",
            "./onetext-4.png": "a821",
            "./onetext-5.png": "c77f",
            "./onetext-6.png": "d313"
        };
        function r(t) {
            var e = a(t);
            return i(e)
        }
        function a(t) {
            if (!i.o(s, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            return s[t]
        }
        r.keys = function() {
            return Object.keys(s)
        }
        ,
        r.resolve = a,
        t.exports = r,
        r.id = "a55a"
    },
    a821: function(t, e, i) {
        t.exports = i.p + "img/onetext-4.2bcf916b.png"
    },
    aad2: function(t, e, i) {
        t.exports = i.p + "img/onetext-2.dbccd309.png"
    },
    acdc: function(t, e, i) {
        "use strict";
        var s = i("6cce")
          , r = i.n(s);
        r.a
    },
    ad51: function(t, e, i) {},
    ad95: function(t, e, i) {},
    b0b4: function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return n
        }
        ));
        var s = i("85f2")
          , r = i.n(s);
        function a(t, e) {
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                r()(t, s.key, s)
            }
        }
        function n(t, e, i) {
            return e && a(t.prototype, e),
            i && a(t, i),
            t
        }
    },
    b1ec: function(t, e, i) {},
    b534: function(t, e, i) {
        t.exports = i.p + "img/qr.5b3fa01d.png"
    },
    bb9c: function(t, e, i) {},
    bd86: function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return a
        }
        ));
        var s = i("85f2")
          , r = i.n(s);
        function a(t, e, i) {
            return e in t ? r()(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i,
            t
        }
    },
    bded: function(t, e, i) {
        t.exports = i.p + "img/onetext-1.b92f4b12.png"
    },
    c77f: function(t, e, i) {
        t.exports = i.p + "img/onetext-5.c3e8871e.png"
    },
    c927: function(t, e, i) {
        "use strict";
        var s = i("dda4")
          , r = i.n(s);
        r.a
    },
    cc0d: function(t, e, i) {},
    ce0a: function(t, e, i) {},
    d176: function(t, e, i) {
        t.exports = i.p + "img/loading.b8422782.svg"
    },
    d2d5: function(t, e, i) {
        i("1654"),
        i("549b"),
        t.exports = i("584a").Array.from
    },
    d306: function(t, e, i) {},
    d313: function(t, e, i) {
        t.exports = i.p + "img/onetext-6.4af54a2e.png"
    },
    d877: function(t, e, i) {
        "use strict";
        var s = i("036e")
          , r = i.n(s);
        r.a
    },
    da13: function(t, e, i) {},
    dd0c: function(t, e, i) {
        "use strict";
        var s = i("5d7c")
          , r = i.n(s);
        r.a
    },
    dda4: function(t, e, i) {},
    ddeb: function(t, e, i) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("imageBox", {
                staticClass: "album-component-listPhoto",
                attrs: {
                    url: t.item.msrc
                }
            }, [!t.item.isBuy || t.owner || t.$route.params.ver ? t._e() : i("div", {
                staticClass: "album-component-listPhoto-bought",
                attrs: {
                    "primary-background": ""
                }
            }, [i("i", {
                staticClass: "iconfont icon-gou"
            })]), t._t("default")], 2)
        }
          , r = []
          , a = i("cca9")
          , n = {
            name: "listPhoto",
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
                    userInfo: this.getUserInfo(),
                    owner: !1
                }
            },
            mounted: function() {
                if (this.userInfo.id) {
                    var t = this.$parent.$parent.$parent
                      , e = t.album ? t.album.ownerId : t.$parent.album.ownerId;
                    this.owner = this.userInfo.id === e
                }
            },
            methods: {
                getUserInfo: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this
                      , e = t.version;
                    return e || this.getUserInfo(t.$parent)
                }
            },
            components: {
                imageBox: a["a"]
            }
        }
          , o = n
          , h = (i("0302"),
        i("2877"))
          , l = Object(h["a"])(o, s, r, !1, null, null, null);
        e["a"] = l.exports
    },
    de43: function(t, e, i) {
        "use strict";
        var s = i("da13")
          , r = i.n(s);
        r.a
    },
    e6e3: function(t, e, i) {},
    ed35: function(t, e, i) {},
    f1ae: function(t, e, i) {
        "use strict";
        var s = i("86cc")
          , r = i("4630");
        t.exports = function(t, e, i) {
            e in t ? s.f(t, e, r(0, i)) : t[e] = i
        }
    },
    f50f: function(t, e, i) {},
    f670: function(t, e, i) {
        "use strict";
        var s = i("7c35")
          , r = i.n(s);
        r.a
    },
    f8bd: function(t, e, i) {
        "use strict";
        var s = i("7618")
          , r = (i("96cf"),
        i("3b8d"))
          , a = i("94f1")
          , n = i.n(a)
          , o = function(t) {
            return new Promise((function(e, i) {
                var s = new XMLHttpRequest;
                s.open("HEAD", t, !1),
                s.send(null),
                200 === s.status ? e() : i(new Error)
            }
            ))
        }
          , h = i("bc3a")
          , l = i.n(h);
        e["a"] = function() {
            var t = Object(r["a"])(regeneratorRuntime.mark((function t(e, i) {
                var r, a, h = arguments;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            if (r = h.length > 2 && void 0 !== h[2] ? h[2] : {},
                            a = null,
                            "object" !== Object(s["a"])(i)) {
                                t.next = 6;
                                break
                            }
                            a = i,
                            t.next = 17;
                            break;
                        case 6:
                            return t.prev = 6,
                            t.next = 9,
                            o(i);
                        case 9:
                            return t.next = 11,
                            l.a.get(i);
                        case 11:
                            a = t.sent,
                            a = a.data,
                            t.next = 17;
                            break;
                        case 15:
                            t.prev = 15,
                            t.t0 = t["catch"](6);
                        case 17:
                            return t.prev = 17,
                            t.abrupt("return", n.a.loadAnimation(Object.assign({
                                name: "topBg",
                                renderer: "svg",
                                loop: !0,
                                autoplay: !0
                            }, r, {
                                container: e,
                                animationData: a
                            })));
                        case 21:
                            t.prev = 21,
                            t.t1 = t["catch"](17),
                            console.warn(t.t1);
                        case 24:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, null, [[6, 15], [17, 21]])
            }
            )));
            return function(e, i) {
                return t.apply(this, arguments)
            }
        }()
    },
    f9215: function(t, e, i) {
        t.exports = i.p + "img/text-6.76151a1c.png"
    },
    fcf6: function(t, e, i) {
        "use strict";
        var s = i("ce0a")
          , r = i.n(s);
        r.a
    }
}]);
