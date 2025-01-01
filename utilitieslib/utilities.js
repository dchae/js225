"use strict";

/* eslint max-lines-per-function : "off"*/
(function () {
  var _ = function (iter) {
    let u = {
      last() {
        return iter[iter.length - 1];
      },

      first() {
        return iter[0];
      },

      without(...args) {
        return iter.filter((x) => !args.includes(x));
      },

      lastIndexOf(val) {
        let i = iter.length - 1;
        for (; i >= -1; i--) if (iter[i] === val) break;
        return i;
      },

      sample(n) {
        const shuffled = iter.slice();

        for (let i = shuffled.length - 1; i >= 0; i--) {
          let j = Math.floor(Math.random(i + 1));

          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return n > 1 ? shuffled.slice(0, n) : shuffled[0];
      },

      findWhere(obj) {
        return iter.find((e) =>
          Object.entries(obj).every(([k, v]) => e[k] === v),
        );
      },

      where(obj) {
        return iter.filter((e) =>
          Object.entries(obj).every(([k, v]) => e[k] === v),
        );
      },

      pluck(key) {
        return iter.filter((e) => Object.hasOwn(e, key)).map((e) => e[key]);
      },

      keys() {
        return Object.keys(iter);
      },

      values() {
        return Object.values(iter);
      },

      pick(key) {
        return Object.fromEntries(
          Object.entries(iter).filter(([k, _]) => k === key),
        );
      },

      omit(key) {
        return Object.fromEntries(
          Object.entries(iter).filter(([k, _]) => k !== key),
        );
      },

      has(key) {
        return Object.hasOwn(iter, key);
      },

      isElement(obj = iter) {
        return obj instanceof Element;
      },

      isArray(obj = iter) {
        return Array.isArray(obj);
      },

      isObject(obj = iter) {
        return obj instanceof Object;
      },

      isFunction(obj = iter) {
        return obj instanceof Function;
      },

      isBoolean(obj = iter) {
        return typeof obj === "boolean" || obj instanceof Boolean;
      },

      isString(obj = iter) {
        return typeof obj === "string" || obj instanceof String;
      },

      isNumber(obj = iter) {
        return typeof obj === "number" || obj instanceof Number;
      },
    };

    return u;
  };

  _.range = function (a, b) {
    if (b === undefined) [a, b] = [0, a];
    return Array.from(new Array(b - a), (_, i) => i + a);
  };

  _.extend = function extend(...objs) {
    while (objs.length > 1) Object.assign(objs.at(-2), objs.pop());
    return objs[0];
  };

  [
    "isElement",
    "isArray",
    "isObject",
    "isFunction",
    "isBoolean",
    "isString",
    "isNumber",
  ].forEach((k) => (_[k] = _()[k]));

  window._ = _;
})();
