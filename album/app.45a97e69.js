(function(e) {
    function t(t) {
        for (var a, o, c = t[0], s = t[1], u = t[2], l = 0, d = []; l < c.length; l++)
            o = c[l],
            Object.prototype.hasOwnProperty.call(i, o) && i[o] && d.push(i[o][0]),
            i[o] = 0;
        for (a in s)
            Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
        f && f(t);
        while (d.length)
            d.shift()();
        return r.push.apply(r, u || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], a = !0, o = 1; o < n.length; o++) {
                var c = n[o];
                0 !== i[c] && (a = !1)
            }
            a && (r.splice(t--, 1),
            e = s(s.s = n[0]))
        }
        return e
    }
    var a = {}
      , o = {
        app: 0
    }
      , i = {
        app: 0
    }
      , r = [];
    function c(e) {
        return s.p + "js/" + ({
            "album~albumset~midAutumn": "album~albumset~midAutumn",
            "album~albumset": "album~albumset",
            albumset: "albumset",
            "album~findMeResult": "album~findMeResult",
            album: "album",
            midAutumn: "midAutumn",
            "analysis~editlanguage~finMeHistory~findMeResult~uploadFace": "analysis~editlanguage~finMeHistory~findMeResult~uploadFace",
            analysis: "analysis",
            editlanguage: "editlanguage",
            "finMeHistory~findMeResult~uploadFace": "finMeHistory~findMeResult~uploadFace",
            findMeResult: "findMeResult",
            finMeHistory: "finMeHistory",
            uploadFace: "uploadFace",
            clearCache: "clearCache",
            feedback: "feedback",
            finMe: "finMe",
            page404: "page404",
            short: "short",
            test: "test"
        }[e] || e) + "." + {
            "album~albumset~midAutumn": "6d00841a",
            "album~albumset": "d0267132",
            albumset: "2f0bdd1d",
            "album~findMeResult": "be4c9324",
            album: "9d919666",
            midAutumn: "f0b6ee6f",
            "analysis~editlanguage~finMeHistory~findMeResult~uploadFace": "83cee952",
            analysis: "06aa9ef2",
            editlanguage: "d8603b2a",
            "finMeHistory~findMeResult~uploadFace": "398f6c06",
            findMeResult: "1746d4da",
            finMeHistory: "73be7bbb",
            uploadFace: "61b45dee",
            clearCache: "5f540f85",
            feedback: "d5ac34f4",
            finMe: "111a0442",
            page404: "7f2e1023",
            short: "04f1df04",
            test: "014d1078"
        }[e] + ".js"
    }
    function s(t) {
        if (a[t])
            return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s),
        n.l = !0,
        n.exports
    }
    s.e = function(e) {
        var t = []
          , n = {
            "album~albumset~midAutumn": 1,
            "album~albumset": 1,
            albumset: 1,
            "album~findMeResult": 1,
            album: 1,
            midAutumn: 1,
            analysis: 1,
            editlanguage: 1,
            "finMeHistory~findMeResult~uploadFace": 1,
            findMeResult: 1,
            finMeHistory: 1,
            uploadFace: 1,
            feedback: 1,
            page404: 1,
            test: 1
        };
        o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise((function(t, n) {
            for (var a = "css/" + ({
                "album~albumset~midAutumn": "album~albumset~midAutumn",
                "album~albumset": "album~albumset",
                albumset: "albumset",
                "album~findMeResult": "album~findMeResult",
                album: "album",
                midAutumn: "midAutumn",
                "analysis~editlanguage~finMeHistory~findMeResult~uploadFace": "analysis~editlanguage~finMeHistory~findMeResult~uploadFace",
                analysis: "analysis",
                editlanguage: "editlanguage",
                "finMeHistory~findMeResult~uploadFace": "finMeHistory~findMeResult~uploadFace",
                findMeResult: "findMeResult",
                finMeHistory: "finMeHistory",
                uploadFace: "uploadFace",
                clearCache: "clearCache",
                feedback: "feedback",
                finMe: "finMe",
                page404: "page404",
                short: "short",
                test: "test"
            }[e] || e) + "." + {
                "album~albumset~midAutumn": "afb63cbd",
                "album~albumset": "52201117",
                albumset: "70f39584",
                "album~findMeResult": "f5bab970",
                album: "e653c664",
                midAutumn: "470d9785",
                "analysis~editlanguage~finMeHistory~findMeResult~uploadFace": "31d6cfe0",
                analysis: "842c6e86",
                editlanguage: "de3d7c73",
                "finMeHistory~findMeResult~uploadFace": "c0fc6c34",
                findMeResult: "fe1d5692",
                finMeHistory: "cccdb9b3",
                uploadFace: "8ac2eaa7",
                clearCache: "31d6cfe0",
                feedback: "7fba8bff",
                finMe: "31d6cfe0",
                page404: "28e39e0d",
                short: "31d6cfe0",
                test: "1740797b"
            }[e] + ".css", i = s.p + a, r = document.getElementsByTagName("link"), c = 0; c < r.length; c++) {
                var u = r[c]
                  , l = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === a || l === i))
                    return t()
            }
            var d = document.getElementsByTagName("style");
            for (c = 0; c < d.length; c++) {
                u = d[c],
                l = u.getAttribute("data-href");
                if (l === a || l === i)
                    return t()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet",
            f.type = "text/css",
            f.onload = t,
            f.onerror = function(t) {
                var a = t && t.target && t.target.src || i
                  , r = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                r.code = "CSS_CHUNK_LOAD_FAILED",
                r.request = a,
                delete o[e],
                f.parentNode.removeChild(f),
                n(r)
            }
            ,
            f.href = i;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(f)
        }
        )).then((function() {
            o[e] = 0
        }
        )));
        var a = i[e];
        if (0 !== a)
            if (a)
                t.push(a[2]);
            else {
                var r = new Promise((function(t, n) {
                    a = i[e] = [t, n]
                }
                ));
                t.push(a[2] = r);
                var u, l = document.createElement("script");
                l.charset = "utf-8",
                l.timeout = 120,
                s.nc && l.setAttribute("nonce", s.nc),
                l.src = c(e);
                var d = new Error;
                u = function(t) {
                    l.onerror = l.onload = null,
                    clearTimeout(f);
                    var n = i[e];
                    if (0 !== n) {
                        if (n) {
                            var a = t && ("load" === t.type ? "missing" : t.type)
                              , o = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + a + ": " + o + ")",
                            d.name = "ChunkLoadError",
                            d.type = a,
                            d.request = o,
                            n[1](d)
                        }
                        i[e] = void 0
                    }
                }
                ;
                var f = setTimeout((function() {
                    u({
                        type: "timeout",
                        target: l
                    })
                }
                ), 12e4);
                l.onerror = l.onload = u,
                document.head.appendChild(l)
            }
        return Promise.all(t)
    }
    ,
    s.m = e,
    s.c = a,
    s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(e, t) {
        if (1 & t && (e = s(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (s.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                s.d(n, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return n
    }
    ,
    s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return s.d(t, "a", t),
        t
    }
    ,
    s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    s.p = "https://ms.alltuu.com/",
    s.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var u = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = u.push.bind(u);
    u.push = t,
    u = u.slice();
    for (var d = 0; d < u.length; d++)
        t(u[d]);
    var f = l;
    r.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "0439": function(e, t, n) {
        "use strict";
        n("ac6a"),
        n("456d");
        var a = n("7601")
          , o = n("94d5");
        function i(e, t, n) {
            e[t] = n,
            Object(a["c"])(t, n)
        }
        function r(e, t) {
            if (window.isArray(e))
                return e.length > t && e.shift(),
                e;
            var n = null
              , a = 1 / 0
              , o = 0;
            for (var i in e)
                e[i].overflow_index = e[i].overflow_index || Object.keys(e).length - 1,
                e[i].overflow_index < a && (n = i,
                a = e[i].overflow_index),
                o++;
            return o > t && delete e[n],
            o > t && (e = r(e, t)),
            e
        }
        t["a"] = {
            SAVE_USERINFO: function(e, t) {
                i(e, "userInfo", t)
            },
            SAVE_SIGNOUT: function(e) {
                i(e, "userInfo", {})
            },
            SAVE_LANGUAGE: function(e, t) {
                i(e, "language", t)
            },
            SAVE_RESOURCES_STATE: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                e["resourcesState"] = t
            },
            SAVE_STATISTICS: function(e, t) {
                i(e, "statisticsPack", t)
            },
            SAVE_COMMENT_LIKED: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = t.actId
                  , a = t.commentId
                  , c = o["a"].getAlbumState(e);
                c[n] || (c[n] = {}),
                c[n].commentLiked || (c[n].commentLiked = []);
                var s = c[n].commentLiked.indexOf(a);
                s < 0 ? c[n].commentLiked.push(a) : c[n].commentLiked.splice(s, 1),
                i(e, "albumState", r(c, 20))
            },
            SAVE_BARRAGE_CONFIG: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = t.actId
                  , a = t.config
                  , c = o["a"].getAlbumState(e);
                c[n] || (c[n] = {}),
                c[n].barrage = a,
                c[n].barrage.date = (new Date).getTime(),
                i(e, "albumState", r(c, 20))
            },
            SAVE_ENTER_ALBUM_TIME: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = o["a"].getAlbumState(e);
                n[t] || (n[t] = {}),
                n[t].enterTime = (new Date).getTime(),
                i(e, "albumState", r(n, 20))
            },
            SAVE_SIDEAD_OPEN: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = o["a"].getAlbumState(e);
                n[t] || (n[t] = {}),
                n[t].sideAd = !0,
                i(e, "albumState", r(n, 20))
            },
            SAVE_FAVORITE_OPEN: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = o["a"].getAlbumState(e);
                n[t] || (n[t] = {}),
                n[t].favorite = !0,
                i(e, "albumState", r(n, 20))
            },
            SAVE_PASSWORD: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = t.actId
                  , a = t.password
                  , c = o["a"].getAlbumState(e);
                c[n] || (c[n] = {}),
                c[n].password = a,
                i(e, "albumState", r(c, 20))
            },
            DELETE_PASSWORD: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = t.actId
                  , a = o["a"].getAlbumState(e);
                a[n] || (a[n] = {}),
                delete a[n].password,
                i(e, "albumState", r(a, 20))
            },
            SAVE_PAGEVIEWS: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = t.actId
                  , a = t.pageviews
                  , c = o["a"].getAlbumState(e);
                c[n] || (c[n] = {}),
                c[n].pageviews = a,
                i(e, "albumState", r(c, 20))
            },
            SAVE_JETLAG: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                i(e, "jetlag", t)
            }
        }
    },
    "084f": function(e, t, n) {},
    "225c": function(e, t, n) {
        "use strict";
        var a = n("4360")
          , o = n("94d5");
        t["a"] = function() {
            return o["a"].getStatistics(a["a"].state)
        }
    },
    "2b83": function(e, t, n) {
        "use strict";
        n("96cf");
        var a = n("3b8d")
          , o = n("4360")
          , i = n("94d5")
          , r = n("0439");
        t["a"] = function() {
            var e = Object(a["a"])(regeneratorRuntime.mark((function e(t, n) {
                var a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return a = i["a"].getResourcesState(o["a"].state),
                            e.abrupt("return", new Promise((function(e, s) {
                                if ("success" !== a[n.src || n.href]) {
                                    for (var u = document.getElementsByTagName(t), l = !1, d = 0, f = u.length; d < f; d++)
                                        if (c(n, u[d])) {
                                            l = !0;
                                            break
                                        }
                                    if (l)
                                        var p = setInterval((function() {
                                            a = i["a"].getResourcesState(o["a"].state),
                                            "success" === a[n.src || n.href] && (clearInterval(p),
                                            e()),
                                            "error" === a[n.src || n.href] && (clearInterval(p),
                                            s(new Error("加载错误")))
                                        }
                                        ), 300);
                                    else
                                        try {
                                            a[n.src || n.href] = "loading",
                                            r["a"].SAVE_RESOURCES_STATE(a);
                                            var m = document.createElement(t);
                                            for (var h in n)
                                                m[h] = n[h];
                                            m.onload = function() {
                                                a[n.src || n.href] = "success",
                                                r["a"].SAVE_RESOURCES_STATE(a),
                                                e()
                                            }
                                            ,
                                            m.onerror = function(e) {
                                                a[n.src || n.href] = "error",
                                                r["a"].SAVE_RESOURCES_STATE(a),
                                                console.log(e),
                                                s(e)
                                            }
                                            ,
                                            document.body.appendChild(m)
                                        } catch (g) {
                                            s(g)
                                        }
                                } else
                                    e()
                            }
                            )));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }();
        var c = function(e, t) {
            var n = !0;
            for (var a in e)
                if (e[a] !== t[a]) {
                    n = !1;
                    break
                }
            return n
        }
    },
    "2e42": function(e) {
        e.exports = JSON.parse('{"components":{"livePlayer":{"countdown1":"距離直播開始：{s}秒","countdown2":"距離直播開始：{m}分{s}秒","countdown3":"距離直播開始：{h}小時{m}分{s}秒","countdown4":"距離直播開始：{d}天{h}小時{m}分{s}秒","comingSoon":"視頻直播暫未開始，敬請期待…","flush":"刷新重試","reReload":"直播信號已中斷， 請刷新重試","interrupt":"直播中斷","GenerateAReplay":"視頻直播已結束，正在生成回放視頻…","finished":"視頻直播已結束…"},"liveMenu":{"notStarted":"未開始","playBack":"回放","completed":"已結束","live":"直播"}},"module":{"date":{"toNowDate":{"second":"{date}秒","minute":"{date}分钟前","hour":"{date}小時前","day":"{date}天前","month":"{date}月前","year":"{date}年前"}}},"album":{"findme":"找我","homepage":"主會場","personal":"我的","reserve":"預約","order":"升序","inverse":"降序","password":{"title":"請輸入相冊訪問密碼","input":"請輸入密碼","enter":"確定","jump":"該相冊已訪問，可跳過密碼","error":"密碼錯誤,請重新輸入","verify":"格式不正確，密碼為4-8位數字或字母"},"pageTitle":{"图片直播":"圖片直播","喔图云摄影":"喔圖雲攝影","闪传直播平台":"閃傳直播平台"},"albumInfo":{"pageviews":"已有 <span primary-color>{count}</span> 人次瀏覽了此相冊","detail":"簡介","introduction":"活动详情","directions":"到这里"},"navigation":{"live":"圖片直播","hot":"熱門","video":"視頻","comment":"評論","moreAnnualMeeting":"更多資訊","interactiveUpload":"互動上傳","customize":{"1010062553":"更多資訊","1012367633":"總相冊","1033174408":"善行浙裡"}},"nullData":{"live":"直播即將開始，敬請期待","hot":"暫無熱門照片","video":"暫無視頻，敬请期待","comment":"暫無評論"},"scrollList":{"loading":"数据加载中,请稍后","end":"到底了"},"sideBar":{"refresh":"刷新","order":"升序","inverse":"降序"},"bottomAd":{"点我了解喔图云摄影":"點我了解圖片直播","点我使用传开放平台":"點我使用閃傳直播平台","立即预约拍摄":"立即預約拍攝","点我了解图片直播":"點我了解圖片直播","点我使用闪传直播平台":"點我使用閃傳直播平台"},"liveCount":"{count}張新照片","bigImage":{"size":"當前照片{size}，可長按保存","atFirst":"已經是第壹張了","atEnd":"已經是最後壹張了"},"barrage":{"title":"彈幕設置","setting":"彈幕設置","opacity":"背景透明度","display":"顯示區域","reset":"恢復默認","close":"關閉彈幕","open":"開啟彈幕"},"comment":{"title":"相冊評論","post":"提交","add":"添加評論...","cancel":"取消","report":"舉報","reply":"回復","maintenance":"評論功能正在維護中","empty":"暫時還沒有評論哦"},"poster":{"进入直播相册":"進入直播相冊","进入喔图云摄影":"進入喔圖云攝影","进入闪传直播":"進入閃傳直播"},"favorite":{"ok":"好的"},"bigImageLayer":{"buyPhoto":"付費獲取大圖","load":"查看大圖({size})","loading":"加載中","collect":"收藏","comment":"評論","share":"分享","like":"{count}人喜歡","likeGuide":"覺得照片不錯！","likeError":"點贊出錯了，請重新點贊","longPressSave":"可長按保存圖片","clickAvatar":"點擊頭像查看人臉","collectionFailed":"收藏失敗， 請先購買照片","commentSuccess":"評論成功","commentWaitForReview":"評論成功,等待審核","commentFailed":"評論失敗"},"face":{"finding":"正在識別人臉","notFound":"未檢測到人臉","found":"智能引擎已檢索到<br><span>{count}</span> 張人臉"},"notify":{"reportSuccess":"舉報成功","tooBusy":"操作太快了","actionFail":"操作失敗"},"jigsaw":{"jigsaw":"拼圖","canNotSurpass":"拼圖張數不能超過{count}張","longPressToSaveJigsaw":"長按圖片保存至手機","loadingResoure":"正在加載資源","computedLayout":"計算布局","jigsawProcessing":"拼圖中","export":"導出圖片","loadDefeatRemoveImg":"有圖片加載失敗，拼圖時將移除該圖片","jigsawErrorReload":"圖片拼接出錯,請重試","notSupportJigsaw":"您的瀏覽器不支持拼圖","jigsawName":"拼圖名稱","jigsawNameStyle":"拼圖樣式","jigsawStart":"開始拼圖","jigsawSelectBigImgStyle":"選擇大圖樣式","jigsawJoint":"拼接","jigsawLattice":"宮格","jigsawPoster":"海報","jigsawNineGrids":"九宮格","jigsawGif":"動圖","jigsawClassic":"經典","alibaba20th":"20週年","jigsawNext":"下壹步","jigsawAlsoChoose":"已選擇{count1}張照片,還可以選擇{count2}張","jigsawPleaseSelectPhotos":"請選擇照片","selectMoreThan":"九宮格拼圖數量不能少於{count}張呦","pleaseChooseTheType":"選擇GIF圖類型","horizontal":"橫圖","vertical":"豎圖","sure":"確定","cancel":"取消","thereCanInputTitle":"這裏可以輸入拼圖標題哦(最多{count}個字)","gonggeNotSingular":"宮格拼圖數量不能為單數呦"},"video":{"download":"下載","report":"舉報","longPressQRDownloadVideo":"長按識別小程序碼(微信中)，開始下載視頻","reportSuccess":"舉報成功","pleaseOpenPageInWeChat":"請在微信頁面中打開/下載視頻"},"pecket":{"enterCode":"請輸入口令","hasBeenReceived":"該紅包已領完","isBeingOpened":"{count}個紅包正在開搶中","openAt":"距離紅包開搶還有","allPecketHasBeenReceived":"口令紅包已全部被領完","pecketFrom":"來自","unit":"元","gotoOfficialAccounts":"請前往公眾號領取","justOpen":"馬上搶","continue":"繼續搶紅包","details":"查看詳情","opening":"正在搶...","youHasBeenReceived":"已領取過該紅包"},"buyAlbumPhoto":{"purchased":"已購買","needToPay":"下載該照片總計需支付","saveHdAfterPay":"支付後可保存高清圖","payNow":"立即支付","downloadRule01":"應版權方要求，該照片需付費後觀看下載，壹經購買，概不退款。","downloadRule02":"已購買的照片可在“我的”-“我購買的照片”中查看。"},"mainMeeting":{"gotoMainMeeting":"前往主會場頁面","curAlbum":"當前相冊"},"layout":{"feed":"瀑布流","time":"時間線","grids":"宮格式"},"exif":{"fileSize":"文件大小","shootingTime":"拍攝時間","number":"文件編號","Photographer":"攝影師","Retoucher":"修圖師","ID":"圖片ID"},"findMe":{"findMe":"找我","confirmSelect":"確定查找","reUpload":"重新上傳","tryAgain":"重新上傳","uploadHint":"上傳單人正面照片，非正面角度或人物偏小都會影響精準度","youMaybeWant":"您可能想找的是","noHistoryHint":"上傳單人正面照片，找到此人所有圖片","noHistoryTile":"人臉識別","startScan":"開啟人臉識別","scaning":"人臉識別中","forYouFind":"為您搜索到{count}張照片","moreLikePhoto":"更多相似照片","cancel":"取消","confirm":"確定","savePhoto":"保存照片","batchSave":"批量保存","jigsaw":"拼圖","backAlbum":"返回相冊","nolike":"抱歉，沒有查找到相似照片~","saveToAiPhoto":"圖片已成功保存到AI智能相冊","longPressForSave":"長按進入智能相冊","curPhotoNotLike":"當前人臉沒有找到相似照片~","backAlbumBtn":"返回相冊","placeCheckWay":"選擇圖片檢索方式","faceScan":"人臉識別","numberScan":"號碼識別","faceHint":"上傳照片，智能檢索人臉圖片","numberHint":"輸入號碼，智能檢索號碼圖片","free30day":"（免費保存30天）","youCanSavePhotoToAiPhoto":"保存照片至您的智能相冊","loading":"正在轉存..."},"qrShare":{"albumQr":"相冊二維碼","scanCode":"掃碼查看此相冊","save":"長按二維碼保存到本地"}}}')
    },
    3264: function(e, t, n) {
        "use strict";
        var a = n("d225")
          , o = n("308d")
          , i = n("6bb5")
          , r = n("4e2b")
          , c = function e(t, n) {
            Object(a["a"])(this, e),
            this.actIde = t || 0,
            this.sepIde = n || 0,
            this.time = (new Date).getTime()
        }
          , s = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId, s = e.from;
                Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 1;
                var u = 0;
                switch (s) {
                case "timeline":
                    u = 1;
                    break;
                case "singlemessage":
                    u = 2;
                    break;
                case "groupmessage":
                    u = 3;
                    break;
                case "appmessage":
                    u = 4;
                    break;
                case "dingding":
                    u = 5;
                    break;
                case "qrCode":
                    u = 6;
                    break
                }
                return n.from = u,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , u = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 2,
                n.tt = 1,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , l = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 3,
                n.at = 1,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , d = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId, s = e.pc;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 4,
                n.pc = s,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , f = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId, s = e.pc;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 5,
                n.pc = s,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , p = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 6,
                n.uvIndex = window.guid,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , m = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 7,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , h = (n("7f7f"),
        function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId, s = e.name, u = e.total, l = e.errorCode;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 9,
                n.name = s,
                n.total = u,
                n.errorCode = l,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c))
          , g = n("4360")
          , v = n("94d5")
          , b = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 10,
                n.vtt = parseInt(((new Date).getTime() - v["a"].getAlbumState(g["a"].state)[r].enterTime) / 1e3),
                console.warn("您访问".concat(r, "相册，耗时").concat(n.vtt, "秒")),
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , w = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 11,
                n.mt = 1,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , y = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 12,
                n.ft = 1,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , O = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 13,
                n.st = 1,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , j = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 14,
                n.pt = 1,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , S = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId, s = e.from;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 15,
                n.from = s,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , P = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 16,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , A = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId, s = e.pc;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 17,
                n.pc = s,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , k = function(e) {
            function t(e) {
                var n, r = e.actId, c = e.sepId;
                return Object(a["a"])(this, t),
                n = Object(o["a"])(this, Object(i["a"])(t).call(this, r, c)),
                n.model = 18,
                n
            }
            return Object(r["a"])(t, e),
            t
        }(c)
          , I = {
            Pack1: s,
            Pack2: u,
            Pack3: l,
            Pack4: d,
            Pack5: f,
            Pack6: p,
            Pack7: m,
            Pack9: h,
            Pack10: b,
            Pack11: w,
            Pack12: y,
            Pack13: O,
            Pack14: j,
            Pack15: S,
            Pack16: P,
            Pack17: A,
            Pack18: k
        }
          , M = n("225c")
          , R = n("0439");
        t["a"] = function(e, t) {
            var n = Object(M["a"])();
            n.packs.length < 1 && (n.time = (new Date).getTime());
            var a = new (I["Pack".concat(e)])(t);
            n.packs.push(a),
            n.packs.length > 50 && n.packs.shift(),
            R["a"].SAVE_STATISTICS(g["a"].state, n)
        }
    },
    3773: function(e, t, n) {
        "use strict";
        n("a481"),
        n("20d6");
        var a = n("4360")
          , o = n("94d5")
          , i = n("4207")
          , r = (n("6b54"),
        n("87b3"),
        n("ac6a"),
        n("456d"),
        n("55dd"),
        n("72fe"))
          , c = n.n(r)
          , s = n("1132")
          , u = n.n(s)
          , l = n("1abe")
          , d = n.n(l)
          , f = n("c198")
          , p = n.n(f)
          , m = n("f8d5")
          , h = n.n(m)
          , g = n("ace7")
          , v = function(e) {
            for (var t = "", n = Object.keys(e).sort(), a = 0, o = n.length; a < o; a++)
                t += "/" + e[n[a]];
            return c()(t)
        }
          , b = function(e, t) {
            for (var n = parseInt(Object(i["a"])() / 1e3 + 900), a = "", o = Object.keys(t).sort(), r = 0, c = o.length; r < c; r++)
                a += "/".concat(o[r]).concat(t[o[r]]);
            var s = "GET\n\n\n".concat(n, "\n/").concat(e).concat(a)
              , l = encodeURIComponent(u.a.stringify(d()(s, S("U2FsdGVkX18/r1r+bXSFIV/ELc12pQv2T6nrn7BUzaNRhLIkPGJYZk1xMIeQGQL0"))))
              , f = ""
              , p = {
                OSSAccessKeyId: S("U2FsdGVkX18tbICk0Uozsd4we8BThmHjyiEEahwrdS1LZxDxsxpnSSm5V09+8iZq"),
                Expires: n,
                Signature: l
            };
            for (var m in p)
                f += "".concat(f ? "&" : "?").concat(m, "=").concat(p[m]);
            return {
                fileName: a,
                param: f
            }
        }
          , w = function(e, t) {
            return O(e, t, "V3")
        }
          , y = function(e, t) {
            return O(e, t, "V4")
        }
          , O = function(e, t, n) {
            for (var a = parseInt(Object(i["a"])() / 1e3).toString(16), o = Object.keys(t).sort(), r = 0, s = o.length; r < s; r++)
                e += "/".concat(o[r]).concat(t[o[r]]);
            var u = "".concat(S(Object({
                NODE_ENV: "production",
                VUE_APP_ENV: "production",
                VUE_APP_ENV_File: "production",
                VUE_APP_V3_CDN_PRIVATE_KEY: "U2FsdGVkX1+cq7PgVT8tJOhwO2fnjWo3oHZndLk6FS51b3SxVBAZDRZxxR5hJdUB",
                VUE_APP_V4_CDN_PRIVATE_KEY: "U2FsdGVkX1/RHqKc0135wfhB8aC8EMZBFnuYbMFdiVMzcOIwnW3sM6q73ad7Fitg6YLa+czXlCcL9J5ijLVXSg==",
                VUE_APP_OSS_ACCESS_KEY_ID: "U2FsdGVkX18tbICk0Uozsd4we8BThmHjyiEEahwrdS1LZxDxsxpnSSm5V09+8iZq",
                VUE_APP_OSS_ACCESS_KEY_SECRET: "U2FsdGVkX18/r1r+bXSFIV/ELc12pQv2T6nrn7BUzaNRhLIkPGJYZk1xMIeQGQL0",
                VUE_APP_WECHAT_APP_ID: "wx776c524e5ccccd55",
                VUE_APP_DINGTALK_APP_ID: "dingoady8wuxikfcwayvpz",
                VUE_APP_WECHAT_APP_ID_MINES: "wx7fb24a0fe67ed873",
                VUE_APP_WEIBO_APP_ID: "1346240843",
                VUE_APP_TENCENT_CAPTCHA_APP_ID: "2086678624",
                BASE_URL: "https://ms.alltuu.com/"
            })["VUE_APP_".concat(n, "_CDN_PRIVATE_KEY")])).concat(e).concat(a)
              , l = c()(u).toString();
              console.log(u);
            return "".concat(g["".concat(n, "CDomainName")], "/").concat(l, "/").concat(a).concat(e)
        }
          , j = "S35GDtvgO5KVkmV2hfX6klYOH3xYIDqP";
        function S(e) {
            return p.a.decrypt(e, j).toString(h.a)
        }
        var P = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "v1"
              , n = arguments.length > 2 ? arguments[2] : void 0;
            return "v3" === t || "v4" === t ? k(e) : "fv2" === t ? I(n, e) : "v3c" === t ? M(n, e) : "v4c" === t ? R(n, e) : "v4o" === t ? C(n, e) : void 0
        }
          , A = function() {
            return o["a"].getUserInfo(a["a"].state).token || "null"
        }
          , k = function(e) {
            var t = {
                from: 1,
                version: "0",
                token: A(),
                timestamp: Object(i["a"])()
            };
            Object.assign(t, e);
            var n = v(t);
            return {
                signature: "v".concat(t.from, "-").concat(t.timestamp, "-").concat(t.token, "-").concat(t.version, "-").concat(n),
                obj: t
            }
        }
          , I = function(e, t) {
            var n = ["/fr/search"]
              , a = {
                from: 1,
                version: "2",
                token: A(),
                timestamp: Object(i["a"])()
            };
            n.findIndex((function(t) {
                return e.indexOf(t) > -1
            }
            )) > -1 && (a.version = "4"),
            Object.assign(a, t);
            var o = v(a);
            return {
                signature: "v".concat(a.from, "-").concat(a.timestamp, "-").concat(a.token, "-").concat(a.version, "-").concat(o),
                obj: a
            }
        }
          , M = function(e, t) {
            return w(e.replace(g["V3CDomainName"], ""), t)
        }
          , R = function(e, t) {
            return y(e.replace(g["V4CDomainName"], ""), t)
        }
          , C = function(e, t) {
            var n = b(e.replace(g["V4ODomainName"], g["V4OBacketMap"][g["V4ODomainName"]]), t)
              , a = n.fileName
              , o = n.param;
            return "".concat(e).concat(a).concat(o)
        };
        t["a"] = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 ? arguments[2] : void 0
              , a = "v1";
            (e.indexOf("rest/v3/") >= 0 || e.indexOf("https://biu.") >= 0) && (a = "v3"),
            e.indexOf("/rest/v3c/") >= 0 && (a = "v3c"),
            e.indexOf("ai.") >= 0 && (a = "fv2"),
            e.indexOf("/rest/v4/") >= 0 && (a = "v4"),
            e.indexOf("/rest/v4c/") >= 0 && (a = "v4c"),
            e.indexOf("/rest/v4o/") >= 0 && (a = "v4o"),
            n = n || t;
            var o = P(n, a, e);
            window.UURRLL = o;
            if (!o)
                return e;
            if ("v4c" === a || "v4o" === a || "v3c" === a)
                return o;
            for (var i in t)
                e += "/" + i + t[i];
            return e + "/" + o.signature
        }
    },
    "3b65": function(e) {
        e.exports = JSON.parse('{"components":{"livePlayer":{"countdown1":"время начала прямой трансляции: {s} секунд","countdown2":"начало прямой трансляции: {m} минута {s} секунда","countdown3":"начало прямой трансляции: {h} час {m} минута {s} секунда","countdown4":"начало прямой трансляции: {d} день {h} час {m} минута {s} секунд","comingSoon":"видео в прямом эфире пока не началось.","flush":"Обновить","reReload":"сигнал прямой трансляции прерван, повторите попытку","interrupt":"прямое прерывание","GenerateAReplay":"видео в прямом эфире завершено, создаётся воспроизведение видео...","finished":"видео в прямом эфире закончено..."},"liveMenu":{"notStarted":"Начало","playBack":"воспроизведение","completed":"конец","live":"прямой трансляция"}},"module":{"date":{"toNowDate":{"second":"только что","minute":"{date} время","hour":"{date} Это я","day":"{date} день","month":"{date}  за месяц","year":"{date} год назад"}}},"album":{"findme":"Найти меня","homepage":"Основное место","personal":"мой","reserve":"абонемент","order":"повышение порядка","inverse":"убывающий порядок","password":{"title":"Введите пароль для доступа к альбому","input":"Введите пароль","enter":"определение ","jump":"альбом доступен, можно пропустить пароль","error":"ошибка пароля, повторите ввод","verify":"Неверный формат, пароль - 4 - 8 цифр или букв"},"pageTitle":{"图片直播":"Прямая трансляция фото","喔图云摄影":"фотографическая платформа Alltuu","闪传直播平台":"Платформа для прямой трансляции  с высокой скоростью передачи"},"albumInfo":{"pageviews":"Уже <span primary-color>{count}</span> человек посмотрел этот альбом","detail":"Введение","introduction":"Подробности деятельности","directions":"сюда"},"navigation":{"live":"Прямая трансляция фото","hot":"Популярные","hot1010062553":"Популярные","video":"Видео","comment":" Комментарии","moreAnnualMeeting":"Дополнительная информация","interactiveUpload":""},"nullData":{"live":"Прямая трансляция скоро начнется, так что подождите","hot":"Нет популярных фотографий","video":"Пока нет","comment":"Пока нет комментариев"},"scrollList":{"loading":"Загрузка данных, пожалуйста, позже","end":"до конца"},"sideBar":{"refresh":"Обновить","order":"Положительный","inverse":"обратный"},"bottomAd":{"点我了解喔图云摄影":"Нажмите здесьчтобы познакомиться с облачной фотографической платформой Alltuu","点我使用传开放平台":"точка, которую я использую для открытия платформы","立即预约拍摄":"немедленная съемка"},"liveCount":"{count} новое фото","bigImage":{"size":"size:{size}, Long press to save.","atFirst":"уже первый","atEnd":"уже последний."},"barrage":{"title":"Настройка заграждения ","setting":"Настройка заграждения ","opacity":"Прозрачность фона","display":"область отображения","reset":"восстановить по умолчанию","close":"близко","open":"отпирание завесы"},"comment":{"title":"Комментарии","post":"Представить","add":"Добавить комментарий","cancel":"Отменить","report":"все","reply":"ответ","maintenance":"функция комментариев находится в процессе обслуживания","empty":"Пока нет комментариев"},"poster":{"进入直播相册":"перейти в прямом эфире","进入喔图云摄影":"вход в фотографию","进入闪传直播":"прямой доступ"},"favorite":{"ok":"Хорошо."},"bigImageLayer":{"buyPhoto":"получение больших карт за плату","load":"Большая картина({size})","loading":"погрузка...","collect":"собирать","comment":"Комментарии","share":"доля","like":"{count} лайков","likeGuide":"хороший снимок!","likeError":"что - то пошло не так","longPressSave":"Сохранить изображение","clickAvatar":"смотреть на лицо","collectionFailed":"Не удалось собрать, пожалуйста, сначала купите фотографии","commentSuccess":"успешно комментировать","commentWaitForReview":"Комментарий выполнен, ожидается аудит","commentFailed":"ошибка комментариев"},"face":{"finding":"опознавать лицо","notFound":"лицо не обнаружено","found":"Найдено<br><span>{count}</ span>лиц"},"notify":{"reportSuccess":"Спасибо!","tooBusy":"операция слишком быстрая","actionFail":"Ошибка операции"},"jigsaw":{"jigsaw":"Начать собирать мозаику","canNotSurpass":"Количество фото для мозаики не может превышать {count}","longPressToSaveJigsaw":"Длительно нажмите на изображение, чтобы сохранить на телефон","loadingResoure":"Загрузка ресурсов","computedLayout":"Загрузка ресурсов","jigsawProcessing":"Образование мозаики","export":"экспортировать рисунок","loadDefeatRemoveImg":"Ошибка загрузки рисунка, при удалении мозаики","jigsawErrorReload":"Ошибка соединения изображений, повторите попытку","notSupportJigsaw":"Ваш браузер не поддерживает программу мозаики","jigsawName":"Название мозаики","jigsawNameStyle":"Стиль мозаики","jigsawStart":"Начать собирать мозаику","jigsawSelectBigImgStyle":"выбрать стиль диаграммы","jigsawJoint":"соединение","jigsawLattice":"Сетки","jigsawPoster":"Плакат","jigsawNineGrids":"Сетки на 9 клеток","jigsawGif":"Движущаяся картинка","jigsawClassic":"классика","alibaba20th":"20 лет","jigsawNext":"следующий","jigsawAlsoChoose":"Было уже выбрано {count1} фото и еще {count2} фото можно быть выбрано","jigsawPleaseSelectPhotos":"Выберите фото","selectMoreThan":"число головоломок в девяти дворцовых графах не должно быть меньше {count} о","pleaseChooseTheType":"Выберите тип диаграммы GIF","horizontal":"горизонтальный план","vertical":"вертикальная схема","sure":"определение","cancel":"отмена","thereCanInputTitle":"здесь можно ввести заголовок головоломки о (максимум {count} Name)","gonggeNotSingular":"Количество пазлов не может быть единичным"},"video":{"download":"загрузка","report":"все","longPressQRDownloadVideo":"Нажмите длинный код программы распознавания (микро - код), чтобы начать загрузку видео"},"pecket":{"enterCode":"Введите пароль","hasBeenReceived":"красный пакет","isBeingOpened":"{count} красные пакеты разворачиваются","openAt":"от красной сумки","allPecketHasBeenReceived":"команда выполнена","pecketFrom":"из","unit":"юань","gotoOfficialAccounts":"Прошу к гостю","justOpen":"сразу","continue":"продолжать грабить красную сумку","details":"смотреть подробности","opening":"грабить...","youHasBeenReceived":"красная сумка"},"buyAlbumPhoto":{"purchased":"√","needToPay":"за загрузку фото нужно платить","saveHdAfterPay":"сохранить после уплаты","payNow":"немедленная оплата  5","downloadRule01":"По просьбе авторского права, фотография должна быть оплачена после просмотра загрузки, после покупки, не возврата.","downloadRule02":"фотографии, которые были куплены, можно просмотреть в разделе « мои » - « фотографии, которые я купил »."},"mainMeeting":{"gotoMainMeeting":"на главную страницу собрания","curAlbum":"текущий альбом"},"layout":{"feed":"водопад","time":"время","grids":"Сетки"},"exif":{"fileSize":"Размер файла","shootingTime":"Время съемки","number":"Номер файла","Photographer":"фотограф","Retoucher":"чертёжник","ID":"идентификатор"},"findMe":{"findMe":"искать меня","confirmSelect":"поиск","reUpload":"Перезагрузить","tryAgain":"Перезагрузить","uploadHint":"на точность влияют не положительные, а отрицательные углы лица.","youMaybeWant":"Что вы","noHistoryHint":"на лицо, чтобы найти все фотографии этого человека","noHistoryTile":"Распознавание лиц","startScan":"распознавание лица","scaning":"опознавательный центр","forYouFind":"{count} лица были найдены интеллектуальным двигателем","moreLikePhoto":"больше похожих фотографий","cancel":"отмена","confirm":"определение","savePhoto":"Сохранить снимок","batchSave":"пакетное хранение","jigsaw":"мозаика","backAlbum":"обратный альбом","nolike":"Простите, что не нашел фотографий ~","saveToAiPhoto":"рисунок успешно сохранён в интеллектуальный альбом AI","longPressForSave":"длинный альбом","curPhotoNotLike":"В настоящее время лицо не найдено похожих фотографий ~","backAlbumBtn":"обратный альбом","placeCheckWay":"Выбор способа получения изображений","faceScan":"распознавание лиц","numberScan":"идентификация номера","faceHint":"Загрузка фотографий, интеллектуальный поиск изображений","numberHint":"Введите номер, изображение интеллектуального поиска","free30day":"(бесплатно в течение 30 дней)","youCanSavePhotoToAiPhoto":"Сохраните фотографии в свой умный альбом","loading":"Будучи сбрасывали ..."},"qrShare":{"albumQr":"QR-код альбома","scanCode":"Отсканируйте, чтобы увидеть альбом","save":"Длительное нажатие, чтобы сохранить"}}}')
    },
    "3b6a": function(e, t, n) {
        "use strict";
        var a = n("d083");
        function o(e) {
            window.WeixinJSBridge.call(e ? "showOptionMenu" : "hideOptionMenu")
        }
        t["a"] = function(e) {
            Object(a["a"])("wechat") && !Object(a["a"])("pcwechat") && (window.WeixinJSBridge ? o(e) : document.addEventListener("WeixinJSBridgeReady", (function() {
                o(e)
            }
            ), !1))
        }
    },
    "3f2e": function(e, t, n) {
        var a = "https://ms.alltuu.com";
        e.exports = {
            domain: "alltuu",
            path: "https://v.alltuu.com",
            publicPath: a,
            imagePath: "".concat(a, "/images"),
            themePath: "".concat(a, "/theme"),
            albumSetThemePath: "".concat(a, "/albumset-theme"),
            dataPath: "".concat(a, "/data"),
            publicBacketPath: "https://spu.alltuu.com",
            restApi: "https://a.alltuu.com",
            apiUrl: "https://m.alltuu.com",
            redPecketUrl: "https://rp.alltuu.com",
            statisticsApi: "https://st.alltuu.com",
            faceRecognitionNewVersionApi: "https://ai.alltuu.com",
            fcApi: "https://cal.alltuu.com",
            V4DomainName: "https://ma4.alltuu.com",
            V3CDomainName: "https://asl.alltuu.com",
            V4CDomainName: "https://v4c.alltuu.com",
            V4ODomainName: "https://v4o.alltuu.com",
            V4OBacketMap: {
                "https://v4o.alltuu.com": "alltuu-api-v4"
            },
            productionSourceMap: !1,
            uglify: !0,
            wechatdebug: !1,
            fundebugSilent: !1,
            vconsole: !1
        }
    },
    4207: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return s
        }
        )),
        n.d(t, "a", (function() {
            return u
        }
        ));
        n("c5f6"),
        n("96cf");
        var a = n("3b8d")
          , o = n("4360")
          , i = n("94d5")
          , r = n("0439")
          , c = n("ba5f")
          , s = function() {
            var e = Object(a["a"])(regeneratorRuntime.mark((function e() {
                var t, n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            Object(c["v4Timing"])();
                        case 3:
                            t = e.sent,
                            0 === t.e && (n = Number(t.d.server) - Number(t.d.client),
                            Math.abs(n) > 2e3 && r["a"].SAVE_JETLAG(o["a"].state, n)),
                            e.next = 9;
                            break;
                        case 7:
                            e.prev = 7,
                            e.t0 = e["catch"](0);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 7]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , u = function() {
            return (new Date).getTime() + i["a"].getJetlag(o["a"].state)
        }
    },
    4360: function(e, t, n) {
        "use strict";
        var a = n("2b0e")
          , o = n("2f62")
          , i = n("0439")
          , r = n("4b76")
          , c = n("94d5");
        a["a"].use(o["a"]);
        var s = {
            userInfo: {},
            statisticsPack: null,
            language: null,
            albumState: {},
            resourcesState: {},
            jetlag: 0
        };
        t["a"] = new o["a"].Store({
            state: s,
            getters: c["a"],
            actions: r["a"],
            mutations: i["a"]
        })
    },
    "472e": function(e, t, n) {
        var a = {
            "./cht.json": "2e42",
            "./en.json": "76ff",
            "./ru.json": "3b65",
            "./zh.json": "cf55"
        };
        function o(e) {
            var t = i(e);
            return n(t)
        }
        function i(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        o.keys = function() {
            return Object.keys(a)
        }
        ,
        o.resolve = i,
        e.exports = o,
        o.id = "472e"
    },
    "4b76": function(e, t, n) {
        "use strict";
        n("96cf");
        var a = n("3b8d")
          , o = n("ba5f")
          , i = (n("673e"),
        n("7f7f"),
        n("d225"))
          , r = function e(t) {
            Object(i["a"])(this, e),
            this.id = t.id,
            this.group = t.grpId,
            this.nick = t.nick || t.name,
            this.token = t.token,
            this.portrait = t.url || n("b9a3"),
            this.isPg = !!t.proId,
            this.proId = t.proId,
            this.domin = t.sub,
            this.version = "1.0.0"
        };
        t["a"] = {
            SAVE_USERINFO: function() {
                var e = Object(a["a"])(regeneratorRuntime.mark((function e(t, n) {
                    var a, i, c;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return a = t.commit,
                                e.next = 3,
                                Object(o["getInfoForToken"])(n);
                            case 3:
                                i = e.sent,
                                0 === i.e && (c = new r(i.d.obj),
                                a("SAVE_USERINFO", c));
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                function t(t, n) {
                    return e.apply(this, arguments)
                }
                return t
            }()
        }
    },
    5259: function(e, t, n) {
        "use strict";
        var a = n("084f")
          , o = n.n(a);
        o.a
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("456d"),
        n("ac6a"),
        n("a481"),
        n("cadf"),
        n("551c"),
        n("f751"),
        n("097d"),
        n("638e"),
        n("b414"),
        n("6b54"),
        n("87b3");
        Math.isNumber = function(e) {
            return "NaN" !== parseFloat(e).toString()
        }
        ;
        n("28a5");
        var a = {
            Linear: function(e, t, n, a) {
                return n * e / a + t
            },
            Quad: {
                easeIn: function(e, t, n, a) {
                    return n * (e /= a) * e + t
                },
                easeOut: function(e, t, n, a) {
                    return -n * (e /= a) * (e - 2) + t
                },
                easeInOut: function(e, t, n, a) {
                    return (e /= a / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                }
            },
            Cubic: {
                easeIn: function(e, t, n, a) {
                    return n * (e /= a) * e * e + t
                },
                easeOut: function(e, t, n, a) {
                    return n * ((e = e / a - 1) * e * e + 1) + t
                },
                easeInOut: function(e, t, n, a) {
                    return (e /= a / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                }
            },
            Quart: {
                easeIn: function(e, t, n, a) {
                    return n * (e /= a) * e * e * e + t
                },
                easeOut: function(e, t, n, a) {
                    return -n * ((e = e / a - 1) * e * e * e - 1) + t
                },
                easeInOut: function(e, t, n, a) {
                    return (e /= a / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
                }
            },
            Quint: {
                easeIn: function(e, t, n, a) {
                    return n * (e /= a) * e * e * e * e + t
                },
                easeOut: function(e, t, n, a) {
                    return n * ((e = e / a - 1) * e * e * e * e + 1) + t
                },
                easeInOut: function(e, t, n, a) {
                    return (e /= a / 2) < 1 ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
                }
            },
            Sine: {
                easeIn: function(e, t, n, a) {
                    return -n * Math.cos(e / a * (Math.PI / 2)) + n + t
                },
                easeOut: function(e, t, n, a) {
                    return n * Math.sin(e / a * (Math.PI / 2)) + t
                },
                easeInOut: function(e, t, n, a) {
                    return -n / 2 * (Math.cos(Math.PI * e / a) - 1) + t
                }
            },
            Expo: {
                easeIn: function(e, t, n, a) {
                    return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t
                },
                easeOut: function(e, t, n, a) {
                    return e === a ? t + n : n * (1 - Math.pow(2, -10 * e / a)) + t
                },
                easeInOut: function(e, t, n, a) {
                    return 0 === e ? t : e === a ? t + n : (e /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (2 - Math.pow(2, -10 * --e)) + t
                }
            },
            Circ: {
                easeIn: function(e, t, n, a) {
                    return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t
                },
                easeOut: function(e, t, n, a) {
                    return n * Math.sqrt(1 - (e = e / a - 1) * e) + t
                },
                easeInOut: function(e, t, n, a) {
                    return (e /= a / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                }
            },
            Elastic: {
                easeIn: function(e, t, n, a, o, i) {
                    var r;
                    return 0 === e ? t : 1 === (e /= a) ? t + n : ("undefined" === typeof i && (i = .3 * a),
                    !o || o < Math.abs(n) ? (r = i / 4,
                    o = n) : r = i / (2 * Math.PI) * Math.asin(n / o),
                    -o * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) + t)
                },
                easeOut: function(e, t, n, a, o, i) {
                    var r;
                    return 0 === e ? t : 1 === (e /= a) ? t + n : ("undefined" === typeof i && (i = .3 * a),
                    !o || o < Math.abs(n) ? (o = n,
                    r = i / 4) : r = i / (2 * Math.PI) * Math.asin(n / o),
                    o * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + n + t)
                },
                easeInOut: function(e, t, n, a, o, i) {
                    var r;
                    return 0 === e ? t : 2 === (e /= a / 2) ? t + n : ("undefined" === typeof i && (i = a * (.3 * 1.5)),
                    !o || o < Math.abs(n) ? (o = n,
                    r = i / 4) : r = i / (2 * Math.PI) * Math.asin(n / o),
                    e < 1 ? o * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * -.5 + t : o * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + n + t)
                }
            },
            Back: {
                easeIn: function(e, t, n, a, o) {
                    return "undefined" === typeof o && (o = 1.70158),
                    n * (e /= a) * e * ((o + 1) * e - o) + t
                },
                easeOut: function(e, t, n, a, o) {
                    return "undefined" === typeof o && (o = 1.70158),
                    n * ((e = e / a - 1) * e * ((o + 1) * e + o) + 1) + t
                },
                easeInOut: function(e, t, n, a, o) {
                    return "undefined" === typeof o && (o = 1.70158),
                    (e /= a / 2) < 1 ? n / 2 * (e * e * ((1 + (o *= 1.525)) * e - o)) + t : n / 2 * ((e -= 2) * e * ((1 + (o *= 1.525)) * e + o) + 2) + t
                }
            },
            Bounce: {
                easeIn: function(e, t, n, o) {
                    return n - a.Bounce.easeOut(o - e, 0, n, o) + t
                },
                easeOut: function(e, t, n, a) {
                    return (e /= a) < 1 / 2.75 ? n * (7.5625 * e * e) + t : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
                },
                easeInOut: function(e, t, n, o) {
                    return e < o / 2 ? .5 * a.Bounce.easeIn(2 * e, 0, n, o) + t : .5 * a.Bounce.easeOut(2 * e - o, 0, n, o) + .5 * n + t
                }
            }
        };
        Math.tween = a,
        Math.animation = function(e, t, n, a, o) {
            var i = function(e) {
                return "function" === typeof e
            }
              , r = function(e) {
                return "number" === typeof e
            }
              , c = function(e) {
                return "string" === typeof e
            }
              , s = function(e) {
                if (r(e))
                    return e;
                if (c(e)) {
                    if (/\d+m?s$/.test(e))
                        return /ms/.test(e) ? 1 * e.replace("ms", "") : 1e3 * e.replace("s", "");
                    if (/^\d+$/.test(e))
                        return +e
                }
                return -1
            };
            if (!r(e) || !r(t))
                return window.console && console.error("from和to两个参数必须且为数值"),
                0;
            var u = Math.tween || window.Tween;
            if (!u)
                return window.console && console.error("缓动算法函数缺失"),
                0;
            var l = {
                duration: 300,
                easing: "Linear",
                speed: 16,
                callback: function() {}
            }
              , d = function(e) {
                i(e) ? l.callback = e : -1 !== s(e) ? l.duration = s(e) : c(e) && (l.easing = e)
            };
            d(n),
            d(a),
            d(o),
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
                setTimeout(e, l.speed)
            }
            );
            var f = 0
              , p = Math.ceil(l.duration / l.speed);
            l.easing = l.easing.slice(0, 1).toUpperCase() + l.easing.slice(1);
            var m, h = l.easing.split(".");
            if (1 === h.length ? m = u[h[0]] : 2 === h.length && (m = u[h[0]] && u[h[0]][h[1]]),
            !1 !== i(m)) {
                var g = function n() {
                    var a = m(f, e, t - e, p);
                    f++,
                    f <= p ? (l.callback(a),
                    requestAnimationFrame(n)) : l.callback(t, !0)
                };
                g()
            } else
                console.error('没有找到名为"' + l.easing + '"的动画算法')
        }
        ;
        n("4504");
        HTMLElement.prototype.__defineGetter__("currentStyle", (function() {
            return this.ownerDocument.defaultView.getComputedStyle(this, null)
        }
        ));
        n("750c"),
        n("eefb");
        var o = n("d225")
          , i = function e() {
            Object(o["a"])(this, e),
            this.repeat = !1,
            this.hasData = !0
        };
        window.RepeatRequest = i;
        var r = n("2b0e")
          , c = n("ace7")
          , s = n.n(c)
          , u = n("9224")
          , l = n("7601")
          , d = n("72fe")
          , f = n.n(d)
          , p = m();
        function m() {
            for (var e = "", t = 0; t < 16; t++)
                e += Math.random().toString(36).substr(2, 8);
            return f()(e).toString()
        }
        n("7f7f");
        var h = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("transition", {
                attrs: {
                    name: "bounceInUp"
                },
                on: {
                    "after-leave": e.afterLeave,
                    "after-enter": e.afterEnter
                }
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.visible,
                    expression: "visible"
                }],
                staticClass: "notification",
                style: {
                    bottom: e.verticalOffset + "px"
                },
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        t.preventDefault(),
                        e.handleClose(t)
                    }
                }
            }, [n("span", {
                staticClass: "content"
            }, [e._v(e._s(e.content))])])])
        }
          , g = []
          , v = (n("c5f6"),
        {
            name: "notification",
            props: {
                content: {
                    type: String,
                    default: ""
                },
                autoClose: {
                    type: Number,
                    default: 3e3
                }
            },
            data: function() {
                return {
                    visible: !1,
                    verticalOffset: 0,
                    height: 0,
                    timer: null
                }
            },
            beforeDestroy: function() {
                this.clearTimer()
            },
            mounted: function() {
                this.createTimer()
            },
            methods: {
                handleClose: function() {
                    this.$emit("close")
                },
                afterLeave: function() {
                    this.$emit("closed")
                },
                createTimer: function() {
                    var e = this;
                    this.autoClose && (this.timer = setTimeout((function() {
                        e.visible = !1
                    }
                    ), this.autoClose))
                },
                clearTimer: function() {
                    this.timer && clearTimeout(this.timer)
                },
                afterEnter: function() {
                    this.height = this.$el.offsetHeight
                }
            }
        })
          , b = v
          , w = (n("5259"),
        n("2877"))
          , y = Object(w["a"])(b, h, g, !1, null, "2002f4fe", null)
          , O = y.exports
          , j = (n("20d6"),
        r["a"].extend(O))
          , S = []
          , P = 1
          , A = function(e) {
            var t = ""
              , n = "";
            "string" === typeof e ? t = e : (t = e.content,
            n = e.autoClose);
            var a = new j;
            a.content = t,
            a.autoClose = n || 3e3;
            var o = "notification_".concat(P++);
            a.id = o,
            a.vm = a.$mount(),
            document.body.appendChild(a.vm.$el),
            a.vm.visible = !0;
            var i = 40;
            return a.verticalOffset = i,
            S.forEach((function(e) {
                e.verticalOffset += i
            }
            )),
            a.vm.$on("closed", (function() {
                k(a),
                document.body.removeChild(a.vm.$el),
                a.vm.$destroy()
            }
            )),
            a.$on("close", (function() {
                a.vm.visible = !1
            }
            )),
            S.push(a),
            a.vm
        }
          , k = function(e) {
            if (e) {
                var t = S.findIndex((function(t) {
                    return t.id === e.id
                }
                ));
                S.splice(t, 1)
            }
        }
          , I = A
          , M = function(e) {
            e.component(O.name, O),
            e.prototype.$notify = I,
            window.$notify = I
        }
          , R = n("ba5f")
          , C = function(e) {
            e.prototype.$API = R,
            window.$API = R
        }
          , E = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (e) {
                var n = "orientationchange"in window ? "orientationchange" : "resize";
                t && e(x()),
                window.addEventListener(n, (function() {
                    e(x())
                }
                ), !1)
            }
        }
          , T = function(e) {
            if (e) {
                var t = "orientationchange"in window ? "orientationchange" : "resize";
                window.removeEventListener(t, (function() {
                    e()
                }
                ), !1)
            }
        };
        function x() {
            return window.innerWidth > window.innerHeight ? "horizontal" : "vertical"
        }
        var N = function(e) {
            e.prototype.$addScreenListener = E,
            window.$addScreenListener = E,
            e.prototype.$removeScreenListener = T,
            window.$removeScreenListener = T
        }
          , _ = n("4360")
          , F = n("94d5")
          , L = {
            install: function(e) {
                e.prototype.$userInfo = V
            }
        }
          , D = L;
        function V() {
            return F["a"].getUserInfo(_["a"].state)
        }
        var U = n("d083")
          , H = (n("386d"),
        function(e) {
            Object(l["b"])("userInfo");
            var t = encodeURIComponent(location.pathname + location.search);
            if (Object(l["c"])("loginBack", t),
            Object(U["a"])("weibo")) {
                var n = location.origin + "/loginBack";
                return window.location.href = "https://api.weibo.com/oauth2/authorize?client_id=wx7fb24a0fe67ed873&response_type=code&redirect_uri=" + n,
                !1
            }
            if (Object(U["a"])("dingtalk"))
                return window.location.href = "https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=dingoady8wuxikfcwayvpz&response_type=code&scope=snsapi_auth&state=STATE&redirect_uri=https%3a%2f%2fv.alltuu.com%2floginBack",
                !1;
            if (Object(U["a"])("wechat")) {
                var a = location.origin + "/loginBack?appid=";
                return e ? (window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat("wx7fb24a0fe67ed873", "&redirect_uri=").concat(encodeURIComponent(a + "wx7fb24a0fe67ed873"), "&response_type=code&scope=snsapi_userinfo&state=weixin#wechat_redirect"),
                !1) : (window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat("wx776c524e5ccccd55", "&redirect_uri=").concat(encodeURIComponent(a + "wx776c524e5ccccd55"), "&response_type=code&scope=snsapi_userinfo&state=weixin#wechat_redirect"),
                !1)
            }
        }
        )
          , $ = {
            install: function(e) {
                e.prototype.$login = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : location.href
                      , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    z(e, t)
                }
                ,
                window.$login = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : location.href
                      , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    z(e, t)
                }
            }
        }
          , B = $;
        function z(e, t) {
            Object(U["a"])("wechat") || Object(U["a"])("weibo") || Object(U["a"])("dingtalk") ? H(t) : location.href = "/signIn?loginback=".concat(encodeURIComponent(e))
        }
        var q = n("2b83")
          , G = {
            install: function(e) {
                e.prototype.$loadResources = function(e, t) {
                    return Object(q["a"])(e, t)
                }
            }
        }
          , J = G
          , W = n("3a34")
          , Q = n.n(W)
          , Z = (n("7514"),
        n("225c"))
          , Y = function() {
            return (new Date).getTime() - Object(Z["a"])().time > 6e4
        }
          , K = function() {
            return Object(Z["a"])().packs.length > 10
        }
          , X = function() {
            return Object(Z["a"])().packs.length > 0
        }
          , ee = function() {
            return !!Object(Z["a"])().packs.find((function(e) {
                return 6 === e.model || 10 === e.model || 18 === e.model
            }
            ))
        }
          , te = n("0439")
          , ne = function(e) {
            var t = Object(Z["a"])();
            t.packs.splice(0, e),
            t.time = (new Date).getTime(),
            te["a"].SAVE_STATISTICS(_["a"].state, t)
        }
          , ae = n("c844")
          , oe = n("4328")
          , ie = n.n(oe)
          , re = n("3773")
          , ce = n("80c0")
          , se = n("3264")
          , ue = n("7219")
          , le = 3
          , de = 0
          , fe = [3e3, 5e3, 1e4]
          , pe = [0, 1206, 1350, 1701, 2705, 3605, 20009, 20010, 300005]
          , me = ["/rest/v3/fup", "/rest/v3/roshan"]
          , he = ["/rest/v3/fpl", "/rest/v3/fup", "/rest/v3/fa"];
        function ge(e, t, n, a, o) {
            try {
                "post" !== e && "put" !== e && "delete" !== e || (n = ie.a.stringify(n))
            } catch (r) {
                window.$notify("请求错误，请联系客服<br/>电话：0571-87711285"),
                o && o(r)
            }
            var i = new XMLHttpRequest;
            i.onerror = function(e) {
                for (var t = !1, n = 0, a = me.length; n < a; n++)
                    if (e.config.url.indexOf(me[n]) >= 0) {
                        t = !0;
                        break
                    }
                if (console.warn(!t, de, le, e, e.message),
                !t && de >= le) {
                    if ("Network Error" === e.message)
                        return void window.$notify("网络错误，请检查您的手机网络是否正常");
                    window.$notify("响应错误，请联系客服<br/>电话：0571-87711285")
                }
                o && o(e)
            }
            ,
            i.onreadystatechange = function() {
                var e = i.responseText ? JSON.parse(i.responseText) : {};
                if (e = we(e),
                void 0 !== e.errorCode) {
                    if (window.isNull(e.e))
                        return Promise.reject(e.e);
                    for (var t = !0, n = 0, o = pe.length; n < o; n++)
                        if (pe.indexOf(e.e) >= 0) {
                            t = !1;
                            break
                        }
                    t && (2 !== e.e && 5 !== e.e && 1008 !== e.e && 20006 !== e.e || (2 === e.e && window.$notify("请登录后操作"),
                    5 === e.e && window.$notify("登录超时，请重新登录"),
                    1008 === e.e && window.$notify("登录信息已过期，请重新登录"),
                    20006 === e.e && window.$notify("登录信息已过期，请重新登录")),
                    window.$notify((ce["a"][e.e] || e.m || "未知错误，错误码") + ": ".concat(e.e))),
                    a && a(e)
                }
            }
            ,
            i.open(e.toUpperCase(), t, !1),
            i.setRequestHeader("Accept", "application/json"),
            i.send(n)
        }
        function ve(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "get"
              , a = arguments.length > 3 ? arguments[3] : void 0;
            n = n.toLowerCase(),
            a = a || t;
            var o = "";
            o = e.indexOf("/rest") > 0 || e.indexOf("biu.") > 0 || e.indexOf("ai.") > 0 ? Object(re["a"])(e, "post" === n ? {} : t, a) : e;
            var i = {
                url: new ue["a"](e).pathname,
                data: t,
                method: n,
                timestamps: (new Date).getTime()
            };
            return new Promise((function(r, c) {
                try {
                    ge(n, o, "post" === n ? t : null, (function(e) {
                        e.request = i,
                        i.errorCode = e.errorCode,
                        be(i),
                        de = 0,
                        r(e)
                    }
                    ), (function(o) {
                        i.errorCode = -1,
                        be(i),
                        de < le ? (setTimeout((function() {
                            ve(e, t, n, a)
                        }
                        ), fe[de]),
                        de++) : (de = 0,
                        c(o))
                    }
                    ))
                } catch (s) {
                    c(s)
                }
            }
            ))
        }
        function be(e) {
            for (var t = 0, n = he.length; t < n; t++)
                e.url === he[t] && Object(se["a"])(9, {
                    actId: e.data.a,
                    sepId: e.data.s || 0,
                    name: e.url,
                    time: e.timestamps,
                    errorCode: e.errorCode,
                    total: (new Date).getTime() - e.timestamps
                })
        }
        function we(e) {
            var t;
            return t = Object.keys(e).indexOf("errorCode") >= 0 ? {
                e: e.errorCode,
                d: e.data,
                m: e.msg
            } : e,
            t
        }
        var ye = {
            axios: ae["a"],
            axiosSync: ve
        }
          , Oe = !1
          , je = function(e, t) {
            if (!Oe) {
                Oe = !0;
                var n = Object(Z["a"])();
                if (n.packs.length) {
                    var a = t ? "axios" : "axiosSync";
                    ye[a](c["statisticsApi"] + "/rest/v3/roshan", {
                        list: JSON.stringify({
                            list: n.packs
                        })
                    }, "post").then((function(t) {
                        Oe = !1,
                        0 === t.e ? (e && e("success"),
                        ne(n.packs.length)) : e && e("error")
                    }
                    )).catch((function() {
                        Oe = !1,
                        e && e("error")
                    }
                    ))
                }
            }
        }
          , Se = 1e3
          , Pe = null
          , Ae = function() {
            ke(),
            window.onbeforeunload = function() {
                Pe && clearTimeout(Pe),
                Ie(!1)
            }
        };
        function ke() {
            Y() || K() || ee() ? Ie(!0) : Me()
        }
        function Ie() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            X() ? je((function(e) {
                "success" === e ? Se = 1e3 : Se += 5e3,
                Me()
            }
            ), e) : Me()
        }
        function Me() {
            Pe = setTimeout((function() {
                Pe = null,
                ke()
            }
            ), Se)
        }
        var Re = n("49ea")
          , Ce = function(e) {
            if (!c["fundebugSilent"]) {
                n("edbf");
                var t = n("0eec");
                t.apikey = "73dccc8c42d89b2f50751105efc99e20fc2ba4be27e40641e8134d1353f029d2",
                t.releasestage = "alltuu" === c["domain"] ? "production" : "development",
                t.sampleRate = .5,
                t.silent = c["fundebugSilent"],
                t.silentConsole = !0,
                t.user = F["a"].getUserInfo(_["a"].state),
                t.metaData = {
                    version: u["version"]
                },
                t.filters = [{
                    message: /Script error/
                }, {
                    target: {
                        tagName: /SCRIPT/
                    }
                }, {
                    message: /Uncaught ReferenceError: x5onSkinSwitch is not defined/
                }, {
                    message: /Can't find variable: _WXJS/
                }, {
                    message: /WeixinJSBridge/
                }, {
                    message: /对象不支持此属性或方法/
                }, {
                    message: /.*DOM Exception 18.*/
                }, {
                    req: {
                        url: /\.com\/loading.*/,
                        status: /^404$/
                    }
                }, {
                    req: {
                        url: /topBgLottie\.json/,
                        status: /^404$/
                    }
                }, {
                    message: /Uncaught RangeError: Maximum call stack size exceeded/
                }, {
                    res: {
                        status: /^0$/
                    }
                }, {
                    res: {
                        status: /^404$/
                    }
                }, {
                    res: {
                        status: /^504$/
                    }
                }, {
                    target: {
                        tagName: /^VIDEO$/,
                        status: /^403$/,
                        className: /^video-hd$/
                    }
                }, {
                    message: /.*Cannot read property 'pageX' of undefined.*/
                }, {
                    message: /.*Failed to load because no supported source was found.*/
                }, {
                    message: /.*YKPlayer is not defined.*/
                }, {
                    message: /.*play() failed because the user didn't interact with the document.*/
                }, {
                    message: /.*The element has no supported sources..*/
                }],
                Object(Re["a"])(t, e)
            }
        }
          , Ee = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("i", {
                staticClass: "iconfont",
                class: "icon-" + e.icon
            })
        }
          , Te = []
          , xe = {
            name: "icon",
            props: {
                icon: {
                    type: String,
                    required: !0
                }
            }
        }
          , Ne = xe
          , _e = Object(w["a"])(Ne, Ee, Te, !1, null, null, null)
          , Fe = _e.exports
          , Le = {
            install: function(e) {
                e.component("icon", Fe)
            }
        }
          , De = Le
          , Ve = n("3b6a")
          , Ue = n("4207")
          , He = function(e) {
            console.warn("程序版本：", u["version"]),
            Ce(e),
            Object(Ue["b"])(),
            Object(l["c"])("baseUrl", location.href);
            for (var t = [s.a.restApi, s.a.apiUrl, s.a.redPecketUrl, s.a.statisticsApi], n = 0, a = t.length; n < a; n++) {
                var o = document.createElement("link");
                o.rel = "dns-prefetch",
                o.href = t[n],
                document.head.appendChild(o)
            }
            window.guid = Object(l["a"])("guid") || Object(l["c"])("guid", p),
            e.use(M),
            e.use(C),
            e.use(N),
            e.use(D),
            e.use(B),
            e.use(J),
            (location.href.indexOf("debug=") >= 0 || s.a.vconsole) && e.use(new Q.a),
            Ae(),
            e.use(De),
            Object(Ve["a"])(!1)
        }
          , $e = n("a925")
          , Be = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("router-view")
        }
          , ze = []
          , qe = {
            name: "App"
        }
          , Ge = qe
          , Je = (n("7c55"),
        Object(w["a"])(Ge, Be, ze, !1, null, null, null))
          , We = Je.exports
          , Qe = (n("96cf"),
        n("3b8d"))
          , Ze = n("8c4f")
          , Ye = n("4b76");
        r["a"].use(Ze["a"]);
        var Ke = new Ze["a"]({
            mode: "history",
            base: "/",
            routes: [{
                path: "/",
                redirect: "/album"
            }, {
                path: "/album",
                component: function() {
                    return Promise.all([n.e("album~albumset~midAutumn"), n.e("album~findMeResult"), n.e("album~albumset"), n.e("album")]).then(n.bind(null, "dbea"))
                },
                children: [{
                    path: "/album/:id(\\d{10})/:sep(\\d{10})?",
                    name: "album",
                    component: function() {
                        return Promise.all([n.e("album~albumset~midAutumn"), n.e("album~findMeResult"), n.e("album~albumset"), n.e("album")]).then(n.bind(null, "65ac"))
                    }
                }, {
                    path: "/album/sharimg/:id(\\d{10})/:sep(\\d{10})/:pid",
                    component: function() {
                        return Promise.all([n.e("album~albumset~midAutumn"), n.e("album~findMeResult"), n.e("album~albumset"), n.e("album")]).then(n.bind(null, "0d44"))
                    }
                }, {
                    path: "/album/:id(\\d{10})/:sep(\\d{10})?/:ver(\\w{32})?",
                    component: function() {
                        return Promise.all([n.e("album~albumset~midAutumn"), n.e("album~findMeResult"), n.e("album~albumset"), n.e("album")]).then(n.bind(null, "6eea"))
                    }
                }, {
                    path: "/album/findMe",
                    component: function() {
                        return n.e("finMe").then(n.bind(null, "d841"))
                    },
                    children: [{
                        path: "index/:id(\\d{10})/:sep(\\d{10})/:custom",
                        component: function() {
                            return Promise.all([n.e("analysis~editlanguage~finMeHistory~findMeResult~uploadFace"), n.e("finMeHistory~findMeResult~uploadFace"), n.e("finMeHistory")]).then(n.bind(null, "7893"))
                        }
                    }, {
                        path: "uploadFace/:id(\\d{10})/:sep(\\d{10})/:custom",
                        component: function() {
                            return Promise.all([n.e("analysis~editlanguage~finMeHistory~findMeResult~uploadFace"), n.e("finMeHistory~findMeResult~uploadFace"), n.e("uploadFace")]).then(n.bind(null, "d346"))
                        }
                    }, {
                        path: "noResult/:id(\\d{10})/:sep(\\d{10})/:custom",
                        component: function() {
                            return Promise.all([n.e("analysis~editlanguage~finMeHistory~findMeResult~uploadFace"), n.e("finMeHistory~findMeResult~uploadFace"), n.e("album~findMeResult"), n.e("findMeResult")]).then(n.bind(null, "aae8"))
                        }
                    }, {
                        path: "findMeResult/:id(\\d{10})/:sep(\\d{10})/:custom",
                        component: function() {
                            return Promise.all([n.e("analysis~editlanguage~finMeHistory~findMeResult~uploadFace"), n.e("finMeHistory~findMeResult~uploadFace"), n.e("album~findMeResult"), n.e("findMeResult")]).then(n.bind(null, "13f5"))
                        }
                    }]
                }]
            }, {
                path: "/v4/albumset/:id(\\d{10})",
                component: function() {
                    return Promise.all([n.e("album~albumset~midAutumn"), n.e("album~albumset"), n.e("albumset")]).then(n.bind(null, "0010"))
                }
            }, {
                path: "/v4/activityApply",
                component: function() {
                    return n.e("feedback").then(n.bind(null, "edf2"))
                }
            }, {
                path: "/v4/activityOpen",
                component: function() {
                    return n.e("feedback").then(n.bind(null, "2d02"))
                }
            }, {
                path: "/analysis/:id(\\d{10})",
                component: function() {
                    return Promise.all([n.e("analysis~editlanguage~finMeHistory~findMeResult~uploadFace"), n.e("analysis")]).then(n.bind(null, "e81a"))
                }
            }, {
                path: "/v4/editlanguage",
                component: function() {
                    return Promise.all([n.e("analysis~editlanguage~finMeHistory~findMeResult~uploadFace"), n.e("editlanguage")]).then(n.bind(null, "cdb0"))
                }
            }, {
                path: "/v4/midAutumn/:id(\\d{10})",
                component: function() {
                    return Promise.all([n.e("album~albumset~midAutumn"), n.e("midAutumn")]).then(n.bind(null, "d064"))
                }
            }, {
                path: "/:type(\\w{1})/:code(\\w{6})",
                component: function() {
                    return n.e("short").then(n.bind(null, "d772"))
                }
            }, {
                path: "/clearCache",
                component: function() {
                    return n.e("clearCache").then(n.bind(null, "73e0"))
                }
            }, {
                path: "/test",
                component: function() {
                    return n.e("test").then(n.bind(null, "feda9"))
                }
            }, {
                path: "*",
                component: function() {
                    return n.e("page404").then(n.bind(null, "dc75"))
                }
            }]
        });
        Ke.beforeEach(function() {
            var e = Object(Qe["a"])(regeneratorRuntime.mark((function e(t, n, a) {
                var o, i;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (o = t,
                            et(t) || (o = tt(t)),
                            !t.query.token) {
                                e.next = 7;
                                break
                            }
                            return e.next = 5,
                            Ye["a"].SAVE_USERINFO({
                                commit: _["a"].commit
                            }, t.query.token);
                        case 5:
                            o = Object.assign({}, o),
                            delete o.query.token;
                        case 7:
                            if ((t.query.debug || n.query.debug) && o.fullPath.indexOf("debug=") < 0 && (o = Object.assign({}, o),
                            o.query.debug = t.query.debug || n.query.debug),
                            o !== t) {
                                for (i in o.fullPath = o.path,
                                o.query)
                                    o.fullPath.indexOf("?") >= 0 ? o.fullPath += "&".concat(i, "=").concat(o.query[i]) : o.fullPath += "?".concat(i, "=").concat(o.query[i]);
                                o.hash && (o.fullPath += o.hash),
                                a(o.fullPath)
                            } else
                                a();
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, a) {
                return e.apply(this, arguments)
            }
        }());
        var Xe = Ke;
        function et(e) {
            return e.fullPath === e.path ? /\/$/.test(e.path) : e.fullPath.indexOf("?") >= 0 ? e.fullPath.indexOf("/?") >= 0 : e.fullPath.indexOf("#") >= 0 ? e.fullPath.indexOf("/#") >= 0 : void 0
        }
        function tt(e) {
            return e = Object.assign({}, e),
            e.fullPath === e.path ? (e.path += "/",
            e.fullPath += "/",
            e) : e.fullPath.indexOf("?") >= 0 ? (e.path += "/",
            e.fullPath = e.fullPath.replace("?", "/?"),
            e) : e.fullPath.indexOf("#") >= 0 ? (e.path += "/",
            e.fullPath = e.fullPath.replace("#", "/#"),
            e) : void 0
        }
        var nt = n("a47e");
        r["a"].config.productionTip = !1,
        /^http:\/\//.test(location.href) && (location.href = location.href.replace("http", "https")),
        He(r["a"]),
        r["a"].use($e["a"]);
        var at = {};
        Object.keys(nt["a"]).forEach((function(e) {
            try {
                at[e] = n("472e")("./".concat(e, ".json"))
            } catch (t) {}
        }
        ));
        var ot = new $e["a"]({
            locale: _["a"].getters.getLanguage,
            messages: at,
            silentTranslationWarn: !0
        });
        window.alltuuApp = new r["a"]({
            router: Xe,
            store: _["a"],
            i18n: ot,
            render: function(e) {
                return e(We)
            },
            watch: {
                "$i18n.locale": function(e) {
                    _["a"]._mutations.SAVE_LANGUAGE[0](e)
                }
            }
        }).$mount("#app")
    },
    "5c48": function(e, t, n) {},
    "638e": function(e, t) {
        Math.range = function(e, t, n) {
            return e > n && (e += n,
            n = e - n,
            e -= n),
            Math.min(Math.max(e, t), n)
        }
    },
    7219: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        n("ac4d"),
        n("8a81"),
        n("ac6a");
        var a = n("d225")
          , o = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : location.href
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location.origin;
            Object(a["a"])(this, e);
            var o = new URL(t,n);
            return i(o),
            o.get = function(e) {
                return o.searchParams.get(e)
            }
            ,
            o.set = function(e, t) {
                return o.searchParams.set(e, t),
                i(o),
                o
            }
            ,
            o.delete = function(e) {
                return o.searchParams.delete(e),
                i(o),
                o
            }
            ,
            o
        };
        function i(e) {
            e.query = {};
            var t = !0
              , n = !1
              , a = void 0;
            try {
                for (var o, i = e.searchParams[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                    var r = o.value;
                    e.query[r[0]] = r[1]
                }
            } catch (c) {
                n = !0,
                a = c
            } finally {
                try {
                    t || null == i.return || i.return()
                } finally {
                    if (n)
                        throw a
                }
            }
        }
    },
    "750c": function(e, t) {
        window.isNull = function(e) {
            return null === e || void 0 === e || "null" === e || "undefined" === e
        }
    },
    7601: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {
            return o
        }
        )),
        n.d(t, "b", (function() {
            return i
        }
        ));
        var a = function(e, t) {
            if (e)
                return "string" !== typeof t && (t = JSON.stringify(t)),
                window.localStorage.setItem(e, t),
                t
        }
          , o = function(e) {
            if (e)
                return window.localStorage.getItem(e)
        }
          , i = function(e) {
            e && window.localStorage.removeItem(e)
        }
    },
    "76ff": function(e) {
        e.exports = JSON.parse('{"components":{"livePlayer":{"countdown1":"Live stream begin in 0:0:{s}","countdown2":"Live stream begin in 0:{m}:{s}","countdown3":"Live stream begin in {h}:{m}:{s}","countdown4":"Live stream begin in {h}d {h}:{m}:{s}","comingSoon":"Coming soon","flush":"Refresh","reReload":"The live broadcast signal has been interrupted，<br/> please refresh","interrupt":"live broadcast the interrupt","GenerateAReplay":"The live video is over ，please wait","finished":"The live video is over"},"liveMenu":{"notStarted":"not started","playBack":"playback","completed":"completed","live":"live"}},"module":{"date":{"toNowDate":{"second":"{date} seconds","minute":"{date} minutes ago","hour":"{date} hours ago","day":"{date} days ago","month":"{date} month ago","year":"{date} year ago"}}},"album":{"findme":"Find Me","homepage":" Main-  page ","personal":"Personal","reserve":"Reserve","order":"Order","inverse":"Inverse","password":{"title":"Please input a password","input":"password","enter":"Enter","jump":"The album has been accessed and can be skipped","error":"Wrong password, please re-enter","verify":"Incorrect format, password is 4-8 digits or letters"},"pageTitle":{"图片直播":"Live Photo","喔图云摄影":"ALLTUU Live Photo","闪传直播平台":"Live Photo platform"},"albumInfo":{"pageviews":"<span primary-color>{count}</span> views of the  live photos","detail":"intro.","introduction":"introduction","directions":"directions"},"navigation":{"live":"Live Photo","hot":"Hot","hot1010062553":"Hot","video":"Video","comment":"Comment","moreAnnualMeeting":"More","interactiveUpload":"Upload","customize":{"1010062553":"More","1012367633":"homepage","1033174408":"Good deeds in Zhejiang"}},"nullData":{"live":"Coming soon","hot":"Coming soon","video":"Coming soon","comment":"Coming soon"},"scrollList":{"loading":"Loading","end":"End"},"sideBar":{"refresh":"Refresh","order":"Order","inverse":"Inverse"},"bottomAd":{"点我了解喔图云摄影":"More about ALLTUU","点我了解喔图闪传开放平台":"More about Live-Photo","立即预约拍摄":"Reserve a Live-Photo now","点我使用传开放平台":"More about Live-Photo","点我了解图片直播":"More about ALLTUU","点我使用闪传直播平台":"More about Live-Photo"},"liveCount":" | update {count} photo | update {count} photos","bigImage":{"size":"size:{size}, Long press to save.","atFirst":"This is the first one","atEnd":"This is the last one"},"barrage":{"title":"Barrage","setting":"Barrage setting","opacity":"Opacity","display":"Display","reset":"Reset","close":"Close","open":"Open"},"comment":{"title":"Comment","post":"Post","add":"Add a comment...","cancel":"Cancel","report":"Report","reply":"Reply","maintenance":"In maintenance","empty":"No comments yet"},"poster":{"进入直播相册":"Enter Live album","进入喔图云摄影":"Enter Alltuu Live Photos","进入闪传直播":"Enter Live Photo platform"},"favorite":{"ok":"OK"},"bigImageLayer":{"buyPhoto":"Pay now","load":"Big Image({size})","loading":"Loading...","collect":"collect","comment":"comment","share":"share","like":"0 like | {count} like | {count} likes","likeGuide":"Like it!","likeError":"Like error","longPressSave":"Long press to save photo","clickAvatar":"Click avatar to view more photos","collectionFailed":"Collection failed, please pay to buy","commentSuccess":"Comment successful","commentWaitForReview":"Comment successful, waiting for review","commentFailed":"Comment failed"},"face":{"finding":"Recognizing","notFound":"No face detected","found":"<span>{count}</span> face detected"},"notify":{"reportSuccess":"Report success","tooBusy":"Too busy","actionFail":"Fail"},"jigsaw":{"jigsaw":"Jigsaw","canNotSurpass":"Maximum {count} photos allowed.","longPressToSaveJigsaw":"Longpress to save.","loadingResoure":"Loading","computedLayout":"In the layout","jigsawProcessing":"Processing","export":"Export","loadDefeatRemoveImg":"Error, photo failure.","jigsawErrorReload":"Jigsaw generate failed.","notSupportJigsaw":"Browser error, jigsaw not supported","jigsawName":"Name of the jigsaw","jigsawNameStyle":"Jigsaw style","jigsawStart":"Generate Now","jigsawSelectBigImgStyle":"Select style","jigsawJoint":"Joint","jigsawLattice":"Lattice","jigsawPoster":"Poster","jigsawNineGrids":"Nine grids","jigsawGif":"Gif","jigsawClassic":"Classic","alibaba20th":"20th","jigsawNext":"Next","jigsawAlsoChoose":"{count1} photos selected,{count2} more allowed.","jigsawPleaseSelectPhotos":"Please select photos.","selectMoreThan":"Please select more than {count} pictures","pleaseChooseTheType":"Please choose the type","horizontal":"Horizontal","vertical":"Vertical","sure":"Ok","cancel":"Cancel","thereCanInputTitle":"Puzzle title (no more than {count} characters)","gonggeNotSingular":"The number of puzzles cannot be singular"},"video":{"download":"Download","report":"Report","longPressQRDownloadVideo":"Long press QR Code（in WeChat)， to download the video"},"pecket":{"enterCode":"Enter code","hasBeenReceived":"The red envelope has been received","isBeingOpened":"{count} red envelope is being opened","openAt":"Red envelopes are open at","allPecketHasBeenReceived":"Red envelopes have all been received","pecketFrom":"From","unit":"yuan","gotoOfficialAccounts":"Please go to Official Accounts to receive","justOpen":"Open","continue":"Continue","details":"Details","opening":"opening...","youHasBeenReceived":"You have received the red envelope"},"buyAlbumPhoto":{"purchased":"√","needToPay":"Need to pay","saveHdAfterPay":"Save HD pictures after payment","payNow":"Pay now","downloadRule01":"Download after payment, no refund will be given once purchased","downloadRule02":"Purchased photos are saved in \\"Personal\\"-\\"bought photos\\""},"mainMeeting":{"gotoMainMeeting":"Go to the main page","curAlbum":"Current album"},"layout":{"feed":"Feed","time":"Time","grids":"Grids"},"exif":{"fileSize":"File size","shootingTime":"Shooting time","number":"Number","Photographer":"Photographer","Retoucher":"Retoucher","ID":"ID"},"findMe":{"findMe":"Find me","confirmSelect":"Confirmed to search","reUpload":"Re-upload","tryAgain":"Please try again","uploadHint":"please upload the front view of your face picture.","youMaybeWant":"Use this photo to find","noHistoryHint":"please upload the front view of your face picture.","noHistoryTile":"Face recognition","startScan":"Please upload a facephoto","scaning":"Face recognition processing","forYouFind":"Found {count} photo for you | Found {count} photos for you","moreLikePhoto":"more similar photo | more similar photos","cancel":"Cancel","confirm":"Confirm","savePhoto":"Save to","batchSave":"Save to","jigsaw":"Jigsaw","backAlbum":"Go back to the album","nolike":"No similar photos found~","saveToAiPhoto":"Pictures have been successfully save to AIPHOTO","longPressForSave":"Long press to enter AIPHOTO","curPhotoNotLike":"No similar photos found~","backAlbumBtn":"Back","placeCheckWay":"Way to find me","faceScan":"Face","numberScan":"Number","faceHint":"Upload photos with faces,find me","numberHint":"Enter number,find me","free30day":"(free for 30 days)","youCanSavePhotoToAiPhoto":"Save photos to your AIPHOTO","loading":"loading…"},"qrShare":{"albumQr":"Album QR code","scanCode":"Scan code to view this album","save":"Long press the QR code to save"}}}')
    },
    "7c55": function(e, t, n) {
        "use strict";
        var a = n("5c48")
          , o = n.n(a);
        o.a
    },
    "80c0": function(e, t, n) {
        "use strict";
        t["a"] = {
            1: "系统错误",
            2: "请登录后操作",
            4: "签名错误",
            5: "登录超时",
            6: "邮件发送失败",
            7: "验证码错误",
            8: "参数不符合约定",
            10: "验证码为空",
            11: "您手机系统的时间不正确，请对时后刷新页面",
            12: "手机格式错误",
            103: "验证码错误",
            104: "验证码已过期",
            105: "验证码为空",
            1e3: "请输入用户名",
            1001: "请输入密码",
            1002: "用户名不存在",
            1003: "账号或密码错误",
            1004: "请输入用户名",
            1005: "请输入密码",
            1008: "登录信息已过期，请重新登录",
            1009: "登录信息已过期，请重新登录",
            1100: "用户已存在",
            1152: "密码不相等",
            1200: "您还不是喔图摄影师，快去注册吧",
            1201: "该手机号码已注册",
            1202: "头像上传错误，请重新上传",
            1203: "域名已存在，请选择其他域名",
            1204: "编辑无效，请重新操作",
            1205: "验证码失效",
            1207: "您已经申请该活动拍摄",
            1300: "作品集不存在",
            1301: "无编辑权限",
            1302: "作品数量超过作品集上限",
            1303: "作品集发布失败，请重新上传",
            1350: "照片不存在",
            1400: "服务不存在",
            1401: "发布失败，请重新发布",
            1402: "样片超过上限",
            1403: "无编辑权限",
            1404: "预约失败，请重新预约",
            1405: "您没有收藏该服务",
            1406: "您已经收藏该服务",
            1450: "照片不存在",
            1500: "图库信息异常",
            1501: "无发送权限",
            1502: "相册不存在",
            1504: "相册不存在",
            1505: "图库已发送成功",
            1506: "对方账号不存在",
            1507: "无编辑权限",
            1508: "照片不存在",
            1511: "旋转失败，请重新操作",
            1600: "操作失败",
            1601: "已点过赞",
            1700: "密码错误",
            1701: "没有输入密码",
            1702: "该评论不存在，请刷新页面",
            1703: "您没有删除该评论的权限",
            1704: "该活动不存在",
            1705: "该活动内不存在该分类",
            1706: "该征集不存在",
            1800: "未关注该摄影师",
            1801: "已关注该摄影师",
            2e3: "订单生成错误",
            2001: "订单异常",
            2003: "微信基础授权accesstoken失效",
            2004: "微信卡券已核销",
            2005: "微信卡券已过期",
            2006: "微信卡券转赠中",
            2007: "微信卡券转赠超时",
            2008: "微信卡券已删除",
            2009: "微信卡券已失效",
            2010: "微信卡券code解码失败",
            2011: "微信授权错误",
            2012: "卡券不为当前微信用户所有",
            2013: "该卡券不适用当前订单",
            2100: "找不到该图片",
            2401: "photoIds中没有照片唯一标识",
            2601: "该征集已结束",
            2605: "该征集不存在",
            2606: "该征集已经被用户取消",
            2607: "未获取到砍价信息",
            2608: "摄影师已经取消报名",
            2609: "您已经选择过摄影师",
            2630: "该征集正在审核中",
            2751: "未获取到授权信息",
            2801: "钱包余额不够",
            3201: "您已开通过闪传",
            3301: "微信支付生成预支付订单失败",
            3302: "支付出错",
            3303: "获取授权token失败",
            3304: "微信卡券已核销",
            3305: "微信卡券已过期",
            3306: "微信卡券转赠中",
            3307: "微信卡券转赠超时",
            3308: "微信卡券已删除",
            3309: "微信卡券已失效",
            3310: "微信卡券code错误",
            3311: "微信用户授权失败",
            3312: "卡券不是当前用户拥有",
            3313: "当前卡券不能核销此订单",
            3314: "卡券核销失败",
            3315: "卡券信息为空",
            3316: "卡券占用异常",
            5001: "您已成功报名，请勿重复提交",
            7001: "当前账户已是摄影师，不需要绑定",
            7002: "当前账号不是三方授权登陆账户",
            7003: "该账号已经绑定过qq",
            7004: "该账号已经绑定过微信",
            7005: "该账号已经绑定过微博",
            40056: "卡券码不合法",
            40001: "获取卡券信息失败，请稍后再试",
            1523: "链接错误",
            1524: "链接错误",
            1525: "链接错误",
            1526: "链接错误",
            1527: "链接错误",
            18103: "请不要重复举报",
            20004: "找不到该相册",
            20009: "相册数据已过期,即将重新加载数据",
            20010: "该图片已删除",
            20011: "相册链接错误，请重新分享。",
            22222: "网络超时",
            100003: "密码错误，请重新输入",
            300005: "密码未输入"
        }
    },
    9224: function(e) {
        e.exports = JSON.parse('{"name":"alltuu-mobile-web","version":"v3.2.6-4","private":true,"scripts":{"dev":"vue-cli-service serve --mode local","pro":"vue-cli-service serve --mode localpro","build/guituu":"vue-cli-service build --mode development","build/alltuu":"vue-cli-service build --mode production","build":"vue-cli-service build --mode production","theme":"gulp album","theme:albumset":"gulp albumset","lint":"vue-cli-service lint --mode local","i":"npm install","test:e2e":"vue-cli-service test:e2e","test:unit":"vue-cli-service test:unit","fix":"eslint --fix ."},"dependencies":{"axios":"^0.18.0","core-js":"^2.6.10","crypto-js":"^3.1.9-1","fastclick":"^1.0.6","fundebug-javascript":"^1.8.0","fundebug-revideo":"^0.4.0","fundebug-vue":"0.0.1","gulp-less":"^4.0.1","html2canvas":"^1.0.0-rc.4","jr-qrcode":"^1.1.4","lottie-web":"^5.5.3","vue":"^2.6.10","vue-i18n":"^8.11.2","vue-router":"^3.0.6","vuex":"^3.1.1"},"devDependencies":{"@vue/cli-plugin-babel":"^3.8.0","@vue/cli-plugin-e2e-cypress":"^3.8.0","@vue/cli-plugin-eslint":"^3.8.0","@vue/cli-plugin-unit-jest":"^3.11.0","@vue/cli-service":"^3.8.0","@vue/eslint-config-standard":"^4.0.0","@vue/test-utils":"1.0.0-beta.29","babel-core":"7.0.0-bridge.0","babel-eslint":"^10.0.1","babel-jest":"^23.6.0","compression-webpack-plugin":"^2.0.0","eslint":"^5.16.0","eslint-plugin-html":"^5.0.5","eslint-plugin-vue":"^5.2.2","gulp":"^4.0.2","gulp-autoprefixer":"^6.1.0","gulp-clean-css":"^4.2.0","jest-canvas-mock":"^2.1.1","less":"^3.9.0","less-loader":"^4.1.0","lint-staged":"^8.1.7","uglifyjs-webpack-plugin":"^2.1.3","vconsole":"^3.3.0","vue-template-compiler":"^2.6.10"},"eslintConfig":{"root":true,"env":{"browser":true,"es6":true,"node":true},"extends":["plugin:vue/essential","@vue/standard"],"rules":{},"parserOptions":{"parser":"babel-eslint"}},"eslintIgnore":["/dist","/src/fonts"],"postcss":{"plugins":{"autoprefixer":{}}},"browserslist":["> 1%","last 10 versions","not ie <= 8"],"jest":{"collectCoverage":true,"collectCoverageFrom":["**/*.{js,vue}","!**/node_modules/**"],"coverageReporters":["html","text-summary"],"coverageDirectory":"logs/unit","setupFiles":["jest-canvas-mock"],"moduleFileExtensions":["js","jsx","json","vue"],"transform":{"^.+\\\\.vue$":"vue-jest",".+\\\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":"jest-transform-stub","^.+\\\\.jsx?$":"babel-jest"},"moduleNameMapper":{"^@/(.*)$":"<rootDir>/src/$1"},"snapshotSerializers":["jest-serializer-vue"],"testMatch":["**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"],"testURL":"http://localhost/"},"gitHooks":{"pre-commit":"lint-staged"},"lint-staged":{"*.{js,vue}":["vue-cli-service lint","git add"]}}')
    },
    "94d5": function(e, t, n) {
        "use strict";
        n("7f7f"),
        n("c5f6");
        var a = n("7601")
          , o = n("a47e");
        function i(e, t) {
            var n = e[t];
            if (!window.isNull(n) && "{}" !== JSON.stringify(n))
                return n;
            if (n = Object(a["a"])(t),
            !window.isNull(n)) {
                try {
                    n = JSON.parse(n)
                } catch (o) {}
                return e[t] = n,
                n
            }
        }
        t["a"] = {
            getUserInfo: function(e) {
                var t = i(e, "userInfo");
                return t && "1.0.0" !== t.version && (Object(a["b"])("userInfo"),
                t = void 0),
                t || {}
            },
            getStatistics: function(e) {
                var t = i(e, "statisticsPack");
                return t || (t = {
                    time: (new Date).getTime(),
                    packs: []
                }),
                e.statisticsPack = t,
                t
            },
            getResourcesState: function(e) {
                return e["resourcesState"]
            },
            getLanguage: function(e) {
                var t = i(e, "language") || "zh";
                return o["a"][t] || (t = "zh"),
                t
            },
            getAlbumState: function(e) {
                return i(e, "albumState") || {}
            },
            getJetlag: function(e) {
                var t = i(e, "jetlag");
                return t && Number(t) || 0
            }
        }
    },
    a47e: function(e, t, n) {
        "use strict";
        t["a"] = {
            zh: "简体中文",
            en: "English",
            cht: "繁體中文"
        }
    },
    ace7: function(e, t, n) {
        e.exports = n("3f2e")
    },
    b414: function(e, t) {
        Math.division = function(e, t) {
            return t ? e / t : 0
        }
    },
    b9a3: function(e, t, n) {
        e.exports = n.p + "img/user_avatar.487fc893.png"
    },
    ba5f: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "v4cUs", (function() {
            return r
        }
        )),
        n.d(t, "v4oUs", (function() {
            return c
        }
        )),
        n.d(t, "v4cFa", (function() {
            return s
        }
        )),
        n.d(t, "v4cFpl", (function() {
            return u
        }
        )),
        n.d(t, "v4cFvl", (function() {
            return l
        }
        )),
        n.d(t, "v4cFac", (function() {
            return d
        }
        )),
        n.d(t, "v4Fp", (function() {
            return f
        }
        )),
        n.d(t, "v4cFfl", (function() {
            return p
        }
        )),
        n.d(t, "v4Cl", (function() {
            return m
        }
        )),
        n.d(t, "v4oFppl", (function() {
            return h
        }
        )),
        n.d(t, "v4cNfas", (function() {
            return g
        }
        )),
        n.d(t, "v4Fptl", (function() {
            return v
        }
        )),
        n.d(t, "v4Faopl", (function() {
            return b
        }
        )),
        n.d(t, "v4Timing", (function() {
            return w
        }
        )),
        n.d(t, "api", (function() {
            return y
        }
        )),
        n.d(t, "wechatConfigApi", (function() {
            return O
        }
        )),
        n.d(t, "reportVideo", (function() {
            return j
        }
        )),
        n.d(t, "upLikes", (function() {
            return S
        }
        )),
        n.d(t, "imgCollection", (function() {
            return P
        }
        )),
        n.d(t, "getCommentNum", (function() {
            return A
        }
        )),
        n.d(t, "publishComment", (function() {
            return k
        }
        )),
        n.d(t, "informComment", (function() {
            return I
        }
        )),
        n.d(t, "albumPraise", (function() {
            return M
        }
        )),
        n.d(t, "gifJigsaw", (function() {
            return R
        }
        )),
        n.d(t, "checkGifJigsaw", (function() {
            return C
        }
        )),
        n.d(t, "buyOnePhoto", (function() {
            return E
        }
        )),
        n.d(t, "browseRecord", (function() {
            return T
        }
        )),
        n.d(t, "getCaptcha", (function() {
            return x
        }
        )),
        n.d(t, "postFeedback", (function() {
            return N
        }
        )),
        n.d(t, "v4CFmapl", (function() {
            return _
        }
        )),
        n.d(t, "shortResolveOld", (function() {
            return F
        }
        )),
        n.d(t, "shortResolve", (function() {
            return L
        }
        )),
        n.d(t, "getInfoForToken", (function() {
            return D
        }
        )),
        n.d(t, "getPecket", (function() {
            return V
        }
        )),
        n.d(t, "grabPecket", (function() {
            return U
        }
        )),
        n.d(t, "getAccessData", (function() {
            return H
        }
        )),
        n.d(t, "getInteractiveData", (function() {
            return $
        }
        )),
        n.d(t, "getFrom", (function() {
            return B
        }
        )),
        n.d(t, "getAccessTime", (function() {
            return z
        }
        )),
        n.d(t, "getUserDistribution", (function() {
            return q
        }
        )),
        n.d(t, "getIncome", (function() {
            return G
        }
        )),
        n.d(t, "uploadFindMeImage", (function() {
            return J
        }
        )),
        n.d(t, "searchFace", (function() {
            return W
        }
        )),
        n.d(t, "searchResult", (function() {
            return Q
        }
        )),
        n.d(t, "getSearchHistory", (function() {
            return Z
        }
        )),
        n.d(t, "photoSaveToAiPhotoOnFace", (function() {
            return Y
        }
        )),
        n.d(t, "createFreeAlbum", (function() {
            return K
        }
        )),
        n.d(t, "photoSaveToAiPhoto", (function() {
            return X
        }
        )),
        n.d(t, "accountLogin", (function() {
            return ee
        }
        ));
        var a = n("c844")
          , o = n("ace7")
          , i = n("4207")
          , r = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return Object(a["a"])(o["V4CDomainName"] + "/rest/v4c/us", {
                a: e,
                p: t,
                t: 5e3 * parseInt(Object(i["a"])() / 5e3)
            })
        }
          , c = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return Object(a["a"])(o["V4ODomainName"] + "/rest/v4o/us", {
                a: e,
                p: t
            })
        }
          , s = function(e, t) {
            return Object(a["a"])(o["V4CDomainName"] + "/rest/v4c/fa", {
                a: e,
                t: t
            })
        }
          , u = function(e, t, n, i, r, c, s) {
            return Object(a["a"])(o["V4CDomainName"] + "/rest/v4c/fpl", {
                a: e,
                s: t,
                n: n,
                p: i,
                o: r,
                t: c,
                v: s
            })
        }
          , l = function(e, t) {
            return Object(a["a"])(o["V4CDomainName"] + "/rest/v4c/fvl", {
                a: e,
                t: t
            })
        }
          , d = function(e, t) {
            return Object(a["a"])(o["V4CDomainName"] + "/rest/v4c/fac", {
                a: e,
                t: t
            })
        }
          , f = function(e, t) {
            return Object(a["a"])(o["V4CDomainName"] + "/rest/v4c/fp", {
                p: e,
                t: t
            })
        }
          , p = function(e, t, n) {
            return Object(a["a"])(o["V4CDomainName"] + "/rest/v4c/ffl", {
                a: e,
                p: t,
                t: n
            })
        }
          , m = function(e) {
            return Object(a["a"])(o["V4DomainName"] + "/rest/v4/cl", {
                a: e
            })
        }
          , h = function(e) {
            return Object(a["a"])(o["V4DomainName"] + "/rest/v4/fppl", {
                a: e
            })
        }
          , g = function(e, t) {
            return Object(a["a"])(o["V4CDomainName"] + "/rest/v4c/nfas", {
                a: e,
                t: t
            })
        }
          , v = function(e, t, n, i, r) {
            return Object(a["a"])(o["V4CDomainName"] + "/rest/v4c/fptl", {
                a: e,
                n: t,
                o: n,
                s: i,
                t: r
            })
        }
          , b = function(e, t, n, i, r) {
            return Object(a["a"])(o["V4DomainName"] + "/rest/v4/faopl", {
                a: e,
                n: n,
                o: r,
                p: i,
                s: t
            })
        }
          , w = function() {
            return Object(a["a"])(o["fcApi"] + "/v4/timing?t=".concat((new Date).getTime()))
        }
          , y = function(e) {
            return Object(a["a"])(e)
        }
          , O = function(e) {
            return Object(a["a"])(o["apiUrl"] + "/rest/v3/wechat/share", {
                url: e
            }, "post")
        }
          , j = function(e) {
            return Object(a["a"])(o["apiUrl"] + "/rest/v3/video/report", {
                videoId: e
            }, "post")
        }
          , S = function(e, t, n, i) {
            return Object(a["a"])(o["restApi"] + "/rest/v3/ccl", {
                a: e,
                l: t,
                c: n,
                ic: i
            })
        }
          , P = function(e, t, n) {
            return Object(a["a"])(o["restApi"] + "/rest/v3/cc", {
                c: e,
                p: t,
                ic: n
            })
        }
          , A = function(e) {
            return Object(a["a"])(o["restApi"] + "/rest/v3/fcll", {
                a: e
            })
        }
          , k = function(e, t, n, i) {
            return Object(a["a"])(o["apiUrl"] + "/rest/v3/m/cmt/insert", {
                cmt: e,
                parentId: t,
                albumIdN: n,
                pc: i
            }, "post")
        }
          , I = function(e) {
            return Object(a["a"])(o["apiUrl"] + "/rest/v3/m/cmt/report", {
                cmtId: e
            }, "post")
        }
          , M = function(e, t, n, i) {
            return Object(a["a"])(o["restApi"] + "/rest/v3/cl", {
                a: e,
                l: t,
                p: n,
                ic: i
            })
        }
          , R = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5;
            return Object(a["a"])(o["apiUrl"] + "/rest/v3/gif/post", {
                photoIds: e,
                mod: t,
                duration: n
            }, "post")
        }
          , C = function(e) {
            return Object(a["a"])(o["apiUrl"] + "/rest/v3/gif/state/check", {
                uuid: e
            })
        }
          , E = function(e, t) {
            return Object(a["a"])(o["apiUrl"] + "/rest/v3/m/order/single/photo/insert", {
                albumIdN: e,
                photoId: t
            }, "post")
        }
          , T = function(e) {
            return Object(a["a"])(o["restApi"] + "/rest/v3/ch", {
                a: e
            })
        }
          , x = function(e, t, n, i) {
            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
            return Object(a["a"])(o["apiUrl"] + "/rest/v3/pc/validate/send/sms", {
                phone: e,
                ticket: t,
                vc: n,
                vcodeType: i,
                globalCode: r
            }, "post")
        }
          , N = function(e, t, n, i, r) {
            var c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "0";
            return Object(a["a"])(o["apiUrl"] + "/rest/v3/flashpass/coopapply", {
                actId: e,
                verifyCode: t,
                phone: n,
                contact: i,
                coopDemand: c,
                content: r
            }, "post")
        }
          , _ = function(e, t, n) {
            return Object(a["a"])(o["V4CDomainName"] + "/rest/v4c/fmapl", {
                a: e,
                n: t,
                t: n
            })
        }
          , F = function(e) {
            return Object(a["a"])(o["apiUrl"] + "/rest/v3/l2v", {
                l: e
            })
        }
          , L = function(e) {
            return Object(a["a"])(o["V3CDomainName"] + "/rest/v3c/alta", {
                l: e
            })
        }
          , D = function(e) {
            return Object(a["a"])(o["apiUrl"] + "/rest/v3/login/t", {
                t: e
            }, "post")
        }
          , V = function(e) {
            return Object(a["a"])(o["redPecketUrl"] + "/rest/v3/red/packet/redirect/list", {
                albumIdN: e
            }, "post")
        }
          , U = function(e, t) {
            return Object(a["a"])(o["redPecketUrl"] + "/rest/v3/red/packet/redirect/grab", {
                albumIdN: e,
                command: t
            }, "post")
        }
          , H = function(e) {
            return Object(a["a"])(o["statisticsApi"] + "/rest/v3/gas", {
                a: e
            })
        }
          , $ = function(e) {
            return Object(a["a"])(o["statisticsApi"] + "/rest/v3/gaid", {
                a: e
            })
        }
          , B = function(e) {
            return Object(a["a"])(o["statisticsApi"] + "/rest/v3/frs", {
                a: e
            })
        }
          , z = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime();
            return Object(a["a"])(o["statisticsApi"] + "/rest/v3/fpv", {
                a: e,
                s: 0,
                t: t,
                m: 1
            })
        }
          , q = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime();
            return Object(a["a"])(o["statisticsApi"] + "/rest/v3/fpv", {
                a: e,
                s: 0,
                t: t,
                m: 2
            })
        }
          , G = function(e) {
            return Object(a["a"])(o["statisticsApi"] + "/rest/v3/getIncome", {
                a: e
            })
        }
          , J = function(e, t, n) {
            return Object(a["a"])(o["faceRecognitionNewVersionApi"] + "/fr/auth", {
                u: e,
                p: t,
                a: n
            }, "post")
        }
          , W = function(e, t, n, i) {
            return Object(a["a"])(o["faceRecognitionNewVersionApi"] + "/fr/scan", {
                u: e,
                p: t,
                a: n,
                s: i
            }, "post")
        }
          , Q = function(e, t, n, i, r, c) {
            return Object(a["a"])(o["faceRecognitionNewVersionApi"] + "/fr/search", {
                a: e,
                u: t,
                f: n,
                s: i,
                cnt: r,
                pag: c
            }, "post")
        }
          , Z = function() {
            return Object(a["a"])(o["faceRecognitionNewVersionApi"] + "/fr/history", {})
        }
          , Y = function(e) {
            return Object(a["a"])(o["apiUrl"] + "/rest/v3/tmp/save", {
                info: e
            }, "post")
        }
          , K = function() {
            return Object(a["a"])(o["apiUrl"] + "/rest/v3/album/acquire/my/album")
        }
          , X = function(e, t) {
            return Object(a["a"])(o["apiUrl"] + "/rest/v3/cloud/album/save/identity/photo", {
                albumIdN: e,
                photos: t
            }, "post")
        }
          , ee = function(e, t) {
            return Object(a["a"])(o["apiUrl"] + "/rest/v3/login", {
                name: e,
                pwd: t
            }, "post")
        }
    },
    c844: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return y
        }
        ));
        n("28a5"),
        n("96cf"),
        n("ac6a"),
        n("456d");
        var a = n("3b8d")
          , o = n("bc3a")
          , i = n.n(o)
          , r = n("4328")
          , c = n.n(r)
          , s = n("3773")
          , u = n("80c0")
          , l = n("3264")
          , d = n("4360")
          , f = n("0439")
          , p = n("7219")
          , m = 3
          , h = {}
          , g = [3e3, 5e3, 1e4]
          , v = [0, 1206, 1350, 1701, 2705, 3605, 20009, 20010, 100003, 100004, 300005, 300008, 17007, 17009, 10006]
          , b = ["/rest/v3/fup", "/rest/v3/roshan", "/rest/v4c/us", "/v4/timing"]
          , w = ["/rest/v3/fpl", "/rest/v3/fup", "/rest/v3/fa"];
        function y(e, t) {
            return O.apply(this, arguments)
        }
        function O() {
            return O = Object(a["a"])(regeneratorRuntime.mark((function e(t, n) {
                var a, o, i, r, c, u = arguments;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            if (a = u.length > 2 && void 0 !== u[2] ? u[2] : "get",
                            o = u.length > 3 ? u[3] : void 0,
                            "https" !== location.protocol.split(":")[0] || "http" !== new p["a"](t).protocol.split(":")[0]) {
                                e.next = 5;
                                break
                            }
                            return console.warn("阻止在https环境下发送http请求，请求路径：", t),
                            e.abrupt("return");
                        case 5:
                            return a = a.toLowerCase(),
                            o = o || n,
                            i = "",
                            i = t.indexOf("/rest") > 0 || t.indexOf("biu.") > 0 || t.indexOf("ai.") > 0 ? Object(s["a"])(t, "post" === a ? {} : n, o) : t,
                            r = {
                                url: t,
                                data: n,
                                method: a,
                                timestamps: (new Date).getTime()
                            },
                            e.prev = 10,
                            e.next = 13,
                            j[a](i, "post" === a ? n : null);
                        case 13:
                            if (c = e.sent,
                            "string" !== typeof c.data || !/^https:\/\/aa\.\w+\.com\/oss_url_/.test(c.data)) {
                                e.next = 18;
                                break
                            }
                            return e.next = 17,
                            y(c.data);
                        case 17:
                            c = e.sent;
                        case 18:
                            return c.request = r,
                            r.errorCode = c.errorCode,
                            S(r),
                            e.abrupt("return", Promise.resolve(c));
                        case 24:
                            e.prev = 24,
                            e.t0 = e["catch"](10),
                            r.errorCode = -1,
                            S(r),
                            h[r.url] = h[r.url] || 0,
                            h[r.url] < m ? (setTimeout((function() {
                                y(t, n, a, o)
                            }
                            ), g[h[[r.url]]]),
                            h[r.url]++) : (h[r.url] = 0,
                            Promise.reject(e.t0));
                        case 30:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[10, 24]])
            }
            ))),
            O.apply(this, arguments)
        }
        var j = i.a.create({
            timeout: 5e4,
            headers: {
                Accept: "application/json"
            }
        });
        function S(e) {
            for (var t = 0, n = w.length; t < n; t++)
                e.url === w[t] && Object(l["a"])(9, {
                    actId: e.data.a,
                    sepId: e.data.s || 0,
                    name: e.url,
                    time: e.timestamps,
                    errorCode: e.errorCode,
                    total: (new Date).getTime() - e.timestamps
                })
        }
        function P(e) {
            var t;
            return t = Object.keys(e).indexOf("errorCode") >= 0 ? {
                e: e.errorCode,
                d: e.data,
                m: e.msg
            } : e,
            t
        }
        j.interceptors.request.use((function(e) {
            return "post" !== e.method && "put" !== e.method && "delete" !== e.method || (e.data = c.a.stringify(e.data)),
            e
        }
        ), (function(e) {
            return window.$notify("请求错误，请联系客服<br/>电话：0571-87711285"),
            console.warn(e),
            Promise.reject(e.data.msg)
        }
        )),
        j.interceptors.response.use((function(e) {
            var t = P(e.data);
            if (window.isNull(t.e))
                return Promise.reject(t.e);
            for (var n = !0, a = 0, o = b.length; a < o; a++)
                if (e.config.url.indexOf(b[a]) >= 0) {
                    n = !1;
                    break
                }
            for (var i = 0, r = v.length; i < r; i++)
                if (v.indexOf(t.e) >= 0) {
                    n = !1;
                    break
                }
            return 100004 === t.e && (f["a"].SAVE_SIGNOUT(d["a"].state),
            n = !1),
            n && ([2, 5, 1008, 10005, 20006, 200001].indexOf(t.e) >= 0 ? (2 === t.e && window.$notify("请登录后操作"),
            [5, 1008, 10005, 20006, 200001].indexOf(t.e) >= 0 && window.$notify("登录信息已过期，请重新登录"),
            f["a"].SAVE_SIGNOUT(d["a"].state),
            window.$login()) : window.$notify((u["a"][t.e] || t.m || "未知错误，错误码") + ": ".concat(t.e))),
            Promise.resolve(t)
        }
        ), (function(e, t) {
            for (var n = !1, a = 0, o = b.length; a < o; a++)
                if (e.config.url.indexOf(b[a]) >= 0) {
                    n = !0;
                    break
                }
            if (!n && h[e.config.url] >= m) {
                if ("Network Error" === e.message)
                    return void window.$notify("网络错误，请检查您的手机网络是否正常");
                window.$notify("响应错误，请联系客服<br/>电话：0571-87711285")
            }
            return Promise.reject(e)
        }
        ))
    },
    cf55: function(e) {
        e.exports = JSON.parse('{"components":{"livePlayer":{"countdown1":"距离直播开始：{s}秒","countdown2":"距离直播开始：{m}分{s}秒","countdown3":"距离直播开始：{h}小时{m}分{s}秒","countdown4":"距离直播开始：{d}天{h}小时{m}分{s}秒","comingSoon":"视频直播暂未开始，敬请期待…","flush":"刷新重试","reReload":"直播信号已中断， 请刷新重试","interrupt":"直播中断","GenerateAReplay":"视频直播已结束，正在生成回放视频…","finished":"视频直播已结束…"},"liveMenu":{"notStarted":"未开始","playBack":"回放","completed":"已结束","live":"直播"}},"module":{"date":{"toNowDate":{"second":"刚刚","minute":"{date}分钟前","hour":"{date}小时前","day":"{date}天前","month":"{date}月前","year":"{date}年前"}}},"album":{"findme":"找我","homepage":"主会场","personal":"我的","reserve":"预约","order":"升序","inverse":"降序","password":{"title":"请输入相册访问密码","input":"请输入密码","enter":"确定","jump":"该相册已访问，可跳过密码","error":"密码错误,请重新输入","verify":"格式不正确，密码为4-8位数字或字母"},"pageTitle":{"图片直播":"图片直播","喔图云摄影":"喔图云摄影","闪传直播平台":"闪传直播平台"},"albumInfo":{"pageviews":"已有 <span primary-color>{count}</span> 人次浏览了此相册","detail":"简介","introduction":"活动详情","directions":"到这里"},"navigation":{"live":"图片直播","hot":"热门","video":"视频","comment":"评论","interactiveUpload":"互动上传","customize":{"1010062553":"更多资讯","1012367633":"总相册","1033174408":"善行浙里"}},"nullData":{"live":"直播即将开始，敬请期待","hot":"暂无热门照片","video":"暂无视频，敬请期待","comment":"暂无评论"},"scrollList":{"loading":"数据加载中,请稍后","end":"到底了"},"sideBar":{"refresh":"刷新","order":"正序","inverse":"逆序"},"bottomAd":{"点我了解图片直播":"点我了解图片直播","点我使用闪传直播平台":"点我使用闪传直播平台","立即预约拍摄":"立即预约拍摄"},"liveCount":"{count}张新照片","bigImage":{"size":"当前图片{size}，可长按保存","atFirst":"已经是第一张了","atEnd":"已经是最后一张了"},"barrage":{"title":"弹幕设置","setting":"弹幕设置","opacity":"背景透明度","display":"显示区域","reset":"恢复默认","close":"关闭弹幕","open":"开启弹幕"},"comment":{"title":"相册评论","post":"提交","add":"添加评论...","cancel":"取消","report":"举报","reply":"回复","maintenance":"评论功能正在维护中","empty":"暂时还没有评论哦"},"poster":{"进入直播相册":"进入直播相册","进入喔图云摄影":"进入喔图云摄影","进入闪传直播":"进入闪传直播"},"favorite":{"ok":"好的"},"bigImageLayer":{"buyPhoto":"付费获取大图","load":"查看大图({size})","loading":"加载中","collect":"收藏","comment":"评论","share":"分享","like":"{count}人喜欢","likeGuide":"觉得照片不错！","likeError":"点赞出错了，请重新点赞","longPressSave":"可长按保存图片","clickAvatar":"点击头像查看人脸","collectionFailed":"收藏失败， 请先购买照片","commentSuccess":"评论成功","commentWaitForReview":"评论成功,等待审核","commentFailed":"评论失败"},"face":{"finding":"正在识别人脸","notFound":"未检测到人脸","found":"智能引擎已检索到<br><span>{count}</span> 张人脸"},"notify":{"reportSuccess":"举报成功","tooBusy":"操作太快了","actionFail":"操作失败"},"jigsaw":{"jigsaw":"拼图","canNotSurpass":"拼图张数不能超过{count}张","longPressToSaveJigsaw":"长按图片保存至手机","loadingResoure":"正在加载资源","computedLayout":"计算布局","jigsawProcessing":"拼图中","export":"导出图片","loadDefeatRemoveImg":"有图片加载失败，拼图时将移除该图片","jigsawErrorReload":"图片拼接出错,请重试","notSupportJigsaw":"您的浏览器不支持拼图","jigsawName":"拼图名称","jigsawNameStyle":"拼图样式","jigsawStart":"开始拼图","jigsawSelectBigImgStyle":"选择大图样式","jigsawJoint":"拼接","jigsawLattice":"宫格","jigsawPoster":"海报","jigsawNineGrids":"九宫格","jigsawGif":"动图","jigsawClassic":"经典","alibaba20th":"20周年","jigsawNext":"下一步","jigsawAlsoChoose":"已选择{count1}张照片,还可以选择{count2}张","jigsawPleaseSelectPhotos":"请选择照片","selectMoreThan":"九宫格拼图数量不能少于{count}张呦","pleaseChooseTheType":"选择GIF图类型","horizontal":"横图","vertical":"竖图","sure":"确定","cancel":"取消","thereCanInputTitle":"这里可以输入拼图标题哦(最多{count}个字)","gonggeNotSingular":"宫格拼图数量不能为单数呦"},"video":{"download":"下载","report":"举报","longPressQRDownloadVideo":"长按识别小程序码(微信中)，开始下载视频"},"pecket":{"enterCode":"请输入口令","hasBeenReceived":"该红包已领完","isBeingOpened":"{count}个红包正在开抢中","openAt":"距离红包开抢还有","allPecketHasBeenReceived":"口令红包已全部被领完","pecketFrom":"来自","unit":"元","gotoOfficialAccounts":"请前往公众号领取","justOpen":"马上抢","continue":"继续抢红包","details":"查看详情","opening":"正在抢...","youHasBeenReceived":"已领取过该红包"},"buyAlbumPhoto":{"purchased":"已购买","needToPay":"下载该照片总计需支付","saveHdAfterPay":"支付后可保存高清图","payNow":"立即支付","downloadRule01":"应版权方要求，该照片需付费后观看下载，一经购买，概不退款。","downloadRule02":"已购买的照片可在“我的”-“我购买的照片”中查看。"},"mainMeeting":{"gotoMainMeeting":"前往主会场页面","curAlbum":"当前相册"},"layout":{"feed":"瀑布流","time":"时间线","grids":"宫格式"},"qrShare":{"albumQr":"相册二维码","scanCode":"扫码查看此相册","save":"长按二维码保存到本地"},"exif":{"fileSize":"文件大小","shootingTime":"拍摄时间","number":"文件编号","Photographer":"摄影师","Retoucher":"修图师","ID":"图片ID"},"findMe":{"findMe":"找我","confirmSelect":"确定查找","reUpload":"重新上传","tryAgain":"重新上传","uploadHint":"上传单人正面照片，非正面角度或人物偏小都会影响精准度","youMaybeWant":"您可能想找的是","noHistoryHint":"上传单人正面照片，找到此人所有图片","noHistoryTile":"人脸识别","startScan":"开启人脸识别","scaning":"人脸识别中","forYouFind":"为您搜索到{count}张照片 | 为您搜索到{count}张照片","moreLikePhoto":"更多相似照片 | 更多相似照片","cancel":"取消","confirm":"确定","savePhoto":"转存照片","batchSave":"批量转存","jigsaw":"拼图","backAlbum":"返回相册","nolike":"抱歉，没有查找到相似照片~","saveToAiPhoto":"照片将转存至AI智能相册","longPressForSave":"长按进入智能相册","curPhotoNotLike":"当前人脸没有找到相似照片~","backAlbumBtn":"返回相册","free30day":"（免费保存30天）","youCanSavePhotoToAiPhoto":"保存照片至您的智能相册","loading":"正在转存...","placeCheckWay":"选择图片检索方式","faceScan":"人脸识别","numberScan":"号码识别","faceHint":"上传照片，智能检索人脸图片","numberHint":"输入号码，智能检索号码图片"}}}')
    },
    d083: function(e, t, n) {
        "use strict";
        t["a"] = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : navigator.userAgent
              , n = {
                notEmpty: /^.+$/g,
                email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+\.([a-zA-Z0-9_-])+/,
                tel: /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)/,
                phone: /^(^(13\d|14[57]|15[^4,\D]|17[35678]|18\d|19[89])\d{8}|170[0569]\d{7})$/,
                password: /^[a-zA-Z0-9\@\!\#\$\%\^\&\*\.\~\?]{6,16}$/,
                chinese: /^[\u4e00-\u9fa5],{0,}$/,
                qq: /^\d{5,11}$/,
                IDCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                date: /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/,
                sub: /^[a-zA-Z0-9]{4,}$/,
                slb: /^slb\d*$/,
                money: /^(\d+)(\.\d{1,2})?$/,
                yzm: /^\d{6}$/,
                upnumber: /^[0-9]*[1-9][0-9]*$/,
                tags: /<[^>]*>[\s\S]*?<\/[^>]*>|<\/?[\s\S]*\/?>/,
                url: /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*([\?&]\w+=\w*)*$/,
                ipAddress: /(\d+\.){3}\d+/,
                albumTitle: /^.{1,30}$/g,
                albumSep: /^.{1,8}$/g,
                albumpwd: /^[a-zA-Z0-9]{4,8}$/,
                mobile: /AppleWebKit.*(Mobile|MQQBrowser)+/,
                ios: /\(i[^;]+;( U;)? CPU.+Mac OS X/,
                iphone: /.*iPhone.*/,
                android: /(.*Linux+.*Android+.*)|(.*Android+.*Linux+.*)/,
                weibo: /.*Weibo.*/,
                ie: /.*Trident.*/,
                opera: /.*Presto.*/,
                webKit: /.*AppleWebKit.*/,
                wechat: /.*(MicroMessenger|micromessenger)+.*/,
                pcwechat: /.*WindowsWechat+.*/,
                dingtalk: /.*DingTalk.*/,
                AliApp: /.*AliApp.*/
            };
            return n[e].test(t.trim())
        }
    },
    eefb: function(e, t) {
        window.isArray = function(e) {
            return e instanceof Array
        }
    }
});
