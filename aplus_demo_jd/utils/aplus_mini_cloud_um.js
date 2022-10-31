/*! 2022-05-24 16:20:21 aplus_mini_cloud_um.js 1.9.20 */
module.exports = function (e) {
  function t(a) {
    if (n[a]) return n[a].exports;
    var r = n[a] = {
      exports: {},
      id: a,
      loaded: !1
    };
    return e[a].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports;
  }

  var n = {};
  return t.m = e, t.c = n, t.p = "", t(0);
}([function (e, t, n) {
  e.exports = n(1);
}, function (e, t, n) {
  "use strict";

  n(2).initGlobal(), e.exports = function (e) {
    var t = n(4);
    return n(102)(e, t);
  };
}, function (e, t, n) {
  "use strict";

  var a,
      r = n(3),
      o = r.APLUS,
      i = r.APLUS_QUEUE,
      s = r.GOLDLOG,
      u = r.GOLDLOG_QUEUE,
      c = !1;

  try {
    window && (a = window, c = !0);
  } catch (e) {
    a = {}, c = !1;
  }

  t.getContext = function () {
    return a;
  }, t.isWeb = function () {
    return window;
  }, t.initGlobal = function (e) {
    a = e ? e : {
      v: 1,
      aplus: {},
      aplus_queue: []
    };
    var t, n;
    if (c) try {
      t = a.aplus || a.goldlog || (a.aplus = {});
      var r = a.goldlog_queue || (a.goldlog_queue = []);
      n = a.aplus_queue || (a.aplus_queue = []), n = r.concat(n);
    } catch (e) {} else t = a.aplus, n = a.aplus_queue;
    return a.aplus = a.goldlog = t, a.aplus_queue = a.goldlog_queue = n, a;
  };

  var l = function (e) {
    if (e === o || e === s) {
      var t = a[o] || a[s];
      return t || (t = a[o] = a[s] = {}), t;
    }

    var n = u,
        r = i;

    if (e === r || e === n) {
      var c = a[r] || a[n];
      return c || (c = a[r] = a[n] = []), c;
    }
  };

  t.getGlobalValue = l, t.setGlobalValue = function (e, t) {
    a[e] = t;
  };

  var p = function (e) {
    var t;

    try {
      var n = l(o);
      t = n[e];
    } catch (e) {
      t = "";
    } finally {
      return t;
    }
  };

  t.getGoldlogVal = p;

  var f = function (e, t) {
    var n = !1;

    try {
      var a = l(o);
      e && (a[e] = t, n = !0);
    } catch (e) {
      n = !1;
    } finally {
      return n;
    }
  };

  t.setGoldlogVal = f, t.getClientInfo = function () {
    return p("_aplus_client") || {};
  };
}, function (e, t) {
  var n = "aplus",
      a = "goldlog",
      r = n + "_queue",
      o = a + "_queue",
      i = "mw_change",
      s = "MetaInfo",
      u = "append" + s,
      c = "set" + s,
      l = "http",
      p = "_pubsub",
      f = "other",
      g = "2101",
      d = "2201",
      _ = "2202",
      h = "19999",
      v = "1023",
      m = "1010",
      y = 3e4,
      S = 18e5,
      b = "ekvs",
      A = 1e4,
      I = 1,
      E = 1,
      P = 3e3,
      T = "$$_page_start",
      C = "$$_page_end",
      x = "$$_app_start",
      O = "$$_app_end",
      M = "aplus_user_profile",
      U = "imprint",
      w = "aplus-idtype",
      k = "aplus-jsbridge-only",
      N = "aplus-page-config",
      L = "aplus-skip-apv-rules",
      R = "aplus-rhost-v",
      D = "aplus-rhost-g",
      V = "autoGetOpenid";
  e.exports = {
    PAGE_ENTER: "PAGE_ENTER",
    CURRENT_PAGE_CONFIG: "CURRENT_PAGE_CONFIG",
    _ANONY_ID: "_anony_id",
    _DEV_ID: "_dev_id",
    _USER_ID: "_user_id",
    DEFAULT_CODE: f,
    OTHER: h,
    EVENT_MAP: {
      2101: "click",
      2201: "exposure",
      2202: "exposure",
      19999: f,
      1023: "app_show",
      1010: "app_hide_or_unload"
    },
    EVENT_ID_MAP: {
      EXP: d,
      IMPEXP: _,
      CLK: g,
      OTHER: h,
      SHOW: v,
      H_OR_U: m
    },
    APLUS: n,
    GOLDLOG: a,
    UNSUBSCRIBE: n + "." + n + p + ".unsubscribe",
    SUBSCRIBE: n + "." + n + p + ".subscribe",
    PUBLISH: n + "." + n + p + ".publish",
    CACHE_PUBS: n + "." + n + p + ".cachePubs",
    APLUS_UNIVERSAL: n + "_universal",
    APLUS_QUEUE: r,
    GOLDLOG_QUEUE: o,
    COMPLETE: "complete",
    PV_CODE: "2001",
    EXP_CODE: d,
    CLK_CODE: g,
    OTHER_CODE: h,
    CLK: "CLK",
    EXP: "EXP",
    SPM_CNT: "spm-cnt",
    SPM_URL: "spm-url",
    SPM_PRE: "spm-pre",
    MW_CHANGE_PV: i + "_pv",
    MW_CHANGE_HJLJ: i + "_hjlj",
    HTTP: l + ":",
    HTTPS: "https:",
    APPEND_META_INFO: u,
    SET_META_INFO: c,
    APLUS_APPEND_META_INFO: n + "." + u,
    APLUS_SET_META_INFO: n + "." + c,
    PVID: "pvid",
    APLUS_LOG_PIPE: "aplus-log-pipe",
    openAPIs: ["send", "enter", "sendPV", "record", "combineRecord", "recordUdata", "requestVTConfig", "requestRemoteConfig", "setPageSPM", "setMetaInfo", "appendMetaInfo", "updatePageProperties", "updateNextPageProperties", "updatePageUtparam", "updateNextPageUtparam", "pageAppear", "pageDisappear", "skipPage", "updateSessionProperties", "getPageSpmUrl", "getPageSpmPre", "setPageName", "getElementSPM", "recordAppLink"],
    SESSION_INTERVAL: y,
    SESSION_PAUSE_TIME: "session_pause_time",
    IMPRINT: "imprint",
    CURRENT_SESSION: "current_session",
    MAX_EVENTID_LENGTH: 128,
    MAX_PROPERTY_KEY_LENGTH: 256,
    MAX_PROPERTY_KEYS_COUNT: 100,
    FAILED_REQUESTS: "failed_requests",
    REQUESTS: "requests",
    SHARES: "shares",
    APLUS_SSRC: "_aplus_ssrc",
    EKVS: b,
    EVENT_MAX_COUNT: A,
    MEMORY_MAX_COUNT: I,
    MAX_QUEUE_COUNT: E,
    EVENT_SEND_DEFAULT_INTERVAL: P,
    PAGE_START: T,
    PAGE_END: C,
    APP_START: x,
    APP_END: O,
    USER_PROFILE_KEY: M,
    SHARE_CACHE_INTERVAL: S,
    IMPRINT: U,
    ID_TYPE: w,
    GLOBAL_PROPERTY: "globalproperty",
    JSBRIDGE_ONLY: k,
    PAGE_CONFIG: N,
    APLUS_SKIP_APV_RULES: L,
    APLUS_PV_DOMAIN: R,
    APLUS_EKV_DOMAIN: D,
    APLUS_IMPRINT_VERSION: "APLUS_IMPRINT_VERSION",
    APLUS_REMOTE_CONFIG: "APLUS_REMOTE_CONFIG",
    RANK: "ekv_rank",
    WEB_EVENT_SUFFIX: "/web_logs",
    WEB_PC_PV_SUFFIX: "v.gif",
    WEB_WAP_PV_SUFFIX: "m.gif",
    PAGE_LEAVE: "$$_page_leave",
    APLUS_AUTOTRACK_ENABLED: "aplus-autotrack-enabled",
    APLUS_AUTOTRACK_ENABLED_REMOTE: "aplus-autotrack-enabled-remote",
    APLUS_AUTOTRACK_CONFIG: "aplus-autotrack-config",
    APLUS_AUTOTRACK_CONFIG_REMOTE: "aplus-autotrack-config-remote",
    APLUS_DISABLE_AUTOEVENT: "aplus-disable-autoevent",
    APLUS_DISABLE_AUTOEVENT_REMOTE: "aplus-disable-autoevent",
    APLUS_DISABLE_AUTOPV: "aplus-disable-apv",
    APLUS_DISABLE_AUTOPV_REMOTE: "aplus-disable-apv-remote",
    APLUS_DEVICE_ENABLE: "aplus-device-enable",
    PERFORMANCE_WARING: "$$_perf_warning",
    START_ID: "START_ID",
    AUTO_GET_OPENID: V
  };
}, function (e, t, n) {
  e.exports = {
    metaInfo: {
      "aplus-rhost-v": "",
      "aplus-rhost-g": "",
      "aplus-mmstat-timeout": "10000",
      "aplus-disable-autoevent": !1,
      "aplus-disable-apv": !1,
      "aplus-autotrack-enabled": !1,
      "aplus-device-enable": !0,
      sdkId: "aplus_mini_cloud_um"
    },
    globalConfig: {
      isAli: !1,
      isDecodeUrl: !0,
      APLUS_QUEUE: "aplus_queue",
      ETAG_STORAGE_KEY: "__ETAG__CNA__ID__",
      script_name: "aplus_mini.js",
      "aplus-globaldata": {},
      lver: "1.9.20"
    },
    plugins: [{
      name: "inject_app_um",
      path: n(5)
    }, {
      name: "inject_page_um",
      path: n(39)
    }, {
      name: "pubsub",
      path: n(43)
    }, {
      name: "aplus_meta_inject",
      path: n(46)
    }, {
      name: "aplus_log_inject",
      path: n(50),
      deps: ["aplus_meta_inject"],
      config: {
        plugins: {
          pv: [{
            name: "etag",
            path: n(51)
          }, {
            name: "when_to_sendpv",
            path: n(53),
            config: {
              aplusWaiting: ""
            }
          }, {
            name: "where_to_send",
            path: n(54)
          }, {
            name: "what_to_send",
            path: n(55),
            config: {
              logdataToUt: {}
            }
          }, {
            name: "miniapp_data",
            path: n(58)
          }, {
            name: "what_to_sendpv_userdata",
            path: n(59),
            deps: ["what_to_send"]
          }, {
            name: "can_to_sendpv",
            path: n(61)
          }],
          hjlj: [{
            name: "etag",
            path: n(51)
          }, {
            name: "where_to_send",
            path: n(54)
          }, {
            name: "what_to_send",
            path: n(55),
            deps: []
          }, {
            name: "miniapp_data",
            path: n(58)
          }, {
            name: "what_to_hjlj_userdata",
            path: n(65)
          }]
        }
      }
    }, {
      name: "aplus_api",
      path: n(66),
      deps: ["aplus_log_inject", "aplus_meta_inject"]
    }, {
      name: "aplus_ac",
      path: n(74),
      deps: ["inject_page_um"]
    }, {
      name: "aplus_ae",
      path: n(80),
      deps: ["inject_page_um"]
    }, {
      name: "open_api",
      path: n(86)
    }, {
      name: "aplus_client",
      path: n(87)
    }, {
      name: "meta_queue",
      path: n(88),
      config: {
        isOpenApi: !0
      }
    }, {
      name: "etag",
      path: n(51)
    }, {
      name: "aplus_queue",
      path: n(90),
      config: {
        isOpenApi: !0
      }
    }, {
      name: "auto_openid",
      path: n(91),
      deps: ["aplus_meta_inject"]
    }, {
      name: "auto_tracker_um",
      path: n(92),
      deps: ["inject_page_um"]
    }, {
      name: "aplus_mini_report_um",
      path: n(98)
    }]
  };
}, function (e, t, n) {
  "use strict";

  function a(e, t) {
    var n = {};
    t && (n.scene = t), e && e.miniappDebugId && (n.debugId = e.miniappDebugId);

    for (var a in e) "$$_share_uid" !== a && 0 !== a.indexOf("$$_utm_") || (n[a] = e[a]);

    return n;
  }

  function r(e) {
    h().load(function () {
      v().w("cache init success"), e.query && e.query.miniappDebugId && e.query.miniappDebugId != h().get("miniappDebugId") && h().set("miniappDebugId", e.query.miniappDebugId);
    });
    var t = {},
        n = p(e);

    for (var a in n) "object" == typeof n[a] ? t = y.assign(n[a], t) : n[a] && (t[a] = n[a]);

    _(l.REQUESTS).load();

    var r = function () {
      _(l.FAILED_REQUESTS).load(), _(l.FAILED_REQUESTS).send("", {}, function () {
        v().i("send failed request queue");
      });
    },
        o = g().resume(t),
        i = g().getCurrentSessionId();

    d().setSessionId(i), o && _(l.REQUESTS).send("", {}, r);
  }

  function o() {
    g().pause(), _(l.FAILED_REQUESTS).send("", {}, function () {
      _(l.FAILED_REQUESTS).save(), h().save();
    });
  }

  function i(e) {
    try {
      my && my.onTitleCloseClick && e && my.onTitleCloseClick(e);
    } catch (e) {}
  }

  function s() {
    var e = App,
        t = !1,
        n = !1,
        s = u.getContext(),
        p = f.getContext(),
        g = {
      onLaunch: function (e) {
        f.initIsTB();
        var t = e ? e.query : {},
            n = e ? e.referrerInfo : {};

        if (A.enableCfg(h().getSync(l.APLUS_REMOTE_CONFIG)), E += 1, s.aplus_queue.push({
          action: "aplus.appendMetaInfo",
          arguments: ["aplus-session-args", y.assign(n, {
            scene: e.scene || ""
          })]
        }), t) {
          var r = {};

          if (t.spm && (s.aplus.spm_orign = t.spm), e.scene && (r.scene = e.scene), t.miniappDebugId) {
            var o = t.miniappDebugId.trim(),
                i = o.split("_");
            r = y.assign(r, {
              aplus_work_no: i.length > 2 ? i[1] : o,
              aplus_track_debug_id: o,
              aplus_flag: "aplus_test"
            });
          }

          s.aplus_queue.push({
            action: "aplus.appendMetaInfo",
            arguments: ["aplus-exdata", r]
          }), s.aplus_queue.push({
            action: "aplus.appendMetaInfo",
            arguments: ["aplus-cpvdata", r]
          }), s.aplus_queue.push({
            action: "aplus.appendMetaInfo",
            arguments: ["aplus-global-args", a(t, e.scene)]
          });
        }
      },
      onShow: function (e) {
        E += 1;
        var n,
            o = e ? e.query : {},
            i = e ? e.scene : "";
        s.aplus_queue.push({
          action: "aplus.setMetaInfo",
          arguments: ["aplus-global-args", a(o, i)]
        }), i && (s.aplus_queue.push({
          action: "aplus.appendMetaInfo",
          arguments: ["aplus-exdata", {
            scene: i
          }]
        }), s.aplus_queue.push({
          action: "aplus.appendMetaInfo",
          arguments: ["aplus-cpvdata", {
            scene: i
          }]
        }), s.aplus_queue.push({
          action: "aplus.appendMetaInfo",
          arguments: ["aplus-session-args", {
            scene: i
          }]
        })), 2 === E ? n = 1 : 1 === E ? n = 0 : v().w("APP_LAUNCH_TYPE should not reach this, value = " + E), c.onAplusReady(s.aplus_queue, l.SUBSCRIBE, function () {
          t || (t = !0, r(e)), b.clear();
          var a = I.getStartId();
          d().setStartId(a);
          var o = s.aplus.globalConfig || {};

          if (!o.isAli) {
            var i = m.getPageCode();
            s.onAppShowTime = Date.now(), s.aplus_queue.push({
              action: "aplus.record",
              arguments: [l.APP_START, "SHOW", {
                start_type: n,
                page_name: i || e.path || "-",
                url: e.path || "-"
              }]
            });
          }
        });
      },
      onHide: function () {
        c.onAplusReady(s.aplus_queue, l.SUBSCRIBE, function () {
          var e = s.aplus.globalConfig || {},
              n = m.getPageCode();

          if (!e.isAli) {
            var a = m.getCurrentPagePath(),
                r = Date.now() - s.onAppShowTime;
            s.aplus_queue.push({
              action: "aplus.record",
              arguments: [l.APP_END, "H_OR_U", {
                duration: r,
                end_type: 0,
                page_name: n || a || "-",
                url: a || "-",
                start_time: s.onAppShowTime
              }]
            });
          }

          t = !1, o();
        }), E = 0;
      }
    };
    e.after ? e.after({
      methods: {
        onLaunch: function (e) {
          var t = u.getContext();
          e.thisObject && (e.thisObject.aplus = t.aplus, e.thisObject.aplus_queue = t.aplus_queue), g.onLaunch(e.args);
        },
        onShow: function (e) {
          g.onShow(e.args);
        },
        onHide: function () {
          g.onHide();
        }
      }
    }) : (App = function (t) {
      var n = u.getContext();
      t.aplus = n, e(t);
    }, p.onAppShow(function (e) {
      if (!n) {
        var t = {};
        t = S(p.getLaunchOptionsSync) ? p.getLaunchOptionsSync() || {} : e, g.onLaunch(t), n = !0;
      }

      g.onShow(e);
    }), p.onAppHide(function () {
      g.onHide();
    }), i(g.onHide));
  }

  var u = n(2),
      c = n(6),
      l = n(3),
      p = n(14),
      f = n(9),
      g = n(15),
      d = n(19),
      _ = n(21),
      h = n(16),
      v = n(12),
      m = n(36),
      y = n(33),
      S = n(10),
      b = n(38),
      A = n(29),
      I = n(18),
      E = 0;

  e.exports = function () {
    return {
      run: function () {
        ["object", "function"].indexOf(typeof App) > -1 && s();
      }
    };
  };
}, function (e, t, n) {
  var a = n(7),
      r = n(9),
      o = n(2),
      i = n(3);
  e.exports = {
    resetFn: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
          a = e[t];

      e[t] = function () {
        var e = a && a.apply(this, arguments);
        return e ? n.call(this, e) : n.apply(this, arguments);
      };
    },
    rewriteFn: function (e, t, n) {
      var a = e[t];

      e[t] = function (e) {
        n.call(this, e), a && a.call(this, e);
      };
    },
    onAplusReady: function (e, t, n) {
      e.push({
        action: t,
        arguments: ["aplusReady", function (e) {
          "complete" === e && "function" == typeof n && n();
        }]
      });
    },
    click_proxy: function (e, t) {
      var a = n(2),
          r = a.getGlobalValue("aplus"),
          o = n(13),
          i = e[t];

      e[t] = function () {
        var e = i.apply(this, arguments),
            t = arguments[0];
        return o.isObject(t) && r && r.record && r.record("$$_auto_clk", "CLK", {}), e;
      };
    },
    getIndexByRect: function (e, t, n) {
      var s = -1,
          u = o.getGlobalValue(i.APLUS);
      r.getContext().createSelectorQuery().selectAll(e).boundingClientRect().exec(function (e) {
        a(e[0], function (e, n) {
          u.globalConfig.isAli ? e.width === t.width && e.height === t.height && e.left === t.left && e.top === t.top && e.right === t.right && e.bottom === t.bottom && (s = n) : s = n;
        }), n(s);
      });
    }
  };
}, function (e, t, n) {
  "use strict";

  var a = n(8);

  e.exports = function (e, t) {
    if (a(e) && void 0 === e.length) for (var n in e) e.hasOwnProperty(n) && t(n, e[n], e);else {
      var r,
          o = e.length;

      for (r = 0; r < o; r++) {
        var i = t(e[r], r);
        if ("break" === i) break;
      }
    }
  };
}, function (e, t) {
  e.exports = function (e) {
    if ("object" != typeof e || null === e) return !1;

    for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);

    return Object.getPrototypeOf(e) === t;
  };
}, function (e, t, n) {
  "use strict";

  function a() {
    if ("boolean" == typeof u) return u;
    var e = !1;

    try {
      var t = navigator ? navigator.userAgent || navigator.swuserAgent : "";

      if (e = !!/AliApp/i.test(t), /AliApp\((AP|DingTalk|AMAP|UC|QUARK)/i.test(t) && (e = !1), /AliApp\(KB/i.test(t) && (e = !!/Mist/.test(t)), /AlipayIDE Taobao/.test(t) && (e = !0), e) {
        var n = c().ctx;
        o(n.canIUse) && (e = !!n.canIUse("callUserTrack"));
      }
    } catch (e) {}

    return u = e, e;
  }

  function r() {
    return "boolean" == typeof u ? !!u : a();
  }

  var o = n(10),
      i = n(2),
      s = n(11);
  t.getCurrentPage = function () {
    var e = getCurrentPages();
    return e[e.length - 1] || {};
  }, t.getReferrerPage = function () {
    var e = getCurrentPages();
    return e[e.length - 2] || {};
  };
  var u;
  t.resetIsTB = function (e) {
    u = e;
  }, t.initIsTB = a;

  var c = function () {
    try {
      return {
        ctx: dd,
        platType: "dd",
        sdkType: "ddmp",
        logDomain: "/ddm_logs"
      };
    } catch (e) {
      try {
        return {
          ctx: my,
          platType: my && my.tb ? "taobao" : "my",
          sdkType: my && my.tb ? "taobaomp" : "mymp",
          logDomain: "/alipaym_logs"
        };
      } catch (e) {
        try {
          return {
            ctx: tt,
            platType: "tt",
            sdkType: "ttmp",
            logDomain: "/bytedancem_logs"
          };
        } catch (e) {
          try {
            return {
              ctx: swan,
              platType: "bd",
              sdkType: "bdmp",
              logDomain: "/baidum_logs"
            };
          } catch (e) {
            try {
              return {
                ctx: jd,
                platType: "wx",
                sdkType: "wxmp",
                logDomain: "/wxm_logs"
              };
            } catch (e) {
              return {
                ctx: {},
                platType: "UNKNOW",
                sdkType: "UNKNOW"
              };
            }
          }
        }
      }
    }
  };

  t.isTB = r, t.getPlatformType = function () {
    return c().platType;
  }, t.getSdkType = function () {
    return c().sdkType;
  }, t.getContext = function () {
    return c().ctx;
  }, t.getLogDomain = function () {
    return c().logDomain;
  };

  var l = "httpRequest",
      p = "request",
      f = function () {};

  t.request = function (e, t, n, a) {
    var r = c().ctx;
    o(a) || (a = f), o(n) || (n = f);
    var u = t.requestMethodName || p,
        g = r[u];
    o(g) || u === p || (u = p, g = r[u]), o(g) || u === l || (u = l, g = r[u]);

    var d,
        _ = t && t.dataType ? t.dataType : "base64",
        h = t && t.timeout ? t.timeout : 3e3,
        v = t.method || "GET";

    e = s.fixDomain(e);
    var m;

    if (o(g)) {
      var y = {
        url: e,
        method: v,
        dataType: _,
        timeout: h,
        success: function (e) {
          d || (d = !0, n(e));
        },
        fail: function (e) {
          d || (d = !0, a({
            failure: !0,
            data: e
          }));
        }
      };
      "POST" === v && "object" == typeof t.data && (y.url = y.url.split("?")[0], l === u ? (y.headers = {
        "Content-Type": "application/json"
      }, y.dataType = "json", y.data = JSON.stringify(t.data)) : y.data = t.data);
      var S = i.getGlobalValue("aplus"),
          b = S.getMetaInfo("aplus-request-extinfo");
      "object" == typeof b && (y._extInfo = b), g(y);
    } else d || (d = !0, a({
      failure: !0,
      data: m
    }));

    setTimeout(function () {
      d || (d = !0, m = 'aplus log request"' + e + ' timeout", time spend' + h + "ms", console && console.warn(m), a({
        failure: !0,
        data: m
      }));
    }, h);
  };
}, function (e, t) {
  "use strict";

  e.exports = function (e) {
    return "function" == typeof e;
  };
}, function (e, t, n) {
  "use strict";

  function a(e) {
    var t,
        n,
        a,
        o = [],
        i = e.length;

    for (a = 0; a < i; a++) t = e[a][0], n = e[a][1], o.push(0 === t.indexOf(r) ? n : t + "=" + encodeURIComponent(n));

    return o.join("&");
  }

  var r = "::-plain-::";
  t.mkPlainKey = function () {
    return r + Math.random();
  }, t.s_plain_obj = r, t.mkPlainKeyForExparams = function (e) {
    var t = e || r;
    return t + "exparams";
  }, t.arr2param = a, t.param2arr = function (e) {
    for (var t, n = e.split("&"), a = 0, r = n.length, o = []; a < r; a++) t = n[a].split("="), o.push([t.shift(), t.join("=")]);

    return o;
  }, t.arr2obj = function (e) {
    var t,
        n,
        a,
        r = {},
        o = e.length;

    for (a = 0; a < o; a++) t = e[a][0], n = e[a][1], r[t] = n;

    return r;
  }, t.jsonLikeStr2JSON = function (e) {
    if (!e || "string" != typeof e) return {};

    for (var t = e.replace(/['"{}]+/g, ""), n = t.split(","), a = [], r = 0; r < n.length; r++) a.push(n[r].split(":"));

    var o = this.arr2obj(a);
    return o;
  }, t.fixDomain = function (e) {
    return e.indexOf("https://") !== -1 || e.indexOf("http://") !== -1 ? e : (e = (/^\/\//.test(e) ? "" : "//") + e, /^\/\/(\d+\.){3,}\d+/.test(e) ? "http:" + e : "https:" + e);
  }, t.getAppKey = function () {
    var e = n(2).getGlobalValue("aplus");
    return e.getMetaInfo("appkey") || e.getMetaInfo("appId") || e.getMetaInfo("appKey");
  }, t.checkEmptyObj = function (e) {
    return "object" != typeof e || 0 === Object.keys(e).length;
  }, t.checkDomain = function (e) {
    var t = new RegExp(/^((http|https|''):\/\/)?([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:[0-9]{1,5})*)$/),
        a = (e.match(t) || [])[0];

    if (!e || !a) {
      var r = n(12);
      return r().tip_w(r().repeat("!")), r().tip_w("trackDomain error, please check aplus-rhost-v setting, current value is: " + e || "undefined"), r().tip_w("we accept these three patterns:"), r().tip_w("eg1: https://test-qtracking-xxx.com:port, port is optional"), r().tip_w("eg2: http://test-qtracking-xxx.com:port, port is optional"), r().tip_w("eg3: test-qtracking-xxx.com:port, port is optional"), r().tip_w(r().repeat("!")), !1;
    }

    return !0;
  }, t.checkOpenid = function (e) {
    if (!e) {
      var t = n(12);
      return t().tip_w(t().repeat("!")), t().tip_w("QT need an unique id as QT's deviceid!!"), t().tip_w("setting examples: aplus_queue.push({action: 'aplus.setMetaInfo', arguments: ['_anony_id', xxxxxx]});"), t().tip_w("referrence document: https://t.tb.cn/1dTHjTTQF0UjOTNHiCkaCS"), t().tip_w(t().repeat("!")), !1;
    }

    return !0;
  };
  var o = n(7);

  t.mapEventSampleRates = function (e) {
    var t = [];
    return o(e, function (e) {
      e.eventIds && e.eventIds.length > 0 && o(e.eventIds, function (n) {
        t.push({
          eventId: n,
          samplingRate: e.samplingRate
        });
      });
    }), t;
  };
}, function (e, t) {
  var n = "[APLUS] -- ";

  e.exports = function () {
    function e() {
      this.setDebug = function (e) {
        a = e;
      }, this.i = function () {
        if (a) try {
          "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.info.apply(console, arguments);
        } catch (e) {}
      }, this.e = function () {
        if (a) try {
          "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.error.apply(console, arguments);
        } catch (e) {}
      }, this.w = function () {
        if (a) try {
          "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.warn.apply(console, arguments);
        } catch (e) {}
      }, this.v = function () {
        try {
          "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.warn.apply(console, arguments);
        } catch (e) {}
      }, this.tip_w = function (e) {
        try {
          console.log("%c " + n + e, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;");
        } catch (e) {}
      }, this.repeat = function (e) {
        for (var t = e; t.length < 86;) t += e;

        return t;
      };
    }

    var t = null,
        a = !1;
    return function () {
      return null === t && (t = new e()), t;
    };
  }();
}, function (e, t) {
  t.isObject = function (e) {
    return null !== e && "[object Object]" === Object.prototype.toString.call(e);
  }, t.isEmptyObject = function (e) {
    if (this.isObject(e)) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
    return !0;
  };
}, function (e, t) {
  function n(e) {
    var t,
        a = Array.isArray(e) ? [] : {};

    if ("object" == typeof e) {
      if (JSON && JSON.parse) t = JSON.stringify(e), a = JSON.parse(t);else for (var r in e) a[r] = "object" == typeof e[r] ? n(e[r]) : e[r];
      return a;
    }
  }

  e.exports = n;
}, function (e, t, n) {
  var a = n(16),
      r = n(12),
      o = n(3),
      i = n(9),
      s = n(14),
      u = n(18),
      c = n(2);

  e.exports = function () {
    function e() {
      return {
        resume: function (e) {
          var t = !1;
          g || (g = a().get(o.CURRENT_SESSION));
          var r = new Date();
          return f = r.getTime(), (!g || !g.end_time || f - g.end_time > o.SESSION_INTERVAL) && (t = !0, n(e)), t;
        },
        pause: function () {
          l();
        },
        getCurrentSessionId: function () {
          return (g || {}).id;
        },
        getCurrentSession: function () {
          return g;
        },
        cloneCurrentSession: function () {
          return s(g);
        }
      };
    }

    function t(e) {
      var t = {};

      for (var n in e) t[n] = e[n];

      return t;
    }

    function n(e) {
      try {
        var n = (g || {}).options || {},
            a = u.assign({}, t(e.query));
        a.path = e.path || n.path, a.scene = e.scene ? i.getPlatformType() + "_" + e.scene : n.scene;
        var o = e.referrerInfo;
        o && (a.referrerAppId = o.appId), r().i("current launch options: ", a);
        var s = c.getGlobalValue("aplus"),
            l = s.getMetaInfo("globalproperty"),
            p = Date.now();
        g = {
          id: u.getRandomStr(10) + p,
          start_time: p,
          options: a,
          state_s: 1
        }, l && (g.gp = l);
      } catch (e) {
        r().e("generate new session failed, errmsg: ", e);
      }
    }

    function l() {
      if (g) {
        var e = new Date();
        g.end_time = e.getTime(), "number" != typeof g.duration && (g.duration = 0), g.duration = g.end_time - f, g.state_s = 0, a().set(o.CURRENT_SESSION, g), r().i("session end (%s): %s ", g.id, e.toLocaleTimeString(), g);
      }
    }

    var p = null,
        f = null,
        g = null;
    return function () {
      return p || (p = e()), p;
    };
  }();
}, function (e, t, n) {
  var a = n(9),
      r = n(10),
      o = n(17),
      i = n(12),
      s = n(11),
      u = n(3);

  e.exports = function () {
    function e() {
      var e = a.getContext();
      this.load = function (t) {
        c ? (e.removeStorage({
          key: n
        }), r(t) && t()) : (n = "aplus_cache_" + s.getAppKey() || "", e.getStorage({
          key: n,
          success: function (a) {
            c = a && a.data ? o.parse(a.data) || {} : {}, l = !0, e.removeStorage({
              key: n
            }), r(t) && t();
          },
          fail: function (a) {
            i().w("get cache failed, errmsg = " + a.errMsg), c = {}, l = !0, e.removeStorage({
              key: n
            }), r(t) && t();
          }
        }));
      }, this.save = function () {
        c && e.setStorage({
          key: n,
          data: o.stringfy(c)
        });
      }, this.set = function (e, t) {
        c && (c[e] = t);
      }, this.get = function (e) {
        return (c || {})[e];
      }, this.remove = function (e) {
        c && c[e] && delete c[e];
      }, this.getAll = function () {
        return c;
      }, this.clear = function () {
        c = null;
      }, this.has = function (e) {
        return !!this.get(e);
      }, this.isLoaded = function () {
        return l;
      }, this.getSync = function (e) {
        try {
          var t = a.getContext(),
              n = t.getStorageSync(e);
          return e === u.APLUS_IMPRINT_VERSION ? n : "string" == typeof n ? o.parse(n) : n;
        } catch (e) {}
      }, this.setSync = function (e, t) {
        try {
          var n = a.getContext();
          "object" == typeof t ? n.setStorageSync(e, JSON.stringify(t)) : n.setStorageSync(e, t);
        } catch (e) {}
      };
    }

    var t = null,
        n = "",
        c = null,
        l = !1;
    return function () {
      return t || (t = new e()), t;
    };
  }();
}, function (e, t) {
  t.stringfy = function (e) {
    if (e) try {
      return JSON.stringify(e);
    } catch (e) {}
    return "";
  }, t.parse = function (e) {
    if (e) try {
      return JSON.parse(e);
    } catch (e) {}
    return null;
  }, t.parseToArray = function (e) {
    if (e) try {
      return JSON.parse(e);
    } catch (e) {}
    return [];
  };
}, function (e, t, n) {
  function a(e) {
    for (var t = "", n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], a = 0; a < Number(e); a++) {
      var r = Math.round(Math.random() * (n.length - 1));
      t += n[r];
    }

    return t;
  }

  t.getRandomStr = a, t.startsWith = function (e, t) {
    return !(!e || !t || 0 === t.length || t.length > e.length) && e.substr(0, t.length) === t;
  }, t.assign = function (e) {
    if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");

    for (var t = Object(e), n = 1; n < arguments.length; n++) {
      var a = arguments[n];
      if (a) for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r]);
    }

    return t;
  }, t.checkEvent = function (e, t) {
    var a = n(3),
        r = n(12),
        o = n(17);
    if (!e || "string" != typeof e) return r().w("event logkey is invalid, id =", e || "'' event properties = ", o.stringfy(t.cusp)), !1;
    var i = ["id", "du"],
        s = {};
    if (i.forEach(function (e) {
      s[e] = 1;
    }), s[e]) return r().e("eventId has conflict with reservewords: " + i.join(",")), !1;
    if (e.length > a.MAX_EVENTID_LENGTH) return r().e("The maximum length of event id shall not exceed " + a.MAX_EVENTID_LENGTH), !1;
    if (t && ("object" != typeof t || Array.isArray(t)) && "string" != typeof t) return r().e("please check trackEvent properties. properties should be string or object(not include Array)"), !1;

    if ("object" == typeof t) {
      var u = 0;

      for (var c in t) if ({}.hasOwnProperty.call(t, c)) {
        if (c.length > a.MAX_PROPERTY_KEY_LENGTH) return r().e("The maximum length of property key shall not exceed " + a.MAX_PROPERTY_KEY_LENGTH), !1;
        if (u >= a.MAX_PROPERTY_KEYS_COUNT) return r().e("The maximum count of properties shall not exceed " + a.MAX_PROPERTY_KEYS_COUNT), !1;
        if (s[c]) return r().e("property key has conflict with reserveWords: " + i.join(",")), !1;
        u += 1;
      }
    }

    return !0;
  };
  var r = n(7);
  t.deleteInfo = function (e, t) {
    return r(t, function (t) {
      delete e[t];
    }), e;
  }, t.checkEmptyObj = function (e) {
    return "object" != typeof e || 0 === Object.keys(e).length;
  }, t.getStartId = function () {
    return a(10) + Date.now();
  }, t.DataType = {
    HALF_SESSION: "half_session",
    CLOSE_SESSION: "close_session",
    EKV: "ekv",
    ENTER_PAGE: "enter_page",
    LEAVE_PAGE: "leave_page"
  }, t.AccessType = {
    MOBILE_NETWORK_2G: "2g",
    MOBILE_NETWORK_3G: "3g",
    MOBILE_NETWORK_4G: "4g",
    MOBILE_NETWORK_NONE: "none"
  };
}, function (e, t, n) {
  var a = n(16),
      r = n(12),
      o = n(3),
      i = n(20);

  e.exports = function () {
    function e() {
      if (p.length) {
        var e = a().get(o.EKVS);
        n(e) + p.length <= o.EVENT_MAX_COUNT && (e = t(e, p), a().set(o.EKVS, e));
      }
    }

    function t(e, t) {
      e = e || {};
      var n = e[c];
      return i(n) && n.length ? e[c] = n.concat(t) : e[c] = [].concat(t), e;
    }

    function n(e) {
      var t = 0;

      for (var n in e) i(e[n]) && (t += e[n].length);

      return t;
    }

    function s() {
      return {
        addEvent: function (t) {
          t && (c ? (p.unshift(t), p.length > o.MEMORY_MAX_COUNT && (e(c), p.length = 0)) : (r().w("session id is null: ", c), f.unshift(t)));
        },
        setSessionId: function (e) {
          if (c = e, i(f) && f.length && c) {
            for (var t = 0; t < f.length; t++) this.addEvent(f[t]);

            f.length = 0;
          }
        },
        setStartId: function (e) {
          l = e;
        },
        getStartId: function () {
          return l;
        },
        getEkvs: function () {
          var e = a().get(o.EKVS);
          return p && p.length && (e = t(e, p)), e;
        },
        getEkvsLen: function () {
          var e = a().get(o.EKVS) || {},
              t = e[c] || [],
              n = p ? p.length : 0;
          return t.length + n;
        },
        clear: function () {
          a().remove(o.EKVS), p.length = 0, f.length = 0;
        }
      };
    }

    var u,
        c,
        l,
        p = [],
        f = [];
    return function () {
      return u || (u = s()), u;
    };
  }();
}, function (e, t) {
  "use strict";

  e.exports = function (e) {
    return Array.isArray ? Array.isArray(e) : /Array/.test(Object.prototype.toString.call(e));
  };
}, function (e, t, n) {
  var a = n(22),
      r = n(16),
      o = n(3),
      i = n(23),
      s = n(24),
      u = n(35),
      c = n(10),
      l = n(33),
      p = n(11),
      f = n(2);

  e.exports = function () {
    function e(e, t, r) {
      t = t || {};
      var s = i(e);

      if (s) {
        var u = n(2),
            p = u.getGlobalValue(o.APLUS),
            f = p._aplus_client || {};
        s.header = l.assign(s.header, a.getNetInfo(f)), s.noCache = t.noCache, y.enqueue(s);
      }

      c(r) && r();
    }

    function t(e, n) {
      var a = e === o.REQUESTS,
          r = a ? y : S,
          i = r.dequeue(),
          u = function () {
        t(e, n);
      },
          c = function () {
        i && !i.noCache && m.push(i), t(e, n);
      };

      i ? s(i, u, c) : (g(), n());
    }

    function g() {
      m.forEach(function (e) {
        S.enqueue(e);
      }), m.length = 0;
    }

    function d(e, n) {
      var a = function () {
        c(n) && n();
      };

      t(e, a);
    }

    function _() {
      this.send = function (e, t, n) {
        e ? this.add(e, t, function () {
          d(h, n);
        }) : d(h, n);
      }, this.add = function (t, n, a) {
        var r = f.getGlobalValue(o.APLUS);
        p.checkOpenid(r.getMetaInfo(o._ANONY_ID)) && e(t, n, a);
      }, this.load = function () {
        var e = h === o.REQUESTS,
            t = e ? y : S,
            n = r().get(h);
        n && n.length && n.forEach(function (e) {
          t.enqueue(e);
        }), r().remove(h);
      }, this.save = function () {
        var e = r().get(o.FAILED_REQUESTS) || [],
            t = e.concat(S.items());
        t && t.length && r().set(o.FAILED_REQUESTS, t), S.clear();
      };
    }

    var h = null,
        v = null,
        m = [],
        y = new u(),
        S = new u();
    return function (e) {
      return h = e, v || (v = new _()), v;
    };
  }();
}, function (e, t, n) {
  var a = n(9),
      r = n(3),
      o = n(16),
      i = n(2),
      s = n(18),
      u = n(11);
  t.getNetInfo = function (e) {
    var t = {},
        n = e.networkType;

    switch ("none" === n && (n = "unknown"), n = n ? n.toLowerCase() : "") {
      case s.AccessType.MOBILE_NETWORK_4G:
        t.access_subtype = "LTE", t.access = "4G";
        break;

      case s.AccessType.MOBILE_NETWORK_3G:
        t.access_subtype = "CDMA", t.access = "3G";
        break;

      case s.AccessType.MOBILE_NETWORK_2G:
        t.access_subtype = "GRPS", t.access = "2G";
        break;

      default:
        t.access = n, delete t.access_subtype;
    }

    return t;
  }, t.getHeaderInfo = function () {
    var e = {},
        t = i.getGlobalValue(r.APLUS),
        n = t.globalConfig || {},
        s = t._aplus_client || {},
        c = o().get(r.IMPRINT);
    c && (e.imprint = c), e.device_type = "Phone", e.sdk_version = n.lver, e.appkey = u.getAppKey(), e.device_info = "", e.appid = s.appId, e.app_env = s.appEnv, e.app_version = t.getMetaInfo("appVersion") || "devtools";
    var l = t.getMetaInfo("aplus-global-args");
    l && l.debugId ? e.miniappDebugId = l.debugId : o().get("miniappDebugId") && (e.miniappDebugId = o().get("miniappDebugId"));
    var p = s || {};
    p.safeArea = p.safeArea || {};

    var f = p.model || "",
        g = p.platform || "",
        d = p.brand || "",
        _ = d.toLowerCase();

    e.sdk_type = a.getSdkType(), e.platform = a.getPlatformType(), e.platform_sdk_version = p.SDKVersion, e.platform_version = p.platformVersion;
    var h = Math.round(p.screenWidth * p.pixelRatio),
        v = Math.round(p.screenHeight * p.pixelRatio);
    e.resolution = h > v ? h + "*" + v : v + "*" + h, e.pixel_ratio = p.pixelRatio, e.os = g, e.font_size_setting = p.fontSizeSetting, e.device_model = f, e.device_brand = d, e.device_manufacturer = _, e.device_manuid = f, e.device_name = f, e.os_version = p.os_version, e.language = p.language;
    var m = this.getNetInfo(s);
    return e.access = m.access, m.access_subtype && (e.access_subtype = m.access_subtype), e;
  };
}, function (e, t, n) {
  function a() {
    var e = null,
        t = i().cloneCurrentSession();
    return t && (e = {
      header: {
        st: "1"
      },
      analytics: {
        sessions: [t]
      }
    }), e;
  }

  function r() {
    var e = null,
        t = {},
        n = i().cloneCurrentSession();
    n && (t.sessions = [n]);
    var a = s().getEkvs();
    return a && (t.ekvs = c(a), s().clear()), (t.sessions || t.ekvs) && (e = {
      analytics: t
    }), e;
  }

  function o() {
    var e = null,
        t = s().getEkvs();
    return t && (e = {
      analytics: {
        ekvs: c(t)
      }
    }, s().clear()), e;
  }

  var i = n(15),
      s = n(19),
      u = n(18),
      c = n(14);

  e.exports = function (e) {
    var t = null;

    switch (e) {
      case u.DataType.HALF_SESSION:
        t = a();
        break;

      case u.DataType.CLOSE_SESSION:
        t = r();
        break;

      case u.DataType.EKV:
        t = o();
    }

    return t;
  };
}, function (e, t, n) {
  function a() {
    var e = d.getGlobalValue(h.APLUS),
        t = e.getMetaInfo(h.APLUS_PV_DOMAIN);
    if (!A.checkDomain(t)) return "";
    var n = s.getLogDomain();
    return n ? A.fixDomain(t) + n : (p().tip_w("current miniapp framework is not supported!!"), "");
  }

  function r(e) {
    var t = s.getContext(),
        n = e.success,
        a = e.fail,
        r = !1,
        o = null;
    e.success = function (e) {
      r || (o && clearTimeout(o), v(n) && n(e));
    }, e.fail = function () {
      r || (o && clearTimeout(o), v(a) && a(!1));
    };

    try {
      t.request(e);
    } catch (t) {
      try {
        dd && dd.httpRequest(e);
      } catch (e) {
        p().w("request send failed, err msg: ", e);
      }
    }

    o = setTimeout(function () {
      o && clearTimeout(o), r = !0, v(a) && a(r);
    }, e.timeout || I);
  }

  function o(e) {
    var t = y().getSync(h.APLUS_IMPRINT_VERSION);

    if (e) {
      var n = d.getGlobalValue("aplus");

      if (e.imprintVersion && e.imprintVersion !== t) {
        var a = e.imprintVersion;
        y().setSync(h.APLUS_IMPRINT_VERSION, a);
        var r = n.getMetaInfo(h.APLUS_PV_DOMAIN),
            o = A.fixDomain(r) + a;
        n.requestRemoteConfig(o, function (e) {
          e.data && e.data.data && (S.enableCfg(e.data.data), y().setSync(h.APLUS_REMOTE_CONFIG, e.data.data));
        }, function (e) {
          p().w("remote configuration request failed, errmsg:", e);
        });
      } else {
        var i = y().getSync(h.APLUS_REMOTE_CONFIG);
        S.enableCfg(i);
      }
    }
  }

  function i() {
    var e = s.getSdkType() + "/json",
        t = !1;

    try {
      my && (t = !0);
    } catch (e) {}

    return t ? {
      headers: {
        "Content-Type": e,
        "Msg-Type": e
      }
    } : {
      header: {
        "Content-Type": e,
        "Msg-Type": e
      }
    };
  }

  var s = n(9),
      u = n(22),
      c = n(25),
      l = n(26),
      p = n(12),
      f = n(17),
      g = n(27),
      d = n(2),
      _ = n(18),
      h = n(3),
      v = n(10),
      m = n(28),
      y = n(16),
      S = n(29),
      b = n(19),
      A = n(11),
      I = 5e3;

  e.exports = function (e, t, n, S) {
    var A = d.getGlobalValue(h.APLUS),
        I = u.getHeaderInfo();

    try {
      if ("my" === s.getPlatformType() || "taobao" === s.getPlatformType() ? (I.id_type = "alipay_id", I.id_tracking = {
        alipay_id: A.getMetaInfo(h._ANONY_ID) || y().get(h._ANONY_ID) || "",
        unionid: A.getMetaInfo(h._DEV_ID) || y().get(h._DEV_ID) || "",
        userId: A.getMetaInfo(h._USER_ID) || ""
      }) : (I.id_type = "openid", I.id_tracking = {
        openid: A.getMetaInfo(h._ANONY_ID) || y().get(h._ANONY_ID) || "",
        unionid: A.getMetaInfo(h._DEV_ID) || y().get(h._DEV_ID) || "",
        userId: A.getMetaInfo(h._USER_ID) || ""
      }), l.get() && (I[h.IMPRINT] = l.get()), e.analytics) {
        var E = A.getMetaInfo(h._USER_ID),
            P = A.getMetaInfo("_user_nick");
        e.analytics.active_user = {
          puid: E,
          provider: P
        };
      }

      e.header = _.assign(I, e.header, {
        ts: Date.now(),
        traceId: _.getRandomStr(10) + Date.now() + _.getRandomStr(9),
        start_id: b().getStartId()
      });
      var T = c(e),
          C = f.stringfy(T),
          x = a(),
          O = {
        url: x,
        method: "POST",
        data: g.encode(C),
        success: function (a) {
          var r = a.code || a.status || a.statusCode;

          if (200 === r || 413 === r) {
            p().i("data send success:", e, C);

            try {
              a.profile && (m.push({
                end: a.profile.responseEnd,
                start: a.profile.requestStart
              }), m.needSendPerformanceEvent());
            } catch (e) {
              p().w("current miniapp not support profile API");
            }

            o(a.data || {}), v(t) && t(a);
          } else p().w("data send failed:", C), v(n) && n();
        },
        fail: function (e) {
          p().w("timeout: ", C), v(n) && n();
        },
        complete: function () {
          v(S) && S();
        }
      };
      r(_.assign(O, i()));
    } catch (e) {}
  };
}, function (e, t) {
  function n(e, t) {
    var n = a(e, t);
    return e && e.id_tracking && (n[t.id_tracking || "id_tracking"] = a(e.id_tracking, s)), n;
  }

  function a(e, t) {
    var n = {};

    for (var a in e) t[a] ? n[t[a]] = e[a] : n[a] = e[a];

    return n;
  }

  function r(e, t) {
    var n = {};
    if (e) for (var a in e) e[a] && (n[t[a]] = e[a]);
    return n;
  }

  var o = {
    sessions: "sn",
    ekvs: "e",
    active_user: "active_user"
  },
      i = {
    sdk_type: "sdt",
    access: "ac",
    access_subtype: "acs",
    device_model: "dm",
    language: "lang",
    device_type: "dt",
    device_manufacturer: "dmf",
    device_name: "dn",
    platform_version: "pv",
    id_type: "it",
    font_size_setting: "fss",
    os_version: "ov",
    device_manuid: "did",
    platform_sdk_version: "psv",
    device_brand: "db",
    appkey: "ak",
    _id: "id",
    id_tracking: "itr",
    imprint: "imp",
    sdk_version: "sv",
    resolution: "rl",
    testToken: "ttn",
    miniappDebugId: "dk",
    pixel_ratio: "pr"
  },
      s = {
    uuid: "ud",
    unionid: "und",
    openid: "od",
    anonymousid: "nd",
    alipay_id: "ad",
    device_id: "dd",
    userid: "puid"
  };

  e.exports = function (e) {
    return {
      h: n(e.header, i),
      a: r(e.analytics, o)
    };
  };
}, function (e, t, n) {
  function a() {
    var e = "",
        t = this;
    this.set = function (t) {
      e = "string" == typeof t ? t : i.encode(JSON.stringify(t));
    }, this.get = function () {
      return e;
    }, this.getImpObj = function () {
      return o.parse(i.decode(e));
    }, this.getItem = function (e) {
      var n = t.getImpObj();
      return n ? n[e] || "" : "";
    }, this.load = function () {
      e = r().get(s.IMPRINT);
    }, this.save = function () {
      e && r().set(s.IMPRINT, e);
    };
  }

  var r = n(16),
      o = n(17),
      i = n(27),
      s = n(3),
      u = new a();
  e.exports = u;
}, function (e, t) {
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      a = function (e) {
    for (var t = {}, n = 0, a = e.length; n < a; n++) t[e.charAt(n)] = n;

    return t;
  }(n),
      r = String.fromCharCode,
      o = function (e) {
    var t;
    return e.length < 2 ? (t = e.charCodeAt(0), t < 128 ? e : t < 2048 ? r(192 | t >>> 6) + r(128 | 63 & t) : r(224 | t >>> 12 & 15) + r(128 | t >>> 6 & 63) + r(128 | 63 & t)) : (t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320), r(240 | t >>> 18 & 7) + r(128 | t >>> 12 & 63) + r(128 | t >>> 6 & 63) + r(128 | 63 & t));
  },
      i = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
      s = function (e) {
    return e.replace(i, o);
  },
      u = function (e) {
    var t = [0, 2, 1][e.length % 3],
        a = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0),
        r = [n.charAt(a >>> 18), n.charAt(a >>> 12 & 63), t >= 2 ? "=" : n.charAt(a >>> 6 & 63), t >= 1 ? "=" : n.charAt(63 & a)];
    return r.join("");
  },
      c = function (e) {
    return e.replace(/[\s\S]{1,3}/g, u);
  },
      l = function (e) {
    return c(s(e));
  },
      p = function (e, t) {
    return t ? l(String(e)).replace(/[+\/]/g, function (e) {
      return "+" == e ? "-" : "_";
    }).replace(/\=/g, "") : l(String(e));
  },
      f = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
      g = function (e) {
    switch (e.length) {
      case 4:
        var t = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3),
            n = t - 65536;
        return r((n >>> 10) + 55296) + r((1023 & n) + 56320);

      case 3:
        return r((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

      default:
        return r((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
    }
  },
      d = function (e) {
    return e.replace(f, g);
  },
      _ = function (e) {
    var t = e.length,
        n = t % 4,
        o = (t > 0 ? a[e.charAt(0)] << 18 : 0) | (t > 1 ? a[e.charAt(1)] << 12 : 0) | (t > 2 ? a[e.charAt(2)] << 6 : 0) | (t > 3 ? a[e.charAt(3)] : 0),
        i = [r(o >>> 16), r(o >>> 8 & 255), r(255 & o)];
    return i.length -= [0, 0, 2, 1][n], i.join("");
  },
      h = function (e) {
    return e.replace(/[\s\S]{1,4}/g, _);
  },
      v = function (e) {
    return d(h(e));
  },
      m = function (e) {
    return v(String(e).replace(/[-_]/g, function (e) {
      return "-" == e ? "+" : "/";
    }).replace(/[^A-Za-z0-9\+\/]/g, ""));
  };

  t.encode = p, t.decode = m;
}, function (e, t, n) {
  "use strict";

  function a() {
    try {
      for (var e = u, t = [], n = -(1 / 0), a = 1 / 0, r = 0, o = 0, i = 0; i < e.length; i++) {
        var c = e[i];
        n < c && (n = c), a >= c && (a = c), r += c, t.push(c);
      }

      return t.length > 0 && (o = r / t.length, o = Math.floor(100 * o) / 100), {
        max: n,
        min: a,
        average: o
      };
    } catch (e) {
      s().w(e);
    }
  }

  function r() {
    try {
      for (var e = performance.getEntries(), t = [], n = [i.WEB_EVENT_SUFFIX, i.WEB_PC_PV_SUFFIX, i.WEB_WAP_PV_SUFFIX], a = -(1 / 0), r = 1 / 0, o = 0, u = 0, c = 0; c < e.length; c++) {
        var l = e[c],
            p = ["beacon", "other", "img"].some(function (e) {
          return e === l.initiatorType;
        }),
            f = n.some(function (e) {
          return l.name.indexOf(e) > -1;
        });

        if (p && f) {
          var g = l.duration;
          a < g && (a = g), r >= g && (r = g), o += g, t.push(g);
        }
      }

      return t.length > 0 && (u = o / t.length), {
        max: a,
        min: r,
        average: u
      };
    } catch (e) {
      s().w(e);
    }
  }

  var o = n(2),
      i = n(3),
      s = n(12),
      u = [];
  t.getMetric = a, t.getMetricWeb = r, t.push = function (e) {
    var t = e.end - e.start;
    "number" == typeof t && t >= 300 ? u.push(t) : u = [];
  }, t.needSendPerformanceEvent = function () {
    if (u.length >= 10) {
      var e = o.getGlobalValue(i.APLUS);
      e._record(i.PERFORMANCE_WARING, "OTHER", {}), u = [];
    }
  }, t.clear = function () {
    u = [];
  };
}, function (e, t, n) {
  "use strict";

  function a(e) {
    var t;
    return t = l.isWeb() ? p.getLsRemoteCfg(g) : f().getSync(c.APLUS_REMOTE_CONFIG), t && t[e];
  }

  function r(e) {
    var t = l.getContext();
    t.aplus_queue.push({
      action: "aplus.setMetaInfo",
      arguments: [c.APLUS_DISABLE_AUTOEVENT_REMOTE, e]
    });
  }

  function o(e) {
    var t = l.getContext();
    t.aplus_queue.push({
      action: "aplus.setMetaInfo",
      arguments: [c.APLUS_DEVICE_ENABLE, e]
    });
  }

  function i(e) {
    var t = l.getContext();
    t.aplus_queue.push({
      action: "aplus.setMetaInfo",
      arguments: [c.APLUS_DISABLE_AUTOPV_REMOTE, e]
    });
  }

  function s(e) {
    var t = l.getContext();
    t.aplus_queue.push({
      action: "aplus.setMetaInfo",
      arguments: [c.APLUS_AUTOTRACK_ENABLED_REMOTE, e]
    });
  }

  var u = n(11),
      c = n(3),
      l = n(2),
      p = n(30),
      f = n(16),
      g = "APLUS_REMOTE_CONFIG";
  t.getAutoEventStatus = function () {
    var e = l.getGlobalValue("aplus"),
        t = e.getMetaInfo(c.APLUS_DISABLE_AUTOEVENT_REMOTE) || a("codelessClickEventStatus");
    return t;
  }, t.getDeviceStatus = function () {
    var e = l.getGlobalValue("aplus");
    return a("currentDeviceEnable") || e.getMetaInfo(c.APLUS_DEVICE_ENABLE);
  }, t.getAutoPageStatus = function () {
    var e = l.getGlobalValue("aplus"),
        t = e.getMetaInfo(c.APLUS_DISABLE_AUTOPV_REMOTE) || a("codelessCollectorPageStatus");
    return t;
  }, t.getAutoTrackStatus = function () {
    var e = l.getGlobalValue("aplus"),
        t = e.getMetaInfo(c.APLUS_AUTOTRACK_ENABLED_REMOTE) || a("codelessStatus");
    return t;
  }, t.enableCfg = function (e) {
    var t = l.getContext();
    e && (r(e.codelessClickEventStatus), i(e.codelessCollectorPageStatus), s(e.codelessStatus), o(e.currentDeviceEnable), e.eventSamplingRate && e.eventSamplingRate.length > 0 && t.aplus_queue.push({
      action: "aplus.setMetaInfo",
      arguments: [c.APLUS_EVENT_LIMITRATES, u.mapEventSampleRates(e.eventSamplingRate)]
    }), e.codelessIgnoreComponent && e.codelessIgnoreComponent.length > 0 && t.aplus_queue.push({
      action: "aplus.setMetaInfo",
      arguments: [c.APLUS_AUTOTRACK_CONFIG_REMOTE, e.codelessIgnoreComponent]
    }));
  };
}, function (e, t, n) {
  "use strict";

  var a = n(31),
      r = n(32),
      o = n(2),
      i = n(33),
      s = n(17),
      u = n(11);
  e.exports = {
    tryToDecodeURIComponent: function (e, t) {
      var n = t || "";
      if (e) try {
        n = decodeURIComponent(e);
      } catch (e) {}
      return n;
    },
    parseSemicolonContent: function (e, t, n) {
      t = t || {};
      var r,
          o,
          i = e.split(";"),
          s = i.length;

      for (r = 0; r < s; r++) {
        o = i[r].split("=");
        var u = a.trim(o.slice(1).join("="));
        t[a.trim(o[0]) || ""] = n ? u : this.tryToDecodeURIComponent(u);
      }

      return t;
    },
    nodeListToArray: function (e) {
      var t, n;

      try {
        return t = [].slice.call(e);
      } catch (r) {
        t = [], n = e.length;

        for (var a = 0; a < n; a++) t.push(e[a]);

        return t;
      }
    },
    getLsCna: function (e, t) {
      if (r.get && r.test()) {
        var n = "",
            a = r.get(e);

        if (a) {
          var o = a.split("_") || [];
          n = t ? o.length > 1 && t === o[0] ? o[1] : "" : o.length > 1 ? o[1] : "";
        }

        return decodeURIComponent(n);
      }

      return "";
    },
    setLsCna: function (e, t, n) {
      n && r.set && r.test() && r.set(e, t + "_" + encodeURIComponent(n));
    },
    getLsImpv: function (e, t) {
      if (r.get && r.test()) {
        var n = "",
            a = r.get(e);

        if (a) {
          var o = a.split("||") || [];
          n = t ? o.length > 1 && t === o[0] ? o[1] : "" : o.length > 1 ? o[1] : "";
        }

        return decodeURIComponent(n);
      }

      return "";
    },
    setLsImpv: function (e, t, n) {
      n && r.set && r.test() && r.set(e, t + "||" + encodeURIComponent(n));
    },
    setLsRemoteCfg: function (e, t, n) {
      if (n && r.set && r.test()) {
        var a = i.cloneDeep(n);
        "object" == typeof a && (a = JSON.stringify(a)), r.set(e, t + "||" + encodeURIComponent(a));
      }
    },
    getLsRemoteCfg: function (e, t) {
      if (r.get && r.test()) {
        var n = "",
            a = r.get(e);

        if (a) {
          var o = a.split("||") || [];
          n = t ? o.length > 1 && t === o[0] ? o[1] : "" : o.length > 1 ? o[1] : "";
        }

        return s.parse(decodeURIComponent(n));
      }

      return "";
    },
    getUrl: function (e) {
      var t = o.getGlobalValue("aplus"),
          a = n(3),
          r = e || "//log.mmstat.com/eg.js";

      try {
        var i = t.getMetaInfo(a.APLUS_PV_DOMAIN);
        i = u.fixDomain(i).replace(/\/\w+.gif$/, ""), r = i + "/eg.js";
      } catch (e) {}

      return r;
    }
  };
}, function (e, t) {
  "use strict";

  function n(e) {
    return "string" == typeof e ? e.replace(/^\s+|\s+$/g, "") : "";
  }

  t.trim = n;
}, function (e, t) {
  "use strict";

  e.exports = {
    set: function (e, t) {
      try {
        return localStorage.setItem(e, t), !0;
      } catch (e) {
        return !1;
      }
    },
    get: function (e) {
      try {
        return localStorage.getItem(e);
      } catch (e) {
        return "";
      }
    },
    test: function () {
      var e = "grey_test_key";

      try {
        return localStorage.setItem(e, 1), localStorage.removeItem(e), !0;
      } catch (e) {
        return !1;
      }
    },
    remove: function (e) {
      localStorage.removeItem(e);
    }
  };
}, function (e, t, n) {
  "use strict";

  t.assign = n(34), t.makeCacheNum = function () {
    return Math.floor(268435456 * Math.random()).toString(16);
  }, t.isStartWith = function (e, t) {
    return 0 === e.indexOf(t);
  }, t.isEndWith = function (e, t) {
    var n = e.length,
        a = t.length;
    return n >= a && e.indexOf(t) == n - a;
  }, t.any = function (e, t) {
    var n,
        a = e.length;

    for (n = 0; n < a; n++) if (t(e[n])) return !0;

    return !1;
  }, t.isNumber = function (e) {
    return "number" == typeof e;
  }, t.isNaN = function (e) {
    return isNaN ? isNaN(e) : e !== e;
  }, t.isContain = function (e, t) {
    return e.indexOf(t) > -1;
  };

  var a = function (e) {
    var t,
        n = e.constructor === Array ? [] : {};

    if ("object" == typeof e) {
      if (JSON && JSON.parse) t = JSON.stringify(e), n = JSON.parse(t);else for (var r in e) n[r] = "object" == typeof e[r] ? a(e[r]) : e[r];
      return n;
    }
  };

  t.cloneDeep = a;

  var r = function () {
    for (var e, t = /[?&]([^=#]+)=([^&#]*)/g, n = window.location.href, a = {}; e = t.exec(n);) a[e[1]] = e[2];

    return a;
  };

  t.getUrlParams = r;

  var o = function (e) {
    if (!e) return !0;

    for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;

    return !0;
  };

  t.isEmptyObject = o;
}, function (e, t) {
  e.exports = function (e, t) {
    return "function" != typeof Object.assign ? function (e) {
      for (var t = Object(e), n = 1; n < arguments.length; n++) {
        var a = arguments[n];
        if (null !== a) for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r]);
      }

      return t;
    }(e, t) : Object.assign({}, e, t);
  };
}, function (e, t, n) {
  var a = n(12);

  e.exports = function (e) {
    var t = e,
        n = [];
    this.enqueue = function (e) {
      "number" == typeof t && this.size() >= t && this.dequeue(), n.push(e);
    }, this.dequeue = function () {
      return n.shift();
    }, this.front = function () {
      return n[0];
    }, this.isEmpty = function () {
      return 0 === n.length;
    }, this.clear = function () {
      n.length = 0;
    }, this.size = function () {
      return n.length;
    }, this.items = function () {
      return n;
    }, this.print = function () {
      a().i("---queue: ", n.toString());
    };
  };
}, function (e, t, n) {
  function a(e, t) {
    if (!e || "-" === e) return "-";
    var n = [];

    for (var a in t) n.push(a + "=" + t[a]);

    var r = n.join("&");
    return r ? e + "?" + r : e;
  }

  var r = n(2),
      o = "",
      i = {};
  t.getCurrentPagePath = function () {
    return o;
  }, t.setCurrentPath = function (e) {
    e && (o = e);
  }, t.getPageQuery = function (e) {
    if (e) return i[e];
  }, t.setPageQuery = function (e, t) {
    e && (i[e] = t);
  }, t.getFullPath = function (e) {
    return a(e, i[e]);
  }, t.getPageName = function (e) {
    var t = r.getGlobalValue("aplus"),
        n = t.getMetaInfo("pageConfig") || {},
        a = e || o;
    n.hashMode && (a = location.hash);

    try {
      if (n && "object" == typeof n) for (var i in n) {
        if (i === a) break;

        if (n[i] && n[i].regRule) {
          a = n[i].regRule.test(a) ? i : a;
          break;
        }
      }
    } catch (e) {}

    return n[a];
  };
  var s = n(12),
      u = n(37);
  t.getWxTitle = function (e) {
    if (!e) return "";
    var t = n(9),
        a = t.getPlatformType(),
        o = "";

    try {
      if ("wx" === a && __wxConfig) {
        var i = __wxConfig,
            c = __wxConfig.page || {},
            l = c[e] || c[e + ".html"],
            p = {},
            f = {};

        if (i.global && i.global.window && i.global.window.navigationBarTitleText && (p.title = i.global.window.navigationBarTitleText), l && l.window && l.window.navigationBarTitleText && (f.title = l.window.navigationBarTitleText), !f.title && __wxAppCode__) {
          var g = __wxAppCode__[e + ".json"];
          g && g.navigationBarTitleText && (f.title = g.navigationBarTitleText);
        }

        var d = r.getContext();
        d.globalTitleMap && u(d.globalTitleMap, function (t, n) {
          t === e && (o = n);
        }), 0 === o.length && (o = f.title || p.title || "");
      }

      return o;
    } catch (e) {
      return s().w("current platform can not track page title"), o;
    }
  }, t.getPageCode = function (e) {
    return (this.getPageName(e) || {}).pageName;
  }, t.getPageTitle = function (e) {
    return (this.getPageName(e) || {}).pageTitle || this.getWxTitle(e);
  }, t.getVTRealtimeCode = function () {
    if (o) {
      var e = i[o] || {},
          t = /^\$vt_/,
          n = decodeURIComponent(e.scene);
      return n && t.test(n) && n.replace(t, "");
    }
  };
}, function (e, t) {
  "use strict";

  e.exports = function (e, t) {
    if (Object && Object.keys) for (var n = Object.keys(e), a = n.length, r = 0; r < a; r++) {
      var o = n[r];
      t(o, e[o]);
    } else for (var i in e) t(i, e[i]);
  };
}, function (e, t, n) {
  function a() {
    var e = o.getContext();
    return e.ekvRank ? e.ekvRank++ : e.ekvRank = 1, e.ekvRank;
  }

  function r() {
    var e = o.getContext();
    e.ekvRank = 0;
  }

  var o = n(2);
  t.rank = a, t.clear = r;
}, function (e, t, n) {
  "use strict";

  function a(e) {
    var t = {};

    try {
      A(e, function (e, n) {
        0 === e.indexOf("utm_") && (t[e] = n);
      });
    } catch (e) {}

    return t;
  }

  function r(e, t) {
    var n = y.getContext(),
        a = T.getCurrentPage(),
        r = a.route || a.is || "",
        o = a.options || {},
        i = I.obj2param(o, !0);
    i && (r = r + "?" + i), e.query || (e.query = {}), e.query.$$_share_uid = n.aplus.getMetaInfo("_anony_id") || n.aplus.__ETAG__CNA__ID__, e.query.$$_utm_medium = 3, e.query = C.assign({}, o, e.query);
    var s = e.path || r,
        u = "$$_share_uid=" + e.query.$$_share_uid + "&$$_utm_medium=3";
    return s.indexOf("?") > -1 ? e.path = s + "&" + u : e.path = s + "?" + u, e.status = "ready", n.aplus_queue.push({
      action: S.PUBLISH,
      arguments: [t, e]
    }), e;
  }

  function o() {
    var e = y.getContext(),
        t = {
      status: "ready"
    };
    e.aplus_queue.push({
      action: S.PUBLISH,
      arguments: ["onPullDownRefresh", t]
    });
  }

  function i() {
    var e = y.getContext(),
        t = this,
        n = {
      status: "ready",
      context: t
    };
    e.aplus_queue.push({
      action: S.PUBLISH,
      arguments: ["onReachBottom", n]
    });
  }

  function s(e) {
    var t = y.getContext();

    try {
      P.setCurrentPath(this.route), e && P.setPageQuery(this.route, e), E().i("Page onLoad: ", this.route, e);
      var n = this;
      b.onAplusReady(t.aplus_queue, S.SUBSCRIBE, function () {
        t.aplus.appendMetaInfo(S.GLOBAL_PROPERTY, a(e)), t.aplus_queue.push({
          action: S.PUBLISH,
          arguments: ["onLoad", {
            status: "ready",
            context: n
          }]
        });
        var r = T.getCurrentPage();
        b.resetFn(r, "setData", function (e) {
          t.aplus_queue.push({
            action: S.PUBLISH,
            arguments: ["onPageDataChanged", {
              data: e,
              context: n
            }]
          });
        });
      });
    } catch (e) {
      E().w("onPageLoad: ", e);
    }
  }

  function u() {
    var e = y.getContext();

    try {
      P.setCurrentPath(this.route), b.onAplusReady(e.aplus_queue, S.SUBSCRIBE, function () {
        var t = this;
        e.aplus_queue.push({
          action: S.PUBLISH,
          arguments: ["onShow", {
            status: "ready",
            context: t
          }]
        });
      });
    } catch (e) {
      E().w("onPageShow: ", e);
    }
  }

  function c() {
    var e = y.getContext();

    try {
      var t = this;
      e.aplus_queue.push({
        action: S.PUBLISH,
        arguments: ["onReady", {
          status: "ready",
          context: t
        }]
      });
    } catch (e) {
      E().w("onPageReady: ", e);
    }
  }

  function l() {
    var e = y.getContext();

    try {
      e.aplus_queue.push({
        action: S.PUBLISH,
        arguments: ["onHide", {
          status: "ready"
        }]
      });
    } catch (e) {
      E().w("onPageHide: ", e);
    }
  }

  function p(e) {
    var t = y.getContext();
    t.aplus_queue.push({
      action: S.PUBLISH,
      arguments: ["onAplusClk", {
        status: "ready",
        event: e,
        context: this
      }]
    });
  }

  function f(e) {
    var t = y.getContext(),
        n = this;
    t.aplus_queue.push({
      action: S.PUBLISH,
      arguments: ["onAplusTouch", {
        status: "ready",
        context: n,
        event: e
      }]
    });
  }

  function g(e) {
    if (e.onShareAppMessage) {
      var t = e.onShareAppMessage;

      e.onShareAppMessage = function (e) {
        var n = t.call(this, e) || {};
        return r(n, "onShareAppMessage");
      };
    }
  }

  function d(e) {
    if (e.onShareTimeline) {
      var t = e.onShareTimeline;

      e.onShareTimeline = function (e) {
        var n = t.call(this, e) || {};
        return r(n, "onShareTimeline");
      };
    }
  }

  function _() {
    try {
      var e,
          t = Page;
      t.after && (e = t.after), Page = function (e) {
        b.rewriteFn(e, "onShow", u), b.rewriteFn(e, "onHide", l), b.rewriteFn(e, "onUnload", l), b.rewriteFn(e, "onLoad", s), b.rewriteFn(e, "onReady", c), b.rewriteFn(e, "onPullDownRefresh", o), b.rewriteFn(e, "onReachBottom", i), b.rewriteFn(e, "onAplusClk", p), b.rewriteFn(e, "onAplusTouch", f), g(e), d(e), t(e);
      }, e && (Page.after = function () {
        e.apply(this, arguments);
      });
    } catch (e) {
      E().w("Page hook error");
    }
  }

  function h() {
    try {
      var e = Component;

      Component = function (t) {
        try {
          t.methods = t.methods || {};
          var n = t.methods;
          b.rewriteFn(n, "onShow", u), b.rewriteFn(n, "onHide", l), b.rewriteFn(n, "onUnload", l), b.rewriteFn(n, "onLoad", s), g(n), e(t);
        } catch (n) {
          e(t);
        }
      };
    } catch (e) {
      E().w("Component hook error");
    }
  }

  function v(e, t, n) {
    ["object", "function"].indexOf(typeof e) > -1 ? n() : E().w("typeof " + t + " is not object cant watchExp.");
  }

  function m() {
    var e = this,
        t = y.getContext(),
        a = n(9),
        r = a.getContext();

    try {
      if (r && r.setNavigationBarTitle) {
        var o = r.setNavigationBarTitle;
        Object.defineProperty(r, "setNavigationBarTitle", {
          get: function () {
            return function (n) {
              var r = a.getCurrentPage(),
                  i = r.route || r.is;
              n = x.isObject(n) ? n : {}, O[i] = n.title, t.globalTitle = O, o.call(e, n);
            };
          }
        });
      }
    } catch (e) {
      E().w(e);
    }
  }

  var y = n(2),
      S = n(3),
      b = n(40),
      A = n(37),
      I = n(42),
      E = n(12),
      P = n(36),
      T = n(9),
      C = n(18),
      x = n(13),
      O = {};

  e.exports = function () {
    return {
      run: function () {
        v(Page, "Page", _), v(Component, "Component", h), m();
      }
    };
  };
}, function (e, t, n) {
  t.resetFn = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
        a = e[t];

    e[t] = function () {
      var e = a && a.apply(this, arguments);
      return e ? n.call(this, e) : n.apply(this, arguments);
    };
  }, t.rewriteFn = function (e, t, n) {
    var a = e[t];

    e[t] = function (e) {
      n.call(this, e), a && a.call(this, e);
    };
  }, t.onAplusReady = function (e, t, n) {
    e.push({
      action: t,
      arguments: ["aplusReady", function (e) {
        "complete" === e && "function" == typeof n && n();
      }]
    });
  };
  var a = n(41),
      r = n(9),
      o = n(12),
      i = n(11),
      s = n(37),
      u = n(13),
      c = n(34);

  t.click_proxy = function (e, t) {
    var l = n(2),
        p = l.getGlobalValue("aplus"),
        f = e[t];

    e[t] = function () {
      var e = f.apply(this, arguments),
          n = arguments[0];

      if (n && u.isObject(n) && p && p._record) {
        var l = r.getCurrentPage(),
            g = Object.create(null);
        n.currentTarget && (n.currentTarget.dataset && s(n.currentTarget.dataset, function (e, t) {
          !u.isObject(t) && t && (g[e] = t);
        }), n.currentTarget.id && (g.element_id = n.currentTarget.id));
        var d = l.route || l.is || "unknown_page";
        "unknown_page" === d && o().w("get pagepath failed in click_proxy", l), g = c(g, {
          is_auto: 1
        });

        var _ = a.hash(d, i.getAppKey()) + a.hash(t, i.getAppKey());

        p._record(_, "CLK", g);
      }

      return e;
    };
  };
}, function (e, t) {
  "use strict";

  t.hash = function (e, t) {
    var n,
        a,
        r = 1315423911,
        o = t || r;

    for (n = e.length - 1; n >= 0; n--) a = e.charCodeAt(n), o ^= (o << 5) + a + (o >> 2);

    var i = (2147483647 & o).toString(16);
    return i;
  };
}, function (e, t) {
  "use strict";

  function n(e, t) {
    var n,
        r,
        o,
        i = [],
        s = e.length;

    for (o = 0; o < s; o++) {
      n = e[o][0], r = e[o][1];
      var u = 0 === n.indexOf(a),
          c = u || t ? r : encodeURIComponent(r);
      i.push(u ? c : n + "=" + c);
    }

    return i.join("&");
  }

  t.arr2obj = function (e) {
    var t,
        n,
        a,
        r = {},
        o = e.length;

    for (a = 0; a < o; a++) t = e[a][0], n = e[a][1], r[t] = n;

    return r;
  }, t.param2obj = function (e) {
    if ("object" == typeof e) return e;
    var t = {};
    if (!e || "string" != typeof e) return t;

    for (var n = e.split("&"), a = 0; a < n.length; a++) {
      var r = n[a],
          o = r.indexOf("="),
          i = r.split("="),
          s = r.length;
      if (2 === i.length) t[i[0]] = i[1] || "";else if (o > 0) {
        var u = r.slice(0, o),
            c = r.slice(o + 1, s) || "";
        t[u] = c;
      } else t[i[0]] = "";
    }

    return t;
  };
  var a = "::-plain-::";
  t.s_plain_obj = a, t.arr2param = n, t.obj2param = function (e, t) {
    var n,
        r,
        o,
        i = [];

    for (n in e) n && e.hasOwnProperty(n) && ("object" == typeof e[n] ? (r = "" + this.obj2param(e[n]), o = r) : (r = "" + e[n], o = n + "=" + r), t ? i.push(o) : i.push(0 === n.indexOf(a) ? r : o));

    return i.join("&");
  }, t.encodeGokeyValue = function (e) {
    return e;
  };
}, function (e, t, n) {
  var a = n(44),
      r = n(2);

  e.exports = function () {
    return {
      run: function () {
        var e = r.getGlobalValue("aplus");
        e.aplus_pubsub || (e.aplus_pubsub = a.create());
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  var a = n(10),
      r = n(45),
      o = function (e) {
    for (var t = e.length, n = new Array(t - 1), a = 1; a < t; a++) n[a - 1] = e[a];

    return n;
  },
      i = r.extend({
    callable: function (e) {
      if (!a(e)) throw new TypeError(e + " is not a function");
      return e;
    },
    create: function (e) {
      var t = new this();

      for (var n in e) t[n] = e[n];

      return t.handlers = [], t.pubs = {}, t;
    },
    setHandlers: function (e) {
      this.handlers = e;
    },
    subscribe: function (e, t) {
      this.callable(t);
      var n = this,
          a = n.pubs || {},
          r = a[e] || [];
      if (r) for (var o = 0; o < r.length; o++) {
        var i = r[o]();
        t.apply(n, i);
      }
      var s = n.handlers || [];
      return e in s || (s[e] = []), s[e].push(t), n.setHandlers(s), n;
    },
    unsubscribe: function (e, t) {
      this.callable(t);

      try {
        var n = this.handlers[e];
        if (!n) return this;

        if ("object" == typeof n && n.length > 0) {
          for (var a = 0; a < n.length; a++) {
            var r = t.toString(),
                o = n[a].toString();
            r === o && n.splice(a, 1);
          }

          this.handlers[e] = n;
        } else delete this.handlers[e];
      } catch (e) {}

      return this;
    },
    publish: function (e) {
      var t = o(arguments),
          n = this.handlers || [],
          r = n[e] ? n[e].length : 0;
      if (r > 0) for (var i = 0; i < r; i++) {
        var s = n[e][i];
        a(s) && s.apply(this, t);
      }
      return this;
    },
    cachePubs: function (e) {
      var t = this.pubs || {},
          n = o(arguments);
      t[e] || (t[e] = []), t[e].push(function () {
        return n;
      });
    }
  });

  e.exports = i;
}, function (e, t, n) {
  "use strict";

  function a() {}

  var r = n(10);
  a.prototype.extend = function () {}, a.prototype.create = function () {}, a.extend = function (e) {
    return this.prototype.extend.call(this, e);
  }, a.prototype.create = function (e) {
    var t = new this();

    for (var n in e) t[n] = e[n];

    return t;
  }, a.prototype.extend = function (e) {
    var t = function () {};

    try {
      r(Object.create) || (Object.create = function (e) {
        function t() {}

        return t.prototype = e, new t();
      }), t.prototype = Object.create(this.prototype);

      for (var n in e) t.prototype[n] = e[n];

      t.prototype.constructor = t, t.extend = t.prototype.extend, t.create = t.prototype.create;
    } catch (e) {
      console && console.log(e);
    } finally {
      return t;
    }
  }, e.exports = a;
}, function (e, t, n) {
  "use strict";

  e.exports = function () {
    return {
      run: function () {
        n(47)(this.options.context.aplus_config);
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  var a = n(2),
      r = n(3),
      o = n(48);

  e.exports = function (e) {
    var t = a.getGlobalValue(r.APLUS),
        n = t._$ = t._$ || {};
    n.is_terminal = !0, n.send_pv_count = 0, n.spm = {
      data: {}
    }, n.meta_info = o.qGet() || {}, t.globalConfig = e.globalConfig;

    for (var i in e.metaInfo) o.setMetaInfo(i, e.metaInfo[i]);

    t._$ = n, t.isInternational = function () {
      return !1;
    };
  };
}, function (e, t, n) {
  "use strict";

  function a() {
    return i = f || {}, f;
  }

  function r() {
    return i || a();
  }

  function o(e, t) {
    return i || (i = {}), "aplus-inject-record-gokey" === e && (_("the API aplus-inject-record-gokey is deprecated, if needed please concat APLUS SDK supporter"), p.record("/inject.record.gokey", "OTHER", "")), i[e] = t, !0;
  }

  var i,
      s = n(49),
      u = n(42),
      c = n(2),
      l = n(3),
      p = c.getGlobalValue(l.APLUS),
      f = {},
      g = "object",
      d = "string";
  t.getInfo = a, t.qGet = r, t.setMetaInfo = o;

  var _ = function (e) {
    try {
      console && console.error(e);
    } catch (e) {}
  };

  t.catchException = _;

  var h = function (e) {
    return i || (i = {}), i[e] || "";
  };

  t.getMetaInfo = h;

  var v = function (e) {
    var t = h("aplus-inject-record-gokey");
    return "function" == typeof t ? t(e) : e.gokey;
  };

  t.getUserInjectGokey = v;

  var m = function (e, t) {
    if (e && t) {
      var n,
          a = function (n) {
        try {
          var a = typeof t === d ? JSON.parse(t) : t;
          i(e, Object.assign({}, n, a));
        } catch (e) {}
      },
          r = function (n) {
        try {
          var a = typeof t === d ? JSON.parse(t) : t;
          i(e, n.concat(a));
        } catch (e) {}
      },
          o = function (e) {
        e.constructor === Array ? r(e) : a(e);
      },
          i = function (e, t) {
        y(e, t, {
          from: "appendMetaInfo"
        });
      },
          s = h(e);

      if ("aplus-exinfo" === e && (i(e, Object.assign({}, s, u.param2obj(t))), n = !0), "aplus-page-properties" === e) {
        var c = t;
        if (s) for (var l in s) t[l] ? c[l] = Object.assign({}, s[l], t[l]) : c[l] = s[l];
        i(e, c), n = !0;
      }

      if (s) if (typeof s === g) o(s), n = !0;else try {
        var p = JSON.parse(s);
        typeof p === g && (o(p), n = !0);
      } catch (e) {}
      n || i(e, t);
    }
  };

  t.appendMetaInfo = m;

  var y = function (e, t) {
    var n,
        a,
        i = "OVERWRITE",
        u = i;
    if ("object" == typeof e ? (n = e.metaName, a = e.metaValue, u = e.mode || i) : (n = e, a = t), u !== i) return m(n, a);

    if (o(n, a)) {
      var l = c.getGoldlogVal("_$") || {};
      l.meta_info = r();
      var p = c.setGoldlogVal("_$", l),
          f = ["setMetaInfo", n, a, {}];
      return s.doPubMsg(f), s.doCachePubs(f), p;
    }
  };

  t._setMetaInfo = y;
}, function (e, t, n) {
  "use strict";

  var a = n(2),
      r = "function",
      o = function () {
    var e = a.getGlobalValue("aplus"),
        t = e.aplus_pubsub || {},
        n = typeof t.publish === r;
    return n ? t : "";
  };

  t.doPubMsg = function (e) {
    var t = o();
    t && typeof t.publish === r && t.publish.apply(t, e);
  }, t.doCachePubs = function (e) {
    var t = o();
    t && typeof t.cachePubs === r && t.cachePubs.apply(t, e);
  }, t.doSubMsg = function (e, t) {
    var n = o();
    n && typeof n.subscribe === r && n.subscribe(e, t);
  };
}, function (e, t, n) {
  "use strict";

  var a = n(7);

  e.exports = function () {
    return {
      getLogConfig: function () {
        var e = {},
            t = this.options.config.plugins;

        for (var n in t) e[n] = {
          plugins: t[n],
          context: {}
        }, a(t[n], function (t) {
          e[n].context[t.name] = t.config || {};
        });

        return e;
      },
      run: function () {
        this.options.context.logConfig = this.getLogConfig(), this.options.context.logConfig.pageLoadTime = this.options.context.PAGE_LOAD_TIME;
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  var a = n(2),
      r = n(9),
      o = n(3),
      i = n(52),
      s = n(12),
      u = "EMPTY_CNA";

  e.exports = function () {
    return {
      _syncEtag: function (e) {
        var t,
            n = a.getGlobalValue(o.APLUS),
            c = this,
            l = function (t) {
          var r = t && t.data ? t.data.cna : "";
          r ? (a.setGoldlogVal(g, r), e(r)) : "Y" === n.fetchEtagStatus ? n.aplus_pubsub.subscribe("etag", function (t) {
            e(t);
          }) : d();
        },
            p = n.getMetaInfo(o.APLUS_PV_DOMAIN);

        p && (t = i.getUrl({
          egUrl: (p.indexOf("//") === -1 ? "//" + p : p) + "/eg.js"
        }), c.options.context.etag && (c.options.context.etag.egUrl = t));

        var f = r.getContext(),
            g = n.globalConfig.ETAG_STORAGE_KEY,
            d = function () {
          t && (n.fetchEtagStatus = "Y", r.request(t, {
            dataType: "text",
            requestMethodName: "request"
          }, function (t) {
            n.fetchEtagStatus = "N";
            var r = "";

            try {
              var o = t.data || "",
                  i = o.split(";");

              if (i.length > 1) {
                var c = i[1],
                    l = c.split("=");
                r = l[1] || "", r = r.replace(/\"/g, ""), a.setGoldlogVal(g, r), f.setStorage({
                  key: g,
                  data: {
                    cna: r
                  }
                }), n.aplus_pubsub.publish("etag", r), n.aplus_pubsub.cachePubs("etag", r);
              }
            } catch (e) {
              s().w(e);
            }

            r || (r = u), e(r);
          }, function (e) {
            s().w(e);
          }));
        },
            _ = a.getGoldlogVal(g);

        _ ? e(_) : f.getStorage({
          key: g,
          success: function (e) {
            l(e);
          },
          fail: function (e) {
            l(e);
          }
        });
      },
      run: function (e, t) {
        var n = this,
            r = a.getGlobalValue("aplus"),
            o = r.getMetaInfo("aplus-etag-timeout"),
            i = 200,
            s = i;

        try {
          s = parseInt(o), isNaN(s) && (s = i);
        } catch (e) {}

        if (this._syncEtag(function (e) {
          n.options.context.etag && (n.options.context.etag.cna = e), s >= 200 && t(e);
        }), !(s < 200)) return s;
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  var a = n(30);

  t.getUrl = function (e) {
    var t = a.getUrl(e && e.egUrl);
    return t;
  };
}, function (e, t, n) {
  "use strict";

  var a = n(2),
      r = n(3);

  e.exports = function () {
    return {
      getMetaInfo: function () {
        var e = a.getGoldlogVal("_$") || {},
            t = e.meta_info;
        return t;
      },
      getAplusWaiting: function () {
        var e = this.getMetaInfo() || {};
        return e["aplus-waiting"];
      },
      run: function (e, t) {
        var n = this.options.config || {},
            a = this.getAplusWaiting();
        if (a && n.is_auto) switch (a = this.getAplusWaiting() + "", this.options.context.when_to_sendpv = {
          aplusWaiting: a
        }, a) {
          case r._USER_ID:
          case r._ANONY_ID:
          case "MAN":
            return "done";

          case "1":
            return this.options.context.when_to_sendpv.isWait = !0, setTimeout(function () {
              t();
            }, 6e3), 6e3;

          default:
            var o = 1 * a;
            if (o + "" != "NaN") return this.options.context.when_to_sendpv.isWait = !0, setTimeout(function () {
              t();
            }, o), o;
        }
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  var a = n(2),
      r = n(12),
      o = n(9),
      i = n(3),
      s = n(11);

  e.exports = function () {
    return {
      getMetaInfo: function (e) {
        var t = a.getGoldlogVal("_$") || {};
        return (t.meta_info || {})[e];
      },
      getHostUrl: function () {
        var e = this.getMetaInfo(i.APLUS_PV_DOMAIN);

        if (s.checkDomain(e)) {
          var t = o.getLogDomain();
          return t ? s.fixDomain(e) + t : (r().tip_w("current miniapp framework is not supported!!"), "");
        }
      },
      run: function () {
        this.options.context.where_to_send.method = "POST";
        var e = this.getHostUrl();
        return !e || e.indexOf("https://") < 0 && e.indexOf("http://") ? (r().w("current trackDomain invalid: " + e), "done") : void (this.options.context.where_to_send.url = e);
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  var a = n(2),
      r = n(3),
      o = n(12),
      i = n(9),
      s = n(56),
      u = n(57),
      c = n(11),
      l = r.SPM_CNT,
      p = r.SPM_URL,
      f = r.SPM_PRE;

  e.exports = function () {
    return {
      getCommonParams: function () {
        var e = a.getGlobalValue(r.APLUS),
            t = this.options.context || {},
            g = t.etag || {},
            d = t.userdata || {},
            _ = a.getGoldlogVal("_$") || {},
            h = _.spm || {},
            v = this.options.config || {},
            m = e.getMetaInfo("platformType") || i.getPlatformType(),
            y = {
          _dev_id: e.getMetaInfo("_dev_id"),
          _anony_id: e.getMetaInfo(r._ANONY_ID),
          _user_id: e.getMetaInfo(r._USER_ID),
          _user_nick: e.getMetaInfo("_user_nick"),
          _session_id: e.getMetaInfo("_session_id"),
          uaid: e.getMetaInfo("uaid") + "" == "1" ? 1 : 0
        };

        if (!e.globalConfig.isUM) {
          var S = n(36),
              b = i.getCurrentPage(),
              A = b.route || b.is || "";
          y._page_title = S.getPageTitle(A) || "";
        }

        var I = e._aplus_client || {},
            E = e.globalConfig || {},
            P = "-";

        try {
          var T = getCurrentPages()[0];
          P = T.route || T.is;
        } catch (e) {}

        var C = new Date().getTime() + P,
            x = I.model + I.networkType + v.title + g.cna,
            O = (E.isDecodeUrl ? "DC_" : "") + s.getLogId(C, x),
            M = c.getAppKey();
        M || o().w("please set appKey in aplus metaInfo before sendPV!");
        var U = Object.assign({}, {
          appKey: M,
          cache: O,
          cna: g.cna,
          etag: g,
          pre: _.page_referrer || "-",
          sdk_info: {
            jsver: E.script_name,
            lver: E.lver,
            customSdkId: e.getMetaInfo("customSdkId") || "",
            platformType: m.toLowerCase()
          },
          title: v.title || "",
          url: P || "-",
          client: I,
          timeZone: u.getTimeZone(),
          gmkey: d.gmkey || "",
          method: this.options.context.where_to_send.method
        }, y),
            w = y;
        return h.spm_url && (w[p] = h.spm_url || ""), h.spm_pre && (w[f] = h.spm_pre || ""), h.spm_cnt && (w[l] = h.spm_cnt || ""), w[r.PVID] = e.pvid || "", U.sessionArgs = e.getMetaInfo("aplus-session-args"), U.globalArgs = e.getMetaInfo("aplus-global-args"), U.gokey = w, U;
      },
      getPvParams: function () {
        var e = a.getGlobalValue(r.APLUS),
            t = this.getCommonParams();
        return this.options.config.is_auto || (t.sdk_info.mansndlog = 1), Object.assign({}, t, {
          event_code: r.PV_CODE,
          logtype: "1",
          logkey: "/vx.gif",
          event_timestamp: e._$.send_pv_count > 0 ? new Date() : e.logConfig.pageLoadTime
        });
      },
      getHjljParams: function () {
        var e = this.options.context || {},
            t = e.userdata || {},
            n = {
          event_code: r.EVENT_ID_MAP[t.gmkey] || t.gmkey,
          logtype: "2",
          logkey: t.logkey,
          event_timestamp: new Date()
        };
        return Object.assign({}, this.getCommonParams(), n);
      },
      run: function () {
        var e = {};
        e = "PV" === this.options.config.recordType ? this.getPvParams() : this.getHjljParams(), this.options.context.what_to_send.logdata = e;
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  function a(e, t, n) {
    return e ? r.hash(encodeURIComponent(e)).substr(0, t) : n;
  }

  var r = n(41),
      o = function (e) {
    function t(e) {
      var t = "0123456789abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ",
          n = "0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ";
      return 1 == e ? t.substr(Math.floor(60 * Math.random()), 1) : 2 == e ? n.substr(Math.floor(60 * Math.random()), 1) : "0";
    }

    for (var n, a = "", r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", o = !1; a.length < e;) n = r.substr(Math.floor(62 * Math.random()), 1), !o && a.length <= 2 && ("g" == n.toLowerCase() || "l" == n.toLowerCase()) && (0 === a.length && "g" == n.toLowerCase() ? Math.random() < .5 && (n = t(1), o = !0) : 1 == a.length && "l" == n.toLowerCase() && "g" == a.charAt(0).toLowerCase() && (n = t(2), o = !0)), a += n;

    return a;
  };

  t.getLogId = function (e, t) {
    var n = o(8),
        r = n.substr(0, 4),
        i = n.substr(0, 6);
    return [a(e, 4, r), a(t, 4, r), i].join("");
  };
}, function (e, t) {
  t.getTimeZone = function () {
    var e = -new Date().getTimezoneOffset() / 60,
        t = "+";
    e < 0 && (t = "-");
    var n = Math.abs(parseInt(e)),
        a = Math.abs(parseInt(e) - e),
        r = "00";
    return a > 0 && (r = 60 * a), "GMT" + t + (n > 9 ? n : "0" + n) + ":" + r;
  };
}, function (e, t, n) {
  "use strict";

  var a = n(3),
      r = n(2),
      o = n(9);

  e.exports = function () {
    return {
      run: function () {
        var e = o.isTB(),
            t = r.getGlobalValue(a.APLUS),
            n = this.options.context.what_to_send.logdata || {},
            i = getCurrentPages(),
            s = i[i.length - 1] || {};
        s && !n.title && (n.title = s.route || ""), n.url = (!e && t.globalConfig.isAli ? "https://" + n.client.appId + "_" : "") + (s.route || s.is || "-");
        var u = "-";

        if (i.length > 1) {
          var c = i[i.length - 2] || {};
          u = (!e && t.globalConfig.isAli ? "https://" + n.client.appId + "_" : "") + (c.route || c.is || "-");
        }

        n.pre = u, n.sdk_info && (n.sdk_info.windmill = "1"), this.options.context.what_to_send.logdata = n;
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  var a = n(42),
      r = n(20),
      o = n(2),
      i = n(3),
      s = n(9),
      u = n(60);

  e.exports = function () {
    return {
      getUserdata: function () {
        var e = o.getGlobalValue("aplus"),
            t = this.options.config || {},
            n = {};
        t && !t.is_auto && t.gokey && ("string" == typeof t.gokey ? n = a.param2obj(t.gokey) : "object" == typeof t.gokey && (n = t.gokey));

        var i = function (e) {
          r(e) ? e.forEach(function (e) {
            n = Object.assign({}, n, e);
          }) : n = Object.assign({}, n, e);
        };

        i(e.getMetaInfo("aplus-cpvdata"));
        var u = s.getCurrentPage(),
            c = u.route || u.is || "page",
            l = e.getMetaInfo("aplus-page-properties") || {},
            p = l[c];
        "object" == typeof p && i(p);
        var f = this.options.context || {},
            g = f.userdata || {};
        return i(g), n;
      },
      updatePre: function (e) {
        var t = this.options.config || {},
            n = o.getGoldlogVal("_$") || {};
        return t && t.referrer && (n.page_referrer = t.referrer, e.pre = t.referrer), o.setGoldlogVal("_$", n), e;
      },
      updateUrl: function (e) {
        var t = this.options.config || {};
        return t && t.pageUrl && (e.url = t.pageUrl), e;
      },
      updateSpmUrl: function (e) {
        var t = this.options.config || {},
            n = t[i.SPM_URL] || t.spmUrl;
        return u(n) || (e.gokey[i.SPM_URL] = n), e;
      },
      updateSpmPre: function (e) {
        var t = this.options.config || {},
            n = t[i.SPM_PRE] || t.spmPre;
        return u(n) || (e.gokey[i.SPM_PRE] = n), e;
      },
      run: function () {
        var e = this.options.context.what_to_send.logdata,
            t = Object.assign({}, this.getUserdata(), e.userdata || {});
        e.gokey = Object.assign({}, e.gokey, t), e = this.updatePre(e), e = this.updateUrl(e), e = this.updateSpmUrl(e), e = this.updateSpmPre(e), this.options.context.what_to_send.logdata = e, this.options.context.userdata = e.gokey;
      }
    };
  };
}, function (e, t) {
  e.exports = function (e) {
    return "undefined" == typeof e;
  };
}, function (e, t, n) {
  "use strict";

  var a = n(2),
      r = n(62);

  e.exports = function () {
    return {
      run: function () {
        var e = a.getGoldlogVal("_$") || {},
            t = this.options.context.can_to_sendpv || {},
            n = e.send_pv_count || 0,
            o = this.options.config || {};
        return r.canSendPV(o.track_type) ? (t.flag = "YES", this.options.context.can_to_sendpv = t, e.send_pv_count = ++n, void a.setGoldlogVal("_$", e)) : "done";
      }
    };
  };
}, function (e, t, n) {
  function a(e) {
    var t = o.getGlobalValue(i.APLUS),
        n = t.getMetaInfo(i.APLUS_EVENT_LIMITRATES);

    if (n && n.length > 0) {
      var a = c.find(n, function (t) {
        return t.eventId === e;
      });

      if (a) {
        var r = Math.ceil(1e3 * Math.random());
        return r < 1e3 * a.samplingRate;
      }

      return !0;
    }

    return !0;
  }

  function r() {
    var e = o.getGlobalValue("aplus"),
        t = e.globalConfig.isUM;
    return !!t;
  }

  var o = n(2),
      i = n(3),
      s = n(29),
      u = n(63),
      c = n(64),
      l = n(9),
      p = n(33),
      f = n(11);
  t.canToSendHJLJ = function (e, t) {
    var n = s.getDeviceStatus();
    if (!n) try {
      var r = l.getContext();
      return p.isEmptyObject(r) ? void 0 : t === i.APP_START || t === i.APP_END;
    } catch (e) {}
    var o = s.getAutoTrackStatus(),
        c = s.getAutoEventStatus(),
        g = u.getAutoTrackStatus(),
        d = {};

    if (d = "string" == typeof e ? f.arr2obj(f.param2arr(e)) : e, d.auto_element) {
      if (2 === c || 2 === o) return;
      if (!o && !g) return;
    }

    if (a(t)) return !0;
  }, t.canSendPV = function (e) {
    if (!r()) return !0;
    var t = s.getDeviceStatus(),
        n = s.getAutoPageStatus(),
        a = u.localAutoPVDisabled(),
        o = !0;

    if (t) {
      if ("1" === e) return !(2 === n || !n && a);
    } else o = !1;

    return o;
  };
}, function (e, t, n) {
  "use strict";

  var a = n(3),
      r = n(2);
  t.localAutoEventDisabled = function () {
    var e = r.getGlobalValue("aplus");
    return !!e.getMetaInfo(a.APLUS_DISABLE_AUTOEVENT);
  }, t.localAutoPVDisabled = function () {
    var e = r.getGlobalValue("aplus");
    return !(!e.getMetaInfo(a.APLUS_DISABLE_AUTOPV) && "MAN" !== e.getMetaInfo("aplus-waiting"));
  }, t.getAutoTrackStatus = function () {
    var e = r.getGlobalValue("aplus");
    return !!e.getMetaInfo(a.APLUS_AUTOTRACK_ENABLED);
  };
}, function (e, t) {
  "use strict";

  function n(e) {
    return Array.isArray ? Array.isArray(e) : /Array/.test(Object.prototype.toString.call(e));
  }

  function a(e) {
    var t = [];
    if (n(e)) for (var r = 0; r < e.length; r++) {
      var o = e[r];
      n(o) ? (e[r] = a(o), t = t.concat(e[r])) : t.push(o);
    }
    return t;
  }

  function r(e, t) {
    try {
      return e.find(t);
    } catch (r) {
      for (var n = 0; n < e.length; n++) {
        var a = t(e[n]);
        if (a) return e[n];
      }
    }
  }

  t.indexof = function (e, t) {
    var n = -1;

    try {
      n = e.indexOf(t);
    } catch (r) {
      for (var a = 0; a < e.length; a++) e[a] === t && (n = a);
    } finally {
      return n;
    }
  }, t.itemMatch = function (e, t) {
    var n = !1;

    try {
      if (!this.isArray(e)) return n;
      n = e.some(function (e) {
        return e && e.length > 0 && t.indexOf(e) !== -1;
      });
    } catch (r) {
      for (var a = 0; a < e.length; a++) if (t.indexOf(e[a]) !== -1) {
        n = !0;
        break;
      }
    }

    return n;
  }, t.isArray = n, t.flat = a, t.find = r;
}, function (e, t, n) {
  "use strict";

  var a = n(42),
      r = n(20),
      o = n(2);

  e.exports = function () {
    return {
      getUserData: function () {
        var e = o.getGlobalValue("aplus"),
            t = this.options.context || {},
            n = t.userdata || {},
            i = t.what_to_send.logdata.gokey;
        i = Object.assign({}, i, a.param2obj(n.gokey)), i = Object.assign({}, i, a.param2obj(e.getMetaInfo("aplus-exinfo") || {}));
        var s = e.getMetaInfo("aplus-exdata");
        return r(s) ? s.forEach(function (e) {
          i = Object.assign({}, i, e);
        }) : i = Object.assign({}, i, s || {}), i;
      },
      run: function () {
        var e = this.options.context.what_to_send.logdata,
            t = this.getUserData();
        "1010" === e.gmkey && (e.arg1 = t.duration || e.logkey), e.gokey = t, this.options.context.what_to_send.logdata = e;
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function () {
    return {
      run: function () {
        n(67)(this.options.context.logConfig);
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  var a = n(49),
      r = n(3),
      o = n(2);

  e.exports = function (e) {
    var t = o.getGlobalValue(r.APLUS);

    if (!t._aplus_api) {
      t._aplus_api = {
        status: r.COMPLETE
      };
      var i = n(68).run.create({
        logConfig: e
      });

      for (var s in i) t[s] = i[s];

      o.setGlobalValue(r.APLUS, t);
      var u = [r.APLUS + "Ready", r.COMPLETE];
      a.doPubMsg(u), a.doCachePubs(u);
    }
  };
}, function (e, t, n) {
  "use strict";

  var a = n(45),
      r = n(10),
      o = n(9),
      i = n(20),
      s = n(3),
      u = n(49),
      c = n(14),
      l = n(2),
      p = n(69),
      f = n(48),
      g = n(73),
      d = n(12),
      _ = n(11),
      h = n(36),
      v = n(62),
      m = function (e, t) {
    my && my.call && "function" == typeof t && my.call("handleLoggingAction", {
      type: "behavior",
      subType: e.subType
    }, function (n) {
      var a = {};
      a[e.spmType] = n[e.spmType], t(a);
    });
  },
      y = !0,
      S = !1,
      b = a.extend({
    _send: function (e, t, n, a, r) {
      return "object" == typeof t && "POST" === n ? o.request(e, {
        method: n,
        data: t,
        dataType: "base64"
      }, a, r) : o.request(e + "?" + t, {
        method: n,
        dataType: "base64"
      }, a, r), e;
    },
    _requestVTConfig: function (e, t, n) {
      o.request(e, {
        method: "GET",
        dataType: "json"
      }, t, n);
    },
    _requestRemoteConfig: function (e, t, n) {
      o.request(e, {
        method: "GET"
      }, t, n);
    },
    _sendPV: function (e, t) {
      var n = l.getGlobalValue(s.APLUS);
      e = e || {}, e.pageName && n._setMetaInfo(s.APLUS + "-pagename", e.pageName);
      var a = new p();
      e.recordType = "PV", e.method || (e.method = "GET");
      var r = n.logConfig.pv;
      return a.run({
        plugins: r.plugins,
        context: c(r.context)
      }, {
        config: e,
        userdata: t || {},
        pubsubType: "pv",
        middlewareMessageKey: "mw_change_pv"
      }), !0;
    },
    _combineRecord: function (e, t, n, a) {
      var r = l.getGlobalValue(s.APLUS),
          o = "EXP";
      if (!r.globalConfig.isAli || t !== o && "CLK" !== t) console.warn("only support EXP or CLK log to combile record!");else if (i(n)) {
        a || (a = "POST");
        var u = [],
            c = "true";
        n.forEach(function (e) {
          u.push({
            exargs: "object" == typeof e.exargs ? e.exargs : {},
            scm: e.scm,
            spm: e.spm,
            aplusContentId: e.aplusContentId
          }), "false" === e._aplus_sendtomy && "true" === c && (c = "false");
        });
        var p = [];
        p.push((t === o ? "expdata=" : "clkdata=") + JSON.stringify(u)), p.push(t === o ? "_is_auto_exp=1" : "_is_auto_clk=1"), p.push("_eventType=custom"), p.push("_method=" + a), p.push("_pkgSize=" + n.length), "false" === c && p.push("_aplus_sendtomy=false"), r.record(e, t, p.join("&"), a);
      } else console.warn("type of gokeys must be ArrayObject!");
    },
    _record: function (e, t, n, a, o) {
      var i = l.getGlobalValue(s.APLUS);
      n = f.getUserInjectGokey({
        logkey: e,
        gmkey: t,
        gokey: n
      }), e += "", e && 0 !== e.indexOf("/") && i.globalConfig.isAli && (e = "/" + e);
      var u = i.globalConfig.isAli,
          g = new p(),
          d = i.logConfig.hjlj;
      return u ? g.run({
        plugins: d.plugins,
        context: c(d.context)
      }, {
        config: {
          recordType: "COMMON_HJLJ",
          method: a || "GET"
        },
        userdata: {
          logkey: e,
          gmkey: t,
          gokey: n
        },
        pubsubType: "hjlj",
        middlewareMessageKey: "mw_change_hjlj"
      }, function () {
        r(o) && o();
      }) : v.canToSendHJLJ(n, e) && g.run({
        plugins: d.plugins,
        context: c(d.context)
      }, {
        config: {
          recordType: "COMMON_HJLJ",
          method: a || "GET"
        },
        userdata: {
          logkey: e,
          gmkey: t,
          gokey: n
        },
        pubsubType: "hjlj",
        middlewareMessageKey: "mw_change_hjlj"
      }, function () {
        r(o) && o();
      }), !0;
    },
    getPageSPM: function () {
      var e = l.getGlobalValue(s.APLUS),
          t = e._$ || {},
          n = t.spm || {},
          a = n.data || {};
      return [a.a, a.b];
    },
    _setPageSPM: function () {
      var e,
          t = {},
          n = arguments;
      "object" == typeof n[0] ? (t = n[0], e = n[1]) : (t.spmCnt = [n[0], n[1], "0", "0"].join("."), e = n[2]);
      var a;
      t.spmCnt || t.spmUrl || !f.getMetaInfo("pageConfig") ? (a = ["setPageSPM", t], u.doPubMsg(a), u.doCachePubs(a)) : (a = ["clearPageSPM"], u.doPubMsg(a), u.doCachePubs(a));
      var r = "function" == typeof e ? e : function () {};
      r(a);
    },
    _setMetaInfo: function (e, t) {
      return f._setMetaInfo(e, t);
    },
    _updatePageProperties: function (e) {
      if ("object" == typeof e) {
        g() ? my.reportAnalytics("updatePageProperties", e) : "my" === o.getPlatformType() && my.call("reportData", {
          spmDetail: e,
          ignoreDefaultPageMonitor: !0
        });
        var t = o.getCurrentPage(),
            n = t.route || t.is || "page",
            a = {};
        a[n] = e, f.appendMetaInfo("aplus-page-properties", a);
      }
    },
    _updateNextPageProperties: function (e) {
      if (e || (e = {}), my) {
        var t = {
          type: "updateNextProp",
          eventId: -1,
          eventid: -1,
          name: "",
          pageName: "",
          comName: "",
          arg1: "",
          arg2: "",
          arg3: "",
          param: e,
          params: e
        };
        my.callUserTrack ? my.callUserTrack("commitut", t) : my.reportAnalytics && my.reportAnalytics("enter", t);
      }
    },
    _appendMetaInfo: f.appendMetaInfo,
    getMetaInfo: function (e) {
      return f.getMetaInfo(e);
    },
    cloneDeep: c,
    _skipPage: function () {
      my && my.callUserTrack && my.callUserTrack("skipPage");
    },
    _pageAppear: function () {
      my && my.callUserTrack && y && (y = !1, S = !0, my.callUserTrack("pageAppear"));
    },
    _pageDisappear: function () {
      my && my.callUserTrack && S && (y = !0, S = !1, my.callUserTrack("pageDisappear"));
    },
    _updatePageUtparam: function (e) {
      e || (e = {}), my && my.callUserTrack && my.callUserTrack("updatePageUtparam", {
        utParamJson: JSON.stringify(e)
      });
    },
    _updateNextPageUtparam: function (e) {
      e || (e = {}), my && my.callUserTrack && my.callUserTrack("updateNextPageUtparam", {
        utParamJson: JSON.stringify(e)
      });
    },
    _updateSessionProperties: function (e) {
      my && my.call && "object" == typeof e && my.call("handleLoggingAction", {
        type: "behavior",
        subType: "updateSessionProperties",
        extData: e
      });
    },
    _getPageSpmUrl: function (e) {
      m({
        subType: "getPageSpmUrl",
        spmType: "spmUrl"
      }, e);
    },
    _getPageSpmPre: function (e) {
      m({
        subType: "getPageSpmPre",
        spmType: "spmPre"
      }, e);
    },
    _setPageName: function (e, t) {
      if (!e) return void d().w("setPageName failed:  pageName=" + e);
      var n = t || h.getCurrentPagePath(),
          a = c(f.getMetaInfo("pageConfig") || {});
      a[n] = e, f.appendMetaInfo("pageConfig", a);
    },
    getPageName: function (e) {
      return h.getPageCode(e);
    },
    _getElementSPM: function (e, t) {
      if (e) {
        var n = h.getPageCode() || "";

        if ("string" != typeof e) {
          var a = e.dataset && e.dataset.trackerParams || "",
              r = _.jsonLikeStr2JSON(a);

          return [n, r.spmC, r.spmD].join(".");
        }

        var i,
            s = o.getContext(),
            u = f.getMetaInfo("aplus-auto-clk") || [],
            c = f.getMetaInfo("aplus-auto-exp") || [];

        try {
          var l;

          for (l = 0; l < u.length; l++) {
            var p = u[l];

            if (p.cssSelector === e) {
              i = [n, p.spmC, p.spmD].join(".");
              break;
            }
          }

          for (l = 0; l < c.length; l++) {
            var g = c[l];

            if (g.cssSelector === e) {
              i = [n, g.spmC, g.spmD].join(".");
              break;
            }
          }

          var v = s.createSelectorQuery().selectAll(e);
          "function" == typeof v.fields && v.fields({
            dataset: !0,
            id: !0
          }, function (e) {
            var n = [];

            if (e && e.length > 0) {
              for (var a = 1; a <= e.length; a++) n.push(i + "_" + a);

              t && "function" == typeof t && t(n);
            }
          }).exec();
        } catch (e) {
          d().w("current miniapp platform does not support dom element query, errmsg: ", e);
        }
      }
    },
    _recordAppLink: function (e, t, n) {
      if (!e.targetAppKey) return d().w("send $$_app_link failed: targetAppKey is null"), !1;
      var a = l.getGlobalValue(s.APLUS);
      return a._record("$$_app_link", "OTHER", e, t, n);
    }
  });

  t.run = b;
}, function (e, t, n) {
  "use strict";

  var a = n(7),
      r = n(2),
      o = n(10),
      i = n(49),
      s = n(70),
      u = n(3),
      c = n(71),
      l = n(72),
      p = function () {};

  p.prototype.run = function (e, t, n) {
    var p = new l();
    p.init({
      middleware: [],
      config: t.config,
      plugins: e.plugins
    });
    var f = p.run(),
        g = o(e.context) ? new e.context() : e.context;
    g.userdata = t.userdata, g.logger = s.logger;

    var d = {
      context: g,
      pubsub: r.getGoldlogVal("aplus_pubsub"),
      pubsubType: t && t.pubsubType
    },
        _ = new c();

    _.create(d), _.wrap(f, function () {
      d.context.status = u.COMPLETE, t && (t.middlewareMessageKey && i.doPubMsg([t.middlewareMessageKey, d.context]), t.messageFnQueue && a(t.messageFnQueue, function (t) {
        t(r.getGlobalValue(u.APLUS), e);
      })), o(n) && n(d.context);
    })();
  }, e.exports = p;
}, function (e, t, n) {
  "use strict";

  var a = n(48),
      r = "[APLUS] -- ";
  t.logger = function (e) {
    e || (e = {});
    var t = e.level || "warn";
    console && console[t] && console[t](r + e.msg);
  }, t.log = function () {
    var e = a && a.getMetaInfo("debug");
    e && console.log.apply(console, [r].concat(Array.prototype.slice.apply(arguments)));
  }, t.debugLog = function (e) {
    var t = n(2).getGlobalValue("aplus");
    t && t.aplusDebug && this.logger(e);
  };
}, function (e, t, n) {
  "use strict";

  function a() {}

  var r = n(10),
      o = n(64),
      i = n(12);
  a.prototype.create = function (e) {
    for (var t in e) "undefined" == typeof this[t] && (this[t] = e[t]);

    return this;
  }, a.prototype.calledList = [], a.prototype.setCalledList = function (e) {
    o.indexof(this.calledList, e) === -1 && this.calledList.push(e);
  }, a.prototype.resetCalledList = function () {
    this.calledList = [];
  }, a.prototype.wrap = function (e, t) {
    var n = this,
        a = this.context || {},
        s = a.compose || {},
        u = s.maxTimeout || 1e4;
    return function (a) {
      var s,
          c = e.length,
          l = 0,
          p = 0,
          f = function (g, d) {
        if (l === c) return a = "done", n.resetCalledList(), r(t) && d !== a && t.call(n, a), void clearTimeout(s);

        if (o.indexof(n.calledList, l) === -1) {
          if (n.setCalledList && n.setCalledList(l), !(e && e[l] && r(e[l][0]))) return;

          try {
            a = e[l][0].call(n, a, function () {
              l++, p = 1, f(l);
            });
          } catch (e) {
            i().w(e);
          }
        }

        var _ = "number" == typeof a;

        if ("pause" === a || _) {
          p = 0;
          var h = _ ? a : u,
              v = e[l] ? e[l][1] : "";
          s = setTimeout(function () {
            0 === p && (i().w("jump the middleware about " + v + ", because waiting timeout maxTimeout = " + h), a = null, l++, f(l));
          }, h);
        } else "done" === a ? (l = c, f(l, a)) : (l++, f(l));
      };

      return n.calledList && n.calledList.length > 0 && n.resetCalledList(), f(l);
    };
  }, e.exports = a;
}, function (e, t, n) {
  "use strict";

  var a = n(34),
      r = n(12);

  e.exports = function () {
    return {
      init: function (e) {
        this.opts = e, e && "object" == typeof e.middleware && e.middleware.length > 0 ? this.middleware = e.middleware : this.middleware = [], this.plugins_name = [];
      },
      pubsubInfo: function (e, t) {
        try {
          var n = e.pubsub;
          n && n.publish("plugins_change_" + e.pubsubType, t);
        } catch (e) {
          r().w(e);
        }
      },
      run: function (e) {
        e || (e = 0);
        var t = this,
            n = this.middleware,
            r = this.opts || {},
            o = r.plugins;

        if (o && "object" == typeof o && o.length > 0) {
          var i = o[e];
          if (this.plugins_name.push(i.name), n.push([function (e, n) {
            t.pubsubInfo(this, i);
            var o = new i.path();
            return o.init || (o.init = function (e) {
              this.options = e;
            }), o.init({
              context: this.context,
              config: a(i.config || {}, r.config)
            }), o.run(e, function (e) {
              setTimeout(function () {
                n(i, e);
              }, 1);
            });
          }, i.name]), e++, o[e]) return this.run(e);
        }

        return n;
      }
    };
  };
}, function (e, t) {
  function n() {
    try {
      var e = navigator ? navigator.userAgent || navigator.swuserAgent : "";
      return /Triver/g.test(e);
    } catch (e) {
      return !1;
    }
  }

  e.exports = n;
}, function (e, t, n) {
  "use strict";

  e.exports = function () {
    return {
      run: function () {
        n(75)();
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  var a = n(76),
      r = n(2),
      o = n(3),
      i = n(64),
      s = n(33),
      u = n(36),
      c = n(9);

  e.exports = function () {
    var e = r.getContext(),
        t = r.getGlobalValue("aplus"),
        n = [],
        l = function (e) {
      function r(t, r) {
        i.isArray(t) && l.push({
          config: r,
          elements: t
        }), l.length === n.length && a.watch_click(e.event, l);
      }

      n = t.getMetaInfo("aplus-auto-clk");
      var o = u.getPageCode(),
          l = [];
      i.isArray(n) && n.forEach(function (e) {
        s.isStartWith(e.cssSelector, ".") || (e.cssSelector = "." + e.cssSelector), e.spmB || (e.spmB = o);
        var t = c.getContext().createSelectorQuery().selectAll(e.cssSelector);
        "function" == typeof t.fields ? t.fields({
          id: !0,
          dataset: !0,
          rect: !0,
          scrollOffset: !0
        }, function (t) {
          r(t, e);
        }).exec() : t.boundingClientRect().exec(function (t) {
          r(t, e);
        });
      });
    };

    e.aplus_queue.push({
      action: o.SUBSCRIBE,
      arguments: ["aplusReady", function (e) {
        "complete" === e && (n = t.getMetaInfo("aplus-auto-clk"));
      }]
    }), e.aplus_queue.push({
      action: o.SUBSCRIBE,
      arguments: ["onAplusClk", function (e) {
        "ready" === e.status && l(e);
      }]
    });
  };
}, function (e, t, n) {
  "use strict";

  function a(e, t) {
    var n = o.getGoldlogVal("_aplus_auto_exp") || {},
        a = n.hashMap || {};

    for (var i in a) for (var s = a[i] || [], u = 0; u < s.length; u++) {
      var l = s[u] || {},
          p = l.expConfig || {};

      if (e.cssSelector === p.cssSelector) {
        var f = c({
          index: t
        }, p);
        if (f === l.hash_value) return r(l.dataset);
      }
    }
  }

  var r = n(14),
      o = n(2),
      i = n(11),
      s = n(7),
      u = n(77),
      c = n(78),
      l = n(79);

  t.watch_click = function (e, t) {
    function n(e, t) {
      var n = {};
      e && (e.changedTouches ? n = e.changedTouches[0] : e.detail && (n = e.detail));
      var a = n.clientX || 0,
          r = n.clientY || 0,
          o = t.top,
          i = t.bottom;
      return t.scrollTop && (o += t.scrollTop, i += t.scrollTop), t.left < a && a < t.right && o < r && r < i;
    }

    var c = o.getGlobalValue("aplus"),
        p = [];
    s(t, function (t) {
      for (var o = t.elements, s = t.config, u = 0; u < o.length; u++) {
        var f = o[u];

        if (n(e, f)) {
          var g = u + 1,
              d = f.dataset || a(s, g) || {},
              _ = {},
              h = i.jsonLikeStr2JSON(d.trackerParams) || {};
          if (c.globalConfig.isAli) {
            if (_ = r(c._$.spm.data || {}), document && c.getMetaInfo("aplus-vt-cfg-url")) {
              var v = l.getDataSet(s, g - 1),
                  m = v.spmC || s.spmC || "0",
                  y = v.spmD || s.spmD || "0";
              _.c = m, _.d = y, d = Object.assign(d, v);
            } else {
              var S = d.tracker || s.cssSelector.replace(/\'|\"|\;|\:|\=|\[|\]|\.|\#|\-|\/|\|/g, "");

              if (_.c = S, _.c && "0" !== _.c) {
                var b = "d" + g;
                _.d = b;
              }
            }
          } else _.b = s.spmB, s.spmC ? _.c = s.spmC : _.c = h.spmC ? encodeURIComponent(h.spmC) : "", s.spmD ? _.d = g ? s.spmD + "_" + g : s.spmD : _.d = h.spmD ? encodeURIComponent(h.spmD) : "";
          p.push({
            dataset: d,
            config: s,
            element: f,
            spmData: _
          });
        }
      }
    });
    var f = void 0;
    1 === p.length ? f = p[0] : p.length > 1 && (f = p.reduce(function (e, t) {
      var n = e,
          a = e.element,
          r = t.element;
      return r.top >= a.top && r.right <= a.right && r.bottom <= a.bottom && r.left >= a.left && (n = t), n;
    })), f && u.pushEvent("CLK", f.dataset, f.config, f.element, f.spmData);
  };
}, function (e, t, n) {
  function a(e, t, n, a) {
    var r = o.getGlobalValue("aplus") || {},
        u = r.getMetaInfo;

    if ("function" == typeof u) {
      var c = u(e),
          l = {};
      return "function" == typeof c && (l = c(t ? s(t) : {}, n, a)), i.param2obj(l);
    }

    return {};
  }

  function r(e, t) {
    var n = "";

    try {
      var a = new Number(e);
      n = parseFloat(a.toFixed(t));
    } catch (t) {
      n = e;
    }

    return n;
  }

  var o = n(2),
      i = n(42),
      s = n(14),
      u = n(20),
      c = n(45),
      l = n(70),
      p = {},
      f = 3,
      g = "POST",
      d = "EXP",
      _ = c.extend({
    push: function (e) {
      var t = o.getGlobalValue("aplus");

      for (this.buffer.push(e); this.buffer.length >= this.pkgSize;) {
        var n = this.buffer.splice(0, this.pkgSize);
        n.length > 0 && t.combineRecord(this.logkey, d, n, this.method);
      }
    }
  });

  t.pushEvent = function (e, t, n, i, c) {
    var f = o.getGlobalValue("aplus"),
        _ = !!f.globalConfig && f.globalConfig.isAli,
        h = n.props,
        v = {},
        m = {};

    if (t) for (var y in t) y.toLowerCase().match(/^data-/) ? m[y.toLowerCase().replace(/^data-/, "").replace(/-/g, "")] = t[y] : m[y] = t[y];
    if (h && u(h)) for (var S = 0; S < h.length; S++) {
      var b = h[S].toLowerCase().replace(/^data-/, "").replace(/-/g, "");
      v[b] = m[b];
    } else v = Object.assign({}, m);
    i && e === d && (v = Object.assign({}, v, {
      _w: r(i.width, 2),
      _h: r(i.height, 2),
      _x: r(i.x, 2),
      _y: r(i.y, 2),
      _rate: r(i.viewabilityRate || i.intersectionRatio, 2),
      _viewability: "intersection"
    })), n._vt && (v._vt = n._vt);
    var A = e === d ? "aplus-auto-exp-userfn" : "aplus-auto-clk-userfn",
        I = a(A, i, n.cssSelector, c);
    I.spm || (_ && c && c.a && c.b ? I.spm = [c.a, c.b, c.c || "0", c.d || "0"].join(".") : I.spm = c && c.b ? c : void 0);
    var E = {},
        P = t.trackerParams || t["tracker-params"];
    if (P) try {
      var T = JSON.parse(P);
      v = Object.assign(v, T), delete v.trackerParams, delete v.trackerparams;
    } catch (e) {}

    if ("EXP" === e && _ && p[n.logkey]) {
      var C = Object.assign({}, v, I);
      E = Object.assign({}, {
        exargs: C
      }), l.log("auto exp:", n.logkey, C), p[n.logkey].push(s(E));
    } else E = Object.assign({
      is_auto: 1
    }, v, I, n.customArgs), l.log("auto clk:", n.logkey, E), f.record(n.logkey, e, E, g);
  }, t.watchRecord = function (e) {
    var t = o.getGlobalValue("aplus"),
        n = !!t.globalConfig && t.globalConfig.isAli;
    n && e && e.forEach(function (e) {
      p.hasOwnProperty(e.logkey) || (p[e.logkey] = _.create({
        length: 0,
        buffer: [],
        logkey: e.logkey,
        pkgSize: "number" == typeof e.pkgSize && e.pkgSize || f,
        method: e.method || g
      }));
    });
  }, t.clearRecord = function () {
    var e = o.getGlobalValue("aplus"),
        t = !!e.globalConfig && e.globalConfig.isAli;
    if (t) for (var n in p) {
      var a = p[n].buffer || [];
      a.length > 0 && (e.combineRecord(n, d, a, g), p[n].buffer = []);
    }
  };
}, function (e, t) {
  e.exports = function (e, t) {
    var n = [t.logkey, t.cssSelector];
    return t.positionSelector && n.push(t.positionSelector), e.id && n.push(e.id), e.index >= 0 && n.push(e.index), e.dataset && e.dataset.privateNodeId && delete e.dataset.privateNodeId, e.dataset && n.push(JSON.stringify(e.dataset)), n = n.join("_");
  };
}, function (e, t, n) {
  "use strict";

  var a = n(11),
      r = n(33);
  t.getDataSet = function (e, t) {
    var n,
        o = {};
    n = r.isStartWith(e.cssSelector, ".") ? e.cssSelector.slice(1, e.cssSelector.length) : e.cssSelector;
    var i = document.getElementsByClassName(n);

    if (i && i.length > 0) {
      var s = i[t].dataset || {};

      for (var u in s) {
        var c = s[u];

        switch (typeof c) {
          case "function":
            o[u] = c();
            break;

          case "object":
            o = Object.assign(o, c);
            break;

          case "string":
            if ("trackerParams" === u) {
              var l = a.jsonLikeStr2JSON(s.trackerParams);
              o = Object.assign(o, l);
            } else o[u] = c;

            break;

          case "number":
          case "boolean":
            o[u] = c;
            break;

          default:
            continue;
        }
      }
    }

    return o;
  }, t.isRax = function () {
    return !!document;
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function () {
    return {
      run: function () {
        n(81)();
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  var a = n(2),
      r = n(82),
      o = n(83),
      i = n(3),
      s = n(9),
      u = {};

  e.exports = function () {
    function e(e, t, n) {
      var a = function (n, a) {
        if ("aplus-auto-exp" === n) {
          var i = o.getAutoExpConfig(a);
          if (JSON.stringify(i) === JSON.stringify(g)) return;
          g = i, a && g && g.length > 0 && r.watch_exposure(e, g, t);
        }
      };

      c.aplus_queue.push({
        action: n,
        arguments: ["setMetaInfo", a]
      });
    }

    function t(e, t) {
      g = f.getMetaInfo("aplus-auto-exp"), setTimeout(function () {
        r.watch_exposure(e, g, t);
      }, 0);
    }

    function n(e) {
      try {
        var n = s.getCurrentPage(),
            a = n.route || n.is,
            r = u[a],
            o = JSON.stringify(e.data);
        r !== o && (u[a] = o, t(e.context, 0));
      } catch (e) {}
    }

    var c = a.getContext(),
        l = 0,
        p = 0,
        f = a.getGlobalValue("aplus");

    if (!f._aplus_auto_exp) {
      f._aplus_auto_exp = {
        hashMap: {}
      };
      var g = [];
      c.aplus_queue.push({
        action: i.SUBSCRIBE,
        arguments: ["onShow", function (n) {
          if ("ready" === n.status) {
            e(n.context, 1, i.SUBSCRIBE), 0 === l ? (t(n.context, 1), l = 1) : t(n.context, 0);

            try {
              var a = s.getCurrentPage(),
                  r = a.route || a.is;
              u[r] = r;
            } catch (e) {}
          }
        }]
      }), c.aplus_queue.push({
        action: i.SUBSCRIBE,
        arguments: ["onAplusTouch", function (e) {
          "ready" === e.status && (0 === p ? (p = 1, t(e.context, 1)) : n(e));
        }]
      }), c.aplus_queue.push({
        action: i.SUBSCRIBE,
        arguments: ["onPageDataChanged", function (e) {
          setTimeout(function () {
            n(e);
          }, 200);
        }]
      }), c.aplus_queue.push({
        action: i.SUBSCRIBE,
        arguments: ["onHide", function (t) {
          "ready" === t.status && (u = {}, l = 0, p = 0, e(t.context, 1, i.UNSUBSCRIBE), r.clear());
        }]
      }), c.aplus_queue.push({
        action: i.SUBSCRIBE,
        arguments: ["onUnload", function (e) {
          "ready" === e.status && (u = {}, r.clear());
        }]
      });
    }
  };
}, function (e, t, n) {
  "use strict";

  var a,
      r = n(2),
      o = n(83),
      i = n(14),
      s = n(9),
      u = n(33),
      c = n(11),
      l = n(7),
      p = n(64),
      f = n(36),
      g = n(77),
      d = n(78),
      _ = n(79),
      h = n(6),
      v = [];

  t.watch_exposure = function (e, t, n, m) {
    function y(r) {
      function o(e) {
        var t = c[0];
        t && !u.isStartWith(c[0], ".") && (t = "." + t);

        try {
          var n = a.createSelectorQuery().selectAll(t);
          "function" == typeof n.fields ? n.fields({
            dataset: !0,
            id: !0
          }, function (t) {
            p.isArray(t) && e({
              elements: t,
              type: "COMMON"
            });
          }).exec() : console.warn("current platform does not support auto exposure tracking!");
        } catch (e) {
          console.warn("current platform does not support auto exposure tracking! err = ", e);
        }
      }

      if (r < t.length) {
        var s = t[r];
        T = 0, v.forEach(function (e) {
          e.subject[0] === s.cssSelector && e.subject[1] === s.positionSelector && (T = 1);
        });
        var c = [s.cssSelector, s.positionSelector];
        o(function (a) {
          if (0 === T || 0 === n) {
            var o = A(e);

            if (o.subject = c, v.length > t.length - 1) {
              var u = v.shift();
              u.disconnect();
            }

            v.push(o), l(a.elements, function (e, t) {
              e.index = t + 1 + "", S(e, s) || b(e, s);
            }), I(o, s, function (e, t) {
              h.getIndexByRect(t.cssSelector, e.boundingClientRect, function (n) {
                var a = n + 1;

                if (a) {
                  var r = i(e);
                  r.index = "" + a;
                  var o = i(r.dataset);
                  b({
                    id: r.id,
                    index: r.index,
                    dataset: o
                  }, t), E(r, o, s);
                }
              });
            });
          }

          y(++r);
        });
      }
    }

    function S(e, t) {
      var n = d(e, t),
          a = e.index;
      return x[t.logkey] && x[t.logkey].forEach(function (e) {
        if (e.hash_value === n && e.index === a) return !0;
      }), !1;
    }

    function b(e, t) {
      var n = d(e, t);

      try {
        var a = e.index;

        if (x[t.logkey]) {
          var r = 0;
          x[t.logkey].forEach(function (t) {
            t.hash_value === n && (r = 1, e.id && (t.id = e.id), e.dataset && (t.dataset = e.dataset), e.status && (t.status = e.status));
          }), r || x[t.logkey].push({
            id: e.id,
            hash_value: n,
            status: 0,
            expConfig: t,
            dataset: e.dataset,
            index: a
          });
        } else x[t.logkey] = [{
          id: e.id,
          hash_value: n,
          status: 0,
          expConfig: t,
          dataset: e.dataset,
          index: a
        }];
      } catch (e) {
        console.log("error === ", e);
      }
    }

    function A(e) {
      var t = {
        thresholds: [o.AUTO_AT_VIEW_RATE],
        initialRatio: 0
      },
          n = !1;

      try {
        my && (n = !0);
      } catch (e) {}

      return n ? (t.selectAll = !0, a.createIntersectionObserver(t)) : (t.observeAll = !0, a.createIntersectionObserver(e, t));
    }

    function I(e, t, n) {
      var a = t.cssSelector;
      a && !u.isStartWith(a, ".") && (a = "." + a), t.positionSelector ? e.relativeTo(t.positionSelector).observe(a, function (e) {
        try {
          n(e, t);
        } catch (e) {
          console.log("errorMessage: ", e);
        }
      }) : e.relativeToViewport().observe(a, function (e) {
        try {
          n(e, t);
        } catch (e) {
          console.log("errorMessage: ", e);
        }
      });
    }

    function E(e, t, n) {
      var a = r.getGlobalValue("aplus"),
          o = new Date().getTime(),
          s = P(o, e, n);

      if (s && s.length > 0) {
        var u = s[0],
            l = {},
            p = c.jsonLikeStr2JSON(t.trackerParams || {}) || {},
            d = u.index;
        if (a.globalConfig && a.globalConfig.isAli) {
          if (l = i(a._$.spm.data || {}), _.isRax()) {
            var h = _.getDataSet(n, d - 1),
                v = h.spmC || n.spmC || "0",
                m = h.spmD || n.spmD || "0";

            l.c = v, l.d = m, t = Object.assign(t, h);
          } else {
            var y = t.tracker || n.cssSelector.replace(/\'|\"|\;|\:|\=|\[|\]|\.|\#|\-|\/|\|/g, "");

            if (l.c = y, l.c && "0" !== l.c) {
              var S = "d" + d;
              l.d = S;
            }
          }
        } else f.getPageCode() && (l.b = f.getPageCode()), n.spmC ? l.c = n.spmC : l.c = p.spmC ? encodeURIComponent(p.spmC) : "", n.spmD ? l.d = d ? n.spmD + "_" + d : n.spmD : l.d = p.spmD ? encodeURIComponent(p.spmD) : "";
        g.pushEvent("EXP", t, n, Object.assign({}, e, {
          x: u.x,
          y: u.y,
          width: u.width,
          height: u.height,
          hash_value: u.hash_value
        }), l);
      }
    }

    function P(e, t, n) {
      var a = r.getGoldlogVal("_aplus_auto_exp") || {},
          i = a.hashMap || {},
          s = [];

      for (var u in i) for (var c = i[u] || [], l = 0; l < c.length; l++) {
        var p = d(t, n),
            f = c[l] || {};

        if (0 === f.status && f.expConfig && p === f.hash_value) {
          var g = t.boundingClientRect || {};

          if (g.width && g.height) {
            f.dataset = t.dataset, f.x = g.left, f.y = g.top, f.width = g.width, f.height = g.height, f.size = g.width * g.height;
            var _ = o.AUTO_AT_VIEW_RATE;
            t.intersectionRatio >= _ && (f.exposureTime = e, f.status = 1, s.push(f));
          }
        }
      }

      return s;
    }

    a && !m || (a = s.getContext());
    var T,
        C = r.getGoldlogVal("_aplus_auto_exp") || {},
        x = C.hashMap || {};
    g.watchRecord(t), y(0);
  }, t.reset = function () {}, t.clear = function () {
    g.clearRecord();

    for (var e = 0; e < v.length; e++) v[e].disconnect();

    v = [];
    var t = r.getGoldlogVal("_aplus_auto_exp") || {},
        n = t.hashMap || {};

    for (var a in n) delete n[a];
  };
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return aplus && aplus.getMetaInfo ? aplus.getMetaInfo(e) : o.getMetaCnt(e);
  }

  var r = n(64),
      o = n(84),
      i = n(12);
  t.DATA_APLUS_AE_KEY = "data-aplus-ae", t.DATA_APLUS_AC_KEY = "data-aplus-clk", t.DATA_APLUS_SPM_ANCHOR_ID_KEY = "data-spm-anchor-id", t.DATA_APLUS_VT_ITEM_INDEX_KEY = "data-aplus-vt-pos", t.LOOP_TIME = 1e3, t.getDefaultRequestCfg = function () {
    return {
      method: "POST",
      pkgSize: 10
    };
  };

  var s = function (e) {
    var t = e;

    try {
      var n = a("aplus-auto-exp-visible");
      n && (t = parseFloat(n)), t <= 0 && (t = e);
    } catch (n) {
      t = e;
    } finally {
      return t;
    }
  };

  t.AUTO_AT_VIEW_RATE = s(.3);

  var u = function (e) {
    var t = e;

    try {
      var n = a("aplus-auto-exp-duration"),
          r = parseInt(n);
      r + "" != "NaN" && (t = r);
    } catch (e) {} finally {
      return t;
    }
  };

  t.EXP_DURATION = u(300);

  var c = function (e, t) {
    var n,
        o = [],
        s = [];

    try {
      n = t || a(e);
      var u = [];
      if (n && "string" == typeof n) try {
        u = JSON.parse(n);
      } catch (e) {
        u = JSON.parse(n.replace(/'/g, '"'));
      } else "object" == typeof n && n.constructor === Array && (u = n);
      if (u && u.constructor === Array) for (var c = 0; c < u.length; c++) {
        var l = u[c] || {},
            p = l.logkey || "",
            f = l.tag ? l.tag : "",
            g = l.filter,
            d = l.cssSelector,
            _ = d || f && g;

        if (!p || !_) throw new Error("meta " + e + " config error, " + JSON.stringify(l));
        g = "string" == typeof g ? g.split("=") : [];
        var h = f;
        if (g.length >= 2 ? h += "[" + g.shift() + '="' + decodeURIComponent(g.join("")) + '"]' : 1 == g.length && g[0] && (h += "[" + decodeURIComponent(g[0]) + "]"), d && (h += d), l.elementSelector = h, r.indexof(s, h) > -1) throw new Error("meta " + e + " config error, tag_filter_cssSelector " + h + " repeated");
        s.push(h), o.push(l);
      }
    } catch (e) {
      i().w(e);
    } finally {
      return o;
    }
  };

  t.getAutoExpConfig = function (e) {
    return c("aplus-auto-exp", e) || [];
  }, t.getAutoExpUserFn = function () {
    var e = a("aplus-auto-exp-userfn");

    if (e) {
      var t = window[e] || e;
      if ("function" == typeof t) return t;
    }

    return null;
  }, t.isThrottleWatchDom = function () {
    var e = !1;

    try {
      e = "throttle" === a("aplus-auto-exp-watchdom");
    } catch (e) {}

    return e;
  }, t.getAutoClkConfig = function (e) {
    return c("aplus-auto-clk", e) || [];
  }, t.getAutoClkUserFn = function () {
    var e = a("aplus-auto-clk-userfn");

    if (e) {
      var t = window[e] || e;
      if ("function" == typeof t) return t;
    }

    return null;
  };
}, function (e, t, n) {
  "use strict";

  function a(e) {
    return i = i || document.getElementsByTagName("head")[0], s && !e ? s : i ? s = i.getElementsByTagName("meta") : [];
  }

  function r(e, t) {
    var n,
        r,
        o,
        i = a(),
        s = i.length;

    for (n = 0; n < s; n++) r = i[n], u.tryToGetAttribute(r, "name") === e && (o = u.tryToGetAttribute(r, t || "content"));

    return o || "";
  }

  function o(e) {
    var t = {
      isonepage: "-1",
      urlpagename: ""
    },
        n = e.qGet();
    if (n && n.hasOwnProperty("isonepage_data")) t.isonepage = n.isonepage_data.isonepage, t.urlpagename = n.isonepage_data.urlpagename;else {
      var a = r("isonepage") || "-1",
          o = a.split("|");
      t.isonepage = o[0], t.urlpagename = o[1] ? o[1] : "";
    }
    return t;
  }

  var i,
      s,
      u = n(85);
  t.getMetaTags = a, t.getMetaCnt = r, t.getOnePageInfo = o;
}, function (e, t) {
  "use strict";

  t.tryToGetAttribute = function (e, t) {
    return e && e.getAttribute ? e.getAttribute(t) || "" : "";
  };

  var n = function (e, t, n) {
    if (e && e.setAttribute) try {
      e.setAttribute(t, n);
    } catch (e) {}
  };

  t.tryToSetAttribute = n, t.tryToRemoveAttribute = function (e, t) {
    if (e && e.removeAttribute) try {
      e.removeAttribute(t);
    } catch (a) {
      n(e, t, "");
    }
  };
}, function (e, t, n) {
  "use strict";

  var a = n(2),
      r = n(3),
      o = n(7);

  e.exports = function () {
    return {
      pushQueue: function (e, t) {
        var n = a.getGlobalValue("aplus_queue");
        n.push({
          action: "aplus." + e,
          arguments: t
        });
      },
      run: function () {
        var e = this,
            t = a.getGlobalValue(r.APLUS);
        o(r.openAPIs, function (n) {
          t[n] = function () {
            var t = [];
            o(arguments, function (e) {
              t.push(e);
            });
            var a = "enter" === n ? "_sendPV" : "_" + n;
            e.pushQueue(a, t);
          };
        });
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  var a = n(9),
      r = n(2);

  e.exports = function () {
    return {
      _getNetworkType: function (e) {
        var t = a.getContext();
        t.getNetworkType ? t.getNetworkType({
          success: function (t) {
            e(t ? t.networkType : "");
          }
        }) : e("");
      },
      _getSystemInfo: function (e) {
        var t = this,
            n = {},
            r = t.SYSTEM_INFO || {};
        if (r && r.version) e(t.SYSTEM_INFO);else try {
          a.getContext().getSystemInfo({
            complete: function (a) {
              a && a.version ? t._getNetworkType(function (n) {
                a.networkType = n, t.SYSTEM_INFO = a, e(a);
              }) : t._getNetworkType(function (t) {
                n.networkType = t, e(n);
              });
            }
          });
        } catch (t) {
          e(n);
        }
      },
      _getAccountInfoSync: function () {
        var e = {};

        try {
          var t = a.getContext();

          if (t.getAccountInfoSync && t.canIUse("getAccountInfoSync")) {
            var n = t.getAccountInfoSync(),
                r = n.miniProgram || {},
                o = n.plugin || {};
            e.appId = r.appId, e.appVersion = r.version || r.envVersion, e.pluginAppId = o.appId, e.pluginAppVersion = o.version;
          } else if (t.getAppIdSync && t.canIUse("getAppIdSync")) {
            var i = t.getAppIdSync() || {};
            e.appId = i.appId || "";
          }
        } catch (e) {}

        return e;
      },
      run: function (e, t) {
        var n = this;
        return this._getSystemInfo(function (e) {
          e.userAgent = "-", e.os = e.platform ? e.platform.toLocaleUpperCase() : "", e.os_version = e.system ? e.system : "", e.access = e.brand ? e.brand : "";
          var a = "";
          e.host && "string" == typeof e.host.env && (a = e.host.env), e.host = a;

          var o = n._getAccountInfoSync(),
              i = Object.assign({}, e, o),
              s = r.getGlobalValue("aplus");

          s._aplus_client = i, t();
        }), 2e3;
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  var a = n(89),
      r = n(2);

  e.exports = function () {
    return {
      run: function () {
        var e = this.options.context.aplus_config,
            t = e.globalConfig.APLUS_QUEUE,
            n = r.getContext(),
            o = n[t] || [],
            i = a.getFormatQueue(o, "metaQueue");
        n[t] = i.queue, a.processGoldlogQueue(i.formatQueue, this.options.config);
      }
    };
  };
}, function (e, t, n) {
  function a() {
    var e = u.getGoldlogVal("_$") || {},
        t = e.meta_info;
    return t;
  }

  function r() {
    var e = a() || {},
        t = e.uaid + "";
    return "1" !== t || e._anony_id ? e._hold || e["aplus-waiting"] : "BLOCK";
  }

  function o(e) {
    var t = r(),
        n = a() || {},
        o = !0,
        i = e.arguments || [],
        s = i[0],
        u = i[1],
        c = "START";
    if ("_hold" === s && u === c) return c;
    if ("_anony_id" === s && u) return c;
    if (e && /sendPV|record|setPageSPM|setMetaInfo|appendMetaInfo$/.test(e.action)) switch (t) {
      case "BLOCK":
        n[t] || (h.push(e), o = !1);
    }
    return o;
  }

  function i(e) {
    g(d, e), g(_, e), g(h, e);
  }

  function s(e, t) {
    return t && f.openAPIs.indexOf(e) > -1 && (e = "_" + e), e;
  }

  var u = n(2),
      c = n(64),
      l = n(10),
      p = n(12),
      f = n(3),
      g = function (e, t) {
    function n() {
      if (e && c.isArray(e) && e.length) {
        for (var n = m(e).queue, a = {}, r = []; a = n.shift();) v(a, t, function (e) {
          r.push(e);
        });

        r.length > 0 && setTimeout(function () {
          for (; a = r.shift();) v(a, t);
        }, 100);
      }
    }

    try {
      n();
    } catch (e) {
      p().w(e);
    }
  };

  t.processGoldlogQueue = g;
  var d = [],
      _ = [],
      h = [];

  t.subscribeAndProcessQueue = function (e, t) {
    var n = u.getGlobalValue(e);
    n.push({
      action: f.SUBSCRIBE,
      arguments: [f.SET_META_INFO, function (e, n) {
        e === f._USER_ID && n ? g(d, t) : e === f._ANONY_ID && n ? g(_, t) : "_hold" === e && "START" === n && i(t);
      }]
    });
  };

  var v = function (e, t, n) {
    var a = !!t.isOpenApi,
        r = e ? e.action : "",
        f = e ? e.arguments : "",
        g = o(e);

    if (g) {
      var d = u.getContext();

      try {
        if (r && f && c.isArray(f)) {
          var _,
              h = r.split("."),
              v = d,
              m = d;

          if (3 === h.length) v = d[h[0]][h[1]] || {}, _ = s(h[2], a), m = v[_] ? v[_] : "";else for (; h.length;) if (_ = s(h.shift(), a), m = v = v[_], !v) return void (l(n) && n(e));
          l(m) && m.apply(v, f), "START" === g && i(t);
        }
      } catch (e) {
        p().w(e);
      }
    }
  };

  t.processTask = v;

  var m = function (e, t) {
    for (var n = {
      subscribeMwChangeQueue: [],
      subscribeMetaQueue: [],
      subscribeQueue: [],
      metaQueue: [],
      othersQueue: []
    }, a = [], r = {}; r = e.shift();) try {
      var o = r.action,
          i = r.arguments[0];
      /subscribe/.test(o) ? "setMetaInfo" === i ? n.subscribeMetaQueue.push(r) : i === f.MW_CHANGE_PV || i === f.MW_CHANGE_HJLJ ? n.subscribeMwChangeQueue.push(r) : n.subscribeQueue.push(r) : /MetaInfo/.test(o) ? n.metaQueue.push(r) : n.othersQueue.push(r);
    } catch (e) {
      p().w(e), n.othersQueue.push(r);
    }

    var s;
    return t && n[t] && (s = n[t], n[t] = []), a = n.subscribeMwChangeQueue.concat(n.metaQueue), a = a.concat(n.subscribeQueue), a = a.concat(n.subscribeMetaQueue, n.othersQueue), {
      queue: a,
      formatQueue: s
    };
  };

  t.getFormatQueue = m;
}, function (e, t, n) {
  "use strict";

  var a = n(45),
      r = n(2),
      o = n(89),
      i = a.extend({
    push: function (e) {
      this.length++, o.processTask(e, this.opts);
    }
  });

  e.exports = function () {
    return {
      processAplusQueue: function (e) {
        var t = this.options.config || {},
            n = r.getGlobalValue(e);
        o.processGoldlogQueue(n, t), r.setGlobalValue(e, i.create({
          opts: t,
          startLength: n.length,
          length: 0
        }));
      },
      run: function () {
        var e = this.options.context.aplus_config,
            t = e.globalConfig.APLUS_QUEUE;
        this.processAplusQueue(t), "aplus_queue" === t && this.processAplusQueue("goldlog_queue"), o.subscribeAndProcessQueue(t, this.options.config);
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  var a = n(2),
      r = n(3),
      o = n(9),
      i = n(12),
      s = n(16);

  e.exports = function () {
    return {
      run: function () {
        var e = this.options.context.aplus_config.metaInfo,
            t = a.getGlobalValue(r.APLUS),
            n = a.getGlobalValue(r.APLUS_QUEUE),
            u = e[r.AUTO_GET_OPENID],
            c = o.getContext(),
            l = t && t.getMetaInfo && t.getMetaInfo(r._ANONY_ID);

        if (u && !l) {
          n.push({
            action: r.APLUS_SET_META_INFO,
            arguments: ["_hold", "BLOCK"]
          });
          var p = o.getPlatformType();

          try {
            if ("wx" === p) {
              var f = c.getAccountInfoSync(),
                  g = f.miniProgram.appId,
                  d = c.getStorageSync && c.getStorageSync(r._ANONY_ID),
                  _ = c.getStorageSync && c.getStorageSync(r._DEV_ID);

              if (d) n.push({
                action: r.APLUS_SET_META_INFO,
                arguments: [r._ANONY_ID, d]
              }), n.push({
                action: r.APLUS_SET_META_INFO,
                arguments: [r._DEV_ID, _]
              }), n.push({
                action: "aplus.setMetaInfo",
                arguments: ["_hold", "START"]
              });else {
                var h = e.appKey;
                c.login({
                  success: function (a) {
                    if (a.code) {
                      var u = e[r.APLUS_PV_DOMAIN],
                          l = u + "/mp/get_openid";
                      o.request(l, {
                        method: "POST",
                        dataType: "json",
                        data: {
                          appkey: h,
                          code: a.code,
                          appid: g,
                          platform: p
                        }
                      }, function (e) {
                        if (e && e.data && 200 === e.data.code) {
                          var a = e.data.data;
                          s().set(r._ANONY_ID, a.od), s().set(r._DEV_ID, a.ud), c.setStorageSync && c.setStorageSync(r._ANONY_ID, a.od), c.setStorageSync && c.setStorageSync(r._DEV_ID, a.ud), t.od = a.od, n.push({
                            action: r.APLUS_SET_META_INFO,
                            arguments: [r._ANONY_ID, a.od]
                          }), n.push({
                            action: r.APLUS_SET_META_INFO,
                            arguments: [r._DEV_ID, a.ud]
                          }), n.push({
                            action: "aplus.setMetaInfo",
                            arguments: ["_hold", "START"]
                          });
                        } else i().w("auto get openid failed errMsg:", e.data.message);
                      }, function (e) {
                        i().w("auto get openid failed, errmsg = ", e && e.message);
                      });
                    } else i().w("auto get openid failed");
                  },
                  fail: function () {
                    i().w("wechat login failed");
                  }
                });
              }
            } else i().w("current miniapp platform:" + p + " not support autoGetOpenid, please setMetaInfo _anony_id by yourself!");
          } catch (e) {}
        } else i().w("auto get openid setting is ", u), i().w("current anony_id is ", t && t.getMetaInfo && t.getMetaInfo(r._ANONY_ID));
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  function a() {
    function e() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = i.getCurrentPage(),
          n = t.route || t.is;

      switch (e) {
        case "onPullDownRefresh":
          y.onPullDownRefresh += 1, h.push({
            action: "aplus.record",
            arguments: [s.logkey || "$$_pull_down_refresh", "CLK", {
              event: e,
              pagename: p.getPageCode() || n,
              count: y.onPullDownRefresh
            }]
          });
          break;

        case "onReachBottom":
          y.onReachBottom += 1, h.push({
            action: "aplus.record",
            arguments: [a.logkey || "$$_reach_bottom", "CLK", {
              event: e,
              pagename: p.getPageCode() || n,
              count: y.onReachBottom
            }]
          });
          break;

        case "onShareAppMessage":
          y.onShareAppMessage += 1, h.push({
            action: "aplus.record",
            arguments: [g.logkey || "$$_share", "CLK", {
              event: e,
              pagename: p.getPageCode() || n,
              count: y.onShareAppMessage,
              share_type: 1
            }]
          });
          break;

        case "onShareTimeline":
          y.onShareTimeline += 1, h.push({
            action: "aplus.record",
            arguments: [g.logkey || "$$_share", "CLK", {
              event: e,
              pagename: p.getPageCode() || n,
              count: y.onShareTimeline,
              share_type: 0
            }]
          });
          break;

        case "onPageShow":
          t.route && !v && (m = {
            path: t.route,
            page_name: t.route
          }, m.ts = Date.now(), v = !0);
          break;

        case "onPageHide":
          if (v) {
            var r = Date.now() - m.ts || 0,
                u = i.getReferrerPage().route || i.getReferrerPage().is || "-",
                c = (p.getPageName() || {}).extraParams,
                l = Object.assign({}, c, {
              duration: r,
              path: m.path,
              page_name: p.getPageCode() || m.page_name,
              page_start: m.ts,
              isMini: !0,
              _page_auto_id: o.PAGE_END,
              _page_auto_pv: !0,
              referrer: u
            });
            h.push({
              action: "aplus.sendPV",
              arguments: [{
                is_auto: !0,
                track_type: "1"
              }, l]
            }), m = null, v = !1;
          }

      }
    }

    function t() {
      a = _.getMetaInfo("rb_config"), s = _.getMetaInfo("pdr_config"), g = _.getMetaInfo("share_config");
    }

    function n(e, t) {
      if (e && t) try {
        var n = _.getMetaInfo("aplus-api-host"),
            a = /[[a-z|\-|\_|0-9\.]+[a-z|\-|\_|0-9](:\d*)?/,
            r = n.match(a);

        if (r && r[0]) {
          var s = o.HTTPS;
          /(\d+\.){3,}\d+/.test(r[0]) && (s = "http:");
          var u = s + "//" + n + "/vt/loadTransferConfig?code=" + e + "&appInfoId=" + t;
          i.request(u, {}, function (e) {
            try {
              var t = e.data && e.data.data && e.data.data.config || "",
                  n = e.data && e.data.data && e.data.data.debugId || "";
              n && _.appendMetaInfo("aplus-global-args", {
                debugId: n
              });
              var a = new Date().getTime();
              _._minicfg_load = new Date().getTime() - a, t && (_._aplus_vt_cfg = JSON.parse(t) || {}, l.vt2autoEvent());
            } catch (e) {
              f().w("fetch real-time visualization verification failed, err msg:" + e);
            }
          });
        }
      } catch (e) {}
    }

    var a,
        s,
        g,
        d = r.getContext(),
        _ = r.getGlobalValue(o.APLUS),
        h = r.getGlobalValue(o.APLUS_QUEUE),
        v = !1,
        m = {
      ts: Date.now()
    },
        y = {
      onPullDownRefresh: 0,
      onShareTimeline: 0,
      onReachBottom: 0,
      onShareAppMessage: 0,
      onClick: 0
    };

    h.push({
      action: o.SUBSCRIBE,
      arguments: ["aplusReady", function (e) {
        "complete" === e && t();
      }]
    }), _.aplus_pubsub.subscribe("onLoad", function (e) {
      if ("ready" === e.status) try {
        var t = p.getVTRealtimeCode();

        if (t) {
          var a = _.getMetaInfo("appInfoId");

          n(t, a);
        } else !!_.getMetaInfo("aplus-vt-cfg-url") && l.vt2autoEvent();
      } catch (e) {
        f().w("fetch real-time visualization verification failed, errmsg:" + e);
      }
    }), _.aplus_pubsub.subscribe("onShow", function (t) {
      if ("ready" === t.status) {
        var n = "MAN" !== d.aplus.getMetaInfo("aplus-waiting");
        n && e("onPageShow");
      }
    }), _.aplus_pubsub.subscribe("onHide", function (t) {
      if ("ready" === t.status) {
        var n = "MAN" !== d.aplus.getMetaInfo("aplus-waiting");
        n && e("onPageHide");
      }
    }), _.aplus_pubsub.subscribe("onPullDownRefresh", function (t) {
      "ready" === t.status && e("onPullDownRefresh");
    }), _.aplus_pubsub.subscribe("onReachBottom", function (t) {
      "ready" === t.status && e("onReachBottom");
    }), _.aplus_pubsub.subscribe("onShareAppMessage", function (t) {
      "ready" === t.status && e("onShareAppMessage");
    }), _.aplus_pubsub.subscribe("onShareTimeline", function (t) {
      "ready" === t.status && e("onShareTimeline");
    }), _.getMetaInfo("aplus-vt-cfg-url") && u.pushIntoGoldlogQueue(o.SUBSCRIBE, [c, function (e) {
      var t = e.pageConfig;
      t && t.enabled && (_._aplus_vt_cfg = t);
    }]);
  }

  var r = n(2),
      o = n(3),
      i = n(9),
      s = n(93),
      u = n(94),
      c = "MiniVtConfigFormat",
      l = n(97),
      p = n(36),
      f = n(12);

  e.exports = function () {
    return {
      run: function () {
        var e = r.getGlobalValue("aplus");

        if (a(), !e._aplus_aleady_load_minivt) {
          e._aplus_aleady_load_minivt = 1;
          var t = s.create();
          t.run();
        }
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  var a = n(45),
      r = n(94),
      o = n(95),
      i = n(7),
      s = n(33),
      u = n(96),
      c = n(3),
      l = n(2),
      p = "MiniVtConfigBack",
      f = "MiniVtConfigFormat",
      g = c.PUBLISH;
  e.exports = a.extend(s.assign(u, {
    pathname: "",
    pageConfig: {},
    originSpm: {
      spmA: "",
      spmB: ""
    },
    updateCfgLs: function () {
      var e = this;
      setTimeout(function () {
        e.fetchFromCdn();
      }, 1e3);
    },
    fetchFromCdn: function () {
      var e = this,
          t = l.getGlobalValue("aplus"),
          n = t.getMetaInfo("aplus-vt-cfg-url");

      if (n) {
        var a = new Date().getTime();
        t.requestVTConfig(n, function (n) {
          var o = n.data;
          if (t._minicfg_load = new Date().getTime() - a, o) try {
            t._aplus_vt_cfg = "object" == typeof o ? o : JSON.parse(o), t._aplus_vt_cfg.points && i(t._aplus_vt_cfg.points, function (e) {
              e.selector = decodeURIComponent(e.selector);
            }), e.setConfigIntoLs(t._aplus_vt_cfg);
          } catch (e) {
            t._aplus_vt_cfg = {
              enabled: !1
            };
          }
          r.pushIntoGoldlogQueue(g, [p, {
            pageConfig: t._aplus_vt_cfg,
            enable: 0
          }]);
        }, function (e) {
          t._aplus_vt_cfg && t._aplus_vt_cfg.enabled && r.pushIntoGoldlogQueue(g, [p, {
            pageConfig: t._aplus_vt_cfg,
            enable: 0
          }]), o.catchException("getTrackerCfg", e, {
            msg: n
          });
        }, {
          timeout: 5e3
        });
      }
    },
    getMiniVtData: function (e, t, n) {
      var a = l.getGlobalValue("aplus");

      if (a._minicfg_load = 0, e) {
        var o = this.fetchFromLS(e);
        if ("string" == typeof o) try {
          o = JSON.parse(o);
        } catch (e) {
          o = {};
        }
        o && o.enabled && (a._aplus_vt_cfg = o), n ? this.fetchFromCdn(e, t) : r.pushIntoGoldlogQueue(g, [p, {
          pageConfig: o,
          enable: 0
        }]);
      }
    },
    syncMiniVtData: function () {
      var e = this.getVtConfigPath();
      this.getMiniVtData(e, "", !0);
    },
    init: function () {
      var e = this,
          t = c.SUBSCRIBE;
      r.pushIntoGoldlogQueue(t, [p, function (t) {
        t.enable || (e.pageConfig = t.pageConfig), r.pushIntoGoldlogQueue(g, [f, {
          pageConfig: e.pageConfig,
          originSpm: e.originSpm
        }]), !t.enable && e.setConfigIntoLs(e.pageConfig);
      }]), e.syncMiniVtData();
    },
    run: function () {
      return this.init(), this;
    }
  }));
}, function (e, t, n) {
  "use strict";

  var a = n(2);

  t.pushIntoGoldlogQueue = function (e, t) {
    var n = a.getGlobalValue("aplus_queue"),
        r = a.getGlobalValue("aplus"),
        o = e.split("."),
        i = r[o[1]],
        s = i ? i[o[2]] : null;
    r && 2 === o.length && i ? i.apply(r, t) : 3 === o.length && s ? s.apply(i, t) : n.push({
      action: e,
      arguments: t
    });
  };
}, function (e, t, n) {
  "use strict";

  var a = n(94);

  t.catchException = function (e, t) {
    var n = e;
    "object" == typeof t && t.message && (n = n + "_" + t.message), a.pushIntoGoldlogQueue("aplus._aplus_cplugin_m.do_tracker_jserror", [{
      message: n,
      error: JSON.stringify(t),
      filename: e
    }]);
  };
}, function (e, t, n) {
  "use strict";

  var a = n(2),
      r = n(9),
      o = n(11);
  e.exports = {
    lsMinivtConfigKey: "APLUS_MINI_CONFIG",
    getMiniVtTplCdnPath: function () {
      var e = a.getGlobalValue("aplus"),
          t = e.getMetaInfo("aplus-track-config-id"),
          n = t && t.turnon,
          r = t && t.value;
      return "1" === n && r ? r : "";
    },
    getVtConfigPath: function () {
      var e,
          t = this.getMiniVtTplCdnPath(),
          n = [],
          a = o.getAppKey();
      return a && (e = a), e && (n = e.split(".")), 2 === n.length ? this.originSpm = {
        spmA: n[0],
        spmB: n[1]
      } : 1 === n.length && (this.originSpm.spmA = n[0]), t ? t : 2 === n.length ? n.join("_") : 1 === n.length ? n[0] : void 0;
    },
    fetchFromLS: function (e) {
      this.cdnpath || (this.cdnpath = e || this.getMiniVtTplCdnPath());
      var t = r.getContext();
      return decodeURIComponent(t.getStorageSync(this.lsMinivtConfigKey + "-" + e)) || {};
    },
    setConfigIntoLs: function (e) {
      this.cdnpath || (this.cdnpath = this.getVtConfigPath());
      var t = r.getContext();
      t.setStorageSync(this.lsMinivtConfigKey + "-" + this.cdnpath, encodeURIComponent(JSON.stringify(e)));
    }
  };
}, function (e, t, n) {
  "use strict";

  function a(e, t) {
    function n(e, t) {
      for (var n = -1, a = 0; a < t.length; a++) {
        var r = t[a];

        if (r.cssSelector === e.cssSelector && r.logkey === e.logkey) {
          n = a;
          break;
        }
      }

      return n;
    }

    e = u.isArray(e) ? e : [], t = u.isArray(t) ? t : [];
    var a = [].concat(t, e),
        r = a.filter(function (e, t, a) {
      return n(e, a) === t;
    });
    return r;
  }

  function r(e) {
    return u.isArray(e) ? e.filter(function (e) {
      return void 0 === e._vt;
    }) : [];
  }

  function o(e) {
    return /^[.#]/.test(e) ? e : e ? "." + e : "";
  }

  function i(e) {
    var t = s.getCurrentPage(),
        n = e || t.route,
        a = p._aplus_vt_cfg || p._aplus_tracking_cfg,
        r = [],
        i = [];
    return a && a.pages && l(a.pages, function (e) {
      p.setPageName({
        pageName: e.spmB,
        extraParams: e.extraParams
      }, e.matchUrl), e.matchUrl === n && (l(a.points, function (t) {
        e.spmB === t.spmB && ("exposure" === t.trackerType ? r.push({
          cssSelector: o(t.selector),
          positionSelector: t.positionSelector,
          logkey: t.logkey,
          props: t.props,
          spmB: t.spmB,
          spmC: t.spmC,
          spmD: t.spmD,
          customArgs: t.customArgs,
          _vt: e.template || e.stdId ? 2 : 1
        }) : i.push({
          cssSelector: o(t.selector),
          logkey: t.logkey,
          props: t.props,
          spmB: t.spmB,
          spmC: t.spmC,
          spmD: t.spmD,
          customArgs: t.customArgs,
          _vt: e.template || e.stdId ? 2 : 1
        }));
      }), a.common_exdata && "object" == typeof a.common_exdata && p.setMetaInfo("aplus-exdata", a.common_exdata), a.common_pvdata && "object" == typeof a.common_pvdata && p.setMetaInfo("aplus-cpvdata", a.common_pvdata));
    }), {
      EXP: r,
      CLK: i
    };
  }

  var s = n(9),
      u = n(64),
      c = n(2),
      l = n(7),
      p = c.getGlobalValue("aplus"),
      f = n(36);
  t.getCurrentPageVTCfg = function () {
    var e = p._aplus_vt_cfg;
    if (e) for (var t = f.getCurrentPagePath(), n = 0; n < e.pages.length; n++) {
      var a = e.pages[n];
      if (a.matchUrl === t) return a;
    }
  }, t.getTrackConfigByPath = i, t.getTrackConfigByPointCssSelector = function (e, t, n) {
    var a = i(n)[t] || [],
        r = null;
    return l(a, function (t) {
      t.cssSelector === e && (r = t);
    }), r;
  }, t.vt2autoEvent = function () {
    var e = p._aplus_vt_cfg || p._aplus_tracking_cfg;

    if (e && e.pages) {
      var t = i(),
          n = r(p.getMetaInfo("aplus-auto-exp"));
      p.setMetaInfo("aplus-auto-exp", a(n, t.EXP));
      var o = r(p.getMetaInfo("aplus-auto-clk"));
      p.setMetaInfo("aplus-auto-clk", a(o, t.CLK));
    }
  };
}, function (e, t, n) {
  e.exports = function () {
    return {
      run: function () {
        var e = n(99),
            t = this.options.context.aplus_config.metaInfo,
            a = e.create({
          metaInfo: t
        });
        a.run(this.options);
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  function a(e, t, a) {
    var r = p.getGlobalValue(g.APLUS);

    if (s.checkEvent(e, t)) {
      var c = n(101)(e, t);
      c.rank = _.rank(), c && c.id === g.APP_END && (c.amount = c.rank), u().i("event: ", e, t), o().addEvent(c);
      var l = r.getMetaInfo("max-queue-count") || g.MAX_QUEUE_COUNT;
      (e === g.APP_END || o().getEkvsLen() >= l) && (a ? r.getMetaInfo(g._ANONY_ID) ? i(g.REQUESTS).send(s.DataType.EKV, {
        noCache: !1
      }, function () {
        u().i("event send success: ", e, c);
      }) : h.push({
        action: g.SUBSCRIBE,
        arguments: [g.SET_META_INFO, function (t, n) {
          t === g._ANONY_ID && n && i(g.REQUESTS).send(s.DataType.EKV, {
            noCache: !1
          }, function () {
            u().i("event send success: ", e, c);
          });
        }]
      }) : i(g.REQUESTS).send(s.DataType.EKV, {
        noCache: !1
      }, function () {
        u().i("event send success: ", e, c);
      }));
    }
  }

  var r = n(100),
      o = n(19),
      i = n(21),
      s = n(18),
      u = n(12),
      c = n(14),
      l = n(33),
      p = n(2),
      f = n(9),
      g = n(3),
      d = n(36),
      _ = n(38),
      h = p.getGlobalValue(g.APLUS_QUEUE);

  e.exports = r.extend({
    handlerMiddleware: function (e) {
      var t,
          n,
          r,
          o = this.metaInfo && this.metaInfo.autoGetOpenid,
          i = p.getGlobalValue(g.APLUS),
          u = e && e.userdata && e.userdata.logkey,
          _ = e && e.userdata && e.userdata.gmkey,
          h = e && e.what_to_send && e.what_to_send.logdata && e.what_to_send.logdata || {},
          v = i.getMetaInfo("globalproperty");

      if ("CLK" === _ || "EXP" === _ || "OTHER" === _ || u === g.APP_START || u === g.APP_END) {
        t = c(e && e.userdata && e.userdata.gokey) || {}, n = h.gokey || {};
        var m,
            y = {};
        "$$_share" === u && (y.refer_page = h.url, y.share_type = t.share_type), n.scene && (y.scene = f.getPlatformType() + "_" + n.scene), n.targetAppKey && (y.targetAppKey = t.targetAppKey, delete t.targetAppKey), r = t["data-pagename"] || t.page_name || t.spm && t.spm.b || i.getPageName() || h.url || "", y.page_name = r, y.url = h.url || "-", (t.page_name || t["data-pagename"]) && (delete t.page_name, delete t["data-pagename"]), l.isEmptyObject(v) || (y.gp = v), t.spm && (y["spm-cnt"] = [encodeURIComponent(r), t.spm.c, t.spm.d].filter(function (e) {
          return !!e;
        }).join("."), delete t.spm), t.page_title ? (y.page_title = t.page_title || d.getPageTitle(h.url) || "", delete t.page_title) : y.page_title = n._page_title || "", t.is_auto ? (y.is_auto = t.is_auto, y.track_type = "1", delete t.is_auto, h.event_code && (y.event_type_id = h.event_code)) : (y.is_auto = 0, y.track_type = "0");
        var S = c(t);

        for (var b in S) "string" == typeof b && s.startsWith(b, "_") && (y[b] = S[b], delete t[b]);

        m = u === g.APP_START || u === g.APP_END ? l.assign(y, t) : l.assign(y, {
          cusp: t
        }), a(u, m, o);
      } else if ("2001" === h.event_code) {
        var A = {},
            I = g.PAGE_START;
        n = c(h.gokey) || {}, r = n.page_name || i.getPageName() || d.getPageCode(h.url) || h.url || "", A.r = h.arg1 || h.logkey || "-", A.page_name = r, n._page_auto_pv ? (A.is_auto = 1, A.url = n.path || "-", A.ref_url = n.referrer, A.track_type = "1", delete n._page_auto_pv, delete n.referrer, delete n.path, delete n.page_name) : (A.is_auto = 0, A.url = h.url || "-", A.ref_url = h.pre, A.track_type = "0"), n.duration && (A.duration = n.duration, delete n.duration), l.isEmptyObject(v) || (A.gp = v), n.scene && (A.scene = f.getPlatformType() + "_" + n.scene), n = s.deleteInfo(n, ["_anony_id", "_dev_id", "_session_id", "_user_id", "_user_nick", "uaid", "pvid", "scene"]), A["spm-cnt"] = encodeURIComponent(r), n._page_auto_id && (I = n._page_auto_id, delete n._page_auto_id), n.page_start && (A.page_start = n.page_start, delete n.page_start), n.page_title ? (A.page_title = n.page_title || d.getPageTitle(h.url) || "", delete n.page_title) : A.page_title = n._page_title, delete n._page_title, A.url = d.getFullPath(A.url), A.ref_url = d.getFullPath(A.ref_url), a(I, l.assign(A, {
          cusp: n
        }), o);
      }
    },
    run: function () {
      this.watchLOG();
    }
  });
}, function (e, t, n) {
  "use strict";

  var a = n(45),
      r = n(94),
      o = n(3);
  e.exports = a.extend({
    subscribeLogs: function (e, t) {
      r.pushIntoGoldlogQueue(o.SUBSCRIBE, [e, function (e) {
        e.status === o.COMPLETE && t(e);
      }]);
    },
    getLogicSymbol: function () {
      return "ALI" === this.format ? "&" : "||";
    },
    handlerMiddleware: function () {},
    watchLOG: function () {
      var e = this;
      e.subscribeLogs(o.MW_CHANGE_PV, function (t) {
        e.handlerMiddleware(t, "pv");
      }), e.subscribeLogs(o.MW_CHANGE_HJLJ, function (t) {
        e.handlerMiddleware(t, o.APLUS);
      });
    },
    run: function () {
      this.watchLOG();
    }
  });
}, function (e, t, n) {
  var a = n(2),
      r = n(33),
      o = n(12),
      i = n(17);

  e.exports = function (e, t) {
    if ("string" != typeof e || !e) return void o().w("event logkey is invalid, id =", e || "'' event properties = ", i.stringfy(t.cusp));
    var n = Object.create(null);
    n.id = e, t && t.ts || (n.ts = Date.now());
    var s = typeof t;
    if ("object" === s) for (var u in t) ({}).hasOwnProperty.call(t, u) && (n[u] = t[u]);
    var c = a.getGlobalValue("aplus"),
        l = c.getMetaInfo("globalproperty");
    return r.isEmptyObject(l) || (n.gp = l), n;
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function (e, t) {
    var a = n(2),
        r = n(49),
        o = n(12);
    o().setDebug(!(!e || "object" != typeof e || !e.metaInfo.DEBUG));
    var i = n(7),
        s = n(9),
        u = n(103);
    s.initIsTB(), "object" == typeof e && (e.siteId && (t.globalConfig.siteId = e.siteId), t.metaInfo = Object.assign({}, t.metaInfo, e.metaInfo));
    var c = "running",
        l = "complete",
        p = ["aplusReady", c];
    return r.doPubMsg(p), u.run({
      plugins: t.plugins,
      context: function () {
        var e = {
          PAGE_LOAD_TIME: new Date()
        },
            n = [];
        return i(t.plugins, function (t) {
          e[t.name] = t.config, "aplus_log_inject" === t.name && t.config && t.config.plugins && (n = t.config.plugins.pv, i(n, function (t) {
            e[t.name] = t.config;
          }));
        }), Object.assign({}, e, {
          aplus_config: t
        });
      }
    }, function () {
      o().v("APLUS INIT SUCCESS"), p[1] = l, r.doPubMsg(p);
    }), a.getContext();
  };
}, function (e, t, n) {
  "use strict";

  var a = n(69),
      r = n(10),
      o = n(49);

  t.run = function (e, t) {
    var n = new a();
    n.run({
      plugins: e.plugins,
      context: e.context
    }, {
      config: {},
      userdata: {},
      pubsubType: "aplusinit",
      messageFnQueue: [],
      middlewareMessageKey: "mw_change_aplusinit"
    }, function (e) {
      var n = ["aplusInitContext", e];
      o.doPubMsg(n), o.doCachePubs(n), r(t) && t(e);
    });
  };
}]);