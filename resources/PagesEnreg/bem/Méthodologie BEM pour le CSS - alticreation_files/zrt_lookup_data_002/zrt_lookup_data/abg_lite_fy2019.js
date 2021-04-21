(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var m=this||self,aa=/^[\w+/_-]+[=]{0,2}$/,n=null;function ba(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&aa.test(a)?a:""}function ca(a,b){function c(){}c.prototype=b.prototype;a.W=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.V=function(d,e,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[e].apply(d,g)}}function p(a){return a};function da(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};var q;var t=class{constructor(a,b){this.g=b===ea?a:""}};t.prototype.toString=function(){return this.g+""};var ea={}; 
function fa(){if(void 0===q){var a=null;var b=m.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:p,createScript:p,createScriptURL:p})}catch(c){m.console&&m.console.error(c.message)}q=a}else q=a}a=(a=q)?a.createScriptURL("https://pagead2.googlesyndication.com/pagead/js/r20210322/r20110914/abg_survey.js"):"https://pagead2.googlesyndication.com/pagead/js/r20210322/r20110914/abg_survey.js"; 
return new t(a,ea)};(class{constructor(a,b){this.g=b===ka?a:""}}).prototype.toString=function(){return this.g.toString()};var ka={};function u(a){u[" "](a);return a}u[" "]=function(){};function la(){}var ma="function"==typeof Uint8Array;function na(a,b,c){a.i=null;b||(b=[]);a.o=void 0;a.j=-1;a.g=b;a:{if(b=a.g.length){--b;var d=a.g[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||ma&&d instanceof Uint8Array)){a.l=b-a.j;a.h=d;break a}}a.l=Number.MAX_VALUE}a.m={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.l)d+=a.j,a.g[d]=a.g[d]||v;else{var e=a.l+a.j;a.g[e]||(a.h=a.g[e]={});a.h[d]=a.h[d]||v}}var v=[]; 
function w(a,b){if(b<a.l){b+=a.j;var c=a.g[b];return c!==v?c:a.g[b]=[]}if(a.h)return c=a.h[b],c===v?a.h[b]=[]:c}function A(a,b){a=w(a,b);return null==a?0:a}function B(a,b){a=w(a,b);return null==a?"":a}function F(a,b){a=w(a,b);a=null==a?a:!!a;return null==a?!1:a}function oa(a){var b=pa;a.i||(a.i={});if(!a.i[1]){var c=w(a,1);c&&(a.i[1]=new b(c))}return a.i[1]};function pa(a){na(this,a,qa)}ca(pa,la);var qa=[28];function ra(a){na(this,a,sa)}ca(ra,la);var sa=[21];class ta{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};var ua={passive:!0},va=da(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",null,b)}catch(b){}return a});function G(a,b,c,d){if(a.addEventListener){var e=a.addEventListener;d=d?d.passive&&va()?d:d.capture||!1:!1;e.call(a,b,c,d)}};function H(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function wa(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):xa(b,a)[0]||null);return a||null} 
function xa(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var f={};for(c=d=0;a=e[c];c++){var g=a.className,k;if(k="function"==typeof g.split)k=0<=Array.prototype.indexOf.call(g.split(/\s+/),b,void 0);k&&(f[d++]=a)}f.length=d;return f}return e}function ya(a){a&&a.parentNode&&a.parentNode.removeChild(a)};var za=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function I(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{u(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Aa(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};function Ba(a,b){a.google_image_requests||(a.google_image_requests=[]);const c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};let Ca=0;function Da(a){return(a=Ea(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function Ea(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)} 
function Fa(){if(!(.01<Math.random())){var a=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${60}&version=${Da(60)}&sample=${.01}`,b=window,c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Ba(b,a)}};var J=document,K=window;function Ga(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}function Ha(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ga(a).match(/\S+/g)||[],b=0<=Array.prototype.indexOf.call(a,b,void 0));return b}function M(a,b){if(a.classList)a.classList.add(b);else if(!Ha(a,b)){var c=Ga(a);b=c+(0<c.length?" "+b:b);"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}};class Ia{constructor(a){this.g=(this.serializedAttributionData=a)?new ra(a):null;this.isMutableImpression=null!=w(this.g,1)&&!!F(oa(this.g),33);B(this.g,30);this.S=!!F(this.g,11);this.hasUserFeedbackData=!!this.g&&null!=w(this.g,1);this.K=!!F(this.g,4);this.N=!!F(this.g,6);this.J=!!F(this.g,13);A(this.g,8);this.creativeIndexSuffix=1<A(this.g,8)?A(this.g,7).toString():"";this.T=!!F(this.g,17);this.P=!!F(this.g,18);this.I=!!F(this.g,14);this.enableMultiplexThirdPartyAttribution=!!F(this.g,32);this.B= 
!!F(this.g,15);this.U=!!F(this.g,31);this.O=1==F(this.g,9);this.openAttributionInline=1==F(this.g,10);this.isMobileDevice=!!F(this.g,12);this.R=null;this.M=(a=J.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.D=""!==this.creativeIndexSuffix)&&void 0===K.goog_multislot_cache&&(K.goog_multislot_cache={});if(this.D&&!this.M){if(a=K.goog_multislot_cache.hd,void 0===a){a=!1;var b=J.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom- 
b.top)a=!1;else{var c=document.body.getBoundingClientRect();150>(1>=Math.abs(c.left-b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.C=a;this.u=H("abgcp"+this.creativeIndexSuffix);this.s=H("abgc"+this.creativeIndexSuffix);this.h=H("abgs"+this.creativeIndexSuffix);H("abgl"+this.creativeIndexSuffix);this.o=H("abgb"+this.creativeIndexSuffix);this.A=H("abgac"+this.creativeIndexSuffix);H("mute_panel"+this.creativeIndexSuffix); 
this.v=wa("goog_delegate_attribution"+this.creativeIndexSuffix);this.isDelegateAttributionActive=!!this.v&&!!this.I&&!wa("goog_delegate_disabled")&&!this.B;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(let d=0;d<c.length;d++){const e=c.item(d);if("undefined"!=typeof e.tagName&&e.tagName.toUpperCase()==b){a=e;break a}}}else a=null;this.j=a;this.l=this.isDelegateAttributionActive?this.v:H("cbb"+this.creativeIndexSuffix);this.L=this.C?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu= 
!!this.l&&Ha(this.l,"goog_dismissable_menu");this.m=null;this.F=0;this.i=this.isDelegateAttributionActive?this.v:this.N&&this.u?this.u:this.s;this.H=!!F(this.g,19);this.adbadgeEnabled=!!F(this.g,24);this.enableNativeJakeUi=!!F(this.g,27)}};class Ja{constructor(a,b,c){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=c}};function N(a,b){const c={};c[a]=b;return[c]}function Ka(a,b,c,d,e){const f=[];Aa(a,function(g,k){(g=Pa(g,b,c,d,e))&&f.push(k+"="+g)});return f.join(b)} 
function Pa(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(Pa(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Ka(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function Qa(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1} 
function Ra(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;let d=Qa(a)-c.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});c=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],k=a.h[g];for(let l=0;l<k.length;l++){if(!d){c=null==c?g:c;break}let h=Ka(k[l],a.i,",$");if(h){h=e+h;if(d>=h.length){d-=h.length;b+=h;e=a.i;break}c=null==c?g:c}}}a="";null!=c&&(a=e+"trn="+c);return b+a}class Sa{constructor(){this.i="&";this.h={};this.j=0;this.g=[]}};function Ta(a,b,c,d,e){if((d?a.g:Math.random())<(e||.01))try{let f;c instanceof Sa?f=c:(f=new Sa,Aa(c,(k,l)=>{var h=f,r=h.j++;k=N(l,k);h.g.push(r);h.h[r]=k}));const g=Ra(f,a.h,"/pagead/gen_204?id="+b+"&");g&&Ba(m,g)}catch(f){}}class Ua{constructor(){this.h="http:"===K.location.protocol?"http:":"https:";this.g=Math.random()}};var Va=(a,b)=>{if(a)for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Wa=!!window.google_async_iframe_id;let O=Wa&&window.parent||window;var P=(a,b)=>{a&&Va(b,(c,d)=>{a.style[d]=c})};const Xa=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var Ya=class{constructor(a,b){this.g=a;this.h=b}},Za=class{constructor(a,b){this.url=a;this.G=!!b;this.depth=null}};let Q=null;var $a=()=>{const a=m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},ab=()=>{const a=m.performance;return a&&a.now?a.now():null};class bb{constructor(a,b){var c=ab()||$a();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const R=m.performance,cb=!!(R&&R.mark&&R.measure&&R.clearMarks),S=da(()=>{var a;if(a=cb){var b;if(null===Q){Q="";try{a="";try{a=m.top.location.hash}catch(c){a=m.location.hash}a&&(Q=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Q;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function db(a){a&&R&&S()&&(R.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),R.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class eb{constructor(){var a=T;this.h=[];this.i=a||m;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=S()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new bb(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;R&&S()&&R.mark(b);return a}};function fb(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b} 
function gb(a,b,c){let d,e;try{if(a.g&&a.g.g){e=a.g.start(b.toString(),3);d=c();var f=a.g;c=e;if(f.g&&"number"===typeof c.value){c.duration=(ab()||$a())-c.value;var g=`goog_${c.label}_${c.uniqueId}_end`;R&&S()&&R.mark(g);!f.g||2048<f.h.length||f.h.push(c)}}else d=c()}catch(k){f=!0;try{db(e),f=a.m(b,new ta(k,{message:fb(k)}),void 0,void 0)}catch(l){a.j(217,l)}if(f){let l,h;null==(l=window.console)||null==(h=l.error)||h.call(l,k)}else throw k;}return d} 
function hb(a,b){var c=U;return(...d)=>gb(c,a,()=>b.apply(void 0,d))} 
class ib{constructor(){var a=jb;this.l=kb;this.h=null;this.m=this.j;this.g=void 0===a?null:a;this.i=!1}j(a,b,c,d,e){e=e||"jserror";let f;try{const x=new Sa;var g=x;g.g.push(1);g.h[1]=N("context",a);b.error&&b.meta&&b.id||(b=new ta(b,{message:fb(b)}));if(b.msg){g=x;var k=b.msg.substring(0,512);g.g.push(2);g.h[2]=N("msg",k)}var l=b.meta||{};b=l;if(this.h)try{this.h(b)}catch(C){}if(d)try{d(b)}catch(C){}d=x;l=[l];d.g.push(3);d.h[3]=l;d=m;l=[];b=null;do{var h=d;if(I(h)){var r=h.location.href;b=h.document&& 
h.document.referrer||null}else r=b,b=null;l.push(new Za(r||""));try{d=h.parent}catch(C){d=null}}while(d&&h!=d);for(let C=0,La=l.length-1;C<=La;++C)l[C].depth=La-C;h=m;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==l.length-1)for(r=1;r<l.length;++r){var D=l[r];D.url||(D.url=h.location.ancestorOrigins[r-1]||"",D.G=!0)}var y=l;let V=new Za(m.location.href,!1);h=null;const ha=y.length-1;for(D=ha;0<=D;--D){var z=y[D];!h&&Xa.test(z.url)&&(h=z);if(z.url&&!z.G){V=z;break}}z= 
null;const sb=y.length&&y[ha].url;0!=V.depth&&sb&&(z=y[ha]);f=new Ya(V,z);if(f.h){y=x;var E=f.h.url||"";y.g.push(4);y.h[4]=N("top",E)}var ia={url:f.g.url||""};if(f.g.url){var ja=f.g.url.match(za),L=ja[1],Ma=ja[3],Na=ja[4];E="";L&&(E+=L+":");Ma&&(E+="//",E+=Ma,Na&&(E+=":"+Na));var Oa=E}else Oa="";L=x;ia=[ia,{url:Oa}];L.g.push(5);L.h[5]=ia;Ta(this.l,e,x,this.i,c)}catch(x){try{Ta(this.l,e,{context:"ecmserr",rctx:a,msg:fb(x),url:f&&f.g.url},this.i,c)}catch(V){}}return!0}};let kb,U;if(Wa&&!I(O)){let a="."+J.domain;try{for(;2<a.split(".").length&&!I(O);)J.domain=a=a.substr(a.indexOf(".")+1),O=window.parent}catch(b){}I(O)||(O=window)}const T=O,jb=new eb;var lb=()=>{if(!T.google_measure_js_timing){var a=jb;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(S()&&Array.prototype.forEach.call(a.h,db,void 0),a.h.length=0)}};kb=new Ua;"number"!==typeof T.google_srt&&(T.google_srt=Math.random());var mb=kb,nb=T.google_srt;0<=nb&&1>=nb&&(mb.g=nb);U=new ib; 
U.h=a=>{const b=Ca;0!==b&&(a.jc=String(b),a.shv=Da(b))};U.i=!0;"complete"==T.document.readyState?lb():jb.g&&G(T,"load",()=>{lb()});var W=(a,b)=>hb(a,b);function ob(a){if(a.g.j&&a.g.P){const b=oa(a.g.g);b&&null!=w(b,5)&&null!=w(b,6)&&(a.i=new Ja(B(b,5),B(b,6),B(b,19)));G(a.g.j,"click",W(452,()=>{if(!a.j&&(a.j=!0,a.i)){var c=a.i;let d=c.h+"&label=closebutton_whythisad_click";d+="&label_instance=1";c.g&&(d+="&cid="+c.g);Ba(window,d)}}))}} 
function pb(a){if(a.g.S)G(a.g.i,"click",W(365,b=>{const c=K.goog_interstitial_display;c&&(c(b),b&&(b.stopPropagation(),b.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)G(a.g.i,"click",()=>a.h());else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&(a.g.l&&G(a.g.l,"click",()=>a.h()),a.g.U&&a.g.h&&G(a.g.h,"click",()=>a.h())),a.g.K)qb(a);else{G(a.g.i,"mouseover",W(367,()=>qb(a)));G(a.g.i,"mouseout",W(369,()=>rb(a,500)));G(a.g.i,"touchstart",W(368,()=>qb(a)),ua);const b=W(370, 
()=>rb(a,4E3));G(a.g.i,"mouseup",b);G(a.g.i,"touchend",b);G(a.g.i,"touchcancel",b);a.g.j&&G(a.g.j,"click",W(371,c=>a.preventDefault(c)))}}function qb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.h&&"block"==a.g.h.style.display||(a.g.F=Date.now(),a.g.o&&a.g.h&&(a.g.o.style.display="none",a.g.h.style.display="block"))}function rb(a,b){window.clearTimeout(a.g.m);a.g.m=window.setTimeout(()=>tb(a),b)} 
function ub(a){const b=a.g.A;b.style.display="block";a.g.enableNativeJakeUi&&window.requestAnimationFrame(()=>{M(b,"abgacfo")})}function tb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.o&&a.g.h&&(a.g.o.style.display="block",a.g.h.style.display="none")} 
class vb{constructor(a,b){this.g=a;this.h=b;this.g.T||(this.j=!1,this.i=null,!this.g.C||this.g.adbadgeEnabled||this.g.L?ob(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(P(this.g.o,a),P(this.g.h,a),P(this.g.u,b),P(this.g.s,b)):P(this.g.s,a)),pb(this),this.g.enableNativeJakeUi&&M(this.g.A,"abgnac"),this.g.isDelegateAttributionActive?(M(document.body,"goog_delegate_active"),M(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.l&&ya(this.g.l),setTimeout(()=>{M(document.body, 
"jar")},this.g.J?750:100)),this.g.B&&M(document.body,"goog_delegate_disabled"),this.g.H&&K.addEventListener("load",()=>this.h()))}preventDefault(a){if(this.g.h&&"block"==this.g.h.style.display&&500>Date.now()-this.g.F)a.preventDefault?a.preventDefault():a.returnValue=!1;else if(this.g.openAttributionInline){var b=this.g.j.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1):window.openAttribution&&(window.openAttribution(b),a.preventDefault? 
a.preventDefault():a.returnValue=!1)}else this.g.O&&(b=this.g.j.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1):window.openSystemBrowser&&(window.openSystemBrowser(b),a.preventDefault?a.preventDefault():a.returnValue=!1))}};function wb(a){if(!a.g&&(a.g=!0,K.goog_delegate_deferred_token=void 0,a.h)){var b=a.i;a=a.h;if(!a)throw Error("bad attrdata");a=new Ia(a);new b(a)}}class xb{constructor(a){var b=yb;if(!b)throw Error("bad ctor");this.i=b;this.h=a;this.g=!1;wa("goog_delegate_deferred")?void 0!==K.goog_delegate_deferred_token?wb(this):(a=()=>{wb(this)},K.goog_delegate_deferred_token=a,setTimeout(a,5E3)):wb(this)}};var zb=(a=[])=>{m.google_logging_queue||(m.google_logging_queue=[]);m.google_logging_queue.push([11,a])};class Ab{constructor(){this.promise=new Promise(a=>{this.g=a})}};var Bb=class{constructor(){const a=new Ab;this.promise=a.promise;this.resolve=a.g}};function Cb(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new Bb,b&&b());return a[5]} 
function Db(){var a=window,b=fa();return Cb(a,function(){var c=a.document;const d=c.createElement("script");d.src=b instanceof t&&b.constructor===t?b.g:"type_error:TrustedResourceUrl";var e;(e=d.ownerDocument&&d.ownerDocument.defaultView)&&e!=m?e=ba(e.document):(null===n&&(n=ba(m.document)),e=n);e&&d.setAttribute("nonce",e);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(d,c)}).promise};function Eb(a){gb(U,373,()=>{tb(a.h);ub(a.h)});Db().then(b=>{b.createAttributionCard(a.g);a.g.R=b;b.expandAttributionCard()});Fa()}class yb{constructor(a){this.g=a;this.h=new vb(this.g,W(359,()=>Eb(this)))}};Ca=60;function Fb(a){zb([a]);new xb(a)}var X=["buildAttribution"],Y=m;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Fb?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Fb;}).call(this);
