{
    const e = "**VMInitInjection**";
    1 !== window[e] && (window[e] = function(e, t, n) {
        const o = {
            __proto__: null
        }
          , r = this
          , {window: l} = r
          , i = "Violentmonkey"
          , s = "content"
          , a = "responseHeaders"
          , u = "responseText"
          , c = "responseType"
          , d = "xhrType"
          , f = e=>"function" == typeof e
          , p = e=>null != e && "object" == typeof e
          , _ = "prototype"
          , g = e=>"string" == typeof e
          , h = (e,t,n)=>{
            try {
                e && ae(e, t) && (n = e[t])
            } catch (e) {}
            return n
        }
          , m = (e,t,n,o=!0,r)=>W(e, t, {
            __proto__: null,
            [r || "value"]: n,
            [!r && "writable"]: o,
            configurable: o,
            enumerable: o
        })
          , y = e=>K(C(), e)
          , v = (e,t,n)=>(X(e, null),
        t && $(V, n, n=>{
            ae(t, n) && (e[n] = t[n])
        }
        ),
        e)
          , w = (e,t,n,o)=>{
            var r;
            const l = e[t] || (e[t] = C());
            return null != (r = l[n]) ? r : l[n] = null != o ? o : C()
        }
          , b = async e=>e
          , M = (e="VM")=>e + fe()
          , x = (e,...t)=>{
            let n = `[${i}]`;
            t[0] && $(V, t[0], e=>{
                n += `[${e}]`
            }
            ),
            t[0] = n,
            k(de[e], de, t)
        }
          , G = (e,t)=>m(e, e.length, t);
        let $, C, V, k, T, R, S, E, O, I, P, N, L, j, A, q, D, H, U, J, F, K, W, B, z, X, Q, Y, Z, ee, te, ne, oe, re, le, ie, se, ae, ue, ce, de, fe, pe, _e, ge, he, me, ye, ve, we;
        const be = t ? null : r.cloneInto
          , Me = (()=>{
            let t, o, i, s, a, u, c, d = -1, p = r, g = l;
            return n && (u = l[n],
            delete l[n]),
            u && !f(u[0]) && (p = u[0],
            g = p,
            c = e && u[1],
            u = !1),
            u || (u = {
                __proto__: null
            }),
            u = [R = u[d += 1] || p.CustomEvent, S = u[d += 1] || p.DOMParser, E = u[d += 1] || p.Error, O = u[d += 1] || p.EventTarget, I = u[d += 1] || p.KeyboardEvent, P = u[d += 1] || p.MouseEvent, N = u[d += 1] || p.Object, j = u[d += 1] || p.Symbol, L = u[d += 1] || p.Proxy, q = u[d += 1] || p.dispatchEvent, U = u[d += 1] || p.removeEventListener, J = u[d += 1] || p.addEventListener, W = (i = N) && u[d += 1] || i.defineProperty, B = u[d += 1] || i.getOwnPropertyDescriptor, a = u[d += 1] || i.getOwnPropertyNames, z = u[d += 1] || i.getPrototypeOf, X = u[d += 1] || i.setPrototypeOf, K = u[d += 1] || i.assign, Q = u[d += 1] || i.keys, Y = u[d += 1] || i.values, Z = u[d += 1] || (t = p.Array[_]).concat, ee = u[d += 1] || t.filter, V = u[d += 1] || t.forEach, te = u[d += 1] || t.indexOf, ne = u[d += 1] || p.Element[_].remove, oe = u[d += 1] || p.String[_].slice, k = u[d += 1] || (o = p.Reflect).apply, $ = u[d += 1] || (s = i.call).bind(s), T = u[d += 1] || s.bind(i.bind), le = u[d += 1] || p.URL[_].toString, C = u[d += 1] || T(i.create, i, null), se = u[d += 1] || p.FormData[_].entries, ae = u[d += 1] || T(s, i[_].hasOwnProperty), ie = u[d += 1] || p.Array.isArray, ue = u[d += 1] || p.JSON.parse, ce = u[d += 1] || p.JSON.stringify, de = u[d += 1] || y((c || p).console), fe = u[d += 1] || p.Math.random, pe = u[d += 1] || S[_].parseFromString, _e = u[d += 1] || o.ownKeys, ge = u[d += 1] || p.Event[_].stopImmediatePropagation, he = u[d += 1] || p.Promise[_].then, me = u[d += 1] || p.URLSearchParams[_].toString, ye = u[d += 1] || B(p.Document[_], "currentScript").get, ve = u[d += 1] || B(R[_], "detail").get, we = u[d += 1] || B(P[_], "relatedTarget").get, D = u[d += 1] || B(g, "length").get || (()=>h(l, "length", 1e9)), H = u[d += 1] || B(g, "parent").get || (()=>h(l, "parent")), re = u[d += 1] || [a(g), p !== g && a(p)]],
            F = j.toStringTag,
            u
        }
        )();
        try {
            A = Promise
        } catch (e) {}
        (()=>{
            "use strict";
            var n = {
                __proto__: null
            };
            for (let e = 0, t = "dor"; e < t.length; e++)
                W(n, t[e], {
                    __proto__: null,
                    value: 0,
                    writable: 1
                });
            n.d = (e,t)=>{
                for (var n in t)
                    n in e || W(e, n, {
                        __proto__: null,
                        enumerable: !0,
                        get: t[n]
                    })
            }
            ,
            n.o = (e,t)=>ae(e, t),
            n.r = e=>{
                W(e, F, {
                    __proto__: null,
                    value: "Module"
                }),
                W(e, "__esModule", {
                    __proto__: null,
                    value: !0
                })
            }
            ;
            var z = {
                __proto__: null
            };
            n.r(z),
            n.d(z, {
                __proto__: null,
                default: ()=>Wt
            });
            const fe = C()
              , he = e=>K(fe, e)
              , xe = C()
              , Ge = {
                __proto__: null,
                onHandle({cmd: e, data: t, node: n}) {
                    const o = fe[e];
                    o && $(o, n, t)
                },
                send(e, t, n) {
                    let o, r;
                    try {
                        r = new A(e=>{
                            o = e
                        }
                        )
                    } catch (e) {}
                    return Ce(e, t, n, o),
                    r
                },
                call: Ce
            };
            let $e;
            function Ce(e, t, n, o, r) {
                const l = M();
                if (xe[l] = o || Ve,
                r ? m(t, r, l) : t = {
                    __CBID: l,
                    data: t
                },
                Ge.post(e, t, n),
                !o)
                    return $e
            }
            function Ve(e) {
                $e = e
            }
            const ke = Ge
              , Te = C()
              , Re = C();
            function Se(e) {
                for (const t in e)
                    if (ae(e, t))
                        return !1;
                return !0
            }
            const Ee = {
                __proto__: null,
                string: "s",
                number: "n",
                boolean: "b"
            };
            function Oe(e, t=JSON.stringify) {
                if (void 0 !== e) {
                    const n = Ee[typeof e];
                    return `${n || "o"}${n ? e : t(e)}`
                }
            }
            const Ie = ["log", "info", "warn", "error", "debug"]
              , Pe = (e,t)=>{
                const n = be ? be(t, document) : t
                  , o = new R(e,{
                    __proto__: null,
                    detail: n
                });
                $(q, l, o)
            }
              , Ne = (e,t,n)=>{
                let o;
                $(J, l, e, e=>{
                    if ($(ge, e),
                    o)
                        o.node = $(we, e),
                        e = o,
                        o = null;
                    else {
                        try {
                            e = $(ve, e)
                        } catch (e) {
                            return
                        }
                        if (e || ((e = C()).data = `[${i}] Non-cloneable property e.g. a DOM node or function.`),
                        be && (e = be(e, l)),
                        e.node && (o = e))
                            return
                    }
                    n.onHandle(e)
                }
                , !0),
                n.post = (e,o,r,i)=>{
                    const s = n.ids ? i : r
                      , a = s && new P(t,{
                        __proto__: null,
                        relatedTarget: s
                    });
                    Pe(t, {
                        cmd: e,
                        data: o,
                        node: !!a
                    }),
                    a && $(q, l, a)
                }
            }
            ;
            let Le = 0;
            const je = C();
            function Ae(e) {
                Le += 1;
                const t = Le
                  , n = {
                    onclose: null,
                    closed: !1,
                    close() {
                        ke.post("TabClose", t)
                    }
                };
                return je[t] = n,
                ke.post("TabOpen", {
                    key: t,
                    data: e
                }),
                n
            }
            he({
                TabClosed(e) {
                    const t = je[e];
                    t && (t.closed = !0,
                    delete je[e],
                    null == t.onclose || t.onclose())
                }
            });
            const qe = C()
              , De = "text/html"
              , He = "response"
              , Ue = "responseXML"
              , Je = "document"
              , Fe = "raw"
              , Ke = "onerror"
              , We = "onload"
              , Be = ["abort", "error", "load", "loadend", "loadstart", "progress", "readystatechange", "timeout"]
              , ze = ["context", c]
              , Xe = ["headers", "method", "overrideMimeType", "password", "timeout", "user"]
              , Qe = ["application/xhtml+xml", "application/xml", "image/svg+xml", "text/xml", De]
              , Ye = {
                __proto__: null,
                arraybuffer: 1,
                blob: 1,
                json: 0,
                [Je]: 0,
                text: 0,
                "": 0
            };
            function Ze(e, t, n) {
                const {[c]: o} = e;
                let r, l, i;
                if (Fe in e) {
                    if (r = e[Fe],
                    e[d] || (i = r,
                    r = "",
                    $(V, i, e=>r += e),
                    e[Fe] = [r],
                    e[u] = r),
                    o === Je && (l = De) || !o && n === Ue && $(te, Qe, l = nt(t) || De) >= 0 || "json" === o)
                        try {
                            r = l ? $(pe, new S, r, l) : ue(r)
                        } catch (e) {
                            r = null
                        }
                    if (o === Je) {
                        const t = n === He ? Ue : He;
                        m(this, t, r),
                        e[t] = r
                    }
                    o && delete e[Fe],
                    e[n] = r
                } else
                    r = e[n];
                return void 0 === r && (r = null),
                m(this, n, r),
                r
            }
            function et(t, n, o) {
                let r, {data: l, url: i, [c]: s=""} = t;
                if (i || "url"in t) {
                    if (!g(i)) {
                        if (i === location)
                            i = i.href;
                        else
                            try {
                                i = $(le, i)
                            } catch (e) {
                                try {
                                    i = `${i}`
                                } catch (e) {
                                    r = e
                                }
                            }
                        t.url = i
                    }
                } else
                    r = new E('Required parameter "url" is missing.');
                if (r)
                    return void tt(t, r);
                s in Ye || (de.warn(`Unknown ${c} "${s}"`),
                s = "");
                const a = n.id
                  , u = M("VMxhr")
                  , _ = C()
                  , h = v({
                    cb: _,
                    id: u,
                    scriptId: a
                }, t, ze)
                  , {withCredentials: y=!0, anonymous: w=!y} = t
                  , b = n.async ? new A((e,n)=>{
                    const {[We]: o, [Ke]: r} = t;
                    t[We] = o ? t=>{
                        e(t),
                        o(t)
                    }
                    : e,
                    t[Ke] = r ? e=>{
                        n(e),
                        r(e)
                    }
                    : n
                }
                ) : {};
                return qe[u] = h,
                l = null == l && [] || (t.binary || !p(l)) && [`${l}`] || ot(l) || e >= 56 && [l] || [l, "bin"],
                ke.call("HttpRequest", v({
                    anonymous: w,
                    data: l,
                    id: u,
                    scriptId: a,
                    url: i,
                    fileName: o,
                    [c]: s,
                    [d]: h[d] = Ye[s] ? s : "",
                    events: $(ee, Be, e=>f(_[e] = t[`on${e}`]))
                }, t, Xe)),
                m(b, "abort", ()=>ke.post("AbortRequest", u)),
                b
            }
            function tt({[Ke]: e}, t) {
                if (!f(e))
                    throw t;
                e(t)
            }
            function nt(e) {
                const t = e.contentType || ""
                  , n = t.length;
                let o, r = 0;
                for (; r < n && "," !== (o = t[r]) && ";" !== o && o > " "; )
                    r += 1;
                return $(oe, t, 0, r)
            }
            function ot(e) {
                try {
                    return [[...$(se, e)], "fd"]
                } catch (e) {}
                try {
                    return [$(me, e), "usp"]
                } catch (e) {}
            }
            he({
                HttpRequested(e) {
                    const t = qe[e.id];
                    if (!t)
                        return;
                    const {type: n} = e
                      , o = t.cb[n];
                    if ("loadend" === n && delete qe[t.id],
                    !o)
                        return;
                    if (ae(e, "error"))
                        return void o(new E(e.error));
                    const {data: r} = e
                      , {[He]: l, [a]: i} = r;
                    let s = t[Fe];
                    if (null != l)
                        if (t[d])
                            t[Fe] = l;
                        else if (s || (s = t[Fe] = []),
                        g(l))
                            G(s, l);
                        else
                            for (let e = 0; e < l.length; e++) {
                                const t = l[e];
                                G(s, t)
                            }
                    t[d] ? m(r, u, null) : !s || s.length <= 1 ? m(r, u, s && s[0] || "") : s.length && m(r, u, T(Ze, r, t, e, u), !0, "get"),
                    null != i && (t[a] = i),
                    m(r, "context", t.context),
                    m(r, a, t[a]),
                    m(r, Ue, T(Ze, r, t, e, Ue), !0, "get"),
                    m(r, He, T(Ze, r, t, e, He), !0, "get"),
                    o(r)
                }
            });
            const rt = C();
            he({
                NotificationClicked(e) {
                    var t;
                    null == (t = rt[e]) || null == t.onclick || t.onclick()
                },
                NotificationClosed(e) {
                    const t = rt[e];
                    t && (delete rt[e],
                    null == t.ondone || t.ondone())
                }
            });
            const lt = C()
              , it = {
                __proto__: null,
                o: ue,
                n: e=>+e,
                b: e=>"true" === e
            };
            function st(e) {
                return Re[e]
            }
            function at(e, t, n, o, r, l) {
                let i;
                if (o !== r) {
                    var s;
                    i = ke[l.async ? "send" : "post"]("UpdateValue", {
                        id: e,
                        key: t,
                        raw: o
                    });
                    const a = null == (s = lt[e]) ? void 0 : s[t];
                    a && ft(a, t, n, o, r)
                } else
                    l.async && (i = b());
                return i
            }
            function ut(e) {
                const t = e[0]
                  , n = it[t];
                let o = $(oe, e, 1);
                try {
                    n && (o = n(o))
                } catch (e) {}
                return o
            }
            function ct(e, t) {
                $(V, Q(t), n=>{
                    const o = t[n];
                    o ? e[n] = o : delete e[n]
                }
                )
            }
            function dt(e, t, n) {
                $(V, Q(n), o=>{
                    const r = n[o] || void 0
                      , l = t[o];
                    if (l !== r) {
                        r ? t[o] = r : delete t[o];
                        const n = e[o];
                        n && ft(n, o, void 0, r, l, !0)
                    }
                }
                )
            }
            function ft(e, t, n, o, r, l=!1) {
                const i = r ? ut(r) : void 0
                  , s = void 0 === n && o ? ut(o) : n;
                $(V, Y(e), e=>{
                    try {
                        e(t, i, s, l)
                    } catch (e) {
                        x("error", ["GM_addValueChangeListener", "callback"], e)
                    }
                }
                )
            }
            he({
                UpdatedValues(e) {
                    $(V, Q(e), t=>{
                        const n = Re[t];
                        if (n) {
                            const o = e[t]
                              , r = lt[t];
                            r ? dt(r, n, o) : ct(n, o)
                        }
                    }
                    )
                }
            });
            const pt = j.isConcatSpreadable
              , _t = (...e)=>{
                const t = [];
                return m(t, pt, !0),
                $(V, e, e=>m(e, pt, !0)),
                k(Z, t, e)
            }
              , gt = (e,t)=>{
                let n;
                if (null === e)
                    n = "null";
                else if ("object" == typeof e) {
                    if (t) {
                        if ($(te, t, e) >= 0)
                            throw new E("Converting circular structure to JSON");
                        m(t, t.length, e)
                    } else
                        t = [e];
                    if (ie(e)) {
                        n = "[";
                        for (let r = 0, l = e.length; r < l; r += 1) {
                            var o;
                            n += `${r ? "," : ""}${null != (o = gt(e[r], t)) ? o : "null"}`
                        }
                        n += "]"
                    } else
                        n = "{",
                        $(V, Q(e), o=>{
                            const r = gt(e[o], t);
                            void 0 !== r && (n += `${n.length > 1 ? "," : ""}${ce(o)}:${r}`)
                        }
                        ),
                        n += "}";
                    t.length -= 1
                } else
                    void 0 !== e && (n = ce(e));
                return n
            }
              , ht = (e=C())=>{
                return {
                    clone() {
                        const t = C();
                        for (const n in e)
                            t[n] = y(e[n]);
                        return ht(t)
                    },
                    delete: e=>{
                        var n;
                        return null == (n = t(e)) || delete n[e]
                    }
                    ,
                    get: e=>{
                        var n;
                        return null == (n = t(e)) ? void 0 : n[e]
                    }
                    ,
                    set: (e,n)=>t(e, !0)[e] = n,
                    toArray: ()=>{
                        const t = Y(e);
                        return $(V, t, (e,n)=>{
                            t[n] = Q(e)
                        }
                        ),
                        k(_t, null, t)
                    }
                };
                function t(t, n) {
                    const o = t.length ? t[0] : "";
                    return e[o] || (n ? e[o] = C() : null)
                }
            }
              , mt = (e,t)=>{
                for (let n = 0, o = Q(t); n < o.length; n++) {
                    const r = o[n];
                    m(e, r, t[r])
                }
                return e
            }
              , yt = (e,t)=>e.async ? b(t) : t
              , vt = {
                bound: {
                    __proto__: null,
                    GM_deleteValue(e) {
                        const {id: t} = this
                          , n = st(t)
                          , o = n[e];
                        return delete n[e],
                        at(t, e, void 0, null, o, this)
                    },
                    GM_getValue(e, t) {
                        const n = st(this.id)[e];
                        return yt(this, n ? ut(n) : t)
                    },
                    GM_listValues() {
                        return yt(this, Q(st(this.id)))
                    },
                    GM_setValue(e, t) {
                        const {id: n} = this
                          , o = Oe(t, gt) || null
                          , r = st(n)
                          , l = r[e];
                        return r[e] = o,
                        at(n, e, t, o, l, this)
                    },
                    GM_addValueChangeListener(e, t) {
                        if (g(e) || (e = `${e}`),
                        !f(t))
                            return;
                        const n = w(lt, this.id, e)
                          , o = $(te, Y(n), t);
                        let r = o >= 0 && Q(n)[o];
                        return r || (r = M("VMvc"),
                        n[r] = t),
                        r
                    },
                    GM_removeValueChangeListener(e) {
                        const t = lt[this.id];
                        if (t) {
                            for (const n in t) {
                                const o = t[n];
                                if (e in o) {
                                    delete o[e],
                                    Se(o) && delete t[n];
                                    break
                                }
                            }
                            Se(t) && delete lt[this.id]
                        }
                    },
                    GM_getResourceText(e) {
                        return xt(this, e)
                    },
                    GM_getResourceURL: wt,
                    GM_registerMenuCommand(e, t, n) {
                        if ((n = y(n)).text = e = `${e}`,
                        !e)
                            throw new E("Menu caption text is required!");
                        const {id: o} = this
                          , r = n.id || e
                          , l = w(Te, o, r);
                        return l.cb = t,
                        l.text = e,
                        ke.post("RegisterMenu", {
                            id: o,
                            key: r,
                            val: n
                        }),
                        r
                    },
                    GM_unregisterMenuCommand(e) {
                        const {id: t} = this
                          , n = Te[t];
                        n && (n[e] || (e = Gt(e, n))) && (delete n[e],
                        ke.post("UnregisterMenu", {
                            id: t,
                            key: e
                        }))
                    },
                    GM_download(e, t) {
                        if (g(e) ? e = {
                            url: e,
                            name: t,
                            __proto__: null
                        } : e && (t = (e = y(e)).name),
                        !(t ? !g(t) && (t = "not a string") : t = "missing"))
                            return K(e, {
                                [c]: "blob",
                                data: null,
                                method: "GET",
                                overrideMimeType: "application/octet-stream"
                            }),
                            et(e, this, t);
                        tt(e, new E(`Required parameter "name" is ${t}.`))
                    },
                    GM_notification: function(e, t, n, o) {
                        var r;
                        let l, i;
                        if (p(e) ? (l = y(e),
                        e = l.text,
                        i = l.tag) : (l = C(),
                        l.text = e,
                        l.title = t,
                        l.image = n,
                        l.onclick = o),
                        !e)
                            throw new E("Notification `text` is required!");
                        const s = `${this.id}:${l.tag = null != (r = i) ? r : M()}`
                          , a = C();
                        for (const e in l)
                            a[e] = !!f(l[e]) || l[e];
                        return a.id = s,
                        rt[s] = l,
                        ke.post("Notification", a),
                        {
                            remove: ()=>ke.send("RemoveNotification", s)
                        }
                    },
                    GM_xmlhttpRequest: bt
                },
                free: {
                    __proto__: null,
                    GM_addElement: (e,t,n)=>g(e) ? Mt(null, e, t) : Mt(e, t, n),
                    GM_addStyle: e=>Mt(null, "style", {
                        textContent: e,
                        id: M("VMst")
                    }),
                    GM_openInTab: (e,t)=>((t = y(p(t) ? t : {
                        active: !t
                    })).url = e,
                    Ae(t)),
                    GM_setClipboard(e, t) {
                        ke.post("SetClipboard", {
                            data: e,
                            type: t
                        })
                    },
                    GM_log: de.log
                }
            };
            function wt(e, t) {
                return xt(this, e, !!t, void 0 === t)
            }
            function bt(e) {
                return et(y(e), this)
            }
            function Mt(e, t, n) {
                let o, r;
                if (ke.call("AddElement", {
                    tag: t,
                    attrs: n
                }, e, function(e) {
                    o = this,
                    r = e
                }, "cbId"),
                r) {
                    const e = new E(r[0]);
                    throw e.stack += `\n${r[1]}`,
                    e
                }
                return m(o, "then", async e=>delete o.then && (f(e) ? e(o) : o))
            }
            function xt(e, t, n, o) {
                let r;
                const {id: l, resCache: i, resources: s} = e
                  , a = s[t];
                if (a) {
                    const e = "data:" === $(oe, a, 0, 5)
                      , t = null == n ? 0 : 1 + (n = o ? !e : n);
                    r = e && !1 === n || w(i, t, a, !1),
                    r || (r = ke.call("GetResource", {
                        id: l,
                        isBlob: n,
                        key: a,
                        raw: e && a
                    }),
                    w(i, t, a, r))
                }
                return yt(e, !0 === r ? a : r)
            }
            function Gt(e, t) {
                for (const n in t)
                    if (t[n].text === e)
                        return n
            }
            const $t = "console"
              , Ct = j.unscopables
              , Vt = C()
              , kt = C()
              , Tt = ht()
              , Rt = (()=>{
                const n = "wrappedJSObject"
                  , o = !t
                  , i = re[0]
                  , s = $(D, l);
                let a, u, c = !e;
                for (let e = 0; e < i.length; e++) {
                    const t = i[e];
                    +t >= 0 && t < s || o && ("**VMInitInjection**" === t || "browser" === t || "chrome" === t) ? c = !1 : (Tt.set(t, 1),
                    t >= "a" && t <= "z" && (t.length < 3 || "o" !== t[0] || "n" !== t[1]) && (a = B(l, t)) && (X(a, null),
                    (a.enumerable && f(a.value) ? kt : Vt)[t] = a,
                    t === $t && p(u = a.value) && (a.value = y(u))))
                }
                return r !== l && $(V, re[1], e=>{
                    +e >= 0 && e < s || (Tt.set(e, -1),
                    c = !1)
                }
                ),
                e && !t && n in r && !Tt.get(n) && (Tt.set(n, 1),
                c && m(i, i.length, n)),
                c ? i : Tt.toArray()
            }
            )()
              , St = C()
              , Et = e=>{
                let t;
                const n = kt[e]
                  , o = n || St[e] || (t = Tt.get(e)) && B(t = t > 0 ? l : r, e);
                if (o) {
                    if (n || X(o, null),
                    n) {
                        const n = T(o.value, t === r ? r : l);
                        o.value = W(n, "name", {
                            __proto__: null,
                            value: e
                        }),
                        kt[e] = void 0,
                        Vt[e] = o
                    } else
                        +e >= 0 && e < $(D, l) || (Vt[e] = o);
                    return o
                }
            }
            ;
            function Ot(e) {
                let t = Tt;
                m(e, F, ()=>"Window", !1, "get");
                const n = C()
                  , o = new L(e,{
                    __proto__: null,
                    defineProperty(t, n, o) {
                        if (n in e || !(t = Vt[n] || Et(n)) || t.configurable)
                            return W(e, n, o)
                    },
                    deleteProperty: (n,o)=>((n = delete e[o]) && (n = Vt[o] || Et(o)) && (n = n.configurable) && (t === Tt && (t = Tt.clone()),
                    t.delete(o)),
                    !!n),
                    get: (t,r)=>{
                        if ("undefined" !== r && r !== Ct)
                            return void 0 !== (t = e[r]) || r in e ? t : Pt(e, r, o, n) && e[r]
                    }
                    ,
                    getOwnPropertyDescriptor: (t,r)=>B(e, r) || Pt(e, r, o, n),
                    has: (t,n)=>n in Vt || n in e || Et(n),
                    ownKeys: ()=>It(e, t),
                    preventExtensions() {},
                    set: (t,r,l)=>(r in e || Pt(e, r, o, n),
                    e[r] = l,
                    !0)
                });
                return o
            }
            function It(e, t) {
                const n = []
                  , o = $(D, l);
                for (let t, r = 0; r < o && h(l, t = `${r}`); r += 1)
                    t in e || G(n, t);
                return _t(n, t === Tt ? Rt : t.toArray(), $(ee, _e(e), Lt, t.get))
            }
            function Pt(e, t, n, o) {
                let r = Vt[t] || Et(t);
                if (!r)
                    return;
                const {get: i, set: s, value: a} = r;
                return a === l || "window" === t || "self" === t || "globalThis" === t || "top" === t && l === top || "parent" === t && l === $(H, l) ? (r.value = n,
                delete r.get,
                delete r.set) : i && s && "string" == typeof t && t.length >= 3 && "o" === t[0] && "n" === t[1] ? Nt(r, t, o, n) : (i && (r.get = T(i, l)),
                s && (r.set = T(s, l)),
                a && t === $t && (r.value = mt({}, a))),
                W(e, t, r),
                r
            }
            function Nt(n, o, r, i) {
                o = $(oe, o, 2),
                n.get = ()=>r[o] || null,
                n.set = n=>{
                    $(U, l, o, r[o]),
                    f(n) ? $(J, l, o, r[o] = e && t ? e=>$(n, i, e) : T(n, i)) : delete r[o]
                }
            }
            function Lt(e) {
                return !this(e)
            }
            $(V, [O, N], e=>{
                e = e[_];
                for (let t = 0, n = _e(e); t < n.length; t++) {
                    const o = n[t]
                      , r = B(e, o);
                    X(r, null),
                    (f(r.value) ? kt : St)[o] = r
                }
            }
            ),
            re = null;
            const jt = {
                __proto__: null,
                getResourceUrl: wt,
                xmlHttpRequest: bt
            }
              , At = {
                __proto__: null,
                download: 1,
                getValue: 1,
                deleteValue: 1,
                setValue: 1,
                listValues: 1
            }
              , qt = ["displayName", "id"]
              , Dt = (()=>{
                const n = "createObjectIn"
                  , o = "exportFunction"
                  , l = e && !t && r
                  , i = !l && ((e,t,n)=>(t && (t = h(t, "defineAs")) && m(e, t, n),
                n));
                return {
                    cloneInto: be || (e=>e),
                    [n]: l && l[n] || ((e,t)=>i(e, t, {})),
                    [o]: l && l[o] || ((e,t,n)=>i(t, n, e))
                }
            }
            )()
              , Ht = ()=>ke.post("TabClose")
              , Ut = ()=>ke.post("TabFocus");
            function Jt(e) {
                const {meta: t} = e
                  , {grant: n} = t
                  , o = X(t.resources, null)
                  , l = v({
                    resources: o,
                    resCache: C(),
                    async: !1
                }, e, qt)
                  , i = Ft(e.gmi, t, o)
                  , s = {
                    __proto__: null,
                    info: i
                }
                  , a = {
                    __proto__: null,
                    GM: s,
                    GM_info: i,
                    unsafeWindow: r
                };
                let u, c, d = n.length;
                1 === d && "none" === n[0] && (d = 0),
                K(a, Dt);
                for (let e = 0; e < n.length; e++) {
                    let t, o, r, i, c = n[e];
                    "GM." === $(oe, c, 0, 3) && (i = $(oe, c, 3)) && (o = jt[i]) || (t = vt.bound[r = i ? `GM_${i}` : c]) ? t = T(o || t, o || i in At ? u || (u = K(C(), l, {
                        async: !0
                    })) : l) : !(t = vt.free[r]) && (t = "window.close" === c && Ht || "window.focus" === c && Ut) && (c = $(oe, c, 7)),
                    t && (i ? s[i] = t : a[c] = t)
                }
                return d && (c = Ot(a),
                a.c = a),
                {
                    gm: a,
                    wrapper: c
                }
            }
            function Ft(e, t, n) {
                const o = Q(n);
                return $(V, o, (e,t)=>{
                    o[t] = {
                        name: e,
                        url: n[e]
                    }
                }
                ),
                t.resources = o,
                mt(e, ke.gmi),
                mt(e, {
                    injectInto: ke.mode,
                    platform: mt({}, ke.ua),
                    script: t,
                    scriptHandler: i,
                    version: "2.19.0"
                })
            }
            const Kt = C();
            function Wt(n, o) {
                if (!t)
                    return ke.mode = s,
                    ke.post = (e,t,o)=>{
                        n({
                            cmd: e,
                            data: t,
                            node: o
                        }, s)
                    }
                    ,
                    r.chrome = void 0,
                    r.browser = void 0,
                    de = o,
                    (e,t,n,o)=>{
                        ke.onHandle({
                            cmd: e,
                            data: t,
                            node: o
                        })
                    }
                    ;
                if ($(J, l, t + "*", e=>{
                    e = $(ve, e),
                    Ne(e[0], e[1], ke)
                }
                , {
                    __proto__: null,
                    once: !0,
                    capture: !0
                }),
                $(q, l, new R(t)),
                ke.mode = "page",
                he({
                    WriteVault(e) {
                        this[e] = Me
                    }
                }),
                !e) {
                    for (let e = 0; e < Ie.length; e++) {
                        const t = Ie[e];
                        de[t] = (...e)=>ke.post("Log", [t, e])
                    }
                    vt.bound.GM_log = function(...e) {
                        ke.post("Log", ["log", _t([`[${this.displayName}]`], e)])
                    }
                }
            }
            function Bt(e) {
                const t = Kt[e.name]
                  , n = $(ye, document)
                  , {gm: o, wrapper: i=r} = Jt(t);
                delete l[t.key.win],
                n && $(ne, n),
                ke.post("Run", t.id),
                $(e, i, o, de.error)
            }
            he({
                Command({id: e, key: t, evt: n}) {
                    var o;
                    null == (o = Te[e]) || null == (o = o[t]) || o.cb(new (n.key ? I : P)(n.type,n))
                },
                Callback({id: e, data: t}) {
                    if ("Error" === e)
                        throw t;
                    const n = xe[e];
                    delete xe[e],
                    n && $(n, this, t)
                },
                async Plant({data: e, win: t}) {
                    m(l, t, Bt, !0, "set"),
                    await 0,
                    delete Kt[e],
                    delete l[t]
                },
                ScriptData({info: n, items: o}) {
                    n && K(ke, n);
                    const r = [];
                    for (let e = 0; e < o.length; e++) {
                        const n = o[e]
                          , {key: i} = n;
                        if (Kt[i.data] = n,
                        Re[n.id] = X(n.values || {}, null),
                        !t) {
                            const e = i.win
                              , t = l[e];
                            t ? (G(r, t),
                            delete l[e]) : W(l, e, {
                                __proto__: null,
                                configurable: !0,
                                set: Bt
                            })
                        }
                    }
                    t ? e && ke.post("InjectList", o[0].runAt) : $(V, r, Bt)
                },
                Expose(e) {
                    const t = "external"
                      , n = l[t];
                    (p(n) ? n : l[t] = {})[i] = {
                        version: "2.19.0",
                        isInstalled: (t,n)=>e ? ke.send("GetScriptVer", {
                            meta: {
                                name: t,
                                namespace: n
                            }
                        }) : b()
                    }
                }
            }),
            o.exports = z
        }
        )();
        const {exports: xe} = o;
        return xe.__esModule ? xe.default : xe
    }
    )
}
