/*!
 * 
 * blue-canvas-tmpl.js 1.0.5
 * (c) 2016-2020 Blue
 * Released under the MIT License.
 * https://github.com/azhanging/blue-canvas-tmpl
 * time:Wed, 17 Apr 2019 16:43:23 GMT
 * 		
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("blue-utils"), require("blue-queue-pipe"));
	else if(typeof define === 'function' && define.amd)
		define([, ], factory);
	else if(typeof exports === 'object')
		exports["BlueCanvasTmpl"] = factory(require("blue-utils"), require("blue-queue-pipe"));
	else
		root["BlueCanvasTmpl"] = factory(root["blueUtils"], root["BlueQueuePipe"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./static";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initCanvas;
/* harmony export (immutable) */ __webpack_exports__["b"] = saveCanvasDefaultProperties;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blue_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blue_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_blue_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_properties__ = __webpack_require__(6);



function initCanvas() {
  var options = this.options;
  if (!options.el) return {};
  var canvas = document.querySelector(options.el);
  if (!canvas) return {};
  var canvasCtx = canvas.getContext('2d');
  canvas.width = options.width;
  canvas.height = options.height;
  return {
    canvasCtx: canvasCtx,
    canvas: canvas
  };
}

//save canvas default attributes
function saveCanvasDefaultProperties() {
  var _this = this;

  if (!this.canvas.defaultCanvasProperties) {
    this.canvas.defaultCanvasProperties = {};
    __WEBPACK_IMPORTED_MODULE_0_blue_utils___default.a.each(__WEBPACK_IMPORTED_MODULE_1__canvas_properties__["a" /* default */], function (key) {
      _this.canvas.defaultCanvasProperties[key] = _this.canvasCtx[key];
    });
  }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
/* harmony export (immutable) */ __webpack_exports__["b"] = renderText;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blue_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blue_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_blue_utils__);


//渲染
function render() {
  var _this = this;

  var options = this.options;
  var renderList = options.renderList;
  (renderList || []).forEach(function (item) {
    if (item.type === 'img') {
      renderImg.call(_this, item);
    } else if (item.type === 'text') {
      renderText.call(_this, item);
    } else if (__WEBPACK_IMPORTED_MODULE_0_blue_utils___default.a.isFunction(item)) {
      __WEBPACK_IMPORTED_MODULE_0_blue_utils___default.a.hook(_this, item);
    }
    _this.resetCanvasProperties();
  });
  __WEBPACK_IMPORTED_MODULE_0_blue_utils___default.a.hook(this, options.rendered);
}

//渲染图片
function renderImg(img) {
  //插入图片
  if (img.image) {
    __WEBPACK_IMPORTED_MODULE_0_blue_utils___default.a.hook(this, img.created, [img]);
    this.canvasCtx.drawImage(img.image, img.x, img.y, img.width, img.height);
    __WEBPACK_IMPORTED_MODULE_0_blue_utils___default.a.hook(this, img.rendered, [img]);
  }
}

//渲染文字
function renderText(text) {
  __WEBPACK_IMPORTED_MODULE_0_blue_utils___default.a.hook(this, text.created, [text]);
  var canvasCtx = this.canvasCtx;
  canvasCtx.font = text.font || '15px arial, 微软雅黑, sans-serif';
  canvasCtx.fillStyle = text.style || '#000';
  canvasCtx.fillText(text.content, text.x, text.y);
  __WEBPACK_IMPORTED_MODULE_0_blue_utils___default.a.hook(this, text.rendered, [text]);
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__instance__["a" /* default */]);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arc__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_blue_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_blue_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_blue_utils__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var BlueCanvasTmpl = function () {
  function BlueCanvasTmpl() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      //创建后的钩子
      created: function created() {},

      renderList: [],
      //渲染完毕后的钩子
      rendered: function rendered() {}
    };

    _classCallCheck(this, BlueCanvasTmpl);

    this.options = opts;
    this.init();
  }

  _createClass(BlueCanvasTmpl, [{
    key: 'init',
    value: function init() {
      __WEBPACK_IMPORTED_MODULE_0__init__["a" /* default */].call(this);
    }
  }, {
    key: 'renderText',
    value: function renderText(text) {
      __WEBPACK_IMPORTED_MODULE_1__render__["b" /* renderText */].call(this, text);
    }

    //初始化canvas context的属性

  }, {
    key: 'resetCanvasProperties',
    value: function resetCanvasProperties() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_4_blue_utils___default.a.each(this.canvas.defaultCanvasProperties, function (value, key) {
        _this.canvasCtx[key] = value;
      });
    }

    //更新

  }, {
    key: 'update',
    value: function update(options) {
      if (options) {
        this.options = options;
      }
      this.canvasCtx.clearRect(0, 0, this.options.width, this.options.height);
      this.init();
    }
  }, {
    key: 'arc',
    value: function arc() {
      __WEBPACK_IMPORTED_MODULE_2__arc__["a" /* arc */].apply(this, arguments);
    }
  }, {
    key: 'getByteLength',
    value: function getByteLength() {
      return __WEBPACK_IMPORTED_MODULE_3__text__["a" /* getByteLength */].apply(this, arguments);
    }
  }], [{
    key: 'getByteLength',
    value: function getByteLength() {
      return __WEBPACK_IMPORTED_MODULE_3__text__["a" /* getByteLength */].apply(this, arguments);
    }
  }]);

  return BlueCanvasTmpl;
}();

/* harmony default export */ __webpack_exports__["a"] = (BlueCanvasTmpl);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_blue_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_blue_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_blue_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img__ = __webpack_require__(7);





function init() {
  //预加载队列
  this.loadQueue = [];
  this.id = 0;

  var _initCanvas$call = __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* initCanvas */].call(this),
      canvas = _initCanvas$call.canvas,
      canvasCtx = _initCanvas$call.canvasCtx;

  if (!canvas) {
    console.warn('element is null');
    return;
  }
  this.canvasCtx = canvasCtx;
  this.canvas = canvas;
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* saveCanvasDefaultProperties */].call(this);
  //创建完毕的钩子
  __WEBPACK_IMPORTED_MODULE_1_blue_utils___default.a.hook(this, this.options.created);
  //预加载
  __WEBPACK_IMPORTED_MODULE_2__img__["a" /* load */].call(this);
}

/* harmony default export */ __webpack_exports__["a"] = (init);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//default canvas config
var canvasProperties = ["fillStyle", "filter", "font", "globalAlpha", "globalCompositeOperation", "imageSmoothingEnabled", "imageSmoothingQuality", "lineCap", "lineDashOffset", "lineJoin", "lineWidth", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline"];

/* harmony default export */ __webpack_exports__["a"] = (canvasProperties);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = load;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blue_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blue_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_blue_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_blue_queue_pipe__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_blue_queue_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_blue_queue_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render__ = __webpack_require__(2);




//预加载
function load() {
  var blueCanvasTmpl = this;
  this.id++;
  //设置预加载的队列
  this.loadQueue = new __WEBPACK_IMPORTED_MODULE_1_blue_queue_pipe___default.a({
    methods: {
      next: function next() {
        if (!this.isEmpty()) {
          __WEBPACK_IMPORTED_MODULE_0_blue_utils___default.a.hook(this, this.dequeue());
        } else {
          //没有就进行渲染
          __WEBPACK_IMPORTED_MODULE_2__render__["a" /* default */].call(blueCanvasTmpl);
        }
      }
    }
  });
  //查找渲染中为图片，预加载图片
  loadImgs.call(this, findImgs.call(this));
}

//查找图片
function findImgs() {
  var renderList = this.options.renderList;

  var imgs = [];
  __WEBPACK_IMPORTED_MODULE_0_blue_utils___default.a.each(renderList, function (item) {
    if (item.type === 'img') {
      imgs.push(item);
    }
  });
  return imgs;
}

//预加载图片
function loadImgs(imgs) {
  var _this = this;

  var id = this.id;
  (imgs || []).forEach(function (img) {
    if (!img.src) return;
    _this.loadQueue.enqueue(function () {
      var image = new Image();
      image.id = _this.id;
      image.onload = function () {
        //限定执行的id
        if (parseInt(image.id) === id) {
          img.image = image;
          //队列下一跳
          _this.loadQueue.useMethod('next');
        }
      };

      image.onerror = function () {
        //队列下一跳
        console.log('load error:' + image.src);
        _this.loadQueue.useMethod('next');
      };

      image.src = img.src;
    });
  });
  this.loadQueue.useMethod('next');
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = arc;
function arc(type, x, y, width, height, radius, color) {
  var ctx = this.canvasCtx;
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx[type + 'Style'] = color;
  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y);
  ctx.arcTo(x + width + radius, y, x + width + radius, y + radius, radius);
  ctx.lineTo(x + width + radius, y + height);
  ctx.arcTo(x + width + radius, y + height + radius, x + width, y + radius + height, radius);
  ctx.lineTo(x, y + height + radius);
  ctx.arcTo(x - radius, y + height + radius, x - radius, y + height, radius);
  ctx.lineTo(x - radius, y + radius);
  ctx.arcTo(x - radius, y, x, y, radius);
  ctx.closePath();
  ctx[type]();
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getByteLength;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__device__ = __webpack_require__(11);


function getByteLength(content, length, last) {
  var len = 0;
  for (var i = 0; i < content.length; i++) {
    var char = content.charAt(i);
    if (char.match(/[\u4E00-\u9FBF]/ig) != null || char.match(/[\u2014\u300a\u300b]/g) || char.match(/[\uff0c\u3002\u201c\uff1a\u201d\u2014]/ig) != null && !__WEBPACK_IMPORTED_MODULE_0__device__["a" /* default */].isWap || char.match(/[\uff0c\u3002\uff1a]/ig) != null && __WEBPACK_IMPORTED_MODULE_0__device__["a" /* default */].isWap) {
      len += 2;
    } else {
      len += 1;
    }
    //满足截取的字符长度
    //截取的字符等于已经抓到的len，
    if (length !== undefined && (length === len || length < len)) {
      return {
        val: content.substr(0, i + 1),
        lastVal: content.substr(i + 1)
      };
    }
  }
  if (length !== undefined && last === true) {
    return {
      val: content.substr(0),
      lastVal: ''
    };
  }
  return len;
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = device;
//获取当前设备信息
function device() {
  //默认
  var device = {
    isWeChat: false, //是否在微信端
    isWap: false, //是否为移动设备
    isIPhone: false,
    isIPad: false,
    isAndroid: false,
    isApp: false, //是否在app webview
    isPc: false, //是否为电脑端
    isServer: true //是否在服务器端 预留ssr处理
  };

  try {
    var userAgent = navigator.userAgent;
    var isWap = /iPhone|iPad|Android|Windows Phone|KFAPWI|MeeGo/ig.test(userAgent);
    var isWeChat = /MicroMessenger/ig.test(userAgent);
    device = {
      isWeChat: isWeChat,
      isWap: isWap,
      isIPhone: /iPhone/ig.test(userAgent),
      isIPad: /iPad/ig.test(userAgent),
      isAndroid: /Android/ig.test(userAgent),
      isApp: false,
      isPc: !isWap,
      isServer: false
    };
  } catch (e) {}

  return device;
}

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=blue-canvas-tmpl.js.map