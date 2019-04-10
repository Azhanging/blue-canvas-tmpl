/*!
 * 
 * blue-canvas-tmpl.js 1.0.0
 * (c) 2016-2020 Blue
 * Released under the MIT License.
 * https://github.com/azhanging/blue-canvas-tmpl
 * time:Wed, 10 Apr 2019 17:23:35 GMT
 * 		
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BlueCanvasTmpl"] = factory();
	else
		root["BlueCanvasTmpl"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//blue utils 常用工具类 ES5
function BlueUtils() {}

//工具方法
BlueUtils.prototype = {

  constructor: BlueUtils,

  //是否为空的对象
  nullPlainObject: function (val) {
    return JSON.stringify(val) === "{}";
  },

  //是否为字符串
  isStr: function (val) {
    return typeof val === 'string';
  },

  //是否为对象类型
  isPlainObject: function (val) {
    return val && val !== null && val.toString() === '[object Object]';
  },

  //是否为数组
  isArray: function (val) {
    return val instanceof Array;
  },

  //是否为对象
  isObjcet: function (val) {
    return this.isPlainObject(val) || this.isArray(val);
  },

  //是否为定义
  isDef: function (val) {
    return val !== undefined && val !== null;
  },

  //是否为未定义
  isUndef: function (val) {
    return val === undefined || val === null;
  },

  //val是否为空
  isBlankSpace: function (val) {
    return val.trim().length === 0;
  },

  //是否为true
  isTrue: function (bool) {
    return bool === true;
  },

  //是否为false
  isFalse: function (bool) {
    return bool === false;
  },

  //是否为function
  isFunction: function (fn) {
    return typeof fn === 'function';
  },

  //执行某一段在context 中的 function ，带上指定的arguments
  hook: function (context, callback, args) {

    if (callback === undefined) callback = function () {};

    if (args === undefined) args = [];

    if (this.isFunction(callback)) {
      return callback.apply(context, args);
    }
  },

  //遍历
  each: function (obj, cb, isReturn) {

    if (!isReturn) isReturn = false;

    if (this.isUndef(obj)) return;

    var i = 0,
        index = 0,
        newVal = [],
        len = obj.length;

    if (this.isArray(obj) || this.isStr(obj)) {
      for (; i < len; i++) {
        if (isReturn) {
          newVal.push(cb(obj[i], i));
        } else {
          cb(obj[i], i);
        }
      }
    } else if (this.isPlainObject(obj)) {
      for (i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (isReturn) {
          newVal.push(cb(obj[i], i, index++));
        } else {
          cb(obj[i], i, index++);
        }
      }
    }

    if (isReturn) return newVal;
  },

  //深拷贝
  deepCopy: function (obj) {
    if (!obj || !(obj instanceof Array) && !(obj.toString() === "[object Object]")) return obj;
    var _obj = obj instanceof Array ? [] : {};
    for (var key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      if (obj instanceof Array || obj instanceof Object) {
        _obj[key] = this.deepCopy(obj[key]);
      } else {
        _obj[key] = obj[key];
      }
    }
    return _obj;
  },

  //扩展
  extend: function (object, _object, isDeep) {

    if (isDeep === undefined) isDeep = true;

    if (isDeep) object = this.deepCopy(object);

    var oldObjKeys = this.each(object, function (obj, key) {
      return key;
    }, true);

    this.each(_object, function (obj, key) {

      var findIndexInOld = oldObjKeys.indexOf(key);

      if (findIndexInOld != -1) {
        oldObjKeys.splice(findIndexInOld, 1);
      }

      if (this.isPlainObject(obj)) {
        if (!object[key]) {
          object[key] = {};
        }
        this.extend(object[key], obj, isDeep);
      }
      object[key] = obj;
    }.bind(this));

    this.each(oldObjKeys, function (key) {
      _object[key] = object[key];
    });

    return object;
  },

  //把当前key-value复制到对应对象的key-value上
  copy: function (object, _object) {
    this.each(_object, function (obj, key) {
      object[key] = obj;
    });
  },

  //获取表达式
  getRegExp: function (expr) {
    var tm = '\\/*.?+$^[](){}|\'\"';
    this.each(tm, function (tmItem, index) {
      expr = expr.replace(new RegExp('\\' + tmItem, 'g'), '\\' + tmItem);
    });
    return expr;
  },

  //或者object的长度
  getObjLen: function (obj) {
    var index = 0;
    this.each(obj, function () {
      ++index;
    });
    return index;
  },

  //获取链接中的参数
  getLinkParams: function (link) {
    var linkType = link.split('?');
    var queryString = linkType[1];
    if (linkType.length > 0 && queryString && queryString !== '') {
      return queryString;
    }
    return '';
  },

  //query string 转化为 object
  parseParams: function (queryString) {
    var linkQuery = {};
    if (!queryString) return linkQuery;
    //是否存在原query
    (queryString.split('&') || []).forEach(function (queryItemString) {
      var splitQueryItem = queryItemString.split('=');
      var key = splitQueryItem[0];
      var value = splitQueryItem[1];
      linkQuery[key] = value;
    });
    return linkQuery;
  },

  //query 转化为 string
  stringifyParams: function (query) {
    if (!this.isPlainObject(query)) return '';
    var _query = [];
    this.each(query, function (value, key) {
      _query.push(key + '=' + encodeURIComponent(value));
    });
    return _query.join('&');
  }
};

var blueUtils = new BlueUtils();

module.exports = blueUtils;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
/* harmony export (immutable) */ __webpack_exports__["b"] = renderText;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blue_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blue_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_blue_utils__);


//渲染
function render() {
  const renderList = this.options.renderList;
  (renderList || []).forEach(item => {
    if (item.type === 'img') {
      renderImg.call(this, item);
    } else if (item.type === 'text') {
      renderText.call(this, item);
    }
  });
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
  const canvasCtx = this.canvasCtx;
  canvasCtx.font = text.font || '15px arial, 微软雅黑, sans-serif';
  canvasCtx.fillStyle = text.style || '#000';
  canvasCtx.fillText(text.content, text.x, text.y);
  __WEBPACK_IMPORTED_MODULE_0_blue_utils___default.a.hook(this, text.rendered, [text]);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__instance__["a" /* default */]);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arc__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text__ = __webpack_require__(9);





class BlueCanvasTmpl {
  constructor(opts = {
    //创建后的钩子
    created() {},
    renderList: [/*{
                 type: 'img',
                 src: '',
                 x: 0,
                 y: 0,
                 width: 0,
                 height: 0,
                 created() {
                 //创建前的钩子
                 },
                 rendered() {
                 //渲染后的钩子
                 }
                 }, {
                 type: 'text',
                 font: '',
                 style: '',
                 content: '',
                 x: 0,
                 y: 0
                 }*/],
    //渲染完毕后的钩子
    rendered() {}
  }) {
    this.init(opts);
  }

  init(opts) {
    __WEBPACK_IMPORTED_MODULE_0__init__["a" /* default */].call(this, opts);
  }

  renderText(text) {
    __WEBPACK_IMPORTED_MODULE_1__render__["b" /* renderText */].call(this, text);
  }

  //更新
  update(options) {
    if (options) {
      this.options = options;
    }
    this.canvasCtx.clearRect(0, 0, this.options.width, this.options.height);
    this.init();
  }

  arc() {
    __WEBPACK_IMPORTED_MODULE_2__arc__["a" /* arc */].apply(this, arguments);
  }

  getByteLength() {
    return __WEBPACK_IMPORTED_MODULE_3__text__["a" /* getByteLength */].apply(this, arguments);
  }

  static getByteLength() {
    return __WEBPACK_IMPORTED_MODULE_3__text__["a" /* getByteLength */].apply(this, arguments);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (BlueCanvasTmpl);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_blue_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_blue_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_blue_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img__ = __webpack_require__(6);




function init(opts) {
  this.options = opts;
  //预加载队列
  this.loadQueue = [];
  this.id = 0;
  const { canvas, canvasCtx } = __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* initCanvas */].call(this);
  if (!canvas) {
    console.warn(`element is null`);
    return;
  }
  this.canvasCtx = canvasCtx;
  this.canvas = canvas;
  //创建完毕的钩子
  __WEBPACK_IMPORTED_MODULE_1_blue_utils___default.a.hook(this, this.options.created);
  //预加载
  __WEBPACK_IMPORTED_MODULE_2__img__["a" /* load */].call(this);
}

/* harmony default export */ __webpack_exports__["a"] = (init);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initCanvas;
function initCanvas() {
  const options = this.options;
  if (!options.el) return {};
  const canvas = document.querySelector(options.el);
  if (!canvas) return {};
  const canvasCtx = canvas.getContext('2d');
  canvas.width = options.width;
  canvas.height = options.height;
  return {
    canvasCtx,
    canvas
  };
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = load;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blue_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blue_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_blue_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_blue_queue_pipe__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_blue_queue_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_blue_queue_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render__ = __webpack_require__(1);




//预加载
function load() {
  const blueCanvasTmpl = this;
  this.id++;
  //设置预加载的队列
  this.loadQueue = new __WEBPACK_IMPORTED_MODULE_1_blue_queue_pipe___default.a({
    methods: {
      next() {
        if (!this.isEmpty()) {
          __WEBPACK_IMPORTED_MODULE_0_blue_utils___default.a.hook(this, this.dequeue());
        } else {
          console.log('render');
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
  const { renderList } = this.options;
  const imgs = [];
  __WEBPACK_IMPORTED_MODULE_0_blue_utils___default.a.each(renderList, item => {
    if (item.type === 'img') {
      imgs.push(item);
    }
  });
  return imgs;
}

//预加载图片
function loadImgs(imgs) {
  const id = this.id;
  (imgs || []).forEach(img => {
    if (!img.src) return;
    this.loadQueue.enqueue(() => {
      const image = new Image();
      image.id = this.id;
      image.onload = () => {
        //限定执行的id
        if (parseInt(image.id) === id) {
          img.image = image;
          //队列下一跳
          console.log('success');
          this.loadQueue.useMethod('next');
        }
      };

      image.onerror = () => {
        //队列下一跳
        console.log('error');
        this.loadQueue.useMethod('next');
      };

      image.src = img.src;
    });
  });
  console.log('next');
  this.loadQueue.useMethod('next');
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
* blue-queue-pipe.js v1.0.0
* (c) 2016-2020 Blue
* Released under the MIT License.
* https://github.com/azhanging/blue-queue-pipe
* time:2019-4-9 00:43:15
*/

function BlueQueuePipe(opts) {
  this._init(opts);
}

BlueQueuePipe.prototype = {

  constructor: BlueQueuePipe,

  _init: function (opts) {
    if (!opts) opts = {};
    //配置
    this.options = opts;
    //队列
    this.queue = [];
    //数据
    this.data = opts.data || {};
    //方法
    this.methods = opts.methods || {};
    //进列后的执行
    this.enqueued = opts.enqueued;
    //出列后的执行
    this.dequeued = opts.dequeued;
    //允许时钩子
    this.ran = opts.ran;
  },

  setEnqueued: function (enqueue) {
    this.options.enqueued = enqueue;
  },

  setDequeued: function (dequeue) {
    this.options.dequeued = dequeue;
  },

  enqueue: function (obj) {
    this.hook(this, this.enqueued, [this.queue.push(obj)]);
  },

  dequeue: function () {
    var dequeue = this.queue.shift();
    this.hook(this, this.dequeued, [dequeue]);
    return dequeue;
  },

  isEmpty: function () {
    return this.queue.length === 0;
  },

  clear: function () {
    this.queue = [];
  },

  first: function () {
    return this.queue[0];
  },

  last: function () {
    return this.queue[this.queue.length - 1];
  },

  run: function () {
    while (!this.isEmpty()) {
      var dequeue = this.dequeue();
      //如果队列项是function，执行
      if (typeof dequeue === 'function') {
        this.hook(this, this.ran, [dequeue({
          queueCtx: this,
          args: arguments
        })]);
      } else {
        //非function给dequeued执行
        this.hook(this, this.ran, [dequeue]);
      }
    }
  },

  hook: function (ctx, fn, args) {
    typeof fn === 'function' && fn.apply(ctx, args instanceof Array ? args : []);
  },

  //使用方法
  useMethod: function (name, args) {
    this.hook(this, this.methods[name], args || []);
  }
};

module.exports = BlueQueuePipe;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = arc;
function arc(type, x, y, width, height, radius, color) {
  const ctx = this.canvasCtx;
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getByteLength;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__device__ = __webpack_require__(10);


function getByteLength(content, length, last) {
  let len = 0;
  for (let i = 0; i < content.length; i++) {
    let char = content.charAt(i);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = device;
//获取当前设备信息
function device() {
  //默认
  let device = {
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
    const userAgent = navigator.userAgent;
    const isWap = /iPhone|iPad|Android|Windows Phone|KFAPWI|MeeGo/ig.test(userAgent);
    const isWeChat = /MicroMessenger/ig.test(userAgent);
    device = {
      isWeChat,
      isWap,
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