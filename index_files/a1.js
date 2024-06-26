// Copyright 2012 Google Inc. All rights reserved.

;(function () {
  var data = {
    resource: {
      version: '1',

      macros: [],
      tags: [],
      predicates: [],
      rules: [],
    },
    runtime: [],

    blob: { 1: '1' },
  }

  var ba,
    ha = function (a) {
      var b = 0
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }
      }
    },
    ia =
      'function' == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a
            a[b] = c.value
            return a
          },
    ja = function (a) {
      for (
        var b = [
            'object' == typeof globalThis && globalThis,
            a,
            'object' == typeof window && window,
            'object' == typeof self && self,
            'object' == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c]
        if (d && d.Math == Math) return d
      }
      throw Error('Cannot find global object')
    },
    ka = ja(this),
    la = function (a, b) {
      if (b)
        a: {
          for (var c = ka, d = a.split('.'), e = 0; e < d.length - 1; e++) {
            var f = d[e]
            if (!(f in c)) break a
            c = c[f]
          }
          var h = d[d.length - 1],
            l = c[h],
            m = b(l)
          m != l &&
            null != m &&
            ia(c, h, { configurable: !0, writable: !0, value: m })
        }
    },
    ma = function (a) {
      var b =
        'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator]
      if (b) return b.call(a)
      if ('number' == typeof a.length) return { next: ha(a) }
      throw Error(String(a) + ' is not an iterable or ArrayLike')
    },
    na = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value)
      return c
    },
    oa = function (a) {
      return a instanceof Array ? a : na(ma(a))
    },
    pa =
      'function' == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c]
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
          }
  la('Object.assign', function (a) {
    return a || pa
  })
  var qa =
      'function' == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {}
            b.prototype = a
            return new b()
          },
    ra
  if ('function' == typeof Object.setPrototypeOf) ra = Object.setPrototypeOf
  else {
    var sa
    a: {
      var ta = { a: !0 },
        ua = {}
      try {
        ua.__proto__ = ta
        sa = ua.a
        break a
      } catch (a) {}
      sa = !1
    }
    ra = sa
      ? function (a, b) {
          a.__proto__ = b
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible')
          return a
        }
      : null
  }
  var wa = ra,
    xa = function (a, b) {
      a.prototype = qa(b.prototype)
      a.prototype.constructor = a
      if (wa) wa(a, b)
      else
        for (var c in b)
          if ('prototype' != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c)
              d && Object.defineProperty(a, c, d)
            } else a[c] = b[c]
      a.fn = b.prototype
    },
    ya = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c]
      return b
    } /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var za = this || self,
    Aa = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    },
    Ba = function (a, b, c) {
      if (!a) throw Error()
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2)
        return function () {
          var e = Array.prototype.slice.call(arguments)
          Array.prototype.unshift.apply(e, d)
          return a.apply(b, e)
        }
      }
      return function () {
        return a.apply(b, arguments)
      }
    },
    Fa = function (a, b, c) {
      Fa =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf('native code')
          ? Aa
          : Ba
      return Fa.apply(null, arguments)
    },
    Ga = function (a) {
      return a
    } /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Ha = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Ia = function (a) {
      if (null == a) return String(a)
      var b = Ha.exec(Object.prototype.toString.call(Object(a)))
      return b ? b[1].toLowerCase() : 'object'
    },
    Ja = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b)
    },
    Ka = function (a) {
      if (!a || 'object' != Ia(a) || a.nodeType || a == a.window) return !1
      try {
        if (
          a.constructor &&
          !Ja(a, 'constructor') &&
          !Ja(a.constructor.prototype, 'isPrototypeOf')
        )
          return !1
      } catch (c) {
        return !1
      }
      for (var b in a);
      return void 0 === b || Ja(a, b)
    },
    g = function (a, b) {
      var c = b || ('array' == Ia(a) ? [] : {}),
        d
      for (d in a)
        if (Ja(a, d)) {
          var e = a[d]
          'array' == Ia(e)
            ? ('array' != Ia(c[d]) && (c[d] = []), (c[d] = g(e, c[d])))
            : Ka(e)
            ? (Ka(c[d]) || (c[d] = {}), (c[d] = g(e, c[d])))
            : (c[d] = e)
        }
      return c
    }
  function La() {
    for (var a = Ma, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c
    return b
  }
  function Na() {
    var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    a += a.toLowerCase() + '0123456789-_'
    return a + '.'
  }
  var Ma, Oa
  function Pa(a) {
    Ma = Ma || Na()
    Oa = Oa || La()
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        h = d ? a.charCodeAt(c + 1) : 0,
        l = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (h >> 4),
        p = ((h & 15) << 2) | (l >> 6),
        q = l & 63
      e || ((q = 64), d || (p = 64))
      b.push(Ma[m], Ma[n], Ma[p], Ma[q])
    }
    return b.join('')
  }
  function Qa(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Oa[n]
        if (null != p) return p
        if (!/^[\s\xa0]*$/.test(n))
          throw Error('Unknown base64 encoding at char: ' + n)
      }
      return m
    }
    Ma = Ma || Na()
    Oa = Oa || La()
    for (var c = '', d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        l = b(64)
      if (64 === l && -1 === e) return c
      c += String.fromCharCode((e << 2) | (f >> 4))
      64 !== h &&
        ((c += String.fromCharCode(((f << 4) & 240) | (h >> 2))),
        64 !== l && (c += String.fromCharCode(((h << 6) & 192) | l)))
    }
  }
  var Ra = {}
  function Sa(a, b) {
    Ra[a] = Ra[a] || []
    Ra[a][b] = !0
  }
  function Ta(a) {
    var b = Ra[a]
    if (!b || 0 === b.length) return ''
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8)
    0 < d && c.push(String.fromCharCode(d))
    return Pa(c.join('')).replace(/\.+$/, '')
  }
  function Ua() {
    for (var a = [], b = Ra.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c)
    return 0 < a.length ? a : void 0
  }
  function Va() {}
  function Wa(a) {
    return 'function' === typeof a
  }
  function k(a) {
    return 'string' === typeof a
  }
  function Xa(a) {
    return 'number' === typeof a && !isNaN(a)
  }
  function Ya(a) {
    return Array.isArray(a) ? a : [a]
  }
  function Za(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
  }
  function $a(a, b) {
    if (!Xa(a) || !Xa(b) || a > b) (a = 0), (b = 2147483647)
    return Math.floor(Math.random() * (b - a + 1) + a)
  }
  function ab(a, b) {
    for (var c = new bb(), d = 0; d < a.length; d++) c.set(a[d], !0)
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0
    return !1
  }
  function A(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
  }
  function cb(a) {
    return (
      !!a &&
      ('[object Arguments]' === Object.prototype.toString.call(a) ||
        Object.prototype.hasOwnProperty.call(a, 'callee'))
    )
  }
  function db(a) {
    return Math.round(Number(a)) || 0
  }
  function eb(a) {
    return 'false' === String(a).toLowerCase() ? !1 : !!a
  }
  function fb(a) {
    var b = []
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]))
    return b
  }
  function gb(a) {
    return a ? a.replace(/^\s+|\s+$/g, '') : ''
  }
  function hb() {
    return new Date(Date.now())
  }
  function ib() {
    return hb().getTime()
  }
  var bb = function () {
    this.prefix = 'gtm.'
    this.values = {}
  }
  bb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b
  }
  bb.prototype.get = function (a) {
    return this.values[this.prefix + a]
  }
  function jb(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c
  }
  function kb(a) {
    var b = a
    return function () {
      if (b) {
        var c = b
        b = void 0
        try {
          c()
        } catch (d) {}
      }
    }
  }
  function lb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
  }
  function mb(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || [])
    return c
  }
  function nb(a, b) {
    for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {}
    d[e[e.length - 1]] = b
    return c
  }
  var ob = /^\w{1,9}$/
  function pb(a, b) {
    a = a || {}
    b = b || ','
    var c = []
    A(a, function (d, e) {
      ob.test(d) && e && c.push(d)
    })
    return c.join(b)
  }
  function qb(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0))
    }
    var d = 0,
      e = a
    c.done = !1
    return c
  }
  function rb(a) {
    if (a) {
      var b = a.split(',')
      if (2 === b.length && b[0] === b[1]) return b[0]
    }
    return a
  }
  var sb,
    tb = function () {
      if (void 0 === sb) {
        var a = null,
          b = za.trustedTypes
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy('goog#html', {
              createHTML: Ga,
              createScript: Ga,
              createScriptURL: Ga,
            })
          } catch (c) {
            za.console && za.console.error(c.message)
          }
          sb = a
        } else sb = a
      }
      return sb
    }
  var ub = function (a) {
    this.D = a
  }
  ub.prototype.toString = function () {
    return this.D + ''
  }
  var vb = {} /*

 SPDX-License-Identifier: Apache-2.0
*/
  var wb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i
  var xb = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
      }
    : function (a, b) {
        if ('string' === typeof a)
          return 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0)
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c
        return -1
      }
  var yb = {},
    zb = function (a) {
      this.D = a
    }
  zb.prototype.toString = function () {
    return this.D.toString()
  }
  function Ab(a) {
    return null === a ? 'null' : void 0 === a ? 'undefined' : a
  }
  var F = window,
    H = document,
    Bb = navigator,
    Cb = function () {
      var a
      try {
        a = Bb.serviceWorker
      } catch (b) {
        return
      }
      return a
    },
    Db = H.currentScript && H.currentScript.src,
    Eb = function (a, b) {
      var c = F[a]
      F[a] = void 0 === c ? b : c
      return F[a]
    },
    Fb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b())
            }))
    },
    Gb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Hb = { onload: 1, src: 1, width: 1, height: 1, style: 1 }
  function Ib(a, b, c) {
    b &&
      A(b, function (d, e) {
        d = d.toLowerCase()
        c.hasOwnProperty(d) || a.setAttribute(d, e)
      })
  }
  var Jb = function (a, b, c, d, e) {
      var f = H.createElement('script')
      Ib(f, d, Gb)
      f.type = 'text/javascript'
      f.async = d && !1 === d.async ? !1 : !0
      var h,
        l = Ab(a),
        m = tb(),
        n = m ? m.createScriptURL(l) : l
      h = new ub(n, vb)
      f.src =
        h instanceof ub && h.constructor === ub
          ? h.D
          : 'type_error:TrustedResourceUrl'
      var p,
        q,
        r,
        t =
          null ==
          (r = (q = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : r.call(q, 'script[nonce]')
      ;(p = t ? t.nonce || t.getAttribute('nonce') || '' : '') &&
        f.setAttribute('nonce', p)
      Fb(f, b)
      c && (f.onerror = c)
      if (e) e.appendChild(f)
      else {
        var v = H.getElementsByTagName('script')[0] || H.body || H.head
        v.parentNode.insertBefore(f, v)
      }
      return f
    },
    Kb = function () {
      if (Db) {
        var a = Db.toLowerCase()
        if (0 === a.indexOf('https://')) return 2
        if (0 === a.indexOf('http://')) return 3
      }
      return 1
    },
    Lb = function (a, b, c, d, e) {
      var f
      f = void 0 === f ? !0 : f
      var h = e,
        l = !1
      h || ((h = H.createElement('iframe')), (l = !0))
      Ib(h, c, Hb)
      d &&
        A(d, function (n, p) {
          h.dataset[n] = p
        })
      f &&
        ((h.height = '0'),
        (h.width = '0'),
        (h.style.display = 'none'),
        (h.style.visibility = 'hidden'))
      void 0 !== a && (h.src = a)
      if (l) {
        var m = (H.body && H.body.lastChild) || H.body || H.head
        m.parentNode.insertBefore(h, m)
      }
      Fb(h, b)
      return h
    },
    Mb = function (a, b, c, d) {
      var e = new Image(1, 1)
      Ib(e, d, {})
      e.onload = function () {
        e.onload = null
        b && b()
      }
      e.onerror = function () {
        e.onerror = null
        c && c()
      }
      e.src = a
      return e
    },
    Nb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent('on' + b, c)
    },
    Ob = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent('on' + b, c)
    },
    K = function (a) {
      F.setTimeout(a, 0)
    },
    Pb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null
    },
    Qb = function (a) {
      var b = a.innerText || a.textContent || ''
      b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ''))
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '))
      return b
    },
    Rb = function (a) {
      var b = H.createElement('div'),
        c = b,
        d,
        e = Ab('A<div>' + a + '</div>'),
        f = tb(),
        h = f ? f.createHTML(e) : e
      d = new zb(h, yb)
      if (1 === c.nodeType) {
        var l = c.tagName
        if ('SCRIPT' === l || 'STYLE' === l) throw Error('')
      }
      c.innerHTML =
        d instanceof zb && d.constructor === zb ? d.D : 'type_error:SafeHtml'
      b = b.lastChild
      for (var m = []; b.firstChild; ) m.push(b.removeChild(b.firstChild))
      return m
    },
    Sb = function (a, b) {
      for (var c = {}, d = 0; d < b.length; d++) c[b[d]] = !0
      for (var e = a, f = 0; e && 100 >= f; f++) {
        if (c[String(e.tagName).toLowerCase()]) return e
        e = e.parentElement
      }
      return null
    },
    Tb = function (a) {
      var b
      try {
        b = Bb.sendBeacon && Bb.sendBeacon(a)
      } catch (c) {
        Sa('TAGGING', 15)
      }
      b || Mb(a)
    },
    Ub = function (a, b) {
      try {
        if (Bb.sendBeacon) return Bb.sendBeacon(a, b)
      } catch (c) {
        Sa('TAGGING', 15)
      }
      return !1
    },
    Vb = {
      cache: 'no-store',
      credentials: 'include',
      keepalive: !0,
      method: 'POST',
      mode: 'no-cors',
      redirect: 'follow',
    },
    Wb = function (a, b, c) {
      if ('fetch' in F) {
        var d = Object.assign({}, Vb)
        b && (d.body = b)
        c &&
          (c.attributionReporting &&
            (d.attributionReporting = c.attributionReporting),
          c.browsingTopics && (d.browsingTopics = c.browsingTopics))
        try {
          return F.fetch(a, d), !0
        } catch (e) {}
      }
      if (c && c.noFallback) return !1
      if (b) return Ub(a, b)
      Tb(a)
      return !0
    },
    Xb = function (a, b) {
      var c = a[b]
      c && 'string' === typeof c.animVal && (c = c.animVal)
      return c
    },
    Yb = function () {
      var a = F.performance
      if (a && Wa(a.now)) return a.now()
    },
    Zb = function () {
      return F.performance || void 0
    }
  var $b = function (a) {
    this.message = a
  }
  function ac(a) {
    var b = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
      a
    ]
    return void 0 === b
      ? new $b(
          'Value ' + a + ' can not be encoded in web-safe base64 dictionary.'
        )
      : b
  }
  function bc(a) {
    switch (a) {
      case 1:
        return '1'
      case 2:
      case 4:
        return '0'
      default:
        return '-'
    }
  }
  var cc = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/
  function dc(a, b) {
    for (var c = '', d = !0; 7 < a; ) {
      var e = a & 31
      a >>= 5
      d ? (d = !1) : (e |= 32)
      c = '' + ac(e) + c
    }
    a <<= 2
    d || (a |= 32)
    return (c = '' + ac(a | b) + c)
  }
  var ec = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b
        },
      }
    }
    return {
      Ui: a('consent'),
      Ag: a('convert_case_to'),
      Bg: a('convert_false_to'),
      Cg: a('convert_null_to'),
      Dg: a('convert_true_to'),
      Eg: a('convert_undefined_to'),
      fm: a('debug_mode_metadata'),
      na: a('function'),
      zf: a('instance_name'),
      Pj: a('live_only'),
      Qj: a('malware_disabled'),
      Rj: a('metadata'),
      Uj: a('original_activity_id'),
      Am: a('original_vendor_template_id'),
      zm: a('once_on_load'),
      Tj: a('once_per_event'),
      Qh: a('once_per_load'),
      Em: a('priority_override'),
      Fm: a('respected_consent_types'),
      Xh: a('setup_tags'),
      ud: a('tag_id'),
      hi: a('teardown_tags'),
    }
  })()
  var Ac
  var Bc = [],
    Cc = [],
    Dc = [],
    Ec = [],
    Gc = [],
    Hc = {},
    Ic,
    Jc,
    Kc = function (a) {
      Jc = Jc || a
    },
    Lc = function (a) {},
    Mc,
    Nc = [],
    Oc = [],
    Pc = function (a, b) {
      var c = a[ec.na],
        d = b && b.event
      if (!c) throw Error('Error: No function name given for function call.')
      var e = Hc[c],
        f =
          b &&
          2 === b.type &&
          d.reportMacroDiscrepancy &&
          e &&
          -1 !== Nc.indexOf(c),
        h = {},
        l = {},
        m
      for (m in a)
        a.hasOwnProperty(m) &&
          0 === m.indexOf('vtp_') &&
          (e && (h[m] = a[m]), !e || f) &&
          (l[m.substr(4)] = a[m])
      e &&
        d &&
        d.cachedModelValues &&
        (h.vtp_gtmCachedValues = d.cachedModelValues)
      if (b) {
        if (null == b.name) {
          var n
          a: {
            var p = b.type,
              q = b.index
            if (null == q) n = ''
            else {
              var r
              switch (p) {
                case 2:
                  r = Bc[q]
                  break
                case 1:
                  r = Ec[q]
                  break
                default:
                  n = ''
                  break a
              }
              var t = r && r[ec.zf]
              n = t ? String(t) : ''
            }
          }
          b.name = n
        }
        e && ((h.vtp_gtmEntityIndex = b.index), (h.vtp_gtmEntityName = b.name))
      }
      var v, u, w
      if (f && -1 === Oc.indexOf(c)) {
        Oc.push(c)
        var y = ib()
        v = e(h)
        var x = ib() - y,
          B = ib()
        u = Ac(c, l, b)
        w = x - (ib() - B)
      } else if ((e && (v = e(h)), !e || f)) u = Ac(c, l, b)
      if (f && d) {
        d.reportMacroDiscrepancy(d.id, c, void 0, !0)
        var z
        a: {
          var C = v
          if (void 0 == C || Array.isArray(C) || Ka(C)) z = !0
          else {
            switch (typeof C) {
              case 'boolean':
              case 'number':
              case 'string':
              case 'function':
                z = !0
                break a
            }
            z = !1
          }
        }
        z
          ? (Array.isArray(v)
              ? Array.isArray(u)
              : Ka(v)
              ? Ka(u)
              : 'function' === typeof v
              ? 'function' === typeof u
              : v === u) || d.reportMacroDiscrepancy(d.id, c)
          : v !== u && d.reportMacroDiscrepancy(d.id, c)
        void 0 != w && d.reportMacroDiscrepancy(d.id, c, w)
      }
      return e ? v : u
    },
    Rc = function (a, b, c) {
      c = c || []
      var d = {},
        e
      for (e in a) a.hasOwnProperty(e) && (d[e] = Qc(a[e], b, c))
      return d
    },
    Qc = function (a, b, c) {
      if (Array.isArray(a)) {
        var d
        switch (a[0]) {
          case 'function_id':
            return a[1]
          case 'list':
            d = []
            for (var e = 1; e < a.length; e++) d.push(Qc(a[e], b, c))
            return d
          case 'macro':
            var f = a[1]
            if (c[f]) return
            var h = Bc[f]
            if (!h || b.isBlocked(h)) return
            c[f] = !0
            var l = String(h[ec.zf])
            try {
              var m = Rc(h, b, c)
              m.vtp_gtmEventId = b.id
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId)
              d = Pc(m, { event: b, index: f, type: 2, name: l })
              Mc && (d = Mc.pk(d, m))
            } catch (x) {
              b.logMacroError && b.logMacroError(x, Number(f), l), (d = !1)
            }
            c[f] = !1
            return d
          case 'map':
            d = {}
            for (var n = 1; n < a.length; n += 2)
              d[Qc(a[n], b, c)] = Qc(a[n + 1], b, c)
            return d
          case 'template':
            d = []
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = Qc(a[q], b, c)
              Jc && (p = p || Jc.al(r))
              d.push(r)
            }
            return Jc && p ? Jc.sk(d) : d.join('')
          case 'escape':
            d = Qc(a[1], b, c)
            if (Jc && Array.isArray(a[1]) && 'macro' === a[1][0] && Jc.bl(a))
              return Jc.zl(d)
            d = String(d)
            for (var t = 2; t < a.length; t++) fc[a[t]] && (d = fc[a[t]](d))
            return d
          case 'tag':
            var v = a[1]
            if (!Ec[v])
              throw Error('Unable to resolve tag reference ' + v + '.')
            return { si: a[2], index: v }
          case 'zb':
            var u = { arg0: a[2], arg1: a[3], ignore_case: a[5] }
            u[ec.na] = a[1]
            var w = Sc(u, b, c),
              y = !!a[4]
            return y || 2 !== w ? y !== (1 === w) : null
          default:
            throw Error(
              'Attempting to expand unknown Value type: ' + a[0] + '.'
            )
        }
      }
      return a
    },
    Sc = function (a, b, c) {
      try {
        return Ic(Rc(a, b, c))
      } catch (d) {
        JSON.stringify(a)
      }
      return 2
    },
    Tc = function (a) {
      var b = a[ec.na]
      if (!b) throw Error('Error: No function name given for function call.')
      return !!Hc[b]
    }
  var Wc = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0
      }
      for (var c = [], d = [], e = Uc(a), f = 0; f < Cc.length; f++) {
        var h = Cc[f],
          l = Vc(h, e)
        if (l) {
          for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0
          b(h.block || [])
        } else null === l && b(h.block || [])
      }
      for (var p = [], q = 0; q < Ec.length; q++) c[q] && !d[q] && (p[q] = !0)
      return p
    },
    Vc = function (a, b) {
      for (var c = a['if'] || [], d = 0; d < c.length; d++) {
        var e = b(c[d])
        if (0 === e) return !1
        if (2 === e) return null
      }
      for (var f = a.unless || [], h = 0; h < f.length; h++) {
        var l = b(f[h])
        if (2 === l) return null
        if (1 === l) return !1
      }
      return !0
    },
    Uc = function (a) {
      var b = []
      return function (c) {
        void 0 === b[c] && (b[c] = Sc(Dc[c], a))
        return b[c]
      }
    }
  var Xc = {
    pk: function (a, b) {
      b[ec.Ag] &&
        'string' === typeof a &&
        (a = 1 == b[ec.Ag] ? a.toLowerCase() : a.toUpperCase())
      b.hasOwnProperty(ec.Cg) && null === a && (a = b[ec.Cg])
      b.hasOwnProperty(ec.Eg) && void 0 === a && (a = b[ec.Eg])
      b.hasOwnProperty(ec.Dg) && !0 === a && (a = b[ec.Dg])
      b.hasOwnProperty(ec.Bg) && !1 === a && (a = b[ec.Bg])
      return a
    },
  }
  var ed = {},
    fd =
      ((ed.uaa = !0),
      (ed.uab = !0),
      (ed.uafvl = !0),
      (ed.uamb = !0),
      (ed.uam = !0),
      (ed.uap = !0),
      (ed.uapv = !0),
      (ed.uaw = !0),
      ed)
  var md = [
      'matches',
      'webkitMatchesSelector',
      'mozMatchesSelector',
      'msMatchesSelector',
      'oMatchesSelector',
    ],
    nd = new bb()
  function ud(a) {
    return vd ? H.querySelectorAll(a) : null
  }
  function wd(a, b) {
    if (!vd) return null
    if (Element.prototype.closest)
      try {
        return a.closest(b)
      } catch (e) {
        return null
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a
    if (!H.documentElement.contains(d)) return null
    do {
      try {
        if (c.call(d, b)) return d
      } catch (e) {
        break
      }
      d = d.parentElement || d.parentNode
    } while (null !== d && 1 === d.nodeType)
    return null
  }
  var xd = !1
  if (H.querySelectorAll)
    try {
      var yd = H.querySelectorAll(':root')
      yd && 1 == yd.length && yd[0] == H.documentElement && (xd = !0)
    } catch (a) {}
  var vd = xd
  var zd = /^[0-9A-Fa-f]{64}$/
  function Ad(a) {
    try {
      return new TextEncoder().encode(a)
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c)
        128 > d
          ? b.push(d)
          : 2048 > d
          ? b.push(192 | (d >> 6), 128 | (d & 63))
          : 55296 > d || 57344 <= d
          ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
          : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
            b.push(
              240 | (d >> 18),
              128 | ((d >> 12) & 63),
              128 | ((d >> 6) & 63),
              128 | (d & 63)
            ))
      }
      return new Uint8Array(b)
    }
  }
  function Bd(a) {
    if ('' === a || 'e0' === a) return Promise.resolve(a)
    var b
    if (null == (b = F.crypto) ? 0 : b.subtle) {
      if (zd.test(a)) return Promise.resolve(a)
      try {
        var c = Ad(a)
        return F.crypto.subtle
          .digest('SHA-256', c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f)
              })
              .join('')
            return F.btoa(e)
              .replace(/\+/g, '-')
              .replace(/\//g, '_')
              .replace(/=+$/, '')
          })
          .catch(function () {
            return 'e2'
          })
      } catch (d) {
        return Promise.resolve('e2')
      }
    } else return Promise.resolve('e1')
  }
  function L(a) {
    Sa('GTM', a)
  }
  var M = {
      g: {
        oa: 'ad_personalization',
        O: 'ad_storage',
        N: 'ad_user_data',
        R: 'analytics_storage',
        Pd: 'region',
        ic: 'consent_updated',
        vg: 'wait_for_update',
        Xi: 'app_remove',
        Yi: 'app_store_refund',
        Zi: 'app_store_subscription_cancel',
        aj: 'app_store_subscription_convert',
        bj: 'app_store_subscription_renew',
        cj: 'consent_update',
        Gg: 'add_payment_info',
        Hg: 'add_shipping_info',
        jc: 'add_to_cart',
        kc: 'remove_from_cart',
        Ig: 'view_cart',
        Ib: 'begin_checkout',
        mc: 'select_item',
        ab: 'view_item_list',
        tb: 'select_promotion',
        cb: 'view_promotion',
        Ha: 'purchase',
        nc: 'refund',
        Ja: 'view_item',
        Jg: 'add_to_wishlist',
        dj: 'exception',
        ej: 'first_open',
        fj: 'first_visit',
        Z: 'gtag.config',
        Oa: 'gtag.get',
        gj: 'in_app_purchase',
        Jb: 'page_view',
        ij: 'screen_view',
        jj: 'session_start',
        kj: 'timing_complete',
        lj: 'track_social',
        oc: 'user_engagement',
        eb: 'gclgb',
        Pa: 'gclid',
        Kg: 'gclgs',
        Lg: 'gclst',
        ba: 'ads_data_redaction',
        Mg: 'gad_source',
        Nc: 'gclid_url',
        Ng: 'gclsrc',
        Ve: 'gbraid',
        Qd: 'wbraid',
        ka: 'allow_ad_personalization_signals',
        We: 'allow_custom_scripts',
        Xe: 'allow_display_features',
        Rd: 'allow_enhanced_conversions',
        fb: 'allow_google_signals',
        Ba: 'allow_interest_groups',
        mj: 'app_id',
        nj: 'app_installer_id',
        oj: 'app_name',
        pj: 'app_version',
        ub: 'auid',
        qj: 'auto_detection_enabled',
        Kb: 'aw_remarketing',
        Ye: 'aw_remarketing_only',
        Sd: 'discount',
        Td: 'aw_feed_country',
        Ud: 'aw_feed_language',
        aa: 'items',
        Vd: 'aw_merchant_id',
        Og: 'aw_basket_type',
        Oc: 'campaign_content',
        Pc: 'campaign_id',
        Qc: 'campaign_medium',
        Rc: 'campaign_name',
        Sc: 'campaign',
        Tc: 'campaign_source',
        Uc: 'campaign_term',
        hb: 'client_id',
        Pg: 'rnd',
        Ze: 'consent_update_type',
        rj: 'content_group',
        sj: 'content_type',
        Ua: 'conversion_cookie_prefix',
        Vc: 'conversion_id',
        qa: 'conversion_linker',
        Qg: 'conversion_linker_disabled',
        Lb: 'conversion_api',
        Wd: 'cookie_deprecation',
        Qa: 'cookie_domain',
        Ra: 'cookie_expires',
        Va: 'cookie_flags',
        qc: 'cookie_name',
        vb: 'cookie_path',
        Ka: 'cookie_prefix',
        sc: 'cookie_update',
        uc: 'country',
        xa: 'currency',
        Xd: 'customer_lifetime_value',
        Wc: 'custom_map',
        af: 'gcldc',
        Xc: 'dclid',
        tj: 'debug_mode',
        ja: 'developer_id',
        uj: 'disable_merchant_reported_purchases',
        Yc: 'dc_custom_params',
        vj: 'dc_natural_search',
        Rg: 'dynamic_event_settings',
        Sg: 'affiliation',
        Yd: 'checkout_option',
        bf: 'checkout_step',
        Tg: 'coupon',
        Zc: 'item_list_name',
        cf: 'list_name',
        wj: 'promotions',
        bd: 'shipping',
        df: 'tax',
        Zd: 'engagement_time_msec',
        ae: 'enhanced_client_id',
        be: 'enhanced_conversions',
        Ug: 'enhanced_conversions_automatic_settings',
        ce: 'estimated_delivery_date',
        ef: 'euid_logged_in_state',
        dd: 'event_callback',
        xj: 'event_category',
        jb: 'event_developer_id_string',
        yj: 'event_label',
        ed: 'event',
        de: 'event_settings',
        ee: 'event_timeout',
        zj: 'description',
        Aj: 'fatal',
        Bj: 'experiments',
        ff: 'firebase_id',
        vc: 'first_party_collection',
        fe: '_x_20',
        kb: '_x_19',
        Vg: 'fledge_drop_reason',
        Wg: 'fledge',
        Xg: 'flight_error_code',
        Yg: 'flight_error_message',
        Zg: 'fl_activity_category',
        ah: 'fl_activity_group',
        hf: 'fl_advertiser_id',
        bh: 'fl_ar_dedupe',
        jf: 'match_id',
        eh: 'fl_random_number',
        fh: 'tran',
        gh: 'u',
        he: 'gac_gclid',
        wc: 'gac_wbraid',
        hh: 'gac_wbraid_multiple_conversions',
        ih: 'ga_restrict_domain',
        kf: 'ga_temp_client_id',
        xc: 'gdpr_applies',
        jh: 'geo_granularity',
        wb: 'value_callback',
        lb: 'value_key',
        im: 'google_ng',
        jm: 'google_ono',
        Mb: 'google_signals',
        kh: 'google_tld',
        ie: 'groups',
        lh: 'gsa_experiment_id',
        mh: 'gtm_up',
        xb: 'iframe_state',
        fd: 'ignore_referrer',
        lf: 'internal_traffic_results',
        yb: 'is_legacy_converted',
        zb: 'is_legacy_loaded',
        je: 'is_passthrough',
        yc: '_lps',
        La: 'language',
        ke: 'legacy_developer_id_string',
        ra: 'linker',
        zc: 'accept_incoming',
        ob: 'decorate_forms',
        T: 'domains',
        Ab: 'url_position',
        nh: 'method',
        Cj: 'name',
        gd: 'new_customer',
        oh: 'non_interaction',
        Dj: 'optimize_id',
        Ej: 'page_hostname',
        hd: 'page_path',
        Ca: 'page_referrer',
        Bb: 'page_title',
        qh: 'passengers',
        rh: 'phone_conversion_callback',
        Fj: 'phone_conversion_country_code',
        sh: 'phone_conversion_css_class',
        Gj: 'phone_conversion_ids',
        th: 'phone_conversion_number',
        uh: 'phone_conversion_options',
        nf: '_protected_audience_enabled',
        jd: 'quantity',
        me: 'redact_device_info',
        pf: 'referral_exclusion_definition',
        Nb: 'restricted_data_processing',
        Hj: 'retoken',
        Ij: 'sample_rate',
        qf: 'screen_name',
        Cb: 'screen_resolution',
        Jj: 'search_term',
        Ia: 'send_page_view',
        Ob: 'send_to',
        Ac: 'server_container_url',
        kd: 'session_duration',
        ne: 'session_engaged',
        rf: 'session_engaged_time',
        pb: 'session_id',
        oe: 'session_number',
        tf: '_shared_user_id',
        ld: 'delivery_postal_code',
        km: 'temporary_client_id',
        uf: 'topmost_url',
        Kj: 'tracking_id',
        vf: 'traffic_type',
        ya: 'transaction_id',
        Db: 'transport_url',
        vh: 'trip_type',
        Pb: 'update',
        Sa: 'url_passthrough',
        pe: '_user_agent_architecture',
        qe: '_user_agent_bitness',
        se: '_user_agent_full_version_list',
        te: '_user_agent_mobile',
        ue: '_user_agent_model',
        ve: '_user_agent_platform',
        we: '_user_agent_platform_version',
        xe: '_user_agent_wow64',
        Da: 'user_data',
        wh: 'user_data_auto_latency',
        xh: 'user_data_auto_meta',
        yh: 'user_data_auto_multi',
        zh: 'user_data_auto_selectors',
        Ah: 'user_data_auto_status',
        md: 'user_data_mode',
        ye: 'user_data_settings',
        za: 'user_id',
        Wa: 'user_properties',
        Bh: '_user_region',
        ze: 'us_privacy_string',
        la: 'value',
        Ch: 'wbraid_multiple_conversions',
        Kh: '_host_name',
        Lh: '_in_page_command',
        Mh: '_is_passthrough_cid',
        qb: 'non_personalized_ads',
        sd: '_sst_parameters',
        ib: 'conversion_label',
        sa: 'page_location',
        nb: 'global_developer_id_string',
        Bc: 'tc_privacy_string',
      },
    },
    $d = {},
    ae = Object.freeze(
      (($d[M.g.ka] = 1),
      ($d[M.g.Xe] = 1),
      ($d[M.g.Rd] = 1),
      ($d[M.g.fb] = 1),
      ($d[M.g.aa] = 1),
      ($d[M.g.Qa] = 1),
      ($d[M.g.Ra] = 1),
      ($d[M.g.Va] = 1),
      ($d[M.g.qc] = 1),
      ($d[M.g.vb] = 1),
      ($d[M.g.Ka] = 1),
      ($d[M.g.sc] = 1),
      ($d[M.g.Wc] = 1),
      ($d[M.g.ja] = 1),
      ($d[M.g.Rg] = 1),
      ($d[M.g.dd] = 1),
      ($d[M.g.de] = 1),
      ($d[M.g.ee] = 1),
      ($d[M.g.vc] = 1),
      ($d[M.g.ih] = 1),
      ($d[M.g.Mb] = 1),
      ($d[M.g.kh] = 1),
      ($d[M.g.ie] = 1),
      ($d[M.g.lf] = 1),
      ($d[M.g.yb] = 1),
      ($d[M.g.zb] = 1),
      ($d[M.g.ra] = 1),
      ($d[M.g.pf] = 1),
      ($d[M.g.Nb] = 1),
      ($d[M.g.Ia] = 1),
      ($d[M.g.Ob] = 1),
      ($d[M.g.Ac] = 1),
      ($d[M.g.kd] = 1),
      ($d[M.g.rf] = 1),
      ($d[M.g.ld] = 1),
      ($d[M.g.Db] = 1),
      ($d[M.g.Pb] = 1),
      ($d[M.g.ye] = 1),
      ($d[M.g.Wa] = 1),
      ($d[M.g.sd] = 1),
      $d)
    )
  Object.freeze([
    M.g.sa,
    M.g.Ca,
    M.g.Bb,
    M.g.La,
    M.g.qf,
    M.g.za,
    M.g.ff,
    M.g.rj,
  ])
  var be = {},
    ce = Object.freeze(
      ((be[M.g.Xi] = 1),
      (be[M.g.Yi] = 1),
      (be[M.g.Zi] = 1),
      (be[M.g.aj] = 1),
      (be[M.g.bj] = 1),
      (be[M.g.ej] = 1),
      (be[M.g.fj] = 1),
      (be[M.g.gj] = 1),
      (be[M.g.jj] = 1),
      (be[M.g.oc] = 1),
      be)
    ),
    de = {},
    ee = Object.freeze(
      ((de[M.g.Gg] = 1),
      (de[M.g.Hg] = 1),
      (de[M.g.jc] = 1),
      (de[M.g.kc] = 1),
      (de[M.g.Ig] = 1),
      (de[M.g.Ib] = 1),
      (de[M.g.mc] = 1),
      (de[M.g.ab] = 1),
      (de[M.g.tb] = 1),
      (de[M.g.cb] = 1),
      (de[M.g.Ha] = 1),
      (de[M.g.nc] = 1),
      (de[M.g.Ja] = 1),
      (de[M.g.Jg] = 1),
      de)
    ),
    fe = Object.freeze([
      M.g.ka,
      M.g.fb,
      M.g.sc,
      M.g.vc,
      M.g.fd,
      M.g.Ia,
      M.g.Pb,
    ]),
    ge = Object.freeze([].concat(oa(fe))),
    he = Object.freeze([M.g.Ra, M.g.ee, M.g.kd, M.g.rf, M.g.Zd]),
    ie = Object.freeze([].concat(oa(he))),
    je = {},
    ke =
      ((je[M.g.O] = '1'),
      (je[M.g.R] = '2'),
      (je[M.g.N] = '3'),
      (je[M.g.oa] = '4'),
      je),
    le = {},
    me = Object.freeze(
      ((le[M.g.ka] = 1),
      (le[M.g.Rd] = 1),
      (le[M.g.Ba] = 1),
      (le[M.g.Kb] = 1),
      (le[M.g.Ye] = 1),
      (le[M.g.Sd] = 1),
      (le[M.g.Td] = 1),
      (le[M.g.Ud] = 1),
      (le[M.g.aa] = 1),
      (le[M.g.Vd] = 1),
      (le[M.g.Ua] = 1),
      (le[M.g.qa] = 1),
      (le[M.g.Qa] = 1),
      (le[M.g.Ra] = 1),
      (le[M.g.Va] = 1),
      (le[M.g.Ka] = 1),
      (le[M.g.xa] = 1),
      (le[M.g.Xd] = 1),
      (le[M.g.ja] = 1),
      (le[M.g.uj] = 1),
      (le[M.g.be] = 1),
      (le[M.g.ce] = 1),
      (le[M.g.ff] = 1),
      (le[M.g.vc] = 1),
      (le[M.g.yb] = 1),
      (le[M.g.zb] = 1),
      (le[M.g.La] = 1),
      (le[M.g.gd] = 1),
      (le[M.g.sa] = 1),
      (le[M.g.Ca] = 1),
      (le[M.g.rh] = 1),
      (le[M.g.sh] = 1),
      (le[M.g.th] = 1),
      (le[M.g.uh] = 1),
      (le[M.g.Nb] = 1),
      (le[M.g.Ia] = 1),
      (le[M.g.Ob] = 1),
      (le[M.g.Ac] = 1),
      (le[M.g.ld] = 1),
      (le[M.g.ya] = 1),
      (le[M.g.Db] = 1),
      (le[M.g.Pb] = 1),
      (le[M.g.Sa] = 1),
      (le[M.g.Da] = 1),
      (le[M.g.za] = 1),
      (le[M.g.la] = 1),
      le)
    ),
    ne = {},
    oe = Object.freeze(
      ((ne.search = 's'),
      (ne.youtube = 'y'),
      (ne.playstore = 'p'),
      (ne.shopping = 'h'),
      (ne.ads = 'a'),
      (ne.maps = 'm'),
      ne)
    )
  Object.freeze(M.g)
  var pe = {},
    qe = (F.google_tag_manager = F.google_tag_manager || {})
  pe.Af = '45m0'
  pe.rd = Number('0') || 0
  pe.Ga = 'dataLayer'
  pe.bm =
    'ChAI8N7QsgYQ3/Gg2ZP7zdVEEhkA/7woEtkZ/6Jime8yVVmW05Px/oeuBZ8UGgIQyw\x3d\x3d'
  var re = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    se = { __paused: 1, __tg: 1 },
    te
  for (te in re) re.hasOwnProperty(te) && (se[te] = 1)
  var ue = eb(''),
    ve,
    we = !1
  we = !0
  ve = we
  var xe,
    ye = !1
  xe = ye
  var ze,
    Ae = !1
  ze = Ae
  pe.Mc = 'www.googletagmanager.com'
  var Be = '' + pe.Mc + (ve ? '/gtag/js' : '/gtm.js'),
    Ce = null,
    De = null,
    Ee = {},
    Fe = {}
  function Ge() {
    var a = qe.sequence || 1
    qe.sequence = a + 1
    return a
  }
  pe.Vi = ''
  var He = ''
  pe.Ee = He
  var Ie = new (function () {
    this.D = ''
    this.K = this.F = !1
    this.Ma = this.P = this.X = this.H = ''
  })()
  function Je() {
    var a = Ie.H.length
    return '/' === Ie.H[a - 1] ? Ie.H.substring(0, a - 1) : Ie.H
  }
  function Ke(a) {
    for (var b = {}, c = ma(a.split('|')), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0
    return b
  }
  var Le = new bb(),
    Me = {},
    Pe = {},
    Se = {
      name: pe.Ga,
      set: function (a, b) {
        g(nb(a, b), Me)
        Qe()
      },
      get: function (a) {
        return Re(a, 2)
      },
      reset: function () {
        Le = new bb()
        Me = {}
        Qe()
      },
    }
  function Re(a, b) {
    return 2 != b ? Le.get(a) : Te(a)
  }
  function Te(a) {
    var b,
      c = a.split('.')
    b = b || []
    for (var d = Me, e = 0; e < c.length; e++) {
      if (null === d) return !1
      if (void 0 === d) break
      d = d[c[e]]
      if (-1 !== b.indexOf(d)) return
    }
    return d
  }
  function Ue(a, b) {
    Pe.hasOwnProperty(a) || (Le.set(a, b), g(nb(a, b), Me), Qe())
  }
  function Qe(a) {
    A(Pe, function (b, c) {
      Le.set(b, c)
      g(nb(b), Me)
      g(nb(b, c), Me)
      a && delete Pe[b]
    })
  }
  function Ve(a, b) {
    var c,
      d = 1 !== (void 0 === b ? 2 : b) ? Te(a) : Le.get(a)
    'array' === Ia(d) || 'object' === Ia(d) ? (c = g(d)) : (c = d)
    return c
  }
  var Ze = /:[0-9]+$/,
    $e = /^\d+\.fls\.doubleclick\.net$/,
    af = function (a, b, c) {
      for (var d = ma(a.split('&')), e = d.next(); !e.done; e = d.next()) {
        var f = ma(e.value.split('=')),
          h = f.next().value,
          l = na(f)
        if (decodeURIComponent(h.replace(/\+/g, ' ')) === b) {
          var m = l.join('=')
          return c ? m : decodeURIComponent(m.replace(/\+/g, ' '))
        }
      }
    },
    df = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase())
      if ('protocol' === b || 'port' === b)
        a.protocol = bf(a.protocol) || bf(F.location.protocol)
      'port' === b
        ? (a.port = String(
            Number(a.hostname ? a.port : F.location.port) ||
              ('http' === a.protocol ? 80 : 'https' === a.protocol ? 443 : '')
          ))
        : 'host' === b &&
          (a.hostname = (a.hostname || F.location.hostname)
            .replace(Ze, '')
            .toLowerCase())
      return cf(a, b, c, d, e)
    },
    cf = function (a, b, c, d, e) {
      var f,
        h = bf(a.protocol)
      b && (b = String(b).toLowerCase())
      switch (b) {
        case 'url_no_fragment':
          f = ef(a)
          break
        case 'protocol':
          f = h
          break
        case 'host':
          f = a.hostname.replace(Ze, '').toLowerCase()
          if (c) {
            var l = /^www\d*\./.exec(f)
            l && l[0] && (f = f.substr(l[0].length))
          }
          break
        case 'port':
          f = String(
            Number(a.port) || ('http' === h ? 80 : 'https' === h ? 443 : '')
          )
          break
        case 'path':
          a.pathname || a.hostname || Sa('TAGGING', 1)
          f = '/' === a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname
          var m = f.split('/')
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = '')
          f = m.join('/')
          break
        case 'query':
          f = a.search.replace('?', '')
          e && (f = af(f, e))
          break
        case 'extension':
          var n = a.pathname.split('.')
          f = 1 < n.length ? n[n.length - 1] : ''
          f = f.split('/')[0]
          break
        case 'fragment':
          f = a.hash.replace('#', '')
          break
        default:
          f = a && a.href
      }
      return f
    },
    bf = function (a) {
      return a ? a.replace(':', '').toLowerCase() : ''
    },
    ef = function (a) {
      var b = ''
      if (a && a.href) {
        var c = a.href.indexOf('#')
        b = 0 > c ? a.href : a.href.substr(0, c)
      }
      return b
    },
    ff = {},
    gf = 0,
    hf = function (a) {
      var b = ff[a]
      if (!b) {
        var c = H.createElement('a')
        a && (c.href = a)
        var d = c.pathname
        '/' !== d[0] && (a || Sa('TAGGING', 1), (d = '/' + d))
        var e = c.hostname.replace(Ze, '')
        b = {
          href: c.href,
          protocol: c.protocol,
          host: c.host,
          hostname: e,
          pathname: d,
          search: c.search,
          hash: c.hash,
          port: c.port,
        }
        5 > gf && ((ff[a] = b), gf++)
      }
      return b
    },
    jf = function (a) {
      function b(n) {
        var p = n.split('=')[0]
        return 0 > d.indexOf(p) ? n : p + '=0'
      }
      function c(n) {
        return n
          .split('&')
          .map(b)
          .filter(function (p) {
            return void 0 !== p
          })
          .join('&')
      }
      var d =
          'gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl'.split(
            ' '
          ),
        e = hf(a),
        f = a.split(/[?#]/)[0],
        h = e.search,
        l = e.hash
      '?' === h[0] && (h = h.substring(1))
      '#' === l[0] && (l = l.substring(1))
      h = c(h)
      l = c(l)
      '' !== h && (h = '?' + h)
      '' !== l && (l = '#' + l)
      var m = '' + f + h + l
      '/' === m[m.length - 1] && (m = m.substring(0, m.length - 1))
      return m
    },
    kf = function (a) {
      var b = hf(F.location.href),
        c = df(b, 'host', !1)
      if (c && c.match($e)) {
        var d = df(b, 'path').split(a + '=')
        if (1 < d.length) return d[1].split(';')[0].split('?')[0]
      }
    }
  var lf = {
    'https://www.google.com': '/g',
    'https://www.googleadservices.com': '/as',
    'https://pagead2.googlesyndication.com': '/gs',
  }
  function mf(a, b) {
    if (a) {
      var c = '' + a
      0 !== c.indexOf('http://') &&
        0 !== c.indexOf('https://') &&
        (c = 'https://' + c)
      '/' === c[c.length - 1] && (c = c.substring(0, c.length - 1))
      return hf('' + c + b).href
    }
  }
  function nf() {
    return !!pe.Ee && 'SGTM_TOKEN' !== pe.Ee.split('@@').join('')
  }
  function of(a) {
    for (var b = ma([M.g.Ac, M.g.Db]), c = b.next(); !c.done; c = b.next()) {
      var d = P(a, c.value)
      if (d) return d
    }
  }
  function pf(a, b) {
    return Ie.F ? '' + Je() + (b ? lf[a] || '' : '') : a
  }
  function qf(a) {
    var b = String(a[ec.na] || '').replace(/_/g, '')
    0 === b.indexOf('cvt') && (b = 'cvt')
    return b
  }
  var rf =
    0 <= F.location.search.indexOf('?gtm_latency=') ||
    0 <= F.location.search.indexOf('&gtm_latency=')
  var tf = function (a) {
      var b = sf()
      b.pending || (b.pending = [])
      Za(b.pending, function (c) {
        return (
          c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
        )
      }) || b.pending.push({ target: a, onLoad: void 0 })
    },
    uf = function () {
      this.container = {}
      this.destination = {}
      this.canonical = {}
      this.pending = []
      this.siloed = []
    },
    sf = function () {
      var a = Eb('google_tag_data', {}),
        b = a.tidr
      b || ((b = new uf()), (a.tidr = b))
      return b
    }
  var vf = {},
    wf = !1,
    xf = { ctid: '', canonicalContainerId: '', Ci: '', Di: '' }
  vf.od = eb('')
  function yf() {
    var a = zf()
    return wf ? a.map(Af) : a
  }
  function Bf() {
    var a = Cf()
    return wf ? a.map(Af) : a
  }
  function Df() {
    return Ef(xf.ctid)
  }
  function Ff() {
    return Ef(xf.canonicalContainerId || '_' + xf.ctid)
  }
  function zf() {
    return xf.Ci ? xf.Ci.split('|') : [xf.ctid]
  }
  function Cf() {
    return xf.Di ? xf.Di.split('|') : []
  }
  function Gf() {
    var a = Hf(If()),
      b = a && a.parent
    if (b) return Hf(b)
  }
  function Jf() {
    var a = Hf(If())
    if (a) {
      for (; a.parent; ) {
        var b = Hf(a.parent)
        if (!b) break
        a = b
      }
      return a
    }
  }
  function Hf(a) {
    var b = sf()
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
  }
  function Ef(a) {
    return wf ? Af(a) : a
  }
  function Af(a) {
    return 'siloed_' + a
  }
  function Kf(a) {
    return wf ? Lf(a) : a
  }
  function Lf(a) {
    a = String(a)
    return 0 === a.indexOf('siloed_') ? a.substring(7) : a
  }
  function Mf() {
    var a = !1
    if (a) {
      var b = sf()
      if (b.siloed) {
        for (
          var c = [], d = zf().map(Af), e = Cf().map(Af), f = {}, h = 0;
          h < b.siloed.length;
          f = { He: void 0 }, h++
        )
          (f.He = b.siloed[h]),
            !wf &&
            Za(
              f.He.isDestination ? e : d,
              (function (l) {
                return function (m) {
                  return m === l.He.ctid
                }
              })(f)
            )
              ? (wf = !0)
              : c.push(f.He)
        b.siloed = c
      }
    }
  }
  function Nf() {
    var a = sf()
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = yf(), f = Bf(), h = {}, l = 0;
        l < a.pending.length;
        h = { Md: void 0 }, l++
      )
        (h.Md = a.pending[l]),
          Za(
            h.Md.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Md.target.ctid
              }
            })(h)
          )
            ? d || ((b = h.Md.onLoad), (d = !0))
            : c.push(h.Md)
      a.pending = c
      if (b)
        try {
          b(Ff())
        } catch (m) {}
    }
  }
  function Of() {
    for (
      var a = xf.ctid,
        b = yf(),
        c = Bf(),
        d = function (n, p) {
          var q = {
            canonicalContainerId: xf.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          }
          Db && (q.scriptSource = Db)
          var r = p ? e.destination : e.container,
            t = r[n]
          t ? (p && 0 === t.state && L(93), Object.assign(t, q)) : (r[n] = q)
        },
        e = sf(),
        f = ma(b),
        h = f.next();
      !h.done;
      h = f.next()
    )
      d(h.value, !1)
    for (var l = ma(c), m = l.next(); !m.done; m = l.next()) d(m.value, !0)
    e.canonical[Ff()] = {}
    Nf()
  }
  function If() {
    return { ctid: Df(), isDestination: vf.od }
  }
  function Pf(a) {
    var b = sf()
    ;(b.siloed = b.siloed || []).push(a)
  }
  function Qf() {
    var a = sf().container,
      b
    for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0
    return !1
  }
  function Rf() {
    var a = {}
    A(sf().destination, function (b, c) {
      0 === c.state && (a[Lf(b)] = c)
    })
    return a
  }
  function Sf(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      1 === a.context.source &&
      0 !== a.parent.ctid.indexOf('GTM-')
    )
  }
  var Tf = { sampleRate: '0.005000', Si: '', Ri: Number('5'), gn: Number('') },
    Uf = [],
    Vf = []
  function Wf(a) {
    Uf.push(a)
  }
  var Xf = !1,
    Yf
  if (!(Yf = rf)) {
    var Zf = Math.random(),
      $f = Tf.sampleRate
    Yf = Zf < Number($f)
  }
  var dg = Yf,
    eg = '?id=' + xf.ctid,
    fg = void 0,
    gg = {},
    hg = void 0,
    ig = new (function () {
      var a = 5
      0 < Tf.Ri && (a = Tf.Ri)
      this.F = a
      this.D = 0
      this.H = []
    })(),
    jg = 1e3
  function kg(a, b, c, d) {
    var e = fg
    if (void 0 === e)
      if (c) e = Ge()
      else return ''
    for (
      var f = [pf('https://www.googletagmanager.com'), a ? '/td' : '/a', eg],
        h = ma(a ? Vf : Uf),
        l = h.next();
      !l.done;
      l = h.next()
    )
      for (
        var m = l.value,
          n = m({
            eventId: e,
            Na: !!b,
            ri: !!d,
            ac: function () {
              Xf = !0
            },
          }),
          p = ma(n),
          q = p.next();
        !q.done;
        q = p.next()
      ) {
        var r = ma(q.value),
          t = r.next().value,
          v = r.next().value
        f.push('&' + t + '=' + v)
      }
    f.push('&z=0')
    return f.join('')
  }
  function lg() {
    var a = kg(!0, !0)
    Xf && (Mb(a), (Xf = !1))
  }
  function mg() {
    hg && (F.clearTimeout(hg), (hg = void 0))
    if (void 0 !== fg && ng) {
      lg()
      var a
      ;(a = gg[fg]) || (a = ig.D < ig.F ? !1 : 1e3 > ib() - ig.H[ig.D % ig.F])
      if (a || 0 >= jg--) L(1), (gg[fg] = !0)
      else {
        var b = ig.D++ % ig.F
        ig.H[b] = ib()
        var c = kg(!1, !0)
        Mb(c)
        ng = Xf = !1
      }
    }
  }
  var ng = !1
  function og(a) {
    gg[a]
      ? lg()
      : (a !== fg && (mg(), (fg = a)),
        (ng = !0),
        hg || (hg = F.setTimeout(mg, 500)),
        2022 <= kg(!1).length && mg())
  }
  var pg = $a()
  function qg() {
    pg = $a()
  }
  function rg() {
    return [
      ['v', '3'],
      ['t', 't'],
      ['pid', String(pg)],
    ]
  }
  var sg = function (a, b) {
      var c = function () {}
      c.prototype = a.prototype
      var d = new c()
      a.apply(d, Array.prototype.slice.call(arguments, 1))
      return d
    },
    tg = function (a) {
      var b = a
      return function () {
        if (b) {
          var c = b
          b = null
          c()
        }
      }
    }
  var ug = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1)
  }
  var vg, wg
  a: {
    for (var xg = ['CLOSURE_FLAGS'], yg = za, zg = 0; zg < xg.length; zg++)
      if (((yg = yg[xg[zg]]), null == yg)) {
        wg = null
        break a
      }
    wg = yg
  }
  var Ag = wg && wg[610401301]
  vg = null != Ag ? Ag : !1
  var Bg,
    Cg = za.navigator
  Bg = Cg ? Cg.userAgentData || null : null
  function Dg(a) {
    return vg
      ? Bg
        ? Bg.brands.some(function (b) {
            var c = b.brand
            return c && -1 != c.indexOf(a)
          })
        : !1
      : !1
  }
  function Eg(a) {
    var b
    a: {
      var c = za.navigator
      if (c) {
        var d = c.userAgent
        if (d) {
          b = d
          break a
        }
      }
      b = ''
    }
    return -1 != b.indexOf(a)
  }
  function Fg() {
    return vg ? !!Bg && 0 < Bg.brands.length : !1
  }
  function Gg() {
    return Fg()
      ? Dg('Chromium')
      : ((Eg('Chrome') || Eg('CriOS')) && !(Fg() ? 0 : Eg('Edge'))) ||
          Eg('Silk')
  }
  var Hg = function (a) {
    Hg[' '](a)
    return a
  }
  Hg[' '] = function () {}
  var Ig = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var h = a.charCodeAt(e - 1)
        if (38 == h || 63 == h) {
          var l = a.charCodeAt(e + f)
          if (!l || 61 == l || 38 == l || 35 == l) return e
        }
        e += f + 1
      }
      return -1
    },
    Jg = /#|$/,
    Kg = function (a, b) {
      var c = a.search(Jg),
        d = Ig(a, 0, b, c)
      if (0 > d) return null
      var e = a.indexOf('&', d)
      if (0 > e || e > c) e = c
      d += b.length + 1
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, ' ')
      )
    },
    Lg = /[?&]($|#)/,
    Mg = function (a, b, c) {
      for (
        var d, e = a.search(Jg), f = 0, h, l = [];
        0 <= (h = Ig(a, f, b, e));

      )
        l.push(a.substring(f, h)), (f = Math.min(a.indexOf('&', h) + 1 || e, e))
      l.push(a.slice(f))
      d = l.join('').replace(Lg, '$1')
      var m,
        n = null != c ? '=' + encodeURIComponent(String(c)) : ''
      var p = b + n
      if (p) {
        var q,
          r = d.indexOf('#')
        0 > r && (r = d.length)
        var t = d.indexOf('?'),
          v
        0 > t || t > r ? ((t = r), (v = '')) : (v = d.substring(t + 1, r))
        q = [d.slice(0, t), v, d.slice(r)]
        var u = q[1]
        q[1] = p ? (u ? u + '&' + p : p) : u
        m = q[0] + (q[1] ? '?' + q[1] : '') + q[2]
      } else m = d
      return m
    }
  var Ng = function (a) {
      try {
        var b
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              Hg(a.foo)
              b = !0
              break a
            } catch (c) {}
            b = !1
          }
        return b
      } catch (c) {
        return !1
      }
    },
    Og = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
  function Pg(a) {
    if (!a || !H.head) return null
    var b = Qg('META')
    H.head.appendChild(b)
    b.httpEquiv = 'origin-trial'
    b.content = a
    return b
  }
  var Rg = function (a) {
      if (F.top == F) return 0
      if (void 0 === a ? 0 : a) {
        var b = F.location.ancestorOrigins
        if (b) return b[b.length - 1] == F.location.origin ? 1 : 2
      }
      return Ng(F.top) ? 1 : 2
    },
    Qg = function (a, b) {
      b = void 0 === b ? document : b
      return b.createElement(String(a).toLowerCase())
    }
  var Sg = '',
    Tg,
    Ug = [],
    Vg = !1
  function Wg() {
    var a = []
    Sg && a.push(['dl', encodeURIComponent(Sg)])
    0 < Ug.length && a.push(['tdp', Ug.join('.')])
    void 0 !== Tg && a.push(['frm', String(Tg)])
    return a
  }
  var Xg = function (a) {
    var b = Vg ? [] : Wg()
    !Vg && a.Na && ((Vg = !0), b.length && a.ac())
    return b
  }
  var Yg = [],
    Zg = []
  function $g(a) {
    ;-1 === Zg.indexOf(a) && (Yg.push(a), Zg.push(a))
  }
  function ah(a) {
    if (!Yg.length) return []
    for (var b = Wg(), c = ma(Yg), d = c.next(); !d.done; d = c.next())
      b.push([d.value, '1'])
    a.Na && (a.ac(), (Yg.length = 0))
    return b
  }
  function bh(a, b) {
    if ('' === a) return b
    var c = Number(a)
    return isNaN(c) ? b : c
  }
  var ch = [],
    dh = {}
  function eh(a) {
    return void 0 === ch[a] ? !1 : ch[a]
  }
  var fh = []
  function gh(a) {
    switch (a) {
      case 0:
        return 0
      case 28:
        return 7
      case 36:
        return 1
      case 37:
        return 2
      case 44:
        return 3
      case 53:
        return 6
      case 63:
        return 4
      case 72:
        return 5
      case 77:
        return 8
    }
  }
  function Q(a) {
    fh[a] = !0
    var b = gh(a)
    void 0 !== b && (ch[b] = !0)
  }
  Q(25)
  Q(21)
  Q(22)
  Q(23)
  Q(24)
  Q(38)
  Q(58)
  Q(42)
  Q(55)
  Q(27)
  Q(14)
  Q(80)
  Q(13)
  Q(87)
  Q(79)
  Q(45)
  Q(65)
  Q(34)
  Q(6)
  Q(4)
  Q(61)
  Q(75)
  Q(51)
  Q(48)
  Q(70)
  Q(85)
  Q(64)
  Q(84)
  Q(62)
  Q(90)
  Q(88)
  Q(63)
  Q(5)
  Q(72)
  Q(67)
  dh[1] = bh('1', 6e4)
  dh[3] = bh('10', 1)
  dh[2] = bh('', 50)
  Q(11)
  Q(41)
  Q(71)
  Q(83)
  Q(76)
  Q(28)
  Q(52)

  function S(a) {
    return !!fh[a]
  }
  function kh(a) {
    Sa('HEALTH', a)
  }
  var lh
  try {
    lh = JSON.parse(
      Qa(
        'eyIwIjoiVk4iLCIxIjoiVk4tU0ciLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20udm4iLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ'
      )
    )
  } catch (a) {
    L(123), kh(2), (lh = {})
  }
  function mh() {
    var a = !1
    return a
  }
  function nh() {
    var a = ''
    return a
  }
  function oh() {
    var a = !1
    return a
  }
  function ph() {
    var a = ''
    return a
  }
  var qh = new (function (a, b) {
    this.D = a
    this.defaultValue = void 0 === b ? !1 : b
  })(1933)
  function rh() {
    var a = Eb('google_tag_data', {})
    return (a.ics = a.ics || new sh())
  }
  var sh = function () {
    this.entries = {}
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1
    this.D = []
  }
  sh.prototype.default = function (a, b, c, d, e, f, h) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0)
    this.usedDefault = this.active = !0
    Sa('TAGGING', 19)
    null == b ? Sa('TAGGING', 18) : th(this, a, 'granted' === b, c, d, e, f, h)
  }
  sh.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      th(this, a[d], void 0, void 0, '', '', b, c)
  }
  var th = function (a, b, c, d, e, f, h, l) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && k(d) ? d.toUpperCase() : void 0
    e = e.toUpperCase()
    f = f.toUpperCase()
    if ('' === e || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(h && 0 < h && void 0 === n.update),
        t = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: void 0 !== c ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        }
      if ('' !== e || !1 !== n.default) m[b] = t
      r &&
        F.setTimeout(function () {
          m[b] === t &&
            t.quiet &&
            (Sa('TAGGING', 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, l),
            a.notifyListeners())
        }, h)
    }
  }
  ba = sh.prototype
  ba.clearTimeout = function (a, b, c) {
    var d = [a],
      e = (null == c ? void 0 : c.delegatedConsentTypes) || {},
      f
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f)
    var h = this.entries[a] || {},
      l = this.getConsentState(a, c)
    if (h.quiet) {
      h.quiet = !1
      for (var m = ma(d), n = m.next(); !n.done; n = m.next()) uh(this, n.value)
    } else if (void 0 !== b && l !== b)
      for (var p = ma(d), q = p.next(); !q.done; q = p.next()) uh(this, q.value)
  }
  ba.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0)
    this.usedUpdate = this.active = !0
    if (null != b) {
      var d = this.getConsentState(a, c),
        e = this.entries
      ;(e[a] = e[a] || {}).update = 'granted' === b
      this.clearTimeout(a, d, c)
    }
  }
  ba.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0
    var f = this.entries,
      h = f[a] || {},
      l = h.declare_region,
      m = c && k(c) ? c.toUpperCase() : void 0
    d = d.toUpperCase()
    e = e.toUpperCase()
    if ('' === d || m === e || (m === d ? l !== e : !m && !l)) {
      var n = {
        region: h.region,
        declare_region: m,
        declare: 'granted' === b,
        implicit: h.implicit,
        default: h.default,
        update: h.update,
        quiet: h.quiet,
      }
      if ('' !== d || !1 !== h.declare) f[a] = n
    }
  }
  ba.implicit = function (a, b) {
    this.usedImplicit = !0
    var c = this.entries,
      d = (c[a] = c[a] || {})
    !1 !== d.implicit && (d.implicit = 'granted' === b)
  }
  ba.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update
    if (void 0 !== e) return e ? 1 : 2
    e = d.default
    if (void 0 !== e) return e ? 1 : 2
    if (null == b ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var f = c[b.delegatedConsentTypes[a]] || {}
      e = f.update
      if (void 0 !== e) return e ? 1 : 2
      e = f.default
      if (void 0 !== e) return e ? 1 : 2
    }
    e = d.declare
    if (void 0 !== e) return e ? 1 : 2
    e = d.implicit
    return void 0 !== e ? (e ? 3 : 4) : 0
  }
  ba.addListener = function (a, b) {
    this.D.push({ consentTypes: a, Ak: b })
  }
  var uh = function (a, b) {
    for (var c = 0; c < a.D.length; ++c) {
      var d = a.D[c]
      Array.isArray(d.consentTypes) &&
        -1 !== d.consentTypes.indexOf(b) &&
        (d.Ei = !0)
    }
  }
  sh.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.D.length; ++c) {
      var d = this.D[c]
      if (d.Ei) {
        d.Ei = !1
        try {
          d.Ak({ consentEventId: a, consentPriorityId: b })
        } catch (e) {}
      }
    }
  }
  var wh = function () {
    var a = vh,
      b = 'Vf'
    if (a.Vf && a.hasOwnProperty(b)) return a.Vf
    var c = new a()
    return (a.Vf = c)
  }
  var vh = function () {
    var a = {}
    this.D = function () {
      var b = qh.D,
        c = qh.defaultValue
      return null != a[b] ? a[b] : c
    }
    this.F = function () {
      a[qh.D] = !0
    }
  }
  var xh = !1,
    yh = !1,
    zh = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
    },
    Ah = function (a) {
      var b = rh()
      b.accessedAny = !0
      return (k(a) ? [a] : a).every(function (c) {
        switch (b.getConsentState(c, zh)) {
          case 1:
          case 3:
            return !0
          case 2:
          case 4:
            return !1
          default:
            return !0
        }
      })
    },
    Bh = function (a) {
      var b = rh()
      b.accessedAny = !0
      return b.getConsentState(a, zh)
    },
    Ch = function (a) {
      for (var b = {}, c = ma(a), d = c.next(); !d.done; d = c.next()) {
        var e = d.value
        b[e] = !1 !== zh.corePlatformServices[e]
      }
      return b
    },
    Dh = function (a) {
      var b = rh()
      b.accessedAny = !0
      return !(b.entries[a] || {}).quiet
    },
    Eh = function () {
      if (!wh().D()) return !1
      var a = rh()
      a.accessedAny = !0
      return a.active
    },
    Fh = function (a, b) {
      rh().addListener(a, b)
    },
    Gh = function (a, b) {
      rh().notifyListeners(a, b)
    },
    Hh = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Dh(b[e])) return !0
        return !1
      }
      if (c()) {
        var d = !1
        Fh(b, function (e) {
          d || c() || ((d = !0), a(e))
        })
      } else a({})
    },
    Ih = function (a, b) {
      function c() {
        for (var l = [], m = 0; m < e.length; m++) {
          var n = e[m]
          Ah(n) && !f[n] && l.push(n)
        }
        return l
      }
      function d(l) {
        for (var m = 0; m < l.length; m++) f[l[m]] = !0
      }
      var e = k(b) ? [b] : b,
        f = {},
        h = c()
      h.length !== e.length &&
        (d(h),
        Fh(e, function (l) {
          function m(q) {
            0 !== q.length && (d(q), (l.consentTypes = q), a(l))
          }
          var n = c()
          if (0 !== n.length) {
            var p = Object.keys(f).length
            n.length + p >= e.length
              ? m(n)
              : F.setTimeout(function () {
                  m(c())
                }, 500)
          }
        }))
    }
  var Jh = [M.g.O, M.g.R, M.g.N, M.g.oa],
    Kh,
    Lh
  function Sh(a) {
    for (
      var b = a[M.g.Pd], c = Array.isArray(b) ? b : [b], d = { Bd: 0 };
      d.Bd < c.length;
      d = { Bd: d.Bd }, ++d.Bd
    )
      A(
        a,
        (function (e) {
          return function (f, h) {
            if (f !== M.g.Pd) {
              var l = c[e.Bd],
                m = lh['0'] || '',
                n = lh['1'] || ''
              yh = !0
              xh && Sa('TAGGING', 20)
              rh().declare(f, h, l, m, n)
            }
          }
        })(d)
      )
  }
  function Th(a) {
    !Lh && Kh && $g('crc')
    Lh = !0
    var b = a[M.g.Pd]
    b && L(40)
    var c = a[M.g.vg]
    c && L(41)
    for (
      var d = Array.isArray(b) ? b : [b], e = { Cd: 0 };
      e.Cd < d.length;
      e = { Cd: e.Cd }, ++e.Cd
    )
      A(
        a,
        (function (f) {
          return function (h, l) {
            if (h !== M.g.Pd && h !== M.g.vg) {
              var m = d[f.Cd],
                n = Number(c),
                p = lh['0'] || '',
                q = lh['1'] || ''
              n = void 0 === n ? 0 : n
              xh = !0
              yh && Sa('TAGGING', 20)
              rh().default(h, l, m, p, q, n, zh)
            }
          }
        })(e)
      )
  }
  function Uh(a, b) {
    Kh = !0
    A(a, function (c, d) {
      xh = !0
      yh && Sa('TAGGING', 20)
      rh().update(c, d, zh)
    })
    Gh(b.eventId, b.priorityId)
  }
  function T(a) {
    Array.isArray(a) || (a = [a])
    return a.every(function (b) {
      return Ah(b)
    })
  }
  function Vh(a, b) {
    Fh(a, b)
  }
  function Wh(a, b) {
    Ih(a, b)
  }
  function Xh(a, b) {
    Hh(a, b)
  }
  function Yh() {
    var a = [M.g.O, M.g.oa, M.g.N]
    rh().waitForUpdate(a, 500, zh)
  }
  function Zh(a) {
    for (var b = ma(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value
      rh().clearTimeout(d, void 0, zh)
    }
    Gh()
  }
  var $h = function () {
    if (void 0 === qe.pscdl) {
      var a = function (b) {
        qe.pscdl = b
      }
      try {
        'cookieDeprecationLabel' in Bb
          ? (a('pending'), Bb.cookieDeprecationLabel.getValue().then(a))
          : a('noapi')
      } catch (b) {
        a('error')
      }
    }
  }
  var ai = /[A-Z]+/,
    bi = /\s/
  function ci(a, b) {
    if (k(a)) {
      a = gb(a)
      var c = a.indexOf('-')
      if (!(0 > c)) {
        var d = a.substring(0, c)
        if (ai.test(d)) {
          var e = a.substring(c + 1),
            f
          if (b) {
            var h = function (n) {
              var p = n.indexOf('/')
              return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
            }
            f = h(e)
            if ('DC' === d && 2 === f.length) {
              var l = h(f[1])
              2 === l.length && ((f[1] = l[0]), f.push(l[1]))
            }
          } else {
            f = e.split('/')
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (bi.test(f[m]) && ('AW' !== d || 1 !== m))) return
          }
          return { id: a, prefix: d, da: d + '-' + f[0], fa: f }
        }
      }
    }
  }
  function di(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = ci(a[d], b)
      e && (c[e.id] = e)
    }
    ei(c)
    var f = []
    A(c, function (h, l) {
      f.push(l)
    })
    return f
  }
  function ei(a) {
    var b = [],
      c
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c]
        'AW' === d.prefix && d.fa[fi[2]] && b.push(d.da)
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]]
  }
  var gi = {},
    fi =
      ((gi[0] = 0),
      (gi[1] = 0),
      (gi[2] = 1),
      (gi[3] = 0),
      (gi[4] = 1),
      (gi[5] = 2),
      (gi[6] = 0),
      (gi[7] = 0),
      (gi[8] = 0),
      gi)
  var hi = [],
    ii = { initialized: 11, complete: 12, interactive: 13 },
    ji = {},
    ki = Object.freeze(((ji[M.g.Ia] = !0), ji)),
    li =
      0 <= H.location.search.indexOf('?gtm_diagnostics=') ||
      0 <= H.location.search.indexOf('&gtm_diagnostics=')
  function mi(a, b, c) {
    if (dg && 'config' === a) {
      var d,
        e = null == (d = ci(b)) ? void 0 : d.fa
      if (!(e && 1 < e.length)) {
        var f,
          h = Eb('google_tag_data', {})
        h.td || (h.td = {})
        f = h.td
        var l = g(c.K)
        g(c.D, l)
        var m = [],
          n
        for (n in f)
          if (f.hasOwnProperty(n)) {
            var p = ni(f[n], l)
            p.length && (li && console.log(p), m.push(n))
          }
        m.length &&
          (m.length && dg && hi.push(b + '*' + m.join('.')),
          Sa('TAGGING', ii[H.readyState] || 14))
        f[b] = l
      }
    }
  }
  function oi(a, b) {
    var c = {},
      d
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0)
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0)
    return c
  }
  function ni(a, b, c, d) {
    c = void 0 === c ? {} : c
    d = void 0 === d ? '' : d
    if (a === b) return []
    var e = function (r, t) {
        var v
        'object' === Ia(t) ? (v = t[r]) : 'array' === Ia(t) && (v = t[r])
        return void 0 === v ? ki[r] : v
      },
      f = oi(a, b),
      h
    for (h in f)
      if (f.hasOwnProperty(h)) {
        var l = (d ? d + '.' : '') + h,
          m = e(h, a),
          n = e(h, b),
          p = 'object' === Ia(m) || 'array' === Ia(m),
          q = 'object' === Ia(n) || 'array' === Ia(n)
        if (p && q) ni(m, n, c, l)
        else if (p || q || m !== n) c[l] = !0
      }
    return Object.keys(c)
  }
  function pi(a) {
    if (!hi.length) return []
    var b = [['tdc', hi.join('!')]]
    a.Na && (a.ac(), (hi.length = 0))
    return b
  }
  var qi = function (a, b, c, d, e, f, h, l, m, n, p) {
      this.eventId = a
      this.priorityId = b
      this.D = c
      this.P = d
      this.H = e
      this.K = f
      this.F = h
      this.eventMetadata = l
      this.onSuccess = m
      this.onFailure = n
      this.isGtmEvent = p
    },
    ri = function (a, b) {
      var c = []
      switch (b) {
        case 3:
          c.push(a.D)
          c.push(a.P)
          c.push(a.H)
          c.push(a.K)
          c.push(a.F)
          break
        case 2:
          c.push(a.D)
          break
        case 1:
          c.push(a.P)
          c.push(a.H)
          c.push(a.K)
          c.push(a.F)
          break
        case 4:
          c.push(a.D), c.push(a.P), c.push(a.H), c.push(a.K)
      }
      return c
    },
    P = function (a, b, c, d) {
      for (
        var e = ma(ri(a, void 0 === d ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var h = f.value
        if (void 0 !== h[b]) return h[b]
      }
      return c
    },
    si = function (a) {
      for (
        var b = {}, c = ri(a, 4), d = ma(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), h = ma(f), l = h.next();
          !l.done;
          l = h.next()
        )
          b[l.value] = 1
      return Object.keys(b)
    },
    ti = function (a, b, c) {
      function d(n) {
        Ka(n) &&
          A(n, function (p, q) {
            f = !0
            e[p] = q
          })
      }
      var e = {},
        f = !1,
        h = ri(a, void 0 === c ? 3 : c)
      h.reverse()
      for (var l = ma(h), m = l.next(); !m.done; m = l.next()) d(m.value[b])
      return f ? e : void 0
    },
    ui = function (a) {
      for (
        var b = [M.g.Sc, M.g.Oc, M.g.Pc, M.g.Qc, M.g.Rc, M.g.Tc, M.g.Uc],
          c = ri(a, 3),
          d = ma(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, h = {}, l = !1, m = ma(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value
          void 0 !== f[p] && ((h[p] = f[p]), (l = !0))
        }
        var q = l ? h : void 0
        if (q) return q
      }
      return {}
    },
    vi = function (a, b) {
      this.eventId = a
      this.priorityId = b
      this.F = {}
      this.P = {}
      this.D = {}
      this.H = {}
      this.X = {}
      this.K = {}
      this.eventMetadata = {}
      this.isGtmEvent = !1
      this.onSuccess = function () {}
      this.onFailure = function () {}
    },
    wi = function (a, b) {
      a.F = b
      return a
    },
    xi = function (a, b) {
      a.P = b
      return a
    },
    yi = function (a, b) {
      a.D = b
      return a
    },
    zi = function (a, b) {
      a.H = b
      return a
    },
    Ai = function (a, b) {
      a.X = b
      return a
    },
    Bi = function (a, b) {
      a.K = b
      return a
    },
    Ci = function (a, b) {
      a.eventMetadata = b || {}
      return a
    },
    Di = function (a, b) {
      a.onSuccess = b
      return a
    },
    Ei = function (a, b) {
      a.onFailure = b
      return a
    },
    Fi = function (a, b) {
      a.isGtmEvent = b
      return a
    },
    Gi = function (a) {
      return new qi(
        a.eventId,
        a.priorityId,
        a.F,
        a.P,
        a.D,
        a.H,
        a.K,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      )
    }
  var Hi = {}
  function Ii(a, b, c) {
    dg && void 0 !== a && ((Hi[a] = Hi[a] || []), Hi[a].push(c + b), og(a))
  }
  function Ji(a) {
    var b = a.eventId,
      c = a.Na,
      d = [],
      e = Hi[b] || []
    e.length && d.push(['epr', e.join('.')])
    c && delete Hi[b]
    return d
  }
  var Li = function (a, b, c, d) {
      var e = ci(c, d.isGtmEvent)
      e && Ki.push('event', [b, a], e, d)
    },
    Mi = function (a, b, c, d) {
      var e = ci(c, d.isGtmEvent)
      e && Ki.push('get', [a, b], e, d)
    },
    Ni = function () {
      this.status = 1
      this.K = {}
      this.D = {}
      this.P = {}
      this.X = null
      this.H = {}
      this.F = !1
    },
    Oi = function (a, b, c, d) {
      var e = ib()
      this.type = a
      this.F = e
      this.D = b
      this.args = c
      this.messageContext = d
    },
    Pi = function () {
      this.F = {}
      this.H = {}
      this.D = []
    },
    Qi = function (a, b) {
      var c = b.da
      return (a.F[c] = a.F[c] || new Ni())
    },
    Ri = function (a, b, c, d) {
      if (d.D) {
        var e = Qi(a, d.D),
          f = e.X
        if (f) {
          var h = g(c),
            l = g(e.K[d.D.id]),
            m = g(e.H),
            n = g(e.D),
            p = g(a.H),
            q = {}
          if (dg)
            try {
              q = g(Me)
            } catch (u) {
              L(72)
            }
          var r = d.D.prefix,
            t = function (u) {
              Ii(d.messageContext.eventId, r, u)
            },
            v = Gi(
              Fi(
                Ei(
                  Di(
                    Ci(
                      Ai(
                        zi(
                          Bi(
                            yi(
                              xi(
                                wi(
                                  new vi(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  h
                                ),
                                l
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var u = t
                        t = void 0
                        u('2')
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess()
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var u = t
                      t = void 0
                      u('3')
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure()
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            )
          try {
            Ii(d.messageContext.eventId, r, '1'),
              mi(d.type, d.D.id, v),
              f(d.D.id, b, d.F, v)
          } catch (u) {
            Ii(d.messageContext.eventId, r, '4')
          }
        }
      }
    }
  Pi.prototype.register = function (a, b, c) {
    var d = Qi(this, a)
    3 !== d.status &&
      ((d.X = b), (d.status = 3), c && (g(d.D, c), (d.D = c)), this.flush())
  }
  Pi.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === Qi(this, c).status &&
        ((Qi(this, c).status = 2), this.push('require', [{}], c, {})),
      Qi(this, c).F && (d.deferrable = !1))
    this.D.push(new Oi(a, c, b, d))
    d.deferrable || this.flush()
  }
  Pi.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.D.length;
      e = { Sb: void 0, Mf: void 0 }
    ) {
      var f = this.D[0],
        h = f.D
      if (f.messageContext.deferrable)
        !h || Qi(this, h).F
          ? ((f.messageContext.deferrable = !1), this.D.push(f))
          : c.push(f),
          this.D.shift()
      else {
        switch (f.type) {
          case 'require':
            if (3 !== Qi(this, h).status && !a) {
              this.D.push.apply(this.D, c)
              return
            }
            break
          case 'set':
            A(f.args[0], function (r, t) {
              g(nb(r, t), b.H)
            })
            break
          case 'config':
            var l = Qi(this, h)
            e.Sb = {}
            A(
              f.args[0],
              (function (r) {
                return function (t, v) {
                  g(nb(t, v), r.Sb)
                }
              })(e)
            )
            var m = !!e.Sb[M.g.Pb]
            delete e.Sb[M.g.Pb]
            var n = h.da === h.id
            m || (n ? (l.H = {}) : (l.K[h.id] = {}))
            ;(l.F && m) || Ri(this, M.g.Z, e.Sb, f)
            l.F = !0
            n ? g(e.Sb, l.H) : (g(e.Sb, l.K[h.id]), L(70))
            d = !0
            break
          case 'event':
            e.Mf = {}
            A(
              f.args[0],
              (function (r) {
                return function (t, v) {
                  g(nb(t, v), r.Mf)
                }
              })(e)
            )
            Ri(this, f.args[1], e.Mf, f)
            break
          case 'get':
            var p = {},
              q = ((p[M.g.lb] = f.args[0]), (p[M.g.wb] = f.args[1]), p)
            Ri(this, M.g.Oa, q, f)
        }
        this.D.shift()
        Si(this, f)
      }
    }
    this.D.push.apply(this.D, c)
    d && this.flush()
  }
  var Si = function (a, b) {
      if ('require' !== b.type)
        if (b.D)
          for (var c = Qi(a, b.D).P[b.type] || [], d = 0; d < c.length; d++)
            c[d]()
        else
          for (var e in a.F)
            if (a.F.hasOwnProperty(e)) {
              var f = a.F[e]
              if (f && f.P)
                for (var h = f.P[b.type] || [], l = 0; l < h.length; l++) h[l]()
            }
    },
    Ti = function (a, b) {
      var c = Ki,
        d = g(b)
      g(Qi(c, a).D, d)
      Qi(c, a).D = d
    },
    Ki = new Pi()
  function Ui(a, b, c, d) {
    d = void 0 === d ? !1 : d
    a.google_image_requests || (a.google_image_requests = [])
    var e = Qg('IMG', a.document)
    if (c) {
      var f = function () {
        if (c) {
          var h = a.google_image_requests,
            l = xb(h, e)
          0 <= l && Array.prototype.splice.call(h, l, 1)
        }
        e.removeEventListener && e.removeEventListener('load', f, !1)
        e.removeEventListener && e.removeEventListener('error', f, !1)
      }
      ug(e, 'load', f)
      ug(e, 'error', f)
    }
    d && (e.attributionSrc = '')
    e.src = b
    a.google_image_requests.push(e)
  }
  var Wi = function (a) {
      var b
      b = void 0 === b ? !1 : b
      var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe'
      Og(a, function (d, e) {
        if (d || 0 === d) c += '&' + e + '=' + encodeURIComponent('' + d)
      })
      Vi(c, b)
    },
    Vi = function (a, b) {
      var c = window,
        d
      b = void 0 === b ? !1 : b
      d = void 0 === d ? !1 : d
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: 'include',
          redirect: 'follow',
          method: 'get',
          mode: 'no-cors',
        }
        d &&
          ((e.mode = 'cors'),
          'setAttributionReporting' in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: 'true',
                triggerEligible: 'false',
              })
            : (e.headers = {
                'Attribution-Reporting-Eligible': 'event-source',
              }))
        c.fetch(a, e)
      } else Ui(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
    }
  var Xi = function () {
    this.P = this.P
    this.H = this.H
  }
  Xi.prototype.P = !1
  Xi.prototype.addOnDisposeCallback = function (a, b) {
    this.P
      ? void 0 !== b
        ? a.call(b)
        : a()
      : (this.H || (this.H = []), this.H.push(void 0 !== b ? Fa(a, b) : a))
  }
  var Yi = function (a) {
      void 0 !== a.addtlConsent &&
        'string' !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0)
      void 0 !== a.gdprApplies &&
        'boolean' !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0)
      return (void 0 !== a.tcString && 'string' !== typeof a.tcString) ||
        (void 0 !== a.listenerId && 'number' !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && 'error' !== a.cmpStatus
        ? 0
        : 3
    },
    Zi = function (a, b) {
      b = void 0 === b ? {} : b
      Xi.call(this)
      this.F = a
      this.D = null
      this.Ma = {}
      this.Qb = 0
      var c
      this.Eb = null != (c = b.Ul) ? c : 500
      var d
      this.X = null != (d = b.Nm) ? d : !1
      this.K = null
    }
  xa(Zi, Xi)
  var aj = function (a) {
    return 'function' === typeof a.F.__tcfapi || null != $i(a)
  }
  Zi.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.X },
      d = tg(function () {
        return a(c)
      }),
      e = 0
    ;-1 !== this.Eb &&
      (e = setTimeout(function () {
        c.tcString = 'tcunavailable'
        c.internalErrorState = 1
        d()
      }, this.Eb))
    var f = function (h, l) {
      clearTimeout(e)
      h
        ? ((c = h),
          (c.internalErrorState = Yi(c)),
          (c.internalBlockOnErrors = b.X),
          (l && 0 === c.internalErrorState) ||
            ((c.tcString = 'tcunavailable'), l || (c.internalErrorState = 3)))
        : ((c.tcString = 'tcunavailable'), (c.internalErrorState = 3))
      a(c)
    }
    try {
      bj(this, 'addEventListener', f)
    } catch (h) {
      ;(c.tcString = 'tcunavailable'),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d()
    }
  }
  Zi.prototype.removeEventListener = function (a) {
    a && a.listenerId && bj(this, 'removeEventListener', null, a.listenerId)
  }
  var dj = function (a, b, c) {
      var d
      d = void 0 === d ? '755' : d
      var e
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b]
          if (void 0 !== f) {
            e = f[void 0 === d ? '755' : d]
            break a
          }
        }
        e = void 0
      }
      var h = e
      if (0 === h) return !1
      var l = c
      2 === c
        ? ((l = 0), 2 === h && (l = 1))
        : 3 === c && ((l = 1), 1 === h && (l = 0))
      var m
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = cj(a.vendor.consents, void 0 === d ? '755' : d)
          m =
            n && '1' === b && a.purposeOneTreatment && 'CH' === a.publisherCC
              ? !0
              : n && cj(a.purpose.consents, b)
        } else m = !0
      else
        m =
          1 === l
            ? a.purpose && a.vendor
              ? cj(a.purpose.legitimateInterests, b) &&
                cj(a.vendor.legitimateInterests, void 0 === d ? '755' : d)
              : !0
            : !0
      return m
    },
    cj = function (a, b) {
      return !(!a || !a[b])
    },
    bj = function (a, b, c, d) {
      c || (c = function () {})
      if ('function' === typeof a.F.__tcfapi) {
        var e = a.F.__tcfapi
        e(b, 2, c, d)
      } else if ($i(a)) {
        ej(a)
        var f = ++a.Qb
        a.Ma[f] = c
        if (a.D) {
          var h = {}
          a.D.postMessage(
            ((h.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            h),
            '*'
          )
        }
      } else c({}, !1)
    },
    $i = function (a) {
      if (a.D) return a.D
      var b
      a: {
        for (var c = a.F, d = 0; 50 > d; ++d) {
          var e
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator)
          } catch (l) {
            e = !1
          }
          if (e) {
            b = c
            break a
          }
          var f
          b: {
            try {
              var h = c.parent
              if (h && h != c) {
                f = h
                break b
              }
            } catch (l) {}
            f = null
          }
          if (!(c = f)) break
        }
        b = null
      }
      a.D = b
      return a.D
    },
    ej = function (a) {
      a.K ||
        ((a.K = function (b) {
          try {
            var c
            c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn
            a.Ma[c.callId](c.returnValue, c.success)
          } catch (d) {}
        }),
        ug(a.F, 'message', a.K))
    },
    fj = function (a) {
      if (!1 === a.gdprApplies) return !0
      void 0 === a.internalErrorState && (a.internalErrorState = Yi(a))
      return 'error' === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Wi({ e: String(a.internalErrorState) }), !1)
          : !0
        : 'loaded' !== a.cmpStatus ||
          ('tcloaded' !== a.eventStatus &&
            'useractioncomplete' !== a.eventStatus)
        ? !1
        : !0
    }
  var gj = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 }
  function hj() {
    var a = qe.tcf || {}
    return (qe.tcf = a)
  }
  var ij = function () {
      return new Zi(F, { Ul: -1 })
    },
    oj = function () {
      var a = hj(),
        b = ij()
      aj(b) && !jj() && !kj() && L(124)
      if (!a.active && aj(b)) {
        jj() &&
          ((a.active = !0),
          (a.Hb = {}),
          (a.cmpId = 0),
          (a.tcfPolicyVersion = 0),
          (rh().active = !0),
          (a.tcString = 'tcunavailable'))
        Yh()
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState)
              lj(a), Zh([M.g.O, M.g.oa, M.g.N]), (rh().active = !0)
            else if (
              ((a.gdprApplies = c.gdprApplies),
              (a.cmpId = c.cmpId),
              (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
              kj() && (a.active = !0),
              !mj(c) || jj() || kj())
            ) {
              a.tcfPolicyVersion = c.tcfPolicyVersion
              var d
              if (!1 === c.gdprApplies) {
                var e = {},
                  f
                for (f in gj) gj.hasOwnProperty(f) && (e[f] = !0)
                d = e
                b.removeEventListener(c)
              } else if (mj(c)) {
                var h = {},
                  l
                for (l in gj)
                  if (gj.hasOwnProperty(l))
                    if ('1' === l) {
                      var m,
                        n = c,
                        p = { Ek: !0 }
                      p = void 0 === p ? {} : p
                      m = fj(n)
                        ? !1 === n.gdprApplies
                          ? !0
                          : 'tcunavailable' === n.tcString
                          ? !p.vi
                          : (p.vi || void 0 !== n.gdprApplies || p.Ek) &&
                            (p.vi ||
                              ('string' === typeof n.tcString &&
                                n.tcString.length))
                          ? dj(n, '1', 0)
                          : !0
                        : !1
                      h['1'] = m
                    } else h[l] = dj(c, l, gj[l])
                d = h
              }
              if (d) {
                a.tcString = c.tcString || 'tcempty'
                a.Hb = d
                var q = {},
                  r = ((q[M.g.O] = a.Hb['1'] ? 'granted' : 'denied'), q)
                !0 !== a.gdprApplies
                  ? (Zh([M.g.O, M.g.oa, M.g.N]), (rh().active = !0))
                  : ((r[M.g.oa] =
                      a.Hb['3'] && a.Hb['4'] ? 'granted' : 'denied'),
                    'number' === typeof a.tcfPolicyVersion &&
                    4 <= a.tcfPolicyVersion
                      ? (r[M.g.N] =
                          a.Hb['1'] && a.Hb['7'] ? 'granted' : 'denied')
                      : Zh([M.g.N]),
                    Uh(
                      r,
                      { eventId: 0 },
                      {
                        gdprApplies: a ? a.gdprApplies : void 0,
                        tcString: nj() || '',
                      }
                    ))
              }
            } else Zh([M.g.O, M.g.oa, M.g.N])
          })
        } catch (c) {
          lj(a), Zh([M.g.O, M.g.oa, M.g.N]), (rh().active = !0)
        }
      }
    }
  function lj(a) {
    a.type = 'e'
    a.tcString = 'tcunavailable'
  }
  function mj(a) {
    return (
      'tcloaded' === a.eventStatus ||
      'useractioncomplete' === a.eventStatus ||
      'cmpuishown' === a.eventStatus
    )
  }
  var jj = function () {
    return !0 === F.gtag_enable_tcf_support
  }
  function kj() {
    return !0 === hj().enableAdvertiserConsentMode
  }
  var nj = function () {
      var a = hj()
      if (a.active) return a.tcString
    },
    pj = function () {
      var a = hj()
      if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? '1' : '0'
    },
    qj = function (a) {
      if (!gj.hasOwnProperty(String(a))) return !0
      var b = hj()
      return b.active && b.Hb ? !!b.Hb[String(a)] : !0
    }
  var rj = [M.g.O, M.g.R, M.g.N, M.g.oa],
    sj = {},
    tj = ((sj[M.g.O] = 1), (sj[M.g.R] = 2), sj)
  function uj(a) {
    if (void 0 === a) return 0
    switch (P(a, M.g.ka)) {
      case void 0:
        return 1
      case !1:
        return 3
      default:
        return 2
    }
  }
  var vj = function (a) {
      var b = uj(a)
      if (3 === b) return !1
      switch (Bh(M.g.oa)) {
        case 1:
        case 3:
          return !0
        case 2:
          return !1
        case 4:
          return 2 === b
        case 0:
          return !0
        default:
          return !1
      }
    },
    wj = function () {
      return Eh() || !Ah(M.g.O) || !Ah(M.g.R)
    },
    xj = function () {
      var a = {},
        b
      for (b in tj) tj.hasOwnProperty(b) && (a[tj[b]] = Bh(b))
      return 'G1' + bc(a[1] || 0) + bc(a[2] || 0)
    },
    yj = {},
    zj =
      ((yj[M.g.O] = 0), (yj[M.g.R] = 1), (yj[M.g.N] = 2), (yj[M.g.oa] = 3), yj)
  function Aj(a) {
    switch (a) {
      case void 0:
        return 1
      case !0:
        return 3
      case !1:
        return 2
      default:
        return 0
    }
  }
  var Bj = function (a) {
      for (var b = '1', c = 0; c < rj.length; c++) {
        var d = b,
          e,
          f = rj[c],
          h = zh.delegatedConsentTypes[f]
        e = void 0 === h ? 0 : zj.hasOwnProperty(h) ? 12 | zj[h] : 8
        var l = rh()
        l.accessedAny = !0
        var m = l.entries[f] || {}
        e = (e << 2) | Aj(m.implicit)
        b =
          d +
          ('' +
            '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
              e
            ] +
            '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
              (Aj(m.declare) << 4) | (Aj(m.default) << 2) | Aj(m.update)
            ])
      }
      var n = b,
        p
      p = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
        ((Eh() ? 1 : 0) << 2) | uj(a)
      ]
      return n + p
    },
    Cj = function () {
      if (!Ah(M.g.N)) return '-'
      for (
        var a = Object.keys(oe), b = Ch(a), c = '', d = ma(a), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value
        b[f] && (c += oe[f])
      }
      return c || '-'
    },
    Dj = function () {
      return !1 !== lh['6'] || ((jj() || kj()) && '1' === pj()) ? '1' : '0'
    },
    Ej = function () {
      return (
        (!1 !== lh['6'] ? !0 : !(!jj() && !kj()) && '1' === pj()) || !Ah(M.g.N)
      )
    },
    Fj = function () {
      var a = '0',
        b = '0',
        c
      var d = hj()
      c = d.active ? d.cmpId : void 0
      'number' === typeof c &&
        0 <= c &&
        4095 >= c &&
        ((a =
          '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
            (c >> 6) & 63
          ]),
        (b = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
          c & 63
        ]))
      var e = '0',
        f
      var h = hj()
      f = h.active ? h.tcfPolicyVersion : void 0
      'number' === typeof f &&
        0 <= f &&
        63 >= f &&
        (e = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[
          f
        ])
      var l = 0
      !1 !== lh['6'] && (l |= 1)
      '1' === pj() && (l |= 2)
      jj() && (l |= 4)
      var m
      var n = hj()
      m =
        void 0 !== n.enableAdvertiserConsentMode
          ? n.enableAdvertiserConsentMode
            ? '1'
            : '0'
          : void 0
      '1' === m && (l |= 8)
      rh().waitPeriodTimedOut && (l |= 16)
      return (
        '1' +
        a +
        b +
        e +
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[l]
      )
    }
  function Gj() {
    var a = !1
    return a
  }
  var Hj = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 }
  function Ij(a) {
    a = void 0 === a ? {} : a
    var b = xf.ctid.split('-')[0].toUpperCase(),
      c = {}
    c.ctid = xf.ctid
    c.Gl = pe.rd
    c.Kl = pe.Af
    c.il = vf.od ? 2 : 1
    c.Pl = a.Mi
    c.li = xf.canonicalContainerId
    c.li !== a.wa && (c.wa = a.wa)
    if (S(64)) {
      var d = Gf()
      c.sl = d ? d.canonicalContainerId : void 0
    }
    ve ? ((c.Oe = Hj[b]), c.Oe || (c.Oe = 0)) : (c.Oe = ze ? 13 : 10)
    Ie.K
      ? ((c.Ne = 0), (c.hk = 2))
      : xe
      ? (c.Ne = 1)
      : Gj()
      ? (c.Ne = 2)
      : (c.Ne = 3)
    var e = {}
    e[6] = wf
    c.nk = e
    var f = a.Ef,
      h
    var l = c.Oe,
      m = c.Ne
    void 0 === l
      ? (h = '')
      : (m || (m = 0), (h = '' + dc(1, 1) + ac((l << 2) | m)))
    var n = c.hk,
      p = '4' + h + (n ? '' + dc(2, 1) + ac(n) : ''),
      q,
      r = c.Kl
    q = r && cc.test(r) ? '' + dc(3, 2) + r : ''
    var t,
      v = c.Gl
    t = v ? '' + dc(4, 1) + ac(v) : ''
    var u
    var w = c.ctid
    if (w && f) {
      var y = w.split('-'),
        x = y[0].toUpperCase()
      if ('GTM' !== x && 'OPT' !== x) u = ''
      else {
        var B = y[1]
        u = '' + dc(5, 3) + ac(1 + B.length) + (c.il || 0) + B
      }
    } else u = ''
    var z = c.Pl,
      C = c.li,
      G = c.wa,
      D = c.dn,
      E =
        p +
        q +
        t +
        u +
        (z ? '' + dc(6, 1) + ac(z) : '') +
        (C ? '' + dc(7, 3) + ac(C.length) + C : '') +
        (G ? '' + dc(8, 3) + ac(G.length) + G : '') +
        (D ? '' + dc(9, 3) + ac(D.length) + D : ''),
      J
    var I = c.nk
    I = void 0 === I ? {} : I
    for (
      var N = [], R = ma(Object.keys(I)), aa = R.next();
      !aa.done;
      aa = R.next()
    ) {
      var W = aa.value
      N[Number(W)] = I[W]
    }
    if (N.length) {
      var O = dc(10, 3),
        fa
      if (0 === N.length) fa = ac(0)
      else {
        for (var ea = [], ca = 0, da = !1, Ca = 0; Ca < N.length; Ca++) {
          da = !0
          var va = Ca % 6
          N[Ca] && (ca |= 1 << va)
          5 === va && (ea.push(ac(ca)), (ca = 0), (da = !1))
        }
        da && ea.push(ac(ca))
        fa = ea.join('')
      }
      var Da = fa
      J = '' + O + ac(Da.length) + Da
    } else J = ''
    var Ea = c.sl
    return E + J + (Ea ? '' + dc(11, 3) + ac(Ea.length) + Ea : '')
  }
  var Jj = {
      Bf: 'service_worker_endpoint',
      Yh: 'shared_user_id',
      Zh: 'shared_user_id_requested',
      ai: 'shared_user_id_source',
    },
    Kj
  function Lj(a) {
    Kj ||
      (Kj = Object.keys(Jj).map(function (b) {
        return Jj[b]
      }))
    return Kj.includes(a)
  }
  function Mj(a, b) {
    if (Lj(a)) {
      var c = Eb('google_tag_data', {}),
        d = c.xcd
      d || ((d = {}), (c.xcd = d))
      var e = d[a]
      e
        ? e.set(b)
        : (d[a] = {
            set: function (f) {
              b = f
            },
            get: function () {
              return b
            },
          })
    }
  }
  function Nj(a) {
    if (Lj(a)) {
      var b, c
      return null == (b = Eb('google_tag_data', {}).xcd)
        ? void 0
        : null == (c = b[a])
        ? void 0
        : c.get()
    }
  }
  function Oj(a) {
    return 'null' !== a.origin
  }
  function Pj(a, b, c, d) {
    var e
    if (Qj(d)) {
      for (
        var f = [], h = String(b || Rj()).split(';'), l = 0;
        l < h.length;
        l++
      ) {
        var m = h[l].split('='),
          n = m[0].replace(/^\s*|\s*$/g, '')
        if (n && n == a) {
          var p = m
            .slice(1)
            .join('=')
            .replace(/^\s*|\s*$/g, '')
          p && c && (p = decodeURIComponent(p))
          f.push(p)
        }
      }
      e = f
    } else e = []
    return e
  }
  function Sj(a, b, c, d, e) {
    if (Qj(e)) {
      var f = Tj(a, d, e)
      if (1 === f.length) return f[0].id
      if (0 !== f.length) {
        f = Uj(
          f,
          function (h) {
            return h.xk
          },
          b
        )
        if (1 === f.length) return f[0].id
        f = Uj(
          f,
          function (h) {
            return h.vl
          },
          c
        )
        return f[0] ? f[0].id : void 0
      }
    }
  }
  function Vj(a, b, c, d) {
    var e = Rj(),
      f = window
    Oj(f) && (f.document.cookie = a)
    var h = Rj()
    return e !== h || (void 0 !== c && 0 <= Pj(b, h, !1, d).indexOf(c))
  }
  function Wj(a, b, c) {
    function d(t, v, u) {
      if (null == u) return delete h[v], t
      h[v] = u
      return t + '; ' + v + '=' + u
    }
    function e(t, v) {
      if (null == v) return t
      h[v] = !0
      return t + '; ' + v
    }
    if (!Qj(c.Za)) return 2
    var f
    null == b
      ? (f = a + '=deleted; expires=' + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = Xj(b)),
        (f = a + '=' + b))
    var h = {}
    f = d(f, 'path', c.path)
    var l
    c.expires instanceof Date
      ? (l = c.expires.toUTCString())
      : null != c.expires && (l = '' + c.expires)
    f = d(f, 'expires', l)
    f = d(f, 'max-age', c.Um)
    f = d(f, 'samesite', c.Zm)
    c.bn && (f = e(f, 'secure'))
    var m = c.domain
    if (m && 'auto' === m.toLowerCase()) {
      for (var n = Yj(), p = 0; p < n.length; ++p) {
        var q = 'none' !== n[p] ? n[p] : void 0,
          r = d(f, 'domain', q)
        r = e(r, c.flags)
        if (!Zj(q, c.path) && Vj(r, a, b, c.Za)) return 0
      }
      return 1
    }
    m && 'none' !== m.toLowerCase() && (f = d(f, 'domain', m))
    f = e(f, c.flags)
    return Zj(m, c.path) ? 1 : Vj(f, a, b, c.Za) ? 0 : 1
  }
  function ak(a, b, c) {
    null == c.path && (c.path = '/')
    c.domain || (c.domain = 'auto')
    return Wj(a, b, c)
  }
  function Uj(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var l = a[h],
        m = b(l)
      m === c
        ? d.push(l)
        : void 0 === f || m < f
        ? ((e = [l]), (f = m))
        : m === f && e.push(l)
    }
    return 0 < d.length ? d : e
  }
  function Tj(a, b, c) {
    for (var d = [], e = Pj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split('.'),
        l = h.shift()
      if (!b || !l || -1 !== b.indexOf(l)) {
        var m = h.shift()
        if (m) {
          var n = m.split('-')
          d.push({
            id: h.join('.'),
            xk: Number(n[0]) || 1,
            vl: Number(n[1]) || 1,
          })
        }
      }
    }
    return d
  }
  function Xj(a) {
    a && 1200 < a.length && (a = a.substring(0, 1200))
    return a
  }
  var bk = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    ck = /(^|\.)doubleclick\.net$/i
  function Zj(a, b) {
    return (
      void 0 !== a &&
      (ck.test(window.document.location.hostname) || ('/' === b && bk.test(a)))
    )
  }
  function dk(a) {
    if (!a) return 1
    a = 0 === a.indexOf('.') ? a.substring(1) : a
    return a.split('.').length
  }
  function ek(a) {
    if (!a || '/' === a) return 1
    '/' !== a[0] && (a = '/' + a)
    '/' !== a[a.length - 1] && (a += '/')
    return a.split('/').length - 1
  }
  function fk(a, b) {
    var c = '' + dk(a),
      d = ek(b)
    1 < d && (c += '-' + d)
    return c
  }
  var Rj = function () {
      return Oj(window) ? window.document.cookie : ''
    },
    Qj = function (a) {
      return a && wh().D()
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return Dh(b) && Ah(b)
          })
        : !0
    },
    Yj = function () {
      var a = [],
        b = window.document.location.hostname.split('.')
      if (4 === b.length) {
        var c = b[b.length - 1]
        if (Number(c).toString() === c) return ['none']
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join('.'))
      var e = window.document.location.hostname
      ck.test(e) || bk.test(e) || a.push('none')
      return a
    }
  function gk(a) {
    var b = Math.round(2147483647 * Math.random()),
      c
    if (a) {
      var d = 1,
        e,
        f,
        h
      if (a)
        for (d = 0, f = a.length - 1; 0 <= f; f--)
          (h = a.charCodeAt(f)),
            (d = ((d << 6) & 268435455) + h + (h << 14)),
            (e = d & 266338304),
            (d = 0 !== e ? d ^ (e >> 21) : d)
      c = String(b ^ (d & 2147483647))
    } else c = String(b)
    return c
  }
  function hk(a) {
    return [gk(a), Math.round(ib() / 1e3)].join('.')
  }
  function ik(a, b, c, d) {
    var e,
      f = Number(null != a.Ya ? a.Ya : void 0)
    0 !== f && (e = new Date((b || ib()) + 1e3 * (f || 7776e3)))
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Za: d,
    }
  }
  var jk
  function kk() {
    function a(h) {
      c(h.target || h.srcElement || {})
    }
    function b(h) {
      d(h.target || h.srcElement || {})
    }
    var c = lk,
      d = mk,
      e = nk()
    if (!e.init) {
      Nb(H, 'mousedown', a)
      Nb(H, 'keyup', a)
      Nb(H, 'submit', b)
      var f = HTMLFormElement.prototype.submit
      HTMLFormElement.prototype.submit = function () {
        d(this)
        f.call(this)
      }
      e.init = !0
    }
  }
  function ok(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: 2 === c,
      placement: c,
      forms: d,
      sameHost: e,
    }
    nk().decorators.push(f)
  }
  function pk(a, b, c) {
    for (var d = nk().decorators, e = {}, f = 0; f < d.length; ++f) {
      var h = d[f],
        l
      if ((l = !c || h.forms))
        a: {
          var m = h.domains,
            n = a,
            p = !!h.sameHost
          if (m && (p || n !== H.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  l = !0
                  break a
                }
              } else if (0 <= n.indexOf(m[q]) || (p && 0 <= m[q].indexOf(n))) {
                l = !0
                break a
              }
          l = !1
        }
      if (l) {
        var r = h.placement
        void 0 === r && (r = h.fragment ? 2 : 1)
        r === b && lb(e, h.callback())
      }
    }
    return e
  }
  function nk() {
    var a = Eb('google_tag_data', {}),
      b = a.gl
    ;(b && b.decorators) || ((b = { decorators: [] }), (a.gl = b))
    return b
  }
  var qk = /(.*?)\*(.*?)\*(.*)/,
    rk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    sk = /^(?:www\.|m\.|amp\.)+/,
    tk = /([^?#]+)(\?[^#]*)?(#.*)?/
  function uk(a) {
    var b = tk.exec(a)
    if (b) return { hg: b[1], query: b[2], fragment: b[3] }
  }
  function vk(a, b) {
    var c = [
        Bb.userAgent,
        new Date().getTimezoneOffset(),
        Bb.userLanguage || Bb.language,
        Math.floor(ib() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join('*'),
      d
    if (!(d = jk)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var h = f, l = 0; 8 > l; l++)
          h = h & 1 ? (h >>> 1) ^ 3988292384 : h >>> 1
        e[f] = h
      }
      d = e
    }
    jk = d
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ jk[(m ^ c.charCodeAt(n)) & 255]
    return ((m ^ -1) >>> 0).toString(36)
  }
  function wk() {
    return function (a) {
      var b = hf(F.location.href),
        c = b.search.replace('?', ''),
        d = af(c, '_gl', !0) || ''
      a.query = xk(d) || {}
      var e = df(b, 'fragment'),
        f
      var h = -1
      if ('_gl=' === e.substring(0, 4)) h = 4
      else {
        var l = e.indexOf('&_gl=')
        0 < l && (h = l + 3 + 2)
      }
      if (0 > h) f = void 0
      else {
        var m = e.indexOf('&', h)
        f = 0 > m ? e.substring(h) : e.substring(h, m)
      }
      a.fragment = xk(f || '') || {}
    }
  }
  function yk(a) {
    var b = wk(),
      c = nk()
    c.data || ((c.data = { query: {}, fragment: {} }), b(c.data))
    var d = {},
      e = c.data
    e && (lb(d, e.query), a && lb(d, e.fragment))
    return d
  }
  var xk = function (a) {
    try {
      var b = zk(a, 3)
      if (void 0 !== b) {
        for (
          var c = {}, d = b ? b.split('*') : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            h = Qa(d[e + 1])
          c[f] = h
        }
        Sa('TAGGING', 6)
        return c
      }
    } catch (l) {
      Sa('TAGGING', 8)
    }
  }
  function zk(a, b) {
    if (a) {
      var c
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = qk.exec(d)
          if (f) {
            c = f
            break a
          }
          d = decodeURIComponent(d)
        }
        c = void 0
      }
      var h = c
      if (h && '1' === h[1]) {
        var l = h[3],
          m
        a: {
          for (var n = h[2], p = 0; p < b; ++p)
            if (n === vk(l, p)) {
              m = !0
              break a
            }
          m = !1
        }
        if (m) return l
        Sa('TAGGING', 7)
      }
    }
  }
  function Ak(a, b, c, d, e) {
    function f(p) {
      var q = p,
        r = new RegExp('(.*?)(^|&)' + a + '=([^&]*)&?(.*)').exec(q),
        t = q
      if (r) {
        var v = r[2],
          u = r[4]
        t = r[1]
        u && (t = t + v + u)
      }
      p = t
      var w = p.charAt(p.length - 1)
      p && '&' !== w && (p += '&')
      return p + n
    }
    d = void 0 === d ? !1 : d
    e = void 0 === e ? !1 : e
    var h = uk(c)
    if (!h) return ''
    var l = h.query || '',
      m = h.fragment || '',
      n = a + '=' + b
    d
      ? (0 !== m.substring(1).length && e) || (m = '#' + f(m.substring(1)))
      : (l = '?' + f(l.substring(1)))
    return '' + h.hg + l + m
  }
  function Bk(a, b) {
    function c(n, p, q) {
      var r
      a: {
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            r = !0
            break a
          }
        r = !1
      }
      if (r) {
        var v,
          u = [],
          w
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var y = n[w]
            void 0 !== y &&
              y === y &&
              null !== y &&
              '[object Object]' !== y.toString() &&
              (u.push(w), u.push(Pa(String(y))))
          }
        var x = u.join('*')
        v = ['1', vk(x), x].join('*')
        d
          ? (eh(3) || eh(1) || !p) && Ck('_gl', v, a, p, q)
          : Dk('_gl', v, a, p, q)
      }
    }
    var d = 'FORM' === (a.tagName || '').toUpperCase(),
      e = pk(b, 1, d),
      f = pk(b, 2, d),
      h = pk(b, 4, d),
      l = pk(b, 3, d)
    c(e, !1, !1)
    c(f, !0, !1)
    eh(1) && c(h, !0, !0)
    for (var m in l) l.hasOwnProperty(m) && Ek(m, l[m], a)
  }
  function Ek(a, b, c) {
    'a' === c.tagName.toLowerCase()
      ? Dk(a, b, c)
      : 'form' === c.tagName.toLowerCase() && Ck(a, b, c)
  }
  function Dk(a, b, c, d, e) {
    d = void 0 === d ? !1 : d
    e = void 0 === e ? !1 : e
    var f
    if ((f = c.href)) {
      var h
      if (!(h = !eh(4) || d)) {
        var l = F.location.href,
          m = uk(c.href),
          n = uk(l)
        h = !(m && n && m.hg === n.hg && m.query === n.query && m.fragment)
      }
      f = h
    }
    if (f) {
      var p = Ak(a, b, c.href, d, e)
      wb.test(p) && (c.href = p)
    }
  }
  function Ck(a, b, c, d, e) {
    d = void 0 === d ? !1 : d
    e = void 0 === e ? !1 : e
    if (c && c.action) {
      var f = (c.method || '').toLowerCase()
      if ('get' !== f || d) {
        if ('get' === f || 'post' === f) {
          var h = Ak(a, b, c.action, d, e)
          wb.test(h) && (c.action = h)
        }
      } else {
        for (var l = c.childNodes || [], m = !1, n = 0; n < l.length; n++) {
          var p = l[n]
          if (p.name === a) {
            p.setAttribute('value', b)
            m = !0
            break
          }
        }
        if (!m) {
          var q = H.createElement('input')
          q.setAttribute('type', 'hidden')
          q.setAttribute('name', a)
          q.setAttribute('value', b)
          c.appendChild(q)
        }
      }
    }
  }
  function lk(a) {
    try {
      var b
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c
            break a
          }
          c = c.parentNode
          d--
        }
        b = null
      }
      var e = b
      if (e) {
        var f = e.protocol
        ;('http:' !== f && 'https:' !== f) || Bk(e, e.hostname)
      }
    } catch (h) {}
  }
  function mk(a) {
    try {
      if (a.action) {
        var b = df(hf(a.action), 'host')
        Bk(a, b)
      }
    } catch (c) {}
  }
  function Fk(a, b, c, d) {
    kk()
    var e = 'fragment' === c ? 2 : 1
    d = !!d
    ok(a, b, e, d, !1)
    2 === e && Sa('TAGGING', 23)
    d && Sa('TAGGING', 24)
  }
  function Gk(a, b) {
    kk()
    ok(a, [cf(F.location, 'host', !0)], b, !0, !0)
  }
  function Hk() {
    var a = H.location.hostname,
      b = rk.exec(H.referrer)
    if (!b) return !1
    var c = b[2],
      d = b[1],
      e = ''
    if (c) {
      var f = c.split('/'),
        h = f[1]
      e = 's' === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
    } else if (d) {
      if (0 === d.indexOf('xn--')) return !1
      e = d.replace(/-/g, '.').replace(/\.\./g, '-')
    }
    var l = a.replace(sk, ''),
      m = e.replace(sk, ''),
      n
    if (!(n = l === m)) {
      var p = '.' + m
      n = l.substring(l.length - p.length, l.length) === p
    }
    return n
  }
  function Ik(a, b) {
    return !1 === a ? !1 : a || b || Hk()
  }
  var Jk = ['1'],
    Kk = {},
    Lk = {}
  function Mk(a, b) {
    b = void 0 === b ? !0 : b
    var c = Nk(a.prefix)
    if (!Kk[c])
      if (Ok(c, a.path, a.domain)) {
        var d = Lk[Nk(a.prefix)]
        Pk(a, d ? d.id : void 0, d ? d.dg : void 0)
      } else {
        var e = kf('auiddc')
        e
          ? (Sa('TAGGING', 17), (Kk[c] = e))
          : b && (Qk(Nk(a.prefix), hk(), a), Ok(c, a.path, a.domain))
      }
  }
  function Pk(a, b, c) {
    var d = Nk(a.prefix),
      e = Kk[d]
    if (e) {
      var f = e.split('.')
      if (2 === f.length) {
        var h = Number(f[1]) || 0
        if (h) {
          var l = e
          b && (l = e + '.' + b + '.' + (c ? c : Math.floor(ib() / 1e3)))
          Qk(d, l, a, 1e3 * h)
        }
      }
    }
  }
  function Qk(a, b, c, d) {
    var e = ['1', fk(c.domain, c.path), b].join('.'),
      f = ik(c, d)
    f.Za = Rk()
    ak(a, e, f)
  }
  function Ok(a, b, c) {
    var d = Sj(a, dk(b), ek(c), Jk, Rk())
    if (!d) return !1
    Sk(a, d)
    return !0
  }
  function Sk(a, b) {
    var c = b.split('.')
    5 === c.length
      ? ((Kk[a] = c.slice(0, 2).join('.')),
        (Lk[a] = { id: c.slice(2, 4).join('.'), dg: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (Lk[a] = { id: c.slice(0, 2).join('.'), dg: Number(c[2]) || 0 })
      : (Kk[a] = b)
  }
  function Nk(a) {
    return (a || '_gcl') + '_au'
  }
  function Tk(a) {
    function b() {
      Ah(c) && a()
    }
    var c = Rk()
    Hh(function () {
      b()
      Ah(c) || Ih(b, c)
    }, c)
  }
  function Uk(a) {
    var b = yk(!0),
      c = Nk(a.prefix)
    Tk(function () {
      var d = b[c]
      if (d) {
        Sk(c, d)
        var e = 1e3 * Number(Kk[c].split('.')[1])
        if (e) {
          Sa('TAGGING', 16)
          var f = ik(a, e)
          f.Za = Rk()
          ak(c, ['1', fk(a.domain, a.path), d].join('.'), f)
        }
      }
    })
  }
  function Vk(a, b, c, d, e) {
    e = e || {}
    var f = function () {
      var h = {},
        l = Sj(a, dk(e.path), ek(e.domain), Jk, Rk())
      l && (h[a] = l)
      return h
    }
    Tk(function () {
      Fk(f, b, c, d)
    })
  }
  function Rk() {
    return ['ad_storage', 'ad_user_data']
  }
  function Wk(a) {
    for (
      var b = [],
        c = H.cookie.split(';'),
        d = new RegExp(
          '^\\s*' + (a || '_gac') + '_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$'
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d)
      f &&
        b.push({
          rg: f[1],
          value: f[2],
          timestamp: Number(f[2].split('.')[1]) || 0,
        })
    }
    b.sort(function (h, l) {
      return l.timestamp - h.timestamp
    })
    return b
  }
  function Xk(a, b) {
    var c = Wk(a),
      d = {}
    if (!c || !c.length) return d
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split('.')
      if (
        !('1' !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].rg] || (d[c[e].rg] = [])
        var h = { version: f[0], timestamp: 1e3 * Number(f[1]), W: f[2] }
        b && 3 < f.length && (h.labels = f.slice(3))
        d[c[e].rg].push(h)
      }
    }
    return d
  }
  var Yk = {},
    Zk =
      ((Yk.k = { Fa: /^[\w-]+$/ }),
      (Yk.b = { Fa: /^[\w-]+$/, mg: !0 }),
      (Yk.i = { Fa: /^[1-9]\d*$/ }),
      Yk)
  var $k = {},
    kl =
      (($k[5] = {
        version: '2',
        Zl: ['2'],
        Ji: 'ad_storage',
        mi: ['k', 'i', 'b'],
      }),
      $k)
  function ll(a, b) {
    var c = b.Fa
    return 'function' === typeof c ? c(a) : c.test(a)
  }
  function ml(a) {
    for (
      var b = ma(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { xd: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e]
      d.xd = Zk[e]
      d.xd
        ? d.xd.mg
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (h) {
                    return function (l) {
                      return ll(l, h.xd)
                    }
                  })(d)
                )
              : void 0)
          : ('string' === typeof f && ll(f, d.xd)) || (a[e] = void 0)
        : (a[e] = void 0)
    }
    return a
  }
  function nl(a) {
    var b = {},
      c = kl[5]
    if (c) {
      for (
        var d = c.mi, e = ma(a.split('$')), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var h = f.value,
          l = h[0]
        if (-1 !== d.indexOf(l))
          try {
            var m = decodeURIComponent(h.substring(1)),
              n = Zk[l]
            n && (n.mg ? ((b[l] = b[l] || []), b[l].push(m)) : (b[l] = m))
          } catch (p) {}
      }
      return ml(b)
    }
  }
  function ol(a) {
    var b = kl[5]
    if (b) {
      for (var c = [], d = ma(b.mi), e = d.next(); !e.done; e = d.next()) {
        var f = e.value,
          h = Zk[f]
        if (h) {
          var l = a[f]
          if (void 0 !== l)
            if (h.mg && Array.isArray(l))
              for (var m = ma(l), n = m.next(); !n.done; n = m.next())
                c.push(encodeURIComponent('' + f + n.value))
            else c.push(encodeURIComponent('' + f + l))
        }
      }
      return c.join('$')
    }
  }
  function pl(a) {
    var b = kl[5]
    if (b) {
      for (
        var c = [], d = Pj(a, void 0, void 0, b.Ji), e = ma(d), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var h = f.value.split('.'),
          l = h.shift()
        ;-1 !== b.Zl.indexOf(l) && (h.shift(), c.push(nl(h.join('.'))))
      }
      return c
    }
  }
  function ql(a, b, c, d) {
    c = c || {}
    var e = ol(b)
    if (e) {
      var f = kl[5]
      ak(
        a,
        [f.version, fk(c.domain, c.path), e].join('.'),
        ik(c, d, void 0, f.Ji)
      )
    }
  }
  var rl = /^\w+$/,
    sl = /^[\w-]+$/,
    tl = {},
    ul =
      ((tl.aw = '_aw'),
      (tl.dc = '_dc'),
      (tl.gf = '_gf'),
      (tl.gp = '_gp'),
      (tl.gs = '_gs'),
      (tl.ha = '_ha'),
      (tl.ag = '_ag'),
      (tl.gb = '_gb'),
      tl)
  function vl() {
    return ['ad_storage', 'ad_user_data']
  }
  function wl(a) {
    return !wh().D() || Ah(a)
  }
  function xl(a, b) {
    function c() {
      var d = wl(b)
      d && a()
      return d
    }
    Hh(function () {
      c() || Ih(c, b)
    }, b)
  }
  function yl(a) {
    return zl(a).map(function (b) {
      return b.W
    })
  }
  function Al(a) {
    return Bl(a)
      .filter(function (b) {
        return b.W
      })
      .map(function (b) {
        return b.W
      })
  }
  function Bl(a) {
    var b = Cl(a.prefix),
      c = Dl('gb', b),
      d = Dl('ag', b)
    if (!d || !c) return []
    var e = function (l) {
        return function (m) {
          m.type = l
          return m
        }
      },
      f = zl(c).map(e('gb')),
      h = (eh(6) ? El(d) : []).map(e('ag'))
    return f.concat(h).sort(function (l, m) {
      return m.timestamp - l.timestamp
    })
  }
  function Fl(a, b, c, d, e) {
    var f = Za(a, function (h) {
      return h.W === c
    })
    f
      ? ((f.timestamp = Math.max(f.timestamp, d)),
        (f.labels = Gl(f.labels || [], e || [])))
      : a.push({ version: b, W: c, timestamp: d, labels: e })
  }
  function El(a) {
    for (
      var b = pl(a) || [], c = [], d = ma(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        h = f,
        l = Hl(f)
      l && Fl(c, '2', h.k, l, h.b || [])
    }
    return c.sort(function (m, n) {
      return n.timestamp - m.timestamp
    })
  }
  function zl(a) {
    for (
      var b = [], c = Pj(a, H.cookie, void 0, vl()), d = ma(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Il(e.value)
      if (null != f) {
        var h = f
        Fl(b, h.version, h.W, h.timestamp, h.labels)
      }
    }
    b.sort(function (l, m) {
      return m.timestamp - l.timestamp
    })
    return Jl(b)
  }
  function Gl(a, b) {
    if (!a.length) return b
    if (!b.length) return a
    var c = {}
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0)
    })
  }
  function Cl(a) {
    return a && 'string' === typeof a && a.match(rl) ? a : '_gcl'
  }
  function Kl(a, b) {
    var c = eh(6),
      d = eh(7),
      e = hf(a),
      f = df(e, 'query', !1, void 0, 'gclid'),
      h = df(e, 'query', !1, void 0, 'gclsrc'),
      l = df(e, 'query', !1, void 0, 'wbraid')
    eh(8) && (l = rb(l))
    var m
    c && (m = df(e, 'query', !1, void 0, 'gbraid'))
    var n
    d && (n = df(e, 'query', !1, void 0, 'gad_source'))
    var p = df(e, 'query', !1, void 0, 'dclid')
    if (b && (!f || !h || !l || (c && !m))) {
      var q = e.hash.replace('#', '')
      f = f || af(q, 'gclid')
      h = h || af(q, 'gclsrc')
      l = l || af(q, 'wbraid')
      c && (m = m || af(q, 'gbraid'))
      d && (n = n || af(q, 'gad_source'))
    }
    return Ll(f, h, p, l, m, n)
  }
  function Ml() {
    return Kl(F.location.href, !0)
  }
  function Ll(a, b, c, d, e, f) {
    var h = {},
      l = function (m, n) {
        h[n] || (h[n] = [])
        h[n].push(m)
      }
    h.gclid = a
    h.gclsrc = b
    h.dclid = c
    if (void 0 !== a && a.match(sl))
      switch (b) {
        case void 0:
          l(a, 'aw')
          break
        case 'aw.ds':
          l(a, 'aw')
          l(a, 'dc')
          break
        case 'ds':
          l(a, 'dc')
          break
        case '3p.ds':
          l(a, 'dc')
          break
        case 'gf':
          l(a, 'gf')
          break
        case 'ha':
          l(a, 'ha')
      }
    c && l(c, 'dc')
    void 0 !== d && sl.test(d) && ((h.wbraid = d), l(d, 'gb'))
    eh(6) && void 0 !== e && sl.test(e) && ((h.gbraid = e), l(e, 'ag'))
    eh(7) && void 0 !== f && sl.test(f) && ((h.gad_source = f), l(f, 'gs'))
    return h
  }
  function Nl(a) {
    var b = Ml()
    if (eh(5)) {
      for (
        var c = !0, d = ma(Object.keys(b)), e = d.next();
        !e.done;
        e = d.next()
      )
        if (void 0 !== b[e.value]) {
          c = !1
          break
        }
      c && (b = Kl(F.document.referrer, !1))
    }
    Ol(b, !1, a)
  }
  function Ol(a, b, c, d, e) {
    c = c || {}
    e = e || []
    var f = Cl(c.prefix),
      h = d || ib(),
      l = Math.round(h / 1e3),
      m = vl(),
      n = !1,
      p = !1,
      q = function () {
        if (wl(m)) {
          var r = ik(c, h, !0)
          r.Za = m
          for (
            var t = function (E, J) {
                var I = Dl(E, f)
                I && (ak(I, J, r), 'gb' !== E && (n = !0))
              },
              v = function (E) {
                var J = ['GCL', l, E]
                0 < e.length && J.push(e.join('.'))
                return J.join('.')
              },
              u = ma(['aw', 'dc', 'gf', 'ha', 'gp']),
              w = u.next();
            !w.done;
            w = u.next()
          ) {
            var y = w.value
            a[y] && t(y, v(a[y][0]))
          }
          if (!n && a.gb) {
            var x = a.gb[0],
              B = Dl('gb', f)
            ;(!b &&
              zl(B).some(function (E) {
                return E.W === x && E.labels && 0 < E.labels.length
              })) ||
              t('gb', v(x))
          }
        }
        if (!p && eh(6) && a.gbraid && wl('ad_storage') && ((p = !0), !n)) {
          var z = a.gbraid,
            C = Dl('ag', f)
          if (
            b ||
            !(eh(6) ? El(C) : []).some(function (E) {
              return E.W === z && E.labels && 0 < E.labels.length
            })
          ) {
            var G = {},
              D = ((G.k = z), (G.i = '' + l), (G.b = e), G)
            ql(C, D, c, h)
          }
        }
        Pl(a, f, h, c)
      }
    Hh(function () {
      q()
      wl(m) || Ih(q, m)
    }, m)
  }
  function Pl(a, b, c, d) {
    if (eh(7) && void 0 !== a.gad_source && wl('ad_storage')) {
      var e = Dl('gs', b)
      if (e) {
        var f = Math.round((ib() - (Yb() || 0)) / 1e3),
          h = {},
          l = ((h.k = a.gad_source), (h.i = '' + f), h)
        ql(e, l, d, c)
      }
    }
  }
  function Ql(a, b) {
    var c = yk(!0)
    xl(function () {
      for (var d = Cl(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e]
        if (void 0 !== ul[f]) {
          var h = Dl(f, d),
            l = c[h]
          if (l) {
            var m = Math.min(Rl(l), ib()),
              n
            b: {
              for (
                var p = m, q = Pj(h, H.cookie, void 0, vl()), r = 0;
                r < q.length;
                ++r
              )
                if (Rl(q[r]) > p) {
                  n = !0
                  break b
                }
              n = !1
            }
            if (!n) {
              var t = ik(b, m, !0)
              t.Za = vl()
              ak(h, l, t)
            }
          }
        }
      }
      Ol(Ll(c.gclid, c.gclsrc), !1, b)
    }, vl())
  }
  function Sl(a) {
    var b = []
    eh(6) && b.push('ag')
    if (0 !== b.length) {
      var c = yk(!0),
        d = Cl(a.prefix)
      xl(
        function () {
          for (var e = 0; e < b.length; ++e) {
            var f = Dl(b[e], d)
            if (f) {
              var h = c[f]
              if (h) {
                var l = nl(h)
                if (l) {
                  var m = Hl(l)
                  m || (m = ib())
                  var n
                  a: {
                    for (var p = m, q = pl(f), r = 0; r < q.length; ++r)
                      if (Hl(q[r]) > p) {
                        n = !0
                        break a
                      }
                    n = !1
                  }
                  if (n) break
                  l.i = '' + Math.round(m / 1e3)
                  ql(f, l, a, m)
                }
              }
            }
          }
        },
        ['ad_storage']
      )
    }
  }
  function Dl(a, b) {
    var c = ul[a]
    if (void 0 !== c) return b + c
  }
  function Rl(a) {
    return 0 !== Tl(a.split('.')).length
      ? 1e3 * (Number(a.split('.')[1]) || 0)
      : 0
  }
  function Hl(a) {
    return a ? 1e3 * (Number(a.i) || 0) : 0
  }
  function Il(a) {
    var b = Tl(a.split('.'))
    return 0 === b.length
      ? null
      : {
          version: b[0],
          W: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        }
  }
  function Tl(a) {
    return 3 > a.length ||
      ('GCL' !== a[0] && '1' !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !sl.test(a[2])
      ? []
      : a
  }
  function Ul(a, b, c, d, e) {
    if (Array.isArray(b) && Oj(F)) {
      var f = Cl(e),
        h = function () {
          for (var l = {}, m = 0; m < a.length; ++m) {
            var n = Dl(a[m], f)
            if (n) {
              var p = Pj(n, H.cookie, void 0, vl())
              p.length && (l[n] = p.sort()[p.length - 1])
            }
          }
          return l
        }
      xl(function () {
        Fk(h, b, c, d)
      }, vl())
    }
  }
  function Vl(a, b, c, d) {
    if (Array.isArray(a) && Oj(F)) {
      var e = []
      eh(6) && e.push('ag')
      if (0 !== e.length) {
        var f = Cl(d),
          h = function () {
            for (var l = {}, m = 0; m < e.length; ++m) {
              var n = Dl(e[m], f)
              if (!n) return {}
              var p = pl(n)
              if (p.length) {
                var q = p.sort(function (r, t) {
                  return Hl(t) - Hl(r)
                })[0]
                l[n] = ol(q)
              }
            }
            return l
          }
        xl(
          function () {
            Fk(h, a, b, c)
          },
          ['ad_storage']
        )
      }
    }
  }
  function Jl(a) {
    return a.filter(function (b) {
      return sl.test(b.W)
    })
  }
  function Wl(a, b) {
    if (Oj(F)) {
      for (var c = Cl(b.prefix), d = {}, e = 0; e < a.length; e++)
        ul[a[e]] && (d[a[e]] = ul[a[e]])
      xl(function () {
        A(d, function (f, h) {
          var l = Pj(c + h, H.cookie, void 0, vl())
          l.sort(function (t, v) {
            return Rl(v) - Rl(t)
          })
          if (l.length) {
            var m = l[0],
              n = Rl(m),
              p = 0 !== Tl(m.split('.')).length ? m.split('.').slice(3) : [],
              q = {},
              r
            r = 0 !== Tl(m.split('.')).length ? m.split('.')[2] : void 0
            q[f] = [r]
            Ol(q, !0, b, n, p)
          }
        })
      }, vl())
    }
  }
  function Xl(a) {
    var b = [],
      c = []
    eh(6) && (b.push('ag'), c.push('gbraid'))
    0 !== b.length &&
      xl(
        function () {
          for (var d = Cl(a.prefix), e = 0; e < b.length; ++e) {
            var f = Dl(b[e], d)
            if (!f) break
            var h = pl(f)
            if (h.length) {
              var l = h.sort(function (q, r) {
                  return Hl(r) - Hl(q)
                })[0],
                m = Hl(l),
                n = l.b,
                p = {}
              p[c[e]] = l.k
              Ol(p, !0, a, m, n)
            }
          }
        },
        ['ad_storage']
      )
  }
  function Yl(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0
    return !1
  }
  function Zl(a) {
    function b(e, f, h) {
      h && (e[f] = h)
    }
    if (Eh()) {
      var c = Ml()
      if (Yl(c, a)) {
        var d = {}
        b(d, 'gclid', c.gclid)
        b(d, 'dclid', c.dclid)
        b(d, 'gclsrc', c.gclsrc)
        b(d, 'wbraid', c.wbraid)
        eh(6) && b(d, 'gbraid', c.gbraid)
        Gk(function () {
          return d
        }, 3)
        Gk(function () {
          var e = {}
          return (e._up = '1'), e
        }, 1)
      }
    }
  }
  function $l(a) {
    if (!eh(1)) return null
    var b = yk(!0).gad_source
    if (null != b) return (F.location.hash = ''), b
    if (eh(2)) {
      var c = hf(F.location.href)
      b = df(c, 'query', !1, void 0, 'gad_source')
      if (null != b) return b
      var d = Ml()
      if (Yl(d, a)) return '0'
    }
    return null
  }
  function am(a) {
    var b = $l(a)
    null != b &&
      Gk(function () {
        var c = {}
        return (c.gad_source = b), c
      }, 4)
  }
  function bm(a, b, c) {
    var d = []
    if (0 === b.length) return d
    for (var e = {}, f = 0; f < b.length; f++) {
      var h = b[f],
        l = h.type ? h.type : 'gcl'
      ;-1 === (h.labels || []).indexOf(c)
        ? (a.push(0), e[l] || d.push(h))
        : a.push(1)
      e[l] = !0
    }
    return d
  }
  function cm(a, b, c, d) {
    var e = []
    c = c || {}
    if (!wl(vl())) return e
    var f = zl(a),
      h = bm(e, f, b)
    if (h.length && !d)
      for (var l = ma(h), m = l.next(); !m.done; m = l.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.W]
            .concat(n.labels || [], [b])
            .join('.'),
          r = ik(c, p, !0)
        r.Za = vl()
        ak(a, q, r)
      }
    return e
  }
  function dm(a, b) {
    var c = []
    b = b || {}
    var d = Bl(b),
      e = bm(c, d, a)
    if (e.length)
      for (var f = ma(e), h = f.next(); !h.done; h = f.next()) {
        var l = h.value,
          m = Cl(b.prefix),
          n = Dl(l.type, m)
        if (!n) break
        var p = l,
          q = p.version,
          r = p.W,
          t = p.labels,
          v = p.timestamp,
          u = Math.round(v / 1e3)
        if ('ag' === l.type) {
          var w = {},
            y = ((w.k = r), (w.i = '' + u), (w.b = (t || []).concat([a])), w)
          ql(n, y, b, v)
        } else if ('gb' === l.type) {
          var x = [q, u, r].concat(t || [], [a]).join('.'),
            B = ik(b, v, !0)
          B.Za = vl()
          ak(n, x, B)
        }
      }
    return c
  }
  function em(a, b) {
    var c = Cl(b),
      d = Dl(a, c)
    if (!d) return 0
    var e
    e = 'ag' === a ? (eh(6) ? El(d) : []) : zl(d)
    for (var f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp)
    return f
  }
  function fm(a) {
    for (var b = 0, c = ma(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp))
    return b
  }
  function gm(a, b) {
    var c = Math.max(em('aw', a), fm(wl(vl()) ? Xk() : {})),
      d = Math.max(em('gb', a), fm(wl(vl()) ? Xk('_gac_gb', !0) : {}))
    eh(6) && b && (d = Math.max(d, em('ag', a)))
    return d > c
  }
  var um,
    vm = !1
  function wm(a) {
    if (!vm) {
      vm = !0
      um = um || {}
    }
    return um[a]
  }
  var xm = function (a, b, c) {
    this.eventName = b
    this.m = c
    this.C = {}
    this.isAborted = !1
    this.target = a
    this.metadata = g(c.eventMetadata || {}, {})
  }
  xm.prototype.copyToHitData = function (a, b, c) {
    var d = P(this.m, a)
    void 0 === d && (d = b)
    if (void 0 !== d && void 0 !== c && k(d) && S(48))
      try {
        d = c(d)
      } catch (e) {}
    void 0 !== d && (this.C[a] = d)
  }
  var ym = function (a, b, c) {
    var d = wm(a.target.da)
    return d && void 0 !== d[b] ? d[b] : c
  }
  function zm() {
    qe.dedupe_gclid || (qe.dedupe_gclid = hk())
    return qe.dedupe_gclid
  }
  var Am = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Bm = /^www.googleadservices.com$/
  function Cm(a) {
    a || (a = Dm())
    return a.Xl
      ? !1
      : a.Ok || a.Pk || a.Rk || a.Qk || a.Tf || a.Of || a.Dk || a.Gk
      ? !0
      : !1
  }
  function Dm() {
    var a = {},
      b = yk(!0)
    a.Xl = !!b._up
    var c = Ml()
    a.Ok = void 0 !== c.aw
    a.Pk = void 0 !== c.dc
    a.Rk = void 0 !== c.wbraid
    a.Qk = void 0 !== c.gbraid
    var d = hf(F.location.href),
      e = df(d, 'query', !1, void 0, 'gad')
    a.Tf = void 0 !== e
    if (!a.Tf) {
      var f = d.hash.replace('#', ''),
        h = af(f, 'gad')
      a.Tf = void 0 !== h
    }
    a.Of = df(d, 'query', !1, void 0, 'gad_source')
    if (void 0 === a.Of) {
      var l = d.hash.replace('#', ''),
        m = af(l, 'gad_source')
      a.Of = m
    }
    var n = H.referrer ? df(hf(H.referrer), 'host') : ''
    a.Gk = Am.test(n)
    a.Dk = Bm.test(n)
    return a
  }
  var Em = RegExp(
      '^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$'
    ),
    Fm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Gm = /^\d+\.fls\.doubleclick\.net$/,
    Hm = /;gac=([^;?]+)/,
    Im = /;gacgb=([^;?]+)/
  function Jm(a, b) {
    if (Gm.test(H.location.host)) {
      var c = H.location.href.match(b)
      return c && 2 === c.length && c[1].match(Em)
        ? decodeURIComponent(c[1])
        : ''
    }
    for (
      var d = [], e = ma(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var h = f.value, l = [], m = a[h], n = 0; n < m.length; n++)
        l.push(m[n].W)
      d.push(h + ':' + l.join(','))
    }
    return 0 < d.length ? d.join(';') : ''
  }
  function Km(a, b, c) {
    for (
      var d = wl(vl()) ? Xk('_gac_gb', !0) : {},
        e = [],
        f = !1,
        h = ma(Object.keys(d)),
        l = h.next();
      !l.done;
      l = h.next()
    ) {
      var m = l.value,
        n = cm('_gac_gb_' + m, a, b, c)
      f =
        f ||
        (0 !== n.length &&
          n.some(function (p) {
            return 1 === p
          }))
      e.push(m + ':' + n.join(','))
    }
    return { Ck: f ? e.join(';') : '', Bk: Jm(d, Im) }
  }
  function Lm(a) {
    var b = H.location.href.match(new RegExp(';' + a + '=([^;?]+)'))
    return b && 2 === b.length && b[1].match(Fm) ? b[1] : void 0
  }
  function Mm(a) {
    var b = { Pf: void 0, Qf: void 0 },
      c,
      d
    Gm.test(H.location.host) && ((c = Lm('gclgs')), (d = Lm('gclst')))
    if (c && d) (b.Pf = c), (b.Qf = d)
    else {
      var e = ib(),
        f = El((a || '_gcl') + '_gs'),
        h = f.map(function (m) {
          return m.W
        }),
        l = f.map(function (m) {
          return e - m.timestamp
        })
      0 < h.length &&
        0 < l.length &&
        ((b.Pf = h.join('.')), (b.Qf = l.join('.')))
    }
    return b
  }
  function Nm(a, b, c) {
    if (Gm.test(H.location.host)) {
      var d = Lm(c)
      if (d) return [{ W: d }]
    } else {
      if ('gclid' === b) return zl((a || '_gcl') + '_aw')
      if ('wbraid' === b) return zl((a || '_gcl') + '_gb')
      if ('braids' === b) return Bl({ prefix: a })
    }
    return []
  }
  function Om(a) {
    return Nm(a, 'gclid', 'gclaw')
      .map(function (b) {
        return b.W
      })
      .join('.')
  }
  function Pm(a) {
    return Nm(a, 'wbraid', 'gclgb')
      .map(function (b) {
        return b.W
      })
      .join('.')
  }
  function Qm(a) {
    return Nm(a, 'braids', 'gclgb')
      .map(function (b) {
        return b.W
      })
      .join('.')
  }
  function Rm(a, b) {
    return Gm.test(H.location.host) ? !(Lm('gclaw') || Lm('gac')) : gm(a, b)
  }
  function Sm(a, b, c) {
    var d
    d = c ? dm(a, b) : cm(((b && b.prefix) || '_gcl') + '_gb', a, b)
    return 0 === d.length ||
      d.every(function (e) {
        return 0 === e
      })
      ? ''
      : d.join('.')
  }
  var Tm = function () {
    if (Wa(F.__uspapi)) {
      var a = ''
      try {
        F.__uspapi('getUSPData', 1, function (b, c) {
          if (c && b) {
            var d = b.uspString
            d && RegExp('^[\\da-zA-Z-]{1,20}$').test(d) && (a = d)
          }
        })
      } catch (b) {}
      return a
    }
  }
  function an(a) {
    var b = P(a.m, M.g.zb),
      c = P(a.m, M.g.yb)
    b && !c
      ? (a.eventName !== M.g.Z && a.eventName !== M.g.oc && L(131),
        (a.isAborted = !0))
      : !b && c && (L(132), (a.isAborted = !0))
  }
  function bn(a) {
    var b = T(M.g.O) ? qe.pscdl : 'denied'
    null != b && (a.C[M.g.Wd] = b)
  }
  function cn(a) {
    var b = Rg(!0)
    a.C[M.g.xb] = b
  }
  function kn(a, b, c, d) {
    var e = Kb(),
      f
    if (1 === e)
      a: {
        var h = Be
        h = h.toLowerCase()
        for (
          var l = 'https://' + h,
            m = 'http://' + h,
            n = 1,
            p = H.getElementsByTagName('script'),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src
          if (r) {
            r = r.toLowerCase()
            if (0 === r.indexOf(m)) {
              f = 3
              break a
            }
            1 === n && 0 === r.indexOf(l) && (n = 2)
          }
        }
        f = n
      }
    else f = e
    return (2 === f || d || 'http:' != F.location.protocol ? a : b) + c
  }
  function xn(a) {
    return {
      getDestinationId: function () {
        return a.target.da
      },
      getEventName: function () {
        return a.eventName
      },
      setEventName: function (b) {
        a.eventName = b
      },
      getHitData: function (b) {
        return a.C[b]
      },
      setHitData: function (b, c) {
        a.C[b] = c
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.C[b] && (a.C[b] = c)
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c)
      },
      getMetadata: function (b) {
        return a.metadata[b]
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c
      },
      isAborted: function () {
        return a.isAborted
      },
      abort: function () {
        a.isAborted = !0
      },
      getFromEventContext: function (b) {
        return P(a.m, b)
      },
      Tm: function () {
        return a
      },
      getHitKeys: function () {
        return Object.keys(a.C)
      },
    }
  }
  function Dn() {
    var a = F.screen
    return { width: a ? a.width : 0, height: a ? a.height : 0 }
  }
  function En(a) {
    if (H.hidden) return !0
    var b = a.getBoundingClientRect()
    if (b.top === b.bottom || b.left === b.right || !F.getComputedStyle)
      return !0
    var c = F.getComputedStyle(a, null)
    if ('hidden' === c.visibility) return !0
    for (var d = a, e = c; d; ) {
      if ('none' === e.display) return !0
      var f = e.opacity,
        h = e.filter
      if (h) {
        var l = h.indexOf('opacity(')
        0 <= l &&
          ((h = h.substring(l + 8, h.indexOf(')', l))),
          '%' === h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)),
          (f = String(Math.min(Number(h), Number(f)))))
      }
      if (void 0 !== f && 0 >= Number(f)) return !0
      ;(d = d.parentElement) && (e = F.getComputedStyle(d, null))
    }
    return !1
  }
  var Fo = Number('') || 5,
    Go = Number('') || 50,
    Ho = $a()
  var Mo = {
    Xj: Number('') || 500,
    Mj: Number('') || 5e3,
    Nh: Number('20') || 10,
    Wi: Number('') || 5e3,
  }
  function No(a) {
    return (a.performance && a.performance.now()) || Date.now()
  }
  var Oo = function (a, b) {
    var c
    return c
  }
  var Po = 'https://' + pe.Mc + '/gtm/static/',
    Qo
  function Vo(a, b) {}
  function Wo(a, b, c, d) {}
  function Xo(a, b, c, d) {}
  function Yo(a, b, c, d) {}
  var Zo = void 0
  function $o(a) {
    var b = []
    return b
  }
  !Eg('Android') || Gg()
  Gg()
  Eg('Safari') &&
    (Gg() ||
      (Fg() ? 0 : Eg('Coast')) ||
      (Fg() ? 0 : Eg('Opera')) ||
      (Fg() ? 0 : Eg('Edge')) ||
      (Fg() ? Dg('Microsoft Edge') : Eg('Edg/')) ||
      (Fg() && Dg('Opera')))
  var ap = {},
    bp = null,
    cp = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d)
        255 < e && ((b[c++] = e & 255), (e >>= 8))
        b[c++] = e
      }
      var f = 4
      void 0 === f && (f = 0)
      if (!bp) {
        bp = {}
        for (
          var h =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                ''
              ),
            l = ['+/=', '+/', '-_=', '-_.', '-_'],
            m = 0;
          5 > m;
          m++
        ) {
          var n = h.concat(l[m].split(''))
          ap[m] = n
          for (var p = 0; p < n.length; p++) {
            var q = n[p]
            void 0 === bp[q] && (bp[q] = p)
          }
        }
      }
      for (
        var r = ap[f],
          t = Array(Math.floor(b.length / 3)),
          v = r[64] || '',
          u = 0,
          w = 0;
        u < b.length - 2;
        u += 3
      ) {
        var y = b[u],
          x = b[u + 1],
          B = b[u + 2],
          z = r[y >> 2],
          C = r[((y & 3) << 4) | (x >> 4)],
          G = r[((x & 15) << 2) | (B >> 6)],
          D = r[B & 63]
        t[w++] = '' + z + C + G + D
      }
      var E = 0,
        J = v
      switch (b.length - u) {
        case 2:
          ;(E = b[u + 1]), (J = r[(E & 15) << 2] || v)
        case 1:
          var I = b[u]
          t[w] = '' + r[I >> 2] + r[((I & 3) << 4) | (E >> 4)] + J + v
      }
      return t.join('')
    }
  Object.freeze(new (function () {})())
  Object.freeze(new (function () {})())
  var dp =
    'platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64'.split(
      ' '
    )
  function ep() {
    var a
    return null != (a = F.google_tag_data) ? a : (F.google_tag_data = {})
  }
  function fp() {
    var a = F.google_tag_data,
      b
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c)
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0))
      b = d
    } else b = null
    return b
  }
  function gp() {
    var a, b
    return null !=
      (b = null == (a = F.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null
  }
  function hp() {
    var a, b
    return (
      'function' ===
      typeof (null == (a = F.navigator)
        ? void 0
        : null == (b = a.userAgentData)
        ? void 0
        : b.getHighEntropyValues)
    )
  }
  function ip() {
    if (!hp()) return null
    var a = ep()
    if (a.uach_promise) return a.uach_promise
    var b = F.navigator.userAgentData
      .getHighEntropyValues(dp)
      .then(function (c) {
        null != a.uach || (a.uach = c)
        return c
      })
    return (a.uach_promise = b)
  }
  function op(a) {
    var b
    b = void 0 === b ? document : b
    var c
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
  }
  var pp = !1
  function qp() {
    if (op('join-ad-interest-group') && Wa(Bb.joinAdInterestGroup)) return !0
    pp || (Pg(''), (pp = !0))
    return op('join-ad-interest-group') && Wa(Bb.joinAdInterestGroup)
  }
  function rp(a, b) {
    var c = void 0 === dh[3] ? 1 : dh[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = []
    try {
      if (1 === c) {
        var f = H.querySelector(d)
        f && (e = [f])
      } else e = Array.from(H.querySelectorAll(d))
    } catch (q) {}
    var h
    a: {
      try {
        h = H.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        )
        break a
      } catch (q) {}
      h = void 0
    }
    var l = h,
      m =
        ((null == l ? void 0 : l.length) || 0) >=
        (void 0 === dh[2] ? 50 : dh[2]),
      n
    if ((n = 1 <= e.length)) {
      var p = Number(e[e.length - 1].dataset.loadTime)
      void 0 !== p && ib() - p < (void 0 === dh[1] ? 6e4 : dh[1])
        ? (Sa('TAGGING', 9), (n = !0))
        : (n = !1)
    }
    if (!n) {
      if (1 === c)
        if (1 <= e.length) sp(e[0])
        else {
          if (m) {
            Sa('TAGGING', 10)
            return
          }
        }
      else e.length >= c ? sp(e[0]) : m && sp(l[0])
      Lb(
        a,
        void 0,
        { allow: 'join-ad-interest-group' },
        { taggingId: b, loadTime: ib() }
      )
    }
  }
  function sp(a) {
    try {
      a.parentNode.removeChild(a)
    } catch (b) {}
  }
  function tp() {
    return 'https://td.doubleclick.net'
  }
  var oq = {
    J: {
      ug: 'ads_conversion_hit',
      Lc: 'container_execute_start',
      yg: 'container_setup_end',
      Se: 'container_setup_start',
      wg: 'container_blocking_end',
      xg: 'container_execute_end',
      zg: 'container_yield_end',
      Te: 'container_yield_start',
      Eh: 'event_execute_end',
      Dh: 'event_evaluation_end',
      wf: 'event_evaluation_start',
      Fh: 'event_setup_end',
      nd: 'event_setup_start',
      Hh: 'ga4_conversion_hit',
      pd: 'page_load',
      Bm: 'pageview',
      Fb: 'snippet_load',
      di: 'tag_callback_error',
      ei: 'tag_callback_failure',
      fi: 'tag_callback_success',
      gi: 'tag_execute_end',
      Dc: 'tag_execute_start',
    },
  }
  function pq() {
    function a(c, d) {
      var e = Ta(d)
      e && b.push([c, e])
    }
    var b = []
    a('u', 'GTM')
    a('ut', 'TAGGING')
    a('h', 'HEALTH')
    return b
  }
  var qq = !1
  var Br = function (a, b) {},
    Cr = function (a, b) {},
    Dr = function (a, b) {},
    Er = function (a, b) {},
    Fr = function () {
      var a = {}
      return a
    },
    Qq = function (a) {
      a = void 0 === a ? !0 : a
      var b = {}
      return b
    },
    Gr = function () {},
    Hr = function (a, b) {},
    Ir = function (a, b, c) {}
  function Jr(a, b) {
    var c,
      d = F.GooglebQhCsO
    d || ((d = {}), (F.GooglebQhCsO = d))
    c = d
    if (c[a]) return !1
    c[a] = []
    c[a][0] = b
    return !0
  }
  var Kr = function (a, b, c) {
    var d = Kg(a, 'fmt')
    if (b) {
      var e = Kg(a, 'random'),
        f = Kg(a, 'label') || ''
      if (!e) return !1
      var h = cp(
        decodeURIComponent(f.replace(/\+/g, ' ')) +
          ':' +
          decodeURIComponent(e.replace(/\+/g, ' '))
      )
      if (!Jr(h, b)) return !1
    }
    d && 4 != d && (a = Mg(a, 'rfmt', d))
    var l = Mg(a, 'fmt', 4)
    Jb(
      l,
      function () {
        F.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((F.google_noFurtherRedirects = null), b())
      },
      void 0,
      c,
      H.getElementsByTagName('script')[0].parentElement || void 0
    )
    return !0
  }
  function $r(a, b) {
    if (data.entities) {
      var c = data.entities[a]
      if (c) return c[b]
    }
  }
  function as(a) {
    var b = Ff(),
      c
    c = void 0 === c ? !1 : c
    bs().addRestriction(0, b, a, c)
  }
  function cs(a) {
    var b = Ff(),
      c
    c = void 0 === c ? !1 : c
    bs().addRestriction(1, b, a, c)
  }
  function ds() {
    var a = Ff()
    return bs().getRestrictions(1, a)
  }
  var es = function () {
      this.D = {}
      this.F = {}
    },
    fs = function (a, b) {
      var c = a.D[b]
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.D[b] = c))
      return c
    }
  es.prototype.addRestriction = function (a, b, c, d) {
    d = void 0 === d ? !1 : d
    if (!d || !this.F[b]) {
      var e = fs(this, b)
      0 === a
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : 1 === a && (d ? e._event.external.push(c) : e._event.internal.push(c))
    }
  }
  es.prototype.getRestrictions = function (a, b) {
    var c = fs(this, b)
    if (0 === a) {
      var d, e
      return [].concat(
        oa(
          (null == c
            ? void 0
            : null == (d = c._entity)
            ? void 0
            : d.internal) || []
        ),
        oa(
          (null == c
            ? void 0
            : null == (e = c._entity)
            ? void 0
            : e.external) || []
        )
      )
    }
    if (1 === a) {
      var f, h
      return [].concat(
        oa(
          (null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) ||
            []
        ),
        oa(
          (null == c ? void 0 : null == (h = c._event) ? void 0 : h.external) ||
            []
        )
      )
    }
    return []
  }
  es.prototype.getExternalRestrictions = function (a, b) {
    var c = fs(this, b),
      d,
      e
    return 0 === a
      ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) ||
          []
      : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) ||
          []
  }
  es.prototype.removeExternalRestrictions = function (a) {
    var b = fs(this, a)
    b._event && (b._event.external = [])
    b._entity && (b._entity.external = [])
    this.F[a] = !0
  }
  function bs() {
    var a = qe.r
    a || ((a = new es()), (qe.r = a))
    return a
  }
  var gs = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    hs = {
      cl: ['ecl'],
      customPixels: ['nonGooglePixels'],
      ecl: ['cl'],
      ehl: ['hl'],
      gaawc: ['googtag'],
      hl: ['ehl'],
      html: [
        'customScripts',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      customScripts: [
        'html',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ['nonGooglePixels'],
      nonGoogleIframes: ['nonGooglePixels'],
    },
    is = {
      cl: ['ecl'],
      customPixels: ['customScripts', 'html'],
      ecl: ['cl'],
      ehl: ['hl'],
      gaawc: ['googtag'],
      hl: ['ehl'],
      html: ['customScripts'],
      customScripts: ['html'],
      nonGooglePixels: [
        'customPixels',
        'customScripts',
        'html',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      nonGoogleScripts: ['customScripts', 'html'],
      nonGoogleIframes: ['customScripts', 'html', 'nonGoogleScripts'],
    },
    js =
      'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split(
        ' '
      )
  function ks() {
    var a = Re('gtm.allowlist') || Re('gtm.whitelist')
    a && L(9)
    ve && (a = ['google', 'gtagfl', 'lcl', 'zone'])
    gs.test(F.location && F.location.hostname) &&
      (ve
        ? L(116)
        : (L(117),
          ls &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log('GTM blocked. See go/13687728.'))))
    var b = a && mb(fb(a), hs),
      c = Re('gtm.blocklist') || Re('gtm.blacklist')
    c || ((c = Re('tagTypeBlacklist')) && L(3))
    c ? L(8) : (c = [])
    gs.test(F.location && F.location.hostname) &&
      ((c = fb(c)),
      c.push('nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts'))
    0 <= fb(c).indexOf('google') && L(2)
    var d = c && mb(fb(c), is),
      e = {}
    return function (f) {
      var h = f && f[ec.na]
      if (!h || 'string' !== typeof h) return !0
      h = h.replace(/^_*/, '')
      if (void 0 !== e[h]) return e[h]
      var l = Fe[h] || [],
        m = !0
      if (a) {
        var n
        if ((n = m))
          a: {
            if (0 > b.indexOf(h))
              if (l && 0 < l.length)
                for (var p = 0; p < l.length; p++) {
                  if (0 > b.indexOf(l[p])) {
                    L(11)
                    n = !1
                    break a
                  }
                }
              else {
                n = !1
                break a
              }
            n = !0
          }
        m = n
      }
      var q = !1
      if (c) {
        var r = 0 <= d.indexOf(h)
        if (r) q = r
        else {
          var t = ab(d, l || [])
          t && L(10)
          q = t
        }
      }
      var v = !m || q
      v ||
        !(0 <= l.indexOf('sandboxedScripts')) ||
        (b && -1 !== b.indexOf('sandboxedScripts')) ||
        (v = ab(d, js))
      return (e[h] = v)
    }
  }
  var ls = !1
  ls = !0
  function ms() {
    wf &&
      as(function (a) {
        var b = {}
        b[ec.na] = '__' + a.entityId
        for (var c in void 0)
          (void 0).hasOwnProperty(c) && (b['vtp_' + c] = (void 0)[c])
        var d
        if (Tc(b)) {
          var e = b[ec.na]
          if (!e) throw 'Error: No function name given for function call.'
          var f = Hc[e]
          d = !!f && !!f.runInSiloedMode
        } else d = !!$r(b[ec.na], 4)
        return d
      })
  }
  var os = function (a, b, c, d) {
      if (!ns()) {
        var e = d.siloed ? Af(a) : a
        if (!sf().container[e]) {
          var f = '?id=' + encodeURIComponent(a) + '&l=' + pe.Ga,
            h = 0 === a.indexOf('GTM-')
          h || (f += '&cx=c')
          S(56) && (f += '&gtm=' + Ij())
          var l = nf()
          l && (f += '&sign=' + pe.Ee)
          var m = c ? '/gtag/js' : '/gtm.js',
            n = Ie.F || xe ? mf(b, m + f) : void 0
          if (!n) {
            var p = pe.Mc + m
            l && Db && h
              ? ((p = Db.replace(/^(?:https?:\/\/)?/i, '').split(/[?#]/)[0]),
                (n = kn('https://', 'http://', p + f)))
              : (n = Ie.F ? Je() + m + f : kn('https://', 'http://', p + f))
          }
          d.siloed && Pf({ ctid: e, isDestination: !1 })
          var q = If()
          sf().container[e] = { state: 1, context: d, parent: q }
          tf({ ctid: e, isDestination: !1 })
          Jb(n)
        }
      }
    },
    ps = function (a, b, c) {
      if (!ns()) {
        var d = c.siloed ? Af(a) : a,
          e = sf().destination[d]
        if (!e || !e.state)
          if (!c.siloed && Qf())
            (sf().destination[d] = {
              state: 0,
              transportUrl: b,
              context: c,
              parent: If(),
            }),
              tf({ ctid: d, isDestination: !0 }),
              L(91)
          else {
            var f =
              '/gtag/destination?id=' +
              encodeURIComponent(a) +
              '&l=' +
              pe.Ga +
              '&cx=c'
            S(56) && (f += '&gtm=' + Ij())
            nf() && (f += '&sign=' + pe.Ee)
            var h = Ie.F || xe ? mf(b, f) : void 0
            h || (h = Ie.F ? Je() + f : kn('https://', 'http://', pe.Mc + f))
            c.siloed && Pf({ ctid: d, isDestination: !0 })
            sf().destination[d] = { state: 1, context: c, parent: If() }
            tf({ ctid: d, isDestination: !0 })
            Jb(h)
          }
      }
    }
  function ns() {
    if (Gj()) {
      return !0
    }
    return !1
  }
  var qs = !1,
    rs = 0,
    ss = []
  function ts(a) {
    if (!qs) {
      var b = H.createEventObject,
        c = 'complete' === H.readyState,
        d = 'interactive' === H.readyState
      if (!a || 'readystatechange' !== a.type || c || (!b && d)) {
        qs = !0
        for (var e = 0; e < ss.length; e++) K(ss[e])
      }
      ss.push = function () {
        for (var f = ya.apply(0, arguments), h = 0; h < f.length; h++) K(f[h])
        return 0
      }
    }
  }
  function us() {
    if (!qs && 140 > rs) {
      rs++
      try {
        var a, b
        null == (b = (a = H.documentElement).doScroll) || b.call(a, 'left')
        ts()
      } catch (c) {
        F.setTimeout(us, 50)
      }
    }
  }
  function vs(a) {
    qs ? a() : ss.push(a)
  }
  function ws(a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: Df(),
    }
  }
  var ys = function (a, b) {
      this.D = !1
      this.K = []
      this.eventData = { tags: [] }
      this.P = !1
      this.F = this.H = 0
      xs(this, a, b)
    },
    zs = function (a, b, c, d) {
      if (se.hasOwnProperty(b) || '__zone' === b) return -1
      var e = {}
      Ka(d) && (e = g(d, e))
      e.id = c
      e.status = 'timeout'
      return a.eventData.tags.push(e) - 1
    },
    As = function (a, b, c, d) {
      var e = a.eventData.tags[b]
      e && ((e.status = c), (e.executionTime = d))
    },
    Bs = function (a) {
      if (!a.D) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]()
        a.D = !0
        a.K.length = 0
      }
    },
    xs = function (a, b, c) {
      void 0 !== b && Cs(a, b)
      c &&
        F.setTimeout(function () {
          Bs(a)
        }, Number(c))
    },
    Cs = function (a, b) {
      var c = kb(function () {
        K(function () {
          b(Df(), a.eventData)
        })
      })
      a.D ? c() : a.K.push(c)
    },
    Ds = function (a) {
      a.H++
      return kb(function () {
        a.F++
        a.P && a.F >= a.H && Bs(a)
      })
    },
    Es = function (a) {
      a.P = !0
      a.F >= a.H && Bs(a)
    }
  var Fs = {},
    Hs = function () {
      return F[Gs()]
    }
  function Gs() {
    return F.GoogleAnalyticsObject || 'ga'
  }
  var Ks = function () {
      var a = Df()
    },
    Ls = function (a, b) {
      return function () {
        var c = Hs(),
          d = c && c.getByName && c.getByName(a)
        if (d) {
          var e = d.get('sendHitTask')
          d.set('sendHitTask', function (f) {
            var h = f.get('hitPayload'),
              l = f.get('hitCallback'),
              m = 0 > h.indexOf('&tid=' + b)
            m &&
              (f.set(
                'hitPayload',
                h.replace(/&tid=UA-[0-9]+-[0-9]+/, '&tid=' + b),
                !0
              ),
              f.set('hitCallback', void 0, !0))
            e(f)
            m &&
              (f.set('hitPayload', h, !0),
              f.set('hitCallback', l, !0),
              f.set('_x_19', void 0, !0),
              e(f))
          })
        }
      }
    }
  var Qs = ['es', '1'],
    Rs = {},
    Ss = {}
  function Ts(a, b) {
    if (dg) {
      var c
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : '*'
      Rs[a] = [
        ['e', c],
        ['eid', a],
      ]
      og(a)
    }
  }
  function Us(a) {
    var b = a.eventId,
      c = a.Na
    if (!Rs[b]) return []
    var d = []
    Ss[b] || d.push(Qs)
    d.push.apply(d, oa(Rs[b]))
    c && (Ss[b] = !0)
    return d
  }
  var Vs = {},
    Ws = {},
    Xs = {}
  function Ys(a, b, c, d) {
    dg &&
      S(65) &&
      ((void 0 === d ? 0 : d)
        ? ((Xs[b] = Xs[b] || 0), ++Xs[b])
        : void 0 !== c
        ? ((Ws[a] = Ws[a] || {}), (Ws[a][b] = Math.round(c)))
        : ((Vs[a] = Vs[a] || {}), (Vs[a][b] = (Vs[a][b] || 0) + 1)))
  }
  function Zs(a) {
    var b = a.eventId,
      c = a.Na,
      d = Vs[b] || {},
      e = [],
      f
    for (f in d) d.hasOwnProperty(f) && e.push('' + f + d[f])
    c && delete Vs[b]
    return e.length ? [['md', e.join('.')]] : []
  }
  function $s(a) {
    var b = a.eventId,
      c = a.Na,
      d = Ws[b] || {},
      e = [],
      f
    for (f in d) d.hasOwnProperty(f) && e.push('' + f + d[f])
    c && delete Ws[b]
    return e.length ? [['mtd', e.join('.')]] : []
  }
  function at() {
    for (
      var a = [], b = ma(Object.keys(Xs)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value
      a.push('' + d + Xs[d])
    }
    return a.length ? [['mec', a.join('.')]] : []
  }
  var bt = {},
    ct = {}
  function dt(a, b, c) {
    if (dg && b) {
      var d = qf(b)
      bt[a] = bt[a] || []
      bt[a].push(c + d)
      var e = (Tc(b) ? '1' : '2') + d
      ct[a] = ct[a] || []
      ct[a].push(e)
      og(a)
    }
  }
  function et(a) {
    var b = a.eventId,
      c = a.Na,
      d = [],
      e = bt[b] || []
    e.length && d.push(['tr', e.join('.')])
    var f = ct[b] || []
    f.length && d.push(['ti', f.join('.')])
    c && (delete bt[b], delete ct[b])
    return d
  }
  function ft(a, b, c, d) {
    var e = Ec[a],
      f = gt(a, b, c, d)
    if (!f) return null
    var h = Qc(e[ec.Xh], c, [])
    if (h && h.length) {
      var l = h[0]
      f = ft(
        l.index,
        {
          onSuccess: f,
          onFailure: 1 === l.si ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      )
    }
    return f
  }
  function gt(a, b, c, d) {
    function e() {
      if (f[ec.Qj]) l()
      else {
        var w = Rc(f, c, []),
          y = w[ec.Ui]
        if (null != y)
          for (var x = 0; x < y.length; x++)
            if (!T(y[x])) {
              l()
              return
            }
        var B = zs(c.Rb, String(f[ec.na]), Number(f[ec.ud]), w[ec.Rj]),
          z = !1
        w.vtp_gtmOnSuccess = function () {
          if (!z) {
            z = !0
            var D = ib() - G
            dt(c.id, Ec[a], '5')
            As(c.Rb, B, 'success', D)
            S(57) && Ir(c, f, oq.J.fi)
            h()
          }
        }
        w.vtp_gtmOnFailure = function () {
          if (!z) {
            z = !0
            var D = ib() - G
            dt(c.id, Ec[a], '6')
            As(c.Rb, B, 'failure', D)
            S(57) && Ir(c, f, oq.J.ei)
            l()
          }
        }
        w.vtp_gtmTagId = f.tag_id
        w.vtp_gtmEventId = c.id
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId)
        dt(c.id, f, '1')
        var C = function () {
          kh(3)
          var D = ib() - G
          dt(c.id, f, '7')
          As(c.Rb, B, 'exception', D)
          S(57) && Ir(c, f, oq.J.di)
          z || ((z = !0), l())
        }
        S(57) && Hr(c, f)
        var G = ib()
        try {
          Pc(w, { event: c, index: a, type: 1 })
        } catch (D) {
          C(D)
        }
        S(57) && Ir(c, f, oq.J.gi)
      }
    }
    var f = Ec[a],
      h = b.onSuccess,
      l = b.onFailure,
      m = b.terminate
    if (c.isBlocked(f)) return null
    var n = Qc(f[ec.hi], c, [])
    if (n && n.length) {
      var p = n[0],
        q = ft(p.index, { onSuccess: h, onFailure: l, terminate: m }, c, d)
      if (!q) return null
      h = q
      l = 2 === p.si ? m : q
    }
    if (f[ec.Qh] || f[ec.Tj]) {
      var r = f[ec.Qh] ? Gc : c.Ql,
        t = h,
        v = l
      if (!r[a]) {
        e = kb(e)
        var u = ht(a, r, e)
        h = u.onSuccess
        l = u.onFailure
      }
      return function () {
        r[a](t, v)
      }
    }
    return e
  }
  function ht(a, b, c) {
    var d = [],
      e = []
    b[a] = it(d, e, c)
    return {
      onSuccess: function () {
        b[a] = jt
        for (var f = 0; f < d.length; f++) d[f]()
      },
      onFailure: function () {
        b[a] = kt
        for (var f = 0; f < e.length; f++) e[f]()
      },
    }
  }
  function it(a, b, c) {
    return function (d, e) {
      a.push(d)
      b.push(e)
      c()
    }
  }
  function jt(a) {
    a()
  }
  function kt(a, b) {
    b()
  }
  var nt = function (a, b) {
    for (var c = [], d = 0; d < Ec.length; d++)
      if (a[d]) {
        var e = Ec[d]
        var f = Ds(b.Rb)
        try {
          var h = ft(d, { onSuccess: f, onFailure: f, terminate: f }, b, d)
          if (h) {
            var l = e[ec.na]
            if (!l) throw 'Error: No function name given for function call.'
            var m = Hc[l]
            c.push({
              Ni: d,
              Fi: (m ? m.priorityOverride || 0 : 0) || $r(e[ec.na], 1) || 0,
              execute: h,
            })
          } else lt(d, b), f()
        } catch (p) {
          f()
        }
      }
    c.sort(mt)
    for (var n = 0; n < c.length; n++) c[n].execute()
    return 0 < c.length
  }
  function mt(a, b) {
    var c,
      d = b.Fi,
      e = a.Fi
    c = d > e ? 1 : d < e ? -1 : 0
    var f
    if (0 !== c) f = c
    else {
      var h = a.Ni,
        l = b.Ni
      f = h > l ? 1 : h < l ? -1 : 0
    }
    return f
  }
  function lt(a, b) {
    if (dg) {
      var c = function (d) {
        var e = b.isBlocked(Ec[d]) ? '3' : '4',
          f = Qc(Ec[d][ec.Xh], b, [])
        f && f.length && c(f[0].index)
        dt(b.id, Ec[d], e)
        var h = Qc(Ec[d][ec.hi], b, [])
        h && h.length && c(h[0].index)
      }
      c(a)
    }
  }
  var qt = !1,
    ot
  var vt = function (a) {
    var b = a['gtm.uniqueEventId'],
      c = a['gtm.priorityId'],
      d = a.event
    if (S(57)) {
    }
    if ('gtm.js' === d) {
      if (qt) return !1
      qt = !0
    }
    var e = !1,
      f = ds(),
      h = g(a)
    if (
      !f.every(function (t) {
        return t({ originalEventData: h })
      })
    ) {
      if ('gtm.js' !== d && 'gtm.init' !== d && 'gtm.init_consent' !== d)
        return !1
      e = !0
    }
    Ts(b, d)
    var l = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: rt(h, e),
        Ql: [],
        logMacroError: function () {
          L(6)
          kh(0)
        },
        cachedModelValues: st(),
        Rb: new ys(function () {
          if (S(57)) {
          }
          l && l.apply(l, [].slice.call(arguments, 0))
        }, m),
        originalEventData: h,
      }
    S(65) && dg && (n.reportMacroDiscrepancy = Ys)
    S(57) && Dr(n.id, n.name)
    var p = Wc(n)
    S(57) && Er(n.id, n.name)
    e && (p = tt(p))
    if (S(57)) {
    }
    var q = nt(p, n),
      r = !1
    Es(n.Rb)
    ;('gtm.js' !== d && 'gtm.sync' !== d) || Ks()
    return ut(p, q) || r
  }
  function st() {
    var a = {}
    a.event = Ve('event', 1)
    a.ecommerce = Ve('ecommerce', 1)
    a.gtm = Ve('gtm')
    a.eventModel = Ve('eventModel')
    return a
  }
  function rt(a, b) {
    var c = ks()
    return function (d) {
      if (c(d)) return !0
      var e = d && d[ec.na]
      if (!e || 'string' != typeof e) return !0
      e = e.replace(/^_*/, '')
      var f,
        h = Ff()
      f = bs().getRestrictions(0, h)
      var l = a
      b && ((l = g(a)), (l['gtm.uniqueEventId'] = Number.MAX_SAFE_INTEGER))
      for (
        var m = Fe[e] || [], n = ma(f), p = n.next();
        !p.done;
        p = n.next()
      ) {
        var q = p.value
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: l }))
            return !0
        } catch (r) {
          return !0
        }
      }
      return !1
    }
  }
  function tt(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(Ec[c][ec.na])
        if (re[d] || void 0 !== Ec[c][ec.Uj] || $r(d, 2)) b[c] = !0
      }
    return b
  }
  function ut(a, b) {
    if (!b) return b
    for (var c = 0; c < a.length; c++)
      if (a[c] && Ec[c] && !se[String(Ec[c][ec.na])]) return !0
    return !1
  }
  var wt = 0
  function xt() {
    if (1 === wt && dg) {
      var a = kg(!0, !0, !0, !0)
      Xf && (Wb(a), (Xf = !1))
    }
  }
  var zt = function (a) {
    if (!a.ri || 1 !== wt) return []
    a.ac()
    var b = Wg()
    b.push(['mcc', '1'])
    wt = 3
    return b
  }
  function At(a, b) {
    return 1 === arguments.length ? Bt('config', a) : Bt('config', a, b)
  }
  function Ct(a, b, c) {
    c = c || {}
    c[M.g.Ob] = a
    return Bt('event', b, c)
  }
  function Bt() {
    return arguments
  }
  var Dt = function () {
    this.messages = []
    this.D = []
  }
  Dt.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1
    a['gtm.uniqueEventId'] = b
    a['gtm.priorityId'] = d
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e }
    this.messages.push(f)
    for (var h = 0; h < this.D.length; h++)
      try {
        this.D[h](f)
      } catch (l) {}
  }
  Dt.prototype.listen = function (a) {
    this.D.push(a)
  }
  Dt.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId]
      d || ((d = []), (a[c.notBeforeEventId] = d))
      d.push(c)
    }
    return a
  }
  Dt.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d]
      e.notBeforeEventId === a ? b.push(e) : c.push(e)
    }
    this.messages = c
    return b
  }
  function Et(a, b, c) {
    c.eventMetadata = c.eventMetadata || {}
    c.eventMetadata.source_canonical_id = xf.canonicalContainerId
    Ft().enqueue(a, b, c)
  }
  function Gt() {
    var a = Ht
    Ft().listen(a)
  }
  function Ft() {
    var a = qe.mb
    a || ((a = new Dt()), (qe.mb = a))
    return a
  }
  var It = {},
    Jt = {}
  function Kt(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { jg: void 0, Sf: void 0 }, f++
    ) {
      var h = a[f]
      if (0 <= h.indexOf('-')) {
        if (((e.jg = ci(h, b)), e.jg)) {
          var l = Bf()
          Za(
            l,
            (function (r) {
              return function (t) {
                return r.jg.da === t
              }
            })(e)
          )
            ? c.push(h)
            : d.push(h)
        }
      } else {
        var m = It[h] || []
        e.Sf = {}
        m.forEach(
          (function (r) {
            return function (t) {
              r.Sf[t] = !0
            }
          })(e)
        )
        for (var n = yf(), p = 0; p < n.length; p++)
          if (e.Sf[n[p]]) {
            c = c.concat(Bf())
            break
          }
        var q = Jt[h] || []
        q.length && (c = c.concat(q))
      }
    }
    return { kl: c, nl: d }
  }
  function Lt(a) {
    A(It, function (b, c) {
      var d = c.indexOf(a)
      0 <= d && c.splice(d, 1)
    })
  }
  function Mt(a) {
    A(Jt, function (b, c) {
      var d = c.indexOf(a)
      0 <= d && c.splice(d, 1)
    })
  }
  var Nt = 'HA GF G UA AW DC MC'.split(' '),
    Ot = !1,
    Pt = !1,
    Qt = !1,
    Rt = !1
  function St(a, b) {
    a.hasOwnProperty('gtm.uniqueEventId') ||
      Object.defineProperty(a, 'gtm.uniqueEventId', { value: Ge() })
    b.eventId = a['gtm.uniqueEventId']
    b.priorityId = a['gtm.priorityId']
    return { eventId: b.eventId, priorityId: b.priorityId }
  }
  var Tt = void 0,
    Ut = void 0
  function Vt(a, b, c) {
    var d = g(a)
    d.eventId = void 0
    d.inheritParentConfig = void 0
    Object.keys(b).some(function (f) {
      return void 0 !== b[f]
    }) && L(136)
    var e = g(b)
    g(c, e)
    Et(At(yf()[0], e), a.eventId, d)
  }
  function Wt(a) {
    for (var b = ma([M.g.Ac, M.g.Db]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || Ki.H[d]
      if (e) return e
    }
  }
  var Xt = [
      M.g.Ac,
      M.g.Db,
      M.g.vc,
      M.g.hb,
      M.g.pb,
      M.g.za,
      M.g.ra,
      M.g.Ka,
      M.g.Qa,
      M.g.vb,
    ],
    Yt = {
      config: function (a, b) {
        var c = St(a, b)
        if (!(2 > a.length) && k(a[1])) {
          var d = {}
          if (2 < a.length) {
            if ((void 0 != a[2] && !Ka(a[2])) || 3 < a.length) return
            d = a[2]
          }
          var e = ci(a[1], b.isGtmEvent)
          if (e) {
            var f, h, l
            a: {
              if (!vf.od) {
                var m = Hf(If())
                if (Sf(m)) {
                  var n = m.parent,
                    p = n.isDestination
                  l = { tl: Hf(n), jl: p }
                  break a
                }
              }
              l = void 0
            }
            var q = l
            q && ((f = q.tl), (h = q.jl))
            Ts(c.eventId, 'gtag.config')
            var r = e.da,
              t = e.id !== r
            if (t ? -1 === Bf().indexOf(r) : -1 === yf().indexOf(r)) {
              if (!b.inheritParentConfig && !d[M.g.zb]) {
                var v = Wt(d)
                if (t)
                  ps(r, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  })
                else if (void 0 !== f && -1 !== f.containers.indexOf(r)) {
                  var u = d
                  Tt ? Vt(b, u, Tt) : Ut || (Ut = g(u))
                } else
                  os(r, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  })
              }
            } else {
              if (f && (L(128), h && L(130), b.inheritParentConfig)) {
                var w = d
                Ut ? Vt(b, Ut, w) : (!w[M.g.Pb] && ue && Tt) || (Tt = g(w))
                return
              }
              var y = d
              if (!Qt && ((Qt = !0), Pt))
                for (var x = ma(Xt), B = x.next(); !B.done; B = x.next())
                  if (y.hasOwnProperty(B.value)) {
                    $g('erc')
                    break
                  }
              dg && !wf && (1 === wt && Ob(F, 'pagehide', xt), (wt = 2))
              if (ue && !t && !d[M.g.Pb]) {
                var z = Rt
                Rt = !0
                if (z) return
              }
              Ot || L(43)
              if (!b.noTargetGroup)
                if (t) {
                  Mt(e.id)
                  var C = e.id,
                    G = d[M.g.ie] || 'default'
                  G = String(G).split(',')
                  for (var D = 0; D < G.length; D++) {
                    var E = Jt[G[D]] || []
                    Jt[G[D]] = E
                    0 > E.indexOf(C) && E.push(C)
                  }
                } else {
                  Lt(e.id)
                  var J = e.id,
                    I = d[M.g.ie] || 'default'
                  I = I.toString().split(',')
                  for (var N = 0; N < I.length; N++) {
                    var R = It[I[N]] || []
                    It[I[N]] = R
                    0 > R.indexOf(J) && R.push(J)
                  }
                }
              delete d[M.g.ie]
              var aa = b.eventMetadata || {}
              aa.hasOwnProperty('is_external_event') ||
                (aa.is_external_event = !b.fromContainerExecution)
              b.eventMetadata = aa
              delete d[M.g.dd]
              for (var W = t ? [e.id] : Bf(), O = 0; O < W.length; O++) {
                var fa = d,
                  ea = W[O],
                  ca = g(b),
                  da = ci(ea, ca.isGtmEvent)
                da && Ki.push('config', [fa], da, ca)
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          L(39)
          var c = St(a, b),
            d = a[1],
            e = a[2]
          b.fromContainerExecution || (e[M.g.N] && L(139), e[M.g.oa] && L(140))
          'default' === d
            ? Th(e)
            : 'update' === d
            ? Uh(e, c)
            : 'declare' === d && b.fromContainerExecution && Sh(e)
        }
      },
      event: function (a, b) {
        var c = a[1]
        if (!(2 > a.length) && k(c)) {
          var d
          if (2 < a.length) {
            if ((!Ka(a[2]) && void 0 != a[2]) || 3 < a.length) return
            d = a[2]
          }
          var e = d,
            f = {},
            h = ((f.event = c), f)
          e &&
            ((h.eventModel = g(e)),
            e[M.g.dd] && (h.eventCallback = e[M.g.dd]),
            e[M.g.ee] && (h.eventTimeout = e[M.g.ee]))
          var l = St(a, b),
            m = l.eventId,
            n = l.priorityId
          h['gtm.uniqueEventId'] = m
          n && (h['gtm.priorityId'] = n)
          if ('optimize.callback' === c)
            return (h.eventModel = h.eventModel || {}), h
          var p
          var q = d,
            r = q && q[M.g.Ob]
          void 0 === r && ((r = Re(M.g.Ob, 2)), void 0 === r && (r = 'default'))
          if (k(r) || Array.isArray(r)) {
            var t
            t = b.isGtmEvent
              ? k(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, '').split(',')
            var v = Kt(t, b.isGtmEvent),
              u = v.kl,
              w = v.nl
            if (w.length)
              for (var y = Wt(q), x = 0; x < w.length; x++) {
                var B = ci(w[x], b.isGtmEvent)
                B &&
                  ps(B.da, y, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  })
              }
            p = di(u, b.isGtmEvent)
          } else p = void 0
          var z = p
          if (z) {
            var C
            !z.length ||
              (null == (C = b.eventMetadata) ? 0 : C.em_event) ||
              (Pt = !0)
            Ts(m, c)
            for (var G = [], D = 0; D < z.length; D++) {
              var E = z[D],
                J = g(b)
              if (-1 !== Nt.indexOf(Kf(E.prefix))) {
                var I = g(d),
                  N = J.eventMetadata || {}
                N.hasOwnProperty('is_external_event') ||
                  (N.is_external_event = !J.fromContainerExecution)
                J.eventMetadata = N
                delete I[M.g.dd]
                Li(c, I, E.id, J)
                dg && !wf && 0 === wt && (Nb(F, 'pagehide', xt), (wt = 1))
              }
              G.push(E.id)
            }
            h.eventModel = h.eventModel || {}
            0 < z.length
              ? (h.eventModel[M.g.Ob] = G.join())
              : delete h.eventModel[M.g.Ob]
            Ot || L(43)
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0)
            h.eventModel[M.g.yb] && (b.noGtmEvent = !0)
            return b.noGtmEvent ? void 0 : h
          }
        }
      },
      get: function (a, b) {
        L(53)
        if (4 === a.length && k(a[1]) && k(a[2]) && Wa(a[3])) {
          var c = ci(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3]
          if (c) {
            Ot || L(43)
            var f = Wt()
            if (
              !Za(Bf(), function (l) {
                return c.da === l
              })
            )
              ps(c.da, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              })
            else if (-1 !== Nt.indexOf(Kf(c.prefix))) {
              St(a, b)
              var h = {}
              g(((h[M.g.lb] = d), (h[M.g.wb] = e), h))
              Mi(
                d,
                function (l) {
                  K(function () {
                    return e(l)
                  })
                },
                c.id,
                b
              )
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Ot = !0
          var c = St(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {}
          return (
            (f.event = 'gtm.js'),
            (f['gtm.start'] = a[1].getTime()),
            (f['gtm.uniqueEventId'] = d),
            (f['gtm.priorityId'] = e),
            f
          )
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c
        2 == a.length && Ka(a[1])
          ? (c = g(a[1]))
          : 3 == a.length &&
            k(a[1]) &&
            ((c = {}),
            Ka(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = g(a[2]))
              : (c[a[1]] = a[2]))
        if (c) {
          var d = St(a, b),
            e = d.eventId,
            f = d.priorityId
          g(c)
          var h = g(c)
          Ki.push('set', [h], void 0, b)
          c['gtm.uniqueEventId'] = e
          f && (c['gtm.priorityId'] = f)
          delete c.event
          b.overwriteModelFields = !0
          return c
        }
      },
    },
    Zt = { policy: !0 }
  var au = function (a) {
    if ($t(a)) return a
    this.value = a
  }
  au.prototype.getUntrustedMessageValue = function () {
    return this.value
  }
  var $t = function (a) {
    return !a || 'object' !== Ia(a) || Ka(a)
      ? !1
      : 'getUntrustedMessageValue' in a
  }
  au.prototype.getUntrustedMessageValue = au.prototype.getUntrustedMessageValue
  var bu = !1,
    cu = []
  function du() {
    if (!bu) {
      bu = !0
      for (var a = 0; a < cu.length; a++) K(cu[a])
    }
  }
  function eu(a) {
    bu ? K(a) : cu.push(a)
  }
  var fu = 0,
    gu = {},
    hu = [],
    iu = [],
    ju = !1,
    ku = !1
  function lu(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    )
  }
  var mu = function (a, b) {
    if (!Xa(b) || 0 > b) b = 0
    var c = qe[pe.Ga],
      d = 0,
      e = !1,
      f = void 0
    f = F.setTimeout(function () {
      e || ((e = !0), a())
      f = void 0
    }, b)
    return function () {
      var h = c ? c.subscribers : 1
      ++d === h &&
        (f && (F.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)))
    }
  }
  function nu(a, b) {
    var c = a._clear || b.overwriteModelFields
    A(a, function (e, f) {
      '_clear' !== e && (c && Ue(e), Ue(e, f))
    })
    Ce || (Ce = a['gtm.start'])
    var d = a['gtm.uniqueEventId']
    if (!a.event) return !1
    'number' !== typeof d &&
      ((d = Ge()), (a['gtm.uniqueEventId'] = d), Ue('gtm.uniqueEventId', d))
    return vt(a)
  }
  function ou(a) {
    if (null == a || 'object' !== typeof a) return !1
    if (a.event) return !0
    if (cb(a)) {
      var b = a[0]
      if ('config' === b || 'event' === b || 'js' === b || 'get' === b)
        return !0
    }
    return !1
  }
  function pu() {
    var a
    if (iu.length) a = iu.shift()
    else if (hu.length) a = hu.shift()
    else return
    var b
    var c = a
    if (ju || !ou(c.message)) b = c
    else {
      ju = !0
      var d = c.message['gtm.uniqueEventId']
      'number' !== typeof d && (d = c.message['gtm.uniqueEventId'] = Ge())
      var e = {},
        f = {
          message:
            ((e.event = 'gtm.init_consent'),
            (e['gtm.uniqueEventId'] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        h = {},
        l = {
          message:
            ((h.event = 'gtm.init'), (h['gtm.uniqueEventId'] = d - 1), h),
          messageContext: { eventId: d - 1 },
        }
      hu.unshift(l, c)
      if (dg) {
        var m = xf.ctid
        if (m) {
          var n,
            p = Hf(If())
          n = p && p.context
          var q = Rg(!0),
            r = xf.canonicalContainerId,
            t = hf(F.location.href),
            v = t.hostname + t.pathname,
            u = n && n.fromContainerExecution,
            w = vf.od,
            y = n && n.source
          Sg || (Sg = v)
          Ug.push(
            m + ';' + r + ';' + (u ? 1 : 0) + ';' + (y || 0) + ';' + (w ? 1 : 0)
          )
          Tg = q
        }
      }
      b = f
    }
    return b
  }
  function qu() {
    for (var a = !1, b; !ku && (b = pu()); ) {
      ku = !0
      delete Me.eventModel
      Qe()
      var c = b,
        d = c.message,
        e = c.messageContext
      if (null == d) ku = !1
      else {
        if (e.fromContainerExecution)
          for (
            var f = [
                'gtm.allowlist',
                'gtm.blocklist',
                'gtm.whitelist',
                'gtm.blacklist',
                'tagTypeBlacklist',
              ],
              h = 0;
            h < f.length;
            h++
          ) {
            var l = f[h],
              m = Re(l, 1)
            if (Array.isArray(m) || Ka(m)) m = g(m)
            Pe[l] = m
          }
        try {
          if (Wa(d))
            try {
              d.call(Se)
            } catch (B) {}
          else if (Array.isArray(d)) {
            var n = d
            if (k(n[0])) {
              var p = n[0].split('.'),
                q = p.pop(),
                r = n.slice(1),
                t = Re(p.join('.'), 2)
              if (null != t)
                try {
                  t[q].apply(t, r)
                } catch (B) {}
            }
          } else {
            var v = void 0
            if (cb(d))
              a: {
                if (d.length && k(d[0])) {
                  var u = Yt[d[0]]
                  if (u && (!e.fromContainerExecution || !Zt[d[0]])) {
                    v = u(d, e)
                    break a
                  }
                }
                v = void 0
              }
            else v = d
            v && (a = nu(v, e) || a)
          }
        } finally {
          e.fromContainerExecution && Qe(!0)
          var w = d['gtm.uniqueEventId']
          if ('number' === typeof w) {
            for (var y = gu[String(w)] || [], x = 0; x < y.length; x++)
              iu.push(ru(y[x]))
            y.length && iu.sort(lu)
            delete gu[String(w)]
            w > fu && (fu = w)
          }
          ku = !1
        }
      }
    }
    return !a
  }
  function su() {
    if (S(57)) {
      var a = tu()
    }
    var b = qu()
    if (S(57)) {
    }
    try {
      var c = Df(),
        d = F[pe.Ga].hide
      if (d && void 0 !== d[c] && d.end) {
        d[c] = !1
        var e = !0,
          f
        for (f in d)
          if (d.hasOwnProperty(f) && !0 === d[f]) {
            e = !1
            break
          }
        e && (d.end(), (d.end = null))
      }
    } catch (h) {}
    return b
  }
  function Ht(a) {
    if (fu < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId)
      gu[b] = gu[b] || []
      gu[b].push(a)
    } else
      iu.push(ru(a)),
        iu.sort(lu),
        K(function () {
          ku || qu()
        })
  }
  function ru(a) {
    return { message: a.message, messageContext: a.messageContext }
  }
  var uu = function () {
      function a(f) {
        var h = {}
        if ($t(f)) {
          var l = f
          f = $t(l) ? l.getUntrustedMessageValue() : void 0
          h.fromContainerExecution = !0
        }
        return { message: f, messageContext: h }
      }
      var b = Eb(pe.Ga, []),
        c = (qe[pe.Ga] = qe[pe.Ga] || {})
      !0 === c.pruned && L(83)
      gu = Ft().get()
      Gt()
      vs(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0
          var f = {}
          b.push(((f.event = 'gtm.dom'), f))
        }
      })
      eu(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0
          var f = {}
          b.push(((f.event = 'gtm.load'), f))
        }
      })
      c.subscribers = (c.subscribers || 0) + 1
      var d = b.push
      b.push = function () {
        var f
        if (0 < qe.SANDBOXED_JS_SEMAPHORE) {
          f = []
          for (var h = 0; h < arguments.length; h++) f[h] = new au(arguments[h])
        } else f = [].slice.call(arguments, 0)
        var l = f.map(function (q) {
          return a(q)
        })
        hu.push.apply(hu, l)
        var m = d.apply(b, f),
          n = Math.max(100, Number('1000') || 300)
        if (this.length > n)
          for (L(4), c.pruned = !0; this.length > n; ) this.shift()
        var p = 'boolean' !== typeof m || m
        return qu() && p
      }
      var e = b.slice(0).map(function (f) {
        return a(f)
      })
      hu.push.apply(hu, e)
      if (tu()) {
        if (S(57)) {
        }
        K(su)
      }
    },
    tu = function () {
      var a = !0
      return a
    }
  function vu(a) {
    if (null == a || 0 === a.length) return !1
    var b = Number(a),
      c = ib()
    return b < c + 3e5 && b > c - 9e5
  }
  var wu = !1,
    xu = function (a) {
      if (wu) return []
      var b = [],
        c = Gf()
      if (c) {
        var d,
          e =
            c.canonicalContainerId ||
            '_' +
              (c.scriptContainerId ||
                (null == (d = c.destinations) ? void 0 : d[0]))
        b.push(['pcid', e])
      }
      a.Na && ((wu = !0), b.length && a.ac())
      return b
    }
  function yu(a) {
    if (a.scriptSource) {
      var b
      try {
        var c
        b = null == (c = Zb()) ? void 0 : c.getEntriesByType('resource')
      } catch (l) {}
      if (b) {
        for (var d = {}, e = 0; e < b.length; ++e) {
          var f = b[e],
            h = f.initiatorType
          if ('script' === h && f.name === a.scriptSource)
            return { Il: e, Jl: d }
          d[h] = 1 + (d[h] || 0)
        }
        L(146)
      } else L(145)
    }
  }
  function zu() {
    if (dg && S(67)) {
      var a = Jf()
      if (!a) L(144)
      else if (a.canonicalContainerId) {
        var b = yu(a)
        if (b) {
          var c = !1
          Vf.push(function (d) {
            if (c) return []
            d.Na && (c = !0)
            d.ac()
            return [
              ['rtg', String(a.canonicalContainerId)],
              ['rlo', String(b.Il)],
              ['slo', String(b.Jl.script || '0')],
            ]
          })
        }
      }
    }
  }
  var Uu = function () {}
  var Vu = function () {}
  Vu.prototype.toString = function () {
    return 'undefined'
  }
  var Wu = new Vu()
  function cv(a, b) {
    function c(h) {
      var l = hf(h),
        m = df(l, 'protocol'),
        n = df(l, 'host', !0),
        p = df(l, 'port'),
        q = df(l, 'path').toLowerCase().replace(/\/$/, '')
      if (
        void 0 === m ||
        ('http' === m && '80' === p) ||
        ('https' === m && '443' === p)
      )
        (m = 'web'), (p = 'default')
      return [m, n, p, q]
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1
    return !0
  }
  function dv(a) {
    return ev(a) ? 1 : 0
  }
  function ev(a) {
    var b = a.arg0,
      c = a.arg1
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = g(a, {})
        g({ arg1: c[d], any_of: void 0 }, e)
        if (dv(e)) return !0
      }
      return !1
    }
    switch (a['function']) {
      case '_cn':
        return 0 <= String(b).indexOf(String(c))
      case '_css':
        var f
        a: {
          if (b)
            try {
              for (var h = 0; h < md.length; h++) {
                var l = md[h]
                if (b[l]) {
                  f = b[l](c)
                  break a
                }
              }
            } catch (u) {}
          f = !1
        }
        return f
      case '_ew':
        var m, n
        m = String(b)
        n = String(c)
        var p = m.length - n.length
        return 0 <= p && m.indexOf(n, p) === p
      case '_eq':
        return String(b) === String(c)
      case '_ge':
        return Number(b) >= Number(c)
      case '_gt':
        return Number(b) > Number(c)
      case '_lc':
        return 0 <= String(b).split(',').indexOf(String(c))
      case '_le':
        return Number(b) <= Number(c)
      case '_lt':
        return Number(b) < Number(c)
      case '_re':
        var q
        a: {
          var r = a.ignore_case ? 'i' : void 0
          try {
            var t = String(c) + r,
              v = nd.get(t)
            v || ((v = new RegExp(c, r)), nd.set(t, v))
            q = v.test(b)
            break a
          } catch (u) {
            q = !1
            break a
          }
        }
        return q
      case '_sw':
        return 0 === String(b).indexOf(String(c))
      case '_um':
        return cv(b, c)
    }
    return !1
  }
  function fv() {
    var a
    a = void 0 === a ? '' : a
    var b, c
    return (
      null == (b = data) ? 0 : null == (c = b.blob) ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a
  }
  function gv() {
    var a = [
      ['cv', S(76) ? fv() : '1'],
      ['rv', pe.Af],
      [
        'tc',
        Ec.filter(function (b) {
          return b
        }).length,
      ],
    ]
    pe.rd && a.push(['x', pe.rd])
    Ie.D && a.push(['tag_exp', Ie.D])
    return a
  }
  function hv() {
    var a = lh['0'] || ''
    return a.length ? [['exp_geo', a]] : []
  }
  var iv
  function jv() {
    try {
      null != iv || (iv = new Intl.DateTimeFormat().resolvedOptions().timeZone)
    } catch (b) {}
    var a
    return (null == (a = iv) ? 0 : a.length) ? [['exp_tz', iv]] : []
  }
  function xv(a) {
    var b = qe.zones
    return b
      ? b.getIsAllowedFn(yf(), a)
      : function () {
          return !0
        }
  }
  function yv() {
    cs(function (a) {
      var b = a.originalEventData['gtm.uniqueEventId'],
        c = qe.zones
      return c ? c.isActive(yf(), b) : !0
    })
    as(function (a) {
      var b = a.entityId,
        c = a.securityGroups
      return xv(Number(a.originalEventData['gtm.uniqueEventId']))(b, c)
    })
  }
  var jw = function () {
    var a = !0
    ;(qj(7) && qj(9) && qj(10)) || (a = !1)
    return a
  }
  oh()
  function kx() {
    return (F.gaGlobal = F.gaGlobal || {})
  }
  var lx = function () {
      var a = kx()
      a.hid = a.hid || $a()
      return a.hid
    },
    mx = function (a, b) {
      var c = kx()
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b)
    }
  var Ux = function (a) {
      this.F = a
      this.H = ''
      this.D = this.F
    },
    Vx = function (a, b) {
      a.D = b
      return a
    },
    Wx = function (a, b) {
      a.K = b
      return a
    }
  function Xx(a) {
    var b = a.search
    return (
      a.protocol +
      '//' +
      a.hostname +
      a.pathname +
      (b ? b + '&richsstsse' : '?richsstsse')
    )
  }
  function Yx(a, b, c) {
    if (a) {
      var d = a || []
      if (Array.isArray(d))
        for (
          var e = Ka(b) ? b : {}, f = ma(d), h = f.next();
          !h.done;
          h = f.next()
        )
          c(h.value, e)
    }
  }
  var ny = window,
    oy = document,
    py = function (a) {
      var b = ny._gaUserPrefs
      if (
        (b && b.ioo && b.ioo()) ||
        oy.documentElement.hasAttribute('data-google-analytics-opt-out') ||
        (a && !0 === ny['ga-disable-' + a])
      )
        return !0
      try {
        var c = ny.external
        if (c && c._gaUserPrefs && 'oo' == c._gaUserPrefs) return !0
      } catch (p) {}
      for (
        var d = [], e = String(oy.cookie).split(';'), f = 0;
        f < e.length;
        f++
      ) {
        var h = e[f].split('='),
          l = h[0].replace(/^\s*|\s*$/g, '')
        if (l && 'AMP_TOKEN' == l) {
          var m = h
            .slice(1)
            .join('=')
            .replace(/^\s*|\s*$/g, '')
          m && (m = decodeURIComponent(m))
          d.push(m)
        }
      }
      for (var n = 0; n < d.length; n++) if ('$OPT_OUT' == d[n]) return !0
      return oy.getElementById('__gaOptOutExtension') ? !0 : !1
    }
  function Ay(a) {
    A(a, function (c) {
      '_' === c.charAt(0) && delete a[c]
    })
    var b = a[M.g.Wa] || {}
    A(b, function (c) {
      '_' === c.charAt(0) && delete b[c]
    })
  }
  var Iy = function (a, b) {}
  function Hy(a, b) {
    var c = function () {}
    return c
  }
  function Jy(a, b, c) {}
  var Ky = Hy
  var My = encodeURI,
    V = encodeURIComponent,
    Ny = Array.isArray,
    Oy = function (a, b, c) {
      Mb(a, b, c)
    },
    Py = function (a, b) {
      if (!a) return !1
      var c = df(hf(a), 'host')
      if (!c) return !1
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase()
        if (e) {
          var f = c.length - e.length
          0 < f && '.' != e.charAt(0) && (f--, (e = '.' + e))
          if (0 <= f && c.indexOf(e, f) == f) return !0
        }
      }
      return !1
    },
    Qy = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0))
      return e ? d : null
    }
  var Zy = F.clearTimeout,
    $y = F.setTimeout,
    X = function (a, b, c) {
      if (Gj()) {
        b && K(b)
      } else return Jb(a, b, c)
    },
    az = function () {
      return F.location.href
    },
    gz = function (a) {
      return df(hf(a), 'fragment')
    },
    rz = function (a, b) {
      return Re(a, b || 2)
    },
    sz = function (a, b, c) {
      var d
      b
        ? ((a.eventCallback = b),
          c && (a.eventTimeout = c),
          (d = F[pe.Ga].push(a)))
        : (d = F[pe.Ga].push(a))
      return d
    },
    tz = function (a, b) {
      F[a] = b
    },
    Y = function (a, b, c) {
      b && (void 0 === F[a] || (c && !F[a])) && (F[a] = b)
      return F[a]
    },
    uz = function (a, b) {
      if (Gj()) {
        b && K(b)
      } else Lb(a, b)
    },
    vz = function (a) {
      return !!lv(a, 'init', !1)
    },
    wz = function (a) {
      kv(a).init = !0
    }
  var xz = {}
  var Z = { securityGroups: {} }
  ;(Z.securityGroups.e = ['google']),
    (Z.__e = function (a) {
      return String(a.vtp_gtmCachedValues.event)
    }),
    (Z.__e.o = 'e'),
    (Z.__e.isVendorTemplate = !0),
    (Z.__e.priorityOverride = 0),
    (Z.__e.isInfrastructure = !0),
    (Z.__e.runInSiloedMode = !0)
  ;(Z.securityGroups.v = ['google']),
    (Z.__v = function (a) {
      var b = a.vtp_name
      if (!b || !b.replace) return !1
      var c = rz(b.replace(/\\\./g, '.'), a.vtp_dataLayerVersion || 1)
      return void 0 !== c ? c : a.vtp_defaultValue
    }),
    (Z.__v.o = 'v'),
    (Z.__v.isVendorTemplate = !0),
    (Z.__v.priorityOverride = 0),
    (Z.__v.isInfrastructure = !0),
    (Z.__v.runInSiloedMode = !1)

  ;(Z.securityGroups.get = ['google']),
    (Z.__get = function (a) {
      var b = a.vtp_settings,
        c = b.eventParameters || {},
        d = String(a.vtp_eventName),
        e = {}
      e.eventId = a.vtp_gtmEventId
      e.priorityId = a.vtp_gtmPriorityId
      a.vtp_deferrable && (e.deferrable = !0)
      var f = Ct(String(b.streamId), d, c)
      Et(f, e.eventId, e)
      a.vtp_gtmOnSuccess()
    }),
    (Z.__get.o = 'get'),
    (Z.__get.isVendorTemplate = !0),
    (Z.__get.priorityOverride = 0),
    (Z.__get.isInfrastructure = !1),
    (Z.__get.runInSiloedMode = !1)

  var yz = {}
  yz.dataLayer = Se
  yz.callback = function (a) {
    Ee.hasOwnProperty(a) && Wa(Ee[a]) && Ee[a]()
    delete Ee[a]
  }
  yz.bootstrap = 0
  yz._spx = !1
  function zz() {
    qe[Df()] = qe[Df()] || yz
    Of()
    Qf() ||
      A(Rf(), function (d, e) {
        ps(d, e.transportUrl, e.context)
        L(92)
      })
    lb(Fe, Z.securityGroups)
    var a = Hf(If()),
      b,
      c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source
    ;(2 !== c && 4 !== c && 3 !== c) || L(142)
    Mc = Xc
  }
  ;(function (a) {
    function b() {
      n = H.documentElement.getAttribute('data-tag-assistant-present')
      vu(n) && (m = l.Gh)
    }
    function c() {
      m && Db ? h(m) : a()
    }
    if (!F['__TAGGY_INSTALLED']) {
      var d = !1
      if (H.referrer) {
        var e = hf(H.referrer)
        d = 'cct.google' === cf(e, 'host')
      }
      if (!d) {
        var f = Pj('googTaggyReferrer')
        d = !(!f.length || !f[0].length)
      }
      d &&
        ((F['__TAGGY_INSTALLED'] = !0), Jb('https://cct.google/taggy/agent.js'))
    }
    var h = function (v) {
        var u = 'GTM',
          w = 'GTM'
        ve && ((u = 'OGT'), (w = 'GTAG'))
        var y = F['google.tagmanager.debugui2.queue']
        y ||
          ((y = []),
          (F['google.tagmanager.debugui2.queue'] = y),
          Jb(
            'https://' +
              pe.Mc +
              '/debug/bootstrap?id=' +
              xf.ctid +
              '&src=' +
              w +
              '&cond=' +
              v +
              '&gtm=' +
              Ij()
          ))
        var x = {
          messageType: 'CONTAINER_STARTING',
          data: {
            scriptSource: Db,
            containerProduct: u,
            debug: !1,
            id: xf.ctid,
            targetRef: { ctid: xf.ctid, isDestination: vf.od },
            aliases: zf(),
            destinations: Cf(),
          },
        }
        x.data.resume = function () {
          a()
        }
        pe.Vi && (x.data.initialPublish = !0)
        y.push(x)
      },
      l = { Lj: 1, Ih: 2, Vh: 3, Fg: 4, Gh: 5 }
    l[l.Lj] = 'GTM_DEBUG_LEGACY_PARAM'
    l[l.Ih] = 'GTM_DEBUG_PARAM'
    l[l.Vh] = 'REFERRER'
    l[l.Fg] = 'COOKIE'
    l[l.Gh] = 'EXTENSION_PARAM'
    var m = void 0,
      n = void 0,
      p = df(F.location, 'query', !1, void 0, 'gtm_debug')
    vu(p) && (m = l.Ih)
    if (!m && H.referrer) {
      var q = hf(H.referrer)
      'tagassistant.google.com' === cf(q, 'host') && (m = l.Vh)
    }
    if (!m) {
      var r = Pj('__TAG_ASSISTANT')
      r.length && r[0].length && (m = l.Fg)
    }
    m || b()
    if (!m && n && 0 === n.indexOf('pending:') && vu(n.substr(8))) {
      var t = !1
      Nb(
        H,
        'TADebugSignal',
        function () {
          t || ((t = !0), b(), c())
        },
        !1
      )
      F.setTimeout(function () {
        t || ((t = !0), b(), c())
      }, 200)
    } else c()
  })(function () {
    try {
      Mf()
      if (S(57)) {
      }
      wh().F()
      oj()
      $h()
      var a = Ff()
      if (sf().canonical[a]) {
        var b = qe.zones
        b && b.unregisterChild(yf())
        bs().removeExternalRestrictions(Ff())
      } else {
        a: {
        }
        Ie.D = ''
        Ie.F = Ie.K
        Ie.H = ''
        Ie.X = 'ad_storage|analytics_storage|ad_user_data|ad_personalization'
        Ie.P = 'ad_storage|analytics_storage|ad_user_data'
        Ie.Ma = ''
        ms()
        for (
          var c = data.resource || {}, d = c.macros || [], e = 0;
          e < d.length;
          e++
        )
          Bc.push(d[e])
        for (var f = c.tags || [], h = 0; h < f.length; h++) Ec.push(f[h])
        for (var l = c.predicates || [], m = 0; m < l.length; m++) Dc.push(l[m])
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
            var v = q[t][0]
            r[v] = Array.prototype.slice.call(q[t], 1)
            ;('if' !== v && 'unless' !== v) || Lc(r[v])
          }
          Cc.push(r)
        }
        Hc = Z
        Ic = dv
        zz()
        if (!ze)
          for (
            var u = !1 !== lh['6'] ? Ke(Ie.P) : Ke(Ie.X), w = 0;
            w < Jh.length;
            w++
          ) {
            var y = Jh[w],
              x = y,
              B = u[y] ? 'granted' : 'denied'
            rh().implicit(x, B)
          }
        uu()
        qs = !1
        rs = 0
        if (
          ('interactive' === H.readyState && !H.createEventObject) ||
          'complete' === H.readyState
        )
          ts()
        else {
          Nb(H, 'DOMContentLoaded', ts)
          Nb(H, 'readystatechange', ts)
          if (H.createEventObject && H.documentElement.doScroll) {
            var z = !0
            try {
              z = !F.frameElement
            } catch (D) {}
            z && us()
          }
          Nb(F, 'load', ts)
        }
        bu = !1
        'complete' === H.readyState ? du() : Nb(F, 'load', du)
        dg && (Wf(rg), Vf.push(rg), F.setInterval(qg, 864e5))
        Wf(gv)
        Wf(Us)
        Wf(pq)
        Wf(Ji)
        Wf(et)
        Vf.push(pi)
        Wf($o)
        Vf.push(Xg)
        S(65) && (Wf(Zs), Wf($s), Wf(at))
        dg && S(54) && (Wf(hv), Wf(jv))
        zu()
        Vf.push(ah)
        Vf.push(zt)
        S(64) && Vf.push(xu)
        Uu()
        kh(1)
        yv()
        De = ib()
        yz.bootstrap = De
        if (S(57)) {
        }
      }
    } catch (D) {
      if ((kh(4), dg)) {
        var G = kg(!1, !0, !0)
        Mb(G)
      }
    }
  })
})()
