/*! For license information please see app.js.LICENSE.txt */ ! function(t) {
    var e = {};

    function i(r) {
        if (e[r]) return e[r].exports;
        var n = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) i.d(r, n, function(e) {
                return t[e]
            }.bind(null, n));
        return r
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "/", i(i.s = 0)
}({
    "+9ZR": function(t, e, i) {
        "use strict";
        (function(t) {
            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function r(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function n(t, e, i) {
                return e && r(t.prototype, e), i && r(t, i), t
            }

            function s(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function a(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, r)
                }
                return i
            }

            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(i), !0).forEach((function(e) {
                        s(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }

            function h(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && c(t, e)
            }

            function l(t) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function u(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function p(t, e) {
                return !e || "object" != typeof e && "function" != typeof e ? u(t) : e
            }

            function f(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var i, r = l(t);
                    if (e) {
                        var n = l(this).constructor;
                        i = Reflect.construct(r, arguments, n)
                    } else i = r.apply(this, arguments);
                    return p(this, i)
                }
            }

            function d(t, e, i) {
                return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
                    var r = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = l(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var n = Object.getOwnPropertyDescriptor(r, e);
                        return n.get ? n.get.call(i) : n.value
                    }
                })(t, e, i || t)
            }

            function m(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var i = [],
                        r = !0,
                        n = !1,
                        s = void 0;
                    try {
                        for (var a, o = t[Symbol.iterator](); !(r = (a = o.next()).done) && (i.push(a.value), !e || i.length !== e); r = !0);
                    } catch (t) {
                        n = !0, s = t
                    } finally {
                        try {
                            r || null == o.return || o.return()
                        } finally {
                            if (n) throw s
                        }
                    }
                    return i
                }(t, e) || y(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(t) {
                return function(t) {
                    if (Array.isArray(t)) return v(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || y(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(t, e) {
                if (t) {
                    if ("string" == typeof t) return v(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? v(t, e) : void 0
                }
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
                return r
            }
            var b = {
                    el: document,
                    name: "scroll",
                    offset: [0, 0],
                    repeat: !1,
                    smooth: !1,
                    direction: "vertical",
                    gestureDirection: "vertical",
                    reloadOnContextChange: !1,
                    lerp: .1,
                    class: "is-inview",
                    scrollbarContainer: !1,
                    scrollbarClass: "c-scrollbar",
                    scrollingClass: "has-scroll-scrolling",
                    draggingClass: "has-scroll-dragging",
                    smoothClass: "has-scroll-smooth",
                    initClass: "has-scroll-init",
                    getSpeed: !1,
                    getDirection: !1,
                    scrollFromAnywhere: !1,
                    multiplier: 1,
                    firefoxMultiplier: 50,
                    touchMultiplier: 2,
                    resetNativeScroll: !0,
                    tablet: {
                        smooth: !1,
                        direction: "vertical",
                        gestureDirection: "vertical",
                        breakpoint: 1024
                    },
                    smartphone: {
                        smooth: !1,
                        direction: "vertical",
                        gestureDirection: "vertical"
                    }
                },
                D = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i(this, t), Object.assign(this, b, e), this.smartphone = b.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = b.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
                            x: this.windowWidth / 2,
                            y: this.windowHeight / 2
                        }, this.els = {}, this.currentElements = {}, this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
                            scroll: {
                                x: 0,
                                y: 0
                            },
                            limit: {
                                x: this.html.offsetHeight,
                                y: this.html.offsetHeight
                            },
                            currentElements: this.currentElements
                        }, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", this.isMobile && (this.direction = this[this.context].direction), "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y", this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1)
                    }
                    return n(t, [{
                        key: "init",
                        value: function() {
                            this.initEvents()
                        }
                    }, {
                        key: "checkScroll",
                        value: function() {
                            this.dispatchScroll()
                        }
                    }, {
                        key: "checkResize",
                        value: function() {
                            var t = this;
                            this.resizeTick || (this.resizeTick = !0, requestAnimationFrame((function() {
                                t.resize(), t.resizeTick = !1
                            })))
                        }
                    }, {
                        key: "resize",
                        value: function() {}
                    }, {
                        key: "checkContext",
                        value: function() {
                            if (this.reloadOnContextChange) {
                                this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                                var t = this.context;
                                if (this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", t != this.context)("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
                            }
                        }
                    }, {
                        key: "initEvents",
                        value: function() {
                            var t = this;
                            this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach((function(e) {
                                e.addEventListener("click", t.setScrollTo, !1)
                            }))
                        }
                    }, {
                        key: "setScrollTo",
                        value: function(t) {
                            t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                                offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                            })
                        }
                    }, {
                        key: "addElements",
                        value: function() {}
                    }, {
                        key: "detectElements",
                        value: function(t) {
                            var e = this,
                                i = this.instance.scroll.y,
                                r = i + this.windowHeight,
                                n = this.instance.scroll.x,
                                s = n + this.windowWidth;
                            Object.entries(this.els).forEach((function(a) {
                                var o = m(a, 2),
                                    h = o[0],
                                    l = o[1];
                                if (!l || l.inView && !t || ("horizontal" === e.direction ? s >= l.left && n < l.right && e.setInView(l, h) : r >= l.top && i < l.bottom && e.setInView(l, h)), l && l.inView)
                                    if ("horizontal" === e.direction) {
                                        var c = l.right - l.left;
                                        l.progress = (e.instance.scroll.x - (l.left - e.windowWidth)) / (c + e.windowWidth), (s < l.left || n > l.right) && e.setOutOfView(l, h)
                                    } else {
                                        var u = l.bottom - l.top;
                                        l.progress = (e.instance.scroll.y - (l.top - e.windowHeight)) / (u + e.windowHeight), (r < l.top || i > l.bottom) && e.setOutOfView(l, h)
                                    }
                            })), this.hasScrollTicking = !1
                        }
                    }, {
                        key: "setInView",
                        value: function(t, e) {
                            this.els[e].inView = !0, t.el.classList.add(t.class), this.currentElements[e] = t, t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1))
                        }
                    }, {
                        key: "setOutOfView",
                        value: function(t, e) {
                            var i = this;
                            this.els[e].inView = !1, Object.keys(this.currentElements).forEach((function(t) {
                                t === e && delete i.currentElements[t]
                            })), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class)
                        }
                    }, {
                        key: "dispatchCall",
                        value: function(t, e) {
                            this.callWay = e, this.callValue = t.call.split(",").map((function(t) {
                                return t.trim()
                            })), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
                            var i = new Event(this.namespace + "call");
                            this.el.dispatchEvent(i)
                        }
                    }, {
                        key: "dispatchScroll",
                        value: function() {
                            var t = new Event(this.namespace + "scroll");
                            this.el.dispatchEvent(t)
                        }
                    }, {
                        key: "setEvents",
                        value: function(t, e) {
                            this.listeners[t] || (this.listeners[t] = []);
                            var i = this.listeners[t];
                            i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0))
                        }
                    }, {
                        key: "unsetEvents",
                        value: function(t, e) {
                            if (this.listeners[t]) {
                                var i = this.listeners[t],
                                    r = i.indexOf(e);
                                r < 0 || (i.splice(r, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                            }
                        }
                    }, {
                        key: "checkEvent",
                        value: function(t) {
                            var e = this,
                                i = t.type.replace(this.namespace, ""),
                                r = this.listeners[i];
                            r && 0 !== r.length && r.forEach((function(t) {
                                switch (i) {
                                    case "scroll":
                                        return t(e.instance);
                                    case "call":
                                        return t(e.callValue, e.callWay, e.callObj);
                                    default:
                                        return t()
                                }
                            }))
                        }
                    }, {
                        key: "startScroll",
                        value: function() {}
                    }, {
                        key: "stopScroll",
                        value: function() {}
                    }, {
                        key: "setScroll",
                        value: function(t, e) {
                            this.instance.scroll = {
                                x: 0,
                                y: 0
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var t = this;
                            window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach((function(e) {
                                t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
                            })), this.listeners = {}, this.scrollToEls.forEach((function(e) {
                                e.removeEventListener("click", t.setScrollTo, !1)
                            })), this.html.classList.remove(this.initClass)
                        }
                    }]), t
                }(),
                _ = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};

            function E(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports), e.exports
            }
            var x = E((function(t, e) {
                    t.exports = {
                        polyfill: function() {
                            var t = window,
                                e = document;
                            if (!("scrollBehavior" in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                                var i, r = t.HTMLElement || t.Element,
                                    n = {
                                        scroll: t.scroll || t.scrollTo,
                                        scrollBy: t.scrollBy,
                                        elementScroll: r.prototype.scroll || o,
                                        scrollIntoView: r.prototype.scrollIntoView
                                    },
                                    s = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                                    a = (i = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i) ? 1 : 0);
                                t.scroll = t.scrollTo = function() {
                                    void 0 !== arguments[0] && (!0 !== h(arguments[0]) ? d.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : n.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                                }, t.scrollBy = function() {
                                    void 0 !== arguments[0] && (h(arguments[0]) ? n.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : d.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                                }, r.prototype.scroll = r.prototype.scrollTo = function() {
                                    if (void 0 !== arguments[0])
                                        if (!0 !== h(arguments[0])) {
                                            var t = arguments[0].left,
                                                e = arguments[0].top;
                                            d.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                                        } else {
                                            if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                            n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                        }
                                }, r.prototype.scrollBy = function() {
                                    void 0 !== arguments[0] && (!0 !== h(arguments[0]) ? this.scroll({
                                        left: ~~arguments[0].left + this.scrollLeft,
                                        top: ~~arguments[0].top + this.scrollTop,
                                        behavior: arguments[0].behavior
                                    }) : n.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                                }, r.prototype.scrollIntoView = function() {
                                    if (!0 !== h(arguments[0])) {
                                        var i = p(this),
                                            r = i.getBoundingClientRect(),
                                            s = this.getBoundingClientRect();
                                        i !== e.body ? (d.call(this, i, i.scrollLeft + s.left - r.left, i.scrollTop + s.top - r.top), "fixed" !== t.getComputedStyle(i).position && t.scrollBy({
                                            left: r.left,
                                            top: r.top,
                                            behavior: "smooth"
                                        })) : t.scrollBy({
                                            left: s.left,
                                            top: s.top,
                                            behavior: "smooth"
                                        })
                                    } else n.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                                }
                            }

                            function o(t, e) {
                                this.scrollLeft = t, this.scrollTop = e
                            }

                            function h(t) {
                                if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                                if ("object" == typeof t && "smooth" === t.behavior) return !1;
                                throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                            }

                            function l(t, e) {
                                return "Y" === e ? t.clientHeight + a < t.scrollHeight : "X" === e ? t.clientWidth + a < t.scrollWidth : void 0
                            }

                            function c(e, i) {
                                var r = t.getComputedStyle(e, null)["overflow" + i];
                                return "auto" === r || "scroll" === r
                            }

                            function u(t) {
                                var e = l(t, "Y") && c(t, "Y"),
                                    i = l(t, "X") && c(t, "X");
                                return e || i
                            }

                            function p(t) {
                                for (; t !== e.body && !1 === u(t);) t = t.parentNode || t.host;
                                return t
                            }

                            function f(e) {
                                var i, r, n, a, o = (s() - e.startTime) / 468;
                                a = o = o > 1 ? 1 : o, i = .5 * (1 - Math.cos(Math.PI * a)), r = e.startX + (e.x - e.startX) * i, n = e.startY + (e.y - e.startY) * i, e.method.call(e.scrollable, r, n), r === e.x && n === e.y || t.requestAnimationFrame(f.bind(t, e))
                            }

                            function d(i, r, a) {
                                var h, l, c, u, p = s();
                                i === e.body ? (h = t, l = t.scrollX || t.pageXOffset, c = t.scrollY || t.pageYOffset, u = n.scroll) : (h = i, l = i.scrollLeft, c = i.scrollTop, u = o), f({
                                    scrollable: h,
                                    method: u,
                                    startTime: p,
                                    startX: l,
                                    startY: c,
                                    x: r,
                                    y: a
                                })
                            }
                        }
                    }
                })),
                w = (x.polyfill, function(t) {
                    h(r, t);
                    var e = f(r);

                    function r() {
                        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return i(this, r), (t = e.call(this, n)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)), window.addEventListener("scroll", t.checkScroll, !1), void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = x, window.smoothscrollPolyfill.polyfill()), t
                    }
                    return n(r, [{
                        key: "init",
                        value: function() {
                            this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), d(l(r.prototype), "init", this).call(this)
                        }
                    }, {
                        key: "checkScroll",
                        value: function() {
                            var t = this;
                            d(l(r.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.instance.scroll.y = window.pageYOffset, Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function() {
                                t.detectElements()
                            })), this.hasScrollTicking = !0))
                        }
                    }, {
                        key: "addDirection",
                        value: function() {
                            window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
                        }
                    }, {
                        key: "addSpeed",
                        value: function() {
                            window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            Object.entries(this.els).length && (this.windowHeight = window.innerHeight, this.updateElements())
                        }
                    }, {
                        key: "addElements",
                        value: function() {
                            var t = this;
                            this.els = {}, this.el.querySelectorAll("[data-" + this.name + "]").forEach((function(e, i) {
                                e.getBoundingClientRect();
                                var r, n, s, a = e.dataset[t.name + "Class"] || t.class,
                                    o = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : i,
                                    h = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                                    l = e.dataset[t.name + "Repeat"],
                                    c = e.dataset[t.name + "Call"],
                                    u = e.dataset[t.name + "Target"],
                                    p = (s = void 0 !== u ? document.querySelector("".concat(u)) : e).getBoundingClientRect();
                                r = p.top + t.instance.scroll.y, n = p.left + t.instance.scroll.x;
                                var f = r + s.offsetHeight,
                                    d = n + s.offsetWidth;
                                "#header" === u && console.log(r, f), l = "false" != l && (null != l || t.repeat);
                                var m = t.getRelativeOffset(h),
                                    g = {
                                        el: e,
                                        targetEl: s,
                                        id: o,
                                        class: a,
                                        top: r += m[0],
                                        bottom: f -= m[1],
                                        left: n,
                                        right: d,
                                        offset: h,
                                        progress: 0,
                                        repeat: l,
                                        inView: !1,
                                        call: c
                                    };
                                t.els[o] = g, e.classList.contains(a) && t.setInView(t.els[o], o)
                            }))
                        }
                    }, {
                        key: "updateElements",
                        value: function() {
                            var t = this;
                            Object.entries(this.els).forEach((function(e) {
                                var i = m(e, 2),
                                    r = i[0],
                                    n = i[1],
                                    s = n.targetEl.getBoundingClientRect().top + t.instance.scroll.y,
                                    a = s + n.targetEl.offsetHeight,
                                    o = t.getRelativeOffset(n.offset);
                                t.els[r].top = s + o[0], t.els[r].bottom = a - o[1]
                            })), this.hasScrollTicking = !1
                        }
                    }, {
                        key: "getRelativeOffset",
                        value: function(t) {
                            var e = [0, 0];
                            if (t)
                                for (var i = 0; i < t.length; i++) "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
                            return e
                        }
                    }, {
                        key: "scrollTo",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = parseInt(e.offset) || 0,
                                r = !!e.callback && e.callback;
                            if ("string" == typeof t) {
                                if ("top" === t) t = this.html;
                                else if ("bottom" === t) t = this.html.offsetHeight - window.innerHeight;
                                else if (!(t = document.querySelector(t))) return
                            } else if ("number" == typeof t) t = parseInt(t);
                            else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                            if (i = "number" != typeof t ? t.getBoundingClientRect().top + i + this.instance.scroll.y : t + i, r) {
                                i = i.toFixed();
                                var n = function t() {
                                    window.pageYOffset.toFixed() === i && (window.removeEventListener("scroll", t), r())
                                };
                                window.addEventListener("scroll", n)
                            }
                            window.scrollTo({
                                top: i,
                                behavior: "smooth"
                            })
                        }
                    }, {
                        key: "update",
                        value: function() {
                            this.addElements(), this.detectElements()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            d(l(r.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1)
                        }
                    }]), r
                }(D)),
                C = Object.getOwnPropertySymbols,
                S = Object.prototype.hasOwnProperty,
                P = Object.prototype.propertyIsEnumerable;

            function T(t) {
                if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }
            var A = function() {
                try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                    for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                            return e[t]
                        })).join("")) return !1;
                    var r = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                        r[t] = t
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (t) {
                    return !1
                }
            }() ? Object.assign : function(t, e) {
                for (var i, r, n = T(t), s = 1; s < arguments.length; s++) {
                    for (var a in i = Object(arguments[s])) S.call(i, a) && (n[a] = i[a]);
                    if (C) {
                        r = C(i);
                        for (var o = 0; o < r.length; o++) P.call(i, r[o]) && (n[r[o]] = i[r[o]])
                    }
                }
                return n
            };

            function F() {}
            F.prototype = {
                on: function(t, e, i) {
                    var r = this.e || (this.e = {});
                    return (r[t] || (r[t] = [])).push({
                        fn: e,
                        ctx: i
                    }), this
                },
                once: function(t, e, i) {
                    var r = this;

                    function n() {
                        r.off(t, n), e.apply(i, arguments)
                    }
                    return n._ = e, this.on(t, n, i)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, n = i.length; r < n; r++) i[r].fn.apply(i[r].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var i = this.e || (this.e = {}),
                        r = i[t],
                        n = [];
                    if (r && e)
                        for (var s = 0, a = r.length; s < a; s++) r[s].fn !== e && r[s].fn._ !== e && n.push(r[s]);
                    return n.length ? i[t] = n : delete i[t], this
                }
            };
            var k = F,
                M = E((function(t, e) {
                    (function() {
                        (null !== e ? e : this).Lethargy = function() {
                            function t(t, e, i, r) {
                                this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != r ? r : 150, this.lastUpDeltas = function() {
                                    var t, e, i;
                                    for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                    return i
                                }.call(this), this.lastDownDeltas = function() {
                                    var t, e, i;
                                    for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                    return i
                                }.call(this), this.deltasTimestamp = function() {
                                    var t, e, i;
                                    for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null);
                                    return i
                                }.call(this)
                            }
                            return t.prototype.check = function(t) {
                                var e;
                                return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
                            }, t.prototype.isInertia = function(t) {
                                var e, i, r, n, s, a, o;
                                return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (r = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), o = r.reduce((function(t, e) {
                                    return t + e
                                })), s = i.reduce((function(t, e) {
                                    return t + e
                                })), a = o / r.length, n = s / i.length, Math.abs(a) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t)
                            }, t.prototype.showLastUpDeltas = function() {
                                return this.lastUpDeltas
                            }, t.prototype.showLastDownDeltas = function() {
                                return this.lastDownDeltas
                            }, t
                        }()
                    }).call(_)
                })),
                I = {
                    hasWheelEvent: "onwheel" in document,
                    hasMouseWheelEvent: "onmousewheel" in document,
                    hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
                    hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                    hasPointer: !!window.navigator.msPointerEnabled,
                    hasKeyDown: "onkeydown" in document,
                    isFirefox: navigator.userAgent.indexOf("Firefox") > -1
                },
                B = Object.prototype.toString,
                R = Object.prototype.hasOwnProperty;

            function L(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            var O = M.Lethargy,
                V = "virtualscroll",
                z = W,
                N = 37,
                G = 38,
                j = 39,
                H = 40,
                q = 32;

            function W(t) {
                ! function(t) {
                    if (!t) return console.warn("bindAll requires at least one argument.");
                    var e = Array.prototype.slice.call(arguments, 1);
                    if (0 === e.length)
                        for (var i in t) R.call(t, i) && "function" == typeof t[i] && "[object Function]" == B.call(t[i]) && e.push(i);
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        t[n] = L(t[n], t)
                    }
                }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = A({
                    mouseMultiplier: 1,
                    touchMultiplier: 2,
                    firefoxMultiplier: 15,
                    keyStep: 120,
                    preventTouch: !1,
                    unpreventTouchClass: "vs-touchmove-allowed",
                    limitInertia: !1,
                    useKeyboard: !0,
                    useTouch: !0
                }, t), this.options.limitInertia && (this._lethargy = new O), this._emitter = new k, this._event = {
                    y: 0,
                    x: 0,
                    deltaX: 0,
                    deltaY: 0
                }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
                    passive: this.options.passive
                })
            }

            function X(t, e, i) {
                return (1 - i) * t + i * e
            }

            function Y(t) {
                var e = {};
                if (window.getComputedStyle) {
                    var i = getComputedStyle(t),
                        r = i.transform || i.webkitTransform || i.mozTransform,
                        n = r.match(/^matrix3d\((.+)\)$/);
                    return n ? (e.x = n ? parseFloat(n[1].split(", ")[12]) : 0, e.y = n ? parseFloat(n[1].split(", ")[13]) : 0) : (n = r.match(/^matrix\((.+)\)$/), e.x = n ? parseFloat(n[1].split(", ")[4]) : 0, e.y = n ? parseFloat(n[1].split(", ")[5]) : 0), e
                }
            }

            function U(t) {
                for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
                return e
            }
            W.prototype._notify = function(t) {
                var e = this._event;
                e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(V, {
                    x: e.x,
                    y: e.y,
                    deltaX: e.deltaX,
                    deltaY: e.deltaY,
                    originalEvent: t
                })
            }, W.prototype._onWheel = function(t) {
                var e = this.options;
                if (!this._lethargy || !1 !== this._lethargy.check(t)) {
                    var i = this._event;
                    i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, I.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier, i.deltaY *= e.firefoxMultiplier), i.deltaX *= e.mouseMultiplier, i.deltaY *= e.mouseMultiplier, this._notify(t)
                }
            }, W.prototype._onMouseWheel = function(t) {
                if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
                    var e = this._event;
                    e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
                }
            }, W.prototype._onTouchStart = function(t) {
                var e = t.targetTouches ? t.targetTouches[0] : t;
                this.touchStartX = e.pageX, this.touchStartY = e.pageY
            }, W.prototype._onTouchMove = function(t) {
                var e = this.options;
                e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
                var i = this._event,
                    r = t.targetTouches ? t.targetTouches[0] : t;
                i.deltaX = (r.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (r.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = r.pageX, this.touchStartY = r.pageY, this._notify(t)
            }, W.prototype._onKeyDown = function(t) {
                var e = this._event;
                e.deltaX = e.deltaY = 0;
                var i = window.innerHeight - 40;
                switch (t.keyCode) {
                    case N:
                    case G:
                        e.deltaY = this.options.keyStep;
                        break;
                    case j:
                    case H:
                        e.deltaY = -this.options.keyStep;
                        break;
                    case t.shiftKey:
                        e.deltaY = i;
                        break;
                    case q:
                        e.deltaY = -i;
                        break;
                    default:
                        return
                }
                this._notify(t)
            }, W.prototype._bind = function() {
                I.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), I.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), I.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), I.hasPointer && I.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), I.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
            }, W.prototype._unbind = function() {
                I.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), I.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), I.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), I.hasPointer && I.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), I.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
            }, W.prototype.on = function(t, e) {
                this._emitter.on(V, t, e);
                var i = this._emitter.e;
                i && i[V] && 1 === i[V].length && this._bind()
            }, W.prototype.off = function(t, e) {
                this._emitter.off(V, t, e);
                var i = this._emitter.e;
                (!i[V] || i[V].length <= 0) && this._unbind()
            }, W.prototype.reset = function() {
                var t = this._event;
                t.x = 0, t.y = 0
            }, W.prototype.destroy = function() {
                this._emitter.off(), this._unbind()
            };
            var K = "function" == typeof Float32Array;

            function $(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function Z(t, e) {
                return 3 * e - 6 * t
            }

            function Q(t) {
                return 3 * t
            }

            function J(t, e, i) {
                return (($(e, i) * t + Z(e, i)) * t + Q(e)) * t
            }

            function tt(t, e, i) {
                return 3 * $(e, i) * t * t + 2 * Z(e, i) * t + Q(e)
            }

            function et(t) {
                return t
            }
            var it = function(t, e, i, r) {
                    if (!(0 <= t && t <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                    if (t === e && i === r) return et;
                    for (var n = K ? new Float32Array(11) : new Array(11), s = 0; s < 11; ++s) n[s] = J(.1 * s, t, i);

                    function a(e) {
                        for (var r = 0, s = 1; 10 !== s && n[s] <= e; ++s) r += .1;
                        --s;
                        var a = r + .1 * ((e - n[s]) / (n[s + 1] - n[s])),
                            o = tt(a, t, i);
                        return o >= .001 ? function(t, e, i, r) {
                            for (var n = 0; n < 4; ++n) {
                                var s = tt(e, i, r);
                                if (0 === s) return e;
                                e -= (J(e, i, r) - t) / s
                            }
                            return e
                        }(e, a, t, i) : 0 === o ? a : function(t, e, i, r, n) {
                            var s, a, o = 0;
                            do {
                                (s = J(a = e + (i - e) / 2, r, n) - t) > 0 ? i = a : e = a
                            } while (Math.abs(s) > 1e-7 && ++o < 10);
                            return a
                        }(e, r, r + .1, t, i)
                    }
                    return function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : J(a(t), e, r)
                    }
                },
                rt = 38,
                nt = 40,
                st = 32,
                at = 9,
                ot = 33,
                ht = 34,
                lt = 36,
                ct = 35,
                ut = function(t) {
                    h(r, t);
                    var e = f(r);

                    function r() {
                        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return i(this, r), history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), (t = e.call(this, n)).inertia && (t.lerp = .1 * t.inertia), t.isScrolling = !1, t.isDraggingScrollbar = !1, t.isTicking = !1, t.hasScrollTicking = !1, t.parallaxElements = {}, t.stop = !1, t.scrollbarContainer = n.scrollbarContainer, t.checkKey = t.checkKey.bind(u(t)), window.addEventListener("keydown", t.checkKey, !1), t
                    }
                    return n(r, [{
                        key: "init",
                        value: function() {
                            var t = this;
                            this.html.classList.add(this.smoothClass), this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction), this.instance = o({
                                delta: {
                                    x: 0,
                                    y: 0
                                }
                            }, this.instance), this.vs = new z({
                                el: this.scrollFromAnywhere ? document : this.el,
                                mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                                firefoxMultiplier: this.firefoxMultiplier,
                                touchMultiplier: this.touchMultiplier,
                                useKeyboard: !1,
                                passive: !0
                            }), this.vs.on((function(e) {
                                t.stop || t.isDraggingScrollbar || requestAnimationFrame((function() {
                                    t.updateDelta(e), t.isScrolling || t.startScrolling()
                                }))
                            })), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.checkScroll(!0), this.transformElements(!0, !0), d(l(r.prototype), "init", this).call(this)
                        }
                    }, {
                        key: "setScrollLimit",
                        value: function() {
                            if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight, "horizontal" === this.direction) {
                                for (var t = 0, e = this.el.children, i = 0; i < e.length; i++) t += e[i].offsetWidth;
                                this.instance.limit.x = t - this.windowWidth
                            }
                        }
                    }, {
                        key: "startScrolling",
                        value: function() {
                            this.startScrollTs = Date.now(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                        }
                    }, {
                        key: "stopScrolling",
                        value: function() {
                            cancelAnimationFrame(this.checkScrollRaf), this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass)
                        }
                    }, {
                        key: "checkKey",
                        value: function(t) {
                            var e = this;
                            if (this.stop) t.keyCode == at && requestAnimationFrame((function() {
                                e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0
                            }));
                            else {
                                switch (t.keyCode) {
                                    case at:
                                        requestAnimationFrame((function() {
                                            e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0, e.scrollTo(document.activeElement, {
                                                offset: -window.innerHeight / 2
                                            })
                                        }));
                                        break;
                                    case rt:
                                        this.instance.delta[this.directionAxis] -= 240;
                                        break;
                                    case nt:
                                        this.instance.delta[this.directionAxis] += 240;
                                        break;
                                    case ot:
                                        this.instance.delta[this.directionAxis] -= window.innerHeight;
                                        break;
                                    case ht:
                                        this.instance.delta[this.directionAxis] += window.innerHeight;
                                        break;
                                    case lt:
                                        this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                                        break;
                                    case ct:
                                        this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                                        break;
                                    case st:
                                        document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                                        break;
                                    default:
                                        return
                                }
                                this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]), this.stopScrolling(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                            }
                        }
                    }, {
                        key: "checkScroll",
                        value: function() {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (e || this.isScrolling || this.isDraggingScrollbar) {
                                this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame((function() {
                                    return t.checkScroll()
                                })), this.hasScrollTicking = !0), this.updateScroll();
                                var i = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]),
                                    n = Date.now() - this.startScrollTs;
                                if (!this.animatingScroll && n > 100 && (i < .5 && 0 != this.instance.delta[this.directionAxis] || i < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(), Object.entries(this.sections).forEach((function(e) {
                                        var i = m(e, 2),
                                            r = (i[0], i[1]);
                                        r.persistent || t.instance.scroll[t.directionAxis] > r.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < r.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(r.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(r.el, 0, -t.instance.scroll[t.directionAxis]), r.inView || (r.inView = !0, r.el.style.opacity = 1, r.el.style.pointerEvents = "all", r.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : (r.inView && (r.inView = !1, r.el.style.opacity = 0, r.el.style.pointerEvents = "none", r.el.removeAttribute("data-".concat(t.name, "-section-inview"))), t.transform(r.el, 0, 0))
                                    })), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.detectElements(), this.transformElements(), this.hasScrollbar) {
                                    var s = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                                    "horizontal" === this.direction ? this.transform(this.scrollbarThumb, s, 0) : this.transform(this.scrollbarThumb, 0, s)
                                }
                                d(l(r.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1
                            }
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.checkContext(), this.windowMiddle = {
                                x: this.windowWidth / 2,
                                y: this.windowHeight / 2
                            }, this.update()
                        }
                    }, {
                        key: "updateDelta",
                        value: function(t) {
                            var e, i = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                            e = "both" === i ? t.deltaX + t.deltaY : "vertical" === i ? t.deltaY : "horizontal" === i ? t.deltaX : t.deltaY, this.instance.delta[this.directionAxis] -= e * this.multiplier, this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
                        }
                    }, {
                        key: "updateScroll",
                        value: function(t) {
                            this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = X(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
                        }
                    }, {
                        key: "addDirection",
                        value: function() {
                            this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"), this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
                        }
                    }, {
                        key: "addSpeed",
                        value: function() {
                            this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                        }
                    }, {
                        key: "initScrollBar",
                        value: function() {
                            if (this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.hasScrollbar = !1, "horizontal" == this.direction) {
                                if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                            } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                            this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                                x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                                y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                            }
                        }
                    }, {
                        key: "reinitScrollBar",
                        value: function() {
                            if (this.hasScrollbar = !1, "horizontal" == this.direction) {
                                if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                            } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                            this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                                x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                                y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                            }
                        }
                    }, {
                        key: "destroyScrollBar",
                        value: function() {
                            this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove()
                        }
                    }, {
                        key: "getScrollBar",
                        value: function(t) {
                            this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass)
                        }
                    }, {
                        key: "releaseScrollBar",
                        value: function(t) {
                            this.isDraggingScrollbar = !1, this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass)
                        }
                    }, {
                        key: "moveScrollBar",
                        value: function(t) {
                            var e = this;
                            this.isDraggingScrollbar && requestAnimationFrame((function() {
                                var i = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100,
                                    r = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
                                r > 0 && r < e.instance.limit.y && (e.instance.delta.y = r), i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i)
                            }))
                        }
                    }, {
                        key: "addElements",
                        value: function() {
                            var t = this;
                            this.els = {}, this.parallaxElements = {}, this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach((function(e, i) {
                                var r, n, s, a = U(e),
                                    o = Object.entries(t.sections).map((function(t) {
                                        var e = m(t, 2);
                                        e[0];
                                        return e[1]
                                    })).find((function(t) {
                                        return a.includes(t.el)
                                    })),
                                    h = e.dataset[t.name + "Class"] || t.class,
                                    l = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + i,
                                    c = e.dataset[t.name + "Repeat"],
                                    u = e.dataset[t.name + "Call"],
                                    p = e.dataset[t.name + "Position"],
                                    f = e.dataset[t.name + "Delay"],
                                    d = e.dataset[t.name + "Direction"],
                                    g = "string" == typeof e.dataset[t.name + "Sticky"],
                                    y = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10,
                                    v = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                                    b = e.dataset[t.name + "Target"],
                                    D = (s = void 0 !== b ? document.querySelector("".concat(b)) : e).getBoundingClientRect();
                                null === o || o.inView ? (r = D.top + t.instance.scroll.y - Y(s).y, n = D.left + t.instance.scroll.x - Y(s).x) : (r = D.top - Y(o.el).y - Y(s).y, n = D.left - Y(o.el).x - Y(s).x);
                                var _ = r + s.offsetHeight,
                                    E = n + s.offsetWidth,
                                    x = {
                                        x: (E - n) / 2 + n,
                                        y: (_ - r) / 2 + r
                                    };
                                if (g) {
                                    var w = e.getBoundingClientRect(),
                                        C = w.top,
                                        S = w.left,
                                        P = {
                                            x: S - n,
                                            y: C - r
                                        };
                                    r += window.innerHeight, n += window.innerWidth, _ = C + s.offsetHeight - e.offsetHeight - P[t.directionAxis], x = {
                                        x: ((E = S + s.offsetWidth - e.offsetWidth - P[t.directionAxis]) - n) / 2 + n,
                                        y: (_ - r) / 2 + r
                                    }
                                }
                                c = "false" != c && (null != c || t.repeat);
                                var T = [0, 0];
                                if (v)
                                    if ("horizontal" === t.direction) {
                                        for (var A = 0; A < v.length; A++) "string" == typeof v[A] ? v[A].includes("%") ? T[A] = parseInt(v[A].replace("%", "") * t.windowWidth / 100) : T[A] = parseInt(v[A]) : T[A] = v[A];
                                        n += T[0], E -= T[1]
                                    } else {
                                        for (A = 0; A < v.length; A++) "string" == typeof v[A] ? v[A].includes("%") ? T[A] = parseInt(v[A].replace("%", "") * t.windowHeight / 100) : T[A] = parseInt(v[A]) : T[A] = v[A];
                                        r += T[0], _ -= T[1]
                                    } var F = {
                                    el: e,
                                    id: l,
                                    class: h,
                                    section: o,
                                    top: r,
                                    middle: x,
                                    bottom: _,
                                    left: n,
                                    right: E,
                                    offset: v,
                                    progress: 0,
                                    repeat: c,
                                    inView: !1,
                                    call: u,
                                    speed: y,
                                    delay: f,
                                    position: p,
                                    target: s,
                                    direction: d,
                                    sticky: g
                                };
                                t.els[l] = F, e.classList.contains(h) && t.setInView(t.els[l], l), (!1 !== y || g) && (t.parallaxElements[l] = F)
                            }))
                        }
                    }, {
                        key: "addSections",
                        value: function() {
                            var t = this;
                            this.sections = {};
                            var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                            0 === e.length && (e = [this.el]), e.forEach((function(e, i) {
                                var r = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + i,
                                    n = e.getBoundingClientRect(),
                                    s = {
                                        x: n.left - 1.5 * window.innerWidth - Y(e).x,
                                        y: n.top - 1.5 * window.innerHeight - Y(e).y
                                    },
                                    a = {
                                        x: s.x + n.width + 2 * window.innerWidth,
                                        y: s.y + n.height + 2 * window.innerHeight
                                    },
                                    o = "string" == typeof e.dataset[t.name + "Persistent"];
                                e.setAttribute("data-scroll-section-id", r);
                                var h = {
                                    el: e,
                                    offset: s,
                                    limit: a,
                                    inView: !1,
                                    persistent: o,
                                    id: r
                                };
                                t.sections[r] = h
                            }))
                        }
                    }, {
                        key: "transform",
                        value: function(t, e, i, r) {
                            var n;
                            if (r) {
                                var s = Y(t),
                                    a = X(s.x, e, r),
                                    o = X(s.y, i, r);
                                n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(a, ",").concat(o, ",0,1)")
                            } else n = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
                            t.style.webkitTransform = n, t.style.msTransform = n, t.style.transform = n
                        }
                    }, {
                        key: "transformElements",
                        value: function(t) {
                            var e = this,
                                i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = this.instance.scroll.x + this.windowWidth,
                                n = this.instance.scroll.y + this.windowHeight,
                                s = {
                                    x: this.instance.scroll.x + this.windowMiddle.x,
                                    y: this.instance.scroll.y + this.windowMiddle.y
                                };
                            Object.entries(this.parallaxElements).forEach((function(a) {
                                var o = m(a, 2),
                                    h = (o[0], o[1]),
                                    l = !1;
                                if (t && (l = 0), h.inView || i) switch (h.position) {
                                    case "top":
                                        l = e.instance.scroll[e.directionAxis] * -h.speed;
                                        break;
                                    case "elementTop":
                                        l = (n - h.top) * -h.speed;
                                        break;
                                    case "bottom":
                                        l = (e.instance.limit[e.directionAxis] - n + e.windowHeight) * h.speed;
                                        break;
                                    case "left":
                                        l = e.instance.scroll[e.directionAxis] * -h.speed;
                                        break;
                                    case "elementLeft":
                                        l = (r - h.left) * -h.speed;
                                        break;
                                    case "right":
                                        l = (e.instance.limit[e.directionAxis] - r + e.windowHeight) * h.speed;
                                        break;
                                    default:
                                        l = (s[e.directionAxis] - h.middle[e.directionAxis]) * -h.speed
                                }
                                h.sticky && (l = h.inView ? "horizontal" === e.direction ? e.instance.scroll.x - h.left + window.innerWidth : e.instance.scroll.y - h.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < h.left - window.innerWidth && e.instance.scroll.x < h.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > h.right && e.instance.scroll.x > h.right + 100 && h.right - h.left + window.innerWidth : e.instance.scroll.y < h.top - window.innerHeight && e.instance.scroll.y < h.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > h.bottom && e.instance.scroll.y > h.bottom + 100 && h.bottom - h.top + window.innerHeight), !1 !== l && ("horizontal" === h.direction || "horizontal" === e.direction && "vertical" !== h.direction ? e.transform(h.el, l, 0, !t && h.delay) : e.transform(h.el, 0, l, !t && h.delay))
                            }))
                        }
                    }, {
                        key: "scrollTo",
                        value: function(t) {
                            var e = this,
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = parseInt(i.offset) || 0,
                                n = i.duration || 1e3,
                                s = i.easing || [.25, 0, .35, 1],
                                a = !!i.disableLerp,
                                o = !!i.callback && i.callback;
                            if (s = it.apply(void 0, g(s)), "string" == typeof t) {
                                if ("top" === t) t = 0;
                                else if ("bottom" === t) t = this.instance.limit.y;
                                else if ("left" === t) t = 0;
                                else if ("right" === t) t = this.instance.limit.x;
                                else if (!(t = document.querySelector(t))) return
                            } else if ("number" == typeof t) t = parseInt(t);
                            else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                            if ("number" != typeof t) {
                                var h = U(t).includes(this.el);
                                if (!h) return;
                                var l = t.getBoundingClientRect(),
                                    c = l.top,
                                    u = l.left,
                                    p = U(t),
                                    f = p.find((function(t) {
                                        return Object.entries(e.sections).map((function(t) {
                                            var e = m(t, 2);
                                            e[0];
                                            return e[1]
                                        })).find((function(e) {
                                            return e.el == t
                                        }))
                                    })),
                                    d = 0;
                                d = f ? Y(f)[this.directionAxis] : -this.instance.scroll[this.directionAxis], r = "horizontal" === this.direction ? u + r - d : c + r - d
                            } else r = t + r;
                            var y = parseFloat(this.instance.delta[this.directionAxis]),
                                v = Math.max(0, Math.min(r, this.instance.limit[this.directionAxis])),
                                b = v - y,
                                D = function(t) {
                                    a ? "horizontal" === e.direction ? e.setScroll(y + b * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, y + b * t) : e.instance.delta[e.directionAxis] = y + b * t
                                };
                            this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();
                            var _ = Date.now(),
                                E = function t() {
                                    var i = (Date.now() - _) / n;
                                    i > 1 ? (D(1), e.animatingScroll = !1, 0 == n && e.update(), o && o()) : (e.scrollToRaf = requestAnimationFrame(t), D(s(i)))
                                };
                            E()
                        }
                    }, {
                        key: "update",
                        value: function() {
                            this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0)
                        }
                    }, {
                        key: "startScroll",
                        value: function() {
                            this.stop = !1
                        }
                    }, {
                        key: "stopScroll",
                        value: function() {
                            this.stop = !0
                        }
                    }, {
                        key: "setScroll",
                        value: function(t, e) {
                            this.instance = o(o({}, this.instance), {}, {
                                scroll: {
                                    x: t,
                                    y: e
                                },
                                delta: {
                                    x: t,
                                    y: e
                                },
                                speed: 0
                            })
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            d(l(r.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1)
                        }
                    }]), r
                }(D),
                pt = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i(this, t), this.options = e, Object.assign(this, b, e), this.smartphone = b.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = b.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"), this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"), this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"), this.init()
                    }
                    return n(t, [{
                        key: "init",
                        value: function() {
                            if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint, this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint, this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new ut(this.options) : this.scroll = new w(this.options), this.scroll.init(), window.location.hash) {
                                var t = window.location.hash.slice(1, window.location.hash.length),
                                    e = document.getElementById(t);
                                e && this.scroll.scrollTo(e)
                            }
                        }
                    }, {
                        key: "update",
                        value: function() {
                            this.scroll.update()
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this.scroll.startScroll()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.scroll.stopScroll()
                        }
                    }, {
                        key: "scrollTo",
                        value: function(t, e) {
                            this.scroll.scrollTo(t, e)
                        }
                    }, {
                        key: "setScroll",
                        value: function(t, e) {
                            this.scroll.setScroll(t, e)
                        }
                    }, {
                        key: "on",
                        value: function(t, e) {
                            this.scroll.setEvents(t, e)
                        }
                    }, {
                        key: "off",
                        value: function(t, e) {
                            this.scroll.unsetEvents(t, e)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.scroll.destroy()
                        }
                    }]), t
                }();
            e.a = pt
        }).call(this, i("yLpj"))
    },
    0: function(t, e, i) {
        i("zk27"), t.exports = i("oaNO")
    },
    CUlp: function(t, e, i) {
        var r, n;
        "undefined" != typeof window && window, void 0 === (n = "function" == typeof(r = function() {
            "use strict";

            function t() {}
            var e = t.prototype;
            return e.on = function(t, e) {
                if (t && e) {
                    var i = this._events = this._events || {},
                        r = i[t] = i[t] || [];
                    return -1 == r.indexOf(e) && r.push(e), this
                }
            }, e.once = function(t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = this._onceEvents = this._onceEvents || {};
                    return (i[t] = i[t] || {})[e] = !0, this
                }
            }, e.off = function(t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var r = i.indexOf(e);
                    return -1 != r && i.splice(r, 1), this
                }
            }, e.emitEvent = function(t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    i = i.slice(0), e = e || [];
                    for (var r = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                        var s = i[n];
                        r && r[s] && (this.off(t, s), delete r[s]), s.apply(this, e)
                    }
                    return this
                }
            }, e.allOff = function() {
                delete this._events, delete this._onceEvents
            }, t
        }) ? r.call(e, i, e, t) : r) || (t.exports = n)
    },
    lPHp: function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        "undefined" != typeof navigator && function(t, e) {
            void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return e(t)
            }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
        }(window || {}, (function(window) {
            "use strict";
            var svgNS = "http://www.w3.org/2000/svg",
                locationHref = "",
                initialDefaultFrame = -999999,
                subframeEnabled = !0,
                expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                cachedColors = {},
                bmRnd, bmPow = Math.pow,
                bmSqrt = Math.sqrt,
                bmFloor = Math.floor,
                bmMax = Math.max,
                bmMin = Math.min,
                BMMath = {};

            function ProjectInterface() {
                return {}
            }! function() {
                var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                    i = e.length;
                for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]]
            }(), BMMath.random = Math.random, BMMath.abs = function(t) {
                if ("object" === typeof t && t.length) {
                    var e, i = createSizedArray(t.length),
                        r = t.length;
                    for (e = 0; e < r; e += 1) i[e] = Math.abs(t[e]);
                    return i
                }
                return Math.abs(t)
            };
            var defaultCurveSegments = 150,
                degToRads = Math.PI / 180,
                roundCorner = .5519;

            function roundValues(t) {
                bmRnd = t ? Math.round : function(t) {
                    return t
                }
            }

            function styleDiv(t) {
                t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
            }

            function BMEnterFrameEvent(t, e, i, r) {
                this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1
            }

            function BMCompleteEvent(t, e) {
                this.type = t, this.direction = e < 0 ? -1 : 1
            }

            function BMCompleteLoopEvent(t, e, i, r) {
                this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1
            }

            function BMSegmentStartEvent(t, e, i) {
                this.type = t, this.firstFrame = e, this.totalFrames = i
            }

            function BMDestroyEvent(t, e) {
                this.type = t, this.target = e
            }

            function BMRenderFrameErrorEvent(t, e) {
                this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
            }

            function BMConfigErrorEvent(t) {
                this.type = "configError", this.nativeError = t
            }

            function BMAnimationConfigErrorEvent(t, e) {
                this.type = t, this.nativeError = e
            }
            roundValues(!1);
            var createElementID = (_count = 0, function() {
                    return "__lottie_element_" + (_count += 1)
                }),
                _count;

            function HSVtoRGB(t, e, i) {
                var r, n, s, a, o, h, l, c;
                switch (h = i * (1 - e), l = i * (1 - (o = 6 * t - (a = Math.floor(6 * t))) * e), c = i * (1 - (1 - o) * e), a % 6) {
                    case 0:
                        r = i, n = c, s = h;
                        break;
                    case 1:
                        r = l, n = i, s = h;
                        break;
                    case 2:
                        r = h, n = i, s = c;
                        break;
                    case 3:
                        r = h, n = l, s = i;
                        break;
                    case 4:
                        r = c, n = h, s = i;
                        break;
                    case 5:
                        r = i, n = h, s = l
                }
                return [r, n, s]
            }

            function RGBtoHSV(t, e, i) {
                var r, n = Math.max(t, e, i),
                    s = Math.min(t, e, i),
                    a = n - s,
                    o = 0 === n ? 0 : a / n,
                    h = n / 255;
                switch (n) {
                    case s:
                        r = 0;
                        break;
                    case t:
                        r = e - i + a * (e < i ? 6 : 0), r /= 6 * a;
                        break;
                    case e:
                        r = i - t + 2 * a, r /= 6 * a;
                        break;
                    case i:
                        r = t - e + 4 * a, r /= 6 * a
                }
                return [r, o, h]
            }

            function addSaturationToRGB(t, e) {
                var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
            }

            function addBrightnessToRGB(t, e) {
                var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
            }

            function addHueToRGB(t, e) {
                var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
            }
            var rgbToHex = function() {
                var t, e, i = [];
                for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
                return function(t, e, r) {
                    return t < 0 && (t = 0), e < 0 && (e = 0), r < 0 && (r = 0), "#" + i[t] + i[e] + i[r]
                }
            }();

            function BaseEvent() {}
            BaseEvent.prototype = {
                triggerEvent: function(t, e) {
                    if (this._cbs[t])
                        for (var i = this._cbs[t].length, r = 0; r < i; r += 1) this._cbs[t][r](e)
                },
                addEventListener: function(t, e) {
                    return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                        function() {
                            this.removeEventListener(t, e)
                        }.bind(this)
                },
                removeEventListener: function(t, e) {
                    if (e) {
                        if (this._cbs[t]) {
                            for (var i = 0, r = this._cbs[t].length; i < r;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
                            this._cbs[t].length || (this._cbs[t] = null)
                        }
                    } else this._cbs[t] = null
                }
            };
            var createTypedArray = function() {
                function t(t, e) {
                    var i, r = 0,
                        n = [];
                    switch (t) {
                        case "int16":
                        case "uint8c":
                            i = 1;
                            break;
                        default:
                            i = 1.1
                    }
                    for (r = 0; r < e; r += 1) n.push(i);
                    return n
                }
                return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
                    return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
                } : t
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
                    -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                },
                iterateDynamicProperties: function() {
                    var t;
                    this._mdf = !1;
                    var e = this.dynamicProperties.length;
                    for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                },
                initDynamicPropertyContainer: function(t) {
                    this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                }
            };
            var getBlendMode = (blendModeEnums = {
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
                }, function(t) {
                    return blendModeEnums[t] || ""
                }),
                blendModeEnums, Matrix = function() {
                    var t = Math.cos,
                        e = Math.sin,
                        i = Math.tan,
                        r = Math.round;

                    function n() {
                        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                    }

                    function s(i) {
                        if (0 === i) return this;
                        var r = t(i),
                            n = e(i);
                        return this._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function a(i) {
                        if (0 === i) return this;
                        var r = t(i),
                            n = e(i);
                        return this._t(1, 0, 0, 0, 0, r, -n, 0, 0, n, r, 0, 0, 0, 0, 1)
                    }

                    function o(i) {
                        if (0 === i) return this;
                        var r = t(i),
                            n = e(i);
                        return this._t(r, 0, n, 0, 0, 1, 0, 0, -n, 0, r, 0, 0, 0, 0, 1)
                    }

                    function h(i) {
                        if (0 === i) return this;
                        var r = t(i),
                            n = e(i);
                        return this._t(r, -n, 0, 0, n, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function l(t, e) {
                        return this._t(1, e, t, 1, 0, 0)
                    }

                    function c(t, e) {
                        return this.shear(i(t), i(e))
                    }

                    function u(r, n) {
                        var s = t(n),
                            a = e(n);
                        return this._t(s, a, 0, 0, -a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -a, 0, 0, a, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function p(t, e, i) {
                        return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                    }

                    function f(t, e, i, r, n, s, a, o, h, l, c, u, p, f, d, m) {
                        return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = r, this.props[4] = n, this.props[5] = s, this.props[6] = a, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = c, this.props[11] = u, this.props[12] = p, this.props[13] = f, this.props[14] = d, this.props[15] = m, this
                    }

                    function d(t, e, i) {
                        return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                    }

                    function m(t, e, i, r, n, s, a, o, h, l, c, u, p, f, d, m) {
                        var g = this.props;
                        if (1 === t && 0 === e && 0 === i && 0 === r && 0 === n && 1 === s && 0 === a && 0 === o && 0 === h && 0 === l && 1 === c && 0 === u) return g[12] = g[12] * t + g[15] * p, g[13] = g[13] * s + g[15] * f, g[14] = g[14] * c + g[15] * d, g[15] *= m, this._identityCalculated = !1, this;
                        var y = g[0],
                            v = g[1],
                            b = g[2],
                            D = g[3],
                            _ = g[4],
                            E = g[5],
                            x = g[6],
                            w = g[7],
                            C = g[8],
                            S = g[9],
                            P = g[10],
                            T = g[11],
                            A = g[12],
                            F = g[13],
                            k = g[14],
                            M = g[15];
                        return g[0] = y * t + v * n + b * h + D * p, g[1] = y * e + v * s + b * l + D * f, g[2] = y * i + v * a + b * c + D * d, g[3] = y * r + v * o + b * u + D * m, g[4] = _ * t + E * n + x * h + w * p, g[5] = _ * e + E * s + x * l + w * f, g[6] = _ * i + E * a + x * c + w * d, g[7] = _ * r + E * o + x * u + w * m, g[8] = C * t + S * n + P * h + T * p, g[9] = C * e + S * s + P * l + T * f, g[10] = C * i + S * a + P * c + T * d, g[11] = C * r + S * o + P * u + T * m, g[12] = A * t + F * n + k * h + M * p, g[13] = A * e + F * s + k * l + M * f, g[14] = A * i + F * a + k * c + M * d, g[15] = A * r + F * o + k * u + M * m, this._identityCalculated = !1, this
                    }

                    function g() {
                        return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                    }

                    function y(t) {
                        for (var e = 0; e < 16;) {
                            if (t.props[e] !== this.props[e]) return !1;
                            e += 1
                        }
                        return !0
                    }

                    function v(t) {
                        var e;
                        for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                        return t
                    }

                    function b(t) {
                        var e;
                        for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                    }

                    function D(t, e, i) {
                        return {
                            x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                            y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                            z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                        }
                    }

                    function _(t, e, i) {
                        return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                    }

                    function E(t, e, i) {
                        return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                    }

                    function x(t, e, i) {
                        return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                    }

                    function w() {
                        var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                            e = this.props[5] / t,
                            i = -this.props[1] / t,
                            r = -this.props[4] / t,
                            n = this.props[0] / t,
                            s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                            a = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                            o = new Matrix;
                        return o.props[0] = e, o.props[1] = i, o.props[4] = r, o.props[5] = n, o.props[12] = s, o.props[13] = a, o
                    }

                    function C(t) {
                        return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                    }

                    function S(t) {
                        var e, i = t.length,
                            r = [];
                        for (e = 0; e < i; e += 1) r[e] = C(t[e]);
                        return r
                    }

                    function P(t, e, i) {
                        var r = createTypedArray("float32", 6);
                        if (this.isIdentity()) r[0] = t[0], r[1] = t[1], r[2] = e[0], r[3] = e[1], r[4] = i[0], r[5] = i[1];
                        else {
                            var n = this.props[0],
                                s = this.props[1],
                                a = this.props[4],
                                o = this.props[5],
                                h = this.props[12],
                                l = this.props[13];
                            r[0] = t[0] * n + t[1] * a + h, r[1] = t[0] * s + t[1] * o + l, r[2] = e[0] * n + e[1] * a + h, r[3] = e[0] * s + e[1] * o + l, r[4] = i[0] * n + i[1] * a + h, r[5] = i[0] * s + i[1] * o + l
                        }
                        return r
                    }

                    function T(t, e, i) {
                        return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
                    }

                    function A(t, e) {
                        if (this.isIdentity()) return t + "," + e;
                        var i = this.props;
                        return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                    }

                    function F() {
                        for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) i += r(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;
                        return i
                    }

                    function k(t) {
                        return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? r(1e4 * t) / 1e4 : t
                    }

                    function M() {
                        var t = this.props;
                        return "matrix(" + k(t[0]) + "," + k(t[1]) + "," + k(t[4]) + "," + k(t[5]) + "," + k(t[12]) + "," + k(t[13]) + ")"
                    }
                    return function() {
                        this.reset = n, this.rotate = s, this.rotateX = a, this.rotateY = o, this.rotateZ = h, this.skew = c, this.skewFromAxis = u, this.shear = l, this.scale = p, this.setTransform = f, this.translate = d, this.transform = m, this.applyToPoint = D, this.applyToX = _, this.applyToY = E, this.applyToZ = x, this.applyToPointArray = T, this.applyToTriplePoints = P, this.applyToPointStringified = A, this.toCSS = F, this.to2dCSS = M, this.clone = v, this.cloneFromProps = b, this.equals = y, this.inversePoints = S, this.inversePoint = C, this.getInverseMatrix = w, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                    }
                }();
            ! function(t, e) {
                var i = this,
                    r = e.pow(256, 6),
                    n = e.pow(2, 52),
                    s = 2 * n;

                function a(t) {
                    var e, i = t.length,
                        r = this,
                        n = 0,
                        s = r.i = r.j = 0,
                        a = r.S = [];
                    for (i || (t = [i++]); n < 256;) a[n] = n++;
                    for (n = 0; n < 256; n++) a[n] = a[s = 255 & s + t[n % i] + (e = a[n])], a[s] = e;
                    r.g = function(t) {
                        for (var e, i = 0, n = r.i, s = r.j, a = r.S; t--;) e = a[n = 255 & n + 1], i = 256 * i + a[255 & (a[n] = a[s = 255 & s + e]) + (a[s] = e)];
                        return r.i = n, r.j = s, i
                    }
                }

                function o(t, e) {
                    return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                }

                function h(t, e) {
                    for (var i, r = t + "", n = 0; n < r.length;) e[255 & n] = 255 & (i ^= 19 * e[255 & n]) + r.charCodeAt(n++);
                    return l(e)
                }

                function l(t) {
                    return String.fromCharCode.apply(0, t)
                }
                e.seedrandom = function(c, u, p) {
                    var f = [],
                        d = h(function t(e, i) {
                            var r, n = [],
                                s = typeof e;
                            if (i && "object" == s)
                                for (r in e) try {
                                    n.push(t(e[r], i - 1))
                                } catch (t) {}
                            return n.length ? n : "string" == s ? e : e + "\0"
                        }((u = !0 === u ? {
                            entropy: !0
                        } : u || {}).entropy ? [c, l(t)] : null === c ? function() {
                            try {
                                void 0;
                                var e = new Uint8Array(256);
                                return (i.crypto || i.msCrypto).getRandomValues(e), l(e)
                            } catch (e) {
                                var r = i.navigator,
                                    n = r && r.plugins;
                                return [+new Date, i, n, i.screen, l(t)]
                            }
                        }() : c, 3), f),
                        m = new a(f),
                        g = function() {
                            for (var t = m.g(6), e = r, i = 0; t < n;) t = 256 * (t + i), e *= 256, i = m.g(1);
                            for (; t >= s;) t /= 2, e /= 2, i >>>= 1;
                            return (t + i) / e
                        };
                    return g.int32 = function() {
                        return 0 | m.g(4)
                    }, g.quick = function() {
                        return m.g(4) / 4294967296
                    }, g.double = g, h(l(m.S), t), (u.pass || p || function(t, i, r, n) {
                        return n && (n.S && o(n, m), t.state = function() {
                            return o(m, {})
                        }), r ? (e.random = t, i) : t
                    })(g, d, "global" in u ? u.global : this == e, u.state)
                }, h(e.random(), t)
            }([], BMMath);
            var BezierFactory = function() {
                var t = {
                        getBezierEasing: function(t, i, r, n, s) {
                            var a = s || ("bez_" + t + "_" + i + "_" + r + "_" + n).replace(/\./g, "p");
                            if (e[a]) return e[a];
                            var o = new h([t, i, r, n]);
                            return e[a] = o, o
                        }
                    },
                    e = {};
                var i = "function" == typeof Float32Array;

                function r(t, e) {
                    return 1 - 3 * e + 3 * t
                }

                function n(t, e) {
                    return 3 * e - 6 * t
                }

                function s(t) {
                    return 3 * t
                }

                function a(t, e, i) {
                    return ((r(e, i) * t + n(e, i)) * t + s(e)) * t
                }

                function o(t, e, i) {
                    return 3 * r(e, i) * t * t + 2 * n(e, i) * t + s(e)
                }

                function h(t) {
                    this._p = t, this._mSampleValues = i ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                }
                return h.prototype = {
                    get: function(t) {
                        var e = this._p[0],
                            i = this._p[1],
                            r = this._p[2],
                            n = this._p[3];
                        return this._precomputed || this._precompute(), e === i && r === n ? t : 0 === t ? 0 : 1 === t ? 1 : a(this._getTForX(t), i, n)
                    },
                    _precompute: function() {
                        var t = this._p[0],
                            e = this._p[1],
                            i = this._p[2],
                            r = this._p[3];
                        this._precomputed = !0, t === e && i === r || this._calcSampleValues()
                    },
                    _calcSampleValues: function() {
                        for (var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i) this._mSampleValues[i] = a(.1 * i, t, e)
                    },
                    _getTForX: function(t) {
                        for (var e = this._p[0], i = this._p[2], r = this._mSampleValues, n = 0, s = 1; 10 !== s && r[s] <= t; ++s) n += .1;
                        var h = n + .1 * ((t - r[--s]) / (r[s + 1] - r[s])),
                            l = o(h, e, i);
                        return l >= .001 ? function(t, e, i, r) {
                            for (var n = 0; n < 4; ++n) {
                                var s = o(e, i, r);
                                if (0 === s) return e;
                                e -= (a(e, i, r) - t) / s
                            }
                            return e
                        }(t, h, e, i) : 0 === l ? h : function(t, e, i, r, n) {
                            var s, o, h = 0;
                            do {
                                (s = a(o = e + (i - e) / 2, r, n) - t) > 0 ? i = o : e = o
                            } while (Math.abs(s) > 1e-7 && ++h < 10);
                            return o
                        }(t, n, n + .1, e, i)
                    }
                }, t
            }();

            function extendPrototype(t, e) {
                var i, r, n = t.length;
                for (i = 0; i < n; i += 1)
                    for (var s in r = t[i].prototype) Object.prototype.hasOwnProperty.call(r, s) && (e.prototype[s] = r[s])
            }

            function getDescriptor(t, e) {
                return Object.getOwnPropertyDescriptor(t, e)
            }

            function createProxyFunction(t) {
                function e() {}
                return e.prototype = t, e
            }

            function bezFunction() {
                var t = Math;

                function e(t, e, i, r, n, s) {
                    var a = t * r + e * n + i * s - n * r - s * t - i * e;
                    return a > -.001 && a < .001
                }
                var i = function(t, e, i, r) {
                    var n, s, a, o, h, l, c = defaultCurveSegments,
                        u = 0,
                        p = [],
                        f = [],
                        d = bezierLengthPool.newElement();
                    for (a = i.length, n = 0; n < c; n += 1) {
                        for (h = n / (c - 1), l = 0, s = 0; s < a; s += 1) o = bmPow(1 - h, 3) * t[s] + 3 * bmPow(1 - h, 2) * h * i[s] + 3 * (1 - h) * bmPow(h, 2) * r[s] + bmPow(h, 3) * e[s], p[s] = o, null !== f[s] && (l += bmPow(p[s] - f[s], 2)), f[s] = p[s];
                        l && (u += l = bmSqrt(l)), d.percents[n] = h, d.lengths[n] = u
                    }
                    return d.addedLength = u, d
                };

                function r(t) {
                    this.segmentLength = 0, this.points = new Array(t)
                }

                function n(t, e) {
                    this.partialLength = t, this.point = e
                }
                var s, a = (s = {}, function(t, i, a, o) {
                    var h = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + a[0] + "_" + a[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                    if (!s[h]) {
                        var l, c, u, p, f, d, m, g = defaultCurveSegments,
                            y = 0,
                            v = null;
                        2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + a[0], t[1] + a[1]) && e(t[0], t[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && (g = 2);
                        var b = new r(g);
                        for (u = a.length, l = 0; l < g; l += 1) {
                            for (m = createSizedArray(u), f = l / (g - 1), d = 0, c = 0; c < u; c += 1) p = bmPow(1 - f, 3) * t[c] + 3 * bmPow(1 - f, 2) * f * (t[c] + a[c]) + 3 * (1 - f) * bmPow(f, 2) * (i[c] + o[c]) + bmPow(f, 3) * i[c], m[c] = p, null !== v && (d += bmPow(m[c] - v[c], 2));
                            y += d = bmSqrt(d), b.points[l] = new n(d, m), v = m
                        }
                        b.segmentLength = y, s[h] = b
                    }
                    return s[h]
                });

                function o(t, e) {
                    var i = e.percents,
                        r = e.lengths,
                        n = i.length,
                        s = bmFloor((n - 1) * t),
                        a = t * e.addedLength,
                        o = 0;
                    if (s === n - 1 || 0 === s || a === r[s]) return i[s];
                    for (var h = r[s] > a ? -1 : 1, l = !0; l;)
                        if (r[s] <= a && r[s + 1] > a ? (o = (a - r[s]) / (r[s + 1] - r[s]), l = !1) : s += h, s < 0 || s >= n - 1) {
                            if (s === n - 1) return i[s];
                            l = !1
                        } return i[s] + (i[s + 1] - i[s]) * o
                }
                var h = createTypedArray("float32", 8);
                return {
                    getSegmentsLength: function(t) {
                        var e, r = segmentsLengthPool.newElement(),
                            n = t.c,
                            s = t.v,
                            a = t.o,
                            o = t.i,
                            h = t._length,
                            l = r.lengths,
                            c = 0;
                        for (e = 0; e < h - 1; e += 1) l[e] = i(s[e], s[e + 1], a[e], o[e + 1]), c += l[e].addedLength;
                        return n && h && (l[e] = i(s[e], s[0], a[e], o[0]), c += l[e].addedLength), r.totalLength = c, r
                    },
                    getNewSegment: function(e, i, r, n, s, a, l) {
                        s < 0 ? s = 0 : s > 1 && (s = 1);
                        var c, u = o(s, l),
                            p = o(a = a > 1 ? 1 : a, l),
                            f = e.length,
                            d = 1 - u,
                            m = 1 - p,
                            g = d * d * d,
                            y = u * d * d * 3,
                            v = u * u * d * 3,
                            b = u * u * u,
                            D = d * d * m,
                            _ = u * d * m + d * u * m + d * d * p,
                            E = u * u * m + d * u * p + u * d * p,
                            x = u * u * p,
                            w = d * m * m,
                            C = u * m * m + d * p * m + d * m * p,
                            S = u * p * m + d * p * p + u * m * p,
                            P = u * p * p,
                            T = m * m * m,
                            A = p * m * m + m * p * m + m * m * p,
                            F = p * p * m + m * p * p + p * m * p,
                            k = p * p * p;
                        for (c = 0; c < f; c += 1) h[4 * c] = t.round(1e3 * (g * e[c] + y * r[c] + v * n[c] + b * i[c])) / 1e3, h[4 * c + 1] = t.round(1e3 * (D * e[c] + _ * r[c] + E * n[c] + x * i[c])) / 1e3, h[4 * c + 2] = t.round(1e3 * (w * e[c] + C * r[c] + S * n[c] + P * i[c])) / 1e3, h[4 * c + 3] = t.round(1e3 * (T * e[c] + A * r[c] + F * n[c] + k * i[c])) / 1e3;
                        return h
                    },
                    getPointInSegment: function(e, i, r, n, s, a) {
                        var h = o(s, a),
                            l = 1 - h;
                        return [t.round(1e3 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * r[0] + (h * h * l + l * h * h + h * l * h) * n[0] + h * h * h * i[0])) / 1e3, t.round(1e3 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * r[1] + (h * h * l + l * h * h + h * l * h) * n[1] + h * h * h * i[1])) / 1e3]
                    },
                    buildBezierData: a,
                    pointOnLine2D: e,
                    pointOnLine3D: function(i, r, n, s, a, o, h, l, c) {
                        if (0 === n && 0 === o && 0 === c) return e(i, r, s, a, h, l);
                        var u, p = t.sqrt(t.pow(s - i, 2) + t.pow(a - r, 2) + t.pow(o - n, 2)),
                            f = t.sqrt(t.pow(h - i, 2) + t.pow(l - r, 2) + t.pow(c - n, 2)),
                            d = t.sqrt(t.pow(h - s, 2) + t.pow(l - a, 2) + t.pow(c - o, 2));
                        return (u = p > f ? p > d ? p - f - d : d - f - p : d > f ? d - f - p : f - p - d) > -1e-4 && u < 1e-4
                    }
                }
            }! function() {
                for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
                    var i = (new Date).getTime(),
                        r = Math.max(0, 16 - (i - t)),
                        n = setTimeout((function() {
                            e(i + r)
                        }), r);
                    return t = i + r, n
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                    clearTimeout(t)
                })
            }();
            var bez = bezFunction();

            function dataFunctionManager() {
                function t(n, s, a) {
                    var o, h, l, u, p, f, d = n.length;
                    for (h = 0; h < d; h += 1)
                        if ("ks" in (o = n[h]) && !o.completed) {
                            if (o.completed = !0, o.tt && (n[h - 1].td = o.tt), o.hasMask) {
                                var m = o.masksProperties;
                                for (u = m.length, l = 0; l < u; l += 1)
                                    if (m[l].pt.k.i) r(m[l].pt.k);
                                    else
                                        for (f = m[l].pt.k.length, p = 0; p < f; p += 1) m[l].pt.k[p].s && r(m[l].pt.k[p].s[0]), m[l].pt.k[p].e && r(m[l].pt.k[p].e[0])
                            }
                            0 === o.ty ? (o.layers = e(o.refId, s), t(o.layers, s, a)) : 4 === o.ty ? i(o.shapes) : 5 === o.ty && c(o)
                        }
                }

                function e(t, e) {
                    for (var i = 0, r = e.length; i < r;) {
                        if (e[i].id === t) return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : (e[i].layers.__used = !0, e[i].layers);
                        i += 1
                    }
                    return null
                }

                function i(t) {
                    var e, n, s;
                    for (e = t.length - 1; e >= 0; e -= 1)
                        if ("sh" === t[e].ty)
                            if (t[e].ks.k.i) r(t[e].ks.k);
                            else
                                for (s = t[e].ks.k.length, n = 0; n < s; n += 1) t[e].ks.k[n].s && r(t[e].ks.k[n].s[0]), t[e].ks.k[n].e && r(t[e].ks.k[n].e[0]);
                    else "gr" === t[e].ty && i(t[e].it)
                }

                function r(t) {
                    var e, i = t.i.length;
                    for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                }

                function n(t, e) {
                    var i = e ? e.split(".") : [100, 100, 100];
                    return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                }
                var s, a = function() {
                        var t = [4, 4, 14];

                        function e(t) {
                            var e, i, r, n = t.length;
                            for (e = 0; e < n; e += 1) 5 === t[e].ty && (i = t[e], r = void 0, r = i.t.d, i.t.d = {
                                k: [{
                                    s: r,
                                    t: 0
                                }]
                            })
                        }
                        return function(i) {
                            if (n(t, i.v) && (e(i.layers), i.assets)) {
                                var r, s = i.assets.length;
                                for (r = 0; r < s; r += 1) i.assets[r].layers && e(i.assets[r].layers)
                            }
                        }
                    }(),
                    o = (s = [4, 7, 99], function(t) {
                        if (t.chars && !n(s, t.v)) {
                            var e, i, a, o, h, l = t.chars.length;
                            for (e = 0; e < l; e += 1)
                                if (t.chars[e].data && t.chars[e].data.shapes)
                                    for (a = (h = t.chars[e].data.shapes[0].it).length, i = 0; i < a; i += 1)(o = h[i].ks.k).__converted || (r(h[i].ks.k), o.__converted = !0)
                        }
                    }),
                    h = function() {
                        var t = [4, 1, 9];

                        function e(t) {
                            var i, r, n, s = t.length;
                            for (i = 0; i < s; i += 1)
                                if ("gr" === t[i].ty) e(t[i].it);
                                else if ("fl" === t[i].ty || "st" === t[i].ty)
                                if (t[i].c.k && t[i].c.k[0].i)
                                    for (n = t[i].c.k.length, r = 0; r < n; r += 1) t[i].c.k[r].s && (t[i].c.k[r].s[0] /= 255, t[i].c.k[r].s[1] /= 255, t[i].c.k[r].s[2] /= 255, t[i].c.k[r].s[3] /= 255), t[i].c.k[r].e && (t[i].c.k[r].e[0] /= 255, t[i].c.k[r].e[1] /= 255, t[i].c.k[r].e[2] /= 255, t[i].c.k[r].e[3] /= 255);
                                else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                        }

                        function i(t) {
                            var i, r = t.length;
                            for (i = 0; i < r; i += 1) 4 === t[i].ty && e(t[i].shapes)
                        }
                        return function(e) {
                            if (n(t, e.v) && (i(e.layers), e.assets)) {
                                var r, s = e.assets.length;
                                for (r = 0; r < s; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                            }
                        }
                    }(),
                    l = function() {
                        var t = [4, 4, 18];

                        function e(t) {
                            var i, r, n;
                            for (i = t.length - 1; i >= 0; i -= 1)
                                if ("sh" === t[i].ty)
                                    if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                                    else
                                        for (n = t[i].ks.k.length, r = 0; r < n; r += 1) t[i].ks.k[r].s && (t[i].ks.k[r].s[0].c = t[i].closed), t[i].ks.k[r].e && (t[i].ks.k[r].e[0].c = t[i].closed);
                            else "gr" === t[i].ty && e(t[i].it)
                        }

                        function i(t) {
                            var i, r, n, s, a, o, h = t.length;
                            for (r = 0; r < h; r += 1) {
                                if ((i = t[r]).hasMask) {
                                    var l = i.masksProperties;
                                    for (s = l.length, n = 0; n < s; n += 1)
                                        if (l[n].pt.k.i) l[n].pt.k.c = l[n].cl;
                                        else
                                            for (o = l[n].pt.k.length, a = 0; a < o; a += 1) l[n].pt.k[a].s && (l[n].pt.k[a].s[0].c = l[n].cl), l[n].pt.k[a].e && (l[n].pt.k[a].e[0].c = l[n].cl)
                                }
                                4 === i.ty && e(i.shapes)
                            }
                        }
                        return function(e) {
                            if (n(t, e.v) && (i(e.layers), e.assets)) {
                                var r, s = e.assets.length;
                                for (r = 0; r < s; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                            }
                        }
                    }();

                function c(t) {
                    0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0)
                }
                var u = {
                    completeData: function(e, i) {
                        e.__complete || (h(e), a(e), o(e), l(e), t(e.layers, e.assets, i), e.__complete = !0)
                    }
                };
                return u.checkColors = h, u.checkChars = o, u.checkShapes = l, u.completeLayers = t, u
            }
            var dataManager = dataFunctionManager();

            function getFontProperties(t) {
                for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", n = e.length, s = 0; s < n; s += 1) switch (e[s].toLowerCase()) {
                    case "italic":
                        r = "italic";
                        break;
                    case "bold":
                        i = "700";
                        break;
                    case "black":
                        i = "900";
                        break;
                    case "medium":
                        i = "500";
                        break;
                    case "regular":
                    case "normal":
                        i = "400";
                        break;
                    case "light":
                    case "thin":
                        i = "200"
                }
                return {
                    style: r,
                    weight: t.fWeight || i
                }
            }
            var FontManager = function() {
                    var t = {
                            w: 0,
                            size: 0,
                            shapes: []
                        },
                        e = [];

                    function i(t, e) {
                        var i = createTag("span");
                        i.style.fontFamily = e;
                        var r = createTag("span");
                        r.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(r), document.body.appendChild(i);
                        var n = r.offsetWidth;
                        return r.style.fontFamily = function(t) {
                            var e, i = t.split(","),
                                r = i.length,
                                n = [];
                            for (e = 0; e < r; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && n.push(i[e]);
                            return n.join(",")
                        }(t) + ", " + e, {
                            node: r,
                            w: n,
                            parent: i
                        }
                    }

                    function r(t, e) {
                        var i = createNS("text");
                        i.style.fontSize = "100px";
                        var r = getFontProperties(e);
                        return i.setAttribute("font-family", e.fFamily), i.setAttribute("font-style", r.style), i.setAttribute("font-weight", r.weight), i.textContent = "1", e.fClass ? (i.style.fontFamily = "inherit", i.setAttribute("class", e.fClass)) : i.style.fontFamily = e.fFamily, t.appendChild(i), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, i
                    }
                    e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                    var n = function() {
                        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                    };
                    return n.getCombinedCharacterCodes = function() {
                        return e
                    }, n.prototype = {
                        addChars: function(t) {
                            if (t) {
                                var e;
                                this.chars || (this.chars = []);
                                var i, r, n = t.length,
                                    s = this.chars.length;
                                for (e = 0; e < n; e += 1) {
                                    for (i = 0, r = !1; i < s;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (r = !0), i += 1;
                                    r || (this.chars.push(t[e]), s += 1)
                                }
                            }
                        },
                        addFonts: function(t, e) {
                            if (t) {
                                if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                                var n, s = t.list,
                                    a = s.length,
                                    o = a;
                                for (n = 0; n < a; n += 1) {
                                    var h, l, c = !0;
                                    if (s[n].loaded = !1, s[n].monoCase = i(s[n].fFamily, "monospace"), s[n].sansCase = i(s[n].fFamily, "sans-serif"), s[n].fPath) {
                                        if ("p" === s[n].fOrigin || 3 === s[n].origin) {
                                            if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + s[n].fFamily + '"], style[f-origin="3"][f-family="' + s[n].fFamily + '"]')).length > 0 && (c = !1), c) {
                                                var u = createTag("style");
                                                u.setAttribute("f-forigin", s[n].fOrigin), u.setAttribute("f-origin", s[n].origin), u.setAttribute("f-family", s[n].fFamily), u.type = "text/css", u.innerText = "@font-face {font-family: " + s[n].fFamily + "; font-style: normal; src: url('" + s[n].fPath + "');}", e.appendChild(u)
                                            }
                                        } else if ("g" === s[n].fOrigin || 1 === s[n].origin) {
                                            for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1) - 1 !== h[l].href.indexOf(s[n].fPath) && (c = !1);
                                            if (c) {
                                                var p = createTag("link");
                                                p.setAttribute("f-forigin", s[n].fOrigin), p.setAttribute("f-origin", s[n].origin), p.type = "text/css", p.rel = "stylesheet", p.href = s[n].fPath, document.body.appendChild(p)
                                            }
                                        } else if ("t" === s[n].fOrigin || 2 === s[n].origin) {
                                            for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1) s[n].fPath === h[l].src && (c = !1);
                                            if (c) {
                                                var f = createTag("link");
                                                f.setAttribute("f-forigin", s[n].fOrigin), f.setAttribute("f-origin", s[n].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", s[n].fPath), e.appendChild(f)
                                            }
                                        }
                                    } else s[n].loaded = !0, o -= 1;
                                    s[n].helper = r(e, s[n]), s[n].cache = {}, this.fonts.push(s[n])
                                }
                                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                            } else this.isLoaded = !0
                        },
                        getCharData: function(e, i, r) {
                            for (var n = 0, s = this.chars.length; n < s;) {
                                if (this.chars[n].ch === e && this.chars[n].style === i && this.chars[n].fFamily === r) return this.chars[n];
                                n += 1
                            }
                            return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, i, r)), t
                        },
                        getFontByName: function(t) {
                            for (var e = 0, i = this.fonts.length; e < i;) {
                                if (this.fonts[e].fName === t) return this.fonts[e];
                                e += 1
                            }
                            return this.fonts[0]
                        },
                        measureText: function(t, e, i) {
                            var r = this.getFontByName(e),
                                n = t.charCodeAt(0);
                            if (!r.cache[n + 1]) {
                                var s = r.helper;
                                if (" " === t) {
                                    s.textContent = "|" + t + "|";
                                    var a = s.getComputedTextLength();
                                    s.textContent = "||";
                                    var o = s.getComputedTextLength();
                                    r.cache[n + 1] = (a - o) / 100
                                } else s.textContent = t, r.cache[n + 1] = s.getComputedTextLength() / 100
                            }
                            return r.cache[n + 1] * i
                        },
                        checkLoadedFonts: function() {
                            var t, e, i, r = this.fonts.length,
                                n = r;
                            for (t = 0; t < r; t += 1) this.fonts[t].loaded ? n -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (n -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (n -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                            0 !== n && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                        },
                        setIsLoaded: function() {
                            this.isLoaded = !0
                        }
                    }, n
                }(),
                PropertyFactory = function() {
                    var t = initialDefaultFrame,
                        e = Math.abs;

                    function i(t, e) {
                        var i, n = this.offsetTime;
                        "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
                        for (var s, a, o, h, l, c, u, p, f = e.lastIndex, d = f, m = this.keyframes.length - 1, g = !0; g;) {
                            if (s = this.keyframes[d], a = this.keyframes[d + 1], d === m - 1 && t >= a.t - n) {
                                s.h && (s = a), f = 0;
                                break
                            }
                            if (a.t - n > t) {
                                f = d;
                                break
                            }
                            d < m - 1 ? d += 1 : (f = 0, g = !1)
                        }
                        var y, v = a.t - n,
                            b = s.t - n;
                        if (s.to) {
                            s.bezierData || (s.bezierData = bez.buildBezierData(s.s, a.s || s.e, s.to, s.ti));
                            var D = s.bezierData;
                            if (t >= v || t < b) {
                                var _ = t >= v ? D.points.length - 1 : 0;
                                for (h = D.points[_].point.length, o = 0; o < h; o += 1) i[o] = D.points[_].point[o]
                            } else {
                                s.__fnct ? p = s.__fnct : (p = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, s.__fnct = p), l = p((t - b) / (v - b));
                                var E, x = D.segmentLength * l,
                                    w = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
                                for (u = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, g = !0, c = D.points.length; g;) {
                                    if (w += D.points[u].partialLength, 0 === x || 0 === l || u === D.points.length - 1) {
                                        for (h = D.points[u].point.length, o = 0; o < h; o += 1) i[o] = D.points[u].point[o];
                                        break
                                    }
                                    if (x >= w && x < w + D.points[u + 1].partialLength) {
                                        for (E = (x - w) / D.points[u + 1].partialLength, h = D.points[u].point.length, o = 0; o < h; o += 1) i[o] = D.points[u].point[o] + (D.points[u + 1].point[o] - D.points[u].point[o]) * E;
                                        break
                                    }
                                    u < c - 1 ? u += 1 : g = !1
                                }
                                e._lastPoint = u, e._lastAddedLength = w - D.points[u].partialLength, e._lastKeyframeIndex = d
                            }
                        } else {
                            var C, S, P, T, A;
                            if (m = s.s.length, y = a.s || s.e, this.sh && 1 !== s.h)
                                if (t >= v) i[0] = y[0], i[1] = y[1], i[2] = y[2];
                                else if (t <= b) i[0] = s.s[0], i[1] = s.s[1], i[2] = s.s[2];
                            else {
                                ! function(t, e) {
                                    var i = e[0],
                                        r = e[1],
                                        n = e[2],
                                        s = e[3],
                                        a = Math.atan2(2 * r * s - 2 * i * n, 1 - 2 * r * r - 2 * n * n),
                                        o = Math.asin(2 * i * r + 2 * n * s),
                                        h = Math.atan2(2 * i * s - 2 * r * n, 1 - 2 * i * i - 2 * n * n);
                                    t[0] = a / degToRads, t[1] = o / degToRads, t[2] = h / degToRads
                                }(i, function(t, e, i) {
                                    var r, n, s, a, o, h = [],
                                        l = t[0],
                                        c = t[1],
                                        u = t[2],
                                        p = t[3],
                                        f = e[0],
                                        d = e[1],
                                        m = e[2],
                                        g = e[3];
                                    (n = l * f + c * d + u * m + p * g) < 0 && (n = -n, f = -f, d = -d, m = -m, g = -g);
                                    1 - n > 1e-6 ? (r = Math.acos(n), s = Math.sin(r), a = Math.sin((1 - i) * r) / s, o = Math.sin(i * r) / s) : (a = 1 - i, o = i);
                                    return h[0] = a * l + o * f, h[1] = a * c + o * d, h[2] = a * u + o * m, h[3] = a * p + o * g, h
                                }(r(s.s), r(y), (t - b) / (v - b)))
                            } else
                                for (d = 0; d < m; d += 1) 1 !== s.h && (t >= v ? l = 1 : t < b ? l = 0 : (s.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[d] ? p = s.__fnct[d] : (C = void 0 === s.o.x[d] ? s.o.x[0] : s.o.x[d], S = void 0 === s.o.y[d] ? s.o.y[0] : s.o.y[d], P = void 0 === s.i.x[d] ? s.i.x[0] : s.i.x[d], T = void 0 === s.i.y[d] ? s.i.y[0] : s.i.y[d], p = BezierFactory.getBezierEasing(C, S, P, T).get, s.__fnct[d] = p)) : s.__fnct ? p = s.__fnct : (C = s.o.x, S = s.o.y, P = s.i.x, T = s.i.y, p = BezierFactory.getBezierEasing(C, S, P, T).get, s.__fnct = p), l = p((t - b) / (v - b)))), y = a.s || s.e, A = 1 === s.h ? s.s[d] : s.s[d] + (y[d] - s.s[d]) * l, "multidimensional" === this.propType ? i[d] = A : i = A
                        }
                        return e.lastIndex = f, i
                    }

                    function r(t) {
                        var e = t[0] * degToRads,
                            i = t[1] * degToRads,
                            r = t[2] * degToRads,
                            n = Math.cos(e / 2),
                            s = Math.cos(i / 2),
                            a = Math.cos(r / 2),
                            o = Math.sin(e / 2),
                            h = Math.sin(i / 2),
                            l = Math.sin(r / 2);
                        return [o * h * a + n * s * l, o * s * a + n * h * l, n * h * a - o * s * l, n * s * a - o * h * l]
                    }

                    function n() {
                        var e = this.comp.renderedFrame - this.offsetTime,
                            i = this.keyframes[0].t - this.offsetTime,
                            r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                        if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < i && e < i))) {
                            this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                            var n = this.interpolateValue(e, this._caching);
                            this.pv = n
                        }
                        return this._caching.lastFrame = e, this.pv
                    }

                    function s(t) {
                        var i;
                        if ("unidimensional" === this.propType) i = t * this.mult, e(this.v - i) > 1e-5 && (this.v = i, this._mdf = !0);
                        else
                            for (var r = 0, n = this.v.length; r < n;) i = t[r] * this.mult, e(this.v[r] - i) > 1e-5 && (this.v[r] = i, this._mdf = !0), r += 1
                    }

                    function a() {
                        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                            if (this.lock) this.setVValue(this.pv);
                            else {
                                var t;
                                this.lock = !0, this._mdf = this._isFirstFrame;
                                var e = this.effectsSequence.length,
                                    i = this.kf ? this.pv : this.data.k;
                                for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                                this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                            }
                    }

                    function o(t) {
                        this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                    }

                    function h(t, e, i, r) {
                        this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = a, this.setVValue = s, this.addEffect = o
                    }

                    function l(t, e, i, r) {
                        var n;
                        this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                        var h = e.k.length;
                        for (this.v = createTypedArray("float32", h), this.pv = createTypedArray("float32", h), this.vel = createTypedArray("float32", h), n = 0; n < h; n += 1) this.v[n] = e.k[n] * this.mult, this.pv[n] = e.k[n];
                        this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = a, this.setVValue = s, this.addEffect = o
                    }

                    function c(e, r, h, l) {
                        this.propType = "unidimensional", this.keyframes = r.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                            lastFrame: t,
                            lastIndex: 0,
                            value: 0,
                            _lastKeyframeIndex: -1
                        }, this.k = !0, this.kf = !0, this.data = r, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = a, this.setVValue = s, this.interpolateValue = i, this.effectsSequence = [n.bind(this)], this.addEffect = o
                    }

                    function u(e, r, h, l) {
                        var c;
                        this.propType = "multidimensional";
                        var u, p, f, d, m = r.k.length;
                        for (c = 0; c < m - 1; c += 1) r.k[c].to && r.k[c].s && r.k[c + 1] && r.k[c + 1].s && (u = r.k[c].s, p = r.k[c + 1].s, f = r.k[c].to, d = r.k[c].ti, (2 === u.length && (u[0] !== p[0] || u[1] !== p[1]) && bez.pointOnLine2D(u[0], u[1], p[0], p[1], u[0] + f[0], u[1] + f[1]) && bez.pointOnLine2D(u[0], u[1], p[0], p[1], p[0] + d[0], p[1] + d[1]) || 3 === u.length && (u[0] !== p[0] || u[1] !== p[1] || u[2] !== p[2]) && bez.pointOnLine3D(u[0], u[1], u[2], p[0], p[1], p[2], u[0] + f[0], u[1] + f[1], u[2] + f[2]) && bez.pointOnLine3D(u[0], u[1], u[2], p[0], p[1], p[2], p[0] + d[0], p[1] + d[1], p[2] + d[2])) && (r.k[c].to = null, r.k[c].ti = null), u[0] === p[0] && u[1] === p[1] && 0 === f[0] && 0 === f[1] && 0 === d[0] && 0 === d[1] && (2 === u.length || u[2] === p[2] && 0 === f[2] && 0 === d[2]) && (r.k[c].to = null, r.k[c].ti = null));
                        this.effectsSequence = [n.bind(this)], this.data = r, this.keyframes = r.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.getValue = a, this.setVValue = s, this.interpolateValue = i, this.frameId = -1;
                        var g = r.k[0].s.length;
                        for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), c = 0; c < g; c += 1) this.v[c] = t, this.pv[c] = t;
                        this._caching = {
                            lastFrame: t,
                            lastIndex: 0,
                            value: createTypedArray("float32", g)
                        }, this.addEffect = o
                    }
                    return {
                        getProp: function(t, e, i, r, n) {
                            var s;
                            if (e.k.length)
                                if ("number" == typeof e.k[0]) s = new l(t, e, r, n);
                                else switch (i) {
                                    case 0:
                                        s = new c(t, e, r, n);
                                        break;
                                    case 1:
                                        s = new u(t, e, r, n)
                                } else s = new h(t, e, r, n);
                            return s.effectsSequence.length && n.addDynamicProperty(s), s
                        }
                    }
                }(),
                TransformPropertyFactory = function() {
                    var t = [0, 0];

                    function e(t, e, i) {
                        if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                                k: [0, 0, 0]
                            }, 1, 0, this), e.rx) {
                            if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                                var r, n = e.or.k.length;
                                for (r = 0; r < n; r += 1) e.or.k[r].to = null, e.or.k[r].ti = null
                            }
                            this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                        } else this.r = PropertyFactory.getProp(t, e.r || {
                            k: 0
                        }, 0, degToRads, this);
                        e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                            k: [0, 0, 0]
                        }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                            k: [100, 100, 100]
                        }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                            _mdf: !1,
                            v: 1
                        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                    }
                    return e.prototype = {
                        applyToMatrix: function(t) {
                            var e = this._mdf;
                            this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                        },
                        getValue: function(e) {
                            if (this.elem.globalData.frameId !== this.frameId) {
                                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                    var i;
                                    if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                        var r, n;
                                        if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), n = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), n = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (r = this.p.pv, n = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                        else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                            r = [], n = [];
                                            var s = this.px,
                                                a = this.py;
                                            s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (r[0] = s.getValueAtTime((s.keyframes[0].t + .01) / i, 0), r[1] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), n[0] = s.getValueAtTime(s.keyframes[0].t / i, 0), n[1] = a.getValueAtTime(a.keyframes[0].t / i, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (r[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / i, 0), r[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), n[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / i, 0), n[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0)) : (r = [s.pv, a.pv], n[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / i, s.offsetTime), n[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime))
                                        } else r = n = t;
                                        this.v.rotate(-Math.atan2(r[1] - n[1], r[0] - n[0]))
                                    }
                                    this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                }
                                this.frameId = this.elem.globalData.frameId
                            }
                        },
                        precalculateMatrix: function() {
                            if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                    if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                    this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                }
                                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                            }
                        },
                        autoOrient: function() {}
                    }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
                        this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                    }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                        getTransformProperty: function(t, i, r) {
                            return new e(t, i, r)
                        }
                    }
                }();

            function ShapePath() {
                this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
            }
            ShapePath.prototype.setPathData = function(t, e) {
                this.c = t, this.setLength(e);
                for (var i = 0; i < e;) this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1
            }, ShapePath.prototype.setLength = function(t) {
                for (; this._maxLength < t;) this.doubleArrayLength();
                this._length = t
            }, ShapePath.prototype.doubleArrayLength = function() {
                this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
            }, ShapePath.prototype.setXYAt = function(t, e, i, r, n) {
                var s;
                switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                    case "v":
                        s = this.v;
                        break;
                    case "i":
                        s = this.i;
                        break;
                    case "o":
                        s = this.o;
                        break;
                    default:
                        s = []
                }(!s[r] || s[r] && !n) && (s[r] = pointPool.newElement()), s[r][0] = t, s[r][1] = e
            }, ShapePath.prototype.setTripleAt = function(t, e, i, r, n, s, a, o) {
                this.setXYAt(t, e, "v", a, o), this.setXYAt(i, r, "o", a, o), this.setXYAt(n, s, "i", a, o)
            }, ShapePath.prototype.reverse = function() {
                var t = new ShapePath;
                t.setPathData(this.c, this._length);
                var e = this.v,
                    i = this.o,
                    r = this.i,
                    n = 0;
                this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), n = 1);
                var s, a = this._length - 1,
                    o = this._length;
                for (s = n; s < o; s += 1) t.setTripleAt(e[a][0], e[a][1], r[a][0], r[a][1], i[a][0], i[a][1], s, !1), a -= 1;
                return t
            };
            var ShapePropertyFactory = function() {
                    function t(t, e, i) {
                        var r, n, s, a, o, h, l, c, u, p = i.lastIndex,
                            f = this.keyframes;
                        if (t < f[0].t - this.offsetTime) r = f[0].s[0], s = !0, p = 0;
                        else if (t >= f[f.length - 1].t - this.offsetTime) r = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], s = !0;
                        else {
                            for (var d, m, g = p, y = f.length - 1, v = !0; v && (d = f[g], !((m = f[g + 1]).t - this.offsetTime > t));) g < y - 1 ? g += 1 : v = !1;
                            if (p = g, !(s = 1 === d.h)) {
                                if (t >= m.t - this.offsetTime) c = 1;
                                else if (t < d.t - this.offsetTime) c = 0;
                                else {
                                    var b;
                                    d.__fnct ? b = d.__fnct : (b = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = b), c = b((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                                }
                                n = m.s ? m.s[0] : d.e[0]
                            }
                            r = d.s[0]
                        }
                        for (h = e._length, l = r.i[0].length, i.lastIndex = p, a = 0; a < h; a += 1)
                            for (o = 0; o < l; o += 1) u = s ? r.i[a][o] : r.i[a][o] + (n.i[a][o] - r.i[a][o]) * c, e.i[a][o] = u, u = s ? r.o[a][o] : r.o[a][o] + (n.o[a][o] - r.o[a][o]) * c, e.o[a][o] = u, u = s ? r.v[a][o] : r.v[a][o] + (n.v[a][o] - r.v[a][o]) * c, e.v[a][o] = u
                    }

                    function e() {
                        var t = this.comp.renderedFrame - this.offsetTime,
                            e = this.keyframes[0].t - this.offsetTime,
                            i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                            r = this._caching.lastFrame;
                        return -999999 !== r && (r < e && t < e || r > i && t > i) || (this._caching.lastIndex = r < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
                    }

                    function i() {
                        this.paths = this.localShapeCollection
                    }

                    function r(t) {
                        (function(t, e) {
                            if (t._length !== e._length || t.c !== e.c) return !1;
                            var i, r = t._length;
                            for (i = 0; i < r; i += 1)
                                if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                            return !0
                        })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                    }

                    function n() {
                        if (this.elem.globalData.frameId !== this.frameId)
                            if (this.effectsSequence.length)
                                if (this.lock) this.setVValue(this.pv);
                                else {
                                    var t, e;
                                    this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                    var i = this.effectsSequence.length;
                                    for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
                                    this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                        else this._mdf = !1
                    }

                    function s(t, e, r) {
                        this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                        var n = 3 === r ? e.pt.k : e.ks.k;
                        this.v = shapePool.clone(n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                    }

                    function a(t) {
                        this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                    }

                    function o(t, r, n) {
                        this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === n ? r.pt.k : r.ks.k, this.k = !0, this.kf = !0;
                        var s = this.keyframes[0].s[0].i.length;
                        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = i, this._caching = {
                            lastFrame: -999999,
                            lastIndex: 0
                        }, this.effectsSequence = [e.bind(this)]
                    }
                    s.prototype.interpolateShape = t, s.prototype.getValue = n, s.prototype.setVValue = r, s.prototype.addEffect = a, o.prototype.getValue = n, o.prototype.interpolateShape = t, o.prototype.setVValue = r, o.prototype.addEffect = a;
                    var h = function() {
                            var t = roundCorner;

                            function e(t, e) {
                                this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                            }
                            return e.prototype = {
                                reset: i,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                },
                                convertEllToPath: function() {
                                    var e = this.p.v[0],
                                        i = this.p.v[1],
                                        r = this.s.v[0] / 2,
                                        n = this.s.v[1] / 2,
                                        s = 3 !== this.d,
                                        a = this.v;
                                    a.v[0][0] = e, a.v[0][1] = i - n, a.v[1][0] = s ? e + r : e - r, a.v[1][1] = i, a.v[2][0] = e, a.v[2][1] = i + n, a.v[3][0] = s ? e - r : e + r, a.v[3][1] = i, a.i[0][0] = s ? e - r * t : e + r * t, a.i[0][1] = i - n, a.i[1][0] = s ? e + r : e - r, a.i[1][1] = i - n * t, a.i[2][0] = s ? e + r * t : e - r * t, a.i[2][1] = i + n, a.i[3][0] = s ? e - r : e + r, a.i[3][1] = i + n * t, a.o[0][0] = s ? e + r * t : e - r * t, a.o[0][1] = i - n, a.o[1][0] = s ? e + r : e - r, a.o[1][1] = i + n * t, a.o[2][0] = s ? e - r * t : e + r * t, a.o[2][1] = i + n, a.o[3][0] = s ? e - r : e + r, a.o[3][1] = i - n * t
                                }
                            }, extendPrototype([DynamicPropertyContainer], e), e
                        }(),
                        l = function() {
                            function t(t, e) {
                                this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                            }
                            return t.prototype = {
                                reset: i,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                },
                                convertStarToPath: function() {
                                    var t, e, i, r, n = 2 * Math.floor(this.pt.v),
                                        s = 2 * Math.PI / n,
                                        a = !0,
                                        o = this.or.v,
                                        h = this.ir.v,
                                        l = this.os.v,
                                        c = this.is.v,
                                        u = 2 * Math.PI * o / (2 * n),
                                        p = 2 * Math.PI * h / (2 * n),
                                        f = -Math.PI / 2;
                                    f += this.r.v;
                                    var d = 3 === this.data.d ? -1 : 1;
                                    for (this.v._length = 0, t = 0; t < n; t += 1) {
                                        i = a ? l : c, r = a ? u : p;
                                        var m = (e = a ? o : h) * Math.cos(f),
                                            g = e * Math.sin(f),
                                            y = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
                                            v = 0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
                                        m += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(m, g, m - y * r * i * d, g - v * r * i * d, m + y * r * i * d, g + v * r * i * d, t, !0), a = !a, f += s * d
                                    }
                                },
                                convertPolygonToPath: function() {
                                    var t, e = Math.floor(this.pt.v),
                                        i = 2 * Math.PI / e,
                                        r = this.or.v,
                                        n = this.os.v,
                                        s = 2 * Math.PI * r / (4 * e),
                                        a = .5 * -Math.PI,
                                        o = 3 === this.data.d ? -1 : 1;
                                    for (a += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                        var h = r * Math.cos(a),
                                            l = r * Math.sin(a),
                                            c = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                            u = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                        h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - c * s * n * o, l - u * s * n * o, h + c * s * n * o, l + u * s * n * o, t, !0), a += i * o
                                    }
                                    this.paths.length = 0, this.paths[0] = this.v
                                }
                            }, extendPrototype([DynamicPropertyContainer], t), t
                        }(),
                        c = function() {
                            function t(t, e) {
                                this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                            }
                            return t.prototype = {
                                convertRectToPath: function() {
                                    var t = this.p.v[0],
                                        e = this.p.v[1],
                                        i = this.s.v[0] / 2,
                                        r = this.s.v[1] / 2,
                                        n = bmMin(i, r, this.r.v),
                                        s = n * (1 - roundCorner);
                                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - r + n, t + i, e - r + n, t + i, e - r + s, 0, !0), this.v.setTripleAt(t + i, e + r - n, t + i, e + r - s, t + i, e + r - n, 1, !0), 0 !== n ? (this.v.setTripleAt(t + i - n, e + r, t + i - n, e + r, t + i - s, e + r, 2, !0), this.v.setTripleAt(t - i + n, e + r, t - i + s, e + r, t - i + n, e + r, 3, !0), this.v.setTripleAt(t - i, e + r - n, t - i, e + r - n, t - i, e + r - s, 4, !0), this.v.setTripleAt(t - i, e - r + n, t - i, e - r + s, t - i, e - r + n, 5, !0), this.v.setTripleAt(t - i + n, e - r, t - i + n, e - r, t - i + s, e - r, 6, !0), this.v.setTripleAt(t + i - n, e - r, t + i - s, e - r, t + i - n, e - r, 7, !0)) : (this.v.setTripleAt(t - i, e + r, t - i + s, e + r, t - i, e + r, 2), this.v.setTripleAt(t - i, e - r, t - i, e - r + s, t - i, e - r, 3))) : (this.v.setTripleAt(t + i, e - r + n, t + i, e - r + s, t + i, e - r + n, 0, !0), 0 !== n ? (this.v.setTripleAt(t + i - n, e - r, t + i - n, e - r, t + i - s, e - r, 1, !0), this.v.setTripleAt(t - i + n, e - r, t - i + s, e - r, t - i + n, e - r, 2, !0), this.v.setTripleAt(t - i, e - r + n, t - i, e - r + n, t - i, e - r + s, 3, !0), this.v.setTripleAt(t - i, e + r - n, t - i, e + r - s, t - i, e + r - n, 4, !0), this.v.setTripleAt(t - i + n, e + r, t - i + n, e + r, t - i + s, e + r, 5, !0), this.v.setTripleAt(t + i - n, e + r, t + i - s, e + r, t + i - n, e + r, 6, !0), this.v.setTripleAt(t + i, e + r - n, t + i, e + r - n, t + i, e + r - s, 7, !0)) : (this.v.setTripleAt(t - i, e - r, t - i + s, e - r, t - i, e - r, 1, !0), this.v.setTripleAt(t - i, e + r, t - i, e + r - s, t - i, e + r, 2, !0), this.v.setTripleAt(t + i, e + r, t + i - s, e + r, t + i, e + r, 3, !0)))
                                },
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                },
                                reset: i
                            }, extendPrototype([DynamicPropertyContainer], t), t
                        }();
                    var u = {
                        getShapeProp: function(t, e, i) {
                            var r;
                            return 3 === i || 4 === i ? r = (3 === i ? e.pt : e.ks).k.length ? new o(t, e, i) : new s(t, e, i) : 5 === i ? r = new c(t, e) : 6 === i ? r = new h(t, e) : 7 === i && (r = new l(t, e)), r.k && t.addDynamicProperty(r), r
                        },
                        getConstructorFunction: function() {
                            return s
                        },
                        getKeyframedConstructorFunction: function() {
                            return o
                        }
                    };
                    return u
                }(),
                ShapeModifiers = (ob = {}, modifiers = {}, ob.registerModifier = function(t, e) {
                    modifiers[t] || (modifiers[t] = e)
                }, ob.getModifier = function(t, e, i) {
                    return new modifiers[t](e, i)
                }, ob),
                ob, modifiers;

            function ShapeModifier() {}

            function TrimModifier() {}

            function RoundCornersModifier() {}

            function PuckerAndBloatModifier() {}

            function RepeaterModifier() {}

            function ShapeCollection() {
                this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
            }

            function DashProperty(t, e, i, r) {
                var n;
                this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
                var s, a = e.length || 0;
                for (n = 0; n < a; n += 1) s = PropertyFactory.getProp(t, e[n].v, 0, 0, this), this.k = s.k || this.k, this.dataProps[n] = {
                    n: e[n].n,
                    p: s
                };
                this.k || this.getValue(!0), this._isAnimated = this.k
            }

            function GradientProperty(t, e, i) {
                this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
                var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
            }
            ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
                if (!this.closed) {
                    t.sh.container.addDynamicProperty(t.sh);
                    var e = {
                        shape: t.sh,
                        data: t,
                        localShapeCollection: shapeCollectionPool.newShapeCollection()
                    };
                    this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                }
            }, ShapeModifier.prototype.init = function(t, e) {
                this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }, ShapeModifier.prototype.processKeys = function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
            }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
                this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
            }, TrimModifier.prototype.addShapeToModifier = function(t) {
                t.pathsData = []
            }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, n) {
                var s = [];
                e <= 1 ? s.push({
                    s: t,
                    e: e
                }) : t >= 1 ? s.push({
                    s: t - 1,
                    e: e - 1
                }) : (s.push({
                    s: t,
                    e: 1
                }), s.push({
                    s: 0,
                    e: e - 1
                }));
                var a, o, h = [],
                    l = s.length;
                for (a = 0; a < l; a += 1) {
                    var c, u;
                    if (!((o = s[a]).e * n < r || o.s * n > r + i)) c = o.s * n <= r ? 0 : (o.s * n - r) / i, u = o.e * n >= r + i ? 1 : (o.e * n - r) / i, h.push([c, u])
                }
                return h.length || h.push([0, 0]), h
            }, TrimModifier.prototype.releasePathsData = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e]);
                return t.length = 0, t
            }, TrimModifier.prototype.processShapes = function(t) {
                var e, i, r, n;
                if (this._mdf || t) {
                    var s = this.o.v % 360 / 360;
                    if (s < 0 && (s += 1), (e = this.s.v > 1 ? 1 + s : this.s.v < 0 ? 0 + s : this.s.v + s) > (i = this.e.v > 1 ? 1 + s : this.e.v < 0 ? 0 + s : this.e.v + s)) {
                        var a = e;
                        e = i, i = a
                    }
                    e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
                } else e = this.sValue, i = this.eValue;
                var o, h, l, c, u, p = this.shapes.length,
                    f = 0;
                if (i === e)
                    for (n = 0; n < p; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
                else if (1 === i && 0 === e || 0 === i && 1 === e) {
                    if (this._mdf)
                        for (n = 0; n < p; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
                } else {
                    var d, m, g = [];
                    for (n = 0; n < p; n += 1)
                        if ((d = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                            if (h = (r = d.shape.paths)._length, u = 0, !d.shape._mdf && d.pathsData.length) u = d.totalShapeLength;
                            else {
                                for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1) c = bez.getSegmentsLength(r.shapes[o]), l.push(c), u += c.totalLength;
                                d.totalShapeLength = u, d.pathsData = l
                            }
                            f += u, d.shape._mdf = !0
                        } else d.shape.paths = d.localShapeCollection;
                    var y, v = e,
                        b = i,
                        D = 0;
                    for (n = p - 1; n >= 0; n -= 1)
                        if ((d = this.shapes[n]).shape._mdf) {
                            for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && p > 1 ? (y = this.calculateShapeEdges(e, i, d.totalShapeLength, D, f), D += d.totalShapeLength) : y = [
                                    [v, b]
                                ], h = y.length, o = 0; o < h; o += 1) {
                                v = y[o][0], b = y[o][1], g.length = 0, b <= 1 ? g.push({
                                    s: d.totalShapeLength * v,
                                    e: d.totalShapeLength * b
                                }) : v >= 1 ? g.push({
                                    s: d.totalShapeLength * (v - 1),
                                    e: d.totalShapeLength * (b - 1)
                                }) : (g.push({
                                    s: d.totalShapeLength * v,
                                    e: d.totalShapeLength
                                }), g.push({
                                    s: 0,
                                    e: d.totalShapeLength * (b - 1)
                                }));
                                var _ = this.addShapes(d, g[0]);
                                if (g[0].s !== g[0].e) {
                                    if (g.length > 1)
                                        if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                            var E = _.pop();
                                            this.addPaths(_, m), _ = this.addShapes(d, g[1], E)
                                        } else this.addPaths(_, m), _ = this.addShapes(d, g[1]);
                                    this.addPaths(_, m)
                                }
                            }
                            d.shape.paths = m
                        }
                }
            }, TrimModifier.prototype.addPaths = function(t, e) {
                var i, r = t.length;
                for (i = 0; i < r; i += 1) e.addShape(t[i])
            }, TrimModifier.prototype.addSegment = function(t, e, i, r, n, s, a) {
                n.setXYAt(e[0], e[1], "o", s), n.setXYAt(i[0], i[1], "i", s + 1), a && n.setXYAt(t[0], t[1], "v", s), n.setXYAt(r[0], r[1], "v", s + 1)
            }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) {
                e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
            }, TrimModifier.prototype.addShapes = function(t, e, i) {
                var r, n, s, a, o, h, l, c, u = t.pathsData,
                    p = t.shape.paths.shapes,
                    f = t.shape.paths._length,
                    d = 0,
                    m = [],
                    g = !0;
                for (i ? (o = i._length, c = i._length) : (i = shapePool.newElement(), o = 0, c = 0), m.push(i), r = 0; r < f; r += 1) {
                    for (h = u[r].lengths, i.c = p[r].c, s = p[r].c ? h.length : h.length + 1, n = 1; n < s; n += 1)
                        if (d + (a = h[n - 1]).addedLength < e.s) d += a.addedLength, i.c = !1;
                        else {
                            if (d > e.e) {
                                i.c = !1;
                                break
                            }
                            e.s <= d && e.e >= d + a.addedLength ? (this.addSegment(p[r].v[n - 1], p[r].o[n - 1], p[r].i[n], p[r].v[n], i, o, g), g = !1) : (l = bez.getNewSegment(p[r].v[n - 1], p[r].v[n], p[r].o[n - 1], p[r].i[n], (e.s - d) / a.addedLength, (e.e - d) / a.addedLength, h[n - 1]), this.addSegmentFromArray(l, i, o, g), g = !1, i.c = !1), d += a.addedLength, o += 1
                        } if (p[r].c && h.length) {
                        if (a = h[n - 1], d <= e.e) {
                            var y = h[n - 1].addedLength;
                            e.s <= d && e.e >= d + y ? (this.addSegment(p[r].v[n - 1], p[r].o[n - 1], p[r].i[0], p[r].v[0], i, o, g), g = !1) : (l = bez.getNewSegment(p[r].v[n - 1], p[r].v[0], p[r].o[n - 1], p[r].i[0], (e.s - d) / y, (e.e - d) / y, h[n - 1]), this.addSegmentFromArray(l, i, o, g), g = !1, i.c = !1)
                        } else i.c = !1;
                        d += a.addedLength, o += 1
                    }
                    if (i._length && (i.setXYAt(i.v[c][0], i.v[c][1], "i", c), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), d > e.e) break;
                    r < f - 1 && (i = shapePool.newElement(), g = !0, m.push(i), o = 0)
                }
                return m
            }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
            }, RoundCornersModifier.prototype.processPath = function(t, e) {
                var i, r = shapePool.newElement();
                r.c = t.c;
                var n, s, a, o, h, l, c, u, p, f, d, m, g = t._length,
                    y = 0;
                for (i = 0; i < g; i += 1) n = t.v[i], a = t.o[i], s = t.i[i], n[0] === a[0] && n[1] === a[1] && n[0] === s[0] && n[1] === s[1] ? 0 !== i && i !== g - 1 || t.c ? (o = 0 === i ? t.v[g - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, c = d = n[0] + (o[0] - n[0]) * l, u = m = n[1] - (n[1] - o[1]) * l, p = c - (c - n[0]) * roundCorner, f = u - (u - n[1]) * roundCorner, r.setTripleAt(c, u, p, f, d, m, y), y += 1, o = i === g - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, c = p = n[0] + (o[0] - n[0]) * l, u = f = n[1] + (o[1] - n[1]) * l, d = c - (c - n[0]) * roundCorner, m = u - (u - n[1]) * roundCorner, r.setTripleAt(c, u, p, f, d, m, y), y += 1) : (r.setTripleAt(n[0], n[1], a[0], a[1], s[0], s[1], y), y += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], y), y += 1);
                return r
            }, RoundCornersModifier.prototype.processShapes = function(t) {
                var e, i, r, n, s, a, o = this.shapes.length,
                    h = this.rd.v;
                if (0 !== h)
                    for (i = 0; i < o; i += 1) {
                        if (a = (s = this.shapes[i]).localShapeCollection, s.shape._mdf || this._mdf || t)
                            for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, r = 0; r < n; r += 1) a.addShape(this.processPath(e[r], h));
                        s.shape.paths = s.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
            }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
                var i = e / 100,
                    r = [0, 0],
                    n = t._length,
                    s = 0;
                for (s = 0; s < n; s += 1) r[0] += t.v[s][0], r[1] += t.v[s][1];
                r[0] /= n, r[1] /= n;
                var a, o, h, l, c, u, p = shapePool.newElement();
                for (p.c = t.c, s = 0; s < n; s += 1) a = t.v[s][0] + (r[0] - t.v[s][0]) * i, o = t.v[s][1] + (r[1] - t.v[s][1]) * i, h = t.o[s][0] + (r[0] - t.o[s][0]) * -i, l = t.o[s][1] + (r[1] - t.o[s][1]) * -i, c = t.i[s][0] + (r[0] - t.i[s][0]) * -i, u = t.i[s][1] + (r[1] - t.i[s][1]) * -i, p.setTripleAt(a, o, h, l, c, u, s);
                return p
            }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
                var e, i, r, n, s, a, o = this.shapes.length,
                    h = this.amount.v;
                if (0 !== h)
                    for (i = 0; i < o; i += 1) {
                        if (a = (s = this.shapes[i]).localShapeCollection, s.shape._mdf || this._mdf || t)
                            for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, r = 0; r < n; r += 1) a.addShape(this.processPath(e[r], h));
                        s.shape.paths = s.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
            }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, n, s) {
                var a = s ? -1 : 1,
                    o = r.s.v[0] + (1 - r.s.v[0]) * (1 - n),
                    h = r.s.v[1] + (1 - r.s.v[1]) * (1 - n);
                t.translate(r.p.v[0] * a * n, r.p.v[1] * a * n, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * a * n), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(s ? 1 / o : o, s ? 1 / h : h), i.translate(r.a.v[0], r.a.v[1], r.a.v[2])
            }, RepeaterModifier.prototype.init = function(t, e, i, r) {
                for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i]);
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }, RepeaterModifier.prototype.resetElements = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
            }, RepeaterModifier.prototype.cloneElements = function(t) {
                var e = JSON.parse(JSON.stringify(t));
                return this.resetElements(e), e
            }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                var i, r = t.length;
                for (i = 0; i < r; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
            }, RepeaterModifier.prototype.processShapes = function(t) {
                var e, i, r, n, s;
                if (this._mdf || t) {
                    var a, o = Math.ceil(this.c.v);
                    if (this._groups.length < o) {
                        for (; this._groups.length < o;) {
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
                            }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
                        }
                        this.elem.reloadShapes()
                    }
                    for (s = 0, r = 0; r <= this._groups.length - 1; r += 1) a = s < o, this._groups[r]._render = a, this.changeGroupRender(this._groups[r].it, a), s += 1;
                    this._currentCopies = o;
                    var l = this.o.v,
                        c = l % 1,
                        u = l > 0 ? Math.floor(l) : Math.ceil(l),
                        p = this.pMatrix.props,
                        f = this.rMatrix.props,
                        d = this.sMatrix.props;
                    this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                    var m, g, y = 0;
                    if (l > 0) {
                        for (; y < u;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), y += 1;
                        c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, c, !1), y += c)
                    } else if (l < 0) {
                        for (; y > u;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), y -= 1;
                        c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -c, !0), y -= c)
                    }
                    for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, n = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;) {
                        if (g = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== y) {
                            for ((0 !== r && 1 === n || r !== this._currentCopies - 1 && -1 === n) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), m = 0; m < g; m += 1) i[m] = this.matrix.props[m];
                            this.matrix.reset()
                        } else
                            for (this.matrix.reset(), m = 0; m < g; m += 1) i[m] = this.matrix.props[m];
                        y += 1, s -= 1, r += n
                    }
                } else
                    for (s = this._currentCopies, r = 0, n = 1; s;) i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, r += n
            }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
                this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
            }, ShapeCollection.prototype.releaseShapes = function() {
                var t;
                for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
                this._length = 0
            }, DashProperty.prototype.getValue = function(t) {
                if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                    var e = 0,
                        i = this.dataProps.length;
                    for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                }
            }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
                for (var i = 0, r = this.o.length / 2; i < r;) {
                    if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
                    i += 1
                }
                return !0
            }, GradientProperty.prototype.checkCollapsable = function() {
                if (this.o.length / 2 != this.c.length / 4) return !1;
                if (this.data.k.k[0].s)
                    for (var t = 0, e = this.data.k.k.length; t < e;) {
                        if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                        t += 1
                    } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                return !0
            }, GradientProperty.prototype.getValue = function(t) {
                if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                    var e, i, r, n = 4 * this.data.p;
                    for (e = 0; e < n; e += 1) i = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
                    if (this.o.length)
                        for (n = this.prop.v.length, e = 4 * this.data.p; e < n; e += 1) i = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
                    this._mdf = !t
                }
            }, extendPrototype([DynamicPropertyContainer], GradientProperty);
            var buildShapeString = function(t, e, i, r) {
                    if (0 === e) return "";
                    var n, s = t.o,
                        a = t.i,
                        o = t.v,
                        h = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
                    for (n = 1; n < e; n += 1) h += " C" + r.applyToPointStringified(s[n - 1][0], s[n - 1][1]) + " " + r.applyToPointStringified(a[n][0], a[n][1]) + " " + r.applyToPointStringified(o[n][0], o[n][1]);
                    return i && e && (h += " C" + r.applyToPointStringified(s[n - 1][0], s[n - 1][1]) + " " + r.applyToPointStringified(a[0][0], a[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
                },
                audioControllerFactory = function() {
                    function t(t) {
                        this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                    }
                    return t.prototype = {
                            addAudio: function(t) {
                                this.audios.push(t)
                            },
                            pause: function() {
                                var t, e = this.audios.length;
                                for (t = 0; t < e; t += 1) this.audios[t].pause()
                            },
                            resume: function() {
                                var t, e = this.audios.length;
                                for (t = 0; t < e; t += 1) this.audios[t].resume()
                            },
                            setRate: function(t) {
                                var e, i = this.audios.length;
                                for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
                            },
                            createAudio: function(t) {
                                return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({
                                    src: [t]
                                }) : {
                                    isPlaying: !1,
                                    play: function() {
                                        this.isPlaying = !0
                                    },
                                    seek: function() {
                                        this.isPlaying = !1
                                    },
                                    playing: function() {},
                                    rate: function() {},
                                    setVolume: function() {}
                                }
                            },
                            setAudioFactory: function(t) {
                                this.audioFactory = t
                            },
                            setVolume: function(t) {
                                this._volume = t, this._updateVolume()
                            },
                            mute: function() {
                                this._isMuted = !0, this._updateVolume()
                            },
                            unmute: function() {
                                this._isMuted = !1, this._updateVolume()
                            },
                            getVolume: function() {
                                return this._volume
                            },
                            _updateVolume: function() {
                                var t, e = this.audios.length;
                                for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                            }
                        },
                        function() {
                            return new t
                        }
                }(),
                ImagePreloader = function() {
                    var t = function() {
                        var t = createTag("canvas");
                        t.width = 1, t.height = 1;
                        var e = t.getContext("2d");
                        return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                    }();

                    function e() {
                        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                    }

                    function i(t, e, i) {
                        var r = "";
                        if (t.e) r = t.p;
                        else if (e) {
                            var n = t.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), r = e + n
                        } else r = i, r += t.u ? t.u : "", r += t.p;
                        return r
                    }

                    function r(t) {
                        var e = 0,
                            i = setInterval(function() {
                                (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
                            }.bind(this), 50)
                    }

                    function n() {
                        this._imageLoaded = e.bind(this), this.testImageLoaded = r.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = []
                    }
                    return n.prototype = {
                        loadAssets: function(t, e) {
                            var i;
                            this.imagesLoadedCb = e;
                            var r = t.length;
                            for (i = 0; i < r; i += 1) t[i].layers || (this.totalImages += 1, this.images.push(this._createImageData(t[i])))
                        },
                        setAssetsPath: function(t) {
                            this.assetsPath = t || ""
                        },
                        setPath: function(t) {
                            this.path = t || ""
                        },
                        loaded: function() {
                            return this.totalImages === this.loadedAssets
                        },
                        destroy: function() {
                            this.imagesLoadedCb = null, this.images.length = 0
                        },
                        getImage: function(t) {
                            for (var e = 0, i = this.images.length; e < i;) {
                                if (this.images[e].assetData === t) return this.images[e].img;
                                e += 1
                            }
                            return null
                        },
                        createImgData: function(e) {
                            var r = i(e, this.assetsPath, this.path),
                                n = createTag("img");
                            n.crossOrigin = "anonymous", n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                                s.img = t, this._imageLoaded()
                            }.bind(this), !1), n.src = r;
                            var s = {
                                img: n,
                                assetData: e
                            };
                            return s
                        },
                        createImageData: function(e) {
                            var r = i(e, this.assetsPath, this.path),
                                n = createNS("image");
                            isSafari ? this.testImageLoaded(n) : n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                                s.img = t, this._imageLoaded()
                            }.bind(this), !1), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append(n);
                            var s = {
                                img: n,
                                assetData: e
                            };
                            return s
                        },
                        imageLoaded: e,
                        setCacheType: function(t, e) {
                            "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                        }
                    }, n
                }(),
                featureSupport = function() {
                    var t = {
                        maskType: !0
                    };
                    return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
                }(),
                filtersFactory = function() {
                    var t = {};
                    return t.createFilter = function(t) {
                        var e = createNS("filter");
                        return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e
                    }, t.createAlphaToLuminanceFilter = function() {
                        var t = createNS("feColorMatrix");
                        return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                    }, t
                }(),
                assetLoader = function() {
                    function t(t) {
                        return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                    }
                    return {
                        load: function(e, i, r) {
                            var n, s = new XMLHttpRequest;
                            s.open("GET", e, !0);
                            try {
                                s.responseType = "json"
                            } catch (t) {}
                            s.send(), s.onreadystatechange = function() {
                                if (4 === s.readyState)
                                    if (200 === s.status) n = t(s), i(n);
                                    else try {
                                        n = t(s), i(n)
                                    } catch (t) {
                                        r && r(t)
                                    }
                            }
                        }
                    }
                }();

            function TextAnimatorProperty(t, e, i) {
                this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                    alignment: {}
                }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
            }

            function TextAnimatorDataProperty(t, e, i) {
                var r = {
                        propType: !1
                    },
                    n = PropertyFactory.getProp,
                    s = e.a;
                this.a = {
                    r: s.r ? n(t, s.r, 0, degToRads, i) : r,
                    rx: s.rx ? n(t, s.rx, 0, degToRads, i) : r,
                    ry: s.ry ? n(t, s.ry, 0, degToRads, i) : r,
                    sk: s.sk ? n(t, s.sk, 0, degToRads, i) : r,
                    sa: s.sa ? n(t, s.sa, 0, degToRads, i) : r,
                    s: s.s ? n(t, s.s, 1, .01, i) : r,
                    a: s.a ? n(t, s.a, 1, 0, i) : r,
                    o: s.o ? n(t, s.o, 0, .01, i) : r,
                    p: s.p ? n(t, s.p, 1, 0, i) : r,
                    sw: s.sw ? n(t, s.sw, 0, 0, i) : r,
                    sc: s.sc ? n(t, s.sc, 1, 0, i) : r,
                    fc: s.fc ? n(t, s.fc, 1, 0, i) : r,
                    fh: s.fh ? n(t, s.fh, 0, 0, i) : r,
                    fs: s.fs ? n(t, s.fs, 0, .01, i) : r,
                    fb: s.fb ? n(t, s.fb, 0, .01, i) : r,
                    t: s.t ? n(t, s.t, 0, 0, i) : r
                }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
            }

            function LetterProps(t, e, i, r, n, s) {
                this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = n, this.p = s, this._mdf = {
                    o: !0,
                    sw: !!e,
                    sc: !!i,
                    fc: !!r,
                    m: !0,
                    p: !0
                }
            }

            function TextProperty(t, e) {
                this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
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
                }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
            }
            TextAnimatorProperty.prototype.searchProperties = function() {
                var t, e, i = this._textData.a.length,
                    r = PropertyFactory.getProp;
                for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
                this._textData.p && "m" in this._textData.p ? (this._pathData = {
                    f: r(this._elem, this._textData.p.f, 0, 0, this),
                    l: r(this._elem, this._textData.p.l, 0, 0, this),
                    r: this._textData.p.r,
                    m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
            }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                    this._isFirstFrame = !1;
                    var i, r, n, s, a, o, h, l, c, u, p, f, d, m, g, y, v, b, D, _ = this._moreOptions.alignment.v,
                        E = this._animatorsData,
                        x = this._textData,
                        w = this.mHelper,
                        C = this._renderType,
                        S = this.renderedLetters.length,
                        P = t.l;
                    if (this._hasMaskedPath) {
                        if (D = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                            var T, A = D.v;
                            for (this._pathData.r && (A = A.reverse()), a = {
                                    tLength: 0,
                                    segments: []
                                }, s = A._length - 1, y = 0, n = 0; n < s; n += 1) T = bez.buildBezierData(A.v[n], A.v[n + 1], [A.o[n][0] - A.v[n][0], A.o[n][1] - A.v[n][1]], [A.i[n + 1][0] - A.v[n + 1][0], A.i[n + 1][1] - A.v[n + 1][1]]), a.tLength += T.segmentLength, a.segments.push(T), y += T.segmentLength;
                            n = s, D.v.c && (T = bez.buildBezierData(A.v[n], A.v[0], [A.o[n][0] - A.v[n][0], A.o[n][1] - A.v[n][1]], [A.i[0][0] - A.v[0][0], A.i[0][1] - A.v[0][1]]), a.tLength += T.segmentLength, a.segments.push(T), y += T.segmentLength), this._pathData.pi = a
                        }
                        if (a = this._pathData.pi, o = this._pathData.f.v, p = 0, u = 1, l = 0, c = !0, m = a.segments, o < 0 && D.v.c)
                            for (a.tLength < Math.abs(o) && (o = -Math.abs(o) % a.tLength), u = (d = m[p = m.length - 1].points).length - 1; o < 0;) o += d[u].partialLength, (u -= 1) < 0 && (u = (d = m[p -= 1].points).length - 1);
                        f = (d = m[p].points)[u - 1], g = (h = d[u]).partialLength
                    }
                    s = P.length, i = 0, r = 0;
                    var F, k, M, I, B, R = 1.2 * t.finalSize * .714,
                        L = !0;
                    M = E.length;
                    var O, V, z, N, G, j, H, q, W, X, Y, U, K = -1,
                        $ = o,
                        Z = p,
                        Q = u,
                        J = -1,
                        tt = "",
                        et = this.defaultPropsArray;
                    if (2 === t.j || 1 === t.j) {
                        var it = 0,
                            rt = 0,
                            nt = 2 === t.j ? -.5 : -1,
                            st = 0,
                            at = !0;
                        for (n = 0; n < s; n += 1)
                            if (P[n].n) {
                                for (it && (it += rt); st < n;) P[st].animatorJustifyOffset = it, st += 1;
                                it = 0, at = !0
                            } else {
                                for (k = 0; k < M; k += 1)(F = E[k].a).t.propType && (at && 2 === t.j && (rt += F.t.v * nt), (B = E[k].s.getMult(P[n].anIndexes[k], x.a[k].s.totalChars)).length ? it += F.t.v * B[0] * nt : it += F.t.v * B * nt);
                                at = !1
                            } for (it && (it += rt); st < n;) P[st].animatorJustifyOffset = it, st += 1
                    }
                    for (n = 0; n < s; n += 1) {
                        if (w.reset(), N = 1, P[n].n) i = 0, r += t.yOffset, r += L ? 1 : 0, o = $, L = !1, this._hasMaskedPath && (u = Q, f = (d = m[p = Z].points)[u - 1], g = (h = d[u]).partialLength, l = 0), tt = "", Y = "", W = "", U = "", et = this.defaultPropsArray;
                        else {
                            if (this._hasMaskedPath) {
                                if (J !== P[n].line) {
                                    switch (t.j) {
                                        case 1:
                                            o += y - t.lineWidths[P[n].line];
                                            break;
                                        case 2:
                                            o += (y - t.lineWidths[P[n].line]) / 2
                                    }
                                    J = P[n].line
                                }
                                K !== P[n].ind && (P[K] && (o += P[K].extra), o += P[n].an / 2, K = P[n].ind), o += _[0] * P[n].an * .005;
                                var ot = 0;
                                for (k = 0; k < M; k += 1)(F = E[k].a).p.propType && ((B = E[k].s.getMult(P[n].anIndexes[k], x.a[k].s.totalChars)).length ? ot += F.p.v[0] * B[0] : ot += F.p.v[0] * B), F.a.propType && ((B = E[k].s.getMult(P[n].anIndexes[k], x.a[k].s.totalChars)).length ? ot += F.a.v[0] * B[0] : ot += F.a.v[0] * B);
                                for (c = !0; c;) l + g >= o + ot || !d ? (v = (o + ot - l) / h.partialLength, V = f.point[0] + (h.point[0] - f.point[0]) * v, z = f.point[1] + (h.point[1] - f.point[1]) * v, w.translate(-_[0] * P[n].an * .005, -_[1] * R * .01), c = !1) : d && (l += h.partialLength, (u += 1) >= d.length && (u = 0, m[p += 1] ? d = m[p].points : D.v.c ? (u = 0, d = m[p = 0].points) : (l -= h.partialLength, d = null)), d && (f = h, g = (h = d[u]).partialLength));
                                O = P[n].an / 2 - P[n].add, w.translate(-O, 0, 0)
                            } else O = P[n].an / 2 - P[n].add, w.translate(-O, 0, 0), w.translate(-_[0] * P[n].an * .005, -_[1] * R * .01, 0);
                            for (k = 0; k < M; k += 1)(F = E[k].a).t.propType && (B = E[k].s.getMult(P[n].anIndexes[k], x.a[k].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? B.length ? o += F.t.v * B[0] : o += F.t.v * B : B.length ? i += F.t.v * B[0] : i += F.t.v * B));
                            for (t.strokeWidthAnim && (j = t.sw || 0), t.strokeColorAnim && (G = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), k = 0; k < M; k += 1)(F = E[k].a).a.propType && ((B = E[k].s.getMult(P[n].anIndexes[k], x.a[k].s.totalChars)).length ? w.translate(-F.a.v[0] * B[0], -F.a.v[1] * B[1], F.a.v[2] * B[2]) : w.translate(-F.a.v[0] * B, -F.a.v[1] * B, F.a.v[2] * B));
                            for (k = 0; k < M; k += 1)(F = E[k].a).s.propType && ((B = E[k].s.getMult(P[n].anIndexes[k], x.a[k].s.totalChars)).length ? w.scale(1 + (F.s.v[0] - 1) * B[0], 1 + (F.s.v[1] - 1) * B[1], 1) : w.scale(1 + (F.s.v[0] - 1) * B, 1 + (F.s.v[1] - 1) * B, 1));
                            for (k = 0; k < M; k += 1) {
                                if (F = E[k].a, B = E[k].s.getMult(P[n].anIndexes[k], x.a[k].s.totalChars), F.sk.propType && (B.length ? w.skewFromAxis(-F.sk.v * B[0], F.sa.v * B[1]) : w.skewFromAxis(-F.sk.v * B, F.sa.v * B)), F.r.propType && (B.length ? w.rotateZ(-F.r.v * B[2]) : w.rotateZ(-F.r.v * B)), F.ry.propType && (B.length ? w.rotateY(F.ry.v * B[1]) : w.rotateY(F.ry.v * B)), F.rx.propType && (B.length ? w.rotateX(F.rx.v * B[0]) : w.rotateX(F.rx.v * B)), F.o.propType && (B.length ? N += (F.o.v * B[0] - N) * B[0] : N += (F.o.v * B - N) * B), t.strokeWidthAnim && F.sw.propType && (B.length ? j += F.sw.v * B[0] : j += F.sw.v * B), t.strokeColorAnim && F.sc.propType)
                                    for (q = 0; q < 3; q += 1) B.length ? G[q] += (F.sc.v[q] - G[q]) * B[0] : G[q] += (F.sc.v[q] - G[q]) * B;
                                if (t.fillColorAnim && t.fc) {
                                    if (F.fc.propType)
                                        for (q = 0; q < 3; q += 1) B.length ? H[q] += (F.fc.v[q] - H[q]) * B[0] : H[q] += (F.fc.v[q] - H[q]) * B;
                                    F.fh.propType && (H = B.length ? addHueToRGB(H, F.fh.v * B[0]) : addHueToRGB(H, F.fh.v * B)), F.fs.propType && (H = B.length ? addSaturationToRGB(H, F.fs.v * B[0]) : addSaturationToRGB(H, F.fs.v * B)), F.fb.propType && (H = B.length ? addBrightnessToRGB(H, F.fb.v * B[0]) : addBrightnessToRGB(H, F.fb.v * B))
                                }
                            }
                            for (k = 0; k < M; k += 1)(F = E[k].a).p.propType && (B = E[k].s.getMult(P[n].anIndexes[k], x.a[k].s.totalChars), this._hasMaskedPath ? B.length ? w.translate(0, F.p.v[1] * B[0], -F.p.v[2] * B[1]) : w.translate(0, F.p.v[1] * B, -F.p.v[2] * B) : B.length ? w.translate(F.p.v[0] * B[0], F.p.v[1] * B[1], -F.p.v[2] * B[2]) : w.translate(F.p.v[0] * B, F.p.v[1] * B, -F.p.v[2] * B));
                            if (t.strokeWidthAnim && (W = j < 0 ? 0 : j), t.strokeColorAnim && (X = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), t.fillColorAnim && t.fc && (Y = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                                if (w.translate(0, -t.ls), w.translate(0, _[1] * R * .01 + r, 0), x.p.p) {
                                    b = (h.point[1] - f.point[1]) / (h.point[0] - f.point[0]);
                                    var ht = 180 * Math.atan(b) / Math.PI;
                                    h.point[0] < f.point[0] && (ht += 180), w.rotate(-ht * Math.PI / 180)
                                }
                                w.translate(V, z, 0), o -= _[0] * P[n].an * .005, P[n + 1] && K !== P[n + 1].ind && (o += P[n].an / 2, o += .001 * t.tr * t.finalSize)
                            } else {
                                switch (w.translate(i, r, 0), t.ps && w.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                    case 1:
                                        w.translate(P[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[P[n].line]), 0, 0);
                                        break;
                                    case 2:
                                        w.translate(P[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[P[n].line]) / 2, 0, 0)
                                }
                                w.translate(0, -t.ls), w.translate(O, 0, 0), w.translate(_[0] * P[n].an * .005, _[1] * R * .01, 0), i += P[n].l + .001 * t.tr * t.finalSize
                            }
                            "html" === C ? tt = w.toCSS() : "svg" === C ? tt = w.to2dCSS() : et = [w.props[0], w.props[1], w.props[2], w.props[3], w.props[4], w.props[5], w.props[6], w.props[7], w.props[8], w.props[9], w.props[10], w.props[11], w.props[12], w.props[13], w.props[14], w.props[15]], U = N
                        }
                        S <= n ? (I = new LetterProps(U, W, X, Y, tt, et), this.renderedLetters.push(I), S += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[n], this.lettersChangedFlag = I.update(U, W, X, Y, tt, et) || this.lettersChangedFlag)
                    }
                }
            }, TextAnimatorProperty.prototype.getValue = function() {
                this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
            }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, i, r, n, s) {
                this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                var a = !1;
                return this.o !== t && (this.o = t, this._mdf.o = !0, a = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, a = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, a = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, a = !0), this.m !== n && (this.m = n, this._mdf.m = !0, a = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this._mdf.p = !0, a = !0), a
            }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, TextProperty.prototype.setCurrentData = function(t) {
                t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
            }, TextProperty.prototype.searchProperty = function() {
                return this.searchKeyframes()
            }, TextProperty.prototype.searchKeyframes = function() {
                return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
            }, TextProperty.prototype.addEffect = function(t) {
                this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.getValue = function(t) {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var e = this.currentData,
                        i = this.keysIndex;
                    if (this.lock) this.setCurrentData(this.currentData);
                    else {
                        var r;
                        this.lock = !0, this._mdf = !1;
                        var n = this.effectsSequence.length,
                            s = t || this.data.d.k[this.keysIndex].s;
                        for (r = 0; r < n; r += 1) s = i !== this.keysIndex ? this.effectsSequence[r](s, s.t) : this.effectsSequence[r](this.currentData, s.t);
                        e !== s && this.setCurrentData(s), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }
            }, TextProperty.prototype.getKeyframeValue = function() {
                for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);) i += 1;
                return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
            }, TextProperty.prototype.buildFinalText = function(t) {
                for (var e, i = FontManager.getCombinedCharacterCodes(), r = [], n = 0, s = t.length; n < s;) e = t.charCodeAt(n), -1 !== i.indexOf(e) ? r[r.length - 1] += t.charAt(n) : e >= 55296 && e <= 56319 && (e = t.charCodeAt(n + 1)) >= 56320 && e <= 57343 ? (r.push(t.substr(n, 2)), n += 1) : r.push(t.charAt(n)), n += 1;
                return r
            }, TextProperty.prototype.completeTextData = function(t) {
                t.__complete = !0;
                var e, i, r, n, s, a, o, h = this.elem.globalData.fontManager,
                    l = this.data,
                    c = [],
                    u = 0,
                    p = l.m.g,
                    f = 0,
                    d = 0,
                    m = 0,
                    g = [],
                    y = 0,
                    v = 0,
                    b = h.getFontByName(t.f),
                    D = 0,
                    _ = getFontProperties(b);
                t.fWeight = _.weight, t.fStyle = _.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
                var E, x = t.tr / 1e3 * t.finalSize;
                if (t.sz)
                    for (var w, C, S = !0, P = t.sz[0], T = t.sz[1]; S;) {
                        w = 0, y = 0, i = (C = this.buildFinalText(t.t)).length, x = t.tr / 1e3 * t.finalSize;
                        var A = -1;
                        for (e = 0; e < i; e += 1) E = C[e].charCodeAt(0), r = !1, " " === C[e] ? A = e : 13 !== E && 3 !== E || (y = 0, r = !0, w += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(C[e], b.fStyle, b.fFamily), D = r ? 0 : o.w * t.finalSize / 100) : D = h.measureText(C[e], t.f, t.finalSize), y + D > P && " " !== C[e] ? (-1 === A ? i += 1 : e = A, w += t.finalLineHeight || 1.2 * t.finalSize, C.splice(e, A === e ? 1 : 0, "\r"), A = -1, y = 0) : (y += D, y += x);
                        w += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && T < w ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = C, i = t.finalText.length, S = !1)
                    }
                y = -x, D = 0;
                var F, k = 0;
                for (e = 0; e < i; e += 1)
                    if (r = !1, 13 === (E = (F = t.finalText[e]).charCodeAt(0)) || 3 === E ? (k = 0, g.push(y), v = y > v ? y : v, y = -2 * x, n = "", r = !0, m += 1) : n = F, h.chars ? (o = h.getCharData(F, b.fStyle, h.getFontByName(t.f).fFamily), D = r ? 0 : o.w * t.finalSize / 100) : D = h.measureText(n, t.f, t.finalSize), " " === F ? k += D + x : (y += D + x + k, k = 0), c.push({
                            l: D,
                            an: D,
                            add: f,
                            n: r,
                            anIndexes: [],
                            val: n,
                            line: m,
                            animatorJustifyOffset: 0
                        }), 2 == p) {
                        if (f += D, "" === n || " " === n || e === i - 1) {
                            for ("" !== n && " " !== n || (f -= D); d <= e;) c[d].an = f, c[d].ind = u, c[d].extra = D, d += 1;
                            u += 1, f = 0
                        }
                    } else if (3 == p) {
                    if (f += D, "" === n || e === i - 1) {
                        for ("" === n && (f -= D); d <= e;) c[d].an = f, c[d].ind = u, c[d].extra = D, d += 1;
                        f = 0, u += 1
                    }
                } else c[u].ind = u, c[u].extra = 0, u += 1;
                if (t.l = c, v = y > v ? y : v, g.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                else switch (t.boxWidth = v, t.j) {
                    case 1:
                        t.justifyOffset = -t.boxWidth;
                        break;
                    case 2:
                        t.justifyOffset = -t.boxWidth / 2;
                        break;
                    default:
                        t.justifyOffset = 0
                }
                t.lineWidths = g;
                var M, I, B, R, L = l.a;
                a = L.length;
                var O = [];
                for (s = 0; s < a; s += 1) {
                    for ((M = L[s]).a.sc && (t.strokeColorAnim = !0), M.a.sw && (t.strokeWidthAnim = !0), (M.a.fc || M.a.fh || M.a.fs || M.a.fb) && (t.fillColorAnim = !0), R = 0, B = M.s.b, e = 0; e < i; e += 1)(I = c[e]).anIndexes[s] = R, (1 == B && "" !== I.val || 2 == B && "" !== I.val && " " !== I.val || 3 == B && (I.n || " " == I.val || e == i - 1) || 4 == B && (I.n || e == i - 1)) && (1 === M.s.rn && O.push(R), R += 1);
                    l.a[s].s.totalChars = R;
                    var V, z = -1;
                    if (1 === M.s.rn)
                        for (e = 0; e < i; e += 1) z != (I = c[e]).anIndexes[s] && (z = I.anIndexes[s], V = O.splice(Math.floor(Math.random() * O.length), 1)[0]), I.anIndexes[s] = V
                }
                t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
            }, TextProperty.prototype.updateDocumentData = function(t, e) {
                e = void 0 === e ? this.keysIndex : e;
                var i = this.copyData({}, this.data.d.k[e].s);
                i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.recalculate = function(t) {
                var e = this.data.d.k[t].s;
                e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
            }, TextProperty.prototype.canResizeFont = function(t) {
                this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.setMinimumFontSize = function(t) {
                this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
            };
            var TextSelectorProp = function() {
                    var t = Math.max,
                        e = Math.min,
                        i = Math.floor;

                    function r(t, e) {
                        this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                            k: 0
                        }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                            v: 100
                        }, this.o = PropertyFactory.getProp(t, e.o || {
                            k: 0
                        }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                            k: 0
                        }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                            k: 0
                        }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                    }
                    return r.prototype = {
                        getMult: function(r) {
                            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                            var n = 0,
                                s = 0,
                                a = 1,
                                o = 1;
                            this.ne.v > 0 ? n = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? a = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                            var h = BezierFactory.getBezierEasing(n, s, a, o).get,
                                l = 0,
                                c = this.finalS,
                                u = this.finalE,
                                p = this.data.sh;
                            if (2 === p) l = h(l = u === c ? r >= u ? 1 : 0 : t(0, e(.5 / (u - c) + (r - c) / (u - c), 1)));
                            else if (3 === p) l = h(l = u === c ? r >= u ? 0 : 1 : 1 - t(0, e(.5 / (u - c) + (r - c) / (u - c), 1)));
                            else if (4 === p) u === c ? l = 0 : (l = t(0, e(.5 / (u - c) + (r - c) / (u - c), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
                            else if (5 === p) {
                                if (u === c) l = 0;
                                else {
                                    var f = u - c,
                                        d = -f / 2 + (r = e(t(0, r + .5 - c), u - c)),
                                        m = f / 2;
                                    l = Math.sqrt(1 - d * d / (m * m))
                                }
                                l = h(l)
                            } else 6 === p ? (u === c ? l = 0 : (r = e(t(0, r + .5 - c), u - c), l = (1 + Math.cos(Math.PI + 2 * Math.PI * r / (u - c))) / 2), l = h(l)) : (r >= i(c) && (l = t(0, e(r - c < 0 ? e(u, 1) - (c - r) : u - r, 1))), l = h(l));
                            return l * this.a.v
                        },
                        getValue: function(t) {
                            this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                            var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                i = this.o.v / e,
                                r = this.s.v / e + i,
                                n = this.e.v / e + i;
                            if (r > n) {
                                var s = r;
                                r = n, n = s
                            }
                            this.finalS = r, this.finalE = n
                        }
                    }, extendPrototype([DynamicPropertyContainer], r), {
                        getTextSelectorProp: function(t, e, i) {
                            return new r(t, e, i)
                        }
                    }
                }(),
                poolFactory = function(t, e, i) {
                    var r = 0,
                        n = t,
                        s = createSizedArray(n);
                    return {
                        newElement: function() {
                            return r ? s[r -= 1] : e()
                        },
                        release: function(t) {
                            r === n && (s = pooling.double(s), n *= 2), i && i(t), s[r] = t, r += 1
                        }
                    }
                },
                pooling = {
                    double: function(t) {
                        return t.concat(createSizedArray(t.length))
                    }
                },
                pointPool = poolFactory(8, (function() {
                    return createTypedArray("float32", 2)
                })),
                shapePool = (factory = poolFactory(4, (function() {
                    return new ShapePath
                }), (function(t) {
                    var e, i = t._length;
                    for (e = 0; e < i; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                    t._length = 0, t.c = !1
                })), factory.clone = function(t) {
                    var e, i = factory.newElement(),
                        r = void 0 === t._length ? t.v.length : t._length;
                    for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                    return i
                }, factory),
                factory, shapeCollectionPool = function() {
                    var t = {
                            newShapeCollection: function() {
                                var t;
                                t = e ? r[e -= 1] : new ShapeCollection;
                                return t
                            },
                            release: function(t) {
                                var n, s = t._length;
                                for (n = 0; n < s; n += 1) shapePool.release(t.shapes[n]);
                                t._length = 0, e === i && (r = pooling.double(r), i *= 2);
                                r[e] = t, e += 1
                            }
                        },
                        e = 0,
                        i = 4,
                        r = createSizedArray(i);
                    return t
                }(),
                segmentsLengthPool = poolFactory(8, (function() {
                    return {
                        lengths: [],
                        totalLength: 0
                    }
                }), (function(t) {
                    var e, i = t.lengths.length;
                    for (e = 0; e < i; e += 1) bezierLengthPool.release(t.lengths[e]);
                    t.lengths.length = 0
                })),
                bezierLengthPool = poolFactory(8, (function() {
                    return {
                        addedLength: 0,
                        percents: createTypedArray("float32", defaultCurveSegments),
                        lengths: createTypedArray("float32", defaultCurveSegments)
                    }
                }));

            function BaseRenderer() {}

            function SVGRenderer(t, e) {
                this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                var i = "";
                if (e && e.title) {
                    var r = createNS("title"),
                        n = createElementID();
                    r.setAttribute("id", n), r.textContent = e.title, this.svgElement.appendChild(r), i += n
                }
                if (e && e.description) {
                    var s = createNS("desc"),
                        a = createElementID();
                    s.setAttribute("id", a), s.textContent = e.description, this.svgElement.appendChild(s), i += " " + a
                }
                i && this.svgElement.setAttribute("aria-labelledby", i);
                var o = createNS("defs");
                this.svgElement.appendChild(o);
                var h = createNS("g");
                this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    progressiveLoad: e && e.progressiveLoad || !1,
                    hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                    viewBoxOnly: e && e.viewBoxOnly || !1,
                    viewBoxSize: e && e.viewBoxSize || !1,
                    className: e && e.className || "",
                    id: e && e.id || "",
                    focusable: e && e.focusable,
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "100%",
                        height: e && e.filterSize && e.filterSize.height || "100%",
                        x: e && e.filterSize && e.filterSize.x || "0%",
                        y: e && e.filterSize && e.filterSize.y || "0%"
                    }
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    defs: o,
                    renderConfig: this.renderConfig
                }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
            }

            function CanvasRenderer(t, e) {
                this.animationItem = t, this.renderConfig = {
                    clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                    context: e && e.context || null,
                    progressiveLoad: e && e.progressiveLoad || !1,
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    className: e && e.className || "",
                    id: e && e.id || ""
                }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                    frameNum: -1,
                    _mdf: !1,
                    renderConfig: this.renderConfig,
                    currentGlobalAlpha: -1
                }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
            }

            function HybridRenderer(t, e) {
                this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                    className: e && e.className || "",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "400%",
                        height: e && e.filterSize && e.filterSize.height || "400%",
                        x: e && e.filterSize && e.filterSize.x || "-100%",
                        y: e && e.filterSize && e.filterSize.y || "-100%"
                    }
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
            }

            function MaskElement(t, e, i) {
                this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                var r, n, s = this.globalData.defs,
                    a = this.masksProperties ? this.masksProperties.length : 0;
                this.viewData = createSizedArray(a), this.solidPath = "";
                var o, h, l, c, u, p, f = this.masksProperties,
                    d = 0,
                    m = [],
                    g = createElementID(),
                    y = "clipPath",
                    v = "clip-path";
                for (r = 0; r < a; r += 1)
                    if (("a" !== f[r].mode && "n" !== f[r].mode || f[r].inv || 100 !== f[r].o.k || f[r].o.x) && (y = "mask", v = "mask"), "s" !== f[r].mode && "i" !== f[r].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), m.push(l)), n = createNS("path"), "n" === f[r].mode) this.viewData[r] = {
                        op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
                        elem: n,
                        lastPath: ""
                    }, s.appendChild(n);
                    else {
                        var b;
                        if (d += 1, n.setAttribute("fill", "s" === f[r].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== f[r].x.k ? (y = "mask", v = "mask", p = PropertyFactory.getProp(this.element, f[r].x, 0, null, this.element), b = createElementID(), (c = createNS("filter")).setAttribute("id", b), (u = createNS("feMorphology")).setAttribute("operator", "erode"), u.setAttribute("in", "SourceGraphic"), u.setAttribute("radius", "0"), c.appendChild(u), s.appendChild(c), n.setAttribute("stroke", "s" === f[r].mode ? "#000000" : "#ffffff")) : (u = null, p = null), this.storedData[r] = {
                                elem: n,
                                x: p,
                                expan: u,
                                lastPath: "",
                                lastOperator: "",
                                filterId: b,
                                lastRadius: 0
                            }, "i" === f[r].mode) {
                            h = m.length;
                            var D = createNS("g");
                            for (o = 0; o < h; o += 1) D.appendChild(m[o]);
                            var _ = createNS("mask");
                            _.setAttribute("mask-type", "alpha"), _.setAttribute("id", g + "_" + d), _.appendChild(n), s.appendChild(_), D.setAttribute("mask", "url(" + locationHref + "#" + g + "_" + d + ")"), m.length = 0, m.push(D)
                        } else m.push(n);
                        f[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
                            elem: n,
                            lastPath: "",
                            op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
                            invRect: l
                        }, this.viewData[r].prop.k || this.drawPath(f[r], this.viewData[r].prop.v, this.viewData[r])
                    } for (this.maskElement = createNS(y), a = m.length, r = 0; r < a; r += 1) this.maskElement.appendChild(m[r]);
                d > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + g + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
            }

            function HierarchyElement() {}

            function FrameElement() {}

            function TransformElement() {}

            function RenderableElement() {}

            function RenderableDOMElement() {}

            function ProcessedElement(t, e) {
                this.elem = t, this.pos = e
            }

            function SVGStyleData(t, e) {
                this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
            }

            function SVGShapeData(t, e, i) {
                this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
                for (var r = 0, n = t.length; r < n;) {
                    if (t[r].mProps.dynamicProperties.length) {
                        this._isAnimated = !0;
                        break
                    }
                    r += 1
                }
            }

            function SVGTransformData(t, e, i) {
                this.transform = {
                    mProps: t,
                    op: e,
                    container: i
                }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
            }

            function SVGStrokeStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
            }

            function SVGFillStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i
            }

            function SVGGradientFillStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
            }

            function SVGGradientStrokeStyleData(t, e, i) {
                this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
            }

            function ShapeGroupData() {
                this.it = [], this.prevViewData = [], this.gr = createNS("g")
            }
            BaseRenderer.prototype.checkLayers = function(t) {
                var e, i, r = this.layers.length;
                for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                this.checkPendingElements()
            }, BaseRenderer.prototype.createItem = function(t) {
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
                    case 6:
                        return this.createAudio(t);
                    case 13:
                        return this.createCamera(t);
                    default:
                        return this.createNull(t)
                }
            }, BaseRenderer.prototype.createCamera = function() {
                throw new Error("You're using a 3d camera. Try the html renderer.")
            }, BaseRenderer.prototype.createAudio = function(t) {
                return new AudioElement(t, this.globalData, this)
            }, BaseRenderer.prototype.buildAllItems = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1) this.buildItem(t);
                this.checkPendingElements()
            }, BaseRenderer.prototype.includeLayers = function(t) {
                var e;
                this.completeLayers = !1;
                var i, r = t.length,
                    n = this.layers.length;
                for (e = 0; e < r; e += 1)
                    for (i = 0; i < n;) {
                        if (this.layers[i].id === t[e].id) {
                            this.layers[i] = t[e];
                            break
                        }
                        i += 1
                    }
            }, BaseRenderer.prototype.setProjectInterface = function(t) {
                this.globalData.projectInterface = t
            }, BaseRenderer.prototype.initItems = function() {
                this.globalData.progressiveLoad || this.buildAllItems()
            }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
                for (var r = this.elements, n = this.layers, s = 0, a = n.length; s < a;) n[s].ind == e && (r[s] && !0 !== r[s] ? (i.push(r[s]), r[s].setAsParent(), void 0 !== n[s].parent ? this.buildElementParenting(t, n[s].parent, i) : t.setHierarchy(i)) : (this.buildItem(s), this.addPendingElement(t))), s += 1
            }, BaseRenderer.prototype.addPendingElement = function(t) {
                this.pendingElements.push(t)
            }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1)
                    if (t[e].xt) {
                        var r = this.createComp(t[e]);
                        r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
                    }
            }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
                this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                    w: t.w,
                    h: t.h
                }
            }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
                return new NullElement(t, this.globalData, this)
            }, SVGRenderer.prototype.createShape = function(t) {
                return new SVGShapeElement(t, this.globalData, this)
            }, SVGRenderer.prototype.createText = function(t) {
                return new SVGTextLottieElement(t, this.globalData, this)
            }, SVGRenderer.prototype.createImage = function(t) {
                return new IImageElement(t, this.globalData, this)
            }, SVGRenderer.prototype.createComp = function(t) {
                return new SVGCompElement(t, this.globalData, this)
            }, SVGRenderer.prototype.createSolid = function(t) {
                return new ISolidElement(t, this.globalData, this)
            }, SVGRenderer.prototype.configAnimation = function(t) {
                this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                var e = this.globalData.defs;
                this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                var i = createNS("clipPath"),
                    r = createNS("rect");
                r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
                var n = createElementID();
                i.setAttribute("id", n), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + n + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
            }, SVGRenderer.prototype.destroy = function() {
                var t;
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                var e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
                this.elements.length = 0, this.destroyed = !0, this.animationItem = null
            }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && 99 !== this.layers[t].ty) {
                    e[t] = !0;
                    var i = this.createItem(this.layers[t]);
                    e[t] = i, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? i.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(i)))
                }
            }, SVGRenderer.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) {
                    var t = this.pendingElements.pop();
                    if (t.checkParenting(), t.data.tt)
                        for (var e = 0, i = this.elements.length; e < i;) {
                            if (this.elements[e] === t) {
                                t.setMatte(this.elements[e - 1].layerId);
                                break
                            }
                            e += 1
                        }
                }
            }, SVGRenderer.prototype.renderFrame = function(t) {
                if (this.renderedFrame !== t && !this.destroyed) {
                    var e;
                    null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                    var i = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                    if (this.globalData._mdf)
                        for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                }
            }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
                var i = t.getBaseElement();
                if (i) {
                    for (var r, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement() && (r = this.elements[n].getBaseElement()), n += 1;
                    r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i)
                }
            }, SVGRenderer.prototype.hide = function() {
                this.layerElement.style.display = "none"
            }, SVGRenderer.prototype.show = function() {
                this.layerElement.style.display = "block"
            }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
                return new CVShapeElement(t, this.globalData, this)
            }, CanvasRenderer.prototype.createText = function(t) {
                return new CVTextElement(t, this.globalData, this)
            }, CanvasRenderer.prototype.createImage = function(t) {
                return new CVImageElement(t, this.globalData, this)
            }, CanvasRenderer.prototype.createComp = function(t) {
                return new CVCompElement(t, this.globalData, this)
            }, CanvasRenderer.prototype.createSolid = function(t) {
                return new CVSolidElement(t, this.globalData, this)
            }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
                if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                    if (this.renderConfig.clearCanvas) {
                        this.transformMat.cloneFromProps(t);
                        var e = this.contextData.cTr.props;
                        this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                        var i = this.contextData.cTr.props;
                        this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
                    } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
            }, CanvasRenderer.prototype.ctxOpacity = function(t) {
                if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
                this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
            }, CanvasRenderer.prototype.reset = function() {
                this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
            }, CanvasRenderer.prototype.save = function(t) {
                if (this.renderConfig.clearCanvas) {
                    t && this.canvasContext.save();
                    var e, i = this.contextData.cTr.props;
                    this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                    var r = this.contextData.saved[this.contextData.cArrPos];
                    for (e = 0; e < 16; e += 1) r[e] = i[e];
                    this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
                } else this.canvasContext.save()
            }, CanvasRenderer.prototype.restore = function(t) {
                if (this.renderConfig.clearCanvas) {
                    t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                    var e, i = this.contextData.saved[this.contextData.cArrPos],
                        r = this.contextData.cTr.props;
                    for (e = 0; e < 16; e += 1) r[e] = i[e];
                    this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), i = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = i, this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i, this.globalData.currentGlobalAlpha = i)
                } else this.canvasContext.restore()
            }, CanvasRenderer.prototype.configAnimation = function(t) {
                if (this.animationItem.wrapper) {
                    this.animationItem.container = createTag("canvas");
                    var e = this.animationItem.container.style;
                    e.width = "100%", e.height = "100%";
                    var i = "0px 0px 0px";
                    e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e["-webkit-transform"] = i, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                } else this.canvasContext = this.renderConfig.context;
                this.data = t, this.layers = t.layers, this.transformCanvas = {
                    w: t.w,
                    h: t.h,
                    sx: 0,
                    sy: 0,
                    tx: 0,
                    ty: 0
                }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
            }, CanvasRenderer.prototype.updateContainerSize = function() {
                var t, e, i, r;
                if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                    var n = this.renderConfig.preserveAspectRatio.split(" "),
                        s = n[1] || "meet",
                        a = n[0] || "xMidYMid",
                        o = a.substr(0, 4),
                        h = a.substr(4);
                    i = t / e, (r = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === s || r < i && "slice" === s ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (r < i && "meet" === s || r > i && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (r < i && "meet" === s || r > i && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (r > i && "meet" === s || r < i && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (r > i && "meet" === s || r < i && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
            }, CanvasRenderer.prototype.destroy = function() {
                var t;
                for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
            }, CanvasRenderer.prototype.renderFrame = function(t, e) {
                if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                    var i;
                    this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                    var r = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t), i = 0; i < r; i += 1)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                    if (this.globalData._mdf) {
                        for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
                        !0 !== this.renderConfig.clearCanvas && this.restore()
                    }
                }
            }, CanvasRenderer.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && 99 !== this.layers[t].ty) {
                    var i = this.createItem(this.layers[t], this, this.globalData);
                    e[t] = i, i.initExpressions()
                }
            }, CanvasRenderer.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) {
                    this.pendingElements.pop().checkParenting()
                }
            }, CanvasRenderer.prototype.hide = function() {
                this.animationItem.container.style.display = "none"
            }, CanvasRenderer.prototype.show = function() {
                this.animationItem.container.style.display = "block"
            }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) {
                    this.pendingElements.pop().checkParenting()
                }
            }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
                var i = t.getBaseElement();
                if (i) {
                    var r = this.layers[e];
                    if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);
                    else if (this.threeDElements) this.addTo3dContainer(i, e);
                    else {
                        for (var n, s, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a], n = (this.layers[a].ddd ? this.getThreeDContainerByPos(a) : s.getBaseElement()) || n), a += 1;
                        n ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, n) : r.ddd && this.supports3d || this.layerElement.appendChild(i)
                    }
                }
            }, HybridRenderer.prototype.createShape = function(t) {
                return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
            }, HybridRenderer.prototype.createText = function(t) {
                return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
            }, HybridRenderer.prototype.createCamera = function(t) {
                return this.camera = new HCameraElement(t, this.globalData, this), this.camera
            }, HybridRenderer.prototype.createImage = function(t) {
                return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
            }, HybridRenderer.prototype.createComp = function(t) {
                return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
            }, HybridRenderer.prototype.createSolid = function(t) {
                return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
            }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
                for (var e = 0, i = this.threeDElements.length; e < i;) {
                    if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                    e += 1
                }
                return null
            }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
                var i, r, n = createTag("div");
                styleDiv(n);
                var s = createTag("div");
                if (styleDiv(s), "3d" === e) {
                    (i = n.style).width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
                    i.webkitTransformOrigin = "50% 50%", i.mozTransformOrigin = "50% 50%", i.transformOrigin = "50% 50%";
                    var a = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    (r = s.style).transform = a, r.webkitTransform = a
                }
                n.appendChild(s);
                var o = {
                    container: s,
                    perspectiveElem: n,
                    startPos: t,
                    endPos: t,
                    type: e
                };
                return this.threeDElements.push(o), o
            }, HybridRenderer.prototype.build3dContainers = function() {
                var t, e, i = this.layers.length,
                    r = "";
                for (t = 0; t < i; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== r && (r = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== r && (r = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
                for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
            }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
                for (var i = 0, r = this.threeDElements.length; i < r;) {
                    if (e <= this.threeDElements[i].endPos) {
                        for (var n, s = this.threeDElements[i].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (n = this.elements[s].getBaseElement()), s += 1;
                        n ? this.threeDElements[i].container.insertBefore(t, n) : this.threeDElements[i].container.appendChild(t);
                        break
                    }
                    i += 1
                }
            }, HybridRenderer.prototype.configAnimation = function(t) {
                var e = createTag("div"),
                    i = this.animationItem.wrapper,
                    r = e.style;
                r.width = t.w + "px", r.height = t.h + "px", this.resizerElem = e, styleDiv(e), r.transformStyle = "flat", r.mozTransformStyle = "flat", r.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), r.overflow = "hidden";
                var n = createNS("svg");
                n.setAttribute("width", "1"), n.setAttribute("height", "1"), styleDiv(n), this.resizerElem.appendChild(n);
                var s = createNS("defs");
                n.appendChild(s), this.data = t, this.setupGlobalData(t, n), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
            }, HybridRenderer.prototype.destroy = function() {
                var t;
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                var e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t += 1) this.elements[t].destroy();
                this.elements.length = 0, this.destroyed = !0, this.animationItem = null
            }, HybridRenderer.prototype.updateContainerSize = function() {
                var t, e, i, r, n = this.animationItem.wrapper.offsetWidth,
                    s = this.animationItem.wrapper.offsetHeight,
                    a = n / s;
                this.globalData.compSize.w / this.globalData.compSize.h > a ? (t = n / this.globalData.compSize.w, e = n / this.globalData.compSize.w, i = 0, r = (s - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, i = (n - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, r = 0);
                var o = this.resizerElem.style;
                o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)", o.transform = o.webkitTransform
            }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
                this.resizerElem.style.display = "none"
            }, HybridRenderer.prototype.show = function() {
                this.resizerElem.style.display = "block"
            }, HybridRenderer.prototype.initItems = function() {
                if (this.buildAllItems(), this.camera) this.camera.setup();
                else {
                    var t, e = this.globalData.compSize.w,
                        i = this.globalData.compSize.h,
                        r = this.threeDElements.length;
                    for (t = 0; t < r; t += 1) {
                        var n = this.threeDElements[t].perspectiveElem.style;
                        n.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px", n.perspective = n.webkitPerspective
                    }
                }
            }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
                var e, i = t.length,
                    r = createTag("div");
                for (e = 0; e < i; e += 1)
                    if (t[e].xt) {
                        var n = this.createComp(t[e], r, this.globalData.comp, null);
                        n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
                    }
            }, MaskElement.prototype.getMaskProperty = function(t) {
                return this.viewData[t].prop
            }, MaskElement.prototype.renderFrame = function(t) {
                var e, i = this.element.finalTransform.mat,
                    r = this.masksProperties.length;
                for (e = 0; e < r; e += 1)
                    if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                        var n = this.storedData[e].expan;
                        this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), n.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                    }
            }, MaskElement.prototype.getMaskelement = function() {
                return this.maskElement
            }, MaskElement.prototype.createLayerSolidPath = function() {
                var t = "M0,0 ";
                return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
            }, MaskElement.prototype.drawPath = function(t, e, i) {
                var r, n, s = " M" + e.v[0][0] + "," + e.v[0][1];
                for (n = e._length, r = 1; r < n; r += 1) s += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
                if (e.c && n > 1 && (s += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== s) {
                    var a = "";
                    i.elem && (e.c && (a = t.inv ? this.solidPath + s : s), i.elem.setAttribute("d", a)), i.lastPath = s
                }
            }, MaskElement.prototype.destroy = function() {
                this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
            }, HierarchyElement.prototype = {
                initHierarchy: function() {
                    this.hierarchy = [], this._isParent = !1, this.checkParenting()
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
            }, FrameElement.prototype = {
                initFrame: function() {
                    this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                },
                prepareProperties: function(t, e) {
                    var i, r = this.dynamicProperties.length;
                    for (i = 0; i < r; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                },
                addDynamicProperty: function(t) {
                    -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                }
            }, TransformElement.prototype = {
                initTransform: function() {
                    this.finalTransform = {
                        mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                            o: 0
                        },
                        _matMdf: !1,
                        _opMdf: !1,
                        mat: new Matrix
                    }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                },
                renderTransform: function() {
                    if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                        var t, e = this.finalTransform.mat,
                            i = 0,
                            r = this.hierarchy.length;
                        if (!this.finalTransform._matMdf)
                            for (; i < r;) {
                                if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                    this.finalTransform._matMdf = !0;
                                    break
                                }
                                i += 1
                            }
                        if (this.finalTransform._matMdf)
                            for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1) t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                    }
                },
                globalToLocal: function(t) {
                    var e = [];
                    e.push(this.finalTransform);
                    for (var i, r = !0, n = this.comp; r;) n.finalTransform ? (n.data.hasMask && e.splice(0, 0, n.finalTransform), n = n.comp) : r = !1;
                    var s, a = e.length;
                    for (i = 0; i < a; i += 1) s = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - s[0], t[1] - s[1], 0];
                    return t
                },
                mHelper: new Matrix
            }, RenderableElement.prototype = {
                initRenderable: function() {
                    this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
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
                    this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                },
                checkLayerLimits: function(t) {
                    this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                },
                renderRenderable: function() {
                    var t, e = this.renderableComponents.length;
                    for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
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
            }, extendPrototype([RenderableElement, createProxyFunction({
                initElement: function(t, e, i) {
                    this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                },
                hide: function() {
                    this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                },
                show: function() {
                    this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                renderInnerContent: function() {},
                prepareFrame: function(t) {
                    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                },
                destroy: function() {
                    this.innerElem = null, this.destroyBaseElement()
                }
            })], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
                this.d = "", this._mdf = !1
            }, SVGShapeData.prototype.setAsAnimated = function() {
                this._isAnimated = !0
            }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                    k: 0
                }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                    k: 0
                }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
            }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                var i = createElementID(),
                    r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
                var n, s, a, o = [];
                for (a = 4 * e.g.p, s = 0; s < a; s += 4) n = createNS("stop"), r.appendChild(n), o.push(n);
                t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + i + ")"), this.gf = r, this.cst = o
            }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var i, r, n, s = createNS("mask"),
                        a = createNS("path");
                    s.appendChild(a);
                    var o = createElementID(),
                        h = createElementID();
                    s.setAttribute("id", h);
                    var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                    l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                    var c = this.stops;
                    for (r = 4 * t.g.p; r < n; r += 2)(i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(i), c.push(i);
                    a.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = l, this.ms = s, this.ost = c, this.maskId = h, e.msElem = a
                }
            }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
            var SVGElementsRenderer = function() {
                var t = new Matrix,
                    e = new Matrix;

                function i(t, e, i) {
                    (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                }

                function r(i, r, n) {
                    var s, a, o, h, l, c, u, p, f, d, m, g = r.styles.length,
                        y = r.lvl;
                    for (c = 0; c < g; c += 1) {
                        if (h = r.sh._mdf || n, r.styles[c].lvl < y) {
                            for (p = e.reset(), d = y - r.styles[c].lvl, m = r.transformers.length - 1; !h && d > 0;) h = r.transformers[m].mProps._mdf || h, d -= 1, m -= 1;
                            if (h)
                                for (d = y - r.styles[c].lvl, m = r.transformers.length - 1; d > 0;) f = r.transformers[m].mProps.v.props, p.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), d -= 1, m -= 1
                        } else p = t;
                        if (a = (u = r.sh.paths)._length, h) {
                            for (o = "", s = 0; s < a; s += 1)(l = u.shapes[s]) && l._length && (o += buildShapeString(l, l._length, l.c, p));
                            r.caches[c] = o
                        } else o = r.caches[c];
                        r.styles[c].d += !0 === i.hd ? "" : o, r.styles[c]._mdf = h || r.styles[c]._mdf
                    }
                }

                function n(t, e, i) {
                    var r = e.style;
                    (e.c._mdf || i) && r.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v)
                }

                function s(t, e, i) {
                    a(t, e, i), o(t, e, i)
                }

                function a(t, e, i) {
                    var r, n, s, a, o, h = e.gf,
                        l = e.g._hasOpacity,
                        c = e.s.v,
                        u = e.e.v;
                    if (e.o._mdf || i) {
                        var p = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                        e.style.pElem.setAttribute(p, e.o.v)
                    }
                    if (e.s._mdf || i) {
                        var f = 1 === t.t ? "x1" : "cx",
                            d = "x1" === f ? "y1" : "cy";
                        h.setAttribute(f, c[0]), h.setAttribute(d, c[1]), l && !e.g._collapsable && (e.of.setAttribute(f, c[0]), e.of.setAttribute(d, c[1]))
                    }
                    if (e.g._cmdf || i) {
                        r = e.cst;
                        var m = e.g.c;
                        for (s = r.length, n = 0; n < s; n += 1)(a = r[n]).setAttribute("offset", m[4 * n] + "%"), a.setAttribute("stop-color", "rgb(" + m[4 * n + 1] + "," + m[4 * n + 2] + "," + m[4 * n + 3] + ")")
                    }
                    if (l && (e.g._omdf || i)) {
                        var g = e.g.o;
                        for (s = (r = e.g._collapsable ? e.cst : e.ost).length, n = 0; n < s; n += 1) a = r[n], e.g._collapsable || a.setAttribute("offset", g[2 * n] + "%"), a.setAttribute("stop-opacity", g[2 * n + 1])
                    }
                    if (1 === t.t)(e.e._mdf || i) && (h.setAttribute("x2", u[0]), h.setAttribute("y2", u[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", u[0]), e.of.setAttribute("y2", u[1])));
                    else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(c[0] - u[0], 2) + Math.pow(c[1] - u[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                        o || (o = Math.sqrt(Math.pow(c[0] - u[0], 2) + Math.pow(c[1] - u[1], 2)));
                        var y = Math.atan2(u[1] - c[1], u[0] - c[0]),
                            v = e.h.v;
                        v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                        var b = o * v,
                            D = Math.cos(y + e.a.v) * b + c[0],
                            _ = Math.sin(y + e.a.v) * b + c[1];
                        h.setAttribute("fx", D), h.setAttribute("fy", _), l && !e.g._collapsable && (e.of.setAttribute("fx", D), e.of.setAttribute("fy", _))
                    }
                }

                function o(t, e, i) {
                    var r = e.style,
                        n = e.d;
                    n && (n._mdf || i) && n.dashStr && (r.pElem.setAttribute("stroke-dasharray", n.dashStr), r.pElem.setAttribute("stroke-dashoffset", n.dashoffset[0])), e.c && (e.c._mdf || i) && r.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (r.pElem.setAttribute("stroke-width", e.w.v), r.msElem && r.msElem.setAttribute("stroke-width", e.w.v))
                }
                return {
                    createRenderFunction: function(t) {
                        switch (t.ty) {
                            case "fl":
                                return n;
                            case "gf":
                                return a;
                            case "gs":
                                return s;
                            case "st":
                                return o;
                            case "sh":
                            case "el":
                            case "rc":
                            case "sr":
                                return r;
                            case "tr":
                                return i;
                            default:
                                return null
                        }
                    }
                }
            }();

            function ShapeTransformManager() {
                this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
            }

            function CVShapeData(t, e, i, r) {
                this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                var n, s = 4;
                "rc" === e.ty ? s = 5 : "el" === e.ty ? s = 6 : "sr" === e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
                var a, o = i.length;
                for (n = 0; n < o; n += 1) i[n].closed || (a = {
                    transforms: r.addTransformSequence(i[n].transforms),
                    trNodes: []
                }, this.styledShapes.push(a), i[n].elements.push(a))
            }

            function BaseElement() {}

            function NullElement(t, e, i) {
                this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
            }

            function SVGBaseElement() {}

            function IShapeElement() {}

            function ITextElement() {}

            function ICompElement() {}

            function IImageElement(t, e, i) {
                this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i), this.sourceRect = {
                    top: 0,
                    left: 0,
                    width: this.assetData.w,
                    height: this.assetData.h
                }
            }

            function ISolidElement(t, e, i) {
                this.initElement(t, e, i)
            }

            function AudioElement(t, e, i) {
                this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
                var r = this.globalData.getAssetsPath(this.assetData);
                this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function SVGCompElement(t, e, i) {
                this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function SVGTextLottieElement(t, e, i) {
                this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
            }

            function SVGShapeElement(t, e, i) {
                this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
            }

            function SVGTintFilter(t, e) {
                this.filterManager = e;
                var i = createNS("feColorMatrix");
                if (i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i), (i = createNS("feColorMatrix")).setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", "f2"), t.appendChild(i), this.matrixFilter = i, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                    var r, n = createNS("feMerge");
                    t.appendChild(n), (r = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), n.appendChild(r), (r = createNS("feMergeNode")).setAttribute("in", "f2"), n.appendChild(r)
                }
            }

            function SVGFillFilter(t, e) {
                this.filterManager = e;
                var i = createNS("feColorMatrix");
                i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(i), this.matrixFilter = i
            }

            function SVGGaussianBlurEffect(t, e) {
                t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                var i = createNS("feGaussianBlur");
                t.appendChild(i), this.feGaussianBlur = i
            }

            function SVGStrokeEffect(t, e) {
                this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
            }

            function SVGTritoneFilter(t, e) {
                this.filterManager = e;
                var i = createNS("feColorMatrix");
                i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i);
                var r = createNS("feComponentTransfer");
                r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.matrixFilter = r;
                var n = createNS("feFuncR");
                n.setAttribute("type", "table"), r.appendChild(n), this.feFuncR = n;
                var s = createNS("feFuncG");
                s.setAttribute("type", "table"), r.appendChild(s), this.feFuncG = s;
                var a = createNS("feFuncB");
                a.setAttribute("type", "table"), r.appendChild(a), this.feFuncB = a
            }

            function SVGProLevelsFilter(t, e) {
                this.filterManager = e;
                var i = this.filterManager.effectElements,
                    r = createNS("feComponentTransfer");
                (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", r)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", r)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", r)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", r)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), r = createNS("feComponentTransfer")), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.feFuncRComposed = this.createFeFunc("feFuncR", r), this.feFuncGComposed = this.createFeFunc("feFuncG", r), this.feFuncBComposed = this.createFeFunc("feFuncB", r))
            }

            function SVGDropShadowEffect(t, e) {
                var i = e.container.globalData.renderConfig.filterSize;
                t.setAttribute("x", i.x), t.setAttribute("y", i.y), t.setAttribute("width", i.width), t.setAttribute("height", i.height), this.filterManager = e;
                var r = createNS("feGaussianBlur");
                r.setAttribute("in", "SourceAlpha"), r.setAttribute("result", "drop_shadow_1"), r.setAttribute("stdDeviation", "0"), this.feGaussianBlur = r, t.appendChild(r);
                var n = createNS("feOffset");
                n.setAttribute("dx", "25"), n.setAttribute("dy", "0"), n.setAttribute("in", "drop_shadow_1"), n.setAttribute("result", "drop_shadow_2"), this.feOffset = n, t.appendChild(n);
                var s = createNS("feFlood");
                s.setAttribute("flood-color", "#00ff00"), s.setAttribute("flood-opacity", "1"), s.setAttribute("result", "drop_shadow_3"), this.feFlood = s, t.appendChild(s);
                var a = createNS("feComposite");
                a.setAttribute("in", "drop_shadow_3"), a.setAttribute("in2", "drop_shadow_2"), a.setAttribute("operator", "in"), a.setAttribute("result", "drop_shadow_4"), t.appendChild(a);
                var o, h = createNS("feMerge");
                t.appendChild(h), o = createNS("feMergeNode"), h.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = h, this.originalNodeAdded = !1, h.appendChild(o)
            }
            ShapeTransformManager.prototype = {
                addTransformSequence: function(t) {
                    var e, i = t.length,
                        r = "_";
                    for (e = 0; e < i; e += 1) r += t[e].transform.key + "_";
                    var n = this.sequences[r];
                    return n || (n = {
                        transforms: [].concat(t),
                        finalTransform: new Matrix,
                        _mdf: !1
                    }, this.sequences[r] = n, this.sequenceList.push(n)), n
                },
                processSequence: function(t, e) {
                    for (var i, r = 0, n = t.transforms.length, s = e; r < n && !e;) {
                        if (t.transforms[r].transform.mProps._mdf) {
                            s = !0;
                            break
                        }
                        r += 1
                    }
                    if (s)
                        for (t.finalTransform.reset(), r = n - 1; r >= 0; r -= 1) i = t.transforms[r].transform.mProps.v.props, t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]);
                    t._mdf = s
                },
                processSequences: function(t) {
                    var e, i = this.sequenceList.length;
                    for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t)
                },
                getNewKey: function() {
                    return this.transform_key_count += 1, "_" + this.transform_key_count
                }
            }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
                checkMasks: function() {
                    if (!this.data.hasMask) return !1;
                    for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                        if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                        t += 1
                    }
                    return !1
                },
                initExpressions: function() {
                    this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
                },
                setBlendMode: function() {
                    var t = getBlendMode(this.data.bm);
                    (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                },
                initBaseData: function(t, e, i) {
                    this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                },
                getType: function() {
                    return this.type
                },
                sourceRectAtTime: function() {}
            }, NullElement.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0)
            }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                return null
            }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
                initRendererElement: function() {
                    this.layerElement = createNS("g")
                },
                createContainerElements: function() {
                    this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                    var t, e, i, r = null;
                    if (this.data.td) {
                        if (3 == this.data.td || 1 == this.data.td) {
                            var n = createNS("mask");
                            n.setAttribute("id", this.layerId), n.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), n.appendChild(this.layerElement), r = n, this.globalData.defs.appendChild(n), featureSupport.maskType || 1 != this.data.td || (n.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(this.layerElement), r = i, n.appendChild(i), i.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                        } else if (2 == this.data.td) {
                            var s = createNS("mask");
                            s.setAttribute("id", this.layerId), s.setAttribute("mask-type", "alpha");
                            var a = createNS("g");
                            s.appendChild(a), t = createElementID(), e = filtersFactory.createFilter(t);
                            var o = createNS("feComponentTransfer");
                            o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                            var h = createNS("feFuncA");
                            h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), o.appendChild(h), this.globalData.defs.appendChild(e);
                            var l = createNS("rect");
                            l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), a.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), a.appendChild(l), a.appendChild(this.layerElement), r = a, featureSupport.maskType || (s.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), a.appendChild(l), i.appendChild(this.layerElement), r = i, a.appendChild(i)), this.globalData.defs.appendChild(s)
                        }
                    } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), r = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                    if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                        var c = createNS("clipPath"),
                            u = createNS("path");
                        u.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                        var p = createElementID();
                        if (c.setAttribute("id", p), c.appendChild(u), this.globalData.defs.appendChild(c), this.checkMasks()) {
                            var f = createNS("g");
                            f.setAttribute("clip-path", "url(" + locationHref + "#" + p + ")"), f.appendChild(this.layerElement), this.transformedElement = f, r ? r.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                        } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + p + ")")
                    }
                    0 !== this.data.bm && this.setBlendMode()
                },
                renderElement: function() {
                    this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                },
                destroyBaseElement: function() {
                    this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                },
                getBaseElement: function() {
                    return this.data.hd ? null : this.baseElement
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
                },
                setMatte: function(t) {
                    this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
                }
            }, IShapeElement.prototype = {
                addShapeToModifiers: function(t) {
                    var e, i = this.shapeModifiers.length;
                    for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
                },
                isShapeInAnimatedModifiers: function(t) {
                    for (var e = this.shapeModifiers.length; 0 < e;)
                        if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                    return !1
                },
                renderModifiers: function() {
                    if (this.shapeModifiers.length) {
                        var t, e = this.shapes.length;
                        for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                        for (t = (e = this.shapeModifiers.length) - 1; t >= 0; t -= 1) this.shapeModifiers[t].processShapes(this._isFirstFrame)
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
                    for (var e = this.processedElements, i = 0, r = e.length; i < r;) {
                        if (e[i].elem === t) return e[i].pos;
                        i += 1
                    }
                    return 0
                },
                addProcessedElement: function(t, e) {
                    for (var i = this.processedElements, r = i.length; r;)
                        if (i[r -= 1].elem === t) return void(i[r].pos = e);
                    i.push(new ProcessedElement(t, e))
                },
                prepareFrame: function(t) {
                    this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                }
            }, ITextElement.prototype.initElement = function(t, e, i) {
                this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
            }, ITextElement.prototype.prepareFrame = function(t) {
                this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
            }, ITextElement.prototype.createPathShape = function(t, e) {
                var i, r, n = e.length,
                    s = "";
                for (i = 0; i < n; i += 1) r = e[i].ks.k, s += buildShapeString(r, r.i.length, !0, t);
                return s
            }, ITextElement.prototype.updateDocumentData = function(t, e) {
                this.textProperty.updateDocumentData(t, e)
            }, ITextElement.prototype.canResizeFont = function(t) {
                this.textProperty.canResizeFont(t)
            }, ITextElement.prototype.setMinimumFontSize = function(t) {
                this.textProperty.setMinimumFontSize(t)
            }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, n) {
                switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                    case 1:
                        e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                        break;
                    case 2:
                        e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
                }
                e.translate(r, n, 0)
            }, ITextElement.prototype.buildColor = function(t) {
                return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
            }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, i) {
                this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
            }, ICompElement.prototype.prepareFrame = function(t) {
                if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                    if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                    }
                    var i, r = this.elements.length;
                    for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
                }
            }, ICompElement.prototype.renderInnerContent = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
            }, ICompElement.prototype.setElements = function(t) {
                this.elements = t
            }, ICompElement.prototype.getElements = function() {
                return this.elements
            }, ICompElement.prototype.destroyElements = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
            }, ICompElement.prototype.destroy = function() {
                this.destroyElements(), this.destroyBaseElement()
            }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData);
                this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
            }, IImageElement.prototype.sourceRectAtTime = function() {
                return this.sourceRect
            }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                var t = createNS("rect");
                t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
            }, AudioElement.prototype.prepareFrame = function(t) {
                if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    this._currentTime = e
                }
            }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
                this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
            }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                this.audio.pause(), this._isPlaying = !1
            }, AudioElement.prototype.pause = function() {
                this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
            }, AudioElement.prototype.resume = function() {
                this._canPlay = !0
            }, AudioElement.prototype.setRate = function(t) {
                this.audio.rate(t)
            }, AudioElement.prototype.volume = function(t) {
                this.audio.volume(t)
            }, AudioElement.prototype.getBaseElement = function() {
                return null
            }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
            }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
                for (var e = 0, i = t.length, r = [], n = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(n), n = "") : n += t[e], e += 1;
                return r.push(n), r
            }, SVGTextLottieElement.prototype.buildNewText = function() {
                var t, e, i = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
                var r = this.globalData.fontManager.getFontByName(i.f);
                if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
                else {
                    this.layerElement.setAttribute("font-family", r.fFamily);
                    var n = i.fWeight,
                        s = i.fStyle;
                    this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", n)
                }
                this.layerElement.setAttribute("aria-label", i.t);
                var a, o = i.l || [],
                    h = !!this.globalData.fontManager.chars;
                e = o.length;
                var l, c = this.mHelper,
                    u = "",
                    p = this.data.singleShape,
                    f = 0,
                    d = 0,
                    m = !0,
                    g = .001 * i.tr * i.finalSize;
                if (!p || h || i.sz) {
                    var y, v, b = this.textSpans.length;
                    for (t = 0; t < e; t += 1) h && p && 0 !== t || (a = b > t ? this.textSpans[t] : createNS(h ? "path" : "text"), b <= t && (a.setAttribute("stroke-linecap", "butt"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = a, this.layerElement.appendChild(a)), a.style.display = "inherit"), c.reset(), c.scale(i.finalSize / 100, i.finalSize / 100), p && (o[t].n && (f = -g, d += i.yOffset, d += m ? 1 : 0, m = !1), this.applyTextPropertiesToMatrix(i, c, o[t].line, f, d), f += o[t].l || 0, f += g), h ? (l = (y = (v = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)) && v.data || {}).shapes ? y.shapes[0].it : [], p ? u += this.createPathShape(c, l) : a.setAttribute("d", this.createPathShape(c, l))) : (p && a.setAttribute("transform", "translate(" + c.props[12] + "," + c.props[13] + ")"), a.textContent = o[t].val, a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                    p && a && a.setAttribute("d", u)
                } else {
                    var D = this.textContainer,
                        _ = "start";
                    switch (i.j) {
                        case 1:
                            _ = "end";
                            break;
                        case 2:
                            _ = "middle";
                            break;
                        default:
                            _ = "start"
                    }
                    D.setAttribute("text-anchor", _), D.setAttribute("letter-spacing", g);
                    var E = this.buildTextContents(i.finalText);
                    for (e = E.length, d = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(a = this.textSpans[t] || createNS("tspan")).textContent = E[t], a.setAttribute("x", 0), a.setAttribute("y", d), a.style.display = "inherit", D.appendChild(a), this.textSpans[t] = a, d += i.finalLineHeight;
                    this.layerElement.appendChild(D)
                }
                for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
                this._sizeChanged = !0
            }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                    this._sizeChanged = !1;
                    var t = this.layerElement.getBBox();
                    this.bbox = {
                        top: t.y,
                        left: t.x,
                        width: t.width,
                        height: t.height
                    }
                }
                return this.bbox
            }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                    var t, e;
                    this._sizeChanged = !0;
                    var i, r, n = this.textAnimator.renderedLetters,
                        s = this.textProperty.currentData.l;
                    for (e = s.length, t = 0; t < e; t += 1) s[t].n || (i = n[t], r = this.textSpans[t], i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc))
                }
            }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
            }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                var t, e, i, r, n = this.shapes.length,
                    s = this.stylesList.length,
                    a = [],
                    o = !1;
                for (i = 0; i < s; i += 1) {
                    for (r = this.stylesList[i], o = !1, a.length = 0, t = 0; t < n; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(r) && (a.push(e), o = e._isAnimated || o);
                    a.length > 1 && o && this.setShapesAsAnimated(a)
                }
            }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1) t[e].setAsAnimated()
            }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                var i, r = new SVGStyleData(t, e),
                    n = r.pElem;
                if ("st" === t.ty) i = new SVGStrokeStyleData(this, t, r);
                else if ("fl" === t.ty) i = new SVGFillStyleData(this, t, r);
                else if ("gf" === t.ty || "gs" === t.ty) {
                    i = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), n.setAttribute("mask", "url(" + locationHref + "#" + i.maskId + ")"))
                }
                return "st" !== t.ty && "gs" !== t.ty || (n.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), n.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), n.setAttribute("fill-opacity", "0"), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && n.setAttribute("fill-rule", "evenodd"), t.ln && n.setAttribute("id", t.ln), t.cl && n.setAttribute("class", t.cl), t.bm && (n.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i
            }, SVGShapeElement.prototype.createGroupElement = function(t) {
                var e = new ShapeGroupData;
                return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
            }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                var i = TransformPropertyFactory.getTransformProperty(this, t, this),
                    r = new SVGTransformData(i, i.o, e);
                return this.addToAnimatedContents(t, r), r
            }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
                var r = 4;
                "rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
                var n = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, r, this));
                return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(t, n), n
            }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                for (var i = 0, r = this.animatedContents.length; i < r;) {
                    if (this.animatedContents[i].element === e) return;
                    i += 1
                }
                this.animatedContents.push({
                    fn: SVGElementsRenderer.createRenderFunction(t),
                    element: e,
                    data: t
                })
            }, SVGShapeElement.prototype.setElementStyles = function(t) {
                var e, i = t.styles,
                    r = this.stylesList.length;
                for (e = 0; e < r; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
            }, SVGShapeElement.prototype.reloadShapes = function() {
                var t;
                this._isFirstFrame = !0;
                var e = this.itemsData.length;
                for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                this.renderModifiers()
            }, SVGShapeElement.prototype.searchShapes = function(t, e, i, r, n, s, a) {
                var o, h, l, c, u, p, f = [].concat(s),
                    d = t.length - 1,
                    m = [],
                    g = [];
                for (o = d; o >= 0; o -= 1) {
                    if ((p = this.searchProcessedElement(t[o])) ? e[o] = i[p - 1] : t[o]._render = a, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty) p ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], n), t[o]._render && r.appendChild(e[o].style.pElem), m.push(e[o].style);
                    else if ("gr" === t[o].ty) {
                        if (p)
                            for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
                        else e[o] = this.createGroupElement(t[o]);
                        this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, n + 1, f, a), t[o]._render && r.appendChild(e[o].gr)
                    } else "tr" === t[o].ty ? (p || (e[o] = this.createTransformElement(t[o], r)), c = e[o].transform, f.push(c)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (p || (e[o] = this.createShapeElement(t[o], f, n)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty ? (p ? (u = e[o]).closed = !1 : ((u = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = u, this.shapeModifiers.push(u)), g.push(u)) : "rp" === t[o].ty && (p ? (u = e[o]).closed = !0 : (u = ShapeModifiers.getModifier(t[o].ty), e[o] = u, u.init(this, t, o, e), this.shapeModifiers.push(u), a = !1), g.push(u));
                    this.addProcessedElement(t[o], o + 1)
                }
                for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
                for (d = g.length, o = 0; o < d; o += 1) g[o].closed = !0
            }, SVGShapeElement.prototype.renderInnerContent = function() {
                var t;
                this.renderModifiers();
                var e = this.stylesList.length;
                for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
            }, SVGShapeElement.prototype.renderShape = function() {
                var t, e, i = this.animatedContents.length;
                for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
            }, SVGShapeElement.prototype.destroy = function() {
                this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
            }, SVGTintFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v,
                        i = this.filterManager.effectElements[1].p.v,
                        r = this.filterManager.effectElements[2].p.v / 100;
                    this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
                }
            }, SVGFillFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[2].p.v,
                        i = this.filterManager.effectElements[6].p.v;
                    this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
                }
            }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = .3 * this.filterManager.effectElements[0].p.v,
                        i = this.filterManager.effectElements[1].p.v,
                        r = 3 == i ? 0 : e,
                        n = 2 == i ? 0 : e;
                    this.feGaussianBlur.setAttribute("stdDeviation", r + " " + n);
                    var s = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                    this.feGaussianBlur.setAttribute("edgeMode", s)
                }
            }, SVGStrokeEffect.prototype.initialize = function() {
                var t, e, i, r, n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, i = 0) : r = (i = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < r; i += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                    p: t,
                    m: i
                });
                if (3 === this.filterManager.effectElements[10].p.v) {
                    var s = createNS("mask"),
                        a = createElementID();
                    s.setAttribute("id", a), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
                    var o = createNS("g");
                    for (o.setAttribute("mask", "url(" + locationHref + "#" + a + ")"); n[0];) o.appendChild(n[0]);
                    this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff")
                } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                    if (2 === this.filterManager.effectElements[10].p.v)
                        for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length;) this.elem.layerElement.removeChild(n[0]);
                    this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
                }
                this.initialized = !0, this.pathMasker = e
            }, SVGStrokeEffect.prototype.renderFrame = function(t) {
                var e;
                this.initialized || this.initialize();
                var i, r, n = this.paths.length;
                for (e = 0; e < n; e += 1)
                    if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && r.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                        var s;
                        if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                            var a = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                h = r.getTotalLength();
                            s = "0 0 0 " + h * a + " ";
                            var l, c = h * (o - a),
                                u = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                                p = Math.floor(c / u);
                            for (l = 0; l < p; l += 1) s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                            s += "0 " + 10 * h + " 0 0"
                        } else s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                        r.setAttribute("stroke-dasharray", s)
                    } if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                    var f = this.filterManager.effectElements[3].p.v;
                    this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * f[0]) + "," + bmFloor(255 * f[1]) + "," + bmFloor(255 * f[2]) + ")")
                }
            }, SVGTritoneFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v,
                        i = this.filterManager.effectElements[1].p.v,
                        r = this.filterManager.effectElements[2].p.v,
                        n = r[0] + " " + i[0] + " " + e[0],
                        s = r[1] + " " + i[1] + " " + e[1],
                        a = r[2] + " " + i[2] + " " + e[2];
                    this.feFuncR.setAttribute("tableValues", n), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", a)
                }
            }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                var i = createNS(t);
                return i.setAttribute("type", "table"), e.appendChild(i), i
            }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, r, n) {
                for (var s, a, o = 0, h = Math.min(t, e), l = Math.max(t, e), c = Array.call(null, {
                        length: 256
                    }), u = 0, p = n - r, f = e - t; o <= 256;) a = (s = o / 256) <= h ? f < 0 ? n : r : s >= l ? f < 0 ? r : n : r + p * Math.pow((s - t) / f, 1 / i), c[u] = a, u += 1, o += 256 / 255;
                return c.join(" ")
            }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e, i = this.filterManager.effectElements;
                    this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e))
                }
            }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                        var e = this.filterManager.effectElements[0].p.v;
                        this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                    }
                    if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                        var i = this.filterManager.effectElements[3].p.v,
                            r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                            n = i * Math.cos(r),
                            s = i * Math.sin(r);
                        this.feOffset.setAttribute("dx", n), this.feOffset.setAttribute("dy", s)
                    }
                }
            };
            var _svgMatteSymbols = [];

            function SVGMatte3Effect(t, e, i) {
                this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement
            }

            function SVGEffects(t) {
                var e, i, r = t.data.ef ? t.data.ef.length : 0,
                    n = createElementID(),
                    s = filtersFactory.createFilter(n),
                    a = 0;
                for (this.filters = [], e = 0; e < r; e += 1) i = null, 20 === t.data.ef[e].ty ? (a += 1, i = new SVGTintFilter(s, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (a += 1, i = new SVGFillFilter(s, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? i = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (a += 1, i = new SVGTritoneFilter(s, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (a += 1, i = new SVGProLevelsFilter(s, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (a += 1, i = new SVGDropShadowEffect(s, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? i = new SVGMatte3Effect(s, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (a += 1, i = new SVGGaussianBlurEffect(s, t.effectsManager.effectElements[e])), i && this.filters.push(i);
                a && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this)
            }

            function CVContextData() {
                var t;
                this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1;
                for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
                this._length = 15
            }

            function CVBaseElement() {}

            function CVImageElement(t, e, i) {
                this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getImage(this.assetData), this.initElement(t, e, i)
            }

            function CVCompElement(t, e, i) {
                this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function CVMaskElement(t, e) {
                var i;
                this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                var r = this.masksProperties.length,
                    n = !1;
                for (i = 0; i < r; i += 1) "n" !== this.masksProperties[i].mode && (n = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
                this.hasMasks = n, n && this.element.addRenderableComponent(this)
            }

            function CVShapeElement(t, e, i) {
                this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, i)
            }

            function CVSolidElement(t, e, i) {
                this.initElement(t, e, i)
            }

            function CVTextElement(t, e, i) {
                this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                    fill: "rgba(0,0,0,0)",
                    stroke: "rgba(0,0,0,0)",
                    sWidth: 0,
                    fValue: ""
                }, this.initElement(t, e, i)
            }

            function CVEffects() {}

            function HBaseElement() {}

            function HSolidElement(t, e, i) {
                this.initElement(t, e, i)
            }

            function HCompElement(t, e, i) {
                this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function HShapeElement(t, e, i) {
                this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                }
            }

            function HTextElement(t, e, i) {
                this.textSpans = [], this.textPaths = [], this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i)
            }

            function HImageElement(t, e, i) {
                this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i)
            }

            function HCameraElement(t, e, i) {
                this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
                var r = PropertyFactory.getProp;
                if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                    var n, s = t.ks.or.k.length;
                    for (n = 0; n < s; n += 1) t.ks.or.k[n].to = null, t.ks.or.k[n].ti = null
                }
                this.or = r(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r(this, t.ks.rx, 0, degToRads, this), this.ry = r(this, t.ks.ry, 0, degToRads, this), this.rz = r(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                    mProp: this
                }
            }

            function HEffects() {}
            SVGMatte3Effect.prototype.findSymbol = function(t) {
                for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
                    if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                    e += 1
                }
                return null
            }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                var i = t.layerElement.parentNode;
                if (i) {
                    for (var r, n = i.children, s = 0, a = n.length; s < a && n[s] !== t.layerElement;) s += 1;
                    s <= a - 2 && (r = n[s + 1]);
                    var o = createNS("use");
                    o.setAttribute("href", "#" + e), r ? i.insertBefore(o, r) : i.appendChild(o)
                }
            }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                if (!this.findSymbol(e)) {
                    var i = createElementID(),
                        r = createNS("mask");
                    r.setAttribute("id", e.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                    var n = t.globalData.defs;
                    n.appendChild(r);
                    var s = createNS("symbol");
                    s.setAttribute("id", i), this.replaceInParent(e, i), s.appendChild(e.layerElement), n.appendChild(s);
                    var a = createNS("use");
                    a.setAttribute("href", "#" + i), r.appendChild(a), e.data.hd = !1, e.show()
                }
                t.setMatte(e.layerId)
            }, SVGMatte3Effect.prototype.initialize = function() {
                for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r;) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
                this.initialized = !0
            }, SVGMatte3Effect.prototype.renderFrame = function() {
                this.initialized || this.initialize()
            }, SVGEffects.prototype.renderFrame = function(t) {
                var e, i = this.filters.length;
                for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
            }, CVContextData.prototype.duplicate = function() {
                var t = 2 * this._length,
                    e = this.savedOp;
                this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
                var i = 0;
                for (i = this._length; i < t; i += 1) this.saved[i] = createTypedArray("float32", 16);
                this._length = t
            }, CVContextData.prototype.reset = function() {
                this.cArrPos = 0, this.cTr.reset(), this.cO = 1
            }, CVBaseElement.prototype = {
                createElements: function() {},
                initRendererElement: function() {},
                createContainerElements: function() {
                    this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
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
                    this.maskManager = new CVMaskElement(this.data, this)
                },
                hideElement: function() {
                    this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                },
                showElement: function() {
                    this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                },
                renderFrame: function() {
                    if (!this.hidden && !this.data.hd) {
                        this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                        var t = 0 === this.data.ty;
                        this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                    }
                },
                destroy: function() {
                    this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                },
                mHelper: new Matrix
            }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                    var t = createTag("canvas");
                    t.width = this.assetData.w, t.height = this.assetData.h;
                    var e, i, r = t.getContext("2d"),
                        n = this.img.width,
                        s = this.img.height,
                        a = n / s,
                        o = this.assetData.w / this.assetData.h,
                        h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                    a > o && "xMidYMid slice" === h || a < o && "xMidYMid slice" !== h ? e = (i = s) * o : i = (e = n) / o, r.drawImage(this.img, (n - e) / 2, (s - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                }
            }, CVImageElement.prototype.renderInnerContent = function() {
                this.canvasContext.drawImage(this.img, 0, 0)
            }, CVImageElement.prototype.destroy = function() {
                this.img = null
            }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                var t, e = this.canvasContext;
                for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
            }, CVCompElement.prototype.destroy = function() {
                var t;
                for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                this.layers = null, this.elements = null
            }, CVMaskElement.prototype.renderFrame = function() {
                if (this.hasMasks) {
                    var t, e, i, r, n = this.element.finalTransform.mat,
                        s = this.element.canvasContext,
                        a = this.masksProperties.length;
                    for (s.beginPath(), t = 0; t < a; t += 1)
                        if ("n" !== this.masksProperties[t].mode) {
                            var o;
                            this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), r = this.viewData[t].v, e = n.applyToPointArray(r.v[0][0], r.v[0][1], 0), s.moveTo(e[0], e[1]);
                            var h = r._length;
                            for (o = 1; o < h; o += 1) i = n.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                            i = n.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]), s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
                        } this.element.globalData.renderer.save(!0), s.clip()
                }
            }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                this.element = null
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                opacity: 1,
                _opMdf: !1
            }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
            }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                var i = {
                        data: t,
                        type: t.ty,
                        preTransforms: this.transformsManager.addTransformSequence(e),
                        transforms: [],
                        elements: [],
                        closed: !0 === t.hd
                    },
                    r = {};
                if ("fl" === t.ty || "st" === t.ty ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (i.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || {
                        k: 0
                    }, 0, .01, this), r.a = PropertyFactory.getProp(this, t.a || {
                        k: 0
                    }, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
                    if (i.lc = this.lcEnum[t.lc] || "round", i.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (i.wi = r.w.v), t.d) {
                        var n = new DashProperty(this, t.d, "canvas", this);
                        r.d = n, r.d.k || (i.da = r.d.dashArray, i.do = r.d.dashoffset[0])
                    }
                } else i.r = 2 === t.r ? "evenodd" : "nonzero";
                return this.stylesList.push(i), r.style = i, r
            }, CVShapeElement.prototype.createGroupElement = function() {
                return {
                    it: [],
                    prevViewData: []
                }
            }, CVShapeElement.prototype.createTransformElement = function(t) {
                return {
                    transform: {
                        opacity: 1,
                        _opMdf: !1,
                        key: this.transformsManager.getNewKey(),
                        op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                        mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                    }
                }
            }, CVShapeElement.prototype.createShapeElement = function(t) {
                var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
                return this.shapes.push(e), this.addShapeToModifiers(e), e
            }, CVShapeElement.prototype.reloadShapes = function() {
                var t;
                this._isFirstFrame = !0;
                var e = this.itemsData.length;
                for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
            }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
                var e, i = this.stylesList.length;
                for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
            }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                var t, e = this.stylesList.length;
                for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
            }, CVShapeElement.prototype.closeStyles = function(t) {
                var e, i = t.length;
                for (e = 0; e < i; e += 1) t[e].closed = !0
            }, CVShapeElement.prototype.searchShapes = function(t, e, i, r, n) {
                var s, a, o, h, l, c, u = t.length - 1,
                    p = [],
                    f = [],
                    d = [].concat(n);
                for (s = u; s >= 0; s -= 1) {
                    if ((h = this.searchProcessedElement(t[s])) ? e[s] = i[h - 1] : t[s]._shouldRender = r, "fl" === t[s].ty || "st" === t[s].ty || "gf" === t[s].ty || "gs" === t[s].ty) h ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], d), p.push(e[s].style);
                    else if ("gr" === t[s].ty) {
                        if (h)
                            for (o = e[s].it.length, a = 0; a < o; a += 1) e[s].prevViewData[a] = e[s].it[a];
                        else e[s] = this.createGroupElement(t[s]);
                        this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, r, d)
                    } else "tr" === t[s].ty ? (h || (c = this.createTransformElement(t[s]), e[s] = c), d.push(e[s]), this.addTransformToStyleList(e[s])) : "sh" === t[s].ty || "rc" === t[s].ty || "el" === t[s].ty || "sr" === t[s].ty ? h || (e[s] = this.createShapeElement(t[s])) : "tm" === t[s].ty || "rd" === t[s].ty || "pb" === t[s].ty ? (h ? (l = e[s]).closed = !1 : ((l = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = l, this.shapeModifiers.push(l)), f.push(l)) : "rp" === t[s].ty && (h ? (l = e[s]).closed = !0 : (l = ShapeModifiers.getModifier(t[s].ty), e[s] = l, l.init(this, t, s, e), this.shapeModifiers.push(l), r = !1), f.push(l));
                    this.addProcessedElement(t[s], s + 1)
                }
                for (this.removeTransformFromStyleList(), this.closeStyles(p), u = f.length, s = 0; s < u; s += 1) f[s].closed = !0
            }, CVShapeElement.prototype.renderInnerContent = function() {
                this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
            }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
            }, CVShapeElement.prototype.drawLayer = function() {
                var t, e, i, r, n, s, a, o, h, l = this.stylesList.length,
                    c = this.globalData.renderer,
                    u = this.globalData.canvasContext;
                for (t = 0; t < l; t += 1)
                    if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                        for (c.save(), s = h.elements, "st" === o || "gs" === o ? (u.strokeStyle = "st" === o ? h.co : h.grd, u.lineWidth = h.wi, u.lineCap = h.lc, u.lineJoin = h.lj, u.miterLimit = h.ml || 0) : u.fillStyle = "fl" === o ? h.co : h.grd, c.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && u.beginPath(), c.ctxTransform(h.preTransforms.finalTransform.props), i = s.length, e = 0; e < i; e += 1) {
                            for ("st" !== o && "gs" !== o || (u.beginPath(), h.da && (u.setLineDash(h.da), u.lineDashOffset = h.do)), n = (a = s[e].trNodes).length, r = 0; r < n; r += 1) "m" === a[r].t ? u.moveTo(a[r].p[0], a[r].p[1]) : "c" === a[r].t ? u.bezierCurveTo(a[r].pts[0], a[r].pts[1], a[r].pts[2], a[r].pts[3], a[r].pts[4], a[r].pts[5]) : u.closePath();
                            "st" !== o && "gs" !== o || (u.stroke(), h.da && u.setLineDash(this.dashResetter))
                        }
                        "st" !== o && "gs" !== o && u.fill(h.r), c.restore()
                    }
            }, CVShapeElement.prototype.renderShape = function(t, e, i, r) {
                var n, s;
                for (s = t, n = e.length - 1; n >= 0; n -= 1) "tr" === e[n].ty ? (s = i[n].transform, this.renderShapeTransform(t, s)) : "sh" === e[n].ty || "el" === e[n].ty || "rc" === e[n].ty || "sr" === e[n].ty ? this.renderPath(e[n], i[n]) : "fl" === e[n].ty ? this.renderFill(e[n], i[n], s) : "st" === e[n].ty ? this.renderStroke(e[n], i[n], s) : "gf" === e[n].ty || "gs" === e[n].ty ? this.renderGradientFill(e[n], i[n], s) : "gr" === e[n].ty ? this.renderShape(s, e[n].it, i[n].it) : e[n].ty;
                r && this.drawLayer()
            }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                    var i, r, n, s = t.trNodes,
                        a = e.paths,
                        o = a._length;
                    s.length = 0;
                    var h = t.transforms.finalTransform;
                    for (n = 0; n < o; n += 1) {
                        var l = a.shapes[n];
                        if (l && l.v) {
                            for (r = l._length, i = 1; i < r; i += 1) 1 === i && s.push({
                                t: "m",
                                p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                            }), s.push({
                                t: "c",
                                pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i])
                            });
                            1 === r && s.push({
                                t: "m",
                                p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                            }), l.c && r && (s.push({
                                t: "c",
                                pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0])
                            }), s.push({
                                t: "z"
                            }))
                        }
                    }
                    t.trNodes = s
                }
            }, CVShapeElement.prototype.renderPath = function(t, e) {
                if (!0 !== t.hd && t._shouldRender) {
                    var i, r = e.styledShapes.length;
                    for (i = 0; i < r; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh)
                }
            }, CVShapeElement.prototype.renderFill = function(t, e, i) {
                var r = e.style;
                (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity)
            }, CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
                var r, n = e.style;
                if (!n.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                    var s, a = this.globalData.canvasContext,
                        o = e.s.v,
                        h = e.e.v;
                    if (1 === t.t) r = a.createLinearGradient(o[0], o[1], h[0], h[1]);
                    else {
                        var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)),
                            c = Math.atan2(h[1] - o[1], h[0] - o[0]),
                            u = e.h.v;
                        u >= 1 ? u = .99 : u <= -1 && (u = -.99);
                        var p = l * u,
                            f = Math.cos(c + e.a.v) * p + o[0],
                            d = Math.sin(c + e.a.v) * p + o[1];
                        r = a.createRadialGradient(f, d, 0, o[0], o[1], l)
                    }
                    var m = t.g.p,
                        g = e.g.c,
                        y = 1;
                    for (s = 0; s < m; s += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * s + 1]), r.addColorStop(g[4 * s] / 100, "rgba(" + g[4 * s + 1] + "," + g[4 * s + 2] + "," + g[4 * s + 3] + "," + y + ")");
                    n.grd = r
                }
                n.coOp = e.o.v * i.opacity
            }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
                var r = e.style,
                    n = e.d;
                n && (n._mdf || this._isFirstFrame) && (r.da = n.dashArray, r.do = n.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v)
            }, CVShapeElement.prototype.destroy = function() {
                this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                var t = this.canvasContext;
                t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = !1;
                t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                var i = !1;
                t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                var r, n, s, a, o, h, l, c, u, p, f, d, m = this.globalData.fontManager.getFontByName(t.f),
                    g = t.l,
                    y = this.mHelper;
                this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, n = t.finalText.length;
                var v = this.data.singleShape,
                    b = .001 * t.tr * t.finalSize,
                    D = 0,
                    _ = 0,
                    E = !0,
                    x = 0;
                for (r = 0; r < n; r += 1) {
                    for (a = (s = this.globalData.fontManager.getCharData(t.finalText[r], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && s.data || {}, y.reset(), v && g[r].n && (D = -b, _ += t.yOffset, _ += E ? 1 : 0, E = !1), u = (l = a.shapes ? a.shapes[0].it : []).length, y.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, y, g[r].line, D, _), f = createSizedArray(u), c = 0; c < u; c += 1) {
                        for (h = l[c].ks.k.i.length, p = l[c].ks.k, d = [], o = 1; o < h; o += 1) 1 === o && d.push(y.applyToX(p.v[0][0], p.v[0][1], 0), y.applyToY(p.v[0][0], p.v[0][1], 0)), d.push(y.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), y.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), y.applyToX(p.i[o][0], p.i[o][1], 0), y.applyToY(p.i[o][0], p.i[o][1], 0), y.applyToX(p.v[o][0], p.v[o][1], 0), y.applyToY(p.v[o][0], p.v[o][1], 0));
                        d.push(y.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), y.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), y.applyToX(p.i[0][0], p.i[0][1], 0), y.applyToY(p.i[0][0], p.i[0][1], 0), y.applyToX(p.v[0][0], p.v[0][1], 0), y.applyToY(p.v[0][0], p.v[0][1], 0)), f[c] = d
                    }
                    v && (D += g[r].l, D += b), this.textSpans[x] ? this.textSpans[x].elem = f : this.textSpans[x] = {
                        elem: f
                    }, x += 1
                }
            }, CVTextElement.prototype.renderInnerContent = function() {
                var t, e, i, r, n, s, a = this.canvasContext;
                a.font = this.values.fValue, a.lineCap = "butt", a.lineJoin = "miter", a.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                var o, h = this.textAnimator.renderedLetters,
                    l = this.textProperty.currentData.l;
                e = l.length;
                var c, u, p = null,
                    f = null,
                    d = null;
                for (t = 0; t < e; t += 1)
                    if (!l[t].n) {
                        if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                            for (o && o.fc ? p !== o.fc && (p = o.fc, a.fillStyle = o.fc) : p !== this.values.fill && (p = this.values.fill, a.fillStyle = this.values.fill), r = (c = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                                for (s = (u = c[i]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), n = 2; n < s; n += 6) this.globalData.canvasContext.bezierCurveTo(u[n], u[n + 1], u[n + 2], u[n + 3], u[n + 4], u[n + 5]);
                            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                        }
                        if (this.stroke) {
                            for (o && o.sw ? d !== o.sw && (d = o.sw, a.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, a.lineWidth = this.values.sWidth), o && o.sc ? f !== o.sc && (f = o.sc, a.strokeStyle = o.sc) : f !== this.values.stroke && (f = this.values.stroke, a.strokeStyle = this.values.stroke), r = (c = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                                for (s = (u = c[i]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), n = 2; n < s; n += 6) this.globalData.canvasContext.bezierCurveTo(u[n], u[n + 1], u[n + 2], u[n + 3], u[n + 4], u[n + 5]);
                            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                        }
                        o && this.globalData.renderer.restore()
                    }
            }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
                checkBlendMode: function() {},
                initRendererElement: function() {
                    this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                },
                createContainerElements: function() {
                    this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                },
                renderElement: function() {
                    var t = this.transformedElement ? this.transformedElement.style : {};
                    if (this.finalTransform._matMdf) {
                        var e = this.finalTransform.mat.toCSS();
                        t.transform = e, t.webkitTransform = e
                    }
                    this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                destroy: function() {
                    this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data, this, this.globalData)
                },
                addEffects: function() {},
                setMatte: function() {}
            }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                var t;
                this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
            }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
            }, HCompElement.prototype.addTo3dContainer = function(t, e) {
                for (var i, r = 0; r < e;) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
                i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
            }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                var t;
                if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
                else {
                    t = createNS("svg");
                    var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                    t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
                }
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
            }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
                var i, r = t.length;
                for (i = 0; i < r; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
                return e
            }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                var i, r, n, s, a, o = t.sh.v,
                    h = t.transformers,
                    l = o._length;
                if (!(l <= 1)) {
                    for (i = 0; i < l - 1; i += 1) r = this.getTransformedPoint(h, o.v[i]), n = this.getTransformedPoint(h, o.o[i]), s = this.getTransformedPoint(h, o.i[i + 1]), a = this.getTransformedPoint(h, o.v[i + 1]), this.checkBounds(r, n, s, a, e);
                    o.c && (r = this.getTransformedPoint(h, o.v[i]), n = this.getTransformedPoint(h, o.o[i]), s = this.getTransformedPoint(h, o.i[0]), a = this.getTransformedPoint(h, o.v[0]), this.checkBounds(r, n, s, a, e))
                }
            }, HShapeElement.prototype.checkBounds = function(t, e, i, r, n) {
                this.getBoundsOfCurve(t, e, i, r);
                var s = this.shapeBoundingBox;
                n.x = bmMin(s.left, n.x), n.xMax = bmMax(s.right, n.xMax), n.y = bmMin(s.top, n.y), n.yMax = bmMax(s.bottom, n.yMax)
            }, HShapeElement.prototype.shapeBoundingBox = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, HShapeElement.prototype.tempBoundingBox = {
                x: 0,
                xMax: 0,
                y: 0,
                yMax: 0,
                width: 0,
                height: 0
            }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, r) {
                for (var n, s, a, o, h, l, c, u = [
                        [t[0], r[0]],
                        [t[1], r[1]]
                    ], p = 0; p < 2; ++p) s = 6 * t[p] - 12 * e[p] + 6 * i[p], n = -3 * t[p] + 9 * e[p] - 9 * i[p] + 3 * r[p], a = 3 * e[p] - 3 * t[p], s |= 0, a |= 0, 0 === (n |= 0) && 0 === s || (0 === n ? (o = -a / s) > 0 && o < 1 && u[p].push(this.calculateF(o, t, e, i, r, p)) : (h = s * s - 4 * a * n) >= 0 && ((l = (-s + bmSqrt(h)) / (2 * n)) > 0 && l < 1 && u[p].push(this.calculateF(l, t, e, i, r, p)), (c = (-s - bmSqrt(h)) / (2 * n)) > 0 && c < 1 && u[p].push(this.calculateF(c, t, e, i, r, p))));
                this.shapeBoundingBox.left = bmMin.apply(null, u[0]), this.shapeBoundingBox.top = bmMin.apply(null, u[1]), this.shapeBoundingBox.right = bmMax.apply(null, u[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, u[1])
            }, HShapeElement.prototype.calculateF = function(t, e, i, r, n, s) {
                return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * i[s] + 3 * (1 - t) * bmPow(t, 2) * r[s] + bmPow(t, 3) * n[s]
            }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                var i, r = t.length;
                for (i = 0; i < r; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e)
            }, HShapeElement.prototype.currentBoxContains = function(t) {
                return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
            }, HShapeElement.prototype.renderInnerContent = function() {
                if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var t = this.tempBoundingBox,
                        e = 999999;
                    if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                    var i = !1;
                    if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                        this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                        var r = this.shapeCont.style,
                            n = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        r.transform = n, r.webkitTransform = n
                    }
                }
            }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                if (this.isMasked = this.checkMasks(), this.isMasked) {
                    this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                    var t = createNS("g");
                    this.maskedElement.appendChild(t), this.innerElem = t
                } else this.renderType = "html", this.innerElem = this.layerElement;
                this.checkParenting()
            }, HTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = this.innerElem.style,
                    i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
                e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                var r, n, s = this.globalData.fontManager.getFontByName(t.f);
                if (!this.globalData.fontManager.chars)
                    if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
                    else {
                        e.fontFamily = s.fFamily;
                        var a = t.fWeight,
                            o = t.fStyle;
                        e.fontStyle = o, e.fontWeight = a
                    } var h, l, c, u = t.l;
                n = u.length;
                var p, f = this.mHelper,
                    d = "",
                    m = 0;
                for (r = 0; r < n; r += 1) {
                    if (this.globalData.fontManager.chars ? (this.textPaths[m] ? h = this.textPaths[m] : ((h = createNS("path")).setAttribute("stroke-linecap", "butt"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? c = (l = this.textSpans[m]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (c = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (l = this.textSpans[m], h = this.textPaths[m]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
                        var g, y = this.globalData.fontManager.getCharData(t.finalText[r], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                        if (g = y ? y.data : null, f.reset(), g && g.shapes && (p = g.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(f, p), h.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(h);
                        else {
                            if (this.innerElem.appendChild(l), g && g.shapes) {
                                document.body.appendChild(c);
                                var v = c.getBBox();
                                c.setAttribute("width", v.width + 2), c.setAttribute("height", v.height + 2), c.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                                var b = c.style,
                                    D = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                                b.transform = D, b.webkitTransform = D, u[r].yOffset = v.y - 1
                            } else c.setAttribute("width", 1), c.setAttribute("height", 1);
                            l.appendChild(c)
                        }
                    } else if (h.textContent = u[r].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(h);
                    else {
                        this.innerElem.appendChild(l);
                        var _ = h.style,
                            E = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                        _.transform = E, _.webkitTransform = E
                    }
                    this.isMasked ? this.textSpans[m] = h : this.textSpans[m] = l, this.textSpans[m].style.display = "block", this.textPaths[m] = h, m += 1
                }
                for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
            }, HTextElement.prototype.renderInnerContent = function() {
                var t;
                if (this.data.singleShape) {
                    if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                    if (this.isMasked && this.finalTransform._matMdf) {
                        this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                        var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                        t.transform = e, t.webkitTransform = e
                    }
                }
                if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                    var i, r, n, s, a, o = 0,
                        h = this.textAnimator.renderedLetters,
                        l = this.textProperty.currentData.l;
                    for (r = l.length, i = 0; i < r; i += 1) l[i].n ? o += 1 : (s = this.textSpans[i], a = this.textPaths[i], n = h[o], o += 1, n._mdf.m && (this.isMasked ? s.setAttribute("transform", n.m) : (s.style.webkitTransform = n.m, s.style.transform = n.m)), s.style.opacity = n.o, n.sw && n._mdf.sw && a.setAttribute("stroke-width", n.sw), n.sc && n._mdf.sc && a.setAttribute("stroke", n.sc), n.fc && n._mdf.fc && (a.setAttribute("fill", n.fc), a.style.color = n.fc));
                    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var c = this.innerElem.getBBox();
                        this.currentBBox.w !== c.width && (this.currentBBox.w = c.width, this.svgElement.setAttribute("width", c.width)), this.currentBBox.h !== c.height && (this.currentBBox.h = c.height, this.svgElement.setAttribute("height", c.height));
                        if (this.currentBBox.w !== c.width + 2 || this.currentBBox.h !== c.height + 2 || this.currentBBox.x !== c.x - 1 || this.currentBBox.y !== c.y - 1) {
                            this.currentBBox.w = c.width + 2, this.currentBBox.h = c.height + 2, this.currentBBox.x = c.x - 1, this.currentBBox.y = c.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                            var u = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                            t.transform = u, t.webkitTransform = u
                        }
                    }
                }
            }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData),
                    e = new Image;
                this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
            }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                var t, e, i, r, n = this.comp.threeDElements.length;
                for (t = 0; t < n; t += 1)
                    if ("3d" === (e = this.comp.threeDElements[t]).type) {
                        i = e.perspectiveElem.style, r = e.container.style;
                        var s = this.pe.v + "px",
                            a = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        i.perspective = s, i.webkitPerspective = s, r.transformOrigin = "0px 0px 0px", r.mozTransformOrigin = "0px 0px 0px", r.webkitTransformOrigin = "0px 0px 0px", i.transform = a, i.webkitTransform = a
                    }
            }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                var t, e, i = this._isFirstFrame;
                if (this.hierarchy)
                    for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i;
                if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                    if (this.mat.reset(), this.hierarchy)
                        for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                            var r = this.hierarchy[t].finalTransform.mProp;
                            this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2])
                        }
                    if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                        var n;
                        n = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                        var s = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)),
                            a = [n[0] / s, n[1] / s, n[2] / s],
                            o = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                            h = Math.atan2(a[1], o),
                            l = Math.atan2(a[0], -a[2]);
                        this.mat.rotateY(l).rotateX(-h)
                    }
                    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                    var c = !this._prevMat.equals(this.mat);
                    if ((c || this.pe._mdf) && this.comp.threeDElements) {
                        var u, p, f;
                        for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                            if ("3d" === (u = this.comp.threeDElements[t]).type) {
                                if (c) {
                                    var d = this.mat.toCSS();
                                    (f = u.container.style).transform = d, f.webkitTransform = d
                                }
                                this.pe._mdf && ((p = u.perspectiveElem.style).perspective = this.pe.v + "px", p.webkitPerspective = this.pe.v + "px")
                            } this.mat.clone(this._prevMat)
                    }
                }
                this._isFirstFrame = !1
            }, HCameraElement.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0)
            }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                return null
            }, HEffects.prototype.renderFrame = function() {};
            var animationManager = function() {
                    var t = {},
                        e = [],
                        i = 0,
                        r = 0,
                        n = 0,
                        s = !0,
                        a = !1;

                    function o(t) {
                        for (var i = 0, n = t.target; i < r;) e[i].animation === n && (e.splice(i, 1), i -= 1, r -= 1, n.isPaused || c()), i += 1
                    }

                    function h(t, i) {
                        if (!t) return null;
                        for (var n = 0; n < r;) {
                            if (e[n].elem === t && null !== e[n].elem) return e[n].animation;
                            n += 1
                        }
                        var s = new AnimationItem;
                        return u(s, t), s.setData(t, i), s
                    }

                    function l() {
                        n += 1, d()
                    }

                    function c() {
                        n -= 1
                    }

                    function u(t, i) {
                        t.addEventListener("destroy", o), t.addEventListener("_active", l), t.addEventListener("_idle", c), e.push({
                            elem: i,
                            animation: t
                        }), r += 1
                    }

                    function p(t) {
                        var o, h = t - i;
                        for (o = 0; o < r; o += 1) e[o].animation.advanceTime(h);
                        i = t, n && !a ? window.requestAnimationFrame(p) : s = !0
                    }

                    function f(t) {
                        i = t, window.requestAnimationFrame(p)
                    }

                    function d() {
                        !a && n && s && (window.requestAnimationFrame(f), s = !1)
                    }
                    return t.registerAnimation = h, t.loadAnimation = function(t) {
                        var e = new AnimationItem;
                        return u(e, null), e.setParams(t), e
                    }, t.setSpeed = function(t, i) {
                        var n;
                        for (n = 0; n < r; n += 1) e[n].animation.setSpeed(t, i)
                    }, t.setDirection = function(t, i) {
                        var n;
                        for (n = 0; n < r; n += 1) e[n].animation.setDirection(t, i)
                    }, t.play = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1) e[i].animation.play(t)
                    }, t.pause = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1) e[i].animation.pause(t)
                    }, t.stop = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1) e[i].animation.stop(t)
                    }, t.togglePause = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1) e[i].animation.togglePause(t)
                    }, t.searchAnimations = function(t, e, i) {
                        var r, n = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                            s = n.length;
                        for (r = 0; r < s; r += 1) i && n[r].setAttribute("data-bm-type", i), h(n[r], t);
                        if (e && 0 === s) {
                            i || (i = "svg");
                            var a = document.getElementsByTagName("body")[0];
                            a.innerText = "";
                            var o = createTag("div");
                            o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), a.appendChild(o), h(o, t)
                        }
                    }, t.resize = function() {
                        var t;
                        for (t = 0; t < r; t += 1) e[t].animation.resize()
                    }, t.goToAndStop = function(t, i, n) {
                        var s;
                        for (s = 0; s < r; s += 1) e[s].animation.goToAndStop(t, i, n)
                    }, t.destroy = function(t) {
                        var i;
                        for (i = r - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
                    }, t.freeze = function() {
                        a = !0
                    }, t.unfreeze = function() {
                        a = !1, d()
                    }, t.setVolume = function(t, i) {
                        var n;
                        for (n = 0; n < r; n += 1) e[n].animation.setVolume(t, i)
                    }, t.mute = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1) e[i].animation.mute(t)
                    }, t.unmute = function(t) {
                        var i;
                        for (i = 0; i < r; i += 1) e[i].animation.unmute(t)
                    }, t.getRegisteredAnimations = function() {
                        var t, i = e.length,
                            r = [];
                        for (t = 0; t < i; t += 1) r.push(e[t].animation);
                        return r
                    }, t
                }(),
                AnimationItem = function() {
                    this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory()
                };
            extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                var e = "svg";
                switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
                    case "canvas":
                        this.renderer = new CanvasRenderer(this, t.rendererSettings);
                        break;
                    case "svg":
                        this.renderer = new SVGRenderer(this, t.rendererSettings);
                        break;
                    default:
                        this.renderer = new HybridRenderer(this, t.rendererSettings)
                }
                this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function() {
                    this.trigger("data_failed")
                }.bind(this)))
            }, AnimationItem.prototype.setData = function(t, e) {
                e && "object" != typeof e && (e = JSON.parse(e));
                var i = {
                        wrapper: t,
                        animationData: e
                    },
                    r = t.attributes;
                i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : "canvas";
                var n = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
                "false" === n ? i.loop = !1 : "true" === n ? i.loop = !0 : "" !== n && (i.loop = parseInt(n, 10));
                var s = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
                i.autoplay = "false" !== s, i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), this.setParams(i)
            }, AnimationItem.prototype.includeLayers = function(t) {
                t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                var e, i, r = this.animationData.layers,
                    n = r.length,
                    s = t.layers,
                    a = s.length;
                for (i = 0; i < a; i += 1)
                    for (e = 0; e < n;) {
                        if (r[e].id === s[i].id) {
                            r[e] = s[i];
                            break
                        }
                        e += 1
                    }
                if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                    for (n = t.assets.length, e = 0; e < n; e += 1) this.animationData.assets.push(t.assets[e]);
                this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
            }, AnimationItem.prototype.loadNextSegment = function() {
                var t = this.animationData.segments;
                if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                var e = t.shift();
                this.timeCompleted = e.time * this.frameRate;
                var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                this.segmentPos += 1, assetLoader.load(i, this.includeLayers.bind(this), function() {
                    this.trigger("data_failed")
                }.bind(this))
            }, AnimationItem.prototype.loadSegments = function() {
                this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
            }, AnimationItem.prototype.imagesLoaded = function() {
                this.trigger("loaded_images"), this.checkLoaded()
            }, AnimationItem.prototype.preloadImages = function() {
                this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
            }, AnimationItem.prototype.configAnimation = function(t) {
                if (this.renderer) try {
                    this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                } catch (t) {
                    this.triggerConfigError(t)
                }
            }, AnimationItem.prototype.waitForFontsLoaded = function() {
                this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
            }, AnimationItem.prototype.checkLoaded = function() {
                this.isLoaded || !this.renderer.globalData.fontManager.isLoaded || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                    this.trigger("DOMLoaded")
                }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
            }, AnimationItem.prototype.resize = function() {
                this.renderer.updateContainerSize()
            }, AnimationItem.prototype.setSubframe = function(t) {
                this.isSubframeEnabled = !!t
            }, AnimationItem.prototype.gotoFrame = function() {
                this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
            }, AnimationItem.prototype.renderFrame = function() {
                if (!1 !== this.isLoaded) try {
                    this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                } catch (t) {
                    this.triggerRenderFrameError(t)
                }
            }, AnimationItem.prototype.play = function(t) {
                t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
            }, AnimationItem.prototype.pause = function(t) {
                t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause())
            }, AnimationItem.prototype.togglePause = function(t) {
                t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
            }, AnimationItem.prototype.stop = function(t) {
                t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
            }, AnimationItem.prototype.goToAndStop = function(t, e, i) {
                i && this.name !== i || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause())
            }, AnimationItem.prototype.goToAndPlay = function(t, e, i) {
                this.goToAndStop(t, e, i), this.play()
            }, AnimationItem.prototype.advanceTime = function(t) {
                if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                    var e = this.currentRawFrame + t * this.frameModifier,
                        i = !1;
                    e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                }
            }, AnimationItem.prototype.adjustSegment = function(t, e) {
                this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
            }, AnimationItem.prototype.setSegment = function(t, e) {
                var i = -1;
                this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
            }, AnimationItem.prototype.playSegments = function(t, e) {
                if (e && (this.segments.length = 0), "object" == typeof t[0]) {
                    var i, r = t.length;
                    for (i = 0; i < r; i += 1) this.segments.push(t[i])
                } else this.segments.push(t);
                this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
            }, AnimationItem.prototype.resetSegments = function(t) {
                this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
            }, AnimationItem.prototype.checkSegments = function(t) {
                return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
            }, AnimationItem.prototype.destroy = function(t) {
                t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
            }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                this.currentRawFrame = t, this.gotoFrame()
            }, AnimationItem.prototype.setSpeed = function(t) {
                this.playSpeed = t, this.updaFrameModifier()
            }, AnimationItem.prototype.setDirection = function(t) {
                this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
            }, AnimationItem.prototype.setVolume = function(t, e) {
                e && this.name !== e || this.audioController.setVolume(t)
            }, AnimationItem.prototype.getVolume = function() {
                return this.audioController.getVolume()
            }, AnimationItem.prototype.mute = function(t) {
                t && this.name !== t || this.audioController.mute()
            }, AnimationItem.prototype.unmute = function(t) {
                t && this.name !== t || this.audioController.unmute()
            }, AnimationItem.prototype.updaFrameModifier = function() {
                this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
            }, AnimationItem.prototype.getPath = function() {
                return this.path
            }, AnimationItem.prototype.getAssetsPath = function(t) {
                var e = "";
                if (t.e) e = t.p;
                else if (this.assetsPath) {
                    var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
                } else e = this.path, e += t.u ? t.u : "", e += t.p;
                return e
            }, AnimationItem.prototype.getAssetData = function(t) {
                for (var e = 0, i = this.assets.length; e < i;) {
                    if (t === this.assets[e].id) return this.assets[e];
                    e += 1
                }
                return null
            }, AnimationItem.prototype.hide = function() {
                this.renderer.hide()
            }, AnimationItem.prototype.show = function() {
                this.renderer.show()
            }, AnimationItem.prototype.getDuration = function(t) {
                return t ? this.totalFrames : this.totalFrames / this.frameRate
            }, AnimationItem.prototype.trigger = function(t) {
                if (this._cbs && this._cbs[t]) switch (t) {
                    case "enterFrame":
                        this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                        break;
                    case "loopComplete":
                        this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                        break;
                    case "complete":
                        this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                        break;
                    case "segmentStart":
                        this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                        break;
                    case "destroy":
                        this.triggerEvent(t, new BMDestroyEvent(t, this));
                        break;
                    default:
                        this.triggerEvent(t)
                }
                "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
            }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
                var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
            }, AnimationItem.prototype.triggerConfigError = function(t) {
                var e = new BMConfigErrorEvent(t, this.currentFrame);
                this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
            };
            var Expressions = function() {
                var t = {};
                return t.initExpressions = function(t) {
                    var e = 0,
                        i = [];
                    t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                        e += 1
                    }, t.renderer.globalData.popExpression = function() {
                        0 === (e -= 1) && function() {
                            var t, e = i.length;
                            for (t = 0; t < e; t += 1) i[t].release();
                            i.length = 0
                        }()
                    }, t.renderer.globalData.registerExpressionProperty = function(t) {
                        -1 === i.indexOf(t) && i.push(t)
                    }
                }, t
            }();
            expressionsPlugin = Expressions;
            var ExpressionManager = function() {
                    var ob = {},
                        Math = BMMath,
                        window = null,
                        document = null;

                    function $bm_isInstanceOfArray(t) {
                        return t.constructor === Array || t.constructor === Float32Array
                    }

                    function isNumerable(t, e) {
                        return "number" === t || "boolean" === t || "string" === t || e instanceof Number
                    }

                    function $bm_neg(t) {
                        var e = typeof t;
                        if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                        if ($bm_isInstanceOfArray(t)) {
                            var i, r = t.length,
                                n = [];
                            for (i = 0; i < r; i += 1) n[i] = -t[i];
                            return n
                        }
                        return t.propType ? t.v : -t
                    }
                    var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                        easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                        easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                    function sum(t, e) {
                        var i = typeof t,
                            r = typeof e;
                        if ("string" === i || "string" === r) return t + e;
                        if (isNumerable(i, t) && isNumerable(r, e)) return t + e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] += e, t;
                        if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                            for (var n = 0, s = t.length, a = e.length, o = []; n < s || n < a;)("number" == typeof t[n] || t[n] instanceof Number) && ("number" == typeof e[n] || e[n] instanceof Number) ? o[n] = t[n] + e[n] : o[n] = void 0 === e[n] ? t[n] : t[n] || e[n], n += 1;
                            return o
                        }
                        return 0
                    }
                    var add = sum;

                    function sub(t, e) {
                        var i = typeof t,
                            r = typeof e;
                        if (isNumerable(i, t) && isNumerable(r, e)) return "string" === i && (t = parseInt(t, 10)), "string" === r && (e = parseInt(e, 10)), t - e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] -= e, t;
                        if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                            for (var n = 0, s = t.length, a = e.length, o = []; n < s || n < a;)("number" == typeof t[n] || t[n] instanceof Number) && ("number" == typeof e[n] || e[n] instanceof Number) ? o[n] = t[n] - e[n] : o[n] = void 0 === e[n] ? t[n] : t[n] || e[n], n += 1;
                            return o
                        }
                        return 0
                    }

                    function mul(t, e) {
                        var i, r, n, s = typeof t,
                            a = typeof e;
                        if (isNumerable(s, t) && isNumerable(a, e)) return t * e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                            for (n = t.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t[r] * e;
                            return i
                        }
                        if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                            for (n = e.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t * e[r];
                            return i
                        }
                        return 0
                    }

                    function div(t, e) {
                        var i, r, n, s = typeof t,
                            a = typeof e;
                        if (isNumerable(s, t) && isNumerable(a, e)) return t / e;
                        if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                            for (n = t.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t[r] / e;
                            return i
                        }
                        if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                            for (n = e.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t / e[r];
                            return i
                        }
                        return 0
                    }

                    function mod(t, e) {
                        return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
                    }
                    var $bm_sum = sum,
                        $bm_sub = sub,
                        $bm_mul = mul,
                        $bm_div = div,
                        $bm_mod = mod;

                    function clamp(t, e, i) {
                        if (e > i) {
                            var r = i;
                            i = e, e = r
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
                    var degrees_to_radians = radiansToDegrees,
                        helperLengthArray = [0, 0, 0, 0, 0, 0];

                    function length(t, e) {
                        if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                        var i;
                        e || (e = helperLengthArray);
                        var r = Math.min(t.length, e.length),
                            n = 0;
                        for (i = 0; i < r; i += 1) n += Math.pow(e[i] - t[i], 2);
                        return Math.sqrt(n)
                    }

                    function normalize(t) {
                        return div(t, length(t))
                    }

                    function rgbToHsl(t) {
                        var e, i, r = t[0],
                            n = t[1],
                            s = t[2],
                            a = Math.max(r, n, s),
                            o = Math.min(r, n, s),
                            h = (a + o) / 2;
                        if (a === o) e = 0, i = 0;
                        else {
                            var l = a - o;
                            switch (i = h > .5 ? l / (2 - a - o) : l / (a + o), a) {
                                case r:
                                    e = (n - s) / l + (n < s ? 6 : 0);
                                    break;
                                case n:
                                    e = (s - r) / l + 2;
                                    break;
                                case s:
                                    e = (r - n) / l + 4
                            }
                            e /= 6
                        }
                        return [e, i, h, t[3]]
                    }

                    function hue2rgb(t, e, i) {
                        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                    }

                    function hslToRgb(t) {
                        var e, i, r, n = t[0],
                            s = t[1],
                            a = t[2];
                        if (0 === s) e = a, r = a, i = a;
                        else {
                            var o = a < .5 ? a * (1 + s) : a + s - a * s,
                                h = 2 * a - o;
                            e = hue2rgb(h, o, n + 1 / 3), i = hue2rgb(h, o, n), r = hue2rgb(h, o, n - 1 / 3)
                        }
                        return [e, i, r, t[3]]
                    }

                    function linear(t, e, i, r, n) {
                        if (void 0 !== r && void 0 !== n || (r = e, n = i, e = 0, i = 1), i < e) {
                            var s = i;
                            i = e, e = s
                        }
                        if (t <= e) return r;
                        if (t >= i) return n;
                        var a, o = i === e ? 0 : (t - e) / (i - e);
                        if (!r.length) return r + (n - r) * o;
                        var h = r.length,
                            l = createTypedArray("float32", h);
                        for (a = 0; a < h; a += 1) l[a] = r[a] + (n[a] - r[a]) * o;
                        return l
                    }

                    function random(t, e) {
                        if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                            var i, r = e.length;
                            t || (t = createTypedArray("float32", r));
                            var n = createTypedArray("float32", r),
                                s = BMMath.random();
                            for (i = 0; i < r; i += 1) n[i] = t[i] + s * (e[i] - t[i]);
                            return n
                        }
                        return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                    }

                    function createPath(t, e, i, r) {
                        var n, s = t.length,
                            a = shapePool.newElement();
                        a.setPathData(!!r, s);
                        var o, h, l = [0, 0];
                        for (n = 0; n < s; n += 1) o = e && e[n] ? e[n] : l, h = i && i[n] ? i[n] : l, a.setTripleAt(t[n][0], t[n][1], h[0] + t[n][0], h[1] + t[n][1], o[0] + t[n][0], o[1] + t[n][1], n, !0);
                        return a
                    }

                    function initiateExpression(elem, data, property) {
                        var val = data.x,
                            needsVelocity = /velocity(?![\w\d])/.test(val),
                            _needsRandom = -1 !== val.indexOf("random"),
                            elemType = elem.data.ty,
                            transform, $bm_transform, content, effect, thisProperty = property;
                        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                            get: function() {
                                return thisProperty.v
                            }
                        }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                        var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                            outPoint = elem.data.op / elem.comp.globalData.frameRate,
                            width = elem.data.sw ? elem.data.sw : 0,
                            height = elem.data.sh ? elem.data.sh : 0,
                            name = elem.data.nm,
                            loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                            numKeys = property.kf ? data.k.length : 0,
                            active = !this.data || !0 !== this.data.hd,
                            wiggle = function(t, e) {
                                var i, r, n = this.pv.length ? this.pv.length : 1,
                                    s = createTypedArray("float32", n);
                                var a = Math.floor(5 * time);
                                for (i = 0, r = 0; i < a;) {
                                    for (r = 0; r < n; r += 1) s[r] += -e + 2 * e * BMMath.random();
                                    i += 1
                                }
                                var o = 5 * time,
                                    h = o - Math.floor(o),
                                    l = createTypedArray("float32", n);
                                if (n > 1) {
                                    for (r = 0; r < n; r += 1) l[r] = this.pv[r] + s[r] + (-e + 2 * e * BMMath.random()) * h;
                                    return l
                                }
                                return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * h
                            }.bind(this);

                        function loopInDuration(t, e) {
                            return loopIn(t, e, !0)
                        }

                        function loopOutDuration(t, e) {
                            return loopOut(t, e, !0)
                        }
                        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                            time, velocity, value, text, textIndex, textTotal, selectorValue;

                        function lookAt(t, e) {
                            var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                                r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
                            return [-Math.atan2(i[1], i[2]) / degToRads, r, 0]
                        }

                        function easeOut(t, e, i, r, n) {
                            return applyEase(easeOutBez, t, e, i, r, n)
                        }

                        function easeIn(t, e, i, r, n) {
                            return applyEase(easeInBez, t, e, i, r, n)
                        }

                        function ease(t, e, i, r, n) {
                            return applyEase(easeInOutBez, t, e, i, r, n)
                        }

                        function applyEase(t, e, i, r, n, s) {
                            void 0 === n ? (n = i, s = r) : e = (e - i) / (r - i), e > 1 ? e = 1 : e < 0 && (e = 0);
                            var a = t(e);
                            if ($bm_isInstanceOfArray(n)) {
                                var o, h = n.length,
                                    l = createTypedArray("float32", h);
                                for (o = 0; o < h; o += 1) l[o] = (s[o] - n[o]) * a + n[o];
                                return l
                            }
                            return (s - n) * a + n
                        }

                        function nearestKey(t) {
                            var e, i, r, n = data.k.length;
                            if (data.k.length && "number" != typeof data.k[0])
                                if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, r = data.k[0].t;
                                else {
                                    for (e = 0; e < n - 1; e += 1) {
                                        if (t === data.k[e].t) {
                                            i = e + 1, r = data.k[e].t;
                                            break
                                        }
                                        if (t > data.k[e].t && t < data.k[e + 1].t) {
                                            t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, r = data.k[e + 1].t) : (i = e + 1, r = data.k[e].t);
                                            break
                                        }
                                    } - 1 === i && (i = e + 1, r = data.k[e].t)
                                }
                            else i = 0, r = 0;
                            var s = {};
                            return s.index = i, s.time = r / elem.comp.globalData.frameRate, s
                        }

                        function key(t) {
                            var e, i, r;
                            if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                            t -= 1, e = {
                                time: data.k[t].t / elem.comp.globalData.frameRate,
                                value: []
                            };
                            var n = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                            for (r = n.length, i = 0; i < r; i += 1) e[i] = n[i], e.value[i] = n[i];
                            return e
                        }

                        function framesToTime(t, e) {
                            return e || (e = elem.comp.globalData.frameRate), t / e
                        }

                        function timeToFrames(t, e) {
                            return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                        }

                        function seedRandom(t) {
                            BMMath.seedrandom(randSeed + t)
                        }

                        function sourceRectAtTime() {
                            return elem.sourceRectAtTime()
                        }

                        function substring(t, e) {
                            return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                        }

                        function substr(t, e) {
                            return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                        }

                        function posterizeTime(t) {
                            time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                        }
                        var index = elem.data.ind,
                            hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                            parent, randSeed = Math.floor(1e6 * Math.random()),
                            globalData = elem.globalData;

                        function executeExpression(t) {
                            return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
                        }
                        return executeExpression
                    }
                    return ob.initiateExpression = initiateExpression, ob
                }(),
                expressionHelpers = {
                    searchExpressions: function(t, e, i) {
                        e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
                    },
                    getSpeedAtTime: function(t) {
                        var e = this.getValueAtTime(t),
                            i = this.getValueAtTime(t + -.01),
                            r = 0;
                        if (e.length) {
                            var n;
                            for (n = 0; n < e.length; n += 1) r += Math.pow(i[n] - e[n], 2);
                            r = 100 * Math.sqrt(r)
                        } else r = 0;
                        return r
                    },
                    getVelocityAtTime: function(t) {
                        if (void 0 !== this.vel) return this.vel;
                        var e, i, r = this.getValueAtTime(t),
                            n = this.getValueAtTime(t + -.001);
                        if (r.length)
                            for (e = createTypedArray("float32", r.length), i = 0; i < r.length; i += 1) e[i] = (n[i] - r[i]) / -.001;
                        else e = (n - r) / -.001;
                        return e
                    },
                    getValueAtTime: function(t) {
                        return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                    },
                    getStaticValueAtTime: function() {
                        return this.pv
                    },
                    setGroupProperty: function(t) {
                        this.propertyGroup = t
                    }
                };
            ! function() {
                function t(t, e, i) {
                    if (!this.k || !this.keyframes) return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var r, n, s, a, o, h = this.comp.renderedFrame,
                        l = this.keyframes,
                        c = l[l.length - 1].t;
                    if (h <= c) return this.pv;
                    if (i ? n = c - (r = e ? Math.abs(c - this.elem.comp.globalData.frameRate * e) : Math.max(0, c - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = c - (n = l[l.length - 1 - e].t)), "pingpong" === t) {
                        if (Math.floor((h - n) / r) % 2 != 0) return this.getValueAtTime((r - (h - n) % r + n) / this.comp.globalData.frameRate, 0)
                    } else {
                        if ("offset" === t) {
                            var u = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                                p = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                                f = this.getValueAtTime(((h - n) % r + n) / this.comp.globalData.frameRate, 0),
                                d = Math.floor((h - n) / r);
                            if (this.pv.length) {
                                for (a = (o = new Array(u.length)).length, s = 0; s < a; s += 1) o[s] = (p[s] - u[s]) * d + f[s];
                                return o
                            }
                            return (p - u) * d + f
                        }
                        if ("continue" === t) {
                            var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                                g = this.getValueAtTime((c - .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (a = (o = new Array(m.length)).length, s = 0; s < a; s += 1) o[s] = m[s] + (m[s] - g[s]) * ((h - c) / this.comp.globalData.frameRate) / 5e-4;
                                return o
                            }
                            return m + (h - c) / .001 * (m - g)
                        }
                    }
                    return this.getValueAtTime(((h - n) % r + n) / this.comp.globalData.frameRate, 0)
                }

                function e(t, e, i) {
                    if (!this.k) return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var r, n, s, a, o, h = this.comp.renderedFrame,
                        l = this.keyframes,
                        c = l[0].t;
                    if (h >= c) return this.pv;
                    if (i ? n = c + (r = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - c)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = (n = l[e].t) - c), "pingpong" === t) {
                        if (Math.floor((c - h) / r) % 2 == 0) return this.getValueAtTime(((c - h) % r + c) / this.comp.globalData.frameRate, 0)
                    } else {
                        if ("offset" === t) {
                            var u = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                                p = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                                f = this.getValueAtTime((r - (c - h) % r + c) / this.comp.globalData.frameRate, 0),
                                d = Math.floor((c - h) / r) + 1;
                            if (this.pv.length) {
                                for (a = (o = new Array(u.length)).length, s = 0; s < a; s += 1) o[s] = f[s] - (p[s] - u[s]) * d;
                                return o
                            }
                            return f - (p - u) * d
                        }
                        if ("continue" === t) {
                            var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                                g = this.getValueAtTime((c + .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (a = (o = new Array(m.length)).length, s = 0; s < a; s += 1) o[s] = m[s] + (m[s] - g[s]) * (c - h) / .001;
                                return o
                            }
                            return m + (m - g) * (c - h) / .001
                        }
                    }
                    return this.getValueAtTime((r - ((c - h) % r + c)) / this.comp.globalData.frameRate, 0)
                }

                function i(t, e) {
                    if (!this.k) return this.pv;
                    if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                    var i, r, n = this.comp.renderedFrame / this.comp.globalData.frameRate,
                        s = n - t,
                        a = e > 1 ? (n + t - s) / (e - 1) : 1,
                        o = 0,
                        h = 0;
                    for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                        if (r = this.getValueAtTime(s + o * a), this.pv.length)
                            for (h = 0; h < this.pv.length; h += 1) i[h] += r[h];
                        else i += r;
                        o += 1
                    }
                    if (this.pv.length)
                        for (h = 0; h < this.pv.length; h += 1) i[h] /= e;
                    else i /= e;
                    return i
                }

                function r(t) {
                    this._transformCachingAtTime || (this._transformCachingAtTime = {
                        v: new Matrix
                    });
                    var e = this._transformCachingAtTime.v;
                    if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                        var i = this.a.getValueAtTime(t);
                        e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
                    }
                    if (this.appliedTransformations < 2) {
                        var r = this.s.getValueAtTime(t);
                        e.scale(r[0] * this.s.mult, r[1] * this.s.mult, r[2] * this.s.mult)
                    }
                    if (this.sk && this.appliedTransformations < 3) {
                        var n = this.sk.getValueAtTime(t),
                            s = this.sa.getValueAtTime(t);
                        e.skewFromAxis(-n * this.sk.mult, s * this.sa.mult)
                    }
                    if (this.r && this.appliedTransformations < 4) {
                        var a = this.r.getValueAtTime(t);
                        e.rotate(-a * this.r.mult)
                    } else if (!this.r && this.appliedTransformations < 4) {
                        var o = this.rz.getValueAtTime(t),
                            h = this.ry.getValueAtTime(t),
                            l = this.rx.getValueAtTime(t),
                            c = this.or.getValueAtTime(t);
                        e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-c[2] * this.or.mult).rotateY(c[1] * this.or.mult).rotateX(c[0] * this.or.mult)
                    }
                    if (this.data.p && this.data.p.s) {
                        var u = this.px.getValueAtTime(t),
                            p = this.py.getValueAtTime(t);
                        if (this.data.p.z) {
                            var f = this.pz.getValueAtTime(t);
                            e.translate(u * this.px.mult, p * this.py.mult, -f * this.pz.mult)
                        } else e.translate(u * this.px.mult, p * this.py.mult, 0)
                    } else {
                        var d = this.p.getValueAtTime(t);
                        e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
                    }
                    return e
                }

                function n() {
                    return this.v.clone(new Matrix)
                }
                var s = TransformPropertyFactory.getTransformProperty;
                TransformPropertyFactory.getTransformProperty = function(t, e, i) {
                    var a = s(t, e, i);
                    return a.dynamicProperties.length ? a.getValueAtTime = r.bind(a) : a.getValueAtTime = n.bind(a), a.setGroupProperty = expressionHelpers.setGroupProperty, a
                };
                var a = PropertyFactory.getProp;
                PropertyFactory.getProp = function(r, n, s, o, h) {
                    var l = a(r, n, s, o, h);
                    l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = i, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = 1 === n.a ? n.k.length : 0, l.propertyIndex = n.ix;
                    var c = 0;
                    return 0 !== s && (c = createTypedArray("float32", 1 === n.a ? n.k[0].s.length : n.k.length)), l._cachingAtTime = {
                        lastFrame: initialDefaultFrame,
                        lastIndex: 0,
                        value: c
                    }, expressionHelpers.searchExpressions(r, n, l), l.k && h.addDynamicProperty(l), l
                };
                var o = ShapePropertyFactory.getConstructorFunction(),
                    h = ShapePropertyFactory.getKeyframedConstructorFunction();

                function l() {}
                l.prototype = {
                    vertices: function(t, e) {
                        this.k && this.getValue();
                        var i, r = this.v;
                        void 0 !== e && (r = this.getValueAtTime(e, 0));
                        var n = r._length,
                            s = r[t],
                            a = r.v,
                            o = createSizedArray(n);
                        for (i = 0; i < n; i += 1) o[i] = "i" === t || "o" === t ? [s[i][0] - a[i][0], s[i][1] - a[i][1]] : [s[i][0], s[i][1]];
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
                        void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                        for (var r, n = this._segmentsLength, s = n.lengths, a = n.totalLength * t, o = 0, h = s.length, l = 0; o < h;) {
                            if (l + s[o].addedLength > a) {
                                var c = o,
                                    u = i.c && o === h - 1 ? 0 : o + 1,
                                    p = (a - l) / s[o].addedLength;
                                r = bez.getPointInSegment(i.v[c], i.v[u], i.o[c], i.i[u], p, s[o]);
                                break
                            }
                            l += s[o].addedLength, o += 1
                        }
                        return r || (r = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), r
                    },
                    vectorOnPath: function(t, e, i) {
                        1 == t ? t = this.v.c : 0 == t && (t = .999);
                        var r = this.pointOnPath(t, e),
                            n = this.pointOnPath(t + .001, e),
                            s = n[0] - r[0],
                            a = n[1] - r[1],
                            o = Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2));
                        return 0 === o ? [0, 0] : "tangent" === i ? [s / o, a / o] : [-a / o, s / o]
                    },
                    tangentOnPath: function(t, e) {
                        return this.vectorOnPath(t, e, "tangent")
                    },
                    normalOnPath: function(t, e) {
                        return this.vectorOnPath(t, e, "normal")
                    },
                    setGroupProperty: expressionHelpers.setGroupProperty,
                    getValueAtTime: expressionHelpers.getStaticValueAtTime
                }, extendPrototype([l], o), extendPrototype([l], h), h.prototype.getValueAtTime = function(t) {
                    return this._cachingAtTime || (this._cachingAtTime = {
                        shapeValue: shapePool.clone(this.pv),
                        lastIndex: 0,
                        lastTime: initialDefaultFrame
                    }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                }, h.prototype.initiateExpression = ExpressionManager.initiateExpression;
                var c = ShapePropertyFactory.getShapeProp;
                ShapePropertyFactory.getShapeProp = function(t, e, i, r, n) {
                    var s = c(t, e, i, r, n);
                    return s.propertyIndex = e.ix, s.lock = !1, 3 === i ? expressionHelpers.searchExpressions(t, e.pt, s) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, s), s.k && t.addDynamicProperty(s), s
                }
            }(), TextProperty.prototype.getExpressionValue = function(t, e) {
                var i = this.calculateExpression(e);
                if (t.t !== i) {
                    var r = {};
                    return this.copyData(r, t), r.t = i.toString(), r.__complete = !1, r
                }
                return t
            }, TextProperty.prototype.searchProperty = function() {
                var t = this.searchKeyframes(),
                    e = this.searchExpressions();
                return this.kf = t || e, this.kf
            }, TextProperty.prototype.searchExpressions = function() {
                return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
            };
            var ShapePathInterface = function(t, e, i) {
                    var r = e.sh;

                    function n(t) {
                        return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? n.path : null
                    }
                    var s = propertyGroupFactory(n, i);
                    return r.setGroupProperty(PropertyInterface("Path", s)), Object.defineProperties(n, {
                        path: {
                            get: function() {
                                return r.k && r.getValue(), r
                            }
                        },
                        shape: {
                            get: function() {
                                return r.k && r.getValue(), r
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
                        },
                        propertyGroup: {
                            value: i
                        }
                    }), n
                },
                propertyGroupFactory = function(t, e) {
                    return function(i) {
                        return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1)
                    }
                },
                PropertyInterface = function(t, e) {
                    var i = {
                        _name: t
                    };
                    return function(t) {
                        return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1)
                    }
                },
                ShapeExpressionInterface = function() {
                    function t(t, s, u) {
                        var p, f = [],
                            d = t ? t.length : 0;
                        for (p = 0; p < d; p += 1) "gr" === t[p].ty ? f.push(e(t[p], s[p], u)) : "fl" === t[p].ty ? f.push(i(t[p], s[p], u)) : "st" === t[p].ty ? f.push(r(t[p], s[p], u)) : "tm" === t[p].ty ? f.push(n(t[p], s[p], u)) : "tr" === t[p].ty || ("el" === t[p].ty ? f.push(a(t[p], s[p], u)) : "sr" === t[p].ty ? f.push(o(t[p], s[p], u)) : "sh" === t[p].ty ? f.push(ShapePathInterface(t[p], s[p], u)) : "rc" === t[p].ty ? f.push(h(t[p], s[p], u)) : "rd" === t[p].ty ? f.push(l(t[p], s[p], u)) : "rp" === t[p].ty && f.push(c(t[p], s[p], u)));
                        return f
                    }

                    function e(e, i, r) {
                        var n = function(t) {
                            switch (t) {
                                case "ADBE Vectors Group":
                                case "Contents":
                                case 2:
                                    return n.content;
                                default:
                                    return n.transform
                            }
                        };
                        n.propertyGroup = propertyGroupFactory(n, r);
                        var a = function(e, i, r) {
                                var n, a = function(t) {
                                    for (var e = 0, i = n.length; e < i;) {
                                        if (n[e]._name === t || n[e].mn === t || n[e].propertyIndex === t || n[e].ix === t || n[e].ind === t) return n[e];
                                        e += 1
                                    }
                                    return "number" == typeof t ? n[t - 1] : null
                                };
                                a.propertyGroup = propertyGroupFactory(a, r), n = t(e.it, i.it, a.propertyGroup), a.numProperties = n.length;
                                var o = s(e.it[e.it.length - 1], i.it[i.it.length - 1], a.propertyGroup);
                                return a.transform = o, a.propertyIndex = e.cix, a._name = e.nm, a
                            }(e, i, n.propertyGroup),
                            o = s(e.it[e.it.length - 1], i.it[i.it.length - 1], n.propertyGroup);
                        return n.content = a, n.transform = o, Object.defineProperty(n, "_name", {
                            get: function() {
                                return e.nm
                            }
                        }), n.numProperties = e.np, n.propertyIndex = e.ix, n.nm = e.nm, n.mn = e.mn, n
                    }

                    function i(t, e, i) {
                        function r(t) {
                            return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : null
                        }
                        return Object.defineProperties(r, {
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
                        }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), r
                    }

                    function r(t, e, i) {
                        var r, n = propertyGroupFactory(l, i),
                            s = propertyGroupFactory(h, n);

                        function a(i) {
                            Object.defineProperty(h, t.d[i].nm, {
                                get: ExpressionPropertyInterface(e.d.dataProps[i].p)
                            })
                        }
                        var o = t.d ? t.d.length : 0,
                            h = {};
                        for (r = 0; r < o; r += 1) a(r), e.d.dataProps[r].p.setGroupProperty(s);

                        function l(t) {
                            return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null
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
                        }), e.c.setGroupProperty(PropertyInterface("Color", n)), e.o.setGroupProperty(PropertyInterface("Opacity", n)), e.w.setGroupProperty(PropertyInterface("Stroke Width", n)), l
                    }

                    function n(t, e, i) {
                        function r(e) {
                            return e === t.e.ix || "End" === e || "end" === e ? r.end : e === t.s.ix ? r.start : e === t.o.ix ? r.offset : null
                        }
                        var n = propertyGroupFactory(r, i);
                        return r.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", n)), e.e.setGroupProperty(PropertyInterface("End", n)), e.o.setGroupProperty(PropertyInterface("Offset", n)), r.propertyIndex = t.ix, r.propertyGroup = i, Object.defineProperties(r, {
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
                        }), r.mn = t.mn, r
                    }

                    function s(t, e, i) {
                        function r(e) {
                            return t.a.ix === e || "Anchor Point" === e ? r.anchorPoint : t.o.ix === e || "Opacity" === e ? r.opacity : t.p.ix === e || "Position" === e ? r.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? r.rotation : t.s.ix === e || "Scale" === e ? r.scale : t.sk && t.sk.ix === e || "Skew" === e ? r.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? r.skewAxis : null
                        }
                        var n = propertyGroupFactory(r, i);
                        return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", n)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", n)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", n)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", n)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", n)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", n)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", n))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", n)), Object.defineProperties(r, {
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
                        }), r.ty = "tr", r.mn = t.mn, r.propertyGroup = i, r
                    }

                    function a(t, e, i) {
                        function r(e) {
                            return t.p.ix === e ? r.position : t.s.ix === e ? r.size : null
                        }
                        var n = propertyGroupFactory(r, i);
                        r.propertyIndex = t.ix;
                        var s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return s.s.setGroupProperty(PropertyInterface("Size", n)), s.p.setGroupProperty(PropertyInterface("Position", n)), Object.defineProperties(r, {
                            size: {
                                get: ExpressionPropertyInterface(s.s)
                            },
                            position: {
                                get: ExpressionPropertyInterface(s.p)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), r.mn = t.mn, r
                    }

                    function o(t, e, i) {
                        function r(e) {
                            return t.p.ix === e ? r.position : t.r.ix === e ? r.rotation : t.pt.ix === e ? r.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? r.outerRadius : t.os.ix === e ? r.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? r.innerRoundness : null : r.innerRadius
                        }
                        var n = propertyGroupFactory(r, i),
                            s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return r.propertyIndex = t.ix, s.or.setGroupProperty(PropertyInterface("Outer Radius", n)), s.os.setGroupProperty(PropertyInterface("Outer Roundness", n)), s.pt.setGroupProperty(PropertyInterface("Points", n)), s.p.setGroupProperty(PropertyInterface("Position", n)), s.r.setGroupProperty(PropertyInterface("Rotation", n)), t.ir && (s.ir.setGroupProperty(PropertyInterface("Inner Radius", n)), s.is.setGroupProperty(PropertyInterface("Inner Roundness", n))), Object.defineProperties(r, {
                            position: {
                                get: ExpressionPropertyInterface(s.p)
                            },
                            rotation: {
                                get: ExpressionPropertyInterface(s.r)
                            },
                            points: {
                                get: ExpressionPropertyInterface(s.pt)
                            },
                            outerRadius: {
                                get: ExpressionPropertyInterface(s.or)
                            },
                            outerRoundness: {
                                get: ExpressionPropertyInterface(s.os)
                            },
                            innerRadius: {
                                get: ExpressionPropertyInterface(s.ir)
                            },
                            innerRoundness: {
                                get: ExpressionPropertyInterface(s.is)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), r.mn = t.mn, r
                    }

                    function h(t, e, i) {
                        function r(e) {
                            return t.p.ix === e ? r.position : t.r.ix === e ? r.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? r.size : null
                        }
                        var n = propertyGroupFactory(r, i),
                            s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return r.propertyIndex = t.ix, s.p.setGroupProperty(PropertyInterface("Position", n)), s.s.setGroupProperty(PropertyInterface("Size", n)), s.r.setGroupProperty(PropertyInterface("Rotation", n)), Object.defineProperties(r, {
                            position: {
                                get: ExpressionPropertyInterface(s.p)
                            },
                            roundness: {
                                get: ExpressionPropertyInterface(s.r)
                            },
                            size: {
                                get: ExpressionPropertyInterface(s.s)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), r.mn = t.mn, r
                    }

                    function l(t, e, i) {
                        function r(e) {
                            return t.r.ix === e || "Round Corners 1" === e ? r.radius : null
                        }
                        var n = propertyGroupFactory(r, i),
                            s = e;
                        return r.propertyIndex = t.ix, s.rd.setGroupProperty(PropertyInterface("Radius", n)), Object.defineProperties(r, {
                            radius: {
                                get: ExpressionPropertyInterface(s.rd)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), r.mn = t.mn, r
                    }

                    function c(t, e, i) {
                        function r(e) {
                            return t.c.ix === e || "Copies" === e ? r.copies : t.o.ix === e || "Offset" === e ? r.offset : null
                        }
                        var n = propertyGroupFactory(r, i),
                            s = e;
                        return r.propertyIndex = t.ix, s.c.setGroupProperty(PropertyInterface("Copies", n)), s.o.setGroupProperty(PropertyInterface("Offset", n)), Object.defineProperties(r, {
                            copies: {
                                get: ExpressionPropertyInterface(s.c)
                            },
                            offset: {
                                get: ExpressionPropertyInterface(s.o)
                            },
                            _name: {
                                value: t.nm
                            }
                        }), r.mn = t.mn, r
                    }
                    return function(e, i, r) {
                        var n;

                        function s(t) {
                            if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? r : n[t - 1];
                            for (var e = 0, i = n.length; e < i;) {
                                if (n[e]._name === t) return n[e];
                                e += 1
                            }
                            return null
                        }
                        return s.propertyGroup = propertyGroupFactory(s, (function() {
                            return r
                        })), n = t(e, i, s.propertyGroup), s.numProperties = n.length, s._name = "Contents", s
                    }
                }(),
                TextExpressionInterface = function(t) {
                    var e;

                    function i(t) {
                        switch (t) {
                            case "ADBE Text Document":
                                return i.sourceText;
                            default:
                                return null
                        }
                    }
                    return Object.defineProperty(i, "sourceText", {
                        get: function() {
                            t.textProperty.getValue();
                            var i = t.textProperty.currentData.t;
                            return void 0 !== i && (t.textProperty.currentData.t = void 0, (e = new String(i)).value = i || new String(i)), e
                        }
                    }), i
                },
                LayerExpressionInterface = function() {
                    function t(t) {
                        var e = new Matrix;
                        void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e);
                        return e
                    }

                    function e(t, e) {
                        var i = this.getMatrix(e);
                        return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.applyPoint(i, t)
                    }

                    function i(t, e) {
                        var i = this.getMatrix(e);
                        return this.applyPoint(i, t)
                    }

                    function r(t, e) {
                        var i = this.getMatrix(e);
                        return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.invertPoint(i, t)
                    }

                    function n(t, e) {
                        var i = this.getMatrix(e);
                        return this.invertPoint(i, t)
                    }

                    function s(t, e) {
                        if (this._elem.hierarchy && this._elem.hierarchy.length) {
                            var i, r = this._elem.hierarchy.length;
                            for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                        }
                        return t.applyToPointArray(e[0], e[1], e[2] || 0)
                    }

                    function a(t, e) {
                        if (this._elem.hierarchy && this._elem.hierarchy.length) {
                            var i, r = this._elem.hierarchy.length;
                            for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
                        }
                        return t.inversePoint(e)
                    }

                    function o(t) {
                        var e = new Matrix;
                        if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                            var i, r = this._elem.hierarchy.length;
                            for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
                            return e.inversePoint(t)
                        }
                        return e.inversePoint(t)
                    }

                    function h() {
                        return [1, 1, 1, 1]
                    }
                    return function(l) {
                        var c;

                        function u(t) {
                            switch (t) {
                                case "ADBE Root Vectors Group":
                                case "Contents":
                                case 2:
                                    return u.shapeInterface;
                                case 1:
                                case 6:
                                case "Transform":
                                case "transform":
                                case "ADBE Transform Group":
                                    return c;
                                case 4:
                                case "ADBE Effect Parade":
                                case "effects":
                                case "Effects":
                                    return u.effect;
                                case "ADBE Text Properties":
                                    return u.textInterface;
                                default:
                                    return null
                            }
                        }
                        u.getMatrix = t, u.invertPoint = a, u.applyPoint = s, u.toWorld = i, u.toWorldVec = e, u.fromWorld = n, u.fromWorldVec = r, u.toComp = i, u.fromComp = o, u.sampleImage = h, u.sourceRectAtTime = l.sourceRectAtTime.bind(l), u._elem = l;
                        var p = getDescriptor(c = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
                        return Object.defineProperties(u, {
                            hasParent: {
                                get: function() {
                                    return l.hierarchy.length
                                }
                            },
                            parent: {
                                get: function() {
                                    return l.hierarchy[0].layerInterface
                                }
                            },
                            rotation: getDescriptor(c, "rotation"),
                            scale: getDescriptor(c, "scale"),
                            position: getDescriptor(c, "position"),
                            opacity: getDescriptor(c, "opacity"),
                            anchorPoint: p,
                            anchor_point: p,
                            transform: {
                                get: function() {
                                    return c
                                }
                            },
                            active: {
                                get: function() {
                                    return l.isInRange
                                }
                            }
                        }), u.startTime = l.data.st, u.index = l.data.ind, u.source = l.data.refId, u.height = 0 === l.data.ty ? l.data.h : 100, u.width = 0 === l.data.ty ? l.data.w : 100, u.inPoint = l.data.ip / l.comp.globalData.frameRate, u.outPoint = l.data.op / l.comp.globalData.frameRate, u._name = l.data.nm, u.registerMaskInterface = function(t) {
                            u.mask = new MaskManagerInterface(t, l)
                        }, u.registerEffectsInterface = function(t) {
                            u.effect = t
                        }, u
                    }
                }(),
                CompExpressionInterface = function(t) {
                    function e(e) {
                        for (var i = 0, r = t.layers.length; i < r;) {
                            if (t.layers[i].nm === e || t.layers[i].ind === e) return t.elements[i].layerInterface;
                            i += 1
                        }
                        return null
                    }
                    return Object.defineProperty(e, "_name", {
                        value: t.data.nm
                    }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
                },
                TransformExpressionInterface = function(t) {
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
                                return e.opacity;
                            default:
                                return null
                        }
                    }
                    var i, r, n, s;
                    return Object.defineProperty(e, "rotation", {
                        get: ExpressionPropertyInterface(t.r || t.rz)
                    }), Object.defineProperty(e, "zRotation", {
                        get: ExpressionPropertyInterface(t.rz || t.r)
                    }), Object.defineProperty(e, "xRotation", {
                        get: ExpressionPropertyInterface(t.rx)
                    }), Object.defineProperty(e, "yRotation", {
                        get: ExpressionPropertyInterface(t.ry)
                    }), Object.defineProperty(e, "scale", {
                        get: ExpressionPropertyInterface(t.s)
                    }), t.p ? s = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), r = ExpressionPropertyInterface(t.py), t.pz && (n = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                        get: function() {
                            return t.p ? s() : [i(), r(), n ? n() : 0]
                        }
                    }), Object.defineProperty(e, "xPosition", {
                        get: ExpressionPropertyInterface(t.px)
                    }), Object.defineProperty(e, "yPosition", {
                        get: ExpressionPropertyInterface(t.py)
                    }), Object.defineProperty(e, "zPosition", {
                        get: ExpressionPropertyInterface(t.pz)
                    }), Object.defineProperty(e, "anchorPoint", {
                        get: ExpressionPropertyInterface(t.a)
                    }), Object.defineProperty(e, "opacity", {
                        get: ExpressionPropertyInterface(t.o)
                    }), Object.defineProperty(e, "skew", {
                        get: ExpressionPropertyInterface(t.sk)
                    }), Object.defineProperty(e, "skewAxis", {
                        get: ExpressionPropertyInterface(t.sa)
                    }), Object.defineProperty(e, "orientation", {
                        get: ExpressionPropertyInterface(t.or)
                    }), e
                },
                ProjectInterface = function() {
                    function t(t) {
                        this.compositions.push(t)
                    }
                    return function() {
                        function e(t) {
                            for (var e = 0, i = this.compositions.length; e < i;) {
                                if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                                e += 1
                            }
                            return null
                        }
                        return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                    }
                }(),
                EffectsExpressionInterface = function() {
                    function t(i, r, n, s) {
                        function a(t) {
                            for (var e = i.ef, r = 0, n = e.length; r < n;) {
                                if (t === e[r].nm || t === e[r].mn || t === e[r].ix) return 5 === e[r].ty ? l[r] : l[r]();
                                r += 1
                            }
                            throw new Error
                        }
                        var o, h = propertyGroupFactory(a, n),
                            l = [],
                            c = i.ef.length;
                        for (o = 0; o < c; o += 1) 5 === i.ef[o].ty ? l.push(t(i.ef[o], r.effectElements[o], r.effectElements[o].propertyGroup, s)) : l.push(e(r.effectElements[o], i.ef[o].ty, s, h));
                        return "ADBE Color Control" === i.mn && Object.defineProperty(a, "color", {
                            get: function() {
                                return l[0]()
                            }
                        }), Object.defineProperties(a, {
                            numProperties: {
                                get: function() {
                                    return i.np
                                }
                            },
                            _name: {
                                value: i.nm
                            },
                            propertyGroup: {
                                value: h
                            }
                        }), a.enabled = 0 !== i.en, a.active = a.enabled, a
                    }

                    function e(t, e, i, r) {
                        var n = ExpressionPropertyInterface(t.p);
                        return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", r)),
                            function() {
                                return 10 === e ? i.comp.compInterface(t.p.v) : n()
                            }
                    }
                    return {
                        createEffectsInterface: function(e, i) {
                            if (e.effectsManager) {
                                var r, n = [],
                                    s = e.data.ef,
                                    a = e.effectsManager.effectElements.length;
                                for (r = 0; r < a; r += 1) n.push(t(s[r], e.effectsManager.effectElements[r], i, e));
                                var o = e.data.ef || [],
                                    h = function(t) {
                                        for (r = 0, a = o.length; r < a;) {
                                            if (t === o[r].nm || t === o[r].mn || t === o[r].ix) return n[r];
                                            r += 1
                                        }
                                        return null
                                    };
                                return Object.defineProperty(h, "numProperties", {
                                    get: function() {
                                        return o.length
                                    }
                                }), h
                            }
                            return null
                        }
                    }
                }(),
                MaskManagerInterface = function() {
                    function t(t, e) {
                        this._mask = t, this._data = e
                    }
                    Object.defineProperty(t.prototype, "maskPath", {
                        get: function() {
                            return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                        }
                    }), Object.defineProperty(t.prototype, "maskOpacity", {
                        get: function() {
                            return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                        }
                    });
                    return function(e) {
                        var i, r = createSizedArray(e.viewData.length),
                            n = e.viewData.length;
                        for (i = 0; i < n; i += 1) r[i] = new t(e.viewData[i], e.masksProperties[i]);
                        return function(t) {
                            for (i = 0; i < n;) {
                                if (e.masksProperties[i].nm === t) return r[i];
                                i += 1
                            }
                            return null
                        }
                    }
                }(),
                ExpressionPropertyInterface = function() {
                    var t = {
                            pv: 0,
                            v: 0,
                            mult: 1
                        },
                        e = {
                            pv: [0, 0, 0],
                            v: [0, 0, 0],
                            mult: 1
                        };

                    function i(t, e, i) {
                        Object.defineProperty(t, "velocity", {
                            get: function() {
                                return e.getVelocityAtTime(e.comp.currentFrame)
                            }
                        }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(r) {
                            if (!t.numKeys) return 0;
                            var n = "";
                            n = "s" in e.keyframes[r - 1] ? e.keyframes[r - 1].s : "e" in e.keyframes[r - 2] ? e.keyframes[r - 2].e : e.keyframes[r - 2].s;
                            var s = "unidimensional" === i ? new Number(n) : Object.assign({}, n);
                            return s.time = e.keyframes[r - 1].t / e.elem.comp.globalData.frameRate, s.value = "unidimensional" === i ? n[0] : n, s
                        }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
                    }

                    function r() {
                        return t
                    }
                    return function(n) {
                        return n ? "unidimensional" === n.propType ? function(e) {
                            e && "pv" in e || (e = t);
                            var r = 1 / e.mult,
                                n = e.pv * r,
                                s = new Number(n);
                            return s.value = n, i(s, e, "unidimensional"),
                                function() {
                                    return e.k && e.getValue(), n = e.v * r, s.value !== n && ((s = new Number(n)).value = n, i(s, e, "unidimensional")), s
                                }
                        }(n) : function(t) {
                            t && "pv" in t || (t = e);
                            var r = 1 / t.mult,
                                n = t.data && t.data.l || t.pv.length,
                                s = createTypedArray("float32", n),
                                a = createTypedArray("float32", n);
                            return s.value = a, i(s, t, "multidimensional"),
                                function() {
                                    t.k && t.getValue();
                                    for (var e = 0; e < n; e += 1) a[e] = t.v[e] * r, s[e] = a[e];
                                    return s
                                }
                        }(n) : r
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

            function EffectsManager(t, e) {
                var i, r = t.ef || [];
                this.effectElements = [];
                var n, s = r.length;
                for (i = 0; i < s; i += 1) n = new GroupEffect(r[i], e), this.effectElements.push(n)
            }

            function GroupEffect(t, e) {
                this.init(t, e)
            }! function() {
                ! function() {
                    function t(t, e) {
                        return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v
                    }
                }();
                var t = TextSelectorProp.getTextSelectorProp;
                TextSelectorProp.getTextSelectorProp = function(e, i, r) {
                    return 1 === i.t ? new TextExpressionSelectorPropFactory(e, i, r) : t(e, i, r)
                }
            }(), extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
                var i;
                this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                var r, n = this.data.ef.length,
                    s = this.data.ef;
                for (i = 0; i < n; i += 1) {
                    switch (r = null, s[i].ty) {
                        case 0:
                            r = new SliderEffect(s[i], e, this);
                            break;
                        case 1:
                            r = new AngleEffect(s[i], e, this);
                            break;
                        case 2:
                            r = new ColorEffect(s[i], e, this);
                            break;
                        case 3:
                            r = new PointEffect(s[i], e, this);
                            break;
                        case 4:
                        case 7:
                            r = new CheckboxEffect(s[i], e, this);
                            break;
                        case 10:
                            r = new LayerIndexEffect(s[i], e, this);
                            break;
                        case 11:
                            r = new MaskIndexEffect(s[i], e, this);
                            break;
                        case 5:
                            r = new EffectsManager(s[i], e, this);
                            break;
                        default:
                            r = new NoValueEffect(s[i], e, this)
                    }
                    r && this.effectElements.push(r)
                }
            };
            var lottie = {};

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
                return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
            }

            function setQuality(t) {
                if ("string" == typeof t) switch (t) {
                    case "high":
                        defaultCurveSegments = 200;
                        break;
                    default:
                    case "medium":
                        defaultCurveSegments = 50;
                        break;
                    case "low":
                        defaultCurveSegments = 10
                } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
                roundValues(!(defaultCurveSegments >= 50))
            }

            function inBrowser() {
                return "undefined" != typeof navigator
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
                        return Matrix;
                    default:
                        return null
                }
            }

            function checkReady() {
                "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
            }

            function getQueryVariable(t) {
                for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
                    var r = e[i].split("=");
                    if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1])
                }
                return null
            }
            lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.__getFactory = getFactory, lottie.version = "5.7.6";
            var standalone = "__[STANDALONE]__",
                animationData = "__[ANIMATIONDATA]__",
                renderer = "",
                queryString;
            if (standalone) {
                var scripts = document.getElementsByTagName("script"),
                    index = scripts.length - 1,
                    myScript = scripts[index] || {
                        src: ""
                    };
                queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer")
            }
            var readyStateCheckInterval = setInterval(checkReady, 100);
            return lottie
        }))
    },
    ls82: function(t, e, i) {
        var r = function(t) {
            "use strict";
            var e = Object.prototype,
                i = e.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                n = r.iterator || "@@iterator",
                s = r.asyncIterator || "@@asyncIterator",
                a = r.toStringTag || "@@toStringTag";

            function o(t, e, i) {
                return Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                o({}, "")
            } catch (t) {
                o = function(t, e, i) {
                    return t[e] = i
                }
            }

            function h(t, e, i, r) {
                var n = e && e.prototype instanceof u ? e : u,
                    s = Object.create(n.prototype),
                    a = new x(r || []);
                return s._invoke = function(t, e, i) {
                    var r = "suspendedStart";
                    return function(n, s) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === n) throw s;
                            return C()
                        }
                        for (i.method = n, i.arg = s;;) {
                            var a = i.delegate;
                            if (a) {
                                var o = D(a, i);
                                if (o) {
                                    if (o === c) continue;
                                    return o
                                }
                            }
                            if ("next" === i.method) i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if ("suspendedStart" === r) throw r = "completed", i.arg;
                                i.dispatchException(i.arg)
                            } else "return" === i.method && i.abrupt("return", i.arg);
                            r = "executing";
                            var h = l(t, e, i);
                            if ("normal" === h.type) {
                                if (r = i.done ? "completed" : "suspendedYield", h.arg === c) continue;
                                return {
                                    value: h.arg,
                                    done: i.done
                                }
                            }
                            "throw" === h.type && (r = "completed", i.method = "throw", i.arg = h.arg)
                        }
                    }
                }(t, i, a), s
            }

            function l(t, e, i) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, i)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = h;
            var c = {};

            function u() {}

            function p() {}

            function f() {}
            var d = {};
            d[n] = function() {
                return this
            };
            var m = Object.getPrototypeOf,
                g = m && m(m(w([])));
            g && g !== e && i.call(g, n) && (d = g);
            var y = f.prototype = u.prototype = Object.create(d);

            function v(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    o(t, e, (function(t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function b(t, e) {
                var r;
                this._invoke = function(n, s) {
                    function a() {
                        return new e((function(r, a) {
                            ! function r(n, s, a, o) {
                                var h = l(t[n], t, s);
                                if ("throw" !== h.type) {
                                    var c = h.arg,
                                        u = c.value;
                                    return u && "object" == typeof u && i.call(u, "__await") ? e.resolve(u.__await).then((function(t) {
                                        r("next", t, a, o)
                                    }), (function(t) {
                                        r("throw", t, a, o)
                                    })) : e.resolve(u).then((function(t) {
                                        c.value = t, a(c)
                                    }), (function(t) {
                                        return r("throw", t, a, o)
                                    }))
                                }
                                o(h.arg)
                            }(n, s, r, a)
                        }))
                    }
                    return r = r ? r.then(a, a) : a()
                }
            }

            function D(t, e) {
                var i = t.iterator[e.method];
                if (void 0 === i) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, D(t, e), "throw" === e.method)) return c;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return c
                }
                var r = l(i, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, c;
                var n = r.arg;
                return n ? n.done ? (e[t.resultName] = n.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, c) : n : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, c)
            }

            function _(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function E(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function x(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(_, this), this.reset(!0)
            }

            function w(t) {
                if (t) {
                    var e = t[n];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            s = function e() {
                                for (; ++r < t.length;)
                                    if (i.call(t, r)) return e.value = t[r], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return s.next = s
                    }
                }
                return {
                    next: C
                }
            }

            function C() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return p.prototype = y.constructor = f, f.constructor = p, p.displayName = o(f, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, o(t, a, "GeneratorFunction")), t.prototype = Object.create(y), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, v(b.prototype), b.prototype[s] = function() {
                return this
            }, t.AsyncIterator = b, t.async = function(e, i, r, n, s) {
                void 0 === s && (s = Promise);
                var a = new b(h(e, i, r, n), s);
                return t.isGeneratorFunction(i) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }))
            }, v(y), o(y, a, "Generator"), y[n] = function() {
                return this
            }, y.toString = function() {
                return "[object Generator]"
            }, t.keys = function(t) {
                var e = [];
                for (var i in t) e.push(i);
                return e.reverse(),
                    function i() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return i.value = r, i.done = !1, i
                        }
                        return i.done = !0, i
                    }
            }, t.values = w, x.prototype = {
                constructor: x,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
                        for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;

                    function r(i, r) {
                        return a.type = "throw", a.arg = t, e.next = i, r && (e.method = "next", e.arg = void 0), !!r
                    }
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var s = this.tryEntries[n],
                            a = s.completion;
                        if ("root" === s.tryLoc) return r("end");
                        if (s.tryLoc <= this.prev) {
                            var o = i.call(s, "catchLoc"),
                                h = i.call(s, "finallyLoc");
                            if (o && h) {
                                if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                                if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                            } else if (o) {
                                if (this.prev < s.catchLoc) return r(s.catchLoc, !0)
                            } else {
                                if (!h) throw new Error("try statement without catch or finally");
                                if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var s = n;
                            break
                        }
                    }
                    s && ("break" === t || "continue" === t) && s.tryLoc <= e && e <= s.finallyLoc && (s = null);
                    var a = s ? s.completion : {};
                    return a.type = t, a.arg = e, s ? (this.method = "next", this.next = s.finallyLoc, c) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), c
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var i = this.tryEntries[e];
                        if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), E(i), c
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var i = this.tryEntries[e];
                        if (i.tryLoc === t) {
                            var r = i.completion;
                            if ("throw" === r.type) {
                                var n = r.arg;
                                E(i)
                            }
                            return n
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, i) {
                    return this.delegate = {
                        iterator: w(t),
                        resultName: e,
                        nextLoc: i
                    }, "next" === this.method && (this.arg = void 0), c
                }
            }, t
        }(t.exports);
        try {
            regeneratorRuntime = r
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(r)
        }
    },
    o0o1: function(t, e, i) {
        t.exports = i("ls82")
    },
    oaNO: function(t, e) {},
    uvZ8: function(t, e, i) {
        t.exports = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function e(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }

            function i() {
                return (i = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function r(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
            }

            function n(t) {
                return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function s(t, e) {
                return (s = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function a(t, e, i) {
                return (a = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }() ? Reflect.construct : function(t, e, i) {
                    var r = [null];
                    r.push.apply(r, e);
                    var n = new(Function.bind.apply(t, r));
                    return i && s(n, i.prototype), n
                }).apply(null, arguments)
            }

            function o(t) {
                var e = "function" == typeof Map ? new Map : void 0;
                return (o = function(t) {
                    if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, i)
                    }

                    function i() {
                        return a(t, arguments, n(this).constructor)
                    }
                    return i.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: i,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), s(i, t)
                })(t)
            }

            function h(t, e) {
                try {
                    var i = t()
                } catch (t) {
                    return e(t)
                }
                return i && i.then ? i.then(void 0, e) : i
            }
            var l;
            "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))),
                function(t) {
                    t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug"
                }(l || (l = {}));
            var c = l.off,
                u = function() {
                    function t(t) {
                        this.t = t
                    }
                    t.getLevel = function() {
                        return c
                    }, t.setLevel = function(t) {
                        return c = l[t]
                    };
                    var e = t.prototype;
                    return e.error = function() {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        this.i(console.error, l.error, e)
                    }, e.warn = function() {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        this.i(console.warn, l.warning, e)
                    }, e.info = function() {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        this.i(console.info, l.info, e)
                    }, e.debug = function() {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        this.i(console.log, l.debug, e)
                    }, e.i = function(e, i, r) {
                        i <= t.getLevel() && e.apply(console, ["[" + this.t + "] "].concat(r))
                    }, t
                }(),
                p = C,
                f = b,
                d = v,
                m = D,
                g = w,
                y = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

            function v(t, e) {
                for (var i, r = [], n = 0, s = 0, a = "", o = e && e.delimiter || "/", h = e && e.whitelist || void 0, l = !1; null !== (i = y.exec(t));) {
                    var c = i[0],
                        u = i[1],
                        p = i.index;
                    if (a += t.slice(s, p), s = p + c.length, u) a += u[1], l = !0;
                    else {
                        var f = "",
                            d = i[2],
                            m = i[3],
                            g = i[4],
                            v = i[5];
                        if (!l && a.length) {
                            var b = a.length - 1,
                                D = a[b];
                            (!h || h.indexOf(D) > -1) && (f = D, a = a.slice(0, b))
                        }
                        a && (r.push(a), a = "", l = !1);
                        var x = m || g,
                            w = f || o;
                        r.push({
                            name: d || n++,
                            prefix: f,
                            delimiter: w,
                            optional: "?" === v || "*" === v,
                            repeat: "+" === v || "*" === v,
                            pattern: x ? E(x) : "[^" + _(w === o ? w : w + o) + "]+?"
                        })
                    }
                }
                return (a || s < t.length) && r.push(a + t.substr(s)), r
            }

            function b(t, e) {
                return function(i, r) {
                    var n = t.exec(i);
                    if (!n) return !1;
                    for (var s = n[0], a = n.index, o = {}, h = r && r.decode || decodeURIComponent, l = 1; l < n.length; l++)
                        if (void 0 !== n[l]) {
                            var c = e[l - 1];
                            o[c.name] = c.repeat ? n[l].split(c.delimiter).map((function(t) {
                                return h(t, c)
                            })) : h(n[l], c)
                        } return {
                        path: s,
                        index: a,
                        params: o
                    }
                }
            }

            function D(t, e) {
                for (var i = new Array(t.length), r = 0; r < t.length; r++) "object" == typeof t[r] && (i[r] = new RegExp("^(?:" + t[r].pattern + ")$", x(e)));
                return function(e, r) {
                    for (var n = "", s = r && r.encode || encodeURIComponent, a = !r || !1 !== r.validate, o = 0; o < t.length; o++) {
                        var h = t[o];
                        if ("string" != typeof h) {
                            var l, c = e ? e[h.name] : void 0;
                            if (Array.isArray(c)) {
                                if (!h.repeat) throw new TypeError('Expected "' + h.name + '" to not repeat, but got array');
                                if (0 === c.length) {
                                    if (h.optional) continue;
                                    throw new TypeError('Expected "' + h.name + '" to not be empty')
                                }
                                for (var u = 0; u < c.length; u++) {
                                    if (l = s(c[u], h), a && !i[o].test(l)) throw new TypeError('Expected all "' + h.name + '" to match "' + h.pattern + '"');
                                    n += (0 === u ? h.prefix : h.delimiter) + l
                                }
                            } else if ("string" != typeof c && "number" != typeof c && "boolean" != typeof c) {
                                if (!h.optional) throw new TypeError('Expected "' + h.name + '" to be ' + (h.repeat ? "an array" : "a string"))
                            } else {
                                if (l = s(String(c), h), a && !i[o].test(l)) throw new TypeError('Expected "' + h.name + '" to match "' + h.pattern + '", but got "' + l + '"');
                                n += h.prefix + l
                            }
                        } else n += h
                    }
                    return n
                }
            }

            function _(t) {
                return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function E(t) {
                return t.replace(/([=!:$/()])/g, "\\$1")
            }

            function x(t) {
                return t && t.sensitive ? "" : "i"
            }

            function w(t, e, i) {
                for (var r = (i = i || {}).strict, n = !1 !== i.start, s = !1 !== i.end, a = i.delimiter || "/", o = [].concat(i.endsWith || []).map(_).concat("$").join("|"), h = n ? "^" : "", l = 0; l < t.length; l++) {
                    var c = t[l];
                    if ("string" == typeof c) h += _(c);
                    else {
                        var u = c.repeat ? "(?:" + c.pattern + ")(?:" + _(c.delimiter) + "(?:" + c.pattern + "))*" : c.pattern;
                        e && e.push(c), h += c.optional ? c.prefix ? "(?:" + _(c.prefix) + "(" + u + "))?" : "(" + u + ")?" : _(c.prefix) + "(" + u + ")"
                    }
                }
                if (s) r || (h += "(?:" + _(a) + ")?"), h += "$" === o ? "$" : "(?=" + o + ")";
                else {
                    var p = t[t.length - 1],
                        f = "string" == typeof p ? p[p.length - 1] === a : void 0 === p;
                    r || (h += "(?:" + _(a) + "(?=" + o + "))?"), f || (h += "(?=" + _(a) + "|" + o + ")")
                }
                return new RegExp(h, x(i))
            }

            function C(t, e, i) {
                return t instanceof RegExp ? function(t, e) {
                    if (!e) return t;
                    var i = t.source.match(/\((?!\?)/g);
                    if (i)
                        for (var r = 0; r < i.length; r++) e.push({
                            name: r,
                            prefix: null,
                            delimiter: null,
                            optional: !1,
                            repeat: !1,
                            pattern: null
                        });
                    return t
                }(t, e) : Array.isArray(t) ? function(t, e, i) {
                    for (var r = [], n = 0; n < t.length; n++) r.push(C(t[n], e, i).source);
                    return new RegExp("(?:" + r.join("|") + ")", x(i))
                }(t, e, i) : function(t, e, i) {
                    return w(v(t, i), e, i)
                }(t, e, i)
            }
            p.match = function(t, e) {
                var i = [];
                return b(C(t, i, e), i)
            }, p.regexpToFunction = f, p.parse = d, p.compile = function(t, e) {
                return D(v(t, e), e)
            }, p.tokensToFunction = m, p.tokensToRegExp = g;
            var S = {
                    container: "container",
                    history: "history",
                    namespace: "namespace",
                    prefix: "data-barba",
                    prevent: "prevent",
                    wrapper: "wrapper"
                },
                P = new(function() {
                    function t() {
                        this.o = S, this.u = new DOMParser
                    }
                    var e = t.prototype;
                    return e.toString = function(t) {
                        return t.outerHTML
                    }, e.toDocument = function(t) {
                        return this.u.parseFromString(t, "text/html")
                    }, e.toElement = function(t) {
                        var e = document.createElement("div");
                        return e.innerHTML = t, e
                    }, e.getHtml = function(t) {
                        return void 0 === t && (t = document), this.toString(t.documentElement)
                    }, e.getWrapper = function(t) {
                        return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
                    }, e.getContainer = function(t) {
                        return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
                    }, e.removeContainer = function(t) {
                        document.body.contains(t) && t.parentNode.removeChild(t)
                    }, e.addContainer = function(t, e) {
                        var i = this.getContainer();
                        i ? this.s(t, i) : e.appendChild(t)
                    }, e.getNamespace = function(t) {
                        void 0 === t && (t = document);
                        var e = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
                        return e ? e.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
                    }, e.getHref = function(t) {
                        if (t.tagName && "a" === t.tagName.toLowerCase()) {
                            if ("string" == typeof t.href) return t.href;
                            var e = t.getAttribute("href") || t.getAttribute("xlink:href");
                            if (e) return this.resolveUrl(e.baseVal || e)
                        }
                        return null
                    }, e.resolveUrl = function() {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        var r = e.length;
                        if (0 === r) throw new Error("resolveUrl requires at least one argument; got none.");
                        var n = document.createElement("base");
                        if (n.href = arguments[0], 1 === r) return n.href;
                        var s = document.getElementsByTagName("head")[0];
                        s.insertBefore(n, s.firstChild);
                        for (var a, o = document.createElement("a"), h = 1; h < r; h++) o.href = arguments[h], n.href = a = o.href;
                        return s.removeChild(n), a
                    }, e.s = function(t, e) {
                        e.parentNode.insertBefore(t, e.nextSibling)
                    }, t
                }()),
                T = new(function() {
                    function t() {
                        this.h = [], this.v = -1
                    }
                    var r = t.prototype;
                    return r.init = function(t, e) {
                        this.l = "barba";
                        var i = {
                            ns: e,
                            scroll: {
                                x: window.scrollX,
                                y: window.scrollY
                            },
                            url: t
                        };
                        this.h.push(i), this.v = 0;
                        var r = {
                            from: this.l,
                            index: 0,
                            states: [].concat(this.h)
                        };
                        window.history && window.history.replaceState(r, "", t)
                    }, r.change = function(t, e, i) {
                        if (i && i.state) {
                            var r = i.state,
                                n = r.index;
                            e = this.m(this.v - n), this.replace(r.states), this.v = n
                        } else this.add(t, e);
                        return e
                    }, r.add = function(t, e) {
                        var i = this.size,
                            r = this.p(e),
                            n = {
                                ns: "tmp",
                                scroll: {
                                    x: window.scrollX,
                                    y: window.scrollY
                                },
                                url: t
                            };
                        this.h.push(n), this.v = i;
                        var s = {
                            from: this.l,
                            index: i,
                            states: [].concat(this.h)
                        };
                        switch (r) {
                            case "push":
                                window.history && window.history.pushState(s, "", t);
                                break;
                            case "replace":
                                window.history && window.history.replaceState(s, "", t)
                        }
                    }, r.update = function(t, e) {
                        var r = e || this.v,
                            n = i({}, this.get(r), {}, t);
                        this.set(r, n)
                    }, r.remove = function(t) {
                        t ? this.h.splice(t, 1) : this.h.pop(), this.v--
                    }, r.clear = function() {
                        this.h = [], this.v = -1
                    }, r.replace = function(t) {
                        this.h = t
                    }, r.get = function(t) {
                        return this.h[t]
                    }, r.set = function(t, e) {
                        return this.h[t] = e
                    }, r.p = function(t) {
                        var e = "push",
                            i = t,
                            r = S.prefix + "-" + S.history;
                        return i.hasAttribute && i.hasAttribute(r) && (e = i.getAttribute(r)), e
                    }, r.m = function(t) {
                        return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward"
                    }, e(t, [{
                        key: "current",
                        get: function() {
                            return this.h[this.v]
                        }
                    }, {
                        key: "state",
                        get: function() {
                            return this.h[this.h.length - 1]
                        }
                    }, {
                        key: "previous",
                        get: function() {
                            return this.v < 1 ? null : this.h[this.v - 1]
                        }
                    }, {
                        key: "size",
                        get: function() {
                            return this.h.length
                        }
                    }]), t
                }()),
                A = function(t, e) {
                    try {
                        var i = function() {
                            if (!e.next.html) return Promise.resolve(t).then((function(t) {
                                var i = e.next;
                                if (t) {
                                    var r = P.toElement(t);
                                    i.namespace = P.getNamespace(r), i.container = P.getContainer(r), i.html = t, T.update({
                                        ns: i.namespace
                                    });
                                    var n = P.toDocument(t);
                                    document.title = n.title
                                }
                            }))
                        }();
                        return Promise.resolve(i && i.then ? i.then((function() {})) : void 0)
                    } catch (t) {
                        return Promise.reject(t)
                    }
                },
                F = p,
                k = {
                    __proto__: null,
                    update: A,
                    nextTick: function() {
                        return new Promise((function(t) {
                            window.requestAnimationFrame(t)
                        }))
                    },
                    pathToRegexp: F
                },
                M = function() {
                    return window.location.origin
                },
                I = function(t) {
                    return void 0 === t && (t = window.location.href), B(t).port
                },
                B = function(t) {
                    var e, i = t.match(/:\d+/);
                    if (null === i) /^http/.test(t) && (e = 80), /^https/.test(t) && (e = 443);
                    else {
                        var r = i[0].substring(1);
                        e = parseInt(r, 10)
                    }
                    var n, s = t.replace(M(), ""),
                        a = {},
                        o = s.indexOf("#");
                    o >= 0 && (n = s.slice(o + 1), s = s.slice(0, o));
                    var h = s.indexOf("?");
                    return h >= 0 && (a = R(s.slice(h + 1)), s = s.slice(0, h)), {
                        hash: n,
                        path: s,
                        port: e,
                        query: a
                    }
                },
                R = function(t) {
                    return t.split("&").reduce((function(t, e) {
                        var i = e.split("=");
                        return t[i[0]] = i[1], t
                    }), {})
                },
                L = function(t) {
                    return void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, "")
                },
                O = {
                    __proto__: null,
                    getHref: function() {
                        return window.location.href
                    },
                    getOrigin: M,
                    getPort: I,
                    getPath: function(t) {
                        return void 0 === t && (t = window.location.href), B(t).path
                    },
                    parse: B,
                    parseQuery: R,
                    clean: L
                };

            function V(t, e, i) {
                return void 0 === e && (e = 2e3), new Promise((function(r, n) {
                    var s = new XMLHttpRequest;
                    s.onreadystatechange = function() {
                        if (s.readyState === XMLHttpRequest.DONE)
                            if (200 === s.status) r(s.responseText);
                            else if (s.status) {
                            var e = {
                                status: s.status,
                                statusText: s.statusText
                            };
                            i(t, e), n(e)
                        }
                    }, s.ontimeout = function() {
                        var r = new Error("Timeout error [" + e + "]");
                        i(t, r), n(r)
                    }, s.onerror = function() {
                        var e = new Error("Fetch error");
                        i(t, e), n(e)
                    }, s.open("GET", t), s.timeout = e, s.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), s.setRequestHeader("x-barba", "yes"), s.send()
                }))
            }
            var z = function(t) {
                return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then
            };

            function N(t, e) {
                return void 0 === e && (e = {}),
                    function() {
                        for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                        var s = !1,
                            a = new Promise((function(i, n) {
                                e.async = function() {
                                    return s = !0,
                                        function(t, e) {
                                            t ? n(t) : i(e)
                                        }
                                };
                                var a = t.apply(e, r);
                                s || (z(a) ? a.then(i, n) : i(a))
                            }));
                        return a
                    }
            }
            var G = new(function(t) {
                    function e() {
                        var e;
                        return (e = t.call(this) || this).logger = new u("@barba/core"), e.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], e.registered = new Map, e.init(), e
                    }
                    r(e, t);
                    var i = e.prototype;
                    return i.init = function() {
                        var t = this;
                        this.registered.clear(), this.all.forEach((function(e) {
                            t[e] || (t[e] = function(i, r) {
                                t.registered.has(e) || t.registered.set(e, new Set), t.registered.get(e).add({
                                    ctx: r || {},
                                    fn: i
                                })
                            })
                        }))
                    }, i.do = function(t) {
                        for (var e = this, i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) r[n - 1] = arguments[n];
                        if (this.registered.has(t)) {
                            var s = Promise.resolve();
                            return this.registered.get(t).forEach((function(t) {
                                s = s.then((function() {
                                    return N(t.fn, t.ctx).apply(void 0, r)
                                }))
                            })), s.catch((function(i) {
                                e.logger.debug("Hook error [" + t + "]"), e.logger.error(i)
                            }))
                        }
                        return Promise.resolve()
                    }, i.clear = function() {
                        var t = this;
                        this.all.forEach((function(e) {
                            delete t[e]
                        })), this.init()
                    }, i.help = function() {
                        this.logger.info("Available hooks: " + this.all.join(","));
                        var t = [];
                        this.registered.forEach((function(e, i) {
                            return t.push(i)
                        })), this.logger.info("Registered hooks: " + t.join(","))
                    }, e
                }((function() {}))),
                j = function() {
                    function t(t) {
                        if (this.P = [], "boolean" == typeof t) this.g = t;
                        else {
                            var e = Array.isArray(t) ? t : [t];
                            this.P = e.map((function(t) {
                                return F(t)
                            }))
                        }
                    }
                    return t.prototype.checkHref = function(t) {
                        if ("boolean" == typeof this.g) return this.g;
                        var e = B(t).path;
                        return this.P.some((function(t) {
                            return null !== t.exec(e)
                        }))
                    }, t
                }(),
                H = function(t) {
                    function e(e) {
                        var i;
                        return (i = t.call(this, e) || this).k = new Map, i
                    }
                    r(e, t);
                    var n = e.prototype;
                    return n.set = function(t, e, i) {
                        return this.k.set(t, {
                            action: i,
                            request: e
                        }), {
                            action: i,
                            request: e
                        }
                    }, n.get = function(t) {
                        return this.k.get(t)
                    }, n.getRequest = function(t) {
                        return this.k.get(t).request
                    }, n.getAction = function(t) {
                        return this.k.get(t).action
                    }, n.has = function(t) {
                        return !this.checkHref(t) && this.k.has(t)
                    }, n.delete = function(t) {
                        return this.k.delete(t)
                    }, n.update = function(t, e) {
                        var r = i({}, this.k.get(t), {}, e);
                        return this.k.set(t, r), r
                    }, e
                }(j),
                q = function() {
                    return !window.history.pushState
                },
                W = function(t) {
                    return !t.el || !t.href
                },
                X = function(t) {
                    var e = t.event;
                    return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
                },
                Y = function(t) {
                    var e = t.el;
                    return e.hasAttribute("target") && "_blank" === e.target
                },
                U = function(t) {
                    var e = t.el;
                    return void 0 !== e.protocol && window.location.protocol !== e.protocol || void 0 !== e.hostname && window.location.hostname !== e.hostname
                },
                K = function(t) {
                    var e = t.el;
                    return void 0 !== e.port && I() !== I(e.href)
                },
                $ = function(t) {
                    var e = t.el;
                    return e.getAttribute && "string" == typeof e.getAttribute("download")
                },
                Z = function(t) {
                    return t.el.hasAttribute(S.prefix + "-" + S.prevent)
                },
                Q = function(t) {
                    return Boolean(t.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]'))
                },
                J = function(t) {
                    var e = t.href;
                    return L(e) === L() && I(e) === I()
                },
                tt = function(t) {
                    function e(e) {
                        var i;
                        return (i = t.call(this, e) || this).suite = [], i.tests = new Map, i.init(), i
                    }
                    r(e, t);
                    var i = e.prototype;
                    return i.init = function() {
                        this.add("pushState", q), this.add("exists", W), this.add("newTab", X), this.add("blank", Y), this.add("corsDomain", U), this.add("corsPort", K), this.add("download", $), this.add("preventSelf", Z), this.add("preventAll", Q), this.add("sameUrl", J, !1)
                    }, i.add = function(t, e, i) {
                        void 0 === i && (i = !0), this.tests.set(t, e), i && this.suite.push(t)
                    }, i.run = function(t, e, i, r) {
                        return this.tests.get(t)({
                            el: e,
                            event: i,
                            href: r
                        })
                    }, i.checkLink = function(t, e, i) {
                        var r = this;
                        return this.suite.some((function(n) {
                            return r.run(n, t, e, i)
                        }))
                    }, e
                }(j),
                et = function(t) {
                    function e(i, r) {
                        var n;
                        void 0 === r && (r = "Barba error");
                        for (var s = arguments.length, a = new Array(s > 2 ? s - 2 : 0), o = 2; o < s; o++) a[o - 2] = arguments[o];
                        return (n = t.call.apply(t, [this].concat(a)) || this).error = i, n.label = r, Error.captureStackTrace && Error.captureStackTrace(function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(n), e), n.name = "BarbaError", n
                    }
                    return r(e, t), e
                }(o(Error)),
                it = function() {
                    function t(t) {
                        void 0 === t && (t = []), this.logger = new u("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{
                            name: "namespace",
                            type: "strings"
                        }, {
                            name: "custom",
                            type: "function"
                        }], t && (this.all = this.all.concat(t)), this.update()
                    }
                    var e = t.prototype;
                    return e.add = function(t, e) {
                        switch (t) {
                            case "rule":
                                this.A.splice(e.position || 0, 0, e.value);
                                break;
                            case "transition":
                            default:
                                this.all.push(e)
                        }
                        this.update()
                    }, e.resolve = function(t, e) {
                        var i = this;
                        void 0 === e && (e = {});
                        var r = e.once ? this.once : this.page;
                        r = r.filter(e.self ? function(t) {
                            return t.name && "self" === t.name
                        } : function(t) {
                            return !t.name || "self" !== t.name
                        });
                        var n = new Map,
                            s = r.find((function(r) {
                                var s = !0,
                                    a = {};
                                return !(!e.self || "self" !== r.name) || (i.A.reverse().forEach((function(e) {
                                    s && (s = i.R(r, e, t, a), r.from && r.to && (s = i.R(r, e, t, a, "from") && i.R(r, e, t, a, "to")), r.from && !r.to && (s = i.R(r, e, t, a, "from")), !r.from && r.to && (s = i.R(r, e, t, a, "to")))
                                })), n.set(r, a), s)
                            })),
                            a = n.get(s),
                            o = [];
                        if (o.push(e.once ? "once" : "page"), e.self && o.push("self"), a) {
                            var h, l = [s];
                            Object.keys(a).length > 0 && l.push(a), (h = this.logger).info.apply(h, ["Transition found [" + o.join(",") + "]"].concat(l))
                        } else this.logger.info("No transition found [" + o.join(",") + "]");
                        return s
                    }, e.update = function() {
                        var t = this;
                        this.all = this.all.map((function(e) {
                            return t.T(e)
                        })).sort((function(t, e) {
                            return t.priority - e.priority
                        })).reverse().map((function(t) {
                            return delete t.priority, t
                        })), this.page = this.all.filter((function(t) {
                            return void 0 !== t.leave || void 0 !== t.enter
                        })), this.once = this.all.filter((function(t) {
                            return void 0 !== t.once
                        }))
                    }, e.R = function(t, e, i, r, n) {
                        var s = !0,
                            a = !1,
                            o = t,
                            h = e.name,
                            l = h,
                            c = h,
                            u = h,
                            p = n ? o[n] : o,
                            f = "to" === n ? i.next : i.current;
                        if (n ? p && p[h] : p[h]) {
                            switch (e.type) {
                                case "strings":
                                default:
                                    var d = Array.isArray(p[l]) ? p[l] : [p[l]];
                                    f[l] && -1 !== d.indexOf(f[l]) && (a = !0), -1 === d.indexOf(f[l]) && (s = !1);
                                    break;
                                case "object":
                                    var m = Array.isArray(p[c]) ? p[c] : [p[c]];
                                    f[c] ? (f[c].name && -1 !== m.indexOf(f[c].name) && (a = !0), -1 === m.indexOf(f[c].name) && (s = !1)) : s = !1;
                                    break;
                                case "function":
                                    p[u](i) ? a = !0 : s = !1
                            }
                            a && (n ? (r[n] = r[n] || {}, r[n][h] = o[n][h]) : r[h] = o[h])
                        }
                        return s
                    }, e.O = function(t, e, i) {
                        var r = 0;
                        return (t[e] || t.from && t.from[e] || t.to && t.to[e]) && (r += Math.pow(10, i), t.from && t.from[e] && (r += 1), t.to && t.to[e] && (r += 2)), r
                    }, e.T = function(t) {
                        var e = this;
                        t.priority = 0;
                        var i = 0;
                        return this.A.forEach((function(r, n) {
                            i += e.O(t, r.name, n + 1)
                        })), t.priority = i, t
                    }, t
                }(),
                rt = function() {
                    function t(t) {
                        void 0 === t && (t = []), this.logger = new u("@barba/core"), this.S = !1, this.store = new it(t)
                    }
                    var i = t.prototype;
                    return i.get = function(t, e) {
                        return this.store.resolve(t, e)
                    }, i.doOnce = function(t) {
                        var e = t.data,
                            i = t.transition;
                        try {
                            var r = function() {
                                    n.S = !1
                                },
                                n = this,
                                s = i || {};
                            n.S = !0;
                            var a = h((function() {
                                return Promise.resolve(n.j("beforeOnce", e, s)).then((function() {
                                    return Promise.resolve(n.once(e, s)).then((function() {
                                        return Promise.resolve(n.j("afterOnce", e, s)).then((function() {}))
                                    }))
                                }))
                            }), (function(t) {
                                n.S = !1, n.logger.debug("Transition error [before/after/once]"), n.logger.error(t)
                            }));
                            return Promise.resolve(a && a.then ? a.then(r) : r())
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, i.doPage = function(t) {
                        var e = t.data,
                            i = t.transition,
                            r = t.page,
                            n = t.wrapper;
                        try {
                            var s = function(t) {
                                    if (a) return t;
                                    o.S = !1
                                },
                                a = !1,
                                o = this,
                                l = i || {},
                                c = !0 === l.sync || !1;
                            o.S = !0;
                            var u = h((function() {
                                function t() {
                                    return Promise.resolve(o.j("before", e, l)).then((function() {
                                        function t(t) {
                                            return Promise.resolve(o.remove(e)).then((function() {
                                                return Promise.resolve(o.j("after", e, l)).then((function() {}))
                                            }))
                                        }
                                        var i = function() {
                                            if (c) return h((function() {
                                                return Promise.resolve(o.add(e, n)).then((function() {
                                                    return Promise.resolve(o.j("beforeLeave", e, l)).then((function() {
                                                        return Promise.resolve(o.j("beforeEnter", e, l)).then((function() {
                                                            return Promise.resolve(Promise.all([o.leave(e, l), o.enter(e, l)])).then((function() {
                                                                return Promise.resolve(o.j("afterLeave", e, l)).then((function() {
                                                                    return Promise.resolve(o.j("afterEnter", e, l)).then((function() {}))
                                                                }))
                                                            }))
                                                        }))
                                                    }))
                                                }))
                                            }), (function(t) {
                                                if (o.M(t)) throw new et(t, "Transition error [sync]")
                                            }));
                                            var t = function(t) {
                                                    return h((function() {
                                                        var t = function() {
                                                            if (!1 !== i) return Promise.resolve(o.add(e, n)).then((function() {
                                                                return Promise.resolve(o.j("beforeEnter", e, l)).then((function() {
                                                                    return Promise.resolve(o.enter(e, l, i)).then((function() {
                                                                        return Promise.resolve(o.j("afterEnter", e, l)).then((function() {}))
                                                                    }))
                                                                }))
                                                            }))
                                                        }();
                                                        if (t && t.then) return t.then((function() {}))
                                                    }), (function(t) {
                                                        if (o.M(t)) throw new et(t, "Transition error [before/after/enter]")
                                                    }))
                                                },
                                                i = !1,
                                                s = h((function() {
                                                    return Promise.resolve(o.j("beforeLeave", e, l)).then((function() {
                                                        return Promise.resolve(Promise.all([o.leave(e, l), A(r, e)]).then((function(t) {
                                                            return t[0]
                                                        }))).then((function(t) {
                                                            return i = t, Promise.resolve(o.j("afterLeave", e, l)).then((function() {}))
                                                        }))
                                                    }))
                                                }), (function(t) {
                                                    if (o.M(t)) throw new et(t, "Transition error [before/after/leave]")
                                                }));
                                            return s && s.then ? s.then(t) : t()
                                        }();
                                        return i && i.then ? i.then(t) : t()
                                    }))
                                }
                                var i = function() {
                                    if (c) return Promise.resolve(A(r, e)).then((function() {}))
                                }();
                                return i && i.then ? i.then(t) : t()
                            }), (function(t) {
                                if (o.S = !1, t.name && "BarbaError" === t.name) throw o.logger.debug(t.label), o.logger.error(t.error), t;
                                throw o.logger.debug("Transition error [page]"), o.logger.error(t), t
                            }));
                            return Promise.resolve(u && u.then ? u.then(s) : s(u))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, i.once = function(t, e) {
                        try {
                            return Promise.resolve(G.do("once", t, e)).then((function() {
                                return e.once ? N(e.once, e)(t) : Promise.resolve()
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, i.leave = function(t, e) {
                        try {
                            return Promise.resolve(G.do("leave", t, e)).then((function() {
                                return e.leave ? N(e.leave, e)(t) : Promise.resolve()
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, i.enter = function(t, e, i) {
                        try {
                            return Promise.resolve(G.do("enter", t, e)).then((function() {
                                return e.enter ? N(e.enter, e)(t, i) : Promise.resolve()
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, i.add = function(t, e) {
                        try {
                            return P.addContainer(t.next.container, e), G.do("nextAdded", t), Promise.resolve()
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, i.remove = function(t) {
                        try {
                            return P.removeContainer(t.current.container), G.do("currentRemoved", t), Promise.resolve()
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, i.M = function(t) {
                        return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status
                    }, i.j = function(t, e, i) {
                        try {
                            return Promise.resolve(G.do(t, e, i)).then((function() {
                                return i[t] ? N(i[t], i)(e) : Promise.resolve()
                            }))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, e(t, [{
                        key: "isRunning",
                        get: function() {
                            return this.S
                        },
                        set: function(t) {
                            this.S = t
                        }
                    }, {
                        key: "hasOnce",
                        get: function() {
                            return this.store.once.length > 0
                        }
                    }, {
                        key: "hasSelf",
                        get: function() {
                            return this.store.all.some((function(t) {
                                return "self" === t.name
                            }))
                        }
                    }, {
                        key: "shouldWait",
                        get: function() {
                            return this.store.all.some((function(t) {
                                return t.to && !t.to.route || t.sync
                            }))
                        }
                    }]), t
                }(),
                nt = function() {
                    function t(t) {
                        var e = this;
                        this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, 0 !== t.length && (t.forEach((function(t) {
                            e.byNamespace.set(t.namespace, t)
                        })), this.names.forEach((function(t) {
                            G[t](e.L(t))
                        })))
                    }
                    return t.prototype.L = function(t) {
                        var e = this;
                        return function(i) {
                            var r = t.match(/enter/i) ? i.next : i.current,
                                n = e.byNamespace.get(r.namespace);
                            return n && n[t] ? N(n[t], n)(i) : Promise.resolve()
                        }
                    }, t
                }();
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
                var e = this;
                do {
                    if (e.matches(t)) return e;
                    e = e.parentElement || e.parentNode
                } while (null !== e && 1 === e.nodeType);
                return null
            });
            var st = {
                container: null,
                html: "",
                namespace: "",
                url: {
                    hash: "",
                    href: "",
                    path: "",
                    port: null,
                    query: {}
                }
            };
            return new(function() {
                function t() {
                    this.version = "2.9.7", this.schemaPage = st, this.Logger = u, this.logger = new u("@barba/core"), this.plugins = [], this.hooks = G, this.dom = P, this.helpers = k, this.history = T, this.request = V, this.url = O
                }
                var r = t.prototype;
                return r.use = function(t, e) {
                    var i = this.plugins;
                    i.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, e), i.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.')
                }, r.init = function(t) {
                    var e = void 0 === t ? {} : t,
                        r = e.transitions,
                        n = void 0 === r ? [] : r,
                        s = e.views,
                        a = void 0 === s ? [] : s,
                        o = e.schema,
                        h = void 0 === o ? S : o,
                        l = e.requestError,
                        c = e.timeout,
                        p = void 0 === c ? 2e3 : c,
                        f = e.cacheIgnore,
                        d = void 0 !== f && f,
                        m = e.prefetchIgnore,
                        g = void 0 !== m && m,
                        y = e.preventRunning,
                        v = void 0 !== y && y,
                        b = e.prevent,
                        D = void 0 === b ? null : b,
                        _ = e.debug,
                        E = e.logLevel;
                    if (u.setLevel(!0 === (void 0 !== _ && _) ? "debug" : void 0 === E ? "off" : E), this.logger.info(this.version), Object.keys(h).forEach((function(t) {
                            S[t] && (S[t] = h[t])
                        })), this.$ = l, this.timeout = p, this.cacheIgnore = d, this.prefetchIgnore = g, this.preventRunning = v, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found");
                    this._.setAttribute("aria-live", "polite"), this.q();
                    var x = this.data.current;
                    if (!x.container) throw new Error("[@barba/core] No Barba container found");
                    if (this.cache = new H(d), this.prevent = new tt(g), this.transitions = new rt(n), this.views = new nt(a), null !== D) {
                        if ("function" != typeof D) throw new Error("[@barba/core] Prevent should be a function");
                        this.prevent.add("preventCustom", D)
                    }
                    this.history.init(x.url.href, x.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach((function(t) {
                        return t.init()
                    }));
                    var w = this.data;
                    w.trigger = "barba", w.next = w.current, w.current = i({}, this.schemaPage), this.hooks.do("ready", w), this.once(w), this.q()
                }, r.destroy = function() {
                    this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = []
                }, r.force = function(t) {
                    window.location.assign(t)
                }, r.go = function(t, e, i) {
                    var r;
                    if (void 0 === e && (e = "barba"), this.transitions.isRunning) this.force(t);
                    else if (!(r = "popstate" === e ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return e = this.history.change(t, e, i), i && (i.stopPropagation(), i.preventDefault()), this.page(t, e, r)
                }, r.once = function(t) {
                    try {
                        var e = this;
                        return Promise.resolve(e.hooks.do("beforeEnter", t)).then((function() {
                            function i() {
                                return Promise.resolve(e.hooks.do("afterEnter", t)).then((function() {}))
                            }
                            var r = function() {
                                if (e.transitions.hasOnce) {
                                    var i = e.transitions.get(t, {
                                        once: !0
                                    });
                                    return Promise.resolve(e.transitions.doOnce({
                                        transition: i,
                                        data: t
                                    })).then((function() {}))
                                }
                            }();
                            return r && r.then ? r.then(i) : i()
                        }))
                    } catch (t) {
                        return Promise.reject(t)
                    }
                }, r.page = function(t, e, r) {
                    try {
                        var n = function() {
                                var t = s.data;
                                return Promise.resolve(s.hooks.do("page", t)).then((function() {
                                    var e = h((function() {
                                        var e = s.transitions.get(t, {
                                            once: !1,
                                            self: r
                                        });
                                        return Promise.resolve(s.transitions.doPage({
                                            data: t,
                                            page: a,
                                            transition: e,
                                            wrapper: s._
                                        })).then((function() {
                                            s.q()
                                        }))
                                    }), (function() {
                                        0 === u.getLevel() && s.force(t.current.url.href)
                                    }));
                                    if (e && e.then) return e.then((function() {}))
                                }))
                            },
                            s = this;
                        s.data.next.url = i({
                            href: t
                        }, s.url.parse(t)), s.data.trigger = e;
                        var a = s.cache.has(t) ? s.cache.update(t, {
                                action: "click"
                            }).request : s.cache.set(t, s.request(t, s.timeout, s.onRequestError.bind(s, e)), "click").request,
                            o = function() {
                                if (s.transitions.shouldWait) return Promise.resolve(A(a, s.data)).then((function() {}))
                            }();
                        return Promise.resolve(o && o.then ? o.then(n) : n())
                    } catch (t) {
                        return Promise.reject(t)
                    }
                }, r.onRequestError = function(t) {
                    this.transitions.isRunning = !1;
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
                    var n = i[0],
                        s = i[1],
                        a = this.cache.getAction(n);
                    return this.cache.delete(n), !(this.$ && !1 === this.$(t, a, n, s) || ("click" === a && this.force(n), 1))
                }, r.prefetch = function(t) {
                    var e = this;
                    this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch((function(t) {
                        e.logger.error(t)
                    })), "prefetch")
                }, r.F = function() {
                    !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D)
                }, r.H = function() {
                    !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D)
                }, r.B = function(t) {
                    var e = this,
                        i = this.I(t);
                    if (i) {
                        var r = this.dom.getHref(i);
                        this.prevent.checkHref(r) || this.cache.has(r) || this.cache.set(r, this.request(r, this.timeout, this.onRequestError.bind(this, i)).catch((function(t) {
                            e.logger.error(t)
                        })), "enter")
                    }
                }, r.U = function(t) {
                    var e = this.I(t);
                    if (e) return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(), void t.stopPropagation()) : void this.go(this.dom.getHref(e), e, t)
                }, r.D = function(t) {
                    this.go(this.url.getHref(), "popstate", t)
                }, r.I = function(t) {
                    for (var e = t.target; e && !this.dom.getHref(e);) e = e.parentNode;
                    if (e && !this.prevent.checkLink(e, t, this.dom.getHref(e))) return e
                }, r.q = function() {
                    var t = this.url.getHref(),
                        e = {
                            container: this.dom.getContainer(),
                            html: this.dom.getHtml(),
                            namespace: this.dom.getNamespace(),
                            url: i({
                                href: t
                            }, this.url.parse(t))
                        };
                    this.C = {
                        current: e,
                        next: i({}, this.schemaPage),
                        trigger: void 0
                    }, this.hooks.do("reset", this.data)
                }, e(t, [{
                    key: "data",
                    get: function() {
                        return this.C
                    }
                }, {
                    key: "wrapper",
                    get: function() {
                        return this._
                    }
                }]), t
            }())
        }()
    },
    vX6Q: function(t, e, i) {
        var r, n;
        ! function(s, a) {
            "use strict";
            r = [i("CUlp")], void 0 === (n = function(t) {
                return function(t, e) {
                    var i = t.jQuery,
                        r = t.console;

                    function n(t, e) {
                        for (var i in e) t[i] = e[i];
                        return t
                    }
                    var s = Array.prototype.slice;

                    function a(t, e, o) {
                        if (!(this instanceof a)) return new a(t, e, o);
                        var h, l = t;
                        ("string" == typeof t && (l = document.querySelectorAll(t)), l) ? (this.elements = (h = l, Array.isArray(h) ? h : "object" == typeof h && "number" == typeof h.length ? s.call(h) : [h]), this.options = n({}, this.options), "function" == typeof e ? o = e : n(this.options, e), o && this.on("always", o), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : r.error("Bad element for imagesLoaded " + (l || t))
                    }
                    a.prototype = Object.create(e.prototype), a.prototype.options = {}, a.prototype.getImages = function() {
                        this.images = [], this.elements.forEach(this.addElementImages, this)
                    }, a.prototype.addElementImages = function(t) {
                        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                        var e = t.nodeType;
                        if (e && o[e]) {
                            for (var i = t.querySelectorAll("img"), r = 0; r < i.length; r++) {
                                var n = i[r];
                                this.addImage(n)
                            }
                            if ("string" == typeof this.options.background) {
                                var s = t.querySelectorAll(this.options.background);
                                for (r = 0; r < s.length; r++) {
                                    var a = s[r];
                                    this.addElementBackgroundImages(a)
                                }
                            }
                        }
                    };
                    var o = {
                        1: !0,
                        9: !0,
                        11: !0
                    };

                    function h(t) {
                        this.img = t
                    }

                    function l(t, e) {
                        this.url = t, this.element = e, this.img = new Image
                    }
                    return a.prototype.addElementBackgroundImages = function(t) {
                        var e = getComputedStyle(t);
                        if (e)
                            for (var i = /url\((['"])?(.*?)\1\)/gi, r = i.exec(e.backgroundImage); null !== r;) {
                                var n = r && r[2];
                                n && this.addBackground(n, t), r = i.exec(e.backgroundImage)
                            }
                    }, a.prototype.addImage = function(t) {
                        var e = new h(t);
                        this.images.push(e)
                    }, a.prototype.addBackground = function(t, e) {
                        var i = new l(t, e);
                        this.images.push(i)
                    }, a.prototype.check = function() {
                        var t = this;

                        function e(e, i, r) {
                            setTimeout((function() {
                                t.progress(e, i, r)
                            }))
                        }
                        this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function(t) {
                            t.once("progress", e), t.check()
                        })) : this.complete()
                    }, a.prototype.progress = function(t, e, i) {
                        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && r && r.log("progress: " + i, t, e)
                    }, a.prototype.complete = function() {
                        var t = this.hasAnyBroken ? "fail" : "done";
                        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                            var e = this.hasAnyBroken ? "reject" : "resolve";
                            this.jqDeferred[e](this)
                        }
                    }, h.prototype = Object.create(e.prototype), h.prototype.check = function() {
                        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
                    }, h.prototype.getIsImageComplete = function() {
                        return this.img.complete && this.img.naturalWidth
                    }, h.prototype.confirm = function(t, e) {
                        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
                    }, h.prototype.handleEvent = function(t) {
                        var e = "on" + t.type;
                        this[e] && this[e](t)
                    }, h.prototype.onload = function() {
                        this.confirm(!0, "onload"), this.unbindEvents()
                    }, h.prototype.onerror = function() {
                        this.confirm(!1, "onerror"), this.unbindEvents()
                    }, h.prototype.unbindEvents = function() {
                        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                    }, l.prototype = Object.create(h.prototype), l.prototype.check = function() {
                        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
                    }, l.prototype.unbindEvents = function() {
                        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                    }, l.prototype.confirm = function(t, e) {
                        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
                    }, a.makeJQueryPlugin = function(e) {
                        (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function(t, e) {
                            return new a(this, t, e).jqDeferred.promise(i(this))
                        })
                    }, a.makeJQueryPlugin(), a
                }(s, t)
            }.apply(e, r)) || (t.exports = n)
        }("undefined" != typeof window ? window : this)
    },
    yLpj: function(t, e) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    },
    yrm9: function(t, e, i) {
        var r;
        t.exports = (r = window.requestIdleCallback || function(t) {
            var e = Date.now();
            return setTimeout((function() {
                t({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - e))
                    }
                })
            }), 1)
        }, new(function() {
            function t() {
                this.name = "@barba/prefetch", this.version = "2.1.10", this.toPrefetch = new Set
            }
            var e = t.prototype;
            return e.install = function(t, e) {
                var i = void 0 === e ? {} : e,
                    r = i.root,
                    n = void 0 === r ? document.body : r,
                    s = i.timeout,
                    a = void 0 === s ? 2e3 : s;
                this.logger = new t.Logger(this.name), this.logger.info(this.version), this.barba = t, this.root = n, this.timeout = a
            }, e.init = function() {
                var t = this;
                this.barba.prefetchIgnore ? this.logger.warn("barba.prefetchIgnore is enabled") : this.barba.cacheIgnore ? this.logger.warn("barba.cacheIgnore is enabled") : (this.observer = new IntersectionObserver((function(e) {
                    e.forEach((function(e) {
                        if (e.isIntersecting) {
                            var i = e.target,
                                r = t.barba.dom.getHref(i);
                            t.toPrefetch.has(r) && (t.observer.unobserve(i), t.barba.cache.has(r) ? t.barba.cache.update(r, {
                                action: "prefetch"
                            }) : t.barba.cache.set(r, t.barba.request(r, t.barba.timeout, t.barba.onRequestError.bind(t.barba, "barba")).catch((function(e) {
                                t.logger.error(e)
                            })), "prefetch"))
                        }
                    }))
                })), this.observe(), this.barba.hooks.after(this.observe, this))
            }, e.observe = function() {
                var t = this;
                r((function() {
                    t.root.querySelectorAll("a").forEach((function(e) {
                        var i = e,
                            r = t.barba.dom.getHref(i);
                        t.barba.cache.has(r) || t.barba.prevent.checkHref(r) || t.barba.prevent.checkLink(i, {}, r) || (t.observer.observe(e), t.toPrefetch.add(r))
                    }))
                }), {
                    timeout: this.timeout
                })
            }, t
        }()))
    },
    zk27: function(t, e, i) {
        "use strict";
        i.r(e), i.d(e, "default", (function() {
            return Va
        }));
        var r = i("o0o1"),
            n = i.n(r),
            s = i("uvZ8"),
            a = i.n(s),
            o = i("yrm9"),
            h = i.n(o);

        function l(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function c(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }
        var u, p, f, d, m, g, y, v, b, D, _, E, x, w = {
                autoSleep: 120,
                force3D: "auto",
                nullTargetWarn: 1,
                units: {
                    lineHeight: ""
                }
            },
            C = {
                duration: .5,
                overwrite: !1,
                delay: 0
            },
            S = 1e8,
            P = 2 * Math.PI,
            T = P / 4,
            A = 0,
            F = Math.sqrt,
            k = Math.cos,
            M = Math.sin,
            I = function(t) {
                return "string" == typeof t
            },
            B = function(t) {
                return "function" == typeof t
            },
            R = function(t) {
                return "number" == typeof t
            },
            L = function(t) {
                return void 0 === t
            },
            O = function(t) {
                return "object" == typeof t
            },
            V = function(t) {
                return !1 !== t
            },
            z = function() {
                return "undefined" != typeof window
            },
            N = function(t) {
                return B(t) || I(t)
            },
            G = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
            j = Array.isArray,
            H = /(?:-?\.?\d|\.)+/gi,
            q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
            W = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            X = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
            Y = /[+-]=-?[.\d]+/,
            U = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
            K = /[\d.+\-=]+(?:e[-+]\d*)*/i,
            $ = {},
            Z = {},
            Q = function(t) {
                return (Z = wt(t, $)) && ai
            },
            J = function(t, e) {
                return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
            },
            tt = function(t, e) {
                return !e && console.warn(t)
            },
            et = function(t, e) {
                return t && ($[t] = e) && Z && (Z[t] = e) || $
            },
            it = function() {
                return 0
            },
            rt = {},
            nt = [],
            st = {},
            at = {},
            ot = {},
            ht = 30,
            lt = [],
            ct = "",
            ut = function(t) {
                var e, i, r = t[0];
                if (O(r) || B(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
                    for (i = lt.length; i-- && !lt[i].targetTest(r););
                    e = lt[i]
                }
                for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new ke(t[i], e))) || t.splice(i, 1);
                return t
            },
            pt = function(t) {
                return t._gsap || ut(Zt(t))[0]._gsap
            },
            ft = function(t, e, i) {
                return (i = t[e]) && B(i) ? t[e]() : L(i) && t.getAttribute && t.getAttribute(e) || i
            },
            dt = function(t, e) {
                return (t = t.split(",")).forEach(e) || t
            },
            mt = function(t) {
                return Math.round(1e5 * t) / 1e5 || 0
            },
            gt = function(t, e) {
                for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i;);
                return r < i
            },
            yt = function(t, e, i) {
                var r, n = R(t[1]),
                    s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
                    a = t[s];
                if (n && (a.duration = t[1]), a.parent = i, e) {
                    for (r = a; i && !("immediateRender" in r);) r = i.vars.defaults || {}, i = V(i.vars.inherit) && i.parent;
                    a.immediateRender = V(r.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1]
                }
                return a
            },
            vt = function() {
                var t, e, i = nt.length,
                    r = nt.slice(0);
                for (st = {}, nt.length = 0, t = 0; t < i; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
            },
            bt = function(t, e, i, r) {
                nt.length && vt(), t.render(e, i, r), nt.length && vt()
            },
            Dt = function(t) {
                var e = parseFloat(t);
                return (e || 0 === e) && (t + "").match(U).length < 2 ? e : I(t) ? t.trim() : t
            },
            _t = function(t) {
                return t
            },
            Et = function(t, e) {
                for (var i in e) i in t || (t[i] = e[i]);
                return t
            },
            xt = function(t, e) {
                for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i])
            },
            wt = function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            },
            Ct = function t(e, i) {
                for (var r in i) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = O(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r]);
                return e
            },
            St = function(t, e) {
                var i, r = {};
                for (i in t) i in e || (r[i] = t[i]);
                return r
            },
            Pt = function(t) {
                var e = t.parent || p,
                    i = t.keyframes ? xt : Et;
                if (V(t.inherit))
                    for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
                return t
            },
            Tt = function(t, e, i, r) {
                void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
                var n = e._prev,
                    s = e._next;
                n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null
            },
            At = function(t, e) {
                t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
            },
            Ft = function(t, e) {
                if (t && (!e || e._end > t._dur || e._start < 0))
                    for (var i = t; i;) i._dirty = 1, i = i.parent;
                return t
            },
            kt = function(t) {
                for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                return t
            },
            Mt = function(t) {
                return t._repeat ? It(t._tTime, t = t.duration() + t._rDelay) * t : 0
            },
            It = function(t, e) {
                var i = Math.floor(t /= e);
                return t && i === t ? i - 1 : i
            },
            Bt = function(t, e) {
                return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            },
            Rt = function(t) {
                return t._end = mt(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
            },
            Lt = function(t, e) {
                var i = t._dp;
                return i && i.smoothChildTiming && t._ts && (t._start = mt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Rt(t), i._dirty || Ft(i, t)), t
            },
            Ot = function(t, e) {
                var i;
                if ((e._time || e._initted && !e._dur) && (i = Bt(t.rawTime(), e), (!e._dur || Xt(0, e.totalDuration(), i) - e._tTime > 1e-8) && e.render(i, !0)), Ft(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                    if (t._dur < t.duration())
                        for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
                    t._zTime = -1e-8
                }
            },
            Vt = function(t, e, i, r) {
                return e.parent && At(e), e._start = mt(i + e._delay), e._end = mt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                    function(t, e, i, r, n) {
                        void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
                        var s, a = t[r];
                        if (n)
                            for (s = e[n]; a && a[n] > s;) a = a._prev;
                        a ? (e._next = a._next, a._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = a, e.parent = e._dp = t
                    }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, r || Ot(t, e), t
            },
            zt = function(t, e) {
                return ($.ScrollTrigger || J("scrollTrigger", e)) && $.ScrollTrigger.create(e, t)
            },
            Nt = function(t, e, i, r) {
                return Ve(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && y !== ve.frame ? (nt.push(t), t._lazy = [e, r], 1) : void 0 : 1
            },
            Gt = function(t, e, i, r) {
                var n = t._repeat,
                    s = mt(e) || 0,
                    a = t._tTime / t._tDur;
                return a && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : mt(s * (n + 1) + t._rDelay * n) : s, a && !r ? Lt(t, t._tTime = t._tDur * a) : t.parent && Rt(t), i || Ft(t.parent, t), t
            },
            jt = function(t) {
                return t instanceof Ie ? Ft(t) : Gt(t, t._dur)
            },
            Ht = {
                _start: 0,
                endTime: it
            },
            qt = function t(e, i) {
                var r, n, s = e.labels,
                    a = e._recent || Ht,
                    o = e.duration() >= S ? a.endTime(!1) : e._dur;
                return I(i) && (isNaN(i) || i in s) ? "<" === (r = i.charAt(0)) || ">" === r ? ("<" === r ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) : (r = i.indexOf("=")) < 0 ? (i in s || (s[i] = o), s[i]) : (n = +(i.charAt(r - 1) + i.substr(r + 1)), r > 1 ? t(e, i.substr(0, r - 1)) + n : o + n) : null == i ? o : +i
            },
            Wt = function(t, e) {
                return t || 0 === t ? e(t) : e
            },
            Xt = function(t, e, i) {
                return i < t ? t : i > e ? e : i
            },
            Yt = function(t) {
                if ("string" != typeof t) return "";
                var e = K.exec(t);
                return e ? t.substr(e.index + e[0].length) : ""
            },
            Ut = [].slice,
            Kt = function(t, e) {
                return t && O(t) && "length" in t && (!e && !t.length || t.length - 1 in t && O(t[0])) && !t.nodeType && t !== f
            },
            $t = function(t, e, i) {
                return void 0 === i && (i = []), t.forEach((function(t) {
                    var r;
                    return I(t) && !e || Kt(t, 1) ? (r = i).push.apply(r, Zt(t)) : i.push(t)
                })) || i
            },
            Zt = function(t, e) {
                return !I(t) || e || !d && be() ? j(t) ? $t(t, e) : Kt(t) ? Ut.call(t, 0) : t ? [t] : [] : Ut.call(m.querySelectorAll(t), 0)
            },
            Qt = function(t) {
                return t.sort((function() {
                    return .5 - Math.random()
                }))
            },
            Jt = function(t) {
                if (B(t)) return t;
                var e = O(t) ? t : {
                        each: t
                    },
                    i = Se(e.ease),
                    r = e.from || 0,
                    n = parseFloat(e.base) || 0,
                    s = {},
                    a = r > 0 && r < 1,
                    o = isNaN(r) || a,
                    h = e.axis,
                    l = r,
                    c = r;
                return I(r) ? l = c = {
                        center: .5,
                        edges: .5,
                        end: 1
                    } [r] || 0 : !a && o && (l = r[0], c = r[1]),
                    function(t, a, u) {
                        var p, f, d, m, g, y, v, b, D, _ = (u || e).length,
                            E = s[_];
                        if (!E) {
                            if (!(D = "auto" === e.grid ? 0 : (e.grid || [1, S])[1])) {
                                for (v = -S; v < (v = u[D++].getBoundingClientRect().left) && D < _;);
                                D--
                            }
                            for (E = s[_] = [], p = o ? Math.min(D, _) * l - .5 : r % D, f = o ? _ * c / D - .5 : r / D | 0, v = 0, b = S, y = 0; y < _; y++) d = y % D - p, m = f - (y / D | 0), E[y] = g = h ? Math.abs("y" === h ? m : d) : F(d * d + m * m), g > v && (v = g), g < b && (b = g);
                            "random" === r && Qt(E), E.max = v - b, E.min = b, E.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (D > _ ? _ - 1 : h ? "y" === h ? _ / D : D : Math.max(D, _ / D)) || 0) * ("edges" === r ? -1 : 1), E.b = _ < 0 ? n - _ : n, E.u = Yt(e.amount || e.each) || 0, i = i && _ < 0 ? we(i) : i
                        }
                        return _ = (E[t] - E.min) / E.max || 0, mt(E.b + (i ? i(_) : _) * E.v) + E.u
                    }
            },
            te = function(t) {
                var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
                return function(i) {
                    var r = Math.round(parseFloat(i) / t) * t * e;
                    return (r - r % 1) / e + (R(i) ? 0 : Yt(i))
                }
            },
            ee = function(t, e) {
                var i, r, n = j(t);
                return !n && O(t) && (i = n = t.radius || S, t.values ? (t = Zt(t.values), (r = !R(t[0])) && (i *= i)) : t = te(t.increment)), Wt(e, n ? B(t) ? function(e) {
                    return r = t(e), Math.abs(r - e) <= i ? r : e
                } : function(e) {
                    for (var n, s, a = parseFloat(r ? e.x : e), o = parseFloat(r ? e.y : 0), h = S, l = 0, c = t.length; c--;)(n = r ? (n = t[c].x - a) * n + (s = t[c].y - o) * s : Math.abs(t[c] - a)) < h && (h = n, l = c);
                    return l = !i || h <= i ? t[l] : e, r || l === e || R(e) ? l : l + Yt(e)
                } : te(t))
            },
            ie = function(t, e, i, r) {
                return Wt(j(t) ? !e : !0 === i ? !!(i = 0) : !r, (function() {
                    return j(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * r) / r
                }))
            },
            re = function(t, e, i) {
                return Wt(i, (function(i) {
                    return t[~~e(i)]
                }))
            },
            ne = function(t) {
                for (var e, i, r, n, s = 0, a = ""; ~(e = t.indexOf("random(", s));) r = t.indexOf(")", e), n = "[" === t.charAt(e + 7), i = t.substr(e + 7, r - e - 7).match(n ? U : H), a += t.substr(s, e - s) + ie(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5), s = r + 1;
                return a + t.substr(s, t.length - s)
            },
            se = function(t, e, i, r, n) {
                var s = e - t,
                    a = r - i;
                return Wt(n, (function(e) {
                    return i + ((e - t) / s * a || 0)
                }))
            },
            ae = function(t, e, i) {
                var r, n, s, a = t.labels,
                    o = S;
                for (r in a)(n = a[r] - e) < 0 == !!i && n && o > (n = Math.abs(n)) && (s = r, o = n);
                return s
            },
            oe = function(t, e, i) {
                var r, n, s = t.vars,
                    a = s[e];
                if (a) return r = s[e + "Params"], n = s.callbackScope || t, i && nt.length && vt(), r ? a.apply(n, r) : a.call(n)
            },
            he = function(t) {
                return At(t), t.progress() < 1 && oe(t, "onInterrupt"), t
            },
            le = function(t) {
                var e = (t = !t.name && t.default || t).name,
                    i = B(t),
                    r = e && !i && t.init ? function() {
                        this._props = []
                    } : t,
                    n = {
                        init: it,
                        render: Ze,
                        add: Le,
                        kill: Je,
                        modifier: Qe,
                        rawVars: 0
                    },
                    s = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Ye,
                        aliases: {},
                        register: 0
                    };
                if (be(), t !== r) {
                    if (at[e]) return;
                    Et(r, Et(St(t, n), s)), wt(r.prototype, wt(n, St(t, s))), at[r.prop = e] = r, t.targetTest && (lt.push(r), rt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                et(e, r), t.register && t.register(ai, r, ii)
            },
            ce = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            ue = function(t, e, i) {
                return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
            },
            pe = function(t, e, i) {
                var r, n, s, a, o, h, l, c, u, p, f = t ? R(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : ce.black;
                if (!f) {
                    if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ce[t]) f = ce[t];
                    else if ("#" === t.charAt(0)) {
                        if (t.length < 6 && (r = t.charAt(1), n = t.charAt(2), s = t.charAt(3), t = "#" + r + r + n + n + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(f = parseInt(t.substr(1, 6), 16)) >> 16, f >> 8 & 255, 255 & f, parseInt(t.substr(7), 16) / 255];
                        f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
                    } else if ("hsl" === t.substr(0, 3))
                        if (f = p = t.match(H), e) {
                            if (~t.indexOf("=")) return f = t.match(q), i && f.length < 4 && (f[3] = 1), f
                        } else a = +f[0] % 360 / 360, o = +f[1] / 100, r = 2 * (h = +f[2] / 100) - (n = h <= .5 ? h * (o + 1) : h + o - h * o), f.length > 3 && (f[3] *= 1), f[0] = ue(a + 1 / 3, r, n), f[1] = ue(a, r, n), f[2] = ue(a - 1 / 3, r, n);
                    else f = t.match(H) || ce.transparent;
                    f = f.map(Number)
                }
                return e && !p && (r = f[0] / 255, n = f[1] / 255, s = f[2] / 255, h = ((l = Math.max(r, n, s)) + (c = Math.min(r, n, s))) / 2, l === c ? a = o = 0 : (u = l - c, o = h > .5 ? u / (2 - l - c) : u / (l + c), a = l === r ? (n - s) / u + (n < s ? 6 : 0) : l === n ? (s - r) / u + 2 : (r - n) / u + 4, a *= 60), f[0] = ~~(a + .5), f[1] = ~~(100 * o + .5), f[2] = ~~(100 * h + .5)), i && f.length < 4 && (f[3] = 1), f
            },
            fe = function(t) {
                var e = [],
                    i = [],
                    r = -1;
                return t.split(me).forEach((function(t) {
                    var n = t.match(W) || [];
                    e.push.apply(e, n), i.push(r += n.length + 1)
                })), e.c = i, e
            },
            de = function(t, e, i) {
                var r, n, s, a, o = "",
                    h = (t + o).match(me),
                    l = e ? "hsla(" : "rgba(",
                    c = 0;
                if (!h) return t;
                if (h = h.map((function(t) {
                        return (t = pe(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                    })), i && (s = fe(t), (r = i.c).join(o) !== s.c.join(o)))
                    for (a = (n = t.replace(me, "1").split(W)).length - 1; c < a; c++) o += n[c] + (~r.indexOf(c) ? h.shift() || l + "0,0,0,0)" : (s.length ? s : h.length ? h : i).shift());
                if (!n)
                    for (a = (n = t.split(me)).length - 1; c < a; c++) o += n[c] + h[c];
                return o + n[a]
            },
            me = function() {
                var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                for (t in ce) e += "|" + t + "\\b";
                return new RegExp(e + ")", "gi")
            }(),
            ge = /hsl[a]?\(/,
            ye = function(t) {
                var e, i = t.join(" ");
                if (me.lastIndex = 0, me.test(i)) return e = ge.test(i), t[1] = de(t[1], e), t[0] = de(t[0], e, fe(t[1])), !0
            },
            ve = function() {
                var t, e, i, r, n, s, a = Date.now,
                    o = 500,
                    h = 33,
                    l = a(),
                    c = l,
                    u = 1e3 / 240,
                    p = u,
                    y = [],
                    v = function i(f) {
                        var d, m, g, v, b = a() - c,
                            D = !0 === f;
                        if (b > o && (l += b - h), ((d = (g = (c += b) - l) - p) > 0 || D) && (v = ++r.frame, n = g - 1e3 * r.time, r.time = g /= 1e3, p += d + (d >= u ? 4 : u - d), m = 1), D || (t = e(i)), m)
                            for (s = 0; s < y.length; s++) y[s](g, n, v, f)
                    };
                return r = {
                    time: 0,
                    frame: 0,
                    tick: function() {
                        v(!0)
                    },
                    deltaRatio: function(t) {
                        return n / (1e3 / (t || 60))
                    },
                    wake: function() {
                        g && (!d && z() && (f = d = window, m = f.document || {}, $.gsap = ai, (f.gsapVersions || (f.gsapVersions = [])).push(ai.version), Q(Z || f.GreenSockGlobals || !f.gsap && f || {}), i = f.requestAnimationFrame), t && r.sleep(), e = i || function(t) {
                            return setTimeout(t, p - 1e3 * r.time + 1 | 0)
                        }, b = 1, v(2))
                    },
                    sleep: function() {
                        (i ? f.cancelAnimationFrame : clearTimeout)(t), b = 0, e = it
                    },
                    lagSmoothing: function(t, e) {
                        o = t || 1 / 1e-8, h = Math.min(e, o, 0)
                    },
                    fps: function(t) {
                        u = 1e3 / (t || 240), p = 1e3 * r.time + u
                    },
                    add: function(t) {
                        y.indexOf(t) < 0 && y.push(t), be()
                    },
                    remove: function(t) {
                        var e;
                        ~(e = y.indexOf(t)) && y.splice(e, 1) && s >= e && s--
                    },
                    _listeners: y
                }
            }(),
            be = function() {
                return !b && ve.wake()
            },
            De = {},
            _e = /^[\d.\-M][\d.\-,\s]/,
            Ee = /["']/g,
            xe = function(t) {
                for (var e, i, r, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, h = s.length; o < h; o++) i = s[o], e = o !== h - 1 ? i.lastIndexOf(",") : i.length, r = i.substr(0, e), n[a] = isNaN(r) ? r.replace(Ee, "").trim() : +r, a = i.substr(e + 1).trim();
                return n
            },
            we = function(t) {
                return function(e) {
                    return 1 - t(1 - e)
                }
            },
            Ce = function t(e, i) {
                for (var r, n = e._first; n;) n instanceof Ie ? t(n, i) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === i || (n.timeline ? t(n.timeline, i) : (r = n._ease, n._ease = n._yEase, n._yEase = r, n._yoyo = i)), n = n._next
            },
            Se = function(t, e) {
                return t && (B(t) ? t : De[t] || function(t) {
                    var e, i, r, n, s = (t + "").split("("),
                        a = De[s[0]];
                    return a && s.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [xe(s[1])] : (e = t, i = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.indexOf("(", i), e.substring(i, ~n && n < r ? e.indexOf(")", r + 1) : r)).split(",").map(Dt)) : De._CE && _e.test(t) ? De._CE("", t) : a
                }(t)) || e
            },
            Pe = function(t, e, i, r) {
                void 0 === i && (i = function(t) {
                    return 1 - e(1 - t)
                }), void 0 === r && (r = function(t) {
                    return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
                });
                var n, s = {
                    easeIn: e,
                    easeOut: i,
                    easeInOut: r
                };
                return dt(t, (function(t) {
                    for (var e in De[t] = $[t] = s, De[n = t.toLowerCase()] = i, s) De[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = De[t + "." + e] = s[e]
                })), s
            },
            Te = function(t) {
                return function(e) {
                    return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
                }
            },
            Ae = function t(e, i, r) {
                var n = i >= 1 ? i : 1,
                    s = (r || (e ? .3 : .45)) / (i < 1 ? i : 1),
                    a = s / P * (Math.asin(1 / n) || 0),
                    o = function(t) {
                        return 1 === t ? 1 : n * Math.pow(2, -10 * t) * M((t - a) * s) + 1
                    },
                    h = "out" === e ? o : "in" === e ? function(t) {
                        return 1 - o(1 - t)
                    } : Te(o);
                return s = P / s, h.config = function(i, r) {
                    return t(e, i, r)
                }, h
            },
            Fe = function t(e, i) {
                void 0 === i && (i = 1.70158);
                var r = function(t) {
                        return t ? --t * t * ((i + 1) * t + i) + 1 : 0
                    },
                    n = "out" === e ? r : "in" === e ? function(t) {
                        return 1 - r(1 - t)
                    } : Te(r);
                return n.config = function(i) {
                    return t(e, i)
                }, n
            };
        dt("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
            var i = e < 5 ? e + 1 : e;
            Pe(t + ",Power" + (i - 1), e ? function(t) {
                return Math.pow(t, i)
            } : function(t) {
                return t
            }, (function(t) {
                return 1 - Math.pow(1 - t, i)
            }), (function(t) {
                return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
            }))
        })), De.Linear.easeNone = De.none = De.Linear.easeIn, Pe("Elastic", Ae("in"), Ae("out"), Ae()), D = 7.5625, E = 1 / (_ = 2.75), Pe("Bounce", (function(t) {
            return 1 - x(1 - t)
        }), x = function(t) {
            return t < E ? D * t * t : t < .7272727272727273 ? D * Math.pow(t - 1.5 / _, 2) + .75 : t < .9090909090909092 ? D * (t -= 2.25 / _) * t + .9375 : D * Math.pow(t - 2.625 / _, 2) + .984375
        }), Pe("Expo", (function(t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0
        })), Pe("Circ", (function(t) {
            return -(F(1 - t * t) - 1)
        })), Pe("Sine", (function(t) {
            return 1 === t ? 1 : 1 - k(t * T)
        })), Pe("Back", Fe("in"), Fe("out"), Fe()), De.SteppedEase = De.steps = $.SteppedEase = {
            config: function(t, e) {
                void 0 === t && (t = 1);
                var i = 1 / t,
                    r = t + (e ? 0 : 1),
                    n = e ? 1 : 0;
                return function(t) {
                    return ((r * Xt(0, 1 - 1e-8, t) | 0) + n) * i
                }
            }
        }, C.ease = De["quad.out"], dt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
            return ct += t + "," + t + "Params,"
        }));
        var ke = function(t, e) {
                this.id = A++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : ft, this.set = e ? e.getSetter : Ye
            },
            Me = function() {
                function t(t, e) {
                    var i = t.parent || p;
                    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Gt(this, +t.duration, 1, 1), this.data = t.data, b || ve.wake(), i && Vt(i, this, e || 0 === e ? e : i._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
                }
                var e = t.prototype;
                return e.delay = function(t) {
                    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
                }, e.duration = function(t) {
                    return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
                }, e.totalDuration = function(t) {
                    return arguments.length ? (this._dirty = 0, Gt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                }, e.totalTime = function(t, e) {
                    if (be(), !arguments.length) return this._tTime;
                    var i = this._dp;
                    if (i && i.smoothChildTiming && this._ts) {
                        for (Lt(this, t), !i._dp || i.parent || Ot(i, this); i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Vt(this._dp, this, this._start - this._delay)
                    }
                    return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), bt(this, t, e)), this
                }, e.time = function(t, e) {
                    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Mt(this)) % this._dur || (t ? this._dur : 0), e) : this._time
                }, e.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
                }, e.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Mt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
                }, e.iteration = function(t, e) {
                    var i = this.duration() + this._rDelay;
                    return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? It(this._tTime, i) + 1 : 1
                }, e.timeScale = function(t) {
                    if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                    if (this._rts === t) return this;
                    var e = this.parent && this._ts ? Bt(this.parent._time, this) : this._tTime;
                    return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, kt(this.totalTime(Xt(-this._delay, this._tDur, e), !0))
                }, e.paused = function(t) {
                    return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (be(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))), this) : this._ps
                }, e.startTime = function(t) {
                    if (arguments.length) {
                        this._start = t;
                        var e = this.parent || this._dp;
                        return e && (e._sort || !this.parent) && Vt(e, this, t - this._delay), this
                    }
                    return this._start
                }, e.endTime = function(t) {
                    return this._start + (V(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
                }, e.rawTime = function(t) {
                    var e = this.parent || this._dp;
                    return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Bt(e.rawTime(t), this) : this._tTime : this._tTime
                }, e.globalTime = function(t) {
                    for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
                    return i
                }, e.repeat = function(t) {
                    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, jt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
                }, e.repeatDelay = function(t) {
                    return arguments.length ? (this._rDelay = t, jt(this)) : this._rDelay
                }, e.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, e.seek = function(t, e) {
                    return this.totalTime(qt(this, t), V(e))
                }, e.restart = function(t, e) {
                    return this.play().totalTime(t ? -this._delay : 0, V(e))
                }, e.play = function(t, e) {
                    return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                }, e.reverse = function(t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                }, e.pause = function(t, e) {
                    return null != t && this.seek(t, e), this.paused(!0)
                }, e.resume = function() {
                    return this.paused(!1)
                }, e.reversed = function(t) {
                    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
                }, e.invalidate = function() {
                    return this._initted = this._act = 0, this._zTime = -1e-8, this
                }, e.isActive = function() {
                    var t, e = this.parent || this._dp,
                        i = this._start;
                    return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - 1e-8))
                }, e.eventCallback = function(t, e, i) {
                    var r = this.vars;
                    return arguments.length > 1 ? (e ? (r[t] = e, i && (r[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
                }, e.then = function(t) {
                    var e = this;
                    return new Promise((function(i) {
                        var r = B(t) ? t : _t,
                            n = function() {
                                var t = e.then;
                                e.then = null, B(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), i(r), e.then = t
                            };
                        e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? n() : e._prom = n
                    }))
                }, e.kill = function() {
                    he(this)
                }, t
            }();
        Et(Me.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -1e-8,
            _prom: 0,
            _ps: !1,
            _rts: 1
        });
        var Ie = function(t) {
            function e(e, i) {
                var r;
                return void 0 === e && (e = {}), (r = t.call(this, e, i) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = V(e.sortChildren), r.parent && Ot(r.parent, l(r)), e.scrollTrigger && zt(l(r), e.scrollTrigger), r
            }
            c(e, t);
            var i = e.prototype;
            return i.to = function(t, e, i) {
                return new je(t, yt(arguments, 0, this), qt(this, R(e) ? arguments[3] : i)), this
            }, i.from = function(t, e, i) {
                return new je(t, yt(arguments, 1, this), qt(this, R(e) ? arguments[3] : i)), this
            }, i.fromTo = function(t, e, i, r) {
                return new je(t, yt(arguments, 2, this), qt(this, R(e) ? arguments[4] : r)), this
            }, i.set = function(t, e, i) {
                return e.duration = 0, e.parent = this, Pt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new je(t, e, qt(this, i), 1), this
            }, i.call = function(t, e, i) {
                return Vt(this, je.delayedCall(0, t, e), qt(this, i))
            }, i.staggerTo = function(t, e, i, r, n, s, a) {
                return i.duration = e, i.stagger = i.stagger || r, i.onComplete = s, i.onCompleteParams = a, i.parent = this, new je(t, i, qt(this, n)), this
            }, i.staggerFrom = function(t, e, i, r, n, s, a) {
                return i.runBackwards = 1, Pt(i).immediateRender = V(i.immediateRender), this.staggerTo(t, e, i, r, n, s, a)
            }, i.staggerFromTo = function(t, e, i, r, n, s, a, o) {
                return r.startAt = i, Pt(r).immediateRender = V(r.immediateRender), this.staggerTo(t, e, r, n, s, a, o)
            }, i.render = function(t, e, i) {
                var r, n, s, a, o, h, l, c, u, f, d, m, g = this._time,
                    y = this._dirty ? this.totalDuration() : this._tDur,
                    v = this._dur,
                    b = this !== p && t > y - 1e-8 && t >= 0 ? y : t < 1e-8 ? 0 : t,
                    D = this._zTime < 0 != t < 0 && (this._initted || !v);
                if (b !== this._tTime || i || D) {
                    if (g !== this._time && v && (b += this._time - g, t += this._time - g), r = b, u = this._start, h = !(c = this._ts), D && (v || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                        if (d = this._yoyo, o = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, i);
                        if (r = mt(b % o), b === y ? (a = this._repeat, r = v) : ((a = ~~(b / o)) && a === b / o && (r = v, a--), r > v && (r = v)), f = It(this._tTime, o), !g && this._tTime && f !== a && (f = a), d && 1 & a && (r = v - r, m = 1), a !== f && !this._lock) {
                            var _ = d && 1 & f,
                                E = _ === (d && 1 & a);
                            if (a < f && (_ = !_), g = _ ? 0 : v, this._lock = 1, this.render(g || (m ? 0 : mt(a * o)), e, !v)._lock = 0, !e && this.parent && oe(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1), g !== this._time || h !== !this._ts) return this;
                            if (v = this._dur, y = this._tDur, E && (this._lock = 2, g = _ ? v : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !h) return this;
                            Ce(this, m)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (l = function(t, e, i) {
                            var r;
                            if (i > e)
                                for (r = t._first; r && r._start <= i;) {
                                    if (!r._dur && "isPause" === r.data && r._start > e) return r;
                                    r = r._next
                                } else
                                    for (r = t._last; r && r._start >= i;) {
                                        if (!r._dur && "isPause" === r.data && r._start < e) return r;
                                        r = r._prev
                                    }
                        }(this, mt(g), mt(r))) && (b -= r - (r = l._start)), this._tTime = b, this._time = r, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && (r || !v && t >= 0) && !e && oe(this, "onStart"), r >= g && t >= 0)
                        for (n = this._first; n;) {
                            if (s = n._next, (n._act || r >= n._start) && n._ts && l !== n) {
                                if (n.parent !== this) return this.render(t, e, i);
                                if (n.render(n._ts > 0 ? (r - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (r - n._start) * n._ts, e, i), r !== this._time || !this._ts && !h) {
                                    l = 0, s && (b += this._zTime = -1e-8);
                                    break
                                }
                            }
                            n = s
                        } else {
                            n = this._last;
                            for (var x = t < 0 ? t : r; n;) {
                                if (s = n._prev, (n._act || x <= n._end) && n._ts && l !== n) {
                                    if (n.parent !== this) return this.render(t, e, i);
                                    if (n.render(n._ts > 0 ? (x - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (x - n._start) * n._ts, e, i), r !== this._time || !this._ts && !h) {
                                        l = 0, s && (b += this._zTime = x ? -1e-8 : 1e-8);
                                        break
                                    }
                                }
                                n = s
                            }
                        }
                    if (l && !e && (this.pause(), l.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1, this._ts)) return this._start = u, Rt(this), this.render(t, e, i);
                    this._onUpdate && !e && oe(this, "onUpdate", !0), (b === y && y >= this.totalDuration() || !b && g) && (u !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((t || !v) && (b === y && this._ts > 0 || !b && this._ts < 0) && At(this, 1), e || t < 0 && !g || !b && !g || (oe(this, b === y ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < y && this.timeScale() > 0) && this._prom())))
                }
                return this
            }, i.add = function(t, e) {
                var i = this;
                if (R(e) || (e = qt(this, e)), !(t instanceof Me)) {
                    if (j(t)) return t.forEach((function(t) {
                        return i.add(t, e)
                    })), this;
                    if (I(t)) return this.addLabel(t, e);
                    if (!B(t)) return this;
                    t = je.delayedCall(0, t)
                }
                return this !== t ? Vt(this, t, e) : this
            }, i.getChildren = function(t, e, i, r) {
                void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === r && (r = -S);
                for (var n = [], s = this._first; s;) s._start >= r && (s instanceof je ? e && n.push(s) : (i && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, i)))), s = s._next;
                return n
            }, i.getById = function(t) {
                for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                    if (e[i].vars.id === t) return e[i]
            }, i.remove = function(t) {
                return I(t) ? this.removeLabel(t) : B(t) ? this.killTweensOf(t) : (Tt(this, t), t === this._recent && (this._recent = this._last), Ft(this))
            }, i.totalTime = function(e, i) {
                return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = mt(ve.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
            }, i.addLabel = function(t, e) {
                return this.labels[t] = qt(this, e), this
            }, i.removeLabel = function(t) {
                return delete this.labels[t], this
            }, i.addPause = function(t, e, i) {
                var r = je.delayedCall(0, e || it, i);
                return r.data = "isPause", this._hasPause = 1, Vt(this, r, qt(this, t))
            }, i.removePause = function(t) {
                var e = this._first;
                for (t = qt(this, t); e;) e._start === t && "isPause" === e.data && At(e), e = e._next
            }, i.killTweensOf = function(t, e, i) {
                for (var r = this.getTweensOf(t, i), n = r.length; n--;) Be !== r[n] && r[n].kill(t, e);
                return this
            }, i.getTweensOf = function(t, e) {
                for (var i, r = [], n = Zt(t), s = this._first, a = R(e); s;) s instanceof je ? gt(s._targets, n) && (a ? (!Be || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && r.push(s) : (i = s.getTweensOf(n, e)).length && r.push.apply(r, i), s = s._next;
                return r
            }, i.tweenTo = function(t, e) {
                e = e || {};
                var i = this,
                    r = qt(i, t),
                    n = e,
                    s = n.startAt,
                    a = n.onStart,
                    o = n.onStartParams,
                    h = n.immediateRender,
                    l = je.to(i, Et({
                        ease: "none",
                        lazy: !1,
                        immediateRender: !1,
                        time: r,
                        overwrite: "auto",
                        duration: e.duration || Math.abs((r - (s && "time" in s ? s.time : i._time)) / i.timeScale()) || 1e-8,
                        onStart: function() {
                            i.pause();
                            var t = e.duration || Math.abs((r - i._time) / i.timeScale());
                            l._dur !== t && Gt(l, t, 0, 1).render(l._time, !0, !0), a && a.apply(l, o || [])
                        }
                    }, e));
                return h ? l.render(0) : l
            }, i.tweenFromTo = function(t, e, i) {
                return this.tweenTo(e, Et({
                    startAt: {
                        time: qt(this, t)
                    }
                }, i))
            }, i.recent = function() {
                return this._recent
            }, i.nextLabel = function(t) {
                return void 0 === t && (t = this._time), ae(this, qt(this, t))
            }, i.previousLabel = function(t) {
                return void 0 === t && (t = this._time), ae(this, qt(this, t), 1)
            }, i.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
            }, i.shiftChildren = function(t, e, i) {
                void 0 === i && (i = 0);
                for (var r, n = this._first, s = this.labels; n;) n._start >= i && (n._start += t, n._end += t), n = n._next;
                if (e)
                    for (r in s) s[r] >= i && (s[r] += t);
                return Ft(this)
            }, i.invalidate = function() {
                var e = this._first;
                for (this._lock = 0; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, i.clear = function(t) {
                void 0 === t && (t = !0);
                for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
                return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Ft(this)
            }, i.totalDuration = function(t) {
                var e, i, r, n = 0,
                    s = this,
                    a = s._last,
                    o = S;
                if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
                if (s._dirty) {
                    for (r = s.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (i = a._start) > o && s._sort && a._ts && !s._lock ? (s._lock = 1, Vt(s, a, i - a._delay, 1)._lock = 0) : o = i, i < 0 && a._ts && (n -= i, (!r && !s._dp || r && r.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -Infinity), o = 0), a._end > n && a._ts && (n = a._end), a = e;
                    Gt(s, s === p && s._time > n ? s._time : n, 1, 1), s._dirty = 0
                }
                return s._tDur
            }, e.updateRoot = function(t) {
                if (p._ts && (bt(p, Bt(t, p)), y = ve.frame), ve.frame >= ht) {
                    ht += w.autoSleep || 120;
                    var e = p._first;
                    if ((!e || !e._ts) && w.autoSleep && ve._listeners.length < 2) {
                        for (; e && !e._ts;) e = e._next;
                        e || ve.sleep()
                    }
                }
            }, e
        }(Me);
        Et(Ie.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var Be, Re = function(t, e, i, r, n, s, a) {
                var o, h, l, c, u, p, f, d, m = new ii(this._pt, t, e, 0, 1, $e, null, n),
                    g = 0,
                    y = 0;
                for (m.b = i, m.e = r, i += "", (f = ~(r += "").indexOf("random(")) && (r = ne(r)), s && (s(d = [i, r], t, e), i = d[0], r = d[1]), h = i.match(X) || []; o = X.exec(r);) c = o[0], u = r.substring(g, o.index), l ? l = (l + 1) % 5 : "rgba(" === u.substr(-5) && (l = 1), c !== h[y++] && (p = parseFloat(h[y - 1]) || 0, m._pt = {
                    _next: m._pt,
                    p: u || 1 === y ? u : ",",
                    s: p,
                    c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - p,
                    m: l && l < 4 ? Math.round : 0
                }, g = X.lastIndex);
                return m.c = g < r.length ? r.substring(g, r.length) : "", m.fp = a, (Y.test(r) || f) && (m.e = 0), this._pt = m, m
            },
            Le = function(t, e, i, r, n, s, a, o, h) {
                B(r) && (r = r(n || 0, t, s));
                var l, c = t[e],
                    u = "get" !== i ? i : B(c) ? h ? t[e.indexOf("set") || !B(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : c,
                    p = B(c) ? h ? We : qe : He;
                if (I(r) && (~r.indexOf("random(") && (r = ne(r)), "=" === r.charAt(1) && (r = parseFloat(u) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (Yt(u) || 0))), u !== r) return isNaN(u * r) ? (!c && !(e in t) && J(e, r), Re.call(this, t, e, u, r, p, o || w.stringFilter, h)) : (l = new ii(this._pt, t, e, +u || 0, r - (u || 0), "boolean" == typeof c ? Ke : Ue, 0, p), h && (l.fp = h), a && l.modifier(a, this, t), this._pt = l)
            },
            Oe = function(t, e, i, r, n, s) {
                var a, o, h, l;
                if (at[t] && !1 !== (a = new at[t]).init(n, a.rawVars ? e[t] : function(t, e, i, r, n) {
                        if (B(t) && (t = ze(t, n, e, i, r)), !O(t) || t.style && t.nodeType || j(t) || G(t)) return I(t) ? ze(t, n, e, i, r) : t;
                        var s, a = {};
                        for (s in t) a[s] = ze(t[s], n, e, i, r);
                        return a
                    }(e[t], r, n, s, i), i, r, s) && (i._pt = o = new ii(i._pt, n, t, 0, 1, a.render, a, 0, a.priority), i !== v))
                    for (h = i._ptLookup[i._targets.indexOf(n)], l = a._props.length; l--;) h[a._props[l]] = o;
                return a
            },
            Ve = function t(e, i) {
                var r, n, s, a, o, h, l, c, f, d, m, g, y, v = e.vars,
                    b = v.ease,
                    D = v.startAt,
                    _ = v.immediateRender,
                    E = v.lazy,
                    x = v.onUpdate,
                    w = v.onUpdateParams,
                    S = v.callbackScope,
                    P = v.runBackwards,
                    T = v.yoyoEase,
                    A = v.keyframes,
                    F = v.autoRevert,
                    k = e._dur,
                    M = e._startAt,
                    I = e._targets,
                    B = e.parent,
                    R = B && "nested" === B.data ? B.parent._targets : I,
                    L = "auto" === e._overwrite && !u,
                    O = e.timeline;
                if (O && (!A || !b) && (b = "none"), e._ease = Se(b, C.ease), e._yEase = T ? we(Se(!0 === T ? b : T, C.ease)) : 0, T && e._yoyo && !e._repeat && (T = e._yEase, e._yEase = e._ease, e._ease = T), !O) {
                    if (g = (c = I[0] ? pt(I[0]).harness : 0) && v[c.prop], r = St(v, rt), M && M.render(-1, !0).kill(), D) {
                        if (At(e._startAt = je.set(I, Et({
                                data: "isStart",
                                overwrite: !1,
                                parent: B,
                                immediateRender: !0,
                                lazy: V(E),
                                startAt: null,
                                delay: 0,
                                onUpdate: x,
                                onUpdateParams: w,
                                callbackScope: S,
                                stagger: 0
                            }, D))), _)
                            if (i > 0) F || (e._startAt = 0);
                            else if (k && !(i < 0 && M)) return void(i && (e._zTime = i))
                    } else if (P && k)
                        if (M) !F && (e._startAt = 0);
                        else if (i && (_ = !1), s = Et({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: _ && V(E),
                            immediateRender: _,
                            stagger: 0,
                            parent: B
                        }, r), g && (s[c.prop] = g), At(e._startAt = je.set(I, s)), _) {
                        if (!i) return
                    } else t(e._startAt, 1e-8);
                    for (e._pt = 0, E = k && V(E) || E && !k, n = 0; n < I.length; n++) {
                        if (l = (o = I[n])._gsap || ut(I)[n]._gsap, e._ptLookup[n] = d = {}, st[l.id] && nt.length && vt(), m = R === I ? n : R.indexOf(o), c && !1 !== (f = new c).init(o, g || r, e, m, R) && (e._pt = a = new ii(e._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((function(t) {
                                d[t] = a
                            })), f.priority && (h = 1)), !c || g)
                            for (s in r) at[s] && (f = Oe(s, r, e, m, o, R)) ? f.priority && (h = 1) : d[s] = a = Le.call(e, o, s, "get", r[s], m, R, 0, v.stringFilter);
                        e._op && e._op[n] && e.kill(o, e._op[n]), L && e._pt && (Be = e, p.killTweensOf(o, d, e.globalTime(0)), y = !e.parent, Be = 0), e._pt && E && (st[l.id] = 1)
                    }
                    h && ei(e), e._onInit && e._onInit(e)
                }
                e._from = !O && !!v.runBackwards, e._onUpdate = x, e._initted = (!e._op || e._pt) && !y
            },
            ze = function(t, e, i, r, n) {
                return B(t) ? t.call(e, i, r, n) : I(t) && ~t.indexOf("random(") ? ne(t) : t
            },
            Ne = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
            Ge = (Ne + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
            je = function(t) {
                function e(e, i, r, n) {
                    var s;
                    "number" == typeof i && (r.duration = i, i = r, r = null);
                    var a, o, h, c, f, d, m, g, y = (s = t.call(this, n ? i : Pt(i), r) || this).vars,
                        v = y.duration,
                        b = y.delay,
                        D = y.immediateRender,
                        _ = y.stagger,
                        E = y.overwrite,
                        x = y.keyframes,
                        C = y.defaults,
                        S = y.scrollTrigger,
                        P = y.yoyoEase,
                        T = s.parent,
                        A = (j(e) || G(e) ? R(e[0]) : "length" in i) ? [e] : Zt(e);
                    if (s._targets = A.length ? ut(A) : tt("GSAP target " + e + " not found. https://greensock.com", !w.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = E, x || _ || N(v) || N(b)) {
                        if (i = s.vars, (a = s.timeline = new Ie({
                                data: "nested",
                                defaults: C || {}
                            })).kill(), a.parent = a._dp = l(s), a._start = 0, x) Et(a.vars.defaults, {
                            ease: "none"
                        }), x.forEach((function(t) {
                            return a.to(A, t, ">")
                        }));
                        else {
                            if (c = A.length, m = _ ? Jt(_) : it, O(_))
                                for (f in _) ~Ne.indexOf(f) && (g || (g = {}), g[f] = _[f]);
                            for (o = 0; o < c; o++) {
                                for (f in h = {}, i) Ge.indexOf(f) < 0 && (h[f] = i[f]);
                                h.stagger = 0, P && (h.yoyoEase = P), g && wt(h, g), d = A[o], h.duration = +ze(v, l(s), o, d, A), h.delay = (+ze(b, l(s), o, d, A) || 0) - s._delay, !_ && 1 === c && h.delay && (s._delay = b = h.delay, s._start += b, h.delay = 0), a.to(d, h, m(o, d, A))
                            }
                            a.duration() ? v = b = 0 : s.timeline = 0
                        }
                        v || s.duration(v = a.duration())
                    } else s.timeline = 0;
                    return !0 !== E || u || (Be = l(s), p.killTweensOf(A), Be = 0), T && Ot(T, l(s)), (D || !v && !x && s._start === mt(T._time) && V(D) && function t(e) {
                        return !e || e._ts && t(e.parent)
                    }(l(s)) && "nested" !== T.data) && (s._tTime = -1e-8, s.render(Math.max(0, -b))), S && zt(l(s), S), s
                }
                c(e, t);
                var i = e.prototype;
                return i.render = function(t, e, i) {
                    var r, n, s, a, o, h, l, c, u, p = this._time,
                        f = this._tDur,
                        d = this._dur,
                        m = t > f - 1e-8 && t >= 0 ? f : t < 1e-8 ? 0 : t;
                    if (d) {
                        if (m !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                            if (r = m, c = this.timeline, this._repeat) {
                                if (a = d + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, i);
                                if (r = mt(m % a), m === f ? (s = this._repeat, r = d) : ((s = ~~(m / a)) && s === m / a && (r = d, s--), r > d && (r = d)), (h = this._yoyo && 1 & s) && (u = this._yEase, r = d - r), o = It(this._tTime, a), r === p && !i && this._initted) return this;
                                s !== o && (c && this._yEase && Ce(c, h), !this.vars.repeatRefresh || h || this._lock || (this._lock = i = 1, this.render(mt(a * s), !0).invalidate()._lock = 0))
                            }
                            if (!this._initted) {
                                if (Nt(this, t < 0 ? t : r, i, e)) return this._tTime = 0, this;
                                if (d !== this._dur) return this.render(t, e, i)
                            }
                            for (this._tTime = m, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (u || this._ease)(r / d), this._from && (this.ratio = l = 1 - l), r && !p && !e && oe(this, "onStart"), n = this._pt; n;) n.r(l, n.d), n = n._next;
                            c && c.render(t < 0 ? t : !r && h ? -1e-8 : c._dur * l, e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), oe(this, "onUpdate")), this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && oe(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !d) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && At(this, 1), e || t < 0 && !p || !m && !p || (oe(this, m === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < f && this.timeScale() > 0) && this._prom()))
                        }
                    } else ! function(t, e, i, r) {
                        var n, s, a, o = t.ratio,
                            h = e < 0 || !e && (!t._start && function t(e) {
                                var i = e.parent;
                                return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
                            }(t) || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data) ? 0 : 1,
                            l = t._rDelay,
                            c = 0;
                        if (l && t._repeat && (c = Xt(0, t._tDur, e), s = It(c, l), a = It(t._tTime, l), t._yoyo && 1 & s && (h = 1 - h), s !== a && (o = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate())), h !== o || r || 1e-8 === t._zTime || !e && t._zTime) {
                            if (!t._initted && Nt(t, e, r, i)) return;
                            for (a = t._zTime, t._zTime = e || (i ? 1e-8 : 0), i || (i = e && !a), t.ratio = h, t._from && (h = 1 - h), t._time = 0, t._tTime = c, i || oe(t, "onStart"), n = t._pt; n;) n.r(h, n.d), n = n._next;
                            t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && oe(t, "onUpdate"), c && t._repeat && !i && t.parent && oe(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === h && (h && At(t, 1), i || (oe(t, h ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                        } else t._zTime || (t._zTime = e)
                    }(this, t, e, i);
                    return this
                }, i.targets = function() {
                    return this._targets
                }, i.invalidate = function() {
                    return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
                }, i.kill = function(t, e) {
                    if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? he(this) : this;
                    if (this.timeline) {
                        var i = this.timeline.totalDuration();
                        return this.timeline.killTweensOf(t, e, Be && !0 !== Be.vars.overwrite)._first || he(this), this.parent && i !== this.timeline.totalDuration() && Gt(this, this._dur * this.timeline._tDur / i, 0, 1), this
                    }
                    var r, n, s, a, o, h, l, c = this._targets,
                        u = t ? Zt(t) : c,
                        p = this._ptLookup,
                        f = this._pt;
                    if ((!e || "all" === e) && function(t, e) {
                            for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
                            return i < 0
                        }(c, u)) return "all" === e && (this._pt = 0), he(this);
                    for (r = this._op = this._op || [], "all" !== e && (I(e) && (o = {}, dt(e, (function(t) {
                            return o[t] = 1
                        })), e = o), e = function(t, e) {
                            var i, r, n, s, a = t[0] ? pt(t[0]).harness : 0,
                                o = a && a.aliases;
                            if (!o) return e;
                            for (r in i = wt({}, e), o)
                                if (r in i)
                                    for (n = (s = o[r].split(",")).length; n--;) i[s[n]] = i[r];
                            return i
                        }(c, e)), l = c.length; l--;)
                        if (~u.indexOf(c[l]))
                            for (o in n = p[l], "all" === e ? (r[l] = e, a = n, s = {}) : (s = r[l] = r[l] || {}, a = e), a)(h = n && n[o]) && ("kill" in h.d && !0 !== h.d.kill(o) || Tt(this, h, "_pt"), delete n[o]), "all" !== s && (s[o] = 1);
                    return this._initted && !this._pt && f && he(this), this
                }, e.to = function(t, i) {
                    return new e(t, i, arguments[2])
                }, e.from = function(t, i) {
                    return new e(t, yt(arguments, 1))
                }, e.delayedCall = function(t, i, r, n) {
                    return new e(i, 0, {
                        immediateRender: !1,
                        lazy: !1,
                        overwrite: !1,
                        delay: t,
                        onComplete: i,
                        onReverseComplete: i,
                        onCompleteParams: r,
                        onReverseCompleteParams: r,
                        callbackScope: n
                    })
                }, e.fromTo = function(t, i, r) {
                    return new e(t, yt(arguments, 2))
                }, e.set = function(t, i) {
                    return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i)
                }, e.killTweensOf = function(t, e, i) {
                    return p.killTweensOf(t, e, i)
                }, e
            }(Me);
        Et(je.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        }), dt("staggerTo,staggerFrom,staggerFromTo", (function(t) {
            je[t] = function() {
                var e = new Ie,
                    i = Ut.call(arguments, 0);
                return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
            }
        }));
        var He = function(t, e, i) {
                return t[e] = i
            },
            qe = function(t, e, i) {
                return t[e](i)
            },
            We = function(t, e, i, r) {
                return t[e](r.fp, i)
            },
            Xe = function(t, e, i) {
                return t.setAttribute(e, i)
            },
            Ye = function(t, e) {
                return B(t[e]) ? qe : L(t[e]) && t.setAttribute ? Xe : He
            },
            Ue = function(t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
            },
            Ke = function(t, e) {
                return e.set(e.t, e.p, !!(e.s + e.c * t), e)
            },
            $e = function(t, e) {
                var i = e._pt,
                    r = "";
                if (!t && e.b) r = e.b;
                else if (1 === t && e.e) r = e.e;
                else {
                    for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + r, i = i._next;
                    r += e.c
                }
                e.set(e.t, e.p, r, e)
            },
            Ze = function(t, e) {
                for (var i = e._pt; i;) i.r(t, i.d), i = i._next
            },
            Qe = function(t, e, i, r) {
                for (var n, s = this._pt; s;) n = s._next, s.p === r && s.modifier(t, e, i), s = n
            },
            Je = function(t) {
                for (var e, i, r = this._pt; r;) i = r._next, r.p === t && !r.op || r.op === t ? Tt(this, r, "_pt") : r.dep || (e = 1), r = i;
                return !e
            },
            ti = function(t, e, i, r) {
                r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
            },
            ei = function(t) {
                for (var e, i, r, n, s = t._pt; s;) {
                    for (e = s._next, i = r; i && i.pr > s.pr;) i = i._next;
                    (s._prev = i ? i._prev : n) ? s._prev._next = s: r = s, (s._next = i) ? i._prev = s : n = s, s = e
                }
                t._pt = r
            },
            ii = function() {
                function t(t, e, i, r, n, s, a, o, h) {
                    this.t = e, this.s = r, this.c = n, this.p = i, this.r = s || Ue, this.d = a || this, this.set = o || He, this.pr = h || 0, this._next = t, t && (t._prev = this)
                }
                return t.prototype.modifier = function(t, e, i) {
                    this.mSet = this.mSet || this.set, this.set = ti, this.m = t, this.mt = i, this.tween = e
                }, t
            }();
        dt(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
            return rt[t] = 1
        })), $.TweenMax = $.TweenLite = je, $.TimelineLite = $.TimelineMax = Ie, p = new Ie({
            sortChildren: !1,
            defaults: C,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }), w.stringFilter = ye;
        var ri = {
            registerPlugin: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                e.forEach((function(t) {
                    return le(t)
                }))
            },
            timeline: function(t) {
                return new Ie(t)
            },
            getTweensOf: function(t, e) {
                return p.getTweensOf(t, e)
            },
            getProperty: function(t, e, i, r) {
                I(t) && (t = Zt(t)[0]);
                var n = pt(t || {}).get,
                    s = i ? _t : Dt;
                return "native" === i && (i = ""), t ? e ? s((at[e] && at[e].get || n)(t, e, i, r)) : function(e, i, r) {
                    return s((at[e] && at[e].get || n)(t, e, i, r))
                } : t
            },
            quickSetter: function(t, e, i) {
                if ((t = Zt(t)).length > 1) {
                    var r = t.map((function(t) {
                            return ai.quickSetter(t, e, i)
                        })),
                        n = r.length;
                    return function(t) {
                        for (var e = n; e--;) r[e](t)
                    }
                }
                t = t[0] || {};
                var s = at[e],
                    a = pt(t),
                    o = a.harness && (a.harness.aliases || {})[e] || e,
                    h = s ? function(e) {
                        var r = new s;
                        v._pt = 0, r.init(t, i ? e + i : e, v, 0, [t]), r.render(1, r), v._pt && Ze(1, v)
                    } : a.set(t, o);
                return s ? h : function(e) {
                    return h(t, o, i ? e + i : e, a, 1)
                }
            },
            isTweening: function(t) {
                return p.getTweensOf(t, !0).length > 0
            },
            defaults: function(t) {
                return t && t.ease && (t.ease = Se(t.ease, C.ease)), Ct(C, t || {})
            },
            config: function(t) {
                return Ct(w, t || {})
            },
            registerEffect: function(t) {
                var e = t.name,
                    i = t.effect,
                    r = t.plugins,
                    n = t.defaults,
                    s = t.extendTimeline;
                (r || "").split(",").forEach((function(t) {
                    return t && !at[t] && !$[t] && tt(e + " effect requires " + t + " plugin.")
                })), ot[e] = function(t, e, r) {
                    return i(Zt(t), Et(e || {}, n), r)
                }, s && (Ie.prototype[e] = function(t, i, r) {
                    return this.add(ot[e](t, O(i) ? i : (r = i) && {}, this), r)
                })
            },
            registerEase: function(t, e) {
                De[t] = Se(e)
            },
            parseEase: function(t, e) {
                return arguments.length ? Se(t, e) : De
            },
            getById: function(t) {
                return p.getById(t)
            },
            exportRoot: function(t, e) {
                void 0 === t && (t = {});
                var i, r, n = new Ie(t);
                for (n.smoothChildTiming = V(t.smoothChildTiming), p.remove(n), n._dp = 0, n._time = n._tTime = p._time, i = p._first; i;) r = i._next, !e && !i._dur && i instanceof je && i.vars.onComplete === i._targets[0] || Vt(n, i, i._start - i._delay), i = r;
                return Vt(p, n, 0), n
            },
            utils: {
                wrap: function t(e, i, r) {
                    var n = i - e;
                    return j(e) ? re(e, t(0, e.length), i) : Wt(r, (function(t) {
                        return (n + (t - e) % n) % n + e
                    }))
                },
                wrapYoyo: function t(e, i, r) {
                    var n = i - e,
                        s = 2 * n;
                    return j(e) ? re(e, t(0, e.length - 1), i) : Wt(r, (function(t) {
                        return e + ((t = (s + (t - e) % s) % s || 0) > n ? s - t : t)
                    }))
                },
                distribute: Jt,
                random: ie,
                snap: ee,
                normalize: function(t, e, i) {
                    return se(t, e, 0, 1, i)
                },
                getUnit: Yt,
                clamp: function(t, e, i) {
                    return Wt(i, (function(i) {
                        return Xt(t, e, i)
                    }))
                },
                splitColor: pe,
                toArray: Zt,
                mapRange: se,
                pipe: function() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    return function(t) {
                        return e.reduce((function(t, e) {
                            return e(t)
                        }), t)
                    }
                },
                unitize: function(t, e) {
                    return function(i) {
                        return t(parseFloat(i)) + (e || Yt(i))
                    }
                },
                interpolate: function t(e, i, r, n) {
                    var s = isNaN(e + i) ? 0 : function(t) {
                        return (1 - t) * e + t * i
                    };
                    if (!s) {
                        var a, o, h, l, c, u = I(e),
                            p = {};
                        if (!0 === r && (n = 1) && (r = null), u) e = {
                            p: e
                        }, i = {
                            p: i
                        };
                        else if (j(e) && !j(i)) {
                            for (h = [], l = e.length, c = l - 2, o = 1; o < l; o++) h.push(t(e[o - 1], e[o]));
                            l--, s = function(t) {
                                t *= l;
                                var e = Math.min(c, ~~t);
                                return h[e](t - e)
                            }, r = i
                        } else n || (e = wt(j(e) ? [] : {}, e));
                        if (!h) {
                            for (a in i) Le.call(p, e, a, "get", i[a]);
                            s = function(t) {
                                return Ze(t, p) || (u ? e.p : e)
                            }
                        }
                    }
                    return Wt(r, s)
                },
                shuffle: Qt
            },
            install: Q,
            effects: ot,
            ticker: ve,
            updateRoot: Ie.updateRoot,
            plugins: at,
            globalTimeline: p,
            core: {
                PropTween: ii,
                globals: et,
                Tween: je,
                Timeline: Ie,
                Animation: Me,
                getCache: pt,
                _removeLinkedListItem: Tt,
                suppressOverwrites: function(t) {
                    return u = t
                }
            }
        };
        dt("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
            return ri[t] = je[t]
        })), ve.add(Ie.updateRoot), v = ri.to({}, {
            duration: 0
        });
        var ni = function(t, e) {
                for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
                return i
            },
            si = function(t, e) {
                return {
                    name: t,
                    rawVars: 1,
                    init: function(t, i, r) {
                        r._onInit = function(t) {
                            var r, n;
                            if (I(i) && (r = {}, dt(i, (function(t) {
                                    return r[t] = 1
                                })), i = r), e) {
                                for (n in r = {}, i) r[n] = e(i[n]);
                                i = r
                            }! function(t, e) {
                                var i, r, n, s = t._targets;
                                for (i in e)
                                    for (r = s.length; r--;)(n = t._ptLookup[r][i]) && (n = n.d) && (n._pt && (n = ni(n, i)), n && n.modifier && n.modifier(e[i], t, s[r], i))
                            }(t, i)
                        }
                    }
                }
            },
            ai = ri.registerPlugin({
                name: "attr",
                init: function(t, e, i, r, n) {
                    var s, a;
                    for (s in e)(a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], r, n, 0, 0, s)) && (a.op = s), this._props.push(s)
                }
            }, {
                name: "endArray",
                init: function(t, e) {
                    for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i])
                }
            }, si("roundProps", te), si("modifiers"), si("snap", ee)) || ri;
        je.version = Ie.version = ai.version = "3.6.0", g = 1, z() && be();
        De.Power0, De.Power1, De.Power2, De.Power3, De.Power4, De.Linear, De.Quad, De.Cubic, De.Quart, De.Quint, De.Strong, De.Elastic, De.Back, De.SteppedEase, De.Bounce, De.Sine, De.Expo, De.Circ;
        var oi, hi, li, ci, ui, pi, fi, di, mi = {},
            gi = 180 / Math.PI,
            yi = Math.PI / 180,
            vi = Math.atan2,
            bi = /([A-Z])/g,
            Di = /(?:left|right|width|margin|padding|x)/i,
            _i = /[\s,\(]\S/,
            Ei = {
                autoAlpha: "opacity,visibility",
                scale: "scaleX,scaleY",
                alpha: "opacity"
            },
            xi = function(t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
            },
            wi = function(t, e) {
                return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
            },
            Ci = function(t, e) {
                return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
            },
            Si = function(t, e) {
                var i = e.s + e.c * t;
                e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
            },
            Pi = function(t, e) {
                return e.set(e.t, e.p, t ? e.e : e.b, e)
            },
            Ti = function(t, e) {
                return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
            },
            Ai = function(t, e, i) {
                return t.style[e] = i
            },
            Fi = function(t, e, i) {
                return t.style.setProperty(e, i)
            },
            ki = function(t, e, i) {
                return t._gsap[e] = i
            },
            Mi = function(t, e, i) {
                return t._gsap.scaleX = t._gsap.scaleY = i
            },
            Ii = function(t, e, i, r, n) {
                var s = t._gsap;
                s.scaleX = s.scaleY = i, s.renderTransform(n, s)
            },
            Bi = function(t, e, i, r, n) {
                var s = t._gsap;
                s[e] = i, s.renderTransform(n, s)
            },
            Ri = "transform",
            Li = Ri + "Origin",
            Oi = function(t, e) {
                var i = hi.createElementNS ? hi.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : hi.createElement(t);
                return i.style ? i : hi.createElement(t)
            },
            Vi = function t(e, i, r) {
                var n = getComputedStyle(e);
                return n[i] || n.getPropertyValue(i.replace(bi, "-$1").toLowerCase()) || n.getPropertyValue(i) || !r && t(e, Ni(i) || i, 1) || ""
            },
            zi = "O,Moz,ms,Ms,Webkit".split(","),
            Ni = function(t, e, i) {
                var r = (e || ui).style,
                    n = 5;
                if (t in r && !i) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(zi[n] + t in r););
                return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? zi[n] : "") + t
            },
            Gi = function() {
                "undefined" != typeof window && window.document && (oi = window, hi = oi.document, li = hi.documentElement, ui = Oi("div") || {
                    style: {}
                }, pi = Oi("div"), Ri = Ni(Ri), Li = Ri + "Origin", ui.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", di = !!Ni("perspective"), ci = 1)
            },
            ji = function t(e) {
                var i, r = Oi("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    n = this.parentNode,
                    s = this.nextSibling,
                    a = this.style.cssText;
                if (li.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
                    i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
                } catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
                return n && (s ? n.insertBefore(this, s) : n.appendChild(this)), li.removeChild(r), this.style.cssText = a, i
            },
            Hi = function(t, e) {
                for (var i = e.length; i--;)
                    if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
            },
            qi = function(t) {
                var e;
                try {
                    e = t.getBBox()
                } catch (i) {
                    e = ji.call(t, !0)
                }
                return e && (e.width || e.height) || t.getBBox === ji || (e = ji.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                    x: +Hi(t, ["x", "cx", "x1"]) || 0,
                    y: +Hi(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0
                }
            },
            Wi = function(t) {
                return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !qi(t))
            },
            Xi = function(t, e) {
                if (e) {
                    var i = t.style;
                    e in mi && e !== Li && (e = Ri), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(bi, "-$1").toLowerCase())) : i.removeAttribute(e)
                }
            },
            Yi = function(t, e, i, r, n, s) {
                var a = new ii(t._pt, e, i, 0, 1, s ? Ti : Pi);
                return t._pt = a, a.b = r, a.e = n, t._props.push(i), a
            },
            Ui = {
                deg: 1,
                rad: 1,
                turn: 1
            },
            Ki = function t(e, i, r, n) {
                var s, a, o, h, l = parseFloat(r) || 0,
                    c = (r + "").trim().substr((l + "").length) || "px",
                    u = ui.style,
                    p = Di.test(i),
                    f = "svg" === e.tagName.toLowerCase(),
                    d = (f ? "client" : "offset") + (p ? "Width" : "Height"),
                    m = "px" === n,
                    g = "%" === n;
                return n === c || !l || Ui[n] || Ui[c] ? l : ("px" !== c && !m && (l = t(e, i, r, "px")), h = e.getCTM && Wi(e), !g && "%" !== c || !mi[i] && !~i.indexOf("adius") ? (u[p ? "width" : "height"] = 100 + (m ? c : n), a = ~i.indexOf("adius") || "em" === n && e.appendChild && !f ? e : e.parentNode, h && (a = (e.ownerSVGElement || {}).parentNode), a && a !== hi && a.appendChild || (a = hi.body), (o = a._gsap) && g && o.width && p && o.time === ve.time ? mt(l / o.width * 100) : ((g || "%" === c) && (u.position = Vi(e, "position")), a === e && (u.position = "static"), a.appendChild(ui), s = ui[d], a.removeChild(ui), u.position = "absolute", p && g && ((o = pt(a)).time = ve.time, o.width = a[d]), mt(m ? s * l / 100 : s && l ? 100 / s * l : 0))) : (s = h ? e.getBBox()[p ? "width" : "height"] : e[d], mt(g ? l / s * 100 : l / 100 * s)))
            },
            $i = function(t, e, i, r) {
                var n;
                return ci || Gi(), e in Ei && "transform" !== e && ~(e = Ei[e]).indexOf(",") && (e = e.split(",")[0]), mi[e] && "transform" !== e ? (n = or(t, r), n = "transformOrigin" !== e ? n[e] : hr(Vi(t, Li)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || r || ~(n + "").indexOf("calc(")) && (n = tr[e] && tr[e](t, e, i) || Vi(t, e) || ft(t, e) || ("opacity" === e ? 1 : 0)), i && !~(n + "").trim().indexOf(" ") ? Ki(t, e, n, i) + i : n
            },
            Zi = function(t, e, i, r) {
                if (!i || "none" === i) {
                    var n = Ni(e, t, 1),
                        s = n && Vi(t, n, 1);
                    s && s !== i ? (e = n, i = s) : "borderColor" === e && (i = Vi(t, "borderTopColor"))
                }
                var a, o, h, l, c, u, p, f, d, m, g, y, v = new ii(this._pt, t.style, e, 0, 1, $e),
                    b = 0,
                    D = 0;
                if (v.b = i, v.e = r, i += "", "auto" === (r += "") && (t.style[e] = r, r = Vi(t, e) || r, t.style[e] = i), ye(a = [i, r]), r = a[1], h = (i = a[0]).match(W) || [], (r.match(W) || []).length) {
                    for (; o = W.exec(r);) p = o[0], d = r.substring(b, o.index), c ? c = (c + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (c = 1), p !== (u = h[D++] || "") && (l = parseFloat(u) || 0, g = u.substr((l + "").length), (y = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)), f = parseFloat(p), m = p.substr((f + "").length), b = W.lastIndex - m.length, m || (m = m || w.units[e] || g, b === r.length && (r += m, v.e += m)), g !== m && (l = Ki(t, e, u, m) || 0), v._pt = {
                        _next: v._pt,
                        p: d || 1 === D ? d : ",",
                        s: l,
                        c: y ? y * f : f - l,
                        m: c && c < 4 || "zIndex" === e ? Math.round : 0
                    });
                    v.c = b < r.length ? r.substring(b, r.length) : ""
                } else v.r = "display" === e && "none" === r ? Ti : Pi;
                return Y.test(r) && (v.e = 0), this._pt = v, v
            },
            Qi = {
                top: "0%",
                bottom: "100%",
                left: "0%",
                right: "100%",
                center: "50%"
            },
            Ji = function(t, e) {
                if (e.tween && e.tween._time === e.tween._dur) {
                    var i, r, n, s = e.t,
                        a = s.style,
                        o = e.u,
                        h = s._gsap;
                    if ("all" === o || !0 === o) a.cssText = "", r = 1;
                    else
                        for (n = (o = o.split(",")).length; --n > -1;) i = o[n], mi[i] && (r = 1, i = "transformOrigin" === i ? Li : Ri), Xi(s, i);
                    r && (Xi(s, Ri), h && (h.svg && s.removeAttribute("transform"), or(s, 1), h.uncache = 1))
                }
            },
            tr = {
                clearProps: function(t, e, i, r, n) {
                    if ("isFromStart" !== n.data) {
                        var s = t._pt = new ii(t._pt, e, i, 0, 0, Ji);
                        return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1
                    }
                }
            },
            er = [1, 0, 0, 1, 0, 0],
            ir = {},
            rr = function(t) {
                return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
            },
            nr = function(t) {
                var e = Vi(t, Ri);
                return rr(e) ? er : e.substr(7).match(q).map(mt)
            },
            sr = function(t, e) {
                var i, r, n, s, a = t._gsap || pt(t),
                    o = t.style,
                    h = nr(t);
                return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (h = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? er : h : (h !== er || t.offsetParent || t === li || a.svg || (n = o.display, o.display = "block", (i = t.parentNode) && t.offsetParent || (s = 1, r = t.nextSibling, li.appendChild(t)), h = nr(t), n ? o.display = n : Xi(t, "display"), s && (r ? i.insertBefore(t, r) : i ? i.appendChild(t) : li.removeChild(t))), e && h.length > 6 ? [h[0], h[1], h[4], h[5], h[12], h[13]] : h)
            },
            ar = function(t, e, i, r, n, s) {
                var a, o, h, l = t._gsap,
                    c = n || sr(t, !0),
                    u = l.xOrigin || 0,
                    p = l.yOrigin || 0,
                    f = l.xOffset || 0,
                    d = l.yOffset || 0,
                    m = c[0],
                    g = c[1],
                    y = c[2],
                    v = c[3],
                    b = c[4],
                    D = c[5],
                    _ = e.split(" "),
                    E = parseFloat(_[0]) || 0,
                    x = parseFloat(_[1]) || 0;
                i ? c !== er && (o = m * v - g * y) && (h = E * (-g / o) + x * (m / o) - (m * D - g * b) / o, E = E * (v / o) + x * (-y / o) + (y * D - v * b) / o, x = h) : (E = (a = qi(t)).x + (~_[0].indexOf("%") ? E / 100 * a.width : E), x = a.y + (~(_[1] || _[0]).indexOf("%") ? x / 100 * a.height : x)), r || !1 !== r && l.smooth ? (b = E - u, D = x - p, l.xOffset = f + (b * m + D * y) - b, l.yOffset = d + (b * g + D * v) - D) : l.xOffset = l.yOffset = 0, l.xOrigin = E, l.yOrigin = x, l.smooth = !!r, l.origin = e, l.originIsAbsolute = !!i, t.style[Li] = "0px 0px", s && (Yi(s, l, "xOrigin", u, E), Yi(s, l, "yOrigin", p, x), Yi(s, l, "xOffset", f, l.xOffset), Yi(s, l, "yOffset", d, l.yOffset)), t.setAttribute("data-svg-origin", E + " " + x)
            },
            or = function(t, e) {
                var i = t._gsap || new ke(t);
                if ("x" in i && !e && !i.uncache) return i;
                var r, n, s, a, o, h, l, c, u, p, f, d, m, g, y, v, b, D, _, E, x, C, S, P, T, A, F, k, M, I, B, R, L = t.style,
                    O = i.scaleX < 0,
                    V = Vi(t, Li) || "0";
                return r = n = s = h = l = c = u = p = f = 0, a = o = 1, i.svg = !(!t.getCTM || !Wi(t)), g = sr(t, i.svg), i.svg && (P = !i.uncache && t.getAttribute("data-svg-origin"), ar(t, P || V, !!P || i.originIsAbsolute, !1 !== i.smooth, g)), d = i.xOrigin || 0, m = i.yOrigin || 0, g !== er && (D = g[0], _ = g[1], E = g[2], x = g[3], r = C = g[4], n = S = g[5], 6 === g.length ? (a = Math.sqrt(D * D + _ * _), o = Math.sqrt(x * x + E * E), h = D || _ ? vi(_, D) * gi : 0, (u = E || x ? vi(E, x) * gi + h : 0) && (o *= Math.cos(u * yi)), i.svg && (r -= d - (d * D + m * E), n -= m - (d * _ + m * x))) : (R = g[6], I = g[7], F = g[8], k = g[9], M = g[10], B = g[11], r = g[12], n = g[13], s = g[14], l = (y = vi(R, M)) * gi, y && (P = C * (v = Math.cos(-y)) + F * (b = Math.sin(-y)), T = S * v + k * b, A = R * v + M * b, F = C * -b + F * v, k = S * -b + k * v, M = R * -b + M * v, B = I * -b + B * v, C = P, S = T, R = A), c = (y = vi(-E, M)) * gi, y && (v = Math.cos(-y), B = x * (b = Math.sin(-y)) + B * v, D = P = D * v - F * b, _ = T = _ * v - k * b, E = A = E * v - M * b), h = (y = vi(_, D)) * gi, y && (P = D * (v = Math.cos(y)) + _ * (b = Math.sin(y)), T = C * v + S * b, _ = _ * v - D * b, S = S * v - C * b, D = P, C = T), l && Math.abs(l) + Math.abs(h) > 359.9 && (l = h = 0, c = 180 - c), a = mt(Math.sqrt(D * D + _ * _ + E * E)), o = mt(Math.sqrt(S * S + R * R)), y = vi(C, S), u = Math.abs(y) > 2e-4 ? y * gi : 0, f = B ? 1 / (B < 0 ? -B : B) : 0), i.svg && (P = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !rr(Vi(t, Ri)), P && t.setAttribute("transform", P))), Math.abs(u) > 90 && Math.abs(u) < 270 && (O ? (a *= -1, u += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (o *= -1, u += u <= 0 ? 180 : -180)), i.x = r - ((i.xPercent = r && (i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + "px", i.y = n - ((i.yPercent = n && (i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + "px", i.z = s + "px", i.scaleX = mt(a), i.scaleY = mt(o), i.rotation = mt(h) + "deg", i.rotationX = mt(l) + "deg", i.rotationY = mt(c) + "deg", i.skewX = u + "deg", i.skewY = p + "deg", i.transformPerspective = f + "px", (i.zOrigin = parseFloat(V.split(" ")[2]) || 0) && (L[Li] = hr(V)), i.xOffset = i.yOffset = 0, i.force3D = w.force3D, i.renderTransform = i.svg ? pr : di ? ur : cr, i.uncache = 0, i
            },
            hr = function(t) {
                return (t = t.split(" "))[0] + " " + t[1]
            },
            lr = function(t, e, i) {
                var r = Yt(e);
                return mt(parseFloat(e) + parseFloat(Ki(t, "x", i + "px", r))) + r
            },
            cr = function(t, e) {
                e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ur(t, e)
            },
            ur = function(t, e) {
                var i = e || this,
                    r = i.xPercent,
                    n = i.yPercent,
                    s = i.x,
                    a = i.y,
                    o = i.z,
                    h = i.rotation,
                    l = i.rotationY,
                    c = i.rotationX,
                    u = i.skewX,
                    p = i.skewY,
                    f = i.scaleX,
                    d = i.scaleY,
                    m = i.transformPerspective,
                    g = i.force3D,
                    y = i.target,
                    v = i.zOrigin,
                    b = "",
                    D = "auto" === g && t && 1 !== t || !0 === g;
                if (v && ("0deg" !== c || "0deg" !== l)) {
                    var _, E = parseFloat(l) * yi,
                        x = Math.sin(E),
                        w = Math.cos(E);
                    E = parseFloat(c) * yi, _ = Math.cos(E), s = lr(y, s, x * _ * -v), a = lr(y, a, -Math.sin(E) * -v), o = lr(y, o, w * _ * -v + v)
                }
                "0px" !== m && (b += "perspective(" + m + ") "), (r || n) && (b += "translate(" + r + "%, " + n + "%) "), (D || "0px" !== s || "0px" !== a || "0px" !== o) && (b += "0px" !== o || D ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + ") "), "0deg" !== h && (b += "rotate(" + h + ") "), "0deg" !== l && (b += "rotateY(" + l + ") "), "0deg" !== c && (b += "rotateX(" + c + ") "), "0deg" === u && "0deg" === p || (b += "skew(" + u + ", " + p + ") "), 1 === f && 1 === d || (b += "scale(" + f + ", " + d + ") "), y.style[Ri] = b || "translate(0, 0)"
            },
            pr = function(t, e) {
                var i, r, n, s, a, o = e || this,
                    h = o.xPercent,
                    l = o.yPercent,
                    c = o.x,
                    u = o.y,
                    p = o.rotation,
                    f = o.skewX,
                    d = o.skewY,
                    m = o.scaleX,
                    g = o.scaleY,
                    y = o.target,
                    v = o.xOrigin,
                    b = o.yOrigin,
                    D = o.xOffset,
                    _ = o.yOffset,
                    E = o.forceCSS,
                    x = parseFloat(c),
                    w = parseFloat(u);
                p = parseFloat(p), f = parseFloat(f), (d = parseFloat(d)) && (f += d = parseFloat(d), p += d), p || f ? (p *= yi, f *= yi, i = Math.cos(p) * m, r = Math.sin(p) * m, n = Math.sin(p - f) * -g, s = Math.cos(p - f) * g, f && (d *= yi, a = Math.tan(f - d), n *= a = Math.sqrt(1 + a * a), s *= a, d && (a = Math.tan(d), i *= a = Math.sqrt(1 + a * a), r *= a)), i = mt(i), r = mt(r), n = mt(n), s = mt(s)) : (i = m, s = g, r = n = 0), (x && !~(c + "").indexOf("px") || w && !~(u + "").indexOf("px")) && (x = Ki(y, "x", c, "px"), w = Ki(y, "y", u, "px")), (v || b || D || _) && (x = mt(x + v - (v * i + b * n) + D), w = mt(w + b - (v * r + b * s) + _)), (h || l) && (a = y.getBBox(), x = mt(x + h / 100 * a.width), w = mt(w + l / 100 * a.height)), a = "matrix(" + i + "," + r + "," + n + "," + s + "," + x + "," + w + ")", y.setAttribute("transform", a), E && (y.style[Ri] = a)
            },
            fr = function(t, e, i, r, n, s) {
                var a, o, h = I(n),
                    l = parseFloat(n) * (h && ~n.indexOf("rad") ? gi : 1),
                    c = s ? l * s : l - r,
                    u = r + c + "deg";
                return h && ("short" === (a = n.split("_")[1]) && (c %= 360) !== c % 180 && (c += c < 0 ? 360 : -360), "cw" === a && c < 0 ? c = (c + 36e9) % 360 - 360 * ~~(c / 360) : "ccw" === a && c > 0 && (c = (c - 36e9) % 360 - 360 * ~~(c / 360))), t._pt = o = new ii(t._pt, e, i, r, c, wi), o.e = u, o.u = "deg", t._props.push(i), o
            },
            dr = function(t, e, i) {
                var r, n, s, a, o, h, l, c = pi.style,
                    u = i._gsap;
                for (n in c.cssText = getComputedStyle(i).cssText + ";position:absolute;display:block;", c[Ri] = e, hi.body.appendChild(pi), r = or(pi, 1), mi)(s = u[n]) !== (a = r[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Yt(s) !== (l = Yt(a)) ? Ki(i, n, s, l) : parseFloat(s), h = parseFloat(a), t._pt = new ii(t._pt, u, n, o, h - o, xi), t._pt.u = l || 0, t._props.push(n));
                hi.body.removeChild(pi)
            };
        dt("padding,margin,Width,Radius", (function(t, e) {
            var i = "Top",
                r = "Right",
                n = "Bottom",
                s = "Left",
                a = (e < 3 ? [i, r, n, s] : [i + s, i + r, n + r, n + s]).map((function(i) {
                    return e < 2 ? t + i : "border" + i + t
                }));
            tr[e > 1 ? "border" + t : t] = function(t, e, i, r, n) {
                var s, o;
                if (arguments.length < 4) return s = a.map((function(e) {
                    return $i(t, e, i)
                })), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
                s = (r + "").split(" "), o = {}, a.forEach((function(t, e) {
                    return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
                })), t.init(e, o, n)
            }
        }));
        var mr, gr, yr = {
            name: "css",
            register: Gi,
            targetTest: function(t) {
                return t.style && t.nodeType
            },
            init: function(t, e, i, r, n) {
                var s, a, o, h, l, c, u, p, f, d, m, g, y, v, b, D, _, E, x, C = this._props,
                    S = t.style,
                    P = i.vars.startAt;
                for (u in ci || Gi(), e)
                    if ("autoRound" !== u && (a = e[u], !at[u] || !Oe(u, e, i, r, t, n)))
                        if (l = typeof a, c = tr[u], "function" === l && (l = typeof(a = a.call(i, r, t, n))), "string" === l && ~a.indexOf("random(") && (a = ne(a)), c) c(this, t, u, a, i) && (b = 1);
                        else if ("--" === u.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(u) + "").trim(), a += "", p = Yt(s), (f = Yt(a)) ? p !== f && (s = Ki(t, u, s, f) + f) : p && (a += p), this.add(S, "setProperty", s, a, r, n, 0, 0, u);
                else if ("undefined" !== l) {
                    if (P && u in P ? (s = "function" == typeof P[u] ? P[u].call(i, r, t, n) : P[u], u in w.units && !Yt(s) && (s += w.units[u]), "=" === (s + "").charAt(1) && (s = $i(t, u))) : s = $i(t, u), h = parseFloat(s), (d = "string" === l && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)), o = parseFloat(a), u in Ei && ("autoAlpha" === u && (1 === h && "hidden" === $i(t, "visibility") && o && (h = 0), Yi(this, S, "visibility", h ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== u && "transform" !== u && ~(u = Ei[u]).indexOf(",") && (u = u.split(",")[0])), m = u in mi)
                        if (g || ((y = t._gsap).renderTransform && !e.parseTransform || or(t, e.parseTransform), v = !1 !== e.smoothOrigin && y.smooth, (g = this._pt = new ii(this._pt, S, Ri, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === u) this._pt = new ii(this._pt, y, "scaleY", y.scaleY, d ? d * o : o - y.scaleY), C.push("scaleY", u), u += "X";
                        else {
                            if ("transformOrigin" === u) {
                                _ = void 0, E = void 0, x = void 0, _ = (D = a).split(" "), E = _[0], x = _[1] || "50%", "top" !== E && "bottom" !== E && "left" !== x && "right" !== x || (D = E, E = x, x = D), _[0] = Qi[E] || E, _[1] = Qi[x] || x, a = _.join(" "), y.svg ? ar(t, a, 0, v, 0, this) : ((f = parseFloat(a.split(" ")[2]) || 0) !== y.zOrigin && Yi(this, y, "zOrigin", y.zOrigin, f), Yi(this, S, u, hr(s), hr(a)));
                                continue
                            }
                            if ("svgOrigin" === u) {
                                ar(t, a, 1, v, 0, this);
                                continue
                            }
                            if (u in ir) {
                                fr(this, y, u, h, a, d);
                                continue
                            }
                            if ("smoothOrigin" === u) {
                                Yi(this, y, "smooth", y.smooth, a);
                                continue
                            }
                            if ("force3D" === u) {
                                y[u] = a;
                                continue
                            }
                            if ("transform" === u) {
                                dr(this, a, t);
                                continue
                            }
                        }
                    else u in S || (u = Ni(u) || u);
                    if (m || (o || 0 === o) && (h || 0 === h) && !_i.test(a) && u in S) o || (o = 0), (p = (s + "").substr((h + "").length)) !== (f = Yt(a) || (u in w.units ? w.units[u] : p)) && (h = Ki(t, u, s, f)), this._pt = new ii(this._pt, m ? y : S, u, h, d ? d * o : o - h, m || "px" !== f && "zIndex" !== u || !1 === e.autoRound ? xi : Si), this._pt.u = f || 0, p !== f && (this._pt.b = s, this._pt.r = Ci);
                    else if (u in S) Zi.call(this, t, u, s, a);
                    else {
                        if (!(u in t)) {
                            J(u, a);
                            continue
                        }
                        this.add(t, u, t[u], a, r, n)
                    }
                    C.push(u)
                }
                b && ei(this)
            },
            get: $i,
            aliases: Ei,
            getSetter: function(t, e, i) {
                var r = Ei[e];
                return r && r.indexOf(",") < 0 && (e = r), e in mi && e !== Li && (t._gsap.x || $i(t, "x")) ? i && fi === i ? "scale" === e ? Mi : ki : (fi = i || {}) && ("scale" === e ? Ii : Bi) : t.style && !L(t.style[e]) ? Ai : ~e.indexOf("-") ? Fi : Ye(t, e)
            },
            core: {
                _removeProperty: Xi,
                _getMatrix: sr
            }
        };
        ai.utils.checkPrefix = Ni, gr = dt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (mr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
            mi[t] = 1
        })), dt(mr, (function(t) {
            w.units[t] = "deg", ir[t] = 1
        })), Ei[gr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + mr, dt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
            var e = t.split(":");
            Ei[e[1]] = gr[e[0]]
        })), dt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
            w.units[t] = "px"
        })), ai.registerPlugin(yr);
        var vr, br, Dr, _r, Er, xr, wr, Cr, Sr, Pr, Tr, Ar, Fr, kr, Mr, Ir, Br, Rr, Lr, Or, Vr, zr, Nr, Gr, jr, Hr, qr, Wr = ai.registerPlugin(yr) || ai,
            Xr = (Wr.core.Tween, 1),
            Yr = [],
            Ur = [],
            Kr = Date.now,
            $r = Kr(),
            Zr = 0,
            Qr = 1,
            Jr = function(t) {
                return t
            },
            tn = function() {
                return "undefined" != typeof window
            },
            en = function() {
                return vr || tn() && (vr = window.gsap) && vr.registerPlugin && vr
            },
            rn = function(t) {
                return !!~wr.indexOf(t)
            },
            nn = function(t, e) {
                return ~Yr.indexOf(t) && Yr[Yr.indexOf(t) + 1][e]
            },
            sn = function(t, e) {
                var i = e.s,
                    r = e.sc,
                    n = Ur.indexOf(t),
                    s = r === bn.sc ? 1 : 2;
                return !~n && (n = Ur.push(t) - 1), Ur[n + s] || (Ur[n + s] = nn(t, i) || (rn(t) ? r : function(e) {
                    return arguments.length ? t[i] = e : t[i]
                }))
            },
            an = function(t) {
                return nn(t, "getBoundingClientRect") || (rn(t) ? function() {
                    return ns.width = Dr.innerWidth, ns.height = Dr.innerHeight, ns
                } : function() {
                    return En(t)
                })
            },
            on = function(t, e) {
                var i = e.s,
                    r = e.d2,
                    n = e.d,
                    s = e.a;
                return (i = "scroll" + r) && (s = nn(t, i)) ? s() - an(t)()[n] : rn(t) ? Math.max(Er[i], xr[i]) - (Dr["inner" + r] || Er["client" + r] || xr["client" + r]) : t[i] - t["offset" + r]
            },
            hn = function(t, e) {
                for (var i = 0; i < Vr.length; i += 3)(!e || ~e.indexOf(Vr[i + 1])) && t(Vr[i], Vr[i + 1], Vr[i + 2])
            },
            ln = function(t) {
                return "string" == typeof t
            },
            cn = function(t) {
                return "function" == typeof t
            },
            un = function(t) {
                return "number" == typeof t
            },
            pn = function(t) {
                return "object" == typeof t
            },
            fn = function(t) {
                return cn(t) && t()
            },
            dn = function(t, e) {
                return function() {
                    var i = fn(t),
                        r = fn(e);
                    return function() {
                        fn(i), fn(r)
                    }
                }
            },
            mn = Math.abs,
            gn = "padding",
            yn = "px",
            vn = {
                s: "scrollLeft",
                p: "left",
                p2: "Left",
                os: "right",
                os2: "Right",
                d: "width",
                d2: "Width",
                a: "x",
                sc: function(t) {
                    return arguments.length ? Dr.scrollTo(t, bn.sc()) : Dr.pageXOffset || _r.scrollLeft || Er.scrollLeft || xr.scrollLeft || 0
                }
            },
            bn = {
                s: "scrollTop",
                p: "top",
                p2: "Top",
                os: "bottom",
                os2: "Bottom",
                d: "height",
                d2: "Height",
                a: "y",
                op: vn,
                sc: function(t) {
                    return arguments.length ? Dr.scrollTo(vn.sc(), t) : Dr.pageYOffset || _r.scrollTop || Er.scrollTop || xr.scrollTop || 0
                }
            },
            Dn = function(t) {
                return Dr.getComputedStyle(t)
            },
            _n = function(t, e) {
                for (var i in e) i in t || (t[i] = e[i]);
                return t
            },
            En = function(t, e) {
                var i = e && "matrix(1, 0, 0, 1, 0, 0)" !== Dn(t)[Br] && vr.to(t, {
                        x: 0,
                        y: 0,
                        xPercent: 0,
                        yPercent: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0
                    }).progress(1),
                    r = t.getBoundingClientRect();
                return i && i.progress(0).kill(), r
            },
            xn = function(t, e) {
                var i = e.d2;
                return t["offset" + i] || t["client" + i] || 0
            },
            wn = function(t) {
                var e, i = [],
                    r = t.labels,
                    n = t.duration();
                for (e in r) i.push(r[e] / n);
                return i
            },
            Cn = function(t, e, i, r) {
                return i.split(",").forEach((function(i) {
                    return t(e, i, r)
                }))
            },
            Sn = function(t, e, i) {
                return t.addEventListener(e, i, {
                    passive: !0
                })
            },
            Pn = function(t, e, i) {
                return t.removeEventListener(e, i)
            },
            Tn = {
                startColor: "green",
                endColor: "red",
                indent: 0,
                fontSize: "16px",
                fontWeight: "normal"
            },
            An = {
                toggleActions: "play",
                anticipatePin: 0
            },
            Fn = {
                top: 0,
                left: 0,
                center: .5,
                bottom: 1,
                right: 1
            },
            kn = function(t, e) {
                if (ln(t)) {
                    var i = t.indexOf("="),
                        r = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
                    ~i && (t.indexOf("%") > i && (r *= e / 100), t = t.substr(0, i - 1)), t = r + (t in Fn ? Fn[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
                }
                return t
            },
            Mn = function(t, e, i, r, n, s, a) {
                var o = n.startColor,
                    h = n.endColor,
                    l = n.fontSize,
                    c = n.indent,
                    u = n.fontWeight,
                    p = _r.createElement("div"),
                    f = rn(i) || "fixed" === nn(i, "pinType"),
                    d = -1 !== t.indexOf("scroller"),
                    m = f ? xr : i,
                    g = -1 !== t.indexOf("start"),
                    y = g ? o : h,
                    v = "border-color:" + y + ";font-size:" + l + ";color:" + y + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                return v += "position:" + (d && f ? "fixed;" : "absolute;"), (d || !f) && (v += (r === bn ? "right" : "bottom") + ":" + (s + parseFloat(c)) + "px;"), a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = g, p.setAttribute("class", "gsap-marker-" + t), p.style.cssText = v, p.innerText = e || 0 === e ? t + "-" + e : t, m.children[0] ? m.insertBefore(p, m.children[0]) : m.appendChild(p), p._offset = p["offset" + r.op.d2], In(p, 0, r, g), p
            },
            In = function(t, e, i, r) {
                var n = {
                        display: "block"
                    },
                    s = i[r ? "os2" : "p2"],
                    a = i[r ? "p2" : "os2"];
                t._isFlipped = r, n[i.a + "Percent"] = r ? -100 : 0, n[i.a] = r ? "1px" : 0, n["border" + s + "Width"] = 1, n["border" + a + "Width"] = 0, n[i.p] = e + "px", vr.set(t, n)
            },
            Bn = [],
            Rn = {},
            Ln = function() {
                return Pr || (Pr = Sr(Zn))
            },
            On = function() {
                Pr || (Pr = Sr(Zn), Zr || qn("scrollStart"), Zr = Kr())
            },
            Vn = function() {
                return !Mr && !Gr && !_r.fullscreenElement && Cr.restart(!0)
            },
            zn = {},
            Nn = [],
            Gn = [],
            jn = function(t) {
                var e, i = vr.ticker.frame,
                    r = [],
                    n = 0;
                if (qr !== i || Xr) {
                    for (Yn(); n < Gn.length; n += 4)(e = Dr.matchMedia(Gn[n]).matches) !== Gn[n + 3] && (Gn[n + 3] = e, e ? r.push(n) : Yn(1, Gn[n]) || cn(Gn[n + 2]) && Gn[n + 2]());
                    for (Xn(), n = 0; n < r.length; n++) e = r[n], Hr = Gn[e], Gn[e + 2] = Gn[e + 1](t);
                    Hr = 0, br && Un(0, 1), qr = i, qn("matchMedia")
                }
            },
            Hn = function t() {
                return Pn(ls, "scrollEnd", t) || Un(!0)
            },
            qn = function(t) {
                return zn[t] && zn[t].map((function(t) {
                    return t()
                })) || Nn
            },
            Wn = [],
            Xn = function(t) {
                for (var e = 0; e < Wn.length; e += 4) t && Wn[e + 3] !== t || (Wn[e].style.cssText = Wn[e + 1], Wn[e + 2].uncache = 1)
            },
            Yn = function(t, e) {
                var i;
                for (Rr = 0; Rr < Bn.length; Rr++) i = Bn[Rr], e && i.media !== e || (t ? i.kill(1) : (i.scroll.rec || (i.scroll.rec = i.scroll()), i.revert()));
                Xn(e), e || qn("revert")
            },
            Un = function(t, e) {
                if (!Zr || t) {
                    var i = qn("refreshInit");
                    for (zr && ls.sort(), e || Yn(), Rr = 0; Rr < Bn.length; Rr++) Bn[Rr].refresh();
                    for (i.forEach((function(t) {
                            return t && t.render && t.render(-1)
                        })), Rr = Bn.length; Rr--;) Bn[Rr].scroll.rec = 0;
                    Cr.pause(), qn("refresh")
                } else Sn(ls, "scrollEnd", Hn)
            },
            Kn = 0,
            $n = 1,
            Zn = function() {
                var t = Bn.length,
                    e = Kr(),
                    i = e - $r >= 50,
                    r = t && Bn[0].scroll();
                if ($n = Kn > r ? -1 : 1, Kn = r, i && (Zr && !Ir && e - Zr > 200 && (Zr = 0, qn("scrollEnd")), Fr = $r, $r = e), $n < 0) {
                    for (Rr = t; Rr--;) Bn[Rr] && Bn[Rr].update(0, i);
                    $n = 1
                } else
                    for (Rr = 0; Rr < t; Rr++) Bn[Rr] && Bn[Rr].update(0, i);
                Pr = 0
            },
            Qn = ["left", "top", "bottom", "right", "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex"],
            Jn = Qn.concat(["width", "height", "boxSizing", "maxWidth", "maxHeight", "position", "margin", gn, gn + "Top", gn + "Right", gn + "Bottom", gn + "Left"]),
            ts = function(t, e, i, r) {
                if (t.parentNode !== e) {
                    for (var n, s = Qn.length, a = e.style, o = t.style; s--;) a[n = Qn[s]] = i[n];
                    a.position = "absolute" === i.position ? "absolute" : "relative", "inline" === i.display && (a.display = "inline-block"), o.bottom = o.right = "auto", a.overflow = "visible", a.boxSizing = "border-box", a.width = xn(t, vn) + yn, a.height = xn(t, bn) + yn, a[gn] = o.margin = o.top = o.left = "0", is(r), o.width = o.maxWidth = i.width, o.height = o.maxHeight = i.height, o[gn] = i[gn], t.parentNode.insertBefore(e, t), e.appendChild(t)
                }
            },
            es = /([A-Z])/g,
            is = function(t) {
                if (t) {
                    var e, i, r = t.t.style,
                        n = t.length,
                        s = 0;
                    for ((t.t._gsap || vr.core.getCache(t.t)).uncache = 1; s < n; s += 2) i = t[s + 1], e = t[s], i ? r[e] = i : r[e] && r.removeProperty(e.replace(es, "-$1").toLowerCase())
                }
            },
            rs = function(t) {
                for (var e = Jn.length, i = t.style, r = [], n = 0; n < e; n++) r.push(Jn[n], i[Jn[n]]);
                return r.t = t, r
            },
            ns = {
                left: 0,
                top: 0
            },
            ss = function(t, e, i, r, n, s, a, o, h, l, c, u) {
                if (cn(t) && (t = t(o)), ln(t) && "max" === t.substr(0, 3) && (t = u + ("=" === t.charAt(4) ? kn("0" + t.substr(3), i) : 0)), un(t)) a && In(a, i, r, !0);
                else {
                    cn(e) && (e = e(o));
                    var p, f, d, m = Tr(e)[0] || xr,
                        g = En(m) || {},
                        y = t.split(" ");
                    g && (g.left || g.top) || "none" !== Dn(m).display || (d = m.style.display, m.style.display = "block", g = En(m), d ? m.style.display = d : m.style.removeProperty("display")), p = kn(y[0], g[r.d]), f = kn(y[1] || "0", i), t = g[r.p] - h[r.p] - l + p + n - f, a && In(a, f, r, i - f < 20 || a._isStart && f > 20), i -= i - f
                }
                if (s) {
                    var v = t + i,
                        b = s._isStart;
                    u = "scroll" + r.d2, In(s, v, r, b && v > 20 || !b && (c ? Math.max(xr[u], Er[u]) : s.parentNode[u]) <= v + 1), c && (h = En(a), c && (s.style[r.op.p] = h[r.op.p] - r.op.m - s._offset + yn))
                }
                return Math.round(t)
            },
            as = /(?:webkit|moz|length|cssText|inset)/i,
            os = function(t, e, i, r) {
                if (t.parentNode !== e) {
                    var n, s, a = t.style;
                    if (e === xr) {
                        for (n in t._stOrig = a.cssText, s = Dn(t)) + n || as.test(n) || !s[n] || "string" != typeof a[n] || "0" === n || (a[n] = s[n]);
                        a.top = i, a.left = r
                    } else a.cssText = t._stOrig;
                    vr.core.getCache(t).uncache = 1, e.appendChild(t)
                }
            },
            hs = function(t, e) {
                var i, r, n = sn(t, e),
                    s = "_scroll" + e.p2,
                    a = function e(a, o, h, l, c) {
                        var u = e.tween,
                            p = o.onComplete,
                            f = {};
                        return u && u.kill(), i = Math.round(h), o[s] = a, o.modifiers = f, f[s] = function(t) {
                            return (t = Math.round(n())) !== i && t !== r && Math.abs(t - i) > 2 ? (u.kill(), e.tween = 0) : t = h + l * u.ratio + c * u.ratio * u.ratio, r = i, i = Math.round(t)
                        }, o.onComplete = function() {
                            e.tween = 0, p && p.call(u)
                        }, u = e.tween = vr.to(t, o)
                    };
                return t[s] = n, t.addEventListener("mousewheel", (function() {
                    return a.tween && a.tween.kill() && (a.tween = 0)
                })), a
            };
        vn.op = bn;
        var ls = function() {
            function t(e, i) {
                br || t.register(vr) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, i)
            }
            return t.prototype.init = function(e, i) {
                if (this.progress = this.start = 0, this.vars && this.kill(1), Qr) {
                    var r, n, s, a, o, h, l, c, u, p, f, d, m, g, y, v, b, D, _, E, x, w, C, S, P, T, A, F, k, M, I, B, R, L, O, V, z, N, G, j = (e = _n(ln(e) || un(e) || e.nodeType ? {
                            trigger: e
                        } : e, An)).horizontal ? vn : bn,
                        H = e,
                        q = H.onUpdate,
                        W = H.toggleClass,
                        X = H.id,
                        Y = H.onToggle,
                        U = H.onRefresh,
                        K = H.scrub,
                        $ = H.trigger,
                        Z = H.pin,
                        Q = H.pinSpacing,
                        J = H.invalidateOnRefresh,
                        tt = H.anticipatePin,
                        et = H.onScrubComplete,
                        it = H.onSnapComplete,
                        rt = H.once,
                        nt = H.snap,
                        st = H.pinReparent,
                        at = !K && 0 !== K,
                        ot = Tr(e.scroller || Dr)[0],
                        ht = vr.core.getCache(ot),
                        lt = rn(ot),
                        ct = "pinType" in e ? "fixed" === e.pinType : lt || "fixed" === nn(ot, "pinType"),
                        ut = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                        pt = at && e.toggleActions.split(" "),
                        ft = "markers" in e ? e.markers : An.markers,
                        dt = lt ? 0 : parseFloat(Dn(ot)["border" + j.p2 + "Width"]) || 0,
                        mt = this,
                        gt = e.onRefreshInit && function() {
                            return e.onRefreshInit(mt)
                        },
                        yt = function(t, e, i) {
                            var r = i.d,
                                n = i.d2,
                                s = i.a;
                            return (s = nn(t, "getBoundingClientRect")) ? function() {
                                return s()[r]
                            } : function() {
                                return (e ? Dr["inner" + n] : t["client" + n]) || 0
                            }
                        }(ot, lt, j),
                        vt = function(t, e) {
                            return !e || ~Yr.indexOf(t) ? an(t) : function() {
                                return ns
                            }
                        }(ot, lt);
                    mt.media = Hr, tt *= 45, Bn.push(mt), mt.scroller = ot, mt.scroll = sn(ot, j), o = mt.scroll(), mt.vars = e, i = i || e.animation, "refreshPriority" in e && (zr = 1), ht.tweenScroll = ht.tweenScroll || {
                        top: hs(ot, bn),
                        left: hs(ot, vn)
                    }, mt.tweenTo = r = ht.tweenScroll[j.p], i && (i.vars.lazy = !1, i._initted || !1 !== i.vars.immediateRender && !1 !== e.immediateRender && i.render(0, !0, !0), mt.animation = i.pause(), i.scrollTrigger = mt, (B = un(K) && K) && (I = vr.to(i, {
                        ease: "power3",
                        duration: B,
                        onComplete: function() {
                            return et && et(mt)
                        }
                    })), k = 0, X || (X = i.vars.id)), nt && (pn(nt) || (nt = {
                        snapTo: nt
                    }), "scrollBehavior" in xr.style && vr.set(lt ? [xr, Er] : ot, {
                        scrollBehavior: "auto"
                    }), s = cn(nt.snapTo) ? nt.snapTo : "labels" === nt.snapTo ? function(t) {
                        return function(e) {
                            return vr.utils.snap(wn(t), e)
                        }
                    }(i) : "labelsDirectional" === nt.snapTo ? (N = i, function(t, e) {
                        var i, r = wn(N);
                        if (r.sort((function(t, e) {
                                return t - e
                            })), e.direction > 0) {
                            for (i = 0; i < r.length; i++)
                                if (r[i] >= t) return r[i];
                            return r.pop()
                        }
                        for (i = r.length; i--;)
                            if (r[i] <= t) return r[i];
                        return r[0]
                    }) : vr.utils.snap(nt.snapTo), R = nt.duration || {
                        min: .1,
                        max: 2
                    }, R = pn(R) ? Ar(R.min, R.max) : Ar(R, R), L = vr.delayedCall(nt.delay || B / 2 || .1, (function() {
                        if (Math.abs(mt.getVelocity()) < 10 && !Ir) {
                            var t = i && !at ? i.totalProgress() : mt.progress,
                                e = (t - M) / (Kr() - Fr) * 1e3 || 0,
                                n = mn(e / 2) * e / .185,
                                a = t + n,
                                o = Ar(0, 1, s(a, mt)),
                                h = mt.scroll(),
                                u = Math.round(l + o * g),
                                p = r.tween;
                            if (h <= c && h >= l && u !== h) {
                                if (p && !p._initted && p.data <= Math.abs(u - h)) return;
                                r(u, {
                                    duration: R(mn(.185 * Math.max(mn(a - t), mn(o - t)) / e / .05 || 0)),
                                    ease: nt.ease || "power3",
                                    data: Math.abs(u - h),
                                    onComplete: function() {
                                        k = M = i && !at ? i.totalProgress() : mt.progress, it && it(mt)
                                    }
                                }, h, n * g, u - h - n * g)
                            }
                        } else mt.isActive && L.restart(!0)
                    })).pause()), X && (Rn[X] = mt), $ = mt.trigger = Tr($ || Z)[0], Z = !0 === Z ? $ : Tr(Z)[0], ln(W) && (W = {
                        targets: $,
                        className: W
                    }), Z && (!1 === Q || "margin" === Q || (Q = !(!Q && "flex" === Dn(Z.parentNode).display) && gn), mt.pin = Z, !1 !== e.force3D && vr.set(Z, {
                        force3D: !0
                    }), (n = vr.core.getCache(Z)).spacer ? y = n.pinState : (n.spacer = D = _r.createElement("div"), D.setAttribute("class", "pin-spacer" + (X ? " pin-spacer-" + X : "")), n.pinState = y = rs(Z)), mt.spacer = D = n.spacer, F = Dn(Z), S = F[Q + j.os2], E = vr.getProperty(Z), x = vr.quickSetter(Z, j.a, yn), ts(Z, D, F), b = rs(Z)), ft && (m = pn(ft) ? _n(ft, Tn) : Tn, f = Mn("scroller-start", X, ot, j, m, 0), d = Mn("scroller-end", X, ot, j, m, 0, f), _ = f["offset" + j.op.d2], u = Mn("start", X, ot, j, m, _), p = Mn("end", X, ot, j, m, _), ct || ((G = lt ? xr : ot).style.position = "absolute" === Dn(G).position ? "absolute" : "relative", vr.set([f, d], {
                        force3D: !0
                    }), T = vr.quickSetter(f, j.a, yn), A = vr.quickSetter(d, j.a, yn))), mt.revert = function(t) {
                        var e = !1 !== t || !mt.enabled,
                            r = Mr;
                        e !== a && (e && (V = Math.max(mt.scroll(), mt.scroll.rec || 0), O = mt.progress, z = i && i.progress()), u && [u, p, f, d].forEach((function(t) {
                            return t.style.display = e ? "none" : "block"
                        })), e && (Mr = 1), mt.update(e), Mr = r, Z && (e ? function(t, e, i) {
                            if (is(i), t.parentNode === e) {
                                var r = e.parentNode;
                                r && (r.insertBefore(t, e), r.removeChild(e))
                            }
                        }(Z, D, y) : (!st || !mt.isActive) && ts(Z, D, Dn(Z), P)), a = e)
                    }, mt.refresh = function(r) {
                        if (!Mr && mt.enabled)
                            if (Z && r && Zr) Sn(t, "scrollEnd", Hn);
                            else {
                                Mr = 1, I && I.pause(), J && i && i.progress(0).invalidate(), a || mt.revert();
                                for (var n, s, m, _, x, S, T, A, F, k = yt(), M = vt(), B = on(ot, j), R = 0, L = 0, N = e.end, G = e.endTrigger || $, H = e.start || (0 !== e.start && $ ? Z ? "0 0" : "0 100%" : 0), q = $ && Math.max(0, Bn.indexOf(mt)) || 0, W = q; W--;)(T = Bn[W].pin) && (T === $ || T === Z) && Bn[W].revert();
                                for (l = ss(H, $, k, j, mt.scroll(), u, f, mt, M, dt, ct, B) || (Z ? -.001 : 0), cn(N) && (N = N(mt)), ln(N) && !N.indexOf("+=") && (~N.indexOf(" ") ? N = (ln(H) ? H.split(" ")[0] : "") + N : (R = kn(N.substr(2), k), N = ln(H) ? H : l + R, G = $)), c = Math.max(l, ss(N || (G ? "100% 0" : B), G, k, j, mt.scroll() + R, p, d, mt, M, dt, ct, B)) || -.001, g = c - l || (l -= .01) && .001, R = 0, W = q; W--;)(T = (S = Bn[W]).pin) && S.start - S._pinPush < l && (n = S.end - S.start, T === $ && (R += n), T === Z && (L += n));
                                if (l += R, c += R, mt._pinPush = L, u && R && ((n = {})[j.a] = "+=" + R, vr.set([u, p], n)), Z) n = Dn(Z), _ = j === bn, m = mt.scroll(), w = parseFloat(E(j.a)) + L, !B && c > 1 && ((lt ? xr : ot).style["overflow-" + j.a] = "scroll"), ts(Z, D, n), b = rs(Z), s = En(Z, !0), A = ct && sn(ot, _ ? vn : bn)(), Q && ((P = [Q + j.os2, g + L + yn]).t = D, (W = Q === gn ? xn(Z, j) + g + L : 0) && P.push(j.d, W + yn), is(P), ct && mt.scroll(V)), ct && ((x = {
                                    top: s.top + (_ ? m - l : A) + yn,
                                    left: s.left + (_ ? A : m - l) + yn,
                                    boxSizing: "border-box",
                                    position: "fixed"
                                }).width = x.maxWidth = Math.ceil(s.width) + yn, x.height = x.maxHeight = Math.ceil(s.height) + yn, x.margin = x.marginTop = x.marginRight = x.marginBottom = x.marginLeft = "0", x[gn] = n[gn], x[gn + "Top"] = n[gn + "Top"], x[gn + "Right"] = n[gn + "Right"], x[gn + "Bottom"] = n[gn + "Bottom"], x[gn + "Left"] = n[gn + "Left"], v = function(t, e, i) {
                                    for (var r, n = [], s = t.length, a = i ? 8 : 0; a < s; a += 2) r = t[a], n.push(r, r in e ? e[r] : t[a + 1]);
                                    return n.t = t.t, n
                                }(y, x, st)), i ? (F = i._initted, Nr(1), i.progress(1, !0), C = E(j.a) - w + g + L, g !== C && v.splice(v.length - 2, 2), i.progress(0, !0), F || i.invalidate(), Nr(0)) : C = g;
                                else if ($ && mt.scroll())
                                    for (s = $.parentNode; s && s !== xr;) s._pinOffset && (l -= s._pinOffset, c -= s._pinOffset), s = s.parentNode;
                                for (W = 0; W < q; W++)(S = Bn[W].pin) && (S === $ || S === Z) && Bn[W].revert(!1);
                                mt.start = l, mt.end = c, (o = h = mt.scroll()) < V && mt.scroll(V), mt.revert(!1), Mr = 0, i && at && i._initted && i.progress(z, !0).render(i.time(), !0, !0), O !== mt.progress && (I && i.totalProgress(O, !0), mt.progress = O, mt.update()), Z && Q && (D._pinOffset = Math.round(mt.progress * C)), U && U(mt)
                            }
                    }, mt.getVelocity = function() {
                        return (mt.scroll() - h) / (Kr() - Fr) * 1e3 || 0
                    }, mt.update = function(t, e) {
                        var n, s, a, u, p, d = mt.scroll(),
                            m = t ? 0 : (d - l) / g,
                            y = m < 0 ? 0 : m > 1 ? 1 : m || 0,
                            _ = mt.progress;
                        if (e && (h = o, o = d, nt && (M = k, k = i && !at ? i.totalProgress() : y)), tt && !y && Z && !Mr && !Xr && Zr && l < d + (d - h) / (Kr() - Fr) * tt && (y = 1e-4), y !== _ && mt.enabled) {
                            if (u = (p = (n = mt.isActive = !!y && y < 1) !== (!!_ && _ < 1)) || !!y != !!_, mt.direction = y > _ ? 1 : -1, mt.progress = y, at || (!I || Mr || Xr ? i && i.totalProgress(y, !!Mr) : (I.vars.totalProgress = y, I.invalidate().restart())), Z)
                                if (t && Q && (D.style[Q + j.os2] = S), ct) {
                                    if (u) {
                                        if (a = !t && y > _ && c + 1 > d && d + 1 >= on(ot, j), st)
                                            if (t || !n && !a) os(Z, D);
                                            else {
                                                var E = En(Z, !0),
                                                    P = d - l;
                                                os(Z, xr, E.top + (j === bn ? P : 0) + yn, E.left + (j === bn ? 0 : P) + yn)
                                            } is(n || a ? v : b), C !== g && y < 1 && n || x(w + (1 !== y || a ? 0 : C))
                                    }
                                } else x(w + C * y);
                            nt && !r.tween && !Mr && !Xr && L.restart(!0), W && (p || rt && y && (y < 1 || !jr)) && Tr(W.targets).forEach((function(t) {
                                return t.classList[n || rt ? "add" : "remove"](W.className)
                            })), q && !at && !t && q(mt), u && !Mr ? (s = y && !_ ? 0 : 1 === y ? 1 : 1 === _ ? 2 : 3, at && (a = !p && "none" !== pt[s + 1] && pt[s + 1] || pt[s], i && ("complete" === a || "reset" === a || a in i) && ("complete" === a ? i.pause().totalProgress(1) : "reset" === a ? i.restart(!0).pause() : i[a]()), q && q(mt)), !p && jr || (Y && p && Y(mt), ut[s] && ut[s](mt), rt && (1 === y ? mt.kill(!1, 1) : ut[s] = 0), p || ut[s = 1 === y ? 1 : 3] && ut[s](mt))) : at && q && !Mr && q(mt)
                        }
                        A && (T(d + (f._isFlipped ? 1 : 0)), A(d))
                    }, mt.enable = function() {
                        mt.enabled || (mt.enabled = !0, Sn(ot, "resize", Vn), Sn(ot, "scroll", On), gt && Sn(t, "refreshInit", gt), i && i.add ? vr.delayedCall(.01, (function() {
                            return l || c || mt.refresh()
                        })) && (g = .01) && (l = c = 0) : mt.refresh())
                    }, mt.disable = function(e, i) {
                        if (mt.enabled && (!1 !== e && mt.revert(), mt.enabled = mt.isActive = !1, i || I && I.pause(), V = 0, n && (n.uncache = 1), gt && Pn(t, "refreshInit", gt), L && (L.pause(), r.tween && r.tween.kill() && (r.tween = 0)), !lt)) {
                            for (var s = Bn.length; s--;)
                                if (Bn[s].scroller === ot && Bn[s] !== mt) return;
                            Pn(ot, "resize", Vn), Pn(ot, "scroll", On)
                        }
                    }, mt.kill = function(t, e) {
                        mt.disable(t, e), X && delete Rn[X];
                        var r = Bn.indexOf(mt);
                        Bn.splice(r, 1), r === Rr && $n > 0 && Rr--, i && (i.scrollTrigger = null, t && i.render(-1), e || i.kill()), u && [u, p, f, d].forEach((function(t) {
                            return t.parentNode.removeChild(t)
                        })), Z && (n && (n.uncache = 1), r = 0, Bn.forEach((function(t) {
                            return t.pin === Z && r++
                        })), r || (n.spacer = 0))
                    }, mt.enable()
                } else this.update = this.refresh = this.kill = Jr
            }, t.register = function(e) {
                if (!br && (vr = e || en(), tn() && window.document && (Dr = window, _r = document, Er = _r.documentElement, xr = _r.body), vr && (Tr = vr.utils.toArray, Ar = vr.utils.clamp, Nr = vr.core.suppressOverwrites || Jr, vr.core.globals("ScrollTrigger", t), xr))) {
                    Sr = Dr.requestAnimationFrame || function(t) {
                        return setTimeout(t, 16)
                    }, Sn(Dr, "mousewheel", On), wr = [Dr, _r, Er, xr], Sn(_r, "scroll", On);
                    var i, r = xr.style,
                        n = r.borderTop;
                    r.borderTop = "1px solid #000", i = En(xr), bn.m = Math.round(i.top + bn.sc()) || 0, vn.m = Math.round(i.left + vn.sc()) || 0, n ? r.borderTop = n : r.removeProperty("border-top"), kr = setInterval(Ln, 200), vr.delayedCall(.5, (function() {
                        return Xr = 0
                    })), Sn(_r, "touchcancel", Jr), Sn(xr, "touchstart", Jr), Cn(Sn, _r, "pointerdown,touchstart,mousedown", (function() {
                        return Ir = 1
                    })), Cn(Sn, _r, "pointerup,touchend,mouseup", (function() {
                        return Ir = 0
                    })), Br = vr.utils.checkPrefix("transform"), Jn.push(Br), br = Kr(), Cr = vr.delayedCall(.2, Un).pause(), Vr = [_r, "visibilitychange", function() {
                        var t = Dr.innerWidth,
                            e = Dr.innerHeight;
                        _r.hidden ? (Lr = t, Or = e) : Lr === t && Or === e || Vn()
                    }, _r, "DOMContentLoaded", Un, Dr, "load", function() {
                        return Zr || Un()
                    }, Dr, "resize", Vn], hn(Sn)
                }
                return br
            }, t.defaults = function(t) {
                for (var e in t) An[e] = t[e]
            }, t.kill = function() {
                Qr = 0, Bn.slice(0).forEach((function(t) {
                    return t.kill(1)
                }))
            }, t.config = function(t) {
                "limitCallbacks" in t && (jr = !!t.limitCallbacks);
                var e = t.syncInterval;
                e && clearInterval(kr) || (kr = e) && setInterval(Ln, e), "autoRefreshEvents" in t && (hn(Pn) || hn(Sn, t.autoRefreshEvents || "none"), Gr = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
            }, t.scrollerProxy = function(t, e) {
                var i = Tr(t)[0],
                    r = Ur.indexOf(i),
                    n = rn(i);
                ~r && Ur.splice(r, n ? 6 : 2), n ? Yr.unshift(Dr, e, xr, e, Er, e) : Yr.unshift(i, e)
            }, t.matchMedia = function(t) {
                var e, i, r, n, s;
                for (i in t) r = Gn.indexOf(i), n = t[i], Hr = i, "all" === i ? n() : (e = Dr.matchMedia(i)) && (e.matches && (s = n()), ~r ? (Gn[r + 1] = dn(Gn[r + 1], n), Gn[r + 2] = dn(Gn[r + 2], s)) : (r = Gn.length, Gn.push(i, n, s), e.addListener ? e.addListener(jn) : e.addEventListener("change", jn)), Gn[r + 3] = e.matches), Hr = 0;
                return Gn
            }, t.clearMatchMedia = function(t) {
                t || (Gn.length = 0), (t = Gn.indexOf(t)) >= 0 && Gn.splice(t, 4)
            }, t
        }();
        ls.version = "3.6.0", ls.saveStyles = function(t) {
            return t ? Tr(t).forEach((function(t) {
                if (t && t.style) {
                    var e = Wn.indexOf(t);
                    e >= 0 && Wn.splice(e, 4), Wn.push(t, t.style.cssText, vr.core.getCache(t), Hr)
                }
            })) : Wn
        }, ls.revert = function(t, e) {
            return Yn(!t, e)
        }, ls.create = function(t, e) {
            return new ls(t, e)
        }, ls.refresh = function(t) {
            return t ? Vn() : Un(!0)
        }, ls.update = Zn, ls.maxScroll = function(t, e) {
            return on(t, e ? vn : bn)
        }, ls.getScrollFunc = function(t, e) {
            return sn(Tr(t)[0], e ? vn : bn)
        }, ls.getById = function(t) {
            return Rn[t]
        }, ls.getAll = function() {
            return Bn.slice(0)
        }, ls.isScrolling = function() {
            return !!Zr
        }, ls.addEventListener = function(t, e) {
            var i = zn[t] || (zn[t] = []);
            ~i.indexOf(e) || i.push(e)
        }, ls.removeEventListener = function(t, e) {
            var i = zn[t],
                r = i && i.indexOf(e);
            r >= 0 && i.splice(r, 1)
        }, ls.batch = function(t, e) {
            var i, r = [],
                n = {},
                s = e.interval || .016,
                a = e.batchMax || 1e9,
                o = function(t, e) {
                    var i = [],
                        r = [],
                        n = vr.delayedCall(s, (function() {
                            e(i, r), i = [], r = []
                        })).pause();
                    return function(t) {
                        i.length || n.restart(!0), i.push(t.trigger), r.push(t), a <= i.length && n.progress(1)
                    }
                };
            for (i in e) n[i] = "on" === i.substr(0, 2) && cn(e[i]) && "onRefreshInit" !== i ? o(0, e[i]) : e[i];
            return cn(a) && (a = a(), Sn(ls, "refresh", (function() {
                return a = e.batchMax()
            }))), Tr(t).forEach((function(t) {
                var e = {};
                for (i in n) e[i] = n[i];
                e.trigger = t, r.push(ls.create(e))
            })), r
        }, ls.sort = function(t) {
            return Bn.sort(t || function(t, e) {
                return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
            })
        }, en() && vr.registerPlugin(ls);
        var cs = i("+9ZR"),
            us = /(^\s+|\s+$)/g,
            ps = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

        function fs(t) {
            var e = t.nodeType,
                i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += fs(t)
            } else if (3 === e || 4 === e) return t.nodeValue;
            return i
        }

        function ds(t, e, i) {
            if (t += "", i && (t = t.replace(us, "")), e && "" !== e) return t.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
            for (var r, n, s = [], a = t.length, o = 0; o < a; o++)((n = t.charAt(o)).charCodeAt(0) >= 55296 && n.charCodeAt(0) <= 56319 || t.charCodeAt(o + 1) >= 65024 && t.charCodeAt(o + 1) <= 65039) && (r = ((t.substr(o, 12).split(ps) || [])[1] || "").length || 2, n = t.substr(o, r), s.emoji = 1, o += r - 1), s.push(">" === n ? "&gt;" : "<" === n ? "&lt;" : n);
            return s
        }
        var ms, gs, ys, vs = /(?:\r|\n|\t\t)/g,
            bs = /(?:\s\s+)/g,
            Ds = function(t) {
                return gs.getComputedStyle(t)
            },
            _s = Array.isArray,
            Es = [].slice,
            xs = function(t, e) {
                var i;
                return _s(t) ? t : "string" == (i = typeof t) && !e && t ? Es.call(ms.querySelectorAll(t), 0) : t && "object" === i && "length" in t ? Es.call(t, 0) : t ? [t] : []
            },
            ws = function(t) {
                return "absolute" === t.position || !0 === t.absolute
            },
            Cs = function(t, e) {
                for (var i, r = e.length; --r > -1;)
                    if (i = e[r], t.substr(0, i.length) === i) return i.length
            },
            Ss = function(t, e) {
                void 0 === t && (t = "");
                var i = ~t.indexOf("++"),
                    r = 1;
                return i && (t = t.split("++").join("")),
                    function() {
                        return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (i ? r++ : "") + "'>" : ">")
                    }
            },
            Ps = function t(e, i, r) {
                var n = e.nodeType;
                if (1 === n || 9 === n || 11 === n)
                    for (e = e.firstChild; e; e = e.nextSibling) t(e, i, r);
                else 3 !== n && 4 !== n || (e.nodeValue = e.nodeValue.split(i).join(r))
            },
            Ts = function(t, e) {
                for (var i = e.length; --i > -1;) t.push(e[i])
            },
            As = function(t, e, i) {
                for (var r; t && t !== e;) {
                    if (r = t._next || t.nextSibling) return r.textContent.charAt(0) === i;
                    t = t.parentNode || t._parent
                }
            },
            Fs = function t(e) {
                var i, r, n = xs(e.childNodes),
                    s = n.length;
                for (i = 0; i < s; i++)(r = n[i])._isSplit ? t(r) : i && r.previousSibling && 3 === r.previousSibling.nodeType ? (r.previousSibling.nodeValue += 3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue, e.removeChild(r)) : 3 !== r.nodeType && (e.insertBefore(r.firstChild, r), e.removeChild(r))
            },
            ks = function(t, e) {
                return parseFloat(e[t]) || 0
            },
            Ms = function(t, e, i, r, n, s, a) {
                var o, h, l, c, u, p, f, d, m, g, y, v, b = Ds(t),
                    D = ks("paddingLeft", b),
                    _ = -999,
                    E = ks("borderBottomWidth", b) + ks("borderTopWidth", b),
                    x = ks("borderLeftWidth", b) + ks("borderRightWidth", b),
                    w = ks("paddingTop", b) + ks("paddingBottom", b),
                    C = ks("paddingLeft", b) + ks("paddingRight", b),
                    S = ks("fontSize", b) * (e.lineThreshold || .2),
                    P = b.textAlign,
                    T = [],
                    A = [],
                    F = [],
                    k = e.wordDelimiter || " ",
                    M = e.tag ? e.tag : e.span ? "span" : "div",
                    I = e.type || e.split || "chars,words,lines",
                    B = n && ~I.indexOf("lines") ? [] : null,
                    R = ~I.indexOf("words"),
                    L = ~I.indexOf("chars"),
                    O = ws(e),
                    V = e.linesClass,
                    z = ~(V || "").indexOf("++"),
                    N = [];
                for (z && (V = V.split("++").join("")), l = (h = t.getElementsByTagName("*")).length, u = [], o = 0; o < l; o++) u[o] = h[o];
                if (B || O)
                    for (o = 0; o < l; o++)((p = (c = u[o]).parentNode === t) || O || L && !R) && (v = c.offsetTop, B && p && Math.abs(v - _) > S && ("BR" !== c.nodeName || 0 === o) && (f = [], B.push(f), _ = v), O && (c._x = c.offsetLeft, c._y = v, c._w = c.offsetWidth, c._h = c.offsetHeight), B && ((c._isSplit && p || !L && p || R && p || !R && c.parentNode.parentNode === t && !c.parentNode._isSplit) && (f.push(c), c._x -= D, As(c, t, k) && (c._wordEnd = !0)), "BR" === c.nodeName && (c.nextSibling && "BR" === c.nextSibling.nodeName || 0 === o) && B.push([])));
                for (o = 0; o < l; o++)
                    if (p = (c = u[o]).parentNode === t, "BR" !== c.nodeName)
                        if (O && (m = c.style, R || p || (c._x += c.parentNode._x, c._y += c.parentNode._y), m.left = c._x + "px", m.top = c._y + "px", m.position = "absolute", m.display = "block", m.width = c._w + 1 + "px", m.height = c._h + "px"), !R && L)
                            if (c._isSplit)
                                for (c._next = h = c.nextSibling, c.parentNode.appendChild(c); h && 3 === h.nodeType && " " === h.textContent;) c._next = h.nextSibling, c.parentNode.appendChild(h), h = h.nextSibling;
                            else c.parentNode._isSplit ? (c._parent = c.parentNode, !c.previousSibling && c.firstChild && (c.firstChild._isFirst = !0), c.nextSibling && " " === c.nextSibling.textContent && !c.nextSibling.nextSibling && N.push(c.nextSibling), c._next = c.nextSibling && c.nextSibling._isFirst ? null : c.nextSibling, c.parentNode.removeChild(c), u.splice(o--, 1), l--) : p || (v = !c.nextSibling && As(c.parentNode, t, k), c.parentNode._parent && c.parentNode._parent.appendChild(c), v && c.parentNode.appendChild(ms.createTextNode(" ")), "span" === M && (c.style.display = "inline"), T.push(c));
                else c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML ? A.push(c) : L && !c._isSplit && ("span" === M && (c.style.display = "inline"), T.push(c));
                else B || O ? (c.parentNode && c.parentNode.removeChild(c), u.splice(o--, 1), l--) : R || t.appendChild(c);
                for (o = N.length; --o > -1;) N[o].parentNode.removeChild(N[o]);
                if (B) {
                    for (O && (g = ms.createElement(M), t.appendChild(g), y = g.offsetWidth + "px", v = g.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(g)), m = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                    for (d = " " === k && (!O || !R && !L), o = 0; o < B.length; o++) {
                        for (f = B[o], (g = ms.createElement(M)).style.cssText = "display:block;text-align:" + P + ";position:" + (O ? "absolute;" : "relative;"), V && (g.className = V + (z ? o + 1 : "")), F.push(g), l = f.length, h = 0; h < l; h++) "BR" !== f[h].nodeName && (c = f[h], g.appendChild(c), d && c._wordEnd && g.appendChild(ms.createTextNode(" ")), O && (0 === h && (g.style.top = c._y + "px", g.style.left = D + v + "px"), c.style.top = "0px", v && (c.style.left = c._x - v + "px")));
                        0 === l ? g.innerHTML = "&nbsp;" : R || L || (Fs(g), Ps(g, String.fromCharCode(160), " ")), O && (g.style.width = y, g.style.height = c._h + "px"), t.appendChild(g)
                    }
                    t.style.cssText = m
                }
                O && (a > t.clientHeight && (t.style.height = a - w + "px", t.clientHeight < a && (t.style.height = a + E + "px")), s > t.clientWidth && (t.style.width = s - C + "px", t.clientWidth < s && (t.style.width = s + x + "px"))), Ts(i, T), R && Ts(r, A), Ts(n, F)
            },
            Is = function t(e, i, r, n) {
                var s, a, o = xs(e.childNodes),
                    h = o.length,
                    l = ws(i);
                if (3 !== e.nodeType || h > 1) {
                    for (i.absolute = !1, s = 0; s < h; s++)(a = o[s])._next = a._isFirst = a._parent = a._wordEnd = null, (3 !== a.nodeType || /\S+/.test(a.nodeValue)) && (l && 3 !== a.nodeType && "inline" === Ds(a).display && (a.style.display = "inline-block", a.style.position = "relative"), a._isSplit = !0, t(a, i, r, n));
                    return i.absolute = l, void(e._isSplit = !0)
                }! function(t, e, i, r) {
                    var n, s, a, o, h, l, c, u, p = e.tag ? e.tag : e.span ? "span" : "div",
                        f = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
                        d = ws(e),
                        m = e.wordDelimiter || " ",
                        g = " " !== m ? "" : d ? "&#173; " : " ",
                        y = "</" + p + ">",
                        v = 1,
                        b = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : Cs : null,
                        D = ms.createElement("div"),
                        _ = t.parentNode;
                    for (_.insertBefore(D, t), D.textContent = t.nodeValue, _.removeChild(t), c = -1 !== (n = fs(t = D)).indexOf("<"), !1 !== e.reduceWhiteSpace && (n = n.replace(bs, " ").replace(vs, "")), c && (n = n.split("<").join("{{LT}}")), h = n.length, s = (" " === n.charAt(0) ? g : "") + i(), a = 0; a < h; a++)
                        if (l = n.charAt(a), b && (u = b(n.substr(a), e.specialChars))) l = n.substr(a, u || 1), s += f && " " !== l ? r() + l + "</" + p + ">" : l, a += u - 1;
                        else if (l === m && n.charAt(a - 1) !== m && a) {
                        for (s += v ? y : "", v = 0; n.charAt(a + 1) === m;) s += g, a++;
                        a === h - 1 ? s += g : ")" !== n.charAt(a + 1) && (s += g + i(), v = 1)
                    } else "{" === l && "{{LT}}" === n.substr(a, 6) ? (s += f ? r() + "{{LT}}</" + p + ">" : "{{LT}}", a += 5) : l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319 || n.charCodeAt(a + 1) >= 65024 && n.charCodeAt(a + 1) <= 65039 ? (o = ((n.substr(a, 12).split(ps) || [])[1] || "").length || 2, s += f && " " !== l ? r() + n.substr(a, o) + "</" + p + ">" : n.substr(a, o), a += o - 1) : s += f && " " !== l ? r() + l + "</" + p + ">" : l;
                    t.outerHTML = s + (v ? y : ""), c && Ps(_, "{{LT}}", "<")
                }(e, i, r, n)
            },
            Bs = function() {
                function t(t, e) {
                    ys || (ms = document, gs = window, ys = 1), this.elements = xs(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
                }
                var e = t.prototype;
                return e.split = function(t) {
                    this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                    for (var e, i, r, n = this.elements.length, s = t.tag ? t.tag : t.span ? "span" : "div", a = Ss(t.wordsClass, s), o = Ss(t.charsClass, s); --n > -1;) r = this.elements[n], this._originals[n] = r.innerHTML, e = r.clientHeight, i = r.clientWidth, Is(r, t, a, o), Ms(r, t, this.chars, this.words, this.lines, i, e);
                    return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
                }, e.revert = function() {
                    var t = this._originals;
                    if (!t) throw "revert() call wasn't scoped properly.";
                    return this.elements.forEach((function(e, i) {
                        return e.innerHTML = t[i]
                    })), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
                }, t.create = function(e, i) {
                    return new t(e, i)
                }, t
            }();
        Bs.version = "3.6.0";
        var Rs = i("vX6Q"),
            Ls = i.n(Rs);
        Wr.registerPlugin(Bs);
        var Os = {
                global_duration: 1.4,
                global_stagger: .25,
                global_trigger: "20% bottom",
                global_offset: "-=".concat(1.2),
                global_offset_duration: "-=".concat(1.4),
                global_ease: "power4.out",
                global_scroller: ".smooth-scroll"
            },
            Vs = {
                yPercent: 100,
                stagger: Os.global_stagger - .1,
                ease: "expo.out"
            },
            zs = {
                yPercent: 20,
                opacity: 0,
                stagger: Os.global_stagger - .1
            },
            Ns = {
                renderer: "svg",
                loop: !0,
                autoplay: !1
            },
            Gs = {
                width: "90px",
                height: "90px",
                background: "#FFFFFF",
                duration: Os.global_duration - .8
            },
            js = {
                width: "45px",
                height: "45px",
                background: "transparent",
                duration: Os.global_duration - .8
            };
        var Hs = Os;
        Wr.registerPlugin(ls);
        var qs, Ws = Hs.global_scroller;

        function Xs() {
            (qs = new cs.a({
                el: document.querySelector(Ws),
                smooth: !0,
                lerp: .09,
                getDirection: !0
            })).on("scroll", (function(t) {
                ! function(t) {
                    document.documentElement.setAttribute("data-direction", t.direction), ls.update()
                }(t)
            })), ls.scrollerProxy(Ws, {
                scrollTop: function(t) {
                    return arguments.length ? qs.scrollTo(t, 0, 0) : qs.scroll.instance.scroll.y
                },
                getBoundingClientRect: function() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                },
                pinType: document.querySelector(Ws).style.transform ? "transform" : "fixed"
            }), ls.addEventListener("refresh", (function() {
                return qs.update()
            })), ls.refresh()
        }

        function Ys(t, e, i, r, n, s, a) {
            try {
                var o = t[s](a),
                    h = o.value
            } catch (t) {
                return void i(t)
            }
            o.done ? e(h) : Promise.resolve(h).then(r, n)
        }

        function Us(t) {
            return function() {
                var e = this,
                    i = arguments;
                return new Promise((function(r, n) {
                    var s = t.apply(e, i);

                    function a(t) {
                        Ys(s, r, n, a, o, "next", t)
                    }

                    function o(t) {
                        Ys(s, r, n, a, o, "throw", t)
                    }
                    a(void 0)
                }))
            }
        }

        function Ks(t) {
            return t = t || 2e3, new Promise((function(e) {
                setTimeout((function() {
                    e()
                }), t)
            }))
        }

        function $s() {
            Wr.to(".cursor__circle ", js);
            var t = Wr.timeline({
                defaults: {
                    ease: "expo.inOut"
                }
            });
            t.to(".line", {
                yPercent: -110,
                stagger: 0,
                ease: "expo.inOut",
                duration: Hs.global_duration - .7
            }, 0), t.to("#loading", {
                scaleY: 1,
                transformOrigin: "bottom",
                duration: Hs.global_duration - .2,
                display: "flex"
            }, "-=0.4")
        }

        function Zs(t) {
            var e = document.querySelector("#main"),
                i = document.querySelector("#loading"),
                r = document.querySelector(".loading-bar"),
                n = document.querySelector(".loading-text"),
                s = 0,
                a = 0;
            var o = Ls()(e, {
                background: ".img"
            });
            a = o.images.length, Wr.set(r, {
                opacity: 1,
                scaleX: 0,
                duration: .01
            }), o.on("progress", (function() {
                ! function(t) {
                    var e = t / a;
                    try {
                        n.firstChild.data = "― ".concat(Math.round(100 * e), "%")
                    } catch (t) {}
                    Wr.to(r, {
                        scaleX: e,
                        duration: 1,
                        ease: "power1.inOut",
                        transformOrigin: "left"
                    })
                }(s += 1)
            })), o.on("always", (function() {
                var e = Wr.timeline({
                    onComplete: function() {
                        Wr.set(r, {
                            opacity: 0,
                            display: "none"
                        })
                    }
                });
                e.to(".loading-text-wrap", {
                    duration: .5,
                    yPercent: -100,
                    ease: "expo.in"
                }), e.to(i, {
                    scaleY: 0,
                    transformOrigin: "top",
                    duration: Hs.global_duration - .2,
                    ease: "expo.out",
                    display: "none"
                }, "+=0.12"), t()
            }))
        }

        function Qs() {
            var t = document.querySelector("#cursor"),
                e = document.querySelector(".cursor__skills"),
                i = (document.querySelector(".skills-item_hover"), {
                    x: -100,
                    y: -100
                }),
                r = {
                    x: 0,
                    y: 0
                };
            window.addEventListener("mousemove", (function(t) {
                i.x = t.clientX, i.y = t.clientY
            }));
            requestAnimationFrame((function n() {
                ! function() {
                    var n = Math.round(i.x - r.x),
                        s = Math.round(i.y - r.y);
                    r.x += .28 * n, r.y += .28 * s;
                    var a = "rotate(" + n / 2.5 + "deg)",
                        o = "translate3d(" + r.x + "px ," + r.y + "px, 0)";
                    t.style.transform = o, e.style.transform = a
                }(), requestAnimationFrame(n)
            }))
        }
        Wr.registerPlugin(ls);
        var Js, ta, ea = function() {
                function t(t) {
                    this.chars = ds(t), this.sets = [], this.length = 50;
                    for (var e = 0; e < 20; e++) this.sets[e] = na(80, this.chars)
                }
                return t.prototype.grow = function(t) {
                    for (var e = 0; e < 20; e++) this.sets[e] += na(t - this.length, this.chars);
                    this.length = t
                }, t
            }(),
            ia = function() {
                return Js || "undefined" != typeof window && (Js = window.gsap) && Js.registerPlugin && Js
            },
            ra = /\s+/g,
            na = function(t, e) {
                for (var i = e.length, r = ""; --t > -1;) r += e[~~(Math.random() * i)];
                return r
            },
            sa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            aa = sa.toLowerCase(),
            oa = {
                upperCase: new ea(sa),
                lowerCase: new ea(aa),
                upperAndLowerCase: new ea(sa + aa)
            },
            ha = function() {
                ta = Js = ia()
            },
            la = {
                version: "3.6.0",
                name: "scrambleText",
                register: function(t, e, i) {
                    Js = t, ha()
                },
                init: function(t, e, i, r, n) {
                    if (ta || ha(), this.prop = "innerHTML" in t ? "innerHTML" : "textContent" in t ? "textContent" : 0, this.prop) {
                        this.target = t, "object" != typeof e && (e = {
                            text: e
                        });
                        var s, a, o, h, l = e.text || e.value,
                            c = !1 !== e.trim;
                        return this.delimiter = s = e.delimiter || "", this.original = ds(fs(t).replace(ra, " ").split("&nbsp;").join(""), s, c), "{original}" !== l && !0 !== l && null != l || (l = this.original.join(s)), this.text = ds((l || "").replace(ra, " "), s, c), this.hasClass = !(!e.newClass && !e.oldClass), this.newClass = e.newClass, this.oldClass = e.oldClass, h = "" === s, this.textHasEmoji = h && !!this.text.emoji, this.charsHaveEmoji = !!e.chars && !!ds(e.chars).emoji, this.length = h ? this.original.length : this.original.join(s).length, this.lengthDif = (h ? this.text.length : this.text.join(s).length) - this.length, this.fillChar = e.fillChar || e.chars && ~e.chars.indexOf(" ") ? "&nbsp;" : "", this.charSet = o = oa[e.chars || "upperCase"] || new ea(e.chars), this.speed = .05 / (e.speed || 1), this.prevScrambleTime = 0, this.setIndex = 20 * Math.random() | 0, (a = this.length + Math.max(this.lengthDif, 0)) > o.length && o.grow(a), this.chars = o.sets[this.setIndex], this.revealDelay = e.revealDelay || 0, this.tweenLength = !1 !== e.tweenLength, this.tween = i, this.rightToLeft = !!e.rightToLeft, this._props.push("scrambleText", "text"), 1
                    }
                },
                render: function(t, e) {
                    var i, r, n, s, a, o, h, l, c, u = e.target,
                        p = e.prop,
                        f = e.text,
                        d = e.delimiter,
                        m = e.tween,
                        g = e.prevScrambleTime,
                        y = e.revealDelay,
                        v = e.setIndex,
                        b = e.chars,
                        D = e.charSet,
                        _ = e.length,
                        E = e.textHasEmoji,
                        x = e.charsHaveEmoji,
                        w = e.lengthDif,
                        C = e.tweenLength,
                        S = e.oldClass,
                        P = e.newClass,
                        T = e.rightToLeft,
                        A = e.fillChar,
                        F = e.speed,
                        k = e.original,
                        M = e.hasClass,
                        I = f.length,
                        B = m._time,
                        R = B - g;
                    y && (m._from && (B = m._dur - B), t = 0 === B ? 0 : B < y ? 1e-6 : B === m._dur ? 1 : m._ease((B - y) / (m._dur - y))), t < 0 ? t = 0 : t > 1 && (t = 1), T && (t = 1 - t), i = ~~(t * I + .5), t ? ((R > F || R < -F) && (e.setIndex = v = (v + (19 * Math.random() | 0)) % 20, e.chars = D.sets[v], e.prevScrambleTime += R), s = b) : s = k.join(d), T ? 1 !== t || !m._from && "isFromStart" !== m.data ? (h = f.slice(i).join(d), n = x ? ds(s).slice(0, _ + (C ? 1 - t * t * t : 1) * w - (E ? ds(h) : h).length + .5 | 0).join("") : s.substr(0, _ + (C ? 1 - t * t * t : 1) * w - (E ? ds(h) : h).length + .5 | 0), s = h) : (n = "", s = k.join(d)) : (n = f.slice(0, i).join(d), r = (E ? ds(n) : n).length, s = x ? ds(s).slice(r, _ + (C ? 1 - (t = 1 - t) * t * t * t : 1) * w + .5 | 0).join("") : s.substr(r, _ + (C ? 1 - (t = 1 - t) * t * t * t : 1) * w - r + .5 | 0)), h = M ? ((a = (l = T ? S : P) && 0 !== i) ? "<span class='" + l + "'>" : "") + n + (a ? "</span>" : "") + ((o = (c = T ? P : S) && i !== I) ? "<span class='" + c + "'>" : "") + d + s + (o ? "</span>" : "") : n + d + s, u[p] = "&nbsp;" === A && ~h.indexOf("  ") ? h.split("  ").join("&nbsp;&nbsp;") : h
                }
            };

        function ca(t) {
            return function(t) {
                if (Array.isArray(t)) return pa(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }(t) || ua(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function ua(t, e) {
            if (t) {
                if ("string" == typeof t) return pa(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? pa(t, e) : void 0
            }
        }

        function pa(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
            return r
        }

        function fa(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function da(t, e) {
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function ma(t, e, i) {
            return e && da(t.prototype, e), i && da(t, i), t
        }
        la.emojiSafeSplit = ds, la.getText = fs, ia() && Js.registerPlugin(la);
        var ya = !1;

        function va(t) {
            document.querySelector(t).classList.add("trail-container");
            var e = document.querySelector(".trail-container");
            e.removeEventListener("mousemove", o, !0);
            var i = function(t, e, i) {
                    return (1 - i) * t + i * e
                },
                r = function(t, e, i, r) {
                    return Math.hypot(i - t, r - e)
                },
                n = {
                    x: 0,
                    y: 0
                },
                s = {
                    x: 0,
                    y: 0
                },
                a = {
                    x: 0,
                    y: 0
                },
                o = function(t) {
                    return n = function(t) {
                        return t || (t = window.event), {
                            x: t.clientX,
                            y: t.clientY - e.getBoundingClientRect().top
                        }
                    }(t)
                };
            e.addEventListener("mousemove", o, !0);
            var h = function() {
                    function t(e) {
                        fa(this, t), this.DOM = {
                            el: e
                        }, this.defaultStyle = {
                            scale: 1,
                            x: 0,
                            y: 0,
                            opacity: 0
                        }, this.getRect(), this.initEvents()
                    }
                    return ma(t, [{
                        key: "initEvents",
                        value: function() {
                            var t = this;
                            window.addEventListener("resize", (function() {
                                return t.resize()
                            }))
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            Wr.set(this.DOM.el, this.defaultStyle), this.getRect()
                        }
                    }, {
                        key: "getRect",
                        value: function() {
                            this.rect = this.DOM.el.getBoundingClientRect()
                        }
                    }, {
                        key: "isActive",
                        value: function() {
                            return Wr.isTweening(this.DOM.el) || 0 != this.DOM.el.style.opacity
                        }
                    }]), t
                }(),
                l = function() {
                    function t() {
                        var i = this;
                        fa(this, t), this.DOM = {
                            content: e
                        }, this.images = [], ca(this.DOM.content.querySelectorAll(".intro-imgtrail__img")).forEach((function(t) {
                            return i.images.push(new h(t))
                        })), this.imagesTotal = this.images.length, this.imgPosition = 0, this.zIndexVal = 1, this.threshold = 190, this.raf()
                    }
                    return ma(t, [{
                        key: "render",
                        value: function() {
                            var t = r(n.x, n.y, s.x, s.y);
                            a.x = i(a.x || n.x, n.x, .1), a.y = i(a.y || n.y, n.y, .1), t > this.threshold && (this.showNextImage(), ++this.zIndexVal, this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0, s = n);
                            var e, o = !0,
                                h = function(t, e) {
                                    var i;
                                    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                                        if (Array.isArray(t) || (i = ua(t)) || e && t && "number" == typeof t.length) {
                                            i && (t = i);
                                            var r = 0,
                                                n = function() {};
                                            return {
                                                s: n,
                                                n: function() {
                                                    return r >= t.length ? {
                                                        done: !0
                                                    } : {
                                                        done: !1,
                                                        value: t[r++]
                                                    }
                                                },
                                                e: function(t) {
                                                    throw t
                                                },
                                                f: n
                                            }
                                        }
                                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }
                                    var s, a = !0,
                                        o = !1;
                                    return {
                                        s: function() {
                                            i = t[Symbol.iterator]()
                                        },
                                        n: function() {
                                            var t = i.next();
                                            return a = t.done, t
                                        },
                                        e: function(t) {
                                            o = !0, s = t
                                        },
                                        f: function() {
                                            try {
                                                a || null == i.return || i.return()
                                            } finally {
                                                if (o) throw s
                                            }
                                        }
                                    }
                                }(this.images);
                            try {
                                for (h.s(); !(e = h.n()).done;) {
                                    if (e.value.isActive()) {
                                        o = !1;
                                        break
                                    }
                                }
                            } catch (t) {
                                h.e(t)
                            } finally {
                                h.f()
                            }
                            o && 1 !== this.zIndexVal && (this.zIndexVal = 1), this.raf()
                        }
                    }, {
                        key: "raf",
                        value: function() {
                            var t = this;
                            this.rAF = requestAnimationFrame((function() {
                                return t.render()
                            }))
                        }
                    }, {
                        key: "cancel",
                        value: function() {
                            window.cancelAnimationFrame(this.rAF)
                        }
                    }, {
                        key: "showNextImage",
                        value: function() {
                            var t = this.images[this.imgPosition];
                            Wr.killTweensOf(t.DOM.el), (new Wr.timeline).set(t.DOM.el, {
                                startAt: {
                                    opacity: 0,
                                    scale: 1
                                },
                                opacity: 1,
                                scale: 1,
                                zIndex: this.zIndexVal,
                                x: a.x - t.rect.width / 2,
                                y: a.y - t.rect.height / 2
                            }, "0").to(t.DOM.el, {
                                ease: "circ.out",
                                x: n.x - t.rect.width / 2,
                                y: n.y - t.rect.height / 2,
                                duration: 1.8
                            }).to(t.DOM.el, {
                                ease: "expo.inOut",
                                delay: .2,
                                opacity: 0,
                                duration: 1
                            }, "0.4").to(t.DOM.el, 1, {
                                ease: "expo.inOut",
                                delay: .4,
                                scale: .2,
                                duration: .8
                            }, "0.4")
                        }
                    }]), t
                }();
            ya ? (ya.cancel(), ya = new l) : ya = new l
        }
        Wr.registerPlugin(ls, la);
        var ba = i("lPHp"),
            Da = i.n(ba);

        function _a() {
            var t = Wr.timeline({
                scrollTrigger: {
                    trigger: "#skills",
                    start: "center bottom"
                }
            });
            if (t.from(".skills-title .line", Vs), t.from(".skills-desc", {
                    yPercent: 80,
                    opacity: 0,
                    stagger: Hs.global_stagger
                }, Hs.global_offset), t.from(".skills-item", zs, Hs.global_offset_duration), !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) try {
                ! function() {
                    var t = document.querySelector(".skills-desc"),
                        e = document.querySelector(".skills-item_html"),
                        i = document.querySelector(".skills-item_hover-html"),
                        r = document.querySelector(".skills-item_css"),
                        n = document.querySelector(".skills-item_hover-css"),
                        s = document.querySelector(".skills-item_js"),
                        a = document.querySelector(".skills-item_hover-js"),
                        o = document.querySelector(".skills-item_php"),
                        h = document.querySelector(".skills-item_hover-php"),
                        l = document.querySelector(".skills-item_sass"),
                        c = document.querySelector(".skills-item_hover-sass"),
                        u = document.querySelector(".skills-item_react"),
                        p = document.querySelector(".skills-item_hover-react"),
                        f = document.querySelector(".skills-item_laravel"),
                        d = document.querySelector(".skills-item_hover-laravel"),
                        m = document.querySelector(".skills-item_reactnative"),
                        g = document.querySelector(".skills-item_hover-reactnative"),
                        y = document.querySelector(".skills-item_flutter"),
                        v = document.querySelector(".skills-item_hover-flutter"),
                        b = document.querySelector(".skills-item_interactiveapp"),
                        D = document.querySelector(".skills-item_hover-interactiveapp"),
                        _ = Da.a.loadAnimation({
                            container: e,
                            path: "/html.json",
                            lottie_config: Ns
                        }),
                        E = Da.a.loadAnimation({
                            container: r,
                            path: "/css.json",
                            lottie_config: Ns
                        }),
                        x = Da.a.loadAnimation({
                            container: s,
                            path: "/js.json",
                            lottie_config: Ns
                        }),
                        w = Da.a.loadAnimation({
                            container: o,
                            path: "/php.json",
                            lottie_config: Ns
                        }),
                        C = Da.a.loadAnimation({
                            container: l,
                            path: "/sass.json",
                            lottie_config: Ns
                        }),
                        S = Da.a.loadAnimation({
                            container: u,
                            path: "/react.json",
                            lottie_config: Ns
                        }),
                        P = Da.a.loadAnimation({
                            container: f,
                            path: "/laravel.json",
                            lottie_config: Ns
                        }),
                        T = Da.a.loadAnimation({
                            container: m,
                            path: "/reactnative.json",
                            lottie_config: Ns
                        }),
                        A = Da.a.loadAnimation({
                            container: y,
                            path: "/flutter.json",
                            lottie_config: Ns
                        }),
                        F = Da.a.loadAnimation({
                            container: b,
                            path: "/interactiveapp.json",
                            lottie_config: Ns
                        });

                    function k(e, i, r) {
                        var n = document.querySelector("#cursor .cursor__skills");
                        i.addEventListener("mouseenter", (function(s) {
                            for (; n.firstChild;) n.removeChild(n.firstChild);
                            r.goToAndPlay(0), Wr.to(".skills-item span", {
                                opacity: .3,
                                duration: .8,
                                stagger: 0
                            }), Wr.to(i, {
                                opacity: 1,
                                scale: 1.15,
                                duration: .8,
                                stagger: 0,
                                ease: "expo.out"
                            }), Wr.to("#cursor .cursor__circle", {
                                opacity: 0,
                                duration: .3
                            }), Wr.to(e, {
                                scale: 1,
                                opacity: 1,
                                duration: Hs.global_duration - .4
                            }), n.appendChild(e), t.firstChild.data = "Appreciate it!", Wr.to(t, {
                                opacity: 0,
                                yPercent: -20,
                                delay: .5
                            })
                        })), i.addEventListener("mouseleave", (function(t) {
                            r.pause(), Wr.to(".skills-item span", {
                                opacity: 1,
                                scale: 1,
                                duration: .8,
                                stagger: 0,
                                ease: "expo.out"
                            }), Wr.to("#cursor .cursor__circle", {
                                opacity: 1,
                                duration: .3
                            }), Wr.to(e, {
                                opacity: 0,
                                scale: .3,
                                duration: Hs.global_duration - .4
                            })
                        }))
                    }
                    Wr.timeline({
                        repeat: -1,
                        yoyo: !0,
                        scrollTrigger: {
                            trigger: "#helloworld",
                            start: "top bottom",
                            end: "bottom top",
                            once: !1,
                            toggleActions: "play pause resume pause"
                        }
                    }).to(t, {
                        scale: 1.15,
                        ease: "expo.inOut"
                    });
                    k(e, i, _), k(r, n, E), k(s, a, x), k(o, h, w), k(l, c, C), k(u, p, S), k(f, d, P), k(m, g, T), k(y, v, A), k(b, D, F)
                }()
            } catch (t) {}
        }

        function Ea() {
            try {
                Wr.timeline({
                    scrollTrigger: {
                        trigger: "#work",
                        start: "top center"
                    }
                }).from(".work-title .line", Vs)
            } catch (t) {}
            Wr.utils.toArray(".work-card").forEach((function(t, e) {
                var i = t.querySelector(".reveal-image"),
                    r = t.querySelector(".reveal-image img"),
                    n = Wr.timeline({
                        scrollTrigger: {
                            trigger: t
                        }
                    });
                n.set(i, {
                    autoAlpha: 1
                }), n.from(i, {
                    xPercent: -100,
                    duration: Hs.global_duration - .2,
                    ease: "expo.inOut"
                }), n.from(r, {
                    xPercent: 100,
                    scale: 1.4,
                    duration: Hs.global_duration - .2,
                    ease: "expo.inOut"
                }, 0)
            }))
        }
        Wr.registerPlugin(ls), Wr.registerPlugin(ls), Wr.registerPlugin(ls), Wr.registerPlugin(ls);
        class xa {
            constructor(t, {
                vertex: e = "\n      attribute vec2 position;\n      attribute vec2 uv;\n\n      uniform mat4 projection;\n      uniform vec2 size;\n      uniform float time;\n\n      void main() {\n        vec4 p = vec4(position, 0.0, 1.0);\n        gl_Position = projection * p;\n      }\n    ",
                fragment: i = "\n      precision highp float;\n\n      void main() {\n        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n      }\n    ",
                uniforms: r = {}
            } = {}) {
                this.uniforms = r, this.instance = t, this.gl = this.instance.gl, this.program = this.createProgram(this.gl, e, i), this.parse()
            }
            setUniforms(t) {
                this.texUnit = -1;
                for (const e in t) this.setUniform(e, t[e])
            }
            parse(t = this.gl) {
                this.uniformsList = new Map, this.attributesList = new Map, this.uniformsLoc = new Map, this.attributeLoc = new Map;
                for (let e = 0; e < t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS); e++) {
                    let i = t.getActiveUniform(this.program, e);
                    this.uniformsList.set(i.name, i), this.uniformsLoc.set(i.name, t.getUniformLocation(this.program, i.name))
                }
                for (let e = 0; e < t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES); e++) {
                    let i = t.getActiveAttrib(this.program, e);
                    this.attributesList.set(i.name, i), this.attributeLoc.set(i.name, t.getAttribLocation(this.program, i.name))
                }
            }
            setUniform(t, e) {
                const i = this.uniformsList.get(t);
                if (!i) return;
                const r = this.gl,
                    n = i.type,
                    s = this.uniformsLoc.get(t);
                if (35678 !== n) switch (n) {
                    case 5126:
                        return e.length ? r.uniform1fv(s, e) : r.uniform1f(s, e);
                    case 35664:
                        return r.uniform2fv(s, e);
                    case 35665:
                        return r.uniform3fv(s, e);
                    case 35666:
                        return r.uniform4fv(s, e);
                    case 35670:
                    case 5124:
                    case 35678:
                    case 35680:
                        return e.length ? r.uniform1iv(s, e) : r.uniform1i(s, e);
                    case 35671:
                    case 35667:
                        return r.uniform2iv(s, e);
                    case 35672:
                    case 35668:
                        return r.uniform3iv(s, e);
                    case 35673:
                    case 35669:
                        return r.uniform4iv(s, e);
                    case 35674:
                        return r.uniformMatrix2fv(s, !1, e);
                    case 35675:
                        return r.uniformMatrix3fv(s, !1, e);
                    case 35676:
                        return r.uniformMatrix4fv(s, !1, e)
                }
            }
            createShader(t, e, i) {
                const r = t.createShader(e);
                if (t.shaderSource(r, i), t.compileShader(r), t.getShaderParameter(r, t.COMPILE_STATUS)) return r;
                console.error(t.getShaderInfoLog(r)), t.deleteShader(r)
            }
            createProgram(t, e, i) {
                const r = this.createShader(t, t.VERTEX_SHADER, e),
                    n = this.createShader(t, t.FRAGMENT_SHADER, i),
                    s = t.createProgram();
                if (t.attachShader(s, r), t.attachShader(s, n), t.linkProgram(s), t.deleteShader(r), t.deleteShader(n), t.getProgramParameter(s, t.LINK_STATUS)) return s;
                console.error(t.getProgramInfoLog(s)), t.deleteProgram(s)
            }
        }

        function wa(t, e, i) {
            let r = e[0],
                n = e[1],
                s = e[2],
                a = e[3],
                o = e[4],
                h = e[5],
                l = e[6],
                c = e[7],
                u = e[8],
                p = e[9],
                f = e[10],
                d = e[11],
                m = e[12],
                g = e[13],
                y = e[14],
                v = e[15],
                b = i[0],
                D = i[1],
                _ = i[2],
                E = i[3];
            return t[0] = b * r + D * o + _ * u + E * m, t[1] = b * n + D * h + _ * p + E * g, t[2] = b * s + D * l + _ * f + E * y, t[3] = b * a + D * c + _ * d + E * v, b = i[4], D = i[5], _ = i[6], E = i[7], t[4] = b * r + D * o + _ * u + E * m, t[5] = b * n + D * h + _ * p + E * g, t[6] = b * s + D * l + _ * f + E * y, t[7] = b * a + D * c + _ * d + E * v, b = i[8], D = i[9], _ = i[10], E = i[11], t[8] = b * r + D * o + _ * u + E * m, t[9] = b * n + D * h + _ * p + E * g, t[10] = b * s + D * l + _ * f + E * y, t[11] = b * a + D * c + _ * d + E * v, b = i[12], D = i[13], _ = i[14], E = i[15], t[12] = b * r + D * o + _ * u + E * m, t[13] = b * n + D * h + _ * p + E * g, t[14] = b * s + D * l + _ * f + E * y, t[15] = b * a + D * c + _ * d + E * v, t
        }
        class Ca extends Array {
            constructor(t = 1, e = 0, i = 0, r = 0, n = 0, s = 1, a = 0, o = 0, h = 0, l = 0, c = 1, u = 0, p = 0, f = 0, d = 0, m = 1) {
                return super(t, e, i, r, n, s, a, o, h, l, c, u, p, f, d, m), this
            }
            translate(t, e = this) {
                return function(t, e, i) {
                    let r, n, s, a, o, h, l, c, u, p, f, d, m = i[0],
                        g = i[1],
                        y = i[2];
                    e === t ? (t[12] = e[0] * m + e[4] * g + e[8] * y + e[12], t[13] = e[1] * m + e[5] * g + e[9] * y + e[13], t[14] = e[2] * m + e[6] * g + e[10] * y + e[14], t[15] = e[3] * m + e[7] * g + e[11] * y + e[15]) : (r = e[0], n = e[1], s = e[2], a = e[3], o = e[4], h = e[5], l = e[6], c = e[7], u = e[8], p = e[9], f = e[10], d = e[11], t[0] = r, t[1] = n, t[2] = s, t[3] = a, t[4] = o, t[5] = h, t[6] = l, t[7] = c, t[8] = u, t[9] = p, t[10] = f, t[11] = d, t[12] = r * m + o * g + u * y + e[12], t[13] = n * m + h * g + p * y + e[13], t[14] = s * m + l * g + f * y + e[14], t[15] = a * m + c * g + d * y + e[15])
                }(this, e, t), this
            }
            scale(t, e = this) {
                return function(t, e, i) {
                    let r = i[0],
                        n = i[1],
                        s = i[2];
                    t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * s, t[9] = e[9] * s, t[10] = e[10] * s, t[11] = e[11] * s, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]
                }(this, e, "number" == typeof t ? [t, t, t] : t), this
            }
            multiply(t, e) {
                return e ? wa(this, t, e) : wa(this, this, t), this
            }
            fromPerspective({
                fov: t,
                aspect: e,
                near: i,
                far: r
            } = {}) {
                return function(t, e, i, r, n) {
                    let s = 1 / Math.tan(e / 2),
                        a = 1 / (r - n);
                    t[0] = s / i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = s, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (n + r) * a, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * n * r * a, t[15] = 0
                }(this, t, e, i, r), this
            }
        }
        class Sa {
            constructor(t, e, {
                material: i,
                wireframe: r = !1,
                uniforms: n = {},
                position: s = [0, 0],
                scale: a = [1, 1],
                order: o = 10
            } = {}) {
                if (!i) return console.error("Missing material");
                this.instance = t, this.plane = this.instance.plane, this.dom = e, this.material = i, this.wireframe = r, this.uniforms = n, this.position = s, this.scale = a, this.order = o, this.active = !0, this.vao = this.instance.vao.createVertexArrayOES(), this.setupVao(), this.resize(), this.dom.classList.add("aladino"), this.dom.style.opacity = "0", "undefined" != typeof ResizeObserver && (this.observer = new ResizeObserver(() => this.resize()), this.observer.observe(this.dom))
            }
            destroy() {
                this.active = !1
            }
            resize() {
                if (!this.active) return;
                if (!this.dom) return void this.destroy();
                const t = this.dom.getBoundingClientRect();
                this.bounds = {
                    top: t.top + this.instance.y,
                    left: t.left + this.instance.x,
                    width: t.width,
                    height: t.height
                }, this.uniforms.size = [this.bounds.width, this.bounds.height], this.updateProjection()
            }
            updateProjection() {
                this.projection = new Ca;
                const t = this.instance.aspect,
                    e = Math.PI / 180 * 45,
                    i = this.order,
                    r = 2 * Math.tan(e / 2) * i,
                    n = r * t,
                    s = this.bounds.width / this.instance.width * n,
                    a = this.bounds.height / this.instance.height * r;
                this.projection.fromPerspective({
                    fov: e,
                    aspect: t,
                    near: .01,
                    far: 100
                }), this.projection.translate([0, 0, -i, 0]), this.projection.translate([-n / 2 + s / 2, r / 2 - a / 2, 0, 0]);
                const o = this.instance.x - this.position[0],
                    h = this.instance.y - this.position[1];
                this.projection.translate([(this.bounds.left - o) / this.instance.width * n, -(this.bounds.top - h) / this.instance.height * r, 0, 0]), this.projection.scale([s * this.scale[0], a * this.scale[1], 1, 1])
            }
            setupVao() {
                const t = this.instance.gl;
                this.instance.vao.bindVertexArrayOES(this.vao);
                const e = this.material.attributeLoc.get("position");
                void 0 !== e && (t.enableVertexAttribArray(e), t.bindBuffer(t.ARRAY_BUFFER, this.plane.position), t.vertexAttribPointer(e, 2, t.FLOAT, !1, 0, 0));
                const i = this.material.attributeLoc.get("uv");
                void 0 !== i && (t.enableVertexAttribArray(i), t.bindBuffer(t.ARRAY_BUFFER, this.plane.uv), t.vertexAttribPointer(i, 2, t.FLOAT, !1, 0, 0)), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.plane.index), this.instance.vao.bindVertexArrayOES(null)
            }
            draw() {
                const t = this.instance.gl;
                this.updateProjection(), t.uniformMatrix4fv(this.material.uniformsLoc.get("projection"), !1, this.projection), t.drawElements(this.wireframe ? t.LINES : t.TRIANGLES, this.plane.n, t.UNSIGNED_SHORT, 0)
            }
        }
        class Pa {
            constructor(t) {
                const e = t.gl,
                    {
                        position: i,
                        index: r,
                        uv: n
                    } = this.build(t.density);
                this.index = e.createBuffer(), this.position = e.createBuffer(), this.uv = e.createBuffer(), this.n = r.length, e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.index), e.bufferData(e.ELEMENT_ARRAY_BUFFER, r, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, this.position), e.bufferData(e.ARRAY_BUFFER, i, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, this.uv), e.bufferData(e.ARRAY_BUFFER, n, e.STATIC_DRAW)
            }
            build(t) {
                let e = 0,
                    i = 0;
                const r = t,
                    n = t,
                    s = (r + 1) * (n + 1),
                    a = r * n * 6,
                    o = new Float32Array(2 * s),
                    h = new Float32Array(2 * s),
                    l = s > 65536 ? new Uint32Array(a) : new Uint16Array(a),
                    c = e,
                    u = 1 / r,
                    p = 1 / n;
                for (let t = 0; t <= n; t++) {
                    let s = t * p - .5;
                    for (let a = 0; a <= r; a++, e++) {
                        let p = a * u - .5;
                        if (o[2 * e + 0] = 1 * p, o[2 * e + 1] = -1 * s, h[2 * e] = a / r, h[2 * e + 1] = 1 - t / n, t === n || a === r) continue;
                        let f = c + a + t * (r + 1),
                            d = c + a + (t + 1) * (r + 1),
                            m = c + a + (t + 1) * (r + 1) + 1,
                            g = c + a + t * (r + 1) + 1;
                        l[6 * i] = f, l[6 * i + 1] = d, l[6 * i + 2] = g, l[6 * i + 3] = d, l[6 * i + 4] = m, l[6 * i + 5] = g, i++
                    }
                }
                return {
                    position: o,
                    uv: h,
                    index: l
                }
            }
        }
        const Ta = new Map;
        class Aa {
            constructor(t, e, {
                anisotropy: i = !1
            } = {}) {
                if (Ta.get(e)) return Ta.get(e);
                Ta.set(e, this), this.instance = t, this.gl = this.instance.gl, this.url = e, this.anisotropy = i, this.loading = (() => {
                    let t = void 0,
                        e = void 0;
                    const i = new Promise((i, r) => {
                        t = i, e = r
                    });
                    return i.resolve = t, i.reject = e, i
                })();
                const r = this.gl;
                this.texture = r.createTexture(), r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, this.texture), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, new Uint8Array(4)), this.load()
            }
            load() {
                this.image = new Image, this.image.crossOrigin = "anonymous", this.image.onload = this.onLoad.bind(this), this.image.src = this.url
            }
            onLoad() {
                const t = this.gl;
                if (t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), this.anisotropy && this.instance.anisotropy) {
                    const e = this.instance.anisotropy,
                        i = t.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    t.texParameterf(t.TEXTURE_2D, e.TEXTURE_MAX_ANISOTROPY_EXT, i)
                }
                t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, this.image), this.loading.resolve(this)
            }
        }
        class Fa {
            constructor({
                canvas: t = document.createElement("canvas"),
                dpr: e = Math.min(devicePixelRatio, 2),
                density: i = 1,
                autoScroll: r = !0,
                post: n = !1,
                attribs: s = {
                    antialias: !0
                },
                autoTick: a = !0
            } = {}) {
                this.dpr = e, this.canvas = t, this.density = i, this.autoScroll = r, this.carpets = new Map, this.lastProgramUsed = null, this.post = n, this.autoTick = a, this.x = 0, this.y = 0, this.post && (s.antialias = !1);
                try {
                    this.gl = t.getContext("webgl", s) || t.getContext("experimental-webgl", s), this.vao = this.gl.getExtension("OES_vertex_array_object")
                } catch (t) {
                    return void console.error("WebGL or VAO not available")
                }
                this.anisotropy = this.gl.getExtension("EXT_texture_filter_anisotropic") || this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic") || this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic"), this.gl.enable(this.gl.DEPTH_TEST), this.gl.clearColor(0, 0, 0, 0), this.plane = new Pa(this), this.init()
            }
            init() {
                this.resize = this.resize.bind(this), this.draw = this.draw.bind(this), window.addEventListener("resize", this.resize), this.autoScroll && (this.scroll = this.scroll.bind(this), window.addEventListener("scroll", this.scroll), this.scroll()), this.resize(), this.post && this.setupPost(), this.autoTick && this.draw()
            }
            destroy() {
                window.removeEventListener("resize", this.resize), this.requestID && cancelAnimationFrame(this.requestID)
            }
            scroll() {
                const t = document.documentElement;
                this.x = (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0), this.y = window.pageYOffset || document.documentElement.scrollTop
            }
            resize() {
                this.width = window.innerWidth, this.height = window.innerHeight, this.aspect = this.width / this.height;
                const t = this.gl;
                t.canvas.width = this.width * this.dpr, t.canvas.height = this.height * this.dpr, Object.assign(this.gl.canvas.style, {
                    position: "fixed",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    width: this.width + "px",
                    height: this.height + "px",
                    pointerEvents: "none"
                }), this.carpets.forEach(t => t.resize()), t.viewport(0, 0, t.canvas.width, t.canvas.height), this.post && this.postTexture && (t.bindTexture(t.TEXTURE_2D, this.postTexture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.canvas.width, t.canvas.height, 0, t.RGBA, t.UNSIGNED_BYTE, null)), this.reset = !0
            }
            material(t) {
                return new xa(this, t)
            }
            carpet(t, e) {
                const i = new Sa(this, t, e);
                return this.carpets.set(t, i), this.reset = !0, i
            }
            texture(t, e) {
                return new Aa(this, t, e)
            }
            setupPost() {
                const t = this.gl;
                this.postTexture = t.createTexture(), this.postFb = t.createFramebuffer(), t.bindTexture(t.TEXTURE_2D, this.postTexture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.canvas.width, t.canvas.height, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.bindFramebuffer(t.FRAMEBUFFER, this.postFb), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.postTexture, 0), t.bindFramebuffer(t.FRAMEBUFFER, null), this.postMaterial = this.material({
                    vertex: "\n        attribute vec2 position;\n\n        void main() {\n          gl_Position = vec4(position, 0.0, 1.0);\n        }\n      ",
                    fragment: this.post.fragment || "\n        precision highp float;\n\n        uniform vec2 viewport;\n        uniform sampler2D image;\n\n        void main() {\n          vec2 uv = gl_FragCoord.xy / viewport;\n          vec4 color = texture2D(image, uv);\n          gl_FragColor = color;\n        }\n      ",
                    uniforms: this.post.uniforms || {}
                }), this.postTriangle = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this.postTriangle), t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), t.STATIC_DRAW), this.postVao = this.vao.createVertexArrayOES(), this.vao.bindVertexArrayOES(this.postVao);
                const e = this.postMaterial.attributeLoc.get("position");
                t.enableVertexAttribArray(e), t.bindBuffer(t.ARRAY_BUFFER, this.postTriangle), t.vertexAttribPointer(e, 2, t.FLOAT, !1, 0, 0), this.vao.bindVertexArrayOES(null)
            }
            setTextures(t, e) {
                const i = this.gl;
                let r = 0;
                t.uniformsList.forEach(n => {
                    if (35678 === n.type) {
                        const s = e[n.name];
                        if (!s) return;
                        i.activeTexture(i.TEXTURE0 + r), i.bindTexture(i.TEXTURE_2D, s.texture), i.uniform1i(t.uniformsLoc.get(n.name), r);
                        const a = n.name,
                            o = "size" + a.charAt(0).toUpperCase() + a.substring(1);
                        t.setUniform(o, [s.image.width, s.image.height]), r++
                    }
                })
            }
            draw(t = performance.now()) {
                this.autoTick && (this.requestID = requestAnimationFrame(this.draw));
                const e = this.gl;
                let i = void 0;
                const r = e.canvas.width,
                    n = e.canvas.height;
                if (this.post && e.bindFramebuffer(e.FRAMEBUFFER, this.postFb), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), this.carpets.forEach(s => {
                        s.active && ((s.material.program !== this.lastProgramUsed || this.reset) && (e.useProgram(s.material.program), this.vao.bindVertexArrayOES(s.vao), this.setTextures(s.material, s.material.uniforms), this.reset = !1), s.material.program !== i && (s.material.uniforms.time = t, s.material.uniforms.viewport = [r, n], s.material.setUniforms(s.material.uniforms)), this.setTextures(s.material, s.uniforms), s.material.setUniforms(s.uniforms), s.draw(), i = s.material.program, this.lastProgramUsed = s.material.program)
                    }), this.post) {
                    const i = this.postMaterial;
                    e.bindFramebuffer(e.FRAMEBUFFER, null), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.useProgram(i.program), i.uniforms.time = t, i.uniforms.viewport = [r, n], i.setUniforms(i.uniforms), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, this.postTexture), e.uniform1i(i.uniformsLoc.get("image"), 0), this.vao.bindVertexArrayOES(this.postVao), e.drawArrays(e.TRIANGLES, 0, 3), this.reset = !0
                }
            }
        }

        function ka(t, e) {
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function Ma(t, e, i, r, n) {
            return (t - e) / (i - e) * (n - r) + r
        }
        var Ia, Ba, Ra = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.viewport = [0, 0], this.coords = [0, 0], this.ndc = [0, 0], this.onMove = this.onMove.bind(this), this.onResize = this.onResize.bind(this), this.onResize(), this.bind()
                }
                var e, i, r;
                return e = t, (i = [{
                    key: "bind",
                    value: function() {
                        window.addEventListener("mousemove", this.onMove), window.addEventListener("resize", this.onResize)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        window.removeEventListener("mousemove", this.onMove), window.removeEventListener("resize", this.onResize)
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        this.viewport[0] = window.innerWidth, this.viewport[1] = window.innerHeight
                    }
                }, {
                    key: "onMove",
                    value: function(t) {
                        this.coords[0] = t.clientX, this.coords[1] = t.clientY, this.ndc[0] = Ma(this.coords[0], 0, this.viewport[0], -1, 1), this.ndc[1] = Ma(this.coords[1], 0, this.viewport[1], 1, -1)
                    }
                }]) && ka(e.prototype, i), r && ka(e, r), t
            }(),
            La = function(t, e, i) {
                return t + (e - t) * i
            };

        function Oa() {
            var t, e, i = Wr.timeline({
                defaults: {
                    duration: 5,
                    ease: "power1.out"
                },
                scrollTrigger: {
                    trigger: "#contact",
                    scrub: !0,
                    once: !1,
                    start: "top bottom",
                    end: "200% center"
                }
            });
            Wr.set(".contact-getintouch-1", {
                x: -500
            }), Wr.set(".contact-getintouch-2", {
                x: 80
            }), i.to(".contact-getintouch-1", {
                x: -80
            }), i.to(".contact-getintouch-2", {
                x: -500
            }, 0), Wr.timeline({
                repeat: -1,
                yoyo: !0,
                defaults: {
                    duration: Hs.global_duration + .5,
                    ease: "expo.inOut"
                },
                scrollTrigger: {
                    trigger: "#contact",
                    once: !1,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play pause resume pause"
                }
            }).from(".contact-emoji", {
                scale: 1.35
            }), Wr.utils.toArray(".contact-cta-item-title").forEach((function(t, e) {
                var i = Wr.timeline({
                    paused: !0,
                    defaults: {
                        duration: .8,
                        ease: "expo.inOut"
                    }
                });
                i.to(t, {
                    scale: 1.05
                }), t.addEventListener("mouseenter", (function(t) {
                    i.play()
                })), t.addEventListener("mouseleave", (function(t) {
                    i.reverse()
                }))
            })), document.querySelector(".contact-foot-cv-view").addEventListener("click", (function(t) {
                ! function(t) {
                    t.preventDefault(), Wr.set("#cv", {
                        autoAlpha: 1,
                        yPercent: 100
                    }), Wr.to("#cv", {
                        yPercent: 0,
                        duration: Hs.global_duration - .5,
                        ease: "expo.out"
                    })
                }(t)
            })), document.querySelector(".contact-foot-cv-close").addEventListener("click", (function(t) {
                ! function(t) {
                    t.preventDefault(), Wr.to("#cv", {
                        yPercent: 100,
                        duration: Hs.global_duration - 1,
                        ease: "expo.in",
                        onComplete: function() {
                            Wr.set("#cv", {
                                autoAlpha: 0
                            })
                        }
                    })
                }(t)
            }));
            try {
                t = document.querySelector(".contact-getintouch-wrap"), e = document.querySelector(".golden-motto"), Ls()(e).on("always", (function() {
                    var i = new Ra,
                        r = new Fa({
                            density: 50
                        });
                    document.body.appendChild(r.canvas);
                    var n = r.material({
                            vertex: "\n          attribute vec2 position;\n          attribute vec2 uv;\n          uniform mat4 projection;\n          uniform float time;\n          uniform vec2 speed;\n          varying vec2 vUv;\n          float parabola( float x, float k ) {\n            return pow( 4.0*x*(1.0-x), k );\n          }\n          void main() {\n            vUv = uv;\n            vec4 pos = vec4(position, 0.0, 1.0);\n            vec2 spee = speed * 0.03;\n            pos.x += parabola(uv.y, 1.0) * spee.x;\n            pos.y -= parabola(uv.x, 1.0) * spee.y;\n            gl_Position = projection * pos;\n          }\n        ",
                            fragment: "\n          precision highp float;\n          uniform vec2 size;\n          uniform vec2 sizeImage;\n          uniform sampler2D image;\n          uniform vec2 speed;\n          varying vec2 vUv;\n          vec4 coverTexture(sampler2D tex, vec2 imgSize, vec2 ouv) {\n            vec2 s = size;\n            vec2 i = imgSize;\n            float rs = s.x / s.y;\n            float ri = i.x / i.y;\n            vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);\n            vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;\n            vec2 uv = ouv * s / new + offset;\n          \n            return texture2D(tex, uv);\n          }\n          void main() {\n            vec2 s = vUv;\n            s -= .5;\n            s *= 0.7;\n            s -= (speed * 0.03);\n            s += .5;\n            gl_FragColor = coverTexture(image, sizeImage, s);\n          }\n        "
                        }),
                        s = r.carpet(e, {
                            material: n,
                            uniforms: {
                                image: r.texture(e.querySelector("img").src),
                                speed: [0, 0]
                            }
                        }),
                        a = [0, 0];
                    ! function t() {
                        requestAnimationFrame(t), s.position[0] = La(s.position[0], i.coords[0] - s.bounds.width / 2, .13), s.position[1] = La(s.position[1], i.coords[1] - s.bounds.height / 2, .13), s.uniforms.speed[0] = La(s.uniforms.speed[0], .08 * (s.position[0] - a[0]), .7), s.uniforms.speed[1] = La(s.uniforms.speed[1], .08 * (s.position[1] - a[1]), .7), a[0] = s.position[0], a[1] = s.position[1]
                    }(), t.addEventListener("mouseenter", (function(t) {
                        Wr.to("canvas", {
                            opacity: 1,
                            duration: .3,
                            ease: "none"
                        })
                    })), t.addEventListener("mouseleave", (function(t) {
                        Wr.to("canvas", {
                            opacity: 0,
                            duration: .3,
                            ease: "none"
                        })
                    }))
                }))
            } catch (t) {}
        }

        function Va() {
            var t;
            ! function() {
                Wr.utils.toArray(".split-line").forEach((function(t, e) {
                    new Bs(t, {
                        type: "lines",
                        linesClass: "line"
                    })
                })), Wr.utils.toArray(".reveal-text").forEach((function(t, e) {
                    try {
                        var i = new Bs(t, {
                            type: "lines",
                            linesClass: "line"
                        });
                        Wr.utils.toArray(i.lines).forEach((function(t, e) {
                            var i = document.createElement("div");
                            i.classList.add("masking-text"), t.parentNode.insertBefore(i, t), i.appendChild(t)
                        }))
                    } catch (t) {}
                })), Wr.utils.toArray(".split-text").forEach((function(t, e) {
                    new Bs(t, {
                        type: "words, chars",
                        charsClass: "char",
                        wordsClass: "word"
                    })
                }));
                try {
                    Wr.utils.toArray(".parallax .parallax-image").forEach((function(t, e) {
                        Ls()(t).on("always", (function() {
                            Wr.set(t, {
                                yPercent: -30
                            }), Wr.to(t, {
                                scrollTrigger: {
                                    onUpdate: function(e) {
                                        Wr.set(t, {
                                            yPercent: 50 * e.progress - 30
                                        })
                                    },
                                    trigger: t,
                                    start: "top bottom",
                                    end: "200% center",
                                    once: !1,
                                    scrub: !0
                                }
                            }), Wr.from(t, {
                                scale: 1.25,
                                duration: 2,
                                ease: "expo.out",
                                scrollTrigger: {
                                    trigger: t
                                }
                            })
                        }))
                    }))
                } catch (t) {}
            }(), /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || Wr.utils.toArray(".cursor_hover").forEach((function(t, e) {
                    t.addEventListener("mouseenter", (function(t) {
                        Wr.to(".cursor__circle ", Gs)
                    })), t.addEventListener("mouseleave", (function(t) {
                        Wr.to(".cursor__circle ", js)
                    }))
                })), Wr.from(".header-nav-menu--list, .header-nav-address", {
                    y: 40,
                    opacity: 0,
                    delay: 1.4,
                    stagger: .15
                }),
                function() {
                    try {
                        var t = document.querySelector(".intro-bio-hide"),
                            e = !1;
                        t.addEventListener("click", (function(i) {
                            !1 === e ? (Wr.to(t, {
                                duration: 1,
                                scrambleText: "Good"
                            }), e = !0) : (Wr.to(t, {
                                duration: 1,
                                scrambleText: "Badn't"
                            }), e = !1)
                        }))
                    } catch (t) {}
                    var i = Wr.timeline({
                        delay: 1
                    });
                    if (i.from(".intro-bio-name .line, .intro-bio-title .line", Vs), i.from(".svg-scroll", zs, Hs.global_offset), Wr.to(".svg-scroll", {
                            rotation: 360,
                            ease: "none",
                            duration: 8,
                            repeat: -1,
                            scrollTrigger: {
                                trigger: "#intro",
                                start: "top bottom",
                                once: !1,
                                end: "bottom top-=20%",
                                toggleActions: "play pause resume resume"
                            }
                        }, Hs.global_offset), !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) try {
                        va("#intro")
                    } catch (t) {}
                }(),
                function() {
                    var t = Wr.timeline({
                            scrollTrigger: {
                                trigger: "#helloworld"
                            }
                        }),
                        e = document.querySelector(".helloworld-emoji"),
                        i = Da.a.loadAnimation({
                            container: e,
                            path: "/emojiheart.json",
                            lottie_config: Ns
                        });
                    ls.create({
                        trigger: "#helloworld",
                        start: "top bottom",
                        bottom: "bottom top",
                        once: !1,
                        onEnter: function() {
                            i.play()
                        },
                        onEnterBack: function() {
                            i.play()
                        },
                        onLeave: function() {
                            i.pause()
                        },
                        onLeaveBack: function() {
                            i.pause()
                        }
                    }), /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? (t.from(".helloworld-title .line", Vs), t.from(".helloworld-desc, .helloworld-link-wrap", zs, 0), t.set("#helloworld .reveal-image", {
                        autoAlpha: 1
                    }, 0), t.from("#helloworld .reveal-image", {
                        xPercent: -100,
                        duration: Hs.global_duration - .2,
                        ease: "expo.inOut"
                    }, 0), t.from("#helloworld .reveal-image img", {
                        xPercent: 100,
                        scale: 1.4,
                        duration: Hs.global_duration - .2,
                        ease: "expo.inOut"
                    }, Hs.global_offset_duration - .2)) : (t.set("#helloworld .reveal-image", {
                        autoAlpha: 1
                    }), t.from("#helloworld .reveal-image", {
                        xPercent: -100,
                        duration: Hs.global_duration - .2,
                        ease: "expo.inOut"
                    }), t.from("#helloworld .reveal-image img", {
                        xPercent: 100,
                        scale: 1.4,
                        duration: Hs.global_duration - .2,
                        ease: "expo.inOut"
                    }, Hs.global_offset_duration - .2), t.from(".helloworld-title .line", Vs, Hs.global_offset), t.from(".helloworld-desc, .helloworld-link-wrap", zs, Hs.global_offset));
                    var r = Wr.timeline({
                        scrollTrigger: {
                            trigger: ".helloworld-subtitle"
                        }
                    });
                    r.from(".helloworld-subtitle", Vs, Hs.global_offset_duration), r.from("#helloworld .social-media-list-item", zs, Hs.global_offset)
                }(), _a(),
                function() {
                    var t = Wr.timeline({
                        delay: 1.5,
                        repeat: -1,
                        defaults: {
                            stagger: 0
                        },
                        scrollTrigger: {
                            trigger: "#about",
                            start: "top bottom",
                            end: "bottom top",
                            once: !1,
                            toggleActions: "play pause resume resume"
                        }
                    });
                    t.to(".about-title-rollover", {
                        yPercent: -100
                    }), t.to(".about-title-rollover", {
                        yPercent: -200
                    }), t.to(".about-title-rollover", {
                        yPercent: -300
                    }), t.to(".about-title-rollover", {
                        yPercent: -400
                    }), t.to(".about-title-rollover", {
                        yPercent: -500
                    }), t.to(".about-title-rollover", {
                        yPercent: -600
                    }), t.to(".about-title-rollover", {
                        yPercent: -700
                    });
                    var e = Wr.timeline({
                        delay: 1
                    });
                    e.from(".about-title", zs), e.from(".about-desc .line", Vs, Hs.global_offset), Wr.timeline({
                        scrollTrigger: {
                            trigger: ".about-create-title .line"
                        }
                    }).from(".about-create-title .line", Vs);
                    var i = document.querySelector(".about-create-emoji"),
                        r = Da.a.loadAnimation({
                            container: i,
                            path: "/emojilove.json",
                            lottie_config: Ns
                        });
                    ls.create({
                        trigger: "#about-create",
                        start: "top bottom",
                        bottom: "bottom top",
                        once: !1,
                        onEnter: function() {
                            r.play()
                        },
                        onEnterBack: function() {
                            r.play()
                        },
                        onLeave: function() {
                            r.pause()
                        },
                        onLeaveBack: function() {
                            r.pause()
                        }
                    })
                }(), Ea(),
                function() {
                    Wr.timeline({
                        delay: .8
                    }).from("#work .work-page-title .line", Vs);
                    var t = Wr.timeline({
                        scrollTrigger: {
                            trigger: "#playground"
                        }
                    });
                    t.from("#playground .small-center", zs), t.from("#playground .work-page-title .line", Vs, 0), Wr.utils.toArray(".playground-card").forEach((function(t, e) {
                        var i = t.querySelector(".reveal-image"),
                            r = t.querySelector(".reveal-image img"),
                            n = Wr.timeline({
                                scrollTrigger: {
                                    trigger: t
                                }
                            });
                        n.set(i, {
                            autoAlpha: 1
                        }), n.from(i, {
                            xPercent: -100,
                            duration: Hs.global_duration - .2,
                            ease: "expo.inOut"
                        }), n.from(r, {
                            xPercent: 100,
                            scale: 1.4,
                            duration: Hs.global_duration - .2,
                            ease: "expo.inOut"
                        }, 0)
                    }))
                }(), (t = Wr.timeline({
                    delay: 1
                })).from(".case-title .line", Vs), t.from(".case-head-subtitle, .case-head-link-wrap, .case-content", {
                    y: 40,
                    opacity: 0,
                    stagger: 0
                }, Hs.global_offset), Wr.timeline({
                    scrollTrigger: {
                        trigger: ".case-next",
                        start: "center bottom"
                    }
                }).from(".case-next-title .line", Vs), qs.update()
        }

        function za() {
            Wr.config({
                nullTargetWarn: !1
            }), Wr.defaults({
                ease: Hs.global_ease,
                duration: Hs.global_duration,
                stagger: Hs.global_stagger
            }), ls.defaults({
                start: Hs.global_trigger,
                scroller: Hs.global_scroller,
                once: !0
            }), Xs(), /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? document.getElementById("cursor").style.display = "none" : (Qs(), Wr.utils.toArray(".header-nav-menu--list, .header-nav-address, .contact-cta-item-title, #contact .link, #cv .link").forEach((function(t, e) {
                t.addEventListener("mouseenter", (function(t) {
                    Wr.to(".cursor__circle ", Gs)
                })), t.addEventListener("mouseleave", (function(t) {
                    Wr.to(".cursor__circle ", js)
                }))
            }))), Zs((function() {
                Va(), Oa()
            }))
        }

        function Na() {
            var t, e;
            t = function() {
                Va()
            }, e = document.querySelector("#loading"), Wr.timeline({
                delay: .3,
                onComplete: t()
            }).to(e, {
                scaleY: 0,
                transformOrigin: "top",
                duration: Hs.global_duration - .2,
                ease: "expo.out",
                display: "none"
            })
        }
        Wr.registerPlugin(ls), Wr.registerPlugin(ls), Wr.registerPlugin(ls), Ia = function() {
            za()
        }, Ba = function() {
            Na()
        }, a.a.use(h.a), a.a.hooks.beforeEnter((function() {
            qs.destroy()
        })), a.a.hooks.after((function() {
            Xs(), ga("set", "page", window.location.pathname), ga("send", "pageview")
        })), a.a.hooks.afterEnter((function() {
            imagesLoaded("#main", {
                background: ".img"
            }).on("always", (function() {
                qs.update()
            }))
        })), a.a.init({
            sync: !0,
            transitions: [{
                name: "app-transition",
                leave: function() {
                    var t = this;
                    return Us(n.a.mark((function e() {
                        var i;
                        return n.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = t.async(), $s(), e.next = 4, Ks(1300);
                                case 4:
                                    i();
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                after: function() {
                    return Us(n.a.mark((function t() {
                        return n.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    Ba();
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                once: function() {
                    return Us(n.a.mark((function t() {
                        return n.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    Ia();
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            }],
            views: [{
                namespace: "home",
                beforeLeave: function() {
                    var t = document.querySelector("#cursor .cursor__skills");
                    try {
                        for (; t.firstChild;) t.removeChild(t.firstChild)
                    } catch (t) {}
                }
            }]
        })
    }
});