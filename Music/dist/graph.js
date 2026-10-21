var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e6) {
    throw mod = 0, e6;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@babel/runtime/helpers/OverloadYield.js
var require_OverloadYield = __commonJS({
  "node_modules/@babel/runtime/helpers/OverloadYield.js"(exports, module) {
    function _OverloadYield(e6, d3) {
      this.v = e6, this.k = d3;
    }
    module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/regeneratorDefine.js
var require_regeneratorDefine = __commonJS({
  "node_modules/@babel/runtime/helpers/regeneratorDefine.js"(exports, module) {
    function _regeneratorDefine(e6, r6, n5, t3) {
      var i5 = Object.defineProperty;
      try {
        i5({}, "", {});
      } catch (e7) {
        i5 = 0;
      }
      module.exports = _regeneratorDefine = function regeneratorDefine(e7, r7, n6, t4) {
        function o6(r8, n7) {
          _regeneratorDefine(e7, r8, function(e8) {
            return this._invoke(r8, n7, e8);
          });
        }
        r7 ? i5 ? i5(e7, r7, {
          value: n6,
          enumerable: !t4,
          configurable: !t4,
          writable: !t4
        }) : e7[r7] = n6 : (o6("next", 0), o6("throw", 1), o6("return", 2));
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e6, r6, n5, t3);
    }
    module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/regenerator.js
var require_regenerator = __commonJS({
  "node_modules/@babel/runtime/helpers/regenerator.js"(exports, module) {
    var regeneratorDefine = require_regeneratorDefine();
    function _regenerator() {
      var e6, t3, r6 = "function" == typeof Symbol ? Symbol : {}, n5 = r6.iterator || "@@iterator", o6 = r6.toStringTag || "@@toStringTag";
      function i5(r7, n6, o7, i6) {
        var c5 = n6 && n6.prototype instanceof Generator ? n6 : Generator, u4 = Object.create(c5.prototype);
        return regeneratorDefine(u4, "_invoke", (function(r8, n7, o8) {
          var i7, c6, u5, f4 = 0, p3 = o8 || [], y3 = false, G = {
            p: 0,
            n: 0,
            v: e6,
            a: d3,
            f: d3.bind(e6, 4),
            d: function d4(t4, r9) {
              return i7 = t4, c6 = 0, u5 = e6, G.n = r9, a3;
            }
          };
          function d3(r9, n8) {
            for (c6 = r9, u5 = n8, t3 = 0; !y3 && f4 && !o9 && t3 < p3.length; t3++) {
              var o9, i8 = p3[t3], d4 = G.p, l3 = i8[2];
              r9 > 3 ? (o9 = l3 === n8) && (u5 = i8[(c6 = i8[4]) ? 5 : (c6 = 3, 3)], i8[4] = i8[5] = e6) : i8[0] <= d4 && ((o9 = r9 < 2 && d4 < i8[1]) ? (c6 = 0, G.v = n8, G.n = i8[1]) : d4 < l3 && (o9 = r9 < 3 || i8[0] > n8 || n8 > l3) && (i8[4] = r9, i8[5] = n8, G.n = l3, c6 = 0));
            }
            if (o9 || r9 > 1) return a3;
            throw y3 = true, n8;
          }
          return function(o9, p4, l3) {
            if (f4 > 1) throw TypeError("Generator is already running");
            for (y3 && 1 === p4 && d3(p4, l3), c6 = p4, u5 = l3; (t3 = c6 < 2 ? e6 : u5) || !y3; ) {
              i7 || (c6 ? c6 < 3 ? (c6 > 1 && (G.n = -1), d3(c6, u5)) : G.n = u5 : G.v = u5);
              try {
                if (f4 = 2, i7) {
                  if (c6 || (o9 = "next"), t3 = i7[o9]) {
                    if (!(t3 = t3.call(i7, u5))) throw TypeError("iterator result is not an object");
                    if (!t3.done) return t3;
                    u5 = t3.value, c6 < 2 && (c6 = 0);
                  } else 1 === c6 && (t3 = i7["return"]) && t3.call(i7), c6 < 2 && (u5 = TypeError("The iterator does not provide a '" + o9 + "' method"), c6 = 1);
                  i7 = e6;
                } else if ((t3 = (y3 = G.n < 0) ? u5 : r8.call(n7, G)) !== a3) break;
              } catch (t4) {
                i7 = e6, c6 = 1, u5 = t4;
              } finally {
                f4 = 1;
              }
            }
            return {
              value: t3,
              done: y3
            };
          };
        })(r7, o7, i6), true), u4;
      }
      var a3 = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      t3 = Object.getPrototypeOf;
      var c4 = [][n5] ? t3(t3([][n5]())) : (regeneratorDefine(t3 = {}, n5, function() {
        return this;
      }), t3), u3 = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c4);
      function f3(e7) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e7, GeneratorFunctionPrototype) : (e7.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e7, o6, "GeneratorFunction")), e7.prototype = Object.create(u3), e7;
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u3, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o6, "GeneratorFunction"), regeneratorDefine(u3), regeneratorDefine(u3, o6, "Generator"), regeneratorDefine(u3, n5, function() {
        return this;
      }), regeneratorDefine(u3, "toString", function() {
        return "[object Generator]";
      }), (module.exports = _regenerator = function _regenerator2() {
        return {
          w: i5,
          m: f3
        };
      }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
    }
    module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js
var require_regeneratorAsyncIterator = __commonJS({
  "node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js"(exports, module) {
    var OverloadYield = require_OverloadYield();
    var regeneratorDefine = require_regeneratorDefine();
    function AsyncIterator(t3, e6) {
      function n5(r7, o6, i5, f3) {
        try {
          var c4 = t3[r7](o6), u3 = c4.value;
          return u3 instanceof OverloadYield ? e6.resolve(u3.v).then(function(t4) {
            n5("next", t4, i5, f3);
          }, function(t4) {
            n5("throw", t4, i5, f3);
          }) : e6.resolve(u3).then(function(t4) {
            c4.value = t4, i5(c4);
          }, function(t4) {
            return n5("throw", t4, i5, f3);
          });
        } catch (t4) {
          f3(t4);
        }
      }
      var r6;
      this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function() {
        return this;
      })), regeneratorDefine(this, "_invoke", function(t4, o6, i5) {
        function f3() {
          return new e6(function(e7, r7) {
            n5(t4, i5, e7, r7);
          });
        }
        return r6 = r6 ? r6.then(f3, f3) : f3();
      }, true);
    }
    module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js
var require_regeneratorAsyncGen = __commonJS({
  "node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js"(exports, module) {
    var regenerator = require_regenerator();
    var regeneratorAsyncIterator = require_regeneratorAsyncIterator();
    function _regeneratorAsyncGen(r6, e6, t3, o6, n5) {
      return new regeneratorAsyncIterator(regenerator().w(r6, e6, t3, o6), n5 || Promise);
    }
    module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/regeneratorAsync.js
var require_regeneratorAsync = __commonJS({
  "node_modules/@babel/runtime/helpers/regeneratorAsync.js"(exports, module) {
    var regeneratorAsyncGen = require_regeneratorAsyncGen();
    function _regeneratorAsync(n5, e6, r6, t3, o6) {
      var a3 = regeneratorAsyncGen(n5, e6, r6, t3, o6);
      return a3.next().then(function(n6) {
        return n6.done ? n6.value : a3.next();
      });
    }
    module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/regeneratorKeys.js
var require_regeneratorKeys = __commonJS({
  "node_modules/@babel/runtime/helpers/regeneratorKeys.js"(exports, module) {
    function _regeneratorKeys(e6) {
      var n5 = Object(e6), r6 = [];
      for (var t3 in n5) r6.unshift(t3);
      return function e7() {
        for (; r6.length; ) if ((t3 = r6.pop()) in n5) return e7.value = t3, e7.done = false, e7;
        return e7.done = true, e7;
      };
    }
    module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof2(o6) {
      "@babel/helpers - typeof";
      return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o7) {
        return typeof o7;
      } : function(o7) {
        return o7 && "function" == typeof Symbol && o7.constructor === Symbol && o7 !== Symbol.prototype ? "symbol" : typeof o7;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o6);
    }
    module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/regeneratorValues.js
var require_regeneratorValues = __commonJS({
  "node_modules/@babel/runtime/helpers/regeneratorValues.js"(exports, module) {
    var _typeof2 = require_typeof()["default"];
    function _regeneratorValues(e6) {
      if (null != e6) {
        var t3 = e6["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r6 = 0;
        if (t3) return t3.call(e6);
        if ("function" == typeof e6.next) return e6;
        if (!isNaN(e6.length)) return {
          next: function next() {
            return e6 && r6 >= e6.length && (e6 = void 0), {
              value: e6 && e6[r6++],
              done: !e6
            };
          }
        };
      }
      throw new TypeError(_typeof2(e6) + " is not iterable");
    }
    module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var require_regeneratorRuntime = __commonJS({
  "node_modules/@babel/runtime/helpers/regeneratorRuntime.js"(exports, module) {
    var OverloadYield = require_OverloadYield();
    var regenerator = require_regenerator();
    var regeneratorAsync = require_regeneratorAsync();
    var regeneratorAsyncGen = require_regeneratorAsyncGen();
    var regeneratorAsyncIterator = require_regeneratorAsyncIterator();
    var regeneratorKeys = require_regeneratorKeys();
    var regeneratorValues = require_regeneratorValues();
    function _regeneratorRuntime7() {
      "use strict";
      var r6 = regenerator(), e6 = r6.m(_regeneratorRuntime7), t3 = (Object.getPrototypeOf ? Object.getPrototypeOf(e6) : e6.__proto__).constructor;
      function n5(r7) {
        var e7 = "function" == typeof r7 && r7.constructor;
        return !!e7 && (e7 === t3 || "GeneratorFunction" === (e7.displayName || e7.name));
      }
      var o6 = {
        "throw": 1,
        "return": 2,
        "break": 3,
        "continue": 3
      };
      function a3(r7) {
        var e7, t4;
        return function(n6) {
          e7 || (e7 = {
            stop: function stop() {
              return t4(n6.a, 2);
            },
            "catch": function _catch() {
              return n6.v;
            },
            abrupt: function abrupt(r8, e8) {
              return t4(n6.a, o6[r8], e8);
            },
            delegateYield: function delegateYield(r8, o7, a4) {
              return e7.resultName = o7, t4(n6.d, regeneratorValues(r8), a4);
            },
            finish: function finish(r8) {
              return t4(n6.f, r8);
            }
          }, t4 = function t5(r8, _t, o7) {
            n6.p = e7.prev, n6.n = e7.next;
            try {
              return r8(_t, o7);
            } finally {
              e7.next = n6.n;
            }
          }), e7.resultName && (e7[e7.resultName] = n6.v, e7.resultName = void 0), e7.sent = n6.v, e7.next = n6.n;
          try {
            return r7.call(this, e7);
          } finally {
            n6.p = e7.prev, n6.n = e7.next;
          }
        };
      }
      return (module.exports = _regeneratorRuntime7 = function _regeneratorRuntime8() {
        return {
          wrap: function wrap(e7, t4, n6, o7) {
            return r6.w(a3(e7), t4, n6, o7 && o7.reverse());
          },
          isGeneratorFunction: n5,
          mark: r6.m,
          awrap: function awrap(r7, e7) {
            return new OverloadYield(r7, e7);
          },
          AsyncIterator: regeneratorAsyncIterator,
          async: function async(r7, e7, t4, o7, u3) {
            return (n5(e7) ? regeneratorAsyncGen : regeneratorAsync)(a3(r7), e7, t4, o7, u3);
          },
          keys: regeneratorKeys,
          values: regeneratorValues
        };
      }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
    }
    module.exports = _regeneratorRuntime7, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/regenerator/index.js
var require_regenerator2 = __commonJS({
  "node_modules/@babel/runtime/regenerator/index.js"(exports, module) {
    var runtime = require_regeneratorRuntime()();
    module.exports = runtime;
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  }
});

// node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(n5, t3, e6, r6, o6, a3, c4) {
  try {
    var i5 = n5[a3](c4), u3 = i5.value;
  } catch (n6) {
    return void e6(n6);
  }
  i5.done ? t3(u3) : Promise.resolve(u3).then(r6, o6);
}
function _asyncToGenerator(n5) {
  return function() {
    var t3 = this, e6 = arguments;
    return new Promise(function(r6, o6) {
      var a3 = n5.apply(t3, e6);
      function _next(n6) {
        asyncGeneratorStep(a3, r6, o6, _next, _throw, "next", n6);
      }
      function _throw(n6) {
        asyncGeneratorStep(a3, r6, o6, _next, _throw, "throw", n6);
      }
      _next(void 0);
    });
  };
}

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a3, n5) {
  if (!(a3 instanceof n5)) throw new TypeError("Cannot call a class as a function");
}

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o6) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o7) {
    return typeof o7;
  } : function(o7) {
    return o7 && "function" == typeof Symbol && o7.constructor === Symbol && o7 !== Symbol.prototype ? "symbol" : typeof o7;
  }, _typeof(o6);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t3, e6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var r6;
  if ("undefined" != typeof Symbol && void 0 !== (r6 = t3[Symbol.toPrimitive])) {
    var i5 = r6.call(t3, e6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e6 ? String : Number)(t3);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t3) {
  var i5 = toPrimitive(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e6, r6) {
  for (var t3 = 0; t3 < r6.length; t3++) {
    var o6 = r6[t3];
    o6.enumerable = o6.enumerable || false, o6.configurable = true, "value" in o6 && (o6.writable = true), Object.defineProperty(e6, toPropertyKey(o6.key), o6);
  }
}
function _createClass(e6, r6, t3) {
  return r6 && _defineProperties(e6.prototype, r6), t3 && _defineProperties(e6, t3), Object.defineProperty(e6, "prototype", {
    writable: false
  }), e6;
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e6) {
  if (void 0 === e6) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(t3, e6) {
  if (e6 && ("object" == _typeof(e6) || "function" == typeof e6)) return e6;
  if (void 0 !== e6) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t3);
}

// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t3) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
    return t4.__proto__ || Object.getPrototypeOf(t4);
  }, _getPrototypeOf(t3);
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t3, e6) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e7) {
    return t4.__proto__ = e7, t4;
  }, _setPrototypeOf(t3, e6);
}

// node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(t3, e6) {
  if ("function" != typeof e6 && null !== e6) throw new TypeError("Super expression must either be null or a function");
  t3.prototype = Object.create(e6 && e6.prototype, {
    constructor: {
      value: t3,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t3, "prototype", {
    writable: false
  }), e6 && _setPrototypeOf(t3, e6);
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e6, r6, t3) {
  return (r6 = toPropertyKey(r6)) in e6 ? Object.defineProperty(e6, r6, {
    value: t3,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e6[r6] = t3, e6;
}

// node_modules/rete/rete.esm.js
var import_regenerator = __toESM(require_regenerator2());
function _createForOfIteratorHelper$1(r6, e6) {
  var t3 = "undefined" != typeof Symbol && r6[Symbol.iterator] || r6["@@iterator"];
  if (!t3) {
    if (Array.isArray(r6) || (t3 = _unsupportedIterableToArray$1(r6)) || e6 && r6 && "number" == typeof r6.length) {
      t3 && (r6 = t3);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n5() {
        return _n >= r6.length ? { done: true } : { done: false, value: r6[_n++] };
      }, e: function e7(r7) {
        throw r7;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o6, a3 = true, u3 = false;
  return { s: function s4() {
    t3 = t3.call(r6);
  }, n: function n5() {
    var r7 = t3.next();
    return a3 = r7.done, r7;
  }, e: function e7(r7) {
    u3 = true, o6 = r7;
  }, f: function f3() {
    try {
      a3 || null == t3["return"] || t3["return"]();
    } finally {
      if (u3) throw o6;
    }
  } };
}
function _unsupportedIterableToArray$1(r6, a3) {
  if (r6) {
    if ("string" == typeof r6) return _arrayLikeToArray$1(r6, a3);
    var t3 = {}.toString.call(r6).slice(8, -1);
    return "Object" === t3 && r6.constructor && (t3 = r6.constructor.name), "Map" === t3 || "Set" === t3 ? Array.from(r6) : "Arguments" === t3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t3) ? _arrayLikeToArray$1(r6, a3) : void 0;
  }
}
function _arrayLikeToArray$1(r6, a3) {
  (null == a3 || a3 > r6.length) && (a3 = r6.length);
  for (var e6 = 0, n5 = Array(a3); e6 < a3; e6++) n5[e6] = r6[e6];
  return n5;
}
function useHelper() {
  return {
    debug: function debug(_f) {
    }
  };
}
var Signal = /* @__PURE__ */ (function() {
  function Signal2() {
    _classCallCheck(this, Signal2);
    _defineProperty(this, "pipes", []);
  }
  return _createClass(Signal2, [{
    key: "addPipe",
    value: function addPipe(pipe) {
      this.pipes.push(pipe);
    }
  }, {
    key: "emit",
    value: (function() {
      var _emit = _asyncToGenerator(/* @__PURE__ */ import_regenerator.default.mark(function _callee(context) {
        var current, _iterator, _step, pipe;
        return import_regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              current = context;
              _iterator = _createForOfIteratorHelper$1(this.pipes);
              _context.prev = 2;
              _iterator.s();
            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 13;
                break;
              }
              pipe = _step.value;
              _context.next = 8;
              return pipe(current);
            case 8:
              current = _context.sent;
              if (!(typeof current === "undefined")) {
                _context.next = 11;
                break;
              }
              return _context.abrupt("return");
            case 11:
              _context.next = 4;
              break;
            case 13:
              _context.next = 18;
              break;
            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);
              _iterator.e(_context.t0);
            case 18:
              _context.prev = 18;
              _iterator.f();
              return _context.finish(18);
            case 21:
              return _context.abrupt("return", current);
            case 22:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[2, 15, 18, 21]]);
      }));
      function emit(_x) {
        return _emit.apply(this, arguments);
      }
      return emit;
    })()
  }]);
})();
var Scope = /* @__PURE__ */ (function() {
  function Scope2(name) {
    _classCallCheck(this, Scope2);
    _defineProperty(this, "signal", new Signal());
    this.name = name;
  }
  return _createClass(Scope2, [{
    key: "addPipe",
    value: function addPipe(middleware) {
      this.signal.addPipe(middleware);
    }
  }, {
    key: "use",
    value: function use(scope) {
      if (!(scope instanceof Scope2)) throw new Error("cannot use non-Scope instance");
      scope.setParent(this);
      this.addPipe(function(context) {
        return scope.signal.emit(context);
      });
      return useHelper();
    }
  }, {
    key: "setParent",
    value: function setParent(scope) {
      this.parent = scope;
    }
  }, {
    key: "emit",
    value: function emit(context) {
      return this.signal.emit(context);
    }
  }, {
    key: "hasParent",
    value: function hasParent() {
      return Boolean(this.parent);
    }
  }, {
    key: "parentScope",
    value: function parentScope(type) {
      if (!this.parent) throw new Error("cannot find parent");
      if (type && this.parent instanceof type) return this.parent;
      if (type) throw new Error("actual parent is not instance of type");
      return this.parent;
    }
  }]);
})();
function _createForOfIteratorHelper(r6, e6) {
  var t3 = "undefined" != typeof Symbol && r6[Symbol.iterator] || r6["@@iterator"];
  if (!t3) {
    if (Array.isArray(r6) || (t3 = _unsupportedIterableToArray(r6)) || e6 && r6 && "number" == typeof r6.length) {
      t3 && (r6 = t3);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n5() {
        return _n >= r6.length ? { done: true } : { done: false, value: r6[_n++] };
      }, e: function e7(r7) {
        throw r7;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o6, a3 = true, u3 = false;
  return { s: function s4() {
    t3 = t3.call(r6);
  }, n: function n5() {
    var r7 = t3.next();
    return a3 = r7.done, r7;
  }, e: function e7(r7) {
    u3 = true, o6 = r7;
  }, f: function f3() {
    try {
      a3 || null == t3["return"] || t3["return"]();
    } finally {
      if (u3) throw o6;
    }
  } };
}
function _unsupportedIterableToArray(r6, a3) {
  if (r6) {
    if ("string" == typeof r6) return _arrayLikeToArray(r6, a3);
    var t3 = {}.toString.call(r6).slice(8, -1);
    return "Object" === t3 && r6.constructor && (t3 = r6.constructor.name), "Map" === t3 || "Set" === t3 ? Array.from(r6) : "Arguments" === t3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t3) ? _arrayLikeToArray(r6, a3) : void 0;
  }
}
function _arrayLikeToArray(r6, a3) {
  (null == a3 || a3 > r6.length) && (a3 = r6.length);
  for (var e6 = 0, n5 = Array(a3); e6 < a3; e6++) n5[e6] = r6[e6];
  return n5;
}
function _callSuper$1(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$1() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$1() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
var NodeEditor = /* @__PURE__ */ (function(_Scope) {
  function NodeEditor2() {
    var _this;
    _classCallCheck(this, NodeEditor2);
    _this = _callSuper$1(this, NodeEditor2, ["NodeEditor"]);
    _defineProperty(_this, "nodes", []);
    _defineProperty(_this, "connections", []);
    return _this;
  }
  _inherits(NodeEditor2, _Scope);
  return _createClass(NodeEditor2, [{
    key: "getNode",
    value: function getNode(id) {
      return this.nodes.find(function(node) {
        return node.id === id;
      });
    }
    /**
     * Get all nodes
     * @returns Copy of array with nodes
     */
  }, {
    key: "getNodes",
    value: function getNodes() {
      return this.nodes.slice();
    }
    /**
     * Get all connections
     * @returns Copy of array with onnections
     */
  }, {
    key: "getConnections",
    value: function getConnections() {
      return this.connections.slice();
    }
    /**
     * Get a connection by id
     * @param id - The connection id
     * @returns The connection or undefined
     */
  }, {
    key: "getConnection",
    value: function getConnection(id) {
      return this.connections.find(function(connection) {
        return connection.id === id;
      });
    }
    /**
     * Add a node
     * @param data - The node data
     * @returns Whether the node was added
     * @throws If the node has already been added
     * @emits nodecreate
     * @emits nodecreated
     */
  }, {
    key: "addNode",
    value: (function() {
      var _addNode = _asyncToGenerator(/* @__PURE__ */ import_regenerator.default.mark(function _callee(data) {
        return import_regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this.getNode(data.id)) {
                _context.next = 2;
                break;
              }
              throw new Error("node has already been added");
            case 2:
              _context.next = 4;
              return this.emit({
                type: "nodecreate",
                data
              });
            case 4:
              if (_context.sent) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return", false);
            case 6:
              this.nodes.push(data);
              _context.next = 9;
              return this.emit({
                type: "nodecreated",
                data
              });
            case 9:
              return _context.abrupt("return", true);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function addNode(_x) {
        return _addNode.apply(this, arguments);
      }
      return addNode;
    })()
  }, {
    key: "addConnection",
    value: (function() {
      var _addConnection = _asyncToGenerator(/* @__PURE__ */ import_regenerator.default.mark(function _callee2(data) {
        return import_regenerator.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.getConnection(data.id)) {
                _context2.next = 2;
                break;
              }
              throw new Error("connection has already been added");
            case 2:
              _context2.next = 4;
              return this.emit({
                type: "connectioncreate",
                data
              });
            case 4:
              if (_context2.sent) {
                _context2.next = 6;
                break;
              }
              return _context2.abrupt("return", false);
            case 6:
              this.connections.push(data);
              _context2.next = 9;
              return this.emit({
                type: "connectioncreated",
                data
              });
            case 9:
              return _context2.abrupt("return", true);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function addConnection(_x2) {
        return _addConnection.apply(this, arguments);
      }
      return addConnection;
    })()
  }, {
    key: "removeNode",
    value: (function() {
      var _removeNode = _asyncToGenerator(/* @__PURE__ */ import_regenerator.default.mark(function _callee3(id) {
        var node, index5;
        return import_regenerator.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              node = this.nodes.find(function(n5) {
                return n5.id === id;
              });
              if (node) {
                _context3.next = 3;
                break;
              }
              throw new Error("cannot find node");
            case 3:
              _context3.next = 5;
              return this.emit({
                type: "noderemove",
                data: node
              });
            case 5:
              if (_context3.sent) {
                _context3.next = 7;
                break;
              }
              return _context3.abrupt("return", false);
            case 7:
              index5 = this.nodes.indexOf(node);
              this.nodes.splice(index5, 1);
              _context3.next = 11;
              return this.emit({
                type: "noderemoved",
                data: node
              });
            case 11:
              return _context3.abrupt("return", true);
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function removeNode(_x3) {
        return _removeNode.apply(this, arguments);
      }
      return removeNode;
    })()
  }, {
    key: "removeConnection",
    value: (function() {
      var _removeConnection = _asyncToGenerator(/* @__PURE__ */ import_regenerator.default.mark(function _callee4(id) {
        var connection, index5;
        return import_regenerator.default.wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              connection = this.connections.find(function(c4) {
                return c4.id === id;
              });
              if (connection) {
                _context4.next = 3;
                break;
              }
              throw new Error("cannot find connection");
            case 3:
              _context4.next = 5;
              return this.emit({
                type: "connectionremove",
                data: connection
              });
            case 5:
              if (_context4.sent) {
                _context4.next = 7;
                break;
              }
              return _context4.abrupt("return", false);
            case 7:
              index5 = this.connections.indexOf(connection);
              this.connections.splice(index5, 1);
              _context4.next = 11;
              return this.emit({
                type: "connectionremoved",
                data: connection
              });
            case 11:
              return _context4.abrupt("return", true);
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function removeConnection(_x4) {
        return _removeConnection.apply(this, arguments);
      }
      return removeConnection;
    })()
  }, {
    key: "clear",
    value: (function() {
      var _clear = _asyncToGenerator(/* @__PURE__ */ import_regenerator.default.mark(function _callee5() {
        var _iterator, _step, connection, _iterator2, _step2, node;
        return import_regenerator.default.wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.emit({
                type: "clear"
              });
            case 2:
              if (_context5.sent) {
                _context5.next = 6;
                break;
              }
              _context5.next = 5;
              return this.emit({
                type: "clearcancelled"
              });
            case 5:
              return _context5.abrupt("return", false);
            case 6:
              _iterator = _createForOfIteratorHelper(this.connections.slice());
              _context5.prev = 7;
              _iterator.s();
            case 9:
              if ((_step = _iterator.n()).done) {
                _context5.next = 15;
                break;
              }
              connection = _step.value;
              _context5.next = 13;
              return this.removeConnection(connection.id);
            case 13:
              _context5.next = 9;
              break;
            case 15:
              _context5.next = 20;
              break;
            case 17:
              _context5.prev = 17;
              _context5.t0 = _context5["catch"](7);
              _iterator.e(_context5.t0);
            case 20:
              _context5.prev = 20;
              _iterator.f();
              return _context5.finish(20);
            case 23:
              _iterator2 = _createForOfIteratorHelper(this.nodes.slice());
              _context5.prev = 24;
              _iterator2.s();
            case 26:
              if ((_step2 = _iterator2.n()).done) {
                _context5.next = 32;
                break;
              }
              node = _step2.value;
              _context5.next = 30;
              return this.removeNode(node.id);
            case 30:
              _context5.next = 26;
              break;
            case 32:
              _context5.next = 37;
              break;
            case 34:
              _context5.prev = 34;
              _context5.t1 = _context5["catch"](24);
              _iterator2.e(_context5.t1);
            case 37:
              _context5.prev = 37;
              _iterator2.f();
              return _context5.finish(37);
            case 40:
              _context5.next = 42;
              return this.emit({
                type: "cleared"
              });
            case 42:
              return _context5.abrupt("return", true);
            case 43:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[7, 17, 20, 23], [24, 34, 37, 40]]);
      }));
      function clear() {
        return _clear.apply(this, arguments);
      }
      return clear;
    })()
  }]);
})(Scope);
var crypto = globalThis.crypto;
function getUID() {
  if ("randomBytes" in crypto) {
    return crypto.randomBytes(8).toString("hex");
  }
  var bytes = crypto.getRandomValues(new Uint8Array(8));
  var array = Array.from(bytes);
  var hexPairs = array.map(function(b3) {
    return b3.toString(16).padStart(2, "0");
  });
  return hexPairs.join("");
}
function _callSuper(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
var Socket = /* @__PURE__ */ _createClass(
  /**
   * @constructor
   * @param name Name of the socket
   */
  function Socket2(name) {
    _classCallCheck(this, Socket2);
    this.name = name;
  }
);
var Port = /* @__PURE__ */ _createClass(
  /**
   * Port id, unique string generated by `getUID` function
   */
  /**
   * Port index, used for sorting ports. Default is `0`
   */
  /**
   * @constructor
   * @param socket Socket instance
   * @param label Label of the port
   * @param multipleConnections Whether the output port can have multiple connections
   */
  function Port2(socket, label, multipleConnections) {
    _classCallCheck(this, Port2);
    this.socket = socket;
    this.label = label;
    this.multipleConnections = multipleConnections;
    this.id = getUID();
  }
);
var Input = /* @__PURE__ */ (function(_Port) {
  function Input2(socket, label, multipleConnections) {
    var _this;
    _classCallCheck(this, Input2);
    _this = _callSuper(this, Input2, [socket, label, multipleConnections]);
    _defineProperty(_this, "control", null);
    _defineProperty(_this, "showControl", true);
    _this.socket = socket;
    _this.label = label;
    _this.multipleConnections = multipleConnections;
    return _this;
  }
  _inherits(Input2, _Port);
  return _createClass(Input2, [{
    key: "addControl",
    value: function addControl(control) {
      if (this.control) throw new Error("control already added for this input");
      this.control = control;
    }
    /**
     * Remove control from the input port
     */
  }, {
    key: "removeControl",
    value: function removeControl() {
      this.control = null;
    }
  }]);
})(Port);
var Output = /* @__PURE__ */ (function(_Port2) {
  function Output2(socket, label, multipleConnections) {
    _classCallCheck(this, Output2);
    return _callSuper(this, Output2, [socket, label, multipleConnections !== false]);
  }
  _inherits(Output2, _Port2);
  return _createClass(Output2);
})(Port);
var Control = /* @__PURE__ */ _createClass(
  /**
   * Control id, unique string generated by `getUID` function
   */
  /**
   * Control index, used for sorting controls. Default is `0`
   */
  function Control2() {
    _classCallCheck(this, Control2);
    this.id = getUID();
  }
);
var InputControl = /* @__PURE__ */ (function(_Control) {
  function InputControl2(type, options) {
    var _options$readonly;
    var _this2;
    _classCallCheck(this, InputControl2);
    _this2 = _callSuper(this, InputControl2);
    _this2.type = type;
    _this2.options = options;
    _this2.id = getUID();
    _this2.readonly = (_options$readonly = options === null || options === void 0 ? void 0 : options.readonly) !== null && _options$readonly !== void 0 ? _options$readonly : false;
    if (typeof (options === null || options === void 0 ? void 0 : options.initial) !== "undefined") _this2.value = options.initial;
    return _this2;
  }
  _inherits(InputControl2, _Control);
  return _createClass(InputControl2, [{
    key: "setValue",
    value: function setValue(value) {
      var _this$options;
      this.value = value;
      if ((_this$options = this.options) !== null && _this$options !== void 0 && _this$options.change) this.options.change(value);
    }
  }]);
})(Control);
var Node = /* @__PURE__ */ (function() {
  function Node2(label) {
    _classCallCheck(this, Node2);
    _defineProperty(this, "inputs", {});
    _defineProperty(this, "outputs", {});
    _defineProperty(this, "controls", {});
    this.label = label;
    this.id = getUID();
  }
  return _createClass(Node2, [{
    key: "hasInput",
    value: function hasInput(key) {
      return Object.prototype.hasOwnProperty.call(this.inputs, key);
    }
  }, {
    key: "addInput",
    value: function addInput(key, input) {
      if (this.hasInput(key)) throw new Error("input with key '".concat(String(key), "' already added"));
      Object.defineProperty(this.inputs, key, {
        value: input,
        enumerable: true,
        configurable: true
      });
    }
  }, {
    key: "removeInput",
    value: function removeInput(key) {
      delete this.inputs[key];
    }
  }, {
    key: "hasOutput",
    value: function hasOutput(key) {
      return Object.prototype.hasOwnProperty.call(this.outputs, key);
    }
  }, {
    key: "addOutput",
    value: function addOutput(key, output) {
      if (this.hasOutput(key)) throw new Error("output with key '".concat(String(key), "' already added"));
      Object.defineProperty(this.outputs, key, {
        value: output,
        enumerable: true,
        configurable: true
      });
    }
  }, {
    key: "removeOutput",
    value: function removeOutput(key) {
      delete this.outputs[key];
    }
  }, {
    key: "hasControl",
    value: function hasControl(key) {
      return Object.prototype.hasOwnProperty.call(this.controls, key);
    }
  }, {
    key: "addControl",
    value: function addControl(key, control) {
      if (this.hasControl(key)) throw new Error("control with key '".concat(String(key), "' already added"));
      Object.defineProperty(this.controls, key, {
        value: control,
        enumerable: true,
        configurable: true
      });
    }
  }, {
    key: "removeControl",
    value: function removeControl(key) {
      delete this.controls[key];
    }
  }]);
})();
var Connection = /* @__PURE__ */ _createClass(
  /**
   * Connection id, unique string generated by `getUID` function
   */
  /**
   * Source node id
   */
  /**
   * Target node id
   */
  /**
   * @constructor
   * @param source Source node instance
   * @param sourceOutput Source node output key
   * @param target Target node instance
   * @param targetInput Target node input key
   */
  function Connection2(source, sourceOutput, target, targetInput) {
    _classCallCheck(this, Connection2);
    this.sourceOutput = sourceOutput;
    this.targetInput = targetInput;
    if (!source.outputs[sourceOutput]) {
      throw new Error("source node doesn't have output with a key ".concat(String(sourceOutput)));
    }
    if (!target.inputs[targetInput]) {
      throw new Error("target node doesn't have input with a key ".concat(String(targetInput)));
    }
    this.id = getUID();
    this.source = source.id;
    this.target = target.id;
  }
);
var classic = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Socket,
  Port,
  Input,
  Output,
  Control,
  InputControl,
  Node,
  Connection
});

// node_modules/rete-area-plugin/rete-area-plugin.esm.js
var import_regenerator2 = __toESM(require_regenerator2());

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray2(r6, a3) {
  (null == a3 || a3 > r6.length) && (a3 = r6.length);
  for (var e6 = 0, n5 = Array(a3); e6 < a3; e6++) n5[e6] = r6[e6];
  return n5;
}

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(r6) {
  if (Array.isArray(r6)) return _arrayLikeToArray2(r6);
}

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r6) {
  if ("undefined" != typeof Symbol && null != r6[Symbol.iterator] || null != r6["@@iterator"]) return Array.from(r6);
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray2(r6, a3) {
  if (r6) {
    if ("string" == typeof r6) return _arrayLikeToArray2(r6, a3);
    var t3 = {}.toString.call(r6).slice(8, -1);
    return "Object" === t3 && r6.constructor && (t3 = r6.constructor.name), "Map" === t3 || "Set" === t3 ? Array.from(r6) : "Arguments" === t3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t3) ? _arrayLikeToArray2(r6, a3) : void 0;
  }
}

// node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(r6) {
  return _arrayWithoutHoles(r6) || _iterableToArray(r6) || _unsupportedIterableToArray2(r6) || _nonIterableSpread();
}

// node_modules/rete-area-plugin/rete-area-plugin.esm.js
var Content = /* @__PURE__ */ (function() {
  function Content2(reordered) {
    _classCallCheck(this, Content2);
    this.reordered = reordered;
    this.holder = document.createElement("div");
    this.holder.style.transformOrigin = "0 0";
  }
  return _createClass(Content2, [{
    key: "getPointerFrom",
    value: function getPointerFrom(event) {
      var _this$holder$getBound = this.holder.getBoundingClientRect(), left = _this$holder$getBound.left, top = _this$holder$getBound.top;
      var x2 = event.clientX - left;
      var y3 = event.clientY - top;
      return {
        x: x2,
        y: y3
      };
    }
  }, {
    key: "add",
    value: function add(element) {
      this.holder.appendChild(element);
    }
  }, {
    key: "reorder",
    value: (function() {
      var _reorder = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee(target, next) {
        return import_regenerator2.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.holder.contains(target)) {
                _context.next = 2;
                break;
              }
              throw new Error("content doesn't have 'target' for reordering");
            case 2:
              if (!(next !== null && !this.holder.contains(next))) {
                _context.next = 4;
                break;
              }
              throw new Error("content doesn't have 'next' for reordering");
            case 4:
              this.holder.insertBefore(target, next);
              _context.next = 7;
              return this.reordered(target);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function reorder(_x, _x2) {
        return _reorder.apply(this, arguments);
      }
      return reorder;
    })()
  }, {
    key: "remove",
    value: function remove(element) {
      if (this.holder.contains(element)) {
        this.holder.removeChild(element);
      }
    }
  }]);
})();
function usePointerListener(element, handlers) {
  var move = function move2(event) {
    handlers.move(event);
  };
  var _up = function up(event) {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", _up);
    window.removeEventListener("pointercancel", _up);
    handlers.up(event);
  };
  var down = function down2(event) {
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", _up);
    window.addEventListener("pointercancel", _up);
    handlers.down(event);
  };
  element.addEventListener("pointerdown", down);
  return {
    destroy: function destroy() {
      element.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", _up);
      window.removeEventListener("pointercancel", _up);
    }
  };
}
var min = function min2(arr) {
  return arr.length === 0 ? 0 : Math.min.apply(Math, _toConsumableArray(arr));
};
var max = function max2(arr) {
  return arr.length === 0 ? 0 : Math.max.apply(Math, _toConsumableArray(arr));
};
function getBoundingBox$1(rects) {
  var left = min(rects.map(function(rect) {
    return rect.position.x;
  }));
  var top = min(rects.map(function(rect) {
    return rect.position.y;
  }));
  var right = max(rects.map(function(rect) {
    return rect.position.x + rect.width;
  }));
  var bottom = max(rects.map(function(rect) {
    return rect.position.y + rect.height;
  }));
  return {
    left,
    right,
    top,
    bottom,
    width: Math.abs(left - right),
    height: Math.abs(top - bottom),
    center: {
      x: (left + right) / 2,
      y: (top + bottom) / 2
    }
  };
}
function ownKeys$4(e6, r6) {
  var t3 = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e6);
    r6 && (o6 = o6.filter(function(r7) {
      return Object.getOwnPropertyDescriptor(e6, r7).enumerable;
    })), t3.push.apply(t3, o6);
  }
  return t3;
}
function _objectSpread$4(e6) {
  for (var r6 = 1; r6 < arguments.length; r6++) {
    var t3 = null != arguments[r6] ? arguments[r6] : {};
    r6 % 2 ? ownKeys$4(Object(t3), true).forEach(function(r7) {
      _defineProperty(e6, r7, t3[r7]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(t3)) : ownKeys$4(Object(t3)).forEach(function(r7) {
      Object.defineProperty(e6, r7, Object.getOwnPropertyDescriptor(t3, r7));
    });
  }
  return e6;
}
var Drag = /* @__PURE__ */ (function() {
  function Drag2(guards) {
    var _this = this;
    _classCallCheck(this, Drag2);
    _defineProperty(this, "down", function(e6) {
      if (!_this.guards.down(e6)) return;
      e6.stopPropagation();
      _this.pointerStart = {
        x: e6.pageX,
        y: e6.pageY
      };
      _this.startPosition = _objectSpread$4({}, _this.config.getCurrentPosition());
      _this.events.start(e6);
    });
    _defineProperty(this, "move", function(e6) {
      if (!_this.pointerStart || !_this.startPosition) return;
      if (!_this.guards.move(e6)) return;
      e6.preventDefault();
      var delta = {
        x: e6.pageX - _this.pointerStart.x,
        y: e6.pageY - _this.pointerStart.y
      };
      var zoom = _this.config.getZoom();
      var x2 = _this.startPosition.x + delta.x / zoom;
      var y3 = _this.startPosition.y + delta.y / zoom;
      void _this.events.translate(x2, y3, e6);
    });
    _defineProperty(this, "up", function(e6) {
      if (!_this.pointerStart) return;
      delete _this.pointerStart;
      _this.events.drag(e6);
    });
    this.guards = guards || {
      down: function down(e6) {
        return !(e6.pointerType === "mouse" && e6.button !== 0);
      },
      move: function move() {
        return true;
      }
    };
  }
  return _createClass(Drag2, [{
    key: "initialize",
    value: function initialize(element, config, events) {
      this.config = config;
      this.events = events;
      element.style.touchAction = "none";
      this.pointerListener = usePointerListener(element, {
        down: this.down,
        move: this.move,
        up: this.up
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.pointerListener.destroy();
    }
  }]);
})();
var LINE_HEIGHT_PX = 8;
var PAGE_HEIGHT_PX = 24;
var DOM_DELTA_LINE = 1;
var DOM_DELTA_PAGE = 2;
function wheelDeltaToPixels(delta, mode) {
  if (mode === DOM_DELTA_LINE) return delta * LINE_HEIGHT_PX;
  if (mode === DOM_DELTA_PAGE) return delta * PAGE_HEIGHT_PX;
  return delta;
}
function computeWheelZoomDelta(pixels, intensity) {
  if (pixels === 0) return 0;
  var unit = intensity / LINE_HEIGHT_PX;
  var raw = -pixels * unit;
  return Math.sign(raw) * Math.min(intensity, Math.abs(raw));
}
var Zoom = /* @__PURE__ */ (function() {
  function Zoom2(intensity) {
    var _this = this;
    _classCallCheck(this, Zoom2);
    _defineProperty(this, "previous", null);
    _defineProperty(this, "pointers", []);
    _defineProperty(this, "wheel", function(e6) {
      e6.preventDefault();
      var pixels = wheelDeltaToPixels(e6.deltaY, e6.deltaMode);
      var delta = computeWheelZoomDelta(pixels, _this.intensity);
      if (delta === 0) return;
      var _this$element$getBoun = _this.element.getBoundingClientRect(), left = _this$element$getBoun.left, top = _this$element$getBoun.top;
      var ox = (left - e6.clientX) * delta;
      var oy = (top - e6.clientY) * delta;
      _this.onzoom(delta, ox, oy, "wheel");
    });
    _defineProperty(this, "down", function(e6) {
      _this.pointers.push(e6);
    });
    _defineProperty(this, "move", function(e6) {
      _this.pointers = _this.pointers.map(function(p3) {
        return p3.pointerId === e6.pointerId ? e6 : p3;
      });
      if (!_this.isTranslating()) return;
      var _this$element$getBoun2 = _this.element.getBoundingClientRect(), left = _this$element$getBoun2.left, top = _this$element$getBoun2.top;
      var _this$getTouches = _this.getTouches(), cx = _this$getTouches.cx, cy = _this$getTouches.cy, distance = _this$getTouches.distance;
      if (_this.previous !== null && _this.previous.distance > 0) {
        var _delta = distance / _this.previous.distance - 1;
        var _ox = (left - cx) * _delta;
        var _oy = (top - cy) * _delta;
        _this.onzoom(_delta, _ox - (_this.previous.cx - cx), _oy - (_this.previous.cy - cy), "touch");
      }
      _this.previous = {
        cx,
        cy,
        distance
      };
    });
    _defineProperty(this, "contextmenu", function() {
      _this.pointers = [];
    });
    _defineProperty(this, "up", function(e6) {
      _this.previous = null;
      _this.pointers = _this.pointers.filter(function(p3) {
        return p3.pointerId !== e6.pointerId;
      });
    });
    _defineProperty(this, "dblclick", function(e6) {
      e6.preventDefault();
      var _this$element$getBoun3 = _this.element.getBoundingClientRect(), left = _this$element$getBoun3.left, top = _this$element$getBoun3.top;
      var delta = 4 * _this.intensity;
      var ox = (left - e6.clientX) * delta;
      var oy = (top - e6.clientY) * delta;
      _this.onzoom(delta, ox, oy, "dblclick");
    });
    this.intensity = intensity;
  }
  return _createClass(Zoom2, [{
    key: "initialize",
    value: function initialize(container, element, onzoom) {
      this.container = container;
      this.element = element;
      this.onzoom = onzoom;
      this.container.addEventListener("wheel", this.wheel);
      this.container.addEventListener("pointerdown", this.down);
      this.container.addEventListener("dblclick", this.dblclick);
      window.addEventListener("pointermove", this.move);
      window.addEventListener("pointerup", this.up);
      window.addEventListener("pointercancel", this.up);
      window.addEventListener("contextmenu", this.contextmenu);
    }
  }, {
    key: "getTouches",
    value: function getTouches() {
      var e6 = {
        touches: this.pointers
      };
      var _ref2 = [e6.touches[0].clientX, e6.touches[0].clientY], x1 = _ref2[0], y1 = _ref2[1];
      var _ref22 = [e6.touches[1].clientX, e6.touches[1].clientY], x2 = _ref22[0], y22 = _ref22[1];
      var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y22, 2));
      return {
        cx: (x1 + x2) / 2,
        cy: (y1 + y22) / 2,
        distance
      };
    }
  }, {
    key: "isTranslating",
    value: function isTranslating() {
      return this.pointers.length >= 2;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.container.removeEventListener("wheel", this.wheel);
      this.container.removeEventListener("pointerdown", this.down);
      this.container.removeEventListener("dblclick", this.dblclick);
      window.removeEventListener("pointermove", this.move);
      window.removeEventListener("pointerup", this.up);
      window.removeEventListener("pointercancel", this.up);
      window.removeEventListener("contextmenu", this.contextmenu);
    }
  }]);
})();
var Area = /* @__PURE__ */ (function() {
  function Area2(container, events, guards) {
    var _this = this;
    _classCallCheck(this, Area2);
    _defineProperty(this, "transform", {
      k: 1,
      x: 0,
      y: 0
    });
    _defineProperty(this, "pointer", {
      x: 0,
      y: 0
    });
    _defineProperty(this, "zoomHandler", null);
    _defineProperty(this, "dragHandler", null);
    _defineProperty(this, "pointerdown", function(event) {
      _this.setPointerFrom(event);
      _this.events.pointerDown(_this.pointer, event);
    });
    _defineProperty(this, "pointermove", function(event) {
      _this.setPointerFrom(event);
      _this.events.pointerMove(_this.pointer, event);
    });
    _defineProperty(this, "pointerup", function(event) {
      _this.setPointerFrom(event);
      _this.events.pointerUp(_this.pointer, event);
    });
    _defineProperty(this, "resize", function(event) {
      _this.events.resize(event);
    });
    _defineProperty(this, "onTranslate", function(x2, y3) {
      var _this$zoomHandler;
      if ((_this$zoomHandler = _this.zoomHandler) !== null && _this$zoomHandler !== void 0 && _this$zoomHandler.isTranslating()) return;
      void _this.translate(x2, y3);
    });
    _defineProperty(this, "onZoom", function(delta, ox, oy, source) {
      void _this.zoom(_this.transform.k * (1 + delta), ox, oy, source);
      _this.update();
    });
    this.container = container;
    this.events = events;
    this.guards = guards;
    this.content = new Content(function(element) {
      return _this.events.reordered(element);
    });
    this.content.holder.style.transformOrigin = "0 0";
    this.setZoomHandler(new Zoom(0.1));
    this.setDragHandler(new Drag());
    this.container.addEventListener("pointerdown", this.pointerdown);
    this.container.addEventListener("pointermove", this.pointermove);
    window.addEventListener("pointerup", this.pointerup);
    window.addEventListener("resize", this.resize);
    container.appendChild(this.content.holder);
    this.update();
  }
  return _createClass(Area2, [{
    key: "update",
    value: function update() {
      var _this$transform = this.transform, x2 = _this$transform.x, y3 = _this$transform.y, k2 = _this$transform.k;
      this.content.holder.style.transform = "translate(".concat(x2, "px, ").concat(y3, "px) scale(").concat(k2, ")");
    }
    /**
     * Drag handler. Destroy previous drag handler if exists.
     * @param drag drag handler
     * @example area.area.setDragHandler(null) // disable drag
     */
  }, {
    key: "setDragHandler",
    value: function setDragHandler(drag) {
      var _this2 = this;
      if (this.dragHandler) this.dragHandler.destroy();
      this.dragHandler = drag;
      if (this.dragHandler) this.dragHandler.initialize(this.container, {
        getCurrentPosition: function getCurrentPosition() {
          return _this2.transform;
        },
        getZoom: function getZoom() {
          return 1;
        }
      }, {
        start: function start() {
          return null;
        },
        translate: this.onTranslate,
        drag: function drag2() {
          return null;
        }
      });
    }
    /**
     * Set zoom handler. Destroy previous zoom handler if exists.
     * @param zoom zoom handler
     * @example area.area.setZoomHandler(null) // disable zoom
     */
  }, {
    key: "setZoomHandler",
    value: function setZoomHandler(zoom) {
      if (this.zoomHandler) this.zoomHandler.destroy();
      this.zoomHandler = zoom;
      if (this.zoomHandler) this.zoomHandler.initialize(this.container, this.content.holder, this.onZoom);
    }
  }, {
    key: "setPointerFrom",
    value: function setPointerFrom(event) {
      var _this$content$getPoin = this.content.getPointerFrom(event), x2 = _this$content$getPoin.x, y3 = _this$content$getPoin.y;
      var k2 = this.transform.k;
      this.pointer = {
        x: x2 / k2,
        y: y3 / k2
      };
    }
  }, {
    key: "translate",
    value: (
      /**
       * Change position of the area
       * @param x desired x coordinate
       * @param y desired y coordinate
       * @returns true if the translation was successful, false otherwise
       * @emits translate
       * @emits translated
       */
      (function() {
        var _translate = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee(x2, y3) {
          var position, result;
          return import_regenerator2.default.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                position = {
                  x: x2,
                  y: y3
                };
                _context.next = 3;
                return this.guards.translate({
                  previous: this.transform,
                  position
                });
              case 3:
                result = _context.sent;
                if (result) {
                  _context.next = 6;
                  break;
                }
                return _context.abrupt("return", false);
              case 6:
                this.transform.x = result.data.position.x;
                this.transform.y = result.data.position.y;
                this.update();
                _context.next = 11;
                return this.events.translated(result.data);
              case 11:
                return _context.abrupt("return", true);
              case 12:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function translate(_x, _x2) {
          return _translate.apply(this, arguments);
        }
        return translate;
      })()
    )
  }, {
    key: "zoom",
    value: (function() {
      var _zoom2 = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee2(_zoom) {
        var ox, oy, source, k2, result, d3, _args2 = arguments;
        return import_regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              ox = _args2.length > 1 && _args2[1] !== void 0 ? _args2[1] : 0;
              oy = _args2.length > 2 && _args2[2] !== void 0 ? _args2[2] : 0;
              source = _args2.length > 3 ? _args2[3] : void 0;
              k2 = this.transform.k;
              _context2.next = 6;
              return this.guards.zoom({
                previous: this.transform,
                zoom: _zoom,
                source
              });
            case 6:
              result = _context2.sent;
              if (result) {
                _context2.next = 9;
                break;
              }
              return _context2.abrupt("return", true);
            case 9:
              d3 = (k2 - result.data.zoom) / (k2 - _zoom || 1);
              this.transform.k = result.data.zoom || 1;
              this.transform.x += ox * d3;
              this.transform.y += oy * d3;
              this.update();
              _context2.next = 16;
              return this.events.zoomed(result.data);
            case 16:
              return _context2.abrupt("return", false);
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function zoom(_x3) {
        return _zoom2.apply(this, arguments);
      }
      return zoom;
    })()
  }, {
    key: "destroy",
    value: function destroy() {
      this.container.removeEventListener("pointerdown", this.pointerdown);
      this.container.removeEventListener("pointermove", this.pointermove);
      window.removeEventListener("pointerup", this.pointerup);
      window.removeEventListener("resize", this.resize);
      if (this.dragHandler) this.dragHandler.destroy();
      if (this.zoomHandler) this.zoomHandler.destroy();
      this.content.holder.innerHTML = "";
    }
  }]);
})();
function _callSuper$12(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$12() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$12() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$12 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
var BaseAreaPlugin = /* @__PURE__ */ (function(_Scope) {
  function BaseAreaPlugin2() {
    _classCallCheck(this, BaseAreaPlugin2);
    return _callSuper$12(this, BaseAreaPlugin2, arguments);
  }
  _inherits(BaseAreaPlugin2, _Scope);
  return _createClass(BaseAreaPlugin2);
})(Scope);
var ConnectionView = /* @__PURE__ */ _createClass(function ConnectionView2(events) {
  _classCallCheck(this, ConnectionView2);
  this.element = document.createElement("div");
  this.element.style.position = "absolute";
  this.element.style.left = "0";
  this.element.style.top = "0";
  this.element.addEventListener("contextmenu", function(event) {
    events.contextmenu(event);
  });
});
var ElementsHolder = /* @__PURE__ */ (function() {
  function ElementsHolder2() {
    _classCallCheck(this, ElementsHolder2);
    _defineProperty(this, "views", /* @__PURE__ */ new WeakMap());
    _defineProperty(this, "viewsElements", /* @__PURE__ */ new Map());
  }
  return _createClass(ElementsHolder2, [{
    key: "set",
    value: function set(context) {
      var element = context.element, type = context.type, payload = context.payload;
      if (payload !== null && payload !== void 0 && payload.id) {
        this.views.set(element, context);
        this.viewsElements.set("".concat(type, "_").concat(payload.id), element);
      }
    }
  }, {
    key: "get",
    value: function get(type, id) {
      var element = this.viewsElements.get("".concat(type, "_").concat(id));
      return element && this.views.get(element);
    }
  }, {
    key: "delete",
    value: function _delete(element) {
      var _view$payload;
      var view = this.views.get(element);
      if (view && (_view$payload = view.payload) !== null && _view$payload !== void 0 && _view$payload.id) {
        this.views["delete"](element);
        this.viewsElements["delete"]("".concat(view.type, "_").concat(view.payload.id));
      }
    }
  }]);
})();
function ownKeys$3(e6, r6) {
  var t3 = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e6);
    r6 && (o6 = o6.filter(function(r7) {
      return Object.getOwnPropertyDescriptor(e6, r7).enumerable;
    })), t3.push.apply(t3, o6);
  }
  return t3;
}
function _objectSpread$3(e6) {
  for (var r6 = 1; r6 < arguments.length; r6++) {
    var t3 = null != arguments[r6] ? arguments[r6] : {};
    r6 % 2 ? ownKeys$3(Object(t3), true).forEach(function(r7) {
      _defineProperty(e6, r7, t3[r7]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(t3)) : ownKeys$3(Object(t3)).forEach(function(r7) {
      Object.defineProperty(e6, r7, Object.getOwnPropertyDescriptor(t3, r7));
    });
  }
  return e6;
}
var NodeView = /* @__PURE__ */ (function() {
  function NodeView2(getZoom, events, guards) {
    var _this = this;
    _classCallCheck(this, NodeView2);
    _defineProperty(this, "translate", /* @__PURE__ */ (function() {
      var _ref2 = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee(x2, y3) {
        var previous, translation;
        return import_regenerator2.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              previous = _objectSpread$3({}, _this.position);
              _context.next = 3;
              return _this.guards.translate({
                previous,
                position: {
                  x: x2,
                  y: y3
                }
              });
            case 3:
              translation = _context.sent;
              if (translation) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return", false);
            case 6:
              _this.position = _objectSpread$3({}, translation.data.position);
              _this.element.style.transform = "translate(".concat(_this.position.x, "px, ").concat(_this.position.y, "px)");
              _context.next = 10;
              return _this.events.translated({
                position: _this.position,
                previous
              });
            case 10:
              return _context.abrupt("return", true);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    })());
    _defineProperty(this, "resize", /* @__PURE__ */ (function() {
      var _ref2 = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee2(width, height) {
        var size, el;
        return import_regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              size = {
                width,
                height
              };
              _context2.next = 3;
              return _this.guards.resize({
                size
              });
            case 3:
              if (_context2.sent) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return", false);
            case 5:
              el = _this.element.querySelector("*:not(span):not([fragment])");
              if (!(!el || !(el instanceof HTMLElement))) {
                _context2.next = 8;
                break;
              }
              return _context2.abrupt("return", false);
            case 8:
              el.style.width = "".concat(width, "px");
              el.style.height = "".concat(height, "px");
              _context2.next = 12;
              return _this.events.resized({
                size
              });
            case 12:
              return _context2.abrupt("return", true);
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function(_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    })());
    this.getZoom = getZoom;
    this.events = events;
    this.guards = guards;
    this.element = document.createElement("div");
    this.element.style.position = "absolute";
    this.position = {
      x: 0,
      y: 0
    };
    void this.translate(0, 0);
    this.element.addEventListener("contextmenu", function(event) {
      _this.events.contextmenu(event);
    });
    this.dragHandler = new Drag();
    this.dragHandler.initialize(this.element, {
      getCurrentPosition: function getCurrentPosition() {
        return _this.position;
      },
      getZoom: function getZoom2() {
        return _this.getZoom();
      }
    }, {
      start: this.events.picked,
      translate: this.translate,
      drag: this.events.dragged
    });
  }
  return _createClass(NodeView2, [{
    key: "destroy",
    value: function destroy() {
      this.dragHandler.destroy();
    }
  }]);
})();
function getNodesRect(nodes, views) {
  return nodes.map(function(node) {
    return {
      view: views.get(node.id),
      node
    };
  }).filter(function(item) {
    return item.view;
  }).map(function(_ref2) {
    var view = _ref2.view, node = _ref2.node;
    var width = node.width, height = node.height;
    if (typeof width !== "undefined" && typeof height !== "undefined") {
      return {
        position: view.position,
        width,
        height
      };
    }
    return {
      position: view.position,
      width: view.element.clientWidth,
      height: view.element.clientHeight
    };
  });
}
function getBoundingBox(plugin, nodes) {
  var editor = plugin.parentScope(NodeEditor);
  var list = nodes.map(function(node) {
    return _typeof(node) === "object" ? node : editor.getNode(node);
  });
  var rects = getNodesRect(list, plugin.nodeViews);
  return getBoundingBox$1(rects);
}
function simpleNodesOrder(base) {
  var area = base;
  area.addPipe(function(context) {
    if (!context || _typeof(context) !== "object" || !("type" in context)) return context;
    if (context.type === "nodepicked") {
      var view = area.nodeViews.get(context.data.id);
      var content = area.area.content;
      if (view) {
        content.reorder(view.element, null);
      }
    }
    if (context.type === "connectioncreated") {
      var _view = area.connectionViews.get(context.data.id);
      var _content = area.area.content;
      if (_view) {
        _content.reorder(_view.element, _content.holder.firstChild);
      }
    }
    return context;
  });
}
var CONNECTION_Z_INDEX = 0;
var NODE_BASE_Z_INDEX = 1;
function zIndexNodesOrder(base) {
  var area = base;
  var nodeZIndex = NODE_BASE_Z_INDEX;
  var setNodeBaseZIndex = function setNodeBaseZIndex2(id) {
    var view = area.nodeViews.get(id);
    if (view) {
      view.element.style.zIndex = String(NODE_BASE_Z_INDEX);
    }
  };
  var bringNodeToFront = function bringNodeToFront2(id) {
    var view = area.nodeViews.get(id);
    if (view) {
      nodeZIndex += 1;
      view.element.style.zIndex = String(nodeZIndex);
    }
  };
  var setConnectionBaseZIndex = function setConnectionBaseZIndex2(id) {
    var view = area.connectionViews.get(id);
    if (view) {
      view.element.style.zIndex = String(CONNECTION_Z_INDEX);
    }
  };
  area.addPipe(function(context) {
    if (!context || _typeof(context) !== "object" || !("type" in context)) return context;
    if (context.type === "nodecreated") {
      setNodeBaseZIndex(context.data.id);
    }
    if (context.type === "nodepicked") {
      bringNodeToFront(context.data.id);
    }
    if (context.type === "connectioncreated") {
      setConnectionBaseZIndex(context.data.id);
    }
    return context;
  });
}
function ownKeys$2(e6, r6) {
  var t3 = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e6);
    r6 && (o6 = o6.filter(function(r7) {
      return Object.getOwnPropertyDescriptor(e6, r7).enumerable;
    })), t3.push.apply(t3, o6);
  }
  return t3;
}
function _objectSpread$2(e6) {
  for (var r6 = 1; r6 < arguments.length; r6++) {
    var t3 = null != arguments[r6] ? arguments[r6] : {};
    r6 % 2 ? ownKeys$2(Object(t3), true).forEach(function(r7) {
      _defineProperty(e6, r7, t3[r7]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(t3)) : ownKeys$2(Object(t3)).forEach(function(r7) {
      Object.defineProperty(e6, r7, Object.getOwnPropertyDescriptor(t3, r7));
    });
  }
  return e6;
}
function restrictor(plugin, params) {
  var scaling = params !== null && params !== void 0 && params.scaling ? params.scaling === true ? {
    min: 0.1,
    max: 1
  } : params.scaling : false;
  var translation = params !== null && params !== void 0 && params.translation ? params.translation === true ? {
    left: 0,
    top: 0,
    right: 1e3,
    bottom: 1e3
  } : params.translation : false;
  function restrictZoom(zoom) {
    if (!scaling) throw new Error("scaling param isnt defined");
    var _ref2 = typeof scaling === "function" ? scaling() : scaling, min3 = _ref2.min, max3 = _ref2.max;
    if (zoom < min3) {
      return min3;
    } else if (zoom > max3) {
      return max3;
    }
    return zoom;
  }
  function restrictPosition(position) {
    if (!translation) throw new Error("translation param isnt defined");
    var nextPosition = _objectSpread$2({}, position);
    var _ref2 = typeof translation === "function" ? translation() : translation, left = _ref2.left, top = _ref2.top, right = _ref2.right, bottom = _ref2.bottom;
    if (nextPosition.x < left) {
      nextPosition.x = left;
    }
    if (nextPosition.x > right) {
      nextPosition.x = right;
    }
    if (nextPosition.y < top) {
      nextPosition.y = top;
    }
    if (nextPosition.y > bottom) {
      nextPosition.y = bottom;
    }
    return nextPosition;
  }
  plugin.addPipe(function(context) {
    if (!context || _typeof(context) !== "object" || !("type" in context)) return context;
    if (scaling && context.type === "zoom") {
      return _objectSpread$2(_objectSpread$2({}, context), {}, {
        data: _objectSpread$2(_objectSpread$2({}, context.data), {}, {
          zoom: restrictZoom(context.data.zoom)
        })
      });
    }
    if (translation && context.type === "zoomed") {
      var position = restrictPosition(plugin.area.transform);
      void plugin.area.translate(position.x, position.y);
    }
    if (translation && context.type === "translate") {
      return _objectSpread$2(_objectSpread$2({}, context), {}, {
        data: _objectSpread$2(_objectSpread$2({}, context.data), {}, {
          position: restrictPosition(context.data.position)
        })
      });
    }
    return context;
  });
}
function accumulateOnCtrl() {
  var pressed = false;
  function keydown(e6) {
    if (e6.key === "Control" || e6.key === "Meta") pressed = true;
  }
  function keyup(e6) {
    if (e6.key === "Control" || e6.key === "Meta") pressed = false;
  }
  document.addEventListener("keydown", keydown);
  document.addEventListener("keyup", keyup);
  return {
    active: function active() {
      return pressed;
    },
    destroy: function destroy() {
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("keyup", keyup);
    }
  };
}
var Selector = /* @__PURE__ */ (function() {
  function Selector2() {
    _classCallCheck(this, Selector2);
    _defineProperty(this, "entities", /* @__PURE__ */ new Map());
    _defineProperty(this, "pickId", null);
  }
  return _createClass(Selector2, [{
    key: "isSelected",
    value: function isSelected(entity) {
      return this.entities.has("".concat(entity.label, "_").concat(entity.id));
    }
  }, {
    key: "add",
    value: (function() {
      var _add = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee(entity, accumulate) {
        var id;
        return import_regenerator2.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              id = "".concat(entity.label, "_").concat(entity.id);
              if (accumulate) {
                _context.next = 4;
                break;
              }
              _context.next = 4;
              return this.unselect(Array.from(this.entities.values()).filter(function(item) {
                return item.label !== entity.label || item.id !== entity.id;
              }));
            case 4:
              this.entities.set(id, entity);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function add(_x, _x2) {
        return _add.apply(this, arguments);
      }
      return add;
    })()
  }, {
    key: "remove",
    value: (function() {
      var _remove = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee2(entity) {
        var id, item;
        return import_regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              id = "".concat(entity.label, "_").concat(entity.id);
              item = this.entities.get(id);
              if (!item) {
                _context2.next = 6;
                break;
              }
              this.entities["delete"](id);
              _context2.next = 6;
              return item.unselect();
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function remove(_x3) {
        return _remove.apply(this, arguments);
      }
      return remove;
    })()
  }, {
    key: "unselect",
    value: (function() {
      var _unselect = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee3(entities) {
        var _this = this;
        return import_regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Promise.all(Array.from(entities).map(function(entity) {
                return _this.remove(entity);
              }));
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function unselect(_x4) {
        return _unselect.apply(this, arguments);
      }
      return unselect;
    })()
  }, {
    key: "unselectAll",
    value: (function() {
      var _unselectAll = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee4() {
        return import_regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.unselect(this.entities.values());
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function unselectAll() {
        return _unselectAll.apply(this, arguments);
      }
      return unselectAll;
    })()
  }, {
    key: "translate",
    value: (function() {
      var _translate = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee5(dx, dy) {
        var _this2 = this;
        return import_regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return Promise.all(Array.from(this.entities.values()).map(function(item) {
                return !_this2.isPicked(item) && item.translate(dx, dy);
              }));
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function translate(_x5, _x6) {
        return _translate.apply(this, arguments);
      }
      return translate;
    })()
  }, {
    key: "pick",
    value: function pick(entity) {
      this.pickId = "".concat(entity.label, "_").concat(entity.id);
    }
  }, {
    key: "release",
    value: function release() {
      this.pickId = null;
    }
  }, {
    key: "isPicked",
    value: function isPicked(entity) {
      return this.pickId === "".concat(entity.label, "_").concat(entity.id);
    }
  }]);
})();
function selector() {
  return new Selector();
}
function selectableNodes(base, core, options) {
  var editor = null;
  var area = base;
  var getEditor = function getEditor2() {
    return editor || (editor = area.parentScope(NodeEditor));
  };
  var twitch = 0;
  function selectNode(node) {
    if (!node.selected) {
      node.selected = true;
      void area.update("node", node.id);
    }
  }
  function unselectNode(node) {
    if (node.selected) {
      node.selected = false;
      void area.update("node", node.id);
    }
  }
  function add(_x7, _x8) {
    return _add2.apply(this, arguments);
  }
  function _add2() {
    _add2 = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee8(nodeId, accumulate) {
      var node;
      return import_regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            node = getEditor().getNode(nodeId);
            if (node) {
              _context8.next = 3;
              break;
            }
            return _context8.abrupt("return");
          case 3:
            _context8.next = 5;
            return core.add({
              label: "node",
              id: node.id,
              translate: function translate(dx, dy) {
                return _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee7() {
                  var view, current;
                  return import_regenerator2.default.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                      case 0:
                        view = area.nodeViews.get(node.id);
                        current = view === null || view === void 0 ? void 0 : view.position;
                        if (!current) {
                          _context7.next = 5;
                          break;
                        }
                        _context7.next = 5;
                        return view.translate(current.x + dx, current.y + dy);
                      case 5:
                      case "end":
                        return _context7.stop();
                    }
                  }, _callee7);
                }))();
              },
              unselect: function unselect() {
                unselectNode(node);
              }
            }, accumulate);
          case 5:
            selectNode(node);
          case 6:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return _add2.apply(this, arguments);
  }
  function remove(_x9) {
    return _remove2.apply(this, arguments);
  }
  function _remove2() {
    _remove2 = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee9(nodeId) {
      return import_regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return core.remove({
              id: nodeId,
              label: "node"
            });
          case 2:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return _remove2.apply(this, arguments);
  }
  area.addPipe(/* @__PURE__ */ (function() {
    var _ref2 = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee6(context) {
      var pickedId, accumulate, _context$data, id, position, previous, _dx, _dy;
      return import_regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!(!context || _typeof(context) !== "object" || !("type" in context))) {
              _context6.next = 2;
              break;
            }
            return _context6.abrupt("return", context);
          case 2:
            if (!(context.type === "nodepicked")) {
              _context6.next = 11;
              break;
            }
            pickedId = context.data.id;
            accumulate = options.accumulating.active();
            core.pick({
              id: pickedId,
              label: "node"
            });
            twitch = null;
            _context6.next = 9;
            return add(pickedId, accumulate);
          case 9:
            _context6.next = 33;
            break;
          case 11:
            if (!(context.type === "nodetranslated")) {
              _context6.next = 20;
              break;
            }
            _context$data = context.data, id = _context$data.id, position = _context$data.position, previous = _context$data.previous;
            _dx = position.x - previous.x;
            _dy = position.y - previous.y;
            if (!core.isPicked({
              id,
              label: "node"
            })) {
              _context6.next = 18;
              break;
            }
            _context6.next = 18;
            return core.translate(_dx, _dy);
          case 18:
            _context6.next = 33;
            break;
          case 20:
            if (!(context.type === "pointerdown")) {
              _context6.next = 24;
              break;
            }
            twitch = 0;
            _context6.next = 33;
            break;
          case 24:
            if (!(context.type === "pointermove")) {
              _context6.next = 28;
              break;
            }
            if (twitch !== null) twitch++;
            _context6.next = 33;
            break;
          case 28:
            if (!(context.type === "pointerup")) {
              _context6.next = 33;
              break;
            }
            if (!(twitch !== null && twitch < 4)) {
              _context6.next = 32;
              break;
            }
            _context6.next = 32;
            return core.unselectAll();
          case 32:
            twitch = null;
          case 33:
            return _context6.abrupt("return", context);
          case 34:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function(_x10) {
      return _ref2.apply(this, arguments);
    };
  })());
  return {
    select: add,
    unselect: remove
  };
}
function showInputControl(area, visible) {
  var editor = null;
  var getEditor = function getEditor2() {
    return editor || (editor = area.parentScope(NodeEditor));
  };
  function updateInputControlVisibility(target, targetInput) {
    var node = getEditor().getNode(target);
    if (!node) return;
    var input = node.inputs[targetInput];
    if (!input) throw new Error("cannot find input");
    var previous = input.showControl;
    var connections = getEditor().getConnections();
    var hasAnyConnection = Boolean(connections.find(function(connection) {
      return connection.target === target && connection.targetInput === targetInput;
    }));
    input.showControl = visible ? visible({
      hasAnyConnection,
      input
    }) : !hasAnyConnection;
    if (input.showControl !== previous) {
      void area.update("node", node.id);
    }
  }
  area.addPipe(function(context) {
    if (context.type === "connectioncreated" || context.type === "connectionremoved") {
      updateInputControlVisibility(context.data.target, context.data.targetInput);
    }
    return context;
  });
}
function ownKeys$1(e6, r6) {
  var t3 = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e6);
    r6 && (o6 = o6.filter(function(r7) {
      return Object.getOwnPropertyDescriptor(e6, r7).enumerable;
    })), t3.push.apply(t3, o6);
  }
  return t3;
}
function _objectSpread$1(e6) {
  for (var r6 = 1; r6 < arguments.length; r6++) {
    var t3 = null != arguments[r6] ? arguments[r6] : {};
    r6 % 2 ? ownKeys$1(Object(t3), true).forEach(function(r7) {
      _defineProperty(e6, r7, t3[r7]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(t3)) : ownKeys$1(Object(t3)).forEach(function(r7) {
      Object.defineProperty(e6, r7, Object.getOwnPropertyDescriptor(t3, r7));
    });
  }
  return e6;
}
function snapGrid(base, params) {
  var area = base;
  var size = typeof (params === null || params === void 0 ? void 0 : params.size) === "undefined" ? 16 : params.size;
  var dynamic = typeof (params === null || params === void 0 ? void 0 : params.dynamic) === "undefined" ? true : params.dynamic;
  function snap(value) {
    return Math.round(value / size) * size;
  }
  area.addPipe(function(context) {
    if (!context || _typeof(context) !== "object" || !("type" in context)) return context;
    if (dynamic && context.type === "nodetranslate") {
      var position = context.data.position;
      var x2 = snap(position.x);
      var y3 = snap(position.y);
      return _objectSpread$1(_objectSpread$1({}, context), {}, {
        data: _objectSpread$1(_objectSpread$1({}, context.data), {}, {
          position: {
            x: x2,
            y: y3
          }
        })
      });
    }
    if (!dynamic && context.type === "nodedragged") {
      var view = area.nodeViews.get(context.data.id);
      if (view) {
        var _view$position = view.position, _x = _view$position.x, _y = _view$position.y;
        void view.translate(snap(_x), snap(_y));
      }
    }
    return context;
  });
}
function zoomAt(_x, _x2, _x3) {
  return _zoomAt.apply(this, arguments);
}
function _zoomAt() {
  _zoomAt = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee(plugin, nodes, params) {
    var _ref2, _ref$scale, scale, editor, list, rects, boundingBox, _ref22, w2, h3, kw, kh, k2;
    return import_regenerator2.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ref2 = params || {}, _ref$scale = _ref2.scale, scale = _ref$scale === void 0 ? 0.9 : _ref$scale;
          editor = plugin.parentScope(NodeEditor);
          list = nodes.map(function(node) {
            return _typeof(node) === "object" ? node : editor.getNode(node);
          });
          rects = getNodesRect(list, plugin.nodeViews);
          boundingBox = getBoundingBox$1(rects);
          _ref22 = [plugin.container.clientWidth, plugin.container.clientHeight], w2 = _ref22[0], h3 = _ref22[1];
          kw = w2 / boundingBox.width, kh = h3 / boundingBox.height;
          k2 = Math.min(kh * scale, kw * scale, 1);
          plugin.area.transform.x = w2 / 2 - boundingBox.center.x * k2;
          plugin.area.transform.y = h3 / 2 - boundingBox.center.y * k2;
          _context.next = 12;
          return plugin.area.zoom(k2, 0, 0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _zoomAt.apply(this, arguments);
}
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getBoundingBox,
  simpleNodesOrder,
  zIndexNodesOrder,
  restrictor,
  accumulateOnCtrl,
  selectableNodes,
  Selector,
  selector,
  showInputControl,
  snapGrid,
  zoomAt
});
function ownKeys(e6, r6) {
  var t3 = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e6);
    r6 && (o6 = o6.filter(function(r7) {
      return Object.getOwnPropertyDescriptor(e6, r7).enumerable;
    })), t3.push.apply(t3, o6);
  }
  return t3;
}
function _objectSpread(e6) {
  for (var r6 = 1; r6 < arguments.length; r6++) {
    var t3 = null != arguments[r6] ? arguments[r6] : {};
    r6 % 2 ? ownKeys(Object(t3), true).forEach(function(r7) {
      _defineProperty(e6, r7, t3[r7]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(t3)) : ownKeys(Object(t3)).forEach(function(r7) {
      Object.defineProperty(e6, r7, Object.getOwnPropertyDescriptor(t3, r7));
    });
  }
  return e6;
}
function _callSuper2(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct2() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct2() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct2 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
var AreaPlugin = /* @__PURE__ */ (function(_BaseAreaPlugin) {
  function AreaPlugin2(container) {
    var _this;
    _classCallCheck(this, AreaPlugin2);
    _this = _callSuper2(this, AreaPlugin2, ["area"]);
    _defineProperty(_this, "nodeViews", /* @__PURE__ */ new Map());
    _defineProperty(_this, "connectionViews", /* @__PURE__ */ new Map());
    _defineProperty(_this, "elements", new ElementsHolder());
    _defineProperty(_this, "onContextMenu", function(event) {
      void _this.emit({
        type: "contextmenu",
        data: {
          event,
          context: "root"
        }
      });
    });
    _this.container = container;
    container.style.overflow = "hidden";
    container.addEventListener("contextmenu", _this.onContextMenu);
    _this.addPipe(function(context) {
      if (!context || !(_typeof(context) === "object" && "type" in context)) return context;
      if (context.type === "nodecreated") {
        _this.addNodeView(context.data);
      }
      if (context.type === "noderemoved") {
        _this.removeNodeView(context.data.id);
      }
      if (context.type === "connectioncreated") {
        _this.addConnectionView(context.data);
      }
      if (context.type === "connectionremoved") {
        _this.removeConnectionView(context.data.id);
      }
      if (context.type === "render") {
        _this.elements.set(context.data);
      }
      if (context.type === "unmount") {
        _this.elements["delete"](context.data.element);
      }
      return context;
    });
    _this.area = new Area(container, {
      zoomed: function zoomed(params) {
        return _this.emit({
          type: "zoomed",
          data: params
        });
      },
      pointerDown: function pointerDown(position, event) {
        return void _this.emit({
          type: "pointerdown",
          data: {
            position,
            event
          }
        });
      },
      pointerMove: function pointerMove(position, event) {
        return void _this.emit({
          type: "pointermove",
          data: {
            position,
            event
          }
        });
      },
      pointerUp: function pointerUp(position, event) {
        return void _this.emit({
          type: "pointerup",
          data: {
            position,
            event
          }
        });
      },
      resize: function resize(event) {
        return void _this.emit({
          type: "resized",
          data: {
            event
          }
        });
      },
      translated: function translated(params) {
        return _this.emit({
          type: "translated",
          data: params
        });
      },
      reordered: function reordered(element) {
        return _this.emit({
          type: "reordered",
          data: {
            element
          }
        });
      }
    }, {
      translate: function translate(params) {
        return _this.emit({
          type: "translate",
          data: params
        });
      },
      zoom: function zoom(params) {
        return _this.emit({
          type: "zoom",
          data: params
        });
      }
    });
    return _this;
  }
  _inherits(AreaPlugin2, _BaseAreaPlugin);
  return _createClass(AreaPlugin2, [{
    key: "addNodeView",
    value: function addNodeView(node) {
      var _this2 = this;
      var id = node.id;
      var view = new NodeView(function() {
        return _this2.area.transform.k;
      }, {
        picked: function picked() {
          return void _this2.emit({
            type: "nodepicked",
            data: {
              id
            }
          });
        },
        translated: function translated(data) {
          return _this2.emit({
            type: "nodetranslated",
            data: _objectSpread({
              id
            }, data)
          });
        },
        dragged: function dragged() {
          return void _this2.emit({
            type: "nodedragged",
            data: node
          });
        },
        contextmenu: function contextmenu(event) {
          return void _this2.emit({
            type: "contextmenu",
            data: {
              event,
              context: node
            }
          });
        },
        resized: function resized(_ref2) {
          var size = _ref2.size;
          return _this2.emit({
            type: "noderesized",
            data: {
              id: node.id,
              size
            }
          });
        }
      }, {
        translate: function translate(data) {
          return _this2.emit({
            type: "nodetranslate",
            data: _objectSpread({
              id
            }, data)
          });
        },
        resize: function resize(_ref2) {
          var size = _ref2.size;
          return _this2.emit({
            type: "noderesize",
            data: {
              id: node.id,
              size
            }
          });
        }
      });
      this.nodeViews.set(id, view);
      this.area.content.add(view.element);
      void this.emit({
        type: "render",
        data: {
          element: view.element,
          type: "node",
          payload: node
        }
      });
      return view;
    }
  }, {
    key: "removeNodeView",
    value: function removeNodeView(id) {
      var view = this.nodeViews.get(id);
      if (view) {
        void this.emit({
          type: "unmount",
          data: {
            element: view.element
          }
        });
        this.nodeViews["delete"](id);
        this.area.content.remove(view.element);
      }
    }
  }, {
    key: "addConnectionView",
    value: function addConnectionView(connection) {
      var _this3 = this;
      var view = new ConnectionView({
        contextmenu: function contextmenu(event) {
          return void _this3.emit({
            type: "contextmenu",
            data: {
              event,
              context: connection
            }
          });
        }
      });
      this.connectionViews.set(connection.id, view);
      this.area.content.add(view.element);
      void this.emit({
        type: "render",
        data: {
          element: view.element,
          type: "connection",
          payload: connection
        }
      });
      return view;
    }
  }, {
    key: "removeConnectionView",
    value: function removeConnectionView(id) {
      var view = this.connectionViews.get(id);
      if (view) {
        void this.emit({
          type: "unmount",
          data: {
            element: view.element
          }
        });
        this.connectionViews["delete"](id);
        this.area.content.remove(view.element);
      }
    }
    /**
     * Force update rendered element by id (node, connection, etc.)
     * @param type Element type
     * @param id Element id
     * @emits render
     */
  }, {
    key: "update",
    value: (function() {
      var _update = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee(type, id) {
        var data;
        return import_regenerator2.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              data = this.elements.get(type, id);
              if (!data) {
                _context.next = 4;
                break;
              }
              _context.next = 4;
              return this.emit({
                type: "render",
                data
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function update(_x, _x2) {
        return _update.apply(this, arguments);
      }
      return update;
    })()
  }, {
    key: "resize",
    value: (function() {
      var _resize = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee2(id, width, height) {
        var view;
        return import_regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              view = this.nodeViews.get(id);
              if (!view) {
                _context2.next = 5;
                break;
              }
              _context2.next = 4;
              return view.resize(width, height);
            case 4:
              return _context2.abrupt("return", _context2.sent);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function resize(_x3, _x4, _x5) {
        return _resize.apply(this, arguments);
      }
      return resize;
    })()
  }, {
    key: "translate",
    value: (function() {
      var _translate = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee3(id, _ref3) {
        var x2, y3, view;
        return import_regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              x2 = _ref3.x, y3 = _ref3.y;
              view = this.nodeViews.get(id);
              if (!view) {
                _context3.next = 6;
                break;
              }
              _context3.next = 5;
              return view.translate(x2, y3);
            case 5:
              return _context3.abrupt("return", _context3.sent);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function translate(_x6, _x7) {
        return _translate.apply(this, arguments);
      }
      return translate;
    })()
  }, {
    key: "destroy",
    value: function destroy() {
      var _this4 = this;
      this.container.removeEventListener("contextmenu", this.onContextMenu);
      Array.from(this.connectionViews.keys()).forEach(function(id) {
        _this4.removeConnectionView(id);
      });
      Array.from(this.nodeViews.keys()).forEach(function(id) {
        _this4.removeNodeView(id);
      });
      this.area.destroy();
    }
  }]);
})(BaseAreaPlugin);

// node_modules/@babel/runtime/helpers/esm/superPropBase.js
function _superPropBase(t3, o6) {
  for (; !{}.hasOwnProperty.call(t3, o6) && null !== (t3 = _getPrototypeOf(t3)); ) ;
  return t3;
}

// node_modules/@babel/runtime/helpers/esm/get.js
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e6, t3, r6) {
    var p3 = _superPropBase(e6, t3);
    if (p3) {
      var n5 = Object.getOwnPropertyDescriptor(p3, t3);
      return n5.get ? n5.get.call(arguments.length < 3 ? e6 : r6) : n5.value;
    }
  }, _get.apply(null, arguments);
}

// node_modules/rete-connection-plugin/rete-connection-plugin.esm.js
var import_regenerator3 = __toESM(require_regenerator2());

// node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r6) {
  if (Array.isArray(r6)) return r6;
}

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r6, l3) {
  var t3 = null == r6 ? null : "undefined" != typeof Symbol && r6[Symbol.iterator] || r6["@@iterator"];
  if (null != t3) {
    var e6, n5, i5, u3, a3 = [], f3 = true, o6 = false;
    try {
      if (i5 = (t3 = t3.call(r6)).next, 0 === l3) {
        if (Object(t3) !== t3) return;
        f3 = false;
      } else for (; !(f3 = (e6 = i5.call(t3)).done) && (a3.push(e6.value), a3.length !== l3); f3 = true) ;
    } catch (r7) {
      o6 = true, n5 = r7;
    } finally {
      try {
        if (!f3 && null != t3["return"] && (u3 = t3["return"](), Object(u3) !== u3)) return;
      } finally {
        if (o6) throw n5;
      }
    }
    return a3;
  }
}

// node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(r6, e6) {
  return _arrayWithHoles(r6) || _iterableToArrayLimit(r6, e6) || _unsupportedIterableToArray2(r6, e6) || _nonIterableRest();
}

// node_modules/rete-connection-plugin/rete-connection-plugin.esm.js
function ownKeys2(e6, r6) {
  var t3 = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e6);
    r6 && (o6 = o6.filter(function(r7) {
      return Object.getOwnPropertyDescriptor(e6, r7).enumerable;
    })), t3.push.apply(t3, o6);
  }
  return t3;
}
function _objectSpread2(e6) {
  for (var r6 = 1; r6 < arguments.length; r6++) {
    var t3 = null != arguments[r6] ? arguments[r6] : {};
    r6 % 2 ? ownKeys2(Object(t3), true).forEach(function(r7) {
      _defineProperty(e6, r7, t3[r7]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(t3)) : ownKeys2(Object(t3)).forEach(function(r7) {
      Object.defineProperty(e6, r7, Object.getOwnPropertyDescriptor(t3, r7));
    });
  }
  return e6;
}
function createPseudoconnection(extra) {
  var element = null;
  var id = null;
  function unmount(areaPlugin) {
    if (id) {
      areaPlugin.removeConnectionView(id);
    }
    element = null;
    id = null;
  }
  function mount(areaPlugin) {
    unmount(areaPlugin);
    id = "pseudo_".concat(getUID());
  }
  return {
    isMounted: function isMounted() {
      return Boolean(id);
    },
    mount,
    render: function render(areaPlugin, _ref2, data) {
      var x2 = _ref2.x, y3 = _ref2.y;
      var isOutput = data.side === "output";
      var pointer = {
        x: x2 + (isOutput ? -3 : 3),
        y: y3
      };
      if (!id) throw new Error("pseudo connection id wasn't generated");
      var payload = isOutput ? _objectSpread2({
        id,
        source: data.nodeId,
        sourceOutput: data.key,
        target: "",
        targetInput: ""
      }, extra !== null && extra !== void 0 ? extra : {}) : _objectSpread2({
        id,
        target: data.nodeId,
        targetInput: data.key,
        source: "",
        sourceOutput: ""
      }, extra !== null && extra !== void 0 ? extra : {});
      if (!element) {
        var view = areaPlugin.addConnectionView(payload);
        element = view.element;
      }
      if (!element) return;
      void areaPlugin.emit({
        type: "render",
        data: _objectSpread2({
          element,
          type: "connection",
          payload
        }, isOutput ? {
          end: pointer
        } : {
          start: pointer
        })
      });
    },
    unmount
  };
}
function _createForOfIteratorHelper$12(r6, e6) {
  var t3 = "undefined" != typeof Symbol && r6[Symbol.iterator] || r6["@@iterator"];
  if (!t3) {
    if (Array.isArray(r6) || (t3 = _unsupportedIterableToArray$12(r6)) || e6 && r6 && "number" == typeof r6.length) {
      t3 && (r6 = t3);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n5() {
        return _n >= r6.length ? { done: true } : { done: false, value: r6[_n++] };
      }, e: function e7(r7) {
        throw r7;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o6, a3 = true, u3 = false;
  return { s: function s4() {
    t3 = t3.call(r6);
  }, n: function n5() {
    var r7 = t3.next();
    return a3 = r7.done, r7;
  }, e: function e7(r7) {
    u3 = true, o6 = r7;
  }, f: function f3() {
    try {
      a3 || null == t3["return"] || t3["return"]();
    } finally {
      if (u3) throw o6;
    }
  } };
}
function _unsupportedIterableToArray$12(r6, a3) {
  if (r6) {
    if ("string" == typeof r6) return _arrayLikeToArray$12(r6, a3);
    var t3 = {}.toString.call(r6).slice(8, -1);
    return "Object" === t3 && r6.constructor && (t3 = r6.constructor.name), "Map" === t3 || "Set" === t3 ? Array.from(r6) : "Arguments" === t3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t3) ? _arrayLikeToArray$12(r6, a3) : void 0;
  }
}
function _arrayLikeToArray$12(r6, a3) {
  (null == a3 || a3 > r6.length) && (a3 = r6.length);
  for (var e6 = 0, n5 = Array(a3); e6 < a3; e6++) n5[e6] = r6[e6];
  return n5;
}
function findSocket(socketsCache, elements) {
  var _iterator = _createForOfIteratorHelper$12(elements), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var element = _step.value;
      var found = socketsCache.get(element);
      if (found) {
        return found;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function elementsFromPoint(x2, y3) {
  var _elements$;
  var root = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document;
  var elements = root.elementsFromPoint(x2, y3);
  var shadowRoot = (_elements$ = elements[0]) === null || _elements$ === void 0 ? void 0 : _elements$.shadowRoot;
  if (shadowRoot && shadowRoot !== root) {
    elements.unshift.apply(elements, _toConsumableArray(elementsFromPoint(x2, y3, shadowRoot)));
  }
  return elements;
}
var State = /* @__PURE__ */ (function() {
  function State2() {
    _classCallCheck(this, State2);
  }
  return _createClass(State2, [{
    key: "setContext",
    value: function setContext(context) {
      this.context = context;
    }
  }]);
})();
function getSourceTarget(initial, socket) {
  var forward = initial.side === "output" && socket.side === "input";
  var backward = initial.side === "input" && socket.side === "output";
  var _ref2 = forward ? [initial, socket] : backward ? [socket, initial] : [], _ref22 = _slicedToArray(_ref2, 2), source = _ref22[0], target = _ref22[1];
  if (source && target) return [source, target];
}
function canMakeConnection(initial, socket) {
  return Boolean(getSourceTarget(initial, socket));
}
function makeConnection(initial, socket, context) {
  var _ref3 = getSourceTarget(initial, socket) || [null, null], _ref4 = _slicedToArray(_ref3, 2), source = _ref4[0], target = _ref4[1];
  if (source && target) {
    void context.editor.addConnection({
      id: getUID(),
      source: source.nodeId,
      sourceOutput: source.key,
      target: target.nodeId,
      targetInput: target.key
    });
    return true;
  }
}
function findPort(socket, editor) {
  var node = editor.getNode(socket.nodeId);
  if (!node) throw new Error("cannot find node");
  var list = socket.side === "input" ? node.inputs : node.outputs;
  return list[socket.key];
}
function findConnections(socket, editor) {
  var nodeId = socket.nodeId, side = socket.side, key = socket.key;
  return editor.getConnections().filter(function(connection) {
    if (side === "input") {
      return connection.target === nodeId && connection.targetInput === key;
    }
    if (side === "output") {
      return connection.source === nodeId && connection.sourceOutput === key;
    }
  });
}
function syncConnections(sockets, editor) {
  var connections = sockets.map(function(socket) {
    var port = findPort(socket, editor);
    var multiple = port === null || port === void 0 ? void 0 : port.multipleConnections;
    if (multiple) return [];
    return findConnections(socket, editor);
  }).flat();
  return {
    commit: function commit() {
      var uniqueIds = Array.from(new Set(connections.map(function(_ref2) {
        var id = _ref2.id;
        return id;
      })));
      uniqueIds.forEach(function(id) {
        return void editor.removeConnection(id);
      });
    }
  };
}
function _callSuper$13(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$13() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$13() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$13 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
var Picked = /* @__PURE__ */ (function(_State) {
  function Picked2(initial, params) {
    var _this;
    _classCallCheck(this, Picked2);
    _this = _callSuper$13(this, Picked2);
    _this.initial = initial;
    _this.params = params;
    return _this;
  }
  _inherits(Picked2, _State);
  return _createClass(Picked2, [{
    key: "pick",
    value: (function() {
      var _pick = _asyncToGenerator(/* @__PURE__ */ import_regenerator3.default.mark(function _callee(_ref2, context) {
        var socket, created;
        return import_regenerator3.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              socket = _ref2.socket;
              if (this.params.canMakeConnection(this.initial, socket)) {
                syncConnections([this.initial, socket], context.editor).commit();
                created = this.params.makeConnection(this.initial, socket, context);
                this.drop(context, created ? socket : null, created);
              }
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function pick(_x, _x2) {
        return _pick.apply(this, arguments);
      }
      return pick;
    })()
  }, {
    key: "drop",
    value: function drop(context) {
      var socket = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      var created = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      if (this.initial) {
        void context.scope.emit({
          type: "connectiondrop",
          data: {
            initial: this.initial,
            socket,
            created
          }
        });
      }
      this.context.switchTo(new Idle(this.params));
    }
  }]);
})(State);
var PickedExisting = /* @__PURE__ */ (function(_State2) {
  function PickedExisting2(connection, params, context) {
    var _this2;
    _classCallCheck(this, PickedExisting2);
    _this2 = _callSuper$13(this, PickedExisting2);
    _this2.connection = connection;
    _this2.params = params;
    var outputSocket = Array.from(context.socketsCache.values()).find(function(data) {
      return data.nodeId === _this2.connection.source && data.side === "output" && data.key === _this2.connection.sourceOutput;
    });
    if (!outputSocket) throw new Error("cannot find output socket");
    _this2.outputSocket = outputSocket;
    return _this2;
  }
  _inherits(PickedExisting2, _State2);
  return _createClass(PickedExisting2, [{
    key: "init",
    value: (function() {
      var _init = _asyncToGenerator(/* @__PURE__ */ import_regenerator3.default.mark(function _callee2(context) {
        var _this3 = this;
        return import_regenerator3.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              void context.scope.emit({
                type: "connectionpick",
                data: {
                  socket: this.outputSocket
                }
              }).then(function(response) {
                if (response) {
                  void context.editor.removeConnection(_this3.connection.id);
                  _this3.initial = _this3.outputSocket;
                } else {
                  _this3.drop(context);
                }
              });
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function init(_x3) {
        return _init.apply(this, arguments);
      }
      return init;
    })()
  }, {
    key: "pick",
    value: (function() {
      var _pick2 = _asyncToGenerator(/* @__PURE__ */ import_regenerator3.default.mark(function _callee3(_ref2, context) {
        var socket, event, created, droppedSocket, _created, _droppedSocket;
        return import_regenerator3.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              socket = _ref2.socket, event = _ref2.event;
              if (this.initial && !(socket.side === "input" && this.connection.target === socket.nodeId && this.connection.targetInput === socket.key)) {
                if (this.params.canMakeConnection(this.initial, socket)) {
                  syncConnections([this.initial, socket], context.editor).commit();
                  created = this.params.makeConnection(this.initial, socket, context);
                  droppedSocket = created ? socket : null;
                  this.drop(context, droppedSocket, created);
                }
              } else if (event === "down") {
                if (this.initial) {
                  syncConnections([this.initial, socket], context.editor).commit();
                  _created = this.params.makeConnection(this.initial, socket, context);
                  _droppedSocket = _created ? null : socket;
                  this.drop(context, _droppedSocket, _created);
                }
              }
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function pick(_x4, _x5) {
        return _pick2.apply(this, arguments);
      }
      return pick;
    })()
  }, {
    key: "drop",
    value: function drop(context) {
      var socket = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      var created = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      if (this.initial) {
        void context.scope.emit({
          type: "connectiondrop",
          data: {
            initial: this.initial,
            socket,
            created
          }
        });
      }
      this.context.switchTo(new Idle(this.params));
    }
  }]);
})(State);
var Idle = /* @__PURE__ */ (function(_State3) {
  function Idle2(params) {
    var _this4;
    _classCallCheck(this, Idle2);
    _this4 = _callSuper$13(this, Idle2);
    _this4.params = params;
    return _this4;
  }
  _inherits(Idle2, _State3);
  return _createClass(Idle2, [{
    key: "pick",
    value: (function() {
      var _pick3 = _asyncToGenerator(/* @__PURE__ */ import_regenerator3.default.mark(function _callee4(_ref3, context) {
        var socket, event, _connection, state;
        return import_regenerator3.default.wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              socket = _ref3.socket, event = _ref3.event;
              if (!(event !== "down")) {
                _context4.next = 3;
                break;
              }
              return _context4.abrupt("return");
            case 3:
              if (!(socket.side === "input")) {
                _context4.next = 11;
                break;
              }
              _connection = context.editor.getConnections().find(function(item) {
                return item.target === socket.nodeId && item.targetInput === socket.key;
              });
              if (!_connection) {
                _context4.next = 11;
                break;
              }
              state = new PickedExisting(_connection, this.params, context);
              _context4.next = 9;
              return state.init(context);
            case 9:
              this.context.switchTo(state);
              return _context4.abrupt("return");
            case 11:
              _context4.next = 13;
              return context.scope.emit({
                type: "connectionpick",
                data: {
                  socket
                }
              });
            case 13:
              if (!_context4.sent) {
                _context4.next = 17;
                break;
              }
              this.context.switchTo(new Picked(socket, this.params));
              _context4.next = 18;
              break;
            case 17:
              this.drop(context);
            case 18:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function pick(_x6, _x7) {
        return _pick3.apply(this, arguments);
      }
      return pick;
    })()
  }, {
    key: "drop",
    value: function drop(context) {
      var socket = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      var created = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      if (this.initial) {
        void context.scope.emit({
          type: "connectiondrop",
          data: {
            initial: this.initial,
            socket,
            created
          }
        });
      }
      delete this.initial;
    }
  }]);
})(State);
var ClassicFlow = /* @__PURE__ */ (function() {
  function ClassicFlow2(params) {
    _classCallCheck(this, ClassicFlow2);
    var canMakeConnection$1 = (params === null || params === void 0 ? void 0 : params.canMakeConnection) || canMakeConnection;
    var makeConnection$1 = (params === null || params === void 0 ? void 0 : params.makeConnection) || makeConnection;
    this.switchTo(new Idle({
      canMakeConnection: canMakeConnection$1,
      makeConnection: makeConnection$1
    }));
  }
  return _createClass(ClassicFlow2, [{
    key: "pick",
    value: (function() {
      var _pick4 = _asyncToGenerator(/* @__PURE__ */ import_regenerator3.default.mark(function _callee5(params, context) {
        return import_regenerator3.default.wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.currentState.pick(params, context);
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function pick(_x8, _x9) {
        return _pick4.apply(this, arguments);
      }
      return pick;
    })()
  }, {
    key: "getPickedSocket",
    value: function getPickedSocket() {
      return this.currentState.initial;
    }
  }, {
    key: "switchTo",
    value: function switchTo(state) {
      state.setContext(this);
      this.currentState = state;
    }
  }, {
    key: "drop",
    value: function drop(context) {
      this.currentState.drop(context);
    }
  }]);
})();
function setup() {
  return function() {
    return new ClassicFlow();
  };
}
var classic2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  setup
});
var index2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  classic: classic2
});
function _createForOfIteratorHelper2(r6, e6) {
  var t3 = "undefined" != typeof Symbol && r6[Symbol.iterator] || r6["@@iterator"];
  if (!t3) {
    if (Array.isArray(r6) || (t3 = _unsupportedIterableToArray3(r6)) || e6 && r6 && "number" == typeof r6.length) {
      t3 && (r6 = t3);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n5() {
        return _n >= r6.length ? { done: true } : { done: false, value: r6[_n++] };
      }, e: function e7(r7) {
        throw r7;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o6, a3 = true, u3 = false;
  return { s: function s4() {
    t3 = t3.call(r6);
  }, n: function n5() {
    var r7 = t3.next();
    return a3 = r7.done, r7;
  }, e: function e7(r7) {
    u3 = true, o6 = r7;
  }, f: function f3() {
    try {
      a3 || null == t3["return"] || t3["return"]();
    } finally {
      if (u3) throw o6;
    }
  } };
}
function _unsupportedIterableToArray3(r6, a3) {
  if (r6) {
    if ("string" == typeof r6) return _arrayLikeToArray3(r6, a3);
    var t3 = {}.toString.call(r6).slice(8, -1);
    return "Object" === t3 && r6.constructor && (t3 = r6.constructor.name), "Map" === t3 || "Set" === t3 ? Array.from(r6) : "Arguments" === t3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t3) ? _arrayLikeToArray3(r6, a3) : void 0;
  }
}
function _arrayLikeToArray3(r6, a3) {
  (null == a3 || a3 > r6.length) && (a3 = r6.length);
  for (var e6 = 0, n5 = Array(a3); e6 < a3; e6++) n5[e6] = r6[e6];
  return n5;
}
function _callSuper3(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct3() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct3() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct3 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _superPropGet(t3, e6, o6, r6) {
  var p3 = _get(_getPrototypeOf(1 & r6 ? t3.prototype : t3), e6, o6);
  return 2 & r6 && "function" == typeof p3 ? function(t4) {
    return p3.apply(o6, t4);
  } : p3;
}
var ConnectionPlugin = /* @__PURE__ */ (function(_Scope) {
  function ConnectionPlugin2() {
    var _this;
    _classCallCheck(this, ConnectionPlugin2);
    _this = _callSuper3(this, ConnectionPlugin2, ["connection"]);
    _defineProperty(_this, "presets", []);
    _defineProperty(_this, "currentFlow", null);
    _defineProperty(_this, "preudoconnection", createPseudoconnection({
      isPseudo: true
    }));
    _defineProperty(_this, "socketsCache", /* @__PURE__ */ new Map());
    return _this;
  }
  _inherits(ConnectionPlugin2, _Scope);
  return _createClass(ConnectionPlugin2, [{
    key: "addPreset",
    value: function addPreset(preset) {
      this.presets.push(preset);
    }
  }, {
    key: "findPreset",
    value: function findPreset(data) {
      var _iterator = _createForOfIteratorHelper2(this.presets), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var preset = _step.value;
          var flow = preset(data);
          if (flow) return flow;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null;
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.currentFlow) return;
      var socket = this.currentFlow.getPickedSocket();
      if (socket) {
        this.preudoconnection.render(this.areaPlugin, this.areaPlugin.area.pointer, socket);
      }
    }
    /**
     * Drop pseudo-connection if exists
     * @emits connectiondrop
     */
  }, {
    key: "drop",
    value: function drop() {
      var flowContext = {
        editor: this.editor,
        scope: this,
        socketsCache: this.socketsCache
      };
      if (this.currentFlow) {
        this.currentFlow.drop(flowContext);
        this.preudoconnection.unmount(this.areaPlugin);
        this.currentFlow = null;
      }
    }
    // eslint-disable-next-line max-statements
  }, {
    key: "pick",
    value: (function() {
      var _pick = _asyncToGenerator(/* @__PURE__ */ import_regenerator3.default.mark(function _callee(event, type) {
        var flowContext, pointedElements, pickedSocket;
        return import_regenerator3.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              flowContext = {
                editor: this.editor,
                scope: this,
                socketsCache: this.socketsCache
              };
              pointedElements = elementsFromPoint(event.clientX, event.clientY);
              pickedSocket = findSocket(this.socketsCache, pointedElements);
              if (!pickedSocket) {
                _context.next = 13;
                break;
              }
              event.preventDefault();
              event.stopPropagation();
              this.currentFlow = this.currentFlow || this.findPreset(pickedSocket);
              if (!this.currentFlow) {
                _context.next = 11;
                break;
              }
              _context.next = 10;
              return this.currentFlow.pick({
                socket: pickedSocket,
                event: type
              }, flowContext);
            case 10:
              this.preudoconnection.mount(this.areaPlugin);
            case 11:
              _context.next = 14;
              break;
            case 13:
              if (this.currentFlow) {
                this.currentFlow.drop(flowContext);
              }
            case 14:
              if (this.currentFlow && !this.currentFlow.getPickedSocket()) {
                this.preudoconnection.unmount(this.areaPlugin);
                this.currentFlow = null;
              }
              this.update();
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function pick(_x, _x2) {
        return _pick.apply(this, arguments);
      }
      return pick;
    })()
  }, {
    key: "setParent",
    value: function setParent(scope) {
      var _this2 = this;
      _superPropGet(ConnectionPlugin2, "setParent", this, 3)([scope]);
      this.areaPlugin = this.parentScope(BaseAreaPlugin);
      this.editor = this.areaPlugin.parentScope(NodeEditor);
      var pointerdownSocket = function pointerdownSocket2(e6) {
        void _this2.pick(e6, "down");
      };
      this.addPipe(function(context) {
        if (!context || _typeof(context) !== "object" || !("type" in context)) return context;
        if (context.type === "pointermove") {
          _this2.update();
        } else if (context.type === "pointerup") {
          void _this2.pick(context.data.event, "up");
        } else if (context.type === "render") {
          if (context.data.type === "socket") {
            var element = context.data.element;
            element.addEventListener("pointerdown", pointerdownSocket);
            _this2.socketsCache.set(element, context.data);
          }
        } else if (context.type === "unmount") {
          var _element = context.data.element;
          _element.removeEventListener("pointerdown", pointerdownSocket);
          _this2.socketsCache["delete"](_element);
        }
        return context;
      });
    }
  }]);
})(Scope);

// node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(e6, t3) {
  return t3 || (t3 = e6.slice(0)), Object.freeze(Object.defineProperties(e6, {
    raw: {
      value: Object.freeze(t3)
    }
  }));
}

// node_modules/@lit/reactive-element/css-tag.js
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = /* @__PURE__ */ Symbol();
var o = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t3, e6, o6) {
    if (this._$cssResult$ = true, o6 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t3, this.t = e6;
  }
  get styleSheet() {
    let t3 = this.o;
    const s4 = this.t;
    if (e && void 0 === t3) {
      const e6 = void 0 !== s4 && 1 === s4.length;
      e6 && (t3 = o.get(s4)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && o.set(s4, t3));
    }
    return t3;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
var i = (t3, ...e6) => {
  const o6 = 1 === t3.length ? t3[0] : e6.reduce((e7, s4, o7) => e7 + ((t4) => {
    if (true === t4._$cssResult$) return t4.cssText;
    if ("number" == typeof t4) return t4;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s4) + t3[o7 + 1], t3[0]);
  return new n(o6, t3, s);
};
var S = (s4, o6) => {
  if (e) s4.adoptedStyleSheets = o6.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
  else for (const e6 of o6) {
    const o7 = document.createElement("style"), n5 = t.litNonce;
    void 0 !== n5 && o7.setAttribute("nonce", n5), o7.textContent = e6.cssText, s4.appendChild(o7);
  }
};
var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
  let e6 = "";
  for (const s4 of t4.cssRules) e6 += s4.cssText;
  return r(e6);
})(t3) : t3;

// node_modules/@lit/reactive-element/reactive-element.js
var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t3, s4) => t3;
var u = { toAttribute(t3, s4) {
  switch (s4) {
    case Boolean:
      t3 = t3 ? l : null;
      break;
    case Object:
    case Array:
      t3 = null == t3 ? t3 : JSON.stringify(t3);
  }
  return t3;
}, fromAttribute(t3, s4) {
  let i5 = t3;
  switch (s4) {
    case Boolean:
      i5 = null !== t3;
      break;
    case Number:
      i5 = null === t3 ? null : Number(t3);
      break;
    case Object:
    case Array:
      try {
        i5 = JSON.parse(t3);
      } catch (t4) {
        i5 = null;
      }
  }
  return i5;
} };
var f = (t3, s4) => !i2(t3, s4);
var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var y = class extends HTMLElement {
  static addInitializer(t3) {
    this._$Ei(), (this.l ??= []).push(t3);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t3, s4 = b) {
    if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t3, s4), !s4.noAccessor) {
      const i5 = /* @__PURE__ */ Symbol(), h3 = this.getPropertyDescriptor(t3, i5, s4);
      void 0 !== h3 && e2(this.prototype, t3, h3);
    }
  }
  static getPropertyDescriptor(t3, s4, i5) {
    const { get: e6, set: r6 } = h(this.prototype, t3) ?? { get() {
      return this[s4];
    }, set(t4) {
      this[s4] = t4;
    } };
    return { get: e6, set(s5) {
      const h3 = e6?.call(this);
      r6?.call(this, s5), this.requestUpdate(t3, h3, i5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t3) {
    return this.elementProperties.get(t3) ?? b;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t3 = n2(this);
    t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t4 = this.properties, s4 = [...r2(t4), ...o2(t4)];
      for (const i5 of s4) this.createProperty(i5, t4[i5]);
    }
    const t3 = this[Symbol.metadata];
    if (null !== t3) {
      const s4 = litPropertyMetadata.get(t3);
      if (void 0 !== s4) for (const [t4, i5] of s4) this.elementProperties.set(t4, i5);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t4, s4] of this.elementProperties) {
      const i5 = this._$Eu(t4, s4);
      void 0 !== i5 && this._$Eh.set(i5, t4);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s4) {
    const i5 = [];
    if (Array.isArray(s4)) {
      const e6 = new Set(s4.flat(1 / 0).reverse());
      for (const s5 of e6) i5.unshift(c(s5));
    } else void 0 !== s4 && i5.push(c(s4));
    return i5;
  }
  static _$Eu(t3, s4) {
    const i5 = s4.attribute;
    return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
  }
  addController(t3) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
  }
  removeController(t3) {
    this._$EO?.delete(t3);
  }
  _$E_() {
    const t3 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
    for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
    t3.size > 0 && (this._$Ep = t3);
  }
  createRenderRoot() {
    const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t3, this.constructor.elementStyles), t3;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
  }
  enableUpdating(t3) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t3) => t3.hostDisconnected?.());
  }
  attributeChangedCallback(t3, s4, i5) {
    this._$AK(t3, i5);
  }
  _$ET(t3, s4) {
    const i5 = this.constructor.elementProperties.get(t3), e6 = this.constructor._$Eu(t3, i5);
    if (void 0 !== e6 && true === i5.reflect) {
      const h3 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
      this._$Em = t3, null == h3 ? this.removeAttribute(e6) : this.setAttribute(e6, h3), this._$Em = null;
    }
  }
  _$AK(t3, s4) {
    const i5 = this.constructor, e6 = i5._$Eh.get(t3);
    if (void 0 !== e6 && this._$Em !== e6) {
      const t4 = i5.getPropertyOptions(e6), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
      this._$Em = e6;
      const r6 = h3.fromAttribute(s4, t4.type);
      this[e6] = r6 ?? this._$Ej?.get(e6) ?? r6, this._$Em = null;
    }
  }
  requestUpdate(t3, s4, i5, e6 = false, h3) {
    if (void 0 !== t3) {
      const r6 = this.constructor;
      if (false === e6 && (h3 = this[t3]), i5 ??= r6.getPropertyOptions(t3), !((i5.hasChanged ?? f)(h3, s4) || i5.useDefault && i5.reflect && h3 === this._$Ej?.get(t3) && !this.hasAttribute(r6._$Eu(t3, i5)))) return;
      this.C(t3, s4, i5);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t3, s4, { useDefault: i5, reflect: e6, wrapped: h3 }, r6) {
    i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r6 ?? s4 ?? this[t3]), true !== h3 || void 0 !== r6) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t3, s4)), true === e6 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t4) {
      Promise.reject(t4);
    }
    const t3 = this.scheduleUpdate();
    return null != t3 && await t3, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t5, s5] of this._$Ep) this[t5] = s5;
        this._$Ep = void 0;
      }
      const t4 = this.constructor.elementProperties;
      if (t4.size > 0) for (const [s5, i5] of t4) {
        const { wrapped: t5 } = i5, e6 = this[s5];
        true !== t5 || this._$AL.has(s5) || void 0 === e6 || this.C(s5, void 0, i5, e6);
      }
    }
    let t3 = false;
    const s4 = this._$AL;
    try {
      t3 = this.shouldUpdate(s4), t3 ? (this.willUpdate(s4), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s4)) : this._$EM();
    } catch (s5) {
      throw t3 = false, this._$EM(), s5;
    }
    t3 && this._$AE(s4);
  }
  willUpdate(t3) {
  }
  _$AE(t3) {
    this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t3) {
    return true;
  }
  update(t3) {
    this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
  }
  updated(t3) {
  }
  firstUpdated(t3) {
  }
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");

// node_modules/lit-html/lit-html.js
var t2 = globalThis;
var i3 = (t3) => t3;
var s2 = t2.trustedTypes;
var e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
var h2 = "$lit$";
var o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var n3 = "?" + o3;
var r3 = `<${n3}>`;
var l2 = document;
var c3 = () => l2.createComment("");
var a2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
var u2 = Array.isArray;
var d2 = (t3) => u2(t3) || "function" == typeof t3?.[Symbol.iterator];
var f2 = "[ 	\n\f\r]";
var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y2 = /^(?:script|style|textarea|title)$/i;
var x = (t3) => (i5, ...s4) => ({ _$litType$: t3, strings: i5, values: s4 });
var b2 = x(1);
var w = x(2);
var T = x(3);
var E = /* @__PURE__ */ Symbol.for("lit-noChange");
var A = /* @__PURE__ */ Symbol.for("lit-nothing");
var C = /* @__PURE__ */ new WeakMap();
var P = l2.createTreeWalker(l2, 129);
function V(t3, i5) {
  if (!u2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i5) : i5;
}
var N = (t3, i5) => {
  const s4 = t3.length - 1, e6 = [];
  let n5, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = v;
  for (let i6 = 0; i6 < s4; i6++) {
    const s5 = t3[i6];
    let a3, u3, d3 = -1, f3 = 0;
    for (; f3 < s5.length && (c4.lastIndex = f3, u3 = c4.exec(s5), null !== u3); ) f3 = c4.lastIndex, c4 === v ? "!--" === u3[1] ? c4 = _ : void 0 !== u3[1] ? c4 = m : void 0 !== u3[2] ? (y2.test(u3[2]) && (n5 = RegExp("</" + u3[2], "g")), c4 = p2) : void 0 !== u3[3] && (c4 = p2) : c4 === p2 ? ">" === u3[0] ? (c4 = n5 ?? v, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? p2 : '"' === u3[3] ? $ : g) : c4 === $ || c4 === g ? c4 = p2 : c4 === _ || c4 === m ? c4 = v : (c4 = p2, n5 = void 0);
    const x2 = c4 === p2 && t3[i6 + 1].startsWith("/>") ? " " : "";
    l3 += c4 === v ? s5 + r3 : d3 >= 0 ? (e6.push(a3), s5.slice(0, d3) + h2 + s5.slice(d3) + o3 + x2) : s5 + o3 + (-2 === d3 ? i6 : x2);
  }
  return [V(t3, l3 + (t3[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e6];
};
var S2 = class _S {
  constructor({ strings: t3, _$litType$: i5 }, e6) {
    let r6;
    this.parts = [];
    let l3 = 0, a3 = 0;
    const u3 = t3.length - 1, d3 = this.parts, [f3, v2] = N(t3, i5);
    if (this.el = _S.createElement(f3, e6), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
      const t4 = this.el.content.firstChild;
      t4.replaceWith(...t4.childNodes);
    }
    for (; null !== (r6 = P.nextNode()) && d3.length < u3; ) {
      if (1 === r6.nodeType) {
        if (r6.hasAttributes()) for (const t4 of r6.getAttributeNames()) if (t4.endsWith(h2)) {
          const i6 = v2[a3++], s4 = r6.getAttribute(t4).split(o3), e7 = /([.?@])?(.*)/.exec(i6);
          d3.push({ type: 1, index: l3, name: e7[2], strings: s4, ctor: "." === e7[1] ? I : "?" === e7[1] ? L : "@" === e7[1] ? z : H }), r6.removeAttribute(t4);
        } else t4.startsWith(o3) && (d3.push({ type: 6, index: l3 }), r6.removeAttribute(t4));
        if (y2.test(r6.tagName)) {
          const t4 = r6.textContent.split(o3), i6 = t4.length - 1;
          if (i6 > 0) {
            r6.textContent = s2 ? s2.emptyScript : "";
            for (let s4 = 0; s4 < i6; s4++) r6.append(t4[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l3 });
            r6.append(t4[i6], c3());
          }
        }
      } else if (8 === r6.nodeType) if (r6.data === n3) d3.push({ type: 2, index: l3 });
      else {
        let t4 = -1;
        for (; -1 !== (t4 = r6.data.indexOf(o3, t4 + 1)); ) d3.push({ type: 7, index: l3 }), t4 += o3.length - 1;
      }
      l3++;
    }
  }
  static createElement(t3, i5) {
    const s4 = l2.createElement("template");
    return s4.innerHTML = t3, s4;
  }
};
function M(t3, i5, s4 = t3, e6) {
  if (i5 === E) return i5;
  let h3 = void 0 !== e6 ? s4._$Co?.[e6] : s4._$Cl;
  const o6 = a2(i5) ? void 0 : i5._$litDirective$;
  return h3?.constructor !== o6 && (h3?._$AO?.(false), void 0 === o6 ? h3 = void 0 : (h3 = new o6(t3), h3._$AT(t3, s4, e6)), void 0 !== e6 ? (s4._$Co ??= [])[e6] = h3 : s4._$Cl = h3), void 0 !== h3 && (i5 = M(t3, h3._$AS(t3, i5.values), h3, e6)), i5;
}
var R = class {
  constructor(t3, i5) {
    this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t3) {
    const { el: { content: i5 }, parts: s4 } = this._$AD, e6 = (t3?.creationScope ?? l2).importNode(i5, true);
    P.currentNode = e6;
    let h3 = P.nextNode(), o6 = 0, n5 = 0, r6 = s4[0];
    for (; void 0 !== r6; ) {
      if (o6 === r6.index) {
        let i6;
        2 === r6.type ? i6 = new k(h3, h3.nextSibling, this, t3) : 1 === r6.type ? i6 = new r6.ctor(h3, r6.name, r6.strings, this, t3) : 6 === r6.type && (i6 = new Z(h3, this, t3)), this._$AV.push(i6), r6 = s4[++n5];
      }
      o6 !== r6?.index && (h3 = P.nextNode(), o6++);
    }
    return P.currentNode = l2, e6;
  }
  p(t3) {
    let i5 = 0;
    for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t3, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t3[i5])), i5++;
  }
};
var k = class _k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t3, i5, s4, e6) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s4, this.options = e6, this._$Cv = e6?.isConnected ?? true;
  }
  get parentNode() {
    let t3 = this._$AA.parentNode;
    const i5 = this._$AM;
    return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t3, i5 = this) {
    t3 = M(this, t3, i5), a2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== E && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : d2(t3) ? this.k(t3) : this._(t3);
  }
  O(t3) {
    return this._$AA.parentNode.insertBefore(t3, this._$AB);
  }
  T(t3) {
    this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
  }
  _(t3) {
    this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(l2.createTextNode(t3)), this._$AH = t3;
  }
  $(t3) {
    const { values: i5, _$litType$: s4 } = t3, e6 = "number" == typeof s4 ? this._$AC(t3) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
    if (this._$AH?._$AD === e6) this._$AH.p(i5);
    else {
      const t4 = new R(e6, this), s5 = t4.u(this.options);
      t4.p(i5), this.T(s5), this._$AH = t4;
    }
  }
  _$AC(t3) {
    let i5 = C.get(t3.strings);
    return void 0 === i5 && C.set(t3.strings, i5 = new S2(t3)), i5;
  }
  k(t3) {
    u2(this._$AH) || (this._$AH = [], this._$AR());
    const i5 = this._$AH;
    let s4, e6 = 0;
    for (const h3 of t3) e6 === i5.length ? i5.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i5[e6], s4._$AI(h3), e6++;
    e6 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e6), i5.length = e6);
  }
  _$AR(t3 = this._$AA.nextSibling, s4) {
    for (this._$AP?.(false, true, s4); t3 !== this._$AB; ) {
      const s5 = i3(t3).nextSibling;
      i3(t3).remove(), t3 = s5;
    }
  }
  setConnected(t3) {
    void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
  }
};
var H = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t3, i5, s4, e6, h3) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e6, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
  }
  _$AI(t3, i5 = this, s4, e6) {
    const h3 = this.strings;
    let o6 = false;
    if (void 0 === h3) t3 = M(this, t3, i5, 0), o6 = !a2(t3) || t3 !== this._$AH && t3 !== E, o6 && (this._$AH = t3);
    else {
      const e7 = t3;
      let n5, r6;
      for (t3 = h3[0], n5 = 0; n5 < h3.length - 1; n5++) r6 = M(this, e7[s4 + n5], i5, n5), r6 === E && (r6 = this._$AH[n5]), o6 ||= !a2(r6) || r6 !== this._$AH[n5], r6 === A ? t3 = A : t3 !== A && (t3 += (r6 ?? "") + h3[n5 + 1]), this._$AH[n5] = r6;
    }
    o6 && !e6 && this.j(t3);
  }
  j(t3) {
    t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
  }
};
var I = class extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t3) {
    this.element[this.name] = t3 === A ? void 0 : t3;
  }
};
var L = class extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t3) {
    this.element.toggleAttribute(this.name, !!t3 && t3 !== A);
  }
};
var z = class extends H {
  constructor(t3, i5, s4, e6, h3) {
    super(t3, i5, s4, e6, h3), this.type = 5;
  }
  _$AI(t3, i5 = this) {
    if ((t3 = M(this, t3, i5, 0) ?? A) === E) return;
    const s4 = this._$AH, e6 = t3 === A && s4 !== A || t3.capture !== s4.capture || t3.once !== s4.once || t3.passive !== s4.passive, h3 = t3 !== A && (s4 === A || e6);
    e6 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
  }
  handleEvent(t3) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
  }
};
var Z = class {
  constructor(t3, i5, s4) {
    this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3) {
    M(this, t3);
  }
};
var B = t2.litHtmlPolyfillSupport;
B?.(S2, k), (t2.litHtmlVersions ??= []).push("3.3.3");
var D = (t3, i5, s4) => {
  const e6 = s4?.renderBefore ?? i5;
  let h3 = e6._$litPart$;
  if (void 0 === h3) {
    const t4 = s4?.renderBefore ?? null;
    e6._$litPart$ = h3 = new k(i5.insertBefore(c3(), t4), t4, void 0, s4 ?? {});
  }
  return h3._$AI(t3), h3;
};

// node_modules/lit-element/lit-element.js
var s3 = globalThis;
var i4 = class extends y {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t3 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t3.firstChild, t3;
  }
  update(t3) {
    const r6 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(r6, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return E;
  }
};
i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
var o4 = s3.litElementPolyfillSupport;
o4?.({ LitElement: i4 });
(s3.litElementVersions ??= []).push("4.2.2");

// node_modules/@lit/reactive-element/decorators/property.js
var o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
var r4 = (t3 = o5, e6, r6) => {
  const { kind: n5, metadata: i5 } = r6;
  let s4 = globalThis.litPropertyMetadata.get(i5);
  if (void 0 === s4 && globalThis.litPropertyMetadata.set(i5, s4 = /* @__PURE__ */ new Map()), "setter" === n5 && ((t3 = Object.create(t3)).wrapped = true), s4.set(r6.name, t3), "accessor" === n5) {
    const { name: o6 } = r6;
    return { set(r7) {
      const n6 = e6.get.call(this);
      e6.set.call(this, r7), this.requestUpdate(o6, n6, t3, true, r7);
    }, init(e7) {
      return void 0 !== e7 && this.C(o6, void 0, t3, e7), e7;
    } };
  }
  if ("setter" === n5) {
    const { name: o6 } = r6;
    return function(r7) {
      const n6 = this[o6];
      e6.call(this, r7), this.requestUpdate(o6, n6, t3, true, r7);
    };
  }
  throw Error("Unsupported decorator location: " + n5);
};
function n4(t3) {
  return (e6, o6) => "object" == typeof o6 ? r4(t3, e6, o6) : ((t4, e7, o7) => {
    const r6 = e7.hasOwnProperty(o7);
    return e7.constructor.createProperty(o7, t4), r6 ? Object.getOwnPropertyDescriptor(e7, o7) : void 0;
  })(t3, e6, o6);
}

// node_modules/@lit/reactive-element/decorators/state.js
function r5(r6) {
  return n4({ ...r6, state: true, attribute: false });
}

// node_modules/@lit/reactive-element/decorators/base.js
var e4 = (e6, t3, c4) => (c4.configurable = true, c4.enumerable = true, Reflect.decorate && "object" != typeof t3 && Object.defineProperty(e6, t3, c4), c4);

// node_modules/@lit/reactive-element/decorators/query.js
function e5(e6, r6) {
  return (n5, s4, i5) => {
    const o6 = (t3) => t3.renderRoot?.querySelector(e6) ?? null;
    if (r6) {
      const { get: e7, set: r7 } = "object" == typeof s4 ? n5 : i5 ?? /* @__PURE__ */ (() => {
        const t3 = /* @__PURE__ */ Symbol();
        return { get() {
          return this[t3];
        }, set(e8) {
          this[t3] = e8;
        } };
      })();
      return e4(n5, s4, { get() {
        let t3 = e7.call(this);
        return void 0 === t3 && (t3 = o6(this), (null !== t3 || this.hasUpdated) && r7.call(this, t3)), t3;
      } });
    }
    return e4(n5, s4, { get() {
      return o6(this);
    } });
  };
}

// node_modules/@retejs/lit-plugin/lit-plugin.esm.js
var import_regenerator5 = __toESM(require_regenerator2());

// node_modules/rete-render-utils/rete-render-utils.esm.js
var import_regenerator4 = __toESM(require_regenerator2());
function classicConnectionPath(points, curvature) {
  var _points = _slicedToArray(points, 2), _points$ = _points[0], x1 = _points$.x, y1 = _points$.y, _points$2 = _points[1], x2 = _points$2.x, y22 = _points$2.y;
  var vertical = Math.abs(y1 - y22);
  var hx1 = x1 + Math.max(vertical / 2, Math.abs(x2 - x1)) * curvature;
  var hx2 = x2 - Math.max(vertical / 2, Math.abs(x2 - x1)) * curvature;
  return "M ".concat(x1, " ").concat(y1, " C ").concat(hx1, " ").concat(y1, " ").concat(hx2, " ").concat(y22, " ").concat(x2, " ").concat(y22);
}
function loopConnectionPath(points, curvature, size) {
  var _points2 = _slicedToArray(points, 2), _points2$ = _points2[0], x1 = _points2$.x, y1 = _points2$.y, _points2$2 = _points2[1], x2 = _points2$2.x, y22 = _points2$2.y;
  var k2 = y22 > y1 ? 1 : -1;
  var scale = size + Math.abs(x1 - x2) / (size / 2);
  var middleX = (x1 + x2) / 2;
  var middleY = y1 - k2 * scale;
  var vertical = (y22 - y1) * curvature;
  return "\n        M ".concat(x1, " ").concat(y1, "\n        C ").concat(x1 + scale, " ").concat(y1, "\n        ").concat(x1 + scale, " ").concat(middleY - vertical, "\n        ").concat(middleX, " ").concat(middleY, "\n        C ").concat(x2 - scale, " ").concat(middleY + vertical, "\n        ").concat(x2 - scale, " ").concat(y22, "\n        ").concat(x2, " ").concat(y22, "\n    ");
}
function getElementCenter(_x, _x2) {
  return _getElementCenter.apply(this, arguments);
}
function _getElementCenter() {
  _getElementCenter = _asyncToGenerator(/* @__PURE__ */ import_regenerator4.default.mark(function _callee(child, parent) {
    var x2, y3, currentElement, width, height;
    return import_regenerator4.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (child.offsetParent) {
            _context.next = 5;
            break;
          }
          _context.next = 3;
          return new Promise(function(res) {
            return setTimeout(res, 0);
          });
        case 3:
          _context.next = 0;
          break;
        case 5:
          x2 = child.offsetLeft;
          y3 = child.offsetTop;
          currentElement = child.offsetParent;
          if (currentElement) {
            _context.next = 10;
            break;
          }
          throw new Error("child has null offsetParent");
        case 10:
          while (currentElement !== null && currentElement !== parent) {
            x2 += currentElement.offsetLeft + currentElement.clientLeft;
            y3 += currentElement.offsetTop + currentElement.clientTop;
            currentElement = currentElement.offsetParent;
          }
          width = child.offsetWidth;
          height = child.offsetHeight;
          return _context.abrupt("return", {
            x: x2 + width / 2,
            y: y3 + height / 2
          });
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getElementCenter.apply(this, arguments);
}
var EventEmitter = /* @__PURE__ */ (function() {
  function EventEmitter2() {
    _classCallCheck(this, EventEmitter2);
    _defineProperty(this, "listeners", /* @__PURE__ */ new Set());
  }
  return _createClass(EventEmitter2, [{
    key: "emit",
    value: function emit(data) {
      this.listeners.forEach(function(listener) {
        listener(data);
      });
    }
  }, {
    key: "listen",
    value: function listen(handler) {
      var _this = this;
      this.listeners.add(handler);
      return function() {
        _this.listeners["delete"](handler);
      };
    }
  }]);
})();
var SocketsPositionsStorage = /* @__PURE__ */ (function() {
  function SocketsPositionsStorage2() {
    _classCallCheck(this, SocketsPositionsStorage2);
    _defineProperty(this, "elements", /* @__PURE__ */ new Map());
  }
  return _createClass(SocketsPositionsStorage2, [{
    key: "getPosition",
    value: function getPosition(data) {
      var _found$pop$position, _found$pop;
      var list = Array.from(this.elements.values()).flat();
      var found = list.filter(function(item) {
        return item.side === data.side && item.nodeId === data.nodeId && item.key === data.key;
      });
      if (found.length > 1) console.warn(["Found more than one element for socket with same key and side.", "Probably it was not unmounted correctly"].join(" "), data);
      return (_found$pop$position = (_found$pop = found.pop()) === null || _found$pop === void 0 ? void 0 : _found$pop.position) !== null && _found$pop$position !== void 0 ? _found$pop$position : null;
    }
  }, {
    key: "add",
    value: function add(data) {
      var existing = this.elements.get(data.element);
      this.elements.set(data.element, existing ? [].concat(_toConsumableArray(existing.filter(function(n5) {
        return !(n5.nodeId === data.nodeId && n5.key === data.key && n5.side === data.side);
      })), [data]) : [data]);
    }
  }, {
    key: "remove",
    value: function remove(element) {
      this.elements["delete"](element);
    }
  }, {
    key: "snapshot",
    value: function snapshot() {
      return Array.from(this.elements.values()).flat();
    }
  }]);
})();
var BaseSocketPosition = /* @__PURE__ */ (function() {
  function BaseSocketPosition2() {
    _classCallCheck(this, BaseSocketPosition2);
    _defineProperty(this, "sockets", new SocketsPositionsStorage());
    _defineProperty(this, "emitter", new EventEmitter());
    _defineProperty(this, "area", null);
  }
  return _createClass(BaseSocketPosition2, [{
    key: "attach",
    value: (
      /**
       * Attach the watcher to the area's child scope.
       * @param scope Scope of the watcher that should be a child of `BaseAreaPlugin`
       */
      function attach(scope) {
        var _this = this;
        if (this.area) return;
        if (!scope.hasParent()) return;
        this.area = scope.parentScope(BaseAreaPlugin);
        this.area.addPipe(/* @__PURE__ */ (function() {
          var _ref2 = _asyncToGenerator(/* @__PURE__ */ import_regenerator4.default.mark(function _callee2(context) {
            var _context$data, _nodeId, _key, _side, _element, position, _nodeId2, _context$data$payload, source, target, _nodeId3;
            return import_regenerator4.default.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(context.type === "rendered" && context.data.type === "socket")) {
                    _context2.next = 8;
                    break;
                  }
                  _context$data = context.data, _nodeId = _context$data.nodeId, _key = _context$data.key, _side = _context$data.side, _element = _context$data.element;
                  _context2.next = 4;
                  return _this.calculatePosition(_nodeId, _side, _key, _element);
                case 4:
                  position = _context2.sent;
                  if (position) {
                    _this.sockets.add({
                      nodeId: _nodeId,
                      key: _key,
                      side: _side,
                      element: _element,
                      position
                    });
                    _this.emitter.emit({
                      nodeId: _nodeId,
                      key: _key,
                      side: _side
                    });
                  }
                  _context2.next = 24;
                  break;
                case 8:
                  if (!(context.type === "unmount")) {
                    _context2.next = 12;
                    break;
                  }
                  _this.sockets.remove(context.data.element);
                  _context2.next = 24;
                  break;
                case 12:
                  if (!(context.type === "nodetranslated")) {
                    _context2.next = 16;
                    break;
                  }
                  _this.emitter.emit({
                    nodeId: context.data.id
                  });
                  _context2.next = 24;
                  break;
                case 16:
                  if (!(context.type === "noderesized")) {
                    _context2.next = 23;
                    break;
                  }
                  _nodeId2 = context.data.id;
                  _context2.next = 20;
                  return Promise.all(_this.sockets.snapshot().filter(function(item) {
                    return item.nodeId === context.data.id && item.side === "output";
                  }).map(/* @__PURE__ */ (function() {
                    var _ref22 = _asyncToGenerator(/* @__PURE__ */ import_regenerator4.default.mark(function _callee(item) {
                      var side, key, element, position2;
                      return import_regenerator4.default.wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            side = item.side, key = item.key, element = item.element;
                            _context.next = 3;
                            return _this.calculatePosition(_nodeId2, side, key, element);
                          case 3:
                            position2 = _context.sent;
                            if (position2) {
                              item.position = position2;
                            }
                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    }));
                    return function(_x2) {
                      return _ref22.apply(this, arguments);
                    };
                  })()));
                case 20:
                  _this.emitter.emit({
                    nodeId: _nodeId2
                  });
                  _context2.next = 24;
                  break;
                case 23:
                  if (context.type === "render" && context.data.type === "connection") {
                    _context$data$payload = context.data.payload, source = _context$data$payload.source, target = _context$data$payload.target;
                    _nodeId3 = source || target;
                    _this.emitter.emit({
                      nodeId: _nodeId3
                    });
                  }
                case 24:
                  return _context2.abrupt("return", context);
                case 25:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x) {
            return _ref2.apply(this, arguments);
          };
        })());
      }
    )
    /**
     * Listen to socket position changes. Usually used by rendering plugins to update the start/end of the connection.
     * @internal
     * @param nodeId Node ID
     * @param side Side of the socket, 'input' or 'output'
     * @param key Socket key
     * @param change Callback function that is called when the socket position changes
     */
  }, {
    key: "listen",
    value: function listen(nodeId, side, key, change) {
      var _this2 = this;
      var unlisten = this.emitter.listen(function(data) {
        if (data.nodeId !== nodeId) return;
        if ((!data.key || data.side === side) && (!data.side || data.key === key)) {
          var _this2$area;
          var position = _this2.sockets.getPosition({
            side,
            nodeId,
            key
          });
          if (!position) return;
          var x2 = position.x, y3 = position.y;
          var nodeView = (_this2$area = _this2.area) === null || _this2$area === void 0 ? void 0 : _this2$area.nodeViews.get(nodeId);
          if (nodeView) change({
            x: x2 + nodeView.position.x,
            y: y3 + nodeView.position.y
          });
        }
      });
      this.sockets.snapshot().forEach(function(data) {
        if (data.nodeId === nodeId) _this2.emitter.emit(data);
      });
      return unlisten;
    }
  }]);
})();
function _callSuper4(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct4() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct4() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct4 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
var DOMSocketPosition = /* @__PURE__ */ (function(_BaseSocketPosition) {
  function DOMSocketPosition2(props) {
    var _this;
    _classCallCheck(this, DOMSocketPosition2);
    _this = _callSuper4(this, DOMSocketPosition2);
    _this.props = props;
    return _this;
  }
  _inherits(DOMSocketPosition2, _BaseSocketPosition);
  return _createClass(DOMSocketPosition2, [{
    key: "calculatePosition",
    value: (function() {
      var _calculatePosition = _asyncToGenerator(/* @__PURE__ */ import_regenerator4.default.mark(function _callee(nodeId, side, key, element) {
        var _this$area, _this$props;
        var view, position;
        return import_regenerator4.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              view = (_this$area = this.area) === null || _this$area === void 0 ? void 0 : _this$area.nodeViews.get(nodeId);
              if (view !== null && view !== void 0 && view.element) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", null);
            case 3:
              _context.next = 5;
              return getElementCenter(element, view.element);
            case 5:
              position = _context.sent;
              if (!((_this$props = this.props) !== null && _this$props !== void 0 && _this$props.offset)) {
                _context.next = 8;
                break;
              }
              return _context.abrupt("return", this.props.offset(position, nodeId, side, key));
            case 8:
              return _context.abrupt("return", {
                x: position.x + 12 * (side === "input" ? -1 : 1),
                y: position.y
              });
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function calculatePosition(_x, _x2, _x3, _x4) {
        return _calculatePosition.apply(this, arguments);
      }
      return calculatePosition;
    })()
  }]);
})(BaseSocketPosition);
function getDOMSocketPosition(props) {
  return new DOMSocketPosition(props);
}

// node_modules/@retejs/lit-plugin/lit-plugin.esm.js
var _templateObject$h;
function getRenderer() {
  var instances = /* @__PURE__ */ new Map();
  return {
    get: function get(element) {
      return instances.get(element);
    },
    mount: function mount(element, slot, onRendered) {
      D(b2(_templateObject$h || (_templateObject$h = _taggedTemplateLiteral(["\n        <rete-root\n          fragment\n          .rendered=", "\n        >\n          ", "\n        </rete-root>\n      "])), onRendered, slot), element);
      var app = element.children[0].children[0];
      if (!app) throw new Error("no instance found");
      instances.set(element, app);
    },
    update: function update(app, payload) {
      Object.keys(payload).forEach(function(key) {
        app[key] = payload[key];
      });
      app.requestUpdate();
    },
    unmount: function unmount(element) {
      var app = instances.get(element);
      if (app) {
        D(A, element);
        instances["delete"](element);
      }
    }
  };
}
var _RootElement;
var _initProto$e;
var _renderedDecs;
var _init_rendered;
var _ref$e;
function _callSuper$h(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$h() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$h() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$h = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _superPropGet$6(t3, e6, o6, r6) {
  var p3 = _get(_getPrototypeOf(1 & r6 ? t3.prototype : t3), e6, o6);
  return 2 & r6 && "function" == typeof p3 ? function(t4) {
    return p3.apply(o6, t4);
  } : p3;
}
function _classPrivateFieldInitSpec$e(e6, t3, a3) {
  _checkPrivateRedeclaration$e(e6, t3), t3.set(e6, a3);
}
function _checkPrivateRedeclaration$e(e6, t3) {
  if (t3.has(e6)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet$e(s4, a3, r6) {
  return s4.set(_assertClassBrand$e(s4, a3), r6), r6;
}
function _classPrivateFieldGet$e(s4, a3) {
  return s4.get(_assertClassBrand$e(s4, a3));
}
function _assertClassBrand$e(e6, t3, n5) {
  if ("function" == typeof e6 ? e6 === t3 : e6.has(t3)) return arguments.length < 3 ? t3 : n5;
  throw new TypeError("Private element is not present on this object");
}
function _applyDecs$f(e6, t3, r6, n5, o6, a3) {
  function i5(e7, t4, r7) {
    return function(n6, o7) {
      return r7 && r7(n6), e7[t4].call(n6, o7);
    };
  }
  function c4(e7, t4) {
    for (var r7 = 0; r7 < e7.length; r7++) e7[r7].call(t4);
    return t4;
  }
  function s4(e7, t4, r7, n6) {
    if ("function" != typeof e7 && (n6 || void 0 !== e7)) throw new TypeError(t4 + " must " + (r7 || "be") + " a function" + (n6 ? "" : " or undefined"));
    return e7;
  }
  function applyDec(e7, t4, r7, n6, o7, a4, c5, u4, l4, f4, p4, d3, h3) {
    function m2(e8) {
      if (!h3(e8)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y3, v2 = t4[0], g2 = t4[3], b3 = !u4;
    if (!b3) {
      r7 || Array.isArray(v2) || (v2 = [v2]);
      var w2 = {}, S3 = [], A2 = 3 === o7 ? "get" : 4 === o7 || d3 ? "set" : "value";
      f4 ? (p4 || d3 ? w2 = { get: _setFunctionName$e(function() {
        return g2(this);
      }, n6, "get"), set: function set(e8) {
        t4[4](this, e8);
      } } : w2[A2] = g2, p4 || _setFunctionName$e(w2[A2], n6, 2 === o7 ? "" : A2)) : p4 || (w2 = Object.getOwnPropertyDescriptor(e7, n6));
    }
    for (var P2 = e7, j = v2.length - 1; j >= 0; j -= r7 ? 2 : 1) {
      var D2 = v2[j], E2 = r7 ? v2[j - 1] : void 0, I2 = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o7], name: n6, metadata: a4, addInitializer: function(e8, t5) {
        if (e8.v) throw Error("attempted to call addInitializer after decoration was finished");
        s4(t5, "An initializer", "be", true), c5.push(t5);
      }.bind(null, I2) };
      try {
        if (b3) (y3 = s4(D2.call(E2, P2, O), "class decorators", "return")) && (P2 = y3);
        else {
          var k2, F;
          O["static"] = l4, O["private"] = f4, f4 ? 2 === o7 ? k2 = function k3(e8) {
            return m2(e8), w2.value;
          } : (o7 < 4 && (k2 = i5(w2, "get", m2)), 3 !== o7 && (F = i5(w2, "set", m2))) : (k2 = function k3(e8) {
            return e8[n6];
          }, (o7 < 2 || 4 === o7) && (F = function F2(e8, t5) {
            e8[n6] = t5;
          }));
          var N2 = O.access = { has: f4 ? h3.bind() : function(e8) {
            return n6 in e8;
          } };
          if (k2 && (N2.get = k2), F && (N2.set = F), P2 = D2.call(E2, d3 ? { get: w2.get, set: w2.set } : w2[A2], O), d3) {
            if ("object" == _typeof(P2) && P2) (y3 = s4(P2.get, "accessor.get")) && (w2.get = y3), (y3 = s4(P2.set, "accessor.set")) && (w2.set = y3), (y3 = s4(P2.init, "accessor.init")) && S3.push(y3);
            else if (void 0 !== P2) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s4(P2, (p4 ? "field" : "method") + " decorators", "return") && (p4 ? S3.push(P2) : w2[A2] = P2);
        }
      } finally {
        I2.v = true;
      }
    }
    return (p4 || d3) && u4.push(function(e8, t5) {
      for (var r8 = S3.length - 1; r8 >= 0; r8--) t5 = S3[r8].call(e8, t5);
      return t5;
    }), p4 || b3 || (f4 ? d3 ? u4.push(i5(w2, "get"), i5(w2, "set")) : u4.push(2 === o7 ? w2[A2] : i5.call.bind(w2[A2])) : Object.defineProperty(e7, n6, w2)), P2;
  }
  function u3(e7, t4) {
    return Object.defineProperty(e7, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: true, enumerable: true, value: t4 });
  }
  if (arguments.length >= 6) var l3 = a3[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  var f3 = Object.create(null == l3 ? null : l3), p3 = (function(e7, t4, r7, n6) {
    var o7, a4, i6 = [], s5 = function s6(t5) {
      return _checkInRHS$e(t5) === e7;
    }, u4 = /* @__PURE__ */ new Map();
    function l4(e8) {
      e8 && i6.push(c4.bind(null, e8));
    }
    for (var f4 = 0; f4 < t4.length; f4++) {
      var p4 = t4[f4];
      if (Array.isArray(p4)) {
        var d3 = p4[1], h3 = p4[2], m2 = p4.length > 3, y3 = 16 & d3, v2 = !!(8 & d3), g2 = 0 == (d3 &= 7), b3 = h3 + "/" + v2;
        if (!g2 && !m2) {
          var w2 = u4.get(b3);
          if (true === w2 || 3 === w2 && 4 !== d3 || 4 === w2 && 3 !== d3) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h3);
          u4.set(b3, !(d3 > 2) || d3);
        }
        applyDec(v2 ? e7 : e7.prototype, p4, y3, m2 ? "#" + h3 : _toPropertyKey$e(h3), d3, n6, v2 ? a4 = a4 || [] : o7 = o7 || [], i6, v2, m2, g2, 1 === d3, v2 && m2 ? s5 : r7);
      }
    }
    return l4(o7), l4(a4), i6;
  })(e6, t3, o6, f3);
  return r6.length || u3(e6, f3), { e: p3, get c() {
    var t4 = [];
    return r6.length && [u3(applyDec(e6, [r6], n5, e6.name, 5, f3, t4), f3), c4.bind(null, t4, e6)];
  } };
}
function _toPropertyKey$e(t3) {
  var i5 = _toPrimitive$e(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive$e(t3, r6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var e6 = t3[Symbol.toPrimitive];
  if (void 0 !== e6) {
    var i5 = e6.call(t3, r6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r6 ? String : Number)(t3);
}
function _setFunctionName$e(e6, t3, n5) {
  "symbol" == _typeof(t3) && (t3 = (t3 = t3.description) ? "[" + t3 + "]" : "");
  try {
    Object.defineProperty(e6, "name", { configurable: true, value: n5 ? n5 + " " + t3 : t3 });
  } catch (e7) {
  }
  return e6;
}
function _checkInRHS$e(e6) {
  if (Object(e6) !== e6) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e6 ? _typeof(e6) : "null"));
  return e6;
}
var _A$e = /* @__PURE__ */ new WeakMap();
_ref$e = (_renderedDecs = n4({
  type: Function
}), "rendered");
var RootElement = /* @__PURE__ */ (function(_LitElement) {
  function RootElement2() {
    var _this;
    _classCallCheck(this, RootElement2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$h(this, RootElement2, [].concat(args));
    _classPrivateFieldInitSpec$e(_this, _A$e, (_initProto$e(_this), _init_rendered(_this, null)));
    return _this;
  }
  _inherits(RootElement2, _LitElement);
  return _createClass(RootElement2, [{
    key: _ref$e,
    get: function get() {
      return _classPrivateFieldGet$e(_A$e, this);
    }
  }, {
    key: "rendered",
    set: function set(v2) {
      _classPrivateFieldSet$e(_A$e, this, v2);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this$rendered;
      _superPropGet$6(RootElement2, "connectedCallback", this, 3)([]);
      (_this$rendered = this.rendered) === null || _this$rendered === void 0 ? void 0 : _this$rendered.call(this);
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this;
    }
  }]);
})(i4);
_RootElement = RootElement;
var _applyDecs$e$e = _applyDecs$f(_RootElement, [[_renderedDecs, 1, "rendered"]], [], 0, void 0, i4).e;
var _applyDecs$e2$2 = _slicedToArray(_applyDecs$e$e, 2);
_init_rendered = _applyDecs$e2$2[0];
_initProto$e = _applyDecs$e2$2[1];
function _callSuper$g(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$g() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$g() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$g = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _superPropGet$5(t3, e6, o6, r6) {
  var p3 = _get(_getPrototypeOf(1 & r6 ? t3.prototype : t3), e6, o6);
  return 2 & r6 && "function" == typeof p3 ? function(t4) {
    return p3.apply(o6, t4);
  } : p3;
}
var MovableElement = /* @__PURE__ */ (function(_LitElement) {
  function MovableElement2() {
    var _this;
    _classCallCheck(this, MovableElement2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$g(this, MovableElement2, [].concat(args));
    _defineProperty(_this, "beingMoved", false);
    return _this;
  }
  _inherits(MovableElement2, _LitElement);
  return _createClass(MovableElement2, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _superPropGet$5(MovableElement2, "connectedCallback", this, 3)([]);
      if (!this.beingMoved) {
        this.mounted();
      }
      this.beingMoved = false;
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this2 = this;
      _superPropGet$5(MovableElement2, "disconnectedCallback", this, 3)([]);
      this.beingMoved = true;
      queueMicrotask(function() {
        if (_this2.beingMoved) {
          _this2.unmounted();
        }
      });
    }
  }]);
})(i4);
var _RefElement;
var _initProto$d;
var _dataDecs$3;
var _init_data$3;
var _emitDecs$1;
var _init_emit$1;
var _ref$d;
function ownKeys$32(e6, r6) {
  var t3 = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e6);
    r6 && (o6 = o6.filter(function(r7) {
      return Object.getOwnPropertyDescriptor(e6, r7).enumerable;
    })), t3.push.apply(t3, o6);
  }
  return t3;
}
function _objectSpread$32(e6) {
  for (var r6 = 1; r6 < arguments.length; r6++) {
    var t3 = null != arguments[r6] ? arguments[r6] : {};
    r6 % 2 ? ownKeys$32(Object(t3), true).forEach(function(r7) {
      _defineProperty(e6, r7, t3[r7]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(t3)) : ownKeys$32(Object(t3)).forEach(function(r7) {
      Object.defineProperty(e6, r7, Object.getOwnPropertyDescriptor(t3, r7));
    });
  }
  return e6;
}
function _callSuper$f(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$f() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$f() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$f = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _classPrivateFieldInitSpec$d(e6, t3, a3) {
  _checkPrivateRedeclaration$d(e6, t3), t3.set(e6, a3);
}
function _checkPrivateRedeclaration$d(e6, t3) {
  if (t3.has(e6)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet$d(s4, a3, r6) {
  return s4.set(_assertClassBrand$d(s4, a3), r6), r6;
}
function _classPrivateFieldGet$d(s4, a3) {
  return s4.get(_assertClassBrand$d(s4, a3));
}
function _assertClassBrand$d(e6, t3, n5) {
  if ("function" == typeof e6 ? e6 === t3 : e6.has(t3)) return arguments.length < 3 ? t3 : n5;
  throw new TypeError("Private element is not present on this object");
}
function _applyDecs$d(e6, t3, r6, n5, o6, a3) {
  function i5(e7, t4, r7) {
    return function(n6, o7) {
      return r7 && r7(n6), e7[t4].call(n6, o7);
    };
  }
  function c4(e7, t4) {
    for (var r7 = 0; r7 < e7.length; r7++) e7[r7].call(t4);
    return t4;
  }
  function s4(e7, t4, r7, n6) {
    if ("function" != typeof e7 && (n6 || void 0 !== e7)) throw new TypeError(t4 + " must " + (r7 || "be") + " a function" + (n6 ? "" : " or undefined"));
    return e7;
  }
  function applyDec(e7, t4, r7, n6, o7, a4, c5, u4, l4, f4, p4, d3, h3) {
    function m2(e8) {
      if (!h3(e8)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y3, v2 = t4[0], g2 = t4[3], b3 = !u4;
    if (!b3) {
      r7 || Array.isArray(v2) || (v2 = [v2]);
      var w2 = {}, S3 = [], A2 = 3 === o7 ? "get" : 4 === o7 || d3 ? "set" : "value";
      f4 ? (p4 || d3 ? w2 = { get: _setFunctionName$d(function() {
        return g2(this);
      }, n6, "get"), set: function set(e8) {
        t4[4](this, e8);
      } } : w2[A2] = g2, p4 || _setFunctionName$d(w2[A2], n6, 2 === o7 ? "" : A2)) : p4 || (w2 = Object.getOwnPropertyDescriptor(e7, n6));
    }
    for (var P2 = e7, j = v2.length - 1; j >= 0; j -= r7 ? 2 : 1) {
      var D2 = v2[j], E2 = r7 ? v2[j - 1] : void 0, I2 = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o7], name: n6, metadata: a4, addInitializer: function(e8, t5) {
        if (e8.v) throw Error("attempted to call addInitializer after decoration was finished");
        s4(t5, "An initializer", "be", true), c5.push(t5);
      }.bind(null, I2) };
      try {
        if (b3) (y3 = s4(D2.call(E2, P2, O), "class decorators", "return")) && (P2 = y3);
        else {
          var k2, F;
          O["static"] = l4, O["private"] = f4, f4 ? 2 === o7 ? k2 = function k3(e8) {
            return m2(e8), w2.value;
          } : (o7 < 4 && (k2 = i5(w2, "get", m2)), 3 !== o7 && (F = i5(w2, "set", m2))) : (k2 = function k3(e8) {
            return e8[n6];
          }, (o7 < 2 || 4 === o7) && (F = function F2(e8, t5) {
            e8[n6] = t5;
          }));
          var N2 = O.access = { has: f4 ? h3.bind() : function(e8) {
            return n6 in e8;
          } };
          if (k2 && (N2.get = k2), F && (N2.set = F), P2 = D2.call(E2, d3 ? { get: w2.get, set: w2.set } : w2[A2], O), d3) {
            if ("object" == _typeof(P2) && P2) (y3 = s4(P2.get, "accessor.get")) && (w2.get = y3), (y3 = s4(P2.set, "accessor.set")) && (w2.set = y3), (y3 = s4(P2.init, "accessor.init")) && S3.push(y3);
            else if (void 0 !== P2) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s4(P2, (p4 ? "field" : "method") + " decorators", "return") && (p4 ? S3.push(P2) : w2[A2] = P2);
        }
      } finally {
        I2.v = true;
      }
    }
    return (p4 || d3) && u4.push(function(e8, t5) {
      for (var r8 = S3.length - 1; r8 >= 0; r8--) t5 = S3[r8].call(e8, t5);
      return t5;
    }), p4 || b3 || (f4 ? d3 ? u4.push(i5(w2, "get"), i5(w2, "set")) : u4.push(2 === o7 ? w2[A2] : i5.call.bind(w2[A2])) : Object.defineProperty(e7, n6, w2)), P2;
  }
  function u3(e7, t4) {
    return Object.defineProperty(e7, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: true, enumerable: true, value: t4 });
  }
  if (arguments.length >= 6) var l3 = a3[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  var f3 = Object.create(null == l3 ? null : l3), p3 = (function(e7, t4, r7, n6) {
    var o7, a4, i6 = [], s5 = function s6(t5) {
      return _checkInRHS$d(t5) === e7;
    }, u4 = /* @__PURE__ */ new Map();
    function l4(e8) {
      e8 && i6.push(c4.bind(null, e8));
    }
    for (var f4 = 0; f4 < t4.length; f4++) {
      var p4 = t4[f4];
      if (Array.isArray(p4)) {
        var d3 = p4[1], h3 = p4[2], m2 = p4.length > 3, y3 = 16 & d3, v2 = !!(8 & d3), g2 = 0 == (d3 &= 7), b3 = h3 + "/" + v2;
        if (!g2 && !m2) {
          var w2 = u4.get(b3);
          if (true === w2 || 3 === w2 && 4 !== d3 || 4 === w2 && 3 !== d3) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h3);
          u4.set(b3, !(d3 > 2) || d3);
        }
        applyDec(v2 ? e7 : e7.prototype, p4, y3, m2 ? "#" + h3 : _toPropertyKey$d(h3), d3, n6, v2 ? a4 = a4 || [] : o7 = o7 || [], i6, v2, m2, g2, 1 === d3, v2 && m2 ? s5 : r7);
      }
    }
    return l4(o7), l4(a4), i6;
  })(e6, t3, o6, f3);
  return r6.length || u3(e6, f3), { e: p3, get c() {
    var t4 = [];
    return r6.length && [u3(applyDec(e6, [r6], n5, e6.name, 5, f3, t4), f3), c4.bind(null, t4, e6)];
  } };
}
function _toPropertyKey$d(t3) {
  var i5 = _toPrimitive$d(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive$d(t3, r6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var e6 = t3[Symbol.toPrimitive];
  if (void 0 !== e6) {
    var i5 = e6.call(t3, r6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r6 ? String : Number)(t3);
}
function _setFunctionName$d(e6, t3, n5) {
  "symbol" == _typeof(t3) && (t3 = (t3 = t3.description) ? "[" + t3 + "]" : "");
  try {
    Object.defineProperty(e6, "name", { configurable: true, value: n5 ? n5 + " " + t3 : t3 });
  } catch (e7) {
  }
  return e6;
}
function _checkInRHS$d(e6) {
  if (Object(e6) !== e6) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e6 ? _typeof(e6) : "null"));
  return e6;
}
var _A$d = /* @__PURE__ */ new WeakMap();
var _B$a = /* @__PURE__ */ new WeakMap();
_ref$d = (_dataDecs$3 = n4({
  type: Object
}), _emitDecs$1 = n4({
  type: Function
}), "data");
var RefElement = /* @__PURE__ */ (function(_MovableElement) {
  function RefElement2() {
    var _this;
    _classCallCheck(this, RefElement2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$f(this, RefElement2, [].concat(args));
    _classPrivateFieldInitSpec$d(_this, _A$d, (_initProto$d(_this), _init_data$3(_this)));
    _classPrivateFieldInitSpec$d(_this, _B$a, _init_emit$1(_this));
    return _this;
  }
  _inherits(RefElement2, _MovableElement);
  return _createClass(RefElement2, [{
    key: _ref$d,
    get: function get() {
      return _classPrivateFieldGet$d(_A$d, this);
    }
  }, {
    key: "data",
    set: function set(v2) {
      _classPrivateFieldSet$d(_A$d, this, v2);
    }
  }, {
    key: "emit",
    get: function get() {
      return _classPrivateFieldGet$d(_B$a, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$d(_B$a, this, v2);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.emit({
        type: "render",
        data: _objectSpread$32(_objectSpread$32({}, this.data), {}, {
          element: this
        })
      });
    }
  }, {
    key: "unmounted",
    value: function unmounted() {
      this.emit({
        type: "unmount",
        data: {
          element: this
        }
      });
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      this.style.display = "block";
      return this;
    }
  }]);
})(MovableElement);
_RefElement = RefElement;
var _applyDecs$e$d = _applyDecs$d(_RefElement, [[_dataDecs$3, 1, "data"], [_emitDecs$1, 1, "emit"]], [], 0, void 0, MovableElement).e;
var _applyDecs$e2$1 = _slicedToArray(_applyDecs$e$d, 3);
_init_data$3 = _applyDecs$e2$1[0];
_init_emit$1 = _applyDecs$e2$1[1];
_initProto$d = _applyDecs$e2$1[2];
var _ConnectionElement;
var _templateObject$g;
var _templateObject2$d;
var _initProto$c;
var _startDecs$1;
var _init_start$1;
var _endDecs$1;
var _init_end$1;
var _pathDecs$1;
var _init_path$1;
var _ref$c;
function _callSuper$e(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$e() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$e() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$e = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _classPrivateFieldInitSpec$c(e6, t3, a3) {
  _checkPrivateRedeclaration$c(e6, t3), t3.set(e6, a3);
}
function _checkPrivateRedeclaration$c(e6, t3) {
  if (t3.has(e6)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet$c(s4, a3, r6) {
  return s4.set(_assertClassBrand$c(s4, a3), r6), r6;
}
function _classPrivateFieldGet$c(s4, a3) {
  return s4.get(_assertClassBrand$c(s4, a3));
}
function _assertClassBrand$c(e6, t3, n5) {
  if ("function" == typeof e6 ? e6 === t3 : e6.has(t3)) return arguments.length < 3 ? t3 : n5;
  throw new TypeError("Private element is not present on this object");
}
function _applyDecs$c(e6, t3, r6, n5, o6, a3) {
  function i5(e7, t4, r7) {
    return function(n6, o7) {
      return r7 && r7(n6), e7[t4].call(n6, o7);
    };
  }
  function c4(e7, t4) {
    for (var r7 = 0; r7 < e7.length; r7++) e7[r7].call(t4);
    return t4;
  }
  function s4(e7, t4, r7, n6) {
    if ("function" != typeof e7 && (n6 || void 0 !== e7)) throw new TypeError(t4 + " must " + (r7 || "be") + " a function" + (n6 ? "" : " or undefined"));
    return e7;
  }
  function applyDec(e7, t4, r7, n6, o7, a4, c5, u4, l4, f4, p4, d3, h3) {
    function m2(e8) {
      if (!h3(e8)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y3, v2 = t4[0], g2 = t4[3], b3 = !u4;
    if (!b3) {
      r7 || Array.isArray(v2) || (v2 = [v2]);
      var w2 = {}, S3 = [], A2 = 3 === o7 ? "get" : 4 === o7 || d3 ? "set" : "value";
      f4 ? (p4 || d3 ? w2 = { get: _setFunctionName$c(function() {
        return g2(this);
      }, n6, "get"), set: function set(e8) {
        t4[4](this, e8);
      } } : w2[A2] = g2, p4 || _setFunctionName$c(w2[A2], n6, 2 === o7 ? "" : A2)) : p4 || (w2 = Object.getOwnPropertyDescriptor(e7, n6));
    }
    for (var P2 = e7, j = v2.length - 1; j >= 0; j -= r7 ? 2 : 1) {
      var D2 = v2[j], E2 = r7 ? v2[j - 1] : void 0, I2 = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o7], name: n6, metadata: a4, addInitializer: function(e8, t5) {
        if (e8.v) throw Error("attempted to call addInitializer after decoration was finished");
        s4(t5, "An initializer", "be", true), c5.push(t5);
      }.bind(null, I2) };
      try {
        if (b3) (y3 = s4(D2.call(E2, P2, O), "class decorators", "return")) && (P2 = y3);
        else {
          var k2, F;
          O["static"] = l4, O["private"] = f4, f4 ? 2 === o7 ? k2 = function k3(e8) {
            return m2(e8), w2.value;
          } : (o7 < 4 && (k2 = i5(w2, "get", m2)), 3 !== o7 && (F = i5(w2, "set", m2))) : (k2 = function k3(e8) {
            return e8[n6];
          }, (o7 < 2 || 4 === o7) && (F = function F2(e8, t5) {
            e8[n6] = t5;
          }));
          var N2 = O.access = { has: f4 ? h3.bind() : function(e8) {
            return n6 in e8;
          } };
          if (k2 && (N2.get = k2), F && (N2.set = F), P2 = D2.call(E2, d3 ? { get: w2.get, set: w2.set } : w2[A2], O), d3) {
            if ("object" == _typeof(P2) && P2) (y3 = s4(P2.get, "accessor.get")) && (w2.get = y3), (y3 = s4(P2.set, "accessor.set")) && (w2.set = y3), (y3 = s4(P2.init, "accessor.init")) && S3.push(y3);
            else if (void 0 !== P2) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s4(P2, (p4 ? "field" : "method") + " decorators", "return") && (p4 ? S3.push(P2) : w2[A2] = P2);
        }
      } finally {
        I2.v = true;
      }
    }
    return (p4 || d3) && u4.push(function(e8, t5) {
      for (var r8 = S3.length - 1; r8 >= 0; r8--) t5 = S3[r8].call(e8, t5);
      return t5;
    }), p4 || b3 || (f4 ? d3 ? u4.push(i5(w2, "get"), i5(w2, "set")) : u4.push(2 === o7 ? w2[A2] : i5.call.bind(w2[A2])) : Object.defineProperty(e7, n6, w2)), P2;
  }
  function u3(e7, t4) {
    return Object.defineProperty(e7, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: true, enumerable: true, value: t4 });
  }
  if (arguments.length >= 6) var l3 = a3[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  var f3 = Object.create(null == l3 ? null : l3), p3 = (function(e7, t4, r7, n6) {
    var o7, a4, i6 = [], s5 = function s6(t5) {
      return _checkInRHS$c(t5) === e7;
    }, u4 = /* @__PURE__ */ new Map();
    function l4(e8) {
      e8 && i6.push(c4.bind(null, e8));
    }
    for (var f4 = 0; f4 < t4.length; f4++) {
      var p4 = t4[f4];
      if (Array.isArray(p4)) {
        var d3 = p4[1], h3 = p4[2], m2 = p4.length > 3, y3 = 16 & d3, v2 = !!(8 & d3), g2 = 0 == (d3 &= 7), b3 = h3 + "/" + v2;
        if (!g2 && !m2) {
          var w2 = u4.get(b3);
          if (true === w2 || 3 === w2 && 4 !== d3 || 4 === w2 && 3 !== d3) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h3);
          u4.set(b3, !(d3 > 2) || d3);
        }
        applyDec(v2 ? e7 : e7.prototype, p4, y3, m2 ? "#" + h3 : _toPropertyKey$c(h3), d3, n6, v2 ? a4 = a4 || [] : o7 = o7 || [], i6, v2, m2, g2, 1 === d3, v2 && m2 ? s5 : r7);
      }
    }
    return l4(o7), l4(a4), i6;
  })(e6, t3, o6, f3);
  return r6.length || u3(e6, f3), { e: p3, get c() {
    var t4 = [];
    return r6.length && [u3(applyDec(e6, [r6], n5, e6.name, 5, f3, t4), f3), c4.bind(null, t4, e6)];
  } };
}
function _toPropertyKey$c(t3) {
  var i5 = _toPrimitive$c(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive$c(t3, r6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var e6 = t3[Symbol.toPrimitive];
  if (void 0 !== e6) {
    var i5 = e6.call(t3, r6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r6 ? String : Number)(t3);
}
function _setFunctionName$c(e6, t3, n5) {
  "symbol" == _typeof(t3) && (t3 = (t3 = t3.description) ? "[" + t3 + "]" : "");
  try {
    Object.defineProperty(e6, "name", { configurable: true, value: n5 ? n5 + " " + t3 : t3 });
  } catch (e7) {
  }
  return e6;
}
function _checkInRHS$c(e6) {
  if (Object(e6) !== e6) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e6 ? _typeof(e6) : "null"));
  return e6;
}
var _A$c = /* @__PURE__ */ new WeakMap();
var _B$9 = /* @__PURE__ */ new WeakMap();
var _C$9 = /* @__PURE__ */ new WeakMap();
_ref$c = (_startDecs$1 = n4(), _endDecs$1 = n4(), _pathDecs$1 = n4(), "start");
var ConnectionElement = /* @__PURE__ */ (function(_LitElement) {
  function ConnectionElement2() {
    var _this;
    _classCallCheck(this, ConnectionElement2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$e(this, ConnectionElement2, [].concat(args));
    _classPrivateFieldInitSpec$c(_this, _A$c, (_initProto$c(_this), _init_start$1(_this)));
    _classPrivateFieldInitSpec$c(_this, _B$9, _init_end$1(_this));
    _classPrivateFieldInitSpec$c(_this, _C$9, _init_path$1(_this));
    return _this;
  }
  _inherits(ConnectionElement2, _LitElement);
  return _createClass(ConnectionElement2, [{
    key: _ref$c,
    get: function get() {
      return _classPrivateFieldGet$c(_A$c, this);
    }
  }, {
    key: "start",
    set: function set(v2) {
      _classPrivateFieldSet$c(_A$c, this, v2);
    }
  }, {
    key: "end",
    get: function get() {
      return _classPrivateFieldGet$c(_B$9, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$c(_B$9, this, v2);
    }
  }, {
    key: "path",
    get: function get() {
      return _classPrivateFieldGet$c(_C$9, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$c(_C$9, this, v2);
    }
  }, {
    key: "render",
    value: function render() {
      return b2(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral(['\n      <svg data-testid="connection">\n        <path d=', "></path>\n      </svg>\n    "])), this.path);
    }
  }]);
})(i4);
_ConnectionElement = ConnectionElement;
var _applyDecs$e$c = _slicedToArray(_applyDecs$c(_ConnectionElement, [[_startDecs$1, 1, "start"], [_endDecs$1, 1, "end"], [_pathDecs$1, 1, "path"]], [], 0, void 0, i4).e, 4);
_init_start$1 = _applyDecs$e$c[0];
_init_end$1 = _applyDecs$e$c[1];
_init_path$1 = _applyDecs$e$c[2];
_initProto$c = _applyDecs$e$c[3];
_defineProperty(ConnectionElement, "styles", i(_templateObject2$d || (_templateObject2$d = _taggedTemplateLiteral(["\n    svg {\n      overflow: visible !important;\n      position: absolute;\n      pointer-events: none;\n      width: 9999px;\n      height: 9999px;\n    }\n\n    path {\n      fill: none;\n      stroke-width: 5px;\n      stroke: steelblue;\n      pointer-events: auto;\n    }\n  "]))));
var _ConnectionWrapperElement;
var _initProto$b;
var _startDecs;
var _init_start;
var _endDecs;
var _init_end;
var _pathDecs;
var _init_path;
var _componentDecs;
var _init_component;
var _computedPathDecs;
var _init_computedPath;
var _ref$b;
function _callSuper$d(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$d() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$d() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$d = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _superPropGet$4(t3, e6, o6, r6) {
  var p3 = _get(_getPrototypeOf(1 & r6 ? t3.prototype : t3), e6, o6);
  return 2 & r6 && "function" == typeof p3 ? function(t4) {
    return p3.apply(o6, t4);
  } : p3;
}
function _classPrivateFieldInitSpec$b(e6, t3, a3) {
  _checkPrivateRedeclaration$b(e6, t3), t3.set(e6, a3);
}
function _checkPrivateRedeclaration$b(e6, t3) {
  if (t3.has(e6)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet$b(s4, a3, r6) {
  return s4.set(_assertClassBrand$b(s4, a3), r6), r6;
}
function _classPrivateFieldGet$b(s4, a3) {
  return s4.get(_assertClassBrand$b(s4, a3));
}
function _assertClassBrand$b(e6, t3, n5) {
  if ("function" == typeof e6 ? e6 === t3 : e6.has(t3)) return arguments.length < 3 ? t3 : n5;
  throw new TypeError("Private element is not present on this object");
}
function _applyDecs$b(e6, t3, r6, n5, o6, a3) {
  function i5(e7, t4, r7) {
    return function(n6, o7) {
      return r7 && r7(n6), e7[t4].call(n6, o7);
    };
  }
  function c4(e7, t4) {
    for (var r7 = 0; r7 < e7.length; r7++) e7[r7].call(t4);
    return t4;
  }
  function s4(e7, t4, r7, n6) {
    if ("function" != typeof e7 && (n6 || void 0 !== e7)) throw new TypeError(t4 + " must " + (r7 || "be") + " a function" + (n6 ? "" : " or undefined"));
    return e7;
  }
  function applyDec(e7, t4, r7, n6, o7, a4, c5, u4, l4, f4, p4, d3, h3) {
    function m2(e8) {
      if (!h3(e8)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y3, v2 = t4[0], g2 = t4[3], b3 = !u4;
    if (!b3) {
      r7 || Array.isArray(v2) || (v2 = [v2]);
      var w2 = {}, S3 = [], A2 = 3 === o7 ? "get" : 4 === o7 || d3 ? "set" : "value";
      f4 ? (p4 || d3 ? w2 = { get: _setFunctionName$b(function() {
        return g2(this);
      }, n6, "get"), set: function set(e8) {
        t4[4](this, e8);
      } } : w2[A2] = g2, p4 || _setFunctionName$b(w2[A2], n6, 2 === o7 ? "" : A2)) : p4 || (w2 = Object.getOwnPropertyDescriptor(e7, n6));
    }
    for (var P2 = e7, j = v2.length - 1; j >= 0; j -= r7 ? 2 : 1) {
      var D2 = v2[j], E2 = r7 ? v2[j - 1] : void 0, I2 = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o7], name: n6, metadata: a4, addInitializer: function(e8, t5) {
        if (e8.v) throw Error("attempted to call addInitializer after decoration was finished");
        s4(t5, "An initializer", "be", true), c5.push(t5);
      }.bind(null, I2) };
      try {
        if (b3) (y3 = s4(D2.call(E2, P2, O), "class decorators", "return")) && (P2 = y3);
        else {
          var k2, F;
          O["static"] = l4, O["private"] = f4, f4 ? 2 === o7 ? k2 = function k3(e8) {
            return m2(e8), w2.value;
          } : (o7 < 4 && (k2 = i5(w2, "get", m2)), 3 !== o7 && (F = i5(w2, "set", m2))) : (k2 = function k3(e8) {
            return e8[n6];
          }, (o7 < 2 || 4 === o7) && (F = function F2(e8, t5) {
            e8[n6] = t5;
          }));
          var N2 = O.access = { has: f4 ? h3.bind() : function(e8) {
            return n6 in e8;
          } };
          if (k2 && (N2.get = k2), F && (N2.set = F), P2 = D2.call(E2, d3 ? { get: w2.get, set: w2.set } : w2[A2], O), d3) {
            if ("object" == _typeof(P2) && P2) (y3 = s4(P2.get, "accessor.get")) && (w2.get = y3), (y3 = s4(P2.set, "accessor.set")) && (w2.set = y3), (y3 = s4(P2.init, "accessor.init")) && S3.push(y3);
            else if (void 0 !== P2) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s4(P2, (p4 ? "field" : "method") + " decorators", "return") && (p4 ? S3.push(P2) : w2[A2] = P2);
        }
      } finally {
        I2.v = true;
      }
    }
    return (p4 || d3) && u4.push(function(e8, t5) {
      for (var r8 = S3.length - 1; r8 >= 0; r8--) t5 = S3[r8].call(e8, t5);
      return t5;
    }), p4 || b3 || (f4 ? d3 ? u4.push(i5(w2, "get"), i5(w2, "set")) : u4.push(2 === o7 ? w2[A2] : i5.call.bind(w2[A2])) : Object.defineProperty(e7, n6, w2)), P2;
  }
  function u3(e7, t4) {
    return Object.defineProperty(e7, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: true, enumerable: true, value: t4 });
  }
  if (arguments.length >= 6) var l3 = a3[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  var f3 = Object.create(null == l3 ? null : l3), p3 = (function(e7, t4, r7, n6) {
    var o7, a4, i6 = [], s5 = function s6(t5) {
      return _checkInRHS$b(t5) === e7;
    }, u4 = /* @__PURE__ */ new Map();
    function l4(e8) {
      e8 && i6.push(c4.bind(null, e8));
    }
    for (var f4 = 0; f4 < t4.length; f4++) {
      var p4 = t4[f4];
      if (Array.isArray(p4)) {
        var d3 = p4[1], h3 = p4[2], m2 = p4.length > 3, y3 = 16 & d3, v2 = !!(8 & d3), g2 = 0 == (d3 &= 7), b3 = h3 + "/" + v2;
        if (!g2 && !m2) {
          var w2 = u4.get(b3);
          if (true === w2 || 3 === w2 && 4 !== d3 || 4 === w2 && 3 !== d3) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h3);
          u4.set(b3, !(d3 > 2) || d3);
        }
        applyDec(v2 ? e7 : e7.prototype, p4, y3, m2 ? "#" + h3 : _toPropertyKey$b(h3), d3, n6, v2 ? a4 = a4 || [] : o7 = o7 || [], i6, v2, m2, g2, 1 === d3, v2 && m2 ? s5 : r7);
      }
    }
    return l4(o7), l4(a4), i6;
  })(e6, t3, o6, f3);
  return r6.length || u3(e6, f3), { e: p3, get c() {
    var t4 = [];
    return r6.length && [u3(applyDec(e6, [r6], n5, e6.name, 5, f3, t4), f3), c4.bind(null, t4, e6)];
  } };
}
function _toPropertyKey$b(t3) {
  var i5 = _toPrimitive$b(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive$b(t3, r6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var e6 = t3[Symbol.toPrimitive];
  if (void 0 !== e6) {
    var i5 = e6.call(t3, r6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r6 ? String : Number)(t3);
}
function _setFunctionName$b(e6, t3, n5) {
  "symbol" == _typeof(t3) && (t3 = (t3 = t3.description) ? "[" + t3 + "]" : "");
  try {
    Object.defineProperty(e6, "name", { configurable: true, value: n5 ? n5 + " " + t3 : t3 });
  } catch (e7) {
  }
  return e6;
}
function _checkInRHS$b(e6) {
  if (Object(e6) !== e6) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e6 ? _typeof(e6) : "null"));
  return e6;
}
var _A$b = /* @__PURE__ */ new WeakMap();
var _B$8 = /* @__PURE__ */ new WeakMap();
var _C$8 = /* @__PURE__ */ new WeakMap();
var _D$6 = /* @__PURE__ */ new WeakMap();
var _E$5 = /* @__PURE__ */ new WeakMap();
_ref$b = (_startDecs = n4(), _endDecs = n4(), _pathDecs = n4(), _componentDecs = n4(), _computedPathDecs = n4({
  reflect: false
}), "start");
var ConnectionWrapperElement = /* @__PURE__ */ (function(_LitElement) {
  function ConnectionWrapperElement2() {
    var _this;
    _classCallCheck(this, ConnectionWrapperElement2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$d(this, ConnectionWrapperElement2, [].concat(args));
    _classPrivateFieldInitSpec$b(_this, _A$b, (_initProto$b(_this), _init_start(_this)));
    _classPrivateFieldInitSpec$b(_this, _B$8, _init_end(_this));
    _classPrivateFieldInitSpec$b(_this, _C$8, _init_path(_this));
    _classPrivateFieldInitSpec$b(_this, _D$6, _init_component(_this));
    _defineProperty(_this, "computedStart", null);
    _defineProperty(_this, "computedEnd", null);
    _classPrivateFieldInitSpec$b(_this, _E$5, _init_computedPath(_this));
    _defineProperty(_this, "unwatch1", false);
    _defineProperty(_this, "unwatch2", false);
    return _this;
  }
  _inherits(ConnectionWrapperElement2, _LitElement);
  return _createClass(ConnectionWrapperElement2, [{
    key: _ref$b,
    get: function get() {
      return _classPrivateFieldGet$b(_A$b, this);
    }
  }, {
    key: "start",
    set: function set(v2) {
      _classPrivateFieldSet$b(_A$b, this, v2);
    }
  }, {
    key: "end",
    get: function get() {
      return _classPrivateFieldGet$b(_B$8, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$b(_B$8, this, v2);
    }
  }, {
    key: "path",
    get: function get() {
      return _classPrivateFieldGet$b(_C$8, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$b(_C$8, this, v2);
    }
  }, {
    key: "component",
    get: function get() {
      return _classPrivateFieldGet$b(_D$6, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$b(_D$6, this, v2);
    }
  }, {
    key: "render",
    value: function render() {
      return this.component(this.computedPath, this.computedStart, this.computedEnd);
    }
  }, {
    key: "computedPath",
    get: function get() {
      return _classPrivateFieldGet$b(_E$5, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$b(_E$5, this, v2);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;
      _superPropGet$4(ConnectionWrapperElement2, "connectedCallback", this, 3)([]);
      this.unwatch1 = typeof this.start === "function" && this.start(function(s4) {
        _this2.computedStart = s4;
        _this2.updatePath();
      });
      this.unwatch2 = typeof this.end === "function" && this.end(function(s4) {
        _this2.computedEnd = s4;
        _this2.updatePath();
      });
    }
  }, {
    key: "updated",
    value: function updated(changed) {
      if (changed.has("start") && typeof this.start !== "function") {
        this.computedStart = this.start;
        this.updatePath();
      }
      if (changed.has("end") && typeof this.end !== "function") {
        this.computedEnd = this.end;
        this.updatePath();
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _superPropGet$4(ConnectionWrapperElement2, "disconnectedCallback", this, 3)([]);
      if (this.unwatch1) {
        this.unwatch1();
      }
      if (this.unwatch2) {
        this.unwatch2();
      }
    }
  }, {
    key: "updatePath",
    value: function updatePath() {
      var _this3 = this;
      if (this.computedStart && this.computedEnd) void this.path(this.computedStart, this.computedEnd).then(function(path) {
        _this3.computedPath = path;
      });
    }
  }]);
})(i4);
_ConnectionWrapperElement = ConnectionWrapperElement;
var _applyDecs$e$b = _applyDecs$b(_ConnectionWrapperElement, [[_startDecs, 1, "start"], [_endDecs, 1, "end"], [_pathDecs, 1, "path"], [_componentDecs, 1, "component"], [_computedPathDecs, 1, "computedPath"]], [], 0, void 0, i4).e;
var _applyDecs$e2 = _slicedToArray(_applyDecs$e$b, 6);
_init_start = _applyDecs$e2[0];
_init_end = _applyDecs$e2[1];
_init_path = _applyDecs$e2[2];
_init_component = _applyDecs$e2[3];
_init_computedPath = _applyDecs$e2[4];
_initProto$b = _applyDecs$e2[5];
var _ControlElement;
var _templateObject$f;
var _templateObject2$c;
var _templateObject3$6;
var _initProto$a;
var _dataDecs$2;
var _init_data$2;
var _ref$a;
function _callSuper$c(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$c() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$c() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$c = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _classPrivateFieldInitSpec$a(e6, t3, a3) {
  _checkPrivateRedeclaration$a(e6, t3), t3.set(e6, a3);
}
function _checkPrivateRedeclaration$a(e6, t3) {
  if (t3.has(e6)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet$a(s4, a3, r6) {
  return s4.set(_assertClassBrand$a(s4, a3), r6), r6;
}
function _classPrivateFieldGet$a(s4, a3) {
  return s4.get(_assertClassBrand$a(s4, a3));
}
function _assertClassBrand$a(e6, t3, n5) {
  if ("function" == typeof e6 ? e6 === t3 : e6.has(t3)) return arguments.length < 3 ? t3 : n5;
  throw new TypeError("Private element is not present on this object");
}
function _applyDecs$a(e6, t3, r6, n5, o6, a3) {
  function i5(e7, t4, r7) {
    return function(n6, o7) {
      return r7 && r7(n6), e7[t4].call(n6, o7);
    };
  }
  function c4(e7, t4) {
    for (var r7 = 0; r7 < e7.length; r7++) e7[r7].call(t4);
    return t4;
  }
  function s4(e7, t4, r7, n6) {
    if ("function" != typeof e7 && (n6 || void 0 !== e7)) throw new TypeError(t4 + " must " + (r7 || "be") + " a function" + (n6 ? "" : " or undefined"));
    return e7;
  }
  function applyDec(e7, t4, r7, n6, o7, a4, c5, u4, l4, f4, p4, d3, h3) {
    function m2(e8) {
      if (!h3(e8)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y3, v2 = t4[0], g2 = t4[3], b3 = !u4;
    if (!b3) {
      r7 || Array.isArray(v2) || (v2 = [v2]);
      var w2 = {}, S3 = [], A2 = 3 === o7 ? "get" : 4 === o7 || d3 ? "set" : "value";
      f4 ? (p4 || d3 ? w2 = { get: _setFunctionName$a(function() {
        return g2(this);
      }, n6, "get"), set: function set(e8) {
        t4[4](this, e8);
      } } : w2[A2] = g2, p4 || _setFunctionName$a(w2[A2], n6, 2 === o7 ? "" : A2)) : p4 || (w2 = Object.getOwnPropertyDescriptor(e7, n6));
    }
    for (var P2 = e7, j = v2.length - 1; j >= 0; j -= r7 ? 2 : 1) {
      var D2 = v2[j], E2 = r7 ? v2[j - 1] : void 0, I2 = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o7], name: n6, metadata: a4, addInitializer: function(e8, t5) {
        if (e8.v) throw Error("attempted to call addInitializer after decoration was finished");
        s4(t5, "An initializer", "be", true), c5.push(t5);
      }.bind(null, I2) };
      try {
        if (b3) (y3 = s4(D2.call(E2, P2, O), "class decorators", "return")) && (P2 = y3);
        else {
          var k2, F;
          O["static"] = l4, O["private"] = f4, f4 ? 2 === o7 ? k2 = function k3(e8) {
            return m2(e8), w2.value;
          } : (o7 < 4 && (k2 = i5(w2, "get", m2)), 3 !== o7 && (F = i5(w2, "set", m2))) : (k2 = function k3(e8) {
            return e8[n6];
          }, (o7 < 2 || 4 === o7) && (F = function F2(e8, t5) {
            e8[n6] = t5;
          }));
          var N2 = O.access = { has: f4 ? h3.bind() : function(e8) {
            return n6 in e8;
          } };
          if (k2 && (N2.get = k2), F && (N2.set = F), P2 = D2.call(E2, d3 ? { get: w2.get, set: w2.set } : w2[A2], O), d3) {
            if ("object" == _typeof(P2) && P2) (y3 = s4(P2.get, "accessor.get")) && (w2.get = y3), (y3 = s4(P2.set, "accessor.set")) && (w2.set = y3), (y3 = s4(P2.init, "accessor.init")) && S3.push(y3);
            else if (void 0 !== P2) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s4(P2, (p4 ? "field" : "method") + " decorators", "return") && (p4 ? S3.push(P2) : w2[A2] = P2);
        }
      } finally {
        I2.v = true;
      }
    }
    return (p4 || d3) && u4.push(function(e8, t5) {
      for (var r8 = S3.length - 1; r8 >= 0; r8--) t5 = S3[r8].call(e8, t5);
      return t5;
    }), p4 || b3 || (f4 ? d3 ? u4.push(i5(w2, "get"), i5(w2, "set")) : u4.push(2 === o7 ? w2[A2] : i5.call.bind(w2[A2])) : Object.defineProperty(e7, n6, w2)), P2;
  }
  function u3(e7, t4) {
    return Object.defineProperty(e7, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: true, enumerable: true, value: t4 });
  }
  if (arguments.length >= 6) var l3 = a3[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  var f3 = Object.create(null == l3 ? null : l3), p3 = (function(e7, t4, r7, n6) {
    var o7, a4, i6 = [], s5 = function s6(t5) {
      return _checkInRHS$a(t5) === e7;
    }, u4 = /* @__PURE__ */ new Map();
    function l4(e8) {
      e8 && i6.push(c4.bind(null, e8));
    }
    for (var f4 = 0; f4 < t4.length; f4++) {
      var p4 = t4[f4];
      if (Array.isArray(p4)) {
        var d3 = p4[1], h3 = p4[2], m2 = p4.length > 3, y3 = 16 & d3, v2 = !!(8 & d3), g2 = 0 == (d3 &= 7), b3 = h3 + "/" + v2;
        if (!g2 && !m2) {
          var w2 = u4.get(b3);
          if (true === w2 || 3 === w2 && 4 !== d3 || 4 === w2 && 3 !== d3) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h3);
          u4.set(b3, !(d3 > 2) || d3);
        }
        applyDec(v2 ? e7 : e7.prototype, p4, y3, m2 ? "#" + h3 : _toPropertyKey$a(h3), d3, n6, v2 ? a4 = a4 || [] : o7 = o7 || [], i6, v2, m2, g2, 1 === d3, v2 && m2 ? s5 : r7);
      }
    }
    return l4(o7), l4(a4), i6;
  })(e6, t3, o6, f3);
  return r6.length || u3(e6, f3), { e: p3, get c() {
    var t4 = [];
    return r6.length && [u3(applyDec(e6, [r6], n5, e6.name, 5, f3, t4), f3), c4.bind(null, t4, e6)];
  } };
}
function _toPropertyKey$a(t3) {
  var i5 = _toPrimitive$a(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive$a(t3, r6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var e6 = t3[Symbol.toPrimitive];
  if (void 0 !== e6) {
    var i5 = e6.call(t3, r6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r6 ? String : Number)(t3);
}
function _setFunctionName$a(e6, t3, n5) {
  "symbol" == _typeof(t3) && (t3 = (t3 = t3.description) ? "[" + t3 + "]" : "");
  try {
    Object.defineProperty(e6, "name", { configurable: true, value: n5 ? n5 + " " + t3 : t3 });
  } catch (e7) {
  }
  return e6;
}
function _checkInRHS$a(e6) {
  if (Object(e6) !== e6) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e6 ? _typeof(e6) : "null"));
  return e6;
}
var _A$a = /* @__PURE__ */ new WeakMap();
_ref$a = (_dataDecs$2 = n4({
  type: Object
}), "data");
var ControlElement = /* @__PURE__ */ (function(_LitElement) {
  function ControlElement2() {
    var _this;
    _classCallCheck(this, ControlElement2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$c(this, ControlElement2, [].concat(args));
    _classPrivateFieldInitSpec$a(_this, _A$a, (_initProto$a(_this), _init_data$2(_this, null)));
    return _this;
  }
  _inherits(ControlElement2, _LitElement);
  return _createClass(ControlElement2, [{
    key: _ref$a,
    get: function get() {
      return _classPrivateFieldGet$a(_A$a, this);
    }
  }, {
    key: "data",
    set: function set(v2) {
      _classPrivateFieldSet$a(_A$a, this, v2);
    }
  }, {
    key: "handleInput",
    value: function handleInput(e6) {
      if (!this.data) return;
      var target = e6.target;
      var val = this.data.type === "number" ? +target.value : target.value;
      this.data.setValue(val);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.data) return b2(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral([""])));
      return b2(_templateObject2$c || (_templateObject2$c = _taggedTemplateLiteral(['\n      <input\n        type="', '"\n        .value="', '"\n        ?readonly="', '"\n        @input="', '"\n        @pointerdown="', '"\n      />\n    '])), this.data.type, this.data.value, this.data.readonly, this.handleInput, function(e6) {
        e6.stopPropagation();
      });
    }
  }]);
})(i4);
_ControlElement = ControlElement;
var _applyDecs$e$a = _slicedToArray(_applyDecs$a(_ControlElement, [[_dataDecs$2, 1, "data"]], [], 0, void 0, i4).e, 2);
_init_data$2 = _applyDecs$e$a[0];
_initProto$a = _applyDecs$e$a[1];
_defineProperty(ControlElement, "styles", i(_templateObject3$6 || (_templateObject3$6 = _taggedTemplateLiteral(["\n    input {\n      width: 100%;\n      border-radius: 30px;\n      background-color: white;\n      color: black;\n      padding: 2px 6px;\n      border: 1px solid #999;\n      font-size: 110%;\n      box-sizing: border-box;\n    }\n  "]))));
var _NodeElement;
var _templateObject$e;
var _templateObject2$b;
var _templateObject3$5;
var _templateObject4$3;
var _templateObject5$1;
var _templateObject6;
var _templateObject7;
var _initProto$9;
var _widthDecs$2;
var _init_width$2;
var _heightDecs$2;
var _init_height$2;
var _dataDecs$1;
var _init_data$1;
var _stylesDecs;
var _init_styles;
var _emitDecs;
var _init_emit;
var _ref$9;
function _callSuper$b(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$b() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$b() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$b = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _classPrivateFieldInitSpec$9(e6, t3, a3) {
  _checkPrivateRedeclaration$9(e6, t3), t3.set(e6, a3);
}
function _checkPrivateRedeclaration$9(e6, t3) {
  if (t3.has(e6)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet$9(s4, a3, r6) {
  return s4.set(_assertClassBrand$9(s4, a3), r6), r6;
}
function _classPrivateFieldGet$9(s4, a3) {
  return s4.get(_assertClassBrand$9(s4, a3));
}
function _assertClassBrand$9(e6, t3, n5) {
  if ("function" == typeof e6 ? e6 === t3 : e6.has(t3)) return arguments.length < 3 ? t3 : n5;
  throw new TypeError("Private element is not present on this object");
}
function _applyDecs$9(e6, t3, r6, n5, o6, a3) {
  function i5(e7, t4, r7) {
    return function(n6, o7) {
      return r7 && r7(n6), e7[t4].call(n6, o7);
    };
  }
  function c4(e7, t4) {
    for (var r7 = 0; r7 < e7.length; r7++) e7[r7].call(t4);
    return t4;
  }
  function s4(e7, t4, r7, n6) {
    if ("function" != typeof e7 && (n6 || void 0 !== e7)) throw new TypeError(t4 + " must " + (r7 || "be") + " a function" + (n6 ? "" : " or undefined"));
    return e7;
  }
  function applyDec(e7, t4, r7, n6, o7, a4, c5, u4, l4, f4, p4, d3, h3) {
    function m2(e8) {
      if (!h3(e8)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y3, v2 = t4[0], g2 = t4[3], b3 = !u4;
    if (!b3) {
      r7 || Array.isArray(v2) || (v2 = [v2]);
      var w2 = {}, S3 = [], A2 = 3 === o7 ? "get" : 4 === o7 || d3 ? "set" : "value";
      f4 ? (p4 || d3 ? w2 = { get: _setFunctionName$9(function() {
        return g2(this);
      }, n6, "get"), set: function set(e8) {
        t4[4](this, e8);
      } } : w2[A2] = g2, p4 || _setFunctionName$9(w2[A2], n6, 2 === o7 ? "" : A2)) : p4 || (w2 = Object.getOwnPropertyDescriptor(e7, n6));
    }
    for (var P2 = e7, j = v2.length - 1; j >= 0; j -= r7 ? 2 : 1) {
      var D2 = v2[j], E2 = r7 ? v2[j - 1] : void 0, I2 = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o7], name: n6, metadata: a4, addInitializer: function(e8, t5) {
        if (e8.v) throw Error("attempted to call addInitializer after decoration was finished");
        s4(t5, "An initializer", "be", true), c5.push(t5);
      }.bind(null, I2) };
      try {
        if (b3) (y3 = s4(D2.call(E2, P2, O), "class decorators", "return")) && (P2 = y3);
        else {
          var k2, F;
          O["static"] = l4, O["private"] = f4, f4 ? 2 === o7 ? k2 = function k3(e8) {
            return m2(e8), w2.value;
          } : (o7 < 4 && (k2 = i5(w2, "get", m2)), 3 !== o7 && (F = i5(w2, "set", m2))) : (k2 = function k3(e8) {
            return e8[n6];
          }, (o7 < 2 || 4 === o7) && (F = function F2(e8, t5) {
            e8[n6] = t5;
          }));
          var N2 = O.access = { has: f4 ? h3.bind() : function(e8) {
            return n6 in e8;
          } };
          if (k2 && (N2.get = k2), F && (N2.set = F), P2 = D2.call(E2, d3 ? { get: w2.get, set: w2.set } : w2[A2], O), d3) {
            if ("object" == _typeof(P2) && P2) (y3 = s4(P2.get, "accessor.get")) && (w2.get = y3), (y3 = s4(P2.set, "accessor.set")) && (w2.set = y3), (y3 = s4(P2.init, "accessor.init")) && S3.push(y3);
            else if (void 0 !== P2) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s4(P2, (p4 ? "field" : "method") + " decorators", "return") && (p4 ? S3.push(P2) : w2[A2] = P2);
        }
      } finally {
        I2.v = true;
      }
    }
    return (p4 || d3) && u4.push(function(e8, t5) {
      for (var r8 = S3.length - 1; r8 >= 0; r8--) t5 = S3[r8].call(e8, t5);
      return t5;
    }), p4 || b3 || (f4 ? d3 ? u4.push(i5(w2, "get"), i5(w2, "set")) : u4.push(2 === o7 ? w2[A2] : i5.call.bind(w2[A2])) : Object.defineProperty(e7, n6, w2)), P2;
  }
  function u3(e7, t4) {
    return Object.defineProperty(e7, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: true, enumerable: true, value: t4 });
  }
  if (arguments.length >= 6) var l3 = a3[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  var f3 = Object.create(null == l3 ? null : l3), p3 = (function(e7, t4, r7, n6) {
    var o7, a4, i6 = [], s5 = function s6(t5) {
      return _checkInRHS$9(t5) === e7;
    }, u4 = /* @__PURE__ */ new Map();
    function l4(e8) {
      e8 && i6.push(c4.bind(null, e8));
    }
    for (var f4 = 0; f4 < t4.length; f4++) {
      var p4 = t4[f4];
      if (Array.isArray(p4)) {
        var d3 = p4[1], h3 = p4[2], m2 = p4.length > 3, y3 = 16 & d3, v2 = !!(8 & d3), g2 = 0 == (d3 &= 7), b3 = h3 + "/" + v2;
        if (!g2 && !m2) {
          var w2 = u4.get(b3);
          if (true === w2 || 3 === w2 && 4 !== d3 || 4 === w2 && 3 !== d3) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h3);
          u4.set(b3, !(d3 > 2) || d3);
        }
        applyDec(v2 ? e7 : e7.prototype, p4, y3, m2 ? "#" + h3 : _toPropertyKey$9(h3), d3, n6, v2 ? a4 = a4 || [] : o7 = o7 || [], i6, v2, m2, g2, 1 === d3, v2 && m2 ? s5 : r7);
      }
    }
    return l4(o7), l4(a4), i6;
  })(e6, t3, o6, f3);
  return r6.length || u3(e6, f3), { e: p3, get c() {
    var t4 = [];
    return r6.length && [u3(applyDec(e6, [r6], n5, e6.name, 5, f3, t4), f3), c4.bind(null, t4, e6)];
  } };
}
function _toPropertyKey$9(t3) {
  var i5 = _toPrimitive$9(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive$9(t3, r6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var e6 = t3[Symbol.toPrimitive];
  if (void 0 !== e6) {
    var i5 = e6.call(t3, r6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r6 ? String : Number)(t3);
}
function _setFunctionName$9(e6, t3, n5) {
  "symbol" == _typeof(t3) && (t3 = (t3 = t3.description) ? "[" + t3 + "]" : "");
  try {
    Object.defineProperty(e6, "name", { configurable: true, value: n5 ? n5 + " " + t3 : t3 });
  } catch (e7) {
  }
  return e6;
}
function _checkInRHS$9(e6) {
  if (Object(e6) !== e6) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e6 ? _typeof(e6) : "null"));
  return e6;
}
var _A$9 = /* @__PURE__ */ new WeakMap();
var _B$7 = /* @__PURE__ */ new WeakMap();
var _C$7 = /* @__PURE__ */ new WeakMap();
var _D$5 = /* @__PURE__ */ new WeakMap();
var _E$4 = /* @__PURE__ */ new WeakMap();
_ref$9 = (_widthDecs$2 = n4({
  type: Number
}), _heightDecs$2 = n4({
  type: Number
}), _dataDecs$1 = n4({
  type: Object
}), _stylesDecs = n4({
  type: Function
}), _emitDecs = n4({
  type: Function
}), "width");
var NodeElement = /* @__PURE__ */ (function(_LitElement) {
  function NodeElement2() {
    var _this;
    _classCallCheck(this, NodeElement2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$b(this, NodeElement2, [].concat(args));
    _classPrivateFieldInitSpec$9(_this, _A$9, (_initProto$9(_this), _init_width$2(_this, null)));
    _classPrivateFieldInitSpec$9(_this, _B$7, _init_height$2(_this, null));
    _classPrivateFieldInitSpec$9(_this, _C$7, _init_data$1(_this));
    _classPrivateFieldInitSpec$9(_this, _D$5, _init_styles(_this, null));
    _classPrivateFieldInitSpec$9(_this, _E$4, _init_emit(_this, null));
    return _this;
  }
  _inherits(NodeElement2, _LitElement);
  return _createClass(NodeElement2, [{
    key: _ref$9,
    get: function get() {
      return _classPrivateFieldGet$9(_A$9, this);
    }
  }, {
    key: "width",
    set: function set(v2) {
      _classPrivateFieldSet$9(_A$9, this, v2);
    }
  }, {
    key: "height",
    get: function get() {
      return _classPrivateFieldGet$9(_B$7, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$9(_B$7, this, v2);
    }
  }, {
    key: "data",
    get: function get() {
      return _classPrivateFieldGet$9(_C$7, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$9(_C$7, this, v2);
    }
  }, {
    key: "styles",
    get: function get() {
      return _classPrivateFieldGet$9(_D$5, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$9(_D$5, this, v2);
    }
  }, {
    key: "emit",
    get: function get() {
      return _classPrivateFieldGet$9(_E$4, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$9(_E$4, this, v2);
    }
  }, {
    key: "sortByIndex",
    value: function sortByIndex(entries) {
      entries.sort(function(a3, b3) {
        var _a$, _b$;
        var ai = ((_a$ = a3[1]) === null || _a$ === void 0 ? void 0 : _a$.index) || 0;
        var bi = ((_b$ = b3[1]) === null || _b$ === void 0 ? void 0 : _b$.index) || 0;
        return ai - bi;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$styles, _this2 = this;
      var inputs = Object.entries(this.data.inputs || {});
      var outputs = Object.entries(this.data.outputs || {});
      var controls = Object.entries(this.data.controls || {});
      var _this$data = this.data, id = _this$data.id, label = _this$data.label, width = _this$data.width, height = _this$data.height;
      this.sortByIndex(inputs);
      this.sortByIndex(outputs);
      this.sortByIndex(controls);
      if (this.data.selected) {
        this.classList.add("selected");
      } else {
        this.classList.remove("selected");
      }
      this.dataset.testid = "node";
      return b2(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          width: ", ";\n          height: ", ";\n        }\n        ", '\n      </style>\n      <div class="title" data-testid="title">', "</div>\n      ", "\n      ", "\n      ", "\n    "])), Number.isFinite(width) ? "".concat(width, "px") : "var(--node-width)", Number.isFinite(height) ? "".concat(height, "px") : "auto", (_this$styles = this.styles) === null || _this$styles === void 0 ? void 0 : _this$styles.call(this, this), label, outputs.map(function(_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2), key = _ref3[0], output = _ref3[1];
        return output ? b2(_templateObject2$b || (_templateObject2$b = _taggedTemplateLiteral(['\n        <div class="output" key=', " data-testid=", '>\n          <div class="output-title" data-testid="output-title">', '</div><!--\n          --><span class="output-socket" data-testid="output-socket">\n            <rete-ref\n              .data=', "\n              .emit=", "\n            ></rete-ref>\n          </span>\n        </div>"])), key, "output-".concat(key), output.label, {
          type: "socket",
          side: "output",
          key,
          nodeId: id,
          payload: output.socket
        }, _this2.emit) : null;
      }), controls.map(function(_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2), key = _ref5[0], control = _ref5[1];
        return control ? b2(_templateObject3$5 || (_templateObject3$5 = _taggedTemplateLiteral(['\n        <span class="control" data-testid="', '">\n          <rete-ref\n            .emit=', '\n            .data="', '"\n          ></rete-ref>\n        </span>\n        '])), "control-" + key, _this2.emit, {
          type: "control",
          payload: control
        }) : null;
      }), inputs.map(function(_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2), key = _ref7[0], input = _ref7[1];
        return input ? b2(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteral(['\n        <div class="input" key=', " data-testid=", '>\n          <span class="input-socket" data-testid="input-socket">\n            <rete-ref\n              .data=', "\n              .emit=", "\n            ></rete-ref>\n          </span><!--\n          -->", "\n          ", "\n        </div>"])), key, "input-".concat(key), {
          type: "socket",
          side: "input",
          key,
          nodeId: id,
          payload: input.socket
        }, _this2.emit, input && (!input.control || !input.showControl) ? b2(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(['<!--\n          --><div class="input-title" data-testid="input-title">', "</div>"])), input.label) : null, input.control && input.showControl ? b2(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(['\n            <span class="control" data-testid="input-control">\n              <rete-ref\n                .emit=', '\n                .data="', '"\n              ></rete-ref>\n            </span>\n          '])), _this2.emit, {
          type: "control",
          payload: input.control
        }) : null) : null;
      }));
    }
  }]);
})(i4);
_NodeElement = NodeElement;
var _applyDecs$e$9 = _slicedToArray(_applyDecs$9(_NodeElement, [[_widthDecs$2, 1, "width"], [_heightDecs$2, 1, "height"], [_dataDecs$1, 1, "data"], [_stylesDecs, 1, "styles"], [_emitDecs, 1, "emit"]], [], 0, void 0, i4).e, 6);
_init_width$2 = _applyDecs$e$9[0];
_init_height$2 = _applyDecs$e$9[1];
_init_data$1 = _applyDecs$e$9[2];
_init_styles = _applyDecs$e$9[3];
_init_emit = _applyDecs$e$9[4];
_initProto$9 = _applyDecs$e$9[5];
_defineProperty(NodeElement, "styles", i(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    :host {\n      --node-color: rgba(110, 136, 255, 0.8);\n      --node-color-hover: rgba(130, 153, 255, 0.8);\n      --node-color-selected: #ffd92c;\n      --socket-size: 24px;\n      --socket-margin: 6px;\n      --socket-color: #96b38a;\n      --node-width: 180px;\n    }\n\n    :host {\n      display: block;\n      background: var(--node-color);\n      border: 2px solid #4e58bf;\n      border-radius: 10px;\n      cursor: pointer;\n      box-sizing: border-box;\n      padding-bottom: 6px;\n      position: relative;\n      user-select: none;\n      line-height: initial;\n      font-family: Arial;\n    }\n\n    :host(:hover) {\n      background: var(--node-color-hover);\n    }\n\n    :host(.selected) {\n      background: var(--node-color-selected);\n      border-color: #e3c000;\n    }\n\n    .title {\n      color: white;\n      font-family: sans-serif;\n      font-size: 18px;\n      padding: 8px;\n    }\n\n    .output,\n    .input {\n      text-align: right;\n    }\n\n    .input {\n      text-align: left;\n    }\n\n\n    .output-socket {\n      text-align: right;\n      margin-right: calc(0px - var(--socket-size) / 2 - var(--socket-margin));\n      display: inline-block;\n    }\n    .input-socket {\n        text-align: left;\n        margin-left: calc(0px - var(--socket-size) / 2 - var(--socket-margin));\n        display: inline-block;\n    }\n\n    .input-title,\n    .output-title {\n      vertical-align: middle;\n      color: white;\n      display: inline-block;\n      font-family: sans-serif;\n      font-size: 14px;\n      margin: var(--socket-margin);\n      line-height: var(--socket-size);\n    }\n\n    .input-control {\n      z-index: 1;\n      width: calc(100% - calc(var(--socket-size) + 2 * var(--socket-margin)));\n      vertical-align: middle;\n      display: inline-block;\n    }\n\n    .control {\n      display: block;\n      padding: var(--socket-margin) calc(var(--socket-size) / 2 + var(--socket-margin));\n    }\n  "]))));
var _SocketElement;
var _templateObject$d;
var _templateObject2$a;
var _initProto$8;
var _dataDecs;
var _init_data;
var _ref$8;
function _callSuper$a(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$a() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$a() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$a = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _classPrivateFieldInitSpec$8(e6, t3, a3) {
  _checkPrivateRedeclaration$8(e6, t3), t3.set(e6, a3);
}
function _checkPrivateRedeclaration$8(e6, t3) {
  if (t3.has(e6)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet$8(s4, a3, r6) {
  return s4.set(_assertClassBrand$8(s4, a3), r6), r6;
}
function _classPrivateFieldGet$8(s4, a3) {
  return s4.get(_assertClassBrand$8(s4, a3));
}
function _assertClassBrand$8(e6, t3, n5) {
  if ("function" == typeof e6 ? e6 === t3 : e6.has(t3)) return arguments.length < 3 ? t3 : n5;
  throw new TypeError("Private element is not present on this object");
}
function _applyDecs$8(e6, t3, r6, n5, o6, a3) {
  function i5(e7, t4, r7) {
    return function(n6, o7) {
      return r7 && r7(n6), e7[t4].call(n6, o7);
    };
  }
  function c4(e7, t4) {
    for (var r7 = 0; r7 < e7.length; r7++) e7[r7].call(t4);
    return t4;
  }
  function s4(e7, t4, r7, n6) {
    if ("function" != typeof e7 && (n6 || void 0 !== e7)) throw new TypeError(t4 + " must " + (r7 || "be") + " a function" + (n6 ? "" : " or undefined"));
    return e7;
  }
  function applyDec(e7, t4, r7, n6, o7, a4, c5, u4, l4, f4, p4, d3, h3) {
    function m2(e8) {
      if (!h3(e8)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y3, v2 = t4[0], g2 = t4[3], b3 = !u4;
    if (!b3) {
      r7 || Array.isArray(v2) || (v2 = [v2]);
      var w2 = {}, S3 = [], A2 = 3 === o7 ? "get" : 4 === o7 || d3 ? "set" : "value";
      f4 ? (p4 || d3 ? w2 = { get: _setFunctionName$8(function() {
        return g2(this);
      }, n6, "get"), set: function set(e8) {
        t4[4](this, e8);
      } } : w2[A2] = g2, p4 || _setFunctionName$8(w2[A2], n6, 2 === o7 ? "" : A2)) : p4 || (w2 = Object.getOwnPropertyDescriptor(e7, n6));
    }
    for (var P2 = e7, j = v2.length - 1; j >= 0; j -= r7 ? 2 : 1) {
      var D2 = v2[j], E2 = r7 ? v2[j - 1] : void 0, I2 = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o7], name: n6, metadata: a4, addInitializer: function(e8, t5) {
        if (e8.v) throw Error("attempted to call addInitializer after decoration was finished");
        s4(t5, "An initializer", "be", true), c5.push(t5);
      }.bind(null, I2) };
      try {
        if (b3) (y3 = s4(D2.call(E2, P2, O), "class decorators", "return")) && (P2 = y3);
        else {
          var k2, F;
          O["static"] = l4, O["private"] = f4, f4 ? 2 === o7 ? k2 = function k3(e8) {
            return m2(e8), w2.value;
          } : (o7 < 4 && (k2 = i5(w2, "get", m2)), 3 !== o7 && (F = i5(w2, "set", m2))) : (k2 = function k3(e8) {
            return e8[n6];
          }, (o7 < 2 || 4 === o7) && (F = function F2(e8, t5) {
            e8[n6] = t5;
          }));
          var N2 = O.access = { has: f4 ? h3.bind() : function(e8) {
            return n6 in e8;
          } };
          if (k2 && (N2.get = k2), F && (N2.set = F), P2 = D2.call(E2, d3 ? { get: w2.get, set: w2.set } : w2[A2], O), d3) {
            if ("object" == _typeof(P2) && P2) (y3 = s4(P2.get, "accessor.get")) && (w2.get = y3), (y3 = s4(P2.set, "accessor.set")) && (w2.set = y3), (y3 = s4(P2.init, "accessor.init")) && S3.push(y3);
            else if (void 0 !== P2) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s4(P2, (p4 ? "field" : "method") + " decorators", "return") && (p4 ? S3.push(P2) : w2[A2] = P2);
        }
      } finally {
        I2.v = true;
      }
    }
    return (p4 || d3) && u4.push(function(e8, t5) {
      for (var r8 = S3.length - 1; r8 >= 0; r8--) t5 = S3[r8].call(e8, t5);
      return t5;
    }), p4 || b3 || (f4 ? d3 ? u4.push(i5(w2, "get"), i5(w2, "set")) : u4.push(2 === o7 ? w2[A2] : i5.call.bind(w2[A2])) : Object.defineProperty(e7, n6, w2)), P2;
  }
  function u3(e7, t4) {
    return Object.defineProperty(e7, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: true, enumerable: true, value: t4 });
  }
  if (arguments.length >= 6) var l3 = a3[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  var f3 = Object.create(null == l3 ? null : l3), p3 = (function(e7, t4, r7, n6) {
    var o7, a4, i6 = [], s5 = function s6(t5) {
      return _checkInRHS$8(t5) === e7;
    }, u4 = /* @__PURE__ */ new Map();
    function l4(e8) {
      e8 && i6.push(c4.bind(null, e8));
    }
    for (var f4 = 0; f4 < t4.length; f4++) {
      var p4 = t4[f4];
      if (Array.isArray(p4)) {
        var d3 = p4[1], h3 = p4[2], m2 = p4.length > 3, y3 = 16 & d3, v2 = !!(8 & d3), g2 = 0 == (d3 &= 7), b3 = h3 + "/" + v2;
        if (!g2 && !m2) {
          var w2 = u4.get(b3);
          if (true === w2 || 3 === w2 && 4 !== d3 || 4 === w2 && 3 !== d3) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h3);
          u4.set(b3, !(d3 > 2) || d3);
        }
        applyDec(v2 ? e7 : e7.prototype, p4, y3, m2 ? "#" + h3 : _toPropertyKey$8(h3), d3, n6, v2 ? a4 = a4 || [] : o7 = o7 || [], i6, v2, m2, g2, 1 === d3, v2 && m2 ? s5 : r7);
      }
    }
    return l4(o7), l4(a4), i6;
  })(e6, t3, o6, f3);
  return r6.length || u3(e6, f3), { e: p3, get c() {
    var t4 = [];
    return r6.length && [u3(applyDec(e6, [r6], n5, e6.name, 5, f3, t4), f3), c4.bind(null, t4, e6)];
  } };
}
function _toPropertyKey$8(t3) {
  var i5 = _toPrimitive$8(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive$8(t3, r6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var e6 = t3[Symbol.toPrimitive];
  if (void 0 !== e6) {
    var i5 = e6.call(t3, r6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r6 ? String : Number)(t3);
}
function _setFunctionName$8(e6, t3, n5) {
  "symbol" == _typeof(t3) && (t3 = (t3 = t3.description) ? "[" + t3 + "]" : "");
  try {
    Object.defineProperty(e6, "name", { configurable: true, value: n5 ? n5 + " " + t3 : t3 });
  } catch (e7) {
  }
  return e6;
}
function _checkInRHS$8(e6) {
  if (Object(e6) !== e6) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e6 ? _typeof(e6) : "null"));
  return e6;
}
var _A$8 = /* @__PURE__ */ new WeakMap();
_ref$8 = (_dataDecs = n4({
  type: Object
}), "data");
var SocketElement = /* @__PURE__ */ (function(_LitElement) {
  function SocketElement2() {
    var _this;
    _classCallCheck(this, SocketElement2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$a(this, SocketElement2, [].concat(args));
    _classPrivateFieldInitSpec$8(_this, _A$8, (_initProto$8(_this), _init_data(_this, null)));
    return _this;
  }
  _inherits(SocketElement2, _LitElement);
  return _createClass(SocketElement2, [{
    key: _ref$8,
    get: function get() {
      return _classPrivateFieldGet$8(_A$8, this);
    }
  }, {
    key: "data",
    set: function set(v2) {
      _classPrivateFieldSet$8(_A$8, this, v2);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$data;
      return b2(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(['\n      <div class="hoverable">\n        <div class="styles" title="', '"></div>\n      </div>\n    '])), (_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.name);
    }
  }]);
})(i4);
_SocketElement = SocketElement;
var _applyDecs$e$8 = _slicedToArray(_applyDecs$8(_SocketElement, [[_dataDecs, 1, "data"]], [], 0, void 0, i4).e, 2);
_init_data = _applyDecs$e$8[0];
_initProto$8 = _applyDecs$e$8[1];
_defineProperty(SocketElement, "styles", i(_templateObject2$a || (_templateObject2$a = _taggedTemplateLiteral(["\n    :host {\n      --socket-color: #96b38a;\n      --socket-size: 24px;\n      --socket-margin: 6px;\n      --border-width: 1px;\n      --hover-border-width: 4px;\n      --multiple-border-color: yellow;\n    }\n\n    .styles {\n      display: inline-block;\n      cursor: pointer;\n      border: var(--border-width) solid white;\n      border-radius: calc(var(--socket-size) / 2);\n      width: var(--socket-size);\n      height: var(--socket-size);\n      vertical-align: middle;\n      background: var(--socket-color);\n      z-index: 2;\n      box-sizing: border-box;\n    }\n\n    .styles:hover {\n      border-width: var(--hover-border-width);\n    }\n\n    .multiple {\n      border-color: var(--multiple-border-color);\n    }\n\n    .hoverable {\n      border-radius: calc((var(--socket-size) + var(--socket-margin) * 2) / 2);\n      padding: var(--socket-margin);\n    }\n\n    .hoverable:hover .styles {\n      border-width: var(--hover-border-width);\n    }\n  "]))));
var _templateObject$c;
var _templateObject2$9;
var _templateObject3$4;
var _templateObject4$2;
var _templateObject5;
function ownKeys$22(e6, r6) {
  var t3 = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e6);
    r6 && (o6 = o6.filter(function(r7) {
      return Object.getOwnPropertyDescriptor(e6, r7).enumerable;
    })), t3.push.apply(t3, o6);
  }
  return t3;
}
function _objectSpread$22(e6) {
  for (var r6 = 1; r6 < arguments.length; r6++) {
    var t3 = null != arguments[r6] ? arguments[r6] : {};
    r6 % 2 ? ownKeys$22(Object(t3), true).forEach(function(r7) {
      _defineProperty(e6, r7, t3[r7]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(t3)) : ownKeys$22(Object(t3)).forEach(function(r7) {
      Object.defineProperty(e6, r7, Object.getOwnPropertyDescriptor(t3, r7));
    });
  }
  return e6;
}
customElements.define("rete-connection-wrapper", ConnectionWrapperElement);
customElements.define("rete-connection", ConnectionElement);
customElements.define("rete-ref", RefElement);
customElements.define("rete-socket", SocketElement);
customElements.define("rete-node", NodeElement);
customElements.define("rete-control", ControlElement);
function setup$3(props) {
  var positionWatcher = typeof (props === null || props === void 0 ? void 0 : props.socketPositionWatcher) === "undefined" ? getDOMSocketPosition() : props.socketPositionWatcher;
  var _ref2 = (props === null || props === void 0 ? void 0 : props.customize) || {}, node = _ref2.node, connection = _ref2.connection, socket = _ref2.socket, control = _ref2.control;
  return {
    attach: function attach(plugin) {
      positionWatcher.attach(plugin);
    },
    update: function update(context, plugin) {
      var payload = context.data.payload;
      var parent = plugin.parentScope();
      if (!parent) throw new Error("parent");
      var emit = parent.emit.bind(parent);
      if (context.data.type === "node") {
        return {
          data: payload,
          emit
        };
      } else if (context.data.type === "connection") {
        var _context$data = context.data, start = _context$data.start, end = _context$data.end;
        return _objectSpread$22(_objectSpread$22({
          data: payload
        }, start ? {
          start
        } : {}), end ? {
          end
        } : {});
      }
      return {
        data: payload
      };
    },
    // eslint-disable-next-line max-statements
    render: function render(context, plugin) {
      if (context.data.type === "node") {
        var parent = plugin.parentScope();
        var emit = function emit2(data) {
          return void parent.emit(data);
        };
        return node ? node(context.data)({
          emit
        }) : b2(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["<rete-node .data=", " .emit=", "></rete-node>"])), context.data.payload, emit);
      }
      if (context.data.type === "connection") {
        var _data = context.data;
        var payload = _data.payload;
        var sourceOutput = payload.sourceOutput, targetInput = payload.targetInput, source = payload.source, target = payload.target;
        var component = function component2(path, start, end) {
          return connection ? connection(_data)({
            path,
            start,
            end
          }) : b2(_templateObject2$9 || (_templateObject2$9 = _taggedTemplateLiteral(["<rete-connection .path=", " .start=", " .end=", "></rete-connection>"])), path, start, end);
        };
        return b2(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["<rete-connection-wrapper\n          .start=", "\n          .end=", "\n          .path=", "\n  .component=", "\n  ></rete-connection>"])), context.data.start || function(change) {
          return positionWatcher.listen(source, "output", sourceOutput, change);
        }, context.data.end || function(change) {
          return positionWatcher.listen(target, "input", targetInput, change);
        }, /* @__PURE__ */ (function() {
          var _ref22 = _asyncToGenerator(/* @__PURE__ */ import_regenerator5.default.mark(function _callee(start, end) {
            var response, _response$data, path, points, curvature;
            return import_regenerator5.default.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return plugin.emit({
                    type: "connectionpath",
                    data: {
                      payload,
                      points: [start, end]
                    }
                  });
                case 2:
                  response = _context.sent;
                  if (response) {
                    _context.next = 5;
                    break;
                  }
                  return _context.abrupt("return", "");
                case 5:
                  _response$data = response.data, path = _response$data.path, points = _response$data.points;
                  curvature = 0.3;
                  if (!(!path && points.length !== 2)) {
                    _context.next = 9;
                    break;
                  }
                  throw new Error("cannot render connection with a custom number of points");
                case 9:
                  if (path) {
                    _context.next = 11;
                    break;
                  }
                  return _context.abrupt("return", payload.isLoop ? loopConnectionPath(points, curvature, 120) : classicConnectionPath(points, curvature));
                case 11:
                  return _context.abrupt("return", path);
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function(_x, _x2) {
            return _ref22.apply(this, arguments);
          };
        })(), component);
      } else if (context.data.type === "socket") {
        return socket ? socket(context.data)() : b2(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["<rete-socket .data=", "></rete-socket>"])), context.data.payload);
      } else if (context.data.type === "control") {
        return control ? control(context.data)() : b2(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<rete-control .data=", "></rete-control>"])), context.data.payload);
      }
      return null;
    }
  };
}
var index$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  setup: setup$3
});
var _templateObject$b;
var _templateObject2$8;
function _callSuper$9(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$9() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$9() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$9 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
var BlockElement = /* @__PURE__ */ (function(_LitElement) {
  function BlockElement2() {
    _classCallCheck(this, BlockElement2);
    return _callSuper$9(this, BlockElement2, arguments);
  }
  _inherits(BlockElement2, _LitElement);
  return _createClass(BlockElement2, [{
    key: "render",
    value: function render() {
      return b2(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["\n      <slot></slot>\n    "])));
    }
  }]);
})(i4);
_defineProperty(BlockElement, "styles", i(_templateObject2$8 || (_templateObject2$8 = _taggedTemplateLiteral(["\n    :host {\n      color: #fff;\n      padding: 4px;\n      border-bottom: 1px solid var(--context-color-dark);\n      background-color: var(--context-color);\n      cursor: pointer;\n      box-sizing: border-box;\n      width: 100%;\n      position: relative;\n      display: block;\n    }\n\n    :host(:first-child) {\n      border-top-left-radius: var(--context-menu-round);\n      border-top-right-radius: var(--context-menu-round);\n    }\n\n    :host(:last-child) {\n      border-bottom-left-radius: var(--context-menu-round);\n      border-bottom-right-radius: var(--context-menu-round);\n    }\n\n    :host(:hover) {\n      background-color: var(--context-color-light);\n    }\n  "]))));
function debounce(delay, cb) {
  return {
    timeout: null,
    cancel: function cancel() {
      if (this.timeout) {
        window.clearTimeout(this.timeout);
        this.timeout = null;
      }
    },
    call: function call() {
      this.timeout = window.setTimeout(function() {
        cb();
      }, delay);
    }
  };
}
var _ItemElement;
var _templateObject$a;
var _templateObject2$7;
var _templateObject3$3;
var _templateObject4$1;
var _initProto$7;
var _subitemsDecs;
var _init_subitems;
var _delayDecs$1;
var _init_delay$1;
var _visibleSubitemsDecs;
var _init_visibleSubitems;
var _ref$7;
function _callSuper$8(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$8() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$8() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$8 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _superPropGet$3(t3, e6, o6, r6) {
  var p3 = _get(_getPrototypeOf(1 & r6 ? t3.prototype : t3), e6, o6);
  return 2 & r6 && "function" == typeof p3 ? function(t4) {
    return p3.apply(o6, t4);
  } : p3;
}
function _classPrivateFieldInitSpec$7(e6, t3, a3) {
  _checkPrivateRedeclaration$7(e6, t3), t3.set(e6, a3);
}
function _checkPrivateRedeclaration$7(e6, t3) {
  if (t3.has(e6)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet$7(s4, a3, r6) {
  return s4.set(_assertClassBrand$7(s4, a3), r6), r6;
}
function _classPrivateFieldGet$7(s4, a3) {
  return s4.get(_assertClassBrand$7(s4, a3));
}
function _assertClassBrand$7(e6, t3, n5) {
  if ("function" == typeof e6 ? e6 === t3 : e6.has(t3)) return arguments.length < 3 ? t3 : n5;
  throw new TypeError("Private element is not present on this object");
}
function _applyDecs$7(e6, t3, r6, n5, o6, a3) {
  function i5(e7, t4, r7) {
    return function(n6, o7) {
      return r7 && r7(n6), e7[t4].call(n6, o7);
    };
  }
  function c4(e7, t4) {
    for (var r7 = 0; r7 < e7.length; r7++) e7[r7].call(t4);
    return t4;
  }
  function s4(e7, t4, r7, n6) {
    if ("function" != typeof e7 && (n6 || void 0 !== e7)) throw new TypeError(t4 + " must " + (r7 || "be") + " a function" + (n6 ? "" : " or undefined"));
    return e7;
  }
  function applyDec(e7, t4, r7, n6, o7, a4, c5, u4, l4, f4, p4, d3, h3) {
    function m2(e8) {
      if (!h3(e8)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y3, v2 = t4[0], g2 = t4[3], b3 = !u4;
    if (!b3) {
      r7 || Array.isArray(v2) || (v2 = [v2]);
      var w2 = {}, S3 = [], A2 = 3 === o7 ? "get" : 4 === o7 || d3 ? "set" : "value";
      f4 ? (p4 || d3 ? w2 = { get: _setFunctionName$7(function() {
        return g2(this);
      }, n6, "get"), set: function set(e8) {
        t4[4](this, e8);
      } } : w2[A2] = g2, p4 || _setFunctionName$7(w2[A2], n6, 2 === o7 ? "" : A2)) : p4 || (w2 = Object.getOwnPropertyDescriptor(e7, n6));
    }
    for (var P2 = e7, j = v2.length - 1; j >= 0; j -= r7 ? 2 : 1) {
      var D2 = v2[j], E2 = r7 ? v2[j - 1] : void 0, I2 = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o7], name: n6, metadata: a4, addInitializer: function(e8, t5) {
        if (e8.v) throw Error("attempted to call addInitializer after decoration was finished");
        s4(t5, "An initializer", "be", true), c5.push(t5);
      }.bind(null, I2) };
      try {
        if (b3) (y3 = s4(D2.call(E2, P2, O), "class decorators", "return")) && (P2 = y3);
        else {
          var k2, F;
          O["static"] = l4, O["private"] = f4, f4 ? 2 === o7 ? k2 = function k3(e8) {
            return m2(e8), w2.value;
          } : (o7 < 4 && (k2 = i5(w2, "get", m2)), 3 !== o7 && (F = i5(w2, "set", m2))) : (k2 = function k3(e8) {
            return e8[n6];
          }, (o7 < 2 || 4 === o7) && (F = function F2(e8, t5) {
            e8[n6] = t5;
          }));
          var N2 = O.access = { has: f4 ? h3.bind() : function(e8) {
            return n6 in e8;
          } };
          if (k2 && (N2.get = k2), F && (N2.set = F), P2 = D2.call(E2, d3 ? { get: w2.get, set: w2.set } : w2[A2], O), d3) {
            if ("object" == _typeof(P2) && P2) (y3 = s4(P2.get, "accessor.get")) && (w2.get = y3), (y3 = s4(P2.set, "accessor.set")) && (w2.set = y3), (y3 = s4(P2.init, "accessor.init")) && S3.push(y3);
            else if (void 0 !== P2) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s4(P2, (p4 ? "field" : "method") + " decorators", "return") && (p4 ? S3.push(P2) : w2[A2] = P2);
        }
      } finally {
        I2.v = true;
      }
    }
    return (p4 || d3) && u4.push(function(e8, t5) {
      for (var r8 = S3.length - 1; r8 >= 0; r8--) t5 = S3[r8].call(e8, t5);
      return t5;
    }), p4 || b3 || (f4 ? d3 ? u4.push(i5(w2, "get"), i5(w2, "set")) : u4.push(2 === o7 ? w2[A2] : i5.call.bind(w2[A2])) : Object.defineProperty(e7, n6, w2)), P2;
  }
  function u3(e7, t4) {
    return Object.defineProperty(e7, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: true, enumerable: true, value: t4 });
  }
  if (arguments.length >= 6) var l3 = a3[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  var f3 = Object.create(null == l3 ? null : l3), p3 = (function(e7, t4, r7, n6) {
    var o7, a4, i6 = [], s5 = function s6(t5) {
      return _checkInRHS$7(t5) === e7;
    }, u4 = /* @__PURE__ */ new Map();
    function l4(e8) {
      e8 && i6.push(c4.bind(null, e8));
    }
    for (var f4 = 0; f4 < t4.length; f4++) {
      var p4 = t4[f4];
      if (Array.isArray(p4)) {
        var d3 = p4[1], h3 = p4[2], m2 = p4.length > 3, y3 = 16 & d3, v2 = !!(8 & d3), g2 = 0 == (d3 &= 7), b3 = h3 + "/" + v2;
        if (!g2 && !m2) {
          var w2 = u4.get(b3);
          if (true === w2 || 3 === w2 && 4 !== d3 || 4 === w2 && 3 !== d3) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h3);
          u4.set(b3, !(d3 > 2) || d3);
        }
        applyDec(v2 ? e7 : e7.prototype, p4, y3, m2 ? "#" + h3 : _toPropertyKey$7(h3), d3, n6, v2 ? a4 = a4 || [] : o7 = o7 || [], i6, v2, m2, g2, 1 === d3, v2 && m2 ? s5 : r7);
      }
    }
    return l4(o7), l4(a4), i6;
  })(e6, t3, o6, f3);
  return r6.length || u3(e6, f3), { e: p3, get c() {
    var t4 = [];
    return r6.length && [u3(applyDec(e6, [r6], n5, e6.name, 5, f3, t4), f3), c4.bind(null, t4, e6)];
  } };
}
function _toPropertyKey$7(t3) {
  var i5 = _toPrimitive$7(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive$7(t3, r6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var e6 = t3[Symbol.toPrimitive];
  if (void 0 !== e6) {
    var i5 = e6.call(t3, r6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r6 ? String : Number)(t3);
}
function _setFunctionName$7(e6, t3, n5) {
  "symbol" == _typeof(t3) && (t3 = (t3 = t3.description) ? "[" + t3 + "]" : "");
  try {
    Object.defineProperty(e6, "name", { configurable: true, value: n5 ? n5 + " " + t3 : t3 });
  } catch (e7) {
  }
  return e6;
}
function _checkInRHS$7(e6) {
  if (Object(e6) !== e6) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e6 ? _typeof(e6) : "null"));
  return e6;
}
var _A$7 = /* @__PURE__ */ new WeakMap();
var _B$6 = /* @__PURE__ */ new WeakMap();
var _C$6 = /* @__PURE__ */ new WeakMap();
_ref$7 = (_subitemsDecs = n4({
  type: Array
}), _delayDecs$1 = n4({
  type: Number
}), _visibleSubitemsDecs = r5(), "subitems");
var ItemElement = /* @__PURE__ */ (function(_LitElement) {
  function ItemElement2() {
    var _this;
    _classCallCheck(this, ItemElement2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$8(this, ItemElement2, [].concat(args));
    _classPrivateFieldInitSpec$7(_this, _A$7, (_initProto$7(_this), _init_subitems(_this, [])));
    _classPrivateFieldInitSpec$7(_this, _B$6, _init_delay$1(_this, 0));
    _classPrivateFieldInitSpec$7(_this, _C$6, _init_visibleSubitems(_this, false));
    return _this;
  }
  _inherits(ItemElement2, _LitElement);
  return _createClass(ItemElement2, [{
    key: _ref$7,
    get: function get() {
      return _classPrivateFieldGet$7(_A$7, this);
    }
  }, {
    key: "subitems",
    set: function set(v2) {
      _classPrivateFieldSet$7(_A$7, this, v2);
    }
  }, {
    key: "delay",
    get: function get() {
      return _classPrivateFieldGet$7(_B$6, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$7(_B$6, this, v2);
    }
  }, {
    key: "visibleSubitems",
    get: function get() {
      return _classPrivateFieldGet$7(_C$6, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$7(_C$6, this, v2);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _superPropGet$3(ItemElement2, "connectedCallback", this, 3)([]);
      this.hide = debounce(this.delay, this.hideSubitems.bind(this));
    }
  }, {
    key: "hideSubitems",
    value: function hideSubitems() {
      this.visibleSubitems = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$subitems, _this2 = this;
      if ((_this$subitems = this.subitems) !== null && _this$subitems !== void 0 && _this$subitems.length) {
        this.classList.add("hasSubitems");
      } else {
        this.classList.remove("hasSubitems");
      }
      return b2(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(['\n      <div data-testid="context-menu-item">\n        <div\n          class="content"\n          @click="', '"\n          @wheel="', '"\n          @pointerover="', '"\n          @pointerleave="', '"\n          @pointerdown="', '"\n        >\n          <slot></slot>\n          ', "\n        </div>\n      </div>\n    "])), this.handleClick, this.stopEvent, this.handlePointerOver, this.handlePointerLeave, this.stopEvent, this.subitems && this.visibleSubitems ? b2(_templateObject2$7 || (_templateObject2$7 = _taggedTemplateLiteral(['\n                <div class="subitems">\n                  ', "\n                </div>\n              "])), this.subitems.map(function(item) {
        return b2(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(['\n                      <rete-context-menu-item\n                        .key="', '"\n                        .delay="', '"\n                        .subitems="', '"\n                        @select="', '"\n                        @hide="', '"\n                      >\n                        ', "\n                      </rete-context-menu-item>\n                    "])), item.key, _this2.delay, item.subitems, item.handler, _this2.handleHide, item.label);
      })) : "");
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      event.stopPropagation();
      this.dispatchEvent(new CustomEvent("select", {
        detail: event
      }));
      this.dispatchEvent(new CustomEvent("hide"));
    }
  }, {
    key: "stopEvent",
    value: function stopEvent(event) {
      event.stopPropagation();
    }
  }, {
    key: "handlePointerOver",
    value: function handlePointerOver() {
      this.hide.cancel();
      this.visibleSubitems = true;
    }
  }, {
    key: "handlePointerLeave",
    value: function handlePointerLeave() {
      this.hide.call();
    }
  }, {
    key: "handleHide",
    value: function handleHide() {
      this.dispatchEvent(new CustomEvent("hide"));
    }
  }]);
})(i4);
_ItemElement = ItemElement;
var _applyDecs$e$7 = _slicedToArray(_applyDecs$7(_ItemElement, [[_subitemsDecs, 1, "subitems"], [_delayDecs$1, 1, "delay"], [_visibleSubitemsDecs, 1, "visibleSubitems"]], [], 0, void 0, i4).e, 4);
_init_subitems = _applyDecs$e$7[0];
_init_delay$1 = _applyDecs$e$7[1];
_init_visibleSubitems = _applyDecs$e$7[2];
_initProto$7 = _applyDecs$e$7[3];
_defineProperty(ItemElement, "styles", [BlockElement.styles, i(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n      :host {\n        padding: 0;\n      }\n      .content {\n        padding: 4px;\n      }\n      :host(.hasSubitems):after {\n        content: '\u25BA';\n        position: absolute;\n        opacity: 0.6;\n        right: 5px;\n        top: 5px;\n        pointer-events: none;\n      }\n      .subitems {\n        position: absolute;\n        top: 0;\n        left: 100%;\n        width: var(--menu-width);\n      }\n    "])))]);
var _MenuElement;
var _templateObject$9;
var _templateObject2$6;
var _templateObject3$2;
var _templateObject4;
var _initProto$6;
var _itemsDecs;
var _init_items;
var _delayDecs;
var _init_delay;
var _searchBarDecs;
var _init_searchBar;
var _onHideDecs;
var _init_onHide;
var _filterDecs;
var _init_filter;
var _ref$6;
function _callSuper$7(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$7() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$7() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$7 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _superPropGet$2(t3, e6, o6, r6) {
  var p3 = _get(_getPrototypeOf(1 & r6 ? t3.prototype : t3), e6, o6);
  return 2 & r6 && "function" == typeof p3 ? function(t4) {
    return p3.apply(o6, t4);
  } : p3;
}
function _classPrivateFieldInitSpec$6(e6, t3, a3) {
  _checkPrivateRedeclaration$6(e6, t3), t3.set(e6, a3);
}
function _checkPrivateRedeclaration$6(e6, t3) {
  if (t3.has(e6)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet$6(s4, a3, r6) {
  return s4.set(_assertClassBrand$6(s4, a3), r6), r6;
}
function _classPrivateFieldGet$6(s4, a3) {
  return s4.get(_assertClassBrand$6(s4, a3));
}
function _assertClassBrand$6(e6, t3, n5) {
  if ("function" == typeof e6 ? e6 === t3 : e6.has(t3)) return arguments.length < 3 ? t3 : n5;
  throw new TypeError("Private element is not present on this object");
}
function _applyDecs$6(e6, t3, r6, n5, o6, a3) {
  function i5(e7, t4, r7) {
    return function(n6, o7) {
      return r7 && r7(n6), e7[t4].call(n6, o7);
    };
  }
  function c4(e7, t4) {
    for (var r7 = 0; r7 < e7.length; r7++) e7[r7].call(t4);
    return t4;
  }
  function s4(e7, t4, r7, n6) {
    if ("function" != typeof e7 && (n6 || void 0 !== e7)) throw new TypeError(t4 + " must " + (r7 || "be") + " a function" + (n6 ? "" : " or undefined"));
    return e7;
  }
  function applyDec(e7, t4, r7, n6, o7, a4, c5, u4, l4, f4, p4, d3, h3) {
    function m2(e8) {
      if (!h3(e8)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y3, v2 = t4[0], g2 = t4[3], b3 = !u4;
    if (!b3) {
      r7 || Array.isArray(v2) || (v2 = [v2]);
      var w2 = {}, S3 = [], A2 = 3 === o7 ? "get" : 4 === o7 || d3 ? "set" : "value";
      f4 ? (p4 || d3 ? w2 = { get: _setFunctionName$6(function() {
        return g2(this);
      }, n6, "get"), set: function set(e8) {
        t4[4](this, e8);
      } } : w2[A2] = g2, p4 || _setFunctionName$6(w2[A2], n6, 2 === o7 ? "" : A2)) : p4 || (w2 = Object.getOwnPropertyDescriptor(e7, n6));
    }
    for (var P2 = e7, j = v2.length - 1; j >= 0; j -= r7 ? 2 : 1) {
      var D2 = v2[j], E2 = r7 ? v2[j - 1] : void 0, I2 = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o7], name: n6, metadata: a4, addInitializer: function(e8, t5) {
        if (e8.v) throw Error("attempted to call addInitializer after decoration was finished");
        s4(t5, "An initializer", "be", true), c5.push(t5);
      }.bind(null, I2) };
      try {
        if (b3) (y3 = s4(D2.call(E2, P2, O), "class decorators", "return")) && (P2 = y3);
        else {
          var k2, F;
          O["static"] = l4, O["private"] = f4, f4 ? 2 === o7 ? k2 = function k3(e8) {
            return m2(e8), w2.value;
          } : (o7 < 4 && (k2 = i5(w2, "get", m2)), 3 !== o7 && (F = i5(w2, "set", m2))) : (k2 = function k3(e8) {
            return e8[n6];
          }, (o7 < 2 || 4 === o7) && (F = function F2(e8, t5) {
            e8[n6] = t5;
          }));
          var N2 = O.access = { has: f4 ? h3.bind() : function(e8) {
            return n6 in e8;
          } };
          if (k2 && (N2.get = k2), F && (N2.set = F), P2 = D2.call(E2, d3 ? { get: w2.get, set: w2.set } : w2[A2], O), d3) {
            if ("object" == _typeof(P2) && P2) (y3 = s4(P2.get, "accessor.get")) && (w2.get = y3), (y3 = s4(P2.set, "accessor.set")) && (w2.set = y3), (y3 = s4(P2.init, "accessor.init")) && S3.push(y3);
            else if (void 0 !== P2) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s4(P2, (p4 ? "field" : "method") + " decorators", "return") && (p4 ? S3.push(P2) : w2[A2] = P2);
        }
      } finally {
        I2.v = true;
      }
    }
    return (p4 || d3) && u4.push(function(e8, t5) {
      for (var r8 = S3.length - 1; r8 >= 0; r8--) t5 = S3[r8].call(e8, t5);
      return t5;
    }), p4 || b3 || (f4 ? d3 ? u4.push(i5(w2, "get"), i5(w2, "set")) : u4.push(2 === o7 ? w2[A2] : i5.call.bind(w2[A2])) : Object.defineProperty(e7, n6, w2)), P2;
  }
  function u3(e7, t4) {
    return Object.defineProperty(e7, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: true, enumerable: true, value: t4 });
  }
  if (arguments.length >= 6) var l3 = a3[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  var f3 = Object.create(null == l3 ? null : l3), p3 = (function(e7, t4, r7, n6) {
    var o7, a4, i6 = [], s5 = function s6(t5) {
      return _checkInRHS$6(t5) === e7;
    }, u4 = /* @__PURE__ */ new Map();
    function l4(e8) {
      e8 && i6.push(c4.bind(null, e8));
    }
    for (var f4 = 0; f4 < t4.length; f4++) {
      var p4 = t4[f4];
      if (Array.isArray(p4)) {
        var d3 = p4[1], h3 = p4[2], m2 = p4.length > 3, y3 = 16 & d3, v2 = !!(8 & d3), g2 = 0 == (d3 &= 7), b3 = h3 + "/" + v2;
        if (!g2 && !m2) {
          var w2 = u4.get(b3);
          if (true === w2 || 3 === w2 && 4 !== d3 || 4 === w2 && 3 !== d3) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h3);
          u4.set(b3, !(d3 > 2) || d3);
        }
        applyDec(v2 ? e7 : e7.prototype, p4, y3, m2 ? "#" + h3 : _toPropertyKey$6(h3), d3, n6, v2 ? a4 = a4 || [] : o7 = o7 || [], i6, v2, m2, g2, 1 === d3, v2 && m2 ? s5 : r7);
      }
    }
    return l4(o7), l4(a4), i6;
  })(e6, t3, o6, f3);
  return r6.length || u3(e6, f3), { e: p3, get c() {
    var t4 = [];
    return r6.length && [u3(applyDec(e6, [r6], n5, e6.name, 5, f3, t4), f3), c4.bind(null, t4, e6)];
  } };
}
function _toPropertyKey$6(t3) {
  var i5 = _toPrimitive$6(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive$6(t3, r6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var e6 = t3[Symbol.toPrimitive];
  if (void 0 !== e6) {
    var i5 = e6.call(t3, r6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r6 ? String : Number)(t3);
}
function _setFunctionName$6(e6, t3, n5) {
  "symbol" == _typeof(t3) && (t3 = (t3 = t3.description) ? "[" + t3 + "]" : "");
  try {
    Object.defineProperty(e6, "name", { configurable: true, value: n5 ? n5 + " " + t3 : t3 });
  } catch (e7) {
  }
  return e6;
}
function _checkInRHS$6(e6) {
  if (Object(e6) !== e6) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e6 ? _typeof(e6) : "null"));
  return e6;
}
var _A$6 = /* @__PURE__ */ new WeakMap();
var _B$5 = /* @__PURE__ */ new WeakMap();
var _C$5 = /* @__PURE__ */ new WeakMap();
var _D$4 = /* @__PURE__ */ new WeakMap();
var _E$3 = /* @__PURE__ */ new WeakMap();
_ref$6 = (_itemsDecs = n4({
  type: Array
}), _delayDecs = n4({
  type: Number
}), _searchBarDecs = n4({
  type: Boolean
}), _onHideDecs = n4({
  type: Function
}), _filterDecs = r5(), "items");
var MenuElement = /* @__PURE__ */ (function(_LitElement) {
  function MenuElement2() {
    var _this;
    _classCallCheck(this, MenuElement2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$7(this, MenuElement2, [].concat(args));
    _classPrivateFieldInitSpec$6(_this, _A$6, (_initProto$6(_this), _init_items(_this, [])));
    _classPrivateFieldInitSpec$6(_this, _B$5, _init_delay(_this, 0));
    _classPrivateFieldInitSpec$6(_this, _C$5, _init_searchBar(_this, false));
    _classPrivateFieldInitSpec$6(_this, _D$4, _init_onHide(_this, function() {
      return null;
    }));
    _classPrivateFieldInitSpec$6(_this, _E$3, _init_filter(_this, ""));
    return _this;
  }
  _inherits(MenuElement2, _LitElement);
  return _createClass(MenuElement2, [{
    key: _ref$6,
    get: function get() {
      return _classPrivateFieldGet$6(_A$6, this);
    }
  }, {
    key: "items",
    set: function set(v2) {
      _classPrivateFieldSet$6(_A$6, this, v2);
    }
  }, {
    key: "delay",
    get: function get() {
      return _classPrivateFieldGet$6(_B$5, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$6(_B$5, this, v2);
    }
  }, {
    key: "searchBar",
    get: function get() {
      return _classPrivateFieldGet$6(_C$5, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$6(_C$5, this, v2);
    }
  }, {
    key: "onHide",
    get: function get() {
      return _classPrivateFieldGet$6(_D$4, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$6(_D$4, this, v2);
    }
  }, {
    key: "filter",
    get: function get() {
      return _classPrivateFieldGet$6(_E$3, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$6(_E$3, this, v2);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _superPropGet$2(MenuElement2, "connectedCallback", this, 3)([]);
      this.hide = debounce(this.delay, this.onHide);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this2 = this;
      this.addEventListener("mouseover", function() {
        _this2.hide.cancel();
      });
      this.addEventListener("mouseleave", function() {
        _this2.hide.call();
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _superPropGet$2(MenuElement2, "disconnectedCallback", this, 3)([]);
      if (this.hide) this.hide.cancel();
    }
  }, {
    key: "getItems",
    value: function getItems() {
      var filterRegexp = new RegExp(this.filter, "i");
      return this.items.filter(function(item) {
        return item.label.match(filterRegexp);
      });
    }
  }, {
    key: "handleFilterChange",
    value: function handleFilterChange(event) {
      this.filter = event.target.value;
      this.requestUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      return b2(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(['\n      <style>\n        :host {\n          --context-color: rgba(110, 136, 255, 0.8);\n          --context-color-light: rgba(130, 153, 255, 0.8);\n          --context-color-dark: rgba(69, 103, 255, 0.8);\n          --context-menu-round: 5px;\n          --menu-width: 120px;\n        }\n      </style>\n      <div class="menu" data-testid="context-menu">\n        ', "\n        ", "\n      </div>\n    "])), this.searchBar ? b2(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteral(["<rete-context-menu-block>\n                 <rete-context-menu-search .text=", " @change=", " />\n            </rete-context-menu-block>"])), this.filter, this.handleFilterChange) : "", this.getItems().map(function(item) {
        return b2(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n          <rete-context-menu-item\n            .key=", "\n            @select=", "\n            .delay=", "\n            @hide=", "\n            .subitems=", '\n            class="first"\n          >\n            ', "\n          </rete-context-menu-item>\n        "])), item.key, item.handler, _this3.delay, _this3.onHide, item.subitems, item.label);
      }));
    }
  }]);
})(i4);
_MenuElement = MenuElement;
var _applyDecs$e$6 = _slicedToArray(_applyDecs$6(_MenuElement, [[_itemsDecs, 1, "items"], [_delayDecs, 1, "delay"], [_searchBarDecs, 1, "searchBar"], [_onHideDecs, 1, "onHide"], [_filterDecs, 1, "filter"]], [], 0, void 0, i4).e, 6);
_init_items = _applyDecs$e$6[0];
_init_delay = _applyDecs$e$6[1];
_init_searchBar = _applyDecs$e$6[2];
_init_onHide = _applyDecs$e$6[3];
_init_filter = _applyDecs$e$6[4];
_initProto$6 = _applyDecs$e$6[5];
_defineProperty(MenuElement, "styles", i(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    .menu {\n      padding: 10px;\n      width: var(--menu-width);\n      margin-top: -20px;\n      margin-left: calc(-1 * var(--menu-width) / 2);\n    }\n  "]))));
var _SearchElement;
var _templateObject$8;
var _templateObject2$5;
var _initProto$5;
var _textDecs;
var _init_text;
var _ref$5;
function _callSuper$6(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$6() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$6() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$6 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _classPrivateFieldInitSpec$5(e6, t3, a3) {
  _checkPrivateRedeclaration$5(e6, t3), t3.set(e6, a3);
}
function _checkPrivateRedeclaration$5(e6, t3) {
  if (t3.has(e6)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet$5(s4, a3, r6) {
  return s4.set(_assertClassBrand$5(s4, a3), r6), r6;
}
function _classPrivateFieldGet$5(s4, a3) {
  return s4.get(_assertClassBrand$5(s4, a3));
}
function _assertClassBrand$5(e6, t3, n5) {
  if ("function" == typeof e6 ? e6 === t3 : e6.has(t3)) return arguments.length < 3 ? t3 : n5;
  throw new TypeError("Private element is not present on this object");
}
function _applyDecs$5(e6, t3, r6, n5, o6, a3) {
  function i5(e7, t4, r7) {
    return function(n6, o7) {
      return r7 && r7(n6), e7[t4].call(n6, o7);
    };
  }
  function c4(e7, t4) {
    for (var r7 = 0; r7 < e7.length; r7++) e7[r7].call(t4);
    return t4;
  }
  function s4(e7, t4, r7, n6) {
    if ("function" != typeof e7 && (n6 || void 0 !== e7)) throw new TypeError(t4 + " must " + (r7 || "be") + " a function" + (n6 ? "" : " or undefined"));
    return e7;
  }
  function applyDec(e7, t4, r7, n6, o7, a4, c5, u4, l4, f4, p4, d3, h3) {
    function m2(e8) {
      if (!h3(e8)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y3, v2 = t4[0], g2 = t4[3], b3 = !u4;
    if (!b3) {
      r7 || Array.isArray(v2) || (v2 = [v2]);
      var w2 = {}, S3 = [], A2 = 3 === o7 ? "get" : 4 === o7 || d3 ? "set" : "value";
      f4 ? (p4 || d3 ? w2 = { get: _setFunctionName$5(function() {
        return g2(this);
      }, n6, "get"), set: function set(e8) {
        t4[4](this, e8);
      } } : w2[A2] = g2, p4 || _setFunctionName$5(w2[A2], n6, 2 === o7 ? "" : A2)) : p4 || (w2 = Object.getOwnPropertyDescriptor(e7, n6));
    }
    for (var P2 = e7, j = v2.length - 1; j >= 0; j -= r7 ? 2 : 1) {
      var D2 = v2[j], E2 = r7 ? v2[j - 1] : void 0, I2 = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o7], name: n6, metadata: a4, addInitializer: function(e8, t5) {
        if (e8.v) throw Error("attempted to call addInitializer after decoration was finished");
        s4(t5, "An initializer", "be", true), c5.push(t5);
      }.bind(null, I2) };
      try {
        if (b3) (y3 = s4(D2.call(E2, P2, O), "class decorators", "return")) && (P2 = y3);
        else {
          var k2, F;
          O["static"] = l4, O["private"] = f4, f4 ? 2 === o7 ? k2 = function k3(e8) {
            return m2(e8), w2.value;
          } : (o7 < 4 && (k2 = i5(w2, "get", m2)), 3 !== o7 && (F = i5(w2, "set", m2))) : (k2 = function k3(e8) {
            return e8[n6];
          }, (o7 < 2 || 4 === o7) && (F = function F2(e8, t5) {
            e8[n6] = t5;
          }));
          var N2 = O.access = { has: f4 ? h3.bind() : function(e8) {
            return n6 in e8;
          } };
          if (k2 && (N2.get = k2), F && (N2.set = F), P2 = D2.call(E2, d3 ? { get: w2.get, set: w2.set } : w2[A2], O), d3) {
            if ("object" == _typeof(P2) && P2) (y3 = s4(P2.get, "accessor.get")) && (w2.get = y3), (y3 = s4(P2.set, "accessor.set")) && (w2.set = y3), (y3 = s4(P2.init, "accessor.init")) && S3.push(y3);
            else if (void 0 !== P2) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s4(P2, (p4 ? "field" : "method") + " decorators", "return") && (p4 ? S3.push(P2) : w2[A2] = P2);
        }
      } finally {
        I2.v = true;
      }
    }
    return (p4 || d3) && u4.push(function(e8, t5) {
      for (var r8 = S3.length - 1; r8 >= 0; r8--) t5 = S3[r8].call(e8, t5);
      return t5;
    }), p4 || b3 || (f4 ? d3 ? u4.push(i5(w2, "get"), i5(w2, "set")) : u4.push(2 === o7 ? w2[A2] : i5.call.bind(w2[A2])) : Object.defineProperty(e7, n6, w2)), P2;
  }
  function u3(e7, t4) {
    return Object.defineProperty(e7, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: true, enumerable: true, value: t4 });
  }
  if (arguments.length >= 6) var l3 = a3[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  var f3 = Object.create(null == l3 ? null : l3), p3 = (function(e7, t4, r7, n6) {
    var o7, a4, i6 = [], s5 = function s6(t5) {
      return _checkInRHS$5(t5) === e7;
    }, u4 = /* @__PURE__ */ new Map();
    function l4(e8) {
      e8 && i6.push(c4.bind(null, e8));
    }
    for (var f4 = 0; f4 < t4.length; f4++) {
      var p4 = t4[f4];
      if (Array.isArray(p4)) {
        var d3 = p4[1], h3 = p4[2], m2 = p4.length > 3, y3 = 16 & d3, v2 = !!(8 & d3), g2 = 0 == (d3 &= 7), b3 = h3 + "/" + v2;
        if (!g2 && !m2) {
          var w2 = u4.get(b3);
          if (true === w2 || 3 === w2 && 4 !== d3 || 4 === w2 && 3 !== d3) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h3);
          u4.set(b3, !(d3 > 2) || d3);
        }
        applyDec(v2 ? e7 : e7.prototype, p4, y3, m2 ? "#" + h3 : _toPropertyKey$5(h3), d3, n6, v2 ? a4 = a4 || [] : o7 = o7 || [], i6, v2, m2, g2, 1 === d3, v2 && m2 ? s5 : r7);
      }
    }
    return l4(o7), l4(a4), i6;
  })(e6, t3, o6, f3);
  return r6.length || u3(e6, f3), { e: p3, get c() {
    var t4 = [];
    return r6.length && [u3(applyDec(e6, [r6], n5, e6.name, 5, f3, t4), f3), c4.bind(null, t4, e6)];
  } };
}
function _toPropertyKey$5(t3) {
  var i5 = _toPrimitive$5(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive$5(t3, r6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var e6 = t3[Symbol.toPrimitive];
  if (void 0 !== e6) {
    var i5 = e6.call(t3, r6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r6 ? String : Number)(t3);
}
function _setFunctionName$5(e6, t3, n5) {
  "symbol" == _typeof(t3) && (t3 = (t3 = t3.description) ? "[" + t3 + "]" : "");
  try {
    Object.defineProperty(e6, "name", { configurable: true, value: n5 ? n5 + " " + t3 : t3 });
  } catch (e7) {
  }
  return e6;
}
function _checkInRHS$5(e6) {
  if (Object(e6) !== e6) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e6 ? _typeof(e6) : "null"));
  return e6;
}
var _A$5 = /* @__PURE__ */ new WeakMap();
_ref$5 = (_textDecs = r5(), "properties");
var SearchElement = /* @__PURE__ */ (function(_LitElement) {
  function SearchElement2() {
    var _this;
    _classCallCheck(this, SearchElement2);
    _this = _callSuper$6(this, SearchElement2);
    _classPrivateFieldInitSpec$5(_this, _A$5, (_initProto$5(_this), _init_text(_this, "")));
    _this.text = "";
    return _this;
  }
  _inherits(SearchElement2, _LitElement);
  return _createClass(SearchElement2, [{
    key: "text",
    get: function get() {
      return _classPrivateFieldGet$5(_A$5, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$5(_A$5, this, v2);
    }
  }, {
    key: "handleInput",
    value: function handleInput(event) {
      this.text = event.target.value;
      var newEvent = new InputEvent("change");
      Object.defineProperty(newEvent, "target", {
        writable: false,
        value: event.target
      });
      this.dispatchEvent(newEvent);
    }
  }, {
    key: "render",
    value: function render() {
      return b2(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(['\n      <input\n        class="search"\n        .value="', '"\n        @input="', '"\n        data-testid="context-menu-search-input"\n      />\n    '])), this.text, this.handleInput);
    }
  }]);
})(i4);
_SearchElement = SearchElement;
var _applyDecs$e$5 = _slicedToArray(_applyDecs$5(_SearchElement, [[_textDecs, 1, "text"]], [], 0, void 0, i4).e, 2);
_init_text = _applyDecs$e$5[0];
_initProto$5 = _applyDecs$e$5[1];
_defineProperty(SearchElement, _ref$5, {
  text: {
    type: String
  }
});
_defineProperty(SearchElement, "styles", i(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral(["\n    .search {\n      color: white;\n      padding: 1px 8px;\n      border: 1px solid white;\n      border-radius: 10px;\n      font-size: 16px;\n      font-family: serif;\n      width: 100%;\n      box-sizing: border-box;\n      background: transparent;\n    }\n  "]))));
var _templateObject$7;
customElements.define("rete-context-menu", MenuElement);
customElements.define("rete-context-menu-block", BlockElement);
customElements.define("rete-context-menu-search", SearchElement);
customElements.define("rete-context-menu-item", ItemElement);
function setup$2(props) {
  var delay = typeof (props === null || props === void 0 ? void 0 : props.delay) === "undefined" ? 1e3 : props.delay;
  return {
    update: function update(context) {
      if (context.data.type === "contextmenu") {
        return {
          items: context.data.items,
          delay,
          searchBar: context.data.searchBar,
          onHide: context.data.onHide
        };
      }
    },
    render: function render(context) {
      if (context.data.type === "contextmenu") {
        return b2(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(['\n            <rete-context-menu\n                .items="', '"\n                .delay="', '"\n                .searchBar="', '"\n                .onHide="', '"\n            ></rete-context-menu>\n        '])), context.data.items, delay, context.data.searchBar, context.data.onHide);
      }
    }
  };
}
var index$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  setup: setup$2
});
function px(value) {
  return "".concat(value, "px");
}
function styleMap(styles) {
  return Object.entries(styles).map(function(_ref2) {
    var _ref22 = _slicedToArray(_ref2, 2), key = _ref22[0], value = _ref22[1];
    return "".concat(key, ": ").concat(value);
  }).join("; ");
}
var _MiniNode;
var _templateObject$6;
var _templateObject2$4;
var _initProto$4;
var _leftDecs$1;
var _init_left$1;
var _topDecs$1;
var _init_top$1;
var _widthDecs$1;
var _init_width$1;
var _heightDecs$1;
var _init_height$1;
var _ref$4;
function _callSuper$5(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$5() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$5() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$5 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _classPrivateFieldInitSpec$4(e6, t3, a3) {
  _checkPrivateRedeclaration$4(e6, t3), t3.set(e6, a3);
}
function _checkPrivateRedeclaration$4(e6, t3) {
  if (t3.has(e6)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet$4(s4, a3, r6) {
  return s4.set(_assertClassBrand$4(s4, a3), r6), r6;
}
function _classPrivateFieldGet$4(s4, a3) {
  return s4.get(_assertClassBrand$4(s4, a3));
}
function _assertClassBrand$4(e6, t3, n5) {
  if ("function" == typeof e6 ? e6 === t3 : e6.has(t3)) return arguments.length < 3 ? t3 : n5;
  throw new TypeError("Private element is not present on this object");
}
function _applyDecs$4(e6, t3, r6, n5, o6, a3) {
  function i5(e7, t4, r7) {
    return function(n6, o7) {
      return r7 && r7(n6), e7[t4].call(n6, o7);
    };
  }
  function c4(e7, t4) {
    for (var r7 = 0; r7 < e7.length; r7++) e7[r7].call(t4);
    return t4;
  }
  function s4(e7, t4, r7, n6) {
    if ("function" != typeof e7 && (n6 || void 0 !== e7)) throw new TypeError(t4 + " must " + (r7 || "be") + " a function" + (n6 ? "" : " or undefined"));
    return e7;
  }
  function applyDec(e7, t4, r7, n6, o7, a4, c5, u4, l4, f4, p4, d3, h3) {
    function m2(e8) {
      if (!h3(e8)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y3, v2 = t4[0], g2 = t4[3], b3 = !u4;
    if (!b3) {
      r7 || Array.isArray(v2) || (v2 = [v2]);
      var w2 = {}, S3 = [], A2 = 3 === o7 ? "get" : 4 === o7 || d3 ? "set" : "value";
      f4 ? (p4 || d3 ? w2 = { get: _setFunctionName$4(function() {
        return g2(this);
      }, n6, "get"), set: function set(e8) {
        t4[4](this, e8);
      } } : w2[A2] = g2, p4 || _setFunctionName$4(w2[A2], n6, 2 === o7 ? "" : A2)) : p4 || (w2 = Object.getOwnPropertyDescriptor(e7, n6));
    }
    for (var P2 = e7, j = v2.length - 1; j >= 0; j -= r7 ? 2 : 1) {
      var D2 = v2[j], E2 = r7 ? v2[j - 1] : void 0, I2 = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o7], name: n6, metadata: a4, addInitializer: function(e8, t5) {
        if (e8.v) throw Error("attempted to call addInitializer after decoration was finished");
        s4(t5, "An initializer", "be", true), c5.push(t5);
      }.bind(null, I2) };
      try {
        if (b3) (y3 = s4(D2.call(E2, P2, O), "class decorators", "return")) && (P2 = y3);
        else {
          var k2, F;
          O["static"] = l4, O["private"] = f4, f4 ? 2 === o7 ? k2 = function k3(e8) {
            return m2(e8), w2.value;
          } : (o7 < 4 && (k2 = i5(w2, "get", m2)), 3 !== o7 && (F = i5(w2, "set", m2))) : (k2 = function k3(e8) {
            return e8[n6];
          }, (o7 < 2 || 4 === o7) && (F = function F2(e8, t5) {
            e8[n6] = t5;
          }));
          var N2 = O.access = { has: f4 ? h3.bind() : function(e8) {
            return n6 in e8;
          } };
          if (k2 && (N2.get = k2), F && (N2.set = F), P2 = D2.call(E2, d3 ? { get: w2.get, set: w2.set } : w2[A2], O), d3) {
            if ("object" == _typeof(P2) && P2) (y3 = s4(P2.get, "accessor.get")) && (w2.get = y3), (y3 = s4(P2.set, "accessor.set")) && (w2.set = y3), (y3 = s4(P2.init, "accessor.init")) && S3.push(y3);
            else if (void 0 !== P2) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s4(P2, (p4 ? "field" : "method") + " decorators", "return") && (p4 ? S3.push(P2) : w2[A2] = P2);
        }
      } finally {
        I2.v = true;
      }
    }
    return (p4 || d3) && u4.push(function(e8, t5) {
      for (var r8 = S3.length - 1; r8 >= 0; r8--) t5 = S3[r8].call(e8, t5);
      return t5;
    }), p4 || b3 || (f4 ? d3 ? u4.push(i5(w2, "get"), i5(w2, "set")) : u4.push(2 === o7 ? w2[A2] : i5.call.bind(w2[A2])) : Object.defineProperty(e7, n6, w2)), P2;
  }
  function u3(e7, t4) {
    return Object.defineProperty(e7, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: true, enumerable: true, value: t4 });
  }
  if (arguments.length >= 6) var l3 = a3[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  var f3 = Object.create(null == l3 ? null : l3), p3 = (function(e7, t4, r7, n6) {
    var o7, a4, i6 = [], s5 = function s6(t5) {
      return _checkInRHS$4(t5) === e7;
    }, u4 = /* @__PURE__ */ new Map();
    function l4(e8) {
      e8 && i6.push(c4.bind(null, e8));
    }
    for (var f4 = 0; f4 < t4.length; f4++) {
      var p4 = t4[f4];
      if (Array.isArray(p4)) {
        var d3 = p4[1], h3 = p4[2], m2 = p4.length > 3, y3 = 16 & d3, v2 = !!(8 & d3), g2 = 0 == (d3 &= 7), b3 = h3 + "/" + v2;
        if (!g2 && !m2) {
          var w2 = u4.get(b3);
          if (true === w2 || 3 === w2 && 4 !== d3 || 4 === w2 && 3 !== d3) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h3);
          u4.set(b3, !(d3 > 2) || d3);
        }
        applyDec(v2 ? e7 : e7.prototype, p4, y3, m2 ? "#" + h3 : _toPropertyKey$4(h3), d3, n6, v2 ? a4 = a4 || [] : o7 = o7 || [], i6, v2, m2, g2, 1 === d3, v2 && m2 ? s5 : r7);
      }
    }
    return l4(o7), l4(a4), i6;
  })(e6, t3, o6, f3);
  return r6.length || u3(e6, f3), { e: p3, get c() {
    var t4 = [];
    return r6.length && [u3(applyDec(e6, [r6], n5, e6.name, 5, f3, t4), f3), c4.bind(null, t4, e6)];
  } };
}
function _toPropertyKey$4(t3) {
  var i5 = _toPrimitive$4(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive$4(t3, r6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var e6 = t3[Symbol.toPrimitive];
  if (void 0 !== e6) {
    var i5 = e6.call(t3, r6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r6 ? String : Number)(t3);
}
function _setFunctionName$4(e6, t3, n5) {
  "symbol" == _typeof(t3) && (t3 = (t3 = t3.description) ? "[" + t3 + "]" : "");
  try {
    Object.defineProperty(e6, "name", { configurable: true, value: n5 ? n5 + " " + t3 : t3 });
  } catch (e7) {
  }
  return e6;
}
function _checkInRHS$4(e6) {
  if (Object(e6) !== e6) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e6 ? _typeof(e6) : "null"));
  return e6;
}
var _A$4 = /* @__PURE__ */ new WeakMap();
var _B$4 = /* @__PURE__ */ new WeakMap();
var _C$4 = /* @__PURE__ */ new WeakMap();
var _D$3 = /* @__PURE__ */ new WeakMap();
_ref$4 = (_leftDecs$1 = n4({
  type: Number
}), _topDecs$1 = n4({
  type: Number
}), _widthDecs$1 = n4({
  type: Number
}), _heightDecs$1 = n4({
  type: Number
}), "left");
var MiniNode = /* @__PURE__ */ (function(_LitElement) {
  function MiniNode2() {
    var _this;
    _classCallCheck(this, MiniNode2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$5(this, MiniNode2, [].concat(args));
    _classPrivateFieldInitSpec$4(_this, _A$4, (_initProto$4(_this), _init_left$1(_this)));
    _classPrivateFieldInitSpec$4(_this, _B$4, _init_top$1(_this));
    _classPrivateFieldInitSpec$4(_this, _C$4, _init_width$1(_this));
    _classPrivateFieldInitSpec$4(_this, _D$3, _init_height$1(_this));
    return _this;
  }
  _inherits(MiniNode2, _LitElement);
  return _createClass(MiniNode2, [{
    key: _ref$4,
    get: function get() {
      return _classPrivateFieldGet$4(_A$4, this);
    }
  }, {
    key: "left",
    set: function set(v2) {
      _classPrivateFieldSet$4(_A$4, this, v2);
    }
  }, {
    key: "top",
    get: function get() {
      return _classPrivateFieldGet$4(_B$4, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$4(_B$4, this, v2);
    }
  }, {
    key: "width",
    get: function get() {
      return _classPrivateFieldGet$4(_C$4, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$4(_C$4, this, v2);
    }
  }, {
    key: "height",
    get: function get() {
      return _classPrivateFieldGet$4(_D$3, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$4(_D$3, this, v2);
    }
  }, {
    key: "styles",
    get: function get() {
      return {
        left: px(this.left),
        top: px(this.top),
        width: px(this.width),
        height: px(this.height)
      };
    }
  }, {
    key: "render",
    value: function render() {
      return b2(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(['\n      <div class="mini-node" style=', ' data-testid="minimap-node"></div>\n    '])), styleMap(this.styles));
    }
  }]);
})(i4);
_MiniNode = MiniNode;
var _applyDecs$e$4 = _slicedToArray(_applyDecs$4(_MiniNode, [[_leftDecs$1, 1, "left"], [_topDecs$1, 1, "top"], [_widthDecs$1, 1, "width"], [_heightDecs$1, 1, "height"]], [], 0, void 0, i4).e, 5);
_init_left$1 = _applyDecs$e$4[0];
_init_top$1 = _applyDecs$e$4[1];
_init_width$1 = _applyDecs$e$4[2];
_init_height$1 = _applyDecs$e$4[3];
_initProto$4 = _applyDecs$e$4[4];
_defineProperty(MiniNode, "styles", i(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["\n    .mini-node {\n      position: absolute;\n      background: rgba(110, 136, 255, 0.8);\n      border: 1px solid rgb(192 206 212 / 60%);\n    }\n  "]))));
function ownKeys$12(e6, r6) {
  var t3 = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e6);
    r6 && (o6 = o6.filter(function(r7) {
      return Object.getOwnPropertyDescriptor(e6, r7).enumerable;
    })), t3.push.apply(t3, o6);
  }
  return t3;
}
function _objectSpread$12(e6) {
  for (var r6 = 1; r6 < arguments.length; r6++) {
    var t3 = null != arguments[r6] ? arguments[r6] : {};
    r6 % 2 ? ownKeys$12(Object(t3), true).forEach(function(r7) {
      _defineProperty(e6, r7, t3[r7]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(t3)) : ownKeys$12(Object(t3)).forEach(function(r7) {
      Object.defineProperty(e6, r7, Object.getOwnPropertyDescriptor(t3, r7));
    });
  }
  return e6;
}
function useDrag(translate, getPointer) {
  var getCurrentPointer = function getCurrentPointer2(e6) {
    var pointer = getPointer(e6);
    return pointer ? _objectSpread$12({}, pointer) : null;
  };
  return {
    start: function start(e6) {
      var previous = getCurrentPointer(e6);
      function move(moveEvent) {
        var current = getCurrentPointer(moveEvent);
        if (current && previous) {
          var _dx = current.x - previous.x;
          var _dy = current.y - previous.y;
          translate(_dx, _dy);
        }
        previous = current;
      }
      function up() {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
        window.removeEventListener("pointercancel", up);
      }
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
      window.addEventListener("pointercancel", up);
    }
  };
}
var _MiniViewport;
var _templateObject$5;
var _templateObject2$3;
var _initProto$3;
var _leftDecs;
var _init_left;
var _topDecs;
var _init_top;
var _widthDecs;
var _init_width;
var _heightDecs;
var _init_height;
var _containerWidthDecs;
var _init_containerWidth;
var _onTranslateDecs$2;
var _init_onTranslate$2;
var _ref$3;
function _callSuper$4(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$4() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$4() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$4 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _classPrivateFieldInitSpec$3(e6, t3, a3) {
  _checkPrivateRedeclaration$3(e6, t3), t3.set(e6, a3);
}
function _checkPrivateRedeclaration$3(e6, t3) {
  if (t3.has(e6)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet$3(s4, a3, r6) {
  return s4.set(_assertClassBrand$3(s4, a3), r6), r6;
}
function _classPrivateFieldGet$3(s4, a3) {
  return s4.get(_assertClassBrand$3(s4, a3));
}
function _assertClassBrand$3(e6, t3, n5) {
  if ("function" == typeof e6 ? e6 === t3 : e6.has(t3)) return arguments.length < 3 ? t3 : n5;
  throw new TypeError("Private element is not present on this object");
}
function _applyDecs$3(e6, t3, r6, n5, o6, a3) {
  function i5(e7, t4, r7) {
    return function(n6, o7) {
      return r7 && r7(n6), e7[t4].call(n6, o7);
    };
  }
  function c4(e7, t4) {
    for (var r7 = 0; r7 < e7.length; r7++) e7[r7].call(t4);
    return t4;
  }
  function s4(e7, t4, r7, n6) {
    if ("function" != typeof e7 && (n6 || void 0 !== e7)) throw new TypeError(t4 + " must " + (r7 || "be") + " a function" + (n6 ? "" : " or undefined"));
    return e7;
  }
  function applyDec(e7, t4, r7, n6, o7, a4, c5, u4, l4, f4, p4, d3, h3) {
    function m2(e8) {
      if (!h3(e8)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y3, v2 = t4[0], g2 = t4[3], b3 = !u4;
    if (!b3) {
      r7 || Array.isArray(v2) || (v2 = [v2]);
      var w2 = {}, S3 = [], A2 = 3 === o7 ? "get" : 4 === o7 || d3 ? "set" : "value";
      f4 ? (p4 || d3 ? w2 = { get: _setFunctionName$3(function() {
        return g2(this);
      }, n6, "get"), set: function set(e8) {
        t4[4](this, e8);
      } } : w2[A2] = g2, p4 || _setFunctionName$3(w2[A2], n6, 2 === o7 ? "" : A2)) : p4 || (w2 = Object.getOwnPropertyDescriptor(e7, n6));
    }
    for (var P2 = e7, j = v2.length - 1; j >= 0; j -= r7 ? 2 : 1) {
      var D2 = v2[j], E2 = r7 ? v2[j - 1] : void 0, I2 = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o7], name: n6, metadata: a4, addInitializer: function(e8, t5) {
        if (e8.v) throw Error("attempted to call addInitializer after decoration was finished");
        s4(t5, "An initializer", "be", true), c5.push(t5);
      }.bind(null, I2) };
      try {
        if (b3) (y3 = s4(D2.call(E2, P2, O), "class decorators", "return")) && (P2 = y3);
        else {
          var k2, F;
          O["static"] = l4, O["private"] = f4, f4 ? 2 === o7 ? k2 = function k3(e8) {
            return m2(e8), w2.value;
          } : (o7 < 4 && (k2 = i5(w2, "get", m2)), 3 !== o7 && (F = i5(w2, "set", m2))) : (k2 = function k3(e8) {
            return e8[n6];
          }, (o7 < 2 || 4 === o7) && (F = function F2(e8, t5) {
            e8[n6] = t5;
          }));
          var N2 = O.access = { has: f4 ? h3.bind() : function(e8) {
            return n6 in e8;
          } };
          if (k2 && (N2.get = k2), F && (N2.set = F), P2 = D2.call(E2, d3 ? { get: w2.get, set: w2.set } : w2[A2], O), d3) {
            if ("object" == _typeof(P2) && P2) (y3 = s4(P2.get, "accessor.get")) && (w2.get = y3), (y3 = s4(P2.set, "accessor.set")) && (w2.set = y3), (y3 = s4(P2.init, "accessor.init")) && S3.push(y3);
            else if (void 0 !== P2) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s4(P2, (p4 ? "field" : "method") + " decorators", "return") && (p4 ? S3.push(P2) : w2[A2] = P2);
        }
      } finally {
        I2.v = true;
      }
    }
    return (p4 || d3) && u4.push(function(e8, t5) {
      for (var r8 = S3.length - 1; r8 >= 0; r8--) t5 = S3[r8].call(e8, t5);
      return t5;
    }), p4 || b3 || (f4 ? d3 ? u4.push(i5(w2, "get"), i5(w2, "set")) : u4.push(2 === o7 ? w2[A2] : i5.call.bind(w2[A2])) : Object.defineProperty(e7, n6, w2)), P2;
  }
  function u3(e7, t4) {
    return Object.defineProperty(e7, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: true, enumerable: true, value: t4 });
  }
  if (arguments.length >= 6) var l3 = a3[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  var f3 = Object.create(null == l3 ? null : l3), p3 = (function(e7, t4, r7, n6) {
    var o7, a4, i6 = [], s5 = function s6(t5) {
      return _checkInRHS$3(t5) === e7;
    }, u4 = /* @__PURE__ */ new Map();
    function l4(e8) {
      e8 && i6.push(c4.bind(null, e8));
    }
    for (var f4 = 0; f4 < t4.length; f4++) {
      var p4 = t4[f4];
      if (Array.isArray(p4)) {
        var d3 = p4[1], h3 = p4[2], m2 = p4.length > 3, y3 = 16 & d3, v2 = !!(8 & d3), g2 = 0 == (d3 &= 7), b3 = h3 + "/" + v2;
        if (!g2 && !m2) {
          var w2 = u4.get(b3);
          if (true === w2 || 3 === w2 && 4 !== d3 || 4 === w2 && 3 !== d3) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h3);
          u4.set(b3, !(d3 > 2) || d3);
        }
        applyDec(v2 ? e7 : e7.prototype, p4, y3, m2 ? "#" + h3 : _toPropertyKey$3(h3), d3, n6, v2 ? a4 = a4 || [] : o7 = o7 || [], i6, v2, m2, g2, 1 === d3, v2 && m2 ? s5 : r7);
      }
    }
    return l4(o7), l4(a4), i6;
  })(e6, t3, o6, f3);
  return r6.length || u3(e6, f3), { e: p3, get c() {
    var t4 = [];
    return r6.length && [u3(applyDec(e6, [r6], n5, e6.name, 5, f3, t4), f3), c4.bind(null, t4, e6)];
  } };
}
function _toPropertyKey$3(t3) {
  var i5 = _toPrimitive$3(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive$3(t3, r6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var e6 = t3[Symbol.toPrimitive];
  if (void 0 !== e6) {
    var i5 = e6.call(t3, r6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r6 ? String : Number)(t3);
}
function _setFunctionName$3(e6, t3, n5) {
  "symbol" == _typeof(t3) && (t3 = (t3 = t3.description) ? "[" + t3 + "]" : "");
  try {
    Object.defineProperty(e6, "name", { configurable: true, value: n5 ? n5 + " " + t3 : t3 });
  } catch (e7) {
  }
  return e6;
}
function _checkInRHS$3(e6) {
  if (Object(e6) !== e6) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e6 ? _typeof(e6) : "null"));
  return e6;
}
var _A$3 = /* @__PURE__ */ new WeakMap();
var _B$3 = /* @__PURE__ */ new WeakMap();
var _C$3 = /* @__PURE__ */ new WeakMap();
var _D$2 = /* @__PURE__ */ new WeakMap();
var _E$2 = /* @__PURE__ */ new WeakMap();
var _F$1 = /* @__PURE__ */ new WeakMap();
_ref$3 = (_leftDecs = n4({
  type: Number
}), _topDecs = n4({
  type: Number
}), _widthDecs = n4({
  type: Number
}), _heightDecs = n4({
  type: Number
}), _containerWidthDecs = n4({
  type: Number
}), _onTranslateDecs$2 = n4({
  type: Function
}), "left");
var MiniViewport = /* @__PURE__ */ (function(_LitElement) {
  function MiniViewport2() {
    var _this;
    _classCallCheck(this, MiniViewport2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$4(this, MiniViewport2, [].concat(args));
    _classPrivateFieldInitSpec$3(_this, _A$3, (_initProto$3(_this), _init_left(_this, 0)));
    _classPrivateFieldInitSpec$3(_this, _B$3, _init_top(_this, 0));
    _classPrivateFieldInitSpec$3(_this, _C$3, _init_width(_this, 0));
    _classPrivateFieldInitSpec$3(_this, _D$2, _init_height(_this, 0));
    _classPrivateFieldInitSpec$3(_this, _E$2, _init_containerWidth(_this, 0));
    _classPrivateFieldInitSpec$3(_this, _F$1, _init_onTranslate$2(_this, function() {
      return null;
    }));
    _defineProperty(_this, "drag", useDrag(_this.onDrag.bind(_this), function(e6) {
      return {
        x: e6.pageX,
        y: e6.pageY
      };
    }));
    return _this;
  }
  _inherits(MiniViewport2, _LitElement);
  return _createClass(MiniViewport2, [{
    key: _ref$3,
    get: function get() {
      return _classPrivateFieldGet$3(_A$3, this);
    }
  }, {
    key: "left",
    set: function set(v2) {
      _classPrivateFieldSet$3(_A$3, this, v2);
    }
  }, {
    key: "top",
    get: function get() {
      return _classPrivateFieldGet$3(_B$3, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$3(_B$3, this, v2);
    }
  }, {
    key: "width",
    get: function get() {
      return _classPrivateFieldGet$3(_C$3, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$3(_C$3, this, v2);
    }
  }, {
    key: "height",
    get: function get() {
      return _classPrivateFieldGet$3(_D$2, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$3(_D$2, this, v2);
    }
  }, {
    key: "containerWidth",
    get: function get() {
      return _classPrivateFieldGet$3(_E$2, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$3(_E$2, this, v2);
    }
  }, {
    key: "onTranslate",
    get: function get() {
      return _classPrivateFieldGet$3(_F$1, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$3(_F$1, this, v2);
    }
  }, {
    key: "scale",
    value: function scale(v2) {
      return v2 * this.containerWidth;
    }
  }, {
    key: "invert",
    value: function invert(v2) {
      return v2 / this.containerWidth;
    }
  }, {
    key: "onDrag",
    value: function onDrag(dx, dy) {
      this.onTranslate(this.invert(-dx), this.invert(-dy));
    }
  }, {
    key: "styles",
    get: function get() {
      return {
        left: px(this.scale(this.left)),
        top: px(this.scale(this.top)),
        width: px(this.scale(this.width)),
        height: px(this.scale(this.height))
      };
    }
  }, {
    key: "render",
    value: function render() {
      return b2(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n      <div\n        @pointerdown=", "\n        style=", '\n        data-testid="minimap-viewport"\n        class="mini-viewport"\n      ></div>\n    '])), this.drag.start, styleMap(this.styles));
    }
  }]);
})(i4);
_MiniViewport = MiniViewport;
var _applyDecs$e$3 = _slicedToArray(_applyDecs$3(_MiniViewport, [[_leftDecs, 1, "left"], [_topDecs, 1, "top"], [_widthDecs, 1, "width"], [_heightDecs, 1, "height"], [_containerWidthDecs, 1, "containerWidth"], [_onTranslateDecs$2, 1, "onTranslate"]], [], 0, void 0, i4).e, 7);
_init_left = _applyDecs$e$3[0];
_init_top = _applyDecs$e$3[1];
_init_width = _applyDecs$e$3[2];
_init_height = _applyDecs$e$3[3];
_init_containerWidth = _applyDecs$e$3[4];
_init_onTranslate$2 = _applyDecs$e$3[5];
_initProto$3 = _applyDecs$e$3[6];
_defineProperty(MiniViewport, "styles", i(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n    .mini-viewport {\n      position: absolute;\n      background: rgba(255, 251, 128, 0.32);\n      border: 1px solid #ffe52b;\n    }\n  "]))));
var _Minimap;
var _templateObject$4;
var _templateObject2$2;
var _templateObject3$1;
var _initProto$2;
var _sizeDecs;
var _init_size;
var _ratioDecs;
var _init_ratio;
var _nodesDecs;
var _init_nodes;
var _viewportDecs;
var _init_viewport;
var _onTranslateDecs$1;
var _init_onTranslate$1;
var _pointDecs;
var _init_point;
var _containerDecs;
var _init_container;
var _ref$2;
function _callSuper$3(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$3() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$3() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$3 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _classPrivateFieldInitSpec$2(e6, t3, a3) {
  _checkPrivateRedeclaration$2(e6, t3), t3.set(e6, a3);
}
function _checkPrivateRedeclaration$2(e6, t3) {
  if (t3.has(e6)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet$2(s4, a3, r6) {
  return s4.set(_assertClassBrand$2(s4, a3), r6), r6;
}
function _classPrivateFieldGet$2(s4, a3) {
  return s4.get(_assertClassBrand$2(s4, a3));
}
function _assertClassBrand$2(e6, t3, n5) {
  if ("function" == typeof e6 ? e6 === t3 : e6.has(t3)) return arguments.length < 3 ? t3 : n5;
  throw new TypeError("Private element is not present on this object");
}
function _applyDecs$2(e6, t3, r6, n5, o6, a3) {
  function i5(e7, t4, r7) {
    return function(n6, o7) {
      return r7 && r7(n6), e7[t4].call(n6, o7);
    };
  }
  function c4(e7, t4) {
    for (var r7 = 0; r7 < e7.length; r7++) e7[r7].call(t4);
    return t4;
  }
  function s4(e7, t4, r7, n6) {
    if ("function" != typeof e7 && (n6 || void 0 !== e7)) throw new TypeError(t4 + " must " + (r7 || "be") + " a function" + (n6 ? "" : " or undefined"));
    return e7;
  }
  function applyDec(e7, t4, r7, n6, o7, a4, c5, u4, l4, f4, p4, d3, h3) {
    function m2(e8) {
      if (!h3(e8)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y3, v2 = t4[0], g2 = t4[3], b3 = !u4;
    if (!b3) {
      r7 || Array.isArray(v2) || (v2 = [v2]);
      var w2 = {}, S3 = [], A2 = 3 === o7 ? "get" : 4 === o7 || d3 ? "set" : "value";
      f4 ? (p4 || d3 ? w2 = { get: _setFunctionName$2(function() {
        return g2(this);
      }, n6, "get"), set: function set(e8) {
        t4[4](this, e8);
      } } : w2[A2] = g2, p4 || _setFunctionName$2(w2[A2], n6, 2 === o7 ? "" : A2)) : p4 || (w2 = Object.getOwnPropertyDescriptor(e7, n6));
    }
    for (var P2 = e7, j = v2.length - 1; j >= 0; j -= r7 ? 2 : 1) {
      var D2 = v2[j], E2 = r7 ? v2[j - 1] : void 0, I2 = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o7], name: n6, metadata: a4, addInitializer: function(e8, t5) {
        if (e8.v) throw Error("attempted to call addInitializer after decoration was finished");
        s4(t5, "An initializer", "be", true), c5.push(t5);
      }.bind(null, I2) };
      try {
        if (b3) (y3 = s4(D2.call(E2, P2, O), "class decorators", "return")) && (P2 = y3);
        else {
          var k2, F;
          O["static"] = l4, O["private"] = f4, f4 ? 2 === o7 ? k2 = function k3(e8) {
            return m2(e8), w2.value;
          } : (o7 < 4 && (k2 = i5(w2, "get", m2)), 3 !== o7 && (F = i5(w2, "set", m2))) : (k2 = function k3(e8) {
            return e8[n6];
          }, (o7 < 2 || 4 === o7) && (F = function F2(e8, t5) {
            e8[n6] = t5;
          }));
          var N2 = O.access = { has: f4 ? h3.bind() : function(e8) {
            return n6 in e8;
          } };
          if (k2 && (N2.get = k2), F && (N2.set = F), P2 = D2.call(E2, d3 ? { get: w2.get, set: w2.set } : w2[A2], O), d3) {
            if ("object" == _typeof(P2) && P2) (y3 = s4(P2.get, "accessor.get")) && (w2.get = y3), (y3 = s4(P2.set, "accessor.set")) && (w2.set = y3), (y3 = s4(P2.init, "accessor.init")) && S3.push(y3);
            else if (void 0 !== P2) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s4(P2, (p4 ? "field" : "method") + " decorators", "return") && (p4 ? S3.push(P2) : w2[A2] = P2);
        }
      } finally {
        I2.v = true;
      }
    }
    return (p4 || d3) && u4.push(function(e8, t5) {
      for (var r8 = S3.length - 1; r8 >= 0; r8--) t5 = S3[r8].call(e8, t5);
      return t5;
    }), p4 || b3 || (f4 ? d3 ? u4.push(i5(w2, "get"), i5(w2, "set")) : u4.push(2 === o7 ? w2[A2] : i5.call.bind(w2[A2])) : Object.defineProperty(e7, n6, w2)), P2;
  }
  function u3(e7, t4) {
    return Object.defineProperty(e7, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: true, enumerable: true, value: t4 });
  }
  if (arguments.length >= 6) var l3 = a3[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  var f3 = Object.create(null == l3 ? null : l3), p3 = (function(e7, t4, r7, n6) {
    var o7, a4, i6 = [], s5 = function s6(t5) {
      return _checkInRHS$2(t5) === e7;
    }, u4 = /* @__PURE__ */ new Map();
    function l4(e8) {
      e8 && i6.push(c4.bind(null, e8));
    }
    for (var f4 = 0; f4 < t4.length; f4++) {
      var p4 = t4[f4];
      if (Array.isArray(p4)) {
        var d3 = p4[1], h3 = p4[2], m2 = p4.length > 3, y3 = 16 & d3, v2 = !!(8 & d3), g2 = 0 == (d3 &= 7), b3 = h3 + "/" + v2;
        if (!g2 && !m2) {
          var w2 = u4.get(b3);
          if (true === w2 || 3 === w2 && 4 !== d3 || 4 === w2 && 3 !== d3) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h3);
          u4.set(b3, !(d3 > 2) || d3);
        }
        applyDec(v2 ? e7 : e7.prototype, p4, y3, m2 ? "#" + h3 : _toPropertyKey$2(h3), d3, n6, v2 ? a4 = a4 || [] : o7 = o7 || [], i6, v2, m2, g2, 1 === d3, v2 && m2 ? s5 : r7);
      }
    }
    return l4(o7), l4(a4), i6;
  })(e6, t3, o6, f3);
  return r6.length || u3(e6, f3), { e: p3, get c() {
    var t4 = [];
    return r6.length && [u3(applyDec(e6, [r6], n5, e6.name, 5, f3, t4), f3), c4.bind(null, t4, e6)];
  } };
}
function _toPropertyKey$2(t3) {
  var i5 = _toPrimitive$2(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive$2(t3, r6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var e6 = t3[Symbol.toPrimitive];
  if (void 0 !== e6) {
    var i5 = e6.call(t3, r6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r6 ? String : Number)(t3);
}
function _setFunctionName$2(e6, t3, n5) {
  "symbol" == _typeof(t3) && (t3 = (t3 = t3.description) ? "[" + t3 + "]" : "");
  try {
    Object.defineProperty(e6, "name", { configurable: true, value: n5 ? n5 + " " + t3 : t3 });
  } catch (e7) {
  }
  return e6;
}
function _checkInRHS$2(e6) {
  if (Object(e6) !== e6) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e6 ? _typeof(e6) : "null"));
  return e6;
}
var _A$2 = /* @__PURE__ */ new WeakMap();
var _B$2 = /* @__PURE__ */ new WeakMap();
var _C$2 = /* @__PURE__ */ new WeakMap();
var _D$1 = /* @__PURE__ */ new WeakMap();
var _E$1 = /* @__PURE__ */ new WeakMap();
var _F = /* @__PURE__ */ new WeakMap();
var _G = /* @__PURE__ */ new WeakMap();
_ref$2 = (_sizeDecs = n4({
  type: Number
}), _ratioDecs = n4({
  type: Number
}), _nodesDecs = n4({
  type: Array
}), _viewportDecs = n4({
  type: Object
}), _onTranslateDecs$1 = n4({
  type: Function
}), _pointDecs = n4({
  type: Function
}), _containerDecs = e5(".minimap"), "size");
var Minimap = /* @__PURE__ */ (function(_LitElement) {
  function Minimap2() {
    var _this;
    _classCallCheck(this, Minimap2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$3(this, Minimap2, [].concat(args));
    _classPrivateFieldInitSpec$2(_this, _A$2, (_initProto$2(_this), _init_size(_this, 0)));
    _classPrivateFieldInitSpec$2(_this, _B$2, _init_ratio(_this, 1));
    _classPrivateFieldInitSpec$2(_this, _C$2, _init_nodes(_this, []));
    _classPrivateFieldInitSpec$2(_this, _D$1, _init_viewport(_this));
    _classPrivateFieldInitSpec$2(_this, _E$1, _init_onTranslate$1(_this));
    _classPrivateFieldInitSpec$2(_this, _F, _init_point(_this));
    _classPrivateFieldInitSpec$2(_this, _G, _init_container(_this));
    return _this;
  }
  _inherits(Minimap2, _LitElement);
  return _createClass(Minimap2, [{
    key: _ref$2,
    get: function get() {
      return _classPrivateFieldGet$2(_A$2, this);
    }
  }, {
    key: "size",
    set: function set(v2) {
      _classPrivateFieldSet$2(_A$2, this, v2);
    }
  }, {
    key: "ratio",
    get: function get() {
      return _classPrivateFieldGet$2(_B$2, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$2(_B$2, this, v2);
    }
  }, {
    key: "nodes",
    get: function get() {
      return _classPrivateFieldGet$2(_C$2, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$2(_C$2, this, v2);
    }
  }, {
    key: "viewport",
    get: function get() {
      return _classPrivateFieldGet$2(_D$1, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$2(_D$1, this, v2);
    }
  }, {
    key: "onTranslate",
    get: function get() {
      return _classPrivateFieldGet$2(_E$1, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$2(_E$1, this, v2);
    }
  }, {
    key: "point",
    get: function get() {
      return _classPrivateFieldGet$2(_F, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$2(_F, this, v2);
    }
  }, {
    key: "container",
    get: function get() {
      return _classPrivateFieldGet$2(_G, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$2(_G, this, v2);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return b2(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(['\n      <div\n        class="minimap"\n        style="width: ', "; height: ", '"\n        @pointerdown="', '"\n        @dblclick="', '"\n        data-testid="minimap"\n      >\n        ', '\n      <rete-mini-viewport\n        .left="', '"\n        .top="', '"\n        .width="', '"\n        .height="', '"\n        .containerWidth="', '"\n        .onTranslate="', '"\n      ></rete-mini-viewport>\n      </div>\n    '])), px(this.size * this.ratio), px(this.size), this.preventDefault, this.dblclick, this.nodes.map(function(node, index5) {
        return b2(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(['<rete-mini-node\n            .left="', '"\n            .top="', '"\n            .width="', '"\n            .height="', '"\n            key="', "_", '"\n          ></rete-mini-node>'])), _this2.scale(node.left), _this2.scale(node.top), _this2.scale(node.width), _this2.scale(node.height), index5, node.left);
      }), this.viewport.left, this.viewport.top, this.viewport.width, this.viewport.height, this.container ? this.container.clientWidth : 0, this.onTranslate);
    }
  }, {
    key: "scale",
    value: function scale(value) {
      return this.container ? value * this.container.clientWidth : 0;
    }
  }, {
    key: "preventDefault",
    value: function preventDefault(event) {
      event.stopPropagation();
      event.preventDefault();
    }
  }, {
    key: "dblclick",
    value: function dblclick(event) {
      this.preventDefault(event);
      if (!this.container) return;
      var box = this.container.getBoundingClientRect();
      var x2 = (event.clientX - box.left) / (this.size * this.ratio);
      var y3 = (event.clientY - box.top) / (this.size * this.ratio);
      this.point(x2, y3);
    }
  }]);
})(i4);
_Minimap = Minimap;
var _applyDecs$e$2 = _slicedToArray(_applyDecs$2(_Minimap, [[_sizeDecs, 1, "size"], [_ratioDecs, 1, "ratio"], [_nodesDecs, 1, "nodes"], [_viewportDecs, 1, "viewport"], [_onTranslateDecs$1, 1, "onTranslate"], [_pointDecs, 1, "point"], [_containerDecs, 1, "container"]], [], 0, void 0, i4).e, 8);
_init_size = _applyDecs$e$2[0];
_init_ratio = _applyDecs$e$2[1];
_init_nodes = _applyDecs$e$2[2];
_init_viewport = _applyDecs$e$2[3];
_init_onTranslate$1 = _applyDecs$e$2[4];
_init_point = _applyDecs$e$2[5];
_init_container = _applyDecs$e$2[6];
_initProto$2 = _applyDecs$e$2[7];
_defineProperty(Minimap, "styles", i(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n    .minimap {\n      position: absolute;\n      right: 24px;\n      bottom: 24px;\n      background: rgba(229, 234, 239, 0.65);\n      padding: 20px;\n      overflow: hidden;\n      border: 1px solid #b1b7ff;\n      border-radius: 8px;\n      box-sizing: border-box;\n    }\n  "]))));
var _templateObject$3;
customElements.define("rete-minimap", Minimap);
customElements.define("rete-mini-node", MiniNode);
customElements.define("rete-mini-viewport", MiniViewport);
function setup$1(props) {
  return {
    update: function update(context) {
      if (context.data.type === "minimap") {
        return {
          nodes: context.data.nodes,
          size: (props === null || props === void 0 ? void 0 : props.size) || 200,
          ratio: context.data.ratio,
          viewport: context.data.viewport,
          onTranslate: context.data.translate,
          point: context.data.point
        };
      }
    },
    render: function render(context) {
      if (context.data.type === "minimap") {
        return b2(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(['\n        <rete-minimap\n            .nodes="', '"\n            .size="', '"\n            .ratio="', '"\n            .viewport="', '"\n            .onTranslate="', '"\n            .point="', '"\n        ></rete-minimap>\n        '])), context.data.nodes, (props === null || props === void 0 ? void 0 : props.size) || 200, context.data.ratio, context.data.viewport, context.data.translate, context.data.point);
      }
    }
  };
}
var index$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  setup: setup$1
});
var _Pin;
var _templateObject$2;
var _templateObject2$1;
var _initProto$1;
var _positionDecs;
var _init_position;
var _selectedDecs;
var _init_selected;
var _getPointerDecs$1;
var _init_getPointer$1;
var _ref$1;
function _callSuper$2(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$2() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$2() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _superPropGet$1(t3, e6, o6, r6) {
  var p3 = _get(_getPrototypeOf(1 & r6 ? t3.prototype : t3), e6, o6);
  return 2 & r6 && "function" == typeof p3 ? function(t4) {
    return p3.apply(o6, t4);
  } : p3;
}
function _classPrivateFieldInitSpec$1(e6, t3, a3) {
  _checkPrivateRedeclaration$1(e6, t3), t3.set(e6, a3);
}
function _checkPrivateRedeclaration$1(e6, t3) {
  if (t3.has(e6)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet$1(s4, a3, r6) {
  return s4.set(_assertClassBrand$1(s4, a3), r6), r6;
}
function _classPrivateFieldGet$1(s4, a3) {
  return s4.get(_assertClassBrand$1(s4, a3));
}
function _assertClassBrand$1(e6, t3, n5) {
  if ("function" == typeof e6 ? e6 === t3 : e6.has(t3)) return arguments.length < 3 ? t3 : n5;
  throw new TypeError("Private element is not present on this object");
}
function _applyDecs$1(e6, t3, r6, n5, o6, a3) {
  function i5(e7, t4, r7) {
    return function(n6, o7) {
      return r7 && r7(n6), e7[t4].call(n6, o7);
    };
  }
  function c4(e7, t4) {
    for (var r7 = 0; r7 < e7.length; r7++) e7[r7].call(t4);
    return t4;
  }
  function s4(e7, t4, r7, n6) {
    if ("function" != typeof e7 && (n6 || void 0 !== e7)) throw new TypeError(t4 + " must " + (r7 || "be") + " a function" + (n6 ? "" : " or undefined"));
    return e7;
  }
  function applyDec(e7, t4, r7, n6, o7, a4, c5, u4, l4, f4, p4, d3, h3) {
    function m2(e8) {
      if (!h3(e8)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y3, v2 = t4[0], g2 = t4[3], b3 = !u4;
    if (!b3) {
      r7 || Array.isArray(v2) || (v2 = [v2]);
      var w2 = {}, S3 = [], A2 = 3 === o7 ? "get" : 4 === o7 || d3 ? "set" : "value";
      f4 ? (p4 || d3 ? w2 = { get: _setFunctionName$1(function() {
        return g2(this);
      }, n6, "get"), set: function set(e8) {
        t4[4](this, e8);
      } } : w2[A2] = g2, p4 || _setFunctionName$1(w2[A2], n6, 2 === o7 ? "" : A2)) : p4 || (w2 = Object.getOwnPropertyDescriptor(e7, n6));
    }
    for (var P2 = e7, j = v2.length - 1; j >= 0; j -= r7 ? 2 : 1) {
      var D2 = v2[j], E2 = r7 ? v2[j - 1] : void 0, I2 = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o7], name: n6, metadata: a4, addInitializer: function(e8, t5) {
        if (e8.v) throw Error("attempted to call addInitializer after decoration was finished");
        s4(t5, "An initializer", "be", true), c5.push(t5);
      }.bind(null, I2) };
      try {
        if (b3) (y3 = s4(D2.call(E2, P2, O), "class decorators", "return")) && (P2 = y3);
        else {
          var k2, F;
          O["static"] = l4, O["private"] = f4, f4 ? 2 === o7 ? k2 = function k3(e8) {
            return m2(e8), w2.value;
          } : (o7 < 4 && (k2 = i5(w2, "get", m2)), 3 !== o7 && (F = i5(w2, "set", m2))) : (k2 = function k3(e8) {
            return e8[n6];
          }, (o7 < 2 || 4 === o7) && (F = function F2(e8, t5) {
            e8[n6] = t5;
          }));
          var N2 = O.access = { has: f4 ? h3.bind() : function(e8) {
            return n6 in e8;
          } };
          if (k2 && (N2.get = k2), F && (N2.set = F), P2 = D2.call(E2, d3 ? { get: w2.get, set: w2.set } : w2[A2], O), d3) {
            if ("object" == _typeof(P2) && P2) (y3 = s4(P2.get, "accessor.get")) && (w2.get = y3), (y3 = s4(P2.set, "accessor.set")) && (w2.set = y3), (y3 = s4(P2.init, "accessor.init")) && S3.push(y3);
            else if (void 0 !== P2) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s4(P2, (p4 ? "field" : "method") + " decorators", "return") && (p4 ? S3.push(P2) : w2[A2] = P2);
        }
      } finally {
        I2.v = true;
      }
    }
    return (p4 || d3) && u4.push(function(e8, t5) {
      for (var r8 = S3.length - 1; r8 >= 0; r8--) t5 = S3[r8].call(e8, t5);
      return t5;
    }), p4 || b3 || (f4 ? d3 ? u4.push(i5(w2, "get"), i5(w2, "set")) : u4.push(2 === o7 ? w2[A2] : i5.call.bind(w2[A2])) : Object.defineProperty(e7, n6, w2)), P2;
  }
  function u3(e7, t4) {
    return Object.defineProperty(e7, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: true, enumerable: true, value: t4 });
  }
  if (arguments.length >= 6) var l3 = a3[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  var f3 = Object.create(null == l3 ? null : l3), p3 = (function(e7, t4, r7, n6) {
    var o7, a4, i6 = [], s5 = function s6(t5) {
      return _checkInRHS$1(t5) === e7;
    }, u4 = /* @__PURE__ */ new Map();
    function l4(e8) {
      e8 && i6.push(c4.bind(null, e8));
    }
    for (var f4 = 0; f4 < t4.length; f4++) {
      var p4 = t4[f4];
      if (Array.isArray(p4)) {
        var d3 = p4[1], h3 = p4[2], m2 = p4.length > 3, y3 = 16 & d3, v2 = !!(8 & d3), g2 = 0 == (d3 &= 7), b3 = h3 + "/" + v2;
        if (!g2 && !m2) {
          var w2 = u4.get(b3);
          if (true === w2 || 3 === w2 && 4 !== d3 || 4 === w2 && 3 !== d3) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h3);
          u4.set(b3, !(d3 > 2) || d3);
        }
        applyDec(v2 ? e7 : e7.prototype, p4, y3, m2 ? "#" + h3 : _toPropertyKey$1(h3), d3, n6, v2 ? a4 = a4 || [] : o7 = o7 || [], i6, v2, m2, g2, 1 === d3, v2 && m2 ? s5 : r7);
      }
    }
    return l4(o7), l4(a4), i6;
  })(e6, t3, o6, f3);
  return r6.length || u3(e6, f3), { e: p3, get c() {
    var t4 = [];
    return r6.length && [u3(applyDec(e6, [r6], n5, e6.name, 5, f3, t4), f3), c4.bind(null, t4, e6)];
  } };
}
function _toPropertyKey$1(t3) {
  var i5 = _toPrimitive$1(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive$1(t3, r6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var e6 = t3[Symbol.toPrimitive];
  if (void 0 !== e6) {
    var i5 = e6.call(t3, r6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r6 ? String : Number)(t3);
}
function _setFunctionName$1(e6, t3, n5) {
  "symbol" == _typeof(t3) && (t3 = (t3 = t3.description) ? "[" + t3 + "]" : "");
  try {
    Object.defineProperty(e6, "name", { configurable: true, value: n5 ? n5 + " " + t3 : t3 });
  } catch (e7) {
  }
  return e6;
}
function _checkInRHS$1(e6) {
  if (Object(e6) !== e6) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e6 ? _typeof(e6) : "null"));
  return e6;
}
var pinSize = 20;
var _A$1 = /* @__PURE__ */ new WeakMap();
var _B$1 = /* @__PURE__ */ new WeakMap();
var _C$1 = /* @__PURE__ */ new WeakMap();
_ref$1 = (_positionDecs = n4({
  type: Object
}), _selectedDecs = n4({
  type: Boolean
}), _getPointerDecs$1 = n4({
  type: Function
}), "position");
var Pin = /* @__PURE__ */ (function(_LitElement) {
  function Pin2() {
    var _this;
    _classCallCheck(this, Pin2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$2(this, Pin2, [].concat(args));
    _classPrivateFieldInitSpec$1(_this, _A$1, (_initProto$1(_this), _init_position(_this, {
      x: 0,
      y: 0
    })));
    _classPrivateFieldInitSpec$1(_this, _B$1, _init_selected(_this, false));
    _classPrivateFieldInitSpec$1(_this, _C$1, _init_getPointer$1(_this, function() {
      return null;
    }));
    _defineProperty(_this, "drag", null);
    return _this;
  }
  _inherits(Pin2, _LitElement);
  return _createClass(Pin2, [{
    key: _ref$1,
    get: function get() {
      return _classPrivateFieldGet$1(_A$1, this);
    }
  }, {
    key: "position",
    set: function set(v2) {
      _classPrivateFieldSet$1(_A$1, this, v2);
    }
  }, {
    key: "selected",
    get: function get() {
      return _classPrivateFieldGet$1(_B$1, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$1(_B$1, this, v2);
    }
  }, {
    key: "getPointer",
    get: function get() {
      return _classPrivateFieldGet$1(_C$1, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet$1(_C$1, this, v2);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _superPropGet$1(Pin2, "connectedCallback", this, 3)([]);
      this.drag = useDrag(this.onDrag.bind(this), this.getPointer);
    }
  }, {
    key: "render",
    value: function render() {
      var style = "\n      top: ".concat(this.position.y - pinSize / 2, "px;\n      left: ").concat(this.position.x - pinSize / 2, "px;\n    ");
      return b2(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(['\n      <div\n        class="pin ', '"\n        style="', '"\n        @pointerdown="', '"\n        @contextmenu="', '"\n        data-testid="pin"\n      ></div>\n    '])), this.selected ? "selected" : "", style, this.onPointerDown, this.onContextMenu);
    }
  }, {
    key: "onPointerDown",
    value: function onPointerDown(event) {
      var _this$drag;
      event.stopPropagation();
      event.preventDefault();
      (_this$drag = this.drag) === null || _this$drag === void 0 ? void 0 : _this$drag.start(event);
      this.dispatchEvent(new CustomEvent("down", {
        detail: event
      }));
    }
  }, {
    key: "onContextMenu",
    value: function onContextMenu(event) {
      event.stopPropagation();
      event.preventDefault();
      this.dispatchEvent(new CustomEvent("menu", {
        detail: event
      }));
    }
  }, {
    key: "onDrag",
    value: function onDrag(dx, dy) {
      this.dispatchEvent(new CustomEvent("translate", {
        detail: {
          dx,
          dy
        }
      }));
    }
  }]);
})(i4);
_Pin = Pin;
var _applyDecs$e$1 = _slicedToArray(_applyDecs$1(_Pin, [[_positionDecs, 1, "position"], [_selectedDecs, 1, "selected"], [_getPointerDecs$1, 1, "getPointer"]], [], 0, void 0, i4).e, 4);
_init_position = _applyDecs$e$1[0];
_init_selected = _applyDecs$e$1[1];
_init_getPointer$1 = _applyDecs$e$1[2];
_initProto$1 = _applyDecs$e$1[3];
_defineProperty(Pin, "styles", i(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n    :host {\n      display: block;\n    }\n    .pin {\n      width: ", "px;\n      height: ", "px;\n      box-sizing: border-box;\n      background: steelblue;\n      border: 2px solid white;\n      border-radius: ", "px;\n      position: absolute;\n    }\n    .selected {\n      background: #ffd92c;\n    }\n  "])), pinSize, pinSize, pinSize));
var _Pins;
var _templateObject$1;
var _templateObject2;
var _templateObject3;
var _initProto;
var _pinsDecs;
var _init_pins;
var _onMenuDecs;
var _init_onMenu;
var _onTranslateDecs;
var _init_onTranslate;
var _onDownDecs;
var _init_onDown;
var _getPointerDecs;
var _init_getPointer;
var _ref;
function _callSuper$14(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct$14() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct$14() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct$14 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _classPrivateFieldInitSpec(e6, t3, a3) {
  _checkPrivateRedeclaration(e6, t3), t3.set(e6, a3);
}
function _checkPrivateRedeclaration(e6, t3) {
  if (t3.has(e6)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldSet(s4, a3, r6) {
  return s4.set(_assertClassBrand(s4, a3), r6), r6;
}
function _classPrivateFieldGet(s4, a3) {
  return s4.get(_assertClassBrand(s4, a3));
}
function _assertClassBrand(e6, t3, n5) {
  if ("function" == typeof e6 ? e6 === t3 : e6.has(t3)) return arguments.length < 3 ? t3 : n5;
  throw new TypeError("Private element is not present on this object");
}
function _applyDecs(e6, t3, r6, n5, o6, a3) {
  function i5(e7, t4, r7) {
    return function(n6, o7) {
      return r7 && r7(n6), e7[t4].call(n6, o7);
    };
  }
  function c4(e7, t4) {
    for (var r7 = 0; r7 < e7.length; r7++) e7[r7].call(t4);
    return t4;
  }
  function s4(e7, t4, r7, n6) {
    if ("function" != typeof e7 && (n6 || void 0 !== e7)) throw new TypeError(t4 + " must " + (r7 || "be") + " a function" + (n6 ? "" : " or undefined"));
    return e7;
  }
  function applyDec(e7, t4, r7, n6, o7, a4, c5, u4, l4, f4, p4, d3, h3) {
    function m2(e8) {
      if (!h3(e8)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y3, v2 = t4[0], g2 = t4[3], b3 = !u4;
    if (!b3) {
      r7 || Array.isArray(v2) || (v2 = [v2]);
      var w2 = {}, S3 = [], A2 = 3 === o7 ? "get" : 4 === o7 || d3 ? "set" : "value";
      f4 ? (p4 || d3 ? w2 = { get: _setFunctionName(function() {
        return g2(this);
      }, n6, "get"), set: function set(e8) {
        t4[4](this, e8);
      } } : w2[A2] = g2, p4 || _setFunctionName(w2[A2], n6, 2 === o7 ? "" : A2)) : p4 || (w2 = Object.getOwnPropertyDescriptor(e7, n6));
    }
    for (var P2 = e7, j = v2.length - 1; j >= 0; j -= r7 ? 2 : 1) {
      var D2 = v2[j], E2 = r7 ? v2[j - 1] : void 0, I2 = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o7], name: n6, metadata: a4, addInitializer: function(e8, t5) {
        if (e8.v) throw Error("attempted to call addInitializer after decoration was finished");
        s4(t5, "An initializer", "be", true), c5.push(t5);
      }.bind(null, I2) };
      try {
        if (b3) (y3 = s4(D2.call(E2, P2, O), "class decorators", "return")) && (P2 = y3);
        else {
          var k2, F;
          O["static"] = l4, O["private"] = f4, f4 ? 2 === o7 ? k2 = function k3(e8) {
            return m2(e8), w2.value;
          } : (o7 < 4 && (k2 = i5(w2, "get", m2)), 3 !== o7 && (F = i5(w2, "set", m2))) : (k2 = function k3(e8) {
            return e8[n6];
          }, (o7 < 2 || 4 === o7) && (F = function F2(e8, t5) {
            e8[n6] = t5;
          }));
          var N2 = O.access = { has: f4 ? h3.bind() : function(e8) {
            return n6 in e8;
          } };
          if (k2 && (N2.get = k2), F && (N2.set = F), P2 = D2.call(E2, d3 ? { get: w2.get, set: w2.set } : w2[A2], O), d3) {
            if ("object" == _typeof(P2) && P2) (y3 = s4(P2.get, "accessor.get")) && (w2.get = y3), (y3 = s4(P2.set, "accessor.set")) && (w2.set = y3), (y3 = s4(P2.init, "accessor.init")) && S3.push(y3);
            else if (void 0 !== P2) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s4(P2, (p4 ? "field" : "method") + " decorators", "return") && (p4 ? S3.push(P2) : w2[A2] = P2);
        }
      } finally {
        I2.v = true;
      }
    }
    return (p4 || d3) && u4.push(function(e8, t5) {
      for (var r8 = S3.length - 1; r8 >= 0; r8--) t5 = S3[r8].call(e8, t5);
      return t5;
    }), p4 || b3 || (f4 ? d3 ? u4.push(i5(w2, "get"), i5(w2, "set")) : u4.push(2 === o7 ? w2[A2] : i5.call.bind(w2[A2])) : Object.defineProperty(e7, n6, w2)), P2;
  }
  function u3(e7, t4) {
    return Object.defineProperty(e7, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: true, enumerable: true, value: t4 });
  }
  if (arguments.length >= 6) var l3 = a3[Symbol.metadata || Symbol["for"]("Symbol.metadata")];
  var f3 = Object.create(null == l3 ? null : l3), p3 = (function(e7, t4, r7, n6) {
    var o7, a4, i6 = [], s5 = function s6(t5) {
      return _checkInRHS(t5) === e7;
    }, u4 = /* @__PURE__ */ new Map();
    function l4(e8) {
      e8 && i6.push(c4.bind(null, e8));
    }
    for (var f4 = 0; f4 < t4.length; f4++) {
      var p4 = t4[f4];
      if (Array.isArray(p4)) {
        var d3 = p4[1], h3 = p4[2], m2 = p4.length > 3, y3 = 16 & d3, v2 = !!(8 & d3), g2 = 0 == (d3 &= 7), b3 = h3 + "/" + v2;
        if (!g2 && !m2) {
          var w2 = u4.get(b3);
          if (true === w2 || 3 === w2 && 4 !== d3 || 4 === w2 && 3 !== d3) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h3);
          u4.set(b3, !(d3 > 2) || d3);
        }
        applyDec(v2 ? e7 : e7.prototype, p4, y3, m2 ? "#" + h3 : _toPropertyKey(h3), d3, n6, v2 ? a4 = a4 || [] : o7 = o7 || [], i6, v2, m2, g2, 1 === d3, v2 && m2 ? s5 : r7);
      }
    }
    return l4(o7), l4(a4), i6;
  })(e6, t3, o6, f3);
  return r6.length || u3(e6, f3), { e: p3, get c() {
    var t4 = [];
    return r6.length && [u3(applyDec(e6, [r6], n5, e6.name, 5, f3, t4), f3), c4.bind(null, t4, e6)];
  } };
}
function _toPropertyKey(t3) {
  var i5 = _toPrimitive(t3, "string");
  return "symbol" == _typeof(i5) ? i5 : i5 + "";
}
function _toPrimitive(t3, r6) {
  if ("object" != _typeof(t3) || !t3) return t3;
  var e6 = t3[Symbol.toPrimitive];
  if (void 0 !== e6) {
    var i5 = e6.call(t3, r6 || "default");
    if ("object" != _typeof(i5)) return i5;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r6 ? String : Number)(t3);
}
function _setFunctionName(e6, t3, n5) {
  "symbol" == _typeof(t3) && (t3 = (t3 = t3.description) ? "[" + t3 + "]" : "");
  try {
    Object.defineProperty(e6, "name", { configurable: true, value: n5 ? n5 + " " + t3 : t3 });
  } catch (e7) {
  }
  return e6;
}
function _checkInRHS(e6) {
  if (Object(e6) !== e6) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e6 ? _typeof(e6) : "null"));
  return e6;
}
var _A = /* @__PURE__ */ new WeakMap();
var _B = /* @__PURE__ */ new WeakMap();
var _C = /* @__PURE__ */ new WeakMap();
var _D = /* @__PURE__ */ new WeakMap();
var _E = /* @__PURE__ */ new WeakMap();
_ref = (_pinsDecs = n4({
  type: Array
}), _onMenuDecs = n4({
  type: Function
}), _onTranslateDecs = n4({
  type: Function
}), _onDownDecs = n4({
  type: Function
}), _getPointerDecs = n4({
  type: Function
}), "pins");
var Pins = /* @__PURE__ */ (function(_LitElement) {
  function Pins2() {
    var _this;
    _classCallCheck(this, Pins2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$14(this, Pins2, [].concat(args));
    _classPrivateFieldInitSpec(_this, _A, (_initProto(_this), _init_pins(_this, [])));
    _classPrivateFieldInitSpec(_this, _B, _init_onMenu(_this, function() {
      return null;
    }));
    _classPrivateFieldInitSpec(_this, _C, _init_onTranslate(_this, function() {
      return null;
    }));
    _classPrivateFieldInitSpec(_this, _D, _init_onDown(_this, function() {
      return null;
    }));
    _classPrivateFieldInitSpec(_this, _E, _init_getPointer(_this, function() {
      return null;
    }));
    return _this;
  }
  _inherits(Pins2, _LitElement);
  return _createClass(Pins2, [{
    key: _ref,
    get: function get() {
      return _classPrivateFieldGet(_A, this);
    }
  }, {
    key: "pins",
    set: function set(v2) {
      _classPrivateFieldSet(_A, this, v2);
    }
  }, {
    key: "onMenu",
    get: function get() {
      return _classPrivateFieldGet(_B, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet(_B, this, v2);
    }
  }, {
    key: "onTranslate",
    get: function get() {
      return _classPrivateFieldGet(_C, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet(_C, this, v2);
    }
  }, {
    key: "onDown",
    get: function get() {
      return _classPrivateFieldGet(_D, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet(_D, this, v2);
    }
  }, {
    key: "getPointer",
    get: function get() {
      return _classPrivateFieldGet(_E, this);
    },
    set: function set(v2) {
      _classPrivateFieldSet(_E, this, v2);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return b2(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(['\n      <div class="pins">\n        ', "\n      </div>\n    "])), this.pins.map(function(pin) {
        return b2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          <rete-pin\n            .position=", "\n            .selected=", "\n            .getPointer=", "\n            @menu=", "\n            @translate=", "\n            @down=", "\n          ></rete-pin>\n        "])), pin.position, pin.selected, _this2.getPointer, function() {
          _this2.onMenu(pin.id);
        }, function(e6) {
          _this2.onTranslate(pin.id, e6.detail.dx, e6.detail.dy);
        }, function() {
          _this2.onDown(pin.id);
        });
      }));
    }
  }]);
})(i4);
_Pins = Pins;
var _applyDecs$e = _slicedToArray(_applyDecs(_Pins, [[_pinsDecs, 1, "pins"], [_onMenuDecs, 1, "onMenu"], [_onTranslateDecs, 1, "onTranslate"], [_onDownDecs, 1, "onDown"], [_getPointerDecs, 1, "getPointer"]], [], 0, void 0, i4).e, 6);
_init_pins = _applyDecs$e[0];
_init_onMenu = _applyDecs$e[1];
_init_onTranslate = _applyDecs$e[2];
_init_onDown = _applyDecs$e[3];
_init_getPointer = _applyDecs$e[4];
_initProto = _applyDecs$e[5];
_defineProperty(Pins, "styles", i(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    .pins {\n      display: flex;\n      flex-direction: column;\n    }\n  "]))));
var _templateObject;
customElements.define("rete-pins", Pins);
customElements.define("rete-pin", Pin);
function setup2(props) {
  return {
    update: function update(context) {
      if (context.data.type === "reroute-pins") {
        return {
          menu: (props === null || props === void 0 ? void 0 : props.contextMenu) || function() {
            return null;
          },
          translate: (props === null || props === void 0 ? void 0 : props.translate) || function() {
            return null;
          },
          down: (props === null || props === void 0 ? void 0 : props.pointerdown) || function() {
            return null;
          },
          pins: context.data.data.pins
        };
      }
    },
    render: function render(context, plugin) {
      if (context.data.type === "reroute-pins") {
        var area = plugin.parentScope(BaseAreaPlugin);
        return b2(_templateObject || (_templateObject = _taggedTemplateLiteral(['\n          <rete-pins\n            .onMenu="', '"\n            .onTranslate="', '"\n            .onDown="', '"\n            .getPointer="', '"\n            .pins="', '"\n          ></rete-pins>'])), (props === null || props === void 0 ? void 0 : props.contextMenu) || function() {
          return null;
        }, (props === null || props === void 0 ? void 0 : props.translate) || function() {
          return null;
        }, (props === null || props === void 0 ? void 0 : props.pointerdown) || function() {
          return null;
        }, function() {
          return area.area.pointer;
        }, context.data.data.pins);
      }
    }
  };
}
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  setup: setup2
});
var index3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  classic: index$4,
  contextMenu: index$3,
  minimap: index$2,
  reroute: index$1
});
function _createForOfIteratorHelper3(r6, e6) {
  var t3 = "undefined" != typeof Symbol && r6[Symbol.iterator] || r6["@@iterator"];
  if (!t3) {
    if (Array.isArray(r6) || (t3 = _unsupportedIterableToArray4(r6)) || e6 && r6 && "number" == typeof r6.length) {
      t3 && (r6 = t3);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n5() {
        return _n >= r6.length ? { done: true } : { done: false, value: r6[_n++] };
      }, e: function e7(r7) {
        throw r7;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o6, a3 = true, u3 = false;
  return { s: function s4() {
    t3 = t3.call(r6);
  }, n: function n5() {
    var r7 = t3.next();
    return a3 = r7.done, r7;
  }, e: function e7(r7) {
    u3 = true, o6 = r7;
  }, f: function f3() {
    try {
      a3 || null == t3["return"] || t3["return"]();
    } finally {
      if (u3) throw o6;
    }
  } };
}
function _unsupportedIterableToArray4(r6, a3) {
  if (r6) {
    if ("string" == typeof r6) return _arrayLikeToArray4(r6, a3);
    var t3 = {}.toString.call(r6).slice(8, -1);
    return "Object" === t3 && r6.constructor && (t3 = r6.constructor.name), "Map" === t3 || "Set" === t3 ? Array.from(r6) : "Arguments" === t3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t3) ? _arrayLikeToArray4(r6, a3) : void 0;
  }
}
function _arrayLikeToArray4(r6, a3) {
  (null == a3 || a3 > r6.length) && (a3 = r6.length);
  for (var e6 = 0, n5 = Array(a3); e6 < a3; e6++) n5[e6] = r6[e6];
  return n5;
}
function ownKeys3(e6, r6) {
  var t3 = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e6);
    r6 && (o6 = o6.filter(function(r7) {
      return Object.getOwnPropertyDescriptor(e6, r7).enumerable;
    })), t3.push.apply(t3, o6);
  }
  return t3;
}
function _objectSpread3(e6) {
  for (var r6 = 1; r6 < arguments.length; r6++) {
    var t3 = null != arguments[r6] ? arguments[r6] : {};
    r6 % 2 ? ownKeys3(Object(t3), true).forEach(function(r7) {
      _defineProperty(e6, r7, t3[r7]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(t3)) : ownKeys3(Object(t3)).forEach(function(r7) {
      Object.defineProperty(e6, r7, Object.getOwnPropertyDescriptor(t3, r7));
    });
  }
  return e6;
}
function _callSuper5(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct5() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct5() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct5 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _superPropGet2(t3, e6, o6, r6) {
  var p3 = _get(_getPrototypeOf(1 & r6 ? t3.prototype : t3), e6, o6);
  return 2 & r6 && "function" == typeof p3 ? function(t4) {
    return p3.apply(o6, t4);
  } : p3;
}
customElements.define("rete-root", RootElement);
var LitPlugin = /* @__PURE__ */ (function(_Scope) {
  function LitPlugin2() {
    var _this;
    _classCallCheck(this, LitPlugin2);
    _this = _callSuper5(this, LitPlugin2, ["lit"]);
    _defineProperty(_this, "presets", []);
    _defineProperty(_this, "owners", /* @__PURE__ */ new WeakMap());
    _this.renderer = getRenderer();
    _this.addPipe(function(context) {
      if (!context || _typeof(context) !== "object" || !("type" in context)) return context;
      if (context.type === "unmount") {
        _this.unmount(context.data.element);
      } else if (context.type === "render") {
        if ("filled" in context.data && context.data.filled) {
          return context;
        }
        if (_this.mount(context.data.element, context)) {
          return _objectSpread3(_objectSpread3({}, context), {}, {
            data: _objectSpread3(_objectSpread3({}, context.data), {}, {
              filled: true
            })
          });
        }
      }
      return context;
    });
    return _this;
  }
  _inherits(LitPlugin2, _Scope);
  return _createClass(LitPlugin2, [{
    key: "setParent",
    value: function setParent(scope) {
      var _this2 = this;
      _superPropGet2(LitPlugin2, "setParent", this, 3)([scope]);
      this.presets.forEach(function(preset) {
        if (preset.attach) preset.attach(_this2);
      });
    }
  }, {
    key: "mount",
    value: function mount(element, context) {
      var _this3 = this;
      var existing = this.renderer.get(element);
      var parent = this.parentScope();
      if (existing) {
        this.presets.forEach(function(preset) {
          if (_this3.owners.get(element) !== preset) return;
          var result = preset.update(context, _this3);
          if (result) {
            _this3.renderer.update(existing, result);
          }
        });
        return true;
      }
      var _iterator = _createForOfIteratorHelper3(this.presets), _step;
      try {
        var _loop = function _loop2() {
          var preset = _step.value;
          var result = preset.render(context, _this3);
          if (!result) return 0;
          var _ref2 = context, data = _ref2.data;
          _this3.renderer.mount(element, result, function() {
            return void parent.emit({
              type: "rendered",
              data
            });
          });
          _this3.owners.set(element, preset);
          return {
            v: true
          };
        }, _ret;
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          _ret = _loop();
          if (_ret === 0) continue;
          if (_ret) return _ret.v;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "unmount",
    value: function unmount(element) {
      this.owners["delete"](element);
      this.renderer.unmount(element);
    }
    /**
     * Adds a preset to the plugin.
     * @param preset Preset that can render nodes, connections and other elements.
     */
  }, {
    key: "addPreset",
    value: function addPreset(preset) {
      var local = preset;
      if (local.attach) local.attach(this);
      this.presets.push(local);
    }
  }]);
})(Scope);

// node_modules/rete-context-menu-plugin/rete-context-menu-plugin.esm.js
var import_regenerator6 = __toESM(require_regenerator2());
function ownKeys4(e6, r6) {
  var t3 = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var o6 = Object.getOwnPropertySymbols(e6);
    r6 && (o6 = o6.filter(function(r7) {
      return Object.getOwnPropertyDescriptor(e6, r7).enumerable;
    })), t3.push.apply(t3, o6);
  }
  return t3;
}
function _objectSpread4(e6) {
  for (var r6 = 1; r6 < arguments.length; r6++) {
    var t3 = null != arguments[r6] ? arguments[r6] : {};
    r6 % 2 ? ownKeys4(Object(t3), true).forEach(function(r7) {
      _defineProperty(e6, r7, t3[r7]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(t3)) : ownKeys4(Object(t3)).forEach(function(r7) {
      Object.defineProperty(e6, r7, Object.getOwnPropertyDescriptor(t3, r7));
    });
  }
  return e6;
}
function createItem(_ref2, key, context) {
  var _ref22 = _slicedToArray(_ref2, 2), label = _ref22[0], factory = _ref22[1];
  var item = {
    label,
    key: String(key),
    handler: function handler() {
    }
  };
  if (typeof factory === "function") {
    return _objectSpread4(_objectSpread4({}, item), {}, {
      handler: function handler() {
        return _asyncToGenerator(/* @__PURE__ */ import_regenerator6.default.mark(function _callee() {
          var node;
          return import_regenerator6.default.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return factory();
              case 2:
                node = _context.sent;
                _context.next = 5;
                return context.editor.addNode(node);
              case 5:
                void context.area.translate(node.id, context.area.area.pointer);
              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }
    });
  }
  return _objectSpread4(_objectSpread4({}, item), {}, {
    handler: function handler() {
    },
    subitems: factory.map(function(data, i5) {
      return createItem(data, i5, context);
    })
  });
}
function _createForOfIteratorHelper4(r6, e6) {
  var t3 = "undefined" != typeof Symbol && r6[Symbol.iterator] || r6["@@iterator"];
  if (!t3) {
    if (Array.isArray(r6) || (t3 = _unsupportedIterableToArray5(r6)) || e6 && r6 && "number" == typeof r6.length) {
      t3 && (r6 = t3);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n5() {
        return _n >= r6.length ? { done: true } : { done: false, value: r6[_n++] };
      }, e: function e7(r7) {
        throw r7;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o6, a3 = true, u3 = false;
  return { s: function s4() {
    t3 = t3.call(r6);
  }, n: function n5() {
    var r7 = t3.next();
    return a3 = r7.done, r7;
  }, e: function e7(r7) {
    u3 = true, o6 = r7;
  }, f: function f3() {
    try {
      a3 || null == t3["return"] || t3["return"]();
    } finally {
      if (u3) throw o6;
    }
  } };
}
function _unsupportedIterableToArray5(r6, a3) {
  if (r6) {
    if ("string" == typeof r6) return _arrayLikeToArray5(r6, a3);
    var t3 = {}.toString.call(r6).slice(8, -1);
    return "Object" === t3 && r6.constructor && (t3 = r6.constructor.name), "Map" === t3 || "Set" === t3 ? Array.from(r6) : "Arguments" === t3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t3) ? _arrayLikeToArray5(r6, a3) : void 0;
  }
}
function _arrayLikeToArray5(r6, a3) {
  (null == a3 || a3 > r6.length) && (a3 = r6.length);
  for (var e6 = 0, n5 = Array(a3); e6 < a3; e6++) n5[e6] = r6[e6];
  return n5;
}
function setup3(nodes) {
  return function(context, plugin) {
    var _context$clone;
    var area = plugin.parentScope(BaseAreaPlugin);
    var editor = area.parentScope(NodeEditor);
    if (context === "root") {
      return {
        searchBar: true,
        list: nodes.map(function(item, i5) {
          return createItem(item, i5, {
            editor,
            area
          });
        })
      };
    }
    var deleteItem = {
      label: "Delete",
      key: "delete",
      handler: function handler() {
        return _asyncToGenerator(/* @__PURE__ */ import_regenerator6.default.mark(function _callee() {
          var connectionId, nodeId, connections, _iterator, _step, connection;
          return import_regenerator6.default.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!("source" in context && "target" in context)) {
                  _context.next = 6;
                  break;
                }
                connectionId = context.id;
                _context.next = 4;
                return editor.removeConnection(connectionId);
              case 4:
                _context.next = 27;
                break;
              case 6:
                nodeId = context.id;
                connections = editor.getConnections().filter(function(c4) {
                  return c4.source === nodeId || c4.target === nodeId;
                });
                _iterator = _createForOfIteratorHelper4(connections);
                _context.prev = 9;
                _iterator.s();
              case 11:
                if ((_step = _iterator.n()).done) {
                  _context.next = 17;
                  break;
                }
                connection = _step.value;
                _context.next = 15;
                return editor.removeConnection(connection.id);
              case 15:
                _context.next = 11;
                break;
              case 17:
                _context.next = 22;
                break;
              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](9);
                _iterator.e(_context.t0);
              case 22:
                _context.prev = 22;
                _iterator.f();
                return _context.finish(22);
              case 25:
                _context.next = 27;
                return editor.removeNode(nodeId);
              case 27:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[9, 19, 22, 25]]);
        }))();
      }
    };
    var clone = (_context$clone = context.clone) === null || _context$clone === void 0 ? void 0 : _context$clone.bind(context);
    var cloneItem = clone && {
      label: "Clone",
      key: "clone",
      handler: function handler() {
        return _asyncToGenerator(/* @__PURE__ */ import_regenerator6.default.mark(function _callee2() {
          var node;
          return import_regenerator6.default.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                node = clone();
                _context2.next = 3;
                return editor.addNode(node);
              case 3:
                void area.translate(node.id, area.area.pointer);
              case 4:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    };
    return {
      searchBar: false,
      list: [deleteItem].concat(_toConsumableArray(cloneItem ? [cloneItem] : []))
    };
  };
}
var index$12 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  setup: setup3
});
var index4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  classic: index$12
});
function _callSuper6(t3, o6, e6) {
  return o6 = _getPrototypeOf(o6), _possibleConstructorReturn(t3, _isNativeReflectConstruct6() ? Reflect.construct(o6, e6 || [], _getPrototypeOf(t3).constructor) : o6.apply(t3, e6));
}
function _isNativeReflectConstruct6() {
  try {
    var t3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t4) {
  }
  return (_isNativeReflectConstruct6 = function _isNativeReflectConstruct7() {
    return !!t3;
  })();
}
function _superPropGet3(t3, e6, o6, r6) {
  var p3 = _get(_getPrototypeOf(1 & r6 ? t3.prototype : t3), e6, o6);
  return 2 & r6 && "function" == typeof p3 ? function(t4) {
    return p3.apply(o6, t4);
  } : p3;
}
var ContextMenuPlugin = /* @__PURE__ */ (function(_Scope) {
  function ContextMenuPlugin2(props) {
    var _this;
    _classCallCheck(this, ContextMenuPlugin2);
    _this = _callSuper6(this, ContextMenuPlugin2, ["context-menu"]);
    _this.props = props;
    return _this;
  }
  _inherits(ContextMenuPlugin2, _Scope);
  return _createClass(ContextMenuPlugin2, [{
    key: "setParent",
    value: function setParent(scope) {
      var _this2 = this;
      _superPropGet3(ContextMenuPlugin2, "setParent", this, 3)([scope]);
      var area = this.parentScope(BaseAreaPlugin);
      var container = area.container;
      if (!container || !(container instanceof HTMLElement)) throw new Error("container expected");
      var element = document.createElement("div");
      element.style.display = "none";
      element.style.position = "fixed";
      this.addPipe(function(context) {
        var parent = _this2.parentScope();
        if (!context || _typeof(context) !== "object" || !("type" in context)) return context;
        if (context.type === "unmount") {
          if (context.data.element === element) {
            element.style.display = "none";
          }
        } else if (context.type === "contextmenu") {
          context.data.event.preventDefault();
          context.data.event.stopPropagation();
          var _this2$props$items = _this2.props.items(context.data.context, _this2), searchBar = _this2$props$items.searchBar, list = _this2$props$items.list;
          container.appendChild(element);
          element.style.left = "".concat(context.data.event.clientX, "px");
          element.style.top = "".concat(context.data.event.clientY, "px");
          element.style.display = "";
          void parent.emit({
            type: "render",
            data: {
              type: "contextmenu",
              element,
              searchBar,
              onHide: function onHide() {
                void parent.emit({
                  type: "unmount",
                  data: {
                    element
                  }
                });
              },
              items: list
            }
          });
        } else if (context.type === "pointerdown") {
          if (!context.data.event.composedPath().includes(element)) {
            void parent.emit({
              type: "unmount",
              data: {
                element
              }
            });
          }
        }
        return context;
      });
    }
  }]);
})(Scope);

// graph.ts
var Bruh = class extends classic.Node {
  width = 180;
  height = 120;
  constructor(socket) {
    super("bruh");
    this.addInput("port", new classic.Input(socket));
    this.addOutput("port", new classic.Output(socket));
  }
};
async function createEditor(container) {
  const socket = new classic.Socket("socket");
  const editor = new NodeEditor();
  const area = new AreaPlugin(container);
  const connection = new ConnectionPlugin();
  const render = new LitPlugin();
  const contextMenu = new ContextMenuPlugin({
    items: index4.classic.setup([["Node", () => new Bruh(socket)]])
  });
  index.selectableNodes(area, index.selector(), {
    accumulating: index.accumulateOnCtrl()
  });
  render.addPreset(index3.classic.setup());
  render.addPreset(index3.contextMenu.setup());
  connection.addPreset(index2.classic.setup());
  editor.use(area);
  area.use(connection);
  area.use(render);
  area.use(contextMenu);
  index.simpleNodesOrder(area);
  setTimeout(() => {
    index.zoomAt(area, editor.getNodes());
  }, 10);
  return {
    destroy: () => area.destroy()
  };
}
export {
  createEditor
};
/*! Bundled license information:

@babel/runtime/helpers/regenerator.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)

rete/rete.esm.js:
  (*!
  * rete v2.0.5
  * (c) 2025 Vitaliy Stoliarov
  * Released under the MIT license.
  * *)

rete-area-plugin/rete-area-plugin.esm.js:
  (*!
  * rete-area-plugin v2.3.1
  * (c) 2026 Vitaliy Stoliarov
  * Released under the MIT license.
  * *)

rete-connection-plugin/rete-connection-plugin.esm.js:
  (*!
  * rete-connection-plugin v2.0.4
  * (c) 2024 Vitaliy Stoliarov
  * Released under the MIT license.
  * *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

rete-render-utils/rete-render-utils.esm.js:
  (*!
  * rete-render-utils v2.0.2
  * (c) 2024 Vitaliy Stoliarov
  * Released under the MIT license.
  * *)

@retejs/lit-plugin/lit-plugin.esm.js:
  (*!
  * @retejs/lit-plugin v2.0.7
  * (c) 2026 Vitaliy Stoliarov
  * Released under the MIT license.
  * *)

rete-context-menu-plugin/rete-context-menu-plugin.esm.js:
  (*!
  * rete-context-menu-plugin v2.0.5
  * (c) 2025 Vitaliy Stoliarov
  * Released under the MIT license.
  * *)
*/
