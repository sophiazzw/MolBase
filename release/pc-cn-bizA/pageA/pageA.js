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
/******/ 	__webpack_require__.p = "/MolBase/release";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_, $) {__webpack_require__(4);
	__webpack_require__(7);

	var fuc = {
	    config: {

	    },
	    init: function() {
	        console.log("pageA render success!");
	        this.renderTpl();
	        this.bindEvent();
	    },
	    renderTpl: function() {
	        this.renderLocalData();
	        this.renderRemoteData();
	    },
	    renderLocalData: function() {
	        var tpl = _.template($("#content1_tpl").html());
	        var html = tpl({data: {content:"localData"}});
	        $("#content1").append(html);
	    },
	    renderRemoteData: function() {
	        $.ajax({
	            type: "get",
	            url: "/mockData/bizA/pageA/getRmoteData.json",
	            success: function(data) {
	                var tpl = _.template($("#content2_tpl").html());
	                var html = tpl({data: data});
	                $("#content2").append(html);
	            }
	        })
	    },
	    bindEvent: function() {
	        $("#birthDaySelect").mobiscroll().date({
	            headerText: "请选择出生日期",
	            dateFormat: 'yy' + "-" + 'mm' + "-" + 'dd',
	            lang: 'zh',
	            defaultValue: new Date(),
	            maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
	            theme: 'mobiscroll',
	            mode: 'scroller',
	            display: 'bottom',
	            onSelect: function (valueText, inst) {
	                $("input[name=birthday]").val(inst.getArrayVal()[0] + "-" + (parseInt(inst.getArrayVal()[1], 10) + 1) + "-" + inst.getArrayVal()[2]);
	            }
	        })
	    }
	};

	$(document).ready(function(){
	    fuc.init();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(3)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.2
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=d(e,i,4);var o=!w(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=b(r,e);for(var u=null!=t&&t.length,i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t){var r=S.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||o,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=S[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var e=this,u=e._,i=Array.prototype,o=Object.prototype,a=Function.prototype,c=i.push,l=i.slice,f=o.toString,s=o.hasOwnProperty,p=Array.isArray,h=Object.keys,v=a.bind,g=Object.create,y=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)}; true?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):e._=m,m.VERSION="1.8.2";var d=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},b=function(n,t,r){return null==n?m.identity:m.isFunction(n)?d(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return b(n,t,1/0)};var x=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var l=o[c];t&&r[l]!==void 0||(r[l]=i[l])}return r}},_=function(n){if(!m.isObject(n))return{};if(g)return g(n);y.prototype=n;var t=new y;return y.prototype=null,t},j=Math.pow(2,53)-1,w=function(n){var t=n&&n.length;return"number"==typeof t&&t>=0&&j>=t};m.each=m.forEach=function(n,t,r){t=d(t,r);var e,u;if(w(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=b(t,r);for(var e=!w(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=w(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=b(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(b(t)),r)},m.every=m.all=function(n,t,r){t=b(t,r);for(var e=!w(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=b(t,r);for(var e=!w(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r){return w(n)||(n=m.values(n)),m.indexOf(n,t,"number"==typeof r&&r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=w(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=b(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=w(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=b(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=w(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(w(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=b(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var A=function(n){return function(t,r,e){var u={};return r=b(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=A(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=A(function(n,t,r){n[r]=t}),m.countBy=A(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):w(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:w(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=b(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var k=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=n&&n.length;a>o;o++){var c=n[o];if(w(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=k(c,t,r));var l=0,f=c.length;for(u.length+=f;f>l;)u[i++]=c[l++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return k(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){if(null==n)return[];m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=b(r,e));for(var u=[],i=[],o=0,a=n.length;a>o;o++){var c=n[o],l=r?r(c,o,n):c;t?(o&&i===l||u.push(c),i=l):r?m.contains(i,l)||(i.push(l),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(k(arguments,!0,!0))},m.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=k(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,"length").length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=n&&n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.indexOf=function(n,t,r){var e=0,u=n&&n.length;if("number"==typeof r)e=0>r?Math.max(0,u+r):r;else if(r&&u)return e=m.sortedIndex(n,t),n[e]===t?e:-1;if(t!==t)return m.findIndex(l.call(n,e),m.isNaN);for(;u>e;e++)if(n[e]===t)return e;return-1},m.lastIndexOf=function(n,t,r){var e=n?n.length:0;if("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1)),t!==t)return m.findLastIndex(l.call(n,0,e),m.isNaN);for(;--e>=0;)if(n[e]===t)return e;return-1},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=b(r,e,1);for(var u=r(t),i=0,o=n.length;o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var O=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=_(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(v&&n.bind===v)return v.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return O(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return O(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var l=m.now();a||r.leading!==!1||(a=l);var f=t-(l-a);return e=this,u=arguments,0>=f||f>t?(o&&(clearTimeout(o),o=null),a=l,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,f)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var l=m.now()-o;t>l&&l>=0?e=setTimeout(c,t-l):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var F=!{toString:null}.propertyIsEnumerable("toString"),S=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(h)return h(n);var t=[];for(var e in n)m.has(n,e)&&t.push(e);return F&&r(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var e in n)t.push(e);return F&&r(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=b(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=x(m.allKeys),m.extendOwn=m.assign=x(m.keys),m.findKey=function(n,t,r){t=b(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=d(t,r)):(u=k(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var l=u[a],f=o[l];e(f,l,o)&&(i[l]=f)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(k(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=x(m.allKeys,!0),m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var E=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=f.call(n);if(u!==f.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!E(n[c],t[c],r,e))return!1}else{var l,s=m.keys(n);if(c=s.length,m.keys(t).length!==c)return!1;for(;c--;)if(l=s[c],!m.has(t,l)||!E(n[l],t[l],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return E(n,t)},m.isEmpty=function(n){return null==n?!0:w(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=p||function(n){return"[object Array]"===f.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return f.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===f.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&s.call(n,t)},m.noConflict=function(){return e._=u,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=function(n){return function(t){return null==t?void 0:t[n]}},m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=d(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var M={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},N=m.invert(M),I=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=I(M),m.unescape=I(N),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var B=0;m.uniqueId=function(n){var t=++B+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,R={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},q=/\\|'|\r|\n|\u2028|\u2029/g,K=function(n){return"\\"+R[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||T).source,(t.interpolate||T).source,(t.evaluate||T).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(q,K),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},l=t.variable||"obj";return c.source="function("+l+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var z=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return c.apply(n,arguments),z(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=i[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],z(this,r)}}),m.each(["concat","join","slice"],function(n){var t=i[n];m.prototype[n]=function(){return z(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"=="function"&&__webpack_require__(2)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return m}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}).call(this);
	//# sourceMappingURL=underscore-min.map

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.2.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2017-03-20T18:59Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.2.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = Array.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && Array.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;



	function nodeName( elem, name ) {

	  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

	};
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
	        if ( nodeName( elem, "iframe" ) ) {
	            return elem.contentDocument;
	        }

	        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
	        // Treat the template element as a regular one in browsers that
	        // don't support it.
	        if ( nodeName( elem, "template" ) ) {
	            elem = elem.content || elem;
	        }

	        return jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = locked || options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject, noValue ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply( undefined, [ value ].slice( noValue ) );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply( undefined, [ value ] );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
					!remaining );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( Array.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || Array.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget( elem, content ) {
		if ( nodeName( elem, "table" ) &&
			nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return jQuery( ">tbody", elem )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,

			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rcustomProp = /^--/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	// Return a property mapped along what jQuery.cssProps suggests or to
	// a vendor prefixed property.
	function finalPropName( name ) {
		var ret = jQuery.cssProps[ name ];
		if ( !ret ) {
			ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
		}
		return ret;
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;

		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;

		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with computed style
		var valueIsBorderBox,
			styles = getStyles( elem ),
			val = curCSS( elem, name, styles ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Fall back to offsetWidth/Height when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		if ( val === "auto" ) {
			val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
		}

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				isCustomProp = rcustomProp.test( name ),
				style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					if ( isCustomProp ) {
						style.setProperty( name, value );
					} else {
						style[ name ] = value;
					}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name ),
				isCustomProp = rcustomProp.test( name );

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}

			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( Array.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, inProgress,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function schedule() {
		if ( inProgress ) {
			if ( document.hidden === false && window.requestAnimationFrame ) {
				window.requestAnimationFrame( schedule );
			} else {
				window.setTimeout( schedule, jQuery.fx.interval );
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( Array.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				// If there's more to do, yield
				if ( percent < 1 && length ) {
					return remaining;
				}

				// If this was an empty animation, synthesize a final progress notification
				if ( !length ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
				}

				// Resolve the animation and report its conclusion
				deferred.resolveWith( elem, [ animation ] );
				return false;
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		// Attach callbacks from options
		animation
			.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		return animation;
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off
		if ( jQuery.fx.off ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Run the timer and safely remove it when done (allowing for external removal)
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( inProgress ) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function() {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( Array.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( Array.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( Array.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( Array.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var doc, docElem, rect, win,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			doc = elem.ownerDocument;
			docElem = doc.documentElement;
			win = doc.defaultView;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {

				// Coalesce documents and windows
				var win;
				if ( jQuery.isWindow( elem ) ) {
					win = elem;
				} else if ( elem.nodeType === 9 ) {
					win = elem.defaultView;
				}

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.holdReady = function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;
	} );


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/* 56d438aa-aa47-4ec7-885f-1d0fa1eac951 */
	__webpack_require__(8);
	(function (a, n) {
	    function t(a) {
	        for (var f in a)if (r[a[f]] !== n)return !0;
	        return !1
	    }

	    function w(d, b, g) {
	        var o = d;
	        if ("object" === typeof b)return d.each(function () {
	            f[this.id] && f[this.id].destroy();
	            new a.mobiscroll.classes[b.component || "Scroller"](this, b)
	        });
	        "string" === typeof b && d.each(function () {
	            var a;
	            if ((a = f[this.id]) && a[b])if (a = a[b].apply(this, Array.prototype.slice.call(g, 1)), a !== n)return o = a, !1
	        });
	        return o
	    }

	    function h(a) {
	        if (j.tapped && !a.tap && !("TEXTAREA" == a.target.nodeName && "mousedown" == a.type))return a.stopPropagation(),
	            a.preventDefault(), !1
	    }

	    var j, d = +new Date, f = {}, s = a.extend, r = document.createElement("modernizr").style, b = t(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]), g = t(["flex", "msFlex", "WebkitBoxDirection"]), P = function () {
	        var a = ["Webkit", "Moz", "O", "ms"], b;
	        for (b in a)if (t([a[b] + "Transform"]))return "-" + a[b].toLowerCase() + "-";
	        return ""
	    }(), i = P.replace(/^\-/, "").replace(/\-$/, "").replace("moz", "Moz");
	    a.fn.mobiscroll = function (b) {
	        s(this, a.mobiscroll.components);
	        return w(this,
	            b, arguments)
	    };
	    j = a.mobiscroll = a.mobiscroll || {
	            version: "2.17.0",
	            util: {
	                prefix: P,
	                jsPrefix: i,
	                has3d: b,
	                hasFlex: g,
	                isOldAndroid: /android [1-3]/i.test(navigator.userAgent),
	                preventClick: function () {
	                    j.tapped++;
	                    setTimeout(function () {
	                        j.tapped--
	                    }, 500)
	                },
	                testTouch: function (b, d) {
	                    if ("touchstart" == b.type)a(d).attr("data-touch", "1"); else if (a(d).attr("data-touch"))return a(d).removeAttr("data-touch"), !1;
	                    return !0
	                },
	                objectToArray: function (a) {
	                    var b = [], d;
	                    for (d in a)b.push(a[d]);
	                    return b
	                },
	                arrayToObject: function (a) {
	                    var b = {}, d;
	                    if (a)for (d = 0; d < a.length; d++)b[a[d]] = a[d];
	                    return b
	                },
	                isNumeric: function (a) {
	                    return 0 <= a - parseFloat(a)
	                },
	                isString: function (a) {
	                    return "string" === typeof a
	                },
	                getCoord: function (a, b, d) {
	                    var o = a.originalEvent || a, b = (d ? "client" : "page") + b;
	                    return o.changedTouches ? o.changedTouches[0][b] : a[b]
	                },
	                getPosition: function (d, f) {
	                    var g = window.getComputedStyle ? getComputedStyle(d[0]) : d[0].style, o, i;
	                    b ? (a.each(["t", "webkitT", "MozT", "OT", "msT"], function (a, b) {
	                        if (g[b + "ransform"] !== n)return o = g[b + "ransform"], !1
	                    }), o = o.split(")")[0].split(", "),
	                        i = f ? o[13] || o[5] : o[12] || o[4]) : i = f ? g.top.replace("px", "") : g.left.replace("px", "");
	                    return i
	                },
	                addIcon: function (b, d) {
	                    var f = {}, o = b.parent(), g = o.find(".mbsc-err-msg"), i = b.attr("data-icon-align") || "left", k = b.attr("data-icon");
	                    a('<span class="mbsc-input-wrap"></span>').insertAfter(b).append(b);
	                    g && o.find(".mbsc-input-wrap").append(g);
	                    k && (-1 !== k.indexOf("{") ? f = JSON.parse(k) : f[i] = k, s(f, d), o.addClass((f.right ? "mbsc-ic-right " : "") + (f.left ? " mbsc-ic-left" : "")).find(".mbsc-input-wrap").append(f.left ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' +
	                    f.left + '"></span>' : "").append(f.right ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' + f.right + '"></span>' : ""))
	                },
	                constrain: function (a, b, d) {
	                    return Math.max(b, Math.min(a, d))
	                },
	                vibrate: function (a) {
	                    "vibrate"in navigator && navigator.vibrate(a || 50)
	                }
	            },
	            tapped: 0,
	            autoTheme: "mobiscroll",
	            presets: {scroller: {}, numpad: {}, listview: {}, menustrip: {}},
	            themes: {form: {}, frame: {}, listview: {}, menustrip: {}, progress: {}},
	            i18n: {},
	            instances: f,
	            classes: {},
	            components: {},
	            defaults: {context: "body", mousewheel: !0, vibrate: !0},
	            setDefaults: function (a) {
	                s(this.defaults, a)
	            },
	            presetShort: function (a, b, d) {
	                this.components[a] = function (f) {
	                    return w(this, s(f, {component: b, preset: !1 === d ? n : a}), arguments)
	                }
	            }
	        };
	    a.mobiscroll.classes.Base = function (b, g) {
	        var i, o, h, j, k, e, q = a.mobiscroll, y = q.util, I = y.getCoord, m = this;
	        m.settings = {};
	        m._presetLoad = function () {
	        };
	        m._init = function (a) {
	            h = m.settings;
	            s(g, a);
	            m._hasDef && (e = q.defaults);
	            s(h, m._defaults, e, g);
	            if (m._hasTheme) {
	                k = h.theme;
	                if ("auto" == k || !k)k = q.autoTheme;
	                "default" == k && (k = "mobiscroll");
	                g.theme = k;
	                j = q.themes[m._class] ?
	                    q.themes[m._class][k] : {}
	            }
	            m._hasLang && (i = q.i18n[h.lang]);
	            m._hasTheme && m.trigger("onThemeLoad", [i, g]);
	            s(h, j, i, e, g);
	            if (m._hasPreset && (m._presetLoad(h), o = q.presets[m._class][h.preset]))o = o.call(b, m), s(h, o, g)
	        };
	        m._destroy = function () {
	            m.trigger("onDestroy", []);
	            delete f[b.id];
	            m = null
	        };
	        m.tap = function (b, e, d) {
	            function f(b) {
	                if (!l && (d && b.preventDefault(), l = this, i = I(b, "X"), k = I(b, "Y"), q = !1, "pointerdown" == b.type))a(document).on("pointermove", g).on("pointerup", c)
	            }

	            function g(a) {
	                if (l && !q && 20 < Math.abs(I(a, "X") - i) || 20 <
	                    Math.abs(I(a, "Y") - k))q = !0
	            }

	            function c(b) {
	                l && (q || (b.preventDefault(), e.call(l, b, m)), "pointerup" == b.type && a(document).off("pointermove", g).off("pointerup", c), l = !1, y.preventClick())
	            }

	            function o() {
	                l = !1
	            }

	            var i, k, l, q;
	            if (h.tap)b.on("touchstart.dw pointerdown.dw", f).on("touchcancel.dw pointercancel.dw", o).on("touchmove.dw", g).on("touchend.dw", c);
	            b.on("click.dw", function (a) {
	                a.preventDefault();
	                e.call(this, a, m)
	            })
	        };
	        m.trigger = function (d, f) {
	            var i;
	            f.push(m);
	            a.each([e, j, o, g], function (a, e) {
	                e && e[d] && (i = e[d].apply(b, f))
	            });
	            return i
	        };
	        m.option = function (a, b) {
	            var e = {};
	            "object" === typeof a ? e = a : e[a] = b;
	            m.init(e)
	        };
	        m.getInst = function () {
	            return m
	        };
	        g = g || {};
	        b.id || (b.id = "mobiscroll" + ++d);
	        f[b.id] = m
	    };
	    document.addEventListener && a.each(["mouseover", "mousedown", "mouseup", "click"], function (a, b) {
	        document.addEventListener(b, h, !0)
	    })
	})($);
	(function (a) {
	    a.mobiscroll.i18n.zh = {
	        setText: "\u786e\u5b9a",
	        cancelText: "\u53d6\u6d88",
	        clearText: "\u660e\u786e",
	        selectedText: "{count} \u9009",
	        dateFormat: "yy/mm/dd",
	        dateOrder: "yymmdd",
	        dayNames: "\u5468\u65e5,\u5468\u4e00,\u5468\u4e8c,\u5468\u4e09,\u5468\u56db,\u5468\u4e94,\u5468\u516d".split(","),
	        dayNamesShort: "\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),
	        dayNamesMin: "\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),
	        dayText: "\u65e5",
	        hourText: "\u65f6",
	        minuteText: "\u5206",
	        monthNames: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
	        monthNamesShort: "\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d,\u4e03,\u516b,\u4e5d,\u5341,\u5341\u4e00,\u5341\u4e8c".split(","),
	        monthText: "\u6708",
	        secText: "\u79d2",
	        timeFormat: "HH:ii",
	        timeWheels: "HHii",
	        yearText: "\u5e74",
	        nowText: "\u5f53\u524d",
	        pmText: "\u4e0b\u5348",
	        amText: "\u4e0a\u5348",
	        dateText: "\u65e5",
	        timeText: "\u65f6\u95f4",
	        calendarText: "\u65e5\u5386",
	        closeText: "\u5173\u95ed",
	        fromText: "\u5f00\u59cb\u65f6\u95f4",
	        toText: "\u7ed3\u675f\u65f6\u95f4",
	        wholeText: "\u5408\u8ba1",
	        fractionText: "\u5206\u6570",
	        unitText: "\u5355\u4f4d",
	        labels: "\u5e74,\u6708,\u65e5,\u5c0f\u65f6,\u5206\u949f,\u79d2,".split(","),
	        labelsShort: "\u5e74,\u6708,\u65e5,\u70b9,\u5206,\u79d2,".split(","),
	        startText: "\u5f00\u59cb",
	        stopText: "\u505c\u6b62",
	        resetText: "\u91cd\u7f6e",
	        lapText: "\u5708",
	        hideText: "\u9690\u85cf",
	        backText: "\u80cc\u90e8",
	        undoText: "\u590d\u539f",
	        offText: "\u5173\u95ed",
	        onText: "\u5f00\u542f"
	    }
	})($);
	(function (a, n) {
	    var t = function () {
	    }, w = a.mobiscroll;
	    w.classes.Progress = function (h, j, d) {
	        function f() {
	            var a = s("value", o);
	            a !== e && r(a)
	        }

	        function s(a, b) {
	            var e = g.attr(a);
	            return e === n || "" === e ? b : +e
	        }

	        function r(b, d, f, k) {
	            b = a.mobiscroll.running && Math.min(B, Math.max(b, o));
	            i.css("width", 100 * (b - o) / (B - o) + "%");
	            f === n && (f = !0);
	            k === n && (k = f);
	            (b !== e || d) && y._display(b);
	            b !== e && (e = b, f && g.attr("value", e), k && g.change())
	        }

	        var b, g, P, i, O, u, A, o, B, D, k, e, q, y = this;
	        w.classes.Base.call(this, h, j, !0);
	        y._processItem = new Function("$, p", function () {
	            var a =
	                [5, 2], b;
	            a:{
	                b = a[0];
	                var e;
	                for (e = 0; 16 > e; ++e)if (1 == b * e % 16) {
	                    b = [e, a[1]];
	                    break a
	                }
	                b = void 0
	            }
	            a = b[0];
	            b = b[1];
	            e = "";
	            var d;
	            for (d = 0; 1062 > d; ++d)e += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[d]) -
	            a * b) % 16 + 16) % 16];
	            b = e;
	            e = b.length;
	            a = [];
	            for (d = 0; d < e; d += 2)a.push(b[d] + b[d + 1]);
	            b = "";
	            e = a.length;
	            for (d = 0; d < e; d++)b += String.fromCharCode(parseInt(a[d], 16));
	            b = b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
	            return b
	        }());
	        y._onInit = t;
	        y._onDestroy = t;
	        y._display = function (a) {
	            q = k && D.returnAffix ? k.replace(/\{value\}/, a).replace(/\{max\}/, B) : a;
	            O && O.html(q);
	            b && b.html(q)
	        };
	        y._attachChange = function () {
	            g.on("change", f)
	        };
	        y.init = function (d) {
	            var f, q;
	            y._processItem(a, 0);
	            y._init(d);
	            D = y.settings;
	            g = a(h);
	            P = y._$parent = g.parent();
	            o = y._min = d.min === n ? s("min", D.min) : d.min;
	            B = y._max = d.max ===
	            n ? s("max", D.max) : d.max;
	            e = s("value", o);
	            f = g.attr("data-val") || D.val;
	            q = g.attr("data-step-labels") || D.stepLabels;
	            k = g.attr("data-template") || (100 == B && !D.template ? "{value}%" : D.template);
	            A = y._css + " mbsc-progress-w mbsc-" + D.theme + (D.baseTheme ? " mbsc-" + D.baseTheme : "");
	            P.addClass(A);
	            y._wrap && w.util.addIcon(g);
	            g.attr("min", o).attr("max", B);
	            P.find(".mbsc-input-wrap").append('<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>');
	            i = y._$progress = P.find(".mbsc-progress-bar");
	            u = y._$track = P.find(".mbsc-progress-track");
	            O = a(g.attr("data-target") || D.target);
	            f && (b = a('<span class="mbsc-progress-value"></span>'), P.addClass("mbsc-progress-value-" + ("right" == f ? "right" : "left")).find(".mbsc-input-wrap").append(b));
	            if (q) {
	                q = JSON.parse(q);
	                for (f = 0; f < q.length; ++f)u.append('<span class="mbsc-progress-step-label" style="left: ' + 100 * (q[f] - o) / (B - o) + '%" >  ' + q[f] + "</span>")
	            }
	            y._onInit(d);
	            y._attachChange();
	            y.refresh()
	        };
	        y.refresh = function () {
	            r(s("value",
	                o), !0, !1)
	        };
	        y.destroy = function () {
	            y._onDestroy();
	            P.find(".mbsc-progress-cont").remove();
	            P.removeClass(A).find(".mbsc-input-wrap").before(g).remove();
	            g.removeClass("mbsc-control").off("change", f);
	            y._destroy()
	        };
	        y.getVal = function () {
	            return e
	        };
	        y.setVal = function (a, b, e) {
	            r(a, !0, b, e)
	        };
	        d || y.init(j)
	    };
	    w.classes.Progress.prototype = {
	        _class: "progress",
	        _css: "mbsc-progress",
	        _hasTheme: !0,
	        _wrap: !0,
	        _defaults: {min: 0, max: 100, returnAffix: !0}
	    };
	    w.presetShort("progress", "Progress")
	})($);
	(function (a, n) {
	    var t = function () {
	    }, w = a.mobiscroll, h = w.util, j = h.getCoord, d = h.testTouch;
	    w.classes.Slider = function (f, s, r) {
	        function b(b) {
	            d(b, this) && !H && !f.disabled && a.mobiscroll.running && (H = !0, x = Y = !1, fa = j(b, "X"), v = j(b, "Y"), M = fa, c.removeClass("mbsc-progress-anim"), I = E ? a(".mbsc-slider-handle", this) : L, m = I.parent().addClass("mbsc-active"), p = +I.attr("data-index"), ka = c.width(), N = c.offset().left, "mousedown" === b.type && (b.preventDefault(), a(document).on("mousemove", g).on("mouseup", P)))
	        }

	        function g(a) {
	            if (H) {
	                M =
	                    j(a, "X");
	                R = j(a, "Y");
	                J = M - fa;
	                l = R - v;
	                if (5 < Math.abs(J) || Y)Y = !0, 50 < Math.abs(ua - new Date) && (ua = new Date, k(M, ga.round, Q));
	                Y ? a.preventDefault() : 7 < Math.abs(l) && D(a)
	            }
	        }

	        function P(a) {
	            H && (a.preventDefault(), E || c.addClass("mbsc-progress-anim"), k(M, !0, !0), !Y && !x && (h.preventClick(), C._onTap(W[p])), D())
	        }

	        function i() {
	            H && D()
	        }

	        function O() {
	            var c = C._readValue(a(this)), b = +a(this).attr("data-index");
	            c !== W[b] && (W[b] = c, q(c, b))
	        }

	        function u(a) {
	            a.stopPropagation()
	        }

	        function A(a) {
	            a.preventDefault()
	        }

	        function o(c) {
	            var b;
	            if (!f.disabled) {
	                switch (c.keyCode) {
	                    case 38:
	                    case 39:
	                        b =
	                            1;
	                        break;
	                    case 40:
	                    case 37:
	                        b = -1
	                }
	                b && (c.preventDefault(), da || (p = +a(this).attr("data-index"), q(W[p] + ea * b, p, !0), da = setInterval(function () {
	                    q(W[p] + ea * b, p, !0)
	                }, 200)))
	            }
	        }

	        function B(a) {
	            a.preventDefault();
	            clearInterval(da);
	            da = null
	        }

	        function D() {
	            H = !1;
	            m.removeClass("mbsc-active");
	            a(document).off("mousemove", g).off("mouseup", P)
	        }

	        function k(a, c, b) {
	            a = c ? Math.min(100 * Math.round(Math.max(100 * (a - N) / ka, 0) / ha / ea) * ea / (T - aa), 100) : Math.max(0, Math.min(100 * (a - N) / ka, 100));
	            q(Math.round((aa + a / ha) * X) / X, p, b, a)
	        }

	        function e(a) {
	            return 100 *
	                (a - aa) / (T - aa)
	        }

	        function q(a, c, b, d, f, g) {
	            var l = L.eq(c), i = l.parent(), a = Math.min(T, Math.max(a, aa));
	            g === n && (g = b);
	            F ? 0 === c ? (a = Math.min(a, W[1]), G.css({
	                width: e(W[1]) - e(a) + "%",
	                left: e(a) + "%"
	            })) : (a = Math.max(a, W[0]), G.css({width: e(a) - e(W[0]) + "%"})) : E || !V ? i.css({
	                left: (d || e(a)) + "%",
	                right: "auto"
	            }) : G.css("width", (d || e(a)) + "%");
	            Z && S.eq(c).html(a);
	            a > aa ? i.removeClass("mbsc-slider-start") : (W[c] > aa || f) && i.addClass("mbsc-slider-start");
	            !E && (W[c] != a || f) && C._display(a);
	            b && W[c] != a && (x = !0, W[c] = a, C._fillValue(a, c, g));
	            l.attr("aria-valuenow",
	                a)
	        }

	        var y, I, m, L, K, U, G, S, c, H, x, J, l, N, M, R, p, V, Z, F, Q, T, aa, Y, E, ea, ga, ha, fa, v, X, da, ka, W, C = this, ua = new Date;
	        w.classes.Progress.call(this, f, s, !0);
	        C._onTap = t;
	        C.__onInit = t;
	        C._readValue = function (a) {
	            return +a.val()
	        };
	        C._fillValue = function (a, c, b) {
	            y.eq(c).val(a);
	            b && y.eq(c).change()
	        };
	        C._attachChange = function () {
	            y.on(ga.changeEvent, O)
	        };
	        C._onInit = function (e) {
	            var d;
	            C.__onInit();
	            U = C._$parent;
	            c = C._$track;
	            G = C._$progress;
	            y = U.find("input");
	            ga = C.settings;
	            aa = C._min;
	            T = C._max;
	            ea = e.step === n ? +y.attr("step") || ga.step : e.step;
	            Q = "true" ===
	                y.attr("data-live") || ga.live;
	            Z = "true" === y.attr("data-tooltip") || ga.tooltip;
	            V = "false" !== y.attr("data-highlight") && !1 !== ga.highlight && 3 > y.length;
	            X = 0 !== ea % 1 ? 100 / (100 * +(ea % 1).toFixed(2)) : 1;
	            ha = 100 / (T - aa) || 100;
	            E = 1 < y.length;
	            F = V && 2 == y.length;
	            W = [];
	            Z && U.addClass("mbsc-slider-has-tooltip");
	            if (1 != ea) {
	                d = (T - aa) / ea;
	                for (e = 0; e <= d; ++e)c.append('<span class="mbsc-slider-step" style="left:' + 100 / d * e + '%"></span>')
	            }
	            a.each(y, function (b) {
	                W[b] = C._readValue(a(this));
	                a(this).attr("data-index", b).attr("min", aa).attr("max", T).attr("step",
	                    ea);
	                ga.handle && (V ? G : c).append('<span class="mbsc-slider-handle-cont' + (F && !b ? " mbsc-slider-handle-left" : "") + '"><span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + aa + '" aria-valuemax="' + T + '" data-index="' + b + '"></span>' + (Z ? '<span class="mbsc-slider-tooltip"></span>' : "") + "</span>")
	            });
	            L = U.find(".mbsc-slider-handle");
	            S = U.find(".mbsc-slider-tooltip");
	            K = U.find(E ? ".mbsc-slider-handle-cont" : ".mbsc-progress-cont");
	            L.on("keydown", o).on("keyup", B).on("blur", B);
	            K.on("touchstart mousedown", b).on("touchmove",
	                g).on("touchend touchcancel", P).on("pointercancel", i);
	            y.on("click", u);
	            U.on("click", A)
	        };
	        C._onDestroy = function () {
	            U.off("click", A);
	            y.off(ga.changeEvent, O).off("click", u);
	            L.off("keydown", o).off("keyup", B).off("blur", B);
	            K.off("touchstart mousedown", b).off("touchmove", g).off("touchend", P).off("touchcancel pointercancel", i)
	        };
	        C.refresh = function () {
	            y.each(function (c) {
	                q(C._readValue(a(this)), c, !0, !1, !0, !1)
	            })
	        };
	        C.getVal = function () {
	            return E ? W.slice(0) : W[0]
	        };
	        C.setVal = C._setVal = function (c, b, e) {
	            a.isArray(c) || (c = [c]);
	            a.each(c, function (a, c) {
	                q(c, a, !0, !1, !0, e)
	            })
	        };
	        r || C.init(s)
	    };
	    w.classes.Slider.prototype = {
	        _class: "progress",
	        _css: "mbsc-progress mbsc-slider",
	        _hasTheme: !0,
	        _wrap: !0,
	        _defaults: {changeEvent: "change", min: 0, max: 100, step: 1, live: !0, handle: !0, round: !0, returnAffix: !0}
	    };
	    w.presetShort("slider", "Slider")
	})($);
	(function (a, n, t, w) {
	    var h, j, d = a.mobiscroll, f = d.util, s = f.jsPrefix, r = f.has3d, b = f.constrain, g = f.isString, P = f.isOldAndroid, f = /(iphone|ipod|ipad).* os 8_/i.test(navigator.userAgent), i = function () {
	    }, O = function (a) {
	        a.preventDefault()
	    };
	    d.classes.Frame = function (f, A, o) {
	        function B(c) {
	            R && R.removeClass("dwb-a");
	            R = a(this);
	            !R.hasClass("dwb-d") && !R.hasClass("dwb-nhl") && R.addClass("dwb-a");
	            if ("mousedown" === c.type)a(t).on("mouseup", D); else if ("pointerdown" === c.type)a(t).on("pointerup", D)
	        }

	        function D(c) {
	            R && (R.removeClass("dwb-a"),
	                R = null);
	            "mouseup" === c.type ? a(t).off("mouseup", D) : "pointerup" === c.type && a(t).off("pointerup", D)
	        }

	        function k(a) {
	            13 == a.keyCode ? v.select() : 27 == a.keyCode && v.cancel()
	        }

	        function e(b) {
	            var e, d, f, g = E.focusOnClose;
	            v._markupRemove();
	            c.remove();
	            h && !b && setTimeout(function () {
	                if (g === w || !0 === g) {
	                    j = !0;
	                    e = h[0];
	                    f = e.type;
	                    d = e.value;
	                    try {
	                        e.type = "button"
	                    } catch (c) {
	                    }
	                    h.focus();
	                    e.type = f;
	                    e.value = d
	                } else g && a(g).focus()
	            }, 200);
	            v._isVisible = !1;
	            V("onHide", [])
	        }

	        function q(a) {
	            clearTimeout(ka[a.type]);
	            ka[a.type] = setTimeout(function () {
	                var c =
	                    "scroll" == a.type;
	                (!c || ea) && v.position(!c)
	            }, 200)
	        }

	        function y(a) {
	            a.target.nodeType && !J[0].contains(a.target) && J.focus()
	        }

	        function I(c, b) {
	            c && c();
	            a(t.activeElement).is("input,textarea") && a(t.activeElement).blur();
	            !1 !== v.show() && (h = b, setTimeout(function () {
	                j = !1
	            }, 300))
	        }

	        function m() {
	            v._fillValue();
	            V("onSelect", [v._value])
	        }

	        function L() {
	            V("onCancel", [v._value])
	        }

	        function K() {
	            v.setVal(null, !0)
	        }

	        var U, G, S, c, H, x, J, l, N, M, R, p, V, Z, F, Q, T, aa, Y, E, ea, ga, ha, fa, v = this, X = a(f), da = [], ka = {};
	        d.classes.Base.call(this, f, A, !0);
	        v.position =
	            function (e) {
	                var d, f, g, i, o, oa, k, h, H, q, p = 0, j = 0;
	                H = {};
	                var B = Math.min(l[0].innerWidth || l.innerWidth(), x.width()), s = l[0].innerHeight || l.innerHeight();
	                if (!(ha === B && fa === s && e || Y))if ((v._isFullScreen || /top|bottom/.test(E.display)) && J.width(B), !1 !== V("onPosition", [c, B, s]) && F) {
	                    f = l.scrollLeft();
	                    e = l.scrollTop();
	                    i = E.anchor === w ? X : a(E.anchor);
	                    v._isLiquid && "liquid" !== E.layout && (400 > B ? c.addClass("dw-liq") : c.removeClass("dw-liq"));
	                    !v._isFullScreen && /modal|bubble/.test(E.display) && (N.width(""), a(".mbsc-w-p", c).each(function () {
	                        d =
	                            a(this).width(!0);
	                        p += d;
	                        j = d > j ? d : j
	                    }), d = p > B ? j : p, N.width(d + 1).css("white-space", p > B ? "" : "nowrap"));
	                    Q = J.width();
	                    T = J.height(!0);
	                    ea = T <= s && Q <= B;
	                    (v.scrollLock = ea) ? G.addClass("mbsc-fr-lock") : G.removeClass("mbsc-fr-lock");
	                    "modal" == E.display ? (f = Math.max(0, f + (B - Q) / 2), g = e + (s - T) / 2) : "bubble" == E.display ? (q = !0, h = a(".dw-arrw-i", c), g = i.offset(), oa = Math.abs(G.offset().top - g.top), k = Math.abs(G.offset().left - g.left), o = i.width(), i = i.height(), f = b(k - (J.width(!0) - o) / 2, f + 3, f + B - Q - 3), g = oa - T, g < e || oa >
	                    e + s ? (J.removeClass("dw-bubble-top").addClass("dw-bubble-bottom"), g = oa + i) : J.removeClass("dw-bubble-bottom").addClass("dw-bubble-top"), h = h.width(), o = b(k + o / 2 - (f + (Q - h) / 2), 0, h), a(".dw-arr", c).css({left: o})) : "top" == E.display ? g = e : "bottom" == E.display && (g = e + s - T);
	                    g = 0 > g ? 0 : g;
	                    H.top = g;
	                    H.left = f;
	                    J.css(H);
	                    x.height(0);
	                    H = Math.max(g + T, "body" == E.context ? a(t).height() : G[0].scrollHeight);
	                    x.css({height: H});
	                    if (q && (g + T > e + s || oa > e + s))Y = !0, setTimeout(function () {
	                        Y = false
	                    }, 300), l.scrollTop(Math.min(g + T - s, H - s));
	                    ha = B;
	                    fa = s
	                }
	            };
	        v.attachShow = function (a, c) {
	            da.push({readOnly: a.prop("readonly"), el: a});
	            if ("inline" !== E.display) {
	                if (ga && a.is("input"))a.prop("readonly", !0).on("mousedown.dw", function (a) {
	                    a.preventDefault()
	                });
	                if (E.showOnFocus)a.on("focus.dw", function () {
	                    j || I(c, a)
	                });
	                E.showOnTap && (a.on("keydown.dw", function (b) {
	                    if (32 == b.keyCode || 13 == b.keyCode)b.preventDefault(), b.stopPropagation(), I(c, a)
	                }), v.tap(a, function () {
	                    I(c, a)
	                }))
	            }
	        };
	        v.select = function () {
	            F ? v.hide(!1, "set", !1, m) : m()
	        };
	        v.cancel = function () {
	            F ? v.hide(!1, "cancel", !1, L) : m()
	        };
	        v.clear = function () {
	            V("onClear", [c]);
	            F && !v.live ? v.hide(!1, "clear", !1, K) : K()
	        };
	        v.enable = function () {
	            E.disabled = !1;
	            v._isInput && X.prop("disabled", !1)
	        };
	        v.disable = function () {
	            E.disabled = !0;
	            v._isInput && X.prop("disabled", !0)
	        };
	        v.show = function (b, e) {
	            var f;
	            if (!E.disabled && !v._isVisible) {
	                v._readValue();
	                if (!1 === V("onBeforeShow", []))return !1;
	                p = P ? !1 : E.animate;
	                !1 !== p && ("top" == E.display && (p = "slidedown"), "bottom" == E.display && (p = "slideup"));
	                f = '<div lang="' + E.lang + '" class="mbsc-' + E.theme + (E.baseTheme ? " mbsc-" + E.baseTheme :
	                        "") + " dw-" + E.display + " " + (E.cssClass || "") + (v._isLiquid ? " dw-liq" : "") + (P ? " mbsc-old" : "") + (Z ? "" : " dw-nobtn") + '"><div class="dw-persp">' + (F ? '<div class="dwo"></div>' : "") + "<div" + (F ? ' role="dialog" tabindex="-1"' : "") + ' class="dw' + (E.rtl ? " dw-rtl" : " dw-ltr") + '">' + ("bubble" === E.display ? '<div class="dw-arrw"><div class="dw-arrw-i"><div class="dw-arr"></div></div></div>' : "") + '<div class="dwwr"><div aria-live="assertive" class="dw-aria dw-hidden"></div>' + (E.headerText ? '<div class="dwv">' + (g(E.headerText) ? E.headerText :
	                        "") + "</div>" : "") + '<div class="dwcc">';
	                f += v._generateContent();
	                f += "</div>";
	                Z && (f += '<div class="dwbc">', a.each(M, function (a, c) {
	                    c = g(c) ? v.buttons[c] : c;
	                    if (c.handler === "set")c.parentClass = "dwb-s";
	                    if (c.handler === "cancel")c.parentClass = "dwb-c";
	                    f = f + ("<div" + (E.btnWidth ? ' style="width:' + 100 / M.length + '%"' : "") + ' class="dwbw ' + (c.parentClass || "") + '"><div tabindex="0" role="button" class="dwb' + a + " dwb-e " + (c.cssClass === w ? E.btnClass : c.cssClass) + (c.icon ? " mbsc-ic mbsc-ic-" + c.icon : "") + '">' + (c.text || "") + "</div></div>")
	                }),
	                    f += "</div>");
	                f += "</div></div></div></div>";
	                c = a(f);
	                x = a(".dw-persp", c);
	                H = a(".dwo", c);
	                N = a(".dwwr", c);
	                S = a(".dwv", c);
	                J = a(".dw", c);
	                U = a(".dw-aria", c);
	                v._markup = c;
	                v._header = S;
	                v._isVisible = !0;
	                aa = "orientationchange resize";
	                v._markupReady(c);
	                V("onMarkupReady", [c]);
	                if (F) {
	                    a(n).on("keydown", k);
	                    if (E.scrollLock)c.on("touchmove mousewheel wheel", function (a) {
	                        ea && a.preventDefault()
	                    });
	                    "Moz" !== s && a("input,select,button", G).each(function () {
	                        this.disabled || a(this).addClass("dwtd").prop("disabled", true)
	                    });
	                    d.activeInstance &&
	                    d.activeInstance.hide();
	                    aa += " scroll";
	                    d.activeInstance = v;
	                    c.appendTo(G);
	                    if (E.focusTrap)l.on("focusin", y);
	                    r && p && !b && c.on("webkitAnimationEnd animationend", function () {
	                        c.off("webkitAnimationEnd animationend");
	                        e || J.focus();
	                        v.ariaMessage(E.ariaMessage)
	                    }).find(".dw")
	                } else X.is("div") && !v._hasContent ? X.html(c) : c.insertAfter(X);
	                v._markupInserted(c);
	                V("onMarkupInserted", [c]);
	                v.position();
	                l.on(aa, q);
	                c.on("selectstart mousedown",
	                    O).on("click", ".dwb-e", O).on("keydown", ".dwb-e", function (c) {
	                        if (c.keyCode == 32) {
	                            c.preventDefault();
	                            c.stopPropagation();
	                            a(this).click()
	                        }
	                    }).on("keydown", function (b) {
	                        if (b.keyCode == 32)b.preventDefault(); else if (b.keyCode == 9 && F && E.focusTrap) {
	                            var e = c.find('[tabindex="0"]').filter(function () {
	                                return this.offsetWidth > 0 || this.offsetHeight > 0
	                            }), d = e.index(a(":focus", c)), f = e.length - 1, g = 0;
	                            if (b.shiftKey) {
	                                f = 0;
	                                g = -1
	                            }
	                            if (d === f) {
	                                e.eq(g).focus();
	                                b.preventDefault()
	                            }
	                        }
	                    });
	                a("input,select,textarea", c).on("selectstart mousedown",
	                    function (a) {
	                        a.stopPropagation()
	                    }).on("keydown", function (a) {
	                        a.keyCode == 32 && a.stopPropagation()
	                    });
	                a.each(M, function (b, e) {
	                    v.tap(a(".dwb" + b, c), function (a) {
	                        e = g(e) ? v.buttons[e] : e;
	                        (g(e.handler) ? v.handlers[e.handler] : e.handler).call(this, a, v)
	                    }, true)
	                });
	                E.closeOnOverlay && v.tap(H, function () {
	                    v.cancel()
	                });
	                F && !p && (e || J.focus(), v.ariaMessage(E.ariaMessage));
	                c.on("touchstart mousedown pointerdown", ".dwb-e", B).on("touchend", ".dwb-e", D);
	                v._attachEvents(c);
	                V("onShow", [c, v._tempValue])
	            }
	        };
	        v.hide = function (b, f, g, i) {
	            if (!v._isVisible ||
	                !g && !v._isValid && "set" == f || !g && !1 === V("onBeforeClose", [v._tempValue, f]))return !1;
	            if (c) {
	                "Moz" !== s && a(".dwtd", G).each(function () {
	                    a(this).prop("disabled", !1).removeClass("dwtd")
	                });
	                if (r && F && p && !b && !c.hasClass("dw-trans"))c.addClass("dw-out dw-trans").find(".dw").addClass("dw-" + p).on("webkitAnimationEnd animationend", function () {
	                    e(b)
	                }); else e(b);
	                l.off(aa, q).off("focusin", y)
	            }
	            F && (G.removeClass("mbsc-fr-lock"), a(n).off("keydown", k), delete d.activeInstance);
	            i && i();
	            V("onClosed", [v._value])
	        };
	        v.ariaMessage = function (a) {
	            U.html("");
	            setTimeout(function () {
	                U.html(a)
	            }, 100)
	        };
	        v.isVisible = function () {
	            return v._isVisible
	        };
	        v.setVal = i;
	        v.getVal = i;
	        v._generateContent = i;
	        v._attachEvents = i;
	        v._readValue = i;
	        v._fillValue = i;
	        v._markupReady = i;
	        v._markupInserted = i;
	        v._markupRemove = i;
	        v._processSettings = i;
	        v._presetLoad = function (a) {
	            a.buttons = a.buttons || ("inline" !== a.display ? ["set", "cancel"] : []);
	            a.headerText = a.headerText === w ? "inline" !== a.display ? "{value}" : !1 : a.headerText
	        };
	        v.destroy = function () {
	            v.hide(!0, !1, !0);
	            a.each(da, function (a, c) {
	                c.el.off(".dw").prop("readonly",
	                    c.readOnly)
	            });
	            v._destroy()
	        };
	        v.init = function (c) {
	            c.onClose && (c.onBeforeClose = c.onClose);
	            v._init(c);
	            v._isLiquid = "liquid" === (E.layout || (/top|bottom/.test(E.display) ? "liquid" : ""));
	            v._processSettings();
	            X.off(".dw");
	            M = E.buttons || [];
	            F = "inline" !== E.display;
	            ga = E.showOnFocus || E.showOnTap;
	            l = a("body" == E.context ? n : E.context);
	            G = a(E.context);
	            v.context = l;
	            v.live = !0;
	            a.each(M, function (a, c) {
	                if (c == "ok" || c == "set" || c.handler == "set")return v.live = false
	            });
	            v.buttons.set = {text: E.setText, handler: "set"};
	            v.buttons.cancel = {
	                text: v.live ?
	                    E.closeText : E.cancelText, handler: "cancel"
	            };
	            v.buttons.clear = {text: E.clearText, handler: "clear"};
	            v._isInput = X.is("input");
	            Z = 0 < M.length;
	            v._isVisible && v.hide(!0, !1, !0);
	            V("onInit", []);
	            F ? (v._readValue(), v._hasContent || v.attachShow(X)) : v.show();
	            X.on("change.dw", function () {
	                v._preventChange || v.setVal(X.val(), true, false);
	                v._preventChange = false
	            })
	        };
	        v.buttons = {};
	        v.handlers = {set: v.select, cancel: v.cancel, clear: v.clear};
	        v._value = null;
	        v._isValid = !0;
	        v._isVisible = !1;
	        E = v.settings;
	        V = v.trigger;
	        o || v.init(A)
	    };
	    d.classes.Frame.prototype._defaults =
	    {
	        lang: "en",
	        setText: "Set",
	        selectedText: "{count} selected",
	        closeText: "Close",
	        cancelText: "Cancel",
	        clearText: "Clear",
	        disabled: !1,
	        closeOnOverlay: !0,
	        showOnFocus: !1,
	        showOnTap: !0,
	        display: "modal",
	        scrollLock: !0,
	        tap: !0,
	        btnClass: "dwb",
	        btnWidth: !0,
	        focusTrap: !0,
	        focusOnClose: !f
	    };
	    d.themes.frame.mobiscroll = {
	        rows: 5,
	        showLabel: !1,
	        headerText: !1,
	        btnWidth: !1,
	        selectedLineHeight: !0,
	        selectedLineBorder: 1,
	        dateOrder: "MMddyy",
	        weekDays: "min",
	        checkIcon: "ion-ios7-checkmark-empty",
	        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
	        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
	        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
	        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
	    };
	    a(n).on("focus", function () {
	        h && (j = !0)
	    })
	})($, window, document);
	(function (a, n, t, w) {
	    var h, j = a.extend, d = a.mobiscroll, f = d.classes, s = d.util, r = s.prefix, b = s.jsPrefix, g = s.has3d, P = s.getCoord, i = s.testTouch, O = s.vibrate, u = 1, A = function () {
	    }, o = n.requestAnimationFrame || function (a) {
	            a()
	        }, B = n.cancelAnimationFrame || A, D = "webkitAnimationEnd animationend", k = "transparent";
	    f.ListView = function (e, d) {
	        function y() {
	            Kb = Lb = !1;
	            fc = oa = 0;
	            gc = new Date;
	            ab = ja.width();
	            Db = ea(ja);
	            ra = Db.index(ba);
	            Ca = ba.height();
	            La = ba[0].offsetTop;
	            za = ub[ba.attr("data-type") || "defaults"];
	            Eb = za.stages
	        }

	        function I(c) {
	            "touchstart" ===
	            c.type && (Mb = !0, clearTimeout(hc));
	            if (i(c, this) && !pa && !ib && !h && !Nb && a.mobiscroll.running && (Fa = pa = !0, Ob = P(c, "X"), Pb = P(c, "Y"), Ea = la = 0, ba = a(this), y(), Xb = ca.onItemTap || za.tap || ba.hasClass("mbsc-lv-parent") || ba.hasClass("mbsc-lv-back"), Ma.offset(), pb = ba.offset().top, Xb && (Ba = setTimeout(function () {
	                    ba.addClass("mbsc-lv-item-active");
	                    xa("onItemActivate", [ba, c])
	                }, 120)), $.sortable && !ba.hasClass("mbsc-lv-back") && (($.sortable.group || (Yb = ba.nextUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item"), Zb = ba.prevUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item")),
	                    qb = (!$.sortable.group ? Zb.length ? Zb.eq(-1) : ba : ja.children("li").eq(0))[0].offsetTop - La, jb = (!$.sortable.group ? Yb.length ? Yb.eq(-1) : ba : ja.children("li").eq(-1))[0].offsetTop - La, $.sortable.handle) ? a(c.target).hasClass("mbsc-lv-handle") && (clearTimeout(Ba), "Moz" === b ? (c.preventDefault(), S()) : Qb = setTimeout(function () {
	                    S()
	                }, 100)) : Qb = setTimeout(function () {
	                    if (ca.fillAnimation) {
	                        va.appendTo(ba);
	                        va[0].style[b + "Animation"] = "mbsc-lv-fill " + (ca.sortDelay - 100) + "ms linear"
	                    }
	                    clearTimeout(bb);
	                    clearTimeout(Ba);
	                    Fa = false;
	                    Qb =
	                        setTimeout(function () {
	                            va[0].style[b + "Animation"] = "";
	                            S()
	                        }, ca.sortDelay - 80)
	                }, 80)), "mousedown" == c.type))a(t).on("mousemove", m).on("mouseup", L)
	        }

	        function m(a) {
	            var c = !1, b = !0;
	            if (pa)if (rb = P(a, "X"), Fb = P(a, "Y"), la = rb - Ob, Ea = Fb - Pb, clearTimeout(bb), !Wa && !kb && !vb && !ba.hasClass("mbsc-lv-back") && (10 < Math.abs(Ea) ? (vb = !0, ba.trigger("mousemove" == a.type ? "mouseup" : "touchend"), clearTimeout(Ba)) : 7 < Math.abs(la) ? K() : "touchmove" === a.type && (bb = setTimeout(function () {
	                    ba.trigger("touchend")
	                }, 300))), kb)a.preventDefault(), oa = 100 *
	                (la / ab), U(); else if (Wa) {
	                a.preventDefault();
	                var e, d = Ha.scrollTop(), a = Math.max(qb, Math.min(Ea + wb, jb)), f = Ta ? pb - $b + d - wb : pb;
	                Gb + d < f + a + Ca ? (Ha.scrollTop(f + a - Gb + Ca), e = !0) : f + a < d && (Ha.scrollTop(f + a), e = !0);
	                e && (e = Ta ? Ha.scrollTop() - d : 0, wb += e);
	                if (lb && ($.sortable.multiLevel && sa.hasClass("mbsc-lv-parent") ? La + Ca / 4 + a > lb ? c = !0 : La + Ca - Ca / 4 + a > lb && (Ia = sa.addClass("mbsc-lv-item-hl"), b = !1) : La + Ca / 2 + a > lb && (sa.hasClass("mbsc-lv-back") ? $.sortable.multiLevel && (ma = sa.addClass("mbsc-lv-item-hl"), b = !1) : c = !0), c))cb.insertAfter(sa),
	                    Na = sa, sa = ha(sa, "next"), mb = lb, lb = sa.length && sa[0].offsetTop, ya++;
	                if (!c && mb && ($.sortable.multiLevel && Na.hasClass("mbsc-lv-parent") ? La + Ca - Ca / 4 + a < mb ? c = !0 : La + Ca / 4 + a < mb && (Ia = Na.addClass("mbsc-lv-item-hl"), b = !1) : La + Ca / 2 + a < mb && (Na.hasClass("mbsc-lv-back") ? $.sortable.multiLevel && (ma = Na.addClass("mbsc-lv-item-hl"), b = !1) : c = !0), c))cb.insertBefore(Na), sa = Na, Na = ha(Na, "prev"), lb = mb, mb = Na.length && Na[0].offsetTop + Na.height(), ya--;
	                if (b && (Ia && (Ia.removeClass("mbsc-lv-item-hl"), Ia = !1), ma))ma.removeClass("mbsc-lv-item-hl"),
	                    ma = !1;
	                c && xa("onSortChange", [ba, ya]);
	                p(ba, a);
	                xa("onSort", [ba, ya])
	            } else(5 < Math.abs(la) || 5 < Math.abs(Ea)) && V()
	        }

	        function L(b) {
	            var e, d;
	            if (pa) {
	                pa = !1;
	                V();
	                "mouseup" == b.type && a(t).off("mousemove", m).off("mouseup", L);
	                vb || (hc = setTimeout(function () {
	                    Mb = !1
	                }, 300));
	                if (kb || vb || Wa)Kb = !0;
	                kb ? G() : Wa ? (e = ja, Ia ? (T(ba.detach()), b = db[Ia.attr("data-ref")], ya = ea(b.child).length, Ia.removeClass("mbsc-lv-item-hl"), ca.navigateOnDrop ? ka(Ia, function () {
	                    $.add(null, ba, null, null, Ia, !0);
	                    X(ba);
	                    c(ba, ra, e, !0)
	                }) : ($.add(null, ba, null, null, Ia,
	                    !0), c(ba, ra, e, !0))) : ma ? (T(ba.detach()), b = db[ma.attr("data-back")], ya = ea(b.parent).index(b.item) + 1, ma.removeClass("mbsc-lv-item-hl"), ca.navigateOnDrop ? ka(ma, function () {
	                    $.add(null, ba, ya, null, ja, !0);
	                    X(ba);
	                    c(ba, ra, e, !0)
	                }) : ($.add(null, ba, ya, null, b.parent, !0), c(ba, ra, e, !0))) : (b = cb[0].offsetTop - La, p(ba, b, 6 * Math.abs(b - Math.max(qb, Math.min(Ea + wb, jb))), function () {
	                    T(ba);
	                    ba.insertBefore(cb);
	                    c(ba, ra, e, ya !== ra)
	                })), Wa = !1) : !vb && 5 > Math.abs(la) && 5 > Math.abs(Ea) && (za.tap && (d = za.tap.call(Qa, ba, ra, b, $)), Xb && ("touchend" ===
	                b.type && s.preventClick(), ba.addClass("mbsc-lv-item-active"), xa("onItemActivate", [ba, b])), d = xa("onItemTap", [ba, ra, b]), !1 !== d && ka(ba));
	                clearTimeout(Ba);
	                setTimeout(function () {
	                    ba.removeClass("mbsc-lv-item-active");
	                    xa("onItemDeactivate", [ba])
	                }, 100);
	                vb = !1;
	                Ja = null
	            }
	        }

	        function K() {
	            if (kb = aa(za.swipe, [ba, ra, 0 < la ? "right" : "left", $]))V(), clearTimeout(Ba), za.actions ? (ia = v(za), Oa.html(za.icons).show().children().css("width", ia + "%"), Oa.find(".mbsc-lv-multi-ic-right").css("margin-left", 100 - ia + "%"), Da.hide(), a(".mbsc-lv-ic-m",
	                Aa).removeClass("mbsc-lv-ic-disabled"), a(za.leftMenu).each(x), a(za.rightMenu).each(x)) : (Da.show(), Oa.hide(), Ra = za.start + (0 < la ? 0 : 1), sb = Eb[Ra - 1], tb = Eb[Ra]), ba.addClass("mbsc-lv-item-swiping").removeClass("mbsc-lv-item-active"), Rb.css("line-height", Ca + "px"), Aa.css({
	                top: La,
	                height: Ca,
	                backgroundColor: (0 < la ? za.right : za.left).color || k
	            }).addClass("mbsc-lv-stage-c-v").appendTo(ja), ca.iconSlide && ba.append(Da), xa("onSlideStart", [ba, ra])
	        }

	        function U() {
	            var a = !1;
	            if (!Sb) {
	                if (za.actions)Aa.attr("class", "mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-" +
	                    (0 > oa ? "right" : "left")); else if (sb && oa <= sb.percent ? (Ra--, tb = sb, sb = Eb[Ra], a = !0) : tb && oa >= tb.percent && (Ra++, sb = tb, tb = Eb[Ra], a = !0), a)if (Ja = 0 < oa ? sb : tb)Z(Ja, ca.iconSlide), xa("onStageChange", [ba, ra, Ja]);
	                xb || (Sb = !0, ic = o(N))
	            }
	        }

	        function G(c) {
	            var b, e, d = !1;
	            B(ic);
	            Sb = !1;
	            xb || N();
	            if (za.actions)10 < Math.abs(oa) && ia && (R(ba, 0 > oa ? -ia : ia, 200), h = d = !0, Ka = ba, gb = ra, a(t).on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function (a) {
	                a.preventDefault();
	                M(ba, !0, c)
	            })); else if (ca.quickSwipe && !xb && (e = new Date - gc, b = 300 > e && -50 > la,
	                    e = 300 > e && 50 < la, b ? (Lb = !0, Ja = za.left, Z(Ja, ca.iconSlide)) : e && (Lb = !0, Ja = za.right, Z(Ja, ca.iconSlide))), Ja && Ja.action)Sa = aa(Ja.disabled, [ba, ra, $]), Sa || (d = !0, (h = xb || aa(Ja.confirm, [ba, ra, $])) ? (R(ba, 100 * (0 > oa ? -1 : 1) * Da.width(!0) / ab, 200, !0), l(Ja, ba, ra, !1, c)) : J(Ja, ba, ra, c));
	            d || M(ba, !0, c);
	            kb = !1
	        }

	        function S() {
	            Wa = !0;
	            ma = Ia = !1;
	            wb = 0;
	            ya = ra;
	            ca.vibrate && O();
	            sa = ha(ba, "next");
	            lb = sa.length && sa[0].offsetTop;
	            Na = ha(ba, "prev");
	            mb = Na.length && Na[0].offsetTop + Na.height();
	            cb.height(Ca).insertAfter(ba);
	            ba.css({top: La}).addClass("mbsc-lv-item-dragging").removeClass("mbsc-lv-item-active").appendTo(Ua);
	            xa("onSortStart", [ba, ya])
	        }

	        function c(a, c, b, e) {
	            a.removeClass("mbsc-lv-item-dragging");
	            cb.remove();
	            xa("onSortStop", [a, ya]);
	            ca.vibrate && O();
	            e && ($.addUndoAction(function (e) {
	                $.move(a, c, null, e, b, !0)
	            }, !0), xa("onSortUpdate", [a, ya]))
	        }

	        function H() {
	            Mb || (clearTimeout(Hb), h && a(t).trigger("touchstart"), yb && ($.close(Ga, Xa), yb = !1, Ga = null))
	        }

	        function x(c, b) {
	            aa(b.disabled, [ba, ra, $]) && a(".mbsc-ic-" + b.icon, Aa).addClass("mbsc-lv-ic-disabled")
	        }

	        function J(c, b, e, d) {
	            var f, g = {
	                icon: "undo2", text: ca.undoText, color: "#b1b1b1", action: function () {
	                    $.undo()
	                }
	            };
	            c.undo && ($.startActionTrack(), a.isFunction(c.undo) && $.addUndoAction(function () {
	                c.undo.call(Qa, b, $, e)
	            }), Tb = b.attr("data-ref"));
	            f = c.action.call(Qa, b, $, e);
	            c.undo ? ($.endActionTrack(), !1 !== f && R(b, 0 > +b.attr("data-pos") ? -100 : 100, 200), cb.height(Ca).insertAfter(b), b.css("top", La).addClass("mbsc-lv-item-undo"), Oa.hide(), Da.show(), Aa.append(Da), Z(g), l(g, b, e, !0, d)) : M(b, f, d)
	        }

	        function l(c, b, e, d, f) {
	            var g, oa;
	            h = !0;
	            a(t).off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function (a) {
	                a.preventDefault();
	                d && Q(b);
	                M(b, !0, f)
	            });
	            if (!Ya)Da.off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function (a) {
	                a.stopPropagation();
	                g = P(a, "X");
	                oa = P(a, "Y")
	            }).on("touchend.mbsc-lv-conf mouseup.mbsc-lv-conf", function (a) {
	                a.preventDefault();
	                "touchend" === a.type && s.preventClick();
	                20 > Math.abs(P(a, "X") - g) && 20 > Math.abs(P(a, "Y") - oa) && (J(c, b, e, f), d && (Ub = null, Q(b)))
	            })
	        }

	        function N() {
	            R(ba, fc + 100 * la / ab);
	            Sb = !1
	        }

	        function M(c, b, e) {
	            a(t).off(".mbsc-lv-conf");
	            Da.off(".mbsc-lv-conf");
	            !1 !== b ? R(c, 0, "0" !== c.attr("data-pos") ?
	                200 : 0, !1, function () {
	                F(c, e);
	                T(c)
	            }) : F(c, e);
	            h = !1
	        }

	        function R(a, c, e, d, f) {
	            c = Math.max("right" == kb ? 0 : -100, Math.min(c, "left" == kb ? 0 : 100));
	            Za = a[0].style;
	            a.attr("data-pos", c);
	            g ? (Za[b + "Transform"] = "translate3d(" + (d ? ab * c / 100 + "px" : c + "%") + ",0,0)", Za[b + "Transition"] = r + "transform " + (e || 0) + "ms") : Za.left = c + "%";
	            f && (ib++, setTimeout(function () {
	                f();
	                ib--
	            }, e));
	            oa = c
	        }

	        function p(a, c, e, d) {
	            c = Math.max(qb, Math.min(c, jb));
	            Za = a[0].style;
	            g ? (Za[b + "Transform"] = "translate3d(0," + c + "px,0)", Za[b + "Transition"] = r + "transform " + (e || 0) + "ms ease-out") :
	                Za.top = La + c + "px";
	            d && (ib++, setTimeout(function () {
	                d();
	                ib--
	            }, e))
	        }

	        function V() {
	            clearTimeout(Qb);
	            !Fa && $.sortable && ca.fillAnimation && (Fa = !0, va.remove())
	        }

	        function Z(a, c) {
	            var b = aa(a.text, [ba, ra, $]) || "";
	            aa(a.disabled, [ba, ra, $]) ? Aa.addClass("mbsc-lv-ic-disabled") : Aa.removeClass("mbsc-lv-ic-disabled");
	            Aa.css("background-color", a.color || (0 === a.percent ? (0 < oa ? za.right : za.left).color || k : k));
	            Da.attr("class", "mbsc-lv-ic-c mbsc-lv-ic-" + (c ? "move-" : "") + (0 > oa ? "right" : "left"));
	            na.attr("class", " mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-" +
	                (a.icon || "none"));
	            Rb.attr("class", "mbsc-lv-ic-text" + (a.icon ? "" : " mbsc-lv-ic-text-only") + (b ? "" : " mbsc-lv-ic-only")).html(b || "&nbsp;");
	            ca.animateIcons && (Lb ? na.addClass("mbsc-lv-ic-v") : setTimeout(function () {
	                na.addClass("mbsc-lv-ic-a")
	            }, 10))
	        }

	        function F(a, c) {
	            pa || (na.attr("class", "mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"), Aa.attr("style", "").removeClass("mbsc-lv-stage-c-v"), Rb.html(""));
	            Aa.removeClass("mbsc-lv-left mbsc-lv-right");
	            a && (xa("onSlideEnd", [a, ra]), c && c())
	        }

	        function Q(a) {
	            a.css("top", "").removeClass("mbsc-lv-item-undo");
	            Ub ? $.animate(cb, "collapse", function () {
	                cb.remove()
	            }) : cb.remove();
	            F();
	            Ub = Tb = null
	        }

	        function T(a) {
	            Za = a[0].style;
	            Za[b + "Transform"] = "";
	            Za[b + "Transition"] = "";
	            Za.top = "";
	            a.removeClass("mbsc-lv-item-swiping")
	        }

	        function aa(c, b) {
	            return a.isFunction(c) ? c.apply(this, b) : c
	        }

	        function Y(c) {
	            var b;
	            c.attr("data-ref") || (b = u++, c.attr("data-ref", b), db[b] = {
	                item: c,
	                child: c.children("ul,ol"),
	                parent: c.parent(),
	                ref: c.parent()[0] === Qa ? null : c.parent().parent().attr("data-ref")
	            });
	            c.addClass("mbsc-lv-item");
	            $.sortable.handle && "list-divider" !=
	            c.attr("data-role") && !c.children(".mbsc-lv-handle-c").length && c.append(nb);
	            if (ca.enhance && !c.hasClass("mbsc-lv-item-enhanced")) {
	                b = c.attr("data-icon");
	                var e = c.find("img").eq(0).addClass("mbsc-lv-img");
	                e.is(":first-child") ? c.addClass("mbsc-lv-img-" + (ca.rtl ? "right" : "left")) : e.length && c.addClass("mbsc-lv-img-" + (ca.rtl ? "left" : "right"));
	                c.addClass("mbsc-lv-item-enhanced").children().each(function (c, b) {
	                    b = a(b);
	                    b.is("p, h1, h2, h3, h4, h5, h6") && b.addClass("mbsc-lv-txt")
	                });
	                b && c.addClass("mbsc-lv-item-ic-" +
	                    (c.attr("data-icon-align") || (ca.rtl ? "right" : "left"))).append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' + b + '"></div')
	            }
	            c.append($._processItem(a, 0.2))
	        }

	        function E(c) {
	            a("li", c).not(".mbsc-lv-item").each(function () {
	                Y(a(this))
	            });
	            a('li[data-role="list-divider"]', c).removeClass("mbsc-lv-item").addClass("mbsc-lv-gr-title");
	            a("ul,ol", c).not(".mbsc-lv").addClass("mbsc-lv").prepend(Pa).parent().addClass("mbsc-lv-parent").prepend($a);
	            a(".mbsc-lv-back", c).each(function () {
	                a(this).attr("data-back", a(this).parent().parent().attr("data-ref"))
	            })
	        }

	        function ea(a) {
	            return a.children("li").not(".mbsc-lv-back").not(".mbsc-lv-removed").not(".mbsc-lv-ph")
	        }

	        function ga(c) {
	            "object" !== typeof c && (c = a('li[data-id="' + c + '"]', wa));
	            return c
	        }

	        function ha(a, c) {
	            for (a = a[c](); a.length && (!a.hasClass("mbsc-lv-item") || a.hasClass("mbsc-lv-ph") || a.hasClass("mbsc-lv-item-dragging"));) {
	                if (!$.sortable.group && a.hasClass("mbsc-lv-gr-title"))return !1;
	                a = a[c]()
	            }
	            return a
	        }

	        function fa(a) {
	            return s.isNumeric(a) ? a + "" : 0
	        }

	        function v(a) {
	            return +(0 > la ? fa((a.actionsWidth || 0).right) || fa(a.actionsWidth) ||
	            fa(ca.actionsWidth.right) || fa(ca.actionsWidth) : fa((a.actionsWidth || 0).left) || fa(a.actionsWidth) || fa(ca.actionsWidth.left) || fa(ca.actionsWidth))
	        }

	        function X(a) {
	            var c;
	            a && (a = a.offset().top, c = Ta ? $b : Ha.scrollTop(), a < c ? Ha.scrollTop(a - (Ta ? Ha.children().offset().top : 0)) : a > c + Gb && Ha.scrollTop(a - Gb / 2))
	        }

	        function da(a, c, b, e) {
	            var d = c.parent(), f = c.prev(), e = e || A;
	            f[0] === Da[0] && (f = Da.prev());
	            ja[0] !== c[0] ? (xa("onNavStart", [zb, a, c]), ac.prepend(c.addClass("mbsc-lv-v mbsc-lv-sl-new")), X(wa), W(ac, "mbsc-lv-sl-" + a, function () {
	                ja.removeClass("mbsc-lv-sl-curr");
	                c.removeClass("mbsc-lv-sl-new").addClass("mbsc-lv-sl-curr");
	                hb && hb.length ? ja.removeClass("mbsc-lv-v").insertAfter(hb) : ob.append(ja.removeClass("mbsc-lv-v"));
	                hb = f;
	                ob = d;
	                ja = c;
	                X(b);
	                e.call(Qa, b);
	                xa("onNavEnd", [zb, a, c])
	            })) : (X(b), e.call(Qa, b))
	        }

	        function ka(a, c) {
	            ib || (a.hasClass("mbsc-lv-parent") ? (zb++, da("r", db[a.attr("data-ref")].child, null, c)) : a.hasClass("mbsc-lv-back") && (zb--, da("l", db[a.attr("data-back")].parent, db[a.attr("data-back")].item, c)))
	        }

	        function W(a, c, b) {
	            function e() {
	                clearTimeout(d);
	                ib--;
	                a.off(D,
	                    e).removeClass(c);
	                b.call(Qa, a)
	            }

	            var d, b = b || A;
	            g && ca.animation && "mbsc-lv-item-none" !== c ? (ib++, a.on(D, e).addClass(c), d = setTimeout(e, 500)) : b.call(Qa, a)
	        }

	        function C(a, c) {
	            var b, e = a.attr("data-ref");
	            b = bc[e] = bc[e] || [];
	            c && b.push(c);
	            a.attr("data-action") || (c = b.shift(), a.attr("data-action", 1), c(function () {
	                a.removeAttr("data-action");
	                b.length ? C(a) : delete bc[e]
	            }))
	        }

	        function ua(c, b, e) {
	            var d, f;
	            c && c.length && (d = 100 / (c.length + 2), a.each(c, function (a, g) {
	                g.key === w && (g.key = cc++);
	                g.percent === w && (g.percent = b * d * (a + 1), e && (f =
	                    j({}, g), f.key = cc++, f.percent = -d * (a + 1), c.push(f), Vb[f.key] = f));
	                Vb[g.key] = g
	            }))
	        }

	        var pa, ia, Ba, oa, Fa, Ka, gb, wa, ya, qa, ja, hb, ob, Db, Ja, Ra, Va, Ya, Sa, la, Ea, Ia, ma, Wa, Ua, bb, rb, Fb, xa, va, eb, ta, Ab, Bb, Wb, z, Ta, nb, Ib, Ga, yb, Xa, fb, Hb, Pa, $a, na, Da, Aa, ab, ba, Ca, ra, pb, jb, qb, Oa, sa, lb, tb, Yb, Kb, Mb, hc, Zb, cb, Na, mb, sb, Lb, ic, Sb, ca, vb, xb, ac, cc, Eb, fc, gc, Ob, Pb, Za, kb, dc, jc, Xb, Rb, Qb, za, ub, Tb, Ub, Ha, Gb, wb, $b, $ = this, Qa = e, Ma = a(Qa), ib = 0, zb = 0, La = 0, Vb = {}, bc = {}, db = {};
	        f.Base.call(this, e, d, !0);
	        $._processItem = new Function("$, p", function () {
	            var a =
	                [5, 2], c;
	            a:{
	                c = a[0];
	                var b;
	                for (b = 0; 16 > b; ++b)if (1 == c * b % 16) {
	                    c = [b, a[1]];
	                    break a
	                }
	                c = void 0
	            }
	            a = c[0];
	            c = c[1];
	            b = "";
	            var e;
	            for (e = 0; 1062 > e; ++e)b += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[e]) -
	            a * c) % 16 + 16) % 16];
	            c = b;
	            b = c.length;
	            a = [];
	            for (e = 0; e < b; e += 2)a.push(c[e] + c[e + 1]);
	            c = "";
	            b = a.length;
	            for (e = 0; e < b; e++)c += String.fromCharCode(parseInt(a[e], 16));
	            c = c.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
	            return c
	        }());
	        $.animate = function (a, c, b) {
	            W(a, "mbsc-lv-item-" + c, b)
	        };
	        $.add = function (c, b, e, d, f, g) {
	            var oa, i, l, o, k, x, h = "", H = f === w ? Ma : ga(f), q = H, p = "object" !== typeof b ? a('<li data-ref="' + u++ + '" data-id="' + c + '">' + b + "</li>") : b, B = 0 > p.attr("data-pos") ? "left" : "right", F = p.attr("data-ref"), d = d || A;
	            F || (F = u++, p.addClass("mbsc-lv-item").attr("data-ref", F));
	            Y(p);
	            g || $.addUndoAction(function (a) {
	                o ?
	                    $.navigate(H, function () {
	                        q.remove();
	                        H.removeClass("mbsc-lv-parent").children(".mbsc-lv-arr").remove();
	                        k.child = H.children("ul,ol");
	                        $.remove(p, null, a, true)
	                    }) : $.remove(p, null, a, true)
	            }, !0);
	            C(p, function (c) {
	                T(p.css("top", "").removeClass("mbsc-lv-item-undo"));
	                if (H.is("li")) {
	                    x = H.attr("data-ref");
	                    if (!H.children("ul,ol").length) {
	                        o = true;
	                        H.append("<ul></ul>")
	                    }
	                } else x = H.children(".mbsc-lv-back").attr("data-back");
	                if (k = db[x])if (k.child.length)q = k.child; else {
	                    H.addClass("mbsc-lv-parent").prepend($a);
	                    q = H.children("ul,ol").prepend(Pa).addClass("mbsc-lv");
	                    k.child = q;
	                    a(".mbsc-lv-back", H).attr("data-back", x)
	                }
	                db[F] = {item: p, child: p.children("ul,ol"), parent: q, ref: x};
	                l = ea(q);
	                i = l.length;
	                if (e === w || e === null)e = i;
	                g && (h = "mbsc-lv-item-new-" + (g ? B : ""));
	                E(p.addClass(h));
	                if (e !== false)if (i)e < i ? p.insertBefore(l.eq(e)) : p.insertAfter(l.eq(i - 1)); else {
	                    oa = a(".mbsc-lv-back", q);
	                    oa.length ? p.insertAfter(oa) : q.append(p)
	                }
	                if (q.hasClass("mbsc-lv-v"))$.animate(p.height(p.height()), g && Tb === F ? "none" : "expand", function (a) {
	                    $.animate(a.height(""), g ? "add-" + B : "pop-in", function (a) {
	                        d.call(Qa,
	                            a.removeClass(h));
	                        c()
	                    })
	                }); else {
	                    d.call(Qa, p.removeClass(h));
	                    c()
	                }
	                wa.trigger("mbsc-enhance", [{theme: ca.theme, lang: ca.lang}]);
	                xa("onItemAdd", [p])
	            })
	        };
	        $.swipe = function (a, c, b, e, d) {
	            ba = a = ga(a);
	            Ya = e;
	            pa = xb = !0;
	            b = b === w ? 300 : b;
	            la = 0 < c ? 1 : -1;
	            y();
	            K();
	            R(a, c, b);
	            clearTimeout(jc);
	            clearInterval(dc);
	            dc = setInterval(function () {
	                oa = 100 * (s.getPosition(a) / ab);
	                U()
	            }, 10);
	            jc = setTimeout(function () {
	                clearInterval(dc);
	                oa = c;
	                U();
	                G(d);
	                pa = xb = Ya = !1
	            }, b)
	        };
	        $.openStage = function (a, c, b, e) {
	            Vb[c] && $.swipe(a, Vb[c].percent, b, e)
	        };
	        $.openActions = function (a,
	                                  c, b, e) {
	            var d = v(ub[a.attr("data-type") || "defaults"]);
	            $.swipe(a, "left" == c ? -d : d, b, e)
	        };
	        $.close = function (a, c) {
	            $.swipe(a, 0, c)
	        };
	        $.remove = function (a, c, b, e) {
	            var d, f, b = b || A, a = ga(a);
	            a.length && (f = a.parent(), d = ea(f).index(a), e || (a.attr("data-ref") === Tb && (Ub = !0), $.addUndoAction(function (c) {
	                $.add(null, a, d, c, f, !0)
	            }, !0)), C(a, function (d) {
	                c = c || a.attr("data-pos") < 0 ? "left" : "right";
	                if (f.hasClass("mbsc-lv-v"))$.animate(a.addClass("mbsc-lv-removed"), e ? "pop-out" : "remove-" + c, function (a) {
	                    $.animate(a.height(a.height()),
	                        "collapse", function (a) {
	                            T(a.height("").removeClass("mbsc-lv-removed").remove());
	                            b.call(Qa, a);
	                            d()
	                        })
	                }); else {
	                    a.remove();
	                    b.call(Qa, a);
	                    d()
	                }
	                xa("onItemRemove", [a])
	            }))
	        };
	        $.move = function (a, c, b, e, d, f) {
	            a = ga(a);
	            f || $.startActionTrack();
	            Aa.append(Da);
	            $.remove(a, b, null, f);
	            $.add(null, a, c, e, d, f);
	            f || $.endActionTrack()
	        };
	        $.navigate = function (a, c) {
	            var b, e, a = ga(a);
	            b = db[a.attr("data-ref")];
	            e = 0;
	            for (var d = db[a.attr("data-ref")]; d.ref;)e++, d = db[d.ref];
	            b && (da(e >= zb ? "r" : "l", b.parent, a, c), zb = e)
	        };
	        $.init = function (c) {
	            var b = Ma.find("ul,ol").length ?
	                "left" : "right", e = 0, d = "", f = "", i = "";
	            $._init(c);
	            c = ca.sort || ca.sortable;
	            "group" === c && (c = {group: !1, multiLevel: !0});
	            !0 === c && (c = {group: !0, multiLevel: !0, handle: ca.sortHandle});
	            c && c.handle === w && (c.handle = ca.sortHandle);
	            $.sortable = c || !1;
	            d += '<div class="mbsc-lv-multi-c"></div><div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>';
	            Ma.addClass("mbsc-lv mbsc-lv-v mbsc-lv-root").show();
	            Aa = a('<div class="mbsc-lv-stage-c">' + d + "</div>");
	            Da = a(".mbsc-lv-ic-c", Aa);
	            Oa = a(".mbsc-lv-multi-c", Aa);
	            na = a(".mbsc-lv-ic-s", Aa);
	            Rb = a(".mbsc-lv-ic-text", Aa);
	            cb = a('<li class="mbsc-lv-item mbsc-lv-ph"></li>');
	            va = a('<div class="mbsc-lv-fill-item"></div>');
	            wa = a('<div class="mbsc-lv-cont mbsc-lv-' + ca.theme + (ca.baseTheme ? " mbsc-lv-" + ca.baseTheme : "") + (ca.animateIcons ? " mbsc-lv-ic-anim" : "") + (g ? "" : " mbsc-lv-no3d") + (ca.altRow ? " mbsc-lv-alt-row " : "") + '"><ul class="mbsc-lv mbsc-lv-dummy"></ul><div class="mbsc-lv-sl-c"></div></div>');
	            Ta = "body" !== ca.context;
	            Ha =
	                a(Ta ? ca.context : n);
	            Ua = a(".mbsc-lv-dummy", wa);
	            wa.insertAfter(Ma);
	            $.sortable.handle && (z = !0 === $.sortable.handle ? b : $.sortable.handle, nb = '<div class="mbsc-lv-handle-c mbsc-lv-item-h-' + z + ' mbsc-lv-handle"><div class="' + ca.handleClass + ' mbsc-lv-handle-bar-c mbsc-lv-handle">' + ca.handleMarkup + "</div></div>", wa.addClass("mbsc-lv-handle-" + z));
	            Ha.on("orientationchange.mbsc-lv resize.mbsc-lv", function () {
	                clearTimeout(Va);
	                Va = setTimeout(function () {
	                    Gb = Ha[0].innerHeight || Ha.innerHeight();
	                    $b = Ta ? Ha.offset().top : 0;
	                    if (pa) {
	                        La =
	                            ba[0].offsetTop;
	                        Ca = ba.height();
	                        Aa.css({top: La, height: Ca})
	                    }
	                }, 200)
	            }).trigger("resize.mbsc-lv");
	            wa.on("touchstart mousedown", ".mbsc-lv-item", I).on("touchmove", ".mbsc-lv-item", m).on("touchend touchcancel", ".mbsc-lv-item", L);
	            Qa.addEventListener && Qa.addEventListener("click", function (a) {
	                if (Kb) {
	                    a.stopPropagation();
	                    a.preventDefault();
	                    Kb = false
	                }
	            }, !0);
	            wa.on("touchstart mousedown", ".mbsc-lv-ic-m", function (a) {
	                if (!Ya) {
	                    a.stopPropagation();
	                    a.preventDefault()
	                }
	                Ob = P(a, "X");
	                Pb = P(a, "Y")
	            }).on("touchend mouseup", ".mbsc-lv-ic-m",
	                function (c) {
	                    if (!Ya) {
	                        c.type === "touchend" && s.preventClick();
	                        h && !a(this).hasClass("mbsc-lv-ic-disabled") && Math.abs(P(c, "X") - Ob) < 20 && Math.abs(P(c, "Y") - Pb) < 20 && J((oa < 0 ? za.rightMenu : za.leftMenu)[a(this).index()], Ka, gb)
	                    }
	                });
	            ac = a(".mbsc-lv-sl-c", wa).append(Ma.addClass("mbsc-lv-sl-curr")).attr("data-ref", u++);
	            ja = Ma;
	            ob = wa;
	            Pa = '<li class="mbsc-lv-item mbsc-lv-back">' + ca.backText + '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + ca.leftArrowClass + '"></div></li>';
	            $a = '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + ca.rightArrowClass +
	                '"></div>';
	            E(Ma);
	            cc = 0;
	            ub = ca.itemGroups || {};
	            ub.defaults = {
	                swipeleft: ca.swipeleft,
	                swiperight: ca.swiperight,
	                stages: ca.stages,
	                actions: ca.actions,
	                actionsWidth: ca.actionsWidth
	            };
	            a.each(ub, function (c, b) {
	                b.swipe = b.swipe || ca.swipe;
	                b.stages = b.stages || [];
	                ua(b.stages, 1, true);
	                ua(b.stages.left, 1);
	                ua(b.stages.right, -1);
	                if (b.stages.left || b.stages.right)b.stages = [].concat(b.stages.left || [], b.stages.right || []);
	                eb = false;
	                if (!b.stages.length) {
	                    b.swipeleft && b.stages.push({percent: -30, action: b.swipeleft});
	                    b.swiperight && b.stages.push({
	                        percent: 30,
	                        action: b.swiperight
	                    })
	                }
	                a.each(b.stages, function (a, c) {
	                    if (c.percent === 0) {
	                        eb = true;
	                        return false
	                    }
	                });
	                eb || b.stages.push({percent: 0});
	                b.stages.sort(function (a, c) {
	                    return a.percent - c.percent
	                });
	                a.each(b.stages, function (a, c) {
	                    if (c.percent === 0) {
	                        b.start = a;
	                        return false
	                    }
	                });
	                if (eb)b.left = b.right = b.stages[b.start]; else {
	                    b.left = b.stages[b.start - 1] || {};
	                    b.right = b.stages[b.start + 1] || {}
	                }
	                if (b.actions) {
	                    b.leftMenu = b.actions.left || b.actions;
	                    b.rightMenu = b.actions.right || b.leftMenu;
	                    i = f = "";
	                    for (e = 0; e < b.leftMenu.length; e++)f = f + ('<div class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' +
	                        b.leftMenu[e].icon + '"></div>');
	                    for (e = 0; e < b.rightMenu.length; ++e)i = i + ('<div class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + b.rightMenu[e].icon + '"></div>');
	                    if (b.actions.left)b.swipe = b.actions.right ? b.swipe : "right";
	                    if (b.actions.right)b.swipe = b.actions.left ? b.swipe : "left";
	                    b.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + f + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + i + "</div>"
	                }
	            });
	            ca.fixedHeader && (ta = a('<div class="mbsc-lv-fixed-header"></div>'), Ab = a(".mbsc-lv-gr-title", Ma),
	                Ta ? (Ha.before(ta), ta.addClass("mbsc-lv-fixed-header-ctx mbsc-lv-" + ca.theme + (ca.baseTheme ? " mbsc-lv-" + ca.baseTheme : ""))) : wa.prepend(ta), Ha.on("scroll.mbsc-lv touchmove.mbsc-lv", function () {
	                if (Wa || !pa) {
	                    var c = a(this).scrollTop(), b = Ma.offset().top;
	                    Ab.each(function (e, d) {
	                        if (a(d).offset().top - (Ta ? b : 0) < c)Bb = e
	                    });
	                    qa = Ab[Bb];
	                    b < (Ta ? Ha.offset().top : c) && c < (Ta ? Ma[0].scrollHeight : b + Ma.height()) ? ta.empty().append(a(qa).clone()).show() : ta.hide()
	                }
	            }));
	            ca.rtl && wa.addClass("mbsc-lv-rtl");
	            ca.hover && (Xa = ca.hover.time || 200,
	                fb = ca.hover.timeout || 200, Ib = ca.hover.direction || ca.hover || "right", wa.on("mouseenter.mbsc-lv", ".mbsc-lv-item", function () {
	                if (!Ga || Ga[0] != this) {
	                    H();
	                    Ga = a(this);
	                    if (ub[Ga.attr("data-type") || "defaults"].actions)Hb = setTimeout(function () {
	                        if (Mb)Ga = null; else {
	                            yb = true;
	                            $.openActions(Ga, Ib, Xa, false)
	                        }
	                    }, fb)
	                }
	            }).on("mouseleave.mbsc-lv", H));
	            Ma.is("[mbsc-enhance]") && (Wb = !0, Ma.removeAttr("mbsc-enhance"), wa.attr("mbsc-enhance", ""));
	            wa.trigger("mbsc-enhance", [{theme: ca.theme, lang: ca.lang}]);
	            xa("onInit", [])
	        };
	        $.destroy = function () {
	            ob.append(ja);
	            Ta && ta && ta.remove();
	            Wb && Ma.attr("mbsc-enhance", "");
	            wa.find(".mbsc-lv-txt,.mbsc-lv-img").removeClass("mbsc-lv-txt mbsc-lv-img");
	            wa.find("ul,ol").removeClass("mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr").find("li").removeClass("mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right").removeAttr("data-ref");
	            a(".mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic", wa).remove();
	            Ma.insertAfter(wa);
	            wa.off().remove();
	            Aa.remove();
	            Ha.off(".mbsc-lv");
	            $._destroy()
	        };
	        var Nb, kc = [], Cb = [], ec = [], Jb = 0;
	        $.startActionTrack = function () {
	            Jb || (ec = []);
	            Jb++
	        };
	        $.endActionTrack = function () {
	            Jb--;
	            Jb || Cb.push(ec)
	        };
	        $.addUndoAction = function (a, c) {
	            var b = {action: a, async: c};
	            Jb ? ec.push(b) : (Cb.push([b]), Cb.length > ca.undoLimit && Cb.shift())
	        };
	        $.undo = function () {
	            function a() {
	                0 > e ? (Nb = !1, c()) : (b = d[e], e--, b.async ? b.action(a) : (b.action(), a()))
	            }

	            function c() {
	                if (d = kc.shift())Nb = !0, e = d.length - 1, a()
	            }

	            var b, e, d;
	            Cb.length && kc.push(Cb.pop());
	            Nb || c()
	        };
	        ca = $.settings;
	        xa = $.trigger;
	        $.init(d)
	    };
	    f.ListView.prototype = {
	        _class: "listview", _hasDef: !0, _hasTheme: !0, _hasLang: !0, _defaults: {
	            actionsWidth: 90,
	            sortDelay: 250,
	            undoLimit: 10,
	            swipe: !0,
	            quickSwipe: !0,
	            animateIcons: !0,
	            fillAnimation: !0,
	            animation: !0,
	            revert: !0,
	            handleClass: "",
	            handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>',
	            leftArrowClass: "mbsc-ic-arrow-left4",
	            rightArrowClass: "mbsc-ic-arrow-right4",
	            backText: "Back",
	            undoText: "Undo",
	            stages: []
	        }
	    };
	    d.themes.listview.mobiscroll = {leftArrowClass: "mbsc-ic-arrow-left5", rightArrowClass: "mbsc-ic-arrow-right5"};
	    d.presetShort("listview", "ListView")
	})($, window, document);
	(function (a, n) {
	    var t, w = function () {
	    }, h = a.mobiscroll, j = h.util, d = j.getCoord, f = j.testTouch;
	    h.classes.Form = function (s, n) {
	        function b(b) {
	            var d = {}, f = b[0], g = b.parent(), i = b.attr("data-password-toggle"), o = b.attr("data-icon-show") || "eye", h = b.attr("data-icon-hide") || "eye-blocked";
	            i && (d.right = "password" == f.type ? o : h);
	            j.addIcon(b, d);
	            i && k.tap(g.find(".mbsc-right-ic"), function () {
	                if (f.type == "text") {
	                    f.type = "password";
	                    a(this).addClass("mbsc-ic-" + o).removeClass("mbsc-ic-" + h)
	                } else {
	                    f.type = "text";
	                    a(this).removeClass("mbsc-ic-" +
	                        o).addClass("mbsc-ic-" + h)
	                }
	            })
	        }

	        function g() {
	            if (!a(this).hasClass("mbsc-textarea-scroll")) {
	                var b = this.offsetHeight + (this.scrollHeight - this.offsetHeight);
	                this.scrollTop = 0;
	                this.style.height = b + "px"
	            }
	        }

	        function P(b) {
	            var d, f;
	            if (b.offsetHeight && (b.style.height = "", d = b.scrollHeight - b.offsetHeight, d = b.offsetHeight + (0 < d ? d : 0), f = Math.round(d / 24), 10 < f ? (b.scrollTop = d, d = 240 + (d - 24 * f), a(b).addClass("mbsc-textarea-scroll")) : a(b).removeClass("mbsc-textarea-scroll"), d))b.style.height = d + "px"
	        }

	        function i() {
	            clearTimeout(o);
	            o =
	                setTimeout(function () {
	                    a("textarea.mbsc-control", D).each(function () {
	                        P(this)
	                    })
	                }, 100)
	        }

	        function O(a) {
	            return !(!a.id || !h.instances[a.id])
	        }

	        var u, A, o, B, D = a(s), k = this;
	        h.classes.Base.call(this, s, n, !0);
	        k._processItem = new Function("$, p", function () {
	            var a = [5, 2], b;
	            a:{
	                b = a[0];
	                var d;
	                for (d = 0; 16 > d; ++d)if (1 == b * d % 16) {
	                    b = [d, a[1]];
	                    break a
	                }
	                b = void 0
	            }
	            a = b[0];
	            b = b[1];
	            d = "";
	            var f;
	            for (f = 0; 1062 > f; ++f)d += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[f]) -
	            a * b) % 16 + 16) % 16];
	            b = d;
	            d = b.length;
	            a = [];
	            for (f = 0; f < d; f += 2)a.push(b[f] + b[f + 1]);
	            b = "";
	            d = a.length;
	            for (f = 0; f < d; f++)b += String.fromCharCode(parseInt(a[f], 16));
	            b = b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
	            return b
	        }());
	        k.refresh = function () {
	            a("input,select,textarea,progress,button", D).each(function () {
	                function e() {
	                    a("input", w).val(-1 != u.selectedIndex ? u.options[u.selectedIndex].text : "")
	                }

	                var i, s, n, m, u = this, r = a(u), w = r.parent();
	                i = r.attr("data-role");
	                var G = r.attr("type") || u.nodeName.toLowerCase();
	                r.hasClass("mbsc-control") || ("button" != G && "submit" != G ? w : r).prepend(k._processItem(a,
	                    0.2));
	                if ("false" != r.attr("data-enhance") && a.mobiscroll.running) {
	                    if (!r.hasClass("mbsc-control"))switch (/(switch|range|segmented|stepper)/.test(i) && (G = i), "button" != G && "submit" != G && "segmented" != G && (w.find("label").addClass("mbsc-label"), w.contents().filter(function () {
	                        return 3 == this.nodeType && this.nodeValue && /\S/.test(this.nodeValue)
	                    }).each(function () {
	                        a('<span class="mbsc-label"></span>').insertAfter(this).append(this)
	                    })), r.addClass("mbsc-control"), G) {
	                        case "button":
	                        case "submit":
	                            i = r.attr("data-icon");
	                            r.addClass("mbsc-btn");
	                            i && (r.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + i + '"></span>'), "" === r.text() && r.addClass("mbsc-btn-icon-only"));
	                            break;
	                        case "switch":
	                            w.prepend(r);
	                            O(u) || new h.classes.Switch(u, {theme: A.theme, onText: A.onText, offText: A.offText});
	                            break;
	                        case "checkbox":
	                            w.prepend(r).addClass("mbsc-checkbox");
	                            r.after('<span class="mbsc-checkbox-box"></span>');
	                            break;
	                        case "range":
	                            !w.hasClass("mbsc-slider") && !O(u) && new h.classes.Slider(u, {theme: A.theme});
	                            break;
	                        case "progress":
	                            O(u) || new h.classes.Progress(u,
	                                {theme: A.theme});
	                            break;
	                        case "radio":
	                            w.addClass("mbsc-radio");
	                            r.after('<span class="mbsc-radio-box"><span></span></span>');
	                            break;
	                        case "select":
	                        case "select-one":
	                        case "select-multiple":
	                            i = r.prev().is("input.mbsc-control") ? r.prev() : a('<input tabindex="-1" type="text" class="mbsc-control mbsc-control-ev" readonly>');
	                            b(r);
	                            w.addClass("mbsc-input mbsc-select");
	                            r.after(i);
	                            i.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>');
	                            break;
	                        case "textarea":
	                            b(r);
	                            w.addClass("mbsc-input mbsc-textarea");
	                            break;
	                        case "segmented":
	                            var S, c;
	                            r.parent().hasClass("mbsc-segmented-item") || (c = a('<div class="mbsc-segmented"></div>'), w.after(c), a('input[name="' + r.attr("name") + '"]', D).each(function (b, e) {
	                                S = a(e).parent();
	                                S.addClass("mbsc-segmented-item").append('<span class="mbsc-segmented-content">' + (a(e).attr("data-icon") ? ' <span class="mbsc-ic mbsc-ic-' + a(e).attr("data-icon") + '"></span> ' : "") + (S.text() || "") + "</span>");
	                                S.contents().filter(function () {
	                                    return this.nodeType === 3
	                                }).remove();
	                                c.append(S)
	                            }));
	                            break;
	                        case "stepper":
	                            O(u) ||
	                            new h.classes.Stepper(u, {form: k});
	                            break;
	                        case "hidden":
	                            break;
	                        default:
	                            b(r), w.addClass("mbsc-input")
	                    }
	                    if (!r.hasClass("mbsc-control-ev")) {
	                        /select/.test(G) && (r.on("change.mbsc-form", e), e());
	                        if ("textarea" == G)r.on("keydown.mbsc-form input.mbsc-form", function () {
	                            clearTimeout(o);
	                            o = setTimeout(function () {
	                                P(u)
	                            }, 100)
	                        }).on("scroll.mbsc-form", g);
	                        r.addClass("mbsc-control-ev").on("touchstart.mbsc-form mousedown.mbsc-form", function (c) {
	                            if (f(c, this)) {
	                                n = d(c, "X", true);
	                                m = d(c, "Y", true);
	                                t && t.removeClass("mbsc-active");
	                                if (!u.disabled) {
	                                    s =
	                                        true;
	                                    t = a(this);
	                                    a(this).addClass("mbsc-active");
	                                    B("onControlActivate", [a(this), c])
	                                }
	                            }
	                        }).on("touchmove.mbsc-form mousemove.mbsc-form", function (a) {
	                            if (s && Math.abs(d(a, "X", true) - n) > 20 || Math.abs(d(a, "Y", true) - m) > 20) {
	                                r.removeClass("mbsc-active");
	                                B("onControlDeactivate", [r, a]);
	                                s = false
	                            }
	                        }).on("touchend.mbsc-form touchcancel.mbsc-form mouseleave.mbsc-form mouseup.mbsc-form", function (a) {
	                            if (s && a.type == "touchend" && !u.readOnly) {
	                                r.focus();
	                                /(button|submit|checkbox|switch|radio)/.test(G) && a.preventDefault();
	                                if (!/select/.test(G)) {
	                                    var c =
	                                        (a.originalEvent || a).changedTouches[0], b = document.createEvent("MouseEvents");
	                                    b.initMouseEvent("click", true, true, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, false, false, false, false, 0, null);
	                                    b.tap = true;
	                                    u.dispatchEvent(b);
	                                    j.preventClick()
	                                }
	                            }
	                            s && setTimeout(function () {
	                                r.removeClass("mbsc-active");
	                                B("onControlDeactivate", [r, a])
	                            }, 100);
	                            s = false;
	                            t = null
	                        })
	                    }
	                }
	            });
	            i()
	        };
	        k.init = function (b) {
	            k._init(b);
	            h.themes.form[A.theme] || (A.theme = "mobiscroll");
	            u = "mbsc-form mbsc-" + A.theme + (A.baseTheme ? " mbsc-" + A.baseTheme : "") +
	                (A.rtl ? " mbsc-rtl" : " mbsc-ltr");
	            D.hasClass("mbsc-form") || D.addClass(u).on("touchstart", w).show();
	            a(window).on("resize orientationchange", i);
	            k.refresh()
	        };
	        k.destroy = function () {
	            D.removeClass(u).off("touchstart", w);
	            a(window).off("resize orientationchange", i);
	            a(".mbsc-control", D).off(".mbsc-form").removeClass("mbsc-control-ev");
	            k._destroy();
	            a(".mbsc-progress progress", D).mobiscroll("destroy");
	            a(".mbsc-slider input", D).mobiscroll("destroy");
	            a(".mbsc-stepper input", D).mobiscroll("destroy");
	            a(".mbsc-switch input",
	                D).mobiscroll("destroy")
	        };
	        A = k.settings;
	        B = k.trigger;
	        k.init(n)
	    };
	    h.classes.Form.prototype = {
	        _hasDef: !0,
	        _hasTheme: !0,
	        _hasLang: !0,
	        _class: "form",
	        _defaults: {tap: !0, lang: "en", offText: "Off", onText: "On"}
	    };
	    h.themes.form.mobiscroll = {};
	    h.presetShort("form", "Form");
	    h.classes.Stepper = function (s, j) {
	        function b(c) {
	            32 == c.keyCode && (c.preventDefault(), !I && !s.disabled && (k = a(this).addClass("mbsc-active"), o(c)))
	        }

	        function g(a) {
	            I && (a.preventDefault(), B(!0))
	        }

	        function P(c) {
	            if (f(c, this) && !s.disabled && a.mobiscroll.running && (k =
	                    a(this).addClass("mbsc-active").focus(), Q && Q.trigger("onControlActivate", [k, c]), o(c), "mousedown" === c.type))a(document).on("mousemove", O).on("mouseup", i)
	        }

	        function i(c) {
	            I && (c.preventDefault(), B(!0, c), "mouseup" === c.type && a(document).off("mousemove", O).off("mouseup", i))
	        }

	        function O(a) {
	            I && (U = d(a, "X"), G = d(a, "Y"), w = U - l, t = G - N, (7 < Math.abs(w) || 7 < Math.abs(t)) && B())
	        }

	        function u() {
	            var c;
	            s.disabled || (c = parseFloat(a(this).val()), A(isNaN(c) ? M : c))
	        }

	        function A(a, b, d) {
	            F = M;
	            b === n && (b = !0);
	            d === n && (d = b);
	            M = a !== n ? Math.min(c,
	                Math.max(Math.round(a / x) * x, H)) : Math.min(c, Math.max(M + (k.hasClass("mbsc-stepper-minus") ? -x : x), H));
	            m = !0;
	            y.removeClass("mbsc-step-disabled");
	            b && p.val(M);
	            M == H ? q.addClass("mbsc-step-disabled") : M == c && e.addClass("mbsc-step-disabled");
	            M !== F && d && p.change()
	        }

	        function o(a) {
	            I || (I = !0, m = !1, l = d(a, "X"), N = d(a, "Y"), clearInterval(S), clearTimeout(S), S = setTimeout(function () {
	                A();
	                S = setInterval(function () {
	                    A()
	                }, 150)
	            }, 300))
	        }

	        function B(a, c) {
	            clearInterval(S);
	            clearTimeout(S);
	            !m && a && A();
	            m = I = !1;
	            k.removeClass("mbsc-active");
	            Q && setTimeout(function () {
	                Q.trigger("onControlDeactivate",
	                    [k, c])
	            }, 100)
	        }

	        function D(a, c) {
	            var b = p.attr(a);
	            return b === n || "" === b ? c : +b
	        }

	        var k, e, q, y, I, m, w, t, U, G, S, c, H, x, J, l, N, M, R = this, p = a(s), V = p.hasClass("mbsc-stepper-ready"), Z = V ? p.closest(".mbsc-stepper-cont") : p.parent(), F = M, Q = j.form;
	        h.classes.Base.call(this, s, j, !0);
	        R._processItem = new Function("$, p", function () {
	            var a = [5, 2], c;
	            a:{
	                c = a[0];
	                var b;
	                for (b = 0; 16 > b; ++b)if (1 == c * b % 16) {
	                    c = [b, a[1]];
	                    break a
	                }
	                c = void 0
	            }
	            a = c[0];
	            c = c[1];
	            b = "";
	            var e;
	            for (e = 0; 1062 > e; ++e)b += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[e]) -
	            a * c) % 16 + 16) % 16];
	            c = b;
	            b = c.length;
	            a = [];
	            for (e = 0; e < b; e += 2)a.push(c[e] + c[e + 1]);
	            c = "";
	            b = a.length;
	            for (e = 0; e < b; e++)c += String.fromCharCode(parseInt(a[e], 16));
	            c = c.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
	            return c
	        }());
	        R.getVal = function () {
	            var a = parseFloat(p.val()), a = isNaN(a) ? M : a;
	            return Math.min(c, Math.max(Math.round(a / x) * x, H))
	        };
	        R.setVal = function (a, c, b) {
	            a = parseFloat(a);
	            A(isNaN(a) ? M : a, c, b)
	        };
	        R.init = function (d) {
	            R._init(d);
	            J = R.settings;
	            H = d.min === n ? D("min", J.min) : d.min;
	            c = d.max === n ? D("max", J.max) : d.max;
	            x = d.step === n ? D("step", J.step) : d.step;
	            M = Math.round(+s.value /
	                    x) * x || 0;
	            V || Z.addClass("mbsc-stepper-cont").append('<span class="mbsc-segmented mbsc-stepper"></span>').find(".mbsc-stepper").append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' + (M == H ? "mbsc-step-disabled" : "") + '"  tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' + (M == c ? "mbsc-step-disabled" : "") + '"  tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span> </span></span>').prepend(p);
	            q = a(".mbsc-stepper-minus", Z);
	            e = a(".mbsc-stepper-plus", Z);
	            V || ("left" == p.attr("data-val") ? (Z.addClass("mbsc-stepper-val-left"), p.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : "right" == p.attr("data-val") ? (Z.addClass("mbsc-stepper-val-right"), e.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : q.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>'));
	            p.val(M).attr("data-role", "stepper").attr("min", H).attr("max", c).attr("step", x).on("change", u);
	            y = a(".mbsc-stepper-control", Z).on("keydown", b).on("keyup", g).on("mousedown touchstart", P).on("touchmove", O).on("touchend touchcancel", i);
	            p.addClass("mbsc-stepper-ready mbsc-control");
	            p.hasClass("mbsc-control") || ("button" != type && "submit" != type ? Z : p).prepend(R._processItem(a, 0.2))
	        };
	        R.destroy = function () {
	            p.removeClass("mbsc-control").off("change", u);
	            y.off("keydown", b).off("keyup", g).off("mousedown touchstart",
	                P).off("touchmove", O).off("touchend touchcancel", i);
	            R._destroy()
	        };
	        R.init(j)
	    };
	    h.classes.Stepper.prototype = {_class: "stepper", _defaults: {min: 0, max: 100, step: 1}};
	    h.presetShort("stepper", "Stepper");
	    h.classes.Switch = function (d, f) {
	        var b, g, j, i = this, f = f || {};
	        a.extend(f, {changeEvent: "click", min: 0, max: 1, step: 1, live: !1, round: !1, handle: !1, highlight: !1});
	        h.classes.Slider.call(this, d, f, !0);
	        i._readValue = function () {
	            return d.checked ? 1 : 0
	        };
	        i._fillValue = function (a, d, f) {
	            b.prop("checked", !!a);
	            f && b.change()
	        };
	        i._onTap = function (a) {
	            i._setVal(a ?
	                0 : 1)
	        };
	        i.__onInit = function () {
	            j = i.settings;
	            b = a(d);
	            g = b.parent();
	            b.attr("data-role", "switch").after('<span class="mbsc-progress-cont mbsc-switch-track"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-slider-handle-cont"><span class="mbsc-slider-handle mbsc-switch-handle" data-index="0"><span class="mbsc-switch-txt-off">' + j.offText + '</span><span class="mbsc-switch-txt-on">' + j.onText + "</span></span></span></span></span>");
	            i._$track = g.find(".mbsc-progress-track")
	        };
	        i.getVal = function () {
	            return d.checked
	        };
	        i.setVal = function (a, b, d) {
	            i._setVal(a ? 1 : 0, b, d)
	        };
	        i.init(f)
	    };
	    h.classes.Switch.prototype = {_class: "switch", _css: "mbsc-switch", _hasTheme: !0, _defaults: {}};
	    h.presetShort("switch", "Switch");
	    a(function () {
	        a("[mbsc-enhance]").each(function () {
	            a(this).mobiscroll().form()
	        });
	        a(document).on("mbsc-enhance", function (d, f) {
	            a(d.target).is("[mbsc-enhance]") ? a(d.target).mobiscroll().form(f) : a("[mbsc-enhance]", d.target).each(function () {
	                a(this).mobiscroll().form(f)
	            })
	        });
	        a(document).on("mbsc-refresh", function (d) {
	            a(d.target).is("[mbsc-enhance]") ?
	                a(d.target).mobiscroll("refresh") : a("[mbsc-enhance]", d.target).each(function () {
	                a(this).mobiscroll("refresh")
	            })
	        })
	    })
	})($);
	(function (a, n, t, w) {
	    var n = a.mobiscroll, h = n.classes, j = n.util, d = j.jsPrefix, f = j.has3d, s = j.hasFlex, r = j.getCoord, b = j.constrain, g = j.testTouch;
	    n.presetShort("scroller", "Scroller", !1);
	    h.Scroller = function (P, i, n) {
	        function u(c) {
	            if (g(c, this) && !X && !aa && !M && !I(this) && a.mobiscroll.running && (c.preventDefault(), c.stopPropagation(), R = "clickpick" != F.mode, X = a(".dw-ul", this), L(X), ha = (Y = pa[da] !== w) ? Math.round(-j.getPosition(X, !0) / p) : ia[da], E = r(c, "Y"), ea = new Date, ga = E, G(X, da, ha, 0.001), R && X.closest(".dwwl").addClass("dwa"),
	                "mousedown" === c.type))a(t).on("mousemove", A).on("mouseup", o)
	        }

	        function A(a) {
	            if (X && R && (a.preventDefault(), a.stopPropagation(), ga = r(a, "Y"), 3 < Math.abs(ga - E) || Y))G(X, da, b(ha + (E - ga) / p, fa - 1, v + 1)), Y = !0
	        }

	        function o(c) {
	            if (X) {
	                var e = new Date - ea, d = b(Math.round(ha + (E - ga) / p), fa - 1, v + 1), g = d, i, l = X.offset().top;
	                c.stopPropagation();
	                "mouseup" === c.type && a(t).off("mousemove", A).off("mouseup", o);
	                f && 300 > e ? (i = (ga - E) / e, e = i * i / F.speedUnit, 0 > ga - E && (e = -e)) : e = ga - E;
	                if (Y)g = b(Math.round(ha - e / p), fa, v), e = i ? Math.max(0.1, Math.abs((g - d) /
	                        i) * F.timeUnit) : 0.1; else {
	                    var d = Math.floor((ga - l) / p), k = a(a(".dw-li", X)[d]);
	                    i = k.hasClass("dw-v");
	                    l = R;
	                    e = 0.1;
	                    !1 !== T("onValueTap", [k]) && i ? g = d : l = !0;
	                    l && i && (k.addClass("dw-hl"), setTimeout(function () {
	                        k.removeClass("dw-hl")
	                    }, 100));
	                    if (!V && (!0 === F.confirmOnTap || F.confirmOnTap[da]) && k.hasClass("dw-sel")) {
	                        C.select();
	                        X = !1;
	                        return
	                    }
	                }
	                R && H(X, da, g, 0, e, !0);
	                X = !1
	            }
	        }

	        function B(c) {
	            M = a(this);
	            g(c, this) && a.mobiscroll.running && y(c, M.closest(".dwwl"), M.hasClass("dwwbp") ? x : J);
	            if ("mousedown" === c.type)a(t).on("mouseup", D)
	        }

	        function D(c) {
	            M =
	                null;
	            aa && (clearInterval(W), aa = !1);
	            "mouseup" === c.type && a(t).off("mouseup", D)
	        }

	        function k(c) {
	            38 == c.keyCode ? y(c, a(this), J) : 40 == c.keyCode && y(c, a(this), x)
	        }

	        function e() {
	            aa && (clearInterval(W), aa = !1)
	        }

	        function q(c) {
	            if (!I(this) && a.mobiscroll.running) {
	                c.preventDefault();
	                var c = c.originalEvent || c, e = c.deltaY || c.wheelDelta || c.detail, d = a(".dw-ul", this);
	                L(d);
	                G(d, da, b(((0 > e ? -20 : 20) - Z[da]) / p, fa - 1, v + 1));
	                clearTimeout(Q);
	                Q = setTimeout(function () {
	                    H(d, da, Math.round(ia[da]), 0 < e ? 1 : 2, 0.1)
	                }, 200)
	            }
	        }

	        function y(a, c, b) {
	            a.stopPropagation();
	            a.preventDefault();
	            if (!aa && !I(c) && !c.hasClass("dwa")) {
	                aa = !0;
	                var e = c.find(".dw-ul");
	                L(e);
	                clearInterval(W);
	                W = setInterval(function () {
	                    b(e)
	                }, F.delay);
	                b(e)
	            }
	        }

	        function I(c) {
	            return a.isArray(F.readonly) ? (c = a(".dwwl", N).index(c), F.readonly[c]) : F.readonly
	        }

	        function m(c) {
	            var b = '<div class="dw-bf">', c = Ba[c], e = 1, d = c.labels || [], f = c.values || [], g = c.keys || f;
	            a.each(f, function (c, f) {
	                0 === e % 20 && (b += '</div><div class="dw-bf">');
	                b += '<div role="option" aria-selected="false" class="dw-li dw-v" data-val="' + g[c] + '"' + (d[c] ? ' aria-label="' +
	                    d[c] + '"' : "") + ' style="height:' + p + "px;line-height:" + p + 'px;"><div class="dw-i"' + (1 < ka ? ' style="line-height:' + Math.round(p / ka) + "px;font-size:" + Math.round(0.8 * (p / ka)) + 'px;"' : "") + ">" + f + C._processItem(a, 0.2) + "</div></div>";
	                e++
	            });
	            return b += "</div>"
	        }

	        function L(c) {
	            V = c.closest(".dwwl").hasClass("dwwms");
	            fa = a(".dw-li", c).index(a(V ? ".dw-li" : ".dw-v", c).eq(0));
	            v = Math.max(fa, a(".dw-li", c).index(a(V ? ".dw-li" : ".dw-v", c).eq(-1)) - (V ? F.rows - ("scroller" == F.mode ? 1 : 3) : 0));
	            da = a(".dw-ul", N).index(c)
	        }

	        function K(a) {
	            var c = F.headerText;
	            return c ? "function" === typeof c ? c.call(P, a) : c.replace(/\{value\}/i, a) : ""
	        }

	        function U(a, c) {
	            clearTimeout(pa[c]);
	            delete pa[c];
	            a.closest(".dwwl").removeClass("dwa")
	        }

	        function G(a, c, b, e, g) {
	            var i = -b * p, l = a[0].style;
	            i == Z[c] && pa[c] || (Z[c] = i, f ? (l[d + "Transition"] = j.prefix + "transform " + (e ? e.toFixed(3) : 0) + "s ease-out", l[d + "Transform"] = "translate3d(0," + i + "px,0)") : l.top = i + "px", pa[c] && U(a, c), e && g && (a.closest(".dwwl").addClass("dwa"), pa[c] = setTimeout(function () {
	                U(a, c)
	            }, 1E3 * e)), ia[c] = b)
	        }

	        function S(c, e, d, f, g) {
	            var i = a('.dw-li[data-val="' +
	                c + '"]', e), l = a(".dw-li", e), c = l.index(i), o = l.length;
	            if (f)L(e); else if (!i.hasClass("dw-v")) {
	                for (var k = i, h = 0, x = 0; 0 <= c - h && !k.hasClass("dw-v");)h++, k = l.eq(c - h);
	                for (; c + x < o && !i.hasClass("dw-v");)x++, i = l.eq(c + x);
	                (x < h && x && 2 !== d || !h || 0 > c - h || 1 == d) && i.hasClass("dw-v") ? c += x : (i = k, c -= h)
	            }
	            d = i.hasClass("dw-sel");
	            g && (f || (a(".dw-sel", e).removeAttr("aria-selected"), i.attr("aria-selected", "true")), a(".dw-sel", e).removeClass("dw-sel"), i.addClass("dw-sel"));
	            return {
	                selected: d, v: f ? b(c, fa, v) : c, val: i.hasClass("dw-v") || f ? i.attr("data-val") :
	                    null
	            }
	        }

	        function c(c, b, e, d, f) {
	            !1 !== T("validate", [N, b, c, d]) && (a(".dw-ul", N).each(function (e) {
	                var g = a(this), i = g.closest(".dwwl").hasClass("dwwms"), l = e == b || b === w, i = S(C._tempWheelArray[e], g, d, i, !0);
	                if (!i.selected || l)C._tempWheelArray[e] = i.val, G(g, e, i.v, l ? c : 0.1, l ? f : !1)
	            }), T("onValidated", [b]), C._tempValue = F.formatValue(C._tempWheelArray, C), C.live && (C._hasValue = e || C._hasValue, l(e, e, 0, !0)), C._header.html(K(C._tempValue)), e && T("onChange", [C._tempValue]))
	        }

	        function H(e, d, f, g, i, l) {
	            f = b(f, fa, v);
	            C._tempWheelArray[d] =
	                a(".dw-li", e).eq(f).attr("data-val");
	            G(e, d, f, i, l);
	            setTimeout(function () {
	                c(i, d, !0, g, l)
	            }, 10)
	        }

	        function x(a) {
	            var c = ia[da] + 1;
	            H(a, da, c > v ? fa : c, 1, 0.1)
	        }

	        function J(a) {
	            var c = ia[da] - 1;
	            H(a, da, c < fa ? v : c, 2, 0.1)
	        }

	        function l(a, b, e, d, f) {
	            C._isVisible && !d && c(e);
	            C._tempValue = F.formatValue(C._tempWheelArray, C);
	            f || (C._wheelArray = C._tempWheelArray.slice(0), C._value = C._hasValue ? C._tempValue : null);
	            a && (T("onValueFill", [C._hasValue ? C._tempValue : "", b]), C._isInput && ua.val(C._hasValue ? C._tempValue : ""), b && (C._preventChange = !0, ua.change()))
	        }

	        var N, M, R, p, V, Z, F, Q, T, aa, Y, E, ea, ga, ha, fa, v, X, da, ka, W, C = this, ua = a(P), pa = {}, ia = {}, Ba = [];
	        h.Frame.call(this, P, i, !0);
	        C.setVal = C._setVal = function (c, b, e, d, f) {
	            C._hasValue = null !== c && c !== w;
	            C._tempWheelArray = a.isArray(c) ? c.slice(0) : F.parseValue.call(P, c, C) || [];
	            l(b, e === w ? b : e, f, !1, d)
	        };
	        C.getVal = C._getVal = function (a) {
	            a = C._hasValue || a ? C[a ? "_tempValue" : "_value"] : null;
	            return j.isNumeric(a) ? +a : a
	        };
	        C.setArrayVal = C.setVal;
	        C.getArrayVal = function (a) {
	            return a ? C._tempWheelArray : C._wheelArray
	        };
	        C.setValue = function (a, c, b, e, d) {
	            C.setVal(a,
	                c, d, e, b)
	        };
	        C.getValue = C.getArrayVal;
	        C.changeWheel = function (b, e, d) {
	            if (N) {
	                var f = 0, g = b.length;
	                a.each(F.wheels, function (i, l) {
	                    a.each(l, function (i, l) {
	                        if (-1 < a.inArray(f, b) && (Ba[f] = l, a(".dw-ul", N).eq(f).html(m(f)), g--, !g))return C.position(), c(e, w, d), !1;
	                        f++
	                    });
	                    if (!g)return !1
	                })
	            }
	        };
	        C.getValidCell = S;
	        C.scroll = G;
	        C._processItem = new Function("$, p", function () {
	            var a = [5, 2], c;
	            a:{
	                c = a[0];
	                var b;
	                for (b = 0; 16 > b; ++b)if (1 == c * b % 16) {
	                    c = [b, a[1]];
	                    break a
	                }
	                c = void 0
	            }
	            a = c[0];
	            c = c[1];
	            b = "";
	            var e;
	            for (e = 0; 1062 > e; ++e)b += "0123456789abcdef"[((a *
	            "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[e]) -
	            a * c) % 16 + 16) % 16];
	            c = b;
	            b = c.length;
	            a = [];
	            for (e = 0; e < b; e += 2)a.push(c[e] + c[e + 1]);
	            c = "";
	            b = a.length;
	            for (e = 0; e < b; e++)c += String.fromCharCode(parseInt(a[e], 16));
	            c = c.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
	            return c
	        }());
	        C._generateContent = function () {
	            var c, b = "", e = 0;
	            a.each(F.wheels, function (d, f) {
	                b += '<div class="mbsc-w-p dwc' + ("scroller" != F.mode ? " dwpm" : " dwsc") + (F.showLabel ? "" : " dwhl") + '"><div class="dwwc"' + (F.maxWidth ? "" : ' style="max-width:600px;"') + ">" + (s ? "" : '<table class="dw-tbl" cellpadding="0" cellspacing="0"><tr>');
	                a.each(f, function (a, d) {
	                    Ba[e] = d;
	                    c = d.label !==
	                    w ? d.label : a;
	                    b += "<" + (s ? "div" : "td") + ' class="dwfl" style="' + (F.fixedWidth ? "width:" + (F.fixedWidth[e] || F.fixedWidth) + "px;" : (F.minWidth ? "min-width:" + (F.minWidth[e] || F.minWidth) + "px;" : "min-width:" + F.width + "px;") + (F.maxWidth ? "max-width:" + (F.maxWidth[e] || F.maxWidth) + "px;" : "")) + '"><div class="dwwl dwwl' + e + (d.multiple ? " dwwms" : "") + '">' + ("scroller" != F.mode ? '<div class="dwb-e dwwb dwwbp ' + (F.btnPlusClass || "") + '" style="height:' + p + "px;line-height:" + p + 'px;"><span>+</span></div><div class="dwb-e dwwb dwwbm ' + (F.btnMinusClass ||
	                        "") + '" style="height:' + p + "px;line-height:" + p + 'px;"><span>&ndash;</span></div>' : "") + '<div class="dwl">' + c + '</div><div tabindex="0" aria-live="off" aria-label="' + c + '" role="listbox" class="dwww"><div class="dww" style="height:' + F.rows * p + 'px;"><div class="dw-ul" style="margin-top:' + (d.multiple ? "scroller" == F.mode ? 0 : p : F.rows / 2 * p - p / 2) + 'px;">';
	                    b += m(e) + '</div></div><div class="dwwo"></div></div><div class="dwwol"' + (F.selectedLineHeight ? ' style="height:' + p + "px;margin-top:-" + (p / 2 + (F.selectedLineBorder || 0)) +
	                        'px;"' : "") + "></div></div>" + (s ? "</div>" : "</td>");
	                    e++
	                });
	                b += (s ? "" : "</tr></table>") + "</div></div>"
	            });
	            return b
	        };
	        C._attachEvents = function (a) {
	            a.on("keydown", ".dwwl", k).on("keyup", ".dwwl", e).on("touchstart mousedown", ".dwwl", u).on("touchmove", ".dwwl", A).on("touchend", ".dwwl", o).on("touchstart mousedown", ".dwwb", B).on("touchend touchcancel", ".dwwb", D);
	            if (F.mousewheel)a.on("wheel mousewheel", ".dwwl", q)
	        };
	        C._markupReady = function (a) {
	            N = a;
	            Z = {};
	            c()
	        };
	        C._fillValue = function () {
	            C._hasValue = !0;
	            l(!0, !0, 0, !0)
	        };
	        C._readValue =
	            function () {
	                var a = ua.val() || "";
	                "" !== a && (C._hasValue = !0);
	                C._tempWheelArray = C._hasValue && C._wheelArray ? C._wheelArray.slice(0) : F.parseValue.call(P, a, C) || [];
	                l()
	            };
	        C._processSettings = function () {
	            F = C.settings;
	            T = C.trigger;
	            p = F.height;
	            ka = F.multiline;
	            C._isLiquid = "liquid" === (F.layout || (/top|bottom/.test(F.display) && 1 == F.wheels.length ? "liquid" : ""));
	            F.formatResult && (F.formatValue = F.formatResult);
	            1 < ka && (F.cssClass = (F.cssClass || "") + " dw-ml");
	            "scroller" != F.mode && (F.rows = Math.max(3, F.rows))
	        };
	        C._selectedValues = {};
	        n ||
	        C.init(i)
	    };
	    h.Scroller.prototype = {
	        _hasDef: !0,
	        _hasTheme: !0,
	        _hasLang: !0,
	        _hasPreset: !0,
	        _class: "scroller",
	        _defaults: a.extend({}, h.Frame.prototype._defaults, {
	            minWidth: 80,
	            height: 40,
	            rows: 3,
	            multiline: 1,
	            delay: 300,
	            readonly: !1,
	            showLabel: !0,
	            confirmOnTap: !0,
	            wheels: [],
	            mode: "scroller",
	            preset: "",
	            speedUnit: 0.0012,
	            timeUnit: 0.08,
	            formatValue: function (a) {
	                return a.join(" ")
	            },
	            parseValue: function (b, d) {
	                var f = [], g = [], h = 0, o, j;
	                null !== b && b !== w && (f = (b + "").split(" "));
	                a.each(d.settings.wheels, function (b, d) {
	                    a.each(d, function (b, d) {
	                        j =
	                            d.keys || d.values;
	                        o = j[0];
	                        a.each(j, function (a, b) {
	                            if (f[h] == b)return o = b, !1
	                        });
	                        g.push(o);
	                        h++
	                    })
	                });
	                return g
	            }
	        })
	    };
	    n.themes.scroller = n.themes.frame
	})($, window, document);
	(function (a, n) {
	    var t = a.mobiscroll, w = t.util.isNumeric, h = function () {
	    }, j = t.classes;
	    j.Numpad = function (d, f, h) {
	        function r(c) {
	            var f, g = (f = B.validate.call(d, k.slice(0), U, m) || []) && f.disabled || [];
	            m._isValid = f.invalid ? !1 : !0;
	            m._tempValue = B.formatValue.call(d, k.slice(0), U, m);
	            o = k.length;
	            e = f.length || q;
	            if (m._isVisible && a.mobiscroll.running) {
	                a(".mbsc-np-ph", O).each(function (c) {
	                    a(this).html("ltr" == B.fill ? c >= o ? A : D || k[c] : c >= q - e ? c + o < q ? A : D || k[c + o - q] : "")
	                });
	                a(".mbsc-np-cph", O).each(function () {
	                    a(this).html(U[a(this).attr("data-var")] ||
	                        a(this).attr("data-ph"))
	                });
	                if (o === q)for (f = 0; 9 >= f; f++)g.push(f);
	                a(".mbsc-np-btn", O).removeClass(u);
	                for (f = 0; f < g.length; f++)a('.mbsc-np-btn[data-val="' + g[f] + '"]', O).addClass(u);
	                m._isValid ? a(".dwb-s .dwb", O).removeClass(u) : a(".dwb-s .dwb", O).addClass(u);
	                m.live && (m._hasValue = c || m._hasValue, b(c))
	            }
	        }

	        function b(c, b, e, d) {
	            b && r();
	            d || (y = k.slice(0), G = a.extend({}, U), t = K.slice(0), m._value = m._tempValue);
	            c && (m._isInput && I.val(m._hasValue && m._isValid ? m._value : ""), e && (m._preventChange = !0, I.change()))
	        }

	        function g(a) {
	            var b,
	                e = a || [], d = [];
	            K = [];
	            U = {};
	            for (a = 0; a < e.length; a++)/:/.test(e[a]) ? (b = e[a].split(":"), U[b[0]] = b[1], K.push(b[0])) : (d.push(e[a]), K.push("digit"));
	            return d
	        }

	        function P(c, b) {
	            if (!(!o && !b && !B.allowLeadingZero || c.hasClass("dwb-d") || c.hasClass("mbsc-np-btn-empty")) && o < q && a.mobiscroll.running)K.push("digit"), k.push(b), r(!0)
	        }

	        function i() {
	            var a, b, e = K.pop();
	            if (o || "digit" !== e) {
	                if ("digit" !== e && U[e]) {
	                    delete U[e];
	                    b = K.slice(0);
	                    K = [];
	                    for (a = 0; a < b.length; a++)b[a] !== e && K.push(b[a])
	                } else k.pop();
	                r(!0)
	            }
	        }

	        var O, u, A, o, B, D, k, e, q, y,
	            I = a(d), m = this, t = [], K = [], U = {}, G = {}, S = {
	                48: 0,
	                49: 1,
	                50: 2,
	                51: 3,
	                52: 4,
	                53: 5,
	                54: 6,
	                55: 7,
	                56: 8,
	                57: 9,
	                96: 0,
	                97: 1,
	                98: 2,
	                99: 3,
	                100: 4,
	                101: 5,
	                102: 6,
	                103: 7,
	                104: 8,
	                105: 9
	            };
	        j.Frame.call(this, d, f, !0);
	        m.setVal = m._setVal = function (c, e, f, i) {
	            m._hasValue = null !== c && c !== n;
	            k = g(a.isArray(c) ? c.slice(0) : B.parseValue.call(d, c, m));
	            b(e, !0, f === n ? e : f, i)
	        };
	        m.getVal = m._getVal = function (a) {
	            return m._hasValue || a ? m[a ? "_tempValue" : "_value"] : null
	        };
	        m.setArrayVal = m.setVal;
	        m.getArrayVal = function (a) {
	            return a ? k.slice(0) : m._hasValue ? y.slice(0) : null
	        };
	        m.setValue =
	            m.setVal;
	        m.getValue = m.getArrayVal;
	        m._processItem = new Function("$, p", function () {
	            var a = [5, 2], b;
	            a:{
	                b = a[0];
	                var e;
	                for (e = 0; 16 > e; ++e)if (1 == b * e % 16) {
	                    b = [e, a[1]];
	                    break a
	                }
	                b = void 0
	            }
	            a = b[0];
	            b = b[1];
	            e = "";
	            var d;
	            for (d = 0; 1062 > d; ++d)e += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[d]) -
	            a * b) % 16 + 16) % 16];
	            b = e;
	            e = b.length;
	            a = [];
	            for (d = 0; d < e; d += 2)a.push(b[d] + b[d + 1]);
	            b = "";
	            e = a.length;
	            for (d = 0; d < e; d++)b += String.fromCharCode(parseInt(a[d], 16));
	            b = b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
	            return b
	        }());
	        m._readValue = function () {
	            var a = I.val() || "";
	            "" !== a && (m._hasValue = !0);
	            D ? (U = {}, K = [], k = []) : (U = m._hasValue ? G : {}, K = m._hasValue ? t : [], k = m._hasValue && y ? y.slice(0) : g(B.parseValue.call(d, a, m)), b(!1, !0))
	        };
	        m._fillValue = function () {
	            m._hasValue = !0;
	            b(!0, !1, !0)
	        };
	        m._generateContent = function () {
	            var c, b, e, d = 1;
	            c = "";
	            var f;
	            f = "" + ('<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' +
	                B.deleteText + '" class="mbsc-np-del dwb-e mbsc-ic mbsc-ic-' + B.deleteIcon + '"></div><div class="mbsc-np-dsp">');
	            c = B.template.replace(/d/g, '<span class="mbsc-np-ph">' + A + "</span>").replace(/&#100;/g, "d");
	            c = c.replace(/{([a-zA-Z0-9]*)\:?([a-zA-Z0-9\-\_]*)}/g, '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>');
	            f = f + c + '</div></div><div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">';
	            for (c = 0; 4 > c; c++) {
	                f += '<div class="mbsc-np-row">';
	                for (b = 0; 3 > b; b++)e = d, 10 == d || 12 == d ? e = "" : 11 == d && (e = 0), f =
	                    "" === e ? 10 == d && B.leftButton ? f + ('<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom dwb-e" ' + (B.leftButton.variable ? 'data-var="' + B.leftButton.variable + '"' : "") + ' data-val="' + B.leftButton.value + '" >' + B.leftButton.text + "</div>") : 12 == d && B.rightButton ? f + ('<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom dwb-e" ' + (B.rightButton.variable ? 'data-var="' + B.rightButton.variable + '"' : "") + ' data-val="' + B.rightButton.value + '" >' + B.rightButton.text + "</div>") : f + '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>' :
	                    f + ('<div tabindex="0" role="button" class="mbsc-np-btn dwb-e" data-val="' + e + '">' + e + m._processItem(a, 0.2) + "</div>"), d++;
	                f += "</div>"
	            }
	            return f + "</div></div>"
	        };
	        m._markupReady = function () {
	            O = m._markup;
	            r()
	        };
	        m._attachEvents = function (c) {
	            c.on("keydown", function (c) {
	                S[c.keyCode] !== n ? P(a('.mbsc-np-btn[data-val="' + S[c.keyCode] + '"]'), S[c.keyCode]) : 8 == c.keyCode && (c.preventDefault(), i())
	            });
	            m.tap(a(".mbsc-np-btn", c), function () {
	                var c = a(this);
	                if (c.hasClass("mbsc-np-btn-custom")) {
	                    var b = c.attr("data-val"), d = c.attr("data-var");
	                    if (!c.hasClass("dwb-d")) {
	                        d && (c = d.split(":"), K.push(c[0]), U[c[0]] = c[1]);
	                        if (b.length + o <= e)for (c = 0; c < b.length; ++c)K.push("digit"), k.push(w(b[c]) ? +b[c] : b[c]);
	                        r(!0)
	                    }
	                } else P(c, +c.attr("data-val"))
	            });
	            m.tap(a(".mbsc-np-del", c), i)
	        };
	        m._processSettings = function () {
	            B = m.settings;
	            B.headerText = (B.headerText || "").replace("{value}", "");
	            B.cssClass = (B.cssClass || "") + " mbsc-np";
	            B.template = B.template.replace(/\\d/, "&#100;");
	            A = B.placeholder;
	            q = (B.template.match(/d/g) || []).length;
	            u = "dwb-d " + (B.disabledClass || "");
	            (D = B.mask) &&
	            I.is("input") && I.attr("type", "password")
	        };
	        m._indexOf = function (a, b) {
	            var e;
	            for (e = 0; e < a.length; ++e)if (a[e].toString() === b.toString())return e;
	            return -1
	        };
	        h || m.init(f)
	    };
	    j.Numpad.prototype = {
	        _hasDef: !0,
	        _hasTheme: !0,
	        _hasLang: !0,
	        _hasPreset: !0,
	        _class: "numpad",
	        _defaults: a.extend({}, j.Frame.prototype._defaults, {
	            template: "dd.dd",
	            placeholder: "0",
	            deleteIcon: "backspace",
	            allowLeadingZero: !1,
	            fill: "rtl",
	            deleteText: "Delete",
	            validate: h,
	            parseValue: h,
	            formatValue: function (d, f, h) {
	                var j, b = 1;
	                j = h.settings;
	                var h = j.placeholder,
	                    g = j.template, n = d.length, i = g.length, O = "";
	                for (j = 0; j < i; j++)"d" == g[i - j - 1] ? (O = b <= n ? d[n - b] + O : h + O, b++) : O = g[i - j - 1] + O;
	                a.each(f, function (a, b) {
	                    O = O.replace("{" + a + "}", b)
	                });
	                return a("<div>" + O + "</div>").text()
	            }
	        })
	    };
	    t.themes.numpad = t.themes.frame;
	    t.presetShort("numpad", "Numpad", !1)
	})($);
	(function (a) {
	    var n = a.mobiscroll, t = {min: 0, max: 99.99, scale: 2, prefix: "", suffix: "", returnAffix: !1};
	    n.presets.numpad.decimal = function (w) {
	        function h(a) {
	            var h;
	            h = a.slice(0);
	            for (a = 0; h.length;)a = 10 * a + h.shift();
	            for (h = 0; h < d.scale; h++)a /= 10;
	            return a
	        }

	        var j = a.extend({}, w.settings), d = a.extend(w.settings, t, j);
	        w.getVal = function (a) {
	            a = w._getVal(a);
	            return n.util.isNumeric(a) ? +a : a
	        };
	        return {
	            template: d.prefix.replace(/d/g, "\\d") + Array((Math.floor(d.max) + "").length + 1).join("d") + (d.scale ? "." + Array(d.scale + 1).join("d") : "") +
	            d.suffix.replace(/d/g, "\\d"), parseValue: function (a) {
	                var h, j;
	                h = a || d.defaultValue;
	                a = [];
	                if (h && (j = (h + "").match(/\d+\.?\d*/g))) {
	                    j = (+j[0]).toFixed(d.scale);
	                    for (h = 0; h < j.length; h++)"." != j[h] && (+j[h] ? a.push(+j[h]) : a.length && a.push(0))
	                }
	                return a
	            }, formatValue: function (a) {
	                a = h(a).toFixed(d.scale);
	                return d.returnAffix ? d.prefix + a + d.suffix : a
	            }, validate: function (f) {
	                var j = h(f).toFixed(d.scale), n = [];
	                !f.length && !d.allowLeadingZero && n.push(0);
	                w.isVisible() && a(".mbsc-np-dsp", w._markup).html(d.prefix + j + d.suffix);
	                return {
	                    disabled: n,
	                    invalid: +j > d.max || +j < d.min || (d.invalid ? -1 != w._indexOf(d.invalid, +j) : !1)
	                }
	            }
	        }
	    }
	})($);
	(function (a) {
	    function n(a) {
	        for (var d = 0, f = 1, h = 0; a.length;)3 < d ? f = 3600 : 1 < d && (f = 60), h += a.pop() * f * (d % 2 ? 10 : 1), d++;
	        return h
	    }

	    var t = a.mobiscroll, w = ["h", "m", "s"], h = {
	        min: 0,
	        max: 362439,
	        defaultValue: 0,
	        hourTextShort: "h",
	        minuteTextShort: "m",
	        secTextShort: "s"
	    };
	    t.presets.numpad.timespan = function (j) {
	        function d(b) {
	            var d, f = "", i = 3600;
	            a(w).each(function (a, h) {
	                d = Math.floor(b / i);
	                b -= d * i;
	                i /= 60;
	                if (0 < d || "s" == h && !f)f = f + (f ? " " : "") + d + r[h]
	            });
	            return f
	        }

	        var f = a.extend({}, j.settings), s = a.extend(j.settings, h, f), r = {
	            h: s.hourTextShort.replace(/d/g,
	                "\\d"), m: s.minuteTextShort.replace(/d/g, "\\d"), s: s.secTextShort.replace(/d/g, "\\d")
	        }, f = 'd<span class="mbsc-np-sup mbsc-np-time">' + r.s + "</span>";
	        9 < s.max && (f = "d" + f);
	        99 < s.max && (f = '<span class="mbsc-np-ts-m">' + (639 < s.max ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + r.m + "</span>" + f);
	        6039 < s.max && (f = '<span class="mbsc-np-ts-h">' + (38439 < s.max ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + r.h + "</span>" + f);
	        j.setVal = function (a, f, h, i) {
	            t.util.isNumeric(a) && (a = d(a));
	            return j._setVal(a,
	                f, h, i)
	        };
	        j.getVal = function (a) {
	            return j._hasValue || a ? n(j.getArrayVal(a)) : null
	        };
	        return {
	            template: f, parseValue: function (b) {
	                var f, h = b || d(s.defaultValue), i = [];
	                h && a(w).each(function (a, b) {
	                    (f = RegExp("(\\d+)" + r[b], "gi").exec(h)) ? (f = +f[1], 9 < f ? (i.push(Math.floor(f / 10)), i.push(f % 10)) : (i.length && i.push(0), (f || i.length) && i.push(f))) : i.length && (i.push(0), i.push(0))
	                });
	                return i
	            }, formatValue: function (a) {
	                return d(n(a))
	            }, validate: function (a) {
	                var d = n(a.slice(0)), f = [];
	                a.length || f.push(0);
	                return {
	                    disabled: f, invalid: d > s.max ||
	                    d < s.min || (s.invalid ? -1 != j._indexOf(s.invalid, +d) : !1)
	                }
	            }
	        }
	    }
	})($);
	(function (a) {
	    var n = {timeFormat: "hh:ii A", amText: "am", pmText: "pm"};
	    a.mobiscroll.presets.numpad.time = function (t) {
	        function w(b, d) {
	            var f, i = "";
	            for (f = 0; f < b.length; ++f)i += b[f] + (f % 2 == (1 == b.length % 2 ? 0 : 1) && f != b.length - 1 ? ":" : "");
	            a.each(d, function (a, b) {
	                i += " " + b
	            });
	            return i
	        }

	        var h = a.extend({}, t.settings), j = a.extend(t.settings, n, h), d = j.timeFormat.split(":"), f = j.timeFormat.match(/a/i), s = f ? "a" == f[0] ? j.amText : j.amText.toUpperCase() : "", r = f ? "a" == f[0] ? j.pmText : j.pmText.toUpperCase() : "", b = 0, g = j.min ? "" + j.min.getHours() :
	            "", P = j.max ? "" + j.max.getHours() : "", i = j.min ? "" + (10 > j.min.getMinutes() ? "0" + j.min.getMinutes() : j.min.getMinutes()) : "", O = j.max ? "" + (10 > j.max.getMinutes() ? "0" + j.max.getMinutes() : j.max.getMinutes()) : "", u = j.min ? "" + (10 > j.min.getSeconds() ? "0" + j.min.getSeconds() : j.min.getSeconds()) : "", A = j.max ? "" + (10 > j.max.getSeconds() ? "0" + j.max.getSeconds() : j.max.getSeconds()) : "";
	        j.min && j.min.setFullYear(2014, 7, 20);
	        j.max && j.max.setFullYear(2014, 7, 20);
	        return {
	            placeholder: "-",
	            allowLeadingZero: !0,
	            template: (3 == d.length ? "dd:dd:dd" :
	                2 == d.length ? "dd:dd" : "dd") + (f ? '<span class="mbsc-np-sup">{ampm:--}</span>' : ""),
	            leftButton: f ? {text: s, variable: "ampm:" + s, value: "00"} : {text: ":00", value: "00"},
	            rightButton: f ? {text: r, variable: "ampm:" + r, value: "00"} : {text: ":30", value: "30"},
	            parseValue: function (a) {
	                var b, d = a || j.defaultValue, i = [];
	                if (d) {
	                    d += "";
	                    if (b = d.match(/\d/g))for (a = 0; a < b.length; a++)i.push(+b[a]);
	                    f && i.push("ampm:" + (d.match(RegExp(j.pmText, "gi")) ? r : s))
	                }
	                return i
	            },
	            formatValue: function (a, b) {
	                return w(a, b)
	            },
	            validate: function (a, h) {
	                var s = w(a, h), k = 3 <=
	                a.length ? new Date(2014, 7, 20, "" + a[0] + (0 === a.length % 2 ? a[1] : ""), "" + a[0 === a.length % 2 ? 2 : 1] + a[0 === a.length % 2 ? 3 : 2]) : "", e, q, n, r, m, L, K = [];
	                b = e = 2 * d.length;
	                a.length || (f && (K.push(0), K.push(j.leftButton.value)), K.push(j.rightButton.value));
	                if (!f && (2 > e - a.length || 1 != a[0] && (2 < a[0] || 3 < a[1]) && 2 >= e - a.length))K.push("30"), K.push("00");
	                if ((f ? 1 < a[0] || 2 < a[1] : 1 != a[0] && (2 < a[0] || 3 < a[1])) && a[0])a.unshift(0), b = e - 1;
	                if (a.length == e)for (e = 0; 9 >= e; ++e)K.push(e); else if (1 == a.length && f && 1 == a[0] || a.length && 0 === a.length % 2 || !f && 2 == a[0] &&
	                    3 < a[1] && 1 == a.length % 2)for (e = 6; 9 >= e; ++e)K.push(e);
	                n = void 0 !== a[1] ? "" + a[0] + a[1] : "";
	                r = +O == +(void 0 !== a[3] ? "" + a[2] + a[3] : 0);
	                if (j.invalid)for (e = 0; e < j.invalid.length; ++e)if (q = j.invalid[e].getHours(), m = j.invalid[e].getMinutes(), L = j.invalid[e].getSeconds(), q == +n)if (2 == d.length && (10 > m ? 0 : +("" + m)[0]) == +a[2]) {
	                    K.push(10 > m ? m : +("" + m)[1]);
	                    break
	                } else if ((10 > L ? 0 : +("" + L)[0]) == +a[4]) {
	                    K.push(10 > L ? L : +("" + L)[1]);
	                    break
	                }
	                if (j.min || j.max) {
	                    q = +g == +n;
	                    m = (n = +P == +n) && r;
	                    r = q && r;
	                    if (0 === a.length) {
	                        for (e = f ? 2 : 19 < g ? g[0] : 3; e <= (1 == g[0] ? 9 : g[0] -
	                        1); ++e)K.push(e);
	                        if (10 <= g && (K.push(0), 2 == g[0]))for (e = 3; 9 >= e; ++e)K.push(e);
	                        if (P && 10 > P || g && 10 <= g)for (e = P && 10 > P ? +P[0] + 1 : 0; e < (g && 10 <= g ? g[0] : 10); ++e)K.push(e)
	                    }
	                    if (1 == a.length) {
	                        if (0 === a[0])for (e = 0; e < g[0]; ++e)K.push(e);
	                        if (g && 0 !== a[0] && (f ? 1 == a[0] : 2 == a[0]))for (e = f ? 3 : 4; 9 >= e; ++e)K.push(e);
	                        if (a[0] == g[0])for (e = 0; e < g[1]; ++e)K.push(e);
	                        if (a[0] == P[0] && !f)for (e = +P[1] + 1; 9 >= e; ++e)K.push(e)
	                    }
	                    if (2 == a.length && (q || n))for (e = n ? +O[0] + 1 : 0; e < (q ? +i[0] : 10); ++e)K.push(e);
	                    if (3 == a.length && (n && a[2] == O[0] || q && a[2] == i[0]))for (e = n && a[2] ==
	                    O[0] ? +O[1] + 1 : 0; e < (q && a[2] == i[0] ? +i[1] : 10); ++e)K.push(e);
	                    if (4 == a.length && (r || m))for (e = m ? +A[0] + 1 : 0; e < (r ? +u[0] : 10); ++e)K.push(e);
	                    if (5 == a.length && (r && a[4] == u[0] || m && a[4] == A[0]))for (e = m && a[4] == A[0] ? +A[1] + 1 : 0; e < (r && a[4] == u[0] ? +u[1] : 10); ++e)K.push(e)
	                }
	                return {
	                    disabled: K,
	                    length: b,
	                    invalid: (f ? !RegExp("^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9]) (?:" + j.amText + "|" + j.pmText + ")$", "i").test(s) : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(s)) || (j.invalid ? -1 != t._indexOf(j.invalid, k) : !1) || !((j.min ? j.min <=
	                    k : 1) && (j.max ? k <= j.max : 1))
	                }
	            }
	        }
	    }
	})($);
	(function (a) {
	    var n = a.mobiscroll, t = {dateOrder: "mdy", dateFormat: "mm/dd/yy", delimiter: "/"};
	    n.presets.numpad.date = function (w) {
	        function h(a) {
	            return new Date(+("" + a[j] + a[j + 1] + a[j + 2] + a[j + 3]), +("" + a[d] + a[d + 1]) - 1, +("" + a[f] + a[f + 1]))
	        }

	        var j, d, f, s, r = [];
	        s = a.extend({}, w.settings);
	        var b = a.extend(w.settings, n.datetime.defaults, t, s), g = b.dateOrder, P = b.min ? "" + (b.getMonth(b.min) + 1) : 0, i = b.max ? "" + (b.getMonth(b.max) + 1) : 0, O = b.min ? "" + b.getDay(b.min) : 0, u = b.max ? "" + b.getDay(b.max) : 0, A = b.min ? "" + b.getYear(b.min) : 0, o = b.max ? "" + b.getYear(b.max) :
	            0, g = g.replace(/y+/gi, "yyyy"), g = g.replace(/m+/gi, "mm"), g = g.replace(/d+/gi, "dd");
	        j = g.toUpperCase().indexOf("Y");
	        d = g.toUpperCase().indexOf("M");
	        f = g.toUpperCase().indexOf("D");
	        g = "";
	        r.push({val: j, n: "yyyy"}, {val: d, n: "mm"}, {val: f, n: "dd"});
	        r.sort(function (a, b) {
	            return a.val - b.val
	        });
	        a.each(r, function (a, b) {
	            g += b.n
	        });
	        j = g.indexOf("y");
	        d = g.indexOf("m");
	        f = g.indexOf("d");
	        g = "";
	        for (s = 0; 8 > s; ++s)if (g += "d", s + 1 == j || s + 1 == d || s + 1 == f)g += b.delimiter;
	        w.getVal = function (a) {
	            return w._hasValue || a ? h(w.getArrayVal(a)) : null
	        };
	        return {
	            placeholder: "-",
	            fill: "ltr", allowLeadingZero: !0, template: g, parseValue: function (a) {
	                var d, f = [];
	                d = a || b.defaultValue;
	                a = n.datetime.parseDate(b.dateFormat, d);
	                if (d)for (d = 0; d < r.length; ++d)f = /m/i.test(r[d].n) ? f.concat(((9 > b.getMonth(a) ? "0" : "") + (b.getMonth(a) + 1)).split("")) : /d/i.test(r[d].n) ? f.concat(((10 > b.getDay(a) ? "0" : "") + b.getDay(a)).split("")) : f.concat((b.getYear(a) + "").split(""));
	                return f
	            }, formatValue: function (a) {
	                return n.datetime.formatDate(b.dateFormat, h(a))
	            }, validate: function (a) {
	                var g = h(a), k, e, q, n, s = [], m = void 0 !==
	                a[j + 3] ? "" + a[j] + a[j + 1] + a[j + 2] + a[j + 3] : "", r = void 0 !== a[d + 1] ? "" + a[d] + a[d + 1] : "", t = void 0 !== a[f + 1] ? "" + a[f] + a[f + 1] : "", U = "" + b.getMaxDayOfMonth(m || 2012, r - 1 || 0), G = A === m && +P === +r, S = o === m && +i === +r;
	                if (b.invalid)for (k = 0; k < b.invalid.length; ++k) {
	                    e = b.getYear(b.invalid[k]);
	                    q = b.getMonth(b.invalid[k]);
	                    n = b.getDay(b.invalid[k]);
	                    if (e == +m && q + 1 == +r && (10 > n ? 0 : +("" + n)[0]) == +a[f]) {
	                        s.push(10 > n ? n : +("" + n)[1]);
	                        break
	                    }
	                    if (q + 1 == +r && n == +t && ("" + e).substring(0, 3) == "" + a[j] + a[j + 1] + a[j + 2]) {
	                        s.push(("" + e)[3]);
	                        break
	                    }
	                    if (e == +m && n == +t && (10 > q ? 0 :
	                            +("" + (q + 1))[0]) == +a[d]) {
	                        s.push(10 > q ? q : +("" + (q + 1))[1]);
	                        break
	                    }
	                }
	                if ("31" == t && (a.length == d || a.length == d + 1))1 != a[d] ? s.push(2, 4, 6, 9, 11) : s.push(1);
	                "30" == t && 0 === a[d] && a.length <= d + 1 && s.push(2);
	                if (a.length == d) {
	                    for (k = o === m && 10 > +i ? 1 : 2; 9 >= k; ++k)s.push(k);
	                    A === m && 10 <= +P && s.push(0)
	                }
	                if (a.length == d + 1) {
	                    if (1 == a[d]) {
	                        for (k = o === m ? +i[1] + 1 : 3; 9 >= k; ++k)s.push(k);
	                        if (A == m)for (k = 0; k < +P[1]; ++k)s.push(k)
	                    }
	                    if (0 === a[d] && (s.push(0), o === m || A === m))for (k = o === m ? +t > +u ? +i : +i + 1 : 0; k <= (A === m ? +P - 1 : 9); ++k)s.push(k)
	                }
	                if (a.length == f) {
	                    for (k = S ? (10 < +u ? +u[0] : 0) + 1 : +U[0] + 1; 9 >= k; ++k)s.push(k);
	                    if (G)for (k = 0; k < (10 > +O ? 0 : O[0]); ++k)s.push(k)
	                }
	                if (a.length == f + 1) {
	                    if (3 <= a[f] || "02" == r)for (k = +U[1] + 1; 9 >= k; ++k)s.push(k);
	                    if (S && +u[0] == a[f])for (k = +u[1] + 1; 9 >= k; ++k)s.push(k);
	                    if (G && O[0] == a[f])for (k = 0; k < +O[1]; ++k)s.push(k);
	                    if (0 === a[f] && (s.push(0), S || G))for (k = S ? +u + 1 : 1; k <= (G ? +O - 1 : 9); ++k)s.push(k)
	                }
	                if (void 0 !== a[j + 2] && "02" == r && "29" == t)for (e = +("" + a[j] + a[j + 1] + a[j + 2] + 0); e <= +("" + a[j] + a[j + 1] + a[j + 2] + 9); ++e)s.push(!(0 === e % 4 && 0 !== e % 100 || 0 === e % 400) ? e % 10 : "");
	                if (a.length == j) {
	                    if (b.min)for (k =
	                                       0; k < +A[0]; ++k)s.push(k);
	                    if (b.max)for (k = +o[0] + 1; 9 >= k; ++k)s.push(k);
	                    s.push(0)
	                }
	                if (b.min || b.max)for (e = 1; 4 > e; ++e)if (a.length == j + e) {
	                    if (a[j + e - 1] == +A[e - 1] && (3 == e ? a[j + e - 2] == +A[e - 2] : 1))for (k = 0; k < +A[e] + (3 == e && a[d + 1] && +P > +r ? 1 : 0); ++k)s.push(k);
	                    if (a[j + e - 1] == +o[e - 1] && (3 == e ? a[j + e - 2] == +o[e - 2] : 1))for (k = +o[e] + (3 == e && +i < +r ? 0 : 1); 9 >= k; ++k)s.push(k)
	                }
	                return {
	                    disabled: s,
	                    invalid: !("Invalid Date" != g && (b.min ? b.min <= g : 1) && (b.max ? g <= b.max : 1)) || (b.invalid ? -1 != w._indexOf(b.invalid, g) : !1)
	                }
	            }
	        }
	    }
	})($);
	(function (a) {
	    var n = a.mobiscroll;
	    n.datetime = {
	        defaults: {
	            shortYearCutoff: "+10",
	            monthNames: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
	            monthNamesShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
	            dayNames: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
	            dayNamesShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
	            dayNamesMin: "S,M,T,W,T,F,S".split(","),
	            amText: "am",
	            pmText: "pm",
	            getYear: function (a) {
	                return a.getFullYear()
	            },
	            getMonth: function (a) {
	                return a.getMonth()
	            },
	            getDay: function (a) {
	                return a.getDate()
	            },
	            getDate: function (a, n, h, j, d, f, s) {
	                return new Date(a, n, h, j || 0, d || 0, f || 0, s || 0)
	            },
	            getMaxDayOfMonth: function (a, n) {
	                return 32 - (new Date(a, n, 32)).getDate()
	            },
	            getWeekNumber: function (a) {
	                a = new Date(a);
	                a.setHours(0, 0, 0);
	                a.setDate(a.getDate() + 4 - (a.getDay() || 7));
	                var n = new Date(a.getFullYear(), 0, 1);
	                return Math.ceil(((a - n) / 864E5 + 1) / 7)
	            }
	        }, formatDate: function (t, w, h) {
	            if (!w)return null;
	            var h = a.extend({}, n.datetime.defaults, h), j = function (a) {
	                for (var b =
	                    0; s + 1 < t.length && t.charAt(s + 1) == a;)b++, s++;
	                return b
	            }, d = function (a, b, d) {
	                b = "" + b;
	                if (j(a))for (; b.length < d;)b = "0" + b;
	                return b
	            }, f = function (a, b, d, f) {
	                return j(a) ? f[b] : d[b]
	            }, s, r, b = "", g = !1;
	            for (s = 0; s < t.length; s++)if (g)"'" == t.charAt(s) && !j("'") ? g = !1 : b += t.charAt(s); else switch (t.charAt(s)) {
	                case "d":
	                    b += d("d", h.getDay(w), 2);
	                    break;
	                case "D":
	                    b += f("D", w.getDay(), h.dayNamesShort, h.dayNames);
	                    break;
	                case "o":
	                    b += d("o", (w.getTime() - (new Date(w.getFullYear(), 0, 0)).getTime()) / 864E5, 3);
	                    break;
	                case "m":
	                    b += d("m", h.getMonth(w) + 1,
	                        2);
	                    break;
	                case "M":
	                    b += f("M", h.getMonth(w), h.monthNamesShort, h.monthNames);
	                    break;
	                case "y":
	                    r = h.getYear(w);
	                    b += j("y") ? r : (10 > r % 100 ? "0" : "") + r % 100;
	                    break;
	                case "h":
	                    r = w.getHours();
	                    b += d("h", 12 < r ? r - 12 : 0 === r ? 12 : r, 2);
	                    break;
	                case "H":
	                    b += d("H", w.getHours(), 2);
	                    break;
	                case "i":
	                    b += d("i", w.getMinutes(), 2);
	                    break;
	                case "s":
	                    b += d("s", w.getSeconds(), 2);
	                    break;
	                case "a":
	                    b += 11 < w.getHours() ? h.pmText : h.amText;
	                    break;
	                case "A":
	                    b += 11 < w.getHours() ? h.pmText.toUpperCase() : h.amText.toUpperCase();
	                    break;
	                case "'":
	                    j("'") ? b += "'" : g = !0;
	                    break;
	                default:
	                    b +=
	                        t.charAt(s)
	            }
	            return b
	        }, parseDate: function (t, w, h) {
	            var h = a.extend({}, n.datetime.defaults, h), j = h.defaultValue || new Date;
	            if (!t || !w)return j;
	            if (w.getTime)return w;
	            var w = "object" == typeof w ? w.toString() : w + "", d = h.shortYearCutoff, f = h.getYear(j), s = h.getMonth(j) + 1, r = h.getDay(j), b = -1, g = j.getHours(), P = j.getMinutes(), i = 0, O = -1, u = !1, A = function (a) {
	                (a = k + 1 < t.length && t.charAt(k + 1) == a) && k++;
	                return a
	            }, o = function (a) {
	                A(a);
	                a = w.substr(D).match(RegExp("^\\d{1," + ("@" == a ? 14 : "!" == a ? 20 : "y" == a ? 4 : "o" == a ? 3 : 2) + "}"));
	                if (!a)return 0;
	                D += a[0].length;
	                return parseInt(a[0], 10)
	            }, B = function (a, b, d) {
	                a = A(a) ? d : b;
	                for (b = 0; b < a.length; b++)if (w.substr(D, a[b].length).toLowerCase() == a[b].toLowerCase())return D += a[b].length, b + 1;
	                return 0
	            }, D = 0, k;
	            for (k = 0; k < t.length; k++)if (u)"'" == t.charAt(k) && !A("'") ? u = !1 : D++; else switch (t.charAt(k)) {
	                case "d":
	                    r = o("d");
	                    break;
	                case "D":
	                    B("D", h.dayNamesShort, h.dayNames);
	                    break;
	                case "o":
	                    b = o("o");
	                    break;
	                case "m":
	                    s = o("m");
	                    break;
	                case "M":
	                    s = B("M", h.monthNamesShort, h.monthNames);
	                    break;
	                case "y":
	                    f = o("y");
	                    break;
	                case "H":
	                    g = o("H");
	                    break;
	                case "h":
	                    g = o("h");
	                    break;
	                case "i":
	                    P = o("i");
	                    break;
	                case "s":
	                    i = o("s");
	                    break;
	                case "a":
	                    O = B("a", [h.amText, h.pmText], [h.amText, h.pmText]) - 1;
	                    break;
	                case "A":
	                    O = B("A", [h.amText, h.pmText], [h.amText, h.pmText]) - 1;
	                    break;
	                case "'":
	                    A("'") ? D++ : u = !0;
	                    break;
	                default:
	                    D++
	            }
	            100 > f && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (f <= ("string" != typeof d ? d : (new Date).getFullYear() % 100 + parseInt(d, 10)) ? 0 : -100));
	            if (-1 < b) {
	                s = 1;
	                r = b;
	                do {
	                    d = 32 - (new Date(f, s - 1, 32)).getDate();
	                    if (r <= d)break;
	                    s++;
	                    r -= d
	                } while (1)
	            }
	            g = h.getDate(f, s -
	                1, r, -1 == O ? g : O && 12 > g ? g + 12 : !O && 12 == g ? 0 : g, P, i);
	            return h.getYear(g) != f || h.getMonth(g) + 1 != s || h.getDay(g) != r ? j : g
	        }
	    };
	    n.formatDate = n.datetime.formatDate;
	    n.parseDate = n.datetime.parseDate
	})($);
	(function (a, n) {
	    var t = {invalid: [], showInput: !0, inputClass: ""};
	    a.mobiscroll.presets.scroller.list = function (w) {
	        function h(b, d, c, e) {
	            for (var f, g = 0; g < d;) {
	                var i = a(".dwwl" + g, b), h;
	                f = 0;
	                h = void 0;
	                for (var k = c, j = []; f < g;) {
	                    var p = e[f];
	                    for (h in k)if (k[h].key == p) {
	                        k = k[h].children;
	                        break
	                    }
	                    f++
	                }
	                for (f = 0; f < k.length;)k[f].invalid && j.push(k[f].key), f++;
	                h = j;
	                for (f = 0; f < h.length; f++)a('.dw-li[data-val="' + h[f] + '"]', i).removeClass("dw-v");
	                g++
	            }
	        }

	        function j(a, b) {
	            for (var c = []; a;)c[--a] = !0;
	            c[b] = !1;
	            return c
	        }

	        function d(a, b, c) {
	            var d = 0, e, g,
	                i = [[]], h = m;
	            if (b)for (e = 0; e < b; e++)O ? i[0][e] = {} : i[e] = [{}];
	            for (; d < a.length;) {
	                O ? i[0][d] = s(h, L[d]) : i[d] = [s(h, L[d])];
	                e = 0;
	                for (b = n; e < h.length && b === n;) {
	                    if (h[e].key == a[d] && (c !== n && d <= c || c === n))b = e;
	                    e++
	                }
	                if (b !== n && h[b].children)d++, h = h[b].children; else if ((g = f(h)) && g.children)d++, h = g.children; else break
	            }
	            return i
	        }

	        function f(a, b) {
	            if (!a)return !1;
	            for (var c = 0, d; c < a.length;)if (!(d = a[c++]).invalid)return b ? c - 1 : d;
	            return !1
	        }

	        function s(a, b) {
	            for (var c = {
	                keys: [],
	                values: [],
	                label: b
	            }, d = 0; d < a.length;)c.values.push(a[d].value), c.keys.push(a[d].key),
	                d++;
	            return c
	        }

	        function r(b, d) {
	            a(".dwfl", b).css("display", "").slice(d).hide()
	        }

	        function b(a, b) {
	            var c = [], d = m, e = 0, g = !1, i, h;
	            if (a[e] !== n && e <= b) {
	                g = 0;
	                i = a[e];
	                for (h = n; g < d.length && h === n;)d[g].key == a[e] && !d[g].invalid && (h = g), g++
	            } else h = f(d, !0), i = d[h].key;
	            g = h !== n ? d[h].children : !1;
	            for (c[e] = i; g;) {
	                d = d[h].children;
	                e++;
	                if (a[e] !== n && e <= b) {
	                    g = 0;
	                    i = a[e];
	                    for (h = n; g < d.length && h === n;)d[g].key == a[e] && !d[g].invalid && (h = g), g++
	                } else h = f(d, !0), h = !1 === h ? n : h, i = d[h].key;
	                g = h !== n && f(d[h].children) ? d[h].children : !1;
	                c[e] = i
	            }
	            return {
	                lvl: e +
	                1, nVector: c
	            }
	        }

	        function g(b) {
	            var d = [];
	            k = k > e++ ? k : e;
	            b.children("li").each(function (c) {
	                var b = a(this), e = b.clone();
	                e.children("ul,ol").remove();
	                var e = w._processMarkup ? w._processMarkup(e) : e.html().replace(/^\s\s*/, "").replace(/\s\s*$/, ""), f = b.attr("data-invalid") ? !0 : !1, c = {
	                    key: b.attr("data-val") === n || null === b.attr("data-val") ? c : b.attr("data-val"),
	                    value: e,
	                    invalid: f,
	                    children: null
	                }, b = b.children("ul,ol");
	                b.length && (c.children = g(b));
	                d.push(c)
	            });
	            e--;
	            return d
	        }

	        var P = a.extend({}, w.settings), i = a.extend(w.settings, t,
	            P), P = i.layout || (/top|bottom/.test(i.display) ? "liquid" : ""), O = "liquid" == P, u = i.readonly, A = a(this), o, B, D = this.id + "_dummy", k = 0, e = 0, q = {}, y, I = [], m = i.wheelArray || g(A), L = function (a) {
	            var b = [], c;
	            for (c = 0; c < a; c++)b[c] = i.labels && i.labels[c] ? i.labels[c] : c;
	            return b
	        }(k), K = function (a) {
	            var b = [], c;
	            c = !0;
	            for (var d = 0; c;)c = f(a), b[d++] = c.key, (c = c.children) && (a = c);
	            return b
	        }(m), U = d(K, k);
	        a("#" + D).remove();
	        i.showInput && (o = a('<input type="text" id="' + D + '" value="" class="' + i.inputClass + '" placeholder="' + (i.placeholder || "") + '" readonly />').insertBefore(A),
	            i.anchor = o, w.attachShow(o));
	        i.wheelArray || A.hide().closest(".ui-field-contain").trigger("create");
	        return {
	            width: 50, wheels: U, layout: P, headerText: !1, formatValue: function (a) {
	                if (y === n)y = b(a, a.length).lvl;
	                return a.slice(0, y).join(" ")
	            }, parseValue: function (a) {
	                return a ? (a + "").split(" ") : (i.defaultValue || K).slice(0)
	            }, onBeforeShow: function () {
	                var a = w.getArrayVal(true);
	                I = a.slice(0);
	                i.wheels = d(a, k, k);
	                B = true
	            }, onValueFill: function (a) {
	                y = n;
	                o && o.val(a)
	            }, onShow: function (b) {
	                a(".dwwl", b).on("mousedown touchstart", function () {
	                    clearTimeout(q[a(".dwwl",
	                        b).index(this)])
	                })
	            }, onDestroy: function () {
	                o && o.remove();
	                A.show()
	            }, validate: function (a, e, c) {
	                var f = [], g = w.getArrayVal(true), s = (e || 0) + 1, l, o;
	                if (e !== n && I[e] != g[e] || e === n && !B) {
	                    i.wheels = d(g, null, e);
	                    o = b(g, e === n ? g.length : e);
	                    y = o.lvl;
	                    for (l = 0; l < g.length; l++)g[l] = o.nVector[l] || 0;
	                    for (; s < o.lvl;)f.push(s++);
	                    if (f.length) {
	                        i.readonly = j(k, e);
	                        clearTimeout(q[e]);
	                        q[e] = setTimeout(function () {
	                            B = true;
	                            r(a, o.lvl);
	                            I = g.slice(0);
	                            w.changeWheel(f, e === n ? c : 0, e !== n);
	                            i.readonly = u
	                        }, e === n ? 0 : c * 1E3);
	                        return false
	                    }
	                } else {
	                    o = b(g, g.length);
	                    y = o.lvl
	                }
	                I =
	                    g.slice(0);
	                h(a, o.lvl, m, g);
	                r(a, o.lvl);
	                B = false
	            }
	        }
	    }
	})($);
	(function (a, n) {
	    var t = a.mobiscroll, w = t.classes, h = t.util, j = h.constrain, d = h.jsPrefix, f = h.prefix, s = h.has3d, r = h.getCoord, b = h.getPosition, g = h.testTouch, P = h.isNumeric, i = h.isString, O = window.requestAnimationFrame || function (a) {
	            a()
	        }, u = window.cancelAnimationFrame || function () {
	        };
	    w.ScrollView = function (h, o, B) {
	        function D(d) {
	            if ((!ia.lock || !F) && g(d, this) && !Z && a.mobiscroll.running) {
	                "mousedown" == d.type && d.preventDefault();
	                L && L.removeClass("mbsc-btn-a");
	                N = !1;
	                L = a(d.target).closest(".mbsc-btn-e", this);
	                L.length && !L.hasClass("mbsc-btn-d") &&
	                (N = !0, K = setTimeout(function () {
	                    L.addClass("mbsc-btn-a")
	                }, 100));
	                Z = !0;
	                V = !1;
	                W.scrolled = F;
	                ha = r(d, "X");
	                fa = r(d, "Y");
	                J = ha;
	                c = S = G = 0;
	                ga = new Date;
	                ea = +b(X, ka) || 0;
	                m(ea, 1);
	                if ("mousedown" === d.type)a(document).on("mousemove", k).on("mouseup", q); else if ("pointerdown" === d.type)a(document).on("pointermove", k).on("pointerup", q);
	                da("onScrollStart", [C])
	            }
	        }

	        function k(a) {
	            if (Z) {
	                J = r(a, "X");
	                l = r(a, "Y");
	                G = J - ha;
	                S = l - fa;
	                c = ka ? S : G;
	                if (N && (5 < Math.abs(S) || 5 < Math.abs(G)))clearTimeout(K), L.removeClass("mbsc-btn-a"), N = !1;
	                !V && 5 < Math.abs(c) &&
	                (W.scrolled = !0, ia.liveSwipe && !T && (T = !0, Q = O(e)));
	                ka || ia.scrollLock ? a.preventDefault() : W.scrolled ? a.preventDefault() : 7 < Math.abs(S) && (V = !0, W.scrolled = !0, Ba.trigger("touchend"))
	            }
	        }

	        function e() {
	            R && (c = j(c, -Y * R, Y * R));
	            m(j(ea + c, p - x, M + x));
	            T = !1
	        }

	        function q(b) {
	            if (Z) {
	                var d;
	                d = new Date - ga;
	                u(Q);
	                T = !1;
	                !V && W.scrolled && (ia.momentum && s && 300 > d && (d = c / d, c = Math.max(Math.abs(c), d * d / ia.speedUnit) * (0 > c ? -1 : 1)), t(c));
	                N && (clearTimeout(K), L.addClass("mbsc-btn-a"), setTimeout(function () {
	                    L.removeClass("mbsc-btn-a")
	                }, 100), !V && !W.scrolled &&
	                da("onBtnTap", [L]));
	                "mouseup" == b.type ? a(document).off("mousemove", k).off("mouseup", q) : "pointerup" == b.type && a(document).off("pointermove", k).off("pointerup", q);
	                Z = !1
	            }
	        }

	        function y(b) {
	            b = b.originalEvent || b;
	            if ((c = ka ? b.deltaY || b.wheelDelta || b.detail : b.deltaX) && a.mobiscroll.running)b.preventDefault(), c = 0 > c ? 20 : -20, ea = C, T || (T = !0, Q = O(e)), clearTimeout(aa), aa = setTimeout(function () {
	                u(Q);
	                T = false;
	                t(c)
	            }, 200)
	        }

	        function t(a) {
	            var b;
	            R && (a = j(a, -Y * R, Y * R));
	            ua = Math.round((ea + a) / Y);
	            b = j(ua * Y, p, M);
	            if (E) {
	                if (0 > a)for (a = E.length -
	                    1; 0 <= a; a--) {
	                    if (Math.abs(b) + U >= E[a].breakpoint) {
	                        ua = a;
	                        pa = 2;
	                        b = E[a].snap2;
	                        break
	                    }
	                } else if (0 <= a)for (a = 0; a < E.length; a++)if (Math.abs(b) <= E[a].breakpoint) {
	                    ua = a;
	                    pa = 1;
	                    b = E[a].snap1;
	                    break
	                }
	                b = j(b, p, M)
	            }
	            m(b, ia.time || (C < p || C > M ? 200 : Math.max(200, Math.abs(b - C) * ia.timeUnit)), function () {
	                da("onScrollEnd", [C])
	            })
	        }

	        function m(a, b, c) {
	            var e = function () {
	                F = !1;
	                c && c()
	            };
	            F = !0;
	            s ? (v[d + "Transition"] = b ? f + "transform " + Math.round(b) + "ms " + ia.easing : "", v[d + "Transform"] = "translate3d(" + (ka ? "0," + a + "px," : a + "px,0,") + "0)", C == a || !b ? e() : b && setTimeout(function () {
	                v[d +
	                "Transition"] = "";
	                e()
	            }, b)) : (setTimeout(e, b || 0), v[H] = a + "px");
	            C = a
	        }

	        var L, K, U, G, S, c, H, x, J, l, N, M, R, p, V, Z, F, Q, T, aa, Y, E, ea, ga, ha, fa, v, X, da, ka, W = this, C = 0, ua = 0, pa = 1, ia = o, Ba = a(h);
	        w.Base.call(this, h, o, !0);
	        W.scrolled = !1;
	        W.scroll = function (b, c, d) {
	            b = P(b) ? Math.round(b / Y) * Y : Math.ceil((a(b, h).length ? Math.round(X.offset()[H] - a(b, h).offset()[H]) : C) / Y) * Y;
	            ua = Math.round(b / Y);
	            m(j(b, p, M), c, d)
	        };
	        W.refresh = function () {
	            var a;
	            U = ia.contSize === n ? ka ? Ba.height() : Ba.width() : ia.contSize;
	            p = ia.minScroll === n ? ka ? U - X.height() : U - X.width() :
	                ia.minScroll;
	            M = ia.maxScroll === n ? 0 : ia.maxScroll;
	            !ka && ia.rtl && (a = M, M = -p, p = -a);
	            i(ia.snap) && (E = [], X.find(ia.snap).each(function () {
	                var a = ka ? this.offsetTop : this.offsetLeft, b = ka ? this.offsetHeight : this.offsetWidth;
	                E.push({breakpoint: a + b / 2, snap1: -a, snap2: U - a - b})
	            }));
	            Y = P(ia.snap) ? ia.snap : 1;
	            R = ia.snap ? ia.maxSnapScroll : 0;
	            x = ia.elastic ? P(ia.snap) ? Y : P(ia.elastic) ? ia.elastic : 0 : 0;
	            W.scroll(ia.snap ? E ? E[ua]["snap" + pa] : ua * Y : C)
	        };
	        W.init = function (a) {
	            W._init(a);
	            H = (ka = "Y" == ia.axis) ? "top" : "left";
	            X = ia.moveElement || Ba.children().eq(0);
	            v = X[0].style;
	            W.refresh();
	            if (ia.swipe)Ba.on("touchstart mousedown pointerdown", D).on("touchmove", k).on("touchend touchcancel pointercancel", q);
	            if (ia.mousewheel)Ba.on("wheel mousewheel", y);
	            h.addEventListener && h.addEventListener("click", function (a) {
	                W.scrolled && (a.stopPropagation(), a.preventDefault())
	            }, !0)
	        };
	        W.destroy = function () {
	            Ba.off("touchstart mousedown pointerdown", D).off("touchmove", k).off("touchend touchcancel pointercancel", q).off("wheel mousewheel", y);
	            W._destroy()
	        };
	        ia = W.settings;
	        da = W.trigger;
	        B || W.init(o)
	    };
	    w.ScrollView.prototype = {
	        _class: "scrollview",
	        _defaults: {
	            speedUnit: 0.0022,
	            timeUnit: 0.8,
	            axis: "Y",
	            easing: "ease-out",
	            swipe: !0,
	            liveSwipe: !0,
	            momentum: !0,
	            elastic: !0
	        }
	    };
	    t.presetShort("scrollview", "ScrollView", !1)
	})($);
	(function (a, n) {
	    var t = a.mobiscroll, w = {
	        batch: 50,
	        min: 0,
	        max: 100,
	        defUnit: "",
	        units: null,
	        unitNames: null,
	        invalid: [],
	        sign: !1,
	        step: 0.05,
	        scale: 2,
	        convert: function (a) {
	            return a
	        },
	        signText: "&nbsp;",
	        wholeText: "Whole",
	        fractionText: "Fraction",
	        unitText: "Unit"
	    };
	    t.presets.scroller.measurement = function (h) {
	        function j(a) {
	            return Math.max(ea, Math.min(ga, J ? 0 > a ? Math.ceil(a) : Math.floor(a) : r(Math.round(a - X), R) + X))
	        }

	        function d(a) {
	            return J ? r((Math.abs(a) - Math.abs(j(a))) * M - da, R) + da : 0
	        }

	        function f(a) {
	            var b = j(a), c = d(a);
	            c >= M && (0 > a ? b-- :
	                b++, c = 0);
	            return [0 > a ? "-" : "+", b, c]
	        }

	        function s(a) {
	            var b = +a[T], c = J ? g(a[Q]) / M * (0 > b ? -1 : 1) : 0;
	            return (S && "-" == a[0] ? -1 : 1) * (b + c)
	        }

	        function r(a, b) {
	            return Math.round(a / b) * b
	        }

	        function b(a, b) {
	            for (a += ""; a.length < b;)a = "0" + a;
	            return a
	        }

	        function g(a) {
	            return a ? (a + "").replace(/\+|\-/g, "") : ""
	        }

	        function P(a, b, c) {
	            return b === c || !D.convert ? a : D.convert.call(this, a, b, c)
	        }

	        function i(a, b, c) {
	            a = a > c ? c : a;
	            return a < b ? b : a
	        }

	        function O(a) {
	            Y = P(D.min, H, a);
	            E = P(D.max, H, a);
	            J ? (ea = 0 > Y ? Math.ceil(Y) : Math.floor(Y), ga = 0 > E ? Math.ceil(E) : Math.floor(E), ha =
	                d(Y), fa = d(E)) : (ea = Math.round(Y), ga = Math.round(E), ga = ea + Math.floor((ga - ea) / R) * R, X = ea % R)
	        }

	        function u(a, b) {
	            var c = +ea, d = +ga, e = J ? 1 : R, f;
	            S && (d = Math.abs(c) > Math.abs(d) ? Math.abs(c) : Math.abs(d), c = 0 > c ? 0 : c);
	            f = b - m * e;
	            f = f < c ? c : f;
	            c = f + 2 * m * e;
	            c = c > d ? d : c;
	            if (f !== L || c !== K) {
	                q.values = [];
	                q.label = D.wholeText;
	                for (W = f; W <= c; W += e)q.values.push(W);
	                U = f;
	                G = c;
	                return !0
	            }
	            return !1
	        }

	        function A(c) {
	            if (l) {
	                var d = t.length, c = a.inArray(+c, t), e, f;
	                y.keys = [];
	                y.values = [];
	                for (W = -50; 50 > W; W++)e = (W + c) % d, f = t[0 > e ? d + e : e], e = Math.abs(Math.floor((W + c) / d)), y.keys.push(Array(e).join(0 >
	                    W + c ? "-" : "+") + f), y.values.push("." + b(f, N))
	            }
	        }

	        function o(a) {
	            return s(a).toFixed(J ? N : 0) + (c ? " " + x[a[aa]] : "")
	        }

	        var B = a.extend({}, h.settings), D = a.extend(h.settings, w, B), B = {}, k = [[]], e = {}, q = {}, y = {}, t = [], m = D.batch, L, K, U, G, S = D.sign, c = D.units && D.units.length, H = c ? D.defUnit || D.units[0] : "", x = D.unitNames || D.units, J = 1 > D.step, l = !1, N = J ? Math.max(D.scale, (D.step + "").split(".")[1].length) : 1, M = Math.pow(10, N), R = Math.round(J ? D.step * M : D.step), p, V, Z, F = -1, Q, T, aa, Y, E, ea, ga, ha, fa, v, X = 0, da = 0, ka = {}, W, C = 0;
	        h.setVal = function (b, c, d,
	                             e, f) {
	            h._setVal(a.isArray(b) ? o(b) : b, c, d, e, f)
	        };
	        h.setValue = function (a, b, c, d, e) {
	            h.setVal(a, b, e, d, c)
	        };
	        O(H);
	        if (S)if (S = !1, c)for (W = 0; W < D.units.length; W++)0 > P(D.min, H, D.units[W]) && (S = !0); else S = 0 > D.min;
	        S && (k[0].push({values: ["-", "+"], label: D.signText}), F = C++);
	        k[0].push(q);
	        T = C++;
	        if (J) {
	            k[0].push(y);
	            y.keys = [];
	            y.values = [];
	            y.label = D.fractionText;
	            for (W = da; W < M; W += R)t.push(W), y.keys.push(W), y.values.push("." + b(W, N));
	            l = t.length > D.rows;
	            Q = C++;
	            p = Math.ceil(100 / R);
	            D.invalid && D.invalid.length && (a.each(D.invalid, function (a,
	                                                                          b) {
	                var c = b > 0 ? Math.floor(b) : Math.ceil(b);
	                c === 0 && (c = b <= 0 ? -0.001 : 0.001);
	                e[c] = (e[c] || 0) + 1;
	                if (b === 0) {
	                    c = 0.001;
	                    e[c] = (e[c] || 0) + 1
	                }
	            }), a.each(e, function (a, b) {
	                b < p ? delete e[a] : e[a] = a
	            }))
	        }
	        if (c) {
	            B = {keys: [], values: [], label: D.unitText};
	            for (W = 0; W < D.units.length; W++)B.keys.push(W), B.values.push(x[W]);
	            k[0].push(B)
	        }
	        aa = C;
	        return {
	            width: 55, wheels: k, showLabel: !1, formatValue: o, parseValue: function (b) {
	                var d = ((b || D.defaultValue) + "").split(" "), b = +d[0], e = [], g = "";
	                if (c) {
	                    g = a.inArray(d[1], x);
	                    g = g == -1 ? a.inArray(H, D.units) : g;
	                    g = g == -1 ? 0 :
	                        g
	                }
	                Z = c ? D.units[g] : "";
	                O(Z);
	                b = isNaN(b) ? 0 : b;
	                b = i(b, Y, E);
	                d = f(b);
	                d[1] = i(d[1], ea, ga);
	                V = b;
	                if (S) {
	                    e[0] = d[0];
	                    d[1] = Math.abs(d[1])
	                }
	                e[T] = d[1];
	                J && (e[Q] = d[2]);
	                c && (e[aa] = g);
	                return e
	            }, onBeforeShow: function () {
	                u(Z, h._tempWheelArray[T]);
	                A(g(h._tempWheelArray[Q]));
	                L = U;
	                K = G;
	                v = true
	            }, onShow: function (b) {
	                a(".dwwl", b).on("mousedown touchstart", function () {
	                    clearTimeout(ka[a(".dwwl", b).index(this)])
	                })
	            }, onCancel: function () {
	                V = n
	            }, validate: function (b, d, k, j) {
	                var p = h._tempWheelArray, o, m = [], q, C, N, w, x, M, y, B = +g(p[Q]), t = c ? D.units[p[aa]] : "";
	                if (S && d === 0) {
	                    V = Math.abs(V) * (p[d] === "-" ? -1 : 1);
	                    m = l ? [T, Q] : [T]
	                }
	                if (d === T || d === Q && J || V === n || d === n && !v) {
	                    V = s(p);
	                    Z = t
	                }
	                if (c && d === aa && Z !== t || d === n && !v) {
	                    O(t);
	                    V = P(V, Z, t);
	                    Z = t;
	                    C = f(V);
	                    S && (p[0] = C[0]);
	                    u(t, S ? Math.abs(C[1]) : C[1]);
	                    A(B);
	                    m = l ? [T, Q] : [T];
	                    q = d ? 0.2 : k
	                }
	                V = i(V, Y, E);
	                C = f(V);
	                w = S ? Math.abs(C[1]) : C[1];
	                o = S ? p[0] == "-" : V < 0;
	                p[T] = w;
	                o && (C[0] = "-");
	                J && (p[Q] = C[2]);
	                if (d === T || S && d === 0)x = u(t, w);
	                d === T && x && m.push(T);
	                if (d === Q && l) {
	                    A(B);
	                    m.push(Q)
	                }
	                if (m.length) {
	                    ka[d] = setTimeout(function () {
	                        v = true;
	                        L = U;
	                        K = G;
	                        h.changeWheel(m, q, d !== n)
	                    }, d === n ? 0 : k *
	                    1E3);
	                    return false
	                }
	                if (S && d === n) {
	                    M = a(".dw-ul", b).eq(F);
	                    a(".dw-li", M).addClass("dw-v");
	                    Y > 0 && a(".dw-li", M).eq(0).removeClass("dw-v");
	                    E < 0 && a(".dw-li", M).eq(1).removeClass("dw-v")
	                }
	                M = a(".dw-ul", b).eq(T);
	                if (S && !d) {
	                    a(".dw-li", M).addClass("dw-v");
	                    W = a(".dw-li", M).index(a('.dw-li[data-val="' + Math.abs(o ? ea : ga) + '"]', M));
	                    W != -1 && a(".dw-li", M).slice(W + 1).removeClass("dw-v")
	                }
	                a.each(J ? e : D.invalid, function (b, c) {
	                    if (S && o)if (c <= 0)c = Math.abs(c); else return;
	                    a('.dw-li[data-val="' + r(P(c, H, t), J ? 1 : R) + '"]', M).removeClass("dw-v")
	                });
	                p[T] = +h.getValidCell(w, M, j).val;
	                C[1] = p[T] * (S && o ? -1 : 1);
	                if (d !== Q && J) {
	                    M = a(".dw-ul", b).eq(Q);
	                    a(".dw-li", M).addClass("dw-v");
	                    b = S ? p[0] + g(p[1]) : (V < 0 ? "-" : "+") + Math.abs(C[1]);
	                    k = (Y < 0 ? "-" : "+") + Math.abs(ea);
	                    j = (E < 0 ? "-" : "+") + Math.abs(ga);
	                    b === k && a(".dw-li", M).each(function () {
	                        y = g(a(this).attr("data-val"));
	                        (o ? y > ha : y < ha) && a(this).removeClass("dw-v")
	                    });
	                    b === j && a(".dw-li", M).each(function () {
	                        y = g(a(this).attr("data-val"));
	                        (o ? y < fa : y > fa) && a(this).removeClass("dw-v")
	                    });
	                    a.each(D.invalid, function (b, c) {
	                        N = f(P(c, H, t));
	                        (C[0] ===
	                        N[0] || C[1] === 0 && N[1] === 0 && N[2] === 0) && C[1] === N[1] && a(".dw-li", M).each(function () {
	                            g(a(this).attr("data-val")) == N[2] && a(this).removeClass("dw-v")
	                        })
	                    })
	                }
	                v = false
	            }
	        }
	    };
	    t.presetShort("measurement")
	})($);
	(function (a, n, t, w) {
	    var h = a.mobiscroll, j = h.presets.scroller, d = h.util, f = d.has3d, s = d.jsPrefix, r = d.testTouch, b = {
	        controls: ["calendar"],
	        firstDay: 0,
	        weekDays: "short",
	        maxMonthWidth: 170,
	        months: 1,
	        preMonths: 1,
	        highlight: !0,
	        highlightNow: !0,
	        swipe: !0,
	        liveSwipe: !0,
	        divergentDayChange: !0,
	        quickNav: !0,
	        navigation: "yearMonth",
	        todayClass: "dw-cal-today",
	        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left6",
	        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right6",
	        dateText: "Date",
	        timeText: "Time",
	        calendarText: "Calendar",
	        todayText: "Today",
	        prevMonthText: "Previous Month",
	        nextMonthText: "Next Month",
	        prevYearText: "Previous Year",
	        nextYearText: "Next Year"
	    };
	    j.calbase = function (g) {
	        function n(b, c, d) {
	            var e, f, g, i, h = {}, l = na + Ia;
	            b && a.each(b, function (a, b) {
	                e = b.d || b.start || b;
	                f = e + "";
	                if (b.start && b.end)for (i = new Date(b.start); i <= b.end;)g = new Date(i.getFullYear(), i.getMonth(), i.getDate()), h[g] = h[g] || [], h[g].push(b), i.setDate(i.getDate() + 1); else if (e.getTime)g = new Date(e.getFullYear(), e.getMonth(), e.getDate()), h[g] = h[g] || [], h[g].push(b); else if (f.match(/w/i)) {
	                    var k = +f.replace("w", ""),
	                        j = 0, p = z.getDate(c, d - na - ma, 1).getDay();
	                    1 < z.firstDay - p + 1 && (j = 7);
	                    for (N = 0; N < 5 * Ea; N++)g = z.getDate(c, d - na - ma, 7 * N - j - p + 1 + k), h[g] = h[g] || [], h[g].push(b)
	                } else if (f = f.split("/"), f[1])11 <= d + l && (g = z.getDate(c + 1, f[0] - 1, f[1]), h[g] = h[g] || [], h[g].push(b)), 1 >= d - l && (g = z.getDate(c - 1, f[0] - 1, f[1]), h[g] = h[g] || [], h[g].push(b)), g = z.getDate(c, f[0] - 1, f[1]), h[g] = h[g] || [], h[g].push(b); else for (N = 0; N < Ea; N++)g = z.getDate(c, d - na - ma + N, f[0]), z.getDay(g) == f[0] && (h[g] = h[g] || [], h[g].push(b))
	            });
	            return h
	        }

	        function i(a, b) {
	            Ja = n(z.invalid, a,
	                b);
	            Db = n(z.valid, a, b);
	            g.onGenMonth(a, b)
	        }

	        function O(a, b, c, d, e, f, g) {
	            var h = '<div class="dw-cal-h dw-cal-sc-c dw-cal-' + a + "-c " + (z.calendarClass || "") + '"><div class="dw-cal-sc"><div class="dw-cal-sc-p"><div class="dw-cal-sc-tbl"><div class="dw-cal-sc-row">';
	            for (l = 1; l <= b; l++)h = 12 >= l || l > c ? h + '<div class="dw-cal-sc-m-cell dw-cal-sc-cell dw-cal-sc-empty"><div class="dw-i">&nbsp;</div></div>' : h + ('<div tabindex="0" role="button"' + (f ? ' aria-label="' + f[l - 13] + '"' : "") + ' class="dwb-e dwb-nhl dw-cal-sc-m-cell dw-cal-sc-cell dw-cal-' +
	            a + '-s" data-val=' + (d + l - 13) + '><div class="dw-i dw-cal-sc-tbl"><div class="dw-cal-sc-cell">' + (g ? g[l - 13] : d + l - 13 + e) + "</div></div></div>"), l < b && (0 === l % 12 ? h += '</div></div></div><div class="dw-cal-sc-p" style="' + (Pa ? "top" : Xa ? "right" : "left") + ":" + 100 * Math.round(l / 12) + '%"><div class="dw-cal-sc-tbl"><div class="dw-cal-sc-row">' : 0 === l % 3 && (h += '</div><div class="dw-cal-sc-row">'));
	            return h + "</div></div></div></div></div>"
	        }

	        function u(b, c) {
	            var d, e, f, h, i, l, k, j, p, F, o, s, m, n, Y = 1, q = 0;
	            d = z.getDate(b, c, 1);
	            var v = z.getYear(d),
	                E = z.getMonth(d), C = null === z.defaultValue && !g._hasValue ? null : g.getDate(!0), r = z.getDate(v, E, 1).getDay(), R = '<div class="dw-cal-table">', u = '<div class="dw-week-nr-c">';
	            1 < z.firstDay - r + 1 && (q = 7);
	            for (n = 0; 42 > n; n++)m = n + z.firstDay - q, d = z.getDate(v, E, m - r + 1), e = d.getFullYear(), f = d.getMonth(), h = d.getDate(), i = z.getMonth(d), l = z.getDay(d), s = z.getMaxDayOfMonth(e, f), k = e + "-" + f + "-" + h, f = a.extend({
	                valid: d < new Date(gb.getFullYear(), gb.getMonth(), gb.getDate()) || d > wa ? !1 : Ja[d] === w || Db[d] !== w,
	                selected: C && C.getFullYear() === e && C.getMonth() ===
	                f && C.getDate() === h
	            }, g.getDayProps(d, C)), j = f.valid, p = f.selected, e = f.cssClass, F = d.getTime() === (new Date).setHours(0, 0, 0, 0), o = i !== E, Ab[k] = f, 0 === n % 7 && (R += (n ? "</div>" : "") + '<div class="dw-cal-row' + (z.highlight && C && 0 <= C - d && 6048E5 > C - d ? " dw-cal-week-hl" : "") + '">'), nb && 1 == d.getDay() && ("month" == nb && o && 1 < Y ? Y = 1 == h ? 1 : 2 : "year" == nb && (Y = z.getWeekNumber(d)), u += '<div class="dw-week-nr"><div class="dw-week-nr-i">' + Y + "</div></div>", Y++), R += '<div role="button" tabindex="-1" aria-label="' + (F ? z.todayText + ", " : "") + z.dayNames[d.getDay()] +
	                ", " + z.monthNames[i] + " " + l + " " + (f.ariaLabel ? ", " + f.ariaLabel : "") + '"' + (o && !Wa ? ' aria-hidden="true"' : "") + (p ? ' aria-selected="true"' : "") + (j ? "" : ' aria-disabled="true"') + ' data-day="' + m % 7 + '" data-full="' + k + '"class="dw-cal-day ' + (z.dayClass || "") + (p ? " dw-sel" : "") + (F ? " " + z.todayClass : "") + (e ? " " + e : "") + (1 == l ? " dw-cal-day-first" : "") + (l == s ? " dw-cal-day-last" : "") + (o ? " dw-cal-day-diff" : "") + (j ? " dw-cal-day-v dwb-e dwb-nhl" : " dw-cal-day-inv") + '"><div class="dw-i ' + (p ? ra : "") + " " + (z.innerDayClass || "") + '"><div class="dw-cal-day-fg">' +
	                l + g._processItem(a, 0.06) + "</div>" + (f.markup || "") + '<div class="dw-cal-day-frame"></div></div></div>';
	            return R + ("</div></div>" + u + "</div>")
	        }

	        function A(b, c, d) {
	            var e = z.getDate(b, c, 1), f = z.getYear(e), e = z.getMonth(e), g = f + Ca;
	            if ($a) {
	                bb && bb.removeClass("dw-sel").removeAttr("aria-selected").find(".dw-i").removeClass(ra);
	                rb && rb.removeClass("dw-sel").removeAttr("aria-selected").find(".dw-i").removeClass(ra);
	                bb = a('.dw-cal-year-s[data-val="' + f + '"]', p).addClass("dw-sel").attr("aria-selected", "true");
	                rb = a('.dw-cal-month-s[data-val="' +
	                    e + '"]', p).addClass("dw-sel").attr("aria-selected", "true");
	                bb.find(".dw-i").addClass(ra);
	                rb.find(".dw-i").addClass(ra);
	                Ua && Ua.scroll(bb, d);
	                a(".dw-cal-month-s", p).removeClass("dwb-d");
	                if (f === pa)for (l = 0; l < Ba; l++)a('.dw-cal-month-s[data-val="' + l + '"]', p).addClass("dwb-d");
	                if (f === ia)for (l = oa + 1; 12 >= l; l++)a('.dw-cal-month-s[data-val="' + l + '"]', p).addClass("dwb-d")
	            }
	            1 == C.length && C.attr("aria-label", f).html(g);
	            for (l = 0; l < la; ++l)e = z.getDate(b, c - ma + l, 1), f = z.getYear(e), e = z.getMonth(e), g = f + Ca, a(ka[l]).attr("aria-label",
	                z.monthNames[e] + (Da ? "" : " " + f)).html((!Da && ua < W ? g + " " : "") + v[e] + (!Da && ua > W ? " " + g : "")), 1 < C.length && a(C[l]).html(g);
	            z.getDate(b, c - ma - 1, 1) < Fa ? B(a(".dw-cal-prev-m", p)) : o(a(".dw-cal-prev-m", p));
	            z.getDate(b, c + la - ma, 1) > Ka ? B(a(".dw-cal-next-m", p)) : o(a(".dw-cal-next-m", p));
	            z.getDate(b, c, 1).getFullYear() <= Fa.getFullYear() ? B(a(".dw-cal-prev-y", p)) : o(a(".dw-cal-prev-y", p));
	            z.getDate(b, c, 1).getFullYear() >= Ka.getFullYear() ? B(a(".dw-cal-next-y", p)) : o(a(".dw-cal-next-y", p))
	        }

	        function o(a) {
	            a.removeClass(qb).find(".dw-cal-btn-txt").removeAttr("aria-disabled")
	        }

	        function B(a) {
	            a.addClass(qb).find(".dw-cal-btn-txt").attr("aria-disabled", "true")
	        }

	        function D(b, c) {
	            if (Y && ("calendar" === Va || c)) {
	                var d, e, f = z.getDate(qa, ja, 1), h = Math.abs(12 * (z.getYear(b) - z.getYear(f)) + z.getMonth(b) - z.getMonth(f));
	                g.needsSlide && h && (qa = z.getYear(b), ja = z.getMonth(b), b > f ? (e = h > na - ma + la - 1, ja -= e ? 0 : h - na, d = "next") : b < f && (e = h > na + ma, ja += e ? 0 : h - na, d = "prev"), y(qa, ja, d, Math.min(h, na), e, !0));
	                c || (g.trigger("onDayHighlight", [b]), z.highlight && (a(".dw-sel .dw-i", Z).removeClass(ra), a(".dw-sel", Z).removeClass("dw-sel").removeAttr("aria-selected"),
	                    a(".dw-cal-week-hl", Z).removeClass("dw-cal-week-hl"), (null !== z.defaultValue || g._hasValue) && a('.dw-cal-day[data-full="' + b.getFullYear() + "-" + b.getMonth() + "-" + b.getDate() + '"]', Z).addClass("dw-sel").attr("aria-selected", "true").find(".dw-i").addClass(ra).closest(".dw-cal-row").addClass("dw-cal-week-hl")));
	                g.needsSlide = !0
	            }
	        }

	        function k(a, b) {
	            i(a, b);
	            for (l = 0; l < Ea; l++)va[l].html(u(a, b - ma - na + l));
	            q();
	            g.needsRefresh = !1;
	            g.trigger("onMonthLoaded", [a, b])
	        }

	        function e(b, c, d) {
	            var e = na, f = na;
	            if (d) {
	                for (; f && z.getDate(b, c +
	                    e + la - ma - 1, 1) > Ka;)f--;
	                for (; e && z.getDate(b, c - f - ma, 1) < Fa;)e--
	            }
	            a.extend(X.settings, {
	                contSize: la * Q,
	                snap: Q,
	                minScroll: T - (Xa ? e : f) * Q,
	                maxScroll: T + (Xa ? f : e) * Q
	            });
	            X.refresh()
	        }

	        function q() {
	            nb && ga.html(a(".dw-week-nr-c", va[na]).html());
	            a(".dw-cal-slide-a .dw-cal-day", F).attr("tabindex", 0)
	        }

	        function y(b, c, d, f, h, p, j) {
	            b && eb.push({y: b, m: c, dir: d, slideNr: f, load: h, active: p, callback: j});
	            if (!Ya) {
	                var o = eb.shift(), b = o.y, c = o.m, d = "next" === o.dir, f = o.slideNr, h = o.load, p = o.active, j = o.callback || Bb, o = z.getDate(b, c, 1), b = z.getYear(o),
	                    c = z.getMonth(o);
	                Ya = !0;
	                g.changing = !0;
	                g.trigger("onMonthChange", [b, c]);
	                i(b, c);
	                if (h)for (l = 0; l < la; l++)va[d ? Ea - la + l : l].html(u(b, c - ma + l));
	                p && xa.addClass("dw-cal-slide-a");
	                setTimeout(function () {
	                        g.ariaMessage(z.monthNames[c] + " " + b);
	                        A(b, c, 200);
	                        T = d ? T - Q * f * fb : T + Q * f * fb;
	                        X.scroll(T, fa ? 200 : 0, function () {
	                            setTimeout(function () {
	                                var i;
	                                if (va.length) {
	                                    xa.removeClass("dw-cal-slide-a").attr("aria-hidden", "true");
	                                    if (d) {
	                                        i = va.splice(0, f);
	                                        for (l = 0; l < f; l++)va.push(i[l]), m(va[va.length - 1], +va[va.length - 2].data("curr") + 100 * fb)
	                                    } else {
	                                        i =
	                                            va.splice(Ea - f, f);
	                                        for (l = f - 1; 0 <= l; l--)va.unshift(i[l]), m(va[0], +va[1].data("curr") - 100 * fb)
	                                    }
	                                    for (l = 0; l < f; l++)va[d ? Ea - f + l : l].html(u(b, c - ma - na + l + (d ? Ea - f : 0))), h && va[d ? l : Ea - f + l].html(u(b, c - ma - na + l + (d ? 0 : Ea - f)));
	                                    for (l = 0; l < la; l++)va[na + l].addClass("dw-cal-slide-a").removeAttr("aria-hidden");
	                                    e(b, c, !0);
	                                    Ya = !1
	                                }
	                                eb.length ? setTimeout(function () {
	                                    y()
	                                }, 10) : (qa = b, ja = c, g.changing = !1, a(".dw-cal-day", F).attr("tabindex", -1), q(), g.needsRefresh ? g.isVisible() && Y && k(qa, ja) : g.trigger("onMonthLoaded", [b, c]), j())
	                            }, fa ? 0 : 200)
	                        })
	                    },
	                    10)
	            }
	        }

	        function I() {
	            var b = a(this), c = g.live, d = g.getDate(!0), e = b.attr("data-full"), f = e.split("-"), f = new Date(f[0], f[1], f[2]), d = new Date(f.getFullYear(), f.getMonth(), f.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()), h = b.hasClass("dw-sel");
	            if ((Wa || !b.hasClass("dw-cal-day-diff")) && !1 !== g.trigger("onDayChange", [a.extend(Ab[e], {
	                    date: d,
	                    cell: this,
	                    selected: h
	                })]))g.needsSlide = !1, aa = !0, g.setDate(d, c, 0.2, !c, !0), z.divergentDayChange && (Sa = !0, f < z.getDate(qa, ja - ma, 1) ? K() : f > z.getDate(qa, ja - ma + la, 0) && L(), Sa = !1)
	        }

	        function m(a, b) {
	            a.data("curr", b);
	            f ? a[0].style[s + "Transform"] = "translate3d(" + (Pa ? "0," + b + "%," : b + "%,0,") + "0)" : a[0].style[Pa ? "top" : "left"] = b + "%"
	        }

	        function L() {
	            Sa && z.getDate(qa, ja + la - ma, 1) <= Ka && a.mobiscroll.running && y(qa, ++ja, "next", 1, !1, !0, L)
	        }

	        function K() {
	            Sa && z.getDate(qa, ja - ma - 1, 1) >= Fa && a.mobiscroll.running && y(qa, --ja, "prev", 1, !1, !0, K)
	        }

	        function U(b) {
	            Sa && z.getDate(qa, ja, 1) <= z.getDate(z.getYear(Ka) - 1, z.getMonth(Ka) - Ia, 1) && a.mobiscroll.running ? y(++qa, ja, "next", na, !0, !0, function () {
	                U(b)
	            }) : Sa && !b.hasClass("dwb-d") &&
	            a.mobiscroll.running && y(z.getYear(Ka), z.getMonth(Ka) - Ia, "next", na, !0, !0)
	        }

	        function G(b) {
	            Sa && z.getDate(qa, ja, 1) >= z.getDate(z.getYear(Fa) + 1, z.getMonth(Fa) + ma, 1) && a.mobiscroll.running ? y(--qa, ja, "prev", na, !0, !0, function () {
	                G(b)
	            }) : Sa && !b.hasClass("dwb-d") && a.mobiscroll.running && y(z.getYear(Fa), z.getMonth(Fa) + ma, "prev", na, !0, !0)
	        }

	        function S(a, b) {
	            a.hasClass("dw-cal-v") || (a.addClass("dw-cal-v" + (b ? "" : " dw-cal-p-in")).removeClass("dw-cal-p-out dw-cal-h"), g.trigger("onSelectShow", []))
	        }

	        function c(a, b) {
	            a.hasClass("dw-cal-v") &&
	            a.removeClass("dw-cal-v dw-cal-p-in").addClass("dw-cal-h" + (b ? "" : " dw-cal-p-out"))
	        }

	        function H(a, b) {
	            (b || a).hasClass("dw-cal-v") ? c(a) : S(a)
	        }

	        function x() {
	            a(this).removeClass("dw-cal-p-out dw-cal-p-in")
	        }

	        var J, l, N, M, R, p, V, Z, F, Q, T, aa, Y, E, ea, ga, ha, fa, v, X, da, ka, W, C, ua, pa, ia, Ba, oa, Fa, Ka, gb, wa, ya, qa, ja, hb, ob, Db, Ja, Ra, Va, Ya, Sa, la, Ea, Ia, ma, Wa, Ua, bb, rb, Fb = this, xa = [], va = [], eb = [], ta = {}, Ab = {}, Bb = function () {
	            }, Wb = a.extend({}, g.settings), z = a.extend(g.settings, b, Wb), Ta = "full" == z.weekDays ? "" : "min" == z.weekDays ? "Min" : "Short",
	            nb = z.weekCounter, Ib = z.layout || (/top|bottom/.test(z.display) ? "liquid" : ""), Ga = "liquid" == Ib && "bubble" !== z.display, yb = "modal" == z.display, Xa = z.rtl, fb = Xa ? -1 : 1, Hb = Ga ? null : z.calendarWidth, Pa = "vertical" == z.swipeDirection, $a = z.quickNav, na = z.preMonths, Da = "yearMonth" == z.navigation, Aa = z.controls.join(","), ab = (!0 === z.tabs || !1 !== z.tabs && Ga) && 1 < z.controls.length, ba = !ab && z.tabs === w && !Ga && 1 < z.controls.length, Ca = z.yearSuffix || "", ra = z.activeClass || "", pb = "dw-sel " + (z.activeTabClass || ""), jb = z.activeTabInnerClass || "", qb =
	                "dwb-d " + (z.disabledClass || ""), Oa = "", sa = "";
	        Aa.match(/calendar/) ? Y = !0 : $a = !1;
	        Aa.match(/date/) && (ta.date = 1);
	        Aa.match(/time/) && (ta.time = 1);
	        Y && ta.date && (ab = !0, ba = !1);
	        z.layout = Ib;
	        z.preset = (ta.date || Y ? "date" : "") + (ta.time ? "time" : "");
	        if ("inline" == z.display)a(this).closest('[data-role="page"]').on("pageshow", function () {
	            g.position()
	        });
	        g.changing = !1;
	        g.needsRefresh = !1;
	        g.needsSlide = !0;
	        g.getDayProps = Bb;
	        g.onGenMonth = Bb;
	        g.prepareObj = n;
	        g.refresh = function () {
	            g.changing ? g.needsRefresh = true : g.isVisible() && Y && k(qa, ja)
	        };
	        g.navigate = function (a, b) {
	            var c, d, e = g.isVisible();
	            if (b && e)D(a, true); else {
	                c = z.getYear(a);
	                d = z.getMonth(a);
	                if (e && (c != qa || d != ja)) {
	                    g.trigger("onMonthChange", [c, d]);
	                    A(c, d);
	                    k(c, d)
	                }
	                qa = c;
	                ja = d
	            }
	        };
	        g.showMonthView = function () {
	            if ($a && !fa) {
	                c(sa, true);
	                c(Oa, true);
	                S(ha, true);
	                fa = true
	            }
	        };
	        g.changeTab = function (b) {
	            if (g._isVisible && ta[b] && Va != b) {
	                Va = b;
	                a(".dw-cal-pnl", p).removeClass("dw-cal-p-in").addClass("dw-cal-pnl-h");
	                a(".dw-cal-tab", p).removeClass(pb).removeAttr("aria-selected").find(".dw-i").removeClass(jb);
	                a('.dw-cal-tab[data-control="' +
	                    b + '"]', p).addClass(pb).attr("aria-selected", "true").find(".dw-i").addClass(jb);
	                ta[Va].removeClass("dw-cal-pnl-h").addClass("dw-cal-p-in");
	                if (Va === "calendar") {
	                    J = g.getDate(true);
	                    (J.getFullYear() !== ya.getFullYear() || J.getMonth() !== ya.getMonth() || J.getDate() !== ya.getDate()) && D(J)
	                } else {
	                    ya = g.getDate(true);
	                    g.setDate(ya, false, 0, true)
	                }
	                g.showMonthView();
	                g.trigger("onTabChange", [Va])
	            }
	        };
	        M = j.datetime.call(this, g);
	        W = z.dateOrder.search(/m/i);
	        ua = z.dateOrder.search(/y/i);
	        a.extend(M, {
	            ariaMessage: z.calendarText, onMarkupReady: function (b) {
	                var e,
	                    i, j = "";
	                p = b;
	                V = z.display == "inline" ? a(this).is("div") ? a(this) : a(this).parent() : g.context;
	                ya = g.getDate(true);
	                if (!qa) {
	                    qa = z.getYear(ya);
	                    ja = z.getMonth(ya)
	                }
	                T = 0;
	                ea = true;
	                Ya = false;
	                v = z.monthNames;
	                Va = "calendar";
	                if (z.minDate) {
	                    Fa = new Date(z.minDate.getFullYear(), z.minDate.getMonth(), 1);
	                    gb = z.minDate
	                } else gb = Fa = new Date(z.startYear, 0, 1);
	                if (z.maxDate) {
	                    Ka = new Date(z.maxDate.getFullYear(), z.maxDate.getMonth(), 1);
	                    wa = z.maxDate
	                } else wa = Ka = new Date(z.endYear, 11, 31, 23, 59, 59);
	                b.addClass("dw-calendar" + (f ? "" : " dw-cal-no3d"));
	                R = a(".dw", b);
	                Ra = a(".dwcc", b);
	                ta.date ? ta.date = a(".dwc", p).eq(0) : Y && a(".dwc", p).eq(0).addClass("dwc-hh");
	                if (ta.time)ta.time = a(".dwc", p).eq(1);
	                if (Y) {
	                    la = z.months == "auto" ? Math.max(1, Math.min(3, Math.floor((Hb || V[0].innerWidth || V.innerWidth()) / 280))) : z.months;
	                    Ea = la + 2 * na;
	                    Ia = Math.floor(la / 2);
	                    ma = Math.round(la / 2) - 1;
	                    Wa = z.showDivergentDays === w ? la < 2 : z.showDivergentDays;
	                    Pa = Pa && la < 2;
	                    i = '<div class="dw-cal-btnw"><div class="' + (Xa ? "dw-cal-next-m" : "dw-cal-prev-m") + ' dw-cal-prev dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' +
	                        (z.btnCalPrevClass || "") + '" aria-label="' + z.prevMonthText + '"></div></div>';
	                    for (l = 0; l < la; ++l)i = i + ('<div class="dw-cal-btnw-m" style="width: ' + 100 / la + '%"><span role="button" class="dw-cal-month"></span></div>');
	                    i = i + ('<div class="' + (Xa ? "dw-cal-prev-m" : "dw-cal-next-m") + ' dw-cal-next dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' + (z.btnCalNextClass || "") + '" aria-label="' + z.nextMonthText + '"></div></div></div>');
	                    Da && (j = '<div class="dw-cal-btnw"><div class="' + (Xa ? "dw-cal-next-y" :
	                            "dw-cal-prev-y") + ' dw-cal-prev dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' + (z.btnCalPrevClass || "") + '" aria-label="' + z.prevYearText + '"></div></div><span role="button" class="dw-cal-year"></span><div class="' + (Xa ? "dw-cal-prev-y" : "dw-cal-next-y") + ' dw-cal-next dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' + (z.btnCalNextClass || "") + '" aria-label="' + z.nextYearText + '"></div></div></div>');
	                    if ($a) {
	                        pa = z.getYear(Fa);
	                        ia = z.getYear(Ka);
	                        Ba = z.getMonth(Fa);
	                        oa = z.getMonth(Ka);
	                        ob = Math.ceil((ia - pa + 1) / 12) + 2;
	                        Oa = O("month", 36, 24, 0, "", z.monthNames, z.monthNamesShort);
	                        sa = O("year", ob * 12, ia - pa + 13, pa, Ca)
	                    }
	                    E = '<div class="mbsc-w-p dw-cal-c"><div class="dw-cal ' + (la > 1 ? " dw-cal-multi " : "") + (nb ? " dw-weeks " : "") + (Pa ? " mbsc-cal-vertical" : "") + (Wa ? "" : " dw-hide-diff ") + (z.highlightNow ? " dw-hl-now " : "") + (z.calendarClass || "") + '"><div class="dw-cal-header"><div class="dw-cal-btnc ' + (Da ? "dw-cal-btnc-ym" : "dw-cal-btnc-m") + '">' + (ua < W || la > 1 ? j + i : i + j) + '</div></div><div class="dw-cal-body"><div class="dw-cal-m-c dw-cal-v"><div class="dw-cal-days-c">';
	                    for (N = 0; N < la; ++N) {
	                        E = E + ('<div aria-hidden="true" class="dw-cal-days" style="width: ' + 100 / la + '%"><table cellpadding="0" cellspacing="0"><tr>');
	                        for (l = 0; l < 7; l++)E = E + ("<th>" + z["dayNames" + Ta][(l + z.firstDay) % 7] + "</th>");
	                        E = E + "</tr></table></div>"
	                    }
	                    E = E + ('</div><div class="dw-cal-anim-c ' + (z.calendarClass || "") + '"><div class="dw-week-nrs-c ' + (z.weekNrClass || "") + '"><div class="dw-week-nrs"></div></div><div class="dw-cal-anim">');
	                    for (l = 0; l < la + 2 * na; l++)E = E + '<div class="dw-cal-slide" aria-hidden="true"></div>';
	                    E =
	                        E + ("</div></div></div>" + Oa + sa + "</div></div></div>");
	                    ta.calendar = a(E)
	                }
	                a.each(z.controls, function (b, c) {
	                    ta[c] = a('<div class="dw-cal-pnl" id="' + (Fb.id + "_dw_pnl_" + b) + '"></div>').append(a('<div class="dw-cal-pnl-i"></div>').append(ta[c])).appendTo(Ra)
	                });
	                e = '<div class="dw-cal-tabs"><ul role="tablist">';
	                a.each(z.controls, function (a, b) {
	                    ta[b] && (e = e + ('<li role="tab" aria-controls="' + (Fb.id + "_dw_pnl_" + a) + '" class="dw-cal-tab ' + (a ? "" : pb) + '" data-control="' + b + '"><a href="#" class="dwb-e dwb-nhl dw-i ' + (!a ? jb : "") +
	                        '">' + z[b + "Text"] + "</a></li>"))
	                });
	                e = e + "</ul></div>";
	                Ra.before(e);
	                Z = a(".dw-cal-anim-c", p);
	                F = a(".dw-cal-anim", Z);
	                ga = a(".dw-week-nrs", Z);
	                if (Y) {
	                    fa = true;
	                    xa = a(".dw-cal-slide", F).each(function (b, c) {
	                        va.push(a(c))
	                    });
	                    xa.slice(na, na + la).addClass("dw-cal-slide-a").removeAttr("aria-hidden");
	                    for (l = 0; l < Ea; l++)m(va[l], 100 * (l - na) * fb);
	                    k(qa, ja);
	                    X = new h.classes.ScrollView(Z[0], {
	                        axis: Pa ? "Y" : "X",
	                        easing: "",
	                        contSize: 0,
	                        snap: 1,
	                        maxSnapScroll: na,
	                        moveElement: F,
	                        mousewheel: z.mousewheel,
	                        swipe: z.swipe,
	                        liveSwipe: z.liveSwipe,
	                        time: 200,
	                        lock: true,
	                        onScrollStart: function (a, b) {
	                            b.settings.scrollLock = g.scrollLock
	                        },
	                        onScrollEnd: function (a) {
	                            (a = Math.round((a - T) / Q) * fb) && y(qa, ja - a, a > 0 ? "prev" : "next", a > 0 ? a : -a)
	                        }
	                    })
	                }
	                ka = a(".dw-cal-month", p);
	                C = a(".dw-cal-year", p);
	                ha = a(".dw-cal-m-c", p);
	                if ($a) {
	                    ha.on("webkitAnimationEnd animationend", x);
	                    Oa = a(".dw-cal-month-c", p).on("webkitAnimationEnd animationend", x);
	                    sa = a(".dw-cal-year-c", p).on("webkitAnimationEnd animationend", x);
	                    a(".dw-cal-sc-p", p);
	                    hb = {
	                        axis: Pa ? "Y" : "X",
	                        contSize: 0,
	                        snap: 1,
	                        maxSnapScroll: 1,
	                        rtl: z.rtl,
	                        mousewheel: z.mousewheel,
	                        swipe: z.swipe,
	                        liveSwipe: z.liveSwipe,
	                        time: 200
	                    };
	                    Ua = new h.classes.ScrollView(sa[0], hb);
	                    da = new h.classes.ScrollView(Oa[0], hb)
	                }
	                Ga ? b.addClass("dw-cal-liq") : a(".dw-cal", p).width(Hb || 280 * la);
	                z.calendarHeight && a(".dw-cal-anim-c", p).height(z.calendarHeight);
	                g.tap(Z, function (b) {
	                    b = a(b.target);
	                    if (!Ya && !X.scrolled) {
	                        b = b.closest(".dw-cal-day", this);
	                        b.hasClass("dw-cal-day-v") && I.call(b[0])
	                    }
	                });
	                a(".dw-cal-btn", p).on("touchstart mousedown keydown", function (b) {
	                    var c = a(this);
	                    if (b.type !== "keydown") {
	                        b.preventDefault();
	                        b =
	                            r(b, this)
	                    } else b = b.keyCode === 32;
	                    if (!Sa && b && !c.hasClass("dwb-d")) {
	                        Sa = true;
	                        c.hasClass("dw-cal-prev-m") ? K() : c.hasClass("dw-cal-next-m") ? L() : c.hasClass("dw-cal-prev-y") ? G(c) : c.hasClass("dw-cal-next-y") && U(c);
	                        a(t).on("mouseup.dwbtn", function () {
	                            a(t).off(".dwbtn");
	                            Sa = false
	                        })
	                    }
	                }).on("touchend touchcancel keyup", function () {
	                    Sa = false
	                });
	                a(".dw-cal-tab", p).on("touchstart click", function (b) {
	                    r(b, this) && a.mobiscroll.running && g.changeTab(a(this).attr("data-control"))
	                });
	                if ($a) {
	                    g.tap(a(".dw-cal-month", p), function () {
	                        if (!sa.hasClass("dw-cal-v")) {
	                            H(ha);
	                            fa = ha.hasClass("dw-cal-v")
	                        }
	                        H(Oa);
	                        c(sa)
	                    });
	                    g.tap(a(".dw-cal-year", p), function () {
	                        sa.hasClass("dw-cal-v") || Ua.scroll(bb);
	                        if (!Oa.hasClass("dw-cal-v")) {
	                            H(ha);
	                            fa = ha.hasClass("dw-cal-v")
	                        }
	                        H(sa);
	                        c(Oa)
	                    });
	                    g.tap(a(".dw-cal-month-s", p), function () {
	                        !da.scrolled && !a(this).hasClass("dwb-d") && g.navigate(z.getDate(qa, a(this).attr("data-val"), 1))
	                    });
	                    g.tap(a(".dw-cal-year-s", p), function () {
	                        if (!Ua.scrolled) {
	                            J = z.getDate(a(this).attr("data-val"), ja, 1);
	                            g.navigate(new Date(d.constrain(J, Fa, Ka)))
	                        }
	                    });
	                    g.tap(sa, function () {
	                        if (!Ua.scrolled) {
	                            c(sa);
	                            S(ha);
	                            fa = true
	                        }
	                    });
	                    g.tap(Oa, function () {
	                        if (!da.scrolled) {
	                            c(Oa);
	                            S(ha);
	                            fa = true
	                        }
	                    })
	                }
	            }, onShow: function () {
	                Y && A(qa, ja)
	            }, onPosition: function (b, c, d) {
	                var f, h, i, j = 0, k = 0, o = 0;
	                if (Ga) {
	                    yb && Z.height("");
	                    Ra.height("");
	                    F.width("")
	                }
	                Q && (i = Q);
	                if (Q = Math.round(Math.round(parseInt(Z.css(Pa ? "height" : "width"))) / la)) {
	                    p.removeClass("mbsc-cal-m mbsc-cal-l");
	                    Q > 1024 ? p.addClass("mbsc-cal-l") : Q > 640 && p.addClass("mbsc-cal-m")
	                }
	                if (ab && (ea || Ga) || ba) {
	                    a(".dw-cal-pnl", p).removeClass("dw-cal-pnl-h");
	                    a.each(ta, function (a, b) {
	                        f = b.width();
	                        j =
	                            Math.max(j, f);
	                        k = Math.max(k, b.height());
	                        o = o + f
	                    });
	                    if (ab || ba && o > (V[0].innerWidth || V.innerWidth())) {
	                        h = true;
	                        Va = a(".dw-cal-tabs .dw-sel", p).attr("data-control");
	                        R.addClass("dw-cal-tabbed")
	                    } else {
	                        Va = "calendar";
	                        k = j = "";
	                        R.removeClass("dw-cal-tabbed");
	                        Ra.css({width: "", height: ""})
	                    }
	                }
	                if (Ga && yb) {
	                    g._isFullScreen = true;
	                    h && Y && Ra.height(ta.calendar.height());
	                    b = R.height();
	                    d >= b && Z.height(d - b + Z.height());
	                    Y && (k = Math.max(k, ta.calendar.height()))
	                }
	                if (h) {
	                    Ra.css({width: Ga ? "" : j, height: k});
	                    Q = Math.round(Math.round(parseInt(Z.css(Pa ?
	                            "height" : "width"))) / la)
	                }
	                if (Q) {
	                    F[Pa ? "height" : "width"](Q);
	                    if (Q !== i) {
	                        if (Da) {
	                            v = z.maxMonthWidth > a(".dw-cal-btnw-m", p).width() ? z.monthNamesShort : z.monthNames;
	                            for (l = 0; l < la; ++l)a(ka[l]).text(v[z.getMonth(z.getDate(qa, ja - ma + l, 1))])
	                        }
	                        if ($a) {
	                            d = sa[Pa ? "height" : "width"]();
	                            a.extend(Ua.settings, {contSize: d, snap: d, minScroll: (2 - ob) * d, maxScroll: -d});
	                            a.extend(da.settings, {contSize: d, snap: d, minScroll: -d, maxScroll: -d});
	                            Ua.refresh();
	                            da.refresh();
	                            sa.hasClass("dw-cal-v") && Ua.scroll(bb)
	                        }
	                        if (Ga && !ea && i) {
	                            d = T / i;
	                            T = d * Q
	                        }
	                        e(qa, ja, !i)
	                    }
	                } else Q =
	                    i;
	                if (h) {
	                    a(".dw-cal-pnl", p).addClass("dw-cal-pnl-h");
	                    ta[Va].removeClass("dw-cal-pnl-h")
	                }
	                g.trigger("onCalResize", []);
	                ea = false
	            }, onHide: function () {
	                eb = [];
	                va = [];
	                ja = qa = Va = null;
	                Ya = true;
	                Q = 0;
	                X && X.destroy();
	                if ($a && Ua && da) {
	                    Ua.destroy();
	                    da.destroy()
	                }
	            }, onValidated: function (a) {
	                var b, c, d;
	                c = g.getDate(true);
	                if (aa)b = "calendar"; else for (d in g.order)d && g.order[d] === a && (b = /[mdy]/.test(d) ? "date" : "time");
	                g.trigger("onSetDate", [{date: c, control: b}]);
	                D(c);
	                aa = false
	            }
	        });
	        return M
	    }
	})($, window, document);
	(function (a, n) {
	    var t = a.mobiscroll, w = t.datetime, h = new Date, j = {
	        startYear: h.getFullYear() - 100,
	        endYear: h.getFullYear() + 1,
	        separator: " ",
	        dateFormat: "mm/dd/yy",
	        dateOrder: "mmddy",
	        timeWheels: "hhiiA",
	        timeFormat: "hh:ii A",
	        dayText: "Day",
	        monthText: "Month",
	        yearText: "Year",
	        hourText: "Hours",
	        minuteText: "Minutes",
	        ampmText: "&nbsp;",
	        secText: "Seconds",
	        nowText: "Now"
	    }, d = function (d) {
	        function h(a, b, c) {
	            return M[b] !== n ? +a[M[b]] : R[b] !== n ? R[b] : c !== n ? c : p[b](ea)
	        }

	        function r(a, b, c, d) {
	            a.push({values: c, keys: b, label: d})
	        }

	        function b(a,
	                   b, c, d) {
	            return Math.min(d, Math.floor(a / b) * b + c)
	        }

	        function g(a) {
	            if (null === a)return a;
	            var b = h(a, "y"), c = h(a, "m"), d = Math.min(h(a, "d", 1), x.getMaxDayOfMonth(b, c)), e = h(a, "h", 0);
	            return x.getDate(b, c, d, h(a, "a", 0) ? e + 12 : e, h(a, "i", 0), h(a, "s", 0), h(a, "u", 0))
	        }

	        function P(a, b) {
	            var c, d, e = !1, f = !1, h = 0, l = 0;
	            v = g(B(v));
	            X = g(B(X));
	            if (i(a))return a;
	            a < v && (a = v);
	            a > X && (a = X);
	            d = c = a;
	            if (2 !== b)for (e = i(c); !e && c < X;)c = new Date(c.getTime() + 864E5), e = i(c), h++;
	            if (1 !== b)for (f = i(d); !f && d > v;)d = new Date(d.getTime() - 864E5), f = i(d), l++;
	            return 1 === b &&
	            e ? c : 2 === b && f ? d : l <= h && f ? d : c
	        }

	        function i(a) {
	            return a < v || a > X ? !1 : O(a, Z) ? !0 : O(a, V) ? !1 : !0
	        }

	        function O(a, b) {
	            var c, d, e;
	            if (b)for (d = 0; d < b.length; d++)if (c = b[d], e = c + "", !c.start)if (c.getTime) {
	                if (a.getFullYear() == c.getFullYear() && a.getMonth() == c.getMonth() && a.getDate() == c.getDate())return !0
	            } else if (e.match(/w/i)) {
	                if (e = +e.replace("w", ""), e == a.getDay())return !0
	            } else if (e = e.split("/"), e[1]) {
	                if (e[0] - 1 == a.getMonth() && e[1] == a.getDate())return !0
	            } else if (e[0] == a.getDate())return !0;
	            return !1
	        }

	        function u(a, b, c, d, e, f, g) {
	            var h,
	                i, l;
	            if (a)for (h = 0; h < a.length; h++)if (i = a[h], l = i + "", !i.start)if (i.getTime)x.getYear(i) == b && x.getMonth(i) == c && (f[x.getDay(i) - 1] = g); else if (l.match(/w/i)) {
	                l = +l.replace("w", "");
	                for (m = l - d; m < e; m += 7)0 <= m && (f[m] = g)
	            } else l = l.split("/"), l[1] ? l[0] - 1 == c && (f[l[1] - 1] = g) : f[l[0] - 1] = g
	        }

	        function A(d, e, f, g, h, i, k, j, p) {
	            var F, m, s, q, v, E, C, r, R, u, N, M, A, w, O, y, t, B, Q = {}, J = {
	                h: ga,
	                i: ha,
	                s: fa,
	                a: 1
	            }, W = x.getDate(h, i, k), P = ["a", "h", "i", "s"];
	            d && (a.each(d, function (a, b) {
	                if (b.start && (b.apply = !1, F = b.d, m = F + "", s = m.split("/"), F && (F.getTime && h ==
	                    x.getYear(F) && i == x.getMonth(F) && k == x.getDay(F) || !m.match(/w/i) && (s[1] && k == s[1] && i == s[0] - 1 || !s[1] && k == s[0]) || m.match(/w/i) && W.getDay() == +m.replace("w", ""))))b.apply = !0, Q[W] = !0
	            }), a.each(d, function (d, g) {
	                N = w = A = 0;
	                M = n;
	                C = E = !0;
	                O = !1;
	                if (g.start && (g.apply || !g.d && !Q[W])) {
	                    q = g.start.split(":");
	                    v = g.end.split(":");
	                    for (u = 0; 3 > u; u++)q[u] === n && (q[u] = 0), v[u] === n && (v[u] = 59), q[u] = +q[u], v[u] = +v[u];
	                    q.unshift(11 < q[0] ? 1 : 0);
	                    v.unshift(11 < v[0] ? 1 : 0);
	                    Y && (12 <= q[1] && (q[1] -= 12), 12 <= v[1] && (v[1] -= 12));
	                    for (u = 0; u < e; u++)if (l[u] !== n) {
	                        r =
	                            b(q[u], J[P[u]], c[P[u]], H[P[u]]);
	                        R = b(v[u], J[P[u]], c[P[u]], H[P[u]]);
	                        B = t = y = 0;
	                        Y && 1 == u && (y = q[0] ? 12 : 0, t = v[0] ? 12 : 0, B = l[0] ? 12 : 0);
	                        E || (r = 0);
	                        C || (R = H[P[u]]);
	                        if ((E || C) && r + y < l[u] + B && l[u] + B < R + t)O = !0;
	                        l[u] != r && (E = !1);
	                        l[u] != R && (C = !1)
	                    }
	                    if (!p)for (u = e + 1; 4 > u; u++)0 < q[u] && (A = J[f]), v[u] < H[P[u]] && (w = J[f]);
	                    O || (r = b(q[e], J[f], c[f], H[f]) + A, R = b(v[e], J[f], c[f], H[f]) - w, E && (N = 0 > r ? 0 : r > H[f] ? a(".dw-li", j).length : o(j, r) + 0), C && (M = 0 > R ? 0 : R > H[f] ? a(".dw-li", j).length : o(j, R) + 1));
	                    if (E || C || O)p ? a(".dw-li", j).slice(N, M).addClass("dw-v") : a(".dw-li",
	                        j).slice(N, M).removeClass("dw-v")
	                }
	            }))
	        }

	        function o(b, c) {
	            return a(".dw-li", b).index(a('.dw-li[data-val="' + c + '"]', b))
	        }

	        function B(b, c) {
	            var d = [];
	            if (null === b || b === n)return b;
	            a.each("y,m,d,a,h,i,s,u".split(","), function (a, e) {
	                M[e] !== n && (d[M[e]] = p[e](b));
	                c && (R[e] = p[e](b))
	            });
	            return d
	        }

	        function D(a) {
	            var b, c, d, e = [];
	            if (a) {
	                for (b = 0; b < a.length; b++)if (c = a[b], c.start && c.start.getTime)for (d = new Date(c.start); d <= c.end;)e.push(new Date(d.getFullYear(), d.getMonth(), d.getDate())), d.setDate(d.getDate() + 1); else e.push(c);
	                return e
	            }
	            return a
	        }

	        var k = a(this), e = {}, q;
	        if (k.is("input")) {
	            switch (k.attr("type")) {
	                case "date":
	                    q = "yy-mm-dd";
	                    break;
	                case "datetime":
	                    q = "yy-mm-ddTHH:ii:ssZ";
	                    break;
	                case "datetime-local":
	                    q = "yy-mm-ddTHH:ii:ss";
	                    break;
	                case "month":
	                    q = "yy-mm";
	                    e.dateOrder = "mmyy";
	                    break;
	                case "time":
	                    q = "HH:ii:ss"
	            }
	            var y = k.attr("min"), k = k.attr("max");
	            y && (e.minDate = w.parseDate(q, y));
	            k && (e.maxDate = w.parseDate(q, k))
	        }
	        var I, m, L, K, U, G, S, c, H, y = a.extend({}, d.settings), x = a.extend(d.settings, t.datetime.defaults, j, e, y), J = 0, l = [], e = [], N = [], M = {}, R = {}, p = {
	            y: function (a) {
	                return x.getYear(a)
	            },
	            m: function (a) {
	                return x.getMonth(a)
	            }, d: function (a) {
	                return x.getDay(a)
	            }, h: function (a) {
	                a = a.getHours();
	                a = Y && 12 <= a ? a - 12 : a;
	                return b(a, ga, da, C)
	            }, i: function (a) {
	                return b(a.getMinutes(), ha, ka, ua)
	            }, s: function (a) {
	                return b(a.getSeconds(), fa, W, pa)
	            }, u: function (a) {
	                return a.getMilliseconds()
	            }, a: function (a) {
	                return aa && 11 < a.getHours() ? 1 : 0
	            }
	        }, V = x.invalid, Z = x.valid, y = x.preset, F = x.dateOrder, Q = x.timeWheels, T = F.match(/D/), aa = Q.match(/a/i), Y = Q.match(/h/), E = "datetime" == y ? x.dateFormat + x.separator + x.timeFormat : "time" == y ? x.timeFormat :
	            x.dateFormat, ea = new Date, k = x.steps || {}, ga = k.hour || x.stepHour || 1, ha = k.minute || x.stepMinute || 1, fa = k.second || x.stepSecond || 1, k = k.zeroBased, v = x.minDate || new Date(x.startYear, 0, 1), X = x.maxDate || new Date(x.endYear, 11, 31, 23, 59, 59), da = k ? 0 : v.getHours() % ga, ka = k ? 0 : v.getMinutes() % ha, W = k ? 0 : v.getSeconds() % fa, C = Math.floor(((Y ? 11 : 23) - da) / ga) * ga + da, ua = Math.floor((59 - ka) / ha) * ha + ka, pa = Math.floor((59 - ka) / ha) * ha + ka;
	        q = q || E;
	        if (y.match(/date/i)) {
	            a.each(["y", "m", "d"], function (a, b) {
	                I = F.search(RegExp(b, "i"));
	                -1 < I && N.push({
	                    o: I,
	                    v: b
	                })
	            });
	            N.sort(function (a, b) {
	                return a.o > b.o ? 1 : -1
	            });
	            a.each(N, function (a, b) {
	                M[b.v] = a
	            });
	            k = [];
	            for (m = 0; 3 > m; m++)if (m == M.y) {
	                J++;
	                K = [];
	                L = [];
	                U = x.getYear(v);
	                G = x.getYear(X);
	                for (I = U; I <= G; I++)L.push(I), K.push((F.match(/yy/i) ? I : (I + "").substr(2, 2)) + (x.yearSuffix || ""));
	                r(k, L, K, x.yearText)
	            } else if (m == M.m) {
	                J++;
	                K = [];
	                L = [];
	                for (I = 0; 12 > I; I++)U = F.replace(/[dy]/gi, "").replace(/mm/, (9 > I ? "0" + (I + 1) : I + 1) + (x.monthSuffix || "")).replace(/m/, I + 1 + (x.monthSuffix || "")), L.push(I), K.push(U.match(/MM/) ? U.replace(/MM/, '<span class="dw-mon">' +
	                    x.monthNames[I] + "</span>") : U.replace(/M/, '<span class="dw-mon">' + x.monthNamesShort[I] + "</span>"));
	                r(k, L, K, x.monthText)
	            } else if (m == M.d) {
	                J++;
	                K = [];
	                L = [];
	                for (I = 1; 32 > I; I++)L.push(I), K.push((F.match(/dd/i) && 10 > I ? "0" + I : I) + (x.daySuffix || ""));
	                r(k, L, K, x.dayText)
	            }
	            e.push(k)
	        }
	        if (y.match(/time/i)) {
	            S = !0;
	            N = [];
	            a.each(["h", "i", "s", "a"], function (a, b) {
	                a = Q.search(RegExp(b, "i"));
	                -1 < a && N.push({o: a, v: b})
	            });
	            N.sort(function (a, b) {
	                return a.o > b.o ? 1 : -1
	            });
	            a.each(N, function (a, b) {
	                M[b.v] = J + a
	            });
	            k = [];
	            for (m = J; m < J + 4; m++)if (m == M.h) {
	                J++;
	                K = [];
	                L = [];
	                for (I = da; I < (Y ? 12 : 24); I += ga)L.push(I), K.push(Y && 0 === I ? 12 : Q.match(/hh/i) && 10 > I ? "0" + I : I);
	                r(k, L, K, x.hourText)
	            } else if (m == M.i) {
	                J++;
	                K = [];
	                L = [];
	                for (I = ka; 60 > I; I += ha)L.push(I), K.push(Q.match(/ii/) && 10 > I ? "0" + I : I);
	                r(k, L, K, x.minuteText)
	            } else if (m == M.s) {
	                J++;
	                K = [];
	                L = [];
	                for (I = W; 60 > I; I += fa)L.push(I), K.push(Q.match(/ss/) && 10 > I ? "0" + I : I);
	                r(k, L, K, x.secText)
	            } else m == M.a && (J++, y = Q.match(/A/), r(k, [0, 1], y ? [x.amText.toUpperCase(), x.pmText.toUpperCase()] : [x.amText, x.pmText], x.ampmText));
	            e.push(k)
	        }
	        d.getVal = function (a) {
	            return d._hasValue ||
	            a ? g(d.getArrayVal(a)) : null
	        };
	        d.setDate = function (a, b, c, e, g) {
	            d.setArrayVal(B(a), b, g, e, c)
	        };
	        d.getDate = d.getVal;
	        d.format = E;
	        d.order = M;
	        d.handlers.now = function () {
	            d.setDate(new Date, !1, 0.3, !0, !0)
	        };
	        d.buttons.now = {text: x.nowText, handler: "now"};
	        V = D(V);
	        Z = D(Z);
	        c = {y: v.getFullYear(), m: 0, d: 1, h: da, i: ka, s: W, a: 0};
	        H = {y: X.getFullYear(), m: 11, d: 31, h: C, i: ua, s: pa, a: 1};
	        return {
	            wheels: e, headerText: x.headerText ? function () {
	                return w.formatDate(E, g(d.getArrayVal(!0)), x)
	            } : !1, formatValue: function (a) {
	                return w.formatDate(q, g(a), x)
	            }, parseValue: function (a) {
	                a ||
	                (R = {});
	                return B(a ? w.parseDate(q, a, x) : x.defaultValue || new Date, !!a && !!a.getTime)
	            }, validate: function (b, e, i, j) {
	                var e = P(g(d.getArrayVal(!0)), j), k = B(e), m = h(k, "y"), q = h(k, "m"), Y = !0, E = !0;
	                a.each("y,m,d,a,h,i,s".split(","), function (d, e) {
	                    if (M[e] !== n) {
	                        var f = c[e], g = H[e], i = 31, l = h(k, e), j = a(".dw-ul", b).eq(M[e]);
	                        if (e == "d") {
	                            g = i = x.getMaxDayOfMonth(m, q);
	                            T && a(".dw-li", j).each(function () {
	                                var b = a(this), c = b.data("val"), d = x.getDate(m, q, c).getDay(), c = F.replace(/[my]/gi, "").replace(/dd/, (c < 10 ? "0" + c : c) + (x.daySuffix || "")).replace(/d/,
	                                    c + (x.daySuffix || ""));
	                                a(".dw-i", b).html(c.match(/DD/) ? c.replace(/DD/, '<span class="dw-day">' + x.dayNames[d] + "</span>") : c.replace(/D/, '<span class="dw-day">' + x.dayNamesShort[d] + "</span>"))
	                            })
	                        }
	                        Y && v && (f = p[e](v));
	                        E && X && (g = p[e](X));
	                        if (e != "y") {
	                            var C = o(j, f), r = o(j, g);
	                            a(".dw-li", j).removeClass("dw-v").slice(C, r + 1).addClass("dw-v");
	                            e == "d" && a(".dw-li", j).removeClass("dw-h").slice(i).addClass("dw-h")
	                        }
	                        l < f && (l = f);
	                        l > g && (l = g);
	                        Y && (Y = l == f);
	                        E && (E = l == g);
	                        if (e == "d") {
	                            f = x.getDate(m, q, 1).getDay();
	                            g = {};
	                            u(V, m, q, f, i, g, 1);
	                            u(Z, m,
	                                q, f, i, g, 0);
	                            a.each(g, function (b, c) {
	                                c && a(".dw-li", j).eq(b).removeClass("dw-v")
	                            })
	                        }
	                    }
	                });
	                S && a.each(["a", "h", "i", "s"], function (c, e) {
	                    var g = h(k, e), i = h(k, "d"), p = a(".dw-ul", b).eq(M[e]);
	                    M[e] !== n && (A(V, c, e, k, m, q, i, p, 0), A(Z, c, e, k, m, q, i, p, 1), l[c] = +d.getValidCell(g, p, j).val)
	                });
	                d._tempWheelArray = k
	            }
	        }
	    };
	    a.each(["date", "time", "datetime"], function (a, h) {
	        t.presets.scroller[h] = d
	    })
	})($);
	(function (a, n) {
	    var t = a.mobiscroll, w = t.presets.scroller, h = t.datetime, j = t.util.testTouch, d = {
	        autoCorrect: !0,
	        showSelector: !0,
	        minRange: 1,
	        fromText: "Start",
	        toText: "End"
	    };
	    t.presetShort("rangepicker");
	    t.presetShort("range");
	    w.range = w.rangepicker = function (f) {
	        function s(a, b) {
	            a && (a.setFullYear(b.getFullYear()), a.setMonth(b.getMonth()), a.setDate(b.getDate()))
	        }

	        function r(b, d) {
	            var f = !0;
	            if (b && e && q && (q - e > c.maxRange - 1 && (f = !1, G ? e = new Date(q - c.maxRange + 1) : q = new Date(+e + c.maxRange - 1)), q - e < c.minRange - 1))f = !1, G ? e = new Date(q -
	                c.minRange + 1) : q = new Date(+e + c.minRange - 1);
	            if (!e || !q)f = !1;
	            if (d) {
	                var g, l, j, o, m, n = 0, s = x || !G ? " dw-cal-day-hl dw-cal-sel-start" : " dw-cal-sel-start", r = x || G ? " dw-cal-day-hl dw-cal-sel-end" : " dw-cal-sel-end";
	                D = e ? h.formatDate(u, e, c) : "";
	                k = q ? h.formatDate(u, q, c) : "";
	                if (i && (a(".dw-drv0", i).html(D || "&nbsp;"), a(".dw-drv1", i).html(k || "&nbsp;"), g = e ? new Date(e) : null, j = q ? new Date(q) : null, !g && j && (g = new Date(j)), !j && g && (j = new Date(g)), m = G ? j : g, a(".dw-cal-table .dw-sel .dw-i", i).removeClass(J), a(".dw-cal-table .dw-cal-day-hl",
	                        i).removeClass(N), a(".dw-cal-table .dw-sel", i).removeClass("dw-sel dw-cal-sel-start dw-cal-sel-end").removeAttr("aria-selected"), g && j)) {
	                    l = g.setHours(0, 0, 0, 0);
	                    for (o = j.setHours(0, 0, 0, 0); j >= g && 84 > n;)a('.dw-cal-day[data-full="' + m.getFullYear() + "-" + m.getMonth() + "-" + m.getDate() + '"]', i).addClass("dw-sel" + (m.getTime() === l ? s : "") + (m.getTime() === o ? r : "")).attr("aria-selected", "true").find(".dw-i ").addClass(J), m.setDate(m.getDate() + (G ? -1 : 1)), n++
	                }
	            }
	            return f
	        }

	        function b(a) {
	            a.addClass("dw-sel").attr("aria-checked",
	                "true").find(".dw-dr").addClass(J)
	        }

	        function g() {
	            L && (a(".dw-dr-c", i).removeClass("dw-sel").removeAttr("aria-checked").find(".dw-dr", i).removeClass(J), x ? (e && b(a(".dw-dr-c", i).eq(0)), q && b(a(".dw-dr-c", i).eq(1))) : b(a(".dw-dr-c", i).eq(G)))
	        }

	        var t, i, O, u, A, o, B, D, k, e, q, y, I, m, L, K = f._startDate, U = f._endDate, G = 0;
	        A = new Date;
	        var S = a.extend({}, f.settings), c = a.extend(f.settings, d, S), H = c.anchor, x = c.rangeTap, J = c.activeClass || "", l = "dwb-d " + (c.disabledClass || ""), N = "dw-cal-day-hl", M = null === c.defaultValue ? [] : c.defaultValue ||
	        [new Date(A.setHours(0, 0, 0, 0)), new Date(A.getFullYear(), A.getMonth(), A.getDate() + 6, 23, 59, 59, 999)];
	        x && (c.tabs = !0);
	        A = w.calbase.call(this, f);
	        t = a.extend({}, A);
	        u = f.format;
	        y = "time" === c.controls.join("");
	        L = 1 == c.controls.length && "calendar" == c.controls[0] ? c.showSelector : !0;
	        c.startInput && (I = a(c.startInput).prop("readonly"), f.attachShow(a(c.startInput).prop("readonly", !0), function () {
	            G = 0;
	            c.anchor = H || a(c.startInput)
	        }));
	        c.endInput && (m = a(c.endInput).prop("readonly"), f.attachShow(a(c.endInput).prop("readonly", !0),
	            function () {
	                G = 1;
	                c.anchor = H || a(c.endInput)
	            }));
	        f.setVal = function (a, b, d, g, i) {
	            var l = a || [];
	            if (l[0] === n || l[0] === null || l[0].getTime) {
	                B = true;
	                D = (e = l[0] || null) ? h.formatDate(u, e, c) : "";
	                G || (a = t.parseValue(D, f))
	            }
	            if (l[1] === n || l[1] === null || l[1].getTime) {
	                B = true;
	                k = (q = l[1] || null) ? h.formatDate(u, q, c) : "";
	                G && (a = t.parseValue(k, f))
	            }
	            if (!g) {
	                f._startDate = K = e;
	                f._endDate = U = q
	            }
	            f._setVal(a, b, d, g, i)
	        };
	        f.getVal = function (a) {
	            return a ? [e, q] : f._hasValue ? [K, U] : null
	        };
	        f.getDayProps = function (a) {
	            var b = e ? new Date(e.getFullYear(), e.getMonth(),
	                e.getDate()) : null, c = q ? new Date(q.getFullYear(), q.getMonth(), q.getDate()) : null;
	            return {
	                selected: b && c && a >= b && a <= q,
	                cssClass: ((x || !G) && b && b.getTime() === a.getTime() || (x || G) && c && c.getTime() === a.getTime() ? N : "") + (b && b.getTime() === a.getTime() ? " dw-cal-sel-start" : "") + (c && c.getTime() === a.getTime() ? " dw-cal-sel-end" : "")
	            }
	        };
	        f.setActiveDate = function (b) {
	            b = (G = b == "start" ? 0 : 1) ? q : e;
	            if (f.isVisible()) {
	                if (!x) {
	                    g();
	                    a(".dw-cal-table .dw-cal-day-hl", i).removeClass(N);
	                    b && a('.dw-cal-day[data-full="' + b.getFullYear() + "-" + b.getMonth() +
	                        "-" + b.getDate() + '"]', i).addClass(N)
	                }
	                if (b) {
	                    o = true;
	                    f.setDate(b, false, 0.2, true)
	                }
	            }
	        };
	        f.setValue = function (a, b, c, d, e) {
	            f.setVal(a, b, e, d, c)
	        };
	        f.getValue = f.getVal;
	        a.extend(A, {
	            highlight: !1, divergentDayChange: !1, formatValue: function () {
	                return D + (c.endInput ? "" : k ? " - " + k : "")
	            }, parseValue: function (b) {
	                b = b ? b.split(" - ") : [];
	                c.defaultValue = M[1];
	                U = c.endInput ? a(c.endInput).val() ? h.parseDate(u, a(c.endInput).val(), c) : M[1] : b[1] ? h.parseDate(u, b[1], c) : M[1];
	                c.defaultValue = M[0];
	                K = c.startInput ? a(c.startInput).val() ? h.parseDate(u,
	                    a(c.startInput).val(), c) : M[0] : b[0] ? h.parseDate(u, b[0], c) : M[0];
	                c.defaultValue = M[G];
	                D = K ? h.formatDate(u, K, c) : "";
	                k = U ? h.formatDate(u, U, c) : "";
	                f._startDate = K;
	                f._endDate = U;
	                return t.parseValue(G ? k : D, f)
	            }, onValueFill: function (b, d) {
	                f._startDate = K = e;
	                f._endDate = U = q;
	                if (c.startInput) {
	                    a(c.startInput).val(D);
	                    d && a(c.startInput).change()
	                }
	                if (c.endInput) {
	                    a(c.endInput).val(k);
	                    d && a(c.endInput).change()
	                }
	            }, onBeforeClose: function (a, b) {
	                if (b === "set" && !r(true, true)) {
	                    f.setActiveDate(G ? "start" : "end");
	                    return false
	                }
	            }, onHide: function () {
	                t.onHide.call(f);
	                G = 0;
	                i = null;
	                c.anchor = H
	            }, onClear: function () {
	                x && (G = 0)
	            }, onBeforeShow: function () {
	                c.headerText = false;
	                e = K;
	                q = U;
	                if (c.counter)c.headerText = function () {
	                    var a = e && q ? Math.max(1, Math.round(((new Date(q)).setHours(0, 0, 0, 0) - (new Date(e)).setHours(0, 0, 0, 0)) / 864E5) + 1) : 0;
	                    return (a > 1 ? c.selectedPluralText || c.selectedText : c.selectedText).replace(/{count}/, a)
	                };
	                B = true
	            }, onMarkupReady: function (b) {
	                var d;
	                i = b;
	                if (e) {
	                    o = true;
	                    f.setDate(e, false, 0, true);
	                    e = f.getDate(true)
	                }
	                if (q) {
	                    o = true;
	                    f.setDate(q, false, 0, true);
	                    q = f.getDate(true)
	                }
	                if (G &&
	                    q || !G && e) {
	                    o = true;
	                    f.setDate(G ? q : e, false, 0, true)
	                }
	                t.onMarkupReady.call(this, b);
	                b.addClass("dw-range");
	                if (L) {
	                    d = '<div class="dw-dr-t" role="radiogroup"><div class="dw-dr-c dw-dr0"><div role="radio" class="dwb-e dwb-nhl dw-i dw-dr">' + c.fromText + '<div class="dw-drv dw-drv0">' + (D || "&nbsp;") + '</div></div></div><div class="dw-dr-c dw-dr1"><div role="radio" class="dwb-e dwb-nhl dw-i dw-dr">' + c.toText + '<div class="dw-drv dw-drv1">' + (k || "&nbsp;") + "</div></div></div></div>";
	                    a(".dw-cal-tabs", b).before(d);
	                    g()
	                }
	                a(".dw-dr-c",
	                    b).on("touchstart click", function (b) {
	                        if (j(b, this)) {
	                            f.showMonthView();
	                            f.setActiveDate(a(this).index() ? "end" : "start")
	                        }
	                    })
	            }, onDayChange: function (a) {
	                a.active = G ? "end" : "start";
	                O = true
	            }, onSetDate: function (b) {
	                var d = b.date, h = f.order;
	                if (!o) {
	                    h.h === n && d.setHours(G ? 23 : 0);
	                    h.i === n && d.setMinutes(G ? 59 : 0);
	                    h.s === n && d.setSeconds(G ? 59 : 0);
	                    d.setMilliseconds(G ? 999 : 0);
	                    if (!B || O) {
	                        if (x && O) {
	                            G == 1 && d < e && (G = 0);
	                            G ? d.setHours(23, 59, 59, 999) : d.setHours(0, 0, 0, 0)
	                        }
	                        G ? q = new Date(d) : e = new Date(d);
	                        if (y) {
	                            s(e, d);
	                            s(q, d)
	                        }
	                        x && O && !G && (q = null)
	                    }
	                }
	                f._isValid =
	                    r(B || O || c.autoCorrect, !o);
	                b.active = G ? "end" : "start";
	                if (!o && x) {
	                    O && (G = G ? 0 : 1);
	                    g()
	                }
	                f.isVisible() && (f._isValid ? a(".dwb-s .dwb", f._markup).removeClass(l) : a(".dwb-s .dwb", f._markup).addClass(l));
	                o = B = O = false
	            }, onTabChange: function () {
	                r(true, true)
	            }, onDestroy: function () {
	                a(c.startInput).prop("readonly", I);
	                a(c.endInput).prop("readonly", m)
	            }
	        });
	        return A
	    }
	})($);
	(function (a, n) {
	    var t = a.mobiscroll, w = {
	        wheelOrder: "hhiiss",
	        useShortLabels: !1,
	        minTime: 0,
	        maxTime: Infinity,
	        labels: "Years,Months,Days,Hours,Minutes,Seconds".split(","),
	        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs".split(",")
	    };
	    t.presetShort("timespan");
	    t.presets.scroller.timespan = function (h) {
	        function j(b) {
	            var c = {};
	            a(m).each(function (a, d) {
	                c[d] = G[d] ? Math.floor(b / L[d].limit) : 0;
	                b -= c[d] * L[d].limit
	            });
	            return c
	        }

	        function d(a, b) {
	            var c = !1, d = U[G[a] - 1] || 1, f = L[a], h = f.wheel, i = f.prefix;
	            A = 0;
	            o = f.until;
	            a == S && (A = Math.max(k[a],
	                b[a] - 50 * d), o = Math.min(e[a], A + 100 * d), g = A + 5 * d, P = o - 5 * d);
	            h.keys = [];
	            h.values = [];
	            h.label = f.label;
	            I.match(RegExp(f.re + f.re, "i")) && (c = !0);
	            for (s = A; s <= o; s += d)h.keys.push(s), h.values.push((i || "") + (10 > s && c ? "0" : "") + s + '<span class="dwtlbl">' + f.label + "</span>")
	        }

	        function f(b) {
	            var c = 0;
	            a.each(K, function (a, d) {
	                isNaN(+b[0]) || (c += L[d.v].limit * b[a])
	            });
	            return c
	        }

	        var s, r, b, g, P, i, O, u, A, o, B, D, k, e, q = a.extend({}, h.settings), y = a.extend(h.settings, w, q), I = y.wheelOrder, q = y.useShortLabels ? y.labelsShort : y.labels, m = "years,months,days,hours,minutes,seconds".split(","),
	            L = {
	                years: {ord: 0, index: 6, until: 10, limit: 31536E6, label: q[0], re: "y", wheel: {}},
	                months: {ord: 1, index: 5, until: 11, limit: 2592E6, label: q[1], re: "m", wheel: {}},
	                days: {ord: 2, index: 4, until: 31, limit: 864E5, label: q[2], re: "d", wheel: {}},
	                hours: {ord: 3, index: 3, until: 23, limit: 36E5, label: q[3], re: "h", wheel: {}},
	                minutes: {ord: 4, index: 2, until: 59, limit: 6E4, label: q[4], re: "i", wheel: {}},
	                seconds: {ord: 5, index: 1, until: 59, limit: 1E3, label: q[5], re: "s", wheel: {}}
	            }, K = [], U = y.steps || [], G = {}, S = "seconds", c = 0, H = y.defaultValue || Math.max(y.minTime,
	                    Math.min(0, y.maxTime)), x = [[]];
	        b = 0;
	        u = j(b);
	        k = j(y.minTime);
	        e = j(y.maxTime);
	        a(m).each(function (a, b) {
	            r = I.search(RegExp(L[b].re, "i"));
	            -1 < r && (K.push({o: r, v: b}), L[b].index > L[S].index && (S = b))
	        });
	        K.sort(function (a, b) {
	            return a.o > b.o ? 1 : -1
	        });
	        a.each(K, function (a, b) {
	            b.v == S && (c = a);
	            G[b.v] = a + 1;
	            x[0].push(L[b.v].wheel);
	            d(b.v, u)
	        });
	        h.getVal = function (a, b) {
	            return b ? h._getVal(a) : h._hasValue || a ? f(h.getArrayVal(a)) : null
	        };
	        return {
	            mode: "scroller", showLabel: !0, wheels: x, parseValue: function (b) {
	                var c = [], d;
	                t.util.isNumeric(b) || !b ? (u =
	                    j(b || H), a.each(K, function (a, b) {
	                    c.push(u[b.v])
	                })) : a.each(K, function (a, e) {
	                    d = RegExp("(\\d+)\\s?(" + y.labels[L[e.v].ord] + "|" + y.labelsShort[L[e.v].ord] + ")", "gi").exec(b);
	                    c.push(d ? d[1] : 0)
	                });
	                a(c).each(function (a, b) {
	                    c[a] = Math.floor(b / (U[a] || 1)) * (U[a] || 1)
	                });
	                return c
	            }, formatValue: function (b) {
	                var c = "";
	                a.each(K, function (a, d) {
	                    c += +b[a] ? b[a] + " " + L[d.v].label + " " : ""
	                });
	                return c.replace(/\s+$/g, "")
	            }, validate: function (q, l, s) {
	                var u, r, p = h._tempWheelArray;
	                b = f(p);
	                u = j(b);
	                if (l === c || !i && (p[c] < g || p[c] > P))if (d(S, u), B !== A || D !==
	                    o)r = p[c], O = setTimeout(function () {
	                    B = A;
	                    D = o;
	                    i = !0;
	                    p[c] = r;
	                    h.changeWheel([c], n, l !== n)
	                }, 1E3 * s);
	                var w = !0, t = !0;
	                a(m).each(function (b, c) {
	                    if (G[c] !== n) {
	                        var d = a(".dw-ul", q).eq(G[c] - 1), f = a(".dw-li", d).index(a('.dw-li[data-val="' + e[c] + '"]', d)), g = a(".dw-li", d).index(a('.dw-li[data-val="' + k[c] + '"]', d));
	                        a(".dw-li", d).addClass("dw-v");
	                        w && -1 < f && a(".dw-li", d).slice(f + 1).removeClass("dw-v");
	                        t && -1 < g && a(".dw-li", d).slice(0, g).removeClass("dw-v");
	                        w = w && u[c] == e[c];
	                        t = t && u[c] == k[c]
	                    }
	                });
	                i = !1
	            }, onBeforeShow: function () {
	                b = f(h._tempWheelArray);
	                u = j(b);
	                k = j(y.minTime);
	                e = j(y.maxTime);
	                d(S, u)
	            }, onMarkupReady: function (b) {
	                b.addClass("dw-timespan");
	                a(".dwwl" + c, b).on("mousedown touchstart", function () {
	                    clearTimeout(O)
	                })
	            }
	        }
	    }
	})($);
	(function (a, n) {
	    var t = a.mobiscroll, w = {
	        controls: ["start", "reset"],
	        autostart: !1,
	        step: 1,
	        useShortLabels: !1,
	        labels: "Years,Months,Days,Hours,Minutes,Seconds,".split(","),
	        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","),
	        startText: "Start",
	        stopText: "Stop",
	        resetText: "Reset",
	        lapText: "Lap",
	        hideText: "Hide"
	    };
	    t.presetShort("timer");
	    t.presets.scroller.timer = function (h) {
	        function j(a) {
	            return new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds())
	        }

	        function d(b) {
	            var c = {};
	            if (Y && J[F].index > J.days.index) {
	                var d, e, f, g;
	                d = new Date;
	                var h = B ? d : aa;
	                d = B ? aa : d;
	                d = j(d);
	                h = j(h);
	                c.years = h.getFullYear() - d.getFullYear();
	                c.months = h.getMonth() - d.getMonth();
	                c.days = h.getDate() - d.getDate();
	                c.hours = h.getHours() - d.getHours();
	                c.minutes = h.getMinutes() - d.getMinutes();
	                c.seconds = h.getSeconds() - d.getSeconds();
	                c.fract = (h.getMilliseconds() - d.getMilliseconds()) / 10;
	                for (d = x.length; 0 < d; d--)e = x[d - 1], f = J[e], g = x[a.inArray(e, x) - 1], J[g] && 0 > c[e] && (c[g]--, c[e] += "months" == g ? 32 - (new Date(h.getFullYear(),
	                    h.getMonth(), 32)).getDate() : f.until + 1);
	                "months" == F && (c.months += 12 * c.years, delete c.years)
	            } else a(x).each(function (a, d) {
	                J[d].index <= J[F].index && (c[d] = Math.floor(b / J[d].limit), b -= c[d] * J[d].limit)
	            });
	            return c
	        }

	        function f(c, d) {
	            var f = 1, g = J[c], h = g.wheel, i = g.prefix, j = J[x[a.inArray(c, x) - 1]];
	            L = 0;
	            K = g.until;
	            c == F && (L = Math.max(0, d[c] - 50), K = L + 100, k = L + 5, e = K - 5);
	            if (g.index <= J[F].index && (!j || j.limit > Z)) {
	                l[c] || ea[0].push(h);
	                l[c] = 1;
	                h.keys = [];
	                h.values = [];
	                h.label = g.label || "";
	                Z >= g.limit && (f = Math.max(Math.round(Z / g.limit),
	                    1), t = f * g.limit);
	                for (b = L; b <= K; b += f)h.keys.push(b), h.values.push((i || "") + (10 > b ? "0" : "") + b + '<span class="dwtlbl">' + (g.label || "") + "</span>")
	            }
	        }

	        function s(b) {
	            var c = [], e, f = d(b);
	            a(x).each(function (a, b) {
	                l[b] && (e = Math.max(Math.round(Z / J[b].limit), 1), c.push(Math.round(f[b] / e) * e))
	            });
	            return c
	        }

	        function r(a) {
	            Y ? (A = aa - new Date, 0 > A ? (A *= -1, B = !0) : B = !1, o = 0, V = !0) : (aa !== n ? (V = !1, A = 1E3 * aa, B = "down" !== c.countDirection) : (A = 0, V = B = "down" !== c.countDirection), a && (o = 0))
	        }

	        var b, g, t, i, O, u, A, o, B, D, k, e, q, y, I, m, L, K, U, G, S = a.extend({}, h.settings),
	            c = a.extend(h.settings, w, S), H = c.useShortLabels ? c.labelsShort : c.labels, x = "years,months,days,hours,minutes,seconds,fract".split(","), J = {
	                years: {index: 6, until: 10, limit: 31536E6, label: H[0], wheel: {}},
	                months: {index: 5, until: 11, limit: 2592E6, label: H[1], wheel: {}},
	                days: {index: 4, until: 31, limit: 864E5, label: H[2], wheel: {}},
	                hours: {index: 3, until: 23, limit: 36E5, label: H[3], wheel: {}},
	                minutes: {index: 2, until: 59, limit: 6E4, label: H[4], wheel: {}},
	                seconds: {index: 1, until: 59, limit: 1E3, label: H[5], wheel: {}},
	                fract: {
	                    index: 0, until: 99,
	                    limit: 10, label: H[6], prefix: ".", wheel: {}
	                }
	            }, l = {}, N = [], M = 0, R = !1, p = !0, V = !1, Z = Math.max(10, 1E3 * c.step), F = c.maxWheel, Q = c.locked || Y, T = (a.isArray(c.controls) ? c.controls : []).join(","), aa = c.targetTime, Y = aa && aa.getTime !== n, E = "jqm" == c.theme, ea = [[]];
	        h.start = function () {
	            p && h.reset();
	            if (!R && (r(), V || !(o >= A)))R = !0, p = !1, O = new Date, i = o, c.readonly = !0, h.setValue(s(B ? o : A - o), !0, 0.1), g = setInterval(function () {
	                o = new Date - O + i;
	                h.setValue(s(B ? o : A - o), !0, 0.1);
	                !V && o + t >= A && (clearInterval(g), setTimeout(function () {
	                    h.stop();
	                    o = A;
	                    h.setValue(s(B ?
	                        o : 0), !0, 0.1);
	                    h.trigger("onFinish", [A]);
	                    p = !0
	                }, A - o))
	            }, t), a(".dwwr", D).addClass("dw-running dw-locked"), a(".dw-timer-st", D).removeClass(c.btnStartClass || "").addClass(c.btnStopClass || "").attr("title", c.stopText).find(".dwb-txt").text(c.stopText), h.trigger("onStart", [])
	        };
	        h.stop = function () {
	            R && (R = !1, clearInterval(g), o = new Date - O + i, a(".dwwr", D).removeClass("dw-running"), a(".dw-timer-st", D).removeClass(c.btnStopClass || "").addClass(c.btnStartClass || "").attr("title", c.startText).find(".dwb-txt").text(c.startText),
	                h.trigger("onStop", [o]))
	        };
	        h.reset = function () {
	            h.stop();
	            o = 0;
	            N = [];
	            M = 0;
	            h.setValue(s(B ? 0 : A), !0, 0.1);
	            h.settings.readonly = Q;
	            p = !0;
	            Q || a(".dwwr", D).removeClass("dw-locked");
	            h.trigger("onReset", [])
	        };
	        h.lap = function () {
	            R && (u = new Date - O + i, q = u - M, M = u, N.push(u), h.trigger("lap", [u, q, N]))
	        };
	        h.getTime = function () {
	            return A
	        };
	        h.setTime = function (a) {
	            aa = a / 1E3;
	            A = a
	        };
	        h.getElapsedTime = h.getEllapsedTime = function () {
	            return R ? new Date - O + i : 0
	        };
	        h.setElapsedTime = h.setEllapsedTime = function (a, b) {
	            p || (i = o = a, O = new Date, h.setValue(s(B ? o : A - o),
	                !0, 0.1, !1, b))
	        };
	        r(!0);
	        !F && !A && (F = "minutes");
	        F || a(x).each(function (a, b) {
	            if (!F && A >= J[b].limit)return F = b, !1
	        });
	        m = d(A);
	        a(x).each(function (a, b) {
	            f(b, m)
	        });
	        t = Math.max(87, t);
	        c.autostart && setTimeout(function () {
	            h.start()
	        }, 0);
	        return {
	            wheels: ea, headerText: !1, readonly: Q, parseValue: function () {
	                return s(B ? 0 : A)
	            }, formatValue: function (b) {
	                var c = "", d = 0;
	                a(x).each(function (a, e) {
	                    "fract" != e && l[e] && (c += b[d] + ("seconds" == e && l.fract ? "." + b[d + 1] : "") + " " + H[a] + " ", d++)
	                });
	                return c
	            }, validate: function (b, c, g) {
	                var i, j, m = 0, q = h._tempWheelArray,
	                    b = !1;
	                p && c !== n && (aa = 0, a(x).each(function (a, b) {
	                    l[b] && (aa += J[b].limit * q[m], m++)
	                }), aa /= 1E3, r(!0));
	                if (p && 0 === c)b = !0, i = d(A); else if (!y && (q[0] < k || q[0] > e))i = d(B ? o : A - o), b = !0;
	                if (b && (f(F, i), U !== L || G !== K))j = q[0], I = setTimeout(function () {
	                    U = L;
	                    G = K;
	                    y = true;
	                    q[0] = j;
	                    h.changeWheel([0], n, c !== n)
	                }, 1E3 * g);
	                y = !1
	            }, onBeforeShow: function () {
	                c.mode = "scroller";
	                c.showLabel = !0
	            }, onMarkupReady: function (b) {
	                var d = 0;
	                D = b;
	                b.addClass("dw-timer");
	                R ? a(".dwwr", b).addClass("dw-running") : a(".dwwr", b).removeClass("dw-running");
	                Q && a(".dwwr", D).addClass("dw-locked");
	                a(".dwbc", b).remove();
	                a(".dwwl0", b).on("mousedown touchstart", function () {
	                    clearTimeout(I)
	                });
	                a(x).each(function (c, e) {
	                    l[e] && (a(".dwwl" + d, b).addClass("dwwl-" + e), d++)
	                });
	                var e = T.match(/start/), f = T.match(/reset/) && !Y, g = T.match(/lap/) && !Y, i = "inline" !== c.display;
	                if (e || f || g || i)a(".dwwr", b).addClass("dw-timer-btns").append('<div class="dwbc">' + (e ? '<span class="dwbw dwbgr dwbgrf' + (!f && !g ? " dwbgrl" : "") + '"><a href="#" role="button" class="dwb-e dwb dw-timer-st ' + (R ? c.btnStopClass || "" : c.btnStartClass || "") + '"' + (E ?
	                        ' data-role="button" data-icon="arrow-r" data-iconpos="notext"' : "") + ' title="' + (R ? c.stopText : c.startText) + '"><span class="dwb-i"><span class="dwb-txt">' + (R ? c.stopText : c.startText) + "</span></span></a></span>" : "") + (f ? '<span class="dwbw dwbgr' + (!e ? " dwbgrf" : "") + (!g ? " dwbgrl" : "") + '"><a href="#" role="button" class="dwb-e dwb dw-timer-r ' + (c.btnResetClass || "") + '"' + (E ? ' data-role="button" data-icon="delete" data-iconpos="notext"' : "") + ' title="' + c.resetText + '"><span class="dwb-i"><span class="dwb-txt">' +
	                    c.resetText + "</span></span></a></span>" : "") + (g ? '<span class="dwbw dwbgr dwbgrl' + (!e && !f ? " dwbgrf" : "") + '"><a href="#" role="button" class="dwb-e dwb dw-timer-l ' + (c.btnLapClass || "") + '"' + (E ? ' data-role="button" data-icon="refresh" data-iconpos="notext"' : "") + ' title="' + c.lapText + '"><span class="dwb-i"><span class="dwb-txt">' + c.lapText + "</span></span></a></span>" : "") + (i ? '<span class="dwbw dwtcl"><a href="#" role="button" class="dwb-e dwb dw-timer-cl ' + (c.btnHideClass || "") + ' "' + (E ? ' data-role="button" data-mini="true"' :
	                        "") + ">" + c.hideText + "</a></span>" : "") + "</div>"), h.tap(a(".dw-timer-st", b), function () {
	                    R ? h.stop() : h.start()
	                }, !0), h.tap(a(".dw-timer-r", b), function () {
	                    h.reset()
	                }, !0), h.tap(a(".dw-timer-l", b), function () {
	                    h.lap()
	                }, !0), h.tap(a(".dw-timer-cl", b), function () {
	                    h.hide()
	                }, !0)
	            }, onPosition: function (b) {
	                a(".dwwr", b).css("min-width", 0).css("min-width", a(".dwbc", b).width())
	            }, onDestroy: function () {
	                clearInterval(g)
	            }
	        }
	    }
	})($);
	(function (a, n) {
	    function t(b) {
	        var d = [Math.round(b.r).toString(16), Math.round(b.g).toString(16), Math.round(b.b).toString(16)];
	        a.each(d, function (a, b) {
	            1 == b.length && (d[a] = "0" + b)
	        });
	        return "#" + d.join("")
	    }

	    function w(a) {
	        a = parseInt(-1 < a.indexOf("#") ? a.substring(1) : a, 16);
	        return {r: a >> 16, g: (a & 65280) >> 8, b: a & 255}
	    }

	    function h(a) {
	        var b, d, f;
	        b = a.h;
	        var g = 255 * a.s / 100, a = 255 * a.v / 100;
	        if (0 === g)b = d = f = a; else {
	            var g = (255 - g) * a / 255, h = (a - g) * (b % 60) / 60;
	            360 == b && (b = 0);
	            60 > b ? (b = a, f = g, d = g + h) : 120 > b ? (d = a, f = g, b = a - h) : 180 > b ? (d = a, b = g, f = g + h) : 240 >
	            b ? (f = a, b = g, d = a - h) : 300 > b ? (f = a, d = g, b = g + h) : 360 > b ? (b = a, d = g, f = a - h) : b = d = f = 0
	        }
	        return {r: b, g: d, b: f}
	    }

	    function j(a) {
	        var b = 0, d;
	        d = Math.min(a.r, a.g, a.b);
	        var f = Math.max(a.r, a.g, a.b), b = f - d, b = (d = f ? 255 * b / f : 0) ? a.r == f ? (a.g - a.b) / b : a.g == f ? 2 + (a.b - a.r) / b : 4 + (a.r - a.g) / b : -1, b = 60 * b;
	        0 > b && (b += 360);
	        return {h: b, s: d * (100 / 255), v: f * (100 / 255)}
	    }

	    function d(a) {
	        return t(h(a))
	    }

	    function f(a) {
	        var b = a.h, d = a.l, a = a.s / 100, a = a * (50 >= d ? d : 100 - d), d = d + a;
	        return {h: b, s: 100 * (d ? 2 * a / d : 0), v: d}
	    }

	    function s(a) {
	        return j(w(a))
	    }

	    var r = a.mobiscroll, b = r.util.prefix,
	        g = r.presets.scroller, P = {
	            preview: !0,
	            previewText: !0,
	            label: "Color",
	            refineLabel: "Refine",
	            step: 10,
	            nr: 10,
	            format: "hex",
	            hueText: "Hue",
	            saturationText: "Saturation",
	            valueText: "Value"
	        };
	    r.presetShort("colorpicker");
	    r.presetShort("color");
	    g.color = g.colorpicker = function (g) {
	        function r(a) {
	            return isNaN(+a) ? 0 : +a
	        }

	        function u(a) {
	            return a.r ? t(a) : a.h ? d(a) : a
	        }

	        function A(a) {
	            a = u(a);
	            return "rgb" === N ? (a = w(a), Math.round(a.r) + "," + Math.round(a.g) + "," + Math.round(a.b)) : "hsv" === N ? (a = s(a), Math.round(a.h) + "," + Math.round(a.s) + "," + Math.round(a.v)) :
	                a
	        }

	        function o(a) {
	            return x ? "hsv" == N ? a.join(",") : "rgb" == N ? (a = h({
	                h: a[0],
	                s: a[1],
	                v: a[2]
	            }), Math.round(a.r) + "," + Math.round(a.g) + "," + Math.round(a.b)) : d({
	                h: a[0],
	                s: a[1],
	                v: a[2]
	            }) : l ? a[1] : a[0]
	        }

	        function B(a, c, d) {
	            a[0].style.backgroundImage = b + ("-webkit-" == b ? "gradient(linear,left top,left bottom,from(" + c + "),to(" + d + "))" : "linear-gradient(" + c + "," + d + ")")
	        }

	        function D(b, c) {
	            var e = g._tempWheelArray;
	            1 !== c && 2 !== c && B(a(".dwwl1 .dw-ul", b), d({h: e[0], s: 0, v: 100}), d({h: e[0], s: 100, v: 100}));
	            2 !== c && B(a(".dwwl2 .dw-ul", b), d({
	                h: e[0], s: e[1],
	                v: 0
	            }), d({h: e[0], s: e[1], v: 100}));
	            if (M) {
	                var f = h({h: e[0], s: e[1], v: e[2]}), f = 0.299 * f.r + 0.587 * f.g + 0.114 * f.b;
	                a(".dw-color-preview", b).attr("style", "background:" + d({
	                        h: e[0],
	                        s: e[1],
	                        v: e[2]
	                    }) + ";color:" + (130 < f ? "#000" : "#fff")).text(R ? o(e) : "")
	            }
	        }

	        function k() {
	            var a = 0, b = {keys: [], values: [], labels: [], label: p}, c = {
	                keys: [],
	                values: [],
	                labels: [],
	                label: V
	            }, e = {keys: [], values: [], labels: [], label: Z};
	            for (a; 360 > a; a += 3)b.keys.push(a), b.values.push('<div class="dw-color" style="background:' + d({
	                    h: a,
	                    s: 100,
	                    v: 100
	                }) + '"><div class="dw-color-hl"></div></div>'),
	                b.labels.push(a);
	            for (a = 0; 101 > a; a += 1)c.keys.push(a), e.keys.push(a), c.values.push('<div class="dw-color"><div class="dw-color-hl"></div></div>'), e.values.push('<div class="dw-color"><div class="dw-color-hl"></div></div>'), c.labels.push(a), e.labels.push(a);
	            return [[b, c, e]]
	        }

	        function e(b, c, d) {
	            var e, f, g = {keys: [], values: [], label: c || H.label};
	            a.each(b, function (a, b) {
	                e = u(b);
	                f = A(b);
	                g.keys.push(f);
	                g.values.push('<div class="dw-cbc"><div class="dw-cb' + ("circle" === H.style ? " dw-cb-circle" : "") + '" style="background:' +
	                    e + '"></div></div>' + f);
	                d && (K[f] = d)
	            });
	            return g
	        }

	        function q(a, b, c) {
	            var e, g = a.h, h = (2 - a.s / 100) * a.v, a = a.s * a.v, a = (e = 100 >= h ? h : 200 - h) ? a / e : 0;
	            e = h / 2 - c / 2 * b;
	            for (h = []; 0 > e + b;)e += b;
	            for (c = e + (c + 1) * b; 100 <= c - b;)c -= b;
	            for (; e <= c; e += b)h.push(d(f({h: g, s: a, l: Math.max(0, Math.min(e, 100))})));
	            return h
	        }

	        var y, I, m, L, K = {}, U = {}, G = {}, S, c = a.extend({}, g.settings), H = a.extend(g.settings, P, c), x = !H.colors, c = a.isArray(H.colors) ? H.colors : [H.colors], J = H.defaultValue || c[0], l = H.refine && 1 < c.length, N = H.format, M = x && H.preview, R = H.previewText, p = H.hueText,
	            V = H.saturationText, Z = H.valueText;
	        !x && 1 == c.length && (c = q(s(u(c[0])), H.step, H.nr));
	        x ? (L = k(), G = {
	            width: 70,
	            height: 15,
	            rows: 13,
	            speedUnit: 0.006,
	            timeUnit: 0.05,
	            showLabel: !0
	        }) : l ? (a.each(c, function (a, b) {
	            I = u(b);
	            m = A(b);
	            U[m] = e(q(s(I), H.step, H.nr), H.refineLabel, m);
	            a || (y = U[m])
	        }), L = [[e(c), y]]) : (G = {width: 180}, L = [[e(c)]]);
	        return a.extend({
	            wheels: L, parseValue: function (a) {
	                if (x) {
	                    if (a = a || J) {
	                        if (N == "hsv") {
	                            a = a.split(",");
	                            a = {h: r(a[0]), s: r(a[1]), v: r(a[2])}
	                        } else if (N == "rgb") {
	                            a = a.split(",");
	                            a = j({r: r(a[0]), g: r(a[1]), b: r(a[2])})
	                        } else {
	                            a =
	                                a.replace("#", "");
	                            a.length == 3 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]);
	                            a = s(a)
	                        }
	                        var b = Math.round(a.h);
	                        return [Math.floor(b / 3) * 3, Math.round(a.s), Math.round(a.v)]
	                    }
	                    return [0, 100, 100]
	                }
	                if (l) {
	                    if (a && K[a])return [K[a], a];
	                    A(J);
	                    return [K[J], J]
	                }
	                return [a || A(J)]
	            }, formatValue: o, onBeforeShow: function () {
	                if (x)H.mode = "scroller";
	                if (M)H.headerText = false
	            }, onMarkupReady: function (a) {
	                a.addClass("dw-colorpicker");
	                M && a.find(".dwc").before('<div class="dw-color-preview"></div>');
	                if (x) {
	                    a.addClass("dw-cp-hsv");
	                    D(a)
	                }
	            }, validate: function (a,
	                                   b) {
	                var c = g._tempWheelArray;
	                if (x)setTimeout(function () {
	                    D(a, b)
	                }, 1); else if (l && !b && !S) {
	                    S = true;
	                    L[0][1] = U[c[0]];
	                    b === 0 && (c[1] = c[0]);
	                    g.changeWheel([1], n, b !== n)
	                }
	                S = false
	            }
	        }, G)
	    };
	    r.colorpicker = {hsv2hex: d, hsv2rgb: h, rgb2hsv: j, rgb2hex: t, hex2rgb: w, hex2hsv: s}
	})($);
	(function (a, n, t, w) {
	    var h = a.extend, j = a.mobiscroll, d = j.classes;
	    d.MenuStrip = function (f, s) {
	        function r(a) {
	            clearTimeout(L);
	            L = setTimeout(function () {
	                u("load" !== a.type)
	            }, 200)
	        }

	        function b(b, c) {
	            if (b.length) {
	                var d = b.offset().left, e = b[0].offsetLeft, f = b.width(), h = o.offset().left;
	                A = b;
	                c === w && (c = !I);
	                K && c && (I ? b.attr("data-selected") ? t(b) : g(b) : (t(a(".mbsc-ms-item-sel", l)), g(b)));
	                "a" == S ? d < h ? G.scroll(-e, 200) : d + f > h + k && G.scroll(k - e - f, 200) : G.scroll(k / 2 - e - f / 2, 200);
	                c && x("onItemTap", [b])
	            }
	        }

	        function g(a) {
	            a.addClass(U).attr("data-selected",
	                "true").attr("aria-selected", "true")
	        }

	        function t(a) {
	            a.removeClass(U).removeAttr("data-selected").removeAttr("aria-selected")
	        }

	        function i(a) {
	            "object" !== typeof a && (a = l.children('[data-id="' + a + '"]'));
	            return a
	        }

	        function O() {
	            l.children().each(function (b) {
	                var d, f = a(this), g = K && "true" == f.attr("data-selected"), h = "true" == f.attr("data-disabled"), i = f.attr("data-icon");
	                0 === b && (B = f);
	                K && !I && g && (A = f);
	                1 !== f.children().length && a("<span></span>").append(f.contents()).appendTo(f);
	                d = f.children().eq(0);
	                i && (e = !0);
	                d.html() &&
	                (q = !0);
	                d.hasClass("mbsc-ms-item-i") || (b = a('<span class="mbsc-ms-item-i-t"><span class="mbsc-ms-item-i-c"></span></span>'), b.find(".mbsc-ms-item-i-c").append(d.contents()), d.addClass("mbsc-ms-item-i" + (i ? " mbsc-ms-ic mbsc-ic mbsc-ic-" + i : "")).append(b), f.attr("data-role", "button").attr("aria-selected", g ? "true" : null).attr("aria-disabled", h ? "true" : null).addClass("mbsc-ms-item mbsc-btn-e " + (c.itemClass || "") + (g ? U : "") + (h ? " mbsc-btn-d " + (c.disabledClass || "") : "")), f.find(".mbsc-ms-item-i").append(J._processItem(a,
	                    0.2)))
	            });
	            e && o.addClass("mbsc-ms-icons");
	            q && o.addClass("mbsc-ms-txt")
	        }

	        function u(a) {
	            k = o.width();
	            a && m === k || (m = k, c.itemWidth && (y = k / Math.min(Math.floor(k / c.itemWidth), l.children().length), l.children().css("width", y + "px")), l.contents().filter(function () {
	                return this.nodeType == 3 && !/\S/.test(this.nodeValue)
	            }).remove(), H = l.width(), h(G.settings, {
	                contSize: k,
	                maxSnapScroll: c.paging ? 1 : !1,
	                maxScroll: 0,
	                minScroll: H > k ? k - H : 0,
	                snap: c.paging ? k : c.snap ? y || ".mbsc-ms-item" : !1,
	                elastic: H > k ? y || k : !1
	            }), G.refresh())
	        }

	        var A, o, B, D,
	            k, e, q, y, I, m, L, K, U, G, S, c, H, x, J = this, l = a(f);
	        d.Base.call(this, f, s, !0);
	        J._processItem = new Function("$, p", function () {
	            var a = [5, 2], b;
	            a:{
	                b = a[0];
	                var c;
	                for (c = 0; 16 > c; ++c)if (1 == b * c % 16) {
	                    b = [c, a[1]];
	                    break a
	                }
	                b = void 0
	            }
	            a = b[0];
	            b = b[1];
	            c = "";
	            var d;
	            for (d = 0; 1062 > d; ++d)c += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[d]) -
	            a * b) % 16 + 16) % 16];
	            b = c;
	            c = b.length;
	            a = [];
	            for (d = 0; d < c; d += 2)a.push(b[d] + b[d + 1]);
	            b = "";
	            c = a.length;
	            for (d = 0; d < c; d++)b += String.fromCharCode(parseInt(a[d], 16));
	            b = b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
	            return b
	        }());
	        J.navigate = function (a, c) {
	            b(i(a), c)
	        };
	        J.next = function (a) {
	            var c = A ? A.next() : B;
	            c.length && (A = c, b(A, a))
	        };
	        J.prev = function (a) {
	            var c = A ? A.prev() : B;
	            c.length && (A = c, b(A, a))
	        };
	        J.select = function (b) {
	            I || t(a(".mbsc-ms-item-sel", l));
	            g(i(b))
	        };
	        J.deselect = function (a) {
	            t(i(a))
	        };
	        J.enable = function (a) {
	            i(a).removeClass("mbsc-btn-d").removeAttr("data-disabled").removeAttr("aria-disabled")
	        };
	        J.disable = function (a) {
	            i(a).addClass("mbsc-btn-d").attr("data-disabled", "true").attr("aria-disabled", "true")
	        };
	        J.refresh = function () {
	            l.height("");
	            O();
	            u();
	            l.height(l.height())
	        };
	        J.init = function (d) {
	            J._init(d);
	            D = a("body" == c.context ? n : c.context);
	            "tabs" == c.type ? (c.select = c.select || "single", c.variant = c.variant || "b") : "options" == c.type ? (c.select = c.select || "multi", c.variant = c.variant || "a") : "menu" == c.type && (c.select = c.select || "off", c.variant = c.variant || "a");
	            c.itemWidth && c.snap === w && (c.snap = !0);
	            S = c.variant;
	            K = "off" !=
	                c.select;
	            I = "multi" == c.select;
	            U = " mbsc-ms-item-sel " + (c.activeClass || "");
	            o = a('<div class="mbsc-ms-c mbsc-ms-' + S + " mbsc-ms-" + c.display + " mbsc-" + c.theme + " " + (c.baseTheme ? " mbsc-" + c.baseTheme : "") + " " + (c.cssClass || "") + " " + (c.wrapperClass || "") + (c.rtl ? " mbsc-ms-rtl" : " mbsc-ms-ltr") + (c.itemWidth ? " mbsc-ms-hasw" : "") + ("body" == c.context ? "" : " mbsc-ms-ctx") + (K ? "" : " mbsc-ms-nosel") + '"><div class="mbsc-ms-sc"></div></div>').insertAfter(l);
	            o.find(".mbsc-ms-sc").append(l);
	            l.css("display", "").addClass("mbsc-ms " + (c.groupClass ||
	                ""));
	            O();
	            x("onMarkupReady", [o]);
	            l.height(l.height());
	            G = new j.classes.ScrollView(o[0], {
	                axis: "X",
	                contSize: 0,
	                maxScroll: 0,
	                maxSnapScroll: 1,
	                minScroll: 0,
	                snap: 1,
	                elastic: 1,
	                rtl: c.rtl,
	                mousewheel: c.mousewheel,
	                onBtnTap: function (a) {
	                    b(a, true)
	                }
	            });
	            u();
	            o.find("img").on("load", r);
	            D.on("orientationchange resize", r);
	            x("onInit", [])
	        };
	        J.destroy = function () {
	            D.off("orientationchange resize", r);
	            l.height("").insertAfter(o).find(".mbsc-ms-item").width("");
	            o.off().remove();
	            G.destroy();
	            J._destroy()
	        };
	        c = J.settings;
	        x = J.trigger;
	        J.init(s)
	    };
	    d.MenuStrip.prototype = {
	        _class: "menustrip",
	        _hasDef: !0,
	        _hasTheme: !0,
	        _defaults: {type: "options", display: "inline"}
	    };
	    j.presetShort("menustrip", "MenuStrip")
	})($, window, document);
	(function (a) {
	    var n = a.mobiscroll, t = n.classes;
	    t.Widget = function (n, h, j) {
	        function d(d) {
	            a(".dwcc", d).append(g._processItem(a, 0.7));
	            !a(".dwcc", d).hasClass("mbsc-w-p") && a.mobiscroll.running && a(".dwcc", d).addClass("mbsc-w-p").append(b.show())
	        }

	        var f, s, r, b = a(n), g = this;
	        t.Frame.call(this, n, h, !0);
	        g._processItem = new Function("$, p", function () {
	            var a = [5, 2], b;
	            a:{
	                b = a[0];
	                var d;
	                for (d = 0; 16 > d; ++d)if (1 == b * d % 16) {
	                    b = [d, a[1]];
	                    break a
	                }
	                b = void 0
	            }
	            a = b[0];
	            b = b[1];
	            d = "";
	            var f;
	            for (f = 0; 1062 > f; ++f)d += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1117cf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[f]) -
	            a * b) % 16 + 16) % 16];
	            b = d;
	            d = b.length;
	            a = [];
	            for (f = 0; f < d; f += 2)a.push(b[f] + b[f + 1]);
	            b = "";
	            d = a.length;
	            for (f = 0; f < d; f++)b += String.fromCharCode(parseInt(a[f], 16));
	            b = b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()").replace("TRIAL", "");
	            return b
	        }());
	        g._generateContent = function () {
	            return ""
	        };
	        g._markupReady = function (a) {
	            "inline" != f.display && d(a)
	        };
	        g._markupInserted = function (a) {
	            "inline" == f.display && d(a);
	            a.trigger("mbsc-enhance", [{theme: f.theme, lang: f.lang}])
	        };
	        g._markupRemove = function () {
	            b.hide();
	            s ? s.prepend(b) : r.after(b)
	        };
	        g._processSettings = function () {
	            f = g.settings;
	            g.buttons.close = {
	                text: f.closeText,
	                handler: "cancel"
	            };
	            g.buttons.ok = {text: f.okText, handler: "set"};
	            f.cssClass = (f.cssClass || "") + " mbsc-wdg";
	            f.buttons = f.buttons || ("inline" == f.display ? [] : ["ok"]);
	            r = b.prev();
	            r.length || (s = b.parent());
	            b.hide()
	        };
	        j || g.init(h)
	    };
	    t.Widget.prototype = {
	        _hasDef: !0,
	        _hasTheme: !0,
	        _hasContent: !0,
	        _class: "widget",
	        _defaults: a.extend({}, t.Frame.prototype._defaults, {okText: "OK"})
	    };
	    n.themes.widget = n.themes.frame;
	    n.presetShort("widget", "Widget", !1)
	})($);
	(function (a) {
	    var a = a.mobiscroll, n = a.presets.scroller;
	    n.number = n.measurement;
	    a.presetShort("number")
	})($);
	(function (a) {
	    var n = a.mobiscroll, t = n.presets.scroller;
	    n.presetShort("image");
	    t.image = function (n) {
	        n.settings.enhance && (n._processMarkup = function (h) {
	            var j = h.attr("data-icon");
	            h.children().each(function (d, f) {
	                f = a(f);
	                f.is("img") ? a('<div class="mbsc-img-c"></div>').insertAfter(f).append(f.addClass("mbsc-img")) : f.is("p") && f.addClass("mbsc-img-txt")
	            });
	            j && h.prepend('<div class="mbsc-ic mbsc-ic-' + j + '"></div');
	            h.html('<div class="mbsc-img-w">' + h.html() + "</div>");
	            return h.html()
	        });
	        return t.list.call(this, n)
	    }
	})($);
	(function (a, n, t, w) {
	    var h = a.mobiscroll, j = a.extend, d = h.util, f = h.datetime, s = h.presets.scroller, r = {
	        labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs".split(","),
	        fromText: "Start",
	        toText: "End",
	        eventText: "event",
	        eventsText: "events"
	    };
	    h.presetShort("calendar");
	    s.calendar = function (b) {
	        function g(b) {
	            if (b) {
	                if (J[b])return J[b];
	                var c = a('<div style="background-color:' + b + ';"></div>').appendTo("body"), d = (n.getComputedStyle ? getComputedStyle(c[0]) : c[0].style).backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, "").split(","), d = 130 <
	                0.299 * d[0] + 0.587 * d[1] + 0.114 * d[2] ? "#000" : "#fff";
	                c.remove();
	                return J[b] = d
	            }
	        }

	        function t(a) {
	            return a.sort(function (a, b) {
	                var c = a.d || a.start, d = b.d || b.start, c = !c.getTime ? 0 : a.start && a.end && a.start.toDateString() !== a.end.toDateString() ? 1 : c.getTime(), d = !d.getTime ? 0 : b.start && b.end && b.start.toDateString() !== b.end.toDateString() ? 1 : d.getTime();
	                return c - d
	            })
	        }

	        function i(b) {
	            var c;
	            c = a(".dw-cal-c", k).height();
	            var d = b.height(), f = b.width(), g = b.offset().top - a(".dw-cal-c", k).offset().top, h = 2 > b.closest(".dw-cal-row").index();
	            c = e.addClass("dw-cal-events-t").css({
	                top: h ? g + d : "0",
	                bottom: h ? "0" : c - g
	            }).addClass("dw-cal-events-v").height();
	            e.css(h ? "bottom" : "top", "auto").removeClass("dw-cal-events-t");
	            m.css("max-height", c);
	            I.refresh();
	            I.scroll(0);
	            h ? e.addClass("dw-cal-events-b") : e.removeClass("dw-cal-events-b");
	            a(".dw-cal-events-arr", e).css("left", b.offset().left - e.offset().left + f / 2)
	        }

	        function O(c, d) {
	            var f = y[c];
	            if (f) {
	                var j, k, m, o, n, s = '<ul class="dw-cal-event-list">';
	                q = d;
	                d.addClass(N).find(".dw-i").addClass(R);
	                d.hasClass(M) && d.attr("data-hl",
	                    "true").removeClass(M);
	                t(f);
	                a.each(f, function (a, b) {
	                    o = b.d || b.start;
	                    n = b.start && b.end && b.start.toDateString() !== b.end.toDateString();
	                    m = b.color;
	                    g(m);
	                    k = j = "";
	                    o.getTime && (j = h.datetime.formatDate((n ? "MM d yy " : "") + l.timeFormat, o));
	                    b.end && (k = h.datetime.formatDate((n ? "MM d yy " : "") + l.timeFormat, b.end));
	                    var c = s, d = '<li role="button" aria-label="' + b.text + (j ? ", " + l.fromText + " " + j : "") + (k ? ", " + l.toText + " " + k : "") + '" class="dw-cal-event"><div class="dw-cal-event-color" style="' + (m ? "background:" + m + ";" : "") + '"></div><div class="dw-cal-event-text">' +
	                        (o.getTime && !n ? '<div class="dw-cal-event-time">' + h.datetime.formatDate(l.timeFormat, o) + "</div>" : "") + b.text + "</div>", e;
	                    if (b.start && b.end) {
	                        e = l.labelsShort;
	                        var f = Math.abs(b.end - b.start) / 1E3, i = f / 60, q = i / 60, p = q / 24, r = p / 365;
	                        e = '<div class="dw-cal-event-dur">' + (45 > f && Math.round(f) + " " + e[5].toLowerCase() || 45 > i && Math.round(i) + " " + e[4].toLowerCase() || 24 > q && Math.round(q) + " " + e[3].toLowerCase() || 30 > p && Math.round(p) + " " + e[2].toLowerCase() || 365 > p && Math.round(p / 30) + " " + e[1].toLowerCase() || Math.round(r) + " " + e[0].toLowerCase()) +
	                            "</div>"
	                    } else e = "";
	                    s = c + (d + e + "</li>")
	                });
	                s += "</ul>";
	                L.html(s);
	                i(q);
	                b.tap(a(".dw-cal-event", L), function (d) {
	                    I.scrolled || b.trigger("onEventSelect", [d, f[a(this).index()], c])
	                });
	                K = !0;
	                b.trigger("onEventBubbleShow", [q, e])
	            }
	        }

	        function u() {
	            e && e.removeClass("dw-cal-events-v");
	            q && (q.removeClass(N).find(".dw-i").removeClass(R), q.attr("data-hl") && q.removeAttr("data-hl").addClass(M));
	            K = !1
	        }

	        function A(a) {
	            return new Date(a.getFullYear(), a.getMonth(), a.getDate())
	        }

	        function o(a) {
	            Q = {};
	            if (a && a.length)for (G = 0; G < a.length; G++)Q[A(a[G])] =
	                a[G]
	        }

	        function B() {
	            T && u();
	            b.refresh()
	        }

	        var D, k, e, q, y, I, m, L, K, U, G, S, c, H, x, J = {};
	        H = j({}, b.settings);
	        var l = j(b.settings, r, H), N = "dw-sel dw-cal-day-ev", M = "dw-cal-day-hl", R = l.activeClass || "", p = l.multiSelect || "week" == l.selectType, V = l.markedDisplay, Z = !0 === l.events || !0 === l.markedText, F = 0, Q = {}, T = a.isArray(l.events), aa = T ? j(!0, [], l.events) : [];
	        H = s.calbase.call(this, b);
	        D = j({}, H);
	        U = l.firstSelectDay === w ? l.firstDay : l.firstSelectDay;
	        if (l.selectedValues)for (G = 0; G < l.selectedValues.length; G++)Q[A(l.selectedValues[G])] = l.selectedValues[G];
	        T && a.each(aa, function (a, b) {
	            b._id === w && (b._id = F++)
	        });
	        b.onGenMonth = function (a, c) {
	            y = b.prepareObj(aa, a, c);
	            S = b.prepareObj(l.marked, a, c)
	        };
	        b.getDayProps = function (b) {
	            for (var c = p ? Q[b] !== w : T ? b.getTime() === (new Date).setHours(0, 0, 0, 0) : w, d = S[b] ? S[b][0] : !1, e = y[b] ? y[b][0] : !1, f = d || e, d = d.text || (e ? y[b].length + " " + (1 < y[b].length ? l.eventsText : l.eventText) : 0), e = S[b] || y[b] || [], h = f.color, i = Z && d ? g(h) : "", j = "", k = '<div class="dw-cal-day-m"' + (h ? ' style="background-color:' + h + ";border-color:" + h + " " + h + ' transparent transparent"' :
	                    "") + "></div>", b = 0; b < e.length; b++)e[b].icon && (j += '<span class="mbsc-ic mbsc-ic-' + e[b].icon + '"' + (e[b].text ? "" : e[b].color ? ' style="color:' + e[b].color + ';"' : "") + "></span>\n");
	            if ("bottom" == V) {
	                k = '<div class="dw-cal-day-m"><div class="dw-cal-day-m-t">';
	                for (b = 0; b < e.length; b++)k += '<div class="dw-cal-day-m-c"' + (e[b].color ? ' style="background:' + e[b].color + ';"' : "") + "></div>";
	                k += "</div></div>"
	            }
	            return {
	                marked: f,
	                selected: T ? !1 : c,
	                cssClass: T && c ? "dw-cal-day-hl" : f ? "dw-cal-day-marked" : "",
	                ariaLabel: Z || T ? d : "",
	                markup: Z && d ?
	                '<div class="dw-cal-day-txt-c"><div class="dw-cal-day-txt ' + (l.eventTextClass || "") + '" title="' + a("<div>" + d + "</div>").text() + '"' + (h ? ' style="background:' + h + ";color:" + i + ';text-shadow:none;"' : "") + ">" + j + d + "</div></div>" : Z && j ? '<div class="dw-cal-day-ic-c">' + j + "</div>" : f ? k : ""
	            }
	        };
	        b.addValue = function (a) {
	            Q[A(a)] = a;
	            B()
	        };
	        b.removeValue = function (a) {
	            delete Q[A(a)];
	            B()
	        };
	        b.setVal = function (a, c, d, e, f) {
	            p && (o(a), a = a ? a[0] : null);
	            b._setVal(a, c, d, e, f);
	            B()
	        };
	        b.getVal = function (a) {
	            return p ? d.objectToArray(Q) : b.getDate(a)
	        };
	        b.setValues =
	            function (a, c) {
	                b.setDate(a ? a[0] : null, c);
	                o(a);
	                B()
	            };
	        b.getValues = function () {
	            return p ? b.getVal() : [b.getDate()]
	        };
	        T && (b.addEvent = function (b) {
	            var c = [], b = j(!0, [], a.isArray(b) ? b : [b]);
	            a.each(b, function (a, b) {
	                b._id === w && (b._id = F++);
	                aa.push(b);
	                c.push(b._id)
	            });
	            B();
	            return c
	        }, b.removeEvent = function (b) {
	            b = a.isArray(b) ? b : [b];
	            a.each(b, function (b, c) {
	                a.each(aa, function (a, b) {
	                    if (b._id === c)return aa.splice(a, 1), !1
	                })
	            });
	            B()
	        }, b.getEvents = function (a) {
	            var c;
	            return a ? (a.setHours(0, 0, 0, 0), c = b.prepareObj(aa, a.getFullYear(), a.getMonth()),
	                c[a] ? t(c[a]) : []) : j(!0, [], aa)
	        }, b.setEvents = function (b) {
	            var c = [];
	            aa = j(!0, [], b);
	            a.each(aa, function (a, b) {
	                b._id === w && (b._id = F++);
	                c.push(b._id)
	            });
	            B();
	            return c
	        });
	        j(H, {
	            highlight: !p && !T,
	            divergentDayChange: !p && !T,
	            buttons: T && "inline" !== l.display ? ["cancel"] : l.buttons,
	            parseValue: function (a) {
	                var c, d;
	                if (p && a && typeof a === "string") {
	                    Q = {};
	                    a = a.split(",");
	                    for (c = 0; c < a.length; c++) {
	                        d = f.parseDate(b.format, a[c].replace(/^\s+|\s+$/g, ""), l);
	                        Q[A(d)] = d
	                    }
	                    a = a[0]
	                }
	                return D.parseValue.call(this, a)
	            },
	            formatValue: function (a) {
	                var c, d = [];
	                if (p) {
	                    for (c in Q)d.push(f.formatDate(b.format, Q[c], l));
	                    return d.join(", ")
	                }
	                return D.formatValue.call(this, a)
	            },
	            onClear: function () {
	                if (p) {
	                    Q = {};
	                    b.refresh()
	                }
	            },
	            onBeforeShow: function () {
	                if (T)l.headerText = false;
	                if (l.closeOnSelect)l.divergentDayChange = false;
	                if (l.counter && p)l.headerText = function () {
	                    var b = 0, c = l.selectType == "week" ? 7 : 1;
	                    a.each(Q, function () {
	                        b++
	                    });
	                    b = Math.round(b / c);
	                    return (b > 1 ? l.selectedPluralText || l.selectedText : l.selectedText).replace(/{count}/, b)
	                }
	            },
	            onMarkupReady: function (d) {
	                D.onMarkupReady.call(this,
	                    d);
	                k = d;
	                if (p) {
	                    a(".dwv", d).attr("aria-live", "off");
	                    c = j({}, Q)
	                }
	                Z && a(".dw-cal", d).addClass("dw-cal-ev");
	                V && a(".dw-cal", d).addClass("dw-cal-m-" + V);
	                if (T) {
	                    d.addClass("dw-cal-em");
	                    e = a('<div class="dw-cal-events ' + (l.eventBubbleClass || "") + '"><div class="dw-cal-events-arr"></div><div class="dw-cal-events-i"><div class="dw-cal-events-sc"></div></div></div>').appendTo(a(".dw-cal-c", d));
	                    m = a(".dw-cal-events-i", e);
	                    L = a(".dw-cal-events-sc", e);
	                    I = new h.classes.ScrollView(m[0]);
	                    K = false;
	                    b.tap(m, function () {
	                        I.scrolled ||
	                        u()
	                    })
	                }
	            },
	            onMonthChange: function () {
	                T && u()
	            },
	            onSelectShow: function () {
	                T && u()
	            },
	            onMonthLoaded: function () {
	                if (x) {
	                    O(x.d, a('.dw-cal-day-v[data-full="' + x.full + '"]:not(.dw-cal-day-diff)', k));
	                    x = false
	                }
	            },
	            onDayChange: function (c) {
	                var d = c.date, e = A(d), f = a(c.cell), c = c.selected;
	                if (T) {
	                    u();
	                    f.hasClass("dw-cal-day-ev") || setTimeout(function () {
	                        b.changing ? x = {d: e, full: f.attr("data-full")} : O(e, f)
	                    }, 10)
	                } else if (p)if (l.selectType == "week") {
	                    var g, h, i = e.getDay() - U, i = i < 0 ? 7 + i : i;
	                    l.multiSelect || (Q = {});
	                    for (g = 0; g < 7; g++) {
	                        h = new Date(e.getFullYear(),
	                            e.getMonth(), e.getDate() - i + g);
	                        c ? delete Q[h] : Q[h] = h
	                    }
	                    B()
	                } else {
	                    g = a('.dw-cal .dw-cal-day[data-full="' + f.attr("data-full") + '"]', k);
	                    if (c) {
	                        g.removeClass("dw-sel").removeAttr("aria-selected").find(".dw-i").removeClass(R);
	                        delete Q[e]
	                    } else {
	                        g.addClass("dw-sel").attr("aria-selected", "true").find(".dw-i").addClass(R);
	                        Q[e] = e
	                    }
	                }
	                if (!T && !l.multiSelect && l.closeOnSelect && l.display !== "inline") {
	                    b.needsSlide = false;
	                    b.setDate(d);
	                    b.select();
	                    return false
	                }
	            },
	            onCalResize: function () {
	                K && i(q)
	            },
	            onCancel: function () {
	                !b.live && p && (Q =
	                    j({}, c))
	            }
	        });
	        return H
	    }
	})($, window, document);
	(function (a, n) {
	    var t = a.mobiscroll, w = {
	        inputClass: "",
	        values: 5,
	        order: "desc",
	        style: "icon",
	        invalid: [],
	        layout: "fixed",
	        icon: {filled: "star3", empty: "star3"}
	    };
	    t.presetShort("rating");
	    t.presets.scroller.rating = function (h) {
	        var j = a.extend({}, h.settings), d = a.extend(h.settings, w, j), f = a(this), j = this.id + "_dummy", s = a('label[for="' + this.id + '"]').attr("for", j), r = d.label !== n ? d.label : s.length ? s.text() : f.attr("name"), b = d.defaultValue, s = [[]], r = {
	            keys: [],
	            values: [],
	            labels: [],
	            label: r
	        }, g = {}, P = [], i, O = !1, u, A, o, B, D, k, e = "grade" ===
	        d.style ? "circle" : "icon";
	        f.is("select") && (d.values = {}, a("option", f).each(function () {
	            d.values[a(this).val()] = a(this).text()
	        }), a("#" + j).remove());
	        if (a.isArray(d.values))for (u = 0; u < d.values.length; u++)o = +d.values[u], isNaN(o) && (o = u + 1, O = !0), P.push({
	            order: o,
	            key: d.values[u],
	            value: d.values[u]
	        }); else if (a.isPlainObject(d.values))for (A in u = 1, O = !0, d.values)o = +A, isNaN(o) && (o = u), P.push({
	            order: o,
	            key: A,
	            value: d.values[A]
	        }), u++; else for (u = 1; u <= d.values; u++)P.push({order: u, key: u, value: u});
	        d.showText === n && O && (d.showText = !0);
	        d.icon.empty === n && (d.icon.empty = d.icon.filled);
	        P.sort(function (a, b) {
	            return d.order == "desc" ? b.order - a.order : a.order - b.order
	        });
	        k = "desc" == d.order ? P[0].order : P[P.length - 1].order;
	        for (u = 0; u < P.length; u++) {
	            D = P[u].order;
	            o = P[u].key;
	            B = P[u].value;
	            O = "";
	            for (A = 1; A < D + 1; A++)O += '<span class="mbsc-rating-' + e + ("circle" === e ? "" : " mbsc-ic mbsc-ic-" + d.icon.filled) + ' ">' + ("circle" == e ? A : " ") + "</span>";
	            for (A = D + 1; A <= k; A++)O += '<span class="mbsc-rating-' + e + ("circle" === e ? " mbsc-rating-circle-unf" : " mbsc-ic mbsc-ic-" + (d.icon.empty ?
	                d.icon.empty + " mbsc-rating-icon-unf" : "") + (d.icon.empty === d.icon.filled ? " mbsc-rating-icon-same" : "")) + '"></span>';
	            b === n && (b = o);
	            O += d.showText ? '<span class="mbsc-rating-txt">' + B + "</span>" : "";
	            r.keys.push(o);
	            r.values.push(O);
	            r.labels.push(B);
	            g[o] = B
	        }
	        f.is("select") && (i = a('<input type="text" id="' + j + '" value="' + g[f.val()] + '" class="' + d.inputClass + '" placeholder="' + (d.placeholder || "") + '" readonly />').insertBefore(f));
	        s[0].push(r);
	        i && h.attachShow(i);
	        f.is("select") && f.hide().closest(".ui-field-contain").trigger("create");
	        h.getVal = function (a) {
	            a = h._hasValue ? h[a ? "_tempWheelArray" : "_wheelArray"][0] : null;
	            return t.util.isNumeric(a) ? +a : a
	        };
	        return {
	            anchor: i, wheels: s, headerText: !1, formatValue: function (a) {
	                return g[a[0]]
	            }, parseValue: function (a) {
	                for (var d in g)if (i && d == a || !i && g[d] == a)return [d];
	                return [b]
	            }, validate: function (b) {
	                a.each(d.invalid, function (d, e) {
	                    a('.dw-li[data-val="' + e + '"]', b).removeClass("dw-v")
	                })
	            }, onMarkupReady: function (a) {
	                a.addClass("dw-rating")
	            }, onValueFill: function (a) {
	                if (i) {
	                    i.val(a);
	                    f.val(h._tempWheelArray[0])
	                }
	            },
	            onDestroy: function () {
	                i && i.remove();
	                f.show()
	            }
	        }
	    }
	})($);
	(function (a) {
	    var a = a.mobiscroll, n = a.presets.scroller;
	    n.treelist = n.list;
	    a.presetShort("list");
	    a.presetShort("treelist")
	})($);
	(function (a, n) {
	    var t = a.mobiscroll, w = t.util, h = w.isString, j = {
	        batch: 40,
	        inputClass: "",
	        invalid: [],
	        rtl: !1,
	        showInput: !0,
	        groupLabel: "Groups",
	        checkIcon: "checkmark",
	        dataText: "text",
	        dataValue: "value",
	        dataGroup: "group",
	        dataDisabled: "disabled"
	    };
	    t.presetShort("select");
	    t.presets.scroller.select = function (d) {
	        function f() {
	            var b, c, d, e, f, g = 0, h = 0, i = {};
	            X = {};
	            da = {};
	            I = [];
	            B = [];
	            fa.length = 0;
	            aa ? a.each(N.data, function (a, g) {
	                e = g[N.dataText];
	                f = g[N.dataValue];
	                c = g[N.dataGroup];
	                d = {value: f, text: e, index: a};
	                X[f] = d;
	                I.push(d);
	                Y && (i[c] ===
	                n ? (b = {
	                    text: c,
	                    value: h,
	                    options: [],
	                    index: h
	                }, da[h] = b, i[c] = h, B.push(b), h++) : b = da[i[c]], ea && (d.index = b.options.length), d.group = i[c], b.options.push(d));
	                g[N.dataDisabled] && fa.push(f)
	            }) : Y ? a("optgroup", p).each(function (b) {
	                da[b] = {text: this.label, value: b, options: [], index: b};
	                B.push(da[b]);
	                a("option", this).each(function (a) {
	                    d = {value: this.value, text: this.text, index: ea ? a : g++, group: b};
	                    X[this.value] = d;
	                    I.push(d);
	                    da[b].options.push(d);
	                    this.disabled && fa.push(this.value)
	                })
	            }) : a("option", p).each(function (a) {
	                d = {
	                    value: this.value,
	                    text: this.text, index: a
	                };
	                X[this.value] = d;
	                I.push(d);
	                this.disabled && fa.push(this.value)
	            });
	            I.length && (A = I[0].value);
	            ga && (I = [], g = 0, a.each(da, function (b, c) {
	                f = "__group" + b;
	                d = {text: c.text, value: f, group: b, index: g++};
	                X[f] = d;
	                I.push(d);
	                fa.push(d.value);
	                a.each(c.options, function (a, b) {
	                    b.index = g++;
	                    I.push(b)
	                })
	            }))
	        }

	        function s(a, b, d, e, f, g, h) {
	            var i = [], j = [], e = Math.max(0, (d[e] !== n ? d[e].index : 0) - M), k = Math.min(b.length - 1, e + 2 * M);
	            if (c[f] !== e || H[f] !== k) {
	                for (d = e; d <= k; d++)j.push(b[d].text), i.push(b[d].value);
	                S[f] = !0;
	                x[f] = e;
	                J[f] =
	                    k;
	                b = {multiple: g, values: j, keys: i, label: h};
	                R ? a[0][f] = b : a[f] = [b]
	            } else S[f] = !1
	        }

	        function r(a) {
	            s(a, B, da, o, e, !1, N.groupLabel)
	        }

	        function b(a) {
	            s(a, ea ? da[o].options : I, X, L, m, V, F)
	        }

	        function g(b) {
	            V && (b && h(b) && (b = b.split(",")), a.isArray(b) && (b = b[0]));
	            L = b === n || null === b || "" === b || !X[b] ? A : b;
	            E && (U = o = X[L] ? X[L].group : null)
	        }

	        function t(a, b) {
	            var c = a ? d._tempWheelArray : d._hasValue ? d._wheelArray : null;
	            return c ? N.group && b ? c : c[m] : null
	        }

	        function i() {
	            var a, b;
	            a = [];
	            var c = 0;
	            if (V) {
	                b = [];
	                for (c in v)a.push(X[c] ? X[c].text : ""), b.push(c);
	                a =
	                    a.join(", ")
	            } else b = L, a = X[L] ? X[L].text : "";
	            d._tempValue = b;
	            y.val(a);
	            p.val(b)
	        }

	        function O(a) {
	            var b = a.attr("data-val"), c = a.hasClass("dw-msel");
	            if (V && a.closest(".dwwl").hasClass("dwwms"))return a.hasClass("dw-v") && (c ? (a.removeClass(Q).removeAttr("aria-selected"), delete v[b]) : (a.addClass(Q).attr("aria-selected", "true"), v[b] = b)), !1;
	            a.hasClass("dw-w-gr") && (k = a.attr("data-val"))
	        }

	        var u, A, o, B, D, k, e, q, y, I, m, L, K, U, G, S = {}, c = {}, H = {}, x = {}, J = {}, l = a.extend({}, d.settings), N = a.extend(d.settings, j, l), M = N.batch, l = N.layout ||
	            (/top|bottom/.test(N.display) ? "liquid" : ""), R = "liquid" == l, p = a(this), V = N.multiple || p.prop("multiple"), Z = this.id + "_dummy";
	        q = a('label[for="' + this.id + '"]').attr("for", Z);
	        var F = N.label !== n ? N.label : q.length ? q.text() : p.attr("name"), Q = "dw-msel mbsc-ic mbsc-ic-" + N.checkIcon, T = N.readonly, aa = !!N.data, Y = aa ? !!N.group : a("optgroup", p).length;
	        q = N.group;
	        var E = Y && q && !1 !== q.groupWheel, ea = Y && q && E && !0 === q.clustered, ga = Y && (!q || !1 !== q.header && !ea), ha = p.val() || [], fa = [], v = {}, X = {}, da = {};
	        N.invalid.length || (N.invalid = fa);
	        E ? (e =
	            0, m = 1) : (e = -1, m = 0);
	        if (V) {
	            p.prop("multiple", !0);
	            ha && h(ha) && (ha = ha.split(","));
	            for (q = 0; q < ha.length; q++)v[ha[q]] = ha[q]
	        }
	        f();
	        g(p.val());
	        a("#" + Z).remove();
	        p.next().is("input.mbsc-control") ? y = p.off(".mbsc-form").next().removeAttr("tabindex") : (y = a('<input type="text" id="' + Z + '" class="mbsc-control mbsc-control-ev ' + N.inputClass + '" readonly />'), N.showInput && y.insertBefore(p));
	        d.attachShow(y.attr("placeholder", N.placeholder || ""));
	        p.addClass("dw-hsel").attr("tabindex", -1).closest(".ui-field-contain").trigger("create");
	        i();
	        d.setVal = function (a, b, c, e, f) {
	            if (V) {
	                a && h(a) && (a = a.split(","));
	                v = w.arrayToObject(a);
	                a = a ? a[0] : null
	            }
	            d._setVal(a, b, c, e, f)
	        };
	        d.getVal = function (a, b) {
	            return V ? w.objectToArray(v) : t(a, b)
	        };
	        d.refresh = function () {
	            f();
	            c = {};
	            H = {};
	            var a = N, h = [[]];
	            E && r(h);
	            b(h);
	            a.wheels = h;
	            c[e] = x[e];
	            H[e] = J[e];
	            c[m] = x[m];
	            H[m] = J[m];
	            u = true;
	            g(L);
	            d._tempWheelArray = E ? [o, L] : [L];
	            d._isVisible && d.changeWheel(E ? [e, m] : [m])
	        };
	        d.getValues = d.getVal;
	        d.getValue = t;
	        return {
	            width: 50,
	            layout: l,
	            headerText: !1,
	            anchor: y,
	            confirmOnTap: E ? [!1, !0] : !0,
	            formatValue: function (a) {
	                var b,
	                    c = [];
	                if (V) {
	                    for (b in v)c.push(X[b] ? X[b].text : "");
	                    return c.join(", ")
	                }
	                a = a[m];
	                return X[a] ? X[a].text : ""
	            },
	            parseValue: function (a) {
	                g(a === n ? p.val() : a);
	                return E ? [o, L] : [L]
	            },
	            onValueTap: O,
	            onValueFill: i,
	            onBeforeShow: function () {
	                if (V && N.counter)N.headerText = function () {
	                    var b = 0;
	                    a.each(v, function () {
	                        b++
	                    });
	                    return (b > 1 ? N.selectedPluralText || N.selectedText : N.selectedText).replace(/{count}/, b)
	                };
	                g(p.val());
	                if (E)d._tempWheelArray = [o, L];
	                d.refresh()
	            },
	            onMarkupReady: function (b) {
	                b.addClass("dw-select");
	                a(".dwwl" + e, b).on("mousedown touchstart",
	                    function () {
	                        clearTimeout(G)
	                    });
	                a(".dwwl" + m, b).on("mousedown touchstart", function () {
	                    D || clearTimeout(G)
	                });
	                ga && a(".dwwl" + m, b).addClass("dw-select-gr");
	                if (V) {
	                    b.addClass("dwms");
	                    a(".dwwl", b).on("keydown", function (b) {
	                        if (b.keyCode == 32) {
	                            b.preventDefault();
	                            b.stopPropagation();
	                            O(a(".dw-sel", this))
	                        }
	                    }).eq(m).attr("aria-multiselectable", "true");
	                    K = a.extend({}, v)
	                }
	            },
	            validate: function (f, g, h, i) {
	                var j, l = [];
	                j = d.getArrayVal(true);
	                var s = j[e], p = j[m], q = a(".dw-ul", f).eq(e), t = a(".dw-ul", f).eq(m);
	                c[e] > 1 && a(".dw-li", q).slice(0,
	                    2).removeClass("dw-v").addClass("dw-fv");
	                H[e] < B.length - 2 && a(".dw-li", q).slice(-2).removeClass("dw-v").addClass("dw-fv");
	                c[m] > 1 && a(".dw-li", t).slice(0, 2).removeClass("dw-v").addClass("dw-fv");
	                H[m] < (ea ? da[s].options : I).length - 2 && a(".dw-li", t).slice(-2).removeClass("dw-v").addClass("dw-fv");
	                if (!u) {
	                    L = p;
	                    if (E) {
	                        o = X[L].group;
	                        if (g === n || g === e) {
	                            o = +j[e];
	                            D = false;
	                            if (o !== U) {
	                                L = da[o].options[0].value;
	                                c[m] = null;
	                                H[m] = null;
	                                D = true;
	                                N.readonly = [false, true]
	                            } else N.readonly = T
	                        }
	                    }
	                    if (Y && (/__group/.test(L) || k)) {
	                        p = L = da[X[k || L].group].options[0].value;
	                        k = false
	                    }
	                    d._tempWheelArray = E ? [s, p] : [p];
	                    if (E) {
	                        r(N.wheels);
	                        S[e] && l.push(e)
	                    }
	                    b(N.wheels);
	                    S[m] && l.push(m);
	                    clearTimeout(G);
	                    G = setTimeout(function () {
	                        if (l.length) {
	                            u = true;
	                            D = false;
	                            U = o;
	                            c[e] = x[e];
	                            H[e] = J[e];
	                            c[m] = x[m];
	                            H[m] = J[m];
	                            d._tempWheelArray = E ? [s, L] : [L];
	                            d.changeWheel(l, 0, g !== n)
	                        }
	                        if (E) {
	                            g === m && d.scroll(q, e, d.getValidCell(o, q, i, false, true).v, 0.1);
	                            d._tempWheelArray[e] = o
	                        }
	                        N.readonly = T
	                    }, g === n ? 100 : h * 1E3);
	                    if (l.length)return D ? false : true
	                }
	                if (g === n && V) {
	                    j = v;
	                    h = 0;
	                    a(".dwwl" + m + " .dw-li", f).removeClass(Q).removeAttr("aria-selected");
	                    for (h in j)a(".dwwl" + m + ' .dw-li[data-val="' + j[h] + '"]', f).addClass(Q).attr("aria-selected", "true")
	                }
	                ga && a('.dw-li[data-val^="__group"]', f).addClass("dw-w-gr");
	                a.each(N.invalid, function (b, c) {
	                    a('.dw-li[data-val="' + c + '"]', t).removeClass("dw-v dw-fv")
	                });
	                u = false
	            },
	            onValidated: function () {
	                L = d._tempWheelArray[m]
	            },
	            onClear: function (b) {
	                v = {};
	                y.val("");
	                a(".dwwl" + m + " .dw-li", b).removeClass(Q).removeAttr("aria-selected")
	            },
	            onCancel: function () {
	                !d.live && V && (v = a.extend({}, K))
	            },
	            onDestroy: function () {
	                y.hasClass("mbsc-control") ||
	                y.remove();
	                p.removeClass("dw-hsel").removeAttr("tabindex")
	            }
	        }
	    }
	})($);
	(function (a) {
	    a.each(["date", "time", "datetime"], function (n, t) {
	        a.mobiscroll.presetShort(t)
	    })
	})($);
	(function (a) {
	    var n = a.mobiscroll, t = n.presets.scroller, w = {
	        min: 0,
	        max: 100,
	        defUnit: "km",
	        units: "m,km,in,ft,yd,mi".split(",")
	    }, h = {
	        mm: 0.001,
	        cm: 0.01,
	        dm: 0.1,
	        m: 1,
	        dam: 10,
	        hm: 100,
	        km: 1E3,
	        "in": 0.0254,
	        ft: 0.3048,
	        yd: 0.9144,
	        ch: 20.1168,
	        fur: 201.168,
	        mi: 1609.344,
	        lea: 4828.032
	    };
	    n.presetShort("distance");
	    t.distance = function (j) {
	        var d = a.extend({}, w, j.settings), f = [], n, r;
	        if (d.units)for (r = 0; r < d.units.length; r++)n = d.units[r], h[n] && f.push(n);
	        a.extend(j.settings, d, {
	            sign: !1, units: f, unitNames: null, convert: function (a, d, f) {
	                return a * h[d] /
	                    h[f]
	            }
	        });
	        return t.measurement.call(this, j)
	    }
	})($);
	(function (a) {
	    var n = a.mobiscroll, t = n.presets.scroller, w = {
	        min: 0,
	        max: 1E3,
	        defUnit: "kg",
	        units: ["g", "kg", "oz", "lb"],
	        unitNames: {tlong: "t (long)", tshort: "t (short)"}
	    }, h = {
	        mg: 0.001,
	        cg: 0.01,
	        dg: 0.1,
	        g: 1,
	        dag: 10,
	        hg: 100,
	        kg: 1E3,
	        t: 1E6,
	        drc: 1.7718452,
	        oz: 28.3495,
	        lb: 453.59237,
	        st: 6350.29318,
	        qtr: 12700.58636,
	        cwt: 50802.34544,
	        tlong: 1016046.9088,
	        tshort: 907184.74
	    };
	    n.presetShort("mass");
	    t.mass = function (j) {
	        var d = a.extend({}, w, j.settings), f = [], n = [], r, b;
	        if (d.units)for (b = 0; b < d.units.length; b++)r = d.units[b], h[r] && (f.push(r), n.push(d.unitNames[r] ||
	            r));
	        a.extend(j.settings, d, {
	            sign: !1, units: f, unitNames: n, convert: function (a, b, d) {
	                return a * h[b] / h[d]
	            }
	        });
	        return t.measurement.call(this, j)
	    }
	})($);
	(function (a) {
	    var n = a.mobiscroll, t = n.presets.scroller, w = {
	        min: 0,
	        max: 100,
	        defUnit: "N",
	        units: ["N", "kp", "lbf", "pdl"]
	    }, h = {N: 1, kp: 9.80665, lbf: 4.448222, pdl: 0.138255};
	    n.presetShort("force");
	    t.force = function (j) {
	        var d = a.extend({}, w, j.settings), f = [], n, r;
	        if (d.units)for (r = 0; r < d.units.length; r++)n = d.units[r], h[n] && f.push(n);
	        a.extend(j.settings, d, {
	            sign: !1, units: f, unitNames: null, convert: function (a, d, f) {
	                return a * h[d] / h[f]
	            }
	        });
	        return t.measurement.call(this, j)
	    }
	})($);
	(function (a) {
	    var n = a.mobiscroll, t = n.presets.scroller, w = {
	        min: -20,
	        max: 40,
	        defUnit: "c",
	        units: ["c", "k", "f", "r"],
	        unitNames: {c: "\u00b0C", k: "K", f: "\u00b0F", r: "\u00b0R"}
	    }, h = {c: 1, k: 1, f: 1, r: 1}, j = {
	        c2k: function (a) {
	            return a + 273.15
	        }, c2f: function (a) {
	            return 9 * a / 5 + 32
	        }, c2r: function (a) {
	            return 9 * (a + 273.15) / 5
	        }, k2c: function (a) {
	            return a - 273.15
	        }, k2f: function (a) {
	            return 9 * a / 5 - 459.67
	        }, k2r: function (a) {
	            return 9 * a / 5
	        }, f2c: function (a) {
	            return 5 * (a - 32) / 9
	        }, f2k: function (a) {
	            return 5 * (a + 459.67) / 9
	        }, f2r: function (a) {
	            return a + 459.67
	        }, r2c: function (a) {
	            return 5 *
	                (a - 491.67) / 9
	        }, r2k: function (a) {
	            return 5 * a / 9
	        }, r2f: function (a) {
	            return a - 459.67
	        }
	    };
	    n.presetShort("temperature");
	    t.temperature = function (d) {
	        var f = a.extend({}, w, d.settings), n = [], r = [], b, g;
	        if (f.units)for (g = 0; g < f.units.length; g++)b = f.units[g], h[b] && (n.push(b), r.push(f.unitNames[b] || b));
	        a.extend(d.settings, f, {
	            sign: !0, units: n, unitNames: r, convert: function (a, b, d) {
	                return j[b + "2" + d](a)
	            }
	        });
	        return t.measurement.call(this, d)
	    }
	})($);
	(function (a) {
	    var n = a.mobiscroll, t = n.presets.scroller, w = {
	        min: 0,
	        max: 100,
	        defUnit: "kph",
	        units: ["kph", "mph", "mps", "fps", "knot"],
	        unitNames: {kph: "km/h", mph: "mi/h", mps: "m/s", fps: "ft/s", knot: "knot"}
	    }, h = {kph: 1, mph: 1.60934, mps: 3.6, fps: 1.09728, knot: 1.852};
	    n.presetShort("speed");
	    t.speed = function (j) {
	        var d = a.extend({}, w, j.settings), f = [], n = [], r, b;
	        if (d.units)for (b = 0; b < d.units.length; b++)r = d.units[b], h[r] && (f.push(r), n.push(d.unitNames[r] || r));
	        a.extend(j.settings, d, {
	            sign: !1, units: f, unitNames: n, convert: function (a, b,
	                                                                 d) {
	                return a * h[b] / h[d]
	            }
	        });
	        return t.measurement.call(this, j)
	    }
	})($);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);