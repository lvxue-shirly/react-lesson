webpackJsonp([2],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(4),i=n(o),a=r(20),s=r(78),u=(n(s),r(129)),f=n(u),c=r(130),l=n(c);r(131),f.default.subscribe(function(){}),(0,s.render)(i.default.createElement(a.Provider,{store:f.default},l.default),document.getElementById("root"))},35:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(4),c=o(f),l=r(20),d=r(127),p=n(d),h=function(e){var t,r,n={id:"",url:"",data:{},component:c.default.createElement("div",null)};for(var o in e)n[o]=e[o];var d=(r=t=function(e){function t(e,r){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return s(t,e),u(t,[{key:"componentWillMount",value:function(){this.props.setting.url&&this.props.fetchData(this.props.setting.url,this.props.setting.data)}},{key:"render",value:function(){return c.default.createElement(this.props.setting.component,this.props)}},{key:"componentDidMount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return!0}}]),t}(f.Component),t.defaultProps={setting:n},r),h=function(e){var t=e.fData,r=e.loading,n=e.increaseData,o=e.decreaseData;return{increaseData:n,decreaseData:o,fData:t,loading:r}};return(0,l.connect)(h,p)(d)};t.default=h},123:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(4),f=n(u),c=r(34),l=(r(20),r(45),r(35)),d=n(l),p=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.pClick=function(){},e.state={},e}return a(t,e),s(t,[{key:"render",value:function(){return f.default.createElement("div",{id:"BottonView"},f.default.createElement("p",{className:"lesson-3"},"botton component"),f.default.createElement(c.Link,{className:"link_page2",to:"/page2"},"link to page2"))}},{key:"shouldComponentUpdate",value:function(e,t){return!0}}]),t}(u.Component);t.default=(0,d.default)({id:"",url:"",component:p})},124:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(4),f=n(u),c=(r(20),r(35)),l=n(c),d=r(123),p=n(d),h=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.pClick=function(){},e.state={},e}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.increaseData,r=e.decreaseData,n=e.increase,o=e.decrease;return f.default.createElement("div",{id:"IndexView"},f.default.createElement("p",{className:"lesson-3"},"React lesson-3"),f.default.createElement("p",null,"---------------------------------"),f.default.createElement("div",{className:"count"},f.default.createElement("div",null,"计数 +：",t.count,"次"),f.default.createElement("div",null,"计数 -：",r.count,"次"),f.default.createElement("span",{className:"btn",onClick:n},"+"),f.default.createElement("span",{className:"btn",onClick:o},"-")),f.default.createElement("div",{className:"botton-img"}),f.default.createElement(p.default,null))}},{key:"shouldComponentUpdate",value:function(e,t){return!0}}]),t}(u.Component);t.default=(0,l.default)({id:"index",url:"",component:h})},127:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchData=t.decrease=t.increase=void 0;var o=r(232),i=n(o),a=(t.increase=function(){return{type:"INCREASE"}},t.decrease=function(){return{type:"DECREASE"}},function(e,t){return{type:"DISPATHDATA",path:e,json:t}});t.fetchData=function(e,t){return function(t){t({type:"LOADING"}),(0,i.default)(e,{mode:"cors","Content-Type":"application/json"}).then(function(e){if(e.status>=400)throw new Error("Bad response from server");return e.json()}).then(function(e){setTimeout(function(){return t(a("getData",e))},3e3)}).catch(function(e){console.log("Request failed",e)})}}},128:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.increaseData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{count:0},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"INCREASE":var r=e.count+1;return{count:r};default:return e}},t.decreaseData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{count:0},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"DECREASE":var r=e.count-1;return{count:r};default:return e}},t.fData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:{},loading:!1},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOADING":return{data:{},loading:!0};case"DISPATHDATA":return{data:t.json,loading:!1};default:return e}}},129:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(71),a=r(109),s=o(a),u=r(128),f=n(u),c=(0,i.createStore)((0,i.combineReducers)(f),(0,i.applyMiddleware)(s.default));t.default=c},130:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(4),i=n(o),a=r(34),s=r(124),u=n(s),f=function(e,t){r.e(1,function(e){t(null,r(126).default)})},c=i.default.createElement(a.Router,{history:a.hashHistory},i.default.createElement(a.Route,{path:"/",component:u.default}),i.default.createElement(a.Route,{path:"/page2",getComponent:f}));t.default=c},131:function(e,t){},227:function(e,t){"use strict";!function(e){function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return m.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function a(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function s(e){var t=new FileReader,r=a(t);return t.readAsArrayBuffer(e),r}function u(e){var t=new FileReader,r=a(t);return t.readAsText(e),r}function f(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function c(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(m.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(m.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(m.arrayBuffer&&m.blob&&_(e))this._bodyArrayBuffer=c(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!w(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(f(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(h)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(e){var t=e.toUpperCase();return E.indexOf(t)>-1?t:e}function p(e,t){t=t||{};var r=t.body;if(e instanceof p){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=d(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function h(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function y(e){var t=new o;return e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function b(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var m={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(m.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],_=function(e){return e&&DataView.prototype.isPrototypeOf(e)},w=ArrayBuffer.isView||function(e){return e&&v.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,n){e=t(e),n=r(n);var o=this.map[e];this.map[e]=o?o+","+n:n},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,n){this.map[t(e)]=r(n)},o.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var E=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},l.call(p.prototype),l.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var g=[301,302,303,307,308];b.redirect=function(e,t){if(g.indexOf(t)===-1)throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=p,e.Response=b,e.fetch=function(e,t){return new Promise(function(r,n){var o=new p(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;r(new b(t,e))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send("undefined"==typeof o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:void 0)},232:function(e,t,r){"use strict";r(227),e.exports=self.fetch.bind(self)}});