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
/* harmony export */   "Dataset": () => (/* binding */ Dataset)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
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
          if (!arr[col]) {
            continue;
          }
          // @ts-ignore
          if (typeof arr[col][row] === "string" && /^[-0-9.e]+$/.test(arr[col][row])) {
            data[row][col] = Number(arr[col][row]);
          } else if (typeof arr[col][row] === "string") {
            // @ts-ignore
            data[row][col] = arr[col][row].length ? arr[col][row] : NaN;
          } else if (typeof arr[col][row] === "number") {
            data[row][col] = arr[col][row];
          } else {
            data[row][col] = NaN;
          }
        }
      }
      this.data = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.exampleSize, this.numberOfExamples, data);
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
  return Dataset;
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

"use strict";
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

"use strict";
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
  return CategoryDatasetModifier;
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

"use strict";
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
  return MissingDataScalingDatasetModifier;
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
/* harmony export */   "ShuffleDatasetModifier": () => (/* binding */ ShuffleDatasetModifier)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetModifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetModifier */ "./src/typescript/Dataset/DatasetModifier/AbstractDatasetModifier.ts");
/* harmony import */ var _Dataset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dataset */ "./src/typescript/Dataset/Dataset.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__);
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
  return ShuffleDatasetModifier;
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetVocabulary": () => (/* binding */ DatasetVocabulary)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
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
  return DatasetVocabulary;
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
/* harmony export */   "Dataset": () => (/* reexport safe */ _Dataset__WEBPACK_IMPORTED_MODULE_0__.Dataset)
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
          var dataset = new _Dataset__WEBPACK_IMPORTED_MODULE_0__.Dataset(exampleSize, numberOfExamples, matrix.data);
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetBuilderSourceCSV": () => (/* binding */ DatasetBuilderSourceCSV)
/* harmony export */ });
/* harmony import */ var _AbstractDatasetBuilderSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractDatasetBuilderSource */ "./src/typescript/DatasetBuilder/DatasetBuilderSource/AbstractDatasetBuilderSource.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
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
      if (typeof numberOfExamples !== "undefined" && typeof exampleSize !== "undefined") {
        return new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix(numberOfExamples, exampleSize, this.data);
      }
      return new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix(0, 0, [[]]);
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetBuilder": () => (/* reexport safe */ _DatasetBuilder__WEBPACK_IMPORTED_MODULE_0__.DatasetBuilder),
/* harmony export */   "DatasetVocabularyBuilder": () => (/* reexport safe */ _DatasetVocabularyBuilder__WEBPACK_IMPORTED_MODULE_1__.DatasetVocabularyBuilder)
/* harmony export */ });
/* harmony import */ var _DatasetBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatasetBuilder */ "./src/typescript/DatasetBuilder/DatasetBuilder.ts");
/* harmony import */ var _DatasetVocabularyBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatasetVocabularyBuilder */ "./src/typescript/DatasetBuilder/DatasetVocabularyBuilder.ts");




/***/ }),

/***/ "./node_modules/impulse-math-ts/dist/impulse-math-ts.js":
/*!**************************************************************!*\
  !*** ./node_modules/impulse-math-ts/dist/impulse-math-ts.js ***!
  \**************************************************************/
/***/ ((module) => {

(()=>{"use strict";var r={d:(t,o)=>{for(var e in o)r.o(o,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})},o:(r,t)=>Object.prototype.hasOwnProperty.call(r,t),r:r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}},t={};function o(r){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},o(r)}function e(r,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,a(e.key),e)}}function a(r){var t=function(r,t){if("object"!==o(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var a=e.call(r,"string");if("object"!==o(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===o(t)?t:String(t)}function n(r){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n(r)}function s(r,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},s(r,t)}function i(r,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}function c(r){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},c(r)}r.r(t),r.d(t,{Matrix:()=>B,math:()=>I});var f=function(r,t){if(r.rows!==t.rows)throw new Error("ROWS number not equal.");if(r.cols!==t.cols)throw new Error("COLS number not equal.");for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var a=0;a<r.cols;a+=1)o[e][a]=r.data[e][a]/t.data[e][a]}return new B(r.rows,t.cols,o)},u=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var a=0;a<r.cols;a+=1)o[e][a]=r.data[e][a]/t}return new B(r.rows,r.cols,o)},l=function(r){for(var t=[],o=0;o<r.rows;o+=1){t[o]=[];for(var e=0;e<r.cols;e+=1)t[o][e]=1/(1+Math.exp(-r.data[o][e]))}return B.from(t)},h=function(r,t){for(var o=[],e=0;e<t.rows;e+=1){o[e]=[];for(var a=0;a<t.cols;a+=1)t.data&&(o[e][a]=Math.log(t.data[e][a]+1e-8))}for(var n=x(new B(t.rows,t.cols,o),r),s=[],i=0;i<r.rows;i+=1){s[i]=[];for(var c=0;c<r.cols;c+=1)r.data&&(s[i][c]=1-r.data[i][c])}for(var f=new B(r.rows,r.cols,s),u=[],l=0;l<t.rows;l+=1){u[l]=[];for(var h=0;h<t.cols;h+=1)t.data&&(u[l][h]=Math.log(1-t.data[l][h]+1e-8))}var v=new B(t.rows,t.cols,u);return g(x(K(n,-1),r),x(K(v,-1),j(f,1))).sum()},v=function(r,t){return l(t).multiply(l(t).minusOne())},w=function(r){for(var t=[],o=0;o<r.rows;o+=1){t[o]=[];for(var e=0;e<r.cols;e+=1)t[o][e]=(1-Math.exp(-2*r.data[o][e]))/(1+Math.exp(-2*r.data[o][e]))}return B.from(t)},d=function(r){for(var t=[],o=0;o<r.rows;o+=1){t[o]=[];for(var e=0;e<r.cols;e+=1)r.data&&(t[o][e]=Math.max(0,r.data[o][e]))}return new B(r.rows,r.cols,t)},y=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var a=0;a<r.cols;a+=1)r.data&&(o[e][a]=t.data[e][a]>0?1:0)}return x(new B(r.rows,r.cols,o),r)},m=function(r){for(var t=[],o=0;o<r.rows;o+=1){t[o]=[];for(var e=0;e<r.cols;e+=1)r.data&&(t[o][e]=Math.log(1+Math.exp(r.data[o][e])))}return new B(r.rows,r.cols,t)},p=function(r){for(var t=[],o=0;o<r.rows;o+=1){t[o]=[];for(var e=0;e<r.cols;e+=1)r.data&&(t[o][e]=Math.pow(r.data[o][e],2))}return new B(r.rows,r.cols,t).sum()},b=function(r){for(var t=[],o=0;o<r.rows;o+=1){t[o]=[];for(var e=0;e<r.cols;e+=1)r.data&&(t[o][e]=Math.sqrt(r.data[o][e]+1e-8))}return new B(r.rows,r.cols,t)},k=function(r,t){if(r.cols!==t.rows)throw new Error("DIMENSIONS error. m1.cols ".concat(r.rows," ").concat(r.cols," !== m2.rows ").concat(t.rows," ").concat(t.cols,"."));for(var o=[],e=0;e<r.rows;++e){o[e]=new Array(t.cols);for(var a=0;a<t.cols;++a){o[e][a]=0;for(var n=0;n<r.cols;++n)r.data&&t.data&&(o[e][a]+=r.data[e][n]*t.data[n][a])}}return new B(r.rows,t.cols,o)},g=function(r,t){if(r.rows!==t.rows)throw new Error("ROWS number not equal.");if(r.cols!==t.cols)throw new Error("COLS number not equal. m1.cols ".concat(r.cols," !== m2.cols ").concat(t.cols));for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var a=0;a<r.cols;a+=1)r.data&&t.data&&(o[e][a]=r.data[e][a]+t.data[e][a])}return new B(r.rows,r.cols,o)},S=function(r,t){if(r.rows!==t.rows)throw new Error("ROWS number not equal: m1.rows ".concat(r.rows," !== m2.rows ").concat(t.rows));if(r.cols!==t.cols)throw new Error("COLS number not equal: m1.cols ".concat(r.cols," !== m2.cols ").concat(t.cols));for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var a=0;a<r.cols;a+=1)r.data&&t.data&&(o[e][a]=r.data[e][a]-t.data[e][a])}return new B(r.rows,r.cols,o)},M=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var a=0;a<r.cols;a+=1)o[e][a]=(4*Math.random()-2)*Math.sqrt(2/t)}return new B(r.rows,r.cols,o)},O=function(r){for(var t=[],o=0;o<r.rows;o+=1){t[o]=[];for(var e=0;e<r.cols;e+=1)t[o][e]=0}return new B(r.rows,r.cols,t)},x=function(r,t){if(r.rows!==t.rows)throw new Error("ROWS number not equal: m1.rows ".concat(r.rows," !== m2.rows ").concat(t.rows));if(r.cols!==t.cols)throw new Error("COLS number not equal: m1.cols ".concat(r.cols," !== m2.cols ").concat(t.cols));for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var a=0;a<r.cols;a+=1)r.data&&t.data&&(o[e][a]=r.data[e][a]*t.data[e][a])}return new B(r.rows,r.cols,o)},K=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var a=0;a<r.cols;a+=1)r.data&&(o[e][a]=r.data[e][a]*t)}return new B(r.rows,r.cols,o)},j=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var a=0;a<r.cols;a+=1)r.data&&(o[e][a]=t-r.data[e][a])}return new B(r.rows,r.cols,o)},E=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var a=0;a<r.cols;a+=1)r.data&&(o[e][a]=Math.pow(r.data[e][a],t))}return new B(r.rows,r.cols,o)},P=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var a=0;a<r.cols;a+=1)r.data&&(o[e][a]=Math.log(r.data[e][a]+1e-8))}return new B(r.rows,r.cols,o)},q=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var a=0;a<r.cols;a+=1)r.data&&(o[e][a]=Math.log(1-r.data[e][a]))}return new B(r.rows,r.cols,o)},R=function(r,t){for(var o=[],e=0;e<r.rows;e+=1){o[e]=[];for(var a=0;a<r.cols;a+=1)o[e][a]=r.data[e][a]+t}return new B(r.rows,r.cols,o)},C=function(r){for(var t=[],o=0;o<r.cols;o+=1){t[o]=[];for(var e=0;e<r.rows;e+=1)r.data&&(t[o][e]=r.data[e][o])}return new B(r.cols,r.rows,t)},A=new(function(r){!function(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),t&&s(r,t)}(n,r);var t,o,e,a=(o=n,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}(),function(){var r,t=c(o);if(e){var a=c(this).constructor;r=Reflect.construct(t,arguments,a)}else r=t.apply(this,arguments);return i(this,r)});function n(){var r;return function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(r=a.call(this)).addKernel("multiply",k),r.addKernel("add",g),r.addKernel("subtract",S),r.addKernel("subtractFromNumber",j),r.addKernel("fillRandom",M),r.addKernel("fillZeros",O),r.addKernel("elementWiseMultiply",x),r.addKernel("multiplyNumber",K),r.addKernel("elementWiseDivide",f),r.addKernel("divideNumber",u),r.addKernel("logisticActivation",l),r.addKernel("logisticLoss",h),r.addKernel("logisticBackpropagation",v),r.addKernel("tanhActivation",w),r.addKernel("reluActivation",d),r.addKernel("reluBackpropagation",y),r.addKernel("softplusActivation",m),r.addKernel("penalty",p),r.addKernel("sqrt",b),r.addKernel("transpose",C),r.addKernel("pow",E),r.addKernel("log",P),r.addKernel("logMinusOne",q),r.addKernel("addNumber",R),r}return t=n,Object.defineProperty(t,"prototype",{writable:!1}),t}(function(){function r(){var t,o,e;!function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t=this,e={},(o=a(o="kernels"))in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e}var t,o;return t=r,o=[{key:"addKernel",value:function(r,t){return this.kernels[r]=t,this}},{key:"execute",value:function(r){if(!this.kernels[r])throw new Error("Kernel '".concat(r,"' not exists."));for(var t=arguments.length,o=new Array(t>1?t-1:0),e=1;e<t;e++)o[e-1]=arguments[e];return this.kernels[r].apply(null,o)}}],o&&e(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),r}())),T=function(){return A};function _(r){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},_(r)}function D(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function N(r,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,L(e.key),e)}}function W(r,t,o){return(t=L(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function L(r){var t=function(r,t){if("object"!==_(r)||null===r)return r;var o=r[Symbol.toPrimitive];if(void 0!==o){var e=o.call(r,"string");if("object"!==_(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===_(t)?t:String(t)}var B=function(){function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;D(this,r),W(this,"rows",0),W(this,"cols",0),W(this,"data",null),this.resize(t,o),e&&this.generateData(e)}var t,o,e;return t=r,o=[{key:"resize",value:function(r,t){this.rows=r,this.cols=t,this.data=new Array(this.rows);for(var o=0;o<this.rows;o+=1)this.data[o]=new Array(this.cols);return this}},{key:"generateData",value:function(r){for(var t=[],o=0;o<this.rows;o+=1)t[o]=new Array(this.cols);for(var e=0;e<this.cols;e+=1)for(var a=0;a<this.rows;a+=1)"number"==typeof r[a]?t[a][e]=r[a]:"string"==typeof r[a][e]&&/^[0-9.]+$/.test(String(r[a][e]))?t[a][e]=Number(r[a][e]):t[a][e]=r[a][e];return this.data=t,this}},{key:"sum",value:function(){for(var r=0,t=0;t<this.rows;t+=1)for(var o=0;o<this.cols;o+=1)r+=this.data[t][o];return r}},{key:"colwiseSum",value:function(){for(var t=[],o=this.transpose(),e=0;e<o.rows;e+=1){t[e]=[0];for(var a=0;a<o.cols;a+=1)t[e][0]+=o.data[e][a]}return new r(this.cols,1,t)}},{key:"rowwiseSum",value:function(){for(var t=[[]],o=0;o<this.rows;o+=1){for(var e=0,a=0;a<this.cols;a+=1)e+=this.data[o][a];t[0].push(e)}return new r(1,this.rows,t)}},{key:"flatten",value:function(){for(var r=[],t=0;t<this.rows;t+=1)for(var o=0;o<this.cols;o+=1)r.push(this.data[t][o]);return r}},{key:"replicate",value:function(t,o){if(1===t&&1===this.cols&&o>1){for(var e=[],a=0;a<this.rows;a+=1){e[a]=[];for(var n=0;n<o;n+=1)e[a][n]=this.data[a][0]}return r.from(e)}if(1===o&&1===this.rows&&t>1){for(var s=[],i=0;i<t;i+=1){s[i]=[];for(var c=0;c<this.cols;c+=1)s[i][c]=this.data[0][c]}return r.from(s)}return this}},{key:"transpose",value:function(){return T().execute("transpose",this)}},{key:"colMaxCoeffIndex",value:function(r){for(var t=-1,o=-1/0,e=0;e<this.rows;e+=1)this.data&&this.data[e][r]>o&&(o=this.data[e][r],t=e);return t}},{key:"rowMaxCoeffIndex",value:function(r){for(var t=-1,o=-1/0,e=0;e<this.cols;e+=1)this.data[r][e]>o&&(o=this.data[r][e],t=e);return t}},{key:"block",value:function(t,o,e,a){for(var n=[],s=t,i=0;s<this.rows&&s<t+e;s+=1,i+=1){n[i]=new Array(a);for(var c=o,f=0;c<this.cols&&c<o+a;c+=1,f+=1)n[i][f]=this.data[s][c]}return new r(e,a,n)}},{key:"col",value:function(t){for(var o=[],e=0;e<this.rows;e+=1)o[e]=[this.data[e][t]];return new r(this.rows,1,o)}},{key:"row",value:function(t){for(var o=[],e=0;e<this.cols;e+=1)o[e]=[this.data[t][e]];return new r(this.cols,1,o)}},{key:"setCol",value:function(r,t){for(var o=0;o<this.rows;o+=1)this.data&&t.data&&(this.data[o][r]=t.data[o][0]);return this}},{key:"sigmoid",value:function(){return this.multiply(-1).exp().add(1).fraction(1)}},{key:"rollToColMatrix",value:function(){for(var t=[],o=0,e=0;e<this.rows;e+=1)for(var a=0;a<this.cols;a+=1)t[o]=[],t[o++][0]=this.data[e][a];return r.from(t)}},{key:"abs",value:function(){for(var t=[],o=0;o<this.rows;o+=1){t[o]=[];for(var e=0;e<this.cols;e+=1)t[o][e]=Math.abs(this.data[o][e])}return r.from(t)}},{key:"mean",value:function(){for(var r=0,t=this.rows*this.cols,o=0;o<this.rows;o+=1)for(var e=0;e<this.cols;e+=1)r+=this.data[o][e];return r/t}},{key:"max",value:function(){for(var r=-1/0,t=0;t<this.rows;t+=1)for(var o=0;o<this.cols;o+=1)r=Math.max(this.data[t][o],r);return r}},{key:"setMax",value:function(t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var a=0;a<this.cols;a+=1)o[e][a]=Math.min(this.data[e][a],t)}return r.from(o)}},{key:"setMin",value:function(t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var a=0;a<this.cols;a+=1)o[e][a]=Math.max(this.data[e][a],t)}return r.from(o)}},{key:"setZeros",value:function(){for(var t=[],o=0;o<this.rows;o+=1){t[o]=[];for(var e=0;e<this.cols;e+=1)t[o][e]=0}return r.from(t)}},{key:"setOnes",value:function(){for(var t=[],o=0;o<this.rows;o+=1){t[o]=[];for(var e=0;e<this.cols;e+=1)t[o][e]=1}return r.from(t)}},{key:"setRandom",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var a=0;a<this.cols;a+=1)o[e][a]=(4*Math.random()-2)*Math.sqrt(2/t)}return r.from(o)}},{key:"fraction",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var a=0;a<this.cols;a+=1)o[e][a]=t/this.data[e][a]}return r.from(o)}},{key:"sqrt",value:function(){for(var t=[],o=0;o<this.rows;o+=1){t[o]=[];for(var e=0;e<this.cols;e+=1)t[o][e]=Math.sqrt(this.data[o][e]+1e-8)}return r.from(t)}},{key:"dot",value:function(r){return T().execute("multiply",this,r)}},{key:"multiply",value:function(t){if("number"==typeof t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var a=0;a<this.cols;a+=1)o[e][a]=this.data[e][a]*t}return r.from(o)}if(t.rows!==this.rows||this.cols!==t.cols)throw new Error("Dimension error: ".concat(this.shape()," !== ").concat(t.shape()));for(var n=[],s=0;s<this.rows;s+=1){n[s]=[];for(var i=0;i<this.cols;i+=1)n[s][i]=this.data[s][i]*t.data[s][i]}return r.from(n)}},{key:"subtract",value:function(t){if(t instanceof r){if(this.rows!==t.rows||this.cols!==t.cols)throw new Error("Dimensions error: ".concat(this.rows,", ").concat(this.cols," !== ").concat(t.rows,", ").concat(t.cols));for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var a=0;a<this.cols;a+=1)o[e][a]=this.data[e][a]-t.data[e][a]}return r.from(o)}for(var n=[],s=0;s<this.rows;s+=1){n[s]=[];for(var i=0;i<this.cols;i+=1)n[s][i]=this.data[s][i]-t}return r.from(n)}},{key:"forEach",value:function(t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var a=0;a<this.cols;a+=1)o[e][a]=t(this.data[e][a])}return r.from(o)}},{key:"shape",value:function(){return[this.rows,this.cols]}},{key:"divide",value:function(t){if("number"==typeof t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var a=0;a<this.cols;a+=1)o[e][a]=this.data[e][a]/t}return r.from(o)}if(t.rows!==this.rows||t.cols!==this.cols)throw new Error("Dimensions error (".concat(this.rows,", ").concat(this.cols,") !== (").concat(t.rows,", ").concat(t.cols,")"));for(var n=[],s=0;s<this.rows;s+=1){n[s]=[];for(var i=0;i<this.cols;i+=1)n[s][i]=this.data[s][i]/t.data[s][i]}return r.from(n)}},{key:"minusOne",value:function(){for(var t=[],o=0;o<this.rows;o+=1){t[o]=[];for(var e=0;e<this.cols;e+=1)t[o][e]=1-this.data[o][e]}return r.from(t)}},{key:"subtractFromNumber",value:function(t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var a=0;a<this.cols;a+=1)o[e][a]=t-this.data[e][a]}return r.from(o)}},{key:"add",value:function(t){if("number"==typeof t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var a=0;a<this.cols;a+=1)o[e][a]=this.data[e][a]+t}return r.from(o)}if(t instanceof r){if(t.rows!==this.rows||t.cols!==this.cols)throw new Error("Dimention error: rows (x: ".concat(this.rows,", y: ").concat(this.cols,") !== (x: ").concat(t.rows,", y: ").concat(t.cols,")"));for(var n=[],s=0;s<this.rows;s+=1){n[s]=[];for(var i=0;i<this.cols;i+=1)n[s][i]=this.data[s][i]+t.data[s][i]}return r.from(n)}return this}},{key:"log",value:function(){for(var t=[],o=0;o<this.rows;o+=1){t[o]=[];for(var e=0;e<this.cols;e+=1)t[o][e]=Math.log(this.data[o][e]+1e-8)}return r.from(t)}},{key:"tanh",value:function(){return this.exp().subtract(this.multiply(-1).exp()).divide(this.exp().add(this.multiply(-1).exp()))}},{key:"softmax",value:function(){var r=this.max()-1e-8;return this.subtract(r).exp().divide(this.rowwiseSum().replicate(this.cols,1).transpose())}},{key:"exp",value:function(){for(var t=[],o=0;o<this.rows;o+=1){t[o]=[];for(var e=0;e<this.cols;e+=1)t[o][e]=Math.exp(this.data[o][e]+1e-8)}return r.from(t)}},{key:"pow",value:function(t){for(var o=[],e=0;e<this.rows;e+=1){o[e]=[];for(var a=0;a<this.cols;a+=1)o[e][a]=Math.pow(this.data[e][a],t)}return r.from(o)}},{key:"value",value:function(r,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return void 0===o?this.data[r][t]:(this.data[r][t]=o,this)}},{key:"copy",value:function(){return r.from(this.data)}}],e=[{key:"from",value:function(t){var o;return new r(t.length,(null===(o=t[0])||void 0===o?void 0:o.length)||0,t)}}],o&&N(t.prototype,o),e&&N(t,e),Object.defineProperty(t,"prototype",{writable:!1}),r}(),I={maxpool:function(r,t,o,e,a,n,s,i){for(var c=(e-n)/i+1,f=(o-a)/s+1,u=0,l=new B(c*f*t,1).setZeros(),h=0;h+a<=o;h+=s)for(var v=0;v+n<=e;v+=i){for(var w=0;w<t;w++){for(var d=-1/0,y=o*e*w,m=c*f*w,p=0;p<a;p++)for(var b=0;b<n;b++)d=Math.max(d,r.data[y+(p+h)*e+v+b][0]);l.data[m+u][0]=d}u++}return l},round:function(r,t){return Math.round((r+223e-18)*Math.pow(10,t))/Math.pow(10,t)},im2col:function(r,t,o,e,a,n,s,i,c,f){for(var u=0,l=new B(((e-n+2*i)/f+1)*((o-a+2*s)/c+1),n*a*t).setZeros(),h=-s;h+a<=o+s;h+=c)for(var v=-i;v+n<=e+i;v+=f){for(var w=0,d=0;d<t;d++)for(var y=o*e*d,m=0;m<a;m++)for(var p=0;p<n;p++)h+m>=0&&v+p>=0&&v+p<e&&h+m<o&&(l.data[u][w]=r.data[(m+h)*e+v+p+y][0]),w++;u++}return l}};module.exports=t})();
//# sourceMappingURL=impulse-math-ts.js.map

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