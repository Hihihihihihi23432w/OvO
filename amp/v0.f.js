self.AMP_CONFIG = {
    "v": "012209142312000",
    "type": "production",
    "allow-doc-opt-in": ["amp-next-page"],
    "allow-url-opt-in": [],
    "canary": 0,
    "a4aProfilingRate": 0.01,
    "doubleclickSraExp": 0.01,
    "doubleclickSraReportExcludedBlock": 0.1,
    "flexAdSlots": 0.05,
    "flexible-bitrate": 0.1,
    "ios-fixed-no-transfer": 0,
    "story-ad-placements": 0.01,
    "story-disable-animations-first-page": 1,
    "story-load-inactive-outside-viewport": 1,
    "amp-sticky-ad-to-amp-ad-v4": 0,
    "story-video-cache-apply-audio": 0,
    "amp-story-subscriptions": 1
};
/*AMP_CONFIG*/
self.AMP_EXP = {
    "flexible-bitrate": 0.1,
    "amp-story-first-page-max-bitrate": 0.3,
    "story-disable-animations-first-page": 1,
    "story-load-first-page-only": 1,
    "story-load-inactive-outside-viewport": 1,
    "story-ad-page-outlink": 0.02,
    "amp-geo-ssr": 1,
    "story-remote-localization": 1,
    "amp-story-subscriptions": 1
};
/*AMP_EXP*/
;self,
self.AMP = self.AMP || [];
try {
    AMP._ = AMP._ || {},
    self.AMP && !Array.isArray(self.AMP) || function() {
        function t(t, i) {
            for (var n = 0; n < i.length; n++) {
                var r = i[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function i(i, n, r) {
            return n && t(i.prototype, n),
            r && t(i, r),
            i
        }
        var n, r = function() {
            function t() {
                this.ti = new e
            }
            return t.prototype.abort = function() {
                if (!this.ti.ii && (this.ti.ii = !0,
                this.ti.ni)) {
                    var t = {
                        "type": "abort",
                        "bubbles": !1,
                        "cancelable": !1,
                        "target": this.ti,
                        "currentTarget": this.ti
                    };
                    this.ti.ni(t)
                }
            }
            ,
            i(t, [{
                key: "signal",
                get: function() {
                    return this.ti
                }
            }]),
            t
        }(), e = function() {
            function t() {
                this.ii = !1,
                this.ni = null
            }
            return i(t, [{
                key: "aborted",
                get: function() {
                    return this.ii
                }
            }, {
                key: "onabort",
                get: function() {
                    return this.ni
                },
                set: function(t) {
                    this.ni = t
                }
            }]),
            t
        }();
        function s(t, i) {
            for (var n = i || 0, r = this.length, e = n >= 0 ? n : Math.max(r + n, 0); e < r; e++) {
                var s = this[e];
                if (s === t || t != t && s != s)
                    return !0
            }
            return !1
        }
        function u(t, i) {
            (null == i || i > t.length) && (i = t.length);
            for (var n = 0, r = new Array(i); n < i; n++)
                r[n] = t[n];
            return r
        }
        function o(t, i) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (n)
                return (n = n.call(t)).next.bind(n);
            if (Array.isArray(t) || (n = function(t, i) {
                if (t) {
                    if ("string" == typeof t)
                        return u(t, i);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, i) : void 0
                }
            }(t)) || i && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0;
                return function() {
                    return r >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[r++]
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function h() {
            return n || (n = Promise.resolve(void 0))
        }
        var a = function() {
            var t = this;
            this.promise = new Promise((function(i, n) {
                t.resolve = i,
                t.reject = n
            }
            ))
        };
        function c(t) {
            return new Promise((function(i) {
                i(t())
            }
            ))
        }
        function f(t) {
            var i = Object.getOwnPropertyDescriptor(t, "message");
            if (null != i && i.writable)
                return t;
            var n = t.message
              , r = t.stack
              , e = new Error(n);
            for (var s in t)
                e[s] = t[s];
            return e.stack = r,
            e
        }
        function l(t) {
            for (var i, n = null, r = "", e = o(arguments, !0); !(i = e()).done; ) {
                var s = i.value;
                s instanceof Error && !n ? n = f(s) : (r && (r += " "),
                r += s)
            }
            return n ? r && (n.message = r + ": " + n.message) : n = new Error(r),
            n
        }
        function v(t) {
            var i, n;
            null === (i = (n = self).__AMP_REPORT_ERROR) || void 0 === i || i.call(n, t)
        }
        function d(t) {
            var i = l.apply(null, arguments);
            setTimeout((function() {
                throw v(i),
                i
            }
            ))
        }
        function m(t) {
            var i = l.apply(null, arguments);
            return i.expected = !0,
            i
        }
        function p(t) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        var g = Object.prototype
          , b = g.hasOwnProperty
          , y = g.toString;
        function w(t) {
            return "[object Object]" === y.call(t)
        }
        function A(t) {
            var i = Object.create(null);
            return t && Object.assign(i, t),
            i
        }
        function x(t, i) {
            return b.call(t, i)
        }
        function E(t) {
            var i = A();
            for (var n in t)
                if (x(t, n)) {
                    var r = t[n];
                    i[n] = w(r) ? E(r) : r
                }
            return i
        }
        var P = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/
          , O = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"]
          , I = {
            "childList": !0,
            "subtree": !0
        };
        function M(t, i) {
            if (!P.test(i) || O.includes(i))
                throw new t('invalid custom element name "'.concat(i, '"'))
        }
        var T = function() {
            function t(t, i) {
                this.t = t,
                this.on = i,
                this.bn = A()
            }
            var i = t.prototype;
            return i.define = function(t, i, n) {
                this.on.define(t, i, n);
                var r = this.bn
                  , e = r[t];
                e && (e.resolve(),
                delete r[t])
            }
            ,
            i.get = function(t) {
                var i = this.on.getByName(t);
                if (i)
                    return i.ctor
            }
            ,
            i.whenDefined = function(t) {
                var i = this.t;
                if (i.Promise,
                M(i.SyntaxError, t),
                this.on.getByName(t))
                    return h();
                var n = this.bn
                  , r = n[t];
                return r || (r = new a,
                n[t] = r),
                r.promise
            }
            ,
            i.upgrade = function(t) {
                this.on.upgrade(t)
            }
            ,
            t
        }()
          , S = function() {
            function t(t) {
                this.t = t,
                this.wn = A(),
                this.gn = "",
                this.On = null,
                this._n = null,
                this.Sn = [t.document]
            }
            var i = t.prototype;
            return i.current = function() {
                var t = this.On;
                return this.On = null,
                t
            }
            ,
            i.getByName = function(t) {
                var i = this.wn[t];
                if (i)
                    return i
            }
            ,
            i.getByConstructor = function(t) {
                var i = this.wn;
                for (var n in i) {
                    var r = i[n];
                    if (r.ctor === t)
                        return r
                }
            }
            ,
            i.define = function(t, i, n) {
                var r = this.t
                  , e = r.Error
                  , s = r.SyntaxError;
                if (n)
                    throw new e("Extending native custom elements is not supported");
                if (M(s, t),
                this.getByName(t) || this.getByConstructor(i))
                    throw new e('duplicate definition "'.concat(t, '"'));
                this.wn[t] = {
                    name: t,
                    ctor: i
                },
                this.kn(t);
                for (var u, h = o(this.Sn, !0); !(u = h()).done; ) {
                    var a = u.value;
                    this.upgrade(a, t)
                }
            }
            ,
            i.upgrade = function(t, i) {
                for (var n, r = !!i, e = i || this.gn, s = o(this.Pn(t, e), !0); !(n = s()).done; ) {
                    var u = n.value;
                    r ? this.An(u) : this.upgradeSelf(u)
                }
            }
            ,
            i.upgradeSelf = function(t) {
                var i = this.getByName(t.localName);
                i && this.Mn(t, i)
            }
            ,
            i.Pn = function(t, i) {
                return i && t.querySelectorAll ? t.querySelectorAll(i) : []
            }
            ,
            i.Mn = function(t, i) {
                var n = i.ctor;
                if (!(t instanceof n)) {
                    this.On = t;
                    try {
                        if (new n !== t)
                            throw new this.t.Error("Constructor illegally returned a different instance.")
                    } catch (t) {
                        d(t)
                    }
                }
            }
            ,
            i.An = function(t) {
                var i = this.getByName(t.localName);
                if (i && (t = t,
                this.Mn(t, i),
                t.connectedCallback))
                    try {
                        t.connectedCallback()
                    } catch (t) {
                        d(t)
                    }
            }
            ,
            i.zn = function(t) {
                if ((t = t).disconnectedCallback)
                    try {
                        t.disconnectedCallback()
                    } catch (t) {
                        d(t)
                    }
            }
            ,
            i.kn = function(t) {
                var i = this;
                if (this.gn)
                    this.gn += ",".concat(t);
                else {
                    this.gn = t;
                    var n = new this.t.MutationObserver((function(t) {
                        t && i.Cn(t)
                    }
                    ));
                    this._n = n;
                    for (var r, e = o(this.Sn, !0); !(r = e()).done; ) {
                        var s = r.value;
                        n.observe(s, I)
                    }
                    !function(t, i) {
                        var n, r = t.Document, e = t.Element, s = t.Node, u = t.document, o = r.prototype, h = e.prototype, a = s.prototype, c = o.createElement, f = o.importNode, l = a.appendChild, v = a.cloneNode, d = a.insertBefore, m = a.removeChild, p = a.replaceChild;
                        o.createElement = function(t) {
                            var n = i.getByName(t);
                            return n ? new n.ctor : c.apply(this, arguments)
                        }
                        ,
                        o.importNode = function() {
                            var t = f.apply(this, arguments);
                            return t && this === u && (i.upgradeSelf(t),
                            i.upgrade(t)),
                            t
                        }
                        ,
                        a.appendChild = function() {
                            var t = l.apply(this, arguments);
                            return i.sync(),
                            t
                        }
                        ,
                        a.insertBefore = function() {
                            var t = d.apply(this, arguments);
                            return i.sync(),
                            t
                        }
                        ,
                        a.removeChild = function() {
                            var t = m.apply(this, arguments);
                            return i.sync(),
                            t
                        }
                        ,
                        a.replaceChild = function() {
                            var t = p.apply(this, arguments);
                            return i.sync(),
                            t
                        }
                        ,
                        a.cloneNode = function() {
                            var t = v.apply(this, arguments);
                            return t.ownerDocument === u && (i.upgradeSelf(t),
                            i.upgrade(t)),
                            t
                        }
                        ;
                        var g = h
                          , b = Object.getOwnPropertyDescriptor(g, "innerHTML");
                        if (b || (g = Object.getPrototypeOf(t.HTMLElement.prototype),
                        b = Object.getOwnPropertyDescriptor(g, "innerHTML")),
                        null !== (n = b) && void 0 !== n && n.configurable) {
                            var y = b.set;
                            b.set = function(t) {
                                y.call(this, t),
                                i.upgrade(this)
                            }
                            ,
                            Object.defineProperty(g, "innerHTML", b)
                        }
                    }(this.t, this)
                }
            }
            ,
            i.observe = function(t) {
                this.Sn.push(t),
                this._n && this._n.observe(t, I)
            }
            ,
            i.sync = function() {
                this._n && this.Cn(this._n.takeRecords())
            }
            ,
            i.Cn = function(t) {
                for (var i, n = o(t, !0); !(i = n()).done; ) {
                    var r = i.value;
                    if (r) {
                        for (var e, s = r.addedNodes, u = r.removedNodes, h = o(s, !0); !(e = h()).done; ) {
                            var a = e.value
                              , c = this.Pn(a, this.gn);
                            this.An(a);
                            for (var f, l = o(c, !0); !(f = l()).done; ) {
                                var v = f.value;
                                this.An(v)
                            }
                        }
                        for (var d, m = o(u, !0); !(d = m()).done; ) {
                            var p = d.value
                              , g = this.Pn(p, this.gn);
                            this.zn(p);
                            for (var b, y = o(g, !0); !(b = y()).done; ) {
                                var w = b.value;
                                this.zn(w)
                            }
                        }
                    }
                }
            }
            ,
            t
        }();
        function R(t, i) {
            i.prototype = Object.create(t.prototype, {
                constructor: {
                    configurable: !0,
                    writable: !0,
                    value: i
                }
            }),
            _(i, t)
        }
        function _(t, i) {
            Object.setPrototypeOf ? Object.setPrototypeOf(t, i) : {
                __proto__: {
                    "test": !0
                }
            }.test ? t.__proto__ = i : function(t, i) {
                for (var n = i; null !== n && !Object.isPrototypeOf.call(n, t); ) {
                    for (var r, e = o(Object.getOwnPropertyNames(n), !0); !(r = e()).done; ) {
                        var s = r.value;
                        if (!Object.hasOwnProperty.call(t, s)) {
                            var u = Object.getOwnPropertyDescriptor(n, s);
                            Object.defineProperty(t, s, u)
                        }
                    }
                    n = Object.getPrototypeOf(n)
                }
            }(t, i)
        }
        function k(t) {
            return t == this || this.documentElement.contains(t)
        }
        function C(t, i, n) {
            return i in t ? Object.defineProperty(t, i, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[i] = n,
            t
        }
        function N(t, i) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                i && (r = r.filter((function(i) {
                    return Object.getOwnPropertyDescriptor(t, i).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function D(t) {
            for (var i = 1; i < arguments.length; i++) {
                var n = null != arguments[i] ? arguments[i] : {};
                i % 2 ? N(Object(n), !0).forEach((function(i) {
                    C(t, i, n[i])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(i) {
                    Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i))
                }
                ))
            }
            return t
        }
        function j(t, i) {
            return (j = Object.setPrototypeOf || function(t, i) {
                return t.__proto__ = i,
                t
            }
            )(t, i)
        }
        function U(t, i) {
            if ("function" != typeof i && null !== i)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(i && i.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            i && j(t, i)
        }
        function L(t) {
            return (L = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        function z(t, i) {
            if (i && ("object" === p(i) || "function" == typeof i))
                return i;
            if (void 0 !== i)
                throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }
        function H(t) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = L(t);
                if (i) {
                    var e = L(this).constructor;
                    n = Reflect.construct(r, arguments, e)
                } else
                    n = r.apply(this, arguments);
                return z(this, n)
            }
        }
        function G(t) {
            return t ? Array.prototype.slice.call(t) : []
        }
        var V = Array.isArray;
        function F(t) {
            return V(t) ? t : [t]
        }
        function q(t, i) {
            for (var n = [], r = 0, e = 0; e < t.length; e++) {
                var s = t[e];
                i(s, e, t) ? n.push(s) : (r < e && (t[r] = s),
                r++)
            }
            return r < t.length && (t.length = r),
            n
        }
        function B(t, i) {
            for (var n = 0; n < t.length; n++)
                if (i(t[n], n, t))
                    return n;
            return -1
        }
        function $(t, i) {
            var n = t.indexOf(i);
            return -1 != n && (t.splice(n, 1),
            !0)
        }
        function W(t, i) {
            var n = t.length - i.length;
            return n >= 0 && t.indexOf(i, n) == n
        }
        function Y(t) {
            return "string" == typeof t
        }
        function K(t) {
            return 1 == (null == t ? void 0 : t.nodeType)
        }
        function J(t) {
            return "number" == typeof t && isFinite(t)
        }
        var X = "​​​"
          , Q = "​​​​";
        function Z(t) {
            return K(t) ? (t = t).tagName.toLowerCase() + (t.id ? "#".concat(t.id) : "") : t
        }
        function tt(t) {
            return t.indexOf(X) >= 0
        }
        function it(t) {
            return t.replace(X, "")
        }
        function nt(t, i) {
            var n, r, e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Assertion failed";
            if (i)
                return i;
            t && -1 == e.indexOf(t) && (e += t);
            for (var s = 3, u = e.split("%s"), o = u.shift(), h = [o]; u.length; ) {
                var a = arguments[s++]
                  , c = u.shift();
                o += Z(a) + c,
                h.push(a, c.trim())
            }
            var f = new Error(o);
            throw f.messageArray = q(h, (function(t) {
                return "" !== t
            }
            )),
            null === (n = (r = self).__AMP_REPORT_ERROR) || void 0 === n || n.call(r, f),
            f
        }
        function rt(t, i, n, r, e) {
            return V(e) ? t(n, e.concat([i])) : t(n, "".concat(e || r, ": %s"), i),
            i
        }
        function et(t, i, n, r, e, s, u, o, h, a, c) {
            return t
        }
        function st(t, i) {
            return t
        }
        function ut(t, i) {
            return t
        }
        function ot(t, i) {
            return t
        }
        function ht(t, i, n, r, e, s, u, o, h, a, c) {
            return nt(X, t, i, n, r, e, s, u, o, h, a, c)
        }
        function at(t) {
            return JSON.parse(t)
        }
        function ct(t) {
            return "undefined" != typeof TextEncoder ? (new TextEncoder).encode(t) : ft(unescape(encodeURIComponent(t)))
        }
        function ft(t) {
            for (var i = new Uint8Array(t.length), n = 0; n < t.length; n++) {
                var r = t.charCodeAt(n);
                et(r <= 255),
                i[n] = r
            }
            return i
        }
        function lt(t, i) {
            var n = t.crypto;
            if (!(n = n || t.msCrypto) || !n.getRandomValues)
                return null;
            var r = new Uint8Array(i);
            return n.getRandomValues(r),
            r
        }
        function vt(t) {
            var i = !1
              , n = null
              , r = t;
            return function() {
                if (!i) {
                    for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
                        e[s] = arguments[s];
                    n = r.apply(self, e),
                    i = !0,
                    r = null
                }
                return n
            }
        }
        function dt(t, i, n) {
            var r = 0
              , e = null;
            function s(s) {
                e = null,
                r = t.setTimeout(u, n),
                i.apply(null, s)
            }
            function u() {
                r = 0,
                e && s(e)
            }
            return function() {
                for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
                    i[n] = arguments[n];
                r ? e = i : s(i)
            }
        }
        function mt(t, i, n) {
            var r = 0
              , e = 0
              , s = null;
            function u() {
                r = 0;
                var o, h = n - (t.Date.now() - e);
                h > 0 ? r = t.setTimeout(u, h) : (o = s,
                s = null,
                i.apply(null, o))
            }
            return function() {
                e = t.Date.now();
                for (var i = arguments.length, o = new Array(i), h = 0; h < i; h++)
                    o[h] = arguments[h];
                s = o,
                r || (r = t.setTimeout(u, n))
            }
        }
        var pt = ["javascript:", "data:", "vbscript:"]
          , gt = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
        function bt(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            try {
                return decodeURIComponent(t)
            } catch (t) {
                return i
            }
        }
        function yt(t) {
            var i, n = A();
            if (!t)
                return n;
            for (; i = gt.exec(t); ) {
                var r = bt(i[1], i[1])
                  , e = i[2] ? bt(i[2].replace(/\+/g, " "), i[2]) : "";
                n[r] = e
            }
            return n
        }
        function wt(t) {
            var i = (t || self).location;
            return yt(i.originalHash || i.hash)
        }
        var At = function(t) {
            return self.AMP_CONFIG ? self.AMP_CONFIG[t] : null
        }
          , xt = ("string" == typeof At("cdnProxyRegex") ? new RegExp(At("cdnProxyRegex")) : At("cdnProxyRegex")) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
        function Et(t) {
            if (!self.document || !self.document.head)
                return null;
            if (self.location && xt.test(self.location.origin))
                return null;
            var i = self.document.head.querySelector('meta[name="'.concat(t, '"]'));
            return i && i.getAttribute("content") || null
        }
        var Pt = At("thirdPartyUrl") || "https://3p.ampproject.net"
          , Ot = At("thirdPartyFrameHost") || "ampproject.net"
          , It = ("string" == typeof At("thirdPartyFrameRegex") ? new RegExp(At("thirdPartyFrameRegex")) : At("thirdPartyFrameRegex")) || /^d-\d+\.ampproject\.net$/
          , Mt = At("cdnUrl") || Et("runtime-host") || "https://cdn.ampproject.org"
          , Tt = /^https?:\/\/localhost(:\d+)?$/
          , St = At("errorReportingUrl") || "https://us-central1-amp-error-reporting.cloudfunctions.net/r"
          , Rt = At("betaErrorReportingUrl") || "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta"
          , _t = At("localDev") || !1
          , kt = [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/]
          , Ct = At("geoApiUrl") || Et("amp-geo-api")
          , Nt = "";
        function Dt(t) {
            var i = t || self;
            return i.__AMP_MODE ? i.__AMP_MODE : i.__AMP_MODE = function(t) {
                return {
                    localDev: !1,
                    development: Ut(t, wt(t)),
                    esm: !1,
                    test: !1,
                    rtvVersion: jt(t),
                    ssrReady: !1
                }
            }(i)
        }
        function jt(t) {
            var i;
            return Nt || (Nt = (null === (i = t.AMP_CONFIG) || void 0 === i ? void 0 : i.v) || "01".concat("2209142312000")),
            Nt
        }
        function Ut(t, i) {
            var n = i || wt(t);
            return ["1", "actions", "amp", "amp4ads", "amp4email"].includes(n.development) || !!t.AMP_DEV_MODE
        }
        var Lt = function() {}
          , zt = void 0;
        function Ht(t) {
            zt = t
        }
        var Gt = function() {
            return "01".concat("2209142312000")
        }
          , Vt = function(t, i) {
            return i.reduce((function(t, i) {
                return "".concat(t, "&s[]=").concat(qt(i))
            }
            ), "https://log.amp.dev/?v=".concat(Gt(), "&id=").concat(encodeURIComponent(t)))
        }
          , Ft = function() {
            return "".concat(Mt, "/rtv/").concat(Gt(), "/log-messages.simple.json")
        }
          , qt = function(t) {
            return encodeURIComponent(String(Z(t)))
        }
          , Bt = function(t) {
            return parseInt(wt(t).log, 10)
        }
          , $t = function() {
            function t(t, i) {
                var n = this
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                this.win = t,
                this.U = i,
                this.N = this.L(),
                this.T = r,
                this.D = null,
                this.F = vt((function() {
                    t.fetch(Ft()).then((function(t) {
                        return t.json()
                    }
                    ), Lt).then((function(t) {
                        t && (n.D = t)
                    }
                    ))
                }
                )),
                this.$ = this.assert.bind(this)
            }
            var i = t.prototype;
            return i.L = function() {
                var t, i = this.win;
                return null !== (t = i.console) && void 0 !== t && t.log && 0 != Bt(i) ? this.Z() : 0
            }
            ,
            i.Z = function(t) {
                return this.U(Bt(t), Dt().development)
            }
            ,
            i.B = function(t, i, n) {
                var r, e, s;
                if (i > (null !== (r = zt) && void 0 !== r ? r : this.N))
                    return !1;
                var u = this.win.console
                  , o = null !== (e = (s = {},
                C(s, 1, u.error),
                C(s, 3, u.info),
                C(s, 2, u.warn),
                s)[i]) && void 0 !== e ? e : u.log
                  , h = this.V(n)
                  , a = "[".concat(t, "]");
                return Y(h[0]) ? h[0] = a + " " + h[0] : h.unshift(a),
                o.apply(u, h),
                !0
            }
            ,
            i.fine = function(t) {
                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)
                    n[r - 1] = arguments[r];
                this.B(t, 4, n)
            }
            ,
            i.info = function(t) {
                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)
                    n[r - 1] = arguments[r];
                this.B(t, 3, n)
            }
            ,
            i.warn = function(t) {
                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)
                    n[r - 1] = arguments[r];
                this.B(t, 2, n)
            }
            ,
            i.error = function(t) {
                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)
                    n[r - 1] = arguments[r];
                if (!this.B(t, 1, n)) {
                    var e, s, u = this.createError.apply(this, n);
                    u.name = t || u.name,
                    null === (e = (s = self).__AMP_REPORT_ERROR) || void 0 === e || e.call(s, u)
                }
            }
            ,
            i.expectedError = function(t) {
                for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)
                    n[r - 1] = arguments[r];
                var e, s;
                this.B(t, 1, n) || null === (e = (s = self).__AMP_REPORT_ERROR) || void 0 === e || e.call(s, this.createExpectedError.apply(this, n))
            }
            ,
            i.createError = function(t) {
                return this.W(l.apply(null, arguments))
            }
            ,
            i.createExpectedError = function(t) {
                return this.W(m.apply(null, arguments))
            }
            ,
            i.W = function(t) {
                return t = f(t),
                this.T ? t.message ? -1 == t.message.indexOf(this.T) && (t.message += this.T) : t.message = this.T : tt(t.message) && (t.message = it(t.message)),
                t
            }
            ,
            i.V = function(t) {
                return V(t[0]) ? this.X(t[0]) : t
            }
            ,
            i.X = function(t) {
                var i, n = t.shift();
                return Dt(this.win).development && this.F(),
                null !== (i = this.D) && void 0 !== i && i[n] ? [this.D[n]].concat(t) : ["More info at ".concat(Vt(n, t))]
            }
            ,
            i.assert = function(t, i, n) {
                return V(i) ? this.assert.apply(this, [t].concat(this.X(i))) : nt.apply(null, [this.T].concat(Array.prototype.slice.call(arguments)))
            }
            ,
            i.assertElement = function(t, i) {
                return function(t, i, n) {
                    return rt(t, i, K(i), "Element expected", n)
                }(this.$, t, i)
            }
            ,
            i.assertString = function(t, i) {
                return function(t, i, n) {
                    return rt(t, i, Y(i), "String expected", n)
                }(this.$, t, i)
            }
            ,
            i.assertNumber = function(t, i) {
                return function(t, i, n) {
                    return rt(t, i, "number" == typeof i, "Number expected", n)
                }(this.$, t, i)
            }
            ,
            i.assertArray = function(t, i) {
                return function(t, i, n) {
                    return rt(t, i, V(i), "Array expected", n)
                }(this.$, t, i)
            }
            ,
            i.assertBoolean = function(t, i) {
                return function(t, i, n) {
                    return rt(t, i, !!i === i, "Boolean expected", n)
                }(this.$, t, i)
            }
            ,
            t
        }();
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var Wt = self.__AMP_LOG
          , Yt = null;
        function Kt(t, i) {
            if (!Yt)
                throw new Error("failed to call initLogConstructor");
            return new Yt(self,t,i)
        }
        function Jt(t) {
            return Wt.user || (Wt.user = Xt(X)),
            function(t, i) {
                return i && i.ownerDocument.defaultView != t
            }(Wt.user.win, t) ? Wt.userForEmbed || (Wt.userForEmbed = Xt(Q)) : Wt.user
        }
        function Xt(t) {
            return Kt((function(t, i) {
                return i || t >= 1 ? 4 : 2
            }
            ), t)
        }
        function Qt() {
            return Wt.dev || (Wt.dev = Kt((function(t) {
                return t >= 3 ? 4 : t >= 2 ? 3 : 0
            }
            )))
        }
        function Zt(t, i, n, r, e, s, u, o, h, a, c) {
            return t
        }
        function ti(t, i, n, r, e, s, u, o, h, a, c) {
            return Jt().assert(t, i, n, r, e, s, u, o, h, a, c)
        }
        var ii = ["GET", "POST"];
        function ni(t, i) {
            var n = new XMLHttpRequest;
            if (!("withCredentials"in n))
                throw Qt().createExpectedError("CORS is not supported");
            return n.open(t, i, !0),
            n
        }
        var ri = function() {
            function t(t) {
                this.ri = t,
                this.status = this.ri.status,
                this.statusText = this.ri.statusText,
                this.ok = this.status >= 200 && this.status < 300,
                this.headers = new si(t),
                this.bodyUsed = !1,
                this.body = null,
                this.url = t.responseURL
            }
            var i = t.prototype;
            return i.clone = function() {
                return et(!this.bodyUsed),
                new t(this.ri)
            }
            ,
            i.ei = function() {
                return et(!this.bodyUsed),
                this.bodyUsed = !0,
                Promise.resolve(this.ri.responseText)
            }
            ,
            i.text = function() {
                return this.ei()
            }
            ,
            i.json = function() {
                return this.ei().then(at)
            }
            ,
            i.arrayBuffer = function() {
                return this.ei().then(ct)
            }
            ,
            t
        }();
        function ei(t) {
            return void 0 === t ? "GET" : (t = t.toUpperCase(),
            et(ii.includes(t)),
            t)
        }
        var si = function() {
            function t(t) {
                this.ri = t
            }
            var i = t.prototype;
            return i.get = function(t) {
                return this.ri.getResponseHeader(t)
            }
            ,
            i.has = function(t) {
                return null != this.ri.getResponseHeader(t)
            }
            ,
            t
        }()
          , ui = function(t) {
            U(n, t);
            var i = H(n);
            function n(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = A()
                  , e = D({
                    status: 200,
                    statusText: "OK",
                    responseText: t ? String(t) : "",
                    getResponseHeader: function(t) {
                        var i = String(t).toLowerCase();
                        return x(r, i) ? r[i] : null
                    }
                }, n);
                if (e.status = void 0 === n.status ? 200 : parseInt(n.status, 10),
                V(n.headers))
                    n.headers.forEach((function(t) {
                        var i = t[0]
                          , n = t[1];
                        r[String(i).toLowerCase()] = String(n)
                    }
                    ));
                else if (w(n.headers))
                    for (var s in n.headers)
                        r[String(s).toLowerCase()] = String(n.headers[s]);
                return n.statusText && (e.statusText = String(n.statusText)),
                i.call(this, e)
            }
            return n
        }(ri);
        function oi(t) {
            return (t.ownerDocument || t).defaultView
        }
        var hi, ai = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;
        function ci(t, i, n, r, e) {
            return e || (i ? "�" : r ? t.slice(0, -1) + "\\" + t.slice(-1).charCodeAt(0).toString(16) + " " : "\\" + t)
        }
        function fi(t) {
            return void 0 !== hi ? hi : hi = function(t) {
                try {
                    var i = t.ownerDocument
                      , n = i.createElement("div")
                      , r = i.createElement("div");
                    return n.appendChild(r),
                    n.querySelector(":scope div") === r
                } catch (t) {
                    return !1
                }
            }(t)
        }
        function li(t, i) {
            return t.replace(/^|,/g, "$&".concat(i, " "))
        }
        function vi(t) {
            return String(t).replace(ai, ci)
        }
        function di(t) {
            et(/^[\w-]+$/.test(t))
        }
        function mi(t, i) {
            var n = t.classList
              , r = "i-amphtml-scoped";
            n.add(r);
            var e = li(i, ".".concat(r))
              , s = t.querySelectorAll(e);
            return n.remove(r),
            s
        }
        function pi(t, i) {
            if (fi(t))
                return t.querySelector(li(i, ":scope"));
            var n = mi(t, i)[0];
            return void 0 === n ? null : n
        }
        function gi(t, i) {
            var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector;
            return !!n && n.call(t, i)
        }
        function bi(t, i, n) {
            var r;
            for (r = t; r && r !== n; r = r.parentElement)
                if (i(r))
                    return r;
            return null
        }
        function yi(t, i) {
            return t.closest ? t.closest(i) : bi(t, (function(t) {
                return gi(t, i)
            }
            ))
        }
        function wi(t, i) {
            for (var n = t.lastElementChild; n; n = n.previousElementSibling)
                if (i(n))
                    return n;
            return null
        }
        function Ai(t, i) {
            return di(i),
            pi(t, "> [".concat(i, "]"))
        }
        function xi(t) {
            return Y(i = t) ? n = i : K(i) && (n = i.tagName),
            !(!n || !n.toLowerCase().startsWith("i-")) || t.nodeType === Node.ELEMENT_NODE && (st(t),
            t.hasAttribute("placeholder") || t.hasAttribute("fallback") || t.hasAttribute("overflow"));
            var i, n
        }
        var Ei, Pi = {
            bubbles: !0,
            cancelable: !0
        };
        function Oi(t, i, n) {
            if (i(t))
                n();
            else {
                var r = oi(t);
                if (r.MutationObserver) {
                    var e = new r.MutationObserver((function() {
                        i(t) && (e.disconnect(),
                        n())
                    }
                    ));
                    e.observe(t, {
                        childList: !0
                    })
                } else
                    var s = r.setInterval((function() {
                        i(t) && (r.clearInterval(s),
                        n())
                    }
                    ), 5)
            }
        }
        function Ii(t, i) {
            Oi(t.documentElement, (function() {
                return !!t.body
            }
            ), i)
        }
        function Mi(t) {
            return new Promise((function(i) {
                return Ii(t, i)
            }
            ))
        }
        function Ti(t) {
            var i;
            null === (i = t.parentElement) || void 0 === i || i.removeChild(t)
        }
        function Si(t, i) {
            t.insertBefore(i, t.firstChild)
        }
        function Ri(t) {
            var i = t.isConnected;
            if (void 0 !== i)
                return i;
            for (var n = t; (n = _i(n)).host; )
                n = n.host;
            return n.nodeType === Node.DOCUMENT_NODE
        }
        function _i(t) {
            if (Node.prototype.getRootNode)
                return t.getRootNode();
            var i, n;
            for (i = t; i.parentNode && (!(n = i) || "I-AMPHTML-SHADOW-ROOT" != n.tagName && (11 != n.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(n))); i = i.parentNode)
                ;
            return i
        }
        function ki(t, i) {
            var n = t;
            do {
                if (n.nextSibling)
                    return !0
            } while ((n = n.parentNode) && n != i);
            return !1
        }
        function Ci(t) {
            try {
                t.focus()
            } catch (t) {}
        }
        function Ni(t) {
            return t.parent && t.parent != t
        }
        function Di(t, i, n, r) {
            var e = n || {};
            et(t.ownerDocument);
            var s = t.ownerDocument.createEvent("Event");
            s.data = e;
            var u = r || Pi
              , o = u.bubbles
              , h = u.cancelable;
            s.initEvent(i, o, h),
            t.dispatchEvent(s)
        }
        function ji(t, i) {
            return i !== t && t.contains(i)
        }
        function Ui(t) {
            return t.hasAttribute("i-amphtml-ssr")
        }
        function Li(t, i) {
            var n = t.head.querySelector("script[nonce]");
            if (n) {
                var r = n.nonce || n.getAttribute("nonce");
                i.setAttribute("nonce", null != r ? r : "")
            }
        }
        function zi(t, i, n, r) {
            return {
                left: t,
                top: i,
                width: n,
                height: r,
                bottom: i + r,
                right: t + n,
                x: t,
                y: i
            }
        }
        function Hi(t, i, n) {
            return zi(t.left - t.width * i, t.top - t.height * n, t.width * (1 + 2 * i), t.height * (1 + 2 * n))
        }
        function Gi(t, i, n) {
            return 0 == i && 0 == n || 0 == t.width && 0 == t.height ? t : zi(t.left + i, t.top + n, t.width, t.height)
        }
        function Vi() {
            return Ri(this) ? Ei.call(this) : zi(0, 0, 0, 0)
        }
        function Fi(t) {
            return !t.IntersectionObserver || !t.IntersectionObserverEntry || !!t.IntersectionObserver._stub || !function(t) {
                try {
                    return new t.IntersectionObserver((function() {}
                    ),{
                        root: t.document
                    }),
                    !0
                } catch (t) {
                    return !1
                }
            }(t) || function(t) {
                return /apple/i.test(t.navigator.vendor)
            }(t)
        }
        var qi = function() {
            function t(i, n) {
                this.it = i,
                this.si = D({
                    root: null,
                    rootMargin: "0px 0px 0px 0px"
                }, n),
                this.oi = [],
                this.ui = null,
                t._upgraders.push(this.hi.bind(this))
            }
            var n = t.prototype;
            return n.disconnect = function() {
                this.ui ? this.ui.disconnect() : this.oi.length = 0
            }
            ,
            n.takeRecords = function() {
                return this.ui ? this.ui.takeRecords() : []
            }
            ,
            n.observe = function(t) {
                this.ui ? this.ui.observe(t) : -1 == this.oi.indexOf(t) && this.oi.push(t)
            }
            ,
            n.unobserve = function(t) {
                if (this.ui)
                    this.ui.unobserve(t);
                else {
                    var i = this.oi.indexOf(t);
                    -1 != i && this.oi.splice(i, 1)
                }
            }
            ,
            n.hi = function(t) {
                var i = new t(this.it,this.si);
                this.ui = i;
                for (var n, r = o(this.oi, !0); !(n = r()).done; ) {
                    var e = n.value;
                    i.observe(e)
                }
                this.oi.length = 0
            }
            ,
            i(t, [{
                key: "root",
                get: function() {
                    return this.ui ? this.ui.root : this.si.root || null
                }
            }, {
                key: "rootMargin",
                get: function() {
                    return this.ui ? this.ui.rootMargin : this.si.rootMargin
                }
            }, {
                key: "thresholds",
                get: function() {
                    return this.ui ? this.ui.thresholds : [].concat(this.si.threshold || 0)
                }
            }]),
            t
        }();
        function Bi(t) {
            return (t = Number(t)) ? t > 0 ? 1 : -1 : t
        }
        qi._upgraders = [];
        var $i = Object.prototype.hasOwnProperty;
        function Wi(t, i) {
            if (null == t)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(t), r = 1; r < arguments.length; r++) {
                var e = arguments[r];
                if (null != e)
                    for (var s in e)
                        $i.call(e, s) && (n[s] = e[s])
            }
            return n
        }
        function Yi(t) {
            return Object.keys(t).map((function(i) {
                return t[i]
            }
            ))
        }
        function Ki(t) {
            return !t.ResizeObserver || !!t.ResizeObserver._stub
        }
        var Ji, Xi = function() {
            function t(i) {
                this.it = i,
                this.oi = [],
                this.ui = null,
                t._upgraders.push(this.hi.bind(this))
            }
            var i = t.prototype;
            return i.disconnect = function() {
                this.ui ? this.ui.disconnect() : this.oi.length = 0
            }
            ,
            i.observe = function(t) {
                this.ui ? this.ui.observe(t) : -1 == this.oi.indexOf(t) && this.oi.push(t)
            }
            ,
            i.unobserve = function(t) {
                if (this.ui)
                    this.ui.unobserve(t);
                else {
                    var i = this.oi.indexOf(t);
                    -1 != i && this.oi.splice(i, 1)
                }
            }
            ,
            i.hi = function(t) {
                var i = new t(this.it);
                this.ui = i;
                for (var n, r = o(this.oi, !0); !(n = r()).done; ) {
                    var e = n.value;
                    i.observe(e)
                }
                this.oi.length = 0
            }
            ,
            t
        }();
        function Qi(t, i) {
            var n = i > 0 ? 0 | i : 0;
            return this.substr(n, t.length) === t
        }
        Xi._upgraders = [],
        (Ji = self).fetch || (Object.defineProperty(Ji, "fetch", {
            value: function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new Promise((function(n, r) {
                    var e = ei(i.method || "GET")
                      , s = ni(e, t);
                    "include" == i.credentials && (s.withCredentials = !0),
                    "document" !== i.responseType && "text" !== i.responseType || (s.responseType = i.responseType),
                    i.headers && Object.keys(i.headers).forEach((function(t) {
                        s.setRequestHeader(t, i.headers[t])
                    }
                    )),
                    s.onreadystatechange = function() {
                        if (!(s.readyState < 2))
                            return s.status < 100 || s.status > 599 ? (s.onreadystatechange = null,
                            void r(Jt().createExpectedError("Unknown HTTP status ".concat(s.status)))) : void (4 == s.readyState && n(new ri(s)))
                    }
                    ,
                    s.onerror = function() {
                        r(Jt().createExpectedError("Network failure"))
                    }
                    ,
                    s.onabort = function() {
                        r(Jt().createExpectedError("Request aborted"))
                    }
                    ,
                    "POST" == e ? s.send(i.body) : s.send()
                }
                ))
            },
            writable: !0,
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(Ji, "Response", {
            value: ui,
            writable: !0,
            enumerable: !1,
            configurable: !0
        })),
        function(t) {
            t.Math.sign || t.Object.defineProperty(t.Math, "sign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Bi
            })
        }(self),
        function(t) {
            t.Object.assign || t.Object.defineProperty(t.Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Wi
            })
        }(self),
        function(t) {
            t.Object.values || t.Object.defineProperty(t.Object, "values", {
                configurable: !0,
                writable: !0,
                value: Yi
            })
        }(self),
        function(t) {
            t.Array.prototype.includes || t.Object.defineProperty(t.Array.prototype, "includes", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: s
            })
        }(self),
        function(t) {
            var i = t.Map
              , n = new i;
            if (n.set(0, 0) !== n) {
                var r = n.set;
                t.Object.defineProperty(i.prototype, "set", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return r.apply(this, arguments),
                        this
                    }
                })
            }
        }(self),
        function(t) {
            var i = t.WeakMap
              , n = new i;
            if (n.set({}, 0) !== n) {
                var r = n.set;
                t.Object.defineProperty(i.prototype, "set", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return r.apply(this, arguments),
                        this
                    }
                })
            }
        }(self),
        function(t) {
            var i = t.Set
              , n = new i([1]);
            if (n.size < 1 && (t.Set = function(t) {
                var n = new i;
                if (t)
                    for (var r = G(t), e = 0; e < r.length; e++)
                        n.add(r[e]);
                return n
            }
            ),
            n.add(0) !== n) {
                var r = n.add;
                t.Object.defineProperty(i.prototype, "add", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return r.apply(this, arguments),
                        this
                    }
                })
            }
        }(self),
        function(t) {
            t.String.prototype.startsWith || t.Object.defineProperty(t.String.prototype, "startsWith", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Qi
            })
        }(self),
        self.document && (function(t) {
            var i = t.HTMLDocument || t.Document;
            i && !i.prototype.contains && t.Object.defineProperty(i.prototype, "contains", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: k
            })
        }(self),
        function(t) {
            (function(t) {
                if (!t.document)
                    return !1;
                try {
                    return 0 !== t.document.createElement("div").getBoundingClientRect().top
                } catch (t) {
                    return !0
                }
            }
            )(t) && (Ei = Element.prototype.getBoundingClientRect,
            t.Object.defineProperty(t.Element.prototype, "getBoundingClientRect", {
                value: Vi
            }))
        }(self),
        function(t, i) {
            var n = t.document
              , r = function(t) {
                var i = t.customElements;
                return !!(i && i.define && i.get && i.whenDefined)
            }(t);
            if (!(!n || r && function(t) {
                return -1 === t.HTMLElement.toString().indexOf("[native code]")
            }(t))) {
                var e = !0
                  , s = !1;
                if (i && r)
                    try {
                        var u = t.Reflect
                          , o = Object.create(i.prototype);
                        Function.call.call(i, o),
                        s = !(null == u || !u.construct)
                    } catch (t) {
                        e = !1
                    }
                s ? function(t) {
                    var i = t.HTMLElement
                      , n = t.Reflect;
                    function r() {
                        var t = this.constructor;
                        return n.construct(i, [], t)
                    }
                    R(i, r),
                    t.HTMLElementOrig = t.HTMLElement,
                    t.HTMLElement = r
                }(t) : e && function(t) {
                    var i = t.Element
                      , n = t.HTMLElement
                      , r = t.document
                      , e = r.createElement
                      , s = new S(t)
                      , u = new T(t,s);
                    Object.defineProperty(t, "customElements", {
                        enumerable: !0,
                        configurable: !0,
                        value: u
                    });
                    var o = i.prototype
                      , h = o.attachShadow
                      , a = o.createShadowRoot;
                    function c() {
                        var t = this.constructor
                          , i = s.current();
                        if (!i) {
                            var n = s.getByConstructor(t);
                            i = e.call(r, n.name)
                        }
                        return _(i, t.prototype),
                        i
                    }
                    h && (o.attachShadow = function(t) {
                        var i = h.apply(this, arguments);
                        return s.observe(i),
                        i
                    }
                    ,
                    o.attachShadow.toString = function() {
                        return h.toString()
                    }
                    ),
                    a && (o.createShadowRoot = function() {
                        var t = a.apply(this, arguments);
                        return s.observe(t),
                        t
                    }
                    ,
                    o.createShadowRoot.toString = function() {
                        return a.toString()
                    }
                    ),
                    R(n, c),
                    t.HTMLElementOrig = t.HTMLElement,
                    t.HTMLElement = c,
                    c.call || (c.apply = t.Function.apply,
                    c.bind = t.Function.bind,
                    c.call = t.Function.call)
                }(t)
            }
        }(self, function() {
            return function() {}
        }()),
        function(t) {
            Fi(t) && function(t) {
                if (!t.IntersectionObserver)
                    return t.IntersectionObserver = qi,
                    void (t.IntersectionObserver._stub = qi);
                var i = t.IntersectionObserver;
                t.IntersectionObserver = function(t, i) {
                    return function(n, r) {
                        var e;
                        return 9 === (null == r || null === (e = r.root) || void 0 === e ? void 0 : e.nodeType) ? new i(n,r) : new t(n,r)
                    }
                }(t.IntersectionObserver, qi),
                t.IntersectionObserver._stub = qi,
                t.IntersectionObserver._native = i
            }(t),
            function(t) {
                t.IntersectionObserverEntry && !("isIntersecting"in t.IntersectionObserverEntry.prototype) && Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        return this.intersectionRatio > 0
                    }
                })
            }(t)
        }(self),
        function(t) {
            Ki(t) && function(t) {
                t.ResizeObserver || (t.ResizeObserver = Xi,
                t.ResizeObserver._stub = Xi)
            }(t)
        }(self),
        function(t) {
            t.AbortController || (Object.defineProperty(t, "AbortController", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: r
            }),
            Object.defineProperty(t, "AbortSignal", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: e
            }))
        }(self));
        var Zi = "cls"
          , tn = "clstu"
          , nn = "cls-1"
          , rn = "pc"
          , en = "building"
          , sn = "mounting"
          , un = "loading"
          , on = "complete"
          , hn = "error";
        function an(t) {
            return t.readyState != un && "uninitialized" != t.readyState
        }
        function cn(t) {
            return t.readyState == on
        }
        function fn(t, i) {
            ln(t, an, i)
        }
        function ln(t, i, n) {
            var r = i(t);
            r ? n(t) : t.addEventListener("readystatechange", (function e() {
                i(t) && (r || (r = !0,
                n(t)),
                t.removeEventListener("readystatechange", e))
            }
            ))
        }
        function vn(t) {
            return new Promise((function(i) {
                fn(t, i)
            }
            ))
        }
        function dn(t) {
            return new Promise((function(i) {
                ln(t, cn, i)
            }
            ))
        }
        var mn = ["amp-mustache"]
          , pn = "latest";
        function gn(t) {
            if (!t)
                return null;
            var i = t.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)(?:\?ssr-css=[0|1])?$/i)
              , n = i ? i[2] : void 0
              , r = i ? i[3] : void 0;
            return n && r ? {
                extensionId: n,
                extensionVersion: r
            } : null
        }
        function bn(t, i, n) {
            var r = t.document.createElement("script");
            r.async = !0,
            wn(i) ? n = "" : r.setAttribute(mn.indexOf(i) >= 0 ? "custom-template" : "custom-element", i),
            r.setAttribute("data-script", i),
            r.setAttribute("i-amphtml-inserted", ""),
            Li(t.document, r),
            r.setAttribute("crossorigin", "anonymous");
            var e = function(t, i, n, r) {
                var e = Mt
                  , s = Dt().rtvVersion
                  , u = n ? "-" + n : "";
                return "./amp/v0/".concat(i).concat(u).concat(".js")
                return "".concat(e, "/rtv/").concat(s, "/v0/").concat(i).concat(u).concat(".js")
            }(t.location, i, n);
            console.log("--fx--", e);
            return r.src = e,
            r
        }
        function yn(t, i, n, r) {
            for (var e = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], s = ":not([i-amphtml-loaded-new-version])" + (e ? "" : ":not([i-amphtml-inserted])"), u = t.document.head.querySelectorAll('script[src*="/'.concat(i, '-"]').concat(s)), o = [], h = 0; h < u.length; h++) {
                var a = u[h]
                  , c = gn(a.src);
                if (c) {
                    var f = c.extensionId
                      , l = c.extensionVersion;
                    f == i && (wn(i) || l == n || l == pn && r) && o.push(a)
                }
            }
            return o
        }
        function wn(t) {
            return t.startsWith("_")
        }
        function An(t, i, n, r) {
            Cn(t = Tn(t), t, i, n),
            r && kn(t, i)
        }
        function xn(t, i, n, r) {
            var e = Rn(t)
              , s = _n(e);
            Cn(s, e, i, n),
            r && kn(s, i)
        }
        function En(t, i) {
            return kn(t = Tn(t), i)
        }
        function Pn(t, i) {
            return kn(_n(Rn(t)), i)
        }
        function On(t, i) {
            var n = _n(Rn(t));
            return zn(n, i) ? kn(n, i) : null
        }
        function In(t, i) {
            return Nn(_n(t), i)
        }
        function Mn(t, i) {
            return Dn(_n(t), i)
        }
        function Tn(t) {
            return t.__AMP_TOP || (t.__AMP_TOP = t)
        }
        function Sn(t, i) {
            var n = (t.ownerDocument || t).defaultView
              , r = i || Tn(n);
            if (n && n != r && Tn(n) == r)
                try {
                    return n.frameElement
                } catch (t) {}
            return null
        }
        function Rn(t) {
            return t.nodeType ? function(t) {
                return En(t, "ampdoc")
            }(oi(t)).getAmpDoc(t) : t
        }
        function _n(t) {
            var i = Rn(t);
            return i.isSingleDoc() ? i.win : i
        }
        function kn(t, i) {
            Zt(zn(t, i));
            var n = jn(t)[i];
            return n.obj || (Zt(n.ctor),
            Zt(n.context),
            n.obj = new n.ctor(n.context),
            Zt(n.obj),
            n.context = null,
            n.resolve && n.resolve(n.obj)),
            n.obj
        }
        function Cn(t, i, n, r, e, s) {
            var u = jn(t)
              , o = u[n];
            o || (o = u[n] = {
                obj: null,
                promise: null,
                resolve: null,
                reject: null,
                context: null,
                ctor: null,
                sharedInstance: s || !1
            }),
            !e && o.ctor || (o.ctor = r,
            o.context = i,
            o.sharedInstance = s || !1,
            o.resolve && kn(t, n))
        }
        function Nn(t, i) {
            var n = Dn(t, i);
            if (n)
                return n;
            var r, e, s, u, o = jn(t);
            return o[i] = (e = (r = new a).promise,
            s = r.reject,
            u = r.resolve,
            e.catch((function() {}
            )),
            {
                obj: null,
                promise: e,
                resolve: u,
                reject: s,
                context: null,
                ctor: null
            }),
            o[i].promise
        }
        function Dn(t, i) {
            var n = jn(t)[i];
            return n ? n.promise ? n.promise : (kn(t, i),
            n.promise = Promise.resolve(n.obj)) : null
        }
        function jn(t) {
            var i = t.__AMP_SERVICES;
            return i || (i = t.__AMP_SERVICES = {}),
            i
        }
        function Un(t) {
            return "function" == typeof t.dispose
        }
        function Ln(t, i) {
            if (Un(i))
                try {
                    (function(t) {
                        return Zt(Un(t)),
                        t
                    }
                    )(i).dispose()
                } catch (i) {
                    Qt().error("SERVICE", "failed to dispose service", t, i)
                }
        }
        function zn(t, i) {
            var n = t.__AMP_SERVICES && t.__AMP_SERVICES[i];
            return !(!n || !n.ctor)
        }
        function Hn(t, i, n, r) {
            return Gn(t, i, n, r).then((function(t) {
                return function(t, i, n) {
                    return ti(t, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", i, n, n, n)
                }(t, i, n)
            }
            ))
        }
        function Gn(t, i, n, r) {
            var e = Mn(t, i);
            if (e)
                return e;
            var s = Rn(t);
            return s.whenExtensionsKnown().then((function() {
                var t = s.getExtensionVersion(n);
                return t ? En(s.win, "extensions").waitForExtension(n, t) : null
            }
            )).then((function(n) {
                return n ? r ? Mn(t, i) : In(t, i) : null
            }
            ))
        }
        var Vn, Fn = function(t) {
            return Gn(t, "access", "amp-access")
        }, qn = function(t) {
            return Gn(t, "subscriptions", "amp-subscriptions")
        }, Bn = function(t) {
            return On(t, "action")
        }, $n = function(t) {
            return Hn(t, "activity", "amp-analytics")
        }, Wn = function(t) {
            return Rn(t)
        }, Yn = function(t) {
            return En(t, "ampdoc")
        }, Kn = function(t) {
            return Gn(t, "amp-analytics-instrumentation", "amp-analytics")
        }, Jn = function(t) {
            return function(t, i, n) {
                var r = On(t, i);
                return r ? Promise.resolve(r) : Gn(t, i, "amp-bind")
            }(t, "bind")
        }, Xn = function(t) {
            return In(t, "cid")
        }, Qn = function(t) {
            return En(t, "crypto")
        }, Zn = function(t) {
            return Pn(t, "documentInfo").get()
        }, tr = function(t) {
            return En(t, "extensions")
        }, ir = function(t) {
            return Pn(t, "history")
        }, nr = function(t) {
            return On(t, "loadingIndicator")
        }, rr = function(t) {
            return Pn(t, "mutator")
        }, er = function(t) {
            return En(t, "performance")
        }, sr = function(t) {
            return En(t, "platform")
        }, ur = function(t) {
            return En(t, "preconnect")
        }, or = function(t) {
            return Pn(t, "resources")
        }, hr = function(t) {
            return In(t, "storage")
        }, ar = function(t) {
            return function(t, i) {
                return kn(t, "timer")
            }(t)
        }, cr = function(t) {
            return On(t, "url-replace")
        }, fr = function(t) {
            return Gn(t, "geo", "amp-geo", !0)
        }, lr = function(t) {
            return On(t, "url")
        }, vr = function(t) {
            return Pn(t, "viewer")
        }, dr = function(t) {
            return En(t, "vsync")
        }, mr = function(t) {
            return Pn(t, "viewport")
        }, pr = function(t) {
            return En(t, "xhr")
        }, gr = "prerender", br = "preview", yr = "visible", wr = "hidden", Ar = "paused", xr = "inactive", Er = function() {
            function t() {
                this.qt = null
            }
            var i = t.prototype;
            return i.add = function(t) {
                var i = this;
                return this.qt || (this.qt = []),
                this.qt.push(t),
                function() {
                    i.remove(t)
                }
            }
            ,
            i.remove = function(t) {
                this.qt && $(this.qt, t)
            }
            ,
            i.removeAll = function() {
                this.qt && (this.qt.length = 0)
            }
            ,
            i.fire = function(t) {
                if (this.qt)
                    for (var i, n = o(this.qt.slice(), !0); !(i = n()).done; )
                        (0,
                        i.value)(t)
            }
            ,
            i.getHandlerCount = function() {
                var t, i;
                return null !== (t = null === (i = this.qt) || void 0 === i ? void 0 : i.length) && void 0 !== t ? t : 0
            }
            ,
            t
        }(), Pr = function() {
            function t() {
                this.Zt = A(),
                this.ai = null
            }
            var i = t.prototype;
            return i.get = function(t) {
                var i = this.Zt[t];
                return null == i ? null : i
            }
            ,
            i.whenSignal = function(t) {
                var i, n = null === (i = this.ai) || void 0 === i ? void 0 : i[t];
                if (!n) {
                    var r = this.Zt[t];
                    n = null != r ? {
                        promise: "number" == typeof r ? Promise.resolve(r) : Promise.reject(r)
                    } : new a,
                    this.ai || (this.ai = A()),
                    this.ai[t] = n
                }
                return n.promise
            }
            ,
            i.signal = function(t, i) {
                var n;
                if (null == this.Zt[t]) {
                    var r = null != i ? i : Date.now();
                    this.Zt[t] = r;
                    var e = null === (n = this.ai) || void 0 === n ? void 0 : n[t];
                    null != e && e.resolve && (e.resolve(r),
                    e.resolve = void 0,
                    e.reject = void 0)
                }
            }
            ,
            i.rejectSignal = function(t, i) {
                var n;
                if (null == this.Zt[t]) {
                    this.Zt[t] = i;
                    var r = null === (n = this.ai) || void 0 === n ? void 0 : n[t];
                    null != r && r.reject && (r.reject(i),
                    r.promise.catch((function() {}
                    )),
                    r.resolve = void 0,
                    r.reject = void 0)
                }
            }
            ,
            i.reset = function(t) {
                var i;
                this.Zt[t] && delete this.Zt[t];
                var n = null === (i = this.ai) || void 0 === i ? void 0 : i[t];
                n && !n.resolve && delete this.ai[t]
            }
            ,
            t
        }(), Or = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"], Ir = {
            "getPropertyPriority": function() {
                return ""
            },
            "getPropertyValue": function() {
                return ""
            }
        };
        function Mr(t) {
            var i = t.replace(/[A-Z]/g, (function(t) {
                return "-" + t.toLowerCase()
            }
            ));
            return Or.some((function(t) {
                return i.startsWith(t + "-")
            }
            )) ? "-".concat(i) : i
        }
        function Tr(t, i, n) {
            if (i.startsWith("--"))
                return i;
            Vn || (Vn = A());
            var r = Vn[i];
            if (!r || n) {
                if (r = i,
                void 0 === t[i]) {
                    var e = function(t) {
                        return t.charAt(0).toUpperCase() + t.slice(1)
                    }(i)
                      , s = function(t, i) {
                        for (var n = 0; n < Or.length; n++) {
                            var r = Or[n] + i;
                            if (void 0 !== t[r])
                                return r
                        }
                        return ""
                    }(t, e);
                    void 0 !== t[s] && (r = s)
                }
                n || (Vn[i] = r)
            }
            return r
        }
        function Sr(t, i) {
            var n = t.style;
            for (var r in i)
                n.setProperty(Mr(Tr(n, r)), String(i[r]), "important")
        }
        function Rr(t, i, n, r, e) {
            var s = Tr(t.style, i, e);
            if (s) {
                var u = r ? n + r : n;
                t.style.setProperty(Mr(s), u)
            }
        }
        function _r(t, i) {
            for (var n in i)
                Rr(t, n, i[n])
        }
        function kr(t, i) {
            void 0 === i && (i = t.hasAttribute("hidden")),
            i ? t.removeAttribute("hidden") : t.setAttribute("hidden", "")
        }
        function Cr(t) {
            return "".concat(t, "px")
        }
        function Nr(t, i) {
            return t.getComputedStyle(i) || Ir
        }
        function Dr(t) {
            var i = t[Tr(t, "visibilityState", !0)];
            if (i)
                return i;
            var n = Tr(t, "hidden", !0);
            return n in t && t[n] ? wr : yr
        }
        function jr(t, i) {
            if (t.addEventListener) {
                var n = Lr(t);
                n && t.addEventListener(n, i)
            }
        }
        function Ur(t, i) {
            if (t.removeEventListener) {
                var n = Lr(t);
                n && t.removeEventListener(n, i)
            }
        }
        function Lr(t) {
            var i = Tr(t, "hidden", !0)
              , n = i.indexOf("Hidden");
            return -1 != n ? i.substring(0, n) + "Visibilitychange" : "visibilitychange"
        }
        var zr = function() {
            function t() {}
            return t.getTop = function(t) {
                return t.top
            }
            ,
            t.getLocation = function(t) {
                return t.location
            }
            ,
            t.getDocumentReferrer = function(t) {
                return t.document.referrer
            }
            ,
            t.getHostname = function(t) {
                return t.location.hostname
            }
            ,
            t.getUserAgent = function(t) {
                return t.navigator.userAgent
            }
            ,
            t.getUserLanguage = function(t) {
                return t.navigator.userLanguage || t.navigator.language
            }
            ,
            t.getDevicePixelRatio = function() {
                return self.devicePixelRatio || 1
            }
            ,
            t.getSendBeacon = function(t) {
                if (t.navigator.sendBeacon)
                    return t.navigator.sendBeacon.bind(t.navigator)
            }
            ,
            t.getXMLHttpRequest = function(t) {
                return t.XMLHttpRequest
            }
            ,
            t.getImage = function(t) {
                return t.Image
            }
            ,
            t
        }()
          , Hr = "__AMP__"
          , Gr = "-ampdoc-ext-known"
          , Vr = "-ampdoc-first-visible"
          , Fr = "-ampdoc-next-visible"
          , qr = "-ampdoc-first-previewed"
          , Br = function() {
            function t(t, i, n) {
                this.win = t,
                this.ci = null,
                i && (this.ci = new Wr(t,{
                    params: Jr(t, n)
                }),
                t.document.__AMPDOC = this.ci)
            }
            var i = t.prototype;
            return i.isSingleDoc = function() {
                return !!this.ci
            }
            ,
            i.getSingleDoc = function() {
                return Zt(this.ci)
            }
            ,
            i.fi = function(t) {
                return t.everAttached && "function" == typeof t.getAmpDoc ? t.getAmpDoc() : null
            }
            ,
            i.getAmpDocIfAvailable = function(t) {
                for (var i = t; i; ) {
                    var n = this.fi(t);
                    if (n)
                        return n;
                    var r = _i(i);
                    if (!r)
                        break;
                    var e = r.__AMPDOC;
                    if (e)
                        return e;
                    i = r.host ? r.host : Sn(r, this.win)
                }
                return null
            }
            ,
            i.getAmpDoc = function(t) {
                var i = this.getAmpDocIfAvailable(t);
                if (!i)
                    throw Qt().createError("No ampdoc found for", t);
                return i
            }
            ,
            i.installShadowDoc = function(t, i, n) {
                Zt(!i.__AMPDOC);
                var r = new Yr(this.win,t,i,n);
                return i.__AMPDOC = r,
                r
            }
            ,
            i.installFieDoc = function(t, i, n) {
                var r = i.document;
                Zt(!r.__AMPDOC);
                var e = Zt(i.frameElement)
                  , s = new Kr(i,t,this.getAmpDoc(e),n);
                return r.__AMPDOC = s,
                s
            }
            ,
            t
        }()
          , $r = function() {
            function t(t, i, n) {
                var r = this;
                this.win = t,
                this.li = A(),
                this.vi = i,
                this.di = n && n.signals || new Pr,
                this.mi = n && n.params || A(),
                this.pi = null,
                this.bi = {};
                var e, s = this.mi.visibilityState;
                Zt(!s || "prerender" === (e = s) || "preview" === e || "visible" === e || "hidden" === e || "paused" === e || "inactive" === e),
                this.gi = n && n.visibilityState || s || null,
                this.J = null,
                this.yi = new Er,
                this.wi = null,
                this.Ai = [];
                var u = this.xi.bind(this);
                this.vi && this.Ai.push(this.vi.onVisibilityChanged(u)),
                jr(this.win.document, u),
                this.Ai.push((function() {
                    return Ur(r.win.document, u)
                }
                )),
                this.xi()
            }
            var i = t.prototype;
            return i.dispose = function() {
                (function(t) {
                    var i = jn(t)
                      , n = function(t) {
                        if (!Object.prototype.hasOwnProperty.call(i, t))
                            return "continue";
                        var n = i[t];
                        if (n.sharedInstance)
                            return "continue";
                        n.obj ? Ln(t, n.obj) : n.promise && n.promise.then((function(i) {
                            return Ln(t, i)
                        }
                        ))
                    };
                    for (var r in i)
                        n(r)
                }
                )(this),
                this.Ai.forEach((function(t) {
                    return t()
                }
                ))
            }
            ,
            i.isSingleDoc = function() {
                return Zt(null)
            }
            ,
            i.getParent = function() {
                return this.vi
            }
            ,
            i.signals = function() {
                return this.di
            }
            ,
            i.getParam = function(t) {
                var i = this.mi[t];
                return null == i ? null : i
            }
            ,
            i.getMeta = function() {
                var t = this;
                return this.pi || (this.pi = A(),
                this.win.document.head.querySelectorAll("meta[name]").forEach((function(i) {
                    var n = i.getAttribute("name")
                      , r = i.getAttribute("content");
                    n && null !== r && void 0 === t.pi[n] && (t.pi[n] = r)
                }
                ))),
                A(this.pi)
            }
            ,
            i.getMetaByName = function(t) {
                if (!t)
                    return null;
                var i = this.getMeta()[t];
                return void 0 !== i ? i : null
            }
            ,
            i.setMetaByName = function(t, i) {
                Zt(null)
            }
            ,
            i.declaresExtension = function(t, i) {
                var n = this.bi[t];
                return !(!n || i && n !== i)
            }
            ,
            i.declareExtension = function(t, i) {
                Zt(!this.bi[t] || this.bi[t] === i),
                this.bi[t] = i
            }
            ,
            i.getExtensionVersion = function(t) {
                return this.bi[t] || null
            }
            ,
            i.setExtensionsKnown = function() {
                this.di.signal(Gr)
            }
            ,
            i.whenExtensionsKnown = function() {
                return this.di.whenSignal(Gr)
            }
            ,
            i.getRootNode = function() {
                return Zt(null)
            }
            ,
            i.getHeadNode = function() {}
            ,
            i.isBodyAvailable = function() {
                return Zt(!1)
            }
            ,
            i.getBody = function() {
                return Zt(null)
            }
            ,
            i.waitForBodyOpen = function() {
                return Zt(null)
            }
            ,
            i.isReady = function() {
                return Zt(null)
            }
            ,
            i.whenReady = function() {
                return Zt(null)
            }
            ,
            i.getUrl = function() {
                return Zt(null)
            }
            ,
            i.getElementById = function(t) {
                return this.getRootNode().getElementById(t)
            }
            ,
            i.contains = function(t) {
                return this.getRootNode().contains(t)
            }
            ,
            i.overrideVisibilityState = function(t) {
                this.gi != t && (this.gi = t,
                this.xi())
            }
            ,
            i.xi = function() {
                for (var t, i = Dr(this.win.document), n = yr, r = this.vi; r; r = r.getParent())
                    if (r.getVisibilityState() != yr) {
                        n = r.getVisibilityState();
                        break
                    }
                var e = this.gi || yr;
                if (t = e == yr && n == yr && i == yr ? yr : i == wr && e == Ar ? i : e == Ar || e == xr ? e : n == Ar || n == xr ? n : e == br || i == br || n == br ? br : e == gr || i == gr || n == gr ? gr : wr,
                this.J != t) {
                    if (t == yr) {
                        var s, u = this.win.performance, o = Math.floor(null !== (s = u.timeOrigin) && void 0 !== s ? s : u.timing.navigationStart);
                        null != this.J && (o += Math.floor(u.now())),
                        this.wi = o,
                        this.di.signal(Vr, o),
                        this.di.signal(Fr, o)
                    } else
                        this.di.reset(Fr);
                    t == br && this.di.signal(qr),
                    this.J = t,
                    this.yi.fire()
                }
            }
            ,
            i.whenFirstPreviewedOrVisible = function() {
                return Promise.race([this.whenFirstPreviewed(), this.whenFirstVisible()])
            }
            ,
            i.whenFirstPreviewed = function() {
                return this.di.whenSignal(qr).then((function() {}
                ))
            }
            ,
            i.whenFirstVisible = function() {
                return this.di.whenSignal(Vr).then((function() {}
                ))
            }
            ,
            i.whenNextVisible = function() {
                return this.di.whenSignal(Fr).then((function() {}
                ))
            }
            ,
            i.getFirstVisibleTime = function() {
                return this.di.get(Vr)
            }
            ,
            i.getLastVisibleTime = function() {
                return this.wi
            }
            ,
            i.getVisibilityState = function() {
                return Zt(this.J)
            }
            ,
            i.isPreview = function() {
                return this.J == br
            }
            ,
            i.isVisible = function() {
                return this.J == yr
            }
            ,
            i.hasBeenVisible = function() {
                return null != this.getLastVisibleTime()
            }
            ,
            i.onVisibilityChanged = function(t) {
                return this.yi.add(t)
            }
            ,
            i.registerSingleton = function(t) {
                return !this.li[t] && (this.li[t] = !0,
                !0)
            }
            ,
            t
        }()
          , Wr = function(t) {
            U(n, t);
            var i = H(n);
            function n(t, n) {
                var r;
                return (r = i.call(this, t, null, n)).Ei = r.win.document.body ? Promise.resolve(r.win.document.body) : Mi(r.win.document).then((function() {
                    return r.getBody()
                }
                )),
                r.Oi = vn(r.win.document),
                r
            }
            var r = n.prototype;
            return r.isSingleDoc = function() {
                return !0
            }
            ,
            r.getRootNode = function() {
                return this.win.document
            }
            ,
            r.getUrl = function() {
                return zr.getLocation(this.win).href
            }
            ,
            r.getHeadNode = function() {
                return this.win.document.head
            }
            ,
            r.isBodyAvailable = function() {
                return !!this.win.document.body
            }
            ,
            r.getBody = function() {
                return this.win.document.body
            }
            ,
            r.waitForBodyOpen = function() {
                return this.Ei
            }
            ,
            r.isReady = function() {
                return an(this.win.document)
            }
            ,
            r.whenReady = function() {
                return this.Oi
            }
            ,
            n
        }($r)
          , Yr = function(t) {
            U(n, t);
            var i = H(n);
            function n(t, n, r, e) {
                var s;
                (s = i.call(this, t, null, e)).Pi = n,
                s.Ti = r,
                s.Ii = null;
                var u = new a;
                s.Ei = u.promise,
                s.Mi = u.resolve,
                s.Si = !1;
                var o = new a;
                return s.Oi = o.promise,
                s.ki = o.resolve,
                s
            }
            var r = n.prototype;
            return r.isSingleDoc = function() {
                return !1
            }
            ,
            r.getRootNode = function() {
                return this.Ti
            }
            ,
            r.getUrl = function() {
                return this.Pi
            }
            ,
            r.getHeadNode = function() {
                return this.Ti
            }
            ,
            r.isBodyAvailable = function() {
                return !!this.Ii
            }
            ,
            r.getBody = function() {
                return this.Ii
            }
            ,
            r.setBody = function(t) {
                Zt(!this.Ii),
                this.Ii = t,
                this.Mi(t),
                this.Mi = void 0
            }
            ,
            r.waitForBodyOpen = function() {
                return this.Ei
            }
            ,
            r.isReady = function() {
                return this.Si
            }
            ,
            r.setReady = function() {
                Zt(!this.Si),
                this.Si = !0,
                this.ki(),
                this.ki = void 0
            }
            ,
            r.whenReady = function() {
                return this.Oi
            }
            ,
            r.getMeta = function() {
                return A(this.pi)
            }
            ,
            r.setMetaByName = function(t, i) {
                Zt(t),
                this.pi || (this.pi = A()),
                this.pi[t] = i
            }
            ,
            n
        }($r)
          , Kr = function(t) {
            U(n, t);
            var i = H(n);
            function n(t, n, r, e) {
                var s;
                (s = i.call(this, t, r, e)).Pi = n,
                s.Ei = s.win.document.body ? Promise.resolve(s.win.document.body) : Mi(s.win.document).then((function() {
                    return s.getBody()
                }
                )),
                s.Si = !1;
                var u = new a;
                return s.Oi = u.promise,
                s.ki = u.resolve,
                s
            }
            var r = n.prototype;
            return r.isSingleDoc = function() {
                return !1
            }
            ,
            r.getRootNode = function() {
                return this.win.document
            }
            ,
            r.getUrl = function() {
                return this.Pi
            }
            ,
            r.getHeadNode = function() {
                return this.win.document.head
            }
            ,
            r.isBodyAvailable = function() {
                return !!this.win.document.body
            }
            ,
            r.getBody = function() {
                return this.win.document.body
            }
            ,
            r.waitForBodyOpen = function() {
                return this.Ei
            }
            ,
            r.isReady = function() {
                return this.Si
            }
            ,
            r.whenReady = function() {
                return this.Oi
            }
            ,
            r.setReady = function() {
                Zt(!this.Si),
                this.Si = !0,
                this.ki(),
                this.ki = void 0
            }
            ,
            n
        }($r);
        function Jr(t, i) {
            var n = A();
            return i ? Object.assign(n, i) : (t.name && 0 == t.name.indexOf(Hr) && Object.assign(n, yt(t.name.substring(Hr.length))),
            t.location && t.location.hash && Object.assign(n, yt(t.location.hash))),
            n
        }
        function Xr(t) {
            if (!t.hasAttribute("src") && "srcset"in t == 0) {
                var i = t.getAttribute("srcset") || ""
                  , n = /\S+/.exec(i);
                if (null == n)
                    return;
                var r = n[0];
                t.setAttribute("src", r)
            }
        }
        var Qr = "nodisplay"
          , Zr = "fixed"
          , te = "fixed-height"
          , ie = "responsive"
          , ne = "container"
          , re = "fill"
          , ee = "flex-item"
          , se = "fluid"
          , ue = "intrinsic"
          , oe = /^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i;
        function he(t) {
            if ("nodisplay" === (i = t) || "fixed" === i || "fixed-height" === i || "responsive" === i || "container" === i || "fill" === i || "flex-item" === i || "fluid" === i || "intrinsic" === i)
                return t;
            var i
        }
        function ae(t) {
            return "i-amphtml-layout-" + t
        }
        function ce(t) {
            return t == Zr || t == te || t == ie || t == re || t == ee || t == se || t == ue
        }
        function fe(t) {
            return "number" == typeof t ? t + "px" : t && /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(t) ? /^\d+(\.\d+)?$/.test(t) ? t + "px" : t : void 0
        }
        function le(t) {
            !function(t) {
                ht(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(null != t ? t : ""), "Invalid length value: %s", t)
            }(t);
            var i = /[a-z]+/i.exec(null != t ? t : "");
            return ht(i, "Failed to read units from %s", t),
            i[0]
        }
        function ve(t) {
            var i = parseFloat(t);
            return J(i) ? i : void 0
        }
        function de(t, i) {
            t.classList.add("i-amphtml-fill-content"),
            i && t.classList.add("i-amphtml-replaced-content")
        }
        function me(t, i, n, r) {
            for (var e, s = o(F(t), !0); !(e = s()).done; ) {
                var u = e.value
                  , h = i.getAttribute(u);
                null !== h ? n.setAttribute(u, h) : r && n.removeAttribute(u)
            }
        }
        var pe, ge = "amp:attached", be = "amp:load-start", ye = "amp:load-end", we = "ready-upgrade", Ae = "upgraded", xe = "built", Ee = "mounted", Pe = "load-start", Oe = "render-start", Ie = "load-end", Me = "unload", Te = function() {
            function t(t, i) {
                this.t = t,
                this.it = i,
                this.rt = {},
                this.ut = null
            }
            var i = t.prototype;
            return i.start = function() {
                this.ut = this.rt,
                this.rt = {}
            }
            ,
            i.resolveMatchQuery = function(t) {
                return "1" === this.et(t, Se, "1")
            }
            ,
            i.resolveListQuery = function(t) {
                return this.et(t, Re, "")
            }
            ,
            i.complete = function() {
                for (var t in this.ut)
                    t in this.rt || _e(this.ut[t], this.it, !1);
                this.ut = null
            }
            ,
            i.dispose = function() {
                for (var t in this.rt)
                    _e(this.rt[t], this.it, !1);
                this.rt = {}
            }
            ,
            i.et = function(t, i, n) {
                if (!t.trim())
                    return n;
                var r = this.rt[t];
                return r || (et(this.ut),
                r = this.ut[t]),
                r || _e(r = i(this.t, t), this.it, !0),
                this.rt[t] = r,
                function(t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i]
                          , r = n.query
                          , e = n.value;
                        if (!r || r.matches)
                            return e
                    }
                    return ""
                }(r)
            }
            ,
            t
        }();
        function Se(t, i) {
            return [{
                query: t.matchMedia(i),
                value: "1"
            }, {
                query: null,
                value: ""
            }]
        }
        function Re(t, i) {
            return i.split(",").map((function(i) {
                if (0 != (i = i.replace(/\s+/g, " ").trim()).length) {
                    var n, r, e;
                    if (")" == i.charAt(i.length - 1)) {
                        var s = 1;
                        for (e = i.length - 2; e >= 0; e--) {
                            var u = i.charAt(e);
                            if ("(" == u ? s-- : ")" == u && s++,
                            0 == s)
                                break
                        }
                        var o = e - 1;
                        if (e > 0)
                            for (e--; e >= 0; e--) {
                                var h = i.charAt(e);
                                if (!("%" == h || "-" == h || "_" == h || h >= "a" && h <= "z" || h >= "A" && h <= "Z" || h >= "0" && h <= "9"))
                                    break
                            }
                        if (e >= o)
                            return null
                    } else
                        for (e = i.length - 2; e >= 0; e--) {
                            var a = i.charAt(e);
                            if (!("%" == a || "." == a || a >= "a" && a <= "z" || a >= "A" && a <= "Z" || a >= "0" && a <= "9"))
                                break
                        }
                    return e >= 0 ? (n = i.substring(0, e + 1).trim(),
                    r = i.substring(e + 1).trim()) : (r = i,
                    n = void 0),
                    r ? {
                        query: n ? t.matchMedia(n) : null,
                        value: r
                    } : null
                }
            }
            )).filter(Boolean)
        }
        function _e(t, i, n) {
            for (var r = 0; r < t.length; r++) {
                var e = t[r].query;
                e && (void 0 !== e.onchange ? e.onchange = n ? i : null : n ? e.addListener(i) : e.removeListener(i))
            }
        }
        function ke(t) {
            var i = t.ownerDocument || t;
            return pe && pe.ownerDocument === i || (pe = i.createElement("div")),
            Ce
        }
        function Ce(t) {
            return function(t, i) {
                et(1 === i.length),
                t.innerHTML = i[0];
                var n = t.firstElementChild;
                return et(n),
                et(!n.nextElementSibling),
                t.removeChild(n),
                n
            }(pe, t)
        }
        var Ne = ['<i-amphtml-sizer class=i-amphtml-sizer slot=i-amphtml-svc><img alt="" role=presentation aria-hidden=true class=i-amphtml-intrinsic-sizer></i-amphtml-sizer>']
          , De = {
            "AMP-PIXEL": {
                width: "0px",
                height: "0px"
            },
            "AMP-ANALYTICS": {
                width: "1px",
                height: "1px"
            },
            "AMP-AUDIO": null,
            "AMP-SOCIAL-SHARE": {
                width: "60px",
                height: "44px"
            }
        };
        function je(t) {
            var i = t.getAttribute("layout")
              , n = t.getAttribute("width")
              , r = t.getAttribute("height")
              , e = t.getAttribute("sizes")
              , s = t.getAttribute("heights")
              , u = i ? he(i) : null;
            ht(void 0 !== u, 'Invalid "layout" value: %s, %s', i, t);
            var o = n && "auto" != n ? fe(n) : n;
            ht(void 0 !== o, 'Invalid "width" value: %s, %s', n, t);
            var h, a, c, f, l = r && "fluid" != r ? fe(r) : r;
            if (ht(void 0 !== l, 'Invalid "height" value: %s, %s', r, t),
            u && u != Zr && u != te || o && l || (f = (f = t.tagName).toUpperCase(),
            void 0 === De[f]))
                h = o,
                a = l;
            else {
                var v = function(t) {
                    var i = t.tagName.toUpperCase();
                    if (et(void 0 !== De[i]),
                    !De[i]) {
                        var n = t.ownerDocument
                          , r = i.replace(/^AMP\-/, "")
                          , e = n.createElement(r);
                        e.controls = !0,
                        _r(e, {
                            position: "absolute",
                            visibility: "hidden"
                        }),
                        n.body.appendChild(e),
                        De[i] = {
                            width: (e.offsetWidth || 1) + "px",
                            height: (e.offsetHeight || 1) + "px"
                        },
                        n.body.removeChild(e)
                    }
                    return De[i]
                }(t);
                h = o || u == te ? o : v.width,
                a = l || v.height
            }
            return (c = u || (h || a ? "fluid" == a ? se : !a || h && "auto" != h ? a && h && (e || s) ? ie : Zr : te : ne)) != Zr && c != te && c != ie && c != ue || ht(a, 'The "height" attribute is missing: %s', t),
            c == te && ht(!h || "auto" == h, 'The "width" attribute must be missing or "auto": %s', t),
            c != Zr && c != ie && c != ue || ht(h && "auto" != h, 'The "width" attribute must be present and not "auto": %s', t),
            c == ie || c == ue ? ht(le(h) == le(a), 'Length units should be the same for "width" and "height": %s, %s, %s', n, r, t) : ht(null === s, '"heights" attribute must be missing: %s', t),
            {
                layout: c,
                width: h,
                height: a
            }
        }
        var Ue, Le = "EXPERIMENTS", ze = "amp-experiment-toggles", He = "__AMP__EXPERIMENT_TOGGLES";
        function Ge(t, i) {
            return !!Fe(t)[i]
        }
        function Ve(t, i, n, r) {
            var e = Ge(t, i)
              , s = null != n ? n : !e;
            if (s != e && (Fe(t)[i] = s,
            !r)) {
                var u = qe(t);
                u[i] = s,
                function(t, i) {
                    var n = [];
                    for (var r in i)
                        n.push((!1 === i[r] ? "-" : "") + r);
                    try {
                        var e;
                        null === (e = t.localStorage) || void 0 === e || e.setItem(ze, n.join(","))
                    } catch (t) {
                        Jt().error(Le, "Failed to save experiments to localStorage.")
                    }
                }(t, u),
                Jt().warn(Le, '"%s" experiment %s for the domain "%s". See: https://amp.dev/documentation/guides-and-tutorials/learn/experimental', i, s ? "enabled" : "disabled", t.location.hostname)
            }
            return s
        }
        function Fe(t) {
            var i, n, r, e, s;
            if (t[He])
                return t[He];
            t[He] = A();
            var u = t[He];
            et(u);
            var h = D(D({}, null !== (i = t.AMP_CONFIG) && void 0 !== i ? i : {}), null !== (n = t.AMP_EXP) && void 0 !== n ? n : at((null === (r = t.__AMP_EXP) || void 0 === r ? void 0 : r.textContent) || "{}"));
            for (var a in h) {
                var c = h[a];
                "number" == typeof c && c >= 0 && c <= 1 && (u[a] = Math.random() < c)
            }
            var f = null === (e = t.AMP_CONFIG) || void 0 === e ? void 0 : e["allow-doc-opt-in"];
            if (V(f) && f.length) {
                var l = t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
                if (l)
                    for (var v, d, m = o((null === (v = l.getAttribute("content")) || void 0 === v ? void 0 : v.split(",")) || [], !0); !(d = m()).done; ) {
                        var p = d.value;
                        f.includes(p) && (u[p] = !0)
                    }
            }
            Object.assign(u, qe(t));
            var g = null === (s = t.AMP_CONFIG) || void 0 === s ? void 0 : s["allow-url-opt-in"];
            if (V(g) && g.length)
                for (var b, y = yt(t.location.originalHash || t.location.hash), w = o(g, !0); !(b = w()).done; ) {
                    var x = b.value
                      , E = y["e-".concat(x)];
                    "1" == E && (u[x] = !0),
                    "0" == E && (u[x] = !1)
                }
            return u
        }
        function qe(t) {
            var i, n = "";
            try {
                var r;
                "localStorage"in t && (n = null !== (r = t.localStorage.getItem(ze)) && void 0 !== r ? r : "")
            } catch (t) {
                Qt().warn(Le, "Failed to retrieve experiments from localStorage.")
            }
            for (var e, s = (null === (i = n) || void 0 === i ? void 0 : i.split(/\s*,\s*/g)) || [], u = A(), h = o(s, !0); !(e = h()).done; ) {
                var a = e.value;
                a && ("-" == a[0] ? u[a.substr(1)] = !1 : u[a] = !0)
            }
            return u
        }
        function Be(t, i, n, r) {
            var e = t
              , s = n
              , u = function(t) {
                try {
                    return s(t)
                } catch (t) {
                    var i, n;
                    throw null === (i = (n = self).__AMP_REPORT_ERROR) || void 0 === i || i.call(n, t),
                    t
                }
            }
              , o = function() {
                if (void 0 !== Ue)
                    return Ue;
                Ue = !1;
                try {
                    var t = {
                        get capture() {
                            return Ue = !0,
                            !1
                        }
                    };
                    self.addEventListener("test-options", null, t),
                    self.removeEventListener("test-options", null, t)
                } catch (t) {}
                return Ue
            }()
              , h = !(null == r || !r.capture);
            return e.addEventListener(i, u, o ? r : h),
            function() {
                null == e || e.removeEventListener(i, u, o ? r : h),
                s = null,
                e = null,
                u = null
            }
        }
        var $e = "Failed to load:";
        function We(t, i, n, r) {
            var e = {
                detail: n
            };
            if (Object.assign(e, r),
            "function" == typeof t.CustomEvent)
                return new t.CustomEvent(i,e);
            var s = t.document.createEvent("CustomEvent");
            return s.initCustomEvent(i, !!e.bubbles, !!e.cancelable, n),
            s
        }
        function Ye(t, i, n, r) {
            return Be(t, i, n, r)
        }
        function Ke(t) {
            return t.data
        }
        function Je(t, i, n, r) {
            var e = n
              , s = Be(t, i, (function(t) {
                try {
                    e(t)
                } finally {
                    e = null,
                    s()
                }
            }
            ), r);
            return s
        }
        function Xe(t) {
            var i, n;
            if (function(t) {
                return !!(t.complete || "complete" == t.readyState || Qe(t) && t.readyState > 0 || t.document && "complete" == t.document.readyState)
            }(t))
                return Promise.resolve(t);
            var r = Qe(t);
            return r && t.__AMP_MEDIA_LOAD_FAILURE_SRC === t.currentSrc ? Promise.reject(t) : new Promise((function(e, s) {
                if (i = r ? Je(t, "loadedmetadata", e, {
                    capture: !0
                }) : Je(t, "load", e),
                t.tagName) {
                    var u = t;
                    if (r && !t.hasAttribute("src") && !(u = wi(t, (function(t) {
                        return "SOURCE" === t.tagName
                    }
                    ))))
                        return s(new Error("Media has no source."));
                    n = Je(u, "error", s)
                }
            }
            )).then((function() {
                return n && n(),
                t
            }
            ), (function() {
                i && i(),
                function(t) {
                    Qe(t) && (t.__AMP_MEDIA_LOAD_FAILURE_SRC = t.currentSrc || !0);
                    var i = t;
                    throw i && i.src && (i = i.src),
                    Jt().createError($e, i)
                }(t)
            }
            ))
        }
        function Qe(t) {
            return "AUDIO" === t.tagName || "VIDEO" === t.tagName
        }
        var Ze = {
            "amp-dynamic-css-classes": "[custom-element=amp-dynamic-css-classes]",
            "variant": "amp-experiment"
        };
        function ts(t) {
            var i = t.document;
            return Zt(i.body),
            Object.keys(Ze).filter((function(t) {
                return i.querySelector(Ze[t])
            }
            ))
        }
        function is(t, i, n, r, e) {
            var s = t.getHeadNode()
              , u = function(t, i, n, r) {
                var e = t.__AMP_CSS_SM;
                e || (e = t.__AMP_CSS_SM = A());
                var s = !n && r && "amp-custom" != r && "amp-keyframes" != r
                  , u = n ? "amp-runtime" : s ? "amp-extension=".concat(r) : null;
                if (u) {
                    var o = ns(t, e, u);
                    if (o)
                        return "STYLE" == o.tagName && o.textContent !== i && (o.textContent = i),
                        o
                }
                var h = (t.ownerDocument || t).createElement("style");
                h.textContent = i;
                var a = null;
                return n ? h.setAttribute("amp-runtime", "") : s ? (h.setAttribute("amp-extension", r || ""),
                a = ns(t, e, "amp-runtime")) : (r && h.setAttribute(r, ""),
                a = t.lastChild),
                function(t, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (n) {
                        var r = n.nextSibling;
                        t.insertBefore(i, r)
                    } else
                        Si(t, i)
                }(t, h, a),
                u && (e[u] = h),
                h
            }(s, function(t, i) {
                var n = t.__AMP_CSS_TR;
                return n ? n(i) : i
            }(s, i), r || !1, e || null);
            if (n) {
                var o = t.getRootNode();
                if (us(o, u))
                    return n(u),
                    u;
                var h = setInterval((function() {
                    us(o, u) && (clearInterval(h),
                    n(u))
                }
                ), 4)
            }
            return u
        }
        function ns(t, i, n) {
            if (i[n])
                return i[n];
            var r = t.querySelector("style[".concat(n, "], link[").concat(n, "]"));
            return r ? (i[n] = r,
            r) : null
        }
        var rs = !1;
        function es(t) {
            Zt(t.defaultView),
            rs || (rs = !0,
            ss(t))
        }
        function ss(t) {
            _r(t.body, {
                opacity: 1,
                visibility: "visible",
                "animation": "none"
            })
        }
        function us(t, i) {
            for (var n = t.styleSheets, r = 0; r < n.length; r++)
                if (n[r].ownerNode == i)
                    return !0;
            return !1
        }
        var os, hs, as = function() {
            function t(t) {
                this.G = t,
                this.K = 0,
                this.Y = 0,
                this.rr = A()
            }
            var i = t.prototype;
            return i.has = function(t) {
                return !!this.rr[t]
            }
            ,
            i.get = function(t) {
                var i = this.rr[t];
                if (i)
                    return i.access = ++this.Y,
                    i.payload
            }
            ,
            i.put = function(t, i) {
                this.has(t) || this.K++,
                this.rr[t] = {
                    payload: i,
                    access: this.Y
                },
                this.nr()
            }
            ,
            i.nr = function() {
                if (!(this.K <= this.G)) {
                    var t, i = this.rr, n = this.Y + 1;
                    for (var r in i) {
                        var e = i[r].access;
                        e < n && (n = e,
                        t = r)
                    }
                    void 0 !== t && (delete i[t],
                    this.K--)
                }
            }
            ,
            t
        }(), cs = new Set(["c", "v", "a", "ad"]), fs = "__amp_source_origin", ls = function(t) {
            return "string" == typeof t ? vs(t) : t
        };
        function vs(t, i) {
            return os || (os = self.document.createElement("a"),
            hs = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new as(100))),
            ds(os, t, i ? null : hs)
        }
        function ds(t, i, n) {
            if (n && n.has(i))
                return n.get(i);
            t.href = i,
            t.protocol || (t.href = t.href);
            var r, e = {
                href: t.href,
                protocol: t.protocol,
                host: t.host,
                hostname: t.hostname,
                port: "0" == t.port ? "" : t.port,
                pathname: t.pathname,
                search: t.search,
                hash: t.hash,
                origin: null
            };
            "/" !== e.pathname[0] && (e.pathname = "/" + e.pathname),
            ("http:" == e.protocol && 80 == e.port || "https:" == e.protocol && 443 == e.port) && (e.port = "",
            e.host = e.hostname),
            r = t.origin && "null" != t.origin ? t.origin : "data:" != e.protocol && e.host ? e.protocol + "//" + e.host : e.href,
            e.origin = r;
            var s = e;
            return n && n.put(i, s),
            s
        }
        function ms(t, i, n) {
            if (!i)
                return t;
            var r = t.split("#", 2)
              , e = r[0].split("?", 2);
            return e[0] + (e[1] ? n ? "?".concat(i, "&").concat(e[1]) : "?".concat(e[1], "&").concat(i) : "?".concat(i)) + (r[1] ? "#".concat(r[1]) : "")
        }
        function ps(t, i) {
            return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(i))
        }
        function gs(t, i) {
            return ms(t, bs(i))
        }
        function bs(t) {
            var i = [];
            for (var n in t) {
                var r = t[n];
                if (null != r) {
                    r = F(r);
                    for (var e = 0; e < r.length; e++)
                        i.push(ps(n, r[e]))
                }
            }
            return i.join("&")
        }
        function ys(t) {
            return "https:" == (t = ls(t)).protocol || "localhost" == t.hostname || "127.0.0.1" == t.hostname || W(t.hostname, ".localhost")
        }
        function ws(t, i) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "source";
            return ti(null != t, "%s %s must be available", i, n),
            ti(ys(t) || /^\/\//.test(t), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', i, n, t),
            t
        }
        function As(t) {
            var i = t.indexOf("#");
            return -1 == i ? t : t.substring(0, i)
        }
        function xs(t) {
            return xt.test(ls(t).origin)
        }
        function Es(t) {
            return !(t && pt.includes(ls(t).protocol))
        }
        function Ps(t) {
            var i = vs(t)
              , n = i.hash;
            return i.origin + i.pathname + Os(i.search) + n
        }
        function Os(t) {
            return function(t, i) {
                if (!t || "?" == t)
                    return "";
                var n = new RegExp("[?&]".concat("(amp_(js[^&=]*|gsa|r|kit)|usqp)", "\\b[^&]*"),"g")
                  , r = t.replace(n, "").replace(/^[?&]/, "");
                return r ? "?" + r : ""
            }(t)
        }
        function Is(t) {
            if (!xs(t = ls(t)))
                return t.href;
            var i = t.pathname.split("/")
              , n = i[1];
            ti(cs.has(n), "Unknown path prefix in url %s", t.href);
            var r = i[2]
              , e = "s" == r ? "https://" + decodeURIComponent(i[3]) : "http://" + decodeURIComponent(r);
            return ti(e.indexOf(".") > 0, "Expected a . in origin %s", e),
            i.splice(1, "s" == r ? 3 : 2),
            e + i.join("/") + Os(t.search) + (t.hash || "")
        }
        function Ms(t) {
            return vs(Is(t)).origin
        }
        function Ts(t, i) {
            return i = ls(i),
            "function" == typeof URL ? new URL(t,i.href).toString() : function(t, i) {
                i = ls(i);
                var n = vs(t = t.replace(/\\/g, "/"));
                return t.toLowerCase().startsWith(n.protocol) ? n.href : t.startsWith("//") ? i.protocol + t : t.startsWith("/") ? i.origin + t : i.origin + i.pathname.replace(/\/[^/]*$/, "/") + t
            }(t, i)
        }
        function Ss(t, i) {
            return Rs(i),
            function(t, i, n, r) {
                return ms(t, ps("__amp_source_origin", n), void 0)
            }(i, 0, Ms(t.location.href))
        }
        function Rs(t) {
            var i = yt(vs(t).search);
            ti(!(fs in i), "Source origin is not allowed in %s", t)
        }
        var _s = "CANCELLED"
          , ks = "BLOCK_BY_CONSENT"
          , Cs = self.__AMP_ERRORS || [];
        self.__AMP_ERRORS = Cs;
        var Ns = function(t) {
            return (i = 0,
            n = function() {
                var t = Math.pow(1.5, i++);
                return 1e3 * (t + function(t, i) {
                    var n = t * (i = i || .3) * Math.random();
                    return Math.random() > .5 && (n *= -1),
                    n
                }(t))
            }
            ,
            Ns = function(t) {
                return setTimeout(t, n())
            }
            )(t);
            var i, n
        };
        function Ds(t, i) {
            try {
                if (t)
                    if (void 0 !== t.message)
                        t = f(t);
                    else {
                        var n = t;
                        (t = new Error(function(t) {
                            try {
                                return JSON.stringify(t)
                            } catch (i) {
                                return String(t)
                            }
                        }(n))).origError = n
                    }
                else
                    t = new Error("Unknown error");
                if (t.reported)
                    return t;
                if (t.reported = !0,
                t.messageArray) {
                    var r = B(t.messageArray, (function(t) {
                        return null == t ? void 0 : t.tagName
                    }
                    ));
                    r > -1 && (t.associatedElement = t.messageArray[r])
                }
                var e = i || t.associatedElement;
                if (e && e.classList && (e.classList.add("i-amphtml-error"),
                Dt().development && (e.classList.add("i-amphtml-element-error"),
                e.setAttribute("error-message", t.message))),
                self.console && (tt(t.message) || !t.expected)) {
                    var s = console.error || console.log;
                    t.messageArray ? s.apply(console, t.messageArray) : e ? s.call(console, t.message, e) : s.call(console, t.message)
                }
                e && e.dispatchCustomEventForTesting && e.dispatchCustomEventForTesting("amp:error", t.message),
                Ls.call(self, void 0, void 0, void 0, void 0, t)
            } catch (t) {
                setTimeout((function() {
                    throw t
                }
                ))
            }
            return t
        }
        function js() {
            return new Error(_s)
        }
        function Us(t) {
            return !!t && ("string" == typeof t ? t.startsWith(ks) : "string" == typeof t.message && t.message.startsWith(ks))
        }
        function Ls(t, i, n, r, e) {
            var s = this;
            if (!this || !this.document || e && e.expected || es(this.document),
            !Dt().development) {
                var u = !1;
                try {
                    u = function(t) {
                        if (!t.document)
                            return !1;
                        for (var i = t.document.querySelectorAll("script[src]"), n = 0; n < i.length; n++)
                            if (!xs(i[n].src.toLowerCase()))
                                return !0;
                        return !1
                    }(self)
                } catch (t) {}
                if (!(u && Math.random() > .01)) {
                    var o = function(t, i, n, r, e, s) {
                        t = function(t, i) {
                            return i && (t = i.message ? i.message : String(i)),
                            t || (t = "Unknown error"),
                            t
                        }(t, e);
                        var u, o, h = !(!e || !e.expected);
                        if (!/_reported_/.test(t) && t != _s) {
                            var a = !(self && self.window)
                              , c = Math.random();
                            if (!((function(t) {
                                return -1 != t.indexOf($e)
                            }(t) || "Script error." == t || a) && (h = !0,
                            c > .001))) {
                                var f = tt(t);
                                if (!(f && c > .1)) {
                                    var l = Object.create(null);
                                    l.v = Dt().rtvVersion,
                                    l.noAmp = s ? "1" : "0",
                                    l.m = t.replace(X, ""),
                                    l.a = f ? "1" : "0",
                                    l.ex = h ? "1" : "0",
                                    l.dw = a ? "1" : "0";
                                    var v = "1p";
                                    if (self.context && self.context.location ? (l["3p"] = "1",
                                    v = "3p") : Dt().runtime && (v = Dt().runtime),
                                    l.rt = v,
                                    "inabox" === v && (l.adid = Dt().a4aId),
                                    l.ca = null !== (o = self.AMP_CONFIG) && void 0 !== o && o.canary ? "1" : "0",
                                    l.bt = (null === (u = self.AMP_CONFIG) || void 0 === u ? void 0 : u.type) || "unknown",
                                    self.location.ancestorOrigins && self.location.ancestorOrigins[0] && (l.or = self.location.ancestorOrigins[0]),
                                    self.viewerState && (l.vs = self.viewerState),
                                    self.parent && self.parent != self && (l.iem = "1"),
                                    self.AMP && self.AMP.viewer) {
                                        var d = self.AMP.viewer.getResolvedViewerUrl()
                                          , m = self.AMP.viewer.maybeGetMessagingOrigin();
                                        d && (l.rvu = d),
                                        m && (l.mso = m)
                                    }
                                    var p, g, b, y = [], w = self[He] || null;
                                    for (var A in w) {
                                        var x = w[A];
                                        y.push("".concat(A, "=").concat(x ? "1" : "0"))
                                    }
                                    return l.exps = y.join(","),
                                    e ? (l.el = (null === (p = e.associatedElement) || void 0 === p ? void 0 : p.tagName) || "u",
                                    e.args && (l.args = JSON.stringify(e.args)),
                                    f || e.ignoreStack || !e.stack || (l.s = e.stack),
                                    e.message && (e.message += " _reported_")) : (l.f = i || "",
                                    l.l = n || "",
                                    l.c = r || ""),
                                    l.r = self.document ? self.document.referrer : "",
                                    l.ae = Cs.join(","),
                                    l.fr = self.location.originalHash || self.location.hash,
                                    "production" === l.bt && (l.pt = "1"),
                                    b = t,
                                    (g = Cs).length >= 25 && g.splice(0, g.length - 25 + 1),
                                    g.push(b),
                                    l
                                }
                            }
                        }
                    }(t, i, n, r, e, u);
                    o && Ns((function() {
                        try {
                            return function(t, i) {
                                return i.pt && Math.random() < .9 ? h() : function(t, i) {
                                    var n = Yn(t);
                                    if (!n.isSingleDoc())
                                        return Promise.resolve(!1);
                                    var r = n.getSingleDoc();
                                    if (!r.getRootNode().documentElement.hasAttribute("report-errors-to-viewer"))
                                        return Promise.resolve(!1);
                                    var e = vr(r);
                                    return e.hasCapability("errorReporter") ? e.isTrustedViewer().then((function(t) {
                                        return !!t && (e.sendMessage("error", {
                                            "m": (n = i).m,
                                            "a": n.a,
                                            "s": n.s,
                                            "el": n.el,
                                            "ex": n.ex,
                                            "v": n.v,
                                            "pt": n.pt
                                        }),
                                        !0);
                                        var n
                                    }
                                    )) : Promise.resolve(!1)
                                }(t, i).then((function(t) {
                                    if (!t) {
                                        var n = new XMLHttpRequest;
                                        n.open("POST", Math.random() < .1 ? Rt : St, !0),
                                        n.send(JSON.stringify(i))
                                    }
                                }
                                ))
                            }(s, o).catch((function() {}
                            ))
                        } catch (t) {}
                    }
                    ))
                }
            }
        }
        var zs = "Resource"
          , Hs = function() {
            function t(t, i, n) {
                i.__AMP__RESOURCE = this,
                this._i = t,
                this.element = i,
                this.debugid = i.tagName.toLowerCase() + "#" + t,
                this.hostWin = i.ownerDocument.defaultView,
                this.Ri = n,
                this.Ni = i.hasAttribute("placeholder"),
                this.Ci = !1,
                this.Di = void 0,
                this.ji = i.isBuilt() ? 1 : 0,
                0 == this.ji && i.isBuilding() && this.build(),
                this.zi = -1,
                this.Ui = 0,
                this.Li = null,
                this.Hi = null,
                this.Gi = !1,
                this.Vi = zi(-1e4, -1e4, 0, 0),
                this.Fi = null,
                this.Bi = !1,
                this.qi = null,
                this.Wi = null,
                this.$i = void 0;
                var r = new a;
                this.Ki = r.promise,
                this.Yi = r.resolve,
                this.Ji = !1
            }
            t.forElement = function(i) {
                return Zt(t.forElementOptional(i))
            }
            ,
            t.forElementOptional = function(t) {
                return t.__AMP__RESOURCE
            }
            ,
            t.setOwner = function(i, n) {
                Zt(n.contains(i)),
                t.forElementOptional(i) && t.forElementOptional(i).updateOwner(n),
                i.__AMP__OWNER = n;
                for (var r = i.getElementsByClassName("i-amphtml-element"), e = 0; e < r.length; e++) {
                    var s = r[e];
                    t.forElementOptional(s) && t.forElementOptional(s).updateOwner(void 0)
                }
            }
            ;
            var i = t.prototype;
            return i.getId = function() {
                return this._i
            }
            ,
            i.updateOwner = function(t) {
                this.Di = t
            }
            ,
            i.getOwner = function() {
                if (void 0 === this.Di) {
                    for (var t = this.element; t; t = t.parentElement)
                        if (t.__AMP__OWNER) {
                            this.Di = t.__AMP__OWNER;
                            break
                        }
                    void 0 === this.Di && (this.Di = null)
                }
                return this.Di
            }
            ,
            i.hasOwner = function() {
                return !!this.getOwner()
            }
            ,
            i.getLayoutPriority = function() {
                return -1 != this.zi ? this.zi : this.element.getLayoutPriority()
            }
            ,
            i.updateLayoutPriority = function(t) {
                this.zi = t
            }
            ,
            i.getState = function() {
                return this.ji
            }
            ,
            i.isBuilt = function() {
                return this.element.isBuilt()
            }
            ,
            i.isBuilding = function() {
                return this.Ci
            }
            ,
            i.whenBuilt = function() {
                return this.element.signals().whenSignal("res-built")
            }
            ,
            i.build = function() {
                var t = this;
                return this.Ci || !this.element.isUpgraded() ? null : (this.Ci = !0,
                this.element.buildInternal().then((function() {
                    t.Ci = !1,
                    t.ji = 1,
                    t.element.signals().signal("res-built")
                }
                ), (function(i) {
                    throw t.maybeReportErrorOnBuildFailure(i),
                    t.Ci = !1,
                    t.element.signals().rejectSignal("res-built", i),
                    i
                }
                )))
            }
            ,
            i.maybeReportErrorOnBuildFailure = function(t) {
                Us(t) || Qt().error(zs, "failed to build:", this.debugid, t)
            }
            ,
            i.changeSize = function(t, i, n) {
                this.element.applySize(t, i, n),
                this.requestMeasure()
            }
            ,
            i.overflowCallback = function(t, i, n, r) {
                t && (this.$i = {
                    height: i,
                    width: n,
                    margins: r
                }),
                this.element.overflowCallback(t, i, n, r)
            }
            ,
            i.resetPendingChangeSize = function() {
                this.$i = void 0
            }
            ,
            i.getPendingChangeSize = function() {
                return this.$i
            }
            ,
            i.getUpgradeDelayMs = function() {
                return this.element.getUpgradeDelayMs()
            }
            ,
            i.measure = function() {
                if (!(this.Ni && this.element.parentElement && this.element.parentElement.tagName.startsWith("AMP-")) || "__AMP__RESOURCE"in this.element.parentElement)
                    if (this.element.ownerDocument && this.element.ownerDocument.defaultView) {
                        this.Bi = !1;
                        var t = this.Vi;
                        this.Xi();
                        var i, n, r = this.Vi, e = (n = r,
                        !((i = t).width == n.width && i.height === n.height));
                        (1 == this.ji || t.top != r.top || e) && this.element.isUpgraded() && (1 == this.ji ? this.ji = 2 : 4 != this.ji && 5 != this.ji || !this.element.isRelayoutNeeded() || (this.ji = 2)),
                        this.hasBeenMeasured() || (this.Fi = r),
                        this.element.updateLayoutBox(r, e)
                    } else
                        this.ji = 1
            }
            ,
            i.ensureMeasured = function() {
                var t = this;
                return this.hasBeenMeasured() ? h() : dr(this.hostWin).measure((function() {
                    return t.measure()
                }
                ))
            }
            ,
            i.Xi = function() {
                var t = mr(this.element);
                this.Vi = t.getLayoutRect(this.element);
                var i = !1;
                if (t.supportsPositionFixed() && this.isDisplayed())
                    for (var n = this.Ri.getAmpdoc().win, r = n.document.body, e = this.element; e && e != r; e = e.offsetParent) {
                        if (e.isAlwaysFixed && e.isAlwaysFixed()) {
                            i = !0;
                            break
                        }
                        if (t.isDeclaredFixed(e) && "fixed" == Nr(n, e).position) {
                            i = !0;
                            break
                        }
                    }
                this.Gi = i,
                i && (this.Vi = Gi(this.Vi, -t.getScrollLeft(), -t.getScrollTop()))
            }
            ,
            i.completeCollapse = function() {
                kr(this.element, !1),
                this.Vi = zi(this.Vi.left, this.Vi.top, 0, 0),
                this.Gi = !1,
                this.element.updateLayoutBox(this.getLayoutBox());
                var t = this.getOwner();
                t && t.collapsedCallback(this.element)
            }
            ,
            i.completeExpand = function() {
                kr(this.element, !0),
                this.requestMeasure()
            }
            ,
            i.isMeasureRequested = function() {
                return this.Bi
            }
            ,
            i.hasBeenMeasured = function() {
                return !!this.Fi
            }
            ,
            i.requestMeasure = function() {
                this.Bi = !0
            }
            ,
            i.getLayoutSize = function() {
                return i = (t = this.Vi).height,
                {
                    width: t.width,
                    height: i
                };
                var t, i
            }
            ,
            i.getLayoutBox = function() {
                if (!this.Gi)
                    return this.Vi;
                var t = mr(this.element);
                return Gi(this.Vi, t.getScrollLeft(), t.getScrollTop())
            }
            ,
            i.getInitialLayoutBox = function() {
                return this.Fi || this.Vi
            }
            ,
            i.isDisplayed = function() {
                if (!this.element.ownerDocument || !this.element.ownerDocument.defaultView)
                    return !1;
                var t = this.element.getLayout() == se
                  , i = this.getLayoutBox()
                  , n = i.height > 0 && i.width > 0;
                return t || n
            }
            ,
            i.isFixed = function() {
                return this.Gi
            }
            ,
            i.overlaps = function(t) {
                return n = t,
                (i = this.getLayoutBox()).top <= n.bottom && n.top <= i.bottom && i.left <= n.right && n.left <= i.right;
                var i, n
            }
            ,
            i.prerenderAllowed = function() {
                return this.element.prerenderAllowed()
            }
            ,
            i.previewAllowed = function() {
                return this.element.previewAllowed()
            }
            ,
            i.isBuildRenderBlocking = function() {
                return this.element.isBuildRenderBlocking()
            }
            ,
            i.whenWithinViewport = function(t) {
                if (Zt(!1 !== t),
                !this.isLayoutPending() || !0 === t)
                    return h();
                var i = t
                  , n = String(i);
                return this.qi && this.qi[n] ? this.qi[n].promise : this.isWithinViewportRatio(i) ? h() : (this.qi = this.qi || {},
                this.qi[n] = new a,
                this.qi[n].promise)
            }
            ,
            i.Qi = function() {
                if (this.qi) {
                    var t = this.getDistanceViewportRatio();
                    for (var i in this.qi)
                        this.isWithinViewportRatio(parseFloat(i), t) && (this.qi[i].resolve(),
                        delete this.qi[i])
                }
            }
            ,
            i.getDistanceViewportRatio = function() {
                var t = mr(this.element).getRect()
                  , i = this.getLayoutBox()
                  , n = this.Ri.getScrollDirection()
                  , r = 1
                  , e = 0;
                if (t.right < i.left || t.left > i.right)
                    return {
                        distance: !1
                    };
                if (t.bottom < i.top)
                    e = i.top - t.bottom,
                    -1 == n && (r = 2);
                else {
                    if (!(t.top > i.bottom))
                        return {
                            distance: !0
                        };
                    e = t.top - i.bottom,
                    1 == n && (r = 2)
                }
                return {
                    distance: e,
                    scrollPenalty: r,
                    viewportHeight: t.height
                }
            }
            ,
            i.isWithinViewportRatio = function(t, i) {
                if ("boolean" == typeof t)
                    return t;
                var n = i || this.getDistanceViewportRatio()
                  , r = n.distance
                  , e = n.scrollPenalty
                  , s = n.viewportHeight;
                return "boolean" == typeof r ? r : r < s * t / e
            }
            ,
            i.renderOutsideViewport = function() {
                return this.Qi(),
                this.hasOwner() || this.isWithinViewportRatio(this.element.renderOutsideViewport())
            }
            ,
            i.idleRenderOutsideViewport = function() {
                return this.isWithinViewportRatio(this.element.idleRenderOutsideViewport())
            }
            ,
            i.layoutScheduled = function(t) {
                this.ji = 3,
                this.element.layoutScheduleTime = t
            }
            ,
            i.layoutCanceled = function() {
                this.ji = this.hasBeenMeasured() ? 2 : 1
            }
            ,
            i.startLayout = function() {
                var t = this;
                if (this.Wi)
                    return this.Wi;
                if (4 == this.ji)
                    return h();
                if (5 == this.ji)
                    return Promise.reject(this.Hi);
                if (Zt(0 != this.ji),
                Zt(this.isDisplayed()),
                3 != this.ji) {
                    var i = Qt().createExpectedError("startLayout called but not LAYOUT_SCHEDULED", "currently: ", this.ji);
                    return Ds(i, this.element),
                    Promise.reject(i)
                }
                if (this.Ui > 0 && !this.element.isRelayoutNeeded())
                    return Qt().fine(zs, "layout canceled since it wasn't requested:", this.debugid, this.ji),
                    this.ji = 4,
                    h();
                Qt().fine(zs, "start layout:", this.debugid, "count:", this.Ui),
                this.Ui++,
                this.ji = 3,
                this.Li = new AbortController;
                var n = this.Li.signal
                  , r = new Promise((function(i, r) {
                    dr(t.hostWin).mutate((function() {
                        var e;
                        try {
                            e = t.element.layoutCallback(n)
                        } catch (t) {
                            r(t)
                        }
                        Promise.resolve(e).then(i, r)
                    }
                    )),
                    n.onabort = function() {
                        return r(js())
                    }
                }
                )).then((function() {
                    return t.Zi(!0, n)
                }
                ), (function(i) {
                    return t.Zi(!1, n, i)
                }
                ));
                return this.Wi = r
            }
            ,
            i.Zi = function(t, i, n) {
                if (this.Li = null,
                i.aborted) {
                    var r = Qt().createError("layoutComplete race");
                    throw r.associatedElement = this.element,
                    Qt().expectedError(zs, r),
                    js()
                }
                if (this.Yi && (this.Yi(),
                this.Yi = null),
                this.Wi = null,
                this.ji = t ? 4 : 5,
                this.Hi = n,
                !t)
                    return Qt().fine(zs, "loading failed:", this.debugid, n),
                    Promise.reject(n);
                Qt().fine(zs, "layout complete:", this.debugid)
            }
            ,
            i.isLayoutPending = function() {
                return 4 != this.ji && 5 != this.ji
            }
            ,
            i.loadedOnce = function() {
                return this.element.R1() ? this.element.whenLoaded() : this.Ki
            }
            ,
            i.isInViewport = function() {
                return this.Ji && this.Qi(),
                this.Ji
            }
            ,
            i.setInViewport = function(t) {
                this.Ji = t
            }
            ,
            i.unlayout = function() {
                0 != this.ji && 1 != this.ji && 2 != this.ji && (this.Li && (this.Li.abort(),
                this.Li = null),
                this.setInViewport(!1),
                this.element.unlayoutCallback() && (this.element.togglePlaceholder(!0),
                this.ji = 1,
                this.Ui = 0,
                this.Wi = null))
            }
            ,
            i.getTaskId = function(t) {
                return this.debugid + "#" + t
            }
            ,
            i.pause = function() {
                this.element.pause()
            }
            ,
            i.pauseOnRemove = function() {
                this.element.pause()
            }
            ,
            i.resume = function() {
                this.element.resume()
            }
            ,
            i.unload = function() {
                this.element.unmount()
            }
            ,
            i.disconnect = function() {
                delete this.element.__AMP__RESOURCE,
                this.element.disconnect(!0)
            }
            ,
            t
        }()
          , Gs = "ready-scan"
          , Vs = "scheduler"
          , Fs = "250% 31.25%"
          , qs = function() {
            function t(t) {
                var i = this;
                this.Lr = t;
                var n = t.win;
                this.Wr = new n.IntersectionObserver((function(t) {
                    return i.Kr(t)
                }
                ),{
                    root: Ni(n) ? n.document : null,
                    rootMargin: Fs
                }),
                this.Yr = new Map,
                this.Xr = new Map,
                this.Qr = [],
                this.te = !1,
                t.whenReady().then((function() {
                    return i.ie()
                }
                )),
                this.ne = t.onVisibilityChanged((function() {
                    return i.re()
                }
                ))
            }
            var i = t.prototype;
            return i.dispose = function() {
                this.Wr.disconnect(),
                this.Xr.clear(),
                this.ne && (this.ne(),
                this.ne = null)
            }
            ,
            i.scheduleAsap = function(t) {
                this.Xr.set(t, {
                    asap: !0,
                    isIntersecting: !1
                }),
                this.ee(t)
            }
            ,
            i.schedule = function(t) {
                this.Xr.has(t) || (t.deferredMount() ? (this.Xr.set(t, {
                    asap: !1,
                    isIntersecting: !1
                }),
                this.Wr.observe(t),
                this.Yr.size > 0 && this.Yr.forEach((function(i, n) {
                    ji(n, t) && i.observe(t)
                }
                ))) : this.Xr.set(t, {
                    asap: !1,
                    isIntersecting: !0
                }),
                this.ee(t))
            }
            ,
            i.unschedule = function(t) {
                this.Xr.has(t) && (this.Xr.delete(t),
                this.Wr.unobserve(t),
                this.Yr.size > 0 && this.Yr.forEach((function(i) {
                    i.unobserve(t)
                }
                )),
                this.Qr && ($(this.Qr, t),
                this.ie()))
            }
            ,
            i.setContainer = function(t, i) {
                var n = this;
                if (!this.Yr.has(t)) {
                    var r = new this.Lr.win.IntersectionObserver((function(t) {
                        return n.Kr(t)
                    }
                    ),{
                        root: i || t,
                        rootMargin: Fs
                    });
                    this.Yr.set(t, r),
                    this.Xr.forEach((function(i, n) {
                        !i.asap && ji(t, n) && r.observe(n)
                    }
                    ))
                }
            }
            ,
            i.removeContainer = function(t) {
                var i = this.Yr.get(t);
                i && (i.disconnect(),
                this.Yr.delete(t))
            }
            ,
            i.se = function() {
                var t = this;
                this.Lr.isReady() && !this.te && (this.te = !0,
                this.Lr.win.setTimeout((function() {
                    t.Lr.signals().signal(Gs)
                }
                ), 50))
            }
            ,
            i.re = function() {
                var t = this
                  , i = this.Lr.getVisibilityState();
                i != yr && i != wr && i != gr && i != br || this.Xr.forEach((function(i, n) {
                    return t.oe(n)
                }
                ))
            }
            ,
            i.ee = function(t) {
                var i = this.Qr;
                i ? (i.includes(t) || i.push(t),
                this.ie()) : this.oe(t)
            }
            ,
            i.ie = function() {
                var t = this.Lr.isReady()
                  , i = this.Qr;
                if (i)
                    for (var n = 0; n < i.length; n++) {
                        var r = i[n];
                        (t || ki(r, this.Lr.getRootNode())) && (i.splice(n--, 1),
                        this.oe(r))
                    }
                t && (this.Qr = null,
                this.se())
            }
            ,
            i.Kr = function(t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i]
                      , r = n.isIntersecting
                      , e = n.target
                      , s = this.Xr.get(e);
                    if (s) {
                        var u = r || s.isIntersecting;
                        u !== s.isIntersecting && this.Xr.set(e, {
                            asap: s.asap,
                            isIntersecting: u
                        }),
                        u && this.oe(e)
                    }
                }
            }
            ,
            i.oe = function(t) {
                var i = this.Qr
                  , n = !(i && i.includes(t))
                  , r = this.Xr.get(t) || {
                    asap: !1,
                    isIntersecting: !1
                }
                  , e = r.asap
                  , s = r.isIntersecting
                  , u = this.Lr.getVisibilityState();
                if (n && (e || s) && (u == yr || u == wr || u == gr && t.prerenderAllowed() || u == br && t.previewAllowed())) {
                    this.unschedule(t);
                    var o = this.Lr.win;
                    (e || t.getBuildPriority() <= 0 ? o.setTimeout : o.requestIdleCallback || o.setTimeout)((function() {
                        return t.mountInternal()
                    }
                    ))
                }
            }
            ,
            t
        }();
        function Bs(t) {
            return xn(t, Vs, qs),
            Pn(t, Vs)
        }
        var $s = function() {
            function t() {
                this.ue = []
            }
            var n = t.prototype;
            return n.peek = function() {
                var t = this.length;
                return t ? this.ue[t - 1].item : null
            }
            ,
            n.enqueue = function(t, i) {
                if (isNaN(i))
                    throw new Error("Priority must not be NaN.");
                var n = this.he(i);
                this.ue.splice(n, 0, {
                    item: t,
                    priority: i
                })
            }
            ,
            n.he = function(t) {
                for (var i = -1, n = 0, r = this.length; n <= r && (i = Math.floor((n + r) / 2)) !== this.length; )
                    if (this.ue[i].priority < t)
                        n = i + 1;
                    else {
                        if (!(i > 0 && this.ue[i - 1].priority >= t))
                            break;
                        r = i - 1
                    }
                return i
            }
            ,
            n.forEach = function(t) {
                for (var i = this.length; i--; )
                    t(this.ue[i].item)
            }
            ,
            n.dequeue = function() {
                var t = this.ue.pop();
                return t ? t.item : null
            }
            ,
            i(t, [{
                key: "length",
                get: function() {
                    return this.ue.length
                }
            }]),
            t
        }()
          , Ws = "CHUNK"
          , Ys = /nochunking=1/.test(self.location.hash)
          , Ks = h();
        function Js(t) {
            return xn(t, "chunk", nu),
            Pn(t, "chunk")
        }
        function Xs(t, i, n) {
            if (Ys)
                Ks.then(i);
            else {
                var r = Js(t.documentElement || t);
                r.runForStartup(i),
                n && r.runForStartup((function() {
                    r.ae = !0
                }
                ))
            }
        }
        function Qs(t, i, n) {
            Ys ? Ks.then(i) : Js(t).run(i, n)
        }
        var Zs = "not_run"
          , tu = function() {
            function t(t) {
                this.state = Zs,
                this.ce = t
            }
            var i = t.prototype;
            return i.fe = function(t) {
                if ("run" != this.state) {
                    this.state = "run";
                    try {
                        this.ce(t)
                    } catch (t) {
                        throw this.le(t),
                        t
                    }
                }
            }
            ,
            i.ve = function() {
                return this.ce.displayName || this.ce.name
            }
            ,
            i.le = function(t) {}
            ,
            i.de = function() {
                return !1
            }
            ,
            i.me = function() {
                return !1
            }
            ,
            t
        }()
          , iu = function(t) {
            U(n, t);
            var i = H(n);
            function n(t, n, r) {
                var e;
                return (e = i.call(this, t)).pe = r,
                e
            }
            var r = n.prototype;
            return r.le = function(t) {
                es(self.document)
            }
            ,
            r.de = function() {
                return this.be()
            }
            ,
            r.me = function() {
                return this.pe.ge
            }
            ,
            r.be = function() {
                return this.pe.ampdoc.isVisible()
            }
            ,
            n
        }(tu)
          , nu = function() {
            function t(t) {
                var i, n = this;
                this.ampdoc = t,
                this.t = t.win,
                this.ye = new $s,
                this.we = this.Ae.bind(this),
                this.xe = 0,
                this.Ee = !(!this.t.navigator.scheduling || !this.t.navigator.scheduling.isInputPending),
                this.Oe = !1,
                this.ae = this.t.document.documentElement.hasAttribute("i-amphtml-no-boilerplate"),
                this.t.addEventListener("message", (function(t) {
                    "amp-macro-task" == Ke(t) && n.Ae(null)
                }
                )),
                this.ge = !1,
                (i = t,
                In(i, "viewer")).then((function() {
                    n.ge = !0
                }
                )),
                t.onVisibilityChanged((function() {
                    t.isVisible() && n.Pe()
                }
                ))
            }
            var i = t.prototype;
            return i.run = function(t, i) {
                var n = new tu(t);
                this.Te(n, i)
            }
            ,
            i.runForStartup = function(t) {
                var i = new iu(t,this.t,this);
                this.Te(i, Number.POSITIVE_INFINITY)
            }
            ,
            i.Te = function(t, i) {
                this.ye.enqueue(t, i),
                this.Pe()
            }
            ,
            i.Ie = function(t) {
                for (var i = this.ye.peek(); i && i.state !== Zs; )
                    this.ye.dequeue(),
                    i = this.ye.peek();
                return i && t && this.ye.dequeue(),
                i
            }
            ,
            i.Ae = function(t) {
                var i, n = this, r = this.Ie(!0);
                if (!r)
                    return this.Oe = !1,
                    this.xe = 0,
                    !1;
                try {
                    i = Date.now(),
                    r.fe(t)
                } finally {
                    Ks.then().then().then().then().then().then().then().then().then((function() {
                        n.Oe = !1,
                        n.xe += Date.now() - i,
                        Qt().fine(Ws, r.ve(), "Chunk duration", Date.now() - i, n.xe),
                        n.Pe()
                    }
                    ))
                }
                return !0
            }
            ,
            i.Me = function(t) {
                var i = this;
                if (this.ae && (this.Ee ? this.t.navigator.scheduling.isInputPending() : this.xe > 5))
                    return this.xe = 0,
                    void this.Se();
                Ks.then((function() {
                    i.we(t)
                }
                ))
            }
            ,
            i.Pe = function() {
                if (!this.Oe) {
                    var t = this.Ie();
                    if (t)
                        return t.de() ? (this.Oe = !0,
                        void this.Me(null)) : void (t.me() && this.t.requestIdleCallback ? function(t, i, n, r) {
                            var e = Date.now();
                            t.requestIdleCallback((function i(s) {
                                if (s.timeRemaining() < 15) {
                                    var u = n - (Date.now() - e);
                                    u <= 0 || s.didTimeout ? (Qt().fine(Ws, "Timed out", n, s.didTimeout),
                                    r(s)) : (Qt().fine(Ws, "Rescheduling with", u, s.timeRemaining()),
                                    t.requestIdleCallback(i, {
                                        timeout: u
                                    }))
                                } else
                                    Qt().fine(Ws, "Running idle callback with ", 15),
                                    r(s)
                            }
                            ), {
                                timeout: n
                            })
                        }(this.t, 0, 2e3, this.we) : this.Se())
                }
            }
            ,
            i.Se = function() {
                this.t.postMessage("amp-macro-task", "*")
            }
            ,
            t
        }()
          , ru = "activate"
          , eu = function() {
            function t(t) {
                this.element = t,
                this.win = oi(t),
                this.actionMap_ = null,
                this.defaultActionAlias_ = null
            }
            t.R1 = function() {
                return !1
            }
            ,
            t.deferredMount = function(t) {
                return !0
            }
            ,
            t.prerenderAllowed = function(t) {
                return !1
            }
            ,
            t.previewAllowed = function(t) {
                return this.prerenderAllowed(t)
            }
            ,
            t.usesLoading = function(t) {
                return !1
            }
            ,
            t.createLoaderLogoCallback = function(t) {
                return {}
            }
            ,
            t.getBuildPriority = function(t) {
                return 0
            }
            ,
            t.getPreconnects = function(t) {
                return null
            }
            ,
            t.requiresShadowDom = function() {
                return !1
            }
            ;
            var i = t.prototype;
            return i.signals = function() {
                return this.element.signals()
            }
            ,
            i.getDefaultActionAlias = function() {
                return this.defaultActionAlias_
            }
            ,
            i.getLayoutPriority = function() {
                return 0
            }
            ,
            i.updateLayoutPriority = function(t) {
                this.element.getResources().updateLayoutPriority(this.element, t)
            }
            ,
            i.getLayout = function() {
                return this.element.getLayout()
            }
            ,
            i.getLayoutBox = function() {
                return this.element.getLayoutBox()
            }
            ,
            i.getLayoutSize = function() {
                return this.element.getLayoutSize()
            }
            ,
            i.getAmpDoc = function() {
                return this.element.getAmpDoc()
            }
            ,
            i.getVsync = function() {
                return dr(this.win)
            }
            ,
            i.getConsentPolicy = function() {
                var t = null;
                return this.element.hasAttribute("data-block-on-consent") && (t = this.element.getAttribute("data-block-on-consent") || "default"),
                t
            }
            ,
            i.isLayoutSupported = function(t) {
                return t == Qr
            }
            ,
            i.isAlwaysFixed = function() {
                return !1
            }
            ,
            i.upgradeCallback = function() {
                return null
            }
            ,
            i.buildCallback = function() {}
            ,
            i.preconnectCallback = function(t) {}
            ,
            i.attachedCallback = function() {}
            ,
            i.detachedCallback = function() {}
            ,
            i.setAsContainer = function(t) {
                this.element.setAsContainerInternal(t)
            }
            ,
            i.removeAsContainer = function() {
                this.element.removeAsContainerInternal()
            }
            ,
            i.isBuildRenderBlocking = function() {
                return !1
            }
            ,
            i.createPlaceholderCallback = function() {
                return null
            }
            ,
            i.renderOutsideViewport = function() {
                return "inabox" == Dt(this.win).runtime || 3
            }
            ,
            i.idleRenderOutsideViewport = function() {
                return !1
            }
            ,
            i.ensureLoaded = function() {}
            ,
            i.setReadyState = function(t, i) {
                this.element.setReadyStateInternal(t, i)
            }
            ,
            i.mountCallback = function(t) {}
            ,
            i.unmountCallback = function() {}
            ,
            i.isRelayoutNeeded = function() {
                return !1
            }
            ,
            i.layoutCallback = function() {
                return h()
            }
            ,
            i.firstLayoutCompleted = function() {
                this.togglePlaceholder(!1)
            }
            ,
            i.pauseCallback = function() {}
            ,
            i.resumeCallback = function() {}
            ,
            i.unlayoutCallback = function() {
                return !1
            }
            ,
            i.unlayoutOnPause = function() {
                return !1
            }
            ,
            i.reconstructWhenReparented = function() {
                return !0
            }
            ,
            i.loadPromise = function(t) {
                return Xe(t)
            }
            ,
            i.registerAction = function(t, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                su(this),
                this.actionMap_[t] = {
                    handler: i,
                    minTrust: n
                }
            }
            ,
            i.registerDefaultAction = function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ru
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                Zt(!this.defaultActionAlias_),
                this.registerAction(i, t, n),
                this.defaultActionAlias_ = i
            }
            ,
            i.executeAction = function(t, i) {
                var n = t.method;
                n === ru && (n = this.defaultActionAlias_ || n),
                su(this);
                var r = this.actionMap_[n]
                  , e = this.element.tagName;
                ti(r, "Method not found: ".concat(n, " in ").concat(e));
                var s = r.handler
                  , u = r.minTrust;
                if (t.satisfiesTrust(u))
                    return s(t)
            }
            ,
            i.forwardEvents = function(t, i) {
                var n = this
                  , r = (V(t) ? t : [t]).map((function(t) {
                    return Ye(i, t, (function(i) {
                        Di(n.element, t, Ke(i) || {})
                    }
                    ))
                }
                ));
                return function() {
                    return r.forEach((function(t) {
                        return t()
                    }
                    ))
                }
            }
            ,
            i.getPlaceholder = function() {
                return this.element.getPlaceholder()
            }
            ,
            i.togglePlaceholder = function(t) {
                this.element.togglePlaceholder(t)
            }
            ,
            i.getFallback = function() {
                return this.element.getFallback()
            }
            ,
            i.toggleFallback = function(t) {
                this.element.toggleFallback(t)
            }
            ,
            i.toggleLoading = function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.element.toggleLoading(t, i)
            }
            ,
            i.getOverflowElement = function() {
                return this.element.getOverflowElement()
            }
            ,
            i.renderStarted = function() {
                this.element.renderStarted()
            }
            ,
            i.getViewport = function() {
                return mr(this.getAmpDoc())
            }
            ,
            i.getIntersectionElementLayoutBox = function() {
                return this.getLayoutBox()
            }
            ,
            i.collapse = function() {
                rr(this.getAmpDoc()).collapseElement(this.element)
            }
            ,
            i.attemptCollapse = function() {
                return rr(this.getAmpDoc()).attemptCollapse(this.element)
            }
            ,
            i.forceChangeHeight = function(t) {
                rr(this.getAmpDoc()).forceChangeSize(this.element, t, void 0)
            }
            ,
            i.attemptChangeHeight = function(t) {
                return rr(this.getAmpDoc()).requestChangeSize(this.element, t, void 0)
            }
            ,
            i.attemptChangeSize = function(t, i, n) {
                return rr(this.getAmpDoc()).requestChangeSize(this.element, t, i, void 0, n)
            }
            ,
            i.measureElement = function(t) {
                return rr(this.getAmpDoc()).measureElement(t)
            }
            ,
            i.mutateElement = function(t, i) {
                return this.measureMutateElement(null, t, i)
            }
            ,
            i.measureMutateElement = function(t, i, n) {
                return rr(this.getAmpDoc()).measureMutateElement(n || this.element, t, i)
            }
            ,
            i.mutateElementSkipRemeasure = function(t) {
                return rr(this.getAmpDoc()).mutateElement(this.element, t, !0)
            }
            ,
            i.collapsedCallback = function(t) {}
            ,
            i.expand = function() {
                rr(this.getAmpDoc()).expandElement(this.element)
            }
            ,
            i.mutatedAttributesCallback = function(t) {}
            ,
            i.onLayoutMeasure = function() {}
            ,
            i.user = function() {
                return Jt(this.element)
            }
            ,
            i.getApi = function() {
                return this
            }
            ,
            t
        }();
        function su(t) {
            t.actionMap_ || (t.actionMap_ = t.win.Object.create(null))
        }
        var uu, ou = function(t) {
            U(n, t);
            var i = H(n);
            function n() {
                return i.apply(this, arguments)
            }
            return n
        }(eu), hu = Date.now(), au = {
            bubbles: !1
        }, cu = function() {
            return !0
        }, fu = [], lu = new Set;
        function vu(t, n) {
            var r = function(t, n) {
                if (t.__AMP_BASE_CE_CLASS)
                    return t.__AMP_BASE_CE_CLASS;
                var r = function(r) {
                    U(s, r);
                    var e = H(s);
                    function s() {
                        var t;
                        return (t = e.call(this)).createdCallback(),
                        t
                    }
                    var u = s.prototype;
                    return u.createdCallback = function() {
                        this.ke = !1,
                        this.Bn = !1,
                        this._e = null,
                        this.Ct = !1,
                        this.Re = null,
                        this.Ne = null,
                        this.Ce = "upgrading",
                        this.everAttached = !1,
                        this.Lr = null,
                        this.Ri = null,
                        this.De = Qr,
                        this.Ui = 0,
                        this.je = !1,
                        this.warnOnMissingOverflow = !0,
                        this.sizerElement = void 0,
                        this.ze = void 0,
                        this.layoutScheduleTime = void 0;
                        var i = this
                          , n = t.__AMP_EXTENDED_ELEMENTS && t.__AMP_EXTENDED_ELEMENTS[this.localName];
                        this.Ue = n === ou ? null : n || null,
                        this.Ue || fu.push(this),
                        this.Le = null,
                        this.He = 1,
                        this.Ge = 0,
                        this.Ve = void 0,
                        this.Fe = void 0,
                        this.di = new Pr,
                        this.Ue && this.di.signal(we);
                        var r = function(t, i) {
                            return zn(t = Tn(t), i) ? kn(t, i) : null
                        }(t, "performance");
                        this.Be = r && r.isPerformanceTrackingOn(),
                        this.Et = null,
                        i.__AMP_UPG_RES && (i.__AMP_UPG_RES(i),
                        delete i.__AMP_UPG_RES,
                        delete i.__AMP_UPG_PRM)
                    }
                    ,
                    u.signals = function() {
                        return this.di
                    }
                    ,
                    u.getAmpDoc = function() {
                        return Zt(this.Lr),
                        this.Lr
                    }
                    ,
                    u.getResources = function() {
                        return Zt(this.Ri),
                        this.Ri
                    }
                    ,
                    u.isUpgraded = function() {
                        return 2 == this.He
                    }
                    ,
                    u.whenUpgraded = function() {
                        return this.di.whenSignal(Ae)
                    }
                    ,
                    u.upgrade = function(t) {
                        this.Fe || 1 == this.He && (this.Ue = t,
                        this.di.signal(we),
                        this.everAttached && this.qe())
                    }
                    ,
                    u.markUnresolved = function() {
                        this.Ue || this.classList.add("amp-unresolved", "i-amphtml-unresolved")
                    }
                    ,
                    u.getUpgradeDelayMs = function() {
                        return this.Ge
                    }
                    ,
                    u.We = function(i, n) {
                        this.Le = i,
                        this.Ge = t.Date.now() - n,
                        this.He = 2,
                        this.setReadyStateInternal(en),
                        this.classList.remove("amp-unresolved", "i-amphtml-unresolved"),
                        this.$e(),
                        this.dispatchCustomEventForTesting(ge),
                        this.R1() || this.getResources().upgraded(this),
                        this.di.signal(Ae)
                    }
                    ,
                    u.$e = function() {
                        this.De != Qr && this.Le && !this.Le.isLayoutSupported(this.De) && (ti(this.getAttribute("layout"), "The element did not specify a layout attribute. Check https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/control_layout and the respective element documentation for details."),
                        ti(!1, "Layout not supported: ".concat(this.De)))
                    }
                    ,
                    u.getBuildPriority = function() {
                        return this.Ue ? this.Ue.getBuildPriority(this) : 3
                    }
                    ,
                    u.getLayoutPriority = function() {
                        return this.Le ? this.Le.getLayoutPriority() : 3
                    }
                    ,
                    u.getDefaultActionAlias = function() {
                        return Zt(this.isUpgraded()),
                        this.Le.getDefaultActionAlias()
                    }
                    ,
                    u.isBuilding = function() {
                        return !!this._e
                    }
                    ,
                    u.isBuilt = function() {
                        return this.ke
                    }
                    ,
                    u.whenBuilt = function() {
                        return this.di.whenSignal(xe)
                    }
                    ,
                    u.buildInternal = function() {
                        var t = this;
                        if (mu(this),
                        Zt(this.Ue),
                        this._e)
                            return this._e;
                        this.setReadyStateInternal(en);
                        var i = this.Ke();
                        this.Ye();
                        var n = i.then((function() {
                            var i, n = t.Je(), r = n ? null : t.Xe();
                            if (n || r)
                                return (i = t,
                                Gn(i, "consentPolicyManager", "amp-consent")).then((function(t) {
                                    return !t || (n ? t.whenPolicyUnblock(n) : t.whenPurposesUnblock(r))
                                }
                                )).then((function(t) {
                                    if (!t)
                                        throw new Error(ks)
                                }
                                ))
                        }
                        )).then((function() {
                            return Zt(t.Le).buildCallback()
                        }
                        ));
                        return this._e = n.then((function() {
                            if (t.ke = !0,
                            t.classList.add("i-amphtml-built"),
                            t.classList.remove("i-amphtml-notbuilt", "amp-notbuilt"),
                            t.di.signal(xe),
                            t.R1() ? t.setReadyStateInternal(t.Ce != en ? t.Ce : sn) : (t.setReadyStateInternal(un),
                            t.preconnect(!1)),
                            t.Bn && t.vr(),
                            t.Ve && ar(oi(t)).delay(t.Qe.bind(t), 1),
                            !t.getPlaceholder()) {
                                var i = t.createPlaceholder();
                                i && t.appendChild(i)
                            }
                        }
                        ), (function(i) {
                            throw t.di.rejectSignal(xe, i),
                            t.R1() && t.setReadyStateInternal(hn, i),
                            Us(i) || Ds(i, t),
                            i
                        }
                        ))
                    }
                    ,
                    u.build = function() {
                        var t = this;
                        return this._e ? this._e : this.di.whenSignal(we).then((function() {
                            return t.R1() && Bs(t.getAmpDoc()).scheduleAsap(t),
                            t.whenBuilt()
                        }
                        ))
                    }
                    ,
                    u.mountInternal = function() {
                        var t = this;
                        if (this.Re)
                            return this.Re;
                        this.Ne = this.Ne || new AbortController;
                        var i = this.Ne.signal;
                        return this.Re = this.buildInternal().then((function() {
                            if (Zt(t.R1()),
                            !i.aborted) {
                                t.setReadyStateInternal(t.Ce != sn ? t.Ce : t.Ue.usesLoading(t) ? un : sn),
                                t.Ct = !0;
                                var n = t.Le.mountCallback(i);
                                return !!n && n.then(cu)
                            }
                        }
                        )).then((function(n) {
                            if (t.Ne = null,
                            i.aborted)
                                throw js();
                            t.di.signal(Ee),
                            t.Ue.usesLoading(t) && !n || t.setReadyStateInternal(on)
                        }
                        )).catch((function(i) {
                            var n;
                            throw t.Ne = null,
                            (n = i) && ("string" == typeof n ? n.startsWith(_s) : "string" == typeof n.message && n.message.startsWith(_s)) ? t.Re = null : (t.di.rejectSignal(Ee, i),
                            t.setReadyStateInternal(hn, i)),
                            i
                        }
                        ))
                    }
                    ,
                    u.mount = function() {
                        var t = this;
                        if (this.Re)
                            return this.Re;
                        this.Ne = this.Ne || new AbortController;
                        var i = this.Ne.signal;
                        return this.di.whenSignal(we).then((function() {
                            if (!t.R1())
                                return t.whenBuilt();
                            if (i.aborted)
                                throw js();
                            return Bs(t.getAmpDoc()).scheduleAsap(t),
                            t.whenMounted()
                        }
                        ))
                    }
                    ,
                    u.unmount = function() {
                        this.Bn && this.pause(),
                        this.R1() ? (this.Ne && (this.Ne.abort(),
                        this.Ne = null),
                        Bs(this.getAmpDoc()).unschedule(this),
                        this.Ct && this.Le.unmountCallback(),
                        this.Ct = !1,
                        this.Re = null,
                        this.Ze(),
                        this.Bn && this.qe(!0)) : this.ts()
                    }
                    ,
                    u.whenMounted = function() {
                        return this.di.whenSignal(Ee)
                    }
                    ,
                    u.whenLoaded = function() {
                        return this.di.whenSignal(Ie)
                    }
                    ,
                    u.ensureLoaded = function(t) {
                        var i = this;
                        return this.mount().then((function() {
                            if (i.R1())
                                return i.Ue.usesLoading(i) && i.Le.ensureLoaded(),
                                i.whenLoaded();
                            var n = i.ns();
                            return n.whenBuilt().then((function() {
                                if (4 != n.getState() && ((3 != n.getState() || n.isMeasureRequested()) && n.measure(),
                                n.isDisplayed()))
                                    return i.getResources().scheduleLayoutOrPreload(n, !0, t, !0),
                                    i.whenLoaded()
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    u.setAsContainerInternal = function(t) {
                        Bs(this.getAmpDoc()).setContainer(this, t)
                    }
                    ,
                    u.removeAsContainerInternal = function() {
                        Bs(this.getAmpDoc()).removeContainer(this)
                    }
                    ,
                    u.setReadyStateInternal = function(t, i) {
                        if (t !== this.Ce && (this.Ce = t,
                        this.R1()))
                            switch (t) {
                            case un:
                                return this.di.signal(Pe),
                                this.di.reset(Me),
                                this.di.reset(Ie),
                                this.classList.add("i-amphtml-layout"),
                                this.toggleLoading(!0),
                                void this.dispatchCustomEventForTesting(be);
                            case on:
                                return this.di.signal(Pe),
                                this.di.signal(Ie),
                                this.di.reset(Me),
                                this.classList.add("i-amphtml-layout"),
                                this.toggleLoading(!1),
                                Di(this, "load", null, au),
                                void this.dispatchCustomEventForTesting(ye);
                            case hn:
                                return this.di.rejectSignal(Ie, i),
                                this.toggleLoading(!1),
                                void Di(this, "error", i, au)
                            }
                    }
                    ,
                    u.preconnect = function(t) {
                        var i = this;
                        Zt(this.isUpgraded()),
                        t ? this.Le.preconnectCallback(t) : Xs(this.getAmpDoc(), (function() {
                            i.ownerDocument && i.ownerDocument.defaultView && i.Le.preconnectCallback(t)
                        }
                        ))
                    }
                    ,
                    u.R1 = function() {
                        return !!this.Ue && this.Ue.R1()
                    }
                    ,
                    u.deferredMount = function() {
                        return !!this.Ue && this.Ue.deferredMount(this)
                    }
                    ,
                    u.isAlwaysFixed = function() {
                        return !!this.Le && this.Le.isAlwaysFixed()
                    }
                    ,
                    u.updateLayoutBox = function(t) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.isBuilt() && this.onMeasure(i)
                    }
                    ,
                    u.onMeasure = function() {
                        Zt(this.isBuilt());
                        try {
                            this.Le.onLayoutMeasure()
                        } catch (t) {
                            Ds(t, this)
                        }
                    }
                    ,
                    u.Ye = function() {
                        var t;
                        return void 0 !== this.sizerElement || this.De !== ie && this.De !== ue || (this.sizerElement = this.querySelector("i-amphtml-sizer"),
                        null === (t = this.sizerElement) || void 0 === t || t.setAttribute("slot", "i-amphtml-svc")),
                        this.sizerElement || null
                    }
                    ,
                    u.rs = function(t) {
                        if (this.De !== ie)
                            if (this.De !== ue)
                                ;
                            else {
                                var i = t.querySelector(".i-amphtml-intrinsic-sizer");
                                if (!i)
                                    return;
                                i.setAttribute("src", "")
                            }
                        else
                            Rr(t, "paddingTop", "0")
                    }
                    ,
                    u.es = function() {
                        var t = this
                          , i = this.hasAttribute("media") || this.hasAttribute("sizes") && !this.hasAttribute("disable-inline-width") || this.hasAttribute("heights")
                          , n = !!this.Et
                          , r = this.ownerDocument.defaultView;
                        i != n && r && (i ? (this.Et = new Te(r,(function() {
                            return t.ss()
                        }
                        )),
                        this.ss()) : this.os())
                    }
                    ,
                    u.os = function() {
                        this.Et && (this.Et.dispose(),
                        this.Et = null)
                    }
                    ,
                    u.ss = function() {
                        var t = this.Et;
                        if (t) {
                            t.start();
                            var i = this.getAttribute("media") || null
                              , n = !i || t.resolveMatchQuery(i);
                            this.classList.toggle("i-amphtml-hidden-by-media-query", !n);
                            var r = this.hasAttribute("disable-inline-width") ? null : this.getAttribute("sizes");
                            r && Rr(this, "width", t.resolveListQuery(r));
                            var e = this.De === ie ? this.getAttribute("heights") : null;
                            if (e) {
                                var s = this.Ye();
                                s && Rr(s, "paddingTop", t.resolveListQuery(e))
                            }
                            t.complete(),
                            this.ns().requestMeasure()
                        }
                    }
                    ,
                    u.applySize = function(t, i, n) {
                        var r = this.Ye();
                        r && (this.sizerElement = null,
                        this.rs(r),
                        this.us((function() {
                            r && Ti(r)
                        }
                        ))),
                        void 0 !== t && Rr(this, "height", t, "px"),
                        void 0 !== i && Rr(this, "width", i, "px"),
                        n && (null != n.top && Rr(this, "marginTop", n.top, "px"),
                        null != n.right && Rr(this, "marginRight", n.right, "px"),
                        null != n.bottom && Rr(this, "marginBottom", n.bottom, "px"),
                        null != n.left && Rr(this, "marginLeft", n.left, "px")),
                        this.hs() && this.cs(),
                        Di(this, "amp:size-changed")
                    }
                    ,
                    u.connectedCallback = function() {
                        if (function() {
                            if (void 0 === uu) {
                                var t = self.document.createElement("template");
                                uu = "content"in t
                            }
                            return uu
                        }() || void 0 !== this.Fe || (this.Fe = !!yi(this, "template")),
                        !this.Fe && !this.Bn && Ri(this)) {
                            if (this.Bn = !0,
                            this.everAttached || this.classList.add("i-amphtml-element", "i-amphtml-notbuilt", "amp-notbuilt"),
                            !this.Lr) {
                                var t = oi(this)
                                  , i = Yn(t).getAmpDoc(this);
                                this.Lr = i,
                                n(i, this, this.Ue)
                            }
                            if (this.Ri || (this.Ri = or(this.Lr)),
                            this.getResources().add(this),
                            this.everAttached) {
                                var r = this.reconstructWhenReparented();
                                r && this.Ze(),
                                this.isUpgraded() && (r && !this.R1() && this.getResources().upgraded(this),
                                this.vr(),
                                this.dispatchCustomEventForTesting(ge)),
                                this.Ue && this.R1() && this.qe()
                            } else {
                                this.everAttached = !0;
                                try {
                                    this.De = function(t) {
                                        var i = t.getAttribute("i-amphtml-layout");
                                        if (i) {
                                            var n, r = he(i);
                                            return et(r),
                                            r != ie && r != ue || !t.firstElementChild ? r == Qr && kr(t, !1) : (t.sizerElement = t.querySelector("i-amphtml-sizer") || void 0,
                                            null === (n = t.sizerElement) || void 0 === n || n.setAttribute("slot", "i-amphtml-svc")),
                                            r
                                        }
                                        var e = je(t)
                                          , s = e.height
                                          , u = e.layout
                                          , o = e.width;
                                        if (t.classList.add(ae(u)),
                                        ce(u) && t.classList.add("i-amphtml-layout-size-defined"),
                                        u == Qr)
                                            kr(t, !1);
                                        else if (u == Zr)
                                            _r(t, {
                                                width: ut(o),
                                                height: ut(s)
                                            });
                                        else if (u == te)
                                            Rr(t, "height", ut(s));
                                        else if (u == ie) {
                                            var h = t.ownerDocument.createElement("i-amphtml-sizer");
                                            h.setAttribute("slot", "i-amphtml-svc");
                                            var a = ve(s)
                                              , c = ve(o);
                                            ot(a),
                                            ot(c),
                                            _r(h, {
                                                paddingTop: a / c * 100 + "%"
                                            }),
                                            t.insertBefore(h, t.firstChild),
                                            t.sizerElement = h
                                        } else if (u == ue) {
                                            var f = ke(t)(Ne)
                                              , l = f.firstElementChild;
                                            st(l),
                                            l.setAttribute("src", 'data:image/svg+xml;charset=utf-8,<svg height="'.concat(s, '" width="').concat(o, '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')),
                                            t.insertBefore(f, t.firstChild),
                                            t.sizerElement = f
                                        } else
                                            u == re || u == ne || (u == ee ? (o && Rr(t, "width", o),
                                            s && Rr(t, "height", s)) : u == se && (t.classList.add("i-amphtml-layout-awaiting-size"),
                                            o && Rr(t, "width", o),
                                            Rr(t, "height", 0)));
                                        return t.setAttribute("i-amphtml-layout", u),
                                        u
                                    }(this),
                                    this.es()
                                } catch (t) {
                                    Ds(t, this)
                                }
                                this.Ue ? this.qe() : (lu.has("*") || lu.has(this.tagName.toLowerCase())) && this.markUnresolved(),
                                this.isUpgraded() || this.dispatchCustomEventForTesting("amp:stubbed")
                            }
                            this.toggleLoading(!0)
                        }
                    }
                    ,
                    u.hs = function() {
                        return this.classList.contains("i-amphtml-layout-awaiting-size")
                    }
                    ,
                    u.cs = function() {
                        this.classList.remove("i-amphtml-layout-awaiting-size")
                    }
                    ,
                    u.qe = function(t) {
                        if (this.R1()) {
                            if (!this.Re)
                                if (Bs(this.getAmpDoc()).schedule(this),
                                this.classList.remove("amp-unresolved", "i-amphtml-unresolved"),
                                this._e)
                                    this.setReadyStateInternal(this.Ue && this.Ue.usesLoading(this) ? un : sn);
                                else if (this.setReadyStateInternal(en),
                                !t) {
                                    var i = this.Ue.getPreconnects(this);
                                    if (i && i.length > 0) {
                                        var n = this.getAmpDoc();
                                        Xs(n, (function() {
                                            var t = n.win;
                                            if (t) {
                                                var r = ur(t);
                                                i.forEach((function(t) {
                                                    return r.url(n, t, !1)
                                                }
                                                ))
                                            }
                                        }
                                        ))
                                    }
                                }
                        } else
                            this.fs()
                    }
                    ,
                    u.fs = function() {
                        var i = this;
                        if (!this.Fe && 1 == this.He) {
                            var n = new (Zt(this.Ue))(this);
                            this.He = 4;
                            var r = t.Date.now()
                              , e = n.upgradeCallback();
                            if (e) {
                                if ("function" == typeof e.then)
                                    return e.then((function(t) {
                                        i.We(t || n, r)
                                    }
                                    )).catch((function(t) {
                                        i.He = 3,
                                        d(t)
                                    }
                                    ));
                                this.We(e, r)
                            } else
                                this.We(n, r)
                        }
                    }
                    ,
                    u.disconnectedCallback = function() {
                        this.disconnect(!1)
                    }
                    ,
                    u.vr = function() {
                        this.ke && this.Le.attachedCallback()
                    }
                    ,
                    u.disconnect = function(t) {
                        !this.Fe && this.Bn && (!t && Ri(this) || (t && this.classList.remove("i-amphtml-element"),
                        this.Bn = !1,
                        this.getResources().remove(this),
                        this.Le && this.Le.detachedCallback(),
                        this.R1() && this.unmount(),
                        this.toggleLoading(!1),
                        this.os()))
                    }
                    ,
                    u.dispatchCustomEventForTesting = function(t, i) {}
                    ,
                    u.prerenderAllowed = function() {
                        return !this.hasAttribute("noprerender") && !!this.Ue && this.Ue.prerenderAllowed(this)
                    }
                    ,
                    u.previewAllowed = function() {
                        return !!this.Ue && this.Ue.previewAllowed(this)
                    }
                    ,
                    u.isBuildRenderBlocking = function() {
                        return !!this.Le && this.Le.isBuildRenderBlocking()
                    }
                    ,
                    u.createPlaceholder = function() {
                        return this.Le ? this.Le.createPlaceholderCallback() : null
                    }
                    ,
                    u.createLoaderLogo = function() {
                        return this.Ue ? this.Ue.createLoaderLogoCallback(this) : {}
                    }
                    ,
                    u.renderOutsideViewport = function() {
                        return !!this.Le && this.Le.renderOutsideViewport()
                    }
                    ,
                    u.idleRenderOutsideViewport = function() {
                        return !!this.Le && this.Le.idleRenderOutsideViewport()
                    }
                    ,
                    u.getLayoutBox = function() {
                        return this.ns().getLayoutBox()
                    }
                    ,
                    u.getLayoutSize = function() {
                        return this.ns().getLayoutSize()
                    }
                    ,
                    u.getOwner = function() {
                        return this.ns().getOwner()
                    }
                    ,
                    u.getIntersectionChangeEntry = function() {
                        var t = this.Le ? this.Le.getIntersectionElementLayoutBox() : this.getLayoutBox()
                          , i = this.getOwner()
                          , n = mr(this.getAmpDoc()).getRect();
                        return function(t, i, n) {
                            var r, e, s, u, o = function(t) {
                                for (var i = -1 / 0, n = 1 / 0, r = -1 / 0, e = 1 / 0, s = 0; s < arguments.length; s++) {
                                    var u = arguments[s];
                                    if (u && (i = Math.max(i, u.left),
                                    n = Math.min(n, u.left + u.width),
                                    r = Math.max(r, u.top),
                                    e = Math.min(e, u.top + u.height),
                                    n < i || e < r))
                                        return null
                                }
                                return n == 1 / 0 ? null : zi(i, r, n - i, e - r)
                            }(t, i, n) || zi(0, 0, 0, 0);
                            return function(t, i, n, r) {
                                var e = t
                                  , s = i;
                                return i && (s = s,
                                n = Gi(n, -i.left, -i.top),
                                e = Gi(e, -i.left, -i.top),
                                s = Gi(s, -i.left, -i.top)),
                                {
                                    time: "undefined" != typeof performance && performance.now ? performance.now() : Date.now() - hu,
                                    rootBounds: s,
                                    boundingClientRect: e,
                                    intersectionRect: n,
                                    intersectionRatio: r
                                }
                            }(t, n, o, (e = t,
                            s = (r = o).width * r.height,
                            0 == (u = e.width * e.height) ? 0 : s / u))
                        }(t, i && i.getLayoutBox(), n)
                    }
                    ,
                    u.ns = function() {
                        return this.getResources().getResourceForElement(this)
                    }
                    ,
                    u.getResourceId = function() {
                        return this.ns().getId()
                    }
                    ,
                    u.isRelayoutNeeded = function() {
                        return !!this.Le && this.Le.isRelayoutNeeded()
                    }
                    ,
                    u.getImpl = function() {
                        var t = this;
                        return (arguments.length > 0 && void 0 !== arguments[0] && !arguments[0] ? this.Ke() : this.build()).then((function() {
                            return t.Le
                        }
                        ))
                    }
                    ,
                    u.Ke = function() {
                        var t = this;
                        return this.di.whenSignal(we).then((function() {
                            return t.fs(),
                            t.whenUpgraded()
                        }
                        ))
                    }
                    ,
                    u.getApi = function() {
                        return this.getImpl().then((function(t) {
                            return t.getApi()
                        }
                        ))
                    }
                    ,
                    u.getLayout = function() {
                        return this.De
                    }
                    ,
                    u.layoutCallback = function(t) {
                        var i = this;
                        if (mu(this),
                        Zt(this.isBuilt()),
                        t.aborted)
                            return Promise.reject(js());
                        this.dispatchCustomEventForTesting(be);
                        var n = 0 == this.Ui;
                        this.di.reset(Me),
                        n && this.di.signal(Pe),
                        this.toggleLoading(!0);
                        var r = c((function() {
                            return i.Le.layoutCallback()
                        }
                        ));
                        return this.preconnect(!0),
                        this.classList.add("i-amphtml-layout"),
                        r.then((function() {
                            if (t.aborted)
                                throw js();
                            n && i.di.signal(Ie),
                            i.setReadyStateInternal(on),
                            i.Ui++,
                            i.toggleLoading(!1),
                            i.je || (i.Le.firstLayoutCompleted(),
                            i.je = !0,
                            i.dispatchCustomEventForTesting(ye))
                        }
                        ), (function(r) {
                            if (t.aborted)
                                throw js();
                            throw n && i.di.rejectSignal(Ie, r),
                            i.setReadyStateInternal(hn, r),
                            i.Ui++,
                            i.toggleLoading(!1),
                            r
                        }
                        ))
                    }
                    ,
                    u.pause = function() {
                        this.isBuilt() && (this.Le.pauseCallback(),
                        !this.R1() && this.Le.unlayoutOnPause() && this.ts())
                    }
                    ,
                    u.resume = function() {
                        this.isBuilt() && this.Le.resumeCallback()
                    }
                    ,
                    u.unlayoutCallback = function() {
                        if (mu(this),
                        !this.isBuilt())
                            return !1;
                        this.di.signal(Me);
                        var t = this.Le.unlayoutCallback();
                        return t && this.Ze(),
                        this.dispatchCustomEventForTesting("amp:unload"),
                        t
                    }
                    ,
                    u.ts = function() {
                        this.ns().unlayout(),
                        this.Bn && this.Ri && this.Ri.schedulePass()
                    }
                    ,
                    u.Ze = function() {
                        this.Ui = 0,
                        this.je = !1,
                        this.di.reset(Ee),
                        this.di.reset(Oe),
                        this.di.reset(Pe),
                        this.di.reset(Ie),
                        this.di.reset("ini-load")
                    }
                    ,
                    u.reconstructWhenReparented = function() {
                        return !!this.Le && this.Le.reconstructWhenReparented()
                    }
                    ,
                    u.collapse = function() {
                        this.Le && this.Le.collapse()
                    }
                    ,
                    u.collapsedCallback = function(t) {
                        this.Le && this.Le.collapsedCallback(t)
                    }
                    ,
                    u.expand = function() {
                        this.Le && this.Le.expand()
                    }
                    ,
                    u.mutatedAttributesCallback = function(t) {
                        this.Le ? this.Le.mutatedAttributesCallback(t) : this.R1() && Bs(this).scheduleAsap(this)
                    }
                    ,
                    u.enqueAction = function(t) {
                        mu(this),
                        this.isBuilt() ? this.ls(t, !1) : (void 0 === this.Ve && (this.Ve = []),
                        Zt(this.Ve).push(t),
                        this.build())
                    }
                    ,
                    u.Qe = function() {
                        var t = this;
                        if (this.Ve) {
                            var i = Zt(this.Ve);
                            this.Ve = null,
                            i.forEach((function(i) {
                                t.ls(i, !0)
                            }
                            ))
                        }
                    }
                    ,
                    u.ls = function(t, i) {
                        try {
                            this.Le.executeAction(t, i)
                        } catch (i) {
                            d("Action execution failed:", i, t.node.tagName, t.method)
                        }
                    }
                    ,
                    u.Je = function() {
                        var t, i, n = this.getAttribute("data-block-on-consent");
                        if (null === n) {
                            if (!(i = (t = this).getAmpDoc().getMetaByName("amp-consent-blocking")) || !(i = i.toUpperCase().replace(/\s+/g, "")).split(",").includes(t.tagName))
                                return null;
                            n = "default",
                            this.setAttribute("data-block-on-consent", n)
                        }
                        return "" == n || "default" == n ? Zt(this.Le).getConsentPolicy() : n
                    }
                    ,
                    u.Xe = function() {
                        var t, i = this.getAttribute("data-block-on-consent-purposes") || null;
                        return null == i || null === (t = i.replace(/\s+/g, "")) || void 0 === t ? void 0 : t.split(",")
                    }
                    ,
                    u.getPlaceholder = function() {
                        return wi(this, (function(t) {
                            return t.hasAttribute("placeholder") && !du(t)
                        }
                        ))
                    }
                    ,
                    u.togglePlaceholder = function(t) {
                        if (mu(this),
                        t) {
                            var i = this.getPlaceholder();
                            i && i.classList.remove("amp-hidden")
                        } else
                            for (var n = (this,
                            e = void 0,
                            void 0,
                            di("placeholder"),
                            e = this,
                            s = "> [".concat("placeholder", "]"),
                            fi(e) ? e.querySelectorAll(li(s, ":scope")) : mi(e, s)), r = 0; r < n.length; r++)
                                du(n[r]) || n[r].classList.add("amp-hidden");
                        var e, s
                    }
                    ,
                    u.getFallback = function() {
                        return Ai(this, "fallback")
                    }
                    ,
                    u.toggleFallback = function(t) {
                        mu(this);
                        var i, n = this.ns().getState();
                        if ((this.R1() || !t || 0 != n && 1 != n && 2 != n) && (this.classList.toggle("amp-notsupported", t),
                        1 == t)) {
                            var r = this.getFallback();
                            r && (i = this.getAmpDoc(),
                            Pn(i, "owners")).scheduleLayout(this, r)
                        }
                    }
                    ,
                    u.renderStarted = function() {
                        this.di.signal(Oe),
                        this.togglePlaceholder(!1),
                        this.toggleLoading(!1)
                    }
                    ,
                    u.vs = function(t) {
                        var i, n, r = this.Ui > 0 || this.di.get(Oe);
                        return !(this.De == Qr || this.hasAttribute("noloading") || r && !t || (this,
                        n = this.tagName.toUpperCase(),
                        "AMP-AD" !== (i = n) && "AMP-ANIM" !== i && "AMP-EMBED" !== i && "AMP-FACEBOOK" !== i && "AMP-FACEBOOK-COMMENTS" !== i && "AMP-FACEBOOK-PAGE" !== i && "AMP-GOOGLE-DOCUMENT-EMBED" !== i && "AMP-IFRAME" !== i && "AMP-IMG" !== i && "AMP-INSTAGRAM" !== i && "AMP-LIST" !== i && "AMP-PINTEREST" !== i && "AMP-PLAYBUZZ" !== i && "AMP-RENDER" !== i && "AMP-TIKTOK" !== i && "AMP-TWITTER" !== i && !function(t) {
                            return "AMP-VIDEO" != t && oe.test(t)
                        }(n)) || xi(this))
                    }
                    ,
                    u.toggleLoading = function(t) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (this.ownerDocument && this.ownerDocument.defaultView) {
                            var n = nr(this.getAmpDoc());
                            n && ((t = t && this.vs(i)) ? n.track(this) : n.untrack(this))
                        }
                    }
                    ,
                    u.getOverflowElement = function() {
                        return void 0 === this.ze && (this.ze = Ai(this, "overflow"),
                        this.ze && (this.ze.hasAttribute("tabindex") || this.ze.setAttribute("tabindex", "0"),
                        this.ze.hasAttribute("role") || this.ze.setAttribute("role", "button"))),
                        this.ze
                    }
                    ,
                    u.overflowCallback = function(t, i, n) {
                        var r = this;
                        this.getOverflowElement(),
                        this.ze ? (this.ze.classList.toggle("amp-visible", t),
                        this.ze.onclick = t ? function() {
                            var t = rr(r.getAmpDoc());
                            t.forceChangeSize(r, i, n),
                            t.mutateElement(r, (function() {
                                r.overflowCallback(!1, i, n)
                            }
                            ))
                        }
                        : null) : t && this.warnOnMissingOverflow && Jt().warn("CustomElement", "Cannot resize element and overflow is not available", this)
                    }
                    ,
                    u.us = function(t, i) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        this.Lr ? rr(this.getAmpDoc()).mutateElement(i || this, t, n) : t()
                    }
                    ,
                    i(s, [{
                        key: "readyState",
                        get: function() {
                            return this.Ce
                        }
                    }]),
                    s
                }(t.HTMLElement);
                return t.__AMP_BASE_CE_CLASS = r,
                t.__AMP_BASE_CE_CLASS
            }(t, n)
              , e = function(t) {
                U(n, t);
                var i = H(n);
                function n() {
                    return i.apply(this, arguments)
                }
                return n.prototype.adoptedCallback = function() {
                    Object.getPrototypeOf(this) !== s && Object.setPrototypeOf(this, s)
                }
                ,
                n
            }(r)
              , s = e.prototype;
            return e
        }
        function du(t) {
            return "placeholder"in t
        }
        function mu(t) {
            Zt(!t.Fe)
        }
        function pu(t) {
            lu.add(t || "*");
            for (var i, n = o(fu, !0); !(i = n()).done; ) {
                var r = i.value;
                null != t && r.tagName.toLowerCase() !== t || r.markUnresolved()
            }
        }
        var gu = new WeakMap;
        function bu(t) {
            return t.__AMP_EXTENDED_ELEMENTS || (t.__AMP_EXTENDED_ELEMENTS = {}),
            t.__AMP_EXTENDED_ELEMENTS
        }
        function yu(t, i, n) {
            var r = bu(t);
            if (r[i]) {
                if (r[i] != n) {
                    ti(r[i] == ou, "%s is already registered. The script tag for %s is likely included twice in the page.", i, i),
                    r[i] = n;
                    for (var e = 0; e < fu.length; e++) {
                        var s = fu[e];
                        s.tagName.toLowerCase() == i && s.ownerDocument.defaultView == t && (wu(s, n),
                        fu.splice(e--, 1))
                    }
                }
            } else
                Pu(t, i, n)
        }
        function wu(t, i) {
            try {
                t.upgrade(i)
            } catch (i) {
                Ds(i, t)
            }
        }
        function Au(t) {
            (function(t) {
                if (!t)
                    return [];
                for (var i = t.querySelectorAll("script[custom-element],script[custom-template]"), n = [], r = 0; r < i.length; r++) {
                    var e = i[r]
                      , s = e.getAttribute("custom-element") || e.getAttribute("custom-template")
                      , u = gn(e.src);
                    s && u && n.push({
                        script: e,
                        extensionId: s,
                        extensionVersion: u.extensionVersion
                    })
                }
                return n
            }
            )(t.getHeadNode()).forEach((function(i) {
                var n = i.extensionId
                  , r = i.extensionVersion
                  , e = i.script;
                t.declareExtension(n, r),
                e.addEventListener("error", (function() {
                    return pu(n)
                }
                )),
                xu(t.win, n)
            }
            )),
            t.isBodyAvailable() && t.setExtensionsKnown()
        }
        function xu(t, i) {
            bu(t)[i] || Pu(t, i, ou)
        }
        function Eu(t, i, n) {
            Pu(i, n, bu(t)[n] || ou)
        }
        function Pu(t, i, n) {
            bu(t)[i] = n;
            var r = vu(t, Ou);
            t.customElements.define(i, r)
        }
        function Ou(t, i, n) {
            gu.has(t) || (gu.set(t, !0),
            Au(t));
            var r = i.localName;
            n || t.declaresExtension(r) || tr(t.win).installExtensionForDoc(t, r, "0.1")
        }
        var Iu = "amp-img"
          , Mu = ["alt", "aria-describedby", "aria-label", "aria-labelledby", "crossorigin", "referrerpolicy", "title", "importance", "sizes", "srcset", "src"]
          , Tu = function(t) {
            U(n, t);
            var i = H(n);
            function n(t) {
                var n;
                return (n = i.call(this, t)).ds = !0,
                n.ps = null,
                n.bs = null,
                n.gs = null,
                n.ys = 0,
                n
            }
            n.R1 = function() {
                return !1
            }
            ,
            n.prerenderAllowed = function() {
                return !0
            }
            ,
            n.usesLoading = function() {
                return !0
            }
            ,
            n.getPreconnects = function(t) {
                var i = t.getAttribute("src");
                if (i)
                    return [i];
                var n = t.getAttribute("srcset");
                if (n) {
                    var r = /\S+/.exec(n);
                    if (r)
                        return [r[0]]
                }
                return null
            }
            ;
            var r = n.prototype;
            return r.mutatedAttributesCallback = function(t) {
                if (this.ps) {
                    var i = Mu.filter((function(i) {
                        return void 0 !== t[i]
                    }
                    ));
                    t.src && !t.srcset && this.element.hasAttribute("srcset") && (this.element.removeAttribute("srcset"),
                    i.push("srcset"),
                    this.user().warn(Iu, "Removed [srcset] since [src] was mutated. Recommend adding a [srcset] binding to support responsive images.", this.element)),
                    me(i, this.element, this.ps, !0),
                    this.propagateDataset(this.ps),
                    Xr(this.ps),
                    n.R1() && !this.ps.complete && this.setReadyState(un)
                }
            }
            ,
            r.preconnectCallback = function(t) {
                var i = this.element.getAttribute("src");
                if (i)
                    ur(this.win).url(this.getAmpDoc(), i, t);
                else {
                    var n = this.element.getAttribute("srcset");
                    if (!n)
                        return;
                    var r = /\S+/.exec(n);
                    r && ur(this.win).url(this.getAmpDoc(), r[0], t)
                }
            }
            ,
            r.isLayoutSupported = function(t) {
                return ce(t)
            }
            ,
            r.ws = function() {
                if (this.ps)
                    return this.ps;
                this.ds = !this.element.hasAttribute("fallback");
                var t, i, n = Ui(this.element);
                return n && (this.ps = pi(this.element, "> img:not([placeholder])")),
                this.ps = this.ps || new Image,
                this.ps.setAttribute("decoding", "async"),
                this.element.id && this.ps.setAttribute("amp-img-id", this.element.id),
                "img" == this.element.getAttribute("role") && (this.element.removeAttribute("role"),
                this.user().error(Iu, "Setting role=img on amp-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element.")),
                this.As(!0),
                me(Mu, this.element, this.ps),
                this.propagateDataset(this.ps),
                Xr(this.ps),
                de(this.ps, !0),
                t = this.element,
                i = this.ps,
                t.hasAttribute("object-fit") && Rr(i, "object-fit", t.getAttribute("object-fit")),
                t.hasAttribute("object-position") && Rr(i, "object-position", t.getAttribute("object-position")),
                n || this.element.appendChild(this.ps),
                this.ps
            }
            ,
            r.As = function(t) {
                var i = this;
                if (this.ps && !this.element.hasAttribute("i-amphtml-ssr") && !this.element.hasAttribute("sizes") && !this.ps.hasAttribute("sizes")) {
                    var n = this.element.getAttribute("srcset");
                    if (n && !/[0-9]+x(?:,|$)/.test(n)) {
                        var r = this.element.getLayoutSize().width;
                        if (this.xs(r)) {
                            var e = this.getViewport().getWidth()
                              , s = "(max-width: ".concat(e, "px) ").concat(r, "px, ")
                              , u = r + "px";
                            if (this.getLayout() !== Zr) {
                                var o = Math.round(100 * r / e);
                                u = Math.max(o, 100) + "vw"
                            }
                            var h = s + u;
                            t ? this.ps.setAttribute("sizes", h) : this.mutateElement((function() {
                                i.ps.setAttribute("sizes", h)
                            }
                            )),
                            this.ys = r
                        }
                    }
                }
            }
            ,
            r.xs = function(t) {
                return !this.ps.hasAttribute("sizes") || t > this.ys
            }
            ,
            r.reconstructWhenReparented = function() {
                return !1
            }
            ,
            r.mountCallback = function() {
                var t = this
                  , i = !!this.ps
                  , n = this.ws();
                i || (Ye(n, "load", (function() {
                    t.setReadyState(on),
                    t.firstLayoutCompleted(),
                    t.Es()
                }
                )),
                Ye(n, "error", (function(i) {
                    t.setReadyState(hn, i),
                    t.Os()
                }
                ))),
                n.complete ? (this.setReadyState(on),
                this.firstLayoutCompleted(),
                this.Es()) : this.setReadyState(un)
            }
            ,
            r.unmountCallback = function() {
                var t = this.ps;
                t && !t.complete && (t.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=",
                Ti(t),
                this.ps = null)
            }
            ,
            r.ensureLoaded = function() {
                this.ps.loading = "eager"
            }
            ,
            r.layoutCallback = function() {
                var t = this;
                this.ws();
                var i = this.ps;
                return this.bs = Ye(i, "load", (function() {
                    return t.Es()
                }
                )),
                this.gs = Ye(i, "error", (function() {
                    return t.Os()
                }
                )),
                this.element.getLayoutSize().width <= 0 ? h() : this.loadPromise(i)
            }
            ,
            r.unlayoutCallback = function() {
                if (!n.R1()) {
                    this.gs && (this.gs(),
                    this.gs = null),
                    this.bs && (this.bs(),
                    this.bs = null);
                    var t = this.ps;
                    return t && !t.complete && (t.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=",
                    Ti(t),
                    this.ps = null),
                    !0
                }
            }
            ,
            r.firstLayoutCompleted = function() {
                var t = this.getPlaceholder();
                t && t.classList.contains("i-amphtml-blurry-placeholder") ? Sr(t, {
                    "opacity": 0
                }) : this.togglePlaceholder(!1)
            }
            ,
            r.Es = function() {
                !this.ds && this.ps.classList.contains("i-amphtml-ghost") && (this.ps.classList.remove("i-amphtml-ghost"),
                this.toggleFallback(!1))
            }
            ,
            r.Os = function() {
                this.ds && (this.ps.classList.add("i-amphtml-ghost"),
                this.toggleFallback(!0),
                this.togglePlaceholder(!1),
                this.ds = !1)
            }
            ,
            r.propagateDataset = function(t) {
                for (var i in t.dataset)
                    i in this.element.dataset || delete t.dataset[i];
                for (var n in this.element.dataset)
                    n.startsWith("ampBind") && "ampBind" !== n || t.dataset[n] !== this.element.dataset[n] && (t.dataset[n] = this.element.dataset[n])
            }
            ,
            n
        }(eu)
          , Su = function(t) {
            U(n, t);
            var i = H(n);
            function n() {
                return i.apply(this, arguments)
            }
            n.prerenderAllowed = function() {
                return !0
            }
            ;
            var r = n.prototype;
            return r.isLayoutSupported = function(t) {
                return t == ne || ce(t)
            }
            ,
            r.buildCallback = function() {
                !function(t) {
                    if (!Ui(t)) {
                        var i = function(t) {
                            var i;
                            return he(null !== (i = t.getAttribute("layout")) && void 0 !== i ? i : "") || je(t).layout
                        }(t);
                        if (i != ne) {
                            var n = t.ownerDocument.createElement("div");
                            de(n),
                            function(t) {
                                return function(t, i) {
                                    for (var n = [], r = t.firstChild; r; r = r.nextSibling)
                                        !xi(r) && n.push(r);
                                    return n
                                }(t)
                            }(t).forEach((function(t) {
                                n.appendChild(t)
                            }
                            )),
                            t.appendChild(n)
                        }
                    }
                }(this.element)
            }
            ,
            n
        }(eu);
        function Ru(t, i) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , r = zr.getImage(t)
              , e = new r;
            return n && (e.referrerPolicy = "no-referrer"),
            console.log("--fx--", i),
            e.src = i,
            e
        }
        var _u = "amp-pixel"
          , ku = function(t) {
            U(n, t);
            var i = H(n);
            function n(t) {
                var n;
                return (n = i.call(this, t)).Ps = null,
                n
            }
            var r = n.prototype;
            return r.isLayoutSupported = function(t) {
                return !0
            }
            ,
            r.buildCallback = function() {
                this.element.setAttribute("aria-hidden", "true"),
                this.Ts = this.element.getAttribute("referrerpolicy"),
                this.Ts && ti("no-referrer" == this.Ts, "".concat(_u, ': invalid "referrerpolicy" value "').concat(this.Ts, '".') + ' Only "no-referrer" is supported'),
                this.element.hasAttribute("i-amphtml-ssr") && this.element.querySelector("img") ? Qt().info(_u, "inabox img already present") : this.getAmpDoc().whenFirstVisible().then(this.Is.bind(this))
            }
            ,
            r.Is = function() {
                var t = this;
                if (this.Ps)
                    return Qt().error(_u, "duplicate pixel"),
                    this.Ps;
                this.Ps = ar(this.win).promise(1).then((function() {
                    var i = t.element.getAttribute("src");
                    if (i)
                        return cr(t.element).expandUrlAsync(t.Ms(i)).then((function(i) {
                            if (t.win) {
                                var n = function(t, i, n) {
                                    return n && "no-referrer" !== n && Jt().error("pixel", "Unsupported referrerPolicy: %s", n),
                                    "no-referrer" === n ? function(t, i) {
                                        if ("referrerPolicy"in Image.prototype)
                                            return Ru(t, i, !0);
                                        var n, r = (n = {
                                            "src": "about:blank",
                                            "style": "display:none"
                                        },
                                        function(t, i) {
                                            for (var n in i)
                                                t.setAttribute(n, i[n]);
                                            return t
                                        }(t.document.createElement("iframe"), n));
                                        return r.onload = function() {
                                            Ru(r.contentWindow, i)
                                        }
                                        ,
                                        t.document.body.appendChild(r),
                                        r
                                    }(t, i) : Ru(t, i)
                                }(t.win, i, t.Ts);
                                return Qt().info(_u, "pixel triggered: ", i),
                                n
                            }
                        }
                        ))
                }
                ))
            }
            ,
            r.Ms = function(t) {
                return ti(/^(https\:\/\/|\/\/)/i.test(t), 'The <amp-pixel> src attribute must start with "https://" or "//". Invalid value: ' + t),
                t
            }
            ,
            n
        }(eu)
          , Cu = function() {
            function t(t, i, n) {
                var r = this;
                this.Ss = ar(t),
                this.ks = i,
                this._s = n || 0,
                this.Rs = -1,
                this.Ns = 0,
                this.Xn = !1,
                this.Cs = function() {
                    r.Ds()
                }
            }
            var i = t.prototype;
            return i.isPending = function() {
                return -1 != this.Rs
            }
            ,
            i.schedule = function(t) {
                var i = t || this._s;
                this.Xn && i < 10 && (i = 10);
                var n = Date.now() + i;
                return (!this.isPending() || n - this.Ns < -10) && (this.cancel(),
                this.Ns = n,
                this.Rs = this.Ss.delay(this.Cs, i),
                !0)
            }
            ,
            i.Ds = function() {
                this.Rs = -1,
                this.Ns = 0,
                this.Xn = !0,
                this.ks(),
                this.Xn = !1
            }
            ,
            i.cancel = function() {
                this.isPending() && (this.Ss.cancel(this.Rs),
                this.Rs = -1)
            }
            ,
            t
        }();
        function Nu(t, i) {
            var n = i.documentElement;
            return t.some((function(t) {
                return n.hasAttribute(t)
            }
            ))
        }
        function Du(t) {
            return Nu(["⚡4email", "amp4email"], t)
        }
        function ju(t) {
            return Nu(["⚡", "amp"], t)
        }
        var Uu = "Action"
          , Lu = "__AMP_ACTION_MAP__" + Math.random()
          , zu = "__AMP_ACTION_QUEUE__"
          , Hu = "__AMP_ACTION_HANDLER__"
          , Gu = {
            "form": ["submit", "clear"]
        }
          , Vu = [{
            tagOrTarget: "AMP",
            method: "setState"
        }, {
            tagOrTarget: "*",
            method: "focus"
        }, {
            tagOrTarget: "*",
            method: "hide"
        }, {
            tagOrTarget: "*",
            method: "show"
        }, {
            tagOrTarget: "*",
            method: "toggleClass"
        }, {
            tagOrTarget: "*",
            method: "toggleChecked"
        }, {
            tagOrTarget: "*",
            method: "toggleVisibility"
        }]
          , Fu = {
            "button": !0,
            "checkbox": !0,
            "link": !0,
            "listbox": !0,
            "menuitem": !0,
            "menuitemcheckbox": !0,
            "menuitemradio": !0,
            "option": !0,
            "radio": !0,
            "scrollbar": !0,
            "slider": !0,
            "spinbutton": !0,
            "switch": !0,
            "tab": !0,
            "treeitem": !0
        }
          , qu = function() {
            function t(t, i, n, r, e, s, u) {
                var o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "?"
                  , h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null
                  , a = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : Math.random();
                this.node = t,
                this.method = i,
                this.args = n,
                this.source = r,
                this.caller = e,
                this.event = s,
                this.trust = u,
                this.actionEventType = o,
                this.tagOrTarget = h || t.tagName,
                this.sequenceId = a
            }
            return t.prototype.satisfiesTrust = function(t) {
                if (!J(this.trust))
                    return Qt().error(Uu, "Invalid trust for '".concat(this.method, "': ").concat(this.trust)),
                    !1;
                if (this.trust < t) {
                    var i = function(t) {
                        switch (t) {
                        case 1:
                            return "low";
                        case 3:
                            return "high";
                        default:
                            return et(2 === t),
                            "default"
                        }
                    }(this.trust);
                    return Jt().error(Uu, '"'.concat(this.actionEventType, '" event with "').concat(i, '" trust is not allowed to ') + 'invoke "'.concat(this.tagOrTarget.toLowerCase(), ".").concat(this.method, '".')),
                    !1
                }
                return !0
            }
            ,
            t
        }()
          , Bu = function() {
            function t(t, i) {
                this.ampdoc = t,
                this.js = i || t.getRootNode(),
                this.zs = this.ampdoc.isSingleDoc() && Du(this.js),
                this.Us = this.zs ? Vu : null,
                this.Ls = A(),
                this.Hs = A(),
                this.addEvent("tap"),
                this.addEvent("submit"),
                this.addEvent("change"),
                this.addEvent("input-debounced"),
                this.addEvent("input-throttled"),
                this.addEvent("valid"),
                this.addEvent("invalid")
            }
            var i = t.prototype;
            return i.addEvent = function(t) {
                var i = this;
                if ("tap" == t)
                    this.js.addEventListener("click", (function(n) {
                        if (!n.defaultPrevented) {
                            var r = n.target;
                            i.trigger(r, t, n, 3)
                        }
                    }
                    )),
                    this.js.addEventListener("keydown", (function(n) {
                        var r = n.key
                          , e = n.target;
                        if ("Enter" == r || " " == r) {
                            var s = e.getAttribute("role")
                              , u = s && x(Fu, s.toLowerCase());
                            !n.defaultPrevented && u && i.trigger(e, t, n, 3) && n.preventDefault()
                        }
                    }
                    ));
                else if ("submit" == t)
                    this.js.addEventListener(t, (function(n) {
                        var r = n.target;
                        i.trigger(r, t, n, 3)
                    }
                    ));
                else if ("change" == t)
                    this.js.addEventListener(t, (function(n) {
                        var r = n.target;
                        i.Gs(n),
                        i.trigger(r, t, n, 3)
                    }
                    ));
                else if ("input-debounced" == t) {
                    var n = mt(this.ampdoc.win, (function(n) {
                        var r = n.target;
                        i.trigger(r, t, n, 3)
                    }
                    ), 300);
                    this.js.addEventListener("input", (function(t) {
                        var r = new Wu(t);
                        i.Gs(r),
                        n(r)
                    }
                    ))
                } else if ("input-throttled" == t) {
                    var r = dt(this.ampdoc.win, (function(n) {
                        var r = n.target;
                        i.trigger(r, t, n, 3)
                    }
                    ), 100);
                    this.js.addEventListener("input", (function(t) {
                        var n = new Wu(t);
                        i.Gs(n),
                        r(n)
                    }
                    ))
                } else
                    "valid" != t && "invalid" != t || this.js.addEventListener(t, (function(n) {
                        var r = n.target;
                        i.trigger(r, t, n, 3)
                    }
                    ))
            }
            ,
            i.addGlobalTarget = function(t, i) {
                this.Ls[t] = i
            }
            ,
            i.addGlobalMethodHandler = function(t, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                this.Hs[t] = {
                    handler: i,
                    minTrust: n
                }
            }
            ,
            i.trigger = function(t, i, n, r, e) {
                return this.Vs(t, i, n, r, e)
            }
            ,
            i.execute = function(t, i, n, r, e, s, u) {
                var o = new qu(t,i,n,r,e,s,u);
                this.Fs(o)
            }
            ,
            i.installActionHandler = function(t, i) {
                if (Zt($u(t.getAttribute("id") || "") || t.tagName.toLowerCase()in Gu),
                t[Hu])
                    Qt().error(Uu, "Action handler already installed for ".concat(t));
                else {
                    t[Hu] = i;
                    var n = t[zu];
                    V(n) && ar(oi(t)).delay((function() {
                        n.forEach((function(t) {
                            try {
                                i(t)
                            } catch (i) {
                                Qt().error(Uu, "Action execution failed:", t, i)
                            }
                        }
                        )),
                        t[zu].length = 0
                    }
                    ), 1)
                }
            }
            ,
            i.hasAction = function(t, i, n) {
                return !!this.Bs(t, i, n)
            }
            ,
            i.hasResolvableAction = function(t, i, n) {
                var r = this
                  , e = this.Bs(t, i, n);
                return !!e && e.actionInfos.some((function(t) {
                    var i = t.target;
                    return !!r.qs(i)
                }
                ))
            }
            ,
            i.hasResolvableActionForTarget = function(t, i, n, r) {
                var e = this
                  , s = this.Bs(t, i, r);
                return !!s && s.actionInfos.some((function(t) {
                    var i = t.target;
                    return e.qs(i) == n
                }
                ))
            }
            ,
            i.qs = function(t) {
                return this.Ls[t] ? this.js : this.js.getElementById(t)
            }
            ,
            i.setAllowlist = function(t) {
                Zt(t.every((function(t) {
                    return t.tagOrTarget && t.method
                }
                ))),
                this.Us = t
            }
            ,
            i.addToAllowlist = function(t, i, n) {
                var r = this;
                n && n.includes("email") !== this.zs || (this.Us || (this.Us = []),
                V(i) || (i = [i]),
                i.forEach((function(i) {
                    r.Us.some((function(n) {
                        return n.tagOrTarget == t && n.method == i
                    }
                    )) || r.Us.push({
                        tagOrTarget: t,
                        method: i
                    })
                }
                )))
            }
            ,
            i.Vs = function(t, i, n, r, e) {
                var s = this
                  , u = this.Bs(t, i);
                if (!u)
                    return !1;
                var h = Math.random()
                  , a = null;
                return u.actionInfos.forEach((function(c) {
                    var f = c.args
                      , l = c.method
                      , v = c.str
                      , d = c.target
                      , m = function(t, i, n) {
                        if (!t)
                            return t;
                        var r = n || {};
                        if (i) {
                            var e = function(t) {
                                return t.detail
                            }(i);
                            e && (r.event = e)
                        }
                        var s = A();
                        return Object.keys(t).forEach((function(i) {
                            var n = t[i];
                            if ("object" == p(n) && n.expression) {
                                var e = n.expression
                                  , u = function(t, i) {
                                    if ("." == i)
                                        return t;
                                    for (var n, r = t, e = o(i.split("."), !0); !(n = e()).done; ) {
                                        var s = n.value;
                                        if (!(s && r && void 0 !== r[s] && "object" == p(r) && x(r, s))) {
                                            r = void 0;
                                            break
                                        }
                                        r = r[s]
                                    }
                                    return r
                                }(r, e);
                                n = void 0 === u ? null : u
                            }
                            r[n] ? s[i] = r[n] : s[i] = n
                        }
                        )),
                        s
                    }(f, n, e)
                      , g = function() {
                        var e = s.qs(d);
                        if (e) {
                            var o = new qu(e,l,m,t,u.node,n,r,i,e.tagName || d,h);
                            return s.Fs(o)
                        }
                        s.Ws('Target "'.concat(d, '" not found for action [').concat(v, "]."))
                    };
                    a = a ? a.then(g) : g()
                }
                )),
                u.actionInfos.length >= 1
            }
            ,
            i.Ws = function(t, i) {
                if (i) {
                    var n = Jt().createError("[".concat(Uu, "] ").concat(t));
                    throw Ds(n, i),
                    n
                }
                Jt().error(Uu, t)
            }
            ,
            i.Fs = function(t) {
                var i = t.method
                  , n = t.tagOrTarget;
                if (this.Us && !function(t, i) {
                    var n = t.method
                      , r = t.node
                      , e = t.tagOrTarget;
                    n === ru && "function" == typeof r.getDefaultActionAlias && (n = r.getDefaultActionAlias());
                    var s = n.toLowerCase()
                      , u = e.toLowerCase();
                    return i.some((function(t) {
                        return (t.tagOrTarget.toLowerCase() === u || "*" === t.tagOrTarget) && t.method.toLowerCase() === s
                    }
                    ))
                }(t, this.Us))
                    return this.Ws('"'.concat(n, ".").concat(i, '" is not allowlisted ').concat(JSON.stringify(this.Us), ".")),
                    null;
                var r = this.Ls[n];
                if (r)
                    return r(t);
                var e = t.node
                  , s = this.Hs[i];
                if (s && t.satisfiesTrust(s.minTrust))
                    return s.handler(t);
                var u = e.tagName.toLowerCase();
                if ($u(u))
                    return e.enqueAction ? e.enqueAction(t) : this.Ws('Unrecognized AMP element "'.concat(u, '".'), e),
                    null;
                var o = Gu[u];
                if ($u(e.getAttribute("id") || "") || o && o.indexOf(i) > -1) {
                    var h = e[Hu];
                    return h ? h(t) : (e[zu] = e[zu] || [],
                    e[zu].push(t)),
                    null
                }
                return this.Ws("Target (".concat(n, ") doesn't support \"").concat(i, '" action.'), t.caller),
                null
            }
            ,
            i.Bs = function(t, i, n) {
                for (var r, e = t; e; ) {
                    if (n && e == n)
                        return null;
                    var s = this.$s(e, i);
                    if (s && !(r = e).disabled && !gi(r, ":disabled"))
                        return {
                            node: e,
                            actionInfos: Zt(s)
                        };
                    e = e.parentElement
                }
                return null
            }
            ,
            i.$s = function(t, i) {
                var n = this.Ks(t, i);
                return n && n[i] || null
            }
            ,
            i.Ks = function(t, i) {
                var n = t[Lu];
                if (void 0 === n)
                    if (n = null,
                    t.hasAttribute("on"))
                        n = Ku(t.getAttribute("on"), t),
                        t[Lu] = n;
                    else if (t.hasAttribute("execute")) {
                        var r = t.getAttribute("execute");
                        n = Ku("".concat(i, ":").concat(r), t),
                        t[Lu] = n
                    }
                return n
            }
            ,
            i.setActions = function(t, i) {
                t.setAttribute("on", i),
                delete t[Lu]
            }
            ,
            i.Gs = function(t) {
                var i = A()
                  , n = t.target;
                if (void 0 !== n.value && (i.value = n.value),
                "INPUT" == n.tagName && (i.valueAsNumber = Number(n.value)),
                void 0 !== n.checked && (i.checked = n.checked),
                void 0 === n.min && void 0 === n.max || (i.min = n.min,
                i.max = n.max),
                n.files && (i.files = G(n.files).map((function(t) {
                    return {
                        "name": t.name,
                        "size": t.size,
                        "type": t.type
                    }
                }
                ))),
                Object.keys(i).length > 0)
                    try {
                        t.detail = i
                    } catch (t) {}
            }
            ,
            t
        }();
        function $u(t) {
            return "amp-" === t.substring(0, 4)
        }
        var Wu = function(t) {
            this.detail = null,
            function(t, i) {
                var n = i || A();
                for (var r in t) {
                    var e = t[r];
                    n[r] = "function" == typeof e ? Yu : t[r]
                }
            }(t, this)
        };
        function Yu() {
            Zt(null)
        }
        function Ku(t, i) {
            var n, r, e = Xu.bind(null, t, i), s = Qu.bind(null, t, i), u = null, o = new io(t);
            do {
                if ((n = o.next()).type == Zu.EOF || n.type == Zu.SEPARATOR && ";" == n.value)
                    ;
                else if (n.type == Zu.LITERAL || n.type == Zu.ID) {
                    var h = n.value;
                    s(o.next(), [Zu.SEPARATOR], ":");
                    var a = [];
                    do {
                        var c = s(o.next(), [Zu.LITERAL, Zu.ID]).value
                          , f = ru
                          , l = null;
                        (r = o.peek()).type == Zu.SEPARATOR && "." == r.value && (o.next(),
                        f = s(o.next(), [Zu.LITERAL, Zu.ID]).value || f,
                        (r = o.peek()).type == Zu.SEPARATOR && "(" == r.value && (o.next(),
                        l = Ju(o, s, e))),
                        a.push({
                            event: h,
                            target: c,
                            method: f,
                            args: l,
                            str: t
                        }),
                        r = o.peek()
                    } while (r.type == Zu.SEPARATOR && "," == r.value && o.next());
                    u || (u = A()),
                    u[h] = a
                } else
                    e(!1, "; unexpected token [".concat(n.value || "", "]"))
            } while (n.type != Zu.EOF);
            return u
        }
        function Ju(t, i, n) {
            var r, e, s = t.peek(), u = null;
            if (s.type == Zu.OBJECT) {
                u = A();
                var o = t.next().value;
                u.__AMP_OBJECT_STRING__ = o,
                i(t.next(), [Zu.SEPARATOR], ")")
            } else
                do {
                    var h = r = t.next()
                      , a = h.type
                      , c = h.value;
                    if (a != Zu.SEPARATOR || "," != c && ")" != c)
                        if (a == Zu.LITERAL || a == Zu.ID) {
                            i(t.next(), [Zu.SEPARATOR], "=");
                            var f = [r = i(t.next(!0), [Zu.LITERAL, Zu.ID])];
                            if (r.type == Zu.ID)
                                for (s = t.peek(); s.type == Zu.SEPARATOR && "." == s.value; s = t.peek())
                                    t.next(),
                                    r = i(t.next(!1), [Zu.ID]),
                                    f.push(r);
                            var l = 0 == (e = f).length ? null : 1 == e.length ? e[0].value : {
                                expression: e.map((function(t) {
                                    return t.value
                                }
                                )).join(".")
                            };
                            u || (u = A()),
                            u[c] = l,
                            n((s = t.peek()).type == Zu.SEPARATOR && ("," == s.value || ")" == s.value), "Expected either [,] or [)]")
                        } else
                            n(!1, "; unexpected token [".concat(r.value || "", "]"))
                } while (r.type != Zu.SEPARATOR || ")" != r.value);
            return u
        }
        function Xu(t, i, n, r) {
            return ti(n, "Invalid action definition in %s: [%s] %s", i, t, r || "")
        }
        function Qu(t, i, n, r, e) {
            return void 0 !== e ? Xu(t, i, r.includes(n.type) && n.value == e, "; expected [".concat(e, "]")) : Xu(t, i, r.includes(n.type)),
            n
        }
        var Zu = {
            INVALID: 0,
            EOF: 1,
            SEPARATOR: 2,
            LITERAL: 3,
            ID: 4,
            OBJECT: 5
        }
          , to = " \t\n\r\f\v \u2028\u2029"
          , io = function() {
            function t(t) {
                this.Ys = t,
                this.Js = -1
            }
            var i = t.prototype;
            return i.next = function(t) {
                var i = this.Xs(t || !1);
                return this.Js = i.index,
                i
            }
            ,
            i.peek = function(t) {
                return this.Xs(t || !1)
            }
            ,
            i.Xs = function(t) {
                var i = this.Js + 1;
                if (i >= this.Ys.length)
                    return {
                        type: Zu.EOF,
                        index: this.Js
                    };
                var n = this.Ys.charAt(i);
                if (-1 != to.indexOf(n)) {
                    for (i++; i < this.Ys.length && -1 != to.indexOf(this.Ys.charAt(i)); i++)
                        ;
                    if (i >= this.Ys.length)
                        return {
                            type: Zu.EOF,
                            index: i
                        };
                    n = this.Ys.charAt(i)
                }
                if (t && (no(n) || "." == n && i + 1 < this.Ys.length && no(this.Ys[i + 1]))) {
                    for (var r = "." == n, e = i + 1; e < this.Ys.length; e++) {
                        var s = this.Ys.charAt(e);
                        if ("." != s) {
                            if (!no(s))
                                break
                        } else
                            r = !0
                    }
                    var u = this.Ys.substring(i, e)
                      , o = r ? parseFloat(u) : parseInt(u, 10);
                    return i = e - 1,
                    {
                        type: Zu.LITERAL,
                        value: o,
                        index: i
                    }
                }
                if (-1 != ";:.()=,|!".indexOf(n))
                    return {
                        type: Zu.SEPARATOR,
                        value: n,
                        index: i
                    };
                if (-1 != "\"'".indexOf(n)) {
                    for (var h = -1, a = i + 1; a < this.Ys.length; a++)
                        if (this.Ys.charAt(a) == n) {
                            h = a;
                            break
                        }
                    if (-1 == h)
                        return {
                            type: Zu.INVALID,
                            index: i
                        };
                    var c = this.Ys.substring(i + 1, h);
                    return i = h,
                    {
                        type: Zu.LITERAL,
                        value: c,
                        index: i
                    }
                }
                if ("{" == n) {
                    for (var f = 1, l = -1, v = i + 1; v < this.Ys.length; v++) {
                        var d = this.Ys[v];
                        if ("{" == d ? f++ : "}" == d && f--,
                        f <= 0) {
                            l = v;
                            break
                        }
                    }
                    if (-1 == l)
                        return {
                            type: Zu.INVALID,
                            index: i
                        };
                    var m = this.Ys.substring(i, l + 1);
                    return i = l,
                    {
                        type: Zu.OBJECT,
                        value: m,
                        index: i
                    }
                }
                for (var p = i + 1; p < this.Ys.length && -1 == " \t\n\r\f\v \u2028\u2029;:.()=,|!\"'{}".indexOf(this.Ys.charAt(p)); p++)
                    ;
                var g = this.Ys.substring(i, p);
                if (i = p - 1,
                t && ("true" == g || "false" == g)) {
                    var b = "true" == g;
                    return {
                        type: Zu.LITERAL,
                        value: b,
                        index: i
                    }
                }
                return no(g.charAt(0)) ? {
                    type: Zu.LITERAL,
                    value: g,
                    index: i
                } : {
                    type: Zu.ID,
                    value: g,
                    index: i
                }
            }
            ,
            t
        }();
        function no(t) {
            return t >= "0" && t <= "9"
        }
        function ro(t) {
            return !!t && "function" == typeof t.getFormData
        }
        var eo = ["GET", "POST"]
          , so = [V, w];
        function uo(t, i) {
            var n = D({}, i);
            if (ro(i.body)) {
                var r = i.body;
                n.headers["Content-Type"] = "multipart/form-data;charset=utf-8",
                n.body = function(t) {
                    for (var i = [], n = t.next(); !n.done; n = t.next())
                        i.push(n.value);
                    return i
                }(r.entries())
            }
            return {
                input: t,
                init: n
            }
        }
        function oo(t, i, n, r) {
            if (!i)
                return h();
            var e = r.prerenderSafe ? h() : i.whenFirstVisible()
              , s = vr(i)
              , u = xs(n)
              , o = s.hasCapability("xhrInterceptor")
              , a = r.bypassInterceptorForDev && !1;
            return u || !o || a ? e : i.getRootNode().documentElement.hasAttribute("allow-xhr-interception") ? e.then((function() {
                return s.isTrustedViewer()
            }
            )).then((function(i) {
                if (i || Ge(t, "untrusted-xhr-interception")) {
                    var e = {
                        "originalRequest": uo(n, r)
                    };
                    return s.sendMessageAwaitResponse("xhr", e).then((function(t) {
                        return function(t, i) {
                            if (ht(w(t), "Object expected: %s", t),
                            "document" != i)
                                return new Response(t.body,t.init);
                            var n = A()
                              , r = {
                                status: 200,
                                statusText: "OK",
                                getResponseHeader: function(t) {
                                    return n[String(t).toLowerCase()] || null
                                }
                            };
                            if (t.init) {
                                var e = t.init;
                                V(e.headers) && e.headers.forEach((function(t) {
                                    var i = t[0]
                                      , r = t[1];
                                    n[String(i).toLowerCase()] = String(r)
                                }
                                )),
                                e.status && (r.status = parseInt(e.status, 10)),
                                e.statusText && (r.statusText = String(e.statusText))
                            }
                            return new Response(t.body ? String(t.body) : "",r)
                        }(t, r.responseType)
                    }
                    ))
                }
            }
            )) : e
        }
        function ho(t, i, n) {
            return et("string" == typeof i),
            !1 !== n.ampCors && (i = Ss(t, i)),
            i
        }
        function ao(t, i) {
            var n, r = t || {}, e = r.credentials;
            return et(void 0 === e || "include" == e || "omit" == e),
            r.method = void 0 === (n = r.method) ? "GET" : (n = n.toUpperCase(),
            et(eo.includes(n)),
            n),
            r.headers = r.headers || {},
            i && (r.headers.Accept = i),
            et(null !== r.body),
            r
        }
        function co(t, i, n) {
            n = n || {};
            var r = function(t) {
                return t.origin || vs(t.location.href).origin
            }(t);
            return r == vs(i).origin && (n.headers = n.headers || {},
            n.headers["AMP-Same-Origin"] = "true"),
            n
        }
        function fo(t) {
            return new Promise((function(i) {
                if (t.ok)
                    return i(t);
                var n = t.status
                  , r = Jt().createError("HTTP error ".concat(n));
                throw r.retriable = function(t) {
                    return 415 == t || t >= 500 && t < 600
                }(n),
                r.response = t,
                r
            }
            ))
        }
        var lo = function() {
            function t(t) {
                this.win = t;
                var i = Yn(t);
                this.Qs = i.isSingleDoc() ? i.getSingleDoc() : null
            }
            var i = t.prototype;
            return i.Zs = function(t, i) {
                console.log("--fx--", t);
                var n = arguments
                  , r = this;
                return oo(this.win, this.Qs, t, i).then((function(t) {
                    if (t)
                        return t;
                    if (ro(i.body)) {
                        var e = i.body;
                        i.body = e.getFormData()
                    }
                    return r.win.fetch.apply(null, n)
                }
                ))
            }
            ,
            i.io = function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return t = ho(this.win, t, i),
                i = co(this.win, t, i),
                this.Zs(t, i).then((function(t) {
                    return t
                }
                ), (function(i) {
                    var n = vs(t).origin;
                    throw Jt().createExpectedError("XHR", "Failed fetching (".concat(n, "/...):"), i && i.message)
                }
                ))
            }
            ,
            i.fetchJson = function(t, i) {
                return this.fetch(t, function(t) {
                    var i = ao(t, "application/json");
                    if ("POST" == i.method && !ro(i.body)) {
                        et(so.some((function(t) {
                            return t(i.body)
                        }
                        ))),
                        i.headers["Content-Type"] = i.headers["Content-Type"] || "text/plain;charset=utf-8";
                        var n = i.headers["Content-Type"];
                        i.body = "application/x-www-form-urlencoded" === n ? bs(i.body) : JSON.stringify(i.body)
                    }
                    return i
                }(i))
            }
            ,
            i.fetchText = function(t, i) {
                console.log("--fx--3--", t);
                return this.fetch(t, ao(i, "text/plain"))
            }
            ,
            i.xssiJson = function(t, i) {
                return i ? t.text().then((function(t) {
                    return t.startsWith(i) ? at(t.slice(i.length)) : (Jt().warn("XHR", 'Failed to strip missing prefix "'.concat(i, '" in fetch response.')),
                    at(t))
                }
                )) : t.json()
            }
            ,
            i.fetch = function(t, i) {
                var n = ao(i);
                return this.io(t, n).then((function(t) {
                    return fo(t)
                }
                ))
            }
            ,
            i.sendSignal = function(t, i) {
                return this.io(t, i).then((function(t) {
                    return fo(t)
                }
                ))
            }
            ,
            i.getCorsUrl = function(t, i) {
                return Ss(t, i)
            }
            ,
            t
        }()
          , vo = function(t) {
            U(n, t);
            var i = H(n);
            function n(t) {
                var n;
                return (n = i.call(this, t)).no = A(),
                n
            }
            var r = n.prototype;
            return r.fetch = function(i, n) {
                var r = this
                  , e = n && n.headers && n.headers.Accept || ""
                  , s = !n || !n.method || "GET" === n.method
                  , u = this.ro(i, e)
                  , o = !!this.no[u];
                if (s && o)
                    return this.no[u].then((function(t) {
                        return t.clone()
                    }
                    ));
                var h = t.prototype.fetch.call(this, i, n);
                return s && (this.no[u] = h.then((function(t) {
                    return delete r.no[u],
                    t.clone()
                }
                ), (function(t) {
                    throw delete r.no[u],
                    t
                }
                ))),
                h
            }
            ,
            r.ro = function(t, i) {
                return As(Ts(t, Ms(this.win.location))) + i
            }
            ,
            n
        }(lo)
          , mo = {
            "+": "-",
            "/": "_",
            "=": "."
        };
        function po(t) {
            var i = function(t) {
                for (var i = new Array(t.length), n = 0; n < t.length; n++)
                    i[n] = String.fromCharCode(t[n]);
                return i.join("")
            }(t);
            return btoa(i).replace(/[+/=]/g, (function(t) {
                return mo[t]
            }
            ))
        }
        var go = "AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc"
          , bo = "CacheCidApi"
          , yo = function() {
            function t(t) {
                this.Lr = t,
                this.eo = vr(this.Lr),
                this.so = null,
                this.Ss = ar(this.Lr.win)
            }
            var i = t.prototype;
            return i.isSupported = function() {
                return this.eo.isCctEmbedded() && this.eo.isProxyOrigin()
            }
            ,
            i.getScopedCid = function(t) {
                var i = this;
                return this.eo.isCctEmbedded() ? (this.so || (this.so = this.oo("https://ampcid.google.com/v1/cache:getClientId?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc")),
                this.so.then((function(n) {
                    return n ? i.uo(n, t) : null
                }
                ))) : Promise.resolve(null)
            }
            ,
            i.oo = function(t) {
                var i = this
                  , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , r = {
                    "publisherOrigin": Ms(this.Lr.win.location)
                }
                  , e = "fetchCidTimeout";
                return this.Ss.timeoutPromise(3e4, pr(this.Lr.win).fetchJson(t, {
                    method: "POST",
                    ampCors: !1,
                    credentials: "include",
                    mode: "cors",
                    body: r
                }), e).then((function(t) {
                    return t.json().then((function(t) {
                        if (t.optOut)
                            return null;
                        var r = t.publisherClientId;
                        if (!r && n && t.alternateUrl) {
                            var e = "".concat(t.alternateUrl, "?key=").concat(go);
                            return i.oo(e, !1)
                        }
                        return r
                    }
                    ))
                }
                )).catch((function(t) {
                    return t && t.response ? t.response.json().then((function(t) {
                        Qt().error(bo, JSON.stringify(t))
                    }
                    )) : t && t.message == e ? Qt().expectedError(bo, t) : Qt().error(bo, t),
                    null
                }
                ))
            }
            ,
            i.uo = function(t, i) {
                var n = t + ";" + i;
                return Qn(this.Lr.win).sha384Base64(n).then((function(t) {
                    return "amp-" + t
                }
                ))
            }
            ,
            t
        }()
          , wo = "-test-amp-cookie-tmp";
        function Ao(t, i) {
            var n = function(t) {
                try {
                    return t.document.cookie
                } catch (t) {
                    return ""
                }
            }(t);
            if (!n)
                return null;
            for (var r = n.split(";"), e = 0; e < r.length; e++) {
                var s = r[e].trim()
                  , u = s.indexOf("=");
                if (-1 != u && bt(s.substring(0, u).trim()) == i) {
                    var o = s.substring(u + 1).trim();
                    return bt(o, o)
                }
            }
            return null
        }
        function xo(t, i, n, r) {
            var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            Oo(t, e, i);
            var s = void 0;
            e.domain ? s = e.domain : e.highestAvailableDomain && (s = Eo(t)),
            Po(t, i, n, r, s, e.sameSite, e.secure)
        }
        function Eo(t) {
            var i = t.document.head && t.document.head.querySelector("meta[name='amp-cookie-scope']");
            if (i) {
                var n = i.getAttribute("content") || ""
                  , r = Ms(t.location.href);
                return W(r, "." + n) ? n : r.split("://")[1]
            }
            if (!xs(t.location.href))
                for (var e = t.location.hostname.split("."), s = e[e.length - 1], u = function(t) {
                    for (var i = wo; Ao(t, i); )
                        i = wo + 0;
                    return i
                }(t), o = e.length - 2; o >= 0; o--)
                    if (s = e[o] + "." + s,
                    Po(t, u, "delete", Date.now() + 1e3, s),
                    "delete" == Ao(t, u))
                        return Po(t, u, "delete", Date.now() - 1e3, s),
                        s;
            return null
        }
        function Po(t, i, n, r, e, s, u) {
            "ampproject.org" == e && (n = "delete",
            r = 0);
            var o = encodeURIComponent(i) + "=" + encodeURIComponent(n) + "; path=/" + (e ? "; domain=" + e : "") + "; expires=" + new Date(r).toUTCString() + function(t, i) {
                return i ? "; SameSite=".concat(i) : ""
            }(0, s) + (u ? "; Secure" : "");
            try {
                t.document.cookie = o
            } catch (t) {}
        }
        function Oo(t, i, n) {
            if (i.allowOnProxyOrigin)
                ti(!i.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
            else {
                ti(!xs(t.location.href), "Should never attempt to set cookie on proxy origin: ".concat(n));
                var r = vs(t.location.href).hostname.toLowerCase()
                  , e = vs(Mt).hostname.toLowerCase();
                ti(!(r == e || W(r, "." + e)), "Should never attempt to set cookie on proxy origin. (in depth check): " + n)
            }
        }
        var Io = "GoogleCidApi"
          , Mo = "AMP_TOKEN"
          , To = "$RETRIEVING"
          , So = "$OPT_OUT"
          , Ro = "$NOT_FOUND"
          , _o = 3e4
          , ko = 31536e6
          , Co = function() {
            function t(t) {
                this.t = t.win,
                this.Ss = ar(this.t),
                this.ho = {};
                var i = Zn(t).canonicalUrl;
                this.ao = i ? vs(i).origin : null
            }
            var i = t.prototype;
            return i.getScopedCid = function(t, i) {
                var n, r = this;
                return this.ho[i] ? this.ho[i] : this.ho[i] = this.Ss.poll(200, (function() {
                    return (n = Ao(r.t, Mo)) !== To
                }
                )).then((function() {
                    if (n === So)
                        return So;
                    if ((n !== Ro || !r.co()) && r.fo(n))
                        return null;
                    n && !r.fo(n) || r.lo(To, _o);
                    var e = "https://ampcid.google.com/v1/publisher:getClientId?key=" + t;
                    return r.oo(e, i, n).then((function(e) {
                        var s = r.R(e);
                        if (!s && e.alternateUrl) {
                            var u = "".concat(e.alternateUrl, "?key=").concat(t);
                            return r.oo(u, i, n).then(r.R.bind(r))
                        }
                        return s
                    }
                    )).catch((function(t) {
                        return r.lo("$ERROR", _o),
                        t && t.response ? t.response.json().then((function(t) {
                            Qt().error(Io, JSON.stringify(t))
                        }
                        )) : Qt().error(Io, t),
                        null
                    }
                    ))
                }
                ))
            }
            ,
            i.oo = function(t, i, n) {
                var r = {
                    "originScope": i,
                    "canonicalOrigin": this.ao
                };
                return n && (r.securityToken = n),
                this.Ss.timeoutPromise(_o, pr(this.t).fetchJson(t, {
                    method: "POST",
                    ampCors: !1,
                    credentials: "include",
                    mode: "cors",
                    body: r
                }).then((function(t) {
                    return t.json()
                }
                )))
            }
            ,
            i.R = function(t) {
                return t.optOut ? (this.lo(So, ko),
                So) : t.clientId ? (this.lo(t.securityToken, ko),
                t.clientId) : (t.alternateUrl || this.lo(Ro, 36e5),
                null)
            }
            ,
            i.lo = function(t, i) {
                t && xo(this.t, Mo, t, this.vo(i), {
                    highestAvailableDomain: !0
                })
            }
            ,
            i.vo = function(t) {
                return this.t.Date.now() + t
            }
            ,
            i.co = function() {
                return xs(zr.getDocumentReferrer(this.t))
            }
            ,
            i.fo = function(t) {
                return t && "$" === t[0]
            }
            ,
            t
        }()
          , No = function() {
            function t(t) {
                this.Lr = t,
                this.eo = vr(this.Lr);
                var i = Zn(this.Lr).canonicalUrl;
                this.ao = i ? vs(i).origin : null
            }
            var i = t.prototype;
            return i.isSupported = function() {
                return this.eo.hasCapability("cid") ? this.eo.isTrustedViewer() : Promise.resolve(!1)
            }
            ,
            i.getScopedCid = function(t, i) {
                var n = {
                    "scope": i,
                    "clientIdApi": !!t,
                    "canonicalOrigin": this.ao
                };
                return t && (n.apiKey = t),
                this.eo.sendMessageAwaitResponse("cid", n)
            }
            ,
            t
        }()
          , Do = 31536e6
          , jo = /^[a-zA-Z0-9-_.]+$/
          , Uo = "amp-cid-optout"
          , Lo = "amp-google-client-id-api"
          , zo = {
            "googleanalytics": "AMP_ECID_GOOGLE"
        }
          , Ho = {
            "googleanalytics": "AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM"
        }
          , Go = function() {
            function t(t) {
                this.ampdoc = t,
                this.do = null,
                this.mo = Object.create(null),
                this.po = new yo(t),
                this.bo = new No(t),
                this.yo = new Co(t),
                this.wo = null
            }
            var i = t.prototype;
            return i.get = function(t, i, n) {
                var r = this;
                return ti(jo.test(t.scope) && jo.test(t.cookieName), "The CID scope and cookie name must only use the characters [a-zA-Z0-9-_.]+\nInstead found: %s", t.scope),
                i.then((function() {
                    return r.ampdoc.whenFirstVisible()
                }
                )).then((function() {
                    return t = r.ampdoc,
                    hr(t).then((function(t) {
                        return t.get(Uo).then((function(t) {
                            return !!t
                        }
                        ))
                    }
                    )).catch((function() {
                        return !1
                    }
                    ));
                    var t
                }
                )).then((function(e) {
                    if (e)
                        return "";
                    var s = r.Ao(t, n || i);
                    return ar(r.ampdoc.win).timeoutPromise(1e4, s, 'Getting cid for "'.concat(t.scope, '" timed out')).catch((function(t) {
                        d(t)
                    }
                    ))
                }
                ))
            }
            ,
            i.optOut = function() {
                return t = this.ampdoc,
                vr(t).sendMessage("cidOptOut", {}),
                hr(t).then((function(t) {
                    return t.set(Uo, !0)
                }
                ));
                var t
            }
            ,
            i.Ao = function(t, i) {
                var n = this
                  , r = t.scope
                  , e = vs(this.ampdoc.win.location.href);
                if (!xs(e)) {
                    var s = this.xo(r);
                    return s ? this.yo.getScopedCid(s, r).then((function(e) {
                        if (e == So)
                            return null;
                        if (e) {
                            var s = t.cookieName || r;
                            return Vo(n.ampdoc.win, s, e),
                            e
                        }
                        return Bo(n, t, i)
                    }
                    )) : Bo(this, t, i)
                }
                return this.bo.isSupported().then((function(t) {
                    if (t) {
                        var s = n.xo(r);
                        return n.bo.getScopedCid(s, r)
                    }
                    return n.po.isSupported() && n.xo(r) ? n.po.getScopedCid(r).then((function(t) {
                        return t || n.Eo(i, r, e)
                    }
                    )) : n.Eo(i, r, e)
                }
                ))
            }
            ,
            i.Eo = function(t, i, n) {
                var r = this;
                return function(t, i) {
                    if (t.do)
                        return t.do;
                    var n = t.ampdoc.win;
                    return t.do = function(t) {
                        var i, n = t.win;
                        try {
                            i = n.localStorage.getItem("amp-cid")
                        } catch (t) {}
                        var r = Promise.resolve(i);
                        return !i && Ni(n) && (r = $o(t)),
                        r.then((function(t) {
                            if (!t)
                                return null;
                            var i = at(t);
                            return {
                                time: i.time,
                                cid: i.cid
                            }
                        }
                        ))
                    }(t.ampdoc).then((function(r) {
                        var e, s, u, o = !1;
                        return !r || (s = r.time,
                        u = Date.now(),
                        s + Do < u) ? (e = Qn(n).sha384Base64(Yo(n)),
                        o = !0) : (e = Promise.resolve(r.cid),
                        r.time + 864e5 < Date.now() && (o = !0)),
                        o && e.then((function(n) {
                            !function(t, i, n) {
                                var r = t.win;
                                Ni(r) ? $o(t, Wo(n)) : i.then((function() {
                                    try {
                                        r.localStorage.setItem("amp-cid", Wo(n))
                                    } catch (t) {}
                                }
                                ))
                            }(t.ampdoc, i, n)
                        }
                        )),
                        e
                    }
                    ))
                }(this, t).then((function(t) {
                    return Qn(r.ampdoc.win).sha384Base64(t + function(t) {
                        return ti(xs(t), "Expected proxy origin %s", t.origin),
                        Ms(t)
                    }(n) + i)
                }
                ))
            }
            ,
            i.xo = function(t) {
                return this.wo || (this.wo = this.Oo()),
                this.wo[t]
            }
            ,
            i.Oo = function() {
                var t = {}
                  , i = this.ampdoc.getMetaByName(Lo);
                return i && i.split(",").forEach((function(i) {
                    if ((i = i.trim()).indexOf("=") > 0) {
                        var n = i.split("=")
                          , r = n[0].trim();
                        t[r] = n[1].trim()
                    } else {
                        var e = i
                          , s = zo[e];
                        s ? t[s] = Ho[e] : Jt().warn("CID", "Unsupported client for Google CID API: ".concat(e, ".") + 'Please remove or correct meta[name="'.concat(Lo, '"]'))
                    }
                }
                )),
                t
            }
            ,
            t
        }();
        function Vo(t, i, n) {
            xo(t, i, n, Date.now() + Do, {
                highestAvailableDomain: !0
            })
        }
        function Fo(t, i, n) {
            hr(t).then((function(t) {
                if (!t.isViewerStorage()) {
                    var r = qo(i);
                    t.setNonBoolean(r, n)
                }
            }
            ))
        }
        function qo(t) {
            return "amp-cid:" + t
        }
        function Bo(t, i, n) {
            var r = t.ampdoc
              , e = r.win
              , s = i.disableBackup
              , u = i.scope
              , o = i.cookieName || u;
            return function(t, i) {
                var n = t.ampdoc
                  , r = n.win
                  , e = i.disableBackup
                  , s = i.scope
                  , u = i.cookieName || s
                  , o = Ao(r, u);
                return o ? Promise.resolve(o) : e ? Promise.resolve(null) : hr(n).then((function(t) {
                    var i = qo(u);
                    return t.get(i, Do)
                }
                )).then((function(t) {
                    return t && "string" == typeof t ? t : null
                }
                ))
            }(t, i).then((function(h) {
                if (!h && !i.createCookieIfNotPresent)
                    return Promise.resolve(null);
                if (h)
                    return /^amp-/.test(h) && (Vo(e, o, h),
                    s || Fo(r, o, h)),
                    Promise.resolve(h);
                if (t.mo[u])
                    return t.mo[u];
                var a = Ko(e).then((function(t) {
                    return "amp-" + t
                }
                ));
                return Promise.all([a, n]).then((function(t) {
                    var i = t[0];
                    Ao(e, o) || (Vo(e, o, i),
                    s || Fo(r, o, i))
                }
                )),
                t.mo[u] = a
            }
            ))
        }
        function $o(t, i) {
            var n = vr(t);
            return n.isTrustedViewer().then((function(t) {
                if (t)
                    return Qt().expectedError("CID", "Viewer does not provide cap=cid"),
                    n.sendMessageAwaitResponse("cid", i).then((function(t) {
                        return t && !function(t, i) {
                            try {
                                return at(t)
                            } catch (t) {
                                return null
                            }
                        }(t) ? (Qt().expectedError("CID", "invalid cid format"),
                        JSON.stringify({
                            "time": Date.now(),
                            "cid": t
                        })) : t
                    }
                    ))
            }
            ))
        }
        function Wo(t) {
            return JSON.stringify({
                "time": Date.now(),
                "cid": t
            })
        }
        function Yo(t) {
            return lt(t, 16) || String(t.location.href + Date.now() + t.Math.random() + t.screen.width + t.screen.height)
        }
        function Ko(t) {
            var i = Yo(t);
            if ("string" == typeof i)
                return Qn(t).sha384Base64(i);
            var n = i;
            return c((function() {
                return po(n).replace(/\.+$/, "")
            }
            ))
        }
        var Jo = "Crypto"
          , Xo = function() {
            function t(t) {
                this.t = t;
                var i = null
                  , n = !1;
                t.crypto && (t.crypto.subtle ? i = t.crypto.subtle : t.crypto.webkitSubtle && (i = t.crypto.webkitSubtle,
                n = !0)),
                this.pkcsAlgo = {
                    name: "RSASSA-PKCS1-v1_5",
                    hash: {
                        name: "SHA-256"
                    }
                },
                this.subtle = i,
                this.Po = n,
                this.To = null
            }
            var i = t.prototype;
            return i.sha384 = function(t) {
                var i = this;
                if ("string" == typeof t && (t = ft(t)),
                !this.subtle || this.To)
                    return (this.To || this.Io()).then((function(i) {
                        return i(t)
                    }
                    ));
                try {
                    return this.subtle.digest({
                        name: "SHA-384"
                    }, t).then((function(t) {
                        return new Uint8Array(t)
                    }
                    ), (function(n) {
                        return n.message && n.message.indexOf("secure origin") < 0 && Jt().error(Jo, "SubtleCrypto failed, fallback to closure lib.", n),
                        i.Io().then((function() {
                            return i.sha384(t)
                        }
                        ))
                    }
                    ))
                } catch (n) {
                    return Qt().error(Jo, "SubtleCrypto failed, fallback to closure lib.", n),
                    this.Io().then((function() {
                        return i.sha384(t)
                    }
                    ))
                }
            }
            ,
            i.sha384Base64 = function(t) {
                return this.sha384(t).then((function(t) {
                    return po(t)
                }
                ))
            }
            ,
            i.uniform = function(t) {
                return this.sha384(t).then((function(t) {
                    for (var i = 0, n = 2; n >= 0; n--)
                        i = (i + t[n]) / 256;
                    return i
                }
                ))
            }
            ,
            i.Io = function() {
                var t = this;
                return this.To ? this.To : this.To = tr(this.t).preloadExtension("amp-crypto-polyfill").then((function() {
                    return En(t.t, "crypto-polyfill")
                }
                ))
            }
            ,
            i.isPkcsAvailable = function() {
                return Boolean(this.subtle) && !1 !== this.t.isSecureContext
            }
            ,
            i.importPkcsKey = function(t) {
                Zt(this.isPkcsAvailable());
                var i = this.Po ? ct(JSON.stringify(t)) : t;
                return this.subtle.importKey("jwk", i, this.pkcsAlgo, !0, ["verify"])
            }
            ,
            i.verifyPkcs = function(t, i, n) {
                return Zt(this.isPkcsAvailable()),
                this.subtle.verify(this.pkcsAlgo, t, i, n)
            }
            ,
            t
        }()
          , Qo = ["prefetch", "preload", "preconnect", "dns-prefetch"]
          , Zo = function() {
            function t(t) {
                this.Lr = t,
                this.Mo = null,
                this.So = null
            }
            return t.prototype.get = function() {
                if (this.Mo)
                    return this.Mo;
                var t = this.Lr
                  , i = Is(t.getUrl())
                  , n = t.getRootNode()
                  , r = n && n.AMP && n.AMP.canonicalUrl;
                if (!r) {
                    var e = n.querySelector("link[rel=canonical]");
                    r = e ? vs(e.href).href : i
                }
                var s, u = function(t) {
                    return String(Math.floor(1e4 * t.Math.random()))
                }(t.win), o = function(t) {
                    var i = A();
                    if (t.head)
                        for (var n = t.head.querySelectorAll("link[rel]"), r = function(t) {
                            var r = n[t]
                              , e = r.href
                              , s = r.getAttribute("rel");
                            if (!s || !e)
                                return "continue";
                            s.split(/\s+/).forEach((function(t) {
                                if (-1 == Qo.indexOf(t)) {
                                    var n = i[t];
                                    n ? (V(n) || (n = i[t] = [n]),
                                    n.push(e)) : i[t] = e
                                }
                            }
                            ))
                        }, e = 0; e < n.length; e++)
                            r(e);
                    return i
                }(t.win.document), h = (s = t.win.document.head.querySelector('meta[name="viewport"]')) ? s.getAttribute("content") : null, a = function(t) {
                    if (!t.isSingleDoc() || "a" != (i = t.win.location.href,
                    xs(i = ls(i)) ? i.pathname.split("/", 2)[1] : null))
                        return null;
                    var i, n = yt(vs(t.win.location.href).search).amp_r;
                    return void 0 === n ? null : yt(n)
                }(t);
                return this.Mo = {
                    get sourceUrl() {
                        return Is(t.getUrl())
                    },
                    canonicalUrl: r,
                    pageViewId: u,
                    get pageViewId64() {
                        return this.So || (this.So = Ko(t.win)),
                        this.So
                    },
                    linkRels: o,
                    viewport: h,
                    replaceParams: a
                }
            }
            ,
            t
        }()
          , th = {
            attributes: !0,
            attributeFilter: ["hidden"],
            subtree: !0
        }
          , ih = function() {
            function t(t) {
                this.js = t.getRootNode();
                var i = this.js.ownerDocument || this.js;
                this.t = Zt(i.defaultView),
                this._n = null,
                this.ko = null
            }
            var i = t.prototype;
            return i.add = function(t) {
                var i = this;
                this._o();
                var n = this.ko.add(t);
                return function() {
                    n(),
                    0 === i.ko.getHandlerCount() && i.dispose()
                }
            }
            ,
            i._o = function() {
                var t = this;
                if (!this._n) {
                    this.ko = new Er;
                    var i = new this.t.MutationObserver((function(i) {
                        i && t.ko.fire(i)
                    }
                    ));
                    this._n = i,
                    i.observe(this.js, th)
                }
            }
            ,
            i.dispose = function() {
                this._n && (this._n.disconnect(),
                this.ko.removeAll(),
                this._n = null,
                this.ko = null)
            }
            ,
            t
        }();
        function nh(t) {
            try {
                return t.state
            } catch (t) {
                return null
            }
        }
        var rh = "History"
          , eh = "AMP.History"
          , sh = function() {
            function t(t, i) {
                this.Lr = t,
                this.Ss = ar(t.win),
                this.Ro = i,
                this.No = 0,
                this.Co = [],
                this.ue = [],
                this.Ro.setOnStateUpdated(this.Do.bind(this))
            }
            var i = t.prototype;
            return i.cleanup = function() {
                this.Ro.cleanup()
            }
            ,
            i.push = function(t, i) {
                var n = this;
                return this.jo((function() {
                    return n.Ro.push(i).then((function(i) {
                        return n.Do(i),
                        t && (n.Co[i.stackIndex] = t),
                        i.stackIndex
                    }
                    ))
                }
                ), "push")
            }
            ,
            i.pop = function(t) {
                var i = this;
                return this.jo((function() {
                    return i.Ro.pop(t).then((function(t) {
                        i.Do(t)
                    }
                    ))
                }
                ), "pop")
            }
            ,
            i.replace = function(t) {
                var i = this;
                return this.jo((function() {
                    return i.Ro.replace(t)
                }
                ), "replace")
            }
            ,
            i.get = function() {
                var t = this;
                return this.jo((function() {
                    return t.Ro.get()
                }
                ), "get")
            }
            ,
            i.goBack = function(t) {
                var i = this;
                return this.jo((function() {
                    return i.No <= 0 && !t ? h() : i.Ro.pop(i.No).then((function(t) {
                        i.Do(t)
                    }
                    ))
                }
                ), "goBack")
            }
            ,
            i.replaceStateForTarget = function(t) {
                var i = this;
                Zt("#" == t[0]);
                var n = this.Lr.win.location.hash;
                return this.push((function() {
                    i.Lr.win.location.replace(n || "#")
                }
                )).then((function() {
                    i.Ro.replaceStateForTarget(t)
                }
                ))
            }
            ,
            i.getFragment = function() {
                return this.Ro.getFragment()
            }
            ,
            i.updateFragment = function(t) {
                return "#" == t[0] && (t = t.substr(1)),
                this.Ro.updateFragment(t)
            }
            ,
            i.Do = function(t) {
                this.No = t.stackIndex,
                this.zo(t)
            }
            ,
            i.zo = function(t) {
                var i = this;
                if (!(this.No >= this.Co.length - 1)) {
                    for (var n = [], r = this.Co.length - 1; r > this.No; r--)
                        this.Co[r] && (n.push(this.Co[r]),
                        this.Co[r] = void 0);
                    if (this.Co.splice(this.No + 1),
                    n.length > 0)
                        for (var e = function(r) {
                            i.Ss.delay((function() {
                                return n[r](t)
                            }
                            ), 1)
                        }, s = 0; s < n.length; s++)
                            e(s)
                }
            }
            ,
            i.jo = function(t, i) {
                var n = new a
                  , r = n.promise
                  , e = n.reject
                  , s = n.resolve
                  , u = new Error("history trace for " + i + ": ");
                return this.ue.push({
                    callback: t,
                    resolve: s,
                    reject: e,
                    trace: u
                }),
                1 == this.ue.length && this.Uo(),
                r
            }
            ,
            i.Uo = function() {
                var t = this;
                if (0 != this.ue.length) {
                    var i, n = this.ue[0];
                    try {
                        i = n.callback()
                    } catch (t) {
                        i = Promise.reject(t)
                    }
                    i.then((function(t) {
                        n.resolve(t)
                    }
                    ), (function(t) {
                        Qt().error(rh, "failed to execute a task:", t),
                        n.trace && (n.trace.message += t,
                        Qt().error(rh, n.trace)),
                        n.reject(t)
                    }
                    )).then((function() {
                        t.ue.splice(0, 1),
                        t.Uo()
                    }
                    ))
                }
            }
            ,
            t
        }()
          , uh = function() {
            function t(t) {
                var i = this;
                this.win = t,
                this.Ss = ar(t);
                var n = this.win.history;
                this.Lo = n.length - 1;
                var r, e, s = nh(n);
                s && void 0 !== s[eh] && (this.Lo = Math.min(s[eh], this.Lo)),
                this.No = this.Lo,
                this.Ho,
                this.Do = null,
                this.Go = "state"in n,
                this.Vo = this.Fo(this.No),
                n.pushState && n.replaceState ? (this.Bo = n.originalPushState || n.pushState.bind(n),
                this.qo = n.originalReplaceState || n.replaceState.bind(n),
                r = function(t, n, r) {
                    i.Vo = t;
                    try {
                        i.Bo(t, n, r || null)
                    } catch (t) {
                        Qt().error(rh, "pushState failed: " + t.message)
                    }
                }
                ,
                e = function(t, n, r) {
                    i.Vo = t;
                    try {
                        void 0 !== r ? i.qo(t, n, r) : i.qo(t, n)
                    } catch (t) {
                        Qt().error(rh, "replaceState failed: " + t.message)
                    }
                }
                ,
                n.originalPushState || (n.originalPushState = this.Bo),
                n.originalReplaceState || (n.originalReplaceState = this.qo)) : (r = function(t, n, r) {
                    i.Vo = t
                }
                ,
                e = function(t, n, r) {
                    i.Vo = t
                }
                ),
                this.Wo = r,
                this.$o = e;
                try {
                    this.$o(this.Fo(this.No, !0))
                } catch (t) {
                    Qt().error(rh, "Initial replaceState failed: " + t.message)
                }
                n.pushState = this.Ko.bind(this),
                n.replaceState = this.Yo.bind(this),
                this.Jo = function(t) {
                    var n = t.state;
                    Qt().fine(rh, "popstate event: " + i.win.history.length + ", " + JSON.stringify(n)),
                    i.Xo()
                }
                ,
                this.win.addEventListener("popstate", this.Jo)
            }
            var i = t.prototype;
            return i.cleanup = function() {
                this.Bo && (this.win.history.pushState = this.Bo),
                this.qo && (this.win.history.replaceState = this.qo),
                this.win.removeEventListener("popstate", this.Jo)
            }
            ,
            i.Fo = function(t, i) {
                var n = A(i ? this.Qo() : void 0);
                return n[eh] = t,
                n
            }
            ,
            i.setOnStateUpdated = function(t) {
                this.Do = t
            }
            ,
            i.push = function(t) {
                var i = this;
                return this.Zo((function() {
                    var n = i.tu(i.Qo(), t || {});
                    return i.Ko(n, void 0, n.fragment ? "#" + n.fragment : void 0),
                    c((function() {
                        return i.tu(n, {
                            stackIndex: i.No
                        })
                    }
                    ))
                }
                ))
            }
            ,
            i.pop = function(t) {
                var i = this;
                return t = Math.max(t, this.Lo),
                this.Zo((function() {
                    return i.iu(i.No - t + 1)
                }
                )).then((function(t) {
                    return i.tu(i.Qo(), {
                        stackIndex: t
                    })
                }
                ))
            }
            ,
            i.replace = function() {
                var t = this
                  , i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.Zo((function() {
                    var n = t.tu(t.Qo(), i || {})
                      , r = (n.url || "").replace(/#.*/, "")
                      , e = n.fragment ? "#" + n.fragment : "";
                    return t.Yo(n, n.title, r || e ? r + e : void 0),
                    c((function() {
                        return t.tu(n, {
                            stackIndex: t.No
                        })
                    }
                    ))
                }
                ))
            }
            ,
            i.get = function() {
                var t = this;
                return c((function() {
                    return t.tu(t.Qo(), {
                        stackIndex: t.No
                    })
                }
                ))
            }
            ,
            i.backTo = function(t) {
                var i = this;
                return t = Math.max(t, this.Lo),
                this.Zo((function() {
                    return i.iu(i.No - t)
                }
                ))
            }
            ,
            i.Xo = function() {
                var t = this.Qo();
                Qt().fine(rh, "history event: " + this.win.history.length + ", " + JSON.stringify(t));
                var i = t ? t[eh] : void 0
                  , n = this.No
                  , r = this.Ho;
                this.Ho = void 0,
                n > this.win.history.length - 2 && (n = this.win.history.length - 2,
                this.nu(this.tu(t, {
                    stackIndex: n
                }))),
                null == i ? n += 1 : n = i < this.win.history.length ? i : this.win.history.length - 1,
                t || (t = {}),
                t[eh] = n,
                this.$o(t, void 0, void 0),
                n != this.No && this.nu(this.tu(t, {
                    stackIndex: n
                })),
                n < this.Lo && (this.Lo = n),
                r && r.resolve()
            }
            ,
            i.Qo = function() {
                return this.Go ? nh(this.win.history) : this.Vo
            }
            ,
            i.ru = function() {
                Zt(!this.Ho)
            }
            ,
            i.Zo = function(t) {
                return this.Ho ? this.Ho.promise.then(t, t) : t()
            }
            ,
            i.eu = function() {
                this.ru();
                var t = new a
                  , i = t.reject
                  , n = t.resolve
                  , r = this.Ss.timeoutPromise(500, t.promise);
                return this.Ho = {
                    promise: r,
                    resolve: n,
                    reject: i
                },
                r
            }
            ,
            i.iu = function(t) {
                var i = this;
                if (this.ru(),
                t <= 0)
                    return Promise.resolve(this.No);
                this.Vo = this.Fo(this.No - t);
                var n = this.eu();
                return this.win.history.go(-t),
                n.then((function() {
                    return Promise.resolve(i.No)
                }
                ))
            }
            ,
            i.Ko = function(t, i, n) {
                this.ru(),
                t || (t = {});
                var r = this.No + 1;
                t[eh] = r,
                this.Wo(t, i, n),
                r != this.win.history.length - 1 && (r = this.win.history.length - 1,
                t[eh] = r,
                this.$o(t));
                var e = this.tu(t, {
                    stackIndex: r
                });
                this.nu(e)
            }
            ,
            i.replaceStateForTarget = function(t) {
                var i = this;
                Zt("#" == t[0]),
                this.Zo((function() {
                    i.win.removeEventListener("popstate", i.Jo);
                    try {
                        i.win.location.replace(t)
                    } finally {
                        i.win.addEventListener("popstate", i.Jo)
                    }
                    return i.Yo(),
                    h()
                }
                ))
            }
            ,
            i.Yo = function(t, i, n) {
                this.ru(),
                t || (t = {});
                var r = Math.min(this.No, this.win.history.length - 1);
                t[eh] = r,
                this.$o(t, i, n);
                var e = this.tu(t, {
                    stackIndex: r
                });
                this.nu(e)
            }
            ,
            i.nu = function(t) {
                this.ru(),
                t.stackIndex = Math.min(t.stackIndex, this.win.history.length - 1),
                this.No != t.stackIndex && (Qt().fine(rh, "stack index changed: " + this.No + " -> " + t.stackIndex),
                this.No = t.stackIndex,
                this.Do && this.Do(t))
            }
            ,
            i.getFragment = function() {
                var t = this.win.location.hash;
                return t = t.substr(1),
                Promise.resolve(t)
            }
            ,
            i.updateFragment = function(t) {
                return this.replace({
                    fragment: t
                })
            }
            ,
            i.tu = function(t, i) {
                var n = D(D({}, t && t.data || {}), i.data || {});
                return D(D(D({}, t || {}), i), {}, {
                    data: n
                })
            }
            ,
            t
        }()
          , oh = function() {
            function t(t, i) {
                var n = this;
                this.win = t,
                this.eo = i,
                this.No = 0,
                this.Do = null,
                this.su = this.eo.onMessage("historyPopped", (function(t) {
                    return n.ou(t)
                }
                ))
            }
            var i = t.prototype;
            return i.replaceStateForTarget = function(t) {
                Zt("#" == t[0]),
                this.win.location.replace(t)
            }
            ,
            i.cleanup = function() {
                this.su()
            }
            ,
            i.setOnStateUpdated = function(t) {
                this.Do = t
            }
            ,
            i.uu = function(t, i, n) {
                return this.hu(t) ? t : (Qt().warn(rh, 'Ignored unexpected "%s" data:', n, t),
                i)
            }
            ,
            i.hu = function(t) {
                return !!t && void 0 !== t.stackIndex
            }
            ,
            i.push = function(t) {
                var i = this
                  , n = D({
                    "stackIndex": this.No + 1
                }, t || {})
                  , r = "pushHistory";
                return this.eo.sendMessageAwaitResponse(r, n).then((function(t) {
                    var e = n
                      , s = i.uu(t, e, r);
                    return i.nu(s),
                    s
                }
                ))
            }
            ,
            i.pop = function(t) {
                var i = this;
                if (t > this.No)
                    return this.get();
                var n = {
                    "stackIndex": this.No
                }
                  , r = "popHistory";
                return this.eo.sendMessageAwaitResponse(r, n).then((function(t) {
                    var n = {
                        "stackIndex": i.No - 1
                    }
                      , e = i.uu(t, n, r);
                    return i.nu(e),
                    e
                }
                ))
            }
            ,
            i.replace = function(t) {
                var i = this;
                if (t && t.url) {
                    if (!this.eo.hasCapability("fullReplaceHistory")) {
                        var n = {
                            "stackIndex": this.No
                        };
                        return Promise.resolve(n)
                    }
                    var r = t.url.replace(/#.*/, "");
                    t.url = r
                }
                var e = D({
                    "stackIndex": this.No
                }, t || {})
                  , s = "replaceHistory";
                return this.eo.sendMessageAwaitResponse(s, e, !0).then((function(t) {
                    var n = e
                      , r = i.uu(t, n, s);
                    return i.nu(r),
                    r
                }
                ))
            }
            ,
            i.get = function() {
                return Promise.resolve({
                    data: void 0,
                    fragment: "",
                    stackIndex: this.No,
                    title: ""
                })
            }
            ,
            i.ou = function(t) {
                void 0 !== t.newStackIndex && (t.stackIndex = t.newStackIndex),
                this.hu(t) ? this.nu(t) : Qt().warn(rh, 'Ignored unexpected "historyPopped" data:', t)
            }
            ,
            i.nu = function(t) {
                var i = t.stackIndex;
                this.No != i && (Qt().fine(rh, "stackIndex: ".concat(this.No, " -> ").concat(i)),
                this.No = i,
                this.Do && this.Do(t))
            }
            ,
            i.getFragment = function() {
                return this.eo.hasCapability("fragment") ? this.eo.sendMessageAwaitResponse("getFragment", void 0, !0).then((function(t) {
                    if (!t)
                        return "";
                    var i = t;
                    return "#" == i[0] && (i = i.substr(1)),
                    i
                }
                )) : Promise.resolve("")
            }
            ,
            i.updateFragment = function(t) {
                return this.eo.hasCapability("fragment") ? this.eo.sendMessageAwaitResponse("replaceHistory", {
                    "fragment": t
                }, !0) : h()
            }
            ,
            t
        }();
        function hh(t) {
            var i, n = vr(t);
            return n.isOvertakeHistory() || t.win.__AMP_TEST_IFRAME ? i = new oh(t.win,n) : (An(t.win, "global-history-binding", uh),
            i = En(t.win, "global-history-binding")),
            new sh(t,i)
        }
        function ah(t, i) {
            return tr(t.win).installExtensionForDoc(t, "amp-loader").then((function() {
                return function(t) {
                    return Hn(t, "loader", "amp-loader")
                }(i)
            }
            ))
        }
        new WeakMap,
        new WeakMap;
        var ch = ['<div slot=i-amphtml-svc class="i-amphtml-svc i-amphtml-loading-container i-amphtml-fill-content amp-hidden"></div>']
          , fh = function() {
            function t(t) {
                this.Lr = t;
                var i = t.win
                  , n = this.au.bind(this);
                this.cu = function(t, i) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , r = n.needsRootBounds
                      , e = n.rootMargin
                      , s = n.threshold
                      , u = Ni(i) && (r || e) ? i.document : void 0;
                    return new i.IntersectionObserver(t,{
                        threshold: s,
                        root: u,
                        rootMargin: e
                    })
                }((function(t) {
                    return t.forEach(n)
                }
                ), i),
                this.fu = new WeakMap
            }
            var i = t.prototype;
            return i.dispose = function() {
                this.cu.disconnect()
            }
            ,
            i.track = function(t) {
                this.cu.observe(t)
            }
            ,
            i.untrack = function(t) {
                this.cu.unobserve(t),
                this.nt(t)
            }
            ,
            i.au = function(t) {
                var i = t.boundingClientRect
                  , n = t.isIntersecting
                  , r = t.target
                  , e = i.height
                  , s = i.width
                  , u = r
                  , o = n && s > 20 && e > 20
                  , h = this.fu.get(u);
                o !== (h && h.shown || !1) && (o && !h && (h = this.lu(u, s, e),
                this.fu.set(u, h)),
                h && (h.shown = o,
                h.container.classList.toggle("amp-hidden", !o),
                h.loader.classList.toggle("amp-active", o)))
            }
            ,
            i.lu = function(t, i, n) {
                var r = Date.now()
                  , e = function(t, i, n, r) {
                    var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : t.win.Date.now()
                      , s = i.ownerDocument.createElement("div");
                    return ah(t, i).then((function(u) {
                        var o = t.win.Date.now() - e;
                        u.initializeLoader(i, s, o, n, r)
                    }
                    )),
                    s
                }(this.Lr, t, i, n, r)
                  , s = ke(this.Lr.win.document)(ch);
                return s.appendChild(e),
                t.appendChild(s),
                {
                    shown: !1,
                    loader: e,
                    container: s
                }
            }
            ,
            i.nt = function(t) {
                var i = this.fu.get(t);
                i && (this.fu.delete(t),
                Ti(i.container))
            }
            ,
            t
        }()
          , lh = function() {
            function t(t, i) {
                var n = this;
                this.win = t,
                this.vu = i,
                this.du = [],
                this.mu = new Er,
                this.pu = function(t) {
                    K(t.target) && n.bu(t.target)
                }
                ,
                this.gu = function(i) {
                    ar(t).delay((function() {
                        n.win.document.activeElement && n.bu(n.win.document.activeElement)
                    }
                    ), 500)
                }
                ,
                this.win.document.addEventListener("focus", this.pu, !0),
                this.win.addEventListener("blur", this.gu)
            }
            var i = t.prototype;
            return i.nt = function() {
                this.win.document.removeEventListener("focus", this.pu, !0),
                this.win.removeEventListener("blur", this.gu)
            }
            ,
            i.onFocus = function(t) {
                return this.mu.add(t)
            }
            ,
            i.bu = function(t) {
                var i = Date.now();
                0 == this.du.length || this.du[this.du.length - 1].el != t ? this.du.push({
                    el: t,
                    time: i
                }) : this.du[this.du.length - 1].time = i,
                this.purgeBefore(i - this.vu),
                this.mu.fire(t)
            }
            ,
            i.getLast = function() {
                return 0 == this.du.length ? null : this.du[this.du.length - 1].el
            }
            ,
            i.purgeBefore = function(t) {
                for (var i = this.du.length - 1, n = 0; n < this.du.length; n++)
                    if (this.du[n].time >= t) {
                        i = n - 1;
                        break
                    }
                -1 != i && this.du.splice(0, i + 1)
            }
            ,
            i.hasDescendantsOf = function(t) {
                this.win.document.activeElement && this.bu(this.win.document.activeElement);
                for (var i = 0; i < this.du.length; i++)
                    if (t.contains(this.du[i].el))
                        return !0;
                return !1
            }
            ,
            t
        }()
          , vh = 70
          , dh = function() {
            function t(t) {
                var i = this;
                this.ampdoc = t,
                this.win = t.win,
                this.Ri = or(t),
                this.yu = mr(this.ampdoc),
                this.wu = dr(this.win),
                this.Au = new lh(this.win,6e4),
                this.Au.onFocus((function(t) {
                    i.xu(t)
                }
                ))
            }
            var i = t.prototype;
            return i.forceChangeSize = function(t, i, n, r, e) {
                this.Eu(Hs.forElement(t), i, n, e, void 0, !0, r)
            }
            ,
            i.requestChangeSize = function(t, i, n, r, e) {
                var s = this;
                return new Promise((function(u, o) {
                    s.Eu(Hs.forElement(t), i, n, r, e, !1, (function(t) {
                        t ? u() : o(new Error("changeSize attempt denied"))
                    }
                    ))
                }
                ))
            }
            ,
            i.expandElement = function(t) {
                Hs.forElement(t).completeExpand(),
                this.Ri.schedulePass(vh)
            }
            ,
            i.attemptCollapse = function(t) {
                var i = this;
                return new Promise((function(n, r) {
                    i.Eu(Hs.forElement(t), 0, 0, void 0, void 0, !1, (function(i) {
                        i ? (Hs.forElement(t).completeCollapse(),
                        n()) : r(Qt().createExpectedError("collapse attempt denied"))
                    }
                    ))
                }
                ))
            }
            ,
            i.collapseElement = function(t) {
                var i = this.yu.getLayoutRect(t);
                0 != i.width && 0 != i.height && (Ge(this.win, "dirty-collapse-element") ? this.dirtyElement(t) : this.Ri.setRelayoutTop(i.top)),
                Hs.forElement(t).completeCollapse(),
                this.Ri.schedulePass(vh)
            }
            ,
            i.measureElement = function(t) {
                return this.wu.measurePromise(t)
            }
            ,
            i.mutateElement = function(t, i, n) {
                return this.Ou(t, null, i, n)
            }
            ,
            i.measureMutateElement = function(t, i, n) {
                return this.Ou(t, i, n)
            }
            ,
            i.Pu = function(t) {
                var i = Nr(this.win, t.element);
                return {
                    top: parseInt(i.marginTop, 10) || 0,
                    right: parseInt(i.marginRight, 10) || 0,
                    bottom: parseInt(i.marginBottom, 10) || 0,
                    left: parseInt(i.marginLeft, 10) || 0
                }
            }
            ,
            i.Ou = function(t, i, n) {
                var r = this
                  , e = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                  , s = function() {
                    var i = r.yu.getLayoutRect(t);
                    return 0 != i.width && 0 != i.height ? i.top : -1
                }
                  , u = -1;
                return this.wu.runPromise({
                    measure: function() {
                        i && i(),
                        e || (u = s())
                    },
                    mutate: function() {
                        if (n(),
                        !e) {
                            t.classList.contains("i-amphtml-element") && Hs.forElement(t).requestMeasure();
                            for (var i = t.getElementsByClassName("i-amphtml-element"), o = 0; o < i.length; o++)
                                Hs.forElement(i[o]).requestMeasure();
                            r.Ri.schedulePass(vh),
                            -1 != u && r.Ri.setRelayoutTop(u),
                            r.wu.measure((function() {
                                var t = s();
                                -1 != t && t != u && (r.Ri.setRelayoutTop(t),
                                r.Ri.schedulePass(vh)),
                                r.Ri.maybeHeightChanged()
                            }
                            ))
                        }
                    }
                })
            }
            ,
            i.dirtyElement = function(t) {
                var i = !1;
                if (t.classList.contains("i-amphtml-element")) {
                    var n = Hs.forElement(t);
                    this.Ri.setRelayoutTop(n.getLayoutBox().top)
                } else
                    i = !0;
                this.Ri.schedulePass(vh, i)
            }
            ,
            i.xu = function(t) {
                var i = bi(t, (function(t) {
                    return !!Hs.forElementOptional(t)
                }
                ));
                if (i) {
                    var n = Hs.forElement(i)
                      , r = n.getPendingChangeSize();
                    void 0 !== r && this.Eu(n, r.height, r.width, r.margins, void 0, !0)
                }
            }
            ,
            i.Eu = function(t, i, n, r, e, s, u) {
                var o = this;
                t.hasBeenMeasured() && !r ? this.Tu(t, i, n, void 0, e, s, u) : this.wu.measure((function() {
                    t.hasBeenMeasured() || t.measure();
                    var h = r ? {
                        newMargins: r,
                        currentMargins: o.Pu(t)
                    } : void 0;
                    o.Tu(t, i, n, h, e, s, u)
                }
                ))
            }
            ,
            i.Tu = function(t, i, n, r, e, s, u) {
                t.resetPendingChangeSize();
                var o, h, a = t.getLayoutSize();
                if (!(void 0 !== i && i != a.height || void 0 !== n && n != a.width || void 0 !== r && (o = r.currentMargins,
                h = r.newMargins,
                void 0 !== h.top && h.top != o.top || void 0 !== h.right && h.right != o.right || void 0 !== h.bottom && h.bottom != o.bottom || void 0 !== h.left && h.left != o.left)))
                    return void 0 === i && void 0 === n && void 0 === r && Qt().error("Mutator", "attempting to change size with undefined dimensions", t.debugid),
                    void (u && u(!0));
                this.Ri.updateOrEnqueueMutateTask(t, {
                    resource: t,
                    newHeight: i,
                    newWidth: n,
                    marginChange: r,
                    event: e,
                    force: s,
                    callback: u
                }),
                this.Ri.schedulePassVsync()
            }
            ,
            t
        }()
          , mh = null
          , ph = ["gclid", "gclsrc"]
          , gh = [/^t.co$/];
        function bh() {
            return ti(mh, "E#19457 trackImpressionPromise")
        }
        function yh(t, i, n, r) {
            var e, s, u;
            try {
                e = t.open(i, n, r)
            } catch (t) {
                Qt().error("DOM", "Failed to open url on target: ", n, t)
            }
            return !e && "_top" != n && ("number" != typeof u && (u = 0),
            u + "noopener".length > (s = r || "").length || -1 === s.indexOf("noopener", u)) && (e = t.open(i, "_top")),
            e
        }
        var wh = "navigation"
          , Ah = "click"
          , xh = "contextmenu"
          , Eh = ["_top", "_blank"]
          , Ph = "data-a4a-orig-href"
          , Oh = function() {
            function t(t) {
                var i = this;
                this.ampdoc = t,
                this.Iu = t.getRootNode(),
                this.yu = mr(this.ampdoc),
                this.eo = vr(this.ampdoc),
                this.du = ir(this.ampdoc),
                this.Mu = sr(this.ampdoc.win),
                this.Su = this.Mu.isIos() && this.Mu.isSafari(),
                this.ku = Ni(this.ampdoc.win) && this.eo.isOvertakeHistory(),
                this._u = this.Iu != this.ampdoc.getRootNode() || !!this.ampdoc.getParent(),
                this.Ru = "inabox" == Dt(this.ampdoc.win).runtime,
                this.Nu = this.Iu.nodeType == Node.DOCUMENT_NODE ? this.Iu.documentElement : this.Iu,
                this.Cu = this.Du.bind(this),
                this.Iu.addEventListener(Ah, this.Cu),
                this.Iu.addEventListener(xh, this.Cu),
                this.ju = !1,
                function(t) {
                    return t.whenReady().then((function() {
                        return !!t.getBody().querySelector("amp-analytics[type=googleanalytics]")
                    }
                    ))
                }(this.ampdoc).then((function(t) {
                    i.ju = t
                }
                )),
                this.zu = !1,
                this.Uu = !1,
                Promise.all([this.eo.isTrustedViewer(), this.eo.getViewerOrigin()]).then((function(t) {
                    var n;
                    i.zu = t[0],
                    i.Uu = (n = t[1],
                    Tt.test(ls(n).origin))
                }
                )),
                this.Lu = null,
                this.Hu = new $s,
                this.Gu = new $s
            }
            t.installAnchorClickInterceptor = function(t, i) {
                i.document.documentElement.addEventListener("click", Ih.bind(null, t), !0)
            }
            ;
            var i = t.prototype;
            return i.cleanup = function() {
                this.Cu && (this.Iu.removeEventListener(Ah, this.Cu),
                this.Iu.removeEventListener(xh, this.Cu))
            }
            ,
            i.openWindow = function(t, i, n, r) {
                var e = "";
                !this.Mu.isIos() && this.Mu.isChrome() || r || (e += "noopener");
                var s = yh(t, i, n, e);
                s && !r && (s.opener = null)
            }
            ,
            i.navigateTo = function(t, i, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                  , e = r.opener
                  , s = void 0 !== e && e
                  , u = r.target
                  , o = void 0 === u ? "_top" : u;
                i = this.Vu(i);
                var h = lr(this.Nu);
                if (h.isProtocolValid(i)) {
                    ti(Eh.includes(o), "Target '".concat(o, "' not supported."));
                    var a = h.getSourceUrl(t.location);
                    i = h.resolveRelativeUrl(i, a),
                    "_blank" != o ? n && (this.Lu || (this.Lu = this.Fu()),
                    this.Lu.includes(n) && this.navigateToAmpUrl(i, n)) || (t.top.location.href = i) : this.openWindow(t, i, o, s)
                } else
                    Jt().error(wh, "Cannot navigate to invalid protocol: " + i)
            }
            ,
            i.navigateToAmpUrl = function(t, i) {
                return !!this.eo.hasCapability("a2a") && (this.eo.sendMessage("a2aNavigate", {
                    "url": t,
                    "requestedBy": i
                }),
                !0)
            }
            ,
            i.Fu = function() {
                var t = this.Iu.querySelector('meta[name="amp-to-amp-navigation"]');
                return t && t.hasAttribute("content") ? t.getAttribute("content").split(",").map((function(t) {
                    return t.trim()
                }
                )) : []
            }
            ,
            i.Du = function(t) {
                if (!t.defaultPrevented) {
                    var i = yi(t.__AMP_CUSTOM_LINKER_TARGET__ || t.target, "A");
                    i && i.href && (t.type == Ah ? this.Bu(i, t) : t.type == xh && this.qu(i, t))
                }
            }
            ,
            i.Bu = function(t, i) {
                this.Wu(t);
                var n = this.$u(t.href);
                if (!this.Ku(i, t, n) && !this.Yu(i, t, n)) {
                    var r = this.Ju();
                    Mh(n) != Mh(r) && (this.Xu(t, i),
                    n = this.$u(t.href)),
                    this.Qu(i, t, n, r)
                }
            }
            ,
            i.qu = function(t, i) {
                this.Wu(t),
                this.Xu(t, i)
            }
            ,
            i.Xu = function(t, i) {
                this.Hu.forEach((function(n) {
                    n(t, i)
                }
                ))
            }
            ,
            i.Vu = function(t) {
                return this.Gu.forEach((function(i) {
                    t = i(t)
                }
                )),
                t
            }
            ,
            i.Wu = function(t) {
                var i = null;
                this.ju && !this._u && (i = function(t, i) {
                    for (var n = yt(vs(zr.getLocation(t).href).search), r = [], e = 0; e < ph.length; e++) {
                        var s = ph[e];
                        void 0 !== n[s] && r.push(s)
                    }
                    var u = i.getAttribute("data-amp-addparams")
                      , o = i.href;
                    u && (o = gs(o, yt(u)));
                    for (var h = yt(vs(o).search), a = r.length - 1; a >= 0; a--)
                        void 0 !== h[r[a]] && r.splice(a, 1);
                    return function(t) {
                        for (var i = "", n = 0; n < t.length; n++) {
                            var r = t[n];
                            i += 0 == n ? "".concat(r, "=QUERY_PARAM(").concat(r, ")") : "&".concat(r, "=QUERY_PARAM(").concat(r, ")")
                        }
                        return i
                    }(r)
                }(this.ampdoc.win, t)),
                cr(t).maybeExpandLink(t, i)
            }
            ,
            i.Yu = function(t, i, n) {
                if (!this.ku)
                    return !1;
                var r = oi(i)
                  , e = i.href
                  , s = n.protocol;
                if ("ftp:" == s)
                    return yh(r, e, "_blank"),
                    t.preventDefault(),
                    !0;
                var u = /^(https?|mailto):$/.test(s);
                return !(!this.Su || u || (yh(r, e, "_top"),
                t.preventDefault(),
                0))
            }
            ,
            i.Ku = function(t, i, n) {
                return !(!i.hasAttribute("rel") || !i.getAttribute("rel").split(" ").map((function(t) {
                    return t.trim()
                }
                )).includes("amphtml") || !this.navigateToAmpUrl(n.href, "<a rel=amphtml>") || (t.preventDefault(),
                0))
            }
            ,
            i.Qu = function(t, i, n, r) {
                var e = Mh(n)
                  , s = Mh(r);
                if (n.hash && e == s)
                    this.Zu(t, n, r);
                else {
                    var u = (i.getAttribute("target") || "").toLowerCase();
                    (this._u || this.Ru) && "_top" != u && "_blank" != u && (u = "_blank",
                    i.setAttribute("target", u));
                    var o = this.ampdoc.win
                      , h = sr(o)
                      , a = vr(i);
                    r.search && h.isSafari() && h.getMajorVersion() >= 13 && a.isProxyOrigin() && a.isEmbedded() && this.th(o, r, u),
                    this.viewerInterceptsNavigation(e, "intercept_click") && t.preventDefault()
                }
            }
            ,
            i.th = function(t, i, n) {
                Qt().info(wh, "Removing iframe query string before navigation:", i.search);
                var r = i.href
                  , e = "".concat(i.origin).concat(i.pathname).concat(i.hash);
                t.history.replaceState(null, "", e);
                var s = function() {
                    var i = t.location.href;
                    i == e ? (Qt().info(wh, "Restored iframe URL with query string:", r),
                    t.history.replaceState(null, "", r)) : Qt().error(wh, "Unexpected iframe URL change:", i, e)
                };
                "_blank" === n ? t.setTimeout(s, 0) : t.addEventListener("pageshow", (function i(n) {
                    n.persisted && (s(),
                    t.removeEventListener("pageshow", i))
                }
                ))
            }
            ,
            i.Zu = function(t, i, n) {
                var r = this;
                if (t.preventDefault(),
                !this._u) {
                    var e = i.hash.slice(1)
                      , s = null;
                    if (e) {
                        var u = vi(e);
                        s = this.Iu.getElementById(e) || this.Iu.querySelector('a[name="'.concat(u, '"]'))
                    }
                    i.hash != n.hash ? this.du.replaceStateForTarget(i.hash).then((function() {
                        r.ih(s, e)
                    }
                    )) : this.ih(s, e)
                }
            }
            ,
            i.registerAnchorMutator = function(t, i) {
                this.Hu.enqueue(t, i)
            }
            ,
            i.registerNavigateToMutator = function(t, i) {
                this.Gu.enqueue(t, i)
            }
            ,
            i.ih = function(t, i) {
                var n = this;
                t ? (this.yu.scrollIntoView(t),
                ar(this.ampdoc.win).delay((function() {
                    return n.yu.scrollIntoView(t)
                }
                ), 1)) : Qt().warn(wh, "failed to find element with id=".concat(i, " or a[name=").concat(i, "]"))
            }
            ,
            i.$u = function(t) {
                return lr(this.Nu).parse(t)
            }
            ,
            i.Ju = function() {
                return this.$u("")
            }
            ,
            i.viewerInterceptsNavigation = function(t, i) {
                var n = this.eo.hasCapability("interceptNavigation")
                  , r = this.ampdoc.isSingleDoc() && this.ampdoc.getRootNode().documentElement.hasAttribute("allow-navigation-interception");
                return !(!n || !r || !this.zu && !this.Uu || (this.eo.sendMessage("navigateTo", {
                    "url": t,
                    "requestedBy": i
                }),
                0))
            }
            ,
            t
        }();
        function Ih(t, i) {
            var n = yi(i.target, "A");
            if (n && n.href) {
                var r = n.getAttribute(Ph) || n.getAttribute("href");
                if (r) {
                    var e = {
                        "CLICK_X": function() {
                            return i.pageX
                        },
                        "CLICK_Y": function() {
                            return i.pageY
                        }
                    }
                      , s = cr(n).expandUrlSync(r, e, {
                        "CLICK_X": !0,
                        "CLICK_Y": !0
                    });
                    s != r && (n.getAttribute(Ph) || n.setAttribute(Ph, r),
                    n.setAttribute("href", s))
                }
            }
        }
        function Mh(t) {
            return "".concat(t.origin).concat(t.pathname).concat(t.search)
        }
        function Th(t) {
            return V(t) ? t : [t]
        }
        var Sh = function() {
            function t(t) {
                this.Ri = or(t)
            }
            var i = t.prototype;
            return i.setOwner = function(t, i) {
                Hs.setOwner(t, i)
            }
            ,
            i.schedulePreload = function(t, i) {
                this.nh(this.Ri.getResourceForElement(t), !1, Th(i))
            }
            ,
            i.scheduleLayout = function(t, i) {
                this.nh(this.Ri.getResourceForElement(t), !0, Th(i))
            }
            ,
            i.schedulePause = function(t, i) {
                var n = this.Ri.getResourceForElement(t);
                i = Th(i),
                this.rh(n, i, (function(t) {
                    t.pause()
                }
                ))
            }
            ,
            i.scheduleResume = function(t, i) {
                var n = this.Ri.getResourceForElement(t);
                i = Th(i),
                this.rh(n, i, (function(t) {
                    t.resume()
                }
                ))
            }
            ,
            i.scheduleUnlayout = function(t, i) {
                var n = this.Ri.getResourceForElement(t);
                i = Th(i),
                this.rh(n, i, (function(t) {
                    t.unlayout()
                }
                ))
            }
            ,
            i.requireLayout = function(t, i) {
                var n = [];
                return this.eh(t, (function(t) {
                    n.push(t.element.ensureLoaded())
                }
                )),
                Promise.all(n)
            }
            ,
            i.rh = function(t, i, n) {
                for (var r, e = o(i, !0); !(r = e()).done; ) {
                    var s = r.value;
                    Zt(t.element.contains(s)),
                    this.eh(s, n)
                }
            }
            ,
            i.eh = function(t, i) {
                if (t.classList.contains("i-amphtml-element")) {
                    i(this.Ri.getResourceForElement(t));
                    var n = t.getPlaceholder();
                    n && this.eh(n, i)
                } else
                    for (var r = t.getElementsByClassName("i-amphtml-element"), e = [], s = 0; s < r.length; s++) {
                        for (var u = r[s], o = !1, h = 0; h < e.length; h++)
                            if (e[h].contains(u)) {
                                o = !0;
                                break
                            }
                        o || (e.push(u),
                        i(this.Ri.getResourceForElement(u)))
                    }
            }
            ,
            i.nh = function(t, i, n) {
                this.rh(t, n, (function(i) {
                    i.element.ensureLoaded(t.getLayoutPriority())
                }
                ))
            }
            ,
            t
        }()
          , Rh = function() {
            function t(t) {
                this.sh = t.navigator,
                this.t = t
            }
            var i = t.prototype;
            return i.isAndroid = function() {
                return /Android/i.test(this.sh.userAgent)
            }
            ,
            i.isIos = function() {
                return /iPhone|iPad|iPod/i.test(this.sh.userAgent)
            }
            ,
            i.isSafari = function() {
                return /Safari/i.test(this.sh.userAgent) && !this.isChrome() && !this.isEdge() && !this.isFirefox() && !this.isOpera()
            }
            ,
            i.isChrome = function() {
                return /Chrome|CriOS/i.test(this.sh.userAgent) && !this.isEdge() && !this.isOpera()
            }
            ,
            i.isFirefox = function() {
                return /Firefox|FxiOS/i.test(this.sh.userAgent) && !this.isEdge()
            }
            ,
            i.isOpera = function() {
                return /OPR\/|Opera|OPiOS/i.test(this.sh.userAgent)
            }
            ,
            i.isEdge = function() {
                return /Edge/i.test(this.sh.userAgent)
            }
            ,
            i.isWebKit = function() {
                return /WebKit/i.test(this.sh.userAgent) && !this.isEdge()
            }
            ,
            i.isWindows = function() {
                return /Windows/i.test(this.sh.userAgent)
            }
            ,
            i.isStandalone = function() {
                return this.isIos() && this.sh.standalone || this.isChrome() && this.t.matchMedia("(display-mode: standalone)").matches
            }
            ,
            i.isBot = function() {
                return /bot/i.test(this.sh.userAgent)
            }
            ,
            i.getMajorVersion = function() {
                return this.isSafari() ? this.isIos() ? this.getIosMajorVersion() || 0 : this.oh(/\sVersion\/(\d+)/, 1) : this.isChrome() ? this.oh(/(Chrome|CriOS)\/(\d+)/, 2) : this.isFirefox() ? this.oh(/(Firefox|FxiOS)\/(\d+)/, 2) : this.isOpera() ? this.oh(/(OPR|Opera|OPiOS)\/(\d+)/, 2) : this.isEdge() ? this.oh(/Edge\/(\d+)/, 1) : 0
            }
            ,
            i.oh = function(t, i) {
                if (!this.sh.userAgent)
                    return 0;
                var n = this.sh.userAgent.match(t);
                return !n || i >= n.length ? 0 : parseInt(n[i], 10)
            }
            ,
            i.getIosVersionString = function() {
                var t, i, n;
                return this.isIos() && (null === (t = this.sh.userAgent) || void 0 === t || null === (i = t.match(/OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/)) || void 0 === i || null === (n = i[1]) || void 0 === n ? void 0 : n.replace(/_/g, ".")) || ""
            }
            ,
            i.getIosMajorVersion = function() {
                var t = this.getIosVersionString();
                return "" == t ? null : Number(t.split(".")[0])
            }
            ,
            t
        }();
        function _h(t) {
            An(t, "platform", Rh)
        }
        var kh = function() {
            function t(t) {
                this.ji = t,
                this.uh = A()
            }
            var i = t.prototype;
            return i.addTransition = function(t, i, n) {
                var r = this.hh(t, i);
                et(!this.uh[r]),
                this.uh[r] = n
            }
            ,
            i.setState = function(t) {
                var i = this.ji;
                this.ji = t;
                var n = this.hh(i, t)
                  , r = this.uh[n];
                null == r || r()
            }
            ,
            i.hh = function(t, i) {
                return "".concat(t, "|").concat(i)
            }
            ,
            t
        }()
          , Ch = function() {
            function t() {
                this.ye = [],
                this.ah = {},
                this.fh = 0,
                this.lh = 0
            }
            var i = t.prototype;
            return i.getSize = function() {
                return this.ye.length
            }
            ,
            i.getLastEnqueueTime = function() {
                return this.fh
            }
            ,
            i.getLastDequeueTime = function() {
                return this.lh
            }
            ,
            i.getTaskById = function(t) {
                return this.ah[t] || null
            }
            ,
            i.enqueue = function(t) {
                Zt(!this.ah[t.id]),
                this.ye.push(t),
                this.ah[t.id] = t,
                this.fh = Date.now()
            }
            ,
            i.dequeue = function(t) {
                var i = this.ah[t.id];
                return !!this.removeAtIndex(t, this.ye.indexOf(i)) && (this.lh = Date.now(),
                !0)
            }
            ,
            i.peek = function(t) {
                for (var i = 1e6, n = null, r = 0; r < this.ye.length; r++) {
                    var e = this.ye[r]
                      , s = t(e);
                    s < i && (i = s,
                    n = e)
                }
                return n
            }
            ,
            i.forEach = function(t) {
                this.ye.forEach(t)
            }
            ,
            i.removeAtIndex = function(t, i) {
                var n = this.ah[t.id];
                return !(!n || this.ye[i] != n || (this.ye.splice(i, 1),
                delete this.ah[t.id],
                0))
            }
            ,
            i.purge = function(t) {
                for (var i = this.ye.length; i--; )
                    t(this.ye[i]) && this.removeAtIndex(this.ye[i], i)
            }
            ,
            t
        }()
          , Nh = "Resources"
          , Dh = function() {
            function t(t) {
                var i = this;
                this.ampdoc = t,
                this.win = t.win,
                this.eo = vr(t),
                this.dh = this.eo.isRuntimeOn(),
                this.mh = !1,
                this.ph = 0,
                this.Ri = [],
                this.bh = 0,
                this.gh = 0,
                this.yh = 0,
                this.wh = this.ampdoc.isVisible(),
                this.Ah = !1,
                this.xh = !0,
                this.Eh = !1,
                this.Oh = -1,
                this.Ph = !0,
                this.Th = -1,
                this.Ih = 0,
                this.Mh = 0,
                this.Ds = new Cu(this.win,(function() {
                    return i.doPass()
                }
                )),
                this.Sh = new Cu(this.win,(function() {
                    i.Ph = !0,
                    i.schedulePass()
                }
                )),
                this.kh = new Ch,
                this.ue = new Ch,
                this._h = this.Rh.bind(this),
                this.Nh = [],
                this.Ch = [],
                this.Dh = !1,
                this.yu = mr(this.ampdoc),
                this.wu = dr(this.win),
                this.Au = new lh(this.win,6e4),
                this.jh = !1,
                this.zh = 0,
                this.Uh = !1,
                this.Lh = [],
                this.Hh = [],
                this.Gh = new a,
                this.Vh = new kh(this.ampdoc.getVisibilityState()),
                this.yu.onChanged((function(t) {
                    i.Ih = i.win.Date.now(),
                    i.Mh = t.velocity,
                    t.relayoutAll && (i.Ph = !0,
                    i.Uh = !0),
                    i.schedulePass()
                }
                )),
                this.yu.onScroll((function() {
                    i.Ih = i.win.Date.now()
                }
                )),
                this.ampdoc.onVisibilityChanged((function() {
                    -1 == i.Oh && i.ampdoc.isVisible() && (i.Oh = i.win.Date.now()),
                    i.schedulePass()
                }
                )),
                this.eo.onRuntimeState((function(t) {
                    Qt().fine(Nh, "Runtime state:", t),
                    i.dh = t,
                    i.schedulePass(1)
                }
                )),
                Xs(this.ampdoc, (function() {
                    i.Fh(i.Vh),
                    i.schedulePass(0)
                }
                )),
                this.Bh(),
                this.qh = dt(this.win, (function(t) {
                    return i.Wh(t)
                }
                ), 250),
                Ye(this.win.document, "scroll", this.qh, {
                    capture: !0,
                    passive: !0
                })
            }
            var i = t.prototype;
            return i.Bh = function() {
                var t = this;
                this.ampdoc.whenReady().then((function() {
                    t.Ah = !0,
                    t.$h(),
                    t.Ch = null,
                    function(t) {
                        return En(t, "input")
                    }(t.win).setupInputModeClasses(t.ampdoc);
                    var i = function() {
                        return t.Sh.schedule()
                    };
                    i(),
                    Promise.race([Xe(t.win), ar(t.win).promise(3100)]).then(i),
                    t.win.document.fonts && "loaded" != t.win.document.fonts.status && t.win.document.fonts.ready.then(i)
                }
                ))
            }
            ,
            i.get = function() {
                return this.Ri.slice(0)
            }
            ,
            i.getAmpdoc = function() {
                return this.ampdoc
            }
            ,
            i.getResourceForElement = function(t) {
                return Hs.forElement(t)
            }
            ,
            i.getResourceForElementOptional = function(t) {
                return Hs.forElementOptional(t)
            }
            ,
            i.getScrollDirection = function() {
                return Math.sign(this.Mh) || 1
            }
            ,
            i.add = function(t) {
                this.bh++,
                1 == this.bh && this.yu.ensureReadyForElements();
                var i = Hs.forElementOptional(t);
                i && 0 != i.getState() && !t.reconstructWhenReparented() ? (i.requestMeasure(),
                Qt().fine(Nh, "resource reused:", i.debugid)) : (i = new Hs(++this.ph,t,this),
                Qt().fine(Nh, "resource added:", i.debugid)),
                this.Ri.push(i),
                this.Sh.schedule(1e3)
            }
            ,
            i.Kh = function() {
                return this.gh < 20 || this.ampdoc.getVisibilityState() == br || this.ampdoc.hasBeenVisible()
            }
            ,
            i.Yh = function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , r = this.dh || this.mh;
                if (r) {
                    var e = this.ampdoc.getVisibilityState()
                      , s = e == gr && !t.prerenderAllowed()
                      , u = e == br && !t.previewAllowed();
                    s || u || (this.Ah ? this.Jh(t, n) : t.isBuilt() || t.isBuilding() || i && this.Ch.includes(t) || (this.Ch.push(t),
                    this.$h()))
                }
            }
            ,
            i.$h = function() {
                if (!this.Dh)
                    try {
                        this.Dh = !0,
                        this.Xh()
                    } finally {
                        this.Dh = !1
                    }
            }
            ,
            i.Xh = function() {
                for (var t = 0; t < this.Ch.length; t++) {
                    var i = this.Ch[t];
                    (this.Ah || ki(i.element, this.ampdoc.getRootNode())) && (this.Ch.splice(t--, 1),
                    this.Jh(i))
                }
            }
            ,
            i.Jh = function(t) {
                var i = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!n && !this.Kh() && !t.isBuildRenderBlocking())
                    return null;
                var r = t.build();
                return r ? (Qt().fine(Nh, "build resource:", t.debugid),
                this.gh++,
                this.yh++,
                r.then((function() {
                    return i.schedulePass()
                }
                ), (function(n) {
                    if (i.Qh(t),
                    !Us(n))
                        throw n
                }
                ))) : null
            }
            ,
            i.remove = function(t) {
                var i = Hs.forElementOptional(t);
                i && this.Qh(i)
            }
            ,
            i.Qh = function(t) {
                var i = this.Ri.indexOf(t);
                -1 != i && this.Ri.splice(i, 1),
                t.isBuilt() && t.pauseOnRemove(),
                3 === t.getState() && t.layoutCanceled(),
                this.Zh(t, !0),
                Qt().fine(Nh, "resource removed:", t.debugid)
            }
            ,
            i.upgraded = function(t) {
                var i = Hs.forElement(t);
                this.Yh(i),
                Qt().fine(Nh, "resource upgraded:", i.debugid)
            }
            ,
            i.updateLayoutPriority = function(t, i) {
                var n = Hs.forElement(t);
                n.updateLayoutPriority(i),
                this.ue.forEach((function(t) {
                    t.resource == n && (t.priority = i)
                }
                )),
                this.schedulePass()
            }
            ,
            i.schedulePass = function(t) {
                return this.Ds.schedule(t)
            }
            ,
            i.updateOrEnqueueMutateTask = function(t, i) {
                for (var n = null, r = 0; r < this.Nh.length; r++)
                    if (this.Nh[r].resource == t) {
                        n = this.Nh[r];
                        break
                    }
                n ? (n.newHeight = i.newHeight,
                n.newWidth = i.newWidth,
                n.marginChange = i.marginChange,
                n.event = i.event,
                n.force = i.force || n.force,
                n.callback = i.callback) : this.Nh.push(i)
            }
            ,
            i.schedulePassVsync = function() {
                var t = this;
                this.jh || (this.jh = !0,
                this.wu.mutate((function() {
                    return t.doPass()
                }
                )))
            }
            ,
            i.ampInitComplete = function() {
                this.Eh = !0,
                Qt().fine(Nh, "ampInitComplete"),
                this.schedulePass()
            }
            ,
            i.setRelayoutTop = function(t) {
                -1 == this.Th ? this.Th = t : this.Th = Math.min(t, this.Th)
            }
            ,
            i.maybeHeightChanged = function() {
                this.Uh = !0
            }
            ,
            i.onNextPass = function(t) {
                this.Lh.push(t)
            }
            ,
            i.doPass = function() {
                var t = this;
                if (this.dh) {
                    if (this.wh = this.ampdoc.isVisible(),
                    this.yh = 0,
                    this.Ah && this.xh && this.Eh) {
                        var i;
                        this.xh = !1;
                        var n = this.win.document
                          , r = Zn(this.ampdoc);
                        this.eo.sendMessage("documentLoaded", {
                            "title": n.title,
                            "sourceUrl": Is(this.ampdoc.getUrl()),
                            "isStory": "AMP-STORY" === (null === (i = n.body.firstElementChild) || void 0 === i ? void 0 : i.tagName),
                            "serverLayout": n.documentElement.hasAttribute("i-amphtml-element"),
                            "linkRels": r.linkRels,
                            "metaTags": {
                                "viewport": r.viewport
                            },
                            "viewport": r.viewport
                        }, !0),
                        this.zh = this.yu.getContentHeight(),
                        this.eo.sendMessage("documentHeight", {
                            "height": this.zh
                        }, !0),
                        Qt().fine(Nh, "document height on load: %s", this.zh)
                    }
                    !this.xh && this.ta && this.Ri.every((function(t) {
                        return t.getState() != Hs.NOT_BUILT || t.element.R1()
                    }
                    )) && (this.ta = !1,
                    this.Uh = !0);
                    var e = this.yu.getSize();
                    Qt().fine(Nh, "PASS: visible=", this.wh, ", relayoutAll=", this.Ph, ", relayoutTop=", this.Th, ", viewportSize=", e.width, e.height),
                    this.Ds.cancel(),
                    this.jh = !1,
                    this.Vh.setState(this.ampdoc.getVisibilityState()),
                    this.ia(),
                    this.Uh && (this.Uh = !1,
                    this.wu.measure((function() {
                        var i = t.yu.getContentHeight();
                        i != t.zh && (t.eo.sendMessage("documentHeight", {
                            "height": i
                        }, !0),
                        t.zh = i,
                        Qt().fine(Nh, "document height changed: %s", t.zh),
                        t.yu.contentHeightChanged())
                    }
                    )));
                    for (var s = 0; s < this.Lh.length; s++)
                        (0,
                        this.Lh[s])();
                    this.Lh.length = 0
                } else
                    Qt().fine(Nh, "runtime is off")
            }
            ,
            i.ia = function() {
                this.Ah && this.Eh && !this.ampdoc.signals().get(Gs) && (this.ampdoc.signals().signal(Gs),
                Qt().fine(Nh, "signal: ready-scan"))
            }
            ,
            i.na = function() {
                return this.Nh.length > 0
            }
            ,
            i.ra = function() {
                var t = this
                  , i = this.win.Date.now()
                  , n = this.yu.getRect()
                  , r = n.height / 10
                  , e = n.height / 10
                  , s = Math.abs(this.Mh) < .01 && i - this.Ih > 500 || i - this.Ih > 1e3;
                if (this.Nh.length > 0) {
                    Qt().fine(Nh, "change size requests:", this.Nh.length);
                    var u = this.Nh;
                    this.Nh = [];
                    for (var o = -1, h = [], a = 0, c = function(i) {
                        var c = u[i]
                          , f = c
                          , l = f.event
                          , v = f.resource
                          , d = v.getLayoutBox()
                          , m = 0
                          , p = 0
                          , g = 0
                          , b = 0
                          , y = d.bottom
                          , w = d.top
                          , A = void 0;
                        if (c.marginChange) {
                            A = c.marginChange.newMargins;
                            var x = c.marginChange.currentMargins;
                            null != A.top && (m = A.top - x.top),
                            null != A.bottom && (p = A.bottom - x.bottom),
                            null != A.left && (g = A.left - x.left),
                            null != A.right && (b = A.right - x.right),
                            m && (w = d.top - x.top),
                            p && (y = d.bottom + x.bottom)
                        }
                        var E = c.newHeight - d.height
                          , P = c.newWidth - d.width
                          , O = !1;
                        if (0 == E && 0 == m && 0 == p && 0 == P && 0 == g && 0 == b)
                            ;
                        else if (c.force || !t.wh)
                            O = !0;
                        else if (t.Au.hasDescendantsOf(v.element) || l && l.userActivation && l.userActivation.hasBeenActive)
                            O = !0;
                        else if (w >= n.bottom - e || 0 == m && d.bottom + Math.min(E, 0) >= n.bottom - e)
                            O = !0;
                        else {
                            if (n.top > 1 && y <= n.top + r)
                                return E < 0 && n.top + a < -E || (s ? (a += E,
                                h.push(c)) : t.Nh.push(c)),
                                "continue";
                            t.ea(v, d) ? O = !0 : E < 0 || m < 0 || p < 0 || (c.newHeight == d.height ? t.wu.run({
                                measure: function(t) {
                                    t.resize = !1;
                                    var i = v.element.parentElement;
                                    if (i) {
                                        for (var n = i.getLayoutSize && i.getLayoutSize().width || i.offsetWidth, r = P, e = 0; e < i.childElementCount; e++)
                                            if ((r += i.children[e].offsetWidth) > n)
                                                return;
                                        t.resize = !0
                                    }
                                },
                                mutate: function(t) {
                                    t.resize && c.resource.changeSize(c.newHeight, c.newWidth, A),
                                    c.resource.overflowCallback(!t.resize, c.newHeight, c.newWidth, A)
                                }
                            }, {}) : c.resource.overflowCallback(!0, c.newHeight, c.newWidth, A))
                        }
                        O && (d.top >= 0 && (o = -1 == o ? d.top : Math.min(o, d.top)),
                        c.resource.changeSize(c.newHeight, c.newWidth, A),
                        c.resource.overflowCallback(!1, c.newHeight, c.newWidth, A),
                        t.Uh = !0),
                        c.callback && c.callback(O)
                    }, f = 0; f < u.length; f++)
                        c(f);
                    -1 != o && this.setRelayoutTop(o),
                    h.length > 0 && this.wu.run({
                        measure: function(i) {
                            i.scrollHeight = t.yu.getScrollHeight(),
                            i.scrollTop = t.yu.getScrollTop()
                        },
                        mutate: function(i) {
                            var n = -1;
                            h.forEach((function(t) {
                                var i = t.resource.getLayoutBox();
                                n = -1 == n ? i.top : Math.min(n, i.top),
                                t.resource.changeSize(t.newHeight, t.newWidth, t.marginChange ? t.marginChange.newMargins : void 0),
                                t.callback && t.callback(!0)
                            }
                            )),
                            -1 != n && t.setRelayoutTop(n);
                            var r = t.yu.getScrollHeight();
                            r != i.scrollHeight && t.yu.setScrollTop(i.scrollTop + (r - i.scrollHeight)),
                            t.Uh = !0
                        }
                    }, {})
                }
            }
            ,
            i.ea = function(t, i, n) {
                var r = this.yu.getContentHeight()
                  , e = Math.max(.85 * r, r - 1e3)
                  , s = i || t.getLayoutBox()
                  , u = n || t.getInitialLayoutBox();
                return s.bottom >= e || u.bottom >= e
            }
            ,
            i.sa = function(t) {
                var i = t.isDisplayed();
                return t.measure(),
                !(i && !t.isDisplayed())
            }
            ,
            i.oa = function(t) {
                var i = this;
                t.length && this.wu.mutate((function() {
                    t.forEach((function(t) {
                        t.unload(),
                        i.Zh(t)
                    }
                    )),
                    Qt().fine(Nh, "unload:", t)
                }
                ))
            }
            ,
            i.ua = function() {
                var t = this.win.Date.now()
                  , i = this.Hh
                  , n = this.Ph
                  , r = this.Th;
                this.Ph = !1,
                this.Th = -1;
                for (var e, s = 0, u = 0, o = 0; o < this.Ri.length; o++) {
                    var h = this.Ri[o];
                    0 != h.getState() || h.isBuilding() || h.element.R1() || this.Yh(h, !0),
                    !n && h.hasBeenMeasured() && 1 != h.getState() || s++,
                    h.isMeasureRequested() && u++
                }
                if (s > 0 || u > 0 || n || -1 != r || i.length > 0)
                    for (var a = 0; a < this.Ri.length; a++) {
                        var c = this.Ri[a];
                        if (!(c.hasOwner() && !c.isMeasureRequested() || c.element.R1())) {
                            var f = n || 1 == c.getState() || !c.hasBeenMeasured() || c.isMeasureRequested() || -1 != r && c.getLayoutBox().bottom >= r;
                            if (!f)
                                for (var l = 0; l < i.length; l++)
                                    if (i[l].contains(c.element)) {
                                        f = !0;
                                        break
                                    }
                            f && (this.sa(c) || (e || (e = []),
                            e.push(c)))
                        }
                    }
                i.length = 0,
                e && this.oa(e);
                var v, d = this.yu.getRect();
                v = this.wh ? Hi(d, .25, 2) : d;
                for (var m = this.wh ? Hi(d, .25, .25) : d, p = 0; p < this.Ri.length; p++) {
                    var g = this.Ri[p];
                    if (0 != g.getState() && !g.hasOwner() && !g.element.R1()) {
                        var b = this.wh && g.isDisplayed() && g.overlaps(m);
                        g.setInViewport(b)
                    }
                }
                if (v)
                    for (var y = 0; y < this.Ri.length; y++) {
                        var w = this.Ri[y];
                        w.isBuilt() || w.isBuilding() || w.hasOwner() || w.element.R1() || !w.hasBeenMeasured() || !w.isDisplayed() || !w.overlaps(v) || this.Yh(w, !0, !0),
                        2 != w.getState() || w.hasOwner() || w.isDisplayed() && w.overlaps(v) && this.scheduleLayoutOrPreload(w, !0)
                    }
                if (this.wh && this.ha(t)) {
                    for (var A = 0, x = 0; x < this.Ri.length && A < 4; x++) {
                        var E = this.Ri[x];
                        2 == E.getState() && !E.hasOwner() && !E.element.R1() && E.isDisplayed() && E.idleRenderOutsideViewport() && (Qt().fine(Nh, "idleRenderOutsideViewport layout:", E.debugid),
                        this.scheduleLayoutOrPreload(E, !1),
                        A++)
                    }
                    for (var P = 0; P < this.Ri.length && A < 4; P++) {
                        var O = this.Ri[P];
                        2 != O.getState() || O.hasOwner() || O.element.R1() || !O.isDisplayed() || (Qt().fine(Nh, "idle layout:", O.debugid),
                        this.scheduleLayoutOrPreload(O, !1),
                        A++)
                    }
                }
            }
            ,
            i.ha = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now()
                  , i = this.kh.getLastDequeueTime();
                return 0 == this.kh.getSize() && 0 == this.ue.getSize() && t > i + 5e3 && i > 0
            }
            ,
            i.aa = function() {
                for (var t = this.win.Date.now(), i = -1, n = this.ue.peek(this._h); n && (i = this.ca(n),
                Qt().fine(Nh, "peek from queue:", n.id, "sched at", n.scheduleTime, "score", this._h(n), "timeout", i),
                !(i > 16)); ) {
                    this.ue.dequeue(n);
                    var r = this.kh.getTaskById(n.id);
                    if (r) {
                        var e = this.fa.bind(this, n);
                        r.promise.then(e, e)
                    } else {
                        var s = n.resource;
                        s.measure(),
                        this.la(s, n.forceOutsideViewport) ? (n.promise = n.callback(),
                        n.startTime = t,
                        Qt().fine(Nh, "exec:", n.id, "at", n.startTime),
                        this.kh.enqueue(n),
                        n.promise.then(this.va.bind(this, n, !0), this.va.bind(this, n, !1)).catch(Ds)) : (Qt().fine(Nh, "cancelled", n.id),
                        s.layoutCanceled())
                    }
                    n = this.ue.peek(this._h),
                    i = -1
                }
                if (Qt().fine(Nh, "queue size:", this.ue.getSize(), "exec size:", this.kh.getSize()),
                i >= 0)
                    return i;
                var u = 2 * (t - this.kh.getLastDequeueTime());
                return Math.max(Math.min(3e4, u), 5e3)
            }
            ,
            i.Rh = function(t) {
                var i = this.yu.getRect()
                  , n = t.resource.getLayoutBox()
                  , r = Math.floor((n.top - i.top) / i.height);
                return Math.sign(r) != this.getScrollDirection() && (r *= 2),
                r = Math.abs(r),
                10 * t.priority + r
            }
            ,
            i.ca = function(t) {
                var i = this.win.Date.now();
                if (0 == this.kh.getSize()) {
                    if (-1 === this.Oh)
                        return 0;
                    var n = 1e3 * t.priority;
                    return Math.max(n - (i - this.Oh), 0)
                }
                var r = 0;
                return this.kh.forEach((function(n) {
                    var e = Math.max(1e3 * (t.priority - n.priority), 0);
                    r = Math.max(r, e - (i - n.startTime))
                }
                )),
                r
            }
            ,
            i.fa = function(t) {
                this.ue.getTaskById(t.id) || this.ue.enqueue(t)
            }
            ,
            i.va = function(t, i, n) {
                if (this.kh.dequeue(t),
                this.schedulePass(1e3),
                !i)
                    return Qt().info(Nh, "task failed:", t.id, t.resource.debugid, n),
                    Promise.reject(n)
            }
            ,
            i.la = function(t, i) {
                if (0 == t.getState() || !t.isDisplayed())
                    return !1;
                var n = this.ampdoc.getVisibilityState()
                  , r = n == gr && t.prerenderAllowed()
                  , e = n == br && t.previewAllowed();
                return !!(this.wh || r || e) && !!(i || t.isInViewport() || t.renderOutsideViewport() || t.idleRenderOutsideViewport())
            }
            ,
            i.scheduleLayoutOrPreload = function(t, i, n, r) {
                if (!t.element.R1()) {
                    var e = 0 != t.getState()
                      , s = t.isDisplayed();
                    e && s || Zt(!1);
                    var u = r || !1;
                    this.la(t, u) && (i ? this.Pe(t, "L", 0, n || 0, u, t.startLayout.bind(t)) : this.Pe(t, "P", 2, n || 0, u, t.startLayout.bind(t)))
                }
            }
            ,
            i.Pe = function(t, i, n, r, e, s) {
                var u = t.getTaskId(i)
                  , o = {
                    id: u,
                    resource: t,
                    priority: Math.max(t.getLayoutPriority(), r) + n,
                    forceOutsideViewport: e,
                    callback: s,
                    scheduleTime: this.win.Date.now(),
                    startTime: 0,
                    promise: null
                };
                Qt().fine(Nh, "schedule:", o.id, "at", o.scheduleTime);
                var h = this.ue.getTaskById(u);
                (!h || o.priority < h.priority) && (h && this.ue.dequeue(h),
                this.ue.enqueue(o),
                this.schedulePass(this.ca(o))),
                o.resource.layoutScheduled(o.scheduleTime)
            }
            ,
            i.whenFirstPass = function() {
                return this.Gh.promise
            }
            ,
            i.Fh = function(t) {
                var i = this
                  , n = wr
                  , r = xr
                  , e = Ar
                  , s = gr
                  , u = br
                  , o = yr
                  , h = function() {
                    var t = i.yu.getSize();
                    if (t.height > 0 && t.width > 0) {
                        i.na() && i.ra(),
                        i.ua();
                        var n = i.aa();
                        i.na() && (n = Math.min(n, 500)),
                        i.wh ? i.schedulePass(n) ? Qt().fine(Nh, "next pass:", n) : Qt().fine(Nh, "pass already scheduled") : Qt().fine(Nh, "document is not visible: no scheduling"),
                        i.Gh.resolve()
                    }
                }
                  , a = function() {}
                  , c = function() {
                    i.Ri.forEach((function(t) {
                        return t.pause()
                    }
                    ))
                }
                  , f = function() {
                    i.Ri.forEach((function(t) {
                        t.unload(),
                        i.Zh(t)
                    }
                    )),
                    i.da()
                }
                  , l = function() {
                    i.Ri.forEach((function(t) {
                        return t.resume()
                    }
                    )),
                    h()
                };
                t.addTransition(s, s, h),
                t.addTransition(s, u, h),
                t.addTransition(s, o, h),
                t.addTransition(s, n, h),
                t.addTransition(s, r, h),
                t.addTransition(s, e, h),
                t.addTransition(u, u, h),
                t.addTransition(u, o, h),
                t.addTransition(u, n, h),
                t.addTransition(u, r, h),
                t.addTransition(u, e, h),
                t.addTransition(o, o, h),
                t.addTransition(o, n, h),
                t.addTransition(o, r, f),
                t.addTransition(o, e, c),
                t.addTransition(n, o, h),
                t.addTransition(n, n, h),
                t.addTransition(n, r, f),
                t.addTransition(n, e, c),
                t.addTransition(r, o, l),
                t.addTransition(r, n, l),
                t.addTransition(r, r, a),
                t.addTransition(r, e, h),
                t.addTransition(e, o, l),
                t.addTransition(e, n, h),
                t.addTransition(e, r, f),
                t.addTransition(e, e, a)
            }
            ,
            i.da = function() {
                try {
                    this.win.getSelection().removeAllRanges()
                } catch (t) {}
            }
            ,
            i.Zh = function(t, i) {
                if (1 != t.getState() && 2 != t.getState() || (this.ue.purge((function(i) {
                    return i.resource == t
                }
                )),
                this.kh.purge((function(i) {
                    return i.resource == t
                }
                )),
                q(this.Nh, (function(i) {
                    return i.resource === t
                }
                ))),
                0 == t.getState() && i && this.Ch) {
                    var n = this.Ch.indexOf(t);
                    -1 != n && this.Ch.splice(n, 1)
                }
            }
            ,
            i.Wh = function(t) {
                var i = t.target;
                if (i.nodeType === Node.ELEMENT_NODE && i !== this.yu.getScrollingElement()) {
                    var n = i;
                    this.Hh.includes(n) || (this.Hh.push(n),
                    this.schedulePass(70))
                }
            }
            ,
            t
        }();
        function jh(t) {
            return t.queryCommandSupported("copy")
        }
        function Uh(t) {
            return t.hasAttribute("hidden")
        }
        var Lh = "STANDARD-ACTIONS"
          , zh = /^i-amphtml-/
          , Hh = function() {
            function t(t) {
                this.ampdoc = t;
                var i = t.getHeadNode();
                this.ma = rr(t),
                this.yu = mr(t),
                this.pa(Bn(i)),
                this.ba()
            }
            var i = t.prototype;
            return i.pa = function(t) {
                t.addGlobalTarget("AMP", this.ga.bind(this)),
                t.addGlobalMethodHandler("hide", this.ya.bind(this)),
                t.addGlobalMethodHandler("show", this.wa.bind(this)),
                t.addGlobalMethodHandler("toggleVisibility", this.Aa.bind(this)),
                t.addGlobalMethodHandler("scrollTo", this.xa.bind(this)),
                t.addGlobalMethodHandler("focus", this.Ea.bind(this)),
                t.addGlobalMethodHandler("toggleClass", this.Oa.bind(this)),
                t.addGlobalMethodHandler("copy", this.Pa.bind(this)),
                t.addGlobalMethodHandler("toggleChecked", this.Ta.bind(this))
            }
            ,
            i.ba = function() {
                this.Ia() && this.ampdoc.waitForBodyOpen().then((function(t) {
                    var i = t.getAttribute("data-prefers-dark-mode-class") || "amp-dark-mode";
                    t.classList.add(i)
                }
                ))
            }
            ,
            i.Ia = function() {
                var t, i;
                try {
                    var n = this.ampdoc.win.localStorage.getItem("amp-dark-mode");
                    if (n)
                        return "yes" === n
                } catch (t) {}
                return null === (t = (i = this.ampdoc.win).matchMedia) || void 0 === t ? void 0 : t.call(i, "(prefers-color-scheme: dark)").matches
            }
            ,
            i.ga = function(t) {
                if (!t.satisfiesTrust(2))
                    return null;
                var i = t.args
                  , n = t.method
                  , r = t.node
                  , e = oi(r);
                switch (n) {
                case "pushState":
                case "setState":
                    var s = r.nodeType === Node.DOCUMENT_NODE ? r.documentElement : r;
                    return Jn(s).then((function(i) {
                        return ti(i, "AMP-BIND is not installed."),
                        i.invoke(t)
                    }
                    ));
                case "navigateTo":
                    return this.Ma(t);
                case "closeOrNavigateTo":
                    return this.Sa(t);
                case "scrollTo":
                    return ti(i.id, "AMP.scrollTo must provide element ID"),
                    t.node = Rn(r).getElementById(i.id),
                    this.xa(t);
                case "goBack":
                    return ir(this.ampdoc).goBack(!(!i || !0 !== i.navigate)),
                    null;
                case "print":
                    return e.print(),
                    null;
                case "copy":
                    return this.Pa(t);
                case "optoutOfCid":
                    return Xn(this.ampdoc).then((function(t) {
                        return t.optOut()
                    }
                    )).catch((function(t) {
                        Qt().error(Lh, "Failed to opt out of CID", t)
                    }
                    ));
                case "toggleTheme":
                    return this.ka(),
                    null
                }
                throw Jt().createError("Unknown AMP action ", n)
            }
            ,
            i.Pa = function(t) {
                var i, n = t.args, r = oi(t.node), e = "copy-error";
                if ("AMP" === t.tagOrTarget)
                    i = n.text.trim();
                else {
                    var s, u = st(t.node);
                    i = (null !== (s = u.value) && void 0 !== s ? s : u.textContent).trim()
                }
                var o, h, a, c = function(t, i, n) {
                    var e = {
                        data: {
                            type: i
                        }
                    }
                      , s = We(r, "".concat(t), e);
                    Bn(n.caller).trigger(n.caller, t, s, 3)
                };
                null !== (h = (o = r.document).defaultView) && void 0 !== h && null !== (a = h.navigator) && void 0 !== a && a.clipboard || jh(o) ? function(t, i, n, r) {
                    var e;
                    null !== (e = t.navigator) && void 0 !== e && e.clipboard ? t.navigator.clipboard.writeText(i).then(n, r) : jh(t.document) && function(t, i) {
                        var n, r = !1, e = t.document, s = e.createElement("textarea");
                        _r(s, {
                            "position": "fixed",
                            "top": 0,
                            "left": 0,
                            "width": "50px",
                            "height": "50px",
                            "padding": 0,
                            "border": "none",
                            "outline": "none",
                            "background": "transparent"
                        }),
                        s.value = i,
                        s.readOnly = !0,
                        s.contentEditable = "true",
                        e.body.appendChild(s),
                        null === (n = t.getSelection()) || void 0 === n || n.removeAllRanges(),
                        s.focus(),
                        s.setSelectionRange(0, i.length);
                        try {
                            r = e.execCommand("copy")
                        } catch (t) {}
                        return Ti(s),
                        r
                    }(t, i) ? n() : r()
                }(r, i, (function() {
                    c("copy-success", "success", t)
                }
                ), (function() {
                    c(e, "error", t)
                }
                )) : c(e, "unsupported", t)
            }
            ,
            i.Ma = function(t) {
                var i = this
                  , n = t.args
                  , r = t.caller
                  , e = t.method
                  , s = oi(t.node)
                  , u = h();
                return r.tagName.startsWith("AMP-") && (u = r.getImpl().then((function(t) {
                    "function" == typeof t.throwIfCannotNavigate && t.throwIfCannotNavigate()
                }
                ))),
                u.then((function() {
                    var t;
                    (t = i.ampdoc,
                    Pn(t, "navigation")).navigateTo(s, n.url, "AMP.".concat(e), {
                        target: n.target,
                        opener: n.opener
                    })
                }
                ), (function(t) {
                    Jt().error(Lh, t)
                }
                ))
            }
            ,
            i.ka = function() {
                var t = this;
                this.ampdoc.waitForBodyOpen().then((function(i) {
                    try {
                        var n = i.getAttribute("data-prefers-dark-mode-class") || "amp-dark-mode";
                        t.Ia() ? (i.classList.remove(n),
                        t.ampdoc.win.localStorage.setItem("amp-dark-mode", "no")) : (i.classList.add(n),
                        t.ampdoc.win.localStorage.setItem("amp-dark-mode", "yes"))
                    } catch (t) {}
                }
                ))
            }
            ,
            i.Sa = function(t) {
                var i = oi(t.node)
                  , n = i.parent != i
                  , r = !1;
                return i.opener && this.ampdoc.isSingleDoc() && !n && (i.close(),
                r = i.closed),
                r ? h() : this.Ma(t)
            }
            ,
            i.xa = function(t) {
                var i = t.node
                  , n = t.args
                  , r = n && n.position
                  , e = n && n.duration;
                return r && !["top", "bottom", "center"].includes(r) && (r = void 0),
                J(e) || (e = void 0),
                this.yu.animateScrollIntoView(i, r, e)
            }
            ,
            i.Ea = function(t) {
                return Ci(t.node),
                null
            }
            ,
            i.ya = function(t) {
                var i = t.node;
                if (i.classList.contains("i-amphtml-element")) {
                    var n = i;
                    this.ma.mutateElement(n, (function() {
                        return n.collapse()
                    }
                    ), !0)
                } else
                    this.ma.mutateElement(i, (function() {
                        return kr(i, !1)
                    }
                    ));
                return null
            }
            ,
            i.wa = function(t) {
                var i = this
                  , n = t.node
                  , r = oi(n);
                if (n.classList.contains(ae(Qr)))
                    return Jt().warn(Lh, "Elements with layout=nodisplay cannot be dynamically shown.", n),
                    null;
                this.ma.measureElement((function() {
                    "none" != Nr(r, n).display || Uh(n) || Jt().warn(Lh, 'Elements can only be dynamically shown when they have the "hidden" attribute set or when they were dynamically hidden.', n)
                }
                ));
                var e, s = (e = n).hasAttribute("autofocus") ? e : e.querySelector("[autofocus]");
                return s && sr(r).isIos() ? (this._a(n, s),
                this.ma.mutateElement(n, (function() {}
                ))) : this.ma.mutateElement(n, (function() {
                    i._a(n, s)
                }
                )),
                null
            }
            ,
            i._a = function(t, i) {
                t.classList.contains("i-amphtml-element") ? t.expand() : kr(t, !0),
                i && Ci(i)
            }
            ,
            i.Aa = function(t) {
                return Uh(t.node) ? this.wa(t) : this.ya(t)
            }
            ,
            i.Oa = function(t) {
                var i = t.node
                  , n = t.args
                  , r = Jt().assertString(n.class, "Argument 'class' must be a string.");
                return zh.test(r) || this.ma.mutateElement(i, (function() {
                    if (void 0 !== n.force) {
                        var t = Jt().assertBoolean(n.force, "Optional argument 'force' must be a boolean.");
                        i.classList.toggle(r, t)
                    } else
                        i.classList.toggle(r)
                }
                )),
                null
            }
            ,
            i.Ta = function(t) {
                var i = t.node
                  , n = t.args;
                return this.ma.mutateElement(i, (function() {
                    if (void 0 !== (null == n ? void 0 : n.force)) {
                        var t = Jt().assertBoolean(n.force, "Optional argument 'force' must be a boolean.");
                        i.checked = t
                    } else
                        !0 === i.checked ? i.checked = !1 : i.checked = !0
                }
                )),
                null
            }
            ,
            t
        }()
          , Gh = "Storage"
          , Vh = function() {
            function t(t, i, n) {
                this.ampdoc = t,
                this.eo = i,
                this.Ro = n,
                this.Ra = n instanceof Bh,
                this.i = Ms(this.ampdoc.win.location),
                this.Na = null
            }
            var i = t.prototype;
            return i.Ca = function() {
                return this.Da(),
                this
            }
            ,
            i.get = function(t, i) {
                return this.ja().then((function(n) {
                    return n.get(t, i)
                }
                ))
            }
            ,
            i.set = function(t, i, n) {
                return Zt("boolean" == typeof i),
                this.setNonBoolean(t, i, n)
            }
            ,
            i.setNonBoolean = function(t, i, n) {
                return this.za((function(r) {
                    return r.set(t, i, n)
                }
                ))
            }
            ,
            i.remove = function(t) {
                return this.za((function(i) {
                    return i.remove(t)
                }
                ))
            }
            ,
            i.isViewerStorage = function() {
                return this.Ra
            }
            ,
            i.ja = function() {
                return this.Na || (this.Na = this.Ro.loadBlob(this.i).then((function(t) {
                    return t ? at(atob(t)) : {}
                }
                )).catch((function(t) {
                    return Qt().expectedError(Gh, "Failed to load store: ", t),
                    {}
                }
                )).then((function(t) {
                    return new Fh(t)
                }
                ))),
                this.Na
            }
            ,
            i.za = function(t) {
                var i = this;
                return this.ja().then((function(n) {
                    t(n);
                    var r = btoa(JSON.stringify(n.obj));
                    return i.Ro.saveBlob(i.i, r)
                }
                )).then(this.Ua.bind(this))
            }
            ,
            i.Da = function() {
                var t = this;
                this.eo.onBroadcast((function(i) {
                    "amp-storage-reset" == i.type && i.origin == t.i && (Qt().fine(Gh, "Received reset message"),
                    t.Na = null)
                }
                ))
            }
            ,
            i.Ua = function() {
                Qt().fine(Gh, "Broadcasted reset message"),
                this.eo.broadcast({
                    "type": "amp-storage-reset",
                    "origin": this.i
                })
            }
            ,
            t
        }()
          , Fh = function() {
            function t(t, i) {
                this.obj = E(t),
                this.La = i || 8,
                this.Ha = this.obj.vv || Object.create(null),
                this.obj.vv || (this.obj.vv = this.Ha)
            }
            var i = t.prototype;
            return i.get = function(t, i) {
                var n = this.Ha[t]
                  , r = n ? n.t : void 0
                  , e = !i || null == r || r + i > Date.now();
                return n && e ? n.v : void 0
            }
            ,
            i.set = function(t, i, n) {
                if (Zt("__proto__" != t && "prototype" != t),
                void 0 !== this.Ha[t]) {
                    var r = this.Ha[t]
                      , e = Date.now();
                    n && (e = r.t),
                    r.v = i,
                    r.t = e
                } else
                    this.Ha[t] = {
                        "v": i,
                        "t": Date.now()
                    };
                var s = Object.keys(this.Ha);
                if (s.length > this.La) {
                    for (var u = 1 / 0, o = null, h = 0; h < s.length; h++) {
                        var a = this.Ha[s[h]];
                        a.t < u && (o = s[h],
                        u = a.t)
                    }
                    o && delete this.Ha[o]
                }
            }
            ,
            i.remove = function(t) {
                delete this.Ha[t]
            }
            ,
            t
        }()
          , qh = function() {
            function t(t) {
                if (this.win = t,
                this.Ga = this.Va(),
                !this.Ga) {
                    var i = new Error("localStorage not supported.");
                    Qt().expectedError(Gh, i)
                }
            }
            var i = t.prototype;
            return i.Va = function() {
                try {
                    return "localStorage"in this.win && (this.win.localStorage.getItem("test"),
                    !0)
                } catch (t) {
                    return !1
                }
            }
            ,
            i.Fa = function(t) {
                return "amp-store:".concat(t)
            }
            ,
            i.loadBlob = function(t) {
                var i = this;
                return new Promise((function(n) {
                    i.Ga ? n(i.win.localStorage.getItem(i.Fa(t))) : n(null)
                }
                ))
            }
            ,
            i.saveBlob = function(t, i) {
                var n = this;
                return new Promise((function(r) {
                    n.Ga ? (n.win.localStorage.setItem(n.Fa(t), i),
                    r()) : r()
                }
                ))
            }
            ,
            t
        }()
          , Bh = function() {
            function t(t) {
                this.eo = t
            }
            var i = t.prototype;
            return i.loadBlob = function(t) {
                return this.eo.sendMessageAwaitResponse("loadStore", {
                    "origin": t
                }).then((function(t) {
                    return t.blob
                }
                ))
            }
            ,
            i.saveBlob = function(t, i) {
                return this.eo.sendMessageAwaitResponse("saveStore", {
                    "origin": t,
                    "blob": i
                }).catch((function(t) {
                    throw Qt().createExpectedError(Gh, "Failed to save store: ", t)
                }
                ))
            }
            ,
            t
        }()
          , $h = "__AMP_IMPL_"
          , Wh = function() {}
          , Yh = function() {
            function t(t) {
                this.Lr = t,
                this.Ba = {},
                this.qa = {}
            }
            var i = t.prototype;
            return i.whenReady = function(t) {
                return this.Wa(t).then(Wh)
            }
            ,
            i.setHtmlForTemplate = function(t, i) {
                var n = this;
                return this.Wa(t).then((function(t) {
                    return n.$a(t, i)
                }
                ))
            }
            ,
            i.renderTemplate = function(t, i) {
                var n = this;
                return this.Wa(t).then((function(t) {
                    return n.Ka(t, i)
                }
                ))
            }
            ,
            i.renderTemplateAsString = function(t, i) {
                return this.Wa(t).then((function(t) {
                    return t.renderAsString(i)
                }
                ))
            }
            ,
            i.getTemplateRenderer = function(t) {
                return this.Wa(t).then((function(t) {
                    return {
                        renderAsString: function(i) {
                            return t.renderAsString(i)
                        }
                    }
                }
                ))
            }
            ,
            i.renderTemplateArray = function(t, i) {
                var n = this;
                return 0 == i.length ? Promise.resolve([]) : this.Wa(t).then((function(t) {
                    return i.map((function(i) {
                        return n.Ka(t, i)
                    }
                    ))
                }
                ))
            }
            ,
            i.findAndRenderTemplate = function(t, i, n) {
                return this.renderTemplate(this.findTemplate(t, n), i)
            }
            ,
            i.findAndSetHtmlForTemplate = function(t, i, n) {
                return this.setHtmlForTemplate(this.findTemplate(t, n), i)
            }
            ,
            i.findAndRenderTemplateArray = function(t, i, n) {
                return this.renderTemplateArray(this.findTemplate(t, n), i)
            }
            ,
            i.hasTemplate = function(t, i) {
                return !!this.maybeFindTemplate(t, i)
            }
            ,
            i.findTemplate = function(t, i) {
                var n = this.maybeFindTemplate(t, i);
                ti(n, "Template not found for %s", t);
                var r = n.tagName;
                return ti("TEMPLATE" == r || "SCRIPT" == r && "text/plain" === n.getAttribute("type"), 'Template must be defined in a <template> or <script type="text/plain"> tag'),
                n
            }
            ,
            i.maybeFindTemplate = function(t, i) {
                var n = t.getAttribute("template");
                return n ? _i(t).getElementById(n) : i ? pi(t, i) : t.querySelector('template[type], script[type="text/plain"]')
            }
            ,
            i.Wa = function(t) {
                var i = this
                  , n = t[$h];
                if (n)
                    return Promise.resolve(n);
                var r = ""
                  , e = t.tagName;
                "TEMPLATE" == e ? r = t.getAttribute("type") : "SCRIPT" == e && (r = t.getAttribute("template")),
                ti(r, "Type must be specified: %s", t);
                var s = t.__AMP_WAIT_;
                return s || (s = this.Ya(t, r).then((function(n) {
                    var r = n
                      , e = t[$h] = new r(t,i.Lr.win);
                    return delete t.__AMP_WAIT_,
                    e
                }
                )),
                t.__AMP_WAIT_ = s,
                s)
            }
            ,
            i.Ya = function(t, i) {
                if (this.Ba[i])
                    return this.Ba[i];
                var n = new a
                  , r = n.promise
                  , e = n.resolve;
                return this.Ba[i] = r,
                this.qa[i] = e,
                r
            }
            ,
            i.Ja = function(t, i) {
                if (this.Ba[t]) {
                    var n = this.qa[t];
                    ti(n, "Duplicate template type: %s", t),
                    delete this.qa[t],
                    n(i)
                } else
                    this.Ba[t] = Promise.resolve(i)
            }
            ,
            i.Ka = function(t, i) {
                return t.render(i)
            }
            ,
            i.$a = function(t, i) {
                return t.setHtml(i)
            }
            ,
            t
        }()
          , Kh = function() {
            function t(t) {
                this.win = t,
                this.Xa = this.win.Promise.resolve(),
                this.Qa = 0,
                this.Za = {},
                this.tc = Date.now()
            }
            var i = t.prototype;
            return i.timeSinceStart = function() {
                return Date.now() - this.tc
            }
            ,
            i.delay = function(t, i) {
                var n = this;
                if (!i) {
                    var r = "p" + this.Qa++;
                    return this.Xa.then((function() {
                        n.Za[r] ? delete n.Za[r] : t()
                    }
                    )).catch(Ds),
                    r
                }
                return this.win.setTimeout((function() {
                    try {
                        t()
                    } catch (t) {
                        throw Ds(t),
                        t
                    }
                }
                ), i)
            }
            ,
            i.cancel = function(t) {
                "string" != typeof t ? this.win.clearTimeout(t) : this.Za[t] = !0
            }
            ,
            i.promise = function(t) {
                var i = this;
                return new this.win.Promise((function(n) {
                    if (-1 == i.delay(n, t))
                        throw new Error("Failed to schedule timer.")
                }
                ))
            }
            ,
            i.timeoutPromise = function(t, i, n) {
                var r, e = this, s = new this.win.Promise((function(i, s) {
                    if (-1 == (r = e.delay((function() {
                        s(Jt().createError(n || "timeout"))
                    }
                    ), t)))
                        throw new Error("Failed to schedule timer.")
                }
                ));
                if (!i)
                    return s;
                var u = function() {
                    e.cancel(r)
                };
                return i.then(u, u),
                this.win.Promise.race([s, i])
            }
            ,
            i.poll = function(t, i) {
                var n = this;
                return new this.win.Promise((function(r) {
                    var e = n.win.setInterval((function() {
                        i() && (n.win.clearInterval(e),
                        r())
                    }
                    ), t)
                }
                ))
            }
            ,
            t
        }();
        function Jh(t) {
            An(t, "timer", Kh)
        }
        var Xh = function() {
            function t(t) {
                var i = t.getRootNode()
                  , n = i.ownerDocument || i;
                this.ic = n.createElement("a"),
                this.rr = new as(100)
            }
            var i = t.prototype;
            return i.parse = function(t, i) {
                return ds(this.ic, t, i ? null : this.rr)
            }
            ,
            i.nc = function(t) {
                return "string" != typeof t ? t : this.parse(t)
            }
            ,
            i.isProtocolValid = function(t) {
                return Es(t)
            }
            ,
            i.getSourceOrigin = function(t) {
                return Ms(this.nc(t))
            }
            ,
            i.getSourceUrl = function(t) {
                return Is(this.nc(t))
            }
            ,
            i.resolveRelativeUrl = function(t, i) {
                return Ts(t, this.nc(i))
            }
            ,
            i.assertHttpsUrl = function(t, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "source";
                return ws(t, i, n)
            }
            ,
            i.assertAbsoluteHttpOrHttpsUrl = function(t) {
                return function(t) {
                    return ti(/^https?\:/i.test(t), 'URL must start with "http://" or "https://". Invalid value: %s', t),
                    vs(t).href
                }(t)
            }
            ,
            i.isProxyOrigin = function(t) {
                return xs(this.nc(t))
            }
            ,
            i.isSecure = function(t) {
                return ys(this.nc(t))
            }
            ,
            i.getWinOrigin = function(t) {
                return t.origin || this.nc(t.location.href).origin
            }
            ,
            i.getCdnUrlOnOrigin = function(t) {
                if (xs(t))
                    return t;
                var i = this.nc(t)
                  , n = i.hash
                  , r = i.host
                  , e = i.pathname
                  , s = i.search
                  , u = encodeURIComponent(r);
                return "".concat(Mt, "/c/").concat(u).concat(e).concat(s).concat(n)
            }
            ,
            t
        }()
          , Qh = "Expander"
          , Zh = function() {
            function t(t, i, n, r, e, s) {
                this.rc = t,
                this.ec = i,
                this.sc = n,
                this.oc = r,
                this.Us = e,
                this.uc = !s
            }
            var i = t.prototype;
            return i.expand = function(t) {
                if (!t.length)
                    return this.oc ? t : Promise.resolve(t);
                var i = this.rc.getExpr(this.ec, this.Us)
                  , n = this.hc(t, i);
                return n.length ? this.ac(t, n) : this.oc ? t : Promise.resolve(t)
            }
            ,
            i.getMacroNames = function(t) {
                var i = this.rc.getExpr(this.ec, this.Us);
                return t.match(i) || []
            }
            ,
            i.hc = function(t, i) {
                var n = [];
                return t.replace(i, (function(t, i, r) {
                    var e = t.length
                      , s = {
                        start: r,
                        stop: e + r - 1,
                        name: i,
                        length: e
                    };
                    n.push(s)
                }
                )),
                n
            }
            ,
            i.ac = function(t, i) {
                var n = this
                  , r = []
                  , e = 0
                  , s = 0
                  , u = i[s]
                  , o = 0
                  , h = !1;
                return function a(c) {
                    for (var f, l = "", v = [], m = []; e < t.length && s <= i.length; ) {
                        var p, g = l.trim();
                        if (u && e === u.start)
                            g && v.push(o ? (f = l).trimStart ? f.trimStart() : (f + "_").trim().slice(0, -1) : l),
                            p = n.ec && x(n.ec, u.name) ? {
                                name: u.name,
                                prioritized: n.ec[u.name],
                                encode: c
                            } : D(D({}, n.rc.get(u.name)), {}, {
                                name: u.name,
                                encode: c
                            }),
                            e = u.stop + 1,
                            u = i[++s],
                            "(" === t[e] ? (e++,
                            o++,
                            r.push(p),
                            v.push(a(!1))) : v.push(n.cc(p)),
                            l = "";
                        else if ("`" === t[e])
                            h ? (h = !1,
                            l.length && v.push(l)) : (h = !0,
                            g && v.push(g)),
                            l = "",
                            e++;
                        else if (o && "," === t[e] && !h)
                            g && v.push(g),
                            m.push(v),
                            v = [],
                            "," === t[e + 1] && (m.push([""]),
                            e++),
                            l = "",
                            e++;
                        else {
                            if (o && ")" === t[e] && !h) {
                                e++,
                                o--;
                                var b = r.pop();
                                return g && v.push(g),
                                m.push(v),
                                n.cc(b, m)
                            }
                            l += t[e],
                            e++
                        }
                        e === t.length && l.length && v.push(l)
                    }
                    return n.oc ? v.join("") : Promise.all(v).then((function(t) {
                        return t.join("")
                    }
                    )).catch((function(t) {
                        return d(t),
                        ""
                    }
                    ))
                }(this.uc)
            }
            ,
            i.cc = function(t, i) {
                var n, r = t.encode, e = t.name;
                if (null != t.prioritized ? n = t.prioritized : this.oc && null != t.sync ? n = t.sync : this.oc ? (Jt().error(Qh, "ignoring async replacement key: ", t.name),
                n = "") : n = t.async || t.sync,
                this.oc) {
                    var s = this.fc(n, e, i);
                    return r ? encodeURIComponent(s) : s
                }
                return this.lc(n, e, i).then((function(t) {
                    return r ? encodeURIComponent(t) : t
                }
                ))
            }
            ,
            i.lc = function(t, i, n) {
                var r, e = this;
                try {
                    if ("function" == typeof t) {
                        var s = t;
                        r = n ? this.vc(n).then((function(t) {
                            return s.apply(null, t)
                        }
                        )) : c(s)
                    } else
                        r = Promise.resolve(t);
                    return r.then((function(t) {
                        return e.dc(i, t, n),
                        null == t ? "" : t
                    }
                    )).catch((function(t) {
                        return d(t),
                        e.dc(i, "", n),
                        Promise.resolve("")
                    }
                    ))
                } catch (t) {
                    return d(t),
                    this.dc(i, "", n),
                    Promise.resolve("")
                }
            }
            ,
            i.vc = function(t) {
                return Promise.all(t.map((function(t) {
                    return Promise.all(t).then((function(t) {
                        return t.join("")
                    }
                    ))
                }
                )))
            }
            ,
            i.fc = function(t, i, n) {
                try {
                    var r, e = t;
                    return "function" == typeof t && (e = t.apply(null, this.mc(n))),
                    e && "function" == typeof e.then ? (Jt().error(Qh, "ignoring async macro resolution"),
                    r = "") : "string" == typeof e || "number" == typeof e || "boolean" == typeof e ? (this.dc(i, e, n),
                    r = e.toString()) : (this.dc(i, "", n),
                    r = ""),
                    r
                } catch (t) {
                    return d(t),
                    this.dc(i, "", n),
                    ""
                }
            }
            ,
            i.mc = function(t) {
                return t ? t.map((function(t) {
                    return t.join("")
                }
                )) : t
            }
            ,
            i.dc = function(t, i, n) {
                if (this.sc) {
                    var r = "";
                    if (n) {
                        var e = n.filter((function(t) {
                            return "" !== t
                        }
                        )).join(",");
                        r = "(".concat(e, ")")
                    }
                    this.sc["".concat(t).concat(r)] = i || ""
                }
            }
            ,
            t
        }()
          , ta = {
            "navigationStart": 1,
            "redirectStart": 1,
            "redirectEnd": 1,
            "fetchStart": 1,
            "domainLookupStart": 1,
            "domainLookupEnd": 1,
            "connectStart": 1,
            "secureConnectionStart": 1,
            "connectEnd": 1,
            "requestStart": 1,
            "responseStart": 1,
            "responseEnd": 1,
            "domLoading": 2,
            "domInteractive": 2,
            "domContentLoaded": 2,
            "domComplete": 2,
            "loadEventStart": 3,
            "loadEventEnd": 4
        };
        function ia(t, i, n) {
            var r, e = ta[i] || 3, s = n ? ta[n] || 3 : e, u = Math.max(e, s);
            if (1 === u)
                r = h();
            else if (2 === u)
                r = dn(t.document);
            else if (3 === u)
                r = Xe(t);
            else if (4 === u) {
                var o = ar(t);
                r = Xe(t).then((function() {
                    return o.promise(1)
                }
                ))
            }
            return Zt(r),
            r.then((function() {
                return na(t, i, n)
            }
            ))
        }
        function na(t, i, n) {
            var r = t.performance && t.performance.timing;
            if (r && 0 != r.navigationStart) {
                var e = void 0 === n ? r[i] : r[n] - r[i];
                return !J(e) || e < 0 ? void 0 : e
            }
        }
        function ra(t, i) {
            var n = t.performance && t.performance.navigation;
            if (n && void 0 !== n[i])
                return n[i]
        }
        var ea = "UrlReplacements";
        function sa(t) {
            return function() {
                return (new Date)[t]()
            }
        }
        function ua(t, i) {
            return function() {
                return t[i]
            }
        }
        function oa(t, i) {
            return i ? (ti("ISOCountry" === i, "The value passed to AMP_GEO() is not valid name:" + i),
            t && t[i] || "unknown") : (null == t ? void 0 : t.matchedISOCountryGroups.join(",")) || "unknown"
        }
        var ha = function(t) {
            U(n, t);
            var i = H(n);
            function n(t) {
                var n;
                return (n = i.call(this, t)).bc = null,
                n.gc = {},
                n
            }
            var r = n.prototype;
            return r.yc = function(t, i, n) {
                var r = this;
                return this.setBoth(t, (function() {
                    return na(r.ampdoc.win, i, n)
                }
                ), (function() {
                    return ia(r.ampdoc.win, i, n)
                }
                ))
            }
            ,
            r.initialize = function() {
                var t = this
                  , i = this.ampdoc.win
                  , n = this.ampdoc.getHeadNode()
                  , r = mr(this.ampdoc);
                fr(this.ampdoc).then((function(i) {
                    t.bc = i
                }
                )),
                this.set("RANDOM", (function() {
                    return Math.random()
                }
                ));
                var e = Object.create(null);
                this.set("COUNTER", (function(t) {
                    return e[t] = 1 + (0 | e[t])
                }
                )),
                this.set("CANONICAL_URL", (function() {
                    return t.wc().canonicalUrl
                }
                )),
                this.set("CANONICAL_HOST", (function() {
                    return vs(t.wc().canonicalUrl).host
                }
                )),
                this.set("CANONICAL_HOSTNAME", (function() {
                    return vs(t.wc().canonicalUrl).hostname
                }
                )),
                this.set("CANONICAL_PATH", (function() {
                    return vs(t.wc().canonicalUrl).pathname
                }
                )),
                this.setAsync("DOCUMENT_REFERRER", (function() {
                    return vr(t.ampdoc).getReferrerUrl()
                }
                )),
                this.setAsync("EXTERNAL_REFERRER", (function() {
                    return vr(t.ampdoc).getReferrerUrl().then((function(t) {
                        return t ? vs(Is(t)).hostname === zr.getHostname(i) ? null : t : null
                    }
                    ))
                }
                )),
                this.set("TITLE", (function() {
                    var t = i.document;
                    return t.originalTitle || t.title
                }
                )),
                this.set("AMPDOC_URL", (function() {
                    return As(t.Ac(i.location.href))
                }
                )),
                this.set("AMPDOC_HOST", (function() {
                    var t = vs(i.location.href);
                    return t && t.host
                }
                )),
                this.set("AMPDOC_HOSTNAME", (function() {
                    var t = vs(i.location.href);
                    return t && t.hostname
                }
                ));
                var s = function() {
                    var i = t.wc();
                    return As(t.Ac(i.sourceUrl))
                };
                this.setBoth("SOURCE_URL", (function() {
                    return s()
                }
                ), (function() {
                    return bh().then((function() {
                        return s()
                    }
                    ))
                }
                )),
                this.set("SOURCE_HOST", (function() {
                    return vs(t.wc().sourceUrl).host
                }
                )),
                this.set("SOURCE_HOSTNAME", (function() {
                    return vs(t.wc().sourceUrl).hostname
                }
                )),
                this.set("SOURCE_PATH", (function() {
                    return vs(t.wc().sourceUrl).pathname
                }
                )),
                this.set("PAGE_VIEW_ID", (function() {
                    return t.wc().pageViewId
                }
                )),
                this.setAsync("PAGE_VIEW_ID_64", (function() {
                    return t.wc().pageViewId64
                }
                )),
                this.setBoth("QUERY_PARAM", (function(i) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return t.xc(i, n)
                }
                ), (function(i) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return bh().then((function() {
                        return t.xc(i, n)
                    }
                    ))
                }
                )),
                this.set("FRAGMENT_PARAM", (function(i) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return t.Ec(i, n)
                }
                ));
                var u = null;
                this.setBoth("CLIENT_ID", (function(t) {
                    return u ? u[t] : null
                }
                ), (function(i, r, e, s) {
                    ti(i, "The first argument to CLIENT_ID, the fallback Cookie name, is required");
                    var o = h();
                    return r && (o = function(t) {
                        return Hn(t, "userNotificationManager", "amp-user-notification")
                    }(n).then((function(t) {
                        return t.get(r)
                    }
                    ))),
                    Xn(t.ampdoc).then((function(t) {
                        return s = "true" == s,
                        t.get({
                            scope: i,
                            createCookieIfNotPresent: !0,
                            cookieName: e || void 0,
                            disableBackup: s
                        }, o)
                    }
                    )).then((function(t) {
                        return u || (u = Object.create(null)),
                        t && "_ga" == (e || i) && ("string" == typeof t ? t = t.replace(/^(GA1|1)\.[\d-]+\./, "") : Qt().error(ea, "non-string cid, what is it?", Object.keys(t))),
                        u[i] = t,
                        t
                    }
                    ))
                }
                )),
                this.setAsync("VARIANT", (function(i) {
                    return t.Oc((function(t) {
                        var n = t[i];
                        return ti(void 0 !== n, "The value passed to VARIANT() is not a valid experiment in <amp-experiment>:" + i),
                        null === n ? "none" : n
                    }
                    ), "VARIANT")
                }
                )),
                this.setAsync("VARIANTS", (function() {
                    return t.Oc((function(t) {
                        var i = [];
                        for (var n in t) {
                            var r = t[n];
                            i.push(n + "." + (r || "none"))
                        }
                        return i.join("!")
                    }
                    ), "VARIANTS")
                }
                )),
                this.setBoth("AMP_GEO", (function(i) {
                    return oa(t.bc, i)
                }
                ), (function(i) {
                    return t.Pc((function(t) {
                        return oa(t, i)
                    }
                    ), "AMP_GEO")
                }
                )),
                this.set("TIMESTAMP", sa("getTime")),
                this.set("TIMESTAMP_ISO", sa("toISOString")),
                this.set("TIMEZONE", sa("getTimezoneOffset")),
                this.set("SCROLL_HEIGHT", (function() {
                    return r.getScrollHeight()
                }
                )),
                this.set("SCROLL_WIDTH", (function() {
                    return r.getScrollWidth()
                }
                )),
                this.set("VIEWPORT_HEIGHT", (function() {
                    return r.getHeight()
                }
                )),
                this.set("VIEWPORT_WIDTH", (function() {
                    return r.getWidth()
                }
                ));
                var o = i.screen;
                this.set("SCREEN_WIDTH", ua(o, "width")),
                this.set("SCREEN_HEIGHT", ua(o, "height")),
                this.set("AVAILABLE_SCREEN_HEIGHT", ua(o, "availHeight")),
                this.set("AVAILABLE_SCREEN_WIDTH", ua(o, "availWidth")),
                this.set("SCREEN_COLOR_DEPTH", ua(o, "colorDepth")),
                this.set("DOCUMENT_CHARSET", (function() {
                    var t = i.document;
                    return t.characterSet || t.charset
                }
                )),
                this.set("BROWSER_LANGUAGE", (function() {
                    var t = i.navigator;
                    return (t.language || t.userLanguage || t.browserLanguage || "").toLowerCase()
                }
                )),
                this.set("USER_AGENT", (function() {
                    return i.navigator.userAgent
                }
                )),
                this.setBoth("UACH", (function(i) {
                    var n;
                    return null !== (n = t.gc[i]) && void 0 !== n ? n : ""
                }
                ), (function(n) {
                    return t.Tc(n, i)
                }
                )),
                this.yc("PAGE_LOAD_TIME", "navigationStart", "loadEventStart"),
                this.yc("DOMAIN_LOOKUP_TIME", "domainLookupStart", "domainLookupEnd"),
                this.yc("TCP_CONNECT_TIME", "connectStart", "connectEnd"),
                this.yc("SERVER_RESPONSE_TIME", "requestStart", "responseStart"),
                this.yc("PAGE_DOWNLOAD_TIME", "responseStart", "responseEnd"),
                this.yc("REDIRECT_TIME", "navigationStart", "fetchStart"),
                this.yc("DOM_INTERACTIVE_TIME", "navigationStart", "domInteractive"),
                this.yc("CONTENT_LOAD_TIME", "navigationStart", "domContentLoadedEventStart"),
                this.setAsync("ACCESS_READER_ID", (function() {
                    return t.Ic((function(t) {
                        return t.getAccessReaderId()
                    }
                    ), "ACCESS_READER_ID")
                }
                )),
                this.setAsync("AUTHDATA", (function(i) {
                    return ti(i, "The first argument to AUTHDATA, the field, is required"),
                    t.Ic((function(t) {
                        return t.getAuthdataField(i)
                    }
                    ), "AUTHDATA")
                }
                )),
                this.setAsync("VIEWER", (function() {
                    return vr(t.ampdoc).getViewerOrigin().then((function(t) {
                        return null == t ? "" : t
                    }
                    ))
                }
                )),
                this.setAsync("TOTAL_ENGAGED_TIME", (function() {
                    return $n(n).then((function(t) {
                        return t.getTotalEngagedTime()
                    }
                    ))
                }
                )),
                this.setAsync("INCREMENTAL_ENGAGED_TIME", (function(t, i) {
                    return $n(n).then((function(n) {
                        return n.getIncrementalEngagedTime(t, "false" !== i)
                    }
                    ))
                }
                )),
                this.set("NAV_TIMING", (function(t, n) {
                    return ti(t, "The first argument to NAV_TIMING, the start attribute name, is required"),
                    na(i, t, n)
                }
                )),
                this.setAsync("NAV_TIMING", (function(t, n) {
                    return ti(t, "The first argument to NAV_TIMING, the start attribute name, is required"),
                    ia(i, t, n)
                }
                )),
                this.set("NAV_TYPE", (function() {
                    return ra(i, "type")
                }
                )),
                this.set("NAV_REDIRECT_COUNT", (function() {
                    return ra(i, "redirectCount")
                }
                )),
                this.set("AMP_VERSION", (function() {
                    return "2209142312000"
                }
                )),
                this.set("BACKGROUND_STATE", (function() {
                    return t.ampdoc.isVisible() ? "0" : "1"
                }
                )),
                this.setAsync("VIDEO_STATE", (function(i, n) {
                    return (r = t.ampdoc,
                    Pn(r, "video-manager")).getVideoStateProperty(i, n);
                    var r
                }
                )),
                this.setAsync("AMP_STATE", (function(i) {
                    var n = t.ampdoc.getRootNode()
                      , r = n.documentElement || n;
                    return Jn(r).then((function(t) {
                        return t && t.getStateValue(i) || ""
                    }
                    ))
                }
                ))
            }
            ,
            r.Ac = function(t) {
                var i = this.wc().replaceParams;
                return i ? function(t, i) {
                    for (var n = yt(vs(t).search), r = {}, e = Object.keys(i), s = 0; s < e.length; s++)
                        x(n, e[s]) || (r[e[s]] = i[e[s]]);
                    return gs(t, r)
                }(Ps(t), i) : t
            }
            ,
            r.wc = function() {
                return Zn(this.ampdoc)
            }
            ,
            r.Ic = function(t, i) {
                var n = this.ampdoc.getHeadNode();
                return Promise.all([Fn(n), qn(n)]).then((function(n) {
                    var r = n[0]
                      , e = n[1]
                      , s = r || e;
                    return s ? r && e ? t(e) || t(r) : t(s) : (Jt().error(ea, "Access or subsciptions service is not installed to access: ", i),
                    null)
                }
                ))
            }
            ,
            r.xc = function(t, i) {
                ti(t, "The first argument to QUERY_PARAM, the query string param is required");
                var n = yt(vs(Ps(this.ampdoc.win.location.href)).search)
                  , r = this.wc().replaceParams;
                return void 0 !== n[t] ? n[t] : r && void 0 !== r[t] ? r[t] : i
            }
            ,
            r.Ec = function(t, i) {
                ti(t, "The first argument to FRAGMENT_PARAM, the fragment string param is required"),
                ti("string" == typeof t, "param should be a string");
                var n = wt(this.ampdoc.win);
                return void 0 === n[t] ? i : n[t]
            }
            ,
            r.Oc = function(t, i) {
                return (n = this.ampdoc.getHeadNode(),
                Gn(n, "variant", "amp-experiment", !0)).then((function(t) {
                    return ti(t, "To use variable %s, amp-experiment should be configured", i),
                    t.getVariants()
                }
                )).then((function(i) {
                    return t(i)
                }
                ));
                var n
            }
            ,
            r.Pc = function(t, i) {
                var n = this;
                return null !== this.bc ? t(this.bc) : fr(this.ampdoc.getHeadNode()).then((function(r) {
                    return ti(r, "To use variable %s, amp-geo should be configured", i),
                    n.bc = r,
                    t(r)
                }
                ))
            }
            ,
            r.Tc = function(t, i) {
                var n, r, e, s = this;
                return t in this.gc ? Promise.resolve(this.gc[t]) : (null === (n = i.navigator) || void 0 === n || null === (r = n.userAgentData) || void 0 === r || null === (e = r.getHighEntropyValues([t])) || void 0 === e ? void 0 : e.then((function(i) {
                    var n = "object" !== p(i[t]) ? i[t] : JSON.stringify(i[t]);
                    return s.gc[t] = n,
                    n
                }
                ))) || Promise.resolve("")
            }
            ,
            n
        }(function() {
            function t(t) {
                this.ampdoc = t,
                this.Mc = Object.create(null),
                this.Sc = !1,
                this.kc()
            }
            var i = t.prototype;
            return i.ws = function() {
                this.initialize(),
                this.Sc = !0
            }
            ,
            i.initialize = function() {}
            ,
            i.get = function(t) {
                return this.Sc || this.ws(),
                this.Mc[t]
            }
            ,
            i.set = function(t, i) {
                return Zt(-1 == t.indexOf("RETURN")),
                this.Mc[t] = this.Mc[t] || {
                    sync: void 0,
                    async: void 0
                },
                this.Mc[t].sync = i,
                this
            }
            ,
            i.setAsync = function(t, i) {
                return Zt(-1 == t.indexOf("RETURN")),
                this.Mc[t] = this.Mc[t] || {
                    sync: void 0,
                    async: void 0
                },
                this.Mc[t].async = i,
                this
            }
            ,
            i.setBoth = function(t, i, n) {
                return this.set(t, i).setAsync(t, n)
            }
            ,
            i.getExpr = function(t, i) {
                this.Sc || this.ws();
                var n = D(D({}, this.Mc), t);
                return this._c(Object.keys(n), i)
            }
            ,
            i._c = function(t, i) {
                var n = this;
                if (this.kc() && (t = t.filter((function(t) {
                    return n.kc().includes(t)
                }
                ))),
                i && (t = t.filter((function(t) {
                    return i[t]
                }
                ))),
                0 === t.length)
                    return /_^/g;
                t.sort((function(t, i) {
                    return i.length - t.length
                }
                ));
                var r = t.map((function(t) {
                    return "$" === t[0] ? "\\" + t : t
                }
                )).join("|");
                return new RegExp("\\$?(" + r + ")","g")
            }
            ,
            i.kc = function() {
                return this.Rc ? this.Rc : this.ampdoc.isSingleDoc() && Du(this.ampdoc.getRootNode()) ? (this.Rc = [""],
                this.Rc) : void 0
            }
            ,
            t
        }())
          , aa = function() {
            function t(t, i) {
                this.ampdoc = t,
                this.rc = i
            }
            var i = t.prototype;
            return i.expandStringSync = function(t, i, n) {
                return new Zh(this.rc,i,void 0,!0,n,!0).expand(t)
            }
            ,
            i.expandStringAsync = function(t, i, n) {
                return new Zh(this.rc,i,void 0,void 0,n,!0).expand(t)
            }
            ,
            i.expandUrlSync = function(t, i, n) {
                return this.Nc(t, new Zh(this.rc,i,void 0,!0,n).expand(t))
            }
            ,
            i.expandUrlAsync = function(t, i, n, r) {
                var e = this;
                return new Zh(this.rc,i,void 0,void 0,n,r).expand(t).then((function(i) {
                    return e.Nc(t, i)
                }
                ))
            }
            ,
            i.expandInputValueAsync = function(t) {
                return this.Cc(t, !1)
            }
            ,
            i.expandInputValueSync = function(t) {
                return this.Cc(t, !0)
            }
            ,
            i.Cc = function(t, i) {
                Zt("INPUT" == t.tagName && "hidden" == (t.getAttribute("type") || "").toLowerCase());
                var n = this.Dc(t);
                if (!n)
                    return i ? t.value : Promise.resolve(t.value);
                void 0 === t["amp-original-value"] && (t["amp-original-value"] = t.value);
                var r = new Zh(this.rc,void 0,void 0,i,n).expand(t["amp-original-value"] || t.value);
                return i ? t.value = r : r.then((function(i) {
                    return t.value = i,
                    i
                }
                ))
            }
            ,
            i.Dc = function(t, i) {
                var n = t.getAttribute("data-amp-replace");
                if (n) {
                    var r = {};
                    return n.trim().split(/\s+/).forEach((function(t) {
                        !i || x(i, t) ? r[t] = !0 : Jt().warn("URL", "Ignoring unsupported replacement", t)
                    }
                    )),
                    r
                }
            }
            ,
            i.br = function(t) {
                var i = Zn(this.ampdoc);
                if (t.origin == vs(i.canonicalUrl).origin || t.origin == vs(i.sourceUrl).origin)
                    return !0;
                var n = this.ampdoc.getMetaByName("amp-link-variable-allowed-origin");
                if (n)
                    for (var r = n.trim().split(/\s+/), e = 0; e < r.length; e++)
                        if (t.origin == vs(r[e]).origin)
                            return !0;
                return !1
            }
            ,
            i.maybeExpandLink = function(t, i) {
                Zt("A" == t.tagName);
                var n = t
                  , r = n.getAttribute("data-amp-addparams") || ""
                  , e = this.Dc(n, {
                    "CLIENT_ID": !0,
                    "QUERY_PARAM": !0,
                    "PAGE_VIEW_ID": !0,
                    "PAGE_VIEW_ID_64": !0,
                    "NAV_TIMING": !0
                });
                if (e || r || i) {
                    var s = n["amp-original-href"] || n.getAttribute("href")
                      , u = vs(s);
                    null == n["amp-original-href"] && (n["amp-original-href"] = s);
                    var o = this.br(u);
                    return r && (s = gs(s, yt(r = o ? this.jc(r, e) : r))),
                    o ? (i && (e && e.QUERY_PARAM || (i = this.expandUrlSync(i, void 0, {
                        "QUERY_PARAM": !0
                    })),
                    s = gs(s, yt(i))),
                    s = this.jc(s, e),
                    n.href = s) : (e && Jt().warn("URL", "Ignoring link replacement %s because the link does not go to the document's source, canonical, or allowlisted origin.", s),
                    n.href = s)
                }
            }
            ,
            i.jc = function(t, i) {
                return i ? this.expandUrlSync(t, void 0, i) : t
            }
            ,
            i.collectVars = function(t, i) {
                var n = Object.create(null);
                return new Zh(this.rc,i,n).expand(t).then((function() {
                    return n
                }
                ))
            }
            ,
            i.collectDisallowedVarsSync = function(t) {
                var i = t.getAttribute("src")
                  , n = new Zh(this.rc).getMacroNames(i)
                  , r = this.Dc(t);
                return r ? n.filter((function(t) {
                    return !r[t]
                }
                )) : n
            }
            ,
            i.Nc = function(t, i) {
                return vs(i, !0).protocol != vs(t, !0).protocol ? (Jt().error(ea, "Illegal replacement of the protocol: ", t),
                t) : (ti(Es(i), "The replacement url has invalid protocol: %s", i),
                i)
            }
            ,
            i.getVariableSource = function() {
                return this.rc
            }
            ,
            t
        }()
          , ca = "Viewer"
          , fa = /^(https?:\/\/)((www[0-9]*|web|ftp|wap|home|mobile|amp|m)\.)+/i
          , la = function() {
            function t(t) {
                var i = this;
                this.ampdoc = t,
                this.win = t.win,
                this.ku = Ni(this.win),
                this.dh = !0,
                this.zc = !1,
                this.Uc = A(),
                this.Lc = A(),
                this.Hc = new Er,
                this.Gc = new Er,
                this.Vc = null,
                this.Fc = null,
                this.Bc = [],
                this.qc = A(),
                this.Wc = A(),
                t.isSingleDoc() && Object.assign(this.Wc, yt(this.win.location.hash)),
                this.dh = !parseInt(t.getParam("off"), 10),
                Qt().fine(ca, "- runtimeOn:", this.dh),
                this.zc = !(!parseInt(t.getParam("history"), 10) && !this.zc),
                Qt().fine(ca, "- history:", this.zc),
                Qt().fine(ca, "- visibilityState:", this.ampdoc.getVisibilityState()),
                this.$c = null,
                this.Kc = xs(vs(this.ampdoc.win.location.href));
                var n = new a;
                this.Yc = n.resolve,
                this.Jc = this.Xc(n.promise),
                this.zu = null,
                this.Qc = null;
                var r = t.getParam("referrer");
                if (this.Zc = this.isEmbedded() && null != r && !1 !== this.tf() ? r : this.win.document.referrer,
                this.if = new Promise((function(n) {
                    i.isEmbedded() && null != t.getParam("referrer") ? i.isTrustedViewer().then((function(r) {
                        r ? n(t.getParam("referrer")) : (n(i.win.document.referrer),
                        i.Zc != i.win.document.referrer && (Qt().expectedError(ca, "Untrusted viewer referrer override: " + i.Zc + " at " + i.Fc),
                        i.Zc = i.win.document.referrer))
                    }
                    )) : n(i.win.document.referrer)
                }
                )),
                this.nf = As(this.win.location.href || ""),
                this.rf = new Promise((function(n) {
                    var r = t.getParam("viewerUrl");
                    i.isEmbedded() && r ? i.isTrustedViewer().then((function(t) {
                        t ? i.nf = Zt(r) : Qt().expectedError(ca, "Untrusted viewer url override: " + r + " at " + i.Fc),
                        n(i.nf)
                    }
                    )) : n(i.nf)
                }
                )),
                this.Wc.click) {
                    var e = As(this.win.location.href);
                    e != this.win.location.href && this.win.history.replaceState && (this.win.location.originalHash || (this.win.location.originalHash = this.win.location.hash),
                    this.win.history.replaceState({}, "", e),
                    delete this.Wc.click,
                    Qt().fine(ca, "replace fragment:" + this.win.location.href))
                }
                this.ampdoc.whenFirstVisible().then((function() {
                    i.maybeUpdateFragmentForCct()
                }
                )),
                this.ampdoc.isSingleDoc() && this.ef()
            }
            var i = t.prototype;
            return i.Xc = function(t) {
                if (!(this.ku && !this.win.__AMP_TEST_IFRAME && (this.ampdoc.getParam("origin") || this.ampdoc.getParam("visibilityState") || -1 != this.win.location.search.indexOf("amp_js_v")) || this.isWebviewEmbedded() || this.isCctEmbedded()) && this.ampdoc.isSingleDoc())
                    return null;
                var i = "initMessagingChannel timeout";
                return ar(this.win).timeoutPromise(2e4, t, i).catch((function(t) {
                    var n = va(t);
                    throw n && W(n.message, i) && (n = Qt().createExpectedError(n)),
                    Ds(n),
                    n
                }
                ))
            }
            ,
            i.getAmpDoc = function() {
                return this.ampdoc
            }
            ,
            i.getParam = function(t) {
                return this.ampdoc.getParam(t)
            }
            ,
            i.hasCapability = function(t) {
                var i = this.ampdoc.getParam("cap");
                return !!i && -1 != i.split(",").indexOf(t)
            }
            ,
            i.isEmbedded = function() {
                return !!this.Jc
            }
            ,
            i.isWebviewEmbedded = function() {
                return !this.ku && "1" == this.ampdoc.getParam("webview")
            }
            ,
            i.isCctEmbedded = function() {
                if (null != this.$c)
                    return this.$c;
                if (this.$c = !1,
                !this.ku) {
                    var t = yt(this.win.location.search);
                    this.$c = "1" === t.amp_gsa && (t.amp_js_v || "").startsWith("a")
                }
                return this.$c
            }
            ,
            i.isProxyOrigin = function() {
                return this.Kc
            }
            ,
            i.maybeUpdateFragmentForCct = function() {
                if (this.isCctEmbedded() && this.win.history.replaceState) {
                    var t = Ms(this.win.location.href)
                      , i = Zn(this.ampdoc).canonicalUrl
                      , n = Ms(i);
                    this.sf(t, n) && (this.Wc.ampshare = i,
                    this.win.history.replaceState({}, "", "#" + bs(this.Wc)))
                }
            }
            ,
            i.sf = function(t, i) {
                var n = function(t) {
                    return t.split(".").length > 2 ? t.replace(fa, "$1") : t
                };
                return n(t) == n(i)
            }
            ,
            i.isRuntimeOn = function() {
                return this.dh
            }
            ,
            i.toggleRuntime = function() {
                this.dh = !this.dh,
                Qt().fine(ca, "Runtime state:", this.dh),
                this.Hc.fire(this.dh)
            }
            ,
            i.onRuntimeState = function(t) {
                return this.Hc.add(t)
            }
            ,
            i.isOvertakeHistory = function() {
                return this.zc
            }
            ,
            i.getVisibilityState = function() {
                return this.ampdoc.getVisibilityState()
            }
            ,
            i.isVisible = function() {
                return this.ampdoc.isVisible()
            }
            ,
            i.hasBeenVisible = function() {
                return this.ampdoc.hasBeenVisible()
            }
            ,
            i.whenFirstVisible = function() {
                return this.ampdoc.whenFirstVisible()
            }
            ,
            i.whenNextVisible = function() {
                return this.ampdoc.whenNextVisible()
            }
            ,
            i.getFirstVisibleTime = function() {
                return this.ampdoc.getFirstVisibleTime()
            }
            ,
            i.getLastVisibleTime = function() {
                return this.ampdoc.getLastVisibleTime()
            }
            ,
            i.onVisibilityChanged = function(t) {
                return this.ampdoc.onVisibilityChanged(t)
            }
            ,
            i.uf = function(t) {
                var i;
                t && (Zt("prerender" === (i = t) || "preview" === i || "visible" === i || "hidden" === i || "paused" === i || "inactive" === i),
                t === wr && (t = null != this.ampdoc.getLastVisibleTime() ? xr : gr),
                this.ampdoc.overrideVisibilityState(t),
                Qt().fine(ca, "visibilitychange event:", this.ampdoc.getVisibilityState()))
            }
            ,
            i.getResolvedViewerUrl = function() {
                return this.nf
            }
            ,
            i.getViewerUrl = function() {
                return this.rf
            }
            ,
            i.maybeGetMessagingOrigin = function() {
                return this.Fc
            }
            ,
            i.getUnconfirmedReferrerUrl = function() {
                return this.Zc
            }
            ,
            i.getReferrerUrl = function() {
                return this.if
            }
            ,
            i.isTrustedViewer = function() {
                var t = this;
                if (!this.zu) {
                    var i = this.tf();
                    this.zu = void 0 !== i ? Promise.resolve(i) : this.Jc.then((function(i) {
                        return !!i && t.hf(i)
                    }
                    ))
                }
                return this.zu
            }
            ,
            i.tf = function() {
                return !!this.isEmbedded() && (!this.win.location.ancestorOrigins || this.isWebviewEmbedded() || this.isCctEmbedded() ? void 0 : this.win.location.ancestorOrigins.length > 0 && this.hf(this.win.location.ancestorOrigins[0]))
            }
            ,
            i.getViewerOrigin = function() {
                var t;
                return this.Qc || (this.isEmbedded() ? this.win.location.ancestorOrigins && this.win.location.ancestorOrigins.length > 0 && (t = this.win.location.ancestorOrigins[0]) : t = "",
                this.Qc = void 0 !== t ? Promise.resolve(t) : ar(this.win).timeoutPromise(1e3, this.Jc).catch((function() {
                    return ""
                }
                ))),
                this.Qc
            }
            ,
            i.hf = function(t) {
                var i = vs(t)
                  , n = i.protocol;
                return "x-thread:" == n || "https:" == n && kt.some((function(t) {
                    return t.test(i.hostname)
                }
                ))
            }
            ,
            i.onMessage = function(t, i) {
                var n = this.Uc[t];
                n || (n = new Er,
                this.Uc[t] = n);
                var r = n.add(i);
                return this.qc[t] && (this.qc[t].forEach((function(t) {
                    n.fire(t.data),
                    t.deferred.resolve()
                }
                )),
                this.qc[t] = []),
                r
            }
            ,
            i.onMessageRespond = function(t, i) {
                var n = this;
                return this.Lc[t] = i,
                this.qc[t] && (this.qc[t].forEach((function(t) {
                    t.deferred.resolve(i(t.data))
                }
                )),
                this.qc[t] = []),
                function() {
                    n.Lc[t] === i && delete n.Lc[t]
                }
            }
            ,
            i.receiveMessage = function(t, i, n) {
                if ("visibilitychange" == t)
                    return this.uf(i.state),
                    h();
                if ("broadcast" == t)
                    return this.Gc.fire(i),
                    h();
                var r = this.Uc[t]
                  , e = this.Lc[t];
                if (!r && !e) {
                    if (this.qc[t] = this.qc[t] || [],
                    this.qc[t].length >= 50)
                        return;
                    var s = new a;
                    return this.qc[t].push({
                        data: i,
                        deferred: s
                    }),
                    s.promise
                }
                return r && r.fire(i),
                e ? e(i) : r ? h() : void 0
            }
            ,
            i.setMessageDeliverer = function(t, i) {
                var n = this;
                if (this.Vc)
                    throw new Error("message channel can only be initialized once");
                if (null == i)
                    throw new Error("message channel must have an origin");
                if (Qt().fine(ca, "message channel established with origin: ", i),
                this.Vc = t,
                this.Fc = i,
                this.Yc(i),
                this.Bc.length > 0) {
                    var r = this.Bc.slice(0);
                    this.Bc = [],
                    r.forEach((function(t) {
                        var i = n.Vc(t.eventType, t.data, t.awaitResponse);
                        t.awaitResponse && t.responseResolver(i)
                    }
                    ))
                }
            }
            ,
            i.maybeGetMessageDeliverer = function() {
                return this.Vc
            }
            ,
            i.sendMessage = function(t, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this.Dr(t, i, n, !1)
            }
            ,
            i.sendMessageAwaitResponse = function(t, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return this.Dr(t, i, n, !0)
            }
            ,
            i.Dr = function(t, i, n, r) {
                var e = this;
                if (this.Vc)
                    return c((function() {
                        return e.Vc(t, i, r)
                    }
                    ));
                if (!this.Jc)
                    return r ? Promise.reject(va()) : h();
                if (!n)
                    return this.Jc.then((function() {
                        return e.Vc(t, i, r)
                    }
                    ));
                var s, u = B(this.Bc, (function(i) {
                    return i.eventType == t
                }
                ));
                if (-1 != u)
                    (s = this.Bc.splice(u, 1)[0]).data = i,
                    s.awaitResponse = s.awaitResponse || r;
                else {
                    var o = new a
                      , f = o.promise
                      , l = o.resolve;
                    s = {
                        eventType: t,
                        data: i,
                        awaitResponse: r,
                        responsePromise: f,
                        responseResolver: l
                    }
                }
                return this.Bc.push(s),
                s.responsePromise
            }
            ,
            i.broadcast = function(t) {
                return this.Jc ? this.Dr("broadcast", t, !1, !1).then((function() {
                    return !0
                }
                ), (function() {
                    return !1
                }
                )) : Promise.resolve(!1)
            }
            ,
            i.onBroadcast = function(t) {
                return this.Gc.add(t)
            }
            ,
            i.whenMessagingReady = function() {
                return this.Jc
            }
            ,
            i.replaceUrl = function(t) {
                if (t && this.ampdoc.isSingleDoc() && this.win.history.replaceState)
                    try {
                        var i = vs(this.win.location.href)
                          , n = vs(As(t) + this.win.location.hash);
                        i.origin == n.origin && Ms(i) == Ms(n) && (this.win.history.replaceState({}, "", n.href),
                        this.win.location.originalHref = i.href,
                        Qt().fine(ca, "replace url:" + n.href))
                    } catch (t) {
                        Qt().error(ca, "replaceUrl failed", t)
                    }
            }
            ,
            i.ef = function() {
                var t = this;
                if (this.ampdoc.getVisibilityState() != yr) {
                    var i = []
                      , n = function() {
                        return i.forEach((function(t) {
                            return t()
                        }
                        ))
                    }
                      , r = function() {
                        t.uf(yr),
                        n(),
                        Qt().expectedError(ca, "Received user action in non-visible doc")
                    }
                      , e = {
                        capture: !0,
                        passive: !0
                    };
                    i.push(Ye(this.win, "keydown", r, e), Ye(this.win, "touchstart", r, e), Ye(this.win, "mousedown", r, e)),
                    this.whenFirstVisible().then(n)
                }
            }
            ,
            t
        }();
        function va(t) {
            var i;
            return t instanceof Error ? ((t = f(t)).message = "No messaging channel: " + t.message,
            i = t) : i = new Error("No messaging channel: " + t),
            i.message = it(i.message),
            i
        }
        function da(t, i) {
            return function(n) {
                return t + (i - t) * n
            }
        }
        function ma(t, i, n) {
            return et(i <= n),
            Math.min(Math.max(t, i), n)
        }
        var pa = function() {
            function t() {}
            return t.solveYValueFromXValue = function(i, n, r, e, s, u, o, h, a) {
                return t.af(t.cf(i, n, e, u, h), r, s, o, a)
            }
            ,
            t.cf = function(i, n, r, e, s) {
                var u = 1e-6
                  , o = (i - n) / (s - n);
                if (o <= 0)
                    return 0;
                if (o >= 1)
                    return 1;
                for (var h = 0, a = 1, c = 0, f = 0; f < 8; f++) {
                    c = t.ff(o, n, r, e, s);
                    var l = (t.ff(o + u, n, r, e, s) - c) / u;
                    if (Math.abs(c - i) < u)
                        return o;
                    if (Math.abs(l) < u)
                        break;
                    c < i ? h = o : a = o,
                    o -= (c - i) / l
                }
                for (var v = 0; Math.abs(c - i) > u && v < 8; v++)
                    c < i ? (h = o,
                    o = (o + a) / 2) : (a = o,
                    o = (o + h) / 2),
                    c = t.ff(o, n, r, e, s);
                return o
            }
            ,
            t.ff = function(i, n, r, e, s) {
                if (0 == i)
                    return n;
                if (1 == i)
                    return s;
                var u = t.lf(n, r, i)
                  , o = t.lf(r, e, i)
                  , h = t.lf(e, s, i);
                return u = t.lf(u, o, i),
                o = t.lf(o, h, i),
                t.lf(u, o, i)
            }
            ,
            t.af = function(i, n, r, e, s) {
                if (0 == i)
                    return n;
                if (1 == i)
                    return s;
                var u = t.lf(n, r, i)
                  , o = t.lf(r, e, i)
                  , h = t.lf(e, s, i);
                return u = t.lf(u, o, i),
                o = t.lf(o, h, i),
                t.lf(u, o, i)
            }
            ,
            t.lf = function(t, i, n) {
                return t + n * (i - t)
            }
            ,
            t
        }()
          , ga = {
            LINEAR: function(t) {
                return t
            },
            EASE: function(t) {
                return pa.solveYValueFromXValue(t, 0, 0, .25, .1, .25, 1, 1, 1)
            },
            EASE_IN: function(t) {
                return pa.solveYValueFromXValue(t, 0, 0, .42, 0, 1, 1, 1, 1)
            },
            EASE_OUT: function(t) {
                return pa.solveYValueFromXValue(t, 0, 0, 0, 0, .58, 1, 1, 1)
            },
            EASE_IN_OUT: function(t) {
                return pa.solveYValueFromXValue(t, 0, 0, .42, 0, .58, 1, 1, 1)
            }
        }
          , ba = {
            "linear": ga.LINEAR,
            "ease": ga.EASE,
            "ease-in": ga.EASE_IN,
            "ease-out": ga.EASE_OUT,
            "ease-in-out": ga.EASE_IN_OUT
        };
        function ya(t) {
            if (!t)
                return null;
            if (Y(t)) {
                if (-1 != (t = t).indexOf("cubic-bezier")) {
                    var i = t.match(/cubic-bezier\((.+)\)/);
                    if (i) {
                        var n = i[1].split(",").map(parseFloat);
                        if (4 == n.length) {
                            for (var r = 0; r < 4; r++)
                                if (isNaN(n[r]))
                                    return null;
                            return e = n[0],
                            s = n[1],
                            u = n[2],
                            o = n[3],
                            function(t) {
                                return pa.solveYValueFromXValue(t, 0, 0, e, s, u, o, 1, 1)
                            }
                        }
                    }
                    return null
                }
                return ba[t]
            }
            var e, s, u, o;
            return t
        }
        var wa = "Animation"
          , Aa = function() {}
          , xa = function() {
            function t(t, i) {
                this.xn = t,
                this.wu = i || dr(self),
                this.vf = null,
                this.df = []
            }
            t.animate = function(i, n, r, e) {
                return new t(i).setCurve(e).add(0, n, 1).start(r)
            }
            ;
            var i = t.prototype;
            return i.setCurve = function(t) {
                return t && (this.vf = ya(t)),
                this
            }
            ,
            i.add = function(t, i, n, r) {
                return this.df.push({
                    delay: t,
                    func: i,
                    duration: n,
                    curve: ya(r)
                }),
                this
            }
            ,
            i.start = function(t) {
                return new Ea(this.wu,this.xn,this.df,this.vf,t)
            }
            ,
            t
        }()
          , Ea = function() {
            function t(t, i, n, r, e) {
                this.wu = t,
                this.xn = i,
                this.df = [];
                for (var s = 0; s < n.length; s++) {
                    var u = n[s];
                    this.df.push({
                        delay: u.delay,
                        func: u.func,
                        duration: u.duration,
                        curve: u.curve || r,
                        started: !1,
                        completed: !1
                    })
                }
                this.mf = e,
                this.tc = Date.now(),
                this.Xn = !0,
                this.ji = {};
                var o = new a;
                this.pf = o.promise,
                this.et = o.resolve,
                this.bf = o.reject,
                this.gf = this.wu.createAnimTask(this.xn, {
                    mutate: this.yf.bind(this)
                }),
                this.wu.canAnimate(this.xn) ? this.gf(this.ji) : (Qt().warn(wa, "cannot animate"),
                this.wf(!1, 0))
            }
            var i = t.prototype;
            return i.then = function(t, i) {
                return t || i ? this.pf.then(t, i) : this.pf
            }
            ,
            i.thenAlways = function(t) {
                var i = t || Aa;
                return this.then(i, i)
            }
            ,
            i.halt = function(t) {
                this.wf(!1, t || 0)
            }
            ,
            i.wf = function(t, i) {
                if (this.Xn) {
                    if (this.Xn = !1,
                    0 != i) {
                        this.df.length > 1 && this.df.sort((function(t, i) {
                            return t.delay + t.duration - (i.delay + i.duration)
                        }
                        ));
                        try {
                            if (i > 0)
                                for (var n = 0; n < this.df.length; n++)
                                    this.df[n].func(1, !0);
                            else
                                for (var r = this.df.length - 1; r >= 0; r--)
                                    this.df[r].func(0, !1)
                        } catch (i) {
                            Qt().error(wa, "completion failed: " + i, i),
                            t = !1
                        }
                    }
                    t ? this.et() : this.bf()
                }
            }
            ,
            i.yf = function(t) {
                if (this.Xn) {
                    for (var i = Date.now(), n = Math.min((i - this.tc) / this.mf, 1), r = 0; r < this.df.length; r++) {
                        var e = this.df[r];
                        !e.started && n >= e.delay && (e.started = !0)
                    }
                    for (var s = 0; s < this.df.length; s++) {
                        var u = this.df[s];
                        u.started && !u.completed && this.Af(u, n)
                    }
                    1 == n ? this.wf(!0, 0) : this.wu.canAnimate(this.xn) ? this.gf(this.ji) : (Qt().warn(wa, "cancel animation"),
                    this.wf(!1, 0))
                }
            }
            ,
            i.Af = function(t, i) {
                var n, r;
                if (t.duration > 0) {
                    if (r = n = Math.min((i - t.delay) / t.duration, 1),
                    t.curve && 1 != r)
                        try {
                            r = t.curve(n)
                        } catch (t) {
                            return Qt().error(wa, "step curve failed: " + t, t),
                            void this.wf(!1, 0)
                        }
                } else
                    n = 1,
                    r = 1;
                1 == n && (t.completed = !0);
                try {
                    t.func(r, t.completed)
                } catch (t) {
                    return Qt().error(wa, "step mutate failed: " + t, t),
                    void this.wf(!1, 0)
                }
            }
            ,
            t
        }();
        function Pa(t, i) {
            for (var n, r = i.lastElementChild; r; r = r.previousElementSibling)
                if (r.getBoundingClientRect().height > 0) {
                    var e = Nr(t, r);
                    if ("static" == e.position || "relative" == e.position) {
                        n = e;
                        break
                    }
                }
            return n ? parseInt(n.marginBottom, 10) : 0
        }
        var Oa = function() {
            function t(t) {
                var i = this;
                this.win = t,
                this.wu = dr(t);
                var n = this.win.document
                  , r = n.documentElement
                  , e = r.className;
                r.classList.add("i-amphtml-ios-embed");
                var s = n.createElement("html");
                this.xf = s,
                s.id = "i-amphtml-wrapper",
                s.className = e,
                this.Ef = new Er,
                this.Of = new Er,
                this.Pf = this.Tf.bind(this),
                this.If = function() {
                    return i.Of.fire()
                }
                ,
                this.Mf = 0,
                this.Sf = !1,
                Ii(n, this.kf.bind(this)),
                vn(n).then((function() {
                    r.classList.add("i-amphtml-ios-overscroll")
                }
                )),
                Qt().fine("Viewport", "initialized ios-embed-wrapper viewport")
            }
            var i = t.prototype;
            return i.ensureReadyForElements = function() {
                this.kf()
            }
            ,
            i.kf = function() {
                if (!this.Sf) {
                    this.Sf = !0;
                    var t = this.win.document
                      , i = t.body;
                    t.documentElement.appendChild(this.xf),
                    this.xf.appendChild(i),
                    Object.defineProperty(t, "body", {
                        get: function() {
                            return i
                        }
                    }),
                    this.Tf()
                }
            }
            ,
            i.connect = function() {
                this.win.addEventListener("resize", this.If),
                this.xf.addEventListener("scroll", this.Pf)
            }
            ,
            i.disconnect = function() {
                this.win.removeEventListener("resize", this.If),
                this.xf.removeEventListener("scroll", this.Pf)
            }
            ,
            i.getBorderTop = function() {
                return 1
            }
            ,
            i.requiresFixedLayerTransfer = function() {
                return !Ge(this.win, "ios-fixed-no-transfer") || parseFloat(sr(this.win).getIosVersionString()) < 12.2
            }
            ,
            i.overrideGlobalScrollTo = function() {
                return !0
            }
            ,
            i.supportsPositionFixed = function() {
                return !0
            }
            ,
            i.onScroll = function(t) {
                this.Ef.add(t)
            }
            ,
            i.onResize = function(t) {
                this.Of.add(t)
            }
            ,
            i.updatePaddingTop = function(t) {
                this.Mf = t,
                Sr(this.xf, {
                    "padding-top": Cr(t)
                })
            }
            ,
            i.hideViewerHeader = function(t, i) {
                t || this.updatePaddingTop(0)
            }
            ,
            i.showViewerHeader = function(t, i) {
                t || this.updatePaddingTop(i)
            }
            ,
            i.disableScroll = function() {
                this.xf.classList.add("i-amphtml-scroll-disabled")
            }
            ,
            i.resetScroll = function() {
                this.xf.classList.remove("i-amphtml-scroll-disabled")
            }
            ,
            i.updateLightboxMode = function(t) {
                return h()
            }
            ,
            i.getSize = function() {
                return {
                    width: this.win.innerWidth,
                    height: this.win.innerHeight
                }
            }
            ,
            i.getScrollTop = function() {
                return this.xf.scrollTop
            }
            ,
            i.getScrollLeft = function() {
                return 0
            }
            ,
            i.getScrollWidth = function() {
                return this.xf.scrollWidth
            }
            ,
            i.getScrollHeight = function() {
                return this.xf.scrollHeight
            }
            ,
            i.getContentHeight = function() {
                var t = this.win.document.body
                  , i = t.getBoundingClientRect().height
                  , n = Pa(this.win, t)
                  , r = Nr(this.win, t);
                return parseInt(r.marginTop, 10) + this.Mf + i + n + parseInt(r.marginBottom, 10)
            }
            ,
            i.contentHeightChanged = function() {}
            ,
            i.getLayoutRect = function(t, i, n) {
                var r = t.getBoundingClientRect()
                  , e = null != n ? n : this.getScrollTop()
                  , s = null != i ? i : this.getScrollLeft();
                return zi(Math.round(r.left + s), Math.round(r.top + e), Math.round(r.width), Math.round(r.height))
            }
            ,
            i.getRootClientRectAsync = function() {
                return Promise.resolve(null)
            }
            ,
            i.setScrollTop = function(t) {
                this.xf.scrollTop = t || 1
            }
            ,
            i.Tf = function(t) {
                0 == this.xf.scrollTop && (this.xf.scrollTop = 1,
                t && t.preventDefault()),
                t && this.Ef.fire()
            }
            ,
            i.getScrollingElement = function() {
                return this.xf
            }
            ,
            i.getScrollingElementScrollsLikeViewport = function() {
                return !1
            }
            ,
            t
        }()
          , Ia = function() {
            function t(t) {
                var i = this;
                this.ampdoc = t,
                this.win = t.win,
                this.Mu = sr(this.win),
                this.Ef = new Er,
                this.Of = new Er,
                this.Pf = this._f.bind(this),
                this.If = function() {
                    return i.Of.fire()
                }
                ,
                Qt().fine("Viewport", "initialized natural viewport")
            }
            var i = t.prototype;
            return i._f = function() {
                this.Ef.fire()
            }
            ,
            i.connect = function() {
                this.win.addEventListener("scroll", this.Pf),
                this.win.addEventListener("resize", this.If)
            }
            ,
            i.disconnect = function() {
                this.win.removeEventListener("scroll", this.Pf),
                this.win.removeEventListener("resize", this.If)
            }
            ,
            i.ensureReadyForElements = function() {}
            ,
            i.getBorderTop = function() {
                return 0
            }
            ,
            i.requiresFixedLayerTransfer = function() {
                return !1
            }
            ,
            i.overrideGlobalScrollTo = function() {
                return !1
            }
            ,
            i.supportsPositionFixed = function() {
                return !0
            }
            ,
            i.onScroll = function(t) {
                this.Ef.add(t)
            }
            ,
            i.onResize = function(t) {
                this.Of.add(t)
            }
            ,
            i.updatePaddingTop = function(t) {
                Sr(this.win.document.documentElement, {
                    "padding-top": Cr(t)
                })
            }
            ,
            i.hideViewerHeader = function(t, i) {
                t || this.updatePaddingTop(0)
            }
            ,
            i.showViewerHeader = function(t, i) {
                t || this.updatePaddingTop(i)
            }
            ,
            i.disableScroll = function() {
                this.win.document.documentElement.classList.add("i-amphtml-scroll-disabled")
            }
            ,
            i.resetScroll = function() {
                this.win.document.documentElement.classList.remove("i-amphtml-scroll-disabled")
            }
            ,
            i.updateLightboxMode = function(t) {
                return h()
            }
            ,
            i.getSize = function() {
                var t = this.win.innerWidth
                  , i = this.win.innerHeight;
                if (t && i)
                    return {
                        width: t,
                        height: i
                    };
                var n = this.win.document.documentElement;
                return {
                    width: n.clientWidth,
                    height: n.clientHeight
                }
            }
            ,
            i.getScrollTop = function() {
                var t = this.getScrollingElement().scrollTop || this.win.pageYOffset
                  , i = this.ampdoc.getRootNode().host;
                return i ? t - i.offsetTop : t
            }
            ,
            i.getScrollLeft = function() {
                return 0
            }
            ,
            i.getScrollWidth = function() {
                return this.getScrollingElement().scrollWidth
            }
            ,
            i.getScrollHeight = function() {
                return this.getScrollingElement().scrollHeight
            }
            ,
            i.getContentHeight = function() {
                var t = this.getScrollingElement()
                  , i = t.getBoundingClientRect()
                  , n = i.top + this.getScrollTop()
                  , r = sr(this.win).isSafari() ? Pa(this.win, t) : 0
                  , e = Nr(this.win, t);
                return n + parseInt(e.marginTop, 10) + i.height + r + parseInt(e.marginBottom, 10)
            }
            ,
            i.contentHeightChanged = function() {}
            ,
            i.getLayoutRect = function(t, i, n) {
                var r = t.getBoundingClientRect()
                  , e = null != n ? n : this.getScrollTop()
                  , s = null != i ? i : this.getScrollLeft();
                return zi(Math.round(r.left + s), Math.round(r.top + e), Math.round(r.width), Math.round(r.height))
            }
            ,
            i.getRootClientRectAsync = function() {
                return Promise.resolve(null)
            }
            ,
            i.setScrollTop = function(t) {
                this.getScrollingElement().scrollTop = t
            }
            ,
            i.getScrollingElement = function() {
                var t = this.win.document;
                return t.scrollingElement ? t.scrollingElement : t.body && this.Mu.isWebKit() ? t.body : t.documentElement
            }
            ,
            i.getScrollingElementScrollsLikeViewport = function() {
                return !0
            }
            ,
            t
        }()
          , Ma = "Viewport";
        function Ta(t, i, n) {
            return function(t, i, n) {
                var r = parseInt(Nr(t, i)[n], 10);
                return isNaN(r) ? 0 : r
            }(t, i === t.document.body ? t.document.documentElement : i, n)
        }
        function Sa(t, i) {
            return Ta(t, i, "scrollPaddingTop")
        }
        var Ra = function() {
            function t(t, i, n) {
                var r = this
                  , e = t.win;
                this.ampdoc = t,
                this.Rf = this.ampdoc.win.document,
                this.Ro = i,
                this.eo = n,
                this.Nf = null,
                this.K = null,
                this.Cf = null,
                this.Df = !1,
                this.jf = null,
                this.Mf = Number(n.getParam("paddingTop") || 0),
                this.zf = 0,
                this.Ss = ar(e),
                this.wu = dr(e),
                this.Uf = !1,
                this.Gt = null,
                this.Lf = 0,
                this.Hf = new Er,
                this.Ef = new Er,
                this.Of = new Er,
                this.Gf = void 0,
                this.Vf = void 0,
                this.Ff = null,
                this.eo.onMessage("viewport", this.Bf.bind(this)),
                this.eo.onMessage("scroll", this.qf.bind(this)),
                this.eo.onMessage("disableScroll", this.Wf.bind(this)),
                this.eo.isEmbedded() && this.Ro.updatePaddingTop(this.Mf),
                this.Ro.onScroll(this.$f.bind(this)),
                this.Ro.onResize(this.Kf.bind(this)),
                this.onScroll(this.Yf.bind(this)),
                this.wh = !1,
                this.ampdoc.onVisibilityChanged(this.Jf.bind(this)),
                this.Jf();
                var s = this.Rf.documentElement;
                if (t.isSingleDoc() && s.classList.add("i-amphtml-singledoc"),
                n.isEmbedded() ? s.classList.add("i-amphtml-embedded") : s.classList.add("i-amphtml-standalone"),
                Ni(e) && s.classList.add("i-amphtml-iframed"),
                "1" === n.getParam("webview") && s.classList.add("i-amphtml-webview"),
                Ni(e) && "scrollRestoration"in e.history && (e.history.scrollRestoration = "manual"),
                this.Ro.overrideGlobalScrollTo())
                    try {
                        Object.defineProperty(e, "scrollTo", {
                            value: function(t, i) {
                                return r.setScrollTop(i)
                            }
                        }),
                        ["pageYOffset", "scrollY"].forEach((function(t) {
                            Object.defineProperty(e, t, {
                                get: function() {
                                    return r.getScrollTop()
                                }
                            })
                        }
                        ))
                    } catch (t) {}
                sr(e).isIos() && Ni(e) && this.ampdoc.isSingleDoc() && this.ampdoc.whenReady().then((function() {
                    e.scrollTo(-.1, 0)
                }
                ))
            }
            var i = t.prototype;
            return i.dispose = function() {
                this.Ro.disconnect()
            }
            ,
            i.ensureReadyForElements = function() {
                this.Ro.ensureReadyForElements()
            }
            ,
            i.Jf = function() {
                var t = this.ampdoc.isVisible();
                t != this.wh && (this.wh = t,
                t ? (this.Ro.connect(),
                this.K && this.Kf(),
                this.Cf && (this.Cf = null,
                this.getScrollTop())) : this.Ro.disconnect())
            }
            ,
            i.getPaddingTop = function() {
                return this.Mf
            }
            ,
            i.getScrollTop = function() {
                return null == this.Cf && (this.Cf = this.Ro.getScrollTop()),
                this.Cf
            }
            ,
            i.getScrollLeft = function() {
                return null == this.jf && (this.jf = this.Ro.getScrollLeft()),
                this.jf
            }
            ,
            i.setScrollTop = function(t) {
                this.Cf = null,
                this.Ro.setScrollTop(t)
            }
            ,
            i.updatePaddingBottom = function(t) {
                this.ampdoc.waitForBodyOpen().then((function(i) {
                    Rr(i, "borderBottom", "".concat(t, "px solid transparent"))
                }
                ))
            }
            ,
            i.getSize = function() {
                if (this.K)
                    return this.K;
                if (this.K = this.Ro.getSize(),
                0 == this.K.width || 0 == this.K.height) {
                    var t = this.ampdoc.getVisibilityState();
                    t != gr && t != yr || Math.random() < .01 && Qt().error(Ma, "viewport has zero dimensions")
                }
                return this.K
            }
            ,
            i.getHeight = function() {
                return this.getSize().height
            }
            ,
            i.getWidth = function() {
                return this.getSize().width
            }
            ,
            i.getScrollWidth = function() {
                return this.Ro.getScrollWidth()
            }
            ,
            i.getScrollHeight = function() {
                return this.Ro.getScrollHeight()
            }
            ,
            i.getContentHeight = function() {
                return this.Ro.getContentHeight()
            }
            ,
            i.contentHeightChanged = function() {
                this.Ro.contentHeightChanged()
            }
            ,
            i.getRect = function() {
                if (null == this.Nf) {
                    var t = this.getScrollTop()
                      , i = this.getScrollLeft()
                      , n = this.getSize();
                    this.Nf = zi(i, t, n.width, n.height)
                }
                return this.Nf
            }
            ,
            i.getLayoutRect = function(t) {
                var i = this.getScrollLeft()
                  , n = this.getScrollTop()
                  , r = Sn(t, this.ampdoc.win);
                if (r) {
                    var e = this.Ro.getLayoutRect(t, 0, 0)
                      , s = this.Ro.getLayoutRect(r, i, n);
                    return zi(Math.round(e.left + s.left), Math.round(e.top + s.top), Math.round(e.width), Math.round(e.height))
                }
                return this.Ro.getLayoutRect(t, i, n)
            }
            ,
            i.getClientRectAsync = function(t) {
                var i = this.wu.measurePromise((function() {
                    return t.getBoundingClientRect()
                }
                ))
                  , n = this.Ro.getRootClientRectAsync()
                  , r = Sn(t, this.ampdoc.win);
                return r && (n = this.wu.measurePromise((function() {
                    return r.getBoundingClientRect()
                }
                ))),
                Promise.all([i, n]).then((function(t) {
                    var i, n = t[0], r = t[1];
                    return r ? Gi(n, r.left, r.top) : (i = n,
                    zi(Number(i.left), Number(i.top), Number(i.width), Number(i.height)))
                }
                ))
            }
            ,
            i.supportsPositionFixed = function() {
                return this.Ro.supportsPositionFixed()
            }
            ,
            i.isDeclaredFixed = function(t) {
                return !!this.Ff && this.Ff.isDeclaredFixed(t)
            }
            ,
            i.scrollIntoView = function(t) {
                var i = this;
                return this.Xf(t).then((function(n) {
                    return i.Qf(t, n)
                }
                ))
            }
            ,
            i.Qf = function(t, i) {
                var n = this
                  , r = this.Ro.getLayoutRect(t).top
                  , e = Sa(this.ampdoc.win, i);
                c((function() {
                    return Math.max(0, r - n.Mf - e)
                }
                )).then((function(t) {
                    return n.Zf(i, t)
                }
                ))
            }
            ,
            i.animateScrollIntoView = function(t) {
                var i = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top"
                  , r = arguments.length > 2 ? arguments[2] : void 0
                  , e = arguments.length > 3 ? arguments[3] : void 0;
                return Zt(!e || void 0 !== r),
                this.Xf(t).then((function(s) {
                    return i.animateScrollWithinParent(t, s, n, r, e)
                }
                ))
            }
            ,
            i.animateScrollWithinParent = function(t, i, n, r, e) {
                var s = this;
                Zt(!e || void 0 !== r);
                var u = this.Ro.getLayoutRect(t)
                  , o = (this.tl(i) ? this.getSize() : this.getLayoutRect(i)).height
                  , h = this.ampdoc.win
                  , a = Sa(h, i)
                  , c = function(t, i) {
                    return Ta(t, i, "scrollPaddingBottom")
                }(h, i)
                  , f = -a;
                return "bottom" === n ? f = -o + c + u.height : "center" === n && (f = -(o - a - c) / 2 + u.height / 2),
                this.il(i).then((function(t) {
                    var n = u.top - s.Mf + f
                      , o = Math.max(0, n);
                    if (o != t)
                        return s.nl(i, t, o, r, e)
                }
                ))
            }
            ,
            i.nl = function(t, i, n, r) {
                var e = this
                  , s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "ease-in"
                  , u = void 0 !== r ? r : _a(i, n)
                  , o = da(i, n);
                return xa.animate(t, (function(i) {
                    e.Zf(t, o(i))
                }
                ), u, s).thenAlways((function() {
                    e.Zf(t, n)
                }
                ))
            }
            ,
            i.Xf = function(t) {
                var i = this;
                return this.wu.measurePromise((function() {
                    return yi(t, ".i-amphtml-scrollable") || i.Ro.getScrollingElement()
                }
                ))
            }
            ,
            i.Zf = function(t, i) {
                this.tl(t) ? this.Ro.setScrollTop(i) : this.wu.mutate((function() {
                    t.scrollTop = i
                }
                ))
            }
            ,
            i.il = function(t) {
                var i = this;
                return this.tl(t) ? c((function() {
                    return i.getScrollTop()
                }
                )) : this.wu.measurePromise((function() {
                    return t.scrollTop
                }
                ))
            }
            ,
            i.tl = function(t) {
                return t == this.Ro.getScrollingElement()
            }
            ,
            i.getScrollingElement = function() {
                return this.Gt ? this.Gt : this.Gt = this.Ro.getScrollingElement()
            }
            ,
            i.onChanged = function(t) {
                return this.Hf.add(t)
            }
            ,
            i.onScroll = function(t) {
                return this.Ef.add(t)
            }
            ,
            i.onResize = function(t) {
                return this.Of.add(t)
            }
            ,
            i.enterLightboxMode = function(t, i) {
                return this.eo.sendMessage("requestFullOverlay", {}, !0),
                this.enterOverlayMode(),
                this.Ff && this.Ff.enterLightbox(t, i),
                t && this.maybeEnterFieLightboxMode(t),
                this.Ro.updateLightboxMode(!0)
            }
            ,
            i.leaveLightboxMode = function(t) {
                return this.eo.sendMessage("cancelFullOverlay", {}, !0),
                this.Ff && this.Ff.leaveLightbox(),
                this.leaveOverlayMode(),
                t && this.maybeLeaveFieLightboxMode(t),
                this.Ro.updateLightboxMode(!1)
            }
            ,
            i.isLightboxExperimentOn = function() {
                return Ge(this.ampdoc.win, "amp-lightbox-a4a-proto")
            }
            ,
            i.maybeEnterFieLightboxMode = function(t) {
                var i = this.rl(t);
                i && (Zt(this.isLightboxExperimentOn()),
                i.enterFullOverlayMode())
            }
            ,
            i.maybeLeaveFieLightboxMode = function(t) {
                var i = this.rl(t);
                i && Zt(i).leaveFullOverlayMode()
            }
            ,
            i.rl = function(t) {
                var i = Sn(t, this.ampdoc.win);
                return i && i.__AMP_EMBED__
            }
            ,
            i.enterOverlayMode = function() {
                this.disableTouchZoom(),
                this.disableScroll()
            }
            ,
            i.leaveOverlayMode = function() {
                this.resetScroll(),
                this.restoreOriginalTouchZoom()
            }
            ,
            i.disableScroll = function() {
                var t, i = this, n = this.ampdoc.win, r = n.document.documentElement;
                this.wu.measure((function() {
                    var e = Nr(n, r).marginRight
                      , s = function(t) {
                        var i = t.document.documentElement;
                        return t.innerWidth - i.clientWidth
                    }(i.ampdoc.win);
                    t = parseInt(e, 10) + s
                }
                )),
                this.wu.mutate((function() {
                    Rr(r, "margin-right", t, "px"),
                    i.Ro.disableScroll()
                }
                ))
            }
            ,
            i.resetScroll = function() {
                var t = this
                  , i = this.ampdoc.win.document.documentElement;
                this.wu.mutate((function() {
                    Rr(i, "margin-right", ""),
                    t.Ro.resetScroll()
                }
                ))
            }
            ,
            i.resetTouchZoom = function() {
                var t = this
                  , i = this.ampdoc.win.innerHeight
                  , n = this.Rf.documentElement.clientHeight;
                i && n && i === n || this.disableTouchZoom() && this.Ss.delay((function() {
                    t.restoreOriginalTouchZoom()
                }
                ), 50)
            }
            ,
            i.disableTouchZoom = function() {
                var t = this.sl();
                if (!t)
                    return !1;
                var i = function(t, i) {
                    var n = function(t) {
                        var i = Object.create(null);
                        if (!t)
                            return i;
                        for (var n = t.split(/,|;/), r = 0; r < n.length; r++) {
                            var e = n[r].split("=")
                              , s = e[0].trim()
                              , u = e[1];
                            u = (u || "").trim(),
                            s && (i[s] = u)
                        }
                        return i
                    }(t)
                      , r = !1;
                    for (var e in i)
                        n[e] !== i[e] && (r = !0,
                        void 0 !== i[e] ? n[e] = i[e] : delete n[e]);
                    return r ? function(t) {
                        var i = "";
                        for (var n in t)
                            i.length > 0 && (i += ","),
                            t[n] ? i += n + "=" + t[n] : i += n;
                        return i
                    }(n) : t
                }(t.content, {
                    "maximum-scale": "1",
                    "user-scalable": "no"
                });
                return this.ol(i)
            }
            ,
            i.restoreOriginalTouchZoom = function() {
                return void 0 !== this.Vf && this.ol(this.Vf)
            }
            ,
            i.updateFixedLayer = function() {
                return this.Ff ? this.Ff.update() : h()
            }
            ,
            i.addToFixedLayer = function(t, i) {
                return this.Ff ? this.Ff.addElement(t, i) : h()
            }
            ,
            i.removeFromFixedLayer = function(t) {
                this.Ff && this.Ff.removeElement(t)
            }
            ,
            i.createFixedLayer = function(t) {
                var i = this;
                this.Ff = new t(this.ampdoc,this.wu,this.Ro.getBorderTop(),this.Mf,this.Ro.requiresFixedLayerTransfer()),
                this.ampdoc.whenReady().then((function() {
                    return i.Ff.setup()
                }
                ))
            }
            ,
            i.ol = function(t) {
                var i = this.sl();
                return !(!i || i.content == t || (Qt().fine(Ma, "changed viewport meta to:", t),
                i.content = t,
                0))
            }
            ,
            i.sl = function() {
                return Ni(this.ampdoc.win) ? null : (void 0 === this.Gf && (this.Gf = this.Rf.querySelector("meta[name=viewport]"),
                this.Gf && (this.Vf = this.Gf.content)),
                this.Gf)
            }
            ,
            i.qf = function(t) {
                var i = t.scrollTop;
                this.setScrollTop(i)
            }
            ,
            i.Bf = function(t) {
                var i = this
                  , n = t.paddingTop
                  , r = t.duration || 0
                  , e = t.curve
                  , s = t.transient;
                if (null != n && n != this.Mf && (this.zf = this.Mf,
                this.Mf = n,
                this.Ff)) {
                    var u = this.Ff.animateFixedElements(this.Mf, this.zf, r, e, s);
                    n < this.zf ? this.Ro.hideViewerHeader(s, this.zf) : u.then((function() {
                        i.Ro.showViewerHeader(s, n)
                    }
                    ))
                }
            }
            ,
            i.Wf = function(t) {
                t ? this.disableScroll() : this.resetScroll()
            }
            ,
            i.ul = function(t, i) {
                var n = this.getSize()
                  , r = this.getScrollTop()
                  , e = this.getScrollLeft();
                Qt().fine(Ma, "changed event:", "relayoutAll=", t, "top=", r, "left=", e, "bottom=", r + n.height, "velocity=", i),
                this.Hf.fire({
                    relayoutAll: t,
                    top: r,
                    left: e,
                    width: n.width,
                    height: n.height,
                    velocity: i
                })
            }
            ,
            i.$f = function() {
                var t = this;
                this.Nf = null,
                this.Lf++,
                this.jf = this.Ro.getScrollLeft();
                var i = this.Ro.getScrollTop();
                if (!(i < 0)) {
                    if (this.Cf = i,
                    !this.Uf) {
                        this.Uf = !0;
                        var n = Date.now();
                        this.Ss.delay((function() {
                            t.wu.measure((function() {
                                t.qh(n, i)
                            }
                            ))
                        }
                        ), 36)
                    }
                    this.Ef.fire()
                }
            }
            ,
            i.qh = function(t, i) {
                var n = this;
                this.Cf = this.Ro.getScrollTop();
                var r = this.Cf
                  , e = Date.now()
                  , s = 0;
                e != t && (s = (r - i) / (e - t)),
                Qt().fine(Ma, "scroll: scrollTop=" + r + "; velocity=" + s),
                Math.abs(s) < .03 ? (this.ul(!1, s),
                this.Uf = !1) : this.Ss.delay((function() {
                    return n.wu.measure(n.qh.bind(n, e, r))
                }
                ), 20)
            }
            ,
            i.Yf = function() {
                var t = this;
                this.Df || (this.Df = !0,
                this.wu.measure((function() {
                    t.Df = !1,
                    t.eo.sendMessage("scroll", {
                        "scrollTop": t.getScrollTop()
                    }, !0)
                }
                )))
            }
            ,
            i.Kf = function() {
                var t = this;
                this.Nf = null;
                var i = this.K;
                this.K = null;
                var n = this.getSize();
                this.updateFixedLayer().then((function() {
                    var r = !i || i.width != n.width;
                    t.ul(r, 0),
                    (r || i.height != n.height) && t.Of.fire({
                        relayoutAll: r,
                        width: n.width,
                        height: n.height
                    })
                }
                ))
            }
            ,
            t
        }();
        function _a(t, i) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 500;
            return Math.floor(ma(.65 * Math.abs(t - i), 0, n))
        }
        function ka(t) {
            var i, n = vr(t), r = t.win;
            return i = t.isSingleDoc() && function(t, i) {
                return sr(t).isIos() && Ni(t) && i.isEmbedded() && !i.hasCapability("iframeScroll") ? Ca.NATURAL_IOS_EMBED : Ca.NATURAL
            }(r, n) == Ca.NATURAL_IOS_EMBED ? new Oa(r) : new Ia(t),
            new Ra(t,i,n)
        }
        var Ca = {
            NATURAL: "natural",
            NATURAL_IOS_EMBED: "natural-ios-embed"
        }
          , Na = function() {
            function t(t) {
                this.win = t,
                this.hl = Yn(this.win),
                this.al = this.cl(),
                this.ye = [],
                this.fl = [],
                this.fu = [],
                this.ll = [],
                this.Rs = !1,
                this.vl = null,
                this.dl = null,
                this.ml = this.pl.bind(this),
                this.bl = new Cu(this.win,this.ml,16),
                this.gl = new Cu(this.win,this.ml,40),
                this.yl = this.wl.bind(this),
                this.hl.isSingleDoc() ? this.hl.getSingleDoc().onVisibilityChanged(this.yl) : jr(this.win.document, this.yl)
            }
            var i = t.prototype;
            return i.dispose = function() {
                Ur(this.win.document, this.yl)
            }
            ,
            i.wl = function() {
                this.Rs && this.Al()
            }
            ,
            i.run = function(t, i) {
                this.ye.push(t),
                this.fu.push(i || void 0),
                this.Pe()
            }
            ,
            i.runPromise = function(t, i) {
                if (this.run(t, i),
                this.vl)
                    return this.vl;
                var n = new a;
                return this.dl = n.resolve,
                this.vl = n.promise
            }
            ,
            i.createTask = function(t) {
                var i = this;
                return function(n) {
                    i.run(t, n)
                }
            }
            ,
            i.mutate = function(t) {
                this.run({
                    measure: void 0,
                    mutate: t
                })
            }
            ,
            i.mutatePromise = function(t) {
                return this.runPromise({
                    measure: void 0,
                    mutate: t
                })
            }
            ,
            i.measure = function(t) {
                this.run({
                    measure: t,
                    mutate: void 0
                })
            }
            ,
            i.measurePromise = function(t) {
                var i = this;
                return new Promise((function(n) {
                    i.measure((function() {
                        n(t())
                    }
                    ))
                }
                ))
            }
            ,
            i.canAnimate = function(t) {
                return this.xl(Zt(t))
            }
            ,
            i.xl = function(t) {
                if (Dr(this.win.document) != yr)
                    return !1;
                if (this.hl.isSingleDoc())
                    return this.hl.getSingleDoc().isVisible();
                if (t) {
                    var i = this.hl.getAmpDocIfAvailable(t);
                    return !i || i.isVisible()
                }
                return !0
            }
            ,
            i.runAnim = function(t, i, n) {
                return this.xl(t) ? (this.run(i, n),
                !0) : (Qt().warn("VSYNC", "Did not schedule a vsync request, because document was invisible"),
                !1)
            }
            ,
            i.createAnimTask = function(t, i) {
                var n = this;
                return function(r) {
                    return n.runAnim(t, i, r)
                }
            }
            ,
            i.runAnimMutateSeries = function(t, i, n) {
                var r = this;
                return this.xl(t) ? new Promise((function(e, s) {
                    var u = Date.now()
                      , o = 0
                      , h = r.createAnimTask(t, {
                        mutate: function(t) {
                            var r = Date.now() - u;
                            i(r, r - o, t) ? n && r > n ? s(new Error("timeout")) : (o = r,
                            h(t)) : e()
                        }
                    });
                    h({})
                }
                )) : Promise.reject(js())
            }
            ,
            i.Pe = function() {
                this.Rs || (this.Rs = !0,
                this.Al())
            }
            ,
            i.Al = function() {
                this.xl() ? (this.al(this.ml),
                this.gl.schedule()) : this.bl.schedule()
            }
            ,
            i.pl = function() {
                this.gl.cancel(),
                this.Rs = !1;
                var t = this.dl
                  , i = this.fu
                  , n = this.ye;
                this.dl = null,
                this.vl = null,
                this.ye = this.fl,
                this.fu = this.ll;
                for (var r = 0; r < n.length; r++)
                    n[r].measure && (Da(n[r].measure, i[r]) || (n[r].mutate = void 0));
                for (var e = 0; e < n.length; e++)
                    n[e].mutate && Da(n[e].mutate, i[e]);
                this.fl = n,
                this.ll = i,
                this.fl.length = 0,
                this.ll.length = 0,
                t && t()
            }
            ,
            i.cl = function() {
                var t = this
                  , i = this.win.requestAnimationFrame || this.win.webkitRequestAnimationFrame;
                if (i)
                    return i.bind(this.win);
                var n = 0;
                return function(i) {
                    var r = Date.now()
                      , e = Math.max(0, 16 - (r - n));
                    n = r + e,
                    t.win.setTimeout(i, e)
                }
            }
            ,
            t
        }();
        function Da(t, i) {
            Zt(t);
            try {
                void 0 !== t(i) && Qt().error("VSYNC", "callback returned a value but vsync cannot propogate it: %s", t.toString())
            } catch (t) {
                return d(t),
                !1
            }
            return !0
        }
        function ja(t) {
            if (!t.defaultPrevented) {
                var i = t.target;
                if (i && "FORM" == i.tagName) {
                    (i.classList.contains("i-amphtml-form") ? !i.hasAttribute("amp-novalidate") : !i.hasAttribute("novalidate")) && i.checkValidity && !i.checkValidity() && t.preventDefault();
                    for (var n = i.elements, r = 0; r < n.length; r++)
                        ti(!n[r].name || n[r].name != fs, "Illegal input name, %s found: %s", fs, n[r]);
                    var e = i.getAttribute("action")
                      , s = i.getAttribute("action-xhr")
                      , u = (i.getAttribute("method") || "GET").toUpperCase();
                    s && (ws(s, i, "action-xhr"),
                    ti(!xs(s), "form action-xhr should not be on AMP CDN: %s", i),
                    Rs(s)),
                    e && (ws(e, i, "action"),
                    ti(!xs(e), "form action should not be on AMP CDN: %s", i),
                    Rs(e)),
                    "GET" == u ? ti(s || e, "form action-xhr or action attribute is required for method=GET: %s", i) : "POST" == u && (e && Jt().error("form", "action attribute is invalid for method=POST: %s", i),
                    s || (t.preventDefault(),
                    ti(!1, "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s", i)));
                    var o = i.getAttribute("target");
                    o ? ti("_blank" == o || "_top" == o, "form target=%s is invalid can only be _blank or _top: %s", o, i) : i.setAttribute("target", "_top"),
                    s && (t.preventDefault(),
                    t.stopImmediatePropagation(),
                    Bn(i).execute(i, "submit", null, i, i, t, 3))
                }
            }
        }
        var Ua = "Input"
          , La = function() {
            function t(t) {
                this.win = t,
                this.El = this.Ol.bind(this),
                this.Pl = this.Tl.bind(this),
                this.Il = null,
                this.Ml = null,
                this.Sl = null,
                this.kl = "ontouchstart"in t || void 0 !== t.navigator.maxTouchPoints && t.navigator.maxTouchPoints > 0 || void 0 !== t.DocumentTouch,
                Qt().fine(Ua, "touch detected:", this.kl),
                this._l = !1,
                this.win.document.addEventListener("keydown", this.El),
                this.win.document.addEventListener("mousedown", this.Pl),
                this.Rl = !0,
                this.Nl = 0,
                this.Cl = new Er,
                this.Dl = new Er,
                this.jl = new Er,
                this.kl && (this.Rl = !this.kl,
                this.Il = this.zl.bind(this),
                Je(t.document, "mousemove", this.Il))
            }
            var i = t.prototype;
            return i.setupInputModeClasses = function(t) {
                var i = this;
                this.onTouchDetected((function(n) {
                    i.Ul(t, "amp-mode-touch", n)
                }
                ), !0),
                this.onMouseDetected((function(n) {
                    i.Ul(t, "amp-mode-mouse", n)
                }
                ), !0),
                this.onKeyboardStateChanged((function(n) {
                    i.Ul(t, "amp-mode-keyboard-active", n)
                }
                ), !0)
            }
            ,
            i.isTouchDetected = function() {
                return this.kl
            }
            ,
            i.onTouchDetected = function(t, i) {
                return i && t(this.isTouchDetected()),
                this.Cl.add(t)
            }
            ,
            i.isMouseDetected = function() {
                return this.Rl
            }
            ,
            i.onMouseDetected = function(t, i) {
                return i && t(this.isMouseDetected()),
                this.Dl.add(t)
            }
            ,
            i.isKeyboardActive = function() {
                return this._l
            }
            ,
            i.onKeyboardStateChanged = function(t, i) {
                return i && t(this.isKeyboardActive()),
                this.jl.add(t)
            }
            ,
            i.Ul = function(t, i, n) {
                var r = this;
                t.waitForBodyOpen().then((function(t) {
                    dr(r.win).mutate((function() {
                        t.classList.toggle(i, n)
                    }
                    ))
                }
                ))
            }
            ,
            i.Ol = function(t) {
                if (!this._l && !t.defaultPrevented) {
                    var i = t.target;
                    i && ("INPUT" == i.tagName || "TEXTAREA" == i.tagName || "SELECT" == i.tagName || "OPTION" == i.tagName || i.hasAttribute("contenteditable")) || (this._l = !0,
                    this.jl.fire(!0),
                    Qt().fine(Ua, "keyboard activated"))
                }
            }
            ,
            i.Tl = function() {
                this._l && (this._l = !1,
                this.jl.fire(!1),
                Qt().fine(Ua, "keyboard deactivated"))
            }
            ,
            i.zl = function(t) {
                var i = this;
                if (!t.sourceCapabilities || !t.sourceCapabilities.firesTouchEvents) {
                    var n;
                    this.Sl || (this.Sl = this.Ll.bind(this),
                    this.Ml = this.Hl.bind(this));
                    var r = function(t, i, n, r) {
                        var e, s = new Promise((function(i) {
                            e = Je(t, "click", i, void 0)
                        }
                        ));
                        return s.then(e, e),
                        r && r(e),
                        s
                    }(this.win.document, 0, 0, (function(t) {
                        n = t
                    }
                    ));
                    return ar(this.win).timeoutPromise(300, r).then(this.Ml, (function() {
                        n && n(),
                        i.Sl()
                    }
                    ))
                }
                this.Hl()
            }
            ,
            i.Ll = function() {
                this.Rl = !0,
                this.Dl.fire(!0),
                Qt().fine(Ua, "mouse detected")
            }
            ,
            i.Hl = function() {
                this.Nl++,
                this.Nl <= 3 ? Je(this.win.document, "mousemove", this.Il) : Qt().fine(Ua, "mouse detection failed")
            }
            ,
            t
        }()
          , za = ["<link rel=preload referrerpolicy=origin>"]
          , Ha = 18e4
          , Ga = null
          , Va = function() {
            function t(t) {
                this.Gl = t.document,
                this.Vl = t.document.head,
                this.Fl = {},
                this.Bl = {},
                this.Mu = sr(t),
                this.Fl[vs(t.location.href).origin] = !0,
                this.ql = function(t) {
                    if (!Ga) {
                        var i = t.document.createElement("link")
                          , n = i.relList;
                        if (i.as = "invalid-value",
                        !n || !n.supports)
                            return {};
                        Ga = {
                            preconnect: n.supports("preconnect"),
                            preload: n.supports("preload"),
                            onlyValidAs: "invalid-value" != i.as
                        }
                    }
                    return Ga
                }(t),
                this.Ss = ar(t)
            }
            var i = t.prototype;
            return i.url = function(t, i, n) {
                var r = this;
                t.whenFirstVisible().then((function() {
                    r.Pi(t, i, n)
                }
                ))
            }
            ,
            i.Pi = function(t, i, n) {
                if (this.Wl(i)) {
                    var r = vs(i).origin
                      , e = Date.now()
                      , s = this.Fl[r];
                    if (s && e < s)
                        n && (this.Fl[r] = e + Ha);
                    else {
                        var u, o = n ? Ha : 1e4;
                        this.Fl[r] = e + o,
                        this.ql.preconnect || ((u = this.Gl.createElement("link")).setAttribute("rel", "dns-prefetch"),
                        u.setAttribute("href", r),
                        this.Vl.appendChild(u));
                        var h = this.Gl.createElement("link");
                        h.setAttribute("rel", "preconnect"),
                        h.setAttribute("href", r),
                        h.setAttribute("referrerpolicy", "origin"),
                        this.Vl.appendChild(h),
                        this.Ss.delay((function() {
                            u && u.parentNode && u.parentNode.removeChild(u),
                            h.parentNode && h.parentNode.removeChild(h)
                        }
                        ), 1e4),
                        this.$l(t, r)
                    }
                }
            }
            ,
            i.preload = function(t, i, n) {
                var r = this;
                this.Wl(i) && (this.Bl[i] || (this.Bl[i] = !0,
                this.url(t, i, !0),
                this.ql.preload && ("document" == n && this.Mu.isSafari() || t.whenFirstVisible().then((function() {
                    r.Kl(i)
                }
                )))))
            }
            ,
            i.Kl = function(t) {
                var i = ke(this.Gl)(za);
                i.setAttribute("href", t),
                this.ql.onlyValidAs ? i.as = "fetch" : i.as = "",
                this.Vl.appendChild(i)
            }
            ,
            i.Wl = function(t) {
                return !(!t.startsWith("https:") && !t.startsWith("http:"))
            }
            ,
            i.$l = function(t, i) {
                if (!this.ql.preconnect && (this.Mu.isSafari() || this.Mu.isIos())) {
                    var n = Date.now();
                    this.Fl[i] = n + Ha;
                    var r = i + "/robots.txt?_AMP_safari_preconnect_polyfill_cachebust=" + (n - n % Ha)
                      , e = new XMLHttpRequest;
                    e.open("HEAD", r, !0),
                    e.withCredentials = !0,
                    e.send()
                }
            }
            ,
            t
        }();
        function Fa(t) {
            var i;
            !function(t) {
                An(t, "crypto", Xo)
            }(t),
            An(t, "batched-xhr", vo),
            _h(t),
            Jh(t),
            Jh(i = t),
            An(i, "vsync", Na),
            function(t) {
                An(t, "xhr", lo)
            }(t),
            function(t) {
                An(t, "input", La)
            }(t),
            function(t) {
                An(t, "preconnect", Va)
            }(t)
        }
        function qa(t) {
            Zt(!t.getParent()),
            function(t, i) {
                (function(t) {
                    xn(t, "url", Xh, !0)
                }
                )(t),
                function(t) {
                    xn(t, "templates", Yh)
                }(t),
                xn(t, "documentInfo", Zo),
                function(t) {
                    xn(t, "cid", Go)
                }(t),
                function(t) {
                    xn(t, "viewer", la, !0)
                }(t),
                function(t) {
                    xn(t, "viewport", ka, !0)
                }(t),
                function(t) {
                    xn(t, "hidden-observer", ih)
                }(t),
                function(t) {
                    xn(t, "history", hh)
                }(t),
                function(t) {
                    xn(t, "resources", Dh)
                }(t),
                function(t) {
                    xn(t, "owners", Sh)
                }(t),
                function(t) {
                    xn(t, "mutator", dh)
                }(t),
                function(t) {
                    xn(t, "url-replace", (function(t) {
                        return new aa(t,new ha(t))
                    }
                    ))
                }(t),
                function(t) {
                    xn(t, "action", Bu, !0)
                }(t),
                function(t) {
                    xn(t, "standard-actions", Hh, !0)
                }(t),
                function(t) {
                    xn(t, "storage", (function() {
                        var i = vr(t)
                          , n = parseInt(i.getParam("storage"), 10) ? new Bh(i) : new qh(t.win);
                        return new Vh(t,i,n).Ca()
                    }
                    ), !0)
                }(t),
                function(t) {
                    xn(t, wh, Oh, !0)
                }(t),
                function(t) {
                    t.whenExtensionsKnown().then((function() {
                        t.declaresExtension("amp-form") && t.getRootNode().addEventListener("submit", ja, !0)
                    }
                    ))
                }(t),
                xn(t, "loadingIndicator", fh)
            }(t)
        }
        function Ba(t) {
            return t.waitForBodyOpen().then((function() {
                var i, n, r = t.getBody(), e = (i = r,
                n = function() {
                    return !!r.firstElementChild
                }
                ,
                new Promise((function(t) {
                    Oi(i, n, t)
                }
                )));
                return ar(t.win).timeoutPromise(2e3, e).then((function() {
                    return "AMP-STORY" === r.firstElementChild.tagName
                }
                ), (function() {
                    return !1
                }
                ))
            }
            ))
        }
        var $a = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];
        function Wa(t) {
            if (null == t)
                return 0;
            var i = function(t) {
                for (var i = t; null != (t = t.parentNode); )
                    t.nodeName.startsWith("AMP-") && (i = t);
                return i
            }(t)
              , n = i.nodeName;
            return "IMG" === n || "AMP-IMG" === n ? 1 : "VIDEO" === n || "AMP-VIDEO" === n ? 2 : "AMP-CAROUSEL" === n ? 8 : "AMP-BASE-CAROUSEL" === n ? 16 : "AMP-AD" === n ? 4 : !n.startsWith("AMP-") && i.textContent ? 32 : 0
        }
        var Ya = function() {
            function t(t) {
                var i = this;
                this.win = t,
                this.Yd = po(lt(t, 16)),
                this.Xd = [],
                this.$d = t.performance.timeOrigin || t.performance.timing.navigationStart,
                this.Lr = null,
                this.eo = null,
                this.Ri = null,
                this.Kd = null,
                this.Qd = !1,
                this.Zd = !1,
                this.Vm = A(),
                this.Gm = void 0,
                this.Bm = new Pr,
                this.Wm = 0,
                this.Jm = [],
                this.Km = 0;
                var n = this.win.PerformanceObserver && this.win.PerformanceObserver.supportedEntryTypes || [];
                if (n.includes("paint") || this.Bm.rejectSignal("fcp", Qt().createExpectedError("First Contentful Paint not supported")),
                this.Qm = n.includes("layout-shift"),
                !this.Qm) {
                    var r = Qt().createExpectedError("Cumulative Layout Shift not supported");
                    this.Bm.rejectSignal(Zi, r),
                    this.Bm.rejectSignal(nn, r)
                }
                this.Zm = n.includes("first-input"),
                this.Zm || this.Bm.rejectSignal("fid", Qt().createExpectedError("First Input Delay not supported")),
                this.kv = n.includes("largest-contentful-paint"),
                this.kv || this.Bm.rejectSignal("lcp", Qt().createExpectedError("Largest Contentful Paint not supported")),
                this._v = n.includes("navigation"),
                this.zv = this.zv.bind(this),
                this.addEnabledExperiment("rtv-" + Dt(this.win).rtvVersion),
                vn(t.document).then((function() {
                    i.tick("dr"),
                    i.flush()
                }
                )),
                dn(t.document).then((function() {
                    return i.Dv()
                }
                )),
                this.Lv(),
                this.Hv = !1,
                this.Vv = mt(t, (function() {
                    i.qv()
                }
                ), 6e3)
            }
            var i = t.prototype;
            return i.coreServicesAvailable = function() {
                var t = this
                  , i = this.win.document.documentElement;
                this.Lr = Wn(i),
                this.eo = vr(i),
                this.Ri = or(i),
                this.Kd = Zn(this.Lr),
                this.Zd = this.eo.isEmbedded() && "1" === this.eo.getParam("csi"),
                this.Lr.onVisibilityChanged(this.flush.bind(this)),
                this.Bv();
                var n = this.eo.whenMessagingReady();
                return this.Lr.whenFirstVisible().then((function() {
                    t.tick("ofv"),
                    t.flush()
                }
                )),
                (this.kv || this.Qm) && this.Lr.onVisibilityChanged(this.zv),
                n ? n.then((function() {
                    t.tickDelta("msr", t.win.performance.now()),
                    t.tick("timeOrigin", void 0, t.$d);
                    var i = t.Lr.getMetaByName("amp-usqp");
                    return i && i.split(",").forEach((function(i) {
                        t.addEnabledExperiment("ssr-" + i)
                    }
                    )),
                    t.Wv()
                }
                )).then((function() {
                    t.Qd = !0,
                    t.Yv(),
                    t.flush()
                }
                )) : h()
            }
            ,
            i.Wv = function() {
                var t = this;
                return Ba(Yn(this.win).getSingleDoc()).then((function(i) {
                    i && t.addEnabledExperiment("story")
                }
                ))
            }
            ,
            i.Dv = function() {
                this.tick("ol"),
                this.flush()
            }
            ,
            i.Lv = function() {
                var t = this;
                if ("inabox" !== Dt(this.win).runtime) {
                    var i = !1
                      , n = !1
                      , r = !1
                      , e = !1
                      , s = function(s) {
                        if ("first-paint" != s.name || i)
                            if ("first-contentful-paint" != s.name || n)
                                if ("first-input" !== s.entryType || r)
                                    "layout-shift" === s.entryType ? s.hadRecentInput || (t.Jv(s),
                                    t.Km += s.value) : "largest-contentful-paint" === s.entryType ? t.Xv(s) : "navigation" != s.entryType || e || (["domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "loadEventEnd", "loadEventStart", "requestStart", "responseStart"].forEach((function(i) {
                                        return t.tick(i, s[i])
                                    }
                                    )),
                                    e = !0);
                                else {
                                    var u = s.processingStart - s.startTime;
                                    t.tickDelta("fid", u),
                                    r = !0
                                }
                            else {
                                var o = s.startTime + s.duration;
                                t.tickDelta("fcp", o),
                                t.tickSinceVisible("fcpv", o),
                                n = !0
                            }
                        else
                            t.tickDelta("fp", s.startTime + s.duration),
                            i = !0
                    }
                      , u = [];
                    this.win.PerformancePaintTiming && (this.win.performance.getEntriesByType("paint").forEach(s),
                    u.push("paint")),
                    this.Zm && this.$v(s, {
                        type: "first-input",
                        buffered: !0
                    }),
                    this.Qm && this.$v(s, {
                        type: "layout-shift",
                        buffered: !0
                    }),
                    this.kv && this.$v(s, {
                        type: "largest-contentful-paint",
                        buffered: !0
                    }),
                    this._v && this.$v(s, {
                        type: "navigation",
                        buffered: !0
                    }),
                    u.length > 0 && this.$v(s, {
                        entryTypes: u
                    })
                }
            }
            ,
            i.$v = function(t, i) {
                var n = this;
                try {
                    new this.win.PerformanceObserver((function(i) {
                        i.getEntries().forEach(t),
                        n.flush()
                    }
                    )).observe(i)
                } catch (t) {
                    Qt().warn("Performance", t)
                }
            }
            ,
            i.Kv = function() {
                var t = this.Lr.getVisibilityState();
                return t === xr || t === wr
            }
            ,
            i.zv = function() {
                this.Kv() && (this.Qv(),
                this.qv())
            }
            ,
            i.Zv = function() {
                if (!this.Hv) {
                    this.Hv = !0;
                    var t = this.win
                      , i = parseInt(Nr(t, t.document.body).getPropertyValue("--google-font-exp"), 10);
                    i >= 0 && this.addEnabledExperiment("google-font-exp=".concat(i))
                }
            }
            ,
            i.Qv = function() {
                this.Qm && (this.Zv(),
                this.tg())
            }
            ,
            i.Jv = function(t) {
                if (this.Lr && !this.Kv()) {
                    var i = this.Jm;
                    if (i.length > 0) {
                        var n = i[0]
                          , r = i[i.length - 1];
                        if (t.startTime - r.startTime < 1e3 && t.startTime - n.startTime < 5e3)
                            return void i.push(t);
                        this.qv()
                    }
                    i.push(t),
                    this.Vv()
                }
            }
            ,
            i.qv = function() {
                for (var t, i = this.Jm, n = this.Bm.get(Zi), r = 0, e = 0, s = o(i, !0); !(t = s()).done; ) {
                    var u = t.value;
                    if (u.sources)
                        for (var h, a = o(u.sources, !0); !(h = a()).done; )
                            r |= Wa(h.value.node);
                    e += u.value
                }
                i.length = 0,
                this.Zv(),
                (null == n || e > n) && (this.Bm.reset(Zi),
                this.Bm.reset(tn),
                this.tickDelta(Zi, e),
                this.tickDelta(tn, r),
                this.flush())
            }
            ,
            i.tg = function() {
                0 === this.Wm ? (this.tickDelta(nn, this.Km),
                this.flush(),
                this.Wm = 1) : 1 === this.Wm && (this.tickDelta("cls-2", this.Km),
                this.flush(),
                this.Wm = 2)
            }
            ,
            i.Xv = function(t) {
                var i = t.element
                  , n = t.startTime
                  , r = Wa(i);
                this.tickDelta("lcpt", r),
                this.tickDelta("lcp", n),
                this.tickSinceVisible("lcpv", n),
                this.flush()
            }
            ,
            i.Bv = function() {
                var t = this
                  , i = !this.Lr.hasBeenVisible()
                  , n = -1;
                this.Lr.whenFirstVisible().then((function() {
                    n = t.win.performance.now(),
                    t.mark("visible")
                }
                )),
                this.ng().then((function() {
                    if (i) {
                        var r = n > -1 ? t.win.performance.now() - n : 0;
                        t.Lr.whenFirstVisible().then((function() {
                            t.tickDelta(rn, r)
                        }
                        )),
                        t.ig(r),
                        t.mark(rn)
                    } else
                        t.tick(rn),
                        t.ig(t.win.performance.now() - n);
                    t.flush()
                }
                ))
            }
            ,
            i.ng = function() {
                var t = this;
                return this.Ri.whenFirstPass().then((function() {
                    var i, n = t.win.document.documentElement, r = mr(n).getSize();
                    return zi(0, 0, r.width, r.height),
                    i = n,
                    t.win,
                    function(t, i) {
                        var n = Wn(t);
                        return n.signals().whenSignal(Gs).then((function() {
                            var t = or(n).get().filter((function(t) {
                                return !(!t.prerenderAllowed() || $a.includes(t.element.tagName))
                            }
                            )).map((function(t) {
                                return t.element
                            }
                            ));
                            return 0 === t.length ? Promise.resolve([]) : new Promise((function(i) {
                                for (var r = n.win, e = new r.IntersectionObserver((function(t) {
                                    e.disconnect();
                                    for (var n = [], r = 0; r < t.length; r++) {
                                        var s = t[r]
                                          , u = s.isIntersecting
                                          , o = s.target;
                                        u && n.push(o)
                                    }
                                    i(n)
                                }
                                ),{
                                    root: Ni(r) ? r.document : null,
                                    threshold: .01
                                }), s = 0; s < Math.min(t.length, 100); s++)
                                    e.observe(t[s])
                            }
                            )).then((function(t) {
                                return Promise.all(t.map((function(t) {
                                    return t.whenLoaded()
                                }
                                )))
                            }
                            ))
                        }
                        ))
                    }(i)
                }
                ))
            }
            ,
            i.tick = function(t, i, n) {
                Zt(null == i || null == n);
                var r, e = {
                    "label": t
                };
                null != i ? e.delta = r = Math.max(i, 0) : null != n ? e.value = n : (this.mark(t),
                r = this.win.performance.now(),
                e.value = this.$d + r),
                this.win.dispatchEvent(We(this.win, "perf", {
                    label: t,
                    delta: r
                })),
                this.Qd && this.Zd ? this.eo.sendMessage("tick", e) : this.rg(e),
                this.Bm.signal(t, r)
            }
            ,
            i.mark = function(t) {
                var i, n;
                null === (i = (n = this.win.performance).mark) || void 0 === i || i.call(n, t)
            }
            ,
            i.tickDelta = function(t, i) {
                this.tick(t, i)
            }
            ,
            i.tickSinceVisible = function(t, i) {
                var n, r, e = null == i ? this.win.performance.now() : i, s = this.$d + e, u = null !== (n = this.eo) && void 0 !== n && n.isEmbedded() ? null === (r = this.Lr) || void 0 === r ? void 0 : r.getFirstVisibleTime() : this.$d, o = u ? Math.max(s - u, 0) : 0;
                this.tickDelta(t, o)
            }
            ,
            i.flush = function() {
                this.Qd && this.Zd && (null == this.Gm && (this.Gm = Object.keys(this.Vm).join(",")),
                this.eo.sendMessage("sendCsi", {
                    "ampexp": this.Gm,
                    "canonicalUrl": this.Kd.canonicalUrl,
                    "eventid": this.Yd
                }, !0))
            }
            ,
            i.addEnabledExperiment = function(t) {
                this.Vm[t] = !0,
                this.Gm = void 0
            }
            ,
            i.rg = function(t) {
                this.Xd.length >= 50 && this.Xd.shift(),
                this.Xd.push(t)
            }
            ,
            i.Yv = function() {
                var t = this;
                this.eo && (this.Zd ? (this.Xd.forEach((function(i) {
                    t.eo.sendMessage("tick", i)
                }
                )),
                this.Xd.length = 0) : this.Xd.length = 0)
            }
            ,
            i.ig = function(t) {
                this.eo && this.eo.sendMessage("prerenderComplete", {
                    "value": t
                }, !0)
            }
            ,
            i.isPerformanceTrackingOn = function() {
                return this.Zd
            }
            ,
            i.getMetric = function(t) {
                return this.Bm.whenSignal(t)
            }
            ,
            t
        }();
        function Ka(t) {
            var i = t.document;
            if (i.fonts && i.fonts.values)
                for (var n, r = i.fonts.values(); n = r.next(); ) {
                    var e = n.value;
                    if (!e)
                        return;
                    "loading" == e.status && "display"in e && "auto" == e.display && (e.display = "swap")
                }
        }
        var Ja = function() {
            function t(t, i) {
                this.tp = t,
                this.yu = i,
                this.Eg = !1,
                this.Pg = 0,
                this.Og = this.Wp.bind(this),
                this.Mg = this.Kp.bind(this),
                this.Tg = this.Qp.bind(this),
                this.Rg = this._g.bind(this),
                this.tp.addEventListener("touchstart", this.Og, !0)
            }
            var i = t.prototype;
            return i.cleanup = function() {
                this.Cg(),
                this.tp.removeEventListener("touchstart", this.Og, !0)
            }
            ,
            i.Wp = function(t) {
                this.Eg || !t.touches || 1 != t.touches.length || this.yu.getScrollTop() > 0 || this.Ng(t.touches[0].clientY)
            }
            ,
            i.Ng = function(t) {
                this.Eg = !0,
                this.Pg = t,
                this.tp.addEventListener("touchmove", this.Mg, !0),
                this.tp.addEventListener("touchend", this.Tg, !0),
                this.tp.addEventListener("touchcancel", this.Rg, !0)
            }
            ,
            i.Cg = function() {
                this.Eg = !1,
                this.Pg = 0,
                this.tp.removeEventListener("touchmove", this.Mg, !0),
                this.tp.removeEventListener("touchend", this.Tg, !0),
                this.tp.removeEventListener("touchcancel", this.Rg, !0)
            }
            ,
            i.Kp = function(t) {
                if (this.Eg) {
                    var i = t.touches[0].clientY - this.Pg;
                    i > 0 && t.preventDefault(),
                    0 != i && this.Cg()
                }
            }
            ,
            i.Qp = function(t) {
                this.Cg()
            }
            ,
            i._g = function(t) {
                this.Cg()
            }
            ,
            t
        }()
          , Xa = ["amp-ad", "amp-embed", "amp-video"]
          , Qa = "extensions"
          , Za = "0.1"
          , tc = "latest"
          , ic = "__AMP_EXT_LDR"
          , nc = function() {
            function t(t) {
                this.win = t,
                this.hl = Yn(t),
                this.Yl = {},
                this.Jl = null,
                this.Xl = null,
                this.Ql = null
            }
            var i = t.prototype;
            return i.registerExtension = function(t, i, n, r, e) {
                var s, u = n ? this.Yl[sc(t, tc)] : null, o = this.Zl(t, i, null === (s = null == u ? void 0 : u.auto) || void 0 === s || s);
                if (o.latest = n,
                !o.loaded) {
                    n && (this.Yl[sc(t, tc)] = o);
                    try {
                        var h, a;
                        this.Jl = t,
                        this.Xl = i,
                        this.Ql = n,
                        r(e, e._),
                        o.loaded = !0,
                        null === (h = o.resolve) || void 0 === h || h.call(o, o.extension),
                        null == u || null === (a = u.resolve) || void 0 === a || a.call(u, o.extension)
                    } catch (t) {
                        var c, f;
                        throw o.error = t,
                        null === (c = o.reject) || void 0 === c || c.call(o, t),
                        null == u || null === (f = u.reject) || void 0 === f || f.call(u, t),
                        t
                    } finally {
                        this.Jl = null,
                        this.Xl = null,
                        this.Ql = null
                    }
                }
            }
            ,
            i.waitForExtension = function(t, i) {
                var n = this.tv(this.Zl(t, i));
                return ar(this.win).timeoutPromise(16e3, n).catch((function(i) {
                    if (!i.message.includes("timeout"))
                        throw i;
                    return Jt().error(Qa, "Waited over 16s to load extension ".concat(t, ".")),
                    n
                }
                ))
            }
            ,
            i.preloadExtension = function(t) {
                console.log("--fx--", t);
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Za;
                "amp-embed" == t && (t = "amp-ad");
                var n = this.Zl(t, i);
                return this.iv(t, i, n),
                this.tv(n)
            }
            ,
            i.installExtensionForDoc = function(t, i) {
                var n = this
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Za
                  , e = t.getRootNode()
                  , s = e[ic];
                return s || (s = e[ic] = A()),
                s[i] ? s[i] : (t.declareExtension(i, r),
                xu(t.win, i),
                s[i] = this.preloadExtension(i, r).then((function() {
                    return n.installExtensionInDoc(t, i, r)
                }
                )))
            }
            ,
            i.reloadExtension = function(t, i, n) {
                var r = yn(this.win, t, i, n, !1)
                  , e = this.Yl[sc(t, i)];
                return e && (Zt(!e.loaded && !e.error),
                e.scriptPresent = !1),
                r.forEach((function(i) {
                    return i.setAttribute("i-amphtml-loaded-new-version", t)
                }
                )),
                this.preloadExtension(t, i)
            }
            ,
            i.importUnwrapped = function(t, i) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Za, e = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], s = yn(t, i, r, e), u = s.length > 0 ? s[0] : null;
                return u ? n = u.__AMP_SCR_LOADED : (n = (u = bn(this.win, i, r)).__AMP_SCR_LOADED = new Promise((function(t, i) {
                    u.onload = t,
                    u.onerror = i
                }
                )),
                t.document.head.appendChild(u)),
                n
            }
            ,
            i.loadElementClass = function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Za;
                return this.preloadExtension(t, i).then((function(i) {
                    return Zt(i.elements[t]).implementationClass
                }
                ))
            }
            ,
            i.addElement = function(t, i, n) {
                var r = this;
                this.nv(t).extension.elements[t] = {
                    implementationClass: i,
                    css: n
                },
                this.addDocFactory((function(e) {
                    r.rv(e, t, i, n)
                }
                ))
            }
            ,
            i.addTemplate = function(t, i) {
                this.addDocFactory((function(n) {
                    !function(t, i, n) {
                        Pn(t, "templates").Ja(i, n)
                    }(n, t, i)
                }
                ))
            }
            ,
            i.rv = function(t, i, n, r) {
                var e = this;
                r ? is(t, r, (function() {
                    e.sv(t.win, i, n)
                }
                ), !1, i) : this.sv(t.win, i, n)
            }
            ,
            i.sv = function(t, i, n) {
                (function(t, i, n) {
                    var r = function(t, i) {
                        if (i.requiresShadowDom() && !t.Element.prototype.attachShadow)
                            return tr(t).importUnwrapped(t, "amp-shadow-dom-polyfill")
                    }(t, n);
                    r ? r.then((function() {
                        return yu(t, i, n)
                    }
                    )) : yu(t, i, n)
                }
                )(t, i, n),
                An(t, i, ec)
            }
            ,
            i.addService = function(t, i) {
                this.nv(t).extension.services.push({
                    serviceName: t,
                    serviceClass: i
                }),
                this.addDocFactory((function(n) {
                    xn(n, t, i, !0)
                }
                ))
            }
            ,
            i.addDocFactory = function(t, i) {
                var n = this.nv(i);
                if (n.docFactories.push(t),
                this.Jl && this.hl.isSingleDoc()) {
                    var r = this.hl.getAmpDoc(this.win.document)
                      , e = this.Jl
                      , s = this.Xl
                      , u = this.Ql || !1;
                    (r.declaresExtension(e, s) || u && r.declaresExtension(e, tc) || n.auto) && t(r)
                }
            }
            ,
            i.preinstallEmbed = function(t, i) {
                var n = this.win
                  , r = t.win;
                !function(t, i) {
                    Eu(t, i, "amp-img"),
                    Eu(t, i, "amp-pixel")
                }(n, r),
                rc(r),
                i.forEach((function(i) {
                    var n = i.extensionId
                      , e = i.extensionVersion;
                    t.declareExtension(n, e),
                    Xa.includes(n) || xu(r, n)
                }
                ))
            }
            ,
            i.installExtensionsInDoc = function(t, i) {
                var n = this;
                return Promise.all(i.map((function(i) {
                    var r = i.extensionId
                      , e = i.extensionVersion;
                    return n.installExtensionInDoc(t, r, e)
                }
                )))
            }
            ,
            i.installExtensionInDoc = function(t, i) {
                var n = this
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Za;
                return t.declareExtension(i, r),
                this.tv(this.Zl(i, r)).then((function() {
                    n.Zl(i, r).docFactories.forEach((function(n) {
                        try {
                            n(t)
                        } catch (t) {
                            d("Doc factory failed: ", t, i)
                        }
                    }
                    ))
                }
                ))
            }
            ,
            i.Zl = function(t, i, n) {
                var r = sc(t, i)
                  , e = this.Yl[r];
                return e || (e = {
                    version: i,
                    latest: i == tc,
                    extension: {
                        elements: {},
                        services: []
                    },
                    auto: n || !1,
                    docFactories: [],
                    promise: void 0,
                    resolve: void 0,
                    reject: void 0,
                    loaded: void 0,
                    error: void 0,
                    scriptPresent: void 0
                },
                this.Yl[r] = e),
                e
            }
            ,
            i.nv = function(t) {
                return this.Jl || Qt().error(Qa, "unknown extension for ", t),
                this.Zl(this.Jl || "_UNKNOWN_", this.Xl || "")
            }
            ,
            i.tv = function(t) {
                if (!t.promise)
                    if (t.loaded)
                        t.promise = Promise.resolve(t.extension);
                    else if (t.error)
                        t.promise = Promise.reject(t.error);
                    else {
                        var i = new a;
                        t.promise = i.promise,
                        t.resolve = i.resolve,
                        t.reject = i.reject
                    }
                return t.promise
            }
            ,
            i.iv = function(t, i, n) {
                if (this.ov(t, i, n)) {
                    var r = bn(this.win, t, i);
                    this.win.document.head.appendChild(r),
                    n.scriptPresent = !0
                }
            }
            ,
            i.ov = function(t, i, n) {
                if (n.loaded || n.error)
                    return !1;
                if (void 0 === n.scriptPresent) {
                    var r = yn(this.win, t, i, n.latest);
                    n.scriptPresent = r.length > 0
                }
                return !n.scriptPresent
            }
            ,
            t
        }();
        function rc(t) {
            Xa.forEach((function(i) {
                xu(t, i)
            }
            ))
        }
        function ec() {
            return {}
        }
        function sc(t, i) {
            return "".concat(t, ":").concat(i)
        }
        var uc, oc = "-shadowcsshost", hc = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)", ac = (new RegExp("(" + oc + hc,"gim"),
        new RegExp("(-shadowcsscontext" + hc,"gim"),
        new RegExp(oc,"gim"),
        new RegExp("-shadowcsscontext","gim"),
        "html{overflow-x:hidden!important}html.i-amphtml-fie{height:100%!important;width:100%!important}html:not([amp4ads]),html:not([amp4ads]) body{height:auto!important}html:not([amp4ads]) body{margin:0!important}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.i-amphtml-singledoc.i-amphtml-embedded{-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom}html.i-amphtml-fie>body,html.i-amphtml-singledoc>body{overflow:visible!important}html.i-amphtml-fie:not(.i-amphtml-inabox)>body,html.i-amphtml-singledoc:not(.i-amphtml-inabox)>body{position:relative!important}html.i-amphtml-ios-embed-legacy>body{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important}html.i-amphtml-ios-embed{overflow-y:auto!important;position:static}#i-amphtml-wrapper{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;display:block!important}html.i-amphtml-ios-embed.i-amphtml-ios-overscroll,html.i-amphtml-ios-embed.i-amphtml-ios-overscroll>#i-amphtml-wrapper{-webkit-overflow-scrolling:touch!important}#i-amphtml-wrapper>body{position:relative!important;border-top:1px solid transparent!important}#i-amphtml-wrapper+body{visibility:visible}#i-amphtml-wrapper+body .i-amphtml-lightbox-element,#i-amphtml-wrapper+body[i-amphtml-lightbox]{visibility:hidden}#i-amphtml-wrapper+body[i-amphtml-lightbox] .i-amphtml-lightbox-element{visibility:visible}#i-amphtml-wrapper.i-amphtml-scroll-disabled,.i-amphtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}amp-instagram{padding:54px 0px 0px!important;background-color:#fff}amp-iframe iframe{box-sizing:border-box!important}[amp-access][amp-access-hide]{display:none}[subscriptions-dialog],body:not(.i-amphtml-subs-ready) [subscriptions-action],body:not(.i-amphtml-subs-ready) [subscriptions-section]{display:none!important}amp-experiment,amp-live-list>[update]{display:none}amp-list[resizable-children]>.i-amphtml-loading-container.amp-hidden{display:none!important}amp-list [fetch-error],amp-list[load-more] [load-more-button],amp-list[load-more] [load-more-end],amp-list[load-more] [load-more-failed],amp-list[load-more] [load-more-loading]{display:none}amp-list[diffable] div[role=list]{display:block}amp-story-page,amp-story[standalone]{min-height:1px!important;display:block!important;height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;width:100%!important}amp-story[standalone]{background-color:#000!important;position:relative!important}amp-story-page{background-color:#757575}amp-story .amp-active>div,amp-story .i-amphtml-loader-background{display:none!important}amp-story-page:not(:first-of-type):not([distance]):not([active]){transform:translateY(1000vh)!important}amp-autocomplete{position:relative!important;display:inline-block!important}amp-autocomplete>input,amp-autocomplete>textarea{padding:0.5rem;border:1px solid rgba(0,0,0,0.33)}.i-amphtml-autocomplete-results,amp-autocomplete>input,amp-autocomplete>textarea{font-size:1rem;line-height:1.5rem}[amp-fx^=fly-in]{visibility:hidden}amp-script[nodom],amp-script[sandboxed]{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}\n/*# sourceURL=/css/ampdoc.css*/"), cc = "[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill),body noscript>*{display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}body noscript>*{position:absolute!important;width:100%;height:100%;z-index:2}body noscript{display:inline!important}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block;line-height:normal}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}amp-img[i-amphtml-ssr]:not(.i-amphtml-element)>[placeholder]{z-index:auto}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-layout-size-defined>[overflow]{position:absolute}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}amp-story{visibility:hidden!important}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}@media (min-width:1px){:where(amp-accordion>section)>:first-child{margin:0;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}:where(amp-accordion>section)>:last-child{margin:0}}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/";
        Yt = $t,
        Qt(),
        Jt(),
        uc = function(t, i, n) {
            Ds(i, n),
            i && t && tt(i.message) && !(i.message.indexOf(Q) >= 0) && function(t, i) {
                if (Yn(i).isSingleDoc()) {
                    var n = {
                        "errorName": t.name,
                        "errorMessage": t.message
                    };
                    !function(t, i) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                          , r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                        Kn(t).then((function(e) {
                            e && e.triggerEventForTarget(t, i, n, r)
                        }
                        ))
                    }(function(t) {
                        var i = Yn(t).getSingleDoc().getRootNode();
                        return i.documentElement || i.body || i
                    }(i), "user-error", n, !1)
                }
            }(i, t)
        }
        .bind(null, self),
        self.__AMP_REPORT_ERROR = uc;
        var fc, lc = "runtime";
        function vc(t, i) {
            if (t.__AMP_TAG)
                return h();
            t.__AMP_TAG = !0;
            var n = t.AMP || [];
            An(t, "extensions", nc);
            var r = tr(t);
            Fa(t),
            rc(t),
            t.AMP = {
                win: t,
                "_": t.AMP ? t.AMP._ : void 0
            },
            t.AMP.config = {
                urls: {
                    thirdParty: Pt,
                    thirdPartyFrameHost: Ot,
                    thirdPartyFrameRegex: It,
                    cdn: Mt,
                    cdnProxyRegex: xt,
                    localhostRegex: Tt,
                    errorReporting: St,
                    betaErrorReporting: Rt,
                    localDev: _t,
                    trustedViewerHosts: kt,
                    geoApi: Ct
                }
            },
            t.AMP.BaseElement = eu,
            t.AMP.registerElement = r.addElement.bind(r),
            t.AMP.registerTemplate = r.addTemplate.bind(r),
            t.AMP.registerServiceForDoc = r.addService.bind(r),
            t.AMP.isExperimentOn = Ge.bind(null, t),
            t.AMP.toggleExperiment = Ve.bind(null, t),
            t.AMP.setLogLevel = Ht.bind(null),
            t.AMP.setTickFunction = function(t, i) {}
            ;
            var e = i(t, r);
            function s(i) {
                !function(t, i, n) {
                    "function" == typeof i || "high" == i.p ? h().then(n) : (n.displayName = i.n,
                    Xs(t.document, n))
                }(t, i, (function() {
                    e.then((function() {
                        "function" == typeof i ? i(t.AMP, t.AMP.Tv) : r.registerExtension(i.n, i.ev, i.l, i.f, t.AMP)
                    }
                    ))
                }
                ))
            }
            for (var u = 0; u < n.length; u++) {
                var o = n[u];
                if (dc(t, o))
                    n.splice(u--, 1);
                else if ("function" == typeof o || "high" == o.p) {
                    try {
                        s(o)
                    } catch (t) {
                        Qt().error(lc, "Extension failed: ", t, o.n)
                    }
                    n.splice(u--, 1)
                }
            }
            !function(t, i) {
                t.document.body && !function(t) {
                    return ts(t).length > 0
                }(t) ? ar(t).delay(i, 1) : i()
            }(t, (function() {
                t.AMP.push = function(i) {
                    dc(t, i) || s(i)
                }
                ;
                for (var i = 0; i < n.length; i++) {
                    var r = n[i];
                    if (!dc(t, r))
                        try {
                            s(r)
                        } catch (t) {
                            Qt().error(lc, "Extension failed: ", t, r.n)
                        }
                }
                n.length = 0
            }
            )),
            t.AMP.push || (t.AMP.push = n.push.bind(n)),
            sr(t).isIos() && Rr(t.document.documentElement, "cursor", "pointer");
            var a = tr(t);
            return Ki(t) && a.preloadExtension("amp-resize-observer-polyfill"),
            Fi(t) && a.preloadExtension("amp-intersection-observer-polyfill"),
            e
        }
        function dc(t, i) {
            return "function" != typeof i && (!!i.m || "2209142312000" != i.v && (tr(t).reloadExtension(i.n, i.ev, i.l),
            !0))
        }
        function mc(t, i) {
            Xs(self.document, (function() {
                Fa(self),
                qa(t),
                i.coreServicesAvailable(),
                function(t) {
                    var i = new a
                      , n = i.promise
                      , r = i.resolve;
                    mh = ar(t).timeoutPromise(8e3, n, "TrackImpressionPromise timeout").catch((function(t) {
                        Qt().warn("IMPRESSION", t)
                    }
                    ));
                    var e = vr(t.document.documentElement)
                      , s = e.isTrustedViewer()
                      , u = e.getReferrerUrl().then((function(t) {
                        return function(t) {
                            var i = vs(t);
                            return "https:" == i.protocol && gh.some((function(t) {
                                return t.test(i.hostname)
                            }
                            ))
                        }(t)
                    }
                    ));
                    Promise.all([s, u]).then((function(i) {
                        var n = i[0]
                          , e = i[1];
                        if (n || e || Ge(t, "alp")) {
                            var s = function(t) {
                                var i = vr(t.document.documentElement);
                                return i.getParam("replaceUrl") ? i.hasCapability("replaceUrl") ? i.sendMessageAwaitResponse("getReplaceUrl", void 0).then((function(t) {
                                    t && "object" == p(t) ? i.replaceUrl(t.replaceUrl || null) : Qt().warn("IMPRESSION", "get invalid replaceUrl response")
                                }
                                ), (function(t) {
                                    Qt().warn("IMPRESSION", "Error request replaceUrl from viewer", t)
                                }
                                )) : (i.replaceUrl(i.getParam("replaceUrl") || null),
                                h()) : h()
                            }(t)
                              , u = function(t) {
                                var i = Wn(t.document.documentElement)
                                  , n = vr(i).getParam("click");
                                return n ? 0 != n.indexOf("https://") ? (Jt().warn("IMPRESSION", "click fragment param should start with https://. Found ", n),
                                h()) : (zr.getLocation(t).hash && (zr.getLocation(t).hash = ""),
                                i.whenFirstVisible().then((function() {
                                    return function(t, i) {
                                        return pr(t).fetchJson(i, {
                                            credentials: "include"
                                        }).then((function(t) {
                                            return 204 == t.status ? null : t.json()
                                        }
                                        ))
                                    }(t, n)
                                }
                                )).then((function(i) {
                                    !function(t, i) {
                                        if (i) {
                                            var n = i.location
                                              , r = i.tracking_url || n;
                                            if (r && !xs(r) && ((new Image).src = r),
                                            n) {
                                                if (!t.history.replaceState)
                                                    return;
                                                var e = vr(t.document.documentElement)
                                                  , s = gs(zr.getLocation(t).href, yt(vs(n).search));
                                                t.history.replaceState(null, "", s),
                                                e.maybeUpdateFragmentForCct()
                                            }
                                        }
                                    }(t, i)
                                }
                                )).catch((function(t) {
                                    Jt().warn("IMPRESSION", "Error on request clickUrl: ", t)
                                }
                                ))) : h()
                            }(t);
                            Promise.all([s, u]).then((function() {
                                r()
                            }
                            ), (function() {}
                            ))
                        } else
                            r()
                    }
                    ))
                }(self)
            }
            )),
            Xs(self.document, (function() {
                vc(self, (function(t) {
                    return function(t) {
                        var i = t.document.documentElement
                          , n = Yn(t).getSingleDoc();
                        t.AMP.ampdoc = n;
                        var r = vr(i);
                        t.AMP.viewer = r,
                        Dt().development && (t.AMP.toggleRuntime = r.toggleRuntime.bind(r),
                        t.AMP.resources = or(i));
                        var e = mr(i);
                        t.AMP.viewport = {},
                        t.AMP.viewport.getScrollLeft = e.getScrollLeft.bind(e),
                        t.AMP.viewport.getScrollWidth = e.getScrollWidth.bind(e),
                        t.AMP.viewport.getWidth = e.getWidth.bind(e)
                    }(t),
                    (i = t).AMP.installAmpdocServices = qa.bind(null),
                    i.AMP.combinedCss = ac + cc,
                    Mi(t.document).then((function() {
                        Au(t.AMP.ampdoc)
                    }
                    ));
                    var i
                }
                ))
            }
            )),
            Xs(self.document, (function() {
                !function(t) {
                    !function(t) {
                        Pu(t, Iu, Tu)
                    }(t),
                    function(t) {
                        Pu(t, _u, ku)
                    }(t),
                    function(t) {
                        Pu(t, "amp-layout", Su)
                    }(t)
                }(self)
            }
            )),
            Xs(self.document, (function() {
                Au(t),
                dn(self.document).then((function() {
                    return pu()
                }
                ))
            }
            )),
            Xs(self.document, (function() {
                (function(t) {
                    var i = t.document.documentElement;
                    "0" == vr(i).getParam("p2r") && sr(t).isChrome() && new Ja(t.document,mr(i))
                }
                )(self),
                function(t) {
                    var i = t.win;
                    ju(i.document) && t.isSingleDoc() && !i.document.documentElement.hasAttribute("data-amp-auto-lightbox-disable") && Qs(t, (function() {
                        Ba(t).then((function(n) {
                            n || tr(i).installExtensionForDoc(t, "amp-auto-lightbox")
                        }
                        ))
                    }
                    ), 10)
                }(t),
                function(t) {
                    var i = t.win;
                    ju(i.document) && sr(t.win).isStandalone() && Qs(t, (function() {
                        tr(i).installExtensionForDoc(t, "amp-standalone").then((function() {
                            return Hn(t.getBody(), "standalone", "amp-standalone")
                        }
                        )).then((function(t) {
                            return t.initialize()
                        }
                        ))
                    }
                    ), 10)
                }(t),
                function(t) {
                    var i = t.location.href;
                    if (!i.startsWith("about:")) {
                        var n = !1
                          , r = wt(t);
                        Ut(t, r) && (n = "0" !== r.validate),
                        n && function(t, i) {
                            var n = t.createElement("script");
                            console.log("--fx--2--", i),
                            n.src = i,
                            Li(t, n);
                            var r = Xe(n).then((function() {
                                t.head.removeChild(n)
                            }
                            ), (function() {}
                            ));
                            return t.head.appendChild(n),
                            r
                        }(t.document, "".concat(Mt, "/v0/validator_wasm.js")).then((function() {
                            amp.validator.validateUrlAndLog(i, t.document)
                        }
                        ))
                    }
                }(self),
                function(t) {
                    Zt(t.defaultView);
                    var i = t.defaultView;
                    Mi(t).then((function() {
                        return function(t) {
                            var i = ts(t).map((function(i) {
                                var n = function(t, i) {
                                    return Nn(t, i)
                                }(t, i).then((function(t) {
                                    return t && function(t) {
                                        return "function" == typeof t.whenReady
                                    }(t) ? t.whenReady().then((function() {
                                        return t
                                    }
                                    )) : t
                                }
                                ));
                                return ar(t).timeoutPromise(3e3, n, "Render timeout waiting for service ".concat(i, " to be ready."))
                            }
                            ));
                            return Promise.all(i)
                        }(i)
                    }
                    )).catch((function(t) {
                        return d(t),
                        []
                    }
                    )).then((function(n) {
                        rs = !0,
                        t.body.getBoundingClientRect(),
                        ss(t),
                        Rn(t).signals().signal(Oe),
                        n.length > 0 && or(t.documentElement).schedulePass(1, !0);
                        try {
                            var r = er(i);
                            r.tick("mbv"),
                            r.flush()
                        } catch (t) {}
                    }
                    ))
                }(self.document),
                function(t) {
                    dn(t).then((function() {
                        var i = t.defaultView;
                        if (i) {
                            var n = ur(i)
                              , r = Zn(t.documentElement)
                              , e = Wn(t);
                            n.url(e, r.sourceUrl),
                            n.url(e, r.canonicalUrl)
                        }
                    }
                    ))
                }(self.document)
            }
            ), !0),
            Xs(self.document, (function() {
                i.tick("e_is"),
                or(t).ampInitComplete(),
                i.flush()
            }
            ))
        }
        self.location && (self.location.originalHash = self.location.hash);
        try {
            !function(t) {
                t.onerror = Ls,
                t.addEventListener("unhandledrejection", (function(t) {
                    !t.reason || t.reason.message !== _s && t.reason.message !== ks && "AbortError" !== t.reason.message ? Ds(t.reason || new Error("rejected promise " + t)) : t.preventDefault()
                }
                ))
            }(self),
            function(t, i, n) {
                An(t, "ampdoc", (function() {
                    return new Br(t,!0,void 0)
                }
                ))
            }(self),
            fc = Yn(self)
        } catch (t) {
            throw es(self.document),
            t
        }
        Xs(self.document, (function() {
            var t = fc.getAmpDoc(self.document);
            _h(self),
            An(self, "performance", Ya);
            var i = er(self);
            (function(t) {
                fn(t.document, (function() {
                    return function(t) {
                        var i = 1500
                          , n = t.performance;
                        n && n.timing && n.timing.navigationStart && (i = Date.now() - n.timing.navigationStart);
                        var r = Math.max(1, 2100 - i);
                        t.setTimeout((function() {
                            Ka(t);
                            var i = t.document.styleSheets;
                            if (i) {
                                for (var n = t.document.querySelectorAll('link[rel~="stylesheet"]:not([href^="https://translate.googleapis.com/translate_static/css/"]):not([href^="'.concat(vi(Mt), '"])')), e = [], s = 0; s < n.length; s++) {
                                    for (var u = n[s], o = !1, h = 0; h < i.length; h++)
                                        if (i[h].ownerNode == u) {
                                            o = !0;
                                            break
                                        }
                                    o || e.push(u)
                                }
                                for (var a = function(i) {
                                    var n = e[i]
                                      , s = n.media || "all";
                                    n.media = "print",
                                    n.onload = function() {
                                        n.media = s,
                                        Ka(t)
                                    }
                                    ,
                                    n.setAttribute("i-amphtml-timeout", r),
                                    n.parentNode.insertBefore(n, n.nextSibling)
                                }, c = 0; c < e.length; c++)
                                    a(c)
                            }
                        }
                        ), r)
                    }(t)
                }
                ))
            }
            )(self),
            i.tick("is"),
            is(t, ac + cc, (function() {
                return mc(t, i)
            }
            ), !0, "amp-runtime")
        }
        )),
        self.console && (console.info || console.log).call(console, "Powered by AMP ⚡ HTML – Version ".concat("2209142312000"), self.location.href),
        self.document.documentElement.setAttribute("amp-version", "2209142312000")
    }()
} catch (t) {
    throw setTimeout((function() {
        var t = document.body.style;
        t.opacity = 1,
        t.visibility = "visible",
        t.animation = "none",
        t.WebkitAnimation = "none;"
    }
    ), 1e3),
    t
}
//# sourceMappingURL=v0.js.map
