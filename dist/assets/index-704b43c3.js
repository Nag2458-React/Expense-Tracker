(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function C1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xg={exports:{}},vl={},Pg={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),R1=Symbol.for("react.portal"),x1=Symbol.for("react.fragment"),P1=Symbol.for("react.strict_mode"),k1=Symbol.for("react.profiler"),N1=Symbol.for("react.provider"),V1=Symbol.for("react.context"),D1=Symbol.for("react.forward_ref"),L1=Symbol.for("react.suspense"),b1=Symbol.for("react.memo"),O1=Symbol.for("react.lazy"),ip=Symbol.iterator;function M1(t){return t===null||typeof t!="object"?null:(t=ip&&t[ip]||t["@@iterator"],typeof t=="function"?t:null)}var kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ng=Object.assign,Vg={};function bi(t,e,n){this.props=t,this.context=e,this.refs=Vg,this.updater=n||kg}bi.prototype.isReactComponent={};bi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dg(){}Dg.prototype=bi.prototype;function Ch(t,e,n){this.props=t,this.context=e,this.refs=Vg,this.updater=n||kg}var Rh=Ch.prototype=new Dg;Rh.constructor=Ch;Ng(Rh,bi.prototype);Rh.isPureReactComponent=!0;var sp=Array.isArray,Lg=Object.prototype.hasOwnProperty,xh={current:null},bg={key:!0,ref:!0,__self:!0,__source:!0};function Og(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Lg.call(e,r)&&!bg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:po,type:t,key:s,ref:o,props:i,_owner:xh.current}}function F1(t,e){return{$$typeof:po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ph(t){return typeof t=="object"&&t!==null&&t.$$typeof===po}function j1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var op=/\/+/g;function Tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?j1(""+t.key):e.toString(36)}function fa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case po:case R1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Tu(o,0):r,sp(i)?(n="",t!=null&&(n=t.replace(op,"$&/")+"/"),fa(i,e,n,"",function(c){return c})):i!=null&&(Ph(i)&&(i=F1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(op,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",sp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Tu(s,l);o+=fa(s,e,n,u,i)}else if(u=M1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Tu(s,l++),o+=fa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zo(t,e,n){if(t==null)return t;var r=[],i=0;return fa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function U1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},da={transition:null},$1={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:da,ReactCurrentOwner:xh};function Mg(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:zo,forEach:function(t,e,n){zo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zo(t,function(){e++}),e},toArray:function(t){return zo(t,function(e){return e})||[]},only:function(t){if(!Ph(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=bi;te.Fragment=x1;te.Profiler=k1;te.PureComponent=Ch;te.StrictMode=P1;te.Suspense=L1;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$1;te.act=Mg;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ng({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Lg.call(e,u)&&!bg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:po,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:V1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:N1,_context:t},t.Consumer=t};te.createElement=Og;te.createFactory=function(t){var e=Og.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:D1,render:t}};te.isValidElement=Ph;te.lazy=function(t){return{$$typeof:O1,_payload:{_status:-1,_result:t},_init:U1}};te.memo=function(t,e){return{$$typeof:b1,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=da.transition;da.transition={};try{t()}finally{da.transition=e}};te.unstable_act=Mg;te.useCallback=function(t,e){return at.current.useCallback(t,e)};te.useContext=function(t){return at.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return at.current.useDeferredValue(t)};te.useEffect=function(t,e){return at.current.useEffect(t,e)};te.useId=function(){return at.current.useId()};te.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return at.current.useMemo(t,e)};te.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};te.useRef=function(t){return at.current.useRef(t)};te.useState=function(t){return at.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return at.current.useTransition()};te.version="18.3.1";Pg.exports=te;var D=Pg.exports;const ue=C1(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1=D,B1=Symbol.for("react.element"),H1=Symbol.for("react.fragment"),W1=Object.prototype.hasOwnProperty,q1=z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K1={key:!0,ref:!0,__self:!0,__source:!0};function Fg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)W1.call(e,r)&&!K1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:B1,type:t,key:s,ref:o,props:i,_owner:q1.current}}vl.Fragment=H1;vl.jsx=Fg;vl.jsxs=Fg;xg.exports=vl;var b=xg.exports,sc={},jg={exports:{}},wt={},Ug={exports:{}},$g={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var X=z.length;z.push(Q);e:for(;0<X;){var ge=X-1>>>1,Ae=z[ge];if(0<i(Ae,Q))z[ge]=Q,z[X]=Ae,X=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],X=z.pop();if(X!==Q){z[0]=X;e:for(var ge=0,Ae=z.length,pr=Ae>>>1;ge<pr;){var St=2*(ge+1)-1,mr=z[St],Vt=St+1,Rn=z[Vt];if(0>i(mr,X))Vt<Ae&&0>i(Rn,mr)?(z[ge]=Rn,z[Vt]=X,ge=Vt):(z[ge]=mr,z[St]=X,ge=St);else if(Vt<Ae&&0>i(Rn,X))z[ge]=Rn,z[Vt]=X,ge=Vt;else break e}}return Q}function i(z,Q){var X=z.sortIndex-Q.sortIndex;return X!==0?X:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,_=3,A=!1,R=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=z)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function V(z){if(x=!1,v(z),!R)if(n(u)!==null)R=!0,Cn(O);else{var Q=n(c);Q!==null&&an(V,Q.startTime-z)}}function O(z,Q){R=!1,x&&(x=!1,E(g),g=-1),A=!0;var X=_;try{for(v(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||z&&!C());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,_=p.priorityLevel;var Ae=ge(p.expirationTime<=Q);Q=t.unstable_now(),typeof Ae=="function"?p.callback=Ae:p===n(u)&&r(u),v(Q)}else r(u);p=n(u)}if(p!==null)var pr=!0;else{var St=n(c);St!==null&&an(V,St.startTime-Q),pr=!1}return pr}finally{p=null,_=X,A=!1}}var j=!1,w=null,g=-1,T=5,I=-1;function C(){return!(t.unstable_now()-I<T)}function k(){if(w!==null){var z=t.unstable_now();I=z;var Q=!0;try{Q=w(!0,z)}finally{Q?S():(j=!1,w=null)}}else j=!1}var S;if(typeof y=="function")S=function(){y(k)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,mt=Ne.port2;Ne.port1.onmessage=k,S=function(){mt.postMessage(null)}}else S=function(){P(k,0)};function Cn(z){w=z,j||(j=!0,S())}function an(z,Q){g=P(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){R||A||(R=!0,Cn(O))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(_){case 1:case 2:case 3:var Q=3;break;default:Q=_}var X=_;_=Q;try{return z()}finally{_=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=_;_=z;try{return Q()}finally{_=X}},t.unstable_scheduleCallback=function(z,Q,X){var ge=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ge+X:ge):X=ge,z){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=X+Ae,z={id:d++,callback:Q,priorityLevel:z,startTime:X,expirationTime:Ae,sortIndex:-1},X>ge?(z.sortIndex=X,e(c,z),n(u)===null&&z===n(c)&&(x?(E(g),g=-1):x=!0,an(V,X-ge))):(z.sortIndex=Ae,e(u,z),R||A||(R=!0,Cn(O))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var Q=_;return function(){var X=_;_=Q;try{return z.apply(this,arguments)}finally{_=X}}}})($g);Ug.exports=$g;var Q1=Ug.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1=D,Et=Q1;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zg=new Set,Ms={};function jr(t,e){Ii(t,e),Ii(t+"Capture",e)}function Ii(t,e){for(Ms[t]=e,t=0;t<e.length;t++)zg.add(e[t])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oc=Object.prototype.hasOwnProperty,Y1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ap={},lp={};function X1(t){return oc.call(lp,t)?!0:oc.call(ap,t)?!1:Y1.test(t)?lp[t]=!0:(ap[t]=!0,!1)}function J1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Z1(t,e,n,r){if(e===null||typeof e>"u"||J1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var kh=/[\-:]([a-z])/g;function Nh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kh,Nh);qe[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kh,Nh);qe[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kh,Nh);qe[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vh(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Z1(e,n,i,r)&&(n=null),r||i===null?X1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var In=G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bo=Symbol.for("react.element"),ti=Symbol.for("react.portal"),ni=Symbol.for("react.fragment"),Dh=Symbol.for("react.strict_mode"),ac=Symbol.for("react.profiler"),Bg=Symbol.for("react.provider"),Hg=Symbol.for("react.context"),Lh=Symbol.for("react.forward_ref"),lc=Symbol.for("react.suspense"),uc=Symbol.for("react.suspense_list"),bh=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),Wg=Symbol.for("react.offscreen"),up=Symbol.iterator;function as(t){return t===null||typeof t!="object"?null:(t=up&&t[up]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Su;function ys(t){if(Su===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Su=e&&e[1]||""}return`
`+Su+t}var Iu=!1;function Au(t,e){if(!t||Iu)return"";Iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ys(t):""}function eE(t){switch(t.tag){case 5:return ys(t.type);case 16:return ys("Lazy");case 13:return ys("Suspense");case 19:return ys("SuspenseList");case 0:case 2:case 15:return t=Au(t.type,!1),t;case 11:return t=Au(t.type.render,!1),t;case 1:return t=Au(t.type,!0),t;default:return""}}function cc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ni:return"Fragment";case ti:return"Portal";case ac:return"Profiler";case Dh:return"StrictMode";case lc:return"Suspense";case uc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hg:return(t.displayName||"Context")+".Consumer";case Bg:return(t._context.displayName||"Context")+".Provider";case Lh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bh:return e=t.displayName||null,e!==null?e:cc(t.type)||"Memo";case bn:e=t._payload,t=t._init;try{return cc(t(e))}catch{}}return null}function tE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cc(e);case 8:return e===Dh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nE(t){var e=qg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ho(t){t._valueTracker||(t._valueTracker=nE(t))}function Kg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Va(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hc(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qg(t,e){e=e.checked,e!=null&&Vh(t,"checked",e,!1)}function fc(t,e){Qg(t,e);var n=tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dc(t,e.type,n):e.hasOwnProperty("defaultValue")&&dc(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dc(t,e,n){(e!=="number"||Va(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _s=Array.isArray;function di(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function pc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(_s(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function Gg(t,e){var n=tr(e.value),r=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Yg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Yg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wo,Xg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wo=Wo||document.createElement("div"),Wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rE=["Webkit","ms","Moz","O"];Object.keys(Is).forEach(function(t){rE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Is[e]=Is[t]})});function Jg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Is.hasOwnProperty(t)&&Is[t]?(""+e).trim():e+"px"}function Zg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var iE=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gc(t,e){if(e){if(iE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function yc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _c=null;function Oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vc=null,pi=null,mi=null;function pp(t){if(t=yo(t)){if(typeof vc!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Il(e),vc(t.stateNode,t.type,e))}}function ey(t){pi?mi?mi.push(t):mi=[t]:pi=t}function ty(){if(pi){var t=pi,e=mi;if(mi=pi=null,pp(t),e)for(t=0;t<e.length;t++)pp(e[t])}}function ny(t,e){return t(e)}function ry(){}var Cu=!1;function iy(t,e,n){if(Cu)return t(e,n);Cu=!0;try{return ny(t,e,n)}finally{Cu=!1,(pi!==null||mi!==null)&&(ry(),ty())}}function js(t,e){var n=t.stateNode;if(n===null)return null;var r=Il(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Ec=!1;if(mn)try{var ls={};Object.defineProperty(ls,"passive",{get:function(){Ec=!0}}),window.addEventListener("test",ls,ls),window.removeEventListener("test",ls,ls)}catch{Ec=!1}function sE(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var As=!1,Da=null,La=!1,wc=null,oE={onError:function(t){As=!0,Da=t}};function aE(t,e,n,r,i,s,o,l,u){As=!1,Da=null,sE.apply(oE,arguments)}function lE(t,e,n,r,i,s,o,l,u){if(aE.apply(this,arguments),As){if(As){var c=Da;As=!1,Da=null}else throw Error(U(198));La||(La=!0,wc=c)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mp(t){if(Ur(t)!==t)throw Error(U(188))}function uE(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return mp(i),t;if(s===r)return mp(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function oy(t){return t=uE(t),t!==null?ay(t):null}function ay(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ay(t);if(e!==null)return e;t=t.sibling}return null}var ly=Et.unstable_scheduleCallback,gp=Et.unstable_cancelCallback,cE=Et.unstable_shouldYield,hE=Et.unstable_requestPaint,Re=Et.unstable_now,fE=Et.unstable_getCurrentPriorityLevel,Mh=Et.unstable_ImmediatePriority,uy=Et.unstable_UserBlockingPriority,ba=Et.unstable_NormalPriority,dE=Et.unstable_LowPriority,cy=Et.unstable_IdlePriority,El=null,Qt=null;function pE(t){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(El,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:yE,mE=Math.log,gE=Math.LN2;function yE(t){return t>>>=0,t===0?32:31-(mE(t)/gE|0)|0}var qo=64,Ko=4194304;function vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=vs(l):(s&=o,s!==0&&(r=vs(s)))}else o=n&~i,o!==0?r=vs(o):s!==0&&(r=vs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function _E(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=_E(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Tc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hy(){var t=qo;return qo<<=1,!(qo&4194240)&&(qo=64),t}function Ru(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function EE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function fy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dy,jh,py,my,gy,Sc=!1,Qo=[],zn=null,Bn=null,Hn=null,Us=new Map,$s=new Map,Fn=[],wE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yp(t,e){switch(t){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":Us.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$s.delete(e.pointerId)}}function us(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=yo(e),e!==null&&jh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function TE(t,e,n,r,i){switch(e){case"focusin":return zn=us(zn,t,e,n,r,i),!0;case"dragenter":return Bn=us(Bn,t,e,n,r,i),!0;case"mouseover":return Hn=us(Hn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Us.set(s,us(Us.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$s.set(s,us($s.get(s)||null,t,e,n,r,i)),!0}return!1}function yy(t){var e=Ir(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=sy(n),e!==null){t.blockedOn=e,gy(t.priority,function(){py(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ic(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);_c=r,n.target.dispatchEvent(r),_c=null}else return e=yo(n),e!==null&&jh(e),t.blockedOn=n,!1;e.shift()}return!0}function _p(t,e,n){pa(t)&&n.delete(e)}function SE(){Sc=!1,zn!==null&&pa(zn)&&(zn=null),Bn!==null&&pa(Bn)&&(Bn=null),Hn!==null&&pa(Hn)&&(Hn=null),Us.forEach(_p),$s.forEach(_p)}function cs(t,e){t.blockedOn===e&&(t.blockedOn=null,Sc||(Sc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,SE)))}function zs(t){function e(i){return cs(i,t)}if(0<Qo.length){cs(Qo[0],t);for(var n=1;n<Qo.length;n++){var r=Qo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zn!==null&&cs(zn,t),Bn!==null&&cs(Bn,t),Hn!==null&&cs(Hn,t),Us.forEach(e),$s.forEach(e),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)yy(n),n.blockedOn===null&&Fn.shift()}var gi=In.ReactCurrentBatchConfig,Ma=!0;function IE(t,e,n,r){var i=ae,s=gi.transition;gi.transition=null;try{ae=1,Uh(t,e,n,r)}finally{ae=i,gi.transition=s}}function AE(t,e,n,r){var i=ae,s=gi.transition;gi.transition=null;try{ae=4,Uh(t,e,n,r)}finally{ae=i,gi.transition=s}}function Uh(t,e,n,r){if(Ma){var i=Ic(t,e,n,r);if(i===null)Mu(t,e,r,Fa,n),yp(t,r);else if(TE(i,t,e,n,r))r.stopPropagation();else if(yp(t,r),e&4&&-1<wE.indexOf(t)){for(;i!==null;){var s=yo(i);if(s!==null&&dy(s),s=Ic(t,e,n,r),s===null&&Mu(t,e,r,Fa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Mu(t,e,r,null,n)}}var Fa=null;function Ic(t,e,n,r){if(Fa=null,t=Oh(r),t=Ir(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fa=t,null}function _y(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fE()){case Mh:return 1;case uy:return 4;case ba:case dE:return 16;case cy:return 536870912;default:return 16}default:return 16}}var Un=null,$h=null,ma=null;function vy(){if(ma)return ma;var t,e=$h,n=e.length,r,i="value"in Un?Un.value:Un.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ma=i.slice(t,1<r?1-r:void 0)}function ga(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function vp(){return!1}function Tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Go:vp,this.isPropagationStopped=vp,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),e}var Oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zh=Tt(Oi),go=Te({},Oi,{view:0,detail:0}),CE=Tt(go),xu,Pu,hs,wl=Te({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hs&&(hs&&t.type==="mousemove"?(xu=t.screenX-hs.screenX,Pu=t.screenY-hs.screenY):Pu=xu=0,hs=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:Pu}}),Ep=Tt(wl),RE=Te({},wl,{dataTransfer:0}),xE=Tt(RE),PE=Te({},go,{relatedTarget:0}),ku=Tt(PE),kE=Te({},Oi,{animationName:0,elapsedTime:0,pseudoElement:0}),NE=Tt(kE),VE=Te({},Oi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DE=Tt(VE),LE=Te({},Oi,{data:0}),wp=Tt(LE),bE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ME={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ME[t])?!!e[t]:!1}function Bh(){return FE}var jE=Te({},go,{key:function(t){if(t.key){var e=bE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?OE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bh,charCode:function(t){return t.type==="keypress"?ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),UE=Tt(jE),$E=Te({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=Tt($E),zE=Te({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bh}),BE=Tt(zE),HE=Te({},Oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),WE=Tt(HE),qE=Te({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KE=Tt(qE),QE=[9,13,27,32],Hh=mn&&"CompositionEvent"in window,Cs=null;mn&&"documentMode"in document&&(Cs=document.documentMode);var GE=mn&&"TextEvent"in window&&!Cs,Ey=mn&&(!Hh||Cs&&8<Cs&&11>=Cs),Sp=String.fromCharCode(32),Ip=!1;function wy(t,e){switch(t){case"keyup":return QE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ty(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ri=!1;function YE(t,e){switch(t){case"compositionend":return Ty(e);case"keypress":return e.which!==32?null:(Ip=!0,Sp);case"textInput":return t=e.data,t===Sp&&Ip?null:t;default:return null}}function XE(t,e){if(ri)return t==="compositionend"||!Hh&&wy(t,e)?(t=vy(),ma=$h=Un=null,ri=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ey&&e.locale!=="ko"?null:e.data;default:return null}}var JE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!JE[t.type]:e==="textarea"}function Sy(t,e,n,r){ey(r),e=ja(e,"onChange"),0<e.length&&(n=new zh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Rs=null,Bs=null;function ZE(t){Ly(t,0)}function Tl(t){var e=oi(t);if(Kg(e))return t}function ew(t,e){if(t==="change")return e}var Iy=!1;if(mn){var Nu;if(mn){var Vu="oninput"in document;if(!Vu){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Vu=typeof Cp.oninput=="function"}Nu=Vu}else Nu=!1;Iy=Nu&&(!document.documentMode||9<document.documentMode)}function Rp(){Rs&&(Rs.detachEvent("onpropertychange",Ay),Bs=Rs=null)}function Ay(t){if(t.propertyName==="value"&&Tl(Bs)){var e=[];Sy(e,Bs,t,Oh(t)),iy(ZE,e)}}function tw(t,e,n){t==="focusin"?(Rp(),Rs=e,Bs=n,Rs.attachEvent("onpropertychange",Ay)):t==="focusout"&&Rp()}function nw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(Bs)}function rw(t,e){if(t==="click")return Tl(e)}function iw(t,e){if(t==="input"||t==="change")return Tl(e)}function sw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:sw;function Hs(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!oc.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pp(t,e){var n=xp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xp(n)}}function Cy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ry(){for(var t=window,e=Va();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Va(t.document)}return e}function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ow(t){var e=Ry(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cy(n.ownerDocument.documentElement,n)){if(r!==null&&Wh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pp(n,s);var o=Pp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var aw=mn&&"documentMode"in document&&11>=document.documentMode,ii=null,Ac=null,xs=null,Cc=!1;function kp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cc||ii==null||ii!==Va(r)||(r=ii,"selectionStart"in r&&Wh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xs&&Hs(xs,r)||(xs=r,r=ja(Ac,"onSelect"),0<r.length&&(e=new zh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ii)))}function Yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var si={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},Du={},xy={};mn&&(xy=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function Sl(t){if(Du[t])return Du[t];if(!si[t])return t;var e=si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in xy)return Du[t]=e[n];return t}var Py=Sl("animationend"),ky=Sl("animationiteration"),Ny=Sl("animationstart"),Vy=Sl("transitionend"),Dy=new Map,Np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){Dy.set(t,e),jr(e,[t])}for(var Lu=0;Lu<Np.length;Lu++){var bu=Np[Lu],lw=bu.toLowerCase(),uw=bu[0].toUpperCase()+bu.slice(1);hr(lw,"on"+uw)}hr(Py,"onAnimationEnd");hr(ky,"onAnimationIteration");hr(Ny,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(Vy,"onTransitionEnd");Ii("onMouseEnter",["mouseout","mouseover"]);Ii("onMouseLeave",["mouseout","mouseover"]);Ii("onPointerEnter",["pointerout","pointerover"]);Ii("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Es));function Vp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,lE(r,e,void 0,t),t.currentTarget=null}function Ly(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Vp(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Vp(i,l,c),s=u}}}if(La)throw t=wc,La=!1,wc=null,t}function fe(t,e){var n=e[Nc];n===void 0&&(n=e[Nc]=new Set);var r=t+"__bubble";n.has(r)||(by(e,t,2,!1),n.add(r))}function Ou(t,e,n){var r=0;e&&(r|=4),by(n,t,r,e)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function Ws(t){if(!t[Xo]){t[Xo]=!0,zg.forEach(function(n){n!=="selectionchange"&&(cw.has(n)||Ou(n,!1,t),Ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xo]||(e[Xo]=!0,Ou("selectionchange",!1,e))}}function by(t,e,n,r){switch(_y(e)){case 1:var i=IE;break;case 4:i=AE;break;default:i=Uh}n=i.bind(null,e,n,t),i=void 0,!Ec||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Mu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ir(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}iy(function(){var c=s,d=Oh(n),p=[];e:{var _=Dy.get(t);if(_!==void 0){var A=zh,R=t;switch(t){case"keypress":if(ga(n)===0)break e;case"keydown":case"keyup":A=UE;break;case"focusin":R="focus",A=ku;break;case"focusout":R="blur",A=ku;break;case"beforeblur":case"afterblur":A=ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=xE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=BE;break;case Py:case ky:case Ny:A=NE;break;case Vy:A=WE;break;case"scroll":A=CE;break;case"wheel":A=KE;break;case"copy":case"cut":case"paste":A=DE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Tp}var x=(e&4)!==0,P=!x&&t==="scroll",E=x?_!==null?_+"Capture":null:_;x=[];for(var y=c,v;y!==null;){v=y;var V=v.stateNode;if(v.tag===5&&V!==null&&(v=V,E!==null&&(V=js(y,E),V!=null&&x.push(qs(y,V,v)))),P)break;y=y.return}0<x.length&&(_=new A(_,R,null,n,d),p.push({event:_,listeners:x}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",_&&n!==_c&&(R=n.relatedTarget||n.fromElement)&&(Ir(R)||R[gn]))break e;if((A||_)&&(_=d.window===d?d:(_=d.ownerDocument)?_.defaultView||_.parentWindow:window,A?(R=n.relatedTarget||n.toElement,A=c,R=R?Ir(R):null,R!==null&&(P=Ur(R),R!==P||R.tag!==5&&R.tag!==6)&&(R=null)):(A=null,R=c),A!==R)){if(x=Ep,V="onMouseLeave",E="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(x=Tp,V="onPointerLeave",E="onPointerEnter",y="pointer"),P=A==null?_:oi(A),v=R==null?_:oi(R),_=new x(V,y+"leave",A,n,d),_.target=P,_.relatedTarget=v,V=null,Ir(d)===c&&(x=new x(E,y+"enter",R,n,d),x.target=v,x.relatedTarget=P,V=x),P=V,A&&R)t:{for(x=A,E=R,y=0,v=x;v;v=Gr(v))y++;for(v=0,V=E;V;V=Gr(V))v++;for(;0<y-v;)x=Gr(x),y--;for(;0<v-y;)E=Gr(E),v--;for(;y--;){if(x===E||E!==null&&x===E.alternate)break t;x=Gr(x),E=Gr(E)}x=null}else x=null;A!==null&&Dp(p,_,A,x,!1),R!==null&&P!==null&&Dp(p,P,R,x,!0)}}e:{if(_=c?oi(c):window,A=_.nodeName&&_.nodeName.toLowerCase(),A==="select"||A==="input"&&_.type==="file")var O=ew;else if(Ap(_))if(Iy)O=iw;else{O=nw;var j=tw}else(A=_.nodeName)&&A.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(O=rw);if(O&&(O=O(t,c))){Sy(p,O,n,d);break e}j&&j(t,_,c),t==="focusout"&&(j=_._wrapperState)&&j.controlled&&_.type==="number"&&dc(_,"number",_.value)}switch(j=c?oi(c):window,t){case"focusin":(Ap(j)||j.contentEditable==="true")&&(ii=j,Ac=c,xs=null);break;case"focusout":xs=Ac=ii=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,kp(p,n,d);break;case"selectionchange":if(aw)break;case"keydown":case"keyup":kp(p,n,d)}var w;if(Hh)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ri?wy(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Ey&&n.locale!=="ko"&&(ri||g!=="onCompositionStart"?g==="onCompositionEnd"&&ri&&(w=vy()):(Un=d,$h="value"in Un?Un.value:Un.textContent,ri=!0)),j=ja(c,g),0<j.length&&(g=new wp(g,t,null,n,d),p.push({event:g,listeners:j}),w?g.data=w:(w=Ty(n),w!==null&&(g.data=w)))),(w=GE?YE(t,n):XE(t,n))&&(c=ja(c,"onBeforeInput"),0<c.length&&(d=new wp("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=w))}Ly(p,e)})}function qs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ja(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=js(t,n),s!=null&&r.unshift(qs(t,s,i)),s=js(t,e),s!=null&&r.push(qs(t,s,i))),t=t.return}return r}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=js(n,s),u!=null&&o.unshift(qs(n,u,l))):i||(u=js(n,s),u!=null&&o.push(qs(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hw=/\r\n?/g,fw=/\u0000|\uFFFD/g;function Lp(t){return(typeof t=="string"?t:""+t).replace(hw,`
`).replace(fw,"")}function Jo(t,e,n){if(e=Lp(e),Lp(t)!==e&&n)throw Error(U(425))}function Ua(){}var Rc=null,xc=null;function Pc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,dw=typeof clearTimeout=="function"?clearTimeout:void 0,bp=typeof Promise=="function"?Promise:void 0,pw=typeof queueMicrotask=="function"?queueMicrotask:typeof bp<"u"?function(t){return bp.resolve(null).then(t).catch(mw)}:kc;function mw(t){setTimeout(function(){throw t})}function Fu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zs(e)}function Wn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Op(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Mi=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Mi,Ks="__reactProps$"+Mi,gn="__reactContainer$"+Mi,Nc="__reactEvents$"+Mi,gw="__reactListeners$"+Mi,yw="__reactHandles$"+Mi;function Ir(t){var e=t[Kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gn]||n[Kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Op(t);t!==null;){if(n=t[Kt])return n;t=Op(t)}return e}t=n,n=t.parentNode}return null}function yo(t){return t=t[Kt]||t[gn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Il(t){return t[Ks]||null}var Vc=[],ai=-1;function fr(t){return{current:t}}function me(t){0>ai||(t.current=Vc[ai],Vc[ai]=null,ai--)}function ce(t,e){ai++,Vc[ai]=t.current,t.current=e}var nr={},tt=fr(nr),ft=fr(!1),Nr=nr;function Ai(t,e){var n=t.type.contextTypes;if(!n)return nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dt(t){return t=t.childContextTypes,t!=null}function $a(){me(ft),me(tt)}function Mp(t,e,n){if(tt.current!==nr)throw Error(U(168));ce(tt,e),ce(ft,n)}function Oy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,tE(t)||"Unknown",i));return Te({},n,r)}function za(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Nr=tt.current,ce(tt,t),ce(ft,ft.current),!0}function Fp(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Oy(t,e,Nr),r.__reactInternalMemoizedMergedChildContext=t,me(ft),me(tt),ce(tt,t)):me(ft),ce(ft,n)}var un=null,Al=!1,ju=!1;function My(t){un===null?un=[t]:un.push(t)}function _w(t){Al=!0,My(t)}function dr(){if(!ju&&un!==null){ju=!0;var t=0,e=ae;try{var n=un;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}un=null,Al=!1}catch(i){throw un!==null&&(un=un.slice(t+1)),ly(Mh,dr),i}finally{ae=e,ju=!1}}return null}var li=[],ui=0,Ba=null,Ha=0,It=[],At=0,Vr=null,cn=1,hn="";function wr(t,e){li[ui++]=Ha,li[ui++]=Ba,Ba=t,Ha=e}function Fy(t,e,n){It[At++]=cn,It[At++]=hn,It[At++]=Vr,Vr=t;var r=cn;t=hn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cn=1<<32-Ft(e)+i|n<<i|r,hn=s+t}else cn=1<<s|n<<i|r,hn=t}function qh(t){t.return!==null&&(wr(t,1),Fy(t,1,0))}function Kh(t){for(;t===Ba;)Ba=li[--ui],li[ui]=null,Ha=li[--ui],li[ui]=null;for(;t===Vr;)Vr=It[--At],It[At]=null,hn=It[--At],It[At]=null,cn=It[--At],It[At]=null}var vt=null,_t=null,ye=!1,Ot=null;function jy(t,e){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vt=t,_t=Wn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vt=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:cn,overflow:hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vt=t,_t=null,!0):!1;default:return!1}}function Dc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lc(t){if(ye){var e=_t;if(e){var n=e;if(!jp(t,e)){if(Dc(t))throw Error(U(418));e=Wn(n.nextSibling);var r=vt;e&&jp(t,e)?jy(r,n):(t.flags=t.flags&-4097|2,ye=!1,vt=t)}}else{if(Dc(t))throw Error(U(418));t.flags=t.flags&-4097|2,ye=!1,vt=t}}}function Up(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function Zo(t){if(t!==vt)return!1;if(!ye)return Up(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pc(t.type,t.memoizedProps)),e&&(e=_t)){if(Dc(t))throw Uy(),Error(U(418));for(;e;)jy(t,e),e=Wn(e.nextSibling)}if(Up(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=Wn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=vt?Wn(t.stateNode.nextSibling):null;return!0}function Uy(){for(var t=_t;t;)t=Wn(t.nextSibling)}function Ci(){_t=vt=null,ye=!1}function Qh(t){Ot===null?Ot=[t]:Ot.push(t)}var vw=In.ReactCurrentBatchConfig;function fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function ea(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $p(t){var e=t._init;return e(t._payload)}function $y(t){function e(E,y){if(t){var v=E.deletions;v===null?(E.deletions=[y],E.flags|=16):v.push(y)}}function n(E,y){if(!t)return null;for(;y!==null;)e(E,y),y=y.sibling;return null}function r(E,y){for(E=new Map;y!==null;)y.key!==null?E.set(y.key,y):E.set(y.index,y),y=y.sibling;return E}function i(E,y){return E=Gn(E,y),E.index=0,E.sibling=null,E}function s(E,y,v){return E.index=v,t?(v=E.alternate,v!==null?(v=v.index,v<y?(E.flags|=2,y):v):(E.flags|=2,y)):(E.flags|=1048576,y)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,y,v,V){return y===null||y.tag!==6?(y=qu(v,E.mode,V),y.return=E,y):(y=i(y,v),y.return=E,y)}function u(E,y,v,V){var O=v.type;return O===ni?d(E,y,v.props.children,V,v.key):y!==null&&(y.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===bn&&$p(O)===y.type)?(V=i(y,v.props),V.ref=fs(E,y,v),V.return=E,V):(V=Sa(v.type,v.key,v.props,null,E.mode,V),V.ref=fs(E,y,v),V.return=E,V)}function c(E,y,v,V){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=Ku(v,E.mode,V),y.return=E,y):(y=i(y,v.children||[]),y.return=E,y)}function d(E,y,v,V,O){return y===null||y.tag!==7?(y=Pr(v,E.mode,V,O),y.return=E,y):(y=i(y,v),y.return=E,y)}function p(E,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=qu(""+y,E.mode,v),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Bo:return v=Sa(y.type,y.key,y.props,null,E.mode,v),v.ref=fs(E,null,y),v.return=E,v;case ti:return y=Ku(y,E.mode,v),y.return=E,y;case bn:var V=y._init;return p(E,V(y._payload),v)}if(_s(y)||as(y))return y=Pr(y,E.mode,v,null),y.return=E,y;ea(E,y)}return null}function _(E,y,v,V){var O=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return O!==null?null:l(E,y,""+v,V);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bo:return v.key===O?u(E,y,v,V):null;case ti:return v.key===O?c(E,y,v,V):null;case bn:return O=v._init,_(E,y,O(v._payload),V)}if(_s(v)||as(v))return O!==null?null:d(E,y,v,V,null);ea(E,v)}return null}function A(E,y,v,V,O){if(typeof V=="string"&&V!==""||typeof V=="number")return E=E.get(v)||null,l(y,E,""+V,O);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Bo:return E=E.get(V.key===null?v:V.key)||null,u(y,E,V,O);case ti:return E=E.get(V.key===null?v:V.key)||null,c(y,E,V,O);case bn:var j=V._init;return A(E,y,v,j(V._payload),O)}if(_s(V)||as(V))return E=E.get(v)||null,d(y,E,V,O,null);ea(y,V)}return null}function R(E,y,v,V){for(var O=null,j=null,w=y,g=y=0,T=null;w!==null&&g<v.length;g++){w.index>g?(T=w,w=null):T=w.sibling;var I=_(E,w,v[g],V);if(I===null){w===null&&(w=T);break}t&&w&&I.alternate===null&&e(E,w),y=s(I,y,g),j===null?O=I:j.sibling=I,j=I,w=T}if(g===v.length)return n(E,w),ye&&wr(E,g),O;if(w===null){for(;g<v.length;g++)w=p(E,v[g],V),w!==null&&(y=s(w,y,g),j===null?O=w:j.sibling=w,j=w);return ye&&wr(E,g),O}for(w=r(E,w);g<v.length;g++)T=A(w,E,g,v[g],V),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?g:T.key),y=s(T,y,g),j===null?O=T:j.sibling=T,j=T);return t&&w.forEach(function(C){return e(E,C)}),ye&&wr(E,g),O}function x(E,y,v,V){var O=as(v);if(typeof O!="function")throw Error(U(150));if(v=O.call(v),v==null)throw Error(U(151));for(var j=O=null,w=y,g=y=0,T=null,I=v.next();w!==null&&!I.done;g++,I=v.next()){w.index>g?(T=w,w=null):T=w.sibling;var C=_(E,w,I.value,V);if(C===null){w===null&&(w=T);break}t&&w&&C.alternate===null&&e(E,w),y=s(C,y,g),j===null?O=C:j.sibling=C,j=C,w=T}if(I.done)return n(E,w),ye&&wr(E,g),O;if(w===null){for(;!I.done;g++,I=v.next())I=p(E,I.value,V),I!==null&&(y=s(I,y,g),j===null?O=I:j.sibling=I,j=I);return ye&&wr(E,g),O}for(w=r(E,w);!I.done;g++,I=v.next())I=A(w,E,g,I.value,V),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?g:I.key),y=s(I,y,g),j===null?O=I:j.sibling=I,j=I);return t&&w.forEach(function(k){return e(E,k)}),ye&&wr(E,g),O}function P(E,y,v,V){if(typeof v=="object"&&v!==null&&v.type===ni&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Bo:e:{for(var O=v.key,j=y;j!==null;){if(j.key===O){if(O=v.type,O===ni){if(j.tag===7){n(E,j.sibling),y=i(j,v.props.children),y.return=E,E=y;break e}}else if(j.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===bn&&$p(O)===j.type){n(E,j.sibling),y=i(j,v.props),y.ref=fs(E,j,v),y.return=E,E=y;break e}n(E,j);break}else e(E,j);j=j.sibling}v.type===ni?(y=Pr(v.props.children,E.mode,V,v.key),y.return=E,E=y):(V=Sa(v.type,v.key,v.props,null,E.mode,V),V.ref=fs(E,y,v),V.return=E,E=V)}return o(E);case ti:e:{for(j=v.key;y!==null;){if(y.key===j)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(E,y.sibling),y=i(y,v.children||[]),y.return=E,E=y;break e}else{n(E,y);break}else e(E,y);y=y.sibling}y=Ku(v,E.mode,V),y.return=E,E=y}return o(E);case bn:return j=v._init,P(E,y,j(v._payload),V)}if(_s(v))return R(E,y,v,V);if(as(v))return x(E,y,v,V);ea(E,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(E,y.sibling),y=i(y,v),y.return=E,E=y):(n(E,y),y=qu(v,E.mode,V),y.return=E,E=y),o(E)):n(E,y)}return P}var Ri=$y(!0),zy=$y(!1),Wa=fr(null),qa=null,ci=null,Gh=null;function Yh(){Gh=ci=qa=null}function Xh(t){var e=Wa.current;me(Wa),t._currentValue=e}function bc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yi(t,e){qa=t,Gh=ci=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function kt(t){var e=t._currentValue;if(Gh!==t)if(t={context:t,memoizedValue:e,next:null},ci===null){if(qa===null)throw Error(U(308));ci=t,qa.dependencies={lanes:0,firstContext:t}}else ci=ci.next=t;return e}var Ar=null;function Jh(t){Ar===null?Ar=[t]:Ar.push(t)}function By(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jh(e)):(n.next=i.next,i.next=n),e.interleaved=n,yn(t,r)}function yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var On=!1;function Zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,yn(t,n)}return i=r.interleaved,i===null?(e.next=e,Jh(r)):(e.next=i.next,i.next=e),r.interleaved=e,yn(t,n)}function ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fh(t,n)}}function zp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ka(t,e,n,r){var i=t.updateQueue;On=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var _=l.lane,A=l.eventTime;if((r&_)===_){d!==null&&(d=d.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,x=l;switch(_=e,A=n,x.tag){case 1:if(R=x.payload,typeof R=="function"){p=R.call(A,p,_);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=x.payload,_=typeof R=="function"?R.call(A,p,_):R,_==null)break e;p=Te({},p,_);break e;case 2:On=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[l]:_.push(l))}else A={eventTime:A,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=A,u=p):d=d.next=A,o|=_;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;_=l,l=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(1);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=p}}function Bp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var _o={},Gt=fr(_o),Qs=fr(_o),Gs=fr(_o);function Cr(t){if(t===_o)throw Error(U(174));return t}function ef(t,e){switch(ce(Gs,e),ce(Qs,t),ce(Gt,_o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mc(e,t)}me(Gt),ce(Gt,e)}function xi(){me(Gt),me(Qs),me(Gs)}function Wy(t){Cr(Gs.current);var e=Cr(Gt.current),n=mc(e,t.type);e!==n&&(ce(Qs,t),ce(Gt,n))}function tf(t){Qs.current===t&&(me(Gt),me(Qs))}var ve=fr(0);function Qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uu=[];function nf(){for(var t=0;t<Uu.length;t++)Uu[t]._workInProgressVersionPrimary=null;Uu.length=0}var _a=In.ReactCurrentDispatcher,$u=In.ReactCurrentBatchConfig,Dr=0,Ee=null,De=null,je=null,Ga=!1,Ps=!1,Ys=0,Ew=0;function Ge(){throw Error(U(321))}function rf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function sf(t,e,n,r,i,s){if(Dr=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_a.current=t===null||t.memoizedState===null?Iw:Aw,t=n(r,i),Ps){s=0;do{if(Ps=!1,Ys=0,25<=s)throw Error(U(301));s+=1,je=De=null,e.updateQueue=null,_a.current=Cw,t=n(r,i)}while(Ps)}if(_a.current=Ya,e=De!==null&&De.next!==null,Dr=0,je=De=Ee=null,Ga=!1,e)throw Error(U(300));return t}function of(){var t=Ys!==0;return Ys=0,t}function Wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Ee.memoizedState=je=t:je=je.next=t,je}function Nt(){if(De===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=je===null?Ee.memoizedState:je.next;if(e!==null)je=e,De=t;else{if(t===null)throw Error(U(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},je===null?Ee.memoizedState=je=t:je=je.next=t}return je}function Xs(t,e){return typeof e=="function"?e(t):e}function zu(t){var e=Nt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Dr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ee.lanes|=d,Lr|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,$t(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,Lr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bu(t){var e=Nt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$t(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qy(){}function Ky(t,e){var n=Ee,r=Nt(),i=e(),s=!$t(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,af(Yy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Js(9,Gy.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(U(349));Dr&30||Qy(n,e,i)}return i}function Qy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gy(t,e,n,r){e.value=n,e.getSnapshot=r,Xy(e)&&Jy(t)}function Yy(t,e,n){return n(function(){Xy(e)&&Jy(t)})}function Xy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function Jy(t){var e=yn(t,1);e!==null&&jt(e,t,1,-1)}function Hp(t){var e=Wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:t},e.queue=t,t=t.dispatch=Sw.bind(null,Ee,t),[e.memoizedState,t]}function Js(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Zy(){return Nt().memoizedState}function va(t,e,n,r){var i=Wt();Ee.flags|=t,i.memoizedState=Js(1|e,n,void 0,r===void 0?null:r)}function Cl(t,e,n,r){var i=Nt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&rf(r,o.deps)){i.memoizedState=Js(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Js(1|e,n,s,r)}function Wp(t,e){return va(8390656,8,t,e)}function af(t,e){return Cl(2048,8,t,e)}function e_(t,e){return Cl(4,2,t,e)}function t_(t,e){return Cl(4,4,t,e)}function n_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r_(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4,4,n_.bind(null,e,t),n)}function lf(){}function i_(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function s_(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function o_(t,e,n){return Dr&21?($t(n,e)||(n=hy(),Ee.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function ww(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=$u.transition;$u.transition={};try{t(!1),e()}finally{ae=n,$u.transition=r}}function a_(){return Nt().memoizedState}function Tw(t,e,n){var r=Qn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},l_(t))u_(e,n);else if(n=By(t,e,n,r),n!==null){var i=ot();jt(n,t,r,i),c_(n,e,r)}}function Sw(t,e,n){var r=Qn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(l_(t))u_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,$t(l,o)){var u=e.interleaved;u===null?(i.next=i,Jh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=By(t,e,i,r),n!==null&&(i=ot(),jt(n,t,r,i),c_(n,e,r))}}function l_(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function u_(t,e){Ps=Ga=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function c_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fh(t,n)}}var Ya={readContext:kt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Iw={readContext:kt,useCallback:function(t,e){return Wt().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:Wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,va(4194308,4,n_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return va(4194308,4,t,e)},useInsertionEffect:function(t,e){return va(4,2,t,e)},useMemo:function(t,e){var n=Wt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Tw.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=Wt();return t={current:t},e.memoizedState=t},useState:Hp,useDebugValue:lf,useDeferredValue:function(t){return Wt().memoizedState=t},useTransition:function(){var t=Hp(!1),e=t[0];return t=ww.bind(null,t[1]),Wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=Wt();if(ye){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Ue===null)throw Error(U(349));Dr&30||Qy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Wp(Yy.bind(null,r,s,t),[t]),r.flags|=2048,Js(9,Gy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Wt(),e=Ue.identifierPrefix;if(ye){var n=hn,r=cn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ys++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ew++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Aw={readContext:kt,useCallback:i_,useContext:kt,useEffect:af,useImperativeHandle:r_,useInsertionEffect:e_,useLayoutEffect:t_,useMemo:s_,useReducer:zu,useRef:Zy,useState:function(){return zu(Xs)},useDebugValue:lf,useDeferredValue:function(t){var e=Nt();return o_(e,De.memoizedState,t)},useTransition:function(){var t=zu(Xs)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:qy,useSyncExternalStore:Ky,useId:a_,unstable_isNewReconciler:!1},Cw={readContext:kt,useCallback:i_,useContext:kt,useEffect:af,useImperativeHandle:r_,useInsertionEffect:e_,useLayoutEffect:t_,useMemo:s_,useReducer:Bu,useRef:Zy,useState:function(){return Bu(Xs)},useDebugValue:lf,useDeferredValue:function(t){var e=Nt();return De===null?e.memoizedState=t:o_(e,De.memoizedState,t)},useTransition:function(){var t=Bu(Xs)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:qy,useSyncExternalStore:Ky,useId:a_,unstable_isNewReconciler:!1};function Lt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Oc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rl={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Qn(t),s=dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(jt(e,t,i,r),ya(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Qn(t),s=dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(jt(e,t,i,r),ya(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=Qn(t),i=dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=qn(t,i,r),e!==null&&(jt(e,t,r,n),ya(e,t,r))}};function qp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Hs(n,r)||!Hs(i,s):!0}function h_(t,e,n){var r=!1,i=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=kt(s):(i=dt(e)?Nr:tt.current,r=e.contextTypes,s=(r=r!=null)?Ai(t,i):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Rl.enqueueReplaceState(e,e.state,null)}function Mc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Zh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=kt(s):(s=dt(e)?Nr:tt.current,i.context=Ai(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Rl.enqueueReplaceState(i,i.state,null),Ka(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Pi(t,e){try{var n="",r=e;do n+=eE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Rw=typeof WeakMap=="function"?WeakMap:Map;function f_(t,e,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ja||(Ja=!0,Qc=r),Fc(t,e)},n}function d_(t,e,n){n=dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Fc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fc(t,e),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Rw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=$w.bind(null,t,e,n),e.then(t,t))}function Gp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dn(-1,1),e.tag=2,qn(n,e,1))),n.lanes|=1),t)}var xw=In.ReactCurrentOwner,ht=!1;function it(t,e,n,r){e.child=t===null?zy(e,null,n,r):Ri(e,t.child,n,r)}function Xp(t,e,n,r,i){n=n.render;var s=e.ref;return yi(e,i),r=sf(t,e,n,r,s,i),n=of(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(ye&&n&&qh(e),e.flags|=1,it(t,e,r,i),e.child)}function Jp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,p_(t,e,s,r,i)):(t=Sa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hs,n(o,r)&&t.ref===e.ref)return _n(t,e,i)}return e.flags|=1,t=Gn(s,r),t.ref=e.ref,t.return=e,e.child=t}function p_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Hs(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,_n(t,e,i)}return jc(t,e,n,r,i)}function m_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(fi,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(fi,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(fi,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(fi,yt),yt|=r;return it(t,e,i,n),e.child}function g_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jc(t,e,n,r,i){var s=dt(n)?Nr:tt.current;return s=Ai(e,s),yi(e,i),n=sf(t,e,n,r,s,i),r=of(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(ye&&r&&qh(e),e.flags|=1,it(t,e,n,i),e.child)}function Zp(t,e,n,r,i){if(dt(n)){var s=!0;za(e)}else s=!1;if(yi(e,i),e.stateNode===null)Ea(t,e),h_(e,n,r),Mc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=kt(c):(c=dt(n)?Nr:tt.current,c=Ai(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Kp(e,o,r,c),On=!1;var _=e.memoizedState;o.state=_,Ka(e,r,o,i),u=e.memoizedState,l!==r||_!==u||ft.current||On?(typeof d=="function"&&(Oc(e,n,d,r),u=e.memoizedState),(l=On||qp(e,n,l,r,_,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Hy(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Lt(e.type,l),o.props=c,p=e.pendingProps,_=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=kt(u):(u=dt(n)?Nr:tt.current,u=Ai(e,u));var A=n.getDerivedStateFromProps;(d=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||_!==u)&&Kp(e,o,r,u),On=!1,_=e.memoizedState,o.state=_,Ka(e,r,o,i);var R=e.memoizedState;l!==p||_!==R||ft.current||On?(typeof A=="function"&&(Oc(e,n,A,r),R=e.memoizedState),(c=On||qp(e,n,c,r,_,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return Uc(t,e,n,r,s,i)}function Uc(t,e,n,r,i,s){g_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Fp(e,n,!1),_n(t,e,s);r=e.stateNode,xw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ri(e,t.child,null,s),e.child=Ri(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&Fp(e,n,!0),e.child}function y_(t){var e=t.stateNode;e.pendingContext?Mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mp(t,e.context,!1),ef(t,e.containerInfo)}function em(t,e,n,r,i){return Ci(),Qh(i),e.flags|=256,it(t,e,n,r),e.child}var $c={dehydrated:null,treeContext:null,retryLane:0};function zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function __(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ve,i&1),t===null)return Lc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kl(o,r,0,null),t=Pr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zc(n),e.memoizedState=$c,t):uf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Pw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Gn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Gn(l,s):(s=Pr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?zc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$c,r}return s=t.child,t=s.sibling,r=Gn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function uf(t,e){return e=kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ta(t,e,n,r){return r!==null&&Qh(r),Ri(e,t.child,null,n),t=uf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Pw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hu(Error(U(422))),ta(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=kl({mode:"visible",children:r.children},i,0,null),s=Pr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ri(e,t.child,null,o),e.child.memoizedState=zc(o),e.memoizedState=$c,s);if(!(e.mode&1))return ta(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Hu(s,r,void 0),ta(t,e,o,r)}if(l=(o&t.childLanes)!==0,ht||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yn(t,i),jt(r,t,i,-1))}return mf(),r=Hu(Error(U(421))),ta(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=Wn(i.nextSibling),vt=e,ye=!0,Ot=null,t!==null&&(It[At++]=cn,It[At++]=hn,It[At++]=Vr,cn=t.id,hn=t.overflow,Vr=e),e=uf(e,r.children),e.flags|=4096,e)}function tm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bc(t.return,e,n)}function Wu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function v_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tm(t,n,e);else if(t.tag===19)tm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Qa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Qa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wu(e,!0,n,null,s);break;case"together":Wu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ea(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Gn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kw(t,e,n){switch(e.tag){case 3:y_(e),Ci();break;case 5:Wy(e);break;case 1:dt(e.type)&&za(e);break;case 4:ef(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Wa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?__(t,e,n):(ce(ve,ve.current&1),t=_n(t,e,n),t!==null?t.sibling:null);ce(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return v_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,m_(t,e,n)}return _n(t,e,n)}var E_,Bc,w_,T_;E_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bc=function(){};w_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Cr(Gt.current);var s=null;switch(n){case"input":i=hc(t,i),r=hc(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=pc(t,i),r=pc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ua)}gc(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ms.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ms.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};T_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ds(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Nw(t,e,n){var r=e.pendingProps;switch(Kh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return dt(e.type)&&$a(),Ye(e),null;case 3:return r=e.stateNode,xi(),me(ft),me(tt),nf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ot!==null&&(Xc(Ot),Ot=null))),Bc(t,e),Ye(e),null;case 5:tf(e);var i=Cr(Gs.current);if(n=e.type,t!==null&&e.stateNode!=null)w_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Ye(e),null}if(t=Cr(Gt.current),Zo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Kt]=e,r[Ks]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Es.length;i++)fe(Es[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":cp(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":fp(r,s),fe("invalid",r)}gc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Jo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Jo(r.textContent,l,t),i=["children",""+l]):Ms.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Ho(r),hp(r,s,!0);break;case"textarea":Ho(r),dp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ua)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Yg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Kt]=e,t[Ks]=r,E_(t,e,!1,!1),e.stateNode=t;e:{switch(o=yc(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Es.length;i++)fe(Es[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":cp(t,r),i=hc(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),fe("invalid",t);break;case"textarea":fp(t,r),i=pc(t,r),fe("invalid",t);break;default:i=r}gc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Zg(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Xg(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Fs(t,u):typeof u=="number"&&Fs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ms.hasOwnProperty(s)?u!=null&&s==="onScroll"&&fe("scroll",t):u!=null&&Vh(t,s,u,o))}switch(n){case"input":Ho(t),hp(t,r,!1);break;case"textarea":Ho(t),dp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+tr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?di(t,!!r.multiple,s,!1):r.defaultValue!=null&&di(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ua)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)T_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Cr(Gs.current),Cr(Gt.current),Zo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kt]=e,(s=r.nodeValue!==n)&&(t=vt,t!==null))switch(t.tag){case 3:Jo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=e,e.stateNode=r}return Ye(e),null;case 13:if(me(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&_t!==null&&e.mode&1&&!(e.flags&128))Uy(),Ci(),e.flags|=98560,s=!1;else if(s=Zo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Kt]=e}else Ci(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else Ot!==null&&(Xc(Ot),Ot=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?be===0&&(be=3):mf())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return xi(),Bc(t,e),t===null&&Ws(e.stateNode.containerInfo),Ye(e),null;case 10:return Xh(e.type._context),Ye(e),null;case 17:return dt(e.type)&&$a(),Ye(e),null;case 19:if(me(ve),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ds(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qa(t),o!==null){for(e.flags|=128,ds(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>ki&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304)}else{if(!r)if(t=Qa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ds(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Ye(e),null}else 2*Re()-s.renderingStartTime>ki&&n!==1073741824&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=ve.current,ce(ve,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return pf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function Vw(t,e){switch(Kh(e),e.tag){case 1:return dt(e.type)&&$a(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xi(),me(ft),me(tt),nf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tf(e),null;case 13:if(me(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Ci()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(ve),null;case 4:return xi(),null;case 10:return Xh(e.type._context),null;case 22:case 23:return pf(),null;case 24:return null;default:return null}}var na=!1,Ze=!1,Dw=typeof WeakSet=="function"?WeakSet:Set,H=null;function hi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Hc(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var nm=!1;function Lw(t,e){if(Rc=Ma,t=Ry(),Wh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,_=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)_=p,p=A;for(;;){if(p===t)break t;if(_===n&&++c===i&&(l=o),_===s&&++d===r&&(u=o),(A=p.nextSibling)!==null)break;p=_,_=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xc={focusedElem:t,selectionRange:n},Ma=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var x=R.memoizedProps,P=R.memoizedState,E=e.stateNode,y=E.getSnapshotBeforeUpdate(e.elementType===e.type?x:Lt(e.type,x),P);E.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(V){Ie(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return R=nm,nm=!1,R}function ks(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Hc(e,n,s)}i=i.next}while(i!==r)}}function xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function S_(t){var e=t.alternate;e!==null&&(t.alternate=null,S_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kt],delete e[Ks],delete e[Nc],delete e[gw],delete e[yw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I_(t){return t.tag===5||t.tag===3||t.tag===4}function rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ua));else if(r!==4&&(t=t.child,t!==null))for(qc(t,e,n),t=t.sibling;t!==null;)qc(t,e,n),t=t.sibling}function Kc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Kc(t,e,n),t=t.sibling;t!==null;)Kc(t,e,n),t=t.sibling}var $e=null,bt=!1;function Ln(t,e,n){for(n=n.child;n!==null;)A_(t,e,n),n=n.sibling}function A_(t,e,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 5:Ze||hi(n,e);case 6:var r=$e,i=bt;$e=null,Ln(t,e,n),$e=r,bt=i,$e!==null&&(bt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(bt?(t=$e,n=n.stateNode,t.nodeType===8?Fu(t.parentNode,n):t.nodeType===1&&Fu(t,n),zs(t)):Fu($e,n.stateNode));break;case 4:r=$e,i=bt,$e=n.stateNode.containerInfo,bt=!0,Ln(t,e,n),$e=r,bt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hc(n,e,o),i=i.next}while(i!==r)}Ln(t,e,n);break;case 1:if(!Ze&&(hi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Ln(t,e,n);break;case 21:Ln(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Ln(t,e,n),Ze=r):Ln(t,e,n);break;default:Ln(t,e,n)}}function im(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Dw),e.forEach(function(r){var i=Bw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,bt=!1;break e;case 3:$e=l.stateNode.containerInfo,bt=!0;break e;case 4:$e=l.stateNode.containerInfo,bt=!0;break e}l=l.return}if($e===null)throw Error(U(160));A_(s,o,i),$e=null,bt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ie(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)C_(e,t),e=e.sibling}function C_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),Ht(t),r&4){try{ks(3,t,t.return),xl(3,t)}catch(x){Ie(t,t.return,x)}try{ks(5,t,t.return)}catch(x){Ie(t,t.return,x)}}break;case 1:Dt(e,t),Ht(t),r&512&&n!==null&&hi(n,n.return);break;case 5:if(Dt(e,t),Ht(t),r&512&&n!==null&&hi(n,n.return),t.flags&32){var i=t.stateNode;try{Fs(i,"")}catch(x){Ie(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Qg(i,s),yc(l,o);var c=yc(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?Zg(i,p):d==="dangerouslySetInnerHTML"?Xg(i,p):d==="children"?Fs(i,p):Vh(i,d,p,c)}switch(l){case"input":fc(i,s);break;case"textarea":Gg(i,s);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?di(i,!!s.multiple,A,!1):_!==!!s.multiple&&(s.defaultValue!=null?di(i,!!s.multiple,s.defaultValue,!0):di(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ks]=s}catch(x){Ie(t,t.return,x)}}break;case 6:if(Dt(e,t),Ht(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Ie(t,t.return,x)}}break;case 3:if(Dt(e,t),Ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zs(e.containerInfo)}catch(x){Ie(t,t.return,x)}break;case 4:Dt(e,t),Ht(t);break;case 13:Dt(e,t),Ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ff=Re())),r&4&&im(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(c=Ze)||d,Dt(e,t),Ze=c):Dt(e,t),Ht(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(p=H=d;H!==null;){switch(_=H,A=_.child,_.tag){case 0:case 11:case 14:case 15:ks(4,_,_.return);break;case 1:hi(_,_.return);var R=_.stateNode;if(typeof R.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(x){Ie(r,n,x)}}break;case 5:hi(_,_.return);break;case 22:if(_.memoizedState!==null){om(p);continue}}A!==null?(A.return=_,H=A):om(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Jg("display",o))}catch(x){Ie(t,t.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){Ie(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Dt(e,t),Ht(t),r&4&&im(t);break;case 21:break;default:Dt(e,t),Ht(t)}}function Ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I_(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fs(i,""),r.flags&=-33);var s=rm(t);Kc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=rm(t);qc(t,l,o);break;default:throw Error(U(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bw(t,e,n){H=t,R_(t)}function R_(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||na;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=na;var c=Ze;if(na=o,(Ze=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?am(i):u!==null?(u.return=o,H=u):am(i);for(;s!==null;)H=s,R_(s),s=s.sibling;H=i,na=l,Ze=c}sm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):sm(t)}}function sm(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||xl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Lt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bp(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&zs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Ze||e.flags&512&&Wc(e)}catch(_){Ie(e,e.return,_)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function om(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function am(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xl(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{Wc(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{Wc(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var Ow=Math.ceil,Xa=In.ReactCurrentDispatcher,cf=In.ReactCurrentOwner,Pt=In.ReactCurrentBatchConfig,ie=0,Ue=null,Pe=null,We=0,yt=0,fi=fr(0),be=0,Zs=null,Lr=0,Pl=0,hf=0,Ns=null,ct=null,ff=0,ki=1/0,ln=null,Ja=!1,Qc=null,Kn=null,ra=!1,$n=null,Za=0,Vs=0,Gc=null,wa=-1,Ta=0;function ot(){return ie&6?Re():wa!==-1?wa:wa=Re()}function Qn(t){return t.mode&1?ie&2&&We!==0?We&-We:vw.transition!==null?(Ta===0&&(Ta=hy()),Ta):(t=ae,t!==0||(t=window.event,t=t===void 0?16:_y(t.type)),t):1}function jt(t,e,n,r){if(50<Vs)throw Vs=0,Gc=null,Error(U(185));mo(t,n,r),(!(ie&2)||t!==Ue)&&(t===Ue&&(!(ie&2)&&(Pl|=n),be===4&&jn(t,We)),pt(t,r),n===1&&ie===0&&!(e.mode&1)&&(ki=Re()+500,Al&&dr()))}function pt(t,e){var n=t.callbackNode;vE(t,e);var r=Oa(t,t===Ue?We:0);if(r===0)n!==null&&gp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&gp(n),e===1)t.tag===0?_w(lm.bind(null,t)):My(lm.bind(null,t)),pw(function(){!(ie&6)&&dr()}),n=null;else{switch(fy(r)){case 1:n=Mh;break;case 4:n=uy;break;case 16:n=ba;break;case 536870912:n=cy;break;default:n=ba}n=b_(n,x_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function x_(t,e){if(wa=-1,Ta=0,ie&6)throw Error(U(327));var n=t.callbackNode;if(_i()&&t.callbackNode!==n)return null;var r=Oa(t,t===Ue?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=el(t,r);else{e=r;var i=ie;ie|=2;var s=k_();(Ue!==t||We!==e)&&(ln=null,ki=Re()+500,xr(t,e));do try{jw();break}catch(l){P_(t,l)}while(1);Yh(),Xa.current=s,ie=i,Pe!==null?e=0:(Ue=null,We=0,e=be)}if(e!==0){if(e===2&&(i=Tc(t),i!==0&&(r=i,e=Yc(t,i))),e===1)throw n=Zs,xr(t,0),jn(t,r),pt(t,Re()),n;if(e===6)jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Mw(i)&&(e=el(t,r),e===2&&(s=Tc(t),s!==0&&(r=s,e=Yc(t,s))),e===1))throw n=Zs,xr(t,0),jn(t,r),pt(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Tr(t,ct,ln);break;case 3:if(jn(t,r),(r&130023424)===r&&(e=ff+500-Re(),10<e)){if(Oa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=kc(Tr.bind(null,t,ct,ln),e);break}Tr(t,ct,ln);break;case 4:if(jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ow(r/1960))-r,10<r){t.timeoutHandle=kc(Tr.bind(null,t,ct,ln),r);break}Tr(t,ct,ln);break;case 5:Tr(t,ct,ln);break;default:throw Error(U(329))}}}return pt(t,Re()),t.callbackNode===n?x_.bind(null,t):null}function Yc(t,e){var n=Ns;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=el(t,e),t!==2&&(e=ct,ct=n,e!==null&&Xc(e)),t}function Xc(t){ct===null?ct=t:ct.push.apply(ct,t)}function Mw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jn(t,e){for(e&=~hf,e&=~Pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function lm(t){if(ie&6)throw Error(U(327));_i();var e=Oa(t,0);if(!(e&1))return pt(t,Re()),null;var n=el(t,e);if(t.tag!==0&&n===2){var r=Tc(t);r!==0&&(e=r,n=Yc(t,r))}if(n===1)throw n=Zs,xr(t,0),jn(t,e),pt(t,Re()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,ct,ln),pt(t,Re()),null}function df(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(ki=Re()+500,Al&&dr())}}function br(t){$n!==null&&$n.tag===0&&!(ie&6)&&_i();var e=ie;ie|=1;var n=Pt.transition,r=ae;try{if(Pt.transition=null,ae=1,t)return t()}finally{ae=r,Pt.transition=n,ie=e,!(ie&6)&&dr()}}function pf(){yt=fi.current,me(fi)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dw(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Kh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$a();break;case 3:xi(),me(ft),me(tt),nf();break;case 5:tf(r);break;case 4:xi();break;case 13:me(ve);break;case 19:me(ve);break;case 10:Xh(r.type._context);break;case 22:case 23:pf()}n=n.return}if(Ue=t,Pe=t=Gn(t.current,null),We=yt=e,be=0,Zs=null,hf=Pl=Lr=0,ct=Ns=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ar=null}return t}function P_(t,e){do{var n=Pe;try{if(Yh(),_a.current=Ya,Ga){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ga=!1}if(Dr=0,je=De=Ee=null,Ps=!1,Ys=0,cf.current=null,n===null||n.return===null){be=1,Zs=e,Pe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var _=d.alternate;_?(d.updateQueue=_.updateQueue,d.memoizedState=_.memoizedState,d.lanes=_.lanes):(d.updateQueue=null,d.memoizedState=null)}var A=Gp(o);if(A!==null){A.flags&=-257,Yp(A,o,l,s,e),A.mode&1&&Qp(s,c,e),e=A,u=c;var R=e.updateQueue;if(R===null){var x=new Set;x.add(u),e.updateQueue=x}else R.add(u);break e}else{if(!(e&1)){Qp(s,c,e),mf();break e}u=Error(U(426))}}else if(ye&&l.mode&1){var P=Gp(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Yp(P,o,l,s,e),Qh(Pi(u,l));break e}}s=u=Pi(u,l),be!==4&&(be=2),Ns===null?Ns=[s]:Ns.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=f_(s,u,e);zp(s,E);break e;case 1:l=u;var y=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Kn===null||!Kn.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=d_(s,l,e);zp(s,V);break e}}s=s.return}while(s!==null)}V_(n)}catch(O){e=O,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(1)}function k_(){var t=Xa.current;return Xa.current=Ya,t===null?Ya:t}function mf(){(be===0||be===3||be===2)&&(be=4),Ue===null||!(Lr&268435455)&&!(Pl&268435455)||jn(Ue,We)}function el(t,e){var n=ie;ie|=2;var r=k_();(Ue!==t||We!==e)&&(ln=null,xr(t,e));do try{Fw();break}catch(i){P_(t,i)}while(1);if(Yh(),ie=n,Xa.current=r,Pe!==null)throw Error(U(261));return Ue=null,We=0,be}function Fw(){for(;Pe!==null;)N_(Pe)}function jw(){for(;Pe!==null&&!cE();)N_(Pe)}function N_(t){var e=L_(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?V_(t):Pe=e,cf.current=null}function V_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Vw(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Pe=null;return}}else if(n=Nw(n,e,yt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);be===0&&(be=5)}function Tr(t,e,n){var r=ae,i=Pt.transition;try{Pt.transition=null,ae=1,Uw(t,e,n,r)}finally{Pt.transition=i,ae=r}return null}function Uw(t,e,n,r){do _i();while($n!==null);if(ie&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(EE(t,s),t===Ue&&(Pe=Ue=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ra||(ra=!0,b_(ba,function(){return _i(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pt.transition,Pt.transition=null;var o=ae;ae=1;var l=ie;ie|=4,cf.current=null,Lw(t,n),C_(n,t),ow(xc),Ma=!!Rc,xc=Rc=null,t.current=n,bw(n),hE(),ie=l,ae=o,Pt.transition=s}else t.current=n;if(ra&&(ra=!1,$n=t,Za=i),s=t.pendingLanes,s===0&&(Kn=null),pE(n.stateNode),pt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ja)throw Ja=!1,t=Qc,Qc=null,t;return Za&1&&t.tag!==0&&_i(),s=t.pendingLanes,s&1?t===Gc?Vs++:(Vs=0,Gc=t):Vs=0,dr(),null}function _i(){if($n!==null){var t=fy(Za),e=Pt.transition,n=ae;try{if(Pt.transition=null,ae=16>t?16:t,$n===null)var r=!1;else{if(t=$n,$n=null,Za=0,ie&6)throw Error(U(331));var i=ie;for(ie|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:ks(8,d,s)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var _=d.sibling,A=d.return;if(S_(d),d===c){H=null;break}if(_!==null){_.return=A,H=_;break}H=A}}}var R=s.alternate;if(R!==null){var x=R.child;if(x!==null){R.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ks(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,H=E;break e}H=s.return}}var y=t.current;for(H=y;H!==null;){o=H;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,H=v;else e:for(o=y;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xl(9,l)}}catch(O){Ie(l,l.return,O)}if(l===o){H=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,H=V;break e}H=l.return}}if(ie=i,dr(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(El,t)}catch{}r=!0}return r}finally{ae=n,Pt.transition=e}}return!1}function um(t,e,n){e=Pi(n,e),e=f_(t,e,1),t=qn(t,e,1),e=ot(),t!==null&&(mo(t,1,e),pt(t,e))}function Ie(t,e,n){if(t.tag===3)um(t,t,n);else for(;e!==null;){if(e.tag===3){um(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){t=Pi(n,t),t=d_(e,t,1),e=qn(e,t,1),t=ot(),e!==null&&(mo(e,1,t),pt(e,t));break}}e=e.return}}function $w(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(We&n)===n&&(be===4||be===3&&(We&130023424)===We&&500>Re()-ff?xr(t,0):hf|=n),pt(t,e)}function D_(t,e){e===0&&(t.mode&1?(e=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):e=1);var n=ot();t=yn(t,e),t!==null&&(mo(t,e,n),pt(t,n))}function zw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D_(t,n)}function Bw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),D_(t,n)}var L_;L_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,kw(t,e,n);ht=!!(t.flags&131072)}else ht=!1,ye&&e.flags&1048576&&Fy(e,Ha,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ea(t,e),t=e.pendingProps;var i=Ai(e,tt.current);yi(e,n),i=sf(null,e,r,t,i,n);var s=of();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dt(r)?(s=!0,za(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zh(e),i.updater=Rl,e.stateNode=i,i._reactInternals=e,Mc(e,r,t,n),e=Uc(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&qh(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ea(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ww(r),t=Lt(r,t),i){case 0:e=jc(null,e,r,t,n);break e;case 1:e=Zp(null,e,r,t,n);break e;case 11:e=Xp(null,e,r,t,n);break e;case 14:e=Jp(null,e,r,Lt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),jc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Zp(t,e,r,i,n);case 3:e:{if(y_(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Hy(t,e),Ka(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Pi(Error(U(423)),e),e=em(t,e,r,n,i);break e}else if(r!==i){i=Pi(Error(U(424)),e),e=em(t,e,r,n,i);break e}else for(_t=Wn(e.stateNode.containerInfo.firstChild),vt=e,ye=!0,Ot=null,n=zy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ci(),r===i){e=_n(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return Wy(e),t===null&&Lc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Pc(r,i)?o=null:s!==null&&Pc(r,s)&&(e.flags|=32),g_(t,e),it(t,e,o,n),e.child;case 6:return t===null&&Lc(e),null;case 13:return __(t,e,n);case 4:return ef(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ri(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Xp(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Wa,r._currentValue),r._currentValue=o,s!==null)if($t(s.value,o)){if(s.children===i.children&&!ft.current){e=_n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=dn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),bc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),bc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,yi(e,n),i=kt(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=Lt(r,e.pendingProps),i=Lt(r.type,i),Jp(t,e,r,i,n);case 15:return p_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Ea(t,e),e.tag=1,dt(r)?(t=!0,za(e)):t=!1,yi(e,n),h_(e,r,i),Mc(e,r,i,n),Uc(null,e,r,!0,t,n);case 19:return v_(t,e,n);case 22:return m_(t,e,n)}throw Error(U(156,e.tag))};function b_(t,e){return ly(t,e)}function Hw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(t,e,n,r){return new Hw(t,e,n,r)}function gf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ww(t){if(typeof t=="function")return gf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lh)return 11;if(t===bh)return 14}return 2}function Gn(t,e){var n=t.alternate;return n===null?(n=xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ni:return Pr(n.children,i,s,e);case Dh:o=8,i|=8;break;case ac:return t=xt(12,n,e,i|2),t.elementType=ac,t.lanes=s,t;case lc:return t=xt(13,n,e,i),t.elementType=lc,t.lanes=s,t;case uc:return t=xt(19,n,e,i),t.elementType=uc,t.lanes=s,t;case Wg:return kl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bg:o=10;break e;case Hg:o=9;break e;case Lh:o=11;break e;case bh:o=14;break e;case bn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Pr(t,e,n,r){return t=xt(7,t,r,e),t.lanes=n,t}function kl(t,e,n,r){return t=xt(22,t,r,e),t.elementType=Wg,t.lanes=n,t.stateNode={isHidden:!1},t}function qu(t,e,n){return t=xt(6,t,null,e),t.lanes=n,t}function Ku(t,e,n){return e=xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ru(0),this.expirationTimes=Ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ru(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yf(t,e,n,r,i,s,o,l,u){return t=new qw(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zh(s),t}function Kw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ti,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function O_(t){if(!t)return nr;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(dt(n))return Oy(t,n,e)}return e}function M_(t,e,n,r,i,s,o,l,u){return t=yf(n,r,!0,t,i,s,o,l,u),t.context=O_(null),n=t.current,r=ot(),i=Qn(n),s=dn(r,i),s.callback=e??null,qn(n,s,i),t.current.lanes=i,mo(t,i,r),pt(t,r),t}function Nl(t,e,n,r){var i=e.current,s=ot(),o=Qn(i);return n=O_(n),e.context===null?e.context=n:e.pendingContext=n,e=dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qn(i,e,o),t!==null&&(jt(t,i,o,s),ya(t,i,o)),o}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _f(t,e){cm(t,e),(t=t.alternate)&&cm(t,e)}function Qw(){return null}var F_=typeof reportError=="function"?reportError:function(t){console.error(t)};function vf(t){this._internalRoot=t}Vl.prototype.render=vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Nl(t,e,null,null)};Vl.prototype.unmount=vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){Nl(null,t,null,null)}),e[gn]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=my();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fn.length&&e!==0&&e<Fn[n].priority;n++);Fn.splice(n,0,t),n===0&&yy(t)}};function Ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hm(){}function Gw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=tl(o);s.call(c)}}var o=M_(e,r,t,0,null,!1,!1,"",hm);return t._reactRootContainer=o,t[gn]=o.current,Ws(t.nodeType===8?t.parentNode:t),br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=tl(u);l.call(c)}}var u=yf(t,0,!1,null,null,!1,!1,"",hm);return t._reactRootContainer=u,t[gn]=u.current,Ws(t.nodeType===8?t.parentNode:t),br(function(){Nl(e,u,n,r)}),u}function Ll(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=tl(o);l.call(u)}}Nl(e,o,t,i)}else o=Gw(n,e,t,i,r);return tl(o)}dy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vs(e.pendingLanes);n!==0&&(Fh(e,n|1),pt(e,Re()),!(ie&6)&&(ki=Re()+500,dr()))}break;case 13:br(function(){var r=yn(t,1);if(r!==null){var i=ot();jt(r,t,1,i)}}),_f(t,1)}};jh=function(t){if(t.tag===13){var e=yn(t,134217728);if(e!==null){var n=ot();jt(e,t,134217728,n)}_f(t,134217728)}};py=function(t){if(t.tag===13){var e=Qn(t),n=yn(t,e);if(n!==null){var r=ot();jt(n,t,e,r)}_f(t,e)}};my=function(){return ae};gy=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};vc=function(t,e,n){switch(e){case"input":if(fc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Il(r);if(!i)throw Error(U(90));Kg(r),fc(r,i)}}}break;case"textarea":Gg(t,n);break;case"select":e=n.value,e!=null&&di(t,!!n.multiple,e,!1)}};ny=df;ry=br;var Yw={usingClientEntryPoint:!1,Events:[yo,oi,Il,ey,ty,df]},ps={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xw={bundleType:ps.bundleType,version:ps.version,rendererPackageName:ps.rendererPackageName,rendererConfig:ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=oy(t),t===null?null:t.stateNode},findFiberByHostInstance:ps.findFiberByHostInstance||Qw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ia.isDisabled&&ia.supportsFiber)try{El=ia.inject(Xw),Qt=ia}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yw;wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ef(e))throw Error(U(200));return Kw(t,e,null,n)};wt.createRoot=function(t,e){if(!Ef(t))throw Error(U(299));var n=!1,r="",i=F_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yf(t,1,!1,null,null,n,!1,r,i),t[gn]=e.current,Ws(t.nodeType===8?t.parentNode:t),new vf(e)};wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=oy(e),t=t===null?null:t.stateNode,t};wt.flushSync=function(t){return br(t)};wt.hydrate=function(t,e,n){if(!Dl(e))throw Error(U(200));return Ll(null,t,e,!0,n)};wt.hydrateRoot=function(t,e,n){if(!Ef(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=F_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=M_(e,null,t,1,n??null,i,!1,s,o),t[gn]=e.current,Ws(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Vl(e)};wt.render=function(t,e,n){if(!Dl(e))throw Error(U(200));return Ll(null,t,e,!1,n)};wt.unmountComponentAtNode=function(t){if(!Dl(t))throw Error(U(40));return t._reactRootContainer?(br(function(){Ll(null,null,t,!1,function(){t._reactRootContainer=null,t[gn]=null})}),!0):!1};wt.unstable_batchedUpdates=df;wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Dl(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Ll(t,e,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function j_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j_)}catch(t){console.error(t)}}j_(),jg.exports=wt;var Jw=jg.exports,fm=Jw;sc.createRoot=fm.createRoot,sc.hydrateRoot=fm.hydrateRoot;const Zw="modulepreload",eT=function(t){return"/"+t},dm={},tT=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=eT(s),s in dm)return;dm[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const p=i[d];if(p.href===s&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Zw,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((d,p)=>{c.addEventListener("load",d),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var wf={};Object.defineProperty(wf,"__esModule",{value:!0});wf.parse=lT;wf.serialize=uT;const nT=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,rT=/^[\u0021-\u003A\u003C-\u007E]*$/,iT=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,sT=/^[\u0020-\u003A\u003D-\u007E]*$/,oT=Object.prototype.toString,aT=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function lT(t,e){const n=new aT,r=t.length;if(r<2)return n;const i=(e==null?void 0:e.decode)||cT;let s=0;do{const o=t.indexOf("=",s);if(o===-1)break;const l=t.indexOf(";",s),u=l===-1?r:l;if(o>u){s=t.lastIndexOf(";",o-1)+1;continue}const c=pm(t,s,o),d=mm(t,o,c),p=t.slice(c,d);if(n[p]===void 0){let _=pm(t,o+1,u),A=mm(t,u,_);const R=i(t.slice(_,A));n[p]=R}s=u+1}while(s<r);return n}function pm(t,e,n){do{const r=t.charCodeAt(e);if(r!==32&&r!==9)return e}while(++e<n);return n}function mm(t,e,n){for(;e>n;){const r=t.charCodeAt(--e);if(r!==32&&r!==9)return e+1}return n}function uT(t,e,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!nT.test(t))throw new TypeError(`argument name is invalid: ${t}`);const i=r(e);if(!rT.test(i))throw new TypeError(`argument val is invalid: ${e}`);let s=t+"="+i;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!iT.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!sT.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!hT(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function cT(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function hT(t){return oT.call(t)==="[object Date]"}var gm="popstate";function fT(t={}){function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Jc("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:eo(i)}return pT(e,n,null,t)}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function tn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dT(){return Math.random().toString(36).substring(2,10)}function ym(t,e){return{usr:t.state,key:t.key,idx:e}}function Jc(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Fi(e):e,state:n,key:e&&e.key||r||dT()}}function eo({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Fi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function pT(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l="POP",u=null,c=d();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function d(){return(o.state||{idx:null}).idx}function p(){l="POP";let P=d(),E=P==null?null:P-c;c=P,u&&u({action:l,location:x.location,delta:E})}function _(P,E){l="PUSH";let y=Jc(x.location,P,E);n&&n(y,P),c=d()+1;let v=ym(y,c),V=x.createHref(y);try{o.pushState(v,"",V)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(V)}s&&u&&u({action:l,location:x.location,delta:1})}function A(P,E){l="REPLACE";let y=Jc(x.location,P,E);n&&n(y,P),c=d();let v=ym(y,c),V=x.createHref(y);o.replaceState(v,"",V),s&&u&&u({action:l,location:x.location,delta:0})}function R(P){let E=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof P=="string"?P:eo(P);return y=y.replace(/ $/,"%20"),we(E,`No window.location.(origin|href) available to create URL for href: ${y}`),new URL(y,E)}let x={get action(){return l},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(gm,p),u=P,()=>{i.removeEventListener(gm,p),u=null}},createHref(P){return e(i,P)},createURL:R,encodeLocation(P){let E=R(P);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:_,replace:A,go(P){return o.go(P)}};return x}function U_(t,e,n="/"){return mT(t,e,n,!1)}function mT(t,e,n,r){let i=typeof e=="string"?Fi(e):e,s=vn(i.pathname||"/",n);if(s==null)return null;let o=$_(t);gT(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=RT(s);l=AT(o[u],c,r)}return l}function $_(t,e=[],n=[],r=""){let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(we(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length));let c=pn([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(we(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),$_(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:ST(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of z_(s.path))i(s,o,u)}),e}function z_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=z_(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function gT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:IT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var yT=/^:[\w-]+$/,_T=3,vT=2,ET=1,wT=10,TT=-2,_m=t=>t==="*";function ST(t,e){let n=t.split("/"),r=n.length;return n.some(_m)&&(r+=TT),e&&(r+=vT),n.filter(i=>!_m(i)).reduce((i,s)=>i+(yT.test(s)?_T:s===""?ET:wT),r)}function IT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function AT(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=nl({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),_=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=nl({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:pn([s,p.pathname]),pathnameBase:NT(pn([s,p.pathnameBase])),route:_}),p.pathnameBase!=="/"&&(s=pn([s,p.pathnameBase]))}return o}function nl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=CT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,{paramName:d,isOptional:p},_)=>{if(d==="*"){let R=l[_]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const A=l[_];return p&&!A?c[d]=void 0:c[d]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function CT(t,e=!1,n=!0){tn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function RT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return tn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function vn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function xT(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Fi(t):t;return{pathname:n?n.startsWith("/")?n:PT(n,e):e,search:VT(r),hash:DT(i)}}function PT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qu(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function kT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function B_(t){let e=kT(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function H_(t,e,n,r=!1){let i;typeof t=="string"?i=Fi(t):(i={...t},we(!i.pathname||!i.pathname.includes("?"),Qu("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),Qu("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),Qu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let _=o.split("/");for(;_[0]==="..";)_.shift(),p-=1;i.pathname=_.join("/")}l=p>=0?e[p]:"/"}let u=xT(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}var pn=t=>t.join("/").replace(/\/\/+/g,"/"),NT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),VT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,DT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function LT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var W_=["POST","PUT","PATCH","DELETE"];new Set(W_);var bT=["GET",...W_];new Set(bT);var ji=D.createContext(null);ji.displayName="DataRouter";var bl=D.createContext(null);bl.displayName="DataRouterState";var q_=D.createContext({isTransitioning:!1});q_.displayName="ViewTransition";var OT=D.createContext(new Map);OT.displayName="Fetchers";var MT=D.createContext(null);MT.displayName="Await";var on=D.createContext(null);on.displayName="Navigation";var vo=D.createContext(null);vo.displayName="Location";var An=D.createContext({outlet:null,matches:[],isDataRoute:!1});An.displayName="Route";var Tf=D.createContext(null);Tf.displayName="RouteError";function FT(t,{relative:e}={}){we(Eo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=D.useContext(on),{hash:i,pathname:s,search:o}=wo(t,{relative:e}),l=s;return n!=="/"&&(l=s==="/"?n:pn([n,s])),r.createHref({pathname:l,search:o,hash:i})}function Eo(){return D.useContext(vo)!=null}function $r(){return we(Eo(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(vo).location}var K_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Q_(t){D.useContext(on).static||D.useLayoutEffect(t)}function jT(){let{isDataRoute:t}=D.useContext(An);return t?JT():UT()}function UT(){we(Eo(),"useNavigate() may be used only in the context of a <Router> component.");let t=D.useContext(ji),{basename:e,navigator:n}=D.useContext(on),{matches:r}=D.useContext(An),{pathname:i}=$r(),s=JSON.stringify(B_(r)),o=D.useRef(!1);return Q_(()=>{o.current=!0}),D.useCallback((u,c={})=>{if(tn(o.current,K_),!o.current)return;if(typeof u=="number"){n.go(u);return}let d=H_(u,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:pn([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,s,i,t])}D.createContext(null);function wo(t,{relative:e}={}){let{matches:n}=D.useContext(An),{pathname:r}=$r(),i=JSON.stringify(B_(n));return D.useMemo(()=>H_(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function $T(t,e){return G_(t,e)}function G_(t,e,n,r){var y;we(Eo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:s}=D.useContext(on),{matches:o}=D.useContext(An),l=o[o.length-1],u=l?l.params:{},c=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let v=p&&p.path||"";Y_(c,!p||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let _=$r(),A;if(e){let v=typeof e=="string"?Fi(e):e;we(d==="/"||((y=v.pathname)==null?void 0:y.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${v.pathname}" was given in the \`location\` prop.`),A=v}else A=_;let R=A.pathname||"/",x=R;if(d!=="/"){let v=d.replace(/^\//,"").split("/");x="/"+R.replace(/^\//,"").split("/").slice(v.length).join("/")}let P=!s&&n&&n.matches&&n.matches.length>0?n.matches:U_(t,{pathname:x});tn(p||P!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),tn(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=qT(P&&P.map(v=>Object.assign({},v,{params:Object.assign({},u,v.params),pathname:pn([d,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?d:pn([d,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),o,n,r);return e&&E?D.createElement(vo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},E):E}function zT(){let t=XT(),e=LT(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:s},"ErrorBoundary")," or"," ",D.createElement("code",{style:s},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,o)}var BT=D.createElement(zT,null),HT=class extends D.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?D.createElement(An.Provider,{value:this.props.routeContext},D.createElement(Tf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function WT({routeContext:t,match:e,children:n}){let r=D.useContext(ji);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),D.createElement(An.Provider,{value:t},n)}function qT(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,s=n==null?void 0:n.errors;if(s!=null){let u=i.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);we(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,u+1))}let o=!1,l=-1;if(n)for(let u=0;u<i.length;u++){let c=i[u];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(l=u),c.route.id){let{loaderData:d,errors:p}=n,_=c.route.loader&&!d.hasOwnProperty(c.route.id)&&(!p||p[c.route.id]===void 0);if(c.route.lazy||_){o=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((u,c,d)=>{let p,_=!1,A=null,R=null;n&&(p=s&&c.route.id?s[c.route.id]:void 0,A=c.route.errorElement||BT,o&&(l<0&&d===0?(Y_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,R=null):l===d&&(_=!0,R=c.route.hydrateFallbackElement||null)));let x=e.concat(i.slice(0,d+1)),P=()=>{let E;return p?E=A:_?E=R:c.route.Component?E=D.createElement(c.route.Component,null):c.route.element?E=c.route.element:E=u,D.createElement(WT,{match:c,routeContext:{outlet:u,matches:x,isDataRoute:n!=null},children:E})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?D.createElement(HT,{location:n.location,revalidation:n.revalidation,component:A,error:p,children:P(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):P()},null)}function Sf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function KT(t){let e=D.useContext(ji);return we(e,Sf(t)),e}function QT(t){let e=D.useContext(bl);return we(e,Sf(t)),e}function GT(t){let e=D.useContext(An);return we(e,Sf(t)),e}function If(t){let e=GT(t),n=e.matches[e.matches.length-1];return we(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function YT(){return If("useRouteId")}function XT(){var r;let t=D.useContext(Tf),e=QT("useRouteError"),n=If("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function JT(){let{router:t}=KT("useNavigate"),e=If("useNavigate"),n=D.useRef(!1);return Q_(()=>{n.current=!0}),D.useCallback(async(i,s={})=>{tn(n.current,K_),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var vm={};function Y_(t,e,n){!e&&!vm[t]&&(vm[t]=!0,tn(!1,n))}D.memo(ZT);function ZT({routes:t,future:e,state:n}){return G_(t,void 0,n,e)}function Yr(t){we(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function eS({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){we(!Eo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),l=D.useMemo(()=>({basename:o,navigator:i,static:s,future:{}}),[o,i,s]);typeof n=="string"&&(n=Fi(n));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:_="default"}=n,A=D.useMemo(()=>{let R=vn(u,o);return R==null?null:{location:{pathname:R,search:c,hash:d,state:p,key:_},navigationType:r}},[o,u,c,d,p,_,r]);return tn(A!=null,`<Router basename="${o}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:D.createElement(on.Provider,{value:l},D.createElement(vo.Provider,{children:e,value:A}))}function tS({children:t,location:e}){return $T(Zc(t),e)}function Zc(t,e=[]){let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,Zc(r.props.children,s));return}we(r.type===Yr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),we(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Zc(r.props.children,s)),n.push(o)}),n}var Ia="get",Aa="application/x-www-form-urlencoded";function Ol(t){return t!=null&&typeof t.tagName=="string"}function nS(t){return Ol(t)&&t.tagName.toLowerCase()==="button"}function rS(t){return Ol(t)&&t.tagName.toLowerCase()==="form"}function iS(t){return Ol(t)&&t.tagName.toLowerCase()==="input"}function sS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function oS(t,e){return t.button===0&&(!e||e==="_self")&&!sS(t)}var sa=null;function aS(){if(sa===null)try{new FormData(document.createElement("form"),0),sa=!1}catch{sa=!0}return sa}var lS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gu(t){return t!=null&&!lS.has(t)?(tn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Aa}"`),null):t}function uS(t,e){let n,r,i,s,o;if(rS(t)){let l=t.getAttribute("action");r=l?vn(l,e):null,n=t.getAttribute("method")||Ia,i=Gu(t.getAttribute("enctype"))||Aa,s=new FormData(t)}else if(nS(t)||iS(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(r=u?vn(u,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||Ia,i=Gu(t.getAttribute("formenctype"))||Gu(l.getAttribute("enctype"))||Aa,s=new FormData(l,t),!aS()){let{name:c,type:d,value:p}=t;if(d==="image"){let _=c?`${c}.`:"";s.append(`${_}x`,"0"),s.append(`${_}y`,"0")}else c&&s.append(c,p)}}else{if(Ol(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ia,r=null,i=Aa,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}function Af(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function cS(t,e){if(t.id in e)return e[t.id];try{let n=await tT(()=>import(t.module),[]);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hS(t){return t!=null&&typeof t.page=="string"}function fS(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function dS(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await cS(s,n);return o.links?o.links():[]}return[]}));return yS(r.flat(1).filter(fS).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Em(t,e,n,r,i,s){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,l=(u,c)=>{var d;return n[c].pathname!==u.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return s==="assets"?e.filter((u,c)=>o(u,c)||l(u,c)):s==="data"?e.filter((u,c)=>{var p;let d=r.routes[u.route.id];if(!d||!d.hasLoader)return!1;if(o(u,c)||l(u,c))return!0;if(u.route.shouldRevalidate){let _=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function pS(t,e,{includeHydrateFallback:n}={}){return mS(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function mS(t){return[...new Set(t)]}function gS(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function yS(t,e){let n=new Set,r=new Set(e);return t.reduce((i,s)=>{if(e&&!hS(s)&&s.as==="script"&&s.href&&r.has(s.href))return i;let l=JSON.stringify(gS(s));return n.has(l)||(n.add(l),i.push({key:l,link:s})),i},[])}function _S(t,e){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname="_root.data":e&&vn(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function X_(){let t=D.useContext(ji);return Af(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function vS(){let t=D.useContext(bl);return Af(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Cf=D.createContext(void 0);Cf.displayName="FrameworkContext";function J_(){let t=D.useContext(Cf);return Af(t,"You must render this element inside a <HydratedRouter> element"),t}function ES(t,e){let n=D.useContext(Cf),[r,i]=D.useState(!1),[s,o]=D.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:p}=e,_=D.useRef(null);D.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let x=E=>{E.forEach(y=>{o(y.isIntersecting)})},P=new IntersectionObserver(x,{threshold:.5});return _.current&&P.observe(_.current),()=>{P.disconnect()}}},[t]),D.useEffect(()=>{if(r){let x=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(x)}}},[r]);let A=()=>{i(!0)},R=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,_,{}]:[s,_,{onFocus:ms(l,A),onBlur:ms(u,R),onMouseEnter:ms(c,A),onMouseLeave:ms(d,R),onTouchStart:ms(p,A)}]:[!1,_,{}]}function ms(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function wS({page:t,...e}){let{router:n}=X_(),r=D.useMemo(()=>U_(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?D.createElement(SS,{page:t,matches:r,...e}):null}function TS(t){let{manifest:e,routeModules:n}=J_(),[r,i]=D.useState([]);return D.useEffect(()=>{let s=!1;return dS(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function SS({page:t,matches:e,...n}){let r=$r(),{manifest:i,routeModules:s}=J_(),{basename:o}=X_(),{loaderData:l,matches:u}=vS(),c=D.useMemo(()=>Em(t,e,u,i,r,"data"),[t,e,u,i,r]),d=D.useMemo(()=>Em(t,e,u,i,r,"assets"),[t,e,u,i,r]),p=D.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let R=new Set,x=!1;if(e.forEach(E=>{var v;let y=i.routes[E.route.id];!y||!y.hasLoader||(!c.some(V=>V.route.id===E.route.id)&&E.route.id in l&&((v=s[E.route.id])!=null&&v.shouldRevalidate)||y.hasClientLoader?x=!0:R.add(E.route.id))}),R.size===0)return[];let P=_S(t,o);return x&&R.size>0&&P.searchParams.set("_routes",e.filter(E=>R.has(E.route.id)).map(E=>E.route.id).join(",")),[P.pathname+P.search]},[o,l,r,i,c,e,t,s]),_=D.useMemo(()=>pS(d,i),[d,i]),A=TS(d);return D.createElement(D.Fragment,null,p.map(R=>D.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...n})),_.map(R=>D.createElement("link",{key:R,rel:"modulepreload",href:R,...n})),A.map(({key:R,link:x})=>D.createElement("link",{key:R,...x})))}function IS(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Z_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Z_&&(window.__reactRouterVersion="7.4.0")}catch{}function AS({basename:t,children:e,window:n}){let r=D.useRef();r.current==null&&(r.current=fT({window:n,v5Compat:!0}));let i=r.current,[s,o]=D.useState({action:i.action,location:i.location}),l=D.useCallback(u=>{D.startTransition(()=>o(u))},[o]);return D.useLayoutEffect(()=>i.listen(l),[i,l]),D.createElement(eS,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:i})}var ev=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mn=D.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p,..._},A){let{basename:R}=D.useContext(on),x=typeof c=="string"&&ev.test(c),P,E=!1;if(typeof c=="string"&&x&&(P=c,Z_))try{let T=new URL(window.location.href),I=c.startsWith("//")?new URL(T.protocol+c):new URL(c),C=vn(I.pathname,R);I.origin===T.origin&&C!=null?c=C+I.search+I.hash:E=!0}catch{tn(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=FT(c,{relative:i}),[v,V,O]=ES(r,_),j=PS(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function w(T){e&&e(T),T.defaultPrevented||j(T)}let g=D.createElement("a",{..._,...O,href:P||y,onClick:E||s?e:w,ref:IS(A,V),target:u,"data-discover":!x&&n==="render"?"true":void 0});return v&&!x?D.createElement(D.Fragment,null,g,D.createElement(wS,{page:y})):g});Mn.displayName="Link";var CS=D.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:l,children:u,...c},d){let p=wo(o,{relative:c.relative}),_=$r(),A=D.useContext(bl),{navigator:R,basename:x}=D.useContext(on),P=A!=null&&LS(p)&&l===!0,E=R.encodeLocation?R.encodeLocation(p).pathname:p.pathname,y=_.pathname,v=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;n||(y=y.toLowerCase(),v=v?v.toLowerCase():null,E=E.toLowerCase()),v&&x&&(v=vn(v,x)||v);const V=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let O=y===E||!i&&y.startsWith(E)&&y.charAt(V)==="/",j=v!=null&&(v===E||!i&&v.startsWith(E)&&v.charAt(E.length)==="/"),w={isActive:O,isPending:j,isTransitioning:P},g=O?e:void 0,T;typeof r=="function"?T=r(w):T=[r,O?"active":null,j?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let I=typeof s=="function"?s(w):s;return D.createElement(Mn,{...c,"aria-current":g,className:T,ref:d,style:I,to:o,viewTransition:l},typeof u=="function"?u(w):u)});CS.displayName="NavLink";var RS=D.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=Ia,action:l,onSubmit:u,relative:c,preventScrollReset:d,viewTransition:p,..._},A)=>{let R=VS(),x=DS(l,{relative:c}),P=o.toLowerCase()==="get"?"get":"post",E=typeof l=="string"&&ev.test(l),y=v=>{if(u&&u(v),v.defaultPrevented)return;v.preventDefault();let V=v.nativeEvent.submitter,O=(V==null?void 0:V.getAttribute("formmethod"))||o;R(V||v.currentTarget,{fetcherKey:e,method:O,navigate:n,replace:i,state:s,relative:c,preventScrollReset:d,viewTransition:p})};return D.createElement("form",{ref:A,method:P,action:x,onSubmit:r?u:y,..._,"data-discover":!E&&t==="render"?"true":void 0})});RS.displayName="Form";function xS(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tv(t){let e=D.useContext(ji);return we(e,xS(t)),e}function PS(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let l=jT(),u=$r(),c=wo(t,{relative:s});return D.useCallback(d=>{if(oS(d,e)){d.preventDefault();let p=n!==void 0?n:eo(u)===eo(c);l(t,{replace:p,state:r,preventScrollReset:i,relative:s,viewTransition:o})}},[u,l,c,n,r,e,t,i,s,o])}var kS=0,NS=()=>`__${String(++kS)}__`;function VS(){let{router:t}=tv("useSubmit"),{basename:e}=D.useContext(on),n=YT();return D.useCallback(async(r,i={})=>{let{action:s,method:o,encType:l,formData:u,body:c}=uS(r,e);if(i.navigate===!1){let d=i.fetcherKey||NS();await t.fetch(d,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||o,formEncType:i.encType||l,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||o,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function DS(t,{relative:e}={}){let{basename:n}=D.useContext(on),r=D.useContext(An);we(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...wo(t||".",{relative:e})},o=$r();if(t==null){s.search=o.search;let l=new URLSearchParams(s.search),u=l.getAll("index");if(u.some(d=>d==="")){l.delete("index"),u.filter(p=>p).forEach(p=>l.append("index",p));let d=l.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:pn([n,s.pathname])),eo(s)}function LS(t,e={}){let n=D.useContext(q_);we(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=tv("useViewTransitionState"),i=wo(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=vn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=vn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return nl(i.pathname,o)!=null||nl(i.pathname,s)!=null}new TextEncoder;const bS=()=>b.jsx("nav",{className:"navbar navbar-expand-lg",children:b.jsxs("div",{className:"container",children:[b.jsx(Mn,{className:"navbar-brand",to:"/",children:"Expense Tracker"}),b.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav",children:b.jsx("span",{className:"navbar-toggler-icon"})}),b.jsx("div",{className:"collapse navbar-collapse",id:"navbarNav",children:b.jsxs("ul",{className:"navbar-nav ms-auto",children:[b.jsx("li",{className:"nav-item",children:b.jsxs(Mn,{className:"nav-link",to:"/",children:[b.jsx("i",{className:"bi bi-speedometer2 me-2"})," Dashboard"]})}),b.jsx("li",{className:"nav-item",children:b.jsxs(Mn,{className:"nav-link",to:"/add-income",children:[b.jsx("i",{className:"bi bi-wallet2 me-2"})," Add Income"]})}),b.jsx("li",{className:"nav-item",children:b.jsxs(Mn,{className:"nav-link",to:"/add-expense",children:[b.jsx("i",{className:"bi bi-cash-stack me-2"})," Add Expense"]})}),b.jsx("li",{className:"nav-item",children:b.jsxs(Mn,{className:"nav-link",to:"/add-category",children:[b.jsx("i",{className:"bi bi-tags me-2"})," Add Category"]})}),b.jsx("li",{className:"nav-item",children:b.jsxs(Mn,{className:"nav-link",to:"/view-expenses",children:[b.jsx("i",{className:"bi bi-bar-chart-line me-2"})," View Expenses"]})})]})})]})}),OS=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},MS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},rv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let _=(l&15)<<2|c>>6,A=c&63;u||(A=64,o||(_=64)),r.push(n[d],n[p],n[_],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new FS;const _=s<<2|l>>4;if(r.push(_),c!==64){const A=l<<4&240|c>>2;if(r.push(A),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class FS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jS=function(t){const e=nv(t);return rv.encodeByteArray(e,!0)},rl=function(t){return jS(t).replace(/\./g,"")},US=function(t){try{return rv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=()=>$S().__FIREBASE_DEFAULTS__,BS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},HS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&US(t[1]);return e&&JSON.parse(e)},Rf=()=>{try{return OS()||zS()||BS()||HS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},WS=t=>{var e,n;return(n=(e=Rf())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},qS=t=>{const e=WS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},iv=()=>{var t;return(t=Rf())==null?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[rl(JSON.stringify(n)),rl(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YS(){var e;const t=(e=Rf())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XS(){return!YS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JS(){try{return typeof indexedDB=="object"}catch{return!1}}function ZS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="FirebaseError";class Ui extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eI,Object.setPrototypeOf(this,Ui.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sv.prototype.create)}}class sv{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ui(i,l,r)}}function tI(t,e){return t.replace(nI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nI=/\{\$([^}]+)}/g;function il(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wm(s)&&wm(o)){if(!il(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rI(t){return(await fetch(t,{credentials:"include"})).ok}class no{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new KS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oI(e))try{this.getOrInitializeService({instanceIdentifier:Sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sr){return this.instances.has(e)}getOptions(e=Sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sr){return this.component?this.component.multipleInstances?e:Sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sI(t){return t===Sr?void 0:t}function oI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const lI={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},uI=re.INFO,cI={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},hI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=cI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class av{constructor(e){this.name=e,this._logLevel=uI,this._logHandler=hI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const fI=(t,e)=>e.some(n=>t instanceof n);let Tm,Sm;function dI(){return Tm||(Tm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pI(){return Sm||(Sm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lv=new WeakMap,eh=new WeakMap,uv=new WeakMap,Yu=new WeakMap,xf=new WeakMap;function mI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lv.set(n,t)}).catch(()=>{}),xf.set(e,t),e}function gI(t){if(eh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});eh.set(t,e)}let th={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return eh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yI(t){th=t(th)}function _I(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xu(this),e,...n);return uv.set(r,e.sort?e.sort():[e]),Yn(r)}:pI().includes(t)?function(...e){return t.apply(Xu(this),e),Yn(lv.get(this))}:function(...e){return Yn(t.apply(Xu(this),e))}}function vI(t){return typeof t=="function"?_I(t):(t instanceof IDBTransaction&&gI(t),fI(t,dI())?new Proxy(t,th):t)}function Yn(t){if(t instanceof IDBRequest)return mI(t);if(Yu.has(t))return Yu.get(t);const e=vI(t);return e!==t&&(Yu.set(t,e),xf.set(e,t)),e}const Xu=t=>xf.get(t);function EI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Yn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Yn(o.result),u.oldVersion,u.newVersion,Yn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const wI=["get","getKey","getAll","getAllKeys","count"],TI=["put","add","delete","clear"],Ju=new Map;function Im(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ju.get(e))return Ju.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=TI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wI.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Ju.set(e,s),s}yI(t=>({...t,get:(e,n,r)=>Im(e,n)||t.get(e,n,r),has:(e,n)=>!!Im(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(II(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function II(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nh="@firebase/app",Am="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new av("@firebase/app"),AI="@firebase/app-compat",CI="@firebase/analytics-compat",RI="@firebase/analytics",xI="@firebase/app-check-compat",PI="@firebase/app-check",kI="@firebase/auth",NI="@firebase/auth-compat",VI="@firebase/database",DI="@firebase/data-connect",LI="@firebase/database-compat",bI="@firebase/functions",OI="@firebase/functions-compat",MI="@firebase/installations",FI="@firebase/installations-compat",jI="@firebase/messaging",UI="@firebase/messaging-compat",$I="@firebase/performance",zI="@firebase/performance-compat",BI="@firebase/remote-config",HI="@firebase/remote-config-compat",WI="@firebase/storage",qI="@firebase/storage-compat",KI="@firebase/firestore",QI="@firebase/ai",GI="@firebase/firestore-compat",YI="firebase",XI="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="[DEFAULT]",JI={[nh]:"fire-core",[AI]:"fire-core-compat",[RI]:"fire-analytics",[CI]:"fire-analytics-compat",[PI]:"fire-app-check",[xI]:"fire-app-check-compat",[kI]:"fire-auth",[NI]:"fire-auth-compat",[VI]:"fire-rtdb",[DI]:"fire-data-connect",[LI]:"fire-rtdb-compat",[bI]:"fire-fn",[OI]:"fire-fn-compat",[MI]:"fire-iid",[FI]:"fire-iid-compat",[jI]:"fire-fcm",[UI]:"fire-fcm-compat",[$I]:"fire-perf",[zI]:"fire-perf-compat",[BI]:"fire-rc",[HI]:"fire-rc-compat",[WI]:"fire-gcs",[qI]:"fire-gcs-compat",[KI]:"fire-fst",[GI]:"fire-fst-compat",[QI]:"fire-vertex","fire-js":"fire-js",[YI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Map,ZI=new Map,ih=new Map;function Cm(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ol(t){const e=t.name;if(ih.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;ih.set(e,t);for(const n of sl.values())Cm(n,t);for(const n of ZI.values())Cm(n,t);return!0}function eA(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tA(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new sv("app","Firebase",nA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new no("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=XI;function cv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:rh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Xn.create("bad-app-name",{appName:String(i)});if(n||(n=iv()),!n)throw Xn.create("no-options");const s=sl.get(i);if(s){if(il(n,s.options)&&il(r,s.config))return s;throw Xn.create("duplicate-app",{appName:i})}const o=new aI(i);for(const u of ih.values())o.addComponent(u);const l=new rA(n,r,o);return sl.set(i,l),l}function sA(t=rh){const e=sl.get(t);if(!e&&t===rh&&iv())return cv();if(!e)throw Xn.create("no-app",{appName:t});return e}function vi(t,e,n){let r=JI[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(o.join(" "));return}ol(new no(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA="firebase-heartbeat-database",aA=1,ro="firebase-heartbeat-store";let Zu=null;function hv(){return Zu||(Zu=EI(oA,aA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),Zu}async function lA(t){try{const n=(await hv()).transaction(ro),r=await n.objectStore(ro).get(fv(t));return await n.done,r}catch(e){if(e instanceof Ui)En.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function Rm(t,e){try{const r=(await hv()).transaction(ro,"readwrite");await r.objectStore(ro).put(e,fv(t)),await r.done}catch(n){if(n instanceof Ui)En.warn(n.message);else{const r=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(r.message)}}}function fv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=1024,cA=30;class hA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>cA){const o=pA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xm(),{heartbeatsToSend:r,unsentEntries:i}=fA(this._heartbeatsCache.heartbeats),s=rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return En.warn(n),""}}}function xm(){return new Date().toISOString().substring(0,10)}function fA(t,e=uA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JS()?ZS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Pm(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}function pA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){ol(new no("platform-logger",e=>new SI(e),"PRIVATE")),ol(new no("heartbeat",e=>new hA(e),"PRIVATE")),vi(nh,Am,t),vi(nh,Am,"esm2020"),vi("fire-js","")}mA("");var gA="firebase",yA="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi(gA,yA,"app");var km=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,dv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function T(){}T.prototype=g.prototype,w.F=g.prototype,w.prototype=new T,w.prototype.constructor=w,w.D=function(I,C,k){for(var S=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)S[Ne-2]=arguments[Ne];return g.prototype[C].apply(I,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,T){T||(T=0);const I=Array(16);if(typeof g=="string")for(var C=0;C<16;++C)I[C]=g.charCodeAt(T++)|g.charCodeAt(T++)<<8|g.charCodeAt(T++)<<16|g.charCodeAt(T++)<<24;else for(C=0;C<16;++C)I[C]=g[T++]|g[T++]<<8|g[T++]<<16|g[T++]<<24;g=w.g[0],T=w.g[1],C=w.g[2];let k=w.g[3],S;S=g+(k^T&(C^k))+I[0]+3614090360&4294967295,g=T+(S<<7&4294967295|S>>>25),S=k+(C^g&(T^C))+I[1]+3905402710&4294967295,k=g+(S<<12&4294967295|S>>>20),S=C+(T^k&(g^T))+I[2]+606105819&4294967295,C=k+(S<<17&4294967295|S>>>15),S=T+(g^C&(k^g))+I[3]+3250441966&4294967295,T=C+(S<<22&4294967295|S>>>10),S=g+(k^T&(C^k))+I[4]+4118548399&4294967295,g=T+(S<<7&4294967295|S>>>25),S=k+(C^g&(T^C))+I[5]+1200080426&4294967295,k=g+(S<<12&4294967295|S>>>20),S=C+(T^k&(g^T))+I[6]+2821735955&4294967295,C=k+(S<<17&4294967295|S>>>15),S=T+(g^C&(k^g))+I[7]+4249261313&4294967295,T=C+(S<<22&4294967295|S>>>10),S=g+(k^T&(C^k))+I[8]+1770035416&4294967295,g=T+(S<<7&4294967295|S>>>25),S=k+(C^g&(T^C))+I[9]+2336552879&4294967295,k=g+(S<<12&4294967295|S>>>20),S=C+(T^k&(g^T))+I[10]+4294925233&4294967295,C=k+(S<<17&4294967295|S>>>15),S=T+(g^C&(k^g))+I[11]+2304563134&4294967295,T=C+(S<<22&4294967295|S>>>10),S=g+(k^T&(C^k))+I[12]+1804603682&4294967295,g=T+(S<<7&4294967295|S>>>25),S=k+(C^g&(T^C))+I[13]+4254626195&4294967295,k=g+(S<<12&4294967295|S>>>20),S=C+(T^k&(g^T))+I[14]+2792965006&4294967295,C=k+(S<<17&4294967295|S>>>15),S=T+(g^C&(k^g))+I[15]+1236535329&4294967295,T=C+(S<<22&4294967295|S>>>10),S=g+(C^k&(T^C))+I[1]+4129170786&4294967295,g=T+(S<<5&4294967295|S>>>27),S=k+(T^C&(g^T))+I[6]+3225465664&4294967295,k=g+(S<<9&4294967295|S>>>23),S=C+(g^T&(k^g))+I[11]+643717713&4294967295,C=k+(S<<14&4294967295|S>>>18),S=T+(k^g&(C^k))+I[0]+3921069994&4294967295,T=C+(S<<20&4294967295|S>>>12),S=g+(C^k&(T^C))+I[5]+3593408605&4294967295,g=T+(S<<5&4294967295|S>>>27),S=k+(T^C&(g^T))+I[10]+38016083&4294967295,k=g+(S<<9&4294967295|S>>>23),S=C+(g^T&(k^g))+I[15]+3634488961&4294967295,C=k+(S<<14&4294967295|S>>>18),S=T+(k^g&(C^k))+I[4]+3889429448&4294967295,T=C+(S<<20&4294967295|S>>>12),S=g+(C^k&(T^C))+I[9]+568446438&4294967295,g=T+(S<<5&4294967295|S>>>27),S=k+(T^C&(g^T))+I[14]+3275163606&4294967295,k=g+(S<<9&4294967295|S>>>23),S=C+(g^T&(k^g))+I[3]+4107603335&4294967295,C=k+(S<<14&4294967295|S>>>18),S=T+(k^g&(C^k))+I[8]+1163531501&4294967295,T=C+(S<<20&4294967295|S>>>12),S=g+(C^k&(T^C))+I[13]+2850285829&4294967295,g=T+(S<<5&4294967295|S>>>27),S=k+(T^C&(g^T))+I[2]+4243563512&4294967295,k=g+(S<<9&4294967295|S>>>23),S=C+(g^T&(k^g))+I[7]+1735328473&4294967295,C=k+(S<<14&4294967295|S>>>18),S=T+(k^g&(C^k))+I[12]+2368359562&4294967295,T=C+(S<<20&4294967295|S>>>12),S=g+(T^C^k)+I[5]+4294588738&4294967295,g=T+(S<<4&4294967295|S>>>28),S=k+(g^T^C)+I[8]+2272392833&4294967295,k=g+(S<<11&4294967295|S>>>21),S=C+(k^g^T)+I[11]+1839030562&4294967295,C=k+(S<<16&4294967295|S>>>16),S=T+(C^k^g)+I[14]+4259657740&4294967295,T=C+(S<<23&4294967295|S>>>9),S=g+(T^C^k)+I[1]+2763975236&4294967295,g=T+(S<<4&4294967295|S>>>28),S=k+(g^T^C)+I[4]+1272893353&4294967295,k=g+(S<<11&4294967295|S>>>21),S=C+(k^g^T)+I[7]+4139469664&4294967295,C=k+(S<<16&4294967295|S>>>16),S=T+(C^k^g)+I[10]+3200236656&4294967295,T=C+(S<<23&4294967295|S>>>9),S=g+(T^C^k)+I[13]+681279174&4294967295,g=T+(S<<4&4294967295|S>>>28),S=k+(g^T^C)+I[0]+3936430074&4294967295,k=g+(S<<11&4294967295|S>>>21),S=C+(k^g^T)+I[3]+3572445317&4294967295,C=k+(S<<16&4294967295|S>>>16),S=T+(C^k^g)+I[6]+76029189&4294967295,T=C+(S<<23&4294967295|S>>>9),S=g+(T^C^k)+I[9]+3654602809&4294967295,g=T+(S<<4&4294967295|S>>>28),S=k+(g^T^C)+I[12]+3873151461&4294967295,k=g+(S<<11&4294967295|S>>>21),S=C+(k^g^T)+I[15]+530742520&4294967295,C=k+(S<<16&4294967295|S>>>16),S=T+(C^k^g)+I[2]+3299628645&4294967295,T=C+(S<<23&4294967295|S>>>9),S=g+(C^(T|~k))+I[0]+4096336452&4294967295,g=T+(S<<6&4294967295|S>>>26),S=k+(T^(g|~C))+I[7]+1126891415&4294967295,k=g+(S<<10&4294967295|S>>>22),S=C+(g^(k|~T))+I[14]+2878612391&4294967295,C=k+(S<<15&4294967295|S>>>17),S=T+(k^(C|~g))+I[5]+4237533241&4294967295,T=C+(S<<21&4294967295|S>>>11),S=g+(C^(T|~k))+I[12]+1700485571&4294967295,g=T+(S<<6&4294967295|S>>>26),S=k+(T^(g|~C))+I[3]+2399980690&4294967295,k=g+(S<<10&4294967295|S>>>22),S=C+(g^(k|~T))+I[10]+4293915773&4294967295,C=k+(S<<15&4294967295|S>>>17),S=T+(k^(C|~g))+I[1]+2240044497&4294967295,T=C+(S<<21&4294967295|S>>>11),S=g+(C^(T|~k))+I[8]+1873313359&4294967295,g=T+(S<<6&4294967295|S>>>26),S=k+(T^(g|~C))+I[15]+4264355552&4294967295,k=g+(S<<10&4294967295|S>>>22),S=C+(g^(k|~T))+I[6]+2734768916&4294967295,C=k+(S<<15&4294967295|S>>>17),S=T+(k^(C|~g))+I[13]+1309151649&4294967295,T=C+(S<<21&4294967295|S>>>11),S=g+(C^(T|~k))+I[4]+4149444226&4294967295,g=T+(S<<6&4294967295|S>>>26),S=k+(T^(g|~C))+I[11]+3174756917&4294967295,k=g+(S<<10&4294967295|S>>>22),S=C+(g^(k|~T))+I[2]+718787259&4294967295,C=k+(S<<15&4294967295|S>>>17),S=T+(k^(C|~g))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+k&4294967295}r.prototype.v=function(w,g){g===void 0&&(g=w.length);const T=g-this.blockSize,I=this.C;let C=this.h,k=0;for(;k<g;){if(C==0)for(;k<=T;)i(this,w,k),k+=this.blockSize;if(typeof w=="string"){for(;k<g;)if(I[C++]=w.charCodeAt(k++),C==this.blockSize){i(this,I),C=0;break}}else for(;k<g;)if(I[C++]=w[k++],C==this.blockSize){i(this,I),C=0;break}}this.h=C,this.o+=g},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;g=this.o*8;for(var T=w.length-8;T<w.length;++T)w[T]=g&255,g/=256;for(this.v(w),w=Array(16),g=0,T=0;T<4;++T)for(let I=0;I<32;I+=8)w[g++]=this.g[T]>>>I&255;return w};function s(w,g){var T=l;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=g(w)}function o(w,g){this.h=g;const T=[];let I=!0;for(let C=w.length-1;C>=0;C--){const k=w[C]|0;I&&k==g||(T[C]=k,I=!1)}this.g=T}var l={};function u(w){return-128<=w&&w<128?s(w,function(g){return new o([g|0],g<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return P(c(-w));const g=[];let T=1;for(let I=0;w>=T;I++)g[I]=w/T|0,T*=4294967296;return new o(g,0)}function d(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return P(d(w.substring(1),g));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(g,8));let I=p;for(let k=0;k<w.length;k+=8){var C=Math.min(8,w.length-k);const S=parseInt(w.substring(k,k+C),g);C<8?(C=c(Math.pow(g,C)),I=I.j(C).add(c(S))):(I=I.j(T),I=I.add(c(S)))}return I}var p=u(0),_=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-P(this).m();let w=0,g=1;for(let T=0;T<this.g.length;T++){const I=this.i(T);w+=(I>=0?I:4294967296+I)*g,g*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(x(this))return"-"+P(this).toString(w);const g=c(Math.pow(w,6));var T=this;let I="";for(;;){const C=V(T,g).g;T=E(T,C.j(g));let k=((T.g.length>0?T.g[0]:T.h)>>>0).toString(w);if(T=C,R(T))return k+I;for(;k.length<6;)k="0"+k;I=k+I}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(let g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function x(w){return w.h==-1}t.l=function(w){return w=E(this,w),x(w)?-1:R(w)?0:1};function P(w){const g=w.g.length,T=[];for(let I=0;I<g;I++)T[I]=~w.g[I];return new o(T,~w.h).add(_)}t.abs=function(){return x(this)?P(this):this},t.add=function(w){const g=Math.max(this.g.length,w.g.length),T=[];let I=0;for(let C=0;C<=g;C++){let k=I+(this.i(C)&65535)+(w.i(C)&65535),S=(k>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);I=S>>>16,k&=65535,S&=65535,T[C]=S<<16|k}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(w,g){return w.add(P(g))}t.j=function(w){if(R(this)||R(w))return p;if(x(this))return x(w)?P(this).j(P(w)):P(P(this).j(w));if(x(w))return P(this.j(P(w)));if(this.l(A)<0&&w.l(A)<0)return c(this.m()*w.m());const g=this.g.length+w.g.length,T=[];for(var I=0;I<2*g;I++)T[I]=0;for(I=0;I<this.g.length;I++)for(let C=0;C<w.g.length;C++){const k=this.i(I)>>>16,S=this.i(I)&65535,Ne=w.i(C)>>>16,mt=w.i(C)&65535;T[2*I+2*C]+=S*mt,y(T,2*I+2*C),T[2*I+2*C+1]+=k*mt,y(T,2*I+2*C+1),T[2*I+2*C+1]+=S*Ne,y(T,2*I+2*C+1),T[2*I+2*C+2]+=k*Ne,y(T,2*I+2*C+2)}for(w=0;w<g;w++)T[w]=T[2*w+1]<<16|T[2*w];for(w=g;w<2*g;w++)T[w]=0;return new o(T,0)};function y(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function v(w,g){this.g=w,this.h=g}function V(w,g){if(R(g))throw Error("division by zero");if(R(w))return new v(p,p);if(x(w))return g=V(P(w),g),new v(P(g.g),P(g.h));if(x(g))return g=V(w,P(g)),new v(P(g.g),g.h);if(w.g.length>30){if(x(w)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var T=_,I=g;I.l(w)<=0;)T=O(T),I=O(I);var C=j(T,1),k=j(I,1);for(I=j(I,2),T=j(T,2);!R(I);){var S=k.add(I);S.l(w)<=0&&(C=C.add(T),k=S),I=j(I,1),T=j(T,1)}return g=E(w,C.j(g)),new v(C,g)}for(C=p;w.l(g)>=0;){for(T=Math.max(1,Math.floor(w.m()/g.m())),I=Math.ceil(Math.log(T)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),k=c(T),S=k.j(g);x(S)||S.l(w)>0;)T-=I,k=c(T),S=k.j(g);R(k)&&(k=_),C=C.add(k),w=E(w,S)}return new v(C,w)}t.B=function(w){return V(this,w).h},t.and=function(w){const g=Math.max(this.g.length,w.g.length),T=[];for(let I=0;I<g;I++)T[I]=this.i(I)&w.i(I);return new o(T,this.h&w.h)},t.or=function(w){const g=Math.max(this.g.length,w.g.length),T=[];for(let I=0;I<g;I++)T[I]=this.i(I)|w.i(I);return new o(T,this.h|w.h)},t.xor=function(w){const g=Math.max(this.g.length,w.g.length),T=[];for(let I=0;I<g;I++)T[I]=this.i(I)^w.i(I);return new o(T,this.h^w.h)};function O(w){const g=w.g.length+1,T=[];for(let I=0;I<g;I++)T[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(T,w.h)}function j(w,g){const T=g>>5;g%=32;const I=w.g.length-T,C=[];for(let k=0;k<I;k++)C[k]=g>0?w.i(k+T)>>>g|w.i(k+T+1)<<32-g:w.i(k+T);return new o(C,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,dv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Jn=o}).apply(typeof km<"u"?km:typeof self<"u"?self:typeof window<"u"?window:{});var oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pv,ws,mv,Ca,sh,gv,yv,_v;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof oa=="object"&&oa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var N=a[m];if(!(N in f))break e;f=f[N]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&f.push([m,h[m]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(m,N,L){for(var $=Array(arguments.length-2),J=2;J<arguments.length;J++)$[J-2]=arguments[J];return h.prototype[N].apply(m,$)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const h=a.length;if(h>0){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function R(a,h){for(let m=1;m<arguments.length;m++){const N=arguments[m];var f=typeof N;if(f=f!="object"?f:N?Array.isArray(N)?"array":f:"null",f=="array"||f=="object"&&typeof N.length=="number"){f=a.length||0;const L=N.length||0;a.length=f+L;for(let $=0;$<L;$++)a[f+$]=N[$]}else a.push(N)}}class x{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(a){o.setTimeout(()=>{throw a},0)}function E(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class y{constructor(){this.h=this.g=null}add(h,f){const m=v.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var v=new x(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let O,j=!1,w=new y,g=()=>{const a=Promise.resolve(void 0);O=()=>{a.then(T)}};function T(){for(var a;a=E();){try{a.h.call(a.g)}catch(f){P(f)}var h=v;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}j=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function Ne(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Ne,C),Ne.prototype.init=function(a,h){const f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ne.Z.h.call(this)},Ne.prototype.h=function(){Ne.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var mt="closure_listenable_"+(Math.random()*1e6|0),Cn=0;function an(a,h,f,m,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=N,this.key=++Cn,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function X(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function ge(a){const h={};for(const f in a)h[f]=a[f];return h}const Ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pr(a,h){let f,m;for(let N=1;N<arguments.length;N++){m=arguments[N];for(f in m)a[f]=m[f];for(let L=0;L<Ae.length;L++)f=Ae[L],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function St(a){this.src=a,this.g={},this.h=0}St.prototype.add=function(a,h,f,m,N){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const $=Vt(a,h,m,N);return $>-1?(h=a[$],f||(h.fa=!1)):(h=new an(h,this.src,L,!!m,N),h.fa=f,a.push(h)),h};function mr(a,h){const f=h.type;if(f in a.g){var m=a.g[f],N=Array.prototype.indexOf.call(m,h,void 0),L;(L=N>=0)&&Array.prototype.splice.call(m,N,1),L&&(z(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Vt(a,h,f,m){for(let N=0;N<a.length;++N){const L=a[N];if(!L.da&&L.listener==h&&L.capture==!!f&&L.ha==m)return N}return-1}var Rn="closure_lm_"+(Math.random()*1e6|0),eu={};function sd(a,h,f,m,N){if(m&&m.once)return ad(a,h,f,m,N);if(Array.isArray(h)){for(let L=0;L<h.length;L++)sd(a,h[L],f,m,N);return null}return f=iu(f),a&&a[mt]?a.J(h,f,l(m)?!!m.capture:!!m,N):od(a,h,f,!1,m,N)}function od(a,h,f,m,N,L){if(!h)throw Error("Invalid event type");const $=l(N)?!!N.capture:!!N;let J=nu(a);if(J||(a[Rn]=J=new St(a)),f=J.add(h,f,m,$,L),f.proxy)return f;if(m=J0(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)k||(N=$),N===void 0&&(N=!1),a.addEventListener(h.toString(),m,N);else if(a.attachEvent)a.attachEvent(ud(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function J0(){function a(f){return h.call(a.src,a.listener,f)}const h=Z0;return a}function ad(a,h,f,m,N){if(Array.isArray(h)){for(let L=0;L<h.length;L++)ad(a,h[L],f,m,N);return null}return f=iu(f),a&&a[mt]?a.K(h,f,l(m)?!!m.capture:!!m,N):od(a,h,f,!0,m,N)}function ld(a,h,f,m,N){if(Array.isArray(h))for(var L=0;L<h.length;L++)ld(a,h[L],f,m,N);else m=l(m)?!!m.capture:!!m,f=iu(f),a&&a[mt]?(a=a.i,L=String(h).toString(),L in a.g&&(h=a.g[L],f=Vt(h,f,m,N),f>-1&&(z(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[L],a.h--)))):a&&(a=nu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Vt(h,f,m,N)),(f=a>-1?h[a]:null)&&tu(f))}function tu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[mt])mr(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(ud(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=nu(h))?(mr(f,a),f.h==0&&(f.src=null,h[Rn]=null)):z(a)}}}function ud(a){return a in eu?eu[a]:eu[a]="on"+a}function Z0(a,h){if(a.da)a=!0;else{h=new Ne(h,this);const f=a.listener,m=a.ha||a.src;a.fa&&tu(a),a=f.call(m,h)}return a}function nu(a){return a=a[Rn],a instanceof St?a:null}var ru="__closure_events_fn_"+(Math.random()*1e9>>>0);function iu(a){return typeof a=="function"?a:(a[ru]||(a[ru]=function(h){return a.handleEvent(h)}),a[ru])}function Qe(){I.call(this),this.i=new St(this),this.M=this,this.G=null}p(Qe,I),Qe.prototype[mt]=!0,Qe.prototype.removeEventListener=function(a,h,f,m){ld(this,a,h,f,m)};function nt(a,h){var f,m=a.G;if(m)for(f=[];m;m=m.G)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var N=h;h=new C(m,a),pr(h,N)}N=!0;let L,$;if(f)for($=f.length-1;$>=0;$--)L=h.g=f[$],N=ko(L,m,!0,h)&&N;if(L=h.g=a,N=ko(L,m,!0,h)&&N,N=ko(L,m,!1,h)&&N,f)for($=0;$<f.length;$++)L=h.g=f[$],N=ko(L,m,!1,h)&&N}Qe.prototype.N=function(){if(Qe.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let m=0;m<f.length;m++)z(f[m]);delete a.g[h],a.h--}}this.G=null},Qe.prototype.J=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},Qe.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function ko(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let L=0;L<h.length;++L){const $=h[L];if($&&!$.da&&$.capture==f){const J=$.listener,Ve=$.ha||$.src;$.fa&&mr(a.i,$),N=J.call(Ve,m)!==!1&&N}}return N&&!m.defaultPrevented}function e1(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function cd(a){a.g=e1(()=>{a.g=null,a.i&&(a.i=!1,cd(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class t1 extends I{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:cd(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wi(a){I.call(this),this.h=a,this.g={}}p(Wi,I);var hd=[];function fd(a){Q(a.g,function(h,f){this.g.hasOwnProperty(f)&&tu(h)},a),a.g={}}Wi.prototype.N=function(){Wi.Z.N.call(this),fd(this)},Wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var su=o.JSON.stringify,n1=o.JSON.parse,r1=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function dd(){}function pd(){}var qi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ou(){C.call(this,"d")}p(ou,C);function au(){C.call(this,"c")}p(au,C);var gr={},md=null;function No(){return md=md||new Qe}gr.Ia="serverreachability";function gd(a){C.call(this,gr.Ia,a)}p(gd,C);function Ki(a){const h=No();nt(h,new gd(h))}gr.STAT_EVENT="statevent";function yd(a,h){C.call(this,gr.STAT_EVENT,a),this.stat=h}p(yd,C);function rt(a){const h=No();nt(h,new yd(h,a))}gr.Ja="timingevent";function _d(a,h){C.call(this,gr.Ja,a),this.size=h}p(_d,C);function Qi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Gi(){this.g=!0}Gi.prototype.ua=function(){this.g=!1};function i1(a,h,f,m,N,L){a.info(function(){if(a.g)if(L){var $="",J=L.split("&");for(let le=0;le<J.length;le++){var Ve=J[le].split("=");if(Ve.length>1){const Me=Ve[0];Ve=Ve[1];const Bt=Me.split("_");$=Bt.length>=2&&Bt[1]=="type"?$+(Me+"="+Ve+"&"):$+(Me+"=redacted&")}}}else $=null;else $=L;return"XMLHTTP REQ ("+m+") [attempt "+N+"]: "+h+`
`+f+`
`+$})}function s1(a,h,f,m,N,L,$){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+N+"]: "+h+`
`+f+`
`+L+" "+$})}function qr(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+a1(a,f)+(m?" "+m:"")})}function o1(a,h){a.info(function(){return"TIMEOUT: "+h})}Gi.prototype.info=function(){};function a1(a,h){if(!a.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var f=L[a];if(!(f.length<2)){var m=f[1];if(Array.isArray(m)&&!(m.length<1)){var N=m[0];if(N!="noop"&&N!="stop"&&N!="close")for(let $=1;$<m.length;$++)m[$]=""}}}}return su(L)}catch{return h}}var Vo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},vd={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ed;function lu(){}p(lu,dd),lu.prototype.g=function(){return new XMLHttpRequest},Ed=new lu;function Yi(a){return encodeURIComponent(String(a))}function l1(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function xn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.S=m||1,this.V=new Wi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new wd}function wd(){this.i=null,this.g="",this.h=!1}var Td={},uu={};function cu(a,h,f){a.M=1,a.A=Lo(zt(h)),a.u=f,a.R=!0,Sd(a,null)}function Sd(a,h){a.F=Date.now(),Do(a),a.B=zt(a.A);var f=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),Od(f.i,"t",m),a.C=0,f=a.j.L,a.h=new wd,a.g=ep(a.j,f?h:null,!a.u),a.P>0&&(a.O=new t1(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,m=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(hd[0]=N.toString()),N=hd);for(let L=0;L<N.length;L++){const $=sd(f,N[L],m||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.J?ge(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ki(),i1(a.i,a.v,a.B,a.l,a.S,a.u)}xn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Nn(a)==3?h.j():this.Y(a)},xn.prototype.Y=function(a){try{if(a==this.g)e:{const J=Nn(this.g),Ve=this.g.ya(),le=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||Bd(this.g)))){this.K||J!=4||Ve==7||(Ve==8||le<=0?Ki(3):Ki(2)),hu(this);var h=this.g.ca();this.X=h;var f=u1(this);if(this.o=h==200,s1(this.i,this.v,this.B,this.l,this.S,J,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,N=this.g;if((m=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(m)){var L=m;break t}}L=null}if(a=L)qr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,fu(this,a);else{this.o=!1,this.m=3,rt(12),yr(this),Xi(this);break e}}if(this.R){a=!0;let Me;for(;!this.K&&this.C<f.length;)if(Me=c1(this,f),Me==uu){J==4&&(this.m=4,rt(14),a=!1),qr(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==Td){this.m=4,rt(15),qr(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else qr(this.i,this.l,Me,null),fu(this,Me);if(Id(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||f.length!=0||this.h.h||(this.m=1,rt(16),a=!1),this.o=this.o&&a,!a)qr(this.i,this.l,f,"[Invalid Chunked Response]"),yr(this),Xi(this);else if(f.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Eu($),$.P=!0,rt(11))}}else qr(this.i,this.l,f,null),fu(this,f);J==4&&yr(this),this.o&&!this.K&&(J==4?Yd(this.j,this):(this.o=!1,Do(this)))}else I1(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),yr(this),Xi(this)}}}catch{}finally{}};function u1(a){if(!Id(a))return a.g.la();const h=Bd(a.g);if(h==="")return"";let f="";const m=h.length,N=Nn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return yr(a),Xi(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<m;L++)a.h.h=!0,f+=a.h.i.decode(h[L],{stream:!(N&&L==m-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Id(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function c1(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?uu:(f=Number(h.substring(f,m)),isNaN(f)?Td:(m+=1,m+f>h.length?uu:(h=h.slice(m,m+f),a.C=m+f,h)))}xn.prototype.cancel=function(){this.K=!0,yr(this)};function Do(a){a.T=Date.now()+a.H,Ad(a,a.H)}function Ad(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Qi(c(a.aa,a),h)}function hu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}xn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(o1(this.i,this.B),this.M!=2&&(Ki(),rt(17)),yr(this),this.m=2,Xi(this)):Ad(this,this.T-a)};function Xi(a){a.j.I==0||a.K||Yd(a.j,a)}function yr(a){hu(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,fd(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function fu(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||du(f.h,a))){if(!a.L&&du(f.h,a)&&f.I==3){try{var m=f.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var N=m;if(N[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)jo(f),Mo(f);else break e;vu(f),rt(18)}}else f.xa=N[1],0<f.xa-f.K&&N[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Qi(c(f.Va,f),6e3));xd(f.h)<=1&&f.ta&&(f.ta=void 0)}else vr(f,11)}else if((a.L||f.g==a)&&jo(f),!S(h))for(N=f.Ba.g.parse(h),h=0;h<N.length;h++){let le=N[h];const Me=le[0];if(!(Me<=f.K))if(f.K=Me,le=le[1],f.I==2)if(le[0]=="c"){f.M=le[1],f.ba=le[2];const Bt=le[3];Bt!=null&&(f.ka=Bt,f.j.info("VER="+f.ka));const Er=le[4];Er!=null&&(f.za=Er,f.j.info("SVER="+f.za));const Vn=le[5];Vn!=null&&typeof Vn=="number"&&Vn>0&&(m=1.5*Vn,f.O=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Dn=a.g;if(Dn){const $o=Dn.g?Dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($o){var L=m.h;L.g||$o.indexOf("spdy")==-1&&$o.indexOf("quic")==-1&&$o.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(pu(L,L.h),L.h=null))}if(m.G){const wu=Dn.g?Dn.g.getResponseHeader("X-HTTP-Session-Id"):null;wu&&(m.wa=wu,he(m.J,m.G,wu))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),m=f;var $=a;if(m.na=Zd(m,m.L?m.ba:null,m.W),$.L){Pd(m.h,$);var J=$,Ve=m.O;Ve&&(J.H=Ve),J.D&&(hu(J),Do(J)),m.g=$}else Qd(m);f.i.length>0&&Fo(f)}else le[0]!="stop"&&le[0]!="close"||vr(f,7);else f.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?vr(f,7):_u(f):le[0]!="noop"&&f.l&&f.l.qa(le),f.A=0)}}Ki(4)}catch{}}var h1=class{constructor(a,h){this.g=a,this.map=h}};function Cd(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Rd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function xd(a){return a.h?1:a.g?a.g.size:0}function du(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function pu(a,h){a.g?a.g.add(h):a.h=h}function Pd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Cd.prototype.cancel=function(){if(this.i=kd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function kd(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return A(a.i)}var Nd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function f1(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const m=a[f].indexOf("=");let N,L=null;m>=0?(N=a[f].substring(0,m),L=a[f].substring(m+1)):N=a[f],h(N,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Pn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Pn?(this.l=a.l,Ji(this,a.j),this.o=a.o,this.g=a.g,Zi(this,a.u),this.h=a.h,mu(this,Md(a.i)),this.m=a.m):a&&(h=String(a).match(Nd))?(this.l=!1,Ji(this,h[1]||"",!0),this.o=es(h[2]||""),this.g=es(h[3]||"",!0),Zi(this,h[4]),this.h=es(h[5]||"",!0),mu(this,h[6]||"",!0),this.m=es(h[7]||"")):(this.l=!1,this.i=new ns(null,this.l))}Pn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ts(h,Vd,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ts(h,Vd,!0),"@"),a.push(Yi(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ts(f,f.charAt(0)=="/"?m1:p1,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ts(f,y1)),a.join("")},Pn.prototype.resolve=function(a){const h=zt(this);let f=!!a.j;f?Ji(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var m=a.h;if(f)Zi(h,a.u);else if(f=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var N=h.h.lastIndexOf("/");N!=-1&&(m=h.h.slice(0,N+1)+m)}if(N=m,N==".."||N==".")m="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){m=N.lastIndexOf("/",0)==0,N=N.split("/");const L=[];for(let $=0;$<N.length;){const J=N[$++];J=="."?m&&$==N.length&&L.push(""):J==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),m&&$==N.length&&L.push("")):(L.push(J),m=!0)}m=L.join("/")}else m=N}return f?h.h=m:f=a.i.toString()!=="",f?mu(h,Md(a.i)):f=!!a.m,f&&(h.m=a.m),h};function zt(a){return new Pn(a)}function Ji(a,h,f){a.j=f?es(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Zi(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function mu(a,h,f){h instanceof ns?(a.i=h,_1(a.i,a.l)):(f||(h=ts(h,g1)),a.i=new ns(h,a.l))}function he(a,h,f){a.i.set(h,f)}function Lo(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function es(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ts(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,d1),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function d1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Vd=/[#\/\?@]/g,p1=/[#\?:]/g,m1=/[#\?]/g,g1=/[#\?@]/g,y1=/#/g;function ns(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function _r(a){a.g||(a.g=new Map,a.h=0,a.i&&f1(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ns.prototype,t.add=function(a,h){_r(this),this.i=null,a=Kr(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Dd(a,h){_r(a),h=Kr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ld(a,h){return _r(a),h=Kr(a,h),a.g.has(h)}t.forEach=function(a,h){_r(this),this.g.forEach(function(f,m){f.forEach(function(N){a.call(h,N,m,this)},this)},this)};function bd(a,h){_r(a);let f=[];if(typeof h=="string")Ld(a,h)&&(f=f.concat(a.g.get(Kr(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return _r(this),this.i=null,a=Kr(this,a),Ld(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=bd(this,a),a.length>0?String(a[0]):h):h};function Od(a,h,f){Dd(a,h),f.length>0&&(a.i=null,a.g.set(Kr(a,h),A(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var f=h[m];const N=Yi(f);f=bd(this,f);for(let L=0;L<f.length;L++){let $=N;f[L]!==""&&($+="="+Yi(f[L])),a.push($)}}return this.i=a.join("&")};function Md(a){const h=new ns;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Kr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function _1(a,h){h&&!a.j&&(_r(a),a.i=null,a.g.forEach(function(f,m){const N=m.toLowerCase();m!=N&&(Dd(this,m),Od(this,N,f))},a)),a.j=h}function v1(a,h){const f=new Gi;if(o.Image){const m=new Image;m.onload=d(kn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=d(kn,f,"TestLoadImage: error",!1,h,m),m.onabort=d(kn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=d(kn,f,"TestLoadImage: timeout",!1,h,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function E1(a,h){const f=new Gi,m=new AbortController,N=setTimeout(()=>{m.abort(),kn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(L=>{clearTimeout(N),L.ok?kn(f,"TestPingServer: ok",!0,h):kn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),kn(f,"TestPingServer: error",!1,h)})}function kn(a,h,f,m,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),m(f)}catch{}}function w1(){this.g=new r1}function gu(a){this.i=a.Sb||null,this.h=a.ab||!1}p(gu,dd),gu.prototype.g=function(){return new bo(this.i,this.h)};function bo(a,h){Qe.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(bo,Qe),t=bo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,is(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,rs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,is(this)),this.g&&(this.readyState=3,is(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Fd(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Fd(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?rs(this):is(this),this.readyState==3&&Fd(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,rs(this))},t.Na=function(a){this.g&&(this.response=a,rs(this))},t.ga=function(){this.g&&rs(this)};function rs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,is(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function is(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function jd(a){let h="";return Q(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function yu(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=jd(f),typeof a=="string"?f!=null&&Yi(f):he(a,h,f))}function Se(a){Qe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Se,Qe);var T1=/^https?$/i,S1=["POST","PUT"];t=Se.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ed.g(),this.g.onreadystatechange=_(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){Ud(this,L);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var N in m)f.set(N,m[N]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const L of m.keys())f.set(L,m.get(L));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(S1,h,void 0)>=0)||m||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of f)this.g.setRequestHeader(L,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){Ud(this,L)}};function Ud(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,$d(a),Oo(a)}function $d(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,nt(this,"complete"),nt(this,"abort"),Oo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oo(this,!0)),Se.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?zd(this):this.Xa())},t.Xa=function(){zd(this)};function zd(a){if(a.h&&typeof s<"u"){if(a.v&&Nn(a)==4)setTimeout(a.Ca.bind(a),0);else if(nt(a,"readystatechange"),Nn(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=L===0){let $=String(a.D).match(Nd)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),m=!T1.test($?$.toLowerCase():"")}f=m}if(f)nt(a,"complete"),nt(a,"success");else{a.o=6;try{var N=Nn(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",$d(a)}}finally{Oo(a)}}}}function Oo(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||nt(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Nn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Nn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),n1(h)}};function Bd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function I1(a){const h={};a=(a.g&&Nn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(S(a[m]))continue;var f=l1(a[m]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=h[N]||[];h[N]=L,L.push(f)}X(h,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ss(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Hd(a){this.za=0,this.i=[],this.j=new Gi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ss("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ss("baseRetryDelayMs",5e3,a),this.Za=ss("retryDelaySeedMs",1e4,a),this.Ta=ss("forwardChannelMaxRetries",2,a),this.va=ss("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Cd(a&&a.concurrentRequestLimit),this.Ba=new w1,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Hd.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,m){rt(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.J=Zd(this,null,this.W),Fo(this)};function _u(a){if(Wd(a),a.I==3){var h=a.V++,f=zt(a.J);if(he(f,"SID",a.M),he(f,"RID",h),he(f,"TYPE","terminate"),os(a,f),h=new xn(a,a.j,h),h.M=2,h.A=Lo(zt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=ep(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Do(h)}Jd(a)}function Mo(a){a.g&&(Eu(a),a.g.cancel(),a.g=null)}function Wd(a){Mo(a),a.v&&(o.clearTimeout(a.v),a.v=null),jo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Fo(a){if(!Rd(a.h)&&!a.m){a.m=!0;var h=a.Ea;O||g(),j||(O(),j=!0),w.add(h,a),a.D=0}}function A1(a,h){return xd(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Qi(c(a.Ea,a,h),Xd(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new xn(this,this.j,a);let L=this.o;if(this.U&&(L?(L=ge(L),pr(L,this.U)):L=this.U),this.u!==null||this.R||(N.J=L,L=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Kd(this,N,h),f=zt(this.J),he(f,"RID",a),he(f,"CVER",22),this.G&&he(f,"X-HTTP-Session-Id",this.G),os(this,f),L&&(this.R?h="headers="+Yi(jd(L))+"&"+h:this.u&&yu(f,this.u,L)),pu(this.h,N),this.Ra&&he(f,"TYPE","init"),this.S?(he(f,"$req",h),he(f,"SID","null"),N.U=!0,cu(N,f,null)):cu(N,f,h),this.I=2}}else this.I==3&&(a?qd(this,a):this.i.length==0||Rd(this.h)||qd(this))};function qd(a,h){var f;h?f=h.l:f=a.V++;const m=zt(a.J);he(m,"SID",a.M),he(m,"RID",f),he(m,"AID",a.K),os(a,m),a.u&&a.o&&yu(m,a.u,a.o),f=new xn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Kd(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),pu(a.h,f),cu(f,m,h)}function os(a,h){a.H&&Q(a.H,function(f,m){he(h,m,f)}),a.l&&Q({},function(f,m){he(h,m,f)})}function Kd(a,h,f){f=Math.min(a.i.length,f);const m=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let J=-1;for(;;){const Ve=["count="+f];J==-1?f>0?(J=N[0].g,Ve.push("ofs="+J)):J=0:Ve.push("ofs="+J);let le=!0;for(let Me=0;Me<f;Me++){var L=N[Me].g;const Bt=N[Me].map;if(L-=J,L<0)J=Math.max(0,N[Me].g-100),le=!1;else try{L="req"+L+"_"||"";try{var $=Bt instanceof Map?Bt:Object.entries(Bt);for(const[Er,Vn]of $){let Dn=Vn;l(Vn)&&(Dn=su(Vn)),Ve.push(L+Er+"="+encodeURIComponent(Dn))}}catch(Er){throw Ve.push(L+"type="+encodeURIComponent("_badmap")),Er}}catch{m&&m(Bt)}}if(le){$=Ve.join("&");break e}}$=void 0}return a=a.i.splice(0,f),h.G=a,$}function Qd(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;O||g(),j||(O(),j=!0),w.add(h,a),a.A=0}}function vu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Qi(c(a.Da,a),Xd(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Gd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Qi(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),Mo(this),Gd(this))};function Eu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Gd(a){a.g=new xn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=zt(a.na);he(h,"RID","rpc"),he(h,"SID",a.M),he(h,"AID",a.K),he(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(h,"TO",a.ia),he(h,"TYPE","xmlhttp"),os(a,h),a.u&&a.o&&yu(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Lo(zt(h)),f.u=null,f.R=!0,Sd(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Mo(this),vu(this),rt(19))};function jo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Yd(a,h){var f=null;if(a.g==h){jo(a),Eu(a),a.g=null;var m=2}else if(du(a.h,h))f=h.G,Pd(a.h,h),m=1;else return;if(a.I!=0){if(h.o)if(m==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;m=No(),nt(m,new _d(m,f)),Fo(a)}else Qd(a);else if(N=h.m,N==3||N==0&&h.X>0||!(m==1&&A1(a,h)||m==2&&vu(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),N){case 1:vr(a,5);break;case 4:vr(a,10);break;case 3:vr(a,6);break;default:vr(a,2)}}}function Xd(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function vr(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),m=a.Ua;const N=!m;m=new Pn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ji(m,"https"),Lo(m),N?v1(m.toString(),f):E1(m.toString(),f)}else rt(2);a.I=0,a.l&&a.l.pa(h),Jd(a),Wd(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Jd(a){if(a.I=0,a.ja=[],a.l){const h=kd(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ja,h),R(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function Zd(a,h,f){var m=f instanceof Pn?zt(f):new Pn(f);if(m.g!="")h&&(m.g=h+"."+m.g),Zi(m,m.u);else{var N=o.location;m=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const L=new Pn(null);m&&Ji(L,m),h&&(L.g=h),N&&Zi(L,N),f&&(L.h=f),m=L}return f=a.G,h=a.wa,f&&h&&he(m,f,h),he(m,"VER",a.ka),os(a,m),m}function ep(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Se(new gu({ab:f})):new Se(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function tp(){}t=tp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Uo(){}Uo.prototype.g=function(a,h){return new gt(a,h)};function gt(a,h){Qe.call(this),this.g=new Hd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!S(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!S(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Qr(this)}p(gt,Qe),gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){_u(this.g)},gt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=su(a),a=f);h.i.push(new h1(h.Ya++,a)),h.I==3&&Fo(h)},gt.prototype.N=function(){this.g.l=null,delete this.j,_u(this.g),delete this.g,gt.Z.N.call(this)};function np(a){ou.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(np,ou);function rp(){au.call(this),this.status=1}p(rp,au);function Qr(a){this.g=a}p(Qr,tp),Qr.prototype.ra=function(){nt(this.g,"a")},Qr.prototype.qa=function(a){nt(this.g,new np(a))},Qr.prototype.pa=function(a){nt(this.g,new rp)},Qr.prototype.oa=function(){nt(this.g,"b")},Uo.prototype.createWebChannel=Uo.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,_v=function(){return new Uo},yv=function(){return No()},gv=gr,sh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Vo.NO_ERROR=0,Vo.TIMEOUT=8,Vo.HTTP_ERROR=6,Ca=Vo,vd.COMPLETE="complete",mv=vd,pd.EventType=qi,qi.OPEN="a",qi.CLOSE="b",qi.ERROR="c",qi.MESSAGE="d",Qe.prototype.listen=Qe.prototype.J,ws=pd,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,pv=Se}).apply(typeof oa<"u"?oa:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i="12.13.0";function _A(t){$i=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new av("@firebase/firestore");function Xr(){return Or.logLevel}function B(t,...e){if(Or.logLevel<=re.DEBUG){const n=e.map(Pf);Or.debug(`Firestore (${$i}): ${t}`,...n)}}function wn(t,...e){if(Or.logLevel<=re.ERROR){const n=e.map(Pf);Or.error(`Firestore (${$i}): ${t}`,...n)}}function Mr(t,...e){if(Or.logLevel<=re.WARN){const n=e.map(Pf);Or.warn(`Firestore (${$i}): ${t}`,...n)}}function Pf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,vv(t,r,n)}function vv(t,e,n){let r=`FIRESTORE (${$i}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw wn(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||vv(e,i,r)}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Ui{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class EA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wA{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new Ev(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Je(e)}}class TA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class SA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new TA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tA(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Nm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Nm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=AA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function oh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return ec(i)===ec(s)?Z(i,s):ec(i)?1:-1}return Z(t.length,e.length)}const CA=55296,RA=57343;function ec(t){const e=t.charCodeAt(0);return e>=CA&&e<=RA}function Ni(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="__name__";class qt{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=qt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Z(e.length,n.length)}static compareSegments(e,n){const r=qt.isNumericId(e),i=qt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?qt.extractNumericId(e).compare(qt.extractNumericId(n)):oh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jn.fromString(e.substring(4,e.length-2))}}class de extends qt{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const xA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends qt{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return xA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vm}static keyField(){return new Be([Vm])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(de.fromString(e))}static fromName(e){return new q(de.fromString(e).popFirst(5))}static empty(){return new q(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new de(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t,e,n){if(!n)throw new W(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PA(t,e,n,r){if(e===!0&&r===!0)throw new W(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dm(t){if(!q.isDocumentKey(t))throw new W(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lm(t){if(q.isDocumentKey(t))throw new W(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Tv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Nf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function io(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nf(t);throw new W(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function To(t,e){if(!Tv(t))throw new W(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(F.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=-62135596800,Om=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Om);return new pe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<bm)throw new W(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Om}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(To(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-bm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:ke("string",pe._jsonSchemaVersion),seconds:ke("number"),nanoseconds:ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new pe(0,0))}static max(){return new G(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=-1;function kA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new rr(i,q.empty(),e)}function NA(t){return new rr(t.readTime,t.key,so)}class rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rr(G.min(),q.empty(),so)}static max(){return new rr(G.max(),q.empty(),so)}}function VA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==DA)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function bA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Bi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ml.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=-1;function Fl(t){return t==null}function al(t){return t===0&&1/t==-1/0}function OA(t){return typeof t=="number"&&Number.isInteger(t)&&!al(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="";function MA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Mm(e)),e=FA(t.get(n),e);return Mm(e)}function FA(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Sv:n+="";break;default:n+=s}}return n}function Mm(t){return t+Sv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Iv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new aa(this.root,e,this.comparator,!0)}}class aa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jm(this.data.getIterator())}getIteratorFrom(e){return new jm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class jm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new Oe(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ni(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Av("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const jA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=jA.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function sr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="server_timestamp",Rv="__type__",xv="__previous_value__",Pv="__local_write_time__";function Df(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Rv])==null?void 0:r.stringValue)===Cv}function jl(t){const e=t.mapValue.fields[xv];return Df(e)?jl(e):e}function oo(t){const e=ir(t.mapValue.fields[Pv].timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n,r,i,s,o,l,u,c,d,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=p}}const ll="(default)";class ao{constructor(e,n){this.projectId=e,this.database=n||ll}static empty(){return new ao("","")}get isDefaultDatabase(){return this.database===ll}isEqual(e){return e instanceof ao&&e.projectId===this.projectId&&e.database===this.database}}function $A(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ao(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="__type__",Nv="__max__",la={mapValue:{fields:{__type__:{stringValue:Nv}}}},Vv="__vector__",ul="value";function or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Df(t)?4:BA(t)?9007199254740991:zA(t)?10:11:K(28295,{value:t})}function nn(t,e){if(t===e)return!0;const n=or(t);if(n!==or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oo(t).isEqual(oo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ir(i.timestampValue),l=ir(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return sr(i.bytesValue).isEqual(sr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?al(o)===al(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ni(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Fm(o)!==Fm(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!nn(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function lo(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function Vi(t,e){if(t===e)return 0;const n=or(t),r=or(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Um(t.timestampValue,e.timestampValue);case 4:return Um(oo(t),oo(e));case 5:return oh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=sr(s),u=sr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=Z(l[c],u[c]);if(d!==0)return d}return Z(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Z(Ce(s.latitude),Ce(o.latitude));return l!==0?l:Z(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $m(t.arrayValue,e.arrayValue);case 10:return function(s,o){var _,A,R,x;const l=s.fields||{},u=o.fields||{},c=(_=l[ul])==null?void 0:_.arrayValue,d=(A=u[ul])==null?void 0:A.arrayValue,p=Z(((R=c==null?void 0:c.values)==null?void 0:R.length)||0,((x=d==null?void 0:d.values)==null?void 0:x.length)||0);return p!==0?p:$m(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===la.mapValue&&o===la.mapValue)return 0;if(s===la.mapValue)return 1;if(o===la.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const _=oh(u[p],d[p]);if(_!==0)return _;const A=Vi(l[u[p]],c[d[p]]);if(A!==0)return A}return Z(u.length,d.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function Um(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=ir(t),r=ir(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function $m(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Vi(n[i],r[i]);if(s)return s}return Z(n.length,r.length)}function Di(t){return ah(t)}function ah(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ah(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ah(n.fields[o])}`;return i+"}"}(t.mapValue):K(61005,{value:t})}function Ra(t){switch(or(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=jl(t);return e?16+Ra(e):16;case 5:return 2*t.stringValue.length;case 6:return sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ra(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return zr(r.fields,(s,o)=>{i+=s.length+Ra(o)}),i}(t.mapValue);default:throw K(13486,{value:t})}}function lh(t){return!!t&&"integerValue"in t}function Lf(t){return!!t&&"arrayValue"in t}function zm(t){return!!t&&"nullValue"in t}function Bm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xa(t){return!!t&&"mapValue"in t}function zA(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[kv])==null?void 0:r.stringValue)===Vv}function Ds(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ds(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ds(t.arrayValue.values[n]);return e}return{...t}}function BA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Nv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ds(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){zr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ct(Ds(this.value))}}function Dv(t){const e=[];return zr(t.fields,(n,r)=>{const i=new Be([n]);if(xa(r)){const s=Dv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new et(e,0,G.min(),G.min(),G.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,i){return new et(e,1,n,G.min(),r,i,0)}static newNoDocument(e,n){return new et(e,2,n,G.min(),G.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,G.min(),G.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.position=e,this.inclusive=n}}function Hm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Vi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n="asc"){this.field=e,this.dir=n}}function HA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{}class Le extends Lv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new qA(e,n,r):n==="array-contains"?new GA(e,r):n==="in"?new YA(e,r):n==="not-in"?new XA(e,r):n==="array-contains-any"?new JA(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new KA(e,r):new QA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Vi(n,this.value)):n!==null&&or(this.value)===or(n)&&this.matchesComparison(Vi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends Lv{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new rn(e,n)}matches(e){return bv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function bv(t){return t.op==="and"}function Ov(t){return WA(t)&&bv(t)}function WA(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function uh(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+Di(t.value);if(Ov(t))return t.filters.map(e=>uh(e)).join(",");{const e=t.filters.map(n=>uh(n)).join(",");return`${t.op}(${e})`}}function Mv(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&nn(r.value,i.value)}(t,e):t instanceof rn?function(r,i){return i instanceof rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Mv(o,i.filters[l]),!0):!1}(t,e):void K(19439)}function Fv(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${Di(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(Fv).join(" ,")+"}"}(t):"Filter"}class qA extends Le{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class KA extends Le{constructor(e,n){super(e,"in",n),this.keys=jv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QA extends Le{constructor(e,n){super(e,"not-in",n),this.keys=jv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jv(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class GA extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lf(n)&&lo(n.arrayValue,this.value)}}class YA extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&lo(this.value.arrayValue,n)}}class XA extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!lo(this.value.arrayValue,n)}}class JA extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>lo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function qm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ZA(t,e,n,r,i,s,o)}function bf(t){const e=Y(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>uh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Fl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Di(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Di(r)).join(",")),e.Te=n}return e.Te}function Of(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!HA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Mv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wm(t.startAt,e.startAt)&&Wm(t.endAt,e.endAt)}function ch(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function eC(t,e,n,r,i,s,o,l){return new Ul(t,e,n,r,i,s,o,l)}function Uv(t){return new Ul(t)}function Km(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tC(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function nC(t){return t.collectionGroup!==null}function Ls(t){const e=Y(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Oe(Be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new hl(s,r))}),n.has(Be.keyField().canonicalString())||e.Ie.push(new hl(Be.keyField(),r))}return e.Ie}function Yt(t){const e=Y(t);return e.Ee||(e.Ee=rC(e,Ls(t))),e.Ee}function rC(t,e){if(t.limitType==="F")return qm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new hl(i.field,s)});const n=t.endAt?new cl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cl(t.startAt.position,t.startAt.inclusive):null;return qm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hh(t,e,n){return new Ul(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $l(t,e){return Of(Yt(t),Yt(e))&&t.limitType===e.limitType}function $v(t){return`${bf(Yt(t))}|lt:${t.limitType}`}function Jr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Fv(i)).join(", ")}]`),Fl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Di(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Di(i)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function zl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ls(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Hm(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ls(r),i)||r.endAt&&!function(o,l,u){const c=Hm(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ls(r),i))}(t,e)}function iC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zv(t){return(e,n)=>{let r=!1;for(const i of Ls(t)){const s=sC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function sC(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Vi(u,c):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Iv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=new _e(q.comparator);function Tn(){return oC}const Bv=new _e(q.comparator);function Ts(...t){let e=Bv;for(const n of t)e=e.insert(n.key,n);return e}function Hv(t){let e=Bv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Rr(){return bs()}function Wv(){return bs()}function bs(){return new Br(t=>t.toString(),(t,e)=>t.isEqual(e))}const aC=new _e(q.comparator),lC=new Oe(q.comparator);function ee(...t){let e=lC;for(const n of t)e=e.add(n);return e}const uC=new Oe(Z);function cC(){return uC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:al(e)?"-0":e}}function qv(t){return{integerValue:""+t}}function hC(t,e){return OA(e)?qv(e):Mf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this._=void 0}}function fC(t,e,n){return t instanceof fl?function(i,s){const o={fields:{[Rv]:{stringValue:Cv},[Pv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Df(s)&&(s=jl(s)),s&&(o.fields[xv]=s),{mapValue:o}}(n,e):t instanceof uo?Qv(t,e):t instanceof co?Gv(t,e):function(i,s){const o=Kv(i,s),l=Qm(o)+Qm(i.Ae);return lh(o)&&lh(i.Ae)?qv(l):Mf(i.serializer,l)}(t,e)}function dC(t,e,n){return t instanceof uo?Qv(t,e):t instanceof co?Gv(t,e):n}function Kv(t,e){return t instanceof dl?function(r){return lh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fl extends Bl{}class uo extends Bl{constructor(e){super(),this.elements=e}}function Qv(t,e){const n=Yv(e);for(const r of t.elements)n.some(i=>nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class co extends Bl{constructor(e){super(),this.elements=e}}function Gv(t,e){let n=Yv(e);for(const r of t.elements)n=n.filter(i=>!nn(i,r));return{arrayValue:{values:n}}}class dl extends Bl{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Qm(t){return Ce(t.integerValue||t.doubleValue)}function Yv(t){return Lf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof uo&&i instanceof uo||r instanceof co&&i instanceof co?Ni(r.elements,i.elements,nn):r instanceof dl&&i instanceof dl?nn(r.Ae,i.Ae):r instanceof fl&&i instanceof fl}(t.transform,e.transform)}class mC{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hl{}function Xv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ff(t.key,Xt.none()):new So(t.key,t.data,Xt.none());{const n=t.data,r=Ct.empty();let i=new Oe(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Hr(t.key,r,new Mt(i.toArray()),Xt.none())}}function gC(t,e,n){t instanceof So?function(i,s,o){const l=i.value.clone(),u=Ym(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Hr?function(i,s,o){if(!Pa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Ym(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Jv(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Os(t,e,n,r){return t instanceof So?function(s,o,l,u){if(!Pa(s.precondition,o))return l;const c=s.value.clone(),d=Xm(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hr?function(s,o,l,u){if(!Pa(s.precondition,o))return l;const c=Xm(s.fieldTransforms,u,o),d=o.data;return d.setAll(Jv(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Pa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function yC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Kv(r.transform,i||null);s!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,s))}return n||null}function Gm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ni(r,i,(s,o)=>pC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class So extends Hl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hr extends Hl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Jv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ym(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,dC(o,l,n[i]))}return r}function Xm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,fC(s,o,e))}return r}class Ff extends Hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _C extends Hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&gC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Os(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Os(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Wv();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Xv(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Ni(this.mutations,e.mutations,(n,r)=>Gm(n,r))&&Ni(this.baseMutations,e.baseMutations,(n,r)=>Gm(n,r))}}class jf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return aC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new jf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,ne;function TC(t){switch(t){case F.OK:return K(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function Zv(t){if(t===void 0)return wn("GRPC error has no .code"),F.UNKNOWN;switch(t){case xe.OK:return F.OK;case xe.CANCELLED:return F.CANCELLED;case xe.UNKNOWN:return F.UNKNOWN;case xe.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case xe.INTERNAL:return F.INTERNAL;case xe.UNAVAILABLE:return F.UNAVAILABLE;case xe.UNAUTHENTICATED:return F.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case xe.NOT_FOUND:return F.NOT_FOUND;case xe.ALREADY_EXISTS:return F.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return F.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case xe.ABORTED:return F.ABORTED;case xe.OUT_OF_RANGE:return F.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return F.UNIMPLEMENTED;case xe.DATA_LOSS:return F.DATA_LOSS;default:return K(39323,{code:t})}}(ne=xe||(xe={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=new Jn([4294967295,4294967295],0);function Jm(t){const e=SC().encode(t),n=new dv;return n.update(e),new Uint8Array(n.digest())}function Zm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Jn([n,r],0),new Jn([i,s],0)]}class Uf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ss(`Invalid padding: ${n}`);if(r<0)throw new Ss(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ss(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ss(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Jn.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Jn.fromNumber(r)));return i.compare(IC)===1&&(i=new Jn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Jm(e),[r,i]=Zm(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Uf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Jm(e),[r,i]=Zm(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ss extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ao.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Io(G.min(),i,new _e(Z),Tn(),ee())}}class Ao{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ao(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class e0{constructor(e,n){this.targetId=e,this.Ce=n}}class t0{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class eg{constructor(){this.ve=0,this.Fe=tg(),this.Me=Ke.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ee(),n=ee(),r=ee();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new Ao(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=tg()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class AC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Tn(),this.Je=ua(),this.He=ua(),this.Ze=new _e(Z)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(ch(s))if(r===0){const o=new q(s.path);this.et(n,o,et.newNoDocument(o,G.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=sr(r).toUint8Array()}catch(u){if(u instanceof Av)return Mr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Uf(o,i,s)}catch(u){return Mr(u instanceof Ss?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&ch(l.target)){const u=new q(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,et.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=ee();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Io(e,n,this.Ze,this.je,r);return this.je=Tn(),this.Je=ua(),this.He=ua(),this.Ze=new _e(Z),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new eg,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Oe(Z),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Oe(Z),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new eg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ua(){return new _e(q.comparator)}function tg(){return new _e(q.comparator)}const CC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),RC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),xC=(()=>({and:"AND",or:"OR"}))();class PC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fh(t,e){return t.useProto3Json||Fl(e)?e:{value:e}}function pl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function n0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kC(t,e){return pl(t,e.toTimestamp())}function Jt(t){return oe(!!t,49232),G.fromTimestamp(function(n){const r=ir(n);return new pe(r.seconds,r.nanos)}(t))}function $f(t,e){return dh(t,e).canonicalString()}function dh(t,e){const n=function(i){return new de(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function r0(t){const e=de.fromString(t);return oe(l0(e),10190,{key:e.toString()}),e}function ph(t,e){return $f(t.databaseId,e.path)}function tc(t,e){const n=r0(e);if(n.get(1)!==t.databaseId.projectId)throw new W(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(s0(n))}function i0(t,e){return $f(t.databaseId,e)}function NC(t){const e=r0(t);return e.length===4?de.emptyPath():s0(e)}function mh(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function s0(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ng(t,e,n){return{name:ph(t,e),fields:n.value.mapValue.fields}}function VC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(oe(d===void 0||typeof d=="string",58123),Ke.fromBase64String(d||"")):(oe(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ke.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?F.UNKNOWN:Zv(c.code);return new W(d,c.message||"")}(o);n=new t0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=tc(t,r.document.name),s=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):G.min(),l=new Ct({mapValue:{fields:r.document.fields}}),u=et.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new ka(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=tc(t,r.document),s=r.readTime?Jt(r.readTime):G.min(),o=et.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ka([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=tc(t,r.document),s=r.removedTargetIds||[];n=new ka([],s,i,null)}else{if(!("filter"in e))return K(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new wC(i,s),l=r.targetId;n=new e0(l,o)}}return n}function DC(t,e){let n;if(e instanceof So)n={update:ng(t,e.key,e.value)};else if(e instanceof Ff)n={delete:ph(t,e.key)};else if(e instanceof Hr)n={update:ng(t,e.key,e.data),updateMask:zC(e.fieldMask)};else{if(!(e instanceof _C))return K(16599,{dt:e.type});n={verify:ph(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof fl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof co)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof dl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:kC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(t,e.precondition)),n}function LC(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Jt(i.updateTime):Jt(s);return o.isEqual(G.min())&&(o=Jt(s)),new mC(o,i.transformResults||[])}(n,e))):[]}function bC(t,e){return{documents:[i0(t,e.path)]}}function OC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=i0(t,i);const s=function(c){if(c.length!==0)return a0(rn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(_){return{field:Zr(_.field),direction:jC(_.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=fh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function MC(t){let e=NC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const _=o0(p);return _ instanceof rn&&Ov(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(_=>function(R){return new hl(ei(R.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(p){let _;return _=typeof p=="object"?p.value:p,Fl(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(p){const _=!!p.before,A=p.values||[];return new cl(A,_)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const _=!p.before,A=p.values||[];return new cl(A,_)}(n.endAt)),eC(e,i,o,s,l,"F",u,c)}function FC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function o0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ei(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ei(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ei(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ei(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Le.create(ei(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>o0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function jC(t){return CC[t]}function UC(t){return RC[t]}function $C(t){return xC[t]}function Zr(t){return{fieldPath:t.canonicalString()}}function ei(t){return Be.fromServerFormat(t.fieldPath)}function a0(t){return t instanceof Le?function(n){if(n.op==="=="){if(Bm(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NAN"}};if(zm(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bm(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NAN"}};if(zm(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(n.field),op:UC(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(i=>a0(i));return r.length===1?r[0]:{compositeFilter:{op:$C(n.op),filters:r}}}(t):K(54877,{filter:t})}function zC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function l0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function u0(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n,r,i,s=G.min(),o=G.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.yt=e}}function HC(t){const e=MC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(){this.bn=new qC}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(rr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class qC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Oe(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Oe(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},c0=41943040;class ut{static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(c0,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ar(0)}static ar(){return new ar(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="LruGarbageCollector",KC=1048576;function sg([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class QC{constructor(e){this.Pr=e,this.buffer=new Oe(sg),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class GC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(ig,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Bi(n)?B(ig,"Ignoring IndexedDB error during garbage collection: ",n):await zi(n)}await this.Ar(3e5)})}}class YC{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Ml.ce);const r=new QC(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(rg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rg):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Xr()<=re.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function XC(t,e){return new YC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.changes=new Br(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Os(r.mutation,i,Mt.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Rr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ts();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Rr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Tn();const o=bs(),l=function(){return bs()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Hr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Os(d.mutation,c,d.mutation.getFieldMask(),pe.now())):o.set(c.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new ZC(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=bs();let i=new _e((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Mt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=Wv();d.forEach(_=>{if(!s.has(_)){const A=Xv(n.get(_),r.get(_));A!==null&&p.set(_,A),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return tC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Rr());let l=so,u=s;return o.next(c=>M.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(_=>{u=u.insert(d,_)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(d=>({batchId:l,changes:Hv(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Ts();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ts();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,_){return new Ul(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,_)=>{o=o.insert(p,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,et.newInvalidDocument(d)))});let l=Ts();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Os(d.mutation,c,Mt.empty(),pe.now()),zl(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jt(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:HC(i.bundledQuery),readTime:Jt(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.overlays=new _e(q.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Rr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Rr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new _e((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Rr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Rr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new EC(n,r));let s=this.Lr.get(n);s===void 0&&(s=ee(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.kr=new Oe(Fe.Kr),this.qr=new Oe(Fe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Fe(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new q(new de([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new q(new de([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=ee();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return q.comparator(e.key,n.key)||Z(e.Jr,n.Jr)}static Ur(e,n){return Z(e.Jr,n.Jr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Oe(Fe.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new Fe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Vf:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Oe(Z);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new q(s),0);let l=new Oe(Z);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Fe(n,0),i=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.ti=e,this.docs=function(){return new _e(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Tn();const o=n.path,l=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||VA(NA(d),r)<=0||(i.has(d.key)||zl(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oR(this)}getSize(e){return M.resolve(this.size)}}class oR extends JC{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.persistence=e,this.ri=new Br(n=>bf(n),Of),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.ii=0,this.si=new zf,this.targetCount=0,this.oi=ar._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ar(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n){this._i={},this.overlays={},this.ai=new Ml(0),this.ui=!1,this.ui=!0,this.ci=new rR,this.referenceDelegate=e(this),this.li=new aR(this),this.indexManager=new WC,this.remoteDocumentCache=function(i){return new sR(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new BC(n),this.Pi=new tR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new iR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new lR(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class lR extends LA{constructor(e){super(),this.currentSequenceNumber=e}}class Bf{constructor(e){this.persistence=e,this.Ri=new zf,this.Ai=null}static Vi(e){return new Bf(e)}get di(){if(this.Ai)return this.Ai;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const i=q.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,G.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class ml{constructor(e,n){this.persistence=e,this.fi=new Br(r=>MA(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=XC(this,n)}static Vi(e,n){return new ml(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,G.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ra(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Hf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return XS()?8:bA(GS())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new uR;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Xr()<=re.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Jr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Xr()<=re.DEBUG&&B("QueryEngine","Query:",Jr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Xr()<=re.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Jr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):M.resolve())}gs(e,n){if(Km(n))return M.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=hh(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,hh(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return Km(n)||i.isEqual(G.min())?M.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?M.resolve(null):(Xr()<=re.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jr(n)),this.Ds(e,o,n,kA(i,so)).next(l=>l))})}Ss(e,n){let r=new Oe(zv(e));return n.forEach((i,s)=>{zl(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Xr()<=re.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Jr(n)),this.fs.getDocumentsMatchingQuery(e,n,rr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="LocalStore",hR=3e8;class fR{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new _e(Z),this.Fs=new Br(s=>bf(s),Of),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function dR(t,e,n,r){return new fR(t,e,n,r)}async function f0(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function pR(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,_=p.keys();let A=M.resolve();return _.forEach(R=>{A=A.next(()=>d.getEntry(u,R)).next(x=>{const P=c.docVersions.get(R);oe(P!==null,48541),x.version.compareTo(P)<0&&(p.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),d.addEntry(x)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function d0(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function mR(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,p)=>{const _=i.get(p);if(!_)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,p)));let A=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(Ke.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):d.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(d.resumeToken,r)),i=i.insert(p,A),function(x,P,E){return x.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=hR?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(_,A,d)&&l.push(n.li.updateTargetData(s,A))});let u=Tn(),c=ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(gR(s,o,e.documentUpdates).next(d=>{u=d.Bs,c=d.Ls})),!r.isEqual(G.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function gR(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Tn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(G.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(Wf,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function yR(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Vf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _R(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new fn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function gh(t,e,n){const r=Y(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Bi(o))throw o;B(Wf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function og(t,e,n){const r=Y(t);let i=G.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=Y(u),_=p.Fs.get(d);return _!==void 0?M.resolve(p.vs.get(_)):p.li.getTargetData(c,d)}(r,o,Yt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:G.min(),n?s:ee())).next(l=>(vR(r,iC(e),l),{documents:l,ks:s})))}function vR(t,e,n){let r=t.Ms.get(e)||G.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class ag{constructor(){this.activeTargetIds=cC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ER{constructor(){this.vo=new ag,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new ag,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="ConnectivityMonitor";class ug{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(lg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(lg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca=null;function yh(){return ca===null?ca=function(){return 268435456+Math.round(2147483648*Math.random())}():ca++,"0x"+ca.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="RestConnection",TR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class SR{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===ll?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=yh(),l=this.Qo(e,n.toUriEncodedString());B(nc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),d=ov(c);return this.zo(e,l,u,r,d).then(p=>(B(nc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Mr(nc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$i}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=TR[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection",gs=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Ei extends SR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ei.c_){const e=yv();gs(e,gv.STAT_EVENT,n=>{n.stat===sh.PROXY?B(Xe,"STAT_EVENT: detected buffering proxy"):n.stat===sh.NOPROXY&&B(Xe,"STAT_EVENT: detected no buffering proxy")}),Ei.c_=!0}}zo(e,n,r,i,s){const o=yh();return new Promise((l,u)=>{const c=new pv;c.setWithCredentials(!0),c.listenOnce(mv.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ca.NO_ERROR:const p=c.getResponseJson();B(Xe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ca.TIMEOUT:B(Xe,`RPC '${e}' ${o} timed out`),u(new W(F.DEADLINE_EXCEEDED,"Request time out"));break;case Ca.HTTP_ERROR:const _=c.getStatus();if(B(Xe,`RPC '${e}' ${o} failed with status:`,_,"response text:",c.getResponseText()),_>0){let A=c.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const x=function(E){const y=E.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(y)>=0?y:F.UNKNOWN}(R.status);u(new W(x,R.message))}else u(new W(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new W(F.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{B(Xe,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);B(Xe,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=yh(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");B(Xe,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);this.I_(d);let p=!1,_=!1;const A=new IR({Jo:R=>{_?B(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(p||(B(Xe,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),B(Xe,`RPC '${e}' stream ${i} sending:`,R),d.send(R))},Ho:()=>d.close()});return gs(d,ws.EventType.OPEN,()=>{_||(B(Xe,`RPC '${e}' stream ${i} transport opened.`),A.i_())}),gs(d,ws.EventType.CLOSE,()=>{_||(_=!0,B(Xe,`RPC '${e}' stream ${i} transport closed`),A.o_(),this.E_(d))}),gs(d,ws.EventType.ERROR,R=>{_||(_=!0,Mr(Xe,`RPC '${e}' stream ${i} transport errored. Name:`,R.name,"Message:",R.message),A.o_(new W(F.UNAVAILABLE,"The operation could not be completed")))}),gs(d,ws.EventType.MESSAGE,R=>{var x;if(!_){const P=R.data[0];oe(!!P,16349);const E=P,y=(E==null?void 0:E.error)||((x=E[0])==null?void 0:x.error);if(y){B(Xe,`RPC '${e}' stream ${i} received error:`,y);const v=y.status;let V=function(w){const g=xe[w];if(g!==void 0)return Zv(g)}(v),O=y.message;v==="NOT_FOUND"&&O.includes("database")&&O.includes("does not exist")&&O.includes(this.databaseId.database)&&Mr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=F.INTERNAL,O="Unknown error status: "+v+" with message "+y.message),_=!0,A.o_(new W(V,O)),d.close()}else B(Xe,`RPC '${e}' stream ${i} received:`,P),A.__(P)}}),Ei.u_(),setTimeout(()=>{A.s_()},0),A}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return _v()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(t){return new Ei(t)}function rc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t){return new PC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ei.c_=!1;class p0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="PersistentStream";class m0{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new p0(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new W(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(cg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(B(cg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CR extends m0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=VC(this.serializer,e),r=function(s){if(!("targetChange"in s))return G.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?Jt(o.readTime):G.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=mh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ch(u)?{documents:bC(s,u)}:{query:OC(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=n0(s,o.resumeToken);const c=fh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(G.min())>0){l.readTime=pl(s,o.snapshotVersion.toTimestamp());const c=fh(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=FC(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=mh(this.serializer),n.removeTarget=e,this.K_(n)}}class RR extends m0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=LC(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=mh(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>DC(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{}class PR extends xR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W(F.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,dh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(F.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,dh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(F.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function kR(t,e,n,r){return new PR(t,e,n,r)}class NR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(wn(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="RemoteStore";class VR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new ar(1e3),this.Va=new ar(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{Wr(this)&&(B(sn,"Restarting streams for network reachability change."),await async function(u){const c=Y(u);c.da.add(4),await Co(c),c.ga.set("Unknown"),c.da.delete(4),await ql(c)}(this))})}),this.ga=new NR(r,i)}}async function ql(t){if(Wr(t))for(const e of t.ma)await e(!0)}async function Co(t){for(const e of t.ma)await e(!1)}function _h(t,e){return t.Ea.get(e)||void 0}function g0(t,e){const n=Y(t),r=_h(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const i=function(l,u){const c=_h(l,u);c!==void 0&&l.Ra.delete(c);const d=function(_,A){return A%2!=0?_.Va.next():_.Aa.next()}(l,u);return l.Ea.set(u,d),l.Ra.set(d,u),d}(n,e.targetId);B(sn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new fn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(i,s),Gf(n)?Qf(n):Hi(n).O_()&&Kf(n,s)}function qf(t,e){const n=Y(t),r=Hi(n),i=_h(n,e);B(sn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ia.delete(i),n.Ea.delete(e),n.Ra.delete(i),r.O_()&&y0(n,i),n.Ia.size===0&&(r.O_()?r.L_():Wr(n)&&n.ga.set("Unknown"))}function Kf(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void B(sn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}Hi(t).Z_(e)}function y0(t,e){t.pa.$e(e),Hi(t).X_(e)}function Qf(t){t.pa=new AC({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):ee()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Hi(t).start(),t.ga.ua()}function Gf(t){return Wr(t)&&!Hi(t).x_()&&t.Ia.size>0}function Wr(t){return Y(t).da.size===0}function _0(t){t.pa=void 0}async function DR(t){t.ga.set("Online")}async function LR(t){t.Ia.forEach((e,n)=>{Kf(t,e)})}async function bR(t,e){_0(t),Gf(t)?(t.ga.ha(e),Qf(t)):t.ga.set("Unknown")}async function OR(t,e,n){if(t.ga.set("Online"),e instanceof t0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds){if(i.Ia.has(l)){const u=i.Ra.get(l);u!==void 0&&(await i.remoteSyncer.rejectListen(u,o),i.Ea.delete(u),i.Ra.delete(l)),i.Ia.delete(l)}i.pa.removeTarget(l)}}(t,e)}catch(r){B(sn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gl(t,r)}else if(e instanceof ka?t.pa.Xe(e):e instanceof e0?t.pa.st(e):t.pa.tt(e),!n.isEqual(G.min()))try{const r=await d0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.pa.Tt(o);l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const p=s.Ia.get(d);p&&s.Ia.set(d,p.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,d)=>{const p=s.Ia.get(c);if(!p)return;s.Ia.set(c,p.withResumeToken(Ke.EMPTY_BYTE_STRING,p.snapshotVersion)),y0(s,c);const _=new fn(p.target,c,d,p.sequenceNumber);Kf(s,_)});const u=function(d,p){const _=new Map;p.targetChanges.forEach((R,x)=>{const P=d.Ra.get(x);P!==void 0&&_.set(P,R)});let A=new _e(Z);return p.targetMismatches.forEach((R,x)=>{const P=d.Ra.get(R);P!==void 0&&(A=A.insert(P,x))}),new Io(p.snapshotVersion,_,A,p.documentUpdates,p.resolvedLimboDocuments)}(s,l);return s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){B(sn,"Failed to raise snapshot:",r),await gl(t,r)}}async function gl(t,e,n){if(!Bi(e))throw e;t.da.add(1),await Co(t),t.ga.set("Offline"),n||(n=()=>d0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(sn,"Retrying IndexedDB access"),await n(),t.da.delete(1),await ql(t)})}function v0(t,e){return e().catch(n=>gl(t,n,e))}async function Kl(t){const e=Y(t),n=lr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Vf;for(;MR(e);)try{const i=await yR(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,FR(e,i)}catch(i){await gl(e,i)}E0(e)&&w0(e)}function MR(t){return Wr(t)&&t.Ta.length<10}function FR(t,e){t.Ta.push(e);const n=lr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function E0(t){return Wr(t)&&!lr(t).x_()&&t.Ta.length>0}function w0(t){lr(t).start()}async function jR(t){lr(t).ra()}async function UR(t){const e=lr(t);for(const n of t.Ta)e.ea(n.mutations)}async function $R(t,e,n){const r=t.Ta.shift(),i=jf.from(r,e,n);await v0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kl(t)}async function zR(t,e){e&&lr(t).Y_&&await async function(r,i){if(function(o){return TC(o)&&o!==F.ABORTED}(i.code)){const s=r.Ta.shift();lr(r).B_(),await v0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Kl(r)}}(t,e),E0(t)&&w0(t)}async function hg(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),B(sn,"RemoteStore received new credentials");const r=Wr(n);n.da.add(3),await Co(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await ql(n)}async function BR(t,e){const n=Y(t);e?(n.da.delete(2),await ql(n)):e||(n.da.add(2),await Co(n),n.ga.set("Unknown"))}function Hi(t){return t.ya||(t.ya=function(n,r,i){const s=Y(n);return s.sa(),new CR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:DR.bind(null,t),Yo:LR.bind(null,t),t_:bR.bind(null,t),H_:OR.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),Gf(t)?Qf(t):t.ga.set("Unknown")):(await t.ya.stop(),_0(t))})),t.ya}function lr(t){return t.wa||(t.wa=function(n,r,i){const s=Y(n);return s.sa(),new RR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:jR.bind(null,t),t_:zR.bind(null,t),ta:UR.bind(null,t),na:$R.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await Kl(t)):(await t.wa.stop(),t.Ta.length>0&&(B(sn,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Yf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xf(t,e){if(wn("AsyncQueue",`${e}: ${t}`),Bi(t))return new W(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{static emptySet(e){return new wi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Ts(),this.sortedSet=new _e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof wi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new wi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.Sa=new _e(q.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):K(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Li{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Li(e,n,wi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$l(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class WR{constructor(){this.queries=dg(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=dg(),s.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new W(F.ABORTED,"Firestore shutting down"))}}function dg(){return new Br(t=>$v(t),$l)}async function qR(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Fa()&&e.Ma()&&(r=2):(s=new HR,r=e.Ma()?0:1);try{switch(r){case 0:s.Ca=await n.onListen(i,!0);break;case 1:s.Ca=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Xf(o,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.va.push(e),e.Oa(n.onlineState),s.Ca&&e.Na(s.Ca)&&Jf(n)}async function KR(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.va.indexOf(e);o>=0&&(s.va.splice(o,1),s.va.length===0?i=e.Ma()?0:1:!s.Fa()&&e.Ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function QR(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.va)l.Na(i)&&(r=!0);o.Ca=i}}r&&Jf(n)}function GR(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.va)s.onError(n);r.queries.delete(e)}function Jf(t){t.xa.forEach(e=>{e.next()})}var vh,pg;(pg=vh||(vh={})).Ba="default",pg.Cache="cache";class YR{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Li(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=Li.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==vh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.key=e}}class S0{constructor(e){this.key=e}}class XR{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ee(),this.mutatedKeys=ee(),this.iu=zv(e),this.su=new wi(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new fg,i=n?n.su:this.su;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const _=i.get(d),A=zl(this.query,p)?p:null,R=!!_&&this.mutatedKeys.has(_.key),x=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let P=!1;_&&A?_.data.isEqual(A.data)?R!==x&&(r.track({type:3,doc:A}),P=!0):this.uu(_,A)||(r.track({type:2,doc:A}),P=!0,(u&&this.iu(A,u)>0||c&&this.iu(A,c)<0)&&(l=!0)):!_&&A?(r.track({type:0,doc:A}),P=!0):_&&!A&&(r.track({type:1,doc:_}),P=!0,(u||c)&&(l=!0)),P&&(A?(o=o.add(A),s=x?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{su:o,au:r,bs:l,mutatedKeys:s}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((d,p)=>function(A,R){const x=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Vt:P})}};return x(A)-x(R)}(d.type,p.type)||this.iu(d.doc,p.doc)),this.cu(r),i=i??!1;const l=n&&!i?this.lu():[],u=this.ru.size===0&&this.current&&!i?1:0,c=u!==this.nu;return this.nu=u,o.length!==0||c?{snapshot:new Li(this.query,e.su,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new fg,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ee(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new S0(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new T0(r))}),n}Tu(e){this.tu=e.ks,this.ru=ee();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return Li.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Zf="SyncEngine";class JR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ZR{constructor(e){this.key=e,this.Eu=!1}}class ex{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new Br(l=>$v(l),$l),this.Vu=new Map,this.du=new Set,this.mu=new _e(q.comparator),this.fu=new Map,this.gu=new zf,this.pu={},this.yu=new Map,this.wu=ar.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function tx(t,e,n=!0){const r=P0(t);let i;const s=r.Au.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Iu()):i=await I0(r,e,n,!0),i}async function nx(t,e){const n=P0(t);await I0(n,e,!0,!1)}async function I0(t,e,n,r){const i=await _R(t.localStore,Yt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await rx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&g0(t.remoteStore,i),l}async function rx(t,e,n,r,i){t.bu=(p,_,A)=>async function(x,P,E,y){let v=P.view._u(E);v.bs&&(v=await og(x.localStore,P.query,!1).then(({documents:w})=>P.view._u(w,v)));const V=y&&y.targetChanges.get(P.targetId),O=y&&y.targetMismatches.get(P.targetId)!=null,j=P.view.applyChanges(v,x.isPrimaryClient,V,O);return gg(x,P.targetId,j.hu),j.snapshot}(t,p,_,A);const s=await og(t.localStore,e,!0),o=new XR(e,s.ks),l=o._u(s.documents),u=Ao.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);gg(t,n,c.hu);const d=new JR(e,n,o);return t.Au.set(e,d),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),c.snapshot}async function ix(t,e,n){const r=Y(t),i=r.Au.get(e),s=r.Vu.get(i.targetId);if(s.length>1)return r.Vu.set(i.targetId,s.filter(o=>!$l(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await gh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&qf(r.remoteStore,i.targetId),Eh(r,i.targetId)}).catch(zi)):(Eh(r,i.targetId),await gh(r.localStore,i.targetId,!0))}async function sx(t,e){const n=Y(t),r=n.Au.get(e),i=n.Vu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qf(n.remoteStore,r.targetId))}async function ox(t,e,n){const r=dx(t);try{const i=await function(o,l){const u=Y(o),c=pe.now(),d=l.reduce((A,R)=>A.add(R.key),ee());let p,_;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let R=Tn(),x=ee();return u.xs.getEntries(A,d).next(P=>{R=P,R.forEach((E,y)=>{y.isValidDocument()||(x=x.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,R)).next(P=>{p=P;const E=[];for(const y of l){const v=yC(y,p.get(y.key).overlayedDocument);v!=null&&E.push(new Hr(y.key,v,Dv(v.value.mapValue),Xt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,c,E,l)}).next(P=>{_=P;const E=P.applyToLocalDocumentSet(p,x);return u.documentOverlayCache.saveOverlays(A,P.batchId,E)})}).then(()=>({batchId:_.batchId,changes:Hv(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.pu[o.currentUser.toKey()];c||(c=new _e(Z)),c=c.insert(l,u),o.pu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ro(r,i.changes),await Kl(r.remoteStore)}catch(i){const s=Xf(i,"Failed to persist write");n.reject(s)}}async function A0(t,e){const n=Y(t);try{const r=await mR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fu.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Eu=!0:i.modifiedDocuments.size>0?oe(o.Eu,14607):i.removedDocuments.size>0&&(oe(o.Eu,42227),o.Eu=!1))}),await Ro(n,r,e)}catch(r){await zi(r)}}function mg(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Au.forEach((s,o)=>{const l=o.view.Oa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const _ of p.va)_.Oa(l)&&(c=!0)}),c&&Jf(u)}(r.eventManager,e),i.length&&r.Ru.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ax(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fu.get(e),s=i&&i.key;if(s){let o=new _e(q.comparator);o=o.insert(s,et.newNoDocument(s,G.min()));const l=ee().add(s),u=new Io(G.min(),new Map,new _e(Z),o,l);await A0(r,u),r.mu=r.mu.remove(s),r.fu.delete(e),ed(r)}else await gh(r.localStore,e,!1).then(()=>Eh(r,e,n)).catch(zi)}async function lx(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await pR(n.localStore,e);R0(n,r,null),C0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ro(n,i)}catch(i){await zi(i)}}async function ux(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(oe(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);R0(r,e,n),C0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ro(r,i)}catch(i){await zi(i)}}function C0(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function R0(t,e,n){const r=Y(t);let i=r.pu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pu[r.currentUser.toKey()]=i}}function Eh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||x0(t,r)})}function x0(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(qf(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),ed(t))}function gg(t,e,n){for(const r of n)r instanceof T0?(t.gu.addReference(r.key,e),cx(t,r)):r instanceof S0?(B(Zf,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||x0(t,r.key)):K(19791,{Cu:r})}function cx(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(B(Zf,"New document in limbo: "+n),t.du.add(r),ed(t))}function ed(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new q(de.fromString(e)),r=t.wu.next();t.fu.set(r,new ZR(n)),t.mu=t.mu.insert(n,r),g0(t.remoteStore,new fn(Yt(Uv(n.path)),r,"TargetPurposeLimboResolution",Ml.ce))}}async function Ro(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Hf.Es(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ru.H_(i),await async function(u,c){const d=Y(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,_=>M.forEach(_.Ts,A=>d.persistence.referenceDelegate.addReference(p,_.targetId,A)).next(()=>M.forEach(_.Is,A=>d.persistence.referenceDelegate.removeReference(p,_.targetId,A)))))}catch(p){if(!Bi(p))throw p;B(Wf,"Failed to update sequence numbers: "+p)}for(const p of c){const _=p.targetId;if(!p.fromCache){const A=d.vs.get(_),R=A.snapshotVersion,x=A.withLastLimboFreeSnapshotVersion(R);d.vs=d.vs.insert(_,x)}}}(r.localStore,s))}async function hx(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){B(Zf,"User change. New user:",e.toKey());const r=await f0(n.localStore,e);n.currentUser=e,function(s,o){s.yu.forEach(l=>{l.forEach(u=>{u.reject(new W(F.CANCELLED,o))})}),s.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ro(n,r.Ns)}}function fx(t,e){const n=Y(t),r=n.fu.get(e);if(r&&r.Eu)return ee().add(r.key);{let i=ee();const s=n.Vu.get(e);if(!s)return i;for(const o of s){const l=n.Au.get(o);i=i.unionWith(l.view.ou)}return i}}function P0(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=A0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ax.bind(null,e),e.Ru.H_=QR.bind(null,e.eventManager),e.Ru.Du=GR.bind(null,e.eventManager),e}function dx(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ux.bind(null,e),e}class yl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wl(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return dR(this.persistence,new cR,e.initialUser,this.serializer)}xu(e){return new h0(Bf.Vi,this.serializer)}Mu(e){return new ER}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yl.provider={build:()=>new yl};class px extends yl{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){oe(this.persistence.referenceDelegate instanceof ml,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new GC(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new h0(r=>ml.Vi(r,n),this.serializer)}}class wh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hx.bind(null,this.syncEngine),await BR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new WR}()}createDatastore(e){const n=Wl(e.databaseInfo.databaseId),r=AR(e.databaseInfo);return kR(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new VR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>mg(this.syncEngine,n,0),function(){return ug.v()?new ug:new wR}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new ex(i,s,o,l,u,c);return d&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);B(sn,"RemoteStore shutting down."),s.da.add(5),await Co(s),s.fa.shutdown(),s.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}wh.provider={build:()=>new wh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="FirestoreClient";class gx{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=kf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B(ur,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(ur,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ic(t,e){t.asyncQueue.verifyOperationInProgress(),B(ur,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await f0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function yg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yx(t);B(ur,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>hg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>hg(e.remoteStore,i)),t._onlineComponents=e}async function yx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(ur,"Using user provided OfflineComponentProvider");try{await ic(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Mr("Error using user provided cache. Falling back to memory cache: "+n),await ic(t,new yl)}}else B(ur,"Using default OfflineComponentProvider"),await ic(t,new px(void 0));return t._offlineComponents}async function k0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(ur,"Using user provided OnlineComponentProvider"),await yg(t,t._uninitializedComponentsProvider._online)):(B(ur,"Using default OnlineComponentProvider"),await yg(t,new wh))),t._onlineComponents}function _x(t){return k0(t).then(e=>e.syncEngine)}async function vx(t){const e=await k0(t),n=e.eventManager;return n.onListen=tx.bind(null,e.syncEngine),n.onUnlisten=ix.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=nx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=sx.bind(null,e.syncEngine),n}function Ex(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new mx({next:_=>{d.Ku(),o.enqueueAndForget(()=>KR(s,p)),_.fromCache&&u.source==="server"?c.reject(new W(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(_)},error:_=>c.reject(_)}),p=new YR(l,d,{includeMetadataChanges:!0,Wa:!0});return qR(s,p)}(await vx(t),t.asyncQueue,e,n,r)),r.promise}function wx(t,e){const n=new Zn;return t.asyncQueue.enqueueAndForget(async()=>ox(await _x(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx="ComponentProvider",_g=new Map;function Sx(t,e,n,r,i){return new UA(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,N0(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0="firestore.googleapis.com",vg=!0;class Eg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=V0,this.ssl=vg}else this.host=e.host,this.ssl=e.ssl??vg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=c0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<KC)throw new W(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=N0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ql{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vA;switch(r.type){case"firstParty":return new SA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_g.get(n);r&&(B(Tx,"Removing Datastore"),_g.delete(n),r.terminate())}(this),Promise.resolve()}}function Ix(t,e,n,r={}){var c;t=io(t,Ql);const i=ov(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&rI(`https://${l}`),s.host!==V0&&s.host!==l&&Mr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!il(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Je.MOCK_USER;else{d=QS(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new W(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Je(_)}t._authCredentials=new EA(new Ev(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gl(this.firestore,e,this._query)}}class He{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}toJSON(){return{type:He._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(To(n,He._jsonSchema))return new He(e,r||null,new q(de.fromString(n.referencePath)))}}He._jsonSchemaVersion="firestore/documentReference/1.0",He._jsonSchema={type:ke("string",He._jsonSchemaVersion),referencePath:ke("string")};class er extends Gl{constructor(e,n,r){super(e,n,Uv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new q(e))}withConverter(e){return new er(this.firestore,e,this._path)}}function cr(t,e,...n){if(t=to(t),wv("collection","path",e),t instanceof Ql){const r=de.fromString(e,...n);return Lm(r),new er(t,null,r)}{if(!(t instanceof He||t instanceof er))throw new W(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return Lm(r),new er(t.firestore,null,r)}}function td(t,e,...n){if(t=to(t),arguments.length===1&&(e=kf.newId()),wv("doc","path",e),t instanceof Ql){const r=de.fromString(e,...n);return Dm(r),new He(t,null,new q(r))}{if(!(t instanceof He||t instanceof er))throw new W(F.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return Dm(r),new He(t.firestore,t instanceof er?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="AsyncQueue";class Tg{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new p0(this,"async_queue_retry"),this.lc=()=>{const r=rc();r&&B(wg,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=rc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=rc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new Zn;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!Bi(e))throw e;B(wg,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,wn("INTERNAL UNHANDLED ERROR: ",Sg(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=Yf.createAndSchedule(this,e,n,r,s=>this.Ec(s));return this.oc.push(i),i}Pc(){this._c&&K(47125,{Rc:Sg(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function Sg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Yl extends Ql{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Tg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tg(e),this._firestoreClient=void 0,await e}}}function Ax(t,e){const n=typeof t=="object"?t:sA(),r=typeof t=="string"?t:e||ll,i=eA(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=qS("firestore");s&&Ix(i,...s)}return i}function D0(t){if(t._terminated)throw new W(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Cx(t),t._firestoreClient}function Cx(t){var r,i,s,o;const e=t._freezeSettings(),n=Sx(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new gx(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(Ke.fromBase64String(e))}catch(n){throw new W(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rt(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(To(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:ke("string",Rt._jsonSchemaVersion),bytes:ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zt._jsonSchemaVersion}}static fromJSON(e){if(To(e,Zt._jsonSchema))return new Zt(e.latitude,e.longitude)}}Zt._jsonSchemaVersion="firestore/geoPoint/1.0",Zt._jsonSchema={type:ke("string",Zt._jsonSchemaVersion),latitude:ke("number"),longitude:ke("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ut._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(To(e,Ut._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ut(e.vectorValues);throw new W(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ut._jsonSchemaVersion="firestore/vectorValue/1.0",Ut._jsonSchema={type:ke("string",Ut._jsonSchemaVersion),vectorValues:ke("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=/^__.*__$/;class xx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new So(e,this.data,n,this.fieldTransforms)}}function O0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:t})}}class nd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new nd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return _l(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(O0(this.dataSource)&&Rx.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class Px{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wl(e)}V(e,n,r,i=!1){return new nd({dataSource:e,methodName:n,targetDoc:r,path:Be.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kx(t){const e=t._freezeSettings(),n=Wl(t._databaseId);return new Px(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Nx(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);U0("Data must be an object, but it was:",o,r);const l=F0(r,o);let u,c;if(s.merge)u=new Mt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const _=rd(e,p,n);if(!o.contains(_))throw new W(F.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Lx(d,_)||d.push(_)}u=new Mt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new xx(new Ct(l),u,c)}function M0(t,e){if(j0(t=to(t)))return U0("Unsupported field value:",e,t),F0(t,e);if(t instanceof b0)return function(r,i){if(!O0(i.dataSource))throw i.Dc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Dc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=M0(l,i.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=to(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:pl(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pl(i.serializer,s)}}if(r instanceof Zt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:n0(i.serializer,r._byteString)};if(r instanceof He){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$f(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ut)return function(o,l){const u=o instanceof Ut?o.toArray():o;return{mapValue:{fields:{[kv]:{stringValue:Vv},[ul]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.Dc("VectorValues must only contain numeric values.");return Mf(l.serializer,d)})}}}}}}(r,i);if(u0(r))return r._toProto(i.serializer);throw i.Dc(`Unsupported field value: ${Nf(r)}`)}(t,e)}function F0(t,e){const n={};return Iv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(r,i)=>{const s=M0(i,e.yc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function j0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof Zt||t instanceof Rt||t instanceof He||t instanceof b0||t instanceof Ut||u0(t))}function U0(t,e,n){if(!j0(n)||!Tv(n)){const r=Nf(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function rd(t,e,n){if((e=to(e))instanceof L0)return e._internalPath;if(typeof e=="string")return Dx(t,e);throw _l("Field path arguments must be of type string or ",t,!1,void 0,n)}const Vx=new RegExp("[~\\*/\\[\\]]");function Dx(t,e,n){if(e.search(Vx)>=0)throw _l(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new L0(...e.split("."))._internalPath}catch{throw _l(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _l(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(F.INVALID_ARGUMENT,l+t+u)}function Lx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{convertValue(e,n="none"){switch(or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[ul].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ce(o.doubleValue));return new Ut(n)}convertGeoPoint(e){return new Zt(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=jl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oo(e));default:return null}}convertTimestamp(e){const n=ir(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);oe(l0(r),9688,{name:e});const i=new ao(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox extends bx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,n)}}const Ig="@firebase/firestore",Ag="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Mx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(rd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Mx extends $0{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function jx(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ha{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ti extends $0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Na(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ti._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ti._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ti._jsonSchema={type:ke("string",Ti._jsonSchemaVersion),bundleSource:ke("string","DocumentSnapshot"),bundleName:ke("string"),bundle:ke("string")};class Na extends Ti{data(e={}){return super.data(e)}}class Si{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ha(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Na(this._firestore,this._userDataWriter,r.key,r,new ha(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Na(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ha(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Na(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ha(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:Ux(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Si._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=kf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ux(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Si._jsonSchemaVersion="firestore/querySnapshot/1.0",Si._jsonSchema={type:ke("string",Si._jsonSchemaVersion),bundleSource:ke("string","QuerySnapshot"),bundleName:ke("string"),bundle:ke("string")};function ho(t){t=io(t,Gl);const e=io(t.firestore,Yl),n=D0(e),r=new Ox(e);return Fx(t._query),Ex(n,t._query).then(i=>new Si(e,r,t,i))}function z0(t){return B0(io(t.firestore,Yl),[new Ff(t._key,Xt.none())])}function id(t,e){const n=io(t.firestore,Yl),r=td(t),i=jx(t.converter,e),s=kx(t.firestore);return B0(n,[Nx(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Xt.exists(!1))]).then(()=>r)}function B0(t,e){const n=D0(t);return wx(n,e)}(function(e,n=!0){_A(iA),ol(new no("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Yl(new wA(r.getProvider("auth-internal")),new IA(o,r.getProvider("app-check-internal")),$A(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),vi(Ig,Ag,e),vi(Ig,Ag,"esm2020")})();const $x={apiKey:"AIzaSyC99I1FphPe1MEgoanmopRINKB2bdZUnNo",authDomain:"budget-app-c8a1e.firebaseapp.com",projectId:"budget-app-c8a1e",storageBucket:"budget-app-c8a1e.firebasestorage.app",messagingSenderId:"888042716563",appId:"1:888042716563:web:97a19d0e31da7158177c66"},zx=cv($x),en=Ax(zx),Bx=()=>{const[t,e]=D.useState(0),[n,r]=D.useState(0),[i,s]=D.useState(0),o=async()=>{try{const c=await ho(cr(en,"expenses"));let d=0;return c.forEach(p=>{d+=Number(p.data().amount)}),e(d),d}catch(c){console.log(c)}},l=async()=>{try{const c=await ho(cr(en,"income"));let d=0;return c.forEach(p=>{d+=Number(p.data().amount)}),r(d),d}catch(c){console.log(c)}},u=async()=>{const c=await o(),d=await l();s(d-c)};return D.useEffect(()=>{u()},[]),b.jsx("div",{className:"container mt-5",children:b.jsxs("div",{className:"row",children:[b.jsx("div",{className:"col-md-4 mb-3",children:b.jsxs("div",{className:"card shadow text-center  c1",children:[b.jsx("h3",{children:"Total Expenses"}),b.jsxs("h1",{children:["₹ ",t]})]})}),b.jsx("div",{className:"col-md-4 mb-3",children:b.jsxs("div",{className:"card shadow text-center  c2",children:[b.jsx("h3",{children:"Total Income"}),b.jsxs("h1",{children:["₹ ",n]})]})}),b.jsx("div",{className:"col-md-4 mb-3",children:b.jsxs("div",{className:"card shadow text-center  c3",children:[b.jsx("h3",{children:"Remaining Balance"}),b.jsxs("h1",{children:["₹ ",i]})]})})]})})};function H0(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=H0(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function kr(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=H0(t))&&(r&&(r+=" "),r+=e);return r}var xo=t=>typeof t=="number"&&!isNaN(t),Fr=t=>typeof t=="string",Sn=t=>typeof t=="function",Hx=t=>Fr(t)||xo(t),Th=t=>Fr(t)||Sn(t)?t:null,Wx=(t,e)=>t===!1||xo(t)&&t>0?t:e,Sh=t=>D.isValidElement(t)||Fr(t)||Sn(t)||xo(t);function qx(t,e,n=300){let{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Kx({enter:t,exit:e,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:s,position:o,preventExitTransition:l,done:u,nodeRef:c,isIn:d,playToast:p}){let _=n?`${t}--${o}`:t,A=n?`${e}--${o}`:e,R=D.useRef(0);return D.useLayoutEffect(()=>{let x=c.current,P=_.split(" "),E=y=>{y.target===c.current&&(p(),x.removeEventListener("animationend",E),x.removeEventListener("animationcancel",E),R.current===0&&y.type!=="animationcancel"&&x.classList.remove(...P))};x.classList.add(...P),x.addEventListener("animationend",E),x.addEventListener("animationcancel",E)},[]),D.useEffect(()=>{let x=c.current,P=()=>{x.removeEventListener("animationend",P),r?qx(x,u,i):u()};d||(l?P():(R.current=1,x.className+=` ${A}`,x.addEventListener("animationend",P)))},[d]),ue.createElement(ue.Fragment,null,s)}}function Cg(t,e){return{content:W0(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:e}}function W0(t,e,n=!1){return D.isValidElement(t)&&!Fr(t.type)?D.cloneElement(t,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:n}):Sn(t)?t({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:n}):t}function Qx({closeToast:t,theme:e,ariaLabel:n="close"}){return ue.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:r=>{r.stopPropagation(),t(!0)},"aria-label":n},ue.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ue.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Gx({delay:t,isRunning:e,closeToast:n,type:r="default",hide:i,className:s,controlledProgress:o,progress:l,rtl:u,isIn:c,theme:d}){let p=i||o&&l===0,_={animationDuration:`${t}ms`,animationPlayState:e?"running":"paused"};o&&(_.transform=`scaleX(${l})`);let A=kr("Toastify__progress-bar",o?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":u}),R=Sn(s)?s({rtl:u,type:r,defaultClassName:A}):kr(A,s),x={[o&&l>=1?"onTransitionEnd":"onAnimationEnd"]:o&&l<1?null:()=>{c&&n()}};return ue.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":p},ue.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${r}`}),ue.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer","aria-valuenow":o?Math.round(l*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:R,style:_,...x}))}var Yx=1,q0=()=>`${Yx++}`;function Xx(t,e,n){let r=1,i=0,s=[],o=[],l=e,u=new Map,c=new Set,d=y=>(c.add(y),()=>c.delete(y)),p=()=>{o=Array.from(u.values()),c.forEach(y=>y())},_=({containerId:y,toastId:v,updateId:V})=>{let O=y?y!==t:t!==1,j=u.has(v)&&V==null;return O||j},A=(y,v)=>{u.forEach(V=>{var O;(v==null||v===V.props.toastId)&&((O=V.toggle)==null||O.call(V,y))})},R=y=>{var v,V;y.isActive&&((V=(v=y.props)==null?void 0:v.onClose)==null||V.call(v,y.removalReason),y.isActive=!1,n(Cg(y,"removed")))},x=y=>{if(y==null)u.forEach(R);else{let v=u.get(y);v&&R(v)}p()},P=()=>{i-=s.length,s=[]},E=y=>{var v,V;let{toastId:O,updateId:j}=y.props,w=j==null;y.staleId&&u.delete(y.staleId),y.isActive=!0,u.set(O,y),p(),n(Cg(y,w?"added":"updated")),w&&((V=(v=y.props).onOpen)==null||V.call(v))};return{id:t,props:l,observe:d,toggle:A,removeToast:x,toasts:u,clearQueue:P,buildToast:(y,v)=>{if(_(v))return;let{toastId:V,updateId:O,data:j,staleId:w,delay:g}=v,T=O==null;T&&i++;let I={...l,style:l.toastStyle,key:r++,...Object.fromEntries(Object.entries(v).filter(([k,S])=>S!=null)),toastId:V,updateId:O,data:j,isIn:!1,className:Th(v.className||l.toastClassName),progressClassName:Th(v.progressClassName||l.progressClassName),autoClose:v.isLoading?!1:Wx(v.autoClose,l.autoClose),closeToast(k){let S=u.get(V);S&&(S.removalReason=k,x(V))},deleteToast(){if(u.get(V)!=null){if(u.delete(V),i--,i<0&&(i=0),s.length>0){E(s.shift());return}p()}}};I.closeButton=l.closeButton,v.closeButton===!1||Sh(v.closeButton)?I.closeButton=v.closeButton:v.closeButton===!0&&(I.closeButton=Sh(l.closeButton)?l.closeButton:!0);let C={content:y,props:I,staleId:w};l.limit&&l.limit>0&&i>l.limit&&T?s.push(C):xo(g)?setTimeout(()=>{E(C)},g):E(C)},setProps(y){l=y},setToggle:(y,v)=>{let V=u.get(y);V&&(V.toggle=v)},isToastActive:y=>{var v;return(v=u.get(y))==null?void 0:v.isActive},getSnapshot:()=>o}}var st=new Map,fo=[],Ih=new Set,Jx=t=>Ih.forEach(e=>e(t)),K0=()=>st.size>0;function Zx(){fo.forEach(t=>G0(t.content,t.options)),fo=[]}var eP=(t,{containerId:e})=>{var n;return(n=st.get(e||1))==null?void 0:n.toasts.get(t)};function Q0(t,e){var n;if(e)return!!((n=st.get(e))!=null&&n.isToastActive(t));let r=!1;return st.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function tP(t){if(!K0()){fo=fo.filter(e=>t!=null&&e.options.toastId!==t);return}if(t==null||Hx(t))st.forEach(e=>{e.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let e=st.get(t.containerId);e?e.removeToast(t.id):st.forEach(n=>{n.removeToast(t.id)})}}var nP=(t={})=>{st.forEach(e=>{e.props.limit&&(!t.containerId||e.id===t.containerId)&&e.clearQueue()})};function G0(t,e){Sh(t)&&(K0()||fo.push({content:t,options:e}),st.forEach(n=>{n.buildToast(t,e)}))}function rP(t){var e;(e=st.get(t.containerId||1))==null||e.setToggle(t.id,t.fn)}function Y0(t,e){st.forEach(n=>{(e==null||!(e!=null&&e.containerId)||(e==null?void 0:e.containerId)===n.id)&&n.toggle(t,e==null?void 0:e.id)})}function iP(t){let e=t.containerId||1;return{subscribe(n){let r=Xx(e,t,Jx);st.set(e,r);let i=r.observe(n);return Zx(),()=>{i(),st.delete(e)}},setProps(n){var r;(r=st.get(e))==null||r.setProps(n)},getSnapshot(){var n;return(n=st.get(e))==null?void 0:n.getSnapshot()}}}function sP(t){return Ih.add(t),()=>{Ih.delete(t)}}function oP(t){return t&&(Fr(t.toastId)||xo(t.toastId))?t.toastId:q0()}function Po(t,e){return G0(t,e),e.toastId}function Xl(t,e){return{...e,type:e&&e.type||t,toastId:oP(e)}}function Jl(t){return(e,n)=>Po(e,Xl(t,n))}function se(t,e){return Po(t,Xl("default",e))}se.loading=(t,e)=>Po(t,Xl("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function aP(t,{pending:e,error:n,success:r},i){let s;e&&(s=Fr(e)?se.loading(e,i):se.loading(e.render,{...i,...e}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,p)=>{if(d==null){se.dismiss(s);return}let _={type:c,...o,...i,data:p},A=Fr(d)?{render:d}:d;return s?se.update(s,{..._,...A}):se(A.render,{..._,...A}),p},u=Sn(t)?t():t;return u.then(c=>l("success",r,c)).catch(c=>l("error",n,c)),u}se.promise=aP;se.success=Jl("success");se.info=Jl("info");se.error=Jl("error");se.warning=Jl("warning");se.warn=se.warning;se.dark=(t,e)=>Po(t,Xl("default",{theme:"dark",...e}));function lP(t){tP(t)}se.dismiss=lP;se.clearWaitingQueue=nP;se.isActive=Q0;se.update=(t,e={})=>{let n=eP(t,e);if(n){let{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:q0()};s.toastId!==t&&(s.staleId=t);let o=s.render||i;delete s.render,Po(o,s)}};se.done=t=>{se.update(t,{progress:1})};se.onChange=sP;se.play=t=>Y0(!0,t);se.pause=t=>Y0(!1,t);function uP(t){var e;let{subscribe:n,getSnapshot:r,setProps:i}=D.useRef(iP(t)).current;i(t);let s=(e=D.useSyncExternalStore(n,r,r))==null?void 0:e.slice();function o(l){if(!s)return[];let u=new Map;return t.newestOnTop&&s.reverse(),s.forEach(c=>{let{position:d}=c.props;u.has(d)||u.set(d,[]),u.get(d).push(c)}),Array.from(u,c=>l(c[0],c[1]))}return{getToastToRender:o,isToastActive:Q0,count:s==null?void 0:s.length}}function cP(t){let[e,n]=D.useState(!1),[r,i]=D.useState(!1),s=D.useRef(null),o=D.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:p}=t;rP({id:t.toastId,containerId:t.containerId,fn:n}),D.useEffect(()=>{if(t.pauseOnFocusLoss)return _(),()=>{A()}},[t.pauseOnFocusLoss]);function _(){document.hasFocus()||E(),window.addEventListener("focus",P),window.addEventListener("blur",E)}function A(){window.removeEventListener("focus",P),window.removeEventListener("blur",E)}function R(w){if(t.draggable===!0||t.draggable===w.pointerType){y();let g=s.current;o.canCloseOnClick=!0,o.canDrag=!0,g.style.transition="none",t.draggableDirection==="x"?(o.start=w.clientX,o.removalDistance=g.offsetWidth*(t.draggablePercent/100)):(o.start=w.clientY,o.removalDistance=g.offsetHeight*(t.draggablePercent===80?t.draggablePercent*1.5:t.draggablePercent)/100)}}function x(w){let{top:g,bottom:T,left:I,right:C}=s.current.getBoundingClientRect();w.pointerType==="mouse"&&t.pauseOnHover&&w.clientX>=I&&w.clientX<=C&&w.clientY>=g&&w.clientY<=T?E():P()}function P(){n(!0)}function E(){n(!1)}function y(){o.didMove=!1,document.addEventListener("pointermove",V),document.addEventListener("pointerup",O)}function v(){document.removeEventListener("pointermove",V),document.removeEventListener("pointerup",O)}function V(w){let g=s.current;if(o.canDrag&&g){o.didMove=!0,e&&E(),t.draggableDirection==="x"?o.delta=w.clientX-o.start:o.delta=w.clientY-o.start,o.start!==w.clientX&&(o.canCloseOnClick=!1);let T=t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`;g.style.transform=`translate3d(${T},0)`,g.style.opacity=`${1-Math.abs(o.delta/o.removalDistance)}`}}function O(){v();let w=s.current;if(o.canDrag&&o.didMove&&w){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance){i(!0),t.closeToast(!0),t.collapseAll();return}w.style.transition="transform 0.2s, opacity 0.2s",w.style.removeProperty("transform"),w.style.removeProperty("opacity")}}let j={onPointerDown:R,onPointerUp:x};return l&&u&&(j.onMouseEnter=E,t.stacked||(j.onMouseLeave=P)),p&&(j.onClick=w=>{d&&d(w),o.canCloseOnClick&&c(!0)}),{playToast:P,pauseToast:E,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:j}}var X0=typeof window<"u"?D.useLayoutEffect:D.useEffect,Zl=({theme:t,type:e,isLoading:n,...r})=>ue.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...r});function hP(t){return ue.createElement(Zl,{...t},ue.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function fP(t){return ue.createElement(Zl,{...t},ue.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function dP(t){return ue.createElement(Zl,{...t},ue.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function pP(t){return ue.createElement(Zl,{...t},ue.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function mP(){return ue.createElement("div",{className:"Toastify__spinner"})}var Ah={info:fP,warning:hP,success:dP,error:pP,spinner:mP},gP=t=>t in Ah;function yP({theme:t,type:e,isLoading:n,icon:r}){let i=null,s={theme:t,type:e};return r===!1||(Sn(r)?i=r({...s,isLoading:n}):D.isValidElement(r)?i=D.cloneElement(r,s):n?i=Ah.spinner():gP(e)&&(i=Ah[e](s))),i}var _P=t=>{let{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=cP(t),{closeButton:o,children:l,autoClose:u,onClick:c,type:d,hideProgressBar:p,closeToast:_,transition:A,position:R,className:x,style:P,progressClassName:E,updateId:y,role:v,progress:V,rtl:O,toastId:j,deleteToast:w,isIn:g,isLoading:T,closeOnClick:I,theme:C,ariaLabel:k}=t,S=kr("Toastify__toast",`Toastify__toast-theme--${C}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":O},{"Toastify__toast--close-on-click":I}),Ne=Sn(x)?x({rtl:O,position:R,type:d,defaultClassName:S}):kr(S,x),mt=yP(t),Cn=!!V||!u,an={closeToast:_,type:d,theme:C},z=null;return o===!1||(Sn(o)?z=o(an):D.isValidElement(o)?z=D.cloneElement(o,an):z=Qx(an)),ue.createElement(A,{isIn:g,done:w,position:R,preventExitTransition:n,nodeRef:r,playToast:s},ue.createElement("div",{id:j,tabIndex:0,onClick:c,"data-in":g,className:Ne,...i,style:P,ref:r,...g&&{role:v,"aria-label":k}},mt!=null&&ue.createElement("div",{className:kr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!T})},mt),W0(l,t,!e),z,!t.customProgressBar&&ue.createElement(Gx,{...y&&!Cn?{key:`p-${y}`}:{},rtl:O,theme:C,delay:u,isRunning:e,isIn:g,closeToast:_,hide:p,type:d,className:E,controlledProgress:Cn,progress:V||0})))},vP=(t,e=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}),EP=Kx(vP("bounce",!0)),wP={position:"top-right",transition:EP,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&t.code==="KeyT"};function TP(t){let e={...wP,...t},n=t.stacked,[r,i]=D.useState(!0),s=D.useRef(null),{getToastToRender:o,isToastActive:l,count:u}=uP(e),{className:c,style:d,rtl:p,containerId:_,hotKeys:A}=e;function R(P){let E=kr("Toastify__toast-container",`Toastify__toast-container--${P}`,{"Toastify__toast-container--rtl":p});return Sn(c)?c({position:P,rtl:p,defaultClassName:E}):kr(E,Th(c))}function x(){n&&(i(!0),se.play())}return X0(()=>{var P;if(n){let E=s.current.querySelectorAll('[data-in="true"]'),y=12,v=(P=e.position)==null?void 0:P.includes("top"),V=0,O=0;Array.from(E).reverse().forEach((j,w)=>{let g=j;g.classList.add("Toastify__toast--stacked"),w>0&&(g.dataset.collapsed=`${r}`),g.dataset.pos||(g.dataset.pos=v?"top":"bot");let T=V*(r?.2:1)+(r?0:y*w),I=Math.max(.5,1-(r?O:0));g.style.setProperty("--y",`${v?T:T*-1}px`),g.style.setProperty("--g",`${y}`),g.style.setProperty("--s",`${I}`),V+=g.offsetHeight,O+=.025})}},[r,u,n]),D.useEffect(()=>{function P(E){var y;let v=s.current;A(E)&&((y=v==null?void 0:v.querySelector('[tabIndex="0"]'))==null||y.focus(),i(!1),se.pause()),E.key==="Escape"&&(document.activeElement===v||v!=null&&v.contains(document.activeElement))&&(i(!0),se.play())}return document.addEventListener("keydown",P),()=>{document.removeEventListener("keydown",P)}},[A]),ue.createElement("section",{ref:s,className:"Toastify",id:_,onMouseEnter:()=>{n&&(i(!1),se.pause())},onMouseLeave:x,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},o((P,E)=>{let y=E.length?{...d}:{...d,pointerEvents:"none"};return ue.createElement("div",{tabIndex:-1,className:R(P),"data-stacked":n,style:y,key:`c-${P}`},E.map(({content:v,props:V})=>ue.createElement(_P,{...V,stacked:n,collapseAll:x,isIn:l(V.toastId,V.containerId),key:`t-${V.key}`},v)))}))}var SP=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,Rg=new Map,IP=(t,e)=>{X0(()=>{if(!t||typeof document>"u")return;let n=document,r=Rg.get(n);if(r){e&&r.setAttribute("nonce",e);return}let i=n.createElement("style");i.textContent=t,e&&i.setAttribute("nonce",e),n.head.appendChild(i),Rg.set(n,i)},[e])};function AP(t){return IP(SP,t.nonce),ue.createElement(TP,{...t})}const CP=()=>{const[t,e]=D.useState({title:"",amount:"",category:"",date:""}),[n,r]=D.useState([]),i=async()=>{try{const u=(await ho(cr(en,"categories"))).docs.map(c=>({id:c.id,...c.data()}));r(u)}catch(l){console.log(l)}};D.useEffect(()=>{i()},[]);const s=l=>{e({...t,[l.target.name]:l.target.value})},o=async l=>{l.preventDefault();try{await id(cr(en,"expenses"),t),se.success("Expense Added Successfully"),e({title:"",amount:"",category:"",date:""})}catch(u){console.log(u)}};return b.jsx("div",{className:"container mt-5",children:b.jsx("div",{className:"row justify-content-center",children:b.jsx("div",{className:"col-md-6",children:b.jsx("div",{className:"card shadow",children:b.jsxs("div",{className:"card-body",children:[b.jsx("h3",{className:"text-center mb-4",children:"Add Expense"}),b.jsxs("form",{onSubmit:o,children:[b.jsxs("div",{className:"mb-3",children:[b.jsx("label",{children:"Expense Title"}),b.jsx("input",{type:"text",className:"form-control",name:"title",value:t.title,onChange:s,required:!0})]}),b.jsxs("div",{className:"mb-3",children:[b.jsx("label",{children:"Amount"}),b.jsx("input",{type:"number",className:"form-control",name:"amount",value:t.amount,onChange:s,required:!0})]}),b.jsxs("div",{className:"mb-3",children:[b.jsx("label",{children:"Category"}),b.jsxs("select",{className:"form-control",name:"category",value:t.category,onChange:s,required:!0,children:[b.jsx("option",{value:"",children:"Select Category"}),n.map(l=>b.jsx("option",{value:l.title,children:l.title},l.id))]})]}),b.jsxs("div",{className:"mb-3",children:[b.jsx("label",{children:"Date"}),b.jsx("input",{type:"date",className:"form-control",name:"date",value:t.date,onChange:s,required:!0})]}),b.jsx("button",{className:"btn btn-primary w-100",children:"Add Expense"})]})]})})})})})},RP=()=>{const[t,e]=D.useState([]),n=async()=>{const s=(await ho(cr(en,"expenses"))).docs.map(o=>({id:o.id,...o.data()}));e(s)};D.useEffect(()=>{n()},[]);const r=async i=>{await z0(td(en,"expenses",i)),se.success("Deleted Successfully"),n()};return b.jsx("div",{className:"container mt-5",children:b.jsx("div",{className:"card shadow",children:b.jsxs("div",{className:"card-body",children:[b.jsx("h3",{className:"text-center mb-4",children:"Monthly Expenses"}),b.jsxs("table",{className:"table table-bordered table-striped",children:[b.jsx("thead",{children:b.jsxs("tr",{children:[b.jsx("th",{children:"S.No"}),b.jsx("th",{children:"Title"}),b.jsx("th",{children:"Amount"}),b.jsx("th",{children:"Category"}),b.jsx("th",{children:"Date"}),b.jsx("th",{children:"Delete"})]})}),b.jsx("tbody",{children:t.length>0?t.map((i,s)=>b.jsxs("tr",{children:[b.jsx("td",{children:s+1}),b.jsx("td",{children:i.title}),b.jsxs("td",{children:["₹ ",i.amount]}),b.jsx("td",{children:i.category}),b.jsx("td",{children:i.date}),b.jsx("td",{children:b.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>r(i.id),children:"Delete"})})]},i.id)):b.jsx("tr",{children:b.jsx("td",{colSpan:6,children:"No Expenses Found"})})})]})]})})})};const xP=()=>{const[t,e]=D.useState(""),[n,r]=D.useState([]),i=async()=>{const u=(await ho(cr(en,"categories"))).docs.map(c=>({id:c.id,...c.data()}));r(u)};D.useEffect(()=>{i()},[]);const s=async l=>{if(l.preventDefault(),t===""){se.error("Please Enter Category");return}try{await id(cr(en,"categories"),{title:t}),se.success("Category Added Successfully"),e(""),i()}catch(u){console.log(u)}},o=async l=>{await z0(td(en,"categories",l)),se.success("Deleted Successfully"),i()};return b.jsx("div",{className:"container mt-5",children:b.jsxs("div",{className:"row justify-content-center",children:[b.jsx("div",{className:"col-md-6",children:b.jsx("div",{className:"card shadow mb-4",children:b.jsxs("div",{className:"card-body",children:[b.jsx("h3",{className:"text-center mb-4",children:"Add Category"}),b.jsxs("form",{onSubmit:s,children:[b.jsxs("div",{className:"mb-3",children:[b.jsx("label",{children:"Category Title"}),b.jsx("input",{type:"text",className:"form-control",placeholder:"Enter Category",value:t,onChange:l=>e(l.target.value)})]}),b.jsx("button",{className:"btn btn-primary w-100",children:"Add Category"})]})]})})}),b.jsx("div",{className:"col-md-6",children:b.jsx("div",{className:"card shadow",children:b.jsxs("div",{className:"card-body",children:[b.jsx("h4",{className:"text-center mb-3",children:"Categories List"}),b.jsxs("table",{className:"table table-bordered table-striped",children:[b.jsx("thead",{children:b.jsxs("tr",{children:[b.jsx("th",{children:"S.No"}),b.jsx("th",{children:"Category Name"}),b.jsx("th",{children:"Delete"})]})}),b.jsx("tbody",{children:n.length>0?n.map((l,u)=>b.jsxs("tr",{children:[b.jsx("td",{children:u+1}),b.jsx("td",{children:l.title}),b.jsx("td",{children:b.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>o(l.id),children:"Delete"})})]},l.id)):b.jsx("tr",{children:b.jsx("td",{colSpan:3,children:"No Categories Found"})})})]})]})})})]})})},PP=()=>{const[t,e]=D.useState(""),n=async r=>{r.preventDefault();try{await id(cr(en,"income"),{amount:t}),se.success("Income Added Successfully"),e("")}catch(i){console.log(i)}};return b.jsx("div",{className:"container mt-5",children:b.jsx("div",{className:"row justify-content-center",children:b.jsx("div",{className:"col-md-6",children:b.jsx("div",{className:"card shadow",children:b.jsxs("div",{className:"card-body",children:[b.jsx("h3",{className:"text-center mb-4",children:"Add Income"}),b.jsxs("form",{onSubmit:n,children:[b.jsxs("div",{className:"mb-3",children:[b.jsx("label",{children:"Monthly Income"}),b.jsx("input",{type:"number",className:"form-control",placeholder:"Enter Income",value:t,onChange:r=>e(r.target.value),required:!0})]}),b.jsx("button",{className:"btn btn-success w-100",children:"Add Income"})]})]})})})})})},kP=()=>b.jsxs(AS,{children:[b.jsx(bS,{}),b.jsxs(tS,{children:[b.jsx(Yr,{path:"/",element:b.jsx(Bx,{})}),b.jsx(Yr,{path:"/add-expense",element:b.jsx(CP,{})}),b.jsx(Yr,{path:"/view-expenses",element:b.jsx(RP,{})}),b.jsx(Yr,{path:"/add-category",element:b.jsx(xP,{})}),b.jsx(Yr,{path:"/add-income",element:b.jsx(PP,{})})]}),b.jsx(AP,{})]});sc.createRoot(document.getElementById("root")).render(b.jsx(ue.StrictMode,{children:b.jsx(kP,{})}));
