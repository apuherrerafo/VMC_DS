var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var S={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function re(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ie(e,t){return re(e.type,t,e.props)}function C(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(C(o)&&(o=ie(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},T={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=T,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return re(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return re(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=C,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,w)}catch(e){w(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.2.4`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,C());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}var ee=!1,te=-1,S=5,ne=-1;function re(){return g?!0:!(e.unstable_now()-ne<S)}function ie(){if(g=!1,ee){var t=e.unstable_now();ne=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&re());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?C():ee=!1}}}var C;if(typeof y==`function`)C=function(){y(ie)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=ie,C=function(){oe.postMessage(null)}}else C=function(){_(ie,0)};function se(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):S=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,C()))),r},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),ne=Symbol.for(`react.suspense`),re=Symbol.for(`react.suspense_list`),ie=Symbol.for(`react.memo`),C=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function ue(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ne:return`Suspense`;case re:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case te:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ie:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case C:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,w=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function he(e){return{current:e}}function E(e){0>me||(e.current=pe[me],pe[me]=null,me--)}function D(e,t){me++,pe[me]=e.current,e.current=t}var ge=he(null),_e=he(null),ve=he(null),ye=he(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}E(ge),D(ge,e)}function xe(){E(ge),E(_e),E(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(E(ge),E(_e)),ye.current===e&&(E(ye),Qf._currentValue=fe)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ht(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[_t])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function kt(e){var t=e[Ct];return t||=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function At(e){e[wt]=!0}var jt=new Set,Mt={};function Nt(e,t){Pt(e,t),Pt(e+`Capture`,t)}function Pt(e,t){for(Mt[e]=t,e=0;e<t.length;e++)jt.add(t[e])}var Ft=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),It={},Lt={};function Rt(e){return je.call(Lt,e)?!0:je.call(It,e)?!1:Ft.test(e)?Lt[e]=!0:(It[e]=!0,!1)}function zt(e,t,n){if(Rt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Bt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Vt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ht(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ut(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Wt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){if(!e._valueTracker){var t=Ut(e)?`checked`:`value`;e._valueTracker=Wt(e,t,``+e[t])}}function Kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ut(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function qt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Jt=/[\n"\\]/g;function Yt(e){return e.replace(Jt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Xt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ht(t)):e.value!==``+Ht(t)&&(e.value=``+Ht(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Qt(e,o,Ht(n)):Qt(e,o,Ht(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ht(s):e.removeAttribute(`name`)}function Zt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Gt(e);return}n=n==null?``:``+Ht(n),t=t==null?n:``+Ht(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Gt(e)}function Qt(e,t,n){t===`number`&&qt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function $t(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function en(e,t,n){if(t!=null&&(t=``+Ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ht(n)}function tn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(de(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ht(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Gt(e)}function nn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function an(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||rn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function on(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&an(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&an(e,o,t[o])}function sn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var cn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),ln=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function un(e){return ln.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function dn(){}var fn=null;function pn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mn=null,hn=null;function gn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Xt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Yt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[vt]||null;if(!a)throw Error(i(90));Xt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Kt(r)}break a;case`textarea`:en(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&$t(e,!!n.multiple,t,!1)}}}var _n=!1;function vn(e,t,n){if(_n)return e(t,n);_n=!0;try{return e(t)}finally{if(_n=!1,(mn!==null||hn!==null)&&(bu(),mn&&(t=mn,e=hn,hn=mn=null,gn(t),e)))for(t=0;t<e.length;t++)gn(e[t])}}function yn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var bn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),xn=!1;if(bn)try{var Sn={};Object.defineProperty(Sn,`passive`,{get:function(){xn=!0}}),window.addEventListener(`test`,Sn,Sn),window.removeEventListener(`test`,Sn,Sn)}catch{xn=!1}var Cn=null,wn=null,Tn=null;function En(){if(Tn)return Tn;var e,t=wn,n=t.length,r,i=`value`in Cn?Cn.value:Cn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Tn=i.slice(e,1<r?1-r:void 0)}function Dn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function kn(){return!1}function An(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?On:kn,this.isPropagationStopped=kn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mn=An(jn),Nn=h({},jn,{view:0,detail:0}),Pn=An(Nn),Fn,In,Ln,Rn=h({},Nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Ln&&(Ln&&e.type===`mousemove`?(Fn=e.screenX-Ln.screenX,In=e.screenY-Ln.screenY):In=Fn=0,Ln=e),Fn)},movementY:function(e){return`movementY`in e?e.movementY:In}}),zn=An(Rn),Bn=An(h({},Rn,{dataTransfer:0})),Vn=An(h({},Nn,{relatedTarget:0})),Hn=An(h({},jn,{animationName:0,elapsedTime:0,pseudoElement:0})),Un=An(h({},jn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Wn=An(h({},jn,{data:0})),Gn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Kn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qn[e])?!!t[e]:!1}function Yn(){return Jn}var Xn=An(h({},Nn,{key:function(e){if(e.key){var t=Gn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Dn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Kn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yn,charCode:function(e){return e.type===`keypress`?Dn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Dn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Zn=An(h({},Rn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Qn=An(h({},Nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yn})),$n=An(h({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0})),er=An(h({},Rn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),tr=An(h({},jn,{newState:0,oldState:0})),nr=[9,13,27,32],rr=bn&&`CompositionEvent`in window,ir=null;bn&&`documentMode`in document&&(ir=document.documentMode);var ar=bn&&`TextEvent`in window&&!ir,or=bn&&(!rr||ir&&8<ir&&11>=ir),sr=` `,cr=!1;function lr(e,t){switch(e){case`keyup`:return nr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ur(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var dr=!1;function fr(e,t){switch(e){case`compositionend`:return ur(t);case`keypress`:return t.which===32?(cr=!0,sr):null;case`textInput`:return e=t.data,e===sr&&cr?null:e;default:return null}}function O(e,t){if(dr)return e===`compositionend`||!rr&&lr(e,t)?(e=En(),Tn=wn=Cn=null,dr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return or&&t.locale!==`ko`?null:t.data;default:return null}}var pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!pr[e.type]:t===`textarea`}function hr(e,t,n,r){mn?hn?hn.push(r):hn=[r]:mn=r,t=Ed(t,`onChange`),0<t.length&&(n=new Mn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var gr=null,_r=null;function vr(e){yd(e,0)}function yr(e){if(Kt(Ot(e)))return e}function br(e,t){if(e===`change`)return t}var xr=!1;if(bn){var Sr;if(bn){var Cr=`oninput`in document;if(!Cr){var wr=document.createElement(`div`);wr.setAttribute(`oninput`,`return;`),Cr=typeof wr.oninput==`function`}Sr=Cr}else Sr=!1;xr=Sr&&(!document.documentMode||9<document.documentMode)}function Tr(){gr&&(gr.detachEvent(`onpropertychange`,Er),_r=gr=null)}function Er(e){if(e.propertyName===`value`&&yr(_r)){var t=[];hr(t,_r,e,pn(e)),vn(vr,t)}}function Dr(e,t,n){e===`focusin`?(Tr(),gr=t,_r=n,gr.attachEvent(`onpropertychange`,Er)):e===`focusout`&&Tr()}function Or(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return yr(_r)}function kr(e,t){if(e===`click`)return yr(t)}function k(e,t){if(e===`input`||e===`change`)return yr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=qt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=bn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==qt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new Mn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};bn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),Nt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)vi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=_i(31,n,t,a),e.elementType=ae,e.lanes=o,e;case y:return Si(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=_i(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ne:return e=_i(13,n,t,a),e.elementType=ne,e.lanes=o,e;case re:return e=_i(19,n,t,a),e.elementType=re,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:s=10;break a;case ee:s=9;break a;case S:s=11;break a;case ie:s=14;break a;case C:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=_i(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-Je(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(i(519));function Ki(e){throw Zi(Di(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),tn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function M(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){A=Hi=null,j=!1}function Xi(){var e=Ui;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ui=null),e}function Zi(e){Ui===null?Ui=[e]:Ui.push(e)}var Qi=he(null),$i=null,ea=null;function ta(e,t,n){D(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,E(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ra(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ra(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function aa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;jr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function N(e){return la($i,e)}function ca(e,t){return $i===null&&sa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(i(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,P={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=w.S;w.S=function(e,t){eu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=he(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?D(Ca,Ca.current):D(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(dn,dn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===C&&Na(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Si(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case C:return t=Na(t),f(e,t,n)}if(de(t)||ce(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===te)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case C:return n=Na(n),p(e,t,n,r)}if(de(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===te)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case C:return r=Na(r),m(e,t,n,r,i)}if(de(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===te)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),j&&Li(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),j&&Li(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===C&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=Si(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=xi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ti(o,e.mode,c),c.return=e,e=c}return s(e);case C:return o=Na(o),b(e,r,o,c)}if(de(o))return h(e,r,o,c);if(ce(o)){if(l=ce(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===te)return b(e,r,ca(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ci(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=he(null),io=he(0);function ao(e,t){e=Wl,D(io,e),D(ro,t),Wl=e|t.baseLanes}function oo(){D(io,Wl),D(ro,ro.current)}function so(){Wl=io.current,E(ro),E(io)}var co=he(null),lo=null;function uo(e){var t=e.alternate;D(F,F.current&1),D(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){D(F,F.current),D(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(D(F,F.current),D(co,e),lo===null&&(lo=e)):mo(e)}function mo(){D(F,F.current),D(co,co.current)}function ho(e){E(co),lo===e&&(lo=null),E(F)}var F=he(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){w.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&oa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,R=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}w.H=Ws,o=t(n,r)}while(yo);return o}function ko(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===te)return N(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!jr(o,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);jr(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=I,a=B(),o=j;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!jr((L||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function qo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};w.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(j){var n=K.formState;if(n!==null){a:{var r=I;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return jr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),jr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};w.T=s,Ls(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,fe,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return N(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),K===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Vs={readContext:N,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:N,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:N,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=No();if(j){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:N,use:Io,useCallback:xs,useContext:N,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:N,use:Io,useCallback:xs,useContext:N,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ai(e)}function Zs(e){console.error(e)}function Qs(e){ai(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(j)return t=co.current,t===null?(r!==Gi&&(t=Error(i(423),{cause:r}),Zi(Di(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Di(r,n),a=tc(e.stateNode,r,a),Za(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Gi&&(e=Error(i(422),{cause:r}),Zi(Di(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Di(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(j&&s&&zi(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(V||aa(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=K,r!==null&&(s=dt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,fi(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=o.treeContext,A=cf(s.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return sa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(j&&r&&zi(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(j&&r&&zi(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=N(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?N(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=N(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=N(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Yi(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(F.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(a?uo(t):mo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(mo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=Si(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=Si(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Zi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||aa(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=dt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(mo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,a,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ea():(l=P._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,D(F,o),oc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function Nc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ta(t,P,e.memoizedState.cache),Yi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ta(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}else V=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===S){t.tag=11,t=sc(null,t,e,r,n);break a}else if(a===ie){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=ue(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ta(t,P,r),r!==o.cache&&ia(t,[P],n,!0),$a(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==a){a=Di(Error(i(424)),t),Zi(a),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[_t]=t,r[vt]=e,Pd(r,n,e),At(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),Hi=t,Wi=!0,a=A,Zd(t.type)?(lf=a,A=cf(r.firstChild)):A=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((a=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?a=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,a=!0)),a||Ki(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return wc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,sa(t),a=N(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return sa(t),r=N(P),e===null?(a=wa(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),ta(t,P,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ta(t,P,r),r!==a.cache&&ia(t,[P],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Pa=Aa,Oa}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(P),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(M(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=ge.current,M(t)?qi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=ge.current,M(t))qi(t,o);else{var s=Bd(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[_t]=t,o[vt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,M(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Hi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[_t]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=M(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[_t]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=M(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[_t]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return xe(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return na(t.type),H(t),null;case 19:if(E(F),r=t.memoizedState,r===null)return H(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return D(F,F.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}else{if(!a)if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!j)return H(t),null}else 2*Ie()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=F.current,D(F,a?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&E(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(P),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(P),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(F),null;case 4:return xe(),null;case 10:return na(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&E(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Bi(t),t.tag){case 3:na(P),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:E(F);break;case 10:na(t.type);break;case 22:case 23:ho(t),so(),e!==null&&E(Ca);break;case 24:na(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[vt]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[_t]=e,t[vt]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[wt]||o[_t]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[_t]=e,At(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[_t]=e,At(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{nn(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||a,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(nn(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=N(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return N(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:w.T===null?mt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||j){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),Jl=e}else Jl=536870912;return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),st(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||rt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ie(),10<a)){if(yu(r,t,Jl,!Vl),nt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Ml(t,a,d);var m=(a&62914560)===a?$l-Ie():(a&4194048)===a?eu-Ie():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,ea=$i=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=yi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=rt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,li(),n}function Cu(e,t){I=null,w.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Di(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=w.H;return w.H=Vs,e===null?Vs:e}function Eu(){var e=w.A;return w.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,G=r,w.H=i,w.A=a,q===null&&(K=null,J=0,li()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Ie()+500,Su(e,t)):Hl=rt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ja(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,w.H=r,w.A=a,G=n,q===null?(K=null,J=0,li(),X):0}function ju(){for(;q!==null&&!Pe();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=bi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){ea=$i=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Di(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Di(n,e.current)),q=null;return}t.flags&32768?(j||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ci,ct(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Be,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=w.T,w.T=null,a=T.p,T.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,T.p=a,w.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,T.p=r,w.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,T.p=r,w.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=w.T,i=T.p,T.p=2,w.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{w.T=t,T.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=pt(su),r=w.T,a=T.p;try{T.p=32>n?32:n,w.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{T.p=a,w.T=r,Vu(e,t)}}function Wu(e,t,n){t=Di(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(st(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Di(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),st(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Ie()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=at()),e=fi(e,t),e!==null&&(st(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=nt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ie(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=nt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Me(Re,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:un(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Mn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ri.length;hd++){var gd=ri[hd];ii(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Pt(`onMouseEnter`,[`mouseout`,`mouseover`]),Pt(`onMouseLeave`,[`mouseout`,`mouseover`]),Pt(`onPointerEnter`,[`pointerout`,`pointerover`]),Pt(`onPointerLeave`,[`pointerout`,`pointerover`]),Nt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Nt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Nt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Nt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Nt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,jt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!xn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Et(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}vn(function(){var r=a,i=pn(n),s=[];a:{var c=ni.get(e);if(c!==void 0){var l=Mn,u=e;switch(e){case`keypress`:if(Dn(n)===0)break a;case`keydown`:case`keyup`:l=Xn;break;case`focusin`:u=`focus`,l=Vn;break;case`focusout`:u=`blur`,l=Vn;break;case`beforeblur`:case`afterblur`:l=Vn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=zn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Bn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Qn;break;case Yr:case Xr:case Zr:l=Hn;break;case ti:l=$n;break;case`scroll`:case`scrollend`:l=Pn;break;case`wheel`:l=er;break;case`copy`:case`cut`:case`paste`:l=Un;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Zn;break;case`toggle`:case`beforetoggle`:l=tr}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=yn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==fn&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Et(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=zn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Zn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ot(l),h=u==null?c:Ot(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Ot(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=br;else if(mr(c))if(xr)v=k;else{v=Or;var y=Dr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&sn(r.elementType)&&(v=br):v=kr;if(v&&=v(e,r)){hr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Qt(c,`number`,c.value)}switch(y=r?Ot(r):window,e){case`focusin`:(mr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(s,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(s,n,i)}var b;if(rr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else dr?lr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(or&&n.locale!==`ko`&&(dr||x!==`onCompositionStart`?x===`onCompositionEnd`&&dr&&(b=En()):(Cn=i,wn=`value`in Cn?Cn.value:Cn.textContent,dr=!0)),y=Ed(r,x),0<y.length&&(x=new Wn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ur(n),b!==null&&(x.data=b)))),(b=ar?fr(e,n):O(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Wn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=yn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=yn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=yn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=yn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||nn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&nn(e,``+r);break;case`className`:Bt(e,`class`,r);break;case`tabIndex`:Bt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Bt(e,n,r);break;case`style`:on(e,r,o);break;case`data`:if(t!==`object`){Bt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=un(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=un(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=dn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=un(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),zt(e,`popover`,r);break;case`xlinkActuate`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:zt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=cn.get(n)||n,zt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:on(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?nn(e,r):(typeof r==`number`||typeof r==`bigint`)&&nn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=dn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Mt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[vt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):zt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Zt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&$t(e,!!r,n,!0):$t(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}tn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(sn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Xt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?$t(e,!!n,n?[]:``,!1):$t(e,!!n,t,!0)):$t(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}en(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(sn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=T.d;T.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Yt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),At(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Yt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Yt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Yt(n.imageSizes)+`"]`)):i+=`[href="`+Yt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),At(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Yt(r)+`"][href="`+Yt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),At(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=kt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);At(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),At(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),At(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ve.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=kt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=kt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=kt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Yt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),At(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Yt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Yt(n.href)+`"]`);if(r)return t.instance=r,At(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),At(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,At(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),At(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,At(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),At(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,At(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),At(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:te,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ft(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,up(e,t,n,r)}finally{T.p=a,w.T=i}}function lp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,up(e,t,n,r)}finally{T.p=a,w.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Ie()+500,id(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=pn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Et(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Et(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fn=r,n.target.dispatchEvent(r),fn=null}else return t=Dt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[yt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(i(527,Lp,`19.2.4`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[yt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()}))(),_=c(u(),1),v=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),y=o(((e,t)=>{t.exports=v()}))();function b(){return(0,y.jsxs)(`svg`,{className:`animate-spin shrink-0`,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5`,stroke:`currentColor`,strokeWidth:`2`,strokeOpacity:`0.3`}),(0,y.jsx)(`path`,{d:`M12 7a5 5 0 0 0-5-5`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]})}var x={primary:`text-[var(--color-text-on-dark)] shadow-[var(--shadow-brand-tinted)]`,secondary:`bg-[var(--color-surface-card)] text-[var(--color-action-primary)] border border-[var(--color-action-primary)]`,tertiary:`bg-transparent text-[var(--color-action-primary)]`,destructive:`bg-[var(--red-500)] text-[var(--color-text-on-dark)]`,accent:`bg-[var(--color-action-accent)] text-[var(--neutral-950)]`},ee={primary:`hover:brightness-110 active:brightness-95`,secondary:`hover:bg-[var(--color-surface-tinted)] active:brightness-95`,tertiary:`hover:bg-[var(--color-surface-tinted)] active:bg-[var(--color-surface-section)]`,destructive:`hover:brightness-90 active:brightness-80`,accent:`hover:brightness-110 active:brightness-95`},te={sm:`h-8  px-3 gap-1.5 text-[10px]`,md:`h-10 px-4 gap-2   text-[var(--type-label-size)]`,lg:`h-12 px-6 gap-2   text-[var(--type-label-size)]`};function S({variant:e=`primary`,size:t=`md`,hasLeadingIcon:n,hasTrailingIcon:r,isFullWidth:i=!1,isLoading:a=!1,disabled:o=!1,children:s,onClick:c,type:l=`button`,"aria-label":u,className:d=``}){let f=o||a;return(0,y.jsxs)(`button`,{type:l,disabled:f,onClick:c,"aria-label":u,"aria-busy":a||void 0,style:e===`primary`?{background:`var(--color-surface-hero-gradient)`}:void 0,className:[`inline-flex items-center justify-center`,`rounded-[var(--radius-btn)]`,`font-[var(--font-body)]`,`font-[var(--weight-semibold)]`,`tracking-[var(--tracking-wider)]`,`whitespace-nowrap select-none cursor-pointer border-0 outline-none`,`transition-[filter,background-color,opacity] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`,x[e],f?``:ee[e],te[t],i?`w-full`:``,f?`opacity-40 cursor-not-allowed`:``,d].filter(Boolean).join(` `),children:[a?(0,y.jsx)(b,{}):n,s&&(0,y.jsx)(`span`,{children:s}),!a&&r]})}var ne=`import { type ReactNode } from 'react'

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
`,re={live:{label:`En Vivo`,bg:`var(--brand-en-vivo)`,text:`var(--color-text-on-dark)`,dot:!0},negotiable:{label:`Negociable`,bg:`var(--brand-negociable)`,text:`var(--neutral-950)`},closed:{label:`Cerrado`,bg:`var(--gray-300)`,text:`var(--gray-600)`},upcoming:{label:`Próximo`,bg:`var(--surface-lavender)`,text:`var(--purple-600)`},new:{label:`Nuevo`,bg:`var(--purple-600)`,text:`var(--color-text-on-dark)`},featured:{label:`Destacado`,bg:`var(--neutral-950)`,text:`var(--color-text-on-dark)`}},ie={sm:`px-2 py-0.5 gap-1`,md:`px-2.5 py-1 gap-1.5`};function C({type:e,size:t=`md`,disabled:n=!1,className:r=``}){let{label:i,bg:a,text:o,dot:s}=re[e];return(0,y.jsxs)(`span`,{style:{background:a,color:o},className:[`inline-flex items-center`,`rounded-[var(--radius-full)]`,`font-[var(--font-body)]`,`text-[var(--type-badge-size)]`,`font-[var(--type-badge-weight)]`,`leading-[var(--type-badge-lh)]`,`tracking-[var(--type-badge-tracking)]`,`uppercase whitespace-nowrap select-none`,ie[t],n?`opacity-40`:``,r].filter(Boolean).join(` `),children:[s&&!n&&(0,y.jsx)(`span`,{"aria-hidden":`true`,className:`shrink-0 size-1.5 rounded-full animate-pulse`,style:{background:`var(--color-status-live)`}}),i]})}function ae({label:e,placeholder:t,value:n,defaultValue:r,onChange:i,variant:a=`default`,leadingIcon:o,trailingAction:s,hint:c,error:l,disabled:u=!1,readOnly:d=!1,type:f=`text`,id:p,name:m,className:h=``}){let g=(0,_.useId)(),v=p??g,b=c||l?`${v}-hint`:void 0,x=!!l,ee=d&&!u;return(0,y.jsxs)(`div`,{className:[`flex flex-col gap-1.5 w-full`,h].join(` `),children:[(0,y.jsx)(`label`,{htmlFor:v,className:[`text-[var(--type-label-size)] font-[var(--type-label-weight)] leading-[var(--type-label-lh)] tracking-[var(--type-label-tracking)]`,`font-[var(--font-body)]`,u?`text-[var(--color-text-disabled)]`:`text-[var(--color-text-body)]`].join(` `),children:e}),(0,y.jsxs)(`div`,{className:`relative flex items-center`,children:[a===`withLeadingIcon`&&o&&(0,y.jsx)(`span`,{"aria-hidden":`true`,className:`absolute left-3 flex items-center pointer-events-none text-[var(--color-text-muted)]`,children:o}),(0,y.jsx)(`input`,{id:v,name:m,type:f,value:n,defaultValue:r,onChange:i,placeholder:t,disabled:u,readOnly:ee,"aria-describedby":b,"aria-invalid":x||void 0,className:[`w-full h-10`,`rounded-[var(--radius-btn)]`,`bg-[var(--color-surface-input)]`,`font-[var(--font-body)]`,`text-[var(--type-body-sm-size)] leading-[var(--type-body-sm-lh)]`,`text-[var(--color-text-on-surface)]`,`border-0 outline-none`,`transition-[box-shadow,background-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`placeholder:text-[var(--color-text-muted)]`,a===`withLeadingIcon`?`pl-9 pr-3`:a===`withTrailingAction`?`pl-3 pr-10`:`px-3`,`focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]`,x?`shadow-[0_0_0_1.5px_var(--red-500)] focus:shadow-[0_0_0_1.5px_var(--red-500)]`:``,ee?`bg-[var(--gray-100)] cursor-default`:``,u?`opacity-40 cursor-not-allowed`:``].filter(Boolean).join(` `)}),a===`withTrailingAction`&&s&&(0,y.jsx)(`span`,{className:`absolute right-3 flex items-center`,children:s})]}),(c||l)&&(0,y.jsx)(`p`,{id:b,className:[`text-[var(--type-label-size)] leading-[var(--type-label-lh)]`,`font-[var(--font-body)]`,x?`text-[var(--red-500)]`:`text-[var(--color-text-muted)]`].join(` `),children:l??c})]})}function oe(e){let t=e instanceof Date?e.getTime():e;return Math.max(0,Math.floor((t-Date.now())/1e3))}function se(e){return e<=0?`00:00:00`:[Math.floor(e/3600),Math.floor(e%3600/60),e%60].map(e=>String(e).padStart(2,`0`)).join(`:`)}function ce(e){return e<=0?`expired`:e<3600?`urgent`:`default`}function le({endsAt:e,className:t=``}){let[n,r]=(0,_.useState)(()=>oe(e));(0,_.useEffect)(()=>{if(n<=0)return;let t=setInterval(()=>{let n=oe(e);r(n),n<=0&&clearInterval(t)},1e3);return()=>clearInterval(t)},[e]);let i=ce(n),a=i===`expired`?`text-[var(--gray-500)]`:i===`urgent`?`text-[var(--color-text-accent)]`:`text-[var(--color-text-on-surface)]`;return(0,y.jsx)(`time`,{dateTime:new Date((e instanceof Date,e)).toISOString(),"aria-label":i===`expired`?`Subasta cerrada`:`Cierra en ${se(n)}`,className:[`inline-flex items-center`,`font-[var(--font-mono)]`,`text-[var(--type-hero-timer-size)]`,`font-[var(--type-hero-timer-weight)]`,`leading-[var(--type-hero-timer-lh)]`,`tracking-[var(--type-hero-timer-tracking)]`,`tabular-nums`,a,t].filter(Boolean).join(` `),children:i===`expired`?`CERRADO`:se(n)})}var ue={hero:{labelSize:`text-[var(--type-label-size)] tracking-[var(--tracking-wider)]`,amountSize:`text-[var(--type-hero-title-size)] leading-[var(--type-hero-title-lh)]`,amountWeight:`font-[var(--weight-extrabold)]`,currencySize:`text-[var(--font-size-xl)]`,gap:`gap-0.5`},card:{labelSize:`text-[var(--type-label-size)] tracking-[var(--tracking-micro)]`,amountSize:`text-[var(--type-card-featured-size)] leading-[var(--type-card-featured-lh)]`,amountWeight:`font-[var(--weight-bold)]`,currencySize:`text-[var(--font-size-xs)]`,gap:`gap-0`},compact:{labelSize:`text-[8px] tracking-[var(--tracking-micro)]`,amountSize:`text-[var(--font-size-xs)] leading-[var(--line-height-tight)]`,amountWeight:`font-[var(--weight-semibold)]`,currencySize:`text-[8px]`,gap:`gap-0`}};function de(e){return e.toLocaleString(`es-PE`,{minimumFractionDigits:0,maximumFractionDigits:0})}function w({context:e}){return(0,y.jsxs)(`div`,{className:`flex flex-col gap-1 animate-pulse`,children:[(0,y.jsx)(`div`,{className:`h-2.5 w-16 rounded bg-[var(--gray-300)]`}),(0,y.jsx)(`div`,{className:`${{hero:`h-8`,card:`h-4`,compact:`h-3`}[e]} w-28 rounded bg-[var(--gray-300)]`})]})}function T({label:e,amount:t,currency:n=`US$`,context:r=`card`,isLoading:i=!1,className:a=``}){if(i)return(0,y.jsx)(w,{context:r});let o=ue[r];return(0,y.jsxs)(`div`,{className:[`inline-flex flex-col`,o.gap,a].join(` `),children:[(0,y.jsx)(`span`,{className:[`font-[var(--font-body)]`,`font-[var(--weight-semibold)]`,`uppercase`,`text-[var(--color-text-price-label)]`,o.labelSize].join(` `),children:e}),(0,y.jsxs)(`div`,{className:`inline-flex items-baseline gap-0.5`,children:[(0,y.jsx)(`span`,{className:[`font-[var(--font-mono)]`,`font-[var(--weight-semibold)]`,`text-[var(--color-text-primary)]`,o.currencySize,`tabular-nums`].join(` `),children:n}),(0,y.jsx)(`span`,{className:[`font-[var(--font-mono)]`,o.amountWeight,`text-[var(--color-text-primary)]`,o.amountSize,`tabular-nums`].join(` `),children:de(t)})]})]})}var fe=(0,_.createContext)({version:`original`,setVersion:()=>{}});function pe({children:e}){let t=()=>new URLSearchParams(window.location.search).get(`v`)===`upgrade`?`upgrade`:`original`,[n,r]=(0,_.useState)(t);return(0,_.useEffect)(()=>{let e=()=>r(t());return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[]),(0,y.jsx)(fe.Provider,{value:{version:n,setVersion:e=>{r(e);let t=new URL(window.location.href);t.searchParams.set(`v`,e),window.history.replaceState({},``,t.toString())}},children:e})}function me(){return(0,_.useContext)(fe)}var he=`160px`,E=`235px`,D=`120px`,ge=`115px`,_e=`29px`,ve=`110px`,ye=`45px`,be={live:`var(--color-border-card-accent-auction)`,negotiable:`var(--color-border-card-accent-negotiable)`,upcoming:`var(--color-action-primary)`,new:`var(--color-action-primary)`,featured:`var(--color-text-on-surface)`,closed:`var(--color-border-default)`};Date.now()+2700*1e3;var xe={width:he,height:E,borderRadius:`var(--radius-card)`,overflow:`hidden`,background:`var(--color-surface-card)`,boxShadow:`var(--shadow-card)`,display:`flex`,flexDirection:`column`,flexShrink:0,position:`relative`,transition:`box-shadow var(--duration-standard) var(--easing-standard)`},Se={cursor:`pointer`},Ce={width:he,height:D,flexShrink:0,overflow:`hidden`,background:`var(--color-surface-section)`},we={width:`100%`,height:`133%`,objectFit:`cover`,marginTop:`-16.67%`,display:`block`},Te={width:`100%`,height:`100%`,background:`var(--color-surface-hero-gradient)`,display:`flex`,alignItems:`center`,justifyContent:`center`},Ee={width:he,height:ge,flexShrink:0,padding:`var(--spacing-card-padding)`,boxSizing:`border-box`,position:`relative`},De={margin:0,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-extrabold)`,fontSize:`var(--type-card-title-size)`,lineHeight:`var(--type-card-title-lh)`,letterSpacing:`var(--type-card-title-tracking)`,textTransform:`uppercase`,color:`var(--color-text-primary)`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},Oe={margin:0,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-regular)`,fontSize:`var(--font-size-xs-11)`,lineHeight:`var(--line-height-2xs)`,color:`var(--color-text-body)`,textTransform:`uppercase`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},ke={position:`absolute`,bottom:`var(--spacing-card-padding)`,left:`var(--spacing-card-padding)`},Ae={margin:0,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-semibold)`,fontSize:`var(--font-size-2xs)`,lineHeight:`var(--line-height-2xs)`,letterSpacing:`var(--tracking-micro)`,color:`var(--color-text-price-label)`,textTransform:`uppercase`,whiteSpace:`nowrap`},je={margin:0,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-bold)`,fontSize:`var(--font-size-xs)`,lineHeight:`var(--line-height-tight)`,color:`var(--color-text-primary)`,fontVariantNumeric:`tabular-nums`,whiteSpace:`nowrap`},Me={position:`absolute`,left:ve,top:ye,width:_e,height:_e,borderRadius:`var(--radius-icon-btn)`,border:`none`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,transition:`all var(--duration-micro) var(--easing-standard)`},Ne={...Me,background:`var(--color-surface-icon-subtle)`},Pe={...Me,background:`var(--color-action-primary)`},Fe={width:he,height:E,borderRadius:`var(--radius-card)`,overflow:`hidden`,background:`var(--color-surface-card)`,boxShadow:`var(--shadow-card)`,borderBottom:`3px solid var(--color-border-default)`,flexShrink:0},Ie={width:he,height:D,background:`var(--color-surface-section)`},Le={padding:`var(--spacing-card-padding)`,display:`flex`,flexDirection:`column`,gap:`var(--spacing-card-gap)`};function Re(e,t,n){return{width:e,height:t,borderRadius:`var(--radius-sm)`,background:`var(--color-surface-section)`,...n&&{marginTop:n}}}function ze({filled:e}){let t=e?`var(--color-text-on-dark)`:`none`,n=e?`var(--color-text-on-dark)`:`var(--color-action-primary)`;return(0,y.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M8 13.5S1.5 9 1.5 4.5A3.5 3.5 0 0 1 8 2.75 3.5 3.5 0 0 1 14.5 4.5C14.5 9 8 13.5 8 13.5Z`,fill:t,stroke:n,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function Be(){return(0,y.jsx)(`div`,{style:Te,children:(0,y.jsxs)(`svg`,{width:`56`,height:`28`,viewBox:`0 0 72 36`,fill:`white`,"aria-hidden":`true`,opacity:`0.25`,children:[(0,y.jsx)(`path`,{d:`M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z`}),(0,y.jsx)(`circle`,{cx:`18`,cy:`28`,r:`4`,fill:`none`,stroke:`white`,strokeWidth:`2`}),(0,y.jsx)(`circle`,{cx:`54`,cy:`28`,r:`4`,fill:`none`,stroke:`white`,strokeWidth:`2`})]})})}function Ve(){return(0,y.jsxs)(`div`,{style:Fe,children:[(0,y.jsx)(`div`,{style:Ie}),(0,y.jsxs)(`div`,{style:Le,children:[(0,y.jsx)(`div`,{style:Re(`90px`,`11px`)}),(0,y.jsx)(`div`,{style:Re(`70px`,`11px`)}),(0,y.jsx)(`div`,{style:Re(`52px`,`10px`,`var(--spacing-card-padding)`)}),(0,y.jsx)(`div`,{style:Re(`64px`,`14px`)})]})]})}function He({lot:e,isLoading:t=!1,onFavorite:n,onClick:r,className:i=``}){if(t)return(0,y.jsx)(Ve,{});let a={...xe,...r&&Se,borderBottom:`3px solid ${be[e.badge]}`},o=e.isFavorited?Pe:Ne,s=()=>{r?.(e.id)},c=t=>{(t.key===`Enter`||t.key===` `)&&r?.(e.id)},l=t=>{t.stopPropagation(),n?.(e.id)};function u(){return e.imageUrl?(0,y.jsx)(`img`,{src:e.imageUrl,alt:e.title,style:we}):(0,y.jsx)(Be,{})}function d(){if(!e.subtitle)return null;let t=e.subtitle.replace(`·`,`|`);return(0,y.jsx)(`p`,{style:Oe,children:t})}let f=`${e.currency??`US$`} ${e.price.toLocaleString(`en-US`)}`,p=e.isFavorited?`Quitar de favoritos`:`Agregar a favoritos`;return(0,y.jsxs)(`article`,{onClick:r&&s,onKeyDown:r?c:void 0,role:r?`button`:void 0,tabIndex:r?0:void 0,"aria-label":e.title,className:i,style:a,children:[(0,y.jsx)(`div`,{style:Ce,children:u()}),(0,y.jsxs)(`div`,{style:Ee,children:[(0,y.jsx)(`h3`,{style:De,children:e.title}),d(),(0,y.jsxs)(`div`,{style:ke,children:[(0,y.jsx)(`p`,{style:Ae,children:e.priceLabel??`Precio Base`}),(0,y.jsx)(`p`,{style:je,children:f})]}),(0,y.jsx)(`button`,{type:`button`,onClick:l,"aria-label":p,"aria-pressed":e.isFavorited,style:o,children:(0,y.jsx)(ze,{filled:!!e.isFavorited})})]})]})}var Ue={live:`var(--color-border-card-accent-auction)`,negotiable:`var(--color-border-card-accent-negotiable)`,upcoming:`var(--purple-600)`,new:`var(--purple-600)`,featured:`var(--neutral-950)`,closed:`var(--gray-300)`},We={title:`TOYOTA HILUX`,subtitle:`2024 · Lima, Perú`,badge:`live`,priceLabel:`PRECIO BASE`,price:17999,currency:`US$`,endsAt:Date.now()+2700*1e3};function Ge({filled:e}){return(0,y.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M8 13.5S1.5 9 1.5 4.5A3.5 3.5 0 0 1 8 2.75 3.5 3.5 0 0 1 14.5 4.5C14.5 9 8 13.5 8 13.5Z`,fill:e?`currentColor`:`none`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function Ke({variant:e}){return e===`compact`?(0,y.jsxs)(`div`,{className:`flex items-center gap-3 px-3 py-2.5 animate-pulse bg-[var(--color-surface-card)] rounded-[var(--radius-card)]`,children:[(0,y.jsx)(`div`,{className:`h-3 w-32 rounded bg-[var(--gray-300)]`}),(0,y.jsx)(`div`,{className:`h-3 w-16 rounded bg-[var(--gray-300)] ml-auto`})]}):(0,y.jsxs)(`div`,{className:`flex flex-col w-full rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)] animate-pulse bg-[var(--color-surface-card)]`,children:[(0,y.jsx)(`div`,{className:`${e===`featured`?`h-[200px]`:`h-[132px]`} w-full bg-[var(--gray-300)]`}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 px-3 py-3`,children:[(0,y.jsx)(`div`,{className:`h-2.5 w-24 rounded bg-[var(--gray-300)]`}),(0,y.jsx)(`div`,{className:`h-2 w-16 rounded bg-[var(--gray-300)]`}),(0,y.jsx)(`div`,{className:`h-6 w-28 rounded bg-[var(--gray-300)] mt-1`})]}),(0,y.jsx)(`div`,{className:`h-1 w-full bg-[var(--gray-300)]`})]})}function qe(){return(0,y.jsx)(`div`,{className:`w-full h-full flex items-center justify-center`,style:{background:`linear-gradient(150deg, oklch(0.294 0.149 288.000) 0%, oklch(0.242 0.138 286.500) 100%)`},children:(0,y.jsxs)(`svg`,{width:`56`,height:`28`,viewBox:`0 0 72 36`,fill:`white`,"aria-hidden":`true`,opacity:`0.25`,children:[(0,y.jsx)(`path`,{d:`M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z`}),(0,y.jsx)(`circle`,{cx:`18`,cy:`28`,r:`4`,fill:`none`,stroke:`white`,strokeWidth:`2`}),(0,y.jsx)(`circle`,{cx:`54`,cy:`28`,r:`4`,fill:`none`,stroke:`white`,strokeWidth:`2`})]})})}function Je({lot:e,onFavorite:t,onClick:n}){return(0,y.jsxs)(`article`,{onClick:()=>n?.(e.id),role:n?`button`:void 0,tabIndex:n?0:void 0,onKeyDown:n?t=>{(t.key===`Enter`||t.key===` `)&&n(e.id)}:void 0,className:[`flex flex-col w-full overflow-hidden`,`bg-[var(--color-surface-card)]`,`rounded-[var(--radius-card)]`,`shadow-[var(--shadow-card)]`,n?`cursor-pointer`:``,`transition-shadow duration-[var(--duration-standard)] ease-[var(--easing-standard)]`,`hover:shadow-[var(--shadow-md)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`].filter(Boolean).join(` `),children:[(0,y.jsxs)(`div`,{className:`relative h-[132px] shrink-0 overflow-hidden bg-[var(--gray-100)]`,children:[e.imageUrl?(0,y.jsx)(`img`,{src:e.imageUrl,alt:e.title,className:`w-full h-full object-cover`}):(0,y.jsx)(qe,{}),(0,y.jsx)(`div`,{className:`absolute top-2 left-2`,children:(0,y.jsx)(C,{type:e.badge,size:`sm`})})]}),(0,y.jsxs)(`div`,{className:`flex flex-col flex-1 px-3 pt-2 pb-2 gap-1`,children:[(0,y.jsx)(`h3`,{className:`m-0 uppercase font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]`,style:{fontSize:`var(--type-card-title-size)`,lineHeight:`var(--type-card-title-lh)`},children:e.title}),e.subtitle&&(0,y.jsx)(`p`,{className:`m-0 text-[var(--color-text-muted)] font-[var(--font-body)] font-[var(--weight-regular)]`,style:{fontSize:`var(--font-size-xs)`,lineHeight:`var(--line-height-tight)`},children:e.subtitle}),(0,y.jsxs)(`div`,{className:`flex items-end justify-between mt-1`,children:[(0,y.jsx)(T,{context:`card`,label:e.priceLabel??`Precio Base`,amount:e.price,currency:e.currency}),(0,y.jsx)(`button`,{type:`button`,onClick:n=>{n.stopPropagation(),t?.(e.id)},"aria-label":e.isFavorited?`Quitar de favoritos`:`Agregar a favoritos`,"aria-pressed":e.isFavorited,className:[`size-8 shrink-0 flex items-center justify-center`,`rounded-[var(--radius-icon-btn)] border-0 cursor-pointer`,`transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`,`active:scale-90`,e.isFavorited?`bg-[var(--color-action-primary)] text-[var(--color-text-on-dark)]`:`bg-[var(--color-surface-icon-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-action-primary)]`].join(` `),children:(0,y.jsx)(Ge,{filled:!!e.isFavorited})})]}),e.endsAt&&e.badge!==`closed`&&(0,y.jsxs)(`div`,{className:`flex items-center gap-1.5 mt-0.5`,children:[(0,y.jsx)(`span`,{className:`text-[var(--color-text-muted)] font-[var(--font-body)]`,style:{fontSize:`var(--font-size-2xs)`,lineHeight:`var(--line-height-2xs)`},children:`CIERRA EN`}),(0,y.jsx)(le,{endsAt:e.endsAt,className:`!text-[var(--font-size-xs)] !leading-[var(--line-height-tight)]`})]})]}),(0,y.jsx)(`div`,{className:`h-1 w-full shrink-0`,style:{background:Ue[e.badge]},"aria-hidden":`true`})]})}function Ye({lot:e,onFavorite:t,onClick:n}){return(0,y.jsxs)(`article`,{onClick:()=>n?.(e.id),role:n?`button`:void 0,tabIndex:n?0:void 0,onKeyDown:n?t=>{(t.key===`Enter`||t.key===` `)&&n(e.id)}:void 0,className:[`flex flex-col w-full overflow-hidden`,`bg-[var(--color-surface-card)]`,`rounded-[var(--radius-card)]`,`shadow-[var(--shadow-floating)]`,n?`cursor-pointer`:``,`transition-shadow duration-[var(--duration-standard)] ease-[var(--easing-standard)]`,`hover:shadow-[var(--shadow-lg)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`].filter(Boolean).join(` `),children:[(0,y.jsxs)(`div`,{className:`relative h-[200px] shrink-0 overflow-hidden bg-[var(--gray-100)]`,children:[e.imageUrl?(0,y.jsx)(`img`,{src:e.imageUrl,alt:e.title,className:`w-full h-full object-cover`}):(0,y.jsx)(qe,{}),(0,y.jsxs)(`div`,{className:`absolute inset-0 flex items-start justify-between p-3`,children:[(0,y.jsx)(C,{type:e.badge,size:`md`}),(0,y.jsx)(`button`,{type:`button`,onClick:n=>{n.stopPropagation(),t?.(e.id)},"aria-label":e.isFavorited?`Quitar de favoritos`:`Agregar a favoritos`,"aria-pressed":e.isFavorited,className:[`size-9 flex items-center justify-center`,`rounded-[var(--radius-icon-btn)] border-0 cursor-pointer`,`backdrop-blur-[8px]`,`transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`,`active:scale-90`,e.isFavorited?`bg-[var(--color-action-primary)] text-white`:`bg-[var(--color-surface-glass)] text-white hover:bg-white/60`].join(` `),children:(0,y.jsx)(Ge,{filled:!!e.isFavorited})})]})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 px-4 pt-3 pb-3`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`m-0 uppercase font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]`,style:{fontSize:`var(--type-card-featured-size)`,lineHeight:`var(--type-card-featured-lh)`},children:e.title}),e.subtitle&&(0,y.jsx)(`p`,{className:`m-0 mt-0.5 text-[var(--color-text-muted)] font-[var(--font-body)]`,style:{fontSize:`var(--font-size-xs)`,lineHeight:`var(--line-height-tight)`},children:e.subtitle})]}),(0,y.jsxs)(`div`,{className:`flex items-end justify-between`,children:[(0,y.jsx)(T,{context:`hero`,label:e.priceLabel??`Precio Base`,amount:e.price,currency:e.currency}),e.endsAt&&e.badge!==`closed`&&(0,y.jsxs)(`div`,{className:`flex flex-col items-end gap-0.5`,children:[(0,y.jsx)(`span`,{className:`text-[var(--color-text-muted)] font-[var(--font-body)] uppercase`,style:{fontSize:`var(--font-size-2xs)`},children:`Cierra en`}),(0,y.jsx)(le,{endsAt:e.endsAt})]})]})]}),(0,y.jsx)(`div`,{className:`h-1 w-full shrink-0`,style:{background:Ue[e.badge]},"aria-hidden":`true`})]})}function Xe({lot:e,onClick:t}){return(0,y.jsxs)(`div`,{onClick:()=>t?.(e.id),role:t?`button`:void 0,tabIndex:t?0:void 0,onKeyDown:t?n=>{(n.key===`Enter`||n.key===` `)&&t(e.id)}:void 0,className:[`flex items-center justify-between`,`px-3 py-2.5 gap-3`,`bg-[var(--color-surface-card)]`,`border-b border-[var(--color-border-section-divider)]`,`last:border-b-0`,t?`cursor-pointer hover:bg-[var(--color-surface-section)] transition-colors duration-[var(--duration-micro)]`:``,`focus-visible:outline-2 focus-visible:outline-[var(--color-action-primary)]`].filter(Boolean).join(` `),children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-2 min-w-0`,children:[(0,y.jsx)(C,{type:e.badge,size:`sm`}),(0,y.jsx)(`span`,{className:`truncate uppercase font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]`,style:{fontSize:`var(--type-card-title-size)`,lineHeight:`var(--type-card-title-lh)`},children:e.title})]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-3 shrink-0`,children:[e.endsAt&&e.badge!==`closed`&&(0,y.jsx)(le,{endsAt:e.endsAt,className:`!text-[var(--font-size-xs)] !leading-[var(--line-height-tight)]`}),(0,y.jsx)(T,{context:`compact`,label:e.priceLabel??`Base`,amount:e.price,currency:e.currency})]})]})}function Ze({variant:e=`standard`,lot:t=We,isLoading:n=!1,onFavorite:r,onClick:i,className:a=``}){let{version:o}=me();if(o===`upgrade`&&e!==`compact`)return(0,y.jsx)(He,{lot:t,onFavorite:r,onClick:i,isLoading:n,className:a});if(n)return(0,y.jsx)(Ke,{variant:e});let s=a?`${a}`:``;return e===`featured`?(0,y.jsx)(`div`,{className:s,children:(0,y.jsx)(Ye,{lot:t,onFavorite:r,onClick:i})}):e===`compact`?(0,y.jsx)(`div`,{className:s,children:(0,y.jsx)(Xe,{lot:t,onClick:i})}):(0,y.jsx)(`div`,{className:s,children:(0,y.jsx)(Je,{lot:t,onFavorite:r,onClick:i})})}var Qe=`import { type BadgeType, Badge } from '../Badge'
import { PriceDisplay } from '../PriceDisplay'
import { CountdownTimer } from '../CountdownTimer'
import { useVersion } from '../../VersionContext'
import { AuctionCardUpgrade } from './AuctionCard.upgrade'
import type { AuctionCardVariant, LotData, AuctionCardProps } from './types'
export type { AuctionCardVariant, LotData, AuctionCardProps } from './types'

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
  const { version } = useVersion()

  // ── Upgrade: versión rediseñada según Figma node 268-1601 ────────────────
  if (version === 'upgrade' && variant !== 'compact') {
    return (
      <AuctionCardUpgrade
        lot={lot}
        onFavorite={onFavorite}
        onClick={onClick}
        isLoading={isLoading}
        className={className}
      />
    )
  }

  // ── Original ─────────────────────────────────────────────────────────────
  if (isLoading) return <AuctionCardSkeleton variant={variant} />

  const wrapClass = className ? \`\${className}\` : ''

  if (variant === 'featured') return <div className={wrapClass}><FeaturedCard lot={lot} onFavorite={onFavorite} onClick={onClick} /></div>
  if (variant === 'compact')  return <div className={wrapClass}><CompactCard  lot={lot} onClick={onClick} /></div>
  return <div className={wrapClass}><StandardCard lot={lot} onFavorite={onFavorite} onClick={onClick} /></div>
}

export default AuctionCard
`,$e=`import type { CSSProperties, KeyboardEvent, MouseEvent } from 'react'
import { ACCENT_BORDER, ACCENT_BORDER_WIDTH } from './constants'
import * as S from './styles'
import type { AuctionCardUpgradeProps } from './types'

// ── HeartIcon ─────────────────────────────────────────────────────────────────
// Figma node 268:1621 — ícono outline cuando unfilled, sólido cuando filled

interface HeartIconProps {
  filled: boolean
}

function HeartIcon({ filled }: HeartIconProps) {
  const fill   = filled ? 'var(--color-text-on-dark)' : 'none'
  const stroke = filled ? 'var(--color-text-on-dark)' : 'var(--color-action-primary)'

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 13.5S1.5 9 1.5 4.5A3.5 3.5 0 0 1 8 2.75 3.5 3.5 0 0 1 14.5 4.5C14.5 9 8 13.5 8 13.5Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ── ImagePlaceholder ──────────────────────────────────────────────────────────
// Gradient brand cuando no hay imagen disponible

function ImagePlaceholder() {
  return (
    <div style={S.imagePlaceholder}>
      <svg width="56" height="28" viewBox="0 0 72 36" fill="white" aria-hidden="true" opacity="0.25">
        <path d="M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z" />
        <circle cx="18" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="54" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  )
}

// ── AuctionCardSkeleton ───────────────────────────────────────────────────────
// Estado de carga — mismas dimensiones que la card real

export function AuctionCardUpgradeSkeleton() {
  return (
    <div style={S.skeletonCard}>
      <div style={S.skeletonImage} />
      <div style={S.skeletonContent}>
        <div style={S.skeletonLine('90px', '11px')} />
        <div style={S.skeletonLine('70px', '11px')} />
        <div style={S.skeletonLine('52px', '10px', 'var(--spacing-card-padding)')} />
        <div style={S.skeletonLine('64px', '14px')} />
      </div>
    </div>
  )
}

// ── AuctionCardUpgrade ────────────────────────────────────────────────────────
// Figma node 268:1601 — 160×235px pixel-perfect
// Variante upgrade del AuctionCard — sin countdown, badge como franja inferior

export function AuctionCardUpgrade({
  lot,
  isLoading = false,
  onFavorite,
  onClick,
  className = '',
}: AuctionCardUpgradeProps) {

  if (isLoading) return <AuctionCardUpgradeSkeleton />

  // ── Estilos dinámicos ───────────────────────────────────────────────────────

  const cardStyle: CSSProperties = {
    ...S.cardBase,
    ...(onClick && S.cardClickable),
    borderBottom: \`\${ACCENT_BORDER_WIDTH} solid \${ACCENT_BORDER[lot.badge]}\`,
  }

  const heartStyle = lot.isFavorited ? S.heartButtonActive : S.heartButtonDefault

  // ── Handlers ───────────────────────────────────────────────────────────────

  const handleCardClick = () => {
    onClick?.(lot.id)
  }

  const handleCardKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    const isActivationKey = e.key === 'Enter' || e.key === ' '
    if (isActivationKey) onClick?.(lot.id)
  }

  const handleFavoriteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onFavorite?.(lot.id)
  }

  // ── Render helpers ──────────────────────────────────────────────────────────

  function renderImage() {
    if (!lot.imageUrl) return <ImagePlaceholder />
    return <img src={lot.imageUrl} alt={lot.title} style={S.imageEl} />
  }

  function renderSubtitle() {
    if (!lot.subtitle) return null
    const text = lot.subtitle.replace('·', '|')
    return <p style={S.subtitleText}>{text}</p>
  }

  const formattedPrice = \`\${lot.currency ?? 'US$'} \${lot.price.toLocaleString('en-US')}\`
  const favoriteLabel  = lot.isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'

  return (
    <article
      onClick={onClick && handleCardClick}
      onKeyDown={onClick ? handleCardKeyDown : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={lot.title}
      className={className}
      style={cardStyle}
    >

      {/* Imagen — node 268:1602 — 160×120px */}
      <div style={S.imageWrapper}>
        {renderImage()}
      </div>

      {/* Contenido — node 268:1604 — 160×115px */}
      {/* Inner — node 268:1605 — 136×91px, padding 12px */}
      <div style={S.contentWrapper}>

        {/* Título — node 268:1610 */}
        <h3 style={S.titleText}>{lot.title}</h3>

        {/* Subtítulo — node 268:1613 */}
        {renderSubtitle()}

        {/* Precio — node 268:1615 */}
        <div style={S.priceBlock}>
          <p style={S.priceLabelText}>{lot.priceLabel ?? 'Precio Base'}</p>
          <p style={S.priceValueText}>{formattedPrice}</p>
        </div>

        {/* Favorito — node 268:1621 — 29×29px, left:110 top:45 */}
        <button
          type="button"
          onClick={handleFavoriteClick}
          aria-label={favoriteLabel}
          aria-pressed={lot.isFavorited}
          style={heartStyle}
        >
          <HeartIcon filled={Boolean(lot.isFavorited)} />
        </button>

      </div>
    </article>
  )
}

export default AuctionCardUpgrade
`;function et(e,t=`US$`){return`${t} ${e.toLocaleString(`es-PE`)}`}function tt(e){return Number(e.replace(/[^0-9]/g,``))}function nt(){return(0,y.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`10`,cy:`10`,r:`9`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M6 10l3 3 5-5`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}function rt(){return(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M8 2L14.5 13.5H1.5L8 2Z`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M8 7v3`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,y.jsx)(`circle`,{cx:`8`,cy:`11.5`,r:`0.75`,fill:`currentColor`})]})}function it({lotId:e,minimumBid:t,currentBid:n,currency:r=`US$`,onSubmit:i,disabled:a=!1,className:o=``}){let s=(0,_.useId)(),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(`idle`),[f,p]=(0,_.useState)(``),m=tt(c),h=m>=t&&m>0,g=c.length>0&&!h?m===0?`Ingresa un monto válido.`:`La oferta mínima es ${et(t,r)}.`:``,v=(0,_.useCallback)(e=>{l(e.target.value.replace(/[^0-9]/g,``)),u===`idle`&&d(`active`)},[u]),b=()=>{h&&d(`confirming`)},x=async()=>{d(`submitting`),p(``);try{await(i?.(m,e)??new Promise(e=>setTimeout(e,1200))),d(`success`)}catch(e){p(e instanceof Error?e.message:`Error al registrar la oferta. Intenta nuevamente.`),d(`error`)}},ee=()=>{d(c?`active`:`idle`)},te=()=>{l(``),p(``),d(`idle`)};if(u===`success`)return(0,y.jsxs)(`div`,{className:[`flex flex-col items-center gap-3 py-6 px-4 text-center`,o].join(` `),children:[(0,y.jsx)(`span`,{className:`text-[var(--color-action-accent)]`,children:(0,y.jsx)(nt,{})}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`m-0 font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]`,style:{fontSize:`var(--type-label-size)`},children:`OFERTA REGISTRADA`}),(0,y.jsx)(`p`,{className:`m-0 mt-1 font-[var(--font-mono)] font-[var(--weight-extrabold)] tabular-nums text-[var(--color-text-primary)]`,style:{fontSize:`var(--type-hero-title-size)`,lineHeight:`var(--type-hero-title-lh)`},children:et(m,r)})]}),(0,y.jsx)(S,{variant:`tertiary`,size:`sm`,onClick:te,children:`Nueva oferta`})]});if(u===`confirming`)return(0,y.jsxs)(`div`,{className:[`flex flex-col gap-4 p-4 rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] bg-[var(--color-surface-card)]`,o].join(` `),children:[(0,y.jsxs)(`div`,{className:`text-center`,children:[(0,y.jsx)(`p`,{className:`m-0 text-[var(--color-text-muted)] font-[var(--font-body)] uppercase`,style:{fontSize:`var(--type-label-size)`,letterSpacing:`var(--tracking-wider)`},children:`Confirmar oferta`}),(0,y.jsx)(`p`,{className:`m-0 mt-1 font-[var(--font-mono)] font-[var(--weight-extrabold)] tabular-nums text-[var(--color-text-primary)]`,style:{fontSize:`var(--type-hero-title-size)`,lineHeight:`var(--type-hero-title-lh)`},children:et(m,r)}),(0,y.jsx)(`p`,{className:`m-0 mt-1 text-[var(--color-text-muted)] font-[var(--font-body)]`,style:{fontSize:`var(--font-size-xs)`},children:`Esta acción no se puede deshacer.`})]}),(0,y.jsxs)(`div`,{className:`flex gap-2`,children:[(0,y.jsx)(S,{variant:`secondary`,size:`md`,isFullWidth:!0,onClick:ee,children:`Cancelar`}),(0,y.jsx)(S,{variant:`accent`,size:`md`,isFullWidth:!0,onClick:x,children:`CONFIRMAR`})]})]});let ne=u===`error`||!!g,re=f||g;return(0,y.jsxs)(`form`,{className:[`flex flex-col gap-3`,o].join(` `),onSubmit:e=>{e.preventDefault(),b()},noValidate:!0,children:[n!==void 0&&(0,y.jsxs)(`div`,{className:`flex items-center justify-between px-3 py-2 rounded-[var(--radius-btn)] bg-[var(--color-surface-section)]`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)]`,style:{fontSize:`var(--font-size-2xs)`,letterSpacing:`var(--tracking-wider)`},children:`Oferta actual`}),(0,y.jsx)(`span`,{className:`font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums text-[var(--color-text-on-surface)]`,style:{fontSize:`var(--type-label-size)`},children:et(n,r)})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,y.jsx)(`label`,{htmlFor:s,className:`font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-body)]`,style:{fontSize:`var(--type-label-size)`,letterSpacing:`var(--tracking-wider)`},children:`Tu oferta`}),(0,y.jsxs)(`div`,{className:`relative flex items-center`,children:[(0,y.jsx)(`span`,{className:`absolute left-3 font-[var(--font-mono)] font-[var(--weight-semibold)] tabular-nums pointer-events-none select-none text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-hero-title-size)`,lineHeight:`var(--type-hero-title-lh)`},children:r}),(0,y.jsx)(`input`,{id:s,type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,value:c?Number(c).toLocaleString(`es-PE`):``,onChange:v,placeholder:`0`,disabled:a||u===`submitting`,"aria-invalid":ne||void 0,"aria-describedby":`${s}-hint`,className:[`w-full h-14 pl-14 pr-3`,`rounded-[var(--radius-btn)]`,`bg-[var(--color-surface-input)]`,`font-[var(--font-mono)] font-[var(--weight-extrabold)] tabular-nums`,`text-[var(--color-text-on-surface)]`,`border-0 outline-none`,`transition-[box-shadow] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`placeholder:text-[var(--color-text-muted)]`,ne?`shadow-[0_0_0_1.5px_var(--red-500)]`:`focus:shadow-[0_0_0_1.5px_var(--color-action-accent)]`,a?`opacity-40 cursor-not-allowed`:``].filter(Boolean).join(` `),style:{fontSize:`var(--type-hero-title-size)`,lineHeight:`var(--type-hero-title-lh)`}})]}),(0,y.jsx)(`div`,{id:`${s}-hint`,className:`min-h-[16px]`,children:re?(0,y.jsxs)(`span`,{className:`flex items-center gap-1 text-[var(--red-500)] font-[var(--font-body)]`,style:{fontSize:`var(--type-label-size)`},children:[(0,y.jsx)(rt,{}),re]}):(0,y.jsxs)(`span`,{className:`text-[var(--color-text-muted)] font-[var(--font-body)]`,style:{fontSize:`var(--type-label-size)`},children:[`Mínimo: `,et(t,r)]})})]}),(0,y.jsx)(S,{type:`submit`,variant:`accent`,size:`lg`,isFullWidth:!0,isLoading:u===`submitting`,disabled:a||!h,children:`REALIZAR OFERTA`})]})}function at(){return(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`4.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M10.5 10.5L13 13`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function ot(){return(0,y.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M9 2a5 5 0 0 1 5 5v3l1.5 2.5H2.5L4 10V7a5 5 0 0 1 5-5Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M7.5 14.5a1.5 1.5 0 0 0 3 0`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function st(){return(0,y.jsxs)(`div`,{className:`flex items-center gap-2 select-none`,"aria-label":`VMC Subastas`,children:[(0,y.jsx)(`div`,{className:`size-8 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0`,style:{background:`oklch(1.000 0.000 0.000 / 0.15)`},"aria-hidden":`true`,children:(0,y.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,children:[(0,y.jsx)(`rect`,{x:`2`,y:`4`,width:`14`,height:`11`,rx:`1.5`,stroke:`white`,strokeWidth:`1.4`}),(0,y.jsx)(`circle`,{cx:`9`,cy:`9.5`,r:`2.5`,stroke:`white`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M9 2v2M5 2.5L6 4M13 2.5L12 4`,stroke:`white`,strokeWidth:`1.3`,strokeLinecap:`round`})]})}),(0,y.jsxs)(`div`,{className:`flex flex-col leading-none`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-extrabold)] text-[var(--color-text-on-dark)]`,style:{fontSize:`13px`,letterSpacing:`-0.3px`},children:`VMC`}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-regular)] text-[var(--color-text-on-dark-muted)]`,style:{fontSize:`10px`,letterSpacing:`0.5px`},children:`SUBASTAS`})]})]})}function ct({user:e}){let t=e.name.split(` `).map(e=>e[0]).join(``).slice(0,2).toUpperCase();return(0,y.jsx)(`div`,{className:`size-8 rounded-[var(--radius-icon-btn)] flex items-center justify-center shrink-0 select-none`,style:{background:`var(--color-action-accent)`,color:`var(--neutral-950)`},"aria-label":e.name,children:e.avatarUrl?(0,y.jsx)(`img`,{src:e.avatarUrl,alt:e.name,className:`size-full object-cover rounded-[var(--radius-icon-btn)]`}):(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-bold)]`,style:{fontSize:`11px`},children:t})})}function lt({user:e,onLogin:t,onSearch:n,onNotifications:r,extra:i,className:a=``}){return(0,y.jsxs)(`header`,{style:{background:`var(--color-surface-header)`},className:[`w-full h-16 flex items-center px-[var(--spacing-section-x)] gap-4`,`z-[var(--z-sidebar)]`,a].filter(Boolean).join(` `),children:[(0,y.jsx)(st,{}),(0,y.jsxs)(`div`,{className:`flex-1 max-w-[320px] relative`,children:[(0,y.jsx)(`span`,{className:`absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-on-dark-subtle)] pointer-events-none`,children:(0,y.jsx)(at,{})}),(0,y.jsx)(`input`,{type:`search`,placeholder:`Buscar vehículo o lote...`,onChange:e=>n?.(e.target.value),className:[`w-full h-9 pl-9 pr-3`,`rounded-[var(--radius-btn)]`,`bg-[oklch(1.000_0.000_0.000_/_0.10)]`,`font-[var(--font-body)] text-[var(--color-text-on-dark)]`,`border-0 outline-none`,`placeholder:text-[var(--color-text-on-dark-subtle)]`,`focus:bg-[oklch(1.000_0.000_0.000_/_0.15)]`,`transition-colors duration-[var(--duration-micro)]`].join(` `),style:{fontSize:`var(--font-size-xs)`}})]}),(0,y.jsx)(`div`,{className:`flex-1`}),(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[i,e&&(0,y.jsx)(`button`,{type:`button`,onClick:r,"aria-label":`Notificaciones`,className:[`size-9 flex items-center justify-center`,`rounded-[var(--radius-icon-btn)] border-0 cursor-pointer`,`text-[var(--color-text-on-dark-high)]`,`bg-transparent hover:bg-[var(--color-surface-nav-active)]`,`transition-colors duration-[var(--duration-micro)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`].join(` `),children:(0,y.jsx)(ot,{})}),e?(0,y.jsx)(ct,{user:e}):(0,y.jsx)(S,{variant:`secondary`,size:`sm`,onClick:t,className:`!border-[oklch(1.000_0.000_0.000_/_0.30)] !text-[var(--color-text-on-dark)] !bg-transparent hover:!bg-[var(--color-surface-nav-active)]`,children:`INGRESA`})]})]})}function ut(){return(0,y.jsx)(`svg`,{width:`18`,height:`12`,viewBox:`0 0 18 12`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M1 1h16M1 6h16M1 11h16`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})})}function dt(){return(0,y.jsxs)(`svg`,{width:`18`,height:`20`,viewBox:`0 0 18 20`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`1`,y:`3`,width:`16`,height:`16`,rx:`2`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M1 8h16`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M6 1v4M12 1v4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,y.jsx)(`rect`,{x:`5`,y:`11`,width:`3`,height:`3`,rx:`0.5`,fill:`currentColor`,opacity:`0.8`})]})}function ft(){return(0,y.jsxs)(`svg`,{width:`22`,height:`16`,viewBox:`0 0 22 16`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`1`,y:`1`,width:`13`,height:`14`,rx:`2`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M14 4l6 4-6 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M5 5h5M5 8h3M5 11h4`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinecap:`round`,opacity:`0.6`})]})}function pt(){return(0,y.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`10`,cy:`10`,r:`9`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M10 5.5l1.2 3.7h3.9l-3.2 2.3 1.2 3.7L10 13l-3.1 2.2 1.2-3.7-3.2-2.3h3.9L10 5.5Z`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinejoin:`round`})]})}function mt(){return(0,y.jsxs)(`svg`,{width:`20`,height:`18`,viewBox:`0 0 20 18`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`1`,y:`5`,width:`18`,height:`12`,rx:`1.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M6 5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`rect`,{x:`4`,y:`9`,width:`3`,height:`3`,rx:`0.5`,stroke:`currentColor`,strokeWidth:`1.2`}),(0,y.jsx)(`rect`,{x:`8.5`,y:`9`,width:`3`,height:`3`,rx:`0.5`,stroke:`currentColor`,strokeWidth:`1.2`}),(0,y.jsx)(`rect`,{x:`13`,y:`9`,width:`3`,height:`3`,rx:`0.5`,stroke:`currentColor`,strokeWidth:`1.2`}),(0,y.jsx)(`rect`,{x:`7`,y:`13`,width:`6`,height:`4`,rx:`0.5`,fill:`currentColor`,opacity:`0.5`})]})}function ht(){return(0,y.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`10`,cy:`10`,r:`9`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M7.5 8a2.5 2.5 0 1 1 2.5 2.5v1.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,y.jsx)(`circle`,{cx:`10`,cy:`14.5`,r:`.85`,fill:`currentColor`})]})}function gt(){return(0,y.jsx)(`svg`,{width:`7`,height:`12`,viewBox:`0 0 7 12`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M1 1l5 5-5 5`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function _t(){return(0,y.jsxs)(`div`,{className:`flex items-center gap-3 shrink-0`,style:{height:`64px`,padding:`0 20px`},children:[(0,y.jsx)(`span`,{style:{color:`white`,opacity:.7,display:`flex`,alignItems:`center`},children:(0,y.jsx)(ut,{})}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M1 1l10 5-10 5V1Z`,fill:`var(--color-action-cta)`})}),(0,y.jsxs)(`span`,{style:{fontSize:`14px`,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-extrabold)`,color:`white`,letterSpacing:`-0.3px`,lineHeight:1},children:[`VMC`,(0,y.jsx)(`span`,{style:{color:`var(--color-action-cta)`},children:`SUBASTAS`})]})]}),(0,y.jsx)(`span`,{style:{fontSize:`8px`,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-regular)`,color:`var(--color-text-on-dark-subtle)`,letterSpacing:`0.5px`,paddingLeft:`16px`},children:`Powered by SUBASTOP.Co`})]})]})}var vt=[{id:`hoy`,label:`Hoy`,icon:(0,y.jsx)(dt,{})},{id:`tipo-oferta`,label:`Tipo de oferta`,icon:(0,y.jsx)(ft,{})},{id:`categorias`,label:`Categorías`,icon:(0,y.jsx)(pt,{})},{id:`empresas`,label:`Empresas`,icon:(0,y.jsx)(mt,{})}],yt=[{id:`centro-ayuda`,label:`Centro de ayuda`,icon:(0,y.jsx)(ht,{})}];function bt({item:e,isActive:t,onClick:n}){return t?(0,y.jsxs)(`button`,{type:`button`,onClick:n,"aria-current":`page`,className:`w-full flex items-center justify-between cursor-pointer border-0 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white`,style:{height:`40px`,padding:`0 16px`,background:`var(--color-surface-nav-active)`,borderLeft:`3.15px solid var(--color-action-accent)`,borderRadius:0,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-semibold)`,fontSize:`12px`,lineHeight:`20px`,color:`white`},children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-[18px]`,children:[(0,y.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,color:`white`},children:e.icon}),(0,y.jsx)(`span`,{children:e.label})]}),(0,y.jsx)(`span`,{style:{color:`white`,opacity:.5},children:(0,y.jsx)(gt,{})})]}):(0,y.jsxs)(`button`,{type:`button`,onClick:n,className:`w-full flex items-center justify-between cursor-pointer border-0 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white`,style:{padding:`12px 20px`,borderRadius:`var(--radius-section)`,background:`transparent`,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-semibold)`,fontSize:`12px`,lineHeight:`20px`,color:`white`},onMouseEnter:e=>{e.currentTarget.style.background=`var(--color-surface-nav-active)`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-[16px]`,children:[(0,y.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,color:`white`,opacity:.7},children:e.icon}),(0,y.jsx)(`span`,{children:e.label})]}),(0,y.jsx)(`span`,{style:{color:`white`,opacity:.4},children:(0,y.jsx)(gt,{})})]})}function xt({activeId:e=`hoy`,onNavigate:t,className:n=``}){let r=e=>t?.(e);return(0,y.jsxs)(`nav`,{style:{background:`var(--color-surface-sidebar)`,width:`var(--layout-sidebar-width)`},className:[`flex flex-col h-full shrink-0`,n].filter(Boolean).join(` `),"aria-label":`Navegación principal`,children:[(0,y.jsx)(_t,{}),(0,y.jsxs)(`div`,{className:`flex flex-col flex-1`,style:{padding:`20px 12px 0`},children:[(0,y.jsx)(`div`,{className:`flex flex-col`,style:{gap:`4px`},children:vt.map(t=>(0,y.jsx)(bt,{item:t,isActive:t.id===e,onClick:()=>r(t.id)},t.id))}),(0,y.jsxs)(`div`,{className:`flex flex-col`,style:{marginTop:`20px`,gap:`0`},children:[(0,y.jsx)(`span`,{style:{padding:`0 4px`,fontSize:`12px`,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-bold)`,lineHeight:`16px`,color:`var(--color-text-on-dark-subtle)`,marginBottom:`4px`},children:`Soporte`}),yt.map(t=>(0,y.jsx)(bt,{item:t,isActive:t.id===e,onClick:()=>r(t.id)},t.id))]})]})]})}function St(){return(0,y.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`10`,cy:`10`,r:`9.25`,stroke:`currentColor`,strokeWidth:`1.5`,opacity:`0.5`}),(0,y.jsx)(`path`,{d:`M11.2 6.5H12.5V4.5H11.2C9.8 4.5 9 5.4 9 6.75V8H7.5v2H9v5h2v-5h1.5l.5-2H11V6.75c0-.15.1-.25.2-.25Z`,fill:`currentColor`})]})}function Ct(){return(0,y.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`3.5`,y:`3.5`,width:`13`,height:`13`,rx:`4`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`circle`,{cx:`10`,cy:`10`,r:`3.2`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`circle`,{cx:`14`,cy:`6`,r:`0.8`,fill:`currentColor`})]})}function wt(){return(0,y.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`2`,y:`5`,width:`16`,height:`10`,rx:`3`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M8.5 7.5l4.5 2.5-4.5 2.5V7.5Z`,fill:`currentColor`})]})}function Tt(){return(0,y.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M3.5 3.5L8.8 10.2M3.5 3.5H7l4.5 6 5 7H13l-4.2-5.8M3.5 3.5l5.3 6.7m3.2-6.7H14L8.8 10.2m0 0L3.5 16.5h3.5L11 11`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function Et(){return(0,y.jsxs)(`svg`,{width:`48`,height:`40`,viewBox:`0 0 48 40`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M24 8C20 4 12 4 6 6v26c6-2 14-2 18 2 4-4 12-4 18-2V6c-6-2-14-2-18 2Z`,stroke:`white`,strokeWidth:`1.5`,strokeLinejoin:`round`,opacity:`0.7`}),(0,y.jsx)(`path`,{d:`M24 8v26`,stroke:`white`,strokeWidth:`1.5`,strokeLinecap:`round`,opacity:`0.7`}),(0,y.jsx)(`path`,{d:`M10 10v18M38 10v18`,stroke:`white`,strokeWidth:`1`,strokeLinecap:`round`,opacity:`0.4`})]})}function Dt(){return(0,y.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M2 2l10 5-10 5V2Z`,fill:`var(--color-action-cta)`})}),(0,y.jsxs)(`span`,{style:{fontSize:`15px`,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-extrabold)`,color:`white`,letterSpacing:`-0.3px`},children:[`VMC`,(0,y.jsx)(`span`,{style:{color:`var(--color-action-cta)`},children:`SUBASTAS`})]})]}),(0,y.jsx)(`span`,{style:{fontSize:`9px`,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-regular)`,color:`var(--color-text-on-dark-subtle)`,letterSpacing:`0.5px`,paddingLeft:`18px`},children:`Powered by SUBASTOP.Co`})]})}function Ot({title:e,links:t}){return(0,y.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,y.jsx)(`p`,{style:{margin:0,fontSize:`var(--font-size-sm)`,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-bold)`,lineHeight:`20px`,color:`var(--color-text-on-dark-strong)`},children:e}),(0,y.jsx)(`ul`,{className:`flex flex-col gap-2 list-none m-0 p-0`,children:t.map(e=>(0,y.jsx)(`li`,{children:(0,y.jsx)(`a`,{href:`#`,style:{fontSize:`var(--font-size-xs)`,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-regular)`,lineHeight:`20px`,color:`var(--color-text-on-dark-muted)`,textDecoration:`none`},className:`transition-colors duration-[var(--duration-micro)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`,children:e})},e))})]})}var kt=[`SubasCars`,`SubasBlog`,`¿Quiénes somos?`,`¿Cómo vender?`,`¿Cómo obtener acceso ilimitado a las subastas?`,`BlackSheep Nation`],At=[`Condiciones y Términos`,`Política de Protección de Datos Personales`,`Política de privacidad General`,`Testimonios`],jt=[{icon:(0,y.jsx)(St,{}),label:`Facebook`},{icon:(0,y.jsx)(Ct,{}),label:`Instagram`},{icon:(0,y.jsx)(wt,{}),label:`YouTube`},{icon:(0,y.jsx)(Tt,{}),label:`X/Twitter`}],Mt=[`Política de Cookies`,`Mapa del Sitio`,`Accesibilidad`];function Nt({className:e=``}){return(0,y.jsx)(`footer`,{style:{background:`var(--color-surface-sidebar)`},className:[`w-full`,e].join(` `),children:(0,y.jsxs)(`div`,{className:`flex flex-col gap-6 mx-auto px-8 pt-8 pb-6`,style:{maxWidth:`var(--layout-max-width)`},children:[(0,y.jsxs)(`div`,{className:`flex justify-between`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-4`,style:{width:`200px`,flexShrink:0},children:[(0,y.jsx)(Dt,{}),(0,y.jsx)(`p`,{style:{margin:0,fontSize:`var(--font-size-xs)`,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-regular)`,lineHeight:`20px`,color:`var(--color-text-on-dark-muted)`},children:`Ecosistema digital de subastas de autos basado en comunidad y tecnología.`})]}),(0,y.jsxs)(`div`,{className:`flex gap-6`,children:[(0,y.jsx)(`div`,{style:{width:`230px`,flexShrink:0},children:(0,y.jsx)(Ot,{title:`Plataforma`,links:kt})}),(0,y.jsx)(`div`,{style:{width:`230px`,flexShrink:0},children:(0,y.jsx)(Ot,{title:`Legal & Compliance`,links:At})}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-4`,style:{width:`215px`,flexShrink:0},children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsx)(`p`,{style:{margin:0,fontSize:`var(--font-size-sm)`,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-bold)`,lineHeight:`20px`,color:`var(--color-text-on-dark-strong)`},children:`Contacto`}),(0,y.jsx)(`a`,{href:`#`,style:{fontSize:`var(--font-size-xs)`,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-regular)`,lineHeight:`20px`,color:`var(--color-text-on-dark-muted)`,textDecoration:`none`},className:`transition-colors duration-[var(--duration-micro)] hover:text-white`,children:`Contáctanos`})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,y.jsx)(`p`,{style:{margin:0,fontSize:`var(--font-size-sm)`,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-bold)`,lineHeight:`20px`,color:`var(--color-text-on-dark-strong)`},children:`Encuéntranos en`}),(0,y.jsx)(`div`,{className:`flex items-center gap-3`,children:jt.map(({icon:e,label:t})=>(0,y.jsx)(`a`,{href:`#`,"aria-label":t,style:{color:`var(--color-text-on-dark-muted)`},className:`transition-colors duration-[var(--duration-micro)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`,children:e},t))})]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-3 mt-2`,children:[(0,y.jsx)(Et,{}),(0,y.jsx)(`span`,{style:{fontSize:`var(--font-size-xs)`,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-semibold)`,lineHeight:`20px`,color:`white`,maxWidth:`95px`},children:`Libros de reclamaciones`})]})]})]})]}),(0,y.jsxs)(`div`,{className:`flex items-center justify-between pt-4`,style:{borderTop:`0.75px solid var(--color-border-nav-separator)`},children:[(0,y.jsxs)(`p`,{style:{margin:0,fontSize:`var(--font-size-xs)`,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-regular)`,lineHeight:`20px`,color:`var(--color-text-on-dark-muted)`},children:[`© `,new Date().getFullYear(),` VMC Subastas es una marca registrada de Subastop S.A.C.`,(0,y.jsx)(`br`,{}),`Todos los derechos reservados.`]}),(0,y.jsx)(`div`,{className:`flex items-center gap-3`,children:Mt.map((e,t)=>(0,y.jsxs)(`span`,{className:`flex items-center gap-3`,children:[t>0&&(0,y.jsx)(`span`,{style:{color:`var(--color-text-on-dark-subtle)`,fontSize:`10px`},children:`•`}),(0,y.jsx)(`a`,{href:`#`,style:{fontSize:`var(--font-size-xs)`,fontFamily:`var(--font-body)`,fontWeight:`var(--weight-regular)`,lineHeight:`20px`,color:`var(--color-text-on-dark-muted)`,textDecoration:`none`},className:`transition-colors duration-[var(--duration-micro)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`,children:e})]},e))})]})]})})}function Pt({variant:e=`withSidebar`,user:t,activeSection:n,onNavigate:r,onLogin:i,children:a,className:o=``}){let[s,c]=(0,_.useState)(n??`subastas`);return(0,y.jsx)(`div`,{style:{background:`var(--color-surface-body)`},className:`min-h-screen`,children:(0,y.jsxs)(`div`,{style:{maxWidth:`var(--layout-max-width)`},className:[`mx-auto flex flex-col min-h-screen`,o].join(` `),children:[(0,y.jsx)(lt,{user:t,onLogin:i,className:`sticky top-0 z-[var(--z-sidebar)] shrink-0`}),(0,y.jsxs)(`div`,{className:`flex flex-1`,children:[e===`withSidebar`&&(0,y.jsx)(xt,{activeId:s,onNavigate:e=>{c(e),r?.(e)},className:`sticky top-16 h-[calc(100vh-64px)] shrink-0`}),(0,y.jsx)(`main`,{className:`flex-1 min-w-0 bg-[var(--color-surface-page)]`,style:{padding:`var(--spacing-section-x)`},children:a})]}),(0,y.jsx)(Nt,{})]})})}function Ft({filled:e}){return(0,y.jsx)(`svg`,{width:`14`,height:`13`,viewBox:`0 0 18 16`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M9 14.5S1 9.5 1 4.5A4 4 0 0 1 9 3a4 4 0 0 1 8 1.5C17 9.5 9 14.5 9 14.5Z`,fill:e?`var(--color-action-primary)`:`none`,stroke:e?`var(--color-action-primary)`:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function It({title:e=`TOYOTA HILUX`,subtitle:t=`2024 | LIMA, PERÚ`,priceLabel:n=`PRECIO BASE`,currency:r=`US$`,price:i=`17,999`,imageUrl:a,isFavorited:o=!1,onFavorite:s,onClick:c,className:l=``}){return(0,y.jsxs)(`article`,{onClick:c,role:c?`button`:void 0,tabIndex:c?0:void 0,onKeyDown:c?e=>{(e.key===`Enter`||e.key===` `)&&c()}:void 0,className:[`flex flex-col w-full`,`bg-[var(--color-surface-card)]`,`rounded-[var(--radius-card)]`,`overflow-hidden`,c?`cursor-pointer`:``,`transition-shadow duration-[var(--duration-standard)]`,`hover:shadow-[var(--shadow-card-hover)]`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`,l].filter(Boolean).join(` `),style:{boxShadow:`0px 8px 24px 0px rgba(34,0,92,0.08)`,borderBottom:`3px solid var(--color-action-cta)`},children:[(0,y.jsx)(`div`,{className:`w-full aspect-[4/3] shrink-0 overflow-hidden bg-[var(--gray-100)]`,children:a?(0,y.jsx)(`img`,{src:a,alt:e,className:`w-full h-full object-cover`}):(0,y.jsx)(`div`,{className:`w-full h-full flex items-center justify-center`,style:{background:`linear-gradient(150deg, #3d3d4f 0%, #2a2a38 100%)`},children:(0,y.jsxs)(`svg`,{width:`48`,height:`24`,viewBox:`0 0 72 36`,fill:`white`,"aria-hidden":`true`,opacity:`0.3`,children:[(0,y.jsx)(`path`,{d:`M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z`}),(0,y.jsx)(`circle`,{cx:`18`,cy:`28`,r:`4`,fill:`none`,stroke:`white`,strokeWidth:`2`}),(0,y.jsx)(`circle`,{cx:`54`,cy:`28`,r:`4`,fill:`none`,stroke:`white`,strokeWidth:`2`})]})})}),(0,y.jsxs)(`div`,{className:`flex flex-col flex-1 px-3 pt-2.5 pb-3`,children:[(0,y.jsx)(`h3`,{className:`m-0 uppercase truncate`,style:{fontFamily:`var(--font-body)`,fontWeight:800,fontSize:`11px`,lineHeight:`16px`,color:`var(--color-text-primary)`},children:e}),(0,y.jsx)(`p`,{className:`mt-0.5 mb-0`,style:{fontFamily:`'Roboto', sans-serif`,fontWeight:400,fontSize:`12px`,lineHeight:`16px`,color:`var(--color-text-primary)`},children:t}),(0,y.jsxs)(`div`,{className:`flex items-end justify-between mt-2`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-0`,children:[(0,y.jsx)(`span`,{style:{fontFamily:`var(--font-body)`,fontWeight:600,fontSize:`10px`,lineHeight:`16px`,color:`var(--color-text-muted)`},children:n}),(0,y.jsxs)(`span`,{style:{fontFamily:`var(--font-body)`,fontWeight:700,fontSize:`12px`,lineHeight:`20px`,color:`var(--color-text-primary)`},children:[r,` `,i]})]}),(0,y.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),s?.(e)},"aria-label":o?`Quitar de favoritos`:`Agregar a favoritos`,"aria-pressed":o,className:`flex items-center justify-center border cursor-pointer transition-colors duration-[var(--duration-micro)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`,style:{width:`29px`,height:`29px`,borderRadius:`50%`,background:`white`,borderColor:`var(--gray-200)`,color:o?`var(--color-action-primary)`:`var(--gray-400)`,flexShrink:0},children:(0,y.jsx)(Ft,{filled:o})})]})]})]})}var Lt=`import React from 'react'

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
    <svg width="14" height="13" viewBox="0 0 18 16" fill="none" aria-hidden="true">
      <path
        d="M9 14.5S1 9.5 1 4.5A4 4 0 0 1 9 3a4 4 0 0 1 8 1.5C17 9.5 9 14.5 9 14.5Z"
        fill={filled ? 'var(--color-action-primary)' : 'none'}
        stroke={filled ? 'var(--color-action-primary)' : 'currentColor'}
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
        'overflow-hidden',
        onClick ? 'cursor-pointer' : '',
        'transition-shadow duration-[var(--duration-standard)]',
        'hover:shadow-[var(--shadow-card-hover)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
        className,
      ].filter(Boolean).join(' ')}
      style={{
        boxShadow: '0px 8px 24px 0px rgba(34,0,92,0.08)',
        borderBottom: '3px solid var(--color-action-cta)',
      }}
    >
      {/* ── Imagen ── */}
      <div className="w-full aspect-[4/3] shrink-0 overflow-hidden bg-[var(--gray-100)]">
        {imageUrl
          ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(150deg, #3d3d4f 0%, #2a2a38 100%)' }}
            >
              <svg width="48" height="24" viewBox="0 0 72 36" fill="white" aria-hidden="true" opacity="0.3">
                <path d="M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z" />
                <circle cx="18" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="54" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          )
        }
      </div>

      {/* ── Contenido ── */}
      <div className="flex flex-col flex-1 px-3 pt-2.5 pb-3">

        {/* Nombre */}
        <h3
          className="m-0 uppercase truncate"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 800,
            fontSize: '11px',
            lineHeight: '16px',
            color: 'var(--color-text-primary)',
          }}
        >
          {title}
        </h3>

        {/* Año · Ubicación */}
        <p
          className="mt-0.5 mb-0"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
            color: 'var(--color-text-primary)',
          }}
        >
          {subtitle}
        </p>

        {/* Precio + Favorito */}
        <div className="flex items-end justify-between mt-2">

          {/* Precio */}
          <div className="flex flex-col gap-0">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '10px',
                lineHeight: '16px',
                color: 'var(--color-text-muted)',
              }}
            >
              {priceLabel}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '20px',
                color: 'var(--color-text-primary)',
              }}
            >
              {currency} {price}
            </span>
          </div>

          {/* Favorito */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(e) }}
            aria-label={isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-pressed={isFavorited}
            className="flex items-center justify-center border cursor-pointer transition-colors duration-[var(--duration-micro)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]"
            style={{
              width: '29px',
              height: '29px',
              borderRadius: '50%',
              background: 'white',
              borderColor: 'var(--gray-200)',
              color: isFavorited ? 'var(--color-action-primary)' : 'var(--gray-400)',
              flexShrink: 0,
            }}
          >
            <HeartIcon filled={isFavorited} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default VehicleCard
`;function Rt(){return(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M5 3l4 4-4 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function zt({cards:e}){let t=(0,_.useRef)(null),[n,r]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=t.current;if(!e)return;let n=()=>r(e.scrollLeft+e.clientWidth<e.scrollWidth-4);return n(),e.addEventListener(`scroll`,n,{passive:!0}),window.addEventListener(`resize`,n),()=>{e.removeEventListener(`scroll`,n),window.removeEventListener(`resize`,n)}},[e]),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsx)(`div`,{ref:t,className:`flex flex-row gap-3 px-5 pb-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,children:(e.length>0?e:Array.from({length:4},()=>({}))).map((e,t)=>(0,y.jsx)(`div`,{className:`shrink-0 w-[163px]`,children:(0,y.jsx)(It,{...e})},t))}),n&&(0,y.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute right-0 top-0 h-full w-[80px]`,style:{background:`linear-gradient(to right, transparent, var(--color-surface-section))`}})]})}function Bt({cards:e}){return(0,y.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`8px`,padding:`0 12px 12px`},children:(e.length>0?e:Array.from({length:4},()=>({}))).map((e,t)=>(0,y.jsx)(It,{...e},t))})}function Vt({title:e=`Ofertas Relacionadas`,offerCount:t,profileLinkLabel:n=`IR AL PERFIL`,onProfileClick:r,cards:i=[],layout:a=`carousel`,className:o=``}){return(0,y.jsxs)(`section`,{className:[`flex flex-col w-full bg-[var(--color-surface-section)]`,o].filter(Boolean).join(` `),children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between px-3 pt-4 pb-3`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-0`,children:[(0,y.jsx)(`h2`,{className:`m-0`,style:{fontFamily:`var(--font-body)`,fontWeight:800,fontSize:a===`carousel`?`18px`:`15px`,lineHeight:`24px`,color:`var(--color-text-primary)`},children:e}),t!==void 0&&(0,y.jsxs)(`span`,{style:{fontFamily:`var(--font-body)`,fontWeight:400,fontSize:`12px`,lineHeight:`16px`,color:`var(--color-text-secondary)`},children:[t,` OFERTAS`]})]}),r&&(0,y.jsxs)(`button`,{type:`button`,onClick:r,className:`flex items-center gap-1 bg-transparent border-0 cursor-pointer transition-colors duration-[var(--duration-micro)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`,style:{fontFamily:`var(--font-body)`,fontWeight:600,fontSize:`12px`,color:`var(--color-action-primary)`},children:[n,(0,y.jsx)(Rt,{})]})]}),a===`grid`?(0,y.jsx)(Bt,{cards:i}):(0,y.jsx)(zt,{cards:i})]})}function Ht(){return(0,y.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M2 5l2.5 2.5L8 3`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function Ut({label:e,checked:t,defaultChecked:n,onChange:r,disabled:i=!1,hint:a,id:o,name:s,className:c=``}){let l=(0,_.useId)(),u=o??l;return(0,y.jsxs)(`div`,{className:[`flex flex-col gap-1`,c].join(` `),children:[(0,y.jsxs)(`label`,{htmlFor:u,className:[`inline-flex items-start gap-2.5 cursor-pointer select-none`,i?`opacity-40 cursor-not-allowed`:``].join(` `),children:[(0,y.jsxs)(`div`,{className:`relative flex items-center justify-center shrink-0 mt-0.5`,children:[(0,y.jsx)(`input`,{type:`checkbox`,id:u,name:s,checked:t,defaultChecked:n,disabled:i,onChange:e=>r?.(e.target.checked),className:`peer sr-only`}),(0,y.jsx)(`div`,{className:[`size-4 rounded-[var(--radius-sm)] border-2 flex items-center justify-center`,`transition-[background-color,border-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--color-action-primary)]`,`peer-checked:bg-[var(--color-action-primary)] peer-checked:border-[var(--color-action-primary)]`,`peer-not-checked:bg-transparent peer-not-checked:border-[var(--gray-400)] hover:peer-not-checked:border-[var(--color-action-primary)]`,`border-[var(--gray-400)]`].join(` `),children:(0,y.jsx)(`span`,{className:`hidden peer-checked:flex text-white`,style:{display:`none`},children:(0,y.jsx)(Ht,{})})})]}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`,lineHeight:`var(--type-body-sm-lh)`},children:e})]}),a&&(0,y.jsx)(`p`,{className:`ml-[26px] m-0 text-[var(--color-text-muted)] font-[var(--font-body)]`,style:{fontSize:`var(--type-label-size)`},children:a})]})}function Wt({label:e,value:t,checked:n=!1,onChange:r,disabled:i=!1,hint:a,name:o,id:s,className:c=``}){let l=(0,_.useId)(),u=s??l;return(0,y.jsxs)(`div`,{className:[`flex flex-col gap-1`,c].join(` `),children:[(0,y.jsxs)(`label`,{htmlFor:u,className:[`inline-flex items-start gap-2.5 cursor-pointer select-none`,i?`opacity-40 cursor-not-allowed`:``].join(` `),children:[(0,y.jsxs)(`div`,{className:`relative flex items-center justify-center shrink-0 mt-0.5`,children:[(0,y.jsx)(`input`,{type:`radio`,id:u,name:o,value:t,checked:n,disabled:i,onChange:()=>r?.(t),className:`peer sr-only`}),(0,y.jsx)(`div`,{className:[`size-4 rounded-full border-2 flex items-center justify-center`,`transition-[border-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--color-action-primary)]`,n?`border-[var(--color-action-primary)]`:`border-[var(--gray-400)] hover:border-[var(--color-action-primary)]`].join(` `),children:n&&(0,y.jsx)(`div`,{className:`size-2 rounded-full`,style:{background:`var(--color-action-primary)`}})})]}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`,lineHeight:`var(--type-body-sm-lh)`},children:e})]}),a&&(0,y.jsx)(`p`,{className:`ml-[26px] m-0 text-[var(--color-text-muted)] font-[var(--font-body)]`,style:{fontSize:`var(--type-label-size)`},children:a})]})}function Gt(){return(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`4.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M10.5 10.5L13 13`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function Kt(){return(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M3 3l8 8M11 3l-8 8`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})})}function qt({placeholder:e=`Buscar vehículo o lote...`,value:t,defaultValue:n,onChange:r,onSearch:i,onClear:a,disabled:o=!1,id:s,className:c=``}){let l=(0,_.useId)(),u=s??l,[d,f]=(0,_.useState)(n??``),p=(0,_.useRef)(null),m=t!==void 0,h=m?t:d,g=h.length>0,v=e=>{let t=e.target.value;m||f(t),r?.(t)},b=e=>{e.key===`Enter`&&i?.(h),e.key===`Escape`&&x()},x=()=>{m||f(``),r?.(``),a?.(),p.current?.focus()};return(0,y.jsxs)(`div`,{className:[`relative flex items-center w-full`,c].join(` `),children:[(0,y.jsx)(`span`,{className:`absolute left-3 text-[var(--color-text-muted)] pointer-events-none`,children:(0,y.jsx)(Gt,{})}),(0,y.jsx)(`input`,{ref:p,id:u,type:`search`,value:h,placeholder:e,disabled:o,onChange:v,onKeyDown:b,autoComplete:`off`,className:[`w-full h-10 pl-9 pr-3`,g?`pr-9`:`pr-3`,`rounded-[var(--radius-btn)]`,`bg-[var(--color-surface-input)]`,`font-[var(--font-body)] text-[var(--color-text-on-surface)]`,`border-0 outline-none`,`transition-[box-shadow,background-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`placeholder:text-[var(--color-text-muted)]`,`focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]`,o?`opacity-40 cursor-not-allowed`:``,`[&::-webkit-search-cancel-button]:hidden`].filter(Boolean).join(` `),style:{fontSize:`var(--type-body-sm-size)`}}),g&&!o&&(0,y.jsx)(`button`,{type:`button`,onClick:x,"aria-label":`Limpiar búsqueda`,className:[`absolute right-3`,`size-5 flex items-center justify-center`,`rounded-full border-0 cursor-pointer`,`text-[var(--color-text-muted)] hover:text-[var(--color-text-on-surface)]`,`bg-[var(--gray-300)] hover:bg-[var(--gray-400)]`,`transition-colors duration-[var(--duration-micro)]`,`focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-action-primary)]`].join(` `),children:(0,y.jsx)(Kt,{})})]})}function Jt(){return(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M3 5l4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function Yt({label:e,options:t,value:n,defaultValue:r,onChange:i,placeholder:a=`Seleccionar...`,hint:o,error:s,disabled:c=!1,id:l,name:u,className:d=``}){let f=(0,_.useId)(),p=l??f,m=o||s?`${p}-hint`:void 0,h=!!s;return(0,y.jsxs)(`div`,{className:[`flex flex-col gap-1.5 w-full`,d].join(` `),children:[(0,y.jsx)(`label`,{htmlFor:p,className:[`font-[var(--font-body)] font-[var(--weight-semibold)] uppercase`,`text-[var(--color-text-body)]`,c?`text-[var(--color-text-disabled)]`:``].filter(Boolean).join(` `),style:{fontSize:`var(--type-label-size)`,letterSpacing:`var(--tracking-wider)`},children:e}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsxs)(`select`,{id:p,name:u,value:n,defaultValue:r,disabled:c,onChange:e=>i?.(e.target.value),"aria-describedby":m,"aria-invalid":h||void 0,className:[`w-full h-10 pl-3 pr-9 appearance-none`,`rounded-[var(--radius-btn)]`,`bg-[var(--color-surface-input)]`,`font-[var(--font-body)] text-[var(--color-text-on-surface)]`,`border-0 outline-none cursor-pointer`,`transition-[box-shadow] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]`,h?`shadow-[0_0_0_1.5px_var(--red-500)]`:``,c?`opacity-40 cursor-not-allowed`:``].filter(Boolean).join(` `),style:{fontSize:`var(--type-body-sm-size)`},children:[a&&(0,y.jsx)(`option`,{value:``,disabled:!0,children:a}),t.map(e=>(0,y.jsx)(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))]}),(0,y.jsx)(`span`,{className:`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]`,children:(0,y.jsx)(Jt,{})})]}),(o||s)&&(0,y.jsx)(`p`,{id:m,className:[`font-[var(--font-body)]`,h?`text-[var(--red-500)]`:`text-[var(--color-text-muted)]`].join(` `),style:{fontSize:`var(--type-label-size)`},children:s??o})]})}var Xt={success:{bg:`var(--color-surface-card)`,border:`oklch(0.637 0.207 25.500 / 0)`,text:`oklch(0.4 0.15 145)`,icon:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`,stroke:`oklch(0.4 0.15 145)`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M5 8l2 2 4-4`,stroke:`oklch(0.4 0.15 145)`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`})]})},error:{bg:`oklch(0.637 0.207 25.500 / 0.08)`,border:`oklch(0.637 0.207 25.500 / 0.30)`,text:`var(--red-500)`,icon:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`,stroke:`var(--red-500)`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M8 5v3.5M8 10.5v.5`,stroke:`var(--red-500)`,strokeWidth:`1.4`,strokeLinecap:`round`})]})},warning:{bg:`oklch(0.784 0.172 68.000 / 0.08)`,border:`oklch(0.784 0.172 68.000 / 0.30)`,text:`oklch(0.55 0.15 68)`,icon:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`path`,{d:`M8 2L14.5 13.5H1.5L8 2Z`,stroke:`oklch(0.55 0.15 68)`,strokeWidth:`1.4`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M8 7v2.5M8 11v.5`,stroke:`oklch(0.55 0.15 68)`,strokeWidth:`1.4`,strokeLinecap:`round`})]})},info:{bg:`oklch(0.761 0.130 197.000 / 0.08)`,border:`oklch(0.761 0.130 197.000 / 0.30)`,text:`var(--color-action-primary)`,icon:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`,stroke:`var(--color-action-primary)`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M8 7.5v4M8 5v.5`,stroke:`var(--color-action-primary)`,strokeWidth:`1.4`,strokeLinecap:`round`})]})}};function Zt({type:e,message:t,isDismissible:n=!1,hasIcon:r=!0,className:i=``}){let[a,o]=(0,_.useState)(!1);if(a)return null;let{bg:s,border:c,text:l,icon:u}=Xt[e];return(0,y.jsxs)(`div`,{role:`alert`,className:[`flex items-start gap-2.5 px-3 py-2.5 rounded-[var(--radius-btn)]`,i].join(` `),style:{background:s,border:`1px solid ${c}`,color:l},children:[r&&(0,y.jsx)(`span`,{className:`shrink-0 mt-0.5`,children:u}),(0,y.jsx)(`span`,{className:`flex-1 font-[var(--font-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:t}),n&&(0,y.jsx)(`button`,{type:`button`,onClick:()=>o(!0),"aria-label":`Cerrar`,className:`shrink-0 opacity-60 hover:opacity-100 transition-opacity border-0 bg-transparent cursor-pointer p-0`,style:{color:l},children:(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M2 2l10 10M12 2L2 12`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})})})]})}var Qt={success:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`,stroke:`oklch(0.4 0.15 145)`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M5 8l2 2 4-4`,stroke:`oklch(0.4 0.15 145)`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),error:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`,stroke:`var(--red-500)`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M8 5v3.5M8 10.5v.5`,stroke:`var(--red-500)`,strokeWidth:`1.4`,strokeLinecap:`round`})]}),warning:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`path`,{d:`M8 2L14.5 13.5H1.5L8 2Z`,stroke:`var(--amber-500)`,strokeWidth:`1.4`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M8 7v2.5M8 11v.5`,stroke:`var(--amber-500)`,strokeWidth:`1.4`,strokeLinecap:`round`})]}),info:(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,y.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6.5`,stroke:`var(--color-action-primary)`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M8 7.5v4M8 5v.5`,stroke:`var(--color-action-primary)`,strokeWidth:`1.4`,strokeLinecap:`round`})]})};function $t({type:e,message:t,duration:n=4e3,onDismiss:r}){let[i,a]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=setTimeout(()=>a(!0),10),t=setTimeout(()=>{a(!1),setTimeout(()=>r?.(),300)},n);return()=>{clearTimeout(e),clearTimeout(t)}},[n,r]),(0,y.jsxs)(`div`,{role:`status`,"aria-live":`polite`,className:[`flex items-center gap-2.5 px-4 py-3 min-w-[280px] max-w-[400px]`,`rounded-[var(--radius-btn)]`,`bg-[var(--color-surface-card)]`,`shadow-[var(--shadow-lg)]`,`border border-[var(--color-border-ghost)]`,`transition-[opacity,transform] duration-[var(--duration-standard)] ease-[var(--easing-standard)]`,i?`opacity-100 translate-y-0`:`opacity-0 translate-y-2`].join(` `),children:[(0,y.jsx)(`span`,{className:`shrink-0`,children:Qt[e]}),(0,y.jsx)(`span`,{className:`flex-1 font-[var(--font-body)] text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:t}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>{a(!1),setTimeout(()=>r?.(),300)},"aria-label":`Cerrar`,className:`shrink-0 text-[var(--color-text-muted)] hover:text-[var(--color-text-on-surface)] border-0 bg-transparent cursor-pointer p-0 transition-colors duration-[var(--duration-micro)]`,children:(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M2 2l10 10M12 2L2 12`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})})})]})}function en({children:e}){return(0,y.jsx)(`div`,{className:`fixed bottom-6 right-6 flex flex-col gap-2 z-[var(--z-toast)]`,"aria-label":`Notificaciones`,children:e})}var tn=m(),nn={sm:`max-w-[400px]`,md:`max-w-[560px]`,lg:`max-w-[720px]`};function rn({isOpen:e,onClose:t,title:n,size:r=`md`,isDismissible:i=!0,children:a,footer:o}){let s=(0,_.useCallback)(e=>{e.key===`Escape`&&i&&t()},[t,i]);return(0,_.useEffect)(()=>{if(e)return document.addEventListener(`keydown`,s),document.body.style.overflow=`hidden`,()=>{document.removeEventListener(`keydown`,s),document.body.style.overflow=``}},[e,s]),e?(0,tn.createPortal)((0,y.jsxs)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":n?`modal-title`:void 0,className:`fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4`,children:[(0,y.jsx)(`div`,{className:`absolute inset-0 bg-[var(--purple-900)]/60 backdrop-blur-[2px]`,onClick:i?t:void 0,"aria-hidden":`true`}),(0,y.jsxs)(`div`,{className:[`relative w-full flex flex-col`,nn[r],`bg-[var(--color-surface-card)]`,`rounded-[var(--radius-card)]`,`shadow-[var(--shadow-lg)]`,`max-h-[90dvh]`].join(` `),children:[(n||i)&&(0,y.jsxs)(`div`,{className:`flex items-center justify-between px-6 py-4 shrink-0 border-b border-[var(--color-border-ghost)]`,children:[n&&(0,y.jsx)(`h2`,{id:`modal-title`,className:`font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-primary)]`,style:{fontSize:`var(--type-body-lg-size)`},children:n}),i&&(0,y.jsx)(`button`,{type:`button`,onClick:t,"aria-label":`Cerrar`,className:`shrink-0 ml-auto text-[var(--color-text-muted)] hover:text-[var(--color-text-on-surface)] border-0 bg-transparent cursor-pointer p-1 rounded transition-colors duration-[var(--duration-micro)]`,children:(0,y.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3 3l10 10M13 3L3 13`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})})})]}),(0,y.jsx)(`div`,{className:`flex-1 overflow-y-auto px-6 py-5 font-[var(--font-body)] text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:a}),o&&(0,y.jsx)(`div`,{className:`shrink-0 flex items-center justify-end gap-2 px-6 py-4 border-t border-[var(--color-border-ghost)]`,children:o})]})]}),document.body):null}var an=`animate-pulse bg-[var(--gray-200)] rounded-[var(--radius-btn)]`;function on({variant:e=`text`,width:t,height:n,lines:r=1,className:i=``}){let a={width:t===void 0?void 0:typeof t==`number`?`${t}px`:t,height:n===void 0?void 0:typeof n==`number`?`${n}px`:n};if(e===`circle`){let e=t??n??40,r=typeof e==`number`?`${e}px`:e;return(0,y.jsx)(`div`,{className:[`animate-pulse bg-[var(--gray-200)] rounded-full shrink-0`,i].join(` `),style:{width:r,height:r},"aria-hidden":`true`})}return e===`card`?(0,y.jsxs)(`div`,{className:[`flex flex-col gap-3 p-4 bg-[var(--color-surface-card)] rounded-[var(--radius-card)] shadow-[var(--shadow-sm)]`,i].join(` `),"aria-hidden":`true`,children:[(0,y.jsx)(`div`,{className:`${an} h-[132px] w-full rounded-[var(--radius-btn)]`}),(0,y.jsx)(`div`,{className:`${an} h-3 w-3/4`}),(0,y.jsx)(`div`,{className:`${an} h-3 w-1/2`}),(0,y.jsxs)(`div`,{className:`flex justify-between mt-1`,children:[(0,y.jsx)(`div`,{className:`${an} h-5 w-24`}),(0,y.jsx)(`div`,{className:`${an} h-5 w-16`})]})]}):e===`text`&&r>1?(0,y.jsx)(`div`,{className:[`flex flex-col gap-2`,i].join(` `),"aria-hidden":`true`,children:Array.from({length:r}).map((e,t)=>(0,y.jsx)(`div`,{className:an,style:{height:12,width:t===r-1?`66%`:`100%`}},t))}):(0,y.jsx)(`div`,{className:[an,i].join(` `),style:{height:a.height??(e===`rect`?40:12),width:a.width??(e===`rect`?`100%`:`80%`)},"aria-hidden":`true`})}function sn({items:e,activeId:t,onChange:n,variant:r=`underline`,className:i=``}){return r===`pill`?(0,y.jsx)(`div`,{role:`tablist`,className:[`inline-flex gap-1 p-1 rounded-[var(--radius-card)] bg-[var(--color-surface-input)]`,i].join(` `),children:e.map(e=>(0,y.jsxs)(`button`,{role:`tab`,type:`button`,id:`tab-${e.id}`,"aria-selected":e.id===t,"aria-controls":`panel-${e.id}`,disabled:e.disabled,onClick:()=>n(e.id),className:[`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-btn)]`,`font-[var(--font-body)] font-[var(--weight-semibold)]`,`transition-[background,color,box-shadow] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`border-0 cursor-pointer outline-none`,`focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-action-primary)]`,e.id===t?`bg-[var(--color-surface-card)] text-[var(--color-text-primary)] shadow-[var(--shadow-sm)]`:`bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-body)]`,e.disabled?`opacity-40 cursor-not-allowed`:``].filter(Boolean).join(` `),style:{fontSize:`var(--type-body-sm-size)`},children:[e.label,e.count!==void 0&&(0,y.jsx)(`span`,{className:[`inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-semibold`,e.id===t?`bg-[var(--color-action-primary)] text-white`:`bg-[var(--gray-300)] text-[var(--gray-600)]`].join(` `),children:e.count})]},e.id))}):(0,y.jsx)(`div`,{role:`tablist`,className:[`flex border-b border-[var(--color-border-ghost)]`,i].join(` `),children:e.map(e=>(0,y.jsxs)(`button`,{role:`tab`,type:`button`,id:`tab-${e.id}`,"aria-selected":e.id===t,"aria-controls":`panel-${e.id}`,disabled:e.disabled,onClick:()=>n(e.id),className:[`inline-flex items-center gap-1.5 px-4 py-2.5 -mb-px`,`font-[var(--font-body)] font-[var(--weight-semibold)]`,`transition-[color,border-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`border-b-2 border-transparent`,`bg-transparent cursor-pointer outline-none`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]`,e.id===t?`border-[var(--color-action-primary)] text-[var(--color-action-primary)]`:`text-[var(--color-text-muted)] hover:text-[var(--color-text-body)]`,e.disabled?`opacity-40 cursor-not-allowed`:``].filter(Boolean).join(` `),style:{fontSize:`var(--type-body-sm-size)`},children:[e.label,e.count!==void 0&&(0,y.jsx)(`span`,{className:[`inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-semibold`,e.id===t?`bg-[var(--color-action-primary)] text-white`:`bg-[var(--gray-300)] text-[var(--gray-600)]`].join(` `),children:e.count})]},e.id))})}function cn({id:e,title:t,content:n,isOpen:r,onToggle:i,disabled:a=!1}){return(0,y.jsxs)(`div`,{className:`border-b border-[var(--color-border-ghost)] last:border-b-0`,children:[(0,y.jsxs)(`button`,{type:`button`,id:`${e}-trigger`,"aria-expanded":r,"aria-controls":`${e}-panel`,disabled:a,onClick:i,className:[`w-full flex items-center justify-between px-4 py-3.5 gap-3`,`bg-transparent border-0 cursor-pointer text-left outline-none`,`font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]`,`transition-colors duration-[var(--duration-micro)]`,`hover:bg-[var(--gray-50)]`,`focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--color-action-primary)]`,a?`opacity-40 cursor-not-allowed`:``].filter(Boolean).join(` `),style:{fontSize:`var(--type-body-sm-size)`},children:[(0,y.jsx)(`span`,{children:t}),(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,className:[`shrink-0 text-[var(--color-text-muted)] transition-transform duration-[var(--duration-standard)]`,r?`rotate-180`:``].join(` `),children:(0,y.jsx)(`path`,{d:`M3 5l4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,y.jsx)(`div`,{id:`${e}-panel`,role:`region`,"aria-labelledby":`${e}-trigger`,hidden:!r,className:`px-4 pb-4 font-[var(--font-body)] text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:n})]})}function ln({items:e,allowMultiple:t=!1,className:n=``}){let r=(0,_.useId)(),[i,a]=(0,_.useState)(()=>{let t=new Set;return e.forEach((e,n)=>{e.defaultOpen&&t.add(e.id??`${r}-${n}`)}),t}),o=e=>{a(n=>{let r=new Set(n);return r.has(e)?r.delete(e):(t||r.clear(),r.add(e)),r})};return(0,y.jsx)(`div`,{className:[`bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] overflow-hidden`,n].join(` `),children:e.map((e,t)=>{let n=e.id??`${r}-${t}`;return(0,y.jsx)(cn,{id:n,title:e.title,content:e.content,isOpen:i.has(n),onToggle:()=>o(n),disabled:e.disabled},n)})})}var un={sm:`size-7`,md:`size-9`,lg:`size-11`},dn={ghost:{base:`bg-transparent text-[var(--color-text-muted)] hover:bg-[var(--gray-100)] hover:text-[var(--color-text-body)]`,active:`bg-[var(--gray-100)] text-[var(--color-action-primary)]`},filled:{base:`bg-[var(--color-action-primary)] text-white hover:bg-[var(--color-action-primary-hover)]`,active:`bg-[var(--color-action-primary-press)] text-white`},outline:{base:`bg-transparent text-[var(--color-text-body)] border border-[var(--color-border-ghost)] hover:bg-[var(--gray-50)] hover:border-[var(--gray-300)]`,active:`bg-[var(--gray-100)] text-[var(--color-action-primary)] border-[var(--color-action-primary)]`}};function fn({icon:e,label:t,variant:n=`ghost`,size:r=`md`,isActive:i=!1,disabled:a=!1,onClick:o,type:s=`button`,className:c=``}){let{base:l,active:u}=dn[n];return(0,y.jsx)(`button`,{type:s,"aria-label":t,"aria-pressed":i||void 0,disabled:a,onClick:o,className:[`inline-flex items-center justify-center shrink-0`,`rounded-[var(--radius-btn)]`,`cursor-pointer outline-none`,`transition-[background,color,border-color,box-shadow] duration-[var(--duration-micro)]`,`focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-action-primary)]`,un[r],i?u:l,a?`opacity-40 cursor-not-allowed pointer-events-none`:``,n===`outline`?``:`border-0`,c].filter(Boolean).join(` `),children:e})}function pn({orientation:e=`horizontal`,label:t,className:n=``}){return e===`vertical`?(0,y.jsx)(`div`,{role:`separator`,"aria-orientation":`vertical`,className:[`self-stretch w-px bg-[var(--color-border-ghost)] shrink-0`,n].join(` `)}):t?(0,y.jsxs)(`div`,{role:`separator`,"aria-orientation":`horizontal`,className:[`flex items-center gap-3`,n].join(` `),children:[(0,y.jsx)(`div`,{className:`flex-1 h-px bg-[var(--color-border-ghost)]`}),(0,y.jsx)(`span`,{className:`shrink-0 font-[var(--font-body)] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)]`,style:{fontSize:`var(--type-label-size)`},children:t}),(0,y.jsx)(`div`,{className:`flex-1 h-px bg-[var(--color-border-ghost)]`})]}):(0,y.jsx)(`hr`,{role:`separator`,className:[`border-0 border-t border-[var(--color-border-ghost)] w-full`,n].join(` `)})}var mn={xs:{container:`size-6`,text:`9px`,status:`size-1.5 border`},sm:{container:`size-8`,text:`11px`,status:`size-2 border`},md:{container:`size-10`,text:`14px`,status:`size-2.5 border`},lg:{container:`size-12`,text:`16px`,status:`size-3 border-2`},xl:{container:`size-16`,text:`20px`,status:`size-3.5 border-2`}},hn={online:`bg-emerald-400`,offline:`bg-[var(--gray-300)]`,busy:`bg-[var(--red-500)]`,away:`bg-[var(--amber-500)]`};function gn(e){return e.trim().split(/\s+/).slice(0,2).map(e=>e[0]).join(``).toUpperCase()}function _n(e){let t=[`var(--purple-700)`,`var(--cyan-500)`,`oklch(0.55 0.15 145)`,`oklch(0.55 0.15 30)`,`oklch(0.50 0.13 250)`,`oklch(0.52 0.14 320)`],n=0;for(let t of e)n=n*31+t.charCodeAt(0)&4294967295;return t[Math.abs(n)%t.length]}function vn({name:e,src:t,size:n=`md`,status:r,className:i=``}){let{container:a,text:o,status:s}=mn[n];return(0,y.jsxs)(`div`,{className:[`relative inline-flex shrink-0`,i].join(` `),children:[(0,y.jsx)(`div`,{className:[a,`rounded-full overflow-hidden flex items-center justify-center select-none`,`font-[var(--font-body)] font-[var(--weight-bold)] text-white`].join(` `),style:t?void 0:{background:_n(e),fontSize:o},"aria-label":e,children:t?(0,y.jsx)(`img`,{src:t,alt:e,className:`w-full h-full object-cover`,draggable:!1}):gn(e)}),r&&(0,y.jsx)(`span`,{className:[`absolute bottom-0 right-0 rounded-full border-white`,s,hn[r]].join(` `),"aria-label":r,role:`img`})]})}var yn={"16/9":`pb-[56.25%]`,"4/3":`pb-[75%]`,phi:`pb-[61.8%]`,"1/1":`pb-[100%]`,"3/2":`pb-[66.667%]`};function bn(){return(0,y.jsxs)(`svg`,{width:`40`,height:`40`,viewBox:`0 0 40 40`,fill:`none`,className:`text-[var(--gray-300)]`,children:[(0,y.jsx)(`rect`,{x:`4`,y:`8`,width:`32`,height:`24`,rx:`3`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`circle`,{cx:`14`,cy:`17`,r:`3`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M4 26l8-7 6 6 5-5 13 9`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinejoin:`round`})]})}function xn({src:e,alt:t,ratio:n=`16/9`,fit:r=`cover`,lazy:i=!0,className:a=``}){let[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(!1);return(0,y.jsx)(`div`,{className:[`relative w-full overflow-hidden rounded-[var(--radius-btn)] bg-[var(--gray-100)]`,yn[n],a].join(` `),children:c?(0,y.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center bg-[var(--gray-100)]`,children:(0,y.jsx)(bn,{})}):(0,y.jsxs)(y.Fragment,{children:[!o&&(0,y.jsx)(`div`,{className:`absolute inset-0 bg-[var(--gray-200)] animate-pulse`,"aria-hidden":`true`}),(0,y.jsx)(`img`,{src:e,alt:t,loading:i?`lazy`:`eager`,onLoad:()=>s(!0),onError:()=>l(!0),className:[`absolute inset-0 w-full h-full transition-opacity duration-[var(--duration-standard)]`,r===`cover`?`object-cover`:`object-contain`,o?`opacity-100`:`opacity-0`].join(` `),draggable:!1})]})})}var Sn=e=>e.toLocaleString(`es-PE`);function Cn({label:e,min:t,max:n,step:r=1,value:i,onChange:a,formatValue:o=Sn,disabled:s=!1,className:c=``}){let l=(0,_.useId)(),u=(i-t)/(n-t)*100;return(0,y.jsxs)(`div`,{className:[`flex flex-col gap-2`,c].join(` `),children:[e&&(0,y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,y.jsx)(`label`,{htmlFor:l,className:`font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)] tracking-[var(--tracking-wider)]`,style:{fontSize:`var(--type-label-size)`},children:e}),(0,y.jsx)(`span`,{className:`font-[var(--font-mono)] font-[var(--weight-medium)] tabular-nums text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:o(i)})]}),(0,y.jsxs)(`div`,{className:`relative flex items-center h-5`,children:[(0,y.jsx)(`div`,{className:`absolute inset-x-0 h-1.5 rounded-full bg-[var(--gray-200)]`}),(0,y.jsx)(`div`,{className:`absolute h-1.5 rounded-full bg-[var(--color-action-primary)] left-0`,style:{width:`${u}%`}}),(0,y.jsx)(`input`,{id:l,type:`range`,min:t,max:n,step:r,value:i,disabled:s,onChange:e=>a(Number(e.target.value)),className:[`relative w-full h-5 appearance-none bg-transparent cursor-pointer`,`disabled:opacity-40 disabled:cursor-not-allowed`,`[&::-webkit-slider-thumb]:appearance-none`,`[&::-webkit-slider-thumb]:size-4`,`[&::-webkit-slider-thumb]:rounded-full`,`[&::-webkit-slider-thumb]:bg-[var(--color-action-primary)]`,`[&::-webkit-slider-thumb]:border-2`,`[&::-webkit-slider-thumb]:border-white`,`[&::-webkit-slider-thumb]:shadow-[var(--shadow-sm)]`,`[&::-webkit-slider-thumb]:transition-transform`,`[&::-webkit-slider-thumb]:hover:scale-110`,`[&::-moz-range-thumb]:size-4`,`[&::-moz-range-thumb]:rounded-full`,`[&::-moz-range-thumb]:bg-[var(--color-action-primary)]`,`[&::-moz-range-thumb]:border-2`,`[&::-moz-range-thumb]:border-white`,`[&::-moz-range-thumb]:border-solid`].join(` `)})]}),(0,y.jsxs)(`div`,{className:`flex justify-between`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:o(t)}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:o(n)})]})]})}function wn({label:e,min:t,max:n,step:r=1,value:i,onChange:a,formatValue:o=Sn,disabled:s=!1,className:c=``}){let l=(0,_.useId)(),u=(0,_.useId)(),[d,f]=i,p=(d-t)/(n-t)*100,m=(f-t)/(n-t)*100,h=[`[&::-webkit-slider-thumb]:appearance-none`,`[&::-webkit-slider-thumb]:size-4`,`[&::-webkit-slider-thumb]:rounded-full`,`[&::-webkit-slider-thumb]:bg-[var(--color-action-primary)]`,`[&::-webkit-slider-thumb]:border-2`,`[&::-webkit-slider-thumb]:border-white`,`[&::-webkit-slider-thumb]:shadow-[var(--shadow-sm)]`,`[&::-webkit-slider-thumb]:hover:scale-110`,`[&::-webkit-slider-thumb]:transition-transform`,`[&::-moz-range-thumb]:size-4`,`[&::-moz-range-thumb]:rounded-full`,`[&::-moz-range-thumb]:bg-[var(--color-action-primary)]`,`[&::-moz-range-thumb]:border-2`,`[&::-moz-range-thumb]:border-white`,`[&::-moz-range-thumb]:border-solid`].join(` `);return(0,y.jsxs)(`div`,{className:[`flex flex-col gap-2`,c].join(` `),children:[e&&(0,y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)] tracking-[var(--tracking-wider)]`,style:{fontSize:`var(--type-label-size)`},children:e}),(0,y.jsxs)(`span`,{className:`font-[var(--font-mono)] font-[var(--weight-medium)] tabular-nums text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:[o(d),` — `,o(f)]})]}),(0,y.jsxs)(`div`,{className:`relative flex items-center h-5`,children:[(0,y.jsx)(`div`,{className:`absolute inset-x-0 h-1.5 rounded-full bg-[var(--gray-200)]`}),(0,y.jsx)(`div`,{className:`absolute h-1.5 rounded-full bg-[var(--color-action-primary)]`,style:{left:`${p}%`,right:`${100-m}%`}}),(0,y.jsx)(`input`,{id:l,type:`range`,min:t,max:f-r,step:r,value:d,disabled:s,onChange:e=>a([Math.min(Number(e.target.value),f-r),f]),"aria-label":`${e??``} mínimo`,className:[`absolute w-full h-5 appearance-none bg-transparent cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed`,h].join(` `)}),(0,y.jsx)(`input`,{id:u,type:`range`,min:d+r,max:n,step:r,value:f,disabled:s,onChange:e=>a([d,Math.max(Number(e.target.value),d+r)]),"aria-label":`${e??``} máximo`,className:[`absolute w-full h-5 appearance-none bg-transparent cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed`,h].join(` `)})]}),(0,y.jsxs)(`div`,{className:`flex justify-between`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:o(t)}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:o(n)})]})]})}var Tn={active:{label:`Activa`,color:`oklch(0.4 0.15 145)`,bg:`oklch(0.637 0.207 145 / 0.08)`},pending:{label:`Pendiente`,color:`var(--amber-500)`,bg:`oklch(0.784 0.172 68.000 / 0.10)`},suspended:{label:`Suspendida`,color:`var(--red-500)`,bg:`oklch(0.637 0.207 25.500 / 0.08)`}};function En(){return(0,y.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`2`,y:`4`,width:`14`,height:`11`,rx:`2`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M2 7h14`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,y.jsx)(`circle`,{cx:`13.5`,cy:`11`,r:`1.5`,fill:`currentColor`})]})}function Dn({balance:e,currency:t=`S/`,status:n=`active`,userName:r,reserved:i,onDeposit:a,onWithdraw:o,compact:s=!1,className:c=``}){let{label:l,color:u,bg:d}=Tn[n],f=i===void 0?e:e-i;return s?(0,y.jsxs)(`div`,{className:[`inline-flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-btn)] bg-[var(--color-surface-input)]`,c].join(` `),children:[(0,y.jsx)(`span`,{style:{color:u},className:`shrink-0`,children:(0,y.jsx)(En,{})}),(0,y.jsxs)(`div`,{className:`flex flex-col leading-none`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)]`,style:{fontSize:`9px`},children:`Saldo`}),(0,y.jsxs)(`span`,{className:`font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums`,style:{fontSize:`var(--type-body-sm-size)`,color:u},children:[t,` `,f.toLocaleString(`es-PE`)]})]})]}):(0,y.jsxs)(`div`,{className:[`bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] overflow-hidden`,c].join(` `),children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-ghost)]`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-2 text-[var(--color-text-muted)]`,children:[(0,y.jsx)(En,{}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:r?`Billetera de ${r}`:`Mi billetera`})]}),(0,y.jsx)(`span`,{className:`px-2 py-0.5 rounded-full font-[var(--font-body)] font-[var(--weight-semibold)]`,style:{fontSize:`10px`,color:u,background:d},children:l})]}),(0,y.jsxs)(`div`,{className:`px-4 py-4`,children:[(0,y.jsx)(`p`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)] tracking-[var(--tracking-wider)] mb-1`,style:{fontSize:`var(--type-label-size)`},children:`Saldo disponible`}),(0,y.jsxs)(`p`,{className:`font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums leading-none`,style:{fontSize:`var(--type-body-lg-size)`,color:`var(--color-text-primary)`},children:[(0,y.jsx)(`span`,{className:`text-[var(--color-text-muted)] font-[var(--weight-semibold)] mr-1`,style:{fontSize:`var(--type-body-sm-size)`},children:t}),f.toLocaleString(`es-PE`)]}),i!==void 0&&i>0&&(0,y.jsxs)(`div`,{className:`flex items-center gap-1.5 mt-2`,children:[(0,y.jsxs)(`svg`,{width:`11`,height:`11`,viewBox:`0 0 11 11`,fill:`none`,className:`text-[var(--amber-500)] shrink-0`,children:[(0,y.jsx)(`circle`,{cx:`5.5`,cy:`5.5`,r:`4.5`,stroke:`currentColor`,strokeWidth:`1.2`}),(0,y.jsx)(`path`,{d:`M5.5 3.5v2.5M5.5 7.5v.3`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinecap:`round`})]}),(0,y.jsxs)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:[t,` `,i.toLocaleString(`es-PE`),` reservado en pujas activas`]})]})]}),(a||o)&&(0,y.jsxs)(`div`,{className:`flex gap-2 px-4 pb-4`,children:[a&&(0,y.jsx)(`button`,{type:`button`,onClick:a,className:`flex-1 h-9 rounded-[var(--radius-btn)] bg-[var(--color-action-primary)] text-white font-[var(--font-body)] font-[var(--weight-semibold)] border-0 cursor-pointer hover:bg-[var(--color-action-primary-hover)] transition-colors duration-[var(--duration-micro)]`,style:{fontSize:`var(--type-body-sm-size)`},children:`Depositar`}),o&&(0,y.jsx)(`button`,{type:`button`,onClick:o,className:`flex-1 h-9 rounded-[var(--radius-btn)] bg-transparent text-[var(--color-text-body)] font-[var(--font-body)] font-[var(--weight-semibold)] border border-[var(--color-border-ghost)] cursor-pointer hover:bg-[var(--gray-50)] transition-colors duration-[var(--duration-micro)]`,style:{fontSize:`var(--type-body-sm-size)`},children:`Retirar`})]})]})}function On(){return(0,y.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`2`,y:`4`,width:`16`,height:`13`,rx:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`circle`,{cx:`10`,cy:`10.5`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M10 7V5M10 16v-2M4 10.5H2M18 10.5h-2`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,y.jsx)(`path`,{d:`M10 2v2`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function kn({title:e,subtitle:t,eyebrow:n,primaryAction:r,secondaryAction:i,backgroundImage:a,stat1:o,stat2:s,stat3:c,className:l=``}){let u=[o,s,c].filter(Boolean);return(0,y.jsxs)(`section`,{className:[`relative overflow-hidden`,`flex flex-col justify-center`,`min-h-[400px] px-6 py-14`,l].join(` `),style:{background:`var(--color-surface-hero-gradient)`},children:[a&&(0,y.jsx)(`div`,{className:`absolute inset-0 bg-cover bg-center`,style:{backgroundImage:`url(${a})`},"aria-hidden":`true`,children:(0,y.jsx)(`div`,{className:`absolute inset-0`,style:{background:`var(--purple-900)/70`}})}),(0,y.jsx)(`div`,{className:`absolute inset-0 opacity-[0.03] pointer-events-none`,style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`},"aria-hidden":`true`}),(0,y.jsxs)(`div`,{className:`relative z-10 max-w-[var(--layout-max-width)] mx-auto w-full`,children:[n&&(0,y.jsxs)(`div`,{className:`inline-flex items-center gap-2 mb-4`,children:[(0,y.jsx)(`span`,{className:`text-[var(--cyan-500)]`,children:(0,y.jsx)(On,{})}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] uppercase tracking-[var(--tracking-wider)] text-[var(--cyan-500)]`,style:{fontSize:`var(--type-label-size)`},children:n})]}),(0,y.jsx)(`h1`,{className:`font-[var(--font-body)] font-[var(--weight-extrabold)] text-white leading-tight mb-4`,style:{fontSize:`var(--type-display-lg-size, 38px)`,maxWidth:`600px`},children:e}),t&&(0,y.jsx)(`p`,{className:`font-[var(--font-body)] text-white/70 mb-8 max-w-[480px]`,style:{fontSize:`var(--type-body-size)`},children:t}),(r||i)&&(0,y.jsxs)(`div`,{className:`flex flex-wrap gap-3 mb-10`,children:[r&&(0,y.jsx)(`button`,{type:`button`,onClick:r.onClick,className:`h-12 px-6 rounded-[var(--radius-btn)] font-[var(--font-body)] font-[var(--weight-bold)] border-0 cursor-pointer transition-all duration-[var(--duration-micro)] hover:scale-[1.02] active:scale-[0.98]`,style:{background:`var(--color-action-cta)`,color:`var(--purple-900)`,fontSize:`var(--type-body-sm-size)`},children:r.label}),i&&(0,y.jsx)(`button`,{type:`button`,onClick:i.onClick,className:`h-12 px-6 rounded-[var(--radius-btn)] font-[var(--font-body)] font-[var(--weight-semibold)] bg-white/10 text-white border border-white/20 cursor-pointer hover:bg-white/20 transition-colors duration-[var(--duration-micro)]`,style:{fontSize:`var(--type-body-sm-size)`},children:i.label})]}),u.length>0&&(0,y.jsx)(`div`,{className:`flex flex-wrap gap-8 pt-8 border-t border-white/10`,children:u.map((e,t)=>e&&(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums text-white leading-none mb-0.5`,style:{fontSize:`var(--type-body-lg-size, 20px)`},children:e.value}),(0,y.jsx)(`p`,{className:`font-[var(--font-body)] text-white/50 uppercase tracking-[var(--tracking-wider)]`,style:{fontSize:`var(--type-label-size)`},children:e.label})]},t))})]})]})}function An({trigger:e,items:t,onSelect:n,align:r=`left`,className:i=``}){let[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(-1),l=(0,_.useId)(),u=(0,_.useRef)(null),d=(0,_.useRef)([]),f=t.filter(e=>!e.disabled);return(0,_.useEffect)(()=>{if(!a){c(-1);return}let e=e=>{u.current?.contains(e.target)||o(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[a]),(0,_.useEffect)(()=>{a&&s>=0&&d.current[s]?.focus()},[a,s]),(0,y.jsxs)(`div`,{ref:u,className:[`relative inline-block`,i].join(` `),onKeyDown:e=>{if(!a){(e.key===`Enter`||e.key===` `||e.key===`ArrowDown`)&&(e.preventDefault(),o(!0),c(0));return}if(e.key===`Escape`){o(!1);return}if(e.key===`ArrowDown`&&(e.preventDefault(),c(e=>Math.min(e+1,f.length-1))),e.key===`ArrowUp`&&(e.preventDefault(),c(e=>Math.max(e-1,0))),e.key===`Enter`&&s>=0){e.preventDefault();let t=f[s];t&&(n?.(t.id),o(!1))}},children:[(0,y.jsx)(`div`,{role:`button`,tabIndex:0,"aria-haspopup":`menu`,"aria-expanded":a,"aria-controls":l,onClick:()=>o(e=>!e),className:`outline-none cursor-pointer`,children:e}),a&&(0,y.jsx)(`div`,{id:l,role:`menu`,"aria-orientation":`vertical`,className:[`absolute top-full mt-1 z-[var(--z-dropdown)]`,`min-w-[180px] py-1`,`bg-[var(--color-surface-card)]`,`rounded-[var(--radius-card)]`,`shadow-[var(--shadow-lg)]`,`border border-[var(--color-border-ghost)]`,r===`right`?`right-0`:`left-0`].join(` `),children:t.map((e,r)=>{let i=f.indexOf(e);return(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`button`,{ref:t=>{e.disabled||(d.current[i]=t)},type:`button`,role:`menuitem`,disabled:e.disabled,onClick:()=>{e.disabled||(n?.(e.id),o(!1))},className:[`w-full flex items-center gap-2.5 px-3 py-2 text-left`,`font-[var(--font-body)] border-0 bg-transparent cursor-pointer outline-none`,`transition-colors duration-[var(--duration-micro)]`,e.danger?`text-[var(--red-500)] hover:bg-[oklch(0.637_0.207_25.500_/_0.06)] focus:bg-[oklch(0.637_0.207_25.500_/_0.06)]`:`text-[var(--color-text-body)] hover:bg-[var(--gray-50)] focus:bg-[var(--gray-50)]`,e.disabled?`opacity-40 cursor-not-allowed`:``].filter(Boolean).join(` `),style:{fontSize:`var(--type-body-sm-size)`},children:[e.icon&&(0,y.jsx)(`span`,{className:`shrink-0 text-[var(--color-text-muted)]`,children:e.icon}),(0,y.jsx)(`span`,{className:`flex-1`,children:e.label}),e.shortcut&&(0,y.jsx)(`span`,{className:`shrink-0 font-[var(--font-mono)] text-[var(--color-text-muted)]`,style:{fontSize:`10px`},children:e.shortcut})]}),e.dividerAfter&&r<t.length-1&&(0,y.jsx)(`div`,{className:`my-1 border-t border-[var(--color-border-ghost)]`,role:`separator`})]},e.id)})})]})}var jn={top:{tip:`bottom-full left-1/2 -translate-x-1/2 mb-2`,arrow:`top-full left-1/2 -translate-x-1/2 border-t-[var(--purple-900)] border-x-transparent border-b-0`},bottom:{tip:`top-full left-1/2 -translate-x-1/2 mt-2`,arrow:`bottom-full left-1/2 -translate-x-1/2 border-b-[var(--purple-900)] border-x-transparent border-t-0`},left:{tip:`right-full top-1/2 -translate-y-1/2 mr-2`,arrow:`left-full top-1/2 -translate-y-1/2 border-l-[var(--purple-900)] border-y-transparent border-r-0`},right:{tip:`left-full top-1/2 -translate-y-1/2 ml-2`,arrow:`right-full top-1/2 -translate-y-1/2 border-r-[var(--purple-900)] border-y-transparent border-l-0`}};function Mn({content:e,placement:t=`top`,delay:n=300,children:r,className:i=``}){let[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(!1),l=(0,_.useRef)(null),u=(0,_.useId)(),{tip:d,arrow:f}=jn[t],p=()=>{l.current=setTimeout(()=>{c(!0),setTimeout(()=>o(!0),10)},n)},m=()=>{l.current&&clearTimeout(l.current),o(!1),setTimeout(()=>c(!1),150)};return(0,_.useEffect)(()=>()=>{l.current&&clearTimeout(l.current)},[]),(0,y.jsxs)(`div`,{className:[`relative inline-flex`,i].join(` `),onMouseEnter:p,onMouseLeave:m,onFocus:p,onBlur:m,children:[(0,y.jsx)(`div`,{"aria-describedby":a?u:void 0,children:r}),s&&(0,y.jsxs)(`div`,{id:u,role:`tooltip`,className:[`absolute z-[var(--z-tooltip)] pointer-events-none`,`px-2.5 py-1.5 max-w-[220px] w-max`,`bg-[var(--purple-900)] text-white rounded-[var(--radius-btn)]`,`font-[var(--font-body)] leading-snug`,`shadow-[var(--shadow-lg)]`,`transition-[opacity,transform] duration-150`,d,a?`opacity-100 scale-100`:`opacity-0 scale-95`].join(` `),style:{fontSize:`11px`},children:[e,(0,y.jsx)(`span`,{className:[`absolute border-4`,f].join(` `),"aria-hidden":`true`})]})]})}function Nn(){return(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M4.5 3l3 3-3 3`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function Pn(){return(0,y.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 13 13`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M2 5.5L6.5 1.5 11 5.5V11a1 1 0 01-1 1H3a1 1 0 01-1-1V5.5z`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M5 12V8h3v4`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}function Fn({items:e,className:t=``}){return(0,y.jsx)(`nav`,{"aria-label":`Ruta de navegación`,className:t,children:(0,y.jsx)(`ol`,{className:`flex items-center flex-wrap gap-0.5 list-none m-0 p-0`,children:e.map((t,n)=>{let r=n===e.length-1,i=n===0;return(0,y.jsxs)(`li`,{className:`flex items-center gap-0.5`,children:[n>0&&(0,y.jsx)(`span`,{className:`text-[var(--color-text-muted)] mx-0.5 select-none`,children:(0,y.jsx)(Nn,{})}),r?(0,y.jsx)(`span`,{"aria-current":`page`,className:`font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:t.label}):t.href?(0,y.jsxs)(`a`,{href:t.href,className:`inline-flex items-center gap-1 font-[var(--font-body)] text-[var(--color-text-muted)] hover:text-[var(--color-action-primary)] no-underline transition-colors duration-[var(--duration-micro)]`,style:{fontSize:`var(--type-body-sm-size)`},children:[i&&(0,y.jsx)(Pn,{}),t.label]}):(0,y.jsxs)(`button`,{type:`button`,onClick:t.onClick,className:`inline-flex items-center gap-1 font-[var(--font-body)] text-[var(--color-text-muted)] hover:text-[var(--color-action-primary)] bg-transparent border-0 cursor-pointer p-0 transition-colors duration-[var(--duration-micro)]`,style:{fontSize:`var(--type-body-sm-size)`},children:[i&&(0,y.jsx)(Pn,{}),t.label]})]},n)})})})}function In(e,t,n){if(t<=n)return Array.from({length:t},(e,t)=>t+1);let r=Math.floor(n/2),i=Math.max(2,e-r),a=Math.min(t-1,e+r);e-r<=2&&(a=Math.min(t-1,n-1)),e+r>=t-1&&(i=Math.max(2,t-n+2));let o=[1];i>2&&o.push(`...`);for(let e=i;e<=a;e++)o.push(e);return a<t-1&&o.push(`...`),o.push(t),o}var Ln=[`inline-flex items-center justify-center min-w-[36px] h-9 px-2`,`rounded-[var(--radius-btn)]`,`font-[var(--font-body)] font-[var(--weight-semibold)]`,`border-0 cursor-pointer outline-none`,`transition-[background,color,box-shadow] duration-[var(--duration-micro)]`,`focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-action-primary)]`].join(` `);function Rn({currentPage:e,totalPages:t,onChange:n,maxVisible:r=5,className:i=``}){if(t<=1)return null;let a=In(e,t,r);return(0,y.jsxs)(`nav`,{role:`navigation`,"aria-label":`Paginación`,className:[`flex items-center gap-1`,i].join(` `),children:[(0,y.jsx)(`button`,{type:`button`,onClick:()=>n(e-1),disabled:e===1,"aria-label":`Página anterior`,className:[Ln,e===1?`opacity-40 cursor-not-allowed text-[var(--color-text-muted)] bg-transparent`:`text-[var(--color-text-muted)] bg-transparent hover:bg-[var(--gray-100)] hover:text-[var(--color-text-body)]`].join(` `),style:{fontSize:`var(--type-body-sm-size)`},children:(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M9 11L5 7l4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),a.map((t,r)=>t===`...`?(0,y.jsx)(`span`,{className:`inline-flex items-center justify-center min-w-[36px] h-9 text-[var(--color-text-muted)] font-[var(--font-body)] select-none`,style:{fontSize:`var(--type-body-sm-size)`},"aria-hidden":`true`,children:`…`},`ellipsis-${r}`):(0,y.jsx)(`button`,{type:`button`,onClick:()=>n(t),"aria-label":`Página ${t}`,"aria-current":t===e?`page`:void 0,className:[Ln,t===e?`bg-[var(--color-action-primary)] text-white shadow-[var(--shadow-sm)]`:`bg-transparent text-[var(--color-text-muted)] hover:bg-[var(--gray-100)] hover:text-[var(--color-text-body)]`].join(` `),style:{fontSize:`var(--type-body-sm-size)`},children:t},t)),(0,y.jsx)(`button`,{type:`button`,onClick:()=>n(e+1),disabled:e===t,"aria-label":`Página siguiente`,className:[Ln,e===t?`opacity-40 cursor-not-allowed text-[var(--color-text-muted)] bg-transparent`:`text-[var(--color-text-muted)] bg-transparent hover:bg-[var(--gray-100)] hover:text-[var(--color-text-body)]`].join(` `),style:{fontSize:`var(--type-body-sm-size)`},children:(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M5 11l4-4-4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]})}var zn=[`Automóvil`,`Camioneta`,`Camión`,`Bus`,`Moto`],Bn=[`Toyota`,`Hyundai`,`Kia`,`Nissan`,`Ford`,`Chevrolet`,`Volkswagen`],Vn=[{label:`Hasta S/ 20,000`,value:`0-20000`},{label:`S/ 20,000 – 50,000`,value:`20000-50000`},{label:`S/ 50,000 – 100,000`,value:`50000-100000`},{label:`Más de S/ 100,000`,value:`100000-`}],Hn=[{label:`Todos`,value:``},{label:`En vivo`,value:`live`},{label:`Próximamente`,value:`upcoming`},{label:`Negociable`,value:`negotiable`},{label:`Cerrado`,value:`closed`}],Un=[`h-9 pl-3 pr-8 appearance-none`,`rounded-[var(--radius-btn)]`,`bg-[var(--color-surface-input)]`,`font-[var(--font-body)] text-[var(--color-text-on-surface)]`,`border-0 outline-none cursor-pointer`,`transition-[box-shadow] duration-[var(--duration-micro)]`,`focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]`].join(` `);function Wn(){return(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M2.5 4.5l3.5 3.5 3.5-3.5`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function Gn(){return(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`6`,cy:`6`,r:`4`,stroke:`currentColor`,strokeWidth:`1.4`}),(0,y.jsx)(`path`,{d:`M9.5 9.5L12 12`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})]})}function Kn({value:e={},onChange:t,onReset:n,className:r=``}){let i=n=>t?.({...e,...n}),a=Object.values(e).some(e=>e&&e!==``);return(0,y.jsxs)(`div`,{className:[`flex flex-wrap items-center gap-2 p-3 bg-[var(--color-surface-card)] rounded-[var(--radius-card)] shadow-[var(--shadow-sm)]`,r].join(` `),children:[(0,y.jsxs)(`div`,{className:`relative flex items-center min-w-[180px] flex-1`,children:[(0,y.jsx)(`span`,{className:`absolute left-2.5 text-[var(--color-text-muted)] pointer-events-none`,children:(0,y.jsx)(Gn,{})}),(0,y.jsx)(`input`,{type:`search`,placeholder:`Buscar lote o vehículo...`,value:e.search??``,onChange:e=>i({search:e.target.value}),className:[`w-full h-9 pl-8 pr-3`,`rounded-[var(--radius-btn)]`,`bg-[var(--color-surface-input)]`,`font-[var(--font-body)] text-[var(--color-text-on-surface)]`,`border-0 outline-none`,`placeholder:text-[var(--color-text-muted)]`,`transition-[box-shadow] duration-[var(--duration-micro)]`,`focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]`,`[&::-webkit-search-cancel-button]:hidden`].join(` `),style:{fontSize:`var(--type-body-sm-size)`}})]}),(0,y.jsx)(`div`,{className:`h-5 w-px bg-[var(--color-border-ghost)] hidden sm:block`,"aria-hidden":`true`}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsxs)(`select`,{value:e.tipo??``,onChange:e=>i({tipo:e.target.value}),className:Un,style:{fontSize:`var(--type-body-sm-size)`},children:[(0,y.jsx)(`option`,{value:``,children:`Tipo`}),zn.map(e=>(0,y.jsx)(`option`,{value:e,children:e},e))]}),(0,y.jsx)(`span`,{className:`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]`,children:(0,y.jsx)(Wn,{})})]}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsxs)(`select`,{value:e.marca??``,onChange:e=>i({marca:e.target.value}),className:Un,style:{fontSize:`var(--type-body-sm-size)`},children:[(0,y.jsx)(`option`,{value:``,children:`Marca`}),Bn.map(e=>(0,y.jsx)(`option`,{value:e,children:e},e))]}),(0,y.jsx)(`span`,{className:`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]`,children:(0,y.jsx)(Wn,{})})]}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsxs)(`select`,{value:e.precioMin?`${e.precioMin}-${e.precioMax??``}`:``,onChange:e=>{let[t,n]=e.target.value.split(`-`);i({precioMin:t,precioMax:n})},className:Un,style:{fontSize:`var(--type-body-sm-size)`},children:[(0,y.jsx)(`option`,{value:``,children:`Precio`}),Vn.map(e=>(0,y.jsx)(`option`,{value:e.value,children:e.label},e.value))]}),(0,y.jsx)(`span`,{className:`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]`,children:(0,y.jsx)(Wn,{})})]}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsx)(`select`,{value:e.status??``,onChange:e=>i({status:e.target.value}),className:Un,style:{fontSize:`var(--type-body-sm-size)`},children:Hn.map(e=>(0,y.jsx)(`option`,{value:e.value,children:e.label},e.value))}),(0,y.jsx)(`span`,{className:`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]`,children:(0,y.jsx)(Wn,{})})]}),a&&(0,y.jsx)(`button`,{type:`button`,onClick:n,className:`h-9 px-3 rounded-[var(--radius-btn)] text-[var(--color-text-muted)] hover:text-[var(--color-text-body)] bg-transparent border-0 cursor-pointer transition-colors duration-[var(--duration-micro)] font-[var(--font-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:`Limpiar`})]})}var qn={live:{bg:`var(--color-brand-live)`,text:`var(--purple-900)`,label:`EN VIVO`,dot:!0},upcoming:{bg:`var(--color-action-primary)`,text:`white`,label:`PRÓXIMAMENTE`},negotiable:{bg:`var(--cyan-500)`,text:`var(--purple-900)`,label:`NEGOCIABLE`},closed:{bg:`var(--gray-400)`,text:`white`,label:`CERRADO`},new:{bg:`var(--purple-700)`,text:`white`,label:`NUEVO`},featured:{bg:`var(--purple-900)`,text:`white`,label:`DESTACADO`}};function Jn(e){return String(e).padStart(2,`0`)}function Yn(e){if(e<=0)return`00:00:00`;let t=Math.floor(e/1e3),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return`${Jn(n)}:${Jn(r)}:${Jn(i)}`}function Xn({status:e,lotId:t,lotTitle:n,endsAt:r,className:i=``}){let{bg:a,text:o,label:s,dot:c}=qn[e],[l,u]=(0,_.useState)(()=>r?Math.max(0,Number(r instanceof Date?r:new Date(r))-Date.now()):0);return(0,_.useEffect)(()=>{if(!r||e===`closed`)return;let t=setInterval(()=>{u(Math.max(0,Number(r instanceof Date?r:new Date(r))-Date.now()))},1e3);return()=>clearInterval(t)},[r,e]),(0,y.jsxs)(`div`,{role:`status`,"aria-live":`polite`,className:[`flex items-center gap-3 px-4 py-2.5`,i].join(` `),style:{background:a,color:o},children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-1.5 shrink-0`,children:[c&&(0,y.jsx)(`span`,{className:`size-2 rounded-full bg-current animate-pulse`,"aria-hidden":`true`}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-bold)] uppercase tracking-[var(--tracking-wider)]`,style:{fontSize:`var(--type-label-size)`},children:s})]}),t&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`span`,{className:`opacity-40 select-none`,"aria-hidden":`true`,children:`|`}),(0,y.jsxs)(`span`,{className:`font-[var(--font-body)] opacity-70 shrink-0`,style:{fontSize:`var(--type-label-size)`},children:[`Lote #`,t]})]}),n&&(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] truncate flex-1`,style:{fontSize:`var(--type-body-sm-size)`},children:n}),r&&e!==`closed`&&(0,y.jsx)(`span`,{className:`ml-auto shrink-0 font-[var(--font-mono)] font-[var(--weight-medium)] tabular-nums`,style:{fontSize:`var(--type-body-sm-size)`},"aria-label":`Tiempo restante: ${Yn(l)}`,children:Yn(l)})]})}var Zn={year:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`1.5`,y:`2.5`,width:`11`,height:`10`,rx:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M1.5 5.5h11`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M4.5 1v3M9.5 1v3`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]}),km:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M7 7l3-2.5`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`}),(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`1`,fill:`currentColor`})]}),fuel:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M3 12V3a1 1 0 011-1h4a1 1 0 011 1v4l2-1v4a1 1 0 01-1 1H3z`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M3 7h5`,stroke:`currentColor`,strokeWidth:`1.3`})]}),transmission:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`3`,cy:`3`,r:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`circle`,{cx:`11`,cy:`3`,r:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`circle`,{cx:`7`,cy:`11`,r:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M3 4.5v3M11 4.5v3M3 7.5L7 9.5M11 7.5L7 9.5`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]}),color:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`6`,r:`4`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M7 10v3`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]}),engine:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`3`,y:`4`,width:`8`,height:`6`,rx:`1`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M1 6h2M11 6h2M5 4V2M9 4V2`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]}),doors:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`3`,y:`1.5`,width:`8`,height:`11`,rx:`1`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`circle`,{cx:`9.5`,cy:`7`,r:`0.8`,fill:`currentColor`})]}),vin:(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`1.5`,y:`3`,width:`11`,height:`8`,rx:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M4 6h6M4 8.5h4`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]})};function Qn({specs:e,className:t=``}){return(0,y.jsx)(`div`,{className:[`flex flex-wrap gap-x-6 gap-y-3`,t].join(` `),children:e.map(e=>(0,y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,y.jsx)(`span`,{className:`text-[var(--color-text-muted)] shrink-0`,children:Zn[e.icon]}),(0,y.jsxs)(`div`,{className:`flex flex-col leading-none gap-0.5`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)] tracking-[var(--tracking-wider)]`,style:{fontSize:`9px`},children:e.label}),(0,y.jsx)(`span`,{className:[`font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]`,e.icon===`vin`?`font-[var(--font-mono)]`:``].filter(Boolean).join(` `),style:{fontSize:`var(--type-body-sm-size)`},children:e.value})]})]},e.icon+e.label))})}function $n(e){let t=Math.floor((Date.now()-new Date(e).getTime())/1e3);return t<60?`hace ${t}s`:t<3600?`hace ${Math.floor(t/60)}m`:`hace ${Math.floor(t/3600)}h`}function er(e){return e.split(` `).slice(0,2).map(e=>e[0]).join(``).toUpperCase()}function tr(e){return e.split(` `).map((e,t)=>t===0?e:e[0]+`***`).join(` `)}function nr({initials:e,isWinning:t}){return(0,y.jsx)(`div`,{className:[`size-8 rounded-full flex items-center justify-center shrink-0 select-none`,`font-[var(--font-body)] font-[var(--weight-bold)]`,t?`bg-[var(--color-action-primary)] text-white`:`bg-[var(--gray-200)] text-[var(--gray-500)]`].join(` `),style:{fontSize:`11px`},children:e})}function rr(){return(0,y.jsxs)(`div`,{className:`flex items-center gap-3 py-2.5`,children:[(0,y.jsx)(`div`,{className:`size-8 rounded-full bg-[var(--gray-200)] animate-pulse shrink-0`}),(0,y.jsxs)(`div`,{className:`flex-1 flex flex-col gap-1.5`,children:[(0,y.jsx)(`div`,{className:`h-2.5 w-28 bg-[var(--gray-200)] rounded animate-pulse`}),(0,y.jsx)(`div`,{className:`h-2 w-16 bg-[var(--gray-200)] rounded animate-pulse`})]}),(0,y.jsx)(`div`,{className:`h-4 w-20 bg-[var(--gray-200)] rounded animate-pulse`})]})}function ir({bids:e,maxVisible:t=5,isLoading:n=!1,className:r=``}){let i=e.slice(0,t);return(0,y.jsxs)(`div`,{className:[`bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] overflow-hidden`,r].join(` `),children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-ghost)]`,children:[(0,y.jsx)(`h3`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:`Historial de ofertas`}),e.length>0&&(0,y.jsxs)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:[e.length,` `,e.length===1?`oferta`:`ofertas`]})]}),(0,y.jsx)(`div`,{className:`divide-y divide-[var(--color-border-ghost)]`,children:n?Array.from({length:3}).map((e,t)=>(0,y.jsx)(`div`,{className:`px-4`,children:(0,y.jsx)(rr,{})},t)):i.length===0?(0,y.jsx)(`div`,{className:`px-4 py-8 text-center font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-body-sm-size)`},children:`Sin ofertas aún. ¡Sé el primero!`}):i.map((e,t)=>{let n=e.initials??er(e.bidder),r=e.isAnonymous?tr(e.bidder):e.bidder,i=e.currency??`S/`;return(0,y.jsxs)(`div`,{className:[`flex items-center gap-3 px-4 py-2.5`,t===0&&e.isWinning!==!1?`bg-[oklch(0.761_0.130_197.000_/_0.04)]`:``].join(` `),children:[(0,y.jsx)(nr,{initials:n,isWinning:t===0}),(0,y.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,y.jsxs)(`p`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)] truncate`,style:{fontSize:`var(--type-body-sm-size)`},children:[r,t===0&&(0,y.jsx)(`span`,{className:`ml-1.5 text-[var(--color-action-primary)]`,style:{fontSize:`10px`},children:`▲ Mayor oferta`})]}),(0,y.jsx)(`p`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:$n(e.placedAt)})]}),(0,y.jsxs)(`span`,{className:`font-[var(--font-mono)] font-[var(--weight-medium)] tabular-nums shrink-0`,style:{fontSize:t===0?`var(--type-body-size)`:`var(--type-body-sm-size)`,color:t===0?`var(--color-action-primary)`:`var(--color-text-body)`},children:[i,` `,e.amount.toLocaleString(`es-PE`)]})]},e.id)})}),!n&&e.length>t&&(0,y.jsx)(`div`,{className:`px-4 py-2.5 border-t border-[var(--color-border-ghost)] text-center`,children:(0,y.jsxs)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:[`+`,e.length-t,` ofertas anteriores`]})})]})}function ar({images:e,className:t=``}){let[n,r]=(0,_.useState)(0);if(e.length===0)return(0,y.jsx)(`div`,{className:[`flex items-center justify-center bg-[var(--gray-100)] rounded-[var(--radius-card)] aspect-[4/3]`,t].join(` `),children:(0,y.jsxs)(`svg`,{width:`48`,height:`48`,viewBox:`0 0 48 48`,fill:`none`,className:`text-[var(--gray-300)]`,children:[(0,y.jsx)(`rect`,{x:`4`,y:`8`,width:`40`,height:`32`,rx:`4`,stroke:`currentColor`,strokeWidth:`2`}),(0,y.jsx)(`circle`,{cx:`16`,cy:`19`,r:`4`,stroke:`currentColor`,strokeWidth:`2`}),(0,y.jsx)(`path`,{d:`M4 34l10-10 8 8 6-6 16 12`,stroke:`currentColor`,strokeWidth:`2`,strokeLinejoin:`round`})]})});let i=()=>r(t=>t===0?e.length-1:t-1),a=()=>r(t=>t===e.length-1?0:t+1);return(0,y.jsxs)(`div`,{className:[`flex flex-col gap-2`,t].join(` `),children:[(0,y.jsxs)(`div`,{className:`relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--gray-100)] aspect-[4/3]`,children:[(0,y.jsx)(`img`,{src:e[n].src,alt:e[n].alt,className:`w-full h-full object-cover`,draggable:!1}),(0,y.jsx)(`div`,{className:`absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[var(--purple-900)]/60 backdrop-blur-[4px]`,children:(0,y.jsxs)(`span`,{className:`font-[var(--font-body)] text-white`,style:{fontSize:`11px`},children:[n+1,` / `,e.length]})}),e.length>1&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`button`,{type:`button`,onClick:i,"aria-label":`Imagen anterior`,className:`absolute left-2 top-1/2 -translate-y-1/2 size-8 flex items-center justify-center rounded-full bg-[var(--purple-900)]/50 backdrop-blur-[4px] text-white border-0 cursor-pointer hover:bg-[var(--purple-900)]/75 transition-colors duration-[var(--duration-micro)]`,children:(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M9 11L5 7l4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,y.jsx)(`button`,{type:`button`,onClick:a,"aria-label":`Siguiente imagen`,className:`absolute right-2 top-1/2 -translate-y-1/2 size-8 flex items-center justify-center rounded-full bg-[var(--purple-900)]/50 backdrop-blur-[4px] text-white border-0 cursor-pointer hover:bg-[var(--purple-900)]/75 transition-colors duration-[var(--duration-micro)]`,children:(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M5 11l4-4-4-4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]})]}),e.length>1&&(0,y.jsx)(`div`,{className:`flex gap-2 overflow-x-auto pb-0.5`,role:`tablist`,"aria-label":`Miniaturas`,children:e.map((e,t)=>(0,y.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":t===n,"aria-label":e.alt,onClick:()=>r(t),className:[`shrink-0 size-14 rounded-[var(--radius-btn)] overflow-hidden border-2 cursor-pointer transition-[border-color,opacity] duration-[var(--duration-micro)]`,t===n?`border-[var(--color-action-primary)] opacity-100`:`border-transparent opacity-60 hover:opacity-90`].join(` `),children:(0,y.jsx)(`img`,{src:e.src,alt:e.alt,className:`w-full h-full object-cover`,draggable:!1})},t))})]})}function or({filled:e}){return(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M6 1l1.5 3 3.5.5-2.5 2.5.6 3.5L6 9 2.9 10.5l.6-3.5L1 4.5 4.5 4z`,fill:e?`var(--color-brand-live)`:`var(--gray-200)`,stroke:e?`var(--color-brand-live)`:`var(--gray-300)`,strokeWidth:`0.8`})})}function sr(){return(0,y.jsxs)(`span`,{className:`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10`,title:`Vendedor verificado`,children:[(0,y.jsxs)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 10 10`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`5`,cy:`5`,r:`4.5`,fill:`oklch(0.637 0.207 145)`}),(0,y.jsx)(`path`,{d:`M3 5l1.5 1.5 3-3`,stroke:`white`,strokeWidth:`1.2`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,y.jsx)(`span`,{className:`text-emerald-600 font-[var(--font-body)] font-[var(--weight-semibold)]`,style:{fontSize:`9px`},children:`Verificado`})]})}function cr({name:e,role:t=`Subastador`,logoUrl:n,initials:r,rating:i,totalAuctions:a,phone:o,email:s,isVerified:c=!1,className:l=``}){let u=r??e.split(` `).slice(0,2).map(e=>e[0]).join(``).toUpperCase();return(0,y.jsxs)(`div`,{className:[`bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] p-4`,l].join(` `),children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3 mb-3`,children:[n?(0,y.jsx)(`img`,{src:n,alt:e,className:`size-12 rounded-full object-cover shrink-0 border border-[var(--color-border-ghost)]`}):(0,y.jsx)(`div`,{className:`size-12 rounded-full bg-[var(--color-action-primary)] flex items-center justify-center shrink-0 select-none`,children:(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-bold)] text-white`,style:{fontSize:`16px`},children:u})}),(0,y.jsxs)(`div`,{className:`min-w-0`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-1.5 flex-wrap`,children:[(0,y.jsx)(`h3`,{className:`font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-body)] truncate`,style:{fontSize:`var(--type-body-sm-size)`},children:e}),c&&(0,y.jsx)(sr,{})]}),(0,y.jsx)(`p`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:t})]})]}),(i!==void 0||a!==void 0)&&(0,y.jsxs)(`div`,{className:`flex items-center gap-4 mb-3 py-2.5 border-y border-[var(--color-border-ghost)]`,children:[i!==void 0&&(0,y.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,y.jsx)(`div`,{className:`flex gap-0.5`,children:Array.from({length:5}).map((e,t)=>(0,y.jsx)(or,{filled:t<Math.round(i)},t))}),(0,y.jsxs)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:[i.toFixed(1),` / 5.0`]})]}),a!==void 0&&(0,y.jsxs)(`div`,{className:`flex flex-col gap-0.5`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-mono)] font-[var(--weight-bold)] text-[var(--color-text-body)] tabular-nums`,style:{fontSize:`var(--type-body-sm-size)`},children:a.toLocaleString(`es-PE`)}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:`subastas`})]})]}),(o||s)&&(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[o&&(0,y.jsxs)(`a`,{href:`tel:${o}`,className:`flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-body)] no-underline transition-colors duration-[var(--duration-micro)]`,children:[(0,y.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 13 13`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M2 2h3l1.5 3L5 6.5c1 1.8 2.7 3.5 4.5 4.5L11 9.5l3 1.5v3a1 1 0 01-1 1A16 16 0 011 1a1 1 0 011-1h0z`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:o})]}),s&&(0,y.jsxs)(`a`,{href:`mailto:${s}`,className:`flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-body)] no-underline transition-colors duration-[var(--duration-micro)]`,children:[(0,y.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 13 13`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`1`,y:`2.5`,width:`11`,height:`8`,rx:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M1 4.5l5.5 3.5L12 4.5`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] truncate`,style:{fontSize:`var(--type-body-sm-size)`},children:s})]})]})]})}function lr({lotId:e,title:t,subtitle:n,status:r,currentPrice:i,startingPrice:a,currency:o=`S/`,endsAt:s,minimumBid:c,totalBids:l,onSubmitBid:u,className:d=``}){let f=r===`live`,p=r===`closed`;return(0,y.jsxs)(`div`,{className:[`bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] shadow-[var(--shadow-brand-tinted)] overflow-hidden`,d].join(` `),children:[(0,y.jsxs)(`div`,{className:[`px-4 py-2 flex items-center gap-2`,f?`bg-[var(--color-brand-live)]`:p?`bg-[var(--gray-400)]`:`bg-[var(--color-action-primary)]`].join(` `),children:[(0,y.jsx)(C,{type:r,size:`sm`}),(0,y.jsxs)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--purple-900)] uppercase tracking-[var(--tracking-wider)]`,style:{fontSize:`var(--type-label-size)`},children:[`Lote #`,e]})]}),(0,y.jsxs)(`div`,{className:`p-4 flex flex-col gap-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h2`,{className:`font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-primary)] leading-snug`,style:{fontSize:`var(--type-body-lg-size)`},children:t}),n&&(0,y.jsx)(`p`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)] mt-0.5`,style:{fontSize:`var(--type-body-sm-size)`},children:n})]}),(0,y.jsxs)(`div`,{className:`flex items-end justify-between gap-3`,children:[(0,y.jsx)(T,{context:`hero`,label:f?`OFERTA ACTUAL`:`PRECIO BASE`,amount:i,currency:o}),l!==void 0&&(0,y.jsxs)(`div`,{className:`text-right shrink-0`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums text-[var(--color-text-body)]`,style:{fontSize:`var(--type-body-sm-size)`},children:l}),(0,y.jsx)(`p`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:l===1?`oferta`:`ofertas`})]})]}),a&&f&&(0,y.jsxs)(`div`,{className:`flex items-center gap-2 -mt-2`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:`Precio base:`}),(0,y.jsxs)(`span`,{className:`font-[var(--font-mono)] tabular-nums text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:[o,` `,a.toLocaleString(`es-PE`)]})]}),!p&&(0,y.jsxs)(`div`,{className:`flex items-center gap-2 py-2.5 border-y border-[var(--color-border-ghost)]`,children:[(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,className:`text-[var(--color-text-muted)] shrink-0`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M7 4v3.5l2 1.5`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`})]}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-label-size)`},children:f?`Cierra en`:`Inicia en`}),(0,y.jsx)(le,{endsAt:s})]}),p?(0,y.jsx)(`div`,{className:`py-3 text-center`,children:(0,y.jsx)(`p`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-muted)]`,style:{fontSize:`var(--type-body-sm-size)`},children:`Subasta finalizada`})}):(0,y.jsx)(it,{lotId:e,minimumBid:c,currency:o,onSubmit:u})]})]})}var ur=[[`comment`,/^(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/],[`string`,/^(`[\s\S]*?`|'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")/],[`jsx-tag`,/^(<\/?[A-Z][A-Za-z0-9.]*|<\/?[a-z][a-z0-9-]*)/],[`keyword`,/^(?:import|export|from|const|let|var|function|return|interface|type|default|true|false|null|undefined|if|else|class|extends|typeof|keyof|as|in|of|async|await|void|never|React)\b/],[`type`,/^(?:string|number|boolean|ReactNode|MouseEvent|HTMLButtonElement)\b/],[`number`,/^\b\d+(\.\d+)?\b/],[`operator`,/^[=<>!?:&|+\-*/.,;{}[\]()]+/],[`attr`,/^[a-z][a-zA-Z0-9_]*(?==)/],[`word`,/^[a-zA-Z_$][a-zA-Z0-9_$]*/],[`space`,/^\s+/]];function dr(e){let t=[],n=e;for(;n.length>0;){let e=!1;for(let[r,i]of ur){let a=n.match(i);if(a){t.push({type:r,value:a[0]}),n=n.slice(a[0].length),e=!0;break}}e||(t.push({type:`char`,value:n[0]}),n=n.slice(1))}return t}var fr={comment:`text-[#6a9955]`,string:`text-[#ce9178]`,keyword:`text-[#569cd6]`,type:`text-[#4ec9b0]`,number:`text-[#b5cea8]`,"jsx-tag":`text-[#4ec9b0]`,attr:`text-[#9cdcfe]`,operator:`text-[#d4d4d4]`,word:`text-[#d4d4d4]`,char:`text-[#d4d4d4]`};function O({code:e}){return(0,y.jsx)(y.Fragment,{children:dr(e).map((e,t)=>(0,y.jsx)(`span`,{className:fr[e.type]??``,children:e.value},t))})}function pr({text:e}){let[t,n]=(0,_.useState)(`idle`);return(0,y.jsxs)(`button`,{type:`button`,onClick:(0,_.useCallback)(()=>{navigator.clipboard.writeText(e).then(()=>{n(`copied`),setTimeout(()=>n(`idle`),2e3)})},[e]),className:[`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold transition-all duration-150 border`,t===`copied`?`bg-emerald-500/15 border-emerald-500/30 text-emerald-400`:`bg-white/6 border-white/12 text-white/50 hover:bg-white/12 hover:text-white/80`].join(` `),children:[t===`copied`?(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M2 6l2.5 2.5 5.5-5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}):(0,y.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:[(0,y.jsx)(`rect`,{x:`4`,y:`4`,width:`7`,height:`7`,rx:`1`,stroke:`currentColor`,strokeWidth:`1.2`}),(0,y.jsx)(`path`,{d:`M8 4V2.5A1.5 1.5 0 0 0 6.5 1h-4A1.5 1.5 0 0 0 1 2.5v4A1.5 1.5 0 0 0 2.5 8H4`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinecap:`round`})]}),t===`copied`?`Copiado`:`Copiar`]})}function mr({title:e}){return(0,y.jsxs)(`div`,{className:`flex items-center gap-3 mb-6`,children:[(0,y.jsx)(`h2`,{className:`text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--gray-400)] whitespace-nowrap`,children:e}),(0,y.jsx)(`div`,{className:`flex-1 h-px bg-[var(--gray-200)]`})]})}var hr=[{token:`--purple-700`,hex:`#391383`,label:`Purple 700`},{token:`--purple-800`,hex:`#2e0f70`,label:`Purple 800`},{token:`--purple-900`,hex:`#1a0b3d`,label:`Purple 900`},{token:`--cyan-500`,hex:`#00cace`,label:`Cyan 500`},{token:`--amber-500`,hex:`#ffa000`,label:`Amber 500`},{token:`--white`,hex:`#fefdfc`,label:`White`},{token:`--gray-50`,hex:`#f6f7f9`,label:`Gray 50`},{token:`--gray-100`,hex:`#f0f0f0`,label:`Gray 100`},{token:`--gray-300`,hex:`#d1d5dc`,label:`Gray 300`},{token:`--gray-400`,hex:`#99a1af`,label:`Gray 400`},{token:`--gray-500`,hex:`#6e728c`,label:`Gray 500`},{token:`--gray-600`,hex:`#4a5565`,label:`Gray 600`}],gr=[{group:`Brand`,tokens:[{token:`--color-brand-primary`,value:`var(--purple-700)`,desc:`Sidebar, header, botones`},{token:`--color-brand-dark`,value:`var(--purple-800)`,desc:`Hero overlay, help section`},{token:`--color-brand-darkest`,value:`var(--purple-900)`,desc:`Texto primario`},{token:`--color-brand-accent`,value:`var(--cyan-500)`,desc:`CTA, highlights`},{token:`--color-brand-live`,value:`var(--amber-500)`,desc:`Badge en vivo, precios`}]},{group:`Action`,tokens:[{token:`--color-action-primary`,value:`var(--purple-700)`,desc:`Botón primary default`},{token:`--color-action-primary-hover`,value:`var(--purple-800)`,desc:`Botón primary hover`},{token:`--color-action-primary-press`,value:`var(--purple-900)`,desc:`Botón primary active`},{token:`--color-action-cta`,value:`var(--cyan-500)`,desc:`Botón CTA default`},{token:`--color-action-disabled`,value:`var(--gray-600)`,desc:`Disabled state`}]},{group:`Surface`,tokens:[{token:`--color-surface-body`,value:`var(--gray-100)`,desc:`Outer body bg`},{token:`--color-surface-page`,value:`var(--gray-50)`,desc:`Page bg`},{token:`--color-surface-card`,value:`var(--white)`,desc:`Cards, header`},{token:`--color-surface-overlay`,value:`var(--purple-800)`,desc:`Hero, help section`}]},{group:`Text — claro`,tokens:[{token:`--color-text-primary`,value:`var(--purple-900)`,desc:`Títulos, texto principal`},{token:`--color-text-secondary`,value:`var(--gray-500)`,desc:`Texto secundario`},{token:`--color-text-muted`,value:`var(--gray-400)`,desc:`Meta, labels`},{token:`--color-text-disabled`,value:`var(--gray-600)`,desc:`Deshabilitado`},{token:`--color-text-link`,value:`var(--purple-700)`,desc:`Links, nav`},{token:`--color-text-live`,value:`var(--amber-500)`,desc:`Precios en vivo`},{token:`--color-text-accent`,value:`var(--cyan-500)`,desc:`Highlights, acento`}]},{group:`Text — oscuro`,tokens:[{token:`--color-text-on-dark`,value:`var(--white)`,desc:`Texto principal sobre dark`},{token:`--color-text-on-dark-high`,value:`rgba(255,255,255,0.90)`,desc:`Nav items, íconos`},{token:`--color-text-on-dark-secondary`,value:`rgba(255,255,255,0.70)`,desc:`Texto secundario dark`},{token:`--color-text-on-dark-muted`,value:`rgba(255,255,255,0.55)`,desc:`Nav, footer links`},{token:`--color-text-on-dark-faint`,value:`rgba(255,255,255,0.40)`,desc:`Footer legal`}]}],_r={"var(--purple-700)":`#391383`,"var(--purple-800)":`#2e0f70`,"var(--purple-900)":`#1a0b3d`,"var(--cyan-500)":`#00cace`,"var(--amber-500)":`#ffa000`,"var(--white)":`#fefdfc`,"var(--gray-50)":`#f6f7f9`,"var(--gray-100)":`#f0f0f0`,"var(--gray-300)":`#d1d5dc`,"var(--gray-400)":`#99a1af`,"var(--gray-500)":`#6e728c`,"var(--gray-600)":`#4a5565`};function vr(e){return _r[e]??e}function yr(e){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16);return(t*299+n*587+r*114)/1e3>128}function br({token:e,hex:t,label:n}){let[r,i]=(0,_.useState)(!1),a=yr(t);return(0,y.jsxs)(`button`,{type:`button`,onClick:()=>{navigator.clipboard.writeText(e).then(()=>{i(!0),setTimeout(()=>i(!1),1500)})},title:`Copiar ${e}`,className:`group flex flex-col rounded-lg overflow-hidden border border-[var(--gray-200)] hover:shadow-md transition-all duration-150 text-left w-full`,children:[(0,y.jsx)(`div`,{className:`h-14 w-full relative`,style:{backgroundColor:`var(${e})`},children:r&&(0,y.jsx)(`span`,{className:`absolute inset-0 flex items-center justify-center text-[10px] font-bold ${a?`text-black/60`:`text-white/80`}`,children:`✓ copiado`})}),(0,y.jsxs)(`div`,{className:`px-2.5 py-2 bg-white flex-1`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-mono text-[var(--gray-600)] truncate leading-tight`,children:e}),(0,y.jsx)(`p`,{className:`text-[10px] font-mono text-[var(--gray-400)] mt-0.5`,children:t}),(0,y.jsx)(`p`,{className:`text-[9px] text-[var(--gray-400)] mt-0.5 truncate`,children:n})]})]})}function xr({token:e,value:t,desc:n}){let r=vr(t);return(0,y.jsxs)(`tr`,{className:`border-b border-[var(--gray-100)] hover:bg-[var(--gray-50)] group`,children:[(0,y.jsx)(`td`,{className:`py-2.5 pr-3`,children:(0,y.jsx)(`div`,{className:`size-6 rounded border border-[var(--gray-200)] shrink-0`,style:{backgroundColor:`var(${e})`},title:r})}),(0,y.jsx)(`td`,{className:`py-2.5 pr-4`,children:(0,y.jsx)(`code`,{className:`text-[11px] text-[var(--purple-700)] font-mono`,children:e})}),(0,y.jsx)(`td`,{className:`py-2.5 pr-4 text-[11px] font-mono text-[var(--gray-500)]`,children:t}),(0,y.jsx)(`td`,{className:`py-2.5 text-[11px] text-[var(--gray-400)]`,children:n})]})}var Sr=[{token:`--size-11`,px:`11px`,lh:`16px`,weight:`400`,sample:`Caption — labels pequeños`,cls:`text-[11px] leading-[16px]`},{token:`--size-12`,px:`12px`,lh:`20px`,weight:`400`,sample:`Label — badges, filter buttons`,cls:`text-[12px] leading-[20px]`},{token:`--size-14`,px:`14px`,lh:`20px`,weight:`400`,sample:`Body SM — specs, meta info`,cls:`text-[14px] leading-[20px]`},{token:`--size-16`,px:`16px`,lh:`24px`,weight:`400`,sample:`Body — nav labels, texto base`,cls:`text-[16px] leading-[24px]`},{token:`--size-18`,px:`18px`,lh:`28px`,weight:`700`,sample:`Card Title — TOYOTA HILUX`,cls:`text-[18px] leading-[28px] font-bold`},{token:`--size-20`,px:`20px`,lh:`32px`,weight:`700`,sample:`Heading SM — subtítulos, CTA`,cls:`text-[20px] leading-[32px] font-bold`},{token:`--size-24`,px:`24px`,lh:`36px`,weight:`700`,sample:`Heading MD — secciones`,cls:`text-[24px] leading-[36px] font-bold`},{token:`--size-27`,px:`27px`,lh:`40px`,weight:`700`,sample:`Heading LG — MAF PERÚ × VMC`,cls:`text-[27px] leading-[40px] font-bold`},{token:`--size-30`,px:`30px`,lh:`44px`,weight:`700`,sample:`Price Card — 17,999`,cls:`text-[30px] leading-[44px] font-bold tabular-nums`},{token:`--size-48`,px:`48px`,lh:`72px`,weight:`700`,sample:`Display MD — BMW 320i`,cls:`text-[48px] leading-[72px] font-bold italic`},{token:`--size-54`,px:`54px`,lh:`80px`,weight:`700`,sample:`Display LG — $14,000`,cls:`text-[54px] leading-[80px] font-bold tabular-nums`}],Cr=[{token:`--space-1`,px:`4px`},{token:`--space-2`,px:`8px`},{token:`--space-3`,px:`12px`},{token:`--space-4`,px:`16px`},{token:`--space-5`,px:`20px`},{token:`--space-6`,px:`24px`},{token:`--space-8`,px:`32px`},{token:`--space-10`,px:`40px`},{token:`--space-12`,px:`48px`},{token:`--space-16`,px:`64px`}],wr=[{token:`--radius-none`,px:`0px`,label:`None — celdas, tablas`},{token:`--radius-sm`,px:`4px`,label:`SM — inputs, badges, chips`},{token:`--radius-md`,px:`8px`,label:`MD — botones primarios`},{token:`--radius-lg`,px:`16px`,label:`LG — cards, hero, modales`},{token:`--radius-full`,px:`9999px`,label:`Full — píldoras, avatares`}],Tr=[{token:`--shadow-sm`,value:`0 2px 4px rgba(0,0,0,0.06)`,label:`SM — cards en reposo`},{token:`--shadow-md`,value:`0 4px 8px rgba(0,0,0,0.08)`,label:`MD — elementos elevados`},{token:`--shadow-lg`,value:`0 8px 16px rgba(0,0,0,0.10)`,label:`LG — sidebar, CTA, hover`}];function Er(){return(0,y.jsxs)(`section`,{id:`tokens`,className:`scroll-mt-8`,children:[(0,y.jsx)(mr,{title:`Primitivos — Color`}),(0,y.jsx)(`div`,{className:`grid grid-cols-6 gap-3 mb-12`,children:hr.map(e=>(0,y.jsx)(br,{token:e.token,hex:e.hex,label:e.label},e.token))}),(0,y.jsx)(mr,{title:`Semánticos — Color`}),(0,y.jsx)(`div`,{className:`flex flex-col gap-8 mb-12`,children:gr.map(e=>(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:e.group}),(0,y.jsxs)(`table`,{className:`w-full border-collapse`,children:[(0,y.jsx)(`thead`,{children:(0,y.jsxs)(`tr`,{className:`border-b-2 border-[var(--gray-200)]`,children:[(0,y.jsx)(`th`,{className:`pb-2 text-left text-[10px] font-bold text-[var(--gray-400)] w-8`,children:`·`}),(0,y.jsx)(`th`,{className:`pb-2 text-left text-[10px] font-bold text-[var(--gray-400)]`,children:`Token`}),(0,y.jsx)(`th`,{className:`pb-2 text-left text-[10px] font-bold text-[var(--gray-400)]`,children:`Valor`}),(0,y.jsx)(`th`,{className:`pb-2 text-left text-[10px] font-bold text-[var(--gray-400)]`,children:`Uso`})]})}),(0,y.jsx)(`tbody`,{children:e.tokens.map(e=>(0,y.jsx)(xr,{token:e.token,value:e.value,desc:e.desc},e.token))})]})]},e.group))}),(0,y.jsx)(mr,{title:`Tipografía — Escala`}),(0,y.jsx)(`div`,{className:`mb-12 rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:Sr.map((e,t)=>(0,y.jsxs)(`div`,{className:[`flex items-baseline gap-6 px-5 py-3`,t%2==0?`bg-white`:`bg-[var(--gray-50)]`].join(` `),children:[(0,y.jsxs)(`div`,{className:`w-[200px] shrink-0 flex flex-col gap-0.5`,children:[(0,y.jsx)(`code`,{className:`text-[10px] text-[var(--purple-700)] font-mono`,children:e.token}),(0,y.jsxs)(`span`,{className:`text-[9px] text-[var(--gray-400)]`,children:[e.px,` / lh `,e.lh,` / w`,e.weight]})]}),(0,y.jsx)(`span`,{className:[`text-[var(--gray-600)] truncate`,e.cls].join(` `),style:{fontStyle:e.cls.includes(`italic`)?`italic`:void 0},children:e.sample})]},e.token))}),(0,y.jsx)(mr,{title:`Spacing — Grilla 4px`}),(0,y.jsx)(`div`,{className:`mb-12 flex flex-col gap-3`,children:Cr.map(e=>(0,y.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,y.jsx)(`code`,{className:`text-[11px] font-mono text-[var(--purple-700)] w-[110px] shrink-0`,children:e.token}),(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-[var(--gray-400)] w-[44px] shrink-0`,children:e.px}),(0,y.jsx)(`div`,{className:`h-5 rounded-sm bg-[var(--cyan-500)] opacity-70 shrink-0`,style:{width:e.px}})]},e.token))}),(0,y.jsx)(mr,{title:`Border Radius — 5 niveles`}),(0,y.jsx)(`div`,{className:`mb-12 flex items-end gap-6 flex-wrap`,children:wr.map(e=>(0,y.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,y.jsx)(`div`,{className:`size-14 bg-[var(--purple-700)] opacity-80`,style:{borderRadius:`var(${e.token})`}}),(0,y.jsx)(`code`,{className:`text-[10px] font-mono text-[var(--purple-700)] text-center`,children:e.token}),(0,y.jsx)(`span`,{className:`text-[9px] text-[var(--gray-400)] text-center max-w-[90px]`,children:e.label})]},e.token))}),(0,y.jsx)(mr,{title:`Sombras — 3 niveles + none`}),(0,y.jsx)(`div`,{className:`mb-12 flex items-end gap-8 flex-wrap`,children:Tr.map(e=>(0,y.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,y.jsx)(`div`,{className:`w-20 h-14 bg-white rounded-lg`,style:{boxShadow:e.value}}),(0,y.jsx)(`code`,{className:`text-[10px] font-mono text-[var(--purple-700)] text-center`,children:e.token}),(0,y.jsx)(`span`,{className:`text-[9px] text-[var(--gray-400)] text-center max-w-[100px]`,children:e.label})]},e.token))}),(0,y.jsx)(mr,{title:`Animación`}),(0,y.jsx)(`div`,{className:`mb-12 flex gap-8 flex-wrap`,children:[{token:`--duration-micro`,value:`150ms`,label:`Micro — hover, focus`},{token:`--duration-standard`,value:`300ms`,label:`Standard — modales, menús`},{token:`--easing-standard`,value:`cubic-bezier(0.3, 0, 0, 1)`,label:`Easing estándar`}].map(e=>(0,y.jsxs)(`div`,{className:`flex flex-col gap-1 px-4 py-3 rounded-lg border border-[var(--gray-200)] bg-white`,children:[(0,y.jsx)(`code`,{className:`text-[11px] font-mono text-[var(--purple-700)]`,children:e.token}),(0,y.jsx)(`code`,{className:`text-[11px] font-mono text-[var(--gray-500)]`,children:e.value}),(0,y.jsx)(`span`,{className:`text-[10px] text-[var(--gray-400)] mt-0.5`,children:e.label})]},e.token))}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}var Dr=[`Default`,`Hover`,`Focus`,`Active`,`Disabled`,`Loading`,`Error`];function Or({active:e,available:t,onChange:n}){return(0,y.jsx)(`div`,{className:`flex items-center gap-1 flex-wrap`,role:`tablist`,children:Dr.map(r=>{let i=t.includes(r),a=r===e;return(0,y.jsx)(`button`,{role:`tab`,"aria-selected":a,disabled:!i,onClick:()=>i&&n(r),className:[`px-3 py-1 rounded-md text-[11px] font-semibold transition-all duration-150 border`,a?`bg-[var(--purple-600)] text-white border-[var(--purple-600)]`:i?`bg-transparent text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`:`opacity-30 text-[var(--gray-400)] border-[var(--gray-300)] cursor-not-allowed`].join(` `),children:r},r)})})}function kr({label:e}){return(0,y.jsx)(`span`,{className:`inline-flex items-center px-2 py-0.5 rounded bg-[var(--gray-100)] border border-[var(--gray-300)] font-mono text-[10px] text-[var(--gray-600)]`,children:e})}function k({label:e,value:t,token:n}){return(0,y.jsxs)(`tr`,{className:`border-b border-[var(--gray-100)]`,children:[(0,y.jsx)(`td`,{className:`py-2 pr-3 text-[11px] font-semibold text-[var(--gray-500)] whitespace-nowrap`,children:e}),(0,y.jsx)(`td`,{className:`py-2 pr-3 text-[11px] text-[var(--gray-600)] font-mono`,children:t}),n&&(0,y.jsx)(`td`,{className:`py-2 text-[10px] font-mono text-[var(--purple-600)]`,children:n})]})}function Ar({children:e,dark:t}){return(0,y.jsx)(`div`,{className:`flex items-center justify-center min-h-[140px] px-10 py-8 rounded-t-xl border border-b-0 border-[var(--gray-300)]`,style:t?{background:`var(--color-surface-hero-gradient)`}:{backgroundImage:`linear-gradient(45deg,#f0f0f0 25%,transparent 25%),linear-gradient(-45deg,#f0f0f0 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#f0f0f0 75%),linear-gradient(-45deg,transparent 75%,#f0f0f0 75%)`,backgroundSize:`16px 16px`,backgroundPosition:`0 0,0 8px,8px -8px,-8px 0`,backgroundColor:`#fafafa`},children:e})}var jr=[`Default`,`Hover`,`Focus`,`Active`,`Disabled`,`Loading`];function Mr(){let[e,t]=(0,_.useState)(`Default`),[n,r]=(0,_.useState)(!1),i={Default:[`(sin props)`],Hover:[`CSS :hover`],Focus:[`CSS :focus-visible`],Active:[`CSS :active`],Disabled:[`disabled={true}`],Loading:[`isLoading={true}`],Error:[`—`]},a=[`primary`,`secondary`,`tertiary`,`destructive`],o=[`sm`,`md`,`lg`];return(0,y.jsxs)(`section`,{id:`button`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`Button`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L1 — Elemento`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>r(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),n?`Ocultar`:`Ver fuente`]})]}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:`Elemento de acción principal. 4 variantes de intención × 3 tamaños. Toda acción ejecutable usa Button.`}),(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Variantes × Tamaños`}),(0,y.jsx)(`div`,{className:`p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:(0,y.jsx)(`div`,{className:`flex flex-col gap-4`,children:a.map(e=>(0,y.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,y.jsx)(`span`,{className:`w-[90px] shrink-0 text-[10px] font-mono text-[var(--gray-500)]`,children:e}),(0,y.jsx)(`div`,{className:`flex items-center gap-3 flex-wrap`,children:o.map(t=>(0,y.jsx)(S,{variant:e,size:t,children:`REALIZAR OFERTA`},t))})]},e))})})]}),(0,y.jsxs)(`div`,{className:`grid grid-cols-[1fr_auto] gap-8 items-start`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)]`,children:`Estados — Primary md`}),(0,y.jsx)(Or,{active:e,available:jr,onChange:t}),(0,y.jsx)(`div`,{className:`flex items-center gap-2`,children:i[e].map(e=>(0,y.jsx)(kr,{label:e},e))}),(0,y.jsx)(Ar,{children:(0,y.jsx)(S,{variant:`primary`,size:`md`,disabled:e===`Disabled`,isLoading:e===`Loading`,children:`REALIZAR OFERTA`})}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsx)(`div`,{className:`absolute top-3 right-3 z-10`,children:(0,y.jsx)(pr,{text:ne})}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 pt-12 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[320px] border-t border-white/6`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(O,{code:ne})})})]})]}),(0,y.jsxs)(`div`,{className:`w-[210px] shrink-0`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Design specs`}),(0,y.jsx)(`table`,{className:`w-full border-collapse`,children:(0,y.jsxs)(`tbody`,{children:[(0,y.jsx)(k,{label:`Height sm`,value:`32px`,token:`h-8`}),(0,y.jsx)(k,{label:`Height md`,value:`40px`,token:`h-10`}),(0,y.jsx)(k,{label:`Height lg`,value:`48px`,token:`h-12`}),(0,y.jsx)(k,{label:`Radius`,value:`4px`,token:`--radius-btn`}),(0,y.jsx)(k,{label:`Font`,value:`Plus Jakarta Sans`,token:`--font-body`}),(0,y.jsx)(k,{label:`Weight`,value:`SemiBold 600`,token:`--weight-semibold`}),(0,y.jsx)(k,{label:`Tracking`,value:`0.9px`,token:`--tracking-wider`}),(0,y.jsx)(k,{label:`Primary bg`,value:`gradient vault`,token:`--color-surface-hero-gradient`}),(0,y.jsx)(k,{label:`Shadow`,value:`brand tinted`,token:`--shadow-brand-tinted`})]})})]})]}),n&&(0,y.jsxs)(`div`,{className:`mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`Button.tsx`}),(0,y.jsx)(pr,{text:`import { type ReactNode } from 'react'

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
`})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(O,{code:`import { type ReactNode } from 'react'

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
`})})})]}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}var Nr=[`live`,`negotiable`,`closed`,`upcoming`,`new`,`featured`];function Pr(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`badge`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`Badge`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L1 — Elemento`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),e?`Ocultar`:`Ver fuente`]})]}),(0,y.jsxs)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:[`Indicador de estado o categoría de un lote. Siempre uppercase, siempre pill. El dot pulsante de `,(0,y.jsx)(`code`,{className:`font-mono text-[11px]`,children:`live`}),` indica subasta en tiempo real.`]}),(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Variantes × Tamaños`}),(0,y.jsx)(`div`,{className:`p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:[`md`,`sm`].map(e=>(0,y.jsxs)(`div`,{className:`flex items-center gap-3 mb-4 last:mb-0 flex-wrap`,children:[(0,y.jsx)(`span`,{className:`w-[28px] shrink-0 text-[10px] font-mono text-[var(--gray-400)]`,children:e}),Nr.map(t=>(0,y.jsx)(C,{type:t,size:e},t))]},e))})]}),(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Estado Disabled`}),(0,y.jsx)(`div`,{className:`p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:(0,y.jsx)(`div`,{className:`flex items-center gap-3 flex-wrap`,children:Nr.map(e=>(0,y.jsx)(C,{type:e,disabled:!0},e))})})]}),e&&(0,y.jsxs)(`div`,{className:`mt-2`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`Badge.tsx`}),(0,y.jsx)(pr,{text:`export type BadgeType = 'live' | 'negotiable' | 'closed' | 'upcoming' | 'new' | 'featured'
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
`})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(O,{code:`export type BadgeType = 'live' | 'negotiable' | 'closed' | 'upcoming' | 'new' | 'featured'
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
`})})})]}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}function Fr(){return(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`path`,{d:`M11 11l3 3`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function Ir(){return(0,y.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,y.jsx)(`circle`,{cx:`8`,cy:`8`,r:`2`,stroke:`currentColor`,strokeWidth:`1.5`})]})}function Lr(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`textfield`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`TextField`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L1 — Elemento`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),e?`Ocultar`:`Ver fuente`]})]}),(0,y.jsxs)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:[`Input de texto. Sin border en reposo — el fondo `,(0,y.jsx)(`code`,{className:`font-mono text-[11px]`,children:`--color-surface-input`}),` define el límite. Border ghost solo en focus y error.`]}),(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Estados`}),(0,y.jsx)(`div`,{className:`p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:(0,y.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,y.jsx)(ae,{label:`Default`,placeholder:`Ingresa tu nombre`}),(0,y.jsx)(ae,{label:`Con hint`,placeholder:`usuario@email.com`,hint:`Nunca compartiremos tu email.`}),(0,y.jsx)(ae,{label:`Error`,placeholder:`Ingresa tu nombre`,error:`Este campo es requerido.`,defaultValue:`Valor inválido`}),(0,y.jsx)(ae,{label:`Disabled`,placeholder:`Campo deshabilitado`,disabled:!0}),(0,y.jsx)(ae,{label:`Read-only`,defaultValue:`No se puede editar`,readOnly:!0}),(0,y.jsx)(ae,{label:`Con ícono`,placeholder:`Buscar vehículo...`,variant:`withLeadingIcon`,leadingIcon:(0,y.jsx)(Fr,{})})]})})]}),(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Con acción trailing`}),(0,y.jsx)(`div`,{className:`p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:(0,y.jsx)(`div`,{className:`max-w-[280px]`,children:(0,y.jsx)(ae,{label:`Contraseña`,type:`password`,placeholder:`••••••••`,variant:`withTrailingAction`,trailingAction:(0,y.jsx)(`button`,{type:`button`,"aria-label":`Mostrar contraseña`,className:`text-[var(--color-text-muted)] hover:text-[var(--color-action-primary)] transition-colors duration-[var(--duration-micro)]`,children:(0,y.jsx)(Ir,{})})})})})]}),e&&(0,y.jsxs)(`div`,{className:`mt-2`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`TextField.tsx`}),(0,y.jsx)(pr,{text:`import { type ReactNode, useId } from 'react'

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
`})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(O,{code:`import { type ReactNode, useId } from 'react'

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
`})})})]}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}function Rr(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(!1),i=Date.now(),a=i+2700*1e3,o=i+10800*1e3,s=i-1e3;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`section`,{id:`countdown-timer`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`CountdownTimer`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L1 — Elemento`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),e?`Ocultar`:`Ver fuente`]})]}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:`Timer en vivo con Roboto Mono y tabular-nums. Cambia a cyan cuando quedan menos de 60 minutos. Muestra CERRADO al expirar.`}),(0,y.jsx)(`div`,{className:`p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)] mb-6`,children:(0,y.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,y.jsx)(`span`,{className:`w-[80px] shrink-0 text-[10px] font-mono text-[var(--gray-400)]`,children:`default`}),(0,y.jsx)(le,{endsAt:o}),(0,y.jsx)(`span`,{className:`text-[10px] text-[var(--gray-400)]`,children:`+3h → color neutro`})]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,y.jsx)(`span`,{className:`w-[80px] shrink-0 text-[10px] font-mono text-[var(--gray-400)]`,children:`urgent`}),(0,y.jsx)(le,{endsAt:a}),(0,y.jsx)(`span`,{className:`text-[10px] text-[var(--color-text-accent)]`,children:`menos de 1h → cyan`})]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,y.jsx)(`span`,{className:`w-[80px] shrink-0 text-[10px] font-mono text-[var(--gray-400)]`,children:`expired`}),(0,y.jsx)(le,{endsAt:s}),(0,y.jsx)(`span`,{className:`text-[10px] text-[var(--gray-400)]`,children:`expirado → CERRADO`})]})]})}),e&&(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`CountdownTimer.tsx`}),(0,y.jsx)(pr,{text:`import { useState, useEffect } from 'react'

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
`})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(O,{code:`import { useState, useEffect } from 'react'

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
`})})})]}),(0,y.jsx)(`div`,{className:`mt-6 border-b border-[var(--gray-100)]`})]}),(0,y.jsxs)(`section`,{id:`price-display`,className:`scroll-mt-8 mt-12`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`PriceDisplay`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L1 — Elemento`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>r(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),n?`Ocultar`:`Ver fuente`]})]}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:`Montos monetarios en Roboto Mono con tabular-nums. Nunca sin label. 3 contextos según densidad de la UI.`}),(0,y.jsx)(`div`,{className:`p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)] mb-4`,children:(0,y.jsxs)(`div`,{className:`flex flex-wrap items-end gap-10`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(`span`,{className:`text-[10px] font-mono text-[var(--gray-400)] mb-2`,children:`hero`}),(0,y.jsx)(T,{context:`hero`,label:`Precio Base`,amount:17999})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(`span`,{className:`text-[10px] font-mono text-[var(--gray-400)] mb-2`,children:`card`}),(0,y.jsx)(T,{context:`card`,label:`Precio Base`,amount:17999})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(`span`,{className:`text-[10px] font-mono text-[var(--gray-400)] mb-2`,children:`compact`}),(0,y.jsx)(T,{context:`compact`,label:`Precio Base`,amount:17999})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(`span`,{className:`text-[10px] font-mono text-[var(--gray-400)] mb-2`,children:`loading`}),(0,y.jsx)(T,{context:`card`,label:`Precio Base`,amount:0,isLoading:!0})]})]})}),n&&(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`PriceDisplay.tsx`}),(0,y.jsx)(pr,{text:`export type PriceContext = 'hero' | 'card' | 'compact'

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
`})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(O,{code:`export type PriceContext = 'hero' | 'card' | 'compact'

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
`})})})]}),(0,y.jsx)(`div`,{className:`mt-6 border-b border-[var(--gray-100)]`})]})]})}var zr=[{id:`1`,title:`TOYOTA HILUX`,subtitle:`2024 · Lima, Perú`,badge:`live`,price:17999,currency:`US$`,priceLabel:`PRECIO BASE`,endsAt:Date.now()+2640*1e3},{id:`2`,title:`BMW 320i`,subtitle:`2023 · Lima, Perú`,badge:`negotiable`,price:32500,currency:`US$`,priceLabel:`OFERTA ACTUAL`,endsAt:Date.now()+7200*1e3},{id:`3`,title:`FORD BRONCO`,subtitle:`2022 · Arequipa, Perú`,badge:`upcoming`,price:24e3,currency:`US$`,priceLabel:`PRECIO BASE`,endsAt:Date.now()+300*60*1e3},{id:`4`,title:`KIA SPORTAGE`,subtitle:`2021 · Lima, Perú`,badge:`closed`,price:14500,currency:`US$`,priceLabel:`PRECIO FINAL`}];function Br(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(new Set),{version:i}=me(),[a,o]=(0,_.useState)(0),s=e=>{e&&r(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},c=i===`upgrade`?$e:Qe,l=i===`upgrade`?`AuctionCard.upgrade.tsx`:`AuctionCard.tsx`,u={...zr[0],isFavorited:n.has(`1`)},d={...zr[a],isFavorited:n.has(zr[a].id)};return(0,y.jsxs)(`section`,{id:`auction-card`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`AuctionCard`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L3 — Bloque`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),e?`Ocultar`:`Ver fuente`]})]}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:`Representa un único lote de subasta. El color de la franja inferior comunica el estado del lote. Un grupo de AuctionCards es un componente separado (AuctionCardGrid).`}),(0,y.jsxs)(`div`,{className:`mb-8`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Standard`}),(0,y.jsx)(Ze,{variant:`standard`,lot:u,onFavorite:s})]}),(0,y.jsxs)(`div`,{className:`mb-8`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Estados — franja por badge`}),(0,y.jsx)(`div`,{className:`flex gap-2 mb-4`,children:zr.map((e,t)=>(0,y.jsx)(`button`,{onClick:()=>o(t),className:`px-3 py-1 text-[11px] rounded transition-colors ${a===t?`bg-[var(--purple-700)] text-white`:`bg-[var(--gray-100)] text-[var(--gray-600)] hover:bg-[var(--gray-200)]`}`,children:e.badge},e.id))}),(0,y.jsx)(Ze,{variant:`standard`,lot:d,onFavorite:s})]}),(0,y.jsxs)(`div`,{className:`mb-8`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Featured — lote destacado`}),(0,y.jsx)(`div`,{className:`max-w-[300px]`,children:(0,y.jsx)(Ze,{variant:`featured`,lot:{...zr[0],isFavorited:n.has(`1`)},onFavorite:s})})]}),(0,y.jsxs)(`div`,{className:`mb-8`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Compact — lista densa`}),(0,y.jsx)(`div`,{className:`rounded-[var(--radius-card)] border border-[var(--gray-300)] overflow-hidden max-w-[520px]`,children:(0,y.jsx)(Ze,{variant:`compact`,lot:u})})]}),(0,y.jsxs)(`div`,{className:`mb-8`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Loading — skeleton`}),(0,y.jsx)(Ze,{isLoading:!0})]}),e&&(0,y.jsxs)(`div`,{className:`mt-2`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:l}),(0,y.jsx)(pr,{text:c})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(O,{code:c})})})]}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}function Vr(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`bid-form`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`BidForm`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L3 — Bloque`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),e?`Ocultar`:`Ver fuente`]})]}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:`Formulario de oferta. Validación en tiempo real, paso de confirmación antes de ejecutar, Roboto Mono en el monto. El componente de mayor criticidad económica del sistema.`}),(0,y.jsxs)(`div`,{className:`grid grid-cols-3 gap-6 mb-6`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-mono text-[var(--gray-400)]`,children:`idle / active`}),(0,y.jsx)(`div`,{className:`p-4 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:(0,y.jsx)(it,{lotId:`demo-1`,minimumBid:18500,currentBid:17999,currency:`US$`})})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-mono text-[var(--gray-400)]`,children:`sin oferta actual`}),(0,y.jsx)(`div`,{className:`p-4 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:(0,y.jsx)(it,{lotId:`demo-2`,minimumBid:15e3,currency:`US$`})})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-mono text-[var(--gray-400)]`,children:`disabled — subasta cerrada`}),(0,y.jsx)(`div`,{className:`p-4 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]`,children:(0,y.jsx)(it,{lotId:`demo-3`,minimumBid:18500,currency:`US$`,disabled:!0})})]})]}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--color-text-muted)] mb-6`,children:`Flujo completo: ingresa un monto ≥ mínimo → REALIZAR OFERTA → pantalla de confirmación → CONFIRMAR → éxito.`}),e&&(0,y.jsxs)(`div`,{className:`mt-2`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`BidForm.tsx`}),(0,y.jsx)(pr,{text:`import { useState, useId, useCallback } from 'react'
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
`})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(O,{code:`import { useState, useId, useCallback } from 'react'
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
`})})})]}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}function Hr(){let[e,t]=(0,_.useState)(`subastas`);return(0,y.jsxs)(`section`,{id:`layouts`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3 mb-1`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--color-text-primary)] leading-tight`,children:`Layouts`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-500)]`,children:`L4 — Estructuras`})]}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:`Marcos estructurales macro. Definen la arquitectura de página. Max-width 1024px · margin auto.`})]}),(0,y.jsxs)(`div`,{className:`mb-8`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Header`}),(0,y.jsx)(`div`,{className:`rounded-xl overflow-hidden border border-[var(--gray-300)]`,children:(0,y.jsx)(lt,{user:{name:`Julio Herrera`}})}),(0,y.jsx)(`p`,{className:`mt-2 text-[11px] text-[var(--gray-500)]`,children:`Con usuario autenticado`}),(0,y.jsx)(`div`,{className:`mt-2 rounded-xl overflow-hidden border border-[var(--gray-300)]`,children:(0,y.jsx)(lt,{onLogin:()=>{}})}),(0,y.jsx)(`p`,{className:`mt-2 text-[11px] text-[var(--gray-500)]`,children:`Sin usuario — botón INGRESA`})]}),(0,y.jsxs)(`div`,{className:`mb-8`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Sidebar`}),(0,y.jsx)(`div`,{className:`rounded-xl overflow-hidden border border-[var(--gray-300)]`,style:{width:280,height:420},children:(0,y.jsx)(xt,{activeId:e,onNavigate:t,className:`h-full`})}),(0,y.jsx)(`p`,{className:`mt-2 text-[11px] text-[var(--gray-500)]`,children:`Los ítems son interactivos — haz click para cambiar el estado activo`})]}),(0,y.jsxs)(`div`,{className:`mb-8`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Footer`}),(0,y.jsx)(`div`,{className:`rounded-xl overflow-hidden border border-[var(--gray-300)]`,children:(0,y.jsx)(Nt,{})})]}),(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`PageLayout — preview completo (escala 50%)`}),(0,y.jsx)(`div`,{className:`rounded-xl overflow-hidden border border-[var(--gray-300)] bg-[var(--gray-100)]`,style:{height:400},children:(0,y.jsx)(`div`,{style:{transform:`scale(0.5)`,transformOrigin:`top left`,width:`200%`,height:`200%`,pointerEvents:`none`},children:(0,y.jsx)(Pt,{user:{name:`Julio Herrera`},activeSection:`subastas`,children:(0,y.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,y.jsx)(`h2`,{className:`m-0 font-[var(--font-body)] font-[var(--weight-extrabold)] uppercase text-[var(--color-text-primary)]`,style:{fontSize:`var(--type-section-heading-size)`},children:`Subastas Activas`}),(0,y.jsx)(`div`,{className:`grid grid-cols-3 gap-3`,children:zr.slice(0,3).map(e=>(0,y.jsx)(Ze,{variant:`standard`,lot:e},e.id))})]})})})}),(0,y.jsx)(`p`,{className:`mt-2 text-[11px] text-[var(--gray-500)]`,children:`Header + Sidebar + Content + Footer a 1024px max-width`})]}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}var Ur=[`Default`,`Hover`,`Focus`,`Active`];function Wr({state:e}){return(0,y.jsx)(`div`,{className:e===`Focus`?`outline outline-2 outline-offset-2 outline-[var(--color-action-primary)] rounded-[var(--radius-card)]`:``,style:{display:`inline-flex`},children:(0,y.jsx)(It,{className:{Default:``,Hover:`shadow-[var(--shadow-card-hover)]`,Focus:``,Active:`scale-[0.98]`,Disabled:``,Loading:``,Error:``}[e]})})}function Gr(){let[e,t]=(0,_.useState)(!1),n=Array.from({length:5}).map((e,t)=>({title:[`FORD BRONCO SPORT`,`TOYOTA HILUX`,`NISSAN VERSA`,`TOYOTA ETIOS`,`KIA SPORTAGE`][t],subtitle:[`2024 | LIMA, PERÚ`,`2024 | TRUJILLO, PERÚ`,`2024 | LIMA, PERÚ`,`2023 | AREQUIPA, PERÚ`,`2024 | LIMA, PERÚ`][t],price:[`17,999`,`17,999`,`3,999`,`4,999`,`12,999`][t]}));return(0,y.jsxs)(`section`,{id:`auctioneer-section`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)] m-0`,children:`AuctioneerSection`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5 mb-0`,children:`Sección rematador — carousel horizontal con fade + clip`})]}),(0,y.jsx)(`button`,{onClick:()=>t(e=>!e),className:`text-[11px] px-3 py-1.5 rounded-md border border-[var(--gray-300)] text-[var(--gray-500)] hover:border-[var(--purple-700)] hover:text-[var(--purple-700)] transition-colors bg-white cursor-pointer`,children:e?`Ocultar código`:`Ver código`})]}),(0,y.jsx)(`div`,{className:`rounded-xl border border-[var(--gray-300)] overflow-hidden mb-4`,children:(0,y.jsx)(`div`,{className:`w-[708px] max-w-full mx-auto`,children:(0,y.jsx)(Vt,{title:`ME INTERESA`,offerCount:5,profileLinkLabel:`IR AL PERFIL`,onProfileClick:()=>{},cards:n})})}),e&&(0,y.jsxs)(`div`,{className:`mt-4`,children:[(0,y.jsx)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`AuctioneerSection.tsx`})}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(O,{code:`import { useRef, useState, useEffect } from 'react'
import { VehicleCard, type VehicleCardProps } from '../VehicleCard/VehicleCard'

export interface AuctioneerSectionProps {
  title?: string
  offerCount?: number
  profileLinkLabel?: string
  onProfileClick?: () => void
  cards?: VehicleCardProps[]
  /** carousel: scroll horizontal (homepage). grid: 2 columnas (detalle). */
  layout?: 'carousel' | 'grid'
  className?: string
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Carousel ─────────────────────────────────────────────────────────────────

function CarouselCards({ cards }: { cards: VehicleCardProps[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const check = () => setHasMore(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
    check()
    el.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => { el.removeEventListener('scroll', check); window.removeEventListener('resize', check) }
  }, [cards])

  const items = cards.length > 0 ? cards : Array.from({ length: 4 }, () => ({}))

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex flex-row gap-3 px-5 pb-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((card, i) => (
          <div key={i} className="shrink-0 w-[163px]">
            <VehicleCard {...card} />
          </div>
        ))}
      </div>
      {hasMore && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-[80px]"
          style={{ background: 'linear-gradient(to right, transparent, var(--color-surface-section))' }}
        />
      )}
    </div>
  )
}

// ─── Grid ─────────────────────────────────────────────────────────────────────

function GridCards({ cards }: { cards: VehicleCardProps[] }) {
  const items = cards.length > 0 ? cards : Array.from({ length: 4 }, () => ({}))
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px',
        padding: '0 12px 12px',
      }}
    >
      {items.map((card, i) => (
        <VehicleCard key={i} {...card} />
      ))}
    </div>
  )
}

// ─── AuctioneerSection ────────────────────────────────────────────────────────

export function AuctioneerSection({
  title            = 'Ofertas Relacionadas',
  offerCount,
  profileLinkLabel = 'IR AL PERFIL',
  onProfileClick,
  cards            = [],
  layout           = 'carousel',
  className        = '',
}: AuctioneerSectionProps) {
  return (
    <section
      className={['flex flex-col w-full bg-[var(--color-surface-section)]', className].filter(Boolean).join(' ')}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 pt-4 pb-3">
        <div className="flex flex-col gap-0">
          <h2
            className="m-0"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 800,
              fontSize: layout === 'carousel' ? '18px' : '15px',
              lineHeight: '24px',
              color: 'var(--color-text-primary)',
            }}
          >
            {title}
          </h2>
          {offerCount !== undefined && (
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '16px',
                color: 'var(--color-text-secondary)',
              }}
            >
              {offerCount} OFERTAS
            </span>
          )}
        </div>

        {onProfileClick && (
          <button
            type="button"
            onClick={onProfileClick}
            className="flex items-center gap-1 bg-transparent border-0 cursor-pointer transition-colors duration-[var(--duration-micro)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '12px',
              color: 'var(--color-action-primary)',
            }}
          >
            {profileLinkLabel}
            <ChevronIcon />
          </button>
        )}
      </div>

      {/* Cards */}
      {layout === 'grid'
        ? <GridCards cards={cards} />
        : <CarouselCards cards={cards} />
      }
    </section>
  )
}

export default AuctioneerSection
`})})})]})]})}function Kr(){let[e,t]=(0,_.useState)(`Default`),[n,r]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`vehicle-card`,className:`scroll-mt-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-1`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`h1`,{className:`text-[22px] font-bold text-[var(--purple-900)] leading-tight`,children:`Vehicle Card`}),(0,y.jsx)(`span`,{className:`text-[11px] font-semibold text-[var(--gray-400)]`,children:`🟢 Confirmado`})]}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>r(e=>!e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-700)] hover:text-[var(--purple-700)]`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})}),n?`Ocultar`:`Ver fuente`]})]}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]`,children:`Tarjeta de vehículo con imagen, precio y acción. 228px fijo, radio 16px, shadow SM en reposo y LG en hover.`}),(0,y.jsxs)(`div`,{className:`grid grid-cols-[1fr_auto] gap-8 items-start`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,y.jsx)(Or,{active:e,available:Ur,onChange:t}),(0,y.jsx)(`div`,{className:`flex items-center gap-2`,children:{Default:[`(sin props)`],Hover:[`CSS :hover`],Focus:[`CSS :focus-visible (botón)`],Active:[`CSS :active`],Disabled:[`—`],Loading:[`—`],Error:[`—`]}[e].map(e=>(0,y.jsx)(kr,{label:e},e))}),(0,y.jsx)(Ar,{children:(0,y.jsx)(Wr,{state:e})}),(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsx)(`div`,{className:`absolute top-3 right-3 z-10`,children:(0,y.jsx)(pr,{text:Lt})}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 pt-12 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[320px] border-t border-white/6`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(O,{code:Lt})})})]})]}),(0,y.jsxs)(`div`,{className:`w-[210px] shrink-0`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Design specs`}),(0,y.jsx)(`table`,{className:`w-full border-collapse`,children:(0,y.jsxs)(`tbody`,{children:[(0,y.jsx)(k,{label:`Width`,value:`flexible (w-full)`,token:`parent grid`}),(0,y.jsx)(k,{label:`Image height`,value:`128px`,token:`h-[128px]`}),(0,y.jsx)(k,{label:`Px horiz`,value:`12px`,token:`--space-3`}),(0,y.jsx)(k,{label:`Background`,value:`#fefdfc`,token:`--color-surface-card`}),(0,y.jsx)(k,{label:`Radius`,value:`16px`,token:`--radius-card`}),(0,y.jsx)(k,{label:`Shadow rest`,value:`0 2px 4px rgba(0,0,0,.06)`,token:`--shadow-card`}),(0,y.jsx)(k,{label:`Shadow hover`,value:`0 8px 16px rgba(0,0,0,.10)`,token:`--shadow-card-hover`}),(0,y.jsx)(k,{label:`Title`,value:`PJS Bold 12px/20px uppercase`,token:`--size-12`}),(0,y.jsx)(k,{label:`Subtitle`,value:`PJS 400 11px/16px`,token:`--size-11`}),(0,y.jsx)(k,{label:`Precio label`,value:`PJS 600 11px/16px uppercase`,token:`--size-11`}),(0,y.jsx)(k,{label:`Precio`,value:`PJS Bold 16px/24px tabular`,token:`--color-brand-live`}),(0,y.jsx)(k,{label:`Fav. button`,value:`32×32px, radius-full`,token:`--radius-full`}),(0,y.jsx)(k,{label:`Strip`,value:`4px amber`,token:`--color-brand-live`})]})})]})]}),n&&(0,y.jsxs)(`div`,{className:`mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10`,children:[(0,y.jsx)(`span`,{className:`text-[11px] font-mono text-white/40`,children:`VehicleCard.tsx`}),(0,y.jsx)(pr,{text:`import React from 'react'

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
    <svg width="14" height="13" viewBox="0 0 18 16" fill="none" aria-hidden="true">
      <path
        d="M9 14.5S1 9.5 1 4.5A4 4 0 0 1 9 3a4 4 0 0 1 8 1.5C17 9.5 9 14.5 9 14.5Z"
        fill={filled ? 'var(--color-action-primary)' : 'none'}
        stroke={filled ? 'var(--color-action-primary)' : 'currentColor'}
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
        'overflow-hidden',
        onClick ? 'cursor-pointer' : '',
        'transition-shadow duration-[var(--duration-standard)]',
        'hover:shadow-[var(--shadow-card-hover)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
        className,
      ].filter(Boolean).join(' ')}
      style={{
        boxShadow: '0px 8px 24px 0px rgba(34,0,92,0.08)',
        borderBottom: '3px solid var(--color-action-cta)',
      }}
    >
      {/* ── Imagen ── */}
      <div className="w-full aspect-[4/3] shrink-0 overflow-hidden bg-[var(--gray-100)]">
        {imageUrl
          ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(150deg, #3d3d4f 0%, #2a2a38 100%)' }}
            >
              <svg width="48" height="24" viewBox="0 0 72 36" fill="white" aria-hidden="true" opacity="0.3">
                <path d="M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z" />
                <circle cx="18" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="54" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          )
        }
      </div>

      {/* ── Contenido ── */}
      <div className="flex flex-col flex-1 px-3 pt-2.5 pb-3">

        {/* Nombre */}
        <h3
          className="m-0 uppercase truncate"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 800,
            fontSize: '11px',
            lineHeight: '16px',
            color: 'var(--color-text-primary)',
          }}
        >
          {title}
        </h3>

        {/* Año · Ubicación */}
        <p
          className="mt-0.5 mb-0"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
            color: 'var(--color-text-primary)',
          }}
        >
          {subtitle}
        </p>

        {/* Precio + Favorito */}
        <div className="flex items-end justify-between mt-2">

          {/* Precio */}
          <div className="flex flex-col gap-0">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '10px',
                lineHeight: '16px',
                color: 'var(--color-text-muted)',
              }}
            >
              {priceLabel}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '20px',
                color: 'var(--color-text-primary)',
              }}
            >
              {currency} {price}
            </span>
          </div>

          {/* Favorito */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(e) }}
            aria-label={isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-pressed={isFavorited}
            className="flex items-center justify-center border cursor-pointer transition-colors duration-[var(--duration-micro)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]"
            style={{
              width: '29px',
              height: '29px',
              borderRadius: '50%',
              background: 'white',
              borderColor: 'var(--gray-200)',
              color: isFavorited ? 'var(--color-action-primary)' : 'var(--gray-400)',
              flexShrink: 0,
            }}
          >
            <HeartIcon filled={isFavorited} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default VehicleCard
`})]}),(0,y.jsx)(`pre`,{className:`overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]`,children:(0,y.jsx)(`code`,{children:(0,y.jsx)(O,{code:`import React from 'react'

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
    <svg width="14" height="13" viewBox="0 0 18 16" fill="none" aria-hidden="true">
      <path
        d="M9 14.5S1 9.5 1 4.5A4 4 0 0 1 9 3a4 4 0 0 1 8 1.5C17 9.5 9 14.5 9 14.5Z"
        fill={filled ? 'var(--color-action-primary)' : 'none'}
        stroke={filled ? 'var(--color-action-primary)' : 'currentColor'}
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
        'overflow-hidden',
        onClick ? 'cursor-pointer' : '',
        'transition-shadow duration-[var(--duration-standard)]',
        'hover:shadow-[var(--shadow-card-hover)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
        className,
      ].filter(Boolean).join(' ')}
      style={{
        boxShadow: '0px 8px 24px 0px rgba(34,0,92,0.08)',
        borderBottom: '3px solid var(--color-action-cta)',
      }}
    >
      {/* ── Imagen ── */}
      <div className="w-full aspect-[4/3] shrink-0 overflow-hidden bg-[var(--gray-100)]">
        {imageUrl
          ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(150deg, #3d3d4f 0%, #2a2a38 100%)' }}
            >
              <svg width="48" height="24" viewBox="0 0 72 36" fill="white" aria-hidden="true" opacity="0.3">
                <path d="M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z" />
                <circle cx="18" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="54" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          )
        }
      </div>

      {/* ── Contenido ── */}
      <div className="flex flex-col flex-1 px-3 pt-2.5 pb-3">

        {/* Nombre */}
        <h3
          className="m-0 uppercase truncate"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 800,
            fontSize: '11px',
            lineHeight: '16px',
            color: 'var(--color-text-primary)',
          }}
        >
          {title}
        </h3>

        {/* Año · Ubicación */}
        <p
          className="mt-0.5 mb-0"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
            color: 'var(--color-text-primary)',
          }}
        >
          {subtitle}
        </p>

        {/* Precio + Favorito */}
        <div className="flex items-end justify-between mt-2">

          {/* Precio */}
          <div className="flex flex-col gap-0">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '10px',
                lineHeight: '16px',
                color: 'var(--color-text-muted)',
              }}
            >
              {priceLabel}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '20px',
                color: 'var(--color-text-primary)',
              }}
            >
              {currency} {price}
            </span>
          </div>

          {/* Favorito */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(e) }}
            aria-label={isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-pressed={isFavorited}
            className="flex items-center justify-center border cursor-pointer transition-colors duration-[var(--duration-micro)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]"
            style={{
              width: '29px',
              height: '29px',
              borderRadius: '50%',
              background: 'white',
              borderColor: 'var(--gray-200)',
              color: isFavorited ? 'var(--color-action-primary)' : 'var(--gray-400)',
              flexShrink: 0,
            }}
          >
            <HeartIcon filled={isFavorited} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default VehicleCard
`})})})]}),(0,y.jsx)(`div`,{className:`mt-12 border-b border-[var(--gray-100)]`})]})}var qr=[{id:`frame-homepage`,label:`Homepage`,category:`Frames`,status:`done`},{id:`frame-detalle`,label:`Detalle de Lote`,category:`Frames`,status:`done`},{id:`tokens`,label:`Tokens`,category:`Fundación`,status:`done`},{id:`button-cta`,label:`Button / CTA`,category:`Átomos`,status:`done`},{id:`iconbutton`,label:`IconButton`,category:`Átomos`,status:`done`},{id:`badge`,label:`Badge`,category:`Átomos`,status:`done`},{id:`avatar`,label:`Avatar`,category:`Átomos`,status:`done`},{id:`divider`,label:`Divider`,category:`Átomos`,status:`done`},{id:`image`,label:`Image`,category:`Átomos`,status:`done`},{id:`textfield`,label:`TextField`,category:`Átomos`,status:`done`},{id:`checkbox-radio`,label:`Checkbox / Radio`,category:`Átomos`,status:`done`},{id:`searchinput`,label:`SearchInput`,category:`Átomos`,status:`done`},{id:`selectfield`,label:`SelectField`,category:`Átomos`,status:`done`},{id:`slider`,label:`Slider`,category:`Átomos`,status:`done`},{id:`countdown-price`,label:`Countdown / Price`,category:`Átomos`,status:`done`},{id:`alert`,label:`Alert`,category:`Átomos`,status:`done`},{id:`toast`,label:`Toast`,category:`Átomos`,status:`done`},{id:`skeleton`,label:`Skeleton`,category:`Moléculas`,status:`done`},{id:`tabbar`,label:`TabBar`,category:`Moléculas`,status:`done`},{id:`accordion`,label:`Accordion`,category:`Moléculas`,status:`done`},{id:`modal`,label:`Modal`,category:`Moléculas`,status:`done`},{id:`dropdown`,label:`Dropdown`,category:`Moléculas`,status:`done`},{id:`tooltip`,label:`Tooltip`,category:`Moléculas`,status:`done`},{id:`breadcrumb`,label:`Breadcrumb`,category:`Moléculas`,status:`done`},{id:`pagination`,label:`Pagination`,category:`Moléculas`,status:`done`},{id:`auction-card`,label:`AuctionCard`,category:`Moléculas`,status:`done`},{id:`bid-form`,label:`BidForm`,category:`Moléculas`,status:`done`},{id:`vehicle-card`,label:`Vehicle Card`,category:`Organismos`,status:`done`},{id:`auctioneer-section`,label:`Auctioneer Section`,category:`Organismos`,status:`done`},{id:`page-layout`,label:`PageLayout`,category:`Organismos`,status:`done`},{id:`hero-section`,label:`HeroSection`,category:`Organismos`,status:`done`},{id:`user-wallet`,label:`UserWallet`,category:`Moléculas`,status:`done`},{id:`filter-bar`,label:`FilterBar`,category:`Bloques`,status:`done`},{id:`auction-status-banner`,label:`AuctionStatusBanner`,category:`Bloques`,status:`done`},{id:`vehicle-specs-row`,label:`VehicleSpecsRow`,category:`Bloques`,status:`done`},{id:`bid-history-list`,label:`BidHistoryList`,category:`Bloques`,status:`done`},{id:`vehicle-image-gallery`,label:`VehicleImageGallery`,category:`Bloques`,status:`done`},{id:`seller-card`,label:`SellerCard`,category:`Bloques`,status:`done`},{id:`auction-summary-widget`,label:`AuctionSummaryWidget`,category:`Bloques`,status:`done`}],Jr={done:`bg-emerald-400`,wip:`bg-amber-400`,pending:`bg-[var(--gray-300)]`};function Yr({activeId:e}){let t=[...new Set(qr.map(e=>e.category))];return(0,y.jsxs)(`nav`,{className:`w-[220px] shrink-0 sticky top-0 h-screen overflow-y-auto py-6 flex flex-col`,"aria-label":`Design system docs`,children:[(0,y.jsxs)(`div`,{className:`px-4 mb-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-2 mb-0.5`,children:[(0,y.jsx)(`div`,{className:`size-6 rounded bg-[var(--cyan-500)] flex items-center justify-center shrink-0`,children:(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M2 7l2.5 4 2.5-4 2.5 4L12 7`,stroke:`white`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,y.jsxs)(`span`,{className:`font-bold text-[13px] text-[var(--purple-900)]`,children:[`VMC `,(0,y.jsx)(`span`,{className:`text-[var(--cyan-500)]`,children:`Design`})]})]}),(0,y.jsx)(`p`,{className:`text-[10px] text-[var(--gray-400)] pl-8`,children:`Fase 3 — UI Kit`})]}),t.map(t=>(0,y.jsxs)(`div`,{className:`mb-4 px-2`,children:[(0,y.jsx)(`p`,{className:`text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--gray-400)] px-2 mb-1.5`,children:t}),qr.filter(e=>e.category===t).map(t=>(0,y.jsxs)(`a`,{href:t.category===`Frames`?`#/frames/${t.id.replace(`frame-`,``)}`:`#${t.id}`,className:[`flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] transition-all duration-100 no-underline`,e===t.id?`bg-[var(--purple-700)] text-white font-semibold`:`text-[var(--gray-500)] hover:text-[var(--gray-600)] hover:bg-[var(--gray-50)]`].join(` `),children:[(0,y.jsx)(`span`,{className:`size-1.5 rounded-full shrink-0 ${Jr[t.status]}`,"aria-hidden":`true`}),t.label]},t.id))]},t)),(0,y.jsx)(`div`,{className:`mt-auto px-4 py-4 border-t border-[var(--gray-100)]`,children:(0,y.jsxs)(`p`,{className:`text-[9px] text-[var(--gray-400)] leading-4`,children:[`React · TS · Tailwind v4`,(0,y.jsx)(`br`,{}),`Tokens OKLCH · W3C DTCG`]})})]})}function Xr(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(!0),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(`op1`);return(0,y.jsxs)(`section`,{id:`checkbox-radio`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`Checkbox / RadioButton`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Controles de selección accesibles con estado controlado y hint.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-10`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-1`,children:`Checkbox`}),(0,y.jsx)(Ut,{label:`Activo (checked)`,checked:n,onChange:r}),(0,y.jsx)(Ut,{label:`Inactivo`,checked:i,onChange:a,hint:`Selecciona esta opción para continuar`}),(0,y.jsx)(Ut,{label:`Deshabilitado`,checked:!0,disabled:!0})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-1`,children:`RadioButton`}),(0,y.jsx)(Wt,{label:`Opción 1`,value:`op1`,name:`demo-radio`,checked:o===`op1`,onChange:s}),(0,y.jsx)(Wt,{label:`Opción 2`,value:`op2`,name:`demo-radio`,checked:o===`op2`,onChange:s,hint:`Con descripción adicional`}),(0,y.jsx)(Wt,{label:`Deshabilitada`,value:`op3`,name:`demo-radio`,checked:!1,disabled:!0})]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import { useId } from 'react'

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
`})})})]})]})}function Zr(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(``);return(0,y.jsxs)(`section`,{id:`searchinput`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`SearchInput`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Input de búsqueda con ícono leading, botón clear y soporte Enter/Escape.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-col gap-4 max-w-[400px]`,children:[(0,y.jsx)(qt,{value:n,onChange:r,onSearch:e=>console.log(`search:`,e)}),(0,y.jsx)(qt,{disabled:!0,placeholder:`Deshabilitado`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import { useState, useId, useRef } from 'react'

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
`})})})]})]})}function Qr(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(``),i=[{value:`auto`,label:`Automóvil`},{value:`camion`,label:`Camión`},{value:`moto`,label:`Motocicleta`,disabled:!0},{value:`bus`,label:`Bus`}];return(0,y.jsxs)(`section`,{id:`selectfield`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`SelectField`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Select nativo con chevron overlay, label semibold uppercase, hint y error.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start`,children:[(0,y.jsx)(Yt,{label:`Tipo de vehículo`,options:i,value:n,onChange:r,hint:`Selecciona para filtrar`,className:`max-w-[240px]`}),(0,y.jsx)(Yt,{label:`Con error`,options:i,error:`Este campo es requerido`,className:`max-w-[240px]`}),(0,y.jsx)(Yt,{label:`Deshabilitado`,options:i,disabled:!0,className:`max-w-[240px]`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import { useId } from 'react'

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
`})})})]})]})}function $r(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`alert`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`Alert`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Bandas de feedback inline: success / error / warning / info. Dismissible opcional.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-col gap-3 max-w-[480px]`,children:[(0,y.jsx)(Zt,{type:`success`,message:`Tu oferta fue registrada correctamente.`}),(0,y.jsx)(Zt,{type:`error`,message:`No se pudo procesar el pago. Intenta de nuevo.`,isDismissible:!0}),(0,y.jsx)(Zt,{type:`warning`,message:`Esta subasta cierra en menos de 10 minutos.`,isDismissible:!0}),(0,y.jsx)(Zt,{type:`info`,message:`Recuerda que las pujas son vinculantes según el reglamento.`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import { useState, type ReactNode } from 'react'

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
`})})})]})]})}function ei(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)([]),i=(0,_.useState)(0),a=(e,t)=>{let n=++i[0];r(r=>[...r,{id:n,type:e,msg:t}])},o=e=>r(t=>t.filter(t=>t.id!==e));return(0,y.jsxs)(`section`,{id:`toast`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`Toast`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Notificaciones flotantes con auto-dismiss, entrada animada y ToastContainer.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-2`,children:[(0,y.jsx)(`button`,{type:`button`,onClick:()=>a(`success`,`Oferta registrada correctamente.`),className:`px-3 py-1.5 rounded-md bg-emerald-500 text-white text-[11px] font-semibold border-0 cursor-pointer`,children:`+ Success`}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>a(`error`,`Error al procesar el pago.`),className:`px-3 py-1.5 rounded-md bg-red-500 text-white text-[11px] font-semibold border-0 cursor-pointer`,children:`+ Error`}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>a(`warning`,`Subasta cierra en 5 minutos.`),className:`px-3 py-1.5 rounded-md bg-amber-500 text-white text-[11px] font-semibold border-0 cursor-pointer`,children:`+ Warning`}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>a(`info`,`Las pujas son vinculantes.`),className:`px-3 py-1.5 rounded-md bg-blue-500 text-white text-[11px] font-semibold border-0 cursor-pointer`,children:`+ Info`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import { useEffect, useState, type ReactNode } from 'react'

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
`})})})]}),(0,y.jsx)(en,{children:n.map(e=>(0,y.jsx)($t,{type:e.type,message:e.msg,onDismiss:()=>o(e.id)},e.id))})]})}function ti(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`skeleton`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`Skeleton`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Estados de carga: text · rect · circle · card. animate-pulse sobre gray-200.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-8 items-start`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-3 min-w-[200px]`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]`,children:`Text / Lines`}),(0,y.jsx)(on,{variant:`text`,width:200}),(0,y.jsx)(on,{variant:`text`,width:200,lines:3})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]`,children:`Shapes`}),(0,y.jsx)(on,{variant:`circle`,width:40}),(0,y.jsx)(on,{variant:`rect`,width:120,height:36})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]`,children:`Card`}),(0,y.jsx)(on,{variant:`card`,className:`w-[200px]`})]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`export type SkeletonVariant = 'text' | 'rect' | 'circle' | 'card'

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
`})})})]})]})}function ni(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(`activas`),[i,a]=(0,_.useState)(`info`);return(0,y.jsxs)(`section`,{id:`tabbar`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`TabBar`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Navegación por pestañas: variante underline y pill. Con badges de conteo.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-col gap-6`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-3`,children:`Underline (default)`}),(0,y.jsx)(sn,{items:[{id:`activas`,label:`Activas`,count:12},{id:`cerradas`,label:`Cerradas`,count:4},{id:`pendientes`,label:`Pendientes`}],activeId:n,onChange:r})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-3`,children:`Pill`}),(0,y.jsx)(sn,{items:[{id:`info`,label:`Ficha técnica`},{id:`ofertas`,label:`Historial de ofertas`},{id:`docs`,label:`Documentos`,disabled:!0}],activeId:i,onChange:a,variant:`pill`})]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`export interface TabItem {
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
`})})})]})]})}function ri(){let[e,t]=(0,_.useState)(!1),n=[{title:`¿Cómo funciona la subasta?`,content:`Las subastas VMC se realizan en tiempo real. Cada participante registra sus pujas y el sistema valida contra el mínimo vigente.`},{title:`¿Cuándo debo pagar?`,content:`El ganador tiene 48 horas hábiles para completar el pago. De lo contrario, el lote pasa al siguiente postor.`},{title:`¿Puedo cancelar una oferta?`,content:`No. Las pujas son vinculantes según el reglamento vigente de VMC Subastas.`,defaultOpen:!0}];return(0,y.jsxs)(`section`,{id:`accordion`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`Accordion`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Disclosure accesible con aria-expanded. Single o multi-panel. Chevron animado.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-col gap-6`,children:[(0,y.jsxs)(`div`,{className:`max-w-[480px]`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-3`,children:`Single open (default)`}),(0,y.jsx)(ln,{items:n})]}),(0,y.jsxs)(`div`,{className:`max-w-[480px]`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-3`,children:`Multi open`}),(0,y.jsx)(ln,{items:n,allowMultiple:!0})]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import { useState, useId, type ReactNode } from 'react'

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
`})})})]})]})}function ii(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`modal`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`Modal`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Dialog accesible con portal, backdrop blur, Escape, focus-trap header/footer opcionales.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-2`,children:[(0,y.jsx)(`button`,{type:`button`,onClick:()=>r(!0),className:`px-3 py-1.5 rounded-md bg-[var(--purple-700)] text-white text-[11px] font-semibold border-0 cursor-pointer`,children:`Abrir sm`}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>a(!0),className:`px-3 py-1.5 rounded-md bg-[var(--purple-700)] text-white text-[11px] font-semibold border-0 cursor-pointer`,children:`Abrir md`}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>s(!0),className:`px-3 py-1.5 rounded-md bg-[var(--purple-700)] text-white text-[11px] font-semibold border-0 cursor-pointer`,children:`Abrir lg con footer`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import { useEffect, useCallback, type ReactNode } from 'react'
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
`})})})]}),(0,y.jsx)(rn,{isOpen:n,onClose:()=>r(!1),title:`Confirmar acción`,size:`sm`,children:(0,y.jsx)(`p`,{children:`¿Deseas retirar tu oferta de S/ 12,500 para el lote #A-0042?`})}),(0,y.jsxs)(rn,{isOpen:i,onClose:()=>a(!1),title:`Detalles del vehículo`,size:`md`,children:[(0,y.jsx)(`p`,{children:`Toyota Hilux 2022 · 4x4 · Diesel · 45,000 km · Estado: Bueno`}),(0,y.jsxs)(`p`,{className:`mt-3`,children:[`Precio base: `,(0,y.jsx)(`strong`,{children:`S/ 48,000`})]})]}),(0,y.jsxs)(rn,{isOpen:o,onClose:()=>s(!1),title:`Reglamento de subastas`,size:`lg`,footer:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`button`,{type:`button`,onClick:()=>s(!1),className:`px-4 py-2 rounded-[var(--radius-btn)] text-[var(--color-text-muted)] bg-transparent border border-[var(--color-border-ghost)] cursor-pointer text-[13px]`,children:`Cerrar`}),(0,y.jsx)(`button`,{type:`button`,className:`px-4 py-2 rounded-[var(--radius-btn)] bg-[var(--purple-700)] text-white border-0 cursor-pointer text-[13px] font-semibold`,children:`Aceptar`})]}),children:[(0,y.jsx)(`p`,{children:`Las pujas realizadas en VMC Subastas son vinculantes. Al ofertar, el participante acepta las condiciones del lote y se compromete a completar el pago en el plazo indicado.`}),(0,y.jsx)(`p`,{className:`mt-3`,children:`El ganador debe presentar DNI o RUC vigente junto con el comprobante de pago.`})]})]})}function ai(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(!1),i=({filled:e})=>(0,y.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:e?`currentColor`:`none`,children:(0,y.jsx)(`path`,{d:`M8 13.5S2 9.5 2 5.5a3.5 3.5 0 017 0 3.5 3.5 0 017 0C16 9.5 8 13.5 8 13.5z`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinejoin:`round`})}),a=()=>(0,y.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 15 15`,fill:`none`,children:[(0,y.jsx)(`circle`,{cx:`11`,cy:`3`,r:`1.8`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`circle`,{cx:`11`,cy:`12`,r:`1.8`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`circle`,{cx:`4`,cy:`7.5`,r:`1.8`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M9.2 4l-3.5 2m3.5 3-3.5-2`,stroke:`currentColor`,strokeWidth:`1.3`})]}),o=()=>(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M3 3l8 8M11 3l-8 8`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})});return(0,y.jsxs)(`section`,{id:`iconbutton`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`IconButton`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Botón solo ícono. Variantes ghost / filled / outline. Tamaños sm/md/lg. Estado isActive.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-6 items-center`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 items-start`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]`,children:`Ghost`}),(0,y.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,y.jsx)(fn,{icon:(0,y.jsx)(i,{filled:n}),label:`Favorito`,variant:`ghost`,isActive:n,onClick:()=>r(e=>!e)}),(0,y.jsx)(fn,{icon:(0,y.jsx)(a,{}),label:`Compartir`,variant:`ghost`,size:`sm`}),(0,y.jsx)(fn,{icon:(0,y.jsx)(o,{}),label:`Cerrar`,variant:`ghost`,size:`lg`}),(0,y.jsx)(fn,{icon:(0,y.jsx)(o,{}),label:`Deshabilitado`,variant:`ghost`,disabled:!0})]})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 items-start`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]`,children:`Filled`}),(0,y.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,y.jsx)(fn,{icon:(0,y.jsx)(i,{filled:!0}),label:`Favorito`,variant:`filled`,size:`sm`}),(0,y.jsx)(fn,{icon:(0,y.jsx)(i,{filled:!0}),label:`Favorito`,variant:`filled`,size:`md`}),(0,y.jsx)(fn,{icon:(0,y.jsx)(i,{filled:!0}),label:`Favorito`,variant:`filled`,size:`lg`})]})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 items-start`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]`,children:`Outline`}),(0,y.jsxs)(`div`,{className:`flex gap-2 items-center`,children:[(0,y.jsx)(fn,{icon:(0,y.jsx)(a,{}),label:`Compartir`,variant:`outline`,size:`sm`}),(0,y.jsx)(fn,{icon:(0,y.jsx)(a,{}),label:`Compartir`,variant:`outline`,size:`md`}),(0,y.jsx)(fn,{icon:(0,y.jsx)(a,{}),label:`Compartir`,variant:`outline`,size:`lg`})]})]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import type { ReactNode } from 'react'

export type IconButtonVariant = 'ghost' | 'filled' | 'outline'
export type IconButtonSize    = 'sm' | 'md' | 'lg'

export interface IconButtonProps {
  icon: ReactNode
  label: string           // aria-label — siempre requerido
  variant?: IconButtonVariant
  size?: IconButtonSize
  isActive?: boolean
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const SIZE: Record<IconButtonSize, string> = {
  sm: 'size-7',
  md: 'size-9',
  lg: 'size-11',
}

const VARIANT: Record<IconButtonVariant, { base: string; active: string }> = {
  ghost: {
    base:   'bg-transparent text-[var(--color-text-muted)] hover:bg-[var(--gray-100)] hover:text-[var(--color-text-body)]',
    active: 'bg-[var(--gray-100)] text-[var(--color-action-primary)]',
  },
  filled: {
    base:   'bg-[var(--color-action-primary)] text-white hover:bg-[var(--color-action-primary-hover)]',
    active: 'bg-[var(--color-action-primary-press)] text-white',
  },
  outline: {
    base:   'bg-transparent text-[var(--color-text-body)] border border-[var(--color-border-ghost)] hover:bg-[var(--gray-50)] hover:border-[var(--gray-300)]',
    active: 'bg-[var(--gray-100)] text-[var(--color-action-primary)] border-[var(--color-action-primary)]',
  },
}

export function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  isActive = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}: IconButtonProps) {
  const { base, active } = VARIANT[variant]

  return (
    <button
      type={type}
      aria-label={label}
      aria-pressed={isActive || undefined}
      disabled={disabled}
      onClick={onClick}
      className={[
        'inline-flex items-center justify-center shrink-0',
        'rounded-[var(--radius-btn)]',
        'cursor-pointer outline-none',
        'transition-[background,color,border-color,box-shadow] duration-[var(--duration-micro)]',
        'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-action-primary)]',
        SIZE[size],
        isActive ? active : base,
        disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : '',
        variant === 'outline' ? '' : 'border-0',
        className,
      ].filter(Boolean).join(' ')}
    >
      {icon}
    </button>
  )
}

export default IconButton
`})})})]})]})}function oi(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`avatar`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`Avatar`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Foto de perfil con fallback a iniciales. Color generado desde el nombre. Status indicator.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-6 items-end`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 items-center`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]`,children:`Tamaños`}),(0,y.jsxs)(`div`,{className:`flex gap-3 items-end`,children:[(0,y.jsx)(vn,{name:`Carlos Paredes`,size:`xs`}),(0,y.jsx)(vn,{name:`Carlos Paredes`,size:`sm`}),(0,y.jsx)(vn,{name:`Carlos Paredes`,size:`md`}),(0,y.jsx)(vn,{name:`Carlos Paredes`,size:`lg`}),(0,y.jsx)(vn,{name:`Carlos Paredes`,size:`xl`})]})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 items-center`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]`,children:`Status`}),(0,y.jsxs)(`div`,{className:`flex gap-3 items-end`,children:[(0,y.jsx)(vn,{name:`Ana Torres`,size:`md`,status:`online`}),(0,y.jsx)(vn,{name:`Roberto M`,size:`md`,status:`busy`}),(0,y.jsx)(vn,{name:`Lucia F`,size:`md`,status:`away`}),(0,y.jsx)(vn,{name:`Jorge H`,size:`md`,status:`offline`})]})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 items-center`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]`,children:`Colores auto`}),(0,y.jsx)(`div`,{className:`flex gap-2`,children:[`VMC Subastas`,`Pedro Ruiz`,`Diana Castro`,`Marco Silva`].map(e=>(0,y.jsx)(vn,{name:e,size:`sm`},e))})]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`export type AvatarSize   = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away'

export interface AvatarProps {
  name: string
  src?: string
  size?: AvatarSize
  status?: AvatarStatus
  className?: string
}

const SIZE_CLS: Record<AvatarSize, { container: string; text: string; status: string }> = {
  xs: { container: 'size-6',  text: '9px',  status: 'size-1.5 border' },
  sm: { container: 'size-8',  text: '11px', status: 'size-2 border'   },
  md: { container: 'size-10', text: '14px', status: 'size-2.5 border' },
  lg: { container: 'size-12', text: '16px', status: 'size-3 border-2' },
  xl: { container: 'size-16', text: '20px', status: 'size-3.5 border-2'},
}

const STATUS_COLOR: Record<AvatarStatus, string> = {
  online:  'bg-emerald-400',
  offline: 'bg-[var(--gray-300)]',
  busy:    'bg-[var(--red-500)]',
  away:    'bg-[var(--amber-500)]',
}

function getInitials(name: string): string {
  return name.trim().split(/\\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

// Genera un color de fondo consistente a partir del nombre
function getAvatarBg(name: string): string {
  const COLORS = [
    'var(--purple-700)', 'var(--cyan-500)', 'oklch(0.55 0.15 145)',
    'oklch(0.55 0.15 30)', 'oklch(0.50 0.13 250)', 'oklch(0.52 0.14 320)',
  ]
  let hash = 0
  for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) & 0xffffffff
  return COLORS[Math.abs(hash) % COLORS.length]
}

export function Avatar({ name, src, size = 'md', status, className = '' }: AvatarProps) {
  const { container, text, status: statusCls } = SIZE_CLS[size]

  return (
    <div className={['relative inline-flex shrink-0', className].join(' ')}>
      <div
        className={[
          container,
          'rounded-full overflow-hidden flex items-center justify-center select-none',
          'font-[var(--font-body)] font-[var(--weight-bold)] text-white',
        ].join(' ')}
        style={!src ? { background: getAvatarBg(name), fontSize: text } : undefined}
        aria-label={name}
      >
        {src ? (
          <img src={src} alt={name} className="w-full h-full object-cover" draggable={false} />
        ) : (
          getInitials(name)
        )}
      </div>

      {status && (
        <span
          className={[
            'absolute bottom-0 right-0 rounded-full border-white',
            statusCls,
            STATUS_COLOR[status],
          ].join(' ')}
          aria-label={status}
          role="img"
        />
      )}
    </div>
  )
}

export default Avatar
`})})})]})]})}function si(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`divider`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`Divider`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Separador horizontal y vertical. Con label centrado opcional.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-col gap-5 max-w-[400px]`,children:[(0,y.jsx)(pn,{}),(0,y.jsx)(pn,{label:`o continúa con`}),(0,y.jsx)(pn,{label:`Sección 2`}),(0,y.jsxs)(`div`,{className:`flex gap-4 items-stretch h-12`,children:[(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[11px] text-[var(--gray-500)] self-center`,children:`Izq`}),(0,y.jsx)(pn,{orientation:`vertical`}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[11px] text-[var(--gray-500)] self-center`,children:`Centro`}),(0,y.jsx)(pn,{orientation:`vertical`}),(0,y.jsx)(`span`,{className:`font-[var(--font-body)] text-[11px] text-[var(--gray-500)] self-center`,children:`Der`})]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import type { ReactNode } from 'react'

export type DividerOrientation = 'horizontal' | 'vertical'

export interface DividerProps {
  orientation?: DividerOrientation
  label?: ReactNode
  className?: string
}

export function Divider({ orientation = 'horizontal', label, className = '' }: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={['self-stretch w-px bg-[var(--color-border-ghost)] shrink-0', className].join(' ')}
      />
    )
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={['flex items-center gap-3', className].join(' ')}
      >
        <div className="flex-1 h-px bg-[var(--color-border-ghost)]" />
        <span className="shrink-0 font-[var(--font-body)] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)]"
          style={{ fontSize: 'var(--type-label-size)' }}>
          {label}
        </span>
        <div className="flex-1 h-px bg-[var(--color-border-ghost)]" />
      </div>
    )
  }

  return (
    <hr
      role="separator"
      className={['border-0 border-t border-[var(--color-border-ghost)] w-full', className].join(' ')}
    />
  )
}

export default Divider
`})})})]})]})}function ci(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`image`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`Image`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Wrapper con aspect-ratio (16/9, 4/3, PHI, 1/1, 3/2), lazy load, shimmer y fallback.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start`,children:[(0,y.jsxs)(`div`,{className:`w-[200px]`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-2`,children:`16/9`}),(0,y.jsx)(xn,{src:`https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80`,alt:`Auto`,ratio:`16/9`})]}),(0,y.jsxs)(`div`,{className:`w-[180px]`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-2`,children:`PHI (1.618)`}),(0,y.jsx)(xn,{src:`https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80`,alt:`Camioneta`,ratio:`phi`})]}),(0,y.jsxs)(`div`,{className:`w-[160px]`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-2`,children:`1/1`}),(0,y.jsx)(xn,{src:`https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80`,alt:`Detalle`,ratio:`1/1`})]}),(0,y.jsxs)(`div`,{className:`w-[160px]`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-2`,children:`Error fallback`}),(0,y.jsx)(xn,{src:`https://url-invalida.xyz/foto.jpg`,alt:`Error`,ratio:`16/9`})]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import { useState } from 'react'

export type ImageRatio = '16/9' | '4/3' | 'phi' | '1/1' | '3/2'

export interface ImageProps {
  src: string
  alt: string
  ratio?: ImageRatio
  fit?: 'cover' | 'contain'
  lazy?: boolean
  className?: string
}

// PHI = 1.618 → padding-top ≈ 61.8%
const RATIO_PADDING: Record<ImageRatio, string> = {
  '16/9': 'pb-[56.25%]',
  '4/3':  'pb-[75%]',
  'phi':  'pb-[61.8%]',
  '1/1':  'pb-[100%]',
  '3/2':  'pb-[66.667%]',
}

function PlaceholderIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[var(--gray-300)]">
      <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="14" cy="17" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 26l8-7 6 6 5-5 13 9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

export function Image({
  src,
  alt,
  ratio = '16/9',
  fit = 'cover',
  lazy = true,
  className = '',
}: ImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError]   = useState(false)

  return (
    <div className={['relative w-full overflow-hidden rounded-[var(--radius-btn)] bg-[var(--gray-100)]', RATIO_PADDING[ratio], className].join(' ')}>
      {!error ? (
        <>
          {/* Skeleton shimmer mientras carga */}
          {!loaded && (
            <div className="absolute inset-0 bg-[var(--gray-200)] animate-pulse" aria-hidden="true" />
          )}
          <img
            src={src}
            alt={alt}
            loading={lazy ? 'lazy' : 'eager'}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            className={[
              'absolute inset-0 w-full h-full transition-opacity duration-[var(--duration-standard)]',
              fit === 'cover' ? 'object-cover' : 'object-contain',
              loaded ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
            draggable={false}
          />
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--gray-100)]">
          <PlaceholderIcon />
        </div>
      )}
    </div>
  )
}

export default Image
`})})})]})]})}function li(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(35e3),[i,a]=(0,_.useState)([2e4,8e4]),o=e=>`S/ ${e.toLocaleString(`es-PE`)}`;return(0,y.jsxs)(`section`,{id:`slider`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`Slider / RangeSlider`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Input de rango simple y doble. Usado en FilterBar para precio mín/máx.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-col gap-6 max-w-[400px]`,children:[(0,y.jsx)(Cn,{label:`Precio máximo`,min:0,max:15e4,step:1e3,value:n,onChange:r,formatValue:o}),(0,y.jsx)(wn,{label:`Rango de precio`,min:0,max:15e4,step:1e3,value:i,onChange:a,formatValue:o}),(0,y.jsx)(Cn,{label:`Deshabilitado`,min:0,max:100,value:40,onChange:()=>{},disabled:!0})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import { useId } from 'react'

export interface SliderProps {
  label?: string
  min: number
  max: number
  step?: number
  value: number
  onChange: (value: number) => void
  formatValue?: (value: number) => string
  disabled?: boolean
  className?: string
}

export interface RangeSliderProps {
  label?: string
  min: number
  max: number
  step?: number
  value: [number, number]
  onChange: (value: [number, number]) => void
  formatValue?: (value: number) => string
  disabled?: boolean
  className?: string
}

const defaultFormat = (v: number) => v.toLocaleString('es-PE')

export function Slider({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  formatValue = defaultFormat,
  disabled = false,
  className = '',
}: SliderProps) {
  const id = useId()
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div className={['flex flex-col gap-2', className].join(' ')}>
      {label && (
        <div className="flex items-center justify-between">
          <label htmlFor={id}
            className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)] tracking-[var(--tracking-wider)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            {label}
          </label>
          <span className="font-[var(--font-mono)] font-[var(--weight-medium)] tabular-nums text-[var(--color-text-body)]"
            style={{ fontSize: 'var(--type-body-sm-size)' }}>
            {formatValue(value)}
          </span>
        </div>
      )}

      <div className="relative flex items-center h-5">
        {/* Track */}
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-[var(--gray-200)]" />
        {/* Fill */}
        <div className="absolute h-1.5 rounded-full bg-[var(--color-action-primary)] left-0"
          style={{ width: \`\${pct}%\` }} />
        {/* Input */}
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={e => onChange(Number(e.target.value))}
          className={[
            'relative w-full h-5 appearance-none bg-transparent cursor-pointer',
            'disabled:opacity-40 disabled:cursor-not-allowed',
            // Thumb styles via Tailwind arbitrary
            '[&::-webkit-slider-thumb]:appearance-none',
            '[&::-webkit-slider-thumb]:size-4',
            '[&::-webkit-slider-thumb]:rounded-full',
            '[&::-webkit-slider-thumb]:bg-[var(--color-action-primary)]',
            '[&::-webkit-slider-thumb]:border-2',
            '[&::-webkit-slider-thumb]:border-white',
            '[&::-webkit-slider-thumb]:shadow-[var(--shadow-sm)]',
            '[&::-webkit-slider-thumb]:transition-transform',
            '[&::-webkit-slider-thumb]:hover:scale-110',
            '[&::-moz-range-thumb]:size-4',
            '[&::-moz-range-thumb]:rounded-full',
            '[&::-moz-range-thumb]:bg-[var(--color-action-primary)]',
            '[&::-moz-range-thumb]:border-2',
            '[&::-moz-range-thumb]:border-white',
            '[&::-moz-range-thumb]:border-solid',
          ].join(' ')}
        />
      </div>

      {/* Min/Max labels */}
      <div className="flex justify-between">
        <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>{formatValue(min)}</span>
        <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>{formatValue(max)}</span>
      </div>
    </div>
  )
}

export function RangeSlider({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  formatValue = defaultFormat,
  disabled = false,
  className = '',
}: RangeSliderProps) {
  const idLow  = useId()
  const idHigh = useId()
  const [low, high] = value
  const pctLow  = ((low  - min) / (max - min)) * 100
  const pctHigh = ((high - min) / (max - min)) * 100

  const THUMB = [
    '[&::-webkit-slider-thumb]:appearance-none',
    '[&::-webkit-slider-thumb]:size-4',
    '[&::-webkit-slider-thumb]:rounded-full',
    '[&::-webkit-slider-thumb]:bg-[var(--color-action-primary)]',
    '[&::-webkit-slider-thumb]:border-2',
    '[&::-webkit-slider-thumb]:border-white',
    '[&::-webkit-slider-thumb]:shadow-[var(--shadow-sm)]',
    '[&::-webkit-slider-thumb]:hover:scale-110',
    '[&::-webkit-slider-thumb]:transition-transform',
    '[&::-moz-range-thumb]:size-4',
    '[&::-moz-range-thumb]:rounded-full',
    '[&::-moz-range-thumb]:bg-[var(--color-action-primary)]',
    '[&::-moz-range-thumb]:border-2',
    '[&::-moz-range-thumb]:border-white',
    '[&::-moz-range-thumb]:border-solid',
  ].join(' ')

  return (
    <div className={['flex flex-col gap-2', className].join(' ')}>
      {label && (
        <div className="flex items-center justify-between">
          <span className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)] tracking-[var(--tracking-wider)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            {label}
          </span>
          <span className="font-[var(--font-mono)] font-[var(--weight-medium)] tabular-nums text-[var(--color-text-body)]"
            style={{ fontSize: 'var(--type-body-sm-size)' }}>
            {formatValue(low)} — {formatValue(high)}
          </span>
        </div>
      )}

      <div className="relative flex items-center h-5">
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-[var(--gray-200)]" />
        <div className="absolute h-1.5 rounded-full bg-[var(--color-action-primary)]"
          style={{ left: \`\${pctLow}%\`, right: \`\${100 - pctHigh}%\` }} />

        {/* Low thumb */}
        <input id={idLow} type="range" min={min} max={high - step} step={step} value={low} disabled={disabled}
          onChange={e => onChange([Math.min(Number(e.target.value), high - step), high])}
          aria-label={\`\${label ?? ''} mínimo\`}
          className={['absolute w-full h-5 appearance-none bg-transparent cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed', THUMB].join(' ')}
        />
        {/* High thumb */}
        <input id={idHigh} type="range" min={low + step} max={max} step={step} value={high} disabled={disabled}
          onChange={e => onChange([low, Math.max(Number(e.target.value), low + step)])}
          aria-label={\`\${label ?? ''} máximo\`}
          className={['absolute w-full h-5 appearance-none bg-transparent cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed', THUMB].join(' ')}
        />
      </div>

      <div className="flex justify-between">
        <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>{formatValue(min)}</span>
        <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>{formatValue(max)}</span>
      </div>
    </div>
  )
}

export default Slider
`})})})]})]})}function ui(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`user-wallet`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`UserWallet`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Saldo disponible, monto reservado en pujas activas, estado de cuenta, acciones.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start`,children:[(0,y.jsx)(Dn,{balance:12500,reserved:3e3,userName:`Carlos`,status:`active`,onDeposit:()=>{},onWithdraw:()=>{},className:`w-[280px]`}),(0,y.jsx)(Dn,{balance:500,status:`pending`,className:`w-[240px]`}),(0,y.jsx)(Dn,{balance:8e3,reserved:8e3,status:`suspended`,className:`w-[240px]`}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]`,children:`Compact`}),(0,y.jsx)(Dn,{balance:12500,reserved:3e3,compact:!0})]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`export type WalletStatus = 'active' | 'pending' | 'suspended'

export interface UserWalletProps {
  balance: number
  currency?: string
  status?: WalletStatus
  userName?: string
  /** Monto reservado por pujas activas */
  reserved?: number
  onDeposit?: () => void
  onWithdraw?: () => void
  compact?: boolean
  className?: string
}

const STATUS_CONFIG: Record<WalletStatus, { label: string; color: string; bg: string }> = {
  active:    { label: 'Activa',    color: 'oklch(0.4 0.15 145)',                   bg: 'oklch(0.637 0.207 145 / 0.08)' },
  pending:   { label: 'Pendiente', color: 'var(--amber-500)',                      bg: 'oklch(0.784 0.172 68.000 / 0.10)' },
  suspended: { label: 'Suspendida',color: 'var(--red-500)',                        bg: 'oklch(0.637 0.207 25.500 / 0.08)' },
}

function WalletIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M2 7h14" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="13.5" cy="11" r="1.5" fill="currentColor"/>
    </svg>
  )
}

export function UserWallet({
  balance,
  currency = 'S/',
  status = 'active',
  userName,
  reserved,
  onDeposit,
  onWithdraw,
  compact = false,
  className = '',
}: UserWalletProps) {
  const { label, color, bg } = STATUS_CONFIG[status]
  const available = reserved !== undefined ? balance - reserved : balance

  if (compact) {
    return (
      <div className={['inline-flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-btn)] bg-[var(--color-surface-input)]', className].join(' ')}>
        <span style={{ color }} className="shrink-0"><WalletIcon /></span>
        <div className="flex flex-col leading-none">
          <span className="font-[var(--font-body)] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)]"
            style={{ fontSize: '9px' }}>Saldo</span>
          <span className="font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums"
            style={{ fontSize: 'var(--type-body-sm-size)', color }}>
            {currency} {available.toLocaleString('es-PE')}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={['bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] overflow-hidden', className].join(' ')}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-ghost)]">
        <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
          <WalletIcon />
          <span className="font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]"
            style={{ fontSize: 'var(--type-body-sm-size)' }}>
            {userName ? \`Billetera de \${userName}\` : 'Mi billetera'}
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-full font-[var(--font-body)] font-[var(--weight-semibold)]"
          style={{ fontSize: '10px', color, background: bg }}>
          {label}
        </span>
      </div>

      {/* Balance */}
      <div className="px-4 py-4">
        <p className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)] tracking-[var(--tracking-wider)] mb-1"
          style={{ fontSize: 'var(--type-label-size)' }}>
          Saldo disponible
        </p>
        <p className="font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums leading-none"
          style={{ fontSize: 'var(--type-body-lg-size)', color: 'var(--color-text-primary)' }}>
          <span className="text-[var(--color-text-muted)] font-[var(--weight-semibold)] mr-1"
            style={{ fontSize: 'var(--type-body-sm-size)' }}>{currency}</span>
          {available.toLocaleString('es-PE')}
        </p>

        {reserved !== undefined && reserved > 0 && (
          <div className="flex items-center gap-1.5 mt-2">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="text-[var(--amber-500)] shrink-0">
              <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M5.5 3.5v2.5M5.5 7.5v.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span className="font-[var(--font-body)] text-[var(--color-text-muted)]"
              style={{ fontSize: 'var(--type-label-size)' }}>
              {currency} {reserved.toLocaleString('es-PE')} reservado en pujas activas
            </span>
          </div>
        )}
      </div>

      {/* Actions */}
      {(onDeposit || onWithdraw) && (
        <div className="flex gap-2 px-4 pb-4">
          {onDeposit && (
            <button type="button" onClick={onDeposit}
              className="flex-1 h-9 rounded-[var(--radius-btn)] bg-[var(--color-action-primary)] text-white font-[var(--font-body)] font-[var(--weight-semibold)] border-0 cursor-pointer hover:bg-[var(--color-action-primary-hover)] transition-colors duration-[var(--duration-micro)]"
              style={{ fontSize: 'var(--type-body-sm-size)' }}>
              Depositar
            </button>
          )}
          {onWithdraw && (
            <button type="button" onClick={onWithdraw}
              className="flex-1 h-9 rounded-[var(--radius-btn)] bg-transparent text-[var(--color-text-body)] font-[var(--font-body)] font-[var(--weight-semibold)] border border-[var(--color-border-ghost)] cursor-pointer hover:bg-[var(--gray-50)] transition-colors duration-[var(--duration-micro)]"
              style={{ fontSize: 'var(--type-body-sm-size)' }}>
              Retirar
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default UserWallet
`})})})]})]})}function di(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`hero-section`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`HeroSection`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Sección hero con gradiente brand, eyebrow, título, CTAs y stats. Fondo de imagen opcional.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsx)(kn,{eyebrow:`The Vault — Subastas Exclusivas`,title:(0,y.jsxs)(y.Fragment,{children:[`Vehículos premium.`,(0,y.jsx)(`br`,{}),`Subastas en tiempo real.`]}),subtitle:`Participa en subastas curadas de los mejores vehículos del mercado peruano. Ofertas vinculantes, pagos seguros.`,primaryAction:{label:`Ver subastas activas`,onClick:()=>{}},secondaryAction:{label:`Cómo funciona`,onClick:()=>{}},stat1:{value:`312+`,label:`Subastas realizadas`},stat2:{value:`S/ 48M`,label:`En transacciones`},stat3:{value:`2,400+`,label:`Compradores activos`}}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import type { ReactNode } from 'react'

export interface HeroSectionProps {
  title: ReactNode
  subtitle?: string
  eyebrow?: string
  primaryAction?: { label: string; onClick: () => void }
  secondaryAction?: { label: string; onClick: () => void }
  backgroundImage?: string
  stat1?: { value: string; label: string }
  stat2?: { value: string; label: string }
  stat3?: { value: string; label: string }
  className?: string
}

function VaultIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="16" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="10" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 7V5M10 16v-2M4 10.5H2M18 10.5h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function HeroSection({
  title,
  subtitle,
  eyebrow,
  primaryAction,
  secondaryAction,
  backgroundImage,
  stat1,
  stat2,
  stat3,
  className = '',
}: HeroSectionProps) {
  const stats = [stat1, stat2, stat3].filter(Boolean)

  return (
    <section
      className={[
        'relative overflow-hidden',
        'flex flex-col justify-center',
        'min-h-[400px] px-6 py-14',
        className,
      ].join(' ')}
      style={{ background: 'var(--color-surface-hero-gradient)' }}
    >
      {/* Background image overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: \`url(\${backgroundImage})\` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0" style={{ background: 'var(--purple-900)/70' }} />
        </div>
      )}

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\\")" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[var(--layout-max-width)] mx-auto w-full">
        {/* Eyebrow */}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[var(--cyan-500)]"><VaultIcon /></span>
            <span className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase tracking-[var(--tracking-wider)] text-[var(--cyan-500)]"
              style={{ fontSize: 'var(--type-label-size)' }}>
              {eyebrow}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-[var(--font-body)] font-[var(--weight-extrabold)] text-white leading-tight mb-4"
          style={{ fontSize: 'var(--type-display-lg-size, 38px)', maxWidth: '600px' }}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-[var(--font-body)] text-white/70 mb-8 max-w-[480px]"
            style={{ fontSize: 'var(--type-body-size)' }}>
            {subtitle}
          </p>
        )}

        {/* CTAs */}
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-wrap gap-3 mb-10">
            {primaryAction && (
              <button type="button" onClick={primaryAction.onClick}
                className="h-12 px-6 rounded-[var(--radius-btn)] font-[var(--font-body)] font-[var(--weight-bold)] border-0 cursor-pointer transition-all duration-[var(--duration-micro)] hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: 'var(--color-action-cta)', color: 'var(--purple-900)', fontSize: 'var(--type-body-sm-size)' }}>
                {primaryAction.label}
              </button>
            )}
            {secondaryAction && (
              <button type="button" onClick={secondaryAction.onClick}
                className="h-12 px-6 rounded-[var(--radius-btn)] font-[var(--font-body)] font-[var(--weight-semibold)] bg-white/10 text-white border border-white/20 cursor-pointer hover:bg-white/20 transition-colors duration-[var(--duration-micro)]"
                style={{ fontSize: 'var(--type-body-sm-size)' }}>
                {secondaryAction.label}
              </button>
            )}
          </div>
        )}

        {/* Stats */}
        {stats.length > 0 && (
          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
            {stats.map((stat, i) => stat && (
              <div key={i}>
                <p className="font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums text-white leading-none mb-0.5"
                  style={{ fontSize: 'var(--type-body-lg-size, 20px)' }}>
                  {stat.value}
                </p>
                <p className="font-[var(--font-body)] text-white/50 uppercase tracking-[var(--tracking-wider)]"
                  style={{ fontSize: 'var(--type-label-size)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
`})})})]})]})}function fi(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(``),i=[{id:`edit`,label:`Editar`,icon:(0,y.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 13 13`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M9 2l2 2L4 11H2V9L9 2z`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinejoin:`round`})})},{id:`share`,label:`Compartir`,icon:(0,y.jsxs)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 13 13`,fill:`none`,children:[(0,y.jsx)(`circle`,{cx:`10`,cy:`2.5`,r:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`circle`,{cx:`10`,cy:`10.5`,r:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`circle`,{cx:`3`,cy:`6.5`,r:`1.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M8.5 3.5l-4 2m4 3-4-2`,stroke:`currentColor`,strokeWidth:`1.3`})]}),shortcut:`⌘S`,dividerAfter:!0},{id:`archive`,label:`Archivar`,disabled:!0},{id:`delete`,label:`Eliminar`,danger:!0,icon:(0,y.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 13 13`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M2 3.5h9M5 3.5V2h3v1.5M10.5 3.5L10 11H3L2.5 3.5`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})})}],a=e=>(0,y.jsxs)(`button`,{type:`button`,className:`inline-flex items-center gap-1.5 h-9 px-3 rounded-[var(--radius-btn)] bg-[var(--color-surface-input)] text-[var(--color-text-body)] font-[var(--font-body)] border-0 cursor-pointer hover:bg-[var(--gray-200)] transition-colors`,style:{fontSize:`var(--type-body-sm-size)`},children:[e,(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M2.5 4.5l3.5 3.5 3.5-3.5`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`})})]});return(0,y.jsxs)(`section`,{id:`dropdown`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`Dropdown`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Menú contextual accesible con teclado, ícono, shortcut, peligro, divisor y alineación.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start min-h-[160px]`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-1`,children:`Align left`}),(0,y.jsx)(An,{trigger:a(`Acciones`),items:i,onSelect:r,align:`left`})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-1`,children:`Align right`}),(0,y.jsx)(An,{trigger:a(`Opciones`),items:i,onSelect:r,align:`right`})]}),n&&(0,y.jsxs)(`p`,{className:`self-end font-[var(--font-body)] text-[var(--color-text-muted)] text-[11px]`,children:[`Seleccionado: `,(0,y.jsx)(`strong`,{children:n})]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import { useState, useRef, useEffect, useId, type ReactNode } from 'react'

export interface DropdownItem {
  id: string
  label: string
  icon?: ReactNode
  shortcut?: string
  disabled?: boolean
  danger?: boolean
  dividerAfter?: boolean
}

export interface DropdownProps {
  trigger: ReactNode
  items: DropdownItem[]
  onSelect?: (id: string) => void
  align?: 'left' | 'right'
  className?: string
}

export function Dropdown({ trigger, items, onSelect, align = 'left', className = '' }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const [activeIdx, setActiveIdx] = useState(-1)
  const menuId = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])

  const enabledItems = items.filter(i => !i.disabled)

  useEffect(() => {
    if (!open) { setActiveIdx(-1); return }
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault(); setOpen(true); setActiveIdx(0)
      }
      return
    }
    if (e.key === 'Escape') { setOpen(false); return }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIdx(i => Math.min(i + 1, enabledItems.length - 1))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx(i => Math.max(i - 1, 0))
    }
    if (e.key === 'Enter' && activeIdx >= 0) {
      e.preventDefault()
      const item = enabledItems[activeIdx]
      if (item) { onSelect?.(item.id); setOpen(false) }
    }
  }

  useEffect(() => {
    if (open && activeIdx >= 0) itemRefs.current[activeIdx]?.focus()
  }, [open, activeIdx])

  return (
    <div ref={containerRef} className={['relative inline-block', className].join(' ')} onKeyDown={handleKeyDown}>
      {/* Trigger */}
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(o => !o)}
        className="outline-none cursor-pointer"
      >
        {trigger}
      </div>

      {/* Menu */}
      {open && (
        <div
          id={menuId}
          role="menu"
          aria-orientation="vertical"
          className={[
            'absolute top-full mt-1 z-[var(--z-dropdown)]',
            'min-w-[180px] py-1',
            'bg-[var(--color-surface-card)]',
            'rounded-[var(--radius-card)]',
            'shadow-[var(--shadow-lg)]',
            'border border-[var(--color-border-ghost)]',
            align === 'right' ? 'right-0' : 'left-0',
          ].join(' ')}
        >
          {items.map((item, i) => {
            const enabledIdx = enabledItems.indexOf(item)
            return (
              <div key={item.id}>
                <button
                  ref={el => { if (!item.disabled) itemRefs.current[enabledIdx] = el }}
                  type="button"
                  role="menuitem"
                  disabled={item.disabled}
                  onClick={() => { if (!item.disabled) { onSelect?.(item.id); setOpen(false) } }}
                  className={[
                    'w-full flex items-center gap-2.5 px-3 py-2 text-left',
                    'font-[var(--font-body)] border-0 bg-transparent cursor-pointer outline-none',
                    'transition-colors duration-[var(--duration-micro)]',
                    item.danger
                      ? 'text-[var(--red-500)] hover:bg-[oklch(0.637_0.207_25.500_/_0.06)] focus:bg-[oklch(0.637_0.207_25.500_/_0.06)]'
                      : 'text-[var(--color-text-body)] hover:bg-[var(--gray-50)] focus:bg-[var(--gray-50)]',
                    item.disabled ? 'opacity-40 cursor-not-allowed' : '',
                  ].filter(Boolean).join(' ')}
                  style={{ fontSize: 'var(--type-body-sm-size)' }}
                >
                  {item.icon && (
                    <span className="shrink-0 text-[var(--color-text-muted)]">{item.icon}</span>
                  )}
                  <span className="flex-1">{item.label}</span>
                  {item.shortcut && (
                    <span className="shrink-0 font-[var(--font-mono)] text-[var(--color-text-muted)]"
                      style={{ fontSize: '10px' }}>
                      {item.shortcut}
                    </span>
                  )}
                </button>
                {item.dividerAfter && i < items.length - 1 && (
                  <div className="my-1 border-t border-[var(--color-border-ghost)]" role="separator" />
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Dropdown
`})})})]})]})}function pi(){let[e,t]=(0,_.useState)(!1),n=e=>(0,y.jsx)(`span`,{className:`inline-flex items-center h-8 px-3 rounded-[var(--radius-btn)] bg-[var(--color-surface-input)] font-[var(--font-body)] text-[var(--color-text-body)] cursor-default select-none`,style:{fontSize:`var(--type-body-sm-size)`},children:e});return(0,y.jsxs)(`section`,{id:`tooltip`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`Tooltip`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Hint flotante con 4 posiciones, delay configurable, accesible con aria-describedby.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-10 bg-[var(--gray-50)] flex flex-wrap gap-6 justify-center items-center`,children:[(0,y.jsx)(Mn,{content:`Aparece arriba`,placement:`top`,children:n(`Top`)}),(0,y.jsx)(Mn,{content:`Aparece abajo`,placement:`bottom`,children:n(`Bottom`)}),(0,y.jsx)(Mn,{content:`Aparece a la izquierda`,placement:`left`,children:n(`Left`)}),(0,y.jsx)(Mn,{content:`Aparece a la derecha`,placement:`right`,children:n(`Right`)}),(0,y.jsx)(Mn,{content:`Sin delay`,delay:0,placement:`top`,children:n(`Sin delay`)})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import { useState, useRef, useEffect, useId, type ReactNode } from 'react'

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  content: ReactNode
  placement?: TooltipPlacement
  delay?: number
  children: ReactNode
  className?: string
}

const PLACEMENT_CLASSES: Record<TooltipPlacement, { tip: string; arrow: string }> = {
  top:    { tip: 'bottom-full left-1/2 -translate-x-1/2 mb-2',     arrow: 'top-full left-1/2 -translate-x-1/2 border-t-[var(--purple-900)] border-x-transparent border-b-0' },
  bottom: { tip: 'top-full left-1/2 -translate-x-1/2 mt-2',        arrow: 'bottom-full left-1/2 -translate-x-1/2 border-b-[var(--purple-900)] border-x-transparent border-t-0' },
  left:   { tip: 'right-full top-1/2 -translate-y-1/2 mr-2',       arrow: 'left-full top-1/2 -translate-y-1/2 border-l-[var(--purple-900)] border-y-transparent border-r-0' },
  right:  { tip: 'left-full top-1/2 -translate-y-1/2 ml-2',        arrow: 'right-full top-1/2 -translate-y-1/2 border-r-[var(--purple-900)] border-y-transparent border-l-0' },
}

export function Tooltip({
  content,
  placement = 'top',
  delay = 300,
  children,
  className = '',
}: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const [rendered, setRendered] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const tooltipId = useId()
  const { tip, arrow } = PLACEMENT_CLASSES[placement]

  const show = () => {
    timerRef.current = setTimeout(() => { setRendered(true); setTimeout(() => setVisible(true), 10) }, delay)
  }
  const hide = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setVisible(false)
    setTimeout(() => setRendered(false), 150)
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  return (
    <div
      className={['relative inline-flex', className].join(' ')}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <div aria-describedby={visible ? tooltipId : undefined}>
        {children}
      </div>

      {rendered && (
        <div
          id={tooltipId}
          role="tooltip"
          className={[
            'absolute z-[var(--z-tooltip)] pointer-events-none',
            'px-2.5 py-1.5 max-w-[220px] w-max',
            'bg-[var(--purple-900)] text-white rounded-[var(--radius-btn)]',
            'font-[var(--font-body)] leading-snug',
            'shadow-[var(--shadow-lg)]',
            'transition-[opacity,transform] duration-150',
            tip,
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          ].join(' ')}
          style={{ fontSize: '11px' }}
        >
          {content}
          {/* Arrow */}
          <span
            className={['absolute border-4', arrow].join(' ')}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  )
}

export default Tooltip
`})})})]})]})}function mi(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`breadcrumb`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`Breadcrumb`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Navegación jerárquica con ícono home, soporte href y onClick, aria-current en último nodo.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-col gap-4`,children:[(0,y.jsx)(Fn,{items:[{label:`Inicio`,href:`#`},{label:`Subastas`,href:`#`},{label:`Lote A-0042`}]}),(0,y.jsx)(Fn,{items:[{label:`Inicio`,href:`#`},{label:`Mis ofertas`,href:`#`},{label:`Historial`,href:`#`},{label:`Toyota Hilux 2022`}]}),(0,y.jsx)(Fn,{items:[{label:`Inicio`,href:`#`},{label:`Página actual`}]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`export interface BreadcrumbItem {
  label: string
  href?: string
  onClick?: () => void
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M2 5.5L6.5 1.5 11 5.5V11a1 1 0 01-1 1H3a1 1 0 01-1-1V5.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M5 12V8h3v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Ruta de navegación" className={className}>
      <ol className="flex items-center flex-wrap gap-0.5 list-none m-0 p-0">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          const isFirst = i === 0

          return (
            <li key={i} className="flex items-center gap-0.5">
              {i > 0 && (
                <span className="text-[var(--color-text-muted)] mx-0.5 select-none">
                  <ChevronIcon />
                </span>
              )}

              {isLast ? (
                <span
                  aria-current="page"
                  className="font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]"
                  style={{ fontSize: 'var(--type-body-sm-size)' }}
                >
                  {item.label}
                </span>
              ) : item.href ? (
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 font-[var(--font-body)] text-[var(--color-text-muted)] hover:text-[var(--color-action-primary)] no-underline transition-colors duration-[var(--duration-micro)]"
                  style={{ fontSize: 'var(--type-body-sm-size)' }}
                >
                  {isFirst && <HomeIcon />}
                  {item.label}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={item.onClick}
                  className="inline-flex items-center gap-1 font-[var(--font-body)] text-[var(--color-text-muted)] hover:text-[var(--color-action-primary)] bg-transparent border-0 cursor-pointer p-0 transition-colors duration-[var(--duration-micro)]"
                  style={{ fontSize: 'var(--type-body-sm-size)' }}
                >
                  {isFirst && <HomeIcon />}
                  {item.label}
                </button>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
`})})})]})]})}function hi(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(1),[i,a]=(0,_.useState)(5),[o,s]=(0,_.useState)(12);return(0,y.jsxs)(`section`,{id:`pagination`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`Pagination`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Paginación con ellipsis inteligente, página activa resaltada, aria-current.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-col gap-5`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-3`,children:`5 páginas`}),(0,y.jsx)(Rn,{currentPage:n,totalPages:5,onChange:r})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-3`,children:[`20 páginas — página `,i]}),(0,y.jsx)(Rn,{currentPage:i,totalPages:20,onChange:a})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`p`,{className:`text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-3`,children:[`50 páginas — página `,o]}),(0,y.jsx)(Rn,{currentPage:o,totalPages:50,onChange:s})]})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`export interface PaginationProps {
  currentPage: number
  totalPages: number
  onChange: (page: number) => void
  /** Max page buttons visible (excluding prev/next) — default 5 */
  maxVisible?: number
  className?: string
}

function getPages(current: number, total: number, maxVisible: number): (number | '...')[] {
  if (total <= maxVisible) return Array.from({ length: total }, (_, i) => i + 1)

  const half = Math.floor(maxVisible / 2)
  let start = Math.max(2, current - half)
  let end   = Math.min(total - 1, current + half)

  if (current - half <= 2) end = Math.min(total - 1, maxVisible - 1)
  if (current + half >= total - 1) start = Math.max(2, total - maxVisible + 2)

  const pages: (number | '...')[] = [1]
  if (start > 2) pages.push('...')
  for (let i = start; i <= end; i++) pages.push(i)
  if (end < total - 1) pages.push('...')
  pages.push(total)
  return pages
}

const BTN_BASE = [
  'inline-flex items-center justify-center min-w-[36px] h-9 px-2',
  'rounded-[var(--radius-btn)]',
  'font-[var(--font-body)] font-[var(--weight-semibold)]',
  'border-0 cursor-pointer outline-none',
  'transition-[background,color,box-shadow] duration-[var(--duration-micro)]',
  'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-action-primary)]',
].join(' ')

export function Pagination({
  currentPage,
  totalPages,
  onChange,
  maxVisible = 5,
  className = '',
}: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = getPages(currentPage, totalPages, maxVisible)

  return (
    <nav role="navigation" aria-label="Paginación" className={['flex items-center gap-1', className].join(' ')}>
      {/* Prev */}
      <button
        type="button"
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
        className={[
          BTN_BASE,
          currentPage === 1
            ? 'opacity-40 cursor-not-allowed text-[var(--color-text-muted)] bg-transparent'
            : 'text-[var(--color-text-muted)] bg-transparent hover:bg-[var(--gray-100)] hover:text-[var(--color-text-body)]',
        ].join(' ')}
        style={{ fontSize: 'var(--type-body-sm-size)' }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Pages */}
      {pages.map((page, i) =>
        page === '...' ? (
          <span key={\`ellipsis-\${i}\`}
            className="inline-flex items-center justify-center min-w-[36px] h-9 text-[var(--color-text-muted)] font-[var(--font-body)] select-none"
            style={{ fontSize: 'var(--type-body-sm-size)' }}
            aria-hidden="true">
            …
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onChange(page)}
            aria-label={\`Página \${page}\`}
            aria-current={page === currentPage ? 'page' : undefined}
            className={[
              BTN_BASE,
              page === currentPage
                ? 'bg-[var(--color-action-primary)] text-white shadow-[var(--shadow-sm)]'
                : 'bg-transparent text-[var(--color-text-muted)] hover:bg-[var(--gray-100)] hover:text-[var(--color-text-body)]',
            ].join(' ')}
            style={{ fontSize: 'var(--type-body-sm-size)' }}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        type="button"
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
        className={[
          BTN_BASE,
          currentPage === totalPages
            ? 'opacity-40 cursor-not-allowed text-[var(--color-text-muted)] bg-transparent'
            : 'text-[var(--color-text-muted)] bg-transparent hover:bg-[var(--gray-100)] hover:text-[var(--color-text-body)]',
        ].join(' ')}
        style={{ fontSize: 'var(--type-body-sm-size)' }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M5 11l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </nav>
  )
}

export default Pagination
`})})})]})]})}function gi(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)({});return(0,y.jsxs)(`section`,{id:`filter-bar`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`FilterBar`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Barra de filtros para el catálogo: búsqueda, tipo, marca, precio, estado.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsx)(`div`,{className:`p-4 bg-[var(--gray-50)]`,children:(0,y.jsx)(Kn,{value:n,onChange:r,onReset:()=>r({})})}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import type { BadgeType } from '../Badge/Badge'

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
`})})})]})]})}function _i(){let[e,t]=(0,_.useState)(!1),n=Date.now()+2700*1e3;return(0,y.jsxs)(`section`,{id:`auction-status-banner`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`AuctionStatusBanner`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Banda de estado con countdown en tiempo real. 6 variantes de estado.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 p-4 bg-[var(--gray-50)]`,children:[(0,y.jsx)(Xn,{status:`live`,lotId:`A-0042`,lotTitle:`Toyota Hilux 2022 · 4x4 Diesel`,endsAt:n}),(0,y.jsx)(Xn,{status:`upcoming`,lotId:`A-0043`,lotTitle:`Hyundai Tucson 2023 · Automática`,endsAt:Date.now()+7200*1e3}),(0,y.jsx)(Xn,{status:`negotiable`,lotId:`A-0044`,lotTitle:`Kia Sportage 2021`}),(0,y.jsx)(Xn,{status:`closed`,lotId:`A-0040`,lotTitle:`Nissan Frontier 2020`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import type { BadgeType } from '../Badge/Badge'

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
`})})})]})]})}function vi(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`vehicle-specs-row`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`VehicleSpecsRow`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Grid de especificaciones técnicas del vehículo. VIN en Roboto Mono.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsx)(`div`,{className:`p-6 bg-[var(--gray-50)]`,children:(0,y.jsx)(Qn,{specs:[{icon:`year`,label:`Año`,value:`2022`},{icon:`km`,label:`Kilometraje`,value:`45,200 km`},{icon:`fuel`,label:`Combustible`,value:`Diésel`},{icon:`transmission`,label:`Transmisión`,value:`Automática`},{icon:`engine`,label:`Motor`,value:`2.8L 4 cil`},{icon:`doors`,label:`Puertas`,value:`4`},{icon:`color`,label:`Color`,value:`Blanco`},{icon:`vin`,label:`VIN`,value:`MR1FZ29G5N0123456`}]})}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`export interface VehicleSpec {
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
`})})})]})]})}function yi(){let[e,t]=(0,_.useState)(!1),n=Date.now(),r=[{id:`1`,bidder:`Carlos Paredes`,amount:52500,placedAt:new Date(n-3e4),isWinning:!0},{id:`2`,bidder:`Ana Torres`,amount:5e4,placedAt:new Date(n-12e4),isWinning:!1},{id:`3`,bidder:`Roberto Mendoza`,amount:48e3,placedAt:new Date(n-3e5),isWinning:!1,isAnonymous:!0},{id:`4`,bidder:`Lucía Fernández`,amount:46e3,placedAt:new Date(n-6e5),isWinning:!1},{id:`5`,bidder:`Jorge Huanca`,amount:44e3,placedAt:new Date(n-9e5),isWinning:!1},{id:`6`,bidder:`María Quispe`,amount:42e3,placedAt:new Date(n-12e5),isWinning:!1}];return(0,y.jsxs)(`section`,{id:`bid-history-list`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`BidHistoryList`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Historial de pujas: mayor oferta destacada, avatares, tiempo relativo, anonimización.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start`,children:[(0,y.jsx)(ir,{bids:r,maxVisible:4,className:`w-[320px]`}),(0,y.jsx)(ir,{bids:[],className:`w-[280px]`}),(0,y.jsx)(ir,{bids:r,isLoading:!0,className:`w-[280px]`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`export interface BidEntry {
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
`})})})]})]})}function bi(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`vehicle-image-gallery`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`VehicleImageGallery`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Galería con imagen principal, flechas de navegación, miniaturas y contador.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-6 items-start`,children:[(0,y.jsx)(ar,{images:[{src:`https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80`,alt:`Toyota Hilux frontal`},{src:`https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80`,alt:`Toyota Hilux lateral`},{src:`https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80`,alt:`Toyota Hilux trasera`},{src:`https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=800&q=80`,alt:`Interior`}],className:`w-[400px]`}),(0,y.jsx)(ar,{images:[],className:`w-[240px]`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import { useState } from 'react'

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
      <div className={['flex items-center justify-center bg-[var(--gray-100)] rounded-[var(--radius-card)] aspect-[4/3]', className].join(' ')}>
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
      <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--gray-100)] aspect-[4/3]">
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
`})})})]})]})}function xi(){let[e,t]=(0,_.useState)(!1);return(0,y.jsxs)(`section`,{id:`seller-card`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`SellerCard`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Card del subastador con avatar, rating, stats y contacto.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start`,children:[(0,y.jsx)(cr,{name:`VMC Subastas Lima`,role:`Subastador oficial`,rating:4.8,totalAuctions:312,phone:`+51 1 234 5678`,email:`subastas@vmc.pe`,isVerified:!0,className:`w-[260px]`}),(0,y.jsx)(cr,{name:`Carlos Herrera`,role:`Agente autorizado`,rating:3.5,totalAuctions:47,className:`w-[220px]`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`export interface SellerCardProps {
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
`})})})]})]})}function Si(){let[e,t]=(0,_.useState)(!1),n=Date.now()+1380*1e3;return(0,y.jsxs)(`section`,{id:`auction-summary-widget`,className:`mb-10 scroll-mt-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4 mb-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h3`,{className:`text-[15px] font-bold text-[var(--purple-900)]`,children:`AuctionSummaryWidget`}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] mt-0.5`,children:`Widget lateral completo: precio actual, countdown, BidForm integrado. Variantes por estado.`})]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors`,children:e?`Ocultar`:`Ver código`})]}),(0,y.jsxs)(`div`,{className:`rounded-xl border border-[var(--gray-200)] overflow-hidden`,children:[(0,y.jsxs)(`div`,{className:`p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start`,children:[(0,y.jsx)(lr,{lotId:`A-0042`,title:`Toyota Hilux 2022`,subtitle:`4x4 · Diésel · 45,200 km`,status:`live`,currentPrice:52500,startingPrice:48e3,endsAt:n,minimumBid:53e3,totalBids:6,className:`w-[300px]`}),(0,y.jsx)(lr,{lotId:`A-0043`,title:`Hyundai Tucson 2023`,subtitle:`FWD · Gasolina · 12,000 km`,status:`upcoming`,currentPrice:68e3,endsAt:Date.now()+2*3600*1e3,minimumBid:68e3,className:`w-[300px]`}),(0,y.jsx)(lr,{lotId:`A-0040`,title:`Nissan Frontier 2020`,subtitle:`4x2 · Diésel · 78,000 km`,status:`closed`,currentPrice:38500,endsAt:Date.now()-1e3,minimumBid:39e3,totalBids:4,className:`w-[300px]`})]}),e&&(0,y.jsx)(`div`,{className:`border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto`,children:(0,y.jsx)(`pre`,{className:`text-[11px] leading-relaxed m-0 font-mono whitespace-pre`,children:(0,y.jsx)(O,{code:`import { CountdownTimer } from '../CountdownTimer'
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
`})})})]})]})}function Ci(){let e=qr.filter(e=>e.status===`done`).length,t=qr.length;return(0,y.jsxs)(`header`,{className:`h-12 border-b border-[var(--gray-200)] flex items-center justify-between px-6 bg-white shrink-0`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`span`,{className:`text-[12px] font-bold text-[var(--purple-900)]`,children:`VMC Subastas — Design System`}),(0,y.jsx)(`span`,{className:`text-[var(--gray-300)] select-none`,children:`/`}),(0,y.jsx)(`span`,{className:`text-[12px] text-[var(--gray-500)]`,children:`Documentación`})]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,y.jsx)(`div`,{className:`w-[80px] h-1.5 rounded-full bg-[var(--gray-100)] overflow-hidden`,children:(0,y.jsx)(`div`,{className:`h-full rounded-full bg-emerald-400 transition-all duration-500`,style:{width:`${Math.round(e/t*100)}%`}})}),(0,y.jsxs)(`span`,{className:`text-[11px] text-[var(--gray-400)]`,children:[e,`/`,t,` listos`]})]}),(0,y.jsx)(`span`,{className:`text-[10px] font-mono text-[var(--gray-300)] border border-[var(--gray-200)] rounded px-1.5 py-0.5`,children:`v0.1`})]})]})}var wi={L0:`bg-[var(--gray-100)] text-[var(--gray-500)]`,L1:`bg-[oklch(0.761_0.130_197.000/0.12)] text-[var(--cyan-400)]`,L2:`bg-[oklch(0.784_0.172_68.000/0.12)] text-[var(--orange-500)]`,L3:`bg-[oklch(0.335_0.163_289.500/0.12)] text-[var(--purple-600)]`,L4:`bg-[oklch(0.242_0.138_286.500/0.15)] text-[var(--purple-800)]`},Ti={L0:`Primitiva`,L1:`Elemento`,L2:`Componente`,L3:`Bloque`,L4:`Layout`},Ei=[{name:`PageLayout`,layer:`L4`},{name:`Header`,layer:`L4`},{name:`Sidebar`,layer:`L4`},{name:`HeroSection`,layer:`L4`},{name:`Footer`,layer:`L4`},{name:`AuctionCard (Featured)`,layer:`L3`},{name:`AuctioneerSection`,layer:`L3`,count:2},{name:`VehicleCard`,layer:`L3`,count:8},{name:`SubascoinsPromoBanner`,layer:`L3`},{name:`HelpCenterBanner`,layer:`L2`},{name:`Button`,layer:`L1`,count:2},{name:`Badge`,layer:`L1`,count:3},{name:`CountdownTimer`,layer:`L1`},{name:`PriceDisplay`,layer:`L1`,count:5},{name:`Image`,layer:`L1`,count:9}],Di=[{name:`PageLayout`,layer:`L4`},{name:`Header`,layer:`L4`},{name:`Sidebar`,layer:`L4`},{name:`Footer`,layer:`L4`},{name:`VehicleImageGallery`,layer:`L3`},{name:`AuctionSummaryWidget`,layer:`L3`},{name:`AuctionStatusBanner`,layer:`L3`},{name:`BidForm`,layer:`L3`},{name:`VehicleSpecsRow`,layer:`L3`},{name:`AuctionActionBar`,layer:`L3`},{name:`AuctioneerSection`,layer:`L3`},{name:`SubascoinsPromoBanner`,layer:`L3`},{name:`Accordion`,layer:`L2`,count:2},{name:`HelpCenterBanner`,layer:`L2`},{name:`DocumentDownloadRow`,layer:`L2`,count:3},{name:`Button`,layer:`L1`,count:4},{name:`Badge`,layer:`L1`,count:2},{name:`PriceDisplay`,layer:`L1`},{name:`CountdownTimer`,layer:`L1`},{name:`DataQualityBadge`,layer:`L1`},{name:`Image`,layer:`L1`,count:5},{name:`Avatar`,layer:`L1`}];function Oi({id:e,title:t,figmaUrl:n,totalWidth:r,sidebarWidth:i,contentWidth:a,description:o,components:s}){let c=[`L4`,`L3`,`L2`,`L1`,`L0`],l=e=>s.filter(t=>t.layer===e);return(0,y.jsxs)(`div`,{id:e,className:`scroll-mt-8 mb-12`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between mb-6 pb-4 border-b border-[var(--gray-100)]`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-2 mb-1`,children:[(0,y.jsx)(`span`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--orange-500)]`,children:`Frame`}),(0,y.jsx)(`span`,{className:`size-1 rounded-full bg-[var(--gray-300)]`}),(0,y.jsxs)(`span`,{className:`text-[10px] text-[var(--gray-400)]`,children:[r,`px max-width`]})]}),(0,y.jsx)(`h3`,{className:`text-[20px] font-bold text-[var(--purple-900)] m-0`,children:t}),(0,y.jsx)(`p`,{className:`text-[12px] text-[var(--gray-400)] mt-1 max-w-[500px]`,children:o})]}),n&&(0,y.jsxs)(`a`,{href:n,target:`_blank`,rel:`noopener noreferrer`,className:`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold no-underline border border-[var(--gray-200)] text-[var(--gray-500)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)] transition-colors`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,children:(0,y.jsx)(`path`,{d:`M4.5 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7.5M7.5 1H11m0 0v3.5M11 1 5.5 6.5`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinecap:`round`,strokeLinejoin:`round`})}),`Ver en Figma`]})]}),(0,y.jsx)(`div`,{className:`flex gap-3 mb-6`,children:[{label:`Frame total`,value:`${r}px`},{label:`Sidebar`,value:`${i}px`},{label:`Área de contenido`,value:`${a}px`},{label:`Componentes`,value:`${s.length}`}].map(e=>(0,y.jsxs)(`div`,{className:`flex-1 bg-white rounded-lg border border-[var(--gray-100)] px-3 py-2.5`,children:[(0,y.jsx)(`p`,{className:`text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-0.5`,children:e.label}),(0,y.jsx)(`p`,{className:`text-[18px] font-bold text-[var(--purple-900)] tabular-nums m-0`,children:e.value})]},e.label))}),(0,y.jsxs)(`div`,{className:`flex gap-6`,children:[(0,y.jsxs)(`div`,{className:`w-[200px] shrink-0`,children:[(0,y.jsx)(`p`,{className:`text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Componentes en frame`}),(0,y.jsx)(`div`,{className:`flex flex-col gap-3`,children:c.map(e=>{let t=l(e);return t.length?(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-1.5 mb-1.5`,children:[(0,y.jsx)(`span`,{className:`text-[9px] font-bold px-1.5 py-0.5 rounded ${wi[e]}`,children:e}),(0,y.jsx)(`span`,{className:`text-[9px] text-[var(--gray-400)]`,children:Ti[e]})]}),(0,y.jsx)(`div`,{className:`flex flex-col gap-0.5`,children:t.map(e=>(0,y.jsxs)(`div`,{className:`flex items-center justify-between px-2 py-1 rounded-md bg-white border border-[var(--gray-100)]`,children:[(0,y.jsx)(`span`,{className:`text-[11px] text-[var(--gray-600)]`,children:e.name}),e.count&&e.count>1&&(0,y.jsxs)(`span`,{className:`text-[9px] font-bold text-[var(--gray-400)] tabular-nums`,children:[`×`,e.count]})]},e.name))})]},e):null})})]}),(0,y.jsxs)(`div`,{className:`flex-1`,children:[(0,y.jsx)(`p`,{className:`text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3`,children:`Diagrama de layout (1024px)`}),(0,y.jsxs)(`div`,{className:`bg-[var(--gray-50)] border border-[var(--gray-100)] rounded-lg p-4 overflow-x-auto`,children:[(0,y.jsxs)(`div`,{className:`flex gap-0 rounded overflow-hidden border border-[var(--gray-200)]`,style:{width:`100%`,minWidth:`400px`,fontSize:`9px`},children:[(0,y.jsx)(`div`,{className:`shrink-0 flex flex-col`,style:{width:`${i/r*100}%`,background:`var(--purple-800)`,minHeight:`320px`},children:(0,y.jsxs)(`div`,{className:`p-2 text-white/60 font-bold uppercase tracking-wider`,style:{fontSize:`8px`},children:[`Sidebar`,(0,y.jsx)(`br`,{}),i,`px`]})}),(0,y.jsxs)(`div`,{className:`flex-1 flex flex-col gap-0`,style:{background:`var(--gray-50)`},children:[(0,y.jsx)(`div`,{className:`shrink-0 flex items-center px-2`,style:{height:`24px`,background:`var(--purple-800)`},children:(0,y.jsx)(`span`,{className:`text-white/70 font-bold uppercase tracking-wider`,style:{fontSize:`8px`},children:`Header · 64px`})}),(0,y.jsxs)(`div`,{className:`flex-1 flex flex-col gap-1 p-1.5`,children:[e===`frame-homepage`?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`div`,{className:`rounded px-2 py-1.5 text-white font-semibold`,style:{background:`var(--purple-900)`,fontSize:`8px`},children:`HeroSection`}),(0,y.jsx)(`div`,{className:`rounded px-2 py-1`,style:{background:`var(--orange-500)`,fontSize:`8px`,color:`white`},children:`SubascoinsPromoBanner`}),(0,y.jsx)(`div`,{className:`rounded px-2 py-1 bg-white border border-[var(--gray-200)]`,style:{fontSize:`8px`,color:`var(--gray-500)`},children:`AuctioneerSection × 2 · VehicleCard × 8 · 196px/card`}),(0,y.jsx)(`div`,{className:`rounded px-2 py-1`,style:{background:`var(--gray-100)`,fontSize:`8px`,color:`var(--gray-500)`},children:`HelpCenterBanner`})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`div`,{className:`rounded px-2 py-1.5 bg-white border border-[var(--gray-200)]`,style:{fontSize:`8px`,color:`var(--gray-500)`},children:`VehicleImageGallery + AuctionSummaryWidget`}),(0,y.jsx)(`div`,{className:`rounded px-2 py-1`,style:{background:`var(--orange-500)`,fontSize:`8px`,color:`white`},children:`SubascoinsPromoBanner`}),(0,y.jsx)(`div`,{className:`rounded px-2 py-1.5 bg-white border border-[var(--gray-200)]`,style:{fontSize:`8px`,color:`var(--gray-500)`},children:`Accordion · VehicleSpecsRow · DocumentDownloadRow`}),(0,y.jsx)(`div`,{className:`rounded px-2 py-1 bg-white border border-[var(--gray-200)]`,style:{fontSize:`8px`,color:`var(--gray-500)`},children:`AuctioneerSection · VehicleCard × 4`}),(0,y.jsx)(`div`,{className:`rounded px-2 py-1`,style:{background:`var(--gray-100)`,fontSize:`8px`,color:`var(--gray-500)`},children:`HelpCenterBanner`})]}),(0,y.jsx)(`div`,{className:`shrink-0 flex items-center px-2 mt-auto rounded`,style:{height:`20px`,background:`var(--purple-800)`},children:(0,y.jsx)(`span`,{className:`text-white/70 font-bold uppercase tracking-wider`,style:{fontSize:`8px`},children:`Footer`})})]})]})]}),(0,y.jsxs)(`p`,{className:`text-[9px] text-[var(--gray-400)] mt-2 text-right tabular-nums`,children:[`Sidebar `,i,`px + Contenido `,a,`px = `,r,`px total`]})]})]})]})]})}function ki(){return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(Oi,{id:`frame-homepage`,title:`Homepage`,figmaUrl:`https://www.figma.com/design/yt3TvHt7q5PpPrJvmnvi6b/VMC-2026---DESIGN-SYSTEM?node-id=1-615`,totalWidth:1024,sidebarWidth:140,contentWidth:884,description:`Página principal. Hero con lote destacado + countdown. Secciones por rematador con carrusel horizontal de VehicleCards.`,components:Ei}),(0,y.jsx)(Oi,{id:`frame-detalle`,title:`Detalle de Lote`,totalWidth:1024,sidebarWidth:140,contentWidth:884,description:`Página de detalle de un lote de subasta. Galería de imágenes + widget de puja + specs técnicas + documentos + ofertas relacionadas.`,components:Di})]})}function Ai(){return(0,y.jsxs)(`div`,{className:`flex flex-col min-h-screen bg-white`,style:{maxWidth:`100%`},children:[(0,y.jsx)(Ci,{}),(0,y.jsxs)(`div`,{className:`flex flex-1 overflow-hidden`,children:[(0,y.jsx)(`div`,{className:`border-r border-[var(--gray-100)] bg-white`,children:(0,y.jsx)(Yr,{activeId:`tokens`})}),(0,y.jsx)(`main`,{className:`flex-1 overflow-y-auto bg-[var(--gray-50)]`,children:(0,y.jsxs)(`div`,{className:`max-w-[860px] mx-auto py-10 px-10`,children:[(0,y.jsxs)(`div`,{className:`mb-10`,children:[(0,y.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--cyan-500)] mb-1`,children:`Design System · Fase 3`}),(0,y.jsx)(`h1`,{className:`text-[28px] font-bold text-[var(--purple-900)] leading-tight mb-2`,children:`Documentación`}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5`,children:`Tokens semánticos OKLCH · W3C DTCG · Componentes React + TypeScript + Tailwind v4. Cada componente incluye los 7 estados del CLAUDE.md.`})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-16`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`h2`,{className:`text-[18px] font-bold text-[var(--purple-900)]`,children:`Frames`}),(0,y.jsx)(`p`,{className:`text-[12px] text-[var(--gray-400)] mt-0.5`,children:`Inventario de componentes por página. Max-width 1024px — Sidebar 140px — Contenido 884px.`})]}),(0,y.jsx)(ki,{})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`h2`,{className:`text-[18px] font-bold text-[var(--purple-900)]`,children:`Foundation`}),(0,y.jsx)(`p`,{className:`text-[12px] text-[var(--gray-400)] mt-0.5`,children:`Tokens primitivos y semánticos extraídos de Figma y normalizados según CLAUDE.md.`})]}),(0,y.jsx)(Er,{})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`h2`,{className:`text-[18px] font-bold text-[var(--purple-900)]`,children:`Átomos`}),(0,y.jsx)(`p`,{className:`text-[12px] text-[var(--gray-400)] mt-0.5`,children:`Unidades mínimas de UI. Sin dependencias de otros componentes.`})]}),(0,y.jsx)(Mr,{}),(0,y.jsx)(ai,{}),(0,y.jsx)(Pr,{}),(0,y.jsx)(oi,{}),(0,y.jsx)(si,{}),(0,y.jsx)(ci,{}),(0,y.jsx)(Lr,{}),(0,y.jsx)(Xr,{}),(0,y.jsx)(Zr,{}),(0,y.jsx)(Qr,{}),(0,y.jsx)(li,{}),(0,y.jsx)(Rr,{}),(0,y.jsx)($r,{}),(0,y.jsx)(ei,{})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`h2`,{className:`text-[18px] font-bold text-[var(--purple-900)]`,children:`Moléculas`}),(0,y.jsx)(`p`,{className:`text-[12px] text-[var(--gray-400)] mt-0.5`,children:`Componentes compuestos por átomos. Unidad reutilizable con propósito definido.`})]}),(0,y.jsx)(ui,{}),(0,y.jsx)(ti,{}),(0,y.jsx)(ni,{}),(0,y.jsx)(ri,{}),(0,y.jsx)(ii,{}),(0,y.jsx)(fi,{}),(0,y.jsx)(pi,{}),(0,y.jsx)(mi,{}),(0,y.jsx)(hi,{}),(0,y.jsx)(Br,{}),(0,y.jsx)(Vr,{}),(0,y.jsx)(Kr,{})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`h2`,{className:`text-[18px] font-bold text-[var(--purple-900)]`,children:`Organismos`}),(0,y.jsx)(`p`,{className:`text-[12px] text-[var(--gray-400)] mt-0.5`,children:`Secciones completas compuestas por moléculas y átomos.`})]}),(0,y.jsx)(Gr,{}),(0,y.jsx)(di,{}),(0,y.jsx)(Hr,{})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`mb-6`,children:[(0,y.jsx)(`h2`,{className:`text-[18px] font-bold text-[var(--purple-900)]`,children:`Bloques`}),(0,y.jsx)(`p`,{className:`text-[12px] text-[var(--gray-400)] mt-0.5`,children:`Bloques de negocio específicos de la plataforma VMC Subastas.`})]}),(0,y.jsx)(gi,{}),(0,y.jsx)(_i,{}),(0,y.jsx)(vi,{}),(0,y.jsx)(yi,{}),(0,y.jsx)(bi,{}),(0,y.jsx)(xi,{}),(0,y.jsx)(Si,{})]})]})]})})]})]})}var ji={high:[`var(--color-status-success)`,`var(--color-status-success)`,`var(--color-status-success)`],medium:[`var(--color-status-success)`,`var(--color-status-warning)`,null],low:[`var(--color-status-error)`,null,null]},Mi={high:`Completo`,medium:`Parcial`,low:`Incompleto`};function Ni({level:e,showLabel:t=!0,disabled:n=!1,className:r=``}){let i=ji[e];return(0,y.jsxs)(`div`,{className:[`inline-flex items-center gap-[var(--space-2)]`,n?`opacity-40`:``,r].filter(Boolean).join(` `),role:`img`,"aria-label":`Calidad de información: ${Mi[e]}`,children:[t&&(0,y.jsx)(`span`,{className:`font-[var(--font-body)] font-[var(--weight-semibold)] uppercase tracking-[var(--tracking-wide)]`,style:{fontSize:`var(--font-size-xs)`,lineHeight:`var(--line-height-tight)`,color:`var(--color-text-label)`},children:`Calidad de información`}),(0,y.jsx)(`div`,{className:`flex items-center gap-[var(--space-1)]`,"aria-hidden":`true`,children:i.map((e,t)=>(0,y.jsx)(`span`,{className:`shrink-0 rounded-[var(--radius-full)]`,style:{width:`8px`,height:`8px`,background:e??`var(--gray-300)`,transition:`background var(--duration-micro) var(--easing-standard)`}},t))})]})}function Pi({type:e}){let t={pdf:`var(--red-500)`,xls:`var(--color-status-success)`,doc:`var(--color-action-primary)`,generic:`var(--gray-500)`}[e];return(0,y.jsxs)(`svg`,{width:`32`,height:`32`,viewBox:`0 0 32 32`,fill:`none`,"aria-hidden":`true`,className:`shrink-0`,children:[(0,y.jsx)(`rect`,{width:`32`,height:`32`,rx:`4`,fill:t,fillOpacity:`0.1`}),(0,y.jsx)(`path`,{d:`M10 8h8l6 6v12a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z`,stroke:t,strokeWidth:`1.3`,fill:`none`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M18 8v6h6`,stroke:t,strokeWidth:`1.3`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M12 17h8M12 20h5`,stroke:t,strokeWidth:`1.3`,strokeLinecap:`round`})]})}function Fi(){return(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M7 2v7M4 6l3 3 3-3`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M2 11h10`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`})]})}function Ii({label:e,href:t,fileType:n=`generic`,disabled:r=!1,className:i=``}){let[a,o]=(0,_.useState)(`idle`);return(0,y.jsxs)(`div`,{className:[`flex items-center gap-[var(--space-3)] px-[var(--space-4)] py-[var(--space-3)]`,`bg-[var(--color-surface-section)]`,`transition-colors duration-[var(--duration-micro)]`,r?`opacity-50`:`hover:bg-[var(--surface-200)]`,i].filter(Boolean).join(` `),children:[(0,y.jsx)(Pi,{type:n}),(0,y.jsx)(`span`,{className:`flex-1 font-[var(--font-body)] font-[var(--weight-semibold)]`,style:{fontSize:`var(--font-size-sm)`,lineHeight:`var(--line-height-tight)`,color:`var(--color-text-body)`},children:e}),(0,y.jsxs)(`button`,{type:`button`,onClick:()=>{r||a===`loading`||t&&(o(`loading`),setTimeout(()=>{window.open(t,`_blank`),o(`done`),setTimeout(()=>o(`idle`),3e3)},600))},disabled:r||a===`loading`,"aria-label":`Descargar ${e}`,className:[`flex items-center gap-[var(--space-1)] px-[var(--space-3)] py-[var(--space-2)]`,`rounded-[var(--radius-sm)]`,`font-[var(--font-body)] font-[var(--weight-semibold)] uppercase`,`border-0 cursor-pointer`,`transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,a===`done`?`bg-[oklch(0.702_0.165_145.000/0.12)] text-[var(--color-status-success)]`:`bg-[var(--color-surface-input)] text-[var(--color-action-primary)] hover:bg-[oklch(0.335_0.163_289.500/0.08)]`,r||a===`loading`?`opacity-50 cursor-not-allowed`:``].filter(Boolean).join(` `),style:{fontSize:`var(--font-size-xs)`,lineHeight:`var(--line-height-tight)`},children:[a===`loading`?(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,className:`animate-spin`,children:(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5`,stroke:`currentColor`,strokeWidth:`1.4`,strokeDasharray:`20`,strokeDashoffset:`10`,strokeLinecap:`round`})}):a===`done`?(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M2.5 7l3 3 6-6`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`})}):(0,y.jsx)(Fi,{}),a===`loading`?`Descargando`:a===`done`?`Listo`:`Descargar`]})]})}function Li({heading:e=`Visita nuestro Centro de ayuda`,subtext:t=`Respuestas rápidas a todas tus dudas`,ctaLabel:n=`IR AL CENTRO DE AYUDA`,ctaHref:r,onCtaClick:i,variant:a=`default`,className:o=``}){let s=a===`compact`;return(0,y.jsxs)(`section`,{className:[`flex items-center gap-[var(--space-4)]`,s?`px-[var(--space-4)] py-[var(--space-3)]`:`px-[var(--space-6)] py-[var(--space-5)]`,`bg-[var(--color-surface-section)]`,o].filter(Boolean).join(` `),"aria-label":`Centro de ayuda`,children:[(0,y.jsx)(vn,{name:`Centro de Ayuda`,size:s?`md`:`lg`,src:`https://ui-avatars.com/api/?name=CA&background=391383&color=fff&size=56`}),(0,y.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,y.jsx)(`p`,{className:`m-0 font-[var(--font-body)] font-[var(--weight-extrabold)]`,style:{fontSize:s?`var(--font-size-base)`:`var(--font-size-lg)`,lineHeight:s?`var(--line-height-base)`:`var(--line-height-lg)`,color:`var(--color-text-on-surface)`},children:e}),!s&&(0,y.jsx)(`p`,{className:`m-0 mt-0.5 font-[var(--font-body)] font-[var(--weight-regular)]`,style:{fontSize:`var(--font-size-sm)`,lineHeight:`var(--line-height-tight)`,color:`var(--color-text-muted)`},children:t})]}),(0,y.jsx)(S,{variant:`secondary`,size:s?`sm`:`md`,onClick:i??(r?()=>window.open(r,`_self`):void 0),children:n})]})}function Ri(){return(0,y.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,className:`shrink-0`,children:[(0,y.jsx)(`circle`,{cx:`10`,cy:`10`,r:`8.5`,stroke:`currentColor`,strokeWidth:`1.5`,opacity:`0.8`}),(0,y.jsx)(`circle`,{cx:`10`,cy:`10`,r:`5.5`,stroke:`currentColor`,strokeWidth:`1.2`,opacity:`0.5`}),(0,y.jsx)(`path`,{d:`M10 6v8M8 7.5h3a1.5 1.5 0 0 1 0 3H8M8 10.5h3a1.5 1.5 0 0 1 0 3H8`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinecap:`round`})]})}function zi(){return(0,y.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,className:`shrink-0`,children:(0,y.jsx)(`path`,{d:`M6 4l4 4-4 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function Bi({label:e=`ADQUIERE SUBASCOINS`,href:t,onClick:n,variant:r=`default`,className:i=``}){let a=r===`compact`;return(0,y.jsxs)(`button`,{type:`button`,onClick:n??(t?()=>window.open(t,`_self`):void 0),role:`link`,"aria-label":`Adquirir Subascoins`,className:[`w-full flex items-center gap-[var(--space-3)]`,a?`px-[var(--space-4)] py-[var(--space-3)]`:`px-[var(--space-6)] py-[var(--space-4)]`,`border-0 cursor-pointer`,`transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]`,`hover:brightness-90 active:brightness-75`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`,i].filter(Boolean).join(` `),style:{background:`var(--color-action-cta)`,color:`var(--color-text-on-dark)`},children:[(0,y.jsx)(Ri,{}),(0,y.jsx)(`span`,{className:`flex-1 text-left font-[var(--font-body)] font-[var(--weight-extrabold)] uppercase tracking-[var(--tracking-wide)]`,style:{fontSize:a?`var(--font-size-xs)`:`var(--font-size-sm)`,lineHeight:`var(--line-height-tight)`},children:e}),(0,y.jsx)(zi,{})]})}function Vi(){return(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M7 1L2 4v3c0 3.3 2.1 6.4 5 7 2.9-.6 5-3.7 5-7V4L7 1Z`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M5 7l1.5 1.5L9.5 5.5`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}function Hi(){return(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`path`,{d:`M11 12H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6l3 3v7a1 1 0 0 1-1 1Z`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M9.5 12V8.5h-5V12`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinejoin:`round`}),(0,y.jsx)(`path`,{d:`M4.5 2v3h4`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinejoin:`round`})]})}function A(){return(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5.5`,stroke:`currentColor`,strokeWidth:`1.3`}),(0,y.jsx)(`path`,{d:`M7 4.5V7l1.5 1.5`,stroke:`currentColor`,strokeWidth:`1.3`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}function j({hasReservePrice:e=!0,participationLimit:t,onReservePrice:n,onSaveOffer:r,onParticipationLimits:i,variant:a=`full`,disabled:o=!1,loading:s=!1,className:c=``}){let l=o||s;return(0,y.jsxs)(`div`,{className:[`flex items-center gap-[var(--space-2)] p-[var(--space-2)]`,`rounded-[var(--radius-sm)]`,`bg-[var(--color-surface-input)]`,l?`opacity-50 pointer-events-none`:``,c].filter(Boolean).join(` `),role:`group`,"aria-label":`Acciones de subasta`,children:[(a===`full`||a===`compact`)&&e&&(0,y.jsxs)(S,{variant:`tertiary`,size:`sm`,onClick:n,disabled:l,hasLeadingIcon:!0,className:`flex-1`,children:[(0,y.jsx)(Vi,{}),`Con Precio Reserva`]}),(0,y.jsxs)(S,{variant:`tertiary`,size:`sm`,onClick:r,disabled:l,hasLeadingIcon:!0,className:`flex-1`,children:[(0,y.jsx)(Hi,{}),`Guardar Oferta`]}),a===`full`&&(0,y.jsxs)(S,{variant:`tertiary`,size:`sm`,onClick:i,disabled:l,hasLeadingIcon:!0,className:`flex-1`,children:[(0,y.jsx)(A,{}),t===void 0?`Ver límites`:`${t} límites`]})]})}var Ui=Date.now()+1e3*60*62,Wi={title:`TOYOTA HILUX 2024`,subtitle:`2024 · Lima, Perú`,badge:`live`,price:17999,currency:`US$`,priceLabel:`PRECIO BASE`,endsAt:Ui},Gi=Array.from({length:4},(e,t)=>({title:[`FORD BRONCO SPORT`,`TOYOTA ETIOS`,`TOYOTA HILUX`,`NISSAN VERSA`][t],subtitle:[`2024 | LIMA, PERÚ`,`2024 | LIMA, PERÚ`,`2023 | LIMA, PERÚ`,`2022 | LIMA, PERÚ`][t],price:[`17,999`,`4,999`,`17,999`,`3,999`][t],currency:`US$`,priceLabel:`PRECIO BASE`})),Ki=[{icon:`year`,label:`Año`,value:`2024`},{icon:`km`,label:`Kilometraje`,value:`12,400 km`},{icon:`fuel`,label:`Combustible`,value:`Gasolina`},{icon:`transmission`,label:`Transmisión`,value:`Automático`}],qi=[{src:`https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=70`,alt:`Toyota Hilux — frontal`},{src:`https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=70`,alt:`Toyota Hilux — lateral`},{src:`https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=800&q=70`,alt:`Toyota Hilux — interior`}];function Ji({children:e,bg:t=`transparent`,pad:n=!0}){return(0,y.jsx)(`div`,{style:{background:t,padding:n?`24px 32px`:`0`},children:e})}function M({children:e}){return(0,y.jsx)(`p`,{className:`text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-2`,children:e})}function Yi({width:e,bg:t=`var(--gray-50)`,children:n}){return(0,y.jsx)(`div`,{style:{background:t,padding:`24px`,display:`flex`,justifyContent:`center`},children:(0,y.jsx)(`div`,{style:{width:e,flexShrink:0},children:n})})}var Xi={Button:(0,y.jsxs)(Ji,{children:[(0,y.jsx)(M,{children:`Variantes de intención`}),(0,y.jsxs)(`div`,{className:`flex flex-wrap gap-3 mb-4`,children:[(0,y.jsx)(S,{variant:`primary`,size:`md`,children:`PARTICIPA AHORA`}),(0,y.jsx)(S,{variant:`secondary`,size:`md`,children:`Guardar Oferta`}),(0,y.jsx)(S,{variant:`tertiary`,size:`md`,children:`IR AL PERFIL`}),(0,y.jsx)(S,{variant:`destructive`,size:`md`,children:`Retirar Oferta`})]}),(0,y.jsx)(M,{children:`Tamaños`}),(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(S,{variant:`primary`,size:`sm`,children:`sm — 32px`}),(0,y.jsx)(S,{variant:`primary`,size:`md`,children:`md — 40px`}),(0,y.jsx)(S,{variant:`primary`,size:`lg`,children:`lg — 48px`})]})]}),Badge:(0,y.jsxs)(Ji,{children:[(0,y.jsx)(M,{children:`Todos los tipos`}),(0,y.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,y.jsx)(C,{type:`live`}),(0,y.jsx)(C,{type:`negotiable`}),(0,y.jsx)(C,{type:`upcoming`}),(0,y.jsx)(C,{type:`closed`}),(0,y.jsx)(C,{type:`new`}),(0,y.jsx)(C,{type:`featured`})]})]}),PriceDisplay:(0,y.jsxs)(Ji,{bg:`var(--purple-800)`,children:[(0,y.jsx)(M,{children:`Contexto Hero`}),(0,y.jsx)(T,{context:`hero`,amount:17999,currency:`US$`,label:`PRECIO BASE`}),(0,y.jsxs)(`div`,{className:`mt-4`,children:[(0,y.jsx)(M,{children:`Contexto Card`}),(0,y.jsx)(T,{context:`card`,amount:4999,currency:`US$`,label:`PRECIO BASE`})]})]}),CountdownTimer:(0,y.jsxs)(Ji,{bg:`var(--purple-800)`,children:[(0,y.jsx)(M,{children:`Estado default`}),(0,y.jsx)(le,{endsAt:Ui}),(0,y.jsxs)(`div`,{className:`mt-4`,children:[(0,y.jsx)(M,{children:`Estado urgent (< 1h)`}),(0,y.jsx)(le,{endsAt:Date.now()+1e3*25*60})]})]}),Avatar:(0,y.jsxs)(Ji,{children:[(0,y.jsx)(M,{children:`Tamaños sm · md · lg`}),(0,y.jsxs)(`div`,{className:`flex items-end gap-4`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,y.jsx)(vn,{size:`sm`,name:`JR`}),(0,y.jsx)(`span`,{className:`text-[9px] text-[var(--gray-400)]`,children:`24px`})]}),(0,y.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,y.jsx)(vn,{size:`md`,name:`JR`}),(0,y.jsx)(`span`,{className:`text-[9px] text-[var(--gray-400)]`,children:`40px`})]}),(0,y.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,y.jsx)(vn,{size:`lg`,name:`JR`}),(0,y.jsx)(`span`,{className:`text-[9px] text-[var(--gray-400)]`,children:`56px`})]})]})]}),Image:(0,y.jsx)(Ji,{pad:!1,children:(0,y.jsxs)(`div`,{className:`grid grid-cols-3 gap-1`,children:[(0,y.jsx)(`div`,{children:(0,y.jsx)(xn,{src:``,ratio:`1/1`,alt:`Square`})}),(0,y.jsx)(`div`,{children:(0,y.jsx)(xn,{src:``,ratio:`16/9`,alt:`Landscape`})}),(0,y.jsx)(`div`,{children:(0,y.jsx)(xn,{src:``,ratio:`3/2`,alt:`Portrait`})})]})}),"AuctionCard (Featured)":(0,y.jsx)(Yi,{width:`320px`,children:(0,y.jsx)(Ze,{variant:`featured`,lot:Wi})}),VehicleCard:(0,y.jsx)(Yi,{width:`163px`,children:(0,y.jsx)(It,{...Gi[0]})}),AuctioneerSection:(0,y.jsxs)(`div`,{children:[(0,y.jsx)(M,{children:`Carousel (homepage — ancho completo)`}),(0,y.jsx)(Vt,{title:`MAF PERÚ`,offerCount:5,profileLinkLabel:`IR AL PERFIL`,onProfileClick:()=>{},cards:Gi,layout:`carousel`}),(0,y.jsxs)(`div`,{style:{marginTop:`16px`},children:[(0,y.jsx)(M,{children:`Grid 2 col (detalle — 276px)`}),(0,y.jsx)(Yi,{width:`276px`,bg:`var(--color-surface-section)`,children:(0,y.jsx)(Vt,{title:`Ofertas Relacionadas`,cards:Gi,layout:`grid`})})]})]}),AuctionStatusBanner:(0,y.jsxs)(`div`,{className:`flex flex-col`,children:[(0,y.jsx)(Xn,{status:`live`,lotTitle:`TOYOTA HILUX 2024`,endsAt:Ui}),(0,y.jsx)(Xn,{status:`upcoming`,lotTitle:`DODGE CHALLENGER 2023`,endsAt:Date.now()+1e3*60*60*24}),(0,y.jsx)(Xn,{status:`closed`,lotTitle:`NISSAN VERSA 2022`})]}),BidForm:(0,y.jsx)(Yi,{width:`276px`,children:(0,y.jsx)(it,{lotId:`demo-1`,minimumBid:15e3,currency:`US$`})}),VehicleSpecsRow:(0,y.jsx)(Yi,{width:`444px`,children:(0,y.jsx)(Qn,{specs:Ki})}),Accordion:(0,y.jsx)(Yi,{width:`444px`,children:(0,y.jsx)(ln,{items:[{title:`Información general`,content:`Vehículo recuperado por la Financiera. Año 2024, Lima San Isidro. Estado: excelente condición mecánica.`},{title:`Condiciones del ofrecimiento`,content:`La firma de transferencia se realiza en nuestra oficina en Lima. El comprador debe verificar el estado del vehículo.`},{title:`Documentos requeridos`,content:`DNI vigente · Constancia de fondos · Formulario de participación firmado.`}]})}),VehicleImageGallery:(0,y.jsx)(Yi,{width:`444px`,children:(0,y.jsx)(ar,{images:qi})}),AuctionSummaryWidget:(0,y.jsx)(Yi,{width:`276px`,children:(0,y.jsx)(lr,{lotId:`demo-1`,title:`TOYOTA HILUX 2024`,subtitle:`2024 · Lima, Perú`,status:`live`,currentPrice:17999,startingPrice:15e3,currency:`US$`,endsAt:Date.now()+1e3*60*62,minimumBid:18500,totalBids:7})}),Header:(0,y.jsx)(`div`,{className:`pointer-events-none`,children:(0,y.jsx)(lt,{user:void 0})}),Footer:(0,y.jsx)(`div`,{className:`pointer-events-none`,children:(0,y.jsx)(Nt,{})}),Sidebar:(0,y.jsx)(`div`,{className:`pointer-events-none flex`,style:{height:`480px`},children:(0,y.jsx)(xt,{})}),PageLayout:(0,y.jsx)(Ji,{children:(0,y.jsxs)(`div`,{className:`border border-dashed border-[var(--gray-300)] px-4 py-3 flex items-center gap-2 rounded-lg`,children:[(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`1`,y:`1`,width:`12`,height:`12`,rx:`2`,stroke:`var(--purple-600)`,strokeWidth:`1.2`}),(0,y.jsx)(`path`,{d:`M4 1v12M4 4h9`,stroke:`var(--purple-600)`,strokeWidth:`1.2`})]}),(0,y.jsx)(`span`,{className:`text-[11px] text-[var(--gray-500)]`,children:`Contenedor raíz — Sidebar 256px + Contenido 768px = 1024px. Ver la página completa en el frame.`})]})}),HeroSection:(0,y.jsx)(Ji,{children:(0,y.jsxs)(`div`,{className:`border border-dashed border-[var(--gray-300)] px-4 py-3 flex items-center gap-2 rounded-lg`,children:[(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:[(0,y.jsx)(`rect`,{x:`1`,y:`1`,width:`12`,height:`12`,rx:`2`,stroke:`var(--purple-600)`,strokeWidth:`1.2`}),(0,y.jsx)(`path`,{d:`M1 5h12`,stroke:`var(--purple-600)`,strokeWidth:`1.2`})]}),(0,y.jsxs)(`span`,{className:`text-[11px] text-[var(--gray-500)]`,children:[`Sección hero completa — ver implementación en `,(0,y.jsx)(`a`,{href:`#hero-section`,className:`text-[var(--purple-600)]`,children:`Docs → HeroSection`}),`.`]})]})}),DataQualityBadge:(0,y.jsxs)(Ji,{children:[(0,y.jsx)(M,{children:`Niveles de calidad`}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,y.jsx)(Ni,{level:`high`}),(0,y.jsx)(Ni,{level:`medium`}),(0,y.jsx)(Ni,{level:`low`})]}),(0,y.jsxs)(`div`,{className:`mt-4`,children:[(0,y.jsx)(M,{children:`Sin etiqueta`}),(0,y.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,y.jsx)(Ni,{level:`high`,showLabel:!1}),(0,y.jsx)(Ni,{level:`medium`,showLabel:!1}),(0,y.jsx)(Ni,{level:`low`,showLabel:!1})]})]})]}),DocumentDownloadRow:(0,y.jsx)(Yi,{width:`444px`,children:(0,y.jsxs)(`div`,{className:`flex flex-col`,children:[(0,y.jsx)(Ii,{label:`Resolución de adjudicación`,fileType:`pdf`}),(0,y.jsx)(Ii,{label:`Cuadro de participantes`,fileType:`xls`}),(0,y.jsx)(Ii,{label:`Contrato de transferencia`,fileType:`doc`}),(0,y.jsx)(Ii,{label:`Documento adjunto`,fileType:`generic`,disabled:!0})]})}),HelpCenterBanner:(0,y.jsxs)(`div`,{className:`flex flex-col`,children:[(0,y.jsx)(Li,{}),(0,y.jsx)(Li,{variant:`compact`})]}),SubascoinsPromoBanner:(0,y.jsxs)(`div`,{className:`flex flex-col`,children:[(0,y.jsx)(Bi,{}),(0,y.jsx)(Bi,{variant:`compact`,label:`CANJEA TUS SUBASCOINS`})]}),AuctionActionBar:(0,y.jsxs)(Yi,{width:`276px`,children:[(0,y.jsx)(M,{children:`Full (3 acciones)`}),(0,y.jsx)(j,{variant:`full`,participationLimit:3}),(0,y.jsxs)(`div`,{className:`mt-3`,children:[(0,y.jsx)(M,{children:`Compact (2 acciones)`}),(0,y.jsx)(j,{variant:`compact`})]}),(0,y.jsxs)(`div`,{className:`mt-3`,children:[(0,y.jsx)(M,{children:`Minimal (1 acción)`}),(0,y.jsx)(j,{variant:`minimal`})]})]})},Zi=Date.now()+1e3*60*62,Qi={title:`TOYOTA HILUX 2024`,subtitle:`2024 · Lima, Perú`,badge:`live`,price:17999,currency:`US$`,priceLabel:`PRECIO BASE`,endsAt:Zi},$i=[{title:`FORD BRONCO SPORT`,subtitle:`2024 | LIMA, PERÚ`,price:`17,999`,currency:`US$`,priceLabel:`PRECIO BASE`},{title:`TOYOTA ETIOS`,subtitle:`2024 | LIMA, PERÚ`,price:`4,999`,currency:`US$`,priceLabel:`PRECIO BASE`},{title:`TOYOTA HILUX`,subtitle:`2023 | LIMA, PERÚ`,price:`17,999`,currency:`US$`,priceLabel:`PRECIO BASE`},{title:`NISSAN VERSA`,subtitle:`2022 | LIMA, PERÚ`,price:`3,999`,currency:`US$`,priceLabel:`PRECIO BASE`}],ea=[{title:`DODGE CHALLENGER`,subtitle:`2023 | LIMA, PERÚ`,price:`29,999`,currency:`US$`,priceLabel:`PRECIO BASE`},{title:`KIA SPORTAGE`,subtitle:`2022 | LIMA, PERÚ`,price:`14,500`,currency:`US$`,priceLabel:`PRECIO BASE`},{title:`HYUNDAI TUCSON`,subtitle:`2022 | LIMA, PERÚ`,price:`13,200`,currency:`US$`,priceLabel:`PRECIO BASE`},{title:`CHEVROLET CAMARO`,subtitle:`2021 | LIMA, PERÚ`,price:`22,000`,currency:`US$`,priceLabel:`PRECIO BASE`}],ta=[{icon:`year`,label:`Año`,value:`2024`},{icon:`km`,label:`Kilometraje`,value:`12,400 km`},{icon:`fuel`,label:`Combustible`,value:`Gasolina`},{icon:`transmission`,label:`Transmisión`,value:`Automático`}],na=[{src:`https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=70`,alt:`Toyota Hilux 2024 — vista frontal`},{src:`https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=70`,alt:`Toyota Hilux 2024 — lateral`},{src:`https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=800&q=70`,alt:`Toyota Hilux 2024 — interior`}];function ra(){return(0,y.jsxs)(`div`,{style:{width:`1024px`,background:`var(--color-surface-page)`,overflow:`hidden`},children:[(0,y.jsx)(lt,{user:void 0}),(0,y.jsxs)(`div`,{style:{display:`flex`,alignItems:`stretch`},children:[(0,y.jsx)(xt,{}),(0,y.jsxs)(`div`,{style:{width:`768px`,flexShrink:0,display:`flex`,flexDirection:`column`,background:`var(--color-surface-page)`},children:[(0,y.jsx)(Xn,{status:`live`,lotTitle:`TOYOTA HILUX 2024`,endsAt:Zi}),(0,y.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,padding:`16px`,alignItems:`flex-start`},children:[(0,y.jsxs)(`div`,{style:{flex:1,minWidth:0,display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,y.jsx)(ar,{images:na}),(0,y.jsx)(Qn,{specs:ta}),(0,y.jsx)(Ni,{level:`high`}),(0,y.jsx)(ln,{items:[{title:`Información del vehículo`,content:`Vehículo recuperado por la financiera. Año 2024, Lima San Isidro. Estado: excelente condición mecánica y estética. Placa ABC-123.`},{title:`Condiciones del ofrecimiento`,content:`La firma de transferencia se realiza en nuestra oficina en Lima. El comprador debe verificar el estado del vehículo antes de la firma.`},{title:`Documentos requeridos`,content:`DNI vigente · Constancia de fondos · Formulario de participación firmado · Carta de intención.`}]}),(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2px`},children:[(0,y.jsx)(Ii,{label:`Resolución de adjudicación`,fileType:`pdf`}),(0,y.jsx)(Ii,{label:`Cuadro de participantes`,fileType:`xls`}),(0,y.jsx)(Ii,{label:`Contrato de transferencia`,fileType:`doc`})]})]}),(0,y.jsxs)(`div`,{style:{width:`276px`,flexShrink:0,display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,y.jsx)(lr,{lotId:`61019`,title:`TOYOTA HILUX 2024`,subtitle:`2024 · Lima San Isidro, Perú`,status:`live`,currentPrice:17999,startingPrice:15e3,currency:`US$`,endsAt:Zi,minimumBid:18500,totalBids:7}),(0,y.jsx)(j,{variant:`full`,participationLimit:3}),(0,y.jsx)(Bi,{}),(0,y.jsx)(Vt,{title:`Ofertas Relacionadas`,layout:`grid`,cards:$i})]})]}),(0,y.jsx)(Li,{})]})]}),(0,y.jsx)(Nt,{})]})}function ia(){return(0,y.jsxs)(`div`,{style:{width:`1024px`,background:`var(--color-surface-page)`,overflow:`hidden`},children:[(0,y.jsx)(lt,{user:void 0}),(0,y.jsxs)(`div`,{style:{display:`flex`,alignItems:`stretch`},children:[(0,y.jsx)(xt,{}),(0,y.jsxs)(`div`,{style:{width:`768px`,flexShrink:0,display:`flex`,flexDirection:`column`,background:`var(--color-surface-page)`},children:[(0,y.jsxs)(`div`,{style:{background:`var(--color-surface-sidebar)`,padding:`24px 20px`,display:`flex`,gap:`20px`,alignItems:`stretch`},children:[(0,y.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:`12px`,paddingTop:`4px`},children:[(0,y.jsx)(C,{type:`live`}),(0,y.jsx)(T,{context:`hero`,label:`PRECIO BASE`,amount:17999,currency:`US$`}),(0,y.jsx)(le,{endsAt:Zi})]}),(0,y.jsx)(`div`,{style:{width:`320px`,flexShrink:0},children:(0,y.jsx)(Ze,{variant:`featured`,lot:Qi})})]}),(0,y.jsx)(Bi,{}),(0,y.jsx)(Vt,{title:`MAF PERÚ`,offerCount:5,profileLinkLabel:`IR AL PERFIL`,cards:$i}),(0,y.jsx)(Vt,{title:`SUBASTOP LIMA`,offerCount:3,profileLinkLabel:`IR AL PERFIL`,cards:ea}),(0,y.jsx)(Li,{})]})]}),(0,y.jsx)(Nt,{})]})}var aa={homepage:ia,detalle:ra},oa={PageLayout:{description:`Contenedor raíz de todas las páginas. Sidebar izquierdo + contenido principal. Max-width 1024px.`,figma:`Layout / Page / {Viewport}`,react:`<PageLayout sidebar={<Sidebar />}>`,variants:[`WithSidebar`,`FullWidth`],states:[`Default`],tokens:[`max-width: 1024px`,`--color-surface-page`,`margin: 0 auto`],width:`1024px`,height:`variable`},Header:{description:`Barra de navegación superior. Logo + búsqueda + acciones de usuario.`,figma:`Layout / Header / {Viewport}`,react:`<Header user={session.user} />`,variants:[`Desktop`,`Mobile`],states:[`Default`],tokens:[`--color-surface-header`,`--space-16 (64px)`,`--z-40`],notes:`Contiene SearchInput + Button (INGRESA) + IconButton (notificaciones).`,width:`1024px`,height:`64px`},Sidebar:{description:`Navegación lateral izquierda. Categorías de subasta, filtros, links de sección.`,figma:`Layout / Sidebar / {State}`,react:`<Sidebar activeSection="hoy" />`,variants:[`Expanded`,`Collapsed`,`MobileDrawer`],states:[`Expanded`,`Collapsed`,`Open (mobile)`,`Closed (mobile)`],tokens:[`--color-surface-sidebar`,`--z-40`,`--duration-standard`],notes:`Ancho fijo 256px. Fondo --purple-800. Item activo: borde-l 3px --cyan-400.`,width:`256px`,height:`100%`},Footer:{description:`Pie de página con links legales, redes sociales e info de empresa.`,figma:`Layout / Footer`,react:`<Footer />`,variants:[`Default`],states:[`Default`],tokens:[`--color-surface-sidebar`,`--type-body-sm`,`--color-text-on-dark`],width:`1024px`,height:`~276px`},HeroSection:{description:`Sección destacada de la homepage. Contiene el lote featured + CTA principal.`,figma:`Layout / Hero / {State}`,react:`<HeroSection featuredLot={lot} />`,variants:[`Default`,`Loading`],states:[`Default`,`Loading (Skeleton)`],tokens:[`--color-surface-hero-gradient`,`--type-hero-title`,`--shadow-brand-tinted`],notes:`Contiene VehicleImageGallery + AuctionCard (Featured) + AuctionStatusBanner + BidForm.`,width:`744px`,height:`~180px`},"AuctionCard (Featured)":{description:`Card de lote de subasta. Variante Featured: imagen prominente, precio hero 30px.`,figma:`Auction / Card / Featured / {State}`,react:`<AuctionCard variant="featured" lot={lot} />`,variants:[`Standard`,`Featured`,`Compact`],states:[`Default`,`Hover`,`Loading`],tokens:[`--color-surface-card`,`--shadow-brand-tinted`,`--radius-sm`,`--color-border-card-accent-auction`],notes:`4px border bottom como signature finish. Featured: precio en --type-hero-title (30px ExtraBold).`,width:`320px`,height:`variable`},AuctioneerSection:{description:`Sección por rematador con carrusel horizontal de VehicleCards. Header con nombre + contador + "IR AL PERFIL".`,figma:`Auction / AuctioneerSection / {State}`,react:`<AuctioneerSection title="MAF PERÚ" offerCount={12} cards={[...]} />`,variants:[`Default`,`WithProfileLink`],states:[`Default`,`Loading`],tokens:[`--color-surface-section`,`--type-section-heading`,`--color-action-primary`,`--gap-card-grid`],notes:`layout="carousel": scroll horizontal (homepage). layout="grid": 2-col grid (detalle, 276px).`,width:`276–768px`,height:`variable`},VehicleCard:{description:`Card compacta de vehículo para carruseles. Imagen + título + año/ciudad + precio + favorito.`,figma:`Vehicle / Card / {State}`,react:`<VehicleCard title="TOYOTA HILUX" price="17,999" currency="US$" />`,variants:[`Default`,`Favorited`],states:[`Default`,`Hover`,`Loading`],tokens:[`--color-surface-card`,`--shadow-card`,`--radius-sm`,`--color-action-cta (franja 4px)`],notes:`En carousel: 163px fijo. En grid 2-col: flex (≈122px). Imagen aspect-[4/3]. Borde-b 3px naranja.`,width:`122–163px`,height:`aspect-[4/3] + ~80px`},SubascoinsPromoBanner:{description:`Banner promocional del sistema de créditos Subascoins. CTA directo a compra/canje.`,figma:`Market / SubascoinsPromoBanner / {Variant}`,react:`<SubascoinsPromoBanner href="/subascoins" />`,variants:[`Default`,`Compact`],states:[`Default`,`Hover`],tokens:[`--color-action-cta`,`--color-text-on-dark`,`--type-label`,`--radius-sm`],notes:`Fondo --orange-500. Hover: brightness(0.92). role=link.`,width:`744px`,height:`56px`},VehicleImageGallery:{description:`Galería de imágenes del vehículo. Desktop: imagen principal + thumbnails.`,figma:`Vehicle / ImageGallery / {Viewport}`,react:`<VehicleImageGallery images={vehicle.images} />`,variants:[`Desktop`,`Mobile`],states:[`Default`,`Loading`],tokens:[`--radius-sm`,`--shadow-sm`],notes:`Contiene IconButton (favorito con isGlass) + Badge (estado lote).`,width:`444px`,height:`~333px`},AuctionSummaryWidget:{description:`Panel de subasta activa con toda la info para que el postor tome decisión de puja.`,figma:`Auction / SummaryWidget / {State}`,react:`<AuctionSummaryWidget lot={lot} />`,variants:[`Live`,`Upcoming`,`Closed`],states:[`Live`,`Upcoming`,`Closed`],tokens:[`--color-surface-card`,`--shadow-brand-tinted`,`--radius-sm`],notes:`Live: timer + BidForm activo. Upcoming: countdown + BidForm deshabilitado. Closed: resultado + BidForm oculto.`,width:`276px`,height:`variable`},AuctionStatusBanner:{description:`Banner que comunica el estado del proceso de subasta. Siempre visible en página de detalle.`,figma:`Auction / StatusBanner / {Status}`,react:`<AuctionStatusBanner status="live" endsAt={timestamp} />`,variants:[`Live`,`Upcoming`,`Closed`,`Awarded`],states:[`Live`,`Upcoming`,`Closed`,`Awarded`],tokens:[`--brand-en-vivo`,`--color-status-live`,`--type-label`],notes:`Live incluye CountdownTimer + dot rojo animado.`,width:`744px`,height:`40px`},BidForm:{description:`Formulario de oferta. Componente de mayor criticidad — errores tienen consecuencias económicas.`,figma:`Bidder / Form / {State}`,react:`<BidForm lotId={id} minimumBid={amount} />`,variants:[`Default`,`Active`,`Submitting`,`Success`,`Error`],states:[`Default`,`Active`,`Submitting`,`Success`,`Error`],tokens:[`--color-action-accent`,`--font-mono (monto)`,`APCA Lc 90 (contraste)`],notes:`Monto en Roboto Mono + tabular-nums. Validación en tiempo real. Confirmar con Modal antes de ejecutar.`,width:`300px`,height:`~120px`},VehicleSpecsRow:{description:`Fila de especificaciones técnicas: año, km, transmisión, combustible. Datos tabulares.`,figma:`Vehicle / SpecsRow / {Density}`,react:`<VehicleSpecsRow specs={vehicle.specs} density="compact" />`,variants:[`Default (3-4 specs)`,`Compact (2 specs)`,`Full (tabla completa)`],states:[`Default`],tokens:[`--type-label`,`--type-body-sm`,`--color-text-muted`],width:`100%`,height:`56px`},AuctionActionBar:{description:`Fila de CTAs secundarias del flujo de puja debajo del BidForm principal.`,figma:`Auction / ActionBar / {State}`,react:`<AuctionActionBar lotId={id} hasReservePrice offerCount={3} />`,variants:[`Full (3 acciones)`,`Compact (2 acciones)`,`Minimal (solo guardar)`],states:[`Default`,`Disabled`,`Loading`],tokens:[`--color-surface-input`,`--color-action-primary`,`--type-label`,`--radius-sm`],notes:`Oculto cuando status=Closed o Upcoming.`,width:`300px`,height:`40px`},Accordion:{description:`Contenido expandible/colapsable. Para specs técnicas detalladas y condiciones.`,figma:`Navigation / Accordion / {State}`,react:`<Accordion items={[...]} defaultOpen={0} />`,variants:[`Vehicular`,`Description`,`Location`,`CyT`,`Más info`],states:[`Collapsed`,`Expanded`,`Disabled`],tokens:[`--color-border-ghost`,`--duration-standard`,`--radius-sm`],notes:`Patrón Dot Notation: Accordion.Item, Accordion.Trigger, Accordion.Content.`,width:`100%`,height:`variable`},HelpCenterBanner:{description:`Franja promocional persistente al final del contenido. Lleva al centro de ayuda.`,figma:`Content / HelpCenterBanner`,react:`<HelpCenterBanner ctaHref="/ayuda" />`,variants:[`Default`,`Compact`],states:[`Default`],tokens:[`--color-surface-section`,`--type-help-heading (18px ExtraBold)`,`--color-action-primary`],notes:`Avatar size=lg. CTA usa Button variant=secondary.`,width:`744px`,height:`~80px`},DocumentDownloadRow:{description:`Fila de descarga: ícono de tipo + label del documento + botón Descargar.`,figma:`Content / DocumentDownloadRow / {State}`,react:`<DocumentDownloadRow label="Términos de la oferta" href={url} />`,variants:[`Default`,`WithFileType`],states:[`Default`,`Hover`,`Loading`,`Downloaded`],tokens:[`--color-surface-section`,`--color-action-primary`,`--type-body-sm`,`--radius-sm`],notes:`Sin border — fondo --color-surface-section define límite (regla No-Line).`,width:`100%`,height:`48px`},Button:{description:`Elemento de acción primario. Toda acción ejecutable usa Button.`,figma:`Actions / Button / {Variant} / {State}`,react:`<Button variant="primary" size="md" />`,variants:[`Primary`,`Secondary`,`Tertiary`,`Destructive`],states:[`Default`,`Hover`,`Focus`,`Active`,`Disabled`,`Loading`],tokens:[`--color-action-primary`,`--color-surface-hero-gradient`,`--radius-sm`,`--type-label`],notes:`Primary usa gradient. CTA usa --color-action-cta. Alturas: sm=32px, md=40px, lg=48px.`,width:`variable`,height:`32–48px`},Badge:{description:`Indicador de estado o categoría. Siempre pequeño, legible, alto contraste.`,figma:`Display / Badge / {Type} / {State}`,react:`<Badge type="live" />`,variants:[`Live`,`Negotiable`,`Closed`,`Upcoming`,`New`,`Featured`],states:[`Default`,`Disabled`],tokens:[`--type-badge (10px Bold UC)`,`--radius-full`,`--brand-en-vivo`,`--brand-negociable`],notes:`Live: fondo --orange-500. Negotiable: fondo --cyan-400. Texto siempre uppercase.`,width:`variable`,height:`20px`},PriceDisplay:{description:`Muestra valores monetarios. Siempre tabular-nums. Siempre con label de contexto.`,figma:`Display / PriceDisplay / {Context} / {Size}`,react:`<PriceDisplay context="hero" amount={15000} currency="USD" />`,variants:[`Hero (30px)`,`Card (16px)`,`Compact (12px)`],states:[`Default`,`Loading`],tokens:[`--type-hero-title / --type-card-featured`,`tabular-nums`,`--weight-extrabold`],notes:`Nunca mostrar precio sin label (PRECIO BASE, OFERTA ACTUAL).`,width:`variable`,height:`variable`},CountdownTimer:{description:`Timer en tiempo real. Dato crítico — contraste APCA Lc 90. tabular-nums + Roboto Mono.`,figma:`Display / CountdownTimer / {State}`,react:`<CountdownTimer endsAt={timestamp} />`,variants:[`Default`,`Urgent (< 1h)`,`Expired`],states:[`Default`,`Urgent`,`Expired`],tokens:[`--font-mono`,`--type-hero-timer (30px ExtraBold)`,`--color-text-accent`],notes:`Urgent activa --cyan-400. Expired muestra "CERRADO" en --gray-500.`,width:`variable`,height:`variable`},DataQualityBadge:{description:`Indicador de completitud del expediente del lote. N puntos coloreados por score.`,figma:`Display / DataQualityBadge / {Level}`,react:`<DataQualityBadge level="high" />`,variants:[`High (3 dots verdes)`,`Medium (verde + amber)`,`Low (amber o red)`],states:[`Default`,`Disabled`],tokens:[`--color-status-success`,`--color-status-warning`,`--color-status-error`],notes:`Cada dot: 8×8px, --radius-full. Siempre con label "Calidad de información".`,width:`variable`,height:`24px`},Image:{description:`Componente base de imagen. Maneja aspect ratio, estado de carga y fallback.`,figma:`Display / Image / {AspectRatio} / {State}`,react:`<Image src={url} aspectRatio="16/9" alt="..." />`,variants:[`Square (1:1)`,`Landscape (16:9)`,`Portrait (3:4)`],states:[`Default`,`Loading`,`Error (fallback)`],tokens:[`--radius-sm`,`--gray-100 (fondo loading)`],width:`variable`,height:`aspect-ratio`},Avatar:{description:`Imagen de perfil del usuario o vendedor. Usado en SellerCard, Header, help banners.`,figma:`Display / Avatar / {Size}`,react:`<Avatar src={url} size="md" fallback="JR" />`,variants:[`sm (24px)`,`md (40px)`,`lg (56px)`],states:[`Default`,`Loading`,`Fallback (iniciales)`],tokens:[`--radius-full`,`--color-surface-section`],width:`24–56px`,height:`24–56px`}},sa={L0:`bg-[var(--gray-100)] text-[var(--gray-500)]`,L1:`bg-[oklch(0.761_0.130_197.000/0.15)] text-[var(--cyan-400)]`,L2:`bg-[oklch(0.724_0.154_55.200/0.15)] text-[var(--orange-500)]`,L3:`bg-[oklch(0.335_0.163_289.500/0.12)] text-[var(--purple-600)]`,L4:`bg-[oklch(0.242_0.138_286.500/0.15)] text-[var(--purple-800)]`},N={L0:`Primitiva`,L1:`Elemento`,L2:`Componente`,L3:`Bloque`,L4:`Layout`},ca=[`L4`,`L3`,`L2`,`L1`];function la({config:e,activeComp:t,onSelect:n}){return(0,y.jsxs)(`nav`,{className:`w-[220px] shrink-0 sticky top-0 h-screen overflow-y-auto flex flex-col bg-white border-r border-[var(--gray-100)]`,"aria-label":`Componentes de ${e.title}`,children:[(0,y.jsxs)(`div`,{className:`px-4 py-5 border-b border-[var(--gray-100)]`,children:[(0,y.jsxs)(`a`,{href:`#/`,className:`flex items-center gap-1.5 text-[11px] text-[var(--gray-400)] hover:text-[var(--purple-600)] no-underline mb-3 transition-colors`,children:[(0,y.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M8 2L4 6l4 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),`Documentación`]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-2 mb-0.5`,children:[(0,y.jsx)(`div`,{className:`size-6 rounded bg-[var(--cyan-400)] flex items-center justify-center shrink-0`,children:(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M2 7l2.5 4 2.5-4 2.5 4L12 7`,stroke:`white`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,y.jsxs)(`span`,{className:`font-bold text-[13px] text-[var(--purple-900)]`,children:[`VMC `,(0,y.jsx)(`span`,{className:`text-[var(--cyan-400)]`,children:`Design`})]})]}),(0,y.jsxs)(`p`,{className:`text-[10px] text-[var(--gray-400)] pl-8`,children:[`Frame · `,e.title]})]}),(0,y.jsx)(`div`,{className:`px-4 py-3 border-b border-[var(--gray-100)] flex gap-3`,children:[{label:`Total`,value:`${e.totalWidth}px`},{label:`Sidebar`,value:`${e.sidebarWidth}px`},{label:`Contenido`,value:`${e.contentWidth}px`}].map(e=>(0,y.jsxs)(`div`,{className:`flex flex-col`,children:[(0,y.jsx)(`span`,{className:`text-[8px] font-bold uppercase tracking-wider text-[var(--gray-400)]`,children:e.label}),(0,y.jsx)(`span`,{className:`text-[11px] font-bold text-[var(--purple-900)] tabular-nums`,children:e.value})]},e.label))}),(0,y.jsxs)(`div`,{className:`flex-1 overflow-y-auto py-3 px-2`,children:[(0,y.jsxs)(`p`,{className:`text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] px-2 mb-2`,children:[e.components.length,` componentes`]}),ca.map(r=>{let i=e.components.filter(e=>e.layer===r);return i.length?(0,y.jsxs)(`div`,{className:`mb-3`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-1.5 px-2 mb-1`,children:[(0,y.jsx)(`span`,{className:`text-[9px] font-bold px-1.5 py-0.5 rounded ${sa[r]}`,children:r}),(0,y.jsx)(`span`,{className:`text-[9px] text-[var(--gray-400)]`,children:N[r]})]}),i.map(e=>(0,y.jsxs)(`button`,{type:`button`,onClick:()=>n(e.name),className:[`w-full flex items-center justify-between px-2 py-1.5 rounded-md text-left transition-all duration-100 border-0 cursor-pointer`,t===e.name?`bg-[var(--purple-800)] text-white`:`bg-transparent text-[var(--gray-600)] hover:bg-[var(--gray-50)] hover:text-[var(--gray-700)]`].join(` `),children:[(0,y.jsx)(`span`,{className:`text-[11px] font-medium`,children:e.name}),e.count&&e.count>1&&(0,y.jsxs)(`span`,{className:`text-[9px] font-bold tabular-nums ${t===e.name?`text-white/60`:`text-[var(--gray-400)]`}`,children:[`×`,e.count]})]},e.name))]},r):null})]}),e.figmaUrl&&(0,y.jsx)(`div`,{className:`px-4 py-3 border-t border-[var(--gray-100)]`,children:(0,y.jsxs)(`a`,{href:e.figmaUrl,target:`_blank`,rel:`noopener noreferrer`,className:`flex items-center gap-1.5 text-[11px] font-semibold text-[var(--purple-600)] no-underline hover:underline`,children:[(0,y.jsx)(`svg`,{width:`11`,height:`11`,viewBox:`0 0 12 12`,fill:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M4.5 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7.5M7.5 1H11m0 0v3.5M11 1 5.5 6.5`,stroke:`currentColor`,strokeWidth:`1.2`,strokeLinecap:`round`,strokeLinejoin:`round`})}),`Ver en Figma`]})})]})}function ua({name:e,layer:t,count:n}){return(0,y.jsxs)(`div`,{className:`bg-white rounded-xl border border-[var(--gray-100)] p-6`,children:[(0,y.jsx)(`div`,{className:`flex items-start justify-between mb-4`,children:(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-2 mb-1`,children:[(0,y.jsx)(`span`,{className:`text-[9px] font-bold px-1.5 py-0.5 rounded ${sa[t]}`,children:t}),(0,y.jsx)(`span`,{className:`text-[10px] text-[var(--gray-400)]`,children:N[t]})]}),(0,y.jsx)(`h2`,{className:`text-[22px] font-bold text-[var(--purple-900)] m-0`,children:e}),n&&n>1&&(0,y.jsxs)(`p`,{className:`text-[12px] text-[var(--gray-400)] mt-1`,children:[`Aparece `,(0,y.jsxs)(`strong`,{className:`text-[var(--purple-600)]`,children:[n,`×`]}),` en este frame`]})]})}),(0,y.jsxs)(`div`,{className:`bg-[var(--gray-50)] rounded-lg p-4 text-[12px] text-[var(--gray-500)]`,children:[`Selecciona un componente en el sidebar para ver su detalle. Ve a`,` `,(0,y.jsx)(`a`,{href:`#/`,className:`text-[var(--purple-600)] no-underline hover:underline`,children:`Documentación`}),` `,`para ver la implementación completa de `,(0,y.jsx)(`strong`,{children:e}),`.`]})]})}function da({components:e}){let[t,n]=(0,_.useState)(null),r=e=>n(t=>t===e?null:e);return(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] px-8 mb-3`,children:[`Inventario completo — `,e.length,` componentes`]}),(0,y.jsx)(`div`,{className:`border-y border-[var(--gray-100)] bg-white`,children:e.map((n,i)=>{let a=oa[n.name],o=t===n.name;return(0,y.jsxs)(`div`,{style:{borderBottom:i===e.length-1?`none`:`1px solid var(--gray-100)`},children:[(0,y.jsxs)(`button`,{type:`button`,onClick:()=>r(n.name),className:`w-full flex items-center gap-3 px-4 py-3 text-left border-0 cursor-pointer transition-colors duration-150 bg-transparent hover:bg-[var(--gray-50)]`,"aria-expanded":o,children:[(0,y.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,className:`shrink-0 transition-transform duration-200`,style:{transform:o?`rotate(90deg)`:`rotate(0deg)`,color:`var(--gray-400)`},children:(0,y.jsx)(`path`,{d:`M5 3l4 4-4 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,y.jsx)(`span`,{className:`flex-1 text-[13px] font-medium text-[var(--gray-700)]`,children:n.name}),(()=>{let e=oa[n.name];return e?.width?(0,y.jsxs)(`span`,{className:`text-[10px] font-mono tabular-nums text-[var(--gray-400)] shrink-0 w-[130px] text-right`,children:[e.width,` × `,e.height??`—`]}):null})(),(0,y.jsx)(`span`,{className:`text-[9px] font-bold px-1.5 py-0.5 rounded ${sa[n.layer]}`,children:n.layer}),(0,y.jsx)(`span`,{className:`text-[10px] text-[var(--gray-400)] w-[72px]`,children:N[n.layer]}),(0,y.jsx)(`span`,{className:`text-[12px] font-bold tabular-nums text-[var(--gray-500)] w-6 text-right`,children:n.count??1})]}),o&&(0,y.jsx)(`div`,{className:`bg-[var(--gray-50)] border-t border-[var(--gray-100)]`,children:a?(0,y.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[Xi[n.name]&&(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] px-4 pt-4 mb-0`,children:`Preview`}),(0,y.jsx)(`div`,{style:{background:`white`},children:Xi[n.name]})]}),(0,y.jsxs)(`div`,{className:`px-4 pb-4 flex flex-col gap-4`,children:[(0,y.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,y.jsx)(`p`,{className:`text-[12px] text-[var(--gray-600)] leading-5 m-0 flex-1`,children:a.description}),a.width&&(0,y.jsx)(`div`,{className:`flex flex-col items-end shrink-0 gap-1`,children:(0,y.jsxs)(`div`,{className:`flex gap-3`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col items-center`,children:[(0,y.jsx)(`span`,{className:`text-[8px] font-bold uppercase tracking-wider text-[var(--gray-400)]`,children:`W`}),(0,y.jsx)(`span`,{className:`text-[11px] font-mono font-bold text-[var(--purple-700)] tabular-nums`,children:a.width})]}),(0,y.jsx)(`div`,{className:`text-[var(--gray-300)] text-[10px] self-end mb-0.5`,children:`×`}),(0,y.jsxs)(`div`,{className:`flex flex-col items-center`,children:[(0,y.jsx)(`span`,{className:`text-[8px] font-bold uppercase tracking-wider text-[var(--gray-400)]`,children:`H`}),(0,y.jsx)(`span`,{className:`text-[11px] font-mono font-bold text-[var(--purple-700)] tabular-nums`,children:a.height??`—`})]})]})})]}),(0,y.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-2`,children:`Variantes`}),(0,y.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,children:a.variants.map(e=>(0,y.jsx)(`span`,{className:`text-[10px] px-2 py-0.5 rounded-full bg-white border border-[var(--gray-200)] text-[var(--gray-600)]`,children:e},e))})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-2`,children:`Estados`}),(0,y.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,children:a.states.map(e=>(0,y.jsx)(`span`,{className:`text-[10px] px-2 py-0.5 rounded-full bg-white border border-[var(--gray-200)] text-[var(--gray-600)]`,children:e},e))})]})]}),(0,y.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-1`,children:`Figma`}),(0,y.jsx)(`code`,{className:`text-[10px] text-[var(--purple-600)] bg-white px-2 py-1 rounded border border-[var(--gray-200)] block`,children:a.figma})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-1`,children:`React`}),(0,y.jsx)(`code`,{className:`text-[10px] text-[var(--cyan-400)] bg-white px-2 py-1 rounded border border-[var(--gray-200)] block`,children:a.react})]})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-2`,children:`Tokens clave`}),(0,y.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,children:a.tokens.map(e=>(0,y.jsx)(`span`,{className:`text-[10px] font-mono px-2 py-0.5 rounded bg-[oklch(0.335_0.163_289.500/0.08)] text-[var(--purple-600)] border border-[oklch(0.335_0.163_289.500/0.15)]`,children:e},e))})]}),a.notes&&(0,y.jsxs)(`div`,{className:`flex gap-2 bg-white rounded-lg border border-[var(--gray-200)] px-3 py-2.5`,children:[(0,y.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,"aria-hidden":`true`,className:`shrink-0 mt-0.5`,children:[(0,y.jsx)(`circle`,{cx:`7`,cy:`7`,r:`6`,stroke:`var(--cyan-400)`,strokeWidth:`1.2`}),(0,y.jsx)(`path`,{d:`M7 6v4M7 4.5v.5`,stroke:`var(--cyan-400)`,strokeWidth:`1.2`,strokeLinecap:`round`})]}),(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-500)] leading-4 m-0`,children:a.notes})]})]})]}):(0,y.jsx)(`div`,{className:`px-4 pb-4 pt-3`,children:(0,y.jsx)(`p`,{className:`text-[11px] text-[var(--gray-400)] m-0`,children:`Detalle pendiente de documentar en VOYAGER.md.`})})})]},n.name)})})]})}function fa({config:e}){let t=aa[e.id];return(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`px-8 pt-10 pb-6`,children:[(0,y.jsxs)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--orange-500)] mb-1`,children:[`Frame · `,e.totalWidth,`px`]}),(0,y.jsx)(`h1`,{className:`text-[26px] font-bold text-[var(--purple-900)] leading-tight mb-1`,children:e.title}),(0,y.jsx)(`p`,{className:`text-[13px] text-[var(--gray-500)] leading-5 max-w-[560px] m-0`,children:e.subtitle}),(0,y.jsx)(`div`,{className:`flex gap-6 mt-4`,children:[{label:`Frame total`,value:`${e.totalWidth}px`},{label:`Sidebar`,value:`${e.sidebarWidth}px`},{label:`Contenido`,value:`${e.contentWidth}px`},{label:`Componentes`,value:`${e.components.length}`}].map(e=>(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:`text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-0.5`,children:e.label}),(0,y.jsx)(`p`,{className:`text-[16px] font-bold text-[var(--purple-900)] tabular-nums m-0`,children:e.value})]},e.label))})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`p`,{className:`text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] px-8 mb-3`,children:[`Frame completo — `,e.totalWidth,`px`]}),(0,y.jsx)(`div`,{style:{background:`var(--gray-200)`,padding:`24px 0`,display:`flex`,justifyContent:`center`},children:t?(0,y.jsx)(`div`,{style:{width:`${e.totalWidth}px`,flexShrink:0,boxShadow:`0 8px 40px rgba(0,0,0,0.18)`},children:(0,y.jsx)(t,{})}):(0,y.jsx)(`div`,{style:{width:`${e.totalWidth}px`,height:`400px`,background:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,y.jsx)(`p`,{style:{fontSize:`12px`,color:`var(--gray-400)`},children:`Ensamblado de frame no disponible`})})})]}),(0,y.jsx)(`div`,{className:`py-8`,children:(0,y.jsx)(da,{components:e.components})})]})}function P({config:e}){let[t,n]=(0,_.useState)(null);(0,_.useEffect)(()=>{n(null)},[e.id]);let r=t?e.components.find(e=>e.name===t)??null:null;return(0,y.jsxs)(`div`,{className:`flex bg-[var(--gray-50)]`,style:{minWidth:220+e.totalWidth+48,minHeight:`100vh`},children:[(0,y.jsx)(`div`,{className:`sticky top-0 h-screen shrink-0 overflow-y-auto`,children:(0,y.jsx)(la,{config:e,activeComp:t,onSelect:n})}),(0,y.jsx)(`main`,{className:`flex-1`,children:r?(0,y.jsx)(`div`,{className:`py-10 px-8`,children:(0,y.jsx)(ua,{...r})}):(0,y.jsx)(fa,{config:e})})]})}function pa(){let{version:e,setVersion:t}=me(),n=e===`upgrade`;return(0,y.jsxs)(`div`,{style:{position:`fixed`,bottom:`24px`,right:`24px`,zIndex:9999,display:`flex`,alignItems:`center`,gap:`0`,background:`#1a1a2e`,border:`1px solid #333`,borderRadius:`999px`,padding:`4px`,boxShadow:`0 4px 20px rgba(0,0,0,0.4)`,fontFamily:`sans-serif`,fontSize:`12px`,fontWeight:600,userSelect:`none`},children:[(0,y.jsx)(`button`,{onClick:()=>t(`original`),style:{padding:`6px 16px`,borderRadius:`999px`,border:`none`,cursor:`pointer`,background:n?`transparent`:`#ffffff`,color:n?`#888`:`#1a1a2e`,transition:`all 0.2s`,fontWeight:600,fontSize:`12px`},children:`Original`}),(0,y.jsx)(`button`,{onClick:()=>t(`upgrade`),style:{padding:`6px 16px`,borderRadius:`999px`,border:`none`,cursor:`pointer`,background:n?`#6c63ff`:`transparent`,color:n?`#ffffff`:`#888`,transition:`all 0.2s`,fontWeight:600,fontSize:`12px`},children:`Upgrade`})]})}var ma={homepage:{id:`homepage`,title:`Homepage`,subtitle:`Página principal. Hero con lote destacado + countdown. Secciones por rematador con carrusel horizontal de VehicleCards.`,figmaUrl:`https://www.figma.com/design/yt3TvHt7q5PpPrJvmnvi6b/VMC-2026---DESIGN-SYSTEM?node-id=1-615`,totalWidth:1024,sidebarWidth:140,contentWidth:884,components:[{name:`PageLayout`,layer:`L4`},{name:`Header`,layer:`L4`},{name:`Sidebar`,layer:`L4`},{name:`HeroSection`,layer:`L4`},{name:`Footer`,layer:`L4`},{name:`AuctionCard (Featured)`,layer:`L3`},{name:`AuctioneerSection`,layer:`L3`,count:2},{name:`VehicleCard`,layer:`L3`,count:8},{name:`SubascoinsPromoBanner`,layer:`L3`},{name:`HelpCenterBanner`,layer:`L2`},{name:`Button`,layer:`L1`,count:2},{name:`Badge`,layer:`L1`,count:3},{name:`CountdownTimer`,layer:`L1`},{name:`PriceDisplay`,layer:`L1`,count:5},{name:`Image`,layer:`L1`,count:9}],layoutSlots:[{label:`HeroSection — headline + countdown + AuctionCard Featured`,color:`var(--purple-900)`},{label:`SubascoinsPromoBanner`,color:`var(--orange-500)`},{label:`AuctioneerSection ×2 — VehicleCard ×8 — 196px/card`,color:`white`,textColor:`var(--gray-500)`},{label:`HelpCenterBanner`,color:`var(--gray-100)`,textColor:`var(--gray-500)`}]},detalle:{id:`detalle`,title:`Detalle de Lote`,subtitle:`Página de detalle de un lote de subasta. Galería de imágenes + widget de puja + specs técnicas + documentos + ofertas relacionadas.`,totalWidth:1024,sidebarWidth:140,contentWidth:884,components:[{name:`PageLayout`,layer:`L4`},{name:`Header`,layer:`L4`},{name:`Sidebar`,layer:`L4`},{name:`Footer`,layer:`L4`},{name:`VehicleImageGallery`,layer:`L3`},{name:`AuctionSummaryWidget`,layer:`L3`},{name:`AuctionStatusBanner`,layer:`L3`},{name:`BidForm`,layer:`L3`},{name:`VehicleSpecsRow`,layer:`L3`},{name:`AuctionActionBar`,layer:`L3`},{name:`AuctioneerSection`,layer:`L3`},{name:`SubascoinsPromoBanner`,layer:`L3`},{name:`Accordion`,layer:`L2`,count:2},{name:`HelpCenterBanner`,layer:`L2`},{name:`DocumentDownloadRow`,layer:`L2`,count:3},{name:`Button`,layer:`L1`,count:4},{name:`Badge`,layer:`L1`,count:2},{name:`PriceDisplay`,layer:`L1`},{name:`CountdownTimer`,layer:`L1`},{name:`DataQualityBadge`,layer:`L1`},{name:`Image`,layer:`L1`,count:5},{name:`Avatar`,layer:`L1`}],layoutSlots:[{label:`VehicleImageGallery + AuctionSummaryWidget (BidForm + AuctionStatusBanner)`,color:`white`,textColor:`var(--gray-500)`},{label:`SubascoinsPromoBanner`,color:`var(--orange-500)`},{label:`Accordion — VehicleSpecsRow — DataQualityBadge — DocumentDownloadRow ×3`,color:`white`,textColor:`var(--gray-500)`},{label:`AuctioneerSection — VehicleCard ×4`,color:`white`,textColor:`var(--gray-500)`},{label:`HelpCenterBanner`,color:`var(--gray-100)`,textColor:`var(--gray-500)`}]}};function ha(){let e=()=>window.location.hash.replace(/^#\/?/,``)||``,[t,n]=(0,_.useState)(e);return(0,_.useEffect)(()=>{let t=()=>n(e());return window.addEventListener(`hashchange`,t),()=>window.removeEventListener(`hashchange`,t)},[]),t}function ga(){let e=ha();if(e.startsWith(`frames/`)){let t=ma[e.replace(`frames/`,``)];if(t)return(0,y.jsx)(P,{config:t})}return(0,y.jsx)(Ai,{})}function _a(){return(0,y.jsxs)(pe,{children:[(0,y.jsx)(ga,{}),(0,y.jsx)(pa,{})]})}(0,g.createRoot)(document.getElementById(`root`)).render((0,y.jsx)(_.StrictMode,{children:(0,y.jsx)(_a,{})}));