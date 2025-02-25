module.exports = function () {
  var __MODS__ = {};

  var __DEFINE__ = function (modId, func, req) {
    var m = {
      exports: {},
      _tempexports: {}
    };
    __MODS__[modId] = {
      status: 0,
      func: func,
      req: req,
      m: m
    };
  };

  var __REQUIRE__ = function (modId, source) {
    if (!__MODS__[modId]) return require(source);

    if (!__MODS__[modId].status) {
      var m = __MODS__[modId].m;
      m._exports = m._tempexports;
      var desp = Object.getOwnPropertyDescriptor(m, "exports");
      if (desp && desp.configurable) Object.defineProperty(m, "exports", {
        set: function (val) {
          if (typeof val === "object" && val !== m._exports) {
            m._exports.__proto__ = val.__proto__;
            Object.keys(val).forEach(function (k) {
              m._exports[k] = val[k];
            });
          }

          m._tempexports = val;
        },
        get: function () {
          return m._tempexports;
        }
      });
      __MODS__[modId].status = 1;

      __MODS__[modId].func(__MODS__[modId].req, m, m.exports);
    }

    return __MODS__[modId].m.exports;
  };

  var __REQUIRE_WILDCARD__ = function (obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var k in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  };

  var __REQUIRE_DEFAULT__ = function (obj) {
    return obj && obj.__esModule ? obj.default : obj;
  };

  __DEFINE__(1640070441192, function (require, module, exports) {
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
      function a(e) {
        return r(Object.assign({
          globalConfig: {
            lver: "1.0.1",
            jsver: "qt-miniprogram"
          }
        }, e));
      }

      var r = n(2);
      t.AplusMini = {
        create: function (e) {
          return a(e).aplus;
        }
      }, t.AplusMiniQueue = {
        create: function (e) {
          return a(e).aplus_queue;
        }
      };
    }, function (e, t, n) {
      e.exports = n(3).AplusMini;
    }, function (e, t, n) {
      t.AplusMini = n(4);
    }, function (e, t) {
      /*! 2021-12-21 14:24:19 aplus_mini_cloud_um.js */
      e.exports = function (e) {
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
        n(2).initGlobal(), e.exports = function (e) {
          var t = n(4);
          return n(91)(e, t);
        };
      }, function (e, t, n) {
        var a,
            r = n(3),
            o = r.APLUS,
            s = r.APLUS_QUEUE,
            i = r.GOLDLOG,
            u = r.GOLDLOG_QUEUE,
            c = !1;

        try {
          a = window, c = !0;
        } catch (e) {
          a = {};
        }

        t.getContext = function () {
          return a;
        }, t.initGlobal = function (e) {
          a = e ? e : {
            v: 1,
            aplus: {},
            aplus_queue: []
          };
          var t, n;
          if (c) try {
            t = a.aplus || (a.aplus = {});
            var r = a.goldlog_queue || (a.goldlog_queue = []);
            n = a.aplus_queue || (a.aplus_queue = []), n = r.concat(n);
          } catch (e) {} else t = a.aplus, n = a.aplus_queue;
          return a.aplus = a.goldlog = t, a.aplus_queue = a.goldlog_queue = n, a;
        };

        var p = function (e) {
          if (e === o || e === i) {
            var t = a[o] || a[i];
            return t || (t = a[o] = a[i] = {}), t;
          }

          var n = u,
              r = s;

          if (e === r || e === n) {
            var c = a[r] || a[n];
            return c || (c = a[r] = a[n] = []), c;
          }
        };

        t.getGlobalValue = p, t.setGlobalValue = function (e, t) {
          a[e] = t;
        };

        var l = function (e) {
          var t;

          try {
            var n = p(o);
            t = n[e];
          } catch (e) {
            t = "";
          } finally {
            return t;
          }
        };

        t.getGoldlogVal = l;

        var f = function (e, t) {
          var n = !1;

          try {
            var a = p(o);
            e && (a[e] = t, n = !0);
          } catch (e) {
            n = !1;
          } finally {
            return n;
          }
        };

        t.setGoldlogVal = f, t.getClientInfo = function () {
          return l("_aplus_client") || {};
        };
      }, function (e, t) {
        var n = "aplus",
            a = "goldlog",
            r = n + "_queue",
            o = a + "_queue",
            s = "mw_change",
            i = "MetaInfo",
            u = "append" + i,
            c = "set" + i,
            p = "http",
            l = "_pubsub",
            f = "other",
            g = "2101",
            d = "2201",
            h = "2202",
            _ = "19999",
            v = "1023",
            m = "1010",
            y = 3e4,
            b = 18e5,
            S = "ekvs",
            P = 1e4,
            A = 1,
            I = 3e3,
            C = "$$_page_start",
            T = "$$_page_end",
            E = "$$_app_start",
            x = "$$_app_end",
            M = "aplus_user_profile",
            w = "imprint",
            O = "aplus-idtype",
            k = "aplus-jsbridge-only",
            U = "aplus-page-config",
            N = "aplus-skip-apv-rules",
            L = "aplus-rhost-v",
            R = "aplus-rhost-g";
        e.exports = {
          PAGE_ENTER: "PAGE_ENTER",
          CURRENT_PAGE_CONFIG: "CURRENT_PAGE_CONFIG",
          _ANONY_ID: "_anony_id",
          _USER_ID: "_user_id",
          DEFAULT_CODE: f,
          OTHER: _,
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
            IMPEXP: h,
            CLK: g,
            OTHER: _,
            SHOW: v,
            H_OR_U: m
          },
          APLUS: n,
          GOLDLOG: a,
          UNSUBSCRIBE: n + "." + n + l + ".unsubscribe",
          SUBSCRIBE: n + "." + n + l + ".subscribe",
          PUBLISH: n + "." + n + l + ".publish",
          CACHE_PUBS: n + "." + n + l + ".cachePubs",
          APLUS_UNIVERSAL: n + "_universal",
          APLUS_QUEUE: r,
          GOLDLOG_QUEUE: o,
          COMPLETE: "complete",
          PV_CODE: "2001",
          EXP_CODE: d,
          CLK_CODE: g,
          OTHER_CODE: _,
          CLK: "CLK",
          EXP: "EXP",
          SPM_CNT: "spm-cnt",
          SPM_URL: "spm-url",
          SPM_PRE: "spm-pre",
          MW_CHANGE_PV: s + "_pv",
          MW_CHANGE_HJLJ: s + "_hjlj",
          HTTP: p + ":",
          HTTPS: "https:",
          APPEND_META_INFO: u,
          SET_META_INFO: c,
          APLUS_APPEND_META_INFO: n + "." + u,
          APLUS_SET_META_INFO: n + "." + c,
          PVID: "pvid",
          APLUS_LOG_PIPE: "aplus-log-pipe",
          openAPIs: ["send", "enter", "sendPV", "record", "combineRecord", "recordUdata", "requestVTConfig", "setPageSPM", "setMetaInfo", "appendMetaInfo", "updatePageProperties", "updateNextPageProperties", "updatePageUtparam", "updateNextPageUtparam", "pageAppear", "pageDisappear", "skipPage", "updateSessionProperties", "getPageSpmUrl", "getPageSpmPre", "setPageName", "getElementSPM", "recordAppLink"],
          SESSION_INTERVAL: y,
          SESSION_PAUSE_TIME: "session_pause_time",
          IMPRINT: "imprint",
          CURRENT_SESSION: "current_session",
          MAX_EVENTID_LENGTH: 128,
          MAX_PROPERTY_KEY_LENGTH: 256,
          MAX_PROPERTY_KEYS_COUNT: 100,
          REQUESTS: "requests",
          SHARES: "shares",
          APLUS_SSRC: "_aplus_ssrc",
          EKVS: S,
          EVENT_MAX_COUNT: P,
          MEMORY_MAX_COUNT: A,
          EVENT_SEND_DEFAULT_INTERVAL: I,
          PAGE_START: C,
          PAGE_END: T,
          APP_START: E,
          APP_END: x,
          USER_PROFILE_KEY: M,
          SHARE_CACHE_INTERVAL: b,
          IMPRINT: w,
          ID_TYPE: O,
          GLOBAL_PROPERTY: "globalproperty",
          JSBRIDGE_ONLY: k,
          PAGE_CONFIG: U,
          APLUS_SKIP_APV_RULES: N,
          APLUS_PV_DOMAIN: L,
          APLUS_EKV_DOMAIN: R
        };
      }, function (e, t, n) {
        e.exports = {
          metaInfo: {
            "aplus-rhost-v": "",
            "aplus-rhost-g": "",
            "aplus-mmstat-timeout": "10000",
            sdkId: "aplus_mini_cloud_um"
          },
          globalConfig: {
            isAli: !1,
            isDecodeUrl: !0,
            APLUS_QUEUE: "aplus_queue",
            ETAG_STORAGE_KEY: "__ETAG__CNA__ID__",
            script_name: "aplus_mini.js",
            "aplus-globaldata": {},
            lver: "1.7.12"
          },
          plugins: [{
            name: "inject_app_um",
            path: n(5)
          }, {
            name: "inject_page_um",
            path: n(30)
          }, {
            name: "open_api",
            path: n(33)
          }, {
            name: "aplus_client",
            path: n(34)
          }, {
            name: "pubsub",
            path: n(35)
          }, {
            name: "aplus_meta_inject",
            path: n(38)
          }, {
            name: "aplus_ac",
            path: n(42),
            deps: ["inject_page_um"]
          }, {
            name: "aplus_ae",
            path: n(47),
            deps: ["inject_page_um"]
          }, {
            name: "aplus_mini_report_um",
            path: n(54)
          }, {
            name: "aplus_log_inject",
            path: n(59),
            deps: ["aplus_meta_inject"],
            config: {
              plugins: {
                pv: [{
                  name: "etag",
                  path: n(60)
                }, {
                  name: "when_to_sendpv",
                  path: n(65),
                  config: {
                    aplusWaiting: ""
                  }
                }, {
                  name: "where_to_send",
                  path: n(66)
                }, {
                  name: "what_to_send",
                  path: n(67),
                  config: {
                    logdataToUt: {}
                  }
                }, {
                  name: "miniapp_data",
                  path: n(71)
                }, {
                  name: "what_to_sendpv_userdata",
                  path: n(72),
                  deps: ["what_to_send"]
                }, {
                  name: "can_to_sendpv",
                  path: n(73)
                }],
                hjlj: [{
                  name: "etag",
                  path: n(60)
                }, {
                  name: "where_to_send",
                  path: n(66)
                }, {
                  name: "what_to_send",
                  path: n(67),
                  deps: []
                }, {
                  name: "miniapp_data",
                  path: n(71)
                }, {
                  name: "what_to_hjlj_userdata",
                  path: n(74)
                }]
              }
            }
          }, {
            name: "aplus_api",
            path: n(75),
            deps: ["aplus_log_inject", "aplus_meta_inject"]
          }, {
            name: "meta_queue",
            path: n(83),
            config: {
              isOpenApi: !0
            }
          }, {
            name: "etag",
            path: n(60)
          }, {
            name: "aplus_queue",
            path: n(85),
            config: {
              isOpenApi: !0
            }
          }, {
            name: "auto_tracker_um",
            path: n(86),
            deps: ["inject_page_um"]
          }]
        };
      }, function (e, t, n) {
        function a(e, t) {
          var n = {};
          t && (n.scene = t), e && e.miniappDebugId && (n.debugId = e.miniappDebugId);

          for (var a in e) "$$_share_uid" !== a && 0 !== a.indexOf("$$_utm_") || (n[a] = e[a]);

          return n;
        }

        function r(e) {
          h().load(function () {
            v().w("cache init success");
          });
          var t = {},
              n = p(e);

          for (var a in n) "object" == typeof n[a] ? t = y.assign(n[a], t) : n[a] && (t[a] = n[a]);

          d().load();
          var r = f().resume(t),
              o = f().getCurrentSessionId();
          g().setSessionId(o), r && d().add(_.DataType.HALF_SESSION, {}, function () {
            v().w("before send session"), d().send();
          });
        }

        function o() {
          f().pause(), d().send(_.DataType.CLOSE_SESSION, {}, function () {
            d().save(), h().save(), v().w("after send session");
          });
        }

        function s() {
          var e = App,
              t = !1;

          App = function (n) {
            var s = i.getContext(),
                p = {
              onLaunch: function (e) {
                l.initIsTB();
                var t = e ? e.query : {},
                    n = e ? e.referrerInfo : {};

                if (b += 1, s.aplus_queue.push({
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
                b += 1;
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
                })), 2 === b ? n = 1 : 1 === b ? n = 0 : v().w("APP_LAUNCH_TYPE should not reach this, value = " + b), u.onAplusReady(s.aplus_queue, c.SUBSCRIBE, function () {
                  t || (t = !0, r(e));
                  var a = s.aplus.globalConfig || {};

                  if (!a.isAli) {
                    var o = m.getPageCode();
                    s.onAppShowTime = new Date().getTime(), s.aplus_queue.push({
                      action: "aplus.record",
                      arguments: [c.APP_START, "SHOW", {
                        start_type: n,
                        page_name: o || e.path || "-",
                        url: e.path || "-"
                      }]
                    });
                  }
                });
              },
              onHide: function () {
                u.onAplusReady(s.aplus_queue, c.SUBSCRIBE, function () {
                  var e = s.aplus.globalConfig || {},
                      n = m.getPageCode();

                  if (!e.isAli) {
                    var a = m.getCurrentPagePath(),
                        r = new Date().getTime() - s.onAppShowTime;
                    s.aplus_queue.push({
                      action: "aplus.record",
                      arguments: [c.APP_END, "H_OR_U", {
                        duration: r,
                        end_type: 0,
                        page_name: n || a || "-",
                        url: a || "-",
                        start_time: s.onAppShowTime
                      }]
                    });
                  }

                  t = !1, o();
                }), b = 0;
              },
              onUnload: function () {
                u.onAplusReady(s.aplus_queue, c.SUBSCRIBE, function () {
                  var e = s.aplus.globalConfig || {};

                  if (!e.isAli) {
                    var n = m.getCurrentPagePath(),
                        a = m.getPageCode(),
                        r = new Date().getTime() - s.onAppShowTime;
                    s.aplus_queue.push({
                      action: "aplus.record",
                      arguments: [c.APP_END, "H_OR_U", {
                        duration: r,
                        end_type: 1,
                        page_name: a || n || "-",
                        url: n || "-",
                        start_time: s.onAppShowTime
                      }]
                    });
                  }

                  t = !1, o();
                }), b = 0;
              }
            };
            Object.keys(p).forEach(function (e) {
              u.resetFn(n, e, p[e]);
            }), e(n);
          };
        }

        var i = n(2),
            u = n(6),
            c = n(3),
            p = n(7),
            l = n(8),
            f = n(12),
            g = n(17),
            d = n(19),
            h = n(13),
            _ = n(15),
            v = n(11),
            m = n(29),
            y = n(27),
            b = 0;

        e.exports = function () {
          return {
            run: function () {
              ["object", "function"].indexOf(typeof App) > -1 && s();
            }
          };
        };
      }, function (e, t) {
        e.exports = {
          resetFn: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
                a = e[t];

            e[t] = function () {
              var e = a && a.apply(this, arguments);
              return e ? n.call(this, e) : void n.apply(this, arguments);
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
          }
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
        function a() {
          if ("boolean" == typeof c) return c;
          var e = !1;

          try {
            var t = navigator ? navigator.userAgent || navigator.swuserAgent : "";
            e = !!/AliApp/i.test(t), (/AliApp\(AP/i.test(t) || /AliApp\(DingTalk/i.test(t) || /AliApp\(AMAP/i.test(t)) && (e = !1), /AliApp\(KB/i.test(t) && (e = !!/Mist/.test(t)), /AlipayIDE Taobao/.test(t) && (e = !0);
            var n = p().ctx;
            "function" == typeof n.canIUse && (e = !!n.canIUse("callUserTrack"));
          } catch (e) {}

          return c = e, e;
        }

        function r() {
          return "boolean" == typeof c ? !!c : a();
        }

        var o = n(9),
            s = n(2),
            i = n(10),
            u = n(11);
        t.getCurrentPage = function () {
          var e = getCurrentPages();
          return e[e.length - 1] || {};
        }, t.getReferrerPage = function () {
          var e = getCurrentPages();
          return e[e.length - 2] || {};
        };
        var c;
        t.resetIsTB = function (e) {
          c = e;
        }, t.initIsTB = a;

        var p = function () {
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
                      ctx: wx,
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
          return p().platType;
        }, t.getSdkType = function () {
          return p().sdkType;
        }, t.getContext = function () {
          return p().ctx;
        }, t.getLogDomain = function () {
          return p().logDomain;
        };

        var l = "httpRequest",
            f = "request",
            g = function () {};

        t.request = function (e, t, n, a) {
          var r = p().ctx;
          t || (t = {}), o(a) || (a = g), o(n) || (n = g);
          var c = t.requestMethodName || f,
              d = r[c];
          o(d) || (c !== f ? c = f : c !== l && (c = l), d = r[c]);

          var h = t.dataType || "json",
              _ = t.timeout || 5e3,
              v = t.method || "GET";

          e = i.can2https(e);
          var m;

          if (o(d)) {
            var y = {
              url: e,
              method: v,
              dataType: h,
              timeout: _,
              success: function (e) {
                n(e);
              },
              fail: function (t) {
                u().w("request " + e + " failure, the msg is ", t), a(t);
              }
            };
            "object" == typeof t.data && "POST" === v && (y.data = t.data, y.url = y.url.split("?")[0]);
            var b = s.getGlobalValue("aplus"),
                S = b.getMetaInfo("aplus-request-extinfo");
            "object" == typeof S && (y._extInfo = S), d(y);
          } else u().w('can not find "' + c + '"!'), a(m);
        };
      }, function (e, t) {
        e.exports = function (e) {
          return "function" == typeof e;
        };
      }, function (e, t, n) {
        function a(e) {
          var t,
              n,
              a,
              o = [],
              s = e.length;

          for (a = 0; a < s; a++) t = e[a][0], n = e[a][1], o.push(0 === t.indexOf(r) ? n : t + "=" + encodeURIComponent(n));

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
        }, t.can2https = function (e) {
          if (0 === e.indexOf("//")) {
            var t = "https:";
            /(\d+\.){3,}\d+/.test(e) && (t = "http:"), e = t + e;
          }

          return e;
        }, t.getAppKey = function () {
          var e = n(2).getGlobalValue("aplus");
          return e.getMetaInfo("appkey") || e.getMetaInfo("appId") || e.getMetaInfo("appKey");
        }, t.checkEmptyObj = function (e) {
          return "object" != typeof e || 0 === Object.keys(e).length;
        }, t.checkDomain = function (e) {
          const t = new RegExp(/^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:[0-9]{1,5})*$/);

          if (!e || !e.match(t)) {
            var a = n(11);
            return a().tip_w(a().repeat("!")), a().tip_w("收数域名配置错误,请检查aplus-rhost-v取值的内容, 正确格式 eg. test-qtracking-xxx.com:端口号可选 "), a().tip_w(a().repeat("!")), !1;
          }

          return !0;
        }, t.checkOpenid = function (e) {
          if (!e) {
            var t = n(11);
            return t().tip_w(t().repeat("!")), t().tip_w("QT的UV计算依赖小程序的用户唯一标识, 请确保针对用户唯一标识的上报！！"), t().tip_w("配置参考代码: aplus_queue.push({action: 'aplus.setMetaInfo', arguments: ['_anony_id', 待配置取值]});"), t().tip_w("获取小程序唯一标识请参考链接: https://t.tb.cn/1dTHjTTQF0UjOTNHiCkaCS"), t().tip_w(t().repeat("!")), !1;
          }

          return !0;
        };
      }, function (e, t) {
        var n = "[APLUS] -- ";

        e.exports = function () {
          function e() {
            this.setDebug = function (e) {
              a = e;
            }, this.i = function () {
              try {
                "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.info.apply(console, arguments);
              } catch (e) {}
            }, this.e = function () {
              if (a) try {
                "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.error.apply(console, arguments);
              } catch (e) {}
            }, this.w = function () {
              try {
                "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.warn.apply(console, arguments);
              } catch (e) {}
            }, this.v = function () {
              if (a) try {
                "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.log.apply(console, arguments);
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
      }, function (e, t, n) {
        var a = n(13),
            r = n(11),
            o = n(3),
            s = n(8),
            i = n(7),
            u = n(15),
            c = n(2);

        e.exports = function () {
          function e() {
            return {
              resume: function (e) {
                var t = !1;
                g || (g = a().get(o.CURRENT_SESSION));
                var s = new Date();
                return f = s.getTime(), !g || !g.end_time || f - g.end_time > o.SESSION_INTERVAL ? (t = !0, n(e), r().v("开始新的session(%s): ", g.id, g)) : r().v("延续上一次session(%s): %s ", g.id, s.toLocaleTimeString(), g), t;
              },
              pause: function () {
                p();
              },
              getCurrentSessionId: function () {
                return (g || {}).id;
              },
              getCurrentSession: function () {
                return g;
              },
              cloneCurrentSession: function () {
                return i(g);
              }
            };
          }

          function t(e) {
            var t = {};

            for (var n in e) t[n] = e[n];

            return r().v("query: ", e), t;
          }

          function n(e) {
            try {
              var n = (g || {}).options || {},
                  a = u.assign({}, t(e.query));
              a.path = e.path || n.path, a.scene = e.scene ? s.getPlatformType() + "_" + e.scene : n.scene;
              var o = e.referrerInfo;
              o && (a.referrerAppId = o.appId), r().v("session options: ", a);
              var i = c.getGlobalValue("aplus"),
                  p = i.getMetaInfo("globalproperty"),
                  l = Date.now();
              g = {
                id: u.getRandomStr(10) + l,
                start_time: l,
                options: a,
                state_s: 1
              }, p && (g.gp = p);
            } catch (e) {
              r().e("生成新session失败: ", e);
            }
          }

          function p() {
            if (g) {
              var e = new Date();
              g.end_time = e.getTime(), "number" != typeof g.duration && (g.duration = 0), g.duration = g.end_time - f, g.state_s = 0, a().set(o.CURRENT_SESSION, g), r().v("退出会话(%s): %s ", g.id, e.toLocaleTimeString(), g);
            }
          }

          var l = null,
              f = null,
              g = null;
          return function () {
            return l || (l = e()), l;
          };
        }();
      }, function (e, t, n) {
        var a = n(8),
            r = n(9),
            o = n(14),
            s = n(11),
            i = n(10);

        e.exports = function () {
          function e() {
            var e = a.getContext();
            this.load = function (t) {
              u ? (e.removeStorage({
                key: n
              }), r(t) && t()) : (n = "aplus_cache_" + i.getAppKey() || "", e.getStorage({
                key: n,
                success: function (a) {
                  u = a && a.data ? o.parse(a.data) || {} : {}, c = !0, e.removeStorage({
                    key: n
                  }), r(t) && t();
                },
                fail: function (a) {
                  s().v(n + ": " + a.errMsg), u = {}, c = !0, e.removeStorage({
                    key: n
                  }), r(t) && t();
                }
              }));
            }, this.save = function () {
              u && e.setStorage({
                key: n,
                data: o.stringfy(u)
              });
            }, this.set = function (e, t) {
              u && (u[e] = t);
            }, this.get = function (e) {
              return (u || {})[e];
            }, this.remove = function (e) {
              u && u[e] && delete u[e];
            }, this.getAll = function () {
              return u;
            }, this.clear = function () {
              u = null;
            }, this.has = function (e) {
              return !!this.get(e);
            }, this.isLoaded = function () {
              return c;
            };
          }

          var t = null,
              n = "",
              u = null,
              c = !1;
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
        t.getRandomStr = function (e) {
          for (var t = "", n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], a = 0; a < Number(e); a++) {
            var r = Math.round(Math.random() * (n.length - 1));
            t += n[r];
          }

          return t;
        }, t.startsWith = function (e, t) {
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
              r = n(11);
          if (!e || "string" != typeof e) return r().e('please check trackEvent id. id should be "string" and not null'), !1;
          var o = ["id", "du"],
              s = {};
          if (o.forEach(function (e) {
            s[e] = 1;
          }), s[e]) return r().e("eventId不能与以下保留字冲突: " + o.join(",")), !1;
          if (e.length > a.MAX_EVENTID_LENGTH) return r().e("The maximum length of event id shall not exceed " + a.MAX_EVENTID_LENGTH), !1;
          if (t && ("object" != typeof t || Array.isArray(t)) && "string" != typeof t) return r().e("please check trackEvent properties. properties should be string or object(not include Array)"), !1;

          if ("object" == typeof t) {
            var i = 0;

            for (var u in t) if ({}.hasOwnProperty.call(t, u)) {
              if (u.length > a.MAX_PROPERTY_KEY_LENGTH) return r().e("The maximum length of property key shall not exceed " + a.MAX_PROPERTY_KEY_LENGTH), !1;
              if (i >= a.MAX_PROPERTY_KEYS_COUNT) return r().e("The maximum count of properties shall not exceed " + a.MAX_PROPERTY_KEYS_COUNT), !1;
              if (s[u]) return r().e("属性中的key不能与以下保留字冲突: " + o.join(",")), !1;
              i += 1;
            }
          }

          return !0;
        };
        var a = n(16);
        t.deleteInfo = function (e, t) {
          return a(t, function (t) {
            delete e[t];
          }), e;
        }, t.checkEmptyObj = function (e) {
          return "object" != typeof e || 0 === Object.keys(e).length;
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
      }, function (e, t) {
        e.exports = function (e, t) {
          var n,
              a = e.length;

          for (n = 0; n < a; n++) {
            var r = t(e[n], n);
            if ("break" === r) break;
          }
        };
      }, function (e, t, n) {
        var a = n(13),
            r = n(11),
            o = n(3),
            s = n(18);

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
            return s(n) && n.length ? e[c] = n.concat(t) : e[c] = [].concat(t), e;
          }

          function n(e) {
            var t = 0;

            for (var n in e) s(e[n]) && (t += e[n].length);

            return t;
          }

          function i() {
            return {
              addEvent: function (t) {
                t && (c ? (p.unshift(t), p.length > o.MEMORY_MAX_COUNT && (e(c), p.length = 0)) : (r().w("session id is null: ", c), l.unshift(t)));
              },
              setSessionId: function (e) {
                if (c = e, r().v("setSessionId: ", c), s(l) && l.length && c) {
                  for (var t = 0; t < l.length; t++) this.addEvent(l[t]);

                  l.length = 0;
                }
              },
              getEkvs: function () {
                var e = a().get(o.EKVS);
                return p && p.length && (e = t(e, p)), e;
              },
              clear: function () {
                a().remove(o.EKVS), p.length = 0, l.length = 0;
              }
            };
          }

          var u,
              c,
              p = [],
              l = [];
          return function () {
            return u || (u = i()), u;
          };
        }();
      }, function (e, t) {
        e.exports = function (e) {
          return Array.isArray ? Array.isArray(e) : /Array/.test(Object.prototype.toString.call(e));
        };
      }, function (e, t, n) {
        var a = n(20),
            r = n(13),
            o = n(3),
            s = n(11),
            i = n(21),
            u = n(22),
            c = n(26),
            p = n(9),
            l = n(27),
            f = n(7),
            g = n(10),
            d = 50,
            h = n(2);

        e.exports = function () {
          function e(e, t, r) {
            t = t || {};
            var s = i(e);

            if (s) {
              var u = n(2),
                  c = u.getGlobalValue(o.APLUS),
                  f = c._aplus_client || {};
              s.header = l.assign(s.header, a.getNetInfo(f)), s.noCache = t.noCache, P.enqueue(s);
            }

            p(r) && r();
          }

          function t(e) {
            var n = P.front(),
                a = function () {
              P.dequeue(), t(e);
            },
                r = function () {
              var n = P.dequeue();
              n && !n.noCache && S.push(n), t(e);
            };

            n ? u(n, a, r) : (_(), e());
          }

          function _() {
            S.forEach(function (e) {
              P.enqueue(e);
            }), S.length = 0;
          }

          function v(e) {
            return b ? void s().v("队列正在发送中") : (b = !0, void t(function () {
              b = !1, p(e) && e();
            }));
          }

          function m() {
            this.send = function (e, t, n) {
              e ? this.add(e, t, function () {
                v(n);
              }) : v(n);
            }, this.add = function (t, n, a) {
              var r = h.getGlobalValue(o.APLUS);
              g.checkOpenid(r.getMetaInfo(o._ANONY_ID)) && e(t, n, a);
            }, this.load = function () {
              var e = r().get(o.REQUESTS);
              e && e.length && e.forEach(function (e) {
                P.enqueue(e);
              }), r().remove(o.REQUESTS);
            }, this.save = function () {
              r().set(o.REQUESTS, f(P.items())), P.clear();
            };
          }

          var y = null,
              b = !1,
              S = [],
              P = new c(d);
          return function () {
            return y || (y = new m()), y;
          };
        }();
      }, function (e, t, n) {
        var a = n(8),
            r = n(3),
            o = n(13),
            s = n(2),
            i = n(15),
            u = n(10);
        t.getNetInfo = function (e) {
          var t = {},
              n = e.networkType;

          switch ("none" === n && (n = "unknown"), n = n ? n.toLowerCase() : "") {
            case i.AccessType.MOBILE_NETWORK_4G:
              t.access_subtype = "LTE", t.access = "4G";
              break;

            case i.AccessType.MOBILE_NETWORK_3G:
              t.access_subtype = "CDMA", t.access = "3G";
              break;

            case i.AccessType.MOBILE_NETWORK_2G:
              t.access_subtype = "GRPS", t.access = "2G";
              break;

            default:
              t.access = n, delete t.access_subtype;
          }

          return t;
        }, t.getHeaderInfo = function () {
          var e = {},
              t = s.getGlobalValue(r.APLUS),
              n = t.globalConfig || {},
              i = t._aplus_client || {},
              c = o().get(r.IMPRINT);
          c && (e.imprint = c), e.device_type = "Phone", e.sdk_version = n.lver, e.appkey = u.getAppKey(), e.device_info = "", e.appid = i.appId, e.app_env = i.appEnv, e.app_version = t.getMetaInfo("appVersion") || "devtools";
          var p = t.getMetaInfo("aplus-global-args");
          p && p.debugId && (e.miniappDebugId = p.debugId);
          var l = i || {};
          l.safeArea = l.safeArea || {};
          var f = l.model || "",
              g = l.platform || "",
              d = l.brand || "",
              h = d.toLowerCase();
          e.sdk_type = a.getSdkType(), e.platform = a.getPlatformType(), e.platform_sdk_version = l.SDKVersion, e.platform_version = l.platformVersion;

          var _ = Math.round(l.screenWidth * l.pixelRatio),
              v = Math.round(l.screenHeight * l.pixelRatio);

          e.resolution = _ > v ? _ + "*" + v : v + "*" + _, e.pixel_ratio = l.pixelRatio, e.os = g, e.font_size_setting = l.fontSizeSetting, e.device_model = f, e.device_brand = d, e.device_manufacturer = h, e.device_manuid = f, e.device_name = f, e.os_version = l.os_version, e.language = l.language;
          var m = this.getNetInfo(i);
          return e.access = m.access, m.access_subtype && (e.access_subtype = m.access_subtype), e;
        };
      }, function (e, t, n) {
        function a() {
          var e = null,
              t = s().cloneCurrentSession();
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
              n = s().cloneCurrentSession();
          n && (t.sessions = [n]);
          var a = i().getEkvs();
          return a && (t.ekvs = c(a), i().clear()), (t.sessions || t.ekvs) && (e = {
            analytics: t
          }), e;
        }

        function o() {
          var e = null,
              t = i().getEkvs();
          return t && (e = {
            analytics: {
              ekvs: c(t)
            }
          }, i().clear()), e;
        }

        var s = n(12),
            i = n(17),
            u = n(15),
            c = n(7);

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
          var e = d.getGlobalValue(_.APLUS),
              t = e.getMetaInfo(_.APLUS_PV_DOMAIN),
              n = i.getLogDomain();
          if (!t || !n) return l().w("current request domain invalid, please check your aplus-rhost-v value inside metainfo!"), "";
          var a = ["//", t, n].join(""),
              r = _.HTTPS;
          return /(\d+\.){3,}\d+/.test(a) && (r = "http:"), a = r + a;
        }

        function r(e) {
          var t = i.getContext(),
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
              l().w("请求发送失败: ", e);
            }
          }

          o = setTimeout(function () {
            o && clearTimeout(o), r = !0, v(a) && a(r);
          }, e.timeout || m);
        }

        function o(e) {
          e && (p.set(e), p.save(), l().v("imprint: ", p.getImpObj()));
        }

        function s() {
          var e = i.getSdkType() + "/json",
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

        var i = n(8),
            u = n(20),
            c = n(23),
            p = n(24),
            l = n(11),
            f = n(14),
            g = n(25),
            d = n(2),
            h = n(15),
            _ = n(3),
            v = n(9),
            m = 5e3;

        e.exports = function (e, t, n, m) {
          var y = d.getGlobalValue(_.APLUS),
              b = u.getHeaderInfo();

          if ("my" === i.getPlatformType() || "taobao" === i.getPlatformType() ? (b.id_type = "alipay_id", b.id_tracking = {
            alipay_id: y.getMetaInfo(_._ANONY_ID) || "",
            unionid: y.getMetaInfo("_dev_id") || "",
            userId: y.getMetaInfo(_._USER_ID) || ""
          }) : (b.id_type = "openid", b.id_tracking = {
            openid: y.getMetaInfo(_._ANONY_ID) || "",
            unionid: y.getMetaInfo("_dev_id") || "",
            userId: y.getMetaInfo(_._USER_ID) || ""
          }), p.get() && (b[_.IMPRINT] = p.get()), e.analytics) {
            var S = y.getMetaInfo(_._USER_ID),
                P = y.getMetaInfo("_user_nick");
            e.analytics.active_user = {
              puid: S,
              provider: P
            };
          }

          e.header = h.assign(b, e.header, {
            ts: Date.now(),
            traceId: h.getRandomStr(10) + Date.now() + h.getRandomStr(9)
          });
          var A = c(e),
              I = f.stringfy(A),
              C = a(),
              T = {
            url: C,
            method: "POST",
            data: g.encode(I),
            success: function (a) {
              var r = a.code || a.status || a.statusCode;
              200 === r || 413 === r ? (l().i("数据发送成功: ", e, I), o((a.data || {}).imprint), v(t) && t(a)) : (l().w("数据发送失败: ", I), v(n) && n());
            },
            fail: function (e) {
              l().w("超时: ", I), v(n) && n();
            },
            complete: function () {
              v(m) && m();
            }
          };
          r(h.assign(T, s()));
        };
      }, function (e, t) {
        function n(e, t) {
          var n = a(e, t);
          return e && e.id_tracking && (n[t.id_tracking || "id_tracking"] = a(e.id_tracking, i)), n;
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
            s = {
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
            i = {
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
            h: n(e.header, s),
            a: r(e.analytics, o)
          };
        };
      }, function (e, t, n) {
        function a() {
          var e = "",
              t = this;
          this.set = function (t) {
            e = t;
          }, this.get = function () {
            return e;
          }, this.getImpObj = function () {
            return o.parse(s.decode(e));
          }, this.getItem = function (e) {
            var n = t.getImpObj();
            return n ? n[e] || "" : "";
          }, this.load = function () {
            e = r().get(i.IMPRINT);
          }, this.save = function () {
            e && r().set(i.IMPRINT, e);
          };
        }

        var r = n(13),
            o = n(14),
            s = n(25),
            i = n(3),
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
            s = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
            i = function (e) {
          return e.replace(s, o);
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
            p = function (e) {
          return c(i(e));
        },
            l = function (e, t) {
          return t ? p(String(e)).replace(/[+\/]/g, function (e) {
            return "+" == e ? "-" : "_";
          }).replace(/\=/g, "") : p(String(e));
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
            h = function (e) {
          var t = e.length,
              n = t % 4,
              o = (t > 0 ? a[e.charAt(0)] << 18 : 0) | (t > 1 ? a[e.charAt(1)] << 12 : 0) | (t > 2 ? a[e.charAt(2)] << 6 : 0) | (t > 3 ? a[e.charAt(3)] : 0),
              s = [r(o >>> 16), r(o >>> 8 & 255), r(255 & o)];
          return s.length -= [0, 0, 2, 1][n], s.join("");
        },
            _ = function (e) {
          return e.replace(/[\s\S]{1,4}/g, h);
        },
            v = function (e) {
          return d(_(e));
        },
            m = function (e) {
          return v(String(e).replace(/[-_]/g, function (e) {
            return "-" == e ? "+" : "/";
          }).replace(/[^A-Za-z0-9\+\/]/g, ""));
        };

        t.encode = l, t.decode = m;
      }, function (e, t, n) {
        var a = n(11);

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
            a().v("---queue: ", n.toString());
          };
        };
      }, function (e, t, n) {
        t.assign = n(28), t.makeCacheNum = function () {
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
        function a(e, t) {
          if (!e) return "";
          var n = [];

          for (var a in t) n.push(a + "=" + t[a]);

          var r = n.join("&");
          return r ? e + "?" + r : e;
        }

        var r = n(2),
            o = "",
            s = {};
        t.getCurrentPagePath = function () {
          return o;
        }, t.setCurrentPath = function (e) {
          e && (o = e);
        }, t.getPageQuery = function (e) {
          if (e) return s[e];
        }, t.setPageQuery = function (e, t) {
          e && (s[e] = t);
        }, t.getFullPath = function (e) {
          return a(o, s[e]);
        }, t.getPageName = function (e) {
          var t = r.getGlobalValue("aplus"),
              n = t.getMetaInfo("pageConfig"),
              a = e || o;

          try {
            if (n && "object" == typeof n) for (var s in n) {
              if (s === a) break;

              if (n[s] && n[s].regRule) {
                a = n[s].regRule.test(e) ? s : a;
                break;
              }
            }
          } catch (e) {}

          return n[a];
        }, t.getPageCode = function (e) {
          return (this.getPageName(e) || {}).pageName;
        }, t.getVTRealtimeCode = function () {
          if (o) {
            var e = s[o] || {},
                t = /^\$vt_/,
                n = decodeURIComponent(e.scene);
            return n && t.test(n) && n.replace(t, "");
          }
        };
      }, function (e, t, n) {
        function a(e) {
          var t = {};

          try {
            P(e, function (e, n) {
              0 === e.indexOf("utm_") && (t[e] = n);
            });
          } catch (e) {}

          return t;
        }

        function r(e, t) {
          var n = y.getContext(),
              a = E.getCurrentPage(),
              r = a.route || a.is || "",
              o = a.options || {},
              s = I.obj2param(o, !0);
          s && (r = r + "?" + s), e.query || (e.query = {}), e.query.$$_share_uid = n.aplus.getMetaInfo("_anony_id") || n.aplus.__ETAG__CNA__ID__, e.query.$$_utm_medium = 3, e.query = A.assign({}, o, e.query);
          var i = e.path || r,
              u = "$$_share_uid=" + e.query.$$_share_uid + "&$$_utm_medium=3";
          return i.indexOf("?") > -1 ? e.path = i + "&" + u : e.path = i + "?" + u, e.status = "ready", n.aplus_queue.push({
            action: b.PUBLISH,
            arguments: [t, e]
          }), e;
        }

        function o() {
          var e = y.getContext(),
              t = {
            status: "ready"
          };
          e.aplus_queue.push({
            action: b.PUBLISH,
            arguments: ["onPullDownRefresh", t]
          });
        }

        function s() {
          var e = y.getContext(),
              t = this,
              n = {
            status: "ready",
            context: t
          };
          e.aplus_queue.push({
            action: b.PUBLISH,
            arguments: ["onReachBottom", n]
          });
        }

        function i(e) {
          var t = y.getContext();

          try {
            T.setCurrentPath(this.route), e && T.setPageQuery(this.route, e), C().i("Page onLoad: ", this.route, e);
            var n = this;
            S.onAplusReady(t.aplus_queue, b.SUBSCRIBE, function () {
              t.aplus.appendMetaInfo(b.GLOBAL_PROPERTY, a(e)), t.aplus_queue.push({
                action: b.PUBLISH,
                arguments: ["onLoad", {
                  status: "ready",
                  context: n
                }]
              });
            });
          } catch (e) {
            C().w("onPageLoad: ", e);
          }
        }

        function u() {
          var e = y.getContext();

          try {
            T.setCurrentPath(this.route), S.onAplusReady(e.aplus_queue, b.SUBSCRIBE, function () {
              var t = this;
              e.aplus_queue.push({
                action: b.PUBLISH,
                arguments: ["onShow", {
                  status: "ready",
                  context: t
                }]
              });
            });
          } catch (e) {
            C().w("onPageShow: ", e);
          }
        }

        function c() {
          var e = y.getContext();

          try {
            var t = this;
            e.aplus_queue.push({
              action: b.PUBLISH,
              arguments: ["onReady", {
                status: "ready",
                context: t
              }]
            });
          } catch (e) {
            C().w("onPageReady: ", e);
          }
        }

        function p() {
          var e = y.getContext();

          try {
            e.aplus_queue.push({
              action: b.PUBLISH,
              arguments: ["onHide", {
                status: "ready"
              }]
            });
          } catch (e) {
            C().w("onPageHide: ", e);
          }
        }

        function l() {
          var e = y.getContext();

          try {
            e.aplus_queue.push({
              action: b.PUBLISH,
              arguments: ["onHide", {
                status: "ready"
              }]
            });
          } catch (e) {
            C().w("onPageUnload: ", e);
          }
        }

        function f(e) {
          var t = y.getContext();
          t.aplus_queue.push({
            action: b.PUBLISH,
            arguments: ["onAplusClk", {
              status: "ready",
              event: e,
              context: this
            }]
          });
        }

        function g(e) {
          var t = y.getContext(),
              n = this;
          t.aplus_queue.push({
            action: b.PUBLISH,
            arguments: ["onAplusTouch", {
              status: "ready",
              context: n,
              event: e
            }]
          });
        }

        function d(e) {
          if (e.onShareAppMessage) {
            var t = e.onShareAppMessage;

            e.onShareAppMessage = function (e) {
              var n = t.call(this, e) || {};
              return r(n, "onShareAppMessage");
            };
          }
        }

        function h(e) {
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
            var e = Page;

            Page = function (t) {
              S.rewriteFn(t, "onShow", u), S.rewriteFn(t, "onHide", p), S.rewriteFn(t, "onUnload", l), S.rewriteFn(t, "onLoad", i), S.rewriteFn(t, "onReady", c), S.rewriteFn(t, "onPullDownRefresh", o), S.rewriteFn(t, "onReachBottom", s), S.rewriteFn(t, "onAplusClk", f), S.rewriteFn(t, "onAplusTouch", g), d(t), h(t), e(t);
            };
          } catch (e) {
            C().w("Page 重写异常");
          }
        }

        function v() {
          try {
            var e = Component;

            Component = function (t) {
              try {
                t.methods = t.methods || {};
                var n = t.methods;
                S.rewriteFn(n, "onShow", u), S.rewriteFn(n, "onHide", p), S.rewriteFn(n, "onUnload", p), S.rewriteFn(n, "onLoad", i), d(n), e(t);
              } catch (n) {
                e(t);
              }
            };
          } catch (e) {
            C().w("Component 重写异常");
          }
        }

        function m(e, t, n) {
          ["object", "function"].indexOf(typeof e) > -1 ? n() : C().w("typeof " + t + " is not object cant watchExp.");
        }

        var y = n(2),
            b = n(3),
            S = n(6),
            P = n(31),
            A = n(15),
            I = n(32),
            C = n(11),
            T = n(29),
            E = n(8);

        e.exports = function () {
          return {
            run: function () {
              m(Page, "Page", _), m(Component, "Component", v);
            }
          };
        };
      }, function (e, t) {
        e.exports = function (e, t) {
          if (Object && Object.keys) for (var n = Object.keys(e), a = n.length, r = 0; r < a; r++) {
            var o = n[r];
            t(o, e[o]);
          } else for (var s in e) t(s, e[s]);
        };
      }, function (e, t) {
        function n(e, t) {
          var n,
              r,
              o,
              s = [],
              i = e.length;

          for (o = 0; o < i; o++) {
            n = e[o][0], r = e[o][1];
            var u = 0 === n.indexOf(a),
                c = u || t ? r : encodeURIComponent(r);
            s.push(u ? c : n + "=" + c);
          }

          return s.join("&");
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
          e || (e = "");

          for (var t = {}, n = e.split("&"), a = 0; a < n.length; a++) {
            var r = n[a],
                o = r.indexOf("="),
                s = r.split("="),
                i = r.length;
            if (2 === s.length) t[s[0]] = s[1] || "";else if (o > 0) {
              var u = r.slice(0, o),
                  c = r.slice(o + 1, i) || "";
              t[u] = c;
            } else t[s[0]] = "";
          }

          return t;
        };
        var a = "::-plain-::";
        t.s_plain_obj = a, t.arr2param = n, t.obj2param = function (e, t) {
          var n,
              r,
              o,
              s = [];

          for (n in e) n && e.hasOwnProperty(n) && (r = "" + e[n], o = n + "=" + r, t ? s.push(o) : s.push(0 === n.indexOf(a) ? r : o));

          return s.join("&");
        }, t.encodeGokeyValue = function (e) {
          return e;
        };
      }, function (e, t, n) {
        var a = n(2),
            r = n(3),
            o = n(16);

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
        var a = n(8),
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
                  var s = t.getAppIdSync() || {};
                  e.appId = s.appId || "";
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
                    s = Object.assign({}, e, o),
                    i = r.getGlobalValue("aplus");

                i._aplus_client = s, t();
              }), 2e3;
            }
          };
        };
      }, function (e, t, n) {
        var a = n(36),
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
        var a = n(9),
            r = n(37),
            o = function (e) {
          for (var t = e.length, n = new Array(t - 1), a = 1; a < t; a++) n[a - 1] = e[a];

          return n;
        },
            s = r.extend({
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
              var s = r[o]();
              t.apply(n, s);
            }
            var i = n.handlers || [];
            return e in i || (i[e] = []), i[e].push(t), n.setHandlers(i), n;
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
            if (r > 0) for (var s = 0; s < r; s++) {
              var i = n[e][s];
              a(i) && i.apply(this, t);
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

        e.exports = s;
      }, function (e, t, n) {
        function a() {}

        var r = n(9);
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
        e.exports = function () {
          return {
            run: function () {
              n(39)(this.options.context.aplus_config);
            }
          };
        };
      }, function (e, t, n) {
        var a = n(2),
            r = n(3),
            o = n(40);

        e.exports = function (e) {
          var t = a.getGlobalValue(r.APLUS),
              n = t._$ = t._$ || {};
          n.is_terminal = !0, n.send_pv_count = 0, n.spm = {
            data: {}
          }, n.meta_info = o.qGet() || {}, t.globalConfig = e.globalConfig;

          for (var s in e.metaInfo) o.setMetaInfo(s, e.metaInfo[s]);

          t._$ = n, t.isInternational = function () {
            return !1;
          };
        };
      }, function (e, t, n) {
        function a() {
          return s = p || {}, p;
        }

        function r() {
          return s || a();
        }

        function o(e, t) {
          return s || (s = {}), s[e] = t, !0;
        }

        var s,
            i = n(41),
            u = n(32),
            c = n(2),
            p = {},
            l = "object",
            f = "string";
        t.getInfo = a, t.qGet = r, t.setMetaInfo = o;

        var g = function (e) {
          return s || (s = {}), s[e] || "";
        };

        t.getMetaInfo = g;

        var d = function (e, t) {
          if (e && t) {
            var n,
                a = function (n) {
              try {
                var a = typeof t === f ? JSON.parse(t) : t;
                s(e, Object.assign({}, n, a));
              } catch (e) {}
            },
                r = function (n) {
              try {
                var a = typeof t === f ? JSON.parse(t) : t;
                s(e, n.concat(a));
              } catch (e) {}
            },
                o = function (e) {
              e.constructor === Array ? r(e) : a(e);
            },
                s = function (e, t) {
              h(e, t, {
                from: "appendMetaInfo"
              });
            },
                i = g(e);

            if ("aplus-exinfo" === e && (s(e, Object.assign({}, i, u.param2obj(t))), n = !0), "aplus-page-properties" === e) {
              var c = t;
              if (i) for (var p in i) t[p] ? c[p] = Object.assign({}, i[p], t[p]) : c[p] = i[p];
              s(e, c), n = !0;
            }

            if (i) if (typeof i === l) o(i), n = !0;else try {
              var d = JSON.parse(i);
              typeof d === l && (o(d), n = !0);
            } catch (e) {}
            n || s(e, t);
          }
        };

        t.appendMetaInfo = d;

        var h = function (e, t) {
          var n,
              a,
              s = "OVERWRITE",
              u = s;
          if ("object" == typeof e ? (n = e.metaName, a = e.metaValue, u = e.mode || s) : (n = e, a = t), u !== s) return d(n, a);

          if (o(n, a)) {
            var p = c.getGoldlogVal("_$") || {};
            p.meta_info = r();
            var l = c.setGoldlogVal("_$", p),
                f = ["setMetaInfo", n, a, {}];
            return i.doPubMsg(f), i.doCachePubs(f), l;
          }
        };

        t._setMetaInfo = h;
      }, function (e, t, n) {
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
        e.exports = function () {
          return {
            run: function () {
              n(43)();
            }
          };
        };
      }, function (e, t, n) {
        var a = n(44),
            r = n(2),
            o = n(3),
            s = n(18),
            i = n(7),
            u = n(27),
            c = n(29);

        e.exports = function () {
          var e = r.getContext(),
              t = r.getGlobalValue("aplus"),
              n = [],
              p = function (e) {
            n = t.getMetaInfo("aplus-auto-clk");
            var r = c.getPageCode();
            s(n) && n.forEach(function (t) {
              u.isStartWith(t.cssSelector, ".") || (t.cssSelector = "." + t.cssSelector), t.spmB || (t.spmB = r);
              var n = e.context.createSelectorQuery().selectAll(t.cssSelector);
              "function" == typeof n.fields ? n.fields({
                id: !0,
                dataset: !0,
                rect: !0,
                scrollOffset: !0
              }, function (n) {
                a.watch_click(e.event || e.res, i(n), t);
              }).exec() : n.boundingClientRect().exec(function (n) {
                n && n.length > 0 && n[0] && a.watch_click(e.event, i(n[0]), t);
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
              "ready" === e.status && p(e);
            }]
          });
        };
      }, function (e, t, n) {
        function a(e, t) {
          var n = o.getGoldlogVal("_aplus_auto_exp") || {},
              a = n.hashMap || {};

          for (var s in a) for (var u = a[s] || [], c = 0; c < u.length; c++) {
            var p = u[c] || {},
                l = p.expConfig || {};

            if (e.cssSelector === l.cssSelector) {
              var f = i({
                index: t
              }, l);
              if (f === p.hash_value) return r(p.dataset);
            }
          }
        }

        var r = n(7),
            o = n(2),
            s = n(45),
            i = n(46),
            u = n(10);

        t.watch_click = function (e, t, n) {
          function r(e, t) {
            var n = {};
            e && (e.changedTouches ? n = e.changedTouches[0] : e.detail && (n = e.detail));
            var a = n.clientX || 0,
                r = n.clientY || 0,
                o = t.top,
                s = t.bottom;
            return t.scrollTop && (o += t.scrollTop, s += t.scrollTop), t.left < a && a < t.right && o < r && r < s;
          }

          for (var i = o.getGlobalValue("aplus"), c = 0; c < t.length; c++) {
            var p = t[c];

            if (r(e, p)) {
              var l = c + 1,
                  f = p.dataset || a(n, l) || {},
                  g = {},
                  d = u.jsonLikeStr2JSON(f.trackerParams) || {};

              if (i.globalConfig.isAli) {
                var h = f.tracker || n.cssSelector.replace(/\'|\"|\;|\:|\=|\[|\]|\.|\#|\-|\/|\|/g, "");

                if (g = i._$.spm.data || {}, g.c = h, g.c && "0" !== g.c) {
                  var _ = "d" + l;

                  g.d = _;
                }
              } else g.b = n.spmB, n.spmC ? g.c = n.spmC : g.c = d.spmC ? encodeURIComponent(d.spmC) : "", n.spmD ? g.d = l ? n.spmD + "_" + l : n.spmD : g.d = d.spmD ? encodeURIComponent(d.spmD) : "";

              s.pushEvent("CLK", f, n, p, g);
            }
          }
        };
      }, function (e, t, n) {
        function a(e, t, n) {
          var a = o.getGlobalValue("aplus") || {},
              r = a.getMetaInfo;

          if ("function" == typeof r) {
            var u = r(e),
                c = {};
            return "function" == typeof u && (c = u(t ? i(t) : {}, n)), s.param2obj(c);
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
            s = n(32),
            i = n(7),
            u = n(18),
            c = n(37),
            p = {},
            l = 3,
            f = "POST",
            g = "EXP",
            d = c.extend({
          push: function (e) {
            var t = o.getGlobalValue("aplus");

            for (this.buffer.push(e); this.buffer.length >= this.pkgSize;) {
              var n = this.buffer.splice(0, this.pkgSize);
              n.length > 0 && t.combineRecord(this.logkey, g, n, this.method);
            }
          }
        });
        t.pushEvent = function (e, t, n, s, i) {
          var c = o.getGlobalValue("aplus"),
              l = n.props || [],
              d = {},
              h = {};
          if (t) for (var _ in t) h[_.toLowerCase().replace(/^data-/, "").replace(/-/g, "")] = t[_];
          if (l && u(l)) for (var v = 0; v < l.length; v++) {
            var m = l[v].toLowerCase().replace(/^data-/, "").replace(/-/g, "");
            d[l[v]] = h[m];
          } else d = Object.assign({}, h);
          s && e === g && (d = Object.assign({}, d, {
            _w: r(s.width, 2),
            _h: r(s.height, 2),
            _x: r(s.x, 2),
            _y: r(s.y, 2),
            _rate: r(s.viewabilityRate || s.intersectionRatio, 2),
            _viewability: "intersection"
          })), n._vt && (d._vt = n._vt);
          var y = e === g ? "aplus-auto-exp-userfn" : "aplus-auto-clk-userfn",
              b = a(y, s, n.cssSelector);
          b.spm || (c.globalConfig.isAli && i && i.a && i.b ? b.spm = [i.a, i.b, i.c || "0", i.d || "0"].join(".") : b.spm = i && i.b ? i : void 0);
          var S = {},
              P = t.trackerParams || t["tracker-params"];
          if (P) try {
            var A = JSON.parse(P);
            d = Object.assign(d, A), delete d.trackerParams, delete d.trackerparams;
          } catch (e) {}
          "EXP" === e && c.globalConfig.isAli && p[n.logkey] ? (S = Object.assign({}, {
            exargs: d
          }, b), p[n.logkey].push(S)) : (S = Object.assign({}, d, b, n.customArgs), c.record(n.logkey, e, S, f));
        }, t.watchRecord = function (e) {
          var t = o.getGlobalValue("aplus");
          t.globalConfig.isAli && e && e.forEach(function (e) {
            p.hasOwnProperty(e.logkey) || (p[e.logkey] = d.create({
              length: 0,
              buffer: [],
              logkey: e.logkey,
              pkgSize: "number" == typeof e.pkgSize && e.pkgSize || l,
              method: e.method || f
            }));
          });
        }, t.clearRecord = function () {
          var e = o.getGlobalValue("aplus");
          if (e.globalConfig.isAli) for (var t in p) {
            var n = p[t].buffer;
            n.length > 0 && (e.combineRecord(t, g, n, f), p[t].buffer = []);
          }
        };
      }, function (e, t) {
        e.exports = function (e, t) {
          var n = [t.logkey, t.cssSelector, t.positionSelector];
          return e.id && n.push(e.id), e.dataset && n.push(JSON.stringify(e.dataset)), n = n.join("_");
        };
      }, function (e, t, n) {
        e.exports = function () {
          return {
            run: function () {
              n(48)();
            }
          };
        };
      }, function (e, t, n) {
        var a = n(2),
            r = n(49),
            o = n(50),
            s = n(3),
            i = n(8),
            u = {};

        e.exports = function () {
          function e(e, t, n) {
            var a = function (n, a) {
              if ("aplus-auto-exp" === n) {
                var s = o.getAutoExpConfig(a);
                if (JSON.stringify(s) === JSON.stringify(g)) return;
                g = s, a && g && g.length > 0 && r.watch_exposure(e, g, t);
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
              var n = i.getCurrentPage(),
                  a = n.route || n.is,
                  r = u[a],
                  o = JSON.stringify(e.data);
              r !== o && (u[a] = o, t(e.context, 0));
            } catch (e) {}
          }

          var c = a.getContext(),
              p = 0,
              l = 0,
              f = a.getGlobalValue("aplus");

          if (!f._aplus_auto_exp) {
            f._aplus_auto_exp = {
              hashMap: {}
            };
            var g = [];
            c.aplus_queue.push({
              action: s.SUBSCRIBE,
              arguments: ["onShow", function (n) {
                if ("ready" === n.status) {
                  e(n.context, 1, s.SUBSCRIBE), 0 === p ? (t(n.context, 1), p = 1) : t(n.context, 0);

                  try {
                    var a = i.getCurrentPage(),
                        r = a.route || a.is;
                    u[r] = r;
                  } catch (e) {}
                }
              }]
            }), c.aplus_queue.push({
              action: s.SUBSCRIBE,
              arguments: ["onAplusTouch", function (e) {
                "ready" === e.status && (0 === l ? (l = 1, t(e.context, 1)) : n(e));
              }]
            }), c.aplus_queue.push({
              action: s.SUBSCRIBE,
              arguments: ["onPageDataChanged", function (e) {
                setTimeout(function () {
                  n(e);
                }, 200);
              }]
            }), c.aplus_queue.push({
              action: s.SUBSCRIBE,
              arguments: ["onHide", function (t) {
                "ready" === t.status && (u = {}, p = 0, l = 0, e(t.context, 1, s.UNSUBSCRIBE), r.clear());
              }]
            }), c.aplus_queue.push({
              action: s.SUBSCRIBE,
              arguments: ["onUnload", function (e) {
                "ready" === e.status && (u = {}, r.clear());
              }]
            });
          }
        };
      }, function (e, t, n) {
        var a,
            r = n(2),
            o = n(50),
            s = n(7),
            i = n(45),
            u = n(46),
            c = [],
            p = n(8),
            l = n(27),
            f = n(10),
            g = n(51),
            d = n(29);
        t.watch_exposure = function (e, t, n, h) {
          function _(r) {
            function o(e) {
              var t = u[0];
              t && !l.isStartWith(u[0], ".") && (t = "." + t);

              try {
                var n = a.createSelectorQuery().selectAll(t);
                "function" == typeof n.fields ? n.fields({
                  dataset: !0,
                  id: !0
                }, function (t) {
                  if (t && g.isArray(t)) {
                    for (var n = 0; n < t.length; n++) t[n].index = "" + (n + 1);

                    e({
                      elements: t,
                      type: "COMMON"
                    });
                  }
                }).exec() : console.warn("该平台不支持自动曝光");
              } catch (e) {
                console.warn("该平台不支持自动曝光, err = ", e);
              }
            }

            if (r < t.length) {
              var i = t[r];
              A = 0, c.forEach(function (e) {
                e.subject[0] === i.cssSelector && e.subject[1] === i.positionSelector && (A = 1);
              });
              var u = [i.cssSelector, i.positionSelector];
              o(function (t) {
                for (var a = t.elements || [], o = 0; o < a.length; o++) {
                  var p = a[o];

                  if (0 === A || 0 === n) {
                    var l = y(e);
                    l.subject = u, c.push(l), p.index && !v(p, i) && (m(p, i), b(l, i, p.index, function (e, t, n) {
                      if (n) {
                        var a = s(e);
                        a.index = "" + n;
                        var r = s(a.dataset);
                        m({
                          id: a.id,
                          index: a.index,
                          dataset: r
                        }, t), S(a, r, i);
                      }
                    }));
                  }
                }

                _(++r);
              });
            }
          }

          function v(e, t) {
            var n = u(e, t),
                a = e.index;
            return C[t.logkey] && C[t.logkey].forEach(function (e) {
              if (e.hash_value === n && e.index === a) return !0;
            }), !1;
          }

          function m(e, t) {
            var n = u(e, t);

            try {
              var a = e.index;

              if (C[t.logkey]) {
                var r = 0;
                C[t.logkey].forEach(function (t) {
                  t.hash_value === n && (r = 1, e.id && (t.id = e.id), e.dataset && (t.dataset = e.dataset), e.status && (t.status = e.status));
                }), r || C[t.logkey].push({
                  id: e.id,
                  hash_value: n,
                  status: 0,
                  expConfig: t,
                  dataset: e.dataset,
                  index: a
                });
              } else C[t.logkey] = [{
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

          function y(e) {
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

          function b(e, t, n, a) {
            var r = t.cssSelector;
            r && !l.isStartWith(r, ".") && (r = "." + r), t.positionSelector ? e.relativeTo(t.positionSelector).observe(r, function (e) {
              try {
                a(e, t, n);
              } catch (e) {
                console.log("errorMessage: ", e);
              }
            }) : e.relativeToViewport().observe(r, function (e) {
              try {
                a(e, t, n);
              } catch (e) {
                console.log("errorMessage: ", e);
              }
            });
          }

          function S(e, t, n) {
            var a = r.getGlobalValue("aplus"),
                o = new Date().getTime(),
                u = P(o, e, n);

            if (u && u.length > 0) {
              var c = u[0],
                  p = t.tracker || n.cssSelector.replace(/\'|\"|\;|\:|\=|\[|\]|\.|\#|\-|\/|\|/g, ""),
                  l = {},
                  g = f.jsonLikeStr2JSON(t.trackerParams || {}) || {},
                  h = c.index;

              if (a.globalConfig.isAli) {
                if (l = s(a._$.spm.data || {}), l.c = p, l.c && "0" !== l.c) {
                  var _ = "d" + h;

                  l.d = _;
                }
              } else d.getPageCode() && (l.b = d.getPageCode()), n.spmC ? l.c = n.spmC : l.c = g.spmC ? encodeURIComponent(g.spmC) : "", n.spmD ? l.d = h ? n.spmD + "_" + h : n.spmD : l.d = g.spmD ? encodeURIComponent(g.spmD) : "";

              i.pushEvent("EXP", t, n, Object.assign({}, e, {
                x: c.x,
                y: c.y,
                width: c.width,
                height: c.height,
                hash_value: c.hash_value
              }), l);
            }
          }

          function P(e, t, n) {
            var a = r.getGoldlogVal("_aplus_auto_exp") || {},
                s = a.hashMap || {},
                i = [];

            for (var c in s) for (var p = s[c] || [], l = 0; l < p.length; l++) {
              var f = u(t, n),
                  g = p[l] || {};

              if (0 === g.status && g.expConfig && f === g.hash_value) {
                var d = t.boundingClientRect || {};
                d.width && d.height && (g.dataset = t.dataset, g.x = d.left, g.y = d.top, g.width = d.width, g.height = d.height, g.size = d.width * d.height, t.intersectionRatio >= o.AUTO_AT_VIEW_RATE && (g.exposureTime = e, g.status = 1, i.push(g)));
              }
            }

            return i;
          }

          a && !h || (a = p.getContext());
          var A,
              I = r.getGoldlogVal("_aplus_auto_exp") || {},
              C = I.hashMap || {};
          i.watchRecord(t), _(0);
        }, t.reset = function () {}, t.clear = function () {
          i.clearRecord();

          for (var e = 0; e < c.length; e++) c[e].disconnect();

          c = [];
          var t = r.getGoldlogVal("_aplus_auto_exp") || {},
              n = t.hashMap || {};

          for (var a in n) delete n[a];
        };
      }, function (e, t, n) {
        function a(e) {
          return aplus && aplus.getMetaInfo ? aplus.getMetaInfo(e) : o.getMetaCnt(e);
        }

        var r = n(51),
            o = n(52),
            s = n(11);
        t.DATA_APLUS_AE_KEY = "data-aplus-ae", t.DATA_APLUS_AC_KEY = "data-aplus-clk", t.DATA_APLUS_SPM_ANCHOR_ID_KEY = "data-spm-anchor-id", t.DATA_APLUS_VT_ITEM_INDEX_KEY = "data-aplus-vt-pos", t.LOOP_TIME = 1e3, t.getDefaultRequestCfg = function () {
          return {
            method: "POST",
            pkgSize: 10
          };
        };

        var i = function (e) {
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

        t.AUTO_AT_VIEW_RATE = i(.3);

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
              i = [];

          try {
            n = t || a(e);
            var u = [];
            if (n && "string" == typeof n) try {
              u = JSON.parse(n);
            } catch (e) {
              u = JSON.parse(n.replace(/'/g, '"'));
            } else "object" == typeof n && n.constructor === Array && (u = n);
            if (u && u.constructor === Array) for (var c = 0; c < u.length; c++) {
              var p = u[c] || {},
                  l = p.logkey || "",
                  f = p.tag ? p.tag : "",
                  g = p.filter,
                  d = p.cssSelector,
                  h = d || f && g;
              if (!l || !h) throw new Error("meta " + e + " config error, " + JSON.stringify(p));
              g = "string" == typeof g ? g.split("=") : [];
              var _ = f;
              if (g.length >= 2 ? _ += "[" + g.shift() + '="' + decodeURIComponent(g.join("")) + '"]' : 1 == g.length && g[0] && (_ += "[" + decodeURIComponent(g[0]) + "]"), d && (_ += d), p.elementSelector = _, r.indexof(i, _) > -1) throw new Error("meta " + e + " config error, tag_filter_cssSelector " + _ + " repeated");
              i.push(_), o.push(p);
            }
          } catch (e) {
            s().w(e);
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
      }, function (e, t) {
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
        }, t.isArray = function (e) {
          return Array.isArray ? Array.isArray(e) : /Array/.test(Object.prototype.toString.call(e));
        };
      }, function (e, t, n) {
        function a(e) {
          return s = s || document.getElementsByTagName("head")[0], i && !e ? i : s ? i = s.getElementsByTagName("meta") : [];
        }

        function r(e, t) {
          var n,
              r,
              o,
              s = a(),
              i = s.length;

          for (n = 0; n < i; n++) r = s[n], u.tryToGetAttribute(r, "name") === e && (o = u.tryToGetAttribute(r, t || "content"));

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

        var s,
            i,
            u = n(53);
        t.getMetaTags = a, t.getMetaCnt = r, t.getOnePageInfo = o;
      }, function (e, t) {
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
        e.exports = function () {
          return {
            run: function () {
              var e = n(55),
                  t = e.create();
              t.run(this.options);
            }
          };
        };
      }, function (e, t, n) {
        function a(e, t) {
          if (u().v("event: ", e, t), i.checkEvent(e, t)) {
            var a = n(58)(e, t);
            o().addEvent(a), s().send(i.DataType.EKV, {
              noCache: !1
            }, function () {
              u().i("event send success: ", e, a);
            });
          }
        }

        var r = n(56),
            o = n(17),
            s = n(19),
            i = n(15),
            u = n(11),
            c = n(7),
            p = n(27),
            l = n(2),
            f = n(8),
            g = n(3),
            d = n(29);
        e.exports = r.extend({
          handlerMiddleware: function (e) {
            var t = l.getGlobalValue("aplus");
            u().setDebug(!!t.getMetaInfo("DEBUG"));

            var n,
                r,
                o,
                s = e && e.userdata && e.userdata.logkey,
                h = e && e.userdata && e.userdata.gmkey,
                _ = e && e.what_to_send && e.what_to_send.logdata && e.what_to_send.logdata || {},
                v = t.getMetaInfo("globalproperty");

            if ("CLK" === h || "EXP" === h || "OTHER" === h || s === g.APP_START || s === g.APP_END) {
              n = c(e && e.userdata && e.userdata.gokey || {}), r = _.gokey || {};
              var m,
                  y = {};
              "$$_share" === s && (y.refer_page = _.url, y.share_type = n.share_type), r.scene && (y.scene = f.getPlatformType() + "_" + r.scene), r.targetAppKey && (y.targetAppKey = n.targetAppKey, delete n.targetAppKey), o = n["data-pagename"] || n.page_name || n.spm && n.spm.b || t.getPageName() || _.url || "", y.page_name = o, y.url = _.url || "-", (n.page_name || n["data-pagename"]) && (delete n.page_name, delete n["data-pagename"]), p.isEmptyObject(v) || (y.gp = v), n.spm && (y["spm-cnt"] = [encodeURIComponent(o), n.spm.c, n.spm.d].filter(function (e) {
                return !!e;
              }).join("."), delete n.spm);
              var b = c(n);

              for (var S in b) "string" == typeof S && i.startsWith(S, "_") && (y[S] = b[S], delete n[S]);

              m = s === g.APP_START || s === g.APP_END ? p.assign(y, n) : p.assign(y, {
                cusp: n
              }), a(s, m);
            } else if ("2001" === _.event_code) {
              var P = {},
                  A = g.PAGE_START;
              r = c(_.gokey || {}), o = r.page_name || t.getPageName() || d.getPageCode(_.url) || _.url || "", P.r = _.arg1 || _.logkey || "-", P.page_name = o, r._page_auto_pv ? (P.is_auto = 1, P.url = r.path || "-", P.ref_url = r.referrer, delete r._page_auto_pv, delete r.referrer, delete r.path, delete r.page_name) : (P.is_auto = 0, P.url = _.url || "-", P.ref_url = _.pre), r.duration && (P.duration = r.duration, delete r.duration), p.isEmptyObject(v) || (P.gp = v), r.scene && (P.scene = f.getPlatformType() + "_" + r.scene), r = i.deleteInfo(r, ["_anony_id", "_dev_id", "_session_id", "_user_id", "_user_nick", "uaid", "pvid", "scene"]), P["spm-cnt"] = encodeURIComponent(o), r._page_auto_id && (A = r._page_auto_id, delete r._page_auto_id), r.page_start && (P.page_start = r.page_start, delete r.page_start), a(A, p.assign(P, {
                cusp: r
              }));
            }
          },
          run: function () {
            this.watchLOG();
          }
        });
      }, function (e, t, n) {
        var a = n(37),
            r = n(57),
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
        var a = n(2);

        t.pushIntoGoldlogQueue = function (e, t) {
          var n = a.getGlobalValue("aplus_queue"),
              r = a.getGlobalValue("aplus"),
              o = e.split("."),
              s = r[o[1]],
              i = s ? s[o[2]] : null;
          r && 2 === o.length && s ? s.apply(r, t) : 3 === o.length && i ? i.apply(s, t) : n.push({
            action: e,
            arguments: t
          });
        };
      }, function (e, t, n) {
        var a = n(2),
            r = n(27);

        e.exports = function (e, t) {
          if ("string" != typeof e) return null;
          var n = Object.create(null);
          n.id = e, t && t.ts || (n.ts = Date.now());
          var o = typeof t;
          if ("object" === o) for (var s in t) ({}).hasOwnProperty.call(t, s) && (n[s] = t[s]);
          var i = a.getGlobalValue("aplus"),
              u = i.getMetaInfo("globalproperty");
          return r.isEmptyObject(u) || (n.gp = u), n;
        };
      }, function (e, t, n) {
        var a = n(16);

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
        var a = n(2),
            r = n(8),
            o = n(3),
            s = n(61),
            i = n(11),
            u = "EMPTY_CNA";

        e.exports = function () {
          return {
            _syncEtag: function (e) {
              var t,
                  n = a.getGlobalValue(o.APLUS),
                  c = this,
                  p = function (t) {
                var r = t && t.data ? t.data.cna : "";
                r ? (a.setGoldlogVal(g, r), e(r)) : "Y" === n.fetchEtagStatus ? n.aplus_pubsub.subscribe("etag", function (t) {
                  e(t);
                }) : d();
              },
                  l = n.getMetaInfo(o.APLUS_PV_DOMAIN);

              l && (t = s.getUrl({
                egUrl: (l.indexOf("//") === -1 ? "//" + l : l) + "/eg.js"
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
                        s = o.split(";");

                    if (s.length > 1) {
                      var c = s[1],
                          p = c.split("=");
                      r = p[1] || "", r = r.replace(/\"/g, ""), a.setGoldlogVal(g, r), f.setStorage({
                        key: g,
                        data: {
                          cna: r
                        }
                      }), n.aplus_pubsub.publish("etag", r), n.aplus_pubsub.cachePubs("etag", r);
                    }
                  } catch (e) {
                    i().w(e);
                  }

                  r || (r = u), e(r);
                }, function (e) {
                  i().w(e);
                }));
              },
                  h = a.getGoldlogVal(g);

              h ? e(h) : f.getStorage({
                key: g,
                success: function (e) {
                  p(e);
                },
                fail: function (e) {
                  p(e);
                }
              });
            },
            run: function (e, t) {
              var n = this,
                  r = a.getGlobalValue("aplus"),
                  o = r.getMetaInfo("aplus-etag-timeout"),
                  s = 200,
                  i = s;

              try {
                i = parseInt(o), isNaN(i) && (i = s);
              } catch (e) {}

              if (this._syncEtag(function (e) {
                n.options.context.etag && (n.options.context.etag.cna = e), i >= 200 && t(e);
              }), !(i < 200)) return i;
            }
          };
        };
      }, function (e, t, n) {
        var a = n(62);

        t.getUrl = function (e) {
          var t = a.getUrl(e && e.egUrl);

          if (0 !== t.indexOf("http")) {
            var n = "https:";
            /(\d+\.){3,}\d+/.test(t) && (n = "http:"), t = n + t;
          }

          return t;
        };
      }, function (e, t, n) {
        var a = n(63),
            r = n(64),
            o = n(2);
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
                s = e.split(";"),
                i = s.length;

            for (r = 0; r < i; r++) {
              o = s[r].split("=");
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
            if (r.set && r.test()) {
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
          getUrl: function (e) {
            var t = o.getGlobalValue("aplus"),
                a = n(3),
                r = e || "//log.mmstat.com/eg.js";

            try {
              var s = t.getMetaInfo(a.APLUS_PV_DOMAIN),
                  i = /[[a-z|\-|\_|0-9\.]+[a-z|\-|\_|0-9](:\d*)?/,
                  u = s.match(i);
              u && u[0] && (r = "//" + u[0] + "/eg.js");
            } catch (e) {}

            return r;
          }
        };
      }, function (e, t) {
        function n(e) {
          return "string" == typeof e ? e.replace(/^\s+|\s+$/g, "") : "";
        }

        t.trim = n;
      }, function (e, t) {
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
        var a = n(2),
            r = n(11),
            o = n(8),
            s = n(3),
            i = n(10);

        e.exports = function () {
          return {
            getMetaInfo: function (e) {
              var t = a.getGoldlogVal("_$") || {};
              return (t.meta_info || {})[e];
            },
            getHostUrl: function () {
              var e = this.getMetaInfo(s.APLUS_PV_DOMAIN);
              if (!i.checkDomain(e)) return "";
              var t = o.getLogDomain();
              if (!t) return r().tip_w("当前小程序框架未支持，请联系QT交付同学寻求帮助！！"), "";
              var n = ["//", e, t];
              return n.join("");
            },
            run: function () {
              this.options.context.where_to_send.method = "POST";
              var e = this.getHostUrl();
              if (!e) return "done";
              if (0 !== e.indexOf("//")) return r().w("上报域名无效: " + e), "done";
              var t = s.HTTPS;
              /(\d+\.){3,}\d+/.test(e) && (t = "http:"), e = t + e, this.options.context.where_to_send.url = e;
            }
          };
        };
      }, function (e, t, n) {
        var a = n(2),
            r = n(3),
            o = n(11),
            s = n(8),
            i = n(68),
            u = n(70),
            c = n(10),
            p = r.SPM_CNT,
            l = r.SPM_URL,
            f = r.SPM_PRE;

        e.exports = function () {
          return {
            getCommonParams: function () {
              var e = a.getGlobalValue(r.APLUS),
                  t = this.options.context || {},
                  n = t.etag || {},
                  g = t.userdata || {},
                  d = a.getGoldlogVal("_$") || {},
                  h = d.spm || {},
                  _ = this.options.config || {},
                  v = e.getMetaInfo("platformType") || s.getPlatformType(),
                  m = {
                _dev_id: e.getMetaInfo("_dev_id"),
                _anony_id: e.getMetaInfo(r._ANONY_ID),
                _user_id: e.getMetaInfo(r._USER_ID),
                _user_nick: e.getMetaInfo("_user_nick"),
                _session_id: e.getMetaInfo("_session_id"),
                uaid: e.getMetaInfo("uaid") + "" == "1" ? 1 : 0
              },
                  y = e._aplus_client || {},
                  b = e.globalConfig || {},
                  S = "-";

              try {
                var P = getCurrentPages()[0];
                S = P.route || P.is;
              } catch (e) {}

              var A = new Date().getTime() + S,
                  I = y.model + y.networkType + _.title + n.cna,
                  C = (b.isDecodeUrl ? "DC_" : "") + i.getLogId(A, I),
                  T = c.getAppKey();
              T || o().w("please set appKey in aplus metaInfo before sendPV!");
              var E = Object.assign({}, {
                appKey: T,
                cache: C,
                cna: n.cna,
                etag: n,
                pre: d.page_referrer || "-",
                sdk_info: {
                  jsver: b.script_name,
                  lver: b.lver,
                  customSdkId: e.getMetaInfo("customSdkId") || "",
                  platformType: v.toLowerCase()
                },
                title: _.title || "",
                url: S || "-",
                client: y,
                timeZone: u.getTimeZone(),
                gmkey: g.gmkey || "",
                method: this.options.context.where_to_send.method
              }, m),
                  x = m;
              return h.spm_url && (x[l] = h.spm_url || ""), h.spm_pre && (x[f] = h.spm_pre || ""), h.spm_cnt && (x[p] = h.spm_cnt || ""), x[r.PVID] = e.pvid || "", E.sessionArgs = e.getMetaInfo("aplus-session-args"), E.globalArgs = e.getMetaInfo("aplus-global-args"), E.gokey = x, E;
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
        function a(e, t, n) {
          return e ? r.hash(encodeURIComponent(e)).substr(0, t) : n;
        }

        var r = n(69),
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
              s = n.substr(0, 6);
          return [a(e, 4, r), a(t, 4, r), s].join("");
        };
      }, function (e, t) {
        t.hash = function (e, t) {
          var n,
              a,
              r = 1315423911,
              o = t || r;

          for (n = e.length - 1; n >= 0; n--) a = e.charCodeAt(n), o ^= (o << 5) + a + (o >> 2);

          var s = (2147483647 & o).toString(16);
          return s;
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
        var a = n(3),
            r = n(2),
            o = n(8);

        e.exports = function () {
          return {
            run: function () {
              var e = o.isTB(),
                  t = r.getGlobalValue(a.APLUS),
                  n = this.options.context.what_to_send.logdata || {},
                  s = getCurrentPages(),
                  i = s[s.length - 1] || {};
              i && !n.title && (n.title = i.route || ""), n.url = (!e && t.globalConfig.isAli ? "https://" : "") + (i.route || i.is || "-");
              var u = "-";

              if (s.length > 1) {
                var c = s[s.length - 2] || {};
                u = (!e && t.globalConfig.isAli ? "https://" : "") + (c.route || c.is || "-");
              }

              n.pre = u, n.sdk_info && (n.sdk_info.windmill = "1"), this.options.context.what_to_send.logdata = n;
            }
          };
        };
      }, function (e, t, n) {
        var a = n(32),
            r = n(18),
            o = n(2),
            s = n(3),
            i = n(8);

        e.exports = function () {
          return {
            getUserdata: function () {
              var e = o.getGlobalValue("aplus"),
                  t = this.options.config || {},
                  n = {};
              t && !t.is_auto && t.gokey && ("string" == typeof t.gokey ? n = a.param2obj(t.gokey) : "object" == typeof t.gokey && (n = t.gokey));

              var s = function (e) {
                r(e) ? e.forEach(function (e) {
                  n = Object.assign({}, n, e);
                }) : n = Object.assign({}, n, e);
              };

              s(e.getMetaInfo("aplus-cpvdata"));
              var u = i.getCurrentPage(),
                  c = u.route || u.is || "page",
                  p = e.getMetaInfo("aplus-page-properties") || {},
                  l = p[c];
              "object" == typeof l && s(l);
              var f = this.options.context || {},
                  g = f.userdata || {};
              return s(g), n;
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
                  n = t[s.SPM_URL] || t.spmUrl;
              return n && (e.gokey[s.SPM_URL] = n), e;
            },
            run: function () {
              var e = this.options.context.what_to_send.logdata,
                  t = Object.assign({}, this.getUserdata(), e.userdata || {});
              e.gokey = Object.assign({}, e.gokey, t), e = this.updatePre(e), e = this.updateUrl(e), e = this.updateSpmUrl(e), this.options.context.what_to_send.logdata = e, this.options.context.userdata = e.gokey;
            }
          };
        };
      }, function (e, t, n) {
        var a = n(2);

        e.exports = function () {
          return {
            run: function () {
              var e = a.getGoldlogVal("_$") || {},
                  t = e.send_pv_count || 0;
              e.send_pv_count = ++t, a.setGoldlogVal("_$", e);
            }
          };
        };
      }, function (e, t, n) {
        var a = n(32),
            r = n(18),
            o = n(2);

        e.exports = function () {
          return {
            getUserData: function () {
              var e = o.getGlobalValue("aplus"),
                  t = this.options.context || {},
                  n = t.userdata || {},
                  s = t.what_to_send.logdata.gokey;
              s = Object.assign({}, s, a.param2obj(n.gokey)), s = Object.assign({}, s, a.param2obj(e.getMetaInfo("aplus-exinfo") || {}));
              var i = e.getMetaInfo("aplus-exdata");
              return r(i) ? i.forEach(function (e) {
                s = Object.assign({}, s, e);
              }) : s = Object.assign({}, s, i || {}), s;
            },
            run: function () {
              var e = this.options.context.what_to_send.logdata,
                  t = this.getUserData();
              "1010" === e.gmkey && (e.arg1 = t.duration || e.logkey), e.gokey = t, this.options.context.what_to_send.logdata = e;
            }
          };
        };
      }, function (e, t, n) {
        e.exports = function () {
          return {
            run: function () {
              n(76)(this.options.context.logConfig);
            }
          };
        };
      }, function (e, t, n) {
        var a = n(41),
            r = n(3),
            o = n(2);

        e.exports = function (e) {
          var t = o.getGlobalValue(r.APLUS);

          if (!t._aplus_api) {
            t._aplus_api = {
              status: r.COMPLETE
            };
            var s = n(77).run.create({
              logConfig: e
            });

            for (var i in s) t[i] = s[i];

            o.setGlobalValue(r.APLUS, t);
            var u = [r.APLUS + "Ready", r.COMPLETE];
            a.doPubMsg(u), a.doCachePubs(u);
          }
        };
      }, function (e, t, n) {
        var a = n(37),
            r = n(9),
            o = n(8),
            s = n(18),
            i = n(3),
            u = n(41),
            c = n(7),
            p = n(2),
            l = n(78),
            f = n(40),
            g = n(82),
            d = n(11),
            h = n(10),
            _ = n(29),
            v = function (e, t) {
          my && my.call && "function" == typeof t && my.call("handleLoggingAction", {
            type: "behavior",
            subType: e.subType
          }, function (n) {
            var a = {};
            a[e.spmType] = n[e.spmType], t(a);
          });
        },
            m = a.extend({
          _send: function (e, t, n, a, r) {
            return e = h.can2https(e), "object" == typeof t && "POST" === n ? o.request(e, {
              method: n,
              data: t,
              dataType: "base64"
            }, a, r) : o.request(e + "?" + t, {
              method: n,
              dataType: "base64"
            }, a, r), e;
          },
          _requestVTConfig: function (e, t, n) {
            if (0 === e.indexOf("//")) {
              var a = i.HTTPS;
              /(\d+\.){3,}\d+/.test(e) && (a = "http:"), e = a + e;
            }

            o.request(e, {
              method: "GET"
            }, t, n);
          },
          _sendPV: function (e, t) {
            var n = p.getGlobalValue(i.APLUS);
            e = e || {}, e.pageName && n._setMetaInfo(i.APLUS + "-pagename", e.pageName);
            var a = new l();
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
            var r = p.getGlobalValue(i.APLUS),
                o = "EXP";
            if (!r.globalConfig.isAli || t !== o && "CLK" !== t) console.warn("only support EXP or CLK log to combile record!");else if (s(n)) {
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
              var l = [];
              l.push((t === o ? "expdata=" : "clkdata=") + JSON.stringify(u)), l.push(t === o ? "_is_auto_exp=1" : "_is_auto_clk=1"), l.push("_eventType=custom"), l.push("_method=" + a), l.push("_pkgSize=" + n.length), "false" === c && l.push("_aplus_sendtomy=false"), r.record(e, t, l.join("&"), a);
            } else console.warn("type of gokeys must be ArrayObject!");
          },
          _record: function (e, t, n, a, o) {
            var s = p.getGlobalValue(i.APLUS);
            e += "", e && 0 !== e.indexOf("/") && s.globalConfig.isAli && (e = "/" + e);
            var u = new l(),
                f = s.logConfig.hjlj;
            return u.run({
              plugins: f.plugins,
              context: c(f.context)
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
            var e = p.getGlobalValue(i.APLUS),
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
            my && my.callUserTrack && this.isPageDisAppear && (this.isPageDisAppear = !1, this.isPageAppear = !0, my.callUserTrack("pageAppear"));
          },
          _pageDisappear: function () {
            my && my.callUserTrack && this.isPageAppear && (this.isPageDisAppear = !0, this.isPageAppear = !1, my.callUserTrack("pageDisappear"));
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
            v({
              subType: "getPageSpmUrl",
              spmType: "spmUrl"
            }, e);
          },
          _getPageSpmPre: function (e) {
            v({
              subType: "getPageSpmPre",
              spmType: "spmPre"
            }, e);
          },
          _setPageName: function (e, t) {
            if (!e) return void d().w("setPageName failed:  pageName=" + e);

            var n = t || _.getCurrentPagePath(),
                a = c(f.getMetaInfo("pageConfig") || {});

            a[n] = e, f.appendMetaInfo("pageConfig", a);
          },
          getPageName: function (e) {
            return _.getPageCode(e);
          },
          _getElementSPM: function (e, t) {
            if (e) {
              var n = _.getPageCode() || "";

              if ("string" != typeof e) {
                var a = e.dataset && e.dataset.trackerParams || "",
                    r = h.jsonLikeStr2JSON(a);
                return [n, r.spmC, r.spmD].join(".");
              }

              var s,
                  i = o.getContext(),
                  u = f.getMetaInfo("aplus-auto-clk") || [],
                  c = f.getMetaInfo("aplus-auto-exp") || [];

              try {
                var p;

                for (p = 0; p < u.length; p++) {
                  var l = u[p];

                  if (l.cssSelector === e) {
                    s = [n, l.spmC, l.spmD].join(".");
                    break;
                  }
                }

                for (p = 0; p < c.length; p++) {
                  var g = c[p];

                  if (g.cssSelector === e) {
                    s = [n, g.spmC, g.spmD].join(".");
                    break;
                  }
                }

                var v = i.createSelectorQuery().selectAll(e);
                "function" == typeof v.fields && v.fields({
                  dataset: !0,
                  id: !0
                }, function (e) {
                  var n = [];

                  if (e && e.length > 0) {
                    for (var a = 1; a <= e.length; a++) n.push(s + "_" + a);

                    t && "function" == typeof t && t(n);
                  }
                }).exec();
              } catch (e) {
                d().w("该平台不支持dom元素查询, err = ", e);
              }
            }
          },
          _recordAppLink: function (e, t, n) {
            if (!e.targetAppKey) return d().w("send $$_app_link failed: targetAppKey is null"), !1;
            var a = p.getGlobalValue(i.APLUS);
            return a._record("$$_app_link", "OTHER", e, t, n);
          }
        });

        t.run = m;
      }, function (e, t, n) {
        var a = n(16),
            r = n(2),
            o = n(9),
            s = n(41),
            i = n(79),
            u = n(3),
            c = n(80),
            p = n(81),
            l = function () {};

        l.prototype.run = function (e, t, n) {
          var l = new p();
          l.init({
            middleware: [],
            config: t.config,
            plugins: e.plugins
          });
          var f = l.run(),
              g = o(e.context) ? new e.context() : e.context;
          g.userdata = t.userdata, g.logger = i.logger;
          var d = {
            context: g,
            pubsub: r.getGoldlogVal("aplus_pubsub"),
            pubsubType: t && t.pubsubType
          },
              h = new c();
          h.create(d), h.wrap(f, function () {
            d.context.status = u.COMPLETE, t && (t.middlewareMessageKey && s.doPubMsg([t.middlewareMessageKey, d.context]), t.messageFnQueue && a(t.messageFnQueue, function (t) {
              t(r.getGlobalValue(u.APLUS), e);
            })), o(n) && n(d.context);
          })();
        }, e.exports = l;
      }, function (e, t, n) {
        var a = "[APLUS] -- ";
        t.logger = function (e) {
          e || (e = {});
          var t = e.level || "warn";
          console && console[t] && console[t](a + e.msg);
        }, t.debugLog = function (e) {
          var t = n(2).getGlobalValue("aplus");
          t && t.aplusDebug && this.logger(e);
        };
      }, function (e, t, n) {
        function a() {}

        var r = n(9),
            o = n(51),
            s = n(11);
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
              i = a.compose || {},
              u = i.maxTimeout || 1e4;
          return function (a) {
            var i,
                c = e.length,
                p = 0,
                l = 0,
                f = function (g, d) {
              if (p === c) return a = "done", n.resetCalledList(), r(t) && d !== a && t.call(n, a), void clearTimeout(i);

              if (o.indexof(n.calledList, p) === -1) {
                if (n.setCalledList && n.setCalledList(p), !(e && e[p] && r(e[p][0]))) return;

                try {
                  a = e[p][0].call(n, a, function () {
                    p++, l = 1, f(p);
                  });
                } catch (e) {
                  s().w(e);
                }
              }

              var h = "number" == typeof a;

              if ("pause" === a || h) {
                l = 0;

                var _ = h ? a : u,
                    v = e[p] ? e[p][1] : "";

                i = setTimeout(function () {
                  0 === l && (s().w("jump the middleware about " + v + ", because waiting timeout maxTimeout = " + _), a = null, p++, f(p));
                }, _);
              } else "done" === a ? (p = c, f(p, a)) : (p++, f(p));
            };

            return n.calledList && n.calledList.length > 0 && n.resetCalledList(), f(p);
          };
        }, e.exports = a;
      }, function (e, t, n) {
        var a = n(28),
            r = n(11);

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
                var s = o[e];
                if (this.plugins_name.push(s.name), n.push([function (e, n) {
                  t.pubsubInfo(this, s);
                  var o = new s.path();
                  return o.init || (o.init = function (e) {
                    this.options = e;
                  }), o.init({
                    context: this.context,
                    config: a(s.config || {}, r.config)
                  }), o.run(e, function (e) {
                    setTimeout(function () {
                      n(s, e);
                    }, 1);
                  });
                }, s.name]), e++, o[e]) return this.run(e);
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
        var a = n(84),
            r = n(2);

        e.exports = function () {
          return {
            run: function () {
              var e = this.options.context.aplus_config,
                  t = e.globalConfig.APLUS_QUEUE,
                  n = r.getContext(),
                  o = n[t] || [],
                  s = a.getFormatQueue(o, "metaQueue");
              n[t] = s.queue, a.processGoldlogQueue(s.formatQueue, this.options.config);
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
              s = e.arguments || [],
              i = s[0],
              u = s[1],
              c = "START";
          if ("_hold" === i && u === c) return c;
          if ("_anony_id" === i && u) return c;
          if (e && /sendPV|record|setPageSPM|setMetaInfo|appendMetaInfo$/.test(e.action)) switch (t) {
            case "BLOCK":
              n[t] || (_.push(e), o = !1);
          }
          return o;
        }

        function s(e) {
          g(d, e), g(h, e), g(_, e);
        }

        function i(e, t) {
          return t && f.openAPIs.indexOf(e) > -1 && (e = "_" + e), e;
        }

        var u = n(2),
            c = n(51),
            p = n(9),
            l = n(11),
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
            l().w(e);
          }
        };

        t.processGoldlogQueue = g;
        var d = [],
            h = [],
            _ = [];

        t.subscribeAndProcessQueue = function (e, t) {
          var n = u.getGlobalValue(e);
          n.push({
            action: f.SUBSCRIBE,
            arguments: [f.SET_META_INFO, function (e, n) {
              e === f._USER_ID && n ? g(d, t) : e === f._ANONY_ID && n ? g(h, t) : "_hold" === e && "START" === n && s(t);
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
                var h,
                    _ = r.split("."),
                    v = d,
                    m = d;

                if (3 === _.length) v = d[_[0]][_[1]] || {}, h = i(_[2], a), m = v[h] ? v[h] : "";else for (; _.length;) if (h = i(_.shift(), a), m = v = v[h], !v) return void (p(n) && n(e));
                p(m) && m.apply(v, f), "START" === g && s(t);
              }
            } catch (e) {
              l().w(e);
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
                s = r.arguments[0];
            /subscribe/.test(o) ? "setMetaInfo" === s ? n.subscribeMetaQueue.push(r) : s === f.MW_CHANGE_PV || s === f.MW_CHANGE_HJLJ ? n.subscribeMwChangeQueue.push(r) : n.subscribeQueue.push(r) : /MetaInfo/.test(o) ? n.metaQueue.push(r) : n.othersQueue.push(r);
          } catch (e) {
            l().w(e), n.othersQueue.push(r);
          }

          var i;
          return t && n[t] && (i = n[t], n[t] = []), a = n.subscribeMwChangeQueue.concat(n.metaQueue), a = a.concat(n.subscribeQueue), a = a.concat(n.subscribeMetaQueue, n.othersQueue), {
            queue: a,
            formatQueue: i
          };
        };

        t.getFormatQueue = m;
      }, function (e, t, n) {
        var a = n(37),
            r = n(2),
            o = n(84),
            s = a.extend({
          push: function (e) {
            this.length++, o.processTask(e, this.opts);
          }
        });

        e.exports = function () {
          return {
            processAplusQueue: function (e) {
              var t = this.options.config || {},
                  n = r.getGlobalValue(e);
              o.processGoldlogQueue(n, t), r.setGlobalValue(e, s.create({
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
        function a() {
          function e() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = s.getCurrentPage(),
                n = t.route || t.is;

            switch (e) {
              case "onPullDownRefresh":
                y.onPullDownRefresh += 1, _.push({
                  action: "aplus.record",
                  arguments: [i.logkey || "$$_pull_down_refresh", "CLK", {
                    event: e,
                    pagename: l.getPageCode() || n,
                    count: y.onPullDownRefresh
                  }]
                });
                break;

              case "onReachBottom":
                y.onReachBottom += 1, _.push({
                  action: "aplus.record",
                  arguments: [a.logkey || "$$_reach_bottom", "CLK", {
                    event: e,
                    pagename: l.getPageCode() || n,
                    count: y.onReachBottom
                  }]
                });
                break;

              case "onShareAppMessage":
                y.onShareAppMessage += 1, _.push({
                  action: "aplus.record",
                  arguments: [g.logkey || "$$_share", "CLK", {
                    event: e,
                    pagename: l.getPageCode() || n,
                    count: y.onShareAppMessage,
                    share_type: 1
                  }]
                });
                break;

              case "onShareTimeline":
                y.onShareTimeline += 1, _.push({
                  action: "aplus.record",
                  arguments: [g.logkey || "$$_share", "CLK", {
                    event: e,
                    pagename: l.getPageCode() || n,
                    count: y.onShareTimeline,
                    share_type: 0
                  }]
                });
                break;

              case "onPageShow":
                t.route && !v && (m = {
                  ts: Date.now(),
                  path: t.route,
                  page_name: t.route
                }, v = !0);
                break;

              case "onPageHide":
                if (v) {
                  var r = Date.now() - m.ts,
                      u = s.getReferrerPage().route || s.getReferrerPage().is || "-",
                      c = (l.getPageName() || {}).extraParams,
                      p = Object.assign({}, c, {
                    duration: r,
                    path: m.path,
                    page_name: l.getPageCode() || m.page_name,
                    page_start: m.ts,
                    isMini: !0,
                    _page_auto_id: o.PAGE_END,
                    _page_auto_pv: !0,
                    referrer: u
                  });
                  h.sendPV({
                    is_auto: !0
                  }, p), m = null, v = !1;
                }

            }
          }

          function t() {
            a = h.getMetaInfo("rb_config"), i = h.getMetaInfo("pdr_config"), g = h.getMetaInfo("share_config");
          }

          function n(e, t) {
            if (e && t) try {
              var n = h.getMetaInfo("aplus-api-host"),
                  a = /[[a-z|\-|\_|0-9\.]+[a-z|\-|\_|0-9](:\d*)?/,
                  r = n.match(a);

              if (r && r[0]) {
                var i = o.HTTPS;
                /(\d+\.){3,}\d+/.test(r[0]) && (i = "http:");
                var u = i + "//" + n + "/vt/loadTransferConfig?code=" + e + "&appInfoId=" + t;
                s.request(u, {}, function (e) {
                  try {
                    var t = e.data && e.data.data && e.data.data.config || "",
                        n = e.data && e.data.data && e.data.data.debugId || "";
                    n && h.appendMetaInfo("aplus-global-args", {
                      debugId: n
                    });
                    var a = new Date().getTime();
                    h._minicfg_load = new Date().getTime() - a, t && (h._aplus_vt_cfg = JSON.parse(t) || {}, p.vt2autoEvent());
                  } catch (e) {
                    f().w("拉取实时可视化埋点验证失败, 错误信息：" + e);
                  }
                });
              }
            } catch (e) {}
          }

          var a,
              i,
              g,
              d = r.getContext(),
              h = r.getGlobalValue(o.APLUS),
              _ = r.getGlobalValue(o.APLUS_QUEUE),
              v = !1,
              m = null,
              y = {
            onPullDownRefresh: 0,
            onShareTimeline: 0,
            onReachBottom: 0,
            onShareAppMessage: 0,
            onClick: 0
          };

          _.push({
            action: o.SUBSCRIBE,
            arguments: ["aplusReady", function (e) {
              "complete" === e && t();
            }]
          }), h.aplus_pubsub.subscribe("onLoad", function (e) {
            if ("ready" === e.status) try {
              var t = l.getVTRealtimeCode();

              if (t) {
                var a = h.getMetaInfo("appInfoId");
                n(t, a);
              } else !!h.getMetaInfo("aplus-vt-cfg-url") && p.vt2autoEvent();
            } catch (e) {
              f().w("拉取实时可视化埋点验证信息失败， 错误原因：" + e);
            }
          }), h.aplus_pubsub.subscribe("onShow", function (t) {
            if ("ready" === t.status) {
              var n = "MAN" !== d.aplus.getMetaInfo("aplus-waiting");
              n && e("onPageShow");
            }
          }), h.aplus_pubsub.subscribe("onHide", function (t) {
            if ("ready" === t.status) {
              var n = "MAN" !== d.aplus.getMetaInfo("aplus-waiting");
              n && e("onPageHide");
            }
          }), h.aplus_pubsub.subscribe("onPullDownRefresh", function (t) {
            "ready" === t.status && e("onPullDownRefresh");
          }), h.aplus_pubsub.subscribe("onReachBottom", function (t) {
            "ready" === t.status && e("onReachBottom");
          }), h.aplus_pubsub.subscribe("onShareAppMessage", function (t) {
            "ready" === t.status && e("onShareAppMessage");
          }), h.aplus_pubsub.subscribe("onShareTimeline", function (t) {
            "ready" === t.status && e("onShareTimeline");
          }), h.getMetaInfo("aplus-vt-cfg-url") && u.pushIntoGoldlogQueue(o.SUBSCRIBE, [c, function (e) {
            var t = e.pageConfig;
            t && t.enabled && (h._aplus_vt_cfg = t);
          }]);
        }

        var r = n(2),
            o = n(3),
            s = n(8),
            i = n(87),
            u = n(57),
            c = "MiniVtConfigFormat",
            p = n(90),
            l = n(29),
            f = n(11);

        e.exports = function () {
          return {
            run: function () {
              var e = r.getGlobalValue("aplus");

              if (a(), !e._aplus_aleady_load_minivt) {
                e._aplus_aleady_load_minivt = 1;
                var t = i.create();
                t.run();
              }
            }
          };
        };
      }, function (e, t, n) {
        var a = n(37),
            r = n(57),
            o = n(88),
            s = n(16),
            i = n(27),
            u = n(89),
            c = n(3),
            p = n(2),
            l = "MiniVtConfigBack",
            f = "MiniVtConfigFormat",
            g = c.PUBLISH;
        e.exports = a.extend(i.assign(u, {
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
                t = p.getGlobalValue("aplus"),
                n = t.getMetaInfo("aplus-vt-cfg-url");

            if (n) {
              var a = new Date().getTime();
              t.requestVTConfig(n, function (n) {
                var o = n.data;
                if (t._minicfg_load = new Date().getTime() - a, o) try {
                  t._aplus_vt_cfg = "object" == typeof o ? o : JSON.parse(o), t._aplus_vt_cfg.points && s(t._aplus_vt_cfg.points, function (e) {
                    e.selector = decodeURIComponent(e.selector);
                  }), e.setConfigIntoLs(t._aplus_vt_cfg);
                } catch (e) {
                  t._aplus_vt_cfg = {
                    enabled: !1
                  };
                }
                r.pushIntoGoldlogQueue(g, [l, {
                  pageConfig: t._aplus_vt_cfg,
                  enable: 0
                }]);
              }, function (e) {
                t._aplus_vt_cfg && t._aplus_vt_cfg.enabled && r.pushIntoGoldlogQueue(g, [l, {
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
            var a = p.getGlobalValue("aplus");

            if (a._minicfg_load = 0, e) {
              var o = this.fetchFromLS(e);
              if ("string" == typeof o) try {
                o = JSON.parse(o);
              } catch (e) {
                o = {};
              }
              o && o.enabled && (a._aplus_vt_cfg = o), n ? this.fetchFromCdn(e, t) : r.pushIntoGoldlogQueue(g, [l, {
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
            r.pushIntoGoldlogQueue(t, [l, function (t) {
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
        var a = n(57);

        t.catchException = function (e, t) {
          var n = e;
          "object" == typeof t && t.message && (n = n + "_" + t.message), a.pushIntoGoldlogQueue("aplus._aplus_cplugin_m.do_tracker_jserror", [{
            message: n,
            error: JSON.stringify(t),
            filename: e
          }]);
        };
      }, function (e, t, n) {
        var a = n(2),
            r = n(8),
            o = n(10);
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
        function a(e, t, n) {
          var a = [];
          if (!i(t)) return a;
          if (e && t && i(e) && i(t)) for (var r = 0; r < t.length; r++) e.some(function (e) {
            return e[n] === t[r][n];
          }) || a.push(t[r]);
          return a;
        }

        var r = n(8),
            o = n(2),
            s = n(16),
            i = n(18),
            u = o.getGlobalValue("aplus"),
            c = n(29);
        t.getCurrentPageVTCfg = function () {
          var e = u._aplus_vt_cfg;
          if (e) for (var t = c.getCurrentPagePath(), n = 0; n < e.pages.length; n++) {
            var a = e.pages[n];
            if (a.matchUrl === t) return a;
          }
        }, t.vt2autoEvent = function () {
          var e = u._aplus_vt_cfg;

          if (e) {
            var t = r.getCurrentPage(),
                n = t.route || t.is;
            s(e.pages, function (t) {
              if (u.setPageName({
                pageName: t.spmB,
                extraParams: t.extraParams
              }, t.matchUrl), t.matchUrl === n) {
                var r = [],
                    o = [];
                s(e.points, function (e) {
                  t.spmB === e.spmB && ("exposure" === e.trackerType ? r.push({
                    cssSelector: e.selector,
                    logkey: e.logkey,
                    props: e.selectorType,
                    spmC: e.spmC,
                    spmD: e.spmD,
                    customArgs: e.customArgs,
                    _vt: t.template || t.stdId ? 2 : 1
                  }) : o.push({
                    cssSelector: e.selector,
                    logkey: e.logkey,
                    props: e.selectorType,
                    spmC: e.spmC,
                    spmD: e.spmD,
                    customArgs: e.customArgs,
                    _vt: t.template || t.stdId ? 2 : 1
                  }));
                });
                var i = u.getMetaInfo("aplus-auto-exp") || [],
                    c = u.getMetaInfo("aplus-auto-clk") || [],
                    p = a(i, r, "cssSelector"),
                    l = a(c, o, "cssSelector");
                p.length > 0 && u.appendMetaInfo("aplus-auto-exp", p), l.length > 0 && u.appendMetaInfo("aplus-auto-clk", l);
              }
            });
          }
        };
      }, function (e, t, n) {
        e.exports = function (e, t) {
          var a = n(2),
              r = n(41),
              o = n(11),
              s = n(16),
              i = n(8),
              u = n(92);
          i.initIsTB(), "object" == typeof e && (e.siteId && (t.globalConfig.siteId = e.siteId), t.metaInfo = Object.assign({}, t.metaInfo, e.metaInfo));
          var c = "running",
              p = "complete",
              l = ["aplusReady", c];
          return r.doPubMsg(l), u.run({
            plugins: t.plugins,
            context: function () {
              var e = {
                PAGE_LOAD_TIME: new Date()
              },
                  n = [];
              return s(t.plugins, function (t) {
                e[t.name] = t.config, "aplus_log_inject" === t.name && t.config && t.config.plugins && (n = t.config.plugins.pv, s(n, function (t) {
                  e[t.name] = t.config;
                }));
              }), Object.assign({}, e, {
                aplus_config: t
              });
            }
          }, function () {
            o().w("APLUS INIT SUCCESS"), l[1] = p, r.doPubMsg(l);
          }), a.getContext();
        };
      }, function (e, t, n) {
        var a = n(78),
            r = n(9),
            o = n(41);

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
    }]);
  }, function (modId) {
    var map = {};
    return __REQUIRE__(map[modId], modId);
  });

  return __REQUIRE__(1640070441192);
}(); //miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map