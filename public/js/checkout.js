!function () {
    function e(e) {
        function t(e, t) {
            var n = (65535 & e) + (65535 & t), r = (e >> 16) + (t >> 16) + (n >> 16);
            return r << 16 | 65535 & n
        }

        function n(e, t) {
            return e << t | e >>> 32 - t
        }

        function r(e, r, i, o, a, s) {
            return t(n(t(t(r, e), t(o, s)), a), i)
        }

        function i(e, t, n, i, o, a, s) {
            return r(t & n | ~t & i, e, t, o, a, s)
        }

        function o(e, t, n, i, o, a, s) {
            return r(t & i | n & ~i, e, t, o, a, s)
        }

        function a(e, t, n, i, o, a, s) {
            return r(t ^ n ^ i, e, t, o, a, s)
        }

        function s(e, t, n, i, o, a, s) {
            return r(n ^ (t | ~i), e, t, o, a, s)
        }

        function u(e, n) {
            e[n >> 5] |= 128 << n % 32, e[(n + 64 >>> 9 << 4) + 14] = n;
            var r, u, l, c, d, h = 1732584193, p = -271733879, f = -1732584194, m = 271733878;
            for (r = 0; r < e.length; r += 16)u = h, l = p, c = f, d = m, h = i(h, p, f, m, e[r], 7, -680876936), m = i(m, h, p, f, e[r + 1], 12, -389564586), f = i(f, m, h, p, e[r + 2], 17, 606105819), p = i(p, f, m, h, e[r + 3], 22, -1044525330), h = i(h, p, f, m, e[r + 4], 7, -176418897), m = i(m, h, p, f, e[r + 5], 12, 1200080426), f = i(f, m, h, p, e[r + 6], 17, -1473231341), p = i(p, f, m, h, e[r + 7], 22, -45705983), h = i(h, p, f, m, e[r + 8], 7, 1770035416), m = i(m, h, p, f, e[r + 9], 12, -1958414417), f = i(f, m, h, p, e[r + 10], 17, -42063), p = i(p, f, m, h, e[r + 11], 22, -1990404162), h = i(h, p, f, m, e[r + 12], 7, 1804603682), m = i(m, h, p, f, e[r + 13], 12, -40341101), f = i(f, m, h, p, e[r + 14], 17, -1502002290), p = i(p, f, m, h, e[r + 15], 22, 1236535329), h = o(h, p, f, m, e[r + 1], 5, -165796510), m = o(m, h, p, f, e[r + 6], 9, -1069501632), f = o(f, m, h, p, e[r + 11], 14, 643717713), p = o(p, f, m, h, e[r], 20, -373897302), h = o(h, p, f, m, e[r + 5], 5, -701558691), m = o(m, h, p, f, e[r + 10], 9, 38016083), f = o(f, m, h, p, e[r + 15], 14, -660478335), p = o(p, f, m, h, e[r + 4], 20, -405537848), h = o(h, p, f, m, e[r + 9], 5, 568446438), m = o(m, h, p, f, e[r + 14], 9, -1019803690), f = o(f, m, h, p, e[r + 3], 14, -187363961), p = o(p, f, m, h, e[r + 8], 20, 1163531501), h = o(h, p, f, m, e[r + 13], 5, -1444681467), m = o(m, h, p, f, e[r + 2], 9, -51403784), f = o(f, m, h, p, e[r + 7], 14, 1735328473), p = o(p, f, m, h, e[r + 12], 20, -1926607734), h = a(h, p, f, m, e[r + 5], 4, -378558), m = a(m, h, p, f, e[r + 8], 11, -2022574463), f = a(f, m, h, p, e[r + 11], 16, 1839030562), p = a(p, f, m, h, e[r + 14], 23, -35309556), h = a(h, p, f, m, e[r + 1], 4, -1530992060), m = a(m, h, p, f, e[r + 4], 11, 1272893353), f = a(f, m, h, p, e[r + 7], 16, -155497632), p = a(p, f, m, h, e[r + 10], 23, -1094730640), h = a(h, p, f, m, e[r + 13], 4, 681279174), m = a(m, h, p, f, e[r], 11, -358537222), f = a(f, m, h, p, e[r + 3], 16, -722521979), p = a(p, f, m, h, e[r + 6], 23, 76029189), h = a(h, p, f, m, e[r + 9], 4, -640364487), m = a(m, h, p, f, e[r + 12], 11, -421815835), f = a(f, m, h, p, e[r + 15], 16, 530742520), p = a(p, f, m, h, e[r + 2], 23, -995338651), h = s(h, p, f, m, e[r], 6, -198630844), m = s(m, h, p, f, e[r + 7], 10, 1126891415), f = s(f, m, h, p, e[r + 14], 15, -1416354905), p = s(p, f, m, h, e[r + 5], 21, -57434055), h = s(h, p, f, m, e[r + 12], 6, 1700485571), m = s(m, h, p, f, e[r + 3], 10, -1894986606), f = s(f, m, h, p, e[r + 10], 15, -1051523), p = s(p, f, m, h, e[r + 1], 21, -2054922799), h = s(h, p, f, m, e[r + 8], 6, 1873313359), m = s(m, h, p, f, e[r + 15], 10, -30611744), f = s(f, m, h, p, e[r + 6], 15, -1560198380), p = s(p, f, m, h, e[r + 13], 21, 1309151649), h = s(h, p, f, m, e[r + 4], 6, -145523070), m = s(m, h, p, f, e[r + 11], 10, -1120210379), f = s(f, m, h, p, e[r + 2], 15, 718787259), p = s(p, f, m, h, e[r + 9], 21, -343485551), h = t(h, u), p = t(p, l), f = t(f, c), m = t(m, d);
            return [h, p, f, m]
        }

        function l(e) {
            var t, n = "", r = 32 * e.length;
            for (t = 0; r > t; t += 8)n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }

        function c(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1)n[t] = 0;
            var r = 8 * e.length;
            for (t = 0; r > t; t += 8)n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }

        function d(e) {
            return l(u(c(e), 8 * e.length))
        }

        function h(e) {
            var t, n, r = "0123456789abcdef", i = "";
            for (n = 0; n < e.length; n += 1)t = e.charCodeAt(n), i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
            return i
        }

        function p(e) {
            return unescape(encodeURIComponent(e))
        }

        function f(e) {
            return d(p(e))
        }

        function m(e) {
            return h(f(e))
        }

        return m(e)
    }

    var t = function (e) {
        var t = {exports: {}};
        return e.call(t.exports, t, t.exports), t.exports
    }, n = window, r = function (e, t) {
        if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }, i = function (e, t) {
        if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }, o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value"in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(), a = function (e, t) {
        if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }, s = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, u = function (e) {
        return e && e.__esModule ? e : {"default": e}
    }, l = function bt(e, t, n) {
        null === e && (e = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(e, t);
        if (void 0 === r) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : bt(i, t, n)
        }
        if ("value"in r)return r.value;
        var o = r.get;
        return void 0 === o ? void 0 : o.call(n)
    }, c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, d = function (e, t) {
        var n = {};
        for (var r in e)t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    };
    !function (e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
            if (!e.document)throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function (e, t) {
        function n(e) {
            var t = "length"in e && e.length, n = ie.type(e);
            return "function" === n || ie.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function r(e, t, n) {
            if (ie.isFunction(t))return ie.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            });
            if (t.nodeType)return ie.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (he.test(t))return ie.filter(t, e, n);
                t = ie.filter(t, e)
            }
            return ie.grep(e, function (e) {
                return ie.inArray(e, t) >= 0 !== n
            })
        }

        function i(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function o(e) {
            var t = be[e] = {};
            return ie.each(e.match(_e) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (fe.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
        }

        function s() {
            (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (a(), ie.ready())
        }

        function u(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var r = "data-" + t.replace(Ee, "-$1").toLowerCase();
                if (n = e.getAttribute(r), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? ie.parseJSON(n) : n
                    } catch (i) {
                    }
                    ie.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function l(e) {
            var t;
            for (t in e)if (("data" !== t || !ie.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
            return !0
        }

        function c(e, t, n, r) {
            if (ie.acceptData(e)) {
                var i, o, a = ie.expando, s = e.nodeType, u = s ? ie.cache : e, l = s ? e[a] : e[a] && a;
                if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t)return l || (l = s ? e[a] = K.pop() || ie.guid++ : a), u[l] || (u[l] = s ? {} : {toJSON: ie.noop}), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = ie.extend(u[l], t) : u[l].data = ie.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ie.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[ie.camelCase(t)])) : i = o, i
            }
        }

        function d(e, t, n) {
            if (ie.acceptData(e)) {
                var r, i, o = e.nodeType, a = o ? ie.cache : e, s = o ? e[ie.expando] : ie.expando;
                if (a[s]) {
                    if (t && (r = n ? a[s] : a[s].data)) {
                        ie.isArray(t) ? t = t.concat(ie.map(t, ie.camelCase)) : t in r ? t = [t] : (t = ie.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                        for (; i--;)delete r[t[i]];
                        if (n ? !l(r) : !ie.isEmptyObject(r))return
                    }
                    (n || (delete a[s].data, l(a[s]))) && (o ? ie.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function h() {
            return !0
        }

        function p() {
            return !1
        }

        function f() {
            try {
                return fe.activeElement
            } catch (e) {
            }
        }

        function m(e) {
            var t = Me.split("|"), n = e.createDocumentFragment();
            if (n.createElement)for (; t.length;)n.createElement(t.pop());
            return n
        }

        function g(e, t) {
            var n, r, i = 0, o = typeof e.getElementsByTagName !== Se ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Se ? e.querySelectorAll(t || "*") : void 0;
            if (!o)for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)!t || ie.nodeName(r, t) ? o.push(r) : ie.merge(o, g(r, t));
            return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], o) : o
        }

        function y(e) {
            Pe.test(e.type) && (e.defaultChecked = e.checked)
        }

        function v(e, t) {
            return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function _(e) {
            return e.type = (null !== ie.find.attr(e, "type")) + "/" + e.type, e
        }

        function b(e) {
            var t = Ge.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function A(e, t) {
            for (var n, r = 0; null != (n = e[r]); r++)ie._data(n, "globalEval", !t || ie._data(t[r], "globalEval"))
        }

        function N(e, t) {
            if (1 === t.nodeType && ie.hasData(e)) {
                var n, r, i, o = ie._data(e), a = ie._data(t, o), s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)for (r = 0, i = s[n].length; i > r; r++)ie.event.add(t, n, s[n][r])
                }
                a.data && (a.data = ie.extend({}, a.data))
            }
        }

        function S(e, t) {
            var n, r, i;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[ie.expando]) {
                    i = ie._data(t);
                    for (r in i.events)ie.removeEvent(t, r, i.handle);
                    t.removeAttribute(ie.expando)
                }
                "script" === n && t.text !== e.text ? (_(t).text = e.text, b(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !ie.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Pe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function C(t, n) {
            var r, i = ie(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : ie.css(i[0], "display");
            return i.detach(), o
        }

        function E(e) {
            var t = fe, n = Ze[e];
            return n || (n = C(e, t), "none" !== n && n || (Qe = (Qe || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Qe[0].contentWindow || Qe[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Qe.detach()), Ze[e] = n), n
        }

        function w(e, t) {
            return {
                get: function () {
                    var n = e();
                    if (null != n)return n ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function T(e, t) {
            if (t in e)return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ht.length; i--;)if (t = ht[i] + n, t in e)return t;
            return r
        }

        function $(e, t) {
            for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)r = e[a], r.style && (o[a] = ie._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && $e(r) && (o[a] = ie._data(r, "olddisplay", E(r.nodeName)))) : (i = $e(r), (n && "none" !== n || !i) && ie._data(r, "olddisplay", i ? n : ie.css(r, "display"))));
            for (a = 0; s > a; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function x(e, t, n) {
            var r = ut.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function P(e, t, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += ie.css(e, n + Te[o], !0, i)), r ? ("content" === n && (a -= ie.css(e, "padding" + Te[o], !0, i)), "margin" !== n && (a -= ie.css(e, "border" + Te[o] + "Width", !0, i))) : (a += ie.css(e, "padding" + Te[o], !0, i), "padding" !== n && (a += ie.css(e, "border" + Te[o] + "Width", !0, i)));
            return a
        }

        function k(e, t, n) {
            var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = et(e), a = ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, o);
            if (0 >= i || null == i) {
                if (i = tt(e, t, o), (0 > i || null == i) && (i = e.style[t]), rt.test(i))return i;
                r = a && (ne.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + P(e, t, n || (a ? "border" : "content"), r, o) + "px"
        }

        function D(e, t, n, r, i) {
            return new D.prototype.init(e, t, n, r, i)
        }

        function R() {
            return setTimeout(function () {
                pt = void 0
            }), pt = ie.now()
        }

        function O(e, t) {
            var n, r = {height: e}, i = 0;
            for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = Te[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function I(e, t, n) {
            for (var r, i = (_t[t] || []).concat(_t["*"]), o = 0, a = i.length; a > o; o++)if (r = i[o].call(n, t, e))return r
        }

        function M(e, t, n) {
            var r, i, o, a, s, u, l, c, d = this, h = {}, p = e.style, f = e.nodeType && $e(e), m = ie._data(e, "fxshow");
            n.queue || (s = ie._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
                s.unqueued || u()
            }), s.unqueued++, d.always(function () {
                d.always(function () {
                    s.unqueued--, ie.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = ie.css(e, "display"), c = "none" === l ? ie._data(e, "olddisplay") || E(e.nodeName) : l, "inline" === c && "none" === ie.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (r in t)if (i = t[r], mt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r])continue;
                    f = !0
                }
                h[r] = m && m[r] || ie.style(e, r)
            } else l = void 0;
            if (ie.isEmptyObject(h))"inline" === ("none" === l ? E(e.nodeName) : l) && (p.display = l); else {
                m ? "hidden"in m && (f = m.hidden) : m = ie._data(e, "fxshow", {}), o && (m.hidden = !f), f ? ie(e).show() : d.done(function () {
                    ie(e).hide()
                }), d.done(function () {
                    var t;
                    ie._removeData(e, "fxshow");
                    for (t in h)ie.style(e, t, h[t])
                });
                for (r in h)a = I(f ? m[r] : 0, r, d), r in m || (m[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function L(e, t) {
            var n, r, i, o, a;
            for (n in e)if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ie.cssHooks[r], a && "expand"in a) {
                o = a.expand(o), delete e[r];
                for (n in o)n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
        }

        function F(e, t, n) {
            var r, i, o = 0, a = vt.length, s = ie.Deferred().always(function () {
                delete u.elem
            }), u = function () {
                if (i)return !1;
                for (var t = pt || R(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++)l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
            }, l = s.promise({
                elem: e,
                props: ie.extend({}, t),
                opts: ie.extend(!0, {specialEasing: {}}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || R(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = ie.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0, r = t ? l.tweens.length : 0;
                    if (i)return this;
                    for (i = !0; r > n; n++)l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }), c = l.props;
            for (L(c, l.opts.specialEasing); a > o; o++)if (r = vt[o].call(l, e, c, l.opts))return r;
            return ie.map(c, I, l), ie.isFunction(l.opts.start) && l.opts.start.call(e, l), ie.fx.timer(ie.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function B(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0, o = t.toLowerCase().match(_e) || [];
                if (ie.isFunction(n))for (; r = o[i++];)"+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function j(e, t, n, r) {
            function i(s) {
                var u;
                return o[s] = !0, ie.each(e[s] || [], function (e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
                }), u
            }

            var o = {}, a = e === zt;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }

        function U(e, t) {
            var n, r, i = ie.ajaxSettings.flatOptions || {};
            for (r in t)void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
            return n && ie.extend(!0, e, n), e
        }

        function H(e, t, n) {
            for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];)u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)for (a in s)if (s[a] && s[a].test(i)) {
                u.unshift(a);
                break
            }
            if (u[0]in n)o = u[0]; else {
                for (a in n) {
                    if (!u[0] || e.converters[a + " " + u[0]]) {
                        o = a;
                        break
                    }
                    r || (r = a)
                }
                o = o || r
            }
            return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
        }

        function z(e, t, n, r) {
            var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
            if (c[1])for (a in e.converters)l[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())if ("*" === o)o = u; else if ("*" !== u && u !== o) {
                if (a = l[u + " " + o] || l["* " + o], !a)for (i in l)if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                    a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                    break
                }
                if (a !== !0)if (a && e["throws"])t = a(t); else try {
                    t = a(t)
                } catch (d) {
                    return {state: "parsererror", error: a ? d : "No conversion from " + u + " to " + o}
                }
            }
            return {state: "success", data: t}
        }

        function V(e, t, n, r) {
            var i;
            if (ie.isArray(t))ie.each(t, function (t, i) {
                n || Gt.test(e) ? r(e, i) : V(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            }); else if (n || "object" !== ie.type(t))r(e, t); else for (i in t)V(e + "[" + i + "]", t[i], n, r)
        }

        function W() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {
            }
        }

        function q() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {
            }
        }

        function G(e) {
            return ie.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }

        var K = [], Y = K.slice, X = K.concat, J = K.push, Q = K.indexOf, Z = {}, ee = Z.toString, te = Z.hasOwnProperty, ne = {}, re = "1.11.3", ie = function (e, t) {
            return new ie.fn.init(e, t)
        }, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ae = /^-ms-/, se = /-([\da-z])/gi, ue = function (e, t) {
            return t.toUpperCase()
        };
        ie.fn = ie.prototype = {
            jquery: re, constructor: ie, selector: "", length: 0, toArray: function () {
                return Y.call(this)
            }, get: function (e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
            }, pushStack: function (e) {
                var t = ie.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            }, each: function (e, t) {
                return ie.each(this, e, t)
            }, map: function (e) {
                return this.pushStack(ie.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(Y.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: J, sort: K.sort, splice: K.splice
        }, ie.extend = ie.fn.extend = function () {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ie.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)if (null != (i = arguments[s]))for (r in i)e = a[r], n = i[r], a !== n && (l && n && (ie.isPlainObject(n) || (t = ie.isArray(n))) ? (t ? (t = !1, o = e && ie.isArray(e) ? e : []) : o = e && ie.isPlainObject(e) ? e : {}, a[r] = ie.extend(l, o, n)) : void 0 !== n && (a[r] = n));
            return a
        }, ie.extend({
            expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isFunction: function (e) {
                return "function" === ie.type(e)
            }, isArray: Array.isArray || function (e) {
                return "array" === ie.type(e)
            }, isWindow: function (e) {
                return null != e && e == e.window
            }, isNumeric: function (e) {
                return !ie.isArray(e) && e - parseFloat(e) + 1 >= 0
            }, isEmptyObject: function (e) {
                var t;
                for (t in e)return !1;
                return !0
            }, isPlainObject: function (e) {
                var t;
                if (!e || "object" !== ie.type(e) || e.nodeType || ie.isWindow(e))return !1;
                try {
                    if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf"))return !1
                } catch (n) {
                    return !1
                }
                if (ne.ownLast)for (t in e)return te.call(e, t);
                for (t in e);
                return void 0 === t || te.call(e, t)
            }, type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
            }, globalEval: function (t) {
                t && ie.trim(t) && (e.execScript || function (t) {
                    e.eval.call(e, t)
                })(t)
            }, camelCase: function (e) {
                return e.replace(ae, "ms-").replace(se, ue)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }, each: function (e, t, r) {
                var i, o = 0, a = e.length, s = n(e);
                if (r) {
                    if (s)for (; a > o && (i = t.apply(e[o], r), i !== !1); o++); else for (o in e)if (i = t.apply(e[o], r), i === !1)break
                } else if (s)for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++); else for (o in e)if (i = t.call(e[o], o, e[o]), i === !1)break;
                return e
            }, trim: function (e) {
                return null == e ? "" : (e + "").replace(oe, "")
            }, makeArray: function (e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? ie.merge(r, "string" == typeof e ? [e] : e) : J.call(r, e)), r
            }, inArray: function (e, t, n) {
                var r;
                if (t) {
                    if (Q)return Q.call(t, e, n);
                    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in t && t[n] === e)return n
                }
                return -1
            }, merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; n > r;)e[i++] = t[r++];
                if (n !== n)for (; void 0 !== t[r];)e[i++] = t[r++];
                return e.length = i, e
            }, grep: function (e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)r = !t(e[o], o), r !== s && i.push(e[o]);
                return i
            }, map: function (e, t, r) {
                var i, o = 0, a = e.length, s = n(e), u = [];
                if (s)for (; a > o; o++)i = t(e[o], o, r), null != i && u.push(i); else for (o in e)i = t(e[o], o, r), null != i && u.push(i);
                return X.apply([], u)
            }, guid: 1, proxy: function (e, t) {
                var n, r, i;
                return "string" == typeof t && (i = e[t], t = e, e = i), ie.isFunction(e) ? (n = Y.call(arguments, 2), r = function () {
                    return e.apply(t || this, n.concat(Y.call(arguments)))
                }, r.guid = e.guid = e.guid || ie.guid++, r) : void 0
            }, now: function () {
                return +new Date
            }, support: ne
        }), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            Z["[object " + t + "]"] = t.toLowerCase()
        });
        var le = function (e) {
            function t(e, t, n, r) {
                var i, o, a, s, u, l, d, p, f, m;
                if ((t ? t.ownerDocument || t : j) !== D && k(t), t = t || D, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s)return n;
                if (!r && O) {
                    if (11 !== s && (i = ve.exec(e)))if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode)return n;
                            if (o.id === a)return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && F(t, o) && o.id === a)return n.push(o), n
                    } else {
                        if (i[2])return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && A.getElementsByClassName)return Q.apply(n, t.getElementsByClassName(a)), n
                    }
                    if (A.qsa && (!I || !I.test(e))) {
                        if (p = d = B, f = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (l = E(e), (d = t.getAttribute("id")) ? p = d.replace(be, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;)l[u] = p + h(l[u]);
                            f = _e.test(e) && c(t.parentNode) || t, m = l.join(",")
                        }
                        if (m)try {
                            return Q.apply(n, f.querySelectorAll(m)), n
                        } catch (g) {
                        } finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return T(e.replace(ue, "$1"), t, n, r)
            }

            function n() {
                function e(n, r) {
                    return t.push(n + " ") > N.cacheLength && delete e[t.shift()], e[n + " "] = r
                }

                var t = [];
                return e
            }

            function r(e) {
                return e[B] = !0, e
            }

            function i(e) {
                var t = D.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), r = e.length; r--;)N.attrHandle[n[r]] = t
            }

            function a(e, t) {
                var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                if (r)return r;
                if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function u(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function l(e) {
                return r(function (t) {
                    return t = +t, r(function (n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function d() {
            }

            function h(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
                return r
            }

            function p(e, t, n) {
                var r = t.dir, i = n && "parentNode" === r, o = H++;
                return t.first ? function (t, n, o) {
                    for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
                } : function (t, n, a) {
                    var s, u, l = [U, o];
                    if (a) {
                        for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, a))return !0
                    } else for (; t = t[r];)if (1 === t.nodeType || i) {
                        if (u = t[B] || (t[B] = {}), (s = u[r]) && s[0] === U && s[1] === o)return l[2] = s[2];
                        if (u[r] = l, l[2] = e(t, n, a))return !0
                    }
                }
            }

            function f(e) {
                return e.length > 1 ? function (t, n, r) {
                    for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, r) {
                for (var i = 0, o = n.length; o > i; i++)t(e, n[i], r);
                return r
            }

            function g(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
                return a
            }

            function y(e, t, n, i, o, a) {
                return i && !i[B] && (i = y(i)), o && !o[B] && (o = y(o, a)), r(function (r, a, s, u) {
                    var l, c, d, h = [], p = [], f = a.length, y = r || m(t || "*", s.nodeType ? [s] : s, []), v = !e || !r && t ? y : g(y, h, e, s, u), _ = n ? o || (r ? e : f || i) ? [] : a : v;
                    if (n && n(v, _, s, u), i)for (l = g(_, p), i(l, [], s, u), c = l.length; c--;)(d = l[c]) && (_[p[c]] = !(v[p[c]] = d));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = _.length; c--;)(d = _[c]) && l.push(v[c] = d);
                                o(null, _ = [], l, u)
                            }
                            for (c = _.length; c--;)(d = _[c]) && (l = o ? ee(r, d) : h[c]) > -1 && (r[l] = !(a[l] = d))
                        }
                    } else _ = g(_ === a ? _.splice(f, _.length) : _), o ? o(null, a, _, u) : Q.apply(a, _)
                })
            }

            function v(e) {
                for (var t, n, r, i = e.length, o = N.relative[e[0].type], a = o || N.relative[" "], s = o ? 1 : 0, u = p(function (e) {
                    return e === t
                }, a, !0), l = p(function (e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function (e, n, r) {
                    var i = !o && (r || n !== $) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; i > s; s++)if (n = N.relative[e[s].type])c = [p(f(c), n)]; else {
                    if (n = N.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                        for (r = ++s; i > r && !N.relative[e[r].type]; r++);
                        return y(s > 1 && f(c), s > 1 && h(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(ue, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && h(e))
                    }
                    c.push(n)
                }
                return f(c)
            }

            function _(e, n) {
                var i = n.length > 0, o = e.length > 0, a = function (r, a, s, u, l) {
                    var c, d, h, p = 0, f = "0", m = r && [], y = [], v = $, _ = r || o && N.find.TAG("*", l), b = U += null == v ? 1 : Math.random() || .1, A = _.length;
                    for (l && ($ = a !== D && a); f !== A && null != (c = _[f]); f++) {
                        if (o && c) {
                            for (d = 0; h = e[d++];)if (h(c, a, s)) {
                                u.push(c);
                                break
                            }
                            l && (U = b)
                        }
                        i && ((c = !h && c) && p--, r && m.push(c))
                    }
                    if (p += f, i && f !== p) {
                        for (d = 0; h = n[d++];)h(m, y, a, s);
                        if (r) {
                            if (p > 0)for (; f--;)m[f] || y[f] || (y[f] = X.call(u));
                            y = g(y)
                        }
                        Q.apply(u, y), l && !r && y.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (U = b, $ = v), m
                };
                return i ? r(a) : a
            }

            var b, A, N, S, C, E, w, T, $, x, P, k, D, R, O, I, M, L, F, B = "sizzle" + 1 * new Date, j = e.document, U = 0, H = 0, z = n(), V = n(), W = n(), q = function (e, t) {
                return e === t && (P = !0), 0
            }, G = 1 << 31, K = {}.hasOwnProperty, Y = [], X = Y.pop, J = Y.push, Q = Y.push, Z = Y.slice, ee = function (e, t) {
                for (var n = 0, r = e.length; r > n; n++)if (e[n] === t)return n;
                return -1
            }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = re.replace("w", "w#"), oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", se = new RegExp(ne + "+", "g"), ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), he = new RegExp(ae), pe = new RegExp("^" + ie + "$"), fe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ye = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _e = /[+~]/, be = /'|\\/g, Ae = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), Ne = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, Se = function () {
                k()
            };
            try {
                Q.apply(Y = Z.call(j.childNodes), j.childNodes), Y[j.childNodes.length].nodeType
            } catch (Ce) {
                Q = {
                    apply: Y.length ? function (e, t) {
                        J.apply(e, Z.call(t))
                    } : function (e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            A = t.support = {}, C = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, k = t.setDocument = function (e) {
                var t, n, r = e ? e.ownerDocument || e : j;
                return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, R = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)), O = !C(r), A.attributes = i(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), A.getElementsByTagName = i(function (e) {
                    return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                }), A.getElementsByClassName = ye.test(r.getElementsByClassName), A.getById = i(function (e) {
                    return R.appendChild(e).id = B, !r.getElementsByName || !r.getElementsByName(B).length
                }), A.getById ? (N.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && O) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, N.filter.ID = function (e) {
                    var t = e.replace(Ae, Ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete N.find.ID, N.filter.ID = function (e) {
                    var t = e.replace(Ae, Ne);
                    return function (e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), N.find.TAG = A.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : A.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [], i = 0, o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];)1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, N.find.CLASS = A.getElementsByClassName && function (e, t) {
                        return O ? t.getElementsByClassName(e) : void 0
                    }, M = [], I = [], (A.qsa = ye.test(r.querySelectorAll)) && (i(function (e) {
                    R.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + B + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || I.push(".#.+[+~]")
                }), i(function (e) {
                    var t = r.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                })), (A.matchesSelector = ye.test(L = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && i(function (e) {
                    A.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), M.push("!=", ae)
                }), I = I.length && new RegExp(I.join("|")), M = M.length && new RegExp(M.join("|")), t = ye.test(R.compareDocumentPosition), F = t || ye.test(R.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)for (; t = t.parentNode;)if (t === e)return !0;
                    return !1
                }, q = t ? function (e, t) {
                    if (e === t)return P = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !A.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === j && F(j, e) ? -1 : t === r || t.ownerDocument === j && F(j, t) ? 1 : x ? ee(x, e) - ee(x, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t)return P = !0, 0;
                    var n, i = 0, o = e.parentNode, s = t.parentNode, u = [e], l = [t];
                    if (!o || !s)return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : x ? ee(x, e) - ee(x, t) : 0;
                    if (o === s)return a(e, t);
                    for (n = e; n = n.parentNode;)u.unshift(n);
                    for (n = t; n = n.parentNode;)l.unshift(n);
                    for (; u[i] === l[i];)i++;
                    return i ? a(u[i], l[i]) : u[i] === j ? -1 : l[i] === j ? 1 : 0
                }, r) : D
            }, t.matches = function (e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function (e, n) {
                if ((e.ownerDocument || e) !== D && k(e), n = n.replace(de, "='$1']"), A.matchesSelector && O && (!M || !M.test(n)) && (!I || !I.test(n)))try {
                    var r = L.call(e, n);
                    if (r || A.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
                } catch (i) {
                }
                return t(n, D, null, [e]).length > 0
            }, t.contains = function (e, t) {
                return (e.ownerDocument || e) !== D && k(e), F(e, t)
            }, t.attr = function (e, t) {
                (e.ownerDocument || e) !== D && k(e);
                var n = N.attrHandle[t.toLowerCase()], r = n && K.call(N.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                return void 0 !== r ? r : A.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function (e) {
                var t, n = [], r = 0, i = 0;
                if (P = !A.detectDuplicates, x = !A.sortStable && e.slice(0), e.sort(q), P) {
                    for (; t = e[i++];)t === e[i] && (r = n.push(i));
                    for (; r--;)e.splice(n[r], 1)
                }
                return x = null, e
            }, S = t.getText = function (e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)n += S(e)
                    } else if (3 === i || 4 === i)return e.nodeValue
                } else for (; t = e[r++];)n += S(t);
                return n
            }, N = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(Ae, Ne), e[3] = (e[3] || e[4] || e[5] || "").replace(Ae, Ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && he.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(Ae, Ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                        }
                    }, CLASS: function (e) {
                        var t = z[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                    }, ATTR: function (e, n, r) {
                        return function (i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    }, CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                        return 1 === r && 0 === i ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, u) {
                            var l, c, d, h, p, f, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType)return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? g.firstChild : g.lastChild], a && v) {
                                    for (c = g[B] || (g[B] = {}), l = c[e] || [], p = l[0] === U && l[1], h = l[0] === U && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (h = p = 0) || f.pop();)if (1 === d.nodeType && ++h && d === t) {
                                        c[e] = [U, p, h];
                                        break
                                    }
                                } else if (v && (l = (t[B] || (t[B] = {}))[e]) && l[0] === U)h = l[1]; else for (; (d = ++p && d && d[m] || (h = p = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++h || (v && ((d[B] || (d[B] = {}))[e] = [U, h]), d !== t)););
                                return h -= i, h === r || h % r === 0 && h / r >= 0
                            }
                        }
                    }, PSEUDO: function (e, n) {
                        var i, o = N.pseudos[e] || N.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[B] ? o(n) : o.length > 1 ? (i = [e, e, "", n], N.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                            for (var r, i = o(e, n), a = i.length; a--;)r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                        }) : function (e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: r(function (e) {
                        var t = [], n = [], i = w(e.replace(ue, "$1"));
                        return i[B] ? r(function (e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function (e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }), has: r(function (e) {
                        return function (n) {
                            return t(e, n).length > 0
                        }
                    }), contains: r(function (e) {
                        return e = e.replace(Ae, Ne), function (t) {
                            return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                        }
                    }), lang: r(function (e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Ae, Ne).toLowerCase(), function (t) {
                            var n;
                            do if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }), target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function (e) {
                        return e === R
                    }, focus: function (e) {
                        return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: function (e) {
                        return e.disabled === !1
                    }, disabled: function (e) {
                        return e.disabled === !0
                    }, checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                        return !0
                    }, parent: function (e) {
                        return !N.pseudos.empty(e)
                    }, header: function (e) {
                        return ge.test(e.nodeName)
                    }, input: function (e) {
                        return me.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    }, first: l(function () {
                        return [0]
                    }), last: l(function (e, t) {
                        return [t - 1]
                    }), eq: l(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }), even: l(function (e, t) {
                        for (var n = 0; t > n; n += 2)e.push(n);
                        return e
                    }), odd: l(function (e, t) {
                        for (var n = 1; t > n; n += 2)e.push(n);
                        return e
                    }), lt: l(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
                        return e
                    }), gt: l(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;)e.push(r);
                        return e
                    })
                }
            }, N.pseudos.nth = N.pseudos.eq;
            for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})N.pseudos[b] = s(b);
            for (b in{submit: !0, reset: !0})N.pseudos[b] = u(b);
            return d.prototype = N.filters = N.pseudos, N.setFilters = new d, E = t.tokenize = function (e, n) {
                var r, i, o, a, s, u, l, c = V[e + " "];
                if (c)return n ? 0 : c.slice(0);
                for (s = e, u = [], l = N.preFilter; s;) {
                    (!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(ue, " ")
                    }), s = s.slice(r.length));
                    for (a in N.filter)!(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r)break
                }
                return n ? s.length : s ? t.error(e) : V(e, u).slice(0)
            }, w = t.compile = function (e, t) {
                var n, r = [], i = [], o = W[e + " "];
                if (!o) {
                    for (t || (t = E(e)), n = t.length; n--;)o = v(t[n]), o[B] ? r.push(o) : i.push(o);
                    o = W(e, _(i, r)), o.selector = e
                }
                return o
            }, T = t.select = function (e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e, d = !r && E(e = l.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && A.getById && 9 === t.nodeType && O && N.relative[o[1].type]) {
                        if (t = (N.find.ID(a.matches[0].replace(Ae, Ne), t) || [])[0], !t)return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !N.relative[s = a.type]);)if ((u = N.find[s]) && (r = u(a.matches[0].replace(Ae, Ne), _e.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && h(o), !e)return Q.apply(n, r), n;
                        break
                    }
                }
                return (l || w(e, d))(r, t, !O, n, _e.test(e) && c(t.parentNode) || t), n
            }, A.sortStable = B.split("").sort(q).join("") === B, A.detectDuplicates = !!P, k(), A.sortDetached = i(function (e) {
                return 1 & e.compareDocumentPosition(D.createElement("div"))
            }), i(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function (e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), A.attributes && i(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), i(function (e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function (e, t, n) {
                var r;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), t
        }(e);
        ie.find = le, ie.expr = le.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = le.uniqueSort, ie.text = le.getText, ie.isXMLDoc = le.isXML, ie.contains = le.contains;
        var ce = ie.expr.match.needsContext, de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, he = /^.[^:#\[\.,]*$/;
        ie.filter = function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, ie.fn.extend({
            find: function (e) {
                var t, n = [], r = this, i = r.length;
                if ("string" != typeof e)return this.pushStack(ie(e).filter(function () {
                    for (t = 0; i > t; t++)if (ie.contains(r[t], this))return !0
                }));
                for (t = 0; i > t; t++)ie.find(e, r[t], n);
                return n = this.pushStack(i > 1 ? ie.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            }, filter: function (e) {
                return this.pushStack(r(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(r(this, e || [], !0))
            }, is: function (e) {
                return !!r(this, "string" == typeof e && ce.test(e) ? ie(e) : e || [], !1).length
            }
        });
        var pe, fe = e.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = ie.fn.init = function (e, t) {
            var n, r;
            if (!e)return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : fe, !0)), de.test(n[1]) && ie.isPlainObject(t))for (n in t)ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = fe.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2])return pe.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = fe, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this))
        };
        ge.prototype = ie.fn, pe = ie(fe);
        var ye = /^(?:parents|prev(?:Until|All))/, ve = {children: !0, contents: !0, next: !0, prev: !0};
        ie.extend({
            dir: function (e, t, n) {
                for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ie(i).is(n));)1 === i.nodeType && r.push(i), i = i[t];
                return r
            }, sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), ie.fn.extend({
            has: function (e) {
                var t, n = ie(e, this), r = n.length;
                return this.filter(function () {
                    for (t = 0; r > t; t++)if (ie.contains(this, n[t]))return !0
                })
            }, closest: function (e, t) {
                for (var n, r = 0, i = this.length, o = [], a = ce.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? ie.unique(o) : o)
            }, index: function (e) {
                return e ? "string" == typeof e ? ie.inArray(this[0], ie(e)) : ie.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ie.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return ie.dir(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return ie.dir(e, "parentNode", n)
            }, next: function (e) {
                return i(e, "nextSibling")
            }, prev: function (e) {
                return i(e, "previousSibling")
            }, nextAll: function (e) {
                return ie.dir(e, "nextSibling")
            }, prevAll: function (e) {
                return ie.dir(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return ie.dir(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return ie.dir(e, "previousSibling", n)
            }, siblings: function (e) {
                return ie.sibling((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return ie.sibling(e.firstChild)
            }, contents: function (e) {
                return ie.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ie.merge([], e.childNodes)
            }
        }, function (e, t) {
            ie.fn[e] = function (n, r) {
                var i = ie.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ie.filter(r, i)), this.length > 1 && (ve[e] || (i = ie.unique(i)), ye.test(e) && (i = i.reverse())), this.pushStack(i)
            }
        });
        var _e = /\S+/g, be = {};
        ie.Callbacks = function (e) {
            e = "string" == typeof e ? be[e] || o(e) : ie.extend({}, e);
            var t, n, r, i, a, s, u = [], l = !e.once && [], c = function (o) {
                for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = u.length, t = !0; u && i > a; a++)if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
                t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable())
            }, d = {
                add: function () {
                    if (u) {
                        var r = u.length;
                        !function o(t) {
                            ie.each(t, function (t, n) {
                                var r = ie.type(n);
                                "function" === r ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), t ? i = u.length : n && (s = r, c(n))
                    }
                    return this
                }, remove: function () {
                    return u && ie.each(arguments, function (e, n) {
                        for (var r; (r = ie.inArray(n, u, r)) > -1;)u.splice(r, 1), t && (i >= r && i--, a >= r && a--)
                    }), this
                }, has: function (e) {
                    return e ? ie.inArray(e, u) > -1 : !(!u || !u.length)
                }, empty: function () {
                    return u = [], i = 0, this
                }, disable: function () {
                    return u = l = n = void 0, this
                }, disabled: function () {
                    return !u
                }, lock: function () {
                    return l = void 0, n || d.disable(), this
                }, locked: function () {
                    return !l
                }, fireWith: function (e, n) {
                    return !u || r && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this
                }, fire: function () {
                    return d.fireWith(this, arguments), this
                }, fired: function () {
                    return !!r
                }
            };
            return d
        }, ie.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", ie.Callbacks("once memory"), "resolved"], ["reject", "fail", ie.Callbacks("once memory"), "rejected"], ["notify", "progress", ie.Callbacks("memory")]], n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return ie.Deferred(function (n) {
                            ie.each(t, function (t, o) {
                                var a = ie.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? ie.extend(e, r) : r
                    }
                }, i = {};
                return r.pipe = r.then, ie.each(t, function (e, o) {
                    var a = o[2], s = o[3];
                    r[o[1]] = a.add, s && a.add(function () {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this
                    }, i[o[0] + "With"] = a.fireWith
                }), r.promise(i), e && e.call(i, i), i
            }, when: function (e) {
                var t, n, r, i = 0, o = Y.call(arguments), a = o.length, s = 1 !== a || e && ie.isFunction(e.promise) ? a : 0, u = 1 === s ? e : ie.Deferred(), l = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
                if (a > 1)for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++)o[i] && ie.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
                return s || u.resolveWith(r, o), u.promise()
            }
        });
        var Ae;
        ie.fn.ready = function (e) {
            return ie.ready.promise().done(e), this
        }, ie.extend({
            isReady: !1, readyWait: 1, holdReady: function (e) {
                e ? ie.readyWait++ : ie.ready(!0)
            }, ready: function (e) {
                if (e === !0 ? !--ie.readyWait : !ie.isReady) {
                    if (!fe.body)return setTimeout(ie.ready);
                    ie.isReady = !0, e !== !0 && --ie.readyWait > 0 || (Ae.resolveWith(fe, [ie]), ie.fn.triggerHandler && (ie(fe).triggerHandler("ready"), ie(fe).off("ready")))
                }
            }
        }), ie.ready.promise = function (t) {
            if (!Ae)if (Ae = ie.Deferred(), "complete" === fe.readyState)setTimeout(ie.ready); else if (fe.addEventListener)fe.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1); else {
                fe.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && fe.documentElement
                } catch (r) {
                }
                n && n.doScroll && !function i() {
                    if (!ie.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        a(), ie.ready()
                    }
                }()
            }
            return Ae.promise(t)
        };
        var Ne, Se = "undefined";
        for (Ne in ie(ne))break;
        ne.ownLast = "0" !== Ne, ne.inlineBlockNeedsLayout = !1, ie(function () {
            var e, t, n, r;
            n = fe.getElementsByTagName("body")[0], n && n.style && (t = fe.createElement("div"), r = fe.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Se && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }), function () {
            var e = fe.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), ie.acceptData = function (e) {
            var t = ie.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
        var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ee = /([A-Z])/g;
        ie.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (e) {
                return e = e.nodeType ? ie.cache[e[ie.expando]] : e[ie.expando], !!e && !l(e)
            },
            data: function (e, t, n) {
                return c(e, t, n)
            },
            removeData: function (e, t) {
                return d(e, t)
            },
            _data: function (e, t, n) {
                return c(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return d(e, t, !0)
            }
        }), ie.fn.extend({
            data: function (e, t) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = ie.data(o), 1 === o.nodeType && !ie._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;)a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ie.camelCase(r.slice(5)), u(o, r, i[r])));
                        ie._data(o, "parsedAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function () {
                    ie.data(this, e)
                }) : arguments.length > 1 ? this.each(function () {
                    ie.data(this, e, t)
                }) : o ? u(o, e, ie.data(o, e)) : void 0
            }, removeData: function (e) {
                return this.each(function () {
                    ie.removeData(this, e)
                })
            }
        }), ie.extend({
            queue: function (e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = ie._data(e, t), n && (!r || ie.isArray(n) ? r = ie._data(e, t, ie.makeArray(n)) : r.push(n)), r || []) : void 0
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = ie.queue(e, t), r = n.length, i = n.shift(), o = ie._queueHooks(e, t), a = function () {
                    ie.dequeue(e, t)
                };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return ie._data(e, n) || ie._data(e, n, {
                        empty: ie.Callbacks("once memory").add(function () {
                            ie._removeData(e, t + "queue"), ie._removeData(e, n)
                        })
                    })
            }
        }), ie.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = ie.queue(this, e, t);
                    ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    ie.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, r = 1, i = ie.Deferred(), o = this, a = this.length, s = function () {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)n = ie._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Te = ["Top", "Right", "Bottom", "Left"], $e = function (e, t) {
            return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e)
        }, xe = ie.access = function (e, t, n, r, i, o, a) {
            var s = 0, u = e.length, l = null == n;
            if ("object" === ie.type(n)) {
                i = !0;
                for (s in n)ie.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(ie(e), n)
                })), t))for (; u > s; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        }, Pe = /^(?:checkbox|radio)$/i;
        !function () {
            var e = fe.createElement("input"), t = fe.createElement("div"), n = fe.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                    ne.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete t.test
                } catch (r) {
                    ne.deleteExpando = !1
                }
            }
        }(), function () {
            var t, n, r = fe.createElement("div");
            for (t in{
                submit: !0,
                change: !0,
                focusin: !0
            })n = "on" + t, (ne[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), ne[t + "Bubbles"] = r.attributes[n].expando === !1);
            r = null
        }();
        var ke = /^(?:input|select|textarea)$/i, De = /^key/, Re = /^(?:mouse|pointer|contextmenu)|click/, Oe = /^(?:focusinfocus|focusoutblur)$/, Ie = /^([^.]*)(?:\.(.+)|)$/;
        ie.event = {
            global: {},
            add: function (e, t, n, r, i) {
                var o, a, s, u, l, c, d, h, p, f, m, g = ie._data(e);
                if (g) {
                    for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = ie.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function (e) {
                        return typeof ie === Se || e && ie.event.triggered === e.type ? void 0 : ie.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(_e) || [""], s = t.length; s--;)o = Ie.exec(t[s]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (l = ie.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = ie.event.special[p] || {}, d = ie.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ie.expr.match.needsContext.test(i),
                        namespace: f.join(".")
                    }, u), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, l.setup && l.setup.call(e, r, f, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, d) : h.push(d), ie.event.global[p] = !0);
                    e = null
                }
            },
            remove: function (e, t, n, r, i) {
                var o, a, s, u, l, c, d, h, p, f, m, g = ie.hasData(e) && ie._data(e);
                if (g && (c = g.events)) {
                    for (t = (t || "").match(_e) || [""], l = t.length; l--;)if (s = Ie.exec(t[l]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p) {
                        for (d = ie.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, h = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = h.length; o--;)a = h[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (h.splice(o, 1), a.selector && h.delegateCount--, d.remove && d.remove.call(e, a));
                        u && !h.length && (d.teardown && d.teardown.call(e, f, g.handle) !== !1 || ie.removeEvent(e, p, g.handle), delete c[p])
                    } else for (p in c)ie.event.remove(e, p + t[l], n, r, !0);
                    ie.isEmptyObject(c) && (delete g.handle, ie._removeData(e, "events"))
                }
            },
            trigger: function (t, n, r, i) {
                var o, a, s, u, l, c, d, h = [r || fe], p = te.call(t, "type") ? t.type : t, f = te.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = c = r = r || fe, 3 !== r.nodeType && 8 !== r.nodeType && !Oe.test(p + ie.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[ie.expando] ? t : new ie.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ie.makeArray(n, [t]), l = ie.event.special[p] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                    if (!i && !l.noBubble && !ie.isWindow(r)) {
                        for (u = l.delegateType || p, Oe.test(u + p) || (s = s.parentNode); s; s = s.parentNode)h.push(s), c = s;
                        c === (r.ownerDocument || fe) && h.push(c.defaultView || c.parentWindow || e)
                    }
                    for (d = 0; (s = h[d++]) && !t.isPropagationStopped();)t.type = d > 1 ? u : l.bindType || p, o = (ie._data(s, "events") || {})[t.type] && ie._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && ie.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                    if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(h.pop(), n) === !1) && ie.acceptData(r) && a && r[p] && !ie.isWindow(r)) {
                        c = r[a], c && (r[a] = null), ie.event.triggered = p;
                        try {
                            r[p]()
                        } catch (m) {
                        }
                        ie.event.triggered = void 0, c && (r[a] = c)
                    }
                    return t.result
                }
            },
            dispatch: function (e) {
                e = ie.event.fix(e);
                var t, n, r, i, o, a = [], s = Y.call(arguments), u = (ie._data(this, "events") || {})[e.type] || [], l = ie.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                    for (a = ie.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, o = 0; (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((ie.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
                if (s && u.nodeType && (!e.button || "click" !== e.type))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                    for (i = [], o = 0; s > o; o++)r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ie(n, this).index(u) >= 0 : ie.find(n, this, null, [u]).length), i[n] && i.push(r);
                    i.length && a.push({elem: u, handlers: i})
                }
                return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
            },
            fix: function (e) {
                if (e[ie.expando])return e;
                var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = Re.test(i) ? this.mouseHooks : De.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(o), t = r.length; t--;)n = r[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || fe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, r, i, o = t.button, a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || fe, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== f() && this.focus)try {
                            return this.focus(), !1
                        } catch (e) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return ie.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    }, _default: function (e) {
                        return ie.nodeName(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n, r) {
                var i = ie.extend(new ie.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
                r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, ie.removeEvent = fe.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function (e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === Se && (e[r] = null), e.detachEvent(r, n))
        }, ie.Event = function (e, t) {
            return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : p) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t)
        }, ie.Event.prototype = {
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = h, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ie.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            ie.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, r = this, i = e.relatedTarget, o = e.handleObj;
                    return (!i || i !== r && !ie.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ne.submitBubbles || (ie.event.special.submit = {
            setup: function () {
                return ie.nodeName(this, "form") ? !1 : void ie.event.add(this, "click._submit keypress._submit", function (e) {
                    var t = e.target, n = ie.nodeName(t, "input") || ie.nodeName(t, "button") ? t.form : void 0;
                    n && !ie._data(n, "submitBubbles") && (ie.event.add(n, "submit._submit", function (e) {
                        e._submit_bubble = !0
                    }), ie._data(n, "submitBubbles", !0))
                })
            }, postDispatch: function (e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ie.event.simulate("submit", this.parentNode, e, !0))
            }, teardown: function () {
                return ie.nodeName(this, "form") ? !1 : void ie.event.remove(this, "._submit")
            }
        }), ne.changeBubbles || (ie.event.special.change = {
            setup: function () {
                return ke.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ie.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), ie.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), ie.event.simulate("change", this, e, !0)
                })), !1) : void ie.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    ke.test(t.nodeName) && !ie._data(t, "changeBubbles") && (ie.event.add(t, "change._change", function (e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ie.event.simulate("change", this.parentNode, e, !0)
                    }), ie._data(t, "changeBubbles", !0))
                })
            }, handle: function (e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            }, teardown: function () {
                return ie.event.remove(this, "._change"), !ke.test(this.nodeName)
            }
        }), ne.focusinBubbles || ie.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                ie.event.simulate(t, e.target, ie.event.fix(e), !0)
            };
            ie.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this, i = ie._data(r, t);
                    i || r.addEventListener(e, n, !0), ie._data(r, t, (i || 0) + 1)
                }, teardown: function () {
                    var r = this.ownerDocument || this, i = ie._data(r, t) - 1;
                    i ? ie._data(r, t, i) : (r.removeEventListener(e, n, !0), ie._removeData(r, t))
                }
            }
        }), ie.fn.extend({
            on: function (e, t, n, r, i) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (o in e)this.on(o, t, n, e[o], i);
                    return this
                }
                if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1)r = p; else if (!r)return this;
                return 1 === i && (a = r, r = function (e) {
                    return ie().off(e), a.apply(this, arguments)
                }, r.guid = a.guid || (a.guid = ie.guid++)), this.each(function () {
                    ie.event.add(this, e, r, n, t)
                })
            }, one: function (e, t, n, r) {
                return this.on(e, t, n, r, 1)
            }, off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e)this.off(i, t, e[i]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function () {
                    ie.event.remove(this, e, n, t)
                })
            }, trigger: function (e, t) {
                return this.each(function () {
                    ie.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                return n ? ie.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Le = / jQuery\d+="(?:null|\d+)"/g, Fe = new RegExp("<(?:" + Me + ")[\\s/>]", "i"), Be = /^\s+/, je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ue = /<([\w:]+)/, He = /<tbody/i, ze = /<|&#?\w+;/, Ve = /<(?:script|style|link)/i, We = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^$|\/(?:java|ecma)script/i, Ge = /^true\/(.*)/, Ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ye = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, Xe = m(fe), Je = Xe.appendChild(fe.createElement("div"));
        Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td, ie.extend({
            clone: function (e, t, n) {
                var r, i, o, a, s, u = ie.contains(e.ownerDocument, e);
                if (ne.html5Clone || ie.isXMLDoc(e) || !Fe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Je.innerHTML = e.outerHTML, Je.removeChild(o = Je.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a)r[a] && S(i, r[a]);
                if (t)if (n)for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++)N(i, r[a]); else N(e, o);
                return r = g(o, "script"), r.length > 0 && A(r, !u && g(e, "script")), r = s = i = null, o
            }, buildFragment: function (e, t, n, r) {
                for (var i, o, a, s, u, l, c, d = e.length, h = m(t), p = [], f = 0; d > f; f++)if (o = e[f], o || 0 === o)if ("object" === ie.type(o))ie.merge(p, o.nodeType ? [o] : o); else if (ze.test(o)) {
                    for (s = s || h.appendChild(t.createElement("div")), u = (Ue.exec(o) || ["", ""])[1].toLowerCase(), c = Ye[u] || Ye._default, s.innerHTML = c[1] + o.replace(je, "<$1></$2>") + c[2], i = c[0]; i--;)s = s.lastChild;
                    if (!ne.leadingWhitespace && Be.test(o) && p.push(t.createTextNode(Be.exec(o)[0])), !ne.tbody)for (o = "table" !== u || He.test(o) ? "<table>" !== c[1] || He.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;)ie.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                    for (ie.merge(p, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
                    s = h.lastChild
                } else p.push(t.createTextNode(o));
                for (s && h.removeChild(s), ne.appendChecked || ie.grep(g(p, "input"), y), f = 0; o = p[f++];)if ((!r || -1 === ie.inArray(o, r)) && (a = ie.contains(o.ownerDocument, o), s = g(h.appendChild(o), "script"), a && A(s), n))for (i = 0; o = s[i++];)qe.test(o.type || "") && n.push(o);
                return s = null, h
            }, cleanData: function (e, t) {
                for (var n, r, i, o, a = 0, s = ie.expando, u = ie.cache, l = ne.deleteExpando, c = ie.event.special; null != (n = e[a]); a++)if ((t || ie.acceptData(n)) && (i = n[s], o = i && u[i])) {
                    if (o.events)for (r in o.events)c[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Se ? n.removeAttribute(s) : n[s] = null, K.push(i))
                }
            }
        }), ie.fn.extend({
            text: function (e) {
                return xe(this, function (e) {
                    return void 0 === e ? ie.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(e))
                }, null, e, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = v(this, e);
                        t.appendChild(e)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = v(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                })
            }, after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, remove: function (e, t) {
                for (var n, r = e ? ie.filter(e, this) : this, i = 0; null != (n = r[i]); i++)t || 1 !== n.nodeType || ie.cleanData(g(n)), n.parentNode && (t && ie.contains(n.ownerDocument, n) && A(g(n, "script")), n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ie.cleanData(g(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                    e.options && ie.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            }, clone: function (e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                    return ie.clone(this, e, t)
                })
            }, html: function (e) {
                return xe(this, function (e) {
                    var t = this[0] || {}, n = 0, r = this.length;
                    if (void 0 === e)return 1 === t.nodeType ? t.innerHTML.replace(Le, "") : void 0;
                    if ("string" == typeof e && !Ve.test(e) && (ne.htmlSerialize || !Fe.test(e)) && (ne.leadingWhitespace || !Be.test(e)) && !Ye[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(je, "<$1></$2>");
                        try {
                            for (; r > n; n++)t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(g(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (i) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = arguments[0];
                return this.domManip(arguments, function (t) {
                    e = this.parentNode, ie.cleanData(g(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            }, detach: function (e) {
                return this.remove(e, !0)
            }, domManip: function (e, t) {
                e = X.apply([], e);
                var n, r, i, o, a, s, u = 0, l = this.length, c = this, d = l - 1, h = e[0], p = ie.isFunction(h);
                if (p || l > 1 && "string" == typeof h && !ne.checkClone && We.test(h))return this.each(function (n) {
                    var r = c.eq(n);
                    p && (e[0] = h.call(this, n, r.html())), r.domManip(e, t)
                });
                if (l && (s = ie.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (o = ie.map(g(s, "script"), _), i = o.length; l > u; u++)r = s, u !== d && (r = ie.clone(r, !0, !0), i && ie.merge(o, g(r, "script"))), t.call(this[u], r, u);
                    if (i)for (a = o[o.length - 1].ownerDocument, ie.map(o, b), u = 0; i > u; u++)r = o[u], qe.test(r.type || "") && !ie._data(r, "globalEval") && ie.contains(a, r) && (r.src ? ie._evalUrl && ie._evalUrl(r.src) : ie.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Ke, "")));
                    s = n = null
                }
                return this
            }
        }), ie.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            ie.fn[e] = function (e) {
                for (var n, r = 0, i = [], o = ie(e), a = o.length - 1; a >= r; r++)n = r === a ? this : this.clone(!0), ie(o[r])[t](n), J.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Qe, Ze = {};
        !function () {
            var e;
            ne.shrinkWrapBlocks = function () {
                if (null != e)return e;
                e = !1;
                var t, n, r;
                return n = fe.getElementsByTagName("body")[0], n && n.style ? (t = fe.createElement("div"), r = fe.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Se && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(fe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
            }
        }();
        var et, tt, nt = /^margin/, rt = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"), it = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (et = function (t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        }, tt = function (e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), rt.test(a) && nt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : fe.documentElement.currentStyle && (et = function (e) {
            return e.currentStyle
        }, tt = function (e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rt.test(a) && !it.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
        }), function () {
            function t() {
                var t, n, r, i;
                n = fe.getElementsByTagName("body")[0], n && n.style && (t = fe.createElement("div"), r = fe.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {width: "4px"}).width, i = t.appendChild(fe.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
            }

            var n, r, i, o, a, s, u;
            n = fe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === r.opacity, ne.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, ie.extend(ne, {
                reliableHiddenOffsets: function () {
                    return null == s && t(), s
                }, boxSizingReliable: function () {
                    return null == a && t(), a
                }, pixelPosition: function () {
                    return null == o && t(), o
                }, reliableMarginRight: function () {
                    return null == u && t(), u
                }
            }))
        }(), ie.swap = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t)a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)e.style[o] = a[o];
            return i
        };
        var ot = /alpha\([^)]*\)/i, at = /opacity\s*=\s*([^)]*)/, st = /^(none|table(?!-c[ea]).+)/, ut = new RegExp("^(" + we + ")(.*)$", "i"), lt = new RegExp("^([+-])=(" + we + ")", "i"), ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, dt = {letterSpacing: "0", fontWeight: "400"}, ht = ["Webkit", "O", "Moz", "ms"];
        ie.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = tt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": ne.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = ie.camelCase(t), u = e.style;
                    if (t = ie.cssProps[s] || (ie.cssProps[s] = T(u, s)), a = ie.cssHooks[t] || ie.cssHooks[s], void 0 === n)return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                    if (o = typeof n, "string" === o && (i = lt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ie.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ie.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set"in a && void 0 === (n = a.set(e, n, r)))))try {
                        u[t] = n
                    } catch (l) {
                    }
                }
            },
            css: function (e, t, n, r) {
                var i, o, a, s = ie.camelCase(t);
                return t = ie.cssProps[s] || (ie.cssProps[s] = T(e.style, s)), a = ie.cssHooks[t] || ie.cssHooks[s], a && "get"in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, r)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || ie.isNumeric(i) ? i || 0 : o) : o
            }
        }), ie.each(["height", "width"], function (e, t) {
            ie.cssHooks[t] = {
                get: function (e, n, r) {
                    return n ? st.test(ie.css(e, "display")) && 0 === e.offsetWidth ? ie.swap(e, ct, function () {
                        return k(e, t, r)
                    }) : k(e, t, r) : void 0
                }, set: function (e, n, r) {
                    var i = r && et(e);
                    return x(e, n, r ? P(e, t, r, ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }), ne.opacity || (ie.cssHooks.opacity = {
            get: function (e, t) {
                return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            }, set: function (e, t) {
                var n = e.style, r = e.currentStyle, i = ie.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ie.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ot.test(o) ? o.replace(ot, i) : o + " " + i)
            }
        }), ie.cssHooks.marginRight = w(ne.reliableMarginRight, function (e, t) {
            return t ? ie.swap(e, {display: "inline-block"}, tt, [e, "marginRight"]) : void 0
        }), ie.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            ie.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, nt.test(e) || (ie.cssHooks[e + t].set = x)
        }), ie.fn.extend({
            css: function (e, t) {
                return xe(this, function (e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (ie.isArray(t)) {
                        for (r = et(e), i = t.length; i > a; a++)o[t[a]] = ie.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
                }, e, t, arguments.length > 1)
            }, show: function () {
                return $(this, !0)
            }, hide: function () {
                return $(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    $e(this) ? ie(this).show() : ie(this).hide()
                })
            }
        }), ie.Tween = D, D.prototype = {
            constructor: D, init: function (e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ie.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = D.propHooks[this.prop];
                return e && e.get ? e.get(this) : D.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = D.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
            }
        }, D.prototype.init.prototype = D.prototype, D.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                }, set: function (e) {
                    ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ie.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, ie.fx = D.prototype.init, ie.fx.step = {};
        var pt, ft, mt = /^(?:toggle|show|hide)$/, gt = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"), yt = /queueHooks$/, vt = [M], _t = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), r = n.cur(), i = gt.exec(t), o = i && i[3] || (ie.cssNumber[e] ? "" : "px"), a = (ie.cssNumber[e] || "px" !== o && +r) && gt.exec(ie.css(n.elem, e)), s = 1, u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, ie.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
        ie.Animation = ie.extend(F, {
            tweener: function (e, t) {
                ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++)n = e[r], _t[n] = _t[n] || [], _t[n].unshift(t)
            }, prefilter: function (e, t) {
                t ? vt.unshift(e) : vt.push(e)
            }
        }), ie.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? ie.extend({}, e) : {
                complete: n || !n && t || ie.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ie.isFunction(t) && t
            };
            return r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue)
            }, r
        }, ie.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter($e).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
            }, animate: function (e, t, n, r) {
                var i = ie.isEmptyObject(e), o = ie.speed(t, n, r), a = function () {
                    var t = F(this, ie.extend({}, e), o);
                    (i || ie._data(this, "finish")) && t.stop(!0)
                };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            }, stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, i = null != e && e + "queueHooks", o = ie.timers, a = ie._data(this);
                    if (i)a[i] && a[i].stop && r(a[i]); else for (i in a)a[i] && a[i].stop && yt.test(i) && r(a[i]);
                    for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && ie.dequeue(this, e)
                })
            }, finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = ie._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ie.timers, a = r ? r.length : 0;
                    for (n.finish = !0, ie.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ie.each(["toggle", "show", "hide"], function (e, t) {
            var n = ie.fn[t];
            ie.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, i)
            }
        }), ie.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            ie.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), ie.timers = [], ie.fx.tick = function () {
            var e, t = ie.timers, n = 0;
            for (pt = ie.now(); n < t.length; n++)e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ie.fx.stop(), pt = void 0
        }, ie.fx.timer = function (e) {
            ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop()
        }, ie.fx.interval = 13, ie.fx.start = function () {
            ft || (ft = setInterval(ie.fx.tick, ie.fx.interval))
        }, ie.fx.stop = function () {
            clearInterval(ft), ft = null
        }, ie.fx.speeds = {slow: 600, fast: 200, _default: 400}, ie.fn.delay = function (e, t) {
            return e = ie.fx ? ie.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, function () {
            var e, t, n, r, i;
            t = fe.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = fe.createElement("select"), i = n.appendChild(fe.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(r.getAttribute("style")), ne.hrefNormalized = "/a" === r.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = i.selected, ne.enctype = !!fe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !i.disabled, e = fe.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
        }();
        var bt = /\r/g;
        ie.fn.extend({
            val: function (e) {
                var t, n, r, i = this[0];
                {
                    if (arguments.length)return r = ie.isFunction(e), this.each(function (n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, ie(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ie.isArray(i) && (i = ie.map(i, function (e) {
                            return null == e ? "" : e + ""
                        })), t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                    if (i)return t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)
                }
            }
        }), ie.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = ie.find.attr(e, "value");
                        return null != t ? t : ie.trim(ie.text(e))
                    }
                }, select: {
                    get: function (e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)if (n = r[u], (n.selected || u === i) && (ne.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ie.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ie(n).val(), o)return t;
                            a.push(t)
                        }
                        return a
                    }, set: function (e, t) {
                        for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--;)if (r = i[a], ie.inArray(ie.valHooks.option.get(r), o) >= 0)try {
                            r.selected = n = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), ie.each(["radio", "checkbox"], function () {
            ie.valHooks[this] = {
                set: function (e, t) {
                    return ie.isArray(t) ? e.checked = ie.inArray(ie(e).val(), t) >= 0 : void 0
                }
            }, ne.checkOn || (ie.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var At, Nt, St = ie.expr.attrHandle, Ct = /^(?:checked|selected)$/i, Et = ne.getSetAttribute, wt = ne.input;
        ie.fn.extend({
            attr: function (e, t) {
                return xe(this, ie.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    ie.removeAttr(this, e)
                })
            }
        }), ie.extend({
            attr: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o)return typeof e.getAttribute === Se ? ie.prop(e, t, n) : (1 === o && ie.isXMLDoc(e) || (t = t.toLowerCase(), r = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? Nt : At)), void 0 === n ? r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = ie.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ie.removeAttr(e, t))
            }, removeAttr: function (e, t) {
                var n, r, i = 0, o = t && t.match(_e);
                if (o && 1 === e.nodeType)for (; n = o[i++];)r = ie.propFix[n] || n, ie.expr.match.bool.test(n) ? wt && Et || !Ct.test(n) ? e[r] = !1 : e[ie.camelCase("default-" + n)] = e[r] = !1 : ie.attr(e, n, ""), e.removeAttribute(Et ? n : r)
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!ne.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), Nt = {
            set: function (e, t, n) {
                return t === !1 ? ie.removeAttr(e, n) : wt && Et || !Ct.test(n) ? e.setAttribute(!Et && ie.propFix[n] || n, n) : e[ie.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = St[t] || ie.find.attr;
            St[t] = wt && Et || !Ct.test(t) ? function (e, t, r) {
                var i, o;
                return r || (o = St[t], St[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, St[t] = o), i
            } : function (e, t, n) {
                return n ? void 0 : e[ie.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), wt && Et || (ie.attrHooks.value = {
            set: function (e, t, n) {
                return ie.nodeName(e, "input") ? void(e.defaultValue = t) : At && At.set(e, t, n)
            }
        }), Et || (At = {
            set: function (e, t, n) {
                var r = e.getAttributeNode(n);
                return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, St.id = St.name = St.coords = function (e, t, n) {
            var r;
            return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
        }, ie.valHooks.button = {
            get: function (e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            }, set: At.set
        }, ie.attrHooks.contenteditable = {
            set: function (e, t, n) {
                At.set(e, "" === t ? !1 : t, n)
            }
        }, ie.each(["width", "height"], function (e, t) {
            ie.attrHooks[t] = {
                set: function (e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), ne.style || (ie.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || void 0
            }, set: function (e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Tt = /^(?:input|select|textarea|button|object)$/i, $t = /^(?:a|area)$/i;
        ie.fn.extend({
            prop: function (e, t) {
                return xe(this, ie.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return e = ie.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {
                    }
                })
            }
        }), ie.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
                var r, i, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a)return o = 1 !== a || !ie.isXMLDoc(e), o && (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = ie.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Tt.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), ne.hrefNormalized || ie.each(["href", "src"], function (e, t) {
            ie.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ne.optSelected || (ie.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ie.propFix[this.toLowerCase()] = this
        }), ne.enctype || (ie.propFix.enctype = "encoding");
        var xt = /[\t\r\n\f]/g;
        ie.fn.extend({
            addClass: function (e) {
                var t, n, r, i, o, a, s = 0, u = this.length, l = "string" == typeof e && e;
                if (ie.isFunction(e))return this.each(function (t) {
                    ie(this).addClass(e.call(this, t, this.className))
                });
                if (l)for (t = (e || "").match(_e) || []; u > s; s++)if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(xt, " ") : " ")) {
                    for (o = 0; i = t[o++];)r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                    a = ie.trim(r), n.className !== a && (n.className = a)
                }
                return this
            }, removeClass: function (e) {
                var t, n, r, i, o, a, s = 0, u = this.length, l = 0 === arguments.length || "string" == typeof e && e;
                if (ie.isFunction(e))return this.each(function (t) {
                    ie(this).removeClass(e.call(this, t, this.className))
                });
                if (l)for (t = (e || "").match(_e) || []; u > s; s++)if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(xt, " ") : "")) {
                    for (o = 0; i = t[o++];)for (; r.indexOf(" " + i + " ") >= 0;)r = r.replace(" " + i + " ", " ");
                    a = e ? ie.trim(r) : "", n.className !== a && (n.className = a)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ie.isFunction(e) ? this.each(function (n) {
                    ie(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function () {
                    if ("string" === n)for (var t, r = 0, i = ie(this), o = e.match(_e) || []; t = o[r++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else(n === Se || "boolean" === n) && (this.className && ie._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ie._data(this, "__className__") || "")
                })
            }, hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(xt, " ").indexOf(t) >= 0)return !0;
                return !1
            }
        }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            ie.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ie.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }, bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var Pt = ie.now(), kt = /\?/, Dt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ie.parseJSON = function (t) {
            if (e.JSON && e.JSON.parse)return e.JSON.parse(t + "");
            var n, r = null, i = ie.trim(t + "");
            return i && !ie.trim(i.replace(Dt, function (e, t, i, o) {
                return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
            })) ? Function("return " + i)() : ie.error("Invalid JSON: " + t)
        }, ie.parseXML = function (t) {
            var n, r;
            if (!t || "string" != typeof t)return null;
            try {
                e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (i) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + t), n
        };
        var Rt, Ot, It = /#.*$/, Mt = /([?&])_=[^&]*/, Lt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Bt = /^(?:GET|HEAD)$/, jt = /^\/\//, Ut = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ht = {}, zt = {}, Vt = "*/".concat("*");
        try {
            Ot = location.href
        } catch (Wt) {
            Ot = fe.createElement("a"), Ot.href = "", Ot = Ot.href
        }
        Rt = Ut.exec(Ot.toLowerCase()) || [], ie.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ot,
                type: "GET",
                isLocal: Ft.test(Rt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Vt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": ie.parseJSON, "text xml": ie.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? U(U(e, ie.ajaxSettings), t) : U(ie.ajaxSettings, e)
            },
            ajaxPrefilter: B(Ht),
            ajaxTransport: B(zt),
            ajax: function (e, t) {
                function n(e, t, n, r) {
                    var i, c, y, v, b, N = t;
                    2 !== _ && (_ = 2, s && clearTimeout(s), l = void 0, a = r || "", A.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (v = H(d, A, n)), v = z(d, v, A, i), i ? (d.ifModified && (b = A.getResponseHeader("Last-Modified"), b && (ie.lastModified[o] = b), b = A.getResponseHeader("etag"), b && (ie.etag[o] = b)), 204 === e || "HEAD" === d.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = v.state, c = v.data, y = v.error, i = !y)) : (y = N, (e || !N) && (N = "error", 0 > e && (e = 0))), A.status = e, A.statusText = (t || N) + "", i ? f.resolveWith(h, [c, N, A]) : f.rejectWith(h, [A, N, y]), A.statusCode(g), g = void 0, u && p.trigger(i ? "ajaxSuccess" : "ajaxError", [A, d, i ? c : y]), m.fireWith(h, [A, N]), u && (p.trigger("ajaxComplete", [A, d]), --ie.active || ie.event.trigger("ajaxStop")))
                }

                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, i, o, a, s, u, l, c, d = ie.ajaxSetup({}, t), h = d.context || d, p = d.context && (h.nodeType || h.jquery) ? ie(h) : ie.event, f = ie.Deferred(), m = ie.Callbacks("once memory"), g = d.statusCode || {}, y = {}, v = {}, _ = 0, b = "canceled", A = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === _) {
                            if (!c)for (c = {}; t = Lt.exec(a);)c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === _ ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return _ || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return _ || (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)if (2 > _)for (t in e)g[t] = [g[t], e[t]]; else A.always(e[A.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || b;
                        return l && l.abort(t), n(0, t), this
                    }
                };
                if (f.promise(A).complete = m.add, A.success = A.done, A.error = A.fail, d.url = ((e || d.url || Ot) + "").replace(It, "").replace(jt, Rt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ie.trim(d.dataType || "*").toLowerCase().match(_e) || [""], null == d.crossDomain && (r = Ut.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === Rt[1] && r[2] === Rt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Rt[3] || ("http:" === Rt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ie.param(d.data, d.traditional)), j(Ht, d, t, A), 2 === _)return A;
                u = ie.event && d.global, u && 0 === ie.active++ && ie.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Bt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (kt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Mt.test(o) ? o.replace(Mt, "$1_=" + Pt++) : o + (kt.test(o) ? "&" : "?") + "_=" + Pt++)), d.ifModified && (ie.lastModified[o] && A.setRequestHeader("If-Modified-Since", ie.lastModified[o]), ie.etag[o] && A.setRequestHeader("If-None-Match", ie.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && A.setRequestHeader("Content-Type", d.contentType), A.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : d.accepts["*"]);
                for (i in d.headers)A.setRequestHeader(i, d.headers[i]);
                if (d.beforeSend && (d.beforeSend.call(h, A, d) === !1 || 2 === _))return A.abort();
                b = "abort";
                for (i in{success: 1, error: 1, complete: 1})A[i](d[i]);
                if (l = j(zt, d, t, A)) {
                    A.readyState = 1, u && p.trigger("ajaxSend", [A, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                        A.abort("timeout")
                    }, d.timeout));
                    try {
                        _ = 1, l.send(y, n)
                    } catch (N) {
                        if (!(2 > _))throw N;
                        n(-1, N)
                    }
                } else n(-1, "No Transport");
                return A
            },
            getJSON: function (e, t, n) {
                return ie.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return ie.get(e, void 0, t, "script")
            }
        }), ie.each(["get", "post"], function (e, t) {
            ie[t] = function (e, n, r, i) {
                return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                })
            }
        }), ie._evalUrl = function (e) {
            return ie.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, ie.fn.extend({
            wrapAll: function (e) {
                if (ie.isFunction(e))return this.each(function (t) {
                    ie(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ie(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            }, wrapInner: function (e) {
                return ie.isFunction(e) ? this.each(function (t) {
                    ie(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = ie(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = ie.isFunction(e);
                return this.each(function (n) {
                    ie(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ie.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ie.css(e, "display"))
        }, ie.expr.filters.visible = function (e) {
            return !ie.expr.filters.hidden(e)
        };
        var qt = /%20/g, Gt = /\[\]$/, Kt = /\r?\n/g, Yt = /^(?:submit|button|image|reset|file)$/i, Xt = /^(?:input|select|textarea|keygen)/i;
        ie.param = function (e, t) {
            var n, r = [], i = function (e, t) {
                t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e))ie.each(e, function () {
                i(this.name, this.value)
            }); else for (n in e)V(n, e[n], t, i);
            return r.join("&").replace(qt, "+")
        }, ie.fn.extend({
            serialize: function () {
                return ie.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = ie.prop(this, "elements");
                    return e ? ie.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !ie(this).is(":disabled") && Xt.test(this.nodeName) && !Yt.test(e) && (this.checked || !Pe.test(e))
                }).map(function (e, t) {
                    var n = ie(this).val();
                    return null == n ? null : ie.isArray(n) ? ie.map(n, function (e) {
                        return {name: t.name, value: e.replace(Kt, "\r\n")}
                    }) : {name: t.name, value: n.replace(Kt, "\r\n")}
                }).get()
            }
        }), ie.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || q()
        } : W;
        var Jt = 0, Qt = {}, Zt = ie.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function () {
            for (var e in Qt)Qt[e](void 0, !0)
        }), ne.cors = !!Zt && "withCredentials"in Zt, Zt = ne.ajax = !!Zt, Zt && ie.ajaxTransport(function (e) {
            if (!e.crossDomain || ne.cors) {
                var t;
                return {
                    send: function (n, r) {
                        var i, o = e.xhr(), a = ++Jt;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (i in e.xhrFields)o[i] = e.xhrFields[i];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (i in n)void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                        o.send(e.hasContent && e.data || null), t = function (n, i) {
                            var s, u, l;
                            if (t && (i || 4 === o.readyState))if (delete Qt[a], t = void 0, o.onreadystatechange = ie.noop, i)4 !== o.readyState && o.abort(); else {
                                l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                                try {
                                    u = o.statusText
                                } catch (c) {
                                    u = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
                            }
                            l && r(s, u, l, o.getAllResponseHeaders())
                        }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Qt[a] = t : t()
                    }, abort: function () {
                        t && t(void 0, !0)
                    }
                }
            }
        }), ie.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (e) {
                    return ie.globalEval(e), e
                }
            }
        }), ie.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ie.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n = fe.head || ie("head")[0] || fe.documentElement;
                return {
                    send: function (r, i) {
                        t = fe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    }, abort: function () {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var en = [], tn = /(=)\?(?=&|$)|\?\?/;
        ie.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = en.pop() || ie.expando + "_" + Pt++;
                return this[e] = !0, e
            }
        }), ie.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + i) : t.jsonp !== !1 && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                return a || ie.error(i + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
                a = arguments
            }, r.always(function () {
                e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, en.push(i)), a && ie.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), ie.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || fe;
            var r = de.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ie.buildFragment([e], t, i), i && i.length && ie(i).remove(), ie.merge([], r.childNodes))
        };
        var nn = ie.fn.load;
        ie.fn.load = function (e, t, n) {
            if ("string" != typeof e && nn)return nn.apply(this, arguments);
            var r, i, o, a = this, s = e.indexOf(" ");
            return s >= 0 && (r = ie.trim(e.slice(s, e.length)),
                e = e.slice(0, s)), ie.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ie.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: t
            }).done(function (e) {
                i = arguments, a.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e)
            }).complete(n && function (e, t) {
                    a.each(n, i || [e.responseText, t, e])
                }), this
        }, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            ie.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), ie.expr.filters.animated = function (e) {
            return ie.grep(ie.timers, function (t) {
                return e === t.elem
            }).length
        };
        var rn = e.document.documentElement;
        ie.offset = {
            setOffset: function (e, t, n) {
                var r, i, o, a, s, u, l, c = ie.css(e, "position"), d = ie(e), h = {};
                "static" === c && (e.style.position = "relative"), s = d.offset(), o = ie.css(e, "top"), u = ie.css(e, "left"), l = ("absolute" === c || "fixed" === c) && ie.inArray("auto", [o, u]) > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ie.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (h.top = t.top - s.top + a), null != t.left && (h.left = t.left - s.left + i), "using"in t ? t.using.call(e, h) : d.css(h)
            }
        }, ie.fn.extend({
            offset: function (e) {
                if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                    ie.offset.setOffset(this, e, t)
                });
                var t, n, r = {top: 0, left: 0}, i = this[0], o = i && i.ownerDocument;
                if (o)return t = o.documentElement, ie.contains(t, i) ? (typeof i.getBoundingClientRect !== Se && (r = i.getBoundingClientRect()), n = G(o), {
                    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : r
            }, position: function () {
                if (this[0]) {
                    var e, t, n = {top: 0, left: 0}, r = this[0];
                    return "fixed" === ie.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (n = e.offset()), n.top += ie.css(e[0], "borderTopWidth", !0), n.left += ie.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ie.css(r, "marginTop", !0),
                        left: t.left - n.left - ie.css(r, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || rn; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");)e = e.offsetParent;
                    return e || rn
                })
            }
        }), ie.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var n = /Y/.test(t);
            ie.fn[e] = function (r) {
                return xe(this, function (e, r, i) {
                    var o = G(e);
                    return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? ie(o).scrollLeft() : i, n ? i : ie(o).scrollTop()) : e[r] = i)
                }, e, r, arguments.length, null)
            }
        }), ie.each(["top", "left"], function (e, t) {
            ie.cssHooks[t] = w(ne.pixelPosition, function (e, n) {
                return n ? (n = tt(e, t), rt.test(n) ? ie(e).position()[t] + "px" : n) : void 0
            })
        }), ie.each({Height: "height", Width: "width"}, function (e, t) {
            ie.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
                ie.fn[r] = function (r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r), a = n || (r === !0 || i === !0 ? "margin" : "border");
                    return xe(this, function (t, n, r) {
                        var i;
                        return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ie.css(t, n, a) : ie.style(t, n, r, a)
                    }, t, o ? r : void 0, o, null)
                }
            })
        }), ie.fn.size = function () {
            return this.length
        }, ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return ie
        });
        var on = e.jQuery, an = e.$;
        return ie.noConflict = function (t) {
            return e.$ === ie && (e.$ = an), t && e.jQuery === ie && (e.jQuery = on), ie
        }, typeof t === Se && (e.jQuery = e.$ = ie), ie
    });
    var h = window.jQuery.noConflict(!0), p = h;
    !function (e, t, n) {
        var r, i, o = e.srcDoc, a = !!("srcdoc"in t.createElement("iframe")), s = {
            compliant: function (e, t) {
                t && e.setAttribute("srcdoc", t)
            }, legacy: function (e, t) {
                if (e && e.getAttribute && (t || (t = e.getAttribute("srcdoc")), null !== t))try {
                    var n = e.contentDocument || e.contentWindow.document;
                    (null === n.body || 0 === n.body.children.length) && (n.open(), n.write(t), n.close())
                } catch (r) {
                    console.error("Failed setting srcdoc of iframe"), console.error(r)
                }
            }
        }, u = e.srcDoc = {
            set: s.compliant, noConflict: function () {
                return e.srcDoc = o, u
            }
        };
        if (!a) {
            u.set = s.legacy;
            var l = function () {
                for (i = t.getElementsByTagName("iframe"), r = i.length; r--;)u.set(i[r])
            };
            e.addEventListener("page:load", l, !0), e.addEventListener("DOMContentLoaded", l, !0)
        }
    }(this, this.document), function () {
        var e, t, n, r, i, o, a, s, u, l, c, d, h, f, m, g, y, v, _, b, A, N, S, C, E = [].slice, w = [].indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)if (t in this && this[t] === e)return t;
                return -1
            };
        e = p, e.payment = {}, e.payment.fn = {}, e.fn.payment = function () {
            var t, n;
            return n = arguments[0], t = 2 <= arguments.length ? E.call(arguments, 1) : [], e.payment.fn[n].apply(this, t)
        }, i = /(\d{1,4})/g, e.payment.cards = r = [{
            type: "visaelectron",
            patterns: [4026, 417500, 4405, 4508, 4844, 4913, 4917],
            format: i,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "maestro",
            patterns: [5018, 502, 503, 506, 56, 58, 639, 6220, 67],
            format: i,
            length: [12, 13, 14, 15, 16, 17, 18, 19],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "forbrugsforeningen",
            patterns: [600],
            format: i,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {type: "dankort", patterns: [5019], format: i, length: [16], cvcLength: [3], luhn: !0}, {
            type: "elo",
            patterns: [4011, 4312, 4389, 4514, 4573, 4576, 5041, 5066, 5067, 509, 6277, 6362, 6363, 650, 6516, 6550],
            format: i,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {type: "visa", patterns: [4], format: i, length: [13, 16], cvcLength: [3], luhn: !0}, {
            type: "mastercard",
            patterns: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27],
            format: i,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "amex",
            patterns: [34, 37],
            format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
            length: [15],
            cvcLength: [3, 4],
            luhn: !0
        }, {
            type: "dinersclub",
            patterns: [30, 36, 38, 39],
            format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
            length: [14],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "discover",
            patterns: [60, 64, 65, 622],
            format: i,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "unionpay",
            patterns: [62, 88],
            format: i,
            length: [16, 17, 18, 19],
            cvcLength: [3],
            luhn: !1
        }, {type: "jcb", patterns: [35], format: i, length: [16], cvcLength: [3], luhn: !0}], t = function (e) {
            var t, n, i, o, a, s, u, l;
            for (e = (e + "").replace(/\D/g, ""), n = 0, o = r.length; o > n; n++)for (t = r[n], l = t.patterns, i = 0, a = l.length; a > i; i++)if (u = l[i], s = u + "", e.substr(0, s.length) === s)return t
        }, n = function (e) {
            var t, n, i;
            for (n = 0, i = r.length; i > n; n++)if (t = r[n], t.type === e)return t
        }, h = function (e) {
            var t, n, r, i, o, a;
            for (o = !0, a = 0, n = (e + "").split("").reverse(), r = 0, i = n.length; i > r; r++)t = n[r], t = parseInt(t, 10), (o = !o) && (t *= 2), t > 9 && (t -= 9), a += t;
            return a % 10 === 0
        }, d = function (e) {
            var t;
            return null != e.prop("selectionStart") && e.prop("selectionStart") !== e.prop("selectionEnd") ? !0 : null != ("undefined" != typeof document && null !== document && null != (t = document.selection) ? t.createRange : void 0) && document.selection.createRange().text ? !0 : !1
        }, S = function (e, t) {
            var n, r, i, o, a, s, u;
            try {
                r = t.prop("selectionStart")
            } catch (a) {
                o = a, r = null
            }
            return s = t.val(), t.val(e), null !== r && t.is(":focus") ? (r === s.length && (r = e.length), s !== e && (u = s.slice(r - 1, +r + 1 || 9e9), n = e.slice(r - 1, +r + 1 || 9e9), i = e[r], /\d/.test(i) && u === i + " " && n === " " + i && (r += 1)), t.prop("selectionStart", r), t.prop("selectionEnd", r)) : void 0
        }, v = function (e) {
            var t, n, r, i, o, a, s, u;
            for (null == e && (e = ""), r = "\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19", i = "0123456789", u = "", t = e.split(""), o = 0, s = t.length; s > o; o++)n = t[o], a = r.indexOf(n), a > -1 && (n = i[a]), u += n;
            return u
        }, y = function (t) {
            var n;
            return n = e(t.currentTarget), setTimeout(function () {
                var e;
                return e = n.val(), e = v(e), e = e.replace(/\D/g, ""), S(e, n)
            })
        }, m = function (t) {
            var n;
            return n = e(t.currentTarget), setTimeout(function () {
                var t;
                return t = n.val(), t = v(t), t = e.payment.formatCardNumber(t), S(t, n)
            })
        }, s = function (n) {
            var r, i, o, a, s, u, l;
            return o = String.fromCharCode(n.which), !/^\d+$/.test(o) || (r = e(n.currentTarget), l = r.val(), i = t(l + o), a = (l.replace(/\D/g, "") + o).length, u = 16, i && (u = i.length[i.length.length - 1]), a >= u || null != r.prop("selectionStart") && r.prop("selectionStart") !== l.length) ? void 0 : (s = i && "amex" === i.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/, s.test(l) ? (n.preventDefault(), setTimeout(function () {
                return r.val(l + " " + o)
            })) : s.test(l + o) ? (n.preventDefault(), setTimeout(function () {
                return r.val(l + o + " ")
            })) : void 0)
        }, o = function (t) {
            var n, r;
            return n = e(t.currentTarget), r = n.val(), 8 !== t.which || null != n.prop("selectionStart") && n.prop("selectionStart") !== r.length ? void 0 : /\d\s$/.test(r) ? (t.preventDefault(), setTimeout(function () {
                return n.val(r.replace(/\d\s$/, ""))
            })) : /\s\d?$/.test(r) ? (t.preventDefault(), setTimeout(function () {
                return n.val(r.replace(/\d$/, ""))
            })) : void 0
        }, g = function (t) {
            var n;
            return n = e(t.currentTarget), setTimeout(function () {
                var t;
                return t = n.val(), t = v(t), t = e.payment.formatExpiry(t), S(t, n)
            })
        }, u = function (t) {
            var n, r, i;
            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val() + r, /^\d$/.test(i) && "0" !== i && "1" !== i ? (t.preventDefault(), setTimeout(function () {
                return n.val("0" + i + " / ")
            })) : /^\d\d$/.test(i) ? (t.preventDefault(), setTimeout(function () {
                var e, t;
                return e = parseInt(i[0], 10), t = parseInt(i[1], 10), t > 2 && 0 !== e ? n.val("0" + e + " / " + t) : n.val(i + " / ")
            })) : void 0) : void 0
        }, l = function (t) {
            var n, r, i;
            return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val(), /^\d\d$/.test(i) ? n.val(i + " / ") : void 0) : void 0
        }, c = function (t) {
            var n, r, i;
            return i = String.fromCharCode(t.which), "/" === i || " " === i ? (n = e(t.currentTarget), r = n.val(), /^\d$/.test(r) && "0" !== r ? n.val("0" + r + " / ") : void 0) : void 0
        }, a = function (t) {
            var n, r;
            return n = e(t.currentTarget), r = n.val(), 8 !== t.which || null != n.prop("selectionStart") && n.prop("selectionStart") !== r.length ? void 0 : /\d\s\/\s$/.test(r) ? (t.preventDefault(), setTimeout(function () {
                return n.val(r.replace(/\d\s\/\s$/, ""))
            })) : void 0
        }, f = function (t) {
            var n;
            return n = e(t.currentTarget), setTimeout(function () {
                var e;
                return e = n.val(), e = v(e), e = e.replace(/\D/g, "").slice(0, 4), S(e, n)
            })
        }, N = function (e) {
            var t;
            return e.metaKey || e.ctrlKey ? !0 : 32 === e.which ? !1 : 0 === e.which ? !0 : e.which < 33 ? !0 : (t = String.fromCharCode(e.which), !!/[\d\s]/.test(t))
        }, b = function (n) {
            var r, i, o, a;
            return r = e(n.currentTarget), o = String.fromCharCode(n.which), /^\d+$/.test(o) && !d(r) ? (a = (r.val() + o).replace(/\D/g, ""), i = t(a), i ? a.length <= i.length[i.length.length - 1] : a.length <= 16) : void 0
        }, A = function (t) {
            var n, r, i;
            return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) && !d(n) ? (i = n.val() + r, i = i.replace(/\D/g, ""), i.length > 6 ? !1 : void 0) : void 0
        }, _ = function (t) {
            var n, r, i;
            return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) && !d(n) ? (i = n.val() + r, i.length <= 4) : void 0
        }, C = function (t) {
            var n, i, o, a, s;
            return n = e(t.currentTarget), s = n.val(), a = e.payment.cardType(s) || "unknown", n.hasClass(a) ? void 0 : (i = function () {
                var e, t, n;
                for (n = [], e = 0, t = r.length; t > e; e++)o = r[e], n.push(o.type);
                return n
            }(), n.removeClass("unknown"), n.removeClass(i.join(" ")), n.addClass(a), n.toggleClass("identified", "unknown" !== a), n.trigger("payment.cardType", a))
        }, e.payment.fn.formatCardCVC = function () {
            return this.on("keypress", N), this
        }, e.payment.fn.formatCardExpiry = function () {
            return this.on("keypress", N), this.on("keypress", A), this.on("keypress", u), this.on("keypress", c), this.on("keypress", l), this.on("keydown", a), this.on("change", g), this.on("input", g), this
        }, e.payment.fn.formatCardNumber = function () {
            return this.on("keypress", N), this.on("keypress", b), this.on("keypress", s), this.on("keydown", o), this.on("keyup", C), this.on("paste", m), this.on("change", m), this.on("input", m), this.on("input", C), this
        }, e.payment.fn.restrictNumeric = function () {
            return this.on("keypress", N), this.on("paste", y), this.on("change", y), this.on("input", y), this
        }, e.payment.fn.cardExpiryVal = function () {
            return e.payment.cardExpiryVal(e(this).val())
        }, e.payment.cardExpiryVal = function (e) {
            var t, n, r, i;
            return r = e.split(/[\s\/]+/, 2), t = r[0], i = r[1], 2 === (null != i ? i.length : void 0) && /^\d+$/.test(i) && (n = (new Date).getFullYear(), n = n.toString().slice(0, 2), i = n + i), t = parseInt(t, 10), i = parseInt(i, 10), {
                month: t,
                year: i
            }
        }, e.payment.validateCardNumber = function (e) {
            var n, r;
            return e = (e + "").replace(/\s+|-/g, ""), /^\d+$/.test(e) ? (n = t(e), n ? (r = e.length, w.call(n.length, r) >= 0 && (n.luhn === !1 || h(e))) : !1) : !1
        }, e.payment.validateCardExpiry = function (t, n) {
            var r, i, o;
            return "object" == typeof t && "month"in t && (o = t, t = o.month, n = o.year), t && n ? (t = e.trim(t), n = e.trim(n), /^\d+$/.test(t) && /^\d+$/.test(n) && t >= 1 && 12 >= t ? (2 === n.length && (n = 70 > n ? "20" + n : "19" + n), 4 !== n.length ? !1 : (i = new Date(n, t), r = new Date, i.setMonth(i.getMonth() - 1), i.setMonth(i.getMonth() + 1, 1), i > r)) : !1) : !1
        }, e.payment.validateCardCVC = function (t, r) {
            var i, o;
            return t = e.trim(t), /^\d+$/.test(t) ? (i = n(r), null != i ? (o = t.length, w.call(i.cvcLength, o) >= 0) : t.length >= 3 && t.length <= 4) : !1
        }, e.payment.cardType = function (e) {
            var n;
            return e ? (null != (n = t(e)) ? n.type : void 0) || null : null
        }, e.payment.formatCardNumber = function (n) {
            var r, i, o, a;
            return n = n.replace(/\D/g, ""), (r = t(n)) ? (a = r.length[r.length.length - 1], n = n.slice(0, a), r.format.global ? null != (o = n.match(r.format)) ? o.join(" ") : void 0 : (i = r.format.exec(n), null != i ? (i.shift(), i = e.grep(i, function (e) {
                return e
            }), i.join(" ")) : void 0)) : n
        }, e.payment.formatExpiry = function (e) {
            var t, n, r, i;
            return (n = e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/)) ? (t = n[1] || "", r = n[2] || "", i = n[3] || "", i.length > 0 ? r = " / " : " /" === r ? (t = t.substring(0, 1), r = "") : 2 === t.length || r.length > 0 ? r = " / " : 1 === t.length && "0" !== t && "1" !== t && (t = "0" + t, r = " / "), t + r + i) : ""
        }
    }.call(this);
    var f = !0, m = m || {};
    m.global = this, m.isDef = function (e) {
        return void 0 !== e
    }, m.exportPath_ = function (e, t, n) {
        e = e.split("."), n = n || m.global, e[0]in n || !n.execScript || n.execScript("var " + e[0]);
        for (var r; e.length && (r = e.shift());)!e.length && m.isDef(t) ? n[r] = t : n = n[r] ? n[r] : n[r] = {}
    }, m.define = function (e, t) {
        var n = t;
        f || (m.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(m.global.CLOSURE_UNCOMPILED_DEFINES, e) ? n = m.global.CLOSURE_UNCOMPILED_DEFINES[e] : m.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(m.global.CLOSURE_DEFINES, e) && (n = m.global.CLOSURE_DEFINES[e])), m.exportPath_(e, n)
    }, m.DEBUG = !0, m.LOCALE = "en", m.TRUSTED_SITE = !0, m.STRICT_MODE_COMPATIBLE = !1, m.DISALLOW_TEST_ONLY_CODE = f && !m.DEBUG, m.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1, m.provide = function (e) {
        if (m.isInModuleLoader_())throw Error("goog.provide can not be used within a goog.module.");
        if (!f && m.isProvided_(e))throw Error('Namespace "' + e + '" already declared.');
        m.constructNamespace_(e)
    }, m.constructNamespace_ = function (e, t) {
        if (!f) {
            delete m.implicitNamespaces_[e];
            for (var n = e; (n = n.substring(0, n.lastIndexOf("."))) && !m.getObjectByName(n);)m.implicitNamespaces_[n] = !0
        }
        m.exportPath_(e, t)
    }, m.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/, m.module = function (e) {
        if (!m.isString(e) || !e || -1 == e.search(m.VALID_MODULE_RE_))throw Error("Invalid module identifier");
        if (!m.isInModuleLoader_())throw Error("Module " + e + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
        if (m.moduleLoaderState_.moduleName)throw Error("goog.module may only be called once per module.");
        if (m.moduleLoaderState_.moduleName = e, !f) {
            if (m.isProvided_(e))throw Error('Namespace "' + e + '" already declared.');
            delete m.implicitNamespaces_[e]
        }
    }, m.module.get = function (e) {
        return m.module.getInternal_(e)
    }, m.module.getInternal_ = function (e) {
        return f ? void 0 : m.isProvided_(e) ? e in m.loadedModules_ ? m.loadedModules_[e] : m.getObjectByName(e) : null
    }, m.moduleLoaderState_ = null, m.isInModuleLoader_ = function () {
        return null != m.moduleLoaderState_
    }, m.module.declareLegacyNamespace = function () {
        if (!f && !m.isInModuleLoader_())throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
        if (!f && !m.moduleLoaderState_.moduleName)throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
        m.moduleLoaderState_.declareLegacyNamespace = !0
    }, m.setTestOnly = function (e) {
        if (m.DISALLOW_TEST_ONLY_CODE)throw e = e || "", Error("Importing test-only code into non-debug environment" + (e ? ": " + e : "."))
    }, m.forwardDeclare = function (e) {
    }, f || (m.isProvided_ = function (e) {
        return e in m.loadedModules_ || !m.implicitNamespaces_[e] && m.isDefAndNotNull(m.getObjectByName(e))
    }, m.implicitNamespaces_ = {"goog.module": !0}), m.getObjectByName = function (e, t) {
        for (var n, r = e.split("."), i = t || m.global; n = r.shift();) {
            if (!m.isDefAndNotNull(i[n]))return null;
            i = i[n]
        }
        return i
    }, m.globalize = function (e, t) {
        var n, r = t || m.global;
        for (n in e)r[n] = e[n]
    }, m.addDependency = function (e, t, n, r) {
        if (m.DEPENDENCIES_ENABLED) {
            var i;
            e = e.replace(/\\/g, "/");
            var o = m.dependencies_;
            r && "boolean" != typeof r || (r = r ? {module: "goog"} : {});
            for (var a = 0; i = t[a]; a++)o.nameToPath[i] = e, o.loadFlags[e] = r;
            for (r = 0; t = n[r]; r++)e in o.requires || (o.requires[e] = {}), o.requires[e][t] = !0
        }
    }, m.ENABLE_DEBUG_LOADER = !0, m.logToConsole_ = function (e) {
        m.global.console && m.global.console.error(e)
    }, m.require = function (e) {
        if (!f) {
            if (m.ENABLE_DEBUG_LOADER && m.IS_OLD_IE_ && m.maybeProcessDeferredDep_(e), m.isProvided_(e)) {
                if (m.isInModuleLoader_())return m.module.getInternal_(e)
            } else if (m.ENABLE_DEBUG_LOADER) {
                var t = m.getPathFromDeps_(e);
                if (!t)throw e = "goog.require could not find: " + e, m.logToConsole_(e), Error(e);
                m.writeScripts_(t)
            }
            return null
        }
    }, m.basePath = "", m.nullFunction = function () {
    }, m.abstractMethod = function () {
        throw Error("unimplemented abstract method")
    }, m.addSingletonGetter = function (e) {
        e.getInstance = function () {
            return e.instance_ ? e.instance_ : (m.DEBUG && (m.instantiatedSingletons_[m.instantiatedSingletons_.length] = e), e.instance_ = new e)
        }
    }, m.instantiatedSingletons_ = [], m.LOAD_MODULE_USING_EVAL = !0, m.SEAL_MODULE_EXPORTS = m.DEBUG, m.loadedModules_ = {}, m.DEPENDENCIES_ENABLED = !f && m.ENABLE_DEBUG_LOADER, m.TRANSPILE = "detect", m.TRANSPILER = "transpile.js", m.DEPENDENCIES_ENABLED && (m.dependencies_ = {
        loadFlags: {},
        nameToPath: {},
        requires: {},
        visited: {},
        written: {},
        deferred: {}
    }, m.inHtmlDocument_ = function () {
        var e = m.global.document;
        return null != e && "write"in e
    }, m.findBasePath_ = function () {
        if (m.isDef(m.global.CLOSURE_BASE_PATH))m.basePath = m.global.CLOSURE_BASE_PATH; else if (m.inHtmlDocument_())for (var e = m.global.document.getElementsByTagName("SCRIPT"), t = e.length - 1; t >= 0; --t) {
            var n = e[t].src, r = n.lastIndexOf("?"), r = -1 == r ? n.length : r;
            if ("base.js" == n.substr(r - 7, 7)) {
                m.basePath = n.substr(0, r - 7);
                break
            }
        }
    }, m.importScript_ = function (e, t) {
        (m.global.CLOSURE_IMPORT_SCRIPT || m.writeScriptTag_)(e, t) && (m.dependencies_.written[e] = !0)
    }, m.IS_OLD_IE_ = !(m.global.atob || !m.global.document || !m.global.document.all), m.importProcessedScript_ = function (e, t, n) {
        m.importScript_("", 'goog.retrieveAndExec_("' + e + '", ' + t + ", " + n + ");")
    }, m.queuedModules_ = [], m.wrapModule_ = function (e, t) {
        return m.LOAD_MODULE_USING_EVAL && m.isDef(m.global.JSON) ? "goog.loadModule(" + m.global.JSON.stringify(t + "\n//# sourceURL=" + e + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + t + "\n;return exports});\n//# sourceURL=" + e + "\n"
    }, m.loadQueuedModules_ = function () {
        var e = m.queuedModules_.length;
        if (e > 0) {
            var t = m.queuedModules_;
            m.queuedModules_ = [];
            for (var n = 0; e > n; n++)m.maybeProcessDeferredPath_(t[n])
        }
    }, m.maybeProcessDeferredDep_ = function (e) {
        m.isDeferredModule_(e) && m.allDepsAreAvailable_(e) && (e = m.getPathFromDeps_(e), m.maybeProcessDeferredPath_(m.basePath + e))
    }, m.isDeferredModule_ = function (e) {
        var t = (e = m.getPathFromDeps_(e)) && m.dependencies_.loadFlags[e] || {}, n = t.lang || "es3";
        return e && ("goog" == t.module || m.needsTranspile_(n)) ? m.basePath + e in m.dependencies_.deferred : !1
    }, m.allDepsAreAvailable_ = function (e) {
        if ((e = m.getPathFromDeps_(e)) && e in m.dependencies_.requires)for (var t in m.dependencies_.requires[e])if (!m.isProvided_(t) && !m.isDeferredModule_(t))return !1;
        return !0
    }, m.maybeProcessDeferredPath_ = function (e) {
        if (e in m.dependencies_.deferred) {
            var t = m.dependencies_.deferred[e];
            delete m.dependencies_.deferred[e], m.globalEval(t)
        }
    }, m.loadModuleFromUrl = function (e) {
        m.retrieveAndExec_(e, !0, !1)
    }, m.writeScriptSrcNode_ = function (e) {
        m.global.document.write('<script type="text/javascript" src="' + e + '"></script>')
    }, m.appendScriptSrcNode_ = function (e) {
        var t = m.global.document, n = t.createElement("script");
        n.type = "text/javascript", n.src = e, n.defer = !1, n.async = !1, t.head.appendChild(n)
    }, m.writeScriptTag_ = function (e, t) {
        if (m.inHtmlDocument_()) {
            var n = m.global.document;
            if (!m.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && "complete" == n.readyState) {
                if (/\bdeps.js$/.test(e))return !1;
                throw Error('Cannot write "' + e + '" after document load')
            }
            if (void 0 === t)if (m.IS_OLD_IE_) {
                var r = " onreadystatechange='goog.onScriptLoad_(this, " + ++m.lastNonModuleScriptIndex_ + ")' ";
                n.write('<script type="text/javascript" src="' + e + '"' + r + "></script>")
            } else m.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING ? m.appendScriptSrcNode_(e) : m.writeScriptSrcNode_(e); else n.write('<script type="text/javascript">' + t + "</script>");
            return !0
        }
        return !1
    }, m.needsTranspile_ = function (e) {
        if ("always" == m.TRANSPILE)return !0;
        if ("never" == m.TRANSPILE)return !1;
        if (m.requiresTranspilation_ || (m.requiresTranspilation_ = m.createRequiresTranspilation_()), e in m.requiresTranspilation_)return m.requiresTranspilation_[e];
        throw Error("Unknown language mode: " + e)
    }, m.requiresTranspilation_ = null, m.lastNonModuleScriptIndex_ = 0, m.onScriptLoad_ = function (e, t) {
        return "complete" == e.readyState && m.lastNonModuleScriptIndex_ == t && m.loadQueuedModules_(), !0
    }, m.writeScripts_ = function (e) {
        function t(e) {
            if (!(e in i.written || e in i.visited)) {
                if (i.visited[e] = !0, e in i.requires)for (var o in i.requires[e])if (!m.isProvided_(o)) {
                    if (!(o in i.nameToPath))throw Error("Undefined nameToPath for " + o);
                    t(i.nameToPath[o])
                }
                e in r || (r[e] = !0, n.push(e))
            }
        }

        var n = [], r = {}, i = m.dependencies_;
        for (t(e), e = 0; e < n.length; e++) {
            var o = n[e];
            m.dependencies_.written[o] = !0
        }
        var a = m.moduleLoaderState_;
        for (m.moduleLoaderState_ = null, e = 0; e < n.length; e++) {
            if (!(o = n[e]))throw m.moduleLoaderState_ = a, Error("Undefined script input");
            var s = i.loadFlags[o] || {}, u = m.needsTranspile_(s.lang || "es3");
            "goog" == s.module || u ? m.importProcessedScript_(m.basePath + o, "goog" == s.module, u) : m.importScript_(m.basePath + o)
        }
        m.moduleLoaderState_ = a
    }, m.getPathFromDeps_ = function (e) {
        return e in m.dependencies_.nameToPath ? m.dependencies_.nameToPath[e] : null
    }, m.findBasePath_(), m.global.CLOSURE_NO_DEPS || m.importScript_(m.basePath + "deps.js")), m.loadModule = function (e) {
        var t = m.moduleLoaderState_;
        try {
            m.moduleLoaderState_ = {moduleName: void 0, declareLegacyNamespace: !1};
            var n;
            if (m.isFunction(e))n = e.call(void 0, {}); else {
                if (!m.isString(e))throw Error("Invalid module definition");
                n = m.loadModuleFromSource_.call(void 0, e)
            }
            var r = m.moduleLoaderState_.moduleName;
            if (!m.isString(r) || !r)throw Error('Invalid module name "' + r + '"');
            m.moduleLoaderState_.declareLegacyNamespace ? m.constructNamespace_(r, n) : m.SEAL_MODULE_EXPORTS && Object.seal && m.isObject(n) && Object.seal(n), m.loadedModules_[r] = n
        } finally {
            m.moduleLoaderState_ = t
        }
    }, m.loadModuleFromSource_ = function (e) {
        return eval(e), {}
    }, m.normalizePath_ = function (e) {
        e = e.split("/");
        for (var t = 0; t < e.length;)"." == e[t] ? e.splice(t, 1) : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1] ? e.splice(--t, 2) : t++;
        return e.join("/")
    }, m.loadFileSync_ = function (e) {
        if (m.global.CLOSURE_LOAD_FILE_SYNC)return m.global.CLOSURE_LOAD_FILE_SYNC(e);
        try {
            var t = new m.global.XMLHttpRequest;
            return t.open("get", e, !1), t.send(), 0 == t.status || 200 == t.status ? t.responseText : null
        } catch (n) {
            return null
        }
    }, m.retrieveAndExec_ = function (e, t, n) {
        if (!f) {
            var r = e;
            e = m.normalizePath_(e);
            var i = m.global.CLOSURE_IMPORT_SCRIPT || m.writeScriptTag_, o = m.loadFileSync_(e);
            if (null == o)throw Error('Load of "' + e + '" failed');
            n && (o = m.transpile_.call(m.global, o, e)), o = t ? m.wrapModule_(e, o) : o + ("\n//# sourceURL=" + e), m.IS_OLD_IE_ ? (m.dependencies_.deferred[r] = o, m.queuedModules_.push(r)) : i(e, o)
        }
    }, m.transpile_ = function (e, t) {
        var n = m.global.$jscomp;
        n || (m.global.$jscomp = n = {});
        var r = n.transpile;
        if (!r) {
            var i = m.basePath + m.TRANSPILER, o = m.loadFileSync_(i);
            if (o) {
                if (eval(o + "\n//# sourceURL=" + i), m.global.$gwtExport && m.global.$gwtExport.$jscomp && !m.global.$gwtExport.$jscomp.transpile)throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(m.global.$gwtExport));
                m.global.$jscomp.transpile = m.global.$gwtExport.$jscomp.transpile, n = m.global.$jscomp, r = n.transpile
            }
        }
        return r || (r = n.transpile = function (e, t) {
            return m.logToConsole_(t + " requires transpilation but no transpiler was found."), e
        }), r(e, t)
    }, m.typeOf = function (e) {
        var t = typeof e;
        if ("object" == t) {
            if (!e)return "null";
            if (e instanceof Array)return "array";
            if (e instanceof Object)return t;
            var n = Object.prototype.toString.call(e);
            if ("[object Window]" == n)return "object";
            if ("[object Array]" == n || "number" == typeof e.length && "undefined" != typeof e.splice && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("splice"))return "array";
            if ("[object Function]" == n || "undefined" != typeof e.call && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("call"))return "function"
        } else if ("function" == t && "undefined" == typeof e.call)return "object";
        return t
    }, m.isNull = function (e) {
        return null === e
    }, m.isDefAndNotNull = function (e) {
        return null != e
    }, m.isArray = function (e) {
        return "array" == m.typeOf(e)
    }, m.isArrayLike = function (e) {
        var t = m.typeOf(e);
        return "array" == t || "object" == t && "number" == typeof e.length
    }, m.isDateLike = function (e) {
        return m.isObject(e) && "function" == typeof e.getFullYear
    }, m.isString = function (e) {
        return "string" == typeof e
    }, m.isBoolean = function (e) {
        return "boolean" == typeof e
    }, m.isNumber = function (e) {
        return "number" == typeof e
    }, m.isFunction = function (e) {
        return "function" == m.typeOf(e)
    }, m.isObject = function (e) {
        var t = typeof e;
        return "object" == t && null != e || "function" == t
    }, m.getUid = function (e) {
        return e[m.UID_PROPERTY_] || (e[m.UID_PROPERTY_] = ++m.uidCounter_)
    }, m.hasUid = function (e) {
        return !!e[m.UID_PROPERTY_]
    }, m.removeUid = function (e) {
        null !== e && "removeAttribute"in e && e.removeAttribute(m.UID_PROPERTY_);
        try {
            delete e[m.UID_PROPERTY_]
        } catch (t) {
        }
    }, m.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0), m.uidCounter_ = 0, m.getHashCode = m.getUid, m.removeHashCode = m.removeUid, m.cloneObject = function (e) {
        var t = m.typeOf(e);
        if ("object" == t || "array" == t) {
            if (e.clone)return e.clone();
            var n, t = "array" == t ? [] : {};
            for (n in e)t[n] = m.cloneObject(e[n]);
            return t
        }
        return e
    }, m.bindNative_ = function (e, t, n) {
        return e.call.apply(e.bind, arguments)
    }, m.bindJs_ = function (e, t, n) {
        if (!e)throw Error();
        if (2 < arguments.length) {
            var r = Array.prototype.slice.call(arguments, 2);
            return function () {
                var n = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(n, r), e.apply(t, n)
            }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }, m.bind = function (e, t, n) {
        return Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? m.bind = m.bindNative_ : m.bind = m.bindJs_, m.bind.apply(null, arguments)
    }, m.partial = function (e, t) {
        var n = Array.prototype.slice.call(arguments, 1);
        return function () {
            var t = n.slice();
            return t.push.apply(t, arguments), e.apply(this, t)
        }
    }, m.mixin = function (e, t) {
        for (var n in t)e[n] = t[n]
    }, m.now = m.TRUSTED_SITE && Date.now || function () {
            return +new Date
        }, m.globalEval = function (e) {
        if (m.global.execScript)m.global.execScript(e, "JavaScript"); else {
            if (!m.global.eval)throw Error("goog.globalEval not available");
            if (null == m.evalWorksForGlobals_)if (m.global.eval("var _evalTest_ = 1;"), "undefined" != typeof m.global._evalTest_) {
                try {
                    delete m.global._evalTest_
                } catch (t) {
                }
                m.evalWorksForGlobals_ = !0
            } else m.evalWorksForGlobals_ = !1;
            if (m.evalWorksForGlobals_)m.global.eval(e); else {
                var n = m.global.document, r = n.createElement("SCRIPT");
                r.type = "text/javascript", r.defer = !1, r.appendChild(n.createTextNode(e)), n.body.appendChild(r), n.body.removeChild(r)
            }
        }
    }, m.evalWorksForGlobals_ = null, m.getCssName = function (e, t) {
        if ("." == String(e).charAt(0))throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + e);
        var n = function (e) {
            return m.cssNameMapping_[e] || e
        }, r = function (e) {
            e = e.split("-");
            for (var t = [], r = 0; r < e.length; r++)t.push(n(e[r]));
            return t.join("-")
        }, r = m.cssNameMapping_ ? "BY_WHOLE" == m.cssNameMappingStyle_ ? n : r : function (e) {
            return e
        }, r = t ? e + "-" + r(t) : r(e);
        return m.global.CLOSURE_CSS_NAME_MAP_FN ? m.global.CLOSURE_CSS_NAME_MAP_FN(r) : r
    }, m.setCssNameMapping = function (e, t) {
        m.cssNameMapping_ = e, m.cssNameMappingStyle_ = t
    }, !f && m.global.CLOSURE_CSS_NAME_MAPPING && (m.cssNameMapping_ = m.global.CLOSURE_CSS_NAME_MAPPING), m.getMsg = function (e, t) {
        return t && (e = e.replace(/\{\$([^}]+)}/g, function (e, n) {
            return null != t && n in t ? t[n] : e
        })), e
    }, m.getMsgWithFallback = function (e, t) {
        return e
    }, m.exportSymbol = function (e, t, n) {
        m.exportPath_(e, t, n)
    }, m.exportProperty = function (e, t, n) {
        e[t] = n
    }, m.inherits = function (e, t) {
        function n() {
        }

        n.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.base = function (e, n, r) {
            for (var i = Array(arguments.length - 2), o = 2; o < arguments.length; o++)i[o - 2] = arguments[o];
            return t.prototype[n].apply(e, i)
        }
    }, m.base = function (e, t, n) {
        var r = arguments.callee.caller;
        if (m.STRICT_MODE_COMPATIBLE || m.DEBUG && !r)throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
        if (r.superClass_) {
            for (var i = Array(arguments.length - 1), o = 1; o < arguments.length; o++)i[o - 1] = arguments[o];
            return r.superClass_.constructor.apply(e, i)
        }
        for (i = Array(arguments.length - 2), o = 2; o < arguments.length; o++)i[o - 2] = arguments[o];
        for (var o = !1, a = e.constructor; a; a = a.superClass_ && a.superClass_.constructor)if (a.prototype[t] === r)o = !0; else if (o)return a.prototype[t].apply(e, i);
        if (e[t] === r)return e.constructor.prototype[t].apply(e, i);
        throw Error("goog.base called from a method of one name to a method of a different name")
    }, m.scope = function (e) {
        if (m.isInModuleLoader_())throw Error("goog.scope is not supported within a goog.module.");
        e.call(m.global)
    }, f || (m.global.COMPILED = f), m.defineClass = function (e, t) {
        var n = t.constructor, r = t.statics;
        return n && n != Object.prototype.constructor || (n = function () {
            throw Error("cannot instantiate an interface (no constructor defined).")
        }), n = m.defineClass.createSealingConstructor_(n, e), e && m.inherits(n, e), delete t.constructor, delete t.statics, m.defineClass.applyProperties_(n.prototype, t), null != r && (r instanceof Function ? r(n) : m.defineClass.applyProperties_(n, r)), n
    }, m.defineClass.SEAL_CLASS_INSTANCES = m.DEBUG, m.defineClass.createSealingConstructor_ = function (e, t) {
        if (!m.defineClass.SEAL_CLASS_INSTANCES)return e;
        var n = !m.defineClass.isUnsealable_(t), r = function () {
            var t = e.apply(this, arguments) || this;
            return t[m.UID_PROPERTY_] = t[m.UID_PROPERTY_], this.constructor === r && n && Object.seal instanceof Function && Object.seal(t), t
        };
        return r
    }, m.defineClass.isUnsealable_ = function (e) {
        return e && e.prototype && e.prototype[m.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
    }, m.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), m.defineClass.applyProperties_ = function (e, t) {
        for (var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        for (var r = 0; r < m.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; r++)n = m.defineClass.OBJECT_PROTOTYPE_FIELDS_[r], Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
    }, m.tagUnsealableClass = function (e) {
        !f && m.defineClass.SEAL_CLASS_INSTANCES && (e.prototype[m.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0)
    }, m.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable", m.createRequiresTranspilation_ = function () {
        function e(e, t) {
            r ? n[e] = !0 : t() ? n[e] = !1 : r = n[e] = !0
        }

        function t(e) {
            try {
                return !!eval(e)
            } catch (t) {
                return !1
            }
        }

        var n = {es3: !1}, r = !1;
        return e("es5", function () {
            return t("[1,].length==1")
        }), e("es6", function () {
            return t('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')
        }), e("es6-impl", function () {
            return !0
        }), e("es7", function () {
            return t("2 ** 2 == 4")
        }), e("es8", function () {
            return t("async () => 1, true")
        }), n
    }, m.debug = {}, m.debug.Error = function (e) {
        if (Error.captureStackTrace)Error.captureStackTrace(this, m.debug.Error); else {
            var t = Error().stack;
            t && (this.stack = t)
        }
        e && (this.message = String(e)), this.reportErrorToServer = !0
    }, m.inherits(m.debug.Error, Error), m.debug.Error.prototype.name = "CustomError", m.dom = {}, m.dom.NodeType = {
        ELEMENT: 1,
        ATTRIBUTE: 2,
        TEXT: 3,
        CDATA_SECTION: 4,
        ENTITY_REFERENCE: 5,
        ENTITY: 6,
        PROCESSING_INSTRUCTION: 7,
        COMMENT: 8,
        DOCUMENT: 9,
        DOCUMENT_TYPE: 10,
        DOCUMENT_FRAGMENT: 11,
        NOTATION: 12
    }, m.string = {}, m.string.DETECT_DOUBLE_ESCAPING = !1,m.string.FORCE_NON_DOM_HTML_UNESCAPING = !1,m.string.Unicode = {NBSP: "\xa0"},m.string.startsWith = function (e, t) {
        return 0 == e.lastIndexOf(t, 0)
    },m.string.endsWith = function (e, t) {
        var n = e.length - t.length;
        return n >= 0 && e.indexOf(t, n) == n
    },m.string.caseInsensitiveStartsWith = function (e, t) {
        return 0 == m.string.caseInsensitiveCompare(t, e.substr(0, t.length))
    },m.string.caseInsensitiveEndsWith = function (e, t) {
        return 0 == m.string.caseInsensitiveCompare(t, e.substr(e.length - t.length, t.length))
    },m.string.caseInsensitiveEquals = function (e, t) {
        return e.toLowerCase() == t.toLowerCase()
    },m.string.subs = function (e, t) {
        for (var n = e.split("%s"), r = "", i = Array.prototype.slice.call(arguments, 1); i.length && 1 < n.length;)r += n.shift() + i.shift();
        return r + n.join("%s")
    },m.string.collapseWhitespace = function (e) {
        return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
    },m.string.isEmptyOrWhitespace = function (e) {
        return /^[\s\xa0]*$/.test(e)
    },m.string.isEmptyString = function (e) {
        return 0 == e.length
    },m.string.isEmpty = m.string.isEmptyOrWhitespace,m.string.isEmptyOrWhitespaceSafe = function (e) {
        return m.string.isEmptyOrWhitespace(m.string.makeSafe(e))
    },m.string.isEmptySafe = m.string.isEmptyOrWhitespaceSafe,m.string.isBreakingWhitespace = function (e) {
        return !/[^\t\n\r ]/.test(e);
    },m.string.isAlpha = function (e) {
        return !/[^a-zA-Z]/.test(e)
    },m.string.isNumeric = function (e) {
        return !/[^0-9]/.test(e)
    },m.string.isAlphaNumeric = function (e) {
        return !/[^a-zA-Z0-9]/.test(e)
    },m.string.isSpace = function (e) {
        return " " == e
    },m.string.isUnicodeChar = function (e) {
        return 1 == e.length && e >= " " && "~" >= e || e >= "\x80" && "\ufffd" >= e
    },m.string.stripNewlines = function (e) {
        return e.replace(/(\r\n|\r|\n)+/g, " ")
    },m.string.canonicalizeNewlines = function (e) {
        return e.replace(/(\r\n|\r|\n)/g, "\n")
    },m.string.normalizeWhitespace = function (e) {
        return e.replace(/\xa0|\s/g, " ")
    },m.string.normalizeSpaces = function (e) {
        return e.replace(/\xa0|[ \t]+/g, " ")
    },m.string.collapseBreakingSpaces = function (e) {
        return e.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    },m.string.trim = m.TRUSTED_SITE && String.prototype.trim ? function (e) {
        return e.trim()
    } : function (e) {
        return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    },m.string.trimLeft = function (e) {
        return e.replace(/^[\s\xa0]+/, "")
    },m.string.trimRight = function (e) {
        return e.replace(/[\s\xa0]+$/, "")
    },m.string.caseInsensitiveCompare = function (e, t) {
        var n = String(e).toLowerCase(), r = String(t).toLowerCase();
        return r > n ? -1 : n == r ? 0 : 1
    },m.string.numberAwareCompare_ = function (e, t, n) {
        if (e == t)return 0;
        if (!e)return -1;
        if (!t)return 1;
        for (var r = e.toLowerCase().match(n), i = t.toLowerCase().match(n), o = Math.min(r.length, i.length), a = 0; o > a; a++) {
            n = r[a];
            var s = i[a];
            if (n != s)return e = parseInt(n, 10), !isNaN(e) && (t = parseInt(s, 10), !isNaN(t) && e - t) ? e - t : s > n ? -1 : 1
        }
        return r.length != i.length ? r.length - i.length : t > e ? -1 : 1
    },m.string.intAwareCompare = function (e, t) {
        return m.string.numberAwareCompare_(e, t, /\d+|\D+/g)
    },m.string.floatAwareCompare = function (e, t) {
        return m.string.numberAwareCompare_(e, t, /\d+|\.\d+|\D+/g)
    },m.string.numerateCompare = m.string.floatAwareCompare,m.string.urlEncode = function (e) {
        return encodeURIComponent(String(e))
    },m.string.urlDecode = function (e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    },m.string.newLineToBr = function (e, t) {
        return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>")
    },m.string.htmlEscape = function (e, t) {
        if (t)e = e.replace(m.string.AMP_RE_, "&amp;").replace(m.string.LT_RE_, "&lt;").replace(m.string.GT_RE_, "&gt;").replace(m.string.QUOT_RE_, "&quot;").replace(m.string.SINGLE_QUOTE_RE_, "&#39;").replace(m.string.NULL_RE_, "&#0;"), m.string.DETECT_DOUBLE_ESCAPING && (e = e.replace(m.string.E_RE_, "&#101;")); else {
            if (!m.string.ALL_RE_.test(e))return e;
            -1 != e.indexOf("&") && (e = e.replace(m.string.AMP_RE_, "&amp;")), -1 != e.indexOf("<") && (e = e.replace(m.string.LT_RE_, "&lt;")), -1 != e.indexOf(">") && (e = e.replace(m.string.GT_RE_, "&gt;")), -1 != e.indexOf('"') && (e = e.replace(m.string.QUOT_RE_, "&quot;")), -1 != e.indexOf("'") && (e = e.replace(m.string.SINGLE_QUOTE_RE_, "&#39;")), -1 != e.indexOf("\x00") && (e = e.replace(m.string.NULL_RE_, "&#0;")), m.string.DETECT_DOUBLE_ESCAPING && -1 != e.indexOf("e") && (e = e.replace(m.string.E_RE_, "&#101;"))
        }
        return e
    },m.string.AMP_RE_ = /&/g,m.string.LT_RE_ = /</g,m.string.GT_RE_ = />/g,m.string.QUOT_RE_ = /"/g,m.string.SINGLE_QUOTE_RE_ = /'/g,m.string.NULL_RE_ = /\x00/g,m.string.E_RE_ = /e/g,m.string.ALL_RE_ = m.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/,m.string.unescapeEntities = function (e) {
        return m.string.contains(e, "&") ? !m.string.FORCE_NON_DOM_HTML_UNESCAPING && "document"in m.global ? m.string.unescapeEntitiesUsingDom_(e) : m.string.unescapePureXmlEntities_(e) : e
    },m.string.unescapeEntitiesWithDocument = function (e, t) {
        return m.string.contains(e, "&") ? m.string.unescapeEntitiesUsingDom_(e, t) : e
    },m.string.unescapeEntitiesUsingDom_ = function (e, t) {
        var n, r = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"'};
        return n = t ? t.createElement("div") : m.global.document.createElement("div"), e.replace(m.string.HTML_ENTITY_PATTERN_, function (e, t) {
            var i = r[e];
            if (i)return i;
            if ("#" == t.charAt(0)) {
                var o = Number("0" + t.substr(1));
                isNaN(o) || (i = String.fromCharCode(o))
            }
            return i || (n.innerHTML = e + " ", i = n.firstChild.nodeValue.slice(0, -1)), r[e] = i
        })
    },m.string.unescapePureXmlEntities_ = function (e) {
        return e.replace(/&([^;]+);/g, function (e, t) {
            switch (t) {
                case"amp":
                    return "&";
                case"lt":
                    return "<";
                case"gt":
                    return ">";
                case"quot":
                    return '"';
                default:
                    if ("#" == t.charAt(0)) {
                        var n = Number("0" + t.substr(1));
                        if (!isNaN(n))return String.fromCharCode(n)
                    }
                    return e
            }
        })
    },m.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g,m.string.whitespaceEscape = function (e, t) {
        return m.string.newLineToBr(e.replace(/  /g, " &#160;"), t)
    },m.string.preserveSpaces = function (e) {
        return e.replace(/(^|[\n ]) /g, "$1" + m.string.Unicode.NBSP)
    },m.string.stripQuotes = function (e, t) {
        for (var n = t.length, r = 0; n > r; r++) {
            var i = 1 == n ? t : t.charAt(r);
            if (e.charAt(0) == i && e.charAt(e.length - 1) == i)return e.substring(1, e.length - 1)
        }
        return e
    },m.string.truncate = function (e, t, n) {
        return n && (e = m.string.unescapeEntities(e)), e.length > t && (e = e.substring(0, t - 3) + "..."), n && (e = m.string.htmlEscape(e)), e
    },m.string.truncateMiddle = function (e, t, n, r) {
        if (n && (e = m.string.unescapeEntities(e)), r && e.length > t) {
            r > t && (r = t);
            var i = e.length - r;
            e = e.substring(0, t - r) + "..." + e.substring(i)
        } else e.length > t && (r = Math.floor(t / 2), i = e.length - r, e = e.substring(0, r + t % 2) + "..." + e.substring(i));
        return n && (e = m.string.htmlEscape(e)), e
    },m.string.specialEscapeChars_ = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "	": "\\t",
        "": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "<"
    },m.string.jsEscapeCache_ = {"'": "\\'"},m.string.quote = function (e) {
        e = String(e);
        for (var t = ['"'], n = 0; n < e.length; n++) {
            var r = e.charAt(n), i = r.charCodeAt(0);
            t[n + 1] = m.string.specialEscapeChars_[r] || (i > 31 && 127 > i ? r : m.string.escapeChar(r))
        }
        return t.push('"'), t.join("")
    },m.string.escapeString = function (e) {
        for (var t = [], n = 0; n < e.length; n++)t[n] = m.string.escapeChar(e.charAt(n));
        return t.join("")
    },m.string.escapeChar = function (e) {
        if (e in m.string.jsEscapeCache_)return m.string.jsEscapeCache_[e];
        if (e in m.string.specialEscapeChars_)return m.string.jsEscapeCache_[e] = m.string.specialEscapeChars_[e];
        var t, n = e.charCodeAt(0);
        return n > 31 && 127 > n ? t = e : (256 > n ? (t = "\\x", (16 > n || n > 256) && (t += "0")) : (t = "\\u", 4096 > n && (t += "0")), t += n.toString(16).toUpperCase()), m.string.jsEscapeCache_[e] = t
    },m.string.contains = function (e, t) {
        return -1 != e.indexOf(t)
    },m.string.caseInsensitiveContains = function (e, t) {
        return m.string.contains(e.toLowerCase(), t.toLowerCase())
    },m.string.countOf = function (e, t) {
        return e && t ? e.split(t).length - 1 : 0
    },m.string.removeAt = function (e, t, n) {
        var r = e;
        return t >= 0 && t < e.length && n > 0 && (r = e.substr(0, t) + e.substr(t + n, e.length - t - n)), r
    },m.string.remove = function (e, t) {
        return e.replace(t, "")
    },m.string.removeAll = function (e, t) {
        var n = new RegExp(m.string.regExpEscape(t), "g");
        return e.replace(n, "")
    },m.string.replaceAll = function (e, t, n) {
        return t = new RegExp(m.string.regExpEscape(t), "g"), e.replace(t, n.replace(/\$/g, "$$$$"))
    },m.string.regExpEscape = function (e) {
        return String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    },m.string.repeat = String.prototype.repeat ? function (e, t) {
        return e.repeat(t)
    } : function (e, t) {
        return Array(t + 1).join(e)
    },m.string.padNumber = function (e, t, n) {
        return e = m.isDef(n) ? e.toFixed(n) : String(e), n = e.indexOf("."), -1 == n && (n = e.length), m.string.repeat("0", Math.max(0, t - n)) + e
    },m.string.makeSafe = function (e) {
        return null == e ? "" : String(e)
    },m.string.buildString = function (e) {
        return Array.prototype.join.call(arguments, "")
    },m.string.getRandomString = function () {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ m.now()).toString(36)
    },m.string.compareVersions = function (e, t) {
        for (var n = 0, r = m.string.trim(String(e)).split("."), i = m.string.trim(String(t)).split("."), o = Math.max(r.length, i.length), a = 0; 0 == n && o > a; a++) {
            var s = r[a] || "", u = i[a] || "";
            do {
                if (s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], u = /(\d*)(\D*)(.*)/.exec(u) || ["", "", "", ""], 0 == s[0].length && 0 == u[0].length)break;
                var n = 0 == s[1].length ? 0 : parseInt(s[1], 10), l = 0 == u[1].length ? 0 : parseInt(u[1], 10), n = m.string.compareElements_(n, l) || m.string.compareElements_(0 == s[2].length, 0 == u[2].length) || m.string.compareElements_(s[2], u[2]), s = s[3], u = u[3]
            } while (0 == n)
        }
        return n
    },m.string.compareElements_ = function (e, t) {
        return t > e ? -1 : e > t ? 1 : 0
    },m.string.hashCode = function (e) {
        for (var t = 0, n = 0; n < e.length; ++n)t = 31 * t + e.charCodeAt(n) >>> 0;
        return t
    },m.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0,m.string.createUniqueString = function () {
        return "goog_" + m.string.uniqueStringCounter_++
    },m.string.toNumber = function (e) {
        var t = Number(e);
        return 0 == t && m.string.isEmptyOrWhitespace(e) ? NaN : t
    },m.string.isLowerCamelCase = function (e) {
        return /^[a-z]+([A-Z][a-z]*)*$/.test(e)
    },m.string.isUpperCamelCase = function (e) {
        return /^([A-Z][a-z]*)+$/.test(e)
    },m.string.toCamelCase = function (e) {
        return String(e).replace(/\-([a-z])/g, function (e, t) {
            return t.toUpperCase()
        })
    },m.string.toSelectorCase = function (e) {
        return String(e).replace(/([A-Z])/g, "-$1").toLowerCase()
    },m.string.toTitleCase = function (e, t) {
        var n = m.isString(t) ? m.string.regExpEscape(t) : "\\s";
        return e.replace(new RegExp("(^" + (n ? "|[" + n + "]+" : "") + ")([a-z])", "g"), function (e, t, n) {
            return t + n.toUpperCase()
        })
    },m.string.capitalize = function (e) {
        return String(e.charAt(0)).toUpperCase() + String(e.substr(1)).toLowerCase()
    },m.string.parseInt = function (e) {
        return isFinite(e) && (e = String(e)), m.isString(e) ? /^\s*-?0x/i.test(e) ? parseInt(e, 16) : parseInt(e, 10) : NaN
    },m.string.splitLimit = function (e, t, n) {
        e = e.split(t);
        for (var r = []; n > 0 && e.length;)r.push(e.shift()), n--;
        return e.length && r.push(e.join(t)), r
    },m.string.lastComponent = function (e, t) {
        if (!t)return e;
        "string" == typeof t && (t = [t]);
        for (var n = -1, r = 0; r < t.length; r++)if ("" != t[r]) {
            var i = e.lastIndexOf(t[r]);
            i > n && (n = i)
        }
        return -1 == n ? e : e.slice(n + 1)
    },m.string.editDistance = function (e, t) {
        var n = [], r = [];
        if (e == t)return 0;
        if (!e.length || !t.length)return Math.max(e.length, t.length);
        for (var i = 0; i < t.length + 1; i++)n[i] = i;
        for (i = 0; i < e.length; i++) {
            r[0] = i + 1;
            for (var o = 0; o < t.length; o++)r[o + 1] = Math.min(r[o] + 1, n[o + 1] + 1, n[o] + Number(e[i] != t[o]));
            for (o = 0; o < n.length; o++)n[o] = r[o]
        }
        return r[t.length]
    },m.asserts = {},m.asserts.ENABLE_ASSERTS = m.DEBUG,m.asserts.AssertionError = function (e, t) {
        t.unshift(e), m.debug.Error.call(this, m.string.subs.apply(null, t)), t.shift(), this.messagePattern = e
    },m.inherits(m.asserts.AssertionError, m.debug.Error),m.asserts.AssertionError.prototype.name = "AssertionError",m.asserts.DEFAULT_ERROR_HANDLER = function (e) {
        throw e
    },m.asserts.errorHandler_ = m.asserts.DEFAULT_ERROR_HANDLER,m.asserts.doAssertFailure_ = function (e, t, n, r) {
        var i = "Assertion failed";
        if (n)var i = i + (": " + n), o = r; else e && (i += ": " + e, o = t);
        e = new m.asserts.AssertionError("" + i, o || []), m.asserts.errorHandler_(e)
    },m.asserts.setErrorHandler = function (e) {
        m.asserts.ENABLE_ASSERTS && (m.asserts.errorHandler_ = e)
    },m.asserts.assert = function (e, t, n) {
        return m.asserts.ENABLE_ASSERTS && !e && m.asserts.doAssertFailure_("", null, t, Array.prototype.slice.call(arguments, 2)), e
    },m.asserts.fail = function (e, t) {
        m.asserts.ENABLE_ASSERTS && m.asserts.errorHandler_(new m.asserts.AssertionError("Failure" + (e ? ": " + e : ""), Array.prototype.slice.call(arguments, 1)))
    },m.asserts.assertNumber = function (e, t, n) {
        return m.asserts.ENABLE_ASSERTS && !m.isNumber(e) && m.asserts.doAssertFailure_("Expected number but got %s: %s.", [m.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
    },m.asserts.assertString = function (e, t, n) {
        return m.asserts.ENABLE_ASSERTS && !m.isString(e) && m.asserts.doAssertFailure_("Expected string but got %s: %s.", [m.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
    },m.asserts.assertFunction = function (e, t, n) {
        return m.asserts.ENABLE_ASSERTS && !m.isFunction(e) && m.asserts.doAssertFailure_("Expected function but got %s: %s.", [m.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
    },m.asserts.assertObject = function (e, t, n) {
        return m.asserts.ENABLE_ASSERTS && !m.isObject(e) && m.asserts.doAssertFailure_("Expected object but got %s: %s.", [m.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
    },m.asserts.assertArray = function (e, t, n) {
        return m.asserts.ENABLE_ASSERTS && !m.isArray(e) && m.asserts.doAssertFailure_("Expected array but got %s: %s.", [m.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
    },m.asserts.assertBoolean = function (e, t, n) {
        return m.asserts.ENABLE_ASSERTS && !m.isBoolean(e) && m.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [m.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
    },m.asserts.assertElement = function (e, t, n) {
        return !m.asserts.ENABLE_ASSERTS || m.isObject(e) && e.nodeType == m.dom.NodeType.ELEMENT || m.asserts.doAssertFailure_("Expected Element but got %s: %s.", [m.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
    },m.asserts.assertInstanceof = function (e, t, n, r) {
        return !m.asserts.ENABLE_ASSERTS || e instanceof t || m.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [m.asserts.getType_(t), m.asserts.getType_(e)], n, Array.prototype.slice.call(arguments, 3)), e
    },m.asserts.assertObjectPrototypeIsIntact = function () {
        for (var e in Object.prototype)m.asserts.fail(e + " should not be enumerable in Object.prototype.")
    },m.asserts.getType_ = function (e) {
        return e instanceof Function ? e.displayName || e.name || "unknown type name" : e instanceof Object ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e) : null === e ? "null" : typeof e
    },m.array = {},m.NATIVE_ARRAY_PROTOTYPES = m.TRUSTED_SITE,m.array.ASSUME_NATIVE_FUNCTIONS = !1,m.array.peek = function (e) {
        return e[e.length - 1]
    },m.array.last = m.array.peek,m.array.indexOf = m.NATIVE_ARRAY_PROTOTYPES && (m.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function (e, t, n) {
        return m.asserts.assert(null != e.length), Array.prototype.indexOf.call(e, t, n)
    } : function (e, t, n) {
        if (n = null == n ? 0 : 0 > n ? Math.max(0, e.length + n) : n, m.isString(e))return m.isString(t) && 1 == t.length ? e.indexOf(t, n) : -1;
        for (; n < e.length; n++)if (n in e && e[n] === t)return n;
        return -1
    },m.array.lastIndexOf = m.NATIVE_ARRAY_PROTOTYPES && (m.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function (e, t, n) {
        return m.asserts.assert(null != e.length), Array.prototype.lastIndexOf.call(e, t, null == n ? e.length - 1 : n)
    } : function (e, t, n) {
        if (n = null == n ? e.length - 1 : n, 0 > n && (n = Math.max(0, e.length + n)), m.isString(e))return m.isString(t) && 1 == t.length ? e.lastIndexOf(t, n) : -1;
        for (; n >= 0; n--)if (n in e && e[n] === t)return n;
        return -1
    },m.array.forEach = m.NATIVE_ARRAY_PROTOTYPES && (m.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function (e, t, n) {
        m.asserts.assert(null != e.length), Array.prototype.forEach.call(e, t, n)
    } : function (e, t, n) {
        for (var r = e.length, i = m.isString(e) ? e.split("") : e, o = 0; r > o; o++)o in i && t.call(n, i[o], o, e)
    },m.array.forEachRight = function (e, t, n) {
        for (var r = e.length, i = m.isString(e) ? e.split("") : e, r = r - 1; r >= 0; --r)r in i && t.call(n, i[r], r, e)
    },m.array.filter = m.NATIVE_ARRAY_PROTOTYPES && (m.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function (e, t, n) {
        return m.asserts.assert(null != e.length), Array.prototype.filter.call(e, t, n)
    } : function (e, t, n) {
        for (var r = e.length, i = [], o = 0, a = m.isString(e) ? e.split("") : e, s = 0; r > s; s++)if (s in a) {
            var u = a[s];
            t.call(n, u, s, e) && (i[o++] = u)
        }
        return i
    },m.array.map = m.NATIVE_ARRAY_PROTOTYPES && (m.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function (e, t, n) {
        return m.asserts.assert(null != e.length), Array.prototype.map.call(e, t, n)
    } : function (e, t, n) {
        for (var r = e.length, i = Array(r), o = m.isString(e) ? e.split("") : e, a = 0; r > a; a++)a in o && (i[a] = t.call(n, o[a], a, e));
        return i
    },m.array.reduce = m.NATIVE_ARRAY_PROTOTYPES && (m.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function (e, t, n, r) {
        return m.asserts.assert(null != e.length), r && (t = m.bind(t, r)), Array.prototype.reduce.call(e, t, n)
    } : function (e, t, n, r) {
        var i = n;
        return m.array.forEach(e, function (n, o) {
            i = t.call(r, i, n, o, e)
        }), i
    },m.array.reduceRight = m.NATIVE_ARRAY_PROTOTYPES && (m.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function (e, t, n, r) {
        return m.asserts.assert(null != e.length), m.asserts.assert(null != t), r && (t = m.bind(t, r)), Array.prototype.reduceRight.call(e, t, n)
    } : function (e, t, n, r) {
        var i = n;
        return m.array.forEachRight(e, function (n, o) {
            i = t.call(r, i, n, o, e)
        }), i
    },m.array.some = m.NATIVE_ARRAY_PROTOTYPES && (m.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function (e, t, n) {
        return m.asserts.assert(null != e.length), Array.prototype.some.call(e, t, n)
    } : function (e, t, n) {
        for (var r = e.length, i = m.isString(e) ? e.split("") : e, o = 0; r > o; o++)if (o in i && t.call(n, i[o], o, e))return !0;
        return !1
    },m.array.every = m.NATIVE_ARRAY_PROTOTYPES && (m.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function (e, t, n) {
        return m.asserts.assert(null != e.length), Array.prototype.every.call(e, t, n)
    } : function (e, t, n) {
        for (var r = e.length, i = m.isString(e) ? e.split("") : e, o = 0; r > o; o++)if (o in i && !t.call(n, i[o], o, e))return !1;
        return !0
    },m.array.count = function (e, t, n) {
        var r = 0;
        return m.array.forEach(e, function (e, i, o) {
            t.call(n, e, i, o) && ++r
        }, n), r
    },m.array.find = function (e, t, n) {
        return t = m.array.findIndex(e, t, n), 0 > t ? null : m.isString(e) ? e.charAt(t) : e[t]
    },m.array.findIndex = function (e, t, n) {
        for (var r = e.length, i = m.isString(e) ? e.split("") : e, o = 0; r > o; o++)if (o in i && t.call(n, i[o], o, e))return o;
        return -1
    },m.array.findRight = function (e, t, n) {
        return t = m.array.findIndexRight(e, t, n), 0 > t ? null : m.isString(e) ? e.charAt(t) : e[t]
    },m.array.findIndexRight = function (e, t, n) {
        for (var r = e.length, i = m.isString(e) ? e.split("") : e, r = r - 1; r >= 0; r--)if (r in i && t.call(n, i[r], r, e))return r;
        return -1
    },m.array.contains = function (e, t) {
        return 0 <= m.array.indexOf(e, t)
    },m.array.isEmpty = function (e) {
        return 0 == e.length
    },m.array.clear = function (e) {
        if (!m.isArray(e))for (var t = e.length - 1; t >= 0; t--)delete e[t];
        e.length = 0
    },m.array.insert = function (e, t) {
        m.array.contains(e, t) || e.push(t)
    },m.array.insertAt = function (e, t, n) {
        m.array.splice(e, n, 0, t)
    },m.array.insertArrayAt = function (e, t, n) {
        m.partial(m.array.splice, e, n, 0).apply(null, t)
    },m.array.insertBefore = function (e, t, n) {
        var r;
        2 == arguments.length || 0 > (r = m.array.indexOf(e, n)) ? e.push(t) : m.array.insertAt(e, t, r)
    },m.array.remove = function (e, t) {
        var n, r = m.array.indexOf(e, t);
        return (n = r >= 0) && m.array.removeAt(e, r), n
    },m.array.removeLast = function (e, t) {
        var n = m.array.lastIndexOf(e, t);
        return n >= 0 ? (m.array.removeAt(e, n), !0) : !1
    },m.array.removeAt = function (e, t) {
        return m.asserts.assert(null != e.length), 1 == Array.prototype.splice.call(e, t, 1).length
    },m.array.removeIf = function (e, t, n) {
        return t = m.array.findIndex(e, t, n), t >= 0 ? (m.array.removeAt(e, t), !0) : !1
    },m.array.removeAllIf = function (e, t, n) {
        var r = 0;
        return m.array.forEachRight(e, function (i, o) {
            t.call(n, i, o, e) && m.array.removeAt(e, o) && r++
        }), r
    },m.array.concat = function (e) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    },m.array.join = function (e) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    },m.array.toArray = function (e) {
        var t = e.length;
        if (t > 0) {
            for (var n = Array(t), r = 0; t > r; r++)n[r] = e[r];
            return n
        }
        return []
    },m.array.clone = m.array.toArray,m.array.extend = function (e, t) {
        for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            if (m.isArrayLike(r)) {
                var i = e.length || 0, o = r.length || 0;
                e.length = i + o;
                for (var a = 0; o > a; a++)e[i + a] = r[a]
            } else e.push(r)
        }
    },m.array.splice = function (e, t, n, r) {
        return m.asserts.assert(null != e.length), Array.prototype.splice.apply(e, m.array.slice(arguments, 1))
    },m.array.slice = function (e, t, n) {
        return m.asserts.assert(null != e.length), 2 >= arguments.length ? Array.prototype.slice.call(e, t) : Array.prototype.slice.call(e, t, n)
    },m.array.removeDuplicates = function (e, t, n) {
        t = t || e;
        var r = function (e) {
            return m.isObject(e) ? "o" + m.getUid(e) : (typeof e).charAt(0) + e
        };
        n = n || r;
        for (var r = {}, i = 0, o = 0; o < e.length;) {
            var a = e[o++], s = n(a);
            Object.prototype.hasOwnProperty.call(r, s) || (r[s] = !0, t[i++] = a)
        }
        t.length = i
    },m.array.binarySearch = function (e, t, n) {
        return m.array.binarySearch_(e, n || m.array.defaultCompare, !1, t)
    },m.array.binarySelect = function (e, t, n) {
        return m.array.binarySearch_(e, t, !0, void 0, n)
    },m.array.binarySearch_ = function (e, t, n, r, i) {
        for (var o, a = 0, s = e.length; s > a;) {
            var u, l = a + s >> 1;
            u = n ? t.call(i, e[l], l, e) : t(r, e[l]), u > 0 ? a = l + 1 : (s = l, o = !u)
        }
        return o ? a : ~a
    },m.array.sort = function (e, t) {
        e.sort(t || m.array.defaultCompare)
    },m.array.stableSort = function (e, t) {
        for (var n = Array(e.length), r = 0; r < e.length; r++)n[r] = {index: r, value: e[r]};
        var i = t || m.array.defaultCompare;
        for (m.array.sort(n, function (e, t) {
            return i(e.value, t.value) || e.index - t.index
        }), r = 0; r < e.length; r++)e[r] = n[r].value
    },m.array.sortByKey = function (e, t, n) {
        var r = n || m.array.defaultCompare;
        m.array.sort(e, function (e, n) {
            return r(t(e), t(n))
        })
    },m.array.sortObjectsByKey = function (e, t, n) {
        m.array.sortByKey(e, function (e) {
            return e[t]
        }, n)
    },m.array.isSorted = function (e, t, n) {
        t = t || m.array.defaultCompare;
        for (var r = 1; r < e.length; r++) {
            var i = t(e[r - 1], e[r]);
            if (i > 0 || 0 == i && n)return !1
        }
        return !0
    },m.array.equals = function (e, t, n) {
        if (!m.isArrayLike(e) || !m.isArrayLike(t) || e.length != t.length)return !1;
        var r = e.length;
        n = n || m.array.defaultCompareEquality;
        for (var i = 0; r > i; i++)if (!n(e[i], t[i]))return !1;
        return !0
    },m.array.compare3 = function (e, t, n) {
        n = n || m.array.defaultCompare;
        for (var r = Math.min(e.length, t.length), i = 0; r > i; i++) {
            var o = n(e[i], t[i]);
            if (0 != o)return o
        }
        return m.array.defaultCompare(e.length, t.length)
    },m.array.defaultCompare = function (e, t) {
        return e > t ? 1 : t > e ? -1 : 0
    },m.array.inverseDefaultCompare = function (e, t) {
        return -m.array.defaultCompare(e, t)
    },m.array.defaultCompareEquality = function (e, t) {
        return e === t
    },m.array.binaryInsert = function (e, t, n) {
        return n = m.array.binarySearch(e, t, n), 0 > n ? (m.array.insertAt(e, t, -(n + 1)), !0) : !1
    },m.array.binaryRemove = function (e, t, n) {
        return t = m.array.binarySearch(e, t, n), t >= 0 ? m.array.removeAt(e, t) : !1
    },m.array.bucket = function (e, t, n) {
        for (var r = {}, i = 0; i < e.length; i++) {
            var o = e[i], a = t.call(n, o, i, e);
            m.isDef(a) && (r[a] || (r[a] = [])).push(o)
        }
        return r
    },m.array.toObject = function (e, t, n) {
        var r = {};
        return m.array.forEach(e, function (i, o) {
            r[t.call(n, i, o, e)] = i
        }), r
    },m.array.range = function (e, t, n) {
        var r = [], i = 0, o = e;
        if (n = n || 1, void 0 !== t && (i = e, o = t), 0 > n * (o - i))return [];
        if (n > 0)for (e = i; o > e; e += n)r.push(e); else for (e = i; e > o; e += n)r.push(e);
        return r
    },m.array.repeat = function (e, t) {
        for (var n = [], r = 0; t > r; r++)n[r] = e;
        return n
    },m.array.flatten = function (e) {
        for (var t = [], n = 0; n < arguments.length; n++) {
            var r = arguments[n];
            if (m.isArray(r))for (var i = 0; i < r.length; i += 8192)for (var o = m.array.slice(r, i, i + 8192), o = m.array.flatten.apply(null, o), a = 0; a < o.length; a++)t.push(o[a]); else t.push(r)
        }
        return t
    },m.array.rotate = function (e, t) {
        return m.asserts.assert(null != e.length), e.length && (t %= e.length, t > 0 ? Array.prototype.unshift.apply(e, e.splice(-t, t)) : 0 > t && Array.prototype.push.apply(e, e.splice(0, -t))), e
    },m.array.moveItem = function (e, t, n) {
        m.asserts.assert(t >= 0 && t < e.length), m.asserts.assert(n >= 0 && n < e.length), t = Array.prototype.splice.call(e, t, 1), Array.prototype.splice.call(e, n, 0, t[0])
    },m.array.zip = function (e) {
        if (!arguments.length)return [];
        for (var t = [], n = arguments[0].length, r = 1; r < arguments.length; r++)arguments[r].length < n && (n = arguments[r].length);
        for (r = 0; n > r; r++) {
            for (var i = [], o = 0; o < arguments.length; o++)i.push(arguments[o][r]);
            t.push(i)
        }
        return t
    },m.array.shuffle = function (e, t) {
        for (var n = t || Math.random, r = e.length - 1; r > 0; r--) {
            var i = Math.floor(n() * (r + 1)), o = e[r];
            e[r] = e[i], e[i] = o
        }
    },m.array.copyByIndex = function (e, t) {
        var n = [];
        return m.array.forEach(t, function (t) {
            n.push(e[t])
        }), n
    },m.array.concatMap = function (e, t, n) {
        return m.array.concat.apply([], m.array.map(e, t, n))
    },m.object = {},m.object.is = function (e, t) {
        return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
    },m.object.forEach = function (e, t, n) {
        for (var r in e)t.call(n, e[r], r, e)
    },m.object.filter = function (e, t, n) {
        var r, i = {};
        for (r in e)t.call(n, e[r], r, e) && (i[r] = e[r]);
        return i
    },m.object.map = function (e, t, n) {
        var r, i = {};
        for (r in e)i[r] = t.call(n, e[r], r, e);
        return i
    },m.object.some = function (e, t, n) {
        for (var r in e)if (t.call(n, e[r], r, e))return !0;
        return !1
    },m.object.every = function (e, t, n) {
        for (var r in e)if (!t.call(n, e[r], r, e))return !1;
        return !0
    },m.object.getCount = function (e) {
        var t, n = 0;
        for (t in e)n++;
        return n
    },m.object.getAnyKey = function (e) {
        for (var t in e)return t
    },m.object.getAnyValue = function (e) {
        for (var t in e)return e[t]
    },m.object.contains = function (e, t) {
        return m.object.containsValue(e, t)
    },m.object.getValues = function (e) {
        var t, n = [], r = 0;
        for (t in e)n[r++] = e[t];
        return n
    },m.object.getKeys = function (e) {
        var t, n = [], r = 0;
        for (t in e)n[r++] = t;
        return n
    },m.object.getValueByKeys = function (e, t) {
        for (var n = m.isArrayLike(t), r = n ? t : arguments, n = n ? 0 : 1; n < r.length && (e = e[r[n]], m.isDef(e)); n++);
        return e
    },m.object.containsKey = function (e, t) {
        return null !== e && t in e
    },m.object.containsValue = function (e, t) {
        for (var n in e)if (e[n] == t)return !0;
        return !1
    },m.object.findKey = function (e, t, n) {
        for (var r in e)if (t.call(n, e[r], r, e))return r
    },m.object.findValue = function (e, t, n) {
        return (t = m.object.findKey(e, t, n)) && e[t]
    },m.object.isEmpty = function (e) {
        for (var t in e)return !1;
        return !0
    },m.object.clear = function (e) {
        for (var t in e)delete e[t]
    },m.object.remove = function (e, t) {
        var n;
        return (n = t in e) && delete e[t], n
    },m.object.add = function (e, t, n) {
        if (null !== e && t in e)throw Error('The object already contains the key "' + t + '"');
        m.object.set(e, t, n)
    },m.object.get = function (e, t, n) {
        return null !== e && t in e ? e[t] : n
    },m.object.set = function (e, t, n) {
        e[t] = n
    },m.object.setIfUndefined = function (e, t, n) {
        return t in e ? e[t] : e[t] = n
    },m.object.setWithReturnValueIfNotSet = function (e, t, n) {
        return t in e ? e[t] : (n = n(), e[t] = n)
    },m.object.equals = function (e, t) {
        for (var n in e)if (!(n in t) || e[n] !== t[n])return !1;
        for (n in t)if (!(n in e))return !1;
        return !0
    },m.object.clone = function (e) {
        var t, n = {};
        for (t in e)n[t] = e[t];
        return n
    },m.object.unsafeClone = function (e) {
        var t = m.typeOf(e);
        if ("object" == t || "array" == t) {
            if (m.isFunction(e.clone))return e.clone();
            var n, t = "array" == t ? [] : {};
            for (n in e)t[n] = m.object.unsafeClone(e[n]);
            return t
        }
        return e
    },m.object.transpose = function (e) {
        var t, n = {};
        for (t in e)n[e[t]] = t;
        return n
    },m.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),m.object.extend = function (e, t) {
        for (var n, r, i = 1; i < arguments.length; i++) {
            r = arguments[i];
            for (n in r)e[n] = r[n];
            for (var o = 0; o < m.object.PROTOTYPE_FIELDS_.length; o++)n = m.object.PROTOTYPE_FIELDS_[o], Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
    },m.object.create = function (e) {
        var t = arguments.length;
        if (1 == t && m.isArray(arguments[0]))return m.object.create.apply(null, arguments[0]);
        if (t % 2)throw Error("Uneven number of arguments");
        for (var n = {}, r = 0; t > r; r += 2)n[arguments[r]] = arguments[r + 1];
        return n
    },m.object.createSet = function (e) {
        var t = arguments.length;
        if (1 == t && m.isArray(arguments[0]))return m.object.createSet.apply(null, arguments[0]);
        for (var n = {}, r = 0; t > r; r++)n[arguments[r]] = !0;
        return n
    },m.object.createImmutableView = function (e) {
        var t = e;
        return Object.isFrozen && !Object.isFrozen(e) && (t = Object.create(e), Object.freeze(t)), t
    },m.object.isImmutableView = function (e) {
        return !!Object.isFrozen && Object.isFrozen(e)
    },m.proto2 = {},m.proto2.Descriptor = function (e, t, n) {
        for (this.messageType_ = e, this.name_ = t.name || null, this.fullName_ = t.fullName || null, this.containingType_ = t.containingType, this.fields_ = {}, e = 0; e < n.length; e++)t = n[e], this.fields_[t.getTag()] = t
    },m.proto2.Descriptor.prototype.getName = function () {
        return this.name_
    },m.proto2.Descriptor.prototype.getFullName = function () {
        return this.fullName_
    },m.proto2.Descriptor.prototype.getContainingType = function () {
        return this.containingType_ ? this.containingType_.getDescriptor() : null
    },m.proto2.Descriptor.prototype.getFields = function () {
        var e = m.object.getValues(this.fields_);
        return m.array.sort(e, function (e, t) {
            return e.getTag() - t.getTag()
        }), e
    },m.proto2.Descriptor.prototype.getFieldsMap = function () {
        return this.fields_
    },m.proto2.Descriptor.prototype.findFieldByName = function (e) {
        return m.object.findValue(this.fields_, function (t, n, r) {
                return t.getName() == e
            }) || null
    },m.proto2.Descriptor.prototype.findFieldByTag = function (e) {
        return m.asserts.assert(m.string.isNumeric(e)), this.fields_[parseInt(e, 10)] || null
    },m.proto2.Descriptor.prototype.createMessageInstance = function () {
        return new this.messageType_
    },m.proto2.FieldDescriptor = function (e, t, n) {
        switch (this.parent_ = e, m.asserts.assert(m.string.isNumeric(t)), this.tag_ = t, this.name_ = n.name, this.isPacked_ = !!n.packed, this.isRepeated_ = !!n.repeated, this.isRequired_ = !!n.required, this.fieldType_ = n.fieldType, this.nativeType_ = n.type, this.deserializationConversionPermitted_ = !1, this.fieldType_) {
            case m.proto2.FieldDescriptor.FieldType.INT64:
            case m.proto2.FieldDescriptor.FieldType.UINT64:
            case m.proto2.FieldDescriptor.FieldType.FIXED64:
            case m.proto2.FieldDescriptor.FieldType.SFIXED64:
            case m.proto2.FieldDescriptor.FieldType.SINT64:
            case m.proto2.FieldDescriptor.FieldType.FLOAT:
            case m.proto2.FieldDescriptor.FieldType.DOUBLE:
                this.deserializationConversionPermitted_ = !0
        }
        this.defaultValue_ = n.defaultValue
    },m.proto2.FieldDescriptor.FieldType = {
        DOUBLE: 1,
        FLOAT: 2,
        INT64: 3,
        UINT64: 4,
        INT32: 5,
        FIXED64: 6,
        FIXED32: 7,
        BOOL: 8,
        STRING: 9,
        GROUP: 10,
        MESSAGE: 11,
        BYTES: 12,
        UINT32: 13,
        ENUM: 14,
        SFIXED32: 15,
        SFIXED64: 16,
        SINT32: 17,
        SINT64: 18
    },m.proto2.FieldDescriptor.prototype.getTag = function () {
        return this.tag_
    },m.proto2.FieldDescriptor.prototype.getContainingType = function () {
        return this.parent_.prototype.getDescriptor()
    },m.proto2.FieldDescriptor.prototype.getName = function () {
        return this.name_
    },m.proto2.FieldDescriptor.prototype.getDefaultValue = function () {
        if (void 0 === this.defaultValue_) {
            var e = this.nativeType_;
            if (e === Boolean)this.defaultValue_ = !1; else if (e === Number)this.defaultValue_ = 0; else {
                if (e !== String)return new e;
                this.defaultValue_ = this.deserializationConversionPermitted_ ? "0" : ""
            }
        }
        return this.defaultValue_
    },m.proto2.FieldDescriptor.prototype.getFieldType = function () {
        return this.fieldType_
    },m.proto2.FieldDescriptor.prototype.getNativeType = function () {
        return this.nativeType_
    },m.proto2.FieldDescriptor.prototype.deserializationConversionPermitted = function () {
        return this.deserializationConversionPermitted_
    },m.proto2.FieldDescriptor.prototype.getFieldMessageType = function () {
        return this.nativeType_.prototype.getDescriptor()
    },m.proto2.FieldDescriptor.prototype.isCompositeType = function () {
        return this.fieldType_ == m.proto2.FieldDescriptor.FieldType.MESSAGE || this.fieldType_ == m.proto2.FieldDescriptor.FieldType.GROUP
    },m.proto2.FieldDescriptor.prototype.isPacked = function () {
        return this.isPacked_
    },m.proto2.FieldDescriptor.prototype.isRepeated = function () {
        return this.isRepeated_
    },m.proto2.FieldDescriptor.prototype.isRequired = function () {
        return this.isRequired_
    },m.proto2.FieldDescriptor.prototype.isOptional = function () {
        return !this.isRepeated_ && !this.isRequired_
    },m.proto2.Message = function () {
        this.values_ = {}, this.fields_ = this.getDescriptor().getFieldsMap(), this.deserializedFields_ = this.lazyDeserializer_ = null
    },m.proto2.Message.FieldType = {
        DOUBLE: 1,
        FLOAT: 2,
        INT64: 3,
        UINT64: 4,
        INT32: 5,
        FIXED64: 6,
        FIXED32: 7,
        BOOL: 8,
        STRING: 9,
        GROUP: 10,
        MESSAGE: 11,
        BYTES: 12,
        UINT32: 13,
        ENUM: 14,
        SFIXED32: 15,
        SFIXED64: 16,
        SINT32: 17,
        SINT64: 18
    },m.proto2.Message.prototype.initializeForLazyDeserializer = function (e, t) {
        this.lazyDeserializer_ = e, this.values_ = t, this.deserializedFields_ = {}
    },m.proto2.Message.prototype.setUnknown = function (e, t) {
        m.asserts.assert(!this.fields_[e], "Field is not unknown in this message"), m.asserts.assert(e >= 1, "Tag " + e + ' has value "' + t + '" in descriptor ' + this.getDescriptor().getName()), m.asserts.assert(null !== t, "Value cannot be null"), this.values_[e] = t, this.deserializedFields_ && delete this.deserializedFields_[e]
    },m.proto2.Message.prototype.forEachUnknown = function (e, t) {
        var n, r = t || this;
        for (n in this.values_) {
            var i = Number(n);
            this.fields_[i] || e.call(r, i, this.values_[n])
        }
    },m.proto2.Message.prototype.getDescriptor = m.abstractMethod,m.proto2.Message.prototype.has = function (e) {
        return m.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.has$Value(e.getTag())
    },m.proto2.Message.prototype.arrayOf = function (e) {
        return m.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.array$Values(e.getTag())
    },m.proto2.Message.prototype.countOf = function (e) {
        return m.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.count$Values(e.getTag())
    },m.proto2.Message.prototype.get = function (e, t) {
        return m.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.get$Value(e.getTag(), t)
    },m.proto2.Message.prototype.getOrDefault = function (e, t) {
        return m.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.get$ValueOrDefault(e.getTag(), t)
    },m.proto2.Message.prototype.set = function (e, t) {
        m.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.set$Value(e.getTag(), t)
    },m.proto2.Message.prototype.add = function (e, t) {
        m.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.add$Value(e.getTag(), t)
    },m.proto2.Message.prototype.clear = function (e) {
        m.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.clear$Field(e.getTag())
    },m.proto2.Message.prototype.equals = function (e) {
        if (!e || this.constructor != e.constructor)return !1;
        for (var t = this.getDescriptor().getFields(), n = 0; n < t.length; n++) {
            var r = t[n], i = r.getTag();
            if (this.has$Value(i) != e.has$Value(i))return !1;
            if (this.has$Value(i)) {
                var o = r.isCompositeType(), a = this.getValueForTag_(i), i = e.getValueForTag_(i);
                if (r.isRepeated()) {
                    if (a.length != i.length)return !1;
                    for (r = 0; r < a.length; r++) {
                        var s = a[r], u = i[r];
                        if (o ? !s.equals(u) : s != u)return !1
                    }
                } else if (o ? !a.equals(i) : a != i)return !1
            }
        }
        return !0
    },m.proto2.Message.prototype.copyFrom = function (e) {
        m.asserts.assert(this.constructor == e.constructor, "The source message must have the same type."), this != e && (this.values_ = {},
        this.deserializedFields_ && (this.deserializedFields_ = {}), this.mergeFrom(e))
    },m.proto2.Message.prototype.mergeFrom = function (e) {
        m.asserts.assert(this.constructor == e.constructor, "The source message must have the same type.");
        for (var t = this.getDescriptor().getFields(), n = 0; n < t.length; n++) {
            var r = t[n], i = r.getTag();
            if (e.has$Value(i)) {
                this.deserializedFields_ && delete this.deserializedFields_[r.getTag()];
                var o = r.isCompositeType();
                if (r.isRepeated())for (var r = e.array$Values(i), a = 0; a < r.length; a++)this.add$Value(i, o ? r[a].clone() : r[a]); else r = e.getValueForTag_(i), o ? (o = this.getValueForTag_(i)) ? o.mergeFrom(r) : this.set$Value(i, r.clone()) : this.set$Value(i, r)
            }
        }
    },m.proto2.Message.prototype.clone = function () {
        var e = new this.constructor;
        return e.copyFrom(this), e
    },m.proto2.Message.prototype.initDefaults = function (e) {
        for (var t = this.getDescriptor().getFields(), n = 0; n < t.length; n++) {
            var r = t[n], i = r.getTag(), o = r.isCompositeType();
            if (this.has$Value(i) || r.isRepeated() || (o ? this.values_[i] = new (r.getNativeType()) : e && (this.values_[i] = r.getDefaultValue())), o)if (r.isRepeated())for (r = this.array$Values(i), i = 0; i < r.length; i++)r[i].initDefaults(e); else this.get$Value(i).initDefaults(e)
        }
    },m.proto2.Message.prototype.has$Value = function (e) {
        return null != this.values_[e]
    },m.proto2.Message.prototype.getValueForTag_ = function (e) {
        var t = this.values_[e];
        return m.isDefAndNotNull(t) ? this.lazyDeserializer_ ? e in this.deserializedFields_ ? this.deserializedFields_[e] : (t = this.lazyDeserializer_.deserializeField(this, this.fields_[e], t), this.deserializedFields_[e] = t) : t : null
    },m.proto2.Message.prototype.get$Value = function (e, t) {
        var n = this.getValueForTag_(e);
        if (this.fields_[e].isRepeated()) {
            var r = t || 0;
            return m.asserts.assert(r >= 0 && r < n.length, "Given index %s is out of bounds.  Repeated field length: %s", r, n.length), n[r]
        }
        return n
    },m.proto2.Message.prototype.get$ValueOrDefault = function (e, t) {
        return this.has$Value(e) ? this.get$Value(e, t) : this.fields_[e].getDefaultValue()
    },m.proto2.Message.prototype.array$Values = function (e) {
        return this.getValueForTag_(e) || []
    },m.proto2.Message.prototype.count$Values = function (e) {
        return this.fields_[e].isRepeated() ? this.has$Value(e) ? this.values_[e].length : 0 : this.has$Value(e) ? 1 : 0
    },m.proto2.Message.prototype.set$Value = function (e, t) {
        m.asserts.ENABLE_ASSERTS && this.checkFieldType_(this.fields_[e], t), this.values_[e] = t, this.deserializedFields_ && (this.deserializedFields_[e] = t)
    },m.proto2.Message.prototype.add$Value = function (e, t) {
        m.asserts.ENABLE_ASSERTS && this.checkFieldType_(this.fields_[e], t), this.values_[e] || (this.values_[e] = []), this.values_[e].push(t), this.deserializedFields_ && delete this.deserializedFields_[e]
    },m.proto2.Message.prototype.checkFieldType_ = function (e, t) {
        e.getFieldType() == m.proto2.FieldDescriptor.FieldType.ENUM ? m.asserts.assertNumber(t) : m.asserts.assert(Object(t).constructor == e.getNativeType())
    },m.proto2.Message.prototype.clear$Field = function (e) {
        delete this.values_[e], this.deserializedFields_ && delete this.deserializedFields_[e]
    },m.proto2.Message.createDescriptor = function (e, t) {
        var n, r = [], i = t[0];
        for (n in t)0 != n && r.push(new m.proto2.FieldDescriptor(e, n, t[n]));
        return new m.proto2.Descriptor(e, i, r)
    },m.proto2.Serializer = function () {
    },m.proto2.Serializer.DECODE_SYMBOLIC_ENUMS = !1,m.proto2.Serializer.prototype.serialize = m.abstractMethod,m.proto2.Serializer.prototype.getSerializedValue = function (e, t) {
        return e.isCompositeType() ? this.serialize(t) : m.isNumber(t) && !isFinite(t) ? t.toString() : t
    },m.proto2.Serializer.prototype.deserialize = function (e, t) {
        var n = e.createMessageInstance();
        return this.deserializeTo(n, t), m.asserts.assert(n instanceof m.proto2.Message), n
    },m.proto2.Serializer.prototype.deserializeTo = m.abstractMethod,m.proto2.Serializer.prototype.getDeserializedValue = function (e, t) {
        if (e.isCompositeType())return t instanceof m.proto2.Message ? t : this.deserialize(e.getFieldMessageType(), t);
        if (e.getFieldType() == m.proto2.FieldDescriptor.FieldType.ENUM) {
            if (m.proto2.Serializer.DECODE_SYMBOLIC_ENUMS && m.isString(t)) {
                var n = e.getNativeType();
                if (n.hasOwnProperty(t))return n[t]
            }
            return m.isString(t) && m.proto2.Serializer.INTEGER_REGEX.test(t) && (n = Number(t), n > 0) ? n : t
        }
        if (!e.deserializationConversionPermitted())return t;
        if (n = e.getNativeType(), n === String) {
            if (m.isNumber(t))return String(t)
        } else if (n === Number && m.isString(t) && ("Infinity" === t || "-Infinity" === t || "NaN" === t || m.proto2.Serializer.INTEGER_REGEX.test(t)))return Number(t);
        return t
    },m.proto2.Serializer.INTEGER_REGEX = /^-?[0-9]+$/,m.proto2.LazyDeserializer = function () {
    },m.inherits(m.proto2.LazyDeserializer, m.proto2.Serializer),m.proto2.LazyDeserializer.prototype.deserialize = function (e, t) {
        var n = e.createMessageInstance();
        return n.initializeForLazyDeserializer(this, t), m.asserts.assert(n instanceof m.proto2.Message), n
    },m.proto2.LazyDeserializer.prototype.deserializeTo = function (e, t) {
        throw Error("Unimplemented")
    },m.proto2.LazyDeserializer.prototype.deserializeField = m.abstractMethod,m.proto2.PbLiteSerializer = function () {
    },m.inherits(m.proto2.PbLiteSerializer, m.proto2.LazyDeserializer),m.proto2.PbLiteSerializer.prototype.zeroIndexing_ = !1,m.proto2.PbLiteSerializer.prototype.setZeroIndexed = function (e) {
        this.zeroIndexing_ = e
    },m.proto2.PbLiteSerializer.prototype.serialize = function (e) {
        for (var t = e.getDescriptor().getFields(), n = [], r = this.zeroIndexing_, i = 0; i < t.length; i++) {
            var o = t[i];
            if (e.has(o)) {
                var a = o.getTag(), a = r ? a - 1 : a;
                if (o.isRepeated()) {
                    n[a] = [];
                    for (var s = 0; s < e.countOf(o); s++)n[a][s] = this.getSerializedValue(o, e.get(o, s))
                } else n[a] = this.getSerializedValue(o, e.get(o))
            }
        }
        return e.forEachUnknown(function (e, t) {
            n[r ? e - 1 : e] = t
        }), n
    },m.proto2.PbLiteSerializer.prototype.deserializeField = function (e, t, n) {
        if (null == n)return n;
        if (t.isRepeated()) {
            e = [], m.asserts.assert(m.isArray(n), "Value must be array: %s", n);
            for (var r = 0; r < n.length; r++)e[r] = this.getDeserializedValue(t, n[r]);
            return e
        }
        return this.getDeserializedValue(t, n)
    },m.proto2.PbLiteSerializer.prototype.getSerializedValue = function (e, t) {
        return e.getFieldType() == m.proto2.FieldDescriptor.FieldType.BOOL ? t ? 1 : 0 : m.proto2.Serializer.prototype.getSerializedValue.apply(this, arguments)
    },m.proto2.PbLiteSerializer.prototype.getDeserializedValue = function (e, t) {
        return e.getFieldType() == m.proto2.FieldDescriptor.FieldType.BOOL ? (m.asserts.assert(m.isNumber(t) || m.isBoolean(t), "Value is expected to be a number or boolean"), !!t) : m.proto2.Serializer.prototype.getDeserializedValue.apply(this, arguments)
    },m.proto2.PbLiteSerializer.prototype.deserialize = function (e, t) {
        var n = t;
        if (this.zeroIndexing_) {
            var r, n = [];
            for (r in t)n[parseInt(r, 10) + 1] = t[r]
        }
        return m.proto2.PbLiteSerializer.superClass_.deserialize.call(this, e, n)
    },m.string.StringBuffer = function (e, t) {
        null != e && this.append.apply(this, arguments)
    },m.string.StringBuffer.prototype.buffer_ = "",m.string.StringBuffer.prototype.set = function (e) {
        this.buffer_ = "" + e
    },m.string.StringBuffer.prototype.append = function (e, t, n) {
        if (this.buffer_ += String(e), null != t)for (var r = 1; r < arguments.length; r++)this.buffer_ += arguments[r];
        return this
    },m.string.StringBuffer.prototype.clear = function () {
        this.buffer_ = ""
    },m.string.StringBuffer.prototype.getLength = function () {
        return this.buffer_.length
    },m.string.StringBuffer.prototype.toString = function () {
        return this.buffer_
    };
    var g = {phonenumbers: {}};
    g.phonenumbers.NumberFormat = function () {
        m.proto2.Message.call(this)
    }, m.inherits(g.phonenumbers.NumberFormat, m.proto2.Message), g.phonenumbers.NumberFormat.descriptor_ = null, g.phonenumbers.NumberFormat.prototype.getPattern = function () {
        return this.get$Value(1)
    }, g.phonenumbers.NumberFormat.prototype.getPatternOrDefault = function () {
        return this.get$ValueOrDefault(1)
    }, g.phonenumbers.NumberFormat.prototype.setPattern = function (e) {
        this.set$Value(1, e)
    }, g.phonenumbers.NumberFormat.prototype.hasPattern = function () {
        return this.has$Value(1)
    }, g.phonenumbers.NumberFormat.prototype.patternCount = function () {
        return this.count$Values(1)
    }, g.phonenumbers.NumberFormat.prototype.clearPattern = function () {
        this.clear$Field(1)
    }, g.phonenumbers.NumberFormat.prototype.getFormat = function () {
        return this.get$Value(2)
    }, g.phonenumbers.NumberFormat.prototype.getFormatOrDefault = function () {
        return this.get$ValueOrDefault(2)
    }, g.phonenumbers.NumberFormat.prototype.setFormat = function (e) {
        this.set$Value(2, e)
    }, g.phonenumbers.NumberFormat.prototype.hasFormat = function () {
        return this.has$Value(2)
    }, g.phonenumbers.NumberFormat.prototype.formatCount = function () {
        return this.count$Values(2)
    }, g.phonenumbers.NumberFormat.prototype.clearFormat = function () {
        this.clear$Field(2)
    }, g.phonenumbers.NumberFormat.prototype.getLeadingDigitsPattern = function (e) {
        return this.get$Value(3, e)
    }, g.phonenumbers.NumberFormat.prototype.getLeadingDigitsPatternOrDefault = function (e) {
        return this.get$ValueOrDefault(3, e)
    }, g.phonenumbers.NumberFormat.prototype.addLeadingDigitsPattern = function (e) {
        this.add$Value(3, e)
    }, g.phonenumbers.NumberFormat.prototype.leadingDigitsPatternArray = function () {
        return this.array$Values(3)
    }, g.phonenumbers.NumberFormat.prototype.hasLeadingDigitsPattern = function () {
        return this.has$Value(3)
    }, g.phonenumbers.NumberFormat.prototype.leadingDigitsPatternCount = function () {
        return this.count$Values(3)
    }, g.phonenumbers.NumberFormat.prototype.clearLeadingDigitsPattern = function () {
        this.clear$Field(3)
    }, g.phonenumbers.NumberFormat.prototype.getNationalPrefixFormattingRule = function () {
        return this.get$Value(4)
    }, g.phonenumbers.NumberFormat.prototype.getNationalPrefixFormattingRuleOrDefault = function () {
        return this.get$ValueOrDefault(4)
    }, g.phonenumbers.NumberFormat.prototype.setNationalPrefixFormattingRule = function (e) {
        this.set$Value(4, e)
    }, g.phonenumbers.NumberFormat.prototype.hasNationalPrefixFormattingRule = function () {
        return this.has$Value(4)
    }, g.phonenumbers.NumberFormat.prototype.nationalPrefixFormattingRuleCount = function () {
        return this.count$Values(4)
    }, g.phonenumbers.NumberFormat.prototype.clearNationalPrefixFormattingRule = function () {
        this.clear$Field(4)
    }, g.phonenumbers.NumberFormat.prototype.getNationalPrefixOptionalWhenFormatting = function () {
        return this.get$Value(6)
    }, g.phonenumbers.NumberFormat.prototype.getNationalPrefixOptionalWhenFormattingOrDefault = function () {
        return this.get$ValueOrDefault(6)
    }, g.phonenumbers.NumberFormat.prototype.setNationalPrefixOptionalWhenFormatting = function (e) {
        this.set$Value(6, e)
    }, g.phonenumbers.NumberFormat.prototype.hasNationalPrefixOptionalWhenFormatting = function () {
        return this.has$Value(6)
    }, g.phonenumbers.NumberFormat.prototype.nationalPrefixOptionalWhenFormattingCount = function () {
        return this.count$Values(6)
    }, g.phonenumbers.NumberFormat.prototype.clearNationalPrefixOptionalWhenFormatting = function () {
        this.clear$Field(6)
    }, g.phonenumbers.NumberFormat.prototype.getDomesticCarrierCodeFormattingRule = function () {
        return this.get$Value(5)
    }, g.phonenumbers.NumberFormat.prototype.getDomesticCarrierCodeFormattingRuleOrDefault = function () {
        return this.get$ValueOrDefault(5)
    }, g.phonenumbers.NumberFormat.prototype.setDomesticCarrierCodeFormattingRule = function (e) {
        this.set$Value(5, e)
    }, g.phonenumbers.NumberFormat.prototype.hasDomesticCarrierCodeFormattingRule = function () {
        return this.has$Value(5)
    }, g.phonenumbers.NumberFormat.prototype.domesticCarrierCodeFormattingRuleCount = function () {
        return this.count$Values(5)
    }, g.phonenumbers.NumberFormat.prototype.clearDomesticCarrierCodeFormattingRule = function () {
        this.clear$Field(5)
    }, g.phonenumbers.PhoneNumberDesc = function () {
        m.proto2.Message.call(this)
    }, m.inherits(g.phonenumbers.PhoneNumberDesc, m.proto2.Message), g.phonenumbers.PhoneNumberDesc.descriptor_ = null, g.phonenumbers.PhoneNumberDesc.prototype.getNationalNumberPattern = function () {
        return this.get$Value(2)
    }, g.phonenumbers.PhoneNumberDesc.prototype.getNationalNumberPatternOrDefault = function () {
        return this.get$ValueOrDefault(2)
    }, g.phonenumbers.PhoneNumberDesc.prototype.setNationalNumberPattern = function (e) {
        this.set$Value(2, e)
    }, g.phonenumbers.PhoneNumberDesc.prototype.hasNationalNumberPattern = function () {
        return this.has$Value(2)
    }, g.phonenumbers.PhoneNumberDesc.prototype.nationalNumberPatternCount = function () {
        return this.count$Values(2)
    }, g.phonenumbers.PhoneNumberDesc.prototype.clearNationalNumberPattern = function () {
        this.clear$Field(2)
    }, g.phonenumbers.PhoneNumberDesc.prototype.getPossibleNumberPattern = function () {
        return this.get$Value(3)
    }, g.phonenumbers.PhoneNumberDesc.prototype.getPossibleNumberPatternOrDefault = function () {
        return this.get$ValueOrDefault(3)
    }, g.phonenumbers.PhoneNumberDesc.prototype.setPossibleNumberPattern = function (e) {
        this.set$Value(3, e)
    }, g.phonenumbers.PhoneNumberDesc.prototype.hasPossibleNumberPattern = function () {
        return this.has$Value(3)
    }, g.phonenumbers.PhoneNumberDesc.prototype.possibleNumberPatternCount = function () {
        return this.count$Values(3)
    }, g.phonenumbers.PhoneNumberDesc.prototype.clearPossibleNumberPattern = function () {
        this.clear$Field(3)
    }, g.phonenumbers.PhoneNumberDesc.prototype.getPossibleLength = function (e) {
        return this.get$Value(9, e)
    }, g.phonenumbers.PhoneNumberDesc.prototype.getPossibleLengthOrDefault = function (e) {
        return this.get$ValueOrDefault(9, e)
    }, g.phonenumbers.PhoneNumberDesc.prototype.addPossibleLength = function (e) {
        this.add$Value(9, e)
    }, g.phonenumbers.PhoneNumberDesc.prototype.possibleLengthArray = function () {
        return this.array$Values(9)
    }, g.phonenumbers.PhoneNumberDesc.prototype.hasPossibleLength = function () {
        return this.has$Value(9)
    }, g.phonenumbers.PhoneNumberDesc.prototype.possibleLengthCount = function () {
        return this.count$Values(9)
    }, g.phonenumbers.PhoneNumberDesc.prototype.clearPossibleLength = function () {
        this.clear$Field(9)
    }, g.phonenumbers.PhoneNumberDesc.prototype.getPossibleLengthLocalOnly = function (e) {
        return this.get$Value(10, e)
    }, g.phonenumbers.PhoneNumberDesc.prototype.getPossibleLengthLocalOnlyOrDefault = function (e) {
        return this.get$ValueOrDefault(10, e)
    }, g.phonenumbers.PhoneNumberDesc.prototype.addPossibleLengthLocalOnly = function (e) {
        this.add$Value(10, e)
    }, g.phonenumbers.PhoneNumberDesc.prototype.possibleLengthLocalOnlyArray = function () {
        return this.array$Values(10)
    }, g.phonenumbers.PhoneNumberDesc.prototype.hasPossibleLengthLocalOnly = function () {
        return this.has$Value(10)
    }, g.phonenumbers.PhoneNumberDesc.prototype.possibleLengthLocalOnlyCount = function () {
        return this.count$Values(10)
    }, g.phonenumbers.PhoneNumberDesc.prototype.clearPossibleLengthLocalOnly = function () {
        this.clear$Field(10)
    }, g.phonenumbers.PhoneNumberDesc.prototype.getExampleNumber = function () {
        return this.get$Value(6)
    }, g.phonenumbers.PhoneNumberDesc.prototype.getExampleNumberOrDefault = function () {
        return this.get$ValueOrDefault(6)
    }, g.phonenumbers.PhoneNumberDesc.prototype.setExampleNumber = function (e) {
        this.set$Value(6, e)
    }, g.phonenumbers.PhoneNumberDesc.prototype.hasExampleNumber = function () {
        return this.has$Value(6)
    }, g.phonenumbers.PhoneNumberDesc.prototype.exampleNumberCount = function () {
        return this.count$Values(6)
    }, g.phonenumbers.PhoneNumberDesc.prototype.clearExampleNumber = function () {
        this.clear$Field(6)
    }, g.phonenumbers.PhoneNumberDesc.prototype.getNationalNumberMatcherData = function () {
        return this.get$Value(7)
    }, g.phonenumbers.PhoneNumberDesc.prototype.getNationalNumberMatcherDataOrDefault = function () {
        return this.get$ValueOrDefault(7)
    }, g.phonenumbers.PhoneNumberDesc.prototype.setNationalNumberMatcherData = function (e) {
        this.set$Value(7, e)
    }, g.phonenumbers.PhoneNumberDesc.prototype.hasNationalNumberMatcherData = function () {
        return this.has$Value(7)
    }, g.phonenumbers.PhoneNumberDesc.prototype.nationalNumberMatcherDataCount = function () {
        return this.count$Values(7)
    }, g.phonenumbers.PhoneNumberDesc.prototype.clearNationalNumberMatcherData = function () {
        this.clear$Field(7)
    }, g.phonenumbers.PhoneNumberDesc.prototype.getPossibleNumberMatcherData = function () {
        return this.get$Value(8)
    }, g.phonenumbers.PhoneNumberDesc.prototype.getPossibleNumberMatcherDataOrDefault = function () {
        return this.get$ValueOrDefault(8)
    }, g.phonenumbers.PhoneNumberDesc.prototype.setPossibleNumberMatcherData = function (e) {
        this.set$Value(8, e)
    }, g.phonenumbers.PhoneNumberDesc.prototype.hasPossibleNumberMatcherData = function () {
        return this.has$Value(8)
    }, g.phonenumbers.PhoneNumberDesc.prototype.possibleNumberMatcherDataCount = function () {
        return this.count$Values(8)
    }, g.phonenumbers.PhoneNumberDesc.prototype.clearPossibleNumberMatcherData = function () {
        this.clear$Field(8)
    }, g.phonenumbers.PhoneMetadata = function () {
        m.proto2.Message.call(this)
    }, m.inherits(g.phonenumbers.PhoneMetadata, m.proto2.Message), g.phonenumbers.PhoneMetadata.descriptor_ = null, g.phonenumbers.PhoneMetadata.prototype.getGeneralDesc = function () {
        return this.get$Value(1)
    }, g.phonenumbers.PhoneMetadata.prototype.getGeneralDescOrDefault = function () {
        return this.get$ValueOrDefault(1)
    }, g.phonenumbers.PhoneMetadata.prototype.setGeneralDesc = function (e) {
        this.set$Value(1, e)
    }, g.phonenumbers.PhoneMetadata.prototype.hasGeneralDesc = function () {
        return this.has$Value(1)
    }, g.phonenumbers.PhoneMetadata.prototype.generalDescCount = function () {
        return this.count$Values(1)
    }, g.phonenumbers.PhoneMetadata.prototype.clearGeneralDesc = function () {
        this.clear$Field(1)
    }, g.phonenumbers.PhoneMetadata.prototype.getFixedLine = function () {
        return this.get$Value(2)
    }, g.phonenumbers.PhoneMetadata.prototype.getFixedLineOrDefault = function () {
        return this.get$ValueOrDefault(2)
    }, g.phonenumbers.PhoneMetadata.prototype.setFixedLine = function (e) {
        this.set$Value(2, e)
    }, g.phonenumbers.PhoneMetadata.prototype.hasFixedLine = function () {
        return this.has$Value(2)
    }, g.phonenumbers.PhoneMetadata.prototype.fixedLineCount = function () {
        return this.count$Values(2)
    },g.phonenumbers.PhoneMetadata.prototype.clearFixedLine = function () {
        this.clear$Field(2)
    },g.phonenumbers.PhoneMetadata.prototype.getMobile = function () {
        return this.get$Value(3)
    },g.phonenumbers.PhoneMetadata.prototype.getMobileOrDefault = function () {
        return this.get$ValueOrDefault(3)
    },g.phonenumbers.PhoneMetadata.prototype.setMobile = function (e) {
        this.set$Value(3, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasMobile = function () {
        return this.has$Value(3)
    },g.phonenumbers.PhoneMetadata.prototype.mobileCount = function () {
        return this.count$Values(3)
    },g.phonenumbers.PhoneMetadata.prototype.clearMobile = function () {
        this.clear$Field(3)
    },g.phonenumbers.PhoneMetadata.prototype.getTollFree = function () {
        return this.get$Value(4)
    },g.phonenumbers.PhoneMetadata.prototype.getTollFreeOrDefault = function () {
        return this.get$ValueOrDefault(4)
    },g.phonenumbers.PhoneMetadata.prototype.setTollFree = function (e) {
        this.set$Value(4, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasTollFree = function () {
        return this.has$Value(4)
    },g.phonenumbers.PhoneMetadata.prototype.tollFreeCount = function () {
        return this.count$Values(4)
    },g.phonenumbers.PhoneMetadata.prototype.clearTollFree = function () {
        this.clear$Field(4)
    },g.phonenumbers.PhoneMetadata.prototype.getPremiumRate = function () {
        return this.get$Value(5)
    },g.phonenumbers.PhoneMetadata.prototype.getPremiumRateOrDefault = function () {
        return this.get$ValueOrDefault(5)
    },g.phonenumbers.PhoneMetadata.prototype.setPremiumRate = function (e) {
        this.set$Value(5, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasPremiumRate = function () {
        return this.has$Value(5)
    },g.phonenumbers.PhoneMetadata.prototype.premiumRateCount = function () {
        return this.count$Values(5)
    },g.phonenumbers.PhoneMetadata.prototype.clearPremiumRate = function () {
        this.clear$Field(5)
    },g.phonenumbers.PhoneMetadata.prototype.getSharedCost = function () {
        return this.get$Value(6)
    },g.phonenumbers.PhoneMetadata.prototype.getSharedCostOrDefault = function () {
        return this.get$ValueOrDefault(6)
    },g.phonenumbers.PhoneMetadata.prototype.setSharedCost = function (e) {
        this.set$Value(6, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasSharedCost = function () {
        return this.has$Value(6)
    },g.phonenumbers.PhoneMetadata.prototype.sharedCostCount = function () {
        return this.count$Values(6)
    },g.phonenumbers.PhoneMetadata.prototype.clearSharedCost = function () {
        this.clear$Field(6)
    },g.phonenumbers.PhoneMetadata.prototype.getPersonalNumber = function () {
        return this.get$Value(7)
    },g.phonenumbers.PhoneMetadata.prototype.getPersonalNumberOrDefault = function () {
        return this.get$ValueOrDefault(7)
    },g.phonenumbers.PhoneMetadata.prototype.setPersonalNumber = function (e) {
        this.set$Value(7, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasPersonalNumber = function () {
        return this.has$Value(7)
    },g.phonenumbers.PhoneMetadata.prototype.personalNumberCount = function () {
        return this.count$Values(7)
    },g.phonenumbers.PhoneMetadata.prototype.clearPersonalNumber = function () {
        this.clear$Field(7)
    },g.phonenumbers.PhoneMetadata.prototype.getVoip = function () {
        return this.get$Value(8)
    },g.phonenumbers.PhoneMetadata.prototype.getVoipOrDefault = function () {
        return this.get$ValueOrDefault(8)
    },g.phonenumbers.PhoneMetadata.prototype.setVoip = function (e) {
        this.set$Value(8, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasVoip = function () {
        return this.has$Value(8)
    },g.phonenumbers.PhoneMetadata.prototype.voipCount = function () {
        return this.count$Values(8)
    },g.phonenumbers.PhoneMetadata.prototype.clearVoip = function () {
        this.clear$Field(8)
    },g.phonenumbers.PhoneMetadata.prototype.getPager = function () {
        return this.get$Value(21)
    },g.phonenumbers.PhoneMetadata.prototype.getPagerOrDefault = function () {
        return this.get$ValueOrDefault(21)
    },g.phonenumbers.PhoneMetadata.prototype.setPager = function (e) {
        this.set$Value(21, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasPager = function () {
        return this.has$Value(21)
    },g.phonenumbers.PhoneMetadata.prototype.pagerCount = function () {
        return this.count$Values(21)
    },g.phonenumbers.PhoneMetadata.prototype.clearPager = function () {
        this.clear$Field(21)
    },g.phonenumbers.PhoneMetadata.prototype.getUan = function () {
        return this.get$Value(25)
    },g.phonenumbers.PhoneMetadata.prototype.getUanOrDefault = function () {
        return this.get$ValueOrDefault(25)
    },g.phonenumbers.PhoneMetadata.prototype.setUan = function (e) {
        this.set$Value(25, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasUan = function () {
        return this.has$Value(25)
    },g.phonenumbers.PhoneMetadata.prototype.uanCount = function () {
        return this.count$Values(25)
    },g.phonenumbers.PhoneMetadata.prototype.clearUan = function () {
        this.clear$Field(25)
    },g.phonenumbers.PhoneMetadata.prototype.getEmergency = function () {
        return this.get$Value(27)
    },g.phonenumbers.PhoneMetadata.prototype.getEmergencyOrDefault = function () {
        return this.get$ValueOrDefault(27)
    },g.phonenumbers.PhoneMetadata.prototype.setEmergency = function (e) {
        this.set$Value(27, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasEmergency = function () {
        return this.has$Value(27)
    },g.phonenumbers.PhoneMetadata.prototype.emergencyCount = function () {
        return this.count$Values(27)
    },g.phonenumbers.PhoneMetadata.prototype.clearEmergency = function () {
        this.clear$Field(27)
    },g.phonenumbers.PhoneMetadata.prototype.getVoicemail = function () {
        return this.get$Value(28)
    },g.phonenumbers.PhoneMetadata.prototype.getVoicemailOrDefault = function () {
        return this.get$ValueOrDefault(28)
    },g.phonenumbers.PhoneMetadata.prototype.setVoicemail = function (e) {
        this.set$Value(28, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasVoicemail = function () {
        return this.has$Value(28)
    },g.phonenumbers.PhoneMetadata.prototype.voicemailCount = function () {
        return this.count$Values(28)
    },g.phonenumbers.PhoneMetadata.prototype.clearVoicemail = function () {
        this.clear$Field(28)
    },g.phonenumbers.PhoneMetadata.prototype.getNoInternationalDialling = function () {
        return this.get$Value(24)
    },g.phonenumbers.PhoneMetadata.prototype.getNoInternationalDiallingOrDefault = function () {
        return this.get$ValueOrDefault(24)
    },g.phonenumbers.PhoneMetadata.prototype.setNoInternationalDialling = function (e) {
        this.set$Value(24, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasNoInternationalDialling = function () {
        return this.has$Value(24)
    },g.phonenumbers.PhoneMetadata.prototype.noInternationalDiallingCount = function () {
        return this.count$Values(24)
    },g.phonenumbers.PhoneMetadata.prototype.clearNoInternationalDialling = function () {
        this.clear$Field(24)
    },g.phonenumbers.PhoneMetadata.prototype.getId = function () {
        return this.get$Value(9)
    },g.phonenumbers.PhoneMetadata.prototype.getIdOrDefault = function () {
        return this.get$ValueOrDefault(9)
    },g.phonenumbers.PhoneMetadata.prototype.setId = function (e) {
        this.set$Value(9, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasId = function () {
        return this.has$Value(9)
    },g.phonenumbers.PhoneMetadata.prototype.idCount = function () {
        return this.count$Values(9)
    },g.phonenumbers.PhoneMetadata.prototype.clearId = function () {
        this.clear$Field(9)
    },g.phonenumbers.PhoneMetadata.prototype.getCountryCode = function () {
        return this.get$Value(10)
    },g.phonenumbers.PhoneMetadata.prototype.getCountryCodeOrDefault = function () {
        return this.get$ValueOrDefault(10)
    },g.phonenumbers.PhoneMetadata.prototype.setCountryCode = function (e) {
        this.set$Value(10, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasCountryCode = function () {
        return this.has$Value(10)
    },g.phonenumbers.PhoneMetadata.prototype.countryCodeCount = function () {
        return this.count$Values(10)
    },g.phonenumbers.PhoneMetadata.prototype.clearCountryCode = function () {
        this.clear$Field(10)
    },g.phonenumbers.PhoneMetadata.prototype.getInternationalPrefix = function () {
        return this.get$Value(11)
    },g.phonenumbers.PhoneMetadata.prototype.getInternationalPrefixOrDefault = function () {
        return this.get$ValueOrDefault(11)
    },g.phonenumbers.PhoneMetadata.prototype.setInternationalPrefix = function (e) {
        this.set$Value(11, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasInternationalPrefix = function () {
        return this.has$Value(11)
    },g.phonenumbers.PhoneMetadata.prototype.internationalPrefixCount = function () {
        return this.count$Values(11)
    },g.phonenumbers.PhoneMetadata.prototype.clearInternationalPrefix = function () {
        this.clear$Field(11)
    },g.phonenumbers.PhoneMetadata.prototype.getPreferredInternationalPrefix = function () {
        return this.get$Value(17)
    },g.phonenumbers.PhoneMetadata.prototype.getPreferredInternationalPrefixOrDefault = function () {
        return this.get$ValueOrDefault(17)
    },g.phonenumbers.PhoneMetadata.prototype.setPreferredInternationalPrefix = function (e) {
        this.set$Value(17, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasPreferredInternationalPrefix = function () {
        return this.has$Value(17)
    },g.phonenumbers.PhoneMetadata.prototype.preferredInternationalPrefixCount = function () {
        return this.count$Values(17)
    },g.phonenumbers.PhoneMetadata.prototype.clearPreferredInternationalPrefix = function () {
        this.clear$Field(17)
    },g.phonenumbers.PhoneMetadata.prototype.getNationalPrefix = function () {
        return this.get$Value(12)
    },g.phonenumbers.PhoneMetadata.prototype.getNationalPrefixOrDefault = function () {
        return this.get$ValueOrDefault(12)
    },g.phonenumbers.PhoneMetadata.prototype.setNationalPrefix = function (e) {
        this.set$Value(12, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasNationalPrefix = function () {
        return this.has$Value(12)
    },g.phonenumbers.PhoneMetadata.prototype.nationalPrefixCount = function () {
        return this.count$Values(12)
    },g.phonenumbers.PhoneMetadata.prototype.clearNationalPrefix = function () {
        this.clear$Field(12)
    },g.phonenumbers.PhoneMetadata.prototype.getPreferredExtnPrefix = function () {
        return this.get$Value(13)
    },g.phonenumbers.PhoneMetadata.prototype.getPreferredExtnPrefixOrDefault = function () {
        return this.get$ValueOrDefault(13)
    },g.phonenumbers.PhoneMetadata.prototype.setPreferredExtnPrefix = function (e) {
        this.set$Value(13, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasPreferredExtnPrefix = function () {
        return this.has$Value(13)
    },g.phonenumbers.PhoneMetadata.prototype.preferredExtnPrefixCount = function () {
        return this.count$Values(13)
    },g.phonenumbers.PhoneMetadata.prototype.clearPreferredExtnPrefix = function () {
        this.clear$Field(13)
    },g.phonenumbers.PhoneMetadata.prototype.getNationalPrefixForParsing = function () {
        return this.get$Value(15)
    },g.phonenumbers.PhoneMetadata.prototype.getNationalPrefixForParsingOrDefault = function () {
        return this.get$ValueOrDefault(15)
    },g.phonenumbers.PhoneMetadata.prototype.setNationalPrefixForParsing = function (e) {
        this.set$Value(15, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasNationalPrefixForParsing = function () {
        return this.has$Value(15)
    },g.phonenumbers.PhoneMetadata.prototype.nationalPrefixForParsingCount = function () {
        return this.count$Values(15)
    },g.phonenumbers.PhoneMetadata.prototype.clearNationalPrefixForParsing = function () {
        this.clear$Field(15)
    },g.phonenumbers.PhoneMetadata.prototype.getNationalPrefixTransformRule = function () {
        return this.get$Value(16)
    },g.phonenumbers.PhoneMetadata.prototype.getNationalPrefixTransformRuleOrDefault = function () {
        return this.get$ValueOrDefault(16)
    },g.phonenumbers.PhoneMetadata.prototype.setNationalPrefixTransformRule = function (e) {
        this.set$Value(16, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasNationalPrefixTransformRule = function () {
        return this.has$Value(16)
    },g.phonenumbers.PhoneMetadata.prototype.nationalPrefixTransformRuleCount = function () {
        return this.count$Values(16)
    },g.phonenumbers.PhoneMetadata.prototype.clearNationalPrefixTransformRule = function () {
        this.clear$Field(16)
    },g.phonenumbers.PhoneMetadata.prototype.getSameMobileAndFixedLinePattern = function () {
        return this.get$Value(18)
    },g.phonenumbers.PhoneMetadata.prototype.getSameMobileAndFixedLinePatternOrDefault = function () {
        return this.get$ValueOrDefault(18)
    },g.phonenumbers.PhoneMetadata.prototype.setSameMobileAndFixedLinePattern = function (e) {
        this.set$Value(18, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasSameMobileAndFixedLinePattern = function () {
        return this.has$Value(18)
    },g.phonenumbers.PhoneMetadata.prototype.sameMobileAndFixedLinePatternCount = function () {
        return this.count$Values(18)
    },g.phonenumbers.PhoneMetadata.prototype.clearSameMobileAndFixedLinePattern = function () {
        this.clear$Field(18)
    },g.phonenumbers.PhoneMetadata.prototype.getNumberFormat = function (e) {
        return this.get$Value(19, e)
    },g.phonenumbers.PhoneMetadata.prototype.getNumberFormatOrDefault = function (e) {
        return this.get$ValueOrDefault(19, e)
    },g.phonenumbers.PhoneMetadata.prototype.addNumberFormat = function (e) {
        this.add$Value(19, e)
    },g.phonenumbers.PhoneMetadata.prototype.numberFormatArray = function () {
        return this.array$Values(19)
    },g.phonenumbers.PhoneMetadata.prototype.hasNumberFormat = function () {
        return this.has$Value(19)
    },g.phonenumbers.PhoneMetadata.prototype.numberFormatCount = function () {
        return this.count$Values(19)
    },g.phonenumbers.PhoneMetadata.prototype.clearNumberFormat = function () {
        this.clear$Field(19)
    },g.phonenumbers.PhoneMetadata.prototype.getIntlNumberFormat = function (e) {
        return this.get$Value(20, e)
    },g.phonenumbers.PhoneMetadata.prototype.getIntlNumberFormatOrDefault = function (e) {
        return this.get$ValueOrDefault(20, e)
    },g.phonenumbers.PhoneMetadata.prototype.addIntlNumberFormat = function (e) {
        this.add$Value(20, e)
    },g.phonenumbers.PhoneMetadata.prototype.intlNumberFormatArray = function () {
        return this.array$Values(20)
    },g.phonenumbers.PhoneMetadata.prototype.hasIntlNumberFormat = function () {
        return this.has$Value(20)
    },g.phonenumbers.PhoneMetadata.prototype.intlNumberFormatCount = function () {
        return this.count$Values(20)
    },g.phonenumbers.PhoneMetadata.prototype.clearIntlNumberFormat = function () {
        this.clear$Field(20)
    },g.phonenumbers.PhoneMetadata.prototype.getMainCountryForCode = function () {
        return this.get$Value(22)
    },g.phonenumbers.PhoneMetadata.prototype.getMainCountryForCodeOrDefault = function () {
        return this.get$ValueOrDefault(22)
    },g.phonenumbers.PhoneMetadata.prototype.setMainCountryForCode = function (e) {
        this.set$Value(22, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasMainCountryForCode = function () {
        return this.has$Value(22)
    },g.phonenumbers.PhoneMetadata.prototype.mainCountryForCodeCount = function () {
        return this.count$Values(22)
    },g.phonenumbers.PhoneMetadata.prototype.clearMainCountryForCode = function () {
        this.clear$Field(22)
    },g.phonenumbers.PhoneMetadata.prototype.getLeadingDigits = function () {
        return this.get$Value(23)
    },g.phonenumbers.PhoneMetadata.prototype.getLeadingDigitsOrDefault = function () {
        return this.get$ValueOrDefault(23)
    },g.phonenumbers.PhoneMetadata.prototype.setLeadingDigits = function (e) {
        this.set$Value(23, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasLeadingDigits = function () {
        return this.has$Value(23)
    },g.phonenumbers.PhoneMetadata.prototype.leadingDigitsCount = function () {
        return this.count$Values(23)
    },g.phonenumbers.PhoneMetadata.prototype.clearLeadingDigits = function () {
        this.clear$Field(23)
    },g.phonenumbers.PhoneMetadata.prototype.getLeadingZeroPossible = function () {
        return this.get$Value(26)
    },g.phonenumbers.PhoneMetadata.prototype.getLeadingZeroPossibleOrDefault = function () {
        return this.get$ValueOrDefault(26)
    },g.phonenumbers.PhoneMetadata.prototype.setLeadingZeroPossible = function (e) {
        this.set$Value(26, e)
    },g.phonenumbers.PhoneMetadata.prototype.hasLeadingZeroPossible = function () {
        return this.has$Value(26)
    },g.phonenumbers.PhoneMetadata.prototype.leadingZeroPossibleCount = function () {
        return this.count$Values(26)
    },g.phonenumbers.PhoneMetadata.prototype.clearLeadingZeroPossible = function () {
        this.clear$Field(26)
    },g.phonenumbers.PhoneMetadataCollection = function () {
        m.proto2.Message.call(this)
    },m.inherits(g.phonenumbers.PhoneMetadataCollection, m.proto2.Message),g.phonenumbers.PhoneMetadataCollection.descriptor_ = null,g.phonenumbers.PhoneMetadataCollection.prototype.getMetadata = function (e) {
        return this.get$Value(1, e)
    },g.phonenumbers.PhoneMetadataCollection.prototype.getMetadataOrDefault = function (e) {
        return this.get$ValueOrDefault(1, e)
    },g.phonenumbers.PhoneMetadataCollection.prototype.addMetadata = function (e) {
        this.add$Value(1, e)
    },g.phonenumbers.PhoneMetadataCollection.prototype.metadataArray = function () {
        return this.array$Values(1)
    },g.phonenumbers.PhoneMetadataCollection.prototype.hasMetadata = function () {
        return this.has$Value(1)
    },g.phonenumbers.PhoneMetadataCollection.prototype.metadataCount = function () {
        return this.count$Values(1)
    },g.phonenumbers.PhoneMetadataCollection.prototype.clearMetadata = function () {
        this.clear$Field(1)
    },g.phonenumbers.NumberFormat.prototype.getDescriptor = function () {
        var e = g.phonenumbers.NumberFormat.descriptor_;
        return e || (g.phonenumbers.NumberFormat.descriptor_ = e = m.proto2.Message.createDescriptor(g.phonenumbers.NumberFormat, {
            0: {
                name: "NumberFormat",
                fullName: "i18n.phonenumbers.NumberFormat"
            },
            1: {name: "pattern", required: !0, fieldType: m.proto2.Message.FieldType.STRING, type: String},
            2: {name: "format", required: !0, fieldType: m.proto2.Message.FieldType.STRING, type: String},
            3: {
                name: "leading_digits_pattern",
                repeated: !0,
                fieldType: m.proto2.Message.FieldType.STRING,
                type: String
            },
            4: {name: "national_prefix_formatting_rule", fieldType: m.proto2.Message.FieldType.STRING, type: String},
            6: {
                name: "national_prefix_optional_when_formatting",
                fieldType: m.proto2.Message.FieldType.BOOL,
                type: Boolean
            },
            5: {
                name: "domestic_carrier_code_formatting_rule",
                fieldType: m.proto2.Message.FieldType.STRING,
                type: String
            }
        })), e
    },g.phonenumbers.NumberFormat.getDescriptor = g.phonenumbers.NumberFormat.prototype.getDescriptor,g.phonenumbers.PhoneNumberDesc.prototype.getDescriptor = function () {
        var e = g.phonenumbers.PhoneNumberDesc.descriptor_;
        return e || (g.phonenumbers.PhoneNumberDesc.descriptor_ = e = m.proto2.Message.createDescriptor(g.phonenumbers.PhoneNumberDesc, {
            0: {
                name: "PhoneNumberDesc",
                fullName: "i18n.phonenumbers.PhoneNumberDesc"
            },
            2: {name: "national_number_pattern", fieldType: m.proto2.Message.FieldType.STRING, type: String},
            3: {name: "possible_number_pattern", fieldType: m.proto2.Message.FieldType.STRING, type: String},
            9: {name: "possible_length", repeated: !0, fieldType: m.proto2.Message.FieldType.INT32, type: Number},
            10: {
                name: "possible_length_local_only",
                repeated: !0,
                fieldType: m.proto2.Message.FieldType.INT32,
                type: Number
            },
            6: {name: "example_number", fieldType: m.proto2.Message.FieldType.STRING, type: String},
            7: {name: "national_number_matcher_data", fieldType: m.proto2.Message.FieldType.BYTES, type: String},
            8: {name: "possible_number_matcher_data", fieldType: m.proto2.Message.FieldType.BYTES, type: String}
        })), e
    },g.phonenumbers.PhoneNumberDesc.getDescriptor = g.phonenumbers.PhoneNumberDesc.prototype.getDescriptor,g.phonenumbers.PhoneMetadata.prototype.getDescriptor = function () {
        var e = g.phonenumbers.PhoneMetadata.descriptor_;
        return e || (g.phonenumbers.PhoneMetadata.descriptor_ = e = m.proto2.Message.createDescriptor(g.phonenumbers.PhoneMetadata, {
            0: {
                name: "PhoneMetadata",
                fullName: "i18n.phonenumbers.PhoneMetadata"
            },
            1: {
                name: "general_desc",
                fieldType: m.proto2.Message.FieldType.MESSAGE,
                type: g.phonenumbers.PhoneNumberDesc
            },
            2: {
                name: "fixed_line",
                fieldType: m.proto2.Message.FieldType.MESSAGE,
                type: g.phonenumbers.PhoneNumberDesc
            },
            3: {name: "mobile", fieldType: m.proto2.Message.FieldType.MESSAGE, type: g.phonenumbers.PhoneNumberDesc},
            4: {name: "toll_free", fieldType: m.proto2.Message.FieldType.MESSAGE, type: g.phonenumbers.PhoneNumberDesc},
            5: {
                name: "premium_rate",
                fieldType: m.proto2.Message.FieldType.MESSAGE,
                type: g.phonenumbers.PhoneNumberDesc
            },
            6: {
                name: "shared_cost",
                fieldType: m.proto2.Message.FieldType.MESSAGE,
                type: g.phonenumbers.PhoneNumberDesc
            },
            7: {
                name: "personal_number",
                fieldType: m.proto2.Message.FieldType.MESSAGE,
                type: g.phonenumbers.PhoneNumberDesc
            },
            8: {name: "voip", fieldType: m.proto2.Message.FieldType.MESSAGE, type: g.phonenumbers.PhoneNumberDesc},
            21: {name: "pager", fieldType: m.proto2.Message.FieldType.MESSAGE, type: g.phonenumbers.PhoneNumberDesc},
            25: {name: "uan", fieldType: m.proto2.Message.FieldType.MESSAGE, type: g.phonenumbers.PhoneNumberDesc},
            27: {
                name: "emergency",
                fieldType: m.proto2.Message.FieldType.MESSAGE,
                type: g.phonenumbers.PhoneNumberDesc
            },
            28: {
                name: "voicemail",
                fieldType: m.proto2.Message.FieldType.MESSAGE,
                type: g.phonenumbers.PhoneNumberDesc
            },
            24: {
                name: "no_international_dialling",
                fieldType: m.proto2.Message.FieldType.MESSAGE,
                type: g.phonenumbers.PhoneNumberDesc
            },
            9: {name: "id", required: !0, fieldType: m.proto2.Message.FieldType.STRING, type: String},
            10: {name: "country_code", fieldType: m.proto2.Message.FieldType.INT32, type: Number},
            11: {name: "international_prefix", fieldType: m.proto2.Message.FieldType.STRING, type: String},
            17: {name: "preferred_international_prefix", fieldType: m.proto2.Message.FieldType.STRING, type: String},
            12: {name: "national_prefix", fieldType: m.proto2.Message.FieldType.STRING, type: String},
            13: {name: "preferred_extn_prefix", fieldType: m.proto2.Message.FieldType.STRING, type: String},
            15: {name: "national_prefix_for_parsing", fieldType: m.proto2.Message.FieldType.STRING, type: String},
            16: {name: "national_prefix_transform_rule", fieldType: m.proto2.Message.FieldType.STRING, type: String},
            18: {
                name: "same_mobile_and_fixed_line_pattern",
                fieldType: m.proto2.Message.FieldType.BOOL,
                defaultValue: !1,
                type: Boolean
            },
            19: {
                name: "number_format",
                repeated: !0,
                fieldType: m.proto2.Message.FieldType.MESSAGE,
                type: g.phonenumbers.NumberFormat
            },
            20: {
                name: "intl_number_format",
                repeated: !0,
                fieldType: m.proto2.Message.FieldType.MESSAGE,
                type: g.phonenumbers.NumberFormat
            },
            22: {
                name: "main_country_for_code",
                fieldType: m.proto2.Message.FieldType.BOOL,
                defaultValue: !1,
                type: Boolean
            },
            23: {name: "leading_digits", fieldType: m.proto2.Message.FieldType.STRING, type: String},
            26: {
                name: "leading_zero_possible",
                fieldType: m.proto2.Message.FieldType.BOOL,
                defaultValue: !1,
                type: Boolean
            }
        })), e
    },g.phonenumbers.PhoneMetadata.getDescriptor = g.phonenumbers.PhoneMetadata.prototype.getDescriptor,g.phonenumbers.PhoneMetadataCollection.prototype.getDescriptor = function () {
        var e = g.phonenumbers.PhoneMetadataCollection.descriptor_;
        return e || (g.phonenumbers.PhoneMetadataCollection.descriptor_ = e = m.proto2.Message.createDescriptor(g.phonenumbers.PhoneMetadataCollection, {
            0: {
                name: "PhoneMetadataCollection",
                fullName: "i18n.phonenumbers.PhoneMetadataCollection"
            },
            1: {
                name: "metadata",
                repeated: !0,
                fieldType: m.proto2.Message.FieldType.MESSAGE,
                type: g.phonenumbers.PhoneMetadata
            }
        })), e
    },g.phonenumbers.PhoneMetadataCollection.getDescriptor = g.phonenumbers.PhoneMetadataCollection.prototype.getDescriptor,g.phonenumbers.PhoneNumber = function () {
        m.proto2.Message.call(this)
    },m.inherits(g.phonenumbers.PhoneNumber, m.proto2.Message),g.phonenumbers.PhoneNumber.prototype.getCountryCode = function () {
        return this.get$Value(1)
    },g.phonenumbers.PhoneNumber.prototype.getCountryCodeOrDefault = function () {
        return this.get$ValueOrDefault(1)
    },g.phonenumbers.PhoneNumber.prototype.setCountryCode = function (e) {
        this.set$Value(1, e)
    },g.phonenumbers.PhoneNumber.prototype.hasCountryCode = function () {
        return this.has$Value(1)
    },g.phonenumbers.PhoneNumber.prototype.countryCodeCount = function () {
        return this.count$Values(1)
    },g.phonenumbers.PhoneNumber.prototype.clearCountryCode = function () {
        this.clear$Field(1)
    },g.phonenumbers.PhoneNumber.prototype.getNationalNumber = function () {
        return this.get$Value(2)
    },g.phonenumbers.PhoneNumber.prototype.getNationalNumberOrDefault = function () {
        return this.get$ValueOrDefault(2)
    },g.phonenumbers.PhoneNumber.prototype.setNationalNumber = function (e) {
        this.set$Value(2, e)
    },g.phonenumbers.PhoneNumber.prototype.hasNationalNumber = function () {
        return this.has$Value(2)
    },g.phonenumbers.PhoneNumber.prototype.nationalNumberCount = function () {
        return this.count$Values(2)
    },g.phonenumbers.PhoneNumber.prototype.clearNationalNumber = function () {
        this.clear$Field(2)
    },g.phonenumbers.PhoneNumber.prototype.getExtension = function () {
        return this.get$Value(3)
    },g.phonenumbers.PhoneNumber.prototype.getExtensionOrDefault = function () {
        return this.get$ValueOrDefault(3)
    },g.phonenumbers.PhoneNumber.prototype.setExtension = function (e) {
        this.set$Value(3, e)
    },g.phonenumbers.PhoneNumber.prototype.hasExtension = function () {
        return this.has$Value(3)
    },g.phonenumbers.PhoneNumber.prototype.extensionCount = function () {
        return this.count$Values(3)
    },g.phonenumbers.PhoneNumber.prototype.clearExtension = function () {
        this.clear$Field(3)
    },g.phonenumbers.PhoneNumber.prototype.getItalianLeadingZero = function () {
        return this.get$Value(4)
    },g.phonenumbers.PhoneNumber.prototype.getItalianLeadingZeroOrDefault = function () {
        return this.get$ValueOrDefault(4)
    },g.phonenumbers.PhoneNumber.prototype.setItalianLeadingZero = function (e) {
        this.set$Value(4, e)
    },g.phonenumbers.PhoneNumber.prototype.hasItalianLeadingZero = function () {
        return this.has$Value(4)
    },g.phonenumbers.PhoneNumber.prototype.italianLeadingZeroCount = function () {
        return this.count$Values(4)
    },g.phonenumbers.PhoneNumber.prototype.clearItalianLeadingZero = function () {
        this.clear$Field(4)
    },g.phonenumbers.PhoneNumber.prototype.getNumberOfLeadingZeros = function () {
        return this.get$Value(8)
    },g.phonenumbers.PhoneNumber.prototype.getNumberOfLeadingZerosOrDefault = function () {
        return this.get$ValueOrDefault(8)
    },g.phonenumbers.PhoneNumber.prototype.setNumberOfLeadingZeros = function (e) {
        this.set$Value(8, e)
    },g.phonenumbers.PhoneNumber.prototype.hasNumberOfLeadingZeros = function () {
        return this.has$Value(8)
    },g.phonenumbers.PhoneNumber.prototype.numberOfLeadingZerosCount = function () {
        return this.count$Values(8)
    },g.phonenumbers.PhoneNumber.prototype.clearNumberOfLeadingZeros = function () {
        this.clear$Field(8)
    },g.phonenumbers.PhoneNumber.prototype.getRawInput = function () {
        return this.get$Value(5)
    },g.phonenumbers.PhoneNumber.prototype.getRawInputOrDefault = function () {
        return this.get$ValueOrDefault(5)
    },g.phonenumbers.PhoneNumber.prototype.setRawInput = function (e) {
        this.set$Value(5, e)
    },g.phonenumbers.PhoneNumber.prototype.hasRawInput = function () {
        return this.has$Value(5)
    },g.phonenumbers.PhoneNumber.prototype.rawInputCount = function () {
        return this.count$Values(5)
    },g.phonenumbers.PhoneNumber.prototype.clearRawInput = function () {
        this.clear$Field(5)
    },g.phonenumbers.PhoneNumber.prototype.getCountryCodeSource = function () {
        return this.get$Value(6)
    },g.phonenumbers.PhoneNumber.prototype.getCountryCodeSourceOrDefault = function () {
        return this.get$ValueOrDefault(6)
    },g.phonenumbers.PhoneNumber.prototype.setCountryCodeSource = function (e) {
        this.set$Value(6, e)
    },g.phonenumbers.PhoneNumber.prototype.hasCountryCodeSource = function () {
        return this.has$Value(6)
    },g.phonenumbers.PhoneNumber.prototype.countryCodeSourceCount = function () {
        return this.count$Values(6)
    },g.phonenumbers.PhoneNumber.prototype.clearCountryCodeSource = function () {
        this.clear$Field(6)
    },g.phonenumbers.PhoneNumber.prototype.getPreferredDomesticCarrierCode = function () {
        return this.get$Value(7)
    },g.phonenumbers.PhoneNumber.prototype.getPreferredDomesticCarrierCodeOrDefault = function () {
        return this.get$ValueOrDefault(7)
    },g.phonenumbers.PhoneNumber.prototype.setPreferredDomesticCarrierCode = function (e) {
        this.set$Value(7, e)
    },g.phonenumbers.PhoneNumber.prototype.hasPreferredDomesticCarrierCode = function () {
        return this.has$Value(7)
    },g.phonenumbers.PhoneNumber.prototype.preferredDomesticCarrierCodeCount = function () {
        return this.count$Values(7)
    },g.phonenumbers.PhoneNumber.prototype.clearPreferredDomesticCarrierCode = function () {
        this.clear$Field(7)
    },g.phonenumbers.PhoneNumber.CountryCodeSource = {
        FROM_NUMBER_WITH_PLUS_SIGN: 1,
        FROM_NUMBER_WITH_IDD: 5,
        FROM_NUMBER_WITHOUT_PLUS_SIGN: 10,
        FROM_DEFAULT_COUNTRY: 20
    },g.phonenumbers.PhoneNumber.prototype.getDescriptor = function () {
        return g.phonenumbers.PhoneNumber.descriptor_ || (g.phonenumbers.PhoneNumber.descriptor_ = m.proto2.Message.createDescriptor(g.phonenumbers.PhoneNumber, {
            0: {
                name: "PhoneNumber",
                fullName: "i18n.phonenumbers.PhoneNumber"
            },
            1: {name: "country_code", required: !0, fieldType: m.proto2.Message.FieldType.INT32, type: Number},
            2: {name: "national_number", required: !0, fieldType: m.proto2.Message.FieldType.UINT64, type: Number},
            3: {name: "extension", fieldType: m.proto2.Message.FieldType.STRING, type: String},
            4: {name: "italian_leading_zero", fieldType: m.proto2.Message.FieldType.BOOL, type: Boolean},
            8: {
                name: "number_of_leading_zeros",
                fieldType: m.proto2.Message.FieldType.INT32,
                defaultValue: 1,
                type: Number
            },
            5: {name: "raw_input", fieldType: m.proto2.Message.FieldType.STRING, type: String},
            6: {
                name: "country_code_source",
                fieldType: m.proto2.Message.FieldType.ENUM,
                defaultValue: g.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN,
                type: g.phonenumbers.PhoneNumber.CountryCodeSource
            },
            7: {name: "preferred_domestic_carrier_code", fieldType: m.proto2.Message.FieldType.STRING, type: String}
        })), g.phonenumbers.PhoneNumber.descriptor_
    },g.phonenumbers.PhoneNumber.ctor = g.phonenumbers.PhoneNumber,g.phonenumbers.PhoneNumber.ctor.getDescriptor = g.phonenumbers.PhoneNumber.prototype.getDescriptor,g.phonenumbers.metadata = {},g.phonenumbers.metadata.countryCodeToRegionCodeMap = {
        1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),
        7: ["RU", "KZ"],
        20: ["EG"],
        27: ["ZA"],
        30: ["GR"],
        31: ["NL"],
        32: ["BE"],
        33: ["FR"],
        34: ["ES"],
        36: ["HU"],
        39: ["IT", "VA"],
        40: ["RO"],
        41: ["CH"],
        43: ["AT"],
        44: ["GB", "GG", "IM", "JE"],
        45: ["DK"],
        46: ["SE"],
        47: ["NO", "SJ"],
        48: ["PL"],
        49: ["DE"],
        51: ["PE"],
        52: ["MX"],
        53: ["CU"],
        54: ["AR"],
        55: ["BR"],
        56: ["CL"],
        57: ["CO"],
        58: ["VE"],
        60: ["MY"],
        61: ["AU", "CC", "CX"],
        62: ["ID"],
        63: ["PH"],
        64: ["NZ"],
        65: ["SG"],
        66: ["TH"],
        81: ["JP"],
        82: ["KR"],
        84: ["VN"],
        86: ["CN"],
        90: ["TR"],
        91: ["IN"],
        92: ["PK"],
        93: ["AF"],
        94: ["LK"],
        95: ["MM"],
        98: ["IR"],
        211: ["SS"],
        212: ["MA", "EH"],
        213: ["DZ"],
        216: ["TN"],
        218: ["LY"],
        220: ["GM"],
        221: ["SN"],
        222: ["MR"],
        223: ["ML"],
        224: ["GN"],
        225: ["CI"],
        226: ["BF"],
        227: ["NE"],
        228: ["TG"],
        229: ["BJ"],
        230: ["MU"],
        231: ["LR"],
        232: ["SL"],
        233: ["GH"],
        234: ["NG"],
        235: ["TD"],
        236: ["CF"],
        237: ["CM"],
        238: ["CV"],
        239: ["ST"],
        240: ["GQ"],
        241: ["GA"],
        242: ["CG"],
        243: ["CD"],
        244: ["AO"],
        245: ["GW"],
        246: ["IO"],
        247: ["AC"],
        248: ["SC"],
        249: ["SD"],
        250: ["RW"],
        251: ["ET"],
        252: ["SO"],
        253: ["DJ"],
        254: ["KE"],
        255: ["TZ"],
        256: ["UG"],
        257: ["BI"],
        258: ["MZ"],
        260: ["ZM"],
        261: ["MG"],
        262: ["RE", "YT"],
        263: ["ZW"],
        264: ["NA"],
        265: ["MW"],
        266: ["LS"],
        267: ["BW"],
        268: ["SZ"],
        269: ["KM"],
        290: ["SH", "TA"],
        291: ["ER"],
        297: ["AW"],
        298: ["FO"],
        299: ["GL"],
        350: ["GI"],
        351: ["PT"],
        352: ["LU"],
        353: ["IE"],
        354: ["IS"],
        355: ["AL"],
        356: ["MT"],
        357: ["CY"],
        358: ["FI", "AX"],
        359: ["BG"],
        370: ["LT"],
        371: ["LV"],
        372: ["EE"],
        373: ["MD"],
        374: ["AM"],
        375: ["BY"],
        376: ["AD"],
        377: ["MC"],
        378: ["SM"],
        380: ["UA"],
        381: ["RS"],
        382: ["ME"],
        385: ["HR"],
        386: ["SI"],
        387: ["BA"],
        389: ["MK"],
        420: ["CZ"],
        421: ["SK"],
        423: ["LI"],
        500: ["FK"],
        501: ["BZ"],
        502: ["GT"],
        503: ["SV"],
        504: ["HN"],
        505: ["NI"],
        506: ["CR"],
        507: ["PA"],
        508: ["PM"],
        509: ["HT"],
        590: ["GP", "BL", "MF"],
        591: ["BO"],
        592: ["GY"],
        593: ["EC"],
        594: ["GF"],
        595: ["PY"],
        596: ["MQ"],
        597: ["SR"],
        598: ["UY"],
        599: ["CW", "BQ"],
        670: ["TL"],
        672: ["NF"],
        673: ["BN"],
        674: ["NR"],
        675: ["PG"],
        676: ["TO"],
        677: ["SB"],
        678: ["VU"],
        679: ["FJ"],
        680: ["PW"],
        681: ["WF"],
        682: ["CK"],
        683: ["NU"],
        685: ["WS"],
        686: ["KI"],
        687: ["NC"],
        688: ["TV"],
        689: ["PF"],
        690: ["TK"],
        691: ["FM"],
        692: ["MH"],
        800: ["001"],
        808: ["001"],
        850: ["KP"],
        852: ["HK"],
        853: ["MO"],
        855: ["KH"],
        856: ["LA"],
        870: ["001"],
        878: ["001"],
        880: ["BD"],
        881: ["001"],
        882: ["001"],
        883: ["001"],
        886: ["TW"],
        888: ["001"],
        960: ["MV"],
        961: ["LB"],
        962: ["JO"],
        963: ["SY"],
        964: ["IQ"],
        965: ["KW"],
        966: ["SA"],
        967: ["YE"],
        968: ["OM"],
        970: ["PS"],
        971: ["AE"],
        972: ["IL"],
        973: ["BH"],
        974: ["QA"],
        975: ["BT"],
        976: ["MN"],
        977: ["NP"],
        979: ["001"],
        992: ["TJ"],
        993: ["TM"],
        994: ["AZ"],
        995: ["GE"],
        996: ["KG"],
        998: ["UZ"]
    },g.phonenumbers.metadata.countryToMetadata = {
        AC: [, [, , "[46]\\d{4}|[01589]\\d{5}", "\\d{5,6}", , , , , , [5, 6]], [, , "6[2-467]\\d{3}", "\\d{5}", , , "62889", , , [5]], [, , "4\\d{4}", "\\d{5}", , , "40123", , , [5]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "AC", 247, "00", , , , , , , , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "[01589]\\d{5}", "\\d{6}", , , "542011", , , [6]], , , [, , "NA", "NA", , , , , , [-1]]],
        AD: [, [, , "(?:[346-9]|180)\\d{5}", "\\d{6,8}", , , , , , [6, 8]], [, , "[78]\\d{5}", "\\d{6}", , , "712345", , , [6]], [, , "[346]\\d{5}", "\\d{6}", , , "312345", , , [6]], [, , "180[02]\\d{4}", "\\d{8}", , , "18001234", , , [8]], [, , "9\\d{5}", "\\d{6}", , , "912345", , , [6]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "AD", 376, "00", , , , , , , , [[, "(\\d{3})(\\d{3})", "$1 $2", ["[346-9]"]], [, "(180[02])(\\d{4})", "$1 $2", ["1"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        AE: [, [, , "[2-79]\\d{7,8}|800\\d{2,9}", "\\d{5,12}", , , , , , [5, 6, 7, 8, 9, 10, 11, 12]], [, , "[2-4679][2-8]\\d{6}", "\\d{7,8}", , , "22345678", , , [8]], [, , "5[024-6]\\d{7}", "\\d{9}", , , "501234567", , , [9]], [, , "400\\d{6}|800\\d{2,9}", "\\d{5,12}", , , "800123456"], [, , "900[02]\\d{5}", "\\d{9}", , , "900234567", , , [9]], [, , "700[05]\\d{5}", "\\d{9}", , , "700012345", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "AE", 971, "00", "0", , , "0", , , , [[, "([2-4679])(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-4679][2-8]"], "0$1"], [, "(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], [, "([479]00)(\\d)(\\d{5})", "$1 $2 $3", ["[479]0"], "$1"], [, "([68]00)(\\d{2,9})", "$1 $2", ["60|8"], "$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "600[25]\\d{5}", "\\d{9}", , , "600212345", , , [9]], , , [, , "NA", "NA", , , , , , [-1]]],
        AF: [, [, , "[2-7]\\d{8}", "\\d{7,9}", , , , , , [9], [7]], [, , "(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}", "\\d{7,9}", , , "234567890"], [, , "7(?:[014-9]\\d{7}|2[89]\\d{6})", "\\d{9}", , , "701234567"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "AF", 93, "00", "0", , , "0", , , , [[, "([2-7]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        AG: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}", "\\d{7}(?:\\d{3})?", , , "2684601234"], [, , "268(?:464|7(?:2\\d|3[246]|64|7[0-689]|8[02-68]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "2684641234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "26848[01]\\d{4}", "\\d{7}(?:\\d{3})?", , , "2684801234"], "AG", 1, "011", "1", , , "1", , , , , , [, , "26840[69]\\d{4}", "\\d{7}(?:\\d{3})?", , , "2684061234"], , "268", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        AI: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "2644(?:6[12]|9[78])\\d{4}", "\\d{7}(?:\\d{3})?", , , "2644612345"], [, , "264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}", "\\d{7}(?:\\d{3})?", , , "2642351234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "AI", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "264", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        AL: [, [, , "[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}", "\\d{5,9}", , , , , , [6, 7, 8, 9], [5]], [, , "(?:2(?:[168][1-9]|[247]\\d|9[1-7])|3(?:1[1-3]|[2-6]\\d|[79][1-8]|8[1-9])|4\\d{2}|5(?:1[1-4]|[2-578]\\d|6[1-5]|9[1-7])|8(?:[19][1-5]|[2-6]\\d|[78][1-7]))\\d{5}", "\\d{5,8}", , , "22345678", , , [8]], [, , "6[6-9]\\d{7}", "\\d{9}", , , "661234567", , , [9]], [, , "800\\d{4}", "\\d{7}", , , "8001234", , , [7]], [, , "900\\d{3}", "\\d{6}", , , "900123", , , [6]], [, , "808\\d{3}", "\\d{6}", , , "808123", , , [6]], [, , "700\\d{5}", "\\d{8}", , , "70012345", , , [8]], [, , "NA", "NA", , , , , , [-1]], "AL", 355, "00", "0", , , "0", , , , [[, "(4)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[0-6]"], "0$1"], [, "(6[6-9])(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4[7-9]"], "0$1"], [, "(\\d{3})(\\d{3,5})", "$1 $2", ["[235][16-9]|8[016-9]|[79]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        AM: [, [, , "[1-9]\\d{7}", "\\d{5,8}", , , , , , [8], [5, 6]], [, , "(?:1[0-2]\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2|47\\d)\\d{5}", "\\d{5,8}", , , "10123456"], [, , "(?:4[139]|55|77|9[1-9])\\d{6}", "\\d{8}", , , "77123456"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "90[016]\\d{5}", "\\d{8}", , , "90012345"], [, , "80[1-4]\\d{5}", "\\d{8}", , , "80112345"], [, , "NA", "NA", , , , , , [-1]], [, , "60(?:2[078]|[3-7]\\d|8[0-5])\\d{4}", "\\d{8}", , , "60271234"], "AM", 374, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["4[139]|[5-7]|9[1-9]"], "0$1"], [, "(\\d{3})(\\d{5})", "$1 $2", ["[23]"], "(0$1)"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8|90"], "0 $1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        AO: [, [, , "[29]\\d{8}", "\\d{9}", , , , , , [9]], [, , "2\\d(?:[26-9]\\d|\\d[26-9])\\d{5}", "\\d{9}", , , "222123456"], [, , "9[1-49]\\d{7}", "\\d{9}", , , "923123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "AO", 244, "00", , , , , , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        AR: [, [, , "11\\d{8}|[2368]\\d{9}|9\\d{10}", "\\d{6,11}", , , , , , [10, 11], [6, 7, 8]], [, , "11\\d{8}|(?:2(?:2(?:[013]\\d|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[067]\\d)|4(?:7[3-8]|9\\d)|6(?:[01346]\\d|2[24-6]|5[15-8])|80\\d|9(?:[0124789]\\d|3[1-6]|5[234]|6[2-46]))|3(?:3(?:2[79]|6\\d|8[2578])|4(?:[78]\\d|0[0124-9]|[1-35]\\d|4[24-7]|6[02-9]|9[123678])|5(?:[138]\\d|2[1245]|4[1-9]|6[2-4]|7[1-6])|6[24]\\d|7(?:[0469]\\d|1[1568]|2[013-9]|3[145]|5[14-8]|7[2-57]|8[0-24-9])|8(?:[013578]\\d|2[15-7]|4[13-6]|6[1-357-9]|9[124]))|670\\d)\\d{6}", "\\d{6,10}", , , "1123456789", , , [10]], [, , "675\\d{7}|9(?:11[2-9]\\d{7}|(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))[2-9]\\d{6}|\\d{4}[2-9]\\d{5})", "\\d{6,11}", , , "91123456789", , , [11]], [, , "800\\d{7}", "\\d{10}", , , "8001234567", , , [10]], [, , "60[04579]\\d{7}", "\\d{10}", , , "6001234567", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "AR", 54, "00", "0", , , "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?", "9$1", , , [[, "([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], [, "(\\d{2})(\\d{4})", "$1-$2", ["[2-9]"], "$1"], [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-9]"], "$1"], [, "(\\d{4})(\\d{4})", "$1-$2", ["[2-9]"], "$1"], [, "(9)(11)(\\d{4})(\\d{4})", "$2 15-$3-$4", ["911"], "0$1"], [, "(9)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9(?:2[234689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578]))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"], "0$1"], [, "(9)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9[23]"], "0$1"], [, "(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578])", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"], "0$1", , 1], [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1], [, "(\\d{3})", "$1", ["1[012]|911"], "$1"]], [[, "([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], [, "(9)(11)(\\d{4})(\\d{4})", "$1 $2 $3-$4", ["911"]], [, "(9)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3-$4", ["9(?:2[234689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578]))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"]], [, "(9)(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3-$4", ["9[23]"]], [, "(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578])", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"], "0$1", , 1], [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "810\\d{7}", "\\d{10}", , , "8101234567", , , [10]], [, , "810\\d{7}", "\\d{10}", , , "8101234567", , , [10]], , , [, , "NA", "NA", , , , , , [-1]]],
        AS: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "6846(?:22|33|44|55|77|88|9[19])\\d{4}", "\\d{7}(?:\\d{3})?", , , "6846221234"], [, , "684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}", "\\d{7}(?:\\d{3})?", , , "6847331234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "AS", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "684", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        AT: [, [, , "[1-9]\\d{3,12}", "\\d{3,13}", , , , , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [3]], [, , "1\\d{3,12}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|63|7[1368]|8[2457])|5(?:12|2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[1-35-8]|5[468]|62)|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,10}", "\\d{3,13}", , , "1234567890"], [, , "6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", "\\d{7,13}", , , "664123456", , , [7, 8, 9, 10, 11, 12, 13]], [, , "800\\d{6,10}", "\\d{9,13}", , , "800123456", , , [9, 10, 11, 12, 13]], [, , "9(?:0[01]|3[019])\\d{6,10}", "\\d{9,13}", , , "900123456", , , [9, 10, 11, 12, 13]], [, , "8(?:10\\d|2(?:[01]\\d|8\\d?))\\d{5,9}", "\\d{8,13}", , , "810123456", , , [8, 9, 10, 11, 12, 13]], [, , "NA", "NA", , , , , , [-1]], [, , "780\\d{6,10}", "\\d{9,13}", , , "780123456", , , [9, 10, 11, 12, 13]], "AT", 43, "00", "0", , , "0", , , , [[, "(116\\d{3})", "$1", ["116"], "$1"], [, "(1)(\\d{3,12})", "$1 $2", ["1"], "0$1"], [, "(5\\d)(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], [, "(5\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5[079]"], "0$1"], [, "(5\\d)(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5[079]"], "0$1"], [, "(\\d{3})(\\d{3,10})", "$1 $2", ["316|46|51|732|6(?:5[0-3579]|[6-9])|7(?:[28]0)|[89]"], "0$1"], [, "(\\d{4})(\\d{3,9})", "$1 $2", ["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:2[1-8]|35|4[1-8]|[5-79])"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "5(?:(?:0[1-9]|17)\\d{2,10}|[79]\\d{3,11})|720\\d{6,10}", "\\d{5,13}", , , "50123", , , [5, 6, 7, 8, 9, 10, 11, 12, 13]], , , [, , "NA", "NA", , , , , , [-1]]],
        AU: [, [, , "[1-578]\\d{5,9}", "\\d{6,10}", , , , , , [5, 6, 7, 8, 9, 10]], [, , "[237]\\d{8}|8(?:[6-8]\\d{3}|9(?:[02-9]\\d{2}|1(?:[0-57-9]\\d|6[0135-9])))\\d{4}", "\\d{8,9}", , , "212345678", , , [9]], [, , "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}", "\\d{9}", , , "412345678", , , [9]], [, , "180(?:0\\d{3}|2)\\d{3}", "\\d{7,10}", , , "1800123456", , , [7, 10]], [, , "19(?:0[0126]\\d|[679])\\d{5}", "\\d{8,10}", , , "1900123456", , , [8, 10]], [, , "13(?:00\\d{3}|45[0-4]|\\d)\\d{3}", "\\d{6,10}", , , "1300123456", , , [6, 8, 10]], [, , "500\\d{6}", "\\d{9}", , , "500123456", , , [9]], [, , "550\\d{6}", "\\d{9}", , , "550123456", , , [9]], "AU", 61, "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "0", , , "0", , "0011", , [[, "([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]|14"], "0$1"], [, "(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], [, "(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[38]0|90)", "1(?:[38]00|90)"], "$1"], [, "(180)(2\\d{3})", "$1 $2", ["180", "1802"], "$1"], [, "(19\\d)(\\d{3})", "$1 $2", ["19[13]"], "$1"], [, "(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"], "$1"], [, "(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"], "$1"]], , [, , "16\\d{3,7}", "\\d{5,9}", , , "1612345", , , [5, 6, 7, 8, 9]], 1, , [, , "1(?:3(?:00\\d{3}|45[0-4]|\\d)\\d{3}|80(?:0\\d{6}|2\\d{3}))", "\\d{6,10}", , , "1300123456", , , [6, 7, 8, 10]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        AW: [, [, , "[25-9]\\d{6}", "\\d{7}", , , , , , [7]], [, , "5(?:2\\d|8[1-9])\\d{4}", "\\d{7}", , , "5212345"], [, , "(?:5(?:6\\d|9[2-478])|6(?:[039]0|22|4[01]|6[0-2])|7[34]\\d|9(?:6[45]|9[4-8]))\\d{4}", "\\d{7}", , , "5601234"], [, , "800\\d{4}", "\\d{7}", , , "8001234"], [, , "900\\d{4}", "\\d{7}", , , "9001234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "28\\d{5}|501\\d{4}", "\\d{7}", , , "5011234"], "AW", 297, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        AX: [, [, , "[135]\\d{5,9}|[27]\\d{4,9}|4\\d{5,10}|6\\d{7,8}|8\\d{6,9}", "\\d{5,12}", , , , , , [5, 6, 7, 8, 9, 10, 11, 12]], [, , "18[1-8]\\d{3,9}", "\\d{6,12}", , , "1812345678", , , [6, 7, 8, 9, 10, 11, 12]], [, , "4\\d{5,10}|50\\d{4,8}", "\\d{6,11}", , , "412345678", , , [6, 7, 8, 9, 10, 11]], [, , "800\\d{4,7}", "\\d{7,10}", , , "8001234567", , , [7, 8, 9, 10]], [, , "[67]00\\d{5,6}", "\\d{8,9}", , , "600123456", , , [8, 9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "AX", 358, "00|99(?:[02469]|5(?:11|33|5[59]|88|9[09]))", "0", , , "0", , "00", , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", "\\d{5,10}", , , "100123", , , [5, 6, 7, 8, 9, 10]], [, , "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", "\\d{5,10}", , , "10112345", , , [5, 6, 7, 8, 9, 10]], , , [, , "NA", "NA", , , , , , [-1]]],
        AZ: [, [, , "[1-9]\\d{8}", "\\d{7,9}", , , , , , [9], [7]], [, , "(?:1[28]\\d{3}|2(?:02|1[24]|2[2-4]|33|[45]2|6[23])\\d{2}|365(?:[0-46-9]\\d|5[0-35-9]))\\d{4}", "\\d{7,9}", , , "123123456"], [, , "(?:36554|(?:4[04]|5[015]|60|7[07])\\d{3})\\d{4}", "\\d{9}", , , "401234567"], [, , "88\\d{7}", "\\d{9}", , , "881234567"], [, , "900200\\d{3}", "\\d{9}", , , "900200123"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "AZ", 994, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["(?:1[28]|2(?:[45]2|[0-36])|365)"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[4-8]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BA: [, [, , "[3-9]\\d{7,8}", "\\d{6,9}", , , , , , [8, 9], [6]], [, , "(?:[35]\\d|49)\\d{6}", "\\d{6,8}", , , "30123456", , , [8]], [, , "6(?:03|44|71|[1-356])\\d{6}", "\\d{8,9}", , , "61123456"], [, , "8[08]\\d{6}", "\\d{8}", , , "80123456", , , [8]], [, , "9[0246]\\d{6}", "\\d{8}", , , "90123456", , , [8]], [, , "8[12]\\d{6}", "\\d{8}", , , "82123456", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "BA", 387, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6[047]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "70[23]\\d{5}", "\\d{8}", , , "70223456", , , [8]], , , [, , "NA", "NA", , , , , , [-1]]],
        BB: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7(?:37|57)|9(?:1[89]|63))\\d{4}", "\\d{7}(?:\\d{3})?", , , "2464123456"], [, , "246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|8(?:[2-5]\\d|83))\\d{4}", "\\d{7}(?:\\d{3})?", , , "2462501234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900\\d{7}|246976\\d{4}", "\\d{7}(?:\\d{3})?", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "24631\\d{5}", "\\d{7}(?:\\d{3})?", , , "2463101234"], "BB", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "246", [, , "NA", "NA", , , , , , [-1]], [, , "246(?:292|41[7-9]|43[01])\\d{4}", "\\d{7}(?:\\d{3})?", , , "2464301234"], , , [, , "NA", "NA", , , , , , [-1]]],
        BD: [, [, , "[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}", "\\d{6,10}", , , , , , [6, 7, 8, 9, 10]], [, , "2(?:550\\d|7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[017]|91)|8(?:0[125]|[139][1-6]|2[0157-9]|6[1-35]|7[1-5]|8[1-8]|90)|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0167]|7[15]|8[0146-8]))\\d{4}|3(?:12?[5-7]\\d{2}|0(?:2(?:[025-79]\\d|[348]\\d{1,2})|3(?:[2-4]\\d|[56]\\d?))|2(?:1\\d{2}|2(?:[12]\\d|[35]\\d{1,2}|4\\d?))|3(?:1\\d{2}|2(?:[2356]\\d|4\\d{1,2}))|4(?:1\\d{2}|2(?:2\\d{1,2}|[47]|5\\d{2}))|5(?:1\\d{2}|29)|[67]1\\d{2}|8(?:1\\d{2}|2(?:2\\d{2}|3|4\\d)))\\d{3}|4(?:0(?:2(?:[09]\\d|7)|33\\d{2})|1\\d{3}|2(?:1\\d{2}|2(?:[25]\\d?|[348]\\d|[67]\\d{1,2}))|3(?:1\\d{2}(?:\\d{2})?|2(?:[045]\\d|[236-9]\\d{1,2})|32\\d{2})|4(?:[18]\\d{2}|2(?:[2-46]\\d{2}|3)|5[25]\\d{2})|5(?:1\\d{2}|2(?:3\\d|5))|6(?:[18]\\d{2}|2(?:3(?:\\d{2})?|[46]\\d{1,2}|5\\d{2}|7\\d)|5(?:3\\d?|4\\d|[57]\\d{1,2}|6\\d{2}|8))|71\\d{2}|8(?:[18]\\d{2}|23\\d{2}|54\\d{2})|9(?:[18]\\d{2}|2[2-5]\\d{2}|53\\d{1,2}))\\d{3}|5(?:02[03489]\\d{2}|1\\d{2}|2(?:1\\d{2}|2(?:2(?:\\d{2})?|[457]\\d{2}))|3(?:1\\d{2}|2(?:[37](?:\\d{2})?|[569]\\d{2}))|4(?:1\\d{2}|2[46]\\d{2})|5(?:1\\d{2}|26\\d{1,2})|6(?:[18]\\d{2}|2|53\\d{2})|7(?:1|24)\\d{2}|8(?:1|26)\\d{2}|91\\d{2})\\d{3}|6(?:0(?:1\\d{2}|2(?:3\\d{2}|4\\d{1,2}))|2(?:2[2-5]\\d{2}|5(?:[3-5]\\d{2}|7)|8\\d{2})|3(?:1|2[3478])\\d{2}|4(?:1|2[34])\\d{2}|5(?:1|2[47])\\d{2}|6(?:[18]\\d{2}|6(?:2(?:2\\d|[34]\\d{2})|5(?:[24]\\d{2}|3\\d|5\\d{1,2})))|72[2-5]\\d{2}|8(?:1\\d{2}|2[2-5]\\d{2})|9(?:1\\d{2}|2[2-6]\\d{2}))\\d{3}|7(?:(?:02|[3-589]1|6[12]|72[24])\\d{2}|21\\d{3}|32)\\d{3}|8(?:(?:4[12]|[5-7]2|1\\d?)|(?:0|3[12]|[5-7]1|217)\\d)\\d{4}|9(?:[35]1|(?:[024]2|81)\\d|(?:1|[24]1)\\d{2})\\d{3}", "\\d{6,9}", , , "27111234", , , [6, 7, 8, 9]], [, , "(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}", "\\d{10}", , , "1812345678", , , [10]], [, , "80[03]\\d{7}", "\\d{10}", , , "8001234567", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "96(?:0[49]|1[0-4]|6[69])\\d{6}", "\\d{10}", , , "9604123456", , , [10]], "BD", 880, "00", "0", , , "0", , , , [[, "(2)(\\d{7,8})", "$1-$2", ["2"], "0$1"], [, "(\\d{2})(\\d{4,6})", "$1-$2", ["[3-79]1"], "0$1"], [, "(\\d{4})(\\d{3,6})", "$1-$2", ["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])"], "0$1"], [, "(\\d{3})(\\d{3,7})", "$1-$2", ["[3-79][2-9]|8"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BE: [, [, , "[1-9]\\d{7,8}", "\\d{8,9}", , , , , , [8, 9]], [, , "(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}|80[2-8]\\d{5}", "\\d{8}", , , "12345678", , , [8]], [, , "4(?:6[0135-8]|[79]\\d|8[3-9])\\d{6}", "\\d{9}", , , "470123456", , , [9]], [, , "800\\d{5}", "\\d{8}", , , "80012345", , , [8]], [, , "(?:70[2-467]|90[0-79])\\d{5}", "\\d{8}", , , "90123456", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "BE", 32, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[6-9]"], "0$1"], [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4[23]|9[2-4]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[156]|7[018]|8(?:0[1-9]|[1-79])"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "78\\d{6}", "\\d{8}", , , "78123456", , , [8]], , , [, , "NA", "NA", , , , , , [-1]]],
        BF: [, [, , "[25-7]\\d{7}", "\\d{8}", , , , , , [8]], [, , "2(?:0(?:49|5[23]|9[016-9])|4(?:4[569]|5[4-6]|7[0179])|5(?:[34]\\d|50))\\d{4}", "\\d{8}", , , "20491234"], [, , "(?:55[0-5]|6(?:[0-689]\\d|7[0-5]))\\d{5}|7\\d{7}", "\\d{8}", , , "70123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "BF", 226, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BG: [, [, , "[23567]\\d{5,7}|[489]\\d{6,8}", "\\d{5,9}", , , , , , [6, 7, 8, 9], [4, 5]], [, , "2\\d{5,7}|(?:[36]\\d|5[1-9]|8[1-6]|9[1-7])\\d{5,6}|(?:4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}", "\\d{5,8}", , , "2123456", , , [6, 7, 8]], [, , "(?:8[7-9]\\d|9(?:8\\d|99))\\d{6}|4(?:3[0789]|8\\d)\\d{5}", "\\d{8,9}", , , "48123456", , , [8, 9]], [, , "800\\d{5}", "\\d{8}", , , "80012345", , , [8]], [, , "90\\d{6}", "\\d{8}", , , "90123456", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "700\\d{5}", "\\d{5,9}", , , "70012345", , , [8]], [, , "NA", "NA", , , , , , [-1]], "BG", 359, "00", "0", , , "0", , , , [[, "(2)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], [, "(2)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{3})(\\d{4})", "$1 $2", ["43[124-7]|70[1-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[124-7]|70[1-9]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[78]00"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["999"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["48|8[7-9]|9[08]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BH: [, [, , "[136-9]\\d{7}", "\\d{8}", , , , , , [8]], [, , "(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9])|9[69][69])|7(?:1(?:11|78)|7\\d{2}))\\d{4}", "\\d{8}", , , "17001234"], [, , "(?:3(?:[1-4679]\\d|5[013-69]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:[69]\\d|3[03-9]|7[0-6])))\\d{4}", "\\d{8}", , , "36001234"], [, , "80\\d{6}", "\\d{8}", , , "80123456"], [, , "(?:87|9[014578])\\d{6}", "\\d{8}", , , "90123456"], [, , "84\\d{6}", "\\d{8}", , , "84123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "BH", 973, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BI: [, [, , "[267]\\d{7}", "\\d{8}", , , , , , [8]], [, , "22\\d{6}", "\\d{8}", , , "22201234"], [, , "(?:29|6[189]|7[124-9])\\d{6}", "\\d{8}", , , "79561234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "BI", 257, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BJ: [, [, , "[2689]\\d{7}|7\\d{3}", "\\d{4,8}", , , , , , [4, 8]], [, , "2(?:02|1[037]|2[45]|3[68])\\d{5}", "\\d{8}", , , "20211234", , , [8]], [, , "(?:6[1-8]|9[03-9])\\d{6}", "\\d{8}", , , "90011234", , , [8]], [, , "7[3-5]\\d{2}", "\\d{4}", , , "7312", , , [4]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "857[58]\\d{4}", "\\d{8}", , , "85751234", , , [8]], "BJ", 229, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "81\\d{6}", "\\d{8}", , , "81123456", , , [8]], , , [, , "NA", "NA", , , , , , [-1]]],
        BL: [, [, , "[56]\\d{8}", "\\d{9}", , , , , , [9]], [, , "590(?:2[7-9]|5[12]|87)\\d{4}", "\\d{9}", , , "590271234"], [, , "690(?:0[0-7]|[1-9]\\d)\\d{4}", "\\d{9}", , , "690301234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "BL", 590, "00", "0", , , "0", , , , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BM: [, [, , "[4589]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "441(?:2(?:02|23|61|[3479]\\d)|[46]\\d{2}|5(?:4\\d|60|89)|824)\\d{4}", "\\d{7}(?:\\d{3})?", , , "4412345678"], [, , "441(?:[37]\\d|5[0-39])\\d{5}", "\\d{7}(?:\\d{3})?", , , "4413701234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "BM", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "441", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BN: [, [, , "[2-578]\\d{6}", "\\d{7}", , , , , , [7]], [, , "2(?:[013-9]\\d|2[0-7])\\d{4}|[3-5]\\d{6}", "\\d{7}", , , "2345678"], [, , "22[89]\\d{4}|[78]\\d{6}", "\\d{7}", , , "7123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "BN", 673, "00", , , , , , , , [[, "([2-578]\\d{2})(\\d{4})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BO: [, [, , "[23467]\\d{7}", "\\d{7,8}", , , , , , [8], [7]], [, , "(?:2(?:2\\d{2}|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d{2}|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:2\\d|3[234]|4[248]|5[24]|6[2-6]|7\\d))|4(?:4\\d{2}|6(?:11|[24689]\\d|72)))\\d{4}", "\\d{7,8}", , , "22123456"], [, , "[67]\\d{7}", "\\d{8}", , , "71234567"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "BO", 591, "00(1\\d)?", "0", , , "0(1\\d)?", , , , [[, "([234])(\\d{7})", "$1 $2", ["[234]"], , "0$CC $1"], [, "([67]\\d{7})", "$1", ["[67]"], , "0$CC $1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BQ: [, [, , "[347]\\d{6}", "\\d{7}", , , , , , [7]], [, , "(?:318[023]|416[023]|7(?:1[578]|50)\\d)\\d{3}", "\\d{7}", , , "7151234"], [, , "(?:318[14-68]|416[15-9]|7(?:0[01]|7[07]|[89]\\d)\\d)\\d{3}", "\\d{7}", , , "3181234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "BQ", 599, "00", , , , , , , , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BR: [, [, , "[1-46-9]\\d{7,10}|5(?:[0-4]\\d{7,9}|5(?:[2-8]\\d{7}|9\\d{7,8}))", "\\d{8,11}", , , , , , [8, 9, 10, 11]], [, , "(?:[14689][1-9]|2[12478]|3[1-578]|5[1-5]|7[13-579])[2-5]\\d{7}", "\\d{8,11}", , , "1123456789", , , [10]], [, , "1[1-9](?:7|9\\d)\\d{7}|(?:2[12478]|3[1-578]|[4689][1-9]|5[1-5]|7[13-579])(?:[6-8]|9\\d?)\\d{7}", "\\d{8,11}", , , "11961234567", , , [10, 11]], [, , "800\\d{6,7}", "\\d{8,11}", , , "800123456", , , [9, 10]], [, , "(?:300|[59]00\\d?)\\d{6}", "\\d{8,11}", , , "300123456", , , [9, 10]], [, , "(?:300\\d(?:\\d{2})?|40(?:0\\d|20))\\d{4}", "\\d{8,10}", , , "40041234", , , [8, 10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "BR", 55, "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "0", , , "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", , , [[, "(\\d{4})(\\d{4})", "$1-$2", ["[2-9](?:[1-9]|0[1-9])"], "$1"], [, "(\\d{5})(\\d{4})", "$1-$2", ["9(?:[1-9]|0[1-9])"], "$1"], [, "(\\d{3,5})", "$1", ["1[125689]"], "$1"], [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[1-5]|7[13-579])9"], "($1)", "0 $CC ($1)"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)", "0 $CC ($1)"], [, "(\\d{4})(\\d{4})", "$1-$2", ["(?:300|40(?:0|20))"]], [, "([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"]], [[, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[1-5]|7[13-579])9"], "($1)", "0 $CC ($1)"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)", "0 $CC ($1)"], [, "(\\d{4})(\\d{4})", "$1-$2", ["(?:300|40(?:0|20))"]], [, "([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"]], [, , "NA", "NA", , , , , , [-1]], , , [, , "(?:300\\d|40(?:0\\d|20))\\d{4}", "\\d{8}", , , "40041234", , , [8]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BS: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[3467]|8[0-4]|9[2-467])|461|502|6(?:0[1-3]|12|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}", "\\d{7}(?:\\d{3})?", , , "2423456789"], [, , "242(?:3(?:5[79]|[79]5)|4(?:[2-4][1-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-9]|65|77)|6[34]6|727)\\d{4}", "\\d{7}(?:\\d{3})?", , , "2423591234"], [, , "242300\\d{4}|8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "BS", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "242", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BT: [, [, , "[1-8]\\d{6,7}", "\\d{6,8}", , , , , , [7, 8], [6]], [, , "(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", "\\d{6,7}", , , "2345678", , , [7]], [, , "(?:1[67]|77)\\d{6}", "\\d{8}", , , "17123456", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "BT", 975, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1|77"]], [, "([2-8])(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BW: [, [, , "[2-79]\\d{6,7}", "\\d{7,8}", , , , , , [7, 8]], [, , "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0235-9]|55|[69]\\d|7[01])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}", "\\d{7}", , , "2401234", , , [7]], [, , "7(?:[1-6]\\d|7[014-8])\\d{5}", "\\d{8}", , , "71123456", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "90\\d{5}", "\\d{7}", , , "9012345", , , [7]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "79[12][01]\\d{4}", "\\d{8}", , , "79101234", , , [8]], "BW", 267, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]], [, "(7\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], [, "(90)(\\d{5})", "$1 $2", ["9"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BY: [, [, , "[1-4]\\d{8}|800\\d{3,7}|[89]\\d{9,10}", "\\d{5,11}", , , , , , [6, 7, 8, 9, 10, 11], [5]], [, , "(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d{2})|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}", "\\d{5,9}", , , "152450911", , , [9]], [, , "(?:2(?:5[5679]|9[1-9])|33\\d|44\\d)\\d{6}", "\\d{9}", , , "294911911", , , [9]], [, , "8(?:0[13]|20\\d)\\d{7}|800\\d{3,7}", "\\d{5,11}", , , "8011234567"], [, , "(?:810|902)\\d{7}", "\\d{10}", , , "9021234567", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "249\\d{6}", "\\d{9}", , , "249123456", , , [9]], "BY", 375, "810", "8", , , "8?0?", , "8~10", , [[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["17[0-3589]|2[4-9]|[34]", "17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"], "8 0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])", "1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"], "8 0$1"], [, "(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], [, "([89]\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8[01]|9"], "8 $1"], [, "(82\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["82"], "8 $1"], [, "(800)(\\d{3})", "$1 $2", ["800"], "8 $1"], [, "(800)(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "8(?:[013]|[12]0)\\d{8}|800\\d{3,7}|902\\d{7}", "\\d{5,11}", , , "82012345678"], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        BZ: [, [, , "[2-8]\\d{6}|0\\d{10}", "\\d{7}(?:\\d{4})?", , , , , , [7, 11]], [, , "(?:[23458][02]\\d|7(?:[02]\\d|32))\\d{4}", "\\d{7}", , , "2221234", , , [7]], [, , "6[0-35-7]\\d{5}", "\\d{7}", , , "6221234", , , [7]], [, , "0800\\d{7}", "\\d{11}", , , "08001234123", , , [11]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "BZ", 501, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], [, "(0)(800)(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        CA: [, [, , "[2-9]\\d{9}|3\\d{6}", "\\d{7}(?:\\d{3})?", , , , , , [7, 10]], [, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}|310\\d{4}", "\\d{7}(?:\\d{3})?", , , "2042345678", , , [10]], [, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "2042345678", , , [10]], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}|310\\d{4}", "\\d{7}(?:\\d{3})?", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678", , , [10]], [, , "NA", "NA", , , , , , [-1]], "CA", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        CC: [, [, , "[1458]\\d{5,9}", "\\d{6,10}", , , , , , [6, 7, 9, 10], [8]], [, , "89162\\d{4}", "\\d{8,9}", , , "891621234", , , [9]], [, , "14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}", "\\d{9}", , , "412345678", , , [9]], [, , "180(?:0\\d{3}|2)\\d{3}", "\\d{7,10}", , , "1800123456", , , [7, 10]], [, , "190[0126]\\d{6}", "\\d{10}", , , "1900123456", , , [10]], [, , "13(?:00\\d{2})?\\d{4}", "\\d{6,10}", , , "1300123456", , , [6, 10]], [, , "500\\d{6}", "\\d{9}", , , "500123456", , , [9]], [, , "550\\d{6}", "\\d{9}", , , "550123456", , , [9]], "CC", 61, "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "0", , , "0", , "0011", , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        CD: [, [, , "[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}", "\\d{7,9}", , , , , , [7, 9]], [, , "1(?:2\\d{7}|\\d{6})|[2-6]\\d{6}", "\\d{7,9}", , , "1234567"], [, , "8(?:[0-2459]\\d{2}|8)\\d{5}|9[017-9]\\d{7}", "\\d{7,9}", , , "991234567"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "CD", 243, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["12"], "0$1"], [, "([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[0-2459]|9"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], [, "(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        CF: [, [, , "[278]\\d{7}", "\\d{8}", , , , , , [8]], [, , "2[12]\\d{6}", "\\d{8}", , , "21612345"], [, , "7[0257]\\d{6}", "\\d{8}", , , "70012345"], [, , "NA", "NA", , , , , , [-1]], [, , "8776\\d{4}", "\\d{8}", , , "87761234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "CF", 236, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        CG: [, [, , "[028]\\d{8}", "\\d{9}", , , , , , [9]], [, , "222[1-589]\\d{5}", "\\d{9}", , , "222123456"], [, , "0[14-6]\\d{7}", "\\d{9}", , , "061234567"], [, , "NA", "NA", , , , , , [-1]], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "CG", 242, "00", , , , , , , , [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        CH: [, [, , "[2-9]\\d{8}|860\\d{9}", "\\d{9}(?:\\d{3})?", , , , , , [9, 12]], [, , "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}", "\\d{9}", , , "212345678", , , [9]], [, , "7[5-9]\\d{7}", "\\d{9}", , , "781234567", , , [9]], [, , "800\\d{6}", "\\d{9}", , , "800123456", , , [9]], [, , "90[016]\\d{6}", "\\d{9}", , , "900123456", , , [9]], [, , "84[0248]\\d{6}", "\\d{9}", , , "840123456", , , [9]], [, , "878\\d{6}", "\\d{9}", , , "878123456", , , [9]], [, , "NA", "NA", , , , , , [-1]], "CH", 41, "00", "0", , , "0", , , , [[, "([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]|[89]1"], "0$1"], [, "([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["860"], "0$1"]], , [, , "74[0248]\\d{6}", "\\d{9}", , , "740123456", , , [9]], , , [, , "NA", "NA", , , , , , [-1]], [, , "5[18]\\d{7}", "\\d{9}", , , "581234567", , , [9]], , , [, , "860\\d{9}", "\\d{12}", , , "860123456789", , , [12]]],
        CI: [, [, , "[02-8]\\d{7}", "\\d{8}", , , , , , [8]], [, , "(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}", "\\d{8}", , , "21234567"], [, , "(?:0[1-9]|4\\d|5[14-9]|6[015-79]|7[578]|8[79])\\d{6}", "\\d{8}", , , "01234567"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "CI", 225, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        CK: [, [, , "[2-8]\\d{4}", "\\d{5}", , , , , , [5]], [, , "(?:2\\d|3[13-7]|4[1-5])\\d{3}", "\\d{5}", , , "21234"], [, , "[5-8]\\d{4}", "\\d{5}", , , "71234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "CK", 682, "00", , , , , , , , [[, "(\\d{2})(\\d{3})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        CL: [, [, , "(?:[2-9]|600|123)\\d{7,8}", "\\d{7,11}", , , , , , [9, 10, 11], [7, 8]], [, , "2(?:1962\\d{4}|2\\d{7}|32[0-267]\\d{5})|(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57])\\d{7}", "\\d{7,9}", , , "221234567", , , [9]], [, , "9[3-9]\\d{7}", "\\d{8,9}", , , "961234567", , , [9]], [, , "800\\d{6}|1230\\d{7}", "\\d{9,11}", , , "800123456", , , [9, 11]], [, , "NA", "NA", , , , , , [-1]], [, , "600\\d{7,8}", "\\d{10,11}", , , "6001234567", , , [10, 11]], [, , "NA", "NA", , , , , , [-1]], [, , "44\\d{7}", "\\d{9}", , , "441234567", , , [9]], "CL", 56, "(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0", "0", , , "0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))", , , , [[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)", "$CC ($1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[357]|4[1-35]|6[13-57]"], "($1)", "$CC ($1)"], [, "(9)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], [, "(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44"], "0$1"], [, "([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"], "$1"], [, "(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"], "$1"], [, "(1230)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "$1"], [, "(\\d{5})(\\d{4})", "$1 $2", ["219"], "($1)", "$CC ($1)"], [, "(\\d{4,5})", "$1", ["[1-9]"], "$1"]], [[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)", "$CC ($1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[357]|4[1-35]|6[13-57]"], "($1)", "$CC ($1)"], [, "(9)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], [, "(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44"], "0$1"], [, "([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"], "$1"], [, "(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"], "$1"], [, "(1230)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "$1"], [, "(\\d{5})(\\d{4})", "$1 $2", ["219"], "($1)", "$CC ($1)"]], [, , "NA", "NA", , , , , , [-1]], , , [, , "600\\d{7,8}", "\\d{10,11}", , , "6001234567", , , [10, 11]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        CM: [, [, , "[2368]\\d{7,8}", "\\d{8,9}", , , , , , [8, 9]], [, , "2(?:22|33|4[23])\\d{6}", "\\d{9}", , , "222123456", , , [9]], [, , "6[5-9]\\d{7}", "\\d{9}", , , "671234567", , , [9]], [, , "800\\d{5}", "\\d{8}", , , "80012345", , , [8]], [, , "88\\d{6}", "\\d{8}", , , "88012345", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "CM", 237, "00", , , , , , , , [[, "([26])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|88"]], [, "(800)(\\d{2})(\\d{3})", "$1 $2 $3", ["80"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        CN: [, [, , "[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,10}", "\\d{4,12}", , , , , , [7, 8, 9, 10, 11, 12], [5, 6]], [, , "21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-4689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})|80(?:29|6[03578]|7[018]|81)\\d{4}", "\\d{4,12}", , , "1012345678"], [, , "1(?:[38]\\d|4[57]|5[0-35-9]|7[0136-8])\\d{8}", "\\d{11}", , , "13123456789", , , [11]], [, , "(?:10)?800\\d{7}", "\\d{10,12}", , , "8001234567", , , [10, 12]], [, , "16[08]\\d{5}", "\\d{8}", , , "16812345", , , [8]], [, , "400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}", "\\d{7,11}", , , "4001234567", , , [7, 8, 9, 10, 11]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "CN", 86, "(1(?:[129]\\d{3}|79\\d{2}))?00", "0", , , "(1(?:[129]\\d{3}|79\\d{2}))|0", , "00", , [[, "(80\\d{2})(\\d{4})", "$1 $2", ["80[2678]"], "0$1", "$CC $1", 1], [, "([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]], [, "(\\d{5,6})", "$1", ["100|95"]], [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1", "$CC $1"], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d{2}[19]", "[3-9]\\d{2}(?:10|9[56])"], "0$1", "$CC $1"], [, "(\\d{3,4})(\\d{4})", "$1 $2", ["[2-9]"]], [, "(21)(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "$CC $1", 1], [, "([12]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98)"], "0$1", "$CC $1", 1], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-578]"], , "$CC $1"], [, "(10800)(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]], [, "(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]], [[, "(80\\d{2})(\\d{4})", "$1 $2", ["80[2678]"], "0$1", "$CC $1", 1], [, "([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]], [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1", "$CC $1"], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d{2}[19]", "[3-9]\\d{2}(?:10|9[56])"], "0$1", "$CC $1"], [, "(21)(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "$CC $1", 1], [, "([12]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98)"], "0$1", "$CC $1", 1], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", "$CC $1", 1], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-578]"], , "$CC $1"], [, "(10800)(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]], [, "(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]], [, , "NA", "NA", , , , , , [-1]], , , [, , "(?:4|(?:10)?8)00\\d{7}|950\\d{7,8}", "\\d{10,12}", , , "4001234567", , , [10, 11, 12]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        CO: [, [, , "(?:[13]\\d{0,3}|[24-8])\\d{7}", "\\d{7,11}", , , , , , [8, 10, 11], [7]], [, , "[124-8][2-9]\\d{6}", "\\d{8}", , , "12345678", , , [8]], [, , "3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}", "\\d{10}", , , "3211234567", , , [10]], [, , "1800\\d{7}", "\\d{11}", , , "18001234567", , , [11]], [, , "19(?:0[01]|4[78])\\d{7}", "\\d{11}", , , "19001234567", , , [11]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "CO", 57, "00(?:4(?:[14]4|56)|[579])", "0", , , "0([3579]|4(?:44|56))?", , , , [[, "(\\d)(\\d{7})", "$1 $2", ["1(?:8[2-9]|9[0-3]|[2-7])|[24-8]", "1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"], "($1)", "0$CC $1"], [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], , "0$CC $1"], [, "(1)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"], "0$1"]], [[, "(\\d)(\\d{7})", "$1 $2", ["1(?:8[2-9]|9[0-3]|[2-7])|[24-8]", "1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"], "($1)", "0$CC $1"], [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], , "0$CC $1"], [, "(1)(\\d{3})(\\d{7})", "$1 $2 $3", ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"]]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        CR: [, [, , "[24-9]\\d{7,9}", "\\d{8,10}", , , , , , [8, 10]], [, , "2[0-24-7]\\d{6}", "\\d{8}", , , "22123456", , , [8]], [, , "5(?:0[01]|7[0-3])\\d{5}|(?:[67][0-3]|8[3-9])\\d{6}", "\\d{8}", , , "83123456", , , [8]], [, , "800\\d{7}", "\\d{10}", , , "8001234567", , , [10]], [, , "90[059]\\d{7}", "\\d{10}", , , "9001234567", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "210[0-6]\\d{4}|4\\d{7}|5100\\d{4}", "\\d{8}", , , "40001234", , , [8]], "CR", 506, "00", , , , "(19(?:0[012468]|1[09]|20|66|77|99))", , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"], , "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]0"], , "$CC $1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        CU: [, [, , "[2-57]\\d{5,7}", "\\d{4,8}", , , , , , [6, 7, 8], [4, 5]], [, , "2[1-4]\\d{5,6}|3(?:1\\d{6}|[23]\\d{4,6})|4(?:[125]\\d{5,6}|[36]\\d{6}|[78]\\d{4,6})|7\\d{6,7}", "\\d{4,8}", , , "71234567"], [, , "5\\d{7}", "\\d{8}", , , "51234567", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "CU", 53, "119", "0", , , "0", , , , [[, "(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], [, "(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"], "(0$1)"], [, "(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        CV: [, [, , "[259]\\d{6}", "\\d{7}", , , , , , [7]], [, , "2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}", "\\d{7}", , , "2211234"], [, , "(?:9\\d|59)\\d{5}", "\\d{7}", , , "9911234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "CV", 238, "0", , , , , , , , [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        CW: [, [, , "[169]\\d{6,7}", "\\d{7,8}", , , , , , [7, 8]], [, , "9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}", "\\d{7,8}", , , "94151234", , , [8]], [, , "9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}", "\\d{7,8}", , , "95181234", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "60[0-2]\\d{4}", "\\d{7}", , , "6001234", , , [7]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "CW", 599, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[13-7]"]], [, "(9)(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], , [, , "955\\d{5}", "\\d{7,8}", , , "95581234", , , [8]], 1, , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        CX: [, [, , "[1458]\\d{5,9}", "\\d{6,10}", , , , , , [6, 7, 8, 9, 10]], [, , "89164\\d{4}", "\\d{8,9}", , , "891641234", , , [9]], [, , "14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}", "\\d{9}", , , "412345678", , , [9]], [, , "180(?:0\\d{3}|2)\\d{3}", "\\d{7,10}", , , "1800123456", , , [7, 10]], [, , "190[0126]\\d{6}", "\\d{10}", , , "1900123456", , , [10]], [, , "13(?:00\\d{2})?\\d{4}", "\\d{6,10}", , , "1300123456", , , [6, 8, 10]], [, , "500\\d{6}", "\\d{9}", , , "500123456", , , [9]], [, , "550\\d{6}", "\\d{9}", , , "550123456", , , [9]], "CX", 61, "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "0", , , "0", , "0011", , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        CY: [, [, , "[257-9]\\d{7}", "\\d{8}", , , , , , [8]], [, , "2[2-6]\\d{6}", "\\d{8}", , , "22345678"], [, , "9[4-79]\\d{6}", "\\d{8}", , , "96123456"], [, , "800\\d{5}", "\\d{8}", , , "80001234"], [, , "90[09]\\d{5}", "\\d{8}", , , "90012345"], [, , "80[1-9]\\d{5}", "\\d{8}", , , "80112345"], [, , "700\\d{5}", "\\d{8}", , , "70012345"], [, , "NA", "NA", , , , , , [-1]], "CY", 357, "00", , , , , , , , [[, "(\\d{2})(\\d{6})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "(?:50|77)\\d{6}", "\\d{8}", , , "77123456"], , , [, , "NA", "NA", , , , , , [-1]]],
        CZ: [, [, , "[2-8]\\d{8}|9\\d{8,11}", "\\d{9,12}", , , , , , [9, 10, 11, 12]], [, , "2\\d{8}|(?:3[1257-9]|4[16-9]|5[13-9])\\d{7}", "\\d{9,12}", , , "212345678", , , [9]], [, , "(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}", "\\d{9,12}", , , "601123456", , , [9]], [, , "800\\d{6}", "\\d{9,12}", , , "800123456", , , [9]], [, , "9(?:0[05689]|76)\\d{6}", "\\d{9,12}", , , "900123456", , , [9]], [, , "8[134]\\d{7}", "\\d{9,12}", , , "811234567", , , [9]], [, , "70[01]\\d{6}", "\\d{9,12}", , , "700123456", , , [9]], [, , "9[17]0\\d{6}", "\\d{9,12}", , , "910123456", , , [9]], "CZ", 420, "00", , , , , , , , [[, "([2-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], [, "(96\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["96"]], [, "(9\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9[36]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "9(?:5\\d|7[234])\\d{6}", "\\d{9,12}", , , "972123456", , , [9]], , , [, , "9(?:3\\d{9}|6\\d{7,10})", "\\d{9,12}", , , "93123456789"]],
        DE: [, [, , "[1-35-9]\\d{3,14}|4(?:[0-8]\\d{4,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})", "\\d{2,15}", , , , , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [3]], [, , "[246]\\d{5,13}|3(?:0\\d{3,13}|2\\d{9}|[3-9]\\d{4,13})|5(?:0[2-8]|[1256]\\d|[38][0-8]|4\\d{0,2}|[79][0-7])\\d{3,11}|7(?:0[2-8]|[1-9]\\d)\\d{3,10}|8(?:0[2-9]|[1-9]\\d)\\d{3,10}|9(?:0[6-9]\\d{3,10}|1\\d{4,12}|[2-9]\\d{4,11})", "\\d{2,15}", , , "30123456", , , [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]], [, , "1(?:5[0-25-9]\\d{8}|6[023]\\d{7,8}|7(?:[0-57-9]\\d?|6\\d)\\d{7})", "\\d{10,11}", , , "15123456789", , , [10, 11]], [, , "800\\d{7,12}", "\\d{10,15}", , , "8001234567890", , , [10, 11, 12, 13, 14, 15]], [, , "137[7-9]\\d{6}|900(?:[135]\\d{6}|9\\d{7})", "\\d{10,11}", , , "9001234567", , , [10, 11]], [, , "1(?:3(?:7[1-6]\\d{6}|8\\d{4})|80\\d{5,11})", "\\d{7,14}", , , "18012345", , , [7, 8, 9, 10, 11, 12, 13, 14]], [, , "700\\d{8}", "\\d{11}", , , "70012345678", , , [11]], [, , "NA", "NA", , , , , , [-1]], "DE", 49, "00", "0", , , "0", , , , [[, "(1\\d{2})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], [, "(15\\d{3})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"], [, "(1\\d{3})(\\d{7})", "$1 $2", ["15"], "0$1"], [, "(\\d{2})(\\d{3,11})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], [, "(\\d{3})(\\d{3,11})", "$1 $2", ["2(?:\\d1|0[2389]|1[24]|28|34)|3(?:[3-9][15]|40)|[4-8][1-9]1|9(?:06|[1-9]1)"], "0$1"], [, "(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])", "[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|4[1246]|6[1-4]|7[1346]|8[13568]|9[1246])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))"], "0$1"], [, "(3\\d{4})(\\d{1,10})", "$1 $2", ["3"], "0$1"], [, "(800)(\\d{7,12})", "$1 $2", ["800"], "0$1"], [, "(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["(?:18|90)0|137", "1(?:37|80)|900[1359]"], "0$1"], [, "(1\\d{2})(\\d{5,11})", "$1 $2", ["181"], "0$1"], [, "(18\\d{3})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], [, "(18\\d{2})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], [, "(18\\d)(\\d{8})", "$1 $2", ["18[2-579]"], "0$1"], [, "(700)(\\d{4})(\\d{4})", "$1 $2 $3", ["700"], "0$1"], [, "(138)(\\d{4})", "$1 $2", ["138"], "0$1"], [, "(15[013-68])(\\d{2})(\\d{8})", "$1 $2 $3", ["15[013-68]"], "0$1"], [, "(15[279]\\d)(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], [, "(1[67]\\d)(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"]], , [, , "16(?:4\\d{1,10}|[89]\\d{1,11})", "\\d{4,14}", , , "16412345", , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]], , , [, , "NA", "NA", , , , , , [-1]], [, , "18(?:1\\d{5,11}|[2-9]\\d{8})", "\\d{8,14}", , , "18500123456", , , [8, 9, 10, 11, 12, 13, 14]], , , [, , "1(?:5(?:(?:2\\d55|7\\d99|9\\d33)\\d{7}|(?:[034568]00|113)\\d{8})|6(?:013|255|399)\\d{7,8}|7(?:[015]13|[234]55|[69]33|[78]99)\\d{7,8})", "\\d{12,13}", , , "177991234567", , , [12, 13]]],
        DJ: [, [, , "[27]\\d{7}", "\\d{8}", , , , , , [8]], [, , "2(?:1[2-5]|7[45])\\d{5}", "\\d{8}", , , "21360003"], [, , "77[0-26-8]\\d{5}", "\\d{8}", , , "77831001"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "DJ", 253, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        DK: [, [, , "[2-9]\\d{7}", "\\d{8}", , , , , , [8]], [, , "(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}", "\\d{8}", , , "32123456"], [, , "(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}", "\\d{8}", , , "20123456"], [, , "80\\d{6}", "\\d{8}", , , "80123456"], [, , "90\\d{6}", "\\d{8}", , , "90123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "DK", 45, "00", , , , , , , 1, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        DM: [, [, , "[57-9]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}", "\\d{7}(?:\\d{3})?", , , "7674201234"], [, , "767(?:2(?:[234689]5|7[5-7])|31[5-7]|61[2-7])\\d{4}", "\\d{7}(?:\\d{3})?", , , "7672251234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "DM", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "767", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        DO: [, [, , "[589]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "8(?:[04]9[2-9]\\d{6}|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d{2}|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9]))\\d{4})", "\\d{7}(?:\\d{3})?", , , "8092345678"], [, , "8[024]9[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "8092345678"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "DO", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "8[024]9", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        DZ: [, [, , "(?:[1-4]|[5-9]\\d)\\d{7}", "\\d{8,9}", , , , , , [8, 9]], [, , "(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}|9619\\d{5}", "\\d{8,9}", , , "12345678"], [, , "(?:5[4-6]|7[7-9])\\d{7}|6(?:[569]\\d|7[0-6])\\d{6}", "\\d{9}", , , "551234567", , , [9]], [, , "800\\d{6}", "\\d{9}", , , "800123456", , , [9]], [, , "80[3-689]1\\d{5}", "\\d{9}", , , "808123456", , , [9]], [, , "80[12]1\\d{5}", "\\d{9}", , , "801123456", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "98[23]\\d{6}", "\\d{9}", , , "983123456", , , [9]], "DZ", 213, "00", "0", , , "0", , , , [[, "([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], [, "([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"], [, "(9\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        EC: [, [, , "1\\d{9,10}|[2-8]\\d{7}|9\\d{8}", "\\d{7,11}", , , , , , [8, 9, 10, 11], [7]], [, , "[2-7][2-7]\\d{6}", "\\d{7,8}", , , "22123456", , , [8]], [, , "9(?:(?:39|[45][89]|7[7-9]|[89]\\d)\\d|6(?:[017-9]\\d|2[0-4]))\\d{5}", "\\d{9}", , , "991234567", , , [9]], [, , "1800\\d{6,7}", "\\d{10,11}", , , "18001234567", , , [10, 11]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "[2-7]890\\d{4}", "\\d{8}", , , "28901234", , , [8]], "EC", 593, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[247]|[356][2-8]"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], [, "(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"], "$1"]], [[, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[247]|[356][2-8]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], [, "(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"], "$1"]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        EE: [, [, , "1\\d{3,4}|[3-9]\\d{6,7}|800\\d{6,7}", "\\d{4,10}", , , , , , [4, 5, 7, 8, 10]], [, , "(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}", "\\d{7}", , , "3212345", , , [7]], [, , "(?:5\\d|8[1-5])\\d{6}|5(?:[02]\\d{2}|1(?:[0-8]\\d|95)|5[0-478]\\d|64[0-4]|65[1-589])\\d{3}", "\\d{7,8}", , , "51234567", , , [7, 8]], [, , "800(?:0\\d{3}|1\\d|[2-9])\\d{3}", "\\d{7,10}", , , "80012345", , , [7, 8, 10]], [, , "(?:40\\d{2}|900)\\d{4}", "\\d{7,8}", , , "9001234", , , [7, 8]], [, , "NA", "NA", , , , , , [-1]], [, , "70[0-2]\\d{5}", "\\d{8}", , , "70012345", , , [8]], [, , "NA", "NA", , , , , , [-1]], "EE", 372, "00", , , , , , , , [[, "([3-79]\\d{2})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]], [, "(70)(\\d{2})(\\d{4})", "$1 $2 $3", ["70"]], [, "(8000)(\\d{3})(\\d{3})", "$1 $2 $3", ["800", "8000"]], [, "([458]\\d{3})(\\d{3,4})", "$1 $2", ["40|5|8(?:00|[1-5])", "40|5|8(?:00[1-9]|[1-5])"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "1\\d{3,4}|800[2-9]\\d{3}", "\\d{4,7}", , , "8002123", , , [4, 5, 7]], [, , "1(?:2[01245]|3[0-6]|4[1-489]|5[0-59]|6[1-46-9]|7[0-27-9]|8[189]|9[012])\\d{1,2}", "\\d{4,5}", , , "12123", , , [4, 5]], , , [, , "NA", "NA", , , , , , [-1]]],
        EG: [, [, , "1\\d{4,9}|[2456]\\d{8}|3\\d{7}|[89]\\d{8,9}", "\\d{5,10}", , , , , , [5, 8, 9, 10], [7]], [, , "(?:1(?:3[23]\\d|5(?:[23]|9\\d))|2[2-4]\\d{2}|3\\d{2}|4(?:0[2-5]|[578][23]|64)\\d|5(?:0[2-7]|[57][23])\\d|6[24-689]3\\d|8(?:2[2-57]|4[26]|6[237]|8[2-4])\\d|9(?:2[27]|3[24]|52|6[2356]|7[2-4])\\d)\\d{5}|1[69]\\d{3}", "\\d{5,9}", , , "234567890", , , [5, 8, 9]], [, , "1(?:0[0-269]|1[0-245]|2[0-278])\\d{7}", "\\d{10}", , , "1001234567", , , [10]], [, , "800\\d{7}", "\\d{10}", , , "8001234567", , , [10]], [, , "900\\d{7}", "\\d{10}", , , "9001234567", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "EG", 20, "00", "0", , , "0", , , , [[, "(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[012]|[89]00"], "0$1"], [, "(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|[89][2-9]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        EH: [, [, , "[5-9]\\d{8}", "\\d{9}", , , , , , [9]], [, , "528[89]\\d{5}", "\\d{9}", , , "528812345"], [, , "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[07][07]|6[12]))\\d{6}", "\\d{9}", , , "650123456"], [, , "80\\d{7}", "\\d{9}", , , "801234567"], [, , "89\\d{7}", "\\d{9}", , , "891234567"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "5924[01]\\d{4}", "\\d{9}", , , "592401234"], "EH", 212, "00", "0", , , "0", , , , , , [, , "NA", "NA", , , , , , [-1]], , "528[89]", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        ER: [, [, , "[178]\\d{6}", "\\d{6,7}", , , , , , [7], [6]], [, , "1(?:1[12568]|20|40|55|6[146])\\d{4}|8\\d{6}", "\\d{6,7}", , , "8370362"], [, , "17[1-3]\\d{4}|7\\d{6}", "\\d{7}", , , "7123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "ER", 291, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", , "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        ES: [, [, , "[5-9]\\d{8}", "\\d{9}", , , , , , [9]], [, , "8(?:[13]0|[28][0-8]|[47][1-9]|5[01346-9]|6[0457-9])\\d{6}|9(?:[1238][0-8]\\d{6}|4[1-9]\\d{6}|5\\d{7}|6(?:[0-8]\\d{6}|9(?:0(?:[0-57-9]\\d{4}|6(?:0[0-8]|1[1-9]|[2-9]\\d)\\d{2})|[1-9]\\d{5}))|7(?:[124-9]\\d{2}|3(?:[0-8]\\d|9[1-9]))\\d{4})", "\\d{9}", , , "810123456"], [, , "(?:6\\d{6}|7[1-4]\\d{5}|9(?:6906(?:09|10)|7390\\d{2}))\\d{2}", "\\d{9}", , , "612345678"], [, , "[89]00\\d{6}", "\\d{9}", , , "800123456"], [, , "80[367]\\d{6}", "\\d{9}", , , "803123456"], [, , "90[12]\\d{6}", "\\d{9}", , , "901123456"], [, , "70\\d{7}", "\\d{9}", , , "701234567"], [, , "NA", "NA", , , , , , [-1]], "ES", 34, "00", , , , , , , , [[, "([89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], [, "([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[568]|[79][0-8]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "51\\d{7}", "\\d{9}", , , "511234567"], , , [, , "NA", "NA", , , , , , [-1]]],
        ET: [, [, , "[1-59]\\d{8}", "\\d{7,9}", , , , , , [9], [7]], [, , "(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:18|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|22[0-6]|33[0134689]|44[04]|55[0-6]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:11[1-9]|22[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}", "\\d{7,9}", , , "111112345"], [, , "9(?:[1-468]\\d|5[89])\\d{6}", "\\d{9}", , , "911234567"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "ET", 251, "00", "0", , , "0", , , , [[, "([1-59]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", , "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        FI: [, [, , "1\\d{4,11}|[2-9]\\d{4,10}", "\\d{5,12}", , , , , , [5, 6, 7, 8, 9, 10, 11, 12]], [, , "1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}", "\\d{5,12}", , , "1312345678"], [, , "4\\d{5,10}|50\\d{4,8}", "\\d{6,11}", , , "412345678", , , [6, 7, 8, 9, 10, 11]], [, , "800\\d{4,7}", "\\d{7,10}", , , "8001234567", , , [7, 8, 9, 10]], [, , "[67]00\\d{5,6}", "\\d{8,9}", , , "600123456", , , [8, 9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "FI", 358, "00|99(?:[02469]|5(?:11|33|5[59]|88|9[09]))", "0", , , "0", , "00", , [[, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]00|[6-8]0)"], "0$1"], [, "(116\\d{3})", "$1", ["116"], "$1"], [, "(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], [, "(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], 1, , [, , "[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", "\\d{5,10}", , , "100123", , , [5, 6, 7, 8, 9, 10]], [, , "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", "\\d{5,10}", , , "10112345", , , [5, 6, 7, 8, 9, 10]], , , [, , "NA", "NA", , , , , , [-1]]],
        FJ: [, [, , "[36-9]\\d{6}|0\\d{10}", "\\d{7}(?:\\d{4})?", , , , , , [7, 11]], [, , "(?:3[0-5]|6[25-7]|8[58])\\d{5}", "\\d{7}", , , "3212345", , , [7]], [, , "(?:7[0-8]|8[034679]|9\\d)\\d{5}", "\\d{7}", , , "7012345", , , [7]], [, , "0800\\d{7}", "\\d{11}", , , "08001234567", , , [11]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "FJ", 679, "0(?:0|52)", , , , , , "00", , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[36-9]"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        FK: [, [, , "[2-7]\\d{4}", "\\d{5}", , , , , , [5]], [, , "[2-47]\\d{4}", "\\d{5}", , , "31234"], [, , "[56]\\d{4}", "\\d{5}", , , "51234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "FK", 500, "00", , , , , , , , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        FM: [, [, , "[39]\\d{6}", "\\d{7}", , , , , , [7]], [, , "3[2357]0[1-9]\\d{3}|9[2-6]\\d{5}", "\\d{7}", , , "3201234"], [, , "3[2357]0[1-9]\\d{3}|9[2-7]\\d{5}", "\\d{7}", , , "3501234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "FM", 691, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        FO: [, [, , "[2-9]\\d{5}", "\\d{6}", , , , , , [6]], [, , "(?:20|[3-4]\\d|8[19])\\d{4}", "\\d{6}", , , "201234"], [, , "(?:[27][1-9]|5\\d)\\d{4}", "\\d{6}", , , "211234"], [, , "80[257-9]\\d{3}", "\\d{6}", , , "802123"], [, , "90(?:[1345][15-7]|2[125-7]|99)\\d{2}", "\\d{6}", , , "901123"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "(?:6[0-36]|88)\\d{4}", "\\d{6}", , , "601234"], "FO", 298, "00", , , , "(10(?:01|[12]0|88))", , , , [[, "(\\d{6})", "$1", , , "$CC $1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        FR: [, [, , "[1-9]\\d{8}", "\\d{9}", , , , , , [9]], [, , "[1-5]\\d{8}", "\\d{9}", , , "123456789"], [, , "(?:6\\d|7[3-9])\\d{7}", "\\d{9}", , , "612345678"], [, , "80[0-5]\\d{6}", "\\d{9}", , , "801234567"], [, , "89[1-37-9]\\d{6}", "\\d{9}", , , "891123456"], [, , "8(?:1[019]|2[0156]|84|90)\\d{6}", "\\d{9}", , , "810123456"], [, , "NA", "NA", , , , , , [-1]], [, , "9\\d{8}", "\\d{9}", , , "912345678"], "FR", 33, "00", "0", , , "0", , , , [[, "([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"], [, "(1\\d{2})(\\d{3})", "$1 $2", ["11"], "$1"], [, "(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"]], [[, "([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"], [, "(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "80[6-9]\\d{6}", "\\d{9}", , , "806123456"], , , [, , "NA", "NA", , , , , , [-1]]],
        GA: [, [, , "0?\\d{7}", "\\d{7,8}", , , , , , [7, 8]], [, , "01\\d{6}", "\\d{8}", , , "01441234", , , [8]], [, , "0?[2-7]\\d{6}", "\\d{7,8}", , , "06031234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "GA", 241, "00", , , , , , , , [[, "(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        GB: [, [, , "\\d{7,10}", "\\d{4,10}", , , , , , [7, 9, 10], [4, 5, 6, 8]], [, , "2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[012])\\d{7}|1(?:(?:1(?:3[0-48]|[46][0-4]|5[012789]|7[0-49]|8[01349])|21[0-7]|31[0-8]|[459]1\\d|61[0-46-9]))\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-4789]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1235679]|9[24578])|4(?:0[03-9]|[28][02-5789]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1235-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-5789])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[023678]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-5789]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-5789]|4[2-9]|5[0-579]|6[234789]|7[0124578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-4789]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[015789]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[234678]\\d{2}|16977[23]\\d{3}", "\\d{4,10}", , , "1212345678", , , [9, 10]], [, , "7(?:[1-4]\\d\\d|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[04-9]\\d|1[02-9]|2[0-35-9]|3[0-689]))\\d{6}", "\\d{10}", , , "7400123456", , , [10]], [, , "80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}", "\\d{7}(?:\\d{2,3})?", , , "8001234567"], [, , "(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}", "\\d{10}", , , "9012345678", , , [10]], [, , "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})", "\\d{7}(?:\\d{3})?", , , "8431234567", , , [7, 10]], [, , "70\\d{8}", "\\d{10}", , , "7012345678", , , [10]], [, , "56\\d{8}", "\\d{10}", , , "5612345678", , , [10]], "GB", 44, "00", "0", " x", , "0", , , , [[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7(?:0|6[013-9])", "2|5[56]|7(?:0|6(?:[013-9]|2[0-35-9]))"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:1|\\d1)|3|9[018]"], "0$1"], [, "(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:387|5(?:24|39)|697|768|946)", "1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)"], "0$1"], [, "(1\\d{3})(\\d{5,6})", "$1 $2", ["1"], "0$1"], [, "(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-5789]|62)", "7(?:[1-5789]|624)"], "0$1"], [, "(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], [, "(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], [, "(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"], "0$1"], [, "(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1"], [, "([58]00)(\\d{6})", "$1 $2", ["[58]00"], "0$1"]], , [, , "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "\\d{10}", , , "7640123456", , , [10]], 1, , [, , "NA", "NA", , , , , , [-1]], [, , "(?:3[0347]|55)\\d{8}", "\\d{10}", , , "5512345678", , , [10]], , , [, , "NA", "NA", , , , , , [-1]]],
        GD: [, [, , "[4589]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|68|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}", "\\d{7}(?:\\d{3})?", , , "4732691234"], [, , "473(?:4(?:0[2-79]|1[04-9]|20|58)|5(?:2[01]|3[3-8])|901)\\d{4}", "\\d{7}(?:\\d{3})?", , , "4734031234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "GD", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "473", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        GE: [, [, , "[34578]\\d{8}", "\\d{6,9}", , , , , , [9], [6]], [, , "(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}", "\\d{6,9}", , , "322123456"], [, , "5(?:14|5[01578]|68|7[0147-9]|9[0-35-9])\\d{6}", "\\d{9}", , , "555123456"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "706\\d{6}", "\\d{9}", , , "706123456"], "GE", 995, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "706\\d{6}", "\\d{9}", , , "706123456"], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        GF: [, [, , "[56]\\d{8}", "\\d{9}", , , , , , [9]], [, , "594(?:10|2[012457-9]|3[0-57-9]|4[3-9]|5[7-9]|6[0-3]|9[014])\\d{4}", "\\d{9}", , , "594101234"], [, , "694(?:[04][0-7]|1[0-5]|3[018]|[29]\\d)\\d{4}", "\\d{9}", , , "694201234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "GF", 594, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        GG: [, [, , "[135789]\\d{6,9}", "\\d{6,10}", , , , , , [7, 9, 10], [6]], [, , "1481\\d{6}", "\\d{6,10}", , , "1481456789", , , [10]], [, , "7(?:781|839|911)\\d{6}", "\\d{10}", , , "7781123456", , , [10]], [, , "80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}", "\\d{7}(?:\\d{2,3})?", , , "8001234567"], [, , "(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}", "\\d{10}", , , "9012345678", , , [10]], [, , "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})", "\\d{7}(?:\\d{3})?", , , "8431234567", , , [7, 10]], [, , "70\\d{8}", "\\d{10}", , , "7012345678", , , [10]], [, , "56\\d{8}", "\\d{10}", , , "5612345678", , , [10]], "GG", 44, "00", "0", " x", , "0", , , , , , [, , "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "\\d{10}", , , "7640123456", , , [10]], , , [, , "NA", "NA", , , , , , [-1]], [, , "(?:3[0347]|55)\\d{8}", "\\d{10}", , , "5512345678", , , [10]], , , [, , "NA", "NA", , , , , , [-1]]],
        GH: [, [, , "[235]\\d{8}|8\\d{7}", "\\d{7,9}", , , , , , [8, 9], [7]], [, , "3(?:0[237]\\d|[167](?:2[0-6]|7\\d)|2(?:2[0-5]|7\\d)|3(?:2[0-3]|7\\d)|4(?:2[013-9]|3[01]|7\\d)|5(?:2[0-7]|7\\d)|8(?:2[0-2]|7\\d)|9(?:20|7\\d))\\d{5}", "\\d{7,9}", , , "302345678", , , [9]], [, , "(?:2[034678]\\d|5(?:[047]\\d|5[3-6]|6[01]))\\d{6}", "\\d{9}", , , "231234567", , , [9]], [, , "800\\d{5}", "\\d{8}", , , "80012345", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "GH", 233, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"], [, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "800\\d{5}", "\\d{8}", , , "80012345", , , [8]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        GI: [, [, , "[2568]\\d{7}", "\\d{8}", , , , , , [8]], [, , "2(?:00\\d|1(?:6[24-7]|9\\d)|2(?:00|2[2457]))\\d{4}", "\\d{8}", , , "20012345"], [, , "(?:5[46-8]|62)\\d{6}", "\\d{8}", , , "57123456"], [, , "80\\d{6}", "\\d{8}", , , "80123456"], [, , "8[1-689]\\d{6}", "\\d{8}", , , "88123456"], [, , "87\\d{6}", "\\d{8}", , , "87123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "GI", 350, "00", , , , , , , , [[, "(\\d{3})(\\d{5})", "$1 $2", ["2"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        GL: [, [, , "[1-689]\\d{5}", "\\d{6}", , , , , , [6]], [, , "(?:19|3[1-6]|6[14689]|8[14-79]|9\\d)\\d{4}", "\\d{6}", , , "321000"], [, , "[245][2-9]\\d{4}", "\\d{6}", , , "221234"], [, , "80\\d{4}", "\\d{6}", , , "801234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "3[89]\\d{4}", "\\d{6}", , , "381234"], "GL", 299, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        GM: [, [, , "[2-9]\\d{6}", "\\d{7}", , , , , , [7]], [, , "(?:4(?:[23]\\d{2}|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6(?:[67]\\d)|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}", "\\d{7}", , , "5661234"], [, , "[23679]\\d{6}", "\\d{7}", , , "3012345"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "GM", 220, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        GN: [, [, , "[367]\\d{7,8}", "\\d{8,9}", , , , , , [8, 9]], [, , "30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}", "\\d{8}", , , "30241234", , , [8]], [, , "6[02356]\\d{7}", "\\d{9}", , , "601123456", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "722\\d{6}", "\\d{9}", , , "722123456", , , [9]], "GN", 224, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        GP: [, [, , "[56]\\d{8}", "\\d{9}", , , , , , [9]], [, , "590(?:0[13468]|1[012]|2[0-68]|3[28]|4[0-8]|5[579]|6[0189]|70|8[0-689]|9\\d)\\d{4}", "\\d{9}", , , "590201234"], [, , "690(?:0[0-7]|[1-9]\\d)\\d{4}", "\\d{9}", , , "690301234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "GP", 590, "00", "0", , , "0", , , , [[, "([56]90)(\\d{2})(\\d{4})", "$1 $2-$3", , "0$1"]], , [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        GQ: [, [, , "[23589]\\d{8}", "\\d{9}", , , , , , [9]], [, , "3(?:3(?:3\\d[7-9]|[0-24-9]\\d[46])|5\\d{2}[7-9])\\d{4}", "\\d{9}", , , "333091234"], [, , "(?:222|55[15])\\d{6}", "\\d{9}", , , "222123456"], [, , "80\\d[1-9]\\d{5}", "\\d{9}", , , "800123456"], [, , "90\\d[1-9]\\d{5}", "\\d{9}", , , "900123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "GQ", 240, "00", , , , , , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], [, "(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        GR: [, [, , "[26-9]\\d{9}", "\\d{10}", , , , , , [10]], [, , "2(?:1\\d{2}|2(?:2[1-46-9]|3[1-8]|4[1-7]|5[1-4]|6[1-8]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|3[1245]|4[1-7]|5[13-9]|[269][1-6]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}", "\\d{10}", , , "2123456789"], [, , "69\\d{8}", "\\d{10}", , , "6912345678"], [, , "800\\d{7}", "\\d{10}", , , "8001234567"], [, , "90[19]\\d{7}", "\\d{10}", , , "9091234567"], [, , "8(?:0[16]|12|25)\\d{7}", "\\d{10}", , , "8011234567"], [, , "70\\d{8}", "\\d{10}", , , "7012345678"], [, , "NA", "NA", , , , , , [-1]], "GR", 30, "00", , , , , , , , [[, "([27]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[2-9]1|[689]"]], [, "(2\\d{3})(\\d{6})", "$1 $2", ["2[2-9][02-9]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        GT: [, [, , "[2-7]\\d{7}|1[89]\\d{9}", "\\d{8}(?:\\d{3})?", , , , , , [8, 11]], [, , "[267][2-9]\\d{6}", "\\d{8}", , , "22456789", , , [8]], [, , "[345]\\d{7}", "\\d{8}", , , "51234567", , , [8]], [, , "18[01]\\d{8}", "\\d{11}", , , "18001112222", , , [11]], [, , "19\\d{9}", "\\d{11}", , , "19001112222", , , [11]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "GT", 502, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        GU: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|47|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "6713001234"], [, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|47|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "6713001234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "GU", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA", , , , , , [-1]], , "671", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        GW: [, [, , "(?:4(?:0\\d{5}|4\\d{7})|9\\d{8})", "\\d{7,9}", , , , , , [7, 9]], [, , "443(?:2[0125]|3[1245]|4[12]|5[1-4]|70|9[1-467])\\d{4}", "\\d{9}", , , "443201234", , , [9]], [, , "9(?:55\\d|6(?:6\\d|9[012])|77\\d)\\d{5}", "\\d{9}", , , "955012345", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "40\\d{5}", "\\d{7}", , , "4012345", , , [7]], "GW", 245, "00", , , , , , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["44|9[567]"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["40"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        GY: [, [, , "[2-4679]\\d{6}", "\\d{7}", , , , , , [7]], [, , "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}", "\\d{7}", , , "2201234"], [, , "6\\d{6}", "\\d{7}", , , "6091234"], [, , "(?:289|862)\\d{4}", "\\d{7}", , , "2891234"], [, , "9008\\d{3}", "\\d{7}", , , "9008123"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "GY", 592, "001", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        HK: [, [, , "[235-7]\\d{7}|8\\d{7,8}|9\\d{4,10}", "\\d{5,11}", , , , , , [5, 6, 7, 8, 9, 11]], [, , "(?:[23]\\d|58)\\d{6}", "\\d{8}", , , "21234567", , , [8]], [, , "(?:5[1-79]\\d|6\\d{2}|8[4-79]\\d|9(?:0[1-9]|[1-8]\\d))\\d{5}", "\\d{8}", , , "51234567", , , [8]], [, , "800\\d{6}", "\\d{9}", , , "800123456", , , [9]], [, , "900(?:[0-24-9]\\d{7}|3\\d{1,4})", "\\d{5,11}", , , "90012345678", , , [5, 6, 7, 8, 11]], [, , "NA", "NA", , , , , , [-1]], [, , "8[1-3]\\d{6}", "\\d{8}", , , "81123456", , , [8]], [, , "NA", "NA", , , , , , [-1]], "HK", 852, "00(?:[126-9]|30|5[09])?", , , , , , "00", , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[235-7]|[89](?:0[1-9]|[1-9])"]], [, "(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"]], [, "(900)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["900"]], [, "(900)(\\d{2,5})", "$1 $2", ["900"]]], , [, , "7\\d{7}", "\\d{8}", , , "71234567", , , [8]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        HN: [, [, , "[237-9]\\d{7}", "\\d{8}", , , , , , [8]], [, , "2(?:2(?:0[019]|1[1-36]|[23]\\d|4[056]|5[57]|7[01389]|8[0146-9]|9[012])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:16|4[3-5]|5\\d|6[4-6]|74)|6(?:[056]\\d|17|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034])|8(?:79|8[0-35789]|9[1-57-9]))\\d{4}", "\\d{8}", , , "22123456"], [, , "[37-9]\\d{7}", "\\d{8}", , , "91234567"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "HN", 504, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1-$2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        HR: [, [, , "[1-7]\\d{5,8}|[89]\\d{6,11}", "\\d{6,12}", , , , , , [6, 7, 8, 9, 10, 11, 12]], [, , "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}", "\\d{6,9}", , , "12345678", , , [8, 9]], [, , "9(?:[1-9]\\d{6,10}|01\\d{6,9})", "\\d{8,12}", , , "912345678", , , [8, 9, 10, 11, 12]], [, , "80[01]\\d{4,7}", "\\d{7,10}", , , "8001234567", , , [7, 8, 9, 10]], [, , "6(?:[01459]\\d{4,7})", "\\d{6,9}", , , "611234", , , [6, 7, 8, 9]], [, , "NA", "NA", , , , , , [-1]], [, , "7[45]\\d{4,7}", "\\d{6,9}", , , "741234567", , , [6, 7, 8, 9]], [, , "NA", "NA", , , , , , [-1]], "HR", 385, "00", "0", , , "0", , , , [[, "(1)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], [, "(6[09])(\\d{4})(\\d{3})", "$1 $2 $3", ["6[09]"], "0$1"], [, "([67]2)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]2"], "0$1"], [, "([2-5]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], [, "(9\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], [, "(9\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], [, "(9\\d)(\\d{3,4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[0145]|7"], "0$1"], [, "(\\d{2})(\\d{3,4})(\\d{3})", "$1 $2 $3", ["6[0145]|7"], "0$1"], [, "(80[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], [, "(80[01])(\\d{3,4})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "[76]2\\d{6,7}", "\\d{8,9}", , , "62123456", , , [8, 9]], , , [, , "NA", "NA", , , , , , [-1]]],
        HT: [, [, , "[2-489]\\d{7}", "\\d{8}", , , , , , [8]], [, , "2(?:[248]\\d|5[1-5]|94)\\d{5}", "\\d{8}", , , "22453300"], [, , "(?:3[1-9]\\d|4\\d{2}|9(?:8[0-35]|9[5-9]))\\d{5}", "\\d{8}", , , "34101234"], [, , "8\\d{7}", "\\d{8}", , , "80012345"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "98[89]\\d{5}", "\\d{8}", , , "98901234"], "HT", 509, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        HU: [, [, , "[1-9]\\d{7,8}", "\\d{6,9}", , , , , , [8, 9], [6]], [, , "(?:1\\d|2[2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|7[2-9]|8[2-57-9]|9[2-69])\\d{6}", "\\d{6,8}", , , "12345678", , , [8]], [, , "(?:[257]0|3[01])\\d{7}", "\\d{9}", , , "201234567", , , [9]], [, , "[48]0\\d{6}", "\\d{8}", , , "80123456", , , [8]], [, , "9[01]\\d{6}", "\\d{8}", , , "90123456", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "21\\d{7}", "\\d{9}", , , "211234567", , , [9]], "HU", 36, "00", "06", , , "06", , , , [[, "(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "($1)"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "($1)"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "[48]0\\d{6}", "\\d{8}", , , "80123456", , , [8]], [, , "38\\d{7}", "\\d{6,9}", , , "381234567", , , [9]], , , [, , "NA", "NA", , , , , , [-1]]],
        ID: [, [, , "(?:[1-79]\\d{6,10}|8\\d{7,11})", "\\d{5,12}", , , , , , [7, 8, 9, 10, 11, 12], [5, 6]], [, , "2(?:1(?:14\\d{3}|[0-8]\\d{6,7}|500\\d{3}|9\\d{6})|2\\d{6,8}|4\\d{7,8})|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:19?|[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}", "\\d{5,11}", , , "612345678", , , [7, 8, 9, 10, 11]], [, , "(?:2(?:1(?:3[145]|4[01]|5[1-469]|60|8[0359]|9\\d)|2(?:88|9[1256])|3[1-4]9|4(?:36|91)|5(?:1[349]|[2-4]9)|6[0-7]9|7(?:[1-36]9|4[39])|8[1-5]9|9[1-48]9)|3(?:19[1-3]|2[12]9|3[13]9|4(?:1[69]|39)|5[14]9|6(?:1[69]|2[89])|709)|4[13]19|5(?:1(?:19|8[39])|4[129]9|6[12]9)|6(?:19[12]|2(?:[23]9|77))|7(?:1[13]9|2[15]9|419|5(?:1[89]|29)|6[15]9|7[178]9))\\d{5,6}|8[1-35-9]\\d{7,10}", "\\d{9,12}", , , "812345678", , , [9, 10, 11, 12]], [, , "177\\d{6,8}|800\\d{5,7}", "\\d{8,11}", , , "8001234567", , , [8, 9, 10, 11]], [, , "809\\d{7}", "\\d{10}", , , "8091234567", , , [10]], [, , "804\\d{7}", "\\d{10}", , , "8041234567", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "ID", 62, "0(?:0[1789]|10(?:00|1[67]))", "0", , , "0", , , , [[, "(\\d{2})(\\d{5,8})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], [, "(\\d{3})(\\d{5,8})", "$1 $2", ["[4579]|2[035-9]|[36][02-9]"], "(0$1)"], [, "(8\\d{2})(\\d{3,4})(\\d{3,5})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], [, "(1)(500)(\\d{3})", "$1 $2 $3", ["15"], "$1"], [, "(177)(\\d{6,8})", "$1 $2", ["17"], "0$1"], [, "(800)(\\d{5,7})", "$1 $2", ["800"], "0$1"], [, "(804)(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], [, "(80\\d)(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80[79]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "8071\\d{6}", "\\d{10}", , , "8071123456", , , [10]], [, , "1500\\d{3}|8071\\d{6}", "\\d{7,10}", , , "8071123456", , , [7, 10]], , , [, , "NA", "NA", , , , , , [-1]]],
        IE: [, [, , "[124-9]\\d{6,9}", "\\d{5,10}", , , , , , [7, 8, 9, 10], [5, 6]], [, , "1\\d{7,8}|2(?:1\\d{6,7}|3\\d{7}|[24-9]\\d{5})|4(?:0[24]\\d{5}|[1-469]\\d{7}|5\\d{6}|7\\d{5}|8[0-46-9]\\d{7})|5(?:0[45]\\d{5}|1\\d{6}|[23679]\\d{7}|8\\d{5})|6(?:1\\d{6}|[237-9]\\d{5}|[4-6]\\d{7})|7[14]\\d{7}|9(?:1\\d{6}|[04]\\d{7}|[35-9]\\d{5})", "\\d{5,10}", , , "2212345"], [, , "8(?:22\\d{6}|[35-9]\\d{7})", "\\d{9}", , , "850123456", , , [9]], [, , "1800\\d{6}", "\\d{10}", , , "1800123456", , , [10]], [, , "15(?:1[2-8]|[2-8]0|9[089])\\d{6}", "\\d{10}", , , "1520123456", , , [10]], [, , "18[59]0\\d{6}", "\\d{10}", , , "1850123456", , , [10]], [, , "700\\d{6}", "\\d{9}", , , "700123456", , , [9]], [, , "76\\d{7}", "\\d{9}", , , "761234567", , , [9]], "IE", 353, "00", "0", , , "0", , , , [[, "(1)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], [, "(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], [, "(\\d{3})(\\d{5})", "$1 $2", ["40[24]|50[45]"], "(0$1)"], [, "(48)(\\d{4})(\\d{4})", "$1 $2 $3", ["48"], "(0$1)"], [, "(818)(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[24-69]|7[14]"], "(0$1)"], [, "([78]\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["76|8[35-9]"], "0$1"], [, "(700)(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:8[059]|5)", "1(?:8[059]0|5)"], "$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "18[59]0\\d{6}", "\\d{10}", , , "1850123456", , , [10]], [, , "818\\d{6}", "\\d{9}", , , "818123456", , , [9]], , , [, , "8[35-9]\\d{8}", "\\d{10}", , , "8501234567", , , [10]]],
        IL: [, [, , "[17]\\d{6,9}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}", "\\d{4,10}", , , , , , [4, 7, 8, 9, 10]], [, , "[2-489]\\d{7}", "\\d{7,8}", , , "21234567", , , [8]], [, , "5(?:[02-47-9]\\d{2}|5(?:01|2[23]|3[2-4]|4[45]|5[5689]|6[67]|7[0178]|8[6-9]|9[4-9])|6[2-9]\\d)\\d{5}", "\\d{9}", , , "501234567", , , [9]], [, , "1(?:80[019]\\d{3}|255)\\d{3}", "\\d{7,10}", , , "1800123456", , , [7, 10]], [, , "1(?:212|(?:9(?:0[01]|19)|200)\\d{2})\\d{4}", "\\d{8,10}", , , "1919123456", , , [8, 9, 10]], [, , "1700\\d{6}", "\\d{10}", , , "1700123456", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "7(?:18\\d|2[23]\\d|3[237]\\d|47\\d|6(?:5\\d|8[0168])|7\\d{2}|8(?:2\\d|33|55|77|81)|9[29]\\d)\\d{5}", "\\d{9}", , , "771234567", , , [9]], "IL", 972, "0(?:0|1[2-9])", "0", , , "0", , , , [[, "([2-489])(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], [, "([57]\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], [, "(1)([7-9]\\d{2})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"], "$1"], [, "(1255)(\\d{3})", "$1-$2", ["125"], "$1"], [, "(1200)(\\d{3})(\\d{3})", "$1-$2-$3", ["120"], "$1"], [, "(1212)(\\d{2})(\\d{2})", "$1-$2-$3", ["121"], "$1"], [, "(1599)(\\d{6})", "$1-$2", ["15"], "$1"], [, "(\\d{4})", "*$1", ["[2-689]"], "$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "1700\\d{6}|[2-689]\\d{3}", "\\d{4,10}", , , "1700123456", , , [4, 10]], [, , "[2-689]\\d{3}|1599\\d{6}", "\\d{4}(?:\\d{6})?", , , "1599123456", , , [4, 10]], , , [, , "NA", "NA", , , , , , [-1]]],
        IM: [, [, , "[135789]\\d{6,9}", "\\d{6,10}", , , , , , [10], [6]], [, , "1624\\d{6}", "\\d{6,10}", , , "1624456789"], [, , "7[569]24\\d{6}", "\\d{10}", , , "7924123456"], [, , "808162\\d{4}", "\\d{10}", , , "8081624567"], [, , "(?:872299|90[0167]624)\\d{4}", "\\d{10}", , , "9016247890"], [, , "8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}", "\\d{10}", , , "8456247890"], [, , "70\\d{8}", "\\d{10}", , , "7012345678"], [, , "56\\d{8}", "\\d{10}", , , "5612345678"], "IM", 44, "00", "0", " x", , "0", , , , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}", "\\d{10}", , , "5512345678"], , , [, , "NA", "NA", , , , , , [-1]]],
        IN: [, [, , "008\\d{9}|1\\d{7,12}|[2-9]\\d{9,10}", "\\d{6,13}", , , , , , [8, 9, 10, 11, 12, 13], [6, 7]], [, , "(?:11|2[02]|33|4[04]|79)[2-7]\\d{7}|80[2-467]\\d{7}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[13-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1-5]|4[25-8]|5[125689]|6[235-7]|7[157-9]|8[2-467])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|[57][2-689]|6[24-578]|8[1-6])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d|7(?:(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|9\\d)\\d|8(?:2[0-6]|[013-8]\\d)))[2-7]\\d{5}", "\\d{6,10}", , , "1123456789", , , [10]], [, , "(?:7(?:0\\d{3}|2(?:[0235679]\\d{2}|[14][017-9]\\d|8(?:[0-59]\\d|6[089]|78)|9[389]\\d)|3(?:[05-8]\\d{2}|1(?:[089]\\d|7[5-8])|2(?:[5-8]\\d|[01][089])|3(?:07|[17-9]\\d)|4(?:[07-9]\\d|11)|9(?:[01689]\\d|59|70))|4(?:0[1-9]\\d|1(?:[015-9]\\d|2[089]|4[08])|2(?:09|[1-7][089]|[89]\\d)|3(?:[0-8][089]|9\\d)|4(?:[089]\\d|11|7[02-8])|5(?:0[089]|[59]9)|7(?:0[3-9]|11|7[02-8]|[89]\\d)|8(?:[0-24-7][089]|[389]\\d)|9(?:[0-6][089]|7[08]|[89]\\d))|5(?:[034678]\\d|2[03-9]|5[017-9]|9[7-9])\\d|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9]\\d)\\d|7(?:0[2-9]|[1-79]\\d|8[1-9])\\d|8(?:[0-79]\\d{2}|88[01])|99[4-9]\\d)|8(?:0(?:[01589]\\d|6[67])|1(?:[02-57-9]\\d|1[0135-9])|2(?:[236-9]\\d|5[1-9])|3(?:[0357-9]\\d|4[1-9])|[45]\\d{2}|6[02457-9]\\d|7(?:07|[1-69]\\d)|8(?:[0-26-9]\\d|44|5[2-9])|9(?:[035-9]\\d|2[2-9]|4[0-8]))\\d|9\\d{4})\\d{5}", "\\d{10}", , , "9987654321", , , [10]], [, , "00800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))", "\\d{8,13}", , , "1800123456"], [, , "186[12]\\d{9}", "\\d{13}", , , "1861123456789", , , [13]], [, , "1860\\d{7}", "\\d{11}", , , "18603451234", , , [11]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "IN", 91, "00", "0", , , "0", , , , [[, "(\\d{5})(\\d{5})", "$1 $2", ["7(?:[023578]|4[0-57-9]|6[0-35-9]|99)|8(?:0[015689]|1[0-57-9]|2[2356-9]|3[0-57-9]|[45]|6[02457-9]|7[01-69]|8[0-24-9]|9[02-9])|9", "7(?:[08]|2(?:[0235679]|[14][017-9]|8[0-79]|9[389])|3(?:[05-8]|1[07-9]|2[015-8]|[34][017-9]|9[015-9])|4(?:0[1-9]|1[0-24-9]|[2389]|[47][017-9]|5[059])|5(?:[034678]|2[03-9]|5[017-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9])|7(?:0[2-9]|[1-79]|8[1-9])|99[4-9])|8(?:0(?:[01589]|6[67])|1(?:[02-57-9]|1[0135-9])|2(?:[236-9]|5[1-9])|3(?:[0357-9]|4[1-9])|[45]|6[02457-9]|7(?:07|[1-69])|8(?:[0-26-9]|44|5[2-9])|9(?:[035-9]|2[2-9]|4[0-8]))|9", "7(?:0|2(?:[0235679]|[14][017-9]|8(?:[0-569]|78)|9[389])|3(?:[05-8]|1(?:[089]|7[5-9])|2(?:[5-8]|[01][089])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|59|70))|4(?:0[1-9]|1(?:[015-9]|2[089]|4[08])|2(?:09|[1-7][089]|[89])|3(?:[0-8][089]|9)|4(?:[089]|11|7[02-8])|5(?:0[089]|[59]9)|7(?:0[3-9]|11|7[02-8]|[89])|8(?:[0-24-7][089]|[389])|9(?:[0-6][089]|7[08]|[89]))|5(?:[034678]|2[03-9]|5[017-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9])|7(?:0[2-9]|[1-79]|8[1-9])|8(?:[0-79]|88[01])|99[4-9])|8(?:0(?:[01589]|6[67])|1(?:[02-57-9]|1[0135-9])|2(?:[236-9]|5[1-9])|3(?:[0357-9]|4[1-9])|[45]|6[02457-9]|7(?:07|[1-69])|8(?:[0-26-9]|44|5[2-9])|9(?:[035-9]|2[2-9]|4[0-8]))|9"], "0$1", , 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79|80[2-46]"], "0$1", , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[569][14]|7[1257]|8[1346]|[68][1-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)"], "0$1", , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)", "7(?:12|2[14]|3[134]|4[47]|5(?:1|5[2-6])|[67]1|88)"], "0$1", , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"], "0$1", , 1], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[23579]|[468][1-9])|[2-8]"], "0$1", , 1], [, "(\\d{2})(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3 $4", ["008"], "0$1", , 1], [, "(1600)(\\d{2})(\\d{4})", "$1 $2 $3", ["160", "1600"], "$1", , 1], [, "(1800)(\\d{4,5})", "$1 $2", ["180", "1800"], "$1", , 1], [, "(18[06]0)(\\d{2,4})(\\d{4})", "$1 $2 $3", ["18[06]", "18[06]0"], "$1", , 1], [, "(140)(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], "$1", , 1], [, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18[06]", "18(?:0[03]|6[12])"], "$1", , 1]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "00800\\d{7}|1(?:600\\d{6}|8(?:0(?:0\\d{4,9}|3\\d{9})|6(?:0\\d{7}|[12]\\d{9})))", "\\d{8,13}", , , "1800123456"], [, , "140\\d{7}", "\\d{10}", , , "1409305260", , , [10]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        IO: [, [, , "3\\d{6}", "\\d{7}", , , , , , [7]], [, , "37\\d{5}", "\\d{7}", , , "3709100"], [, , "38\\d{5}", "\\d{7}", , , "3801234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "IO", 246, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        IQ: [, [, , "[1-7]\\d{7,9}", "\\d{6,10}", , , , , , [8, 9, 10], [6, 7]], [, , "1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", "\\d{6,9}", , , "12345678", , , [8, 9]], [, , "7[3-9]\\d{8}", "\\d{10}", , , "7912345678", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "IQ", 964, "00", "0", , , "0", , , , [[, "(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], [, "([2-6]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], [, "(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        IR: [, [, , "[1-8]\\d{9}|9(?:[0-4]\\d{8}|9\\d{2,8})", "\\d{4,10}", , , , , , [4, 5, 6, 7, 8, 9, 10]], [, , "(?:1[137]|2[13-68]|3[1458]|4[145]|5[146-8]|6[146]|7[1467]|8[13467])\\d{8}", "\\d{10}", , , "2123456789", , , [10]], [, , "9(?:0[1-3]|[13]\\d|2[0-2]|90)\\d{7}", "\\d{10}", , , "9123456789", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "(?:[2-6]0\\d|993)\\d{7}", "\\d{10}", , , "9932123456", , , [10]], "IR", 98, "00", "0", , , "0", , , , [[, "(21)(\\d{3,5})", "$1 $2", ["21"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{3})(\\d{3})", "$1 $2", ["9"], "0$1"]], , [, , "943\\d{7}", "\\d{10}", , , "9432123456", , , [10]], , , [, , "NA", "NA", , , , , , [-1]], [, , "9990\\d{0,6}", "\\d{4,10}", , , "9990123456"], , , [, , "NA", "NA", , , , , , [-1]]],
        IS: [, [, , "[4-9]\\d{6}|38\\d{7}", "\\d{7,9}", , , , , , [7, 9]], [, , "(?:4(?:1[0-24-6]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[013-79]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}", "\\d{7}", , , "4101234", , , [7]], [, , "38[589]\\d{6}|(?:6(?:1[1-8]|2[056]|3[089]|4[0167]|5[0159]|[67][0-69]|9\\d)|7(?:5[057]|6[0-2]|[78]\\d)|8(?:2[0-59]|3[0-4]|[469]\\d|5[1-9]))\\d{4}", "\\d{7,9}", , , "6111234"], [, , "800\\d{4}", "\\d{7}", , , "8001234", , , [7]], [, , "90\\d{5}", "\\d{7}", , , "9011234", , , [7]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "49\\d{5}", "\\d{7}", , , "4921234", , , [7]], "IS", 354, "1(?:0(?:01|10|20)|100)|00", , , , , , "00", , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], [, "(3\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "809\\d{4}", "\\d{7}", , , "8091234", , , [7]], , , [, , "(?:6(?:2[1-478]|49|8\\d)|8(?:7[0189]|80)|95[48])\\d{4}", "\\d{7}", , , "6211234", , , [7]]],
        IT: [, [, , "[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})", "\\d{6,11}", , , , , , [6, 7, 8, 9, 10, 11]], [, , "0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})", "\\d{6,11}", , , "0212345678"], [, , "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", "\\d{9,11}", , , "3123456789", , , [9, 10, 11]], [, , "80(?:0\\d{6}|3\\d{3})", "\\d{6,9}", , , "800123456", , , [6, 9]], [, , "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", "\\d{6,10}", , , "899123456", , , [6, 8, 9, 10]], [, , "84(?:[08]\\d{6}|[17]\\d{3})", "\\d{6,9}", , , "848123456", , , [6, 9]], [, , "1(?:78\\d|99)\\d{6}", "\\d{9,10}", , , "1781234567", , , [9, 10]], [, , "55\\d{8}", "\\d{10}", , , "5512345678", , , [10]], "IT", 39, "00", , , , , , , , [[, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|55"]], [, "(0[26])(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], [, "(0[26])(\\d{4,6})", "$1 $2", ["0[26]"]], [, "(0\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], [, "(0\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["0[13-57-9][2-46-8]"]], [, "(0\\d{3})(\\d{2,6})", "$1 $2", ["0[13-57-9][2-46-8]"]], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13]|8(?:00|4[08]|9[59])", "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["894", "894[5-9]"]], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]]], , [, , "NA", "NA", , , , , , [-1]], 1, , [, , "848\\d{6}", "\\d{9}", , , "848123456", , , [9]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        JE: [, [, , "[135789]\\d{6,9}", "\\d{6,10}", , , , , , [10], [6]], [, , "1534\\d{6}", "\\d{6,10}", , , "1534456789"], [, , "7(?:509|7(?:00|97)|829|937)\\d{6}", "\\d{10}", , , "7797123456"], [, , "80(?:07(?:35|81)|8901)\\d{4}", "\\d{10}", , , "8007354567"], [, , "(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}", "\\d{10}", , , "9018105678"], [, , "8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}", "\\d{10}", , , "8447034567"], [, , "701511\\d{4}", "\\d{10}", , , "7015115678"], [, , "56\\d{8}", "\\d{10}", , , "5612345678"], "JE", 44, "00", "0", " x", , "0", , , , , , [, , "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "\\d{10}", , , "7640123456"], , , [, , "NA", "NA", , , , , , [-1]], [, , "3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}", "\\d{10}", , , "5512345678"], , , [, , "NA", "NA", , , , , , [-1]]],
        JM: [, [, , "[589]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[027-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "8765123456"], [, , "876(?:2(?:[16-9]\\d|58)|[348]\\d{2}|5(?:0[3-9]|2[0-246-9]|6[0-24-9]|[3-578]\\d)|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "8762101234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "JM", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "876", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        JO: [, [, , "[235-9]\\d{7,8}", "\\d{8,9}", , , , , , [8, 9]], [, , "(?:2(?:6(?:2[0-35-9]|3[0-57-8]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2[50]0|3(?:00|33)|4(?:0[0125]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[17-8]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[02-39]))|87(?:[02]0|7[08]|90))\\d{4}", "\\d{8}", , , "62001234", , , [8]], [, , "7(?:55|7[025-9]|8[015-9]|9[0-25-9])\\d{6}", "\\d{9}", , , "790123456", , , [9]], [, , "80\\d{6}", "\\d{8}", , , "80012345", , , [8]], [, , "900\\d{5}", "\\d{8}", , , "90012345", , , [8]], [, , "85\\d{6}", "\\d{8}", , , "85012345", , , [8]], [, , "70\\d{7}", "\\d{9}", , , "700123456", , , [9]], [, , "NA", "NA", , , , , , [-1]], "JO", 962, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], [, "(7)(\\d{4})(\\d{4})", "$1 $2 $3", ["7[457-9]"], "0$1"], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["70|8[0158]|9"], "0$1"]], , [, , "74(?:66|77)\\d{5}", "\\d{9}", , , "746612345", , , [9]], , , [, , "NA", "NA", , , , , , [-1]], [, , "8(?:10|8\\d)\\d{5}", "\\d{8}", , , "88101234", , , [8]], , , [, , "NA", "NA", , , , , , [-1]]],
        JP: [, [, , "[1-9]\\d{8,9}|00(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})", "\\d{8,17}", , , , , , [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]], [, , "(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|2[2-9]\\d|[36][1-9]\\d|4(?:6[02-8]|[2-578]\\d|9[2-59])|5(?:6[1-9]|7[2-8]|[2-589]\\d)|7(?:3[4-9]|4[02-9]|[25-9]\\d)|8(?:3[2-9]|4[5-9]|5[1-9]|8[03-9]|[2679]\\d)|9(?:[679][1-9]|[2-58]\\d))\\d{6}", "\\d{9}", , , "312345678", , , [9]], [, , "[7-9]0[1-9]\\d{7}", "\\d{10}", , , "9012345678", , , [10]], [, , "120\\d{6}|800\\d{7}|00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})", "\\d{8,17}", , , "120123456"], [, , "990\\d{6}", "\\d{9}", , , "990123456", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "60\\d{7}", "\\d{9}", , , "601234567", , , [9]], [, , "50[1-9]\\d{7}", "\\d{10}", , , "5012345678", , , [10]], "JP", 81, "010", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], [, "(\\d{4})(\\d{4})", "$1-$2", ["0077"], "$1"], [, "(\\d{4})(\\d{2})(\\d{3,4})", "$1-$2-$3", ["0077"], "$1"], [, "(\\d{4})(\\d{2})(\\d{4})", "$1-$2-$3", ["0088"], "$1"], [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1-$2-$3", ["00(?:37|66)"], "$1"], [, "(\\d{4})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["00(?:37|66)"], "$1"], [, "(\\d{4})(\\d{5})(\\d{5,6})", "$1-$2-$3", ["00(?:37|66)"], "$1"], [, "(\\d{4})(\\d{6})(\\d{6,7})", "$1-$2-$3", ["00(?:37|66)"], "$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]0|80[1-9]"], "0$1"], [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:9[14-79]|74|[34]7|[56]9)|82|993"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2479][1-9]"], "0$1"]], [[, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]0|80[1-9]"], "0$1"], [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:9[14-79]|74|[34]7|[56]9)|82|993"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2479][1-9]"], "0$1"]], [, , "20\\d{8}", "\\d{10}", , , "2012345678", , , [10]], , , [, , "00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})", "\\d{8,17}", , , "00777012"], [, , "570\\d{6}", "\\d{9}", , , "570123456", , , [9]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        KE: [, [, , "20\\d{6,7}|[4-9]\\d{6,9}", "\\d{7,10}", , , , , , [7, 8, 9, 10]], [, , "20\\d{6,7}|4(?:[0136]\\d{7}|[245]\\d{5,7})|5(?:[08]\\d{7}|[1-79]\\d{5,7})|6(?:[01457-9]\\d{5,7}|[26]\\d{7})", "\\d{7,9}", , , "202012345", , , [7, 8, 9]], [, , "7(?:[0-369]\\d|4[0-2]|5[0-6]|7[0-7]|8[0-25-9])\\d{6}", "\\d{9}", , , "712123456", , , [9]], [, , "800[24-8]\\d{5,6}", "\\d{9,10}", , , "800223456", , , [9, 10]], [, , "900[02-9]\\d{5}", "\\d{9}", , , "900223456", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "KE", 254, "000", "0", , , "005|0", , , , [[, "(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], [, "(\\d{3})(\\d{6})", "$1 $2", ["7"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        KG: [, [, , "[235-8]\\d{8,9}", "\\d{5,10}", , , , , , [9, 10], [5, 6]], [, , "(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}", "\\d{5,10}", , , "312123456", , , [9]], [, , "(?:20[0-35]|5[124-7]\\d|7[07]\\d)\\d{6}", "\\d{9}", , , "700123456", , , [9]], [, , "800\\d{6,7}", "\\d{9,10}", , , "800123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "KG", 996, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[25-7]|31[25]"], "0$1"], [, "(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[36]|[2-9])"], "0$1"], [, "(\\d{3})(\\d{3})(\\d)(\\d{3})", "$1 $2 $3 $4", ["8"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        KH: [, [, , "[1-9]\\d{7,9}", "\\d{6,10}", , , , , , [8, 9, 10], [6, 7]], [, , "(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:[237-9]|4[56]|5\\d|6\\d?)\\d{5}|23(?:4[234]|8\\d{2})\\d{4}", "\\d{6,9}", , , "23756789", , , [8, 9]], [, , "(?:1(?:[013-79]\\d|[28]\\d{1,2})|2[3-6]48|3(?:[18]\\d{2}|[2-6]48)|4[2-4]48|5[2-5]48|6(?:[016-9]\\d|[2-5]48)|7(?:[07-9]\\d|[16]\\d{2}|[2-5]48)|8(?:[013-79]\\d|8\\d{2})|9(?:6\\d{2}|7\\d{1,2}|[0-589]\\d))\\d{5}", "\\d{8,9}", , , "91234567", , , [8, 9]], [, , "1800(?:1\\d|2[019])\\d{4}", "\\d{10}", , , "1800123456", , , [10]], [, , "1900(?:1\\d|2[09])\\d{4}", "\\d{10}", , , "1900123456", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "KH", 855, "00[14-9]", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1\\d[1-9]|[2-9]"], "0$1"], [, "(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        KI: [, [, , "[2458]\\d{4}|3\\d{4,7}|7\\d{7}", "\\d{5,8}", , , , , , [5, 8]], [, , "(?:[24]\\d|3[1-9]|50|8[0-5])\\d{3}", "\\d{5}", , , "31234", , , [5]], [, , "7\\d{7}", "\\d{8}", , , "72012345", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "3001\\d{4}", "\\d{5,8}", , , "30010000", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "KI", 686, "00", , , , "0", , , , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        KM: [, [, , "[379]\\d{6}", "\\d{7}", , , , , , [7]], [, , "7(?:6[0-37-9]|7[0-57-9])\\d{4}", "\\d{7}", , , "7712345"], [, , "3[234]\\d{5}", "\\d{7}", , , "3212345"], [, , "NA", "NA", , , , , , [-1]], [, , "(?:39[01]|9[01]0)\\d{4}", "\\d{7}", , , "9001234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "KM", 269, "00", , , , , , , , [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        KN: [, [, , "[589]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}", "\\d{7}(?:\\d{3})?", , , "8692361234"], [, , "869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}", "\\d{7}(?:\\d{3})?", , , "8697652917"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "KN", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "869", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        KP: [, [, , "1\\d{9}|[28]\\d{7}", "\\d{6,8}|\\d{10}", , , , , , [8, 10], [6, 7]], [, , "2\\d{7}|85\\d{6}", "\\d{6,8}", , , "21234567", , , [8]], [, , "19[123]\\d{7}", "\\d{10}", , , "1921234567", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "KP", 850, "00|99", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "2(?:[0-24-9]\\d{2}|3(?:[0-79]\\d|8[02-9]))\\d{4}", "\\d{8}", , , "23821234", , , [8]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        KR: [, [, , "007\\d{9,11}|[1-7]\\d{3,9}|8\\d{8}", "\\d{3,14}", , , , , , [4, 5, 6, 8, 9, 10, 12, 13, 14], [3, 7]], [, , "(?:2|3[1-3]|[46][1-4]|5[1-5])(?:1\\d{2,3}|[1-9]\\d{6,7})", "\\d{3,10}", , , "22123456", , , [4, 5, 6, 8, 9, 10]], [, , "1[0-26-9]\\d{7,8}", "\\d{9,10}", , , "1000000000", , , [9, 10]], [, , "(?:00798\\d{0,2}|80)\\d{7}", "\\d{9,14}", , , "801234567", , , [9, 12, 13, 14]], [, , "60[2-9]\\d{6}", "\\d{9}", , , "602345678", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "50\\d{8}", "\\d{10}", , , "5012345678", , , [10]], [, , "70\\d{8}", "\\d{10}", , , "7012345678", , , [10]], "KR", 82, "00(?:[124-68]|3\\d{2}|7(?:[0-8]\\d|9[0-79]))", "0", , , "0(8[1-46-8]|85\\d{2})?", , , , [[, "(\\d{5})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["00798"], "$1", "0$CC-$1"], [, "(\\d{5})(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["00798"], "$1", "0$CC-$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["1(?:0|1[19]|[69]9|5[458])|[57]0", "1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["1(?:[01]|5[1-4]|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]", "1(?:[01]|5(?:[1-3]|4[56])|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]"], "0$1", "0$CC-$1"], [, "(\\d{3})(\\d)(\\d{4})", "$1-$2-$3", ["131", "1312"], "0$1", "0$CC-$1"], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["131", "131[13-9]"], "0$1", "0$CC-$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["13[2-9]"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3-$4", ["30"], "0$1", "0$CC-$1"], [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"], "0$1", "0$CC-$1"], [, "(\\d)(\\d{3,4})", "$1-$2", ["21[0-46-9]"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3,4})", "$1-$2", ["[3-6][1-9]1", "[3-6][1-9]1(?:[0-46-9])"], "0$1", "0$CC-$1"], [, "(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[46-9]|6[04678]|8[03579])", "1(?:5(?:44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))"], "$1", "0$CC-$1"]], [[, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["1(?:0|1[19]|[69]9|5[458])|[57]0", "1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["1(?:[01]|5[1-4]|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]", "1(?:[01]|5(?:[1-3]|4[56])|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]"], "0$1", "0$CC-$1"], [, "(\\d{3})(\\d)(\\d{4})", "$1-$2-$3", ["131", "1312"], "0$1", "0$CC-$1"], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["131", "131[13-9]"], "0$1", "0$CC-$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["13[2-9]"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3-$4", ["30"], "0$1", "0$CC-$1"], [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"], "0$1", "0$CC-$1"], [, "(\\d)(\\d{3,4})", "$1-$2", ["21[0-46-9]"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3,4})", "$1-$2", ["[3-6][1-9]1", "[3-6][1-9]1(?:[0-46-9])"], "0$1", "0$CC-$1"], [, "(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[46-9]|6[04678]|8[03579])", "1(?:5(?:44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))"], "$1", "0$CC-$1"]], [, , "15\\d{7,8}", "\\d{9,10}", , , "1523456789", , , [9, 10]], , , [, , "00798\\d{7,9}", "\\d{12,14}", , , "007981234567", , , [12, 13, 14]], [, , "1(?:5(?:44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))\\d{4}", "\\d{8}", , , "15441234", , , [8]], , , [, , "NA", "NA", , , , , , [-1]]],
        KW: [, [, , "[12569]\\d{6,7}", "\\d{7,8}", , , , , , [7, 8]], [, , "(?:18\\d|2(?:[23]\\d{2}|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7])))\\d{4}", "\\d{7,8}", , , "22345678"], [, , "(?:5(?:[05]\\d{2}|1[0-7]\\d|2(?:22|5[25])|66\\d)|6(?:0[034679]\\d|222|5[015-9]\\d|6\\d{2}|7[067]\\d|9[0369]\\d)|9(?:0[09]\\d|22\\d|4[01479]\\d|55\\d|6[0679]\\d|[79]\\d{2}|8[057-9]\\d))\\d{4}", "\\d{8}", , , "50012345"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "KW", 965, "00", , , , , , , , [[, "(\\d{4})(\\d{3,4})", "$1 $2", ["[16]|2(?:[0-35-9]|4[0-35-9])|9[024-9]|52[25]"]], [, "(\\d{3})(\\d{5})", "$1 $2", ["244|5(?:[015]|66)"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        KY: [, [, , "[3589]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "3452221234"], [, , "345(?:32[1-9]|5(?:1[67]|2[5-7]|4[6-8]|76)|9(?:1[67]|2[2-9]|3[689]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "3453231234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}|345976\\d{4}", "\\d{10}", , , "9002345678"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "KY", 1, "011", "1", , , "1", , , , , , [, , "345849\\d{4}", "\\d{10}", , , "3458491234"], , "345", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        KZ: [, [, , "(?:33\\d|7\\d{2}|80[09])\\d{7}", "\\d{10}", , , , , , [10]], [, , "33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[023]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[1-79]|4[0-35-9]|59)|4(?:2\\d|3[013-79]|4[0-8]|5[1-79])|5(?:2\\d|3[1-8]|4[1-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}", "\\d{10}", , , "7123456789"], [, , "7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}", "\\d{10}", , , "7710009998"], [, , "800\\d{7}", "\\d{10}", , , "8001234567"], [, , "809\\d{7}", "\\d{10}", , , "8091234567"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "751\\d{7}", "\\d{10}", , , "7511234567"], "KZ", 7, "810", "8", , , "8", , "8~10", , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "751\\d{7}", "\\d{10}", , , "7511234567"], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        LA: [, [, , "[2-8]\\d{7,9}", "\\d{6,10}", , , , , , [8, 9, 10], [6]], [, , "(?:2[13]|3(?:0\\d|[14])|[5-7][14]|41|8[1468])\\d{6}", "\\d{6,9}", , , "21212862", , , [8, 9]], [, , "20(?:2[2389]|5[4-689]|7[6-8]|9[15-9])\\d{6}", "\\d{10}", , , "2023123456", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "LA", 856, "00", "0", , , "0", , , , [[, "(20)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["20"], "0$1"], [, "([2-8]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], [, "(30)(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        LB: [, [, , "[13-9]\\d{6,7}", "\\d{7,8}", , , , , , [7, 8]], [, , "(?:[14-6]\\d{2}|7(?:[2-57]\\d|62|8[0-7]|9[04-9])|8[02-9]\\d|9\\d{2})\\d{4}", "\\d{7}", , , "1123456", , , [7]], [, , "(?:3\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3])|81\\d)\\d{5}", "\\d{7,8}", , , "71123456"], [, , "NA", "NA", , , , , , [-1]], [, , "9[01]\\d{6}", "\\d{8}", , , "90123456", , , [8]], [, , "80\\d{6}", "\\d{8}", , , "80123456", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "LB", 961, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-6]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]|9"], "0$1"], [, "([7-9]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[89][01]|7(?:[01]|6[013-9]|8[89]|9[1-3])"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        LC: [, [, , "[5789]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "758(?:4(?:30|5[0-9]|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}", "\\d{7}(?:\\d{3})?", , , "7584305678"], [, , "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2[0-8]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "7582845678"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "LC", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "758", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        LI: [, [, , "6\\d{8}|[23789]\\d{6}", "\\d{7,9}", , , , , , [7, 9]], [, , "(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}", "\\d{7}", , , "2345678", , , [7]], [, , "6(?:51[01]|6(?:0[0-6]|2[016-9]|39))\\d{5}|7(?:[37-9]\\d|42|56)\\d{4}", "\\d{7,9}", , , "660234567"], [, , "80(?:02[28]|9\\d{2})\\d{2}", "\\d{7}", , , "8002222", , , [7]], [, , "90(?:02[258]|1(?:23|3[14])|66[136])\\d{2}", "\\d{7}", , , "9002222", , , [7]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "LI", 423, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[23789]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[56]"]], [, "(69)(7\\d{2})(\\d{4})", "$1 $2 $3", ["697"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "870(?:28|87)\\d{2}", "\\d{7}", , , "8702812", , , [7]], , , [, , "697(?:42|56|[7-9]\\d)\\d{4}", "\\d{9}", , , "697861234", , , [9]]],
        LK: [, [, , "[1-9]\\d{8}", "\\d{7,9}", , , , , , [9], [7]], [, , "(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}", "\\d{7,9}", , , "112345678"], [, , "7[0125-8]\\d{7}", "\\d{9}", , , "712345678"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "LK", 94, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{1})(\\d{6})", "$1 $2 $3", ["[1-689]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        LR: [, [, , "2\\d{7,8}|[378]\\d{8}|4\\d{6}|5\\d{6,8}", "\\d{7,9}", , , , , , [7, 8, 9]], [, , "2\\d{7}", "\\d{8}", , , "21234567", , , [8]], [, , "(?:20\\d{3}|330\\d{2}|4[67]\\d|5(?:55)?\\d{2}|77\\d{3}|88\\d{3})\\d{4}", "\\d{7,9}", , , "770123456", , , [7, 9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "332(?:02|[25]\\d)\\d{4}", "\\d{9}", , , "332021234", , , [9]], "LR", 231, "00", "0", , , "0", , , , [[, "(2\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], [, "([4-5])(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        LS: [, [, , "[2568]\\d{7}", "\\d{8}", , , , , , [8]], [, , "2\\d{7}", "\\d{8}", , , "22123456"], [, , "[56]\\d{7}", "\\d{8}", , , "50123456"], [, , "800[256]\\d{4}", "\\d{8}", , , "80021234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "LS", 266, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        LT: [, [, , "[3-9]\\d{7}", "\\d{8}", , , , , , [8]], [, , "(?:3[1478]|4[124-6]|52)\\d{6}", "\\d{8}", , , "31234567"], [, , "6\\d{7}", "\\d{8}", , , "61234567"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "9(?:0[0239]|10)\\d{5}", "\\d{8}", , , "90012345"], [, , "808\\d{5}", "\\d{8}", , , "80812345"], [, , "700\\d{5}", "\\d{8}", , , "70012345"], [, , "NA", "NA", , , , , , [-1]], "LT", 370, "00", "8", , , "[08]", , , , [[, "([34]\\d)(\\d{6})", "$1 $2", ["37|4(?:1|5[45]|6[2-4])"], "(8-$1)", , 1], [, "([3-6]\\d{2})(\\d{5})", "$1 $2", ["3[148]|4(?:[24]|6[09])|528|6"], "(8-$1)", , 1], [, "([7-9]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", , 1], [, "(5)(2\\d{2})(\\d{4})", "$1 $2 $3", ["52[0-79]"], "(8-$1)", , 1]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "70[67]\\d{5}", "\\d{8}", , , "70712345"], , , [, , "NA", "NA", , , , , , [-1]]],
        LU: [, [, , "[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})", "\\d{4,11}", , , , , , [4, 5, 6, 7, 8, 9, 10, 11]], [, , "(?:2[2-9]\\d{2,9}|(?:[3457]\\d{2}|8(?:0[2-9]|[13-9]\\d)|9(?:0[89]|[2-579]\\d))\\d{1,8})", "\\d{4,11}", , , "27123456"], [, , "6[2679][18]\\d{6}", "\\d{9}", , , "628123456", , , [9]], [, , "800\\d{5}", "\\d{8}", , , "80012345", , , [8]], [, , "90[015]\\d{5}", "\\d{8}", , , "90012345", , , [8]], [, , "801\\d{5}", "\\d{8}", , , "80112345", , , [8]], [, , "70\\d{6}", "\\d{8}", , , "70123456", , , [8]], [, , "20(?:1\\d{5}|[2-689]\\d{1,7})", "\\d{4,10}", , , "20201234", , , [4, 5, 6, 7, 8, 9, 10]], "LU", 352, "00", , , , "(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)", , , , [[, "(\\d{2})(\\d{3})", "$1 $2", ["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"], , "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"], , "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20"], , "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"], , "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"], , "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"], , "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})", "$1 $2 $3 $4", ["2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:[1-9]|0[2-9])|9(?:[1-9]|0[2-46-9])"], , "$CC $1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["70|80[01]|90[015]"], , "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], , "$CC $1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        LV: [, [, , "[2689]\\d{7}", "\\d{8}", , , , , , [8]], [, , "6\\d{7}", "\\d{8}", , , "63123456"], [, , "2\\d{7}", "\\d{8}", , , "21234567"], [, , "80\\d{6}", "\\d{8}", , , "80123456"], [, , "90\\d{6}", "\\d{8}", , , "90123456"], [, , "81\\d{6}", "\\d{8}", , , "81123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "LV", 371, "00", , , , , , , , [[, "([2689]\\d)(\\d{3})(\\d{3})", "$1 $2 $3"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        LY: [, [, , "[25679]\\d{8}", "\\d{7,9}", , , , , , [9], [7]], [, , "(?:2[1345]|5[1347]|6[123479]|71)\\d{7}", "\\d{7,9}", , , "212345678"], [, , "9[1-6]\\d{7}", "\\d{9}", , , "912345678"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "LY", 218, "00", "0", , , "0", , , , [[, "([25679]\\d)(\\d{7})", "$1-$2", , "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MA: [, [, , "[5-9]\\d{8}", "\\d{9}", , , , , , [9]], [, , "5(?:2(?:(?:[015-7]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|9(?:0\\d|[89]0))|3(?:(?:[0-4]\\d|[57][2-9]|6[2-8]|9[3-9])\\d|8(?:0\\d|[89]0))|(?:4[067]|5[03])\\d{2})\\d{4}", "\\d{9}", , , "520123456"], [, , "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[07][07]|6[12]))\\d{6}", "\\d{9}", , , "650123456"], [, , "80\\d{7}", "\\d{9}", , , "801234567"], [, , "89\\d{7}", "\\d{9}", , , "891234567"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "5924[01]\\d{4}", "\\d{9}", , , "592401234"], "MA", 212, "00", "0", , , "0", , , , [[, "([5-7]\\d{2})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"], "0$1"], [, "([58]\\d{3})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|92)|892", "5(?:2(?:[2-48]|90)|3(?:[5-79]|80)|924)|892"], "0$1"], [, "(5\\d{4})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"], "0$1"], [, "([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:4[067]|5[03])"], "0$1"], [, "(8[09])(\\d{7})", "$1-$2", ["8(?:0|9[013-9])"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MC: [, [, , "[4689]\\d{7,8}", "\\d{8,9}", , , , , , [8, 9]], [, , "870\\d{5}|9[2-47-9]\\d{6}", "\\d{8}", , , "99123456", , , [8]], [, , "6\\d{8}|4(?:4\\d|5[1-9])\\d{5}", "\\d{8,9}", , , "612345678"], [, , "90\\d{6}", "\\d{8}", , , "90123456", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "MC", 377, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], [, "(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["8"], "$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "8\\d{7}", "\\d{8}", , , , , , [8]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MD: [, [, , "[235-9]\\d{7}", "\\d{8}", , , , , , [8]], [, , "(?:2[1-9]\\d|3[1-79]\\d|5(?:33|5[257]))\\d{5}", "\\d{8}", , , "22212345"], [, , "(?:562|6\\d{2}|7(?:[189]\\d|6[07]|7[457-9]))\\d{5}", "\\d{8}", , , "62112345"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "90[056]\\d{5}", "\\d{8}", , , "90012345"], [, , "808\\d{5}", "\\d{8}", , , "80812345"], [, , "NA", "NA", , , , , , [-1]], [, , "3[08]\\d{6}", "\\d{8}", , , "30123456"], "MD", 373, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], [, "([25-7]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["2[13-9]|[5-7]"], "0$1"], [, "([89]\\d{2})(\\d{5})", "$1 $2", ["[89]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "803\\d{5}", "\\d{8}", , , "80312345"], , , [, , "NA", "NA", , , , , , [-1]]],
        ME: [, [, , "[2-9]\\d{7,8}", "\\d{6,9}", , , , , , [8, 9], [6]], [, , "(?:20[2-8]|3(?:0[2-7]|[12][35-7]|3[4-7])|4(?:0[2367]|1[267])|5(?:0[467]|1[267]|2[367]))\\d{5}", "\\d{6,8}", , , "30234567", , , [8]], [, , "6(?:00\\d|3[24]\\d|61\\d|7(?:[0-8]\\d|9(?:[3-9]|[0-2]\\d))|[89]\\d{2})\\d{4}", "\\d{8,9}", , , "67622901"], [, , "80\\d{6}", "\\d{8}", , , "80080002", , , [8]], [, , "(?:9(?:4[1568]|5[178]))\\d{5}", "\\d{8}", , , "94515151", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "78[1-9]\\d{5}", "\\d{8}", , , "78108780", , , [8]], "ME", 382, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]|6[036-9]", "[2-57-9]|6(?:[03689]|7(?:[0-8]|9[3-9]))"], "0$1"], [, "(67)(9)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["679", "679[0-2]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "77\\d{6}", "\\d{8}", , , "77273012", , , [8]], , , [, , "NA", "NA", , , , , , [-1]]],
        MF: [, [, , "[56]\\d{8}", "\\d{9}", , , , , , [9]], [, , "590(?:[02][79]|13|5[0-268]|[78]7)\\d{4}", "\\d{9}", , , "590271234"], [, , "690(?:0[0-7]|[1-9]\\d)\\d{4}", "\\d{9}", , , "690301234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "MF", 590, "00", "0", , , "0", , , , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MG: [, [, , "[23]\\d{8}", "\\d{7,9}", , , , , , [9], [7]], [, , "20(?:2\\d{2}|4[47]\\d|5[3467]\\d|6[279]\\d|7(?:2[29]|[35]\\d)|8[268]\\d|9[245]\\d)\\d{4}", "\\d{7,9}", , , "202123456"], [, , "3[2-49]\\d{7}", "\\d{9}", , , "321234567"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "22\\d{7}", "\\d{9}", , , "221234567"], "MG", 261, "00", "0", , , "0", , , , [[, "([23]\\d)(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", , "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MH: [, [, , "[2-6]\\d{6}", "\\d{7}", , , , , , [7]], [, , "(?:247|528|625)\\d{4}", "\\d{7}", , , "2471234"], [, , "(?:235|329|45[56]|545)\\d{4}", "\\d{7}", , , "2351234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "635\\d{4}", "\\d{7}", , , "6351234"], "MH", 692, "011", "1", , , "1", , , , [[, "(\\d{3})(\\d{4})", "$1-$2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MK: [, [, , "[2-578]\\d{7}", "\\d{6,8}", , , , , , [8], [6, 7]], [, , "(?:2(?:[23]\\d|5[124578]|6[01])|3(?:1[3-6]|[23][2-6]|4[2356])|4(?:[23][2-6]|4[3-6]|5[256]|6[25-8]|7[24-6]|8[4-6]))\\d{5}", "\\d{6,8}", , , "22212345"], [, , "7(?:[0-25-8]\\d{2}|32\\d|421)\\d{4}", "\\d{6,8}", , , "72345678"], [, , "800\\d{5}", "\\d{6,8}", , , "80012345"], [, , "5[02-9]\\d{6}", "\\d{6,8}", , , "50012345"], [, , "8(?:0[1-9]|[1-9]\\d)\\d{5}", "\\d{6,8}", , , "80123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "MK", 389, "00", "0", , , "0", , , , [[, "(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], [, "([347]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], [, "([58]\\d{2})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        ML: [, [, , "[246-9]\\d{7}", "\\d{8}", , , , , , [8]], [, , "(?:2(?:0(?:2\\d|7[0-8])|1(?:2[5-7]|[3-689]\\d))|44[1239]\\d)\\d{4}", "\\d{8}", , , "20212345"], [, , "(?:2(?:079|17\\d)|[679]\\d{3}|8[239]\\d{2})\\d{4}", "\\d{8}", , , "65012345"], [, , "80\\d{6}", "\\d{8}", , , "80012345"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "ML", 223, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[246-9]"]], [, "(\\d{4})", "$1", ["67|74"]]], [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[246-9]"]]], [, , "NA", "NA", , , , , , [-1]], , , [, , "80\\d{6}", "\\d{8}", , , "80012345"], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MM: [, [, , "[14578]\\d{5,7}|[26]\\d{5,8}|9(?:2\\d{0,2}|[58]|3\\d|4\\d{1,2}|6\\d?|[79]\\d{0,2})\\d{6}", "\\d{5,10}", , , , , , [6, 7, 8, 9, 10], [5]], [, , "1(?:2\\d{1,2}|[3-5]\\d|6\\d?|[89][0-6]\\d)\\d{4}|2(?:2(?:000\\d{3}|\\d{4})|3\\d{4}|4(?:0\\d{5}|\\d{4})|5(?:1\\d{3,6}|[02-9]\\d{3,5})|[6-9]\\d{4})|4(?:2[245-8]|[346][2-6]|5[3-5])\\d{4}|5(?:2(?:20?|[3-8])|3[2-68]|4(?:21?|[4-8])|5[23]|6[2-4]|7[2-8]|8[24-7]|9[2-7])\\d{4}|6(?:0[23]|1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7(?:[2367]|4\\d|5\\d?|8[145]\\d)|8[245]|9[24])\\d{4}|7(?:[04][24-8]|[15][2-7]|22|3[2-4])\\d{4}|8(?:1(?:2\\d{1,2}|[3-689]\\d)|2(?:2\\d|3(?:\\d|20)|[4-8]\\d)|3[24]\\d|4[24-7]\\d|5[245]\\d|6[23]\\d)\\d{3}", "\\d{5,9}", , , "1234567", , , [6, 7, 8, 9]], [, , "17[01]\\d{4}|9(?:2(?:[0-4]|5\\d{2}|6[0-5]\\d)|3[0-36]\\d|4(?:0[0-4]\\d|[1379]\\d|2\\d{2}|4[0-589]\\d|5\\d{2}|88)|5[0-6]|61?\\d|7(?:3\\d|[789]\\d{2})|8\\d|9(?:1\\d|[67]\\d{2}|[089]))\\d{5}", "\\d{7,10}", , , "92123456", , , [7, 8, 9, 10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "1333\\d{4}", "\\d{8}", , , "13331234", , , [8]], "MM", 95, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1|2[245]"], "0$1"], [, "(2)(\\d{4})(\\d{4})", "$1 $2 $3", ["251"], "0$1"], [, "(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["67|81"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{3,4})", "$1 $2 $3", ["[4-8]"], "0$1"], [, "(9)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], [, "(9)([34]\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:3[0-36]|4[0-57-9])"], "0$1"], [, "(9)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92[56]"], "0$1"], [, "(9)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["93"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MN: [, [, , "[12]\\d{7,9}|[57-9]\\d{7}", "\\d{6,10}", , , , , , [8, 9, 10], [6, 7]], [, , "[12](?:1\\d|2(?:[1-3]\\d?|7\\d)|3[2-8]\\d{1,2}|4[2-68]\\d{1,2}|5[1-4689]\\d{1,2})\\d{5}|5[0568]\\d{6}", "\\d{6,10}", , , "50123456"], [, , "(?:8(?:[05689]\\d|3[01])|9[013-9]\\d)\\d{5}", "\\d{8}", , , "88123456", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "7[05-8]\\d{6}", "\\d{8}", , , "75123456", , , [8]], "MN", 976, "001", "0", , , "0", , , , [[, "([12]\\d)(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], [, "([12]2\\d)(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], [, "([12]\\d{3})(\\d{5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)2"], "0$1"], [, "(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"], "$1"], [, "([12]\\d{4})(\\d{4,5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)[4-9]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MO: [, [, , "[268]\\d{7}", "\\d{8}", , , , , , [8]], [, , "(?:28[2-57-9]|8[2-57-9]\\d)\\d{5}", "\\d{8}", , , "28212345"], [, , "6(?:[2356]\\d|8[158])\\d{5}", "\\d{8}", , , "66123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "MO", 853, "00", , , , , , , , [[, "([268]\\d{3})(\\d{4})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MP: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[589]|8[3-9]8|989)\\d{4}", "\\d{7}(?:\\d{3})?", , , "6702345678"], [, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[589]|8[3-9]8|989)\\d{4}", "\\d{7}(?:\\d{3})?", , , "6702345678"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "MP", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA", , , , , , [-1]], , "670", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MQ: [, [, , "[56]\\d{8}", "\\d{9}", , , , , , [9]], [, , "596(?:0[2-5]|[12]0|3[05-9]|4[024-8]|[5-7]\\d|89|9[4-8])\\d{4}", "\\d{9}", , , "596301234"], [, , "696(?:[0-479]\\d|5[013]|8[0-689])\\d{4}", "\\d{9}", , , "696201234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "MQ", 596, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MR: [, [, , "[2-48]\\d{7}", "\\d{8}", , , , , , [8]], [, , "25[08]\\d{5}|35\\d{6}|45[1-7]\\d{5}", "\\d{8}", , , "35123456"], [, , "[234][0-46-9]\\d{6}", "\\d{8}", , , "22123456"], [, , "800\\d{5}", "\\d{8}", , , "80012345"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "MR", 222, "00", , , , , , , , [[, "([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MS: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "664491\\d{4}", "\\d{7}(?:\\d{3})?", , , "6644912345"], [, , "66449[2-6]\\d{4}", "\\d{10}", , , "6644923456"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "MS", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "664", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MT: [, [, , "[2357-9]\\d{7}", "\\d{8}", , , , , , [8]], [, , "2(?:0(?:1[0-6]|3[1-4]|[69]\\d)|[1-357]\\d{2})\\d{4}", "\\d{8}", , , "21001234"], [, , "(?:7(?:210|[79]\\d{2})|9(?:2(?:1[01]|31)|696|8(?:1[1-3]|89|97)|9\\d{2}))\\d{4}", "\\d{8}", , , "96961234"], [, , "800[3467]\\d{4}", "\\d{8}", , , "80071234"], [, , "5(?:0(?:0(?:37|43)|6\\d{2}|70\\d|9[0168]\\d)|[12]\\d0[1-5])\\d{3}", "\\d{8}", , , "50037123"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "3550\\d{4}", "\\d{8}", , , "35501234"], "MT", 356, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2"]], , [, , "7117\\d{4}", "\\d{8}", , , "71171234"], , , [, , "NA", "NA", , , , , , [-1]], [, , "501\\d{5}", "\\d{8}", , , "50112345"], , , [, , "NA", "NA", , , , , , [-1]]],
        MU: [, [, , "[2-9]\\d{6,7}", "\\d{7,8}", , , , , , [7, 8]], [, , "(?:2(?:[03478]\\d|1[0-7]|6[1-69])|4(?:[013568]\\d|2[4-7])|5(?:44\\d|471)|6\\d{2}|8(?:14|3[129]))\\d{4}", "\\d{7,8}", , , "2012345"], [, , "5(?:2[59]\\d|4(?:2[1-389]|4\\d|7[1-9]|9\\d)|7\\d{2}|8(?:[0-25689]\\d|7[15-8])|9[0-8]\\d)\\d{4}", "\\d{8}", , , "52512345", , , [8]], [, , "80[012]\\d{4}", "\\d{7}", , , "8001234", , , [7]], [, , "30\\d{5}", "\\d{7}", , , "3012345", , , [7]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "3(?:20|9\\d)\\d{4}", "\\d{7}", , , "3201234", , , [7]], "MU", 230, "0(?:0|[2-7]0|33)", , , , , , "020", , [[, "([2-46-9]\\d{2})(\\d{4})", "$1 $2", ["[2-46-9]"]], [, "(5\\d{3})(\\d{4})", "$1 $2", ["5"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MV: [, [, , "[3467]\\d{6}|9(?:00\\d{7}|\\d{6})", "\\d{7,10}", , , , , , [7, 10]], [, , "(?:3(?:0[01]|3[0-59])|6(?:[567][02468]|8[024689]|90))\\d{4}", "\\d{7}", , , "6701234", , , [7]], [, , "(?:46[46]|7[3-9]\\d|9[15-9]\\d)\\d{4}", "\\d{7}", , , "7712345", , , [7]], [, , "NA", "NA", , , , , , [-1]], [, , "900\\d{7}", "\\d{10}", , , "9001234567", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "MV", 960, "0(?:0|19)", , , , , , "00", , [[, "(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9(?:[1-9]|0[1-9])"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["900"]]], , [, , "781\\d{4}", "\\d{7}", , , "7812345", , , [7]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MW: [, [, , "(?:1(?:\\d{2})?|[2789]\\d{2})\\d{6}", "\\d{7,9}", , , , , , [7, 9]], [, , "(?:1[2-9]|21\\d{2})\\d{5}", "\\d{7,9}", , , "1234567"], [, , "(?:111|77\\d|88\\d|99\\d)\\d{6}", "\\d{9}", , , "991234567", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "MW", 265, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], [, "(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1789]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MX: [, [, , "[1-9]\\d{9,10}", "\\d{7,11}", , , , , , [10, 11], [7, 8]], [, , "(?:33|55|81)\\d{8}|(?:2(?:0[01]|2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[234][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}", "\\d{7,10}", , , "2221234567", , , [10]], [, , "1(?:(?:33|55|81)\\d{8}|(?:2(?:2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7})", "\\d{11}", , , "12221234567", , , [11]], [, , "8(?:00|88)\\d{7}", "\\d{10}", , , "8001234567", , , [10]], [, , "900\\d{7}", "\\d{10}", , , "9001234567", , , [10]], [, , "300\\d{7}", "\\d{10}", , , "3001234567", , , [10]], [, , "500\\d{7}", "\\d{10}", , , "5001234567", , , [10]], [, , "NA", "NA", , , , , , [-1]], "MX", 52, "0[09]", "01", , , "0[12]|04[45](\\d{10})", "1$1", , , [[, "([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81"], "01 $1", , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"], "01 $1", , 1], [, "(1)([358]\\d)(\\d{4})(\\d{4})", "044 $2 $3 $4", ["1(?:33|55|81)"], "$1", , 1], [, "(1)(\\d{3})(\\d{3})(\\d{4})", "044 $2 $3 $4", ["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"], "$1", , 1]], [[, "([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81"], "01 $1", , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"], "01 $1", , 1], [, "(1)([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3 $4", ["1(?:33|55|81)"]], [, "(1)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"]]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        MY: [, [, , "[13-9]\\d{7,9}", "\\d{6,10}", , , , , , [8, 9, 10], [6, 7]], [, , "(?:3[2-9]\\d|[4-9][2-9])\\d{6}", "\\d{6,9}", , , "323456789", , , [8, 9]], [, , "1(?:1[1-5]\\d{2}|[02-4679][2-9]\\d|59\\d{2}|8(?:1[23]|[2-9]\\d))\\d{5}", "\\d{9,10}", , , "123456789", , , [9, 10]], [, , "1[378]00\\d{6}", "\\d{10}", , , "1300123456", , , [10]], [, , "1600\\d{6}", "\\d{10}", , , "1600123456", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "154\\d{7}", "\\d{10}", , , "1541234567", , , [10]], "MY", 60, "00", "0", , , "0", , , , [[, "([4-79])(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], [, "(3)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], [, "([18]\\d)(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1[02-46-9][1-9]|8"], "0$1"], [, "(1)([36-8]00)(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]0"]], [, "(11)(\\d{4})(\\d{4})", "$1-$2 $3", ["11"], "0$1"], [, "(15[49])(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        MZ: [, [, , "[28]\\d{7,8}", "\\d{8,9}", , , , , , [8, 9]], [, , "2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", "\\d{8}", , , "21123456", , , [8]], [, , "8[23467]\\d{7}", "\\d{9}", , , "821234567", , , [9]], [, , "800\\d{6}", "\\d{9}", , , "800123456", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "MZ", 258, "00", , , , , , , , [[, "([28]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]], [, "(80\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        NA: [, [, , "[68]\\d{7,8}", "\\d{8,9}", , , , , , [8, 9]], [, , "6(?:1(?:17|2(?:[0189]\\d|[2-6]|7\\d?)|3(?:[01378]|2\\d)|4(?:[024]|10?|3[15]?)|69|7[014])|2(?:17|5(?:[0-36-8]|4\\d?)|69|70)|3(?:17|2(?:[0237]\\d?|[14-689])|34|6[289]|7[01]|81)|4(?:17|2(?:[012]|7\\d?)|4(?:[06]|1\\d?)|5(?:[01357]|[25]\\d?)|69|7[01])|5(?:17|2(?:[0459]|[23678]\\d?)|69|7[01])|6(?:17|2(?:5|6\\d?)|38|42|69|7[01])|7(?:17|2(?:[569]|[234]\\d?)|3(?:0\\d?|[13])|69|7[01]))\\d{4}", "\\d{8,9}", , , "61221234"], [, , "(?:60|8[125])\\d{7}", "\\d{9}", , , "811234567", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "8701\\d{5}", "\\d{9}", , , "870123456", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "8(?:3\\d{2}|86)\\d{5}", "\\d{8,9}", , , "88612345"], "NA", 264, "00", "0", , , "0", , , , [[, "(8\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["8[1235]"], "0$1"], [, "(6\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], [, "(88)(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], [, "(870)(\\d{3})(\\d{3})", "$1 $2 $3", ["870"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        NC: [, [, , "[2-57-9]\\d{5}", "\\d{6}", , , , , , [6]], [, , "(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}", "\\d{6}", , , "201234"], [, , "(?:5[0-4]|[79]\\d|8[0-79])\\d{4}", "\\d{6}", , , "751234"], [, , "NA", "NA", , , , , , [-1]], [, , "36\\d{4}", "\\d{6}", , , "366711"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "NC", 687, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-46-9]|5[0-4]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        NE: [, [, , "[0289]\\d{7}", "\\d{8}", , , , , , [8]], [, , "2(?:0(?:20|3[1-7]|4[134]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}", "\\d{8}", , , "20201234"], [, , "(?:8[089]|9\\d)\\d{6}", "\\d{8}", , , "93123456"], [, , "08\\d{6}", "\\d{8}", , , "08123456"], [, , "09\\d{6}", "\\d{8}", , , "09123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "NE", 227, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[289]|09"]], [, "(08)(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        NF: [, [, , "[13]\\d{5}", "\\d{5,6}", , , , , , [6], [5]], [, , "(?:1(?:06|17|28|39)|3[012]\\d)\\d{3}", "\\d{5,6}", , , "106609"], [, , "3[58]\\d{4}", "\\d{5,6}", , , "381234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "NF", 672, "00", , , , , , , , [[, "(\\d{2})(\\d{4})", "$1 $2", ["1"]], [, "(\\d)(\\d{5})", "$1 $2", ["3"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        NG: [, [, , "[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}", "\\d{5,14}", , , , , , [7, 8, 10, 11, 12, 13, 14], [5, 6]], [, , "[12]\\d{6,7}|9(?:0[3-9]|[1-9]\\d)\\d{5}|(?:3\\d|4[023568]|5[02368]|6[02-469]|7[4-69]|8[2-9])\\d{6}|(?:4[47]|5[14579]|6[1578]|7[0-357])\\d{5,6}|(?:78|41)\\d{5}", "\\d{5,8}", , , "12345678", , , [7, 8]], [, , "(?:1(?:7[34]\\d|8(?:04|[124579]\\d|8[0-3])|95\\d)|287[0-7]|3(?:18[1-8]|88[0-7]|9(?:8[5-9]|6[1-5]))|4(?:28[0-2]|6(?:7[1-9]|8[02-47])|88[0-2])|5(?:2(?:7[7-9]|8\\d)|38[1-79]|48[0-7]|68[4-7])|6(?:2(?:7[7-9]|8\\d)|4(?:3[7-9]|[68][129]|7[04-69]|9[1-8])|58[0-2]|98[7-9])|7(?:38[0-7]|69[1-8]|78[2-4])|8(?:28[3-9]|38[0-2]|4(?:2[12]|3[147-9]|5[346]|7[4-9]|8[014-689]|90)|58[1-8]|78[2-9]|88[5-7])|98[07]\\d)\\d{4}|(?:70[1-689]\\d|8(?:0(?:1[01]|[2-9]\\d)|1(?:[0-8]\\d|9[01]))|90[2357-9]\\d)\\d{6}", "\\d{8,10}", , , "8021234567", , , [8, 10]], [, , "800\\d{7,11}", "\\d{10,14}", , , "80017591759", , , [10, 11, 12, 13, 14]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "NG", 234, "009", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["70|8[01]|90[2357-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-6]|7(?:[1-79]|0[1-9])|8[2-9]"], "0$1"], [, "([78]00)(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]00"], "0$1"], [, "([78]00)(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]00"], "0$1"], [, "(78)(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "700\\d{7,11}", "\\d{10,14}", , , "7001234567", , , [10, 11, 12, 13, 14]], , , [, , "NA", "NA", , , , , , [-1]]],
        NI: [, [, , "[12578]\\d{7}", "\\d{8}", , , , , , [8]], [, , "2\\d{7}", "\\d{8}", , , "21234567"], [, , "5(?:5[0-7]\\d{5}|[78]\\d{6})|7[5-8]\\d{6}|8\\d{7}", "\\d{8}", , , "81234567"], [, , "1800\\d{4}", "\\d{8}", , , "18001234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "NI", 505, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        NL: [, [, , "1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}", "\\d{5,10}", , , , , , [5, 6, 7, 8, 9, 10]], [, , "(?:1[0135-8]|2[02-69]|3[0-68]|4[0135-9]|[57]\\d|8[478])\\d{7}", "\\d{9}", , , "101234567", , , [9]], [, , "6[1-58]\\d{7}", "\\d{9}", , , "612345678", , , [9]], [, , "800\\d{4,7}", "\\d{7,10}", , , "8001234", , , [7, 8, 9, 10]], [, , "90[069]\\d{4,7}", "\\d{7,10}", , , "9061234", , , [7, 8, 9, 10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "(?:6760|85\\d{2})\\d{5}", "\\d{9}", , , "851234567", , , [9]], "NL", 31, "00", "0", , , "0", , , , [[, "([1-578]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"], "0$1"], [, "([1-5]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], [, "(6)(\\d{8})", "$1 $2", ["6[0-57-9]"], "0$1"], [, "(66)(\\d{7})", "$1 $2", ["66"], "0$1"], [, "(14)(\\d{3,4})", "$1 $2", ["14"], "$1"], [, "([89]0\\d)(\\d{4,7})", "$1 $2", ["80|9"], "0$1"]], , [, , "66\\d{7}", "\\d{9}", , , "662345678", , , [9]], , , [, , "14\\d{3,4}", "\\d{5,6}", , , , , , [5, 6]], [, , "140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])", "\\d{5,6}", , , "14020", , , [5, 6]], , , [, , "NA", "NA", , , , , , [-1]]],
        NO: [, [, , "0\\d{4}|[2-9]\\d{7}", "\\d{5}(?:\\d{3})?", , , , , , [5, 8]], [, , "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", "\\d{8}", , , "21234567", , , [8]], [, , "(?:4[015-8]|5[89]|87|9\\d)\\d{6}", "\\d{8}", , , "40612345", , , [8]], [, , "80[01]\\d{5}", "\\d{8}", , , "80012345", , , [8]], [, , "82[09]\\d{5}", "\\d{8}", , , "82012345", , , [8]], [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", "\\d{8}", , , "81021234", , , [8]], [, , "880\\d{5}", "\\d{8}", , , "88012345", , , [8]], [, , "85[0-5]\\d{5}", "\\d{8}", , , "85012345", , , [8]], "NO", 47, "00", , , , , , , , [[, "([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]], [, "([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], , [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]], [, , "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", "\\d{5}(?:\\d{3})?", , , "01234"], 1, , [, , "81[23]\\d{5}", "\\d{8}", , , "81212345", , , [8]]],
        NP: [, [, , "[1-8]\\d{7}|9(?:[1-69]\\d{6,8}|7[2-6]\\d{5,7}|8\\d{8})", "\\d{6,10}", , , , , , [8, 10], [6, 7]], [, , "(?:1[0-6]\\d|2[13-79][2-6]|3[135-8][2-6]|4[146-9][2-6]|5[135-7][2-6]|6[13-9][2-6]|7[15-9][2-6]|8[1-46-9][2-6]|9[1-79][2-6])\\d{5}", "\\d{6,8}", , , "14567890", , , [8]], [, , "9(?:6[013]|7[245]|8[0-24-6])\\d{7}", "\\d{10}", , , "9841234567", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "NP", 977, "00", "0", , , "0", , , , [[, "(1)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], [, "(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-69]|7[15-9])"], "0$1"], [, "(9\\d{2})(\\d{7})", "$1-$2", ["9(?:6[013]|7[245]|8)"], "$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        NR: [, [, , "[458]\\d{6}", "\\d{7}", , , , , , [7]], [, , "(?:444|888)\\d{4}", "\\d{7}", , , "4441234"], [, , "55[5-9]\\d{4}", "\\d{7}", , , "5551234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "NR", 674, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        NU: [, [, , "[1-5]\\d{3}", "\\d{4}", , , , , , [4]], [, , "[34]\\d{3}", "\\d{4}", , , "4002"], [, , "[125]\\d{3}", "\\d{4}", , , "1234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "NU", 683, "00", , , , , , , , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        NZ: [, [, , "6[235-9]\\d{6}|[2-57-9]\\d{7,10}", "\\d{7,11}", , , , , , [8, 9, 10, 11], [7]], [, , "(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}|24099\\d{3}", "\\d{7,8}", , , "32345678", , , [8]], [, , "2(?:[028]\\d{7,8}|1(?:[03]\\d{5,7}|[12457]\\d{5,6}|[689]\\d{5})|[79]\\d{7})", "\\d{8,10}", , , "211234567", , , [8, 9, 10]], [, , "508\\d{6,7}|80\\d{6,8}", "\\d{8,10}", , , "800123456", , , [8, 9, 10]], [, , "90\\d{7,9}", "\\d{9,11}", , , "900123456", , , [9, 10, 11]], [, , "NA", "NA", , , , , , [-1]], [, , "70\\d{7}", "\\d{9}", , , "701234567", , , [9]], [, , "NA", "NA", , , , , , [-1]], "NZ", 64, "0(?:0|161)", "0", , , "0", , "00", , [[, "([34679])(\\d{3})(\\d{4})", "$1-$2 $3", ["[346]|7[2-57-9]|9[1-9]"], "0$1"], [, "(24099)(\\d{3})", "$1 $2", ["240", "2409", "24099"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["21"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:1[1-9]|[69]|7[0-35-9])|70|86"], "0$1"], [, "(2\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|5|[89]0"], "0$1"]], , [, , "[28]6\\d{6,7}", "\\d{8,9}", , , "26123456", , , [8, 9]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        OM: [, [, , "(?:5|[279]\\d)\\d{6}|800\\d{5,6}", "\\d{7,9}", , , , , , [7, 8, 9]], [, , "2[2-6]\\d{6}", "\\d{8}", , , "23123456", , , [8]], [, , "7[19]\\d{6}|9(?:0[1-9]|[1-9]\\d)\\d{5}", "\\d{8}", , , "92123456", , , [8]], [, , "8007\\d{4,5}|500\\d{4}", "\\d{7,9}", , , "80071234"], [, , "900\\d{5}", "\\d{8}", , , "90012345", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "OM", 968, "00", , , , , , , , [[, "(2\\d)(\\d{6})", "$1 $2", ["2"]], [, "([79]\\d{3})(\\d{4})", "$1 $2", ["[79]"]], [, "([58]00)(\\d{4,6})", "$1 $2", ["[58]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        PA: [, [, , "[1-9]\\d{6,7}", "\\d{7,8}", , , , , , [7, 8]], [, , "(?:1(?:0[0-8]|1[49]|2[37]|3[0137]|4[147]|5[05]|6[58]|7[0167]|8[58]|9[139])|2(?:[0235679]\\d|1[0-7]|4[04-9]|8[028])|3(?:[09]\\d|1[014-7]|2[0-3]|3[03]|4[03-57]|55|6[068]|7[06-8]|8[06-9])|4(?:3[013-69]|4\\d|7[0-589])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-267]|3[06]|[469]0|5[06-9]|7[0-24-79]|8[7-9])|8(?:09|[34]\\d|5[0134]|8[02])|9(?:0[6-9]|1[016-8]|2[036-8]|3[3679]|40|5[0489]|6[06-9]|7[046-9]|8[36-8]|9[1-9]))\\d{4}", "\\d{7}", , , "2001234", , , [7]], [, , "(?:1[16]1|21[89]|8(?:1[01]|7[23]))\\d{4}|6(?:[024-9]\\d|1[0-5]|3[0-24-9])\\d{5}", "\\d{7,8}", , , "60012345"], [, , "80[09]\\d{4}", "\\d{7}", , , "8001234", , , [7]], [, , "(?:779|8(?:55|60|7[78])|9(?:00|81))\\d{4}", "\\d{7}", , , "8601234", , , [7]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "PA", 507, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["6"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        PE: [, [, , "[14-9]\\d{7,8}", "\\d{6,9}", , , , , , [8, 9], [6, 7]], [, , "(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}", "\\d{6,8}", , , "11234567", , , [8]], [, , "9\\d{8}", "\\d{9}", , , "912345678", , , [9]], [, , "800\\d{5}", "\\d{8}", , , "80012345", , , [8]], [, , "805\\d{5}", "\\d{8}", , , "80512345", , , [8]], [, , "801\\d{5}", "\\d{8}", , , "80112345", , , [8]], [, , "80[24]\\d{5}", "\\d{8}", , , "80212345", , , [8]], [, , "NA", "NA", , , , , , [-1]], "PE", 51, "19(?:1[124]|77|90)00", "0", " Anexo ", , "0", , , , [[, "(1)(\\d{7})", "$1 $2", ["1"], "(0$1)"], [, "([4-8]\\d)(\\d{6})", "$1 $2", ["[4-7]|8[2-4]"], "(0$1)"], [, "(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], [, "(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        PF: [, [, , "4\\d{5,7}|8\\d{7}", "\\d{6}(?:\\d{2})?", , , , , , [6, 8]], [, , "4(?:[09][45689]\\d|4)\\d{4}", "\\d{6}(?:\\d{2})?", , , "40412345"], [, , "8[79]\\d{6}", "\\d{8}", , , "87123456", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "PF", 689, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[09]|8[79]"]], [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "44\\d{4}", "\\d{6}", , , "441234", , , [6]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        PG: [, [, , "[1-9]\\d{6,7}", "\\d{7,8}", , , , , , [7, 8]], [, , "(?:3[0-2]\\d|4[25]\\d|5[34]\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9]|9[78]\\d)\\d{4}", "\\d{7}", , , "3123456", , , [7]], [, , "(?:20150|68\\d{2}|7(?:[0-689]\\d|75)\\d{2})\\d{3}", "\\d{7,8}", , , "6812345"], [, , "180\\d{4}", "\\d{7}", , , "1801234", , , [7]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "275\\d{4}", "\\d{7}", , , "2751234", , , [7]], "PG", 675, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[13-689]|27"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["20|7"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        PH: [, [, , "2\\d{5,7}|[3-9]\\d{7,9}|1800\\d{7,9}", "\\d{5,13}", , , , , , [6, 8, 9, 10, 11, 12, 13], [5, 7]], [, , "2\\d{5}(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578]|8[2-8])\\d{7}|88(?:22\\d{6}|42\\d{4})", "\\d{5,10}", , , "21234567", , , [6, 8, 9, 10]], [, , "(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[236-9]|50|7[34-79]|89|9[4-9]))\\d{7}", "\\d{10}", , , "9051234567", , , [10]], [, , "1800\\d{7,9}", "\\d{11,13}", , , "180012345678", , , [11, 12, 13]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "PH", 63, "00", "0", , , "0", , , , [[, "(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], [, "(2)(\\d{5})", "$1 $2", ["2"], "(0$1)"], [, "(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], [, "(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], [, "([3-8]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-8]"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["81|9"], "0$1"], [, "(1800)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], [, "(1800)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        PK: [, [, , "1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,9}|2\\d(?:111\\d{6}|\\d{3,7}))", "\\d{6,12}", , , , , , [8, 9, 10, 11, 12], [6, 7]], [, , "(?:21|42)[2-9]\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}|58[126]\\d{7}", "\\d{6,10}", , , "2123456789", , , [9, 10]], [, , "3(?:0\\d|1[0-6]|2[0-5]|3[0-7]|4[0-8]|55|64)\\d{7}", "\\d{10}", , , "3012345678", , , [10]], [, , "800\\d{5}", "\\d{8}", , , "80012345", , , [8]], [, , "900\\d{5}", "\\d{8}", , , "90012345", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "122\\d{6}", "\\d{9}", , , "122044444", , , [9]], [, , "NA", "NA", , , , , , [-1]], "PK", 92, "00", "0", , , "0", , , , [[, "(\\d{2})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"], "(0$1)"], [, "(\\d{3})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[349]|45|54|60|72|8[2-5]|9[2-9]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"], "(0$1)"], [, "(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], [, "(\\d{3})(\\d{6,7})", "$1 $2", ["2[349]|45|54|60|72|8[2-5]|9[2-9]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d[2-9]"], "(0$1)"], [, "(3\\d{2})(\\d{7})", "$1 $2", ["3"], "0$1"], [, "([15]\\d{3})(\\d{5,6})", "$1 $2", ["58[12]|1"], "(0$1)"], [, "(586\\d{2})(\\d{5})", "$1 $2", ["586"], "(0$1)"], [, "([89]00)(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]00"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:[1-8]|0[468])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}", "\\d{11,12}", , , "21111825888", , , [11, 12]], , , [, , "NA", "NA", , , , , , [-1]]],
        PL: [, [, , "[12]\\d{6,8}|[3-57-9]\\d{8}|6\\d{5,8}", "\\d{6,9}", , , , , , [6, 7, 8, 9]], [, , "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])\\d{7}|[12]2\\d{5}", "\\d{6,9}", , , "123456789", , , [7, 9]], [, , "(?:5[0137]|6[069]|7[2389]|88)\\d{7}", "\\d{9}", , , "512345678", , , [9]], [, , "800\\d{6}", "\\d{9}", , , "800123456", , , [9]], [, , "70\\d{7}", "\\d{9}", , , "701234567", , , [9]], [, , "801\\d{6}", "\\d{9}", , , "801234567", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "39\\d{7}", "\\d{9}", , , "391234567", , , [9]], "PL", 48, "00", , , , , , , , [[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]], [, "(\\d{2})(\\d{1})(\\d{4})", "$1 $2 $3", ["[12]2"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["26|39|5[0137]|6[0469]|7[02389]|8[08]"]], [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], [, "(\\d{3})(\\d{3})", "$1 $2", ["64"]]], , [, , "64\\d{4,7}", "\\d{6,9}", , , "641234567"], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        PM: [, [, , "[45]\\d{5}", "\\d{6}", , , , , , [6]], [, , "41\\d{4}", "\\d{6}", , , "411234"], [, , "55\\d{4}", "\\d{6}", , , "551234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "PM", 508, "00", "0", , , "0", , , , [[, "([45]\\d)(\\d{2})(\\d{2})", "$1 $2 $3", , "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        PR: [, [, , "[5789]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "(?:787|939)[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "7872345678"], [, , "(?:787|939)[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "7872345678"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "PR", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA", , , , , , [-1]], , "787|939", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        PS: [, [, , "[24589]\\d{7,8}|1(?:[78]\\d{8}|[49]\\d{2,3})", "\\d{4,10}", , , , , , [4, 5, 8, 9, 10], [7]], [, , "(?:22[234789]|42[45]|82[01458]|92[369])\\d{5}", "\\d{7,8}", , , "22234567", , , [8]], [, , "5[69]\\d{7}", "\\d{9}", , , "599123456", , , [9]], [, , "1800\\d{6}", "\\d{10}", , , "1800123456", , , [10]], [, , "1(?:4|9\\d)\\d{2}", "\\d{4,5}", , , "19123", , , [4, 5]], [, , "1700\\d{6}", "\\d{10}", , , "1700123456", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "PS", 970, "00", "0", , , "0", , , , [[, "([2489])(2\\d{2})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], [, "(5[69]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], [, "(1[78]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[78]"], "$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        PT: [, [, , "[2-46-9]\\d{8}", "\\d{9}", , , , , , [9]], [, , "2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}", "\\d{9}", , , "212345678"], [, , "9(?:[1236]\\d{2}|480)\\d{5}", "\\d{9}", , , "912345678"], [, , "80[02]\\d{6}", "\\d{9}", , , "800123456"], [, , "6(?:0[178]|4[68])\\d{6}|76(?:0[1-57]|1[2-47]|2[237])\\d{5}", "\\d{9}", , , "760123456"], [, , "80(?:8\\d|9[1579])\\d{5}", "\\d{9}", , , "808123456"], [, , "884[0-4689]\\d{5}", "\\d{9}", , , "884123456"], [, , "30\\d{7}", "\\d{9}", , , "301234567"], "PT", 351, "00", , , , , , , , [[, "(2\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], [, "([2-46-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[3-9]|[346-9]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "7(?:0(?:7\\d|8[17]))\\d{5}", "\\d{9}", , , "707123456"], , , [, , "600\\d{6}", "\\d{9}", , , "600110000"]],
        PW: [, [, , "[2-8]\\d{6}", "\\d{7}", , , , , , [7]], [, , "2552255|(?:277|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76))\\d{4}", "\\d{7}", , , "2771234"], [, , "(?:6[234689]0|77[45789])\\d{4}", "\\d{7}", , , "6201234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "PW", 680, "01[12]", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        PY: [, [, , "5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}", "\\d{5,9}", , , , , , [6, 7, 8, 9], [5]], [, , "(?:[26]1|3[289]|4[124678]|7[123]|8[1236])\\d{5,7}|(?:2(?:2[4568]|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51)|4(?:18|2[45]|3[12]|5[13]|64|71|9[1-47])|5(?:[1-4]\\d|5[0234])|6(?:3[1-3]|44|7[1-4678])|7(?:17|4[0-4]|6[1-578]|75|8[0-8])|858)\\d{5,6}", "\\d{5,9}", , , "212345678", , , [7, 8, 9]], [, , "9(?:6[12]|[78][1-6]|9[1-5])\\d{6}", "\\d{9}", , , "961456789", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "8700[0-4]\\d{4}", "\\d{9}", , , "870012345", , , [9]], "PY", 595, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{5})", "$1 $2", ["(?:[26]1|3[289]|4[124678]|7[123]|8[1236])"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["(?:[26]1|3[289]|4[124678]|7[123]|8[1236])"], "(0$1)"], [, "(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], [, "(\\d{3})(\\d{6})", "$1 $2", ["9[1-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8700"]], [, "(\\d{3})(\\d{4,5})", "$1 $2", ["[2-8][1-9]"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8][1-9]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "[2-9]0\\d{4,7}", "\\d{6,9}", , , "201234567"], , , [, , "NA", "NA", , , , , , [-1]]],
        QA: [, [, , "[2-8]\\d{6,7}", "\\d{7,8}", , , , , , [7, 8]], [, , "4[04]\\d{6}", "\\d{8}", , , "44123456", , , [8]], [, , "[3567]\\d{7}", "\\d{8}", , , "33123456", , , [8]], [, , "800\\d{4}", "\\d{7}", , , "8001234", , , [7]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "QA", 974, "00", , , , , , , , [[, "([28]\\d{2})(\\d{4})", "$1 $2", ["[28]"]], [, "([3-7]\\d{3})(\\d{4})", "$1 $2", ["[3-7]"]]], , [, , "2(?:[12]\\d|61)\\d{4}", "\\d{7}", , , "2123456", , , [7]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        RE: [, [, , "[268]\\d{8}", "\\d{9}", , , , , , [9]], [, , "262\\d{6}", "\\d{9}", , , "262161234"], [, , "6(?:9[23]|47)\\d{6}", "\\d{9}", , , "692123456"], [, , "80\\d{7}", "\\d{9}", , , "801234567"], [, , "89[1-37-9]\\d{6}", "\\d{9}", , , "891123456"], [, , "8(?:1[019]|2[0156]|84|90)\\d{6}", "\\d{9}", , , "810123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "RE", 262, "00", "0", , , "0", , , , [[, "([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "0$1"]], , [, , "NA", "NA", , , , , , [-1]], 1, "262|6[49]|8", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        RO: [, [, , "2\\d{5,8}|[37-9]\\d{8}", "\\d{6,9}", , , , , , [6, 9]], [, , "2(?:1(?:\\d{7}|9\\d{3})|[3-6](?:\\d{7}|\\d9\\d{2}))|3[13-6]\\d{7}", "\\d{6,9}", , , "211234567"], [, , "7(?:[0-8]\\d{2}|99\\d)\\d{5}", "\\d{9}", , , "712345678", , , [9]], [, , "800\\d{6}", "\\d{9}", , , "800123456", , , [9]], [, , "90[036]\\d{6}", "\\d{9}", , , "900123456", , , [9]], [, , "801\\d{6}", "\\d{9}", , , "801123456", , , [9]], [, , "802\\d{6}", "\\d{9}", , , "802123456", , , [9]], [, , "NA", "NA", , , , , , [-1]], "RO", 40, "00", "0", " int ", , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], [, "(21)(\\d{4})", "$1 $2", ["21"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23][3-7]|[7-9]"], "0$1"], [, "(2\\d{2})(\\d{3})", "$1 $2", ["2[3-6]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "37\\d{7}", "\\d{9}", , , "372123456", , , [9]], , , [, , "NA", "NA", , , , , , [-1]]],
        RS: [, [, , "[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})", "\\d{5,12}", , , , , , [6, 7, 8, 9, 10, 11, 12], [5]], [, , "(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:[2-9]\\d|0[2-9])))\\d{3,8}", "\\d{5,12}", , , "10234567", , , [7, 8, 9, 10, 11, 12]], [, , "6(?:[0-689]|7\\d)\\d{6,7}", "\\d{8,10}", , , "601234567", , , [8, 9, 10]], [, , "800\\d{3,9}", "\\d{6,12}", , , "80012345"], [, , "(?:90[0169]|78\\d)\\d{3,7}", "\\d{6,12}", , , "90012345"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "RS", 381, "00", "0", , , "0", , , , [[, "([23]\\d{2})(\\d{4,9})", "$1 $2", ["(?:2[389]|39)0"], "0$1"], [, "([1-3]\\d)(\\d{5,10})", "$1 $2", ["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"], "0$1"], [, "(6\\d)(\\d{6,8})", "$1 $2", ["6"], "0$1"], [, "([89]\\d{2})(\\d{3,9})", "$1 $2", ["[89]"], "0$1"], [, "(7[26])(\\d{4,9})", "$1 $2", ["7[26]"], "0$1"], [, "(7[08]\\d)(\\d{4,9})", "$1 $2", ["7[08]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "7[06]\\d{4,10}", "\\d{6,12}", , , "700123456"], , , [, , "NA", "NA", , , , , , [-1]]],
        RU: [, [, , "[3489]\\d{9}", "\\d{10}", , , , , , [10]], [, , "(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}", "\\d{10}", , , "3011234567"], [, , "9\\d{9}", "\\d{10}", , , "9123456789"], [, , "80[04]\\d{7}", "\\d{10}", , , "8001234567"], [, , "80[39]\\d{7}", "\\d{10}", , , "8091234567"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "RU", 7, "810", "8", , , "8", , "8~10", , [[, "(\\d{3})(\\d{2})(\\d{2})", "$1-$2-$3", ["[1-79]"], "$1", , 1], [, "([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[34689]"], "8 ($1)", , 1], [, "(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1]], [[, "([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[34689]"], "8 ($1)", , 1], [, "(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        RW: [, [, , "[027-9]\\d{7,8}", "\\d{8,9}", , , , , , [8, 9]], [, , "2[258]\\d{7}|06\\d{6}", "\\d{8,9}", , , "250123456"], [, , "7[238]\\d{7}", "\\d{9}", , , "720123456", , , [9]], [, , "800\\d{6}", "\\d{9}", , , "800123456", , , [9]], [, , "900\\d{6}", "\\d{9}", , , "900123456", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "RW", 250, "00", "0", , , "0", , , , [[, "(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "$1"], [, "([7-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"], [, "(0\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        SA: [, [, , "1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}", "\\d{7,10}", , , , , , [8, 9, 10], [7]], [, , "11\\d{7}|1?(?:2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", "\\d{7,9}", , , "112345678", , , [8, 9]], [, , "(?:5(?:[013-689]\\d|7[0-26-8])|811\\d)\\d{6}", "\\d{9,10}", , , "512345678", , , [9, 10]], [, , "800\\d{7}", "\\d{10}", , , "8001234567", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "92[05]\\d{6}", "\\d{9}", , , "920012345", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "SA", 966, "00", "0", , , "0", , , , [[, "([1-467])(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-467]"], "0$1"], [, "(1\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[1-467]"], "0$1"], [, "(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], [, "(92\\d{2})(\\d{5})", "$1 $2", ["92"], "$1"], [, "(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "$1"], [, "(811)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        SB: [, [, , "[1-9]\\d{4,6}", "\\d{5,7}", , , , , , [5, 7]], [, , "(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}", "\\d{5}", , , "40123", , , [5]], [, , "48\\d{3}|7(?:30|[46-8]\\d|5[025-9]|9[0-5])\\d{4}|8[4-9]\\d{5}|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8])\\d{4}", "\\d{5,7}", , , "7421234"], [, , "1[38]\\d{3}", "\\d{5}", , , "18123", , , [5]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "5[12]\\d{3}", "\\d{5}", , , "51123", , , [5]], "SB", 677, "0[01]", , , , , , , , [[, "(\\d{2})(\\d{5})", "$1 $2", ["[7-9]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        SC: [, [, , "[2468]\\d{5,6}", "\\d{6,7}", , , , , , [6, 7]], [, , "4[2-46]\\d{5}", "\\d{7}", , , "4217123", , , [7]], [, , "2[5-8]\\d{5}", "\\d{7}", , , "2510123", , , [7]], [, , "8000\\d{2}", "\\d{6}", , , "800000", , , [6]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "64\\d{5}", "\\d{7}", , , "6412345", , , [7]], "SC", 248, "0[0-2]", , , , , , "00", , [[, "(\\d{3})(\\d{3})", "$1 $2", ["8"]], [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        SD: [, [, , "[19]\\d{8}", "\\d{9}", , , , , , [9]], [, , "1(?:[125]\\d|8[3567])\\d{6}", "\\d{9}", , , "121231234"], [, , "9[0-3569]\\d{7}", "\\d{9}", , , "911231234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "SD", 249, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", , "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        SE: [, [, , "[1-35-9]\\d{5,11}|4\\d{6,8}", "\\d{6,12}", , , , , , [6, 7, 8, 9, 10, 12]], [, , "1(?:0[1-8]\\d{6}|[136]\\d{5,7}|(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)\\d{5,6})|2(?:[136]\\d{5,7}|(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])\\d{5,6})|3(?:[356]\\d{5,7}|(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])\\d{5,6})|4(?:[0246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])\\d{5,6}|6(?:[03]\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8\\d{6,8}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})", "\\d{7,9}", , , "8123456", , , [7, 8, 9]], [, , "7[02369]\\d{7}", "\\d{9}", , , "701234567", , , [9]], [, , "20\\d{4,7}", "\\d{6,9}", , , "20123456", , , [6, 7, 8, 9]], [, , "649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}", "\\d{7,10}", , , "9001234567", , , [7, 8, 9, 10]], [, , "77(?:0\\d{3}(?:\\d{3})?|[1-7]\\d{6})", "\\d{6}(?:\\d{3})?", , , "771234567", , , [6, 9]], [, , "75[1-8]\\d{6}", "\\d{9}", , , "751234567", , , [9]], [, , "NA", "NA", , , , , , [-1]], "SE", 46, "00", "0", , , "0", , , , [[, "(8)(\\d{2,3})(\\d{2,3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"], [, "([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"], "0$1"], [, "([1-469]\\d)(\\d{3})(\\d{2})", "$1-$2 $3", ["1[136]|2[136]|3[356]|4[0246]|6[03]|90"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], "0$1"], [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], "0$1"], [, "(7\\d)(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], "0$1"], [, "(77)(\\d{2})(\\d{2})", "$1-$2$3", ["7"], "0$1"], [, "(20)(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1"], [, "(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9[034]"], "0$1"], [, "(9[034]\\d)(\\d{4})", "$1-$2", ["9[034]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["25[245]|67[3-6]"], "0$1"]], [[, "(8)(\\d{2,3})(\\d{2,3})(\\d{2})", "$1 $2 $3 $4", ["8"]], [, "([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"]], [, "([1-469]\\d)(\\d{3})(\\d{2})", "$1 $2 $3", ["1[136]|2[136]|3[356]|4[0246]|6[03]|90"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]], [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]], [, "(7\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7"]], [, "(77)(\\d{2})(\\d{2})", "$1 $2 $3", ["7"]], [, "(20)(\\d{2,3})(\\d{2})", "$1 $2 $3", ["20"]], [, "(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["9[034]"]], [, "(9[034]\\d)(\\d{4})", "$1 $2", ["9[034]"]], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["25[245]|67[3-6]"]]], [, , "74[02-9]\\d{6}", "\\d{9}", , , "740123456", , , [9]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "(?:25[245]|67[3-6])\\d{9}", "\\d{12}", , , "254123456789", , , [12]]],
        SG: [, [, , "[36]\\d{7}|[17-9]\\d{7,10}", "\\d{8,11}", , , , , , [8, 10, 11]], [, , "6[1-9]\\d{6}", "\\d{8}", , , "61234567", , , [8]], [, , "(?:8[1-8]|9[0-8])\\d{6}", "\\d{8}", , , "81234567", , , [8]], [, , "1?800\\d{7}", "\\d{10,11}", , , "18001234567", , , [10, 11]], [, , "1900\\d{7}", "\\d{11}", , , "19001234567", , , [11]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "3[12]\\d{6}", "\\d{8}", , , "31234567", , , [8]], "SG", 65, "0[0-3]\\d", , , , , , , , [[, "([3689]\\d{3})(\\d{4})", "$1 $2", ["[369]|8[1-9]"]], [, "(1[89]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[89]"]], [, "(7000)(\\d{4})(\\d{3})", "$1 $2 $3", ["70"]], [, "(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "7000\\d{7}", "\\d{11}", , , "70001234567", , , [11]], , , [, , "NA", "NA", , , , , , [-1]]],
        SH: [, [, , "[256]\\d{4}", "\\d{4,5}", , , , , , [4, 5]], [, , "2(?:[0-57-9]\\d|6[4-9])\\d{2}", "\\d{5}", , , "22158"], [, , "[56]\\d{4}", "\\d{5}", , , , , , [5]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "262\\d{2}", "\\d{5}", , , , , , [5]], "SH", 290, "00", , , , , , , , , , [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        SI: [, [, , "[1-7]\\d{6,7}|[89]\\d{4,7}", "\\d{5,8}", , , , , , [5, 6, 7, 8]], [, , "(?:1\\d|[25][2-8]|3[24-8]|4[24-8]|7[3-8])\\d{6}", "\\d{7,8}", , , "11234567", , , [8]], [, , "(?:[37][01]|4[0139]|51|6[48])\\d{6}", "\\d{8}", , , "31234567", , , [8]], [, , "80\\d{4,6}", "\\d{6,8}", , , "80123456", , , [6, 7, 8]], [, , "90\\d{4,6}|89[1-3]\\d{2,5}", "\\d{5,8}", , , "90123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "(?:59|8[1-3])\\d{6}", "\\d{8}", , , "59012345", , , [8]], "SI", 386, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|3[24-8]|4[24-8]|5[2-8]|7[3-8]"], "(0$1)"], [, "([3-7]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], [, "([89][09])(\\d{3,6})", "$1 $2", ["[89][09]"], "0$1"], [, "([58]\\d{2})(\\d{5})", "$1 $2", ["59|8[1-3]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        SJ: [, [, , "0\\d{4}|[4789]\\d{7}", "\\d{5}(?:\\d{3})?", , , , , , [5, 8]], [, , "79\\d{6}", "\\d{8}", , , "79123456", , , [8]], [, , "(?:4[015-8]|5[89]|9\\d)\\d{6}", "\\d{8}", , , "41234567", , , [8]], [, , "80[01]\\d{5}", "\\d{8}", , , "80012345", , , [8]], [, , "82[09]\\d{5}", "\\d{8}", , , "82012345", , , [8]], [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", "\\d{8}", , , "81021234", , , [8]], [, , "880\\d{5}", "\\d{8}", , , "88012345", , , [8]], [, , "85[0-5]\\d{5}", "\\d{8}", , , "85012345", , , [8]], "SJ", 47, "00", , , , , , , , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", "\\d{5}(?:\\d{3})?", , , "01234"], 1, , [, , "81[23]\\d{5}", "\\d{8}", , , "81212345", , , [8]]],
        SK: [, [, , "(?:[2-68]\\d{5,8}|9\\d{6,8})", "\\d{6,9}", , , , , , [6, 7, 9]], [, , "2(?:16\\d{3,4}|\\d{8})|[3-5](?:[1-8]16\\d{2,3}|\\d{8})", "\\d{6,9}", , , "212345678"], [, , "9(?:0(?:[1-8]\\d|9[1-9])|(?:1[0-24-9]|4[04589]|50)\\d)\\d{5}", "\\d{9}", , , "912123456", , , [9]], [, , "800\\d{6}", "\\d{9}", , , "800123456", , , [9]], [, , "9(?:[78]\\d{7}|00\\d{6})", "\\d{9}", , , "900123456", , , [9]], [, , "8[5-9]\\d{7}", "\\d{9}", , , "850123456", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "6(?:02|5[0-4]|9[0-6])\\d{6}", "\\d{9}", , , "690123456", , , [9]], "SK", 421, "00", "0", , , "0", , , , [[, "(2)(16)(\\d{3,4})", "$1 $2 $3", ["216"], "0$1"], [, "([3-5]\\d)(16)(\\d{2,3})", "$1 $2 $3", ["[3-5]"], "0$1"], [, "(2)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], [, "([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"], [, "([689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], [, "(9090)(\\d{3})", "$1 $2", ["9090"], "0$1"]], , [, , "9090\\d{3}", "\\d{7}", , , "9090123", , , [7]], , , [, , "(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}|9090\\d{3}", "\\d{7,9}", , , "800123456", , , [7, 9]], [, , "96\\d{7}", "\\d{9}", , , "961234567", , , [9]], , , [, , "NA", "NA", , , , , , [-1]]],
        SL: [, [, , "[2-9]\\d{7}", "\\d{6,8}", , , , , , [8], [6]], [, , "[235]2[2-4][2-9]\\d{4}", "\\d{6,8}", , , "22221234"], [, , "(?:2[15]|3[03-5]|4[04]|5[05]|66|7[6-9]|88|99)\\d{6}", "\\d{6,8}", , , "25123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "SL", 232, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{6})", "$1 $2", , "(0$1)"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        SM: [, [, , "[05-7]\\d{7,9}", "\\d{6,10}", , , , , , [8, 10], [6]], [, , "0549(?:8[0157-9]|9\\d)\\d{4}", "\\d{6,10}", , , "0549886377", , , [10]], [, , "6[16]\\d{6}", "\\d{8}", , , "66661212", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "7[178]\\d{6}", "\\d{8}", , , "71123456", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "5[158]\\d{6}", "\\d{8}", , , "58001110", , , [8]], "SM", 378, "00", , , , "(?:0549)?([89]\\d{5})", "0549$1", , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], [, "(0549)(\\d{6})", "$1 $2", ["0"]], [, "(\\d{6})", "0549 $1", ["[89]"]]], [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], [, "(0549)(\\d{6})", "($1) $2", ["0"]], [, "(\\d{6})", "(0549) $1", ["[89]"]]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        SN: [, [, , "[3789]\\d{8}", "\\d{9}", , , , , , [9]], [, , "3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}", "\\d{9}", , , "301012345"], [, , "7(?:[06-8]\\d|21|90)\\d{6}", "\\d{9}", , , "701234567"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "88[4689]\\d{6}", "\\d{9}", , , "884123456"], [, , "81[02468]\\d{6}", "\\d{9}", , , "810123456"], [, , "NA", "NA", , , , , , [-1]], [, , "39[01]\\d{6}|3392\\d{5}|93330\\d{4}", "\\d{9}", , , "933301234"], "SN", 221, "00", , , , , , , , [[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        SO: [, [, , "[1-79]\\d{6,8}", "\\d{7,9}", , , , , , [7, 8, 9]], [, , "(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|59)\\d{5}", "\\d{7}", , , "4012345", , , [7]], [, , "(?:15\\d|2(?:4\\d|8)|6[1-35-9]?\\d{2}|7(?:[1-8]\\d|99?\\d)|9(?:0[67]|[2-9])\\d)\\d{5}", "\\d{7,9}", , , "71123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "SO", 252, "00", "0", , , "0", , , , [[, "(\\d)(\\d{6})", "$1 $2", ["2[0-79]|[13-5]"]], [, "(\\d)(\\d{7})", "$1 $2", ["24|[67]"]], [, "(\\d{2})(\\d{5,7})", "$1 $2", ["15|28|6[1-35-9]|799|9[2-9]"]], [, "(90\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["90"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        SR: [, [, , "[2-8]\\d{5,6}", "\\d{6,7}", , , , , , [6, 7]], [, , "(?:2[1-3]|3[0-7]|4\\d|5[2-58]|68\\d)\\d{4}", "\\d{6,7}", , , "211234"], [, , "(?:7[124-7]|8[1-9])\\d{5}", "\\d{7}", , , "7412345", , , [7]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:6\\d{4}|90[0-4]\\d{3})", "\\d{6,7}", , , "561234"], "SR", 597, "00", , , , , , , , [[, "(\\d{3})(\\d{3})", "$1-$2", ["[2-4]|5[2-58]"]], [, "(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], [, "(\\d{3})(\\d{4})", "$1-$2", ["59|[6-8]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        SS: [, [, , "[19]\\d{8}", "\\d{9}", , , , , , [9]], [, , "18\\d{7}", "\\d{9}", , , "181234567"], [, , "(?:12|9[1257])\\d{7}", "\\d{9}", , , "977123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "SS", 211, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", , "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        ST: [, [, , "[29]\\d{6}", "\\d{7}", , , , , , [7]], [, , "22\\d{5}", "\\d{7}", , , "2221234"], [, , "9(?:0(?:0[5-9]|[1-9]\\d)|[89]\\d{2})\\d{3}", "\\d{7}", , , "9812345"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "ST", 239, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        SV: [, [, , "[267]\\d{7}|[89]\\d{6}(?:\\d{4})?", "\\d{7,8}|\\d{11}", , , , , , [7, 8, 11]], [, , "2[1-6]\\d{6}", "\\d{8}", , , "21234567", , , [8]], [, , "[67]\\d{7}", "\\d{8}", , , "70123456", , , [8]], [, , "800\\d{4}(?:\\d{4})?", "\\d{7}(?:\\d{4})?", , , "8001234", , , [7, 11]], [, , "900\\d{4}(?:\\d{4})?", "\\d{7}(?:\\d{4})?", , , "9001234", , , [7, 11]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "SV", 503, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        SX: [, [, , "[5789]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "7215(?:4[2-8]|8[239]|9[056])\\d{4}", "\\d{7}(?:\\d{3})?", , , "7215425678"], [, , "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}", "\\d{7}(?:\\d{3})?", , , "7215205678"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "SX", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "721", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        SY: [, [, , "[1-59]\\d{7,8}", "\\d{6,9}", , , , , , [8, 9], [6, 7]], [, , "(?:1(?:1\\d?|4\\d|[2356])|2(?:1\\d?|[235])|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}", "\\d{6,9}", , , "112345678"], [, , "9(?:22|[3-589]\\d|6[024-9])\\d{6}", "\\d{9}", , , "944567890", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "SY", 963, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", , 1], [, "(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", , 1]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        SZ: [, [, , "[027]\\d{7}", "\\d{8}", , , , , , [8]], [, , "2[2-5]\\d{6}", "\\d{8}", , , "22171234"], [, , "7[6-8]\\d{6}", "\\d{8}", , , "76123456"], [, , "0800\\d{4}", "\\d{8}", , , "08001234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "SZ", 268, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[027]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "0800\\d{4}", "\\d{8}", , , "08001234"], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        TA: [, [, , "8\\d{3}", "\\d{4}", , , , , , [-1, 4]], [, , "8\\d{3}", "\\d{4}", , , "8999", , , [4]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "TA", 290, "00", , , , , , , , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        TC: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "649(?:712|9(?:4\\d|50))\\d{4}", "\\d{7}(?:\\d{3})?", , , "6497121234"], [, , "649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}", "\\d{7}(?:\\d{3})?", , , "6492311234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "64971[01]\\d{4}", "\\d{10}", , , "6497101234"], "TC", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "649", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        TD: [, [, , "[2679]\\d{7}", "\\d{8}", , , , , , [8]], [, , "22(?:[3789]0|5[0-5]|6[89])\\d{4}", "\\d{8}", , , "22501234"], [, , "(?:6[023568]\\d|77\\d|9\\d{2})\\d{5}", "\\d{8}", , , "63012345"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "TD", 235, "00|16", , , , , , "00", , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        TG: [, [, , "[29]\\d{7}", "\\d{8}", , , , , , [8]], [, , "2(?:2[2-7]|3[23]|44|55|66|77)\\d{5}", "\\d{8}", , , "22212345"], [, , "9[0-389]\\d{6}", "\\d{8}", , , "90112345"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "TG", 228, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        TH: [, [, , "[2-9]\\d{7,8}|1\\d{3}(?:\\d{5,6})?", "\\d{4}|\\d{8,10}", , , , , , [4, 8, 9, 10]], [, , "(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", "\\d{8}", , , "21234567", , , [8]], [, , "(?:14|6[1-5]|[89]\\d)\\d{7}", "\\d{9}", , , "812345678", , , [9]], [, , "1800\\d{6}", "\\d{10}", , , "1800123456", , , [10]], [, , "1900\\d{6}", "\\d{10}", , , "1900123456", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "6[08]\\d{7}", "\\d{9}", , , "601234567", , , [9]], "TH", 66, "00", "0", , , "0", , , , [[, "(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], [, "([13-9]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"], "0$1"], [, "(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1"], "$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "1\\d{3}", "\\d{4}", , , "1100", , , [4]], [, , "1\\d{3}", "\\d{4}", , , "1100", , , [4]], , , [, , "NA", "NA", , , , , , [-1]]],
        TJ: [, [, , "[3-589]\\d{8}", "\\d{3,9}", , , , , , [9], [3, 5, 7]], [, , "(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}", "\\d{3,9}", , , "372123456"], [, , "(?:41[18]|5(?:0[125]|5\\d)|88\\d|9[0-35-9]\\d)\\d{6}", "\\d{9}", , , "917123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "TJ", 992, "810", "8", , , "8", , "8~10", , [[, "([349]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"], "(8) $1", , 1], [, "([4589]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[148]|[58]|9(?:1[59]|[0235-9])"], "(8) $1", , 1], [, "(331700)(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317", "33170", "331700"], "(8) $1", , 1], [, "(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]", "3(?:[1245]|3(?:[02-9]|1[0-589]))"], "(8) $1", , 1]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        TK: [, [, , "[2-47]\\d{3,6}", "\\d{4,7}", , , , , , [4, 5, 6, 7]], [, , "(?:2[2-4]|[34]\\d)\\d{2,5}", "\\d{4,7}", , , "3101"], [, , "7[2-4]\\d{2,5}", "\\d{4,7}", , , "7290"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "TK", 690, "00", , , , , , , , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        TL: [, [, , "[2-489]\\d{6}|7\\d{6,7}", "\\d{7,8}", , , , , , [7, 8]], [, , "(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", "\\d{7}", , , "2112345", , , [7]], [, , "7[3-8]\\d{6}", "\\d{8}", , , "77212345", , , [8]], [, , "80\\d{5}", "\\d{7}", , , "8012345", , , [7]], [, , "90\\d{5}", "\\d{7}", , , "9012345", , , [7]], [, , "NA", "NA", , , , , , [-1]], [, , "70\\d{5}", "\\d{7}", , , "7012345", , , [7]], [, , "NA", "NA", , , , , , [-1]], "TL", 670, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-489]"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["7"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        TM: [, [, , "[1-6]\\d{7}", "\\d{8}", , , , , , [8]], [, , "(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}", "\\d{8}", , , "12345678"], [, , "6[1-9]\\d{6}", "\\d{8}", , , "66123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "TM", 993, "810", "8", , , "8", , "8~10", , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"], [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["13|[2-5]"], "(8 $1)"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        TN: [, [, , "[2-57-9]\\d{7}", "\\d{8}", , , , , , [8]], [, , "3(?:[012]\\d|6[0-4]|91)\\d{5}|7\\d{7}|81200\\d{3}", "\\d{8}", , , "71234567"], [, , "(?:[259]\\d|4[0-6])\\d{6}", "\\d{8}", , , "20123456"], [, , "8010\\d{4}", "\\d{8}", , , "80101234"], [, , "88\\d{6}", "\\d{8}", , , "88123456"], [, , "8[12]10\\d{4}", "\\d{8}", , , "81101234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "TN", 216, "00", , , , , , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        TO: [, [, , "[02-8]\\d{4,6}", "\\d{5,7}", , , , , , [5, 7]], [, , "(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}", "\\d{5}", , , "20123", , , [5]], [, , "(?:7[578]|8[47-9])\\d{5}", "\\d{7}", , , "7715123", , , [7]], [, , "0800\\d{3}", "\\d{7}", , , "0800222", , , [7]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "TO", 676, "00", , , , , , , , [[, "(\\d{2})(\\d{3})", "$1-$2", ["[1-6]|7[0-4]|8[05]"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["7[5-9]|8[47-9]"]], [, "(\\d{4})(\\d{3})", "$1 $2", ["0"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        TR: [, [, , "[2-589]\\d{9}|444\\d{4}", "\\d{7,10}", , , , , , [7, 10]], [, , "(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}", "\\d{10}", , , "2123456789", , , [10]], [, , "5(?:(?:0[1-7]|22|[34]\\d|5[1-59]|9[246])\\d{2}|6161)\\d{5}", "\\d{10}", , , "5012345678", , , [10]], [, , "800\\d{7}", "\\d{10}", , , "8001234567", , , [10]], [, , "900\\d{7}", "\\d{10}", , , "9001234567", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "TR", 90, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4(?:[0-35-9]|4[0-35-9])"], "(0$1)", , 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[02-69]"], "0$1", , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["51|[89]"], "0$1", , 1], [, "(444)(\\d{1})(\\d{3})", "$1 $2 $3", ["444"]]], , [, , "512\\d{7}", "\\d{10}", , , "5123456789", , , [10]], , , [, , "444\\d{4}", "\\d{7}", , , "4441444", , , [7]], [, , "444\\d{4}|850\\d{7}", "\\d{7,10}", , , "4441444"], , , [, , "NA", "NA", , , , , , [-1]]],
        TT: [, [, , "[589]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "868(?:2(?:01|2[1-6]|3[1-5])|6(?:0[79]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}", "\\d{7}(?:\\d{3})?", , , "8682211234"], [, , "868(?:2(?:[789]\\d)|3(?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}", "\\d{7}(?:\\d{3})?", , , "8682911234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "TT", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "868", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "868619\\d{4}", "\\d{10}", , , "8686191234"]],
        TV: [, [, , "[279]\\d{4,6}", "\\d{5,7}", , , , , , [5, 6, 7]], [, , "2[02-9]\\d{3}", "\\d{5}", , , "20123", , , [5]], [, , "(?:70\\d|90)\\d{4}", "\\d{6,7}", , , "901234", , , [6, 7]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "TV", 688, "00", , , , , , , , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        TW: [, [, , "[2-689]\\d{7,8}|7\\d{7,9}", "\\d{8,10}", , , , , , [8, 9, 10]], [, , "[2-8]\\d{7,8}", "\\d{8,9}", , , "21234567", , , [8, 9]], [, , "9\\d{8}", "\\d{9}", , , "912345678", , , [9]], [, , "800\\d{6}", "\\d{9}", , , "800123456", , , [9]], [, , "900\\d{6}", "\\d{9}", , , "900123456", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "70\\d{8}", "\\d{10}", , , "7012345678", , , [10]], "TW", 886, "0(?:0[25679]|19)", "0", "#", , "0", , , , [[, "([2-8])(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[2-6]|[78][1-9]"], "0$1"], [, "([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["80|9"], "0$1"], [, "(70)(\\d{4})(\\d{4})", "$1 $2 $3", ["70"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        TZ: [, [, , "\\d{9}", "\\d{7,9}", , , , , , [7, 9]], [, , "2[2-8]\\d{7}", "\\d{7,9}", , , "222345678"], [, , "(?:6[125-9]|7[1-9])\\d{7}", "\\d{9}", , , "621234567", , , [9]], [, , "80[08]\\d{6}", "\\d{9}", , , "800123456", , , [9]], [, , "90\\d{7}", "\\d{9}", , , "900123456", , , [9]], [, , "8(?:40|6[01])\\d{6}", "\\d{9}", , , "840123456", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "41\\d{7}", "\\d{9}", , , "412345678", , , [9]], "TZ", 255, "00[056]", "0", , , "0", , , , [[, "([24]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], [, "([67]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"], [, "([89]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        UA: [, [, , "[3-9]\\d{8}", "\\d{5,9}", , , , , , [9], [5, 6, 7]], [, , "(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}", "\\d{5,9}", , , "311234567"], [, , "(?:39|50|6[36-8]|73|9[1-9])\\d{7}", "\\d{9}", , , "391234567"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "900\\d{6}", "\\d{9}", , , "900123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "89\\d{7}", "\\d{9}", , , "891234567"], "UA", 380, "00", "0", , , "0", , "0~0", , [[, "([3-9]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[38]9|4(?:[45][0-5]|87)|5(?:0|6[37]|7[37])|6[36-8]|73|9[1-9]", "[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|73|9[1-9]"], "0$1"], [, "([3-689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["3[1-8]2|4[13678]2|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90", "3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90"], "0$1"], [, "([3-6]\\d{3})(\\d{5})", "$1 $2", ["3(?:5[013-9]|[1-46-8])|4(?:[137][013-9]|6|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6[0135-9]|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])", "3(?:5[013-9]|[1-46-8](?:22|[013-9]))|4(?:[137][013-9]|6(?:[013-9]|22)|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6(?:3[02389]|[015689])|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        UG: [, [, , "\\d{9}", "\\d{5,9}", , , , , , [9], [5, 6, 7]], [, , "20(?:[0147]\\d{2}|2(?:40|[5-9]\\d)|3(?:0[0-4]|[23]\\d)|5[0-4]\\d|6[035-9]\\d|8[0-2]\\d)\\d{4}|[34]\\d{8}", "\\d{5,9}", , , "312345678"], [, , "7(?:(?:0[0-7]|[15789]\\d|30|4[0-4])\\d|2(?:[03]\\d|60))\\d{5}", "\\d{9}", , , "712345678"], [, , "800[123]\\d{5}", "\\d{9}", , , "800123456"], [, , "90[123]\\d{6}", "\\d{9}", , , "901123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "UG", 256, "00[057]", "0", , , "0", , , , [[, "(\\d{3})(\\d{6})", "$1 $2", ["[7-9]|20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["3|4(?:[1-5]|6[0-36-9])"], "0$1"], [, "(2024)(\\d{5})", "$1 $2", ["2024"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        US: [, [, , "[2-9]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "(?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "2015550123"], [, , "(?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "2015550123"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "US", 1, "011", "1", , , "1", , , 1, [[, "(\\d{3})(\\d{4})", "$1-$2", , , , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", , , , 1]], [[, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3"]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        UY: [, [, , "[2489]\\d{6,7}", "\\d{7,8}", , , , , , [7, 8]], [, , "2\\d{7}|4[2-7]\\d{6}", "\\d{7,8}", , , "21231234", , , [8]], [, , "9[1-9]\\d{6}", "\\d{8}", , , "94231234", , , [8]], [, , "80[05]\\d{4}", "\\d{7}", , , "8001234", , , [7]], [, , "90[0-8]\\d{4}", "\\d{7}", , , "9001234", , , [7]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "UY", 598, "0(?:1[3-9]\\d|0)", "0", " int. ", , "0", , "00", , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[24]"]], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9[1-9]"], "0$1"], [, "(\\d{3})(\\d{4})", "$1 $2", ["[89]0"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        UZ: [, [, , "[679]\\d{8}", "\\d{7,9}", , , , , , [9], [7]], [, , "(?:6(?:1(?:22|3[124]|4[1-4]|5[123578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d{2}|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[12456]|9[135-8])|1[12]\\d|2(?:22|3[1345789]|4[123579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}", "\\d{7,9}", , , "662345678"], [, , "6(?:1(?:2(?:98|2[01])|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:11\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4])|7\\d{2})|5(?:19[01]|2(?:27|9[26])|30\\d|59\\d|7\\d{2})|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|3[79]\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79])|9[0-3]\\d)|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|5\\d|3[01]|7[0-4])|5[67]\\d|6(?:2[0-26]|8\\d)|7\\d{2}))\\d{4}|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|33\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078])|9[4-6]\\d)|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0127]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[05629]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))\\d{4}|9[0-57-9]\\d{7}", "\\d{9}", , , "912345678"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "UZ", 998, "810", "8", , , "8", , "8~10", , [[, "([679]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "8 $1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        VA: [, [, , "(?:0(?:878\\d{5}|6698\\d{5})|[1589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9}))", "\\d{6,11}", , , , , , [6, 8, 9, 10, 11]], [, , "06698\\d{5}", "\\d{10}", , , "0669812345", , , [10]], [, , "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", "\\d{9,11}", , , "3123456789", , , [9, 10, 11]], [, , "80(?:0\\d{6}|3\\d{3})", "\\d{6,9}", , , "800123456", , , [6, 9]], [, , "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", "\\d{6,10}", , , "899123456", , , [6, 8, 9, 10]], [, , "84(?:[08]\\d{6}|[17]\\d{3})", "\\d{6,9}", , , "848123456", , , [6, 9]], [, , "1(?:78\\d|99)\\d{6}", "\\d{9,10}", , , "1781234567", , , [9, 10]], [, , "55\\d{8}", "\\d{10}", , , "5512345678", , , [10]], "VA", 39, "00", , , , , , , , , , [, , "NA", "NA", , , , , , [-1]], , , [, , "848\\d{6}", "\\d{9}", , , "848123456", , , [9]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        VC: [, [, , "[5789]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}", "\\d{7}(?:\\d{3})?", , , "7842661234"], [, , "784(?:4(?:3[0-4]|5[45]|89|9[0-58])|5(?:2[6-9]|3[0-4]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "7844301234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "VC", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "784", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        VE: [, [, , "[24589]\\d{9}", "\\d{7,10}", , , , , , [10], [7]], [, , "(?:2(?:12|3[457-9]|[58][1-9]|[467]\\d|9[1-6])|50[01])\\d{7}", "\\d{7,10}", , , "2121234567"], [, , "4(?:1[24-8]|2[46])\\d{7}", "\\d{10}", , , "4121234567"], [, , "800\\d{7}", "\\d{10}", , , "8001234567"], [, , "900\\d{7}", "\\d{10}", , , "9001234567"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "VE", 58, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{7})", "$1-$2", , "0$1", "$CC $1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        VG: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "284(?:(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}|496[0-5]\\d{3})", "\\d{7}(?:\\d{3})?", , , "2842291234"], [, , "284(?:(?:3(?:0[0-3]|4[0-367]|94)|4(?:4[0-6]|68|99)|54[0-57])\\d{4}|496[6-9]\\d{3})", "\\d{7}(?:\\d{3})?", , , "2843001234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "VG", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA", , , , , , [-1]], , "284", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        VI: [, [, , "[3589]\\d{9}", "\\d{7}(?:\\d{3})?", , , , , , [10], [7]], [, , "340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}", "\\d{7}(?:\\d{3})?", , , "3406421234"], [, , "340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}", "\\d{7}(?:\\d{3})?", , , "3406421234"], [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"], [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"], [, , "NA", "NA", , , , , , [-1]], [, , "5(?:00|22|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"], [, , "NA", "NA", , , , , , [-1]], "VI", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA", , , , , , [-1]], , "340", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        VN: [, [, , "[17]\\d{6,9}|[2-69]\\d{7,9}|8\\d{6,8}", "\\d{7,10}", , , , , , [7, 8, 9, 10]], [, , "(?:2(?:[025-79]|1[0189]|[348][01])|3(?:[0136-9]|[25][01])|4\\d|5(?:[01][01]|[2-9])|6(?:[0-46-8]|5[01])|7(?:[02-79]|[18][01]))\\d{7}|8(?:[1-57]\\d|[689][0-79])\\d{6}", "\\d{9,10}", , , "2101234567", , , [9, 10]], [, , "(?:9\\d|1(?:2\\d|6[2-9]|8[68]|99))\\d{7}|8[689]8\\d{6}", "\\d{9,10}", , , "912345678", , , [9, 10]], [, , "1800\\d{4,6}", "\\d{8,10}", , , "1800123456", , , [8, 9, 10]], [, , "1900\\d{4,6}", "\\d{8,10}", , , "1900123456", , , [8, 9, 10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "VN", 84, "00", "0", , , "0", , , , [[, "([17]99)(\\d{4})", "$1 $2", ["[17]99"], "0$1", , 1], [, "([48])(\\d{4})(\\d{4})", "$1 $2 $3", ["4|8(?:[1-57]|[689][0-79])"], "0$1", , 1], [, "([235-7]\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["2[025-79]|3[0136-9]|5[2-9]|6[0-46-8]|7[02-79]"], "0$1", , 1], [, "(80)(\\d{5})", "$1 $2", ["80"], "0$1", , 1], [, "(69\\d)(\\d{4,5})", "$1 $2", ["69"], "0$1", , 1], [, "([235-7]\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["2[1348]|3[25]|5[01]|65|7[18]"], "0$1", , 1], [, "([89]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8[689]8|9"], "0$1", , 1], [, "(1[2689]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[26]|8[68]|99)"], "0$1", , 1], [, "(1[89]00)(\\d{4,6})", "$1 $2", ["1[89]0"], "$1", , 1]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "[17]99\\d{4}|69\\d{5,6}", "\\d{7,8}", , , "1992000", , , [7, 8]], [, , "[17]99\\d{4}|69\\d{5,6}|80\\d{5}", "\\d{7,8}", , , "1992000", , , [7, 8]], , , [, , "NA", "NA", , , , , , [-1]]],
        VU: [, [, , "[2-57-9]\\d{4,6}", "\\d{5,7}", , , , , , [5, 7]], [, , "(?:2[02-9]\\d|3(?:[5-7]\\d|8[0-8])|48[4-9]|88\\d)\\d{2}", "\\d{5}", , , "22123", , , [5]], [, , "(?:5(?:7[2-5]|[0-689]\\d)|7[013-7]\\d)\\d{4}", "\\d{7}", , , "5912345", , , [7]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "VU", 678, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "3[03]\\d{3}|900\\d{4}", "\\d{5,7}", , , "30123"], , , [, , "NA", "NA", , , , , , [-1]]],
        WF: [, [, , "[4-8]\\d{5}", "\\d{6}", , , , , , [6]], [, , "(?:50|68|72)\\d{4}", "\\d{6}", , , "501234"], [, , "(?:50|68|72|8[23])\\d{4}", "\\d{6}", , , "501234"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "WF", 681, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "[48]0\\d{4}", "\\d{6}", , , "401234"]],
        WS: [, [, , "[2-8]\\d{4,6}", "\\d{5,7}", , , , , , [5, 6, 7]], [, , "(?:[2-5]\\d|6[1-9]|84\\d{2})\\d{3}", "\\d{5,7}", , , "22123", , , [5, 7]], [, , "(?:60|7[25-7]\\d)\\d{4}", "\\d{6,7}", , , "601234", , , [6, 7]], [, , "800\\d{3}", "\\d{6}", , , "800123", , , [6]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "WS", 685, "0", , , , , , , , [[, "(8\\d{2})(\\d{3,4})", "$1 $2", ["8"]], [, "(7\\d)(\\d{5})", "$1 $2", ["7"]], [, "(\\d{5})", "$1", ["[2-6]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        YE: [, [, , "[1-7]\\d{6,8}", "\\d{6,9}", , , , , , [7, 8, 9], [6]], [, , "(?:1(?:7\\d|[2-68])|2[2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}", "\\d{6,8}", , , "1234567", , , [7, 8]], [, , "7[0137]\\d{7}", "\\d{9}", , , "712345678", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "YE", 967, "00", "0", , , "0", , , , [[, "([1-7])(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"], [, "(7\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7[0137]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        YT: [, [, , "[268]\\d{8}", "\\d{9}", , , , , , [9]], [, , "269(?:6[0-4]|50)\\d{4}", "\\d{9}", , , "269601234"], [, , "639\\d{6}", "\\d{9}", , , "639123456"], [, , "80\\d{7}", "\\d{9}", , , "801234567"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "YT", 262, "00", "0", , , "0", , , , , , [, , "NA", "NA", , , , , , [-1]], , "269|63", [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        ZA: [, [, , "[1-79]\\d{8}|8(?:[067]\\d{7}|[1-4]\\d{3,7})", "\\d{5,9}", , , , , , [5, 6, 7, 8, 9]], [, , "(?:1[0-8]|2[0-378]|3[1-69]|4\\d|5[1346-8])\\d{7}", "\\d{9}", , , "101234567", , , [9]], [, , "(?:6[0-5]|7[0-46-9])\\d{7}|8[1-4]\\d{3,7}", "\\d{5,9}", , , "711234567"], [, , "80\\d{7}", "\\d{9}", , , "801234567", , , [9]], [, , "86[2-9]\\d{6}|90\\d{7}", "\\d{9}", , , "862345678", , , [9]], [, , "860\\d{6}", "\\d{9}", , , "860123456", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "87\\d{7}", "\\d{9}", , , "871234567", , , [9]], "ZA", 27, "00", "0", , , "0", , , , [[, "(860)(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-79]|8(?:[0-47]|6[1-9])"], "0$1"], [, "(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "861\\d{6}", "\\d{9}", , , "861123456", , , [9]], , , [, , "NA", "NA", , , , , , [-1]]],
        ZM: [, [, , "[289]\\d{8}", "\\d{9}", , , , , , [9]], [, , "21[1-8]\\d{6}", "\\d{9}", , , "211234567"], [, , "9(?:5[034589]|[67]\\d)\\d{6}", "\\d{9}", , , "955123456"], [, , "800\\d{6}", "\\d{9}", , , "800123456"], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "ZM", 260, "00", "0", , , "0", , , , [[, "([29]\\d)(\\d{7})", "$1 $2", ["[29]"], "0$1"], [, "(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        ZW: [, [, , "2(?:[012457-9]\\d{3,8}|6(?:[14]\\d{7}|\\d{4}))|[13-79]\\d{4,9}|8[06]\\d{8}", "\\d{3,10}", , , , , , [5, 6, 7, 8, 9, 10], [3, 4]], [, , "(?:2(?:0(?:4\\d|5\\d{2})|2[278]\\d|48\\d|7(?:[1-7]\\d|[089]\\d{2})|8(?:[2-57-9]|[146]\\d{2})|98)|3(?:08|17|3[78]|7(?:[19]|[56]\\d)|8[37]|98)|5[15][78]|6(?:28\\d{2}|[36]7|75\\d|[69]8|8(?:7\\d|8)))\\d{3}|(?:2(?:1[39]|2[0157]|6[14]|7[35]|84)|329)\\d{7}|(?:1(?:3\\d{2}|9\\d|[4-8])|2(?:0\\d{2}|[569]\\d)|3(?:[26]|[013459]\\d)|5(?:0|5\\d{2}|[689]\\d)|6(?:[39]|[01246]\\d|[78]\\d{2}))\\d{3}|(?:29\\d|39|54)\\d{6}|(?:(?:25|54)83|2582\\d)\\d{3}|(?:4\\d{6,7}|9[2-9]\\d{4,5})", "\\d{3,10}", , , "1312345"], [, , "7[1378]\\d{7}", "\\d{9}", , , "711234567"], [, , "800\\d{7}", "\\d{10}", , , "8001234567", , , [10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "86(?:1[12]|30|44|55|77|8[367]|99)\\d{6}", "\\d{10}", , , "8686123456", , , [10]], "ZW", 263, "00", "0", , , "0", , , , [[, "([49])(\\d{3})(\\d{2,4})", "$1 $2 $3", ["4|9[2-9]"], "0$1"], [, "(7\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["7"], "0$1"], [, "(86\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["86[24]"], "0$1"], [, "([2356]\\d{2})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8|[78])|3(?:08|17|3[78]|7[1569]|8[37]|98)|5[15][78]|6(?:[29]8|[38]7|6[78]|75|[89]8)"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|6[14]|7[35]|84)|329"], "0$1"], [, "([1-356]\\d)(\\d{3,5})", "$1 $2", ["1[3-9]|2[0569]|3[0-69]|5[05689]|6[0-46-9]"], "0$1"], [, "([235]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[23]9|54"], "0$1"], [, "([25]\\d{3})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258[23]|5483"], "0$1"], [, "(8\\d{3})(\\d{6})", "$1 $2", ["86"], "0$1"], [, "(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        800: [, [, , "\\d{8}", "\\d{8}", , , "12345678", , , [-1, 8]], [, , "NA", "NA", , , "12345678", , , [-1]], [, , "NA", "NA", , , "12345678", , , [-1]], [, , "\\d{8}", "\\d{8}", , , "12345678", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "001", 800, , , , , , , , 1, [[, "(\\d{4})(\\d{4})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        808: [, [, , "\\d{8}", "\\d{8}", , , "12345678", , , [-1, 8]], [, , "NA", "NA", , , "12345678", , , [-1]], [, , "NA", "NA", , , "12345678", , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "\\d{8}", "\\d{8}", , , "12345678", , , [8]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "001", 808, , , , , , , , 1, [[, "(\\d{4})(\\d{4})", "$1 $2"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        870: [, [, , "[35-7]\\d{8}", "\\d{9}", , , "301234567", , , [-1, 9]], [, , "NA", "NA", , , "301234567", , , [-1]], [, , "(?:[356]\\d|7[6-8])\\d{7}", "\\d{9}", , , "301234567", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "001", 870, , , , , , , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        878: [, [, , "1\\d{11}", "\\d{12}", , , "101234567890", , , [-1, 12]], [, , "NA", "NA", , , "101234567890", , , [-1]], [, , "NA", "NA", , , "101234567890", , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "10\\d{10}", "\\d{12}", , , "101234567890", , , [12]], "001", 878, , , , , , , , 1, [[, "(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        881: [, [, , "[67]\\d{8}", "\\d{9}", , , "612345678", , , [-1, 9]], [, , "NA", "NA", , , "612345678", , , [-1]], [, , "[67]\\d{8}", "\\d{9}", , , "612345678", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "001", 881, , , , , , , , , [[, "(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[67]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        882: [, [, , "[13]\\d{6,11}", "\\d{7,12}", , , "3451234567", , , [-1, 7, 8, 9, 10, 11, 12]], [, , "NA", "NA", , , "3451234567", , , [-1]], [, , "3(?:2\\d{3}|37\\d{2}|4(?:2|7\\d{3}))\\d{4}", "\\d{7,10}", , , "3451234567", , , [7, 9, 10]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15678]|9[0689])\\d{4}|6\\d{5,10})|3(?:45|9\\d{3})\\d{7}", "\\d{7,12}", , , "390123456789", , , [7, 8, 9, 10, 11, 12]], "001", 882, , , , , , , , , [[, "(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], [, "(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["348"]], [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1"]], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], [, "(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["16|39"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "348[57]\\d{7}", "\\d{11}", , , "3451234567", , , [11]]],
        883: [, [, , "51\\d{7}(?:\\d{3})?", "\\d{9}(?:\\d{3})?", , , "510012345", , , [-1, 9, 12]], [, , "NA", "NA", , , "510012345", , , [-1]], [, , "NA", "NA", , , "510012345", , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "51(?:00\\d{5}(?:\\d{3})?|[13]0\\d{8})", "\\d{9}(?:\\d{3})?", , , "510012345", , , [9, 12]], "001", 883, , , , , , , , 1, [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["510"]], [, "(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]]],
        888: [, [, , "\\d{11}", "\\d{11}", , , "12345678901", , , [-1, 11]], [, , "NA", "NA", , , "12345678901", , , [-1]], [, , "NA", "NA", , , "12345678901", , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "001", 888, , , , , , , , 1, [[, "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "\\d{11}", "\\d{11}", , , "12345678901", , , [11]], 1, , [, , "NA", "NA", , , , , , [-1]]],
        979: [, [, , "\\d{9}", "\\d{9}", , , "123456789", , , [-1, 9]], [, , "NA", "NA", , , "123456789", , , [-1]], [, , "NA", "NA", , , "123456789", , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "\\d{9}", "\\d{9}", , , "123456789", , , [9]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], "001", 979, , , , , , , , 1, [[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]], , [, , "NA", "NA", , , , , , [-1]], , , [, , "NA", "NA", , , , , , [-1]], [, , "NA", "NA", , , , , , [-1]], 1, , [, , "NA", "NA", , , , , , [-1]]]
    },g.phonenumbers.PhoneNumberUtil = function () {
        this.regionToMetadataMap = {}
    },m.addSingletonGetter(g.phonenumbers.PhoneNumberUtil),g.phonenumbers.Error = {
        INVALID_COUNTRY_CODE: "Invalid country calling code",
        NOT_A_NUMBER: "The string supplied did not seem to be a phone number",
        TOO_SHORT_AFTER_IDD: "Phone number too short after IDD",
        TOO_SHORT_NSN: "The string supplied is too short to be a phone number",
        TOO_LONG: "The string supplied is too long to be a phone number"
    },g.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_ = 1,g.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_ = 2,g.phonenumbers.PhoneNumberUtil.MAX_LENGTH_FOR_NSN_ = 17,g.phonenumbers.PhoneNumberUtil.MAX_LENGTH_COUNTRY_CODE_ = 3,g.phonenumbers.PhoneNumberUtil.MAX_INPUT_STRING_LENGTH_ = 250,g.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_ = "ZZ",g.phonenumbers.PhoneNumberUtil.COLOMBIA_MOBILE_TO_FIXED_LINE_PREFIX_ = "3",g.phonenumbers.PhoneNumberUtil.MOBILE_TOKEN_MAPPINGS_ = {
        52: "1",
        54: "9"
    },g.phonenumbers.PhoneNumberUtil.GEO_MOBILE_COUNTRIES_ = [52, 54, 55],g.phonenumbers.PhoneNumberUtil.PLUS_SIGN = "+",g.phonenumbers.PhoneNumberUtil.STAR_SIGN_ = "*",g.phonenumbers.PhoneNumberUtil.RFC3966_EXTN_PREFIX_ = ";ext=",g.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_ = "tel:",g.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_CONTEXT_ = ";phone-context=",g.phonenumbers.PhoneNumberUtil.RFC3966_ISDN_SUBADDRESS_ = ";isub=",g.phonenumbers.PhoneNumberUtil.DIGIT_MAPPINGS = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        "\uff10": "0",
        "\uff11": "1",
        "\uff12": "2",
        "\uff13": "3",
        "\uff14": "4",
        "\uff15": "5",
        "\uff16": "6",
        "\uff17": "7",
        "\uff18": "8",
        "\uff19": "9",
        "\u0660": "0",
        "\u0661": "1",
        "\u0662": "2",
        "\u0663": "3",
        "\u0664": "4",
        "\u0665": "5",
        "\u0666": "6",
        "\u0667": "7",
        "\u0668": "8",
        "\u0669": "9",
        "\u06f0": "0",
        "\u06f1": "1",
        "\u06f2": "2",
        "\u06f3": "3",
        "\u06f4": "4",
        "\u06f5": "5",
        "\u06f6": "6",
        "\u06f7": "7",
        "\u06f8": "8",
        "\u06f9": "9"
    },g.phonenumbers.PhoneNumberUtil.DIALLABLE_CHAR_MAPPINGS_ = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        "+": g.phonenumbers.PhoneNumberUtil.PLUS_SIGN,
        "*": "*",
        "#": "#"
    },g.phonenumbers.PhoneNumberUtil.ALPHA_MAPPINGS_ = {
        A: "2",
        B: "2",
        C: "2",
        D: "3",
        E: "3",
        F: "3",
        G: "4",
        H: "4",
        I: "4",
        J: "5",
        K: "5",
        L: "5",
        M: "6",
        N: "6",
        O: "6",
        P: "7",
        Q: "7",
        R: "7",
        S: "7",
        T: "8",
        U: "8",
        V: "8",
        W: "9",
        X: "9",
        Y: "9",
        Z: "9"
    },g.phonenumbers.PhoneNumberUtil.ALL_NORMALIZATION_MAPPINGS_ = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        "\uff10": "0",
        "\uff11": "1",
        "\uff12": "2",
        "\uff13": "3",
        "\uff14": "4",
        "\uff15": "5",
        "\uff16": "6",
        "\uff17": "7",
        "\uff18": "8",
        "\uff19": "9",
        "\u0660": "0",
        "\u0661": "1",
        "\u0662": "2",
        "\u0663": "3",
        "\u0664": "4",
        "\u0665": "5",
        "\u0666": "6",
        "\u0667": "7",
        "\u0668": "8",
        "\u0669": "9",
        "\u06f0": "0",
        "\u06f1": "1",
        "\u06f2": "2",
        "\u06f3": "3",
        "\u06f4": "4",
        "\u06f5": "5",
        "\u06f6": "6",
        "\u06f7": "7",
        "\u06f8": "8",
        "\u06f9": "9",
        A: "2",
        B: "2",
        C: "2",
        D: "3",
        E: "3",
        F: "3",
        G: "4",
        H: "4",
        I: "4",
        J: "5",
        K: "5",
        L: "5",
        M: "6",
        N: "6",
        O: "6",
        P: "7",
        Q: "7",
        R: "7",
        S: "7",
        T: "8",
        U: "8",
        V: "8",
        W: "9",
        X: "9",
        Y: "9",
        Z: "9"
    },g.phonenumbers.PhoneNumberUtil.ALL_PLUS_NUMBER_GROUPING_SYMBOLS_ = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        A: "A",
        B: "B",
        C: "C",
        D: "D",
        E: "E",
        F: "F",
        G: "G",
        H: "H",
        I: "I",
        J: "J",
        K: "K",
        L: "L",
        M: "M",
        N: "N",
        O: "O",
        P: "P",
        Q: "Q",
        R: "R",
        S: "S",
        T: "T",
        U: "U",
        V: "V",
        W: "W",
        X: "X",
        Y: "Y",
        Z: "Z",
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        e: "E",
        f: "F",
        g: "G",
        h: "H",
        i: "I",
        j: "J",
        k: "K",
        l: "L",
        m: "M",
        n: "N",
        o: "O",
        p: "P",
        q: "Q",
        r: "R",
        s: "S",
        t: "T",
        u: "U",
        v: "V",
        w: "W",
        x: "X",
        y: "Y",
        z: "Z",
        "-": "-",
        "\uff0d": "-",
        "\u2010": "-",
        "\u2011": "-",
        "\u2012": "-",
        "\u2013": "-",
        "\u2014": "-",
        "\u2015": "-",
        "\u2212": "-",
        "/": "/",
        "\uff0f": "/",
        " ": " ",
        "\u3000": " ",
        "\u2060": " ",
        ".": ".",
        "\uff0e": "."
    },g.phonenumbers.PhoneNumberUtil.UNIQUE_INTERNATIONAL_PREFIX_ = /[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?/,g.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION = "-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \xa0\xad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e",g.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ = "0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9",g.phonenumbers.PhoneNumberUtil.VALID_ALPHA_ = "A-Za-z",g.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ = "+\uff0b",g.phonenumbers.PhoneNumberUtil.PLUS_CHARS_PATTERN = new RegExp("[" + g.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + "]+"),g.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_ = new RegExp("^[" + g.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + "]+"),g.phonenumbers.PhoneNumberUtil.SEPARATOR_PATTERN_ = "[" + g.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + "]+",g.phonenumbers.PhoneNumberUtil.CAPTURING_DIGIT_PATTERN = new RegExp("([" + g.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "])"),g.phonenumbers.PhoneNumberUtil.VALID_START_CHAR_PATTERN_ = new RegExp("[" + g.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + g.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]"),g.phonenumbers.PhoneNumberUtil.SECOND_NUMBER_START_PATTERN_ = /[\\\/] *x/,g.phonenumbers.PhoneNumberUtil.UNWANTED_END_CHAR_PATTERN_ = new RegExp("[^" + g.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + g.phonenumbers.PhoneNumberUtil.VALID_ALPHA_ + "#]+$"),g.phonenumbers.PhoneNumberUtil.VALID_ALPHA_PHONE_PATTERN_ = /(?:.*?[A-Za-z]){3}.*/,g.phonenumbers.PhoneNumberUtil.MIN_LENGTH_PHONE_NUMBER_PATTERN_ = "[" + g.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]{" + g.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_ + "}",g.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_ = "[" + g.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + "]*(?:[" + g.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + g.phonenumbers.PhoneNumberUtil.STAR_SIGN_ + "]*[" + g.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]){3,}[" + g.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + g.phonenumbers.PhoneNumberUtil.STAR_SIGN_ + g.phonenumbers.PhoneNumberUtil.VALID_ALPHA_ + g.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]*",g.phonenumbers.PhoneNumberUtil.DEFAULT_EXTN_PREFIX_ = " ext. ",g.phonenumbers.PhoneNumberUtil.CAPTURING_EXTN_DIGITS_ = "([" + g.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]{1,7})",g.phonenumbers.PhoneNumberUtil.EXTN_PATTERNS_FOR_PARSING_ = g.phonenumbers.PhoneNumberUtil.RFC3966_EXTN_PREFIX_ + g.phonenumbers.PhoneNumberUtil.CAPTURING_EXTN_DIGITS_ + "|[ \xa0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\xf3))?n?|\uff45?\uff58\uff54\uff4e?|[,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \xa0\\t,-]*" + g.phonenumbers.PhoneNumberUtil.CAPTURING_EXTN_DIGITS_ + "#?|[- ]+([" + g.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]{1,5})#",g.phonenumbers.PhoneNumberUtil.EXTN_PATTERN_ = new RegExp("(?:" + g.phonenumbers.PhoneNumberUtil.EXTN_PATTERNS_FOR_PARSING_ + ")$", "i"),g.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_PATTERN_ = new RegExp("^" + g.phonenumbers.PhoneNumberUtil.MIN_LENGTH_PHONE_NUMBER_PATTERN_ + "$|^" + g.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_ + "(?:" + g.phonenumbers.PhoneNumberUtil.EXTN_PATTERNS_FOR_PARSING_ + ")?$", "i"),g.phonenumbers.PhoneNumberUtil.NON_DIGITS_PATTERN_ = /\D+/,g.phonenumbers.PhoneNumberUtil.FIRST_GROUP_PATTERN_ = /(\$\d)/,g.phonenumbers.PhoneNumberUtil.NP_PATTERN_ = /\$NP/,g.phonenumbers.PhoneNumberUtil.FG_PATTERN_ = /\$FG/,g.phonenumbers.PhoneNumberUtil.CC_PATTERN_ = /\$CC/,g.phonenumbers.PhoneNumberUtil.FIRST_GROUP_ONLY_PREFIX_PATTERN_ = /^\(?\$1\)?$/,g.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY = "001",g.phonenumbers.PhoneNumberFormat = {
        E164: 0,
        INTERNATIONAL: 1,
        NATIONAL: 2,
        RFC3966: 3
    },g.phonenumbers.PhoneNumberType = {
        FIXED_LINE: 0,
        MOBILE: 1,
        FIXED_LINE_OR_MOBILE: 2,
        TOLL_FREE: 3,
        PREMIUM_RATE: 4,
        SHARED_COST: 5,
        VOIP: 6,
        PERSONAL_NUMBER: 7,
        PAGER: 8,
        UAN: 9,
        VOICEMAIL: 10,
        UNKNOWN: -1
    },g.phonenumbers.PhoneNumberUtil.MatchType = {
        NOT_A_NUMBER: 0,
        NO_MATCH: 1,
        SHORT_NSN_MATCH: 2,
        NSN_MATCH: 3,
        EXACT_MATCH: 4
    },g.phonenumbers.PhoneNumberUtil.ValidationResult = {
        IS_POSSIBLE: 0,
        INVALID_COUNTRY_CODE: 1,
        TOO_SHORT: 2,
        TOO_LONG: 3
    },g.phonenumbers.PhoneNumberUtil.extractPossibleNumber = function (e) {
        var t = e.search(g.phonenumbers.PhoneNumberUtil.VALID_START_CHAR_PATTERN_);
        return t >= 0 ? (e = e.substring(t), e = e.replace(g.phonenumbers.PhoneNumberUtil.UNWANTED_END_CHAR_PATTERN_, ""), t = e.search(g.phonenumbers.PhoneNumberUtil.SECOND_NUMBER_START_PATTERN_), t >= 0 && (e = e.substring(0, t))) : e = "", e
    },g.phonenumbers.PhoneNumberUtil.isViablePhoneNumber = function (e) {
        return e.length < g.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_ ? !1 : g.phonenumbers.PhoneNumberUtil.matchesEntirely_(g.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_PATTERN_, e)
    },g.phonenumbers.PhoneNumberUtil.normalize = function (e) {
        return g.phonenumbers.PhoneNumberUtil.matchesEntirely_(g.phonenumbers.PhoneNumberUtil.VALID_ALPHA_PHONE_PATTERN_, e) ? g.phonenumbers.PhoneNumberUtil.normalizeHelper_(e, g.phonenumbers.PhoneNumberUtil.ALL_NORMALIZATION_MAPPINGS_, !0) : g.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(e)
    },g.phonenumbers.PhoneNumberUtil.normalizeSB_ = function (e) {
        var t = g.phonenumbers.PhoneNumberUtil.normalize(e.toString());
        e.clear(), e.append(t)
    },g.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly = function (e) {
        return g.phonenumbers.PhoneNumberUtil.normalizeHelper_(e, g.phonenumbers.PhoneNumberUtil.DIGIT_MAPPINGS, !0)
    },g.phonenumbers.PhoneNumberUtil.convertAlphaCharactersInNumber = function (e) {
        return g.phonenumbers.PhoneNumberUtil.normalizeHelper_(e, g.phonenumbers.PhoneNumberUtil.ALL_NORMALIZATION_MAPPINGS_, !1)
    },g.phonenumbers.PhoneNumberUtil.prototype.getLengthOfGeographicalAreaCode = function (e) {
        var t = this.getMetadataForRegion(this.getRegionCodeForNumber(e));
        return null != t && (t.hasNationalPrefix() || e.hasItalianLeadingZero()) && this.isNumberGeographical(e) ? this.getLengthOfNationalDestinationCode(e) : 0
    },g.phonenumbers.PhoneNumberUtil.prototype.getLengthOfNationalDestinationCode = function (e) {
        var t;
        return e.hasExtension() ? (t = e.clone(), t.clearExtension()) : t = e, t = this.format(t, g.phonenumbers.PhoneNumberFormat.INTERNATIONAL).split(g.phonenumbers.PhoneNumberUtil.NON_DIGITS_PATTERN_), 0 == t[0].length && t.shift(), 2 >= t.length ? 0 : this.getNumberType(e) == g.phonenumbers.PhoneNumberType.MOBILE && (e = g.phonenumbers.PhoneNumberUtil.getCountryMobileToken(e.getCountryCodeOrDefault()), "" != e) ? t[2].length + e.length : t[1].length
    },g.phonenumbers.PhoneNumberUtil.getCountryMobileToken = function (e) {
        return g.phonenumbers.PhoneNumberUtil.MOBILE_TOKEN_MAPPINGS_[e] || ""
    },g.phonenumbers.PhoneNumberUtil.prototype.getSupportedRegions = function () {
        return m.array.filter(Object.keys(g.phonenumbers.metadata.countryToMetadata), function (e) {
            return isNaN(e)
        })
    },g.phonenumbers.PhoneNumberUtil.prototype.getSupportedGlobalNetworkCallingCodes = function () {
        var e = m.array.filter(Object.keys(g.phonenumbers.metadata.countryToMetadata), function (e) {
            return !isNaN(e)
        });
        return m.array.map(e, function (e) {
            return parseInt(e, 10)
        })
    },g.phonenumbers.PhoneNumberUtil.normalizeHelper_ = function (e, t, n) {
        for (var r, i, o = new m.string.StringBuffer, a = e.length, s = 0; a > s; ++s)r = e.charAt(s), i = t[r.toUpperCase()], null != i ? o.append(i) : n || o.append(r);
        return o.toString()
    },g.phonenumbers.PhoneNumberUtil.prototype.formattingRuleHasFirstGroupOnly = function (e) {
        return 0 == e.length || g.phonenumbers.PhoneNumberUtil.FIRST_GROUP_ONLY_PREFIX_PATTERN_.test(e)
    },g.phonenumbers.PhoneNumberUtil.prototype.isNumberGeographical = function (e) {
        var t = this.getNumberType(e);
        return t == g.phonenumbers.PhoneNumberType.FIXED_LINE || t == g.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE || m.array.contains(g.phonenumbers.PhoneNumberUtil.GEO_MOBILE_COUNTRIES_, e.getCountryCodeOrDefault()) && t == g.phonenumbers.PhoneNumberType.MOBILE
    },g.phonenumbers.PhoneNumberUtil.prototype.isValidRegionCode_ = function (e) {
        return null != e && isNaN(e) && e.toUpperCase()in g.phonenumbers.metadata.countryToMetadata
    },g.phonenumbers.PhoneNumberUtil.prototype.hasValidCountryCallingCode_ = function (e) {
        return e in g.phonenumbers.metadata.countryCodeToRegionCodeMap
    },g.phonenumbers.PhoneNumberUtil.prototype.format = function (e, t) {
        if (0 == e.getNationalNumber() && e.hasRawInput()) {
            var n = e.getRawInputOrDefault();
            if (0 < n.length)return n
        }
        var n = e.getCountryCodeOrDefault(), r = this.getNationalSignificantNumber(e);
        if (t == g.phonenumbers.PhoneNumberFormat.E164)return this.prefixNumberWithCountryCallingCode_(n, g.phonenumbers.PhoneNumberFormat.E164, r, "");
        if (!this.hasValidCountryCallingCode_(n))return r;
        var i = this.getRegionCodeForCountryCode(n), o = this.getMetadataForRegionOrCallingCode_(n, i), i = this.maybeGetFormattedExtension_(e, o, t), r = this.formatNsn_(r, o, t);
        return this.prefixNumberWithCountryCallingCode_(n, t, r, i)
    },g.phonenumbers.PhoneNumberUtil.prototype.formatByPattern = function (e, t, n) {
        var r = e.getCountryCodeOrDefault(), i = this.getNationalSignificantNumber(e);
        if (!this.hasValidCountryCallingCode_(r))return i;
        var o = this.getRegionCodeForCountryCode(r), o = this.getMetadataForRegionOrCallingCode_(r, o), a = this.chooseFormattingPatternForNumber_(n, i);
        if (null != a) {
            if (n = a.clone(), a = a.getNationalPrefixFormattingRuleOrDefault(), 0 < a.length) {
                var s = o.getNationalPrefixOrDefault();
                0 < s.length ? (a = a.replace(g.phonenumbers.PhoneNumberUtil.NP_PATTERN_, s).replace(g.phonenumbers.PhoneNumberUtil.FG_PATTERN_, "$1"), n.setNationalPrefixFormattingRule(a)) : n.clearNationalPrefixFormattingRule()
            }
            i = this.formatNsnUsingPattern_(i, n, t)
        }
        return e = this.maybeGetFormattedExtension_(e, o, t), this.prefixNumberWithCountryCallingCode_(r, t, i, e)
    },g.phonenumbers.PhoneNumberUtil.prototype.formatNationalNumberWithCarrierCode = function (e, t) {
        var n = e.getCountryCodeOrDefault(), r = this.getNationalSignificantNumber(e);
        if (!this.hasValidCountryCallingCode_(n))return r;
        var i = this.getRegionCodeForCountryCode(n), o = this.getMetadataForRegionOrCallingCode_(n, i), i = this.maybeGetFormattedExtension_(e, o, g.phonenumbers.PhoneNumberFormat.NATIONAL), r = this.formatNsn_(r, o, g.phonenumbers.PhoneNumberFormat.NATIONAL, t);
        return this.prefixNumberWithCountryCallingCode_(n, g.phonenumbers.PhoneNumberFormat.NATIONAL, r, i)
    },g.phonenumbers.PhoneNumberUtil.prototype.getMetadataForRegionOrCallingCode_ = function (e, t) {
        return g.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY == t ? this.getMetadataForNonGeographicalRegion(e) : this.getMetadataForRegion(t)
    },g.phonenumbers.PhoneNumberUtil.prototype.formatNationalNumberWithPreferredCarrierCode = function (e, t) {
        return this.formatNationalNumberWithCarrierCode(e, 0 < e.getPreferredDomesticCarrierCodeOrDefault().length ? e.getPreferredDomesticCarrierCodeOrDefault() : t)
    },g.phonenumbers.PhoneNumberUtil.prototype.formatNumberForMobileDialing = function (e, t, n) {
        var r = e.getCountryCodeOrDefault();
        if (!this.hasValidCountryCallingCode_(r))return e.hasRawInput() ? e.getRawInputOrDefault() : "";
        var i = "";
        e = e.clone(), e.clearExtension();
        var o = this.getRegionCodeForCountryCode(r), a = this.getNumberType(e), s = a != g.phonenumbers.PhoneNumberType.UNKNOWN;
        if (t == o)i = a == g.phonenumbers.PhoneNumberType.FIXED_LINE || a == g.phonenumbers.PhoneNumberType.MOBILE || a == g.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE, "CO" == o && a == g.phonenumbers.PhoneNumberType.FIXED_LINE ? i = this.formatNationalNumberWithCarrierCode(e, g.phonenumbers.PhoneNumberUtil.COLOMBIA_MOBILE_TO_FIXED_LINE_PREFIX_) : "BR" == o && i ? i = 0 < e.getPreferredDomesticCarrierCodeOrDefault().length ? this.formatNationalNumberWithPreferredCarrierCode(e, "") : "" : s && "HU" == o ? i = this.getNddPrefixForRegion(o, !0) + " " + this.format(e, g.phonenumbers.PhoneNumberFormat.NATIONAL) : r == g.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_ ? (t = this.getMetadataForRegion(t), i = this.canBeInternationallyDialled(e) && this.testNumberLength_(this.getNationalSignificantNumber(e), t.getGeneralDesc()) != g.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT ? this.format(e, g.phonenumbers.PhoneNumberFormat.INTERNATIONAL) : this.format(e, g.phonenumbers.PhoneNumberFormat.NATIONAL)) : i = (o == g.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY || ("MX" == o || "CL" == o) && i) && this.canBeInternationallyDialled(e) ? this.format(e, g.phonenumbers.PhoneNumberFormat.INTERNATIONAL) : this.format(e, g.phonenumbers.PhoneNumberFormat.NATIONAL); else if (s && this.canBeInternationallyDialled(e))return n ? this.format(e, g.phonenumbers.PhoneNumberFormat.INTERNATIONAL) : this.format(e, g.phonenumbers.PhoneNumberFormat.E164);
        return n ? i : g.phonenumbers.PhoneNumberUtil.normalizeHelper_(i, g.phonenumbers.PhoneNumberUtil.DIALLABLE_CHAR_MAPPINGS_, !0)
    },g.phonenumbers.PhoneNumberUtil.prototype.formatOutOfCountryCallingNumber = function (e, t) {
        if (!this.isValidRegionCode_(t))return this.format(e, g.phonenumbers.PhoneNumberFormat.INTERNATIONAL);
        var n = e.getCountryCodeOrDefault(), r = this.getNationalSignificantNumber(e);
        if (!this.hasValidCountryCallingCode_(n))return r;
        if (n == g.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_) {
            if (this.isNANPACountry(t))return n + " " + this.format(e, g.phonenumbers.PhoneNumberFormat.NATIONAL)
        } else if (n == this.getCountryCodeForValidRegion_(t))return this.format(e, g.phonenumbers.PhoneNumberFormat.NATIONAL);
        var i = this.getMetadataForRegion(t), o = i.getInternationalPrefixOrDefault(), a = "";
        return g.phonenumbers.PhoneNumberUtil.matchesEntirely_(g.phonenumbers.PhoneNumberUtil.UNIQUE_INTERNATIONAL_PREFIX_, o) ? a = o : i.hasPreferredInternationalPrefix() && (a = i.getPreferredInternationalPrefixOrDefault()), i = this.getRegionCodeForCountryCode(n), i = this.getMetadataForRegionOrCallingCode_(n, i), r = this.formatNsn_(r, i, g.phonenumbers.PhoneNumberFormat.INTERNATIONAL), i = this.maybeGetFormattedExtension_(e, i, g.phonenumbers.PhoneNumberFormat.INTERNATIONAL), 0 < a.length ? a + " " + n + " " + r + i : this.prefixNumberWithCountryCallingCode_(n, g.phonenumbers.PhoneNumberFormat.INTERNATIONAL, r, i)
    },g.phonenumbers.PhoneNumberUtil.prototype.formatInOriginalFormat = function (e, t) {
        if (e.hasRawInput() && (this.hasUnexpectedItalianLeadingZero_(e) || !this.hasFormattingPatternForNumber_(e)))return e.getRawInputOrDefault();
        if (!e.hasCountryCodeSource())return this.format(e, g.phonenumbers.PhoneNumberFormat.NATIONAL);
        var n;
        switch (e.getCountryCodeSource()) {
            case g.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN:
                n = this.format(e, g.phonenumbers.PhoneNumberFormat.INTERNATIONAL);
                break;
            case g.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_IDD:
                n = this.formatOutOfCountryCallingNumber(e, t);
                break;
            case g.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN:
                n = this.format(e, g.phonenumbers.PhoneNumberFormat.INTERNATIONAL).substring(1);
                break;
            default:
                var r = this.getRegionCodeForCountryCode(e.getCountryCodeOrDefault()), i = this.getNddPrefixForRegion(r, !0);
                if (n = this.format(e, g.phonenumbers.PhoneNumberFormat.NATIONAL), null != i && 0 != i.length && !this.rawInputContainsNationalPrefix_(e.getRawInputOrDefault(), i, r) && (r = this.getMetadataForRegion(r), i = this.getNationalSignificantNumber(e), r = this.chooseFormattingPatternForNumber_(r.numberFormatArray(), i), null != r)) {
                    var i = r.getNationalPrefixFormattingRuleOrDefault(), o = i.indexOf("$1");
                    0 >= o || (i = i.substring(0, o), i = g.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(i), 0 != i.length && (n = r.clone(), n.clearNationalPrefixFormattingRule(), n = this.formatByPattern(e, g.phonenumbers.PhoneNumberFormat.NATIONAL, [n])))
                }
        }
        return r = e.getRawInputOrDefault(), null != n && 0 < r.length && (i = g.phonenumbers.PhoneNumberUtil.normalizeHelper_(n, g.phonenumbers.PhoneNumberUtil.DIALLABLE_CHAR_MAPPINGS_, !0), o = g.phonenumbers.PhoneNumberUtil.normalizeHelper_(r, g.phonenumbers.PhoneNumberUtil.DIALLABLE_CHAR_MAPPINGS_, !0), i != o && (n = r)), n
    },g.phonenumbers.PhoneNumberUtil.prototype.rawInputContainsNationalPrefix_ = function (e, t, n) {
        if (e = g.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(e), m.string.startsWith(e, t))try {
            return this.isValidNumber(this.parse(e.substring(t.length), n))
        } catch (r) {
        }
        return !1
    },g.phonenumbers.PhoneNumberUtil.prototype.hasUnexpectedItalianLeadingZero_ = function (e) {
        return e.hasItalianLeadingZero() && !this.isLeadingZeroPossible(e.getCountryCodeOrDefault())
    },g.phonenumbers.PhoneNumberUtil.prototype.hasFormattingPatternForNumber_ = function (e) {
        var t = e.getCountryCodeOrDefault(), n = this.getRegionCodeForCountryCode(t), t = this.getMetadataForRegionOrCallingCode_(t, n);
        return null == t ? !1 : (e = this.getNationalSignificantNumber(e), null != this.chooseFormattingPatternForNumber_(t.numberFormatArray(), e))
    },g.phonenumbers.PhoneNumberUtil.prototype.formatOutOfCountryKeepingAlphaChars = function (e, t) {
        var n = e.getRawInputOrDefault();
        if (0 == n.length)return this.formatOutOfCountryCallingNumber(e, t);
        var r = e.getCountryCodeOrDefault();
        if (!this.hasValidCountryCallingCode_(r))return n;
        var n = g.phonenumbers.PhoneNumberUtil.normalizeHelper_(n, g.phonenumbers.PhoneNumberUtil.ALL_PLUS_NUMBER_GROUPING_SYMBOLS_, !0), i = this.getNationalSignificantNumber(e);
        if (3 < i.length) {
            var o = n.indexOf(i.substring(0, 3));
            -1 != o && (n = n.substring(o))
        }
        if (o = this.getMetadataForRegion(t), r == g.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_) {
            if (this.isNANPACountry(t))return r + " " + n
        } else if (null != o && r == this.getCountryCodeForValidRegion_(t))return r = this.chooseFormattingPatternForNumber_(o.numberFormatArray(), i), null == r ? n : (r = r.clone(), r.setPattern("(\\d+)(.*)"), r.setFormat("$1$2"), this.formatNsnUsingPattern_(n, r, g.phonenumbers.PhoneNumberFormat.NATIONAL));
        return i = "", null != o && (i = o.getInternationalPrefixOrDefault(), i = g.phonenumbers.PhoneNumberUtil.matchesEntirely_(g.phonenumbers.PhoneNumberUtil.UNIQUE_INTERNATIONAL_PREFIX_, i) ? i : o.getPreferredInternationalPrefixOrDefault()), o = this.getRegionCodeForCountryCode(r), o = this.getMetadataForRegionOrCallingCode_(r, o), o = this.maybeGetFormattedExtension_(e, o, g.phonenumbers.PhoneNumberFormat.INTERNATIONAL), 0 < i.length ? i + " " + r + " " + n + o : this.prefixNumberWithCountryCallingCode_(r, g.phonenumbers.PhoneNumberFormat.INTERNATIONAL, n, o)
    },g.phonenumbers.PhoneNumberUtil.prototype.getNationalSignificantNumber = function (e) {
        var t = "" + e.getNationalNumber();
        return e.hasItalianLeadingZero() && e.getItalianLeadingZero() ? Array(e.getNumberOfLeadingZerosOrDefault() + 1).join("0") + t : t
    },g.phonenumbers.PhoneNumberUtil.prototype.prefixNumberWithCountryCallingCode_ = function (e, t, n, r) {
        switch (t) {
            case g.phonenumbers.PhoneNumberFormat.E164:
                return g.phonenumbers.PhoneNumberUtil.PLUS_SIGN + e + n + r;
            case g.phonenumbers.PhoneNumberFormat.INTERNATIONAL:
                return g.phonenumbers.PhoneNumberUtil.PLUS_SIGN + e + " " + n + r;
            case g.phonenumbers.PhoneNumberFormat.RFC3966:
                return g.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_ + g.phonenumbers.PhoneNumberUtil.PLUS_SIGN + e + "-" + n + r;
            default:
                return n + r
        }
    },g.phonenumbers.PhoneNumberUtil.prototype.formatNsn_ = function (e, t, n, r) {
        return t = 0 == t.intlNumberFormatArray().length || n == g.phonenumbers.PhoneNumberFormat.NATIONAL ? t.numberFormatArray() : t.intlNumberFormatArray(), t = this.chooseFormattingPatternForNumber_(t, e), null == t ? e : this.formatNsnUsingPattern_(e, t, n, r)
    },g.phonenumbers.PhoneNumberUtil.prototype.chooseFormattingPatternForNumber_ = function (e, t) {
        for (var n, r = e.length, i = 0; r > i; ++i) {
            n = e[i];
            var o = n.leadingDigitsPatternCount();
            if ((0 == o || 0 == t.search(n.getLeadingDigitsPattern(o - 1))) && (o = new RegExp(n.getPattern()), g.phonenumbers.PhoneNumberUtil.matchesEntirely_(o, t)))return n
        }
        return null
    },g.phonenumbers.PhoneNumberUtil.prototype.formatNsnUsingPattern_ = function (e, t, n, r) {
        var i = t.getFormatOrDefault(), o = new RegExp(t.getPattern()), a = t.getDomesticCarrierCodeFormattingRuleOrDefault();
        return n == g.phonenumbers.PhoneNumberFormat.NATIONAL && null != r && 0 < r.length && 0 < a.length ? (t = a.replace(g.phonenumbers.PhoneNumberUtil.CC_PATTERN_, r), i = i.replace(g.phonenumbers.PhoneNumberUtil.FIRST_GROUP_PATTERN_, t), e = e.replace(o, i)) : (t = t.getNationalPrefixFormattingRuleOrDefault(), e = n == g.phonenumbers.PhoneNumberFormat.NATIONAL && null != t && 0 < t.length ? e.replace(o, i.replace(g.phonenumbers.PhoneNumberUtil.FIRST_GROUP_PATTERN_, t)) : e.replace(o, i)), n == g.phonenumbers.PhoneNumberFormat.RFC3966 && (e = e.replace(new RegExp("^" + g.phonenumbers.PhoneNumberUtil.SEPARATOR_PATTERN_), ""), e = e.replace(new RegExp(g.phonenumbers.PhoneNumberUtil.SEPARATOR_PATTERN_, "g"), "-")), e
    },g.phonenumbers.PhoneNumberUtil.prototype.getExampleNumber = function (e) {
        return this.getExampleNumberForType(e, g.phonenumbers.PhoneNumberType.FIXED_LINE)
    },g.phonenumbers.PhoneNumberUtil.prototype.getExampleNumberForType = function (e, t) {
        if (!this.isValidRegionCode_(e))return null;
        var n = this.getNumberDescByType_(this.getMetadataForRegion(e), t);
        try {
            if (n.hasExampleNumber())return this.parse(n.getExampleNumberOrDefault(), e)
        } catch (r) {
        }
        return null
    },g.phonenumbers.PhoneNumberUtil.prototype.getExampleNumberForNonGeoEntity = function (e) {
        var t = this.getMetadataForNonGeographicalRegion(e);
        if (null != t) {
            t = t.getGeneralDesc();
            try {
                if (t.hasExampleNumber())return this.parse("+" + e + t.getExampleNumber(), "ZZ")
            } catch (n) {
            }
        }
        return null
    },g.phonenumbers.PhoneNumberUtil.prototype.maybeGetFormattedExtension_ = function (e, t, n) {
        return e.hasExtension() && 0 != e.getExtension().length ? n == g.phonenumbers.PhoneNumberFormat.RFC3966 ? g.phonenumbers.PhoneNumberUtil.RFC3966_EXTN_PREFIX_ + e.getExtension() : t.hasPreferredExtnPrefix() ? t.getPreferredExtnPrefix() + e.getExtensionOrDefault() : g.phonenumbers.PhoneNumberUtil.DEFAULT_EXTN_PREFIX_ + e.getExtensionOrDefault() : ""
    },g.phonenumbers.PhoneNumberUtil.prototype.getNumberDescByType_ = function (e, t) {
        switch (t) {
            case g.phonenumbers.PhoneNumberType.PREMIUM_RATE:
                return e.getPremiumRate();
            case g.phonenumbers.PhoneNumberType.TOLL_FREE:
                return e.getTollFree();
            case g.phonenumbers.PhoneNumberType.MOBILE:
                return e.getMobile();
            case g.phonenumbers.PhoneNumberType.FIXED_LINE:
            case g.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE:
                return e.getFixedLine();
            case g.phonenumbers.PhoneNumberType.SHARED_COST:
                return e.getSharedCost();
            case g.phonenumbers.PhoneNumberType.VOIP:
                return e.getVoip();
            case g.phonenumbers.PhoneNumberType.PERSONAL_NUMBER:
                return e.getPersonalNumber();
            case g.phonenumbers.PhoneNumberType.PAGER:
                return e.getPager();
            case g.phonenumbers.PhoneNumberType.UAN:
                return e.getUan();
            case g.phonenumbers.PhoneNumberType.VOICEMAIL:
                return e.getVoicemail();
            default:
                return e.getGeneralDesc()
        }
    },g.phonenumbers.PhoneNumberUtil.prototype.getNumberType = function (e) {
        var t = this.getRegionCodeForNumber(e), t = this.getMetadataForRegionOrCallingCode_(e.getCountryCodeOrDefault(), t);
        return null == t ? g.phonenumbers.PhoneNumberType.UNKNOWN : (e = this.getNationalSignificantNumber(e), this.getNumberTypeHelper_(e, t))
    },g.phonenumbers.PhoneNumberUtil.prototype.getNumberTypeHelper_ = function (e, t) {
        return this.isNumberMatchingDesc_(e, t.getGeneralDesc()) ? this.isNumberMatchingDesc_(e, t.getPremiumRate()) ? g.phonenumbers.PhoneNumberType.PREMIUM_RATE : this.isNumberMatchingDesc_(e, t.getTollFree()) ? g.phonenumbers.PhoneNumberType.TOLL_FREE : this.isNumberMatchingDesc_(e, t.getSharedCost()) ? g.phonenumbers.PhoneNumberType.SHARED_COST : this.isNumberMatchingDesc_(e, t.getVoip()) ? g.phonenumbers.PhoneNumberType.VOIP : this.isNumberMatchingDesc_(e, t.getPersonalNumber()) ? g.phonenumbers.PhoneNumberType.PERSONAL_NUMBER : this.isNumberMatchingDesc_(e, t.getPager()) ? g.phonenumbers.PhoneNumberType.PAGER : this.isNumberMatchingDesc_(e, t.getUan()) ? g.phonenumbers.PhoneNumberType.UAN : this.isNumberMatchingDesc_(e, t.getVoicemail()) ? g.phonenumbers.PhoneNumberType.VOICEMAIL : this.isNumberMatchingDesc_(e, t.getFixedLine()) ? t.getSameMobileAndFixedLinePattern() || this.isNumberMatchingDesc_(e, t.getMobile()) ? g.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE : g.phonenumbers.PhoneNumberType.FIXED_LINE : !t.getSameMobileAndFixedLinePattern() && this.isNumberMatchingDesc_(e, t.getMobile()) ? g.phonenumbers.PhoneNumberType.MOBILE : g.phonenumbers.PhoneNumberType.UNKNOWN : g.phonenumbers.PhoneNumberType.UNKNOWN
    },g.phonenumbers.PhoneNumberUtil.prototype.getMetadataForRegion = function (e) {
        if (null == e)return null;
        e = e.toUpperCase();
        var t = this.regionToMetadataMap[e];
        if (null == t) {
            var t = new m.proto2.PbLiteSerializer, n = g.phonenumbers.metadata.countryToMetadata[e];
            if (null == n)return null;
            t = t.deserialize(g.phonenumbers.PhoneMetadata.getDescriptor(), n), this.regionToMetadataMap[e] = t
        }
        return t
    },g.phonenumbers.PhoneNumberUtil.prototype.getMetadataForNonGeographicalRegion = function (e) {
        return this.getMetadataForRegion("" + e)
    },g.phonenumbers.PhoneNumberUtil.prototype.isNumberMatchingDesc_ = function (e, t) {
        var n = e.length;
        return 0 < t.possibleLengthCount() && -1 == m.array.indexOf(t.possibleLengthArray(), n) ? !1 : g.phonenumbers.PhoneNumberUtil.matchesEntirely_(t.getNationalNumberPatternOrDefault(), e)
    },g.phonenumbers.PhoneNumberUtil.prototype.isValidNumber = function (e) {
        var t = this.getRegionCodeForNumber(e);
        return this.isValidNumberForRegion(e, t)
    },g.phonenumbers.PhoneNumberUtil.prototype.isValidNumberForRegion = function (e, t) {
        var n = e.getCountryCodeOrDefault(), r = this.getMetadataForRegionOrCallingCode_(n, t);
        return null == r || g.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY != t && n != this.getCountryCodeForValidRegion_(t) ? !1 : (n = this.getNationalSignificantNumber(e), this.getNumberTypeHelper_(n, r) != g.phonenumbers.PhoneNumberType.UNKNOWN)
    },g.phonenumbers.PhoneNumberUtil.prototype.getRegionCodeForNumber = function (e) {
        if (null == e)return null;
        var t = e.getCountryCodeOrDefault(), t = g.phonenumbers.metadata.countryCodeToRegionCodeMap[t];
        return null == t ? null : 1 == t.length ? t[0] : this.getRegionCodeForNumberFromRegionList_(e, t)
    },g.phonenumbers.PhoneNumberUtil.prototype.getRegionCodeForNumberFromRegionList_ = function (e, t) {
        for (var n, r = this.getNationalSignificantNumber(e), i = t.length, o = 0; i > o; o++) {
            n = t[o];
            var a = this.getMetadataForRegion(n);
            if (a.hasLeadingDigits()) {
                if (0 == r.search(a.getLeadingDigits()))return n
            } else if (this.getNumberTypeHelper_(r, a) != g.phonenumbers.PhoneNumberType.UNKNOWN)return n
        }
        return null
    },g.phonenumbers.PhoneNumberUtil.prototype.getRegionCodeForCountryCode = function (e) {
        return e = g.phonenumbers.metadata.countryCodeToRegionCodeMap[e], null == e ? g.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_ : e[0]
    },g.phonenumbers.PhoneNumberUtil.prototype.getRegionCodesForCountryCode = function (e) {
        return e = g.phonenumbers.metadata.countryCodeToRegionCodeMap[e], null == e ? [] : e
    },g.phonenumbers.PhoneNumberUtil.prototype.getCountryCodeForRegion = function (e) {
        return this.isValidRegionCode_(e) ? this.getCountryCodeForValidRegion_(e) : 0
    },g.phonenumbers.PhoneNumberUtil.prototype.getCountryCodeForValidRegion_ = function (e) {
        var t = this.getMetadataForRegion(e);
        if (null == t)throw"Invalid region code: " + e;
        return t.getCountryCodeOrDefault()
    },g.phonenumbers.PhoneNumberUtil.prototype.getNddPrefixForRegion = function (e, t) {
        var n = this.getMetadataForRegion(e);
        return null == n ? null : (n = n.getNationalPrefixOrDefault(), 0 == n.length ? null : (t && (n = n.replace("~", "")), n))
    },g.phonenumbers.PhoneNumberUtil.prototype.isNANPACountry = function (e) {
        return null != e && m.array.contains(g.phonenumbers.metadata.countryCodeToRegionCodeMap[g.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_], e.toUpperCase())
    },g.phonenumbers.PhoneNumberUtil.prototype.isLeadingZeroPossible = function (e) {
        return e = this.getMetadataForRegionOrCallingCode_(e, this.getRegionCodeForCountryCode(e)), null != e && e.getLeadingZeroPossibleOrDefault()
    },g.phonenumbers.PhoneNumberUtil.prototype.isAlphaNumber = function (e) {
        return g.phonenumbers.PhoneNumberUtil.isViablePhoneNumber(e) ? (e = new m.string.StringBuffer(e), this.maybeStripExtension(e), g.phonenumbers.PhoneNumberUtil.matchesEntirely_(g.phonenumbers.PhoneNumberUtil.VALID_ALPHA_PHONE_PATTERN_, e.toString())) : !1
    },g.phonenumbers.PhoneNumberUtil.prototype.isPossibleNumber = function (e) {
        return this.isPossibleNumberWithReason(e) == g.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE
    },g.phonenumbers.PhoneNumberUtil.prototype.testNumberLength_ = function (e, t) {
        var n = t.possibleLengthArray(), r = t.possibleLengthLocalOnlyArray(), i = e.length;
        return -1 < m.array.indexOf(r, i) ? g.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE : (r = n[0], r == i ? g.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE : r > i ? g.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT : n[n.length - 1] < i ? g.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_LONG : -1 < m.array.indexOf(n, i, 1) ? g.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE : g.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_LONG)
    },g.phonenumbers.PhoneNumberUtil.prototype.isPossibleNumberWithReason = function (e) {
        var t = this.getNationalSignificantNumber(e);
        if (e = e.getCountryCodeOrDefault(), !this.hasValidCountryCallingCode_(e))return g.phonenumbers.PhoneNumberUtil.ValidationResult.INVALID_COUNTRY_CODE;
        var n = this.getRegionCodeForCountryCode(e);
        return e = this.getMetadataForRegionOrCallingCode_(e, n), this.testNumberLength_(t, e.getGeneralDesc())
    },g.phonenumbers.PhoneNumberUtil.prototype.isPossibleNumberString = function (e, t) {
        try {
            return this.isPossibleNumber(this.parse(e, t))
        } catch (n) {
            return !1
        }
    },g.phonenumbers.PhoneNumberUtil.prototype.truncateTooLongNumber = function (e) {
        if (this.isValidNumber(e))return !0;
        var t = e.clone(), n = e.getNationalNumberOrDefault();
        do if (n = Math.floor(n / 10), t.setNationalNumber(n), 0 == n || this.isPossibleNumberWithReason(t) == g.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT)return !1; while (!this.isValidNumber(t));
        return e.setNationalNumber(n), !0
    },g.phonenumbers.PhoneNumberUtil.prototype.extractCountryCode = function (e, t) {
        var n = e.toString();
        if (0 == n.length || "0" == n.charAt(0))return 0;
        for (var r, i = n.length, o = 1; o <= g.phonenumbers.PhoneNumberUtil.MAX_LENGTH_COUNTRY_CODE_ && i >= o; ++o)if (r = parseInt(n.substring(0, o), 10), r in g.phonenumbers.metadata.countryCodeToRegionCodeMap)return t.append(n.substring(o)), r;
        return 0
    },g.phonenumbers.PhoneNumberUtil.prototype.maybeExtractCountryCode = function (e, t, n, r, i) {
        if (0 == e.length)return 0;
        e = new m.string.StringBuffer(e);
        var o;
        if (null != t && (o = t.getInternationalPrefix()), null == o && (o = "NonMatch"), o = this.maybeStripInternationalPrefixAndNormalize(e, o), r && i.setCountryCodeSource(o), o != g.phonenumbers.PhoneNumber.CountryCodeSource.FROM_DEFAULT_COUNTRY) {
            if (e.getLength() <= g.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_)throw g.phonenumbers.Error.TOO_SHORT_AFTER_IDD;
            if (n = this.extractCountryCode(e, n), 0 != n)return i.setCountryCode(n), n;
            throw g.phonenumbers.Error.INVALID_COUNTRY_CODE
        }
        if (null != t) {
            o = t.getCountryCodeOrDefault();
            var a = "" + o, s = e.toString();
            if (m.string.startsWith(s, a)) {
                var u = new m.string.StringBuffer(s.substring(a.length)), a = t.getGeneralDesc(), s = new RegExp(a.getNationalNumberPatternOrDefault());
                if (this.maybeStripNationalPrefixAndCarrierCode(u, t, null), t = u.toString(), !g.phonenumbers.PhoneNumberUtil.matchesEntirely_(s, e.toString()) && g.phonenumbers.PhoneNumberUtil.matchesEntirely_(s, t) || this.testNumberLength_(e.toString(), a) == g.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_LONG)return n.append(t), r && i.setCountryCodeSource(g.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN), i.setCountryCode(o), o
            }
        }
        return i.setCountryCode(0), 0
    },g.phonenumbers.PhoneNumberUtil.prototype.parsePrefixAsIdd_ = function (e, t) {
        var n = t.toString();
        if (0 == n.search(e)) {
            var r = n.match(e)[0].length, i = n.substring(r).match(g.phonenumbers.PhoneNumberUtil.CAPTURING_DIGIT_PATTERN);
            return i && null != i[1] && 0 < i[1].length && "0" == g.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(i[1]) ? !1 : (t.clear(), t.append(n.substring(r)), !0)
        }
        return !1
    },g.phonenumbers.PhoneNumberUtil.prototype.maybeStripInternationalPrefixAndNormalize = function (e, t) {
        var n = e.toString();
        return 0 == n.length ? g.phonenumbers.PhoneNumber.CountryCodeSource.FROM_DEFAULT_COUNTRY : g.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_.test(n) ? (n = n.replace(g.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_, ""),
            e.clear(), e.append(g.phonenumbers.PhoneNumberUtil.normalize(n)), g.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN) : (n = new RegExp(t), g.phonenumbers.PhoneNumberUtil.normalizeSB_(e), this.parsePrefixAsIdd_(n, e) ? g.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_IDD : g.phonenumbers.PhoneNumber.CountryCodeSource.FROM_DEFAULT_COUNTRY)
    },g.phonenumbers.PhoneNumberUtil.prototype.maybeStripNationalPrefixAndCarrierCode = function (e, t, n) {
        var r = e.toString(), i = r.length, o = t.getNationalPrefixForParsing();
        if (0 == i || null == o || 0 == o.length)return !1;
        var a = new RegExp("^(?:" + o + ")");
        if (i = a.exec(r)) {
            var o = new RegExp(t.getGeneralDesc().getNationalNumberPatternOrDefault()), s = g.phonenumbers.PhoneNumberUtil.matchesEntirely_(o, r), u = i.length - 1;
            if (t = t.getNationalPrefixTransformRule(), null == t || 0 == t.length || null == i[u] || 0 == i[u].length) {
                if (s && !g.phonenumbers.PhoneNumberUtil.matchesEntirely_(o, r.substring(i[0].length)))return !1;
                null != n && u > 0 && null != i[u] && n.append(i[1]), e.set(r.substring(i[0].length))
            } else {
                if (r = r.replace(a, t), s && !g.phonenumbers.PhoneNumberUtil.matchesEntirely_(o, r))return !1;
                null != n && u > 0 && n.append(i[1]), e.set(r)
            }
            return !0
        }
        return !1
    },g.phonenumbers.PhoneNumberUtil.prototype.maybeStripExtension = function (e) {
        var t = e.toString(), n = t.search(g.phonenumbers.PhoneNumberUtil.EXTN_PATTERN_);
        if (n >= 0 && g.phonenumbers.PhoneNumberUtil.isViablePhoneNumber(t.substring(0, n)))for (var r = t.match(g.phonenumbers.PhoneNumberUtil.EXTN_PATTERN_), i = r.length, o = 1; i > o; ++o)if (null != r[o] && 0 < r[o].length)return e.clear(), e.append(t.substring(0, n)), r[o];
        return ""
    },g.phonenumbers.PhoneNumberUtil.prototype.checkRegionForParsing_ = function (e, t) {
        return this.isValidRegionCode_(t) || null != e && 0 < e.length && g.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_.test(e)
    },g.phonenumbers.PhoneNumberUtil.prototype.parse = function (e, t) {
        return this.parseHelper_(e, t, !1, !0)
    },g.phonenumbers.PhoneNumberUtil.prototype.parseAndKeepRawInput = function (e, t) {
        if (!this.isValidRegionCode_(t) && 0 < e.length && e.charAt(0) != g.phonenumbers.PhoneNumberUtil.PLUS_SIGN)throw g.phonenumbers.Error.INVALID_COUNTRY_CODE;
        return this.parseHelper_(e, t, !0, !0)
    },g.phonenumbers.PhoneNumberUtil.prototype.setItalianLeadingZerosForPhoneNumber_ = function (e, t) {
        if (1 < e.length && "0" == e.charAt(0)) {
            t.setItalianLeadingZero(!0);
            for (var n = 1; n < e.length - 1 && "0" == e.charAt(n);)n++;
            1 != n && t.setNumberOfLeadingZeros(n)
        }
    },g.phonenumbers.PhoneNumberUtil.prototype.parseHelper_ = function (e, t, n, r) {
        if (null == e)throw g.phonenumbers.Error.NOT_A_NUMBER;
        if (e.length > g.phonenumbers.PhoneNumberUtil.MAX_INPUT_STRING_LENGTH_)throw g.phonenumbers.Error.TOO_LONG;
        var i = new m.string.StringBuffer;
        if (this.buildNationalNumberForParsing_(e, i), !g.phonenumbers.PhoneNumberUtil.isViablePhoneNumber(i.toString()))throw g.phonenumbers.Error.NOT_A_NUMBER;
        if (r && !this.checkRegionForParsing_(i.toString(), t))throw g.phonenumbers.Error.INVALID_COUNTRY_CODE;
        r = new g.phonenumbers.PhoneNumber, n && r.setRawInput(e), e = this.maybeStripExtension(i), 0 < e.length && r.setExtension(e), e = this.getMetadataForRegion(t);
        var o = new m.string.StringBuffer, a = 0, s = i.toString();
        try {
            a = this.maybeExtractCountryCode(s, e, o, n, r)
        } catch (u) {
            if (u != g.phonenumbers.Error.INVALID_COUNTRY_CODE || !g.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_.test(s))throw u;
            if (s = s.replace(g.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_, ""), a = this.maybeExtractCountryCode(s, e, o, n, r), 0 == a)throw u
        }
        if (0 != a ? (i = this.getRegionCodeForCountryCode(a), i != t && (e = this.getMetadataForRegionOrCallingCode_(a, i))) : (g.phonenumbers.PhoneNumberUtil.normalizeSB_(i), o.append(i.toString()), null != t ? (a = e.getCountryCodeOrDefault(), r.setCountryCode(a)) : n && r.clearCountryCodeSource()), o.getLength() < g.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_)throw g.phonenumbers.Error.TOO_SHORT_NSN;
        if (null != e && (t = new m.string.StringBuffer, i = new m.string.StringBuffer(o.toString()), this.maybeStripNationalPrefixAndCarrierCode(i, e, t), this.testNumberLength_(i.toString(), e.getGeneralDesc()) != g.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT && (o = i, n && 0 < t.toString().length && r.setPreferredDomesticCarrierCode(t.toString()))), n = o.toString(), t = n.length, t < g.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_)throw g.phonenumbers.Error.TOO_SHORT_NSN;
        if (t > g.phonenumbers.PhoneNumberUtil.MAX_LENGTH_FOR_NSN_)throw g.phonenumbers.Error.TOO_LONG;
        return this.setItalianLeadingZerosForPhoneNumber_(n, r), r.setNationalNumber(parseInt(n, 10)), r
    },g.phonenumbers.PhoneNumberUtil.prototype.buildNationalNumberForParsing_ = function (e, t) {
        var n = e.indexOf(g.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_CONTEXT_);
        if (n > 0) {
            var r = n + g.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_CONTEXT_.length;
            if (e.charAt(r) == g.phonenumbers.PhoneNumberUtil.PLUS_SIGN) {
                var i = e.indexOf(";", r);
                i > 0 ? t.append(e.substring(r, i)) : t.append(e.substring(r))
            }
            r = e.indexOf(g.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_), t.append(e.substring(r >= 0 ? r + g.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_.length : 0, n))
        } else t.append(g.phonenumbers.PhoneNumberUtil.extractPossibleNumber(e));
        n = t.toString(), r = n.indexOf(g.phonenumbers.PhoneNumberUtil.RFC3966_ISDN_SUBADDRESS_), r > 0 && (t.clear(), t.append(n.substring(0, r)))
    },g.phonenumbers.PhoneNumberUtil.prototype.isNumberMatch = function (e, t) {
        var n, r;
        if ("string" == typeof e)try {
            n = this.parse(e, g.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_)
        } catch (i) {
            if (i != g.phonenumbers.Error.INVALID_COUNTRY_CODE)return g.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER;
            if ("string" != typeof t) {
                var o = this.getRegionCodeForCountryCode(t.getCountryCodeOrDefault());
                if (o != g.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_) {
                    try {
                        n = this.parse(e, o)
                    } catch (a) {
                        return g.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER
                    }
                    return n = this.isNumberMatch(n, t), n == g.phonenumbers.PhoneNumberUtil.MatchType.EXACT_MATCH ? g.phonenumbers.PhoneNumberUtil.MatchType.NSN_MATCH : n
                }
            }
            try {
                n = this.parseHelper_(e, null, !1, !1)
            } catch (a) {
                return g.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER
            }
        } else n = e.clone();
        if ("string" == typeof t)try {
            return r = this.parse(t, g.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_), this.isNumberMatch(e, r)
        } catch (i) {
            return i != g.phonenumbers.Error.INVALID_COUNTRY_CODE ? g.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER : this.isNumberMatch(t, n)
        } else r = t.clone();
        if (n.clearRawInput(), n.clearCountryCodeSource(), n.clearPreferredDomesticCarrierCode(), r.clearRawInput(), r.clearCountryCodeSource(), r.clearPreferredDomesticCarrierCode(), n.hasExtension() && 0 == n.getExtension().length && n.clearExtension(), r.hasExtension() && 0 == r.getExtension().length && r.clearExtension(), n.hasExtension() && r.hasExtension() && n.getExtension() != r.getExtension())return g.phonenumbers.PhoneNumberUtil.MatchType.NO_MATCH;
        var o = n.getCountryCodeOrDefault(), s = r.getCountryCodeOrDefault();
        return 0 != o && 0 != s ? n.equals(r) ? g.phonenumbers.PhoneNumberUtil.MatchType.EXACT_MATCH : o == s && this.isNationalNumberSuffixOfTheOther_(n, r) ? g.phonenumbers.PhoneNumberUtil.MatchType.SHORT_NSN_MATCH : g.phonenumbers.PhoneNumberUtil.MatchType.NO_MATCH : (n.setCountryCode(0), r.setCountryCode(0), n.equals(r) ? g.phonenumbers.PhoneNumberUtil.MatchType.NSN_MATCH : this.isNationalNumberSuffixOfTheOther_(n, r) ? g.phonenumbers.PhoneNumberUtil.MatchType.SHORT_NSN_MATCH : g.phonenumbers.PhoneNumberUtil.MatchType.NO_MATCH)
    },g.phonenumbers.PhoneNumberUtil.prototype.isNationalNumberSuffixOfTheOther_ = function (e, t) {
        var n = "" + e.getNationalNumber(), r = "" + t.getNationalNumber();
        return m.string.endsWith(n, r) || m.string.endsWith(r, n)
    },g.phonenumbers.PhoneNumberUtil.prototype.canBeInternationallyDialled = function (e) {
        var t = this.getMetadataForRegion(this.getRegionCodeForNumber(e));
        return null == t ? !0 : (e = this.getNationalSignificantNumber(e), !this.isNumberMatchingDesc_(e, t.getNoInternationalDialling()))
    },g.phonenumbers.PhoneNumberUtil.matchesEntirely_ = function (e, t) {
        var n = "string" == typeof e ? t.match("^(?:" + e + ")$") : t.match(e);
        return n && n[0].length == t.length ? !0 : !1
    },g.phonenumbers.AsYouTypeFormatter = function (e) {
        this.DIGIT_PLACEHOLDER_ = "\u2008", this.DIGIT_PATTERN_ = new RegExp(this.DIGIT_PLACEHOLDER_), this.currentOutput_ = "", this.formattingTemplate_ = new m.string.StringBuffer, this.currentFormattingPattern_ = "", this.accruedInput_ = new m.string.StringBuffer, this.accruedInputWithoutFormatting_ = new m.string.StringBuffer, this.ableToFormat_ = !0, this.isExpectingCountryCallingCode_ = this.isCompleteNumber_ = this.inputHasFormatting_ = !1, this.phoneUtil_ = g.phonenumbers.PhoneNumberUtil.getInstance(), this.positionToRemember_ = this.originalPosition_ = this.lastMatchPosition_ = 0, this.prefixBeforeNationalNumber_ = new m.string.StringBuffer, this.shouldAddSpaceAfterNationalPrefix_ = !1, this.extractedNationalPrefix_ = "", this.nationalNumber_ = new m.string.StringBuffer, this.possibleFormats_ = [], this.defaultCountry_ = e, this.defaultMetadata_ = this.currentMetadata_ = this.getMetadataForRegion_(this.defaultCountry_)
    },g.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_ = " ",g.phonenumbers.AsYouTypeFormatter.EMPTY_METADATA_ = new g.phonenumbers.PhoneMetadata,g.phonenumbers.AsYouTypeFormatter.EMPTY_METADATA_.setInternationalPrefix("NA"),g.phonenumbers.AsYouTypeFormatter.CHARACTER_CLASS_PATTERN_ = /\[([^\[\]])*\]/g,g.phonenumbers.AsYouTypeFormatter.STANDALONE_DIGIT_PATTERN_ = /\d(?=[^,}][^,}])/g,g.phonenumbers.AsYouTypeFormatter.ELIGIBLE_FORMAT_PATTERN_ = new RegExp("^[" + g.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + "]*(\\$\\d[" + g.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + "]*)+$"),g.phonenumbers.AsYouTypeFormatter.NATIONAL_PREFIX_SEPARATORS_PATTERN_ = /[- ]/,g.phonenumbers.AsYouTypeFormatter.MIN_LEADING_DIGITS_LENGTH_ = 3,g.phonenumbers.AsYouTypeFormatter.prototype.getMetadataForRegion_ = function (e) {
        return e = this.phoneUtil_.getCountryCodeForRegion(e), e = this.phoneUtil_.getRegionCodeForCountryCode(e), e = this.phoneUtil_.getMetadataForRegion(e), null != e ? e : g.phonenumbers.AsYouTypeFormatter.EMPTY_METADATA_
    },g.phonenumbers.AsYouTypeFormatter.prototype.maybeCreateNewTemplate_ = function () {
        for (var e = this.possibleFormats_.length, t = 0; e > t; ++t) {
            var n = this.possibleFormats_[t], r = n.getPatternOrDefault();
            if (this.currentFormattingPattern_ == r)return !1;
            if (this.createFormattingTemplate_(n))return this.currentFormattingPattern_ = r, this.shouldAddSpaceAfterNationalPrefix_ = g.phonenumbers.AsYouTypeFormatter.NATIONAL_PREFIX_SEPARATORS_PATTERN_.test(n.getNationalPrefixFormattingRule()), this.lastMatchPosition_ = 0, !0
        }
        return this.ableToFormat_ = !1
    },g.phonenumbers.AsYouTypeFormatter.prototype.getAvailableFormats_ = function (e) {
        for (var t = this.isCompleteNumber_ && 0 < this.currentMetadata_.intlNumberFormatCount() ? this.currentMetadata_.intlNumberFormatArray() : this.currentMetadata_.numberFormatArray(), n = t.length, r = 0; n > r; ++r) {
            var i = t[r];
            (!this.currentMetadata_.hasNationalPrefix() || this.isCompleteNumber_ || i.getNationalPrefixOptionalWhenFormatting() || this.phoneUtil_.formattingRuleHasFirstGroupOnly(i.getNationalPrefixFormattingRuleOrDefault())) && this.isFormatEligible_(i.getFormatOrDefault()) && this.possibleFormats_.push(i)
        }
        this.narrowDownPossibleFormats_(e)
    },g.phonenumbers.AsYouTypeFormatter.prototype.isFormatEligible_ = function (e) {
        return g.phonenumbers.AsYouTypeFormatter.ELIGIBLE_FORMAT_PATTERN_.test(e)
    },g.phonenumbers.AsYouTypeFormatter.prototype.narrowDownPossibleFormats_ = function (e) {
        for (var t = [], n = e.length - g.phonenumbers.AsYouTypeFormatter.MIN_LEADING_DIGITS_LENGTH_, r = this.possibleFormats_.length, i = 0; r > i; ++i) {
            var o = this.possibleFormats_[i];
            if (0 == o.leadingDigitsPatternCount())t.push(this.possibleFormats_[i]); else {
                var a = Math.min(n, o.leadingDigitsPatternCount() - 1), o = o.getLeadingDigitsPattern(a);
                0 == e.search(o) && t.push(this.possibleFormats_[i])
            }
        }
        this.possibleFormats_ = t
    },g.phonenumbers.AsYouTypeFormatter.prototype.createFormattingTemplate_ = function (e) {
        var t = e.getPatternOrDefault();
        return -1 != t.indexOf("|") ? !1 : (t = t.replace(g.phonenumbers.AsYouTypeFormatter.CHARACTER_CLASS_PATTERN_, "\\d"), t = t.replace(g.phonenumbers.AsYouTypeFormatter.STANDALONE_DIGIT_PATTERN_, "\\d"), this.formattingTemplate_.clear(), e = this.getFormattingTemplate_(t, e.getFormatOrDefault()), 0 < e.length ? (this.formattingTemplate_.append(e), !0) : !1)
    },g.phonenumbers.AsYouTypeFormatter.prototype.getFormattingTemplate_ = function (e, t) {
        var n = "999999999999999".match(e)[0];
        return n.length < this.nationalNumber_.getLength() ? "" : (n = n.replace(new RegExp(e, "g"), t), n = n.replace(RegExp("9", "g"), this.DIGIT_PLACEHOLDER_))
    },g.phonenumbers.AsYouTypeFormatter.prototype.clear = function () {
        this.currentOutput_ = "", this.accruedInput_.clear(), this.accruedInputWithoutFormatting_.clear(), this.formattingTemplate_.clear(), this.lastMatchPosition_ = 0, this.currentFormattingPattern_ = "", this.prefixBeforeNationalNumber_.clear(), this.extractedNationalPrefix_ = "", this.nationalNumber_.clear(), this.ableToFormat_ = !0, this.inputHasFormatting_ = !1, this.originalPosition_ = this.positionToRemember_ = 0, this.isExpectingCountryCallingCode_ = this.isCompleteNumber_ = !1, this.possibleFormats_ = [], this.shouldAddSpaceAfterNationalPrefix_ = !1, this.currentMetadata_ != this.defaultMetadata_ && (this.currentMetadata_ = this.getMetadataForRegion_(this.defaultCountry_))
    },g.phonenumbers.AsYouTypeFormatter.prototype.inputDigit = function (e) {
        return this.currentOutput_ = this.inputDigitWithOptionToRememberPosition_(e, !1)
    },g.phonenumbers.AsYouTypeFormatter.prototype.inputDigitAndRememberPosition = function (e) {
        return this.currentOutput_ = this.inputDigitWithOptionToRememberPosition_(e, !0)
    },g.phonenumbers.AsYouTypeFormatter.prototype.inputDigitWithOptionToRememberPosition_ = function (e, t) {
        if (this.accruedInput_.append(e), t && (this.originalPosition_ = this.accruedInput_.getLength()), this.isDigitOrLeadingPlusSign_(e) ? e = this.normalizeAndAccrueDigitsAndPlusSign_(e, t) : (this.ableToFormat_ = !1, this.inputHasFormatting_ = !0), !this.ableToFormat_) {
            if (!this.inputHasFormatting_)if (this.attemptToExtractIdd_()) {
                if (this.attemptToExtractCountryCallingCode_())return this.attemptToChoosePatternWithPrefixExtracted_()
            } else if (this.ableToExtractLongerNdd_())return this.prefixBeforeNationalNumber_.append(g.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_), this.attemptToChoosePatternWithPrefixExtracted_();
            return this.accruedInput_.toString()
        }
        switch (this.accruedInputWithoutFormatting_.getLength()) {
            case 0:
            case 1:
            case 2:
                return this.accruedInput_.toString();
            case 3:
                if (!this.attemptToExtractIdd_())return this.extractedNationalPrefix_ = this.removeNationalPrefixFromNationalNumber_(), this.attemptToChooseFormattingPattern_();
                this.isExpectingCountryCallingCode_ = !0;
            default:
                if (this.isExpectingCountryCallingCode_)return this.attemptToExtractCountryCallingCode_() && (this.isExpectingCountryCallingCode_ = !1), this.prefixBeforeNationalNumber_.toString() + this.nationalNumber_.toString();
                if (0 < this.possibleFormats_.length) {
                    var n = this.inputDigitHelper_(e), r = this.attemptToFormatAccruedDigits_();
                    return 0 < r.length ? r : (this.narrowDownPossibleFormats_(this.nationalNumber_.toString()), this.maybeCreateNewTemplate_() ? this.inputAccruedNationalNumber_() : this.ableToFormat_ ? this.appendNationalNumber_(n) : this.accruedInput_.toString())
                }
                return this.attemptToChooseFormattingPattern_()
        }
    },g.phonenumbers.AsYouTypeFormatter.prototype.attemptToChoosePatternWithPrefixExtracted_ = function () {
        return this.ableToFormat_ = !0, this.isExpectingCountryCallingCode_ = !1, this.possibleFormats_ = [], this.lastMatchPosition_ = 0, this.formattingTemplate_.clear(), this.currentFormattingPattern_ = "", this.attemptToChooseFormattingPattern_()
    },g.phonenumbers.AsYouTypeFormatter.prototype.getExtractedNationalPrefix_ = function () {
        return this.extractedNationalPrefix_
    },g.phonenumbers.AsYouTypeFormatter.prototype.ableToExtractLongerNdd_ = function () {
        if (0 < this.extractedNationalPrefix_.length) {
            var e = this.nationalNumber_.toString();
            this.nationalNumber_.clear(), this.nationalNumber_.append(this.extractedNationalPrefix_), this.nationalNumber_.append(e);
            var e = this.prefixBeforeNationalNumber_.toString(), t = e.lastIndexOf(this.extractedNationalPrefix_);
            this.prefixBeforeNationalNumber_.clear(), this.prefixBeforeNationalNumber_.append(e.substring(0, t))
        }
        return this.extractedNationalPrefix_ != this.removeNationalPrefixFromNationalNumber_()
    },g.phonenumbers.AsYouTypeFormatter.prototype.isDigitOrLeadingPlusSign_ = function (e) {
        return g.phonenumbers.PhoneNumberUtil.CAPTURING_DIGIT_PATTERN.test(e) || 1 == this.accruedInput_.getLength() && g.phonenumbers.PhoneNumberUtil.PLUS_CHARS_PATTERN.test(e)
    },g.phonenumbers.AsYouTypeFormatter.prototype.attemptToFormatAccruedDigits_ = function () {
        for (var e = this.nationalNumber_.toString(), t = this.possibleFormats_.length, n = 0; t > n; ++n) {
            var r = this.possibleFormats_[n], i = r.getPatternOrDefault();
            if (new RegExp("^(?:" + i + ")$").test(e))return this.shouldAddSpaceAfterNationalPrefix_ = g.phonenumbers.AsYouTypeFormatter.NATIONAL_PREFIX_SEPARATORS_PATTERN_.test(r.getNationalPrefixFormattingRule()), e = e.replace(new RegExp(i, "g"), r.getFormat()), this.appendNationalNumber_(e)
        }
        return ""
    },g.phonenumbers.AsYouTypeFormatter.prototype.appendNationalNumber_ = function (e) {
        var t = this.prefixBeforeNationalNumber_.getLength();
        return this.shouldAddSpaceAfterNationalPrefix_ && t > 0 && this.prefixBeforeNationalNumber_.toString().charAt(t - 1) != g.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_ ? this.prefixBeforeNationalNumber_ + g.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_ + e : this.prefixBeforeNationalNumber_ + e
    },g.phonenumbers.AsYouTypeFormatter.prototype.getRememberedPosition = function () {
        if (!this.ableToFormat_)return this.originalPosition_;
        for (var e = 0, t = 0, n = this.accruedInputWithoutFormatting_.toString(), r = this.currentOutput_.toString(); e < this.positionToRemember_ && t < r.length;)n.charAt(e) == r.charAt(t) && e++, t++;
        return t
    },g.phonenumbers.AsYouTypeFormatter.prototype.attemptToChooseFormattingPattern_ = function () {
        var e = this.nationalNumber_.toString();
        return e.length >= g.phonenumbers.AsYouTypeFormatter.MIN_LEADING_DIGITS_LENGTH_ ? (this.getAvailableFormats_(e), e = this.attemptToFormatAccruedDigits_(), 0 < e.length ? e : this.maybeCreateNewTemplate_() ? this.inputAccruedNationalNumber_() : this.accruedInput_.toString()) : this.appendNationalNumber_(e)
    },g.phonenumbers.AsYouTypeFormatter.prototype.inputAccruedNationalNumber_ = function () {
        var e = this.nationalNumber_.toString(), t = e.length;
        if (t > 0) {
            for (var n = "", r = 0; t > r; r++)n = this.inputDigitHelper_(e.charAt(r));
            return this.ableToFormat_ ? this.appendNationalNumber_(n) : this.accruedInput_.toString()
        }
        return this.prefixBeforeNationalNumber_.toString()
    },g.phonenumbers.AsYouTypeFormatter.prototype.isNanpaNumberWithNationalPrefix_ = function () {
        if (1 != this.currentMetadata_.getCountryCode())return !1;
        var e = this.nationalNumber_.toString();
        return "1" == e.charAt(0) && "0" != e.charAt(1) && "1" != e.charAt(1)
    },g.phonenumbers.AsYouTypeFormatter.prototype.removeNationalPrefixFromNationalNumber_ = function () {
        var e = this.nationalNumber_.toString(), t = 0;
        if (this.isNanpaNumberWithNationalPrefix_())t = 1, this.prefixBeforeNationalNumber_.append("1").append(g.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_), this.isCompleteNumber_ = !0; else if (this.currentMetadata_.hasNationalPrefixForParsing()) {
            var n = new RegExp("^(?:" + this.currentMetadata_.getNationalPrefixForParsing() + ")"), n = e.match(n);
            null != n && null != n[0] && 0 < n[0].length && (this.isCompleteNumber_ = !0, t = n[0].length, this.prefixBeforeNationalNumber_.append(e.substring(0, t)))
        }
        return this.nationalNumber_.clear(), this.nationalNumber_.append(e.substring(t)), e.substring(0, t)
    },g.phonenumbers.AsYouTypeFormatter.prototype.attemptToExtractIdd_ = function () {
        var e = this.accruedInputWithoutFormatting_.toString(), t = new RegExp("^(?:\\" + g.phonenumbers.PhoneNumberUtil.PLUS_SIGN + "|" + this.currentMetadata_.getInternationalPrefix() + ")"), t = e.match(t);
        return null != t && null != t[0] && 0 < t[0].length ? (this.isCompleteNumber_ = !0, t = t[0].length, this.nationalNumber_.clear(), this.nationalNumber_.append(e.substring(t)), this.prefixBeforeNationalNumber_.clear(), this.prefixBeforeNationalNumber_.append(e.substring(0, t)), e.charAt(0) != g.phonenumbers.PhoneNumberUtil.PLUS_SIGN && this.prefixBeforeNationalNumber_.append(g.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_), !0) : !1
    },g.phonenumbers.AsYouTypeFormatter.prototype.attemptToExtractCountryCallingCode_ = function () {
        if (0 == this.nationalNumber_.getLength())return !1;
        var e = new m.string.StringBuffer, t = this.phoneUtil_.extractCountryCode(this.nationalNumber_, e);
        return 0 == t ? !1 : (this.nationalNumber_.clear(), this.nationalNumber_.append(e.toString()), e = this.phoneUtil_.getRegionCodeForCountryCode(t), g.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY == e ? this.currentMetadata_ = this.phoneUtil_.getMetadataForNonGeographicalRegion(t) : e != this.defaultCountry_ && (this.currentMetadata_ = this.getMetadataForRegion_(e)), this.prefixBeforeNationalNumber_.append("" + t).append(g.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_), this.extractedNationalPrefix_ = "", !0)
    },g.phonenumbers.AsYouTypeFormatter.prototype.normalizeAndAccrueDigitsAndPlusSign_ = function (e, t) {
        var n;
        return e == g.phonenumbers.PhoneNumberUtil.PLUS_SIGN ? (n = e, this.accruedInputWithoutFormatting_.append(e)) : (n = g.phonenumbers.PhoneNumberUtil.DIGIT_MAPPINGS[e], this.accruedInputWithoutFormatting_.append(n), this.nationalNumber_.append(n)), t && (this.positionToRemember_ = this.accruedInputWithoutFormatting_.getLength()), n
    },g.phonenumbers.AsYouTypeFormatter.prototype.inputDigitHelper_ = function (e) {
        var t = this.formattingTemplate_.toString();
        if (0 <= t.substring(this.lastMatchPosition_).search(this.DIGIT_PATTERN_)) {
            var n = t.search(this.DIGIT_PATTERN_);
            return e = t.replace(this.DIGIT_PATTERN_, e), this.formattingTemplate_.clear(), this.formattingTemplate_.append(e), this.lastMatchPosition_ = n, e.substring(0, this.lastMatchPosition_ + 1)
        }
        return 1 == this.possibleFormats_.length && (this.ableToFormat_ = !1), this.currentFormattingPattern_ = "", this.accruedInput_.toString()
    },function (e, t, n) {
        function r(e, t) {
            return typeof e === t
        }

        function i() {
            var e, t, n, i, o, a, s;
            for (var u in b)if (b.hasOwnProperty(u)) {
                if (e = [], t = b[u], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))for (n = 0; n < t.options.aliases.length; n++)e.push(t.options.aliases[n].toLowerCase());
                for (i = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++)a = e[o], s = a.split("."), 1 === s.length ? N[s[0]] = i : (!N[s[0]] || N[s[0]]instanceof Boolean || (N[s[0]] = new Boolean(N[s[0]])), N[s[0]][s[1]] = i), _.push((i ? "" : "no-") + s.join("-"))
            }
        }

        function o(e) {
            var t = C.className, n = N._config.classPrefix || "";
            if (E && (t = t.baseVal), N._config.enableJSClass) {
                var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(r, "$1" + n + "js$2")
            }
            N._config.enableClasses && (t += " " + n + e.join(" " + n), E ? C.className.baseVal = t : C.className = t)
        }

        function a(e, t) {
            if ("object" == typeof e)for (var n in e)$(e, n) && a(n, e[n]); else {
                e = e.toLowerCase();
                var r = e.split("."), i = N[r[0]];
                if (2 == r.length && (i = i[r[1]]), "undefined" != typeof i)return N;
                t = "function" == typeof t ? t() : t, 1 == r.length ? N[r[0]] = t : (!N[r[0]] || N[r[0]]instanceof Boolean || (N[r[0]] = new Boolean(N[r[0]])), N[r[0]][r[1]] = t), o([(t && 0 != t ? "" : "no-") + r.join("-")]), N._trigger(e, t)
            }
            return N
        }

        function s() {
            return "function" != typeof t.createElement ? t.createElement(arguments[0]) : E ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
        }

        function u() {
            var e = t.body;
            return e || (e = s(E ? "svg" : "body"), e.fake = !0), e
        }

        function l(e, n, r, i) {
            var o, a, l, c, d = "modernizr", h = s("div"), p = u();
            if (parseInt(r, 10))for (; r--;)l = s("div"), l.id = i ? i[r] : d + (r + 1), h.appendChild(l);
            return o = s("style"), o.type = "text/css", o.id = "s" + d, (p.fake ? p : h).appendChild(o), p.appendChild(h), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), h.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = C.style.overflow, C.style.overflow = "hidden", C.appendChild(p)), a = n(h, e), p.fake ? (p.parentNode.removeChild(p), C.style.overflow = c, C.offsetHeight) : h.parentNode.removeChild(h), !!a
        }

        function c(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function d(e) {
            return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
                return t + n.toUpperCase()
            }).replace(/^-/, "")
        }

        function h(e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }

        function p(e, t, n) {
            var i;
            for (var o in e)if (e[o]in t)return n === !1 ? e[o] : (i = t[e[o]], r(i, "function") ? h(i, n || t) : i);
            return !1
        }

        function f(e) {
            return e.replace(/([A-Z])/g, function (e, t) {
                return "-" + t.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }

        function m(t, r) {
            var i = t.length;
            if ("CSS"in e && "supports"in e.CSS) {
                for (; i--;)if (e.CSS.supports(f(t[i]), r))return !0;
                return !1
            }
            if ("CSSSupportsRule"in e) {
                for (var o = []; i--;)o.push("(" + f(t[i]) + ":" + r + ")");
                return o = o.join(" or "), l("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
                    return "absolute" == getComputedStyle(e, null).position
                })
            }
            return n
        }

        function g(e, t, i, o) {
            function a() {
                l && (delete M.style, delete M.modElem)
            }

            if (o = r(o, "undefined") ? !1 : o, !r(i, "undefined")) {
                var u = m(e, i);
                if (!r(u, "undefined"))return u
            }
            for (var l, h, p, f, g, y = ["modernizr", "tspan", "samp"]; !M.style && y.length;)l = !0, M.modElem = s(y.shift()), M.style = M.modElem.style;
            for (p = e.length, h = 0; p > h; h++)if (f = e[h], g = M.style[f], c(f, "-") && (f = d(f)), M.style[f] !== n) {
                if (o || r(i, "undefined"))return a(), "pfx" == t ? f : !0;
                try {
                    M.style[f] = i
                } catch (v) {
                }
                if (M.style[f] != g)return a(), "pfx" == t ? f : !0
            }
            return a(), !1
        }

        function y(e, t, n, i, o) {
            var a = e.charAt(0).toUpperCase() + e.slice(1), s = (e + " " + O.join(a + " ") + a).split(" ");
            return r(t, "string") || r(t, "undefined") ? g(s, t, i, o) : (s = (e + " " + T.join(a + " ") + a).split(" "), p(s, t, n))
        }

        function v(e, t, r) {
            return y(e, n, n, t, r)
        }

        var _ = [], b = [], A = {
            _version: "3.3.1",
            _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout(function () {
                    t(n[e])
                }, 0)
            },
            addTest: function (e, t, n) {
                b.push({name: e, fn: t, options: n})
            },
            addAsyncTest: function (e) {
                b.push({name: null, fn: e})
            }
        }, N = function () {
        };
        N.prototype = A, N = new N, N.addTest("cors", "XMLHttpRequest"in e && "withCredentials"in new XMLHttpRequest), N.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
        var S = A._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        A._prefixes = S;
        var C = t.documentElement, E = "svg" === C.nodeName.toLowerCase();
        E || !function (e, t) {
            function n(e, t) {
                var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
            }

            function r() {
                var e = _.elements;
                return "string" == typeof e ? e.split(" ") : e
            }

            function i(e, t) {
                var n = _.elements;
                "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), _.elements = n + " " + e, l(t)
            }

            function o(e) {
                var t = v[e[g]];
                return t || (t = {}, y++, e[g] = y, v[y] = t), t
            }

            function a(e, n, r) {
                if (n || (n = t), d)return n.createElement(e);
                r || (r = o(n));
                var i;
                return i = r.cache[e] ? r.cache[e].cloneNode() : m.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !i.canHaveChildren || f.test(e) || i.tagUrn ? i : r.frag.appendChild(i)
            }

            function s(e, n) {
                if (e || (e = t), d)return e.createDocumentFragment();
                n = n || o(e);
                for (var i = n.frag.cloneNode(), a = 0, s = r(), u = s.length; u > a; a++)i.createElement(s[a]);
                return i
            }

            function u(e, t) {
                t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                    return _.shivMethods ? a(n, e, t) : t.createElem(n)
                }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function (e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(_, t.frag)
            }

            function l(e) {
                e || (e = t);
                var r = o(e);
                return !_.shivCSS || c || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), d || u(e, r), e
            }

            var c, d, h = "3.7.3", p = e.html5 || {}, f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g = "_html5shiv", y = 0, v = {};
            !function () {
                try {
                    var e = t.createElement("a");
                    e.innerHTML = "<xyz></xyz>", c = "hidden"in e, d = 1 == e.childNodes.length || function () {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                } catch (n) {
                    c = !0, d = !0
                }
            }();
            var _ = {
                elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
                version: h,
                shivCSS: p.shivCSS !== !1,
                supportsUnknownElements: d,
                shivMethods: p.shivMethods !== !1,
                type: "default",
                shivDocument: l,
                createElement: a,
                createDocumentFragment: s,
                addElements: i
            };
            e.html5 = _, l(t), "object" == typeof module && module.exports && (module.exports = _)
        }("undefined" != typeof e ? e : this, t);
        var w = "Moz O ms Webkit", T = A._config.usePrefixes ? w.toLowerCase().split(" ") : [];
        A._domPrefixes = T;
        var $;
        !function () {
            var e = {}.hasOwnProperty;
            $ = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) {
                return t in e && r(e.constructor.prototype[t], "undefined")
            } : function (t, n) {
                return e.call(t, n)
            }
        }(), A._l = {}, A.on = function (e, t) {
            this._l[e] || (this._l[e] = []), this._l[e].push(t), N.hasOwnProperty(e) && setTimeout(function () {
                N._trigger(e, N[e])
            }, 0)
        }, A._trigger = function (e, t) {
            if (this._l[e]) {
                var n = this._l[e];
                setTimeout(function () {
                    var e, r;
                    for (e = 0; e < n.length; e++)(r = n[e])(t)
                }, 0), delete this._l[e]
            }
        }, N._q.push(function () {
            A.addTest = a
        }), N.addTest("opacity", function () {
            var e = s("a").style;
            return e.cssText = S.join("opacity:.55;"), /^0.55$/.test(e.opacity)
        }), N.addTest("csspointerevents", function () {
            var e = s("a").style;
            return e.cssText = "pointer-events:auto", "auto" === e.pointerEvents
        }), N.addTest("placeholder", "placeholder"in s("input") && "placeholder"in s("textarea"));
        var x = s("input"), P = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "), k = {};
        N.input = function (t) {
            for (var n = 0, r = t.length; r > n; n++)k[t[n]] = !!(t[n]in x);
            return k.list && (k.list = !(!s("datalist") || !e.HTMLDataListElement)), k
        }(P);
        var D = function () {
            var t = e.matchMedia || e.msMatchMedia;
            return t ? function (e) {
                var n = t(e);
                return n && n.matches || !1
            } : function (t) {
                var n = !1;
                return l("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
                    n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
                }), n
            }
        }();
        A.mq = D;
        var R = A.testStyles = l;
        N.addTest("touchevents", function () {
            var n;
            if ("ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch)n = !0; else {
                var r = ["@media (", S.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                R(r, function (e) {
                    n = 9 === e.offsetTop
                })
            }
            return n
        }), R("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}", function (e) {
            var t, n = e.childNodes;
            t = n[0].offsetLeft < n[1].offsetLeft, N.addTest("displaytable", t, {aliases: ["display-table"]})
        }, 2), R('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function (e) {
            N.addTest("generatedcontent", e.offsetHeight >= 7)
        });
        var O = A._config.usePrefixes ? w.split(" ") : [];
        A._cssomPrefixes = O;
        var I = {elem: s("modernizr")};
        N._q.push(function () {
            delete I.elem
        });
        var M = {style: I.elem.style};
        N._q.unshift(function () {
            delete M.style
        });
        A.testProp = function (e, t, r) {
            return g([e], n, t, r)
        };
        A.testAllProps = y, A.testAllProps = v, N.addTest("cssanimations", v("animationName", "a", !0)), N.addTest("boxshadow", v("boxShadow", "1px 1px", !0)), N.addTest("flexbox", v("flexBasis", "1px", !0)), N.addTest("flexboxlegacy", v("boxDirection", "reverse", !0)), N.addTest("flexboxtweener", v("flexAlign", "end", !0)), i(), o(_), delete A.addTest, delete A.addAsyncTest;
        for (var L = 0; L < N._q.length; L++)N._q[L]();
        e.Modernizr = N
    }(window, document),function () {
        Modernizr.addTest("anyflexbox", Modernizr.flexbox || Modernizr.flexboxtweener || Modernizr.flexboxlegacy)
    }.call(this),function () {
        var e, t, n;
        e = h("meta[data-browser]"), t = e.data("browser"), n = e.data("browserMajor"), this.Browser = {
            gteSafari6: "safari" !== t || n >= 6,
            ie: "ie" === t,
            gteIe11: "ie" !== t || n >= 11,
            gteFirefox13: "firefox" !== t || n >= 13
        }
    }.call(this),this.Element && Element.prototype.attachEvent && !Element.prototype.addEventListener && function () {
        function e(e, t) {
            Window.prototype[e] = HTMLDocument.prototype[e] = Element.prototype[e] = t
        }

        function t(e) {
            t.interval && document.body && (t.interval = clearInterval(t.interval), document.dispatchEvent(new CustomEvent("DOMContentLoaded")))
        }

        e("addEventListener", function (e, t) {
            var n = this, r = n.addEventListener.listeners = n.addEventListener.listeners || {}, i = r[e] = r[e] || [];
            i.length || n.attachEvent("on" + e, i.event = function (e) {
                var t = n.document && n.document.documentElement || n.documentElement || {scrollLeft: 0, scrollTop: 0};
                e.currentTarget = n, e.pageX = e.clientX + t.scrollLeft, e.pageY = e.clientY + t.scrollTop, e.preventDefault = function () {
                    e.returnValue = !1
                }, e.relatedTarget = e.fromElement || null, e.stopImmediatePropagation = function () {
                    u = !1, e.cancelBubble = !0
                }, e.stopPropagation = function () {
                    e.cancelBubble = !0
                }, e.target = e.srcElement || n, e.timeStamp = +new Date;
                var r = {};
                for (var o in e)r[o] = e[o];
                for (var a, o = 0, s = [].concat(i), u = !0; u && (a = s[o]); ++o)for (var l, c = 0; l = i[c]; ++c)if (l == a) {
                    l.call(n, r);
                    break
                }
            }), i.push(t)
        }), e("removeEventListener", function (e, t) {
            for (var n, r = this, i = r.addEventListener.listeners = r.addEventListener.listeners || {}, o = i[e] = i[e] || [], a = o.length - 1; n = o[a]; --a)if (n == t) {
                o.splice(a, 1);
                break
            }
            !o.length && o.event && r.detachEvent("on" + e, o.event)
        }), e("dispatchEvent", function (e) {
            var t = this, n = e.type, r = t.addEventListener.listeners = t.addEventListener.listeners || {}, i = r[n] = r[n] || [];
            try {
                return t.fireEvent("on" + n, e)
            } catch (o) {
                return void(i.event && i.event(e))
            }
        }), Object.defineProperty(Window.prototype, "CustomEvent", {
            get: function () {
                var e = this;
                return function (t, n) {
                    var r, i = e.document.createEventObject();
                    i.type = t;
                    for (r in n)"cancelable" == r ? i.returnValue = !n.cancelable : "bubbles" == r ? i.cancelBubble = !n.bubbles : "detail" == r && (i.detail = n.detail);
                    return i
                }
            }
        }), t.interval = setInterval(t, 1), window.addEventListener("load", t)
    }(),(!this.CustomEvent || "object" == typeof this.CustomEvent) && function () {
        this.CustomEvent = function (e, t) {
            var n;
            t = t || {bubbles: !1, cancelable: !1, detail: void 0};
            try {
                n = document.createEvent("CustomEvent"), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail)
            } catch (r) {
                n = document.createEvent("Event"), n.initEvent(e, t.bubbles, t.cancelable), n.detail = t.detail
            }
            return n
        }
    }(),String.prototype.trim || (String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }),function () {
        var e = [].slice;
        this.DeferredRequest = function () {
            function t() {
                var t, n;
                n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], this.type = n, this.args = t, this.callbacks = [], this.beforeCallbacks = []
            }

            return t.prototype.success = function () {
                var t;
                return t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.appendCallback("success", t)
            }, t.prototype.done = function () {
                var t;
                return t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.appendCallback("done", t)
            }, t.prototype.then = function () {
                var t;
                return t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.appendCallback("then", t)
            }, t.prototype.always = function () {
                var t;
                return t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.appendCallback("always", t)
            }, t.prototype.fail = function () {
                var t;
                return t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.appendCallback("fail", t)
            }, t.prototype.appendCallback = function (e, t) {
                var n;
                return this.request ? (n = this.request)[e].apply(n, t) : (this.callbacks.push([e, t]), this)
            }, t.prototype.before = function (e) {
                return this.request ? e() : this.beforeCallbacks.push(e), this
            }, t.prototype.start = function () {
                var e, t, n, r, i, o, a, s, u, l, c;
                for (s = this.beforeCallbacks, r = 0, o = s.length; o > r; r++)(t = s[r])();
                for (this.request = h[this.type].apply(h, this.args), u = this.callbacks, i = 0, a = u.length; a > i; i++)l = u[i], n = l[0], e = l[1], this.request = (c = this.request)[n].apply(c, e);
                return this.request
            }, t
        }()
    }.call(this),function () {
        this.BackupStrategy = function () {
            function e() {
            }

            return e.prototype.backupFields = function (e) {
                var t, n, r, i, o, a, s, u;
                for (s = {}, o = this.inputs(e), n = 0, i = o.length; i > n; n++)r = o[n], t = h(r), u = "checkbox" === (a = t.attr("type")) || "radio" === a ? t.prop("checked") : t.val(), s[this.key(t)] = u;
                return s
            }, e.prototype.restoreFields = function (e, t) {
                var n, r, i, o, a, s, u, l;
                for (n = h(), s = this.inputs(e), i = 0, a = s.length; a > i; i++)o = s[i], r = h(o), l = this.value(r, t), "undefined" != typeof l && null !== l && ("checkbox" === (u = r.attr("type")) || "radio" === u ? (r.prop("checked") !== l && n.push(r), r.prop("checked", l)) : (r.is(":not(select)") || r.has("option[value='" + l + "']").length) && (r.val() !== l && n.push(r), r.val(l)));
                return n
            }, e
        }()
    }.call(this),function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.SessionStoreBackup = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), n.prototype.inputs = function (e) {
                return e.find("[data-persist]")
            }, n.prototype.key = function (e) {
                return e.attr("data-persist")
            }, n.prototype.value = function (e, t) {
                var n, r;
                return r = t[this.key(e)], "undefined" != typeof sessionStorage && null !== sessionStorage && null == r && (n = sessionStorage.getItem(e.attr("id"))) && (r = JSON.parse(n)), r
            }, n
        }(BackupStrategy)
    }.call(this),function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.MemoryStoreBackup = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), n.prototype.inputs = function (e) {
                return e.find("[data-backup]")
            }, n.prototype.key = function (e) {
                return e.attr("data-backup")
            }, n.prototype.value = function (e, t) {
                return t[this.key(e)]
            }, n
        }(BackupStrategy)
    }.call(this),function () {
        var e = [].slice;
        this.Behaviour = function () {
            function t(e) {
                this.$element = e
            }

            var n, r, i;
            return t._ajaxRequest = p.Deferred().resolve(), n = /^(\S+)\s*(.*)$/, t.OBSERVERS = [], t.ON_SCROLL = [], t.backup = new SessionStoreBackup, t.dependencies = [], t.waitFor = [], t.dependenciesMet = function () {
                var e, t, n, r;
                for (r = this.dependencies, t = 0, n = r.length; n > t; t++)if (e = r[t], !e)return !1;
                return !0
            }, t.observe = function (e, t) {
                var n, r, i, o, a;
                if (null == t && (t = document), this.dependenciesMet()) {
                    for (n = h(t), a = this.prototype.listeners(), r = 0, i = a.length; i > r; r++)o = a[r], n.on(o.event, e, this.delegator(e, o));
                    return this.OBSERVERS.push({
                        selector: e,
                        behaviour: this
                    }), this.prototype.onScroll ? this.ON_SCROLL.push({selector: e, behaviour: this}) : void 0
                }
            }, r = 0, t.dataKey = function () {
                return this._dataKey || (this._dataKey = "behaviour-" + r++)
            }, t.init = function (e) {
                var t, n, r, i, o, a, s, u;
                for (null == e && (e = document), t = h(e), o = this.OBSERVERS, s = [], r = 0, i = o.length; i > r; r++)a = o[r], u = a.selector, n = a.behaviour, t.is(u) && n.forElement(t), s.push(t.find(u).each(function () {
                    return n.forElement(h(this))
                }));
                return s
            }, t.onScroll = function (e) {
                return t._onScrollScheduled ? void 0 : (t._onScrollScheduled = !0, i(function () {
                    var n, r, i, o, a, s;
                    for (o = t.ON_SCROLL, r = 0, i = o.length; i > r; r++)a = o[r], s = a.selector, n = a.behaviour, h(s).each(function () {
                        return n.forElement(h(this)).onScroll(e)
                    });
                    return t._onScrollScheduled = !1
                }))
            }, i = window.requestAnimationFrame || function (e) {
                    return setTimeout(e, 50)
                }, t.delegator = function (t, n) {
                return function (r) {
                    return function () {
                        var i, o, a, s, u;
                        return s = arguments[0], a = 2 <= arguments.length ? e.call(arguments, 1) : [], o = h(s.target).closest(n.selector), o.length && (i = h(s.target).closest(t), i.length) ? (u = r.forElement(i))[n.method].apply(u, [s].concat(e.call(a))) : void 0
                    }
                }(this)
            }, t.forElement = function (e) {
                var t;
                return (t = e.data(this.dataKey())) || (t = new this(e), e.data(this.dataKey(), t), t.asyncInit()), t
            }, t.triggerEvent = function (e, t) {
                return e.dispatchEvent ? e.dispatchEvent(new CustomEvent(t)) : void 0
            }, t.prototype.asyncInit = function () {
                return h.when.apply(this, this.constructor.waitFor).then(function (e) {
                    return function () {
                        return e.init()
                    }
                }(this))
            }, t.prototype.init = function () {
            }, t.prototype.lock = function (e, t) {
                return null == t && (t = null), t ? e.before(function () {
                    var n, r, i, o;
                    return n = h(t).addClass("locked"), r = n.find("input, select, textarea"), o = function () {
                        var e, t, n;
                        for (n = [], e = 0, t = r.length; t > e; e++)i = r[e], n.push([i, i.disabled]);
                        return n
                    }(), r.prop("disabled", !0), e.always(function () {
                        var e, t, r, i, a, s;
                        for (n.removeClass("locked"), s = [], r = 0, i = o.length; i > r; r++)a = o[r], t = a[0], e = a[1], s.push(t.disabled = e);
                        return s
                    })
                }) : e
            }, t.prototype.debounce = function (e, t) {
                return null == t && (t = 1e3), this._debounce && clearTimeout(this._debounce), this._debounce = setTimeout(e, t)
            }, t.prototype.post = function () {
                var n, r, i;
                return n = 1 <= arguments.length ? e.call(arguments, 0) : [], i = function (e, t, n) {
                    n.prototype = e.prototype;
                    var r = new n, i = e.apply(r, t);
                    return Object(i) === i ? i : r
                }(DeferredRequest, ["post"].concat(e.call(n)), function () {
                }), r = t._ajaxRequest, t._ajaxRequest = i, r.done(function () {
                    return i.start()
                }), i
            }, t.prototype.ajax = function (e) {
                var t;
                return t = h.ajax(e), h.Deferred(function (e) {
                    return t.done(function (t, n, r) {
                        var i;
                        return i = r.getResponseHeader("Content-Location"), 200 === r.status && null != i ? window.location = i : e.resolveWith(this, arguments)
                    }).fail(e.reject)
                }).promise(t)
            }, t.prototype.updatePage = function (e, t, n) {
                var r;
                return r = (null != n ? n : {}).failure, this.hasAllSelector(e, t) ? this.replacePage(e, t) : null != r ? r.call(this) : this.reload()
            }, t.prototype.hasAllSelector = function (e, t) {
                var n, r;
                return r = h(t), n = h(e).find(t), r.length === n.length
            }, t.prototype.replacePage = function (e, n) {
                var r, i, o, a, s, u, l, c;
                for (r = h(), l = n.split(/\s*,\s*/), s = 0, u = l.length; u > s; s++)c = l[s], o = h(c), i = h(e).find(c), a = t.backup.backupFields(o), r = r.add(t.backup.restoreFields(i, a)), t.init(i), o.replaceWith(i);
                return r.each(function () {
                    var e;
                    return e = h.Event("change", {restoredFromBackup: !0}), h(this).trigger(e)
                }), t.triggerEvent(document, "page:change")
            }, t.prototype.reload = function (e) {
                var t;
                return null == e && (e = !0), t = location.protocol + "//" + location.host + location.pathname, e && (t += "?validate=1"), window.location = t
            }, t.prototype.listeners = function () {
                var e, t;
                return this._parsedEvents || (this._parsedEvents = function () {
                        var n, r;
                        n = this.events, r = [];
                        for (e in n)t = n[e], r.push(this.parseListener(e, t));
                        return r
                    }.call(this))
            }, t.prototype.parseListener = function (e, t) {
                var r;
                return r = e.match(n), {event: r[1], selector: r[2], method: t}
            }, t.prototype.$ = function (e) {
                return this.$element.find(e)
            }, t
        }(), p(function () {
            return Behaviour.init()
        }), p(window).on("scroll", Behaviour.onScroll), p(window).on("resize", Behaviour.onScroll)
    }.call(this),function () {
        this.Helpers || (this.Helpers = {}), this.Helpers.Animation = {
            TRANSITION_END_EVENTS: "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            TRANSITION_END_TIMEOUT: 1e3,
            onTransitionEnd: function (e, t) {
                var n;
                return null == t && (t = this.TRANSITION_END_TIMEOUT), n = h.Deferred(), e.one(this.TRANSITION_END_EVENTS, function (e) {
                    return function () {
                        return n.resolve()
                    }
                }(this)), setTimeout(function (e) {
                    return function () {
                        return "pending" === n.state() ? n.resolve() : void 0
                    }
                }(this), t), n
            }
        }
    }.call(this);
    var y = t(function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = window.Helpers || {};
        t["default"] = n.Utils = {
            sanitizeValue: function (e) {
                return null === e ? "" : e.toLowerCase()
            }, valueFor: function (e, t) {
                return "SELECT" === e.tagName ? this.valueForSelect(e, t) : t
            }, valueForSelect: function (e, t) {
                var n = this.sanitizeValue(t), r = !0, i = !1, o = void 0;
                try {
                    for (var a, s = e.querySelectorAll("option:not([disabled])")[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                        var u = a.value;
                        if (this.sanitizeValue(u.value) === n)return u.value;
                        if (this.sanitizeValue(u.text) === n)return u.value;
                        if (this.sanitizeValue(u.getAttribute("data-code")) === n)return u.value;
                        if (null !== u.getAttribute("data-alternate-values")) {
                            var l = !0, c = !1, d = void 0;
                            try {
                                for (var h, p = JSON.parse(u.getAttribute("data-alternate-values"))[Symbol.iterator](); !(l = (h = p.next()).done); l = !0) {
                                    var f = h.value;
                                    if (this.sanitizeValue(f) === n)return u.value
                                }
                            } catch (m) {
                                c = !0, d = m
                            } finally {
                                try {
                                    !l && p["return"] && p["return"]()
                                } finally {
                                    if (c)throw d
                                }
                            }
                        }
                    }
                } catch (m) {
                    i = !0, o = m
                } finally {
                    try {
                        !r && s["return"] && s["return"]()
                    } finally {
                        if (i)throw o
                    }
                }
                return e.options[e.selectedIndex].value
            }
        }
    });
    (function () {
        this.SelectedPaymentMethodMixin = function () {
            function e() {
            }

            return e.prototype._findPaymentGatewayInput = function () {
                var e;
                return e = this._gatewayInputs("radio"), e.length ? e.filter(":checked") : this._gatewayInputs("hidden")
            }, e.prototype._gatewayInputs = function (e) {
                return this.$("input[type=" + e + "][name='checkout[payment_gateway]']:not([disabled])")
            }, e.prototype._gatewayId = function (e) {
                return this.$('[data-gateway-group="' + e + '"]').attr("data-select-gateway")
            }, e.prototype.gatewayContainer = function (e) {
                var t;
                return t = this._gatewayId(e), this.$("[data-subfields-for-gateway=" + t + "]")
            }, e.prototype.hasGateway = function (e) {
                return this.gatewayContainer(e).length > 0
            }, e.prototype.isGatewaySelected = function (e) {
                var t, n;
                return (t = this._gatewayId(e)) ? (n = this._findPaymentGatewayInput().val(), n ? n === t : !1) : !1
            }, e
        }()
    }).call(this);
    var v = t(function (e, t) {
        "use strict";
        function n(e) {
            return !e || e.length < 2 ? !1 : ")" === e[e.length - 1] && !u.test(e[e.length - 2])
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var s = String.fromCharCode(8206), u = /[^\u0000-\u007f]/, l = function (e) {
            function t() {
                return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return r(t, e), o(t, [{
                key: "init", value: function () {
                    if ("INPUT" === this.$element[0].nodeName && n(this.$element[0].placeholder))this.$element.attr("placeholder", this.$element[0].placeholder + s); else {
                        var e = this.$element.text().trim();
                        n(e) && this.$element.text(e + s)
                    }
                }
            }]), t
        }(Behaviour);
        t["default"] = l, window.RTLEnsure = l
    });
    (function () {
        this.EmailCheck = function () {
            function e() {
            }

            return e.EMAIL_REGEXP = /^[^@]+@[^@]+\.[^@]+$/, e.isValid = function (e) {
                var t;
                return t = RegExp(this.EMAIL_REGEXP), t.test(e)
            }, e
        }()
    }).call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.GatewaySelector = function (t) {
            function n() {
                var e;
                n.__super__.constructor.apply(this, arguments), this.$gateways = this.$('[name="checkout[payment_gateway]"]'), e = this.$gateways.filter(":checked"), 0 === e.length && (e = this.$gateways), this.selectGateway(e), this.toggleAriaExpanded()
            }

            return e(n, t), n.prototype.events = {
                "change [data-select-gateway]": "updateSelectedGateway",
                "change [data-toggle]": "onDataToggleChange"
            }, n.prototype.toggleAriaExpanded = function () {
                return this.$gateways.each(function () {
                    return this.setAttribute("aria-expanded", this.checked)
                })
            }, n.prototype.updateSelectedGateway = function (e) {
                return this.selectGateway(this.$(e.target)), this.toggleAriaExpanded()
            }, n.prototype.selectGateway = function (e) {
                var t, n, r, i, o, a, s;
                for (s = e.closest("[data-select-gateway]").data("select-gateway"), o = this.$("[data-subfields-for-gateway]"), a = [], r = 0, i = o.length; i > r; r++)n = o[r], t = this.$(n), a.push(this.toggleSubfields(t, t.data("subfields-for-gateway") === s));
                return a
            }, n.prototype.toggleSubfields = function (e, t) {
                var n, r, i, o, a;
                if (e.toggleClass("hidden", !t), this.disableFields(e, t), t) {
                    for (i = e.find("[data-toggle]"), o = [], n = 0, r = i.length; r > n; n++)a = i[n], o.push(this.disableToggledFields(h(a)));
                    return o
                }
            }, n.prototype.disableFields = function (e, t) {
                var n;
                return n = e.find("input, select, textarea"), n.prop("disabled", !t)
            }, n.prototype.disableToggledFields = function (e) {
                return this.disableFields(this.$(e.attr("data-toggle")), e.prop("checked"))
            }, n.prototype.onDataToggleChange = function (e) {
                return this.disableToggledFields(h(e.target))
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }, t = function (e, t) {
            function r() {
                this.constructor = e
            }

            for (var i in t)n.call(t, i) && (e[i] = t[i]);
            return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
        }, n = {}.hasOwnProperty;
        this.PollingRefresh = function (n) {
            function r() {
                this.polling = e(this.polling, this), r.__super__.constructor.apply(this, arguments), this.designingPolling() || this.schedule(this.polling)
            }

            return t(r, n), r.prototype.polling = function () {
                return this.ajax({url: this.$element.attr("data-poll-target"), method: "GET"}).always(function (e) {
                    return function (t, n, r) {
                        return void 0 === r.status ? e.schedule(e.polling, 5e3) : 202 === r.status || r.status >= 400 ? e.schedule(e.polling) : e.updatePage(t, e.$element.attr("data-poll-refresh"))
                    }
                }(this))
            }, r.prototype.schedule = function (e, t) {
                return null == t && (t = 500), setTimeout(e, t)
            }, r.prototype.designingPolling = function () {
                var e;
                return e = window.location.search, e.indexOf("design_theme_id") > -1 && e.indexOf("poll") > -1
            }, r
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.CountrySelector = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            var r, i;
            return e(n, t), i = ["field--half", "field--third", "field--two-thirds", "field--three-eights", "field--quarter"].join(" "), r = {
                N_p_c_sc_a: {
                    first_name: "field--half",
                    last_name: "field--half",
                    address1: "field--two-thirds",
                    address2: "field--third",
                    province: "field--half",
                    city: "field--half"
                },
                N_p_c_c_a: {
                    first_name: "field--half",
                    last_name: "field--half",
                    address1: "field--two-thirds",
                    address2: "field--third"
                },
                n_a_c_csp: {
                    first_name: "field--half",
                    last_name: "field--half",
                    address1: "field--two-thirds",
                    address2: "field--third",
                    country: "field--three-eights",
                    province: "field--three-eights",
                    zip: "field--quarter"
                },
                n_a_c_cs: {
                    first_name: "field--half",
                    last_name: "field--half",
                    address1: "field--two-thirds",
                    address2: "field--third",
                    country: "field--half",
                    province: "field--half"
                },
                n_a_c_cp: {
                    first_name: "field--half",
                    last_name: "field--half",
                    address1: "field--two-thirds",
                    address2: "field--third",
                    country: "field--half",
                    zip: "field--half"
                },
                n_a_c_c: {
                    first_name: "field--half",
                    last_name: "field--half",
                    address1: "field--two-thirds",
                    address2: "field--third"
                }
            }, n.prototype.events = {'change [data-address-field="country"] select': "updateCountry"}, n.prototype.init = function () {
                return this.memoizeAddressFields(), setTimeout(function (e) {
                    return function () {
                        return e.updateCountry()
                    }
                }(this))
            }, n.prototype.memoizeAddressFields = function () {
                var e, t, n, r, i;
                for (this.fields = {}, r = this.$("[data-address-field]"), i = [], t = 0, n = r.length; n > t; t++)e = r[t], i.push(this.fields[h(e).attr("data-address-field")] = h(e));
                return i
            }, n.prototype.updateCountry = function () {
                var e, t, n;
                return e = this.$('[data-address-field="country"]').find("select"), (n = e.val() || e.find("option:enabled").filter(function (e, t) {
                        return t.attributes.value
                    }).val()) ? (t = Countries[n], this.formatAddress(t)) : void 0
            }, n.prototype.formatAddress = function (e) {
                var t, n, r, i, o, a, s;
                for (h.each(this.fields, function (e, t) {
                    return t.remove()
                }), a = Shopify.Checkout.AddressFormat[this.getAddressFormat(e)], s = [], r = 0, i = a.length; i > r; r++)o = a[r], s.push(function () {
                    var r, i, a;
                    for (a = [], r = 0, i = o.length; i > r; r++)n = o[r], (t = this.addressField(n, e)) ? a.push(this.$("[data-address-fields]").append(t)) : a.push(void 0);
                    return a
                }.call(this));
                return s
            }, n.prototype.getAddressFormat = function (e) {
                var t;
                return t = e.address_format, e.provinces_beta && (h("html").hasClass(e.provinces_beta) || (t = t.replace(/s/g, ""))), t
            }, n.prototype.getFieldWidthClass = function (e, t) {
                var n, i;
                return n = this.getAddressFormat(e), i = r[n][t], "address1" !== t || this.fields.address2 ? i : null
            }, n.prototype.addressField = function (e, t) {
                var n, r, o, a;
                return (n = this.fields[e]) ? (n.removeClass(i), n.addClass(this.getFieldWidthClass(t, e)), r = n.find(":input"), r.prop("disabled", !1), (a = t[e + "_placeholder"]) && r.attr("placeholder", a), (o = t[e + "_label"]) && n.find("label").text(o), "province" === e && this.populateProvinceOptions(n, t), n) : void 0
            }, n.prototype.populateProvinceOptions = function (e, t) {
                var n, r, i, o, a, s, u;
                o = e.find(":input").val(), e.find("select").length || this.coerceToSelect(e), r = e.find("select"), r.empty(), n = this.createOption(t.province_label, null), n.prop("disabled", !0), r.append(n), a = t.province_labels;
                for (u in a)s = a[u], i = t.province_alternate_names[u], r.append(this.createOption(s, u, {
                    "data-code": t.province_codes[u],
                    "data-alternate-values": null != i ? JSON.stringify(i) : void 0
                }));
                return r.val(o), r.val() ? void 0 : r.val(r.find("option:first-child").val())
            }, n.prototype.createOption = function (e, t, n) {
                var r, i, o;
                null == n && (n = {}), r = h(document.createElement("option"));
                for (i in n)o = n[i], r.attr(i, o);
                return r.text(e), r.val(t), r
            }, n.prototype.coerceToSelect = function (e) {
                var t, n, r, i, o, a, s, u;
                for (n = h(document.createElement("select")), t = e.find("input"), s = t.prop("attributes"), o = 0, a = s.length; a > o; o++)i = s[o], "disabled" !== (u = i.name) && "type" !== u && "value" !== u && n.attr(i.name, i.value);
                return n.addClass("field__input--select"), t.replaceWith(n), r = e.find(".field__input-wrapper"), r.addClass("field__input-wrapper--select"), e.addClass("field--show-floating-label")
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.FieldAutocompleter = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), n.prototype.events = {
                "blur input[data-autocomplete-field]": "autocompleteField",
                "input input[data-autocomplete-field]": "autocompleteField"
            }, n.prototype.autocompleteField = function (e) {
                return setTimeout(function (t) {
                    return function () {
                        var n, r, i, o;
                        return n = t.$(e.target), o = n.data("autocomplete-field"), r = t.$("[data-address-field=" + o + "] :input"), r.length ? (i = Helpers.Utils.valueFor(r.get(0), n.val()), i !== r.val() ? r.val(i).trigger("change") : void 0) : void 0
                    }
                }(this))
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.AddressSelector = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), n.prototype.events = {
                "change [data-address-selector]": "changeAddressFields",
                "change :not([data-address-selector])": "resetAddressSelector"
            }, n.prototype.init = function () {
                return this.$selector = this.$("[data-address-selector]"), this.$selector.length ? (this.format = this.$selector.attr("data-field-name-format"), this.namePattern = this.regexpForFormat(this.format), this.fillAddressFields()) : void 0
            }, n.prototype.changeAddressFields = function (e) {
                return e.restoredFromBackup ? void 0 : this.selectedAddress() ? this.fillAddressFields() : this.clearAddressFields()
            }, n.prototype.clearAddressFields = function () {
                var e, t;
                return e = this.$('[data-address-field="country"] select'), e.val(e.find("option:first").val()).trigger("change"), t = this.$('[data-address-field="province"] select'), t.val(null).trigger("change"), this.$("[data-address-fields] input:visible").val("").trigger("change")
            }, n.prototype.fillAddressFields = function () {
                var e, t, n, r, i, o, a, s, u, l;
                if (t = this.selectedAddress()) {
                    for (u = function () {
                        var e;
                        e = [];
                        for (o in t)e.push(o);
                        return e
                    }().sort(), s = [], r = 0, i = u.length; i > r; r++)o = u[r], e = this.$fieldFor(o), l = e.val(), n = (null != (a = t[o]) ? a.toString() : void 0) || "", l !== n ? s.push(e.val(n).trigger("change")) : s.push(void 0);
                    return s
                }
            }, n.prototype.resetAddressSelector = function (e) {
                var t, n, r, i, o;
                return t = h(e.target), (n = this.selectedAddress()) && (i = this.propertyNameFor(t.attr("name"))) ? (r = (null != (o = n[i]) ? o.toString() : void 0) || "", r !== t.val() ? this.$selector.val("") : void 0) : void 0
            }, n.prototype.selectedAddress = function () {
                return this.$selector.find("option:checked").data("properties")
            }, n.prototype.$fieldFor = function (e) {
                var t;
                return this.fields || (this.fields = {}), (t = this.fields)[e] || (t[e] = this.$("[name='" + this.inputNameFor(e) + "']"))
            }, n.prototype.inputNameFor = function (e) {
                return this.format.replace("%s", e)
            }, n.prototype.propertyNameFor = function (e) {
                var t;
                return t = e.match(this.namePattern), null != t && null != t[1] ? t[1] : void 0
            }, n.prototype.regexpForFormat = function (e) {
                return e = e.replace("%s", "(\\w+)"), e = e.replace(/\[/g, "\\[").replace(/\]/g, "\\]"), new RegExp("^" + e + "$")
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.ShippingMethodSelector = function (t) {
            function n() {
                n.__super__.constructor.apply(this, arguments), this.$("input[type=radio]:checked").length || this.$("input[type=radio]:first").attr("checked", "checked"), setTimeout(function (e) {
                    return function () {
                        var t;
                        return t = e.$("input[type=radio]:checked"), h(".field--error input:visible").length || t.focus(), t.trigger("change")
                    }
                }(this), 0)
            }

            return e(n, t), n.prototype.events = {'change [type="radio"][name="checkout[shipping_rate][id]"]': "updateSelectedShippingMethodFromRadio"}, n.prototype.updateSelectedShippingMethodFromRadio = function (e) {
                var t, n;
                return t = this.$(e.target), this.$element.find("[data-shipping-rate-additional-fields-container]").hide(), (n = this.$("[data-shipping-rate-additional-fields-container=" + t.data("checkout-shipping-rate-additional-fields-container") + "]")) && n.show(), t.prop("checked") ? this.updateLabels(t) : void 0
            }, n.prototype.updateLabels = function (e) {
                var t, n;
                return this.updateLabelFromRadioData(e, "checkout-subtotal-price"), this.updateLabelFromRadioData(e, "checkout-total-shipping"), this.updateTaxesLabelFromRadioData(e, "checkout-total-taxes"), this.updateLabelFromRadioData(e, "checkout-payment-due"), this.updateLabelFromRadioData(e, "checkout-total-price"), h("[data-checkout-applied-discount-icon-target]").html(e.data("checkout-applied-discount-icon")), h("#discount .applied-discount").removeClass("success warning").addClass(e.data("checkout-applied-discount-icon-class")), n = e.data("checkout-discount-warning"), h("[data-discount-warning]").html(n).closest(".field__message").toggleClass("hidden", !n), h("[data-discount-success]").toggleClass("hidden", !!n), h("[data-checkout-applied-gift-card-amount-target]").each(function (t, n) {
                    var r;
                    return r = e.data("checkout-applied-gift-card-amount-" + t), h(n).html(r)
                }), t = h('input[type="hidden"][name="checkout[shipping_rate][id]"]'), t.prop("disabled", !1), t.val(e.val())
            }, n.prototype.updateLabelFromRadioData = function (e, t) {
                var n;
                return n = h("[data-" + t + "-target]"), n.attr("data-" + t + "-target", e.data(t + "-cents")), n.html(e.data(t))
            }, n.prototype.updateTaxesLabelFromRadioData = function (e, t) {
                return this.updateLabelFromRadioData(e, t), h("[data-checkout-taxes]").toggleClass("hidden", 0 === e.data(t + "-cents"))
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.BillingAddress = function (t) {
            function n() {
                n.__super__.constructor.apply(this, arguments), this.$('input[name="checkout[different_billing_address]"]').length && (this.$('input[name="checkout[different_billing_address]"]').prop("disabled", !1), this.differentBillingRadio = this.$("#checkout_different_billing_address_true")[0], this.$billingAddress = this.$("#section--billing-address__different"), this.toggleDifferentBillingAddressForm())
            }

            return e(n, t), n.prototype.events = {'change input[name="checkout[different_billing_address]"]': "toggleDifferentBillingAddressForm"}, n.prototype.toggleDifferentBillingAddressForm = function () {
                var e;
                return e = this.differentBillingRadio.checked, this.$billingAddress.toggleClass("hidden", !e), this.differentBillingRadio.setAttribute("aria-expanded", e), this.$billingAddress.find("input, select, textarea").prop("disabled", !e)
            }, n
        }(Behaviour)
    }.call(this);
    var _ = t(function (e, t) {
        "use strict";
        function n(e, t) {
            var n = e.getAttribute("data-google-places"), r = !0, i = !1, o = void 0;
            try {
                for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                    var u = a.value, l = !0, c = !1, d = void 0;
                    try {
                        for (var h, p = u.types[Symbol.iterator](); !(l = (h = p.next()).done); l = !0) {
                            var f = h.value;
                            if (f === n)return u.long_name
                        }
                    } catch (m) {
                        c = !0, d = m
                    } finally {
                        try {
                            !l && p["return"] && p["return"]()
                        } finally {
                            if (c)throw d
                        }
                    }
                }
            } catch (m) {
                i = !0, o = m
            } finally {
                try {
                    !r && s["return"] && s["return"]()
                } finally {
                    if (i)throw o
                }
            }
            return ""
        }

        function s(e, t) {
            e.val() !== t && e.val(t).change()
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var u = function (e) {
            function t() {
                return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return r(t, e), o(t, [{
                key: "instantiateGooglePlaces", value: function (e) {
                    if (window.google && ("undefined" != typeof this.autocomplete && google.maps.event.clearInstanceListeners(this.$input.get(0)), this.$input = this.$(e.target), this.$input.is(this.$("[data-google-places]").first()))) {
                        var t = this.$('[data-address-field="country"]').find("option:selected").data("code");
                        this.autocomplete = new google.maps.places.Autocomplete(this.$input.get(0)), this.autocomplete.addListener("place_changed", this.placeChanged.bind(this)), this.autocomplete.setComponentRestrictions({country: t}), this.$input.on("keydown", function (e) {
                            13 === e.which && h(".pac-container:visible").length && e.preventDefault()
                        })
                    }
                }
            }, {
                key: "placeChanged", value: function () {
                    var e = this.autocomplete.getPlace();
                    if (null !== e.address_components) {
                        var t = !0, r = !1, i = void 0;
                        try {
                            for (var o, a = Array.from(this.$("[data-google-places]"))[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                                var u = o.value;
                                s(this.$(u), Helpers.Utils.valueFor(u, n(u, e.address_components)))
                            }
                        } catch (l) {
                            r = !0, i = l
                        } finally {
                            try {
                                !t && a["return"] && a["return"]()
                            } finally {
                                if (r)throw i
                            }
                        }
                        "name" === this.$input.data("google-places") && s(this.$input, Helpers.Utils.valueFor(this.$input.get(0), e.name))
                    }
                }
            }, {
                key: "events", get: function () {
                    return {"focus input[data-google-places]": "instantiateGooglePlaces"}
                }
            }]), t
        }(Behaviour);
        t["default"] = u, window.GooglePlaces = u
    });
    (function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.CreditCard = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), n.prototype.events = {
                "focus [data-credit-card]": "initializePayments",
                'payment.cardType [data-credit-card="number"]': "toggleCardType",
                'change [data-credit-card="number"]': "onChange",
                'CardFields:cardtype [data-card-fields="number"]': "toggleHostedFieldsCardType"
            }, n.prototype.initializePayments = function () {
                return this.paymentsInitialized ? void 0 : (this.$('[data-credit-card="cvv"]').payment("formatCardCVC"), this.$('[data-credit-card="number"]').payment("formatCardNumber"), this.paymentsInitialized = !0)
            }, n.prototype.toggleCardTypeIcon = function (e, t) {
                var n, r, i, o, a, s;
                return i = e.closest("[data-subfields-for-gateway]"), s = i.attr("data-subfields-for-gateway"), n = this.$("[data-brand-icons-for-gateway='" + s + "']"), n.siblings("input[type=radio]:not(:checked)").length > 0 ? void 0 : (o = n.find("[data-payment-icon]").removeClass("selected"), r = o.filter("[data-payment-icon=" + this.normalizeTypes(t) + "]"), n.toggleClass("known", !!r.length), r.length || (r = o.filter("[data-payment-icon=generic]")), r.addClass("selected"), a = "amex" === t || "unknown" === t ? t : "other", h("[data-cvv-tooltip]").addClass("hidden").filter("[data-cvv-tooltip='" + a + "']").removeClass("hidden"))
            }, n.prototype.toggleDebitCardFields = function (e) {
                return h("[data-debit-card-fields]").toggle(this.isDebitCard(e))
            }, n.prototype.toggleCardType = function (e, t) {
                return this.toggleCardTypeIcon(h(e.target), t), this.toggleDebitCardFields(t)
            }, n.prototype.toggleHostedFieldsCardType = function (e) {
                return this.toggleCardType(e, e.originalEvent.cardType)
            }, n.prototype.onChange = function (e) {
                var t;
                return t = h.payment.cardType(h(e.target).val()), h(e.target).trigger("payment.cardType", t)
            }, n.prototype.isDebitCard = function (e) {
                return "maestro" === e
            }, n.prototype.normalizeTypes = function (e) {
                var t;
                return t = {mastercard: "master", amex: "american-express", dinersclub: "diners-club"}, t[e] || e
            }, n
        }(Behaviour)
    }).call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.CreditCardV2 = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), n.prototype.init = function () {
                var e;
                return this.toggleDebitCardFields(), e = h("[data-credit-card-summary]"), 0 !== e.length ? this.toggleCardTypeIcon(e, e.find("[data-payment-icon]").attr("data-payment-icon")) : void 0
            }, n.prototype.toggleDebitCardFields = function (e) {
                var t;
                return t = this.$("[data-debit-card-field]"), 0 !== t.length ? this.isDebitCard(e) ? this.showDebitCardFields(t) : this.hideDebitCardFields(t) : void 0
            }, n.prototype.showDebitCardFields = function (e) {
                return e.removeClass("hidden hidden-if-js"), this.changeClass("[data-credit-card-name]", {from: "field--half"}), this.changeClass("[data-credit-card-start]", {
                    from: "field--quarter",
                    to: "field--three-eights"
                }), this.changeClass("[data-credit-card-expiry]", {
                    from: "field--quarter",
                    to: "field--three-eights"
                }), this.$("[data-debit-card-alternative-text]").each(function (e) {
                    return function (t, n) {
                        var r;
                        return r = h(n), e.backupDefaultText(r), e.changeText(r, "debitCardAlternativeText")
                    }
                }(this))
            }, n.prototype.hideDebitCardFields = function (e) {
                return e.addClass("hidden"), this.changeClass("[data-credit-card-name]", {to: "field--half"}), this.changeClass("[data-credit-card-start]", {
                    from: "field--three-eights",
                    to: "field--quarter"
                }), this.changeClass("[data-credit-card-expiry]", {
                    from: "field--three-eights",
                    to: "field--quarter"
                }), this.$("[data-debit-card-alternative-text]").each(function (e) {
                    return function (t, n) {
                        return e.changeText(h(n), "debitCardDefaultText")
                    }
                }(this))
            }, n.prototype.changeClass = function (e, t) {
                var n, r, i, o;
                return i = null != t ? t : {}, r = i.from, o = i.to, n = h(e).closest(".field"), null != r && n.removeClass(r), null != o ? n.addClass(o) : void 0
            }, n.prototype.backupDefaultText = function (e) {
                var t, n;
                return n = e.find("label"), t = e.find("input[placeholder]"), n.data("debitCardDefaultText", n.text()), n.data("debitCardAlternativeText", e.data("debitCardAlternativeText")), t.data("debitCardDefaultText", t.attr("placeholder")), t.data("debitCardAlternativeText", e.data("debitCardAlternativeText"))
            }, n.prototype.changeText = function (e, t) {
                var n, r;
                return r = e.find("label"), n = e.find("input[placeholder]"), r.text(r.data(t)), n.attr("placeholder", r.data(t))
            }, n
        }(this.CreditCard)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.OrderSummaryUpdater = function (t) {
            function n() {
                n.__super__.constructor.apply(this, arguments), this.$('[data-address-field="country"]').each(function (e) {
                    return function (t, n) {
                        return e.refresh(n)
                    }
                }(this))
            }

            return e(n, t), n.prototype.events = {
                'change [data-address-field="country"]': "onChange",
                'change [data-address-field="province"]': "onChange",
                'change [data-address-field="zip"]': "onChange",
                "OrderSummaryUpdater:addressChanged [data-update-order-summary-hook]": "onChange"
            }, n.prototype.onChange = function (e) {
                return this.debounce(function (t) {
                    return function () {
                        return t.refresh(e.target)
                    }
                }(this), 200);
            }, n.prototype.refresh = function (e) {
                var t;
                return t = h(e).closest("form"), this.ajax({
                    url: t.attr("action"),
                    method: "GET",
                    data: this.serialized(t)
                }).done(function (e) {
                    return function (t) {
                        var n;
                        return n = h("[data-order-summary-section]").map(function (e, t) {
                            return "[data-order-summary-section=" + h(t).attr("data-order-summary-section") + "]"
                        }), e.updatePage(t, n.toArray().join(", "))
                    }
                }(this)), !1
            }, n.prototype.serialized = function (e) {
                var t, n;
                return n = h("[data-step]").data("step"), t = e.find(":input").not("[name='step']").serializeArray(), null != n && t.push({
                    name: "step",
                    value: n
                }), h.param(t)
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.ClientDetailsTracker = function (t) {
            function n() {
                var e, t, r;
                n.__super__.constructor.apply(this, arguments), r = h("<input>").attr("type", "hidden").attr("name", "checkout[client_details][browser_width]").val(h(window).width()), e = h("<input>").attr("type", "hidden").attr("name", "checkout[client_details][browser_height]").val(h(window).height()), t = h("<input>").attr("type", "hidden").attr("name", "checkout[client_details][javascript_enabled]").val(1), this.$("form").append(r).append(e).append(t)
            }

            return e(n, t), n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.ErrorRemover = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), n.prototype.KEY_CODES = {TAB: 9}, n.prototype.events = {
                "CardFields:keyup [data-card-fields]": "removeError",
                "keyup .field--error input": "removeError",
                "keyup .field--error textarea": "removeError",
                "change .field--error input": "removeError",
                "change .field--error textarea": "removeError",
                "change .field--error select": "removeError"
            }, n.prototype.removeError = function (e) {
                var t;
                if (!(e.originalEvent && e.originalEvent.isTab || e.keyCode === this.KEY_CODES.TAB || e.restoredFromBackup))return t = h(e.target).closest(".field--error"), t.removeClass("field--error")
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.FloatingLabel = function (t) {
            function n() {
                n.__super__.constructor.apply(this, arguments), h("html").addClass("floating-labels"), this.$("input, select, textarea, .field__input--iframe-container").each(function (e) {
                    return function (t, n) {
                        return e.moveLabelInsideFieldInputWrapper(h(n)), e.toggleStandardFieldFloatClass(h(n))
                    }
                }(this)), Browser.ie || setTimeout(function (e) {
                    return function () {
                        return e.$element.addClass("animate-floating-labels")
                    }
                }(this))
            }

            var r, i;
            return e(n, t), n.dependencies = [Modernizr.placeholder, Browser.gteSafari6, Browser.gteIe11], r = "field--show-floating-label", i = "field--active", n.prototype.events = {
                "keyup input": "toggleStandardFieldFloatClass",
                "blur input, select": "toggleStandardFieldFloatClass",
                "change input, select": "toggleStandardFieldFloatClass",
                "FloatingLabel:change input, select": "toggleStandardFieldFloatClass",
                "blur input, select, textarea": "onStandardFieldBlur",
                "focus input, select, textarea": "onFocus",
                "CardFields:keyup [data-card-fields]": "toggleHostedFieldFloatClass",
                "CardFields:blur [data-card-fields]": "toggleHostedFieldFloatClass",
                "CardFields:change [data-card-fields]": "toggleHostedFieldFloatClass",
                "CardFields:blur [data-card-fields]": "onHostedFieldBlur",
                "CardFields:focus [data-card-fields]": "onFocus"
            }, n.prototype.moveLabelInsideFieldInputWrapper = function (e) {
                var t, n, r;
                return r = e.closest(".field"), n = r.find(".field__label"), t = r.find(".field__input-wrapper"), t.prepend(n)
            }, n.prototype.toggleStandardFieldFloatClass = function (e) {
                var t, n, i;
                return t = e.target ? this.$(e.target) : e, n = t.closest(".field:not(.field--hidden-label)"), n.length ? (i = t.val(), null === i || i.length > 0 || Browser.ie && t.is(":focus") ? n.addClass(r) : t.is(":focus") ? void 0 : n.removeClass(r)) : void 0
            }, n.prototype.toggleHostedFieldFloatClass = function (e) {
                var t, n;
                return t = this.$(e.target).find("iframe"), n = t.closest(".field"), e.originalEvent.isValueEmpty ? e.type.indexOf("blur") > 0 ? (n.removeClass(r), t.trigger("CardFields:unfloatLabel", e.originalEvent.targetName)) : void 0 : (n.addClass(r), t.trigger("CardFields:floatLabel", e.originalEvent.targetName))
            }, n.prototype.onStandardFieldBlur = function (e) {
                var t, n;
                return t = this.$(e.target), n = t.closest(".field"), n.removeClass(i)
            }, n.prototype.onHostedFieldBlur = function (e) {
                return this.onStandardFieldBlur(e), this.toggleHostedFieldFloatClass(e)
            }, n.prototype.onFocus = function (e) {
                var t;
                return t = this.$(e.target), t.closest(".field").addClass(i), t.trigger("FloatingLabel:change")
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.PaymentExpiry = function (t) {
            function n() {
                var e;
                n.__super__.constructor.apply(this, arguments), e = this.$("[data-payment-month][data-payment-year]"), e.each(function (e) {
                    return function (t, n) {
                        var r, i, o, a, s, u, l;
                        return i = h(n), a = e.$(i.data("paymentMonth")), u = e.$(i.data("paymentYear")), r = i.closest(".field"), o = a.closest(".field"), s = u.closest(".field"), 0 !== a.closest("[data-debit-card-field]").length && (r.attr("data-debit-card-field", "true"), o.removeAttr("data-debit-card-field"), s.removeAttr("data-debit-card-field")), r.removeClass("hidden"), o.addClass("visually-hidden"), a.attr({
                            tabIndex: -1,
                            "aria-hidden": !0
                        }), s.addClass("visually-hidden"), u.attr({
                            tabIndex: -1,
                            "aria-hidden": !0
                        }), i.payment("formatCardExpiry"), l = function () {
                            var e, t;
                            return (e = a.val()) && (t = u.val()) ? (1 === e.length && (e = "0" + e), t = t.slice(-2), i.val(e + " / " + t), i.trigger("FloatingLabel:change")) : void 0
                        }, u.change(l), l(), e
                    }
                }(this))
            }

            return e(n, t), n.dependencies = [Browser.gteSafari6], n.prototype.events = {
                "change [data-payment-month][data-payment-year]": "populateFallback",
                "keyup [data-payment-month][data-payment-year]": "populateFallback"
            }, n.prototype.populateFallback = function (e) {
                var t, n, r, i;
                return t = h(e.target), n = this.$(t.data("paymentMonth")), r = this.$(t.data("paymentYear")), i = t.payment("cardExpiryVal"), n.val(i.month), r.val(i.year)
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.Drawer = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            var r;
            return e(n, t), r = "webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd", n.prototype.events = {"click [data-drawer-toggle]": "onToggleClick"}, n.prototype.onToggleClick = function (e) {
                var t, n;
                return t = this.$(e.target).closest("[data-drawer-toggle]"), n = h(t.data("drawerToggle")), this.toggle(t, n)
            }, n.prototype.toggle = function (e, t) {
                var n, i, o;
                return t.wrapInner("<div />"), i = t.height(), o = t.find("> div").height(), n = 0 === i ? o : 0, t.css("height", i), t.find("> div").contents().unwrap(), setTimeout(function (r) {
                    return function () {
                        return e.toggleClass("order-summary-toggle--show order-summary-toggle--hide"), t.toggleClass("order-summary--is-expanded order-summary--is-collapsed"), t.addClass("order-summary--transition"), t.css("height", n)
                    }
                }(this), 0), t.one(r, function (e) {
                    return function (e) {
                        return t.is(e.target) ? (t.removeClass("order-summary--transition"), t.removeAttr("style")) : void 0
                    }
                }(this))
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.Modal = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), n.prototype.TEMPLATE = '<div class="modal-backdrop" role="dialog" aria-labelledby="modal-title" data-modal-backdrop>\n  <div class="modal">\n    <div class="modal__header">\n      <h1 class="modal__header__title" id="modal-title">\n      </h1>\n      <div class="modal__close">\n        <button type="button" class="icon icon--close-modal" data-modal-close>\n          <span class="visually-hidden" id="close-modal-text">\n          </span>\n        </button>\n      </div>\n    </div>\n    <div class="modal__content">\n      <svg class="modal__loading-icon icon icon--spinner" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0v2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14h2z" /></svg>\n    </div>\n  </div>\n</div>', n.prototype.TRANSITION_END_EVENTS = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", n.prototype.events = {
                "click [data-modal-backdrop]": "clickToClose",
                "keydown body": "handleKeys",
                "click [data-modal]": "showModal",
                "modal:show html": "showModal",
                "click [data-modal-close]": "hideModal",
                "modal:hide html": "hideModal"
            }, n.prototype.showModal = function (e, t) {
                var n;
                return null == t && (t = {}), e.preventDefault(), this.lastActiveElement = document.activeElement, n = h(e.target), this.$element.addClass("has-modal").find("[data-header], [data-content]").attr("aria-hidden", "true"), this.initModal(), t.backdropExtraClass && this.modal.addClass(t.backdropExtraClass), t.modalExtraClass && this.modal.find(".modal").addClass(t.modalExtraClass), t.html ? (this.modal.find(".modal").html(h(t.html)), t.afterOpen ? this.modal.one(this.TRANSITION_END_EVENTS, function (e) {
                    return function (n) {
                        return t.afterOpen(e)
                    }
                }(this)) : void 0) : (this.modal.find("#modal-title").text(n.attr("title")), this.modal.find("#close-modal-text").text(n.data("close-text")), h.get(n.attr("href"), function (e) {
                    return function (t) {
                        return e.modal.find(".modal__content").html(t)
                    }
                }(this)))
            }, n.prototype.initModal = function (e) {
                return this.modal && this.modal.remove(), this.modal = h(this.TEMPLATE), h(document.body).append(this.modal), getComputedStyle(this.modal[0]).opacity, this.modal.addClass("modal-backdrop--is-visible"), this.modal
            }, n.prototype.clickToClose = function (e) {
                return h(e.target).is("[data-modal-backdrop]") ? this.hideModal() : void 0
            }, n.prototype.handleKeys = function (e) {
                return this.isModalOpen() && 27 === e.keyCode ? (this.hideModal(), !1) : void 0
            }, n.prototype.hideModal = function (e, t) {
                return this.modal.removeClass("modal-backdrop--is-visible").addClass("modal-backdrop--is-closing"), this.$element.removeClass("has-modal"), this.$("[data-header], [data-content]").attr("aria-hidden", "false"), this.lastActiveElement ? this.lastActiveElement.focus() : void 0
            }, n.prototype.isModalOpen = function () {
                return this.$element.hasClass("has-modal")
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }, t = function (e, t) {
            function r() {
                this.constructor = e
            }

            for (var i in t)n.call(t, i) && (e[i] = t[i]);
            return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
        }, n = {}.hasOwnProperty;
        this.Popover = function (n) {
            function r() {
                return this.closeOnEscape = e(this.closeOnEscape, this), this.debouncedComputePositionPopover = e(this.debouncedComputePositionPopover, this), this.computePositionPopover = e(this.computePositionPopover, this), r.__super__.constructor.apply(this, arguments)
            }

            return t(r, n), r.prototype.POSITIONS = {
                right: "right",
                left: "left",
                top: "top",
                bottomLeft: "bottomLeft",
                bottomRight: "bottomRight"
            }, r.prototype.MOBILE_BREAKPOINT = 750, r.prototype.ESC_KEY = 27, r.prototype.DEFAULT_POSITION = "right", r.prototype.POPOVER_OFFSET = 0, r.prototype.POPOVER_OFFSET_TOP = -17, r.prototype.POPOVER_OFFSET_RIGHT = -3, r.prototype.POPOVER_TEMPLATE = '<div class="popover-backdrop" data-popover-backdrop>\n  <div class="popover" role="dialog" aria-labelledby="popover-title" tabindex="-1">\n    <div data-popover-content></div>\n\n    <div class="popover__close">\n      <button type="button" class="icon icon--close-modal" data-popover-close aria-labelledby="dialog-close-title">\n      </button>\n    </div>\n  </div>\n</div>', r.prototype.events = {
                "click [data-popover-backdrop]": "clickToClose",
                "click [data-popover-close]": "hidePopover",
                "popover:create html": "createPopover",
                "popover:show html": "showPopover",
                "popover:updatePosition html": "computePositionPopover",
                "popover:hide html": "hidePopover"
            }, r.prototype.init = function () {
                return this.$body = this.$("body"), this.isRTL = "rtl" === h("html").attr("dir"), this.$window = h(window)
            }, r.prototype.createPopover = function (e, t) {
                return null == t && (t = {}), this.popoverBundle && this.popoverBundle.remove(), this.popoverBundle = h(this.POPOVER_TEMPLATE), this.popoverBundle.find("[data-popover-content]").html(h(t.html)), this.popover = this.popoverBundle.find(".popover"), this.$anchor = h(t.anchor), this.$body.append(this.popoverBundle), this.popoverPosition = t.position || this.DEFAULT_POSITION, this.showPopover(t)
            }, r.prototype.showPopover = function (e) {
                return e.beforeShow && e.beforeShow(), this.$body.on("keydown", this.closeOnEscape), this.lastFocusElement = document.activeElement, this.$element.addClass("has-popover").find("[data-header], [data-content]").attr("aria-hidden", "true"), this.computePositionPopover(), this.$window.on("resize", this.debouncedComputePositionPopover), this.popoverBundle.addClass("popover-backdrop--visible").removeClass("popover--hidden"), Helpers.Animation.onTransitionEnd(this.popoverBundle).done(function (t) {
                    return function () {
                        return t.popover[0].focus(), e.afterShow ? e.afterShow() : void 0
                    }
                }(this)), ShopifyAnalytics.lib.track("popover/open", {checkout_token: Shopify.Checkout.token})
            }, r.prototype.hidePopover = function (e, t) {
                return this.isPopoverOpen() ? (Helpers.Animation.onTransitionEnd(this.popoverBundle).done(function (e) {
                    return function () {
                        return e.lastFocusElement && e.lastFocusElement.focus(), e.$element.removeClass("has-popover").find("[data-header], [data-content]").attr("aria-hidden", "false")
                    }
                }(this)), this.$window.off("resize", this.debouncedComputePositionPopover), this.$body.off("keydown", this.closeOnEscape), this.popoverBundle.removeClass("popover-backdrop--visible").addClass("popover--hidden"), ShopifyAnalytics.lib.track("popover/close", {checkout_token: Shopify.Checkout.token})) : void 0
            }, r.prototype.computePositionPopover = function (e) {
                return this.$body.outerWidth() < this.MOBILE_BREAKPOINT ? this.popover.removeAttr("style") : (this.anchorOffset = this.$anchor.offset(), this.anchorWidth = this.$anchor.outerWidth(), this.popoverWidth = this.popover.outerWidth(), this.isRTL && this.popoverPosition === this.POSITIONS.right ? this.anchorOffset.left < this.popoverWidth ? this.setPosition(this.POSITIONS.bottomRight) : this.setPosition(this.POSITIONS.left) : this.popoverPosition === this.POSITIONS.right && this.$body.outerWidth() < this.anchorOffset.left + this.anchorWidth + this.popoverWidth ? this.setPosition(this.POSITIONS.bottomLeft) : this.setPosition(this.popoverPosition))
            }, r.prototype.debouncedComputePositionPopover = function () {
                return this.debounce(this.computePositionPopover, 200)
            }, r.prototype.setPosition = function (e) {
                switch (this.popover.removeClass("popover--bottom-right popover--bottom-left popover--top"), e) {
                    case this.POSITIONS.right:
                        return this.popover.css({
                            left: this.anchorOffset.left + this.anchorWidth + this.POPOVER_OFFSET,
                            top: this.anchorOffset.top + this.POPOVER_OFFSET_TOP
                        });
                    case this.POSITIONS.left:
                        return this.popover.css({
                            left: this.anchorOffset.left - this.popoverWidth - this.POPOVER_OFFSET_RIGHT,
                            top: this.anchorOffset.top + this.POPOVER_OFFSET_TOP
                        });
                    case this.POSITIONS.top:
                        return this.popover.addClass("popover--top").css({
                            left: this.anchorOffset.left + this.anchorWidth / 2 - this.popoverWidth / 2,
                            top: this.anchorOffset.top - this.popover.outerHeight() + this.POPOVER_OFFSET_TOP
                        });
                    case this.POSITIONS.bottomRight:
                        return this.popover.addClass("popover--bottom-right").css({
                            left: this.anchorOffset.left + this.POPOVER_OFFSET_RIGHT,
                            top: this.anchorOffset.top + this.$anchor.outerHeight() + this.POPOVER_OFFSET
                        });
                    case this.POSITIONS.bottomLeft:
                        return this.popover.addClass("popover--bottom-left").css({
                            left: this.anchorOffset.left + this.anchorWidth - this.popoverWidth + this.POPOVER_OFFSET_RIGHT,
                            top: this.anchorOffset.top + this.$anchor.outerHeight() + this.POPOVER_OFFSET
                        })
                }
            }, r.prototype.clickToClose = function (e) {
                return h(e.target).is("[data-popover-backdrop]") ? this.hidePopover() : void 0
            }, r.prototype.closeOnEscape = function (e) {
                return this.isPopoverOpen() && e.keyCode === this.ESC_KEY ? this.hidePopover() : void 0
            }, r.prototype.isPopoverOpen = function () {
                return this.$element.hasClass("has-popover")
            }, r
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.ReductionForm = function (t) {
            function n() {
                n.__super__.constructor.apply(this, arguments), this.updateSubmitBtnState()
            }

            var r;
            return e(n, t), r = "btn--disabled", n.prototype.events = {
                "submit [data-reduction-form]": "onReductionFormSubmit",
                "input [data-discount-field]": "onInput"
            }, n.prototype.onReductionFormSubmit = function (e) {
                var t;
                return e.preventDefault(), t = this.$(e.target), t.find(".btn[type=submit]").addClass("btn--loading").attr("disabled", !0), this.ajax({
                    url: t.attr("action"),
                    method: t.attr("method"),
                    data: t.serialize()
                }).done(function (e) {
                    return function (t) {
                        var n;
                        return n = e.updateSubmitBtnState(t), e.updatePage(n, e.selectorsToUpdate())
                    }
                }(this))
            }, n.prototype.selectorsToUpdate = function () {
                var e;
                return e = ["[data-reduction-form=update]", "[data-step]", "[data-alternative-payments]"], e = e.concat(this.orderSummarySectionSelectors()), e.join(", ")
            }, n.prototype.orderSummarySectionSelectors = function () {
                return h("[data-order-summary-section]").map(function () {
                    return "[data-order-summary-section=" + h(this).attr("data-order-summary-section") + "]"
                }).toArray()
            }, n.prototype.onInput = function () {
                return this.updateSubmitBtnState()
            }, n.prototype.updateSubmitBtnState = function (e) {
                var t;
                return null == e && (e = document.body), t = h(e), t.find("[data-reduction-form]").each(function () {
                    var e, t;
                    return e = h(this).find("[data-discount-field]"), t = h(this).find(".btn[type=submit]"), e.val() ? t.removeClass(r) : t.addClass(r)
                }), t
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.Autofocus = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), n.prototype.init = function () {
                return setTimeout(function () {
                    var e, t;
                    return t = h(".field--error input:visible"), e = h("input[data-autofocus=true]:visible").first(), t.length ? t.first().focus() : h("html.desktop").length ? e.focus() : void 0
                })
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.SectionToggle = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), n.prototype.events = {
                "click [data-hide-on-click]": "hideTargetedSections",
                "click [data-enable-on-click]": "enableTargetedSections"
            }, n.prototype.init = function () {
                var e;
                return e = this.$(this.$("[data-enable-on-click]").attr("data-enable-on-click")), e.attr("aria-hidden", !0), e.find(":input").prop("disabled", !0)
            }, n.prototype.hideTargetedSections = function (e) {
                var t;
                return e.preventDefault(), t = this.$(h(e.target).attr("data-hide-on-click")), t.addClass("visually-hidden").attr("aria-hidden", !0), t.find(":input").prop("disabled", !0)
            }, n.prototype.enableTargetedSections = function (e) {
                var t;
                return e.preventDefault(), t = this.$(h(e.target).attr("data-enable-on-click")), t.removeClass("visually-hidden visually-hidden-if-js").attr("aria-hidden", !1), t.find(":input").prop("disabled", !1).first().focus()
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.PaymentForm = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), h.extend(!0, n.prototype, SelectedPaymentMethodMixin.prototype), n.dependencies = [Modernizr.cors], n.prototype.events = {"submit [data-payment-form]": "onFormSubmit"}, n.prototype.onFormSubmit = function (e) {
                return h("html").hasClass("card-fields") ? void 0 : (this.stripOutMisplacedPAN(e), this.retrieveToken(e))
            }, n.prototype.stripOutMisplacedPAN = function (e) {
                var t;
                return t = h(e.target).find('[name="checkout[credit_card][name]"]'), h.payment.validateCardNumber(t.val()) ? t.val("") : void 0
            }, n.prototype.retrieveToken = function (e) {
                var t;
                if (!this.skip(e))return e.preventDefault(), t = this.$(e.target), t.find(".btn.step__footer__continue-btn").prop("disabled", !0).addClass("btn--loading"), this.ajax({
                    url: t.attr("action"),
                    method: t.attr("method"),
                    data: t.serializeArray(),
                    dataType: "json"
                }).fail(function (e) {
                    return function () {
                        return e.submitPlainForm(t)
                    }
                }(this)).done(function (e) {
                    return function (n) {
                        return e.submitAjaxForm(t, n.id)
                    }
                }(this))
            }, n.prototype.skip = function (e) {
                return e.skipBehavior || !this.isGatewaySelected("direct")
            }, n.prototype.submitPlainForm = function (e) {
                return e.trigger(h.Event("submit", {skipBehavior: !0}))
            }, n.prototype.submitAjaxForm = function (e, t) {
                return h.ajax({url: e.attr("data-payment-form"), method: "GET", data: {s: t}}).fail(function (t) {
                    return function () {
                        return t.submitPlainForm(e)
                    }
                }(this)).done(function (e) {
                    return function (t) {
                        return e.updatePage(t, "[data-step=payment_method]")
                    }
                }(this))
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }, t = function (e, t) {
            function r() {
                this.constructor = e
            }

            for (var i in t)n.call(t, i) && (e[i] = t[i]);
            return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
        }, n = {}.hasOwnProperty;
        this.CheckoutCardFields = function (n) {
            function r() {
                return this.showSubmitButtonLoadingState = e(this.showSubmitButtonLoadingState, this), this.showNetworkError = e(this.showNetworkError, this), this.showSDKLoadingError = e(this.showSDKLoadingError, this), this.creditCardSummaryAvailable = e(this.creditCardSummaryAvailable, this), this.creditCardFormHidden = e(this.creditCardFormHidden, this), this.onFormSubmit = e(this.onFormSubmit, this), this.getPlaceholderLightness = e(this.getPlaceholderLightness, this), this.getStyles = e(this.getStyles, this), this.getErrors = e(this.getErrors, this), this.getBodyFontFamilyTag = e(this.getBodyFontFamilyTag, this), this.getBodyFontFamily = e(this.getBodyFontFamily, this), this.getBodyFontType = e(this.getBodyFontType, this), this.getFonts = e(this.getFonts, this), this.toggleGatewayBlankSlate = e(this.toggleGatewayBlankSlate, this), this.toggleGatewaySlate = e(this.toggleGatewaySlate, this), this.showCardFields = e(this.showCardFields, this), r.__super__.constructor.apply(this, arguments)
            }

            var i;
            return t(r, n), i = "34", h.extend(!0, r.prototype, SelectedPaymentMethodMixin.prototype), r.dependencies = [Modernizr.cors, Browser.gteFirefox13, Browser.gteSafari6], r.prototype.init = function () {
                var e;
                if (h("html").hasClass("card-fields") && this.hasGateway("direct"))return this.$("input[name='hosted_fields_redirect']").remove(), this.$tokenField = this.$("input[name='s']"), this.$form = this.$("[data-payment-form]"), this.$iframeContainers = this.$("[data-card-fields]"), this.showCardFields(), "undefined" == typeof CardFields || null === CardFields ? this.showSDKLoadingError() : (e = {
                    fonts: this.getFonts(),
                    styles: this.getStyles(),
                    translations: this.constructor.API.getTranslations(this.$iframeContainers),
                    errors: this.getErrors(),
                    source: {identifier: Shopify.Checkout.token, location: encodeURIComponent(window.location.href)}
                }, h.extend(!0, e, this.constructor.API.options), CardFields.setup(this.$form.get(0), e).then(function (e) {
                    return function (t) {
                        return e.gatewayContainer("direct").addClass("card-fields-container--loaded"), setTimeout(function () {
                            return e.gatewayContainer("direct").addClass("card-fields-container--transitioned")
                        }, 150), e.constructor.API.setup(t), e.$form.submit(function (n) {
                            return e.onFormSubmit(n, t)
                        }), t.on("submit", function (t) {
                            return e.$form.submit()
                        }), e.gatewayContainer("direct").closest(".section__content").prepend(e.$("#card-fields__processing-error"))
                    }
                }(this)))
            }, r.prototype.showCardFields = function () {
                return this.toggleGatewaySlate(), this.toggleGatewayBlankSlate()
            }, r.prototype.toggleGatewaySlate = function () {
                var e;
                if (!this.creditCardSummaryAvailable())return e = this.gatewayContainer("direct").find("[data-slate]"), e.removeClass("visually-hidden")
            }, r.prototype.toggleGatewayBlankSlate = function () {
                var e;
                return e = this.gatewayContainer("direct").find("[data-blank-slate]"), e.addClass("hidden")
            }, r.prototype.getFonts = function () {
                var e, t;
                return t = this.getBodyFontType(), "system" === t ? {} : (e = {}, e[t] = [this.getBodyFontFamily()], e)
            }, r.prototype.getBodyFontType = function () {
                return this.getBodyFontFamilyTag().attr("data-body-font-type")
            }, r.prototype.getBodyFontFamily = function () {
                return this.getBodyFontFamilyTag().attr("data-body-font-family")
            }, r.prototype.getBodyFontFamilyTag = function () {
                return this.bodyFontFamilyTag || (this.bodyFontFamilyTag = h("[data-body-font-family]"))
            }, r.prototype.getErrors = function () {
                var e, t, n, r, i, o;
                for (t = {}, o = this.$iframeContainers, n = 0, i = o.length; i > n; n++)r = o[n], e = h("#" + r.getAttribute("aria-describedby")).text(), "" !== e && (t[h(r).data("card-fields")] = e);
                return t
            }, r.prototype.getStyles = function () {
                var e, t;
                return e = this.$(".content-box .field__input"), t = {
                    color: e.css("color"),
                    "font-family": this.getBodyFontFamily(),
                    padding: "0.94em 0.8em",
                    "placeholder-lightness": this.getPlaceholderLightness(e)
                }
            }, r.prototype.getPlaceholderLightness = function (e) {
                var t, n;
                return "#ffffff" === this.rgb2hex(e.css("background-color")) ? i : (n = this.$(".card-fields-placeholder-lightness"), 0 === n.length ? i : (t = n.css("z-index"), isNaN(t) ? i : t))
            }, r.prototype.onFormSubmit = function (e, t) {
                var n, r;
                if (!e.skipBehavior && this.isGatewaySelected("direct") && !this.creditCardFormHidden())return e.preventDefault(), this.showSubmitButtonLoadingState(!0), this.showNetworkError(!1), n = {}, r = this.$("input[name='checkout[credit_card][vault]']"), "true" === r.val() && (n.ephemeral = !1), t.vaultCard(n).then(function (e) {
                    return function (t) {
                        return e.$tokenField.val(t), e.$form.trigger(h.Event("submit", {skipBehavior: !0}))
                    }
                }(this))["catch"](function (e) {
                    return function (t) {
                        return e.showSubmitButtonLoadingState(!1), e.showNetworkError(!0)
                    }
                }(this))
            }, r.prototype.creditCardFormHidden = function () {
                return this.gatewayContainer("direct").find("[data-slate]").hasClass("visually-hidden")
            }, r.prototype.creditCardSummaryAvailable = function () {
                return 0 !== this.gatewayContainer("direct").has("[data-credit-card-summary]").length
            }, r.prototype.rgb2hex = function (e) {
                var t;
                return t = e.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+)/i), t && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : e
            }, r.prototype.showSDKLoadingError = function () {
                return this.gatewayContainer("direct").find("[data-slate]").addClass("hidden"), this.$("#card-fields__loading-error").removeClass("hidden")
            }, r.prototype.showNetworkError = function (e) {
                return this.$("#card-fields__processing-error").toggleClass("hidden", !e)
            }, r.prototype.showSubmitButtonLoadingState = function (e) {
                return this.$form.find(".step__footer__continue-btn").prop("disabled", e).toggleClass("btn--loading", e)
            }, r
        }(Behaviour)
    }.call(this), function () {
        this.CheckoutCardFields.API = function () {
            function e() {
            }

            var t, n, r, i;
            return n = "1.5em", t = "0.38em", i = "0.94em", r = "padding .2s ease-out", e.options = {}, e.setup = function (o) {
                var a, s;
                return a = h("[data-card-fields] .card-fields-iframe"), s = e.getTranslations(), o.setStyles({
                    transition: r,
                    "-webkit-transition": r
                }), a.on("CardFields:floatLabel", function (e, r) {
                    return o.setStyles(r, {"padding-top": n, "padding-bottom": t}), o.setTranslation(r, "")
                }), a.on("CardFields:unfloatLabel", function (e, t) {
                    return o.setStyles(t, {"padding-top": i, "padding-bottom": i}), o.setTranslation(t, s[t])
                })
            }, e.getTranslations = function (e) {
                var t, n, r, i;
                for (i = {}, e || (e = h("[data-card-fields]")), t = 0, r = e.length; r > t; t++)n = e[t], i[h(n).data("card-fields")] = h(n).data("card-field-placeholder");
                return i
            }, e
        }()
    }.call(this), function () {
        this.ScriptLoader = function () {
            function e() {
            }

            return e.lazyLoad = function (e, t, n) {
                var r;
                return r = document.querySelector("." + t), null != r ? "function" == typeof n ? n() : void 0 : (r = document.createElement("script"), r.async = !0, r.defer = !0, r.onload = n, r.src = e, r.className = t, void document.getElementsByTagName("head")[0].appendChild(r))
            }, e
        }()
    }.call(this), function () {
        var e;
        this.AmazonPayments = {
            metadataTag: function () {
                return document.getElementById("amazon-payments-metadata")
            }, metadata: function (e) {
                return AmazonPayments.metadataTag().getAttribute("data-amazon-payments-" + e)
            }, withinFlow: function () {
                return null != AmazonPayments.metadataTag()
            }, sellerId: function () {
                return AmazonPayments.metadata("seller-id")
            }, language: function () {
                return AmazonPayments.metadata("language")
            }, authorize: function () {
                var e, t;
                return e = AmazonPayments.metadata("callback-url"), t = {
                    popup: !1,
                    scope: "payments:widget payments:shipping_address"
                }, amazon.Login.authorize(t, e)
            }
        }, e = function () {
            function e() {
            }

            return e.prototype.assign = function (e) {
                return this.flow = this[e]
            }, e.prototype.execute = function (e) {
                return this.flow.call(this, e)
            }, e.prototype.checkout = function (e) {
                return AmazonPayments.authorize()
            }, e.prototype.cart = function (e) {
                var t;
                return t = document.createElement("input"), t.type = "hidden", t.name = "goto_amazon_payments", t.value = "amazon_payments", e.parentElement.appendChild(t), t.form.submit()
            }, e
        }(), this.amazonPaymentsButtonHandler = new e, this.AmazonPaymentsPayButton = function () {
            var e, t;
            if (AmazonPayments.withinFlow())return t = AmazonPayments.metadata("widget-library-url"), e = "amazon-payments-widget-library", ScriptLoader.lazyLoad(t, e, onAmazonPaymentsReady)
        }, this.AmazonPaymentsPayButtonReady = function () {
            var e, t, n, r, i, o;
            for (n = document.getElementsByClassName("amazon-payments-pay-button"), o = [], r = 0, i = n.length; i > r; r++)t = n[r], "true" !== t.getAttribute("data-amazon-payments-pay-button") && (OffAmazonPayments.Button(t.id, AmazonPayments.sellerId(), {
                type: "PwA",
                size: "small",
                language: AmazonPayments.language(),
                authorization: function () {
                    return amazonPaymentsButtonHandler.execute(t)
                },
                onError: function (e) {
                    return "undefined" != typeof console && null !== console ? console.error(e.getErrorCode() + ": " + e.getErrorMessage()) : void 0
                }
            }), t.setAttribute("data-amazon-payments-pay-button", "true"), e = t.querySelector("img:not(.alt-payment-list__item__logo):not(.additional-checkout-button__logo)"), o.push(e.className += " alt-payment-list-amazon-button-image"));
            return o
        }
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        AmazonPayments.Base = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), n.prototype.withinFlow = function () {
                return AmazonPayments.withinFlow()
            }, n.prototype.sellerId = function () {
                return AmazonPayments.sellerId()
            }, n.prototype.authorize = function () {
                return AmazonPayments.authorize()
            }, n.prototype.init = function () {
                return window.amazonReady || (window.amazonReady = h.Deferred()), amazonReady.done(function (e) {
                    return function () {
                        return e.setup()
                    }
                }(this))
            }, n.prototype.setup = function () {
            }, n.prototype.enableSubmit = function () {
                return this.$element.closest("form").find("[type=submit]").removeClass("btn--disabled").prop("disabled", !1)
            }, n
        }(Behaviour), AmazonPayments.LogoutLink = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), n.prototype.events = {"click [data-amazon-payments-logout-link]": "logout"}, n.prototype.logout = function (e) {
                return e.preventDefault(), document.cookie = "amazon_Login_accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT", amazon.Login.logout(), window.location = e.target.href
            }, n
        }(Behaviour), AmazonPayments.PaymentGateway = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), h.extend(!0, n.prototype, SelectedPaymentMethodMixin.prototype), n.prototype.events = {"click [type=submit]": "onSubmit"}, n.prototype.onSubmit = function (e) {
                return this.withinFlow() && this.isGatewaySelected("amazon_payments") ? (e.preventDefault(), this.authorize()) : void 0
            }, n
        }(AmazonPayments.Base), AmazonPayments.AddressBook = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), n.prototype.setup = function () {
                var e, t, n;
                if (this.withinFlow())return e = this.$element, t = this.$element.closest("form"), n = t.find("[name=amazon_payments_order_reference_id]"), new OffAmazonPayments.Widgets.AddressBook({
                    sellerId: this.sellerId(),
                    design: {designMode: "responsive"},
                    onOrderReferenceCreate: function (e) {
                        return function (t) {
                            return n.val(t.getAmazonOrderReferenceId()), e.enableSubmit()
                        }
                    }(this),
                    onAddressSelect: function (t) {
                        return e.trigger("OrderSummaryUpdater:addressChanged")
                    },
                    onError: function (e) {
                        return "undefined" != typeof console && null !== console ? console.error(e.getErrorCode() + ": " + e.getErrorMessage()) : void 0
                    }
                }).bind(this.$element.attr("id"))
            }, n
        }(AmazonPayments.Base), AmazonPayments.Wallet = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments);
            }

            return e(n, t), n.prototype.setup = function () {
                return this.withinFlow() ? new OffAmazonPayments.Widgets.Wallet({
                    sellerId: this.sellerId(),
                    amazonOrderReferenceId: this.orderReferenceId(),
                    design: {designMode: "responsive"},
                    onPaymentSelect: function (e) {
                        return function (t) {
                            return e.enableSubmit()
                        }
                    }(this),
                    onError: function (e) {
                        return "undefined" != typeof console && null !== console ? console.error(e.getErrorCode() + ": " + e.getErrorMessage()) : void 0
                    }
                }).bind(this.$element.attr("id")) : void 0
            }, n.prototype.orderReferenceId = function () {
                return this.$element.attr("data-amazon-payments-wallet-widget")
            }, n
        }(AmazonPayments.Base)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.OrderStatusMap = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), n.prototype.init = function () {
                return this.createMap(this.$element)
            }, n.prototype.createMarkers = function (e) {
                var t, n, r, i, o, a, s, u, l, c, d;
                for (this.$map = e, u = {}, t = L.divIcon({
                    className: "current-location-indicator",
                    iconSize: [17, 17]
                }), d = L.divIcon({
                    className: "shipping-location-indicator",
                    iconSize: [18, 23]
                }), c = this.$map.find("[data-marker]"), n = 0, o = c.length; o > n; n++)s = c[n], l = L.popup({
                    closeOnClick: !1,
                    keepInView: !0,
                    closeButton: !1
                }), i = L.latLng(this.$(s).data("lat"), h(s).data("lng")), r = "shipping" === this.$(s).data("type") ? d : t, a = L.marker(i, {icon: r}), l.setContent(this.$(s).html()), a.bindPopup(l), u[this.$(s).data("type")] = a;
                return u
            }, n.prototype.createMap = function (e) {
                var t, n, r, i;
                this.$div = e, L.mapbox.accessToken = this.$div.data("token"), n = L.mapbox.map(this.$div[0], "mapbox.streets"), n.scrollWheelZoom.disable(), i = this.createMarkers(this.$div);
                for (t in i)r = i[t], r.addTo(n);
                return this.fitMapToMarkers(i, n)
            }, n.prototype.fitMapToMarkers = function (e, t) {
                return e.current && e.shipping ? (t.fitBounds(L.latLngBounds([e.current.getLatLng(), e.shipping.getLatLng()])), t.zoomOut(1), e.current.openPopup()) : e.current ? this.openMarkerPopup(e.current, t) : e.shipping ? this.openMarkerPopup(e.shipping, t) : void 0
            }, n.prototype.openMarkerPopup = function (e, t) {
                return t.setView(e.getLatLng(), 13), e.openPopup()
            }, n
        }(Behaviour)
    }.call(this), function () {
        this.OrderStatusPageApi = function () {
            function e() {
            }

            return e.prototype.addContentBox = function () {
                var e;
                return e = arguments, h(function () {
                    var t, n, r, i;
                    for (t = h('<div class="content-box"></div>'), r = 0, i = e.length; i > r; r++)n = e[r], t.append(h('<div class="content-box__row"></div>').html(n));
                    return t.insertBefore(h(".content-box").last())
                })
            }, e
        }()
    }.call(this), function () {
        var e = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
        this.InContextPaypalExpressButton = function () {
            function t(t, n) {
                null == n && (n = {
                    environment: "sandbox",
                    locale: "en_US"
                }), this.startFlow = e(this.startFlow, this), this.merchantId = t, this.options = n, this.options.click = this.startFlow
            }

            return t.prototype.setup = function () {
                return paypal.checkout.setup(this.merchantId, this.options)
            }, t.prototype.startFlow = function (e) {
                return e.preventDefault(), paypal.checkout.initXO(), paypal.checkout.startFlow(this.options.redirectUrl)
            }, t
        }()
    }.call(this), function () {
        var e, t = function (e, t) {
            function r() {
                this.constructor = e
            }

            for (var i in t)n.call(t, i) && (e[i] = t[i]);
            return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
        }, n = {}.hasOwnProperty, r = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
        window.paypalCheckoutReady = function () {
            return e.readyDeferred.resolve()
        }, e = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return t(n, e), n.readyDeferred = h.Deferred(), n.waitFor = [n.readyDeferred], n.prototype.init = function () {
                return this.metadataTag() && this.shouldSetup() && !this.constructor.button ? (this.constructor.button = new InContextPaypalExpressButton(this.merchantId(), {
                    redirectUrl: this.redirectUrl(),
                    environment: this.environment(),
                    click: function () {
                        return void 0
                    },
                    locale: this.locale()
                }), this.constructor.button.setup()) : void 0
            }, n.prototype.onStartFlow = function (e) {
                return this.shouldStartPaypalFlow() && this.constructor.button ? this.constructor.button.startFlow(e) : void 0
            }, n.prototype.shouldStartPaypalFlow = function () {
                return !0
            }, n.prototype.metadataTag = function () {
                return document.getElementById("in-context-paypal-metadata")
            }, n.prototype.metadata = function (e) {
                return this.metadataTag().getAttribute("data-" + e)
            }, n.prototype.merchantId = function () {
                return this.metadata("merchant-id")
            }, n.prototype.environment = function () {
                return this.metadata("environment")
            }, n.prototype.locale = function () {
                return this.metadata("locale")
            }, n.prototype.redirectUrl = function () {
                return this.metadata("redirect-url")
            }, n.prototype.usingPaypalExpress = function () {
                return this.metadata("using-paypal-express")
            }, n.prototype.shouldSetup = function () {
                return !0
            }, n
        }(Behaviour), this.InContextPaypalExpressPayButton = function (e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return t(n, e), n.prototype.events = {"click #paypal-express-checkout-btn": "onStartFlow"}, n.prototype.track = function () {
                return window.ShopifyAnalytics ? ShopifyAnalytics.lib.track("In-Context Paypal Express", {
                    event_type: "started from contact information",
                    checkout_token: Shopify.Checkout.token
                }) : void 0
            }, n
        }(e), this.InContextPaypalExpressPaymentGateway = function (e) {
            function n() {
                return this.shouldStartPaypalFlow = r(this.shouldStartPaypalFlow, this), n.__super__.constructor.apply(this, arguments)
            }

            return t(n, e), h.extend(!0, n.prototype, SelectedPaymentMethodMixin.prototype), n.prototype.events = {"submit [data-payment-form]": "onStartFlow"}, n.prototype.shouldSetup = function () {
                return !this.usingPaypalExpress()
            }, n.prototype.track = function () {
                return window.ShopifyAnalytics ? ShopifyAnalytics.lib.track("In-Context Paypal Express", {
                    event_type: "started from payment_method",
                    checkout_token: Shopify.Checkout.token
                }) : void 0
            }, n.prototype.shouldStartPaypalFlow = function () {
                return this.isGatewaySelected("express")
            }, n.prototype.selectedGatewayId = function () {
                return h("input[name='checkout[payment_gateway]']:checked").val()
            }, n
        }(e)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.InputAnalytics = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return e(n, t), n.prototype.events = {
                "keypress input": "collectKeypress",
                "submit form": "submitCounter"
            }, n.prototype.init = function () {
                return this.counter = {}
            }, n.prototype.collectKeypress = function (e) {
                var t;
                return t = this.counter[e.target.name], this.counter[e.target.name] = (t || 0) + 1
            }, n.prototype.submitCounter = function () {
                return window.ShopifyAnalytics ? ShopifyAnalytics.lib.track("checkout_input_analytics", {
                    checkout_token: Shopify.Checkout.token,
                    counter: JSON.stringify(this.counter)
                }) : void 0
            }, n
        }(Behaviour)
    }.call(this), function () {
        var e = function (e, n) {
            function r() {
                this.constructor = e
            }

            for (var i in n)t.call(n, i) && (e[i] = n[i]);
            return r.prototype = n.prototype, e.prototype = new r, e.__super__ = n.prototype, e
        }, t = {}.hasOwnProperty;
        this.OrderSummaryScrollableProducts = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            var r, i, o;
            return e(n, t), n.dependencies = [Modernizr.anyflexbox], i = "order-summary__section--is-scrollable", r = "order-summary__section--has-scroll", o = 15, n.prototype.init = function () {
                return this.$summaryContainer = h(".order-summary__section--product-list"), this.$summaryWrapper = h(".order-summary__section__content", this.$summaryContainer), this.$productTable = h(".product-table", this.$summaryContainer), h(window).on("resize", function (e) {
                    return function (t) {
                        return e.debounce(function () {
                            var t, n;
                            return n = e.$summaryWrapper.scrollTop(), t = e.$summaryWrapper.height() < e.$productTable.height() - o, e.toggleScrollIndicator(0 === n && t), t ? void 0 : e.$summaryContainer.removeClass(r)
                        }, 200)
                    }
                }(this)).resize()
            }, n.prototype.toggleScrollIndicator = function (e, t) {
                return this.$summaryContainer.toggleClass(i, e), e ? this.addScrollListeners(t) : void 0
            }, n.prototype.addScrollListeners = function (e) {
                return this.$summaryWrapper.one("scroll touchstart", function (e) {
                    return function (t) {
                        return e.toggleScrollIndicator(!1), e.$summaryContainer.addClass(r)
                    }
                }(this)).on("scroll touchstart", function (e) {
                    return function (t) {
                        return e.debounce(function () {
                            return e.toggleScrollIndicator(!1), e.$summaryContainer.toggleClass(r, 0 !== e.$summaryWrapper.scrollTop())
                        }, 25)
                    }
                }(this))
            }, n
        }(Behaviour)
    }.call(this);
    var b = t(function (e, t) {
        "use strict";
        function n(e) {
            var t = document.querySelector('meta[name="' + r + "-" + e + '"]');
            return t ? t.getAttribute("content") : null
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = "shopify-checkout", i = {
            getApiToken: function () {
                return n("api-token")
            }, getAuthorizationToken: function () {
                return n("authorization-token")
            }
        };
        t["default"] = i
    }), A = t(function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function (e) {
            function t(e) {
                a(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n.response = e, n.stack = (new Error).stack, n.name = n.constructor.name, n
            }

            return r(t, e), t
        }(Error);
        t["default"] = n
    });
    !function (e) {
        "use strict";
        function t(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function n(e) {
            return "string" != typeof e && (e = String(e)), e
        }

        function r(e) {
            var t = {
                next: function () {
                    var t = e.shift();
                    return {done: void 0 === t, value: t}
                }
            };
            return y.iterable && (t[Symbol.iterator] = function () {
                return t
            }), t
        }

        function i(e) {
            this.map = {}, e instanceof i ? e.forEach(function (e, t) {
                this.append(t, e)
            }, this) : Array.isArray(e) ? e.forEach(function (e) {
                this.append(e[0], e[1])
            }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
                this.append(t, e[t])
            }, this)
        }

        function o(e) {
            return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(e.bodyUsed = !0)
        }

        function a(e) {
            return new Promise(function (t, n) {
                e.onload = function () {
                    t(e.result)
                }, e.onerror = function () {
                    n(e.error)
                }
            })
        }

        function s(e) {
            var t = new FileReader, n = a(t);
            return t.readAsArrayBuffer(e), n
        }

        function u(e) {
            var t = new FileReader, n = a(t);
            return t.readAsText(e), n
        }

        function l(e) {
            for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)n[r] = String.fromCharCode(t[r]);
            return n.join("")
        }

        function c(e) {
            if (e.slice)return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
        }

        function d() {
            return this.bodyUsed = !1, this._initBody = function (e) {
                if (this._bodyInit = e, e)if ("string" == typeof e)this._bodyText = e; else if (y.blob && Blob.prototype.isPrototypeOf(e))this._bodyBlob = e; else if (y.formData && FormData.prototype.isPrototypeOf(e))this._bodyFormData = e; else if (y.searchParams && URLSearchParams.prototype.isPrototypeOf(e))this._bodyText = e.toString(); else if (y.arrayBuffer && y.blob && _(e))this._bodyArrayBuffer = c(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]); else {
                    if (!y.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !b(e))throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = c(e)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : y.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, y.blob && (this.blob = function () {
                var e = o(this);
                if (e)return e;
                if (this._bodyBlob)return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function () {
                return this._bodyArrayBuffer ? o(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(s)
            }), this.text = function () {
                var e = o(this);
                if (e)return e;
                if (this._bodyBlob)return u(this._bodyBlob);
                if (this._bodyArrayBuffer)return Promise.resolve(l(this._bodyArrayBuffer));
                if (this._bodyFormData)throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, y.formData && (this.formData = function () {
                return this.text().then(f)
            }), this.json = function () {
                return this.text().then(JSON.parse)
            }, this
        }

        function h(e) {
            var t = e.toUpperCase();
            return A.indexOf(t) > -1 ? t : e
        }

        function p(e, t) {
            t = t || {};
            var n = t.body;
            if (e instanceof p) {
                if (e.bodyUsed)throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new i(e.headers)), this.method = e.method, this.mode = e.mode, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "omit", (t.headers || !this.headers) && (this.headers = new i(t.headers)), this.method = h(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n)throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }

        function f(e) {
            var t = new FormData;
            return e.trim().split("&").forEach(function (e) {
                if (e) {
                    var n = e.split("="), r = n.shift().replace(/\+/g, " "), i = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(i))
                }
            }), t
        }

        function m(e) {
            var t = new i;
            return e.split(/\r?\n/).forEach(function (e) {
                var n = e.split(":"), r = n.shift().trim();
                if (r) {
                    var i = n.join(":").trim();
                    t.append(r, i)
                }
            }), t
        }

        function g(e, t) {
            t || (t = {}), this.type = "default", this.status = "status"in t ? t.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText"in t ? t.statusText : "OK", this.headers = new i(t.headers), this.url = t.url || "", this._initBody(e)
        }

        if (!e.fetch) {
            var y = {
                searchParams: "URLSearchParams"in e,
                iterable: "Symbol"in e && "iterator"in Symbol,
                blob: "FileReader"in e && "Blob"in e && function () {
                    try {
                        return new Blob, !0
                    } catch (e) {
                        return !1
                    }
                }(),
                formData: "FormData"in e,
                arrayBuffer: "ArrayBuffer"in e
            };
            if (y.arrayBuffer)var v = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], _ = function (e) {
                return e && DataView.prototype.isPrototypeOf(e)
            }, b = ArrayBuffer.isView || function (e) {
                    return e && v.indexOf(Object.prototype.toString.call(e)) > -1
                };
            i.prototype.append = function (e, r) {
                e = t(e), r = n(r);
                var i = this.map[e];
                this.map[e] = i ? i + "," + r : r
            }, i.prototype["delete"] = function (e) {
                delete this.map[t(e)]
            }, i.prototype.get = function (e) {
                return e = t(e), this.has(e) ? this.map[e] : null
            }, i.prototype.has = function (e) {
                return this.map.hasOwnProperty(t(e))
            }, i.prototype.set = function (e, r) {
                this.map[t(e)] = n(r)
            }, i.prototype.forEach = function (e, t) {
                for (var n in this.map)this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
            }, i.prototype.keys = function () {
                var e = [];
                return this.forEach(function (t, n) {
                    e.push(n)
                }), r(e)
            }, i.prototype.values = function () {
                var e = [];
                return this.forEach(function (t) {
                    e.push(t)
                }), r(e)
            }, i.prototype.entries = function () {
                var e = [];
                return this.forEach(function (t, n) {
                    e.push([n, t])
                }), r(e)
            }, y.iterable && (i.prototype[Symbol.iterator] = i.prototype.entries);
            var A = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            p.prototype.clone = function () {
                return new p(this, {body: this._bodyInit})
            }, d.call(p.prototype), d.call(g.prototype), g.prototype.clone = function () {
                return new g(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new i(this.headers),
                    url: this.url
                })
            }, g.error = function () {
                var e = new g(null, {status: 0, statusText: ""});
                return e.type = "error", e
            };
            var N = [301, 302, 303, 307, 308];
            g.redirect = function (e, t) {
                if (-1 === N.indexOf(t))throw new RangeError("Invalid status code");
                return new g(null, {status: t, headers: {location: e}})
            }, e.Headers = i, e.Request = p, e.Response = g, e.fetch = function (e, t) {
                return new Promise(function (n, r) {
                    var i = new p(e, t), o = new XMLHttpRequest;
                    o.onload = function () {
                        var e = {
                            status: o.status,
                            statusText: o.statusText,
                            headers: m(o.getAllResponseHeaders() || "")
                        };
                        e.url = "responseURL"in o ? o.responseURL : e.headers.get("X-Request-URL");
                        var t = "response"in o ? o.response : o.responseText;
                        n(new g(t, e))
                    }, o.onerror = function () {
                        r(new TypeError("Network request failed"))
                    }, o.ontimeout = function () {
                        r(new TypeError("Network request failed"))
                    }, o.open(i.method, i.url, !0), "include" === i.credentials && (o.withCredentials = !0), "responseType"in o && y.blob && (o.responseType = "blob"), i.headers.forEach(function (e, t) {
                        o.setRequestHeader(t, e)
                    }), o.send("undefined" == typeof i._bodyInit ? null : i._bodyInit)
                })
            }, e.fetch.polyfill = !0
        }
    }("undefined" != typeof self ? self : this);
    var N = t(function (e, t) {
        "use strict";
        function n(e, t) {
            var n = this, r = s({poll: !0, timeout: 2e4}, e), i = r.poll, o = r.timeout;
            if (!i || 202 !== t.status)return t;
            var a = {method: "GET", headers: this.headers};
            return new Promise(function (e, r) {
                n._pollExpiryTimeout = setTimeout(function () {
                    clearTimeout(n._pollScheduleTimeout), r(new Error("API request polling timed out. Exceeded maximum timeout of " + o + "ms"))
                }, o), function i(t) {
                    var n = this;
                    if (202 === t.status) {
                        var o = t.headers.get("Location"), s = 1e3 * (Number(t.headers.get("Retry-After")) || 1);
                        this._pollScheduleTimeout = setTimeout(function () {
                            fetch(o, a).then(i.bind(n))["catch"](r)
                        }, s)
                    } else clearTimeout(this._pollExpiryTimeout), e(t)
                }.call(n, t)
            })
        }

        function r(e) {
            return e.status >= 200 && e.status < 300 ? e : Promise.reject(new i["default"](e))
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = u(A), l = function () {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                a(this, e), this.host = t, this.headers = s({
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }, n)
            }

            return o(e, [{
                key: "get", value: function (e, t) {
                    return this.request("GET", e, null, t)
                }
            }, {
                key: "post", value: function (e, t, n) {
                    return this.request("POST", e, t, n)
                }
            }, {
                key: "patch", value: function (e, t, n) {
                    return this.request("PATCH", e, t, n)
                }
            }, {
                key: "put", value: function (e, t, n) {
                    return this.request("PUT", e, t, n)
                }
            }, {
                key: "stopPolling", value: function () {
                    clearTimeout(this._pollExpiryTimeout), clearTimeout(this._pollScheduleTimeout)
                }
            }, {
                key: "request", value: function (e, t, i, o) {
                    var a = {
                        method: e,
                        headers: this.headers,
                        body: i ? JSON.stringify(i) : null,
                        credentials: "same-origin"
                    };
                    return "GET" === e && delete a.body, "/" === t[0] && this.host && (t = "https://" + this.host + t), fetch(t, a).then(n.bind(this, o)).then(r)
                }
            }]), e
        }();
        t["default"] = l
    }), S = t(function (e, t) {
        "use strict";
        function n(e) {
            var t = e.headers.get(p);
            return e.ok && this.storeAuthorizationToken(t), e
        }

        function s(e) {
            return 204 === e.status || 202 === e.status ? e : e.json()
        }

        function c(e) {
            return btoa(e + ":")
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var d = u(b), h = u(N), p = "X-Shopify-Checkout-Authorization-Token", f = function (e) {
            function t(e) {
                a(this, t);
                var n = d["default"].getApiToken(), r = {
                    Authorization: "Basic " + c(n),
                    "X-Shopify-Checkout-Version": "2016-09-06"
                }, o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r));
                return o.storeAuthorizationToken(d["default"].getAuthorizationToken()), o
            }

            return r(t, e), o(t, [{
                key: "request", value: function (e, r, i, o) {
                    return l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "request", this).call(this, e, r, i, o).then(n.bind(this)).then(s)
                }
            }, {
                key: "storeAuthorizationToken", value: function (e) {
                    e && (this.headers[p] = e)
                }
            }]), t
        }(h["default"]);
        t["default"] = f
    }), C = t(function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = {
            eventListeners: {completePayment: []}, register: function (e, t) {
                n.eventListeners[e].push(t)
            }, trigger: function (e, t) {
                var r = void 0, i = n.eventListeners[e] || [], o = i.reduce(function (e, t) {
                    return e.then(t)
                }, new Promise(function (e) {
                    r = e
                }))["catch"](function () {
                }).then(function () {
                    return t
                })["catch"](function () {
                });
                return r(t), o
            }
        };
        t["default"] = n
    }), E = t(function (e, t) {
        "use strict";
        function n(e) {
            var t = {city: e.locality, province_code: e.administrativeArea, zip: e.postalCode};
            e.countryCode ? t.country_code = e.countryCode.toLowerCase() : e.country && (t.country = e.country.toLowerCase(), "usa" === t.country && (t.country = "united states")), e.givenName && (t.first_name = e.givenName), e.familyName && (t.last_name = e.familyName), e.phoneNumber && (t.phone = e.phoneNumber);
            var n = e.addressLines;
            return n && n.length && (t.address1 = n[0], n[1] && (t.address2 = n[1])), u(t)
        }

        function r(e, t) {
            return {type: "final", label: t, amount: e.total_price}
        }

        function i(e) {
            var t = [{type: "final", label: "Subtotal", amount: h(e)}];
            return e.shipping_line && (t = t.concat([{
                type: "final",
                label: "Shipping",
                amount: e.shipping_line.price
            }])), e.total_tax && (t = t.concat([{
                type: "final",
                label: "Estimated Tax",
                amount: e.total_tax
            }])), e.applied_discount && (t = t.concat([{
                type: "final",
                label: "Discount",
                amount: -e.applied_discount.amount
            }])), t
        }

        function o(e) {
            return a(e).map(d)
        }

        function a(e) {
            return [].concat(e).sort(l)
        }

        function s() {
            var e = new Array(32);
            if ("function" == typeof Uint8Array && "object" === c(window.crypto))e = new Uint8Array(32), window.crypto.getRandomValues(e); else for (var t = e.length - 1; t >= 0; t--)e[t] = Math.floor(255 * Math.random());
            return e.map(function (e) {
                return e.toString(16)
            }).join("")
        }

        function u(e) {
            var t = e.country_code, n = e.country, r = e.zip, i = {};
            return p.test(r) && (("ca" === t || "canada" === n) && (i.zip = r.trim() + " 0Z0"), "gb" === t && (i.zip = r.trim() + " 0ZZ")), Object.assign({}, e, i)
        }

        function l(e, t) {
            var n = parseFloat(e.price), r = parseFloat(t.price);
            return r > n ? -1 : n > r ? 1 : 0
        }

        function d(e) {
            return {identifier: e.id, label: e.title, detail: "", amount: e.price}
        }

        function h(e) {
            return (e.line_items || []).reduce(function (e, t) {
                return e + t.quantity * t.price
            }, 0)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.addressFromEvent = n, t.totalFromCheckout = r, t.lineItemsFromCheckout = i, t.transformedShippingRates = o, t.sortShippingRates = a, t.generateRandomId = s;
        var p = /^[a-z0-9]{2,4}\s?$/i
    }), w = t(function (e, t) {
        "use strict";
        function n(e, t) {
            for (var n = 0; n < a.length; n++)if (a[n][0].test(e)) {
                var r = a[n][1];
                return "function" == typeof r && t ? r(t.field) : r
            }
            return s
        }

        function r(e) {
            var t = [];
            return Object.keys(e).forEach(function (r) {
                Object.keys(e[r]).forEach(function (i) {
                    e[r][i].forEach(function (e) {
                        e && e.code && t.push(n(r + "_" + i + "_" + e.code, {field: i, category: r}))
                    })
                })
            }), t
        }

        function i(e) {
            e = Array.isArray(e) ? e : [e];
            var t = e.map(function (e) {
                return o(e)
            });
            return 1 === t.length && t[0].startsWith("Enter ") && (t = ["Please e" + t[0].substr(1) + " and try again"]), t
        }

        function o(e) {
            switch (e) {
                case"Some products became unavailable and your cart has been updated. We're sorry for the inconvenience.":
                    return n("not_enough_in_stock");
                default:
                    return e
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.errorFromCode = n, t.errorMessagesFromJson = r, t.normalizeErrors = i;
        var a = [[/first_name_blank$/, "Enter a first name for your shipping address"], [/last_name_blank$/, "Enter a last name for your shipping address"], [/address1_blank$/, "Enter your shipping address"], [/address2_blank$/, "Enter the apt, suite, etc. for your shipping address"], [/city_blank$/, "Enter the city of your shipping address"], [/country(_code)?_blank$/, "Select a country for your shipping address"], [/country(_code)?_not_supported$/, "Enter a valid country for your shipping address"], [/province(_code)?_blank$/, "Enter a state / province for your shipping address"], [/province(_code)?_invalid_state_in_country$/, "Enter a valid state for your shipping address country"], [/province(_code)?_invalid_province_in_country$/, "Enter a valid province for your shipping address country"], [/province(_code)?_invalid_region_in_country$/, "Enter a valid region for your shipping address country"], [/company_blank$/, "Enter a company name for your shipping address"], [/phone_blank$/, "Enter a valid phone number for your shipping address"], [/zip(_code)?_blank$/, "Enter a ZIP code / postal code for your shipping address"], [/zip(_code)?_invalid_for_country$/, "Enter a valid ZIP code / postal code for your shipping address"], [/zip(_code)?_invalid_for_country_and_province$/, "Enter a valid ZIP code / postal code for your shipping address"], [/email_invalid$/, "Enter a valid email address"], [/generic_error$/, "An error occurred while processing your payment. Please try again."], [/credit_card_processing$/, "Your card can't be processed due to technical difficulties. Please try again in a few minutes."], [/not_enough_in_stock$/, "Some items became unavailable. Refresh your cart and try again."], [/full_name_required$/, "Enter both your first and last name"], [/total_price_too_big$/, "Your order total exceeds the limit. Please edit your cart and try again."], [/total_price_zero$/, "To check out with Apple Pay, your order total must be greater than 0. Please choose a new payment method and try again."], [/no_shipping_option$/, "Sorry, we currently don't ship to this country. Please choose a new shipping address and try again."], [/expired_card/, "Your credit card is expired. Please update your card."], [/card_declined/, "Your credit card was declined. In order to resolve this issue, you will need to contact your bank."], [/(invalid|blank)$/, function (e) {
            return "Enter a valid " + e
        }]], s = "An error occurred while processing your checkout. Please try again."
    }), T = t(function (e, t) {
        "use strict";
        function n() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.checkout || e;
            return t.billing_address ? ApplePaySession.STATUS_INVALID_BILLING_POSTAL_ADDRESS : t.shipping_address ? ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS : ApplePaySession.STATUS_FAILURE
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = u(C), i = function () {
            function e(t) {
                var n = t.apiClient, r = t.sessionToken, i = t.merchantName, o = t.session, s = t.strategy, u = t.shopId, l = t.showErrors;
                if (a(this, e), this.apiClient = n, this.strategy = s, this._sessionToken = r || E.generateRandomId(), this._merchantName = i, this._session = o, this._shopId = u, this._showErrors = l, this._firstShippingContactSelected = !0, !s)throw new Error("`strategy` must be supplied to ShopifyApplePaySession");
                this._session.oncancel = this._trackCallback("cancelled", this._onCancel).bind(this), this._session.onvalidatemerchant = this._trackCallback("merchant validated", this._onValidateMerchant.bind(this)), this._session.onshippingcontactselected = this._trackCallback("shipping contact selected", this._onShippingContactSelected).bind(this), this._session.onshippingmethodselected = this._trackCallback("shipping method selected", this._onShippingMethodSelected).bind(this), this._session.onpaymentauthorized = this._trackCallback("payment authorized", this._onPaymentAuthorized).bind(this), this._session.onpaymentmethodselected = this._trackCallback("payment method selected", this._onPaymentMethodSelected).bind(this)
            }

            return o(e, [{
                key: "begin", value: function () {
                    this._session.begin()
                }
            }, {
                key: "_onCancel", value: function () {
                    return this.apiClient.stopPolling(), Promise.resolve()
                }
            }, {
                key: "_onValidateMerchant", value: function (e) {
                    var t = this, n = e.validationURL, r = {
                        domain: window.location.hostname,
                        id: this._sessionToken,
                        validation_url: n
                    };
                    return this.strategy.build().then(function (e) {
                        return t.checkout = e
                    }).then(function () {
                        return t.apiClient.post("/" + t._shopId + "/apple_pay/sessions", r)
                    }).then(function (e) {
                        var n = e.body;
                        return t._session.completeMerchantValidation(n)
                    })["catch"](function () {
                        return t._session.abort()
                    })
                }
            }, {
                key: "_onShippingContactSelected", value: function (e) {
                    var t = this, n = {partial_addresses: !0, shipping_address: E.addressFromEvent(e.shippingContact)};
                    return this._updateCheckout(n).then(this._fetchShippingRates.bind(this)).then(this._setDefaultShippingRate.bind(this)).then(function (e) {
                        return t._session.completeShippingContactSelection(ApplePaySession.STATUS_SUCCESS, E.transformedShippingRates(t.availableShippingRates), E.totalFromCheckout(e, t._merchantName), E.lineItemsFromCheckout(e))
                    }).then(function () {
                        return t._firstShippingContactSelected = !1
                    })["catch"](function (e) {
                        return t._displayInitialAddressError(e)
                    })["catch"](function (e) {
                        return t._handleResponseError(e)
                    })["catch"](function (e) {
                        return t._catchPaymentRequestValidatorError(e)
                    })
                }
            }, {
                key: "_onShippingMethodSelected", value: function (e) {
                    var t = this, n = e.shippingMethod, r = {shipping_line: {handle: n.identifier}};
                    return this._updateCheckout(r).then(function (e) {
                        return t._session.completeShippingMethodSelection(ApplePaySession.STATUS_SUCCESS, E.totalFromCheckout(e, t._merchantName), E.lineItemsFromCheckout(e))
                    })["catch"](function () {
                        return t._session.completeShippingMethodSelection(ApplePaySession.STATUS_FAILURE)
                    })
                }
            }, {
                key: "_onPaymentAuthorized", value: function (e) {
                    var t = e.payment, n = t.token.paymentData, r = {
                        email: t.billingContact.emailAddress || t.shippingContact.emailAddress,
                        billing_address: E.addressFromEvent(t.billingContact),
                        shipping_address: E.addressFromEvent(t.shippingContact)
                    };
                    if (this.checkout.requires_shipping !== !1 && !this.checkout.shipping_line)return this._handleErrors([w.errorFromCode("no_shipping_option")]);
                    var i = {
                        unique_token: E.generateRandomId(),
                        amount: this.checkout.total_price,
                        payment_token: {type: "apple_pay", payment_data: JSON.stringify(n)}
                    };
                    return this._updateCheckout(r).then(this._submitPayment.bind(this, i)).then(this._completePayment.bind(this))["catch"](this._handlePaymentError.bind(this))
                }
            }, {
                key: "_onPaymentMethodSelected", value: function () {
                    return this._session.completePaymentMethodSelection(E.totalFromCheckout(this.checkout, this._merchantName), E.lineItemsFromCheckout(this.checkout)), Promise.resolve()
                }
            }, {
                key: "_fetchShippingRates", value: function () {
                    var e = this;
                    return this.checkout.requires_shipping === !1 ? (this.availableShippingRates = [], this.checkout) : this.apiClient.get("/api/checkouts/" + this.checkout.token + "/shipping_rates").then(function (t) {
                        var n = t.shipping_rates;
                        return e.availableShippingRates = E.sortShippingRates(n), e.checkout
                    })
                }
            }, {
                key: "_setDefaultShippingRate", value: function () {
                    if (this.checkout.requires_shipping === !1 || this.checkout.shipping_line)return this.checkout;
                    var e = this.availableShippingRates || [], t = e[0];
                    return t ? this._updateCheckout({shipping_line: {handle: t.id}}) : this.checkout
                }
            }, {
                key: "_getCheckout", value: function () {
                    var e = this;
                    return this.apiClient.get("/api/checkouts/" + this.checkout.token).then(function (t) {
                        return e.checkout = t.checkout
                    })
                }
            }, {
                key: "_updateCheckout", value: function (e) {
                    var t = this;
                    return this.apiClient.patch("/api/checkouts/" + this.checkout.token, {checkout: e}).then(function (e) {
                        return t.checkout = e.checkout
                    })
                }
            }, {
                key: "_submitPayment", value: function (e) {
                    return this.apiClient.post("/api/checkouts/" + this.checkout.token + "/payments", {payment: e})
                }
            }, {
                key: "_completePayment", value: function (e) {
                    var t = this, n = e.payment, i = n && n.transaction, o = void 0;
                    return n && n.payment_processing_error_message ? o = n.payment_processing_error_message : i && "success" !== i.status && "pending" !== i.status && (o = i.message || "Payment Transaction " + i.status), o ? (this._handleErrors([o]), e) : this._getCheckout().then(function (e) {
                        var n = e.order;
                        return t._session.completePayment(ApplePaySession.STATUS_SUCCESS), n
                    }).then(function (e) {
                        return r["default"].trigger("completePayment", e)
                    }).then(function (e) {
                        return t._redirect(e.status_url)
                    })
                }
            }, {
                key: "_handlePaymentError", value: function (e) {
                    var t = this;
                    e && e.response && 422 === e.response.status ? e.response.json().then(function (e) {
                        var t = e.errors;
                        return n(t)
                    }).then(function (e) {
                        return t._session.completePayment(e)
                    })["catch"](function () {
                        return t._session.completePayment(ApplePaySession.STATUS_FAILURE)
                    }) : this._session.completePayment(ApplePaySession.STATUS_FAILURE)
                }
            }, {
                key: "_displayInitialAddressError", value: function (e) {
                    if (e.response && 422 === e.response.status && this._firstShippingContactSelected)return this._session.completeShippingContactSelection(ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS, [], E.totalFromCheckout(this.checkout, this._merchantName), E.lineItemsFromCheckout(this.checkout)), this._firstShippingContactSelected = !1, this.checkout;
                    throw e
                }
            }, {
                key: "_catchPaymentRequestValidatorError", value: function (e) {
                    switch (e.message) {
                        case"Total amount must be greater than zero":
                            return this._handleErrors([w.errorFromCode("total_price_zero")]);
                        case"Total amount is too big":
                            return this._handleErrors([w.errorFromCode("total_price_too_big")]);
                        default:
                            return this._session.abort()
                    }
                }
            }, {
                key: "_trackCallback", value: function (e, t) {
                    var n = this;
                    return function (r) {
                        return t.call(n, r).then(function () {
                            return n._track(e)
                        })["catch"](function (e) {
                            throw e
                        })
                    }
                }
            }, {
                key: "_handleErrors", value: function (e) {
                    var t = this;
                    this._showErrors && setTimeout(function () {
                        t._showErrors(w.normalizeErrors(e))
                    }, 200), this._session.abort()
                }
            }, {
                key: "_handleResponseError", value: function (e) {
                    var t = this;
                    if (!e.response || 422 !== e.response.status)throw e;
                    e.response.json().then(function (e) {
                        var n = e.errors;
                        return t._handleErrors(w.errorMessagesFromJson(n))
                    })["catch"](function (e) {
                        throw e
                    })
                }
            }, {
                key: "_track", value: function (e) {
                    window.ShopifyAnalytics && ShopifyAnalytics.lib && ShopifyAnalytics.lib.track && ShopifyAnalytics.lib.track("Apple Pay slate - " + e, {
                        strategy: this.strategy.identifier,
                        checkoutToken: this.checkout && this.checkout.token
                    })
                }
            }, {
                key: "_redirect", value: function (e) {
                    window.location = e
                }
            }]), e
        }();
        t["default"] = i, i.hooks = r["default"]
    }), $ = t(function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.apiClient, r = t.type;
                a(this, e), this.gatewayParams = {type: r}, this.setApiClient(n), this.identifier = "NA"
            }

            return o(e, [{
                key: "setApiClient", value: function (e) {
                    this.apiClient = e
                }
            }, {
                key: "getCheckout", value: function (e) {
                    return this.apiClient.patch("/api/checkouts/" + e, this.params()).then(function (e) {
                        var t = e.checkout;
                        return t
                    })
                }
            }, {
                key: "createCheckout", value: function (e) {
                    return this.apiClient.post("/api/checkouts", this.params(e)).then(function (e) {
                        var t = e.checkout;
                        return t;
                    })
                }
            }, {
                key: "params", value: function (e) {
                    return {checkout: s({}, e, {gateway_params: this.gatewayParams})}
                }
            }]), e
        }();
        t["default"] = n
    }), x = t(function (e, t) {
        "use strict";
        function n() {
            var e = document.querySelector('form[action^="/cart/add"]');
            if (!e)return {};
            var t = e.elements.quantity, n = t ? t.value : 1;
            return {line_items: [{variant_id: e.elements.id.value, quantity: n}]}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var s = u($), l = function (e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.apiClient, r = e.type;
                a(this, t);
                var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {apiClient: n, type: r}));
                return o.identifier = "product", o
            }

            return r(t, e), o(t, [{
                key: "build", value: function () {
                    return this.createCheckout(n())
                }
            }]), t
        }(s["default"]);
        t["default"] = l
    }), P = t(function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = u($), s = /^(https?:\/\/[^\/]+)?\/checkout\/poll/, l = function (e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.apiClient, r = e.type;
                a(this, t);
                var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {apiClient: n, type: r}));
                return o.identifier = "cart", o
            }

            return r(t, e), o(t, [{
                key: "build", value: function () {
                    var e = this;
                    return this.updateCart().then(function (t) {
                        var n = t.token;
                        return e.createCheckout({cart_token: n})
                    })
                }
            }, {
                key: "createCheckout", value: function (e) {
                    return e.secret = !0, this.apiClient.post("/api/checkouts", this.params(e), {poll: !1}).then(this.handleThrottling.bind(this)).then(function (e) {
                        var t = e.checkout;
                        return t
                    })
                }
            }, {
                key: "handleThrottling", value: function (e) {
                    if (202 === e.status && e.headers) {
                        var t = e.headers.get("Location");
                        return s.test(t) ? (this.redirectToQueue(), Promise.reject()) : this.apiClient.get(t)
                    }
                    return e
                }
            }, {
                key: "updateCart", value: function () {
                    return fetch("/cart", {
                        method: "POST",
                        body: new FormData(this.form),
                        headers: {Accept: "application/json"},
                        credentials: "same-origin"
                    }).then(function (e) {
                        return e.json()
                    })
                }
            }, {
                key: "redirectToQueue", value: function () {
                    var e = document.createElement("input");
                    e.type = "hidden", e.name = "checkout", e.value = "1", this.form.appendChild(e), this.form.submit()
                }
            }, {
                key: "form", get: function () {
                    return this._form ? this._form : (this._form = document.querySelector('form[action^="/cart"]'), this._form)
                }
            }]), t
        }(n["default"]);
        t["default"] = l
    }), k = t(function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = u($), s = function (e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.apiClient, r = e.token, o = e.type;
                a(this, t);
                var s = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {apiClient: n, type: o}));
                return s.token = r, s.identifier = "checkout", s
            }

            return r(t, e), o(t, [{
                key: "build", value: function () {
                    return this.getCheckout(this.token)
                }
            }]), t
        }(n["default"]);
        t["default"] = s
    }), D = t(function (e, t) {
        "use strict";
        function n(e, t, n) {
            window.ShopifyAnalytics && ShopifyAnalytics.lib && ShopifyAnalytics.lib.track && ShopifyAnalytics.lib.track(e + " button - " + t, {strategy: n})
        }

        function r(e) {
            return DigitalWalletsDialog.showMessage({
                title: "Transaction unsuccessful",
                errors: e,
                button: "Return to checkout"
            })
        }

        function i(e) {
            return a(e, "cart")
        }

        function o(e) {
            return a(e, "product")
        }

        function a(e, t) {
            return Shopify.StorefrontExpressButtons.DigitalWalletsDialog.showMessage({
                title: "Transaction unsuccessful",
                errors: e,
                button: "Return to " + t
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.track = n, t.checkoutShowErrors = r, t.cartShowErrors = i, t.productShowErrors = o
    }), R = t(function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = u(x), r = u(P), i = u(k), s = u(S), l = function () {
            function e(t, o) {
                a(this, e);
                var u = t.getAttribute("data-strategy");
                if (!u)throw new Error("Unspecified strategy");
                switch (this.button = t, this.apiClient = new s["default"], this.requireActiveCard = !1, u) {
                    case"cart":
                        this.strategy = new r["default"]({
                            apiClient: this.apiClient,
                            type: o
                        }), this.showErrors = D.cartShowErrors;
                        break;
                    case"product":
                        this.strategy = new n["default"]({
                            apiClient: this.apiClient,
                            type: o
                        }), this.requireActiveCard = !0, this.showErrors = D.productShowErrors;
                        break;
                    case"checkout":
                        this.strategy = new i["default"]({
                            apiClient: this.apiClient,
                            token: Shopify.Checkout.token,
                            type: o
                        }), this.showErrors = D.checkoutShowErrors, this.apiClient.host = Shopify.Checkout.apiHost
                }
            }

            return o(e, [{
                key: "init", value: function () {
                    throw new Error("You must overwrite the init method.")
                }
            }]), e
        }();
        t["default"] = l
    }), O = t(function (e, t) {
        "use strict";
        function n(e, t) {
            e.style.display = e.getAttribute("data-display-value") || "inline-block", D.track(m, "shown", t)
        }

        function s(e) {
            e.button.addEventListener("click", l.bind(e))
        }

        function l(e) {
            e.preventDefault(), D.track(m, "clicked", this.strategy.identifier);
            var t = new ApplePaySession(f, c(this.merchantCapabilities));
            new h["default"]({
                merchantName: this.merchantCapabilities.merchantName,
                apiClient: this.apiClient,
                strategy: this.strategy,
                shopId: this.shopId,
                showErrors: this.showErrors,
                session: t
            }).begin()
        }

        function c(e) {
            var t = e.merchantName, n = d(e, ["merchantName"]);
            return n.total = {type: "pending", label: t, amount: "1.00"}, n
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var h = u(T), p = u(R), f = 1, m = "Apple Pay";
        window.ShopifyApplePaySessionHooks = h["default"].hooks;
        var g = function (e) {
            function t(e) {
                return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, "apple_pay_web"))
            }

            return r(t, e), o(t, [{
                key: "init", value: function () {
                    var e = this, t = document.getElementById("apple-pay-shop-capabilities");
                    if (!t)return Promise.reject(new Error("Missing shop capabilities for Apple Pay"));
                    var r = JSON.parse(t.textContent), i = r.shopId, o = r.merchantId, a = d(r, ["shopId", "merchantId"]);
                    return this.shopId = i, this.merchantId = o, this.merchantCapabilities = a, this.canMakePayments().then(function (t) {
                        return t ? (n(e.button, e.strategy.identifier), s(e), Promise.resolve(e)) : Promise.reject(new Error("Apple Pay canMakePayments is false"))
                    })
                }
            }, {
                key: "canMakePayments", value: function () {
                    var e = this;
                    if (!window.ApplePaySession)return Promise.resolve(!1);
                    var t = ApplePaySession.canMakePaymentsWithActiveCard(this.merchantId).then(function (t) {
                        return D.track(m, "canMakePaymentsWithActiveCard: " + t, e.strategy.identifier), t
                    });
                    return this.requireActiveCard ? t : Promise.resolve(ApplePaySession.canMakePayments())
                }
            }]), t
        }(p["default"]);
        t["default"] = g
    }), I = t(function (e, t) {
        "use strict";
        function n(e) {
            if (c = [], !e)return Promise.reject(new Error("No checkout buttons provided"));
            for (var t = new a["default"], n = l.length - 1; n >= 0; n--)r(l[n], e[l[n]], t);
            return Promise.all(c).then(function (e) {
                return e.filter(function (e) {
                    return e
                })
            })
        }

        function r(e, t, n) {
            var r = document.querySelectorAll(t);
            if (r.length)for (var o = r.length - 1; o >= 0; o--)c.push(i(e, r[o], n)["catch"](function () {
                return !1
            }))
        }

        function i(e, t, n) {
            try {
                switch (e) {
                    case"applePay":
                        var r = new s["default"](t, n);
                        return r.init();
                    default:
                        throw new Error("Invalid checkout method " + e)
                }
            } catch (i) {
                return o(i), Promise.reject(i)
            }
        }

        function o(e) {
            console.error("Error" === e.constructor.name ? e.message : e)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n;
        var a = u(S), s = u(O), l = ["applePay"], c = void 0
    }), M = t(function (e, t) {
        "use strict";
        function n(e) {
            return e.filter(function (e) {
                return "ApplePayButton" === e.constructor.name
            })
        }

        function s(e) {
            if (!(e.length > 0)) {
                var t = document.querySelector("#apple-pay-checkout-btn[data-apple-pay-only]");
                if (t) {
                    var n = document.querySelector("[data-alternative-payment-separator]");
                    n && (n.className += " hidden")
                }
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var l = u(I), c = function (e) {
            function t() {
                return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return r(t, e), o(t, [{
                key: "init", value: function () {
                    return l["default"]({applePay: "#apple-pay-checkout-btn"}).then(n).then(s)["catch"](function (e) {
                        throw e
                    })
                }
            }]), t
        }(Behaviour);
        t["default"] = c, window.ApplePay = c
    }), F = t(function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    }), B = t(function (e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }), j = t(function (e, t) {
        var n = "__core-js_shared__", r = B[n] || (B[n] = {});
        e.exports = function (e) {
            return r[e] || (r[e] = {})
        }
    }), U = t(function (e, t) {
        var n = 0, r = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    }), H = t(function (e, t) {
        var n = j("wks"), r = B.Symbol, i = "function" == typeof r, o = e.exports = function (e) {
            return n[e] || (n[e] = i && r[e] || (i ? r : U)("Symbol." + e))
        };
        o.store = n
    }), z = t(function (e, t) {
        var n = H("toStringTag"), r = "Arguments" == F(function () {
                return arguments
            }()), i = function (e, t) {
            try {
                return e[t]
            } catch (n) {
            }
        };
        e.exports = function (e) {
            var t, o, a;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(o = i(t = Object(e), n)) ? o : r ? F(t) : "Object" == (a = F(t)) && "function" == typeof t.callee ? "Arguments" : a
        }
    }), V = t(function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }), W = t(function (e, t) {
        e.exports = function (e) {
            if (!V(e))throw TypeError(e + " is not an object!");
            return e
        }
    }), q = t(function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
    }), G = t(function (e, t) {
        e.exports = !q(function () {
            return 7 != Object.defineProperty({}, "a", {
                    get: function () {
                        return 7
                    }
                }).a
        })
    }), K = t(function (e, t) {
        var n = B.document, r = V(n) && V(n.createElement);
        e.exports = function (e) {
            return r ? n.createElement(e) : {}
        }
    }), Y = t(function (e, t) {
        e.exports = !G && !q(function () {
                return 7 != Object.defineProperty(K("div"), "a", {
                        get: function () {
                            return 7
                        }
                    }).a
            })
    }), X = t(function (e, t) {
        e.exports = function (e, t) {
            if (!V(e))return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !V(r = n.call(e)))return r;
            if ("function" == typeof(n = e.valueOf) && !V(r = n.call(e)))return r;
            if (!t && "function" == typeof(n = e.toString) && !V(r = n.call(e)))return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }), J = t(function (e, t) {
        var n = Object.defineProperty;
        t.f = G ? Object.defineProperty : function (e, t, r) {
            if (W(e), t = X(t, !0), W(r), Y)try {
                return n(e, t, r)
            } catch (i) {
            }
            if ("get"in r || "set"in r)throw TypeError("Accessors not supported!");
            return "value"in r && (e[t] = r.value), e
        }
    }), Q = t(function (e, t) {
        e.exports = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
        }
    }), Z = t(function (e, t) {
        e.exports = G ? function (e, t, n) {
            return J.f(e, t, Q(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    }), ee = t(function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    }), te = t(function (e, t) {
        var n = e.exports = {version: "2.4.0"};
        "number" == typeof __e && (__e = n)
    }), ne = t(function (e, t) {
        var n = U("src"), r = "toString", i = Function[r], o = ("" + i).split(r);
        te.inspectSource = function (e) {
            return i.call(e)
        }, (e.exports = function (e, t, r, i) {
            var a = "function" == typeof r;
            a && (ee(r, "name") || Z(r, "name", t)), e[t] !== r && (a && (ee(r, n) || Z(r, n, e[t] ? "" + e[t] : o.join(String(t)))), e === B ? e[t] = r : i ? e[t] ? e[t] = r : Z(e, t, r) : (delete e[t], Z(e, t, r)))
        })(Function.prototype, r, function () {
            return "function" == typeof this && this[n] || i.call(this)
        })
    }), re = t(function (e, t) {
        "use strict";
        var n = {};
        n[H("toStringTag")] = "z", n + "" != "[object z]" && ne(Object.prototype, "toString", function () {
            return "[object " + z(this) + "]"
        }, !0)
    }), ie = t(function (e, t) {
        var n = Math.ceil, r = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    }), oe = t(function (e, t) {
        e.exports = function (e) {
            if (void 0 == e)throw TypeError("Can't call method on  " + e);
            return e
        }
    }), ae = t(function (e, t) {
        e.exports = function (e) {
            return function (t, n) {
                var r, i, o = String(oe(t)), a = ie(n), s = o.length;
                return 0 > a || a >= s ? e ? "" : void 0 : (r = o.charCodeAt(a), 55296 > r || r > 56319 || a + 1 === s || (i = o.charCodeAt(a + 1)) < 56320 || i > 57343 ? e ? o.charAt(a) : r : e ? o.slice(a, a + 2) : (r - 55296 << 10) + (i - 56320) + 65536)
            }
        }
    }), se = t(function (e, t) {
        e.exports = !1
    }), ue = t(function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e)throw TypeError(e + " is not a function!");
            return e
        }
    }), le = t(function (e, t) {
        e.exports = function (e, t, n) {
            if (ue(e), void 0 === t)return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function (n, r, i) {
                        return e.call(t, n, r, i)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }
    }), ce = t(function (e, t) {
        var n = "prototype", r = function (e, t, i) {
            var o, a, s, u, l = e & r.F, c = e & r.G, d = e & r.S, h = e & r.P, p = e & r.B, f = c ? B : d ? B[t] || (B[t] = {}) : (B[t] || {})[n], m = c ? te : te[t] || (te[t] = {}), g = m[n] || (m[n] = {});
            c && (i = t);
            for (o in i)a = !l && f && void 0 !== f[o], s = (a ? f : i)[o], u = p && a ? le(s, B) : h && "function" == typeof s ? le(Function.call, s) : s, f && ne(f, o, s, e & r.U), m[o] != s && Z(m, o, u), h && g[o] != s && (g[o] = s)
        };
        B.core = te, r.F = 1, r.G = 2, r.S = 4, r.P = 8, r.B = 16, r.W = 32, r.U = 64, r.R = 128, e.exports = r
    }), de = t(function (e, t) {
        e.exports = {}
    }), he = t(function (e, t) {
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
            return "String" == F(e) ? e.split("") : Object(e)
        }
    }), pe = t(function (e, t) {
        e.exports = function (e) {
            return he(oe(e))
        }
    }), fe = t(function (e, t) {
        var n = Math.min;
        e.exports = function (e) {
            return e > 0 ? n(ie(e), 9007199254740991) : 0
        }
    }), me = t(function (e, t) {
        var n = Math.max, r = Math.min;
        e.exports = function (e, t) {
            return e = ie(e), 0 > e ? n(e + t, 0) : r(e, t)
        }
    }), ge = t(function (e, t) {
        e.exports = function (e) {
            return function (t, n, r) {
                var i, o = pe(t), a = fe(o.length), s = me(r, a);
                if (e && n != n) {
                    for (; a > s;)if (i = o[s++], i != i)return !0
                } else for (; a > s; s++)if ((e || s in o) && o[s] === n)return e || s || 0;
                return !e && -1
            }
        }
    }), ye = t(function (e, t) {
        var n = j("keys");
        e.exports = function (e) {
            return n[e] || (n[e] = U(e))
        }
    }), ve = t(function (e, t) {
        var n = ge(!1), r = ye("IE_PROTO");
        e.exports = function (e, t) {
            var i, o = pe(e), a = 0, s = [];
            for (i in o)i != r && ee(o, i) && s.push(i);
            for (; t.length > a;)ee(o, i = t[a++]) && (~n(s, i) || s.push(i));
            return s
        }
    }), _e = t(function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }), be = t(function (e, t) {
        e.exports = Object.keys || function (e) {
                return ve(e, _e)
            }
    }), Ae = t(function (e, t) {
        e.exports = G ? Object.defineProperties : function (e, t) {
            W(e);
            for (var n, r = be(t), i = r.length, o = 0; i > o;)J.f(e, n = r[o++], t[n]);
            return e
        }
    }), Ne = t(function (e, t) {
        e.exports = B.document && document.documentElement
    }), Se = t(function (e, t) {
        var n = ye("IE_PROTO"), r = function () {
        }, i = "prototype", o = function () {
            var e, t = K("iframe"), n = _e.length, r = ">";
            for (t.style.display = "none", Ne.appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object</script" + r), e.close(), o = e.F; n--;)delete o[i][_e[n]];
            return o()
        };
        e.exports = Object.create || function (e, t) {
                var a;
                return null !== e ? (r[i] = W(e), a = new r, r[i] = null, a[n] = e) : a = o(), void 0 === t ? a : Ae(a, t)
            }
    }), Ce = t(function (e, t) {
        var n = J.f, r = H("toStringTag");
        e.exports = function (e, t, i) {
            e && !ee(e = i ? e : e.prototype, r) && n(e, r, {configurable: !0, value: t})
        }
    }), Ee = t(function (e, t) {
        "use strict";
        var n = {};
        Z(n, H("iterator"), function () {
            return this
        }), e.exports = function (e, t, r) {
            e.prototype = Se(n, {next: Q(1, r)}), Ce(e, t + " Iterator")
        }
    }), we = t(function (e, t) {
        e.exports = function (e) {
            return Object(oe(e))
        }
    }), Te = t(function (e, t) {
        var n = ye("IE_PROTO"), r = Object.prototype;
        e.exports = Object.getPrototypeOf || function (e) {
                return e = we(e), ee(e, n) ? e[n] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? r : null
            }
    }), $e = t(function (e, t) {
        "use strict";
        var n = H("iterator"), r = !([].keys && "next"in[].keys()), i = "@@iterator", o = "keys", a = "values", s = function () {
            return this
        };
        e.exports = function (e, t, u, l, c, d, h) {
            Ee(u, t, l);
            var p, f, m, g = function (e) {
                if (!r && e in b)return b[e];
                switch (e) {
                    case o:
                        return function () {
                            return new u(this, e)
                        };
                    case a:
                        return function () {
                            return new u(this, e)
                        }
                }
                return function () {
                    return new u(this, e)
                }
            }, y = t + " Iterator", v = c == a, _ = !1, b = e.prototype, A = b[n] || b[i] || c && b[c], N = A || g(c), S = c ? v ? g("entries") : N : void 0, C = "Array" == t ? b.entries || A : A;
            if (C && (m = Te(C.call(new e)), m !== Object.prototype && (Ce(m, y, !0), se || ee(m, n) || Z(m, n, s))), v && A && A.name !== a && (_ = !0, N = function () {
                    return A.call(this)
                }), se && !h || !r && !_ && b[n] || Z(b, n, N), de[t] = N, de[y] = s, c)if (p = {
                    values: v ? N : g(a),
                    keys: d ? N : g(o),
                    entries: S
                }, h)for (f in p)f in b || ne(b, f, p[f]); else ce(ce.P + ce.F * (r || _), t, p);
            return p
        }
    }), xe = t(function (e, t) {
        "use strict";
        var n = ae(!0);
        $e(String, "String", function (e) {
            this._t = String(e), this._i = 0
        }, function () {
            var e, t = this._t, r = this._i;
            return r >= t.length ? {value: void 0, done: !0} : (e = n(t, r), this._i += e.length, {value: e, done: !1})
        })
    }), Pe = t(function (e, t) {
        var n = H("unscopables"), r = Array.prototype;
        void 0 == r[n] && Z(r, n, {}), e.exports = function (e) {
            r[n][e] = !0
        }
    }), ke = t(function (e, t) {
        e.exports = function (e, t) {
            return {value: t, done: !!e}
        }
    }), De = t(function (e, t) {
        "use strict";
        e.exports = $e(Array, "Array", function (e, t) {
            this._t = pe(e), this._i = 0, this._k = t
        }, function () {
            var e = this._t, t = this._k, n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, ke(1)) : "keys" == t ? ke(0, n) : "values" == t ? ke(0, e[n]) : ke(0, [n, e[n]])
        }, "values"), de.Arguments = de.Array, Pe("keys"), Pe("values"), Pe("entries")
    }), Re = t(function (e, t) {
        for (var n = H("iterator"), r = H("toStringTag"), i = de.Array, o = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], a = 0; 5 > a; a++) {
            var s, u = o[a], l = B[u], c = l && l.prototype;
            if (c) {
                c[n] || Z(c, n, i), c[r] || Z(c, r, u), de[u] = i;
                for (s in De)c[s] || ne(c, s, De[s], !0)
            }
        }
    }), Oe = t(function (e, t) {
        e.exports = function (e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e)throw TypeError(n + ": incorrect invocation!");
            return e
        }
    }), Ie = t(function (e, t) {
        e.exports = function (e, t, n, r) {
            try {
                return r ? t(W(n)[0], n[1]) : t(n)
            } catch (i) {
                var o = e["return"];
                throw void 0 !== o && W(o.call(e)), i
            }
        }
    }), Me = t(function (e, t) {
        var n = H("iterator"), r = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (de.Array === e || r[n] === e)
        }
    }), Le = t(function (e, t) {
        var n = H("iterator");
        e.exports = te.getIteratorMethod = function (e) {
            return void 0 != e ? e[n] || e["@@iterator"] || de[z(e)] : void 0
        }
    }), Fe = t(function (e, t) {
        var n = {}, r = {}, t = e.exports = function (e, t, i, o, a) {
            var s, u, l, c, d = a ? function () {
                return e
            } : Le(e), h = le(i, o, t ? 2 : 1), p = 0;
            if ("function" != typeof d)throw TypeError(e + " is not iterable!");
            if (Me(d)) {
                for (s = fe(e.length); s > p; p++)if (c = t ? h(W(u = e[p])[0], u[1]) : h(e[p]), c === n || c === r)return c
            } else for (l = d.call(e); !(u = l.next()).done;)if (c = Ie(l, h, u.value, t), c === n || c === r)return c
        };
        t.BREAK = n, t.RETURN = r
    }), Be = t(function (e, t) {
        t.f = {}.propertyIsEnumerable
    }), je = t(function (e, t) {
        var n = Object.getOwnPropertyDescriptor;
        t.f = G ? n : function (e, t) {
            if (e = pe(e), t = X(t, !0), Y)try {
                return n(e, t)
            } catch (r) {
            }
            return ee(e, t) ? Q(!Be.f.call(e, t), e[t]) : void 0
        }
    }), Ue = t(function (e, t) {
        var n = function (e, t) {
            if (W(e), !V(t) && null !== t)throw TypeError(t + ": can't set as prototype!")
        };
        e.exports = {
            set: Object.setPrototypeOf || ("__proto__"in{} ? function (e, t, r) {
                try {
                    r = le(Function.call, je.f(Object.prototype, "__proto__").set, 2), r(e, []), t = !(e instanceof Array)
                } catch (i) {
                    t = !0
                }
                return function (e, i) {
                    return n(e, i), t ? e.__proto__ = i : r(e, i), e
                }
            }({}, !1) : void 0), check: n
        }
    }), He = t(function (e, t) {
        var n = H("species");
        e.exports = function (e, t) {
            var r, i = W(e).constructor;
            return void 0 === i || void 0 == (r = W(i)[n]) ? t : ue(r)
        }
    }), ze = t(function (e, t) {
        e.exports = function (e, t, n) {
            var r = void 0 === n;
            switch (t.length) {
                case 0:
                    return r ? e() : e.call(n);
                case 1:
                    return r ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
        }
    }), Ve = t(function (e, t) {
        var n, r, i, o = B.process, a = B.setImmediate, s = B.clearImmediate, u = B.MessageChannel, l = 0, c = {}, d = "onreadystatechange", h = function () {
            var e = +this;
            if (c.hasOwnProperty(e)) {
                var t = c[e];
                delete c[e], t()
            }
        }, p = function (e) {
            h.call(e.data)
        };
        a && s || (a = function (e) {
            for (var t = [], r = 1; arguments.length > r;)t.push(arguments[r++]);
            return c[++l] = function () {
                ze("function" == typeof e ? e : Function(e), t)
            }, n(l), l
        }, s = function (e) {
            delete c[e]
        }, "process" == F(o) ? n = function (e) {
            o.nextTick(le(h, e, 1))
        } : u ? (r = new u, i = r.port2, r.port1.onmessage = p, n = le(i.postMessage, i, 1)) : B.addEventListener && "function" == typeof postMessage && !B.importScripts ? (n = function (e) {
            B.postMessage(e + "", "*")
        }, B.addEventListener("message", p, !1)) : n = d in K("script") ? function (e) {
            Ne.appendChild(K("script"))[d] = function () {
                Ne.removeChild(this), h.call(e)
            }
        } : function (e) {
            setTimeout(le(h, e, 1), 0)
        }), e.exports = {set: a, clear: s}
    }), We = t(function (e, t) {
        var n = Ve.set, r = B.MutationObserver || B.WebKitMutationObserver, i = B.process, o = B.Promise, a = "process" == F(i);
        e.exports = function () {
            var e, t, s, u = function () {
                var n, r;
                for (a && (n = i.domain) && n.exit(); e;) {
                    r = e.fn, e = e.next;
                    try {
                        r()
                    } catch (o) {
                        throw e ? s() : t = void 0, o
                    }
                }
                t = void 0, n && n.enter()
            };
            if (a)s = function () {
                i.nextTick(u)
            }; else if (r) {
                var l = !0, c = document.createTextNode("");
                new r(u).observe(c, {characterData: !0}), s = function () {
                    c.data = l = !l
                }
            } else if (o && o.resolve) {
                var d = o.resolve();
                s = function () {
                    d.then(u)
                }
            } else s = function () {
                n.call(B, u)
            };
            return function (n) {
                var r = {fn: n, next: void 0};
                t && (t.next = r), e || (e = r, s()), t = r
            }
        }
    }), qe = t(function (e, t) {
        e.exports = function (e, t, n) {
            for (var r in t)ne(e, r, t[r], n);
            return e
        }
    }), Ge = t(function (e, t) {
        "use strict";
        var n = H("species");
        e.exports = function (e) {
            var t = B[e];
            G && t && !t[n] && J.f(t, n, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }), Ke = t(function (e, t) {
        var n = H("iterator"), r = !1;
        try {
            var i = [7][n]();
            i["return"] = function () {
                r = !0
            }, Array.from(i, function () {
                throw 2
            })
        } catch (o) {
        }
        e.exports = function (e, t) {
            if (!t && !r)return !1;
            var i = !1;
            try {
                var o = [7], a = o[n]();
                a.next = function () {
                    return {done: i = !0}
                }, o[n] = function () {
                    return a
                }, e(o)
            } catch (s) {
            }
            return i
        }
    }), Ye = t(function (e, t) {
        "use strict";
        var n, r, i, o = (Ue.set, Ve.set), a = We(), s = "Promise", u = B.TypeError, l = B.process, c = B[s], l = B.process, d = "process" == z(l), h = function () {
        }, p = !!function () {
            try {
                var e = c.resolve(1), t = (e.constructor = {})[H("species")] = function (e) {
                    e(h, h)
                };
                return (d || "function" == typeof PromiseRejectionEvent) && e.then(h)instanceof t
            } catch (n) {
            }
        }(), f = function (e, t) {
            return e === t || e === c && t === i
        }, m = function (e) {
            var t;
            return V(e) && "function" == typeof(t = e.then) ? t : !1
        }, g = function (e) {
            return f(c, e) ? new y(e) : new r(e)
        }, y = r = function (e) {
            var t, n;
            this.promise = new e(function (e, r) {
                if (void 0 !== t || void 0 !== n)throw u("Bad Promise constructor");
                t = e, n = r
            }), this.resolve = ue(t), this.reject = ue(n)
        }, v = function (e) {
            try {
                e()
            } catch (t) {
                return {error: t}
            }
        }, _ = function (e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                a(function () {
                    for (var r = e._v, i = 1 == e._s, o = 0, a = function (t) {
                        var n, o, a = i ? t.ok : t.fail, s = t.resolve, l = t.reject, c = t.domain;
                        try {
                            a ? (i || (2 == e._h && N(e), e._h = 1), a === !0 ? n = r : (c && c.enter(), n = a(r), c && c.exit()), n === t.promise ? l(u("Promise-chain cycle")) : (o = m(n)) ? o.call(n, s, l) : s(n)) : l(r)
                        } catch (d) {
                            l(d)
                        }
                    }; n.length > o;)a(n[o++]);
                    e._c = [], e._n = !1, t && !e._h && b(e)
                })
            }
        }, b = function (e) {
            o.call(B, function () {
                var t, n, r, i = e._v;
                if (A(e) && (t = v(function () {
                        d ? l.emit("unhandledRejection", i, e) : (n = B.onunhandledrejection) ? n({
                            promise: e,
                            reason: i
                        }) : (r = B.console) && r.error && r.error("Unhandled promise rejection", i)
                    }), e._h = d || A(e) ? 2 : 1), e._a = void 0, t)throw t.error
            })
        }, A = function (e) {
            if (1 == e._h)return !1;
            for (var t, n = e._a || e._c, r = 0; n.length > r;)if (t = n[r++], t.fail || !A(t.promise))return !1;
            return !0
        }, N = function (e) {
            o.call(B, function () {
                var t;
                d ? l.emit("rejectionHandled", e) : (t = B.onrejectionhandled) && t({promise: e, reason: e._v})
            })
        }, S = function (e) {
            var t = this;
            t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), _(t, !0))
        }, C = function (e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e)throw u("Promise can't be resolved itself");
                    (t = m(e)) ? a(function () {
                        var r = {_w: n, _d: !1};
                        try {
                            t.call(e, le(C, r, 1), le(S, r, 1))
                        } catch (i) {
                            S.call(r, i)
                        }
                    }) : (n._v = e, n._s = 1, _(n, !1))
                } catch (r) {
                    S.call({_w: n, _d: !1}, r)
                }
            }
        };
        p || (c = function (e) {
            Oe(this, c, s, "_h"), ue(e), n.call(this);
            try {
                e(le(C, this, 1), le(S, this, 1))
            } catch (t) {
                S.call(this, t)
            }
        }, n = function (e) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, n.prototype = qe(c.prototype, {
            then: function (e, t) {
                var n = g(He(this, c));
                return n.ok = "function" == typeof e ? e : !0, n.fail = "function" == typeof t && t, n.domain = d ? l.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && _(this, !1), n.promise
            }, "catch": function (e) {
                return this.then(void 0, e)
            }
        }), y = function () {
            var e = new n;
            this.promise = e, this.resolve = le(C, e, 1), this.reject = le(S, e, 1)
        }), ce(ce.G + ce.W + ce.F * !p, {Promise: c}), Ce(c, s), Ge(s), i = te[s], ce(ce.S + ce.F * !p, s, {
            reject: function (e) {
                var t = g(this), n = t.reject;
                return n(e), t.promise
            }
        }), ce(ce.S + ce.F * (se || !p), s, {
            resolve: function (e) {
                if (e instanceof c && f(e.constructor, this))return e;
                var t = g(this), n = t.resolve;
                return n(e), t.promise
            }
        }), ce(ce.S + ce.F * !(p && Ke(function (e) {
                c.all(e)["catch"](h)
            })), s, {
            all: function (e) {
                var t = this, n = g(t), r = n.resolve, i = n.reject, o = v(function () {
                    var n = [], o = 0, a = 1;
                    Fe(e, !1, function (e) {
                        var s = o++, u = !1;
                        n.push(void 0), a++, t.resolve(e).then(function (e) {
                            u || (u = !0, n[s] = e, --a || r(n))
                        }, i)
                    }), --a || r(n)
                });
                return o && i(o.error), n.promise
            }, race: function (e) {
                var t = this, n = g(t), r = n.reject, i = v(function () {
                    Fe(e, !1, function (e) {
                        t.resolve(e).then(n.resolve, r)
                    })
                });
                return i && r(i.error), n.promise
            }
        })
    }), Xe = t(function (e, t) {
        e.exports = te.Promise
    }), Je = t(function (e, t) {
        "use strict";
        function n(e, t) {
            var n = void 0, i = !0, o = !1, a = void 0;
            try {
                for (var s, u = e[Symbol.iterator](); !(i = (s = u.next()).done); i = !0) {
                    var l = s.value;
                    if (l.id === t.id) {
                        n = l;
                        break
                    }
                }
            } catch (c) {
                o = !0, a = c
            } finally {
                try {
                    !i && u["return"] && u["return"]()
                } finally {
                    if (o)throw a
                }
            }
            return n || r(e)[0]
        }

        function r(e) {
            return e.sort(function (e, t) {
                var n = parseFloat(e.price, 10), r = parseFloat(t.price, 10);
                return n > r ? 1 : r > n ? -1 : 0
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = u(S), s = function () {
            function e(t) {
                a(this, e);
                var n = window.Shopify.Checkout ? window.Shopify.Checkout.apiHost : null;
                this.apiClient = new i["default"](n), this.checkoutToken = t
            }

            return o(e, [{
                key: "createCheckoutFor", value: function (e) {
                    var t = this;
                    return new Promise(function (n, r) {
                        return t.createOrUpdateCheckout(e).then(t.pollShippingRates.bind(t), r).then(t.submitCheckout.bind(t), r).then(n, r)
                    })
                }
            }, {
                key: "authorize", value: function (e) {
                    return this.apiClient.patch("/api/checkouts/" + this.checkoutToken + ".json", {checkout: {payment_session_id: e}})
                }
            }, {
                key: "createOrUpdateCheckout", value: function (e) {
                    return this.lastUsedShippingRate = e.shipping_rate, this.paymentSessionId = e.payment_session_id, delete e.payment_session_id, delete e.shipping_rate, e.web_buyer_must_review_checkout = !0, this.checkoutToken ? this.apiClient.patch("/api/checkouts/" + this.checkoutToken + ".json", {
                        card_source: "vault",
                        checkout: e
                    }) : this.apiClient.post("/api/checkouts.json", {card_source: "vault", checkout: e})
                }
            }, {
                key: "pollShippingRates", value: function (e) {
                    return this.checkoutToken || (this.checkoutToken = e.checkout.token), this.checkoutIsFree = 0 === parseFloat(e.checkout.total_price), e.checkout.requires_shipping ? this.apiClient.get("/api/checkouts/" + this.checkoutToken + "/shipping_rates.json") : Promise.resolve({shipping_rates: []})
                }
            }, {
                key: "submitCheckout", value: function (e) {
                    var t = e.shipping_rates, r = {};
                    if (t && t.length > 0) {
                        var i = n(t, this.lastUsedShippingRate);
                        this.checkoutIsFree && parseFloat(i.price) > 0 && (this.checkoutIsFree = !1), r.shipping_rate = {id: i.id}
                    }
                    return this.checkoutIsFree ? r.payment_gateway = "" : r.payment_session_id = this.paymentSessionId, this.apiClient.patch("/api/checkouts/" + this.checkoutToken + ".json", {checkout: r})
                }
            }]), e
        }();
        t["default"] = s, window.RememberMeCheckoutUpdater = s
    }), Qe = t(function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = u(N), r = {emailCheck: 750, thirdPartyService: 2500}, i = function () {
            function e(t) {
                a(this, e), this.email = t, this.headers = {"X-Remember-Me-Access-Token": Shopify.Checkout.rememberMeAccessToken}, this.apiClient = new n["default"](Shopify.Checkout.rememberMeHost, this.headers)
            }

            return o(e, [{
                key: "search", value: function () {
                    return this.searchSessionXHR && this.searchSessionXHR.abort(), this.searchSessionXHR = h.ajax({
                        url: "https://" + Shopify.Checkout.rememberMeHost + "/customers/search",
                        method: "get",
                        dataType: "json",
                        timeout: r.emailCheck,
                        headers: this.headers,
                        data: {
                            email: this.email,
                            checkout_token: Shopify.Checkout.token,
                            locale: Shopify.Checkout.locale
                        }
                    }), this.searchSessionXHR
                }
            }, {
                key: "validate", value: function (e) {
                    return this.apiClient.post("/customers/validate", {
                        email: this.email,
                        validation_code: e,
                        checkout_token: Shopify.Checkout.token,
                        locale: Shopify.Checkout.locale
                    }).then(function (e) {
                        return e.json()
                    })
                }
            }, {
                key: "create", value: function () {
                    return this.createToCustomerXHR && this.createToCustomerXHR.abort(), this.createToCustomerXHR = h.ajax({
                        url: "https://" + Shopify.Checkout.rememberMeHost + "/customers/session",
                        method: "post",
                        dataType: "text",
                        timeout: r.thirdPartyService,
                        headers: this.headers,
                        data: {
                            email: this.email,
                            locale: Shopify.Checkout.locale,
                            checkout_token: Shopify.Checkout.token,
                            shopify_domain: Shopify.Checkout.apiHost
                        }
                    }), this.createToCustomerXHR
                }
            }]), e
        }();
        t["default"] = i, window.RememberMeSession = i
    }), Ze = t(function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function (e) {
            function t() {
                return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return r(t, e), o(t, [{
                key: "init", value: function () {
                    return RememberMeValidation.dependenciesMet() ? (this.rememberMeCheckbox = document.querySelector("[data-remember-me-opt-in]"), void(this.rememberMeCheckbox && (this.$vaultField = this.$('input[name="checkout[credit_card][vault]"]'), this.$rememberMePhone = this.$("[data-remember-me-phone]"), this.$rememberMeTerms = this.$("[data-remember-me-terms]"), this.$rememberMePhoneInput = this.$('[name="checkout[remember_me_phone]"]'), this.toggleRememberMeChanged()))) : void this.$("[data-remember-me]").hide()
                }
            }, {
                key: "trackLinks", value: function (e) {
                    ShopifyAnalytics.lib.track("RememberMe footer click", {
                        type: e.target.dataset.rememberPolicyLink,
                        checkout_token: Shopify.Checkout.token
                    })
                }
            }, {
                key: "toggleRememberMeChanged", value: function (e) {
                    this.rememberMeCheckbox && (this.toggleRememberMePhoneForm(e), this.toggleVaultField(e))
                }
            }, {
                key: "toggleVaultField", value: function () {
                    return this.$vaultField.val(this.rememberMeCheckbox.checked)
                }
            }, {
                key: "toggleRememberMePhoneForm", value: function (e) {
                    var t = this.rememberMeCheckbox.checked;
                    this.$rememberMePhone.toggleClass("hidden", !t), this.$rememberMeTerms.toggleClass("hidden", !t), this.rememberMeCheckbox.setAttribute("aria-expanded", t), t && e && this.$rememberMePhoneInput.focus(), window.ShopifyAnalytics && ShopifyAnalytics.lib && ShopifyAnalytics.lib.track && ShopifyAnalytics.lib.track("set_remember_me", t)
                }
            }, {
                key: "events", get: function () {
                    return {
                        'change input[name="checkout[remember_me]"]': "toggleRememberMeChanged",
                        "click [data-remember-policy-link]": "trackLinks"
                    }
                }
            }]), t
        }(Behaviour);
        t["default"] = n, window.RememberMe = n
    });
    (function () {
        var e = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }, t = function (e, t) {
            function r() {
                this.constructor = e
            }

            for (var i in t)n.call(t, i) && (e[i] = t[i]);
            return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
        }, n = {}.hasOwnProperty;
        this.RememberMeValidation = function (n) {
            function r() {
                return this.updateCountryCode = e(this.updateCountryCode, this), this.dismissFeature = e(this.dismissFeature, this), this.showErrorPane = e(this.showErrorPane, this), this.showError = e(this.showError, this), this.updatePopoverState = e(this.updatePopoverState, this), this.finishCheckout = e(this.finishCheckout, this), r.__super__.constructor.apply(this, arguments)
            }

            return t(r, n), r.dependencies = [Modernizr.cssanimations, Modernizr.anyflexbox], r.prototype.TIMEOUTS = {codeNotReceived: 3e4}, r.prototype.LEFT_ARROW_KEY_CODE = 37, r.prototype.RIGHT_ARROW_KEY_CODE = 39, r.prototype.VERIFICATION_CODE_LENGTH = 6, r.prototype.DELETE_KEY_CODE = 8, r.prototype.REMEMBER_ME_BUTTON = '<button type="button" class="btn remember-me-button" data-remember-me-button aria-labelledby="popover-title">\n  <svg class="icon-svg remember-me-button__icon" viewBox="0 0 36 17" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 9C10 9 12 7 12 4.5S10 0 7.5 0 3 2 3 4.5 5 9 7.5 9zm0-2C6 7 5 6 5 4.5S6 2 7.5 2 10 3 10 4.5 9 7 7.5 7zm5.5 8v-1.5c0-.8-.7-1.5-1.5-1.5h-8c-.8 0-1.5.7-1.5 1.5V15h11zM0 13.5c0-2 1.6-3.5 3.5-3.5h8c2 0 3.5 1.6 3.5 3.5V17H0v-3.5zM21.5 10h12.7c.5 0 1-.4 1-1s-.5-1-1-1H21.5c-.6 0-1 .4-1 1s.4 1 1 1zm0-5h12.7c.5 0 1-.4 1-1s-.5-1-1-1H21.5c-.6 0-1 .4-1 1s.4 1 1 1zm0 10h9c.6 0 1-.4 1-1s-.4-1-1-1h-9c-.6 0-1 .4-1 1s.4 1 1 1z"/></svg>\n</button>', r.prototype.events = {
                "click [data-remember-me-dismiss]": "dismissFeature",
                "click [data-remember-me-button]": "showPopover",
                'input input[name="checkout[email]"]': "createSession",
                'input input[name="checkout[validation_code]"]': "validateSession",
                "submit [data-remember-me] form": "validateSession",
                'submit [data-requires-confirmation="true"]': "authorizePurchase",
                'blur [name="checkout[remember_me_phone]"]': "updateCountryCode"
            }, r.prototype.init = function () {
                return this.$html = h("html"), this.initCustomerInfo(), this.initAuthorizationInfo(), this.initTemplate()
            }, r.prototype.initTemplate = function () {
                return this.rememberMeValidationTemplateHTML = h("[data-remember-me-popover-content]").html(), this.rememberMeValidationTemplateHTML ? h("[data-remember-me-popover-content]").remove() : void 0
            }, r.prototype.initAuthorizationInfo = function () {
                return this.authorizePurchaseButton = this.$("[data-requires-confirmation] [type=submit]"), 0 !== this.authorizePurchaseButton.length ? this.lastEmail = h("[data-remember-me-popover-content]").attr("data-remember-me-user-email") : void 0
            }, r.prototype.initCustomerInfo = function () {
                return this.emailField = this.$('input[name="checkout[email]"]'), 0 !== this.emailField.length ? (this.$dataEmailInput = h("[data-email-input]"), this.lastEmail = "", this.customerInformationForm = this.$("form[data-customer-information-form]"), this.customerInformationForm.submit(function (e) {
                    return function () {
                        return e.closePopover(), e.removeTriggerButton()
                    }
                }(this))) : void 0
            }, r.prototype.initTriggerButton = function () {
                return !this.$triggerButton && this.$dataEmailInput ? (this.$triggerButton = h(this.REMEMBER_ME_BUTTON), this.$dataEmailInput.after(this.$triggerButton), this.$dataEmailInput.parent().addClass("remember-me-button-wrapper")) : void 0
            }, r.prototype.removeTriggerButton = function () {
                return this.$triggerButton ? (this.$dataEmailInput.parent().removeClass("remember-me-button-wrapper"), this.$triggerButton.remove(),
                    this.$triggerButton = null) : void 0
            }, r.prototype.showPopover = function () {
                return this.$html.trigger("popover:show")
            }, r.prototype.createPopover = function (e, t) {
                return this.initTriggerButton(), this.initSMSTimeout(), this.$html.trigger("popover:create", {
                    html: this.rememberMeValidationTemplateHTML,
                    anchor: e.anchor,
                    position: e.position,
                    beforeShow: function (n) {
                        return function () {
                            return n.$fieldsetWrapper = n.$("[data-remember-me-fieldset-wrapper]"), n.$validationCodeField = n.$(".remember-me__field"), n.$validationCodeInput = n.$('input[name="checkout[validation_code]"]'), n.$rememberMeFooter = n.$(".remember-me-footer"), n.$errorPane = n.$("[data-popover-pane=error]"), n.$contentPane = n.$("[data-popover-pane=content]"), n.$popoverContentWrapper = n.$(".popover__content-wrapper"), n.$popover = n.$(".popover"), e.phone_digits && n.$("[data-remember-me-customer-phone]").text(e.phone_digits), t && t(), n.updatePopoverState("message")
                        }
                    }(this),
                    afterShow: function (e) {
                        return function () {
                            return e.$validationCodeInput.focus()
                        }
                    }(this)
                })
            }, r.prototype.createSession = function () {
                var e;
                return e = this.emailField.val(), this.removeTriggerButton(), EmailCheck.isValid(e) ? (this.lastEmail = e, this.rememberMeSession = new RememberMeSession(e), this.rememberMeSession.search().success(function (e) {
                    return function (t) {
                        return e.rememberMeSession.create().success(function () {
                            return e.createPopover({
                                anchor: e.emailField,
                                phone_digits: t.phone_digits,
                                position: "right"
                            })
                        }).error(function (e, t) {
                            return "timeout" === t ? ShopifyAnalytics.lib.track("remember_me_timeout", {
                                checkout_token: Shopify.Checkout.token,
                                type: "sms"
                            }) : void 0
                        })
                    }
                }(this)).error(function (e) {
                    return function (e, t) {
                        return "timeout" === t ? ShopifyAnalytics.lib.track("remember_me_timeout", {
                            checkout_token: Shopify.Checkout.token,
                            type: "customers_search"
                        }) : void 0
                    }
                }(this))) : void 0
            }, r.prototype.authorizePurchase = function (e) {
                return this.preventAuthorization ? void 0 : (e.preventDefault(), this.smsAlreadySent ? this.showPopover() : (this.rememberMeSession = new RememberMeSession(this.lastEmail), this.smsAlreadySent = !0, this.rememberMeSession.create().success(function (e) {
                    return function () {
                        return e.createPopover({anchor: e.authorizePurchaseButton, position: "top"})
                    }
                }(this)).error(function (e) {
                    return function (t, n) {
                        return "timeout" === n && ShopifyAnalytics.lib.track("remember_me_timeout", {
                            checkout_token: Shopify.Checkout.token,
                            type: "sms"
                        }), e.isAuthorizingPurchase() ? e.showErrorPaneFirst() : void 0
                    }
                }(this))))
            }, r.prototype.validationCode = function () {
                return this.$validationCodeInput.val()
            }, r.prototype.updateInputFieldClass = function () {
                var e, t, n, r, i;
                if (this.$underlineBoxes || (this.$underlineBoxes = this.$(".remember-me__field-underline-box")), this.$underlineBoxes.removeClass("remember-me__field-underline-box--active remember-me__field-underline-box--completed"), i = this.validationCode().length, this.$underlineBoxes.filter(":nth-of-type(" + (i + 1) + ")").addClass("remember-me__field-underline-box--active"), i > 0) {
                    for (r = [], e = t = 1, n = i; n >= 1 ? n >= t : t >= n; e = n >= 1 ? ++t : --t)r.push(this.$underlineBoxes.filter(":nth-of-type(" + e + ")").addClass("remember-me__field-underline-box--completed"));
                    return r
                }
            }, r.prototype.validateSession = function (e) {
                if (e.preventDefault(), !this.isValidatingSession) {
                    if ("submit" === e.type && this.validationCode().length !== this.VERIFICATION_CODE_LENGTH)return this.showError();
                    if (this.SMSTimeoutID && clearTimeout(this.SMSTimeoutID), this.hasBeenValidatedOnce && this.updatePopoverState("blank"), this.$validationCodeInput.attr("aria-invalid", !1), this.updateInputFieldClass(), this.validationCode().length === this.VERIFICATION_CODE_LENGTH)return this.updatePopoverState("loading"), this.isValidatingSession = !0, this.rememberMeSession.validate(e.target.value).then(function (e) {
                        return function (t) {
                            var n;
                            return n = new RememberMeCheckoutUpdater(Shopify.Checkout.token), e.isAuthorizingPurchase() ? n.authorize(t.payment_session_id).then(function () {
                                return e.preventAuthorization = !0, e.updatePopoverState("success"), h("[data-checkout-form]").submit()
                            }) : (e.$validationCodeInput.blur(), n.createCheckoutFor(t).then(e.finishCheckout)["catch"](function () {
                                return e.showError("server")
                            })), e.isValidatingSession = !1
                        }
                    }(this))["catch"](function (e) {
                        return function (t) {
                            switch (e.isValidatingSession = !1, 524 === t.response.status && ShopifyAnalytics.lib.track("remember_me_timeout", {
                                checkout_token: Shopify.Checkout.token,
                                type: "customers_validate"
                            }), t.response.status) {
                                case 401:
                                    return e.showError("wrong-code");
                                case 429:
                                    return e.isAuthorizingPurchase() ? e.showError("authorize") : e.showError("throttle");
                                default:
                                    return e.isAuthorizingPurchase() ? e.showError("authorize") : e.showError("server")
                            }
                        }
                    }(this)), this.hasBeenValidatedOnce = !0
                }
            }, r.prototype.isAuthorizingPurchase = function () {
                return this.authorizePurchaseButton.length > 0
            }, r.prototype.closePopover = function () {
                return this.$html.trigger("popover:hide")
            }, r.prototype.finishCheckout = function () {
                return this.$fieldsetWrapper = this.$("[data-remember-me-fieldset-wrapper]"), this.updatePopoverState("success"), this.$rememberMeFooter.addClass("remember-me-footer--success").removeClass("remember-me-footer--loading"), this.$fieldsetWrapper.addClass("remember-me--success").removeClass("remember-me--loading"), this.reload(!1)
            }, r.prototype.updatePopoverState = function (e) {
                return this.$rememberMeFooter.attr("class", "remember-me-footer"), this.$fieldsetWrapper.attr("class", ""), this.updateInputFieldClass(), "blank" !== e ? (this.$rememberMeFooter.addClass("remember-me-footer--" + e), this.$fieldsetWrapper.addClass("remember-me--" + e)) : void 0
            }, r.prototype.showError = function (e) {
                return "string" != typeof e && (e = 0 === this.validationCode().length ? "no-code" : "wrong-code"), this.$("[data-remember-me-error]").addClass("hidden").attr("aria-hidden", !0), this.$("[data-remember-me-error=" + e + "]").removeClass("hidden").attr("aria-hidden", !1), "throttle" === e || "server" === e || "authorize" === e ? this.showErrorPane() : (this.updatePopoverState("error"), this.$validationCodeInput.focus().attr("aria-invalid", !0))
            }, r.prototype.showErrorPane = function () {
                return this.$popoverContentWrapper.css({height: this.$popoverContentWrapper.outerHeight()}), this.$contentPane.addClass("popover-pane--hidden").attr("aria-hidden", !0), this.$errorPane.removeClass("popover-pane--hidden").addClass("remember-me-error-pane--visible").attr("aria-hidden", !1), this.$popoverContentWrapper.css({height: this.$errorPane.outerHeight()}), this.$popover.focus(), Helpers.Animation.onTransitionEnd(this.$popoverContentWrapper).done(function (e) {
                    return function () {
                        return e.$html.trigger("popover:updatePosition"), e.$popoverContentWrapper.attr("style", ""), e.$contentPane.remove()
                    }
                }(this))
            }, r.prototype.showErrorPaneFirst = function () {
                return this.createPopover({
                    anchor: this.authorizePurchaseButton,
                    phone_digits: "",
                    position: "top"
                }, function (e) {
                    return function () {
                        return e.$contentPane.addClass("hidden").attr("aria-hidden", !0), e.$errorPane.removeClass("popover-pane--hidden").attr("aria-hidden", !1), e.showError("authorize")
                    }
                }(this))
            }, r.prototype.initSMSTimeout = function () {
                return this.SMSTimeoutID && clearTimeout(this.SMSTimeoutID), this.SMSTimeoutID = setTimeout(function (e) {
                    return function () {
                        return e.$("[data-remember-code-not-received]").removeClass("hidden"), e.isAuthorizingPurchase() ? e.$("[data-remember-code-not-received-button='payment_information_step']").removeClass("hidden") : e.$("[data-remember-code-not-received-button='contact_information_step']").removeClass("hidden"), e.$html.trigger("popover:updatePosition"), ShopifyAnalytics.lib.track("remember_me_timeout", {
                            checkout_token: Shopify.Checkout.token,
                            type: "didnt_receive_text"
                        })
                    }
                }(this), this.TIMEOUTS.codeNotReceived)
            }, r.prototype.dismissFeature = function () {
                return this.isAuthorizingPurchase() ? this.reload() : (this.closePopover(), this.$triggerButton ? this.$triggerButton.remove() : void 0)
            }, r.prototype.updateCountryCode = function () {
                return this.$('[name="checkout[remember_me_country_code]"]').val(this.$('[name="checkout[remember_me_phone]"]').data("phone-formatter-country-code"))
            }, r
        }(Behaviour)
    }).call(this);
    var et = t(function (e, t) {
        "use strict";
        function n(e) {
            return e.replace(p, "")
        }

        function r(e) {
            return e.search(p) > -1
        }

        function i(e, t) {
            try {
                var n = l().parseAndKeepRawInput(e, t), r = g.phonenumbers.PhoneNumberUtil.ValidationResult;
                return l().isPossibleNumberWithReason(n) === r.TOO_LONG
            } catch (i) {
                return e ? e.length > 15 : !1
            }
        }

        function s(e, t) {
            try {
                var n = l().parseAndKeepRawInput(e, t);
                return l().format(n, g.phonenumbers.PhoneNumberFormat.E164)
            } catch (r) {
                return e
            }
        }

        function u() {
            Object.keys(Countries).forEach(function (e) {
                var t = Countries[e];
                return f[t.code] = t.flag_path, f[t.code]
            })
        }

        function l() {
            return y = y || g.phonenumbers.PhoneNumberUtil.getInstance()
        }

        function c(e, t) {
            return !e || !t || h(e).length < 4 ? "" : l().parseAndKeepRawInput(e, t).getNationalNumber().toString()
        }

        function d(e, t) {
            var n = void 0, r = !0, i = !1, o = void 0;
            try {
                for (var a, s = e.replace(p, "")[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                    var u = a.value;
                    n = t.inputDigit(u)
                }
            } catch (l) {
                i = !0, o = l
            } finally {
                try {
                    !r && s["return"] && s["return"]()
                } finally {
                    if (i)throw o
                }
            }
            return n
        }

        function h(e) {
            return e.replace(/\D/g, "")
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.getCleanNumber = n, t.isFormattingChar = r, t.isTooLong = i, t.getE164Format = s;
        var p = /[()\-. ]+/g, f = {}, y = void 0, v = function () {
            function e(t) {
                a(this, e), this.initialRegionCode = t, u(), this.update(t)
            }

            return o(e, [{
                key: "reset", value: function (e) {
                    this.initialRegionCode && this.update(this.initialRegionCode, e)
                }
            }, {
                key: "getCountryCode", value: function (e) {
                    return e ? l().extractCountryCode(e.replace("+", ""), new m.string.StringBuffer) : this.countryCode
                }
            }, {
                key: "getFlagUrl", value: function () {
                    return f[this.regionCode]
                }
            }, {
                key: "updateFormatter", value: function () {
                    this.formatter = new g.phonenumbers.AsYouTypeFormatter(this.regionCode)
                }
            }, {
                key: "update", value: function (e, t) {
                    this.countryCode = l().getCountryCodeForRegion(e), this.regionCode = e || l().getRegionCodeForCountryCode(this.countryCode), this.updateFormatter(), 0 === this.countryCode && (this.regionCode = null), t && t()
                }
            }, {
                key: "format", value: function (e, t) {
                    return this.updateCountryCode(e, t), this.formatter.clear(), d(e, this.formatter) || ""
                }
            }, {
                key: "updateCountryCode", value: function (e, t) {
                    var n = this.regionCode, r = e, i = void 0;
                    0 === e.indexOf("+") && h(e).length > 1 && (i = this.getCountryCode(e), r = c(e, this.regionCode), n = l().getRegionCodeForCountryCode(i));
                    try {
                        var o = l().parseAndKeepRawInput(r, n);
                        n = l().getRegionCodeForNumber(o) || n
                    } catch (a) {
                        i && this.countryCode !== i && (n = l().getRegionCodeForCountryCode(i))
                    }
                    this.update(n, t)
                }
            }]), e
        }();
        t["default"] = v
    }), tt = t(function (e, t) {
        "use strict";
        function n(e, t) {
            return t.selectionStart ? (t.focus(), t.setSelectionRange(e, e)) : t.focus()
        }

        function s(e, t) {
            var n = 0, r = e, i = !0, o = !1, a = void 0;
            try {
                for (var s, u = t[Symbol.iterator](); !(i = (s = u.next()).done); i = !0) {
                    var l = s.value;
                    if (!r && !et.isFormattingChar(l))break;
                    l === r[0] && (r = r.substring(1)), n++
                }
            } catch (c) {
                o = !0, a = c
            } finally {
                try {
                    !i && u["return"] && u["return"]()
                } finally {
                    if (o)throw a
                }
            }
            return n
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var l = u(et), c = function (e) {
            function t() {
                return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return r(t, e), o(t, [{
                key: "init", value: function () {
                    var e = this.$element.val();
                    this.formatter = new l["default"](this.$element.data("phone-formatter-region-code")), this.showFlag = this.$element.data("phone-formatter-show-flag"), this.initFlagPlaceholder(), document.activeElement === this.$element[0] && 0 === e.length && this.insertCountryCode(), this.initCountryListener(), e.length > 0 && this.formatPhoneNumber(), this.$element.data("phone-formatter-e164-field") && (this.$e164Field = h(this.$element.data("phone-formatter-e164-field")))
                }
            }, {
                key: "initFlagPlaceholder", value: function () {
                    this.showFlag && (this.$flagPlaceholder = h("<div>").addClass("field__icon field__icon--flag").attr("aria-hidden", !0), this.$element.after(this.$flagPlaceholder))
                }
            }, {
                key: "initCountryListener", value: function () {
                    this.$element.data("phone-formatter-country-select") && (this.countrySelector = h(this.$element.data("phone-formatter-country-select")).change(this.updateCountryCodeFromSelect.bind(this)), this.updateCountryCodeFromSelect())
                }
            }, {
                key: "updateE164Field", value: function (e) {
                    this.$e164Field && this.$e164Field.val(e)
                }
            }, {
                key: "updateCountryCodeFromSelect", value: function () {
                    var e = this.countrySelector.find("option:selected").data("code");
                    e && this.formatter.update(e), this.formatPhoneNumber()
                }
            }, {
                key: "insertCountryCode", value: function () {
                    var e = this, t = this.formatter.getCountryCode();
                    if (this.$element.data("phone-formatter-insert-country-code") && t && !(this.$element.val().length > 0)) {
                        var r = "+" + t + " ";
                        this.$element.val(r).blur(), setTimeout(function () {
                            return n(r.length, e.$element[0])
                        }), this.updateFlag()
                    }
                }
            }, {
                key: "onCountryCodeChange", value: function () {
                    this.formatter && (this.updateFlag(), this.$element.attr("data-phone-formatter-country-code", this.formatter.getCountryCode()))
                }
            }, {
                key: "updateFlag", value: function () {
                    var e = this;
                    if (this.showFlag) {
                        var t = this.formatter.getFlagUrl(), n = this.$element.val(), r = et.isTooLong(n, this.formatter.regionCode);
                        return !t || n.length <= 2 || 0 !== n.indexOf("+") || r ? void this.$flagPlaceholder.addClass("field__icon--flag--hidden") : void h("<img/>").attr("src", t).load(function () {
                            h(e).remove(), e.$flagPlaceholder.css("background-image", "url(" + t + ")").addClass("field__icon--flag--visible").removeClass("field__icon--flag--hidden")
                        })
                    }
                }
            }, {
                key: "formatPhoneNumber", value: function (e) {
                    var t = this;
                    e && e.preventDefault();
                    var r = this.$element.val();
                    0 === r.length && this.formatter.reset(this.onCountryCodeChange.bind(this));
                    var i = this.lastValue ? r.length < this.lastValue.length : !1, o = et.getCleanNumber(r.slice(0, this.$element[0].selectionStart)), a = this.formatter.format(r, this.onCountryCodeChange.bind(this));
                    return i || a.length < r.length ? void(this.lastValue = this.$element.val()) : (setTimeout(function () {
                        t.$element.val(a), t.lastValue = a, t.updateE164Field(et.getE164Format(a, t.formatter.regionCode))
                    }), void(document.activeElement === this.$element[0] && setTimeout(function () {
                        n(s(o, t.$element.val()), t.$element[0])
                    })))
                }
            }, {
                key: "events", get: function () {
                    return {"focus input": "insertCountryCode", "input input": "formatPhoneNumber"}
                }
            }]), t
        }(Behaviour);
        t["default"] = c, window.PhoneNumberInputFormatter = c
    }), nt = t(function (e, t) {
        var n = U("meta"), r = J.f, i = 0, o = Object.isExtensible || function () {
                return !0
            }, a = !q(function () {
            return o(Object.preventExtensions({}))
        }), s = function (e) {
            r(e, n, {value: {i: "O" + ++i, w: {}}})
        }, u = function (e, t) {
            if (!V(e))return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!ee(e, n)) {
                if (!o(e))return "F";
                if (!t)return "E";
                s(e)
            }
            return e[n].i
        }, l = function (e, t) {
            if (!ee(e, n)) {
                if (!o(e))return !0;
                if (!t)return !1;
                s(e)
            }
            return e[n].w
        }, c = function (e) {
            return a && d.NEED && o(e) && !ee(e, n) && s(e), e
        }, d = e.exports = {KEY: n, NEED: !1, fastKey: u, getWeak: l, onFreeze: c}
    }), rt = t(function (e, t) {
        t.f = H
    }), it = t(function (e, t) {
        var n = J.f;
        e.exports = function (e) {
            var t = te.Symbol || (te.Symbol = se ? {} : B.Symbol || {});
            "_" == e.charAt(0) || e in t || n(t, e, {value: rt.f(e)})
        }
    }), ot = t(function (e, t) {
        e.exports = function (e, t) {
            for (var n, r = pe(e), i = be(r), o = i.length, a = 0; o > a;)if (r[n = i[a++]] === t)return n
        }
    }), at = t(function (e, t) {
        t.f = Object.getOwnPropertySymbols
    }), st = t(function (e, t) {
        e.exports = function (e) {
            var t = be(e), n = at.f;
            if (n)for (var r, i = n(e), o = Be.f, a = 0; i.length > a;)o.call(e, r = i[a++]) && t.push(r);
            return t
        }
    }), ut = t(function (e, t) {
        e.exports = Array.isArray || function (e) {
                return "Array" == F(e)
            }
    }), lt = t(function (e, t) {
        var n = _e.concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function (e) {
                return ve(e, n)
            }
    }), ct = t(function (e, t) {
        var n = lt.f, r = {}.toString, i = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], o = function (e) {
            try {
                return n(e)
            } catch (t) {
                return i.slice()
            }
        };
        e.exports.f = function (e) {
            return i && "[object Window]" == r.call(e) ? o(e) : n(pe(e))
        }
    }), dt = t(function (e, t) {
        "use strict";
        var n = nt.KEY, r = je.f, i = J.f, o = ct.f, a = B.Symbol, s = B.JSON, u = s && s.stringify, l = "prototype", c = H("_hidden"), d = H("toPrimitive"), h = {}.propertyIsEnumerable, p = j("symbol-registry"), f = j("symbols"), m = j("op-symbols"), g = Object[l], y = "function" == typeof a, v = B.QObject, _ = !v || !v[l] || !v[l].findChild, b = G && q(function () {
            return 7 != Se(i({}, "a", {
                    get: function () {
                        return i(this, "a", {value: 7}).a
                    }
                })).a
        }) ? function (e, t, n) {
            var o = r(g, t);
            o && delete g[t], i(e, t, n), o && e !== g && i(g, t, o)
        } : i, A = function (e) {
            var t = f[e] = Se(a[l]);
            return t._k = e, t
        }, N = y && "symbol" == typeof a.iterator ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return e instanceof a
        }, S = function (e, t, n) {
            return e === g && S(m, t, n), W(e), t = X(t, !0), W(n), ee(f, t) ? (n.enumerable ? (ee(e, c) && e[c][t] && (e[c][t] = !1), n = Se(n, {enumerable: Q(0, !1)})) : (ee(e, c) || i(e, c, Q(1, {})), e[c][t] = !0), b(e, t, n)) : i(e, t, n)
        }, C = function (e, t) {
            W(e);
            for (var n, r = st(t = pe(t)), i = 0, o = r.length; o > i;)S(e, n = r[i++], t[n]);
            return e
        }, E = function (e, t) {
            return void 0 === t ? Se(e) : C(Se(e), t)
        }, w = function (e) {
            var t = h.call(this, e = X(e, !0));
            return this === g && ee(f, e) && !ee(m, e) ? !1 : t || !ee(this, e) || !ee(f, e) || ee(this, c) && this[c][e] ? t : !0
        }, T = function (e, t) {
            if (e = pe(e), t = X(t, !0), e !== g || !ee(f, t) || ee(m, t)) {
                var n = r(e, t);
                return !n || !ee(f, t) || ee(e, c) && e[c][t] || (n.enumerable = !0), n
            }
        }, $ = function (e) {
            for (var t, r = o(pe(e)), i = [], a = 0; r.length > a;)ee(f, t = r[a++]) || t == c || t == n || i.push(t);
            return i
        }, x = function (e) {
            for (var t, n = e === g, r = o(n ? m : pe(e)), i = [], a = 0; r.length > a;)ee(f, t = r[a++]) && (n ? ee(g, t) : !0) && i.push(f[t]);
            return i
        };
        y || (a = function () {
            if (this instanceof a)throw TypeError("Symbol is not a constructor!");
            var e = U(arguments.length > 0 ? arguments[0] : void 0), t = function (n) {
                this === g && t.call(m, n), ee(this, c) && ee(this[c], e) && (this[c][e] = !1), b(this, e, Q(1, n))
            };
            return G && _ && b(g, e, {configurable: !0, set: t}), A(e)
        }, ne(a[l], "toString", function () {
            return this._k
        }), je.f = T, J.f = S, lt.f = ct.f = $, Be.f = w, at.f = x, G && !se && ne(g, "propertyIsEnumerable", w, !0), rt.f = function (e) {
            return A(H(e))
        }), ce(ce.G + ce.W + ce.F * !y, {Symbol: a});
        for (var P = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), k = 0; P.length > k;)H(P[k++]);
        for (var P = be(H.store), k = 0; P.length > k;)it(P[k++]);
        ce(ce.S + ce.F * !y, "Symbol", {
            "for": function (e) {
                return ee(p, e += "") ? p[e] : p[e] = a(e)
            }, keyFor: function (e) {
                if (N(e))return ot(p, e);
                throw TypeError(e + " is not a symbol!")
            }, useSetter: function () {
                _ = !0
            }, useSimple: function () {
                _ = !1
            }
        }), ce(ce.S + ce.F * !y, "Object", {
            create: E,
            defineProperty: S,
            defineProperties: C,
            getOwnPropertyDescriptor: T,
            getOwnPropertyNames: $,
            getOwnPropertySymbols: x
        }), s && ce(ce.S + ce.F * (!y || q(function () {
                var e = a();
                return "[null]" != u([e]) || "{}" != u({a: e}) || "{}" != u(Object(e))
            })), "JSON", {
            stringify: function (e) {
                if (void 0 !== e && !N(e)) {
                    for (var t, n, r = [e], i = 1; arguments.length > i;)r.push(arguments[i++]);
                    return t = r[1], "function" == typeof t && (n = t), (n || !ut(t)) && (t = function (e, t) {
                        return n && (t = n.call(this, e, t)), N(t) ? void 0 : t
                    }), r[1] = t, u.apply(s, r)
                }
            }
        }), a[l][d] || Z(a[l], d, a[l].valueOf), Ce(a, "Symbol"), Ce(Math, "Math", !0), Ce(B.JSON, "JSON", !0)
    }), ht = t(function (e, t) {
        e.exports = te.Symbol
    }), pt = t(function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = Symbol("targetSymbol"), r = Symbol("actionQueueSymbol"), i = Symbol("finishedLoadingSymbol"), s = function () {
            function e(t) {
                var o = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
                if (a(this, e), this[r] = [], this[i] = !1, s) {
                    var u = t.onload;
                    t.onload = function () {
                        u && u(), o[n] = t, o[i] = !0, o[r].forEach(function (e) {
                            return e()
                        })
                    }
                } else this[n] = t, this[i] = !0
            }

            return o(e, [{
                key: "postMessage", value: function (e) {
                    var t = this, o = function () {
                        e.digitalWalletsDialog = !0, t[n].postMessage(e, t[n].location)
                    };
                    this[i] ? o() : this[r].push(function () {
                        o()
                    })
                }
            }]), e
        }();
        t["default"] = s
    }), ft = t(function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = t.EVENTS_PREFIX = "DigitalWalletsDialog";
        t.DIALOG_CHANGE = n + ":change", t.DIALOG_CHANGED = n + ":changed", t.DIALOG_DISMISSED = n + ":dismissed", t.IFRAME_SHOWN = n + ":iframe_shown", t.IFRAME_HIDDEN = n + ":iframe_hidden", t.HTML_ESCAPED_CHARACTERS = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        }
    }), mt = t(function (e, t) {
        "use strict";
        function n(e) {
            e[p] = new d["default"](e[h].contentWindow, !0)
        }

        function r(e, t) {
            e[h] = document.createElement("iframe"), e[h].src = t, e[h].style.position = "fixed", e[h].style.top = 0, e[h].style.left = 0, e[h].style.zIndex = 99999, e[h].style.height = 0, e[h].style.width = 0, e[h].style.border = 0, e[h].scrolling = "no", document.body.appendChild(e[h])
        }

        function i(e, t) {
            switch (t.data.type) {
                case ft.DIALOG_CHANGED:
                    g = window.pageYOffset, s(e[h], !0), l(!0), c(e, ft.IFRAME_SHOWN), e[p].postMessage({type: ft.IFRAME_SHOWN});
                    break;
                case ft.DIALOG_DISMISSED:
                    s(e[h], !1), l(!1, g), c(e, ft.IFRAME_HIDDEN);
                    break;
                default:
                    return
            }
        }

        function s(e, t) {
            var n = t ? "100%" : "0";
            e.style.height = n, e.style.width = n
        }

        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            document.documentElement.style.overflow = e ? "hidden" : "visible", document.documentElement.style.height = e ? "100%" : "auto", document.body.style.overflow = e ? "hidden" : "visible", document.body.style.height = e ? "100%" : "auto", window.scrollTo(0, t)
        }

        function c(e, t) {
            if (-1 !== f.indexOf(t)) {
                var n = new Event(t);
                e[h].dispatchEvent(n)
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var d = u(pt), h = Symbol("iframeSymbol"), p = Symbol("messengerSymbol"), f = [ft.IFRAME_SHOWN, ft.IFRAME_HIDDEN], m = void 0, g = void 0, y = function () {
            function e(t) {
                var o = this;
                return a(this, e), m || (m = this, r(this, t), n(this), this._messageHandler = function (e) {
                    e.data && e.data.type && e.data.digitalWalletsDialog && i(o, e)
                }, window.addEventListener("message", this._messageHandler)), m
            }

            return o(e, [{
                key: "showMessage", value: function (e) {
                    return this[p].postMessage({payload: e, type: ft.DIALOG_CHANGE})
                }
            }, {
                key: "destroy", value: function () {
                    null !== this[h] && this[h].remove(), m = null, this[h] = null, this[p] = null, window.removeEventListener("message", this._messageHandler), l(!1)
                }
            }]), e
        }();
        t["default"] = y
    }), gt = t(function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = u(mt), s = function (e) {
            function t() {
                return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return r(t, e), o(t, [{
                key: "init", value: function () {
                    var e = document.getElementById("shopify-digital-wallet");
                    e && (window.DigitalWalletsDialog = new n["default"](e.getAttribute("data-iframe-url")))
                }
            }]), t
        }(Behaviour);
        t["default"] = s, window.DialogBehaviour = s
    }), yt = t(function (t, n) {
        "use strict";
        function r() {
            try {
                return navigator.language || navigator.systemLanguage
            } catch (e) {
                return m
            }
        }

        function i() {
            try {
                var t = document.createElement("canvas");
                t.width = "220", t.height = "50";
                var n = t.getContext("2d"), r = n.createLinearGradient(0, 0, 62, 0);
                return r.addColorStop(0, "white"), r.addColorStop(.5, "orange"), r.addColorStop(1, "red"), n.beginPath(), n.arc(80, 25, 25, 0, 2 * Math.PI), n.fillStyle = "green", n.fill(), n.lineWidth = 4, n.stroke(), n.fillStyle = r, n.fillRect(1, 1, 62, 20), n.font = "17.5px Times", n.textBaseline = "top", n.fillStyle = "#069", n.fillText("anti-aliased", 110, 3), n.scale(1.5, 1), n.font = "13.5px Arial", n.fillText("Strech1.5", 72, 28), e(t.toDataURL("image/png"))
            } catch (i) {
                return m
            }
        }

        function s() {
            try {
                return navigator.cookieEnabled ? g : y
            } catch (e) {
                return m
            }
        }

        function u() {
            try {
                return screen.width + "x" + screen.height + "x" + screen.colorDepth
            } catch (e) {
                return m
            }
        }

        function l() {
            try {
                var t = ["Abadi MT Condensed Light", "Adobe Caslon Pro", "Adobe Fangsong Std", "Adobe Garamond", "Adobe Hebrew", "Adobe Heiti Std", "Adobe Kaiti Std", "Adobe Ming Std", "Adobe Myungjo Std", "Adobe Song Std", "Agency FB", "Aharoni", "Albertus Medium", "Aldhabi", "Algerian", "Amazone BT", "American Typewriter", "Andale Mono", "Angsana New", "Antique Olive", "Apercu", "Apple LiGothic", "Apple LiSung", "Apple SD Gothic Neo", "AppleMyungjo", "Arabic Transparent", "Archer", "Arial Baltic", "Arial Nova", "Arno Pro", "Arrus BT", "Athelas", "Aurora Cn BT", "AvantGarde Bk BT", "Avenir", "Avenir Next Condensed", "Bandy", "Bank Gothic", "Baoli SC", "Baskerville", "Batang", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bebas Neue", "Beirut", "Bell Gothic Std", "Beloved", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Bernard MT Condensed", "BiauKai", "BinnerD", "Birch Std", "Bitstream Vera Sans Mono", "Blackoak Std", "Bookman Old Style", "Bookshelf Symbol 7", "Boulder", "Braggadocio", "Bremen Bd BT", "Britannic Bold", "Broadway", "CG Omega", "Calibri", "Californian FB", "Calligrapher", "Caslon", "Castellar", "Casual", "Centaur", "Century", "Cezanne", "Chaparral Pro", "Charcoal CY", "Charlemagne Std", "Charlesworth", "Charter", "Chaucer", "Chiller", "Clarendon", "CloisterBlack BT", "Colonna MT", "Comic Sans MS", "Cooper Black", "Cornerstone", "Coronet", "Courier New", "Cuckoo", "Curlz MT", "DB LCD Temp", "DaunPenh", "Dauphin", "DejaVu LGC Sans Mono", "Delicious", "Dengxian", "Denmark", "Desdemona", "Din", "Droid Sans Mono", "Eccentric Std", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "Eras Bold ITC", "Eurostile", "Eurostile", "Exotc350 Bd BT", "Felix Titling", "Fixedsys", "Fontin", "Footlight MT Light", "Forte", "Franklin Gothic Heavy", "Fransiscan", "Freestyle Script", "French Script MT", "Fruitger", "Futura", "Futura-Bold", "Gadugi", "Galliard BT", "Garamond", "Geneva", "GeoSlab 703 XBd BT", "Geometr231 BT", "Georgia", "Giddyup Std", "Gigi", "Gloucester MT Extra Condensed", "Gotham", "Goudy Old Style", "GungSeo", "Gurmukhi MT", "Haettenschweiler", "Hannotate SC", "HanziPen SC", "Harlow Solid Italic", "Harrington", "HeadLineA", "Heather", "Hei", "Helvetica Neue", "Herald", "Herculanum", "High Tower Text", "Hobo Std", "Humanst 521 Cn BT", "Imprint MT Shadow", "Incised901 BT", "Inconsolata", "Indie", "Informal Roman", "Interstate", "Iskoola Pota", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "KacstOne", "Kai", "Kaiti SC", "Kaufmann BT", "Kayak", "Kino MT", "Kozuka Gothic Pro", "Kristen ITC", "Kunstler Script", "Lantinghei SC", "Lao MN", "Lao UI", "Leelawadee UI", "Letter Gothic", "LiHei Pro", "LiSong Pro", "Libian SC", "Lithograph", "Lohit Gujarati", "Loma", "Long Island", "Lydian BT", "MS Gothic", "Magneto", "Maiandra GD", "Marigold", "Market", "Matisse ITC", "Matura MT Script Capitals", "Meslo", "Mesquite Std", "Microsoft JhengHei UI", "Minion", "Mirador", "Miriam", "Mistral", "Modern", "Mona Lisa Solid ITC TT", "Monaco", "Mono", "Monospace", "Mrs Eaves", "Museo", "Myriad Pro", "Nanum Brush Script", "Nevis", "Niagara Solid", "Nirmala UI", "Noteworthy", "Nueva Std", "OCR A Extended", "Old English Text MT", "Onyx", "Orator Std", "Oriya MN", "Osaka", "Osaka", "OzHandicraft BT", "PCMyungjo", "PMingLiU", "PTBarnum BT", "Palace Script MT", "Panton", "Parchment", "Pegasus", "Perpetua", "PetitaBold", "Pickwick", "PilGi", "PingFang SC", "Playbill", "Poor Richard", "Poplar Std", "Poster", "PosterBodoni BT", "Prelude Bold", "Princetown Let", "Pristina", "Proxima Nova", "Pythagoras", "Quotes", "Rachana", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Roboto Mono Light for Powerline", "Roboto Mono", "Rockwell", "Roman", "Rosewood Std", "STFangsong", "STIXGeneral", "San Francisco Mono", "Santa Fe LET", "Savoye LET", "Sawasdee", "Sceptre", "Script", "Scriptina", "Segoe UI", "Seravek", "Serifa", "ShelleyVolante BT", "Sherwood", "Showcard Gothic", "Signboard", "Silkscreen", "Silom", "Simplified Arabic Fixed", "Sketch Rockwell", "Small Fonts", "Snap ITC", "Socket", "Songti SC", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Sylfaen", "Synchro LET", "System", "Technical", "Tekton Pro", "Teletype", "Telugu MN", "Tempus Sans ITC", "Terminal", "Times", "TlwgMono", "Toppan Bunkyu Gothic", "Trajan", "Trajan Pro", "Tristan", "Tubular", "Tunga", "TypoUpright BT", "Ubuntu", "Umpush", "Unicorn", "Univers", "Utopia", "Vagabond", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Wawati SC", "Webdings", "Weibei TC", "Whitney", "Wide Latin", "Wingdings 2", "Xingkai SC", "YuGothic", "Yuanti SC", "Yuppy SC", "ZWAdobeF", "Zurich BlkEx BT"], n = [], r = document.createElement("canvas");
                r.width = "100", r.height = "20";
                var i = r.getContext("2d");
                f(i, "doesntexist");
                var o = r.toDataURL("image/png");
                return t.forEach(function (e) {
                    i.clearRect(0, 0, r.width, r.height), f(i, e), r.toDataURL("image/png") !== o && n.push(e)
                }), {hash: e(JSON.stringify(n)), count: n.length}
            } catch (a) {
                return {hash: m, count: m}
            }
        }

        function c() {
            try {
                var e = "Shopify";
                return localStorage.setItem(e, e), localStorage.removeItem(e), g
            } catch (t) {
                return y
            }
        }

        function d() {
            try {
                var t = [];
                if (navigator.plugins && navigator.plugins.length > 0)for (var n = navigator.plugins, r = Math.min(15, n.length), i = 0; r > i; i++) {
                    for (var o = n[i], a = [], s = Math.min(10, o.length), u = 0; s > u; u++) {
                        var l = o[u];
                        a.push([l.type, l.suffixes].join(";"))
                    }
                    a.sort(), t.push([o.name, o.filename, o.description, a.join()].join(";"))
                } else if (Browser.ie === !0)for (var c = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "rmocx.RealPlayer G2 Control"], d = 0; d < c.length; d++)try {
                    new ActiveXObject(c[d]), t.push(c[d])
                } catch (h) {
                    continue
                }
                return {hash: e(JSON.stringify(t)), count: t.length}
            } catch (h) {
                return {hash: m, count: m}
            }
        }

        function h() {
            try {
                var e = document.cookie.match(/\b_shopify_y=([\w-]+)/);
                return 2 === e.length ? e[1] : v
            } catch (t) {
                return m
            }
        }

        function p() {
            try {
                var e = new Date;
                return e.getTimezoneOffset().toString()
            } catch (t) {
                return m
            }
        }

        function f(e, t) {
            var n = "14px", r = "aBmw0&gyli";
            e.font = n + " " + t, e.textBaseline = "top", e.fillText(r, 0, 0)
        }

        Object.defineProperty(n, "__esModule", {value: !0});
        var m = "error", g = "enabled", y = "disabled", v = "missing", _ = function () {
            function e(t, n) {
                a(this, e), this.trekkie = t, this.checkoutToken = n
            }

            return o(e, [{
                key: "collectCheckoutDeviceData", value: function () {
                    var e = l(), t = d();
                    return {
                        browserLanguage: r(),
                        canvasFingerprint: i(),
                        checkoutToken: this.checkoutToken,
                        cookiesEnabled: s(),
                        displayProperties: u(),
                        fontCount: e.count,
                        fontList: e.hash,
                        localStorageEnabled: c(),
                        pluginCount: t.count,
                        pluginList: t.hash,
                        shopifyToken: h(),
                        timezoneOffset: p()
                    }
                }
            }, {
                key: "sendCheckoutDeviceData", value: function () {
                    try {
                        return this.trekkie.track(Shopify.clientAttributesCollectionEventName, this.collectCheckoutDeviceData()), !0
                    } catch (e) {
                        return !1
                    }
                }
            }]), e
        }();
        n["default"] = _, window.addEventListener("load", function () {
            window.setTimeout(function () {
                window.trekkie && window.DF_CHECKOUT_TOKEN && (Shopify = Shopify || {}, "undefined" == typeof Shopify.ClientAttributesCollection && (Shopify.ClientAttributesCollection = new _(window.trekkie, window.DF_CHECKOUT_TOKEN)), Shopify.ClientAttributesCollection && Shopify.ClientAttributesCollection.sendCheckoutDeviceData())
            })
        })
    }), vt = t(function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function (e) {
            function t() {
                return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return r(t, e), o(t, [{
                key: "init", value: function () {
                    this.checkboxElement = document.querySelector("[data-buyer-accepts-marketing]"), this.toggleSubscriptionCheckbox()
                }
            }, {
                key: "toggleSubscriptionCheckbox", value: function () {
                    var e = document.querySelector('input[name="checkout[email_or_phone]"]');
                    null !== this.checkboxElement && null !== e && (e.value.indexOf("@") >= 0 ? this.checkboxElement.classList.remove("hidden") : this.checkboxElement.classList.add("hidden"))
                }
            }, {
                key: "events", get: function () {
                    return {'input input[name="checkout[email_or_phone]"]': "toggleSubscriptionCheckbox"}
                }
            }]), t
        }(Behaviour);
        t["default"] = n, window.NewsletterSubscriptionToggler = n
    }), _t = t(function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = /[A-Za-z@]/, s = function (e) {
            function t() {
                return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return r(t, e), o(t, [{
                key: "init", value: function () {
                    this.inputFieldElement = this.$element[0], null !== this.inputFieldElement && (this.addressFieldType = this.inputFieldElement.getAttribute("data-address-type")), this.toggleInputFieldAutocompletion()
                }
            }, {
                key: "toggleInputFieldAutocompletion", value: function () {
                    null !== this.inputFieldElement && (this.inputFieldElement.value.match(n) || !this.inputFieldElement.value ? this.inputFieldElement.setAttribute("autocomplete", this.addressFieldType + " email") : this.inputFieldElement.setAttribute("autocomplete", this.addressFieldType + " tel"))
                }
            }, {
                key: "events", get: function () {
                    return {"input #checkout_email_or_phone": "toggleInputFieldAutocompletion"}
                }
            }]), t
        }(Behaviour);
        t["default"] = s, window.EmailOrPhoneAutofillToggler = s
    });
    (function () {
        this.Checkout = {
            $: p,
            jQuery: p
        }, Behaviour.backup = new MemoryStoreBackup, "rtl" === Checkout.$("html").attr("dir") && "undefined" != typeof RTLEnsure && null !== RTLEnsure && "function" == typeof RTLEnsure.observe && RTLEnsure.observe(".field__label, .field__input, [data-rtl-ensure]"), ErrorRemover.observe("form"), CountrySelector.observe("[data-shipping-address], [data-billing-address]"), FieldAutocompleter.observe("[data-shipping-address], [data-billing-address]"), AddressSelector.observe("[data-shipping-address], [data-billing-address]"), PollingRefresh.observe("[data-poll-target][data-poll-refresh]"), OrderSummaryUpdater.observe("[data-update-order-summary]"), OrderSummaryScrollableProducts.observe("body"), ShippingMethodSelector.observe("[data-shipping-methods]"), BillingAddress.observe("[data-billing-address]"), "undefined" != typeof RememberMe && null !== RememberMe && "function" == typeof RememberMe.observe && RememberMe.observe('[data-step="payment_method"]'), PaymentExpiry.observe("[data-payment-method]"), CreditCardV2.observe("[data-payment-method]"), GatewaySelector.observe("[data-payment-method]"), Drawer.observe("body"), ClientDetailsTracker.observe("body"), FloatingLabel.observe("form"), Modal.observe("html"), ReductionForm.observe("body"), SectionToggle.observe("[data-step]"), PaymentForm.observe("[data-step]"), CheckoutCardFields.observe('[data-step="payment_method"]'), Autofocus.observe("[data-step], [data-order-summary]"), AmazonPayments.AddressBook.observe("[data-amazon-payments-address-book-widget]"), AmazonPayments.Wallet.observe("[data-amazon-payments-wallet-widget]"), AmazonPayments.LogoutLink.observe("[data-step]"), AmazonPayments.PaymentGateway.observe("[data-payment-form]"),
            OrderStatusMap.observe("[data-mapbox]"), InContextPaypalExpressPaymentGateway.observe("[data-payment-form]"), InContextPaypalExpressPayButton.observe("#paypal-express-checkout-btn"), InputAnalytics.observe("form"), "undefined" != typeof ApplePay && null !== ApplePay && "function" == typeof ApplePay.observe && ApplePay.observe("body"), ("undefined" != typeof ShopifyExperiments && null !== ShopifyExperiments ? ShopifyExperiments.rememberMe : void 0) && RememberMeValidation.observe("body"), "undefined" != typeof PhoneNumberInputFormatter && null !== PhoneNumberInputFormatter && "function" == typeof PhoneNumberInputFormatter.observe && PhoneNumberInputFormatter.observe("[data-phone-formatter]"), ("undefined" != typeof ShopifyExperiments && null !== ShopifyExperiments ? ShopifyExperiments.rememberMe : void 0) && Popover.observe("html"), "undefined" != typeof DialogBehaviour && null !== DialogBehaviour && "function" == typeof DialogBehaviour.observe && DialogBehaviour.observe("body"), "undefined" != typeof GooglePlaces && null !== GooglePlaces && "function" == typeof GooglePlaces.observe && GooglePlaces.observe("[data-shipping-address], [data-billing-address]"), ("undefined" != typeof ShopifyExperiments && null !== ShopifyExperiments ? ShopifyExperiments.checkoutWithPhone : void 0) && ("undefined" != typeof NewsletterSubscriptionToggler && null !== NewsletterSubscriptionToggler && "function" == typeof NewsletterSubscriptionToggler.observe && NewsletterSubscriptionToggler.observe("html"), "undefined" != typeof EmailOrPhoneAutofillToggler && null !== EmailOrPhoneAutofillToggler && "function" == typeof EmailOrPhoneAutofillToggler.observe && EmailOrPhoneAutofillToggler.observe("#checkout_email_or_phone")), this.Checkout.$(document).ready(function () {
            return Behaviour.triggerEvent(document, "page:load")
        })
    }).call(this), function () {
    }.call(this)
}();