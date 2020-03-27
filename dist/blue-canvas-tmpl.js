/*!
 * 
 * blue-canvas-tmpl.js 1.0.6
 * (c) 2016-2020 Blue
 * Released under the MIT License.
 * https://github.com/azhanging/blue-canvas-tmpl
 * time:Fri, 27 Mar 2020 09:27:34 GMT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("blueUtils"), require("BlueQueuePipe"));
	else if(typeof define === 'function' && define.amd)
		define(["blueUtils", "BlueQueuePipe"], factory);
	else if(typeof exports === 'object')
		exports["BlueCanvasTmpl"] = factory(require("blueUtils"), require("BlueQueuePipe"));
	else
		root["BlueCanvasTmpl"] = factory(root["blueUtils"], root["BlueQueuePipe"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__11__) {
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
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(1), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var instance_1 = require("./instance");
    exports.default = instance_1.default;
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(3), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(5), __webpack_require__(12), __webpack_require__(14), __webpack_require__(16)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var blue_utils_1 = require("blue-utils");
    var init_1 = require("./init");
    var render_1 = require("../render");
    var arc_1 = require("../arc");
    var text_1 = require("../text");
    var BlueCanvasTmpl = /** @class */ (function () {
        function BlueCanvasTmpl(opts) {
            if (opts === void 0) { opts = {}; }
            //画布Element
            this.canvas = {};
            this.id = 0;
            this.options = opts;
            init_1.default.call(this);
        }
        BlueCanvasTmpl.prototype.renderText = function (text) {
            render_1.renderText.call(this, text);
        };
        //初始化canvas context的属性
        BlueCanvasTmpl.prototype.resetCanvasProperties = function () {
            var _this = this;
            var defaultCanvasProperties = this.canvas.defaultCanvasProperties;
            blue_utils_1.default.each(defaultCanvasProperties, function (value, key) {
                _this.canvasCtx[key] = value;
            });
        };
        //更新
        BlueCanvasTmpl.prototype.update = function (options) {
            if (options) {
                this.options = options;
            }
            this.canvasCtx.clearRect(0, 0, this.options.width || 100, this.options.height || 100);
            init_1.default.call(this);
        };
        BlueCanvasTmpl.prototype.arc = function () {
            arc_1.arc.apply(this, arguments);
        };
        BlueCanvasTmpl.prototype.getByteLength = function () {
            return text_1.getByteLength.apply(this, arguments);
        };
        BlueCanvasTmpl.getByteLength = function () {
            return text_1.getByteLength.apply(this, arguments);
        };
        return BlueCanvasTmpl;
    }());
    exports.default = BlueCanvasTmpl;
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 3;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(3), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(4), __webpack_require__(9), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var canvas_1 = require("../canvas");
    var blue_utils_1 = require("blue-utils");
    var img_1 = require("../img");
    var canvas_2 = require("../canvas");
    function init() {
        //预加载队列
        this.loadQueue = [];
        this.id = 0;
        var _a = canvas_1.initCanvas.call(this), canvas = _a.canvas, canvasCtx = _a.canvasCtx;
        if (!canvas) {
            return console.warn("element is null");
        }
        this.canvasCtx = canvasCtx;
        this.canvas = canvas;
        canvas_2.saveCanvasDefaultProperties.call(this);
        //创建完毕的钩子
        blue_utils_1.default.hook(this, this.options.created);
        //预加载
        img_1.load.call(this);
    }
    exports.default = init;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(7), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var blue_utils_1 = require("blue-utils");
    var canvas_properties_1 = require("./canvas-properties");
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
    exports.initCanvas = initCanvas;
    //save canvas default attributes
    function saveCanvasDefaultProperties() {
        var _this = this;
        if (!this.canvas.defaultCanvasProperties) {
            this.canvas.defaultCanvasProperties = {};
            blue_utils_1.default.each(canvas_properties_1.default, function (key) {
                _this.canvas.defaultCanvasProperties[key] = _this.canvasCtx[key];
            });
        }
    }
    exports.saveCanvasDefaultProperties = saveCanvasDefaultProperties;
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 7;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(7), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.default = canvasProperties;
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(10), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(11), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var blue_utils_1 = require("blue-utils");
    var blue_queue_pipe_1 = require("blue-queue-pipe");
    var render_1 = require("../render");
    //预加载
    function load() {
        var blueCanvasTmpl = this;
        this.id++;
        //设置预加载的队列
        this.loadQueue = new blue_queue_pipe_1.default({
            methods: {
                next: function () {
                    if (!this.isEmpty()) {
                        blue_utils_1.default.hook(this, this.dequeue());
                    }
                    else {
                        //没有就进行渲染
                        render_1.default.call(blueCanvasTmpl);
                    }
                }
            }
        });
        //查找渲染中为图片，预加载图片
        loadImages.call(this, findImages.call(this));
    }
    exports.load = load;
    //查找图片
    function findImages() {
        var renderList = this.options.renderList;
        var images = [];
        blue_utils_1.default.each(renderList, function (item) {
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
                    if (parseInt(image.id) === id) {
                        img.image = image;
                        //队列下一跳
                        _this.loadQueue.useMethod('next');
                    }
                };
                image.onerror = function () {
                    //队列下一跳
                    console.log("load error:" + image.src);
                    _this.loadQueue.useMethod('next');
                };
                image.src = img.src;
            });
        });
        this.loadQueue.useMethod('next');
    }
});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 10;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(13), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var blue_utils_1 = require("blue-utils");
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
            else if (blue_utils_1.default.isFunction(item)) {
                blue_utils_1.default.hook(_this, item);
            }
            _this.resetCanvasProperties();
        });
        blue_utils_1.default.hook(this, options.rendered);
    }
    exports.default = render;
    //渲染图片
    function renderImg(opts) {
        //插入图片
        if (opts.image) {
            blue_utils_1.default.hook(this, opts.created, [opts]);
            this.canvasCtx.drawImage(opts.image, opts.x, opts.y, opts.width, opts.height);
            blue_utils_1.default.hook(this, opts.rendered, [opts]);
        }
    }
    //渲染文字
    function renderText(opts) {
        blue_utils_1.default.hook(this, opts.created, [opts]);
        var canvasCtx = this.canvasCtx;
        canvasCtx.font = opts.font || '15px arial, 微软雅黑, sans-serif';
        canvasCtx.fillStyle = opts.style || '#000';
        canvasCtx.fillText(opts.content, opts.x, opts.y);
        blue_utils_1.default.hook(this, opts.rendered, [opts]);
    }
    exports.renderText = renderText;
});


/***/ }),
/* 13 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 13;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(15), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.arc = arc;
});


/***/ }),
/* 15 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 15;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(17), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(18)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var device_1 = require("../device");
    function getByteLength(content, length, last) {
        if (last === void 0) { last = false; }
        var len = 0;
        for (var i = 0; i < content.length; i++) {
            var char = content.charAt(i);
            if (char.match(/[\u4E00-\u9FBF]/ig) != null ||
                char.match(/[\u2014\u300a\u300b]/g) ||
                (char.match(/[\uff0c\u3002\u201c\uff1a\u201d\u2014]/ig) != null && !device_1.default.isWap) ||
                (char.match(/[\uff0c\u3002\uff1a]/ig) != null && device_1.default.isWap)) {
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
    exports.getByteLength = getByteLength;
});


/***/ }),
/* 17 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 17;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(19), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //获取当前设备信息
    var userAgent = navigator.userAgent;
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
    exports.default = device;
});


/***/ }),
/* 19 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 19;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=blue-canvas-tmpl.js.map