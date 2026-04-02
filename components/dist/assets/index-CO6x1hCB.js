var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.4`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function D(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function O(e,t){pe++,fe[pe]=e.current,e.current=t}var he=me(null),ge=me(null),_e=me(null),ve=me(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}D(he),O(he,e)}function be(){D(he),D(ge),D(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(D(he),D(ge)),ve.current===e&&(D(ve),Qf._currentValue=de)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return Ae.call(It,e)?!0:Ae.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function k(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Vt(n)):Xt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){k(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),k(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),k(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function A(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,`passive`,{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Wt(Dt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Gt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),Mt(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)_i(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=gi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return xi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=gi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=gi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=gi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=gi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-qe(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(i(519));function Gi(e){throw Zi(Ei(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=me(null),$i=null,ea=null;function ta(e,t,n){O(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,D(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ra(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ra(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function aa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(i(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=T.S;T.S=function(e,t){tu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=me(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?O(wa,wa.current):O(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(i(460)),ka=Error(i(474)),Aa=Error(i(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(i(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(i(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Pa(i)===t.type)?(t=a(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=xi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case w:return t=Pa(t),f(e,t,n)}if(ue(t)||se(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===S)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Pa(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===S)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Pa(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===S)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),M&&Ii(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),M&&Ii(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Pa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Va(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=xi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=bi(o.type,o.key,o.props,null,e.mode,c),Va(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=wi(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Pa(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ba(o),c);if(o.$$typeof===S)return b(e,r,la(e,o),c);Ha(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=me(null),ao=me(0);function oo(e,t){e=Gl,O(ao,e),O(io,t),Gl=e|t.baseLanes}function so(){O(ao,Gl),O(io,io.current)}function co(){Gl=ao.current,D(io),D(ao)}var lo=me(null),uo=null;function fo(e){var t=e.alternate;O(P,P.current&1),O(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){O(P,P.current),O(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(O(P,P.current),O(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){O(P,P.current),O(lo,lo.current)}function go(e){D(lo),uo===e&&(uo=null),D(P)}var P=me(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){T.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(i(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var a=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=a)throw Error(i(301));if(a+=1,L=I=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Gs,o=t(n,r)}while(bo);return o}function Ao(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(i(467)):Error(i(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===S)return ca(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(B=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=F,a=z(),o=M;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((I||a).memoizedState,n);if(s&&(a.memoizedState=n,B=!0),a=a.queue,ms(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,a){if(zs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Rs(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ks(e).queue;Es(e,a,t,de,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(i(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,a=Po();if(M){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ps(Ko.bind(null,r,o,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,a,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(i(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ei(r,n),a=nc(e.stateNode,r,a),Qa(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Wi&&(e=Error(i(422),{cause:r}),Zi(Ei(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ei(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=rc(a),ic(a,e,n,r),Qa(n,a),!1}n=n.return}while(n!==null);return!1}var oc=Error(i(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(po(t),a)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(B||aa(e,t,n,!1),a=(n&e.childLanes)!==0,B||a){if(r=G,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,di(e,s),hu(r,e,s),oc;Du(),t=hc(e,t,n)}else e=o.treeContext,j=cf(s.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(P.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(a?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ho(t),a=t.mode,c=Dc({mode:`hidden`,children:c},a),r=xi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,a=t.mode,r=Dc({mode:`visible`,children:r.children},a),c=xi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),s=(n&e.childLanes)!==0,B||s){if(s=G,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(s,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return a?(ho(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,a,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(a=c.cachePool,a===null?a=Da():(l=N._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=cc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Xs(r,t.pendingProps),bc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ja(e,t),to(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ta(t,N,r),r!==o.cache&&ia(t,[N],n,!0),eo(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==a){a=Ei(Error(i(424)),t),Zi(a),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===a){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),kt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Vi=t,Ui=!0,a=j,Zd(t.type)?(lf=a,j=cf(r.firstChild)):j=a),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((a=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?a=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,a=!0)),a||Gi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Do(e,t,Ao,null,null,n),Qf._currentValue=a),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,sa(t),a=ca(a),r=r(a),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(a=Ta(),a===null&&(a=G,o=ma(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},qa(t),ta(t,N,a)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Fa=ja,ka}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(V(t),Lc(t,a,null,r,n)):(V(t),Rc(t,o))):o?o===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}e=he.current,Ji(t)?Ki(t,e):(e=ff(a,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}if(o=he.current,Ji(t))Ki(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Vi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(i(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),a=!1}else a=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(D(P),r=t.memoizedState,r===null)return V(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_o(e),o!==null){for(t.flags|=128,Bc(r,!1),e=o.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return O(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>nu&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}else{if(!a)if(e=_o(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!M)return V(t),null}else 2*Fe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=P.current,O(P,a?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(P),null;case 4:return be(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&D(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:D(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&D(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Xs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[gt]=e,kt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,kt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||a,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;tl(e,$c(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),tl(e,$c(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;el(e,$c(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:T.T===null?pt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||M){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Yl=e}else Yl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),ot(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Fe(),10<a)){if(yu(r,t,Yl,!Hl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Nl(t,a,d);var m=(a&62914560)===a?eu-Fe():(a&4194048)===a?tu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=nt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,T.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=T.H;return T.H=Hs,e===null?Hs:e}function Eu(){var e=T.A;return T.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,T.H=i,T.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Fe()+500,Su(e,t)):Ul=nt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ma(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,T.H=r,T.A=a,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!Ne();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=si,st(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,E.p=a,T.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,E.p=r,T.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,E.p=r,T.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{E.p=a,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Fe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=di(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=tt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=tt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:A(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Tt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case Jr:case Yr:case Xr:l=zn;break;case ei:l=Xn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Tt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Dt(l),h=u==null?c:Dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=vr;else if(fr(c))if(yr)v=Or;else{v=Er;var y=Tr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Dt(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=A(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=A(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=A(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);kt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),kt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,kt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),kt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,kt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),kt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(i(527,Lp,`19.2.4`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Zs,s=Qs,c=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()}))(),_=c(u(),1),v=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),y=o(((e,t)=>{t.exports=v()}))();function b(){return(0,y.jsxs)(`svg`,{className:`animate-spin shrink-0`,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5`,stroke:`currentColor`,strokeWidth:`2`,strokeOpacity:`0.3`}),(0,y.jsx)(`path`,{d:`M12 7a5 5 0 0 0-5-5`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]})}var x={primary:`text-[var(--color-text-on-dark)] shadow-[var(--shadow-brand-tinted)]`,secondary:`bg-[var(--color-surface-card)] text-[var(--color-action-primary)] border border-[var(--color-action-primary)]`,tertiary:`bg-transparent text-[var(--color-action-primary)]`,destructive:`bg-[var(--red-500)] text-[var(--color-text-on-dark)]`,accent:`bg-[var(--color-action-accent)] text-[var(--neutral-950)]`},ee={primary:`hover:brightness-110 active:brightness-95`,secondary:`hover:bg-[var(--color-surface-tinted)] active:brightness-95`,tertiary:`hover:bg-[var(--color-surface-tinted)] active:bg-[var(--color-surface-section)]`,destructive:`hover:brightness-90 active:brightness-80`,accent:`hover:brightness-110 active:brightness-95`},S={sm:`h-8  px-3 gap-1.5 text-[10px]`,md:`h-10 px-4 gap-2   text-[var(--type-label-size)]`,lg:`h-12 px-6 gap-2   text-[var(--type-label-size)]`};function C({variant:e=`primary`,size:t=`md`,hasLeadingIcon:n,hasTrailingIcon:r,isFullWidth:i=!1,isLoading:a=!1,disabled:o=!1,children:s,onClick:c,type:l=`button`,"aria-label":u,className:d=``}){let f=o||a;return(0,y.jsxs)(`button`,{type:l,disabled:f,onClick:c,"aria-label":u,"aria-busy":a||void 0,style:e===`primary`?{background:`var(--color-surface-hero-gradient)`}:void 0,className:[`inline-flex items-center justify-center`,`rounded-[var(--radius-btn)]`,`font-[var(--font-body)]`,`font-[var(--weight-semibold)]`,`tracking-[var(--tracking-wider)]`,`whitespace-nowrap select-none cursor-pointer border-0 outline-none`,`transition-[filter,background-color,opacity] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`,x[e],f?``:ee[e],S[t],i?`w-full`:``,f?`opacity-40 cursor-not-allowed`:``,d].filter(Boolean).join(` `),children:[a?(0,y.jsx)(b,{}):n,s&&(0,y.jsx)(`span`,{children:s}),!a&&r]})}var te=`import { type ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'accent'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  hasLeadingIcon?: ReactNode
  hasTrailingIcon?: ReactNode
  isFullWidth?: boolean
  isLoading?: boolean
  disabled?: boolean
  children?: ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
  className?: string
}

// ── Spinner ──────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <svg
      className="animate-spin shrink-0"
      width="14" height="14" viewBox="0 0 14 14"
      fill="none" aria-hidden="true"
    >
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
      <path d="M12 7a5 5 0 0 0-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// ── Estilos por variante ──────────────────────────────────────────────────────

const VARIANT_BASE: Record<ButtonVariant, string> = {
  primary:     'text-[var(--color-text-on-dark)] shadow-[var(--shadow-brand-tinted)]',
  secondary:   'bg-[var(--color-surface-card)] text-[var(--color-action-primary)] border border-[var(--color-action-primary)]',
  tertiary:    'bg-transparent text-[var(--color-action-primary)]',
  destructive: 'bg-[var(--red-500)] text-[var(--color-text-on-dark)]',
  accent:      'bg-[var(--color-action-accent)] text-[var(--neutral-950)]',
}

const VARIANT_HOVER: Record<ButtonVariant, string> = {
  primary:     'hover:brightness-110 active:brightness-95',
  secondary:   'hover:bg-[var(--color-surface-tinted)] active:brightness-95',
  tertiary:    'hover:bg-[var(--color-surface-tinted)] active:bg-[var(--color-surface-section)]',
  destructive: 'hover:brightness-90 active:brightness-80',
  accent:      'hover:brightness-110 active:brightness-95',
}

// ── Estilos por tamaño ───────────────────────────────────────────────────────

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-8  px-3 gap-1.5 text-[10px]',
  md: 'h-10 px-4 gap-2   text-[var(--type-label-size)]',
  lg: 'h-12 px-6 gap-2   text-[var(--type-label-size)]',
}

// ── Componente ───────────────────────────────────────────────────────────────

export function Button({
  variant = 'primary',
  size = 'md',
  hasLeadingIcon,
  hasTrailingIcon,
  isFullWidth = false,
  isLoading = false,
  disabled = false,
  children,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
  className = '',
}: ButtonProps) {
  const isDisabled = disabled || isLoading

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={isLoading || undefined}
      style={variant === 'primary' ? { background: 'var(--color-surface-hero-gradient)' } : undefined}
      className={[
        // Base
        'inline-flex items-center justify-center',
        'rounded-[var(--radius-btn)]',
        'font-[var(--font-body)]',
        'font-[var(--weight-semibold)]',
        'tracking-[var(--tracking-wider)]',
        'whitespace-nowrap select-none cursor-pointer border-0 outline-none',
        'transition-[filter,background-color,opacity] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
        // Focus visible
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
        // Variante
        VARIANT_BASE[variant],
        // Hover/Active (solo si no disabled)
        !isDisabled ? VARIANT_HOVER[variant] : '',
        // Tamaño
        SIZE_CLASSES[size],
        // Full width
        isFullWidth ? 'w-full' : '',
        // Disabled
        isDisabled ? 'opacity-40 cursor-not-allowed' : '',
        className,
      ].filter(Boolean).join(' ')}
    >
      {isLoading ? <Spinner /> : hasLeadingIcon}
      {children && <span>{children}</span>}
      {!isLoading && hasTrailingIcon}
    </button>
  )
}

export default Button
`,ne={live:{label:`En Vivo`,bg:`var(--brand-en-vivo)`,text:`var(--color-text-on-dark)`,dot:!0},negotiable:{label:`Negociable`,bg:`var(--brand-negociable)`,text:`var(--neutral-950)`},closed:{label:`Cerrado`,bg:`var(--gray-300)`,text:`var(--gray-600)`},upcoming:{label:`Próximo`,bg:`var(--surface-lavender)`,text:`var(--purple-600)`},new:{label:`Nuevo`,bg:`var(--purple-600)`,text:`var(--color-text-on-dark)`},featured:{label:`Destacado`,bg:`var(--neutral-950)`,text:`var(--color-text-on-dark)`}},re={sm:`px-2 py-0.5 gap-1`,md:`px-2.5 py-1 gap-1.5`};function w({type:e,size:t=`md`,disabled:n=!1,className:r=``}){let{label:i,bg:a,text:o,dot:s}=ne[e];return(0,y.jsxs)(`span`,{style:{background:a,color:o},className:[`inline-flex items-center`,`rounded-[var(--radius-full)]`,`font-[var(--font-body)]`,`text-[var(--type-badge-size)]`,`font-[var(--type-badge-weight)]`,`leading-[var(--type-badge-lh)]`,`tracking-[var(--type-badge-tracking)]`,`uppercase whitespace-nowrap select-none`,re[t],n?`opacity-40`:``,r].filter(Boolean).join(` `),children:[s&&!n&&(0,y.jsx)(`span`,{"aria-hidden":`true`,className:`shrink-0 size-1.5 rounded-full animate-pulse`,style:{background:`var(--color-status-live)`}}),i]})}function ie({label:e,placeholder:t,value:n,defaultValue:r,onChange:i,variant:a=`default`,leadingIcon:o,trailingAction:s,hint:c,error:l,disabled:u=!1,readOnly:d=!1,type:f=`text`,id:p,name:m,className:h=``}){let g=(0,_.useId)(),v=p??g,b=c||l?`${v}-hint`:void 0,x=!!l,ee=d&&!u;return(0,y.jsxs)(`div`,{className:[`flex flex-col gap-1.5 w-full`,h].join(` `),children:[(0,y.jsx)(`label`,{htmlFor:v,className:[`text-[var(--type-label-size)] font-[var(--type-label-weight)] leading-[var(--type-label-lh)] tracking-[var(--type-label-tracking)]`,`font-[var(--font-body)]`,u?`text-[var(--color-text-disabled)]`:`text-[var(--color-text-body)]`].join(` `),children:e}),(0,y.jsxs)(`div`,{className:`relative flex items-center`,children:[a===`withLeadingIcon`&&o&&(0,y.jsx)(`span`,{"aria-hidden":`true`,className:`absolute left-3 flex items-center pointer-events-none text-[var(--color-text-muted)]`,children:o}),(0,y.jsx)(`input`,{id:v,name:m,type:f,value:n,defaultValue:r,onChange:i,placeholder:t,disabled:u,readOnly:ee,"aria-describedby":b,"aria-invalid":x||void 0,className:[`w-full h-10`,`rounded-[var(--radius-btn)]`,`bg-[var(--color-surface-input)]`,`font-[var(--font-body)]`,`text-[var(--type-body-sm-size)] leading-[var(--type-body-sm-lh)]`,`text-[var(--color-text-on-surface)]`,`border-0 outline-none`,`transition-[box-shadow,background-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`placeholder:text-[var(--color-text-muted)]`,a===`withLeadingIcon`?`pl-9 pr-3`:a===`withTrailingAction`?`pl-3 pr-10`:`px-3`,`focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]`,x?`shadow-[0_0_0_1.5px_var(--red-500)] focus:shadow-[0_0_0_1.5px_var(--red-500)]`:``,ee?`bg-[var(--gray-100)] cursor-default`:``,u?`opacity-40 cursor-not-allowed`:``].filter(Boolean).join(` `)}),a===`withTrailingAction`&&s&&(0,y.jsx)(`span`,{className:`absolute right-3 flex items-center`,children:s})]}),(c||l)&&(0,y.jsx)(`p`,{id:b,className:[`text-[var(--type-label-size)] leading-[var(--type-label-lh)]`,`font-[var(--font-body)]`,x?`text-[var(--red-500)]`:`text-[var(--color-text-muted)]`].join(` `),children:l??c})]})}function ae(e){let t=e instanceof Date?e.getTime():e;return Math.max(0,Math.floor((t-Date.now())/1e3))}function oe(e){return e<=0?`00:00:00`:[Math.floor(e/3600),Math.floor(e%3600/60),e%60].map(e=>String(e).padStart(2,`0`)).join(`:`)}function se(e){return e<=0?`expired`:e<3600?`urgent`:`default`}function ce({endsAt:e,className:t=``}){let[n,r]=(0,_.useState)(()=>ae(e));(0,_.useEffect)(()=>{if(n<=0)return;let t=setInterval(()=>{let n=ae(e);r(n),n<=0&&clearInterval(t)},1e3);return()=>clearInterval(t)},[e]);let i=se(n),a=i===`expired`?`text-[var(--gray-500)]`:i===`urgent`?`text-[var(--color-text-accent)]`:`text-[var(--color-text-on-surface)]`;return(0,y.jsx)(`time`,{dateTime:new Date((e instanceof Date,e)).toISOString(),"aria-label":i===`expired`?`Subasta cerrada`:`Cierra en ${oe(n)}`,className:[`inline-flex items-center`,`font-[var(--font-mono)]`,`text-[var(--type-hero-timer-size)]`,`font-[var(--type-hero-timer-weight)]`,`leading-[var(--type-hero-timer-lh)]`,`tracking-[var(--type-hero-timer-tracking)]`,`tabular-nums`,a,t].filter(Boolean).join(` `),children:i===`expired`?`CERRADO`:oe(n)})}var le={hero:{labelSize:`text-[var(--type-label-size)] tracking-[var(--tracking-wider)]`,amountSize:`text-[var(--type-hero-title-size)] leading-[var(--type-hero-title-lh)]`,amountWeight:`font-[var(--weight-extrabold)]`,currencySize:`text-[var(--font-size-xl)]`,gap:`gap-0.5`},card:{labelSize:`text-[var(--type-label-size)] tracking-[var(--tracking-micro)]`,amountSize:`text-[var(--type-card-featured-size)] leading-[var(--type-card-featured-lh)]`,amountWeight:`font-[var(--weight-bold)]`,currencySize:`text-[var(--font-size-xs)]`,gap:`gap-0`},compact:{labelSize:`text-[8px] tracking-[var(--tracking-micro)]`,amountSize:`text-[var(--font-size-xs)] leading-[var(--line-height-tight)]`,amountWeight:`font-[var(--weight-semibold)]`,currencySize:`text-[8px]`,gap:`gap-0`}};function ue(e){return e.toLocaleString(`es-PE`,{minimumFractionDigits:0,maximumFractionDigits:0})}function T({context:e}){return(0,y.jsxs)(`div`,{className:`flex flex-col gap-1 animate-pulse`,children:[(0,y.jsx)(`div`,{className:`h-2.5 w-16 rounded bg-[var(--gray-300)]`}),(0,y.jsx)(`div`,{className:`${{hero:`h-8`,card:`h-4`,compact:`h-3`}[e]} w-28 rounded bg-[var(--gray-300)]`})]})}function E({label:e,amount:t,currency:n=`US$`,context:r=`card`,isLoading:i=!1,className:a=``}){if(i)return(0,y.jsx)(T,{context:r});let o=le[r];return(0,y.jsxs)(`div`,{className:[`inline-flex flex-col`,o.gap,a].join(` `),children:[(0,y.jsx)(`span`,{className:[`font-[var(--font-body)]`,`font-[var(--weight-semibold)]`,`uppercase`,`text-[var(--color-text-price-label)]`,o.labelSize].join(` `),children:e}),(0,y.jsxs)(`div`,{className:`inline-flex items-baseline gap-0.5`,children:[(0,y.jsx)(`span`,{className:[`font-[var(--font-mono)]`,`font-[var(--weight-semibold)]`,`text-[var(--color-text-primary)]`,o.currencySize,`tabular-nums`].join(` `),children:n}),(0,y.jsx)(`span`,{className:[`font-[var(--font-mono)]`,o.amountWeight,`text-[var(--color-text-primary)]`,o.amountSize,`tabular-nums`].join(` `),children:ue(t)})]})]})}var de={live:`var(--color-border-card-accent-auction)`,negotiable:`var(--color-border-card-accent-negotiable)`,upcoming:`var(--purple-600)`,new:`var(--purple-600)`,featured:`var(--neutral-950)`,closed:`var(--gray-300)`},fe={title:`TOYOTA HILUX`,subtitle:`2024 · Lima, Perú`,badge:`live`,priceLabel:`PRECIO BASE`,price:17999,currency:`US$`,endsAt:Date.now()+2700*1e3};function pe({filled:e}){return(0,y.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M8 13.5S1.5 9 1.5 4.5A3.5 3.5 0 0 1 8 2.75 3.5 3.5 0 0 1 14.5 4.5C14.5 9 8 13.5 8 13.5Z`,fill:e?`currentColor`:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function me({variant:e}){return e===`compact`?(0,y.jsxs)(`div`,{className:`flex items-center gap-3 px-3 py-2.5 animate-pulse bg-[var(--color-surface-card)] rounded-[var(--radius-card)]`,children:[(0,y.jsx)(`div`,{className:`h-3 w-32 rounded bg-[var(--gray-300)]`}),(0,y.jsx)(`div`,{className:`h-3 w-16 rounded bg-[var(--gray-300)] ml-auto`})]}):(0,y.jsxs)(`div`,{className:`flex flex-col w-full rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)] animate-pulse bg-[var(--color-surface-card)]`,children:[(0,y.jsx)(`div`,{className:`${e===`featured`?`h-[200px]`:`h-[132px]`} w-full bg-[var(--gray-300)]`}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 px-3 py-3`,children:[(0,y.jsx)(`div`,{className:`h-2.5 w-24 rounded bg-[var(--gray-300)]`}),(0,y.jsx)(`div`,{className:`h-2 w-16 rounded bg-[var(--gray-300)]`}),(0,y.jsx)(`div`,{className:`h-6 w-28 rounded bg-[var(--gray-300)] mt-1`})]}),(0,y.jsx)(`div`,{className:`h-1 w-full bg-[var(--gray-300)]`})]})}function D(){return(0,y.jsx)(`div`,{className:`w-full h-full flex items-center justify-center`,style:{background:`linear-gradient(150deg, oklch(0.294 0.149 288.000) 0%, oklch(0.242 0.138 286.500) 100%)`},children:(0,y.jsxs)(`svg`,{width:`56`,height:`28`,viewBox:`0 0 72 36`,fill:`white`,"aria-hidden":`true`,opacity:`0.25`,children:[(0,y.jsx)(`path`,{d:`M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z`}),(0,y.jsx)(`circle`,{cx:`18`,cy:`28`,r:`4`,fill:`none`,stroke:`white`,strokeWidth:`2`}),(0,y.jsx)(`circle`,{cx:`54`,cy:`28`,r:`4`,fill:`none`,stroke:`white`,strokeWidth:`2`})]})})}function O({lot:e,onFavorite:t,onClick:n}){return(0,y.jsxs)(`article`,{onClick:()=>n?.(e.id),role:n?`button`:void 0,tabIndex:n?0:void 0,onKeyDown:n?t=>{(t.key===`Enter`||t.key===` `)&&n(e.id)}:void 0,className:[`flex flex-col w-full overflow-hidden`,`bg-[var(--color-surface-card)]`,`rounded-[var(--radius-card)]`,`shadow-[var(--shadow-card)]`,n?`cursor-pointer`:``,`transition-shadow duration-[var(--duration-standard)] ease-[var(--easing-standard)]`,`hover:shadow-[var(--shadow-md)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`].filter(Boolean).join(` `),children:[(0,y.jsxs)(`div`,{className:`relative h-[132px] shrink-0 overflow-hidden bg-[var(--gray-100)]`,children:[e.imageUrl?(0,y.jsx)(`img`,{src:e.imageUrl,alt:e.title,className:`w-full h-full object-cover`}):(0,y.jsx)(D,{}),(0,y.jsx)(`div`,{className:`absolute top-2 left-2`,children:(0,y.jsx)(w,{type:e.badge,size:`sm`})})]}),(0,y.jsxs)(`div`,{className:`flex flex-col flex-1 px-3 pt-2 pb-2 gap-1`,children:[(0,y.jsx)(`h3`,{className:`m-0 uppercase font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]`,style:{fontSize:`var(--type-card-title-size)`,lineHeight:`var(--type-card-title-lh)`},children:e.title}),e.subtitle&&(0,y.jsx)(`p`,{className:`m-0 text-[var(--color-text-muted)] font-[var(--font-body)] font-[var(--weight-regular)]`,style:{fontSize:`var(--font-size-xs)`,lineHeight:`var(--line-height-tight)`},children:e.subtitle}),(0,y.jsxs)(`div`,{className:`flex items-end justify-between mt-1`,children:[(0,y.jsx)(E,{context:`card`,label:e.priceLabel??`Precio Base`,amount:e.price,currency:e.currency}),(0,y.jsx)(`button`,{type:`button`,onClick:n=>{n.stopPropagation(),t?.(e.id)},"aria-label":e.isFavorited?`Quitar de favoritos`:`Agregar a favoritos`,"aria-pressed":e.isFavorited,className:[`size-8 shrink-0 flex items-center justify-center`,`rounded-[var(--radius-icon-btn)] border-0 cursor-pointer`,`transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`,`active:scale-90`,e.isFavorited?`bg-[var(--color-action-primary)] text-[var(--color-text-on-dark)]`:`bg-[var(--color-surface-icon-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-action-primary)]`].join(` `),children:(0,y.jsx)(pe,{filled:!!e.isFavorited})})]}),e.endsAt&&e.badge!==`closed`&&(0,y.jsxs)(`div`,{className:`flex items-center gap-1.5 mt-0.5`,children:[(0,y.jsx)(`span`,{className:`text-[var(--color-text-muted)] font-[var(--font-body)]`,style:{fontSize:`var(--font-size-2xs)`,lineHeight:`var(--line-height-2xs)`},children:`CIERRA EN`}),(0,y.jsx)(ce,{endsAt:e.endsAt,className:`!text-[var(--font-size-xs)] !leading-[var(--line-height-tight)]`})]})]}),(0,y.jsx)(`div`,{className:`h-1 w-full shrink-0`,style:{background:de[e.badge]},"aria-hidden":`true`})]})}function he({lot:e,onFavorite:t,onClick:n}){return(0,y.jsxs)(`article`,{onClick:()=>n?.(e.id),role:n?`button`:void 0,tabIndex:n?0:void 0,onKeyDown:n?t=>{(t.key===`Enter`||t.key===` `)&&n(e.id)}:void 0,className:[`flex flex-col w-full overflow-hidden`,`bg-[var(--color-surface-card)]`,`rounded-[var(--radius-card)]`,`shadow-[var(--shadow-floating)]`,n?`cursor-pointer`:``,`transition-shadow duration-[var(--duration-standard)] ease-[var(--easing-standard)]`,`hover:shadow-[var(--shadow-lg)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`].filter(Boolean).join(` `),children:[(0,y.jsxs)(`div`,{className:`relative h-[200px] shrink-0 overflow-hidden bg-[var(--gray-100)]`,children:[e.imageUrl?(0,y.jsx)(`img`,{src:e.imageUrl,alt:e.title,className:`w-full h-full object-cover`}):(0,y.jsx)(D,{}),(0,y.jsxs)(`div`,{className:`absolute inset-0 flex items-start justify-between p-3`,children:[(0,y.jsx)(w,{type:e.badge,size:`md`}),(0,y.jsx)(`button`,{type:`button`,onClick:n=>{n.stopPropagation(),t?.(e.id)},"aria-label":e.isFavorited?`Quitar de favoritos`:`Agregar a favoritos`,"aria-pressed":e.isFavorited,className:[`size-9 flex items-center justify-center`,`rounded-[var(--radius-icon-btn)] border-0 cursor-pointer`,`backdrop-blur-[8px]`,`transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`,`active:scale-90`,e.isFavorited?`bg-[var(--color-action-primary)] text-white`:`bg-[var(--color-surface-glass)] text-white hover:bg-white/60`].join(` `),children:(0,y.jsx)(pe,{filled:!!e.isFavorited})})]})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 px-4 pt-3 pb-3`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`m-0 uppercase font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]`,style:{fontSize:`var(--type-card-featured-size)`,lineHeight:`var(--type-card-featured-lh)`},children:e.title}),e.subtitle&&(0,y.jsx)(`p`,{className:`m-0 mt-0.5 text-[var(--color-text-muted)] font-[var(--font-body)]`,style:{fontSize:`var(--font-size-xs)`,lineHeight:`var(--line-height-tight)`},children:e.subtitle})]}),(0,y.jsxs)(`div`,{className:`flex items-end justify-between`,children:[(0,y.jsx)(E,{context:`hero`,label:e.priceLabel??`Precio Base`,amount:e.price,currency:e.currency}),e.endsAt&&e.badge!==`closed`&&(0,y.jsxs)(`div`,{className:`flex flex-col items-end gap-0.5`,children:[(0,y.jsx)(`span`,{className:`text-[var(--color-text-muted)] font-[var(--font-body)] uppercase`,style:{fontSize:`var(--font-size-2xs)`},children:`Cierra en`}),(0,y.jsx)(ce,{endsAt:e.endsAt})]})]})]}),(0,y.jsx)(`div`,{className:`h-1 w-full shrink-0`,style:{background:de[e.badge]},"aria-hidden":`true`})]})}function ge({lot:e,onClick:t}){return(0,y.jsxs)(`div`,{onClick:()=>t?.(e.id),role:t?`button`:void 0,tabIndex:t?0:void 0,onKeyDown:t?n=>{(n.key===`Enter`||n.key===` `)&&t(e.id)}:void 0,className:[`flex items-center justify-between`,`px-3 py-2.5 gap-3`,`bg-[var(--color-surface-card)]`,`border-b border-[var(--color-border-section-divider)]`,`last:border-b-0`,t?`cursor-pointer hover:bg-[var(--color-surface-section)] transition-colors duration-[var(--duration-micro)]`:``,`focus-visible:outline-2 focus-visible:outline-[var(--color-action-primary)]`].filter(Boolean).join(` `),children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-2 min-w-0`,children:[(0,y.jsx)(w,{type:e.badge,size:`sm`}),(0,y.jsx)(`span`,{className:`truncate uppercase font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]`,style:{fontSize:`var(--type-card-title-size)`,lineHeight:`var(--type-card-title-lh)`},children:e.title})]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-3 shrink-0`,children:[e.endsAt&&e.badge!==`closed`&&(0,y.jsx)(ce,{endsAt:e.endsAt,className:`!text-[var(--font-size-xs)] !leading-[var(--line-height-tight)]`}),(0,y.jsx)(E,{context:`compact`,label:e.priceLabel??`Base`,amount:e.price,currency:e.currency})]})]})}function _e({variant:e=`standard`,lot:t=fe,isLoading:n=!1,onFavorite:r,onClick:i,className:a=``}){if(n)return(0,y.jsx)(me,{variant:e});let o=a?`${a}`:``;return e===`featured`?(0,y.jsx)(`div`,{className:o,children:(0,y.jsx)(he,{lot:t,onFavorite:r,onClick:i})}):e===`compact`?(0,y.jsx)(`div`,{className:o,children:(0,y.jsx)(ge,{lot:t,onClick:i})}):(0,y.jsx)(`div`,{className:o,children:(0,y.jsx)(O,{lot:t,onFavorite:r,onClick:i})})}function ve(e,t=`US$`){return`${t} ${e.toLocaleString(`es-PE`)}`}function ye(e){return Number(e.replace(/[^0-9]/g,``))}function be(){return(0,y.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`10`,cy:`10`,r:`9`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M6 10l3 3 5-5`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}function xe(){return(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M8 2L14.5 13.5H1.5L8 2Z`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M8 7v3`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,y.jsx)(`circle`,{cx:`8`,cy:`11.5`,r:`0.75`,fill:`currentColor`})]})}function Se({lotId:e,minimumBid:t,currentBid:n,currency:r=`US$`,onSubmit:i,disabled:a=!1,className:o=``}){let s=(0,_.useId)(),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(`idle`),[f,p]=(0,_.useState)(``),m=ye(c),h=m>=t&&m>0,g=c.length>0&&!h?m===0?`Ingresa un monto válido.`:`La oferta mínima es ${ve(t,r)}.`:``,v=(0,_.useCallback)(e=>{l(e.target.value.replace(/[^0-9]/g,``)),u===`idle`&&d(`active`)},[u]),b=()=>{h&&d(`confirming`)},x=async()=>{d(`submitting`),p(``);try{await(i?.(m,e)??new Promise(e=>setTimeout(e,1200))),d(`success`)}catch(e){p(e instanceof Error?e.message:`Error al registrar la oferta. Intenta nuevamente.`),d(`error`)}},ee=()=>{d(c?`active`:`idle`)},S=()=>{l(``),p(``),d(`idle`)};if(u===`success`)return(0,y.jsxs)(`div`,{className:[`flex flex-col items-center gap-3 py-6 px-4 text-center`,o].join(` `),children:[(0,y.jsx)(`span`,{className:`text-[var(--color-action-accent)]`,children:(0,y.jsx)(be,{})}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`m-0 font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]`,style:{fontSize:`var(--type-label-size)`},children:`OFERTA REGISTRADA`}),(0,y.jsx)(`p`,{className:`m-0 mt-1 font-[var(--font-mono)] font-[var(--weight-extrabold)] tabular-nums text-[var(--color-text-primary)]`,style:{fontSize:`var(--type-hero-title-size)`,lineHeight:`var(--type-hero-title-lh)`},children:ve(m,r)})]}),(0,y.jsx)(C,{variant:`tertiary`,size:`sm`,onClick:S,children:`Nueva oferta`})]});if(u===`confirming`)return(0,y.jsxs)(`div`,{className:[`flex flex-col gap-4 p-4 rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] bg-[var(--color-surface-card)]`,o].join(` `),children:[(0,y.jsxs)(`div`,{className:`text-center`,children:[(0,y.jsx)(`p`,{className:`m-0 text-[var(--color-text-muted)] font-[var(--font-body)] uppercase`,style:{fontSize:`var(--type-label-size)`,letterSpacing:`var(--tracking-wider)`},children:`Confirmar oferta`}),(0,y.jsx)(`p`,{className:`m-0 mt-1 font-[var(--font-mono)] font-[var(--weight-extrabold)] tabular-nums text-[var(--color-text-primary)]`,style:{fontSize:`var(--type-hero-title-size)`,lineHeight:`var(--type-hero-title-lh)`},children:ve(m,r)}),(0,y.jsx)(`p`,{className:`m-0 mt-1 text-[var(--color-text-muted)] font-[var(--font-body)]`,style:{fontSize:`var(--font-size-xs)`},children:`Esta acción no se puede deshacer.`})]}),(0,y.jsxs)(`div`,{className:`flex gap-2`,children:[(0,y.jsx)(C,{variant:`secondary`,size:`md`,isFullWidth:!0,onClick:ee,children:`Cancelar`}),(0,y.jsx)(C,{variant:`accent`,size:`md`,isFullWidth:!0,onClick:x,children:`CONFIRMAR`})]})]});let te=u===`error`||!!g,ne=f||g;return(0,y.jsxs)(`form`,{className:[`flex flex-col gap-3`,o].join(` `),onSubmit:e=>{e.preventDefault(),b()},noValidate:!0,children:[n!==void 0&&(0,y.jsxs)(`div`,{className:`flex items-center justify-between px-3 py-2 rounded-[var(--radius-btn)] bg-[var(--color-surface-section)]`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)]`,style:{fontSize:`var(--font-size-2xs)`,letterSpacing:`var(--tracking-wider)`},children:`Oferta actual`}),(0,y.jsx)(`span`,{className:`font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums text-[var(--color-text-on-surface)]`,style:{fontSize:`var(--type-label-size)`},children:ve(n,r)})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,y.jsx)(`label`,{htmlFor:s,className:`font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-body)]`,style:{fontSize:`var(--type-label-size)`,letterSpacing:`var(--tracking-wider)`},children:`Tu oferta`}),(0,y.jsxs)(`div`,{className:`relative flex items-center`,children:[(0,y.jsx)(`span`,{className:`absolute left-3 font-[var(--font-mono)] font-[var(--weight-semibold)] tabular-nums pointer-events-none select-none text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-hero-title-size)`,lineHeight:`var(--type-hero-title-lh)`},children:r}),(0,y.jsx)(`input`,{id:s,type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,value:c?Number(c).toLocaleString(`es-PE`):``,onChange:v,placeholder:`0`,disabled:a||u===`submitting`,"aria-invalid":te||void 0,"aria-describedby":`${s}-hint`,className:[`w-full h-14 pl-14 pr-3`,`rounded-[var(--radius-btn)]`,`bg-[var(--color-surface-input)]`,`font-[var(--font-mono)] font-[var(--weight-extrabold)] tabular-nums`,`text-[var(--color-text-on-surface)]`,`border-0 outline-none`,`transition-[box-shadow] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`placeholder:text-[var(--color-text-muted)]`,te?`shadow-[0_0_0_1.5px_var(--red-500)]`:`focus:shadow-[0_0_0_1.5px_var(--color-action-accent)]`,a?`opacity-40 cursor-not-allowed`:``].filter(Boolean).join(` `),style:{fontSize:`var(--type-hero-title-size)`,lineHeight:`var(--type-hero-title-lh)`}})]}),(0,y.jsx)(`div`,{id:`${s}-hint`,className:`min-h-[16px]`,children:ne?(0,y.jsxs)(`span`,{className:`flex items-center gap-1 text-[var(--red-500)] font-[var(--font-body)]`,style:{fontSize:`var(--type-label-size)`},children:[(0,y.jsx)(xe,{}),ne]}):(0,y.jsxs)(`span`,{className:`text-[var(--color-text-muted)] font-[var(--font-body)]`,style:{fontSize:`var(--type-label-size)`},children:[`Mínimo: `,ve(t,r)]})})]}),(0,y.jsx)(C,{type:`submit`,variant:`accent`,size:`lg`,isFullWidth:!0,isLoading:u===`submitting`,disabled:a||!h,children:`REALIZAR OFERTA`})]})}function Ce(){return(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`4.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M10.5 10.5L13 13`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function we(){return(0,y.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M9 2a5 5 0 0 1 5 5v3l1.5 2.5H2.5L4 10V7a5 5 0 0 1 5-5Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M7.5 14.5a1.5 1.5 0 0 0 3 0`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function Te(){return(0,y.jsxs)(`div`,{className:`flex items-center gap-2 select-none`,"aria-label":`VMC Subastas`,children:[(0,y.jsx)(`div`,{className:`size-8 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0`,style:{background:`oklch(1.000 0.000 0.000 / 0.15)`},"aria-hidden":`true`,children:(0,y.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,children:[(0,y.jsx)(`rect`,{x:`2`,y:`4`,width:`14`,height:`11`,rx:`1.5`,stroke:`white`,strokeWidth:`1.4`}),(0,y.jsx)(`circle`,{cx:`9`,cy:`9.5`,r:`2.5`,stroke:`white`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M9 2v2M5 2.5L6 4M13 2.5L12 4`,stroke:`white`,strokeWidth:`1.3`,strokeLinecap:`round`})]})}),(0,y.jsxs)(`div`,{className:`flex flex-col leading-none`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-extrabold)] text-[var(--color-text-on-dark)]`,style:{fontSize:`13px`,letterSpacing:`-0.3px`},children:`VMC`}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-regular)] text-[var(--color-text-on-dark-muted)]`,style:{fontSize:`10px`,letterSpacing:`0.5px`},children:`SUBASTAS`})]})]})}function Ee({user:e}){let t=e.name.split(` `).map(e=>e[0]).join(``).slice(0,2).toUpperCase();return(0,y.jsx)(`div`,{className:`size-8 rounded-[var(--radius-icon-btn)] flex items-center justify-center shrink-0 select-none`,style:{background:`var(--color-action-accent)`,color:`var(--neutral-950)`},"aria-label":e.name,children:e.avatarUrl?(0,y.jsx)(`img`,{src:e.avatarUrl,alt:e.name,className:`size-full object-cover rounded-[var(--radius-icon-btn)]`}):(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-bold)]`,style:{fontSize:`11px`},children:t})})}function De({user:e,onLogin:t,onSearch:n,onNotifications:r,extra:i,className:a=``}){return(0,y.jsxs)(`header`,{style:{background:`var(--color-surface-header)`},className:[`w-full h-16 flex items-center px-[var(--spacing-section-x)] gap-4`,`z-[var(--z-sidebar)]`,a].filter(Boolean).join(` `),children:[(0,y.jsx)(Te,{}),(0,y.jsxs)(`div`,{className:`flex-1 max-w-[320px] relative`,children:[(0,y.jsx)(`span`,{className:`absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-on-dark-subtle)] pointer-events-none`,children:(0,y.jsx)(Ce,{})}),(0,y.jsx)(`input`,{type:`search`,placeholder:`Buscar vehículo o lote...`,onChange:e=>n?.(e.target.value),className:[`w-full h-9 pl-9 pr-3`,`rounded-[var(--radius-btn)]`,`bg-[oklch(1.000_0.000_0.000_/_0.10)]`,`font-[var(--font-body)] text-[var(--color-text-on-dark)]`,`border-0 outline-none`,`placeholder:text-[var(--color-text-on-dark-subtle)]`,`focus:bg-[oklch(1.000_0.000_0.000_/_0.15)]`,`transition-colors duration-[var(--duration-micro)]`].join(` `),style:{fontSize:`var(--font-size-xs)`}})]}),(0,y.jsx)(`div`,{className:`flex-1`}),(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[i,e&&(0,y.jsx)(`button`,{type:`button`,onClick:r,"aria-label":`Notificaciones`,className:[`size-9 flex items-center justify-center`,`rounded-[var(--radius-icon-btn)] border-0 cursor-pointer`,`text-[var(--color-text-on-dark-high)]`,`bg-transparent hover:bg-[var(--color-surface-nav-active)]`,`transition-colors duration-[var(--duration-micro)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`].join(` `),children:(0,y.jsx)(we,{})}),e?(0,y.jsx)(Ee,{user:e}):(0,y.jsx)(C,{variant:`secondary`,size:`sm`,onClick:t,className:`!border-[oklch(1.000_0.000_0.000_/_0.30)] !text-[var(--color-text-on-dark)] !bg-transparent hover:!bg-[var(--color-surface-nav-active)]`,children:`INGRESA`})]})]})}function Oe(){return(0,y.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`2`,y:`2`,width:`6`,height:`6`,rx:`1`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`rect`,{x:`10`,y:`2`,width:`6`,height:`6`,rx:`1`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`rect`,{x:`2`,y:`10`,width:`6`,height:`6`,rx:`1`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`rect`,{x:`10`,y:`10`,width:`6`,height:`6`,rx:`1`,stroke:`currentColor`,strokeWidth:`1.5`})]})}function ke(){return(0,y.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M3 15l4-4M10 4l4 4-6 6-4-4 6-6Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M14 14h2`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function Ae(){return(0,y.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M9 15S2 10.5 2 5.5A4 4 0 0 1 9 3.5a4 4 0 0 1 7 2C16 10.5 9 15 9 15Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function je(){return(0,y.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M3 13l4-4 3 3 5-6`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function Me(){return(0,y.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`9`,cy:`9`,r:`7`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M7 7a2 2 0 1 1 2.5 1.9c-.5.2-.5.6-.5 1.1`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,y.jsx)(`circle`,{cx:`9`,cy:`12.5`,r:`.75`,fill:`currentColor`})]})}var Ne=[{id:`subastas`,label:`Subastas`,icon:(0,y.jsx)(Oe,{})},{id:`mis-ofertas`,label:`Mis Ofertas`,icon:(0,y.jsx)(ke,{})},{id:`favoritos`,label:`Favoritos`,icon:(0,y.jsx)(Ae,{})},{id:`mercado`,label:`Mercado`,icon:(0,y.jsx)(je,{})}],Pe=[{id:`ayuda`,label:`Ayuda`,icon:(0,y.jsx)(Me,{})}];function Fe(){return(0,y.jsxs)(`div`,{className:`flex items-center gap-2.5 px-4 h-16 shrink-0 select-none border-b border-[var(--color-border-nav-separator)]`,children:[(0,y.jsx)(`div`,{className:`size-8 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0`,style:{background:`oklch(1.000 0.000 0.000 / 0.15)`},"aria-hidden":`true`,children:(0,y.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,children:[(0,y.jsx)(`rect`,{x:`2`,y:`4`,width:`14`,height:`11`,rx:`1.5`,stroke:`white`,strokeWidth:`1.4`}),(0,y.jsx)(`circle`,{cx:`9`,cy:`9.5`,r:`2.5`,stroke:`white`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M9 2v2M5 2.5L6 4M13 2.5L12 4`,stroke:`white`,strokeWidth:`1.3`,strokeLinecap:`round`})]})}),(0,y.jsxs)(`div`,{className:`flex flex-col leading-none`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-extrabold)] text-[var(--color-text-on-dark)]`,style:{fontSize:`13px`,letterSpacing:`-0.3px`},children:`VMC`}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-regular)] text-[var(--color-text-on-dark-muted)]`,style:{fontSize:`10px`,letterSpacing:`0.5px`},children:`SUBASTAS`})]})]})}function Ie({item:e,isActive:t,onClick:n}){return(0,y.jsxs)(`button`,{type:`button`,onClick:n,"aria-current":t?`page`:void 0,className:[`w-full flex items-center gap-3 px-4 h-11`,`rounded-[var(--radius-btn)] border-0 cursor-pointer text-left`,`font-[var(--font-body)] font-[var(--weight-semibold)]`,`transition-colors duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`,t?`bg-[var(--color-surface-nav-active)] text-[var(--color-text-on-dark)]`:`bg-transparent text-[var(--color-text-on-dark-secondary)] hover:bg-[var(--color-surface-nav-active)] hover:text-[var(--color-text-on-dark)]`].join(` `),style:{fontSize:`var(--type-label-size)`,letterSpacing:`var(--tracking-wider)`},children:[(0,y.jsx)(`span`,{className:t?`text-[var(--color-text-on-dark)]`:`text-[var(--color-text-on-dark-muted)]`,children:e.icon}),(0,y.jsx)(`span`,{className:`uppercase`,children:e.label}),e.badge!==void 0&&e.badge>0&&(0,y.jsx)(`span`,{className:`ml-auto size-5 flex items-center justify-center rounded-full font-[var(--weight-bold)] text-[var(--neutral-950)]`,style:{fontSize:`10px`,background:`var(--color-action-accent)`},children:e.badge>9?`9+`:e.badge})]})}function Le({activeId:e=`subastas`,onNavigate:t,className:n=``}){let r=e=>t?.(e);return(0,y.jsxs)(`nav`,{style:{background:`var(--color-surface-sidebar)`,width:`var(--layout-sidebar-width)`},className:[`flex flex-col h-full shrink-0`,n].filter(Boolean).join(` `),"aria-label":`Navegación principal`,children:[(0,y.jsx)(Fe,{}),(0,y.jsx)(`div`,{className:`flex flex-col gap-1 px-3 pt-4 flex-1`,children:Ne.map(t=>(0,y.jsx)(Ie,{item:t,isActive:t.id===e,onClick:()=>r(t.id)},t.id))}),(0,y.jsxs)(`div`,{className:`px-3 pb-4 flex flex-col gap-1`,children:[(0,y.jsx)(`div`,{className:`h-px mx-1 mb-2`,style:{background:`var(--color-border-nav-separator)`}}),Pe.map(t=>(0,y.jsx)(Ie,{item:t,isActive:t.id===e,onClick:()=>r(t.id)},t.id))]})]})}var Re=[{label:`Términos y Condiciones`,href:`#`},{label:`Política de Privacidad`,href:`#`},{label:`Preguntas Frecuentes`,href:`#`},{label:`Contacto`,href:`#`}];function ze(){return(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`2`,y:`2`,width:`12`,height:`12`,rx:`3.5`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,y.jsx)(`circle`,{cx:`8`,cy:`8`,r:`2.8`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,y.jsx)(`circle`,{cx:`11.2`,cy:`4.8`,r:`.7`,fill:`currentColor`})]})}function Be(){return(0,y.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M9.5 3H11V1H9.5C8 1 7 2 7 3.5V5H5.5v2H7v7h2V7h1.5l.5-2H9V3.5c0-.3.2-.5.5-.5Z`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinejoin:`round`})})}function Ve(){return(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`2`,y:`2`,width:`12`,height:`12`,rx:`2`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M5.5 7v4M5.5 5.5v.01M8 11V8.5c0-1 .5-1.5 1.5-1.5S11 7.5 11 8.5V11`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})]})}function He({className:e=``}){return(0,y.jsx)(`footer`,{style:{background:`var(--color-surface-sidebar)`},className:[`w-full px-[var(--spacing-section-x)] py-6`,e].join(` `),children:(0,y.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-extrabold)] text-[var(--color-text-on-dark)]`,style:{fontSize:`13px`,letterSpacing:`-0.3px`},children:`VMC SUBASTAS`}),(0,y.jsx)(`div`,{className:`flex items-center gap-3`,children:[{icon:(0,y.jsx)(ze,{}),label:`Instagram`},{icon:(0,y.jsx)(Be,{}),label:`Facebook`},{icon:(0,y.jsx)(Ve,{}),label:`LinkedIn`}].map(({icon:e,label:t})=>(0,y.jsx)(`a`,{href:`#`,"aria-label":t,className:`text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-text-on-dark)] transition-colors duration-[var(--duration-micro)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`,children:e},t))})]}),(0,y.jsx)(`div`,{className:`h-px`,style:{background:`var(--color-border-nav-separator)`}}),(0,y.jsxs)(`div`,{className:`flex items-center justify-between flex-wrap gap-2`,children:[(0,y.jsx)(`div`,{className:`flex items-center gap-4 flex-wrap`,children:Re.map(e=>(0,y.jsx)(`a`,{href:e.href,className:`font-[var(--font-body)] text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-text-on-dark)] transition-colors duration-[var(--duration-micro)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`,style:{fontSize:`var(--font-size-xs)`},children:e.label},e.label))}),(0,y.jsxs)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-on-dark-subtle)]`,style:{fontSize:`var(--font-size-xs)`},children:[`© `,new Date().getFullYear(),` VMC Subastas. Todos los derechos reservados.`]})]})]})})}function Ue({variant:e=`withSidebar`,user:t,activeSection:n,onNavigate:r,onLogin:i,children:a,className:o=``}){let[s,c]=(0,_.useState)(n??`subastas`);return(0,y.jsx)(`div`,{style:{background:`var(--color-surface-body)`},className:`min-h-screen`,children:(0,y.jsxs)(`div`,{style:{maxWidth:`var(--layout-max-width)`},className:[`mx-auto flex flex-col min-h-screen`,o].join(` `),children:[(0,y.jsx)(De,{user:t,onLogin:i,className:`sticky top-0 z-[var(--z-sidebar)] shrink-0`}),(0,y.jsxs)(`div`,{className:`flex flex-1`,children:[e===`withSidebar`&&(0,y.jsx)(Le,{activeId:s,onNavigate:e=>{c(e),r?.(e)},className:`sticky top-16 h-[calc(100vh-64px)] shrink-0`}),(0,y.jsx)(`main`,{className:`flex-1 min-w-0 bg-[var(--color-surface-page)]`,style:{padding:`var(--spacing-section-x)`},children:a})]}),(0,y.jsx)(He,{})]})})}function We({filled:e}){return(0,y.jsx)(`svg`,{width:`18`,height:`16`,viewBox:`0 0 18 16`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M9 14.5S1 9.5 1 4.5A4 4 0 0 1 9 3a4 4 0 0 1 8 1.5C17 9.5 9 14.5 9 14.5Z`,fill:e?`currentColor`:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function Ge({title:e=`TOYOTA HILUX`,subtitle:t=`2024 | LIMA, PERÚ`,priceLabel:n=`PRECIO BASE`,currency:r=`US$`,price:i=`17,999`,imageUrl:a,isFavorited:o=!1,onFavorite:s,onClick:c,className:l=``}){return(0,y.jsxs)(`article`,{onClick:c,role:c?`button`:void 0,tabIndex:c?0:void 0,onKeyDown:c?e=>{(e.key===`Enter`||e.key===` `)&&c()}:void 0,className:[`flex flex-col w-full`,`bg-[var(--color-surface-card)]`,`rounded-[var(--radius-card)]`,`shadow-[var(--shadow-card)]`,`overflow-hidden`,c?`cursor-pointer`:``,`transition-shadow duration-[var(--duration-standard)] ease-[var(--easing-standard)]`,`hover:shadow-[var(--shadow-card-hover)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`,l].filter(Boolean).join(` `),children:[(0,y.jsx)(`div`,{className:`h-[128px] shrink-0 overflow-hidden bg-[var(--gray-50)]`,children:a?(0,y.jsx)(`img`,{src:a,alt:e,className:`w-full h-full object-cover`}):(0,y.jsx)(`div`,{className:`w-full h-full flex items-center justify-center`,style:{background:`linear-gradient(150deg, #3d3d4f 0%, #2a2a38 100%)`},children:(0,y.jsxs)(`svg`,{width:`64`,height:`32`,viewBox:`0 0 72 36`,fill:`white`,"aria-hidden":`true`,opacity:`0.35`,children:[(0,y.jsx)(`path`,{d:`M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z`}),(0,y.jsx)(`circle`,{cx:`18`,cy:`28`,r:`4`,fill:`none`,stroke:`white`,strokeWidth:`2`}),(0,y.jsx)(`circle`,{cx:`54`,cy:`28`,r:`4`,fill:`none`,stroke:`white`,strokeWidth:`2`})]})})}),(0,y.jsxs)(`div`,{className:`flex flex-col flex-1 px-[var(--space-3)] pt-[var(--space-2)] pb-[var(--space-2)]`,children:[(0,y.jsx)(`h3`,{className:`m-0 font-bold uppercase tracking-wide text-[var(--color-text-primary)] font-['Plus_Jakarta_Sans',sans-serif]`,style:{fontSize:`var(--size-12)`,lineHeight:`var(--lh-12)`},children:e}),(0,y.jsx)(`p`,{className:`mt-[var(--space-1)] mb-0 font-normal text-[var(--color-text-secondary)] font-['Plus_Jakarta_Sans',sans-serif]`,style:{fontSize:`var(--size-11)`,lineHeight:`var(--lh-11)`},children:t}),(0,y.jsxs)(`div`,{className:`flex items-end justify-between mt-[var(--space-2)]`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-0`,children:[(0,y.jsx)(`span`,{className:`font-semibold uppercase text-[var(--color-text-muted)] font-['Plus_Jakarta_Sans',sans-serif]`,style:{fontSize:`var(--size-11)`,lineHeight:`var(--lh-11)`},children:n}),(0,y.jsxs)(`div`,{className:`flex items-baseline gap-[2px]`,children:[(0,y.jsx)(`span`,{className:`font-semibold text-[var(--color-brand-live)] font-['Plus_Jakarta_Sans',sans-serif]`,style:{fontSize:`var(--size-11)`,lineHeight:`var(--lh-11)`},children:r}),(0,y.jsx)(`span`,{className:`font-bold tabular-nums text-[var(--color-brand-live)] font-['Plus_Jakarta_Sans',sans-serif]`,style:{fontSize:`var(--size-16)`,lineHeight:`var(--lh-16)`},children:i})]})]}),(0,y.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),s?.(e)},"aria-label":o?`Quitar de favoritos`:`Agregar a favoritos`,"aria-pressed":o,className:[`size-[32px] shrink-0`,`flex items-center justify-center`,`rounded-[var(--radius-full)]`,`border-0 cursor-pointer`,`transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,o?`bg-[var(--color-action-primary)] text-[var(--color-text-on-dark)]`:`bg-[var(--gray-50)] text-[var(--color-text-secondary)] hover:bg-[var(--gray-100)] hover:text-[var(--color-action-primary)]`,`active:scale-[0.90]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`].join(` `),children:(0,y.jsx)(We,{filled:o})})]})]}),(0,y.jsx)(`div`,{className:`h-[4px] shrink-0 w-full`,style:{background:`var(--color-brand-live)`},"aria-hidden":`true`})]})}var Ke=`import React from 'react'

export interface VehicleCardProps {
  /** Nombre del vehículo en mayúsculas: "FORD BRONCO SPORT" */
  title?: string
  /** Año y ubicación: "2024 | LIMA, PERÚ" */
  subtitle?: string
  /** Etiqueta sobre el precio: "PRECIO BASE" */
  priceLabel?: string
  /** Moneda: "US$" */
  currency?: string
  /** Monto formateado: "17,999" */
  price?: string
  /** URL de la imagen del vehículo */
  imageUrl?: string
  /** Estado del favorito */
  isFavorited?: boolean
  /** Handler del botón favorito */
  onFavorite?: (e: React.MouseEvent<HTMLButtonElement>) => void
  /** Handler click en la card (navegar al detalle) */
  onClick?: () => void
  className?: string
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" aria-hidden="true">
      <path
        d="M9 14.5S1 9.5 1 4.5A4 4 0 0 1 9 3a4 4 0 0 1 8 1.5C17 9.5 9 14.5 9 14.5Z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function VehicleCard({
  title        = 'TOYOTA HILUX',
  subtitle     = '2024 | LIMA, PERÚ',
  priceLabel   = 'PRECIO BASE',
  currency     = 'US$',
  price        = '17,999',
  imageUrl,
  isFavorited  = false,
  onFavorite,
  onClick,
  className    = '',
}: VehicleCardProps) {
  return (
    <article
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() } : undefined}
      className={[
        'flex flex-col w-full',
        'bg-[var(--color-surface-card)]',
        'rounded-[var(--radius-card)]',
        'shadow-[var(--shadow-card)]',
        'overflow-hidden',
        onClick ? 'cursor-pointer' : '',
        'transition-shadow duration-[var(--duration-standard)] ease-[var(--easing-standard)]',
        'hover:shadow-[var(--shadow-card-hover)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* ── Imagen ─────────────────────────────────────────── */}
      <div className="h-[128px] shrink-0 overflow-hidden bg-[var(--gray-50)]">
        {imageUrl
          ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          )
          : (
            /* Placeholder cuando no hay imagen */
            <div className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(150deg, #3d3d4f 0%, #2a2a38 100%)' }}
            >
              <svg width="64" height="32" viewBox="0 0 72 36" fill="white" aria-hidden="true" opacity="0.35">
                <path d="M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z" />
                <circle cx="18" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="54" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          )
        }
      </div>

      {/* ── Contenido ──────────────────────────────────────── */}
      <div className="flex flex-col flex-1 px-[var(--space-3)] pt-[var(--space-2)] pb-[var(--space-2)]">

        {/* Nombre del vehículo */}
        <h3
          className="m-0 font-bold uppercase tracking-wide text-[var(--color-text-primary)] font-['Plus_Jakarta_Sans',sans-serif]"
          style={{ fontSize: 'var(--size-12)', lineHeight: 'var(--lh-12)' }}
        >
          {title}
        </h3>

        {/* Año · Ubicación */}
        <p
          className="mt-[var(--space-1)] mb-0 font-normal text-[var(--color-text-secondary)] font-['Plus_Jakarta_Sans',sans-serif]"
          style={{ fontSize: 'var(--size-11)', lineHeight: 'var(--lh-11)' }}
        >
          {subtitle}
        </p>

        {/* Precio + Favorito */}
        <div className="flex items-end justify-between mt-[var(--space-2)]">

          {/* Izquierda: etiqueta + monto */}
          <div className="flex flex-col gap-0">
            <span
              className="font-semibold uppercase text-[var(--color-text-muted)] font-['Plus_Jakarta_Sans',sans-serif]"
              style={{ fontSize: 'var(--size-11)', lineHeight: 'var(--lh-11)' }}
            >
              {priceLabel}
            </span>
            <div className="flex items-baseline gap-[2px]">
              <span
                className="font-semibold text-[var(--color-brand-live)] font-['Plus_Jakarta_Sans',sans-serif]"
                style={{ fontSize: 'var(--size-11)', lineHeight: 'var(--lh-11)' }}
              >
                {currency}
              </span>
              <span
                className="font-bold tabular-nums text-[var(--color-brand-live)] font-['Plus_Jakarta_Sans',sans-serif]"
                style={{ fontSize: 'var(--size-16)', lineHeight: 'var(--lh-16)' }}
              >
                {price}
              </span>
            </div>
          </div>

          {/* Derecha: botón favorito */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(e) }}
            aria-label={isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-pressed={isFavorited}
            className={[
              'size-[32px] shrink-0',
              'flex items-center justify-center',
              'rounded-[var(--radius-full)]',
              'border-0 cursor-pointer',
              'transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              isFavorited
                ? 'bg-[var(--color-action-primary)] text-[var(--color-text-on-dark)]'
                : 'bg-[var(--gray-50)] text-[var(--color-text-secondary)] hover:bg-[var(--gray-100)] hover:text-[var(--color-action-primary)]',
              'active:scale-[0.90]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
            ].join(' ')}
          >
            <HeartIcon filled={isFavorited} />
          </button>
        </div>
      </div>

      {/* ── Franja inferior amber ───────────────────────────── */}
      <div
        className="h-[4px] shrink-0 w-full"
        style={{ background: 'var(--color-brand-live)' }}
        aria-hidden="true"
      />
    </article>
  )
}

export default VehicleCard
`;function qe({title:e=`ME INTERESA`,offerCount:t=5,profileLinkLabel:n=`IR AL PERFIL`,onProfileClick:r,cards:i=[],className:a=``}){let o=(0,_.useRef)(null),[s,c]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=o.current;if(!e)return;let t=()=>c(e.scrollLeft+e.clientWidth<e.scrollWidth-4);return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[i]),(0,y.jsxs)(`section`,{className:[`flex flex-col w-full`,`bg-[var(--color-surface-section)]`,a].filter(Boolean).join(` `),children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between px-[var(--space-5)] pt-[var(--space-5)] pb-[var(--space-3)]`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-0`,children:[(0,y.jsx)(`h2`,{className:`m-0 font-bold uppercase text-[var(--color-text-primary)] font-['Plus_Jakarta_Sans',sans-serif]`,style:{fontSize:`var(--size-18)`,lineHeight:`var(--lh-18)`},children:e}),(0,y.jsxs)(`span`,{className:`font-normal text-[var(--color-text-secondary)] font-['Plus_Jakarta_Sans',sans-serif]`,style:{fontSize:`var(--size-12)`,lineHeight:`var(--lh-12)`},children:[t,` OFERTAS`]})]}),r&&(0,y.jsxs)(`button`,{type:`button`,onClick:r,className:[`flex items-center gap-[var(--space-1)]`,`font-semibold uppercase text-[var(--color-action-primary)]`,`font-['Plus_Jakarta_Sans',sans-serif]`,`bg-transparent border-0 cursor-pointer`,`transition-colors duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`hover:text-[var(--color-action-primary-hover)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`].join(` `),style:{fontSize:`var(--size-12)`,lineHeight:`var(--lh-12)`},children:[n,(0,y.jsx)(Je,{})]})]}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsx)(`div`,{ref:o,className:[`flex flex-row gap-[var(--gap-card-grid)]`,`px-[var(--space-5)] pb-[var(--space-5)]`,`overflow-x-auto`,`scroll-smooth`,`[scrollbar-width:none] [&::-webkit-scrollbar]:hidden`].join(` `),children:i.length>0?i.map((e,t)=>(0,y.jsx)(`div`,{className:`shrink-0 w-[163px]`,children:(0,y.jsx)(Ge,{...e})},t)):Array.from({length:4}).map((e,t)=>(0,y.jsx)(`div`,{className:`shrink-0 w-[163px]`,children:(0,y.jsx)(Ge,{})},t))}),s&&(0,y.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute right-0 top-0 h-full w-[80px]`,style:{background:`linear-gradient(to right, transparent, var(--color-surface-section))`}})]})]})}function Je(){return(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M5 3l4 4-4 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function Ye(){return(0,y.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M2 5l2.5 2.5L8 3`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function Xe({label:e,checked:t,defaultChecked:n,onChange:r,disabled:i=!1,hint:a,id:o,name:s,className:c=``}){let l=(0,_.useId)(),u=o??l;return(0,y.jsxs)(`div`,{className:[`flex flex-col gap-1`,c].join(` `),children:[(0,y.jsxs)(`label`,{htmlFor:u,className:[`inline-flex items-start gap-2.5 cursor-pointer select-none`,i?`opacity-40 cursor-not-allowed`:``].join(` `),children:[(0,y.jsxs)(`div`,{className:`relative flex items-center justify-center shrink-0 mt-0.5`,children:[(0,y.jsx)(`input`,{type:`checkbox`,id:u,name:s,checked:t,defaultChecked:n,disabled:i,onChange:e=>r?.(e.target.checked),className:`peer sr-only`}),(0,y.jsx)(`div`,{className:[`size-4 rounded-[var(--radius-sm)] border-2 flex items-center justify-center`,`transition-[background-color,border-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--color-action-primary)]`,`peer-checked:bg-[var(--color-action-primary)] peer-checked:border-[var(--color-action-primary)]`,`peer-not-checked:bg-transparent peer-not-checked:border-[var(--gray-400)] hover:peer-not-checked:border-[var(--color-action-primary)]`,`border-[var(--gray-400)]`].join(` `),children:(0,y.jsx)(`span`,{className:`hidden peer-checked:flex text-white`,style:{display:`none`},children:(0,y.jsx)(Ye,{})})})]}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`,lineHeight:`var(--type-body-sm-lh)`},children:e})]}),a&&(0,y.jsx)(`p`,{className:`ml-[26px] m-0 text-[var(--color-text-muted)] font-[var(--font-body)]`,style:{fontSize:`var(--type-label-size)`},children:a})]})}function Ze({label:e,value:t,checked:n=!1,onChange:r,disabled:i=!1,hint:a,name:o,id:s,className:c=``}){let l=(0,_.useId)(),u=s??l;return(0,y.jsxs)(`div`,{className:[`flex flex-col gap-1`,c].join(` `),children:[(0,y.jsxs)(`label`,{htmlFor:u,className:[`inline-flex items-start gap-2.5 cursor-pointer select-none`,i?`opacity-40 cursor-not-allowed`:``].join(` `),children:[(0,y.jsxs)(`div`,{className:`relative flex items-center justify-center shrink-0 mt-0.5`,children:[(0,y.jsx)(`input`,{type:`radio`,id:u,name:o,value:t,checked:n,disabled:i,onChange:()=>r?.(t),className:`peer sr-only`}),(0,y.jsx)(`div`,{className:[`size-4 rounded-full border-2 flex items-center justify-center`,`transition-[border-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--color-action-primary)]`,n?`border-[var(--color-action-primary)]`:`border-[var(--gray-400)] hover:border-[var(--color-action-primary)]`].join(` `),children:n&&(0,y.jsx)(`div`,{className:`size-2 rounded-full`,style:{background:`var(--color-action-primary)`}})})]}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`,lineHeight:`var(--type-body-sm-lh)`},children:e})]}),a&&(0,y.jsx)(`p`,{className:`ml-[26px] m-0 text-[var(--color-text-muted)] font-[var(--font-body)]`,style:{fontSize:`var(--type-label-size)`},children:a})]})}function Qe(){return(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`4.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M10.5 10.5L13 13`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function $e(){return(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M3 3l8 8M11 3l-8 8`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})})}function et({placeholder:e=`Buscar vehículo o lote...`,value:t,defaultValue:n,onChange:r,onSearch:i,onClear:a,disabled:o=!1,id:s,className:c=``}){let l=(0,_.useId)(),u=s??l,[d,f]=(0,_.useState)(n??``),p=(0,_.useRef)(null),m=t!==void 0,h=m?t:d,g=h.length>0,v=e=>{let t=e.target.value;m||f(t),r?.(t)},b=e=>{e.key===`Enter`&&i?.(h),e.key===`Escape`&&x()},x=()=>{m||f(``),r?.(``),a?.(),p.current?.focus()};return(0,y.jsxs)(`div`,{className:[`relative flex items-center w-full`,c].join(` `),children:[(0,y.jsx)(`span`,{className:`absolute left-3 text-[var(--color-text-muted)] pointer-events-none`,children:(0,y.jsx)(Qe,{})}),(0,y.jsx)(`input`,{ref:p,id:u,type:`search`,value:h,placeholder:e,disabled:o,onChange:v,onKeyDown:b,autoComplete:`off`,className:[`w-full h-10 pl-9 pr-3`,g?`pr-9`:`pr-3`,`rounded-[var(--radius-btn)]`,`bg-[var(--color-surface-input)]`,`font-[var(--font-body)] text-[var(--color-text-on-surface)]`,`border-0 outline-none`,`transition-[box-shadow,background-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`placeholder:text-[var(--color-text-muted)]`,`focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]`,o?`opacity-40 cursor-not-allowed`:``,`[&::-webkit-search-cancel-button]:hidden`].filter(Boolean).join(` `),style:{fontSize:`var(--type-body-sm-size)`}}),g&&!o&&(0,y.jsx)(`button`,{type:`button`,onClick:x,"aria-label":`Limpiar búsqueda`,className:[`absolute right-3`,`size-5 flex items-center justify-center`,`rounded-full border-0 cursor-pointer`,`text-[var(--color-text-muted)] hover:text-[var(--color-text-on-surface)]`,`bg-[var(--gray-300)] hover:bg-[var(--gray-400)]`,`transition-colors duration-[var(--duration-micro)]`,`focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-action-primary)]`].join(` `),children:(0,y.jsx)($e,{})})]})}function tt(){return(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M3 5l4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function nt({label:e,options:t,value:n,defaultValue:r,onChange:i,placeholder:a=`Seleccionar...`,hint:o,error:s,disabled:c=!1,id:l,name:u,className:d=``}){let f=(0,_.useId)(),p=l??f,m=o||s?`${p}-hint`:void 0,h=!!s;return(0,y.jsxs)(`div`,{className:[`flex flex-col gap-1.5 w-full`,d].join(` `),children:[(0,y.jsx)(`label`,{htmlFor:p,className:[`font-[var(--font-body)] font-[var(--weight-semibold)] uppercase`,`text-[var(--color-text-body)]`,c?`text-[var(--color-text-disabled)]`:``].filter(Boolean).join(` `),style:{fontSize:`var(--type-label-size)`,letterSpacing:`var(--tracking-wider)`},children:e}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsxs)(`select`,{id:p,name:u,value:n,defaultValue:r,disabled:c,onChange:e=>i?.(e.target.value),"aria-describedby":m,"aria-invalid":h||void 0,className:[`w-full h-10 pl-3 pr-9 appearance-none`,`rounded-[var(--radius-btn)]`,`bg-[var(--color-surface-input)]`,`font-[var(--font-body)] text-[var(--color-text-on-surface)]`,`border-0 outline-none cursor-pointer`,`transition-[box-shadow] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]`,h?`shadow-[0_0_0_1.5px_var(--red-500)]`:``,c?`opacity-40 cursor-not-allowed`:``].filter(Boolean).join(` `),style:{fontSize:`var(--type-body-sm-size)`},children:[a&&(0,y.jsx)(`option`,{value:``,disabled:!0,children:a}),t.map(e=>(0,y.jsx)(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))]}),(0,y.jsx)(`span`,{className:`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]`,children:(0,y.jsx)(tt,{})})]}),(o||s)&&(0,y.jsx)(`p`,{id:m,className:[`font-[var(--font-body)]`,h?`text-[var(--red-500)]`:`text-[var(--color-text-muted)]`].join(` `),style:{fontSize:`var(--type-label-size)`},children:s??o})]})}var rt={success:{bg:`var(--color-surface-card)`,border:`oklch(0.637 0.207 25.500 / 0)`,text:`oklch(0.4 0.15 145)`,icon:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`,stroke:`oklch(0.4 0.15 145)`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M5 8l2 2 4-4`,stroke:`oklch(0.4 0.15 145)`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`})]})},error:{bg:`oklch(0.637 0.207 25.500 / 0.08)`,border:`oklch(0.637 0.207 25.500 / 0.30)`,text:`var(--red-500)`,icon:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`,stroke:`var(--red-500)`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M8 5v3.5M8 10.5v.5`,stroke:`var(--red-500)`,strokeWidth:`1.4`,strokeLinecap:`round`})]})},warning:{bg:`oklch(0.784 0.172 68.000 / 0.08)`,border:`oklch(0.784 0.172 68.000 / 0.30)`,text:`oklch(0.55 0.15 68)`,icon:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`path`,{d:`M8 2L14.5 13.5H1.5L8 2Z`,stroke:`oklch(0.55 0.15 68)`,strokeWidth:`1.4`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M8 7v2.5M8 11v.5`,stroke:`oklch(0.55 0.15 68)`,strokeWidth:`1.4`,strokeLinecap:`round`})]})},info:{bg:`oklch(0.761 0.130 197.000 / 0.08)`,border:`oklch(0.761 0.130 197.000 / 0.30)`,text:`var(--color-action-primary)`,icon:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`,stroke:`var(--color-action-primary)`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M8 7.5v4M8 5v.5`,stroke:`var(--color-action-primary)`,strokeWidth:`1.4`,strokeLinecap:`round`})]})}};function it({type:e,message:t,isDismissible:n=!1,hasIcon:r=!0,className:i=``}){let[a,o]=(0,_.useState)(!1);if(a)return null;let{bg:s,border:c,text:l,icon:u}=rt[e];return(0,y.jsxs)(`div`,{role:`alert`,className:[`flex items-start gap-2.5 px-3 py-2.5 rounded-[var(--radius-btn)]`,i].join(` `),style:{background:s,border:`1px solid ${c}`,color:l},children:[r&&(0,y.jsx)(`span`,{className:`shrink-0 mt-0.5`,children:u}),(0,y.jsx)(`span`,{className:`flex-1 font-[var(--font-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:t}),n&&(0,y.jsx)(`button`,{type:`button`,onClick:()=>o(!0),"aria-label":`Cerrar`,className:`shrink-0 opacity-60 hover:opacity-100 transition-opacity border-0 bg-transparent cursor-pointer p-0`,style:{color:l},children:(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M2 2l10 10M12 2L2 12`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})})})]})}var at={success:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`,stroke:`oklch(0.4 0.15 145)`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M5 8l2 2 4-4`,stroke:`oklch(0.4 0.15 145)`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),error:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`,stroke:`var(--red-500)`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M8 5v3.5M8 10.5v.5`,stroke:`var(--red-500)`,strokeWidth:`1.4`,strokeLinecap:`round`})]}),warning:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`path`,{d:`M8 2L14.5 13.5H1.5L8 2Z`,stroke:`var(--amber-500)`,strokeWidth:`1.4`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M8 7v2.5M8 11v.5`,stroke:`var(--amber-500)`,strokeWidth:`1.4`,strokeLinecap:`round`})]}),info:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`,stroke:`var(--color-action-primary)`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M8 7.5v4M8 5v.5`,stroke:`var(--color-action-primary)`,strokeWidth:`1.4`,strokeLinecap:`round`})]})};function ot({type:e,message:t,duration:n=4e3,onDismiss:r}){let[i,a]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=setTimeout(()=>a(!0),10),t=setTimeout(()=>{a(!1),setTimeout(()=>r?.(),300)},n);return()=>{clearTimeout(e),clearTimeout(t)}},[n,r]),(0,y.jsxs)(`div`,{role:`status`,"aria-live":`polite`,className:[`flex items-center gap-2.5 px-4 py-3 min-w-[280px] max-w-[400px]`,`rounded-[var(--radius-btn)]`,`bg-[var(--color-surface-card)]`,`shadow-[var(--shadow-lg)]`,`border border-[var(--color-border-ghost)]`,`transition-[opacity,transform] duration-[var(--duration-standard)] ease-[var(--easing-standard)]`,i?`opacity-100 translate-y-0`:`opacity-0 translate-y-2`].join(` `),children:[(0,y.jsx)(`span`,{className:`shrink-0`,children:at[e]}),(0,y.jsx)(`span`,{className:`flex-1 font-[var(--font-body)] text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:t}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>{a(!1),setTimeout(()=>r?.(),300)},"aria-label":`Cerrar`,className:`shrink-0 text-[var(--color-text-muted)] hover:text-[var(--color-text-on-surface)] border-0 bg-transparent cursor-pointer p-0 transition-colors duration-[var(--duration-micro)]`,children:(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M2 2l10 10M12 2L2 12`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})})})]})}function st({children:e}){return(0,y.jsx)(`div`,{className:`fixed bottom-6 right-6 flex flex-col gap-2 z-[var(--z-toast)]`,"aria-label":`Notificaciones`,children:e})}var ct=m(),lt={sm:`max-w-[400px]`,md:`max-w-[560px]`,lg:`max-w-[720px]`};function ut({isOpen:e,onClose:t,title:n,size:r=`md`,isDismissible:i=!0,children:a,footer:o}){let s=(0,_.useCallback)(e=>{e.key===`Escape`&&i&&t()},[t,i]);return(0,_.useEffect)(()=>{if(e)return document.addEventListener(`keydown`,s),document.body.style.overflow=`hidden`,()=>{document.removeEventListener(`keydown`,s),document.body.style.overflow=``}},[e,s]),e?(0,ct.createPortal)((0,y.jsxs)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":n?`modal-title`:void 0,className:`fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4`,children:[(0,y.jsx)(`div`,{className:`absolute inset-0 bg-[var(--purple-900)]/60 backdrop-blur-[2px]`,onClick:i?t:void 0,"aria-hidden":`true`}),(0,y.jsxs)(`div`,{className:[`relative w-full flex flex-col`,lt[r],`bg-[var(--color-surface-card)]`,`rounded-[var(--radius-card)]`,`shadow-[var(--shadow-lg)]`,`max-h-[90dvh]`].join(` `),children:[(n||i)&&(0,y.jsxs)(`div`,{className:`flex items-center justify-between px-6 py-4 shrink-0 border-b border-[var(--color-border-ghost)]`,children:[n&&(0,y.jsx)(`h2`,{id:`modal-title`,className:`font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-primary)]`,style:{fontSize:`var(--type-body-lg-size)`},children:n}),i&&(0,y.jsx)(`button`,{type:`button`,onClick:t,"aria-label":`Cerrar`,className:`shrink-0 ml-auto text-[var(--color-text-muted)] hover:text-[var(--color-text-on-surface)] border-0 bg-transparent cursor-pointer p-1 rounded transition-colors duration-[var(--duration-micro)]`,children:(0,y.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3 3l10 10M13 3L3 13`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})})})]}),(0,y.jsx)(`div`,{className:`flex-1 overflow-y-auto px-6 py-5 font-[var(--font-body)] text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:a}),o&&(0,y.jsx)(`div`,{className:`shrink-0 flex items-center justify-end gap-2 px-6 py-4 border-t border-[var(--color-border-ghost)]`,children:o})]})]}),document.body):null}var dt=`animate-pulse bg-[var(--gray-200)] rounded-[var(--radius-btn)]`;function ft({variant:e=`text`,width:t,height:n,lines:r=1,className:i=``}){let a={width:t===void 0?void 0:typeof t==`number`?`${t}px`:t,height:n===void 0?void 0:typeof n==`number`?`${n}px`:n};if(e===`circle`){let e=t??n??40,r=typeof e==`number`?`${e}px`:e;return(0,y.jsx)(`div`,{className:[`animate-pulse bg-[var(--gray-200)] rounded-full shrink-0`,i].join(` `),style:{width:r,height:r},"aria-hidden":`true`})}return e===`card`?(0,y.jsxs)(`div`,{className:[`flex flex-col gap-3 p-4 bg-[var(--color-surface-card)] rounded-[var(--radius-card)] shadow-[var(--shadow-sm)]`,i].join(` `),"aria-hidden":`true`,children:[(0,y.jsx)(`div`,{className:`${dt} h-[132px] w-full rounded-[var(--radius-btn)]`}),(0,y.jsx)(`div`,{className:`${dt} h-3 w-3/4`}),(0,y.jsx)(`div`,{className:`${dt} h-3 w-1/2`}),(0,y.jsxs)(`div`,{className:`flex justify-between mt-1`,children:[(0,y.jsx)(`div`,{className:`${dt} h-5 w-24`}),(0,y.jsx)(`div`,{className:`${dt} h-5 w-16`})]})]}):e===`text`&&r>1?(0,y.jsx)(`div`,{className:[`flex flex-col gap-2`,i].join(` `),"aria-hidden":`true`,children:Array.from({length:r}).map((e,t)=>(0,y.jsx)(`div`,{className:dt,style:{height:12,width:t===r-1?`66%`:`100%`}},t))}):(0,y.jsx)(`div`,{className:[dt,i].join(` `),style:{height:a.height??(e===`rect`?40:12),width:a.width??(e===`rect`?`100%`:`80%`)},"aria-hidden":`true`})}function pt({items:e,activeId:t,onChange:n,variant:r=`underline`,className:i=``}){return r===`pill`?(0,y.jsx)(`div`,{role:`tablist`,className:[`inline-flex gap-1 p-1 rounded-[var(--radius-card)] bg-[var(--color-surface-input)]`,i].join(` `),children:e.map(e=>(0,y.jsxs)(`button`,{role:`tab`,type:`button`,id:`tab-${e.id}`,"aria-selected":e.id===t,"aria-controls":`panel-${e.id}`,disabled:e.disabled,onClick:()=>n(e.id),className:[`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-btn)]`,`font-[var(--font-body)] font-[var(--weight-semibold)]`,`transition-[background,color,box-shadow] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`border-0 cursor-pointer outline-none`,`focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-action-primary)]`,e.id===t?`bg-[var(--color-surface-card)] text-[var(--color-text-primary)] shadow-[var(--shadow-sm)]`:`bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-body)]`,e.disabled?`opacity-40 cursor-not-allowed`:``].filter(Boolean).join(` `),style:{fontSize:`var(--type-body-sm-size)`},children:[e.label,e.count!==void 0&&(0,y.jsx)(`span`,{className:[`inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-semibold`,e.id===t?`bg-[var(--color-action-primary)] text-white`:`bg-[var(--gray-300)] text-[var(--gray-600)]`].join(` `),children:e.count})]},e.id))}):(0,y.jsx)(`div`,{role:`tablist`,className:[`flex border-b border-[var(--color-border-ghost)]`,i].join(` `),children:e.map(e=>(0,y.jsxs)(`button`,{role:`tab`,type:`button`,id:`tab-${e.id}`,"aria-selected":e.id===t,"aria-controls":`panel-${e.id}`,disabled:e.disabled,onClick:()=>n(e.id),className:[`inline-flex items-center gap-1.5 px-4 py-2.5 -mb-px`,`font-[var(--font-body)] font-[var(--weight-semibold)]`,`transition-[color,border-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`border-b-2 border-transparent`,`bg-transparent cursor-pointer outline-none`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`,e.id===t?`border-[var(--color-action-primary)] text-[var(--color-action-primary)]`:`text-[var(--color-text-muted)] hover:text-[var(--color-text-body)]`,e.disabled?`opacity-40 cursor-not-allowed`:``].filter(Boolean).join(` `),style:{fontSize:`var(--type-body-sm-size)`},children:[e.label,e.count!==void 0&&(0,y.jsx)(`span`,{className:[`inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-semibold`,e.id===t?`bg-[var(--color-action-primary)] text-white`:`bg-[var(--gray-300)] text-[var(--gray-600)]`].join(` `),children:e.count})]},e.id))})}function mt({id:e,title:t,content:n,isOpen:r,onToggle:i,disabled:a=!1}){return(0,y.jsxs)(`div`,{className:`border-b border-[var(--color-border-ghost)] last:border-b-0`,children:[(0,y.jsxs)(`button`,{type:`button`,id:`${e}-trigger`,"aria-expanded":r,"aria-controls":`${e}-panel`,disabled:a,onClick:i,className:[`w-full flex items-center justify-between px-4 py-3.5 gap-3`,`bg-transparent border-0 cursor-pointer text-left outline-none`,`font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]`,`transition-colors duration-[var(--duration-micro)]`,`hover:bg-[var(--gray-50)]`,`focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--color-action-primary)]`,a?`opacity-40 cursor-not-allowed`:``].filter(Boolean).join(` `),style:{fontSize:`var(--type-body-sm-size)`},children:[(0,y.jsx)(`span`,{children:t}),(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,className:[`shrink-0 text-[var(--color-text-muted)] transition-transform duration-[var(--duration-standard)]`,r?`rotate-180`:``].join(` `),children:(0,y.jsx)(`path`,{d:`M3 5l4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,y.jsx)(`div`,{id:`${e}-panel`,role:`region`,"aria-labelledby":`${e}-trigger`,hidden:!r,className:`px-4 pb-4 font-[var(--font-body)] text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:n})]})}function ht({items:e,allowMultiple:t=!1,className:n=``}){let r=(0,_.useId)(),[i,a]=(0,_.useState)(()=>{let t=new Set;return e.forEach((e,n)=>{e.defaultOpen&&t.add(e.id??`${r}-${n}`)}),t}),o=e=>{a(n=>{let r=new Set(n);return r.has(e)?r.delete(e):(t||r.clear(),r.add(e)),r})};return(0,y.jsx)(`div`,{className:[`bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] overflow-hidden`,n].join(` `),children:e.map((e,t)=>{let n=e.id??`${r}-${t}`;return(0,y.jsx)(mt,{id:n,title:e.title,content:e.content,isOpen:i.has(n),onToggle:()=>o(n),disabled:e.disabled},n)})})}var gt=[`Automóvil`,`Camioneta`,`Camión`,`Bus`,`Moto`],_t=[`Toyota`,`Hyundai`,`Kia`,`Nissan`,`Ford`,`Chevrolet`,`Volkswagen`],vt=[{label:`Hasta S/ 20,000`,value:`0-20000`},{label:`S/ 20,000 – 50,000`,value:`20000-50000`},{label:`S/ 50,000 – 100,000`,value:`50000-100000`},{label:`Más de S/ 100,000`,value:`100000-`}],yt=[{label:`Todos`,value:``},{label:`En vivo`,value:`live`},{label:`Próximamente`,value:`upcoming`},{label:`Negociable`,value:`negotiable`},{label:`Cerrado`,value:`closed`}],bt=[`h-9 pl-3 pr-8 appearance-none`,`rounded-[var(--radius-btn)]`,`bg-[var(--color-surface-input)]`,`font-[var(--font-body)] text-[var(--color-text-on-surface)]`,`border-0 outline-none cursor-pointer`,`transition-[box-shadow] duration-[var(--duration-micro)]`,`focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]`].join(` `);function xt(){return(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M2.5 4.5l3.5 3.5 3.5-3.5`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function St(){return(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`6`,cy:`6`,r:`4`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M9.5 9.5L12 12`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})]})}function Ct({value:e={},onChange:t,onReset:n,className:r=``}){let i=n=>t?.({...e,...n}),a=Object.values(e).some(e=>e&&e!==``);return(0,y.jsxs)(`div`,{className:[`flex flex-wrap items-center gap-2 p-3 bg-[var(--color-surface-card)] rounded-[var(--radius-card)] shadow-[var(--shadow-sm)]`,r].join(` `),children:[(0,y.jsxs)(`div`,{className:`relative flex items-center min-w-[180px] flex-1`,children:[(0,y.jsx)(`span`,{className:`absolute left-2.5 text-[var(--color-text-muted)] pointer-events-none`,children:(0,y.jsx)(St,{})}),(0,y.jsx)(`input`,{type:`search`,placeholder:`Buscar lote o vehículo...`,value:e.search??``,onChange:e=>i({search:e.target.value}),className:[`w-full h-9 pl-8 pr-3`,`rounded-[var(--radius-btn)]`,`bg-[var(--color-surface-input)]`,`font-[var(--font-body)] text-[var(--color-text-on-surface)]`,`border-0 outline-none`,`placeholder:text-[var(--color-text-muted)]`,`transition-[box-shadow] duration-[var(--duration-micro)]`,`focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]`,`[&::-webkit-search-cancel-button]:hidden`].join(` `),style:{fontSize:`var(--type-body-sm-size)`}})]}),(0,y.jsx)(`div`,{className:`h-5 w-px bg-[var(--color-border-ghost)] hidden sm:block`,"aria-hidden":`true`}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsxs)(`select`,{value:e.tipo??``,onChange:e=>i({tipo:e.target.value}),className:bt,style:{fontSize:`var(--type-body-sm-size)`},children:[(0,y.jsx)(`option`,{value:``,children:`Tipo`}),gt.map(e=>(0,y.jsx)(`option`,{value:e,children:e},e))]}),(0,y.jsx)(`span`,{className:`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]`,children:(0,y.jsx)(xt,{})})]}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsxs)(`select`,{value:e.marca??``,onChange:e=>i({marca:e.target.value}),className:bt,style:{fontSize:`var(--type-body-sm-size)`},children:[(0,y.jsx)(`option`,{value:``,children:`Marca`}),_t.map(e=>(0,y.jsx)(`option`,{value:e,children:e},e))]}),(0,y.jsx)(`span`,{className:`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]`,children:(0,y.jsx)(xt,{})})]}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsxs)(`select`,{value:e.precioMin?`${e.precioMin}-${e.precioMax??``}`:``,onChange:e=>{let[t,n]=e.target.value.split(`-`);i({precioMin:t,precioMax:n})},className:bt,style:{fontSize:`var(--type-body-sm-size)`},children:[(0,y.jsx)(`option`,{value:``,children:`Precio`}),vt.map(e=>(0,y.jsx)(`option`,{value:e.value,children:e.label},e.value))]}),(0,y.jsx)(`span`,{className:`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]`,children:(0,y.jsx)(xt,{})})]}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsx)(`select`,{value:e.status??``,onChange:e=>i({status:e.target.value}),className:bt,style:{fontSize:`var(--type-body-sm-size)`},children:yt.map(e=>(0,y.jsx)(`option`,{value:e.value,children:e.label},e.value))}),(0,y.jsx)(`span`,{className:`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]`,children:(0,y.jsx)(xt,{})})]}),a&&(0,y.jsx)(`button`,{type:`button`,onClick:n,className:`h-9 px-3 rounded-[var(--radius-btn)] text-[var(--color-text-muted)] hover:text-[var(--color-text-body)] bg-transparent border-0 cursor-pointer transition-colors duration-[var(--duration-micro)] font-[var(--font-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:`Limpiar`})]})}var wt={live:{bg:`var(--color-brand-live)`,text:`var(--purple-900)`,label:`EN VIVO`,dot:!0},upcoming:{bg:`var(--color-action-primary)`,text:`white`,label:`PRÓXIMAMENTE`},negotiable:{bg:`var(--cyan-500)`,text:`var(--purple-900)`,label:`NEGOCIABLE`},closed:{bg:`var(--gray-400)`,text:`white`,label:`CERRADO`},new:{bg:`var(--purple-700)`,text:`white`,label:`NUEVO`},featured:{bg:`var(--purple-900)`,text:`white`,label:`DESTACADO`}};function Tt(e){return String(e).padStart(2,`0`)}function Et(e){if(e<=0)return`00:00:00`;let t=Math.floor(e/1e3),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return`${Tt(n)}:${Tt(r)}:${Tt(i)}`}function Dt({status:e,lotId:t,lotTitle:n,endsAt:r,className:i=``}){let{bg:a,text:o,label:s,dot:c}=wt[e],[l,u]=(0,_.useState)(()=>r?Math.max(0,Number(r instanceof Date?r:new Date(r))-Date.now()):0);return(0,_.useEffect)(()=>{if(!r||e===`closed`)return;let t=setInterval(()=>{u(Math.max(0,Number(r instanceof Date?r:new Date(r))-Date.now()))},1e3);return()=>clearInterval(t)},[r,e]),(0,y.jsxs)(`div`,{role:`status`,"aria-live":`polite`,className:[`flex items-center gap-3 px-4 py-2.5`,i].join(` `),style:{background:a,color:o},children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-1.5 shrink-0`,children:[c&&(0,y.jsx)(`span`,{className:`size-2 rounded-full bg-current animate-pulse`,"aria-hidden":`true`}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-bold)] uppercase tracking-[var(--tracking-wider)]`,style:{fontSize:`var(--type-label-size)`},children:s})]}),t&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`span`,{className:`opacity-40 select-none`,"aria-hidden":`true`,children:`|`}),(0,y.jsxs)(`span`,{className:`font-[var(--font-body)] opacity-70 shrink-0`,style:{fontSize:`var(--type-label-size)`},children:[`Lote #`,t]})]}),n&&(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] truncate flex-1`,style:{fontSize:`var(--type-body-sm-size)`},children:n}),r&&e!==`closed`&&(0,y.jsx)(`span`,{className:`ml-auto shrink-0 font-[var(--font-mono)] font-[var(--weight-medium)] tabular-nums`,style:{fontSize:`var(--type-body-sm-size)`},"aria-label":`Tiempo restante: ${Et(l)}`,children:Et(l)})]})}var Ot={year:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`1.5`,y:`2.5`,width:`11`,height:`10`,rx:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M1.5 5.5h11`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M4.5 1v3M9.5 1v3`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]}),km:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M7 7l3-2.5`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`}),(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`1`,fill:`currentColor`})]}),fuel:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M3 12V3a1 1 0 011-1h4a1 1 0 011 1v4l2-1v4a1 1 0 01-1 1H3z`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M3 7h5`,stroke:`currentColor`,strokeWidth:`1.3`})]}),transmission:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`3`,cy:`3`,r:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`circle`,{cx:`11`,cy:`3`,r:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`circle`,{cx:`7`,cy:`11`,r:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M3 4.5v3M11 4.5v3M3 7.5L7 9.5M11 7.5L7 9.5`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]}),color:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`6`,r:`4`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M7 10v3`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]}),engine:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`3`,y:`4`,width:`8`,height:`6`,rx:`1`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M1 6h2M11 6h2M5 4V2M9 4V2`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]}),doors:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`3`,y:`1.5`,width:`8`,height:`11`,rx:`1`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`circle`,{cx:`9.5`,cy:`7`,r:`0.8`,fill:`currentColor`})]}),vin:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`1.5`,y:`3`,width:`11`,height:`8`,rx:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M4 6h6M4 8.5h4`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]})};function kt({specs:e,className:t=``}){return(0,y.jsx)(`div`,{className:[`flex flex-wrap gap-x-6 gap-y-3`,t].join(` `),children:e.map(e=>(0,y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,y.jsx)(`span`,{className:`text-[var(--color-text-muted)] shrink-0`,children:Ot[e.icon]}),(0,y.jsxs)(`div`,{className:`flex flex-col leading-none gap-0.5`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)] tracking-[var(--tracking-wider)]`,style:{fontSize:`9px`},children:e.label}),(0,y.jsx)(`span`,{className:[`font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]`,e.icon===`vin`?`font-[var(--font-mono)]`:``].filter(Boolean).join(` `),style:{fontSize:`var(--type-body-sm-size)`},children:e.value})]})]},e.icon+e.label))})}function At(e){let t=Math.floor((Date.now()-new Date(e).getTime())/1e3);return t<60?`hace ${t}s`:t<3600?`hace ${Math.floor(t/60)}m`:`hace ${Math.floor(t/3600)}h`}function jt(e){return e.split(` `).slice(0,2).map(e=>e[0]).join(``).toUpperCase()}function Mt(e){return e.split(` `).map((e,t)=>t===0?e:e[0]+`***`).join(` `)}function Nt({initials:e,isWinning:t}){return(0,y.jsx)(`div`,{className:[`size-8 rounded-full flex items-center justify-center shrink-0 select-none`,`font-[var(--font-body)] font-[var(--weight-bold)]`,t?`bg-[var(--color-action-primary)] text-white`:`bg-[var(--gray-200)] text-[var(--gray-500)]`].join(` `),style:{fontSize:`11px`},children:e})}function Pt(){return(0,y.jsxs)(`div`,{className:`flex items-center gap-3 py-2.5`,children:[(0,y.jsx)(`div`,{className:`size-8 rounded-full bg-[var(--gray-200)] animate-pulse shrink-0`}),(0,y.jsxs)(`div`,{className:`flex-1 flex flex-col gap-1.5`,children:[(0,y.jsx)(`div`,{className:`h-2.5 w-28 bg-[var(--gray-200)] rounded animate-pulse`}),(0,y.jsx)(`div`,{className:`h-2 w-16 bg-[var(--gray-200)] rounded animate-pulse`})]}),(0,y.jsx)(`div`,{className:`h-4 w-20 bg-[var(--gray-200)] rounded animate-pulse`})]})}function Ft({bids:e,maxVisible:t=5,isLoading:n=!1,className:r=``}){let i=e.slice(0,t);return(0,y.jsxs)(`div`,{className:[`bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] overflow-hidden`,r].join(` `),children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-ghost)]`,children:[(0,y.jsx)(`h3`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:`Historial de ofertas`}),e.length>0&&(0,y.jsxs)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:[e.length,` `,e.length===1?`oferta`:`ofertas`]})]}),(0,y.jsx)(`div`,{className:`divide-y divide-[var(--color-border-ghost)]`,children:n?Array.from({length:3}).map((e,t)=>(0,y.jsx)(`div`,{className:`px-4`,children:(0,y.jsx)(Pt,{})},t)):i.length===0?(0,y.jsx)(`div`,{className:`px-4 py-8 text-center font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-body-sm-size)`},children:`Sin ofertas aún. ¡Sé el primero!`}):i.map((e,t)=>{let n=e.initials??jt(e.bidder),r=e.isAnonymous?Mt(e.bidder):e.bidder,i=e.currency??`S/`;return(0,y.jsxs)(`div`,{className:[`flex items-center gap-3 px-4 py-2.5`,t===0&&e.isWinning!==!1?`bg-[oklch(0.761_0.130_197.000_/_0.04)]`:``].join(` `),children:[(0,y.jsx)(Nt,{initials:n,isWinning:t===0}),(0,y.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,y.jsxs)(`p`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)] truncate`,style:{fontSize:`var(--type-body-sm-size)`},children:[r,t===0&&(0,y.jsx)(`span`,{className:`ml-1.5 text-[var(--color-action-primary)]`,style:{fontSize:`10px`},children:`▲ Mayor oferta`})]}),(0,y.jsx)(`p`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:At(e.placedAt)})]}),(0,y.jsxs)(`span`,{className:`font-[var(--font-mono)] font-[var(--weight-medium)] tabular-nums shrink-0`,style:{fontSize:t===0?`var(--type-body-size)`:`var(--type-body-sm-size)`,color:t===0?`var(--color-action-primary)`:`var(--color-text-body)`},children:[i,` `,e.amount.toLocaleString(`es-PE`)]})]},e.id)})}),!n&&e.length>t&&(0,y.jsx)(`div`,{className:`px-4 py-2.5 border-t border-[var(--color-border-ghost)] text-center`,children:(0,y.jsxs)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:[`+`,e.length-t,` ofertas anteriores`]})})]})}function It({images:e,className:t=``}){let[n,r]=(0,_.useState)(0);if(e.length===0)return(0,y.jsx)(`div`,{className:[`flex items-center justify-center bg-[var(--gray-100)] rounded-[var(--radius-card)] aspect-video`,t].join(` `),children:(0,y.jsxs)(`svg`,{width:`48`,height:`48`,viewBox:`0 0 48 48`,fill:`none`,className:`text-[var(--gray-300)]`,children:[(0,y.jsx)(`rect`,{x:`4`,y:`8`,width:`40`,height:`32`,rx:`4`,stroke:`currentColor`,strokeWidth:`2`}),(0,y.jsx)(`circle`,{cx:`16`,cy:`19`,r:`4`,stroke:`currentColor`,strokeWidth:`2`}),(0,y.jsx)(`path`,{d:`M4 34l10-10 8 8 6-6 16 12`,stroke:`currentColor`,strokeWidth:`2`,strokeLinejoin:`round`})]})});let i=()=>r(t=>t===0?e.length-1:t-1),a=()=>r(t=>t===e.length-1?0:t+1);return(0,y.jsxs)(`div`,{className:[`flex flex-col gap-2`,t].join(` `),children:[(0,y.jsxs)(`div`,{className:`relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--gray-100)] aspect-video`,children:[(0,y.jsx)(`img`,{src:e[n].src,alt:e[n].alt,className:`w-full h-full object-cover`,draggable:!1}),(0,y.jsx)(`div`,{className:`absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[var(--purple-900)]/60 backdrop-blur-[4px]`,children:(0,y.jsxs)(`span`,{className:`font-[var(--font-body)] text-white`,style:{fontSize:`11px`},children:[n+1,` / `,e.length]})}),e.length>1&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`button`,{type:`button`,onClick:i,"aria-label":`Imagen anterior`,className:`absolute left-2 top-1/2 -translate-y-1/2 size-8 flex items-center justify-center rounded-full bg-[var(--purple-900)]/50 backdrop-blur-[4px] text-white border-0 cursor-pointer hover:bg-[var(--purple-900)]/75 transition-colors duration-[var(--duration-micro)]`,children:(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M9 11L5 7l4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,y.jsx)(`button`,{type:`button`,onClick:a,"aria-label":`Siguiente imagen`,className:`absolute right-2 top-1/2 -translate-y-1/2 size-8 flex items-center justify-center rounded-full bg-[var(--purple-900)]/50 backdrop-blur-[4px] text-white border-0 cursor-pointer hover:bg-[var(--purple-900)]/75 transition-colors duration-[var(--duration-micro)]`,children:(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M5 11l4-4-4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]})]}),e.length>1&&(0,y.jsx)(`div`,{className:`flex gap-2 overflow-x-auto pb-0.5`,role:`tablist`,"aria-label":`Miniaturas`,children:e.map((e,t)=>(0,y.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":t===n,"aria-label":e.alt,onClick:()=>r(t),className:[`shrink-0 size-14 rounded-[var(--radius-btn)] overflow-hidden border-2 cursor-pointer transition-[border-color,opacity] duration-[var(--duration-micro)]`,t===n?`border-[var(--color-action-primary)] opacity-100`:`border-transparent opacity-60 hover:opacity-90`].join(` `),children:(0,y.jsx)(`img`,{src:e.src,alt:e.alt,className:`w-full h-full object-cover`,draggable:!1})},t))})]})}function Lt({filled:e}){return(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M6 1l1.5 3 3.5.5-2.5 2.5.6 3.5L6 9 2.9 10.5l.6-3.5L1 4.5 4.5 4z`,fill:e?`var(--color-brand-live)`:`var(--gray-200)`,stroke:e?`var(--color-brand-live)`:`var(--gray-300)`,strokeWidth:`0.8`})})}function Rt(){return(0,y.jsxs)(`span`,{className:`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10`,title:`Vendedor verificado`,children:[(0,y.jsxs)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`5`,cy:`5`,r:`4.5`,fill:`oklch(0.637 0.207 145)`}),(0,y.jsx)(`path`,{d:`M3 5l1.5 1.5 3-3`,stroke:`white`,strokeWidth:`1.2`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,y.jsx)(`span`,{className:`text-emerald-600 font-[var(--font-body)] font-[var(--weight-semibold)]`,style:{fontSize:`9px`},children:`Verificado`})]})}function zt({name:e,role:t=`Subastador`,logoUrl:n,initials:r,rating:i,totalAuctions:a,phone:o,email:s,isVerified:c=!1,className:l=``}){let u=r??e.split(` `).slice(0,2).map(e=>e[0]).join(``).toUpperCase();return(0,y.jsxs)(`div`,{className:[`bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] p-4`,l].join(` `),children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3 mb-3`,children:[n?(0,y.jsx)(`img`,{src:n,alt:e,className:`size-12 rounded-full object-cover shrink-0 border border-[var(--color-border-ghost)]`}):(0,y.jsx)(`div`,{className:`size-12 rounded-full bg-[var(--color-action-primary)] flex items-center justify-center shrink-0 select-none`,children:(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-bold)] text-white`,style:{fontSize:`16px`},children:u})}),(0,y.jsxs)(`div`,{className:`min-w-0`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-1.5 flex-wrap`,children:[(0,y.jsx)(`h3`,{className:`font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-body)] truncate`,style:{fontSize:`var(--type-body-sm-size)`},children:e}),c&&(0,y.jsx)(Rt,{})]}),(0,y.jsx)(`p`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:t})]})]}),(i!==void 0||a!==void 0)&&(0,y.jsxs)(`div`,{className:`flex items-center gap-4 mb-3 py-2.5 border-y border-[var(--color-border-ghost)]`,children:[i!==void 0&&(0,y.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,y.jsx)(`div`,{className:`flex gap-0.5`,children:Array.from({length:5}).map((e,t)=>(0,y.jsx)(Lt,{filled:t<Math.round(i)},t))}),(0,y.jsxs)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:[i.toFixed(1),` / 5.0`]})]}),a!==void 0&&(0,y.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-mono)] font-[var(--weight-bold)] text-[var(--color-text-body)] tabular-nums`,style:{fontSize:`var(--type-body-sm-size)`},children:a.toLocaleString(`es-PE`)}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:`subastas`})]})]}),(o||s)&&(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[o&&(0,y.jsxs)(`a`,{href:`tel:${o}`,className:`flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-body)] no-underline transition-colors duration-[var(--duration-micro)]`,children:[(0,y.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 13 13`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M2 2h3l1.5 3L5 6.5c1 1.8 2.7 3.5 4.5 4.5L11 9.5l3 1.5v3a1 1 0 01-1 1A16 16 0 011 1a1 1 0 011-1h0z`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:o})]}),s&&(0,y.jsxs)(`a`,{href:`mailto:${s}`,className:`flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-body)] no-underline transition-colors duration-[var(--duration-micro)]`,children:[(0,y.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 13 13`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`1`,y:`2.5`,width:`11`,height:`8`,rx:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M1 4.5l5.5 3.5L12 4.5`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] truncate`,style:{fontSize:`var(--type-body-sm-size)`},children:s})]})]})]})}function Bt({lotId:e,title:t,subtitle:n,status:r,currentPrice:i,startingPrice:a,currency:o=`S/`,endsAt:s,minimumBid:c,totalBids:l,onSubmitBid:u,className:d=``}){let f=r===`live`,p=r===`closed`;return(0,y.jsxs)(`div`,{className:[`bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] shadow-[var(--shadow-brand-tinted)] overflow-hidden`,d].join(` `),children:[(0,y.jsxs)(`div`,{className:[`px-4 py-2 flex items-center gap-2`,f?`bg-[var(--color-brand-live)]`:p?`bg-[var(--gray-400)]`:`bg-[var(--color-action-primary)]`].join(` `),children:[(0,y.jsx)(w,{type:r,size:`sm`}),(0,y.jsxs)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--purple-900)] uppercase tracking-[var(--tracking-wider)]`,style:{fontSize:`var(--type-label-size)`},children:[`Lote #`,e]})]}),(0,y.jsxs)(`div`,{className:`p-4 flex flex-col gap-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h2`,{className:`font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-primary)] leading-snug`,style:{fontSize:`var(--type-body-lg-size)`},children:t}),n&&(0,y.jsx)(`p`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)] mt-0.5`,style:{fontSize:`var(--type-body-sm-size)`},children:n})]}),(0,y.jsxs)(`div`,{className:`flex items-end justify-between gap-3`,children:[(0,y.jsx)(E,{context:`hero`,label:f?`OFERTA ACTUAL`:`PRECIO BASE`,amount:i,currency:o}),l!==void 0&&(0,y.jsxs)(`div`,{className:`text-right shrink-0`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:l}),(0,y.jsx)(`p`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:l===1?`oferta`:`ofertas`})]})]}),a&&f&&(0,y.jsxs)(`div`,{className:`flex items-center gap-2 -mt-2`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:`Precio base:`}),(0,y.jsxs)(`span`,{className:`font-[var(--font-mono)] tabular-nums text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:[o,` `,a.toLocaleString(`es-PE`)]})]}),!p&&(0,y.jsxs)(`div`,{className:`flex items-center gap-2 py-2.5 border-y border-[var(--color-border-ghost)]`,children:[(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,className:`text-[var(--color-text-muted)] shrink-0`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M7 4v3.5l2 1.5`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:f?`Cierra en`:`Inicia en`}),(0,y.jsx)(ce,{endsAt:s})]}),p?(0,y.jsx)(`div`,{className:`py-3 text-center`,children:(0,y.jsx)(`p`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-body-sm-size)`},children:`Subasta finalizada`})}):(0,y.jsx)(Se,{lotId:e,minimumBid:c,currency:o,onSubmit:u})]})]})}var Vt=[[`comment`,/^(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/],[`string`,/^(`[\s\S]*?`|'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")/],[`jsx-tag`,/^(<\/?[A-Z][A-Za-z0-9.]*|<\/?[a-z][a-z0-9-]*)/],[`keyword`,/^(?:import|export|from|const|let|var|function|return|interface|type|default|true|false|null|undefined|if|else|class|extends|typeof|keyof|as|in|of|async|await|void|never|React)\b/],[`type`,/^(?:string|number|boolean|ReactNode|MouseEvent|HTMLButtonElement)\b/],[`number`,/^\b\d+(\.\d+)?\b/],[`operator`,/^[=<>!?:&|+\-*/.,;{}[\]()]+/],[`attr`,/^[a-z][a-zA-Z0-9_]*(?==)/],[`word`,/^[a-zA-Z_$][a-zA-Z0-9_$]*/],[`space`,/^\s+/]];function Ht(e){let t=[],n=e;for(;n.length>0;){let e=!1;for(let[r,i]of Vt){let a=n.match(i);if(a){t.push({type:r,value:a[0]}),n=n.slice(a[0].length),e=!0;break}}e||(t.push({type:`char`,value:n[0]}),n=n.slice(1))}return t}var Ut={comment:`text-[#6a9955]`,string:`text-[#ce9178]`,keyword:`text-[#569cd6]`,type:`text-[#4ec9b0]`,number:`text-[#b5cea8]`,"jsx-tag":`text-[#4ec9b0]`,attr:`text-[#9cdcfe]`,operator:`text-[#d4d4d4]`,word:`text-[#d4d4d4]`,char:`text-[#d4d4d4]`};function k({code:e}){return(0,y.jsx)(y.Fragment,{children:Ht(e).map((e,t)=>(0,y.jsx)(`span`,{className:Ut[e.type]??``,children:e.value},t))})}function Wt({text:e}){let[t,n]=(0,_.useState)(`idle`);return(0,y.jsxs)(`button`,{type:`button`,onClick:(0,_.useCallback)(()=>{navigator.clipboard.writeText(e).then(()=>{n(`copied`),setTimeout(()=>n(`idle`),2e3)})},[e]),className:[`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold font-["Inter",sans-serif] transition-all duration-150 border`,t===`copied`?`bg-emerald-500/15 border-emerald-500/30 text-emerald-400`:`bg-white/6 border-white/12 text-white/50 hover:bg-white/12 hover:text-white/80`].join(` `),children:[t===`copied`?(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M2 6l2.5 2.5 5.5-5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}):(0,y.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:[(0,y.jsx)(`rect`,{x:`4`,y:`4`,width:`7`,height:`7`,rx:`1`,stroke:`currentColor`,strokeWidth:`1.2`}),(0,y.jsx)(`path`,{d:`M8 4V2.5A1.5 1.5 0 0 0 6.5 1h-4A1.5 1.5 0 0 0 1 2.5v4A1.5 1.5 0 0 0 2.5 8H4`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinecap:`round`})]}),t===`copied`?`Copiado`:`Copiar`]})}function Gt({title:e}){return(0,y.jsxs)(`div`,{className:`flex items-center gap-3 mb-6`,children:[(0,y.jsx)(`h2`,{className:`text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--gray-400)] font-['Inter',sans-serif] whitespace-nowrap`,children:e}),(0,y.jsx)(`div`,{className:`flex-1 h-px bg-[var(--gray-200)]`})]})}var Kt=[{token:`--purple-700`,hex:`#391383`,label:`Purple 700`},{token:`--purple-800`,hex:`#2e0f70`,label:`Purple 800`},{token:`--purple-900`,hex:`#1a0b3d`,label:`Purple 900`},{token:`--cyan-500`,hex:`#00cace`,label:`Cyan 500`},{token:`--amber-500`,hex:`#ffa000`,label:`Amber 500`},{token:`--white`,hex:`#fefdfc`,label:`White`},{token:`--gray-50`,hex:`#f6f7f9`,label:`Gray 50`},{token:`--gray-100`,hex:`#f0f0f0`,label:`Gray 100`},{token:`--gray-300`,hex:`#d1d5dc`,label:`Gray 300`},{token:`--gray-400`,hex:`#99a1af`,label:`Gray 400`},{token:`--gray-500`,hex:`#6e728c`,label:`Gray 500`},{token:`--gray-600`,hex:`#4a5565`,label:`Gray 600`}],qt=[{group:`Brand`,tokens:[{token:`--color-brand-primary`,value:`var(--purple-700)`,desc:`Sidebar, header, botones`},{token:`--color-brand-dark`,value:`var(--purple-800)`,desc:`Hero overlay, help section`},{token:`--color-brand-darkest`,value:`var(--purple-900)`,desc:`Texto primario`},{token:`--color-brand-accent`,value:`var(--cyan-500)`,desc:`CTA, highlights`},{token:`--color-brand-live`,value:`var(--amber-500)`,desc:`Badge en vivo, precios`}]},{group:`Action`,tokens:[{token:`--color-action-primary`,value:`var(--purple-700)`,desc:`Botón primary default`},{token:`--color-action-primary-hover`,value:`var(--purple-800)`,desc:`Botón primary hover`},{token:`--color-action-primary-press`,value:`var(--purple-900)`,desc:`Botón primary active`},{token:`--color-action-cta`,value:`var(--cyan-500)`,desc:`Botón CTA default`},{token:`--color-action-disabled`,value:`var(--gray-600)`,desc:`Disabled state`}]},{group:`Surface`,tokens:[{token:`--color-surface-body`,value:`var(--gray-100)`,desc:`Outer body bg`},{token:`--color-surface-page`,value:`var(--gray-50)`,desc:`Page bg`},{token:`--color-surface-card`,value:`var(--white)`,desc:`Cards, header`},{token:`--color-surface-overlay`,value:`var(--purple-800)`,desc:`Hero, help section`}]},{group:`Text — claro`,tokens:[{token:`--color-text-primary`,value:`var(--purple-900)`,desc:`Títulos, texto principal`},{token:`--color-text-secondary`,value:`var(--gray-500)`,desc:`Texto secundario`},{token:`--color-text-muted`,value:`var(--gray-400)`,desc:`Meta, labels`},{token:`--color-text-disabled`,value:`var(--gray-600)`,desc:`Deshabilitado`},{token:`--color-text-link`,value:`var(--purple-700)`,desc:`Links, nav`},{token:`--color-text-live`,value:`var(--amber-500)`,desc:`Precios en vivo`},{token:`--color-text-accent`,value:`var(--cyan-500)`,desc:`Highlights, acento`}]},{group:`Text — oscuro`,tokens:[{token:`--color-text-on-dark`,value:`var(--white)`,desc:`Texto principal sobre dark`},{token:`--color-text-on-dark-high`,value:`rgba(255,255,255,0.90)`,desc:`Nav items, íconos`},{token:`--color-text-on-dark-secondary`,value:`rgba(255,255,255,0.70)`,desc:`Texto secundario dark`},{token:`--color-text-on-dark-muted`,value:`rgba(255,255,255,0.55)`,desc:`Nav, footer links`},{token:`--color-text-on-dark-faint`,value:`rgba(255,255,255,0.40)`,desc:`Footer legal`}]}],Jt={"var(--purple-700)":`#391383`,"var(--purple-800)":`#2e0f70`,"var(--purple-900)":`#1a0b3d`,"var(--cyan-500)":`#00cace`,"var(--amber-500)":`#ffa000`,"var(--white)":`#fefdfc`,"var(--gray-50)":`#f6f7f9`,"var(--gray-100)":`#f0f0f0`,"var(--gray-300)":`#d1d5dc`,"var(--gray-400)":`#99a1af`,"var(--gray-500)":`#6e728c`,"var(--gray-600)":`#4a5565`};function Yt(e){return Jt[e]??e}function Xt(e){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16);return(t*299+n*587+r*114)/1e3>128}function Zt({token:e,hex:t,label:n}){let[r,i]=(0,_.useState)(!1),a=Xt(t);return(0,y.jsxs)(`button`,{type:`button`,onClick:()=>{navigator.clipboard.writeText(e).then(()=>{i(!0),setTimeout(()=>i(!1),1500)})},title:`Copiar ${e}`,className:`group flex flex-col rounded-lg overflow-hidden border border-[var(--gray-200)] hover:shadow-md transition-all duration-150 text-left w-full`,children:[(0,y.jsx)(`div`,{className:`h-14 w-full relative`,style:{backgroundColor:`var(${e})`},children:r&&(0,y.jsx)(`span`,{className:`absolute inset-0 flex items-center justify-center text-[10px] font-bold ${a?`text-black/60`:`text-white/80`}`,children:`✓ copiado`})}),(0,y.jsxs)(`div`,{className:`px-2.5 py-2 bg-white flex-1`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-mono text-[var(--gray-600)] truncate leading-tight`,children:e}),(0,y.jsx)(`p`,{className:`text-[10px] font-mono text-[var(--gray-400)] mt-0.5`,children:t}),(0,y.jsx)(`p`,{className:`text-[9px] text-[var(--gray-400)] mt-0.5 font-['Inter',sans-serif] truncate`,children:n})]})]})}function Qt({token:e,value:t,desc:n}){let r=Yt(t);return(0,y.jsxs)(`tr`,{className:`border-b border-[var(--gray-100)] hover:bg-[var(--gray-50)] group`,children:[(0,y.jsx)(`td`,{className:`py-2.5 pr-3`,children:(0,y.jsx)(`div`,{className:`size-6 rounded border border-[var(--gray-200)] shrink-0`,style:{backgroundColor:`var(${e})`},title:r})}),(0,y.jsx)(`td`,{className:`py-2.5 pr-4`,children:(0,y.jsx)(`code`,{className:`text-[11px] text-[var(--purple-700)] font-mono`,children:e})}),(0,y.jsx)(`td`,{className:`py-2.5 pr-4 text-[11px] font-mono text-[var(--gray-500)]`,children:t}),(0,y.jsx)(`td`,{className:`py-2.5 text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif]`,children:n})]})}var $t=[{token:`--size-11`,px:`11px`,lh:`16px`,weight:`400`,sample:`Caption — labels pequeños`,cls:`text-[11px] leading-[16px]`},{token:`--size-12`,px:`12px`,lh:`20px`,weight:`400`,sample:`Label — badges, filter buttons`,cls:`text-[12px] leading-[20px]`},{token:`--size-14`,px:`14px`,lh:`20px`,weight:`400`,sample:`Body SM — specs, meta info`,cls:`text-[14px] leading-[20px]`},{token:`--size-16`,px:`16px`,lh:`24px`,weight:`400`,sample:`Body — nav labels, texto base`,cls:`text-[16px] leading-[24px]`},{token:`--size-18`,px:`18px`,lh:`28px`,weight:`700`,sample:`Card Title — TOYOTA HILUX`,cls:`text-[18px] leading-[28px] font-bold`},{token:`--size-20`,px:`20px`,lh:`32px`,weight:`700`,sample:`Heading SM — subtítulos, CTA`,cls:`text-[20px] leading-[32px] font-bold`},{token:`--size-24`,px:`24px`,lh:`36px`,weight:`700`,sample:`Heading MD — secciones`,cls:`text-[24px] leading-[36px] font-bold`},{token:`--size-27`,px:`27px`,lh:`40px`,weight:`700`,sample:`Heading LG — MAF PERÚ × VMC`,cls:`text-[27px] leading-[40px] font-bold`},{token:`--size-30`,px:`30px`,lh:`44px`,weight:`700`,sample:`Price Card — 17,999`,cls:`text-[30px] leading-[44px] font-bold tabular-nums`},{token:`--size-48`,px:`48px`,lh:`72px`,weight:`700`,sample:`Display MD — BMW 320i`,cls:`text-[48px] leading-[72px] font-bold italic`},{token:`--size-54`,px:`54px`,lh:`80px`,weight:`700`,sample:`Display LG — $14,000`,cls:`text-[54px] leading-[80px] font-bold tabular-nums`}],en=[{token:`--space-1`,px:`4px`},{token:`--space-2`,px:`8px`},{token:`--space-3`,px:`12px`},{token:`--space-4`,px:`16px`},{token:`--space-5`,px:`20px`},{token:`--space-6`,px:`24px`},{token:`--space-8`,px:`32px`},{token:`--space-10`,px:`40px`},{token:`--space-12`,px:`48px`},{token:`--space-16`,px:`64px`}],tn=[{token:`--radius-none`,px:`0px`,label:`None — celdas, tablas`},{token:`--radius-sm`,px:`4px`,label:`SM — inputs, badges, chips`},{token:`--radius-md`,px:`8px`,label:`MD — botones primarios`},{token:`--radius-lg`,px:`16px`,label:`LG — cards, hero, modales`},{token:`--radius-full`,px:`9999px`,label:`Full — píldoras, avatares`}],nn=[{token:`--shadow-sm`,value:`0 2px 4px rgba(0,0,0,0.06)`,label:`SM — cards en reposo`},{token:`--shadow-md`,value:`0 4px 8px rgba(0,0,0,0.08)`,label:`MD — elementos elevados`},{token:`--shadow-lg`,value:`0 8px 16px rgba(0,0,0,0.10)`,label:`LG — sidebar, CTA, hover`}];function rn(){return(0,y.jsxs)(`section`,{id:`tokens`,className:`scroll-mt-8`,children:[(0,y.jsx)(Gt,{title:`Primitivos — Color`}),(0,y.jsx)(`div`,{className:`grid grid-cols-6 gap-3 mb-12`,children:Kt.map(e=>(0,y.jsx)(Zt,{token:e.token,hex:e.hex,label:e.label},e.token))}),(0,y.jsx)(Gt,{title:`Semánticos — Color`}),(0,y.jsx)(`div`,{className:`flex flex-col gap-8 mb-12`,children:qt.map(e=>(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] font-['Inter',sans-serif] mb-3`,children:e.group}),(0,y.jsxs)(`table`,{className:`w-full border-collapse`,children:[(0,y.jsx)(`thead`,{children:(0,y.jsxs)(`tr`,{className:`border-b-2 border-[var(--gray-200)]`,children:[(0,y.jsx)(`th`,{className:`pb-2 text-left text-[10px] font-bold text-[var(--gray-400)] font-['Inter',sans-serif] w-8`,children:`·`}),(0,y.jsx)(`th`,{className:`pb-2 text-left text-[10px] font-bold text-[var(--gray-400)] font-['Inter',sans-serif]`,children:`Token`}),(0,y.jsx)(`th`,{className:`pb-2 text-left text-[10px] font-bold text-[var(--gray-400)] font-['Inter',sans-serif]`,children:`Valor`}),(0,y.jsx)(`th`,{className:`pb-2 text-left text-[10px] font-bold text-[var(--gray-400)] font-['Inter',sans-serif]`,children:`Uso`})]})}),(0,y.jsx)(`tbody`,{children:e.tokens.map(e=>(0,y.jsx)(Qt,{token:e.token,value:e.value,desc:e.desc},e.token))})]})]},e.group))}),(0,y.jsx)(Gt,{title:`Tipografía — Escala`}),(0,y.jsx)(`div`,{className:`mb-12 rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:$t.map((e,t)=>(0,y.jsxs)(`div`,{className:[`flex items-baseline gap-6 px-5 py-3`,t%2==0?`bg-white`:`bg-[var(--gray-50)]`].join(` `),children:[(0,y.jsxs)(`div`,{className:`w-[200px] shrink-0 flex flex-col gap-0.5`,children:[(0,y.jsx)(`code`,{className:`text-[10px] text-[var(--purple-700)] font-mono`,children:e.token}),(0,y.jsxs)(`span`,{className:`text-[9px] text-[var(--gray-400)] font-['Inter',sans-serif]`,children:[e.px,` / lh `,e.lh,` / w`,e.weight]})]}),(0,y.jsx)(`span`,{className:[`text-[var(--gray-600)] font-["Inter",sans-serif] truncate`,e.cls].join(` `),style:{fontStyle:e.cls.includes(`italic`)?`italic`:void 0},children:e.sample})]},e.token))}),(0,y.jsx)(Gt,{title:`Spacing — Grilla 4px`}),(0,y.jsx)(`div`,{className:`mb-12 flex flex-col gap-3`,children:en.map(e=>(0,y.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,y.jsx)(`code`,{className:`text-[11px] font-mono text-[var(--purple-700)] w-[110px] shrink-0`,children:e.token}),(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-[var(--gray-400)] w-[44px] shrink-0`,children:e.px}),(0,y.jsx)(`div`,{className:`h-5 rounded-sm bg-[var(--cyan-500)] opacity-70 shrink-0`,style:{width:e.px}})]},e.token))}),(0,y.jsx)(Gt,{title:`Border Radius — 5 niveles`}),(0,y.jsx)(`div`,{className:`mb-12 flex items-end gap-6 flex-wrap`,children:tn.map(e=>(0,y.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,y.jsx)(`div`,{className:`size-14 bg-[var(--purple-700)] opacity-80`,style:{borderRadius:`var(${e.token})`}}),(0,y.jsx)(`code`,{className:`text-[10px] font-mono text-[var(--purple-700)] text-center`,children:e.token}),(0,y.jsx)(`span`,{className:`text-[9px] text-[var(--gray-400)] font-['Inter',sans-serif] text-center max-w-[90px]`,children:e.label})]},e.token))}),(0,y.jsx)(Gt,{title:`Sombras — 3 niveles + none`}),(0,y.jsx)(`div`,{className:`mb-12 flex items-end gap-8 flex-wrap`,children:nn.map(e=>(0,y.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,y.jsx)(`div`,{className:`w-20 h-14 bg-white rounded-lg`,style:{boxShadow:e.value}}),(0,y.jsx)(`code`,{className:`text-[10px] font-mono text-[var(--purple-700)] text-center`,children:e.token}),(0,y.jsx)(`span`,{className:`text-[9px] text-[var(--gray-400)] font-['Inter',sans-serif] text-center max-w-[100px]`,children:e.label})]},e.token))}),(0,y.jsx)(Gt,{title:`Animación`}),(0,y.jsx)(`div`,{className:`mb-12 flex gap-8 flex-wrap`,children:[{token:`--duration-micro`,value:`150ms`,label:`Micro — hover, focus`},{token:`--duration-standard`,value:`300ms`,label:`Standard — modales, menús`},{token:`--easing-standard`,value:`cubic-bezier(0.3, 0, 0, 1)`,label:`Easing estándar`}].map(e=>(0,y.jsxs)(`div`,{className:`flex flex-col gap-1 px-4 py-3 rounded-lg border border-[var(--gray-200)] bg-white`,children:[(0,y.jsx)(`code`,{className:`text-[11px] font-mono text-[var(--purple-700)]`,children:e.token}),(0,y.jsx)(`code`,{className:`text-[11px] font-mono text-[var(--gray-500)]`,children:e.value}),(0,y.jsx)(`span`,{className:`text-[10px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:e.label})]},e.token))}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}var an=[`Default`,`Hover`,`Focus`,`Active`,`Disabled`,`Loading`,`Error`];function on({active:e,available:t,onChange:n}){return(0,y.jsx)(`div`,{className:`flex items-center gap-1 flex-wrap`,role:`tablist`,children:an.map(r=>{let i=t.includes(r),a=r===e;return(0,y.jsx)(`button`,{role:`tab`,"aria-selected":a,disabled:!i,onClick:()=>i&&n(r),className:[`px-3 py-1 rounded-md text-[11px] font-semibold transition-all duration-150 border`,a?`bg-[var(--purple-600)] text-white border-[var(--purple-600)]`:i?`bg-transparent text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`:`opacity-30 text-[var(--gray-400)] border-[var(--gray-300)] cursor-not-allowed`].join(` `),children:r},r)})})}function sn({label:e}){return(0,y.jsx)(`span`,{className:`inline-flex items-center px-2 py-0.5 rounded bg-[var(--gray-100)] border border-[var(--gray-300)] font-mono text-[10px] text-[var(--gray-600)]`,children:e})}function A({label:e,value:t,token:n}){return(0,y.jsxs)(`tr`,{className:`border-b border-[var(--gray-100)]`,children:[(0,y.jsx)(`td`,{className:`py-2 pr-3 text-[11px] font-semibold text-[var(--gray-500)] whitespace-nowrap`,children:e}),(0,y.jsx)(`td`,{className:`py-2 pr-3 text-[11px] text-[var(--gray-600)] font-mono`,children:t}),n&&(0,y.jsx)(`td`,{className:`py-2 text-[10px] font-mono text-[var(--purple-600)]`,children:n})]})}function cn({children:e,dark:t}){return(0,y.jsx)(`div`,{className:`flex items-center justify-center min-h-[140px] px-10 py-8 rounded-t-xl border border-b-0 border-[var(--gray-300)]`,style:t?{background:`var(--color-surface-hero-gradient)`}:{backgroundImage:`linear-gradient(45deg,#f0f0f0 25%,transparent 25%),linear-gradient(-45deg,#f0f0f0 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#f0f0f0 75%),linear-gradient(-45deg,transparent 75%,#f0f0f0 75%)`,backgroundSize:`16px 16px`,backgroundPosition:`0 0,0 8px,8px -8px,-8px 0`,backgroundColor:`#fafafa`},children:e})}var ln=[`Default`,`Hover`,`Focus`,`Active`,`Disabled`,`Loading`];function un(){let[e,t]=(0,_.useState)(`Default`),[n,r]=(0,_.useState)(!1),i={Default:[`(sin props)`],Hover:[`CSS :hover`],Focus:[`CSS :focus-visible`],Active:[`CSS :active`],Disabled:[`disabled={true}`],Loading:[`isLoading={true}`],Error:[`—`]},a=[`primary`,`secondary`,`tertiary`,`destructive`],o=[`sm`,`md`,`lg`];return(0,y.jsxs)(`section`,{id:`button`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`Button`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L1 — Elemento`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>r(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),n?`Ocultar`:`Ver fuente`]})]}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:`Elemento de acción principal. 4 variantes de intención × 3 tamaños. Toda acción ejecutable usa Button.`}),(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Variantes × Tamaños`}),(0,y.jsx)(`div`,{className:`p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:(0,y.jsx)(`div`,{className:`flex flex-col gap-4`,children:a.map(e=>(0,y.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,y.jsx)(`span`,{className:`w-[90px] shrink-0 text-[10px] font-mono text-[var(--gray-500)]`,children:e}),(0,y.jsx)(`div`,{className:`flex items-center gap-3 flex-wrap`,children:o.map(t=>(0,y.jsx)(C,{variant:e,size:t,children:`REALIZAR OFERTA`},t))})]},e))})})]}),(0,y.jsxs)(`div`,{className:`grid grid-cols-[1fr_auto] gap-8 items-start`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)]`,children:`Estados — Primary md`}),(0,y.jsx)(on,{active:e,available:ln,onChange:t}),(0,y.jsx)(`div`,{className:`flex items-center gap-2`,children:i[e].map(e=>(0,y.jsx)(sn,{label:e},e))}),(0,y.jsx)(cn,{children:(0,y.jsx)(C,{variant:`primary`,size:`md`,disabled:e===`Disabled`,isLoading:e===`Loading`,children:`REALIZAR OFERTA`})}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsx)(`div`,{className:`absolute top-3 right-3 z-10`,children:(0,y.jsx)(Wt,{text:te})}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 pt-12 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[320px] border-t border-white/6`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(k,{code:te})})})]})]}),(0,y.jsxs)(`div`,{className:`w-[210px] shrink-0`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Design specs`}),(0,y.jsx)(`table`,{className:`w-full border-collapse`,children:(0,y.jsxs)(`tbody`,{children:[(0,y.jsx)(A,{label:`Height sm`,value:`32px`,token:`h-8`}),(0,y.jsx)(A,{label:`Height md`,value:`40px`,token:`h-10`}),(0,y.jsx)(A,{label:`Height lg`,value:`48px`,token:`h-12`}),(0,y.jsx)(A,{label:`Radius`,value:`4px`,token:`--radius-btn`}),(0,y.jsx)(A,{label:`Font`,value:`Plus Jakarta Sans`,token:`--font-body`}),(0,y.jsx)(A,{label:`Weight`,value:`SemiBold 600`,token:`--weight-semibold`}),(0,y.jsx)(A,{label:`Tracking`,value:`0.9px`,token:`--tracking-wider`}),(0,y.jsx)(A,{label:`Primary bg`,value:`gradient vault`,token:`--color-surface-hero-gradient`}),(0,y.jsx)(A,{label:`Shadow`,value:`brand tinted`,token:`--shadow-brand-tinted`})]})})]})]}),n&&(0,y.jsxs)(`div`,{className:`mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`Button.tsx`}),(0,y.jsx)(Wt,{text:`import { type ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'accent'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  hasLeadingIcon?: ReactNode
  hasTrailingIcon?: ReactNode
  isFullWidth?: boolean
  isLoading?: boolean
  disabled?: boolean
  children?: ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
  className?: string
}

// ── Spinner ──────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <svg
      className="animate-spin shrink-0"
      width="14" height="14" viewBox="0 0 14 14"
      fill="none" aria-hidden="true"
    >
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
      <path d="M12 7a5 5 0 0 0-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// ── Estilos por variante ──────────────────────────────────────────────────────

const VARIANT_BASE: Record<ButtonVariant, string> = {
  primary:     'text-[var(--color-text-on-dark)] shadow-[var(--shadow-brand-tinted)]',
  secondary:   'bg-[var(--color-surface-card)] text-[var(--color-action-primary)] border border-[var(--color-action-primary)]',
  tertiary:    'bg-transparent text-[var(--color-action-primary)]',
  destructive: 'bg-[var(--red-500)] text-[var(--color-text-on-dark)]',
  accent:      'bg-[var(--color-action-accent)] text-[var(--neutral-950)]',
}

const VARIANT_HOVER: Record<ButtonVariant, string> = {
  primary:     'hover:brightness-110 active:brightness-95',
  secondary:   'hover:bg-[var(--color-surface-tinted)] active:brightness-95',
  tertiary:    'hover:bg-[var(--color-surface-tinted)] active:bg-[var(--color-surface-section)]',
  destructive: 'hover:brightness-90 active:brightness-80',
  accent:      'hover:brightness-110 active:brightness-95',
}

// ── Estilos por tamaño ───────────────────────────────────────────────────────

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-8  px-3 gap-1.5 text-[10px]',
  md: 'h-10 px-4 gap-2   text-[var(--type-label-size)]',
  lg: 'h-12 px-6 gap-2   text-[var(--type-label-size)]',
}

// ── Componente ───────────────────────────────────────────────────────────────

export function Button({
  variant = 'primary',
  size = 'md',
  hasLeadingIcon,
  hasTrailingIcon,
  isFullWidth = false,
  isLoading = false,
  disabled = false,
  children,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
  className = '',
}: ButtonProps) {
  const isDisabled = disabled || isLoading

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={isLoading || undefined}
      style={variant === 'primary' ? { background: 'var(--color-surface-hero-gradient)' } : undefined}
      className={[
        // Base
        'inline-flex items-center justify-center',
        'rounded-[var(--radius-btn)]',
        'font-[var(--font-body)]',
        'font-[var(--weight-semibold)]',
        'tracking-[var(--tracking-wider)]',
        'whitespace-nowrap select-none cursor-pointer border-0 outline-none',
        'transition-[filter,background-color,opacity] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
        // Focus visible
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
        // Variante
        VARIANT_BASE[variant],
        // Hover/Active (solo si no disabled)
        !isDisabled ? VARIANT_HOVER[variant] : '',
        // Tamaño
        SIZE_CLASSES[size],
        // Full width
        isFullWidth ? 'w-full' : '',
        // Disabled
        isDisabled ? 'opacity-40 cursor-not-allowed' : '',
        className,
      ].filter(Boolean).join(' ')}
    >
      {isLoading ? <Spinner /> : hasLeadingIcon}
      {children && <span>{children}</span>}
      {!isLoading && hasTrailingIcon}
    </button>
  )
}

export default Button
`})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(k,{code:`import { type ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'accent'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  hasLeadingIcon?: ReactNode
  hasTrailingIcon?: ReactNode
  isFullWidth?: boolean
  isLoading?: boolean
  disabled?: boolean
  children?: ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
  className?: string
}

// ── Spinner ──────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <svg
      className="animate-spin shrink-0"
      width="14" height="14" viewBox="0 0 14 14"
      fill="none" aria-hidden="true"
    >
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
      <path d="M12 7a5 5 0 0 0-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// ── Estilos por variante ──────────────────────────────────────────────────────

const VARIANT_BASE: Record<ButtonVariant, string> = {
  primary:     'text-[var(--color-text-on-dark)] shadow-[var(--shadow-brand-tinted)]',
  secondary:   'bg-[var(--color-surface-card)] text-[var(--color-action-primary)] border border-[var(--color-action-primary)]',
  tertiary:    'bg-transparent text-[var(--color-action-primary)]',
  destructive: 'bg-[var(--red-500)] text-[var(--color-text-on-dark)]',
  accent:      'bg-[var(--color-action-accent)] text-[var(--neutral-950)]',
}

const VARIANT_HOVER: Record<ButtonVariant, string> = {
  primary:     'hover:brightness-110 active:brightness-95',
  secondary:   'hover:bg-[var(--color-surface-tinted)] active:brightness-95',
  tertiary:    'hover:bg-[var(--color-surface-tinted)] active:bg-[var(--color-surface-section)]',
  destructive: 'hover:brightness-90 active:brightness-80',
  accent:      'hover:brightness-110 active:brightness-95',
}

// ── Estilos por tamaño ───────────────────────────────────────────────────────

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-8  px-3 gap-1.5 text-[10px]',
  md: 'h-10 px-4 gap-2   text-[var(--type-label-size)]',
  lg: 'h-12 px-6 gap-2   text-[var(--type-label-size)]',
}

// ── Componente ───────────────────────────────────────────────────────────────

export function Button({
  variant = 'primary',
  size = 'md',
  hasLeadingIcon,
  hasTrailingIcon,
  isFullWidth = false,
  isLoading = false,
  disabled = false,
  children,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
  className = '',
}: ButtonProps) {
  const isDisabled = disabled || isLoading

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={isLoading || undefined}
      style={variant === 'primary' ? { background: 'var(--color-surface-hero-gradient)' } : undefined}
      className={[
        // Base
        'inline-flex items-center justify-center',
        'rounded-[var(--radius-btn)]',
        'font-[var(--font-body)]',
        'font-[var(--weight-semibold)]',
        'tracking-[var(--tracking-wider)]',
        'whitespace-nowrap select-none cursor-pointer border-0 outline-none',
        'transition-[filter,background-color,opacity] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
        // Focus visible
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
        // Variante
        VARIANT_BASE[variant],
        // Hover/Active (solo si no disabled)
        !isDisabled ? VARIANT_HOVER[variant] : '',
        // Tamaño
        SIZE_CLASSES[size],
        // Full width
        isFullWidth ? 'w-full' : '',
        // Disabled
        isDisabled ? 'opacity-40 cursor-not-allowed' : '',
        className,
      ].filter(Boolean).join(' ')}
    >
      {isLoading ? <Spinner /> : hasLeadingIcon}
      {children && <span>{children}</span>}
      {!isLoading && hasTrailingIcon}
    </button>
  )
}

export default Button
`})})})]}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}var dn=[`live`,`negotiable`,`closed`,`upcoming`,`new`,`featured`];function fn(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`badge`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`Badge`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L1 — Elemento`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),e?`Ocultar`:`Ver fuente`]})]}),(0,y.jsxs)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:[`Indicador de estado o categoría de un lote. Siempre uppercase, siempre pill. El dot pulsante de `,(0,y.jsx)(`code`,{className:`font-mono text-[11px]`,children:`live`}),` indica subasta en tiempo real.`]}),(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Variantes × Tamaños`}),(0,y.jsx)(`div`,{className:`p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:[`md`,`sm`].map(e=>(0,y.jsxs)(`div`,{className:`flex items-center gap-3 mb-4 last:mb-0 flex-wrap`,children:[(0,y.jsx)(`span`,{className:`w-[28px] shrink-0 text-[10px] font-mono text-[var(--gray-400)]`,children:e}),dn.map(t=>(0,y.jsx)(w,{type:t,size:e},t))]},e))})]}),(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Estado Disabled`}),(0,y.jsx)(`div`,{className:`p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:(0,y.jsx)(`div`,{className:`flex items-center gap-3 flex-wrap`,children:dn.map(e=>(0,y.jsx)(w,{type:e,disabled:!0},e))})})]}),e&&(0,y.jsxs)(`div`,{className:`mt-2`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`Badge.tsx`}),(0,y.jsx)(Wt,{text:`export type BadgeType = 'live' | 'negotiable' | 'closed' | 'upcoming' | 'new' | 'featured'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps {
  type: BadgeType
  size?: BadgeSize
  disabled?: boolean
  className?: string
}

// ── Configuración por tipo ────────────────────────────────────────────────────

const BADGE_CONFIG: Record<BadgeType, { label: string; bg: string; text: string; dot?: boolean }> = {
  live:       { label: 'En Vivo',    bg: 'var(--brand-en-vivo)',    text: 'var(--color-text-on-dark)',     dot: true },
  negotiable: { label: 'Negociable', bg: 'var(--brand-negociable)', text: 'var(--neutral-950)'                       },
  closed:     { label: 'Cerrado',    bg: 'var(--gray-300)',         text: 'var(--gray-600)'                          },
  upcoming:   { label: 'Próximo',    bg: 'var(--surface-lavender)', text: 'var(--purple-600)'                        },
  new:        { label: 'Nuevo',      bg: 'var(--purple-600)',       text: 'var(--color-text-on-dark)'                },
  featured:   { label: 'Destacado',  bg: 'var(--neutral-950)',      text: 'var(--color-text-on-dark)'                },
}

const SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 gap-1',
  md: 'px-2.5 py-1 gap-1.5',
}

// ── Componente ───────────────────────────────────────────────────────────────

export function Badge({ type, size = 'md', disabled = false, className = '' }: BadgeProps) {
  const { label, bg, text, dot } = BADGE_CONFIG[type]

  return (
    <span
      style={{ background: bg, color: text }}
      className={[
        'inline-flex items-center',
        'rounded-[var(--radius-full)]',
        'font-[var(--font-body)]',
        'text-[var(--type-badge-size)]',
        'font-[var(--type-badge-weight)]',
        'leading-[var(--type-badge-lh)]',
        'tracking-[var(--type-badge-tracking)]',
        'uppercase whitespace-nowrap select-none',
        SIZE_CLASSES[size],
        disabled ? 'opacity-40' : '',
        className,
      ].filter(Boolean).join(' ')}
    >
      {dot && !disabled && (
        <span
          aria-hidden="true"
          className="shrink-0 size-1.5 rounded-full animate-pulse"
          style={{ background: 'var(--color-status-live)' }}
        />
      )}
      {label}
    </span>
  )
}

export default Badge
`})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(k,{code:`export type BadgeType = 'live' | 'negotiable' | 'closed' | 'upcoming' | 'new' | 'featured'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps {
  type: BadgeType
  size?: BadgeSize
  disabled?: boolean
  className?: string
}

// ── Configuración por tipo ────────────────────────────────────────────────────

const BADGE_CONFIG: Record<BadgeType, { label: string; bg: string; text: string; dot?: boolean }> = {
  live:       { label: 'En Vivo',    bg: 'var(--brand-en-vivo)',    text: 'var(--color-text-on-dark)',     dot: true },
  negotiable: { label: 'Negociable', bg: 'var(--brand-negociable)', text: 'var(--neutral-950)'                       },
  closed:     { label: 'Cerrado',    bg: 'var(--gray-300)',         text: 'var(--gray-600)'                          },
  upcoming:   { label: 'Próximo',    bg: 'var(--surface-lavender)', text: 'var(--purple-600)'                        },
  new:        { label: 'Nuevo',      bg: 'var(--purple-600)',       text: 'var(--color-text-on-dark)'                },
  featured:   { label: 'Destacado',  bg: 'var(--neutral-950)',      text: 'var(--color-text-on-dark)'                },
}

const SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 gap-1',
  md: 'px-2.5 py-1 gap-1.5',
}

// ── Componente ───────────────────────────────────────────────────────────────

export function Badge({ type, size = 'md', disabled = false, className = '' }: BadgeProps) {
  const { label, bg, text, dot } = BADGE_CONFIG[type]

  return (
    <span
      style={{ background: bg, color: text }}
      className={[
        'inline-flex items-center',
        'rounded-[var(--radius-full)]',
        'font-[var(--font-body)]',
        'text-[var(--type-badge-size)]',
        'font-[var(--type-badge-weight)]',
        'leading-[var(--type-badge-lh)]',
        'tracking-[var(--type-badge-tracking)]',
        'uppercase whitespace-nowrap select-none',
        SIZE_CLASSES[size],
        disabled ? 'opacity-40' : '',
        className,
      ].filter(Boolean).join(' ')}
    >
      {dot && !disabled && (
        <span
          aria-hidden="true"
          className="shrink-0 size-1.5 rounded-full animate-pulse"
          style={{ background: 'var(--color-status-live)' }}
        />
      )}
      {label}
    </span>
  )
}

export default Badge
`})})})]}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}function pn(){return(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M11 11l3 3`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function mn(){return(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`circle`,{cx:`8`,cy:`8`,r:`2`,stroke:`currentColor`,strokeWidth:`1.5`})]})}function hn(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`textfield`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`TextField`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L1 — Elemento`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),e?`Ocultar`:`Ver fuente`]})]}),(0,y.jsxs)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:[`Input de texto. Sin border en reposo — el fondo `,(0,y.jsx)(`code`,{className:`font-mono text-[11px]`,children:`--color-surface-input`}),` define el límite. Border ghost solo en focus y error.`]}),(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Estados`}),(0,y.jsx)(`div`,{className:`p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:(0,y.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,y.jsx)(ie,{label:`Default`,placeholder:`Ingresa tu nombre`}),(0,y.jsx)(ie,{label:`Con hint`,placeholder:`usuario@email.com`,hint:`Nunca compartiremos tu email.`}),(0,y.jsx)(ie,{label:`Error`,placeholder:`Ingresa tu nombre`,error:`Este campo es requerido.`,defaultValue:`Valor inválido`}),(0,y.jsx)(ie,{label:`Disabled`,placeholder:`Campo deshabilitado`,disabled:!0}),(0,y.jsx)(ie,{label:`Read-only`,defaultValue:`No se puede editar`,readOnly:!0}),(0,y.jsx)(ie,{label:`Con ícono`,placeholder:`Buscar vehículo...`,variant:`withLeadingIcon`,leadingIcon:(0,y.jsx)(pn,{})})]})})]}),(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Con acción trailing`}),(0,y.jsx)(`div`,{className:`p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:(0,y.jsx)(`div`,{className:`max-w-[280px]`,children:(0,y.jsx)(ie,{label:`Contraseña`,type:`password`,placeholder:`••••••••`,variant:`withTrailingAction`,trailingAction:(0,y.jsx)(`button`,{type:`button`,"aria-label":`Mostrar contraseña`,className:`text-[var(--color-text-muted)] hover:text-[var(--color-action-primary)] transition-colors duration-[var(--duration-micro)]`,children:(0,y.jsx)(mn,{})})})})})]}),e&&(0,y.jsxs)(`div`,{className:`mt-2`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`TextField.tsx`}),(0,y.jsx)(Wt,{text:`import { type ReactNode, useId } from 'react'

export type TextFieldVariant = 'default' | 'withLeadingIcon' | 'withTrailingAction'

export interface TextFieldProps {
  label: string
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  variant?: TextFieldVariant
  leadingIcon?: ReactNode
  trailingAction?: ReactNode
  hint?: string
  error?: string
  disabled?: boolean
  readOnly?: boolean
  type?: React.HTMLInputTypeAttribute
  id?: string
  name?: string
  className?: string
}

export function TextField({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  variant = 'default',
  leadingIcon,
  trailingAction,
  hint,
  error,
  disabled = false,
  readOnly = false,
  type = 'text',
  id: idProp,
  name,
  className = '',
}: TextFieldProps) {
  const generatedId = useId()
  const id = idProp ?? generatedId
  const hintId = hint || error ? \`\${id}-hint\` : undefined

  const hasError = Boolean(error)
  const isReadOnly = readOnly && !disabled

  return (
    <div className={['flex flex-col gap-1.5 w-full', className].join(' ')}>

      {/* Label */}
      <label
        htmlFor={id}
        className={[
          'text-[var(--type-label-size)] font-[var(--type-label-weight)] leading-[var(--type-label-lh)] tracking-[var(--type-label-tracking)]',
          'font-[var(--font-body)]',
          disabled
            ? 'text-[var(--color-text-disabled)]'
            : 'text-[var(--color-text-body)]',
        ].join(' ')}
      >
        {label}
      </label>

      {/* Input wrapper */}
      <div className="relative flex items-center">

        {/* Leading icon */}
        {(variant === 'withLeadingIcon' && leadingIcon) && (
          <span
            aria-hidden="true"
            className="absolute left-3 flex items-center pointer-events-none text-[var(--color-text-muted)]"
          >
            {leadingIcon}
          </span>
        )}

        <input
          id={id}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={isReadOnly}
          aria-describedby={hintId}
          aria-invalid={hasError || undefined}
          className={[
            // Base
            'w-full h-10',
            'rounded-[var(--radius-btn)]',
            'bg-[var(--color-surface-input)]',
            'font-[var(--font-body)]',
            'text-[var(--type-body-sm-size)] leading-[var(--type-body-sm-lh)]',
            'text-[var(--color-text-on-surface)]',
            'border-0 outline-none',
            'transition-[box-shadow,background-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
            // Placeholder
            'placeholder:text-[var(--color-text-muted)]',
            // Padding — ajusta según variante
            variant === 'withLeadingIcon'    ? 'pl-9 pr-3'  :
            variant === 'withTrailingAction' ? 'pl-3 pr-10' : 'px-3',
            // Focus — ghost border
            'focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]',
            // Error
            hasError
              ? 'shadow-[0_0_0_1.5px_var(--red-500)] focus:shadow-[0_0_0_1.5px_var(--red-500)]'
              : '',
            // Read-only
            isReadOnly ? 'bg-[var(--gray-100)] cursor-default' : '',
            // Disabled
            disabled   ? 'opacity-40 cursor-not-allowed' : '',
          ].filter(Boolean).join(' ')}
        />

        {/* Trailing action */}
        {(variant === 'withTrailingAction' && trailingAction) && (
          <span className="absolute right-3 flex items-center">
            {trailingAction}
          </span>
        )}
      </div>

      {/* Hint / Error */}
      {(hint || error) && (
        <p
          id={hintId}
          className={[
            'text-[var(--type-label-size)] leading-[var(--type-label-lh)]',
            'font-[var(--font-body)]',
            hasError
              ? 'text-[var(--red-500)]'
              : 'text-[var(--color-text-muted)]',
          ].join(' ')}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  )
}

export default TextField
`})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(k,{code:`import { type ReactNode, useId } from 'react'

export type TextFieldVariant = 'default' | 'withLeadingIcon' | 'withTrailingAction'

export interface TextFieldProps {
  label: string
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  variant?: TextFieldVariant
  leadingIcon?: ReactNode
  trailingAction?: ReactNode
  hint?: string
  error?: string
  disabled?: boolean
  readOnly?: boolean
  type?: React.HTMLInputTypeAttribute
  id?: string
  name?: string
  className?: string
}

export function TextField({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  variant = 'default',
  leadingIcon,
  trailingAction,
  hint,
  error,
  disabled = false,
  readOnly = false,
  type = 'text',
  id: idProp,
  name,
  className = '',
}: TextFieldProps) {
  const generatedId = useId()
  const id = idProp ?? generatedId
  const hintId = hint || error ? \`\${id}-hint\` : undefined

  const hasError = Boolean(error)
  const isReadOnly = readOnly && !disabled

  return (
    <div className={['flex flex-col gap-1.5 w-full', className].join(' ')}>

      {/* Label */}
      <label
        htmlFor={id}
        className={[
          'text-[var(--type-label-size)] font-[var(--type-label-weight)] leading-[var(--type-label-lh)] tracking-[var(--type-label-tracking)]',
          'font-[var(--font-body)]',
          disabled
            ? 'text-[var(--color-text-disabled)]'
            : 'text-[var(--color-text-body)]',
        ].join(' ')}
      >
        {label}
      </label>

      {/* Input wrapper */}
      <div className="relative flex items-center">

        {/* Leading icon */}
        {(variant === 'withLeadingIcon' && leadingIcon) && (
          <span
            aria-hidden="true"
            className="absolute left-3 flex items-center pointer-events-none text-[var(--color-text-muted)]"
          >
            {leadingIcon}
          </span>
        )}

        <input
          id={id}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={isReadOnly}
          aria-describedby={hintId}
          aria-invalid={hasError || undefined}
          className={[
            // Base
            'w-full h-10',
            'rounded-[var(--radius-btn)]',
            'bg-[var(--color-surface-input)]',
            'font-[var(--font-body)]',
            'text-[var(--type-body-sm-size)] leading-[var(--type-body-sm-lh)]',
            'text-[var(--color-text-on-surface)]',
            'border-0 outline-none',
            'transition-[box-shadow,background-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
            // Placeholder
            'placeholder:text-[var(--color-text-muted)]',
            // Padding — ajusta según variante
            variant === 'withLeadingIcon'    ? 'pl-9 pr-3'  :
            variant === 'withTrailingAction' ? 'pl-3 pr-10' : 'px-3',
            // Focus — ghost border
            'focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]',
            // Error
            hasError
              ? 'shadow-[0_0_0_1.5px_var(--red-500)] focus:shadow-[0_0_0_1.5px_var(--red-500)]'
              : '',
            // Read-only
            isReadOnly ? 'bg-[var(--gray-100)] cursor-default' : '',
            // Disabled
            disabled   ? 'opacity-40 cursor-not-allowed' : '',
          ].filter(Boolean).join(' ')}
        />

        {/* Trailing action */}
        {(variant === 'withTrailingAction' && trailingAction) && (
          <span className="absolute right-3 flex items-center">
            {trailingAction}
          </span>
        )}
      </div>

      {/* Hint / Error */}
      {(hint || error) && (
        <p
          id={hintId}
          className={[
            'text-[var(--type-label-size)] leading-[var(--type-label-lh)]',
            'font-[var(--font-body)]',
            hasError
              ? 'text-[var(--red-500)]'
              : 'text-[var(--color-text-muted)]',
          ].join(' ')}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  )
}

export default TextField
`})})})]}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}function gn(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(!1),i=Date.now(),a=i+2700*1e3,o=i+10800*1e3,s=i-1e3;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`section`,{id:`countdown-timer`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`CountdownTimer`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L1 — Elemento`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),e?`Ocultar`:`Ver fuente`]})]}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:`Timer en vivo con Roboto Mono y tabular-nums. Cambia a cyan cuando quedan menos de 60 minutos. Muestra CERRADO al expirar.`}),(0,y.jsx)(`div`,{className:`p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)] mb-6`,children:(0,y.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,y.jsx)(`span`,{className:`w-[80px] shrink-0 text-[10px] font-mono text-[var(--gray-400)]`,children:`default`}),(0,y.jsx)(ce,{endsAt:o}),(0,y.jsx)(`span`,{className:`text-[10px] text-[var(--gray-400)]`,children:`+3h → color neutro`})]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,y.jsx)(`span`,{className:`w-[80px] shrink-0 text-[10px] font-mono text-[var(--gray-400)]`,children:`urgent`}),(0,y.jsx)(ce,{endsAt:a}),(0,y.jsx)(`span`,{className:`text-[10px] text-[var(--color-text-accent)]`,children:`menos de 1h → cyan`})]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,y.jsx)(`span`,{className:`w-[80px] shrink-0 text-[10px] font-mono text-[var(--gray-400)]`,children:`expired`}),(0,y.jsx)(ce,{endsAt:s}),(0,y.jsx)(`span`,{className:`text-[10px] text-[var(--gray-400)]`,children:`expirado → CERRADO`})]})]})}),e&&(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`CountdownTimer.tsx`}),(0,y.jsx)(Wt,{text:`import { useState, useEffect } from 'react'

export type CountdownState = 'default' | 'urgent' | 'expired'

export interface CountdownTimerProps {
  /** Timestamp Unix (ms) o Date en que termina la subasta */
  endsAt: number | Date
  className?: string
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function getSecondsLeft(endsAt: number | Date): number {
  const end = endsAt instanceof Date ? endsAt.getTime() : endsAt
  return Math.max(0, Math.floor((end - Date.now()) / 1000))
}

function formatTime(seconds: number): string {
  if (seconds <= 0) return '00:00:00'
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return [h, m, s].map(n => String(n).padStart(2, '0')).join(':')
}

function getState(seconds: number): CountdownState {
  if (seconds <= 0)    return 'expired'
  if (seconds < 3600)  return 'urgent'
  return 'default'
}

// ── Componente ────────────────────────────────────────────────────────────────

export function CountdownTimer({ endsAt, className = '' }: CountdownTimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(() => getSecondsLeft(endsAt))

  useEffect(() => {
    if (secondsLeft <= 0) return
    const id = setInterval(() => {
      const s = getSecondsLeft(endsAt)
      setSecondsLeft(s)
      if (s <= 0) clearInterval(id)
    }, 1000)
    return () => clearInterval(id)
  }, [endsAt])

  const state = getState(secondsLeft)

  const colorClass =
    state === 'expired' ? 'text-[var(--gray-500)]' :
    state === 'urgent'  ? 'text-[var(--color-text-accent)]' :
                          'text-[var(--color-text-on-surface)]'

  return (
    <time
      dateTime={new Date(endsAt instanceof Date ? endsAt : endsAt).toISOString()}
      aria-label={state === 'expired' ? 'Subasta cerrada' : \`Cierra en \${formatTime(secondsLeft)}\`}
      className={[
        'inline-flex items-center',
        'font-[var(--font-mono)]',
        'text-[var(--type-hero-timer-size)]',
        'font-[var(--type-hero-timer-weight)]',
        'leading-[var(--type-hero-timer-lh)]',
        'tracking-[var(--type-hero-timer-tracking)]',
        'tabular-nums',
        colorClass,
        className,
      ].filter(Boolean).join(' ')}
    >
      {state === 'expired' ? 'CERRADO' : formatTime(secondsLeft)}
    </time>
  )
}

export default CountdownTimer
`})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(k,{code:`import { useState, useEffect } from 'react'

export type CountdownState = 'default' | 'urgent' | 'expired'

export interface CountdownTimerProps {
  /** Timestamp Unix (ms) o Date en que termina la subasta */
  endsAt: number | Date
  className?: string
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function getSecondsLeft(endsAt: number | Date): number {
  const end = endsAt instanceof Date ? endsAt.getTime() : endsAt
  return Math.max(0, Math.floor((end - Date.now()) / 1000))
}

function formatTime(seconds: number): string {
  if (seconds <= 0) return '00:00:00'
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return [h, m, s].map(n => String(n).padStart(2, '0')).join(':')
}

function getState(seconds: number): CountdownState {
  if (seconds <= 0)    return 'expired'
  if (seconds < 3600)  return 'urgent'
  return 'default'
}

// ── Componente ────────────────────────────────────────────────────────────────

export function CountdownTimer({ endsAt, className = '' }: CountdownTimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(() => getSecondsLeft(endsAt))

  useEffect(() => {
    if (secondsLeft <= 0) return
    const id = setInterval(() => {
      const s = getSecondsLeft(endsAt)
      setSecondsLeft(s)
      if (s <= 0) clearInterval(id)
    }, 1000)
    return () => clearInterval(id)
  }, [endsAt])

  const state = getState(secondsLeft)

  const colorClass =
    state === 'expired' ? 'text-[var(--gray-500)]' :
    state === 'urgent'  ? 'text-[var(--color-text-accent)]' :
                          'text-[var(--color-text-on-surface)]'

  return (
    <time
      dateTime={new Date(endsAt instanceof Date ? endsAt : endsAt).toISOString()}
      aria-label={state === 'expired' ? 'Subasta cerrada' : \`Cierra en \${formatTime(secondsLeft)}\`}
      className={[
        'inline-flex items-center',
        'font-[var(--font-mono)]',
        'text-[var(--type-hero-timer-size)]',
        'font-[var(--type-hero-timer-weight)]',
        'leading-[var(--type-hero-timer-lh)]',
        'tracking-[var(--type-hero-timer-tracking)]',
        'tabular-nums',
        colorClass,
        className,
      ].filter(Boolean).join(' ')}
    >
      {state === 'expired' ? 'CERRADO' : formatTime(secondsLeft)}
    </time>
  )
}

export default CountdownTimer
`})})})]}),(0,y.jsx)(`div`,{className:`mt-6 border-b border-[var(--gray-100)]`})]}),(0,y.jsxs)(`section`,{id:`price-display`,className:`scroll-mt-8 mt-12`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`PriceDisplay`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L1 — Elemento`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>r(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),n?`Ocultar`:`Ver fuente`]})]}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:`Montos monetarios en Roboto Mono con tabular-nums. Nunca sin label. 3 contextos según densidad de la UI.`}),(0,y.jsx)(`div`,{className:`p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)] mb-4`,children:(0,y.jsxs)(`div`,{className:`flex flex-wrap items-end gap-10`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(`span`,{className:`text-[10px] font-mono text-[var(--gray-400)] mb-2`,children:`hero`}),(0,y.jsx)(E,{context:`hero`,label:`Precio Base`,amount:17999})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(`span`,{className:`text-[10px] font-mono text-[var(--gray-400)] mb-2`,children:`card`}),(0,y.jsx)(E,{context:`card`,label:`Precio Base`,amount:17999})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(`span`,{className:`text-[10px] font-mono text-[var(--gray-400)] mb-2`,children:`compact`}),(0,y.jsx)(E,{context:`compact`,label:`Precio Base`,amount:17999})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(`span`,{className:`text-[10px] font-mono text-[var(--gray-400)] mb-2`,children:`loading`}),(0,y.jsx)(E,{context:`card`,label:`Precio Base`,amount:0,isLoading:!0})]})]})}),n&&(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`PriceDisplay.tsx`}),(0,y.jsx)(Wt,{text:`export type PriceContext = 'hero' | 'card' | 'compact'

export interface PriceDisplayProps {
  /** Etiqueta semántica: "PRECIO BASE", "OFERTA ACTUAL", "PRECIO RESERVA" */
  label: string
  amount: number
  /** Código de moneda visible: "US$", "S/" */
  currency?: string
  context?: PriceContext
  isLoading?: boolean
  className?: string
}

// ── Configuración por contexto ────────────────────────────────────────────────

const CONFIG: Record<PriceContext, {
  labelSize: string
  amountSize: string
  amountWeight: string
  currencySize: string
  gap: string
}> = {
  hero: {
    labelSize:    'text-[var(--type-label-size)] tracking-[var(--tracking-wider)]',
    amountSize:   'text-[var(--type-hero-title-size)] leading-[var(--type-hero-title-lh)]',
    amountWeight: 'font-[var(--weight-extrabold)]',
    currencySize: 'text-[var(--font-size-xl)]',
    gap:          'gap-0.5',
  },
  card: {
    labelSize:    'text-[var(--type-label-size)] tracking-[var(--tracking-micro)]',
    amountSize:   'text-[var(--type-card-featured-size)] leading-[var(--type-card-featured-lh)]',
    amountWeight: 'font-[var(--weight-bold)]',
    currencySize: 'text-[var(--font-size-xs)]',
    gap:          'gap-0',
  },
  compact: {
    labelSize:    'text-[8px] tracking-[var(--tracking-micro)]',
    amountSize:   'text-[var(--font-size-xs)] leading-[var(--line-height-tight)]',
    amountWeight: 'font-[var(--weight-semibold)]',
    currencySize: 'text-[8px]',
    gap:          'gap-0',
  },
}

// ── Formato de monto ──────────────────────────────────────────────────────────

function formatAmount(amount: number): string {
  return amount.toLocaleString('es-PE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
}

// ── Skeleton inline ───────────────────────────────────────────────────────────

function PriceSkeleton({ context }: { context: PriceContext }) {
  const heights: Record<PriceContext, string> = { hero: 'h-8', card: 'h-4', compact: 'h-3' }
  return (
    <div className="flex flex-col gap-1 animate-pulse">
      <div className="h-2.5 w-16 rounded bg-[var(--gray-300)]" />
      <div className={\`\${heights[context]} w-28 rounded bg-[var(--gray-300)]\`} />
    </div>
  )
}

// ── Componente ────────────────────────────────────────────────────────────────

export function PriceDisplay({
  label,
  amount,
  currency = 'US$',
  context = 'card',
  isLoading = false,
  className = '',
}: PriceDisplayProps) {
  if (isLoading) return <PriceSkeleton context={context} />

  const c = CONFIG[context]

  return (
    <div className={['inline-flex flex-col', c.gap, className].join(' ')}>

      {/* Label — PRECIO BASE, OFERTA ACTUAL */}
      <span
        className={[
          'font-[var(--font-body)]',
          'font-[var(--weight-semibold)]',
          'uppercase',
          'text-[var(--color-text-price-label)]',
          c.labelSize,
        ].join(' ')}
      >
        {label}
      </span>

      {/* Monto */}
      <div className="inline-flex items-baseline gap-0.5">
        <span
          className={[
            'font-[var(--font-mono)]',
            'font-[var(--weight-semibold)]',
            'text-[var(--color-text-primary)]',
            c.currencySize,
            'tabular-nums',
          ].join(' ')}
        >
          {currency}
        </span>
        <span
          className={[
            'font-[var(--font-mono)]',
            c.amountWeight,
            'text-[var(--color-text-primary)]',
            c.amountSize,
            'tabular-nums',
          ].join(' ')}
        >
          {formatAmount(amount)}
        </span>
      </div>
    </div>
  )
}

export default PriceDisplay
`})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(k,{code:`export type PriceContext = 'hero' | 'card' | 'compact'

export interface PriceDisplayProps {
  /** Etiqueta semántica: "PRECIO BASE", "OFERTA ACTUAL", "PRECIO RESERVA" */
  label: string
  amount: number
  /** Código de moneda visible: "US$", "S/" */
  currency?: string
  context?: PriceContext
  isLoading?: boolean
  className?: string
}

// ── Configuración por contexto ────────────────────────────────────────────────

const CONFIG: Record<PriceContext, {
  labelSize: string
  amountSize: string
  amountWeight: string
  currencySize: string
  gap: string
}> = {
  hero: {
    labelSize:    'text-[var(--type-label-size)] tracking-[var(--tracking-wider)]',
    amountSize:   'text-[var(--type-hero-title-size)] leading-[var(--type-hero-title-lh)]',
    amountWeight: 'font-[var(--weight-extrabold)]',
    currencySize: 'text-[var(--font-size-xl)]',
    gap:          'gap-0.5',
  },
  card: {
    labelSize:    'text-[var(--type-label-size)] tracking-[var(--tracking-micro)]',
    amountSize:   'text-[var(--type-card-featured-size)] leading-[var(--type-card-featured-lh)]',
    amountWeight: 'font-[var(--weight-bold)]',
    currencySize: 'text-[var(--font-size-xs)]',
    gap:          'gap-0',
  },
  compact: {
    labelSize:    'text-[8px] tracking-[var(--tracking-micro)]',
    amountSize:   'text-[var(--font-size-xs)] leading-[var(--line-height-tight)]',
    amountWeight: 'font-[var(--weight-semibold)]',
    currencySize: 'text-[8px]',
    gap:          'gap-0',
  },
}

// ── Formato de monto ──────────────────────────────────────────────────────────

function formatAmount(amount: number): string {
  return amount.toLocaleString('es-PE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
}

// ── Skeleton inline ───────────────────────────────────────────────────────────

function PriceSkeleton({ context }: { context: PriceContext }) {
  const heights: Record<PriceContext, string> = { hero: 'h-8', card: 'h-4', compact: 'h-3' }
  return (
    <div className="flex flex-col gap-1 animate-pulse">
      <div className="h-2.5 w-16 rounded bg-[var(--gray-300)]" />
      <div className={\`\${heights[context]} w-28 rounded bg-[var(--gray-300)]\`} />
    </div>
  )
}

// ── Componente ────────────────────────────────────────────────────────────────

export function PriceDisplay({
  label,
  amount,
  currency = 'US$',
  context = 'card',
  isLoading = false,
  className = '',
}: PriceDisplayProps) {
  if (isLoading) return <PriceSkeleton context={context} />

  const c = CONFIG[context]

  return (
    <div className={['inline-flex flex-col', c.gap, className].join(' ')}>

      {/* Label — PRECIO BASE, OFERTA ACTUAL */}
      <span
        className={[
          'font-[var(--font-body)]',
          'font-[var(--weight-semibold)]',
          'uppercase',
          'text-[var(--color-text-price-label)]',
          c.labelSize,
        ].join(' ')}
      >
        {label}
      </span>

      {/* Monto */}
      <div className="inline-flex items-baseline gap-0.5">
        <span
          className={[
            'font-[var(--font-mono)]',
            'font-[var(--weight-semibold)]',
            'text-[var(--color-text-primary)]',
            c.currencySize,
            'tabular-nums',
          ].join(' ')}
        >
          {currency}
        </span>
        <span
          className={[
            'font-[var(--font-mono)]',
            c.amountWeight,
            'text-[var(--color-text-primary)]',
            c.amountSize,
            'tabular-nums',
          ].join(' ')}
        >
          {formatAmount(amount)}
        </span>
      </div>
    </div>
  )
}

export default PriceDisplay
`})})})]}),(0,y.jsx)(`div`,{className:`mt-6 border-b border-[var(--gray-100)]`})]})]})}var _n=[{id:`1`,title:`TOYOTA HILUX`,subtitle:`2024 · Lima, Perú`,badge:`live`,price:17999,currency:`US$`,priceLabel:`PRECIO BASE`,endsAt:Date.now()+2640*1e3},{id:`2`,title:`BMW 320i`,subtitle:`2023 · Lima, Perú`,badge:`negotiable`,price:32500,currency:`US$`,priceLabel:`OFERTA ACTUAL`,endsAt:Date.now()+7200*1e3},{id:`3`,title:`FORD BRONCO`,subtitle:`2022 · Arequipa, Perú`,badge:`upcoming`,price:24e3,currency:`US$`,priceLabel:`PRECIO BASE`,endsAt:Date.now()+300*60*1e3},{id:`4`,title:`KIA SPORTAGE`,subtitle:`2021 · Lima, Perú`,badge:`closed`,price:14500,currency:`US$`,priceLabel:`PRECIO FINAL`}];function vn(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(new Set),i=e=>{e&&r(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})};return(0,y.jsxs)(`section`,{id:`auction-card`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`AuctionCard`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L3 — Bloque`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),e?`Ocultar`:`Ver fuente`]})]}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:`El componente más crítico de VMC. Representa un lote de subasta. 3 variantes según densidad de UI. La franja de 4px en la base comunica el estado del lote.`}),(0,y.jsxs)(`div`,{className:`mb-8`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Standard — grid de listado`}),(0,y.jsx)(`div`,{className:`grid grid-cols-4 gap-3`,children:_n.map(e=>(0,y.jsx)(_e,{variant:`standard`,lot:{...e,isFavorited:n.has(e.id)},onFavorite:i},e.id))})]}),(0,y.jsxs)(`div`,{className:`mb-8`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Featured — lote destacado`}),(0,y.jsx)(`div`,{className:`max-w-[300px]`,children:(0,y.jsx)(_e,{variant:`featured`,lot:{..._n[0],isFavorited:n.has(`1`)},onFavorite:i})})]}),(0,y.jsxs)(`div`,{className:`mb-8`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Compact — lista densa`}),(0,y.jsx)(`div`,{className:`rounded-[var(--radius-card)] border border-[var(--gray-300)] overflow-hidden max-w-[520px]`,children:_n.map(e=>(0,y.jsx)(_e,{variant:`compact`,lot:e},e.id))})]}),(0,y.jsxs)(`div`,{className:`mb-8`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Loading — skeleton`}),(0,y.jsx)(`div`,{className:`grid grid-cols-4 gap-3`,children:[1,2,3,4].map(e=>(0,y.jsx)(_e,{isLoading:!0},e))})]}),e&&(0,y.jsxs)(`div`,{className:`mt-2`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`AuctionCard.tsx`}),(0,y.jsx)(Wt,{text:`import { type BadgeType, Badge } from '../Badge'
import { PriceDisplay } from '../PriceDisplay'
import { CountdownTimer } from '../CountdownTimer'

// ── Tipos ─────────────────────────────────────────────────────────────────────

export type AuctionCardVariant = 'standard' | 'featured' | 'compact'

export interface LotData {
  id?: string
  /** "TOYOTA HILUX" — siempre uppercase en la card */
  title: string
  /** "2024 · Lima, Perú" */
  subtitle?: string
  imageUrl?: string
  badge: BadgeType
  priceLabel?: string
  price: number
  currency?: string
  /** Timestamp ms — si existe, muestra CountdownTimer */
  endsAt?: number | Date
  isFavorited?: boolean
}

export interface AuctionCardProps {
  variant?: AuctionCardVariant
  lot?: LotData
  isLoading?: boolean
  onFavorite?: (id: string | undefined) => void
  onClick?: (id: string | undefined) => void
  className?: string
}

// ── Accent bottom por badge ───────────────────────────────────────────────────

const ACCENT_COLOR: Record<BadgeType, string> = {
  live:       'var(--color-border-card-accent-auction)',
  negotiable: 'var(--color-border-card-accent-negotiable)',
  upcoming:   'var(--purple-600)',
  new:        'var(--purple-600)',
  featured:   'var(--neutral-950)',
  closed:     'var(--gray-300)',
}

// ── Default lot para demos ────────────────────────────────────────────────────

const DEFAULT_LOT: LotData = {
  title:      'TOYOTA HILUX',
  subtitle:   '2024 · Lima, Perú',
  badge:      'live',
  priceLabel: 'PRECIO BASE',
  price:      17999,
  currency:   'US$',
  endsAt:     Date.now() + 45 * 60 * 1000,
}

// ── Ícono corazón ─────────────────────────────────────────────────────────────

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 13.5S1.5 9 1.5 4.5A3.5 3.5 0 0 1 8 2.75 3.5 3.5 0 0 1 14.5 4.5C14.5 9 8 13.5 8 13.5Z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

// ── Skeleton ──────────────────────────────────────────────────────────────────

function AuctionCardSkeleton({ variant }: { variant: AuctionCardVariant }) {
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3 px-3 py-2.5 animate-pulse bg-[var(--color-surface-card)] rounded-[var(--radius-card)]">
        <div className="h-3 w-32 rounded bg-[var(--gray-300)]" />
        <div className="h-3 w-16 rounded bg-[var(--gray-300)] ml-auto" />
      </div>
    )
  }
  const imgH = variant === 'featured' ? 'h-[200px]' : 'h-[132px]'
  return (
    <div className="flex flex-col w-full rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)] animate-pulse bg-[var(--color-surface-card)]">
      <div className={\`\${imgH} w-full bg-[var(--gray-300)]\`} />
      <div className="flex flex-col gap-2 px-3 py-3">
        <div className="h-2.5 w-24 rounded bg-[var(--gray-300)]" />
        <div className="h-2 w-16 rounded bg-[var(--gray-300)]" />
        <div className="h-6 w-28 rounded bg-[var(--gray-300)] mt-1" />
      </div>
      <div className="h-1 w-full bg-[var(--gray-300)]" />
    </div>
  )
}

// ── Placeholder de imagen ─────────────────────────────────────────────────────

function ImagePlaceholder() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: 'linear-gradient(150deg, oklch(0.294 0.149 288.000) 0%, oklch(0.242 0.138 286.500) 100%)' }}
    >
      <svg width="56" height="28" viewBox="0 0 72 36" fill="white" aria-hidden="true" opacity="0.25">
        <path d="M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z" />
        <circle cx="18" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="54" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  )
}

// ── Variante Standard ─────────────────────────────────────────────────────────

function StandardCard({ lot, onFavorite, onClick }: { lot: LotData; onFavorite?: AuctionCardProps['onFavorite']; onClick?: AuctionCardProps['onClick'] }) {
  return (
    <article
      onClick={() => onClick?.(lot.id)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(lot.id) } : undefined}
      className={[
        'flex flex-col w-full overflow-hidden',
        'bg-[var(--color-surface-card)]',
        'rounded-[var(--radius-card)]',
        'shadow-[var(--shadow-card)]',
        onClick ? 'cursor-pointer' : '',
        'transition-shadow duration-[var(--duration-standard)] ease-[var(--easing-standard)]',
        'hover:shadow-[var(--shadow-md)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
      ].filter(Boolean).join(' ')}
    >
      {/* Imagen */}
      <div className="relative h-[132px] shrink-0 overflow-hidden bg-[var(--gray-100)]">
        {lot.imageUrl
          ? <img src={lot.imageUrl} alt={lot.title} className="w-full h-full object-cover" />
          : <ImagePlaceholder />
        }
        {/* Badge overlay */}
        <div className="absolute top-2 left-2">
          <Badge type={lot.badge} size="sm" />
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 px-3 pt-2 pb-2 gap-1">
        <h3
          className="m-0 uppercase font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]"
          style={{ fontSize: 'var(--type-card-title-size)', lineHeight: 'var(--type-card-title-lh)' }}
        >
          {lot.title}
        </h3>

        {lot.subtitle && (
          <p className="m-0 text-[var(--color-text-muted)] font-[var(--font-body)] font-[var(--weight-regular)]"
            style={{ fontSize: 'var(--font-size-xs)', lineHeight: 'var(--line-height-tight)' }}>
            {lot.subtitle}
          </p>
        )}

        {/* Precio + Favorito */}
        <div className="flex items-end justify-between mt-1">
          <PriceDisplay
            context="card"
            label={lot.priceLabel ?? 'Precio Base'}
            amount={lot.price}
            currency={lot.currency}
          />

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(lot.id) }}
            aria-label={lot.isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-pressed={lot.isFavorited}
            className={[
              'size-8 shrink-0 flex items-center justify-center',
              'rounded-[var(--radius-icon-btn)] border-0 cursor-pointer',
              'transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
              'active:scale-90',
              lot.isFavorited
                ? 'bg-[var(--color-action-primary)] text-[var(--color-text-on-dark)]'
                : 'bg-[var(--color-surface-icon-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-action-primary)]',
            ].join(' ')}
          >
            <HeartIcon filled={Boolean(lot.isFavorited)} />
          </button>
        </div>

        {/* Countdown — solo si hay endsAt y no está cerrado */}
        {lot.endsAt && lot.badge !== 'closed' && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[var(--color-text-muted)] font-[var(--font-body)]"
              style={{ fontSize: 'var(--font-size-2xs)', lineHeight: 'var(--line-height-2xs)' }}>
              CIERRA EN
            </span>
            <CountdownTimer
              endsAt={lot.endsAt}
              className="!text-[var(--font-size-xs)] !leading-[var(--line-height-tight)]"
            />
          </div>
        )}
      </div>

      {/* Accent bottom */}
      <div className="h-1 w-full shrink-0" style={{ background: ACCENT_COLOR[lot.badge] }} aria-hidden="true" />
    </article>
  )
}

// ── Variante Featured ─────────────────────────────────────────────────────────

function FeaturedCard({ lot, onFavorite, onClick }: { lot: LotData; onFavorite?: AuctionCardProps['onFavorite']; onClick?: AuctionCardProps['onClick'] }) {
  return (
    <article
      onClick={() => onClick?.(lot.id)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(lot.id) } : undefined}
      className={[
        'flex flex-col w-full overflow-hidden',
        'bg-[var(--color-surface-card)]',
        'rounded-[var(--radius-card)]',
        'shadow-[var(--shadow-floating)]',
        onClick ? 'cursor-pointer' : '',
        'transition-shadow duration-[var(--duration-standard)] ease-[var(--easing-standard)]',
        'hover:shadow-[var(--shadow-lg)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
      ].filter(Boolean).join(' ')}
    >
      {/* Imagen prominente */}
      <div className="relative h-[200px] shrink-0 overflow-hidden bg-[var(--gray-100)]">
        {lot.imageUrl
          ? <img src={lot.imageUrl} alt={lot.title} className="w-full h-full object-cover" />
          : <ImagePlaceholder />
        }

        {/* Badge + Favorito overlay */}
        <div className="absolute inset-0 flex items-start justify-between p-3">
          <Badge type={lot.badge} size="md" />

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(lot.id) }}
            aria-label={lot.isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-pressed={lot.isFavorited}
            className={[
              'size-9 flex items-center justify-center',
              'rounded-[var(--radius-icon-btn)] border-0 cursor-pointer',
              'backdrop-blur-[8px]',
              'transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
              'active:scale-90',
              lot.isFavorited
                ? 'bg-[var(--color-action-primary)] text-white'
                : 'bg-[var(--color-surface-glass)] text-white hover:bg-white/60',
            ].join(' ')}
          >
            <HeartIcon filled={Boolean(lot.isFavorited)} />
          </button>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-2 px-4 pt-3 pb-3">
        <div>
          <h3
            className="m-0 uppercase font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]"
            style={{ fontSize: 'var(--type-card-featured-size)', lineHeight: 'var(--type-card-featured-lh)' }}
          >
            {lot.title}
          </h3>
          {lot.subtitle && (
            <p className="m-0 mt-0.5 text-[var(--color-text-muted)] font-[var(--font-body)]"
              style={{ fontSize: 'var(--font-size-xs)', lineHeight: 'var(--line-height-tight)' }}>
              {lot.subtitle}
            </p>
          )}
        </div>

        <div className="flex items-end justify-between">
          <PriceDisplay
            context="hero"
            label={lot.priceLabel ?? 'Precio Base'}
            amount={lot.price}
            currency={lot.currency}
          />
          {lot.endsAt && lot.badge !== 'closed' && (
            <div className="flex flex-col items-end gap-0.5">
              <span className="text-[var(--color-text-muted)] font-[var(--font-body)] uppercase"
                style={{ fontSize: 'var(--font-size-2xs)' }}>
                Cierra en
              </span>
              <CountdownTimer endsAt={lot.endsAt} />
            </div>
          )}
        </div>
      </div>

      {/* Accent bottom */}
      <div className="h-1 w-full shrink-0" style={{ background: ACCENT_COLOR[lot.badge] }} aria-hidden="true" />
    </article>
  )
}

// ── Variante Compact ──────────────────────────────────────────────────────────

function CompactCard({ lot, onClick }: { lot: LotData; onClick?: AuctionCardProps['onClick'] }) {
  return (
    <div
      onClick={() => onClick?.(lot.id)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(lot.id) } : undefined}
      className={[
        'flex items-center justify-between',
        'px-3 py-2.5 gap-3',
        'bg-[var(--color-surface-card)]',
        'border-b border-[var(--color-border-section-divider)]',
        'last:border-b-0',
        onClick ? 'cursor-pointer hover:bg-[var(--color-surface-section)] transition-colors duration-[var(--duration-micro)]' : '',
        'focus-visible:outline-2 focus-visible:outline-[var(--color-action-primary)]',
      ].filter(Boolean).join(' ')}
    >
      <div className="flex items-center gap-2 min-w-0">
        <Badge type={lot.badge} size="sm" />
        <span
          className="truncate uppercase font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]"
          style={{ fontSize: 'var(--type-card-title-size)', lineHeight: 'var(--type-card-title-lh)' }}
        >
          {lot.title}
        </span>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {lot.endsAt && lot.badge !== 'closed' && (
          <CountdownTimer
            endsAt={lot.endsAt}
            className="!text-[var(--font-size-xs)] !leading-[var(--line-height-tight)]"
          />
        )}
        <PriceDisplay
          context="compact"
          label={lot.priceLabel ?? 'Base'}
          amount={lot.price}
          currency={lot.currency}
        />
      </div>
    </div>
  )
}

// ── Componente principal ──────────────────────────────────────────────────────

export function AuctionCard({
  variant = 'standard',
  lot = DEFAULT_LOT,
  isLoading = false,
  onFavorite,
  onClick,
  className = '',
}: AuctionCardProps) {
  if (isLoading) return <AuctionCardSkeleton variant={variant} />

  const wrapClass = className ? \`\${className}\` : ''

  if (variant === 'featured') return <div className={wrapClass}><FeaturedCard lot={lot} onFavorite={onFavorite} onClick={onClick} /></div>
  if (variant === 'compact')  return <div className={wrapClass}><CompactCard  lot={lot} onClick={onClick} /></div>
  return <div className={wrapClass}><StandardCard lot={lot} onFavorite={onFavorite} onClick={onClick} /></div>
}

export default AuctionCard
`})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(k,{code:`import { type BadgeType, Badge } from '../Badge'
import { PriceDisplay } from '../PriceDisplay'
import { CountdownTimer } from '../CountdownTimer'

// ── Tipos ─────────────────────────────────────────────────────────────────────

export type AuctionCardVariant = 'standard' | 'featured' | 'compact'

export interface LotData {
  id?: string
  /** "TOYOTA HILUX" — siempre uppercase en la card */
  title: string
  /** "2024 · Lima, Perú" */
  subtitle?: string
  imageUrl?: string
  badge: BadgeType
  priceLabel?: string
  price: number
  currency?: string
  /** Timestamp ms — si existe, muestra CountdownTimer */
  endsAt?: number | Date
  isFavorited?: boolean
}

export interface AuctionCardProps {
  variant?: AuctionCardVariant
  lot?: LotData
  isLoading?: boolean
  onFavorite?: (id: string | undefined) => void
  onClick?: (id: string | undefined) => void
  className?: string
}

// ── Accent bottom por badge ───────────────────────────────────────────────────

const ACCENT_COLOR: Record<BadgeType, string> = {
  live:       'var(--color-border-card-accent-auction)',
  negotiable: 'var(--color-border-card-accent-negotiable)',
  upcoming:   'var(--purple-600)',
  new:        'var(--purple-600)',
  featured:   'var(--neutral-950)',
  closed:     'var(--gray-300)',
}

// ── Default lot para demos ────────────────────────────────────────────────────

const DEFAULT_LOT: LotData = {
  title:      'TOYOTA HILUX',
  subtitle:   '2024 · Lima, Perú',
  badge:      'live',
  priceLabel: 'PRECIO BASE',
  price:      17999,
  currency:   'US$',
  endsAt:     Date.now() + 45 * 60 * 1000,
}

// ── Ícono corazón ─────────────────────────────────────────────────────────────

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 13.5S1.5 9 1.5 4.5A3.5 3.5 0 0 1 8 2.75 3.5 3.5 0 0 1 14.5 4.5C14.5 9 8 13.5 8 13.5Z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

// ── Skeleton ──────────────────────────────────────────────────────────────────

function AuctionCardSkeleton({ variant }: { variant: AuctionCardVariant }) {
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3 px-3 py-2.5 animate-pulse bg-[var(--color-surface-card)] rounded-[var(--radius-card)]">
        <div className="h-3 w-32 rounded bg-[var(--gray-300)]" />
        <div className="h-3 w-16 rounded bg-[var(--gray-300)] ml-auto" />
      </div>
    )
  }
  const imgH = variant === 'featured' ? 'h-[200px]' : 'h-[132px]'
  return (
    <div className="flex flex-col w-full rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)] animate-pulse bg-[var(--color-surface-card)]">
      <div className={\`\${imgH} w-full bg-[var(--gray-300)]\`} />
      <div className="flex flex-col gap-2 px-3 py-3">
        <div className="h-2.5 w-24 rounded bg-[var(--gray-300)]" />
        <div className="h-2 w-16 rounded bg-[var(--gray-300)]" />
        <div className="h-6 w-28 rounded bg-[var(--gray-300)] mt-1" />
      </div>
      <div className="h-1 w-full bg-[var(--gray-300)]" />
    </div>
  )
}

// ── Placeholder de imagen ─────────────────────────────────────────────────────

function ImagePlaceholder() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: 'linear-gradient(150deg, oklch(0.294 0.149 288.000) 0%, oklch(0.242 0.138 286.500) 100%)' }}
    >
      <svg width="56" height="28" viewBox="0 0 72 36" fill="white" aria-hidden="true" opacity="0.25">
        <path d="M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z" />
        <circle cx="18" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="54" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  )
}

// ── Variante Standard ─────────────────────────────────────────────────────────

function StandardCard({ lot, onFavorite, onClick }: { lot: LotData; onFavorite?: AuctionCardProps['onFavorite']; onClick?: AuctionCardProps['onClick'] }) {
  return (
    <article
      onClick={() => onClick?.(lot.id)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(lot.id) } : undefined}
      className={[
        'flex flex-col w-full overflow-hidden',
        'bg-[var(--color-surface-card)]',
        'rounded-[var(--radius-card)]',
        'shadow-[var(--shadow-card)]',
        onClick ? 'cursor-pointer' : '',
        'transition-shadow duration-[var(--duration-standard)] ease-[var(--easing-standard)]',
        'hover:shadow-[var(--shadow-md)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
      ].filter(Boolean).join(' ')}
    >
      {/* Imagen */}
      <div className="relative h-[132px] shrink-0 overflow-hidden bg-[var(--gray-100)]">
        {lot.imageUrl
          ? <img src={lot.imageUrl} alt={lot.title} className="w-full h-full object-cover" />
          : <ImagePlaceholder />
        }
        {/* Badge overlay */}
        <div className="absolute top-2 left-2">
          <Badge type={lot.badge} size="sm" />
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 px-3 pt-2 pb-2 gap-1">
        <h3
          className="m-0 uppercase font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]"
          style={{ fontSize: 'var(--type-card-title-size)', lineHeight: 'var(--type-card-title-lh)' }}
        >
          {lot.title}
        </h3>

        {lot.subtitle && (
          <p className="m-0 text-[var(--color-text-muted)] font-[var(--font-body)] font-[var(--weight-regular)]"
            style={{ fontSize: 'var(--font-size-xs)', lineHeight: 'var(--line-height-tight)' }}>
            {lot.subtitle}
          </p>
        )}

        {/* Precio + Favorito */}
        <div className="flex items-end justify-between mt-1">
          <PriceDisplay
            context="card"
            label={lot.priceLabel ?? 'Precio Base'}
            amount={lot.price}
            currency={lot.currency}
          />

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(lot.id) }}
            aria-label={lot.isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-pressed={lot.isFavorited}
            className={[
              'size-8 shrink-0 flex items-center justify-center',
              'rounded-[var(--radius-icon-btn)] border-0 cursor-pointer',
              'transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
              'active:scale-90',
              lot.isFavorited
                ? 'bg-[var(--color-action-primary)] text-[var(--color-text-on-dark)]'
                : 'bg-[var(--color-surface-icon-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-action-primary)]',
            ].join(' ')}
          >
            <HeartIcon filled={Boolean(lot.isFavorited)} />
          </button>
        </div>

        {/* Countdown — solo si hay endsAt y no está cerrado */}
        {lot.endsAt && lot.badge !== 'closed' && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[var(--color-text-muted)] font-[var(--font-body)]"
              style={{ fontSize: 'var(--font-size-2xs)', lineHeight: 'var(--line-height-2xs)' }}>
              CIERRA EN
            </span>
            <CountdownTimer
              endsAt={lot.endsAt}
              className="!text-[var(--font-size-xs)] !leading-[var(--line-height-tight)]"
            />
          </div>
        )}
      </div>

      {/* Accent bottom */}
      <div className="h-1 w-full shrink-0" style={{ background: ACCENT_COLOR[lot.badge] }} aria-hidden="true" />
    </article>
  )
}

// ── Variante Featured ─────────────────────────────────────────────────────────

function FeaturedCard({ lot, onFavorite, onClick }: { lot: LotData; onFavorite?: AuctionCardProps['onFavorite']; onClick?: AuctionCardProps['onClick'] }) {
  return (
    <article
      onClick={() => onClick?.(lot.id)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(lot.id) } : undefined}
      className={[
        'flex flex-col w-full overflow-hidden',
        'bg-[var(--color-surface-card)]',
        'rounded-[var(--radius-card)]',
        'shadow-[var(--shadow-floating)]',
        onClick ? 'cursor-pointer' : '',
        'transition-shadow duration-[var(--duration-standard)] ease-[var(--easing-standard)]',
        'hover:shadow-[var(--shadow-lg)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
      ].filter(Boolean).join(' ')}
    >
      {/* Imagen prominente */}
      <div className="relative h-[200px] shrink-0 overflow-hidden bg-[var(--gray-100)]">
        {lot.imageUrl
          ? <img src={lot.imageUrl} alt={lot.title} className="w-full h-full object-cover" />
          : <ImagePlaceholder />
        }

        {/* Badge + Favorito overlay */}
        <div className="absolute inset-0 flex items-start justify-between p-3">
          <Badge type={lot.badge} size="md" />

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(lot.id) }}
            aria-label={lot.isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-pressed={lot.isFavorited}
            className={[
              'size-9 flex items-center justify-center',
              'rounded-[var(--radius-icon-btn)] border-0 cursor-pointer',
              'backdrop-blur-[8px]',
              'transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
              'active:scale-90',
              lot.isFavorited
                ? 'bg-[var(--color-action-primary)] text-white'
                : 'bg-[var(--color-surface-glass)] text-white hover:bg-white/60',
            ].join(' ')}
          >
            <HeartIcon filled={Boolean(lot.isFavorited)} />
          </button>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-2 px-4 pt-3 pb-3">
        <div>
          <h3
            className="m-0 uppercase font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]"
            style={{ fontSize: 'var(--type-card-featured-size)', lineHeight: 'var(--type-card-featured-lh)' }}
          >
            {lot.title}
          </h3>
          {lot.subtitle && (
            <p className="m-0 mt-0.5 text-[var(--color-text-muted)] font-[var(--font-body)]"
              style={{ fontSize: 'var(--font-size-xs)', lineHeight: 'var(--line-height-tight)' }}>
              {lot.subtitle}
            </p>
          )}
        </div>

        <div className="flex items-end justify-between">
          <PriceDisplay
            context="hero"
            label={lot.priceLabel ?? 'Precio Base'}
            amount={lot.price}
            currency={lot.currency}
          />
          {lot.endsAt && lot.badge !== 'closed' && (
            <div className="flex flex-col items-end gap-0.5">
              <span className="text-[var(--color-text-muted)] font-[var(--font-body)] uppercase"
                style={{ fontSize: 'var(--font-size-2xs)' }}>
                Cierra en
              </span>
              <CountdownTimer endsAt={lot.endsAt} />
            </div>
          )}
        </div>
      </div>

      {/* Accent bottom */}
      <div className="h-1 w-full shrink-0" style={{ background: ACCENT_COLOR[lot.badge] }} aria-hidden="true" />
    </article>
  )
}

// ── Variante Compact ──────────────────────────────────────────────────────────

function CompactCard({ lot, onClick }: { lot: LotData; onClick?: AuctionCardProps['onClick'] }) {
  return (
    <div
      onClick={() => onClick?.(lot.id)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(lot.id) } : undefined}
      className={[
        'flex items-center justify-between',
        'px-3 py-2.5 gap-3',
        'bg-[var(--color-surface-card)]',
        'border-b border-[var(--color-border-section-divider)]',
        'last:border-b-0',
        onClick ? 'cursor-pointer hover:bg-[var(--color-surface-section)] transition-colors duration-[var(--duration-micro)]' : '',
        'focus-visible:outline-2 focus-visible:outline-[var(--color-action-primary)]',
      ].filter(Boolean).join(' ')}
    >
      <div className="flex items-center gap-2 min-w-0">
        <Badge type={lot.badge} size="sm" />
        <span
          className="truncate uppercase font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]"
          style={{ fontSize: 'var(--type-card-title-size)', lineHeight: 'var(--type-card-title-lh)' }}
        >
          {lot.title}
        </span>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {lot.endsAt && lot.badge !== 'closed' && (
          <CountdownTimer
            endsAt={lot.endsAt}
            className="!text-[var(--font-size-xs)] !leading-[var(--line-height-tight)]"
          />
        )}
        <PriceDisplay
          context="compact"
          label={lot.priceLabel ?? 'Base'}
          amount={lot.price}
          currency={lot.currency}
        />
      </div>
    </div>
  )
}

// ── Componente principal ──────────────────────────────────────────────────────

export function AuctionCard({
  variant = 'standard',
  lot = DEFAULT_LOT,
  isLoading = false,
  onFavorite,
  onClick,
  className = '',
}: AuctionCardProps) {
  if (isLoading) return <AuctionCardSkeleton variant={variant} />

  const wrapClass = className ? \`\${className}\` : ''

  if (variant === 'featured') return <div className={wrapClass}><FeaturedCard lot={lot} onFavorite={onFavorite} onClick={onClick} /></div>
  if (variant === 'compact')  return <div className={wrapClass}><CompactCard  lot={lot} onClick={onClick} /></div>
  return <div className={wrapClass}><StandardCard lot={lot} onFavorite={onFavorite} onClick={onClick} /></div>
}

export default AuctionCard
`})})})]}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}function yn(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`bid-form`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`BidForm`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L3 — Bloque`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),e?`Ocultar`:`Ver fuente`]})]}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:`Formulario de oferta. Validación en tiempo real, paso de confirmación antes de ejecutar, Roboto Mono en el monto. El componente de mayor criticidad económica del sistema.`}),(0,y.jsxs)(`div`,{className:`grid grid-cols-3 gap-6 mb-6`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-mono text-[var(--gray-400)]`,children:`idle / active`}),(0,y.jsx)(`div`,{className:`p-4 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:(0,y.jsx)(Se,{lotId:`demo-1`,minimumBid:18500,currentBid:17999,currency:`US$`})})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-mono text-[var(--gray-400)]`,children:`sin oferta actual`}),(0,y.jsx)(`div`,{className:`p-4 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:(0,y.jsx)(Se,{lotId:`demo-2`,minimumBid:15e3,currency:`US$`})})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-mono text-[var(--gray-400)]`,children:`disabled — subasta cerrada`}),(0,y.jsx)(`div`,{className:`p-4 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:(0,y.jsx)(Se,{lotId:`demo-3`,minimumBid:18500,currency:`US$`,disabled:!0})})]})]}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--color-text-muted)] mb-6`,children:`Flujo completo: ingresa un monto ≥ mínimo → REALIZAR OFERTA → pantalla de confirmación → CONFIRMAR → éxito.`}),e&&(0,y.jsxs)(`div`,{className:`mt-2`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`BidForm.tsx`}),(0,y.jsx)(Wt,{text:`import { useState, useId, useCallback } from 'react'
import { Button } from '../Button'

// ── Tipos ─────────────────────────────────────────────────────────────────────

export type BidFormState = 'idle' | 'active' | 'confirming' | 'submitting' | 'success' | 'error'

export interface BidFormProps {
  lotId?: string
  /** Oferta mínima requerida */
  minimumBid: number
  /** Última oferta registrada — si existe, minimumBid es el incremento sobre esta */
  currentBid?: number
  currency?: string
  /** Simula el submit — debe retornar una promesa */
  onSubmit?: (amount: number, lotId?: string) => Promise<void>
  disabled?: boolean
  className?: string
}

// ── Formato ───────────────────────────────────────────────────────────────────

function fmt(n: number, currency = 'US$') {
  return \`\${currency} \${n.toLocaleString('es-PE')}\`
}

function parseAmount(raw: string): number {
  return Number(raw.replace(/[^0-9]/g, ''))
}

// ── Ícono check ───────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Ícono warning ─────────────────────────────────────────────────────────────

function WarningIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2L14.5 13.5H1.5L8 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M8 7v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="11.5" r="0.75" fill="currentColor" />
    </svg>
  )
}

// ── Componente ────────────────────────────────────────────────────────────────

export function BidForm({
  lotId,
  minimumBid,
  currentBid,
  currency = 'US$',
  onSubmit,
  disabled = false,
  className = '',
}: BidFormProps) {
  const inputId = useId()
  const [raw, setRaw] = useState('')
  const [formState, setFormState] = useState<BidFormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const amount  = parseAmount(raw)
  const isValid = amount >= minimumBid && amount > 0

  // Validación en tiempo real
  const validationMsg = raw.length > 0 && !isValid
    ? amount === 0
      ? 'Ingresa un monto válido.'
      : \`La oferta mínima es \${fmt(minimumBid, currency)}.\`
    : ''

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/[^0-9]/g, '')
    setRaw(digits)
    if (formState === 'idle') setFormState('active')
  }, [formState])

  const handleSubmitClick = () => {
    if (!isValid) return
    setFormState('confirming')
  }

  const handleConfirm = async () => {
    setFormState('submitting')
    setErrorMsg('')
    try {
      await (onSubmit?.(amount, lotId) ?? new Promise(r => setTimeout(r, 1200)))
      setFormState('success')
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : 'Error al registrar la oferta. Intenta nuevamente.')
      setFormState('error')
    }
  }

  const handleCancel = () => {
    setFormState(raw ? 'active' : 'idle')
  }

  const handleReset = () => {
    setRaw('')
    setErrorMsg('')
    setFormState('idle')
  }

  // ── Estado: éxito ──────────────────────────────────────────────────────────

  if (formState === 'success') {
    return (
      <div className={['flex flex-col items-center gap-3 py-6 px-4 text-center', className].join(' ')}>
        <span className="text-[var(--color-action-accent)]"><CheckIcon /></span>
        <div>
          <p className="m-0 font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            OFERTA REGISTRADA
          </p>
          <p className="m-0 mt-1 font-[var(--font-mono)] font-[var(--weight-extrabold)] tabular-nums text-[var(--color-text-primary)]"
            style={{ fontSize: 'var(--type-hero-title-size)', lineHeight: 'var(--type-hero-title-lh)' }}>
            {fmt(amount, currency)}
          </p>
        </div>
        <Button variant="tertiary" size="sm" onClick={handleReset}>
          Nueva oferta
        </Button>
      </div>
    )
  }

  // ── Estado: confirmación ───────────────────────────────────────────────────

  if (formState === 'confirming') {
    return (
      <div className={['flex flex-col gap-4 p-4 rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] bg-[var(--color-surface-card)]', className].join(' ')}>
        <div className="text-center">
          <p className="m-0 text-[var(--color-text-muted)] font-[var(--font-body)] uppercase"
            style={{ fontSize: 'var(--type-label-size)', letterSpacing: 'var(--tracking-wider)' }}>
            Confirmar oferta
          </p>
          <p className="m-0 mt-1 font-[var(--font-mono)] font-[var(--weight-extrabold)] tabular-nums text-[var(--color-text-primary)]"
            style={{ fontSize: 'var(--type-hero-title-size)', lineHeight: 'var(--type-hero-title-lh)' }}>
            {fmt(amount, currency)}
          </p>
          <p className="m-0 mt-1 text-[var(--color-text-muted)] font-[var(--font-body)]"
            style={{ fontSize: 'var(--font-size-xs)' }}>
            Esta acción no se puede deshacer.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="md" isFullWidth onClick={handleCancel}>
            Cancelar
          </Button>
          <Button variant="accent" size="md" isFullWidth onClick={handleConfirm}>
            CONFIRMAR
          </Button>
        </div>
      </div>
    )
  }

  // ── Estado: idle / active / submitting / error ─────────────────────────────

  const hasError = formState === 'error' || Boolean(validationMsg)
  const errorText = errorMsg || validationMsg

  return (
    <form
      className={['flex flex-col gap-3', className].join(' ')}
      onSubmit={(e) => { e.preventDefault(); handleSubmitClick() }}
      noValidate
    >
      {/* Oferta actual */}
      {currentBid !== undefined && (
        <div className="flex items-center justify-between px-3 py-2 rounded-[var(--radius-btn)] bg-[var(--color-surface-section)]">
          <span className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)]"
            style={{ fontSize: 'var(--font-size-2xs)', letterSpacing: 'var(--tracking-wider)' }}>
            Oferta actual
          </span>
          <span className="font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums text-[var(--color-text-on-surface)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            {fmt(currentBid, currency)}
          </span>
        </div>
      )}

      {/* Input de monto */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-body)]"
          style={{ fontSize: 'var(--type-label-size)', letterSpacing: 'var(--tracking-wider)' }}
        >
          Tu oferta
        </label>

        <div className="relative flex items-center">
          {/* Prefijo de moneda */}
          <span
            className="absolute left-3 font-[var(--font-mono)] font-[var(--weight-semibold)] tabular-nums pointer-events-none select-none text-[var(--color-text-muted)]"
            style={{ fontSize: 'var(--type-hero-title-size)', lineHeight: 'var(--type-hero-title-lh)' }}
          >
            {currency}
          </span>

          <input
            id={inputId}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={raw ? Number(raw).toLocaleString('es-PE') : ''}
            onChange={handleChange}
            placeholder="0"
            disabled={disabled || formState === 'submitting'}
            aria-invalid={hasError || undefined}
            aria-describedby={\`\${inputId}-hint\`}
            className={[
              'w-full h-14 pl-14 pr-3',
              'rounded-[var(--radius-btn)]',
              'bg-[var(--color-surface-input)]',
              'font-[var(--font-mono)] font-[var(--weight-extrabold)] tabular-nums',
              'text-[var(--color-text-on-surface)]',
              'border-0 outline-none',
              'transition-[box-shadow] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              'placeholder:text-[var(--color-text-muted)]',
              hasError
                ? 'shadow-[0_0_0_1.5px_var(--red-500)]'
                : 'focus:shadow-[0_0_0_1.5px_var(--color-action-accent)]',
              disabled ? 'opacity-40 cursor-not-allowed' : '',
            ].filter(Boolean).join(' ')}
            style={{ fontSize: 'var(--type-hero-title-size)', lineHeight: 'var(--type-hero-title-lh)' }}
          />
        </div>

        {/* Hint / error */}
        <div id={\`\${inputId}-hint\`} className="min-h-[16px]">
          {errorText ? (
            <span className="flex items-center gap-1 text-[var(--red-500)] font-[var(--font-body)]"
              style={{ fontSize: 'var(--type-label-size)' }}>
              <WarningIcon />
              {errorText}
            </span>
          ) : (
            <span className="text-[var(--color-text-muted)] font-[var(--font-body)]"
              style={{ fontSize: 'var(--type-label-size)' }}>
              Mínimo: {fmt(minimumBid, currency)}
            </span>
          )}
        </div>
      </div>

      {/* Botón */}
      <Button
        type="submit"
        variant="accent"
        size="lg"
        isFullWidth
        isLoading={formState === 'submitting'}
        disabled={disabled || !isValid}
      >
        REALIZAR OFERTA
      </Button>
    </form>
  )
}

export default BidForm
`})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(k,{code:`import { useState, useId, useCallback } from 'react'
import { Button } from '../Button'

// ── Tipos ─────────────────────────────────────────────────────────────────────

export type BidFormState = 'idle' | 'active' | 'confirming' | 'submitting' | 'success' | 'error'

export interface BidFormProps {
  lotId?: string
  /** Oferta mínima requerida */
  minimumBid: number
  /** Última oferta registrada — si existe, minimumBid es el incremento sobre esta */
  currentBid?: number
  currency?: string
  /** Simula el submit — debe retornar una promesa */
  onSubmit?: (amount: number, lotId?: string) => Promise<void>
  disabled?: boolean
  className?: string
}

// ── Formato ───────────────────────────────────────────────────────────────────

function fmt(n: number, currency = 'US$') {
  return \`\${currency} \${n.toLocaleString('es-PE')}\`
}

function parseAmount(raw: string): number {
  return Number(raw.replace(/[^0-9]/g, ''))
}

// ── Ícono check ───────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Ícono warning ─────────────────────────────────────────────────────────────

function WarningIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2L14.5 13.5H1.5L8 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M8 7v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="11.5" r="0.75" fill="currentColor" />
    </svg>
  )
}

// ── Componente ────────────────────────────────────────────────────────────────

export function BidForm({
  lotId,
  minimumBid,
  currentBid,
  currency = 'US$',
  onSubmit,
  disabled = false,
  className = '',
}: BidFormProps) {
  const inputId = useId()
  const [raw, setRaw] = useState('')
  const [formState, setFormState] = useState<BidFormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const amount  = parseAmount(raw)
  const isValid = amount >= minimumBid && amount > 0

  // Validación en tiempo real
  const validationMsg = raw.length > 0 && !isValid
    ? amount === 0
      ? 'Ingresa un monto válido.'
      : \`La oferta mínima es \${fmt(minimumBid, currency)}.\`
    : ''

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/[^0-9]/g, '')
    setRaw(digits)
    if (formState === 'idle') setFormState('active')
  }, [formState])

  const handleSubmitClick = () => {
    if (!isValid) return
    setFormState('confirming')
  }

  const handleConfirm = async () => {
    setFormState('submitting')
    setErrorMsg('')
    try {
      await (onSubmit?.(amount, lotId) ?? new Promise(r => setTimeout(r, 1200)))
      setFormState('success')
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : 'Error al registrar la oferta. Intenta nuevamente.')
      setFormState('error')
    }
  }

  const handleCancel = () => {
    setFormState(raw ? 'active' : 'idle')
  }

  const handleReset = () => {
    setRaw('')
    setErrorMsg('')
    setFormState('idle')
  }

  // ── Estado: éxito ──────────────────────────────────────────────────────────

  if (formState === 'success') {
    return (
      <div className={['flex flex-col items-center gap-3 py-6 px-4 text-center', className].join(' ')}>
        <span className="text-[var(--color-action-accent)]"><CheckIcon /></span>
        <div>
          <p className="m-0 font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            OFERTA REGISTRADA
          </p>
          <p className="m-0 mt-1 font-[var(--font-mono)] font-[var(--weight-extrabold)] tabular-nums text-[var(--color-text-primary)]"
            style={{ fontSize: 'var(--type-hero-title-size)', lineHeight: 'var(--type-hero-title-lh)' }}>
            {fmt(amount, currency)}
          </p>
        </div>
        <Button variant="tertiary" size="sm" onClick={handleReset}>
          Nueva oferta
        </Button>
      </div>
    )
  }

  // ── Estado: confirmación ───────────────────────────────────────────────────

  if (formState === 'confirming') {
    return (
      <div className={['flex flex-col gap-4 p-4 rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] bg-[var(--color-surface-card)]', className].join(' ')}>
        <div className="text-center">
          <p className="m-0 text-[var(--color-text-muted)] font-[var(--font-body)] uppercase"
            style={{ fontSize: 'var(--type-label-size)', letterSpacing: 'var(--tracking-wider)' }}>
            Confirmar oferta
          </p>
          <p className="m-0 mt-1 font-[var(--font-mono)] font-[var(--weight-extrabold)] tabular-nums text-[var(--color-text-primary)]"
            style={{ fontSize: 'var(--type-hero-title-size)', lineHeight: 'var(--type-hero-title-lh)' }}>
            {fmt(amount, currency)}
          </p>
          <p className="m-0 mt-1 text-[var(--color-text-muted)] font-[var(--font-body)]"
            style={{ fontSize: 'var(--font-size-xs)' }}>
            Esta acción no se puede deshacer.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="md" isFullWidth onClick={handleCancel}>
            Cancelar
          </Button>
          <Button variant="accent" size="md" isFullWidth onClick={handleConfirm}>
            CONFIRMAR
          </Button>
        </div>
      </div>
    )
  }

  // ── Estado: idle / active / submitting / error ─────────────────────────────

  const hasError = formState === 'error' || Boolean(validationMsg)
  const errorText = errorMsg || validationMsg

  return (
    <form
      className={['flex flex-col gap-3', className].join(' ')}
      onSubmit={(e) => { e.preventDefault(); handleSubmitClick() }}
      noValidate
    >
      {/* Oferta actual */}
      {currentBid !== undefined && (
        <div className="flex items-center justify-between px-3 py-2 rounded-[var(--radius-btn)] bg-[var(--color-surface-section)]">
          <span className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)]"
            style={{ fontSize: 'var(--font-size-2xs)', letterSpacing: 'var(--tracking-wider)' }}>
            Oferta actual
          </span>
          <span className="font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums text-[var(--color-text-on-surface)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            {fmt(currentBid, currency)}
          </span>
        </div>
      )}

      {/* Input de monto */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-body)]"
          style={{ fontSize: 'var(--type-label-size)', letterSpacing: 'var(--tracking-wider)' }}
        >
          Tu oferta
        </label>

        <div className="relative flex items-center">
          {/* Prefijo de moneda */}
          <span
            className="absolute left-3 font-[var(--font-mono)] font-[var(--weight-semibold)] tabular-nums pointer-events-none select-none text-[var(--color-text-muted)]"
            style={{ fontSize: 'var(--type-hero-title-size)', lineHeight: 'var(--type-hero-title-lh)' }}
          >
            {currency}
          </span>

          <input
            id={inputId}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={raw ? Number(raw).toLocaleString('es-PE') : ''}
            onChange={handleChange}
            placeholder="0"
            disabled={disabled || formState === 'submitting'}
            aria-invalid={hasError || undefined}
            aria-describedby={\`\${inputId}-hint\`}
            className={[
              'w-full h-14 pl-14 pr-3',
              'rounded-[var(--radius-btn)]',
              'bg-[var(--color-surface-input)]',
              'font-[var(--font-mono)] font-[var(--weight-extrabold)] tabular-nums',
              'text-[var(--color-text-on-surface)]',
              'border-0 outline-none',
              'transition-[box-shadow] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              'placeholder:text-[var(--color-text-muted)]',
              hasError
                ? 'shadow-[0_0_0_1.5px_var(--red-500)]'
                : 'focus:shadow-[0_0_0_1.5px_var(--color-action-accent)]',
              disabled ? 'opacity-40 cursor-not-allowed' : '',
            ].filter(Boolean).join(' ')}
            style={{ fontSize: 'var(--type-hero-title-size)', lineHeight: 'var(--type-hero-title-lh)' }}
          />
        </div>

        {/* Hint / error */}
        <div id={\`\${inputId}-hint\`} className="min-h-[16px]">
          {errorText ? (
            <span className="flex items-center gap-1 text-[var(--red-500)] font-[var(--font-body)]"
              style={{ fontSize: 'var(--type-label-size)' }}>
              <WarningIcon />
              {errorText}
            </span>
          ) : (
            <span className="text-[var(--color-text-muted)] font-[var(--font-body)]"
              style={{ fontSize: 'var(--type-label-size)' }}>
              Mínimo: {fmt(minimumBid, currency)}
            </span>
          )}
        </div>
      </div>

      {/* Botón */}
      <Button
        type="submit"
        variant="accent"
        size="lg"
        isFullWidth
        isLoading={formState === 'submitting'}
        disabled={disabled || !isValid}
      >
        REALIZAR OFERTA
      </Button>
    </form>
  )
}

export default BidForm
`})})})]}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}function bn(){let[e,t]=(0,_.useState)(`subastas`);return(0,y.jsxs)(`section`,{id:`layouts`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3 mb-1`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`Layouts`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L4 — Estructuras`})]}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:`Marcos estructurales macro. Definen la arquitectura de página. Max-width 1024px · margin auto.`})]}),(0,y.jsxs)(`div`,{className:`mb-8`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Header`}),(0,y.jsx)(`div`,{className:`rounded-xl overflow-hidden border border-[var(--gray-300)]`,children:(0,y.jsx)(De,{user:{name:`Julio Herrera`}})}),(0,y.jsx)(`p`,{className:`mt-2 text-[11px] text-[var(--gray-500)]`,children:`Con usuario autenticado`}),(0,y.jsx)(`div`,{className:`mt-2 rounded-xl overflow-hidden border border-[var(--gray-300)]`,children:(0,y.jsx)(De,{onLogin:()=>{}})}),(0,y.jsx)(`p`,{className:`mt-2 text-[11px] text-[var(--gray-500)]`,children:`Sin usuario — botón INGRESA`})]}),(0,y.jsxs)(`div`,{className:`mb-8`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Sidebar`}),(0,y.jsx)(`div`,{className:`rounded-xl overflow-hidden border border-[var(--gray-300)]`,style:{width:280,height:420},children:(0,y.jsx)(Le,{activeId:e,onNavigate:t,className:`h-full`})}),(0,y.jsx)(`p`,{className:`mt-2 text-[11px] text-[var(--gray-500)]`,children:`Los ítems son interactivos — haz click para cambiar el estado activo`})]}),(0,y.jsxs)(`div`,{className:`mb-8`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Footer`}),(0,y.jsx)(`div`,{className:`rounded-xl overflow-hidden border border-[var(--gray-300)]`,children:(0,y.jsx)(He,{})})]}),(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`PageLayout — preview completo (escala 50%)`}),(0,y.jsx)(`div`,{className:`rounded-xl overflow-hidden border border-[var(--gray-300)] bg-[var(--gray-100)]`,style:{height:400},children:(0,y.jsx)(`div`,{style:{transform:`scale(0.5)`,transformOrigin:`top left`,width:`200%`,height:`200%`,pointerEvents:`none`},children:(0,y.jsx)(Ue,{user:{name:`Julio Herrera`},activeSection:`subastas`,children:(0,y.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,y.jsx)(`h2`,{className:`m-0 font-[var(--font-body)] font-[var(--weight-extrabold)] uppercase text-[var(--color-text-primary)]`,style:{fontSize:`var(--type-section-heading-size)`},children:`Subastas Activas`}),(0,y.jsx)(`div`,{className:`grid grid-cols-3 gap-3`,children:_n.slice(0,3).map(e=>(0,y.jsx)(_e,{variant:`standard`,lot:e},e.id))})]})})})}),(0,y.jsx)(`p`,{className:`mt-2 text-[11px] text-[var(--gray-500)]`,children:`Header + Sidebar + Content + Footer a 1024px max-width`})]}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}var xn=[`Default`,`Hover`,`Focus`,`Active`];function Sn({state:e}){return(0,y.jsx)(`div`,{className:e===`Focus`?`outline outline-2 outline-offset-2 outline-[var(--color-action-primary)] rounded-[var(--radius-card)]`:``,style:{display:`inline-flex`},children:(0,y.jsx)(Ge,{className:{Default:``,Hover:`shadow-[var(--shadow-card-hover)]`,Focus:``,Active:`scale-[0.98]`,Disabled:``,Loading:``,Error:``}[e]})})}function Cn(){let[e,t]=(0,_.useState)(!1),n=Array.from({length:5}).map((e,t)=>({title:[`FORD BRONCO SPORT`,`TOYOTA HILUX`,`NISSAN VERSA`,`TOYOTA ETIOS`,`KIA SPORTAGE`][t],subtitle:[`2024 | LIMA, PERÚ`,`2024 | TRUJILLO, PERÚ`,`2024 | LIMA, PERÚ`,`2023 | AREQUIPA, PERÚ`,`2024 | LIMA, PERÚ`][t],price:[`17,999`,`17,999`,`3,999`,`4,999`,`12,999`][t]}));return(0,y.jsxs)(`section`,{id:`auctioneer-section`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif] m-0`,children:`AuctioneerSection`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5 mb-0`,children:`Sección rematador — carousel horizontal con fade + clip`})]}),(0,y.jsx)(`button`,{onClick:()=>t(e=>!e),className:`text-[11px] px-3 py-1.5 rounded-md border border-[var(--gray-300)] text-[var(--gray-500)] hover:border-[var(--purple-700)] hover:text-[var(--purple-700)] transition-colors bg-white cursor-pointer font-['Inter',sans-serif]`,children:e?`Ocultar código`:`Ver código`})]}),(0,y.jsx)(`div`,{className:`rounded-xl border border-[var(--gray-300)] overflow-hidden mb-4`,children:(0,y.jsx)(`div`,{className:`w-[708px] max-w-full mx-auto`,children:(0,y.jsx)(qe,{title:`ME INTERESA`,offerCount:5,profileLinkLabel:`IR AL PERFIL`,onProfileClick:()=>{},cards:n})})}),e&&(0,y.jsxs)(`div`,{className:`mt-4`,children:[(0,y.jsx)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`AuctioneerSection.tsx`})}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(k,{code:`import { useRef, useState, useEffect } from 'react'
import { VehicleCard, type VehicleCardProps } from '../VehicleCard/VehicleCard'

export interface AuctioneerSectionProps {
  /** Nombre del rematador: "MAF PERÚ", "ME INTERESA", etc. */
  title?: string
  /** Número de ofertas */
  offerCount?: number
  /** Texto del link de perfil */
  profileLinkLabel?: string
  onProfileClick?: () => void
  cards?: VehicleCardProps[]
  className?: string
}

export function AuctioneerSection({
  title            = 'ME INTERESA',
  offerCount       = 5,
  profileLinkLabel = 'IR AL PERFIL',
  onProfileClick,
  cards            = [],
  className        = '',
}: AuctioneerSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [hasMore, setHasMore] = useState(false)

  // Detecta si hay contenido oculto a la derecha para mostrar/ocultar el fade
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const check = () => setHasMore(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
    check()
    el.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => { el.removeEventListener('scroll', check); window.removeEventListener('resize', check) }
  }, [cards])

  return (
    <section
      className={[
        'flex flex-col w-full',
        'bg-[var(--color-surface-section)]',
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* ── Header ────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-[var(--space-5)] pt-[var(--space-5)] pb-[var(--space-3)]">
        <div className="flex flex-col gap-0">
          <h2
            className="m-0 font-bold uppercase text-[var(--color-text-primary)] font-['Plus_Jakarta_Sans',sans-serif]"
            style={{ fontSize: 'var(--size-18)', lineHeight: 'var(--lh-18)' }}
          >
            {title}
          </h2>
          <span
            className="font-normal text-[var(--color-text-secondary)] font-['Plus_Jakarta_Sans',sans-serif]"
            style={{ fontSize: 'var(--size-12)', lineHeight: 'var(--lh-12)' }}
          >
            {offerCount} OFERTAS
          </span>
        </div>

        {onProfileClick && (
          <button
            type="button"
            onClick={onProfileClick}
            className={[
              'flex items-center gap-[var(--space-1)]',
              'font-semibold uppercase text-[var(--color-action-primary)]',
              'font-[\\'Plus_Jakarta_Sans\\',sans-serif]',
              'bg-transparent border-0 cursor-pointer',
              'transition-colors duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              'hover:text-[var(--color-action-primary-hover)]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
            ].join(' ')}
            style={{ fontSize: 'var(--size-12)', lineHeight: 'var(--lh-12)' }}
          >
            {profileLinkLabel}
            <ChevronIcon />
          </button>
        )}
      </div>

      {/* ── Cards carousel ────────────────────────────────── */}
      <div className="relative">
        {/* Scroll container — clip horizontal */}
        <div
          ref={scrollRef}
          className={[
            'flex flex-row gap-[var(--gap-card-grid)]',
            'px-[var(--space-5)] pb-[var(--space-5)]',
            'overflow-x-auto',
            'scroll-smooth',
            /* ocultar scrollbar visualmente */
            '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          ].join(' ')}
        >
          {cards.length > 0
            ? cards.map((card, i) => (
                <div key={i} className="shrink-0 w-[163px]">
                  <VehicleCard {...card} />
                </div>
              ))
            : /* Placeholders de demo */ Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="shrink-0 w-[163px]">
                  <VehicleCard />
                </div>
              ))
          }
        </div>

        {/* Fade derecho — visible solo cuando hay contenido oculto */}
        {hasMore && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-[80px]"
            style={{
              background: 'linear-gradient(to right, transparent, var(--color-surface-section))',
            }}
          />
        )}
      </div>
    </section>
  )
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default AuctioneerSection
`})})})]})]})}function wn(){let[e,t]=(0,_.useState)(`Default`),[n,r]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`vehicle-card`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif] leading-tight`,children:`Vehicle Card`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-400)] font-['Inter',sans-serif]`,children:`🟢 Confirmado`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>r(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold font-['Inter',sans-serif] border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-700)] hover:text-[var(--purple-700)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),n?`Ocultar`:`Ver fuente`]})]}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] font-['Inter',sans-serif] leading-5 mb-6 max-w-[560px]`,children:`Tarjeta de vehículo con imagen, precio y acción. 228px fijo, radio 16px, shadow SM en reposo y LG en hover.`}),(0,y.jsxs)(`div`,{className:`grid grid-cols-[1fr_auto] gap-8 items-start`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,y.jsx)(on,{active:e,available:xn,onChange:t}),(0,y.jsx)(`div`,{className:`flex items-center gap-2`,children:{Default:[`(sin props)`],Hover:[`CSS :hover`],Focus:[`CSS :focus-visible (botón)`],Active:[`CSS :active`],Disabled:[`—`],Loading:[`—`],Error:[`—`]}[e].map(e=>(0,y.jsx)(sn,{label:e},e))}),(0,y.jsx)(cn,{children:(0,y.jsx)(Sn,{state:e})}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsx)(`div`,{className:`absolute top-3 right-3 z-10`,children:(0,y.jsx)(Wt,{text:Ke})}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 pt-12 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[320px] border-t border-white/6`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(k,{code:Ke})})})]})]}),(0,y.jsxs)(`div`,{className:`w-[210px] shrink-0`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] font-['Inter',sans-serif] mb-3`,children:`Design specs`}),(0,y.jsx)(`table`,{className:`w-full border-collapse`,children:(0,y.jsxs)(`tbody`,{children:[(0,y.jsx)(A,{label:`Width`,value:`flexible (w-full)`,token:`parent grid`}),(0,y.jsx)(A,{label:`Image height`,value:`128px`,token:`h-[128px]`}),(0,y.jsx)(A,{label:`Px horiz`,value:`12px`,token:`--space-3`}),(0,y.jsx)(A,{label:`Background`,value:`#fefdfc`,token:`--color-surface-card`}),(0,y.jsx)(A,{label:`Radius`,value:`16px`,token:`--radius-card`}),(0,y.jsx)(A,{label:`Shadow rest`,value:`0 2px 4px rgba(0,0,0,.06)`,token:`--shadow-card`}),(0,y.jsx)(A,{label:`Shadow hover`,value:`0 8px 16px rgba(0,0,0,.10)`,token:`--shadow-card-hover`}),(0,y.jsx)(A,{label:`Title`,value:`PJS Bold 12px/20px uppercase`,token:`--size-12`}),(0,y.jsx)(A,{label:`Subtitle`,value:`PJS 400 11px/16px`,token:`--size-11`}),(0,y.jsx)(A,{label:`Precio label`,value:`PJS 600 11px/16px uppercase`,token:`--size-11`}),(0,y.jsx)(A,{label:`Precio`,value:`PJS Bold 16px/24px tabular`,token:`--color-brand-live`}),(0,y.jsx)(A,{label:`Fav. button`,value:`32×32px, radius-full`,token:`--radius-full`}),(0,y.jsx)(A,{label:`Strip`,value:`4px amber`,token:`--color-brand-live`})]})})]})]}),n&&(0,y.jsxs)(`div`,{className:`mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`VehicleCard.tsx`}),(0,y.jsx)(Wt,{text:`import React from 'react'

export interface VehicleCardProps {
  /** Nombre del vehículo en mayúsculas: "FORD BRONCO SPORT" */
  title?: string
  /** Año y ubicación: "2024 | LIMA, PERÚ" */
  subtitle?: string
  /** Etiqueta sobre el precio: "PRECIO BASE" */
  priceLabel?: string
  /** Moneda: "US$" */
  currency?: string
  /** Monto formateado: "17,999" */
  price?: string
  /** URL de la imagen del vehículo */
  imageUrl?: string
  /** Estado del favorito */
  isFavorited?: boolean
  /** Handler del botón favorito */
  onFavorite?: (e: React.MouseEvent<HTMLButtonElement>) => void
  /** Handler click en la card (navegar al detalle) */
  onClick?: () => void
  className?: string
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" aria-hidden="true">
      <path
        d="M9 14.5S1 9.5 1 4.5A4 4 0 0 1 9 3a4 4 0 0 1 8 1.5C17 9.5 9 14.5 9 14.5Z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function VehicleCard({
  title        = 'TOYOTA HILUX',
  subtitle     = '2024 | LIMA, PERÚ',
  priceLabel   = 'PRECIO BASE',
  currency     = 'US$',
  price        = '17,999',
  imageUrl,
  isFavorited  = false,
  onFavorite,
  onClick,
  className    = '',
}: VehicleCardProps) {
  return (
    <article
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() } : undefined}
      className={[
        'flex flex-col w-full',
        'bg-[var(--color-surface-card)]',
        'rounded-[var(--radius-card)]',
        'shadow-[var(--shadow-card)]',
        'overflow-hidden',
        onClick ? 'cursor-pointer' : '',
        'transition-shadow duration-[var(--duration-standard)] ease-[var(--easing-standard)]',
        'hover:shadow-[var(--shadow-card-hover)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* ── Imagen ─────────────────────────────────────────── */}
      <div className="h-[128px] shrink-0 overflow-hidden bg-[var(--gray-50)]">
        {imageUrl
          ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          )
          : (
            /* Placeholder cuando no hay imagen */
            <div className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(150deg, #3d3d4f 0%, #2a2a38 100%)' }}
            >
              <svg width="64" height="32" viewBox="0 0 72 36" fill="white" aria-hidden="true" opacity="0.35">
                <path d="M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z" />
                <circle cx="18" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="54" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          )
        }
      </div>

      {/* ── Contenido ──────────────────────────────────────── */}
      <div className="flex flex-col flex-1 px-[var(--space-3)] pt-[var(--space-2)] pb-[var(--space-2)]">

        {/* Nombre del vehículo */}
        <h3
          className="m-0 font-bold uppercase tracking-wide text-[var(--color-text-primary)] font-['Plus_Jakarta_Sans',sans-serif]"
          style={{ fontSize: 'var(--size-12)', lineHeight: 'var(--lh-12)' }}
        >
          {title}
        </h3>

        {/* Año · Ubicación */}
        <p
          className="mt-[var(--space-1)] mb-0 font-normal text-[var(--color-text-secondary)] font-['Plus_Jakarta_Sans',sans-serif]"
          style={{ fontSize: 'var(--size-11)', lineHeight: 'var(--lh-11)' }}
        >
          {subtitle}
        </p>

        {/* Precio + Favorito */}
        <div className="flex items-end justify-between mt-[var(--space-2)]">

          {/* Izquierda: etiqueta + monto */}
          <div className="flex flex-col gap-0">
            <span
              className="font-semibold uppercase text-[var(--color-text-muted)] font-['Plus_Jakarta_Sans',sans-serif]"
              style={{ fontSize: 'var(--size-11)', lineHeight: 'var(--lh-11)' }}
            >
              {priceLabel}
            </span>
            <div className="flex items-baseline gap-[2px]">
              <span
                className="font-semibold text-[var(--color-brand-live)] font-['Plus_Jakarta_Sans',sans-serif]"
                style={{ fontSize: 'var(--size-11)', lineHeight: 'var(--lh-11)' }}
              >
                {currency}
              </span>
              <span
                className="font-bold tabular-nums text-[var(--color-brand-live)] font-['Plus_Jakarta_Sans',sans-serif]"
                style={{ fontSize: 'var(--size-16)', lineHeight: 'var(--lh-16)' }}
              >
                {price}
              </span>
            </div>
          </div>

          {/* Derecha: botón favorito */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(e) }}
            aria-label={isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-pressed={isFavorited}
            className={[
              'size-[32px] shrink-0',
              'flex items-center justify-center',
              'rounded-[var(--radius-full)]',
              'border-0 cursor-pointer',
              'transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              isFavorited
                ? 'bg-[var(--color-action-primary)] text-[var(--color-text-on-dark)]'
                : 'bg-[var(--gray-50)] text-[var(--color-text-secondary)] hover:bg-[var(--gray-100)] hover:text-[var(--color-action-primary)]',
              'active:scale-[0.90]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
            ].join(' ')}
          >
            <HeartIcon filled={isFavorited} />
          </button>
        </div>
      </div>

      {/* ── Franja inferior amber ───────────────────────────── */}
      <div
        className="h-[4px] shrink-0 w-full"
        style={{ background: 'var(--color-brand-live)' }}
        aria-hidden="true"
      />
    </article>
  )
}

export default VehicleCard
`})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(k,{code:`import React from 'react'

export interface VehicleCardProps {
  /** Nombre del vehículo en mayúsculas: "FORD BRONCO SPORT" */
  title?: string
  /** Año y ubicación: "2024 | LIMA, PERÚ" */
  subtitle?: string
  /** Etiqueta sobre el precio: "PRECIO BASE" */
  priceLabel?: string
  /** Moneda: "US$" */
  currency?: string
  /** Monto formateado: "17,999" */
  price?: string
  /** URL de la imagen del vehículo */
  imageUrl?: string
  /** Estado del favorito */
  isFavorited?: boolean
  /** Handler del botón favorito */
  onFavorite?: (e: React.MouseEvent<HTMLButtonElement>) => void
  /** Handler click en la card (navegar al detalle) */
  onClick?: () => void
  className?: string
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" aria-hidden="true">
      <path
        d="M9 14.5S1 9.5 1 4.5A4 4 0 0 1 9 3a4 4 0 0 1 8 1.5C17 9.5 9 14.5 9 14.5Z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function VehicleCard({
  title        = 'TOYOTA HILUX',
  subtitle     = '2024 | LIMA, PERÚ',
  priceLabel   = 'PRECIO BASE',
  currency     = 'US$',
  price        = '17,999',
  imageUrl,
  isFavorited  = false,
  onFavorite,
  onClick,
  className    = '',
}: VehicleCardProps) {
  return (
    <article
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() } : undefined}
      className={[
        'flex flex-col w-full',
        'bg-[var(--color-surface-card)]',
        'rounded-[var(--radius-card)]',
        'shadow-[var(--shadow-card)]',
        'overflow-hidden',
        onClick ? 'cursor-pointer' : '',
        'transition-shadow duration-[var(--duration-standard)] ease-[var(--easing-standard)]',
        'hover:shadow-[var(--shadow-card-hover)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* ── Imagen ─────────────────────────────────────────── */}
      <div className="h-[128px] shrink-0 overflow-hidden bg-[var(--gray-50)]">
        {imageUrl
          ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          )
          : (
            /* Placeholder cuando no hay imagen */
            <div className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(150deg, #3d3d4f 0%, #2a2a38 100%)' }}
            >
              <svg width="64" height="32" viewBox="0 0 72 36" fill="white" aria-hidden="true" opacity="0.35">
                <path d="M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z" />
                <circle cx="18" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="54" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          )
        }
      </div>

      {/* ── Contenido ──────────────────────────────────────── */}
      <div className="flex flex-col flex-1 px-[var(--space-3)] pt-[var(--space-2)] pb-[var(--space-2)]">

        {/* Nombre del vehículo */}
        <h3
          className="m-0 font-bold uppercase tracking-wide text-[var(--color-text-primary)] font-['Plus_Jakarta_Sans',sans-serif]"
          style={{ fontSize: 'var(--size-12)', lineHeight: 'var(--lh-12)' }}
        >
          {title}
        </h3>

        {/* Año · Ubicación */}
        <p
          className="mt-[var(--space-1)] mb-0 font-normal text-[var(--color-text-secondary)] font-['Plus_Jakarta_Sans',sans-serif]"
          style={{ fontSize: 'var(--size-11)', lineHeight: 'var(--lh-11)' }}
        >
          {subtitle}
        </p>

        {/* Precio + Favorito */}
        <div className="flex items-end justify-between mt-[var(--space-2)]">

          {/* Izquierda: etiqueta + monto */}
          <div className="flex flex-col gap-0">
            <span
              className="font-semibold uppercase text-[var(--color-text-muted)] font-['Plus_Jakarta_Sans',sans-serif]"
              style={{ fontSize: 'var(--size-11)', lineHeight: 'var(--lh-11)' }}
            >
              {priceLabel}
            </span>
            <div className="flex items-baseline gap-[2px]">
              <span
                className="font-semibold text-[var(--color-brand-live)] font-['Plus_Jakarta_Sans',sans-serif]"
                style={{ fontSize: 'var(--size-11)', lineHeight: 'var(--lh-11)' }}
              >
                {currency}
              </span>
              <span
                className="font-bold tabular-nums text-[var(--color-brand-live)] font-['Plus_Jakarta_Sans',sans-serif]"
                style={{ fontSize: 'var(--size-16)', lineHeight: 'var(--lh-16)' }}
              >
                {price}
              </span>
            </div>
          </div>

          {/* Derecha: botón favorito */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(e) }}
            aria-label={isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-pressed={isFavorited}
            className={[
              'size-[32px] shrink-0',
              'flex items-center justify-center',
              'rounded-[var(--radius-full)]',
              'border-0 cursor-pointer',
              'transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              isFavorited
                ? 'bg-[var(--color-action-primary)] text-[var(--color-text-on-dark)]'
                : 'bg-[var(--gray-50)] text-[var(--color-text-secondary)] hover:bg-[var(--gray-100)] hover:text-[var(--color-action-primary)]',
              'active:scale-[0.90]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
            ].join(' ')}
          >
            <HeartIcon filled={isFavorited} />
          </button>
        </div>
      </div>

      {/* ── Franja inferior amber ───────────────────────────── */}
      <div
        className="h-[4px] shrink-0 w-full"
        style={{ background: 'var(--color-brand-live)' }}
        aria-hidden="true"
      />
    </article>
  )
}

export default VehicleCard
`})})})]}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}var Tn=[{id:`tokens`,label:`Tokens`,category:`Fundación`,status:`done`},{id:`button-cta`,label:`Button / CTA`,category:`Átomos`,status:`done`},{id:`badge`,label:`Badge`,category:`Átomos`,status:`done`},{id:`textfield`,label:`TextField`,category:`Átomos`,status:`done`},{id:`checkbox-radio`,label:`Checkbox / Radio`,category:`Átomos`,status:`done`},{id:`searchinput`,label:`SearchInput`,category:`Átomos`,status:`done`},{id:`selectfield`,label:`SelectField`,category:`Átomos`,status:`done`},{id:`countdown-price`,label:`Countdown / Price`,category:`Átomos`,status:`done`},{id:`alert`,label:`Alert`,category:`Átomos`,status:`done`},{id:`toast`,label:`Toast`,category:`Átomos`,status:`done`},{id:`skeleton`,label:`Skeleton`,category:`Moléculas`,status:`done`},{id:`tabbar`,label:`TabBar`,category:`Moléculas`,status:`done`},{id:`accordion`,label:`Accordion`,category:`Moléculas`,status:`done`},{id:`modal`,label:`Modal`,category:`Moléculas`,status:`done`},{id:`auction-card`,label:`AuctionCard`,category:`Moléculas`,status:`done`},{id:`bid-form`,label:`BidForm`,category:`Moléculas`,status:`done`},{id:`vehicle-card`,label:`Vehicle Card`,category:`Organismos`,status:`done`},{id:`auctioneer-section`,label:`Auctioneer Section`,category:`Organismos`,status:`done`},{id:`page-layout`,label:`PageLayout`,category:`Organismos`,status:`done`},{id:`filter-bar`,label:`FilterBar`,category:`Bloques`,status:`done`},{id:`auction-status-banner`,label:`AuctionStatusBanner`,category:`Bloques`,status:`done`},{id:`vehicle-specs-row`,label:`VehicleSpecsRow`,category:`Bloques`,status:`done`},{id:`bid-history-list`,label:`BidHistoryList`,category:`Bloques`,status:`done`},{id:`vehicle-image-gallery`,label:`VehicleImageGallery`,category:`Bloques`,status:`done`},{id:`seller-card`,label:`SellerCard`,category:`Bloques`,status:`done`},{id:`auction-summary-widget`,label:`AuctionSummaryWidget`,category:`Bloques`,status:`done`}],En={done:`bg-emerald-400`,wip:`bg-amber-400`,pending:`bg-[var(--gray-300)]`};function Dn({activeId:e}){let t=[...new Set(Tn.map(e=>e.category))];return(0,y.jsxs)(`nav`,{className:`w-[220px] shrink-0 sticky top-0 h-screen overflow-y-auto py-6 flex flex-col`,"aria-label":`Design system docs`,children:[(0,y.jsxs)(`div`,{className:`px-4 mb-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-2 mb-0.5`,children:[(0,y.jsx)(`div`,{className:`size-6 rounded bg-[var(--cyan-500)] flex items-center justify-center shrink-0`,children:(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M2 7l2.5 4 2.5-4 2.5 4L12 7`,stroke:`white`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,y.jsxs)(`span`,{className:`font-bold text-[13px] text-[var(--purple-900)] font-['Inter',sans-serif]`,children:[`VMC `,(0,y.jsx)(`span`,{className:`text-[var(--cyan-500)]`,children:`Design`})]})]}),(0,y.jsx)(`p`,{className:`text-[10px] text-[var(--gray-400)] font-['Inter',sans-serif] pl-8`,children:`Fase 3 — UI Kit`})]}),t.map(t=>(0,y.jsxs)(`div`,{className:`mb-4 px-2`,children:[(0,y.jsx)(`p`,{className:`text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--gray-400)] font-['Inter',sans-serif] px-2 mb-1.5`,children:t}),Tn.filter(e=>e.category===t).map(t=>(0,y.jsxs)(`a`,{href:`#${t.id}`,className:[`flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] font-["Inter",sans-serif] transition-all duration-100 no-underline`,e===t.id?`bg-[var(--purple-700)] text-white font-semibold`:`text-[var(--gray-500)] hover:text-[var(--gray-600)] hover:bg-[var(--gray-50)]`].join(` `),children:[(0,y.jsx)(`span`,{className:`size-1.5 rounded-full shrink-0 ${En[t.status]}`,"aria-hidden":`true`}),t.label]},t.id))]},t)),(0,y.jsx)(`div`,{className:`mt-auto px-4 py-4 border-t border-[var(--gray-100)]`,children:(0,y.jsxs)(`p`,{className:`text-[9px] text-[var(--gray-400)] font-['Inter',sans-serif] leading-4`,children:[`React · TS · Tailwind v4`,(0,y.jsx)(`br`,{}),`Tokens OKLCH · W3C DTCG`]})})]})}function On(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(!0),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(`op1`);return(0,y.jsxs)(`section`,{id:`checkbox-radio`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`Checkbox / RadioButton`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Controles de selección accesibles con estado controlado y hint.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-10`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] font-['Inter',sans-serif] mb-1`,children:`Checkbox`}),(0,y.jsx)(Xe,{label:`Activo (checked)`,checked:n,onChange:r}),(0,y.jsx)(Xe,{label:`Inactivo`,checked:i,onChange:a,hint:`Selecciona esta opción para continuar`}),(0,y.jsx)(Xe,{label:`Deshabilitado`,checked:!0,disabled:!0})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] font-['Inter',sans-serif] mb-1`,children:`RadioButton`}),(0,y.jsx)(Ze,{label:`Opción 1`,value:`op1`,name:`demo-radio`,checked:o===`op1`,onChange:s}),(0,y.jsx)(Ze,{label:`Opción 2`,value:`op2`,name:`demo-radio`,checked:o===`op2`,onChange:s,hint:`Con descripción adicional`}),(0,y.jsx)(Ze,{label:`Deshabilitada`,value:`op3`,name:`demo-radio`,checked:!1,disabled:!0})]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`import { useId } from 'react'

export interface CheckboxProps {
  label: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  hint?: string
  id?: string
  name?: string
  className?: string
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  hint,
  id: idProp,
  name,
  className = '',
}: CheckboxProps) {
  const generatedId = useId()
  const id = idProp ?? generatedId

  return (
    <div className={['flex flex-col gap-1', className].join(' ')}>
      <label
        htmlFor={id}
        className={[
          'inline-flex items-start gap-2.5 cursor-pointer select-none',
          disabled ? 'opacity-40 cursor-not-allowed' : '',
        ].join(' ')}
      >
        <div className="relative flex items-center justify-center shrink-0 mt-0.5">
          <input
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            onChange={e => onChange?.(e.target.checked)}
            className="peer sr-only"
          />
          {/* Custom checkbox */}
          <div className={[
            'size-4 rounded-[var(--radius-sm)] border-2 flex items-center justify-center',
            'transition-[background-color,border-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
            'peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--color-action-primary)]',
            'peer-checked:bg-[var(--color-action-primary)] peer-checked:border-[var(--color-action-primary)]',
            'peer-not-checked:bg-transparent peer-not-checked:border-[var(--gray-400)] hover:peer-not-checked:border-[var(--color-action-primary)]',
            'border-[var(--gray-400)]',
          ].join(' ')}
          >
            <span className="hidden peer-checked:flex text-white" style={{ display: 'none' }}>
              <CheckIcon />
            </span>
          </div>
        </div>

        <span
          className="font-[var(--font-body)] text-[var(--color-text-body)]"
          style={{ fontSize: 'var(--type-body-sm-size)', lineHeight: 'var(--type-body-sm-lh)' }}
        >
          {label}
        </span>
      </label>

      {hint && (
        <p className="ml-[26px] m-0 text-[var(--color-text-muted)] font-[var(--font-body)]"
          style={{ fontSize: 'var(--type-label-size)' }}>
          {hint}
        </p>
      )}
    </div>
  )
}

export default Checkbox
`})})})]})]})}function kn(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(``);return(0,y.jsxs)(`section`,{id:`searchinput`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`SearchInput`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Input de búsqueda con ícono leading, botón clear y soporte Enter/Escape.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-col gap-4 max-w-[400px]`,children:[(0,y.jsx)(et,{value:n,onChange:r,onSearch:e=>console.log(`search:`,e)}),(0,y.jsx)(et,{disabled:!0,placeholder:`Deshabilitado`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`import { useState, useId, useRef } from 'react'

export interface SearchInputProps {
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  onClear?: () => void
  disabled?: boolean
  id?: string
  className?: string
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 10.5L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ClearIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function SearchInput({
  placeholder = 'Buscar vehículo o lote...',
  value,
  defaultValue,
  onChange,
  onSearch,
  onClear,
  disabled = false,
  id: idProp,
  className = '',
}: SearchInputProps) {
  const generatedId = useId()
  const id = idProp ?? generatedId
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const inputRef = useRef<HTMLInputElement>(null)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue
  const hasValue = currentValue.length > 0

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    if (!isControlled) setInternalValue(v)
    onChange?.(v)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') onSearch?.(currentValue)
    if (e.key === 'Escape') handleClear()
  }

  const handleClear = () => {
    if (!isControlled) setInternalValue('')
    onChange?.('')
    onClear?.()
    inputRef.current?.focus()
  }

  return (
    <div className={['relative flex items-center w-full', className].join(' ')}>
      {/* Leading search icon */}
      <span className="absolute left-3 text-[var(--color-text-muted)] pointer-events-none">
        <SearchIcon />
      </span>

      <input
        ref={inputRef}
        id={id}
        type="search"
        value={currentValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        className={[
          'w-full h-10 pl-9 pr-3',
          hasValue ? 'pr-9' : 'pr-3',
          'rounded-[var(--radius-btn)]',
          'bg-[var(--color-surface-input)]',
          'font-[var(--font-body)] text-[var(--color-text-on-surface)]',
          'border-0 outline-none',
          'transition-[box-shadow,background-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
          'placeholder:text-[var(--color-text-muted)]',
          'focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]',
          disabled ? 'opacity-40 cursor-not-allowed' : '',
          // Ocultar el botón nativo de clear del browser
          '[&::-webkit-search-cancel-button]:hidden',
        ].filter(Boolean).join(' ')}
        style={{ fontSize: 'var(--type-body-sm-size)' }}
      />

      {/* Trailing clear button */}
      {hasValue && !disabled && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Limpiar búsqueda"
          className={[
            'absolute right-3',
            'size-5 flex items-center justify-center',
            'rounded-full border-0 cursor-pointer',
            'text-[var(--color-text-muted)] hover:text-[var(--color-text-on-surface)]',
            'bg-[var(--gray-300)] hover:bg-[var(--gray-400)]',
            'transition-colors duration-[var(--duration-micro)]',
            'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-action-primary)]',
          ].join(' ')}
        >
          <ClearIcon />
        </button>
      )}
    </div>
  )
}

export default SearchInput
`})})})]})]})}function An(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(``),i=[{value:`auto`,label:`Automóvil`},{value:`camion`,label:`Camión`},{value:`moto`,label:`Motocicleta`,disabled:!0},{value:`bus`,label:`Bus`}];return(0,y.jsxs)(`section`,{id:`selectfield`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`SelectField`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Select nativo con chevron overlay, label semibold uppercase, hint y error.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start`,children:[(0,y.jsx)(nt,{label:`Tipo de vehículo`,options:i,value:n,onChange:r,hint:`Selecciona para filtrar`,className:`max-w-[240px]`}),(0,y.jsx)(nt,{label:`Con error`,options:i,error:`Este campo es requerido`,className:`max-w-[240px]`}),(0,y.jsx)(nt,{label:`Deshabilitado`,options:i,disabled:!0,className:`max-w-[240px]`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`import { useId } from 'react'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectFieldProps {
  label: string
  options: SelectOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  placeholder?: string
  hint?: string
  error?: string
  disabled?: boolean
  id?: string
  name?: string
  className?: string
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SelectField({
  label,
  options,
  value,
  defaultValue,
  onChange,
  placeholder = 'Seleccionar...',
  hint,
  error,
  disabled = false,
  id: idProp,
  name,
  className = '',
}: SelectFieldProps) {
  const generatedId = useId()
  const id = idProp ?? generatedId
  const hintId = hint || error ? \`\${id}-hint\` : undefined
  const hasError = Boolean(error)

  return (
    <div className={['flex flex-col gap-1.5 w-full', className].join(' ')}>
      <label
        htmlFor={id}
        className={[
          'font-[var(--font-body)] font-[var(--weight-semibold)] uppercase',
          'text-[var(--color-text-body)]',
          disabled ? 'text-[var(--color-text-disabled)]' : '',
        ].filter(Boolean).join(' ')}
        style={{ fontSize: 'var(--type-label-size)', letterSpacing: 'var(--tracking-wider)' }}
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={e => onChange?.(e.target.value)}
          aria-describedby={hintId}
          aria-invalid={hasError || undefined}
          className={[
            'w-full h-10 pl-3 pr-9 appearance-none',
            'rounded-[var(--radius-btn)]',
            'bg-[var(--color-surface-input)]',
            'font-[var(--font-body)] text-[var(--color-text-on-surface)]',
            'border-0 outline-none cursor-pointer',
            'transition-[box-shadow] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
            'focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]',
            hasError ? 'shadow-[0_0_0_1.5px_var(--red-500)]' : '',
            disabled ? 'opacity-40 cursor-not-allowed' : '',
          ].filter(Boolean).join(' ')}
          style={{ fontSize: 'var(--type-body-sm-size)' }}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map(opt => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Chevron */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]">
          <ChevronIcon />
        </span>
      </div>

      {(hint || error) && (
        <p
          id={hintId}
          className={[
            'font-[var(--font-body)]',
            hasError ? 'text-[var(--red-500)]' : 'text-[var(--color-text-muted)]',
          ].join(' ')}
          style={{ fontSize: 'var(--type-label-size)' }}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  )
}

export default SelectField
`})})})]})]})}function jn(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`alert`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`Alert`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Bandas de feedback inline: success / error / warning / info. Dismissible opcional.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-col gap-3 max-w-[480px]`,children:[(0,y.jsx)(it,{type:`success`,message:`Tu oferta fue registrada correctamente.`}),(0,y.jsx)(it,{type:`error`,message:`No se pudo procesar el pago. Intenta de nuevo.`,isDismissible:!0}),(0,y.jsx)(it,{type:`warning`,message:`Esta subasta cierra en menos de 10 minutos.`,isDismissible:!0}),(0,y.jsx)(it,{type:`info`,message:`Recuerda que las pujas son vinculantes según el reglamento.`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`import { useState, type ReactNode } from 'react'

export type AlertType = 'success' | 'error' | 'warning' | 'info'

export interface AlertProps {
  type: AlertType
  message: ReactNode
  isDismissible?: boolean
  hasIcon?: boolean
  className?: string
}

const CONFIG: Record<AlertType, { bg: string; border: string; text: string; icon: ReactNode }> = {
  success: {
    bg:     'var(--color-surface-card)',
    border: 'oklch(0.637 0.207 25.500 / 0)',
    text:   'oklch(0.4 0.15 145)',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="oklch(0.4 0.15 145)" strokeWidth="1.4"/><path d="M5 8l2 2 4-4" stroke="oklch(0.4 0.15 145)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  error: {
    bg:     'oklch(0.637 0.207 25.500 / 0.08)',
    border: 'oklch(0.637 0.207 25.500 / 0.30)',
    text:   'var(--red-500)',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="var(--red-500)" strokeWidth="1.4"/><path d="M8 5v3.5M8 10.5v.5" stroke="var(--red-500)" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
  warning: {
    bg:     'oklch(0.784 0.172 68.000 / 0.08)',
    border: 'oklch(0.784 0.172 68.000 / 0.30)',
    text:   'oklch(0.55 0.15 68)',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L14.5 13.5H1.5L8 2Z" stroke="oklch(0.55 0.15 68)" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 7v2.5M8 11v.5" stroke="oklch(0.55 0.15 68)" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
  info: {
    bg:     'oklch(0.761 0.130 197.000 / 0.08)',
    border: 'oklch(0.761 0.130 197.000 / 0.30)',
    text:   'var(--color-action-primary)',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="var(--color-action-primary)" strokeWidth="1.4"/><path d="M8 7.5v4M8 5v.5" stroke="var(--color-action-primary)" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
}

export function Alert({ type, message, isDismissible = false, hasIcon = true, className = '' }: AlertProps) {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  const { bg, border, text, icon } = CONFIG[type]

  return (
    <div
      role="alert"
      className={['flex items-start gap-2.5 px-3 py-2.5 rounded-[var(--radius-btn)]', className].join(' ')}
      style={{ background: bg, border: \`1px solid \${border}\`, color: text }}
    >
      {hasIcon && <span className="shrink-0 mt-0.5">{icon}</span>}
      <span className="flex-1 font-[var(--font-body)]" style={{ fontSize: 'var(--type-body-sm-size)' }}>
        {message}
      </span>
      {isDismissible && (
        <button type="button" onClick={() => setDismissed(true)} aria-label="Cerrar"
          className="shrink-0 opacity-60 hover:opacity-100 transition-opacity border-0 bg-transparent cursor-pointer p-0"
          style={{ color: text }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
        </button>
      )}
    </div>
  )
}

export default Alert
`})})})]})]})}function Mn(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)([]),i=(0,_.useState)(0),a=(e,t)=>{let n=++i[0];r(r=>[...r,{id:n,type:e,msg:t}])},o=e=>r(t=>t.filter(t=>t.id!==e));return(0,y.jsxs)(`section`,{id:`toast`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`Toast`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Notificaciones flotantes con auto-dismiss, entrada animada y ToastContainer.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-2`,children:[(0,y.jsx)(`button`,{type:`button`,onClick:()=>a(`success`,`Oferta registrada correctamente.`),className:`px-3 py-1.5 rounded-md bg-emerald-500 text-white text-[11px] font-semibold font-['Inter',sans-serif] border-0 cursor-pointer`,children:`+ Success`}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>a(`error`,`Error al procesar el pago.`),className:`px-3 py-1.5 rounded-md bg-red-500 text-white text-[11px] font-semibold font-['Inter',sans-serif] border-0 cursor-pointer`,children:`+ Error`}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>a(`warning`,`Subasta cierra en 5 minutos.`),className:`px-3 py-1.5 rounded-md bg-amber-500 text-white text-[11px] font-semibold font-['Inter',sans-serif] border-0 cursor-pointer`,children:`+ Warning`}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>a(`info`,`Las pujas son vinculantes.`),className:`px-3 py-1.5 rounded-md bg-blue-500 text-white text-[11px] font-semibold font-['Inter',sans-serif] border-0 cursor-pointer`,children:`+ Info`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`import { useEffect, useState, type ReactNode } from 'react'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastProps {
  type: ToastType
  message: ReactNode
  /** Duración en ms — default 4000 */
  duration?: number
  onDismiss?: () => void
}

const ICONS: Record<ToastType, ReactNode> = {
  success: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="oklch(0.4 0.15 145)" strokeWidth="1.4"/><path d="M5 8l2 2 4-4" stroke="oklch(0.4 0.15 145)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  error:   <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="var(--red-500)" strokeWidth="1.4"/><path d="M8 5v3.5M8 10.5v.5" stroke="var(--red-500)" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  warning: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L14.5 13.5H1.5L8 2Z" stroke="var(--amber-500)" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 7v2.5M8 11v.5" stroke="var(--amber-500)" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  info:    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="var(--color-action-primary)" strokeWidth="1.4"/><path d="M8 7.5v4M8 5v.5" stroke="var(--color-action-primary)" strokeWidth="1.4" strokeLinecap="round"/></svg>,
}

export function Toast({ type, message, duration = 4000, onDismiss }: ToastProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Enter
    const enterTimer = setTimeout(() => setVisible(true), 10)
    // Auto-dismiss
    const exitTimer  = setTimeout(() => { setVisible(false); setTimeout(() => onDismiss?.(), 300) }, duration)
    return () => { clearTimeout(enterTimer); clearTimeout(exitTimer) }
  }, [duration, onDismiss])

  return (
    <div
      role="status"
      aria-live="polite"
      className={[
        'flex items-center gap-2.5 px-4 py-3 min-w-[280px] max-w-[400px]',
        'rounded-[var(--radius-btn)]',
        'bg-[var(--color-surface-card)]',
        'shadow-[var(--shadow-lg)]',
        'border border-[var(--color-border-ghost)]',
        'transition-[opacity,transform] duration-[var(--duration-standard)] ease-[var(--easing-standard)]',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
      ].join(' ')}
    >
      <span className="shrink-0">{ICONS[type]}</span>
      <span className="flex-1 font-[var(--font-body)] text-[var(--color-text-body)]"
        style={{ fontSize: 'var(--type-body-sm-size)' }}>
        {message}
      </span>
      <button type="button" onClick={() => { setVisible(false); setTimeout(() => onDismiss?.(), 300) }}
        aria-label="Cerrar"
        className="shrink-0 text-[var(--color-text-muted)] hover:text-[var(--color-text-on-surface)] border-0 bg-transparent cursor-pointer p-0 transition-colors duration-[var(--duration-micro)]">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
      </button>
    </div>
  )
}

/** Contenedor posicionado bottom-right para mostrar toasts */
export function ToastContainer({ children }: { children: ReactNode }) {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-[var(--z-toast)]" aria-label="Notificaciones">
      {children}
    </div>
  )
}

export default Toast
`})})})]}),(0,y.jsx)(st,{children:n.map(e=>(0,y.jsx)(ot,{type:e.type,message:e.msg,onDismiss:()=>o(e.id)},e.id))})]})}function Nn(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`skeleton`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`Skeleton`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Estados de carga: text · rect · circle · card. animate-pulse sobre gray-200.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-8 items-start`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-3 min-w-[200px]`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] font-['Inter',sans-serif]`,children:`Text / Lines`}),(0,y.jsx)(ft,{variant:`text`,width:200}),(0,y.jsx)(ft,{variant:`text`,width:200,lines:3})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] font-['Inter',sans-serif]`,children:`Shapes`}),(0,y.jsx)(ft,{variant:`circle`,width:40}),(0,y.jsx)(ft,{variant:`rect`,width:120,height:36})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] font-['Inter',sans-serif]`,children:`Card`}),(0,y.jsx)(ft,{variant:`card`,className:`w-[200px]`})]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`export type SkeletonVariant = 'text' | 'rect' | 'circle' | 'card'

export interface SkeletonProps {
  variant?: SkeletonVariant
  width?: number | string
  height?: number | string
  lines?: number
  className?: string
}

const BASE = 'animate-pulse bg-[var(--gray-200)] rounded-[var(--radius-btn)]'

export function Skeleton({
  variant = 'text',
  width,
  height,
  lines = 1,
  className = '',
}: SkeletonProps) {
  const style: React.CSSProperties = {
    width:  width  !== undefined ? (typeof width  === 'number' ? \`\${width}px\`  : width)  : undefined,
    height: height !== undefined ? (typeof height === 'number' ? \`\${height}px\` : height) : undefined,
  }

  if (variant === 'circle') {
    const size = width ?? height ?? 40
    const px = typeof size === 'number' ? \`\${size}px\` : size
    return (
      <div
        className={['animate-pulse bg-[var(--gray-200)] rounded-full shrink-0', className].join(' ')}
        style={{ width: px, height: px }}
        aria-hidden="true"
      />
    )
  }

  if (variant === 'card') {
    return (
      <div className={['flex flex-col gap-3 p-4 bg-[var(--color-surface-card)] rounded-[var(--radius-card)] shadow-[var(--shadow-sm)]', className].join(' ')} aria-hidden="true">
        <div className={\`\${BASE} h-[132px] w-full rounded-[var(--radius-btn)]\`} />
        <div className={\`\${BASE} h-3 w-3/4\`} />
        <div className={\`\${BASE} h-3 w-1/2\`} />
        <div className="flex justify-between mt-1">
          <div className={\`\${BASE} h-5 w-24\`} />
          <div className={\`\${BASE} h-5 w-16\`} />
        </div>
      </div>
    )
  }

  if (variant === 'text' && lines > 1) {
    return (
      <div className={['flex flex-col gap-2', className].join(' ')} aria-hidden="true">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={BASE}
            style={{ height: 12, width: i === lines - 1 ? '66%' : '100%' }}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={[BASE, className].join(' ')}
      style={{ height: style.height ?? (variant === 'rect' ? 40 : 12), width: style.width ?? (variant === 'rect' ? '100%' : '80%') }}
      aria-hidden="true"
    />
  )
}

export default Skeleton
`})})})]})]})}function Pn(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(`activas`),[i,a]=(0,_.useState)(`info`);return(0,y.jsxs)(`section`,{id:`tabbar`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`TabBar`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Navegación por pestañas: variante underline y pill. Con badges de conteo.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-col gap-6`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] font-['Inter',sans-serif] mb-3`,children:`Underline (default)`}),(0,y.jsx)(pt,{items:[{id:`activas`,label:`Activas`,count:12},{id:`cerradas`,label:`Cerradas`,count:4},{id:`pendientes`,label:`Pendientes`}],activeId:n,onChange:r})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] font-['Inter',sans-serif] mb-3`,children:`Pill`}),(0,y.jsx)(pt,{items:[{id:`info`,label:`Ficha técnica`},{id:`ofertas`,label:`Historial de ofertas`},{id:`docs`,label:`Documentos`,disabled:!0}],activeId:i,onChange:a,variant:`pill`})]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`export interface TabItem {
  id: string
  label: string
  count?: number
  disabled?: boolean
}

export interface TabBarProps {
  items: TabItem[]
  activeId: string
  onChange: (id: string) => void
  variant?: 'underline' | 'pill'
  className?: string
}

export function TabBar({
  items,
  activeId,
  onChange,
  variant = 'underline',
  className = '',
}: TabBarProps) {
  if (variant === 'pill') {
    return (
      <div
        role="tablist"
        className={['inline-flex gap-1 p-1 rounded-[var(--radius-card)] bg-[var(--color-surface-input)]', className].join(' ')}
      >
        {items.map(item => (
          <button
            key={item.id}
            role="tab"
            type="button"
            id={\`tab-\${item.id}\`}
            aria-selected={item.id === activeId}
            aria-controls={\`panel-\${item.id}\`}
            disabled={item.disabled}
            onClick={() => onChange(item.id)}
            className={[
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-btn)]',
              'font-[var(--font-body)] font-[var(--weight-semibold)]',
              'transition-[background,color,box-shadow] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              'border-0 cursor-pointer outline-none',
              'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-action-primary)]',
              item.id === activeId
                ? 'bg-[var(--color-surface-card)] text-[var(--color-text-primary)] shadow-[var(--shadow-sm)]'
                : 'bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-body)]',
              item.disabled ? 'opacity-40 cursor-not-allowed' : '',
            ].filter(Boolean).join(' ')}
            style={{ fontSize: 'var(--type-body-sm-size)' }}
          >
            {item.label}
            {item.count !== undefined && (
              <span className={[
                'inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-semibold',
                item.id === activeId
                  ? 'bg-[var(--color-action-primary)] text-white'
                  : 'bg-[var(--gray-300)] text-[var(--gray-600)]',
              ].join(' ')}>
                {item.count}
              </span>
            )}
          </button>
        ))}
      </div>
    )
  }

  // Underline variant (default)
  return (
    <div
      role="tablist"
      className={['flex border-b border-[var(--color-border-ghost)]', className].join(' ')}
    >
      {items.map(item => (
        <button
          key={item.id}
          role="tab"
          type="button"
          id={\`tab-\${item.id}\`}
          aria-selected={item.id === activeId}
          aria-controls={\`panel-\${item.id}\`}
          disabled={item.disabled}
          onClick={() => onChange(item.id)}
          className={[
            'inline-flex items-center gap-1.5 px-4 py-2.5 -mb-px',
            'font-[var(--font-body)] font-[var(--weight-semibold)]',
            'transition-[color,border-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
            'border-b-2 border-transparent',
            'bg-transparent cursor-pointer outline-none',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
            item.id === activeId
              ? 'border-[var(--color-action-primary)] text-[var(--color-action-primary)]'
              : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-body)]',
            item.disabled ? 'opacity-40 cursor-not-allowed' : '',
          ].filter(Boolean).join(' ')}
          style={{ fontSize: 'var(--type-body-sm-size)' }}
        >
          {item.label}
          {item.count !== undefined && (
            <span className={[
              'inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-semibold',
              item.id === activeId
                ? 'bg-[var(--color-action-primary)] text-white'
                : 'bg-[var(--gray-300)] text-[var(--gray-600)]',
            ].join(' ')}>
              {item.count}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

export default TabBar
`})})})]})]})}function Fn(){let[e,t]=(0,_.useState)(!1),n=[{title:`¿Cómo funciona la subasta?`,content:`Las subastas VMC se realizan en tiempo real. Cada participante registra sus pujas y el sistema valida contra el mínimo vigente.`},{title:`¿Cuándo debo pagar?`,content:`El ganador tiene 48 horas hábiles para completar el pago. De lo contrario, el lote pasa al siguiente postor.`},{title:`¿Puedo cancelar una oferta?`,content:`No. Las pujas son vinculantes según el reglamento vigente de VMC Subastas.`,defaultOpen:!0}];return(0,y.jsxs)(`section`,{id:`accordion`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`Accordion`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Disclosure accesible con aria-expanded. Single o multi-panel. Chevron animado.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-col gap-6`,children:[(0,y.jsxs)(`div`,{className:`max-w-[480px]`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] font-['Inter',sans-serif] mb-3`,children:`Single open (default)`}),(0,y.jsx)(ht,{items:n})]}),(0,y.jsxs)(`div`,{className:`max-w-[480px]`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] font-['Inter',sans-serif] mb-3`,children:`Multi open`}),(0,y.jsx)(ht,{items:n,allowMultiple:!0})]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`import { useState, useId, type ReactNode } from 'react'

export interface AccordionItem {
  id?: string
  title: string
  content: ReactNode
  defaultOpen?: boolean
  disabled?: boolean
}

export interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
}

function AccordionPanel({
  id,
  title,
  content,
  isOpen,
  onToggle,
  disabled = false,
}: {
  id: string
  title: string
  content: ReactNode
  isOpen: boolean
  onToggle: () => void
  disabled?: boolean
}) {
  return (
    <div className="border-b border-[var(--color-border-ghost)] last:border-b-0">
      <button
        type="button"
        id={\`\${id}-trigger\`}
        aria-expanded={isOpen}
        aria-controls={\`\${id}-panel\`}
        disabled={disabled}
        onClick={onToggle}
        className={[
          'w-full flex items-center justify-between px-4 py-3.5 gap-3',
          'bg-transparent border-0 cursor-pointer text-left outline-none',
          'font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]',
          'transition-colors duration-[var(--duration-micro)]',
          'hover:bg-[var(--gray-50)]',
          'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--color-action-primary)]',
          disabled ? 'opacity-40 cursor-not-allowed' : '',
        ].filter(Boolean).join(' ')}
        style={{ fontSize: 'var(--type-body-sm-size)' }}
      >
        <span>{title}</span>
        <svg
          width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
          className={['shrink-0 text-[var(--color-text-muted)] transition-transform duration-[var(--duration-standard)]', isOpen ? 'rotate-180' : ''].join(' ')}
        >
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div
        id={\`\${id}-panel\`}
        role="region"
        aria-labelledby={\`\${id}-trigger\`}
        hidden={!isOpen}
        className="px-4 pb-4 font-[var(--font-body)] text-[var(--color-text-body)]"
        style={{ fontSize: 'var(--type-body-sm-size)' }}
      >
        {content}
      </div>
    </div>
  )
}

export function Accordion({ items, allowMultiple = false, className = '' }: AccordionProps) {
  const baseId = useId()

  const [openIds, setOpenIds] = useState<Set<string>>(() => {
    const initial = new Set<string>()
    items.forEach((item, i) => {
      if (item.defaultOpen) initial.add(item.id ?? \`\${baseId}-\${i}\`)
    })
    return initial
  })

  const toggle = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        if (!allowMultiple) next.clear()
        next.add(id)
      }
      return next
    })
  }

  return (
    <div
      className={[
        'bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] overflow-hidden',
        className,
      ].join(' ')}
    >
      {items.map((item, i) => {
        const id = item.id ?? \`\${baseId}-\${i}\`
        return (
          <AccordionPanel
            key={id}
            id={id}
            title={item.title}
            content={item.content}
            isOpen={openIds.has(id)}
            onToggle={() => toggle(id)}
            disabled={item.disabled}
          />
        )
      })}
    </div>
  )
}

export default Accordion
`})})})]})]})}function In(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`modal`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`Modal`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Dialog accesible con portal, backdrop blur, Escape, focus-trap header/footer opcionales.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-2`,children:[(0,y.jsx)(`button`,{type:`button`,onClick:()=>r(!0),className:`px-3 py-1.5 rounded-md bg-[var(--purple-700)] text-white text-[11px] font-semibold font-['Inter',sans-serif] border-0 cursor-pointer`,children:`Abrir sm`}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>a(!0),className:`px-3 py-1.5 rounded-md bg-[var(--purple-700)] text-white text-[11px] font-semibold font-['Inter',sans-serif] border-0 cursor-pointer`,children:`Abrir md`}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>s(!0),className:`px-3 py-1.5 rounded-md bg-[var(--purple-700)] text-white text-[11px] font-semibold font-['Inter',sans-serif] border-0 cursor-pointer`,children:`Abrir lg con footer`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`import { useEffect, useCallback, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export type ModalSize = 'sm' | 'md' | 'lg'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: ModalSize
  isDismissible?: boolean
  children: ReactNode
  footer?: ReactNode
}

const SIZE_CLASS: Record<ModalSize, string> = {
  sm: 'max-w-[400px]',
  md: 'max-w-[560px]',
  lg: 'max-w-[720px]',
}

export function Modal({
  isOpen,
  onClose,
  title,
  size = 'md',
  isDismissible = true,
  children,
  footer,
}: ModalProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isDismissible) onClose()
  }, [onClose, isDismissible])

  useEffect(() => {
    if (!isOpen) return
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKey])

  if (!isOpen) return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[var(--purple-900)]/60 backdrop-blur-[2px]"
        onClick={isDismissible ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className={[
        'relative w-full flex flex-col',
        SIZE_CLASS[size],
        'bg-[var(--color-surface-card)]',
        'rounded-[var(--radius-card)]',
        'shadow-[var(--shadow-lg)]',
        'max-h-[90dvh]',
      ].join(' ')}>

        {/* Header */}
        {(title || isDismissible) && (
          <div className="flex items-center justify-between px-6 py-4 shrink-0 border-b border-[var(--color-border-ghost)]">
            {title && (
              <h2
                id="modal-title"
                className="font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-primary)]"
                style={{ fontSize: 'var(--type-body-lg-size)' }}
              >
                {title}
              </h2>
            )}
            {isDismissible && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="shrink-0 ml-auto text-[var(--color-text-muted)] hover:text-[var(--color-text-on-surface)] border-0 bg-transparent cursor-pointer p-1 rounded transition-colors duration-[var(--duration-micro)]"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 font-[var(--font-body)] text-[var(--color-text-body)]"
          style={{ fontSize: 'var(--type-body-sm-size)' }}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="shrink-0 flex items-center justify-end gap-2 px-6 py-4 border-t border-[var(--color-border-ghost)]">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}

export default Modal
`})})})]}),(0,y.jsx)(ut,{isOpen:n,onClose:()=>r(!1),title:`Confirmar acción`,size:`sm`,children:(0,y.jsx)(`p`,{children:`¿Deseas retirar tu oferta de S/ 12,500 para el lote #A-0042?`})}),(0,y.jsxs)(ut,{isOpen:i,onClose:()=>a(!1),title:`Detalles del vehículo`,size:`md`,children:[(0,y.jsx)(`p`,{children:`Toyota Hilux 2022 · 4x4 · Diesel · 45,000 km · Estado: Bueno`}),(0,y.jsxs)(`p`,{className:`mt-3`,children:[`Precio base: `,(0,y.jsx)(`strong`,{children:`S/ 48,000`})]})]}),(0,y.jsxs)(ut,{isOpen:o,onClose:()=>s(!1),title:`Reglamento de subastas`,size:`lg`,footer:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`button`,{type:`button`,onClick:()=>s(!1),className:`px-4 py-2 rounded-[var(--radius-btn)] text-[var(--color-text-muted)] bg-transparent border border-[var(--color-border-ghost)] cursor-pointer text-[13px] font-['Inter',sans-serif]`,children:`Cerrar`}),(0,y.jsx)(`button`,{type:`button`,className:`px-4 py-2 rounded-[var(--radius-btn)] bg-[var(--purple-700)] text-white border-0 cursor-pointer text-[13px] font-semibold font-['Inter',sans-serif]`,children:`Aceptar`})]}),children:[(0,y.jsx)(`p`,{children:`Las pujas realizadas en VMC Subastas son vinculantes. Al ofertar, el participante acepta las condiciones del lote y se compromete a completar el pago en el plazo indicado.`}),(0,y.jsx)(`p`,{className:`mt-3`,children:`El ganador debe presentar DNI o RUC vigente junto con el comprobante de pago.`})]})]})}function Ln(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)({});return(0,y.jsxs)(`section`,{id:`filter-bar`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`FilterBar`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Barra de filtros para el catálogo: búsqueda, tipo, marca, precio, estado.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsx)(`div`,{className:`p-4 bg-[var(--gray-50)]`,children:(0,y.jsx)(Ct,{value:n,onChange:r,onReset:()=>r({})})}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`import type { BadgeType } from '../Badge/Badge'

export interface FilterBarValue {
  search?: string
  tipo?: string
  marca?: string
  precioMin?: string
  precioMax?: string
  status?: BadgeType | ''
}

export interface FilterBarProps {
  value?: FilterBarValue
  onChange?: (value: FilterBarValue) => void
  onReset?: () => void
  className?: string
}

const TIPOS = ['Automóvil', 'Camioneta', 'Camión', 'Bus', 'Moto']
const MARCAS = ['Toyota', 'Hyundai', 'Kia', 'Nissan', 'Ford', 'Chevrolet', 'Volkswagen']
const PRECIOS = [
  { label: 'Hasta S/ 20,000', value: '0-20000' },
  { label: 'S/ 20,000 – 50,000', value: '20000-50000' },
  { label: 'S/ 50,000 – 100,000', value: '50000-100000' },
  { label: 'Más de S/ 100,000', value: '100000-' },
]
const ESTADOS: { label: string; value: BadgeType | '' }[] = [
  { label: 'Todos',       value: ''          },
  { label: 'En vivo',     value: 'live'      },
  { label: 'Próximamente',value: 'upcoming'  },
  { label: 'Negociable',  value: 'negotiable'},
  { label: 'Cerrado',     value: 'closed'    },
]

const SELECT_CLS = [
  'h-9 pl-3 pr-8 appearance-none',
  'rounded-[var(--radius-btn)]',
  'bg-[var(--color-surface-input)]',
  'font-[var(--font-body)] text-[var(--color-text-on-surface)]',
  'border-0 outline-none cursor-pointer',
  'transition-[box-shadow] duration-[var(--duration-micro)]',
  'focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]',
].join(' ')

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 4.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

export function FilterBar({ value = {}, onChange, onReset, className = '' }: FilterBarProps) {
  const set = (patch: Partial<FilterBarValue>) => onChange?.({ ...value, ...patch })
  const hasFilters = Object.values(value).some(v => v && v !== '')

  return (
    <div className={['flex flex-wrap items-center gap-2 p-3 bg-[var(--color-surface-card)] rounded-[var(--radius-card)] shadow-[var(--shadow-sm)]', className].join(' ')}>

      {/* Search */}
      <div className="relative flex items-center min-w-[180px] flex-1">
        <span className="absolute left-2.5 text-[var(--color-text-muted)] pointer-events-none"><SearchIcon /></span>
        <input
          type="search"
          placeholder="Buscar lote o vehículo..."
          value={value.search ?? ''}
          onChange={e => set({ search: e.target.value })}
          className={[
            'w-full h-9 pl-8 pr-3',
            'rounded-[var(--radius-btn)]',
            'bg-[var(--color-surface-input)]',
            'font-[var(--font-body)] text-[var(--color-text-on-surface)]',
            'border-0 outline-none',
            'placeholder:text-[var(--color-text-muted)]',
            'transition-[box-shadow] duration-[var(--duration-micro)]',
            'focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]',
            '[&::-webkit-search-cancel-button]:hidden',
          ].join(' ')}
          style={{ fontSize: 'var(--type-body-sm-size)' }}
        />
      </div>

      <div className="h-5 w-px bg-[var(--color-border-ghost)] hidden sm:block" aria-hidden="true" />

      {/* Tipo */}
      <div className="relative">
        <select value={value.tipo ?? ''} onChange={e => set({ tipo: e.target.value })}
          className={SELECT_CLS} style={{ fontSize: 'var(--type-body-sm-size)' }}>
          <option value="">Tipo</option>
          {TIPOS.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]"><ChevronIcon /></span>
      </div>

      {/* Marca */}
      <div className="relative">
        <select value={value.marca ?? ''} onChange={e => set({ marca: e.target.value })}
          className={SELECT_CLS} style={{ fontSize: 'var(--type-body-sm-size)' }}>
          <option value="">Marca</option>
          {MARCAS.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]"><ChevronIcon /></span>
      </div>

      {/* Precio */}
      <div className="relative">
        <select value={value.precioMin ? \`\${value.precioMin}-\${value.precioMax ?? ''}\` : ''} onChange={e => {
          const [min, max] = e.target.value.split('-')
          set({ precioMin: min, precioMax: max })
        }} className={SELECT_CLS} style={{ fontSize: 'var(--type-body-sm-size)' }}>
          <option value="">Precio</option>
          {PRECIOS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
        </select>
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]"><ChevronIcon /></span>
      </div>

      {/* Estado */}
      <div className="relative">
        <select value={value.status ?? ''} onChange={e => set({ status: e.target.value as BadgeType | '' })}
          className={SELECT_CLS} style={{ fontSize: 'var(--type-body-sm-size)' }}>
          {ESTADOS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]"><ChevronIcon /></span>
      </div>

      {/* Reset */}
      {hasFilters && (
        <button type="button" onClick={onReset}
          className="h-9 px-3 rounded-[var(--radius-btn)] text-[var(--color-text-muted)] hover:text-[var(--color-text-body)] bg-transparent border-0 cursor-pointer transition-colors duration-[var(--duration-micro)] font-[var(--font-body)]"
          style={{ fontSize: 'var(--type-body-sm-size)' }}>
          Limpiar
        </button>
      )}
    </div>
  )
}

export default FilterBar
`})})})]})]})}function Rn(){let[e,t]=(0,_.useState)(!1),n=Date.now()+2700*1e3;return(0,y.jsxs)(`section`,{id:`auction-status-banner`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`AuctionStatusBanner`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Banda de estado con countdown en tiempo real. 6 variantes de estado.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 p-4 bg-[var(--gray-50)]`,children:[(0,y.jsx)(Dt,{status:`live`,lotId:`A-0042`,lotTitle:`Toyota Hilux 2022 · 4x4 Diesel`,endsAt:n}),(0,y.jsx)(Dt,{status:`upcoming`,lotId:`A-0043`,lotTitle:`Hyundai Tucson 2023 · Automática`,endsAt:Date.now()+7200*1e3}),(0,y.jsx)(Dt,{status:`negotiable`,lotId:`A-0044`,lotTitle:`Kia Sportage 2021`}),(0,y.jsx)(Dt,{status:`closed`,lotId:`A-0040`,lotTitle:`Nissan Frontier 2020`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`import type { BadgeType } from '../Badge/Badge'

export interface AuctionStatusBannerProps {
  status: BadgeType
  lotId?: string
  lotTitle?: string
  /** ISO string or timestamp — shown when status is 'live' or 'upcoming' */
  endsAt?: number | Date
  className?: string
}

const CONFIG: Record<BadgeType, { bg: string; text: string; label: string; dot?: boolean }> = {
  live:       { bg: 'var(--color-brand-live)',    text: 'var(--purple-900)', label: 'EN VIVO',      dot: true },
  upcoming:   { bg: 'var(--color-action-primary)', text: 'white',            label: 'PRÓXIMAMENTE'           },
  negotiable: { bg: 'var(--cyan-500)',             text: 'var(--purple-900)', label: 'NEGOCIABLE'            },
  closed:     { bg: 'var(--gray-400)',             text: 'white',            label: 'CERRADO'               },
  new:        { bg: 'var(--purple-700)',           text: 'white',            label: 'NUEVO'                 },
  featured:   { bg: 'var(--purple-900)',           text: 'white',            label: 'DESTACADO'             },
}

function pad(n: number) { return String(n).padStart(2, '0') }
function formatDuration(ms: number) {
  if (ms <= 0) return '00:00:00'
  const s = Math.floor(ms / 1000)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  return \`\${pad(h)}:\${pad(m)}:\${pad(sec)}\`
}

import { useState, useEffect } from 'react'

export function AuctionStatusBanner({
  status,
  lotId,
  lotTitle,
  endsAt,
  className = '',
}: AuctionStatusBannerProps) {
  const { bg, text, label, dot } = CONFIG[status]

  const [remaining, setRemaining] = useState(() =>
    endsAt ? Math.max(0, Number(endsAt instanceof Date ? endsAt : new Date(endsAt)) - Date.now()) : 0
  )

  useEffect(() => {
    if (!endsAt || status === 'closed') return
    const interval = setInterval(() => {
      setRemaining(Math.max(0, Number(endsAt instanceof Date ? endsAt : new Date(endsAt)) - Date.now()))
    }, 1000)
    return () => clearInterval(interval)
  }, [endsAt, status])

  return (
    <div
      role="status"
      aria-live="polite"
      className={['flex items-center gap-3 px-4 py-2.5', className].join(' ')}
      style={{ background: bg, color: text }}
    >
      {/* Status badge */}
      <div className="flex items-center gap-1.5 shrink-0">
        {dot && (
          <span className="size-2 rounded-full bg-current animate-pulse" aria-hidden="true" />
        )}
        <span className="font-[var(--font-body)] font-[var(--weight-bold)] uppercase tracking-[var(--tracking-wider)]"
          style={{ fontSize: 'var(--type-label-size)' }}>
          {label}
        </span>
      </div>

      {lotId && (
        <>
          <span className="opacity-40 select-none" aria-hidden="true">|</span>
          <span className="font-[var(--font-body)] opacity-70 shrink-0"
            style={{ fontSize: 'var(--type-label-size)' }}>
            Lote #{lotId}
          </span>
        </>
      )}

      {lotTitle && (
        <span className="font-[var(--font-body)] font-[var(--weight-semibold)] truncate flex-1"
          style={{ fontSize: 'var(--type-body-sm-size)' }}>
          {lotTitle}
        </span>
      )}

      {endsAt && status !== 'closed' && (
        <span
          className="ml-auto shrink-0 font-[var(--font-mono)] font-[var(--weight-medium)] tabular-nums"
          style={{ fontSize: 'var(--type-body-sm-size)' }}
          aria-label={\`Tiempo restante: \${formatDuration(remaining)}\`}
        >
          {formatDuration(remaining)}
        </span>
      )}
    </div>
  )
}

export default AuctionStatusBanner
`})})})]})]})}function zn(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`vehicle-specs-row`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`VehicleSpecsRow`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Grid de especificaciones técnicas del vehículo. VIN en Roboto Mono.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsx)(`div`,{className:`p-6 bg-[var(--gray-50)]`,children:(0,y.jsx)(kt,{specs:[{icon:`year`,label:`Año`,value:`2022`},{icon:`km`,label:`Kilometraje`,value:`45,200 km`},{icon:`fuel`,label:`Combustible`,value:`Diésel`},{icon:`transmission`,label:`Transmisión`,value:`Automática`},{icon:`engine`,label:`Motor`,value:`2.8L 4 cil`},{icon:`doors`,label:`Puertas`,value:`4`},{icon:`color`,label:`Color`,value:`Blanco`},{icon:`vin`,label:`VIN`,value:`MR1FZ29G5N0123456`}]})}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`export interface VehicleSpec {
  icon: 'year' | 'km' | 'fuel' | 'transmission' | 'color' | 'engine' | 'doors' | 'vin'
  label: string
  value: string
}

import type React from 'react'

export interface VehicleSpecsRowProps {
  specs: VehicleSpec[]
  className?: string
}

const ICONS: Record<VehicleSpec['icon'], React.ReactElement> = {
  year: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M1.5 5.5h11" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M4.5 1v3M9.5 1v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  km: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M7 7l3-2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="7" cy="7" r="1" fill="currentColor"/>
    </svg>
  ),
  fuel: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 12V3a1 1 0 011-1h4a1 1 0 011 1v4l2-1v4a1 1 0 01-1 1H3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M3 7h5" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
  transmission: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="3" cy="3" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="11" cy="3" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="7" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M3 4.5v3M11 4.5v3M3 7.5L7 9.5M11 7.5L7 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  color: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="6" r="4" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M7 10v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  engine: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M1 6h2M11 6h2M5 4V2M9 4V2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  doors: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="3" y="1.5" width="8" height="11" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="9.5" cy="7" r="0.8" fill="currentColor"/>
    </svg>
  ),
  vin: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1.5" y="3" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M4 6h6M4 8.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
}

export function VehicleSpecsRow({ specs, className = '' }: VehicleSpecsRowProps) {
  return (
    <div className={['flex flex-wrap gap-x-6 gap-y-3', className].join(' ')}>
      {specs.map((spec) => (
        <div key={spec.icon + spec.label} className="flex items-center gap-2">
          <span className="text-[var(--color-text-muted)] shrink-0">
            {ICONS[spec.icon]}
          </span>
          <div className="flex flex-col leading-none gap-0.5">
            <span
              className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)] tracking-[var(--tracking-wider)]"
              style={{ fontSize: '9px' }}
            >
              {spec.label}
            </span>
            <span
              className={[
                'font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]',
                spec.icon === 'vin' ? 'font-[var(--font-mono)]' : '',
              ].filter(Boolean).join(' ')}
              style={{ fontSize: 'var(--type-body-sm-size)' }}
            >
              {spec.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VehicleSpecsRow
`})})})]})]})}function Bn(){let[e,t]=(0,_.useState)(!1),n=Date.now(),r=[{id:`1`,bidder:`Carlos Paredes`,amount:52500,placedAt:new Date(n-3e4),isWinning:!0},{id:`2`,bidder:`Ana Torres`,amount:5e4,placedAt:new Date(n-12e4),isWinning:!1},{id:`3`,bidder:`Roberto Mendoza`,amount:48e3,placedAt:new Date(n-3e5),isWinning:!1,isAnonymous:!0},{id:`4`,bidder:`Lucía Fernández`,amount:46e3,placedAt:new Date(n-6e5),isWinning:!1},{id:`5`,bidder:`Jorge Huanca`,amount:44e3,placedAt:new Date(n-9e5),isWinning:!1},{id:`6`,bidder:`María Quispe`,amount:42e3,placedAt:new Date(n-12e5),isWinning:!1}];return(0,y.jsxs)(`section`,{id:`bid-history-list`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`BidHistoryList`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Historial de pujas: mayor oferta destacada, avatares, tiempo relativo, anonimización.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start`,children:[(0,y.jsx)(Ft,{bids:r,maxVisible:4,className:`w-[320px]`}),(0,y.jsx)(Ft,{bids:[],className:`w-[280px]`}),(0,y.jsx)(Ft,{bids:r,isLoading:!0,className:`w-[280px]`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`export interface BidEntry {
  id: string
  bidder: string
  /** Iniciales para el avatar — si no se pasan se generan desde bidder */
  initials?: string
  amount: number
  currency?: string
  /** ISO timestamp */
  placedAt: string | Date
  isWinning?: boolean
  isAnonymous?: boolean
}

export interface BidHistoryListProps {
  bids: BidEntry[]
  maxVisible?: number
  isLoading?: boolean
  className?: string
}

function timeAgo(date: string | Date): string {
  const diff = Math.floor((Date.now() - new Date(date).getTime()) / 1000)
  if (diff < 60)  return \`hace \${diff}s\`
  if (diff < 3600) return \`hace \${Math.floor(diff / 60)}m\`
  return \`hace \${Math.floor(diff / 3600)}h\`
}

function getInitials(name: string): string {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

function maskName(name: string): string {
  const parts = name.split(' ')
  return parts.map((p, i) => i === 0 ? p : p[0] + '***').join(' ')
}

function Avatar({ initials, isWinning }: { initials: string; isWinning?: boolean }) {
  return (
    <div className={[
      'size-8 rounded-full flex items-center justify-center shrink-0 select-none',
      'font-[var(--font-body)] font-[var(--weight-bold)]',
      isWinning
        ? 'bg-[var(--color-action-primary)] text-white'
        : 'bg-[var(--gray-200)] text-[var(--gray-500)]',
    ].join(' ')}
    style={{ fontSize: '11px' }}>
      {initials}
    </div>
  )
}

function SkeletonRow() {
  return (
    <div className="flex items-center gap-3 py-2.5">
      <div className="size-8 rounded-full bg-[var(--gray-200)] animate-pulse shrink-0" />
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="h-2.5 w-28 bg-[var(--gray-200)] rounded animate-pulse" />
        <div className="h-2 w-16 bg-[var(--gray-200)] rounded animate-pulse" />
      </div>
      <div className="h-4 w-20 bg-[var(--gray-200)] rounded animate-pulse" />
    </div>
  )
}

export function BidHistoryList({
  bids,
  maxVisible = 5,
  isLoading = false,
  className = '',
}: BidHistoryListProps) {
  const visible = bids.slice(0, maxVisible)

  return (
    <div className={['bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] overflow-hidden', className].join(' ')}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-ghost)]">
        <h3 className="font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]"
          style={{ fontSize: 'var(--type-body-sm-size)' }}>
          Historial de ofertas
        </h3>
        {bids.length > 0 && (
          <span className="font-[var(--font-body)] text-[var(--color-text-muted)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            {bids.length} {bids.length === 1 ? 'oferta' : 'ofertas'}
          </span>
        )}
      </div>

      {/* List */}
      <div className="divide-y divide-[var(--color-border-ghost)]">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => <div key={i} className="px-4"><SkeletonRow /></div>)
          : visible.length === 0
            ? (
              <div className="px-4 py-8 text-center font-[var(--font-body)] text-[var(--color-text-muted)]"
                style={{ fontSize: 'var(--type-body-sm-size)' }}>
                Sin ofertas aún. ¡Sé el primero!
              </div>
            )
            : visible.map((bid, i) => {
              const initials = bid.initials ?? getInitials(bid.bidder)
              const displayName = bid.isAnonymous ? maskName(bid.bidder) : bid.bidder
              const currency = bid.currency ?? 'S/'
              return (
                <div key={bid.id} className={['flex items-center gap-3 px-4 py-2.5', i === 0 && bid.isWinning !== false ? 'bg-[oklch(0.761_0.130_197.000_/_0.04)]' : ''].join(' ')}>
                  <Avatar initials={initials} isWinning={i === 0} />
                  <div className="flex-1 min-w-0">
                    <p className="font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)] truncate"
                      style={{ fontSize: 'var(--type-body-sm-size)' }}>
                      {displayName}
                      {i === 0 && (
                        <span className="ml-1.5 text-[var(--color-action-primary)]" style={{ fontSize: '10px' }}>▲ Mayor oferta</span>
                      )}
                    </p>
                    <p className="font-[var(--font-body)] text-[var(--color-text-muted)]"
                      style={{ fontSize: 'var(--type-label-size)' }}>
                      {timeAgo(bid.placedAt)}
                    </p>
                  </div>
                  <span
                    className="font-[var(--font-mono)] font-[var(--weight-medium)] tabular-nums shrink-0"
                    style={{
                      fontSize: i === 0 ? 'var(--type-body-size)' : 'var(--type-body-sm-size)',
                      color: i === 0 ? 'var(--color-action-primary)' : 'var(--color-text-body)',
                    }}
                  >
                    {currency} {bid.amount.toLocaleString('es-PE')}
                  </span>
                </div>
              )
            })
        }
      </div>

      {!isLoading && bids.length > maxVisible && (
        <div className="px-4 py-2.5 border-t border-[var(--color-border-ghost)] text-center">
          <span className="font-[var(--font-body)] text-[var(--color-text-muted)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            +{bids.length - maxVisible} ofertas anteriores
          </span>
        </div>
      )}
    </div>
  )
}

export default BidHistoryList
`})})})]})]})}function Vn(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`vehicle-image-gallery`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`VehicleImageGallery`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Galería con imagen principal, flechas de navegación, miniaturas y contador.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-6 items-start`,children:[(0,y.jsx)(It,{images:[{src:`https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80`,alt:`Toyota Hilux frontal`},{src:`https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80`,alt:`Toyota Hilux lateral`},{src:`https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80`,alt:`Toyota Hilux trasera`},{src:`https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=800&q=80`,alt:`Interior`}],className:`w-[400px]`}),(0,y.jsx)(It,{images:[],className:`w-[240px]`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`import { useState } from 'react'

export interface GalleryImage {
  src: string
  alt: string
}

export interface VehicleImageGalleryProps {
  images: GalleryImage[]
  className?: string
}

export function VehicleImageGallery({ images, className = '' }: VehicleImageGalleryProps) {
  const [active, setActive] = useState(0)

  if (images.length === 0) {
    return (
      <div className={['flex items-center justify-center bg-[var(--gray-100)] rounded-[var(--radius-card)] aspect-video', className].join(' ')}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[var(--gray-300)]">
          <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="16" cy="19" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 34l10-10 8 8 6-6 16 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      </div>
    )
  }

  const prev = () => setActive(i => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setActive(i => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className={['flex flex-col gap-2', className].join(' ')}>
      {/* Main image */}
      <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--gray-100)] aspect-video">
        <img
          src={images[active].src}
          alt={images[active].alt}
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* Counter */}
        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[var(--purple-900)]/60 backdrop-blur-[4px]">
          <span className="font-[var(--font-body)] text-white" style={{ fontSize: '11px' }}>
            {active + 1} / {images.length}
          </span>
        </div>

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button" onClick={prev} aria-label="Imagen anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 size-8 flex items-center justify-center rounded-full bg-[var(--purple-900)]/50 backdrop-blur-[4px] text-white border-0 cursor-pointer hover:bg-[var(--purple-900)]/75 transition-colors duration-[var(--duration-micro)]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              type="button" onClick={next} aria-label="Siguiente imagen"
              className="absolute right-2 top-1/2 -translate-y-1/2 size-8 flex items-center justify-center rounded-full bg-[var(--purple-900)]/50 backdrop-blur-[4px] text-white border-0 cursor-pointer hover:bg-[var(--purple-900)]/75 transition-colors duration-[var(--duration-micro)]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 11l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-0.5" role="tablist" aria-label="Miniaturas">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={img.alt}
              onClick={() => setActive(i)}
              className={[
                'shrink-0 size-14 rounded-[var(--radius-btn)] overflow-hidden border-2 cursor-pointer transition-[border-color,opacity] duration-[var(--duration-micro)]',
                i === active
                  ? 'border-[var(--color-action-primary)] opacity-100'
                  : 'border-transparent opacity-60 hover:opacity-90',
              ].join(' ')}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" draggable={false} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default VehicleImageGallery
`})})})]})]})}function Hn(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`seller-card`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`SellerCard`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Card del subastador con avatar, rating, stats y contacto.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start`,children:[(0,y.jsx)(zt,{name:`VMC Subastas Lima`,role:`Subastador oficial`,rating:4.8,totalAuctions:312,phone:`+51 1 234 5678`,email:`subastas@vmc.pe`,isVerified:!0,className:`w-[260px]`}),(0,y.jsx)(zt,{name:`Carlos Herrera`,role:`Agente autorizado`,rating:3.5,totalAuctions:47,className:`w-[220px]`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`export interface SellerCardProps {
  name: string
  role?: string
  logoUrl?: string
  initials?: string
  rating?: number
  totalAuctions?: number
  phone?: string
  email?: string
  isVerified?: boolean
  className?: string
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M6 1l1.5 3 3.5.5-2.5 2.5.6 3.5L6 9 2.9 10.5l.6-3.5L1 4.5 4.5 4z"
        fill={filled ? 'var(--color-brand-live)' : 'var(--gray-200)'}
        stroke={filled ? 'var(--color-brand-live)' : 'var(--gray-300)'}
        strokeWidth="0.8"
      />
    </svg>
  )
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10" title="Vendedor verificado">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <circle cx="5" cy="5" r="4.5" fill="oklch(0.637 0.207 145)" />
        <path d="M3 5l1.5 1.5 3-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-emerald-600 font-[var(--font-body)] font-[var(--weight-semibold)]" style={{ fontSize: '9px' }}>Verificado</span>
    </span>
  )
}

export function SellerCard({
  name,
  role = 'Subastador',
  logoUrl,
  initials,
  rating,
  totalAuctions,
  phone,
  email,
  isVerified = false,
  className = '',
}: SellerCardProps) {
  const avatarInitials = initials ?? name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()

  return (
    <div className={[
      'bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] p-4',
      className,
    ].join(' ')}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        {logoUrl ? (
          <img src={logoUrl} alt={name} className="size-12 rounded-full object-cover shrink-0 border border-[var(--color-border-ghost)]" />
        ) : (
          <div className="size-12 rounded-full bg-[var(--color-action-primary)] flex items-center justify-center shrink-0 select-none">
            <span className="font-[var(--font-body)] font-[var(--weight-bold)] text-white" style={{ fontSize: '16px' }}>{avatarInitials}</span>
          </div>
        )}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-body)] truncate"
              style={{ fontSize: 'var(--type-body-sm-size)' }}>
              {name}
            </h3>
            {isVerified && <VerifiedBadge />}
          </div>
          <p className="font-[var(--font-body)] text-[var(--color-text-muted)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            {role}
          </p>
        </div>
      </div>

      {/* Stats */}
      {(rating !== undefined || totalAuctions !== undefined) && (
        <div className="flex items-center gap-4 mb-3 py-2.5 border-y border-[var(--color-border-ghost)]">
          {rating !== undefined && (
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < Math.round(rating)} />
                ))}
              </div>
              <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>
                {rating.toFixed(1)} / 5.0
              </span>
            </div>
          )}
          {totalAuctions !== undefined && (
            <div className="flex flex-col gap-0.5">
              <span className="font-[var(--font-mono)] font-[var(--weight-bold)] text-[var(--color-text-body)] tabular-nums"
                style={{ fontSize: 'var(--type-body-sm-size)' }}>
                {totalAuctions.toLocaleString('es-PE')}
              </span>
              <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>
                subastas
              </span>
            </div>
          )}
        </div>
      )}

      {/* Contact */}
      {(phone || email) && (
        <div className="flex flex-col gap-2">
          {phone && (
            <a href={\`tel:\${phone}\`}
              className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-body)] no-underline transition-colors duration-[var(--duration-micro)]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2 2h3l1.5 3L5 6.5c1 1.8 2.7 3.5 4.5 4.5L11 9.5l3 1.5v3a1 1 0 01-1 1A16 16 0 011 1a1 1 0 011-1h0z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <span className="font-[var(--font-body)]" style={{ fontSize: 'var(--type-body-sm-size)' }}>{phone}</span>
            </a>
          )}
          {email && (
            <a href={\`mailto:\${email}\`}
              className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-body)] no-underline transition-colors duration-[var(--duration-micro)]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <rect x="1" y="2.5" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M1 4.5l5.5 3.5L12 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <span className="font-[var(--font-body)] truncate" style={{ fontSize: 'var(--type-body-sm-size)' }}>{email}</span>
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default SellerCard
`})})})]})]})}function Un(){let[e,t]=(0,_.useState)(!1),n=Date.now()+1380*1e3;return(0,y.jsxs)(`section`,{id:`auction-summary-widget`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`AuctionSummaryWidget`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Widget lateral completo: precio actual, countdown, BidForm integrado. Variantes por estado.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] font-['Inter',sans-serif] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start`,children:[(0,y.jsx)(Bt,{lotId:`A-0042`,title:`Toyota Hilux 2022`,subtitle:`4x4 · Diésel · 45,200 km`,status:`live`,currentPrice:52500,startingPrice:48e3,endsAt:n,minimumBid:53e3,totalBids:6,className:`w-[300px]`}),(0,y.jsx)(Bt,{lotId:`A-0043`,title:`Hyundai Tucson 2023`,subtitle:`FWD · Gasolina · 12,000 km`,status:`upcoming`,currentPrice:68e3,endsAt:Date.now()+2*3600*1e3,minimumBid:68e3,className:`w-[300px]`}),(0,y.jsx)(Bt,{lotId:`A-0040`,title:`Nissan Frontier 2020`,subtitle:`4x2 · Diésel · 78,000 km`,status:`closed`,currentPrice:38500,endsAt:Date.now()-1e3,minimumBid:39e3,totalBids:4,className:`w-[300px]`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(k,{code:`import { CountdownTimer } from '../CountdownTimer'
import { PriceDisplay } from '../PriceDisplay'
import { BidForm } from '../BidForm'
import { Badge, type BadgeType } from '../Badge/Badge'

export interface AuctionSummaryWidgetProps {
  lotId: string
  title: string
  subtitle?: string
  status: BadgeType
  currentPrice: number
  startingPrice?: number
  currency?: string
  endsAt: number | Date
  minimumBid: number
  totalBids?: number
  onSubmitBid?: (amount: number, lotId?: string) => Promise<void>
  className?: string
}

export function AuctionSummaryWidget({
  lotId,
  title,
  subtitle,
  status,
  currentPrice,
  startingPrice,
  currency = 'S/',
  endsAt,
  minimumBid,
  totalBids,
  onSubmitBid,
  className = '',
}: AuctionSummaryWidgetProps) {
  const isLive   = status === 'live'
  const isClosed = status === 'closed'

  return (
    <div className={['bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] shadow-[var(--shadow-brand-tinted)] overflow-hidden', className].join(' ')}>
      {/* Status strip */}
      <div className={[
        'px-4 py-2 flex items-center gap-2',
        isLive   ? 'bg-[var(--color-brand-live)]'     :
        isClosed ? 'bg-[var(--gray-400)]'             :
        'bg-[var(--color-action-primary)]',
      ].join(' ')}>
        <Badge type={status} size="sm" />
        <span className="font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--purple-900)] uppercase tracking-[var(--tracking-wider)]"
          style={{ fontSize: 'var(--type-label-size)' }}>
          Lote #{lotId}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {/* Title */}
        <div>
          <h2 className="font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-primary)] leading-snug"
            style={{ fontSize: 'var(--type-body-lg-size)' }}>
            {title}
          </h2>
          {subtitle && (
            <p className="font-[var(--font-body)] text-[var(--color-text-muted)] mt-0.5"
              style={{ fontSize: 'var(--type-body-sm-size)' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Price */}
        <div className="flex items-end justify-between gap-3">
          <PriceDisplay
            context="hero"
            label={isLive ? 'OFERTA ACTUAL' : 'PRECIO BASE'}
            amount={currentPrice}
            currency={currency}
          />
          {totalBids !== undefined && (
            <div className="text-right shrink-0">
              <span className="font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums text-[var(--color-text-body)]"
                style={{ fontSize: 'var(--type-body-sm-size)' }}>
                {totalBids}
              </span>
              <p className="font-[var(--font-body)] text-[var(--color-text-muted)]"
                style={{ fontSize: 'var(--type-label-size)' }}>
                {totalBids === 1 ? 'oferta' : 'ofertas'}
              </p>
            </div>
          )}
        </div>

        {startingPrice && isLive && (
          <div className="flex items-center gap-2 -mt-2">
            <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>
              Precio base:
            </span>
            <span className="font-[var(--font-mono)] tabular-nums text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>
              {currency} {startingPrice.toLocaleString('es-PE')}
            </span>
          </div>
        )}

        {/* Countdown */}
        {!isClosed && (
          <div className="flex items-center gap-2 py-2.5 border-y border-[var(--color-border-ghost)]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[var(--color-text-muted)] shrink-0">
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>
              {isLive ? 'Cierra en' : 'Inicia en'}
            </span>
            <CountdownTimer endsAt={endsAt} />
          </div>
        )}

        {/* Bid form or closed state */}
        {isClosed ? (
          <div className="py-3 text-center">
            <p className="font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-muted)]"
              style={{ fontSize: 'var(--type-body-sm-size)' }}>
              Subasta finalizada
            </p>
          </div>
        ) : (
          <BidForm
            lotId={lotId}
            minimumBid={minimumBid}
            currency={currency}
            onSubmit={onSubmitBid}
          />
        )}
      </div>
    </div>
  )
}

export default AuctionSummaryWidget
`})})})]})]})}function Wn(){let e=Tn.filter(e=>e.status===`done`).length,t=Tn.length;return(0,y.jsxs)(`header`,{className:`h-12 border-b border-[var(--gray-200)] flex items-center justify-between px-6 bg-white shrink-0`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`span`,{className:`text-[12px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`VMC Subastas — Design System`}),(0,y.jsx)(`span`,{className:`text-[var(--gray-300)] select-none`,children:`/`}),(0,y.jsx)(`span`,{className:`text-[12px] text-[var(--gray-500)] font-['Inter',sans-serif]`,children:`Documentación`})]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,y.jsx)(`div`,{className:`w-[80px] h-1.5 rounded-full bg-[var(--gray-100)] overflow-hidden`,children:(0,y.jsx)(`div`,{className:`h-full rounded-full bg-emerald-400 transition-all duration-500`,style:{width:`${Math.round(e/t*100)}%`}})}),(0,y.jsxs)(`span`,{className:`text-[11px] text-[var(--gray-400)] font-['Inter',sans-serif]`,children:[e,`/`,t,` listos`]})]}),(0,y.jsx)(`span`,{className:`text-[10px] font-mono text-[var(--gray-300)] border border-[var(--gray-200)] rounded px-1.5 py-0.5`,children:`v0.1`})]})]})}function Gn(){return(0,y.jsxs)(`div`,{className:`flex flex-col min-h-screen bg-white`,style:{maxWidth:`100%`},children:[(0,y.jsx)(Wn,{}),(0,y.jsxs)(`div`,{className:`flex flex-1 overflow-hidden`,children:[(0,y.jsx)(`div`,{className:`border-r border-[var(--gray-100)] bg-white`,children:(0,y.jsx)(Dn,{activeId:`tokens`})}),(0,y.jsx)(`main`,{className:`flex-1 overflow-y-auto bg-[var(--gray-50)]`,children:(0,y.jsxs)(`div`,{className:`max-w-[860px] mx-auto py-10 px-10`,children:[(0,y.jsxs)(`div`,{className:`mb-10`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--cyan-500)] font-['Inter',sans-serif] mb-1`,children:`Design System · Fase 3`}),(0,y.jsx)(`h1`,{className:`text-[28px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif] leading-tight mb-2`,children:`Documentación`}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] font-['Inter',sans-serif] leading-5`,children:`Tokens semánticos OKLCH · W3C DTCG · Componentes React + TypeScript + Tailwind v4. Cada componente incluye los 7 estados del CLAUDE.md.`})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-16`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`h2`,{className:`text-[18px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`Foundation`}),(0,y.jsx)(`p`,{className:`text-[12px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Tokens primitivos y semánticos extraídos de Figma y normalizados según CLAUDE.md.`})]}),(0,y.jsx)(rn,{})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`h2`,{className:`text-[18px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`Átomos`}),(0,y.jsx)(`p`,{className:`text-[12px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Unidades mínimas de UI. Sin dependencias de otros componentes.`})]}),(0,y.jsx)(un,{}),(0,y.jsx)(fn,{}),(0,y.jsx)(hn,{}),(0,y.jsx)(On,{}),(0,y.jsx)(kn,{}),(0,y.jsx)(An,{}),(0,y.jsx)(gn,{}),(0,y.jsx)(jn,{}),(0,y.jsx)(Mn,{})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`h2`,{className:`text-[18px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`Moléculas`}),(0,y.jsx)(`p`,{className:`text-[12px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Componentes compuestos por átomos. Unidad reutilizable con propósito definido.`})]}),(0,y.jsx)(Nn,{}),(0,y.jsx)(Pn,{}),(0,y.jsx)(Fn,{}),(0,y.jsx)(In,{}),(0,y.jsx)(vn,{}),(0,y.jsx)(yn,{}),(0,y.jsx)(wn,{})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`h2`,{className:`text-[18px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`Organismos`}),(0,y.jsx)(`p`,{className:`text-[12px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Secciones completas compuestas por moléculas y átomos.`})]}),(0,y.jsx)(Cn,{}),(0,y.jsx)(bn,{})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`h2`,{className:`text-[18px] font-bold text-[var(--purple-900)] font-['Inter',sans-serif]`,children:`Bloques`}),(0,y.jsx)(`p`,{className:`text-[12px] text-[var(--gray-400)] font-['Inter',sans-serif] mt-0.5`,children:`Bloques de negocio específicos de la plataforma VMC Subastas.`})]}),(0,y.jsx)(Ln,{}),(0,y.jsx)(Rn,{}),(0,y.jsx)(zn,{}),(0,y.jsx)(Bn,{}),(0,y.jsx)(Vn,{}),(0,y.jsx)(Hn,{}),(0,y.jsx)(Un,{})]})]})]})})]})]})}function Kn(){return(0,y.jsx)(Gn,{})}(0,g.createRoot)(document.getElementById(`root`)).render((0,y.jsx)(_.StrictMode,{children:(0,y.jsx)(Kn,{})}));