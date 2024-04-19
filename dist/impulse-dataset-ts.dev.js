/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/typescript/Dataset/Dataset.ts":
/*!*******************************************!*\
  !*** ./src/typescript/Dataset/Dataset.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dataset: () => (/* binding */ Dataset)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

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
      this.data = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.numberOfExamples, this.exampleSize, arr);
    }
  }
  return _createClass(Dataset, [{
    key: "exampleAt",
    value: function exampleAt(index) {
      return this.data.row(index).transpose();
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
      this.exampleSize = this.data.rows + size;
      this.data.resize(this.data.rows + size, this.data.cols);
      for (var row = 0; row < this.data.rows; row += 1) {
        for (var col = 0; col < this.data.cols; col += 1) {
          if (row <= column) {
            this.data.data[row][col] = oldData.data[row][col];
          } else if (row > column && row <= column + size) {
            this.data.data[row][col] = undefined;
          } else if (row > column + size) {
            this.data.data[row][col] = oldData.data[row - size][col];
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
}();

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts":
/*!***************************************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractDatasetModifier: () => (/* binding */ AbstractDatasetModifier)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CallbackDatasetModifier: () => (/* binding */ CallbackDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var CallbackDatasetModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  function CallbackDatasetModifier() {
    var _this;
    _classCallCheck(this, CallbackDatasetModifier);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, CallbackDatasetModifier, [].concat(args));
    _defineProperty(_this, "callback", function (example) {
      return example;
    });
    return _this;
  }
  _inherits(CallbackDatasetModifier, _AbstractDatasetModif);
  return _createClass(CallbackDatasetModifier, [{
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
}(_AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/Category.ts":
/*!************************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/Category.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryDatasetModifier: () => (/* binding */ CategoryDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CategoryDatasetModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  function CategoryDatasetModifier(columns) {
    var _this;
    _classCallCheck(this, CategoryDatasetModifier);
    _this = _callSuper(this, CategoryDatasetModifier, [null]);
    _this.columns = columns;
    return _this;
  }
  _inherits(CategoryDatasetModifier, _AbstractDatasetModif);
  return _createClass(CategoryDatasetModifier, [{
    key: "apply",
    value: function apply(dataset) {
      var _this2 = this;
      var size = 0;
      var _dataset = dataset;
      this.columns.sort().forEach(function (column) {
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
      var example = dataset.data.row(column);
      var values = [];
      for (var row = 0; row < example.rows; row += 1) {
        values.push(example.value(row, 0));
      }
      values = values.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      dataset.insertColumnAfter(column, values.length - 1);
      for (var col = 0; col < dataset.data.cols; col += 1) {
        var oldValue = dataset.data.data[column][col];
        var index = 0;
        for (var _row = 0; _row < dataset.data.rows; _row += 1) {
          if (_row >= column && _row < column + values.length) {
            if (index === values.indexOf(oldValue)) {
              dataset.data.data[_row][col] = 1;
            } else {
              dataset.data.data[_row][col] = 0;
            }
            index += 1;
          }
        }
      }
      return [dataset, values.length - 1];
    }
  }]);
}(_AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/MinMaxScaling.ts":
/*!*****************************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/MinMaxScaling.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinMaxScalingDatasetModifier: () => (/* binding */ MinMaxScalingDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MinMaxScalingDatasetModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  function MinMaxScalingDatasetModifier() {
    _classCallCheck(this, MinMaxScalingDatasetModifier);
    return _callSuper(this, MinMaxScalingDatasetModifier, arguments);
  }
  _inherits(MinMaxScalingDatasetModifier, _AbstractDatasetModif);
  return _createClass(MinMaxScalingDatasetModifier, [{
    key: "apply",
    value: function apply(dataset) {
      var min = Infinity;
      var max = -Infinity;
      for (var row = 0; row < dataset.getNumberOfExamples(); row += 1) {
        var example = dataset.exampleAt(row);
        for (var col = 0; col < example.rows; col += 1) {
          if (min > example.data[row * dataset.data.cols + col]) {
            min = example.data[row * dataset.data.cols + col];
          }
          if (max < example.data[row * dataset.data.cols + col]) {
            max = example.data[row * dataset.data.cols + col];
          }
        }
      }
      for (var _row = 0; _row < dataset.getNumberOfExamples(); _row += 1) {
        var _example = dataset.exampleAt(_row);
        for (var _col = 0; _col < _example.rows; _col += 1) {
          dataset.data.data[_row * dataset.data.cols + _col] = (_example.data[_col] - min) / (max - min);
        }
      }
      return dataset;
    }
  }]);
}(_AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/MissingData.ts":
/*!***************************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/MissingData.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MissingDataDatasetModifier: () => (/* binding */ MissingDataDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var MissingDataDatasetModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  function MissingDataDatasetModifier() {
    var _this;
    _classCallCheck(this, MissingDataDatasetModifier);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MissingDataDatasetModifier, [].concat(args));
    _defineProperty(_this, "modificationType", "mean");
    return _this;
  }
  _inherits(MissingDataDatasetModifier, _AbstractDatasetModif);
  return _createClass(MissingDataDatasetModifier, [{
    key: "apply",
    value: function apply(dataset) {
      var rowsToFill = [];
      var correctExamplesCount = 0;
      var sum = 0;
      var valueToFill = 0;
      for (var exampleIndex = 0; exampleIndex < dataset.getNumberOfExamples(); exampleIndex += 1) {
        var example = dataset.exampleAt(exampleIndex);
        for (var row = 0; row < dataset.getExampleSize(); row += 1) {
          if (isNaN(example.data[row][0]) || typeof example.data[row][0] !== "number") {
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
}(_AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/Shuffle.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/Shuffle.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShuffleDatasetModifier: () => (/* binding */ ShuffleDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
/* harmony import */ var _Dataset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dataset */ "./src/typescript/Dataset/Dataset.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var ShuffleDatasetModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  function ShuffleDatasetModifier(dataset) {
    var _this;
    _classCallCheck(this, ShuffleDatasetModifier);
    _this = _callSuper(this, ShuffleDatasetModifier, [dataset]);
    _defineProperty(_this, "sortList", []);
    return _this;
  }
  _inherits(ShuffleDatasetModifier, _AbstractDatasetModif);
  return _createClass(ShuffleDatasetModifier, [{
    key: "apply",
    value: function apply(dataset) {
      var _this2 = this;
      var index = 0;
      var data = impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__.Matrix.from(dataset.data.transpose().data.sort(function (exampleA, exampleB) {
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
}(_AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/Split.ts":
/*!*********************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/Split.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitDatasetModifier: () => (/* binding */ SplitDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
/* harmony import */ var _Dataset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dataset */ "./src/typescript/Dataset/Dataset.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SplitDatasetModifier = /*#__PURE__*/function (_AbstractDatasetModif) {
  function SplitDatasetModifier(columns) {
    var _this;
    _classCallCheck(this, SplitDatasetModifier);
    _this = _callSuper(this, SplitDatasetModifier, [null]);
    _this.columns = columns.sort();
    return _this;
  }
  _inherits(SplitDatasetModifier, _AbstractDatasetModif);
  return _createClass(SplitDatasetModifier, [{
    key: "apply",
    value: function apply(dataset) {
      var inputData = [];
      var outputData = [];
      for (var col = 0; col < dataset.getNumberOfExamples(); col += 1) {
        var example = dataset.exampleAt(col);
        for (var row = 0, _inputIndex = 0, _outputIndex = 0; row < dataset.exampleSize; row += 1) {
          if (this.columns.includes(row)) {
            if (!inputData[_inputIndex]) {
              inputData[_inputIndex] = [];
            }
            inputData[_inputIndex][col] = example.data[row][0];
            _inputIndex += 1;
          } else {
            if (!outputData[_outputIndex]) {
              outputData[_outputIndex] = [];
            }
            outputData[_outputIndex][col] = example.data[row][0];
            _outputIndex += 1;
          }
        }
      }
      var newInputData = impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__.Matrix.from(inputData).transpose().data;
      var newOutputData = impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__.Matrix.from(outputData).transpose().data;
      var inputDataset = new _Dataset__WEBPACK_IMPORTED_MODULE_1__.Dataset(newInputData[0].length, newInputData.length, newInputData);
      var outputDataset = new _Dataset__WEBPACK_IMPORTED_MODULE_1__.Dataset(newOutputData[0].length, newOutputData.length, newOutputData);
      return [inputDataset, outputDataset];
    }
  }]);
}(_AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetModifier);

/***/ }),

/***/ "./src/typescript/Dataset/DatasetModifier/index.ts":
/*!*********************************************************!*\
  !*** ./src/typescript/Dataset/DatasetModifier/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CallbackDatasetModifier: () => (/* reexport safe */ _Callback__WEBPACK_IMPORTED_MODULE_0__.CallbackDatasetModifier),
/* harmony export */   CategoryDatasetModifier: () => (/* reexport safe */ _Category__WEBPACK_IMPORTED_MODULE_4__.CategoryDatasetModifier),
/* harmony export */   MinMaxScalingDatasetModifier: () => (/* reexport safe */ _MinMaxScaling__WEBPACK_IMPORTED_MODULE_1__.MinMaxScalingDatasetModifier),
/* harmony export */   MissingDataDatasetModifier: () => (/* reexport safe */ _MissingData__WEBPACK_IMPORTED_MODULE_2__.MissingDataDatasetModifier),
/* harmony export */   ShuffleDatasetModifier: () => (/* reexport safe */ _Shuffle__WEBPACK_IMPORTED_MODULE_3__.ShuffleDatasetModifier),
/* harmony export */   SplitDatasetModifier: () => (/* reexport safe */ _Split__WEBPACK_IMPORTED_MODULE_5__.SplitDatasetModifier)
/* harmony export */ });
/* harmony import */ var _Callback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Callback */ "./src/typescript/Dataset/DatasetModifier/Callback.ts");
/* harmony import */ var _MinMaxScaling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MinMaxScaling */ "./src/typescript/Dataset/DatasetModifier/MinMaxScaling.ts");
/* harmony import */ var _MissingData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MissingData */ "./src/typescript/Dataset/DatasetModifier/MissingData.ts");
/* harmony import */ var _Shuffle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shuffle */ "./src/typescript/Dataset/DatasetModifier/Shuffle.ts");
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Category */ "./src/typescript/Dataset/DatasetModifier/Category.ts");
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Split */ "./src/typescript/Dataset/DatasetModifier/Split.ts");








/***/ }),

/***/ "./src/typescript/Dataset/DatasetVocabulary.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/Dataset/DatasetVocabulary.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatasetVocabulary: () => (/* binding */ DatasetVocabulary)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

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
  return _createClass(DatasetVocabulary, [{
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
      var y = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(m, this.chars.length).setZeros();
      var xIndex = 0;
      var rowIndex = 0;
      X.forEach(function (sentence, _m) {
        x[_m] = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(sentence.length, _this.chars.length).setZeros();
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
      return impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix.from(data);
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
      return impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix.from(data);
    }
  }]);
}();

/***/ }),

/***/ "./src/typescript/Dataset/index.ts":
/*!*****************************************!*\
  !*** ./src/typescript/Dataset/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dataset: () => (/* reexport safe */ _Dataset__WEBPACK_IMPORTED_MODULE_0__.Dataset)
/* harmony export */ });
/* harmony import */ var _Dataset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dataset */ "./src/typescript/Dataset/Dataset.ts");



/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetBuilder.ts":
/*!*********************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetBuilder.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatasetBuilder: () => (/* binding */ DatasetBuilder)
/* harmony export */ });
/* harmony import */ var _Dataset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dataset */ "./src/typescript/Dataset/index.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var DatasetBuilder = /*#__PURE__*/function () {
  function DatasetBuilder() {
    _classCallCheck(this, DatasetBuilder);
  }
  return _createClass(DatasetBuilder, null, [{
    key: "fromSource",
    value: function fromSource(sourcePromise) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function (resolve) {
        sourcePromise.then(function (source) {
          var matrix = source.parse();
          var numberOfExamples = matrix.rows;
          var exampleSize = matrix.cols;
          var dataset = new _Dataset__WEBPACK_IMPORTED_MODULE_0__.Dataset(exampleSize, numberOfExamples, matrix.data);
          resolve(dataset);
        });
      });
    }
  }]);
}();

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetBuilderSource/AbstractDatasetBuilderSource.ts":
/*!********************************************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetBuilderSource/AbstractDatasetBuilderSource.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractDatasetBuilderSource: () => (/* binding */ AbstractDatasetBuilderSource)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatasetBuilderSourceCSV: () => (/* binding */ DatasetBuilderSourceCSV)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetBuilderSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetBuilderSource */ "./src/typescript/DatasetBuilder/DatasetBuilderSource/AbstractDatasetBuilderSource.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! csvtojson */ "csvtojson");
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csvtojson__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var CSVState = /*#__PURE__*/function (CSVState) {
  CSVState[CSVState["UnquotedField"] = 0] = "UnquotedField";
  CSVState[CSVState["QuotedField"] = 1] = "QuotedField";
  CSVState[CSVState["QuotedQuote"] = 2] = "QuotedQuote";
  return CSVState;
}(CSVState || {});
var DatasetBuilderSourceCSV = /*#__PURE__*/function (_AbstractDatasetBuild) {
  function DatasetBuilderSourceCSV(data) {
    var _this;
    _classCallCheck(this, DatasetBuilderSourceCSV);
    _this = _callSuper(this, DatasetBuilderSourceCSV);
    _defineProperty(_this, "data", null);
    _defineProperty(_this, "matrixData", null);
    _this.data = data;
    return _this;
  }
  _inherits(DatasetBuilderSourceCSV, _AbstractDatasetBuild);
  return _createClass(DatasetBuilderSourceCSV, [{
    key: "parse",
    value: function parse() {
      var _this$data$,
        _this2 = this;
      var numberOfExamples = this.data.length;
      var exampleSize = (_this$data$ = this.data[0]) === null || _this$data$ === void 0 ? void 0 : _this$data$.length;
      if (typeof numberOfExamples !== "undefined" && typeof exampleSize !== "undefined") {
        var data = [];
        var _loop = function _loop() {
          var newData = [];
          _this2.data[i].forEach(function (value, index) {
            newData.push(Number(value));
          });
          data = [].concat(_toConsumableArray(data), newData);
        };
        for (var i = 0; i < numberOfExamples; i += 1) {
          _loop();
        }
        return new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix(numberOfExamples, exampleSize, data);
      }
      return new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix(0, 0, []);
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
}(_AbstractDatasetBuilderSource__WEBPACK_IMPORTED_MODULE_0__.AbstractDatasetBuilderSource);

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetBuilderSource/index.ts":
/*!*********************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetBuilderSource/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatasetBuilderSourceCSV: () => (/* reexport safe */ _DatasetBuilderSourceCSV__WEBPACK_IMPORTED_MODULE_0__.DatasetBuilderSourceCSV)
/* harmony export */ });
/* harmony import */ var _DatasetBuilderSourceCSV__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatasetBuilderSourceCSV */ "./src/typescript/DatasetBuilder/DatasetBuilderSource/DatasetBuilderSourceCSV.ts");



/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilder.ts":
/*!*******************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetVocabularyBuilder.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatasetVocabularyBuilder: () => (/* binding */ DatasetVocabularyBuilder)
/* harmony export */ });
/* harmony import */ var _Dataset_DatasetVocabulary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dataset/DatasetVocabulary */ "./src/typescript/Dataset/DatasetVocabulary.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var DatasetVocabularyBuilder = /*#__PURE__*/function () {
  function DatasetVocabularyBuilder() {
    _classCallCheck(this, DatasetVocabularyBuilder);
  }
  return _createClass(DatasetVocabularyBuilder, null, [{
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
}();

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/AbstractDatasetVocabularyBuilderSource.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/AbstractDatasetVocabularyBuilderSource.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractDatasetVocabularyBuilderSource: () => (/* binding */ AbstractDatasetVocabularyBuilderSource)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatasetVocabularyBuilderSourceTextFile: () => (/* binding */ DatasetVocabularyBuilderSourceTextFile)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AbstractDatasetVocabularyBuilderSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractDatasetVocabularyBuilderSource */ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/AbstractDatasetVocabularyBuilderSource.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var DatasetVocabularyBuilderSourceTextFile = /*#__PURE__*/function (_AbstractDatasetVocab) {
  function DatasetVocabularyBuilderSourceTextFile(data) {
    var _this;
    _classCallCheck(this, DatasetVocabularyBuilderSourceTextFile);
    _this = _callSuper(this, DatasetVocabularyBuilderSourceTextFile);
    _defineProperty(_this, "data", "");
    _this.data = data;
    return _this;
  }
  _inherits(DatasetVocabularyBuilderSourceTextFile, _AbstractDatasetVocab);
  return _createClass(DatasetVocabularyBuilderSourceTextFile, [{
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
}(_AbstractDatasetVocabularyBuilderSource__WEBPACK_IMPORTED_MODULE_1__.AbstractDatasetVocabularyBuilderSource);

/***/ }),

/***/ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/index.ts":
/*!*******************************************************************************!*\
  !*** ./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/index.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatasetVocabularyBuilderSourceTextFile: () => (/* reexport safe */ _DatasetVocabularyBuilderSourceTextFile__WEBPACK_IMPORTED_MODULE_0__.DatasetVocabularyBuilderSourceTextFile)
/* harmony export */ });
/* harmony import */ var _DatasetVocabularyBuilderSourceTextFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatasetVocabularyBuilderSourceTextFile */ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilderSource/DatasetVocabularyBuilderSourceTextFile.ts");



/***/ }),

/***/ "./src/typescript/DatasetBuilder/index.ts":
/*!************************************************!*\
  !*** ./src/typescript/DatasetBuilder/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatasetBuilder: () => (/* reexport safe */ _DatasetBuilder__WEBPACK_IMPORTED_MODULE_0__.DatasetBuilder),
/* harmony export */   DatasetVocabularyBuilder: () => (/* reexport safe */ _DatasetVocabularyBuilder__WEBPACK_IMPORTED_MODULE_1__.DatasetVocabularyBuilder)
/* harmony export */ });
/* harmony import */ var _DatasetBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatasetBuilder */ "./src/typescript/DatasetBuilder/DatasetBuilder.ts");
/* harmony import */ var _DatasetVocabularyBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatasetVocabularyBuilder */ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilder.ts");




/***/ }),

/***/ "../impulse-math-ts/dist/impulse-math-ts.dev.js":
/*!******************************************************!*\
  !*** ../impulse-math-ts/dist/impulse-math-ts.dev.js ***!
  \******************************************************/
/***/ ((module) => {

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/typescript/Computation/AbstractComputation.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/Computation/AbstractComputation.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_411__) => {

__nested_webpack_require_411__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_411__.d(__nested_webpack_exports__, {
/* harmony export */   AbstractComputation: () => (/* binding */ AbstractComputation)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AbstractComputation = /*#__PURE__*/function () {
  function AbstractComputation() {
    _classCallCheck(this, AbstractComputation);
    _defineProperty(this, "kernels", {});
  }
  return _createClass(AbstractComputation, [{
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
}();

/***/ }),

/***/ "./src/typescript/Computation/CPU/abs.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/abs.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_3447__) => {

__nested_webpack_require_3447__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_3447__.d(__nested_webpack_exports__, {
/* harmony export */   abs: () => (/* binding */ abs)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_3447__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var abs = function abs(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.abs(value);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/add.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/add.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_5523__) => {

__nested_webpack_require_5523__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_5523__.d(__nested_webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_5523__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var add = function add(m1, m) {
  if (typeof m === "number") {
    var data = _toConsumableArray(m1.data);
    data.forEach(function (value, index) {
      data[index] = value + m;
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
  } else if (m instanceof _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix) {
    if (m.rows !== m1.rows || m.cols !== m1.cols) {
      throw new Error("Dimention error: rows (x: ".concat(m1.rows, ", y: ").concat(m1.cols, ") !== (x: ").concat(m.rows, ", y: ").concat(m.cols, ")"));
    }
    var _data = _toConsumableArray(m1.data);
    _data.forEach(function (value, index) {
      _data[index] = value + m.data[index];
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, _data);
  }
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/col.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/col.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_8160__) => {

__nested_webpack_require_8160__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_8160__.d(__nested_webpack_exports__, {
/* harmony export */   col: () => (/* binding */ col)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_8160__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var col = function col(m1, _col) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = m1.data[m1.cols * row + _col];
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, 1, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/colMaxCoeffIndex.ts":
/*!************************************************************!*\
  !*** ./src/typescript/Computation/CPU/colMaxCoeffIndex.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_9086__) => {

__nested_webpack_require_9086__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_9086__.d(__nested_webpack_exports__, {
/* harmony export */   colMaxCoeffIndex: () => (/* binding */ colMaxCoeffIndex)
/* harmony export */ });
var colMaxCoeffIndex = function colMaxCoeffIndex(m1, col) {
  var maxIndex = -1;
  var max = -Infinity;
  for (var row = 0; row < m1.rows; row += 1) {
    if (m1.data[row * m1.cols + col] > max) {
      max = m1.data[row * m1.cols + col];
      maxIndex = row;
    }
  }
  return maxIndex;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/colwiseSum.ts":
/*!******************************************************!*\
  !*** ./src/typescript/Computation/CPU/colwiseSum.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_9922__) => {

__nested_webpack_require_9922__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_9922__.d(__nested_webpack_exports__, {
/* harmony export */   colwiseSum: () => (/* binding */ colwiseSum)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_9922__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var colwiseSum = function colwiseSum(m1) {
  var data = [];
  var t = m1.transpose();
  for (var row = 0; row < t.rows; row += 1) {
    data[row] = 0;
    for (var col = 0; col < t.cols; col += 1) {
      data[row] += t.data[row * t.cols + col];
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.cols, 1, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/divide.ts":
/*!**************************************************!*\
  !*** ./src/typescript/Computation/CPU/divide.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_10928__) => {

__nested_webpack_require_10928__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_10928__.d(__nested_webpack_exports__, {
/* harmony export */   divide: () => (/* binding */ divide)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_10928__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var divide = function divide(m1, num) {
  if (typeof num === "number") {
    var data = _toConsumableArray(m1.data);
    data.forEach(function (value, index) {
      data[index] = value / num;
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
  } else {
    if (num.rows !== m1.rows || num.cols !== m1.cols) {
      throw new Error("Dimensions error (".concat(m1.rows, ", ").concat(m1.cols, ") !== (").concat(num.rows, ", ").concat(num.cols, ")"));
    }
    var _data = _toConsumableArray(m1.data);
    _data.forEach(function (value, index) {
      _data[index] = value / num.data[index];
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, _data);
  }
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/dot.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/dot.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_13509__) => {

__nested_webpack_require_13509__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_13509__.d(__nested_webpack_exports__, {
/* harmony export */   dot: () => (/* binding */ dot)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_13509__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var dot = function dot(m1, m2) {
  if (m1.cols !== m2.rows) {
    throw new Error("DIMENSIONS error. m1.cols ".concat(m1.rows, " ").concat(m1.cols, " !== m2.rows ").concat(m2.rows, " ").concat(m2.cols, "."));
  }
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = new Array(m2.cols);
    for (var col = 0; col < m2.cols; col += 1) {
      data[row][col] = 0;
      for (var i = 0; i < m1.cols; i += 1) {
        for (var j = 0; j < m2.rows; j += 1) {
          data[row][col] += m1.data[row * m1.cols + i] * m2.data[j * m2.cols + col];
        }
      }
    }
  }
  var newData = [];
  data.forEach(function (row) {
    newData = [].concat(_toConsumableArray(newData), _toConsumableArray(row));
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m2.cols, newData);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/exp.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/exp.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_16165__) => {

__nested_webpack_require_16165__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_16165__.d(__nested_webpack_exports__, {
/* harmony export */   exp: () => (/* binding */ exp)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_16165__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var exp = function exp(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.exp(value + 1e-16);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/fraction.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Computation/CPU/fraction.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_18269__) => {

__nested_webpack_require_18269__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_18269__.d(__nested_webpack_exports__, {
/* harmony export */   fraction: () => (/* binding */ fraction)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_18269__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var fraction = function fraction(m1, num) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = num / value;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/log.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/log.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_20366__) => {

__nested_webpack_require_20366__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_20366__.d(__nested_webpack_exports__, {
/* harmony export */   log: () => (/* binding */ log)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_20366__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var log = function log(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.log(value + 1e-8);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/max.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/max.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_22449__) => {

__nested_webpack_require_22449__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_22449__.d(__nested_webpack_exports__, {
/* harmony export */   max: () => (/* binding */ max)
/* harmony export */ });
var max = function max(m1) {
  var max = -Infinity;
  for (var index = 0; index < m1.rows * m1.cols; index += 1) {
    max = Math.max(m1.data[index], max);
  }
  return max;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/mean.ts":
/*!************************************************!*\
  !*** ./src/typescript/Computation/CPU/mean.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_23119__) => {

__nested_webpack_require_23119__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_23119__.d(__nested_webpack_exports__, {
/* harmony export */   mean: () => (/* binding */ mean)
/* harmony export */ });
var mean = function mean(m1) {
  var sum = 0;
  var numberOfElements = m1.rows * m1.cols;
  for (var index = 0; index < m1.rows * m1.cols; index += 1) {
    sum += m1.data[index];
  }
  return sum / numberOfElements;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/minusOne.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Computation/CPU/minusOne.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_23850__) => {

__nested_webpack_require_23850__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_23850__.d(__nested_webpack_exports__, {
/* harmony export */   minusOne: () => (/* binding */ minusOne)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_23850__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var minusOne = function minusOne(m1) {
  var data = _toConsumableArray(m1.data);
  for (var index = 0; index < m1.rows * m1.cols; index += 1) {
    data[index] = 1 - data[index];
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/multiply.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Computation/CPU/multiply.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_25986__) => {

__nested_webpack_require_25986__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_25986__.d(__nested_webpack_exports__, {
/* harmony export */   multiply: () => (/* binding */ multiply)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_25986__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var multiply = function multiply(m1, num) {
  if (typeof num === "number") {
    var data = _toConsumableArray(m1.data);
    data.forEach(function (value, index) {
      data[index] = value * num;
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
  } else {
    if (num.rows !== m1.rows || m1.cols !== num.cols) {
      throw new Error("Dimension error: ".concat(m1.shape(), " !== ").concat(num.shape()));
    }
    var _data = _toConsumableArray(m1.data);
    _data.forEach(function (value, index) {
      _data[index] = value * num.data[index];
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, _data);
  }
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/pow.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/pow.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_28528__) => {

__nested_webpack_require_28528__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_28528__.d(__nested_webpack_exports__, {
/* harmony export */   pow: () => (/* binding */ pow)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_28528__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var pow = function pow(m1, num) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.pow(value, num);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/reluBackpropagation.ts":
/*!***************************************************************!*\
  !*** ./src/typescript/Computation/CPU/reluBackpropagation.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_30678__) => {

__nested_webpack_require_30678__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_30678__.d(__nested_webpack_exports__, {
/* harmony export */   reluBackpropagation: () => (/* binding */ reluBackpropagation)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_30678__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var reluBackpropagation = function reluBackpropagation(delta, A) {
  var data = _toConsumableArray(A.data);
  data.forEach(function (value, index) {
    data[index] = value > 0 ? 1 : 0;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(A.rows, A.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/replicate.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/Computation/CPU/replicate.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_32847__) => {

__nested_webpack_require_32847__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_32847__.d(__nested_webpack_exports__, {
/* harmony export */   replicate: () => (/* binding */ replicate)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_32847__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var replicate = function replicate(m1, rows, cols) {
  if (rows === 1 && m1.cols === 1 && cols > 1) {
    var newData = [];
    for (var col = 0; col < cols; col += 1) {
      for (var row = 0; row < m1.rows; row += 1) {
        newData[row * cols + col] = m1.data[row * m1.cols];
      }
    }
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, cols, newData);
  } else if (cols === 1 && m1.rows === 1 && rows > 1) {
    var _newData = [];
    for (var _row = 0; _row < rows; _row += 1) {
      for (var _col = 0; _col < m1.cols; _col += 1) {
        _newData[_row * m1.cols + _col] = m1.data[_col];
      }
    }
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(rows, m1.cols, _newData);
  }
  return m1;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/rollToColMatrix.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/Computation/CPU/rollToColMatrix.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_34294__) => {

__nested_webpack_require_34294__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_34294__.d(__nested_webpack_exports__, {
/* harmony export */   rollToColMatrix: () => (/* binding */ rollToColMatrix)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_34294__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var rollToColMatrix = function rollToColMatrix(m1) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    for (var col = 0; col < m1.cols; col += 1) {
      data.push(m1.data[row * m1.cols + col]);
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows * m1.cols, 1, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/row.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/row.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_35275__) => {

__nested_webpack_require_35275__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_35275__.d(__nested_webpack_exports__, {
/* harmony export */   row: () => (/* binding */ row)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_35275__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var row = function row(m1, _row) {
  var startIndex = _row * m1.cols;
  var data = [];
  for (var i = startIndex; i < startIndex + m1.cols; i += 1) {
    data.push(m1.data[i]);
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(1, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/rowMaxCoeffIndex.ts":
/*!************************************************************!*\
  !*** ./src/typescript/Computation/CPU/rowMaxCoeffIndex.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_36232__) => {

__nested_webpack_require_36232__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_36232__.d(__nested_webpack_exports__, {
/* harmony export */   rowMaxCoeffIndex: () => (/* binding */ rowMaxCoeffIndex)
/* harmony export */ });
var rowMaxCoeffIndex = function rowMaxCoeffIndex(m1, row) {
  var maxIndex = -1;
  var max = -Infinity;
  for (var col = 0; col < m1.cols; col += 1) {
    if (m1.data[row * m1.cols + col] > max) {
      max = m1[row * m1.cols + col];
      maxIndex = col;
    }
  }
  return maxIndex;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/rowwiseSum.ts":
/*!******************************************************!*\
  !*** ./src/typescript/Computation/CPU/rowwiseSum.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_37063__) => {

__nested_webpack_require_37063__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_37063__.d(__nested_webpack_exports__, {
/* harmony export */   rowwiseSum: () => (/* binding */ rowwiseSum)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_37063__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var rowwiseSum = function rowwiseSum(m1) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    var sum = 0.0;
    for (var col = 0; col < m1.cols; col += 1) {
      sum += m1.data[row * m1.cols + col];
    }
    data.push(sum);
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(1, m1.rows, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/setMax.ts":
/*!**************************************************!*\
  !*** ./src/typescript/Computation/CPU/setMax.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_38061__) => {

__nested_webpack_require_38061__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_38061__.d(__nested_webpack_exports__, {
/* harmony export */   setMax: () => (/* binding */ setMax)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_38061__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var setMax = function setMax(m1, max) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.min(value, max);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/setMin.ts":
/*!**************************************************!*\
  !*** ./src/typescript/Computation/CPU/setMin.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_40171__) => {

__nested_webpack_require_40171__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_40171__.d(__nested_webpack_exports__, {
/* harmony export */   setMin: () => (/* binding */ setMin)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_40171__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var setMin = function setMin(m1, min) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.max(value, min);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/setOnes.ts":
/*!***************************************************!*\
  !*** ./src/typescript/Computation/CPU/setOnes.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_42285__) => {

__nested_webpack_require_42285__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_42285__.d(__nested_webpack_exports__, {
/* harmony export */   setOnes: () => (/* binding */ setOnes)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_42285__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var setOnes = function setOnes(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = 1;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/setRandom.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/Computation/CPU/setRandom.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_44387__) => {

__nested_webpack_require_44387__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_44387__.d(__nested_webpack_exports__, {
/* harmony export */   setRandom: () => (/* binding */ setRandom)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_44387__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var setRandom = function setRandom(m1, parameter) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = (Math.random() * 4 - 2) * Math.sqrt(2 / parameter); // todo: gaussian distribution;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/setZeros.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Computation/CPU/setZeros.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_46585__) => {

__nested_webpack_require_46585__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_46585__.d(__nested_webpack_exports__, {
/* harmony export */   setZeros: () => (/* binding */ setZeros)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_46585__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var setZeros = function setZeros(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = 0;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/sqrt.ts":
/*!************************************************!*\
  !*** ./src/typescript/Computation/CPU/sqrt.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_48671__) => {

__nested_webpack_require_48671__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_48671__.d(__nested_webpack_exports__, {
/* harmony export */   sqrt: () => (/* binding */ sqrt)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_48671__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var sqrt = function sqrt(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.sqrt(value + 1e-8);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/subtract.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Computation/CPU/subtract.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_50779__) => {

__nested_webpack_require_50779__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_50779__.d(__nested_webpack_exports__, {
/* harmony export */   subtract: () => (/* binding */ subtract)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_50779__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var subtract = function subtract(m1, m) {
  if (typeof m === "number") {
    var data = _toConsumableArray(m1.data);
    data.forEach(function (value, index) {
      data[index] = value - m;
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
  } else {
    if (m1.rows !== m.rows || m1.cols !== m.cols) {
      throw new Error("Dimensions error: ".concat(m1.rows, ", ").concat(m1.cols, " !== ").concat(m.rows, ", ").concat(m.cols));
    }
    var _data = _toConsumableArray(m1.data);
    _data.forEach(function (value, index) {
      _data[index] = value - m.data[index];
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, _data);
  }
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/subtractNumberFrom.ts":
/*!**************************************************************!*\
  !*** ./src/typescript/Computation/CPU/subtractNumberFrom.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_53405__) => {

__nested_webpack_require_53405__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_53405__.d(__nested_webpack_exports__, {
/* harmony export */   subtractNumberFrom: () => (/* binding */ subtractNumberFrom)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_53405__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var subtractNumberFrom = function subtractNumberFrom(m1, num) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = num - value;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/sum.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/sum.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_55542__) => {

__nested_webpack_require_55542__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_55542__.d(__nested_webpack_exports__, {
/* harmony export */   sum: () => (/* binding */ sum)
/* harmony export */ });
var sum = function sum(m1) {
  var sum = 0.0;
  for (var index = 0; index < m1.rows * m1.cols; index += 1) {
    sum += m1.data[index];
  }
  return sum;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/transpose.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/Computation/CPU/transpose.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_56212__) => {

__nested_webpack_require_56212__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_56212__.d(__nested_webpack_exports__, {
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_56212__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var transpose = function transpose(m1) {
  var data = [];
  for (var col = 0; col < m1.cols; ++col) {
    for (var row = 0; row < m1.rows; ++row) {
      data.push(m1.data[row * m1.cols + col]);
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.cols, m1.rows, data);
};

/***/ }),

/***/ "./src/typescript/Computation/ComputationCPU.ts":
/*!******************************************************!*\
  !*** ./src/typescript/Computation/ComputationCPU.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_57187__) => {

__nested_webpack_require_57187__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_57187__.d(__nested_webpack_exports__, {
/* harmony export */   ComputationCPU: () => (/* binding */ ComputationCPU)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_57187__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _CPU_dot__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_57187__(/*! ./CPU/dot */ "./src/typescript/Computation/CPU/dot.ts");
/* harmony import */ var _CPU_transpose__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_57187__(/*! ./CPU/transpose */ "./src/typescript/Computation/CPU/transpose.ts");
/* harmony import */ var _CPU_reluBackpropagation__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_57187__(/*! ./CPU/reluBackpropagation */ "./src/typescript/Computation/CPU/reluBackpropagation.ts");
/* harmony import */ var _CPU_add__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_57187__(/*! ./CPU/add */ "./src/typescript/Computation/CPU/add.ts");
/* harmony import */ var _CPU_subtract__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_57187__(/*! ./CPU/subtract */ "./src/typescript/Computation/CPU/subtract.ts");
/* harmony import */ var _CPU_multiply__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_57187__(/*! ./CPU/multiply */ "./src/typescript/Computation/CPU/multiply.ts");
/* harmony import */ var _CPU_divide__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_57187__(/*! ./CPU/divide */ "./src/typescript/Computation/CPU/divide.ts");
/* harmony import */ var _CPU_minusOne__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_57187__(/*! ./CPU/minusOne */ "./src/typescript/Computation/CPU/minusOne.ts");
/* harmony import */ var _CPU_log__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_57187__(/*! ./CPU/log */ "./src/typescript/Computation/CPU/log.ts");
/* harmony import */ var _CPU_pow__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_57187__(/*! ./CPU/pow */ "./src/typescript/Computation/CPU/pow.ts");
/* harmony import */ var _CPU_exp__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_57187__(/*! ./CPU/exp */ "./src/typescript/Computation/CPU/exp.ts");
/* harmony import */ var _CPU_sqrt__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_57187__(/*! ./CPU/sqrt */ "./src/typescript/Computation/CPU/sqrt.ts");
/* harmony import */ var _CPU_subtractNumberFrom__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_57187__(/*! ./CPU/subtractNumberFrom */ "./src/typescript/Computation/CPU/subtractNumberFrom.ts");
/* harmony import */ var _CPU_setMin__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_57187__(/*! ./CPU/setMin */ "./src/typescript/Computation/CPU/setMin.ts");
/* harmony import */ var _CPU_setMax__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_57187__(/*! ./CPU/setMax */ "./src/typescript/Computation/CPU/setMax.ts");
/* harmony import */ var _CPU_setOnes__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_57187__(/*! ./CPU/setOnes */ "./src/typescript/Computation/CPU/setOnes.ts");
/* harmony import */ var _CPU_setZeros__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_57187__(/*! ./CPU/setZeros */ "./src/typescript/Computation/CPU/setZeros.ts");
/* harmony import */ var _CPU_setRandom__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_57187__(/*! ./CPU/setRandom */ "./src/typescript/Computation/CPU/setRandom.ts");
/* harmony import */ var _CPU_fraction__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_57187__(/*! ./CPU/fraction */ "./src/typescript/Computation/CPU/fraction.ts");
/* harmony import */ var _CPU_max__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_57187__(/*! ./CPU/max */ "./src/typescript/Computation/CPU/max.ts");
/* harmony import */ var _CPU_abs__WEBPACK_IMPORTED_MODULE_21__ = __nested_webpack_require_57187__(/*! ./CPU/abs */ "./src/typescript/Computation/CPU/abs.ts");
/* harmony import */ var _CPU_mean__WEBPACK_IMPORTED_MODULE_22__ = __nested_webpack_require_57187__(/*! ./CPU/mean */ "./src/typescript/Computation/CPU/mean.ts");
/* harmony import */ var _CPU_sum__WEBPACK_IMPORTED_MODULE_23__ = __nested_webpack_require_57187__(/*! ./CPU/sum */ "./src/typescript/Computation/CPU/sum.ts");
/* harmony import */ var _CPU_rowwiseSum__WEBPACK_IMPORTED_MODULE_24__ = __nested_webpack_require_57187__(/*! ./CPU/rowwiseSum */ "./src/typescript/Computation/CPU/rowwiseSum.ts");
/* harmony import */ var _CPU_colwiseSum__WEBPACK_IMPORTED_MODULE_25__ = __nested_webpack_require_57187__(/*! ./CPU/colwiseSum */ "./src/typescript/Computation/CPU/colwiseSum.ts");
/* harmony import */ var _CPU_replicate__WEBPACK_IMPORTED_MODULE_26__ = __nested_webpack_require_57187__(/*! ./CPU/replicate */ "./src/typescript/Computation/CPU/replicate.ts");
/* harmony import */ var _CPU_colMaxCoeffIndex__WEBPACK_IMPORTED_MODULE_27__ = __nested_webpack_require_57187__(/*! ./CPU/colMaxCoeffIndex */ "./src/typescript/Computation/CPU/colMaxCoeffIndex.ts");
/* harmony import */ var _CPU_rowMaxCoeffIndex__WEBPACK_IMPORTED_MODULE_28__ = __nested_webpack_require_57187__(/*! ./CPU/rowMaxCoeffIndex */ "./src/typescript/Computation/CPU/rowMaxCoeffIndex.ts");
/* harmony import */ var _CPU_row__WEBPACK_IMPORTED_MODULE_29__ = __nested_webpack_require_57187__(/*! ./CPU/row */ "./src/typescript/Computation/CPU/row.ts");
/* harmony import */ var _CPU_col__WEBPACK_IMPORTED_MODULE_30__ = __nested_webpack_require_57187__(/*! ./CPU/col */ "./src/typescript/Computation/CPU/col.ts");
/* harmony import */ var _CPU_rollToColMatrix__WEBPACK_IMPORTED_MODULE_31__ = __nested_webpack_require_57187__(/*! ./CPU/rollToColMatrix */ "./src/typescript/Computation/CPU/rollToColMatrix.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
































var ComputationCPU = /*#__PURE__*/function (_AbstractComputation) {
  function ComputationCPU() {
    var _this;
    _classCallCheck(this, ComputationCPU);
    _this = _callSuper(this, ComputationCPU);
    _this.addKernel("dot", _CPU_dot__WEBPACK_IMPORTED_MODULE_1__.dot);
    _this.addKernel("transpose", _CPU_transpose__WEBPACK_IMPORTED_MODULE_2__.transpose);
    _this.addKernel("reluBackpropagation", _CPU_reluBackpropagation__WEBPACK_IMPORTED_MODULE_3__.reluBackpropagation);
    _this.addKernel("add", _CPU_add__WEBPACK_IMPORTED_MODULE_4__.add);
    _this.addKernel("subtract", _CPU_subtract__WEBPACK_IMPORTED_MODULE_5__.subtract);
    _this.addKernel("multiply", _CPU_multiply__WEBPACK_IMPORTED_MODULE_6__.multiply);
    _this.addKernel("divide", _CPU_divide__WEBPACK_IMPORTED_MODULE_7__.divide);
    _this.addKernel("minusOne", _CPU_minusOne__WEBPACK_IMPORTED_MODULE_8__.minusOne);
    _this.addKernel("subtractNumberFrom", _CPU_subtractNumberFrom__WEBPACK_IMPORTED_MODULE_13__.subtractNumberFrom);
    _this.addKernel("log", _CPU_log__WEBPACK_IMPORTED_MODULE_9__.log);
    _this.addKernel("exp", _CPU_exp__WEBPACK_IMPORTED_MODULE_11__.exp);
    _this.addKernel("pow", _CPU_pow__WEBPACK_IMPORTED_MODULE_10__.pow);
    _this.addKernel("sqrt", _CPU_sqrt__WEBPACK_IMPORTED_MODULE_12__.sqrt);
    _this.addKernel("setMin", _CPU_setMin__WEBPACK_IMPORTED_MODULE_14__.setMin);
    _this.addKernel("setMax", _CPU_setMax__WEBPACK_IMPORTED_MODULE_15__.setMax);
    _this.addKernel("setOnes", _CPU_setOnes__WEBPACK_IMPORTED_MODULE_16__.setOnes);
    _this.addKernel("setZeros", _CPU_setZeros__WEBPACK_IMPORTED_MODULE_17__.setZeros);
    _this.addKernel("setRandom", _CPU_setRandom__WEBPACK_IMPORTED_MODULE_18__.setRandom);
    _this.addKernel("fraction", _CPU_fraction__WEBPACK_IMPORTED_MODULE_19__.fraction);
    _this.addKernel("max", _CPU_max__WEBPACK_IMPORTED_MODULE_20__.max);
    _this.addKernel("abs", _CPU_abs__WEBPACK_IMPORTED_MODULE_21__.abs);
    _this.addKernel("mean", _CPU_mean__WEBPACK_IMPORTED_MODULE_22__.mean);
    _this.addKernel("sum", _CPU_sum__WEBPACK_IMPORTED_MODULE_23__.sum);
    _this.addKernel("rowwiseSum", _CPU_rowwiseSum__WEBPACK_IMPORTED_MODULE_24__.rowwiseSum);
    _this.addKernel("colwiseSum", _CPU_colwiseSum__WEBPACK_IMPORTED_MODULE_25__.colwiseSum);
    _this.addKernel("replicate", _CPU_replicate__WEBPACK_IMPORTED_MODULE_26__.replicate);
    _this.addKernel("colMaxCoeffIndex", _CPU_colMaxCoeffIndex__WEBPACK_IMPORTED_MODULE_27__.colMaxCoeffIndex);
    _this.addKernel("rowMaxCoeffIndex", _CPU_rowMaxCoeffIndex__WEBPACK_IMPORTED_MODULE_28__.rowMaxCoeffIndex);
    _this.addKernel("row", _CPU_row__WEBPACK_IMPORTED_MODULE_29__.row);
    _this.addKernel("col", _CPU_col__WEBPACK_IMPORTED_MODULE_30__.col);
    _this.addKernel("rollToColMatrix", _CPU_rollToColMatrix__WEBPACK_IMPORTED_MODULE_31__.rollToColMatrix);
    /*
    this.addKernel("subtractFromNumber", subtractFromNumber);
    this.addKernel("fillRandom", fillRandom);
    this.addKernel("fillZeros", fillZeros);
    this.addKernel("elementWiseMultiply", elementWiseMultiply);
    this.addKernel("elementWiseDivide", elementWiseDivide);
    this.addKernel("divideNumber", divideNumber);
    this.addKernel("logisticActivation", logisticActivation);
    this.addKernel("logisticLoss", logisticLoss);
    this.addKernel("logisticBackpropagation", logisticBackpropagation);
    this.addKernel("tanhActivation", tanhActivation);
    this.addKernel("reluActivation", reluActivation);
    this.addKernel("softplusActivation", softplusActivation);
    this.addKernel("penalty", penalty);
    this.addKernel("sqrt", sqrt);
    this.addKernel("transpose", transpose);
    this.addKernel("pow", pow);
    this.addKernel("log", log);
    this.addKernel("logMinusOne", logMinusOne);
    this.addKernel("addNumber", addNumber);*/
    return _this;
  }
  _inherits(ComputationCPU, _AbstractComputation);
  return _createClass(ComputationCPU);
}(_AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation);

/***/ }),

/***/ "./src/typescript/Computation/ComputationMultiCore.ts":
/*!************************************************************!*\
  !*** ./src/typescript/Computation/ComputationMultiCore.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_70223__) => {

__nested_webpack_require_70223__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_70223__.d(__nested_webpack_exports__, {
/* harmony export */   ComputationMultiCore: () => (/* binding */ ComputationMultiCore)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_70223__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _MultiCore_dot__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_70223__(/*! ./MultiCore/dot */ "./src/typescript/Computation/MultiCore/dot.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var ComputationMultiCore = /*#__PURE__*/function (_AbstractComputation) {
  function ComputationMultiCore() {
    var _this;
    _classCallCheck(this, ComputationMultiCore);
    _this = _callSuper(this, ComputationMultiCore);
    _this.addKernel("dot", _MultiCore_dot__WEBPACK_IMPORTED_MODULE_1__.dot);

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
    return _this;
  }
  _inherits(ComputationMultiCore, _AbstractComputation);
  return _createClass(ComputationMultiCore);
}(_AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation);

/***/ }),

/***/ "./src/typescript/Computation/MultiCore/dot.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/Computation/MultiCore/dot.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_75900__) => {

__nested_webpack_require_75900__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_75900__.d(__nested_webpack_exports__, {
/* harmony export */   dot: () => (/* binding */ dot)
/* harmony export */ });
//import { MatrixMultiply } from "../../../../build/Debug/computation.node";

var dot = function dot(m1, m2) {
  //console.log(MatrixMultiply([1, 2, 3, 4], [4, 3, 2, 1]));
};

/***/ }),

/***/ "./src/typescript/Computation/index.ts":
/*!*********************************************!*\
  !*** ./src/typescript/Computation/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_76556__) => {

__nested_webpack_require_76556__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_76556__.d(__nested_webpack_exports__, {
/* harmony export */   AbstractComputation: () => (/* reexport safe */ _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation),
/* harmony export */   ComputationCPU: () => (/* reexport safe */ _ComputationCPU__WEBPACK_IMPORTED_MODULE_2__.ComputationCPU),
/* harmony export */   ComputationMultiCore: () => (/* reexport safe */ _ComputationMultiCore__WEBPACK_IMPORTED_MODULE_1__.ComputationMultiCore),
/* harmony export */   getComputation: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.getComputation),
/* harmony export */   setComputation: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.setComputation)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_76556__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _ComputationMultiCore__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_76556__(/*! ./ComputationMultiCore */ "./src/typescript/Computation/ComputationMultiCore.ts");
/* harmony import */ var _ComputationCPU__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_76556__(/*! ./ComputationCPU */ "./src/typescript/Computation/ComputationCPU.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_76556__(/*! ./utils */ "./src/typescript/Computation/utils.ts");






/***/ }),

/***/ "./src/typescript/Computation/utils.ts":
/*!*********************************************!*\
  !*** ./src/typescript/Computation/utils.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_78316__) => {

__nested_webpack_require_78316__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_78316__.d(__nested_webpack_exports__, {
/* harmony export */   getComputation: () => (/* binding */ getComputation),
/* harmony export */   setComputation: () => (/* binding */ setComputation)
/* harmony export */ });
/* harmony import */ var _ComputationCPU__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_78316__(/*! ./ComputationCPU */ "./src/typescript/Computation/ComputationCPU.ts");

var currentComputation = new _ComputationCPU__WEBPACK_IMPORTED_MODULE_0__.ComputationCPU();
var setComputation = function setComputation(type) {
  currentComputation = type;
};
var getComputation = function getComputation() {
  return currentComputation;
};

/***/ }),

/***/ "./src/typescript/Math/Matrix.ts":
/*!***************************************!*\
  !*** ./src/typescript/Math/Matrix.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_79298__) => {

__nested_webpack_require_79298__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_79298__.d(__nested_webpack_exports__, {
/* harmony export */   Matrix: () => (/* binding */ Matrix)
/* harmony export */ });
/* harmony import */ var _Computation__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_79298__(/*! ../Computation */ "./src/typescript/Computation/index.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Matrix = /*#__PURE__*/function () {
  function Matrix() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, Matrix);
    _defineProperty(this, "rows", 0);
    _defineProperty(this, "cols", 0);
    _defineProperty(this, "data", null);
    this.rows = rows;
    this.cols = cols;
    this.data = data;
    if (!data) {
      this.data = new Array(rows * cols);
    }
  }
  return _createClass(Matrix, [{
    key: "resize",
    value: function resize(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.data = new Array(rows * cols);
    }
  }, {
    key: "sum",
    value: function sum() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("sum", this);
    }
  }, {
    key: "colwiseSum",
    value: function colwiseSum() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("colwiseSum", this);
    }
  }, {
    key: "rowwiseSum",
    value: function rowwiseSum() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("rowwiseSum", this);
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
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("replicate", this, rows, cols);
    }
  }, {
    key: "transpose",
    value: function transpose() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("transpose", this);
    }
  }, {
    key: "colMaxCoeffIndex",
    value: function colMaxCoeffIndex(col) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("colMaxCoeffIndex", this, col);
    }
  }, {
    key: "rowMaxCoeffIndex",
    value: function rowMaxCoeffIndex(row) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("rowMaxCoeffIndex", this, row);
    } /*
      block(startRow: number, startCol: number, blockRows: number, blockCols: number): Matrix {
       const data = [];
        for (let row = startRow, newRow = 0; row < this.rows && row < startRow + blockRows; row += 1, newRow += 1) {
         data[newRow] = new Array(blockCols);
         for (let col = startCol, newCol = 0; col < this.cols && col < startCol + blockCols; col += 1, newCol += 1) {
           data[newRow][newCol] = this.data[row][col];
         }
       }
        return new Matrix(blockRows, blockCols, data);
      }*/
  }, {
    key: "col",
    value: function col(_col) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("col", this, _col);
    }
  }, {
    key: "row",
    value: function row(_row) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("row", this, _row);
    }
  }, {
    key: "sigmoid",
    value: function sigmoid() {
      return this.multiply(-1).exp().add(1).fraction(1);
    }
  }, {
    key: "rollToColMatrix",
    value: function rollToColMatrix() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("rollToColMatrix", this);
    }
  }, {
    key: "abs",
    value: function abs() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("abs", this);
    }
  }, {
    key: "mean",
    value: function mean() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("mean", this);
    }
  }, {
    key: "max",
    value: function max() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("max", this);
    }
  }, {
    key: "setMax",
    value: function setMax(max) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("setMax", this, max);
    }
  }, {
    key: "setMin",
    value: function setMin(min) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("setMin", this, min);
    }
  }, {
    key: "setZeros",
    value: function setZeros() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("setZeros", this);
    }
  }, {
    key: "setOnes",
    value: function setOnes() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("setOnes", this);
    }
  }, {
    key: "setRandom",
    value: function setRandom() {
      var parameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      // todo: gaussian distribution
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("setRandom", this, parameter);
    }
  }, {
    key: "fraction",
    value: function fraction() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("fraction", this, num);
    }
  }, {
    key: "sqrt",
    value: function sqrt() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("sqrt", this);
    }
  }, {
    key: "dot",
    value: function dot(m) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("dot", this, m);
    }
  }, {
    key: "multiply",
    value: function multiply(num) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("multiply", this, num);
    }
  }, {
    key: "subtract",
    value: function subtract(m) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("subtract", this, m);
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
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("divide", this, num);
    }
  }, {
    key: "minusOne",
    value: function minusOne() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("subtractNumberFrom", this, -1);
    }
  }, {
    key: "subtractNumberFrom",
    value: function subtractNumberFrom(num) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("subtractNumberFrom", this, num);
    }
  }, {
    key: "add",
    value: function add(m) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("add", this, m);
    }
  }, {
    key: "log",
    value: function log() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("log", this);
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
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("exp", this);
    }
  }, {
    key: "pow",
    value: function pow(num) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("pow", this, num);
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
  }, {
    key: "concat",
    value: function concat(m) {
      for (var row = 0; row < m.rows; row += 1) {
        this.data.push(m.data[row]);
      }
      return this;
    }
  }], [{
    key: "from",
    value: function from(arr) {
      var _arr$;
      return new Matrix(arr.length, ((_arr$ = arr[0]) === null || _arr$ === void 0 ? void 0 : _arr$.length) || 0, arr);
    }
  }]);
}();

/***/ }),

/***/ "./src/typescript/Math/math.ts":
/*!*************************************!*\
  !*** ./src/typescript/Math/math.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_90366__) => {

__nested_webpack_require_90366__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_90366__.d(__nested_webpack_exports__, {
/* harmony export */   im2col: () => (/* binding */ im2col),
/* harmony export */   maxpool: () => (/* binding */ maxpool),
/* harmony export */   round: () => (/* binding */ round)
/* harmony export */ });
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_90366__(/*! ./Matrix */ "./src/typescript/Math/Matrix.ts");

var im2col = function im2col(input, channels, height, width, kernel_h, kernel_w, pad_h, pad_w, stride_h, stride_w) {
  var cols = kernel_w * kernel_h * channels;
  var rows = ((width - kernel_w + 2 * pad_w) / stride_w + 1) * ((height - kernel_h + 2 * pad_h) / stride_h + 1);
  var currentResultRow = 0;
  var result = new _Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(rows, cols).setZeros();
  for (var boundingY = -pad_h; boundingY + kernel_h <= height + pad_h; boundingY += stride_h) {
    for (var boundingX = -pad_w; boundingX + kernel_w <= width + pad_w; boundingX += stride_w) {
      var currentResultCol = 0;
      for (var channel = 0; channel < channels; channel++) {
        var inputOffset = height * width * channel;
        for (var y = 0; y < kernel_h; y++) {
          for (var x = 0; x < kernel_w; x++) {
            if (boundingY + y >= 0 && boundingX + x >= 0 && boundingX + x < width && boundingY + y < height) {
              result.data[currentResultRow][currentResultCol] = input.data[(y + boundingY) * width + boundingX + x + inputOffset][0];
            }
            currentResultCol++;
          }
        }
      }
      currentResultRow++;
    }
  }
  return result;
};
var maxpool = function maxpool(input, channels, height, width, kernel_h, kernel_w, stride_h, stride_w) {
  var resultWidth = (width - kernel_w) / stride_w + 1;
  var resultHeight = (height - kernel_h) / stride_h + 1;
  var resultDepth = channels;
  var currentResultCol = 0;
  var result = new _Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(resultWidth * resultHeight * resultDepth, 1).setZeros();
  for (var boundingY = 0; boundingY + kernel_h <= height; boundingY += stride_h) {
    for (var boundingX = 0; boundingX + kernel_w <= width; boundingX += stride_w) {
      for (var channel = 0; channel < channels; channel++) {
        var _max = -Infinity;
        var inputOffset = height * width * channel;
        var outputOffset = resultWidth * resultHeight * channel;
        for (var y = 0; y < kernel_h; y++) {
          for (var x = 0; x < kernel_w; x++) {
            _max = Math.max(_max, input.data[inputOffset + (y + boundingY) * width + boundingX + x][0]);
          }
        }
        result.data[outputOffset + currentResultCol][0] = _max;
      }
      currentResultCol++;
    }
  }
  return result;
};
var round = function round(num, decimalPlaces) {
  return Math.round((num + 2.23e-16) * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_93542__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_93542__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_93542__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_93542__.o(definition, key) && !__nested_webpack_require_93542__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_93542__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_93542__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/typescript/main.ts ***!
  \********************************/
__nested_webpack_require_93542__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_93542__.d(__nested_webpack_exports__, {
/* harmony export */   ComputationCPU: () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.ComputationCPU),
/* harmony export */   ComputationMultiCore: () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.ComputationMultiCore),
/* harmony export */   Matrix: () => (/* reexport safe */ _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix),
/* harmony export */   getComputation: () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.getComputation),
/* harmony export */   im2col: () => (/* reexport safe */ _Math_math__WEBPACK_IMPORTED_MODULE_1__.im2col),
/* harmony export */   maxpool: () => (/* reexport safe */ _Math_math__WEBPACK_IMPORTED_MODULE_1__.maxpool),
/* harmony export */   round: () => (/* reexport safe */ _Math_math__WEBPACK_IMPORTED_MODULE_1__.round),
/* harmony export */   setComputation: () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.setComputation)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_93542__(/*! ./Math/Matrix */ "./src/typescript/Math/Matrix.ts");
/* harmony import */ var _Math_math__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_93542__(/*! ./Math/math */ "./src/typescript/Math/math.ts");
/* harmony import */ var _Computation__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_93542__(/*! ./Computation */ "./src/typescript/Computation/index.ts");




})();

module.exports = __nested_webpack_exports__;
/******/ })()
;
//# sourceMappingURL=impulse-math-ts.dev.js.map

/***/ }),

/***/ "csvtojson":
/*!****************************!*\
  !*** external "csvtojson" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("csvtojson");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./src/typescript/main.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dataset: () => (/* binding */ Dataset),
/* harmony export */   DatasetBuilder: () => (/* binding */ DatasetBuilder),
/* harmony export */   DatasetBuilderSource: () => (/* binding */ DatasetBuilderSource),
/* harmony export */   DatasetModifier: () => (/* binding */ DatasetModifier)
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
  MissingDataDatasetModifier: _Dataset_DatasetModifier__WEBPACK_IMPORTED_MODULE_4__.MissingDataDatasetModifier,
  ShuffleDatasetModifier: _Dataset_DatasetModifier__WEBPACK_IMPORTED_MODULE_4__.ShuffleDatasetModifier,
  CategoryDatasetModifier: _Dataset_DatasetModifier__WEBPACK_IMPORTED_MODULE_4__.CategoryDatasetModifier,
  SplitDatasetModifier: _Dataset_DatasetModifier__WEBPACK_IMPORTED_MODULE_4__.SplitDatasetModifier
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