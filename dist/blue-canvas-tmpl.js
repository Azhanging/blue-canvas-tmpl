/*!
 * 
 * blue-canvas-tmpl.js 1.0.7
 * (c) 2016-2020 Blue
 * Released under the MIT License.
 * https://github.com/azhanging/blue-canvas-tmpl
 * time:Fri, 03 Apr 2020 08:05:51 GMT
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = (_instance__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _arc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};





var BlueCanvasTmpl = /** @class */ (function () {
    function BlueCanvasTmpl(opts) {
        if (opts === void 0) { opts = {}; }
        //配置选项
        this.options = {};
        //画布Element
        this.canvas = {};
        //当前渲染id
        this.id = 0;
        this.options = opts;
        this.id = 0;
        _init__WEBPACK_IMPORTED_MODULE_1__["default"].call(this);
    }
    BlueCanvasTmpl.prototype.renderText = function (text) {
        _render__WEBPACK_IMPORTED_MODULE_2__["renderText"].call(this, text);
    };
    //初始化canvas context的属性
    BlueCanvasTmpl.prototype.resetCanvasProperties = function () {
        var _this = this;
        var defaultCanvasProperties = this.canvas.defaultCanvasProperties;
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].each(defaultCanvasProperties, function (value, key) {
            _this.canvasCtx[key] = value;
        });
    };
    //更新
    BlueCanvasTmpl.prototype.update = function (options) {
        if (options) {
            this.options = options;
        }
        this.canvasCtx.clearRect(0, 0, this.options.width || 100, this.options.height || 100);
        _init__WEBPACK_IMPORTED_MODULE_1__["default"].call(this);
    };
    BlueCanvasTmpl.prototype.arc = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _arc__WEBPACK_IMPORTED_MODULE_3__["arc"].apply(this, __spreadArrays(args));
    };
    BlueCanvasTmpl.prototype.getByteLength = function () {
        return _text__WEBPACK_IMPORTED_MODULE_4__["getByteLength"].apply(this, arguments);
    };
    BlueCanvasTmpl.getByteLength = function () {
        return _text__WEBPACK_IMPORTED_MODULE_4__["getByteLength"].apply(this, arguments);
    };
    return BlueCanvasTmpl;
}());
/* harmony default export */ __webpack_exports__["default"] = (BlueCanvasTmpl);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var blueUtils = {
    //是否为数组
    isArray: function (val) {
        return val instanceof Array;
    },
    //是否为undefine 或者 null
    isUndef: function (val) {
        return val === undefined || val === null;
    },
    //是否为function
    isFunction: function (fn) {
        return typeof fn === 'function';
    },
    //执行function
    hook: function (context, cb, args) {
        if (args === void 0) { args = []; }
        if (this.isFunction(cb)) {
            return cb.apply(context, args);
        }
        return cb;
    },
    //遍历
    each: function (obj, cb, isReturn) {
        if (isReturn === void 0) { isReturn = false; }
        if (this.isUndef(obj))
            return;
        var i = 0, index = 0, newVal = [];
        var len = obj.length;
        if (this.isArray(obj)) {
            for (; i < len; i++) {
                if (isReturn) {
                    newVal.push(cb(obj[i], i));
                }
                else {
                    cb(obj[i], i);
                }
            }
        }
        else {
            for (i in obj) {
                if (!obj.hasOwnProperty(i))
                    continue;
                if (isReturn) {
                    newVal.push(cb(obj[i], i, index++));
                }
                else {
                    cb(obj[i], i, index++);
                }
            }
        }
        if (isReturn)
            return newVal;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (blueUtils);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);




function init() {
    //预加载队列
    this.loadQueue = [];
    var _a = _canvas__WEBPACK_IMPORTED_MODULE_0__["initCanvas"].call(this), canvas = _a.canvas, canvasCtx = _a.canvasCtx;
    if (!canvas) {
        return console.warn("element is null");
    }
    this.canvasCtx = canvasCtx;
    this.canvas = canvas;
    _canvas__WEBPACK_IMPORTED_MODULE_0__["saveCanvasDefaultProperties"].call(this);
    //创建完毕的钩子
    _utils__WEBPACK_IMPORTED_MODULE_1__["default"].hook(this, this.options.created);
    //预加载
    _img__WEBPACK_IMPORTED_MODULE_2__["load"].call(this);
}
/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCanvas", function() { return initCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCanvasDefaultProperties", function() { return saveCanvasDefaultProperties; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _canvas_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


function initCanvas() {
    var options = this.options;
    if (!options.el)
        return {};
    var canvas = document.querySelector(options.el);
    if (!canvas)
        return {};
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
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].each(_canvas_properties__WEBPACK_IMPORTED_MODULE_1__["default"], function (key) {
            _this.canvas.defaultCanvasProperties[key] = _this.canvasCtx[key];
        });
    }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//default canvas config
var canvasProperties = [
    "fillStyle",
    "filter",
    "font",
    "globalAlpha",
    "globalCompositeOperation",
    "imageSmoothingEnabled",
    "imageSmoothingQuality",
    "lineCap",
    "lineDashOffset",
    "lineJoin",
    "lineWidth",
    "miterLimit",
    "shadowBlur",
    "shadowColor",
    "shadowOffsetX",
    "shadowOffsetY",
    "strokeStyle",
    "textAlign",
    "textBaseline"
];
/* harmony default export */ __webpack_exports__["default"] = (canvasProperties);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony import */ var blue_queue_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var blue_queue_pipe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blue_queue_pipe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);



//预加载
function load() {
    var blueCanvasTmpl = this;
    this.id++;
    //设置预加载的队列
    this.loadQueue = new blue_queue_pipe__WEBPACK_IMPORTED_MODULE_0___default.a({
        methods: {
            next: function () {
                if (!this.isEmpty()) {
                    _utils__WEBPACK_IMPORTED_MODULE_1__["default"].hook(this, this.dequeue());
                }
                else {
                    //没有就进行渲染
                    _render__WEBPACK_IMPORTED_MODULE_2__["default"].call(blueCanvasTmpl);
                }
            }
        }
    });
    //查找渲染中为图片，预加载图片
    loadImages.call(this, findImages.call(this));
}
//查找图片
function findImages() {
    var renderList = this.options.renderList;
    var images = [];
    _utils__WEBPACK_IMPORTED_MODULE_1__["default"].each(renderList, function (item) {
        if (item.type === 'image') {
            images.push(item);
        }
    });
    return images;
}
//预加载图片
function loadImages(images) {
    var _this = this;
    var id = this.id;
    (images || []).forEach(function (img) {
        if (!img.src)
            return;
        _this.loadQueue.enqueue(function () {
            var image = new Image();
            image.id = _this.id;
            image.onload = function () {
                //限定执行的id
                if (parseInt(image.id) !== id)
                    return;
                //写入图片到配置
                img.image = image;
                //队列下一跳
                _this.loadQueue.useMethod('next');
            };
            image.onerror = function () {
                //队列下一跳
                console.warn("load error:" + image.src);
                //限定执行的id
                if (parseInt(image.id) !== id)
                    return;
                _this.loadQueue.useMethod('next');
            };
            image.src = img.src;
        });
    });
    this.loadQueue.useMethod('next');
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * 
 * blue-queue-pipe.js 1.1.1
 * (c) 2016-2020 Blue
 * Released under the MIT License.
 * https://github.com/azhanging/blue-queue-pipe
 * time:Fri, 03 Apr 2020 08:00:50 GMT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(typeof self !== 'undefined' ? self : this, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // define __esModule on exports
            /******/__webpack_require__.r = function (exports) {
                /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/
                }
                /******/Object.defineProperty(exports, '__esModule', { value: true });
                /******/
            };
            /******/
            /******/ // create a fake namespace object
            /******/ // mode & 1: value is a module id, require it
            /******/ // mode & 2: merge all properties of value into the ns
            /******/ // mode & 4: return value when already ns object
            /******/ // mode & 8|1: behave like require
            /******/__webpack_require__.t = function (value, mode) {
                /******/if (mode & 1) value = __webpack_require__(value);
                /******/if (mode & 8) return value;
                /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
                /******/var ns = Object.create(null);
                /******/__webpack_require__.r(ns);
                /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
                    __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                    }.bind(null, key));
                } /******/return ns;
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "./static";
            /******/
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 0);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            __webpack_require__.r(__webpack_exports__);
            /*
            * 队列管道
            * */
            var BlueQueuePipe = /** @class */function () {
                function BlueQueuePipe(opts) {
                    if (opts === void 0) {
                        opts = {};
                    }
                    this._init(opts);
                }
                BlueQueuePipe.prototype._init = function (opts) {
                    //配置
                    this.options = opts;
                    //队列
                    this.queue = [];
                    //数据
                    this.data = opts.data || {};
                };
                BlueQueuePipe.prototype.enqueue = function (obj) {
                    this.hook(this, this.options.enqueued, [this.queue.push(obj)]);
                };
                BlueQueuePipe.prototype.dequeue = function () {
                    var _a = this,
                        queue = _a.queue,
                        options = _a.options;
                    var dequeue = queue.shift();
                    this.hook(this, options.dequeued, [dequeue]);
                    return dequeue;
                };
                BlueQueuePipe.prototype.isEmpty = function () {
                    return this.queue.length === 0;
                };
                BlueQueuePipe.prototype.clear = function () {
                    this.queue = [];
                };
                BlueQueuePipe.prototype.first = function () {
                    return this.queue[0];
                };
                //获取最后一个队列
                BlueQueuePipe.prototype.last = function () {
                    return this.queue[this.queue.length - 1];
                };
                //执行队列
                BlueQueuePipe.prototype.run = function () {
                    var _this = this;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var opts = this.options;
                    var _loop_1 = function _loop_1() {
                        var dequeue = this_1.dequeue();
                        //如果队列项是function，执行
                        this_1.hook(this_1, opts.running, [function () {
                            if (typeof dequeue === 'function') {
                                return dequeue.apply(_this, args);
                            }
                            return dequeue;
                        }()]);
                    };
                    var this_1 = this;
                    while (!this.isEmpty()) {
                        _loop_1();
                    }
                    this.hook(this, opts.ran);
                };
                //执行function
                BlueQueuePipe.prototype.hook = function (context, cb, args) {
                    if (args === void 0) {
                        args = [];
                    }
                    if (typeof cb === 'function') {
                        return cb.apply(context, args);
                    }
                    return cb;
                };
                //使用方法
                BlueQueuePipe.prototype.useMethod = function (name, args) {
                    var opts = this.options;
                    if (!opts.methods) return;
                    return this.hook(this, opts.methods[name], args || []);
                };
                return BlueQueuePipe;
            }();
            /* harmony default export */__webpack_exports__["default"] = BlueQueuePipe;

            /***/
        }]
        /******/)["default"]
    );
});
//# sourceMappingURL=blue-queue-pipe.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderText", function() { return renderText; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

//渲染
function render() {
    var _this = this;
    var options = this.options;
    var renderList = options.renderList;
    (renderList || []).forEach(function (item) {
        if (item.type === 'image') {
            renderImg.call(_this, item);
        }
        else if (item.type === 'text') {
            renderText.call(_this, item);
        }
        else if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(item)) {
            _utils__WEBPACK_IMPORTED_MODULE_0__["default"].hook(_this, item);
        }
        _this.resetCanvasProperties();
    });
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].hook(this, options.rendered);
}
//渲染图片
function renderImg(opts) {
    //插入图片
    if (opts.image) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].hook(this, opts.created, [opts]);
        this.canvasCtx.drawImage(opts.image, opts.x, opts.y, opts.width, opts.height);
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].hook(this, opts.rendered, [opts]);
    }
}
//渲染文字
function renderText(opts) {
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].hook(this, opts.created, [opts]);
    var canvasCtx = this.canvasCtx;
    canvasCtx.font = opts.font || '15px arial, 微软雅黑, sans-serif';
    canvasCtx[(opts.drawType || 'fill') + "Style"] = opts.style || '#000';
    canvasCtx[(opts.drawType || 'fill') + "Text"](opts.content, opts.x, opts.y);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].hook(this, opts.rendered, [opts]);
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return arc; });
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getByteLength", function() { return getByteLength; });
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);

function getByteLength(content, length, last) {
    if (last === void 0) { last = false; }
    var len = 0;
    for (var i = 0; i < content.length; i++) {
        var char = content.charAt(i);
        if (char.match(/[\u4E00-\u9FBF]/ig) != null ||
            char.match(/[\u2014\u300a\u300b]/g) ||
            (char.match(/[\uff0c\u3002\u201c\uff1a\u201d\u2014]/ig) != null && !_device__WEBPACK_IMPORTED_MODULE_0__["default"].isWap) ||
            (char.match(/[\uff0c\u3002\uff1a]/ig) != null && _device__WEBPACK_IMPORTED_MODULE_0__["default"].isWap)) {
            len += 2;
        }
        else {
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//获取当前设备信息
var userAgent = window.navigator.userAgent;
var isWap = /iPhone|iPad|Android|Windows Phone|KFAPWI|MeeGo/ig.test(userAgent);
var device = {
    isWeChat: /MicroMessenger/ig.test(userAgent),
    isWap: isWap,
    isIPhone: /iPhone/ig.test(userAgent),
    isIPad: /iPad/ig.test(userAgent),
    isAndroid: /Android/ig.test(userAgent),
    isApp: false,
    isPc: !isWap,
    isServer: false
};
/* harmony default export */ __webpack_exports__["default"] = (device);


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=blue-canvas-tmpl.js.map