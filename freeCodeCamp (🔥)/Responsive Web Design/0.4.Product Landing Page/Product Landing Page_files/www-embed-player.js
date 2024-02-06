(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function fa(a){return a.raw=a}
function ia(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ka(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var oa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||oa});
var pa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},qa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=pa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ra;
if("function"==typeof Object.setPrototypeOf)ra=Object.setPrototypeOf;else{var sa;a:{var ta={a:!0},ua={};try{ua.__proto__=ta;sa=ua.a;break a}catch(a){}sa=!1}ra=sa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=ra;
function x(a,b){a.prototype=pa(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.za=b.prototype}
function wa(){this.A=!1;this.v=null;this.i=void 0;this.h=1;this.m=this.l=0;this.P=this.j=null}
function xa(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
wa.prototype.D=function(a){this.i=a};
function ya(a,b){a.j={exception:b,od:!0};a.h=a.l||a.m}
wa.prototype.return=function(a){this.j={return:a};this.h=this.m};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.B=function(a){this.h=a};
function za(a,b,c){a.l=b;void 0!=c&&(a.m=c)}
function Aa(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.od?a.h=a.l||a.m:void 0!=b.B&&a.m<b.B?(a.h=b.B,a.j=null):a.h=a.m:a.h=0}
function Ca(a){this.h=new wa;this.i=a}
function Da(a,b){xa(a.h);var c=a.h.v;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.v,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.v=null,ya(a.h,g),Fa(a)}a.h.v=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.od)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){xa(a.h);a.h.v?b=Ea(a,a.h.v.next,b,a.h.D):(a.h.D(b),b=Fa(a));return b};
this.throw=function(b){xa(a.h);a.h.v?b=Ea(a,a.h.v["throw"],b,a.h.D):(ya(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function z(a){return Ha(new Ga(new Ca(a)))}
function A(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return qa});
u("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.v()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.v=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.ba),reject:g(this.v)}};
b.prototype.ba=function(g){if(g===this)this.v(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.X(g):this.m(g)}};
b.prototype.X=function(g){var h=void 0;try{h=g.then}catch(k){this.v(k);return}"function"==typeof h?this.ha(h,g):this.m(g)};
b.prototype.v=function(g){this.D(2,g)};
b.prototype.m=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ea();this.P()};
b.prototype.ea=function(){var g=this;e(function(){if(g.T()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.T=function(){if(this.A)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.P=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.fa=function(g){var h=this.l();g.Ub(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,r){return"function"==typeof t?function(w){try{l(t(w))}catch(y){n(y)}}:r}
var l,n,p=new b(function(t,r){l=t;n=r});
this.Ub(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ub=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Ub(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(w){return function(y){t[w]=y;r--;0==r&&l(t)}}
var t=[],r=0;do t.push(void 0),r++,d(k.value).Ub(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&la(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ia(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Object.setPrototypeOf",function(a){return a||va});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ja(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return Ja(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ja(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ia(this,b,"includes").indexOf(b,c||0)}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Array.prototype.entries",function(a){return a?a:function(){return Ja(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||da});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ka=Ka||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function La(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return null!=a?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Ua=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa:Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Wa(){return Date.now()}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.za=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function hb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function ib(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function lb(a){var b=mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function nb(a){for(var b in a)return!1;return!0}
function ob(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function pb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function tb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var wb;function xb(){if(void 0===wb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){C.console&&C.console.error(c.message)}wb=a}else wb=a}return wb}
;function yb(a,b){this.h=a===zb&&b||""}
yb.prototype.toString=function(){return this.h};
function Ab(a){return new yb(zb,a)}
var zb={};Ab("");function Bb(a){this.h=a}
Bb.prototype.toString=function(){return this.h+""};
function Cb(a){if(a instanceof Bb&&a.constructor===Bb)return a.h;Ma(a);return"type_error:TrustedResourceUrl"}
var Db={};function Eb(a){var b=xb();a=b?b.createScriptURL(a):a;return new Bb(a,Db)}
;function Fb(a){this.h=a}
Fb.prototype.toString=function(){return this.h.toString()};
var Gb={},Hb=new Fb("about:invalid#zClosurez",Gb);var Ib=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var Jb=La(610401301,!1),Kb=La(572417392,!0);function Lb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Mb,Nb=C.navigator;Mb=Nb?Nb.userAgentData||null:null;function Ob(a){return Jb?Mb?Mb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Lb().indexOf(a)}
;function Pb(){return Jb?!!Mb&&0<Mb.brands.length:!1}
function Qb(){return Pb()?!1:F("Opera")}
function Rb(){return Pb()?!1:F("Trident")||F("MSIE")}
function Sb(){return F("Firefox")||F("FxiOS")}
function Tb(){return Pb()?Ob("Chromium"):(F("Chrome")||F("CriOS"))&&!(Pb()?0:F("Edge"))||F("Silk")}
;function Ub(a){this.h=a}
Ub.prototype.toString=function(){return this.h.toString()};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Vb={};function Wb(){}
Wb.prototype.toString=function(){return this.vd.toString()};function Xb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Yb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zb(a){return a?decodeURI(a):a}
function $b(a,b){return b.match(Yb)[a]||null}
function ac(a){return Zb($b(3,a))}
function bc(a){var b=a.match(Yb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function cc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function dc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function fc(a){var b=[],c;for(c in a)ec(c,a[c],b);return b.join("&")}
function hc(a,b){b=fc(b);return dc(a,b)}
function ic(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return dc(a,b+c)}
function jc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var kc=/#|$/,lc=/[?&]($|#)/;function mc(a,b){for(var c=a.search(kc),d=0,e,f=[];0<=(e=jc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(lc,"$1")}
;function nc(a){this.h=a}
;function oc(a,b,c){this.j=a;this.v=b;this.i=c||[];this.h=new Map}
m=oc.prototype;m.Pd=function(a){var b=A.apply(1,arguments),c=this.wc(b);c?c.push(new nc(a)):this.Cd(a,b)};
m.Cd=function(a){var b=this.Vc(A.apply(1,arguments));this.h.set(b,[new nc(a)])};
m.wc=function(){var a=this.Vc(A.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
m.he=function(){var a=this.wc(A.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.h.clear()};
m.Vc=function(){var a=A.apply(0,arguments);return a?a.join(","):"key"};function pc(a,b){oc.call(this,a,3,b)}
x(pc,oc);pc.prototype.l=function(a){var b=A.apply(1,arguments),c=0,d=this.he(b);d&&(c=d.h);this.Cd(c+a,b)};function qc(a,b){oc.call(this,a,2,b)}
x(qc,oc);qc.prototype.record=function(a){this.Pd(a,A.apply(1,arguments))};function rc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function sc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?sc.apply(null,d):rc(d)}}
;function K(){this.ob=this.ob;this.v=this.v}
m=K.prototype;m.ob=!1;m.Z=function(){return this.ob};
m.dispose=function(){this.ob||(this.ob=!0,this.S())};
function tc(a,b){a.addOnDisposeCallback(Va(rc,b))}
m.addOnDisposeCallback=function(a,b){this.ob?void 0!==b?a.call(b):a():(this.v||(this.v=[]),this.v.push(void 0!==b?Ua(a,b):a))};
m.S=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function uc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
uc.prototype.stopPropagation=function(){this.j=!0};
uc.prototype.preventDefault=function(){this.defaultPrevented=!0};function vc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=wc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,xc[c])c=xc[c];else{c=String(c);if(!xc[c]){var f=/function\s+([^\(]+)/m.exec(c);xc[c]=f?f[1]:"[Anonymous]"}c=xc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function wc(a,b){b||(b={});b[yc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[yc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=wc(a,b));return c}
function yc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var xc={};var zc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Ac(){return Jb?!!Mb&&!!Mb.platform:!1}
function Bc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Cc(a){Cc[" "](a);return a}
Cc[" "]=function(){};var Dc=Qb(),Ec=Rb(),Fc=F("Edge"),Gc=F("Gecko")&&!(-1!=Lb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Hc=-1!=Lb().toLowerCase().indexOf("webkit")&&!F("Edge");Hc&&F("Mobile");Ac()||F("Macintosh");Ac()||F("Windows");(Ac()?"Linux"===Mb.platform:F("Linux"))||Ac()||F("CrOS");var Ic=Ac()?"Android"===Mb.platform:F("Android");Bc();F("iPad");F("iPod");Bc()||F("iPad")||F("iPod");Lb().toLowerCase().indexOf("kaios");
function Jc(){var a=C.document;return a?a.documentMode:void 0}
var Kc;a:{var Lc="",Oc=function(){var a=Lb();if(Gc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Fc)return/Edge\/([\d\.]+)/.exec(a);if(Ec)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Hc)return/WebKit\/(\S+)/.exec(a);if(Dc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Oc&&(Lc=Oc?Oc[1]:"");if(Ec){var Pc=Jc();if(null!=Pc&&Pc>parseFloat(Lc)){Kc=String(Pc);break a}}Kc=Lc}var Qc=Kc,Rc;if(C.document&&Ec){var Sc=Jc();Rc=Sc?Sc:parseInt(Qc,10)||void 0}else Rc=void 0;var Tc=Rc;function Uc(a,b){uc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Xa(Uc,uc);var Vc={2:"touch",3:"pen",4:"mouse"};
Uc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Gc){a:{try{Cc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Vc[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Uc.za.preventDefault.call(this)};
Uc.prototype.stopPropagation=function(){Uc.za.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Uc.prototype.preventDefault=function(){Uc.za.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Wc="closure_listenable_"+(1E6*Math.random()|0);var Xc=0;function Yc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Yb=e;this.key=++Xc;this.Lb=this.Tb=!1}
function Zc(a){a.Lb=!0;a.listener=null;a.proxy=null;a.src=null;a.Yb=null}
;function $c(a){this.src=a;this.listeners={};this.h=0}
$c.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ad(a,b,d,e);-1<g?(b=a[g],c||(b.Tb=!1)):(b=new Yc(b,this.src,f,!!d,e),b.Tb=c,a.push(b));return b};
$c.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ad(e,b,c,d);return-1<b?(Zc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function bd(a,b){var c=b.type;c in a.listeners&&ib(a.listeners[c],b)&&(Zc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ad(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Lb&&f.listener==b&&f.capture==!!c&&f.Yb==d)return e}return-1}
;var cd="closure_lm_"+(1E6*Math.random()|0),dd={},ed=0;function fd(a,b,c,d,e){if(d&&d.once)gd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)fd(a,b[f],c,d,e);else c=hd(c),a&&a[Wc]?a.listen(b,c,Oa(d)?!!d.capture:!!d,e):id(a,b,c,!1,d,e)}
function id(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=jd(a);h||(a[cd]=h=new $c(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=kd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)zc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ld(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ed++}}
function kd(){function a(c){return b.call(a.src,a.listener,c)}
var b=md;return a}
function gd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)gd(a,b[f],c,d,e);else c=hd(c),a&&a[Wc]?a.h.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):id(a,b,c,!0,d,e)}
function nd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)nd(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=hd(c),a&&a[Wc])?a.h.remove(String(b),c,d,e):a&&(a=jd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ad(b,c,d,e)),(c=-1<a?b[a]:null)&&od(c))}
function od(a){if("number"!==typeof a&&a&&!a.Lb){var b=a.src;if(b&&b[Wc])bd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ld(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ed--;(c=jd(b))?(bd(c,a),0==c.h&&(c.src=null,b[cd]=null)):Zc(a)}}}
function ld(a){return a in dd?dd[a]:dd[a]="on"+a}
function md(a,b){if(a.Lb)a=!0;else{b=new Uc(b,this);var c=a.listener,d=a.Yb||a.src;a.Tb&&od(a);a=c.call(d,b)}return a}
function jd(a){a=a[cd];return a instanceof $c?a:null}
var pd="__closure_events_fn_"+(1E9*Math.random()>>>0);function hd(a){if("function"===typeof a)return a;a[pd]||(a[pd]=function(b){return a.handleEvent(b)});
return a[pd]}
;function qd(){K.call(this);this.h=new $c(this);this.Za=this;this.fa=null}
Xa(qd,K);qd.prototype[Wc]=!0;m=qd.prototype;m.addEventListener=function(a,b,c,d){fd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){nd(this,a,b,c,d)};
function rd(a,b){var c=a.fa;if(c){var d=[];for(var e=1;c;c=c.fa)d.push(c),++e}a=a.Za;c=b.type||b;"string"===typeof b?b=new uc(b,a):b instanceof uc?b.target=b.target||a:(e=b,b=new uc(c,a),vb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=sd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=sd(g,c,!0,b)&&e,b.j||(e=sd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=sd(g,c,!1,b)&&e}
m.S=function(){qd.za.S.call(this);this.removeAllListeners();this.fa=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Zc(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function sd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Lb&&g.capture==c){var h=g.listener,k=g.Yb||g.src;g.Tb&&bd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function td(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
td.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function ud(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function vd(a,b){return a+Math.random()*(b-a)}
;function wd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=wd.prototype;m.clone=function(){return new wd(this.x,this.y)};
m.equals=function(a){return a instanceof wd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function xd(a,b){this.width=a;this.height=b}
m=xd.prototype;m.clone=function(){return new xd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function yd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function zd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Ad(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Bd;function Cd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=zd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ua(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Rb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.cd;c.cd=null;e()}};
return function(e){d.next={cd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Dd(a){C.setTimeout(function(){throw a;},0)}
;function Ed(){this.i=this.h=null}
Ed.prototype.add=function(a,b){var c=Fd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Ed.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Fd=new td(function(){return new Gd},function(a){return a.reset()});
function Gd(){this.next=this.scope=this.h=null}
Gd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Gd.prototype.reset=function(){this.next=this.scope=this.h=null};var Hd,Id=!1,Jd=new Ed;function Kd(a,b){Hd||Ld();Id||(Hd(),Id=!0);Jd.add(a,b)}
function Ld(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Hd=function(){a.then(Md)}}else Hd=function(){var b=Md;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Pb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Bd||(Bd=Cd()),Bd(b)):C.setImmediate(b)}}
function Md(){for(var a;a=Jd.remove();){try{a.h.call(a.scope)}catch(b){Dd(b)}ud(Fd,a)}Id=!1}
;function Nd(a){this.h=0;this.A=void 0;this.l=this.i=this.j=null;this.v=this.m=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){Od(b,2,c)},function(c){Od(b,3,c)})}catch(c){Od(this,3,c)}}
function Pd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Pd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Qd=new td(function(){return new Pd},function(a){a.reset()});
function Rd(a,b,c){var d=Qd.get();d.i=a;d.h=b;d.context=c;return d}
function Sd(a){return new Nd(function(b,c){c(a)})}
Nd.prototype.then=function(a,b,c){return Td(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Nd.prototype.$goog_Thenable=!0;m=Nd.prototype;m.mc=function(a,b){return Td(this,null,a,b)};
m.catch=Nd.prototype.mc;m.cancel=function(a){if(0==this.h){var b=new Ud(a);Kd(function(){Vd(this,b)},this)}};
function Vd(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Vd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Wd(c),Xd(c,e,3,b)))}a.j=null}else Od(a,3,b)}
function Yd(a,b){a.i||2!=a.h&&3!=a.h||Zd(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Td(a,b,c,d){var e=Rd(null,null,null);e.child=new Nd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ud?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Yd(a,e);return e.child}
m.ff=function(a){this.h=0;Od(this,2,a)};
m.gf=function(a){this.h=0;Od(this,3,a)};
function Od(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.ff,f=a.gf;if(d instanceof Nd){Yd(d,Rd(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Oa(d))try{var k=d.then;if("function"===typeof k){$d(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.h=b,a.j=null,Zd(a),3!=b||c instanceof Ud||ae(a,c))}}
function $d(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Zd(a){a.m||(a.m=!0,Kd(a.be,a))}
function Wd(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.be=function(){for(var a;a=Wd(this);)Xd(this,a,this.h,this.A);this.m=!1};
function Xd(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.v;a=a.j)a.v=!1;if(b.child)b.child.j=null,ce(b,c,d);else try{b.j?b.i.call(b.context):ce(b,c,d)}catch(e){de.call(null,e)}ud(Qd,b)}
function ce(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ae(a,b){a.v=!0;Kd(function(){a.v&&de.call(null,b)})}
var de=Dd;function Ud(a){Za.call(this,a)}
Xa(Ud,Za);Ud.prototype.name="cancel";function ee(a,b){qd.call(this);this.j=a||1;this.i=b||C;this.l=Ua(this.df,this);this.m=Wa()}
Xa(ee,qd);m=ee.prototype;m.enabled=!1;m.Ea=null;m.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
m.df=function(){if(this.enabled){var a=Wa()-this.m;0<a&&a<.8*this.j?this.Ea=this.i.setTimeout(this.l,this.j-a):(this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null),rd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.i.setTimeout(this.l,this.j),this.m=Wa())};
m.stop=function(){this.enabled=!1;this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null)};
m.S=function(){ee.za.S.call(this);this.stop();delete this.i};
function fe(a,b,c){if("function"===typeof a)c&&(a=Ua(a,c));else if(a&&"function"==typeof a.handleEvent)a=Ua(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function ge(a){K.call(this);this.D=a;this.j=0;this.l=100;this.m=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new ee(this.flushInterval);this.h.listen("tick",this.Pa,!1,this);tc(this,this.h)}
x(ge,K);m=ge.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function he(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.Pa()}
m.Pa=function(){var a=this.i.values();a=[].concat(ka(a)).filter(function(b){return b.h.size});
a.length&&this.D.flush(a,this.m);ie(a);this.j=0;this.h.enabled&&this.h.stop()};
m.qc=function(a){var b=A.apply(1,arguments);this.i.has(a)||this.i.set(a,new pc(a,b))};
m.Xc=function(a){var b=A.apply(1,arguments);this.i.has(a)||this.i.set(a,new qc(a,b))};
function je(a,b){return a.A.has(b)?void 0:a.i.get(b)}
m.nc=function(a){this.Od.apply(this,[a,1].concat(ka(A.apply(1,arguments))))};
m.Od=function(a,b){var c=A.apply(2,arguments),d=je(this,a);d&&d instanceof pc&&(d.l(b,c),he(this))};
m.record=function(a,b){var c=A.apply(2,arguments),d=je(this,a);d&&d instanceof qc&&(d.record(b,c),he(this))};
function ie(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function ke(a){this.h=a;this.h.qc("/client_streamz/bg/fic",{Ba:3,Aa:"ke"})}
function le(a){this.h=a;this.h.qc("/client_streamz/bg/fiec",{Ba:3,Aa:"rk"},{Ba:3,Aa:"ke"},{Ba:2,Aa:"ec"},{Ba:3,Aa:"em"})}
function me(a){this.h=a;this.h.Xc("/client_streamz/bg/fil",{Ba:3,Aa:"rk"},{Ba:3,Aa:"ke"})}
me.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function ne(a){this.h=a;this.h.qc("/client_streamz/bg/fsc",{Ba:3,Aa:"rk"},{Ba:3,Aa:"ke"})}
function oe(a){this.h=a;this.h.Xc("/client_streamz/bg/fsl",{Ba:3,Aa:"rk"},{Ba:3,Aa:"ke"})}
oe.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};var pe={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function qe(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=re(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=se(a,h),d+=se(a,h+4),e+=se(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return pe.toString(e)}
function re(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function se(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Sb();var te=Bc()||F("iPod"),ue=F("iPad");!F("Android")||Tb()||Sb()||Qb()||F("Silk");Tb();var ve=F("Safari")&&!(Tb()||(Pb()?0:F("Coast"))||Qb()||(Pb()?0:F("Edge"))||(Pb()?Ob("Microsoft Edge"):F("Edg/"))||(Pb()?Ob("Opera"):F("OPR"))||Sb()||F("Silk")||F("Android"))&&!(Bc()||F("iPad")||F("iPod"));var we={},xe=null;function ye(a,b){Na(a);void 0===b&&(b=0);ze();b=we[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ae(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Be(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Be(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=xe[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
ze();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function ze(){if(!xe){xe={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));we[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===xe[f]&&(xe[f]=e)}}}}
;var Ce="undefined"!==typeof Uint8Array,De=!Ec&&"function"===typeof btoa;function Ee(a){if(!De)return ye(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Fe=/[-_.]/g,Ge={"-":"+",_:"/",".":"="};function He(a){return Ge[a]||""}
function Ie(a){return Ce&&null!=a&&a instanceof Uint8Array}
var Je={};var Ke;function Le(a){if(a!==Je)throw Error("illegal external caller");}
function Me(a,b){Le(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Me.prototype.sizeBytes=function(){Le(Je);var a=this.h;if(null!=a&&!Ie(a))if("string"===typeof a)if(De){Fe.test(a)&&(a=a.replace(Fe,He));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ae(a);else Ma(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};function Ne(){return"function"===typeof BigInt}
var Oe=!Kb,Pe=!Kb;function Qe(a){return Array.prototype.slice.call(a)}
;var Re;Re="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ka(Object.values({Jf:1,Hf:2,Gf:4,Mf:8,Lf:16,Kf:32,xf:64,Of:128,Ff:256,Ef:512,If:1024,Cf:2048,Nf:4096,Df:8192})));var Se=Re?function(a,b){a[Re]|=b}:function(a,b){void 0!==a.Sa?a.Sa|=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Te(a){var b=Ue(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Qe(a)),Ve(a,b|1))}
function We(a,b,c){return c?a|b:a&~b}
var Ue=Re?function(a){return a[Re]|0}:function(a){return a.Sa|0},Xe=Re?function(a){return a[Re]}:function(a){return a.Sa},Ve=Re?function(a,b){a[Re]=b;
return a}:function(a,b){void 0!==a.Sa?a.Sa=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function Ye(){var a=[];Se(a,1);return a}
function Ze(a,b){Ve(b,(a|0)&-14591)}
function $e(a,b){Ve(b,(a|34)&-14557)}
function af(a){a=a>>14&1023;return 0===a?536870912:a}
;var bf={},cf={};function df(a){return!(!a||"object"!==typeof a||a.h!==cf)}
function ef(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var ff,gf=!Kb;function hf(a,b){if(null==a){if(!b)throw Error();}else if("string"===typeof a)a=a?new Me(a,Je):Ke||(Ke=new Me(null,Je));else if(a.constructor!==Me)if(Ie(a))a=a.length?new Me(new Uint8Array(a),Je):Ke||(Ke=new Me(null,Je));else throw Error();return a}
function jf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=Ue(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;Ve(a,d|1);return!0}
var kf,lf=[];Ve(lf,55);kf=Object.freeze(lf);function mf(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});var nf=0,of=0;function pf(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=v(qf(c,a)),b=c.next().value,a=c.next().value,c=b);nf=c>>>0;of=a>>>0}
function rf(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Ne()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+sf(c)+sf(a));return c}
function sf(a){a=String(a);return"0000000".slice(a.length)+a}
function tf(){var a=nf,b=of;b&2147483648?Ne()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=v(qf(a,b)),a=b.next().value,b=b.next().value,a="-"+rf(a,b)):a=rf(a,b);return a}
function qf(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function uf(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a}
;function vf(a){return a.displayName||a.name||"unknown type name"}
function wf(a){if(null!=a&&"boolean"!==typeof a)throw Error("Expected boolean but got "+Ma(a)+": "+a);return a}
var xf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function yf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:xf.test(a)}
function zf(a){if(null!=a){if("number"!==typeof a)throw uf("int32");if(!Number.isFinite(a))throw uf("int32");a|=0}return a}
function Af(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}
function Bf(a){if(null!=a){var b=!!b;if(!yf(a))throw uf("int64");a="string"===typeof a?Cf(a):b?Df(a):Ef(a)}return a}
function Ff(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Ef(a){yf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){pf(a);var b=nf,c=of;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Df(a){yf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Ff(b)?a=b:(pf(a),a=tf())}return a}
function Cf(a){yf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));a.indexOf(".");if(!Ff(a)){if(16>a.length)pf(Number(a));else if(Ne())a=BigInt(a),nf=Number(a&BigInt(4294967295))>>>0,of=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);of=nf=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),of*=1E6,nf=1E6*nf+d,4294967296<=nf&&(of+=Math.trunc(nf/4294967296),of>>>=0,nf>>>=0);b&&(b=v(qf(nf,of)),
a=b.next().value,b=b.next().value,nf=a,of=b)}a=tf()}return a}
function Gf(a){if("string"!==typeof a)throw Error();return a}
function Hf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function If(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+vf(b)+" but got "+(a&&vf(a.constructor)));}
function Jf(a,b,c){if(null!=a&&"object"===typeof a&&a.Ic===bf)return a;if(Array.isArray(a)){var d=Ue(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Ve(a,e);return new b(a)}}
;var Kf;function Lf(a,b){Ue(b);Kf=b;a=new a(b);Kf=void 0;return a}
function Mf(a,b,c){null==a&&(a=Kf);Kf=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=Ue(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1;if(ef(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}Ve(a,d);return a}
;function Nf(a,b){return Of(b)}
function Of(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return gf||!jf(a,void 0,9999)?a:void 0;if(Ie(a))return Ee(a);if(a instanceof Me){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=Ee(b)}}}return a}
;function Pf(a,b,c){a=Qe(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Qf(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Ue(a)&1?void 0:f&&Ue(a)&2?a:Rf(a,b,c,void 0!==d,e,f);else if(ef(a)){var g={},h;for(h in a)g[h]=Qf(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Rf(a,b,c,d,e,f){var g=d||c?Ue(a):0;d=d?!!(g&32):void 0;a=Qe(a);for(var h=0;h<a.length;h++)a[h]=Qf(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Sf(a){return a.Ic===bf?a.toJSON():Of(a)}
;function Tf(a,b,c){c=void 0===c?$e:c;if(null!=a){if(Ce&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Ue(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?Ve(a,(d|34)&-12293):Rf(a,Tf,d&4?$e:c,!0,!1,!0)}a.Ic===bf&&(c=a.F,d=Xe(c),a=d&2?a:Lf(a.constructor,Uf(c,d,!0)));return a}}
function Uf(a,b,c){var d=c||b&2?$e:Ze,e=!!(b&32);a=Pf(a,b,function(f){return Tf(f,e,d)});
Se(a,32|(c?2:0));return a}
function Vf(a){var b=a.F,c=Xe(b);return c&2?Lf(a.constructor,Uf(b,c,!1)):a}
;function Wf(a,b){a=a.F;return Xf(a,Xe(a),b)}
function Xf(a,b,c,d){if(-1===c)return null;if(c>=af(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function Yf(a,b,c){var d=a.F,e=Xe(d);mf(e);Zf(d,e,b,c);return a}
function Zf(a,b,c,d,e){ef(d);var f=af(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&Ve(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function $f(a){return void 0!==ag(a,bg,11,!1)}
function cg(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function dg(a,b,c,d){var e=a.F,f=Xe(e);mf(f);if(null==c)return Zf(e,f,b),a;if(!Array.isArray(c))throw uf();var g=Ue(c),h=g,k=!!(2&g)||Object.isFrozen(c),l=!k&&!1;if(!(4&g))for(g=21,k&&(c=Qe(c),h=0,g=eg(g,f,!0)),k=0;k<c.length;k++)c[k]=d(c[k]);l&&(c=Qe(c),h=0,g=eg(g,f,!0));g!==h&&Ve(c,g);Zf(e,f,b,c);return a}
function fg(a,b,c,d){a=a.F;var e=Xe(a);mf(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=Xf(a,f,k)&&(0!==g&&(f=Zf(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=Zf(a,e,c));Zf(a,e,b,d)}
function ag(a,b,c,d){a=a.F;var e=Xe(a),f=Xf(a,e,c,d);b=Jf(f,b,e);b!==f&&null!=b&&Zf(a,e,c,b,d);return b}
function gg(a,b,c,d){d=void 0===d?!1:d;b=ag(a,b,c,d);if(null==b)return b;a=a.F;var e=Xe(a);if(!(e&2)){var f=Vf(b);f!==b&&(b=f,Zf(a,e,c,b,d))}return b}
function hg(a,b,c,d){null!=d?If(d,b):d=void 0;return Yf(a,c,d)}
function ig(a,b,c,d){var e=a.F,f=Xe(e);mf(f);if(null==d)return Zf(e,f,c),a;if(!Array.isArray(d))throw uf();for(var g=Ue(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,t=!0,r=0;r<d.length;r++){var w=d[r];If(w,b);k||(w=!!(Ue(w.F)&2),p&&(p=!w),t&&(t=w))}k||(g=We(g,5,!0),g=We(g,8,p),g=We(g,16,t));if(n||l&&g!==h)d=Qe(d),h=0,g=eg(g,f,!0);g!==h&&Ve(d,g);Zf(e,f,c,d);return a}
function eg(a,b,c){a=We(a,2,!!(2&b));a=We(a,32,!!(32&b)&&c);return a=We(a,2048,!1)}
function jg(a,b){a=Wf(a,b);var c;null==a?c=a:yf(a)?"number"===typeof a?c=Ef(a):c=Cf(a):c=void 0;return c}
function kg(a){a=Wf(a,1);var b=void 0===b?!1:b;b=null==a?a:yf(a)?"string"===typeof a?Cf(a):b?Df(a):Ef(a):void 0;return b}
function lg(a){a=Wf(a,1);return null==a?a:Number.isFinite(a)?a|0:void 0}
function mg(a){return hf(a,!1)}
function ng(a,b,c){return Yf(a,b,Hf(c))}
function og(a,b,c){if(null!=c){if(!Number.isFinite(c))throw uf("enum");c|=0}return Yf(a,b,c)}
;function pg(a,b,c){this.F=Mf(a,b,c)}
m=pg.prototype;m.toJSON=function(){if(ff)var a=qg(this,this.F,!1);else a=Rf(this.F,Sf,void 0,void 0,!1,!1),a=qg(this,a,!0);return a};
m.serialize=function(){ff=!0;try{return JSON.stringify(this.toJSON(),Nf)}finally{ff=!1}};
function rg(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Se(b,32);return Lf(a,b)}
m.clone=function(){var a=this.F,b=Xe(a);return Lf(this.constructor,Uf(a,b,!1))};
m.Ic=bf;m.toString=function(){return qg(this,this.F,!1).toString()};
function qg(a,b,c){var d=a.constructor.Ua,e=Xe(c?a.F:b),f=af(e),g=!1;if(d&&gf){if(!c){b=Qe(b);var h;if(b.length&&ef(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=Xe(a.F);a=af(h);h=+!!(h&512)-1;for(var k,l,n=0;n<d.length;n++)if(l=d[n],l<a){l+=h;var p=f[l];null==p?f[l]=c?kf:Ye():c&&p!==kf&&Te(p)}else k||(p=void 0,f.length&&ef(p=f[f.length-1])?k=p:f.push(k={})),p=k[l],null==k[l]?k[l]=c?kf:Ye():c&&p!==kf&&Te(p)}k=b.length;if(!k)return b;var t;
if(ef(f=b[k-1])){a:{var r=f;c={};a=!1;for(var w in r){h=r[w];if(Array.isArray(h)){n=h;if(!Pe&&jf(h,d,+w)||!Oe&&df(h)&&0===h.size)h=null;h!=n&&(a=!0)}null!=h?c[w]=h:a=!0}if(a){for(var y in c){r=c;break a}r=null}}r!=f&&(t=!0);k--}for(e=+!!(e&512)-1;0<k;k--){w=k-1;f=b[w];if(!(null==f||!Pe&&jf(f,d,w-e)||!Oe&&df(f)&&0===f.size))break;var B=!0}if(!t&&!B)return b;var G;g?G=b:G=Array.prototype.slice.call(b,0,k);b=G;g&&(b.length=k);r&&b.push(r);return b}
;function sg(a){this.F=Mf(a)}
x(sg,pg);var tg=[1,2,3];function ug(a){this.F=Mf(a)}
x(ug,pg);var vg=[1,2,3];function wg(a){this.F=Mf(a)}
x(wg,pg);wg.Ua=[1];function xg(a){this.F=Mf(a)}
x(xg,pg);xg.Ua=[3,6,4];function yg(a){this.F=Mf(a)}
x(yg,pg);yg.Ua=[1];function zg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Ag(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var w=e[1],y=e[2],B=e[3],G=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var J=B^w&(y^B);var H=1518500249}else J=w^y^B,H=1859775393;else 60>r?(J=w&y|B&(w|y),H=2400959708):(J=w^y^B,H=3395469782);J=((p<<5|p>>>27)&4294967295)+J+G+H+t[r]&4294967295;G=B;B=y;y=(w<<30|w>>>2)&4294967295;w=p;p=J}e[0]=e[0]+p&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+B&4294967295;e[4]=e[4]+G&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],w=0,y=p.length;w<y;++w)r.push(p.charCodeAt(w));p=r}t||(t=p.length);r=0;if(0==l)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var w=24;0<=w;w-=8)p[t++]=e[r]>>w&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Xd:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function Bg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Cg(zg(d),a,c||null)].join(" "):null}
function Cg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),Dg(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=Dg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Dg(a){var b=Ag();b.update(a);return b.Xd().toLowerCase()}
;var Eg={};function Fg(a){this.h=a||{cookie:""}}
m=Fg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{dc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.jg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.dc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ib(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{dc:0,path:b,domain:c});return d};
m.zc=function(){return Gg(this).keys};
m.clear=function(){for(var a=Gg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Gg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Ib(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Hg=new Fg("undefined"==typeof document?null:document);function Ig(a){return!!Eg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Jg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Ig(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Fg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Ig(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Kg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Fg(document)).get(b));return a?Bg(a,c,d):null}
function Lg(a,b){b=void 0===b?!1:b;var c=zg(String(C.location.href)),d=[];if(Jg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new Fg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Bg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Ig(b)&&((b=Kg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Kg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function Mg(a){this.F=Mf(a)}
x(Mg,pg);Mg.Ua=[2];function Ng(a){qd.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Wa()};
this.j=this.i()}
x(Ng,qd);Ng.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Ng.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
Ng.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Ng.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),rd(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Og(a){this.F=Mf(a)}
x(Og,pg);function Pg(a){this.F=Mf(a)}
x(Pg,pg);function Qg(a){this.h=this.i=this.j=a}
Qg.prototype.reset=function(){this.h=this.i=this.j};
Qg.prototype.getValue=function(){return this.i};function Rg(a){this.F=Mf(a)}
x(Rg,pg);Rg.prototype.Ac=function(){return lg(this)};function Sg(a){this.F=Mf(a)}
x(Sg,pg);function Tg(a){this.F=Mf(a)}
x(Tg,pg);function Ug(a,b){ig(a,Sg,1,b)}
Tg.Ua=[1];function bg(a){this.F=Mf(a)}
x(bg,pg);var Vg=["platform","platformVersion","architecture","model","uaFullVersion"],Wg=new Tg,Xg=null;function Yg(a,b){b=void 0===b?Vg:b;if(!Xg){var c;a=null==(c=a.navigator)?void 0:c.userAgentData;if(!a||"function"!==typeof a.getHighEntropyValues)return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(d){var e=new Sg;e=ng(e,1,d.brand);return ng(e,2,d.version)});
Ug(Yf(Wg,2,wf(a.mobile)),c);Xg=a.getHighEntropyValues(b)}return Xg.then(function(d){var e=Wg.clone();b.includes("platform")&&ng(e,3,d.platform);b.includes("platformVersion")&&ng(e,4,d.platformVersion);b.includes("architecture")&&ng(e,5,d.architecture);b.includes("model")&&ng(e,6,d.model);b.includes("uaFullVersion")&&ng(e,7,d.uaFullVersion);return e}).catch(function(){return Wg.clone()})}
;function Zg(a){this.F=Mf(a)}
x(Zg,pg);function $g(a){this.F=Mf(a,4)}
x($g,pg);function ah(a){this.F=Mf(a,35)}
x(ah,pg);ah.Ua=[3,20,27];function bh(a){this.F=Mf(a,19)}
x(bh,pg);bh.prototype.Mb=function(a){return og(this,2,a)};
bh.Ua=[3,5];function ch(a){this.F=Mf(a,7)}
x(ch,pg);var dh=function(a){return function(b){return rg(a,b)}}(ch);
ch.Ua=[5,6];function eh(a){this.F=Mf(a)}
x(eh,pg);var fh=new function(a,b){this.h=a;this.ctor=b;this.isRepeated=0;this.i=gg;this.defaultValue=void 0}(175237375,eh);function gh(a){K.call(this);var b=this;this.componentId="";this.j=[];this.fa="";this.ha=this.X=-1;this.ba=!1;this.A=this.experimentIds=null;this.T=this.m=0;this.sa=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Fb=a.Fb||function(){};
this.i=new hh(a.logSource,a.eb);this.network=a.network;this.Kb=a.Kb||null;this.bufferSize=1E3;this.Fa=Va(vd,0,1);this.P=a.hf||null;this.sessionIndex=a.sessionIndex||null;this.Db=a.Db||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.gd;this.eb=a.eb||!1;this.ea="undefined"!==typeof URLSearchParams;var c=og(new Zg,1,1);ih(this.i,c);this.l=new Qg(1E4);this.h=new Ng(this.l.getValue());a=jh(this,a.Yc);fd(this.h,"tick",a,!1,this);this.D=new Ng(6E5);fd(this.D,"tick",a,!1,this);this.Db||
this.D.start();this.eb||(fd(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.uc()}),fd(document,"pagehide",this.uc,!1,this))}
x(gh,K);function jh(a,b){return a.ea?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
m=gh.prototype;m.S=function(){this.uc();this.h.stop();this.D.stop();K.prototype.S.call(this)};
function kh(a,b){a.l=new Qg(1>b?1:b);a.h.setInterval(a.l.getValue())}
m.log=function(a){a=a.clone();var b=this.sa++;a=Yf(a,21,Bf(b));this.componentId&&ng(a,26,this.componentId);if(!kg(a)){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";Yf(b,1,Bf(c))}null==jg(a,15)&&Yf(a,15,Bf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=a,c=this.experimentIds.clone(),hg(b,Mg,16,c));b=this.j.length-this.bufferSize+1;0<b&&(this.j.splice(0,b),this.m+=b);this.j.push(a);this.Db||this.h.enabled||this.h.start()};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else{var d=Date.now();if(this.ha>d&&this.X<d)b&&b("throttled");else{this.network&&("function"===typeof this.network.Ac?lh(this.i,this.network.Ac()):lh(this.i,0));var e=mh(this.i,this.j,this.m,this.T,this.Kb);d={};var f=this.Fb();f&&(d.Authorization=f);this.P||(this.P=.01>this.Fa()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");var g=this.P;this.sessionIndex&&(d["X-Goog-AuthUser"]=
this.sessionIndex,g=ic(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=ic(g,"pageId",this.pageId));if(f&&this.fa===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.m=0;var h=e.serialize(),k;this.A&&this.A.isSupported(h.length)&&(k=this.A.compress(h));var l={url:g,body:h,Td:1,Oc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(r){c.l.reset();c.h.setInterval(c.l.getValue());if(r){var w=
null;try{var y=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));w=dh(y)}catch(G){}if(w){r=Number;y="-1";y=void 0===y?"0":y;var B=kg(w);r=r(null!=B?B:y);0<r&&(c.X=Date.now(),c.ha=c.X+r);w=fh.ctor?fh.i(w,fh.ctor,fh.h,!0):fh.i(w,fh.h,null,!0);if(r=null===w?void 0:w)w=-1,w=void 0===w?0:w,r=Af(Wf(r,1)),w=null!=r?r:w,-1!==w&&(c.ba||kh(c,w))}}a&&a();c.T=0},p=function(r,w){var y=e.F;
var B=Xe(y),G=B,J=!(2&B),H=!!(2&G),T=H?1:2;B=1===T;T=2===T;J&&(J=!H);H=Xf(y,G,3);H=Array.isArray(H)?H:kf;var I=Ue(H),ha=!!(4&I);if(!ha){var O=I;0===O&&(O=eg(O,G,!1));O=We(O,1,!0);I=H;var S=G,V=!!(2&O);V&&(S=We(S,2,!0));for(var ma=!V,na=!0,sb=0,Mc=0;sb<I.length;sb++){var Nc=Jf(I[sb],ah,S);if(Nc instanceof ah){if(!V){var be=!!(Ue(Nc.F)&2);ma&&(ma=!be);na&&(na=be)}I[Mc++]=Nc}}Mc<sb&&(I.length=Mc);O=We(O,4,!0);O=We(O,16,na);O=We(O,8,ma);Ve(I,O);V&&Object.freeze(I);I=O}O=!!(8&I)||B&&!H.length;if(J&&!O){cg(I)&&
(H=Qe(H),I=eg(I,G,!1),G=Zf(y,G,3,H));J=H;for(O=0;O<J.length;O++)S=J[O],V=Vf(S),S!==V&&(J[O]=V);I=We(I,8,!0);I=We(I,16,!J.length);Ve(J,I)}cg(I)||(J=I,B?I=We(I,!H.length||16&I&&(!ha||32&I)?2:2048,!0):I=We(I,32,!1),I!==J&&Ve(H,I),B&&Object.freeze(H));T&&cg(I)&&(H=Qe(H),I=eg(I,G,!1),Ve(H,I),Zf(y,G,3,H));y=H;G=jg(e,14);B=c.l;B.h=Math.min(3E5,2*B.h);B.i=Math.min(3E5,B.h+Math.round(.2*(Math.random()-.5)*B.h));c.h.setInterval(c.l.getValue());401===r&&f&&(c.fa=f);G&&(c.m+=G);void 0===w&&(w=c.isRetryable(r));
w&&(c.j=y.concat(c.j),c.Db||c.h.enabled||c.h.start());b&&b("net-send-failed",r);++c.T},t=function(){c.network&&c.network.send(l,n,p)};
k?k.then(function(r){l.Oc["Content-Encoding"]="gzip";l.Oc["Content-Type"]="application/binary";l.body=r;l.Td=2;t()},function(){t()}):t()}}}};
m.uc=function(){nh(this.i,!0);this.flush();nh(this.i,!1)};
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function hh(a,b){this.eb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new bh;Number.isInteger(a)&&this.h.Mb(a);b||(this.locale=document.documentElement.getAttribute("lang"));ih(this,new Zg)}
hh.prototype.Mb=function(a){this.h.Mb(a);return this};
function ih(a,b){hg(a.h,Zg,1,b);lg(b)||og(b,1,1);if(!a.eb){b=oh(a);var c=Wf(b,5);(null==c||"string"===typeof c)&&c||ng(b,5,a.locale)}a.uach&&(b=oh(a),gg(b,Tg,9)||hg(b,Tg,9,a.uach))}
function lh(a,b){$f(ph(a))&&(a=qh(a),og(a,1,b))}
function nh(a,b){$f(ph(a))&&(a=qh(a),Yf(a,2,wf(b)))}
function ph(a){return gg(a.h,Zg,1)}
function rh(a,b){var c=void 0===c?Vg:c;var d=a.eb?void 0:window;d?b(d,c).then(function(e){a.uach=e;e=oh(a);hg(e,Tg,9,a.uach);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function oh(a){a=ph(a);var b=gg(a,bg,11);b||(b=new bg,hg(a,bg,11,b));return b}
function qh(a){a=oh(a);var b=gg(a,Rg,10);b||(b=new Rg,Yf(b,2,wf(!1)),hg(a,Rg,10,b));return b}
function mh(a,b,c,d,e){var f=0,g=0;c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if($f(ph(a))){var h=qh(a);Yf(h,3,zf(d))}$f(ph(a))&&(d=qh(a),Yf(d,4,zf(f)));$f(ph(a))&&(f=qh(a),Yf(f,5,zf(g)));a=a.h.clone();g=Date.now().toString();a=Yf(a,4,Bf(g));b=ig(a,ah,3,b);e&&(a=new Og,e=Yf(a,13,zf(e)),a=new Pg,e=hg(a,Og,2,e),a=new $g,e=hg(a,Pg,1,e),e=og(e,2,9),hg(b,$g,18,e));c&&Yf(b,14,Bf(c));return b}
;function sh(){}
sh.prototype.serialize=function(a){var b=[];th(this,a,b);return b.join("")};
function th(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),th(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),uh(d,c),c.push(":"),th(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":uh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var vh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},wh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function uh(a,b){b.push('"',a.replace(wh,function(c){var d=vh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),vh[c]=d);return d}),'"')}
;function xh(){}
xh.prototype.h=null;xh.prototype.getOptions=function(){var a;(a=this.h)||(a={},yh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var zh;function Ah(){}
Xa(Ah,xh);function Bh(a){return(a=yh(a))?new ActiveXObject(a):new XMLHttpRequest}
function yh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
zh=new Ah;function Ch(a){qd.call(this);this.headers=new Map;this.T=a||null;this.i=!1;this.P=this.J=null;this.l=this.ea="";this.j=this.ba=this.A=this.X=!1;this.m=0;this.D=null;this.Fa="";this.ha=this.sa=!1}
Xa(Ch,qd);var Dh=/^https?$/i,Eh=["POST","PUT"],Fh=[];function Gh(a,b,c,d,e,f,g){var h=new Ch;Fh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Vd,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.sa=g);h.send(a,c,d,e)}
m=Ch.prototype;m.Vd=function(){this.dispose();ib(Fh,this)};
m.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ea+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ea=a;this.l="";this.X=!1;this.i=!0;this.J=this.T?Bh(this.T):Bh(zh);this.P=this.T?this.T.getOptions():zh.getOptions();this.J.onreadystatechange=Ua(this.sd,this);try{this.getStatus(),this.ba=!0,this.J.open(b,String(a),!0),this.ba=!1}catch(g){this.getStatus();Hh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=cb(Eh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.Fa&&(this.J.responseType=this.Fa);"withCredentials"in this.J&&this.J.withCredentials!==this.sa&&(this.J.withCredentials=this.sa);try{Ih(this),0<this.m&&(this.ha=Jh(this.J),this.getStatus(),this.ha?(this.J.timeout=this.m,this.J.ontimeout=Ua(this.Hd,
this)):this.D=fe(this.Hd,this.m,this)),this.getStatus(),this.A=!0,this.J.send(a),this.A=!1}catch(g){this.getStatus(),Hh(this,g)}};
function Jh(a){return Ec&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Hd=function(){"undefined"!=typeof Ka&&this.J&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),rd(this,"timeout"),this.abort(8))};
function Hh(a,b){a.i=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.l=b;Kh(a);Lh(a)}
function Kh(a){a.X||(a.X=!0,rd(a,"complete"),rd(a,"error"))}
m.abort=function(){this.J&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.J.abort(),this.j=!1,rd(this,"complete"),rd(this,"abort"),Lh(this))};
m.S=function(){this.J&&(this.i&&(this.i=!1,this.j=!0,this.J.abort(),this.j=!1),Lh(this,!0));Ch.za.S.call(this)};
m.sd=function(){this.Z()||(this.ba||this.A||this.j?Mh(this):this.Ce())};
m.Ce=function(){Mh(this)};
function Mh(a){if(a.i&&"undefined"!=typeof Ka)if(a.P[1]&&4==Nh(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==Nh(a))fe(a.sd,0,a);else if(rd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Oh(a))rd(a,"complete"),rd(a,"success");else{try{var b=2<Nh(a)?a.J.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";Kh(a)}}finally{Lh(a)}}}
function Lh(a,b){if(a.J){Ih(a);var c=a.J,d=a.P[0]?function(){}:null;
a.J=null;a.P=null;b||rd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Ih(a){a.J&&a.ha&&(a.J.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.J};
m.isComplete=function(){return 4==Nh(this)};
function Oh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=$b(1,String(a.ea)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Dh.test(a?a.toLowerCase():"");c=b}return c}
function Nh(a){return a.J?a.J.readyState:0}
m.getStatus=function(){try{return 2<Nh(this)?this.J.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function Ph(){}
Ph.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
Gh(a.url,function(d){d=d.target;if(Oh(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Oc,a.timeoutMillis,a.withCredentials)};
Ph.prototype.Ac=function(){return 1};function Qh(a,b){K.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.j=!1;this.componentId="";this.network=new Ph}
x(Qh,K);Qh.prototype.gd=function(){this.X=!0;return this};function Rh(a,b,c,d,e,f,g){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;K.call(this);this.logSource=a;this.componentId=b;f?a=f:(a=new Qh(a,"0"),a.componentId=b,tc(this,a),""!==c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),g&&(a.network=g),b=new gh({logSource:a.logSource,Fb:a.Fb?a.Fb:Lg,sessionIndex:a.sessionIndex,hf:a.i,eb:a.j,Db:!1,gd:a.X,pageId:a.pageId,Yc:a.Yc,network:a.network?a.network:void 0}),tc(a,b),a.A&&ih(b.i,a.A),a.h&&(c=a.h,d=oh(b.i),ng(d,7,c)),a.m&&(b.A=
a.m),a.componentId&&(b.componentId=a.componentId),a.Kb&&(b.Kb=a.Kb),a.l&&((d=a.l)?(b.experimentIds||(b.experimentIds=new Mg),c=b.experimentIds,d=d.serialize(),ng(c,4,d)):b.experimentIds&&Yf(b.experimentIds,4)),a.P&&(c=a.P,b.experimentIds||(b.experimentIds=new Mg),dg(b.experimentIds,2,c,mg)),a.D&&(c=a.D,b.ba=!0,kh(b,c)),rh(b.i,Yg),a.T&&rh(b.i,a.T),a.network.Mb&&a.network.Mb(a.logSource),a.network.We&&a.network.We(b),a=b);this.h=a}
x(Rh,K);
Rh.prototype.flush=function(a){var b=a||[];if(b.length){a=new yg;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new xg;f=ng(f,1,e.j);for(var g=[],h=0;h<e.i.length;h++)g.push(e.i[h].Aa);f=dg(f,3,g,Gf);g=[];h=[];for(var k=v(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var n=e.v;for(var p=e.wc(l)||[],t=[],r=0;r<p.length;r++){var w=p[r],y=w&&w.h;w=new ug;switch(n){case 3:y=Number(y);Number.isFinite(y)&&fg(w,1,vg,Bf(y));break;case 2:y=Number(y);if(null!=
y&&"number"!==typeof y)throw Error("Value of float/double field must be a number, found "+typeof y+": "+y);fg(w,2,vg,y)}t.push(w)}n=t;for(p=0;p<n.length;p++){t=n[p];r=new wg;t=hg(r,ug,2,t);r=l;w=[];y=[];for(var B=0;B<e.i.length;B++)y.push(e.i[B].Ba);for(B=0;B<y.length;B++){var G=y[B],J=r[B],H=new sg;switch(G){case 3:fg(H,1,tg,Hf(String(J)));break;case 2:G=Number(J);Number.isFinite(G)&&fg(H,2,tg,zf(G));break;case 1:fg(H,3,tg,wf("true"===J))}w.push(H)}ig(t,sg,1,w);g.push(t)}}ig(f,wg,4,g);c.push(f);
e.clear()}ig(a,xg,1,c);b=this.h;b.ea&&(a instanceof ah?b.log(a):(c=new ah,a=a.serialize(),a=ng(c,8,a),b.log(a)));this.h.flush()}};function Sh(a,b,c){this.logger=a;this.event=b;if(void 0===c||c)this.h=Th()}
Sh.prototype.start=function(){this.h=Th()};
Sh.prototype.done=function(){null!=this.h&&this.logger.pd(this.event,Th()-this.h)};
function Uh(){}
Uh.prototype.Fc=function(){};
Uh.prototype.pd=function(){};
Uh.prototype.cc=function(){};
Uh.prototype.Pa=function(){};
function Vh(a,b){this.i=b;this.l=new Rh(1828,"","",!1,"",void 0,new Ph);this.h=new ge(this.l);this.m=new me(this.h);this.A=new ne(this.h);this.D=new oe(this.h);this.v=new le(this.h);this.j=qe(a);(new ke(this.h)).h.nc("/client_streamz/bg/fic",this.i)}
Vh.prototype.Fc=function(){this.A.h.nc("/client_streamz/bg/fsc",this.j,this.i)};
Vh.prototype.pd=function(a,b){0===a?this.m.record(b,this.j,this.i):1===a&&this.D.record(b,this.j,this.i)};
Vh.prototype.cc=function(a,b){this.v.h.nc("/client_streamz/bg/fiec",this.j,this.i,a,b)};
Vh.prototype.Pa=function(){this.h.Pa()};
function Th(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Wh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Xh(a){function b(l,n,p){Promise.resolve().then(function(){h.done();g.resolve({Rd:l,Ze:n,eg:p})})}
this.h=!1;var c=a.program;var d=a.ke;if(!1!==a.Ie){var e,f;this.pa=null!=(f=a.pa)?f:new Vh(d,null!=(e=a.dg)?e:"_")}else this.pa=new Uh;var g=new Wh;this.i=g.promise;var h=new Sh(this.pa,0,!1);C[d]?C[d].a||(this.pa.cc(2,""),this.pa.Pa()):(this.pa.cc(1,""),this.pa.Pa());try{var k=C[d].a;h.start();this.j=v(k(c,b,!0,a.og)).next().value;this.Ye=g.promise.then(function(){})}catch(l){throw this.pa.cc(4,l.message),this.pa.Pa(),l;
}}
Xh.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");this.pa.Fc();return this.i.then(function(c){var d=c.Rd;return new Promise(function(e){var f=new Sh(b.pa,1);d(function(g){f.done();e(g)},[a.ed,
a.af,a.kf])})})};
Xh.prototype.Ed=function(a){if(this.h)throw Error("Already disposed");this.pa.Fc();var b=new Sh(this.pa,1);a=this.j([a.ed,a.af,a.kf]);b.done();return a};
Xh.prototype.dispose=function(){this.pa.Pa();this.h=!0;this.i.then(function(a){(a=a.Ze)&&a()})};
Xh.prototype.Z=function(){return this.h};var Yh=window;Ab("csi.gstatic.com");Ab("googleads.g.doubleclick.net");Ab("partner.googleadservices.com");Ab("pubads.g.doubleclick.net");Ab("securepubads.g.doubleclick.net");Ab("tpc.googlesyndication.com");var Zh=fa([""]),$h=ia(["\x00"],["\\0"]),ai=ia(["\n"],["\\n"]),bi=ia(["\x00"],["\\u0000"]);function ci(a){return-1===a.toString().indexOf("`")}
ci(function(a){return a(Zh)})||ci(function(a){return a($h)})||ci(function(a){return a(ai)})||ci(function(a){return a(bi)});function di(a){this.te=a}
function ei(a){return new di(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var fi=[ei("data"),ei("http"),ei("https"),ei("mailto"),ei("ftp"),new di(function(a){return/^[^:]*([/?#]|$)/.test(a)})],gi="function"===typeof URL;
function hi(a){if(a instanceof Fb)a instanceof Fb&&a.constructor===Fb?a=a.h:(Ma(a),a="type_error:SafeUrl");else{b:if(gi){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;function ii(a,b){b=hi(b);void 0!==b&&(a.href=b)}
;function ji(){}
function ki(a){this.h=a}
x(ki,ji);ki.prototype.toString=function(){return this.h};function li(a){var b="true".toString(),c=[new ki(mi[0].toLowerCase(),Vb)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof ki)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function ni(){throw Error("unknown trace type");}
;var oi="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function pi(a,b){if(b instanceof Bb)a.href=Cb(b).toString();else{if(-1===oi.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=hi(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function qi(a){var b,c;return(a=null==(c=(b=a.document).querySelector)?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function ri(a){var b=qi(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function si(a,b){if(b instanceof Wb)b=b.vd;else throw Error("");a.textContent=b;ri(a)}
function ti(a,b){a.src=Cb(b);ri(a)}
;function ui(a){var b=vi;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function wi(){var a=[];ui(function(b){a.push(b)});
return a}
var vi={lf:"allow-forms",mf:"allow-modals",nf:"allow-orientation-lock",pf:"allow-pointer-lock",qf:"allow-popups",rf:"allow-popups-to-escape-sandbox",sf:"allow-presentation",tf:"allow-same-origin",uf:"allow-scripts",vf:"allow-top-navigation",wf:"allow-top-navigation-by-user-activation"},xi=bb(function(){return wi()});
function yi(){var a=zi(),b={};db(xi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function zi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Ai(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Bi=(new Date).getTime();function Ci(a){qd.call(this);var b=this;this.A=this.j=0;this.Da=null!=a?a:{na:function(e,f){return setTimeout(e,f)},
oa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return z(function(e){return e.yield(Di(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.A||Ei(this)}
x(Ci,qd);function Fi(){var a=Gi;Ci.h||(Ci.h=new Ci(a));return Ci.h}
Ci.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Da.oa(this.A);delete Ci.h};
Ci.prototype.va=function(){return this.i};
function Ei(a){a.A=a.Da.na(function(){var b;return z(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.B(3):c.yield(Di(a),3):c.yield(Di(a),3);Ei(a);c.h=0})},3E4)}
function Di(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return z(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Da.na(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.l=0;h.m=0;a.m=void 0;a.j&&(a.Da.oa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?rd(a,"networkstatus-online"):rd(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.B(3)}})})}
;function Hi(){this.data=[];this.h=-1}
Hi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Hi.prototype.get=function(a){return!!this.data[a]};
function Ii(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Ji(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
Ji.prototype[Symbol.iterator]=function(){return this};
Ji.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Ki(a,b){return new Ji(a,b)}
;function Li(){this.blockSize=-1}
;function Mi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.v=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Xa(Mi,Li);Mi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Ni(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Mi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)Ni(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Ni(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Ni(this,e);f=0;break}}this.i=f;this.l+=b}};
Mi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.v[c]=b&255,b/=256;Ni(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Oi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Pi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Qi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Oi(a).match(/\S+/g)||[],b=0<=cb(a,b));return b}
function Ri(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Qi(a,"inverted-hdpi")&&Pi(a,Array.prototype.filter.call(a.classList?a.classList:Oi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Si(){}
Si.prototype.next=function(){return Ti};
var Ti={done:!0,value:void 0};function Ui(a){return{value:a,done:!1}}
Si.prototype.Ga=function(){return this};function Vi(a){if(a instanceof Wi||a instanceof Xi||a instanceof Yi)return a;if("function"==typeof a.next)return new Wi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Wi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ga)return new Wi(function(){return a.Ga()});
throw Error("Not an iterator or iterable.");}
function Wi(a){this.i=a}
Wi.prototype.Ga=function(){return new Xi(this.i())};
Wi.prototype[Symbol.iterator]=function(){return new Yi(this.i())};
Wi.prototype.h=function(){return new Yi(this.i())};
function Xi(a){this.i=a}
x(Xi,Si);Xi.prototype.next=function(){return this.i.next()};
Xi.prototype[Symbol.iterator]=function(){return new Yi(this.i)};
Xi.prototype.h=function(){return new Yi(this.i)};
function Yi(a){Wi.call(this,function(){return a});
this.j=a}
x(Yi,Wi);Yi.prototype.next=function(){return this.j.next()};function Zi(a,b){this.i={};this.h=[];this.Wa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Zi)for(c=a.zc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=Zi.prototype;m.zc=function(){$i(this);return this.h.concat()};
m.has=function(a){return aj(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||bj;$i(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function bj(a,b){return a===b}
m.clear=function(){this.i={};this.Wa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return aj(this.i,a)?(delete this.i[a],--this.size,this.Wa++,this.h.length>2*this.size&&$i(this),!0):!1};
function $i(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];aj(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],aj(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return aj(this.i,a)?this.i[a]:b};
m.set=function(a,b){aj(this.i,a)||(this.size+=1,this.h.push(a),this.Wa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.zc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Zi(this)};
m.keys=function(){return Vi(this.Ga(!0)).h()};
m.values=function(){return Vi(this.Ga(!1)).h()};
m.entries=function(){var a=this;return Ki(this.keys(),function(b){return[b,a.get(b)]})};
m.Ga=function(a){$i(this);var b=0,c=this.Wa,d=this,e=new Si;e.next=function(){if(c!=d.Wa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Ti;var f=d.h[b++];return Ui(a?f:d.i[f])};
return e};
function aj(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function L(a){K.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.A=!!a}
Xa(L,K);m=L.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.zb(a)}return!1};
m.zb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&ib(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Ya=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];cj(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.zb(c)}}return 0!=e}return!1};
function cj(a,b,c){Kd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.zb,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.S=function(){L.za.S.call(this);this.clear();this.j.length=0};function dj(a){this.h=a}
dj.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new sh).serialize(b))};
dj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
dj.prototype.remove=function(a){this.h.remove(a)};function ej(a){this.h=a}
Xa(ej,dj);function fj(a){this.data=a}
function gj(a){return void 0===a||a instanceof fj?a:new fj(a)}
ej.prototype.set=function(a,b){ej.za.set.call(this,a,gj(b))};
ej.prototype.i=function(a){a=ej.za.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ej.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function hj(a){this.h=a}
Xa(hj,ej);hj.prototype.set=function(a,b,c){if(b=gj(b)){if(c){if(c<Wa()){hj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Wa()}hj.za.set.call(this,a,b)};
hj.prototype.i=function(a){var b=hj.za.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Wa()||c&&c>Wa())hj.prototype.remove.call(this,a);else return b}};function ij(){}
;function jj(){}
Xa(jj,ij);jj.prototype[Symbol.iterator]=function(){return Vi(this.Ga(!0)).h()};
jj.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function kj(a){this.h=a;this.i=null}
Xa(kj,jj);m=kj.prototype;m.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&("QuotaExceededError"===c.name||22===c.code||1014===c.code||"NS_ERROR_DOM_QUOTA_REACHED"===c.name)&&a&&0!==a.length}else b=!1;return this.i=b};
m.set=function(a,b){lj(this);try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){lj(this);a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){lj(this);this.h.removeItem(a)};
m.Ga=function(a){lj(this);var b=0,c=this.h,d=new Si;d.next=function(){if(b>=c.length)return Ti;var e=c.key(b++);if(a)return Ui(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ui(e)};
return d};
m.clear=function(){lj(this);this.h.clear()};
m.key=function(a){lj(this);return this.h.key(a)};
function lj(a){if(null==a.h)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.i)?b:a.isAvailable())||Dd(Error("Storage mechanism: Storage unavailable"))}
;function mj(){var a=null;try{a=C.localStorage||null}catch(b){}kj.call(this,a)}
Xa(mj,kj);function nj(a,b){this.i=a;this.h=null;var c;if(c=Ec)c=!(9<=Number(Tc));if(c){oj||(oj=new Zi);this.h=oj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),oj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Xa(nj,jj);var pj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},oj=null;function qj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return pj[b]})}
m=nj.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(qj(a),b);rj(this)};
m.get=function(a){a=this.h.getAttribute(qj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(qj(a));rj(this)};
m.Ga=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Si;d.next=function(){if(b>=c.length)return Ti;var e=c[b++];if(a)return Ui(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ui(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);rj(this)};
function rj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function sj(a,b){this.i=a;this.h=b+"::"}
Xa(sj,jj);sj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
sj.prototype.get=function(a){return this.i.get(this.h+a)};
sj.prototype.remove=function(a){this.i.remove(this.h+a)};
sj.prototype.Ga=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Si;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Ui(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var M={},tj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var uj={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
jd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},vj={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
jd:function(a){return[].concat.apply([],a)}};
M.Xe=function(){tj?(M.lb=Uint8Array,M.Ia=Uint16Array,M.Nd=Int32Array,M.assign(M,uj)):(M.lb=Array,M.Ia=Array,M.Nd=Array,M.assign(M,vj))};
M.Xe();var wj=!0;try{new Uint8Array(1)}catch(a){wj=!1}
function xj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new M.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var yj={};yj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var zj={},Aj,Bj=[],Cj=0;256>Cj;Cj++){Aj=Cj;for(var Dj=0;8>Dj;Dj++)Aj=Aj&1?3988292384^Aj>>>1:Aj>>>1;Bj[Cj]=Aj}zj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Bj[(a^b[d])&255];return a^-1};var Ej={};Ej={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Fj(a){for(var b=a.length;0<=--b;)a[b]=0}
var Gj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Hj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ij=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Jj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Kj=Array(576);Fj(Kj);var Lj=Array(60);Fj(Lj);var Mj=Array(512);Fj(Mj);var Nj=Array(256);Fj(Nj);var Oj=Array(29);Fj(Oj);var Pj=Array(30);Fj(Pj);function Qj(a,b,c,d,e){this.Fd=a;this.de=b;this.ce=c;this.Yd=d;this.ze=e;this.md=a&&a.length}
var Rj,Sj,Tj;function Uj(a,b){this.hd=a;this.vb=0;this.Va=b}
function Vj(a,b){a.W[a.pending++]=b&255;a.W[a.pending++]=b>>>8&255}
function Wj(a,b,c){a.ga>16-c?(a.ma|=b<<a.ga&65535,Vj(a,a.ma),a.ma=b>>16-a.ga,a.ga+=c-16):(a.ma|=b<<a.ga&65535,a.ga+=c)}
function Xj(a,b,c){Wj(a,c[2*b],c[2*b+1])}
function Yj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Zj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Yj(d[e]++,e))}
function ak(a){var b;for(b=0;286>b;b++)a.qa[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ia[2*b]=0;a.qa[512]=1;a.Oa=a.yb=0;a.xa=a.matches=0}
function bk(a){8<a.ga?Vj(a,a.ma):0<a.ga&&(a.W[a.pending++]=a.ma);a.ma=0;a.ga=0}
function ck(a,b,c){bk(a);Vj(a,c);Vj(a,~c);M.mb(a.W,a.window,b,c,a.pending);a.pending+=c}
function dk(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function ek(a,b,c){for(var d=a.Y[c],e=c<<1;e<=a.Ma;){e<a.Ma&&dk(b,a.Y[e+1],a.Y[e],a.depth)&&e++;if(dk(b,d,a.Y[e],a.depth))break;a.Y[c]=a.Y[e];c=e;e<<=1}a.Y[c]=d}
function fk(a,b,c){var d=0;if(0!==a.xa){do{var e=a.W[a.Cb+2*d]<<8|a.W[a.Cb+2*d+1];var f=a.W[a.Ec+d];d++;if(0===e)Xj(a,f,b);else{var g=Nj[f];Xj(a,g+256+1,b);var h=Gj[g];0!==h&&(f-=Oj[g],Wj(a,f,h));e--;g=256>e?Mj[e]:Mj[256+(e>>>7)];Xj(a,g,c);h=Hj[g];0!==h&&(e-=Pj[g],Wj(a,e,h))}}while(d<a.xa)}Xj(a,256,b)}
function gk(a,b){var c=b.hd,d=b.Va.Fd,e=b.Va.md,f=b.Va.Yd,g,h=-1;a.Ma=0;a.qb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.Y[++a.Ma]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ma;){var k=a.Y[++a.Ma]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Oa--;e&&(a.yb-=d[2*k+1])}b.vb=h;for(g=a.Ma>>1;1<=g;g--)ek(a,c,g);k=f;do g=a.Y[1],a.Y[1]=a.Y[a.Ma--],ek(a,c,1),d=a.Y[1],a.Y[--a.qb]=g,a.Y[--a.qb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.Y[1]=k++,ek(a,c,1);while(2<=a.Ma);a.Y[--a.qb]=
a.Y[1];g=b.hd;k=b.vb;d=b.Va.Fd;e=b.Va.md;f=b.Va.de;var l=b.Va.ce,n=b.Va.ze,p,t=0;for(p=0;15>=p;p++)a.Ja[p]=0;g[2*a.Y[a.qb]+1]=0;for(b=a.qb+1;573>b;b++){var r=a.Y[b];p=g[2*g[2*r+1]+1]+1;p>n&&(p=n,t++);g[2*r+1]=p;if(!(r>k)){a.Ja[p]++;var w=0;r>=l&&(w=f[r-l]);var y=g[2*r];a.Oa+=y*(p+w);e&&(a.yb+=y*(d[2*r+1]+w))}}if(0!==t){do{for(p=n-1;0===a.Ja[p];)p--;a.Ja[p]--;a.Ja[p+1]+=2;a.Ja[n]--;t-=2}while(0<t);for(p=n;0!==p;p--)for(r=a.Ja[p];0!==r;)d=a.Y[--b],d>k||(g[2*d+1]!==p&&(a.Oa+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),r--)}Zj(c,h,a.Ja)}
function hk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ia[2*l]+=g:0!==l?(l!==e&&a.ia[2*l]++,a.ia[32]++):10>=g?a.ia[34]++:a.ia[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function ik(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Xj(a,l,a.ia);while(0!==--g)}else 0!==l?(l!==e&&(Xj(a,l,a.ia),g--),Xj(a,16,a.ia),Wj(a,g-3,2)):10>=g?(Xj(a,17,a.ia),Wj(a,g-3,3)):(Xj(a,18,a.ia),Wj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function jk(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.qa[2*c])return 0;if(0!==a.qa[18]||0!==a.qa[20]||0!==a.qa[26])return 1;for(c=32;256>c;c++)if(0!==a.qa[2*c])return 1;return 0}
var kk=!1;function lk(a,b,c){a.W[a.Cb+2*a.xa]=b>>>8&255;a.W[a.Cb+2*a.xa+1]=b&255;a.W[a.Ec+a.xa]=c&255;a.xa++;0===b?a.qa[2*c]++:(a.matches++,b--,a.qa[2*(Nj[c]+256+1)]++,a.bb[2*(256>b?Mj[b]:Mj[256+(b>>>7)])]++);return a.xa===a.Hb-1}
;function mk(a,b){a.msg=Ej[b];return b}
function nk(a){for(var b=a.length;0<=--b;)a[b]=0}
function ok(a){var b=a.state,c=b.pending;c>a.M&&(c=a.M);0!==c&&(M.mb(a.output,b.W,b.Jb,c,a.wb),a.wb+=c,b.Jb+=c,a.Sc+=c,a.M-=c,b.pending-=c,0===b.pending&&(b.Jb=0))}
function pk(a,b){var c=0<=a.ta?a.ta:-1,d=a.o-a.ta,e=0;if(0<a.level){2===a.I.sc&&(a.I.sc=jk(a));gk(a,a.ac);gk(a,a.Wb);hk(a,a.qa,a.ac.vb);hk(a,a.bb,a.Wb.vb);gk(a,a.Zc);for(e=18;3<=e&&0===a.ia[2*Jj[e]+1];e--);a.Oa+=3*(e+1)+14;var f=a.Oa+3+7>>>3;var g=a.yb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Wj(a,b?1:0,3),ck(a,c,d);else if(4===a.strategy||g===f)Wj(a,2+(b?1:0),3),fk(a,Kj,Lj);else{Wj(a,4+(b?1:0),3);c=a.ac.vb+1;d=a.Wb.vb+1;e+=1;Wj(a,c-257,5);Wj(a,d-1,5);Wj(a,e-4,4);for(f=0;f<e;f++)Wj(a,a.ia[2*
Jj[f]+1],3);ik(a,a.qa,c-1);ik(a,a.bb,d-1);fk(a,a.qa,a.bb)}ak(a);b&&bk(a);a.ta=a.o;ok(a.I)}
function N(a,b){a.W[a.pending++]=b}
function qk(a,b){a.W[a.pending++]=b>>>8&255;a.W[a.pending++]=b&255}
function rk(a,b){var c=a.qd,d=a.o,e=a.wa,f=a.rd,g=a.o>a.ka-262?a.o-(a.ka-262):0,h=a.window,k=a.Xa,l=a.Ha,n=a.o+258,p=h[d+e-1],t=h[d+e];a.wa>=a.ld&&(c>>=2);f>a.u&&(f=a.u);do{var r=b;if(h[r+e]===t&&h[r+e-1]===p&&h[r]===h[d]&&h[++r]===h[d+1]){d+=2;for(r++;h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&d<n;);r=258-(n-d);d=n-258;if(r>e){a.ub=b;e=r;if(r>=f)break;p=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function sk(a){var b=a.ka,c;do{var d=a.Ld-a.u-a.o;if(a.o>=b+(b-262)){M.mb(a.window,a.window,b,b,0);a.ub-=b;a.o-=b;a.ta-=b;var e=c=a.Zb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.I.la)break;e=a.I;c=a.window;f=a.o+a.u;var g=e.la;g>d&&(g=d);0===g?c=0:(e.la-=g,M.mb(c,e.input,e.hb,g,f),1===e.state.wrap?e.H=yj(e.H,c,g,f):2===e.state.wrap&&(e.H=zj(e.H,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.u+=c;if(3<=a.u+a.ra)for(d=a.o-a.ra,a.K=a.window[d],
a.K=(a.K<<a.La^a.window[d+1])&a.Ka;a.ra&&!(a.K=(a.K<<a.La^a.window[d+3-1])&a.Ka,a.Ha[d&a.Xa]=a.head[a.K],a.head[a.K]=d,d++,a.ra--,3>a.u+a.ra););}while(262>a.u&&0!==a.I.la)}
function tk(a,b){for(var c;;){if(262>a.u){sk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.K=(a.K<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);0!==c&&a.o-c<=a.ka-262&&(a.R=rk(a,c));if(3<=a.R)if(c=lk(a,a.o-a.ub,a.R-3),a.u-=a.R,a.R<=a.Gc&&3<=a.u){a.R--;do a.o++,a.K=(a.K<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o;while(0!==--a.R);a.o++}else a.o+=a.R,a.R=0,a.K=a.window[a.o],a.K=(a.K<<a.La^a.window[a.o+1])&a.Ka;else c=lk(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(pk(a,!1),0===a.I.M))return 1}a.ra=2>a.o?a.o:2;return 4===b?(pk(a,!0),0===a.I.M?3:4):a.xa&&(pk(a,!1),0===a.I.M)?1:2}
function uk(a,b){for(var c,d;;){if(262>a.u){sk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.K=(a.K<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);a.wa=a.R;a.ud=a.ub;a.R=2;0!==c&&a.wa<a.Gc&&a.o-c<=a.ka-262&&(a.R=rk(a,c),5>=a.R&&(1===a.strategy||3===a.R&&4096<a.o-a.ub)&&(a.R=2));if(3<=a.wa&&a.R<=a.wa){d=a.o+a.u-3;c=lk(a,a.o-1-a.ud,a.wa-3);a.u-=a.wa-1;a.wa-=2;do++a.o<=d&&(a.K=(a.K<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);
while(0!==--a.wa);a.fb=0;a.R=2;a.o++;if(c&&(pk(a,!1),0===a.I.M))return 1}else if(a.fb){if((c=lk(a,0,a.window[a.o-1]))&&pk(a,!1),a.o++,a.u--,0===a.I.M)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(lk(a,0,a.window[a.o-1]),a.fb=0);a.ra=2>a.o?a.o:2;return 4===b?(pk(a,!0),0===a.I.M?3:4):a.xa&&(pk(a,!1),0===a.I.M)?1:2}
function vk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){sk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.R=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.R=258-(e-d);a.R>a.u&&(a.R=a.u)}3<=a.R?(c=lk(a,1,a.R-3),a.u-=a.R,a.o+=a.R,a.R=0):(c=lk(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(pk(a,!1),0===a.I.M))return 1}a.ra=0;return 4===b?(pk(a,!0),0===a.I.M?3:4):
a.xa&&(pk(a,!1),0===a.I.M)?1:2}
function wk(a,b){for(var c;;){if(0===a.u&&(sk(a),0===a.u)){if(0===b)return 1;break}a.R=0;c=lk(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(pk(a,!1),0===a.I.M))return 1}a.ra=0;return 4===b?(pk(a,!0),0===a.I.M?3:4):a.xa&&(pk(a,!1),0===a.I.M)?1:2}
function xk(a,b,c,d,e){this.le=a;this.ye=b;this.Be=c;this.xe=d;this.ge=e}
var yk;yk=[new xk(0,0,0,0,function(a,b){var c=65535;for(c>a.ya-5&&(c=a.ya-5);;){if(1>=a.u){sk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.ta+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,pk(a,!1),0===a.I.M)return 1;if(a.o-a.ta>=a.ka-262&&(pk(a,!1),0===a.I.M))return 1}a.ra=0;if(4===b)return pk(a,!0),0===a.I.M?3:4;a.o>a.ta&&pk(a,!1);return 1}),
new xk(4,4,8,4,tk),new xk(4,5,16,8,tk),new xk(4,6,32,32,tk),new xk(4,4,16,16,uk),new xk(8,16,32,32,uk),new xk(8,16,128,128,uk),new xk(8,32,128,256,uk),new xk(32,128,258,1024,uk),new xk(32,258,258,4096,uk)];
function zk(){this.I=null;this.status=0;this.W=null;this.wrap=this.pending=this.Jb=this.ya=0;this.G=null;this.Ca=0;this.method=8;this.sb=-1;this.Xa=this.Uc=this.ka=0;this.window=null;this.Ld=0;this.head=this.Ha=null;this.rd=this.ld=this.strategy=this.level=this.Gc=this.qd=this.wa=this.u=this.ub=this.o=this.fb=this.ud=this.R=this.ta=this.La=this.Ka=this.Bc=this.Zb=this.K=0;this.qa=new M.Ia(1146);this.bb=new M.Ia(122);this.ia=new M.Ia(78);nk(this.qa);nk(this.bb);nk(this.ia);this.Zc=this.Wb=this.ac=
null;this.Ja=new M.Ia(16);this.Y=new M.Ia(573);nk(this.Y);this.qb=this.Ma=0;this.depth=new M.Ia(573);nk(this.depth);this.ga=this.ma=this.ra=this.matches=this.yb=this.Oa=this.Cb=this.xa=this.Hb=this.Ec=0}
function Ak(a,b){if(!a||!a.state||5<b||0>b)return a?mk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.la||666===c.status&&4!==b)return mk(a,0===a.M?-5:-2);c.I=a;var d=c.sb;c.sb=b;if(42===c.status)if(2===c.wrap)a.H=0,N(c,31),N(c,139),N(c,8),c.G?(N(c,(c.G.text?1:0)+(c.G.Ra?2:0)+(c.G.extra?4:0)+(c.G.name?8:0)+(c.G.comment?16:0)),N(c,c.G.time&255),N(c,c.G.time>>8&255),N(c,c.G.time>>16&255),N(c,c.G.time>>24&255),N(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),N(c,c.G.os&255),c.G.extra&&c.G.extra.length&&
(N(c,c.G.extra.length&255),N(c,c.G.extra.length>>8&255)),c.G.Ra&&(a.H=zj(a.H,c.W,c.pending,0)),c.Ca=0,c.status=69):(N(c,0),N(c,0),N(c,0),N(c,0),N(c,0),N(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),N(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;qk(c,e+(31-e%31));0!==c.o&&(qk(c,a.H>>>16),qk(c,a.H&65535));a.H=1}if(69===c.status)if(c.G.extra){for(e=c.pending;c.Ca<(c.G.extra.length&65535)&&(c.pending!==c.ya||
(c.G.Ra&&c.pending>e&&(a.H=zj(a.H,c.W,c.pending-e,e)),ok(a),e=c.pending,c.pending!==c.ya));)N(c,c.G.extra[c.Ca]&255),c.Ca++;c.G.Ra&&c.pending>e&&(a.H=zj(a.H,c.W,c.pending-e,e));c.Ca===c.G.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.G.name){e=c.pending;do{if(c.pending===c.ya&&(c.G.Ra&&c.pending>e&&(a.H=zj(a.H,c.W,c.pending-e,e)),ok(a),e=c.pending,c.pending===c.ya)){var f=1;break}f=c.Ca<c.G.name.length?c.G.name.charCodeAt(c.Ca++)&255:0;N(c,f)}while(0!==f);c.G.Ra&&c.pending>
e&&(a.H=zj(a.H,c.W,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.G.comment){e=c.pending;do{if(c.pending===c.ya&&(c.G.Ra&&c.pending>e&&(a.H=zj(a.H,c.W,c.pending-e,e)),ok(a),e=c.pending,c.pending===c.ya)){f=1;break}f=c.Ca<c.G.comment.length?c.G.comment.charCodeAt(c.Ca++)&255:0;N(c,f)}while(0!==f);c.G.Ra&&c.pending>e&&(a.H=zj(a.H,c.W,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.G.Ra?(c.pending+2>c.ya&&ok(a),c.pending+2<=c.ya&&(N(c,a.H&
255),N(c,a.H>>8&255),a.H=0,c.status=113)):c.status=113);if(0!==c.pending){if(ok(a),0===a.M)return c.sb=-1,0}else if(0===a.la&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return mk(a,-5);if(666===c.status&&0!==a.la)return mk(a,-5);if(0!==a.la||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?wk(c,b):3===c.strategy?vk(c,b):yk[c.level].ge(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.M&&(c.sb=-1),0;if(2===d&&(1===b?(Wj(c,2,3),Xj(c,256,Kj),16===c.ga?(Vj(c,c.ma),c.ma=0,c.ga=0):8<=c.ga&&
(c.W[c.pending++]=c.ma&255,c.ma>>=8,c.ga-=8)):5!==b&&(Wj(c,0,3),ck(c,0,0),3===b&&(nk(c.head),0===c.u&&(c.o=0,c.ta=0,c.ra=0))),ok(a),0===a.M))return c.sb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(N(c,a.H&255),N(c,a.H>>8&255),N(c,a.H>>16&255),N(c,a.H>>24&255),N(c,a.kb&255),N(c,a.kb>>8&255),N(c,a.kb>>16&255),N(c,a.kb>>24&255)):(qk(c,a.H>>>16),qk(c,a.H&65535));ok(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Bk={};Bk=function(){this.input=null;this.kb=this.la=this.hb=0;this.output=null;this.Sc=this.M=this.wb=0;this.msg="";this.state=null;this.sc=2;this.H=0};var Ck=Object.prototype.toString;
function Dk(a){if(!(this instanceof Dk))return new Dk(a);a=this.options=M.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.I=new Bk;this.I.M=0;var b=this.I;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=mk(b,-2);else{8===e&&(e=9);var k=new zk;b.state=k;k.I=b;k.wrap=h;k.G=null;k.Uc=e;k.ka=1<<k.Uc;k.Xa=k.ka-1;k.Bc=f+7;k.Zb=1<<k.Bc;k.Ka=k.Zb-1;k.La=~~((k.Bc+3-1)/3);k.window=new M.lb(2*k.ka);k.head=new M.Ia(k.Zb);k.Ha=new M.Ia(k.ka);k.Hb=1<<f+6;k.ya=4*k.Hb;k.W=new M.lb(k.ya);k.Cb=1*k.Hb;k.Ec=3*k.Hb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.kb=b.Sc=0;b.sc=2;c=b.state;c.pending=0;c.Jb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.H=2===c.wrap?
0:1;c.sb=0;if(!kk){d=Array(16);for(f=g=0;28>f;f++)for(Oj[f]=g,e=0;e<1<<Gj[f];e++)Nj[g++]=f;Nj[g-1]=f;for(f=g=0;16>f;f++)for(Pj[f]=g,e=0;e<1<<Hj[f];e++)Mj[g++]=f;for(g>>=7;30>f;f++)for(Pj[f]=g<<7,e=0;e<1<<Hj[f]-7;e++)Mj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Kj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Kj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Kj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Kj[2*e+1]=8,e++,d[8]++;Zj(Kj,287,d);for(e=0;30>e;e++)Lj[2*e+1]=5,Lj[2*e]=Yj(e,5);Rj=new Qj(Kj,Gj,257,286,15);Sj=new Qj(Lj,
Hj,0,30,15);Tj=new Qj([],Ij,0,19,7);kk=!0}c.ac=new Uj(c.qa,Rj);c.Wb=new Uj(c.bb,Sj);c.Zc=new Uj(c.ia,Tj);c.ma=0;c.ga=0;ak(c);c=0}else c=mk(b,-2);0===c&&(b=b.state,b.Ld=2*b.ka,nk(b.head),b.Gc=yk[b.level].ye,b.ld=yk[b.level].le,b.rd=yk[b.level].Be,b.qd=yk[b.level].xe,b.o=0,b.ta=0,b.u=0,b.ra=0,b.R=b.wa=2,b.fb=0,b.K=0);b=c}}else b=-2;if(0!==b)throw Error(Ej[b]);a.header&&(b=this.I)&&b.state&&2===b.state.wrap&&(b.state.G=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=xj(a.dictionary):
"[object ArrayBuffer]"===Ck.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.I;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.H=yj(a.H,f,g,0));l.wrap=0;g>=l.ka&&(0===b&&(nk(l.head),l.o=0,l.ta=0,l.ra=0),c=new M.lb(l.ka),M.mb(c,f,g-l.ka,l.ka,0),f=c,g=l.ka);c=a.la;d=a.hb;e=a.input;a.la=g;a.hb=0;a.input=f;for(sk(l);3<=l.u;){f=l.o;g=l.u-2;do l.K=(l.K<<l.La^l.window[f+3-1])&l.Ka,l.Ha[f&l.Xa]=l.head[l.K],l.head[l.K]=f,f++;while(--g);
l.o=f;l.u=2;sk(l)}l.o+=l.u;l.ta=l.o;l.ra=l.u;l.u=0;l.R=l.wa=2;l.fb=0;a.hb=d;a.input=e;a.la=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Ej[b]);this.Pf=!0}}
Dk.prototype.push=function(a,b){var c=this.I,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=xj(a):"[object ArrayBuffer]"===Ck.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.la=c.input.length;do{0===c.M&&(c.output=new M.lb(d),c.wb=0,c.M=d);a=Ak(c,e);if(1!==a&&0!==a)return Ek(this,a),this.ended=!0,!1;if(0===c.M||0===c.la&&(4===e||2===e))if("string"===this.options.to){var f=M.Rc(c.output,c.wb);b=f;f=f.length;if(65537>f&&(b.subarray&&wj||!b.subarray))b=
String.fromCharCode.apply(null,M.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=M.Rc(c.output,c.wb),this.chunks.push(b)}while((0<c.la||0===c.M)&&1!==a);if(4===e)return(c=this.I)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=mk(c,-2):(c.state=null,a=113===d?mk(c,-3):0)):a=-2,Ek(this,a),this.ended=!0,0===a;2===e&&(Ek(this,0),c.M=0);return!0};
function Ek(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):M.jd(a.chunks));a.chunks=[];a.err=b;a.msg=a.I.msg}
function Fk(a,b){b=b||{};b.gzip=!0;b=new Dk(b);b.push(a,!0);if(b.err)throw b.msg||Ej[b.err];return b.result}
;function Gk(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=Eb(a):b=null;return b}
;function Hk(a){return Eb(null===a?"null":void 0===a?"undefined":a)}
;function Ik(a){this.name=a}
;var Jk=new Ik("rawColdConfigGroup");var Kk=new Ik("rawHotConfigGroup");function Lk(a){this.F=Mf(a)}
x(Lk,pg);var Mk=new Ik("continuationCommand");var Nk=new Ik("webCommandMetadata");var Ok=new Ik("signalServiceEndpoint");var Pk={Bf:"EMBEDDED_PLAYER_MODE_UNKNOWN",yf:"EMBEDDED_PLAYER_MODE_DEFAULT",Af:"EMBEDDED_PLAYER_MODE_PFP",zf:"EMBEDDED_PLAYER_MODE_PFL"};var Qk=new Ik("feedbackEndpoint");function Rk(a){this.F=Mf(a)}
x(Rk,pg);Rk.prototype.setTrackingParams=function(a){return Yf(this,1,hf(a,!0))};var Sk=new Ik("webPlayerShareEntityServiceEndpoint");var Tk=new Ik("playlistEditEndpoint");var Uk=new Ik("modifyChannelNotificationPreferenceEndpoint");var Vk=new Ik("unsubscribeEndpoint");var Wk=new Ik("subscribeEndpoint");function Xk(){var a=Yk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Zk(a){D("yt.ads.biscotti.lastId_",a)}
;function $k(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var al=C.window,bl,cl,dl=(null==al?void 0:null==(bl=al.yt)?void 0:bl.config_)||(null==al?void 0:null==(cl=al.ytcfg)?void 0:cl.data_)||{};D("yt.config_",dl);function el(){$k(dl,arguments)}
function P(a,b){return a in dl?dl[a]:b}
function fl(a){var b=dl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var gl=[];function hl(a){gl.forEach(function(b){return b(a)})}
function il(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){jl(b)}}:a}
function jl(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),el("ERRORS",b));hl(a)}
function kl(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),el("ERRORS",f))}
;var ll=/^[\w.]*$/,ml={q:!0,search_query:!0};function nl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=ol(f[0]||""),h=ol(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?jb(k,h):c[g]=[k,h]}else c[g]=h}catch(t){var l=t,n=f[0],p=String(nl);l.args=[{key:n,value:f[1],query:a,method:pl===p?"unchanged":p}];ml.hasOwnProperty(n)||kl(l)}}return c}
var pl=String(nl);function ql(a){var b=[];kb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];db(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function rl(a){"?"===a.charAt(0)&&(a=a.substring(1));return nl(a,"&")}
function sl(a){return-1!==a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),rl(1<a.length?a[1]:a[0])):{}}
function tl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=rl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return hc(a,e)+d}
function ul(a){if(!b)var b=window.location.href;var c=$b(1,a),d=ac(a);c&&d?(a=a.match(Yb),b=b.match(Yb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ac(b)===d&&(Number($b(4,b))||null)===(Number($b(4,a))||null):!0;return a}
function ol(a){return a&&a.match(ll)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function vl(a){var b=wl;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Bi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(na){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Yh:g;try{var h=g.history.length}catch(na){h=0}e.u_his=h;var k;e.u_h=null==(k=Yh.screen)?void 0:k.height;var l;e.u_w=null==(l=Yh.screen)?void 0:l.width;var n;e.u_ah=null==(n=Yh.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=Yh.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=Yh.screen)?void 0:t.colorDepth}catch(na){}h=b.h;try{var r=h.screenX;var w=h.screenY}catch(na){}try{var y=h.outerWidth;var B=h.outerHeight}catch(na){}try{var G=h.innerWidth;var J=h.innerHeight}catch(na){}try{var H=h.screenLeft;var T=h.screenTop}catch(na){}try{G=h.innerWidth,J=h.innerHeight}catch(na){}try{var I=h.screen.availWidth;var ha=h.screen.availTop}catch(na){}r=[H,T,r,w,I,ha,y,B,G,J];try{var O=(b.h.top||window).document,S="CSS1Compat"==
O.compatMode?O.documentElement:O.body;var V=(new xd(S.clientWidth,S.clientHeight)).round()}catch(na){V=new xd(-12245933,-12245933)}O=V;V={};var ma=void 0===ma?C:ma;S=new Hi;"SVGElement"in ma&&"createElementNS"in ma.document&&S.set(0);w=yi();w["allow-top-navigation-by-user-activation"]&&S.set(1);w["allow-popups-to-escape-sandbox"]&&S.set(2);ma.crypto&&ma.crypto.subtle&&S.set(3);"TextDecoder"in ma&&"TextEncoder"in ma&&S.set(4);ma=Ii(S);V.bc=ma;V.bih=O.height;V.biw=O.width;V.brdim=r.join();b=b.i;b=(V.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,V.wgl=!!Yh.WebGLRenderingContext,V);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var wl=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return ql(vl(a))});Wa();navigator.userAgent.indexOf(" (CrKey ");function R(a){a=xl(a);return"string"===typeof a&&"false"===a?!1:!!a}
function U(a,b){a=xl(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function xl(a){return P("EXPERIMENT_FLAGS",{})[a]}
function yl(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});d=v(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var zl="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Al(){if(!zl)return null;var a=zl();return"open"in a?a:null}
function Bl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Cl(a,b){"function"===typeof a&&(a=il(a));return window.setTimeout(a,b)}
;var Dl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ka(Dl),["client_dev_set_cookie"]);var El={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Fl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka(Dl)),Gl=!1;
function Hl(a,b){b=void 0===b?{}:b;var c=ul(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in El){var f=P(El[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=P("VISITOR_DATA"));!f||!c&&ac(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===P("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!ac(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ac(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&ac(a)||(b["X-YouTube-Ad-Signals"]=ql(vl()));return b}
function Il(a){var b=window.location.search,c=ac(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&ul(a)&&(c=document.location.hostname);var d=Zb($b(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=rl(b),f={};db(Fl,function(g){e[g]&&(f[g]=e[g])});
return tl(a,f||{},!1)}
function Jl(a,b){var c=b.format||"JSON";a=Kl(a,b);var d=Ll(a,b),e=!1,f=Ml(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Bl(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=Nl(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Cl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Kl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=tl(a,b||{},!0);return a}
function Ll(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ac(a)&&!b.withCredentials&&ac(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=rl(e),vb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):fc(e));f=e||f&&!nb(f);!Gl&&f&&"POST"!=b.method&&(Gl=!0,jl(Error("AJAX request with postData should use POST")));return e}
function Nl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,kl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ol(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=Pl(g)})}d&&Ql(e);
return e}
function Ql(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=xb();d=e?e.createHTML(d):d;a[c]=new Ub(d)}else Ql(a[b])}}
function Ol(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Pl(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Rl(a,b){b.method="POST";b.postParams||(b.postParams={});return Jl(a,b)}
function Ml(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&il(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=Al();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;R("debug_forward_web_query_parameters")&&(a=Il(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Hl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Sl=[{Hc:function(a){return"Cannot read property '"+a.key+"'"},
ec:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Hc:function(a){return"Cannot call '"+a.key+"'"},
ec:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Hc:function(a){return a.key+" is not defined"},
ec:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Ul={Ta:[],Qa:[{callback:Tl,weight:500}]};function Tl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Vl(){this.Qa=[];this.Ta=[]}
var Wl;function Xl(){if(!Wl){var a=Wl=new Vl;a.Ta.length=0;a.Qa.length=0;Ul.Ta&&a.Ta.push.apply(a.Ta,Ul.Ta);Ul.Qa&&a.Qa.push.apply(a.Qa,Ul.Qa)}return Wl}
;var Yl=new L;function Zl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=$l(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=$l(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=$l(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function $l(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function am(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=bm(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Zl(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?bm(f+".ve",g,h,k):0;d+=f;d+=bm(e,a[e],b,c);if(500<d)break}}else c[b]=cm(a),d+=c[b].length;else c[b]=cm(a),d+=c[b].length;return d}
function bm(a,b,c,d){c+="."+a;a=cm(b);d[c]=a;return c.length+a.length}
function cm(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function dm(){this.bf=!0}
function em(){dm.h||(dm.h=new dm);return dm.h}
function fm(a,b){a={};var c=Lg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in dl||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in dl&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return a}
;var gm={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function hm(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function im(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function jm(a,b,c,d,e){Hg.set(""+a,b,{dc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function km(a){return Hg.get(""+a,void 0)}
function lm(a,b,c){Hg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function mm(){if(!Hg.isEnabled())return!1;if(Hg.h.cookie)return!0;Hg.set("TESTCOOKIESENABLED","1",{dc:60});if("1"!==Hg.get("TESTCOOKIESENABLED"))return!1;Hg.remove("TESTCOOKIESENABLED");return!0}
;var nm=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",nm);function om(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=km(this.h);a&&this.parse(a)}
var pm;function qm(){pm||(pm=new om);return pm}
m=om.prototype;m.get=function(a,b){rm(a);sm(a);a=void 0!==nm[a]?nm[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){rm(a);sm(a);if(null==b)throw Error("ExpectedNotNull");nm[a]=b.toString()};
function tm(a){return!!((um("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){rm(a);sm(a);delete nm[a]};
m.clear=function(){for(var a in nm)delete nm[a]};
function sm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function rm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function um(a){a=void 0!==nm[a]?nm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(nm[d]=c.toString())}};var wm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},xm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function ym(){var a=C.navigator;return a?a.connection:void 0}
function zm(){var a=ym();if(a){var b=wm[a.type||"unknown"]||"CONN_UNKNOWN";a=wm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Am(){var a=ym();if(null!=a&&a.effectiveType)return xm.hasOwnProperty(a.effectiveType)?xm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function W(a){var b=A.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
x(W,Error);function Bm(){try{return Cm(),!0}catch(a){return!1}}
function Cm(a){if(void 0!==P("DATASYNC_ID"))return P("DATASYNC_ID");throw new W("Datasync ID not set",void 0===a?"unknown":a);}
;function Dm(){}
function Em(a,b){return Gi.ab(a,0,b)}
Dm.prototype.na=function(a,b){return this.ab(a,1,b)};
Dm.prototype.Ab=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Fm=U("web_emulated_idle_callback_delay",300),Gm=1E3/60-3,Hm=[8,5,4,3,2,1,0];
function Im(a){a=void 0===a?{}:a;K.call(this);this.i=[];this.j={};this.ba=this.h=0;this.X=this.m=!1;this.P=[];this.T=this.ea=!1;for(var b=v(Hm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.pc=a.timeout||1;this.D=Gm;this.A=0;this.ha=this.De.bind(this);this.oc=this.ef.bind(this);this.Fa=this.Qd.bind(this);this.Za=this.me.bind(this);this.Pb=this.Ge.bind(this);this.sa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.fa=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ha)}
x(Im,K);m=Im.prototype;m.Ab=function(a){var b=Wa();Jm(this,a);a=Wa()-b;this.m||(this.D-=a)};
m.ab=function(a,b,c){++this.ba;if(10===b)return this.Ab(a),this.ba;var d=this.ba;this.j[d]=a;this.m&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.X||this.m||(0!==this.h&&Km(this)!==this.A&&this.stop(),this.start()));return d};
m.oa=function(a){delete this.j[a]};
function Lm(a){a.P.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function Mm(a){return!a.isHidden()&&a.fa}
function Km(a){if(a.i[8].length){if(a.T)return 4;if(Mm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?Mm(a)?3:2:1;return 0}
m.Ib=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Jm(a,b){try{b()}catch(c){a.Ib(c)}}
function Nm(a){for(var b=v(Hm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.me=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ea=!0;Om(this,b);this.ea=!1};
m.ef=function(){Om(this)};
m.Qd=function(){Pm(this)};
m.Ge=function(a){this.T=!0;var b=Km(this);4===b&&b!==this.A&&(this.stop(),this.start());Om(this,void 0,a);this.T=!1};
m.De=function(){this.isHidden()||Pm(this);this.h&&(this.stop(),this.start())};
function Pm(a){a.stop();a.m=!0;for(var b=Wa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Jm(a,e)}Qm(a);a.m=!1;Nm(a)&&a.start();b=Wa()-b;a.D-=b}
function Qm(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function Om(a,b,c){a.T&&4===a.A&&a.h||a.stop();a.m=!0;b=Wa()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ib(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Jm(a,f);d=a.ea?0:1;d=a.l>d?a.l:d;if(!(Wa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Jm(a,c)}while(c&&Wa()<b)}a.m=!1;Qm(a);a.D=Gm;Nm(a)&&a.start()}
m.start=function(){this.X=!1;if(0===this.h)switch(this.A=Km(this),this.A){case 1:var a=this.Za;this.h=this.sa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Fm);break;case 2:this.h=window.setTimeout(this.oc,this.pc);break;case 3:this.h=window.requestAnimationFrame(this.Pb);break;case 4:this.h=window.setTimeout(this.Fa,0)}};
m.pause=function(){this.stop();this.X=!0};
m.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.sa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.S=function(){Lm(this);this.stop();this.fa&&document.removeEventListener("visibilitychange",this.ha);K.prototype.S.call(this)};var Rm=E("yt.scheduler.instance.timerIdMap_")||{},Sm=U("kevlar_tuner_scheduler_soft_state_timer_ms",800),Tm=0,Um=0;function Vm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new Im(P("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Wm(){Xm();var a=E("ytglobal.schedulerInstanceInstance_");a&&(rc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Xm(){Lm(Vm());for(var a in Rm)Rm.hasOwnProperty(a)&&delete Rm[Number(a)]}
function Ym(a,b,c){if(!c)return c=void 0===c,-Vm().ab(a,b,c);var d=window.setTimeout(function(){var e=Vm().ab(a,b);Rm[d]=e},c);
return d}
function Zm(a){Vm().Ab(a)}
function $m(a){var b=Vm();if(0>a)b.oa(-a);else{var c=Rm[a];c?(b.oa(c),delete Rm[a]):window.clearTimeout(a)}}
function an(){bn()}
function bn(){window.clearTimeout(Tm);Vm().start()}
function cn(){Vm().pause();window.clearTimeout(Tm);Tm=window.setTimeout(an,Sm)}
function dn(){window.clearTimeout(Um);Um=window.setTimeout(function(){en(0)},Sm)}
function en(a){dn();var b=Vm();b.l=a;b.start()}
function fn(a){dn();var b=Vm();b.l>a&&(b.l=a,b.start())}
function gn(){window.clearTimeout(Um);var a=Vm();a.l=0;a.start()}
function hn(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",Wm),D("yt.scheduler.instance.addJob",Ym),D("yt.scheduler.instance.addImmediateJob",Zm),D("yt.scheduler.instance.cancelJob",$m),D("yt.scheduler.instance.cancelAllJobs",Xm),D("yt.scheduler.instance.start",bn),D("yt.scheduler.instance.pause",cn),D("yt.scheduler.instance.setPriorityThreshold",en),D("yt.scheduler.instance.enablePriorityThreshold",fn),D("yt.scheduler.instance.clearPriorityThreshold",gn),D("yt.scheduler.initialized",
!0))}
;function jn(){Dm.apply(this,arguments)}
x(jn,Dm);function kn(){jn.h||(jn.h=new jn);return jn.h}
jn.prototype.ab=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Cl(a,c||0)};
jn.prototype.oa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
jn.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
jn.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Gi=kn();R("web_scheduler_auto_init")&&hn();function ln(a){var b=new mj;(b=b.isAvailable()?a?new sj(b,a):b:null)||(a=new nj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new hj(a):null;this.i=document.domain||window.location.hostname}
ln.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new sh).serialize(b))}catch(f){return}else e=escape(b);jm(a,e,c,this.i)};
ln.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=km(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ln.prototype.remove=function(a){this.h&&this.h.remove(a);lm(a,"/",this.i)};var mn=function(){var a;return function(){a||(a=new ln("ytidb"));return a}}();
function nn(){var a;return null==(a=mn())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var on=[],pn,qn=!1;function rn(){var a={};for(pn=new sn(void 0===a.handleError?tn:a.handleError,void 0===a.logEvent?un:a.logEvent);0<on.length;)switch(a=on.shift(),a.type){case "ERROR":pn.Ib(a.payload);break;case "EVENT":pn.logEvent(a.eventType,a.payload)}}
function vn(a){qn||(pn?pn.Ib(a):(on.push({type:"ERROR",payload:a}),10<on.length&&on.shift()))}
function wn(a,b){qn||(pn?pn.logEvent(a,b):(on.push({type:"EVENT",eventType:a,payload:b}),10<on.length&&on.shift()))}
;function xn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function yn(a){return a.substr(0,a.indexOf(":"))||a}
;var zn=te||ue;function An(a){var b=Lb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Bn={},Cn=(Bn.AUTH_INVALID="No user identifier specified.",Bn.EXPLICIT_ABORT="Transaction was explicitly aborted.",Bn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Bn.MISSING_INDEX="Index not created.",Bn.MISSING_OBJECT_STORES="Object stores not created.",Bn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Bn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Bn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Bn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Bn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Bn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Bn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Bn),Dn={},En=(Dn.AUTH_INVALID="ERROR",Dn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Dn.EXPLICIT_ABORT="IGNORED",Dn.IDB_NOT_SUPPORTED="ERROR",Dn.MISSING_INDEX=
"WARNING",Dn.MISSING_OBJECT_STORES="ERROR",Dn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Dn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Dn.QUOTA_EXCEEDED="WARNING",Dn.QUOTA_MAYBE_EXCEEDED="WARNING",Dn.UNKNOWN_ABORT="WARNING",Dn.INCOMPATIBLE_DB_VERSION="WARNING",Dn),Fn={},Gn=(Fn.AUTH_INVALID=!1,Fn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Fn.EXPLICIT_ABORT=!1,Fn.IDB_NOT_SUPPORTED=!1,Fn.MISSING_INDEX=!1,Fn.MISSING_OBJECT_STORES=!1,Fn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Fn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Fn.QUOTA_EXCEEDED=!1,Fn.QUOTA_MAYBE_EXCEEDED=!0,Fn.UNKNOWN_ABORT=!0,Fn.INCOMPATIBLE_DB_VERSION=!1,Fn);function Hn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Cn[a]:c;d=void 0===d?En[a]:d;e=void 0===e?Gn[a]:e;W.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Hn.prototype)}
x(Hn,W);function In(a,b){Hn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Cn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,In.prototype)}
x(In,Hn);function Jn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Jn.prototype)}
x(Jn,Error);var Kn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ln(a,b,c,d){b=yn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Hn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Hn("QUOTA_EXCEEDED",a);if(ve&&"UnknownError"===e.name)return new Hn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Jn)return new Hn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Kn.some(function(f){return e.message.includes(f)}))return new Hn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Hn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",td:e.name})];e.level="WARNING";return e}
function Mn(a,b,c){var d=nn();return new Hn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Nn(a){if(!a)throw Error();throw a;}
function On(a){return a}
function Pn(a){this.h=a}
function Qn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Qn.all=function(a){return new Qn(new Pn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={rb:0};f.rb<a.length;f={rb:f.rb},++f.rb)Qn.resolve(a[f.rb]).then(function(g){return function(h){d[g.rb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Qn.resolve=function(a){return new Qn(new Pn(function(b,c){a instanceof Qn?a.then(b,c):b(a)}))};
Qn.reject=function(a){return new Qn(new Pn(function(b,c){c(a)}))};
Qn.prototype.then=function(a,b){var c=this,d=null!=a?a:On,e=null!=b?b:Nn;return new Qn(new Pn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Rn(c,c,d,f,g)}),c.i.push(function(){Sn(c,c,e,f,g)})):"FULFILLED"===c.state.status?Rn(c,c,d,f,g):"REJECTED"===c.state.status&&Sn(c,c,e,f,g)}))};
Qn.prototype.catch=function(a){return this.then(void 0,a)};
function Rn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Qn?Tn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Sn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Qn?Tn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Tn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Qn?Tn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Un(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Vn(a){return new Promise(function(b,c){Un(a,b,c)})}
function Wn(a){return new Qn(new Pn(function(b,c){Un(a,b,c)}))}
;function Xn(a,b){return new Qn(new Pn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Yn=window,X=Yn.ytcsi&&Yn.ytcsi.now?Yn.ytcsi.now:Yn.performance&&Yn.performance.timing&&Yn.performance.now&&Yn.performance.timing.navigationStart?function(){return Yn.performance.timing.navigationStart+Yn.performance.now()}:function(){return(new Date).getTime()};function Zn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(X());this.i=!1}
m=Zn.prototype;m.add=function(a,b,c){return $n(this,[a],{mode:"readwrite",ja:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return $n(this,[a],{mode:"readwrite",ja:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return $n(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).count(b)})};
function ao(a,b,c){a=a.h.createObjectStore(b,c);return new bo(a)}
m.delete=function(a,b){return $n(this,[a],{mode:"readwrite",ja:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return $n(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).get(b)})};
function co(a,b,c){return $n(a,[b],{mode:"readwrite",ja:!0},function(d){d=d.objectStore(b);return Wn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function $n(a,b,c,d){var e,f,g,h,k,l,n,p,t,r,w,y;return z(function(B){switch(B.h){case 1:var G={mode:"readonly",ja:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.ja?3:1;g=0;case 2:if(h){B.B(4);break}g++;k=Math.round(X());za(B,5);l=a.h.transaction(b,e.mode);G=B.yield;var J=new eo(l);J=fo(J,d);return G.call(B,J,7);case 7:return n=B.i,p=Math.round(X()),go(a,k,p,g,void 0,b.join(),e),B.return(n);case 5:t=Aa(B);r=Math.round(X());w=Ln(t,
a.h.name,b.join(),a.h.version);if((y=w instanceof Hn&&!w.h)||g>=f)go(a,k,r,g,w,b.join(),e),h=w;B.B(2);break;case 4:return B.return(Promise.reject(h))}})}
function go(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Hn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&wn("QUOTA_EXCEEDED",{dbName:yn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Hn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),wn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),ho(a,!1,d,f,b,g.tag),vn(e)):ho(a,!0,d,f,b,g.tag)}
function ho(a,b,c,d,e,f){wn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function bo(a){this.h=a}
m=bo.prototype;m.add=function(a,b){return Wn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Wn(this.h.clear()).then(function(){})};
function io(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Wn(this.h.count(a))};
function jo(a,b){return ko(a,{query:b},function(c){return c.delete().then(function(){return lo(c)})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?jo(this,a):Wn(this.h.delete(a))};
m.get=function(a){return Wn(this.h.get(a))};
m.index=function(a){try{return new mo(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Jn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function ko(a,b,c){a=a.h.openCursor(b.query,b.direction);return no(a).then(function(d){return Xn(d,c)})}
function eo(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Hn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function fo(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
eo.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Hn("EXPLICIT_ABORT");};
eo.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new bo(a),this.i.set(a,b));return b};
function mo(a){this.h=a}
m=mo.prototype;m.count=function(a){return Wn(this.h.count(a))};
m.delete=function(a){return oo(this,{query:a},function(b){return b.delete().then(function(){return lo(b)})})};
m.get=function(a){return Wn(this.h.get(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function oo(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return no(a).then(function(d){return Xn(d,c)})}
function po(a,b){this.request=a;this.cursor=b}
function no(a){return Wn(a).then(function(b){return b?new po(a,b):null})}
function lo(a){a.cursor.continue(void 0);return no(a.request)}
po.prototype.delete=function(){return Wn(this.cursor.delete()).then(function(){})};
po.prototype.getValue=function(){return this.cursor.value};
po.prototype.update=function(a){return Wn(this.cursor.update(a))};function qo(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Zn(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Sd,k=c.blocking,l=c.cf,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&wn("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:yn(a)});var w=f(),y=new eo(g.transaction);
n&&n(w,function(B){return r.oldVersion<B&&r.newVersion>=B},y);
y.done.catch(function(B){e(B)})}catch(B){e(B)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){wn("IDB_UNEXPECTEDLY_CLOSED",{dbName:yn(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function ro(a,b,c){c=void 0===c?{}:c;return qo(a,b,c)}
function so(a,b){b=void 0===b?{}:b;var c,d,e,f;return z(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Sd)&&c.addEventListener("blocked",function(){e()}),g.yield(Vn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Aa(g),Ln(f,a,"",-1);})}
;function to(a,b){this.name=a;this.options=b;this.j=!0;this.v=this.l=0}
to.prototype.i=function(a,b,c){c=void 0===c?{}:c;return ro(a,b,c)};
to.prototype.delete=function(a){a=void 0===a?{}:a;return so(this.name,a)};
function uo(a,b){return new Hn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function vo(a,b){if(!b)throw Mn("openWithToken",yn(a.name));return a.open()}
to.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,r,w;return z(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",za(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:for(var B=h=y.i,G=c.options,J=[],H=v(Object.keys(G.xb)),T=H.next();!T.done;T=H.next()){T=T.value;var I=G.xb[T],ha=void 0===I.Je?Number.MAX_VALUE:I.Je;!(B.h.version>=I.Bb)||B.h.version>=ha||B.h.objectStoreNames.contains(T)||J.push(T)}k=J;if(0===k.length){y.B(5);break}l=Object.keys(c.options.xb);n=h.objectStoreNames();
if(c.v<U("ytidb_reopen_db_retries",0))return c.v++,h.close(),vn(new Hn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<U("ytidb_remake_db_retries",1))){y.B(6);break}c.l++;return y.yield(c.delete(),7);case 7:return vn(new Hn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new In(n,l);case 5:return y.return(h);case 2:p=Aa(y);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){y.B(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;r=t.h.version;if(void 0!==c.options.version&&r>c.options.version+1)throw t.close(),c.j=!1,uo(c,r);return y.return(t);case 8:throw b(),p instanceof Error&&!R("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ln(p,c.name,"",null!=(w=c.options.version)?w:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw uo(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,cf:b,upgrade:this.options.upgrade};return this.h=d=a()};var wo=new to("YtIdbMeta",{xb:{databases:{Bb:1}},upgrade:function(a,b){b(1)&&ao(a,"databases",{keyPath:"actualName"})}});
function xo(a,b){var c;return z(function(d){if(1==d.h)return d.yield(vo(wo,b),2);c=d.i;return d.return($n(c,["databases"],{ja:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Wn(f.h.put(a,void 0)).then(function(){})})}))})}
function yo(a,b){var c;return z(function(d){if(1==d.h)return a?d.yield(vo(wo,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function zo(a,b){var c,d;return z(function(e){return 1==e.h?(c=[],e.yield(vo(wo,b),2)):3!=e.h?(d=e.i,e.yield($n(d,["databases"],{ja:!0,mode:"readonly"},function(f){c.length=0;return ko(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return lo(g)})}),3)):e.return(c)})}
function Ao(a){return zo(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Bo(a,b,c){return zo(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Co(a){var b,c;return z(function(d){if(1==d.h)return b=Cm("YtIdbMeta hasAnyMeta other"),d.yield(zo(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Do,Eo=new function(){}(new function(){});
function Fo(){var a,b,c,d;return z(function(e){switch(e.h){case 1:a=nn();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=zn)f=/WebKit\/([0-9]+)/.exec(Lb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Lb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Fc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(xo(d,Eo),4);case 4:return e.yield(yo("yt-idb-test-do-not-use",Eo),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Go(){if(void 0!==Do)return Do;qn=!0;return Do=Fo().then(function(a){qn=!1;var b;if(null!=(b=mn())&&b.h){var c;b={hasSucceededOnce:(null==(c=nn())?void 0:c.hasSucceededOnce)||a};var d;null==(d=mn())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Ho(){return E("ytglobal.idbToken_")||void 0}
function Io(){var a=Ho();return a?Promise.resolve(a):Go().then(function(b){(b=b?Eo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Jo=0;function Ko(a,b){Jo||(Jo=Gi.na(function(){var c,d,e,f,g;return z(function(h){switch(h.h){case 1:return h.yield(Io(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(Bo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.B(6);break}f=e[0];return h.yield(so(f.actualName),7);case 7:return h.yield(yo(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Aa(h),vn(g),d=!1;case 4:Gi.oa(Jo),Jo=0,d&&Ko(a,b),h.h=0}})}))}
function Lo(){var a;return z(function(b){return 1==b.h?b.yield(Io(),2):(a=b.i)?b.return(Co(a)):b.return(!1)})}
new Wh;function Mo(a){if(!Bm())throw a=new Hn("AUTH_INVALID",{dbName:a}),vn(a),a;var b=Cm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function No(a,b,c,d){var e,f,g,h,k,l;return z(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Io(),2);case 2:g=n.i;if(!g)throw h=Mn("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),vn(h),h;xn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Mo(a);za(n,3);return n.yield(xo(k,g),5);case 5:return n.yield(ro(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Aa(n),za(n,7),n.yield(yo(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Aa(n);case 8:throw l;}})}
function Oo(a,b,c){c=void 0===c?{}:c;return No(a,b,!1,c)}
function Po(a,b,c){c=void 0===c?{}:c;return No(a,b,!0,c)}
function Qo(a,b){b=void 0===b?{}:b;var c,d;return z(function(e){if(1==e.h)return e.yield(Io(),2);if(3!=e.h){c=e.i;if(!c)return e.return();xn(a);d=Mo(a);return e.yield(so(d.actualName,b),3)}return e.yield(yo(d.actualName,c),0)})}
function Ro(a,b,c){a=a.map(function(d){return z(function(e){return 1==e.h?e.yield(so(d.actualName,b),2):e.yield(yo(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function So(){var a=void 0===a?{}:a;var b,c;return z(function(d){if(1==d.h)return d.yield(Io(),2);if(3!=d.h){b=d.i;if(!b)return d.return();xn("LogsDatabaseV2");return d.yield(Ao(b),3)}c=d.i;return d.yield(Ro(c,a,b),0)})}
function To(a,b){b=void 0===b?{}:b;var c;return z(function(d){if(1==d.h)return d.yield(Io(),2);if(3!=d.h){c=d.i;if(!c)return d.return();xn(a);return d.yield(so(a,b),3)}return d.yield(yo(a,c),0)})}
;function Uo(a,b){to.call(this,a,b);this.options=b;xn(a)}
x(Uo,to);function Vo(a,b){var c;return function(){c||(c=new Uo(a,b));return c}}
Uo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.lc?Po:Oo)(a,b,Object.assign({},c))};
Uo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.lc?To:Qo)(this.name,a)};
function Wo(a,b){return Vo(a,b)}
;var Xo={},Yo=Wo("ytGcfConfig",{xb:(Xo.coldConfigStore={Bb:1},Xo.hotConfigStore={Bb:1},Xo),lc:!1,upgrade:function(a,b){b(1)&&(io(ao(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),io(ao(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Zo(a){return vo(Yo(),a)}
function $o(a,b,c){var d,e,f;return z(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:X()},g.yield(Zo(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(co(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function ap(a,b,c,d){var e,f,g;return z(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:X()},h.yield(Zo(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(co(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function bp(a){var b,c;return z(function(d){return 1==d.h?d.yield(Zo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield($n(b,["coldConfigStore"],{mode:"readwrite",ja:!0},function(e){return oo(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function cp(a){var b,c;return z(function(d){return 1==d.h?d.yield(Zo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield($n(b,["hotConfigStore"],{mode:"readwrite",ja:!0},function(e){return oo(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function dp(){K.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ka(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
x(dp,K);dp.prototype.S=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;K.prototype.S.call(this)};function ep(){this.h=0;this.i=new dp}
function fp(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:P("RAW_HOT_CONFIG_GROUP")}
function gp(a,b,c){var d,e,f;return z(function(g){switch(g.h){case 1:if(!R("start_client_gcf")){g.B(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=Ho();if(!d){g.B(3);break}if(c){g.B(4);break}return g.yield(cp(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield($o(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function hp(a,b,c){var d,e,f,g;return z(function(h){if(1==h.h){if(!R("start_client_gcf"))return h.B(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Ho())?c?h.B(4):h.yield(bp(d),5):h.B(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return h.yield(ap(c,b,g,d),0)})}
function ip(){if(!ep.h){var a=new ep;ep.h=a}a=ep.h;var b=X()-a.h;if(!(0!==a.h&&b<U("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=X());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
ep.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function jp(){return"INNERTUBE_API_KEY"in dl&&"INNERTUBE_API_VERSION"in dl}
function kp(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),ne:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),nd:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Wf:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),pe:P("INNERTUBE_CONTEXT_HL"),oe:P("INNERTUBE_CONTEXT_GL"),qe:P("INNERTUBE_HOST_OVERRIDE")||"",se:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),re:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function lp(a){var b={client:{hl:a.pe,gl:a.oe,clientName:a.nd,clientVersion:a.innertubeContextClientVersion,configInfo:a.ne}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=yl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.nd;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=im()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(R("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=zm())&&b&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&(a=Am())&&
b&&(b.client.effectiveConnectionType=a);R("start_client_gcf")&&(e=ip())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(rl(P("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function mp(a,b,c){c=void 0===c?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||P("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Qf:(a=fm(em()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var np="undefined"!==typeof TextEncoder?new TextEncoder:null,op=np?function(a){return np.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function pp(a,b){this.version=a;this.args=b}
pp.prototype.serialize=function(){return{version:this.version,args:this.args}};function qp(a,b){this.topic=a;this.h=b}
qp.prototype.toString=function(){return this.topic};var rp=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.zb;L.prototype.publish=L.prototype.Ya;L.prototype.clear=L.prototype.clear;D("ytPubsub2Pubsub2Instance",rp);var sp=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",sp);var tp=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",tp);var up=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",up);
D("ytPubsub2Pubsub2SkipSubKey",null);function vp(a,b){var c=wp();c&&c.publish.call(c,a.toString(),a,b)}
function xp(a){var b=yp,c=wp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(sp[d])try{if(f&&b instanceof qp&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Wa){var l=new h;h.Wa=l.version}var n=h.Wa}catch(B){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var t=k.args,r=t.length;if(0<r){var w=Array(r);for(k=0;k<r;k++)w[k]=t[k];var y=w}else y=[];f=p.call(n,h,y)}catch(B){throw B.message="yt.pubsub2.Data.deserialize(): "+B.message,B;}}catch(B){throw B.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+B.message,B;}a.call(window,f)}catch(B){jl(B)}},up[b.toString()]?E("yt.scheduler.instance")?Gi.na(g):Cl(g,0):g())});
sp[d]=!0;tp[b.toString()]||(tp[b.toString()]=[]);tp[b.toString()].push(d);return d}
function zp(){var a=Ap,b=xp(function(c){a.apply(void 0,arguments);Bp(b)});
return b}
function Bp(a){var b=wp();b&&("number"===typeof a&&(a=[a]),db(a,function(c){b.unsubscribeByKey(c);delete sp[c]}))}
function wp(){return E("ytPubsub2Pubsub2Instance")}
;function Cp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&vp("meta_logging_csi_event",{timerName:a,ng:b})}
;var Dp=void 0,Ep=void 0;function Fp(){Ep||(Ep=Gk(P("WORKER_SERIALIZATION_URL")));return Ep||void 0}
function Gp(){var a=Fp();Dp||void 0===a||(Dp=new Worker(Cb(a),void 0));return Dp}
;var Hp=U("max_body_size_to_compress",5E5),Ip=U("min_body_size_to_compress",500),Jp=!0,Kp=0,Lp=0,Mp=U("compression_performance_threshold_lr",250),Np=U("slow_compressions_before_abandon_count",4),Op=!1,Pp=new Map,Qp=1,Rp=!0;function Sp(){if("function"===typeof Worker&&Fp()&&!Op){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Pp.get(c.key);d&&(Tp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Pp.delete(c.key))}},b=Gp();
b&&(b.addEventListener("message",a),b.onerror=function(){Pp.clear()},Op=!0)}}
function Up(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:X(),ticks:{},infos:{}};if(Jp)try{var g=Vp(b);if(null!=g&&(g>Hp||g<Ip))d(a,c);else{if(R("gzip_gel_with_worker")&&(R("initial_gzip_use_main_thread")&&!Rp||!R("initial_gzip_use_main_thread"))){Op||Sp();var h=Gp();if(h&&!e){Pp.set(Qp,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Qp});Qp++;return}}var k=Fk(op(b));Tp(k,f,a,c,d)}}catch(l){kl(l),d(a,c)}else d(a,c)}
function Tp(a,b,c,d,e){Rp=!1;var f=X();b.ticks.gelc=f;Lp++;R("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Mp&&(Kp++,R("abandon_compression_after_N_slow_zips")?Lp===U("compression_disable_point")&&Kp>Np&&(Jp=!1):Jp=!1);Wp(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Xp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=X(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Jp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Vp(g);if(null!=h&&(h>Hp||h<Ip))return a;c=b?{level:1}:void 0;f=Fk(op(g),c);var k=X();e.ticks.gelc=k;if(b){Lp++;if((R("disable_compression_due_to_performance_degredation")||R("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Mp)if(Kp++,R("abandon_compression_after_N_slow_zips")||R("abandon_compression_after_N_slow_zips_lr")){b=Kp/Lp;var l=Np/U("compression_disable_point");0<Lp&&0===Lp%U("compression_disable_point")&&b>=l&&(Jp=!1)}else Jp=!1;Wp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return kl(n),a}}else return a}
function Vp(a){try{return(new Blob(a.split(""))).size}catch(b){return kl(b),null}}
function Wp(a){R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||Cp("gel_compression",a,{sampleRate:.1})}
;function Yp(a){a=Object.assign({},a);delete a.Authorization;var b=Lg();if(b){var c=new Mi;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=ye(c.digest(),3)}return a}
;var Zp;function $p(){Zp||(Zp=new ln("yt.innertube"));return Zp}
function aq(a,b,c,d){if(d)return null;d=$p().get("nextId",!0)||1;var e=$p().get("requests",!0)||{};e[d]={method:a,request:b,authState:Yp(c),requestTime:Math.round(X())};$p().set("nextId",d+1,86400,!0);$p().set("requests",e,86400,!0);return d}
function bq(a){var b=$p().get("requests",!0)||{};delete b[a];$p().set("requests",b,86400,!0)}
function cq(a){var b=$p().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(X())-d.requestTime)){var e=d.authState,f=Yp(mp(!1));qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(X())),dq(a,d.method,e,{}));delete b[c]}}$p().set("requests",b,86400,!0)}}
;function eq(a){this.Sb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.pb=function(){};
this.now=Date.now;this.Eb=!1;var b;this.Gd=null!=(b=a.Gd)?b:100;var c;this.Ad=null!=(c=a.Ad)?c:1;var d;this.yd=null!=(d=a.yd)?d:2592E6;var e;this.wd=null!=(e=a.wd)?e:12E4;var f;this.zd=null!=(f=a.zd)?f:5E3;var g;this.U=null!=(g=a.U)?g:void 0;this.Xb=!!a.Xb;var h;this.Vb=null!=(h=a.Vb)?h:.1;var k;this.hc=null!=(k=a.hc)?k:10;a.handleError&&(this.handleError=a.handleError);a.pb&&(this.pb=a.pb);a.Eb&&(this.Eb=a.Eb);a.Sb&&(this.Sb=a.Sb);this.V=a.V;this.Da=a.Da;this.da=a.da;this.aa=a.aa;this.sendFn=a.sendFn;
this.Nc=a.Nc;this.Kc=a.Kc;fq(this)&&(!this.V||this.V("networkless_logging"))&&gq(this)}
function gq(a){fq(a)&&!a.Eb&&(a.h=!0,a.Xb&&Math.random()<=a.Vb&&a.da.Ud(a.U),hq(a),a.aa.va()&&a.Ob(),a.aa.listen(a.Nc,a.Ob.bind(a)),a.aa.listen(a.Kc,a.bd.bind(a)))}
m=eq.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(fq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.da.set(d,this.U).then(function(e){d.id=e;c.aa.va()&&iq(c,d)}).catch(function(e){iq(c,d);
jq(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(fq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.V&&this.V("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.va()||this.V&&this.V("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return z(function(k){if(1==k.h)return k.yield(d.da.set(e,d.U).catch(function(l){jq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.da.set(e,this.U).catch(function(g){d.sendFn(a,b,e.skipRetry);
jq(d,g)})}else this.sendFn(a,b,this.V&&this.V("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(fq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.da.nb(d.id,c.U):e=!0;c.aa.gb&&c.V&&c.V("vss_network_hint")&&c.aa.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.da.set(d,this.U).then(function(g){d.id=g;e&&c.da.nb(d.id,c.U)}).catch(function(g){jq(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Ob=function(){var a=this;if(!fq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.na(function(){var b;return z(function(c){if(1==c.h)return c.yield(a.da.kd("NEW",a.U),2);if(3!=c.h)return b=c.i,b?c.yield(iq(a,b),3):(a.bd(),c.return());a.i&&(a.i=0,a.Ob());c.h=0})},this.Gd))};
m.bd=function(){this.Da.oa(this.i);this.i=0};
function iq(a,b){var c;return z(function(d){switch(d.h){case 1:if(!fq(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return d.yield(a.da.we(b.id,a.U),3);case 3:(c=d.i)||a.pb(Error("The request cannot be found in the database."));case 2:if(kq(a,b,a.yd)){d.B(4);break}a.pb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return d.yield(a.da.nb(b.id,a.U),5);case 5:return d.return();case 4:b.skipRetry||(b=lq(a,
b));if(!b){d.B(0);break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return d.yield(a.da.nb(b.id,a.U),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function lq(a,b){if(!fq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return z(function(n){switch(n.h){case 1:g=mq(f);(h=nq(f))&&a.V&&a.V("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.V&&a.V("nwl_consider_error_code")&&g||a.V&&!a.V("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.hc)){n.B(2);break}if(!a.aa.kc){n.B(3);break}return n.yield(a.aa.kc(),3);case 3:if(a.aa.va()){n.B(2);break}c(e,f);if(!a.V||!a.V("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.B(6);
break}return n.yield(a.da.Pc(b.id,a.U,!1),6);case 6:return n.return();case 2:if(a.V&&a.V("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.hc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.B(8);break}return b.sendCount<a.Ad?n.yield(a.da.Pc(b.id,a.U,!0,h?!1:void 0),12):n.yield(a.da.nb(b.id,a.U),8);case 12:a.Da.na(function(){a.aa.va()&&a.Ob()},a.zd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return z(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):h.yield(a.da.nb(b.id,a.U),2);a.aa.gb&&a.V&&a.V("vss_network_hint")&&a.aa.gb(!0);d(e,f);h.h=0})};
return b}
function kq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function hq(a){if(!fq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.da.kd("QUEUED",a.U).then(function(b){b&&!kq(a,b,a.wd)?a.Da.na(function(){return z(function(c){if(1==c.h)return void 0===b.id?c.B(2):c.yield(a.da.Pc(b.id,a.U),2);hq(a);c.h=0})}):a.aa.va()&&a.Ob()})}
function jq(a,b){a.Md&&!a.aa.va()?a.Md(b):a.handleError(b)}
function fq(a){return!!a.U||a.Sb}
function mq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function nq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var oq;
function pq(){if(oq)return oq();var a={};oq=Wo("LogsDatabaseV2",{xb:(a.LogsRequestsStore={Bb:2},a),lc:!1,upgrade:function(b,c,d){c(2)&&ao(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),io(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return oq()}
;function qq(a){return vo(pq(),a)}
function rq(a,b){var c,d,e,f;return z(function(g){if(1==g.h)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(qq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(co(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=X();sq(c);return g.return(f)})}
function tq(a,b){var c,d,e,f,g,h,k;return z(function(l){if(1==l.h)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(qq(b),2);if(3!=l.h)return d=l.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,X()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield($n(d,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(n){return oo(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===
a&&(k.status="QUEUED",p.update(k)))})}),3);
c.ticks.tc=X();sq(c);return l.return(k)})}
function uq(a,b){var c;return z(function(d){if(1==d.h)return d.yield(qq(b),2);c=d.i;return d.return($n(c,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Wn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function vq(a,b,c,d){c=void 0===c?!0:c;var e;return z(function(f){if(1==f.h)return f.yield(qq(b),2);e=f.i;return f.return($n(e,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Wn(h.h.put(k,void 0)).then(function(){return k})):Qn.resolve(void 0)})}))})}
function wq(a,b){var c;return z(function(d){if(1==d.h)return d.yield(qq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function xq(a){var b,c;return z(function(d){if(1==d.h)return d.yield(qq(a),2);b=d.i;c=X()-2592E6;return d.yield($n(b,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){return ko(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return lo(f)})})}),0)})}
function yq(){z(function(a){return a.yield(So(),0)})}
function sq(a){R("nwl_csi_killswitch")||Cp("networkless_performance",a,{sampleRate:1})}
;var zq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var Aq={},Bq=Wo("ServiceWorkerLogsDatabase",{xb:(Aq.SWHealthLog={Bb:1},Aq),lc:!0,upgrade:function(a,b){b(1)&&io(ao(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Cq(a){return vo(Bq(),a)}
function Dq(a){var b,c;z(function(d){if(1==d.h)return d.yield(Cq(a),2);b=d.i;c=X()-2592E6;return d.yield($n(b,["SWHealthLog"],{mode:"readwrite",ja:!0},function(e){return ko(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return lo(f)})})}),0)})}
function Eq(a){var b;return z(function(c){if(1==c.h)return c.yield(Cq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Fq={},Gq=0;function Hq(a){var b=new Image,c=""+Gq++;Fq[c]=b;b.onload=b.onerror=function(){delete Fq[c]};
b.src=a}
;function Iq(){this.h=new Map;this.i=!1}
function Jq(){if(!Iq.h){var a=E("yt.networkRequestMonitor.instance")||new Iq;D("yt.networkRequestMonitor.instance",a);Iq.h=a}return Iq.h}
Iq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Iq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Iq.prototype.removeParams=function(a){return a.split("?")[0]};
Iq.prototype.removeParams=Iq.prototype.removeParams;Iq.prototype.isEndpointCFR=Iq.prototype.isEndpointCFR;Iq.prototype.requestComplete=Iq.prototype.requestComplete;Iq.getInstance=Jq;var Kq;function Lq(){Kq||(Kq=new ln("yt.offline"));return Kq}
function Mq(a){if(R("offline_error_handling")){var b=Lq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Lq().set("errors",b,2592E3,!0)}}
;function Nq(){qd.call(this);var a=this;this.j=!1;this.i=Fi();this.i.listen("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=Lq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new W(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;jl(d)}Lq().set("errors",{},2592E3,!0)}}})}
x(Nq,qd);function Oq(){if(!Nq.h){var a=E("yt.networkStatusManager.instance")||new Nq;D("yt.networkStatusManager.instance",a);Nq.h=a}return Nq.h}
m=Nq.prototype;m.va=function(){return this.i.va()};
m.gb=function(a){this.i.i=a};
m.je=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Zd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.kc=function(a){a=Di(this.i,a);a.then(function(b){R("use_cfr_monitor")&&Jq().requestComplete("generate_204",b)});
return a};
Nq.prototype.sendNetworkCheckRequest=Nq.prototype.kc;Nq.prototype.listen=Nq.prototype.listen;Nq.prototype.enableErrorFlushing=Nq.prototype.Zd;Nq.prototype.getWindowStatus=Nq.prototype.je;Nq.prototype.networkStatusHint=Nq.prototype.gb;Nq.prototype.isNetworkAvailable=Nq.prototype.va;Nq.getInstance=Oq;function Pq(a){a=void 0===a?{}:a;qd.call(this);var b=this;this.i=this.m=0;this.j=Oq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Qq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Qq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){rd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){rd(b,"publicytnetworkstatus-offline")})))}
x(Pq,qd);Pq.prototype.va=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Pq.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Pq.prototype.kc=function(a){var b=this,c;return z(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&Jq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.va())})):c?d.return(c(a)):d.return(!0)})};
function Qq(a,b){a.rateLimit?a.i?(Gi.oa(a.m),a.m=Gi.na(function(){a.l!==b&&(rd(a,b),a.l=b,a.i=X())},a.rateLimit-(X()-a.i))):(rd(a,b),a.l=b,a.i=X()):rd(a,b)}
;var Rq;function Sq(){var a=eq.call;Rq||(Rq=new Pq({ag:!0,Uf:!0}));a.call(eq,this,{da:{Ud:xq,nb:wq,kd:tq,we:uq,Pc:vq,set:rq},aa:Rq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;kl(new W(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else jl(b)},
pb:kl,sendFn:Tq,now:X,Md:Mq,Da:kn(),Nc:"publicytnetworkstatus-online",Kc:"publicytnetworkstatus-offline",Xb:!0,Vb:.1,hc:U("potential_esf_error_limit",10),V:R,Eb:!(Bm()&&Uq())});this.j=new Wh;R("networkless_immediately_drop_all_requests")&&yq();To("LogsDatabaseV2")}
x(Sq,eq);function Vq(){var a=E("yt.networklessRequestController.instance");a||(a=new Sq,D("yt.networklessRequestController.instance",a),R("networkless_logging")&&Io().then(function(b){a.U=b;gq(a);a.j.resolve();a.Xb&&Math.random()<=a.Vb&&a.U&&Dq(a.U);R("networkless_immediately_drop_sw_health_store")&&Wq(a)}));
return a}
Sq.prototype.writeThenSend=function(a,b){b||(b={});Bm()||(this.h=!1);eq.prototype.writeThenSend.call(this,a,b)};
Sq.prototype.sendThenWrite=function(a,b,c){b||(b={});Bm()||(this.h=!1);eq.prototype.sendThenWrite.call(this,a,b,c)};
Sq.prototype.sendAndWrite=function(a,b){b||(b={});Bm()||(this.h=!1);eq.prototype.sendAndWrite.call(this,a,b)};
Sq.prototype.awaitInitialization=function(){return this.j.promise};
function Wq(a){var b;z(function(c){if(!a.U)throw b=Mn("clearSWHealthLogsDb"),b;return c.return(Eq(a.U).catch(function(d){a.handleError(d)}))})}
function Tq(a,b,c,d){d=void 0===d?!1:d;b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_cfr_monitor")&&Xq(a,b);if(R("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(X())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)Ml(a,void 0,"POST",f);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||
h)Ml(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new $a({url:a});if(k.j&&k.i||k.l){var l=Zb($b(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(kc),t=jc(a,0,"ri",p);if(0>t)var r=null;else{var w=a.indexOf("&",t);if(0>w||w>p)w=p;r=decodeURIComponent(a.slice(t+3,-1!==w?w:0).replace(/\+/g," "))}n="1"!==r}var y=!n;break b}}catch(G){}y=!1}if(y){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var B=!0;break b}}catch(G){}B=!1}c=B?!0:!1}else c=
!1;c||Hq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Up(a,b.postBody,b,Jl,d)):Up(a,JSON.stringify(b.postParams),b,Rl,d):Jl(a,b)}
function Xq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Jq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Jq().requestComplete(a,!0);d(e,f)}}
function Uq(){return"www.youtube-nocookie.com"!==ac(document.location.toString())}
;var Yq=!1,Zq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Yq};D("ytNetworklessLoggingInitializationOptions",Zq);function $q(){var a;z(function(b){if(1==b.h)return b.yield(Io(),2);a=b.i;if(!a||!Bm()&&!R("nwl_init_require_datasync_id_killswitch")||!Uq())return b.B(0);Yq=!0;Zq.isNwlInitialized=Yq;return b.yield(Vq().awaitInitialization(),0)})}
;function ar(a){var b=this;this.config_=null;a?this.config_=a:jp()&&(this.config_=kp());Em(function(){cq(b)},5E3)}
ar.prototype.isReady=function(){!this.config_&&jp()&&(this.config_=kp());return!!this.config_};
function dq(a,b,c,d){function e(w){w=void 0===w?!1:w;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(w||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=aq(b,c,l,k)),y)){var B=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(T,I){bq(y);B(T,I)};
c.onFetchSuccess=function(T,I){bq(y);G(T,I)}}try{if(w&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Vq().writeThenSend(r,g):Vq().sendAndWrite(r,g);
else if(d.compress){var J=!d.networklessOptions.writeThenSend;if(g.postBody){var H=g.postBody;"string"!==typeof H&&(H=JSON.stringify(g.postBody));Up(r,H,g,Jl,J)}else Up(r,JSON.stringify(g.postParams),g,Rl,J)}else R("web_all_payloads_via_jspb")?Jl(r,g):Rl(r,g)}catch(T){if("InvalidAccessError"==T.name)y&&(bq(y),y=0),kl(Error("An extension is blocking network request."));else throw T;}y&&Em(function(){cq(a)},5E3)}
!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&kl(new W("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new W("innertube xhrclient not ready",b,c,d);jl(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(w,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(w){if(d.onSuccess)d.onSuccess(w)},
onError:function(w,y){if(d.onError)d.onError(y)},
onFetchError:function(w){if(d.onError)d.onError(w)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.qe)&&(h=f);var k=a.config_.se||!1,l=mp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.re&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var r=tl(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Zq.isNwlInitialized:Yq)?Go().then(function(w){e(w)}):e(!1)}
;var br=0,cr=Hc?"webkit":Gc?"moz":Ec?"ms":Dc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++br});var dr={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function er(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in dr||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function fr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
er.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
er.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
er.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var mb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",mb);var gr=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",gr);
function hr(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var ir=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function jr(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=hr(a,b,c,d);if(e)return e;e=++gr.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new er(h);if(!Ad(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new er(h);
h.currentTarget=a;return c.call(a,h)};
g=il(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ir()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);mb[e]=[a,b,c,g,d];return e}
function kr(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in mb){var c=mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ir()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete mb[b]}}))}
;function lr(a){this.D=a;this.h=null;this.l=0;this.A=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.T=jr(window,"mousemove",Ua(this.X,this));a=Ua(this.P,this);"function"===typeof a&&(a=il(a));this.ba=window.setInterval(a,25)}
Xa(lr,K);lr.prototype.X=function(a){void 0===a.h&&fr(a);var b=a.h;void 0===a.i&&fr(a);this.h=new wd(b,a.i)};
lr.prototype.P=function(){if(this.h){var a=X();if(0!=this.l){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.A=this.h;this.j=(this.j+1)%4}};
lr.prototype.S=function(){window.clearInterval(this.ba);kr(this.T)};var mr={};
function nr(a){var b=void 0===a?{}:a;a=void 0===b.Fe?!1:b.Fe;b=void 0===b.ae?!0:b.ae;if(null==E("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&or();jr(document,"keydown",or);jr(document,"keyup",or);jr(document,"mousedown",or);jr(document,"mouseup",or);a?jr(window,"touchmove",function(){pr("touchmove",200)},{passive:!0}):(jr(window,"resize",function(){pr("resize",200)}),b&&jr(window,"scroll",function(){pr("scroll",200)}));
new lr(function(){pr("mouse",100)});
jr(document,"touchstart",or,{passive:!0});jr(document,"touchend",or,{passive:!0})}}
function pr(a,b){mr[a]||(mr[a]=!0,Gi.na(function(){or();mr[a]=!1},b))}
function or(){null==E("_lact",window)&&nr();var a=Date.now();D("_lact",a,window);-1==E("_fact",window)&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function qr(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var rr=C.ytPubsubPubsubInstance||new L,sr=C.ytPubsubPubsubSubscribedKeys||{},tr=C.ytPubsubPubsubTopicToKeys||{},ur=C.ytPubsubPubsubIsSynchronous||{};function vr(a,b){var c=wr();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){sr[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{ur[a]?f():Cl(f,0)}catch(g){jl(g)}},void 0);
sr[d]=!0;tr[a]||(tr[a]=[]);tr[a].push(d);return d}return 0}
function xr(a){var b=wr();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),db(a,function(c){b.unsubscribeByKey(c);delete sr[c]}))}
function yr(a,b){var c=wr();c&&c.publish.apply(c,arguments)}
function zr(a){var b=wr();if(b)if(b.clear(a),a)Ar(a);else for(var c in tr)Ar(c)}
function wr(){return C.ytPubsubPubsubInstance}
function Ar(a){tr[a]&&(a=tr[a],db(a,function(b){sr[b]&&delete sr[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.zb;L.prototype.publish=L.prototype.Ya;L.prototype.clear=L.prototype.clear;D("ytPubsubPubsubInstance",rr);D("ytPubsubPubsubTopicToKeys",tr);D("ytPubsubPubsubIsSynchronous",ur);D("ytPubsubPubsubSubscribedKeys",sr);var Br=Symbol("injectionDeps");function Cr(a){this.name=a}
Cr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Dr(a){this.key=a}
function Er(){this.i=new Map;this.j=new Map;this.h=new Map}
function Fr(a,b){a.i.set(b.jc,b);var c=a.j.get(b.jc);c&&c.ig(a.resolve(b.jc))}
Er.prototype.resolve=function(a){return a instanceof Dr?Gr(this,a.key,[],!0):Gr(this,a,[])};
function Gr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.Jd)var e=d.Jd;else if(d.jf)e=d[Br]?Hr(a,d[Br],c):[],e=d.jf.apply(d,ka(e));else if(d.Id){e=d.Id;var f=e[Br]?Hr(a,e[Br],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.mg||a.h.set(b,e);return e}
function Hr(a,b,c){return b?b.map(function(d){return d instanceof Dr?Gr(a,d.key,c,!0):Gr(a,d,c)}):[]}
;var Ir;function Jr(){Ir||(Ir=new Er);return Ir}
;var Kr=window;function Lr(){var a,b;return"h5vcc"in Kr&&(null==(a=Kr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Kr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Kr&&Kr.performance.mark&&Kr.performance.measure?2:0}
function Mr(a){switch(Lr()){case 1:Kr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Kr.performance.mark(a+"-start");break;case 0:break;default:ni()}}
function Nr(a){switch(Lr()){case 1:Kr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Kr.performance.mark(c);Kr.performance.measure(a,b,c);break;case 0:break;default:ni()}}
;var Or=R("web_enable_lifecycle_monitoring")&&0!==Lr(),Pr=R("web_enable_lifecycle_monitoring");function Qr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?kn():d;this.j=c;this.scheduler=d;this.i=new Wh;this.h=a;for(a={cb:0};a.cb<this.h.length;a={fc:void 0,cb:a.cb},a.cb++)a.fc=this.h[a.cb],c=function(e){return function(){e.fc.Dc();b.h[e.cb].ic=!0;b.h.every(function(f){return!0===f.ic})&&b.i.resolve()}}(a),d=this.getPriority(a.fc),d=this.scheduler.ab(c,d),this.h[a.cb]=Object.assign({},a.fc,{Dc:c,
jobId:d})}
function Rr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.ic||(a.scheduler.oa(c.jobId),a.scheduler.ab(c.Dc,10))}
Qr.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.ic||this.scheduler.oa(b.jobId),b.ic=!0;this.i.resolve()};
Qr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Sr(a){this.state=a;this.plugins=[];this.l=void 0;this.A={};Or&&Mr(this.state)}
m=Sr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;A.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Or&&Nr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Rr(this.j),this.j=void 0);Tr(this,a,b);this.state=a;Or&&Mr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Ur(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Ur(a,b){var c=b.filter(function(e){return 10===Vr(a,e)}),d=b.filter(function(e){return 10!==Vr(a,e)});
return a.A.lg?function(){var e=A.apply(0,arguments);return z(function(f){if(1==f.h)return f.yield(a.Me.apply(a,[c].concat(ka(e))),2);a.Dd.apply(a,[d].concat(ka(e)));f.h=0})}:function(){var e=A.apply(0,arguments);
a.Ne.apply(a,[c].concat(ka(e)));a.Dd.apply(a,[d].concat(ka(e)))}}
m.Ne=function(a){for(var b=A.apply(1,arguments),c=kn(),d=v(a),e=d.next(),f={};!e.done;f={Gb:void 0},e=d.next())f.Gb=e.value,c.Ab(function(g){return function(){Wr(g.Gb.name);g.Gb.callback.apply(g.Gb,ka(b));Xr(g.Gb.name)}}(f))};
m.Me=function(a){var b=A.apply(1,arguments),c,d,e,f,g;return z(function(h){1==h.h&&(c=kn(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.B(0);f.tb=e.value;f.Qb=void 0;g=function(k){return function(){Wr(k.tb.name);var l=k.tb.callback.apply(k.tb,ka(b));"function"===typeof(null==l?void 0:l.then)?k.Qb=l.then(function(){Xr(k.tb.name)}):Xr(k.tb.name)}}(f);
c.Ab(g);return f.Qb?h.yield(f.Qb,3):h.B(3)}f={tb:void 0,Qb:void 0};e=d.next();return h.B(2)})};
m.Dd=function(a){var b=A.apply(1,arguments),c=this,d=a.map(function(e){return{Dc:function(){Wr(e.name);e.callback.apply(e,ka(b));Xr(e.name)},
priority:Vr(c,e)}});
d.length&&(this.j=new Qr(d))};
function Vr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Wr(a){Or&&a&&Mr(a)}
function Xr(a){Or&&a&&Nr(a)}
function Tr(a,b,c){Pr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(Sr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Yr(a){Sr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.v},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Zr;x(Yr,Sr);Yr.prototype.i=function(a,b){var c=this;this.h=Em(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Yr.prototype.v=function(a,b){this.h&&(Gi.oa(this.h),this.h=null);a(null==b?void 0:b.event)};
function $r(){Zr||(Zr=new Yr);return Zr}
;var as=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return as});function bs(){this.store={};this.h={}}
bs.prototype.storePayload=function(a,b){a=cs(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
bs.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=ds(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ka(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ka(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ka(this.smartExtractMatchingEntries(a))));return c};
bs.prototype.extractMatchingEntries=function(a){a=ds(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
bs.prototype.getSequenceCount=function(a){a=ds(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function ds(a,b){var c=cs(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&cs(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(es(b.auth,g[0])){var h=b.isJspb;es(void 0===h?"undefined":h?"true":"false",g[1])&&es(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),es(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function es(a,b){return void 0===a||"undefined"===a?!0:a===b}
bs.prototype.getSequenceCount=bs.prototype.getSequenceCount;bs.prototype.extractMatchingEntries=bs.prototype.extractMatchingEntries;bs.prototype.smartExtractMatchingEntries=bs.prototype.smartExtractMatchingEntries;bs.prototype.storePayload=bs.prototype.storePayload;function cs(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function gs(a,b){if(a)return a[b.name]}
;var hs=U("initial_gel_batch_timeout",2E3),is=U("gel_queue_timeout_max_ms",6E4),js=Math.pow(2,16)-1,ks=U("gel_min_batch_size",5),ls=void 0;function ms(){this.l=this.h=this.i=0;this.j=!1}
var ns=new ms,ps=new ms,qs=new ms,rs=new ms,ss,ts=!0,us=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",us);var vs={};function ws(){var a=E("yt.logging.ims");a||(a=new bs,D("yt.logging.ims",a));return a}
function xs(a,b){if("log_event"===a.endpoint){ys();var c=zs(a),d=As(a.payload)||"";a:{if(R("enable_web_tiered_gel")){var e=zq[d||""];var f,g,h,k=null==Jr().resolve(new Dr(ep))?void 0:null==(f=fp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!R("web_payload_policy_disabled_killswitch"))return;k=Bs(e.tier);if(400===k){Cs(a,b);return}}vs[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};ws().storePayload(e,a.payload);Ds(b,c,e,"gelDebuggingEvent"===d)}}
function Ds(a,b,c,d){function e(){Es({writeThenSend:!0},R("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(ls=new a);a=U("tvhtml5_logging_max_batch_ads_fork")||U("web_logging_max_batch")||100;var g=X(),h=Fs(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=ws().getSequenceCount(c));1E3<=d?e():d>=a?ss||(ss=Gs(function(){e();ss=void 0},0)):10<=g-k&&(Hs(f,c.tier),h.l=g)}
function Cs(a,b){if("log_event"===a.endpoint){ys();var c=zs(a),d=new Map;d.set(c,[a.payload]);var e=As(a.payload)||"";b&&(ls=new b);return new Nd(function(f,g){ls&&ls.isReady()?Is(d,ls,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function zs(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);us[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Es(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Nd(function(e,f){var g=Fs(c,d),h=g.j;g.j=!1;Js(g.i);Js(g.h);g.h=0;ls&&ls.isReady()?void 0===d&&R("enable_web_tiered_gel")?Ks(e,f,a,b,c,300,h):Ks(e,f,a,b,c,d,h):(Hs(c,d),e())})}
function Ks(a,b,c,d,e,f,g){var h=ls;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=R("enable_web_tiered_gel")?ws().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):ws().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(vs)),l=d.next();!l.done;l=d.next())l=l.value,e=R("enable_web_tiered_gel")?ws().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):ws().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete vs[l];Is(k,h,a,b,c,!1,g)}
function Hs(a,b){function c(){Es({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Fs(a,b),e=d===rs||d===qs?5E3:is;R("web_gel_timeout_cap")&&!d.h&&(e=Gs(function(){c()},e),d.h=e);
Js(d.i);e=P("LOGGING_BATCH_TIMEOUT",U("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&ts&&(e=hs);e=Gs(function(){0<U("gel_min_batch_size")?ws().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=ks&&c():c()},e);
d.i=e}
function Is(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(X()),k=a.size,l=(void 0===g?0:g)&&R("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={Jc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Mc:void 0,Lc:void 0},n=a.next()){var p=v(n.value);n=p.next().value;p=p.next().value;g.batchRequest=tb({context:lp(b.config_||kp())});if(!Na(p)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=us[n])&&
Ls(g.batchRequest,n,p);delete us[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;Ms(g.batchRequest,h,g.dangerousLogToVisitorSession);R("always_send_and_write")&&(e.writeThenSend=!1);g.Mc=function(t){R("start_client_gcf")&&Gi.na(function(){return z(function(r){return r.yield(Ns(t),0)})});
k--;k||c()};
g.Jc=0;g.Lc=function(t){return function(){t.Jc++;if(e.bypassNetworkless&&1===t.Jc)try{dq(b,l,t.batchRequest,Os({writeThenSend:!0},t.dangerousLogToVisitorSession,t.Mc,t.Lc,f)),ts=!1}catch(r){jl(r),d()}k--;k||c()}}(g);
try{dq(b,l,g.batchRequest,Os(e,g.dangerousLogToVisitorSession,g.Mc,g.Lc,f)),ts=!1}catch(t){jl(t),d()}}}
function Os(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Rf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};Ps()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));return a}
function Ms(a,b,c){Ps()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&((c=P("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*js/2)),c++,c>js&&(c=1),el("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Ls(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function ys(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=xl("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(as=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",as),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Ps(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Gs(a,b){return!1===R("embeds_transport_use_scheduler")?Cl(a,b):R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?Em(function(){if("none"===$r().currentState)a();else{var c={};$r().install((c.none={callback:a},c))}},b):Em(a,b)}
function Js(a){R("transport_use_scheduler")?Gi.oa(a):window.clearTimeout(a)}
function Ns(a){var b,c,d,e,f,g,h,k,l,n;return z(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=gs(d,Kk),g=null==(f=d)?void 0:f.hotHashData,h=gs(d,Jk),l=null==(k=d)?void 0:k.coldHashData,(n=Jr().resolve(new Dr(ep)))?g?e?p.yield(gp(n,g,e),2):p.yield(gp(n,g),2):p.B(2):p.return()):l?h?p.yield(hp(n,l,h),0):p.yield(hp(n,l),0):p.B(0)})}
function Fs(a,b){b=void 0===b?200:b;return a?300===b?rs:ps:300===b?qs:ns}
function As(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,zq[b])return b}
function Bs(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Qs=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Qs);
function Rs(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||X());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=qr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Qs[b]=b in Qs?Qs[b]+1:0,a.sequence={index:Qs[b],groupKey:b},d.endOfSequence&&delete Qs[d.sequenceGroup]);(d.sendIsolatedPayload?Cs:xs)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function un(a,b,c){c=void 0===c?{}:c;var d=ar;P("ytLoggingEventsDefaultDisabled",!1)&&ar===ar&&(d=null);R("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=qr(),c.timestamp=X());Rs(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Ss=new Set,Ts=0,Us=0,Vs=0,Ws=[],Xs=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function tn(a){Ys(a)}
function Zs(a){Ys(a,"WARNING")}
function $s(a){a instanceof Error?Ys(a):(a=Oa(a)?JSON.stringify(a):String(a),a=new W(a),a.name="RejectedPromiseError",Zs(a))}
function Ys(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),R("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Ts))){d=Ws;var k=vc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(p=am(a.args[t],"params."+t,c,p),
500<=p);t++);else if(a.hasOwnProperty("params")&&a.params){var r=a.params;if("object"===typeof a.params)for(t in r){if(r[t]){var w="params."+t,y=cm(r[t]);c[w]=y;p+=w.length+y.length;if(500<p)break}}else c.params=cm(r)}if(d.length)for(t=0;t<d.length&&!(p=am(d[t],"params.context."+t,c,p),500<=p);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Xl();c=v(a.Ta);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.cg)){a=d.weight;break a}a=v(a.Qa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=v(Sl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ec[t.name])for(e=v(c.ec[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Hc(f);break}t.params||(t.params={});a=Xl();t.params["params.errorServiceSignature"]="msg="+a.Ta.length+"&cb="+a.Qa.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Ab("sample").constructor!==yb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!Ss.has(t.message)){if(g&&R("web_enable_error_204"))at(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Yl.Ya("handleError",t),R("record_app_crashed_web")&&0===Vs&&1===t.sampleWeight&&(Vs++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},R("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),un("appCrashed",g)),Us++):"WARNING"===b&&Yl.Ya("handleWarning",t);if(R("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(Xs);for(c=a.next();!c.done;c=a.next())if(An(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));d=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!fl("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=t.params)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=P("SERVER_NAME");e=P("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(un("clientError",h),("ERROR"===g||R("errors_flush_gel_always_killswitch"))&&Es(void 0,void 0,!1))}R("suppress_error_204_logging")||at(b,t)}try{Ss.add(t.message)}catch(B){}Ts++}}}
function at(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=P("SERVER_NAME");b=P("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Jl(P("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function bt(){this.register=new Map}
function ct(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.gg("ABORTED")}
bt.prototype.clear=function(){ct(this);this.register.clear()};
var dt=new bt;var et=Date.now().toString();function ft(){for(var a=Array(16),b=0;16>b;b++){for(var c=Date.now(),d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(et)for(b=1,c=0;c<et.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^et.charCodeAt(c),b++;return a}
function gt(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=ft()}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));return a.join("")}
;var ht,jt=C.ytLoggingDocDocumentNonce_;jt||(jt=gt(),D("ytLoggingDocDocumentNonce_",jt));ht=jt;function kt(a){this.h=a}
m=kt.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Rk;void 0!==this.h.trackingParams?a.setTrackingParams(this.h.trackingParams):(void 0!==this.h.veType&&Yf(a,2,zf(this.h.veType)),void 0!==this.h.veCounter&&Yf(a,6,zf(this.h.veCounter)),void 0!==this.h.elementIndex&&Yf(a,3,zf(this.h.elementIndex)),this.h.isCounterfactual&&Yf(a,5,wf(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();hg(a,Rk,7,b)}void 0!==this.h.youtubeData&&hg(a,Lk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function lt(a){return P("client-screen-nonce-store",{})[void 0===a?0:a]}
function mt(a,b){b=void 0===b?0:b;var c=P("client-screen-nonce-store");c||(c={},el("client-screen-nonce-store",c));c[b]=a}
function nt(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ot(a){return P(nt(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",ot);function pt(){var a=P("csn-to-ctt-auth-info");a||(a={},el("csn-to-ctt-auth-info",a));return a}
function qt(){return Object.values(P("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function rt(a){a=lt(void 0===a?0:a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",rt);function st(a,b,c){var d=pt();(c=rt(c))&&delete d[c];b&&(d[a]=b)}
function tt(a){return pt()[a]}
D("yt_logging_screen.getCttAuthInfo",tt);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==lt(c)||b!==P(nt(c)))if(st(a,d,c),mt(a,c),el(nt(c),b),b=function(){setTimeout(function(){a&&un("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ht,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var ut=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",ut);function vt(a){$k(ut,arguments)}
;function wt(){var a=rb(xt),b;return(new Nd(function(c,d){a.onSuccess=function(e){Bl(e)?c(new zt(e)):d(new At("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new At("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new At("Request timed out","net.timeout",e))};
b=Jl("//googleads.g.doubleclick.net/pagead/id",a)})).mc(function(c){c instanceof Ud&&b.abort();
return Sd(c)})}
function At(a,b,c){Za.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
x(At,Za);function zt(a){this.xhr=a}
;function Bt(){this.h=0;this.i=null}
Bt.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:Ct(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:Dt(a):this};
Bt.prototype.getValue=function(){return this.i};
Bt.prototype.isRejected=function(){return 2==this.h};
Bt.prototype.$goog_Thenable=!0;function Dt(a){var b=new Bt;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function Ct(a){var b=new Bt;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function Et(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:ul(a)?"same-origin":"cors",credentials:ul(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Ft(){return Jg()||(te||ue)&&An("applewebkit")&&!An("version")&&(!An("safari")||An("gsa/"))||Ic&&An("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function Gt(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Pk)if(Pk[d]==c.embeddedPlayerMode){b=Pk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Ht(a){Za.call(this,a.message||a.description||a.name);this.isMissing=a instanceof It;this.isTimeout=a instanceof At&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Ud}
x(Ht,Za);Ht.prototype.name="BiscottiError";function It(){Za.call(this,"Biscotti ID is missing from server")}
x(It,Za);It.prototype.name="BiscottiMissingError";var xt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Jt=null;function Kt(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Ft())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if("1"==pb(a))return Error("Biscotti ID is not available in private embed mode");if(Gt(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Yk(){var a=Kt();if(void 0!==a)return Sd(a);Jt||(Jt=wt().then(Lt).mc(function(b){return Mt(2,b)}));
return Jt}
function Lt(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new It;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new It;a=a.id;Zk(a);Jt=Ct(a);Nt(18E5,2);return a}
function Mt(a,b){b=new Ht(b);Zk("");Jt=Dt(b);0<a&&Nt(12E4,a-1);throw b;}
function Nt(a,b){Cl(function(){wt().then(Lt,function(c){return Mt(b,c)}).mc(ab)},a)}
function Ot(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Yk()}catch(b){return Sd(b)}}
;function Pt(a){if("1"!=pb(P("PLAYER_VARS",{}))){a&&Xk();try{Ot().then(function(){},function(){}),Cl(Pt,18E5)}catch(b){jl(b)}}}
;var Qt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Rt(){var a=void 0===a?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;Zb($b(5,a));try{var b=sl(a).theme;return Qt.get(b)||null}catch(c){}return null}
;function St(){this.h={};if(this.i=mm()){var a=km("CONSISTENCY");a&&Tt(this,{encryptedTokenJarContents:a})}}
St.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Na.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Tt(this,a)}};
function Tt(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&jm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Ut=window.location.hostname.split(".").slice(-2).join(".");function Vt(){var a=P("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===P("INNERTUBE_CLIENT_NAME")&&(this.h=Wt(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Xt;function Yt(){Xt=E("yt.clientLocationService.instance");Xt||(Xt=new Vt,D("yt.clientLocationService.instance",Xt));return Xt}
m=Vt.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===P("INNERTUBE_CLIENT_NAME")?(this.h=Wt(this))&&this.h.set("yt-location-playability-token",a,15552E3):jm("YT_CL",JSON.stringify({loctok:a}),15552E3,Ut,!0))};
function Wt(a){return void 0===a.h?new ln("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Wt(this))&&this.h.remove("yt-location-playability-token"):lm("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===P("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function Zt(a,b){var c,d=null==(c=gs(a,Ok))?void 0:c.signal;if(d&&b.Nb&&(c=b.Nb[d]))return c();var e;if((c=null==(e=gs(a,Mk))?void 0:e.request)&&b.Wd&&(e=b.Wd[c]))return e();for(var f in a)if(b.dd[f]&&(a=b.dd[f]))return a()}
;function $t(a){return function(){return new a}}
;var au={},bu=(au.WEB_UNPLUGGED="^unplugged/",au.WEB_UNPLUGGED_ONBOARDING="^unplugged/",au.WEB_UNPLUGGED_OPS="^unplugged/",au.WEB_UNPLUGGED_PUBLIC="^unplugged/",au.WEB_CREATOR="^creator/",au.WEB_KIDS="^kids/",au.WEB_EXPERIMENTS="^experiments/",au.WEB_MUSIC="^music/",au.WEB_REMIX="^music/",au.WEB_MUSIC_EMBEDDED_PLAYER="^music/",au.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",au);
function cu(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=bu[b];if(c){c=new RegExp(c);for(var d=v(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(bu).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=v(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function du(){}
du.prototype.v=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?gm:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=P("INNERTUBE_CONTEXT");if(g){g=tb(g);R("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&"AUTOMOTIVE_FORM_FACTOR"!==h.clientFormFactor&&(h.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;qm();var l="USER_INTERFACE_THEME_LIGHT";tm(165)?l="USER_INTERFACE_THEME_DARK":tm(174)?l="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Rt()||l;h.userInterfaceTheme=k;if(!f){if(k=zm())h.connectionType=k;R("web_log_effective_connection_type")&&(k=Am())&&(g.client.effectiveConnectionType=k)}var n;if(R("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}R("web_gcf_hashes_innertube")&&(k=ip())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=
p,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=k);p=sl(C.location.href);!R("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},R("kevlar_woffle")&&hm.h&&(p=hm.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=im(),h.mainAppWebInfo.isWebNativeShareAvailable=
navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!R("web_lr_app_quality_killswitch")&&(p=P("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));var t;p=0<=(null==(t=P("DEVICE"))?void 0:t.indexOf("cbrand=apple"));t="MacIntel"===navigator.platform;n=0<navigator.maxTouchPoints;k="ontouchstart"in document.documentElement;!R("web_vision_pro_detection_killswitch")&&
p&&t&&n&&k&&(h.deviceModel="Vision Pro");if(!R("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(V){}r=void 0}r&&(h.timeZone=r)}(r=P("EXPERIMENTS_TOKEN",""))?h.experimentsToken=r:delete h.experimentsToken;r=yl();St.h||(St.h=new St);h=St.h.h;t=[];p=0;for(var w in h)t[p++]=h[w];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:t});!R("web_prequest_context_killswitch")&&
(w=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=w);r=qm();w=tm(58);r=r.get("gsml","");g.user=Object.assign({},g.user);w&&(g.user.enableSafetyMode=w);r&&(g.user.lockedSafetyMode=!0);R("warm_op_csn_cleanup")?e&&(f=rt())&&(g.clientScreenNonce=f):!f&&(f=rt())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Yt().setLocationOnInnerTubeContext(g);try{var y=vl(),B=y.bid;delete y.bid;g.adSignalsInfo=
{params:[],bid:B};var G=v(Object.entries(y));for(var J=G.next();!J.done;J=G.next()){var H=v(J.value),T=H.next().value,I=H.next().value;y=T;B=I;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:y,value:""+B})}var ha;if(R("add_ifa_to_tvh5_requests")&&"TVHTML5"===(null==(ha=g.client)?void 0:ha.clientName)){var O=P("INNERTUBE_CONTEXT");O.adSignalsInfo&&(g.adSignalsInfo.advertisingId=O.adSignalsInfo.advertisingId,g.adSignalsInfo.limitAdTracking=O.adSignalsInfo.limitAdTracking)}}catch(V){Ys(V)}G=g}else Ys(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
G={};G={context:G};if(J=this.i(a)){this.h(G,J,b);var S;b="/youtubei/v1/"+cu(this.j());(J=null==(S=gs(a.commandMetadata,Nk))?void 0:S.apiUrl)&&(b=J);S=b;(b=P("INNERTUBE_HOST_OVERRIDE"))&&(S=String(b)+String(bc(S)));b={};b.key=P("INNERTUBE_API_KEY");R("json_condensed_response")&&(b.prettyPrint="false");S=tl(S,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:S,ib:Et(S),Na:G,config:a};a.config.Rb?a.config.Rb.identity=c:a.config.Rb={identity:c};return a}Ys(new W("Error: Failed to create Request from Command.",
a))};
da.Object.defineProperties(du.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function eu(){}
x(eu,du);function fu(){}
x(fu,eu);fu.prototype.v=function(){return{input:"/getDatasyncIdsEndpoint",ib:Et("/getDatasyncIdsEndpoint","GET"),Na:{}}};
fu.prototype.j=function(){return[]};
fu.prototype.i=function(){};
fu.prototype.h=function(){};var gu={},hu=(gu.GET_DATASYNC_IDS=$t(fu),gu);var iu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function ju(a,b){var c=void 0===c?!0:c;var d=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=ac(window.location.href);e&&d.push(e);e=ac(a);if(0<=cb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),ii(d,a),a=d.href)if(a=bc(a),a=cc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:rt()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&ku(a,b,f)}else ku(a,b)}
function ku(a,b,c){a=lu(a);b=b?fc(b):"";c=c||5;Ft()&&jm(a,b,c)}
function lu(a){for(var b=v(iu),c=b.next();!c.done;c=b.next())a=mc(a,c.value);return"ST-"+Xb(a).toString(36)}
;function mu(a){pp.call(this,1,arguments);this.csn=a}
x(mu,pp);var yp=new qp("screen-created",mu),nu=[],ou=0,pu=new Map,qu=new Map,ru=new Map;
function su(a,b,c,d,e){e=void 0===e?!1:e;for(var f=tu({cttAuthInfo:tt(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(nb(k)||!k.trackingParams&&!k.veType)&&Zs(Error("Child VE logged with no data"));if(R("no_client_ve_attach_unless_shown")){var l=uu(h,b);if(k.veType&&!qu.has(l)&&!ru.has(l)&&!e){pu.set(l,[a,b,c,h]);return}h=uu(c,b);pu.has(h)?vu(c,b):ru.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:fb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?wu("visualElementAttached",f,c):a?Rs("visualElementAttached",c,a,f):un("visualElementAttached",c,f)}
function wu(a,b,c){nu.push({Ee:a,payload:c,Xf:void 0,options:b});ou||(ou=zp())}
function Ap(a){if(nu){for(var b=v(nu),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,un(c.Ee,c.payload,c.options));nu.length=0}ou=0}
function uu(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function vu(a,b){a=uu(a,b);pu.has(a)&&(b=pu.get(a)||[],su(b[0],b[1],b[2],[b[3]],!0),pu.delete(a))}
function tu(a,b){R("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function xu(){try{return!!self.localStorage}catch(a){return!1}}
;function yu(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function zu(a){if(xu()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=yu(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Au(){if(!xu())return!1;var a=Cm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=yu(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Bu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return R("copy_login_info_to_st_cookie")&&("WEB"===P("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===P("INNERTUBE_CLIENT_NAME"))&&a}
function Cu(a){if(P("LOGGED_IN",!0)&&Bu()){var b=P("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=ac(window.location.href);c&&b.push(c);c=ac(a);0<=cb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=bc(a),(b=cc(b))?(b=lu(b),b=(b=km(b)||null)?rl(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;Bu()?(d||(d=P("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&ju(a,b)}}
;function Du(a){var b=A.apply(1,arguments);if(!Eu(a)||b.some(function(d){return!Eu(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())Fu(a,c.value)}
function Fu(a,b){for(var c in b)if(Eu(b[c])){if(c in a&&!Eu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Fu(a[c],b[c])}else if(Gu(b[c])){if(c in a&&!Gu(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Hu(a[c],b[c])}else a[c]=b[c];return a}
function Hu(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Eu(c)?a.push(Fu({},c)):Gu(c)?a.push(Hu([],c)):a.push(c);return a}
function Eu(a){return"object"===typeof a&&!Array.isArray(a)}
function Gu(a){return"object"===typeof a&&Array.isArray(a)}
;function Iu(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Ju(){var a=Iu();a.info||(a.info={});return a.info}
function Ku(a){a=Iu(a);a.metadata||(a.metadata={});return a.metadata}
function Lu(a){a=Iu(a);a.tick||(a.tick={});return a.tick}
function Mu(a){a=Iu(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Nu(a){a=Mu(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Ou(a){var b=Iu(a).nonce;if(!b){if(R("enable_lr_96_bit_can_no_crypto")){b=ft();for(var c=[],d=0;d<b.length;d++)c.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[d]&63));b=c.join("")}else b=gt();Iu(a).nonce=b}return b}
;function Pu(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Qu(a){a=a||"";var b=E("ytcsi.reference");b||(Pu(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Pu(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var Y={},Ru=(Y.auto_search="LATENCY_ACTION_AUTO_SEARCH",Y.ad_to_ad="LATENCY_ACTION_AD_TO_AD",Y.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",Y["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",Y.app_startup="LATENCY_ACTION_APP_STARTUP",Y["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",Y["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",Y["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",Y["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
Y["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",Y["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",Y["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",Y["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",Y["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",Y["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",Y["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",Y["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",Y["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",Y["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",Y["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",Y["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",Y["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",Y["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",Y["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
Y["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",Y["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",Y["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",Y.browse="LATENCY_ACTION_BROWSE",Y.cast_splash="LATENCY_ACTION_CAST_SPLASH",Y.channels="LATENCY_ACTION_CHANNELS",Y.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",Y["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",Y["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
Y["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",Y["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",Y["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",Y["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",Y["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",Y["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",Y["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",Y["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
Y["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",Y["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",Y["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",Y.chips="LATENCY_ACTION_CHIPS",Y.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",Y["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",Y["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",Y["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
Y.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",Y.embed="LATENCY_ACTION_EMBED",Y.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",Y.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",Y.explore="LATENCY_ACTION_EXPLORE",Y.home="LATENCY_ACTION_HOME",Y.library="LATENCY_ACTION_LIBRARY",Y.live="LATENCY_ACTION_LIVE",Y.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",Y.mini_app="LATENCY_ACTION_MINI_APP_PLAY",Y.onboarding="LATENCY_ACTION_ONBOARDING",
Y.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",Y["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",Y["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",Y["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",Y["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",Y["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",Y["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",Y["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",Y["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",
Y["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",Y["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",Y["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",Y["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",Y["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",Y["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",Y["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",Y["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",
Y["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",Y["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",Y["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",Y["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",Y["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",Y.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",Y.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",Y.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",Y.player_att=
"LATENCY_ACTION_PLAYER_ATTESTATION",Y["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",Y["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",Y["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",Y.prebuffer="LATENCY_ACTION_PREBUFFER",Y.prefetch="LATENCY_ACTION_PREFETCH",Y.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",Y.profile_switcher="LATENCY_ACTION_LOGIN",Y.reel_watch="LATENCY_ACTION_REEL_WATCH",Y.results="LATENCY_ACTION_RESULTS",Y["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",
Y.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",Y.search_ui="LATENCY_ACTION_SEARCH_UI",Y.search_suggest="LATENCY_ACTION_SUGGEST",Y.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",Y.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",Y.seek="LATENCY_ACTION_PLAYER_SEEK",Y.settings="LATENCY_ACTION_SETTINGS",Y.store="LATENCY_ACTION_STORE",Y.tenx="LATENCY_ACTION_TENX",Y.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",Y.watch="LATENCY_ACTION_WATCH",Y.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",Y["watch,watch7"]=
"LATENCY_ACTION_WATCH",Y["watch,watch7_html5"]="LATENCY_ACTION_WATCH",Y["watch,watch7ad"]="LATENCY_ACTION_WATCH",Y["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",Y.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",Y.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",Y["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",Y["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",Y["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",Y["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",Y["video.edit"]=
"LATENCY_ACTION_CREATOR_VIDEO_EDIT",Y["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",Y["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",Y["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",Y["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",Y["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",Y["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",Y["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",
Y["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",Y.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",Y.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",Y.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",Y.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",Y.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",Y);function Su(a,b){pp.call(this,1,arguments);this.timer=b}
x(Su,pp);var Tu=new qp("aft-recorded",Su);var Uu=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Uu);function Vu(){this.h=0}
function Wu(){Vu.h||(Vu.h=new Vu);return Vu.h}
Vu.prototype.tick=function(a,b,c,d){Xu(this,"tick_"+a+"_"+b)||un("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Vu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Xu(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,un("latencyActionInfo",a,{cttAuthInfo:c}))};
Vu.prototype.jspbInfo=function(){};
Vu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Xu(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,un("latencyActionSpan",a,{cttAuthInfo:c}))};
function Xu(a,b){Uu[b]=Uu[b]||{count:0};var c=Uu[b];c.count++;c.time=X();a.h||(a.h=Em(function(){var d=X(),e;for(e in Uu)Uu[e]&&6E4<d-Uu[e].time&&delete Uu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new W("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Zs(c)),!0):!1}
;var Yu=window;function Zu(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function $u(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Z?void 0:null==(a=Z.getEntriesByType)?void 0:null==(b=a.call(Z,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=av(e.requestStart),e.responseEnd=av(e.responseEnd),e.redirectStart=av(e.redirectStart),e.redirectEnd=av(e.redirectEnd),e.domainLookupEnd=av(e.domainLookupEnd),e.connectStart=av(e.connectStart),e.connectEnd=
av(e.connectEnd),e.responseStart=av(e.responseStart),e.secureConnectionStart=av(e.secureConnectionStart),e.domainLookupStart=av(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=Z.timing;return a}
function av(a){return Math.round(bv()+a)}
function bv(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=Yu.performance||Yu.mozPerformance||Yu.msPerformance||Yu.webkitPerformance||new Zu;var cv=!1,dv=!1,ev={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Ua(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||ab,Z);function fv(a,b){if(!R("web_csi_action_sampling_enabled")||!Iu(b).actionDisabled){var c=Qu(b||"");Du(c.info,a);a.loadType&&(c=a.loadType,Ku(b).loadType=c);Du(Nu(b),a);c=Ou(b);b=Iu(b).cttAuthInfo;Wu().info(a,c,b)}}
function gv(){var a,b,c,d;return(null!=(d=null==Jr().resolve(new Dr(ep))?void 0:null==(a=fp())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function hv(a,b,c){if(!R("web_csi_action_sampling_enabled")||!Iu(c).actionDisabled){var d=Ou(c),e;if(e=R("web_csi_debug_sample_enabled")&&d){(null==Jr().resolve(new Dr(ep))?0:fp())&&!dv&&(dv=!0,hv("gcfl",X(),c));var f,g,h;e=(null==Jr().resolve(new Dr(ep))?void 0:null==(f=fp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=gv();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+
d.charCodeAt(g),g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;Iu(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,fv(f,c));Iu(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Z.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Z.mark(e)));e=Qu(c||"");e.tick[a]=b||X();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Mu(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Lu(c);e=b||X();R("log_repeated_ytcsi_ticks")?a in f||
(f[a]=e):f[a]=e;f=Iu(c).cttAuthInfo;"_start"===a?(a=Wu(),Xu(a,"baseline_"+d)||un("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Wu().tick(a,d,b,f);iv(c);return e}}}
function jv(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=cr+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function kv(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;"number"===typeof h&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=v(Object.entries(P("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function lv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);qi(window)&&a.setAttribute("nonce",qi(window));return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=bv(),hv("rsf_"+b,c+Math.round(a.fetchStart)),hv("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function mv(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=eb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(hv("wffs",av(b.startTime)),hv("wffe",av(b.responseEnd)))}
function nv(a){var b=ov("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=ov(b[d],a);if(e)return e}return NaN}
function ov(a,b){if(a=Lu(b)[a])return"number"===typeof a?a:a[a.length-1]}
function iv(a){var b=ov("_start",a),c=nv(a);b&&c&&!cv&&(vp(Tu,new Su(Math.round(c-b),a)),cv=!0)}
function pv(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=hb(a,function(b){return"first-paint"===b.name}))return av(a.startTime)}a=Z.timing;
return a.Ae?Math.max(0,a.Ae):0}
;function qv(a,b){il(function(){Qu("").info.actionType=a;b&&el("TIMING_AFT_KEYS",b);el("TIMING_ACTION",a);var c=kv();0<Object.keys(c).length&&fv(c);c={isNavigation:!0,actionType:Ru[P("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=P("PREVIOUS_ACTION");d&&(c.previousAction=Ru[d]||"LATENCY_ACTION_UNKNOWN");if(d=P("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=P("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=rt())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=jv();if(1===d||-1===d)c.isVisible=!0;Ku();Ju();
c.loadType="cold";d=Ju();var e=$u(),f=bv(),g=P("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!R("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(hv("srt",e.responseStart),1!==d.prerender&&hv("_start",f,void 0));d=pv();0<d&&hv("fpt",d);d=$u();d.isPerformanceNavigationTiming&&fv({performanceNavigationTiming:!0},void 0);hv("nreqs",d.requestStart,void 0);hv("nress",d.responseStart,void 0);hv("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(hv("nrs",d.redirectStart,void 0),hv("nre",
d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(hv("ndnss",d.domainLookupStart,void 0),hv("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(hv("ntcps",d.connectStart,void 0),hv("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=bv()&&0<d.connectEnd-d.secureConnectionStart&&(hv("nstcps",d.secureConnectionStart,void 0),hv("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&mv();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in ev)ev.hasOwnProperty(h)&&
(e=ev[h],lv(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});fv(c);c=Mu();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Nu();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if("cold"===Ku().loadType&&("cold"===c.loadType||"cold"===d)){d=Lu();e=Mu();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])hv(k,ov(k));else if(R("log_repeated_ytcsi_ticks"))for(f=
v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,hv(k.slice(1),g);k={};d=!1;h=v(h);for(e=h.next();!e.done;e=h.next())d=e.value,Du(c,d),Du(k,d),d=!0;d&&fv(k)}D("ytglobal.timingready_",!0);k=P("TIMING_ACTION");E("ytglobal.timingready_")&&k&&rv()&&nv()&&iv()})()}
function sv(a,b,c){il(fv)(a,b,void 0===c?!1:c)}
function tv(a,b,c){return il(hv)(a,b,c)}
function rv(){return il(function(){return"_start"in Lu()})()}
function uv(){il(function(){var a=Ou();requestAnimationFrame(function(){setTimeout(function(){a===Ou()&&tv("ol",void 0,void 0)},0)})})()}
var vv=window;vv.ytcsi&&(vv.ytcsi.infoGel=sv,vv.ytcsi.tick=tv);var wv="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),xv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function yv(a,b,c,d){this.v=a;this.aa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Nb||(a.Nb={});a.Nb=Object.assign({},hu,a.Nb)}
function zv(a,b,c,d){if(void 0!==yv.h){if(d=yv.h,a=[a!==d.v,b!==d.aa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new W("InnerTubeTransportService is already initialized",a);
}else yv.h=new yv(a,b,c,d)}
function Av(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?gm:c;var d=Zt(b,a.v);if(!d)return Sd(new W("Error: No request builder found for command.",b));var e=d.v(b,void 0,c);return e?(Cu(e.input),new Nd(function(f){var g,h,k;return z(function(l){if(1==l.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.l.bf){var n=e.config,p;n=null==n?void 0:null==(p=n.Rb)?void 0:p.sessionIndex;p=fm(0,{sessionIndex:n});k=Object.assign({},Bv(h),p);return l.B(2)}return l.yield(Cv(e.config,
h),3)}2!=l.h&&(k=l.i);f(Dv(a,e,k));l.h=0})})):Sd(new W("Error: Failed to build request for command.",b))}
function Ev(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.sequenceMetaData)?0:d.skipProcessing)&&a.j){d=v(wv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Dv(a,b,c){var d,e,f,g,h,k,l,n,p,t,r,w,y,B,G,J,H,T,I,ha,O,S,V,ma,na,sb,Mc,Nc,be;return z(function(ja){switch(ja.h){case 1:ja.B(2);break;case 3:if((d=ja.i)&&!d.isExpired())return ja.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Na)?0:f.context)){ja.B(4);break}g=b.Na.context;ja.B(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){ja.B(4);break}l=k.value;return ja.yield(l.fg(g),8);case 8:k=h.next();ja.B(7);break;case 4:if(null==(n=a.i)||!n.kg(b.input,b.Na)){ja.B(11);break}return ja.yield(a.i.Zf(b.input,
b.Na),12);case 12:return p=ja.i,R("kevlar_process_local_innertube_responses_killswitch")||Ev(a,p,b),ja.return(p);case 11:return(w=null==(r=b.config)?void 0:r.hg)&&a.h.has(w)?t=a.h.get(w):(y=JSON.stringify(b.Na),J=null!=(G=null==(B=b.ib)?void 0:B.headers)?G:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},J,c)}),H=Object.assign({},b.ib),"POST"===b.ib.method&&(H=Object.assign({},H,{body:y})),(null==(T=b.config)?0:T.Ke)&&tv(b.config.Ke),I=function(){return a.aa.fetch(b.input,H,b.config)},t=I(),
w&&a.h.set(w,t)),ja.yield(t,13);
case 13:if((ha=ja.i)&&"error"in ha&&(null==(O=ha)?0:null==(S=O.error)?0:S.details))for(V=ha.error.details,ma=v(V),na=ma.next();!na.done;na=ma.next())sb=na.value,(Mc=sb["@type"])&&-1<xv.indexOf(Mc)&&(delete sb["@type"],ha=sb);w&&a.h.has(w)&&a.h.delete(w);(null==(Nc=b.config)?0:Nc.Le)&&tv(b.config.Le);if(ha||null==(be=a.i)||!be.Sf(b.input,b.Na)){ja.B(14);break}return ja.yield(a.i.Yf(b.input,b.Na),15);case 15:ha=ja.i;case 14:return Ev(a,ha,b),ja.return(ha||void 0)}})}
function Cv(a,b){var c,d,e,f;return z(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Rb)?void 0:d.sessionIndex;var h=g.yield;var k=fm(0,{sessionIndex:e});if(!(k instanceof Nd)){var l=new Nd(ab);Od(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Bv(b),f)))})}
function Bv(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);P("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=P("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Fv=new Cr("INNERTUBE_TRANSPORT_TOKEN");var Gv=["share/get_web_player_share_panel"],Hv=["feedback"],Iv=["notification/modify_channel_preference"],Jv=["browse/edit_playlist"],Kv=["subscription/subscribe"],Lv=["subscription/unsubscribe"];function Mv(){}
x(Mv,eu);Mv.prototype.j=function(){return Kv};
Mv.prototype.i=function(a){return gs(a,Wk)||void 0};
Mv.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(Mv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Nv(){}
x(Nv,eu);Nv.prototype.j=function(){return Lv};
Nv.prototype.i=function(a){return gs(a,Vk)||void 0};
Nv.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(Nv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ov(){}
x(Ov,eu);Ov.prototype.j=function(){return Hv};
Ov.prototype.i=function(a){return gs(a,Qk)||void 0};
Ov.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(Ov.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Pv(){}
x(Pv,eu);Pv.prototype.j=function(){return Iv};
Pv.prototype.i=function(a){return gs(a,Uk)||void 0};
Pv.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Qv(){}
x(Qv,eu);Qv.prototype.j=function(){return Jv};
Qv.prototype.i=function(a){return gs(a,Tk)||void 0};
Qv.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Rv(){}
x(Rv,eu);Rv.prototype.j=function(){return Gv};
Rv.prototype.i=function(a){return gs(a,Sk)};
Rv.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Sv=new Cr("NETWORK_SLI_TOKEN");function Tv(a){this.h=a}
Tv.prototype.fetch=function(a,b,c){var d=this,e;return z(function(f){e=Uv(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){Zs(g)}))})};
function Uv(a,b,c){if(a.h){var d=Zb($b(5,mc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;R("wug_networking_gzip_request")&&(a=Xp(c));return new window.Request(b,a)}
Tv.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){return(null==b?0:b.ue)&&a.ok?rg(b.ue,d):JSON.parse(d.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Vf(),c=c.then(function(d){Zs(new W("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
Tv[Br]=[new Dr(Sv)];var Vv=new Cr("NETWORK_MANAGER_TOKEN");var Wv;function Xv(){var a,b,c;return z(function(d){if(1==d.h)return a=Jr().resolve(Fv),a?d.yield(Av(a),2):(Zs(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Zs(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Tf;return d.return(c)}Zs(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Yv=C.caches,Zv;function $v(a){var b=a.indexOf(":");return-1===b?{td:a}:{td:a.substring(0,b),datasyncId:a.substring(b+1)}}
function aw(){return z(function(a){if(void 0!==Zv)return a.return(Zv);Zv=new Promise(function(b){var c;return z(function(d){switch(d.h){case 1:return za(d,2),d.yield(Yv.open("test-only"),4);case 4:return d.yield(Yv.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Aa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Zv)})}
function bw(a){var b,c,d,e,f,g,h;z(function(k){if(1==k.h)return k.yield(aw(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(Yv.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=$v(f),h=g.datasyncId,!h||a.includes(h)||b.push(Yv.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function cw(){var a,b,c,d,e,f,g;return z(function(h){if(1==h.h)return h.yield(aw(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=Cm("cache contains other");return h.yield(Yv.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=$v(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function dw(){Xv().then(function(a){a&&(Ko(a),bw(a),zu(a))})}
function ew(){var a=new Pq;Gi.na(function(){var b,c,d,e;return z(function(f){switch(f.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){f.B(2);break}b=Cm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Ko(g);bw(g);zu(g);return f.return()}c=Au();return f.yield(cw(),3);case 3:return d=f.i,f.yield(Lo(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.va()?dw():a.h.add("publicytnetworkstatus-online",dw,!0,void 0,void 0),f.h=0}})})}
;var mi=fa(["data-"]);function fw(a){a&&(a.dataset?a.dataset[gw()]="true":li(a))}
function hw(a){return a?a.dataset?a.dataset[gw()]:a.getAttribute("data-loaded"):null}
var iw={};function gw(){return iw.loaded||(iw.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var jw=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,kw=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function lw(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(jw,""),c=c.replace(kw,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else mw(a,b,c)}
function mw(a,b,c){c=void 0===c?null:c;var d=nw(a),e=document.getElementById(d),f=e&&hw(e),g=e&&!f;f?b&&b():(b&&(f=vr(d,b),b=""+Pa(b),ow[b]=f),g||(e=pw(a,d,function(){if(!hw(e)){fw(e);yr(d);var h=Va(zr,d);Cl(h,0)}},c)))}
function pw(a,b,c,d){d=void 0===d?null:d;var e=zd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);ti(e,Hk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function qw(a){a=nw(a);var b=document.getElementById(a);b&&(zr(a),b.parentNode.removeChild(b))}
function rw(a,b){a&&b&&(a=""+Pa(b),(a=ow[a])&&xr(a))}
function nw(a){var b=document.createElement("a");ii(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Xb(a)}
var ow={};var sw=[],tw=!1;function uw(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&Ft()){var a=P("PLAYER_VARS",{});if("1"!=pb(a)&&!Gt(a)){var b=function(){tw=!0;"google_ad_status"in window?el("DCLKSTAT",1):el("DCLKSTAT",2)};
try{lw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}sw.push(Gi.na(function(){if(!(tw||"google_ad_status"in window)){try{rw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}tw=!0;el("DCLKSTAT",3)}},5E3))}}}
function vw(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;function ww(a){Sr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.D},{from:"document_active",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
x(ww,Sr);ww.prototype.D=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
ww.prototype.v=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
ww.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
ww.prototype.i=function(){this.h=new Map};function xw(a){Sr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.v},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.v},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.v},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
x(xw,Sr);xw.prototype.i=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
xw.prototype.h=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
xw.prototype.v=function(a,b){a(null==b?void 0:b.event)};
xw.prototype.m=function(a,b){a(null==b?void 0:b.event)};function yw(){this.l=new ww;this.v=new xw}
yw.prototype.install=function(){var a=A.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.v.install(c)})};function zw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
zw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=rt(void 0===c?0:c)){a=this.client;d=new kt({trackingParams:d});var e=void 0;if(R("no_client_ve_attach_unless_shown")){var f=uu(d,c);qu.set(f,!0);vu(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=tu({cttAuthInfo:tt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?wu("visualElementGestured",f,d):a?Rs("visualElementGestured",d,a,f):un("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
zw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new kt({trackingParams:a}),b,void 0===c?0:c)};
zw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=rt(d);a||(a=(a=ot(void 0===d?0:d))?new kt({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=tu({cttAuthInfo:tt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?wu("visualElementStateChanged",d,b):a?Rs("visualElementStateChanged",b,a,d):un("visualElementStateChanged",b,d))}};
function Aw(a,b){if(void 0===b)for(var c=qt(),d=0;d<c.length;d++)void 0!==c[d]&&Aw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&su(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Bw(){yw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));R("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
x(Bw,yw);Bw.prototype.j=function(){un("finalPayload",{csn:rt()})};
Bw.prototype.h=function(){ct(dt)};
Bw.prototype.i=function(){var a=Aw;zw.h||(zw.h=new zw);a(zw.h)};function Cw(){}
function Dw(){var a=E("ytglobal.storage_");a||(a=new Cw,D("ytglobal.storage_",a));return a}
Cw.prototype.estimate=function(){var a,b,c;return z(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Ew()):d.return()})};
function Ew(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Cw);function sn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=U("ytidb_transaction_ended_event_rate_limit_session",.2)}
sn.prototype.Ib=function(a){this.handleError(a)};
sn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Fw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=U("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Fw(a,b){Dw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Gw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Gw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Gw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Hw(a,b,c){K.call(this);var d=this;c=c||P("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.A=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=cb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.A)}
x(Hw,K);Hw.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){kl(d)}}};
Hw.prototype.S=function(){window.removeEventListener("message",this.A);K.prototype.S.call(this)};function Iw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Hw(!!P("WIDGET_ID_ENFORCE")),b=this.He.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=P("WIDGET_ID"))this.h.sessionId=a}
m=Iw.prototype;m.He=function(a,b,c){"addEventListener"===a&&b?this.Cc(b[0],c):this.Wc(a,b,c)};
m.Wc=function(){};
m.vc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Cc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.vc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ee=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.yc());this.sendMessage("onReady");db(this.i,this.Bd,this);this.i=[]};
m.yc=function(){return null};
function Jw(a,b){a.sendMessage("infoDelivery",b)}
m.Bd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Bd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Kw={},Lw=(Kw["api.invalidparam"]=2,Kw.auth=150,Kw["drm.auth"]=150,Kw["heartbeat.net"]=150,Kw["heartbeat.servererror"]=150,Kw["heartbeat.stop"]=150,Kw["html5.unsupportedads"]=5,Kw["fmt.noneavailable"]=5,Kw["fmt.decode"]=5,Kw["fmt.unplayable"]=5,Kw["html5.missingapi"]=5,Kw["html5.unsupportedlive"]=5,Kw["drm.unavailable"]=5,Kw["mrm.blocked"]=151,Kw);var Mw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Nw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Ow(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Mw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Pw(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Qw(a){Iw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Te.bind(this));this.addEventListener("onVolumeChange",this.Ue.bind(this));this.addEventListener("onApiChange",this.Oe.bind(this));this.addEventListener("onPlaybackQualityChange",this.Qe.bind(this));this.addEventListener("onPlaybackRateChange",this.Re.bind(this));this.addEventListener("onStateChange",this.Se.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Ve.bind(this))}
x(Qw,Iw);m=Qw.prototype;
m.Wc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Nw(a)){var d=b;if(Oa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Ow(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Ow(e);break;case "loadPlaylist":case "cuePlaylist":e=Pw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Nw(a)&&Jw(this,this.yc())}};
m.Cc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Iw.prototype.Cc.call(this,a,b)};
m.vc=function(a,b){var c=this,d=Iw.prototype.vc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.h,b=this.ee.bind(this);a.h=b;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var c=void 0===c?5:c;this.errorCode=a?Lw[a]||c:c;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.yc=function(){if(!this.api)return null;var a=this.api.getApiInterface();ib(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Se=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Jw(this,a)};
m.Qe=function(a){Jw(this,{playbackQuality:a})};
m.Re=function(a){Jw(this,{playbackRate:a})};
m.Oe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Ue=function(){Jw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Te=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Jw(this,a)};
m.Ve=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Jw(this,a)};
m.dispose=function(){Iw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Rw(a){K.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.xd,this)}
x(Rw,K);m=Rw.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,b)};
m.xd=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Sw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Tw(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Pe.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Pe=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,this.xc(a,b))};
m.xc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.S=function(){this.connection.unsubscribe("command",this.xd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);K.prototype.S.call(this)};function Uw(a,b){Rw.call(this,b);this.api=a;this.start()}
x(Uw,Rw);Uw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Uw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Sw(a,b){switch(a){case "loadVideoById":return a=Ow(b),[a];case "cueVideoById":return a=Ow(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Pw(b),[a];case "cuePlaylist":return a=Pw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Tw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Uw.prototype.xc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Rw.prototype.xc.call(this,a,b)};
Uw.prototype.S=function(){Rw.prototype.S.call(this);delete this.api};function Vw(a){a=void 0===a?!1:a;K.call(this);this.h=new L(a);tc(this,this.h)}
Xa(Vw,K);Vw.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
Vw.prototype.unsubscribe=function(a,b,c){return this.Z()?!1:this.h.unsubscribe(a,b,c)};
Vw.prototype.l=function(a,b){this.Z()||this.h.Ya.apply(this.h,arguments)};function Ww(a,b,c){Vw.call(this);this.j=a;this.i=b;this.id=c}
x(Ww,Vw);Ww.prototype.jb=function(a,b){this.Z()||this.j.jb(this.i,this.id,a,b)};
Ww.prototype.S=function(){this.i=this.j=null;Vw.prototype.S.call(this)};function Xw(a,b,c){K.call(this);this.h=a;this.origin=c;this.i=jr(window,"message",this.j.bind(this));this.connection=new Ww(this,a,b);tc(this,this.connection)}
x(Xw,K);Xw.prototype.jb=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
Xw.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
Xw.prototype.S=function(){kr(this.i);this.h=null;K.prototype.S.call(this)};function Yw(){this.state=1;this.h=null}
m=Yw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(f=(d=xb())?d.createScript(f):f,d=new Wb,d.vd=f,f=d):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=Gk(a.interpreterSafeUrl).toString());Zw(this,d,e,a.program,b,c)}else Zs(Error("Cannot initialize botguard without program"))};
function Zw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,lw(c,function(){window[g]?$w(a,d,g,e):(a.state=3,qw(c),Zs(new W("Unable to load Botguard","from "+c)))},f)):b?(f=zd("SCRIPT"),b instanceof Wb?si(f,b):f.textContent=b,f.nonce=qi(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?$w(a,d,g,e):(a.state=4,Zs(new W("Unable to load Botguard from JS")))):Zs(new W("Unable to load VM; no url or JS provided"))}
m.isLoading=function(){return 2===this.state};
function $w(a,b,c,d){a.state=5;try{var e=new Xh({program:b,ke:c,Ie:R("att_web_record_metrics")});e.Ye.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&Zs(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Kd({ed:a}):null};
m.dispose=function(){this.Qc(null);this.state=8};
m.Tc=function(){return!!this.h};
m.Kd=function(a){return this.h.Ed(a)};
m.Qc=function(a){rc(this.h);this.h=a};function ax(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function bx(){Yw.apply(this,arguments)}
x(bx,Yw);bx.prototype.Qc=function(a){var b;null==(b=ax())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Ed.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
bx.prototype.Tc=function(){return!!ax()};
bx.prototype.Kd=function(a){return ax().bgvmc(a)};var cx=new bx;function dx(){return cx.Tc()}
function ex(a){a=void 0===a?{}:a;return cx.invoke(a)}
;function fx(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||rb(b);this.assets=a.assets||{};this.attrs=a.attrs||rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
fx.prototype.clone=function(){var a=new fx,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ma(c)?a[b]=rb(c):a[b]=c}return a};var gx=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function hx(a){a=a||"";if(window.spf){var b=a.match(gx);spf.style.load(a,b?b[1]:"",void 0)}else ix(a)}
function ix(a){var b=jx(a),c=document.getElementById(b),d=c&&hw(c);d||c&&!d||(c=kx(a,b,function(){if(!hw(c)){fw(c);yr(b);var e=Va(zr,b);Cl(e,0)}}))}
function kx(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Hk(a);pi(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function jx(a){var b=zd("A");ii(b,new Fb(a,Gb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Xb(a)}
;function lx(a,b,c,d,e){K.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.oc=e;this.Fa=!1;this.api={};this.fa=this.m=null;this.T=new L;this.h={};this.ba=this.ha=this.elementId=this.Za=this.config=null;this.X=!1;this.j=this.D=null;this.sa={};this.pc=["onReady"];this.lastError=null;this.Pb=NaN;this.P={};this.ea=0;this.i=this.l=a;tc(this,this.T);mx(this);c?this.ea=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(nx(this),ox(this))}
x(lx,K);m=lx.prototype;m.getId=function(){return this.A};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.ea&&(clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof fx||(b=new fx(b));this.config=b;this.setConfig(a);ox(this);this.isReady()&&px(this)}};
function nx(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Za=a;this.config=qx(a);nx(this);if(!this.ha){var b;this.ha=rx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Ai(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Ai(Number(a)||a))};
function px(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function sx(a){var b=!0,c=tx(a);c&&a.config&&(b=c.dataset.version===ux(a));return b&&!!E("yt.player.Application.create")}
function ox(a){if(!a.Z()&&!a.X){var b=sx(a);if(b&&"html5"===(tx(a)?"html5":null))a.ba="html5",a.isReady()||vx(a);else if(wx(a),a.ba="html5",b&&a.j&&a.l)a.l.appendChild(a.j),vx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.D=function(){c=!0;var d=xx(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?qx(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.oc);vx(a)};
a.X=!0;b?a.D():(lw(ux(a),a.D),(b=yx(a))&&hx(b),zx(a)&&!c&&D("yt.player.Application.create",null))}}}
function tx(a){var b=yd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function vx(a){if(!a.Z()){var b=tx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.X=!1;if(!xx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Ax(a)}else a.Pb=setTimeout(function(){vx(a)},50)}}
function Ax(a){mx(a);a.Fa=!0;var b=tx(a);if(b){a.m=Bx(a,b,"addEventListener");a.fa=Bx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Bx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);px(a);a.ha&&a.ha(a.api);a.T.Ya("onReady",a.api)}
function Bx(a,b,c){var d=b[c];return function(){var e=A.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new W("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function mx(a){a.Fa=!1;if(a.fa)for(var b in a.h)a.h.hasOwnProperty(b)&&a.fa(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.m=null;a.fa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Za};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Fa};
m.addEventListener=function(a,b){var c=this,d=rx(this,b);d&&(0<=cb(this.pc,a)||this.h[a]||(b=Cx(this,a),this.m&&this.m(a,b)),this.T.subscribe(a,d),"onReady"===a&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=rx(this,b))&&this.T.unsubscribe(a,b)};
function rx(a,b){var c=b;if("string"===typeof b){if(a.sa[b])return a.sa[b];c=function(){var d=A.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new W("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.sa[b]=c}return c?c:null}
function Cx(a,b){function c(d){var e=setTimeout(function(){if(!a.Z()){try{a.T.Ya(b,null!=d?d:void 0)}catch(h){var f=new W("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.A,data:d});f.level="WARNING";throw f;}f=a.P;var g=String(e);g in f&&delete f[g]}},0);
ob(a.P,String(e))}
return a.h[b]=c}
m.getPlayerType=function(){return this.ba||(tx(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function wx(a){a.cancel();mx(a);a.ba=null;a.config&&(a.config.loaded=!1);var b=tx(a);b&&(sx(a)||!zx(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.D&&rw(ux(this),this.D);clearTimeout(this.Pb);this.X=!1};
m.S=function(){wx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new W("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.sa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Za=this.config=this.api=null;delete this.l;delete this.i;K.prototype.S.call(this)};
function zx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function ux(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function yx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function xx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function qx(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?rb(e):e}return b}
;var Dx={},Ex="player_uid_"+(1E9*Math.random()>>>0);function Fx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?yd(c):c;var e=Ex+"_"+Pa(c),f=Dx[e];if(f&&d)return Gx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new lx(c,e,a,b,void 0);Dx[e]=f;f.addOnDisposeCallback(function(){delete Dx[f.getId()]});
return f.api}
function Gx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Hx=null,Ix=null,Jx=null;
function Kx(){uv();var a=qm(),b=tm(119),c=1<window.devicePixelRatio;if(document.body&&Qi(document.body,"exp-invert-logo"))if(c&&!Qi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Qi(d,"inverted-hdpi")){var e=Oi(d);Pi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Qi(document.body,"inverted-hdpi")&&Ri();if(b!=c){b="f"+(Math.floor(119/31)+1);d=um(b)||0;d=c?d|67108864:d&-67108865;0===d?delete nm[b]:(c=d.toString(16),nm[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in nm)nm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(nm[f])));var f=d.join("&");jm(b,f,63072E3,a.i,c)}}
function Lx(){Mx()}
function Nx(){tv("ep_init_pr");Mx()}
function Mx(){var a=Hx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Ox(){Hx&&Hx.sendAbandonmentPing&&Hx.sendAbandonmentPing();P("PL_ATT")&&cx.dispose();for(var a=Gi,b=0,c=sw.length;b<c;b++)a.oa(sw[b]);sw.length=0;qw("//static.doubleclick.net/instream/ad_status.js");tw=!1;el("DCLKSTAT",0);sc(Jx,Ix);Hx&&(Hx.removeEventListener("onVideoDataChange",Lx),Hx.destroy())}
;function Px(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&ju(a,b);if(c)return!1;Cu(a);if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=hc(a,e);Cu(a);f=a+f;var h=void 0===h?fi:h;a:if(h=void 0===h?fi:h,f instanceof Fb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof di&&b.te(f)){h=new Fb(f,Gb);break a}h=void 0}g=g.location;h=hi(h||Hb);void 0!==h&&(g.href=h)}return!0}
;D("yt.setConfig",el);D("yt.config.set",el);D("yt.setMsg",vt);D("yt.msgs.set",vt);D("yt.logging.errors.log",Ys);
D("writeEmbed",function(){var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}Pt(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);qv("embed",["ol"]);c=P("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=sl(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&qv("watch",["pbs","pbu","pbp"]);Hx=Fx(a,c);Hx.addEventListener("onVideoDataChange",Lx);Hx.addEventListener("onReady",Nx);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Jx=new Qw(Hx):P("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Ix=new Xw(window.parent,a,b),Jx=new Uw(Hx,Ix.connection));uw();R("ytidb_create_logger_embed_killswitch")||rn();a={};Bw.h||(Bw.h=new Bw);
Bw.h.install((a.flush_logs={callback:function(){Es()}},a));
$q();R("ytidb_clear_embedded_player")&&Gi.na(function(){var f,g;if(!Wv){var h=Jr();Fr(h,{jc:Vv,Id:Tv});var k={dd:{feedbackEndpoint:$t(Ov),modifyChannelNotificationPreferenceEndpoint:$t(Pv),playlistEditEndpoint:$t(Qv),subscribeEndpoint:$t(Mv),unsubscribeEndpoint:$t(Nv),webPlayerShareEntityServiceEndpoint:$t(Rv)}},l=Yt(),n={};l&&(n.client_location=l);void 0===f&&(f=em());void 0===g&&(g=h.resolve(Vv));zv(k,g,f,n);Fr(h,{jc:Fv,Jd:yv.h});Wv=h.resolve(Fv)}ew()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||dx);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||ex);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||vw);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Px);D("yt.util.activity.init",E("yt.util.activity.init")||nr);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||qr);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||or);window.addEventListener("load",il(function(){Kx()}));
window.addEventListener("pageshow",il(function(a){a.persisted||Kx()}));
window.addEventListener("pagehide",il(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Ox():a.persisted||Ox()}));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=fl("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new W(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Ys(e):Zs(e))};
de=$s;window.addEventListener("unhandledrejection",function(a){$s(a.reason)});
db(P("ERRORS")||[],function(a){Ys.apply(null,a)});
el("ERRORS",[]);R("embeds_web_enable_scheduler_to_player_binary")&&hn();}).call(this);
