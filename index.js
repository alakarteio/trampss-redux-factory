!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("lodash/at"),require("lodash/omit"),require("lodash/uniq"),require("lodash/without"),require("lodash/keyBy")):"function"==typeof define&&define.amd?define(["lodash/at","lodash/omit","lodash/uniq","lodash/without","lodash/keyBy"],t):n["trampss-redux-factory"]=t(n._at,n._omit,n._uniq,n._without,n._keyBy)}(this,function(n,t,r,e,u){"use strict";n=n&&"default"in n?n.default:n,t=t&&"default"in t?t.default:t,r=r&&"default"in r?r.default:r,e=e&&"default"in e?e.default:e,u=u&&"default"in u?u.default:u;var a=function(n){return"@trampss/"+n.toUpperCase()},i=function(n){return a("SET_"+n)},o=function(n){return a("RESET_"+n)},f=function(n){return a("ADD_"+n)},c=function(n){return a("UPDATE_"+n)},d=function(n){return a("REMOVE_"+n)},y=Object.freeze({SET:i,set:function(n){return function(t){return{type:i(n),payload:t}}},RESET:o,reset:function(n){return function(){return{type:o(n)}}},ADD:f,add:function(n){return function(t){return{type:f(n),payload:t}}},UPDATE:c,update:function(n){return function(t){return{type:c(n),payload:t}}},REMOVE:d,remove:function(n){return function(t){return{type:d(n),payload:t}}}}),l=function(t){return function(r){return function(e){var u=e;return void 0!==t&&(u=n(e,t)[0]),u[r]}}},s=function(n){return function(t){return function(r){return function(e){return l(t)(r)(e)[n]}}}},p=s("keys"),h=s("array"),v=s("initialized"),g=s("data"),m=Object.freeze({getState:l,getKeys:p,getAsArray:h,getLength:function(n){return function(t){return function(r){return p(n)(t)(r).length}}},isInitialized:v,get:function(n){return function(t){return function(r){return function(e){var u=g(n)(t)(e);return r?Array.isArray(r)?r.map(function(n){return u[n]}):u[r]:u}}}},getBy:function(t){return function(r){return function(e,u){return function(a){var i=h(t)(r)(a);return Array.isArray(u)?i.filter(function(t){return u.includes(n(t,e)[0])}):i.filter(function(t){return u===n(t,e)[0]})}}}}}),A=function(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n},b=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},E=function(n){if(Array.isArray(n)){for(var t=0,r=Array(n.length);t<n.length;t++)r[t]=n[t];return r}return Array.from(n)},O=function(n){return function(a){return function(){var y=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=l.type,p=l.payload;switch(s){case i(a):return{data:u(p,n),keys:r(p.map(function(t){return t[n]})),array:p,initialized:!0};case f(a):var h=void 0;return h=void 0===y.array.find(function(t){return t[n]===p[n]})?[].concat(E(y.array),[p]):y.array.map(function(t){return t[n]===p[n]?p:t}),b({},y,{data:b({},y.data,A({},p[n],p)),keys:r([].concat(E(y.keys),[p[n]])),array:h,initialized:!0});case c(a):return y.array.find(function(t){return t[n]===p[n]})?b({},y,{data:b({},y.data,A({},p[n],b({},y.data[p[n]],p))),array:y.array.map(function(t){return t[n]===p[n]?b({},t,p):t})}):y;case d(a):return b({},y,{data:t(y.data,[p]),keys:e(y.keys,p),array:y.array?y.array.filter(function(t){return t[n]!==p}):[]});case o(a):return j;default:return y}}}},k=function(n){return function(t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return b({},r,{state:O(n)(t)(r.state,r.action)})}}},j={data:{},keys:[],array:[],initialized:!1},_=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(r){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=u.type,i={state:e,action:{type:void 0===a?"UNKNOWN":a,payload:u.payload}};return[].concat(E(n.pre||[]),[k],E(n.post||[])).map(function(n){return n(t)(r)}).forEach(function(n){i=n(i)}),i.state}}}},q=function(n){return function(t){return function(r){return function(e){return function(u){return Object.assign.apply(Object,[_(n)(t)(""+e+u)].concat(E(Object.keys(y).map(function(n){return A({},n,y[n](""+e+u))})),E(Object.keys(m).map(function(n){return A({},n,m[n](r)(u))}))))}}}}};return function(n){return function(t){return function(r){return function(e){var u=void 0,a="";return"string"==typeof e?u=e:(u=e.name,a=e.prefix||""),q(n)(t)(r)(a)(u)}}}}});
//# sourceMappingURL=index.js.map
