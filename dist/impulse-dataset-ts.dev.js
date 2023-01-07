/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/typescript/Computation/AbstractComputation.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/Computation/AbstractComputation.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractComputation": () => (/* binding */ AbstractComputation)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AbstractComputation = /*#__PURE__*/function () {
  function AbstractComputation() {
    _classCallCheck(this, AbstractComputation);
    _defineProperty(this, "kernels", {});
  }
  _createClass(AbstractComputation, [{
    key: "addKernel",
    value: function addKernel(name, func) {
      this.kernels[name] = func;
      return this;
    }
  }, {
    key: "execute",
    value: function execute(name) {
      if (!this.kernels[name]) {
        throw new Error("Kernel '".concat(name, "' not exists."));
      }
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return this.kernels[name].apply(null, args);
    }
  }]);
  return AbstractComputation;
}();

/***/ }),

/***/ "./src/typescript/Computation/ComputationCPU.ts":
/*!******************************************************!*\
  !*** ./src/typescript/Computation/ComputationCPU.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputationCPU": () => (/* binding */ ComputationCPU),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "addNumber": () => (/* binding */ addNumber),
/* harmony export */   "divideNumber": () => (/* binding */ divideNumber),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "elementWiseDivide": () => (/* binding */ elementWiseDivide),
/* harmony export */   "elementWiseMultiply": () => (/* binding */ elementWiseMultiply),
/* harmony export */   "fillRandom": () => (/* binding */ fillRandom),
/* harmony export */   "fillZeros": () => (/* binding */ fillZeros),
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "logMinusOne": () => (/* binding */ logMinusOne),
/* harmony export */   "logisticActivation": () => (/* binding */ logisticActivation),
/* harmony export */   "logisticBackpropagation": () => (/* binding */ logisticBackpropagation),
/* harmony export */   "logisticLoss": () => (/* binding */ logisticLoss),
/* harmony export */   "multiplyNumber": () => (/* binding */ multiplyNumber),
/* harmony export */   "penalty": () => (/* binding */ penalty),
/* harmony export */   "pow": () => (/* binding */ pow),
/* harmony export */   "purelinLoss": () => (/* binding */ purelinLoss),
/* harmony export */   "reluActivation": () => (/* binding */ reluActivation),
/* harmony export */   "reluBackpropagation": () => (/* binding */ reluBackpropagation),
/* harmony export */   "setOnes": () => (/* binding */ setOnes),
/* harmony export */   "softplusActivation": () => (/* binding */ softplusActivation),
/* harmony export */   "sqrt": () => (/* binding */ sqrt),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "subtractFromNumber": () => (/* binding */ subtractFromNumber),
/* harmony export */   "tanhActivation": () => (/* binding */ tanhActivation),
/* harmony export */   "transpose": () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var elementWiseDivide = function elementWiseDivide(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal.");
  }
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = m1.data[row][col] / m2.data[row][col];
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m2.cols, data);
};
var divideNumber = function divideNumber(m1, num) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = m1.data[row][col] / num;
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var logisticActivation = function logisticActivation(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      data[row][col] = 1.0 / (1.0 + Math.exp(-m.data[row][col]));
    }
  }
  return _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix.from(data);
};
var logisticLoss = function logisticLoss(output, predictions) {
  var log = [];
  var epsilon = 1e-8;
  for (var row = 0; row < predictions.rows; row += 1) {
    log[row] = [];
    for (var col = 0; col < predictions.cols; col += 1) {
      if (predictions.data) {
        log[row][col] = Math.log(predictions.data[row][col] + epsilon);
      }
    }
  }
  var firstMatrix = elementWiseMultiply(new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(predictions.rows, predictions.cols, log), output);
  var sub = [];
  for (var _row = 0; _row < output.rows; _row += 1) {
    sub[_row] = [];
    for (var _col = 0; _col < output.cols; _col += 1) {
      if (output.data) {
        sub[_row][_col] = 1.0 - output.data[_row][_col];
      }
    }
  }
  var toMultiply2 = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(output.rows, output.cols, sub);
  var data = [];
  for (var _row2 = 0; _row2 < predictions.rows; _row2 += 1) {
    data[_row2] = [];
    for (var _col2 = 0; _col2 < predictions.cols; _col2 += 1) {
      if (predictions.data) {
        data[_row2][_col2] = Math.log(1.0 - predictions.data[_row2][_col2] + epsilon);
      }
    }
  }
  var toMultiply1 = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(predictions.rows, predictions.cols, data);
  return add(elementWiseMultiply(multiplyNumber(firstMatrix, -1), output), elementWiseMultiply(multiplyNumber(toMultiply1, -1), subtractFromNumber(toMultiply2, 1))).sum();
};
var logisticBackpropagation = function logisticBackpropagation(sigma, oldY) {
  return logisticActivation(oldY).multiply(logisticActivation(oldY).minusOne());
};
var tanhActivation = function tanhActivation(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      data[row][col] = (1 - Math.exp(-2 * m.data[row][col])) / (1 + Math.exp(-2 * m.data[row][col]));
    }
  }
  return _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix.from(data);
};
var reluActivation = function reluActivation(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.max(0.0, m.data[row][col]);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, data);
};
var reluBackpropagation = function reluBackpropagation(sigma, oldY) {
  var data = [];
  for (var row = 0; row < sigma.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < sigma.cols; col += 1) {
      if (sigma.data) {
        data[row][col] = oldY.data[row][col] > 0 ? 1 : 0;
      }
    }
  }
  return elementWiseMultiply(new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(sigma.rows, sigma.cols, data), sigma);
};
var softplusActivation = function softplusActivation(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.log(1 + Math.exp(m.data[row][col]));
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, data);
};
var penalty = function penalty(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.pow(m.data[row][col], 2);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, data).sum();
};
var sqrt = function sqrt(m) {
  var data = [];
  for (var row = 0; row < m.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m.cols; col += 1) {
      if (m.data) {
        data[row][col] = Math.sqrt(m.data[row][col] + 1e-8);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.rows, m.cols, data);
};
var purelinLoss = function purelinLoss(output, predictions) {
  var data = [];
  for (var row = 0; row < output.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < output.cols; col += 1) {
      if (output.data) {
        data[row][col] = output.data[row][col] - Math.pow(predictions[row][col], 2);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(output.rows, output.cols, data).sum();
};
var dot = function dot(m1, m2) {
  if (m1.cols !== m2.rows) {
    throw new Error("DIMENSIONS error. m1.cols ".concat(m1.rows, " ").concat(m1.cols, " !== m2.rows ").concat(m2.rows, " ").concat(m2.cols, "."));
  }
  var data = [];
  for (var row = 0; row < m1.rows; ++row) {
    data[row] = new Array(m2.cols);
    for (var col = 0; col < m2.cols; ++col) {
      data[row][col] = 0;
      for (var i = 0; i < m1.cols; ++i) {
        if (m1.data && m2.data) {
          data[row][col] += m1.data[row][i] * m2.data[i][col];
        }
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m2.cols, data);
};
var add = function add(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal.");
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal. m1.cols ".concat(m1.cols, " !== m2.cols ").concat(m2.cols));
  }
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data && m2.data) {
        data[row][col] = m1.data[row][col] + m2.data[row][col];
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var subtract = function subtract(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal: m1.rows ".concat(m1.rows, " !== m2.rows ").concat(m2.rows));
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal: m1.cols ".concat(m1.cols, " !== m2.cols ").concat(m2.cols));
  }
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data && m2.data) {
        data[row][col] = m1.data[row][col] - m2.data[row][col];
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var fillRandom = function fillRandom(m1, parameter) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = (Math.random() * 4 - 2) * Math.sqrt(2 / parameter); // todo: gaussian distribution
    }
  }

  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var fillZeros = function fillZeros(m1) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = 0;
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var setOnes = function setOnes(m1) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = 1;
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var elementWiseMultiply = function elementWiseMultiply(m1, m2) {
  if (m1.rows !== m2.rows) {
    throw new Error("ROWS number not equal: m1.rows ".concat(m1.rows, " !== m2.rows ").concat(m2.rows));
  }
  if (m1.cols !== m2.cols) {
    throw new Error("COLS number not equal: m1.cols ".concat(m1.cols, " !== m2.cols ").concat(m2.cols));
  }
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data && m2.data) {
        data[row][col] = m1.data[row][col] * m2.data[row][col];
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var multiplyNumber = function multiplyNumber(m1, num) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = m1.data[row][col] * num;
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var subtractFromNumber = function subtractFromNumber(m1, num) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = num - m1.data[row][col];
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var pow = function pow(m1, _pow) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = Math.pow(m1.data[row][col], _pow);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var log = function log(m1, pow) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = Math.log(m1.data[row][col] + 1e-8);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var logMinusOne = function logMinusOne(m1, pow) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      if (m1.data) {
        data[row][col] = Math.log(1 - m1.data[row][col]);
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var addNumber = function addNumber(m1, num) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (var col = 0; col < m1.cols; col += 1) {
      data[row][col] = m1.data[row][col] + num;
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m1.rows, m1.cols, data);
};
var transpose = function transpose(m) {
  var data = [];
  for (var col = 0; col < m.cols; col += 1) {
    data[col] = [];
    for (var row = 0; row < m.rows; row += 1) {
      if (m.data) {
        data[col][row] = m.data[row][col];
      }
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(m.cols, m.rows, data);
};
var ComputationCPU = /*#__PURE__*/function (_AbstractComputation) {
  _inherits(ComputationCPU, _AbstractComputation);
  var _super = _createSuper(ComputationCPU);
  function ComputationCPU() {
    var _this;
    _classCallCheck(this, ComputationCPU);
    _this = _super.call(this);
    _this.addKernel("multiply", dot);
    _this.addKernel("add", add);
    _this.addKernel("subtract", subtract);
    _this.addKernel("subtractFromNumber", subtractFromNumber);
    _this.addKernel("fillRandom", fillRandom);
    _this.addKernel("fillZeros", fillZeros);
    _this.addKernel("elementWiseMultiply", elementWiseMultiply);
    _this.addKernel("multiplyNumber", multiplyNumber);
    _this.addKernel("elementWiseDivide", elementWiseDivide);
    _this.addKernel("divideNumber", divideNumber);
    _this.addKernel("logisticActivation", logisticActivation);
    _this.addKernel("logisticLoss", logisticLoss);
    _this.addKernel("logisticBackpropagation", logisticBackpropagation);
    _this.addKernel("tanhActivation", tanhActivation);
    _this.addKernel("reluActivation", reluActivation);
    _this.addKernel("reluBackpropagation", reluBackpropagation);
    _this.addKernel("softplusActivation", softplusActivation);
    _this.addKernel("penalty", penalty);
    _this.addKernel("sqrt", sqrt);
    _this.addKernel("transpose", transpose);
    _this.addKernel("pow", pow);
    _this.addKernel("log", log);
    _this.addKernel("logMinusOne", logMinusOne);
    _this.addKernel("addNumber", addNumber);
    return _this;
  }
  return _createClass(ComputationCPU);
}(_AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation);

/***/ }),

/***/ "./src/typescript/Computation/ComputationGPU.ts":
/*!******************************************************!*\
  !*** ./src/typescript/Computation/ComputationGPU.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputationGPU": () => (/* binding */ ComputationGPU)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ComputationGPU = /*#__PURE__*/function (_AbstractComputation) {
  _inherits(ComputationGPU, _AbstractComputation);
  var _super = _createSuper(ComputationGPU);
  function ComputationGPU() {
    _classCallCheck(this, ComputationGPU);
    return _super.call(this);
    /*this.addKernel("multiply", dot);
    this.addKernel("add", add);
    this.addKernel("subtract", subtract);
    this.addKernel("fillRandom", fillRandom);
    this.addKernel("fillZeros", fillZeros);
    this.addKernel("elementWiseMultiply", elementWiseMultiply);
    this.addKernel("multiplyNumber", multiplyNumber);
    this.addKernel("elementWiseDivide", elementWiseDivide);
    this.addKernel("divideNumber", divideNumber);
    this.addKernel("softmaxActivation", softmaxActivation);
    this.addKernel("softmaxLoss", softmaxLoss);
    this.addKernel("logisticActivation", logisticActivation);
    this.addKernel("logisticLoss", logisticLoss);
    this.addKernel("tanhActivation", tanhActivation);
    this.addKernel("reluActivation", reluActivation);
    this.addKernel("softplusActivation", softplusActivation);
    this.addKernel("penalty", penalty);
    this.addKernel("sqrt", sqrt);
    this.addKernel("purelinLoss", purelinLoss);
    this.addKernel("transpose", transpose);*/
  }
  return _createClass(ComputationGPU);
}(_AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation);

/***/ }),

/***/ "./src/typescript/Computation/index.ts":
/*!*********************************************!*\
  !*** ./src/typescript/Computation/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractComputation": () => (/* reexport safe */ _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation),
/* harmony export */   "ComputationCPU": () => (/* reexport safe */ _ComputationCPU__WEBPACK_IMPORTED_MODULE_2__.ComputationCPU),
/* harmony export */   "ComputationGPU": () => (/* reexport safe */ _ComputationGPU__WEBPACK_IMPORTED_MODULE_1__.ComputationGPU),
/* harmony export */   "getComputation": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.getComputation),
/* harmony export */   "setComputation": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.setComputation)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _ComputationGPU__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputationGPU */ "./src/typescript/Computation/ComputationGPU.ts");
/* harmony import */ var _ComputationCPU__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputationCPU */ "./src/typescript/Computation/ComputationCPU.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/typescript/Computation/utils.ts");






/***/ }),

/***/ "./src/typescript/Computation/utils.ts":
/*!*********************************************!*\
  !*** ./src/typescript/Computation/utils.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComputation": () => (/* binding */ getComputation),
/* harmony export */   "setComputation": () => (/* binding */ setComputation)
/* harmony export */ });
/* harmony import */ var _ComputationCPU__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComputationCPU */ "./src/typescript/Computation/ComputationCPU.ts");

var currentComputation = new _ComputationCPU__WEBPACK_IMPORTED_MODULE_0__.ComputationCPU();
var setComputation = function setComputation(type) {
  currentComputation = type;
};
var getComputation = function getComputation() {
  return currentComputation;
};

/***/ }),

/***/ "./src/typescript/Dataset/Dataset.ts":
/*!*******************************************!*\
  !*** ./src/typescript/Dataset/Dataset.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dataset": () => (/* binding */ Dataset)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Dataset = /*#__PURE__*/function () {
  function Dataset() {
    var exampleSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var numberOfExamples = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var arr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, Dataset);
    _defineProperty(this, "exampleSize", 0);
    _defineProperty(this, "numberOfExamples", 0);
    _defineProperty(this, "data", null);
    this.exampleSize = exampleSize;
    this.numberOfExamples = numberOfExamples;
    if (arr) {
      var data = [];
      for (var row = 0; row < exampleSize; row += 1) {
        data[row] = new Array(numberOfExamples);
        for (var col = 0; col < numberOfExamples; col += 1) {
          if (typeof arr[row][col] === "string") {
            // @ts-ignore
            data[row][col] = arr[row][col].length ? arr[row][col] : NaN;
          } else if (typeof arr[row][col] === "number") {
            data[row][col] = arr[row][col];
          } else {
            data[row][col] = NaN;
          }
        }
      }
      this.data = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.exampleSize, this.numberOfExamples, data);
    }
  }
  _createClass(Dataset, [{
    key: "exampleAt",
    value: function exampleAt(index) {
      return this.data.col(index);
    }
  }, {
    key: "getNumberOfExamples",
    value: function getNumberOfExamples() {
      return this.numberOfExamples;
    }
  }, {
    key: "getExampleSize",
    value: function getExampleSize() {
      return this.exampleSize;
    }
  }, {
    key: "getBatch",
    value: function getBatch(offset, batchSize) {
      var data = this.data.block(0, offset, this.data.rows, batchSize);
      return Dataset.fromMatrix(data);
    }
  }, {
    key: "insertColumnAfter",
    value: function insertColumnAfter(column) {
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var oldData = this.data.copy();
      this.data.resize(this.data.rows, this.data.cols + size);
      for (var row = 0; row < this.data.rows; row += 1) {
        for (var col = 0; col < this.data.cols; col += 1) {
          if (col <= column) {
            this.data.data[row][col] = oldData.data[row][col];
          } else if (col > column && col < column + size) {
            this.data.data[row][col] = undefined;
          } else if (col >= column + size - 1) {
            this.data.data[row][col] = oldData.data[row][col - size];
          }
        }
      }
    }
  }], [{
    key: "fromMatrix",
    value: function fromMatrix(m) {
      var instance = new Dataset();
      instance.exampleSize = m.rows;
      instance.numberOfExamples = m.cols;
      instance.data = m;
      return instance;
    }
  }]);
  return Dataset;
}();

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts":
/*!***************************************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractDatasetModifier": () => (/* binding */ AbstractDatasetModifier)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AbstractDatasetModifier = /*#__PURE__*/_createClass(function AbstractDatasetModifier(dataset) {
  _classCallCheck(this, AbstractDatasetModifier);
  _defineProperty(this, "dataset", null);
  this.dataset = dataset;
});

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/Callback.ts":
/*!************************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/Callback.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallbackDatasetModifier": () => (/* binding */ CallbackDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var CallbackDatasetModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  _inherits(CallbackDatasetModifier, _AbstractDatasetModif);
  var _super = _createSuper(CallbackDatasetModifier);
  function CallbackDatasetModifier() {
    var _this;
    _classCallCheck(this, CallbackDatasetModifier);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "callback", function (example) {
      return example;
    });
    return _this;
  }
  _createClass(CallbackDatasetModifier, [{
    key: "apply",
    value: function apply() {
      for (var exampleIndex = 0; exampleIndex < this.dataset.getNumberOfExamples(); exampleIndex += 1) {
        var _example = this.callback(this.dataset.exampleAt(exampleIndex));
        for (var row = 0; row < this.dataset.data.rows; row += 1) {
          if (_example) {
            this.dataset.data.data[row][exampleIndex] = _example.data[row][0];
          }
        }
      }
      return this.dataset;
    }
  }, {
    key: "setCallback",
    value: function setCallback(callback) {
      this.callback = callback;
      return this;
    }
  }]);
  return CallbackDatasetModifier;
}(_AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/Category.ts":
/*!************************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/Category.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryDatasetModifier": () => (/* binding */ CategoryDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CategoryDatasetModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  _inherits(CategoryDatasetModifier, _AbstractDatasetModif);
  var _super = _createSuper(CategoryDatasetModifier);
  function CategoryDatasetModifier(columns) {
    var _this;
    _classCallCheck(this, CategoryDatasetModifier);
    _this = _super.call(this, null);
    _this.columns = columns;
    return _this;
  }
  _createClass(CategoryDatasetModifier, [{
    key: "apply",
    value: function apply(dataset) {
      var _this2 = this;
      var size = 0;
      var _dataset = dataset;
      this.columns.forEach(function (column) {
        var _this2$applyForColumn = _this2.applyForColumn(_dataset, column + size),
          _this2$applyForColumn2 = _slicedToArray(_this2$applyForColumn, 2),
          dataset = _this2$applyForColumn2[0],
          _size = _this2$applyForColumn2[1];
        // @ts-ignore
        size += _size;
        _dataset = dataset;
      });
      return dataset;
    }
  }, {
    key: "applyForColumn",
    value: function applyForColumn(dataset, column) {
      var example = dataset.data.col(column);
      var values = [];
      for (var row = 0; row < example.rows; row += 1) {
        values.push(example.value(row, 0));
      }
      console.log(values);
      values = values.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      dataset.insertColumnAfter(column, values.length - 1);
      for (var _row = 0; _row < dataset.data.rows; _row += 1) {
        var oldValue = dataset.data.data[_row][column];
        var index = 0;
        for (var col = 0; col < column + values.length; col += 1) {
          if (col >= column && col < column + values.length) {
            if (index === values.indexOf(oldValue)) {
              dataset.data.data[_row][col] = 1;
            } else {
              dataset.data.data[_row][col] = 0;
            }
            index += 1;
          } else {
            // dataset.data.data[row][col] = dataset.data.data[row][col];
          }
        }
      }
      return [dataset, values.length - 1];
    }
  }]);
  return CategoryDatasetModifier;
}(_AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/MinMaxScaling.ts":
/*!*****************************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/MinMaxScaling.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinMaxScalingDatasetModifier": () => (/* binding */ MinMaxScalingDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MinMaxScalingDatasetModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  _inherits(MinMaxScalingDatasetModifier, _AbstractDatasetModif);
  var _super = _createSuper(MinMaxScalingDatasetModifier);
  function MinMaxScalingDatasetModifier() {
    _classCallCheck(this, MinMaxScalingDatasetModifier);
    return _super.apply(this, arguments);
  }
  _createClass(MinMaxScalingDatasetModifier, [{
    key: "apply",
    value: function apply(dataset) {
      var min = Infinity;
      var max = -Infinity;
      for (var col = 0; col < dataset.getNumberOfExamples(); col += 1) {
        var example = dataset.exampleAt(col);
        for (var row = 0; row < example.rows; row += 1) {
          if (min > example.data[row][0]) {
            min = example.data[row][0];
          }
          if (max < example.data[row][0]) {
            max = example.data[row][0];
          }
        }
      }
      for (var _col = 0; _col < dataset.getNumberOfExamples(); _col += 1) {
        var _example = dataset.exampleAt(_col);
        for (var _row = 0; _row < _example.rows; _row += 1) {
          dataset.data.data[_row][_col] = (_example.data[_row][0] - min) / (max - min);
        }
      }
      return dataset;
    }
  }]);
  return MinMaxScalingDatasetModifier;
}(_AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/MissingData.ts":
/*!***************************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/MissingData.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissingDataScalingDatasetModifier": () => (/* binding */ MissingDataScalingDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var MissingDataScalingDatasetModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  _inherits(MissingDataScalingDatasetModifier, _AbstractDatasetModif);
  var _super = _createSuper(MissingDataScalingDatasetModifier);
  function MissingDataScalingDatasetModifier() {
    var _this;
    _classCallCheck(this, MissingDataScalingDatasetModifier);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "modificationType", "mean");
    return _this;
  }
  _createClass(MissingDataScalingDatasetModifier, [{
    key: "apply",
    value: function apply(dataset) {
      var rowsToFill = [];
      var correctExamplesCount = 0;
      var sum = 0;
      var valueToFill = 0;
      for (var exampleIndex = 0; exampleIndex < dataset.getNumberOfExamples(); exampleIndex += 1) {
        var example = dataset.exampleAt(exampleIndex);
        for (var row = 0; row < dataset.getExampleSize(); row += 1) {
          if (isNaN(example.data[row][0]) || typeof example.data[row][0] === "undefined") {
            rowsToFill.push({
              row: row,
              col: example
            });
          } else {
            sum += example.data[row][0];
            correctExamplesCount++;
          }
        }
      }
      if (this.modificationType === "mean") {
        valueToFill = sum / correctExamplesCount;
      }
      rowsToFill.forEach(function (_ref) {
        var row = _ref.row,
          col = _ref.col;
        dataset.data.data[row][col] = valueToFill;
      });
      return dataset;
    }
  }, {
    key: "setModificationType",
    value: function setModificationType(type) {
      this.modificationType = type;
      return this;
    }
  }]);
  return MissingDataScalingDatasetModifier;
}(_AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/Shuffle.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/Shuffle.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShuffleDatasetModifier": () => (/* binding */ ShuffleDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
/* harmony import */ var _Dataset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dataset */ "./src/typescript/Dataset/Dataset.ts");
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var ShuffleDatasetModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  _inherits(ShuffleDatasetModifier, _AbstractDatasetModif);
  var _super = _createSuper(ShuffleDatasetModifier);
  function ShuffleDatasetModifier(dataset) {
    var _this;
    _classCallCheck(this, ShuffleDatasetModifier);
    _this = _super.call(this, dataset);
    _defineProperty(_assertThisInitialized(_this), "sortList", []);
    return _this;
  }
  _createClass(ShuffleDatasetModifier, [{
    key: "apply",
    value: function apply(dataset) {
      var _this2 = this;
      var index = 0;
      var data = _Math_Matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix.from(dataset.data.transpose().data.sort(function (exampleA, exampleB) {
        if (typeof _this2.sortList[index] === "undefined") {
          // first run
          _this2.sortList[index] = Math.random() - 0.5;
        }
        index += 1;
        return _this2.sortList[index - 1];
      })).transpose().data;
      return new _Dataset__WEBPACK_IMPORTED_MODULE_1__.Dataset(dataset.getExampleSize(), dataset.getNumberOfExamples(), data);
    }
  }]);
  return ShuffleDatasetModifier;
}(_AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/index.ts":
/*!*********************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallbackDatasetModifier": () => (/* reexport safe */ _Callback__WEBPACK_IMPORTED_MODULE_0__.CallbackDatasetModifier),
/* harmony export */   "CategoryDatasetModifier": () => (/* reexport safe */ _Category__WEBPACK_IMPORTED_MODULE_4__.CategoryDatasetModifier),
/* harmony export */   "MinMaxScalingDatasetModifier": () => (/* reexport safe */ _MinMaxScaling__WEBPACK_IMPORTED_MODULE_1__.MinMaxScalingDatasetModifier),
/* harmony export */   "MissingDataScalingDatasetModifier": () => (/* reexport safe */ _MissingData__WEBPACK_IMPORTED_MODULE_2__.MissingDataScalingDatasetModifier),
/* harmony export */   "ShuffleDatasetModifier": () => (/* reexport safe */ _Shuffle__WEBPACK_IMPORTED_MODULE_3__.ShuffleDatasetModifier)
/* harmony export */ });
/* harmony import */ var _Callback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Callback */ "./src/typescript/Dataset/DatasetModifier/Callback.ts");
/* harmony import */ var _MinMaxScaling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MinMaxScaling */ "./src/typescript/Dataset/DatasetModifier/MinMaxScaling.ts");
/* harmony import */ var _MissingData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MissingData */ "./src/typescript/Dataset/DatasetModifier/MissingData.ts");
/* harmony import */ var _Shuffle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shuffle */ "./src/typescript/Dataset/DatasetModifier/Shuffle.ts");
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Category */ "./src/typescript/Dataset/DatasetModifier/Category.ts");







/***/ }),

/***/ "./src/typescript/Dataset/DatasetVocabulary.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/Dataset/DatasetVocabulary.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetVocabulary": () => (/* binding */ DatasetVocabulary)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var DatasetVocabulary = /*#__PURE__*/function () {
  function DatasetVocabulary(str) {
    _classCallCheck(this, DatasetVocabulary);
    _defineProperty(this, "vocabularySize", 0);
    _defineProperty(this, "dataSize", 0);
    _defineProperty(this, "data", "");
    this.data = str.toLowerCase();
    var chars = _toConsumableArray(new Set(this.data.split("").sort()));
    this.chars = chars;
    this.dataSize = this.data.length;
    this.vocabularySize = chars.length;
  }
  _createClass(DatasetVocabulary, [{
    key: "getExamples",
    value: function getExamples() {
      return this.data.replace(/\n+/, "\n").split("\n").map(function (example) {
        return example + "\n";
      });
    }
  }, {
    key: "getVocabularySize",
    value: function getVocabularySize() {
      return this.vocabularySize;
    }
  }, {
    key: "getCharsLength",
    value: function getCharsLength() {
      return this.chars.length;
    }
  }, {
    key: "getCharIndices",
    value: function getCharIndices() {
      var result = {};
      this.chars.forEach(function (_char, i) {
        result[_char] = i;
      });
      return result;
    }
  }, {
    key: "buildData",
    value: function buildData() {
      var tx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
      var stride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
      var X = [];
      var Y = [];
      for (var i = 0; i < this.data.length - tx; i += stride) {
        X.push(this.data.substr(i, tx));
        Y.push(this.data[i + tx]);
      }
      return [X, Y];
    }
  }, {
    key: "vectorization",
    value: function vectorization(X, Y) {
      var _this = this;
      var nx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;
      var m = X.length;
      var x = new Array(m);
      var chars = this.getCharIndices();
      var y = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m, this.chars.length).setZeros();
      var xIndex = 0;
      var rowIndex = 0;
      X.forEach(function (sentence, _m) {
        x[_m] = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(sentence.length, _this.chars.length).setZeros();
        sentence.split("").forEach(function (_char2, t) {
          x[_m].data[t][chars[_char2]] = 1;
          rowIndex++;
        });
        xIndex++;
        rowIndex = 0;
        y.data[_m][chars[Y[_m]]] = 1;
      });
      return [x, y];
    }
  }, {
    key: "getChars",
    value: function getChars() {
      return this.chars;
    }
  }, {
    key: "getExampleX",
    value: function getExampleX(exampleIndex) {
      var _this2 = this;
      var example = this.getExamples()[exampleIndex];
      var data = [];
      example.split("").forEach(function (ch, row) {
        data[row] = [_this2.getCharIndices()[ch]];
      });
      return _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix.from(data);
    }
  }, {
    key: "getExampleY",
    value: function getExampleY(exampleIndex) {
      var _this3 = this;
      var example = this.getExamples()[exampleIndex];
      var data = [];
      example.split("").forEach(function (ch, row) {
        data[row] = [_this3.getCharIndices()[ch]];
      });
      return _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix.from(data);
    }
  }]);
  return DatasetVocabulary;
}();

/***/ }),

/***/ "./src/typescript/Dataset/index.ts":
/*!*****************************************!*\
  !*** ./src/typescript/Dataset/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dataset": () => (/* reexport safe */ _Dataset__WEBPACK_IMPORTED_MODULE_0__.Dataset)
/* harmony export */ });
/* harmony import */ var _Dataset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dataset */ "./src/typescript/Dataset/Dataset.ts");



/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetBuilder.ts":
/*!*********************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetBuilder.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetBuilder": () => (/* binding */ DatasetBuilder)
/* harmony export */ });
/* harmony import */ var _Dataset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dataset */ "./src/typescript/Dataset/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var DatasetBuilder = /*#__PURE__*/function () {
  function DatasetBuilder() {
    _classCallCheck(this, DatasetBuilder);
  }
  _createClass(DatasetBuilder, null, [{
    key: "fromSource",
    value: function fromSource(sourcePromise) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function (resolve) {
        sourcePromise.then(function (source) {
          var matrix = source.parse();
          var numberOfExamples = matrix.rows;
          var exampleSize = matrix.cols;
          var dataset = new _Dataset__WEBPACK_IMPORTED_MODULE_0__.Dataset(exampleSize, numberOfExamples, params !== null && params !== void 0 && params.transpose ? matrix.transpose().data : matrix.data);
          resolve(dataset);
        });
      });
    }
  }]);
  return DatasetBuilder;
}();

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetBuilderSource/AbstractDatasetBuilderSource.ts":
/*!********************************************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetBuilderSource/AbstractDatasetBuilderSource.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractDatasetBuilderSource": () => (/* binding */ AbstractDatasetBuilderSource)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var AbstractDatasetBuilderSource = /*#__PURE__*/_createClass(function AbstractDatasetBuilderSource() {
  _classCallCheck(this, AbstractDatasetBuilderSource);
});

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetBuilderSource/DatasetBuilderSourceCSV.ts":
/*!***************************************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetBuilderSource/DatasetBuilderSourceCSV.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetBuilderSourceCSV": () => (/* binding */ DatasetBuilderSourceCSV)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetBuilderSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetBuilderSource */ "./src/typescript/DatasetBuilder/DatasetBuilderSource/AbstractDatasetBuilderSource.ts");
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! csvtojson */ "csvtojson");
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csvtojson__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var CSVState;
(function (CSVState) {
  CSVState[CSVState["UnquotedField"] = 0] = "UnquotedField";
  CSVState[CSVState["QuotedField"] = 1] = "QuotedField";
  CSVState[CSVState["QuotedQuote"] = 2] = "QuotedQuote";
})(CSVState || (CSVState = {}));
var DatasetBuilderSourceCSV = /*#__PURE__*/function (_AbstractDatasetBuild) {
  _inherits(DatasetBuilderSourceCSV, _AbstractDatasetBuild);
  var _super = _createSuper(DatasetBuilderSourceCSV);
  function DatasetBuilderSourceCSV(data) {
    var _this;
    _classCallCheck(this, DatasetBuilderSourceCSV);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "data", null);
    _defineProperty(_assertThisInitialized(_this), "matrixData", null);
    _this.data = data;
    return _this;
  }
  _createClass(DatasetBuilderSourceCSV, [{
    key: "parse",
    value: function parse() {
      /*this.matrixData = [];
       const lines = this.contentStr.trim().split(/\n+/);
      lines.forEach((line, i) => this.parseLine(line.trim(), i));
       return new Matrix(this.matrixData.length, this.matrixData[0].length, this.matrixData);*/

      var numberOfExamples = this.data.length;
      var exampleSize = this.data[0].length;
      return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(numberOfExamples, exampleSize, this.data).transpose();
    }
    /*
    protected parseLine(line: string, exampleIndexCol: number): void {
      let state = CSVState.UnquotedField;
      const fields = [];
      let i = 0;
       for (let j = 0; j < line.length; j += 1) {
        const c = line.at(j);
        switch (state) {
          case CSVState.UnquotedField:
            switch (c) {
              case ",": // end of field
                fields.push("");
                i++;
                break;
              case '"':
                state = CSVState.QuotedField;
                break;
              default:
                fields[i] += c;
                break;
            }
            break;
          case CSVState.QuotedField:
            switch (c) {
              case '"':
                state = CSVState.QuotedQuote;
                break;
              default:
                fields[i] += c;
                break;
            }
            break;
          case CSVState.QuotedQuote:
            switch (c) {
              case ",": // , after closing quote
                fields.push("");
                i++;
                state = CSVState.UnquotedField;
                break;
              case '"': // "" -> "
                fields[i] += '"';
                state = CSVState.QuotedField;
                break;
              default:
                // end of quote
                state = CSVState.UnquotedField;
                break;
            }
            break;
        }
         fields.forEach((value, row) => {
          if (value.length === 0) {
            value = NaN;
          }
          value = parseFloat(value);
          if (!this.matrixData[row]) {
            this.matrixData[row] = [];
          }
          this.matrixData[row][exampleIndexCol] = value;
        });
      }
    }*/
  }], [{
    key: "fromLocalFile",
    value: function fromLocalFile(path) {
      /*return new Promise((resolve, reject) => {
        fs.readFile(path, (err, buffer) => {
          console.log("first");
          if (err) {
            console.log(err);
            reject();
          } else {
            const instance = new DatasetBuilderSourceCSV(buffer.toString("utf-8"));
            resolve(instance);
          }
        });
      });*/
      return new Promise(function (resolve) {
        csvtojson__WEBPACK_IMPORTED_MODULE_2__({
          noheader: true,
          output: "csv"
        }).fromFile(path).then(function (arr) {
          resolve(new DatasetBuilderSourceCSV(arr));
        });
      });
    }
  }]);
  return DatasetBuilderSourceCSV;
}(_AbstractDatasetBuilderSource__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetBuilderSource);

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetBuilderSource/index.ts":
/*!*********************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetBuilderSource/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetBuilderSourceCSV": () => (/* reexport safe */ _DatasetBuilderSourceCSV__WEBPACK_IMPORTED_MODULE_0__.DatasetBuilderSourceCSV)
/* harmony export */ });
/* harmony import */ var _DatasetBuilderSourceCSV__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatasetBuilderSourceCSV */ "./src/typescript/DatasetBuilder/DatasetBuilderSource/DatasetBuilderSourceCSV.ts");



/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilder.ts":
/*!*******************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetVocabularyBuilder.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetVocabularyBuilder": () => (/* binding */ DatasetVocabularyBuilder)
/* harmony export */ });
/* harmony import */ var _Dataset_DatasetVocabulary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dataset/DatasetVocabulary */ "./src/typescript/Dataset/DatasetVocabulary.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var DatasetVocabularyBuilder = /*#__PURE__*/function () {
  function DatasetVocabularyBuilder() {
    _classCallCheck(this, DatasetVocabularyBuilder);
  }
  _createClass(DatasetVocabularyBuilder, null, [{
    key: "fromSource",
    value: function fromSource(sourcePromise) {
      return new Promise(function (resolve) {
        sourcePromise.then(function (source) {
          var str = source.parse();
          resolve(new _Dataset_DatasetVocabulary__WEBPACK_IMPORTED_MODULE_0__.DatasetVocabulary(str));
        });
      });
    }
  }]);
  return DatasetVocabularyBuilder;
}();

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/AbstractDatasetVocabularyBuilderSource.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/AbstractDatasetVocabularyBuilderSource.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractDatasetVocabularyBuilderSource": () => (/* binding */ AbstractDatasetVocabularyBuilderSource)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var AbstractDatasetVocabularyBuilderSource = /*#__PURE__*/_createClass(function AbstractDatasetVocabularyBuilderSource() {
  _classCallCheck(this, AbstractDatasetVocabularyBuilderSource);
});

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/DatasetVocabularyBuilderSourceTextFile.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/DatasetVocabularyBuilderSourceTextFile.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetVocabularyBuilderSourceTextFile": () => (/* binding */ DatasetVocabularyBuilderSourceTextFile)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractDatasetVocabularyBuilderSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractDatasetVocabularyBuilderSource */ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/AbstractDatasetVocabularyBuilderSource.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var DatasetVocabularyBuilderSourceTextFile = /*#__PURE__*/function (_AbstractDatasetVocab) {
  _inherits(DatasetVocabularyBuilderSourceTextFile, _AbstractDatasetVocab);
  var _super = _createSuper(DatasetVocabularyBuilderSourceTextFile);
  function DatasetVocabularyBuilderSourceTextFile(data) {
    var _this;
    _classCallCheck(this, DatasetVocabularyBuilderSourceTextFile);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "data", "");
    _this.data = data;
    return _this;
  }
  _createClass(DatasetVocabularyBuilderSourceTextFile, [{
    key: "parse",
    value: function parse() {
      return this.data;
    }
  }], [{
    key: "fromLocalFile",
    value: function fromLocalFile(path) {
      return new Promise(function (resolve, reject) {
        fs__WEBPACK_IMPORTED_MODULE_0__.readFile(path, function (err, buffer) {
          if (err) {
            reject(err);
            return;
          }
          resolve(new DatasetVocabularyBuilderSourceTextFile(buffer.toString("utf-8")));
        });
      });
    }
  }]);
  return DatasetVocabularyBuilderSourceTextFile;
}(_AbstractDatasetVocabularyBuilderSource__WEBPACK_IMPORTED_MODULE_1__.AbstractDatasetVocabularyBuilderSource);

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/index.ts":
/*!*******************************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/index.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetVocabularyBuilderSourceTextFile": () => (/* reexport safe */ _DatasetVocabularyBuilderSourceTextFile__WEBPACK_IMPORTED_MODULE_0__.DatasetVocabularyBuilderSourceTextFile)
/* harmony export */ });
/* harmony import */ var _DatasetVocabularyBuilderSourceTextFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatasetVocabularyBuilderSourceTextFile */ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/DatasetVocabularyBuilderSourceTextFile.ts");



/***/ }),

/***/ "./src/typescript/DatasetBuilder/index.ts":
/*!************************************************!*\
  !*** ./src/typescript/DatasetBuilder/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetBuilder": () => (/* reexport safe */ _DatasetBuilder__WEBPACK_IMPORTED_MODULE_0__.DatasetBuilder),
/* harmony export */   "DatasetVocabularyBuilder": () => (/* reexport safe */ _DatasetVocabularyBuilder__WEBPACK_IMPORTED_MODULE_1__.DatasetVocabularyBuilder)
/* harmony export */ });
/* harmony import */ var _DatasetBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatasetBuilder */ "./src/typescript/DatasetBuilder/DatasetBuilder.ts");
/* harmony import */ var _DatasetVocabularyBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatasetVocabularyBuilder */ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilder.ts");




/***/ }),

/***/ "./src/typescript/Math/Matrix.ts":
/*!***************************************!*\
  !*** ./src/typescript/Math/Matrix.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix": () => (/* binding */ Matrix)
/* harmony export */ });
/* harmony import */ var _Computation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Computation */ "./src/typescript/Computation/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Matrix = /*#__PURE__*/function () {
  function Matrix() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, Matrix);
    _defineProperty(this, "rows", 0);
    _defineProperty(this, "cols", 0);
    _defineProperty(this, "data", null);
    this.resize(rows, cols);
    if (data) {
      this.generateData(data);
    }
  }
  _createClass(Matrix, [{
    key: "resize",
    value: function resize(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.data = new Array(this.rows);
      for (var row = 0; row < this.rows; row += 1) {
        this.data[row] = new Array(this.cols);
      }
      return this;
    }
  }, {
    key: "generateData",
    value: function generateData(arr) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = new Array(this.cols);
      }
      for (var col = 0; col < this.cols; col += 1) {
        for (var _row3 = 0; _row3 < this.rows; _row3 += 1) {
          if (typeof arr[_row3] === "number") {
            data[_row3][col] = arr[_row3];
          } else {
            if (typeof arr[_row3][col] === "string") {
              if (/^[0-9.]+$/.test(String(arr[_row3][col]))) {
                data[_row3][col] = Number(arr[_row3][col]);
              } else {
                data[_row3][col] = arr[_row3][col];
              }
            } else {
              data[_row3][col] = arr[_row3][col];
            }
          }
        }
      }
      this.data = data;
      return this;
    }
  }, {
    key: "sum",
    value: function sum() {
      var sum = 0.0;
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          sum += this.data[row][col];
        }
      }
      return sum;
    }
  }, {
    key: "colwiseSum",
    value: function colwiseSum() {
      var data = [];
      var t = this.transpose();
      for (var row = 0; row < t.rows; row += 1) {
        data[row] = [0];
        for (var col = 0; col < t.cols; col += 1) {
          data[row][0] += t.data[row][col];
        }
      }
      return new Matrix(this.cols, 1, data);
    }
  }, {
    key: "rowwiseSum",
    value: function rowwiseSum() {
      var data = [[]];
      for (var row = 0; row < this.rows; row += 1) {
        var sum = 0.0;
        for (var col = 0; col < this.cols; col += 1) {
          sum += this.data[row][col];
        }
        data[0].push(sum);
      }
      return new Matrix(1, this.rows, data);
    }
  }, {
    key: "flatten",
    value: function flatten() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          data.push(this.data[row][col]);
        }
      }
      return data;
    }
  }, {
    key: "replicate",
    value: function replicate(rows, cols) {
      if (rows === 1 && this.cols === 1 && cols > 1) {
        var newData = [];
        for (var row = 0; row < this.rows; row += 1) {
          newData[row] = [];
          for (var col = 0; col < cols; col += 1) {
            newData[row][col] = this.data[row][0];
          }
        }
        return Matrix.from(newData);
      } else if (cols === 1 && this.rows === 1 && rows > 1) {
        var _newData = [];
        for (var _row4 = 0; _row4 < rows; _row4 += 1) {
          _newData[_row4] = [];
          for (var _col2 = 0; _col2 < this.cols; _col2 += 1) {
            _newData[_row4][_col2] = this.data[0][_col2];
          }
        }
        return Matrix.from(_newData);
      }
      return this;
    }
  }, {
    key: "transpose",
    value: function transpose() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("transpose", this);
    }
  }, {
    key: "colMaxCoeffIndex",
    value: function colMaxCoeffIndex(col) {
      var maxIndex = -1;
      var max = -Infinity;
      for (var row = 0; row < this.rows; row += 1) {
        if (this.data && this.data[row][col] > max) {
          max = this.data[row][col];
          maxIndex = row;
        }
      }
      return maxIndex;
    }
  }, {
    key: "rowMaxCoeffIndex",
    value: function rowMaxCoeffIndex(row) {
      var maxIndex = -1;
      var max = -Infinity;
      for (var col = 0; col < this.cols; col += 1) {
        if (this.data[row][col] > max) {
          max = this.data[row][col];
          maxIndex = col;
        }
      }
      return maxIndex;
    }
  }, {
    key: "block",
    value: function block(startRow, startCol, blockRows, blockCols) {
      var data = [];
      for (var row = startRow, newRow = 0; row < this.rows && row < startRow + blockRows; row += 1, newRow += 1) {
        data[newRow] = new Array(blockCols);
        for (var col = startCol, newCol = 0; col < this.cols && col < startCol + blockCols; col += 1, newCol += 1) {
          data[newRow][newCol] = this.data[row][col];
        }
      }
      return new Matrix(blockRows, blockCols, data);
    }
  }, {
    key: "col",
    value: function col(_col) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [this.data[row][_col]];
      }
      return new Matrix(this.rows, 1, data);
    }
  }, {
    key: "row",
    value: function row(_row2) {
      var data = [];
      for (var col = 0; col < this.cols; col += 1) {
        data[col] = [this.data[_row2][col]];
      }
      return new Matrix(this.cols, 1, data);
    }
  }, {
    key: "setCol",
    value: function setCol(col, tmp) {
      for (var row = 0; row < this.rows; row += 1) {
        if (this.data && tmp.data) {
          this.data[row][col] = tmp.data[row][0];
        }
      }
      return this;
    }
  }, {
    key: "sigmoid",
    value: function sigmoid() {
      return this.multiply(-1).exp().add(1).fraction(1);
    }
  }, {
    key: "rollToColMatrix",
    value: function rollToColMatrix() {
      var data = [];
      var _row = 0;
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          data[_row] = [];
          data[_row++][0] = this.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "abs",
    value: function abs() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.abs(this.data[row][col]);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "mean",
    value: function mean() {
      var sum = 0;
      var numberOfElements = this.rows * this.cols;
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          sum += this.data[row][col];
        }
      }
      return sum / numberOfElements;
    }
  }, {
    key: "max",
    value: function max() {
      var max = -Infinity;
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          max = Math.max(this.data[row][col], max);
        }
      }
      return max;
    }
  }, {
    key: "setMax",
    value: function setMax(max) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.min(this.data[row][col], max);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "setMin",
    value: function setMin(min) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.max(this.data[row][col], min);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "setZeros",
    value: function setZeros() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = 0;
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "setOnes",
    value: function setOnes() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = 1;
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "setRandom",
    value: function setRandom() {
      var parameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = (Math.random() * 4 - 2) * Math.sqrt(2 / parameter); // todo: gaussian distribution;
        }
      }

      return Matrix.from(data);
    }
  }, {
    key: "fraction",
    value: function fraction() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = num / this.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "sqrt",
    value: function sqrt() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.sqrt(this.data[row][col] + 1e-8);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "dot",
    value: function dot(m) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("multiply", this, m);
    }
  }, {
    key: "multiply",
    value: function multiply(num) {
      if (typeof num === "number") {
        var data = [];
        for (var row = 0; row < this.rows; row += 1) {
          data[row] = [];
          for (var col = 0; col < this.cols; col += 1) {
            // @ts-ignore
            data[row][col] = this.data[row][col] * num;
          }
        }
        return Matrix.from(data);
      } else {
        if (num.rows !== this.rows || this.cols !== num.cols) {
          throw new Error("Dimension error: ".concat(this.shape(), " !== ").concat(num.shape()));
        }
        var _data = [];
        for (var _row5 = 0; _row5 < this.rows; _row5 += 1) {
          _data[_row5] = [];
          for (var _col3 = 0; _col3 < this.cols; _col3 += 1) {
            // @ts-ignore
            _data[_row5][_col3] = this.data[_row5][_col3] * num.data[_row5][_col3];
          }
        }
        return Matrix.from(_data);
      }
    }
  }, {
    key: "subtract",
    value: function subtract(m) {
      if (m instanceof Matrix) {
        if (this.rows !== m.rows || this.cols !== m.cols) {
          throw new Error("Dimensions error: ".concat(this.rows, ", ").concat(this.cols, " !== ").concat(m.rows, ", ").concat(m.cols));
        }
        var data = [];
        for (var row = 0; row < this.rows; row += 1) {
          data[row] = [];
          for (var col = 0; col < this.cols; col += 1) {
            data[row][col] = this.data[row][col] - m.data[row][col];
          }
        }
        return Matrix.from(data);
      } else {
        var _data2 = [];
        for (var _row6 = 0; _row6 < this.rows; _row6 += 1) {
          _data2[_row6] = [];
          for (var _col4 = 0; _col4 < this.cols; _col4 += 1) {
            _data2[_row6][_col4] = this.data[_row6][_col4] - m;
          }
        }
        return Matrix.from(_data2);
      }
    }
  }, {
    key: "forEach",
    value: function forEach(cb) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = cb(this.data[row][col]);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "shape",
    value: function shape() {
      return [this.rows, this.cols];
    }
  }, {
    key: "divide",
    value: function divide(num) {
      if (typeof num === "number") {
        var data = [];
        for (var row = 0; row < this.rows; row += 1) {
          data[row] = [];
          for (var col = 0; col < this.cols; col += 1) {
            data[row][col] = this.data[row][col] / num;
          }
        }
        return Matrix.from(data);
      } else {
        if (num.rows !== this.rows || num.cols !== this.cols) {
          throw new Error("Dimensions error (".concat(this.rows, ", ").concat(this.cols, ") !== (").concat(num.rows, ", ").concat(num.cols, ")"));
        }
        var _data3 = [];
        for (var _row7 = 0; _row7 < this.rows; _row7 += 1) {
          _data3[_row7] = [];
          for (var _col5 = 0; _col5 < this.cols; _col5 += 1) {
            _data3[_row7][_col5] = this.data[_row7][_col5] / num.data[_row7][_col5];
          }
        }
        return Matrix.from(_data3);
      }
    }
  }, {
    key: "minusOne",
    value: function minusOne() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = 1 - this.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "subtractFromNumber",
    value: function subtractFromNumber(num) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = num - this.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "add",
    value: function add(m) {
      if (typeof m === "number") {
        var data = [];
        for (var row = 0; row < this.rows; row += 1) {
          data[row] = [];
          for (var col = 0; col < this.cols; col += 1) {
            data[row][col] = this.data[row][col] + m;
          }
        }
        return Matrix.from(data);
      } else if (m instanceof Matrix) {
        if (m.rows !== this.rows || m.cols !== this.cols) {
          throw new Error("Dimention error: rows (x: ".concat(this.rows, ", y: ").concat(this.cols, ") !== (x: ").concat(m.rows, ", y: ").concat(m.cols, ")"));
        }
        var _data4 = [];
        for (var _row8 = 0; _row8 < this.rows; _row8 += 1) {
          _data4[_row8] = [];
          for (var _col6 = 0; _col6 < this.cols; _col6 += 1) {
            _data4[_row8][_col6] = this.data[_row8][_col6] + m.data[_row8][_col6];
          }
        }
        return Matrix.from(_data4);
      }
      return this;
    }
  }, {
    key: "log",
    value: function log() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.log(this.data[row][col] + 1e-8);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "tanh",
    value: function tanh() {
      return this.exp().subtract(this.multiply(-1).exp()).divide(this.exp().add(this.multiply(-1).exp()));
    }
  }, {
    key: "softmax",
    value: function softmax() {
      var max = this.max() - 1e-8;
      return this.subtract(max).exp().divide(this.rowwiseSum().replicate(this.cols, 1).transpose());
    }
  }, {
    key: "exp",
    value: function exp() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.exp(this.data[row][col] + 1e-8);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "pow",
    value: function pow(num) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = Math.pow(this.data[row][col], num);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "value",
    value: function value(row, col) {
      var _value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      if (_value === undefined) {
        return this.data[row][col];
      }
      this.data[row][col] = _value;
      return this;
    }
  }, {
    key: "copy",
    value: function copy() {
      return Matrix.from(this.data);
    }
  }], [{
    key: "from",
    value: function from(arr) {
      var _arr$;
      return new Matrix(arr.length, ((_arr$ = arr[0]) === null || _arr$ === void 0 ? void 0 : _arr$.length) || 0, arr);
    }
  }]);
  return Matrix;
}();

/***/ }),

/***/ "csvtojson":
/*!****************************!*\
  !*** external "csvtojson" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("csvtojson");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/typescript/main.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dataset": () => (/* binding */ Dataset),
/* harmony export */   "DatasetBuilder": () => (/* binding */ DatasetBuilder),
/* harmony export */   "DatasetBuilderSource": () => (/* binding */ DatasetBuilderSource),
/* harmony export */   "DatasetModifier": () => (/* binding */ DatasetModifier)
/* harmony export */ });
/* harmony import */ var _Dataset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dataset */ "./src/typescript/Dataset/index.ts");
/* harmony import */ var _DatasetBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatasetBuilder */ "./src/typescript/DatasetBuilder/index.ts");
/* harmony import */ var _DatasetBuilder_DatasetBuilderSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatasetBuilder/DatasetBuilderSource */ "./src/typescript/DatasetBuilder/DatasetBuilderSource/index.ts");
/* harmony import */ var _DatasetBuilder_DatasetVocabularyBuilderSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DatasetBuilder/DatasetVocabularyBuilderSource */ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/index.ts");
/* harmony import */ var _Dataset_DatasetModifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dataset/DatasetModifier */ "./src/typescript/Dataset/DatasetModifier/index.ts");





var DatasetBuilder = {
  DatasetBuilder: _DatasetBuilder__WEBPACK_IMPORTED_MODULE_1__.DatasetBuilder,
  DatasetVocabularyBuilder: _DatasetBuilder__WEBPACK_IMPORTED_MODULE_1__.DatasetVocabularyBuilder
};
var Dataset = {
  Dataset: _Dataset__WEBPACK_IMPORTED_MODULE_0__.Dataset
};
var DatasetModifier = {
  CallbackDatasetModifier: _Dataset_DatasetModifier__WEBPACK_IMPORTED_MODULE_4__.CallbackDatasetModifier,
  MinMaxScalingDatasetModifier: _Dataset_DatasetModifier__WEBPACK_IMPORTED_MODULE_4__.MinMaxScalingDatasetModifier,
  MissingDataScalingDatasetModifier: _Dataset_DatasetModifier__WEBPACK_IMPORTED_MODULE_4__.MissingDataScalingDatasetModifier,
  ShuffleDatasetModifier: _Dataset_DatasetModifier__WEBPACK_IMPORTED_MODULE_4__.ShuffleDatasetModifier,
  CategoryDatasetModifier: _Dataset_DatasetModifier__WEBPACK_IMPORTED_MODULE_4__.CategoryDatasetModifier
};
var DatasetBuilderSource = {
  DatasetBuilderSourceCSV: _DatasetBuilder_DatasetBuilderSource__WEBPACK_IMPORTED_MODULE_2__.DatasetBuilderSourceCSV,
  DatasetVocabularyBuilderSourceTextFile: _DatasetBuilder_DatasetVocabularyBuilderSource__WEBPACK_IMPORTED_MODULE_3__.DatasetVocabularyBuilderSourceTextFile
};

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=impulse-dataset-ts.dev.js.map