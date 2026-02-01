# mCore.js 🧩
**mCore** is a lightweight, dependency-free JavaScript utility bundle that provides essential helpers for validation, type checking, safe access, and string manipulation.

![Browser](https://img.shields.io/badge/Browser-supported-blue)
![Node.js](https://img.shields.io/badge/Node.js-supported-blue)
![Zero Dependencies](https://img.shields.io/badge/Zero-Dependencies-green)
![Single File](https://img.shields.io/badge/Single-File-green)

## ✨ Included Modules

- **mValidate** – Data validation utilities  
- **mType** – Reliable type checking  
- **mSafe** – Safe getters & fallbacks  
- **mString** – String helpers & formatting  

## 📦 Installation

### Browser

```html
<script src="mCore.js"></script>
```

### Node.js

```bash
npm install mcore-js
```

```js
const mCore = require("mcore-js");
```

## 🚀 Basic Usage

```js
mCore.mValidate.email("test@mail.com");
mCore.mString.slug("Hello World");
mCore.mSafe.get(user, "profile.name", "Guest");
mCore.mType.isArray([]);
```

## 🧪 mValidate

```js
mCore.mValidate.required(v);
mCore.mValidate.email(v);
mCore.mValidate.num(v);
mCore.mValidate.int(v);
mCore.mValidate.min(v, 10);
mCore.mValidate.between(v, 1, 100);
mCore.mValidate.date(v);
```

## 🧠 mType

```js
mCore.mType.isString(v);
mCore.mType.isNumber(v);
mCore.mType.isArray(v);
mCore.mType.isObject(v);
mCore.mType.isEmpty(v);
```

## 🛡 mSafe

```js
mCore.mSafe.get(obj, "a.b.c", "default");
mCore.mSafe.jsonParse(str, {});
mCore.mSafe.number(val, 0);
mCore.mSafe.string(val, "");
```

## 🔤 mString

```js
mCore.mString.slug(v);
mCore.mString.camel(v);
mCore.mString.truncate(v, 10);
mCore.mString.random(8);
mCore.mString.mask("1234567890", 4);
```

## 🔌 Extending Validators

```js
mCore.mValidate.extend(
  "strongPassword",
  v => /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(v)
);
```

## 🧩 Return Values

- **true** → passed  
- **false** → failed  

## 📄 License

MIT License

---

Simple. Fast. Extendable.  
Built for real-world JavaScript 😄
