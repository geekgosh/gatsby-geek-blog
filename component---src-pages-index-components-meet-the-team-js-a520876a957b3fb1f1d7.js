(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5],{"+FWb":function(e,t,r){e.exports=r.p+"static/soul-land-tang-san-9dc4afb012b365dba15fe6d16a6fe4e6.jpg"},"2SVd":function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,r){"use strict";r("pIFo"),e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"8oxB":function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,u=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?u=c.concat(u):l=-1,u.length&&h())}function h(){if(!f){var e=s(p);f=!0;for(var t=u.length;t;){for(c=u,u=[];++l<t;)c&&c[l].run();l=-1,t=u.length}c=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new d(e,t)),1!==u.length||f||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9rSQ":function(e,t,r){"use strict";r("8+KV");var n=r("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},AphP:function(e,t,r){"use strict";var n=r("XKFU"),o=r("S/j/"),a=r("apmT");n(n.P+n.F*r("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=o(this),r=a(t);return"number"!=typeof r||isFinite(r)?t.toISOString():null}})},CgaS:function(e,t,r){"use strict";r("pIFo"),r("8+KV"),r("VRzm"),r("Btvt");var n=r("xTJ+"),o=r("MLWZ"),a=r("9rSQ"),i=r("UnBK"),s=r("SntB");function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,o){return this.request(n.merge(o||{},{method:e,url:t,data:r}))}})),e.exports=c},DfZB:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},JEQr:function(e,t,r){"use strict";(function(t){r("8+KV"),r("a1Th"),r("h7Nl"),r("Btvt");var n=r("xTJ+"),o=r("yK9s"),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?s=r("tQ2B"):"undefined"!=typeof XMLHttpRequest&&(s=r("tQ2B")),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(a)})),e.exports=c}).call(this,r("8oxB"))},LYNF:function(e,t,r){"use strict";var n=r("OH9c");e.exports=function(e,t,r,o,a){var i=new Error(e);return n(i,t,r,o,a)}},Lmem:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,r){"use strict";r("V+eJ"),r("jqX0"),r("8+KV"),r("a1Th"),r("h7Nl"),r("Btvt"),r("pIFo");var n=r("xTJ+");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var a;if(r)a=r(t);else if(n.isURLSearchParams(t))a=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},OH9c:function(e,t,r){"use strict";r("f3/d"),r("AphP"),e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,r){"use strict";r("OG14"),r("pIFo");var n=r("xTJ+");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},Oyvg:function(e,t,r){var n=r("dyZX"),o=r("Xbzi"),a=r("hswa").f,i=r("kJMx").f,s=r("quPj"),c=r("C/va"),u=n.RegExp,f=u,l=u.prototype,p=/a/g,h=/a/g,d=new u(p)!==p;if(r("nh4g")&&(!d||r("eeVq")((function(){return h[r("K0xU")("match")]=!1,u(p)!=p||u(h)==h||"/a/i"!=u(p,"i")})))){u=function(e,t){var r=this instanceof u,n=s(e),a=void 0===t;return!r&&n&&e.constructor===u&&a?e:o(d?new f(n&&!a?e.source:e,t):f((n=e instanceof u)?e.source:e,n&&a?c.call(e):t),r?this:l,u)};for(var m=function(e){e in u||a(u,e,{configurable:!0,get:function(){return f[e]},set:function(t){f[e]=t}})},g=i(f),v=0;g.length>v;)m(g[v++]);l.constructor=u,u.prototype=l,r("KroJ")(n,"RegExp",u)}r("elZq")("RegExp")},"Rn+g":function(e,t,r){"use strict";var n=r("LYNF");e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},SntB:function(e,t,r){"use strict";r("8+KV");var n=r("xTJ+");e.exports=function(e,t){t=t||{};var r={};return n.forEach(["url","method","params","data"],(function(e){void 0!==t[e]&&(r[e]=t[e])})),n.forEach(["headers","auth","proxy"],(function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):void 0!==t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):void 0!==e[o]&&(r[o]=e[o])})),n.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])})),r}},TJOF:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),o=r.n(n),a=(r("ls82"),r("Z2Ku"),r("L9s1"),r("rE2o"),r("ioFf"),r("rGqo"),r("q1tI")),i=r.n(a),s=r("vDqi"),c=r.n(s),u=r("pYOs"),f=r.n(u),l=function(e,t){void 0===t&&(t=[]);var r={},n=t,o=Array.isArray(n),a=0;for(n=o?n:n[Symbol.iterator]();;){var i;if(o){if(a>=n.length)break;i=n[a++]}else{if((a=n.next()).done)break;i=a.value}var s=i,c=e.get(s);[void 0,null,"",{},[]].includes(c)||(r[s]=c)}return r};t.default=function(){var e=Object(a.useRef)(null);return i.a.createElement("form",{id:"contactUsForm",onSubmit:function(t){var r,n,a,i;return o.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t.preventDefault(),(r=e.current).classList.add("loading"),n=l(new FormData(t.target),["name","email","companyName","phoneNumber","message"]),s.prev=4,a=t.target,i=c.a.create({headers:{Accept:"application/json","Content-Type":"application/json"}}),s.next=9,o.a.awrap(i.post("https://frdmcjj3g5.execute-api.us-east-1.amazonaws.com/dev/send-contact-us-email",n));case 9:r.classList.remove("loading"),r.classList.add("done"),setTimeout((function(){r.classList.remove("done")}),2e3),document.getElementById(a.getAttribute("id")).reset(),s.next=18;break;case 15:s.prev=15,s.t0=s.catch(4),console.log("error",s.t0.message);case 18:case"end":return s.stop()}}),null,null,[[4,15]])},className:f.a.contactUs},i.a.createElement("input",{name:"name",autoComplete:"off",type:"text",className:f.a.inputField,required:!0,placeholder:"Name*"}),i.a.createElement("input",{name:"email",autoComplete:"off",type:"email",className:f.a.inputField,required:!0,placeholder:"Email*"}),i.a.createElement("input",{name:"companyName",autoComplete:"off",type:"text",className:f.a.inputField,placeholder:"Company Name"}),i.a.createElement("input",{name:"phoneNumber",autoComplete:"off",type:"tel",className:f.a.inputField,placeholder:"Phone Number"}),i.a.createElement("textarea",{required:!0,name:"message",className:f.a.textareaField,minLength:"20",maxLength:"2000",placeholder:"Your message here*... 20 characters Min."}),i.a.createElement("button",{ref:e,className:f.a.submitButton,type:"submit"}))}},UnBK:function(e,t,r){"use strict";r("VRzm"),r("Btvt"),r("8+KV");var n=r("xTJ+"),o=r("xAGQ"),a=r("Lmem"),i=r("JEQr"),s=r("2SVd"),c=r("5oMp");function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},endd:function(e,t,r){"use strict";function n(e){this.message=e}r("a1Th"),r("h7Nl"),r("Btvt"),n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},eqyj:function(e,t,r){"use strict";r("eM6i"),r("Oyvg"),r("SRfc");var n=r("xTJ+");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},"jfS+":function(e,t,r){"use strict";r("VRzm"),r("Btvt");var n=r("endd");function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},jqX0:function(e,t,r){var n=r("XKFU"),o=r("jtBr");n(n.P+n.F*(Date.prototype.toISOString!==o),"Date",{toISOString:o})},jtBr:function(e,t,r){"use strict";var n=r("eeVq"),o=Date.prototype.getTime,a=Date.prototype.toISOString,i=function(e){return e>9?e:"0"+e};e.exports=n((function(){return"0385-07-25T07:06:39.999Z"!=a.call(new Date(-5e13-1))}))||!n((function(){a.call(new Date(NaN))}))?function(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),r=e.getUTCMilliseconds(),n=t<0?"-":t>9999?"+":"";return n+("00000"+Math.abs(t)).slice(n?-6:-4)+"-"+i(e.getUTCMonth()+1)+"-"+i(e.getUTCDate())+"T"+i(e.getUTCHours())+":"+i(e.getUTCMinutes())+":"+i(e.getUTCSeconds())+"."+(r>99?r:"0"+i(r))+"Z"}:a},ls82:function(e,t,r){r("rGqo"),r("yt8O"),r("a1Th"),r("h7Nl"),r("VRzm"),r("Btvt"),r("/SS/"),r("f3/d"),r("8+KV"),r("hHhE"),r("rE2o"),r("ioFf");var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return R()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=N(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=u(e,t,r);if("normal"===c.type){if(n=r.done?h:l,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=c;var f="suspendedStart",l="suspendedYield",p="executing",h="completed",d={};function m(){}function g(){}function v(){}var y={};y[a]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(O([])));x&&x!==r&&n.call(x,a)&&(y=x);var E=v.prototype=m.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function T(e){var t;this._invoke=function(r,o){function a(){return new Promise((function(t,a){!function t(r,o,a,i){var s=u(e[r],e,o);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then((function(e){t("next",e,a,i)}),(function(e){t("throw",e,a,i)})):Promise.resolve(f).then((function(e){c.value=e,a(c)}),(function(e){return t("throw",e,a,i)}))}i(s.arg)}(r,o,t,a)}))}return t=t?t.then(a,a):a()}}function N(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function O(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:R}}function R(){return{value:t,done:!0}}return g.prototype=E.constructor=v,v.constructor=g,v[s]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},b(T.prototype),T.prototype[i]=function(){return this},e.AsyncIterator=T,e.async=function(t,r,n,o){var a=new T(c(t,r,n,o));return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(E),E[s]="Generator",E[a]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")},tQ2B:function(e,t,r){"use strict";r("8+KV"),r("V+eJ"),r("VRzm"),r("Btvt");var n=r("xTJ+"),o=r("Rn+g"),a=r("MLWZ"),i=r("w0Vi"),s=r("OTTw"),c=r("LYNF");e.exports=function(e){return new Promise((function(t,u){var f=e.data,l=e.headers;n.isFormData(f)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",d=e.auth.password||"";l.Authorization="Basic "+btoa(h+":"+d)}if(p.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,u,n),p=null}},p.onabort=function(){p&&(u(c("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){u(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var m=r("eqyj"),g=(e.withCredentials||s(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;g&&(l[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&n.forEach(l,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)})),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(v){if("json"!==e.responseType)throw v}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),u(e),p=null)})),void 0===f&&(f=null),p.send(f)}))}},utbx:function(e,t,r){"use strict";r.r(t);r("f3/d");var n=r("q1tI"),o=r.n(n),a=r("+FWb"),i=r.n(a),s=r("TJOF"),c=r("WRS/"),u=r.n(c);t.default=function(e){var t=e.targetRef;return o.a.createElement("div",{ref:t,className:u.a.team},o.a.createElement("div",{className:u.a.left},o.a.createElement("div",{id:"stars-group-1"}),o.a.createElement("div",{id:"stars-group-2"}),o.a.createElement("div",{id:"stars-group-3"}),o.a.createElement("div",{id:"stars-group-4"}),o.a.createElement("div",{id:"stars-group-5"}),o.a.createElement("div",{id:"stars-group-6"}),o.a.createElement("div",null,o.a.createElement("h2",{className:u.a.title},"Meet the Team"),o.a.createElement("p",{className:u.a.description},"The site is created to share awesome technology blog post"),o.a.createElement("figure",{className:u.a.founder},o.a.createElement("img",{className:u.a.picture,src:i.a,alt:"founder"}),o.a.createElement("figcaption",null,o.a.createElement("h3",{className:u.a.name},"Sheng Chuang"),o.a.createElement("span",{className:u.a.position},"full stack engineer ",o.a.createElement("span",{className:u.a.emoji},"👨‍💻")),o.a.createElement("p",{className:u.a.description},"Love full stack engineering"))))),o.a.createElement("div",{className:u.a.right},o.a.createElement("div",null,o.a.createElement("h2",{className:u.a.title},"Get in Touch"),o.a.createElement("p",{className:u.a.description},"Please let me know if you have any questions!"),o.a.createElement("p",{className:u.a.description},"Contact me via ",o.a.createElement("b",null,"Email"),":",o.a.createElement("a",{href:"mailto:foundragon@gmail.com",className:u.a.email}," foundragon@gmail.com")),o.a.createElement(s.default,null))))}},vDqi:function(e,t,r){e.exports=r("zuR4")},w0Vi:function(e,t,r){"use strict";r("Tze0"),r("V+eJ"),r("KKXr"),r("8+KV");var n=r("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,a,i={};return e?(n.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=n.trim(e.substr(0,a)).toLowerCase(),r=n.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},x86X:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},xAGQ:function(e,t,r){"use strict";r("8+KV");var n=r("xTJ+");e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},"xTJ+":function(e,t,r){"use strict";r("pIFo"),r("a1Th"),r("h7Nl"),r("Btvt");var n=r("HSsa"),o=r("x86X"),a=Object.prototype.toString;function i(e){return"[object Array]"===a.call(e)}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===a.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],r);return t},deepMerge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]="object"==typeof r?e({},r):r}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],r);return t},extend:function(e,t,r){return u(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,r){"use strict";r("8+KV");var n=r("xTJ+");e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},zuR4:function(e,t,r){"use strict";r("VRzm"),r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3");var n=r("xTJ+"),o=r("HSsa"),a=r("CgaS"),i=r("SntB");function s(e){var t=new a(e),r=o(a.prototype.request,t);return n.extend(r,a.prototype,t),n.extend(r,t),r}var c=s(r("JEQr"));c.Axios=a,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=r("endd"),c.CancelToken=r("jfS+"),c.isCancel=r("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=r("DfZB"),e.exports=c,e.exports.default=c}}]);
//# sourceMappingURL=component---src-pages-index-components-meet-the-team-js-a520876a957b3fb1f1d7.js.map