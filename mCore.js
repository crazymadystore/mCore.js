/* ===============================
   mCore.js
   Core Utility Library
   =============================== */

const mCore = (() => {
  /* ===============================
     mType
     =============================== */
  const mType = {
    isString: (v) => typeof v === "string",
    isNumber: (v) => typeof v === "number" && !isNaN(v),
    isBoolean: (v) => typeof v === "boolean",
    isArray: (v) => Array.isArray(v),
    isObject: (v) => v !== null && typeof v === "object" && !Array.isArray(v),
    isFunction: (v) => typeof v === "function",
    isNull: (v) => v === null,
    isUndefined: (v) => v === undefined,
    isEmpty: (v) =>
      v === null ||
      v === undefined ||
      (typeof v === "string" && v.trim() === "") ||
      (Array.isArray(v) && v.length === 0) ||
      (typeof v === "object" && Object.keys(v).length === 0),
  };

  /* ===============================
     mSafe
     =============================== */
  const mSafe = {
    get: (obj, path, def = undefined) => {
      try {
        return path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : def), obj);
      } catch {
        return def;
      }
    },

    jsonParse: (str, def = null) => {
      try {
        return JSON.parse(str);
      } catch {
        return def;
      }
    },

    number: (val, def = 0) => {
      const n = Number(val);
      return isNaN(n) ? def : n;
    },

    string: (val, def = "") => (val == null ? def : String(val)),
  };

  /* ===============================
     mString
     =============================== */
  const mString = {
    trim: (v) => (mType.isString(v) ? v.trim() : v),

    slug: (v) =>
      mType.isString(v)
        ? v
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")
        : "",

    camel: (v) =>
      mType.isString(v)
        ? v
            .toLowerCase()
            .replace(/[-_ ]+(.)/g, (_, c) => c.toUpperCase())
        : "",

    truncate: (v, len = 10, suffix = "…") =>
      mType.isString(v) && v.length > len ? v.slice(0, len) + suffix : v,

    random: (len = 8) => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let out = "";
      for (let i = 0; i < len; i++) {
        out += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return out;
    },

    mask: (v, show = 4, maskChar = "*") =>
      mType.isString(v)
        ? maskChar.repeat(Math.max(0, v.length - show)) + v.slice(-show)
        : "",
  };

  /* ===============================
     mValidate
     =============================== */
  const mValidate = {
    required: (v) => !mType.isEmpty(v),

    string: (v) => mType.isString(v),

    number: (v) => mType.isNumber(v),

    boolean: (v) => mType.isBoolean(v),

    email: (v) =>
      mType.isString(v) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),

    url: (v) =>
      mType.isString(v) &&
      /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/.test(v),

    phone: (v) =>
      mType.isString(v) && /^\+?[0-9]{7,15}$/.test(v),

    num: (v) => !isNaN(v),

    int: (v) => Number.isInteger(Number(v)),

    float: (v) => !isNaN(v) && !Number.isInteger(Number(v)),

    min: (v, min) => Number(v) >= min,

    max: (v, max) => Number(v) <= max,

    between: (v, min, max) => Number(v) >= min && Number(v) <= max,

    minLength: (v, len) => mType.isString(v) && v.length >= len,

    maxLength: (v, len) => mType.isString(v) && v.length <= len,

    alpha: (v) => mType.isString(v) && /^[A-Za-z]+$/.test(v),

    alphaNum: (v) => mType.isString(v) && /^[A-Za-z0-9]+$/.test(v),

    date: (v) => !isNaN(Date.parse(v)),

    pastDate: (v) => !isNaN(Date.parse(v)) && new Date(v) < new Date(),

    futureDate: (v) => !isNaN(Date.parse(v)) && new Date(v) > new Date(),

    regex: (v, pattern) => pattern instanceof RegExp && pattern.test(v),

    oneOf: (v, list) => Array.isArray(list) && list.includes(v),

    extend(name, fn) {
      if (!this[name] && mType.isFunction(fn)) {
        this[name] = fn;
      }
    },
  };

  /* ===============================
     Public API
     =============================== */
  return {
    mType,
    mSafe,
    mString,
    mValidate,
  };
})();

/* ===============================
   Module Exports
   =============================== */
if (typeof module !== "undefined" && module.exports) {
  module.exports = mCore;
}
