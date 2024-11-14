"use strict";
(self["webpackChunkvue3_vant4_h5_template_ts"] = self["webpackChunkvue3_vant4_h5_template_ts"] || []).push([
    [998], {
        2262:function (e, t, n) {
  n.d(t, {
    B: function () {
      return i;
    },
    Bj: function () {
      return s;
    },
    Fl: function () {
      return qe;
    },
    IU: function () {
      return Ie;
    },
    Jd: function () {
      return C;
    },
    PG: function () {
      return xe;
    },
    SU: function () {
      return Ve;
    },
    Um: function () {
      return ke;
    },
    WL: function () {
      return De;
    },
    X$: function () {
      return R;
    },
    X3: function () {
      return Re;
    },
    XI: function () {
      return Ue;
    },
    Xl: function () {
      return Te;
    },
    dq: function () {
      return Fe;
    },
    iH: function () {
      return Le;
    },
    j: function () {
      return E;
    },
    lk: function () {
      return x;
    },
    qj: function () {
      return we;
    },
    qq: function () {
      return b;
    },
    yT: function () {
      return Oe;
    },
  });
  var o = n(3577);
  let r;

  class s {
    constructor(e = !1) {
      (this.detached = e),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = r);
      !e && r && (this.index = (r.scopes || (r.scopes = [])).push(this) - 1);
    }
    run(e) {
      if (this.active) {
        const t = r;
        try {
          return (r = this), e();
        } finally {
          r = t;
        }
      } else 0;
    }
    on() {
      r = this;
    }
    off() {
      r = this.parent;
    }
    stop(e) {
      if (this.active) {
        let t, n;
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
        for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
        if (this.scopes)
          for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
        if (!this.detached && this.parent && !e) {
          const e = this.parent.scopes.pop();
          e &&
            e !== this &&
            (this.parent.scopes[this.index] = e, (e.index = this.index));
        }
        (this.parent = void 0), (this.active = !1);
      }
    }
  }

  function i(e) {
    return new s(e);
  }

  function l(e, t = r) {
    t && t.active && t.effects.push(e);
  }
  const c = (e) => {
      const t = new Set(e);
      return (t.w = 0), (t.n = 0), t;
    },
    a = (e) => (e.w & g) > 0,
    u = (e) => (e.n & g) > 0,
    f = ({ deps: e }) => {
      if (e.length)
        for (let t = 0; t < e.length; t++) e[t].w |= g;
    },
    p = (e) => {
      const { deps: t } = e;
      if (t.length) {
        let n = 0;
        for (let o = 0; o < t.length; o++) {
          const r = t[o];
          a(r) && !u(r) ? r.delete(e) : (t[n++] = r),
            (r.w &= ~g),
            (r.n &= ~g);
        }
        t.length = n;
      }
    },
    d = new WeakMap();
  let h = 0,
    g = 1;
  const m = 30;
  let v;
  const y = Symbol(""),
    _ = Symbol("");

  class b {
    constructor(e, t = null, n) {
      (this.fn = e),
      (this.scheduler = t),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
        l(this, n);
    }
    run() {
      if (!this.active) return this.fn();
      let e = v,
        t = k;
      while (e) {
        if (e === this) return;
        e = e.parent;
      }
      try {
        return (
          (this.parent = v),
          (v = this),
          (k = !0),
          (g = 1 << ++h),
          h <= m ? f(this) : w(this),
          this.fn()
        );
      } finally {
        h <= m && p(this),
          (g = 1 << --h),
          (v = this.parent),
          (k = t),
          (this.parent = void 0),
          this.deferStop && this.stop();
      }
    }
    stop() {
      v === this ?
        (this.deferStop = !0) :
        this.active && (w(this), this.onStop && this.onStop(), (this.active = !1));
    }
  }

  function w(e) {
    const { deps: t } = e;
    if (t.length) {
      for (let n = 0; n < t.length; n++) t[n].delete(e);
      t.length = 0;
    }
  }
  let k = !0;
  const S = [];

  function C() {
    S.push(k), (k = !1);
  }

  function x() {
    const e = S.pop();
    k = void 0 === e || e;
  }

  function E(e, t, n) {
    if (k && v) {
      let t = d.get(e);
      t || d.set(e, (t = new Map));
      let o = t.get(n);
      o || t.set(n, (o = c()));
      const r = void 0;
      O(o, r);
    }
  }

  function O(e, t) {
    let n = !1;
    h <= m ? u(e) || (e.n |= g, (n = !a(e))) : (n = !e.has(v)),
      n && (e.add(v), v.deps.push(e));
  }

  function R(e, t, n, r, s, i) {
    const l = d.get(e);
    if (!l) return;
    let a = [];
    if ("clear" === t) a = [...l.values()];
    else if ("length" === n && (0, o.kJ)(e)) {
      const e = (0, o.He)(r);
      l.forEach(((t, n) => {
        ("length" === n || n >= e) && a.push(t);
      }));
    } else
      switch (void 0 !== n && a.push(l.get(n)), t) {
        case "add":
          (0, o.kJ)(e) ?
            (0, o.S0)(n) && a.push(l.get("length")) :
            (a.push(l.get(y)), (0, o._N)(e) && a.push(l.get(_)));
          break;
        case "delete":
          (0, o.kJ)(e) || (a.
