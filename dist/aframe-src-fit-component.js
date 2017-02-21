/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/* global AFRAME */

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}

	AFRAME.registerComponent('src-fit', {
	    dependencies: ['geometry', 'material'],

	    fit: function (w, h) {
	        var ratio = (h || 1.0) / (w || 1.0);
	        var geo = this.el.geometry;
	        var neww, newh;
	        if (geo && geo.width) {
	            if (geo && geo.height && ratio > 1) { neww = geo.width / ratio; } else { newh = geo.height * ratio; }
	        } else
	            if (geo && geo.height) { neww = geo.width / ratio; } else {
	                // variable width and height, stay smaller than 1
	                neww = Math.min(1.0, 1.0 / ratio);
	                newh = Math.min(1.0, ratio);
	            }
	        if (neww !== undefined) { this.el.setAttribute('width', neww); }
	        if (newh !== undefined) { this.el.setAttribute('height', newh); }
	        this.el.emit('fit', [neww, newh]);
	    },

	    onMaterialLoaded: function (e) {
	        var self = this;
	        var src = e.detail.src;
	        var w = src.videoWidth || src.width;
	        var h = src.videoHeight || src.height;
	        if (w || h) { self.fit(w, h); }
	    },

	    init: function () {
	        var el = this.el;
	        this.onMaterialLoaded = this.onMaterialLoaded.bind(this);
	        el.addEventListener('materialtextureloaded', this.onMaterialLoaded);
	        el.addEventListener('materialvideoloadeddata', this.onMaterialLoaded);
	    }
	});

	AFRAME.registerComponent('inherit-fit', {
	    schema: { default: 'all', oneOf: ['width', 'height', 'all'] },

	    init: function () {
	        this.el.parentNode.addEventListener('fit', AFRAME.utils.bind(this.onFit, this), true);
	    },

	    onFit: function (e) {
	        var parentEl = this.el.parentNode;
	        if (parentEl && parentEl.components.geometry) {
	            if (e.detail[0] && this.data !== 'height') {
	                this.el.setAttribute('width', parentEl.components.geometry.data.width);
	            }
	            if (e.detail[1] && this.data !== 'width') {
	                this.el.setAttribute('height', parentEl.components.geometry.data.height);
	            }
	            // if we have text, change text layout
	            // FIXME: need a more sane way to cascade changes through components
	            var bmfonttext = this.el.components['bmfont-text'];
	            if (bmfonttext) { bmfonttext.updateLayout(bmfonttext.data); }
	            var text = this.el.components.text;
	            if (text) { text.updateLayout(text.data); }
	        }
	        // TODO: cascade to children
	    }
	});


/***/ }
/******/ ]);