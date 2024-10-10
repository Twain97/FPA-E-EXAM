(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const gm=()=>{};let Mf={},zv={},Hv=null,Kv={mark:gm,measure:gm};try{typeof window<"u"&&(Mf=window),typeof document<"u"&&(zv=document),typeof MutationObserver<"u"&&(Hv=MutationObserver),typeof performance<"u"&&(Kv=performance)}catch{}const{userAgent:ym=""}=Mf.navigator||{},po=Mf,ot=zv,vm=Hv,vl=Kv;po.document;const Nr=!!ot.documentElement&&!!ot.head&&typeof ot.addEventListener=="function"&&typeof ot.createElement=="function",Wv=~ym.indexOf("MSIE")||~ym.indexOf("Trident/");var at="classic",qv="duotone",fn="sharp",hn="sharp-duotone",OE=[at,qv,fn,hn],RE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},bm={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},NE=["kit"],LE=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,DE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,VE={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},ME={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},$E={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},FE={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},UE={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},jE={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Gv={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},BE=["solid","regular","light","thin","duotone","brands"],Qv=[1,2,3,4,5,6,7,8,9,10],zE=Qv.concat([11,12,13,14,15,16,17,18,19,20]),ks={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},HE=[...Object.keys(FE),...BE,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ks.GROUP,ks.SWAP_OPACITY,ks.PRIMARY,ks.SECONDARY].concat(Qv.map(t=>"".concat(t,"x"))).concat(zE.map(t=>"w-".concat(t))),KE={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},WE={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},qE={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},_m={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Sr="___FONT_AWESOME___",Sd=16,Yv="fa",Xv="svg-inline--fa",qo="data-fa-i2svg",Ad="data-fa-pseudo-element",GE="data-fa-pseudo-element-pending",$f="data-prefix",Ff="data-icon",wm="fontawesome-i2svg",QE="async",YE=["HTML","HEAD","STYLE","SCRIPT"],Jv=(()=>{try{return!0}catch{return!1}})(),Zv=[at,fn,hn];function Ma(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[at]}})}const eb={...Gv};eb[at]={...Gv[at],...bm.kit,...bm["kit-duotone"]};const Bo=Ma(eb),Cd={...jE};Cd[at]={...Cd[at],..._m.kit,..._m["kit-duotone"]};const oa=Ma(Cd),xd={...UE};xd[at]={...xd[at],...qE.kit};const zo=Ma(xd),Pd={...$E};Pd[at]={...Pd[at],...WE.kit};const XE=Ma(Pd),JE=LE,tb="fa-layers-text",ZE=DE,eI={...RE};Ma(eI);const tI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Uu=ks,Ui=new Set;Object.keys(oa[at]).map(Ui.add.bind(Ui));Object.keys(oa[fn]).map(Ui.add.bind(Ui));Object.keys(oa[hn]).map(Ui.add.bind(Ui));const nI=[...NE,...HE],Us=po.FontAwesomeConfig||{};function rI(t){var e=ot.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function oI(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}ot&&typeof ot.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const o=oI(rI(n));o!=null&&(Us[r]=o)});const nb={styleDefault:"solid",familyDefault:"classic",cssPrefix:Yv,replacementClass:Xv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Us.familyPrefix&&(Us.cssPrefix=Us.familyPrefix);const ji={...nb,...Us};ji.autoReplaceSvg||(ji.observeMutations=!1);const se={};Object.keys(nb).forEach(t=>{Object.defineProperty(se,t,{enumerable:!0,set:function(e){ji[t]=e,js.forEach(n=>n(se))},get:function(){return ji[t]}})});Object.defineProperty(se,"familyPrefix",{enumerable:!0,set:function(t){ji.cssPrefix=t,js.forEach(e=>e(se))},get:function(){return ji.cssPrefix}});po.FontAwesomeConfig=se;const js=[];function iI(t){return js.push(t),()=>{js.splice(js.indexOf(t),1)}}const Br=Sd,zn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sI(t){if(!t||!Nr)return;const e=ot.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=ot.head.childNodes;let r=null;for(let o=n.length-1;o>-1;o--){const i=n[o],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return ot.head.insertBefore(e,r),t}const aI="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ia(){let t=12,e="";for(;t-- >0;)e+=aI[Math.random()*62|0];return e}function ns(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Uf(t){return t.classList?ns(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function rb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lI(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(rb(t[n]),'" '),"").trim()}function Nc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function jf(t){return t.size!==zn.size||t.x!==zn.x||t.y!==zn.y||t.rotate!==zn.rotate||t.flipX||t.flipY}function cI(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:l,path:u}}function uI(t){let{transform:e,width:n=Sd,height:r=Sd,startCentered:o=!1}=t,i="";return o&&Wv?i+="translate(".concat(e.x/Br-n/2,"em, ").concat(e.y/Br-r/2,"em) "):o?i+="translate(calc(-50% + ".concat(e.x/Br,"em), calc(-50% + ").concat(e.y/Br,"em)) "):i+="translate(".concat(e.x/Br,"em, ").concat(e.y/Br,"em) "),i+="scale(".concat(e.size/Br*(e.flipX?-1:1),", ").concat(e.size/Br*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var dI=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ob(){const t=Yv,e=Xv,n=se.cssPrefix,r=se.replacementClass;let o=dI;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");o=o.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return o}let Em=!1;function ju(){se.autoAddCss&&!Em&&(sI(ob()),Em=!0)}var fI={mixout(){return{dom:{css:ob,insertCss:ju}}},hooks(){return{beforeDOMElementCreation(){ju()},beforeI2svg(){ju()}}}};const Ar=po||{};Ar[Sr]||(Ar[Sr]={});Ar[Sr].styles||(Ar[Sr].styles={});Ar[Sr].hooks||(Ar[Sr].hooks={});Ar[Sr].shims||(Ar[Sr].shims=[]);var Hn=Ar[Sr];const ib=[],sb=function(){ot.removeEventListener("DOMContentLoaded",sb),Zl=1,ib.map(t=>t())};let Zl=!1;Nr&&(Zl=(ot.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ot.readyState),Zl||ot.addEventListener("DOMContentLoaded",sb));function hI(t){Nr&&(Zl?setTimeout(t,0):ib.push(t))}function $a(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?rb(t):"<".concat(e," ").concat(lI(n),">").concat(r.map($a).join(""),"</").concat(e,">")}function Im(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Bu=function(e,n,r,o){var i=Object.keys(e),s=i.length,a=n,l,u,d;for(r===void 0?(l=1,d=e[i[0]]):(l=0,d=r);l<s;l++)u=i[l],d=a(d,e[u],u,e);return d};function pI(t){const e=[];let n=0;const r=t.length;for(;n<r;){const o=t.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((o&1023)<<10)+(i&1023)+65536):(e.push(o),n--)}else e.push(o)}return e}function kd(t){const e=pI(t);return e.length===1?e[0].toString(16):null}function mI(t,e){const n=t.length;let r=t.charCodeAt(e),o;return r>=55296&&r<=56319&&n>e+1&&(o=t.charCodeAt(e+1),o>=56320&&o<=57343)?(r-55296)*1024+o-56320+65536:r}function Tm(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Od(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,o=Tm(e);typeof Hn.hooks.addPack=="function"&&!r?Hn.hooks.addPack(t,Tm(e)):Hn.styles[t]={...Hn.styles[t]||{},...o},t==="fas"&&Od("fa",e)}const{styles:Mo,shims:gI}=Hn,yI={[at]:Object.values(zo[at]),[fn]:Object.values(zo[fn]),[hn]:Object.values(zo[hn])};let Bf=null,ab={},lb={},cb={},ub={},db={};const vI={[at]:Object.keys(Bo[at]),[fn]:Object.keys(Bo[fn]),[hn]:Object.keys(Bo[hn])};function bI(t){return~nI.indexOf(t)}function _I(t,e){const n=e.split("-"),r=n[0],o=n.slice(1).join("-");return r===t&&o!==""&&!bI(o)?o:null}const fb=()=>{const t=r=>Bu(Mo,(o,i,s)=>(o[s]=Bu(i,r,{}),o),{});ab=t((r,o,i)=>(o[3]&&(r[o[3]]=i),o[2]&&o[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),lb=t((r,o,i)=>(r[i]=i,o[2]&&o[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),db=t((r,o,i)=>{const s=o[2];return r[i]=i,s.forEach(a=>{r[a]=i}),r});const e="far"in Mo||se.autoFetchSvg,n=Bu(gI,(r,o)=>{const i=o[0];let s=o[1];const a=o[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:a}),r},{names:{},unicodes:{}});cb=n.names,ub=n.unicodes,Bf=Lc(se.styleDefault,{family:se.familyDefault})};iI(t=>{Bf=Lc(t.styleDefault,{family:se.familyDefault})});fb();function zf(t,e){return(ab[t]||{})[e]}function wI(t,e){return(lb[t]||{})[e]}function io(t,e){return(db[t]||{})[e]}function hb(t){return cb[t]||{prefix:null,iconName:null}}function EI(t){const e=ub[t],n=zf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function mo(){return Bf}const Hf=()=>({prefix:null,iconName:null,rest:[]});function Lc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=at}=e,r=Bo[n][t],o=oa[n][t]||oa[n][r],i=t in Hn.styles?t:null;return o||i||null}const II={[at]:Object.keys(zo[at]),[fn]:Object.keys(zo[fn]),[hn]:Object.keys(zo[hn])};function Dc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[at]:"".concat(se.cssPrefix,"-").concat(at),[fn]:"".concat(se.cssPrefix,"-").concat(fn),[hn]:"".concat(se.cssPrefix,"-").concat(hn)};let o=null,i=at;const s=OE.filter(l=>l!==qv);s.forEach(l=>{(t.includes(r[l])||t.some(u=>II[l].includes(u)))&&(i=l)});const a=t.reduce((l,u)=>{const d=_I(se.cssPrefix,u);if(Mo[u]?(u=yI[i].includes(u)?XE[i][u]:u,o=u,l.prefix=u):vI[i].indexOf(u)>-1?(o=u,l.prefix=Lc(u,{family:i})):d?l.iconName=d:u!==se.replacementClass&&!s.some(h=>u===r[h])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const h=o==="fa"?hb(l.iconName):{},p=io(l.prefix,l.iconName);h.prefix&&(o=null),l.iconName=h.iconName||p||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!Mo.far&&Mo.fas&&!se.autoFetchSvg&&(l.prefix="fas")}return l},Hf());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&i===fn&&(Mo.fass||se.autoFetchSvg)&&(a.prefix="fass",a.iconName=io(a.prefix,a.iconName)||a.iconName),!a.prefix&&i===hn&&(Mo.fasds||se.autoFetchSvg)&&(a.prefix="fasds",a.iconName=io(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||o==="fa")&&(a.prefix=mo()||"fas"),a}class TI{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...o[i]},Od(i,o[i]);const s=zo[at][i];s&&Od(s,o[i]),fb()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(o=>{const{prefix:i,iconName:s,icon:a}=r[o],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][s]=a}),e}}let Sm=[],Ii={};const Ci={},SI=Object.keys(Ci);function AI(t,e){let{mixoutsTo:n}=e;return Sm=t,Ii={},Object.keys(Ci).forEach(r=>{SI.indexOf(r)===-1&&delete Ci[r]}),Sm.forEach(r=>{const o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(i=>{typeof o[i]=="function"&&(n[i]=o[i]),typeof o[i]=="object"&&Object.keys(o[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=o[i][s]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(s=>{Ii[s]||(Ii[s]=[]),Ii[s].push(i[s])})}r.provides&&r.provides(Ci)}),n}function Rd(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return(Ii[t]||[]).forEach(s=>{e=s.apply(null,[e,...r])}),e}function Go(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Ii[t]||[]).forEach(i=>{i.apply(null,n)})}function go(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ci[t]?Ci[t].apply(null,e):void 0}function Nd(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||mo();if(e)return e=io(n,e)||e,Im(pb.definitions,n,e)||Im(Hn.styles,n,e)}const pb=new TI,CI=()=>{se.autoReplaceSvg=!1,se.observeMutations=!1,Go("noAuto")},xI={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Nr?(Go("beforeI2svg",t),go("pseudoElements2svg",t),go("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;se.autoReplaceSvg===!1&&(se.autoReplaceSvg=!0),se.observeMutations=!0,hI(()=>{kI({autoReplaceSvgRoot:e}),Go("watch",t)})}},PI={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:io(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Lc(t[0]);return{prefix:n,iconName:io(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(se.cssPrefix,"-"))>-1||t.match(JE))){const e=Dc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||mo(),iconName:io(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=mo();return{prefix:e,iconName:io(e,t)||t}}}},pn={noAuto:CI,config:se,dom:xI,parse:PI,library:pb,findIconDefinition:Nd,toHtml:$a},kI=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ot}=t;(Object.keys(Hn.styles).length>0||se.autoFetchSvg)&&Nr&&se.autoReplaceSvg&&pn.dom.i2svg({node:e})};function Vc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>$a(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Nr)return;const n=ot.createElement("div");return n.innerHTML=t.html,n.children}}),t}function OI(t){let{children:e,main:n,mask:r,attributes:o,styles:i,transform:s}=t;if(jf(s)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};o.style=Nc({...i,"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")})}return[{tag:"svg",attributes:o,children:e}]}function RI(t){let{prefix:e,iconName:n,children:r,attributes:o,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(se.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...o,id:s},children:r}]}]}function Kf(t){const{icons:{main:e,mask:n},prefix:r,iconName:o,transform:i,symbol:s,title:a,maskId:l,titleId:u,extra:d,watchable:h=!1}=t,{width:p,height:g}=n.found?n:e,_=r==="fak",P=[se.replacementClass,o?"".concat(se.cssPrefix,"-").concat(o):""].filter(W=>d.classes.indexOf(W)===-1).filter(W=>W!==""||!!W).concat(d.classes).join(" ");let k={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":o,class:P,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)}};const N=_&&!~d.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};h&&(k.attributes[qo]=""),a&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||ia())},children:[a]}),delete k.attributes.title);const O={...k,prefix:r,iconName:o,main:e,mask:n,maskId:l,transform:i,symbol:s,styles:{...N,...d.styles}},{children:R,attributes:L}=n.found&&e.found?go("generateAbstractMask",O)||{children:[],attributes:{}}:go("generateAbstractIcon",O)||{children:[],attributes:{}};return O.children=R,O.attributes=L,s?RI(O):OI(O)}function Am(t){const{content:e,width:n,height:r,transform:o,title:i,extra:s,watchable:a=!1}=t,l={...s.attributes,...i?{title:i}:{},class:s.classes.join(" ")};a&&(l[qo]="");const u={...s.styles};jf(o)&&(u.transform=uI({transform:o,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const d=Nc(u);d.length>0&&(l.style=d);const h=[];return h.push({tag:"span",attributes:l,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function NI(t){const{content:e,title:n,extra:r}=t,o={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=Nc(r.styles);i.length>0&&(o.style=i);const s=[];return s.push({tag:"span",attributes:o,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:zu}=Hn;function Ld(t){const e=t[0],n=t[1],[r]=t.slice(4);let o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(se.cssPrefix,"-").concat(Uu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(se.cssPrefix,"-").concat(Uu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(se.cssPrefix,"-").concat(Uu.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:o}}const LI={found:!1,width:512,height:512};function DI(t,e){!Jv&&!se.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Dd(t,e){let n=e;return e==="fa"&&se.styleDefault!==null&&(e=mo()),new Promise((r,o)=>{if(n==="fa"){const i=hb(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&zu[e]&&zu[e][t]){const i=zu[e][t];return r(Ld(i))}DI(t,e),r({...LI,icon:se.showMissingIcons&&t?go("missingIconAbstract")||{}:{}})})}const Cm=()=>{},Vd=se.measurePerformance&&vl&&vl.mark&&vl.measure?vl:{mark:Cm,measure:Cm},Os='FA "6.6.0"',VI=t=>(Vd.mark("".concat(Os," ").concat(t," begins")),()=>mb(t)),mb=t=>{Vd.mark("".concat(Os," ").concat(t," ends")),Vd.measure("".concat(Os," ").concat(t),"".concat(Os," ").concat(t," begins"),"".concat(Os," ").concat(t," ends"))};var Wf={begin:VI,end:mb};const Vl=()=>{};function xm(t){return typeof(t.getAttribute?t.getAttribute(qo):null)=="string"}function MI(t){const e=t.getAttribute?t.getAttribute($f):null,n=t.getAttribute?t.getAttribute(Ff):null;return e&&n}function $I(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(se.replacementClass)}function FI(){return se.autoReplaceSvg===!0?Ml.replace:Ml[se.autoReplaceSvg]||Ml.replace}function UI(t){return ot.createElementNS("http://www.w3.org/2000/svg",t)}function jI(t){return ot.createElement(t)}function gb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?UI:jI}=e;if(typeof t=="string")return ot.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(gb(i,{ceFn:n}))}),r}function BI(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ml={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(gb(n),e)}),e.getAttribute(qo)===null&&se.keepOriginalSource){let n=ot.createComment(BI(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Uf(e).indexOf(se.replacementClass))return Ml.replace(t);const r=new RegExp("".concat(se.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,a)=>(a===se.replacementClass||a.match(r)?s.toSvg.push(a):s.toNode.push(a),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const o=n.map(i=>$a(i)).join(`
`);e.setAttribute(qo,""),e.innerHTML=o}};function Pm(t){t()}function yb(t,e){const n=typeof e=="function"?e:Vl;if(t.length===0)n();else{let r=Pm;se.mutateApproach===QE&&(r=po.requestAnimationFrame||Pm),r(()=>{const o=FI(),i=Wf.begin("mutate");t.map(o),i(),n()})}}let qf=!1;function vb(){qf=!0}function Md(){qf=!1}let ec=null;function km(t){if(!vm||!se.observeMutations)return;const{treeCallback:e=Vl,nodeCallback:n=Vl,pseudoElementsCallback:r=Vl,observeMutationsRoot:o=ot}=t;ec=new vm(i=>{if(qf)return;const s=mo();ns(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!xm(a.addedNodes[0])&&(se.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&se.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&xm(a.target)&&~tI.indexOf(a.attributeName))if(a.attributeName==="class"&&MI(a.target)){const{prefix:l,iconName:u}=Dc(Uf(a.target));a.target.setAttribute($f,l||s),u&&a.target.setAttribute(Ff,u)}else $I(a.target)&&n(a.target)})}),Nr&&ec.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function zI(){ec&&ec.disconnect()}function HI(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,o)=>{const i=o.split(":"),s=i[0],a=i.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function KI(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let o=Dc(Uf(t));return o.prefix||(o.prefix=mo()),e&&n&&(o.prefix=e,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=wI(o.prefix,t.innerText)||zf(o.prefix,kd(t.innerText))),!o.iconName&&se.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=t.firstChild.data)),o}function WI(t){const e=ns(t.attributes).reduce((o,i)=>(o.name!=="class"&&o.name!=="style"&&(o[i.name]=i.value),o),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return se.autoA11y&&(n?e["aria-labelledby"]="".concat(se.replacementClass,"-title-").concat(r||ia()):(e["aria-hidden"]="true",e.focusable="false")),e}function qI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:zn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Om(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:o}=KI(t),i=WI(t),s=Rd("parseNodeAttributes",{},t);let a=e.styleParser?HI(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:zn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:a,attributes:i},...s}}const{styles:GI}=Hn;function bb(t){const e=se.autoReplaceSvg==="nest"?Om(t,{styleParser:!1}):Om(t);return~e.extra.classes.indexOf(tb)?go("generateLayersText",t,e):go("generateSvgReplacementMutation",t,e)}let Jn=new Set;Zv.map(t=>{Jn.add("fa-".concat(t))});Object.keys(Bo[at]).map(Jn.add.bind(Jn));Object.keys(Bo[fn]).map(Jn.add.bind(Jn));Object.keys(Bo[hn]).map(Jn.add.bind(Jn));Jn=[...Jn];function Rm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Nr)return Promise.resolve();const n=ot.documentElement.classList,r=d=>n.add("".concat(wm,"-").concat(d)),o=d=>n.remove("".concat(wm,"-").concat(d)),i=se.autoFetchSvg?Jn:Zv.map(d=>"fa-".concat(d)).concat(Object.keys(GI));i.includes("fa")||i.push("fa");const s=[".".concat(tb,":not([").concat(qo,"])")].concat(i.map(d=>".".concat(d,":not([").concat(qo,"])"))).join(", ");if(s.length===0)return Promise.resolve();let a=[];try{a=ns(t.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),o("complete");else return Promise.resolve();const l=Wf.begin("onTree"),u=a.reduce((d,h)=>{try{const p=bb(h);p&&d.push(p)}catch(p){Jv||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise((d,h)=>{Promise.all(u).then(p=>{yb(p,()=>{r("active"),r("complete"),o("pending"),typeof e=="function"&&e(),l(),d()})}).catch(p=>{l(),h(p)})})}function QI(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;bb(t).then(n=>{n&&yb([n],e)})}function YI(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Nd(e||{});let{mask:o}=n;return o&&(o=(o||{}).icon?o:Nd(o||{})),t(r,{...n,mask:o})}}const XI=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=zn,symbol:r=!1,mask:o=null,maskId:i=null,title:s=null,titleId:a=null,classes:l=[],attributes:u={},styles:d={}}=e;if(!t)return;const{prefix:h,iconName:p,icon:g}=t;return Vc({type:"icon",...t},()=>(Go("beforeDOMElementCreation",{iconDefinition:t,params:e}),se.autoA11y&&(s?u["aria-labelledby"]="".concat(se.replacementClass,"-title-").concat(a||ia()):(u["aria-hidden"]="true",u.focusable="false")),Kf({icons:{main:Ld(g),mask:o?Ld(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:p,transform:{...zn,...n},symbol:r,title:s,maskId:i,titleId:a,extra:{attributes:u,styles:d,classes:l}})))};var JI={mixout(){return{icon:YI(XI)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Rm,t.nodeCallback=QI,t}}},provides(t){t.i2svg=function(e){const{node:n=ot,callback:r=()=>{}}=e;return Rm(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:o,titleId:i,prefix:s,transform:a,symbol:l,mask:u,maskId:d,extra:h}=n;return new Promise((p,g)=>{Promise.all([Dd(r,s),u.iconName?Dd(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[P,k]=_;p([e,Kf({icons:{main:P,mask:k},prefix:s,iconName:r,transform:a,symbol:l,maskId:d,title:o,titleId:i,extra:h,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:o,transform:i,styles:s}=e;const a=Nc(s);a.length>0&&(r.style=a);let l;return jf(i)&&(l=go("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),n.push(l||o.icon),{children:n,attributes:r}}}},ZI={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Vc({type:"layer"},()=>{Go("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(o=>{Array.isArray(o)?o.map(i=>{r=r.concat(i.abstract)}):r=r.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(se.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},eT={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:o={},styles:i={}}=e;return Vc({type:"counter",content:t},()=>(Go("beforeDOMElementCreation",{content:t,params:e}),NI({content:t.toString(),title:n,extra:{attributes:o,styles:i,classes:["".concat(se.cssPrefix,"-layers-counter"),...r]}})))}}}},tT={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=zn,title:r=null,classes:o=[],attributes:i={},styles:s={}}=e;return Vc({type:"text",content:t},()=>(Go("beforeDOMElementCreation",{content:t,params:e}),Am({content:t,transform:{...zn,...n},title:r,extra:{attributes:i,styles:s,classes:["".concat(se.cssPrefix,"-layers-text"),...o]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:o,extra:i}=n;let s=null,a=null;if(Wv){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/l,a=u.height/l}return se.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Am({content:e.innerHTML,width:s,height:a,transform:o,title:r,extra:i,watchable:!0})])}}};const nT=new RegExp('"',"ug"),Nm=[1105920,1112319],Lm={FontAwesome:{normal:"fas",400:"fas"},...ME,...VE,...KE},$d=Object.keys(Lm).reduce((t,e)=>(t[e.toLowerCase()]=Lm[e],t),{}),rT=Object.keys($d).reduce((t,e)=>{const n=$d[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function oT(t){const e=t.replace(nT,""),n=mI(e,0),r=n>=Nm[0]&&n<=Nm[1],o=e.length===2?e[0]===e[1]:!1;return{value:kd(o?e[0]:e),isSecondary:r||o}}function iT(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),o=isNaN(r)?"normal":r;return($d[n]||{})[o]||rT[n]}function Dm(t,e){const n="".concat(GE).concat(e.replace(":","-"));return new Promise((r,o)=>{if(t.getAttribute(n)!==null)return r();const s=ns(t.children).filter(p=>p.getAttribute(Ad)===e)[0],a=po.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(ZE),d=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(s&&!u)return t.removeChild(s),r();if(u&&h!=="none"&&h!==""){const p=a.getPropertyValue("content");let g=iT(l,d);const{value:_,isSecondary:P}=oT(p),k=u[0].startsWith("FontAwesome");let N=zf(g,_),O=N;if(k){const R=EI(_);R.iconName&&R.prefix&&(N=R.iconName,g=R.prefix)}if(N&&!P&&(!s||s.getAttribute($f)!==g||s.getAttribute(Ff)!==O)){t.setAttribute(n,O),s&&t.removeChild(s);const R=qI(),{extra:L}=R;L.attributes[Ad]=e,Dd(N,g).then(W=>{const q=Kf({...R,icons:{main:W,mask:Hf()},prefix:g,iconName:O,extra:L,watchable:!0}),I=ot.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(I,t.firstChild):t.appendChild(I),I.outerHTML=q.map(v=>$a(v)).join(`
`),t.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function sT(t){return Promise.all([Dm(t,"::before"),Dm(t,"::after")])}function aT(t){return t.parentNode!==document.head&&!~YE.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ad)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Vm(t){if(Nr)return new Promise((e,n)=>{const r=ns(t.querySelectorAll("*")).filter(aT).map(sT),o=Wf.begin("searchPseudoElements");vb(),Promise.all(r).then(()=>{o(),Md(),e()}).catch(()=>{o(),Md(),n()})})}var lT={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Vm,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=ot}=e;se.searchPseudoElements&&Vm(n)}}};let Mm=!1;var cT={mixout(){return{dom:{unwatch(){vb(),Mm=!0}}}},hooks(){return{bootstrap(){km(Rd("mutationObserverCallbacks",{}))},noAuto(){zI()},watch(t){const{observeMutationsRoot:e}=t;Mm?Md():km(Rd("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const $m=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const o=r.toLowerCase().split("-"),i=o[0];let s=o.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var uT={mixout(){return{parse:{transform:t=>$m(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=$m(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:o,iconWidth:i}=e;const s={transform:"translate(".concat(o/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(a," ").concat(l," ").concat(u)},h={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:d,path:h};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const Hu={x:0,y:0,width:"100%",height:"100%"};function Fm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function dT(t){return t.tag==="g"?t.children:[t]}var fT={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Dc(n.split(" ").map(o=>o.trim())):Hf();return r.prefix||(r.prefix=mo()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:o,mask:i,maskId:s,transform:a}=e;const{width:l,icon:u}=o,{width:d,icon:h}=i,p=cI({transform:a,containerWidth:d,iconWidth:l}),g={tag:"rect",attributes:{...Hu,fill:"white"}},_=u.children?{children:u.children.map(Fm)}:{},P={tag:"g",attributes:{...p.inner},children:[Fm({tag:u.tag,attributes:{...u.attributes,...p.path},..._})]},k={tag:"g",attributes:{...p.outer},children:[P]},N="mask-".concat(s||ia()),O="clip-".concat(s||ia()),R={tag:"mask",attributes:{...Hu,id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,k]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:dT(h)},R]};return n.push(L,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(N,")"),...Hu}}),{children:n,attributes:r}}}},hT={provides(t){let e=!1;po.matchMedia&&(e=po.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...o,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...o,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},pT={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},mT=[fI,JI,ZI,eT,tT,lT,cT,uT,fT,hT,pT];AI(mT,{mixoutsTo:pn});pn.noAuto;pn.config;const gT=pn.library;pn.dom;const Fd=pn.parse;pn.findIconDefinition;pn.toHtml;const yT=pn.icon;pn.layer;pn.text;pn.counter;/**
* @vue/shared v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Gf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ze={},xi=[],Kn=()=>{},vT=()=>!1,Mc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qf=t=>t.startsWith("onUpdate:"),yt=Object.assign,Yf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},bT=Object.prototype.hasOwnProperty,ze=(t,e)=>bT.call(t,e),de=Array.isArray,Pi=t=>Fa(t)==="[object Map]",$c=t=>Fa(t)==="[object Set]",Um=t=>Fa(t)==="[object Date]",ve=t=>typeof t=="function",lt=t=>typeof t=="string",Zn=t=>typeof t=="symbol",tt=t=>t!==null&&typeof t=="object",_b=t=>(tt(t)||ve(t))&&ve(t.then)&&ve(t.catch),wb=Object.prototype.toString,Fa=t=>wb.call(t),_T=t=>Fa(t).slice(8,-1),Eb=t=>Fa(t)==="[object Object]",Xf=t=>lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bs=Gf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wT=/-(\w)/g,In=Fc(t=>t.replace(wT,(e,n)=>n?n.toUpperCase():"")),ET=/\B([A-Z])/g,ni=Fc(t=>t.replace(ET,"-$1").toLowerCase()),Uc=Fc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ku=Fc(t=>t?`on${Uc(t)}`:""),yo=(t,e)=>!Object.is(t,e),$l=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ib=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},tc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},IT=t=>{const e=lt(t)?Number(t):NaN;return isNaN(e)?t:e};let jm;const Tb=()=>jm||(jm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ho(t){if(de(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],o=lt(r)?CT(r):Ho(r);if(o)for(const i in o)e[i]=o[i]}return e}else if(lt(t)||tt(t))return t}const TT=/;(?![^(]*\))/g,ST=/:([^]+)/,AT=/\/\*[^]*?\*\//g;function CT(t){const e={};return t.replace(AT,"").split(TT).forEach(n=>{if(n){const r=n.split(ST);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function cn(t){let e="";if(lt(t))e=t;else if(de(t))for(let n=0;n<t.length;n++){const r=cn(t[n]);r&&(e+=r+" ")}else if(tt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Sb(t){if(!t)return null;let{class:e,style:n}=t;return e&&!lt(e)&&(t.class=cn(e)),n&&(t.style=Ho(n)),t}const xT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",PT=Gf(xT);function Ab(t){return!!t||t===""}function kT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Bi(t[r],e[r]);return n}function Bi(t,e){if(t===e)return!0;let n=Um(t),r=Um(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Zn(t),r=Zn(e),n||r)return t===e;if(n=de(t),r=de(e),n||r)return n&&r?kT(t,e):!1;if(n=tt(t),r=tt(e),n||r){if(!n||!r)return!1;const o=Object.keys(t).length,i=Object.keys(e).length;if(o!==i)return!1;for(const s in t){const a=t.hasOwnProperty(s),l=e.hasOwnProperty(s);if(a&&!l||!a&&l||!Bi(t[s],e[s]))return!1}}return String(t)===String(e)}function OT(t,e){return t.findIndex(n=>Bi(n,e))}const Cb=t=>!!(t&&t.__v_isRef===!0),Oe=t=>lt(t)?t:t==null?"":de(t)||tt(t)&&(t.toString===wb||!ve(t.toString))?Cb(t)?Oe(t.value):JSON.stringify(t,xb,2):String(t),xb=(t,e)=>Cb(e)?xb(t,e.value):Pi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,o],i)=>(n[Wu(r,i)+" =>"]=o,n),{})}:$c(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wu(n))}:Zn(e)?Wu(e):tt(e)&&!de(e)&&!Eb(e)?String(e):e,Wu=(t,e="")=>{var n;return Zn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ln;class Pb{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ln,!e&&ln&&(this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ln;try{return ln=this,e()}finally{ln=n}}}on(){ln=this}off(){ln=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function RT(t){return new Pb(t)}function NT(){return ln}let nt;const qu=new WeakSet;class kb{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ln&&ln.active&&ln.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qu.has(this)&&(qu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rb(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bm(this),Nb(this);const e=nt,n=On;nt=this,On=!0;try{return this.fn()}finally{Lb(this),nt=e,On=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)eh(e);this.deps=this.depsTail=void 0,Bm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ud(this)&&this.run()}get dirty(){return Ud(this)}}let Ob=0,zs,Hs;function Rb(t,e=!1){if(t.flags|=8,e){t.next=Hs,Hs=t;return}t.next=zs,zs=t}function Jf(){Ob++}function Zf(){if(--Ob>0)return;if(Hs){let e=Hs;for(Hs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zs;){let e=zs;for(zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Nb(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Lb(t){let e,n=t.depsTail,r=n;for(;r;){const o=r.prevDep;r.version===-1?(r===n&&(n=o),eh(r),LT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}t.deps=e,t.depsTail=n}function Ud(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Db(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Db(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===sa))return;t.globalVersion=sa;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ud(t)){t.flags&=-3;return}const n=nt,r=On;nt=t,On=!0;try{Nb(t);const o=t.fn(t._value);(e.version===0||yo(o,t._value))&&(t._value=o,e.version++)}catch(o){throw e.version++,o}finally{nt=n,On=r,Lb(t),t.flags&=-3}}function eh(t,e=!1){const{dep:n,prevSub:r,nextSub:o}=t;if(r&&(r.nextSub=o,t.prevSub=void 0),o&&(o.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r),!n.subs&&n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)eh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function LT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let On=!0;const Vb=[];function Eo(){Vb.push(On),On=!1}function Io(){const t=Vb.pop();On=t===void 0?!0:t}function Bm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=nt;nt=void 0;try{e()}finally{nt=n}}}let sa=0;class DT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class th{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!nt||!On||nt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==nt)n=this.activeLink=new DT(nt,this),nt.deps?(n.prevDep=nt.depsTail,nt.depsTail.nextDep=n,nt.depsTail=n):nt.deps=nt.depsTail=n,Mb(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=nt.depsTail,n.nextDep=void 0,nt.depsTail.nextDep=n,nt.depsTail=n,nt.deps===n&&(nt.deps=r)}return n}trigger(e){this.version++,sa++,this.notify(e)}notify(e){Jf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zf()}}}function Mb(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Mb(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const jd=new WeakMap,Ko=Symbol(""),Bd=Symbol(""),aa=Symbol("");function zt(t,e,n){if(On&&nt){let r=jd.get(t);r||jd.set(t,r=new Map);let o=r.get(n);o||(r.set(n,o=new th),o.map=r,o.key=n),o.track()}}function wr(t,e,n,r,o,i){const s=jd.get(t);if(!s){sa++;return}const a=l=>{l&&l.trigger()};if(Jf(),e==="clear")s.forEach(a);else{const l=de(t),u=l&&Xf(n);if(l&&n==="length"){const d=Number(r);s.forEach((h,p)=>{(p==="length"||p===aa||!Zn(p)&&p>=d)&&a(h)})}else switch(n!==void 0&&a(s.get(n)),u&&a(s.get(aa)),e){case"add":l?u&&a(s.get("length")):(a(s.get(Ko)),Pi(t)&&a(s.get(Bd)));break;case"delete":l||(a(s.get(Ko)),Pi(t)&&a(s.get(Bd)));break;case"set":Pi(t)&&a(s.get(Ko));break}}Zf()}function hi(t){const e=$e(t);return e===t?e:(zt(e,"iterate",aa),wn(t)?e:e.map(Ut))}function jc(t){return zt(t=$e(t),"iterate",aa),t}const VT={__proto__:null,[Symbol.iterator](){return Gu(this,Symbol.iterator,Ut)},concat(...t){return hi(this).concat(...t.map(e=>de(e)?hi(e):e))},entries(){return Gu(this,"entries",t=>(t[1]=Ut(t[1]),t))},every(t,e){return sr(this,"every",t,e,void 0,arguments)},filter(t,e){return sr(this,"filter",t,e,n=>n.map(Ut),arguments)},find(t,e){return sr(this,"find",t,e,Ut,arguments)},findIndex(t,e){return sr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return sr(this,"findLast",t,e,Ut,arguments)},findLastIndex(t,e){return sr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return sr(this,"forEach",t,e,void 0,arguments)},includes(...t){return Qu(this,"includes",t)},indexOf(...t){return Qu(this,"indexOf",t)},join(t){return hi(this).join(t)},lastIndexOf(...t){return Qu(this,"lastIndexOf",t)},map(t,e){return sr(this,"map",t,e,void 0,arguments)},pop(){return Ts(this,"pop")},push(...t){return Ts(this,"push",t)},reduce(t,...e){return zm(this,"reduce",t,e)},reduceRight(t,...e){return zm(this,"reduceRight",t,e)},shift(){return Ts(this,"shift")},some(t,e){return sr(this,"some",t,e,void 0,arguments)},splice(...t){return Ts(this,"splice",t)},toReversed(){return hi(this).toReversed()},toSorted(t){return hi(this).toSorted(t)},toSpliced(...t){return hi(this).toSpliced(...t)},unshift(...t){return Ts(this,"unshift",t)},values(){return Gu(this,"values",Ut)}};function Gu(t,e,n){const r=jc(t),o=r[e]();return r!==t&&!wn(t)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.value&&(i.value=n(i.value)),i}),o}const MT=Array.prototype;function sr(t,e,n,r,o,i){const s=jc(t),a=s!==t&&!wn(t),l=s[e];if(l!==MT[e]){const h=l.apply(t,i);return a?Ut(h):h}let u=n;s!==t&&(a?u=function(h,p){return n.call(this,Ut(h),p,t)}:n.length>2&&(u=function(h,p){return n.call(this,h,p,t)}));const d=l.call(s,u,r);return a&&o?o(d):d}function zm(t,e,n,r){const o=jc(t);let i=n;return o!==t&&(wn(t)?n.length>3&&(i=function(s,a,l){return n.call(this,s,a,l,t)}):i=function(s,a,l){return n.call(this,s,Ut(a),l,t)}),o[e](i,...r)}function Qu(t,e,n){const r=$e(t);zt(r,"iterate",aa);const o=r[e](...n);return(o===-1||o===!1)&&sh(n[0])?(n[0]=$e(n[0]),r[e](...n)):o}function Ts(t,e,n=[]){Eo(),Jf();const r=$e(t)[e].apply(t,n);return Zf(),Io(),r}const $T=Gf("__proto__,__v_isRef,__isVue"),$b=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zn));function FT(t){Zn(t)||(t=String(t));const e=$e(this);return zt(e,"has",t),e.hasOwnProperty(t)}class Fb{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const o=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(o?i?JT:zb:i?Bb:jb).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const s=de(e);if(!o){let l;if(s&&(l=VT[n]))return l;if(n==="hasOwnProperty")return FT}const a=Reflect.get(e,n,Bt(e)?e:r);return(Zn(n)?$b.has(n):$T(n))||(o||zt(e,"get",n),i)?a:Bt(a)?s&&Xf(n)?a:a.value:tt(a)?o?oh(a):rs(a):a}}class Ub extends Fb{constructor(e=!1){super(!1,e)}set(e,n,r,o){let i=e[n];if(!this._isShallow){const l=Qo(i);if(!wn(r)&&!Qo(r)&&(i=$e(i),r=$e(r)),!de(e)&&Bt(i)&&!Bt(r))return l?!1:(i.value=r,!0)}const s=de(e)&&Xf(n)?Number(n)<e.length:ze(e,n),a=Reflect.set(e,n,r,Bt(e)?e:o);return e===$e(o)&&(s?yo(r,i)&&wr(e,"set",n,r):wr(e,"add",n,r)),a}deleteProperty(e,n){const r=ze(e,n);e[n];const o=Reflect.deleteProperty(e,n);return o&&r&&wr(e,"delete",n,void 0),o}has(e,n){const r=Reflect.has(e,n);return(!Zn(n)||!$b.has(n))&&zt(e,"has",n),r}ownKeys(e){return zt(e,"iterate",de(e)?"length":Ko),Reflect.ownKeys(e)}}class UT extends Fb{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const jT=new Ub,BT=new UT,zT=new Ub(!0);const nh=t=>t,Bc=t=>Reflect.getPrototypeOf(t);function bl(t,e,n=!1,r=!1){t=t.__v_raw;const o=$e(t),i=$e(e);n||(yo(e,i)&&zt(o,"get",e),zt(o,"get",i));const{has:s}=Bc(o),a=r?nh:n?ah:Ut;if(s.call(o,e))return a(t.get(e));if(s.call(o,i))return a(t.get(i));t!==o&&t.get(e)}function _l(t,e=!1){const n=this.__v_raw,r=$e(n),o=$e(t);return e||(yo(t,o)&&zt(r,"has",t),zt(r,"has",o)),t===o?n.has(t):n.has(t)||n.has(o)}function wl(t,e=!1){return t=t.__v_raw,!e&&zt($e(t),"iterate",Ko),Reflect.get(t,"size",t)}function Hm(t,e=!1){!e&&!wn(t)&&!Qo(t)&&(t=$e(t));const n=$e(this);return Bc(n).has.call(n,t)||(n.add(t),wr(n,"add",t,t)),this}function Km(t,e,n=!1){!n&&!wn(e)&&!Qo(e)&&(e=$e(e));const r=$e(this),{has:o,get:i}=Bc(r);let s=o.call(r,t);s||(t=$e(t),s=o.call(r,t));const a=i.call(r,t);return r.set(t,e),s?yo(e,a)&&wr(r,"set",t,e):wr(r,"add",t,e),this}function Wm(t){const e=$e(this),{has:n,get:r}=Bc(e);let o=n.call(e,t);o||(t=$e(t),o=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return o&&wr(e,"delete",t,void 0),i}function qm(){const t=$e(this),e=t.size!==0,n=t.clear();return e&&wr(t,"clear",void 0,void 0),n}function El(t,e){return function(r,o){const i=this,s=i.__v_raw,a=$e(s),l=e?nh:t?ah:Ut;return!t&&zt(a,"iterate",Ko),s.forEach((u,d)=>r.call(o,l(u),l(d),i))}}function Il(t,e,n){return function(...r){const o=this.__v_raw,i=$e(o),s=Pi(i),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,u=o[t](...r),d=n?nh:e?ah:Ut;return!e&&zt(i,"iterate",l?Bd:Ko),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[d(h[0]),d(h[1])]:d(h),done:p}},[Symbol.iterator](){return this}}}}function zr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function HT(){const t={get(i){return bl(this,i)},get size(){return wl(this)},has:_l,add:Hm,set:Km,delete:Wm,clear:qm,forEach:El(!1,!1)},e={get(i){return bl(this,i,!1,!0)},get size(){return wl(this)},has:_l,add(i){return Hm.call(this,i,!0)},set(i,s){return Km.call(this,i,s,!0)},delete:Wm,clear:qm,forEach:El(!1,!0)},n={get(i){return bl(this,i,!0)},get size(){return wl(this,!0)},has(i){return _l.call(this,i,!0)},add:zr("add"),set:zr("set"),delete:zr("delete"),clear:zr("clear"),forEach:El(!0,!1)},r={get(i){return bl(this,i,!0,!0)},get size(){return wl(this,!0)},has(i){return _l.call(this,i,!0)},add:zr("add"),set:zr("set"),delete:zr("delete"),clear:zr("clear"),forEach:El(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Il(i,!1,!1),n[i]=Il(i,!0,!1),e[i]=Il(i,!1,!0),r[i]=Il(i,!0,!0)}),[t,n,e,r]}const[KT,WT,qT,GT]=HT();function rh(t,e){const n=e?t?GT:qT:t?WT:KT;return(r,o,i)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?r:Reflect.get(ze(n,o)&&o in r?n:r,o,i)}const QT={get:rh(!1,!1)},YT={get:rh(!1,!0)},XT={get:rh(!0,!1)};const jb=new WeakMap,Bb=new WeakMap,zb=new WeakMap,JT=new WeakMap;function ZT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eS(t){return t.__v_skip||!Object.isExtensible(t)?0:ZT(_T(t))}function rs(t){return Qo(t)?t:ih(t,!1,jT,QT,jb)}function Hb(t){return ih(t,!1,zT,YT,Bb)}function oh(t){return ih(t,!0,BT,XT,zb)}function ih(t,e,n,r,o){if(!tt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=o.get(t);if(i)return i;const s=eS(t);if(s===0)return t;const a=new Proxy(t,s===2?r:n);return o.set(t,a),a}function ki(t){return Qo(t)?ki(t.__v_raw):!!(t&&t.__v_isReactive)}function Qo(t){return!!(t&&t.__v_isReadonly)}function wn(t){return!!(t&&t.__v_isShallow)}function sh(t){return t?!!t.__v_raw:!1}function $e(t){const e=t&&t.__v_raw;return e?$e(e):t}function tS(t){return!ze(t,"__v_skip")&&Object.isExtensible(t)&&Ib(t,"__v_skip",!0),t}const Ut=t=>tt(t)?rs(t):t,ah=t=>tt(t)?oh(t):t;function Bt(t){return t?t.__v_isRef===!0:!1}function Er(t){return Kb(t,!1)}function nS(t){return Kb(t,!0)}function Kb(t,e){return Bt(t)?t:new rS(t,e)}class rS{constructor(e,n){this.dep=new th,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:$e(e),this._value=n?e:Ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||wn(e)||Qo(e);e=r?e:$e(e),yo(e,n)&&(this._rawValue=e,this._value=r?e:Ut(e),this.dep.trigger())}}function Oi(t){return Bt(t)?t.value:t}const oS={get:(t,e,n)=>e==="__v_raw"?t:Oi(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const o=t[e];return Bt(o)&&!Bt(n)?(o.value=n,!0):Reflect.set(t,e,n,r)}};function Wb(t){return ki(t)?t:new Proxy(t,oS)}class iS{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new th(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=sa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&nt!==this)return Rb(this,!0),!0}get value(){const e=this.dep.track();return Db(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function sS(t,e,n=!1){let r,o;return ve(t)?r=t:(r=t.get,o=t.set),new iS(r,o,n)}const Tl={},nc=new WeakMap;let Do;function aS(t,e=!1,n=Do){if(n){let r=nc.get(n);r||nc.set(n,r=[]),r.push(t)}}function lS(t,e,n=Ze){const{immediate:r,deep:o,once:i,scheduler:s,augmentJob:a,call:l}=n,u=L=>o?L:wn(L)||o===!1||o===0?fr(L,1):fr(L);let d,h,p,g,_=!1,P=!1;if(Bt(t)?(h=()=>t.value,_=wn(t)):ki(t)?(h=()=>u(t),_=!0):de(t)?(P=!0,_=t.some(L=>ki(L)||wn(L)),h=()=>t.map(L=>{if(Bt(L))return L.value;if(ki(L))return u(L);if(ve(L))return l?l(L,2):L()})):ve(t)?e?h=l?()=>l(t,2):t:h=()=>{if(p){Eo();try{p()}finally{Io()}}const L=Do;Do=d;try{return l?l(t,3,[g]):t(g)}finally{Do=L}}:h=Kn,e&&o){const L=h,W=o===!0?1/0:o;h=()=>fr(L(),W)}const k=NT(),N=()=>{d.stop(),k&&Yf(k.effects,d)};if(i&&e){const L=e;e=(...W)=>{L(...W),N()}}let O=P?new Array(t.length).fill(Tl):Tl;const R=L=>{if(!(!(d.flags&1)||!d.dirty&&!L))if(e){const W=d.run();if(o||_||(P?W.some((q,I)=>yo(q,O[I])):yo(W,O))){p&&p();const q=Do;Do=d;try{const I=[W,O===Tl?void 0:P&&O[0]===Tl?[]:O,g];l?l(e,3,I):e(...I),O=W}finally{Do=q}}}else d.run()};return a&&a(R),d=new kb(h),d.scheduler=s?()=>s(R,!1):R,g=L=>aS(L,!1,d),p=d.onStop=()=>{const L=nc.get(d);if(L){if(l)l(L,4);else for(const W of L)W();nc.delete(d)}},e?r?R(!0):O=d.run():s?s(R.bind(null,!0),!0):d.run(),N.pause=d.pause.bind(d),N.resume=d.resume.bind(d),N.stop=N,N}function fr(t,e=1/0,n){if(e<=0||!tt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Bt(t))fr(t.value,e,n);else if(de(t))for(let r=0;r<t.length;r++)fr(t[r],e,n);else if($c(t)||Pi(t))t.forEach(r=>{fr(r,e,n)});else if(Eb(t)){for(const r in t)fr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&fr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ua(t,e,n,r){try{return r?t(...r):t()}catch(o){zc(o,e,n)}}function Nn(t,e,n,r){if(ve(t)){const o=Ua(t,e,n,r);return o&&_b(o)&&o.catch(i=>{zc(i,e,n)}),o}if(de(t)){const o=[];for(let i=0;i<t.length;i++)o.push(Nn(t[i],e,n,r));return o}}function zc(t,e,n,r=!0){const o=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||Ze;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const d=a.ec;if(d){for(let h=0;h<d.length;h++)if(d[h](t,l,u)===!1)return}a=a.parent}if(i){Eo(),Ua(i,null,10,[t,l,u]),Io();return}}cS(t,n,o,r,s)}function cS(t,e,n,r=!0,o=!1){if(o)throw t;console.error(t)}const Qt=[];let jn=-1;const Ri=[];let Qr=null,yi=0;const qb=Promise.resolve();let rc=null;function Hc(t){const e=rc||qb;return t?e.then(this?t.bind(this):t):e}function uS(t){let e=jn+1,n=Qt.length;for(;e<n;){const r=e+n>>>1,o=Qt[r],i=la(o);i<t||i===t&&o.flags&2?e=r+1:n=r}return e}function lh(t){if(!(t.flags&1)){const e=la(t),n=Qt[Qt.length-1];!n||!(t.flags&2)&&e>=la(n)?Qt.push(t):Qt.splice(uS(e),0,t),t.flags|=1,Gb()}}function Gb(){rc||(rc=qb.then(Yb))}function dS(t){de(t)?Ri.push(...t):Qr&&t.id===-1?Qr.splice(yi+1,0,t):t.flags&1||(Ri.push(t),t.flags|=1),Gb()}function Gm(t,e,n=jn+1){for(;n<Qt.length;n++){const r=Qt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Qt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Qb(t){if(Ri.length){const e=[...new Set(Ri)].sort((n,r)=>la(n)-la(r));if(Ri.length=0,Qr){Qr.push(...e);return}for(Qr=e,yi=0;yi<Qr.length;yi++){const n=Qr[yi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Qr=null,yi=0}}const la=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Yb(t){try{for(jn=0;jn<Qt.length;jn++){const e=Qt[jn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ua(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jn<Qt.length;jn++){const e=Qt[jn];e&&(e.flags&=-2)}jn=-1,Qt.length=0,Qb(),rc=null,(Qt.length||Ri.length)&&Yb()}}let It=null,Xb=null;function oc(t){const e=It;return It=t,Xb=t&&t.type.__scopeId||null,e}function et(t,e=It,n){if(!e||t._n)return t;const r=(...o)=>{r._d&&sg(-1);const i=oc(e);let s;try{s=t(...o)}finally{oc(i),r._d&&sg(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function ut(t,e){if(It===null)return t;const n=Xc(It),r=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[i,s,a,l=Ze]=e[o];i&&(ve(i)&&(i={mounted:i,updated:i}),i.deep&&fr(s),r.push({dir:i,instance:n,value:s,oldValue:void 0,arg:a,modifiers:l}))}return t}function Oo(t,e,n,r){const o=t.dirs,i=e&&e.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let l=a.dir[r];l&&(Eo(),Nn(l,n,8,[t.el,a,t,e]),Io())}}const Jb=Symbol("_vte"),Zb=t=>t.__isTeleport,Ks=t=>t&&(t.disabled||t.disabled===""),fS=t=>t&&(t.defer||t.defer===""),Qm=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Ym=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,zd=(t,e)=>{const n=t&&t.to;return lt(n)?e?e(n):null:n},hS={name:"Teleport",__isTeleport:!0,process(t,e,n,r,o,i,s,a,l,u){const{mc:d,pc:h,pbc:p,o:{insert:g,querySelector:_,createText:P,createComment:k}}=u,N=Ks(e.props);let{shapeFlag:O,children:R,dynamicChildren:L}=e;if(t==null){const W=e.el=P(""),q=e.anchor=P("");g(W,n,r),g(q,n,r);const I=(b,T)=>{O&16&&(o&&o.isCE&&(o.ce._teleportTarget=b),d(R,b,T,o,i,s,a,l))},v=()=>{const b=e.target=zd(e.props,_),T=e0(b,e,P,g);b&&(s!=="svg"&&Qm(b)?s="svg":s!=="mathml"&&Ym(b)&&(s="mathml"),N||(I(b,T),Fl(e)))};N&&(I(n,q),Fl(e)),fS(e.props)?Jt(v,i):v()}else{e.el=t.el,e.targetStart=t.targetStart;const W=e.anchor=t.anchor,q=e.target=t.target,I=e.targetAnchor=t.targetAnchor,v=Ks(t.props),b=v?n:q,T=v?W:I;if(s==="svg"||Qm(q)?s="svg":(s==="mathml"||Ym(q))&&(s="mathml"),L?(p(t.dynamicChildren,L,b,o,i,s,a),gh(t,e,!0)):l||h(t,e,b,T,o,i,s,a,!1),N)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Sl(e,n,W,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const C=e.target=zd(e.props,_);C&&Sl(e,C,null,u,0)}else v&&Sl(e,q,I,u,1);Fl(e)}},remove(t,e,n,{um:r,o:{remove:o}},i){const{shapeFlag:s,children:a,anchor:l,targetStart:u,targetAnchor:d,target:h,props:p}=t;if(h&&(o(u),o(d)),i&&o(l),s&16){const g=i||!Ks(p);for(let _=0;_<a.length;_++){const P=a[_];r(P,e,n,g,!!P.dynamicChildren)}}},move:Sl,hydrate:pS};function Sl(t,e,n,{o:{insert:r},m:o},i=2){i===0&&r(t.targetAnchor,e,n);const{el:s,anchor:a,shapeFlag:l,children:u,props:d}=t,h=i===2;if(h&&r(s,e,n),(!h||Ks(d))&&l&16)for(let p=0;p<u.length;p++)o(u[p],e,n,2);h&&r(a,e,n)}function pS(t,e,n,r,o,i,{o:{nextSibling:s,parentNode:a,querySelector:l,insert:u,createText:d}},h){const p=e.target=zd(e.props,l);if(p){const g=p._lpa||p.firstChild;if(e.shapeFlag&16)if(Ks(e.props))e.anchor=h(s(t),e,a(t),n,r,o,i),e.targetStart=g,e.targetAnchor=g&&s(g);else{e.anchor=s(t);let _=g;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")e.targetStart=_;else if(_.data==="teleport anchor"){e.targetAnchor=_,p._lpa=e.targetAnchor&&s(e.targetAnchor);break}}_=s(_)}e.targetAnchor||e0(p,e,d,u),h(g&&s(g),e,p,n,r,o,i)}Fl(e)}return e.anchor&&s(e.anchor)}const mS=hS;function Fl(t){const e=t.ctx;if(e&&e.ut){let n=t.targetStart;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}function e0(t,e,n,r){const o=e.targetStart=n(""),i=e.targetAnchor=n("");return o[Jb]=i,t&&(r(o,t),r(i,t)),i}const Yr=Symbol("_leaveCb"),Al=Symbol("_enterCb");function t0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qc(()=>{t.isMounted=!0}),u0(()=>{t.isUnmounting=!0}),t}const gn=[Function,Array],n0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gn,onEnter:gn,onAfterEnter:gn,onEnterCancelled:gn,onBeforeLeave:gn,onLeave:gn,onAfterLeave:gn,onLeaveCancelled:gn,onBeforeAppear:gn,onAppear:gn,onAfterAppear:gn,onAppearCancelled:gn},r0=t=>{const e=t.subTree;return e.component?r0(e.component):e},gS={name:"BaseTransition",props:n0,setup(t,{slots:e}){const n=vh(),r=t0();return()=>{const o=e.default&&ch(e.default(),!0);if(!o||!o.length)return;const i=o0(o),s=$e(t),{mode:a}=s;if(r.isLeaving)return Yu(i);const l=Xm(i);if(!l)return Yu(i);let u=ca(l,s,r,n,p=>u=p);l.type!==Yt&&Yo(l,u);const d=n.subTree,h=d&&Xm(d);if(h&&h.type!==Yt&&!$o(l,h)&&r0(n).type!==Yt){const p=ca(h,s,r,n);if(Yo(h,p),a==="out-in"&&l.type!==Yt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave},Yu(i);a==="in-out"&&l.type!==Yt&&(p.delayLeave=(g,_,P)=>{const k=i0(r,h);k[String(h.key)]=h,g[Yr]=()=>{_(),g[Yr]=void 0,delete u.delayedLeave},u.delayedLeave=P})}return i}}};function o0(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Yt){e=n;break}}return e}const yS=gS;function i0(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ca(t,e,n,r,o){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:d,onEnterCancelled:h,onBeforeLeave:p,onLeave:g,onAfterLeave:_,onLeaveCancelled:P,onBeforeAppear:k,onAppear:N,onAfterAppear:O,onAppearCancelled:R}=e,L=String(t.key),W=i0(n,t),q=(b,T)=>{b&&Nn(b,r,9,T)},I=(b,T)=>{const C=T[1];q(b,T),de(b)?b.every(S=>S.length<=1)&&C():b.length<=1&&C()},v={mode:s,persisted:a,beforeEnter(b){let T=l;if(!n.isMounted)if(i)T=k||l;else return;b[Yr]&&b[Yr](!0);const C=W[L];C&&$o(t,C)&&C.el[Yr]&&C.el[Yr](),q(T,[b])},enter(b){let T=u,C=d,S=h;if(!n.isMounted)if(i)T=N||u,C=O||d,S=R||h;else return;let E=!1;const we=b[Al]=xe=>{E||(E=!0,xe?q(S,[b]):q(C,[b]),v.delayedLeave&&v.delayedLeave(),b[Al]=void 0)};T?I(T,[b,we]):we()},leave(b,T){const C=String(t.key);if(b[Al]&&b[Al](!0),n.isUnmounting)return T();q(p,[b]);let S=!1;const E=b[Yr]=we=>{S||(S=!0,T(),we?q(P,[b]):q(_,[b]),b[Yr]=void 0,W[C]===t&&delete W[C])};W[C]=t,g?I(g,[b,E]):E()},clone(b){const T=ca(b,e,n,r,o);return o&&o(T),T}};return v}function Yu(t){if(Kc(t))return t=vo(t),t.children=null,t}function Xm(t){if(!Kc(t))return Zb(t.type)&&t.children?o0(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ve(n.default))return n.default()}}function Yo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Yo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ch(t,e=!1,n){let r=[],o=0;for(let i=0;i<t.length;i++){let s=t[i];const a=n==null?s.key:String(n)+String(s.key!=null?s.key:i);s.type===We?(s.patchFlag&128&&o++,r=r.concat(ch(s.children,e,a))):(e||s.type!==Yt)&&r.push(a!=null?vo(s,{key:a}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function uh(t,e){return ve(t)?yt({name:t.name},e,{setup:t}):t}function s0(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Hd(t,e,n,r,o=!1){if(de(t)){t.forEach((_,P)=>Hd(_,e&&(de(e)?e[P]:e),n,r,o));return}if(Ni(r)&&!o)return;const i=r.shapeFlag&4?Xc(r.component):r.el,s=o?null:i,{i:a,r:l}=t,u=e&&e.r,d=a.refs===Ze?a.refs={}:a.refs,h=a.setupState,p=$e(h),g=h===Ze?()=>!1:_=>ze(p,_);if(u!=null&&u!==l&&(lt(u)?(d[u]=null,g(u)&&(h[u]=null)):Bt(u)&&(u.value=null)),ve(l))Ua(l,a,12,[s,d]);else{const _=lt(l),P=Bt(l);if(_||P){const k=()=>{if(t.f){const N=_?g(l)?h[l]:d[l]:l.value;o?de(N)&&Yf(N,i):de(N)?N.includes(i)||N.push(i):_?(d[l]=[i],g(l)&&(h[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else _?(d[l]=s,g(l)&&(h[l]=s)):P&&(l.value=s,t.k&&(d[t.k]=s))};s?(k.id=-1,Jt(k,n)):k()}}}const Ni=t=>!!t.type.__asyncLoader,Kc=t=>t.type.__isKeepAlive;function vS(t,e){a0(t,"a",e)}function bS(t,e){a0(t,"da",e)}function a0(t,e,n=Pt){const r=t.__wdc||(t.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(Wc(e,r,n),n){let o=n.parent;for(;o&&o.parent;)Kc(o.parent.vnode)&&_S(r,e,n,o),o=o.parent}}function _S(t,e,n,r){const o=Wc(e,t,r,!0);d0(()=>{Yf(r[e],o)},n)}function Wc(t,e,n=Pt,r=!1){if(n){const o=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...s)=>{Eo();const a=ja(n),l=Nn(e,n,t,s);return a(),Io(),l});return r?o.unshift(i):o.push(i),i}}const Lr=t=>(e,n=Pt)=>{(!Yc||t==="sp")&&Wc(t,(...r)=>e(...r),n)},l0=Lr("bm"),qc=Lr("m"),wS=Lr("bu"),c0=Lr("u"),u0=Lr("bum"),d0=Lr("um"),ES=Lr("sp"),IS=Lr("rtg"),TS=Lr("rtc");function SS(t,e=Pt){Wc("ec",t,e)}const dh="components",AS="directives";function ke(t,e){return hh(dh,t,!0,e)||t}const f0=Symbol.for("v-ndc");function so(t){return lt(t)?hh(dh,t,!1)||t:t||f0}function fh(t){return hh(AS,t)}function hh(t,e,n=!0,r=!1){const o=It||Pt;if(o){const i=o.type;if(t===dh){const a=hA(i,!1);if(a&&(a===e||a===In(e)||a===Uc(In(e))))return i}const s=Jm(o[t]||i[t],e)||Jm(o.appContext[t],e);return!s&&r?i:s}}function Jm(t,e){return t&&(t[e]||t[In(e)]||t[Uc(In(e))])}function Rn(t,e,n,r){let o;const i=n,s=de(t);if(s||lt(t)){const a=s&&ki(t);let l=!1;a&&(l=!wn(t),t=jc(t)),o=new Array(t.length);for(let u=0,d=t.length;u<d;u++)o[u]=e(l?Ut(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){o=new Array(t);for(let a=0;a<t;a++)o[a]=e(a+1,a,void 0,i)}else if(tt(t))if(t[Symbol.iterator])o=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);o=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const d=a[l];o[l]=e(t[d],d,l,i)}}else o=[];return o}function CS(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(de(r))for(let o=0;o<r.length;o++)t[r[o].name]=r[o].fn;else r&&(t[r.name]=r.key?(...o)=>{const i=r.fn(...o);return i&&(i.key=r.key),i}:r.fn)}return t}function Qe(t,e,n={},r,o){if(It.ce||It.parent&&Ni(It.parent)&&It.parent.ce)return e!=="default"&&(n.name=e),j(),Be(We,null,[ue("slot",n,r&&r())],64);let i=t[e];i&&i._c&&(i._d=!1),j();const s=i&&h0(i(n)),a=Be(We,{key:(n.key||s&&s.key||`_${e}`)+(!s&&r?"_fb":"")},s||(r?r():[]),s&&t._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function h0(t){return t.some(e=>da(e)?!(e.type===Yt||e.type===We&&!h0(e.children)):!0)?t:null}const Kd=t=>t?R0(t)?Xc(t):Kd(t.parent):null,Ws=yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Kd(t.parent),$root:t=>Kd(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ph(t),$forceUpdate:t=>t.f||(t.f=()=>{lh(t.update)}),$nextTick:t=>t.n||(t.n=Hc.bind(t.proxy)),$watch:t=>GS.bind(t)}),Xu=(t,e)=>t!==Ze&&!t.__isScriptSetup&&ze(t,e),xS={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:o,props:i,accessCache:s,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=s[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return o[e];case 4:return n[e];case 3:return i[e]}else{if(Xu(r,e))return s[e]=1,r[e];if(o!==Ze&&ze(o,e))return s[e]=2,o[e];if((u=t.propsOptions[0])&&ze(u,e))return s[e]=3,i[e];if(n!==Ze&&ze(n,e))return s[e]=4,n[e];Wd&&(s[e]=0)}}const d=Ws[e];let h,p;if(d)return e==="$attrs"&&zt(t.attrs,"get",""),d(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ze&&ze(n,e))return s[e]=4,n[e];if(p=l.config.globalProperties,ze(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:o,ctx:i}=t;return Xu(o,e)?(o[e]=n,!0):r!==Ze&&ze(r,e)?(r[e]=n,!0):ze(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:o,propsOptions:i}},s){let a;return!!n[s]||t!==Ze&&ze(t,s)||Xu(e,s)||(a=i[0])&&ze(a,s)||ze(r,s)||ze(Ws,s)||ze(o.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ze(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zm(t){return de(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Wd=!0;function PS(t){const e=ph(t),n=t.proxy,r=t.ctx;Wd=!1,e.beforeCreate&&eg(e.beforeCreate,t,"bc");const{data:o,computed:i,methods:s,watch:a,provide:l,inject:u,created:d,beforeMount:h,mounted:p,beforeUpdate:g,updated:_,activated:P,deactivated:k,beforeDestroy:N,beforeUnmount:O,destroyed:R,unmounted:L,render:W,renderTracked:q,renderTriggered:I,errorCaptured:v,serverPrefetch:b,expose:T,inheritAttrs:C,components:S,directives:E,filters:we}=e;if(u&&kS(u,r,null),s)for(const me in s){const _e=s[me];ve(_e)&&(r[me]=_e.bind(n))}if(o){const me=o.call(n,n);tt(me)&&(t.data=rs(me))}if(Wd=!0,i)for(const me in i){const _e=i[me],mt=ve(_e)?_e.bind(n,n):ve(_e.get)?_e.get.bind(n,n):Kn,ht=!ve(_e)&&ve(_e.set)?_e.set.bind(n):Kn,ct=Et({get:mt,set:ht});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>ct.value,set:Fe=>ct.value=Fe})}if(a)for(const me in a)p0(a[me],r,n,me);if(l){const me=ve(l)?l.call(n):l;Reflect.ownKeys(me).forEach(_e=>{Ul(_e,me[_e])})}d&&eg(d,t,"c");function Ie(me,_e){de(_e)?_e.forEach(mt=>me(mt.bind(n))):_e&&me(_e.bind(n))}if(Ie(l0,h),Ie(qc,p),Ie(wS,g),Ie(c0,_),Ie(vS,P),Ie(bS,k),Ie(SS,v),Ie(TS,q),Ie(IS,I),Ie(u0,O),Ie(d0,L),Ie(ES,b),de(T))if(T.length){const me=t.exposed||(t.exposed={});T.forEach(_e=>{Object.defineProperty(me,_e,{get:()=>n[_e],set:mt=>n[_e]=mt})})}else t.exposed||(t.exposed={});W&&t.render===Kn&&(t.render=W),C!=null&&(t.inheritAttrs=C),S&&(t.components=S),E&&(t.directives=E),b&&s0(t)}function kS(t,e,n=Kn){de(t)&&(t=qd(t));for(const r in t){const o=t[r];let i;tt(o)?"default"in o?i=En(o.from||r,o.default,!0):i=En(o.from||r):i=En(o),Bt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):e[r]=i}}function eg(t,e,n){Nn(de(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function p0(t,e,n,r){let o=r.includes(".")?C0(n,r):()=>n[r];if(lt(t)){const i=e[t];ve(i)&&bn(o,i)}else if(ve(t))bn(o,t.bind(n));else if(tt(t))if(de(t))t.forEach(i=>p0(i,e,n,r));else{const i=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(i)&&bn(o,i,t)}}function ph(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=t.appContext,a=i.get(e);let l;return a?l=a:!o.length&&!n&&!r?l=e:(l={},o.length&&o.forEach(u=>ic(l,u,s,!0)),ic(l,e,s)),tt(e)&&i.set(e,l),l}function ic(t,e,n,r=!1){const{mixins:o,extends:i}=e;i&&ic(t,i,n,!0),o&&o.forEach(s=>ic(t,s,n,!0));for(const s in e)if(!(r&&s==="expose")){const a=OS[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const OS={data:tg,props:ng,emits:ng,methods:Rs,computed:Rs,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:Rs,directives:Rs,watch:NS,provide:tg,inject:RS};function tg(t,e){return e?t?function(){return yt(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function RS(t,e){return Rs(qd(t),qd(e))}function qd(t){if(de(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Rs(t,e){return t?yt(Object.create(null),t,e):e}function ng(t,e){return t?de(t)&&de(e)?[...new Set([...t,...e])]:yt(Object.create(null),Zm(t),Zm(e??{})):e}function NS(t,e){if(!t)return e;if(!e)return t;const n=yt(Object.create(null),t);for(const r in e)n[r]=Gt(t[r],e[r]);return n}function m0(){return{app:null,config:{isNativeTag:vT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let LS=0;function DS(t,e){return function(r,o=null){ve(r)||(r=yt({},r)),o!=null&&!tt(o)&&(o=null);const i=m0(),s=new WeakSet,a=[];let l=!1;const u=i.app={_uid:LS++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:mA,get config(){return i.config},set config(d){},use(d,...h){return s.has(d)||(d&&ve(d.install)?(s.add(d),d.install(u,...h)):ve(d)&&(s.add(d),d(u,...h))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,h){return h?(i.components[d]=h,u):i.components[d]},directive(d,h){return h?(i.directives[d]=h,u):i.directives[d]},mount(d,h,p){if(!l){const g=u._ceVNode||ue(r,o);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(g,d):t(g,d,p),l=!0,u._container=d,d.__vue_app__=u,Xc(g.component)}},onUnmount(d){a.push(d)},unmount(){l&&(Nn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,h){return i.provides[d]=h,u},runWithContext(d){const h=Li;Li=u;try{return d()}finally{Li=h}}};return u}}let Li=null;function Ul(t,e){if(Pt){let n=Pt.provides;const r=Pt.parent&&Pt.parent.provides;r===n&&(n=Pt.provides=Object.create(r)),n[t]=e}}function En(t,e,n=!1){const r=Pt||It;if(r||Li){const o=Li?Li._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&t in o)return o[t];if(arguments.length>1)return n&&ve(e)?e.call(r&&r.proxy):e}}const g0={},y0=()=>Object.create(g0),v0=t=>Object.getPrototypeOf(t)===g0;function VS(t,e,n,r=!1){const o={},i=y0();t.propsDefaults=Object.create(null),b0(t,e,o,i);for(const s in t.propsOptions[0])s in o||(o[s]=void 0);n?t.props=r?o:Hb(o):t.type.props?t.props=o:t.props=i,t.attrs=i}function MS(t,e,n,r){const{props:o,attrs:i,vnode:{patchFlag:s}}=t,a=$e(o),[l]=t.propsOptions;let u=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=t.vnode.dynamicProps;for(let h=0;h<d.length;h++){let p=d[h];if(Gc(t.emitsOptions,p))continue;const g=e[p];if(l)if(ze(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const _=In(p);o[_]=Gd(l,a,_,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{b0(t,e,o,i)&&(u=!0);let d;for(const h in a)(!e||!ze(e,h)&&((d=ni(h))===h||!ze(e,d)))&&(l?n&&(n[h]!==void 0||n[d]!==void 0)&&(o[h]=Gd(l,a,h,void 0,t,!0)):delete o[h]);if(i!==a)for(const h in i)(!e||!ze(e,h))&&(delete i[h],u=!0)}u&&wr(t.attrs,"set","")}function b0(t,e,n,r){const[o,i]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Bs(l))continue;const u=e[l];let d;o&&ze(o,d=In(l))?!i||!i.includes(d)?n[d]=u:(a||(a={}))[d]=u:Gc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,s=!0)}if(i){const l=$e(n),u=a||Ze;for(let d=0;d<i.length;d++){const h=i[d];n[h]=Gd(o,l,h,u[h],t,!ze(u,h))}}return s}function Gd(t,e,n,r,o,i){const s=t[n];if(s!=null){const a=ze(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&ve(l)){const{propsDefaults:u}=o;if(n in u)r=u[n];else{const d=ja(o);r=u[n]=l.call(null,e),d()}}else r=l;o.ce&&o.ce._setProp(n,r)}s[0]&&(i&&!a?r=!1:s[1]&&(r===""||r===ni(n))&&(r=!0))}return r}const $S=new WeakMap;function _0(t,e,n=!1){const r=n?$S:e.propsCache,o=r.get(t);if(o)return o;const i=t.props,s={},a=[];let l=!1;if(!ve(t)){const d=h=>{l=!0;const[p,g]=_0(h,e,!0);yt(s,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return tt(t)&&r.set(t,xi),xi;if(de(i))for(let d=0;d<i.length;d++){const h=In(i[d]);rg(h)&&(s[h]=Ze)}else if(i)for(const d in i){const h=In(d);if(rg(h)){const p=i[d],g=s[h]=de(p)||ve(p)?{type:p}:yt({},p),_=g.type;let P=!1,k=!0;if(de(_))for(let N=0;N<_.length;++N){const O=_[N],R=ve(O)&&O.name;if(R==="Boolean"){P=!0;break}else R==="String"&&(k=!1)}else P=ve(_)&&_.name==="Boolean";g[0]=P,g[1]=k,(P||ze(g,"default"))&&a.push(h)}}const u=[s,a];return tt(t)&&r.set(t,u),u}function rg(t){return t[0]!=="$"&&!Bs(t)}const w0=t=>t[0]==="_"||t==="$stable",mh=t=>de(t)?t.map(Bn):[Bn(t)],FS=(t,e,n)=>{if(e._n)return e;const r=et((...o)=>mh(e(...o)),n);return r._c=!1,r},E0=(t,e,n)=>{const r=t._ctx;for(const o in t){if(w0(o))continue;const i=t[o];if(ve(i))e[o]=FS(o,i,r);else if(i!=null){const s=mh(i);e[o]=()=>s}}},I0=(t,e)=>{const n=mh(e);t.slots.default=()=>n},T0=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},US=(t,e,n)=>{const r=t.slots=y0();if(t.vnode.shapeFlag&32){const o=e._;o?(T0(r,e,n),n&&Ib(r,"_",o,!0)):E0(e,r)}else e&&I0(t,e)},jS=(t,e,n)=>{const{vnode:r,slots:o}=t;let i=!0,s=Ze;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:T0(o,e,n):(i=!e.$stable,E0(e,o)),s=e}else e&&(I0(t,e),s={default:1});if(i)for(const a in o)!w0(a)&&s[a]==null&&delete o[a]},Jt=tA;function BS(t){return zS(t)}function zS(t,e){const n=Tb();n.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:s,createText:a,createComment:l,setText:u,setElementText:d,parentNode:h,nextSibling:p,setScopeId:g=Kn,insertStaticContent:_}=t,P=(w,A,V,U=null,$=null,H=null,X=void 0,Q=null,G=!!A.dynamicChildren)=>{if(w===A)return;w&&!$o(w,A)&&(U=F(w),Fe(w,$,H,!0),w=null),A.patchFlag===-2&&(G=!1,A.dynamicChildren=null);const{type:K,ref:ce,shapeFlag:Z}=A;switch(K){case Qc:k(w,A,V,U);break;case Yt:N(w,A,V,U);break;case jl:w==null&&O(A,V,U,X);break;case We:S(w,A,V,U,$,H,X,Q,G);break;default:Z&1?W(w,A,V,U,$,H,X,Q,G):Z&6?E(w,A,V,U,$,H,X,Q,G):(Z&64||Z&128)&&K.process(w,A,V,U,$,H,X,Q,G,re)}ce!=null&&$&&Hd(ce,w&&w.ref,H,A||w,!A)},k=(w,A,V,U)=>{if(w==null)r(A.el=a(A.children),V,U);else{const $=A.el=w.el;A.children!==w.children&&u($,A.children)}},N=(w,A,V,U)=>{w==null?r(A.el=l(A.children||""),V,U):A.el=w.el},O=(w,A,V,U)=>{[w.el,w.anchor]=_(w.children,A,V,U,w.el,w.anchor)},R=({el:w,anchor:A},V,U)=>{let $;for(;w&&w!==A;)$=p(w),r(w,V,U),w=$;r(A,V,U)},L=({el:w,anchor:A})=>{let V;for(;w&&w!==A;)V=p(w),o(w),w=V;o(A)},W=(w,A,V,U,$,H,X,Q,G)=>{A.type==="svg"?X="svg":A.type==="math"&&(X="mathml"),w==null?q(A,V,U,$,H,X,Q,G):b(w,A,$,H,X,Q,G)},q=(w,A,V,U,$,H,X,Q)=>{let G,K;const{props:ce,shapeFlag:Z,transition:ae,dirs:oe}=w;if(G=w.el=s(w.type,H,ce&&ce.is,ce),Z&8?d(G,w.children):Z&16&&v(w.children,G,null,U,$,Ju(w,H),X,Q),oe&&Oo(w,null,U,"created"),I(G,w,w.scopeId,X,U),ce){for(const Ue in ce)Ue!=="value"&&!Bs(Ue)&&i(G,Ue,null,ce[Ue],H,U);"value"in ce&&i(G,"value",null,ce.value,H),(K=ce.onVnodeBeforeMount)&&Fn(K,U,w)}oe&&Oo(w,null,U,"beforeMount");const he=HS($,ae);he&&ae.beforeEnter(G),r(G,A,V),((K=ce&&ce.onVnodeMounted)||he||oe)&&Jt(()=>{K&&Fn(K,U,w),he&&ae.enter(G),oe&&Oo(w,null,U,"mounted")},$)},I=(w,A,V,U,$)=>{if(V&&g(w,V),U)for(let H=0;H<U.length;H++)g(w,U[H]);if($){let H=$.subTree;if(A===H||P0(H.type)&&(H.ssContent===A||H.ssFallback===A)){const X=$.vnode;I(w,X,X.scopeId,X.slotScopeIds,$.parent)}}},v=(w,A,V,U,$,H,X,Q,G=0)=>{for(let K=G;K<w.length;K++){const ce=w[K]=Q?Xr(w[K]):Bn(w[K]);P(null,ce,A,V,U,$,H,X,Q)}},b=(w,A,V,U,$,H,X)=>{const Q=A.el=w.el;let{patchFlag:G,dynamicChildren:K,dirs:ce}=A;G|=w.patchFlag&16;const Z=w.props||Ze,ae=A.props||Ze;let oe;if(V&&Ro(V,!1),(oe=ae.onVnodeBeforeUpdate)&&Fn(oe,V,A,w),ce&&Oo(A,w,V,"beforeUpdate"),V&&Ro(V,!0),(Z.innerHTML&&ae.innerHTML==null||Z.textContent&&ae.textContent==null)&&d(Q,""),K?T(w.dynamicChildren,K,Q,V,U,Ju(A,$),H):X||_e(w,A,Q,null,V,U,Ju(A,$),H,!1),G>0){if(G&16)C(Q,Z,ae,V,$);else if(G&2&&Z.class!==ae.class&&i(Q,"class",null,ae.class,$),G&4&&i(Q,"style",Z.style,ae.style,$),G&8){const he=A.dynamicProps;for(let Ue=0;Ue<he.length;Ue++){const De=he[Ue],Nt=Z[De],_t=ae[De];(_t!==Nt||De==="value")&&i(Q,De,Nt,_t,$,V)}}G&1&&w.children!==A.children&&d(Q,A.children)}else!X&&K==null&&C(Q,Z,ae,V,$);((oe=ae.onVnodeUpdated)||ce)&&Jt(()=>{oe&&Fn(oe,V,A,w),ce&&Oo(A,w,V,"updated")},U)},T=(w,A,V,U,$,H,X)=>{for(let Q=0;Q<A.length;Q++){const G=w[Q],K=A[Q],ce=G.el&&(G.type===We||!$o(G,K)||G.shapeFlag&70)?h(G.el):V;P(G,K,ce,null,U,$,H,X,!0)}},C=(w,A,V,U,$)=>{if(A!==V){if(A!==Ze)for(const H in A)!Bs(H)&&!(H in V)&&i(w,H,A[H],null,$,U);for(const H in V){if(Bs(H))continue;const X=V[H],Q=A[H];X!==Q&&H!=="value"&&i(w,H,Q,X,$,U)}"value"in V&&i(w,"value",A.value,V.value,$)}},S=(w,A,V,U,$,H,X,Q,G)=>{const K=A.el=w?w.el:a(""),ce=A.anchor=w?w.anchor:a("");let{patchFlag:Z,dynamicChildren:ae,slotScopeIds:oe}=A;oe&&(Q=Q?Q.concat(oe):oe),w==null?(r(K,V,U),r(ce,V,U),v(A.children||[],V,ce,$,H,X,Q,G)):Z>0&&Z&64&&ae&&w.dynamicChildren?(T(w.dynamicChildren,ae,V,$,H,X,Q),(A.key!=null||$&&A===$.subTree)&&gh(w,A,!0)):_e(w,A,V,ce,$,H,X,Q,G)},E=(w,A,V,U,$,H,X,Q,G)=>{A.slotScopeIds=Q,w==null?A.shapeFlag&512?$.ctx.activate(A,V,U,X,G):we(A,V,U,$,H,X,G):xe(w,A,G)},we=(w,A,V,U,$,H,X)=>{const Q=w.component=lA(w,U,$);if(Kc(w)&&(Q.ctx.renderer=re),cA(Q,!1,X),Q.asyncDep){if($&&$.registerDep(Q,Ie,X),!w.el){const G=Q.subTree=ue(Yt);N(null,G,A,V)}}else Ie(Q,w,A,V,$,H,X)},xe=(w,A,V)=>{const U=A.component=w.component;if(ZS(w,A,V))if(U.asyncDep&&!U.asyncResolved){me(U,A,V);return}else U.next=A,U.update();else A.el=w.el,U.vnode=A},Ie=(w,A,V,U,$,H,X)=>{const Q=()=>{if(w.isMounted){let{next:Z,bu:ae,u:oe,parent:he,vnode:Ue}=w;{const Lt=S0(w);if(Lt){Z&&(Z.el=Ue.el,me(w,Z,X)),Lt.asyncDep.then(()=>{w.isUnmounted||Q()});return}}let De=Z,Nt;Ro(w,!1),Z?(Z.el=Ue.el,me(w,Z,X)):Z=Ue,ae&&$l(ae),(Nt=Z.props&&Z.props.onVnodeBeforeUpdate)&&Fn(Nt,he,Z,Ue),Ro(w,!0);const _t=Zu(w),At=w.subTree;w.subTree=_t,P(At,_t,h(At.el),F(At),w,$,H),Z.el=_t.el,De===null&&eA(w,_t.el),oe&&Jt(oe,$),(Nt=Z.props&&Z.props.onVnodeUpdated)&&Jt(()=>Fn(Nt,he,Z,Ue),$)}else{let Z;const{el:ae,props:oe}=A,{bm:he,m:Ue,parent:De,root:Nt,type:_t}=w,At=Ni(A);if(Ro(w,!1),he&&$l(he),!At&&(Z=oe&&oe.onVnodeBeforeMount)&&Fn(Z,De,A),Ro(w,!0),ae&&He){const Lt=()=>{w.subTree=Zu(w),He(ae,w.subTree,w,$,null)};At&&_t.__asyncHydrate?_t.__asyncHydrate(ae,w,Lt):Lt()}else{Nt.ce&&Nt.ce._injectChildStyle(_t);const Lt=w.subTree=Zu(w);P(null,Lt,V,U,w,$,H),A.el=Lt.el}if(Ue&&Jt(Ue,$),!At&&(Z=oe&&oe.onVnodeMounted)){const Lt=A;Jt(()=>Fn(Z,De,Lt),$)}(A.shapeFlag&256||De&&Ni(De.vnode)&&De.vnode.shapeFlag&256)&&w.a&&Jt(w.a,$),w.isMounted=!0,A=V=U=null}};w.scope.on();const G=w.effect=new kb(Q);w.scope.off();const K=w.update=G.run.bind(G),ce=w.job=G.runIfDirty.bind(G);ce.i=w,ce.id=w.uid,G.scheduler=()=>lh(ce),Ro(w,!0),K()},me=(w,A,V)=>{A.component=w;const U=w.vnode.props;w.vnode=A,w.next=null,MS(w,A.props,U,V),jS(w,A.children,V),Eo(),Gm(w),Io()},_e=(w,A,V,U,$,H,X,Q,G=!1)=>{const K=w&&w.children,ce=w?w.shapeFlag:0,Z=A.children,{patchFlag:ae,shapeFlag:oe}=A;if(ae>0){if(ae&128){ht(K,Z,V,U,$,H,X,Q,G);return}else if(ae&256){mt(K,Z,V,U,$,H,X,Q,G);return}}oe&8?(ce&16&&St(K,$,H),Z!==K&&d(V,Z)):ce&16?oe&16?ht(K,Z,V,U,$,H,X,Q,G):St(K,$,H,!0):(ce&8&&d(V,""),oe&16&&v(Z,V,U,$,H,X,Q,G))},mt=(w,A,V,U,$,H,X,Q,G)=>{w=w||xi,A=A||xi;const K=w.length,ce=A.length,Z=Math.min(K,ce);let ae;for(ae=0;ae<Z;ae++){const oe=A[ae]=G?Xr(A[ae]):Bn(A[ae]);P(w[ae],oe,V,null,$,H,X,Q,G)}K>ce?St(w,$,H,!0,!1,Z):v(A,V,U,$,H,X,Q,G,Z)},ht=(w,A,V,U,$,H,X,Q,G)=>{let K=0;const ce=A.length;let Z=w.length-1,ae=ce-1;for(;K<=Z&&K<=ae;){const oe=w[K],he=A[K]=G?Xr(A[K]):Bn(A[K]);if($o(oe,he))P(oe,he,V,null,$,H,X,Q,G);else break;K++}for(;K<=Z&&K<=ae;){const oe=w[Z],he=A[ae]=G?Xr(A[ae]):Bn(A[ae]);if($o(oe,he))P(oe,he,V,null,$,H,X,Q,G);else break;Z--,ae--}if(K>Z){if(K<=ae){const oe=ae+1,he=oe<ce?A[oe].el:U;for(;K<=ae;)P(null,A[K]=G?Xr(A[K]):Bn(A[K]),V,he,$,H,X,Q,G),K++}}else if(K>ae)for(;K<=Z;)Fe(w[K],$,H,!0),K++;else{const oe=K,he=K,Ue=new Map;for(K=he;K<=ae;K++){const Wt=A[K]=G?Xr(A[K]):Bn(A[K]);Wt.key!=null&&Ue.set(Wt.key,K)}let De,Nt=0;const _t=ae-he+1;let At=!1,Lt=0;const $r=new Array(_t);for(K=0;K<_t;K++)$r[K]=0;for(K=oe;K<=Z;K++){const Wt=w[K];if(Nt>=_t){Fe(Wt,$,H,!0);continue}let mn;if(Wt.key!=null)mn=Ue.get(Wt.key);else for(De=he;De<=ae;De++)if($r[De-he]===0&&$o(Wt,A[De])){mn=De;break}mn===void 0?Fe(Wt,$,H,!0):($r[mn-he]=K+1,mn>=Lt?Lt=mn:At=!0,P(Wt,A[mn],V,null,$,H,X,Q,G),Nt++)}const ai=At?KS($r):xi;for(De=ai.length-1,K=_t-1;K>=0;K--){const Wt=he+K,mn=A[Wt],li=Wt+1<ce?A[Wt+1].el:U;$r[K]===0?P(null,mn,V,li,$,H,X,Q,G):At&&(De<0||K!==ai[De]?ct(mn,V,li,2):De--)}}},ct=(w,A,V,U,$=null)=>{const{el:H,type:X,transition:Q,children:G,shapeFlag:K}=w;if(K&6){ct(w.component.subTree,A,V,U);return}if(K&128){w.suspense.move(A,V,U);return}if(K&64){X.move(w,A,V,re);return}if(X===We){r(H,A,V);for(let Z=0;Z<G.length;Z++)ct(G[Z],A,V,U);r(w.anchor,A,V);return}if(X===jl){R(w,A,V);return}if(U!==2&&K&1&&Q)if(U===0)Q.beforeEnter(H),r(H,A,V),Jt(()=>Q.enter(H),$);else{const{leave:Z,delayLeave:ae,afterLeave:oe}=Q,he=()=>r(H,A,V),Ue=()=>{Z(H,()=>{he(),oe&&oe()})};ae?ae(H,he,Ue):Ue()}else r(H,A,V)},Fe=(w,A,V,U=!1,$=!1)=>{const{type:H,props:X,ref:Q,children:G,dynamicChildren:K,shapeFlag:ce,patchFlag:Z,dirs:ae,cacheIndex:oe}=w;if(Z===-2&&($=!1),Q!=null&&Hd(Q,null,V,w,!0),oe!=null&&(A.renderCache[oe]=void 0),ce&256){A.ctx.deactivate(w);return}const he=ce&1&&ae,Ue=!Ni(w);let De;if(Ue&&(De=X&&X.onVnodeBeforeUnmount)&&Fn(De,A,w),ce&6)sn(w.component,V,U);else{if(ce&128){w.suspense.unmount(V,U);return}he&&Oo(w,null,A,"beforeUnmount"),ce&64?w.type.remove(w,A,V,re,U):K&&!K.hasOnce&&(H!==We||Z>0&&Z&64)?St(K,A,V,!1,!0):(H===We&&Z&384||!$&&ce&16)&&St(G,A,V),U&&Ge(w)}(Ue&&(De=X&&X.onVnodeUnmounted)||he)&&Jt(()=>{De&&Fn(De,A,w),he&&Oo(w,null,A,"unmounted")},V)},Ge=w=>{const{type:A,el:V,anchor:U,transition:$}=w;if(A===We){Kt(V,U);return}if(A===jl){L(w);return}const H=()=>{o(V),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:X,delayLeave:Q}=$,G=()=>X(V,H);Q?Q(w.el,H,G):G()}else H()},Kt=(w,A)=>{let V;for(;w!==A;)V=p(w),o(w),w=V;o(A)},sn=(w,A,V)=>{const{bum:U,scope:$,job:H,subTree:X,um:Q,m:G,a:K}=w;og(G),og(K),U&&$l(U),$.stop(),H&&(H.flags|=8,Fe(X,w,A,V)),Q&&Jt(Q,A),Jt(()=>{w.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},St=(w,A,V,U=!1,$=!1,H=0)=>{for(let X=H;X<w.length;X++)Fe(w[X],A,V,U,$)},F=w=>{if(w.shapeFlag&6)return F(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const A=p(w.anchor||w.el),V=A&&A[Jb];return V?p(V):A};let te=!1;const J=(w,A,V)=>{w==null?A._vnode&&Fe(A._vnode,null,null,!0):P(A._vnode||null,w,A,null,null,null,V),A._vnode=w,te||(te=!0,Gm(),Qb(),te=!1)},re={p:P,um:Fe,m:ct,r:Ge,mt:we,mc:v,pc:_e,pbc:T,n:F,o:t};let Se,He;return{render:J,hydrate:Se,createApp:DS(J,Se)}}function Ju({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ro({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function HS(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gh(t,e,n=!1){const r=t.children,o=e.children;if(de(r)&&de(o))for(let i=0;i<r.length;i++){const s=r[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=Xr(o[i]),a.el=s.el),!n&&a.patchFlag!==-2&&gh(s,a)),a.type===Qc&&(a.el=s.el)}}function KS(t){const e=t.slice(),n=[0];let r,o,i,s,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(o=n[n.length-1],t[o]<u){e[r]=o,n.push(r);continue}for(i=0,s=n.length-1;i<s;)a=i+s>>1,t[n[a]]<u?i=a+1:s=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=e[s];return n}function S0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:S0(e)}function og(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const WS=Symbol.for("v-scx"),qS=()=>En(WS);function bn(t,e,n){return A0(t,e,n)}function A0(t,e,n=Ze){const{immediate:r,deep:o,flush:i,once:s}=n,a=yt({},n);let l;if(Yc)if(i==="sync"){const p=qS();l=p.__watcherHandles||(p.__watcherHandles=[])}else if(!e||r)a.once=!0;else{const p=()=>{};return p.stop=Kn,p.resume=Kn,p.pause=Kn,p}const u=Pt;a.call=(p,g,_)=>Nn(p,u,g,_);let d=!1;i==="post"?a.scheduler=p=>{Jt(p,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(p,g)=>{g?p():lh(p)}),a.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=lS(t,e,a);return l&&l.push(h),h}function GS(t,e,n){const r=this.proxy,o=lt(t)?t.includes(".")?C0(r,t):()=>r[t]:t.bind(r,r);let i;ve(e)?i=e:(i=e.handler,n=e);const s=ja(this),a=A0(o,i.bind(r),n);return s(),a}function C0(t,e){const n=e.split(".");return()=>{let r=t;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}const QS=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${In(e)}Modifiers`]||t[`${ni(e)}Modifiers`];function YS(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ze;let o=n;const i=e.startsWith("update:"),s=i&&QS(r,e.slice(7));s&&(s.trim&&(o=n.map(d=>lt(d)?d.trim():d)),s.number&&(o=n.map(tc)));let a,l=r[a=Ku(e)]||r[a=Ku(In(e))];!l&&i&&(l=r[a=Ku(ni(e))]),l&&Nn(l,t,6,o);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nn(u,t,6,o)}}function x0(t,e,n=!1){const r=e.emitsCache,o=r.get(t);if(o!==void 0)return o;const i=t.emits;let s={},a=!1;if(!ve(t)){const l=u=>{const d=x0(u,e,!0);d&&(a=!0,yt(s,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(tt(t)&&r.set(t,null),null):(de(i)?i.forEach(l=>s[l]=null):yt(s,i),tt(t)&&r.set(t,s),s)}function Gc(t,e){return!t||!Mc(e)?!1:(e=e.slice(2).replace(/Once$/,""),ze(t,e[0].toLowerCase()+e.slice(1))||ze(t,ni(e))||ze(t,e))}function Zu(t){const{type:e,vnode:n,proxy:r,withProxy:o,propsOptions:[i],slots:s,attrs:a,emit:l,render:u,renderCache:d,props:h,data:p,setupState:g,ctx:_,inheritAttrs:P}=t,k=oc(t);let N,O;try{if(n.shapeFlag&4){const L=o||r,W=L;N=Bn(u.call(W,L,d,h,g,p,_)),O=a}else{const L=e;N=Bn(L.length>1?L(h,{attrs:a,slots:s,emit:l}):L(h,null)),O=e.props?a:XS(a)}}catch(L){qs.length=0,zc(L,t,1),N=ue(Yt)}let R=N;if(O&&P!==!1){const L=Object.keys(O),{shapeFlag:W}=R;L.length&&W&7&&(i&&L.some(Qf)&&(O=JS(O,i)),R=vo(R,O,!1,!0))}return n.dirs&&(R=vo(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&Yo(R,n.transition),N=R,oc(k),N}const XS=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mc(n))&&((e||(e={}))[n]=t[n]);return e},JS=(t,e)=>{const n={};for(const r in t)(!Qf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ZS(t,e,n){const{props:r,children:o,component:i}=t,{props:s,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ig(r,s,u):!!s;if(l&8){const d=e.dynamicProps;for(let h=0;h<d.length;h++){const p=d[h];if(s[p]!==r[p]&&!Gc(u,p))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?ig(r,s,u):!0:!!s;return!1}function ig(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(e[i]!==t[i]&&!Gc(n,i))return!0}return!1}function eA({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const P0=t=>t.__isSuspense;function tA(t,e){e&&e.pendingBranch?de(t)?e.effects.push(...t):e.effects.push(t):dS(t)}const We=Symbol.for("v-fgt"),Qc=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),jl=Symbol.for("v-stc"),qs=[];let un=null;function j(t=!1){qs.push(un=t?null:[])}function nA(){qs.pop(),un=qs[qs.length-1]||null}let ua=1;function sg(t){ua+=t,t<0&&un&&(un.hasOnce=!0)}function k0(t){return t.dynamicChildren=ua>0?un||xi:null,nA(),ua>0&&un&&un.push(t),t}function ne(t,e,n,r,o,i){return k0(x(t,e,n,r,o,i,!0))}function Be(t,e,n,r,o){return k0(ue(t,e,n,r,o,!0))}function da(t){return t?t.__v_isVNode===!0:!1}function $o(t,e){return t.type===e.type&&t.key===e.key}const O0=({key:t})=>t??null,Bl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?lt(t)||Bt(t)||ve(t)?{i:It,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,r=0,o=null,i=t===We?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&O0(e),ref:e&&Bl(e),scopeId:Xb,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:It};return a?(yh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=lt(n)?8:16),ua>0&&!s&&un&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&un.push(l),l}const ue=rA;function rA(t,e=null,n=null,r=0,o=null,i=!1){if((!t||t===f0)&&(t=Yt),da(t)){const a=vo(t,e,!0);return n&&yh(a,n),ua>0&&!i&&un&&(a.shapeFlag&6?un[un.indexOf(t)]=a:un.push(a)),a.patchFlag=-2,a}if(pA(t)&&(t=t.__vccOpts),e){e=oA(e);let{class:a,style:l}=e;a&&!lt(a)&&(e.class=cn(a)),tt(l)&&(sh(l)&&!de(l)&&(l=yt({},l)),e.style=Ho(l))}const s=lt(t)?1:P0(t)?128:Zb(t)?64:tt(t)?4:ve(t)?2:0;return x(t,e,n,r,o,s,i,!0)}function oA(t){return t?sh(t)||v0(t)?yt({},t):t:null}function vo(t,e,n=!1,r=!1){const{props:o,ref:i,patchFlag:s,children:a,transition:l}=t,u=e?ee(o||{},e):o,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&O0(u),ref:e&&e.ref?n&&i?de(i)?i.concat(Bl(e)):[i,Bl(e)]:Bl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vo(t.ssContent),ssFallback:t.ssFallback&&vo(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Yo(d,l.clone(d)),d}function it(t=" ",e=0){return ue(Qc,null,t,e)}function iA(t,e){const n=ue(jl,null,t);return n.staticCount=e,n}function Zt(t="",e=!1){return e?(j(),Be(Yt,null,t)):ue(Yt,null,t)}function Bn(t){return t==null||typeof t=="boolean"?ue(Yt):de(t)?ue(We,null,t.slice()):da(t)?Xr(t):ue(Qc,null,String(t))}function Xr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vo(t)}function yh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(de(e))n=16;else if(typeof e=="object")if(r&65){const o=e.default;o&&(o._c&&(o._d=!1),yh(t,o()),o._c&&(o._d=!0));return}else{n=32;const o=e._;!o&&!v0(e)?e._ctx=It:o===3&&It&&(It.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ve(e)?(e={default:e,_ctx:It},n=32):(e=String(e),r&64?(n=16,e=[it(e)]):n=8);t.children=e,t.shapeFlag|=n}function ee(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const o in r)if(o==="class")e.class!==r.class&&(e.class=cn([e.class,r.class]));else if(o==="style")e.style=Ho([e.style,r.style]);else if(Mc(o)){const i=e[o],s=r[o];s&&i!==s&&!(de(i)&&i.includes(s))&&(e[o]=i?[].concat(i,s):s)}else o!==""&&(e[o]=r[o])}return e}function Fn(t,e,n,r=null){Nn(t,e,7,[n,r])}const sA=m0();let aA=0;function lA(t,e,n){const r=t.type,o=(e?e.appContext:t.appContext)||sA,i={uid:aA++,vnode:t,type:r,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_0(r,o),emitsOptions:x0(r,o),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:r.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=YS.bind(null,i),t.ce&&t.ce(i),i}let Pt=null;const vh=()=>Pt||It;let sc,Qd;{const t=Tb(),e=(n,r)=>{let o;return(o=t[n])||(o=t[n]=[]),o.push(r),i=>{o.length>1?o.forEach(s=>s(i)):o[0](i)}};sc=e("__VUE_INSTANCE_SETTERS__",n=>Pt=n),Qd=e("__VUE_SSR_SETTERS__",n=>Yc=n)}const ja=t=>{const e=Pt;return sc(t),t.scope.on(),()=>{t.scope.off(),sc(e)}},ag=()=>{Pt&&Pt.scope.off(),sc(null)};function R0(t){return t.vnode.shapeFlag&4}let Yc=!1;function cA(t,e=!1,n=!1){e&&Qd(e);const{props:r,children:o}=t.vnode,i=R0(t);VS(t,r,i,e),US(t,o,n);const s=i?uA(t,e):void 0;return e&&Qd(!1),s}function uA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,xS);const{setup:r}=n;if(r){const o=t.setupContext=r.length>1?fA(t):null,i=ja(t);Eo();const s=Ua(r,t,0,[t.props,o]);if(Io(),i(),_b(s)){if(Ni(t)||s0(t),s.then(ag,ag),e)return s.then(a=>{lg(t,a,e)}).catch(a=>{zc(a,t,0)});t.asyncDep=s}else lg(t,s,e)}else N0(t,e)}function lg(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:tt(e)&&(t.setupState=Wb(e)),N0(t,n)}let cg;function N0(t,e,n){const r=t.type;if(!t.render){if(!e&&cg&&!r.render){const o=r.template||ph(t).template;if(o){const{isCustomElement:i,compilerOptions:s}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=yt(yt({isCustomElement:i,delimiters:a},s),l);r.render=cg(o,u)}}t.render=r.render||Kn}{const o=ja(t);Eo();try{PS(t)}finally{Io(),o()}}}const dA={get(t,e){return zt(t,"get",""),t[e]}};function fA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,dA),slots:t.slots,emit:t.emit,expose:e}}function Xc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Wb(tS(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ws)return Ws[n](t)},has(e,n){return n in e||n in Ws}})):t.proxy}function hA(t,e=!0){return ve(t)?t.displayName||t.name:t.name||e&&t.__name}function pA(t){return ve(t)&&"__vccOpts"in t}const Et=(t,e)=>sS(t,e,Yc);function Jc(t,e,n){const r=arguments.length;return r===2?tt(e)&&!de(e)?da(e)?ue(t,null,[e]):ue(t,e):ue(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&da(n)&&(n=[n]),ue(t,e,n))}const mA="3.5.11";/**
* @vue/runtime-dom v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yd;const ug=typeof window<"u"&&window.trustedTypes;if(ug)try{Yd=ug.createPolicy("vue",{createHTML:t=>t})}catch{}const L0=Yd?t=>Yd.createHTML(t):t=>t,gA="http://www.w3.org/2000/svg",yA="http://www.w3.org/1998/Math/MathML",ur=typeof document<"u"?document:null,dg=ur&&ur.createElement("template"),vA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const o=e==="svg"?ur.createElementNS(gA,t):e==="mathml"?ur.createElementNS(yA,t):n?ur.createElement(t,{is:n}):ur.createElement(t);return t==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:t=>ur.createTextNode(t),createComment:t=>ur.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ur.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,o,i){const s=n?n.previousSibling:e.lastChild;if(o&&(o===i||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{dg.innerHTML=L0(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=dg.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Hr="transition",Ss="animation",zi=Symbol("_vtc"),D0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},V0=yt({},n0,D0),bA=t=>(t.displayName="Transition",t.props=V0,t),os=bA((t,{slots:e})=>Jc(yS,M0(t),e)),No=(t,e=[])=>{de(t)?t.forEach(n=>n(...e)):t&&t(...e)},fg=t=>t?de(t)?t.some(e=>e.length>1):t.length>1:!1;function M0(t){const e={};for(const S in t)S in D0||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:o,enterFromClass:i=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=s,appearToClass:d=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,_=_A(o),P=_&&_[0],k=_&&_[1],{onBeforeEnter:N,onEnter:O,onEnterCancelled:R,onLeave:L,onLeaveCancelled:W,onBeforeAppear:q=N,onAppear:I=O,onAppearCancelled:v=R}=e,b=(S,E,we)=>{Gr(S,E?d:a),Gr(S,E?u:s),we&&we()},T=(S,E)=>{S._isLeaving=!1,Gr(S,h),Gr(S,g),Gr(S,p),E&&E()},C=S=>(E,we)=>{const xe=S?I:O,Ie=()=>b(E,S,we);No(xe,[E,Ie]),hg(()=>{Gr(E,S?l:i),cr(E,S?d:a),fg(xe)||pg(E,r,P,Ie)})};return yt(e,{onBeforeEnter(S){No(N,[S]),cr(S,i),cr(S,s)},onBeforeAppear(S){No(q,[S]),cr(S,l),cr(S,u)},onEnter:C(!1),onAppear:C(!0),onLeave(S,E){S._isLeaving=!0;const we=()=>T(S,E);cr(S,h),cr(S,p),F0(),hg(()=>{S._isLeaving&&(Gr(S,h),cr(S,g),fg(L)||pg(S,r,k,we))}),No(L,[S,we])},onEnterCancelled(S){b(S,!1),No(R,[S])},onAppearCancelled(S){b(S,!0),No(v,[S])},onLeaveCancelled(S){T(S),No(W,[S])}})}function _A(t){if(t==null)return null;if(tt(t))return[ed(t.enter),ed(t.leave)];{const e=ed(t);return[e,e]}}function ed(t){return IT(t)}function cr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[zi]||(t[zi]=new Set)).add(e)}function Gr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[zi];n&&(n.delete(e),n.size||(t[zi]=void 0))}function hg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let wA=0;function pg(t,e,n,r){const o=t._endId=++wA,i=()=>{o===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:s,timeout:a,propCount:l}=$0(t,e);if(!s)return r();const u=s+"end";let d=0;const h=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++d>=l&&h()};setTimeout(()=>{d<l&&h()},a+1),t.addEventListener(u,p)}function $0(t,e){const n=window.getComputedStyle(t),r=_=>(n[_]||"").split(", "),o=r(`${Hr}Delay`),i=r(`${Hr}Duration`),s=mg(o,i),a=r(`${Ss}Delay`),l=r(`${Ss}Duration`),u=mg(a,l);let d=null,h=0,p=0;e===Hr?s>0&&(d=Hr,h=s,p=i.length):e===Ss?u>0&&(d=Ss,h=u,p=l.length):(h=Math.max(s,u),d=h>0?s>u?Hr:Ss:null,p=d?d===Hr?i.length:l.length:0);const g=d===Hr&&/\b(transform|all)(,|$)/.test(r(`${Hr}Property`).toString());return{type:d,timeout:h,propCount:p,hasTransform:g}}function mg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>gg(n)+gg(t[r])))}function gg(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function F0(){return document.body.offsetHeight}function EA(t,e,n){const r=t[zi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ac=Symbol("_vod"),U0=Symbol("_vsh"),Ba={beforeMount(t,{value:e},{transition:n}){t[ac]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):As(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),As(t,!0),r.enter(t)):r.leave(t,()=>{As(t,!1)}):As(t,e))},beforeUnmount(t,{value:e}){As(t,e)}};function As(t,e){t.style.display=e?t[ac]:"none",t[U0]=!e}const IA=Symbol(""),TA=/(^|;)\s*display\s*:/;function SA(t,e,n){const r=t.style,o=lt(n);let i=!1;if(n&&!o){if(e)if(lt(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();n[a]==null&&zl(r,a,"")}else for(const s in e)n[s]==null&&zl(r,s,"");for(const s in n)s==="display"&&(i=!0),zl(r,s,n[s])}else if(o){if(e!==n){const s=r[IA];s&&(n+=";"+s),r.cssText=n,i=TA.test(n)}}else e&&t.removeAttribute("style");ac in t&&(t[ac]=i?r.display:"",t[U0]&&(r.display="none"))}const yg=/\s*!important$/;function zl(t,e,n){if(de(n))n.forEach(r=>zl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=AA(t,e);yg.test(n)?t.setProperty(ni(r),n.replace(yg,""),"important"):t[r]=n}}const vg=["Webkit","Moz","ms"],td={};function AA(t,e){const n=td[e];if(n)return n;let r=In(e);if(r!=="filter"&&r in t)return td[e]=r;r=Uc(r);for(let o=0;o<vg.length;o++){const i=vg[o]+r;if(i in t)return td[e]=i}return e}const bg="http://www.w3.org/1999/xlink";function _g(t,e,n,r,o,i=PT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(bg,e.slice(6,e.length)):t.setAttributeNS(bg,e,n):n==null||i&&!Ab(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Zn(n)?String(n):n)}function wg(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?L0(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const s=o==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(s!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const s=typeof t[e];s==="boolean"?n=Ab(n):n==null&&s==="string"?(n="",i=!0):s==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Zr(t,e,n,r){t.addEventListener(e,n,r)}function CA(t,e,n,r){t.removeEventListener(e,n,r)}const Eg=Symbol("_vei");function xA(t,e,n,r,o=null){const i=t[Eg]||(t[Eg]={}),s=i[e];if(r&&s)s.value=r;else{const[a,l]=PA(e);if(r){const u=i[e]=RA(r,o);Zr(t,a,u,l)}else s&&(CA(t,a,s,l),i[e]=void 0)}}const Ig=/(?:Once|Passive|Capture)$/;function PA(t){let e;if(Ig.test(t)){e={};let r;for(;r=t.match(Ig);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ni(t.slice(2)),e]}let nd=0;const kA=Promise.resolve(),OA=()=>nd||(kA.then(()=>nd=0),nd=Date.now());function RA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Nn(NA(r,n.value),e,5,[r])};return n.value=t,n.attached=OA(),n}function NA(t,e){if(de(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>o=>!o._stopped&&r&&r(o))}else return e}const Tg=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,LA=(t,e,n,r,o,i)=>{const s=o==="svg";e==="class"?EA(t,r,s):e==="style"?SA(t,n,r):Mc(e)?Qf(e)||xA(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DA(t,e,r,s))?(wg(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&_g(t,e,r,s,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!lt(r))?wg(t,In(e),r):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),_g(t,e,r,s))};function DA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Tg(e)&&ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Tg(e)&&lt(n)?!1:e in t}const j0=new WeakMap,B0=new WeakMap,lc=Symbol("_moveCb"),Sg=Symbol("_enterCb"),VA=t=>(delete t.props.mode,t),MA=VA({name:"TransitionGroup",props:yt({},V0,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=vh(),r=t0();let o,i;return c0(()=>{if(!o.length)return;const s=t.moveClass||`${t.name||"v"}-move`;if(!BA(o[0].el,n.vnode.el,s))return;o.forEach(FA),o.forEach(UA);const a=o.filter(jA);F0(),a.forEach(l=>{const u=l.el,d=u.style;cr(u,s),d.transform=d.webkitTransform=d.transitionDuration="";const h=u[lc]=p=>{p&&p.target!==u||(!p||/transform$/.test(p.propertyName))&&(u.removeEventListener("transitionend",h),u[lc]=null,Gr(u,s))};u.addEventListener("transitionend",h)})}),()=>{const s=$e(t),a=M0(s);let l=s.tag||We;if(o=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(o.push(d),Yo(d,ca(d,a,r,n)),j0.set(d,d.el.getBoundingClientRect()))}i=e.default?ch(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&Yo(d,ca(d,a,r,n))}return ue(l,null,i)}}}),$A=MA;function FA(t){const e=t.el;e[lc]&&e[lc](),e[Sg]&&e[Sg]()}function UA(t){B0.set(t,t.el.getBoundingClientRect())}function jA(t){const e=j0.get(t),n=B0.get(t),r=e.left-n.left,o=e.top-n.top;if(r||o){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${o}px)`,i.transitionDuration="0s",t}}function BA(t,e,n){const r=t.cloneNode(),o=t[zi];o&&o.forEach(a=>{a.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=$0(r);return i.removeChild(r),s}const Hi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return de(e)?n=>$l(e,n):e};function zA(t){t.target.composing=!0}function Ag(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ir=Symbol("_assign"),hr={created(t,{modifiers:{lazy:e,trim:n,number:r}},o){t[Ir]=Hi(o);const i=r||o.props&&o.props.type==="number";Zr(t,e?"change":"input",s=>{if(s.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=tc(a)),t[Ir](a)}),n&&Zr(t,"change",()=>{t.value=t.value.trim()}),e||(Zr(t,"compositionstart",zA),Zr(t,"compositionend",Ag),Zr(t,"change",Ag))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:o,number:i}},s){if(t[Ir]=Hi(s),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?tc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||o&&t.value.trim()===l)||(t.value=l))}},HA={created(t,{value:e},n){t.checked=Bi(e,n.props.value),t[Ir]=Hi(n),Zr(t,"change",()=>{t[Ir](fa(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Ir]=Hi(r),e!==n&&(t.checked=Bi(e,r.props.value))}},Gs={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const o=$c(e);Zr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,s=>s.selected).map(s=>n?tc(fa(s)):fa(s));t[Ir](t.multiple?o?new Set(i):i:i[0]),t._assigning=!0,Hc(()=>{t._assigning=!1})}),t[Ir]=Hi(r)},mounted(t,{value:e}){Cg(t,e)},beforeUpdate(t,e,n){t[Ir]=Hi(n)},updated(t,{value:e}){t._assigning||Cg(t,e)}};function Cg(t,e){const n=t.multiple,r=de(e);if(!(n&&!r&&!$c(e))){for(let o=0,i=t.options.length;o<i;o++){const s=t.options[o],a=fa(s);if(n)if(r){const l=typeof a;l==="string"||l==="number"?s.selected=e.some(u=>String(u)===String(a)):s.selected=OT(e,a)>-1}else s.selected=e.has(a);else if(Bi(fa(s),e)){t.selectedIndex!==o&&(t.selectedIndex=o);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function fa(t){return"_value"in t?t._value:t.value}const KA=["ctrl","shift","alt","meta"],WA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>KA.some(n=>t[`${n}Key`]&&!e.includes(n))},bh=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(o,...i)=>{for(let s=0;s<e.length;s++){const a=WA[e[s]];if(a&&a(o,e))return}return t(o,...i)})},qA=yt({patchProp:LA},vA);let xg;function GA(){return xg||(xg=BS(qA))}const QA=(...t)=>{const e=GA().createApp(...t),{mount:n}=e;return e.mount=r=>{const o=XA(r);if(!o)return;const i=e._component;!ve(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const s=n(o,!1,YA(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},e};function YA(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function XA(t){return lt(t)?document.querySelector(t):t}function Pg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function pr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Pg(Object(n),!0).forEach(function(r){Xt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function JA(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ZA(t){var e=JA(t,"string");return typeof e=="symbol"?e:e+""}function cc(t){"@babel/helpers - typeof";return cc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cc(t)}function Xt(t,e,n){return e=ZA(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function eC(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function tC(t,e){if(t==null)return{};var n=eC(t,e),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var nC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z0={exports:{}};(function(t){(function(e){var n=function(N,O,R){if(!u(O)||h(O)||p(O)||g(O)||l(O))return O;var L,W=0,q=0;if(d(O))for(L=[],q=O.length;W<q;W++)L.push(n(N,O[W],R));else{L={};for(var I in O)Object.prototype.hasOwnProperty.call(O,I)&&(L[N(I,R)]=n(N,O[I],R))}return L},r=function(N,O){O=O||{};var R=O.separator||"_",L=O.split||/(?=[A-Z])/;return N.split(L).join(R)},o=function(N){return _(N)?N:(N=N.replace(/[\-_\s]+(.)?/g,function(O,R){return R?R.toUpperCase():""}),N.substr(0,1).toLowerCase()+N.substr(1))},i=function(N){var O=o(N);return O.substr(0,1).toUpperCase()+O.substr(1)},s=function(N,O){return r(N,O).toLowerCase()},a=Object.prototype.toString,l=function(N){return typeof N=="function"},u=function(N){return N===Object(N)},d=function(N){return a.call(N)=="[object Array]"},h=function(N){return a.call(N)=="[object Date]"},p=function(N){return a.call(N)=="[object RegExp]"},g=function(N){return a.call(N)=="[object Boolean]"},_=function(N){return N=N-0,N===N},P=function(N,O){var R=O&&"process"in O?O.process:O;return typeof R!="function"?N:function(L,W){return R(L,N,W)}},k={camelize:o,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(N,O){return n(P(o,O),N)},decamelizeKeys:function(N,O){return n(P(s,O),N,O)},pascalizeKeys:function(N,O){return n(P(i,O),N)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=k:e.humps=k})(nC)})(z0);var rC=z0.exports,oC=["class","style"];function iC(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),o=rC.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[o]=i,e},{})}function sC(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function H0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return H0(l)}),o=Object.keys(t.attributes||{}).reduce(function(l,u){var d=t.attributes[u];switch(u){case"class":l.class=sC(d);break;case"style":l.style=iC(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,a=tC(n,oC);return Jc(t.tag,pr(pr(pr({},e),{},{class:o.class,style:pr(pr({},o.style),s)},o.attrs),a),r)}var K0=!1;try{K0=!0}catch{}function aC(){if(!K0&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function rd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Xt({},t,e):{}}function lC(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(Xt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Xt(Xt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function kg(t){if(t&&cc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Fd.icon)return Fd.icon(t);if(t===null)return null;if(cc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var cC=uh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,o=Et(function(){return kg(e.icon)}),i=Et(function(){return rd("classes",lC(e))}),s=Et(function(){return rd("transform",typeof e.transform=="string"?Fd.transform(e.transform):e.transform)}),a=Et(function(){return rd("mask",kg(e.mask))}),l=Et(function(){return yT(o.value,pr(pr(pr(pr({},i.value),s.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});bn(l,function(d){if(!d)return aC("Could not find one or more icon(s)",o.value,a.value)},{immediate:!0});var u=Et(function(){return l.value?H0(l.value.abstract[0],{},r):null});return function(){return u.value}}});const uC={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},dC={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},fC={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};var hC=Object.defineProperty,Og=Object.getOwnPropertySymbols,pC=Object.prototype.hasOwnProperty,mC=Object.prototype.propertyIsEnumerable,Rg=(t,e,n)=>e in t?hC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,gC=(t,e)=>{for(var n in e||(e={}))pC.call(e,n)&&Rg(t,n,e[n]);if(Og)for(var n of Og(e))mC.call(e,n)&&Rg(t,n,e[n]);return t};function rr(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Xd(t,e,n=new WeakSet){if(t===e)return!0;if(!t||!e||typeof t!="object"||typeof e!="object"||n.has(t)||n.has(e))return!1;n.add(t).add(e);let r=Array.isArray(t),o=Array.isArray(e),i,s,a;if(r&&o){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!Xd(t[i],e[i],n))return!1;return!0}if(r!=o)return!1;let l=t instanceof Date,u=e instanceof Date;if(l!=u)return!1;if(l&&u)return t.getTime()==e.getTime();let d=t instanceof RegExp,h=e instanceof RegExp;if(d!=h)return!1;if(d&&h)return t.toString()==e.toString();let p=Object.keys(t);if(s=p.length,s!==Object.keys(e).length)return!1;for(i=s;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[i]))return!1;for(i=s;i--!==0;)if(a=p[i],!Xd(t[a],e[a],n))return!1;return!0}function yC(t,e){return Xd(t,e)}function Zc(t){return!!(t&&t.constructor&&t.call&&t.apply)}function Ne(t){return!rr(t)}function dr(t,e){if(!t||!e)return null;try{const n=t[e];if(Ne(n))return n}catch{}if(Object.keys(t).length){if(Zc(e))return e(t);if(e.indexOf(".")===-1)return t[e];{let n=e.split("."),r=t;for(let o=0,i=n.length;o<i;++o){if(r==null)return null;r=r[n[o]]}return r}}return null}function W0(t,e,n){return n?dr(t,n)===dr(e,n):yC(t,e)}function Ng(t,e){let n=-1;if(Ne(t))try{n=t.findLastIndex(e)}catch{n=t.lastIndexOf([...t].reverse().find(e))}return n}function er(t,e=!0){return t instanceof Object&&t.constructor===Object&&(e||Object.keys(t).length!==0)}function _n(t,...e){return Zc(t)?t(...e):t}function tn(t,e=!0){return typeof t=="string"&&(e||t!=="")}function xn(t){return tn(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function _h(t,e="",n={}){const r=xn(e).split("."),o=r.shift();return o?er(t)?_h(_n(t[Object.keys(t).find(i=>xn(i)===o)||""],n),r.join("."),n):void 0:_n(t,n)}function eu(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}function q0(t){return Ne(t)&&!isNaN(t)}function vC(t=""){return Ne(t)&&t.length===1&&!!t.match(/\S| /)}function gr(t,e){if(e){const n=e.test(t);return e.lastIndex=0,n}return!1}function bC(...t){const e=(n={},r={})=>{const o=gC({},n);return Object.keys(r).forEach(i=>{er(r[i])&&i in n&&er(n[i])?o[i]=e(n[i],r[i]):o[i]=r[i]}),o};return t.reduce((n,r,o)=>o===0?r:e(n,r),{})}function Qs(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function yn(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){const n={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let r in n)t=t.replace(n[r],r)}return t}function _C(t){return tn(t,!1)?t[0].toUpperCase()+t.slice(1):t}function G0(t){return tn(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,n)=>n===0?e:"-"+e.toLowerCase()).toLowerCase():t}function Lg(t){return tn(t)?t.replace(/[A-Z]/g,(e,n)=>n===0?e:"."+e.toLowerCase()).toLowerCase():t}function tu(){const t=new Map;return{on(e,n){let r=t.get(e);return r?r.push(n):r=[n],t.set(e,r),this},off(e,n){let r=t.get(e);return r&&r.splice(r.indexOf(n)>>>0,1),this},emit(e,n){let r=t.get(e);r&&r.slice().map(o=>{o(n)})},clear(){t.clear()}}}var wC=Object.defineProperty,EC=Object.defineProperties,IC=Object.getOwnPropertyDescriptors,uc=Object.getOwnPropertySymbols,Q0=Object.prototype.hasOwnProperty,Y0=Object.prototype.propertyIsEnumerable,Dg=(t,e,n)=>e in t?wC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Pn=(t,e)=>{for(var n in e||(e={}))Q0.call(e,n)&&Dg(t,n,e[n]);if(uc)for(var n of uc(e))Y0.call(e,n)&&Dg(t,n,e[n]);return t},od=(t,e)=>EC(t,IC(e)),ar=(t,e)=>{var n={};for(var r in t)Q0.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&uc)for(var r of uc(t))e.indexOf(r)<0&&Y0.call(t,r)&&(n[r]=t[r]);return n},TC=tu(),Cn=TC;function Vg(t,e){eu(t)?t.push(...e||[]):er(t)&&Object.assign(t,e)}function SC(t){return er(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Mg(t,e=""){return["opacity","z-index","line-height","font-weight","flex","flex-grow","flex-shrink","order"].some(r=>e.endsWith(r))?t:`${t}`.trim().split(" ").map(i=>q0(i)?`${i}px`:i).join(" ")}function AC(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Jd(t="",e=""){return AC(`${tn(t,!1)&&tn(e,!1)?`${t}-`:t}${e}`)}function X0(t="",e=""){return`--${Jd(t,e)}`}function J0(t,e="",n="",r=[],o){if(tn(t)){const i=/{([^}]*)}/g,s=t.trim();if(gr(s,i)){const a=s.replaceAll(i,d=>{const p=d.replace(/{|}/g,"").split(".").filter(g=>!r.some(_=>gr(g,_)));return`var(${X0(n,G0(p.join("-")))}${Ne(o)?`, ${o}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,u=/var\([^)]+\)/g;return gr(a.replace(u,"0"),l)?`calc(${a})`:a}return Mg(s,e)}else if(q0(t))return Mg(t,e)}function CC(t,e,n){tn(e,!1)&&t.push(`${e}:${n};`)}function vi(t,e){return t?`${t}{${e}}`:""}var Ys=(...t)=>xC(Ye.getTheme(),...t),xC=(t={},e,n,r)=>{if(e){const{variable:o,options:i}=Ye.defaults||{},{prefix:s,transform:a}=(t==null?void 0:t.options)||i||{},u=gr(e,/{([^}]*)}/g)?e:`{${e}}`;return r==="value"||rr(r)&&a==="strict"?Ye.getTokenValue(e):J0(u,void 0,s,[o.excludedKeyRegex],n)}return""};function PC(t,e={}){const n=Ye.defaults.variable,{prefix:r=n.prefix,selector:o=n.selector,excludedKeyRegex:i=n.excludedKeyRegex}=e,s=(u,d="")=>Object.entries(u).reduce((h,[p,g])=>{const _=gr(p,i)?Jd(d):Jd(d,G0(p)),P=SC(g);if(er(P)){const{variables:k,tokens:N}=s(P,_);Vg(h.tokens,N),Vg(h.variables,k)}else h.tokens.push((r?_.replace(`${r}-`,""):_).replaceAll("-",".")),CC(h.variables,X0(_),J0(P,_,r,[i]));return h},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(t,r);return{value:a,tokens:l,declarations:a.join(""),css:vi(o,a.join(""))}}var Sn={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){const e=Object.keys(this.rules).filter(n=>n!=="custom").map(n=>this.rules[n]);return[t].flat().map(n=>{var r;return(r=e.map(o=>o.resolve(n)).find(o=>o.matched))!=null?r:this.rules.custom.resolve(n)})}},_toVariables(t,e){return PC(t,{prefix:e==null?void 0:e.prefix})},getCommon({name:t="",theme:e={},params:n,set:r,defaults:o}){var i,s,a,l,u,d,h;const{preset:p,options:g}=e;let _,P,k,N,O,R,L;if(Ne(p)&&g.transform!=="strict"){const{primitive:W,semantic:q,extend:I}=p,v=q||{},{colorScheme:b}=v,T=ar(v,["colorScheme"]),C=I||{},{colorScheme:S}=C,E=ar(C,["colorScheme"]),we=b||{},{dark:xe}=we,Ie=ar(we,["dark"]),me=S||{},{dark:_e}=me,mt=ar(me,["dark"]),ht=Ne(W)?this._toVariables({primitive:W},g):{},ct=Ne(T)?this._toVariables({semantic:T},g):{},Fe=Ne(Ie)?this._toVariables({light:Ie},g):{},Ge=Ne(xe)?this._toVariables({dark:xe},g):{},Kt=Ne(E)?this._toVariables({semantic:E},g):{},sn=Ne(mt)?this._toVariables({light:mt},g):{},St=Ne(_e)?this._toVariables({dark:_e},g):{},[F,te]=[(i=ht.declarations)!=null?i:"",ht.tokens],[J,re]=[(s=ct.declarations)!=null?s:"",ct.tokens||[]],[Se,He]=[(a=Fe.declarations)!=null?a:"",Fe.tokens||[]],[w,A]=[(l=Ge.declarations)!=null?l:"",Ge.tokens||[]],[V,U]=[(u=Kt.declarations)!=null?u:"",Kt.tokens||[]],[$,H]=[(d=sn.declarations)!=null?d:"",sn.tokens||[]],[X,Q]=[(h=St.declarations)!=null?h:"",St.tokens||[]];_=this.transformCSS(t,F,"light","variable",g,r,o),P=te;const G=this.transformCSS(t,`${J}${Se}`,"light","variable",g,r,o),K=this.transformCSS(t,`${w}`,"dark","variable",g,r,o);k=`${G}${K}`,N=[...new Set([...re,...He,...A])];const ce=this.transformCSS(t,`${V}${$}color-scheme:light`,"light","variable",g,r,o),Z=this.transformCSS(t,`${X}color-scheme:dark`,"dark","variable",g,r,o);O=`${ce}${Z}`,R=[...new Set([...U,...H,...Q])],L=_n(p.css,{dt:Ys})}return{primitive:{css:_,tokens:P},semantic:{css:k,tokens:N},global:{css:O,tokens:R},style:L}},getPreset({name:t="",preset:e={},options:n,params:r,set:o,defaults:i,selector:s}){var a,l,u;let d,h,p;if(Ne(e)&&n.transform!=="strict"){const g=t.replace("-directive",""),_=e,{colorScheme:P,extend:k,css:N}=_,O=ar(_,["colorScheme","extend","css"]),R=k||{},{colorScheme:L}=R,W=ar(R,["colorScheme"]),q=P||{},{dark:I}=q,v=ar(q,["dark"]),b=L||{},{dark:T}=b,C=ar(b,["dark"]),S=Ne(O)?this._toVariables({[g]:Pn(Pn({},O),W)},n):{},E=Ne(v)?this._toVariables({[g]:Pn(Pn({},v),C)},n):{},we=Ne(I)?this._toVariables({[g]:Pn(Pn({},I),T)},n):{},[xe,Ie]=[(a=S.declarations)!=null?a:"",S.tokens||[]],[me,_e]=[(l=E.declarations)!=null?l:"",E.tokens||[]],[mt,ht]=[(u=we.declarations)!=null?u:"",we.tokens||[]],ct=this.transformCSS(g,`${xe}${me}`,"light","variable",n,o,i,s),Fe=this.transformCSS(g,mt,"dark","variable",n,o,i,s);d=`${ct}${Fe}`,h=[...new Set([...Ie,..._e,...ht])],p=_n(N,{dt:Ys})}return{css:d,tokens:h,style:p}},getPresetC({name:t="",theme:e={},params:n,set:r,defaults:o}){var i;const{preset:s,options:a}=e,l=(i=s==null?void 0:s.components)==null?void 0:i[t];return this.getPreset({name:t,preset:l,options:a,params:n,set:r,defaults:o})},getPresetD({name:t="",theme:e={},params:n,set:r,defaults:o}){var i;const s=t.replace("-directive",""),{preset:a,options:l}=e,u=(i=a==null?void 0:a.directives)==null?void 0:i[s];return this.getPreset({name:s,preset:u,options:l,params:n,set:r,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,e){var n;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?e.options.darkModeSelector:(n=t.darkModeSelector)!=null?n:e.options.darkModeSelector):[]},getLayerOrder(t,e={},n,r){const{cssLayer:o}=e;return o?`@layer ${_n(o.order||"primeui",n)}`:""},getCommonStyleSheet({name:t="",theme:e={},params:n,props:r={},set:o,defaults:i}){const s=this.getCommon({name:t,theme:e,params:n,set:o,defaults:i}),a=Object.entries(r).reduce((l,[u,d])=>l.push(`${u}="${d}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,d])=>{if(d!=null&&d.css){const h=Qs(d==null?void 0:d.css),p=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${h}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:e={},params:n,props:r={},set:o,defaults:i}){var s;const a={name:t,theme:e,params:n,set:o,defaults:i},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(r).reduce((d,[h,p])=>d.push(`${h}="${p}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${Qs(l)}</style>`:""},createTokens(t={},e,n="",r="",o={}){return Object.entries(t).forEach(([i,s])=>{const a=gr(i,e.variable.excludedKeyRegex)?n:n?`${n}.${Lg(i)}`:Lg(i),l=r?`${r}.${i}`:i;er(s)?this.createTokens(s,e,a,l,o):(o[a]||(o[a]={paths:[],computed(u,d={}){var h,p;return this.paths.length===1?(h=this.paths[0])==null?void 0:h.computed(this.paths[0].scheme,d.binding):u&&u!=="none"?(p=this.paths.find(g=>g.scheme===u))==null?void 0:p.computed(u,d.binding):this.paths.map(g=>g.computed(g.scheme,d[g.scheme]))}}),o[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(u,d={}){const h=/{([^}]*)}/g;let p=s;if(d.name=this.path,d.binding||(d.binding={}),gr(s,h)){const _=s.trim().replaceAll(h,N=>{var O;const R=N.replace(/{|}/g,""),L=(O=o[R])==null?void 0:O.computed(u,d);return eu(L)&&L.length===2?`light-dark(${L[0].value},${L[1].value})`:L==null?void 0:L.value}),P=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,k=/var\([^)]+\)/g;p=gr(_.replace(k,"0"),P)?`calc(${_})`:_}return rr(d.binding)&&delete d.binding,{colorScheme:u,path:this.path,paths:d,value:p.includes("undefined")?void 0:p}}}))}),o},getTokenValue(t,e,n){var r;const i=(l=>l.split(".").filter(d=>!gr(d.toLowerCase(),n.variable.excludedKeyRegex)).join("."))(e),s=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,a=[(r=t[i])==null?void 0:r.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},u)=>{const d=u,{colorScheme:h}=d,p=ar(d,["colorScheme"]);return l[h]=p,l},void 0)},getSelectorRule(t,e,n,r){return n==="class"||n==="attr"?vi(Ne(e)?`${t}${e},${t} ${e}`:t,r):vi(t,Ne(e)?vi(e,r):r)},transformCSS(t,e,n,r,o={},i,s,a){if(Ne(e)){const{cssLayer:l}=o;if(r!=="style"){const u=this.getColorSchemeOption(o,s);e=n==="dark"?u.reduce((d,{type:h,selector:p})=>(Ne(p)&&(d+=p.includes("[CSS]")?p.replace("[CSS]",e):this.getSelectorRule(p,a,h,e)),d),""):vi(a??":root",e)}if(l){const u={name:"primeui",order:"primeui"};er(l)&&(u.name=_n(l.name,{name:t,type:r})),Ne(u.name)&&(e=vi(`@layer ${u.name}`,e),i==null||i.layerNames(u.name))}return e}return""}},Ye={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){const{theme:e}=t;e&&(this._theme=od(Pn({},e),{options:Pn(Pn({},this.defaults.options),e.options)}),this._tokens=Sn.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),Cn.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=od(Pn({},this.theme),{preset:t}),this._tokens=Sn.createTokens(t,this.defaults),this.clearLoadedStyleNames(),Cn.emit("preset:change",t),Cn.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=od(Pn({},this.theme),{options:t}),this.clearLoadedStyleNames(),Cn.emit("options:change",t),Cn.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return Sn.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",e){return Sn.getCommon({name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",e){const n={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Sn.getPresetC(n)},getDirective(t="",e){const n={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Sn.getPresetD(n)},getCustomPreset(t="",e,n,r){const o={name:t,preset:e,options:this.options,selector:n,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Sn.getPreset(o)},getLayerOrderCSS(t=""){return Sn.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",e,n="style",r){return Sn.transformCSS(t,e,r,n,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",e,n={}){return Sn.getCommonStyleSheet({name:t,theme:this.theme,params:e,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,e,n={}){return Sn.getStyleSheet({name:t,theme:this.theme,params:e,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),Cn.emit(`theme:${e}:load`,t),!this._loadingStyles.size&&Cn.emit("theme:load"))}};function kC(t,e){return t?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}function OC(t,e){if(t&&e){const n=r=>{kC(t,r)||(t.classList?t.classList.add(r):t.className+=" "+r)};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(n))}}function dc(t){for(const e of document==null?void 0:document.styleSheets)try{for(const n of e==null?void 0:e.cssRules)for(const r of n==null?void 0:n.style)if(t.test(r))return{name:r,value:n.style.getPropertyValue(r).trim()}}catch{}return null}function id(t,e){if(t&&e){const n=r=>{t.classList?t.classList.remove(r):t.className=t.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(n))}}function Z0(t){let e={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),e}function e1(){let t=window,e=document,n=e.documentElement,r=e.getElementsByTagName("body")[0],o=t.innerWidth||n.clientWidth||r.clientWidth,i=t.innerHeight||n.clientHeight||r.clientHeight;return{width:o,height:i}}function RC(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function NC(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function LC(t,e,n=!0){var r,o,i,s;if(t){const a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Z0(t),l=a.height,u=a.width,d=e.offsetHeight,h=e.offsetWidth,p=e.getBoundingClientRect(),g=NC(),_=RC(),P=e1();let k,N,O="top";p.top+d+l>P.height?(k=p.top+g-l,O="bottom",k<0&&(k=g)):k=d+p.top+g,p.left+u>P.width?N=Math.max(0,p.left+_+h-u):N=p.left+_,t.style.top=k+"px",t.style.left=N+"px",t.style.transformOrigin=O,n&&(t.style.marginTop=O==="bottom"?`calc(${(o=(r=dc(/-anchor-gutter$/))==null?void 0:r.value)!=null?o:"2px"} * -1)`:(s=(i=dc(/-anchor-gutter$/))==null?void 0:i.value)!=null?s:"")}}function DC(t,e){t&&(typeof e=="string"?t.style.cssText=e:Object.entries(e||{}).forEach(([n,r])=>t.style[n]=r))}function t1(t,e){return t instanceof HTMLElement?t.offsetWidth:0}function VC(t,e,n=!0){var r,o,i,s;if(t){const a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Z0(t),l=e.offsetHeight,u=e.getBoundingClientRect(),d=e1();let h,p,g="top";u.top+l+a.height>d.height?(h=-1*a.height,g="bottom",u.top+h<0&&(h=-1*u.top)):h=l,a.width>d.width?p=u.left*-1:u.left+a.width>d.width?p=(u.left+a.width-d.width)*-1:p=0,t.style.top=h+"px",t.style.left=p+"px",t.style.transformOrigin=g,n&&(t.style.marginTop=g==="bottom"?`calc(${(o=(r=dc(/-anchor-gutter$/))==null?void 0:r.value)!=null?o:"2px"} * -1)`:(s=(i=dc(/-anchor-gutter$/))==null?void 0:i.value)!=null?s:"")}}function za(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function fc(t,e={}){if(za(t)){const n=(r,o)=>{var i,s;const a=(i=t==null?void 0:t.$attrs)!=null&&i[r]?[(s=t==null?void 0:t.$attrs)==null?void 0:s[r]]:[];return[o].flat().reduce((l,u)=>{if(u!=null){const d=typeof u;if(d==="string"||d==="number")l.push(u);else if(d==="object"){const h=Array.isArray(u)?n(r,u):Object.entries(u).map(([p,g])=>r==="style"&&(g||g===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${g}`:g?p:void 0);l=h.length?l.concat(h.filter(p=>!!p)):l}}return l},a)};Object.entries(e).forEach(([r,o])=>{if(o!=null){const i=r.match(/^on(.+)/);i?t.addEventListener(i[1].toLowerCase(),o):r==="p-bind"?fc(t,o):(o=r==="class"?[...new Set(n("class",o))].join(" ").trim():r==="style"?n("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=o),t.setAttribute(r,o))}})}}function MC(t,e={},...n){{const r=document.createElement(t);return fc(r,e),r.append(...n),r}}function $C(t,e){return za(t)?Array.from(t.querySelectorAll(e)):[]}function nu(t,e){return za(t)?t.matches(e)?t:t.querySelector(e):null}function Kr(t,e){t&&document.activeElement!==t&&t.focus(e)}function FC(t,e){if(za(t)){const n=t.getAttribute(e);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}function wh(t,e=""){let n=$C(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),r=[];for(let o of n)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&r.push(o);return r}function UC(t,e){const n=wh(t,e);return n.length>0?n[0]:null}function Fo(t){if(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e}return 0}function n1(t){if(t){let e=t.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function jC(t,e){const n=wh(t,e);return n.length>0?n[n.length-1]:null}function BC(t){if(t){let e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function zC(t,e){return t?t.offsetHeight:0}function r1(t,e=[]){const n=n1(t);return n===null?e:r1(n,e.concat([n]))}function HC(t){let e=[];if(t){let n=r1(t);const r=/(auto|scroll)/,o=i=>{try{let s=window.getComputedStyle(i,null);return r.test(s.getPropertyValue("overflow"))||r.test(s.getPropertyValue("overflowX"))||r.test(s.getPropertyValue("overflowY"))}catch{return!1}};for(let i of n){let s=i.nodeType===1&&i.dataset.scrollselectors;if(s){let a=s.split(",");for(let l of a){let u=nu(i,l);u&&o(u)&&e.push(u)}}i.nodeType!==9&&o(i)&&e.push(i)}}return e}function KC(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&n1(t))}function Uo(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e}return 0}function WC(){return/(android)/i.test(navigator.userAgent)}function Eh(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function hc(t){return!!(t&&t.offsetParent!=null)}function qC(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function o1(t,e="",n){za(t)&&n!==null&&n!==void 0&&t.setAttribute(e,n)}var Cl={};function Ih(t="pui_id_"){return Cl.hasOwnProperty(t)||(Cl[t]=0),Cl[t]++,`${t}${Cl[t]}`}function GC(){let t=[];const e=(s,a,l=999)=>{const u=o(s,a,l),d=u.value+(u.key===s?0:l)+1;return t.push({key:s,value:d}),d},n=s=>{t=t.filter(a=>a.value!==s)},r=(s,a)=>o(s).value,o=(s,a,l=0)=>[...t].reverse().find(u=>!0)||{key:s,value:l},i=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:i,set:(s,a,l)=>{a&&(a.style.zIndex=String(e(s,!0,l)))},clear:s=>{s&&(n(i(s)),s.style.zIndex="")},getCurrent:s=>r(s)}}var Di=GC(),Mt={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function $g(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=QC(t))||e){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(u){throw u},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var u=n.next();return s=u.done,u},e:function(u){a=!0,i=u},f:function(){try{s||n.return==null||n.return()}finally{if(a)throw i}}}}function QC(t,e){if(t){if(typeof t=="string")return Fg(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fg(t,e):void 0}}function Fg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var YC={filter:function(e,n,r,o,i){var s=[];if(!e)return s;var a=$g(e),l;try{for(a.s();!(l=a.n()).done;){var u=l.value;if(typeof u=="string"){if(this.filters[o](u,r,i)){s.push(u);continue}}else{var d=$g(n),h;try{for(d.s();!(h=d.n()).done;){var p=h.value,g=dr(u,p);if(this.filters[o](g,r,i)){s.push(u);break}}}catch(_){d.e(_)}finally{d.f()}}}}catch(_){a.e(_)}finally{a.f()}return s},filters:{startsWith:function(e,n,r){if(n==null||n==="")return!0;if(e==null)return!1;var o=yn(n.toString()).toLocaleLowerCase(r),i=yn(e.toString()).toLocaleLowerCase(r);return i.slice(0,o.length)===o},contains:function(e,n,r){if(n==null||n==="")return!0;if(e==null)return!1;var o=yn(n.toString()).toLocaleLowerCase(r),i=yn(e.toString()).toLocaleLowerCase(r);return i.indexOf(o)!==-1},notContains:function(e,n,r){if(n==null||n==="")return!0;if(e==null)return!1;var o=yn(n.toString()).toLocaleLowerCase(r),i=yn(e.toString()).toLocaleLowerCase(r);return i.indexOf(o)===-1},endsWith:function(e,n,r){if(n==null||n==="")return!0;if(e==null)return!1;var o=yn(n.toString()).toLocaleLowerCase(r),i=yn(e.toString()).toLocaleLowerCase(r);return i.indexOf(o,i.length-o.length)!==-1},equals:function(e,n,r){return n==null||n===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():yn(e.toString()).toLocaleLowerCase(r)==yn(n.toString()).toLocaleLowerCase(r)},notEquals:function(e,n,r){return n==null||n===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():yn(e.toString()).toLocaleLowerCase(r)!=yn(n.toString()).toLocaleLowerCase(r)},in:function(e,n){if(n==null||n.length===0)return!0;for(var r=0;r<n.length;r++)if(W0(e,n[r]))return!0;return!1},between:function(e,n){return n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1]},lt:function(e,n){return n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n},lte:function(e,n){return n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n},gt:function(e,n){return n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n},gte:function(e,n){return n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n},dateIs:function(e,n){return n==null?!0:e==null?!1:e.toDateString()===n.toDateString()},dateIsNot:function(e,n){return n==null?!0:e==null?!1:e.toDateString()!==n.toDateString()},dateBefore:function(e,n){return n==null?!0:e==null?!1:e.getTime()<n.getTime()},dateAfter:function(e,n){return n==null?!0:e==null?!1:e.getTime()>n.getTime()}},register:function(e,n){this.filters[e]=n}};function ha(t){"@babel/helpers - typeof";return ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ha(t)}function Ug(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function jg(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ug(Object(n),!0).forEach(function(r){XC(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ug(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function XC(t,e,n){return(e=JC(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function JC(t){var e=ZC(t,"string");return ha(e)=="symbol"?e:e+""}function ZC(t,e){if(ha(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ha(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function e2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;vh()?qc(t):e?t():Hc(t)}var t2=0;function n2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Er(!1),r=Er(t),o=Er(null),i=Eh()?window.document:void 0,s=e.document,a=s===void 0?i:s,l=e.immediate,u=l===void 0?!0:l,d=e.manual,h=d===void 0?!1:d,p=e.name,g=p===void 0?"style_".concat(++t2):p,_=e.id,P=_===void 0?void 0:_,k=e.media,N=k===void 0?void 0:k,O=e.nonce,R=O===void 0?void 0:O,L=e.first,W=L===void 0?!1:L,q=e.onMounted,I=q===void 0?void 0:q,v=e.onUpdated,b=v===void 0?void 0:v,T=e.onLoad,C=T===void 0?void 0:T,S=e.props,E=S===void 0?{}:S,we=function(){},xe=function(_e){var mt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var ht=jg(jg({},E),mt),ct=ht.name||g,Fe=ht.id||P,Ge=ht.nonce||R;o.value=a.querySelector('style[data-primevue-style-id="'.concat(ct,'"]'))||a.getElementById(Fe)||a.createElement("style"),o.value.isConnected||(r.value=_e||t,fc(o.value,{type:"text/css",id:Fe,media:N,nonce:Ge}),W?a.head.prepend(o.value):a.head.appendChild(o.value),o1(o.value,"data-primevue-style-id",ct),fc(o.value,ht),o.value.onload=function(Kt){return C==null?void 0:C(Kt,{name:ct})},I==null||I(ct)),!n.value&&(we=bn(r,function(Kt){o.value.textContent=Kt,b==null||b(ct)},{immediate:!0}),n.value=!0)}},Ie=function(){!a||!n.value||(we(),KC(o.value)&&a.head.removeChild(o.value),n.value=!1)};return u&&!h&&e2(xe),{id:P,name:g,el:o,css:r,unload:Ie,load:xe,isLoaded:oh(n)}}function pa(t){"@babel/helpers - typeof";return pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pa(t)}function Bg(t,e){return s2(t)||i2(t,e)||o2(t,e)||r2()}function r2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o2(t,e){if(t){if(typeof t=="string")return zg(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?zg(t,e):void 0}}function zg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function i2(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,s,a=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,e!==0)for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){u=!0,o=d}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw o}}return a}}function s2(t){if(Array.isArray(t))return t}function Hg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function sd(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hg(Object(n),!0).forEach(function(r){a2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function a2(t,e,n){return(e=l2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l2(t){var e=c2(t,"string");return pa(e)=="symbol"?e:e+""}function c2(t,e){if(pa(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(pa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var u2=function(e){var n=e.dt;return`
* {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(n("disabled.opacity"),`;
}

.pi {
    font-size: `).concat(n("icon.size"),`;
}

.p-icon {
    width: `).concat(n("icon.size"),`;
    height: `).concat(n("icon.size"),`;
}

.p-overlay-mask {
    background: `).concat(n("mask.background"),`;
    color: `).concat(n("mask.color"),`;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(n("mask.transition.duration"),` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(n("mask.transition.duration"),` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(n("mask.background"),`;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(n("mask.background"),`;
    }
    to {
        background: transparent;
    }
}
`)},d2=function(e){var n=e.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(n("scrollbar.width"),`;
}
`)},f2={},h2={},je={name:"base",css:d2,theme:u2,classes:f2,inlineStyles:h2,load:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(i){return i},o=r(_n(e,{dt:Ys}));return Ne(o)?n2(Qs(o),sd({name:this.name},n)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadTheme:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.load(this.theme,n,function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return Ye.transformCSS(n.name||e.name,"".concat(o).concat(r))})},getCommonTheme:function(e){return Ye.getCommon(this.name,e)},getComponentTheme:function(e){return Ye.getComponent(this.name,e)},getDirectiveTheme:function(e){return Ye.getDirective(this.name,e)},getPresetTheme:function(e,n,r){return Ye.getCustomPreset(this.name,e,n,r)},getLayerOrderThemeCSS:function(){return Ye.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=_n(this.css,{dt:Ys})||"",o=Qs("".concat(r).concat(e)),i=Object.entries(n).reduce(function(s,a){var l=Bg(a,2),u=l[0],d=l[1];return s.push("".concat(u,'="').concat(d,'"'))&&s},[]).join(" ");return Ne(o)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(i,">").concat(o,"</style>"):""}return""},getCommonThemeStyleSheet:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ye.getCommonStyleSheet(this.name,e,n)},getThemeStyleSheet:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[Ye.getStyleSheet(this.name,e,n)];if(this.theme){var o=this.name==="base"?"global-style":"".concat(this.name,"-style"),i=_n(this.theme,{dt:Ys}),s=Qs(Ye.transformCSS(o,i)),a=Object.entries(n).reduce(function(l,u){var d=Bg(u,2),h=d[0],p=d[1];return l.push("".concat(h,'="').concat(p,'"'))&&l},[]).join(" ");Ne(s)&&r.push('<style type="text/css" data-primevue-style-id="'.concat(o,'" ').concat(a,">").concat(s,"</style>"))}return r.join("")},extend:function(e){return sd(sd({},this),{},{css:void 0,theme:void 0},e)}},Ti=tu();function ma(t){"@babel/helpers - typeof";return ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ma(t)}function Kg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function xl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Kg(Object(n),!0).forEach(function(r){p2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function p2(t,e,n){return(e=m2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m2(t){var e=g2(t,"string");return ma(e)=="symbol"?e:e+""}function g2(t,e){if(ma(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ma(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var y2={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[Mt.STARTS_WITH,Mt.CONTAINS,Mt.NOT_CONTAINS,Mt.ENDS_WITH,Mt.EQUALS,Mt.NOT_EQUALS],numeric:[Mt.EQUALS,Mt.NOT_EQUALS,Mt.LESS_THAN,Mt.LESS_THAN_OR_EQUAL_TO,Mt.GREATER_THAN,Mt.GREATER_THAN_OR_EQUAL_TO],date:[Mt.DATE_IS,Mt.DATE_IS_NOT,Mt.DATE_BEFORE,Mt.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},v2=Symbol();function b2(t,e){var n={config:rs(e)};return t.config.globalProperties.$primevue=n,t.provide(v2,n),_2(),w2(t,n),n}var Si=[];function _2(){Cn.clear(),Si.forEach(function(t){return t==null?void 0:t()}),Si=[]}function w2(t,e){var n=Er(!1),r=function(){var u;if(((u=e.config)===null||u===void 0?void 0:u.theme)!=="none"&&!Ye.isStyleNameLoaded("common")){var d,h,p=((d=je.getCommonTheme)===null||d===void 0?void 0:d.call(je))||{},g=p.primitive,_=p.semantic,P=p.global,k=p.style,N={nonce:(h=e.config)===null||h===void 0||(h=h.csp)===null||h===void 0?void 0:h.nonce};je.load(g==null?void 0:g.css,xl({name:"primitive-variables"},N)),je.load(_==null?void 0:_.css,xl({name:"semantic-variables"},N)),je.load(P==null?void 0:P.css,xl({name:"global-variables"},N)),je.loadTheme(xl({name:"global-style"},N),k),Ye.setLoadedStyleName("common")}};Cn.on("theme:change",function(l){n.value||(t.config.globalProperties.$primevue.config.theme=l,n.value=!0)});var o=bn(e.config,function(l,u){Ti.emit("config:change",{newValue:l,oldValue:u})},{immediate:!0,deep:!0}),i=bn(function(){return e.config.ripple},function(l,u){Ti.emit("config:ripple:change",{newValue:l,oldValue:u})},{immediate:!0,deep:!0}),s=bn(function(){return e.config.theme},function(l,u){n.value||Ye.setTheme(l),e.config.unstyled||r(),n.value=!1,Ti.emit("config:theme:change",{newValue:l,oldValue:u})},{immediate:!0,deep:!0}),a=bn(function(){return e.config.unstyled},function(l,u){!l&&e.config.theme&&r(),Ti.emit("config:unstyled:change",{newValue:l,oldValue:u})},{immediate:!0,deep:!0});Si.push(o),Si.push(i),Si.push(s),Si.push(a)}var E2={install:function(e,n){var r=bC(y2,n);b2(e,r)}},eo={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}},Wg=je.extend({name:"common"});function ga(t){"@babel/helpers - typeof";return ga=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ga(t)}function I2(t){return a1(t)||T2(t)||s1(t)||i1()}function T2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Pl(t,e){return a1(t)||S2(t,e)||s1(t,e)||i1()}function i1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s1(t,e){if(t){if(typeof t=="string")return qg(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qg(t,e):void 0}}function qg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function S2(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,s,a=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){u=!0,o=d}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw o}}return a}}function a1(t){if(Array.isArray(t))return t}function Gg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Ae(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Gg(Object(n),!0).forEach(function(r){Ns(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ns(t,e,n){return(e=A2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function A2(t){var e=C2(t,"string");return ga(e)=="symbol"?e:e+""}function C2(t,e){if(ga(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ga(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Vn={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e){var n=this;e?(this._loadScopedThemeStyles(e),this._themeChangeListener(function(){return n._loadScopedThemeStyles(e)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,$attrSelector:void 0,beforeCreate:function(){var e,n,r,o,i,s,a,l,u,d,h,p=(e=this.pt)===null||e===void 0?void 0:e._usept,g=p?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,_=p?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(o=_||g)===null||o===void 0||(o=o.hooks)===null||o===void 0||(i=o.onBeforeCreate)===null||i===void 0||i.call(o);var P=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,k=P?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,N=P?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(u=this.$primevue)===null||u===void 0||(u=u.config)===null||u===void 0?void 0:u.pt;(d=N||k)===null||d===void 0||(d=d[this.$.type.name])===null||d===void 0||(d=d.hooks)===null||d===void 0||(h=d.onBeforeCreate)===null||h===void 0||h.call(d),this.$attrSelector=Ih("pc")},created:function(){this._hook("onCreated")},beforeMount:function(){this.rootEl=nu(this.$el,'[data-pc-name="'.concat(xn(this.$.type.name),'"]')),this.rootEl&&(this.$attrSelector&&!this.rootEl.hasAttribute(this.$attrSelector)&&this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=Ae({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));n==null||n(),r==null||r()}},_mergeProps:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return Zc(e)?e.apply(void 0,r):ee.apply(void 0,r)},_loadStyles:function(){var e=this,n=function(){eo.isStyleNameLoaded("base")||(je.loadCSS(e.$styleOptions),e._loadGlobalStyles(),eo.setLoadedStyleName("base")),e._loadThemeStyles()};n(),this._themeChangeListener(n)},_loadCoreStyles:function(){var e,n;!eo.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(n=this.$style)!==null&&n!==void 0&&n.name&&(Wg.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),eo.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Ne(e)&&je.load(e,Ae({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,n;if(!(this.isUnstyled||this.$theme==="none")){if(!Ye.isStyleNameLoaded("common")){var r,o,i=((r=this.$style)===null||r===void 0||(o=r.getCommonTheme)===null||o===void 0?void 0:o.call(r))||{},s=i.primitive,a=i.semantic,l=i.global,u=i.style;je.load(s==null?void 0:s.css,Ae({name:"primitive-variables"},this.$styleOptions)),je.load(a==null?void 0:a.css,Ae({name:"semantic-variables"},this.$styleOptions)),je.load(l==null?void 0:l.css,Ae({name:"global-variables"},this.$styleOptions)),je.loadTheme(Ae({name:"global-style"},this.$styleOptions),u),Ye.setLoadedStyleName("common")}if(!Ye.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(n=this.$style)!==null&&n!==void 0&&n.name){var d,h,p,g,_=((d=this.$style)===null||d===void 0||(h=d.getComponentTheme)===null||h===void 0?void 0:h.call(d))||{},P=_.css,k=_.style;(p=this.$style)===null||p===void 0||p.load(P,Ae({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(g=this.$style)===null||g===void 0||g.loadTheme(Ae({name:"".concat(this.$style.name,"-style")},this.$styleOptions),k),Ye.setLoadedStyleName(this.$style.name)}if(!Ye.isStyleNameLoaded("layer-order")){var N,O,R=(N=this.$style)===null||N===void 0||(O=N.getLayerOrderThemeCSS)===null||O===void 0?void 0:O.call(N);je.load(R,Ae({name:"layer-order",first:!0},this.$styleOptions)),Ye.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var n,r,o,i=((n=this.$style)===null||n===void 0||(r=n.getPresetTheme)===null||r===void 0?void 0:r.call(n,e,"[".concat(this.$attrSelector,"]")))||{},s=i.css,a=(o=this.$style)===null||o===void 0?void 0:o.load(s,Ae({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=a.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};eo.clearLoadedStyleNames(),Cn.on("theme:change",e)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var n;return this[e]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[e])},_getOptionValue:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return _h(e,n,r)},_getPTValue:function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(r)&&!!o[r.split(".")[0]],a=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},l=a.mergeSections,u=l===void 0?!0:l,d=a.mergeProps,h=d===void 0?!1:d,p=i?s?this._useGlobalPT(this._getPTClassValue,r,o):this._useDefaultPT(this._getPTClassValue,r,o):void 0,g=s?void 0:this._getPTSelf(n,this._getPTClassValue,r,Ae(Ae({},o),{},{global:p||{}})),_=this._getPTDatasets(r);return u||!u&&g?h?this._mergeProps(h,p,g,_):Ae(Ae(Ae({},p),g),_):Ae(Ae({},g),_)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return ee(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(r)),this._usePT.apply(this,[this.$_attrsPT].concat(r)))},_getPTDatasets:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o="data-pc-",i=r==="root"&&Ne((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return r!=="transition"&&Ae(Ae({},r==="root"&&Ae(Ae(Ns({},"".concat(o,"name"),xn(i?(n=this.pt)===null||n===void 0?void 0:n["data-pc-section"]:this.$.type.name)),i&&Ns({},"".concat(o,"extend"),xn(this.$.type.name))),Eh()&&Ns({},"".concat(this.$attrSelector),""))),{},Ns({},"".concat(o,"section"),xn(r)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return tn(e)||eu(e)?{class:e}:e},_getPT:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,i=function(a){var l,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=o?o(a):a,h=xn(r),p=xn(n.$name);return(l=u?h!==p?d==null?void 0:d[h]:void 0:d==null?void 0:d[h])!==null&&l!==void 0?l:d};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e,!0)},_usePT:function(e,n,r,o){var i=function(P){return n(P,r,o)};if(e!=null&&e.hasOwnProperty("_usept")){var s,a=e._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},l=a.mergeSections,u=l===void 0?!0:l,d=a.mergeProps,h=d===void 0?!1:d,p=i(e.originalValue),g=i(e.value);return p===void 0&&g===void 0?void 0:tn(g)?g:tn(p)?p:u||!u&&g?h?this._mergeProps(h,p,g):Ae(Ae({},p),g):g}return i(e)},_useGlobalPT:function(e,n,r){return this._usePT(this.globalPT,e,n,r)},_useDefaultPT:function(e,n,r){return this._usePT(this.defaultPT,e,n,r)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,Ae(Ae({},this.$params),n))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ee(this.$_attrsWithoutPT,this.ptm(e,n))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,n,Ae({instance:this},r),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,Ae(Ae({},this.$params),n))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var o=this._getOptionValue(this.$style.inlineStyles,e,Ae(Ae({},this.$params),r)),i=this._getOptionValue(Wg.inlineStyles,e,Ae(Ae({},this.$params),r));return[i,o]}}},computed:{globalPT:function(){var e,n=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return _n(r,{instance:n})})},defaultPT:function(){var e,n=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return n._getOptionValue(r,n.$name,Ae({},n.$params))||_n(r,Ae({},n.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return Ae(Ae({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=Pl(e,1),r=n[0];return r==null?void 0:r.startsWith("pt:")}).reduce(function(e,n){var r=Pl(n,2),o=r[0],i=r[1],s=o.split(":"),a=I2(s),l=a.slice(1);return l==null||l.reduce(function(u,d,h,p){return!u[d]&&(u[d]=h===p.length-1?i:{}),u[d]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=Pl(e,1),r=n[0];return!(r!=null&&r.startsWith("pt:"))}).reduce(function(e,n){var r=Pl(n,2),o=r[0],i=r[1];return e[o]=i,e},{})}}},x2=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,P2=je.extend({name:"baseicon",css:x2});function ya(t){"@babel/helpers - typeof";return ya=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ya(t)}function Qg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Yg(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qg(Object(n),!0).forEach(function(r){k2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function k2(t,e,n){return(e=O2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O2(t){var e=R2(t,"string");return ya(e)=="symbol"?e:e+""}function R2(t,e){if(ya(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ya(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Dr={name:"BaseIcon",extends:Vn,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:P2,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=rr(this.label);return Yg(Yg({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},ru={name:"SpinnerIcon",extends:Dr};function N2(t,e,n,r,o,i){return j(),ne("svg",ee({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[x("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}ru.render=N2;var L2=function(e){var n=e.dt;return`
.p-badge {
    display: inline-flex;
    border-radius: `.concat(n("badge.border.radius"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(n("badge.padding"),`;
    background: `).concat(n("badge.primary.background"),`;
    color: `).concat(n("badge.primary.color"),`;
    font-size: `).concat(n("badge.font.size"),`;
    font-weight: `).concat(n("badge.font.weight"),`;
    min-width: `).concat(n("badge.min.width"),`;
    height: `).concat(n("badge.height"),`;
}

.p-badge-dot {
    width: `).concat(n("badge.dot.size"),`;
    min-width: `).concat(n("badge.dot.size"),`;
    height: `).concat(n("badge.dot.size"),`;
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(n("badge.secondary.background"),`;
    color: `).concat(n("badge.secondary.color"),`;
}

.p-badge-success {
    background: `).concat(n("badge.success.background"),`;
    color: `).concat(n("badge.success.color"),`;
}

.p-badge-info {
    background: `).concat(n("badge.info.background"),`;
    color: `).concat(n("badge.info.color"),`;
}

.p-badge-warn {
    background: `).concat(n("badge.warn.background"),`;
    color: `).concat(n("badge.warn.color"),`;
}

.p-badge-danger {
    background: `).concat(n("badge.danger.background"),`;
    color: `).concat(n("badge.danger.color"),`;
}

.p-badge-contrast {
    background: `).concat(n("badge.contrast.background"),`;
    color: `).concat(n("badge.contrast.color"),`;
}

.p-badge-sm {
    font-size: `).concat(n("badge.sm.font.size"),`;
    min-width: `).concat(n("badge.sm.min.width"),`;
    height: `).concat(n("badge.sm.height"),`;
}

.p-badge-lg {
    font-size: `).concat(n("badge.lg.font.size"),`;
    min-width: `).concat(n("badge.lg.min.width"),`;
    height: `).concat(n("badge.lg.height"),`;
}

.p-badge-xl {
    font-size: `).concat(n("badge.xl.font.size"),`;
    min-width: `).concat(n("badge.xl.min.width"),`;
    height: `).concat(n("badge.xl.height"),`;
}
`)},D2={root:function(e){var n=e.props,r=e.instance;return["p-badge p-component",{"p-badge-circle":Ne(n.value)&&String(n.value).length===1,"p-badge-dot":rr(n.value)&&!r.$slots.default,"p-badge-sm":n.size==="small","p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warn":n.severity==="warn","p-badge-danger":n.severity==="danger","p-badge-secondary":n.severity==="secondary","p-badge-contrast":n.severity==="contrast"}]}},V2=je.extend({name:"badge",theme:L2,classes:D2}),M2={name:"BaseBadge",extends:Vn,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:V2,provide:function(){return{$pcBadge:this,$parentInstance:this}}},l1={name:"Badge",extends:M2,inheritAttrs:!1};function $2(t,e,n,r,o,i){return j(),ne("span",ee({class:t.cx("root")},t.ptmi("root")),[Qe(t.$slots,"default",{},function(){return[it(Oe(t.value),1)]})],16)}l1.render=$2;function va(t){"@babel/helpers - typeof";return va=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},va(t)}function Xg(t,e){return B2(t)||j2(t,e)||U2(t,e)||F2()}function F2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U2(t,e){if(t){if(typeof t=="string")return Jg(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Jg(t,e):void 0}}function Jg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function j2(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,s,a=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,e!==0)for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){u=!0,o=d}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw o}}return a}}function B2(t){if(Array.isArray(t))return t}function Zg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Le(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Zg(Object(n),!0).forEach(function(r){Zd(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Zg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Zd(t,e,n){return(e=z2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function z2(t){var e=H2(t,"string");return va(e)=="symbol"?e:e+""}function H2(t,e){if(va(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(va(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Te={_getMeta:function(){return[er(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],_n(er(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,n){var r,o,i;return(r=(e==null||(o=e.instance)===null||o===void 0?void 0:o.$primevue)||(n==null||(i=n.ctx)===null||i===void 0||(i=i.appContext)===null||i===void 0||(i=i.config)===null||i===void 0||(i=i.globalProperties)===null||i===void 0?void 0:i.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:_h,_getPTValue:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=function(){var O=Te._getOptionValue.apply(Te,arguments);return tn(O)||eu(O)?{class:O}:O},u=((e=r.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((n=r.$primevueConfig)===null||n===void 0?void 0:n.ptOptions)||{},d=u.mergeSections,h=d===void 0?!0:d,p=u.mergeProps,g=p===void 0?!1:p,_=a?Te._useDefaultPT(r,r.defaultPT(),l,i,s):void 0,P=Te._usePT(r,Te._getPT(o,r.$name),l,i,Le(Le({},s),{},{global:_||{}})),k=Te._getPTDatasets(r,i);return h||!h&&P?g?Te._mergeProps(r,g,_,P,k):Le(Le(Le({},_),P),k):Le(Le({},P),k)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r="data-pc-";return Le(Le({},n==="root"&&Zd({},"".concat(r,"name"),xn(e.$name))),{},Zd({},"".concat(r,"section"),xn(n)))},_getPT:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=function(s){var a,l=r?r(s):s,u=xn(n);return(a=l==null?void 0:l[u])!==null&&a!==void 0?a:l};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,s=function(k){return r(k,o,i)};if(n!=null&&n.hasOwnProperty("_usept")){var a,l=n._usept||((a=e.$primevueConfig)===null||a===void 0?void 0:a.ptOptions)||{},u=l.mergeSections,d=u===void 0?!0:u,h=l.mergeProps,p=h===void 0?!1:h,g=s(n.originalValue),_=s(n.value);return g===void 0&&_===void 0?void 0:tn(_)?_:tn(g)?g:d||!d&&_?p?Te._mergeProps(e,p,g,_):Le(Le({},g),_):_}return s(n)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return Te._usePT(e,n,r,o,i)},_loadStyles:function(e,n,r){var o,i=Te._getConfig(n,r),s={nonce:i==null||(o=i.csp)===null||o===void 0?void 0:o.nonce};Te._loadCoreStyles(e.$instance,s),Te._loadThemeStyles(e.$instance,s),Te._loadScopedThemeStyles(e.$instance,s),Te._themeChangeListener(function(){return Te._loadThemeStyles(e.$instance,s)})},_loadCoreStyles:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!eo.isStyleNameLoaded((e=r.$style)===null||e===void 0?void 0:e.name)&&(n=r.$style)!==null&&n!==void 0&&n.name){var i;je.loadCSS(o),(i=r.$style)===null||i===void 0||i.loadCSS(o),eo.setLoadedStyleName(r.$style.name)}},_loadThemeStyles:function(){var e,n,r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(!(o!=null&&o.isUnstyled()||(o==null||(e=o.theme)===null||e===void 0?void 0:e.call(o))==="none")){if(!Ye.isStyleNameLoaded("common")){var s,a,l=((s=o.$style)===null||s===void 0||(a=s.getCommonTheme)===null||a===void 0?void 0:a.call(s))||{},u=l.primitive,d=l.semantic,h=l.global,p=l.style;je.load(u==null?void 0:u.css,Le({name:"primitive-variables"},i)),je.load(d==null?void 0:d.css,Le({name:"semantic-variables"},i)),je.load(h==null?void 0:h.css,Le({name:"global-variables"},i)),je.loadTheme(Le({name:"global-style"},i),p),Ye.setLoadedStyleName("common")}if(!Ye.isStyleNameLoaded((n=o.$style)===null||n===void 0?void 0:n.name)&&(r=o.$style)!==null&&r!==void 0&&r.name){var g,_,P,k,N=((g=o.$style)===null||g===void 0||(_=g.getDirectiveTheme)===null||_===void 0?void 0:_.call(g))||{},O=N.css,R=N.style;(P=o.$style)===null||P===void 0||P.load(O,Le({name:"".concat(o.$style.name,"-variables")},i)),(k=o.$style)===null||k===void 0||k.loadTheme(Le({name:"".concat(o.$style.name,"-style")},i),R),Ye.setLoadedStyleName(o.$style.name)}if(!Ye.isStyleNameLoaded("layer-order")){var L,W,q=(L=o.$style)===null||L===void 0||(W=L.getLayerOrderThemeCSS)===null||W===void 0?void 0:W.call(L);je.load(q,Le({name:"layer-order",first:!0},i)),Ye.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=e.preset();if(r&&e.$attrSelector){var o,i,s,a=((o=e.$style)===null||o===void 0||(i=o.getPresetTheme)===null||i===void 0?void 0:i.call(o,r,"[".concat(e.$attrSelector,"]")))||{},l=a.css,u=(s=e.$style)===null||s===void 0?void 0:s.load(l,Le({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},n));e.scopedStyleEl=u.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};eo.clearLoadedStyleNames(),Cn.on("theme:change",e)},_hook:function(e,n,r,o,i,s){var a,l,u="on".concat(_C(n)),d=Te._getConfig(o,i),h=r==null?void 0:r.$instance,p=Te._usePT(h,Te._getPT(o==null||(a=o.value)===null||a===void 0?void 0:a.pt,e),Te._getOptionValue,"hooks.".concat(u)),g=Te._useDefaultPT(h,d==null||(l=d.pt)===null||l===void 0||(l=l.directives)===null||l===void 0?void 0:l[e],Te._getOptionValue,"hooks.".concat(u)),_={el:r,binding:o,vnode:i,prevVnode:s};p==null||p(h,_),g==null||g(h,_)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return Zc(e)?e.apply(void 0,r):ee.apply(void 0,r)},_extend:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(s,a,l,u,d){var h,p,g,_;a._$instances=a._$instances||{};var P=Te._getConfig(l,u),k=a._$instances[e]||{},N=rr(k)?Le(Le({},n),n==null?void 0:n.methods):{};a._$instances[e]=Le(Le({},k),{},{$name:e,$host:a,$binding:l,$modifiers:l==null?void 0:l.modifiers,$value:l==null?void 0:l.value,$el:k.$el||a||void 0,$style:Le({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},n==null?void 0:n.style),$primevueConfig:P,$attrSelector:(h=a.$pd)===null||h===void 0||(h=h[e])===null||h===void 0?void 0:h.attrSelector,defaultPT:function(){return Te._getPT(P==null?void 0:P.pt,void 0,function(R){var L;return R==null||(L=R.directives)===null||L===void 0?void 0:L[e]})},isUnstyled:function(){var R,L;return((R=a.$instance)===null||R===void 0||(R=R.$binding)===null||R===void 0||(R=R.value)===null||R===void 0?void 0:R.unstyled)!==void 0?(L=a.$instance)===null||L===void 0||(L=L.$binding)===null||L===void 0||(L=L.value)===null||L===void 0?void 0:L.unstyled:P==null?void 0:P.unstyled},theme:function(){var R;return(R=a.$instance)===null||R===void 0||(R=R.$primevueConfig)===null||R===void 0?void 0:R.theme},preset:function(){var R;return(R=a.$instance)===null||R===void 0||(R=R.$binding)===null||R===void 0||(R=R.value)===null||R===void 0?void 0:R.dt},ptm:function(){var R,L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Te._getPTValue(a.$instance,(R=a.$instance)===null||R===void 0||(R=R.$binding)===null||R===void 0||(R=R.value)===null||R===void 0?void 0:R.pt,L,Le({},W))},ptmo:function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",W=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Te._getPTValue(a.$instance,R,L,W,!1)},cx:function(){var R,L,W=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(R=a.$instance)!==null&&R!==void 0&&R.isUnstyled()?void 0:Te._getOptionValue((L=a.$instance)===null||L===void 0||(L=L.$style)===null||L===void 0?void 0:L.classes,W,Le({},q))},sx:function(){var R,L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return W?Te._getOptionValue((R=a.$instance)===null||R===void 0||(R=R.$style)===null||R===void 0?void 0:R.inlineStyles,L,Le({},q)):void 0}},N),a.$instance=a._$instances[e],(p=(g=a.$instance)[s])===null||p===void 0||p.call(g,a,l,u,d),a["$".concat(e)]=a.$instance,Te._hook(e,s,a,l,u,d),a.$pd||(a.$pd={}),a.$pd[e]=Le(Le({},(_=a.$pd)===null||_===void 0?void 0:_[e]),{},{name:e,instance:a.$instance})},o=function(s){var a,l,u,d,h,p=(a=s.$instance)===null||a===void 0?void 0:a.watch;p==null||(l=p.config)===null||l===void 0||l.call(s.$instance,(u=s.$instance)===null||u===void 0?void 0:u.$primevueConfig),Ti.on("config:change",function(g){var _,P=g.newValue,k=g.oldValue;return p==null||(_=p.config)===null||_===void 0?void 0:_.call(s.$instance,P,k)}),p==null||(d=p["config.ripple"])===null||d===void 0||d.call(s.$instance,(h=s.$instance)===null||h===void 0||(h=h.$primevueConfig)===null||h===void 0?void 0:h.ripple),Ti.on("config:ripple:change",function(g){var _,P=g.newValue,k=g.oldValue;return p==null||(_=p["config.ripple"])===null||_===void 0?void 0:_.call(s.$instance,P,k)})};return{created:function(s,a,l,u){s.$pd||(s.$pd={}),s.$pd[e]={name:e,attrSelector:Ih("pd")},r("created",s,a,l,u)},beforeMount:function(s,a,l,u){Te._loadStyles(s,a,l),r("beforeMount",s,a,l,u),o(s)},mounted:function(s,a,l,u){Te._loadStyles(s,a,l),r("mounted",s,a,l,u)},beforeUpdate:function(s,a,l,u){r("beforeUpdate",s,a,l,u)},updated:function(s,a,l,u){Te._loadStyles(s,a,l),r("updated",s,a,l,u)},beforeUnmount:function(s,a,l,u){r("beforeUnmount",s,a,l,u)},unmounted:function(s,a,l,u){var d;(d=s.$instance)===null||d===void 0||(d=d.scopedStyleEl)===null||d===void 0||(d=d.value)===null||d===void 0||d.remove(),r("unmounted",s,a,l,u)}}},extend:function(){var e=Te._getMeta.apply(Te,arguments),n=Xg(e,2),r=n[0],o=n[1];return Le({extend:function(){var s=Te._getMeta.apply(Te,arguments),a=Xg(s,2),l=a[0],u=a[1];return Te.extend(l,Le(Le(Le({},o),o==null?void 0:o.methods),u))}},Te._extend(r,o))}},K2=function(e){var n=e.dt;return`
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(n("ripple.background"),`;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`)},W2={root:"p-ink"},q2=je.extend({name:"ripple-directive",theme:K2,classes:W2}),G2=Te.extend({style:q2});function ba(t){"@babel/helpers - typeof";return ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ba(t)}function Q2(t){return Z2(t)||J2(t)||X2(t)||Y2()}function Y2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X2(t,e){if(t){if(typeof t=="string")return ef(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ef(t,e):void 0}}function J2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Z2(t){if(Array.isArray(t))return ef(t)}function ef(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function ey(t,e,n){return(e=ex(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ex(t){var e=tx(t,"string");return ba(e)=="symbol"?e:e+""}function tx(t,e){if(ba(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ba(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Th=G2.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var n=MC("span",ey(ey({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));e.appendChild(n),this.$el=n},remove:function(e){var n=this.getInk(e);n&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(e){var n=this,r=e.currentTarget,o=this.getInk(r);if(!(!o||getComputedStyle(o,null).display==="none")){if(!this.isUnstyled()&&id(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"),!Fo(o)&&!Uo(o)){var i=Math.max(t1(r),zC(r));o.style.height=i+"px",o.style.width=i+"px"}var s=BC(r),a=e.pageX-s.left+document.body.scrollTop-Uo(o)/2,l=e.pageY-s.top+document.body.scrollLeft-Fo(o)/2;o.style.top=l+"px",o.style.left=a+"px",!this.isUnstyled()&&OC(o,"p-ink-active"),o.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){o&&(!n.isUnstyled()&&id(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&id(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?Q2(e.children).find(function(n){return FC(n,"data-pc-name")==="ripple"}):void 0}}});function _a(t){"@babel/helpers - typeof";return _a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_a(t)}function Un(t,e,n){return(e=nx(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nx(t){var e=rx(t,"string");return _a(e)=="symbol"?e:e+""}function rx(t,e){if(_a(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(_a(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ox=function(e){var n=e.dt;return`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(n("button.primary.color"),`;
    background: `).concat(n("button.primary.background"),`;
    border: 1px solid `).concat(n("button.primary.border.color"),`;
    padding: `).concat(n("button.padding.y")," ").concat(n("button.padding.x"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(n("button.transition.duration"),", color ").concat(n("button.transition.duration"),", border-color ").concat(n("button.transition.duration"),`,
            outline-color `).concat(n("button.transition.duration"),", box-shadow ").concat(n("button.transition.duration"),`;
    border-radius: `).concat(n("button.border.radius"),`;
    outline-color: transparent;
    gap: `).concat(n("button.gap"),`;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: `).concat(n("button.icon.only.width"),`;
    padding-left: 0;
    padding-right: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: `).concat(n("button.icon.only.width"),`;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: `).concat(n("button.sm.font.size"),`;
    padding: `).concat(n("button.sm.padding.y")," ").concat(n("button.sm.padding.x"),`;
}

.p-button-sm .p-button-icon {
    font-size: `).concat(n("button.sm.font.size"),`;
}

.p-button-lg {
    font-size: `).concat(n("button.lg.font.size"),`;
    padding: `).concat(n("button.lg.padding.y")," ").concat(n("button.lg.padding.x"),`;
}

.p-button-lg .p-button-icon {
    font-size: `).concat(n("button.lg.font.size"),`;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: `).concat(n("button.label.font.weight"),`;
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: `).concat(n("button.icon.only.width"),`;
}

.p-button:not(:disabled):hover {
    background: `).concat(n("button.primary.hover.background"),`;
    border: 1px solid `).concat(n("button.primary.hover.border.color"),`;
    color: `).concat(n("button.primary.hover.color"),`;
}

.p-button:not(:disabled):active {
    background: `).concat(n("button.primary.active.background"),`;
    border: 1px solid `).concat(n("button.primary.active.border.color"),`;
    color: `).concat(n("button.primary.active.color"),`;
}

.p-button:focus-visible {
    box-shadow: `).concat(n("button.primary.focus.ring.shadow"),`;
    outline: `).concat(n("button.focus.ring.width")," ").concat(n("button.focus.ring.style")," ").concat(n("button.primary.focus.ring.color"),`;
    outline-offset: `).concat(n("button.focus.ring.offset"),`;
}

.p-button .p-badge {
    min-width: `).concat(n("button.badge.size"),`;
    height: `).concat(n("button.badge.size"),`;
    line-height: `).concat(n("button.badge.size"),`;
}

.p-button-raised {
    box-shadow: `).concat(n("button.raised.shadow"),`;
}

.p-button-rounded {
    border-radius: `).concat(n("button.rounded.border.radius"),`;
}

.p-button-secondary {
    background: `).concat(n("button.secondary.background"),`;
    border: 1px solid `).concat(n("button.secondary.border.color"),`;
    color: `).concat(n("button.secondary.color"),`;
}

.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.secondary.hover.background"),`;
    border: 1px solid `).concat(n("button.secondary.hover.border.color"),`;
    color: `).concat(n("button.secondary.hover.color"),`;
}

.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.secondary.active.background"),`;
    border: 1px solid `).concat(n("button.secondary.active.border.color"),`;
    color: `).concat(n("button.secondary.active.color"),`;
}

.p-button-secondary:focus-visible {
    outline-color: `).concat(n("button.secondary.focus.ring.color"),`;
    box-shadow: `).concat(n("button.secondary.focus.ring.shadow"),`;
}

.p-button-success {
    background: `).concat(n("button.success.background"),`;
    border: 1px solid `).concat(n("button.success.border.color"),`;
    color: `).concat(n("button.success.color"),`;
}

.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.success.hover.background"),`;
    border: 1px solid `).concat(n("button.success.hover.border.color"),`;
    color: `).concat(n("button.success.hover.color"),`;
}

.p-button-success:not(:disabled):active {
    background: `).concat(n("button.success.active.background"),`;
    border: 1px solid `).concat(n("button.success.active.border.color"),`;
    color: `).concat(n("button.success.active.color"),`;
}

.p-button-success:focus-visible {
    outline-color: `).concat(n("button.success.focus.ring.color"),`;
    box-shadow: `).concat(n("button.success.focus.ring.shadow"),`;
}

.p-button-info {
    background: `).concat(n("button.info.background"),`;
    border: 1px solid `).concat(n("button.info.border.color"),`;
    color: `).concat(n("button.info.color"),`;
}

.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.info.hover.background"),`;
    border: 1px solid `).concat(n("button.info.hover.border.color"),`;
    color: `).concat(n("button.info.hover.color"),`;
}

.p-button-info:not(:disabled):active {
    background: `).concat(n("button.info.active.background"),`;
    border: 1px solid `).concat(n("button.info.active.border.color"),`;
    color: `).concat(n("button.info.active.color"),`;
}

.p-button-info:focus-visible {
    outline-color: `).concat(n("button.info.focus.ring.color"),`;
    box-shadow: `).concat(n("button.info.focus.ring.shadow"),`;
}

.p-button-warn {
    background: `).concat(n("button.warn.background"),`;
    border: 1px solid `).concat(n("button.warn.border.color"),`;
    color: `).concat(n("button.warn.color"),`;
}

.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.warn.hover.background"),`;
    border: 1px solid `).concat(n("button.warn.hover.border.color"),`;
    color: `).concat(n("button.warn.hover.color"),`;
}

.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.warn.active.background"),`;
    border: 1px solid `).concat(n("button.warn.active.border.color"),`;
    color: `).concat(n("button.warn.active.color"),`;
}

.p-button-warn:focus-visible {
    outline-color: `).concat(n("button.warn.focus.ring.color"),`;
    box-shadow: `).concat(n("button.warn.focus.ring.shadow"),`;
}

.p-button-help {
    background: `).concat(n("button.help.background"),`;
    border: 1px solid `).concat(n("button.help.border.color"),`;
    color: `).concat(n("button.help.color"),`;
}

.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.help.hover.background"),`;
    border: 1px solid `).concat(n("button.help.hover.border.color"),`;
    color: `).concat(n("button.help.hover.color"),`;
}

.p-button-help:not(:disabled):active {
    background: `).concat(n("button.help.active.background"),`;
    border: 1px solid `).concat(n("button.help.active.border.color"),`;
    color: `).concat(n("button.help.active.color"),`;
}

.p-button-help:focus-visible {
    outline-color: `).concat(n("button.help.focus.ring.color"),`;
    box-shadow: `).concat(n("button.help.focus.ring.shadow"),`;
}

.p-button-danger {
    background: `).concat(n("button.danger.background"),`;
    border: 1px solid `).concat(n("button.danger.border.color"),`;
    color: `).concat(n("button.danger.color"),`;
}

.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.danger.hover.background"),`;
    border: 1px solid `).concat(n("button.danger.hover.border.color"),`;
    color: `).concat(n("button.danger.hover.color"),`;
}

.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.danger.active.background"),`;
    border: 1px solid `).concat(n("button.danger.active.border.color"),`;
    color: `).concat(n("button.danger.active.color"),`;
}

.p-button-danger:focus-visible {
    outline-color: `).concat(n("button.danger.focus.ring.color"),`;
    box-shadow: `).concat(n("button.danger.focus.ring.shadow"),`;
}

.p-button-contrast {
    background: `).concat(n("button.contrast.background"),`;
    border: 1px solid `).concat(n("button.contrast.border.color"),`;
    color: `).concat(n("button.contrast.color"),`;
}

.p-button-contrast:not(:disabled):hover {
    background: `).concat(n("button.contrast.hover.background"),`;
    border: 1px solid `).concat(n("button.contrast.hover.border.color"),`;
    color: `).concat(n("button.contrast.hover.color"),`;
}

.p-button-contrast:not(:disabled):active {
    background: `).concat(n("button.contrast.active.background"),`;
    border: 1px solid `).concat(n("button.contrast.active.border.color"),`;
    color: `).concat(n("button.contrast.active.color"),`;
}

.p-button-contrast:focus-visible {
    outline-color: `).concat(n("button.contrast.focus.ring.color"),`;
    box-shadow: `).concat(n("button.contrast.focus.ring.shadow"),`;
}

.p-button-outlined {
    background: transparent;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):hover {
    background: `).concat(n("button.outlined.primary.hover.background"),`;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):active {
    background: `).concat(n("button.outlined.primary.active.background"),`;
    border-color: `).concat(n("button.outlined.primary.border.color"),`;
    color: `).concat(n("button.outlined.primary.color"),`;
}

.p-button-outlined.p-button-secondary {
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.outlined.secondary.hover.background"),`;
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.outlined.secondary.active.background"),`;
    border-color: `).concat(n("button.outlined.secondary.border.color"),`;
    color: `).concat(n("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-success {
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.outlined.success.hover.background"),`;
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: `).concat(n("button.outlined.success.active.background"),`;
    border-color: `).concat(n("button.outlined.success.border.color"),`;
    color: `).concat(n("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-info {
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.outlined.info.hover.background"),`;
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: `).concat(n("button.outlined.info.active.background"),`;
    border-color: `).concat(n("button.outlined.info.border.color"),`;
    color: `).concat(n("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-warn {
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.outlined.warn.hover.background"),`;
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.outlined.warn.active.background"),`;
    border-color: `).concat(n("button.outlined.warn.border.color"),`;
    color: `).concat(n("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-help {
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.outlined.help.hover.background"),`;
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: `).concat(n("button.outlined.help.active.background"),`;
    border-color: `).concat(n("button.outlined.help.border.color"),`;
    color: `).concat(n("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-danger {
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.outlined.danger.hover.background"),`;
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.outlined.danger.active.background"),`;
    border-color: `).concat(n("button.outlined.danger.border.color"),`;
    color: `).concat(n("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-contrast {
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: `).concat(n("button.outlined.contrast.hover.background"),`;
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: `).concat(n("button.outlined.contrast.active.background"),`;
    border-color: `).concat(n("button.outlined.contrast.border.color"),`;
    color: `).concat(n("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-plain {
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: `).concat(n("button.outlined.plain.hover.background"),`;
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: `).concat(n("button.outlined.plain.active.background"),`;
    border-color: `).concat(n("button.outlined.plain.border.color"),`;
    color: `).concat(n("button.outlined.plain.color"),`;
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):hover {
    background: `).concat(n("button.text.primary.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):active {
    background: `).concat(n("button.text.primary.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.primary.color"),`;
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: `).concat(n("button.text.secondary.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: `).concat(n("button.text.secondary.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.secondary.color"),`;
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: `).concat(n("button.text.success.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):active {
    background: `).concat(n("button.text.success.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.success.color"),`;
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: `).concat(n("button.text.info.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):active {
    background: `).concat(n("button.text.info.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.info.color"),`;
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: `).concat(n("button.text.warn.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: `).concat(n("button.text.warn.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.warn.color"),`;
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: `).concat(n("button.text.help.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):active {
    background: `).concat(n("button.text.help.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.help.color"),`;
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: `).concat(n("button.text.danger.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: `).concat(n("button.text.danger.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.danger.color"),`;
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: `).concat(n("button.text.plain.hover.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: `).concat(n("button.text.plain.active.background"),`;
    border-color: transparent;
    color: `).concat(n("button.text.plain.color"),`;
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.color"),`;
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.hover.color"),`;
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: `).concat(n("button.link.active.color"),`;
}
`)},ix={root:function(e){var n=e.instance,r=e.props;return["p-button p-component",Un(Un(Un(Un(Un(Un(Un(Un(Un({"p-button-icon-only":n.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link},"p-button-".concat(r.severity),r.severity),"p-button-raised",r.raised),"p-button-rounded",r.rounded),"p-button-text",r.text),"p-button-outlined",r.outlined),"p-button-sm",r.size==="small"),"p-button-lg",r.size==="large"),"p-button-plain",r.plain),"p-button-fluid",n.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(e){var n=e.props;return["p-button-icon",Un({},"p-button-icon-".concat(n.iconPos),n.label)]},label:"p-button-label"},sx=je.extend({name:"button",theme:ox,classes:ix}),ax={name:"BaseButton",extends:Vn,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:sx,provide:function(){return{$pcButton:this,$parentInstance:this}}},c1={name:"Button",extends:ax,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return ee(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return rr(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:ru,Badge:l1},directives:{ripple:Th}};function lx(t,e,n,r,o,i){var s=ke("SpinnerIcon"),a=ke("Badge"),l=fh("ripple");return t.asChild?Qe(t.$slots,"default",{key:1,class:cn(t.cx("root")),a11yAttrs:i.a11yAttrs}):ut((j(),Be(so(t.as),ee({key:0,class:t.cx("root")},i.attrs),{default:et(function(){return[Qe(t.$slots,"default",{},function(){return[t.loading?Qe(t.$slots,"loadingicon",{key:0,class:cn([t.cx("loadingIcon"),t.cx("icon")])},function(){return[t.loadingIcon?(j(),ne("span",ee({key:0,class:[t.cx("loadingIcon"),t.cx("icon"),t.loadingIcon]},t.ptm("loadingIcon")),null,16)):(j(),Be(s,ee({key:1,class:[t.cx("loadingIcon"),t.cx("icon")],spin:""},t.ptm("loadingIcon")),null,16,["class"]))]}):Qe(t.$slots,"icon",{key:1,class:cn([t.cx("icon")])},function(){return[t.icon?(j(),ne("span",ee({key:0,class:[t.cx("icon"),t.icon,t.iconClass]},t.ptm("icon")),null,16)):Zt("",!0)]}),x("span",ee({class:t.cx("label")},t.ptm("label")),Oe(t.label||" "),17),t.badge?(j(),Be(a,{key:2,value:t.badge,class:cn(t.badgeClass),severity:t.badgeSeverity,unstyled:t.unstyled,pt:t.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):Zt("",!0)]})]}),_:3},16,["class"])),[[l]])}c1.render=lx;var cx=function(e){var n=e.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(n("avatar.width"),`;
    height: `).concat(n("avatar.height"),`;
    font-size: `).concat(n("avatar.font.size"),`;
    background: `).concat(n("avatar.background"),`;
    border-radius: `).concat(n("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(n("avatar.font.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(n("avatar.lg.width"),`;
    height: `).concat(n("avatar.lg.width"),`;
    font-size: `).concat(n("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(n("avatar.lg.font.size"),`;
}

.p-avatar-xl {
    width: `).concat(n("avatar.xl.width"),`;
    height: `).concat(n("avatar.xl.width"),`;
    font-size: `).concat(n("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(n("avatar.xl.font.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: `).concat(n("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(n("avatar.group.border.color"),`;
}
`)},ux={root:function(e){var n=e.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},dx=je.extend({name:"avatar",theme:cx,classes:ux}),fx={name:"BaseAvatar",extends:Vn,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:dx,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},u1={name:"Avatar",extends:fx,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}}},hx=["aria-labelledby","aria-label"],px=["src","alt"];function mx(t,e,n,r,o,i){return j(),ne("div",ee({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[Qe(t.$slots,"default",{},function(){return[t.label?(j(),ne("span",ee({key:0,class:t.cx("label")},t.ptm("label")),Oe(t.label),17)):t.$slots.icon?(j(),Be(so(t.$slots.icon),{key:1,class:cn(t.cx("icon"))},null,8,["class"])):t.icon?(j(),ne("span",ee({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(j(),ne("img",ee({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return i.onError&&i.onError.apply(i,arguments)})},t.ptm("image")),null,16,px)):Zt("",!0)]})],16,hx)}u1.render=mx;var Sh={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=Eh()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function gx(t,e,n,r,o,i){return i.inline?Qe(t.$slots,"default",{key:0}):o.mounted?(j(),Be(mS,{key:1,to:n.appendTo},[Qe(t.$slots,"default")],8,["to"])):Zt("",!0)}Sh.render=gx;var vn=tu();function wa(t){"@babel/helpers - typeof";return wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wa(t)}function kl(t,e,n){return(e=yx(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yx(t){var e=vx(t,"string");return wa(e)=="symbol"?e:e+""}function vx(t,e){if(wa(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(wa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var bx=function(e){var n=e.dt;return`
.p-toast {
    width: `.concat(n("toast.width"),`;
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: `).concat(n("toast.icon.size"),`;
    width: `).concat(n("toast.icon.size"),`;
    height: `).concat(n("toast.icon.size"),`;
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: `).concat(n("toast.content.padding"),`;
    gap: `).concat(n("toast.content.gap"),`;
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("toast.text.gap"),`;
}

.p-toast-summary {
    font-weight: `).concat(n("toast.summary.font.weight"),`;
    font-size: `).concat(n("toast.summary.font.size"),`;
}

.p-toast-detail {
    font-weight: `).concat(n("toast.detail.font.weight"),`;
    font-size: `).concat(n("toast.detail.font.size"),`;
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background `).concat(n("toast.transition.duration"),", color ").concat(n("toast.transition.duration"),", outline-color ").concat(n("toast.transition.duration"),", box-shadow ").concat(n("toast.transition.duration"),`;
    outline-color: transparent;
    color: inherit;
    width: `).concat(n("toast.close.button.width"),`;
    height: `).concat(n("toast.close.button.height"),`;
    border-radius: `).concat(n("toast.close.button.border.radius"),`;
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: `).concat(n("toast.border.width"),`;
    border-style: solid;
    backdrop-filter: blur(`).concat(n("toast.blur"),`);
    border-radius: `).concat(n("toast.border.radius"),`;
}

.p-toast-close-icon {
    font-size: `).concat(n("toast.close.icon.size"),`;
    width: `).concat(n("toast.close.icon.size"),`;
    height: `).concat(n("toast.close.icon.size"),`;
}

.p-toast-close-button:focus-visible {
    outline-width: `).concat(n("focus.ring.width"),`;
    outline-style: `).concat(n("focus.ring.style"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-toast-message-info {
    background: `).concat(n("toast.info.background"),`;
    border-color: `).concat(n("toast.info.border.color"),`;
    color: `).concat(n("toast.info.color"),`;
    box-shadow: `).concat(n("toast.info.shadow"),`;
}

.p-toast-message-info .p-toast-detail {
    color: `).concat(n("toast.info.detail.color"),`;
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.info.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.info.close.button.focus.ring.shadow"),`;
}

.p-toast-message-info .p-toast-close-button:hover {
    background: `).concat(n("toast.info.close.button.hover.background"),`;
}

.p-toast-message-success {
    background: `).concat(n("toast.success.background"),`;
    border-color: `).concat(n("toast.success.border.color"),`;
    color: `).concat(n("toast.success.color"),`;
    box-shadow: `).concat(n("toast.success.shadow"),`;
}

.p-toast-message-success .p-toast-detail {
    color: `).concat(n("toast.success.detail.color"),`;
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.success.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.success.close.button.focus.ring.shadow"),`;
}

.p-toast-message-success .p-toast-close-button:hover {
    background: `).concat(n("toast.success.close.button.hover.background"),`;
}

.p-toast-message-warn {
    background: `).concat(n("toast.warn.background"),`;
    border-color: `).concat(n("toast.warn.border.color"),`;
    color: `).concat(n("toast.warn.color"),`;
    box-shadow: `).concat(n("toast.warn.shadow"),`;
}

.p-toast-message-warn .p-toast-detail {
    color: `).concat(n("toast.warn.detail.color"),`;
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.warn.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.warn.close.button.focus.ring.shadow"),`;
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: `).concat(n("toast.warn.close.button.hover.background"),`;
}

.p-toast-message-error {
    background: `).concat(n("toast.error.background"),`;
    border-color: `).concat(n("toast.error.border.color"),`;
    color: `).concat(n("toast.error.color"),`;
    box-shadow: `).concat(n("toast.error.shadow"),`;
}

.p-toast-message-error .p-toast-detail {
    color: `).concat(n("toast.error.detail.color"),`;
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.error.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.error.close.button.focus.ring.shadow"),`;
}

.p-toast-message-error .p-toast-close-button:hover {
    background: `).concat(n("toast.error.close.button.hover.background"),`;
}

.p-toast-message-secondary {
    background: `).concat(n("toast.secondary.background"),`;
    border-color: `).concat(n("toast.secondary.border.color"),`;
    color: `).concat(n("toast.secondary.color"),`;
    box-shadow: `).concat(n("toast.secondary.shadow"),`;
}

.p-toast-message-secondary .p-toast-detail {
    color: `).concat(n("toast.secondary.detail.color"),`;
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.secondary.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.secondary.close.button.focus.ring.shadow"),`;
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: `).concat(n("toast.secondary.close.button.hover.background"),`;
}

.p-toast-message-contrast {
    background: `).concat(n("toast.contrast.background"),`;
    border-color: `).concat(n("toast.contrast.border.color"),`;
    color: `).concat(n("toast.contrast.color"),`;
    box-shadow: `).concat(n("toast.contrast.shadow"),`;
}

.p-toast-message-contrast .p-toast-detail {
    color: `).concat(n("toast.contrast.detail.color"),`;
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: `).concat(n("toast.contrast.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("toast.contrast.close.button.focus.ring.shadow"),`;
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: `).concat(n("toast.contrast.close.button.hover.background"),`;
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`)},_x={root:function(e){var n=e.position;return{position:"fixed",top:n==="top-right"||n==="top-left"||n==="top-center"?"20px":n==="center"?"50%":null,right:(n==="top-right"||n==="bottom-right")&&"20px",bottom:(n==="bottom-left"||n==="bottom-right"||n==="bottom-center")&&"20px",left:n==="top-left"||n==="bottom-left"?"20px":n==="center"||n==="top-center"||n==="bottom-center"?"50%":null}}},wx={root:function(e){var n=e.props;return["p-toast p-component p-toast-"+n.position]},message:function(e){var n=e.props;return["p-toast-message",{"p-toast-message-info":n.message.severity==="info"||n.message.severity===void 0,"p-toast-message-warn":n.message.severity==="warn","p-toast-message-error":n.message.severity==="error","p-toast-message-success":n.message.severity==="success","p-toast-message-secondary":n.message.severity==="secondary","p-toast-message-contrast":n.message.severity==="contrast"}]},messageContent:"p-toast-message-content",messageIcon:function(e){var n=e.props;return["p-toast-message-icon",kl(kl(kl(kl({},n.infoIcon,n.message.severity==="info"),n.warnIcon,n.message.severity==="warn"),n.errorIcon,n.message.severity==="error"),n.successIcon,n.message.severity==="success")]},messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:"p-toast-close-icon"},Ex=je.extend({name:"toast",theme:bx,classes:wx,inlineStyles:_x}),pc={name:"CheckIcon",extends:Dr};function Ix(t,e,n,r,o,i){return j(),ne("svg",ee({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[x("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"},null,-1)]),16)}pc.render=Ix;var tf={name:"ExclamationTriangleIcon",extends:Dr};function Tx(t,e,n,r,o,i){return j(),ne("svg",ee({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[x("path",{d:"M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",fill:"currentColor"},null,-1),x("path",{d:"M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",fill:"currentColor"},null,-1),x("path",{d:"M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",fill:"currentColor"},null,-1)]),16)}tf.render=Tx;var nf={name:"InfoCircleIcon",extends:Dr};function Sx(t,e,n,r,o,i){return j(),ne("svg",ee({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[x("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",fill:"currentColor"},null,-1)]),16)}nf.render=Sx;var Ah={name:"TimesIcon",extends:Dr};function Ax(t,e,n,r,o,i){return j(),ne("svg",ee({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[x("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1)]),16)}Ah.render=Ax;var rf={name:"TimesCircleIcon",extends:Dr};function Cx(t,e,n,r,o,i){return j(),ne("svg",ee({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[x("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1)]),16)}rf.render=Cx;var xx={name:"BaseToast",extends:Vn,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},infoIcon:{type:String,default:void 0},warnIcon:{type:String,default:void 0},errorIcon:{type:String,default:void 0},successIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:Ex,provide:function(){return{$pcToast:this,$parentInstance:this}}},d1={name:"ToastMessage",hostName:"Toast",extends:Vn,emits:["close"],closeTimeout:null,props:{message:{type:null,default:null},templates:{type:Object,default:null},closeIcon:{type:String,default:null},infoIcon:{type:String,default:null},warnIcon:{type:String,default:null},errorIcon:{type:String,default:null},successIcon:{type:String,default:null},closeButtonProps:{type:null,default:null}},mounted:function(){var e=this;this.message.life&&(this.closeTimeout=setTimeout(function(){e.close({message:e.message,type:"life-end"})},this.message.life))},beforeUnmount:function(){this.clearCloseTimeout()},methods:{close:function(e){this.$emit("close",e)},onCloseClick:function(){this.clearCloseTimeout(),this.close({message:this.message,type:"close"})},clearCloseTimeout:function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{iconComponent:function(){return{info:!this.infoIcon&&nf,success:!this.successIcon&&pc,warn:!this.warnIcon&&tf,error:!this.errorIcon&&rf}[this.message.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{TimesIcon:Ah,InfoCircleIcon:nf,CheckIcon:pc,ExclamationTriangleIcon:tf,TimesCircleIcon:rf},directives:{ripple:Th}};function Ea(t){"@babel/helpers - typeof";return Ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ea(t)}function ty(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function ny(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ty(Object(n),!0).forEach(function(r){Px(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ty(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Px(t,e,n){return(e=kx(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kx(t){var e=Ox(t,"string");return Ea(e)=="symbol"?e:e+""}function Ox(t,e){if(Ea(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ea(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Rx=["aria-label"];function Nx(t,e,n,r,o,i){var s=fh("ripple");return j(),ne("div",ee({class:[t.cx("message"),n.message.styleClass],role:"alert","aria-live":"assertive","aria-atomic":"true"},t.ptm("message")),[n.templates.container?(j(),Be(so(n.templates.container),{key:0,message:n.message,closeCallback:i.onCloseClick},null,8,["message","closeCallback"])):(j(),ne("div",ee({key:1,class:[t.cx("messageContent"),n.message.contentStyleClass]},t.ptm("messageContent")),[n.templates.message?(j(),Be(so(n.templates.message),{key:1,message:n.message},null,8,["message"])):(j(),ne(We,{key:0},[(j(),Be(so(n.templates.messageicon?n.templates.messageicon:n.templates.icon?n.templates.icon:i.iconComponent&&i.iconComponent.name?i.iconComponent:"span"),ee({class:t.cx("messageIcon")},t.ptm("messageIcon")),null,16,["class"])),x("div",ee({class:t.cx("messageText")},t.ptm("messageText")),[x("span",ee({class:t.cx("summary")},t.ptm("summary")),Oe(n.message.summary),17),x("div",ee({class:t.cx("detail")},t.ptm("detail")),Oe(n.message.detail),17)],16)],64)),n.message.closable!==!1?(j(),ne("div",Sb(ee({key:2},t.ptm("buttonContainer"))),[ut((j(),ne("button",ee({class:t.cx("closeButton"),type:"button","aria-label":i.closeAriaLabel,onClick:e[0]||(e[0]=function(){return i.onCloseClick&&i.onCloseClick.apply(i,arguments)}),autofocus:""},ny(ny({},n.closeButtonProps),t.ptm("closeButton"))),[(j(),Be(so(n.templates.closeicon||"TimesIcon"),ee({class:[t.cx("closeIcon"),n.closeIcon]},t.ptm("closeIcon")),null,16,["class"]))],16,Rx)),[[s]])],16)):Zt("",!0)],16))],16)}d1.render=Nx;function Lx(t){return $x(t)||Mx(t)||Vx(t)||Dx()}function Dx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vx(t,e){if(t){if(typeof t=="string")return of(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?of(t,e):void 0}}function Mx(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $x(t){if(Array.isArray(t))return of(t)}function of(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var Fx=0,f1={name:"Toast",extends:xx,inheritAttrs:!1,emits:["close","life-end"],data:function(){return{messages:[]}},styleElement:null,mounted:function(){vn.on("add",this.onAdd),vn.on("remove",this.onRemove),vn.on("remove-group",this.onRemoveGroup),vn.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount:function(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&Di.clear(this.$refs.container),vn.off("add",this.onAdd),vn.off("remove",this.onRemove),vn.off("remove-group",this.onRemoveGroup),vn.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add:function(e){e.id==null&&(e.id=Fx++),this.messages=[].concat(Lx(this.messages),[e])},remove:function(e){var n=this.messages.findIndex(function(r){return r.id===e.message.id});n!==-1&&(this.messages.splice(n,1),this.$emit(e.type,{message:e.message}))},onAdd:function(e){this.group==e.group&&this.add(e)},onRemove:function(e){this.remove({message:e,type:"close"})},onRemoveGroup:function(e){this.group===e&&(this.messages=[])},onRemoveAllGroups:function(){this.messages=[]},onEnter:function(){this.autoZIndex&&Di.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave:function(){var e=this;this.$refs.container&&this.autoZIndex&&rr(this.messages)&&setTimeout(function(){Di.clear(e.$refs.container)},200)},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",o1(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var n="";for(var r in this.breakpoints){var o="";for(var i in this.breakpoints[r])o+=i+":"+this.breakpoints[r][i]+"!important;";n+=`
                        @media screen and (max-width: `.concat(r,`) {
                            .p-toast[`).concat(this.$attrSelector,`] {
                                `).concat(o,`
                            }
                        }
                    `)}this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},components:{ToastMessage:d1,Portal:Sh}};function Ia(t){"@babel/helpers - typeof";return Ia=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ia(t)}function ry(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Ux(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ry(Object(n),!0).forEach(function(r){jx(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ry(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function jx(t,e,n){return(e=Bx(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Bx(t){var e=zx(t,"string");return Ia(e)=="symbol"?e:e+""}function zx(t,e){if(Ia(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ia(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Hx(t,e,n,r,o,i){var s=ke("ToastMessage"),a=ke("Portal");return j(),Be(a,null,{default:et(function(){return[x("div",ee({ref:"container",class:t.cx("root"),style:t.sx("root",!0,{position:t.position})},t.ptmi("root")),[ue($A,ee({name:"p-toast-message",tag:"div",onEnter:i.onEnter,onLeave:i.onLeave},Ux({},t.ptm("transition"))),{default:et(function(){return[(j(!0),ne(We,null,Rn(o.messages,function(l){return j(),Be(s,{key:l.id,message:l,templates:t.$slots,closeIcon:t.closeIcon,infoIcon:t.infoIcon,warnIcon:t.warnIcon,errorIcon:t.errorIcon,successIcon:t.successIcon,closeButtonProps:t.closeButtonProps,unstyled:t.unstyled,onClose:e[0]||(e[0]=function(u){return i.remove(u)}),pt:t.pt},null,8,["message","templates","closeIcon","infoIcon","warnIcon","errorIcon","successIcon","closeButtonProps","unstyled","pt"])}),128))]}),_:1},16,["onEnter","onLeave"])],16)]}),_:1})}f1.render=Hx;var Kx=function(e){var n=e.dt;return`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(n("inputtext.color"),`;
    background: `).concat(n("inputtext.background"),`;
    padding: `).concat(n("inputtext.padding.y")," ").concat(n("inputtext.padding.x"),`;
    border: 1px solid `).concat(n("inputtext.border.color"),`;
    transition: background `).concat(n("inputtext.transition.duration"),", color ").concat(n("inputtext.transition.duration"),", border-color ").concat(n("inputtext.transition.duration"),", outline-color ").concat(n("inputtext.transition.duration"),", box-shadow ").concat(n("inputtext.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(n("inputtext.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("inputtext.shadow"),`;
}

.p-inputtext:enabled:hover {
    border-color: `).concat(n("inputtext.hover.border.color"),`;
}

.p-inputtext:enabled:focus {
    border-color: `).concat(n("inputtext.focus.border.color"),`;
    box-shadow: `).concat(n("inputtext.focus.ring.shadow"),`;
    outline: `).concat(n("inputtext.focus.ring.width")," ").concat(n("inputtext.focus.ring.style")," ").concat(n("inputtext.focus.ring.color"),`;
    outline-offset: `).concat(n("inputtext.focus.ring.offset"),`;
}

.p-inputtext.p-invalid {
    border-color: `).concat(n("inputtext.invalid.border.color"),`;
}

.p-inputtext.p-variant-filled {
    background: `).concat(n("inputtext.filled.background"),`;
}

.p-inputtext.p-variant-filled:enabled:hover {
    border-color: `).concat(n("inputtext.filled.hover.background"),`;
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: `).concat(n("inputtext.filled.focus.background"),`;
}

.p-inputtext:disabled {
    opacity: 1;
    background: `).concat(n("inputtext.disabled.background"),`;
    color: `).concat(n("inputtext.disabled.color"),`;
}

.p-inputtext::placeholder {
    color: `).concat(n("inputtext.placeholder.color"),`;
}

.p-inputtext-sm {
    font-size: `).concat(n("inputtext.sm.font.size"),`;
    padding: `).concat(n("inputtext.sm.padding.y")," ").concat(n("inputtext.sm.padding.x"),`;
}

.p-inputtext-lg {
    font-size: `).concat(n("inputtext.lg.font.size"),`;
    padding: `).concat(n("inputtext.lg.padding.y")," ").concat(n("inputtext.lg.padding.x"),`;
}

.p-inputtext-fluid {
    width: 100%;
}
`)},Wx={root:function(e){var n=e.instance,r=e.props;return["p-inputtext p-component",{"p-filled":n.filled,"p-inputtext-sm":r.size==="small","p-inputtext-lg":r.size==="large","p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":n.$primevue.config.inputStyle==="filled"||n.$primevue.config.inputVariant==="filled","p-inputtext-fluid":n.hasFluid}]}},qx=je.extend({name:"inputtext",theme:Kx,classes:Wx}),Gx={name:"BaseInputText",extends:Vn,props:{modelValue:null,size:{type:String,default:null},invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:qx,provide:function(){return{$pcInputText:this,$parentInstance:this}}},Ch={name:"InputText",extends:Gx,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}})},onInput:function(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},hasFluid:function(){return rr(this.fluid)?!!this.$pcFluid:this.fluid}}},Qx=["value","aria-invalid"];function Yx(t,e,n,r,o,i){return j(),ne("input",ee({type:"text",class:t.cx("root"),value:t.modelValue,"aria-invalid":t.invalid||void 0,onInput:e[0]||(e[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.getPTOptions("root")),null,16,Qx)}Ch.render=Yx;var h1=Symbol();function Xx(){var t=En(h1);if(!t)throw new Error("No PrimeVue Toast provided!");return t}var Jx={install:function(e){var n={add:function(o){vn.emit("add",o)},remove:function(o){vn.emit("remove",o)},removeGroup:function(o){vn.emit("remove-group",o)},removeAllGroups:function(){vn.emit("remove-all-groups")}};e.config.globalProperties.$toast=n,e.provide(h1,n)}};function Ta(t){"@babel/helpers - typeof";return Ta=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ta(t)}function Zx(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function eP(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,nP(r.key),r)}}function tP(t,e,n){return e&&eP(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function nP(t){var e=rP(t,"string");return Ta(e)=="symbol"?e:e+""}function rP(t,e){if(Ta(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(Ta(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var oP=function(){function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};Zx(this,t),this.element=e,this.listener=n}return tP(t,[{key:"bindScrollListener",value:function(){this.scrollableParents=HC(this.element);for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}();function oy(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return Ih(t)}var p1={name:"BlankIcon",extends:Dr};function iP(t,e,n,r,o,i){return j(),ne("svg",ee({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[x("rect",{width:"1",height:"1",fill:"currentColor","fill-opacity":"0"},null,-1)]),16)}p1.render=iP;var m1={name:"ChevronDownIcon",extends:Dr};function sP(t,e,n,r,o,i){return j(),ne("svg",ee({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[x("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1)]),16)}m1.render=sP;var g1={name:"SearchIcon",extends:Dr};function aP(t,e,n,r,o,i){return j(),ne("svg",ee({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[x("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",fill:"currentColor"},null,-1)]),16)}g1.render=aP;var lP=function(e){var n=e.dt;return`
.p-iconfield {
    position: relative;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (`.concat(n("icon.size"),` / 2));
    color: `).concat(n("iconfield.icon.color"),`;
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    left: `).concat(n("form.field.padding.x"),`;
}

.p-iconfield .p-inputicon:last-child {
    right: `).concat(n("form.field.padding.x"),`;
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-left: calc((`).concat(n("form.field.padding.x")," * 2) + ").concat(n("icon.size"),`);
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-right: calc((`).concat(n("form.field.padding.x")," * 2) + ").concat(n("icon.size"),`);
}
`)},cP={root:"p-iconfield"},uP=je.extend({name:"iconfield",theme:lP,classes:cP}),dP={name:"BaseIconField",extends:Vn,style:uP,provide:function(){return{$pcIconField:this,$parentInstance:this}}},y1={name:"IconField",extends:dP,inheritAttrs:!1};function fP(t,e,n,r,o,i){return j(),ne("div",ee({class:t.cx("root")},t.ptmi("root")),[Qe(t.$slots,"default")],16)}y1.render=fP;var hP={root:"p-inputicon"},pP=je.extend({name:"inputicon",classes:hP}),mP={name:"BaseInputIcon",extends:Vn,style:pP,props:{class:null},provide:function(){return{$pcInputIcon:this,$parentInstance:this}}},v1={name:"InputIcon",extends:mP,inheritAttrs:!1,computed:{containerClass:function(){return[this.cx("root"),this.class]}}};function gP(t,e,n,r,o,i){return j(),ne("span",ee({class:i.containerClass},t.ptmi("root")),[Qe(t.$slots,"default")],16)}v1.render=gP;var yP=tu(),vP=function(e){var n=e.dt;return`
.p-virtualscroller-loader {
    background: `.concat(n("virtualscroller.loader.mask.background"),`;
    color: `).concat(n("virtualscroller.loader.mask.color"),`;
}

.p-virtualscroller-loading-icon {
    font-size: `).concat(n("virtualscroller.loader.icon.size"),`;
    width: `).concat(n("virtualscroller.loader.icon.size"),`;
    height: `).concat(n("virtualscroller.loader.icon.size"),`;
}
`)},bP=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,iy=je.extend({name:"virtualscroller",css:bP,theme:vP}),_P={name:"BaseVirtualScroller",extends:Vn,props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},resizeDelay:{type:Number,default:10},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0},inline:{type:Boolean,default:!1},step:{type:Number,default:0},appendOnly:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1}},style:iy,provide:function(){return{$pcVirtualScroller:this,$parentInstance:this}},beforeMount:function(){var e;iy.loadCSS({nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})}};function Sa(t){"@babel/helpers - typeof";return Sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sa(t)}function sy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Cs(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sy(Object(n),!0).forEach(function(r){b1(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function b1(t,e,n){return(e=wP(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wP(t){var e=EP(t,"string");return Sa(e)=="symbol"?e:e+""}function EP(t,e){if(Sa(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Sa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var _1={name:"VirtualScroller",extends:_P,inheritAttrs:!1,emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],data:function(){var e=this.isBoth();return{first:e?{rows:0,cols:0}:0,last:e?{rows:0,cols:0}:0,page:e?{rows:0,cols:0}:0,numItemsInViewport:e?{rows:0,cols:0}:0,lastScrollPos:e?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,resizeTimeout:null,defaultWidth:0,defaultHeight:0,defaultContentWidth:0,defaultContentHeight:0,isRangeChanged:!1,lazyLoadState:{},resizeListener:null,initialized:!1,watch:{numToleratedItems:function(e){this.d_numToleratedItems=e},loading:function(e,n){this.lazy&&e!==n&&e!==this.d_loading&&(this.d_loading=e)},items:function(e,n){(!n||n.length!==(e||[]).length)&&(this.init(),this.calculateAutoSize())},itemSize:function(){this.init(),this.calculateAutoSize()},orientation:function(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},scrollHeight:function(){this.init(),this.calculateAutoSize()},scrollWidth:function(){this.init(),this.calculateAutoSize()}},mounted:function(){this.viewInit(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0,this.lazyLoadState=this.lazyLoadState||{}},updated:function(){!this.initialized&&this.viewInit()},unmounted:function(){this.unbindResizeListener(),this.initialized=!1},methods:{viewInit:function(){hc(this.element)&&(this.setContentEl(this.content),this.init(),this.calculateAutoSize(),this.bindResizeListener(),this.defaultWidth=Uo(this.element),this.defaultHeight=Fo(this.element),this.defaultContentWidth=Uo(this.content),this.defaultContentHeight=Fo(this.content),this.initialized=!0)},init:function(){this.disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize())},isVertical:function(){return this.orientation==="vertical"},isHorizontal:function(){return this.orientation==="horizontal"},isBoth:function(){return this.orientation==="both"},scrollTo:function(e){this.element&&this.element.scrollTo(e)},scrollToIndex:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",o=this.isBoth(),i=this.isHorizontal(),s=o?e.every(function(I){return I>-1}):e>-1;if(s){var a=this.first,l=this.element,u=l.scrollTop,d=u===void 0?0:u,h=l.scrollLeft,p=h===void 0?0:h,g=this.calculateNumItems(),_=g.numToleratedItems,P=this.getContentPosition(),k=this.itemSize,N=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,b=arguments.length>1?arguments[1]:void 0;return v<=b?0:v},O=function(v,b,T){return v*b+T},R=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.scrollTo({left:v,top:b,behavior:r})},L=o?{rows:0,cols:0}:0,W=!1,q=!1;o?(L={rows:N(e[0],_[0]),cols:N(e[1],_[1])},R(O(L.cols,k[1],P.left),O(L.rows,k[0],P.top)),q=this.lastScrollPos.top!==d||this.lastScrollPos.left!==p,W=L.rows!==a.rows||L.cols!==a.cols):(L=N(e,_),i?R(O(L,k,P.left),d):R(p,O(L,k,P.top)),q=this.lastScrollPos!==(i?p:d),W=L!==a),this.isRangeChanged=W,q&&(this.first=L)}},scrollInView:function(e,n){var r=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"auto";if(n){var i=this.isBoth(),s=this.isHorizontal(),a=i?e.every(function(k){return k>-1}):e>-1;if(a){var l=this.getRenderedRange(),u=l.first,d=l.viewport,h=function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return r.scrollTo({left:N,top:O,behavior:o})},p=n==="to-start",g=n==="to-end";if(p){if(i)d.first.rows-u.rows>e[0]?h(d.first.cols*this.itemSize[1],(d.first.rows-1)*this.itemSize[0]):d.first.cols-u.cols>e[1]&&h((d.first.cols-1)*this.itemSize[1],d.first.rows*this.itemSize[0]);else if(d.first-u>e){var _=(d.first-1)*this.itemSize;s?h(_,0):h(0,_)}}else if(g){if(i)d.last.rows-u.rows<=e[0]+1?h(d.first.cols*this.itemSize[1],(d.first.rows+1)*this.itemSize[0]):d.last.cols-u.cols<=e[1]+1&&h((d.first.cols+1)*this.itemSize[1],d.first.rows*this.itemSize[0]);else if(d.last-u<=e+1){var P=(d.first+1)*this.itemSize;s?h(P,0):h(0,P)}}}}else this.scrollToIndex(e,o)},getRenderedRange:function(){var e=function(h,p){return Math.floor(h/(p||h))},n=this.first,r=0;if(this.element){var o=this.isBoth(),i=this.isHorizontal(),s=this.element,a=s.scrollTop,l=s.scrollLeft;if(o)n={rows:e(a,this.itemSize[0]),cols:e(l,this.itemSize[1])},r={rows:n.rows+this.numItemsInViewport.rows,cols:n.cols+this.numItemsInViewport.cols};else{var u=i?l:a;n=e(u,this.itemSize),r=n+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:n,last:r}}},calculateNumItems:function(){var e=this.isBoth(),n=this.isHorizontal(),r=this.itemSize,o=this.getContentPosition(),i=this.element?this.element.offsetWidth-o.left:0,s=this.element?this.element.offsetHeight-o.top:0,a=function(p,g){return Math.ceil(p/(g||p))},l=function(p){return Math.ceil(p/2)},u=e?{rows:a(s,r[0]),cols:a(i,r[1])}:a(n?i:s,r),d=this.d_numToleratedItems||(e?[l(u.rows),l(u.cols)]:l(u));return{numItemsInViewport:u,numToleratedItems:d}},calculateOptions:function(){var e=this,n=this.isBoth(),r=this.first,o=this.calculateNumItems(),i=o.numItemsInViewport,s=o.numToleratedItems,a=function(d,h,p){var g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return e.getLast(d+h+(d<p?2:3)*p,g)},l=n?{rows:a(r.rows,i.rows,s[0]),cols:a(r.cols,i.cols,s[1],!0)}:a(r,i,s);this.last=l,this.numItemsInViewport=i,this.d_numToleratedItems=s,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=n?Array.from({length:i.rows}).map(function(){return Array.from({length:i.cols})}):Array.from({length:i})),this.lazy&&Promise.resolve().then(function(){var u;e.lazyLoadState={first:e.step?n?{rows:0,cols:r.cols}:0:r,last:Math.min(e.step?e.step:l,((u=e.items)===null||u===void 0?void 0:u.length)||0)},e.$emit("lazy-load",e.lazyLoadState)})},calculateAutoSize:function(){var e=this;this.autoSize&&!this.d_loading&&Promise.resolve().then(function(){if(e.content){var n=e.isBoth(),r=e.isHorizontal(),o=e.isVertical();e.content.style.minHeight=e.content.style.minWidth="auto",e.content.style.position="relative",e.element.style.contain="none";var i=[Uo(e.element),Fo(e.element)],s=i[0],a=i[1];(n||r)&&(e.element.style.width=s<e.defaultWidth?s+"px":e.scrollWidth||e.defaultWidth+"px"),(n||o)&&(e.element.style.height=a<e.defaultHeight?a+"px":e.scrollHeight||e.defaultHeight+"px"),e.content.style.minHeight=e.content.style.minWidth="",e.content.style.position="",e.element.style.contain=""}})},getLast:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,o=arguments.length>1?arguments[1]:void 0;return this.items?Math.min(o?((e=this.columns||this.items[0])===null||e===void 0?void 0:e.length)||0:((n=this.items)===null||n===void 0?void 0:n.length)||0,r):0},getContentPosition:function(){if(this.content){var e=getComputedStyle(this.content),n=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),r=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),o=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),i=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:n,right:r,top:o,bottom:i,x:n+r,y:o+i}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize:function(){var e=this;if(this.element){var n=this.isBoth(),r=this.isHorizontal(),o=this.element.parentElement,i=this.scrollWidth||"".concat(this.element.offsetWidth||o.offsetWidth,"px"),s=this.scrollHeight||"".concat(this.element.offsetHeight||o.offsetHeight,"px"),a=function(u,d){return e.element.style[u]=d};n||r?(a("height",s),a("width",i)):a("height",s)}},setSpacerSize:function(){var e=this,n=this.items;if(n){var r=this.isBoth(),o=this.isHorizontal(),i=this.getContentPosition(),s=function(l,u,d){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.spacerStyle=Cs(Cs({},e.spacerStyle),b1({},"".concat(l),(u||[]).length*d+h+"px"))};r?(s("height",n,this.itemSize[0],i.y),s("width",this.columns||n[1],this.itemSize[1],i.x)):o?s("width",this.columns||n,this.itemSize,i.x):s("height",n,this.itemSize,i.y)}},setContentPosition:function(e){var n=this;if(this.content&&!this.appendOnly){var r=this.isBoth(),o=this.isHorizontal(),i=e?e.first:this.first,s=function(d,h){return d*h},a=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.contentStyle=Cs(Cs({},n.contentStyle),{transform:"translate3d(".concat(d,"px, ").concat(h,"px, 0)")})};if(r)a(s(i.cols,this.itemSize[1]),s(i.rows,this.itemSize[0]));else{var l=s(i,this.itemSize);o?a(l,0):a(0,l)}}},onScrollPositionChange:function(e){var n=this,r=e.target,o=this.isBoth(),i=this.isHorizontal(),s=this.getContentPosition(),a=function(C,S){return C?C>S?C-S:C:0},l=function(C,S){return Math.floor(C/(S||C))},u=function(C,S,E,we,xe,Ie){return C<=xe?xe:Ie?E-we-xe:S+xe-1},d=function(C,S,E,we,xe,Ie,me){return C<=Ie?0:Math.max(0,me?C<S?E:C-Ie:C>S?E:C-2*Ie)},h=function(C,S,E,we,xe,Ie){var me=S+we+2*xe;return C>=xe&&(me+=xe+1),n.getLast(me,Ie)},p=a(r.scrollTop,s.top),g=a(r.scrollLeft,s.left),_=o?{rows:0,cols:0}:0,P=this.last,k=!1,N=this.lastScrollPos;if(o){var O=this.lastScrollPos.top<=p,R=this.lastScrollPos.left<=g;if(!this.appendOnly||this.appendOnly&&(O||R)){var L={rows:l(p,this.itemSize[0]),cols:l(g,this.itemSize[1])},W={rows:u(L.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],O),cols:u(L.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],R)};_={rows:d(L.rows,W.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],O),cols:d(L.cols,W.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],R)},P={rows:h(L.rows,_.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:h(L.cols,_.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},k=_.rows!==this.first.rows||P.rows!==this.last.rows||_.cols!==this.first.cols||P.cols!==this.last.cols||this.isRangeChanged,N={top:p,left:g}}}else{var q=i?g:p,I=this.lastScrollPos<=q;if(!this.appendOnly||this.appendOnly&&I){var v=l(q,this.itemSize),b=u(v,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,I);_=d(v,b,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,I),P=h(v,_,this.last,this.numItemsInViewport,this.d_numToleratedItems),k=_!==this.first||P!==this.last||this.isRangeChanged,N=q}}return{first:_,last:P,isRangeChanged:k,scrollPos:N}},onScrollChange:function(e){var n=this.onScrollPositionChange(e),r=n.first,o=n.last,i=n.isRangeChanged,s=n.scrollPos;if(i){var a={first:r,last:o};if(this.setContentPosition(a),this.first=r,this.last=o,this.lastScrollPos=s,this.$emit("scroll-index-change",a),this.lazy&&this.isPageChanged(r)){var l,u,d={first:this.step?Math.min(this.getPageByFirst(r)*this.step,(((l=this.items)===null||l===void 0?void 0:l.length)||0)-this.step):r,last:Math.min(this.step?(this.getPageByFirst(r)+1)*this.step:o,((u=this.items)===null||u===void 0?void 0:u.length)||0)},h=this.lazyLoadState.first!==d.first||this.lazyLoadState.last!==d.last;h&&this.$emit("lazy-load",d),this.lazyLoadState=d}}},onScroll:function(e){var n=this;if(this.$emit("scroll",e),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),this.isPageChanged()){if(!this.d_loading&&this.showLoader){var r=this.onScrollPositionChange(e),o=r.isRangeChanged,i=o||(this.step?this.isPageChanged():!1);i&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(function(){n.onScrollChange(e),n.d_loading&&n.showLoader&&(!n.lazy||n.loading===void 0)&&(n.d_loading=!1,n.page=n.getPageByFirst())},this.delay)}}else this.onScrollChange(e)},onResize:function(){var e=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){if(hc(e.element)){var n=e.isBoth(),r=e.isVertical(),o=e.isHorizontal(),i=[Uo(e.element),Fo(e.element)],s=i[0],a=i[1],l=s!==e.defaultWidth,u=a!==e.defaultHeight,d=n?l||u:o?l:r?u:!1;d&&(e.d_numToleratedItems=e.numToleratedItems,e.defaultWidth=s,e.defaultHeight=a,e.defaultContentWidth=Uo(e.content),e.defaultContentHeight=Fo(e.content),e.init())}},this.resizeDelay)},bindResizeListener:function(){this.resizeListener||(this.resizeListener=this.onResize.bind(this),window.addEventListener("resize",this.resizeListener),window.addEventListener("orientationchange",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),window.removeEventListener("orientationchange",this.resizeListener),this.resizeListener=null)},getOptions:function(e){var n=(this.items||[]).length,r=this.isBoth()?this.first.rows+e:this.first+e;return{index:r,count:n,first:r===0,last:r===n-1,even:r%2===0,odd:r%2!==0}},getLoaderOptions:function(e,n){var r=this.loaderArr.length;return Cs({index:e,count:r,first:e===0,last:e===r-1,even:e%2===0,odd:e%2!==0},n)},getPageByFirst:function(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this.step||1))},isPageChanged:function(e){return this.step?this.page!==this.getPageByFirst(e??this.first):!0},setContentEl:function(e){this.content=e||this.content||nu(this.element,'[data-pc-section="content"]')},elementRef:function(e){this.element=e},contentRef:function(e){this.content=e}},computed:{containerClass:function(){return["p-virtualscroller",this.class,{"p-virtualscroller-inline":this.inline,"p-virtualscroller-both p-both-scroll":this.isBoth(),"p-virtualscroller-horizontal p-horizontal-scroll":this.isHorizontal()}]},contentClass:function(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass:function(){return["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!this.$slots.loader}]},loadedItems:function(){var e=this;return this.items&&!this.d_loading?this.isBoth()?this.items.slice(this.appendOnly?0:this.first.rows,this.last.rows).map(function(n){return e.columns?n:n.slice(e.appendOnly?0:e.first.cols,e.last.cols)}):this.isHorizontal()&&this.columns?this.items:this.items.slice(this.appendOnly?0:this.first,this.last):[]},loadedRows:function(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns:function(){if(this.columns){var e=this.isBoth(),n=this.isHorizontal();if(e||n)return this.d_loading&&this.loaderDisabled?e?this.loaderArr[0]:this.loaderArr:this.columns.slice(e?this.first.cols:this.first,e?this.last.cols:this.last)}return this.columns}},components:{SpinnerIcon:ru}},IP=["tabindex"];function TP(t,e,n,r,o,i){var s=ke("SpinnerIcon");return t.disabled?(j(),ne(We,{key:1},[Qe(t.$slots,"default"),Qe(t.$slots,"content",{items:t.items,rows:t.items,columns:i.loadedColumns})],64)):(j(),ne("div",ee({key:0,ref:i.elementRef,class:i.containerClass,tabindex:t.tabindex,style:t.style,onScroll:e[0]||(e[0]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)})},t.ptmi("root")),[Qe(t.$slots,"content",{styleClass:i.contentClass,items:i.loadedItems,getItemOptions:i.getOptions,loading:o.d_loading,getLoaderOptions:i.getLoaderOptions,itemSize:t.itemSize,rows:i.loadedRows,columns:i.loadedColumns,contentRef:i.contentRef,spacerStyle:o.spacerStyle,contentStyle:o.contentStyle,vertical:i.isVertical(),horizontal:i.isHorizontal(),both:i.isBoth()},function(){return[x("div",ee({ref:i.contentRef,class:i.contentClass,style:o.contentStyle},t.ptm("content")),[(j(!0),ne(We,null,Rn(i.loadedItems,function(a,l){return Qe(t.$slots,"item",{key:l,item:a,options:i.getOptions(l)})}),128))],16)]}),t.showSpacer?(j(),ne("div",ee({key:0,class:"p-virtualscroller-spacer",style:o.spacerStyle},t.ptm("spacer")),null,16)):Zt("",!0),!t.loaderDisabled&&t.showLoader&&o.d_loading?(j(),ne("div",ee({key:1,class:i.loaderClass},t.ptm("loader")),[t.$slots&&t.$slots.loader?(j(!0),ne(We,{key:0},Rn(o.loaderArr,function(a,l){return Qe(t.$slots,"loader",{key:l,options:i.getLoaderOptions(l,i.isBoth()&&{numCols:t.d_numItemsInViewport.cols})})}),128)):Zt("",!0),Qe(t.$slots,"loadingicon",{},function(){return[ue(s,ee({spin:"",class:"p-virtualscroller-loading-icon"},t.ptm("loadingIcon")),null,16)]})],16)):Zt("",!0)],16,IP))}_1.render=TP;var SP=function(e){var n=e.dt;return`
.p-select {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: `.concat(n("select.background"),`;
    border: 1px solid `).concat(n("select.border.color"),`;
    transition: background `).concat(n("select.transition.duration"),", color ").concat(n("select.transition.duration"),", border-color ").concat(n("select.transition.duration"),`,
        outline-color `).concat(n("select.transition.duration"),", box-shadow ").concat(n("select.transition.duration"),`;
    border-radius: `).concat(n("select.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("select.shadow"),`;
}

.p-select:not(.p-disabled):hover {
    border-color: `).concat(n("select.hover.border.color"),`;
}

.p-select:not(.p-disabled).p-focus {
    border-color: `).concat(n("select.focus.border.color"),`;
    box-shadow: `).concat(n("select.focus.ring.shadow"),`;
    outline: `).concat(n("select.focus.ring.width")," ").concat(n("select.focus.ring.style")," ").concat(n("select.focus.ring.color"),`;
    outline-offset: `).concat(n("select.focus.ring.offset"),`;
}

.p-select.p-variant-filled {
    background: `).concat(n("select.filled.background"),`;
}

.p-select.p-variant-filled:not(.p-disabled):hover {
    background: `).concat(n("select.filled.hover.background"),`;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus {
    background: `).concat(n("select.filled.focus.background"),`;
}

.p-select.p-invalid {
    border-color: `).concat(n("select.invalid.border.color"),`;
}

.p-select.p-disabled {
    opacity: 1;
    background: `).concat(n("select.disabled.background"),`;
}

.p-select-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: `).concat(n("select.clear.icon.color"),`;
    right: `).concat(n("select.dropdown.width"),`;
}

.p-select-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: `).concat(n("select.dropdown.color"),`;
    width: `).concat(n("select.dropdown.width"),`;
    border-top-right-radius: `).concat(n("select.border.radius"),`;
    border-bottom-right-radius: `).concat(n("select.border.radius"),`;
}

.p-select-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: `).concat(n("select.padding.y")," ").concat(n("select.padding.x"),`;
    text-overflow: ellipsis;
    cursor: pointer;
    color: `).concat(n("select.color"),`;
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-select-label.p-placeholder {
    color: `).concat(n("select.placeholder.color"),`;
}

.p-select:has(.p-select-clear-icon) .p-select-label {
    padding-right: calc(1rem + `).concat(n("select.padding.x"),`);
}

.p-select.p-disabled .p-select-label {
    color: `).concat(n("select.disabled.color"),`;
}

.p-select-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-select-label {
    cursor: default;
}

.p-select .p-select-overlay {
    min-width: 100%;
}

.p-select-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: `).concat(n("select.overlay.background"),`;
    color: `).concat(n("select.overlay.color"),`;
    border: 1px solid `).concat(n("select.overlay.border.color"),`;
    border-radius: `).concat(n("select.overlay.border.radius"),`;
    box-shadow: `).concat(n("select.overlay.shadow"),`;
}

.p-select-header {
    padding: `).concat(n("select.list.header.padding"),`;
}

.p-select-filter {
    width: 100%;
}

.p-select-list-container {
    overflow: auto;
}

.p-select-option-group {
    cursor: auto;
    margin: 0;
    padding: `).concat(n("select.option.group.padding"),`;
    background: `).concat(n("select.option.group.background"),`;
    color: `).concat(n("select.option.group.color"),`;
    font-weight: `).concat(n("select.option.group.font.weight"),`;
}

.p-select-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: `).concat(n("select.list.padding"),`;
    gap: `).concat(n("select.list.gap"),`;
    display: flex;
    flex-direction: column;
}

.p-select-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: `).concat(n("select.option.padding"),`;
    border: 0 none;
    color: `).concat(n("select.option.color"),`;
    background: transparent;
    transition: background `).concat(n("select.transition.duration"),", color ").concat(n("select.transition.duration"),", border-color ").concat(n("select.transition.duration"),`,
            box-shadow `).concat(n("select.transition.duration"),", outline-color ").concat(n("select.transition.duration"),`;
    border-radius: `).concat(n("select.option.border.radius"),`;
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
    background: `).concat(n("select.option.focus.background"),`;
    color: `).concat(n("select.option.focus.color"),`;
}

.p-select-option.p-select-option-selected {
    background: `).concat(n("select.option.selected.background"),`;
    color: `).concat(n("select.option.selected.color"),`;
}

.p-select-option.p-select-option-selected.p-focus {
    background: `).concat(n("select.option.selected.focus.background"),`;
    color: `).concat(n("select.option.selected.focus.color"),`;
}

.p-select-option-check-icon {
    position: relative;
    margin-inline-start: `).concat(n("select.checkmark.gutter.start"),`;
    margin-inline-end: `).concat(n("select.checkmark.gutter.end"),`;
    color: `).concat(n("select.checkmark.color"),`;
}

.p-select-empty-message {
    padding: `).concat(n("select.empty.message.padding"),`;
}

.p-select-fluid {
    display: flex;
}
`)},AP={root:function(e){var n=e.instance,r=e.props,o=e.state;return["p-select p-component p-inputwrapper",{"p-disabled":r.disabled,"p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":n.$primevue.config.inputStyle==="filled"||n.$primevue.config.inputVariant==="filled","p-focus":o.focused,"p-inputwrapper-filled":n.hasSelectedOption,"p-inputwrapper-focus":o.focused||o.overlayVisible,"p-select-open":o.overlayVisible,"p-select-fluid":n.hasFluid}]},label:function(e){var n=e.instance,r=e.props;return["p-select-label",{"p-placeholder":!r.editable&&n.label===r.placeholder,"p-select-label-empty":!r.editable&&!n.$slots.value&&(n.label==="p-emptylabel"||n.label.length===0)}]},clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingicon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:function(e){var n=e.instance,r=e.props,o=e.state,i=e.option,s=e.focusedOption;return["p-select-option",{"p-select-option-selected":n.isSelected(i)&&r.highlightOnSelect,"p-focus":o.focusedOptionIndex===s,"p-disabled":n.isOptionDisabled(i)}]},optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},CP=je.extend({name:"select",theme:SP,classes:AP}),xP={name:"BaseSelect",extends:Vn,props:{modelValue:null,options:Array,optionLabel:[String,Function],optionValue:[String,Function],optionDisabled:[String,Function],optionGroupLabel:[String,Function],optionGroupChildren:[String,Function],scrollHeight:{type:String,default:"14rem"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},dataKey:null,showClear:{type:Boolean,default:!1},fluid:{type:Boolean,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},labelId:{type:String,default:null},labelClass:{type:[String,Object],default:null},labelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},appendTo:{type:[String,Object],default:"body"},loading:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},resetFilterOnHide:{type:Boolean,default:!1},resetFilterOnClear:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!0},checkmark:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:CP,provide:function(){return{$pcSelect:this,$parentInstance:this}}};function Aa(t){"@babel/helpers - typeof";return Aa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Aa(t)}function PP(t){return NP(t)||RP(t)||OP(t)||kP()}function kP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OP(t,e){if(t){if(typeof t=="string")return sf(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?sf(t,e):void 0}}function RP(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function NP(t){if(Array.isArray(t))return sf(t)}function sf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function ay(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function ly(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ay(Object(n),!0).forEach(function(r){w1(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ay(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function w1(t,e,n){return(e=LP(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function LP(t){var e=DP(t,"string");return Aa(e)=="symbol"?e:e+""}function DP(t,e){if(Aa(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Aa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var E1={name:"Select",extends:xP,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur","before-show","before-hide","show","hide","filter"],inject:{$pcFluid:{default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,labelClickListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{"$attrs.id":function(e){this.id=e||oy()},modelValue:function(){this.isModelValueChanged=!0},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||oy(),this.autoUpdateModel(),this.bindLabelClickListener()},updated:function(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindLabelClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(Di.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,n){return this.virtualScrollerDisabled?e:n&&n(e).index},getOptionLabel:function(e){return this.optionLabel?dr(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?dr(e,this.optionValue):e},getOptionRenderKey:function(e,n){return(this.dataKey?dr(e,this.dataKey):this.getOptionLabel(e))+"_"+n},getPTItemOptions:function(e,n,r,o){return this.ptm(o,{context:{option:e,index:r,selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(r,n),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?dr(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return dr(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return dr(e,this.optionGroupChildren)},getAriaPosInset:function(e){var n=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(r){return n.isOptionGroup(r)}).length:e)+1},show:function(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex(),e&&Kr(this.$refs.focusInput)},hide:function(e){var n=this,r=function(){n.$emit("before-hide"),n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,n.searchValue="",n.resetFilterOnHide&&(n.filterValue=null),e&&Kr(n.$refs.focusInput)};setTimeout(function(){r()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex(),this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled||WC()){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,this.editable);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!n&&vC(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked=!1},onEditableInput:function(e){var n=e.target.value;this.searchValue="";var r=this.searchOptions(e,n);!r&&(this.focusedOptionIndex=-1),this.updateModel(e,n),!this.overlayVisible&&Ne(n)&&this.show()},onContainerClick:function(e){this.disabled||this.loading||e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]')||((!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.clicked=!0)},onClearClick:function(e){this.updateModel(e,null),this.resetFilterOnClear&&(this.filterValue=null)},onFirstHiddenFocus:function(e){var n=e.relatedTarget===this.$refs.focusInput?UC(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;Kr(n)},onLastHiddenFocus:function(e){var n=e.relatedTarget===this.$refs.focusInput?jC(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;Kr(n)},onOptionSelect:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,o=this.getOptionValue(n);this.updateModel(e,o),r&&this.hide(!0)},onOptionMouseMove:function(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)},onFilterChange:function(e){var n=e.target.value;this.filterValue=n,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:n}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(e){if(!e.isComposing)switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(e){yP.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n)}e.preventDefault()},onArrowUpKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(e.altKey&&!n)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var r=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,r),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&(this.focusedOptionIndex=-1)},onHomeKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var r=e.currentTarget;e.shiftKey?r.setSelectionRange(0,e.target.selectionStart):(r.setSelectionRange(0,0),this.focusedOptionIndex=-1)}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onEndKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var r=e.currentTarget;if(e.shiftKey)r.setSelectionRange(e.target.selectionStart,r.value.length);else{var o=r.value.length;r.setSelectionRange(o,o),this.focusedOptionIndex=-1}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)),e.preventDefault()},onSpaceKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;!n&&this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault(),e.stopPropagation()},onTabKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n||(this.overlayVisible&&this.hasFocusableElements()?(Kr(this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&!this.overlayVisible&&this.show()},onOverlayEnter:function(e){var n=this;Di.set("overlay",e,this.$primevue.config.zIndex.overlay),DC(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView(),setTimeout(function(){n.autoFilterFocus&&Kr(n.$refs.filterInput.$el)},1)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){var e=this;this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.autoFilterFocus&&this.filter&&this.$nextTick(function(){Kr(e.$refs.filterInput.$el)}),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){Di.clear(e)},alignOverlay:function(){this.appendTo==="self"?VC(this.overlay,this.$el):(this.overlay.style.minWidth=t1(this.$el)+"px",LC(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&!e.$el.contains(n.target)&&!e.overlay.contains(n.target)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new oP(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!qC()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindLabelClickListener:function(){var e=this;if(!this.editable&&!this.labelClickListener){var n=document.querySelector('label[for="'.concat(this.labelId,'"]'));n&&hc(n)&&(this.labelClickListener=function(){Kr(e.$refs.focusInput)},n.addEventListener("click",this.labelClickListener))}},unbindLabelClickListener:function(){if(this.labelClickListener){var e=document.querySelector('label[for="'.concat(this.labelId,'"]'));e&&hc(e)&&e.removeEventListener("click",this.labelClickListener)}},hasFocusableElements:function(){return wh(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionMatched:function(e){var n;return this.isValidOption(e)&&typeof this.getOptionLabel(e)=="string"&&((n=this.getOptionLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(e){return Ne(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){return W0(this.modelValue,this.getOptionValue(e),this.equalityKey)},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return Ng(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,r=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(o){return n.isValidOption(o)}):-1;return r>-1?r+e+1:e},findPrevOptionIndex:function(e){var n=this,r=e>0?Ng(this.visibleOptions.slice(0,e),function(o){return n.isValidOption(o)}):-1;return r>-1?r:e},findSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions:function(e,n){var r=this;this.searchValue=(this.searchValue||"")+n;var o=-1,i=!1;return Ne(this.searchValue)&&(this.focusedOptionIndex!==-1?(o=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(s){return r.isOptionMatched(s)}),o=o===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(s){return r.isOptionMatched(s)}):o+this.focusedOptionIndex):o=this.visibleOptions.findIndex(function(s){return r.isOptionMatched(s)}),o!==-1&&(i=!0),o===-1&&this.focusedOptionIndex===-1&&(o=this.findFirstFocusedOptionIndex()),o!==-1&&this.changeFocusedOptionIndex(e,o)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){r.searchValue="",r.searchTimeout=null},500),i},changeFocusedOptionIndex:function(e,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[n],!1))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var r=n!==-1?"".concat(e.id,"_").concat(n):e.focusedOptionId,o=nu(e.list,'li[id="'.concat(r,'"]'));o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"start"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(n!==-1?n:e.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,n){this.$emit("update:modelValue",n),this.$emit("change",{originalEvent:e,value:n})},flatOptions:function(e){var n=this;return(e||[]).reduce(function(r,o,i){r.push({optionGroup:o,group:!0,index:i});var s=n.getOptionGroupChildren(o);return s&&s.forEach(function(a){return r.push(a)}),r},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,n){this.list=e,n&&n(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){var e=this,n=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var r=YC.filter(n,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var o=this.options||[],i=[];return o.forEach(function(s){var a=e.getOptionGroupChildren(s),l=a.filter(function(u){return r.includes(u)});l.length>0&&i.push(ly(ly({},s),{},w1({},typeof e.optionGroupChildren=="string"?e.optionGroupChildren:"items",PP(l))))}),this.flatOptions(i)}return r}return n},hasSelectedOption:function(){return Ne(this.modelValue)},label:function(){var e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.placeholder||"p-emptylabel"},editableInputValue:function(){var e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.modelValue||""},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},filterResultMessageText:function(){return Ne(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(n){return!e.isOptionGroup(n)}).length},isClearIconVisible:function(){return this.showClear&&this.modelValue!=null&&Ne(this.options)},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},hasFluid:function(){return rr(this.fluid)?!!this.$pcFluid:this.fluid}},directives:{ripple:Th},components:{InputText:Ch,VirtualScroller:_1,Portal:Sh,InputIcon:v1,IconField:y1,TimesIcon:Ah,ChevronDownIcon:m1,SpinnerIcon:ru,SearchIcon:g1,CheckIcon:pc,BlankIcon:p1}},VP=["id"],MP=["id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],$P=["id","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-disabled"],FP=["id"],UP=["id"],jP=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focused","data-p-disabled"];function BP(t,e,n,r,o,i){var s=ke("SpinnerIcon"),a=ke("InputText"),l=ke("SearchIcon"),u=ke("InputIcon"),d=ke("IconField"),h=ke("CheckIcon"),p=ke("BlankIcon"),g=ke("VirtualScroller"),_=ke("Portal"),P=fh("ripple");return j(),ne("div",ee({ref:"container",id:o.id,class:t.cx("root"),onClick:e[11]||(e[11]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)})},t.ptmi("root")),[t.editable?(j(),ne("input",ee({key:0,ref:"focusInput",id:t.labelId||t.inputId,type:"text",class:[t.cx("label"),t.inputClass,t.labelClass],style:[t.inputStyle,t.labelStyle],value:i.editableInputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":o.overlayVisible,"aria-controls":o.id+"_list","aria-activedescendant":o.focused?i.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)}),onInput:e[3]||(e[3]=function(){return i.onEditableInput&&i.onEditableInput.apply(i,arguments)})},t.ptm("label")),null,16,MP)):(j(),ne("span",ee({key:1,ref:"focusInput",id:t.labelId||t.inputId,class:[t.cx("label"),t.inputClass,t.labelClass],style:[t.inputStyle,t.labelStyle],tabindex:t.disabled?-1:t.tabindex,role:"combobox","aria-label":t.ariaLabel||(i.label==="p-emptylabel"?void 0:i.label),"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":o.overlayVisible,"aria-controls":o.id+"_list","aria-activedescendant":o.focused?i.focusedOptionId:void 0,"aria-disabled":t.disabled,onFocus:e[4]||(e[4]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[5]||(e[5]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[6]||(e[6]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},t.ptm("label")),[Qe(t.$slots,"value",{value:t.modelValue,placeholder:t.placeholder},function(){var k;return[it(Oe(i.label==="p-emptylabel"?" ":(k=i.label)!==null&&k!==void 0?k:"empty"),1)]})],16,$P)),i.isClearIconVisible?Qe(t.$slots,"clearicon",{key:2,class:cn(t.cx("clearIcon")),clearCallback:i.onClearClick},function(){return[(j(),Be(so(t.clearIcon?"i":"TimesIcon"),ee({ref:"clearIcon",class:[t.cx("clearIcon"),t.clearIcon],onClick:i.onClearClick},t.ptm("clearIcon"),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):Zt("",!0),x("div",ee({class:t.cx("dropdown")},t.ptm("dropdown")),[t.loading?Qe(t.$slots,"loadingicon",{key:0,class:cn(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(j(),ne("span",ee({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(j(),Be(s,ee({key:1,class:t.cx("loadingIcon"),spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):Qe(t.$slots,"dropdownicon",{key:1,class:cn(t.cx("dropdownIcon"))},function(){return[(j(),Be(so(t.dropdownIcon?"span":"ChevronDownIcon"),ee({class:[t.cx("dropdownIcon"),t.dropdownIcon],"aria-hidden":"true"},t.ptm("dropdownIcon")),null,16,["class"]))]})],16),ue(_,{appendTo:t.appendTo},{default:et(function(){return[ue(os,ee({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},t.ptm("transition")),{default:et(function(){return[o.overlayVisible?(j(),ne("div",ee({key:0,ref:i.overlayRef,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:[t.panelStyle,t.overlayStyle],onClick:e[9]||(e[9]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:e[10]||(e[10]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)})},t.ptm("overlay")),[x("span",ee({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[7]||(e[7]=function(){return i.onFirstHiddenFocus&&i.onFirstHiddenFocus.apply(i,arguments)})},t.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),Qe(t.$slots,"header",{value:t.modelValue,options:i.visibleOptions}),t.filter?(j(),ne("div",ee({key:0,class:t.cx("header")},t.ptm("header")),[ue(d,{unstyled:t.unstyled,pt:t.ptm("pcFilterContainer")},{default:et(function(){return[ue(a,{ref:"filterInput",type:"text",value:o.filterValue,onVnodeMounted:i.onFilterUpdated,onVnodeUpdated:i.onFilterUpdated,class:cn(t.cx("pcFilter")),placeholder:t.filterPlaceholder,variant:t.variant,unstyled:t.unstyled,role:"searchbox",autocomplete:"off","aria-owns":o.id+"_list","aria-activedescendant":i.focusedOptionId,onKeydown:i.onFilterKeyDown,onBlur:i.onFilterBlur,onInput:i.onFilterChange,pt:t.ptm("pcFilter")},null,8,["value","onVnodeMounted","onVnodeUpdated","class","placeholder","variant","unstyled","aria-owns","aria-activedescendant","onKeydown","onBlur","onInput","pt"]),ue(u,{unstyled:t.unstyled,pt:t.ptm("pcFilterIconContainer")},{default:et(function(){return[Qe(t.$slots,"filtericon",{},function(){return[t.filterIcon?(j(),ne("span",ee({key:0,class:t.filterIcon},t.ptm("filterIcon")),null,16)):(j(),Be(l,Sb(ee({key:1},t.ptm("filterIcon"))),null,16))]})]}),_:3},8,["unstyled","pt"])]}),_:3},8,["unstyled","pt"]),x("span",ee({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),Oe(i.filterResultMessageText),17)],16)):Zt("",!0),x("div",ee({class:t.cx("listContainer"),style:{"max-height":i.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("listContainer")),[ue(g,ee({ref:i.virtualScrollerRef},t.virtualScrollerOptions,{items:i.visibleOptions,style:{height:t.scrollHeight},tabindex:-1,disabled:i.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),CS({content:et(function(k){var N=k.styleClass,O=k.contentRef,R=k.items,L=k.getItemOptions,W=k.contentStyle,q=k.itemSize;return[x("ul",ee({ref:function(v){return i.listRef(v,O)},id:o.id+"_list",class:[t.cx("list"),N],style:W,role:"listbox"},t.ptm("list")),[(j(!0),ne(We,null,Rn(R,function(I,v){return j(),ne(We,{key:i.getOptionRenderKey(I,i.getOptionIndex(v,L))},[i.isOptionGroup(I)?(j(),ne("li",ee({key:0,id:o.id+"_"+i.getOptionIndex(v,L),style:{height:q?q+"px":void 0},class:t.cx("optionGroup"),role:"option",ref_for:!0},t.ptm("optionGroup")),[Qe(t.$slots,"optiongroup",{option:I.optionGroup,index:i.getOptionIndex(v,L)},function(){return[x("span",ee({class:t.cx("optionGroupLabel"),ref_for:!0},t.ptm("optionGroupLabel")),Oe(i.getOptionGroupLabel(I.optionGroup)),17)]})],16,UP)):ut((j(),ne("li",ee({key:1,id:o.id+"_"+i.getOptionIndex(v,L),class:t.cx("option",{option:I,focusedOption:i.getOptionIndex(v,L)}),style:{height:q?q+"px":void 0},role:"option","aria-label":i.getOptionLabel(I),"aria-selected":i.isSelected(I),"aria-disabled":i.isOptionDisabled(I),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(v,L)),onClick:function(T){return i.onOptionSelect(T,I)},onMousemove:function(T){return i.onOptionMouseMove(T,i.getOptionIndex(v,L))},"data-p-selected":i.isSelected(I),"data-p-focused":o.focusedOptionIndex===i.getOptionIndex(v,L),"data-p-disabled":i.isOptionDisabled(I),ref_for:!0},i.getPTItemOptions(I,L,v,"option")),[t.checkmark?(j(),ne(We,{key:0},[i.isSelected(I)?(j(),Be(h,ee({key:0,class:t.cx("optionCheckIcon"),ref_for:!0},t.ptm("optionCheckIcon")),null,16,["class"])):(j(),Be(p,ee({key:1,class:t.cx("optionBlankIcon"),ref_for:!0},t.ptm("optionBlankIcon")),null,16,["class"]))],64)):Zt("",!0),Qe(t.$slots,"option",{option:I,selected:i.isSelected(I),index:i.getOptionIndex(v,L)},function(){return[x("span",ee({class:t.cx("optionLabel"),ref_for:!0},t.ptm("optionLabel")),Oe(i.getOptionLabel(I)),17)]})],16,jP)),[[P]])],64)}),128)),o.filterValue&&(!R||R&&R.length===0)?(j(),ne("li",ee({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[Qe(t.$slots,"emptyfilter",{},function(){return[it(Oe(i.emptyFilterMessageText),1)]})],16)):!t.options||t.options&&t.options.length===0?(j(),ne("li",ee({key:1,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[Qe(t.$slots,"empty",{},function(){return[it(Oe(i.emptyMessageText),1)]})],16)):Zt("",!0)],16,FP)]}),_:2},[t.$slots.loader?{name:"loader",fn:et(function(k){var N=k.options;return[Qe(t.$slots,"loader",{options:N})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),Qe(t.$slots,"footer",{value:t.modelValue,options:i.visibleOptions}),!t.options||t.options&&t.options.length===0?(j(),ne("span",ee({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),Oe(i.emptyMessageText),17)):Zt("",!0),x("span",ee({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),Oe(i.selectedMessageText),17),x("span",ee({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[8]||(e[8]=function(){return i.onLastHiddenFocus&&i.onLastHiddenFocus.apply(i,arguments)})},t.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16)):Zt("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16,VP)}E1.render=BP;var cy={};/**
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
 */const I1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},zP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const o=t[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=t[n++];e[r++]=String.fromCharCode((o&31)<<6|i&63)}else if(o>239&&o<365){const i=t[n++],s=t[n++],a=t[n++],l=((o&7)<<18|(i&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],s=t[n++];e[r++]=String.fromCharCode((o&15)<<12|(i&63)<<6|s&63)}}return e.join("")},T1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<t.length;o+=3){const i=t[o],s=o+1<t.length,a=s?t[o+1]:0,l=o+2<t.length,u=l?t[o+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(p=64)),r.push(n[d],n[h],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(I1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<t.length;){const i=n[t.charAt(o++)],a=o<t.length?n[t.charAt(o)]:0;++o;const u=o<t.length?n[t.charAt(o)]:64;++o;const h=o<t.length?n[t.charAt(o)]:64;if(++o,i==null||a==null||u==null||h==null)throw new HP;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KP=function(t){const e=I1(t);return T1.encodeByteArray(e,!0)},mc=function(t){return KP(t).replace(/\./g,"")},S1=function(t){try{return T1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function WP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qP=()=>WP().__FIREBASE_DEFAULTS__,GP=()=>{if(typeof process>"u"||typeof cy>"u")return;const t=cy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&S1(t[1]);return e&&JSON.parse(e)},ou=()=>{try{return qP()||GP()||QP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},A1=t=>{var e,n;return(n=(e=ou())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},YP=t=>{const e=A1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},C1=()=>{var t;return(t=ou())===null||t===void 0?void 0:t.config},x1=t=>{var e;return(e=ou())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class XP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function JP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mc(JSON.stringify(n)),mc(JSON.stringify(s)),""].join(".")}/**
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
 */function Ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ht())}function ek(){var t;const e=(t=ou())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ok(){const t=Ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ik(){return!ek()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sk(){try{return typeof indexedDB=="object"}catch{return!1}}function ak(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var i;e(((i=o.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const lk="FirebaseError";class Vr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lk,Object.setPrototypeOf(this,Vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ha.prototype.create)}}class Ha{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,i=this.errors[e],s=i?ck(i,r):"Error",a=`${this.serviceName}: ${s} (${o}).`;return new Vr(o,a,r)}}function ck(t,e){return t.replace(uk,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const uk=/\{\$([^}]+)}/g;function dk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const i=t[o],s=e[o];if(uy(i)&&uy(s)){if(!gc(i,s))return!1}else if(i!==s)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function uy(t){return t!==null&&typeof t=="object"}/**
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
 */function Ka(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,i]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(i)}}),e}function Ds(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fk(t,e){const n=new hk(t,e);return n.subscribe.bind(n)}class hk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pk(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=ad),o.error===void 0&&(o.error=ad),o.complete===void 0&&(o.complete=ad);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ad(){}/**
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
 */function Tt(t){return t&&t._delegate?t._delegate:t}class Xo{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vo="[DEFAULT]";/**
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
 */class mk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new XP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(o)return null;throw i}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yk(e))try{this.getOrInitializeService({instanceIdentifier:Vo})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:o});r.resolve(i)}catch{}}}}clearInstance(e=Vo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vo){return this.instances.has(e)}getOptions(e=Vo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&s.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(o,i);const s=this.instances.get(o);return s&&e(s,o),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vo){return this.component?this.component.multipleInstances?e:Vo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gk(t){return t===Vo?void 0:t}function yk(t){return t.instantiationMode==="EAGER"}/**
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
 */class vk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Pe||(Pe={}));const bk={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},_k=Pe.INFO,wk={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},Ek=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),o=wk[e];if(o)console[o](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xh{constructor(e){this.name=e,this._logLevel=_k,this._logHandler=Ek,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const Ik=(t,e)=>e.some(n=>t instanceof n);let dy,fy;function Tk(){return dy||(dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sk(){return fy||(fy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const P1=new WeakMap,af=new WeakMap,k1=new WeakMap,ld=new WeakMap,Ph=new WeakMap;function Ak(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{n(co(t.result)),o()},s=()=>{r(t.error),o()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&P1.set(n,t)}).catch(()=>{}),Ph.set(e,t),e}function Ck(t){if(af.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{n(),o()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});af.set(t,e)}let lf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return af.get(t);if(e==="objectStoreNames")return t.objectStoreNames||k1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return co(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xk(t){lf=t(lf)}function Pk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cd(this),e,...n);return k1.set(r,e.sort?e.sort():[e]),co(r)}:Sk().includes(t)?function(...e){return t.apply(cd(this),e),co(P1.get(this))}:function(...e){return co(t.apply(cd(this),e))}}function kk(t){return typeof t=="function"?Pk(t):(t instanceof IDBTransaction&&Ck(t),Ik(t,Tk())?new Proxy(t,lf):t)}function co(t){if(t instanceof IDBRequest)return Ak(t);if(ld.has(t))return ld.get(t);const e=kk(t);return e!==t&&(ld.set(t,e),Ph.set(e,t)),e}const cd=t=>Ph.get(t);function Ok(t,e,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(t,e),a=co(s);return r&&s.addEventListener("upgradeneeded",l=>{r(co(s.result),l.oldVersion,l.newVersion,co(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),o&&l.addEventListener("versionchange",u=>o(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Rk=["get","getKey","getAll","getAllKeys","count"],Nk=["put","add","delete","clear"],ud=new Map;function hy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ud.get(e))return ud.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=Nk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Rk.includes(n)))return;const i=async function(s,...a){const l=this.transaction(s,o?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),o&&l.done]))[0]};return ud.set(e,i),i}xk(t=>({...t,get:(e,n,r)=>hy(e,n)||t.get(e,n,r),has:(e,n)=>!!hy(e,n)||t.has(e,n)}));/**
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
 */class Lk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Dk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cf="@firebase/app",py="0.10.13";/**
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
 */const Cr=new xh("@firebase/app"),Vk="@firebase/app-compat",Mk="@firebase/analytics-compat",$k="@firebase/analytics",Fk="@firebase/app-check-compat",Uk="@firebase/app-check",jk="@firebase/auth",Bk="@firebase/auth-compat",zk="@firebase/database",Hk="@firebase/data-connect",Kk="@firebase/database-compat",Wk="@firebase/functions",qk="@firebase/functions-compat",Gk="@firebase/installations",Qk="@firebase/installations-compat",Yk="@firebase/messaging",Xk="@firebase/messaging-compat",Jk="@firebase/performance",Zk="@firebase/performance-compat",eO="@firebase/remote-config",tO="@firebase/remote-config-compat",nO="@firebase/storage",rO="@firebase/storage-compat",oO="@firebase/firestore",iO="@firebase/vertexai-preview",sO="@firebase/firestore-compat",aO="firebase",lO="10.14.1";/**
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
 */const uf="[DEFAULT]",cO={[cf]:"fire-core",[Vk]:"fire-core-compat",[$k]:"fire-analytics",[Mk]:"fire-analytics-compat",[Uk]:"fire-app-check",[Fk]:"fire-app-check-compat",[jk]:"fire-auth",[Bk]:"fire-auth-compat",[zk]:"fire-rtdb",[Hk]:"fire-data-connect",[Kk]:"fire-rtdb-compat",[Wk]:"fire-fn",[qk]:"fire-fn-compat",[Gk]:"fire-iid",[Qk]:"fire-iid-compat",[Yk]:"fire-fcm",[Xk]:"fire-fcm-compat",[Jk]:"fire-perf",[Zk]:"fire-perf-compat",[eO]:"fire-rc",[tO]:"fire-rc-compat",[nO]:"fire-gcs",[rO]:"fire-gcs-compat",[oO]:"fire-fst",[sO]:"fire-fst-compat",[iO]:"fire-vertex","fire-js":"fire-js",[aO]:"fire-js-all"};/**
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
 */const yc=new Map,uO=new Map,df=new Map;function my(t,e){try{t.container.addComponent(e)}catch(n){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ki(t){const e=t.name;if(df.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;df.set(e,t);for(const n of yc.values())my(n,t);for(const n of uO.values())my(n,t);return!0}function kh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kn(t){return t.settings!==void 0}/**
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
 */const dO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},uo=new Ha("app","Firebase",dO);/**
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
 */class fO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw uo.create("app-deleted",{appName:this._name})}}/**
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
 */const is=lO;function O1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:uf,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw uo.create("bad-app-name",{appName:String(o)});if(n||(n=C1()),!n)throw uo.create("no-options");const i=yc.get(o);if(i){if(gc(n,i.options)&&gc(r,i.config))return i;throw uo.create("duplicate-app",{appName:o})}const s=new vk(o);for(const l of df.values())s.addComponent(l);const a=new fO(n,r,s);return yc.set(o,a),a}function R1(t=uf){const e=yc.get(t);if(!e&&t===uf&&C1())return O1();if(!e)throw uo.create("no-app",{appName:t});return e}function fo(t,e,n){var r;let o=(r=cO[t])!==null&&r!==void 0?r:t;n&&(o+=`-${n}`);const i=o.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${o}" with version "${e}":`];i&&a.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(a.join(" "));return}Ki(new Xo(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const hO="firebase-heartbeat-database",pO=1,Ca="firebase-heartbeat-store";let dd=null;function N1(){return dd||(dd=Ok(hO,pO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ca)}catch(n){console.warn(n)}}}}).catch(t=>{throw uo.create("idb-open",{originalErrorMessage:t.message})})),dd}async function mO(t){try{const n=(await N1()).transaction(Ca),r=await n.objectStore(Ca).get(L1(t));return await n.done,r}catch(e){if(e instanceof Vr)Cr.warn(e.message);else{const n=uo.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(n.message)}}}async function gy(t,e){try{const r=(await N1()).transaction(Ca,"readwrite");await r.objectStore(Ca).put(e,L1(t)),await r.done}catch(n){if(n instanceof Vr)Cr.warn(n.message);else{const r=uo.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cr.warn(r.message)}}}function L1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gO=1024,yO=30*24*60*60*1e3;class vO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _O(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=yy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=yO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yy(),{heartbeatsToSend:r,unsentEntries:o}=bO(this._heartbeatsCache.heartbeats),i=mc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Cr.warn(n),""}}}function yy(){return new Date().toISOString().substring(0,10)}function bO(t,e=gO){const n=[];let r=t.slice();for(const o of t){const i=n.find(s=>s.agent===o.agent);if(i){if(i.dates.push(o.date),vy(n)>e){i.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),vy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _O{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sk()?ak().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return gy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return gy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function vy(t){return mc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wO(t){Ki(new Xo("platform-logger",e=>new Lk(e),"PRIVATE")),Ki(new Xo("heartbeat",e=>new vO(e),"PRIVATE")),fo(cf,py,t),fo(cf,py,"esm2017"),fo("fire-js","")}wO("");function Oh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}function D1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EO=D1,V1=new Ha("auth","Firebase",D1());/**
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
 */const vc=new xh("@firebase/auth");function IO(t,...e){vc.logLevel<=Pe.WARN&&vc.warn(`Auth (${is}): ${t}`,...e)}function Hl(t,...e){vc.logLevel<=Pe.ERROR&&vc.error(`Auth (${is}): ${t}`,...e)}/**
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
 */function Ln(t,...e){throw Rh(t,...e)}function Wn(t,...e){return Rh(t,...e)}function M1(t,e,n){const r=Object.assign(Object.assign({},EO()),{[e]:n});return new Ha("auth","Firebase",r).create(e,{appName:t.name})}function qn(t){return M1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return V1.create(t,...e)}function pe(t,e,...n){if(!t)throw Rh(e,...n)}function yr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hl(e),new Error(e)}function xr(t,e){t||yr(e)}/**
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
 */function ff(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function TO(){return by()==="http:"||by()==="https:"}function by(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function SO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TO()||nk()||"connection"in navigator)?navigator.onLine:!0}function AO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,xr(n>e,"Short delay should be less than long delay!"),this.isMobile=ZP()||rk()}get(){return SO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nh(t,e){xr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xO=new Wa(3e4,6e4);function To(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mr(t,e,n,r,o={}){return F1(t,o,async()=>{let i={},s={};r&&(e==="GET"?s=r:i={body:JSON.stringify(r)});const a=Ka(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return tk()||(u.referrerPolicy="no-referrer"),$1.fetch()(U1(t,t.config.apiHost,n,a),u)})}async function F1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},CO),e);try{const o=new kO(t),i=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Ol(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const a=i.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ol(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ol(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ol(t,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw M1(t,d,u);Ln(t,d)}}catch(o){if(o instanceof Vr)throw o;Ln(t,"network-request-failed",{message:String(o)})}}async function qa(t,e,n,r,o={}){const i=await Mr(t,e,n,r,o);return"mfaPendingCredential"in i&&Ln(t,"multi-factor-auth-required",{_serverResponse:i}),i}function U1(t,e,n,r){const o=`${e}${n}?${r}`;return t.config.emulator?Nh(t.config,o):`${t.config.apiScheme}://${o}`}function PO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wn(this.auth,"network-request-failed")),xO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ol(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=Wn(t,e,r);return o.customData._tokenResponse=n,o}function _y(t){return t!==void 0&&t.enterprise!==void 0}class OO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return PO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function RO(t,e){return Mr(t,"GET","/v2/recaptchaConfig",To(t,e))}/**
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
 */async function NO(t,e){return Mr(t,"POST","/v1/accounts:delete",e)}async function j1(t,e){return Mr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LO(t,e=!1){const n=Tt(t),r=await n.getIdToken(e),o=Lh(r);pe(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const i=typeof o.firebase=="object"?o.firebase:void 0,s=i==null?void 0:i.sign_in_provider;return{claims:o,token:r,authTime:Xs(fd(o.auth_time)),issuedAtTime:Xs(fd(o.iat)),expirationTime:Xs(fd(o.exp)),signInProvider:s||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fd(t){return Number(t)*1e3}function Lh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hl("JWT malformed, contained fewer than 3 sections"),null;try{const o=S1(n);return o?JSON.parse(o):(Hl("Failed to decode base64 JWT payload"),null)}catch(o){return Hl("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function wy(t){const e=Lh(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vr&&DO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class VO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bc(t){var e;const n=t.auth,r=await t.getIdToken(),o=await Wi(t,j1(n,{idToken:r}));pe(o==null?void 0:o.users.length,n,"internal-error");const i=o.users[0];t._notifyReloadListener(i);const s=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?B1(i.providerUserInfo):[],a=$O(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new hf(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function MO(t){const e=Tt(t);await bc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $O(t,e){return[...t.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function B1(t){return t.map(e=>{var{providerId:n}=e,r=Oh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function FO(t,e){const n=await F1(t,{},async()=>{const r=Ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:i}=t.config,s=U1(t,o,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$1.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UO(t,e){return Mr(t,"POST","/v2/accounts:revokeToken",To(t,e))}/**
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
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=wy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:i}=await FO(e,n);this.updateTokensAndExpiration(r,o,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:i}=n,s=new Vi;return r&&(pe(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),o&&(pe(typeof o=="string","internal-error",{appName:e}),s.accessToken=o),i&&(pe(typeof i=="number","internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return yr("not implemented")}}/**
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
 */function Wr(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vr{constructor(e){var{uid:n,auth:r,stsTokenManager:o}=e,i=Oh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LO(this,e)}reload(){return MO(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(qn(this.auth));const e=await this.getIdToken();return await Wi(this,NO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,o,i,s,a,l,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(o=n.email)!==null&&o!==void 0?o:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(s=n.photoURL)!==null&&s!==void 0?s:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:R,emailVerified:L,isAnonymous:W,providerData:q,stsTokenManager:I}=n;pe(R&&I,e,"internal-error");const v=Vi.fromJSON(this.name,I);pe(typeof R=="string",e,"internal-error"),Wr(h,e.name),Wr(p,e.name),pe(typeof L=="boolean",e,"internal-error"),pe(typeof W=="boolean",e,"internal-error"),Wr(g,e.name),Wr(_,e.name),Wr(P,e.name),Wr(k,e.name),Wr(N,e.name),Wr(O,e.name);const b=new vr({uid:R,auth:e,email:p,emailVerified:L,displayName:h,isAnonymous:W,photoURL:_,phoneNumber:g,tenantId:P,stsTokenManager:v,createdAt:N,lastLoginAt:O});return q&&Array.isArray(q)&&(b.providerData=q.map(T=>Object.assign({},T))),k&&(b._redirectEventId=k),b}static async _fromIdTokenResponse(e,n,r=!1){const o=new Vi;o.updateFromServerResponse(n);const i=new vr({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await bc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];pe(o.localId!==void 0,"internal-error");const i=o.providerUserInfo!==void 0?B1(o.providerUserInfo):[],s=!(o.email&&o.passwordHash)&&!(i!=null&&i.length),a=new Vi;a.updateFromIdToken(r);const l=new vr({uid:o.localId,auth:e,stsTokenManager:a,isAnonymous:s}),u={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:i,metadata:new hf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const Ey=new Map;function br(t){xr(t instanceof Function,"Expected a class definition");let e=Ey.get(t);return e?(xr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ey.set(t,e),e)}/**
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
 */class z1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}z1.type="NONE";const Iy=z1;/**
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
 */function Kl(t,e,n){return`firebase:${t}:${e}:${n}`}class Mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:i}=this.auth;this.fullUserKey=Kl(this.userKey,o.apiKey,i),this.fullPersistenceKey=Kl("persistence",o.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mi(br(Iy),e,r);const o=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=o[0]||br(Iy);const s=Kl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const h=vr._fromJSON(e,d);u!==i&&(a=h),i=u;break}}catch{}const l=o.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Mi(i,e,r):(i=l[0],a&&await i._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(s)}catch{}})),new Mi(i,e,r))}}/**
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
 */function Ty(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(q1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(H1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q1(e))return"Blackberry";if(Y1(e))return"Webos";if(K1(e))return"Safari";if((e.includes("chrome/")||W1(e))&&!e.includes("edge/"))return"Chrome";if(G1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function H1(t=Ht()){return/firefox\//i.test(t)}function K1(t=Ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function W1(t=Ht()){return/crios\//i.test(t)}function q1(t=Ht()){return/iemobile/i.test(t)}function G1(t=Ht()){return/android/i.test(t)}function Q1(t=Ht()){return/blackberry/i.test(t)}function Y1(t=Ht()){return/webos/i.test(t)}function Dh(t=Ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jO(t=Ht()){var e;return Dh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BO(){return ok()&&document.documentMode===10}function X1(t=Ht()){return Dh(t)||G1(t)||Y1(t)||Q1(t)||/windows phone/i.test(t)||q1(t)}/**
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
 */function J1(t,e=[]){let n;switch(t){case"Browser":n=Ty(Ht());break;case"Worker":n=`${Ty(Ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${r}`}/**
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
 */class zO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((s,a)=>{try{const l=e(i);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function HO(t,e={}){return Mr(t,"GET","/v2/passwordPolicy",To(t,e))}/**
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
 */const KO=6;class WO{constructor(e){var n,r,o,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:KO,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,o,i,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsLowercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class qO{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sy(this),this.idTokenSubscription=new Sy(this),this.beforeStateQueue=new zO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=V1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=br(n)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await j1(this,{idToken:e}),r=await vr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(kn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=o==null?void 0:o._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(o=l.user,i=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(o)}catch(s){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(qn(this));const n=e?Tt(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HO(this),n=new WO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ha("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await UO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&br(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[br(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(a,this,"internal-error"),a.then(()=>{s||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,o);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function So(t){return Tt(t)}class Sy{constructor(e){this.auth=e,this.observer=null,this.addObserver=fk(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let iu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GO(t){iu=t}function Z1(t){return iu.loadJS(t)}function QO(){return iu.recaptchaEnterpriseScript}function YO(){return iu.gapiScript}function XO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const JO="recaptcha-enterprise",ZO="NO_RECAPTCHA";class eR{constructor(e){this.type=JO,this.auth=So(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(s,a)=>{RO(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new OO(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function o(i,s,a){const l=window.grecaptcha;_y(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{s(u)}).catch(()=>{s(ZO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,s)=>{r(this.auth).then(a=>{if(!n&&_y(window.grecaptcha))o(a,i,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=QO();l.length!==0&&(l+=a),Z1(l).then(()=>{o(a,i,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function Ay(t,e,n,r=!1){const o=new eR(t);let i;try{i=await o.verify(n)}catch{i=await o.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:i}):Object.assign(s,{captchaResponse:i}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function pf(t,e,n,r){var o;if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ay(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Ay(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(i)})}/**
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
 */function tR(t,e){const n=kh(t,"auth");if(n.isInitialized()){const o=n.getImmediate(),i=n.getOptions();if(gc(i,e??{}))return o;Ln(o,"already-initialized")}return n.initialize({options:e})}function nR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(br);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function rR(t,e,n){const r=So(t);pe(r._canInitEmulator,r,"emulator-config-failed"),pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,i=e_(e),{host:s,port:a}=oR(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),iR()}function e_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oR(t){const e=e_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const i=o[1];return{host:i,port:Cy(r.substr(i.length+1))}}else{const[i,s]=r.split(":");return{host:i,port:Cy(s)}}}function Cy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yr("not implemented")}_getIdTokenResponse(e){return yr("not implemented")}_linkToIdToken(e,n){return yr("not implemented")}_getReauthenticationResolver(e){return yr("not implemented")}}async function sR(t,e){return Mr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function aR(t,e){return qa(t,"POST","/v1/accounts:signInWithPassword",To(t,e))}/**
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
 */async function lR(t,e){return qa(t,"POST","/v1/accounts:signInWithEmailLink",To(t,e))}async function cR(t,e){return qa(t,"POST","/v1/accounts:signInWithEmailLink",To(t,e))}/**
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
 */class xa extends Vh{constructor(e,n,r,o=null){super("password",r),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new xa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pf(e,n,"signInWithPassword",aR);case"emailLink":return lR(e,{email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pf(e,r,"signUpPassword",sR);case"emailLink":return cR(e,{idToken:n,email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function $i(t,e){return qa(t,"POST","/v1/accounts:signInWithIdp",To(t,e))}/**
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
 */const uR="http://localhost";class Jo extends Vh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=n,i=Oh(n,["providerId","signInMethod"]);if(!r||!o)return null;const s=new Jo(r,o);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return $i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$i(e,n)}buildRequest(){const e={requestUri:uR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ka(n)}return e}}/**
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
 */function dR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fR(t){const e=Ls(Ds(t)).link,n=e?Ls(Ds(e)).deep_link_id:null,r=Ls(Ds(t)).deep_link_id;return(r?Ls(Ds(r)).link:null)||r||n||e||t}class Mh{constructor(e){var n,r,o,i,s,a;const l=Ls(Ds(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=dR((o=l.mode)!==null&&o!==void 0?o:null);pe(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=fR(e);try{return new Mh(n)}catch{return null}}}/**
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
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,n){return xa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mh.parseLink(n);return pe(r,"argument-error"),xa._fromEmailAndCode(e,r.code,r.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class t_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ga extends t_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class to extends Ga{constructor(){super("facebook.com")}static credential(e){return Jo._fromParams({providerId:to.PROVIDER_ID,signInMethod:to.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return to.credentialFromTaggedObject(e)}static credentialFromError(e){return to.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return to.credential(e.oauthAccessToken)}catch{return null}}}to.FACEBOOK_SIGN_IN_METHOD="facebook.com";to.PROVIDER_ID="facebook.com";/**
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
 */class no extends Ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jo._fromParams({providerId:no.PROVIDER_ID,signInMethod:no.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return no.credentialFromTaggedObject(e)}static credentialFromError(e){return no.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return no.credential(n,r)}catch{return null}}}no.GOOGLE_SIGN_IN_METHOD="google.com";no.PROVIDER_ID="google.com";/**
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
 */class ro extends Ga{constructor(){super("github.com")}static credential(e){return Jo._fromParams({providerId:ro.PROVIDER_ID,signInMethod:ro.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ro.credentialFromTaggedObject(e)}static credentialFromError(e){return ro.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ro.credential(e.oauthAccessToken)}catch{return null}}}ro.GITHUB_SIGN_IN_METHOD="github.com";ro.PROVIDER_ID="github.com";/**
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
 */class oo extends Ga{constructor(){super("twitter.com")}static credential(e,n){return Jo._fromParams({providerId:oo.PROVIDER_ID,signInMethod:oo.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return oo.credentialFromTaggedObject(e)}static credentialFromError(e){return oo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return oo.credential(n,r)}catch{return null}}}oo.TWITTER_SIGN_IN_METHOD="twitter.com";oo.PROVIDER_ID="twitter.com";/**
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
 */async function n_(t,e){return qa(t,"POST","/v1/accounts:signUp",To(t,e))}/**
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
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const i=await vr._fromIdTokenResponse(e,r,o),s=xy(r);return new Pr({user:i,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=xy(r);return new Pr({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function xy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function hR(t){var e;if(kn(t.app))return Promise.reject(qn(t));const n=So(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Pr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await n_(n,{returnSecureToken:!0}),o=await Pr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(o.user),o}/**
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
 */class _c extends Vr{constructor(e,n,r,o){var i;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,_c.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new _c(e,n,r,o)}}function r_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_c._fromErrorAndOperation(t,i,e,r):i})}async function pR(t,e,n=!1){const r=await Wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pr._forOperation(t,"link",r)}/**
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
 */async function mR(t,e,n=!1){const{auth:r}=t;if(kn(r.app))return Promise.reject(qn(r));const o="reauthenticate";try{const i=await Wi(t,r_(r,o,e,t),n);pe(i.idToken,r,"internal-error");const s=Lh(i.idToken);pe(s,r,"internal-error");const{sub:a}=s;return pe(t.uid===a,r,"user-mismatch"),Pr._forOperation(t,o,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ln(r,"user-mismatch"),i}}/**
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
 */async function o_(t,e,n=!1){if(kn(t.app))return Promise.reject(qn(t));const r="signIn",o=await r_(t,r,e),i=await Pr._fromIdTokenResponse(t,r,o);return n||await t._updateCurrentUser(i.user),i}async function gR(t,e){return o_(So(t),e)}/**
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
 */async function i_(t){const e=So(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yR(t,e,n){if(kn(t.app))return Promise.reject(qn(t));const r=So(t),s=await pf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",n_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&i_(t),l}),a=await Pr._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function Py(t,e,n){return kn(t.app)?Promise.reject(qn(t)):gR(Tt(t),ss.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&i_(t),r})}/**
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
 */async function vR(t,e){return Mr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function bR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Tt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Wi(r,vR(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}/**
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
 */function _R(t,e){return Tt(t).setPersistence(e)}function wR(t,e,n,r){return Tt(t).onIdTokenChanged(e,n,r)}function ER(t,e,n){return Tt(t).beforeAuthStateChanged(e,n)}function IR(t,e,n,r){return Tt(t).onAuthStateChanged(e,n,r)}const wc="__sak";/**
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
 */class s_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wc,"1"),this.storage.removeItem(wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const TR=1e3,SR=10;class a_ extends s_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=X1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},i=this.storage.getItem(r);BO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,SR):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}a_.type="LOCAL";const AR=a_;/**
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
 */class l_ extends s_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}l_.type="SESSION";const $h=l_;/**
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
 */function CR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new su(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:i}=n.data,s=this.handlersMap[o];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const a=Array.from(s).map(async u=>u(n.origin,i)),l=await CR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}su.receivers=[];/**
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
 */function Fh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let i,s;return new Promise((a,l)=>{const u=Fh("",20);o.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:o,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(s),o.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[o.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Gn(){return window}function PR(t){Gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function c_(){return typeof Gn().WorkerGlobalScope<"u"&&typeof Gn().importScripts=="function"}async function kR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RR(){return c_()?self:null}/**
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
 */const u_="firebaseLocalStorageDb",NR=1,Ec="firebaseLocalStorage",d_="fbase_key";class Qa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function au(t,e){return t.transaction([Ec],e?"readwrite":"readonly").objectStore(Ec)}function LR(){const t=indexedDB.deleteDatabase(u_);return new Qa(t).toPromise()}function mf(){const t=indexedDB.open(u_,NR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ec,{keyPath:d_})}catch(o){n(o)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ec)?e(r):(r.close(),await LR(),e(await mf()))})})}async function ky(t,e,n){const r=au(t,!0).put({[d_]:e,value:n});return new Qa(r).toPromise()}async function DR(t,e){const n=au(t,!1).get(e),r=await new Qa(n).toPromise();return r===void 0?null:r.value}function Oy(t,e){const n=au(t,!0).delete(e);return new Qa(n).toPromise()}const VR=800,MR=3;class f_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return c_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=su._getInstance(RR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kR(),!this.activeServiceWorker)return;this.sender=new xR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mf();return await ky(e,wc,"1"),await Oy(e,wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ky(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const i=au(o,!1).getAll();return new Qa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:i}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(i)&&(this.notifyListeners(o,i),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}f_.type="LOCAL";const $R=f_;new Wa(3e4,6e4);/**
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
 */function FR(t,e){return e?br(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uh extends Vh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UR(t){return o_(t.auth,new Uh(t),t.bypassAuthState)}function jR(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),mR(n,new Uh(t),t.bypassAuthState)}async function BR(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),pR(n,new Uh(t),t.bypassAuthState)}/**
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
 */class h_{constructor(e,n,r,o,i=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:i,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UR;case"linkViaPopup":case"linkViaRedirect":return BR;case"reauthViaPopup":case"reauthViaRedirect":return jR;default:Ln(this.auth,"internal-error")}}resolve(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zR=new Wa(2e3,1e4);class Ai extends h_{constructor(e,n,r,o,i){super(e,n,o,i),this.provider=r,this.authWindow=null,this.pollId=null,Ai.currentPopupAction&&Ai.currentPopupAction.cancel(),Ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){xr(this.filter.length===1,"Popup operations only handle one event");const e=Fh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zR.get())};e()}}Ai.currentPopupAction=null;/**
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
 */const HR="pendingRedirect",Wl=new Map;class KR extends h_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wl.get(this.auth._key());if(!e){try{const r=await WR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wl.set(this.auth._key(),e)}return this.bypassAuthState||Wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WR(t,e){const n=QR(e),r=GR(t);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function qR(t,e){Wl.set(t._key(),e)}function GR(t){return br(t._redirectPersistence)}function QR(t){return Kl(HR,t.config.apiKey,t.name)}async function YR(t,e,n=!1){if(kn(t.app))return Promise.reject(qn(t));const r=So(t),o=FR(r,e),s=await new KR(r,o,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const XR=10*60*1e3;class JR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!p_(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wn(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ry(e))}saveEventToCache(e){this.cachedEventUids.add(Ry(e)),this.lastProcessedEventTime=Date.now()}}function Ry(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function p_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p_(t);default:return!1}}/**
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
 */async function e4(t,e={}){return Mr(t,"GET","/v1/projects",e)}/**
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
 */const t4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n4=/^https?/;async function r4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await e4(t);for(const n of e)try{if(o4(n))return}catch{}Ln(t,"unauthorized-domain")}function o4(t){const e=ff(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!n4.test(n))return!1;if(t4.test(t))return r===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const i4=new Wa(3e4,6e4);function Ny(){const t=Gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function s4(t){return new Promise((e,n)=>{var r,o,i;function s(){Ny(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ny(),n(Wn(t,"network-request-failed"))},timeout:i4.get()})}if(!((o=(r=Gn().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((i=Gn().gapi)===null||i===void 0)&&i.load)s();else{const a=XO("iframefcb");return Gn()[a]=()=>{gapi.load?s():n(Wn(t,"network-request-failed"))},Z1(`${YO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ql=null,e})}let ql=null;function a4(t){return ql=ql||s4(t),ql}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const l4=new Wa(5e3,15e3),c4="__/auth/iframe",u4="emulator/auth/iframe",d4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},f4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h4(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nh(e,u4):`https://${t.config.authDomain}/${c4}`,r={apiKey:e.apiKey,appName:t.name,v:is},o=f4.get(t.config.apiHost);o&&(r.eid=o);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ka(r).slice(1)}`}async function p4(t){const e=await a4(t),n=Gn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:h4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:d4,dontclear:!0},r=>new Promise(async(o,i)=>{await r.restyle({setHideOnLeave:!1});const s=Wn(t,"network-request-failed"),a=Gn().setTimeout(()=>{i(s)},l4.get());function l(){Gn().clearTimeout(a),o(r)}r.ping(l).then(l,()=>{i(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const m4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},g4=500,y4=600,v4="_blank",b4="http://localhost";class Ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _4(t,e,n,r=g4,o=y4){const i=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},m4),{width:r.toString(),height:o.toString(),top:i,left:s}),u=Ht().toLowerCase();n&&(a=W1(u)?v4:n),H1(u)&&(e=e||b4,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if(jO(u)&&a!=="_self")return w4(e||"",a),new Ly(null);const h=window.open(e||"",a,d);pe(h,t,"popup-blocked");try{h.focus()}catch{}return new Ly(h)}function w4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const E4="__/auth/handler",I4="emulator/auth/handler",T4=encodeURIComponent("fac");async function Dy(t,e,n,r,o,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:is,eventId:o};if(e instanceof t_){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",dk(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))s[d]=h}if(e instanceof Ga){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${T4}=${encodeURIComponent(l)}`:"";return`${S4(t)}?${Ka(a).slice(1)}${u}`}function S4({config:t}){return t.emulator?Nh(t,I4):`https://${t.authDomain}/${E4}`}/**
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
 */const hd="webStorageSupport";class A4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$h,this._completeRedirectFn=YR,this._overrideRedirectResult=qR}async _openPopup(e,n,r,o){var i;xr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Dy(e,n,r,ff(),o);return _4(e,s,Fh())}async _openRedirect(e,n,r,o){await this._originValidation(e);const i=await Dy(e,n,r,ff(),o);return PR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:i}=this.eventManagers[n];return o?Promise.resolve(o):(xr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await p4(e),r=new JR(e);return n.register("authEvent",o=>(pe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hd,{type:hd},o=>{var i;const s=(i=o==null?void 0:o[0])===null||i===void 0?void 0:i[hd];s!==void 0&&n(!!s),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=r4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return X1()||K1()||Dh()}}const C4=A4;var Vy="@firebase/auth",My="1.7.9";/**
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
 */class x4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function P4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function k4(t){Ki(new Xo("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;pe(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J1(t)},u=new qO(r,o,i,l);return nR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ki(new Xo("auth-internal",e=>{const n=So(e.getProvider("auth").getImmediate());return(r=>new x4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fo(Vy,My,P4(t)),fo(Vy,My,"esm2017")}/**
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
 */const O4=5*60,R4=x1("authIdTokenMaxAge")||O4;let $y=null;const N4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>R4)return;const o=n==null?void 0:n.token;$y!==o&&($y=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function jh(t=R1()){const e=kh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tR(t,{popupRedirectResolver:C4,persistence:[$R,AR,$h]}),r=x1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const s=N4(i.toString());ER(n,s,()=>s(n.currentUser)),wR(n,a=>s(a))}}const o=A1("auth");return o&&rR(n,`http://${o}`),n}function L4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}GO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=o=>{const i=Wn("internal-error");i.customData=o,n(i)},r.type="text/javascript",r.charset="UTF-8",L4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});k4("Browser");function D4(){return m_().__VUE_DEVTOOLS_GLOBAL_HOOK__}function m_(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const V4=typeof Proxy=="function",M4="devtools-plugin:setup",$4="plugin:settings:set";let pi,gf;function F4(){var t;return pi!==void 0||(typeof window<"u"&&window.performance?(pi=!0,gf=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(pi=!0,gf=globalThis.perf_hooks.performance):pi=!1),pi}function U4(){return F4()?gf.now():Date.now()}class j4{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const s in e.settings){const a=e.settings[s];r[s]=a.defaultValue}const o=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const s=localStorage.getItem(o),a=JSON.parse(s);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(s){try{localStorage.setItem(o,JSON.stringify(s))}catch{}i=s},now(){return U4()}},n&&n.on($4,(s,a)=>{s===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(s,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(s,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(u=>{this.targetQueue.push({method:a,args:l,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function B4(t,e){const n=t,r=m_(),o=D4(),i=V4&&n.enableEarlyProxy;if(o&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))o.emit(M4,t,e);else{const s=i?new j4(n,o):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:s}),s&&e(s.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var g_="store";function ri(t){return t===void 0&&(t=null),En(t!==null?t:g_)}function as(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function z4(t){return t!==null&&typeof t=="object"}function H4(t){return t&&typeof t.then=="function"}function K4(t,e){return function(){return t(e)}}function y_(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function v_(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;lu(t,n,[],t._modules.root,!0),Bh(t,n,e)}function Bh(t,e,n){var r=t._state,o=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={},a={},l=RT(!0);l.run(function(){as(i,function(u,d){s[d]=K4(u,t),a[d]=Et(function(){return s[d]()}),Object.defineProperty(t.getters,d,{get:function(){return a[d].value},enumerable:!0})})}),t._state=rs({data:e}),t._scope=l,t.strict&&Y4(t),r&&n&&t._withCommit(function(){r.data=null}),o&&o.stop()}function lu(t,e,n,r,o){var i=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!i&&!o){var a=zh(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=r.state})}var u=r.context=W4(t,s,n);r.forEachMutation(function(d,h){var p=s+h;q4(t,p,d,u)}),r.forEachAction(function(d,h){var p=d.root?h:s+h,g=d.handler||d;G4(t,p,g,u)}),r.forEachGetter(function(d,h){var p=s+h;Q4(t,p,d,u)}),r.forEachChild(function(d,h){lu(t,e,n.concat(h),d,o)})}function W4(t,e,n){var r=e==="",o={dispatch:r?t.dispatch:function(i,s,a){var l=Ic(i,s,a),u=l.payload,d=l.options,h=l.type;return(!d||!d.root)&&(h=e+h),t.dispatch(h,u)},commit:r?t.commit:function(i,s,a){var l=Ic(i,s,a),u=l.payload,d=l.options,h=l.type;(!d||!d.root)&&(h=e+h),t.commit(h,u,d)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return b_(t,e)}},state:{get:function(){return zh(t.state,n)}}}),o}function b_(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function q4(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(s){n.call(t,r.state,s)})}function G4(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(s){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},s);return H4(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function Q4(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function Y4(t){bn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function zh(t,e){return e.reduce(function(n,r){return n[r]},t)}function Ic(t,e,n){return z4(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var X4="vuex bindings",Fy="vuex:mutations",pd="vuex:actions",mi="vuex",J4=0;function Z4(t,e){B4({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[X4]},function(n){n.addTimelineLayer({id:Fy,label:"Vuex Mutations",color:Uy}),n.addTimelineLayer({id:pd,label:"Vuex Actions",color:Uy}),n.addInspector({id:mi,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===mi)if(r.filter){var o=[];I_(o,e._modules.root,r.filter,""),r.rootNodes=o}else r.rootNodes=[E_(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===mi){var o=r.nodeId;b_(e,o),r.state=n6(o6(e._modules,o),o==="root"?e.getters:e._makeLocalGettersCache,o)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===mi){var o=r.nodeId,i=r.path;o!=="root"&&(i=o.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,o){var i={};r.payload&&(i.payload=r.payload),i.state=o,n.notifyComponentUpdate(),n.sendInspectorTree(mi),n.sendInspectorState(mi),n.addTimelineEvent({layerId:Fy,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,o){var i={};r.payload&&(i.payload=r.payload),r._id=J4++,r._time=Date.now(),i.state=o,n.addTimelineEvent({layerId:pd,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,o){var i={},s=Date.now()-r._time;i.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},r.payload&&(i.payload=r.payload),i.state=o,n.addTimelineEvent({layerId:pd,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Uy=8702998,e6=6710886,t6=16777215,__={label:"namespaced",textColor:t6,backgroundColor:e6};function w_(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function E_(t,e){return{id:e||"root",label:w_(e),tags:t.namespaced?[__]:[],children:Object.keys(t._children).map(function(n){return E_(t._children[n],e+n+"/")})}}function I_(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[__]:[]}),Object.keys(e._children).forEach(function(o){I_(t,e._children[o],n,r+o+"/")})}function n6(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),o={state:Object.keys(t.state).map(function(s){return{key:s,editable:!0,value:t.state[s]}})};if(r.length){var i=r6(e);o.getters=Object.keys(i).map(function(s){return{key:s.endsWith("/")?w_(s):s,editable:!1,value:yf(function(){return i[s]})}})}return o}function r6(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var o=e,i=r.pop();r.forEach(function(s){o[s]||(o[s]={_custom:{value:{},display:s,tooltip:"Module",abstract:!0}}),o=o[s]._custom.value}),o[i]=yf(function(){return t[n]})}else e[n]=yf(function(){return t[n]})}),e}function o6(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,o,i){var s=r[o];if(!s)throw new Error('Missing module "'+o+'" for path "'+e+'".');return i===n.length-1?s:s._children},e==="root"?t:t.root._children)}function yf(t){try{return t()}catch(e){return e}}var Mn=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},T_={namespaced:{configurable:!0}};T_.namespaced.get=function(){return!!this._rawModule.namespaced};Mn.prototype.addChild=function(e,n){this._children[e]=n};Mn.prototype.removeChild=function(e){delete this._children[e]};Mn.prototype.getChild=function(e){return this._children[e]};Mn.prototype.hasChild=function(e){return e in this._children};Mn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Mn.prototype.forEachChild=function(e){as(this._children,e)};Mn.prototype.forEachGetter=function(e){this._rawModule.getters&&as(this._rawModule.getters,e)};Mn.prototype.forEachAction=function(e){this._rawModule.actions&&as(this._rawModule.actions,e)};Mn.prototype.forEachMutation=function(e){this._rawModule.mutations&&as(this._rawModule.mutations,e)};Object.defineProperties(Mn.prototype,T_);var oi=function(e){this.register([],e,!1)};oi.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};oi.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,o){return n=n.getChild(o),r+(n.namespaced?o+"/":"")},"")};oi.prototype.update=function(e){S_([],this.root,e)};oi.prototype.register=function(e,n,r){var o=this;r===void 0&&(r=!0);var i=new Mn(n,r);if(e.length===0)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}n.modules&&as(n.modules,function(a,l){o.register(e.concat(l),a,r)})};oi.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],o=n.getChild(r);o&&o.runtime&&n.removeChild(r)};oi.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function S_(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;S_(t.concat(r),e.getChild(r),n.modules[r])}}function i6(t){return new rn(t)}var rn=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var o=e.strict;o===void 0&&(o=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new oi(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var s=this,a=this,l=a.dispatch,u=a.commit;this.dispatch=function(p,g){return l.call(s,p,g)},this.commit=function(p,g,_){return u.call(s,p,g,_)},this.strict=o;var d=this._modules.root.state;lu(this,d,[],this._modules.root),Bh(this,d),r.forEach(function(h){return h(n)})},Hh={state:{configurable:!0}};rn.prototype.install=function(e,n){e.provide(n||g_,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Z4(e,this)};Hh.state.get=function(){return this._state.data};Hh.state.set=function(t){};rn.prototype.commit=function(e,n,r){var o=this,i=Ic(e,n,r),s=i.type,a=i.payload,l={type:s,payload:a},u=this._mutations[s];u&&(this._withCommit(function(){u.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(d){return d(l,o.state)}))};rn.prototype.dispatch=function(e,n){var r=this,o=Ic(e,n),i=o.type,s=o.payload,a={type:i,payload:s},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(d){return d.before}).forEach(function(d){return d.before(a,r.state)})}catch{}var u=l.length>1?Promise.all(l.map(function(d){return d(s)})):l[0](s);return new Promise(function(d,h){u.then(function(p){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,r.state)})}catch{}d(p)},function(p){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,r.state,p)})}catch{}h(p)})})}};rn.prototype.subscribe=function(e,n){return y_(e,this._subscribers,n)};rn.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return y_(r,this._actionSubscribers,n)};rn.prototype.watch=function(e,n,r){var o=this;return bn(function(){return e(o.state,o.getters)},n,Object.assign({},r))};rn.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};rn.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),lu(this,this.state,e,this._modules.get(e),r.preserveState),Bh(this,this.state)};rn.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=zh(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),v_(this)};rn.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};rn.prototype.hotUpdate=function(e){this._modules.update(e),v_(this,!0)};rn.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(rn.prototype,Hh);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const bi=typeof document<"u";function A_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function s6(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&A_(t.default)}const Ke=Object.assign;function md(t,e){const n={};for(const r in e){const o=e[r];n[r]=Dn(o)?o.map(t):t(o)}return n}const Js=()=>{},Dn=Array.isArray,C_=/#/g,a6=/&/g,l6=/\//g,c6=/=/g,u6=/\?/g,x_=/\+/g,d6=/%5B/g,f6=/%5D/g,P_=/%5E/g,h6=/%60/g,k_=/%7B/g,p6=/%7C/g,O_=/%7D/g,m6=/%20/g;function Kh(t){return encodeURI(""+t).replace(p6,"|").replace(d6,"[").replace(f6,"]")}function g6(t){return Kh(t).replace(k_,"{").replace(O_,"}").replace(P_,"^")}function vf(t){return Kh(t).replace(x_,"%2B").replace(m6,"+").replace(C_,"%23").replace(a6,"%26").replace(h6,"`").replace(k_,"{").replace(O_,"}").replace(P_,"^")}function y6(t){return vf(t).replace(c6,"%3D")}function v6(t){return Kh(t).replace(C_,"%23").replace(u6,"%3F")}function b6(t){return t==null?"":v6(t).replace(l6,"%2F")}function Pa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const _6=/\/$/,w6=t=>t.replace(_6,"");function gd(t,e,n="/"){let r,o={},i="",s="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),o=t(i)),a>-1&&(r=r||e.slice(0,a),s=e.slice(a,e.length)),r=S6(r??e,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:Pa(s)}}function E6(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function I6(t,e,n){const r=e.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&qi(e.matched[r],n.matched[o])&&R_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function qi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function R_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!T6(t[n],e[n]))return!1;return!0}function T6(t,e){return Dn(t)?By(t,e):Dn(e)?By(e,t):t===e}function By(t,e){return Dn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function S6(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=n.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s).join("/")}const qr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ka;(function(t){t.pop="pop",t.push="push"})(ka||(ka={}));var Zs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Zs||(Zs={}));function A6(t){if(!t)if(bi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),w6(t)}const C6=/^[^#]+#/;function x6(t,e){return t.replace(C6,"#")+e}function P6(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const cu=()=>({left:window.scrollX,top:window.scrollY});function k6(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;e=P6(o,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function zy(t,e){return(history.state?history.state.position-e:-1)+t}const bf=new Map;function O6(t,e){bf.set(t,e)}function R6(t){const e=bf.get(t);return bf.delete(t),e}let N6=()=>location.protocol+"//"+location.host;function N_(t,e){const{pathname:n,search:r,hash:o}=e,i=t.indexOf("#");if(i>-1){let a=o.includes(t.slice(i))?t.slice(i).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),jy(l,"")}return jy(n,t)+r+o}function L6(t,e,n,r){let o=[],i=[],s=null;const a=({state:p})=>{const g=N_(t,location),_=n.value,P=e.value;let k=0;if(p){if(n.value=g,e.value=p,s&&s===_){s=null;return}k=P?p.position-P.position:0}else r(g);o.forEach(N=>{N(n.value,_,{delta:k,type:ka.pop,direction:k?k>0?Zs.forward:Zs.back:Zs.unknown})})};function l(){s=n.value}function u(p){o.push(p);const g=()=>{const _=o.indexOf(p);_>-1&&o.splice(_,1)};return i.push(g),g}function d(){const{history:p}=window;p.state&&p.replaceState(Ke({},p.state,{scroll:cu()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:h}}function Hy(t,e,n,r=!1,o=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:o?cu():null}}function D6(t){const{history:e,location:n}=window,r={value:N_(t,n)},o={value:e.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:N6()+t+l;try{e[d?"replaceState":"pushState"](u,"",p),o.value=u}catch(g){console.error(g),n[d?"replace":"assign"](p)}}function s(l,u){const d=Ke({},e.state,Hy(o.value.back,l,o.value.forward,!0),u,{position:o.value.position});i(l,d,!0),r.value=l}function a(l,u){const d=Ke({},o.value,e.state,{forward:l,scroll:cu()});i(d.current,d,!0);const h=Ke({},Hy(r.value,l,null),{position:d.position+1},u);i(l,h,!1),r.value=l}return{location:r,state:o,push:a,replace:s}}function V6(t){t=A6(t);const e=D6(t),n=L6(t,e.state,e.location,e.replace);function r(i,s=!0){s||n.pauseListeners(),history.go(i)}const o=Ke({location:"",base:t,go:r,createHref:x6.bind(null,t)},e,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function M6(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),V6(t)}function $6(t){return typeof t=="string"||t&&typeof t=="object"}function L_(t){return typeof t=="string"||typeof t=="symbol"}const D_=Symbol("");var Ky;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ky||(Ky={}));function Gi(t,e){return Ke(new Error,{type:t,[D_]:!0},e)}function lr(t,e){return t instanceof Error&&D_ in t&&(e==null||!!(t.type&e))}const Wy="[^/]+?",F6={sensitive:!1,strict:!1,start:!0,end:!0},U6=/[.+*?^${}()[\]/\\]/g;function j6(t,e){const n=Ke({},F6,e),r=[];let o=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let h=0;h<u.length;h++){const p=u[h];let g=40+(n.sensitive?.25:0);if(p.type===0)h||(o+="/"),o+=p.value.replace(U6,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:P,optional:k,regexp:N}=p;i.push({name:_,repeatable:P,optional:k});const O=N||Wy;if(O!==Wy){g+=10;try{new RegExp(`(${O})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${_}" (${O}): `+L.message)}}let R=P?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(R=k&&u.length<2?`(?:/${R})`:"/"+R),k&&(R+="?"),o+=R,g+=20,k&&(g+=-8),P&&(g+=-20),O===".*"&&(g+=-50)}d.push(g)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function a(u){const d=u.match(s),h={};if(!d)return null;for(let p=1;p<d.length;p++){const g=d[p]||"",_=i[p-1];h[_.name]=g&&_.repeatable?g.split("/"):g}return h}function l(u){let d="",h=!1;for(const p of t){(!h||!d.endsWith("/"))&&(d+="/"),h=!1;for(const g of p)if(g.type===0)d+=g.value;else if(g.type===1){const{value:_,repeatable:P,optional:k}=g,N=_ in u?u[_]:"";if(Dn(N)&&!P)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const O=Dn(N)?N.join("/"):N;if(!O)if(k)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);d+=O}}return d||"/"}return{re:s,score:r,keys:i,parse:a,stringify:l}}function B6(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function V_(t,e){let n=0;const r=t.score,o=e.score;for(;n<r.length&&n<o.length;){const i=B6(r[n],o[n]);if(i)return i;n++}if(Math.abs(o.length-r.length)===1){if(qy(r))return 1;if(qy(o))return-1}return o.length-r.length}function qy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const z6={type:0,value:""},H6=/[a-zA-Z0-9_]/;function K6(t){if(!t)return[[]];if(t==="/")return[[z6]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a=0,l,u="",d="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&h(),s()):l===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:H6.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),s(),o}function W6(t,e,n){const r=j6(K6(t.path),n),o=Ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf==!e.record.aliasOf&&e.children.push(o),o}function q6(t,e){const n=[],r=new Map;e=Xy({strict:!1,end:!0,sensitive:!1},e);function o(h){return r.get(h)}function i(h,p,g){const _=!g,P=Qy(h);P.aliasOf=g&&g.record;const k=Xy(e,h),N=[P];if("alias"in h){const L=typeof h.alias=="string"?[h.alias]:h.alias;for(const W of L)N.push(Qy(Ke({},P,{components:g?g.record.components:P.components,path:W,aliasOf:g?g.record:P})))}let O,R;for(const L of N){const{path:W}=L;if(p&&W[0]!=="/"){const q=p.record.path,I=q[q.length-1]==="/"?"":"/";L.path=p.record.path+(W&&I+W)}if(O=W6(L,p,k),g?g.alias.push(O):(R=R||O,R!==O&&R.alias.push(O),_&&h.name&&!Yy(O)&&s(h.name)),M_(O)&&l(O),P.children){const q=P.children;for(let I=0;I<q.length;I++)i(q[I],O,g&&g.children[I])}g=g||O}return R?()=>{s(R)}:Js}function s(h){if(L_(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(s),p.alias.forEach(s))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(s),h.alias.forEach(s))}}function a(){return n}function l(h){const p=Y6(h,n);n.splice(p,0,h),h.record.name&&!Yy(h)&&r.set(h.record.name,h)}function u(h,p){let g,_={},P,k;if("name"in h&&h.name){if(g=r.get(h.name),!g)throw Gi(1,{location:h});k=g.record.name,_=Ke(Gy(p.params,g.keys.filter(R=>!R.optional).concat(g.parent?g.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),h.params&&Gy(h.params,g.keys.map(R=>R.name))),P=g.stringify(_)}else if(h.path!=null)P=h.path,g=n.find(R=>R.re.test(P)),g&&(_=g.parse(P),k=g.record.name);else{if(g=p.name?r.get(p.name):n.find(R=>R.re.test(p.path)),!g)throw Gi(1,{location:h,currentLocation:p});k=g.record.name,_=Ke({},p.params,h.params),P=g.stringify(_)}const N=[];let O=g;for(;O;)N.unshift(O.record),O=O.parent;return{name:k,path:P,params:_,matched:N,meta:Q6(N)}}t.forEach(h=>i(h));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:s,clearRoutes:d,getRoutes:a,getRecordMatcher:o}}function Gy(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Qy(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:G6(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function G6(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Yy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Q6(t){return t.reduce((e,n)=>Ke(e,n.meta),{})}function Xy(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Y6(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;V_(t,e[i])<0?r=i:n=i+1}const o=X6(t);return o&&(r=e.lastIndexOf(o,r-1)),r}function X6(t){let e=t;for(;e=e.parent;)if(M_(e)&&V_(t,e)===0)return e}function M_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function J6(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(x_," "),s=i.indexOf("="),a=Pa(s<0?i:i.slice(0,s)),l=s<0?null:Pa(i.slice(s+1));if(a in e){let u=e[a];Dn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Jy(t){let e="";for(let n in t){const r=t[n];if(n=y6(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Dn(r)?r.map(i=>i&&vf(i)):[r&&vf(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Z6(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Dn(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return e}const e9=Symbol(""),Zy=Symbol(""),Wh=Symbol(""),qh=Symbol(""),_f=Symbol("");function xs(){let t=[];function e(r){return t.push(r),()=>{const o=t.indexOf(r);o>-1&&t.splice(o,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Jr(t,e,n,r,o,i=s=>s()){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Gi(4,{from:n,to:e})):p instanceof Error?l(p):$6(p)?l(Gi(2,{from:e,to:p})):(s&&r.enterCallbacks[o]===s&&typeof p=="function"&&s.push(p),a())},d=i(()=>t.call(r&&r.instances[o],e,n,u));let h=Promise.resolve(d);t.length<3&&(h=h.then(u)),h.catch(p=>l(p))})}function yd(t,e,n,r,o=i=>i()){const i=[];for(const s of t)for(const a in s.components){let l=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(A_(l)){const d=(l.__vccOpts||l)[e];d&&i.push(Jr(d,n,r,s,a,o))}else{let u=l();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);const h=s6(d)?d.default:d;s.mods[a]=d,s.components[a]=h;const g=(h.__vccOpts||h)[e];return g&&Jr(g,n,r,s,a,o)()}))}}return i}function ev(t){const e=En(Wh),n=En(qh),r=Et(()=>{const l=Oi(t.to);return e.resolve(l)}),o=Et(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],h=n.matched;if(!d||!h.length)return-1;const p=h.findIndex(qi.bind(null,d));if(p>-1)return p;const g=tv(l[u-2]);return u>1&&tv(d)===g&&h[h.length-1].path!==g?h.findIndex(qi.bind(null,l[u-2])):p}),i=Et(()=>o.value>-1&&o9(n.params,r.value.params)),s=Et(()=>o.value>-1&&o.value===n.matched.length-1&&R_(n.params,r.value.params));function a(l={}){return r9(l)?e[Oi(t.replace)?"replace":"push"](Oi(t.to)).catch(Js):Promise.resolve()}return{route:r,href:Et(()=>r.value.href),isActive:i,isExactActive:s,navigate:a}}const t9=uh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ev,setup(t,{slots:e}){const n=rs(ev(t)),{options:r}=En(Wh),o=Et(()=>({[nv(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[nv(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Jc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),n9=t9;function r9(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function o9(t,e){for(const n in e){const r=e[n],o=t[n];if(typeof r=="string"){if(r!==o)return!1}else if(!Dn(o)||o.length!==r.length||r.some((i,s)=>i!==o[s]))return!1}return!0}function tv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const nv=(t,e,n)=>t??e??n,i9=uh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=En(_f),o=Et(()=>t.route||r.value),i=En(Zy,0),s=Et(()=>{let u=Oi(i);const{matched:d}=o.value;let h;for(;(h=d[u])&&!h.components;)u++;return u}),a=Et(()=>o.value.matched[s.value]);Ul(Zy,Et(()=>s.value+1)),Ul(e9,a),Ul(_f,o);const l=Er();return bn(()=>[l.value,a.value,t.name],([u,d,h],[p,g,_])=>{d&&(d.instances[h]=u,g&&g!==d&&u&&u===p&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),u&&d&&(!g||!qi(d,g)||!p)&&(d.enterCallbacks[h]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=o.value,d=t.name,h=a.value,p=h&&h.components[d];if(!p)return rv(n.default,{Component:p,route:u});const g=h.props[d],_=g?g===!0?u.params:typeof g=="function"?g(u):g:null,k=Jc(p,Ke({},_,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(h.instances[d]=null)},ref:l}));return rv(n.default,{Component:k,route:u})||k}}});function rv(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const s9=i9;function a9(t){const e=q6(t.routes,t),n=t.parseQuery||J6,r=t.stringifyQuery||Jy,o=t.history,i=xs(),s=xs(),a=xs(),l=nS(qr);let u=qr;bi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=md.bind(null,F=>""+F),h=md.bind(null,b6),p=md.bind(null,Pa);function g(F,te){let J,re;return L_(F)?(J=e.getRecordMatcher(F),re=te):re=F,e.addRoute(re,J)}function _(F){const te=e.getRecordMatcher(F);te&&e.removeRoute(te)}function P(){return e.getRoutes().map(F=>F.record)}function k(F){return!!e.getRecordMatcher(F)}function N(F,te){if(te=Ke({},te||l.value),typeof F=="string"){const A=gd(n,F,te.path),V=e.resolve({path:A.path},te),U=o.createHref(A.fullPath);return Ke(A,V,{params:p(V.params),hash:Pa(A.hash),redirectedFrom:void 0,href:U})}let J;if(F.path!=null)J=Ke({},F,{path:gd(n,F.path,te.path).path});else{const A=Ke({},F.params);for(const V in A)A[V]==null&&delete A[V];J=Ke({},F,{params:h(A)}),te.params=h(te.params)}const re=e.resolve(J,te),Se=F.hash||"";re.params=d(p(re.params));const He=E6(r,Ke({},F,{hash:g6(Se),path:re.path})),w=o.createHref(He);return Ke({fullPath:He,hash:Se,query:r===Jy?Z6(F.query):F.query||{}},re,{redirectedFrom:void 0,href:w})}function O(F){return typeof F=="string"?gd(n,F,l.value.path):Ke({},F)}function R(F,te){if(u!==F)return Gi(8,{from:te,to:F})}function L(F){return I(F)}function W(F){return L(Ke(O(F),{replace:!0}))}function q(F){const te=F.matched[F.matched.length-1];if(te&&te.redirect){const{redirect:J}=te;let re=typeof J=="function"?J(F):J;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=O(re):{path:re},re.params={}),Ke({query:F.query,hash:F.hash,params:re.path!=null?{}:F.params},re)}}function I(F,te){const J=u=N(F),re=l.value,Se=F.state,He=F.force,w=F.replace===!0,A=q(J);if(A)return I(Ke(O(A),{state:typeof A=="object"?Ke({},Se,A.state):Se,force:He,replace:w}),te||J);const V=J;V.redirectedFrom=te;let U;return!He&&I6(r,re,J)&&(U=Gi(16,{to:V,from:re}),ct(re,re,!0,!1)),(U?Promise.resolve(U):T(V,re)).catch($=>lr($)?lr($,2)?$:ht($):_e($,V,re)).then($=>{if($){if(lr($,2))return I(Ke({replace:w},O($.to),{state:typeof $.to=="object"?Ke({},Se,$.to.state):Se,force:He}),te||V)}else $=S(V,re,!0,w,Se);return C(V,re,$),$})}function v(F,te){const J=R(F,te);return J?Promise.reject(J):Promise.resolve()}function b(F){const te=Kt.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(F):F()}function T(F,te){let J;const[re,Se,He]=l9(F,te);J=yd(re.reverse(),"beforeRouteLeave",F,te);for(const A of re)A.leaveGuards.forEach(V=>{J.push(Jr(V,F,te))});const w=v.bind(null,F,te);return J.push(w),St(J).then(()=>{J=[];for(const A of i.list())J.push(Jr(A,F,te));return J.push(w),St(J)}).then(()=>{J=yd(Se,"beforeRouteUpdate",F,te);for(const A of Se)A.updateGuards.forEach(V=>{J.push(Jr(V,F,te))});return J.push(w),St(J)}).then(()=>{J=[];for(const A of He)if(A.beforeEnter)if(Dn(A.beforeEnter))for(const V of A.beforeEnter)J.push(Jr(V,F,te));else J.push(Jr(A.beforeEnter,F,te));return J.push(w),St(J)}).then(()=>(F.matched.forEach(A=>A.enterCallbacks={}),J=yd(He,"beforeRouteEnter",F,te,b),J.push(w),St(J))).then(()=>{J=[];for(const A of s.list())J.push(Jr(A,F,te));return J.push(w),St(J)}).catch(A=>lr(A,8)?A:Promise.reject(A))}function C(F,te,J){a.list().forEach(re=>b(()=>re(F,te,J)))}function S(F,te,J,re,Se){const He=R(F,te);if(He)return He;const w=te===qr,A=bi?history.state:{};J&&(re||w?o.replace(F.fullPath,Ke({scroll:w&&A&&A.scroll},Se)):o.push(F.fullPath,Se)),l.value=F,ct(F,te,J,w),ht()}let E;function we(){E||(E=o.listen((F,te,J)=>{if(!sn.listening)return;const re=N(F),Se=q(re);if(Se){I(Ke(Se,{replace:!0}),re).catch(Js);return}u=re;const He=l.value;bi&&O6(zy(He.fullPath,J.delta),cu()),T(re,He).catch(w=>lr(w,12)?w:lr(w,2)?(I(w.to,re).then(A=>{lr(A,20)&&!J.delta&&J.type===ka.pop&&o.go(-1,!1)}).catch(Js),Promise.reject()):(J.delta&&o.go(-J.delta,!1),_e(w,re,He))).then(w=>{w=w||S(re,He,!1),w&&(J.delta&&!lr(w,8)?o.go(-J.delta,!1):J.type===ka.pop&&lr(w,20)&&o.go(-1,!1)),C(re,He,w)}).catch(Js)}))}let xe=xs(),Ie=xs(),me;function _e(F,te,J){ht(F);const re=Ie.list();return re.length?re.forEach(Se=>Se(F,te,J)):console.error(F),Promise.reject(F)}function mt(){return me&&l.value!==qr?Promise.resolve():new Promise((F,te)=>{xe.add([F,te])})}function ht(F){return me||(me=!F,we(),xe.list().forEach(([te,J])=>F?J(F):te()),xe.reset()),F}function ct(F,te,J,re){const{scrollBehavior:Se}=t;if(!bi||!Se)return Promise.resolve();const He=!J&&R6(zy(F.fullPath,0))||(re||!J)&&history.state&&history.state.scroll||null;return Hc().then(()=>Se(F,te,He)).then(w=>w&&k6(w)).catch(w=>_e(w,F,te))}const Fe=F=>o.go(F);let Ge;const Kt=new Set,sn={currentRoute:l,listening:!0,addRoute:g,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:P,resolve:N,options:t,push:L,replace:W,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:s.add,afterEach:a.add,onError:Ie.add,isReady:mt,install(F){const te=this;F.component("RouterLink",n9),F.component("RouterView",s9),F.config.globalProperties.$router=te,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Oi(l)}),bi&&!Ge&&l.value===qr&&(Ge=!0,L(o.location).catch(Se=>{}));const J={};for(const Se in qr)Object.defineProperty(J,Se,{get:()=>l.value[Se],enumerable:!0});F.provide(Wh,te),F.provide(qh,Hb(J)),F.provide(_f,l);const re=F.unmount;Kt.add(F),F.unmount=function(){Kt.delete(F),Kt.size<1&&(u=qr,E&&E(),E=null,l.value=qr,Ge=!1,me=!1),re()}}};function St(F){return F.reduce((te,J)=>te.then(()=>b(J)),Promise.resolve())}return sn}function l9(t,e){const n=[],r=[],o=[],i=Math.max(e.matched.length,t.matched.length);for(let s=0;s<i;s++){const a=e.matched[s];a&&(t.matched.find(u=>qi(u,a))?r.push(a):n.push(a));const l=t.matched[s];l&&(e.matched.find(u=>qi(u,l))||o.push(l))}return[n,r,o]}function c9(t){return En(qh)}const ls="/FPA-E-EXAM/logo.png",on=(t,e)=>{const n=t.__vccOpts||t;for(const[r,o]of e)n[r]=o;return n},u9={},d9={class:"w-full h-full absolute flex"},f9={class:"h-fit m-auto px-2 flex flex-col-reverse rounded-lg md:flex-row w-4/5 md:w-2/3 py-10 bg-slate-50 shadow-2xl"},h9={class:"flex z-50 md:py-2 w-full h-full"},p9={class:"w-full h-full py-2 flex flex-col px-2 md:h-full m-auto md:m-0"},m9={class:"w-full h-full flex flex-col space-y-6 text-center md:space-y-12"},g9={class:"flex justify-evenly"},y9={class:"underline text-sm md:text-base text-center"};function v9(t,e,n,r,o,i){const s=ke("router-link");return j(),ne("div",d9,[x("div",f9,[x("div",h9,[x("div",p9,[e[4]||(e[4]=x("img",{src:ls,alt:"Fpa logo",class:"w-16 -mt-2 md:w-28 md:m-auto mx-auto"},null,-1)),x("div",m9,[e[3]||(e[3]=iA('<h2 class="text-slate-800 mx-auto font-bold text-lg">Welcome to FPA E-exam.</h2><h4 class="text-slate-800 font-semibold text-xs md:text-base">Please select <span class="font-bold">Sign Up</span> if you&#39;re new to the system. <br><span class="font-bold">OR</span><br> Select <span class="font-bold">Log in</span> if you have already registered.</h4>',2)),x("div",g9,[ue(s,{to:"/signup",class:"bg-purple-900 text-slate-200 px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:et(()=>e[0]||(e[0]=[it(" Sign Up")])),_:1}),ue(s,{to:"/login",class:"bg-purple-900 text-slate-200 px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:et(()=>e[1]||(e[1]=[it(" Log In")])),_:1})]),x("p",y9,[ue(s,{to:"/adminLogin",class:"text-blue-500 underline"},{default:et(()=>e[2]||(e[2]=[it("Login as an admin.")])),_:1})])])])])])])}const b9=on(u9,[["render",v9]]);var _9="firebase",w9="10.14.1";/**
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
 */fo(_9,w9,"app");var ov=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wo,$_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function b(){}b.prototype=v.prototype,I.D=v.prototype,I.prototype=new b,I.prototype.constructor=I,I.C=function(T,C,S){for(var E=Array(arguments.length-2),we=2;we<arguments.length;we++)E[we-2]=arguments[we];return v.prototype[C].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(I,v,b){b||(b=0);var T=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)T[C]=v.charCodeAt(b++)|v.charCodeAt(b++)<<8|v.charCodeAt(b++)<<16|v.charCodeAt(b++)<<24;else for(C=0;16>C;++C)T[C]=v[b++]|v[b++]<<8|v[b++]<<16|v[b++]<<24;v=I.g[0],b=I.g[1],C=I.g[2];var S=I.g[3],E=v+(S^b&(C^S))+T[0]+3614090360&4294967295;v=b+(E<<7&4294967295|E>>>25),E=S+(C^v&(b^C))+T[1]+3905402710&4294967295,S=v+(E<<12&4294967295|E>>>20),E=C+(b^S&(v^b))+T[2]+606105819&4294967295,C=S+(E<<17&4294967295|E>>>15),E=b+(v^C&(S^v))+T[3]+3250441966&4294967295,b=C+(E<<22&4294967295|E>>>10),E=v+(S^b&(C^S))+T[4]+4118548399&4294967295,v=b+(E<<7&4294967295|E>>>25),E=S+(C^v&(b^C))+T[5]+1200080426&4294967295,S=v+(E<<12&4294967295|E>>>20),E=C+(b^S&(v^b))+T[6]+2821735955&4294967295,C=S+(E<<17&4294967295|E>>>15),E=b+(v^C&(S^v))+T[7]+4249261313&4294967295,b=C+(E<<22&4294967295|E>>>10),E=v+(S^b&(C^S))+T[8]+1770035416&4294967295,v=b+(E<<7&4294967295|E>>>25),E=S+(C^v&(b^C))+T[9]+2336552879&4294967295,S=v+(E<<12&4294967295|E>>>20),E=C+(b^S&(v^b))+T[10]+4294925233&4294967295,C=S+(E<<17&4294967295|E>>>15),E=b+(v^C&(S^v))+T[11]+2304563134&4294967295,b=C+(E<<22&4294967295|E>>>10),E=v+(S^b&(C^S))+T[12]+1804603682&4294967295,v=b+(E<<7&4294967295|E>>>25),E=S+(C^v&(b^C))+T[13]+4254626195&4294967295,S=v+(E<<12&4294967295|E>>>20),E=C+(b^S&(v^b))+T[14]+2792965006&4294967295,C=S+(E<<17&4294967295|E>>>15),E=b+(v^C&(S^v))+T[15]+1236535329&4294967295,b=C+(E<<22&4294967295|E>>>10),E=v+(C^S&(b^C))+T[1]+4129170786&4294967295,v=b+(E<<5&4294967295|E>>>27),E=S+(b^C&(v^b))+T[6]+3225465664&4294967295,S=v+(E<<9&4294967295|E>>>23),E=C+(v^b&(S^v))+T[11]+643717713&4294967295,C=S+(E<<14&4294967295|E>>>18),E=b+(S^v&(C^S))+T[0]+3921069994&4294967295,b=C+(E<<20&4294967295|E>>>12),E=v+(C^S&(b^C))+T[5]+3593408605&4294967295,v=b+(E<<5&4294967295|E>>>27),E=S+(b^C&(v^b))+T[10]+38016083&4294967295,S=v+(E<<9&4294967295|E>>>23),E=C+(v^b&(S^v))+T[15]+3634488961&4294967295,C=S+(E<<14&4294967295|E>>>18),E=b+(S^v&(C^S))+T[4]+3889429448&4294967295,b=C+(E<<20&4294967295|E>>>12),E=v+(C^S&(b^C))+T[9]+568446438&4294967295,v=b+(E<<5&4294967295|E>>>27),E=S+(b^C&(v^b))+T[14]+3275163606&4294967295,S=v+(E<<9&4294967295|E>>>23),E=C+(v^b&(S^v))+T[3]+4107603335&4294967295,C=S+(E<<14&4294967295|E>>>18),E=b+(S^v&(C^S))+T[8]+1163531501&4294967295,b=C+(E<<20&4294967295|E>>>12),E=v+(C^S&(b^C))+T[13]+2850285829&4294967295,v=b+(E<<5&4294967295|E>>>27),E=S+(b^C&(v^b))+T[2]+4243563512&4294967295,S=v+(E<<9&4294967295|E>>>23),E=C+(v^b&(S^v))+T[7]+1735328473&4294967295,C=S+(E<<14&4294967295|E>>>18),E=b+(S^v&(C^S))+T[12]+2368359562&4294967295,b=C+(E<<20&4294967295|E>>>12),E=v+(b^C^S)+T[5]+4294588738&4294967295,v=b+(E<<4&4294967295|E>>>28),E=S+(v^b^C)+T[8]+2272392833&4294967295,S=v+(E<<11&4294967295|E>>>21),E=C+(S^v^b)+T[11]+1839030562&4294967295,C=S+(E<<16&4294967295|E>>>16),E=b+(C^S^v)+T[14]+4259657740&4294967295,b=C+(E<<23&4294967295|E>>>9),E=v+(b^C^S)+T[1]+2763975236&4294967295,v=b+(E<<4&4294967295|E>>>28),E=S+(v^b^C)+T[4]+1272893353&4294967295,S=v+(E<<11&4294967295|E>>>21),E=C+(S^v^b)+T[7]+4139469664&4294967295,C=S+(E<<16&4294967295|E>>>16),E=b+(C^S^v)+T[10]+3200236656&4294967295,b=C+(E<<23&4294967295|E>>>9),E=v+(b^C^S)+T[13]+681279174&4294967295,v=b+(E<<4&4294967295|E>>>28),E=S+(v^b^C)+T[0]+3936430074&4294967295,S=v+(E<<11&4294967295|E>>>21),E=C+(S^v^b)+T[3]+3572445317&4294967295,C=S+(E<<16&4294967295|E>>>16),E=b+(C^S^v)+T[6]+76029189&4294967295,b=C+(E<<23&4294967295|E>>>9),E=v+(b^C^S)+T[9]+3654602809&4294967295,v=b+(E<<4&4294967295|E>>>28),E=S+(v^b^C)+T[12]+3873151461&4294967295,S=v+(E<<11&4294967295|E>>>21),E=C+(S^v^b)+T[15]+530742520&4294967295,C=S+(E<<16&4294967295|E>>>16),E=b+(C^S^v)+T[2]+3299628645&4294967295,b=C+(E<<23&4294967295|E>>>9),E=v+(C^(b|~S))+T[0]+4096336452&4294967295,v=b+(E<<6&4294967295|E>>>26),E=S+(b^(v|~C))+T[7]+1126891415&4294967295,S=v+(E<<10&4294967295|E>>>22),E=C+(v^(S|~b))+T[14]+2878612391&4294967295,C=S+(E<<15&4294967295|E>>>17),E=b+(S^(C|~v))+T[5]+4237533241&4294967295,b=C+(E<<21&4294967295|E>>>11),E=v+(C^(b|~S))+T[12]+1700485571&4294967295,v=b+(E<<6&4294967295|E>>>26),E=S+(b^(v|~C))+T[3]+2399980690&4294967295,S=v+(E<<10&4294967295|E>>>22),E=C+(v^(S|~b))+T[10]+4293915773&4294967295,C=S+(E<<15&4294967295|E>>>17),E=b+(S^(C|~v))+T[1]+2240044497&4294967295,b=C+(E<<21&4294967295|E>>>11),E=v+(C^(b|~S))+T[8]+1873313359&4294967295,v=b+(E<<6&4294967295|E>>>26),E=S+(b^(v|~C))+T[15]+4264355552&4294967295,S=v+(E<<10&4294967295|E>>>22),E=C+(v^(S|~b))+T[6]+2734768916&4294967295,C=S+(E<<15&4294967295|E>>>17),E=b+(S^(C|~v))+T[13]+1309151649&4294967295,b=C+(E<<21&4294967295|E>>>11),E=v+(C^(b|~S))+T[4]+4149444226&4294967295,v=b+(E<<6&4294967295|E>>>26),E=S+(b^(v|~C))+T[11]+3174756917&4294967295,S=v+(E<<10&4294967295|E>>>22),E=C+(v^(S|~b))+T[2]+718787259&4294967295,C=S+(E<<15&4294967295|E>>>17),E=b+(S^(C|~v))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(C+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var b=v-this.blockSize,T=this.B,C=this.h,S=0;S<v;){if(C==0)for(;S<=b;)o(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<v;)if(T[C++]=I.charCodeAt(S++),C==this.blockSize){o(this,T),C=0;break}}else for(;S<v;)if(T[C++]=I[S++],C==this.blockSize){o(this,T),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var b=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=b&255,b/=256;for(this.u(I),I=Array(16),v=b=0;4>v;++v)for(var T=0;32>T;T+=8)I[b++]=this.g[v]>>>T&255;return I};function i(I,v){var b=a;return Object.prototype.hasOwnProperty.call(b,I)?b[I]:b[I]=v(I)}function s(I,v){this.h=v;for(var b=[],T=!0,C=I.length-1;0<=C;C--){var S=I[C]|0;T&&S==v||(b[C]=S,T=!1)}this.g=b}var a={};function l(I){return-128<=I&&128>I?i(I,function(v){return new s([v|0],0>v?-1:0)}):new s([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return h;if(0>I)return k(u(-I));for(var v=[],b=1,T=0;I>=b;T++)v[T]=I/b|0,b*=4294967296;return new s(v,0)}function d(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return k(d(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=u(Math.pow(v,8)),T=h,C=0;C<I.length;C+=8){var S=Math.min(8,I.length-C),E=parseInt(I.substring(C,C+S),v);8>S?(S=u(Math.pow(v,S)),T=T.j(S).add(u(E))):(T=T.j(b),T=T.add(u(E)))}return T}var h=l(0),p=l(1),g=l(16777216);t=s.prototype,t.m=function(){if(P(this))return-k(this).m();for(var I=0,v=1,b=0;b<this.g.length;b++){var T=this.i(b);I+=(0<=T?T:4294967296+T)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(_(this))return"0";if(P(this))return"-"+k(this).toString(I);for(var v=u(Math.pow(I,6)),b=this,T="";;){var C=L(b,v).g;b=N(b,C.j(v));var S=((0<b.g.length?b.g[0]:b.h)>>>0).toString(I);if(b=C,_(b))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function _(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=N(this,I),P(I)?-1:_(I)?0:1};function k(I){for(var v=I.g.length,b=[],T=0;T<v;T++)b[T]=~I.g[T];return new s(b,~I.h).add(p)}t.abs=function(){return P(this)?k(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),b=[],T=0,C=0;C<=v;C++){var S=T+(this.i(C)&65535)+(I.i(C)&65535),E=(S>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);T=E>>>16,S&=65535,E&=65535,b[C]=E<<16|S}return new s(b,b[b.length-1]&-2147483648?-1:0)};function N(I,v){return I.add(k(v))}t.j=function(I){if(_(this)||_(I))return h;if(P(this))return P(I)?k(this).j(k(I)):k(k(this).j(I));if(P(I))return k(this.j(k(I)));if(0>this.l(g)&&0>I.l(g))return u(this.m()*I.m());for(var v=this.g.length+I.g.length,b=[],T=0;T<2*v;T++)b[T]=0;for(T=0;T<this.g.length;T++)for(var C=0;C<I.g.length;C++){var S=this.i(T)>>>16,E=this.i(T)&65535,we=I.i(C)>>>16,xe=I.i(C)&65535;b[2*T+2*C]+=E*xe,O(b,2*T+2*C),b[2*T+2*C+1]+=S*xe,O(b,2*T+2*C+1),b[2*T+2*C+1]+=E*we,O(b,2*T+2*C+1),b[2*T+2*C+2]+=S*we,O(b,2*T+2*C+2)}for(T=0;T<v;T++)b[T]=b[2*T+1]<<16|b[2*T];for(T=v;T<2*v;T++)b[T]=0;return new s(b,0)};function O(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function R(I,v){this.g=I,this.h=v}function L(I,v){if(_(v))throw Error("division by zero");if(_(I))return new R(h,h);if(P(I))return v=L(k(I),v),new R(k(v.g),k(v.h));if(P(v))return v=L(I,k(v)),new R(k(v.g),v.h);if(30<I.g.length){if(P(I)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var b=p,T=v;0>=T.l(I);)b=W(b),T=W(T);var C=q(b,1),S=q(T,1);for(T=q(T,2),b=q(b,2);!_(T);){var E=S.add(T);0>=E.l(I)&&(C=C.add(b),S=E),T=q(T,1),b=q(b,1)}return v=N(I,C.j(v)),new R(C,v)}for(C=h;0<=I.l(v);){for(b=Math.max(1,Math.floor(I.m()/v.m())),T=Math.ceil(Math.log(b)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=u(b),E=S.j(v);P(E)||0<E.l(I);)b-=T,S=u(b),E=S.j(v);_(S)&&(S=p),C=C.add(S),I=N(I,E)}return new R(C,I)}t.A=function(I){return L(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),b=[],T=0;T<v;T++)b[T]=this.i(T)&I.i(T);return new s(b,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),b=[],T=0;T<v;T++)b[T]=this.i(T)|I.i(T);return new s(b,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),b=[],T=0;T<v;T++)b[T]=this.i(T)^I.i(T);return new s(b,this.h^I.h)};function W(I){for(var v=I.g.length+1,b=[],T=0;T<v;T++)b[T]=I.i(T)<<1|I.i(T-1)>>>31;return new s(b,I.h)}function q(I,v){var b=v>>5;v%=32;for(var T=I.g.length-b,C=[],S=0;S<T;S++)C[S]=0<v?I.i(S+b)>>>v|I.i(S+b+1)<<32-v:I.i(S+b);return new s(C,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$_=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=u,s.fromString=d,Wo=s}).apply(typeof ov<"u"?ov:typeof self<"u"?self:typeof window<"u"?window:{});var Rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var F_,Vs,U_,Gl,wf,j_,B_,z_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,m){return c==Array.prototype||c==Object.prototype||(c[f]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rl=="object"&&Rl];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function o(c,f){if(f)e:{var m=r;c=c.split(".");for(var y=0;y<c.length-1;y++){var D=c[y];if(!(D in m))break e;m=m[D]}c=c[c.length-1],y=m[c],f=f(y),f!=y&&f!=null&&e(m,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var m=0,y=!1,D={next:function(){if(!y&&m<c.length){var M=m++;return{value:f(M,c[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}o("Array.prototype.values",function(c){return c||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function d(c,f,m){return c.call.apply(c.bind,arguments)}function h(c,f,m){if(!c)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),c.apply(f,D)}}return function(){return c.apply(f,arguments)}}function p(c,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,p.apply(null,arguments)}function g(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function _(c,f){function m(){}m.prototype=f.prototype,c.aa=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(y,D,M){for(var Y=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)Y[Xe-2]=arguments[Xe];return f.prototype[D].apply(y,Y)}}function P(c){const f=c.length;if(0<f){const m=Array(f);for(let y=0;y<f;y++)m[y]=c[y];return m}return[]}function k(c,f){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(l(y)){const D=c.length||0,M=y.length||0;c.length=D+M;for(let Y=0;Y<M;Y++)c[D+Y]=y[Y]}else c.push(y)}}class N{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function O(c){return/^[\s\xa0]*$/.test(c)}function R(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function L(c){return L[" "](c),c}L[" "]=function(){};var W=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function q(c,f,m){for(const y in c)f.call(m,c[y],y,c)}function I(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function v(c){const f={};for(const m in c)f[m]=c[m];return f}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(c,f){let m,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(m in y)c[m]=y[m];for(let M=0;M<b.length;M++)m=b[M],Object.prototype.hasOwnProperty.call(y,m)&&(c[m]=y[m])}}function C(c){var f=1;c=c.split(":");const m=[];for(;0<f&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function S(c){a.setTimeout(()=>{throw c},0)}function E(){var c=mt;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class we{constructor(){this.h=this.g=null}add(f,m){const y=xe.get();y.set(f,m),this.h?this.h.next=y:this.g=y,this.h=y}}var xe=new N(()=>new Ie,c=>c.reset());class Ie{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let me,_e=!1,mt=new we,ht=()=>{const c=a.Promise.resolve(void 0);me=()=>{c.then(ct)}};var ct=()=>{for(var c;c=E();){try{c.h.call(c.g)}catch(m){S(m)}var f=xe;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}_e=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var Kt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return c}();function sn(c,f){if(Ge.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(W){e:{try{L(f.nodeName);var D=!0;break e}catch{}D=!1}D||(f=null)}}else m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:St[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&sn.aa.h.call(this)}}_(sn,Ge);var St={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),te=0;function J(c,f,m,y,D){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!y,this.ha=D,this.key=++te,this.da=this.fa=!1}function re(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Se(c){this.src=c,this.g={},this.h=0}Se.prototype.add=function(c,f,m,y,D){var M=c.toString();c=this.g[M],c||(c=this.g[M]=[],this.h++);var Y=w(c,f,y,D);return-1<Y?(f=c[Y],m||(f.fa=!1)):(f=new J(f,this.src,M,!!y,D),f.fa=m,c.push(f)),f};function He(c,f){var m=f.type;if(m in c.g){var y=c.g[m],D=Array.prototype.indexOf.call(y,f,void 0),M;(M=0<=D)&&Array.prototype.splice.call(y,D,1),M&&(re(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function w(c,f,m,y){for(var D=0;D<c.length;++D){var M=c[D];if(!M.da&&M.listener==f&&M.capture==!!m&&M.ha==y)return D}return-1}var A="closure_lm_"+(1e6*Math.random()|0),V={};function U(c,f,m,y,D){if(Array.isArray(f)){for(var M=0;M<f.length;M++)U(c,f[M],m,y,D);return null}return m=ae(m),c&&c[F]?c.K(f,m,u(y)?!!y.capture:!!y,D):$(c,f,m,!1,y,D)}function $(c,f,m,y,D,M){if(!f)throw Error("Invalid event type");var Y=u(D)?!!D.capture:!!D,Xe=ce(c);if(Xe||(c[A]=Xe=new Se(c)),m=Xe.add(f,m,y,Y,M),m.proxy)return m;if(y=H(),m.proxy=y,y.src=c,y.listener=m,c.addEventListener)Kt||(D=Y),D===void 0&&(D=!1),c.addEventListener(f.toString(),y,D);else if(c.attachEvent)c.attachEvent(G(f.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function H(){function c(m){return f.call(c.src,c.listener,m)}const f=K;return c}function X(c,f,m,y,D){if(Array.isArray(f))for(var M=0;M<f.length;M++)X(c,f[M],m,y,D);else y=u(y)?!!y.capture:!!y,m=ae(m),c&&c[F]?(c=c.i,f=String(f).toString(),f in c.g&&(M=c.g[f],m=w(M,m,y,D),-1<m&&(re(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete c.g[f],c.h--)))):c&&(c=ce(c))&&(f=c.g[f.toString()],c=-1,f&&(c=w(f,m,y,D)),(m=-1<c?f[c]:null)&&Q(m))}function Q(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[F])He(f.i,c);else{var m=c.type,y=c.proxy;f.removeEventListener?f.removeEventListener(m,y,c.capture):f.detachEvent?f.detachEvent(G(m),y):f.addListener&&f.removeListener&&f.removeListener(y),(m=ce(f))?(He(m,c),m.h==0&&(m.src=null,f[A]=null)):re(c)}}}function G(c){return c in V?V[c]:V[c]="on"+c}function K(c,f){if(c.da)c=!0;else{f=new sn(f,this);var m=c.listener,y=c.ha||c.src;c.fa&&Q(c),c=m.call(y,f)}return c}function ce(c){return c=c[A],c instanceof Se?c:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(c){return typeof c=="function"?c:(c[Z]||(c[Z]=function(f){return c.handleEvent(f)}),c[Z])}function oe(){Fe.call(this),this.i=new Se(this),this.M=this,this.F=null}_(oe,Fe),oe.prototype[F]=!0,oe.prototype.removeEventListener=function(c,f,m,y){X(this,c,f,m,y)};function he(c,f){var m,y=c.F;if(y)for(m=[];y;y=y.F)m.push(y);if(c=c.M,y=f.type||f,typeof f=="string")f=new Ge(f,c);else if(f instanceof Ge)f.target=f.target||c;else{var D=f;f=new Ge(y,c),T(f,D)}if(D=!0,m)for(var M=m.length-1;0<=M;M--){var Y=f.g=m[M];D=Ue(Y,y,!0,f)&&D}if(Y=f.g=c,D=Ue(Y,y,!0,f)&&D,D=Ue(Y,y,!1,f)&&D,m)for(M=0;M<m.length;M++)Y=f.g=m[M],D=Ue(Y,y,!1,f)&&D}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var m=c.g[f],y=0;y<m.length;y++)re(m[y]);delete c.g[f],c.h--}}this.F=null},oe.prototype.K=function(c,f,m,y){return this.i.add(String(c),f,!1,m,y)},oe.prototype.L=function(c,f,m,y){return this.i.add(String(c),f,!0,m,y)};function Ue(c,f,m,y){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var D=!0,M=0;M<f.length;++M){var Y=f[M];if(Y&&!Y.da&&Y.capture==m){var Xe=Y.listener,Ct=Y.ha||Y.src;Y.fa&&He(c.i,Y),D=Xe.call(Ct,y)!==!1&&D}}return D&&!y.defaultPrevented}function De(c,f,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function Nt(c){c.g=De(()=>{c.g=null,c.i&&(c.i=!1,Nt(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class _t extends Fe{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Nt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(c){Fe.call(this),this.h=c,this.g={}}_(At,Fe);var Lt=[];function $r(c){q(c.g,function(f,m){this.g.hasOwnProperty(m)&&Q(f)},c),c.g={}}At.prototype.N=function(){At.aa.N.call(this),$r(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ai=a.JSON.stringify,Wt=a.JSON.parse,mn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function li(){}li.prototype.h=null;function Sp(c){return c.h||(c.h=c.i())}function Ap(){}var fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Au(){Ge.call(this,"d")}_(Au,Ge);function Cu(){Ge.call(this,"c")}_(Cu,Ge);var Co={},Cp=null;function rl(){return Cp=Cp||new oe}Co.La="serverreachability";function xp(c){Ge.call(this,Co.La,c)}_(xp,Ge);function hs(c){const f=rl();he(f,new xp(f))}Co.STAT_EVENT="statevent";function Pp(c,f){Ge.call(this,Co.STAT_EVENT,c),this.stat=f}_(Pp,Ge);function qt(c){const f=rl();he(f,new Pp(f,c))}Co.Ma="timingevent";function kp(c,f){Ge.call(this,Co.Ma,c),this.size=f}_(kp,Ge);function ps(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function ms(){this.g=!0}ms.prototype.xa=function(){this.g=!1};function lE(c,f,m,y,D,M){c.info(function(){if(c.g)if(M)for(var Y="",Xe=M.split("&"),Ct=0;Ct<Xe.length;Ct++){var Ve=Xe[Ct].split("=");if(1<Ve.length){var Dt=Ve[0];Ve=Ve[1];var Vt=Dt.split("_");Y=2<=Vt.length&&Vt[1]=="type"?Y+(Dt+"="+Ve+"&"):Y+(Dt+"=redacted&")}}else Y=null;else Y=M;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+f+`
`+m+`
`+Y})}function cE(c,f,m,y,D,M,Y){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+f+`
`+m+`
`+M+" "+Y})}function ci(c,f,m,y){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+dE(c,m)+(y?" "+y:"")})}function uE(c,f){c.info(function(){return"TIMEOUT: "+f})}ms.prototype.info=function(){};function dE(c,f){if(!c.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var y=m[c];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var M=D[0];if(M!="noop"&&M!="stop"&&M!="close")for(var Y=1;Y<D.length;Y++)D[Y]=""}}}}return ai(m)}catch{return f}}var ol={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Op={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xu;function il(){}_(il,li),il.prototype.g=function(){return new XMLHttpRequest},il.prototype.i=function(){return{}},xu=new il;function Fr(c,f,m,y){this.j=c,this.i=f,this.l=m,this.R=y||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rp}function Rp(){this.i=null,this.g="",this.h=!1}var Np={},Pu={};function ku(c,f,m){c.L=1,c.v=cl(or(f)),c.m=m,c.P=!0,Lp(c,null)}function Lp(c,f){c.F=Date.now(),sl(c),c.A=or(c.v);var m=c.A,y=c.R;Array.isArray(y)||(y=[String(y)]),Gp(m.i,"t",y),c.C=0,m=c.j.J,c.h=new Rp,c.g=fm(c.j,m?f:null,!c.m),0<c.O&&(c.M=new _t(p(c.Y,c,c.g),c.O)),f=c.U,m=c.g,y=c.ca;var D="readystatechange";Array.isArray(D)||(D&&(Lt[0]=D.toString()),D=Lt);for(var M=0;M<D.length;M++){var Y=U(m,D[M],y||f.handleEvent,!1,f.h||f);if(!Y)break;f.g[Y.key]=Y}f=c.H?v(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),hs(),lE(c.i,c.u,c.A,c.l,c.R,c.m)}Fr.prototype.ca=function(c){c=c.target;const f=this.M;f&&ir(c)==3?f.j():this.Y(c)},Fr.prototype.Y=function(c){try{if(c==this.g)e:{const Vt=ir(this.g);var f=this.g.Ba();const fi=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||tm(this.g)))){this.J||Vt!=4||f==7||(f==8||0>=fi?hs(3):hs(2)),Ou(this);var m=this.g.Z();this.X=m;t:if(Dp(this)){var y=tm(this.g);c="";var D=y.length,M=ir(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xo(this),gs(this);var Y="";break t}this.h.i=new a.TextDecoder}for(f=0;f<D;f++)this.h.h=!0,c+=this.h.i.decode(y[f],{stream:!(M&&f==D-1)});y.length=0,this.h.g+=c,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=m==200,cE(this.i,this.u,this.A,this.l,this.R,Vt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Xe,Ct=this.g;if((Xe=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Xe)){var Ve=Xe;break t}}Ve=null}if(m=Ve)ci(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ru(this,m);else{this.o=!1,this.s=3,qt(12),xo(this),gs(this);break e}}if(this.P){m=!0;let Tn;for(;!this.J&&this.C<Y.length;)if(Tn=fE(this,Y),Tn==Pu){Vt==4&&(this.s=4,qt(14),m=!1),ci(this.i,this.l,null,"[Incomplete Response]");break}else if(Tn==Np){this.s=4,qt(15),ci(this.i,this.l,Y,"[Invalid Chunk]"),m=!1;break}else ci(this.i,this.l,Tn,null),Ru(this,Tn);if(Dp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||Y.length!=0||this.h.h||(this.s=1,qt(16),m=!1),this.o=this.o&&m,!m)ci(this.i,this.l,Y,"[Invalid Chunked Response]"),xo(this),gs(this);else if(0<Y.length&&!this.W){this.W=!0;var Dt=this.j;Dt.g==this&&Dt.ba&&!Dt.M&&(Dt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),$u(Dt),Dt.M=!0,qt(11))}}else ci(this.i,this.l,Y,null),Ru(this,Y);Vt==4&&xo(this),this.o&&!this.J&&(Vt==4?lm(this.j,this):(this.o=!1,sl(this)))}else PE(this.g),m==400&&0<Y.indexOf("Unknown SID")?(this.s=3,qt(12)):(this.s=0,qt(13)),xo(this),gs(this)}}}catch{}finally{}};function Dp(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function fE(c,f){var m=c.C,y=f.indexOf(`
`,m);return y==-1?Pu:(m=Number(f.substring(m,y)),isNaN(m)?Np:(y+=1,y+m>f.length?Pu:(f=f.slice(y,y+m),c.C=y+m,f)))}Fr.prototype.cancel=function(){this.J=!0,xo(this)};function sl(c){c.S=Date.now()+c.I,Vp(c,c.I)}function Vp(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=ps(p(c.ba,c),f)}function Ou(c){c.B&&(a.clearTimeout(c.B),c.B=null)}Fr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(uE(this.i,this.A),this.L!=2&&(hs(),qt(17)),xo(this),this.s=2,gs(this)):Vp(this,this.S-c)};function gs(c){c.j.G==0||c.J||lm(c.j,c)}function xo(c){Ou(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,$r(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function Ru(c,f){try{var m=c.j;if(m.G!=0&&(m.g==c||Nu(m.h,c))){if(!c.K&&Nu(m.h,c)&&m.G==3){try{var y=m.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)ml(m),hl(m);else break e;Mu(m),qt(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=ps(p(m.Za,m),6e3));if(1>=Fp(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ko(m,11)}else if((c.K||m.g==c)&&ml(m),!O(f))for(D=m.Da.g.parse(f),f=0;f<D.length;f++){let Ve=D[f];if(m.T=Ve[0],Ve=Ve[1],m.G==2)if(Ve[0]=="c"){m.K=Ve[1],m.ia=Ve[2];const Dt=Ve[3];Dt!=null&&(m.la=Dt,m.j.info("VER="+m.la));const Vt=Ve[4];Vt!=null&&(m.Aa=Vt,m.j.info("SVER="+m.Aa));const fi=Ve[5];fi!=null&&typeof fi=="number"&&0<fi&&(y=1.5*fi,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const Tn=c.g;if(Tn){const yl=Tn.g?Tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yl){var M=y.h;M.g||yl.indexOf("spdy")==-1&&yl.indexOf("quic")==-1&&yl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Lu(M,M.h),M.h=null))}if(y.D){const Fu=Tn.g?Tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Fu&&(y.ya=Fu,rt(y.I,y.D,Fu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var Y=c;if(y.qa=dm(y,y.J?y.ia:null,y.W),Y.K){Up(y.h,Y);var Xe=Y,Ct=y.L;Ct&&(Xe.I=Ct),Xe.B&&(Ou(Xe),sl(Xe)),y.g=Y}else sm(y);0<m.i.length&&pl(m)}else Ve[0]!="stop"&&Ve[0]!="close"||ko(m,7);else m.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?ko(m,7):Vu(m):Ve[0]!="noop"&&m.l&&m.l.ta(Ve),m.v=0)}}hs(4)}catch{}}var hE=class{constructor(c,f){this.g=c,this.map=f}};function Mp(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $p(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Fp(c){return c.h?1:c.g?c.g.size:0}function Nu(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function Lu(c,f){c.g?c.g.add(f):c.h=f}function Up(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Mp.prototype.cancel=function(){if(this.i=jp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function jp(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.D);return f}return P(c.i)}function pE(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],m=c.length,y=0;y<m;y++)f.push(c[y]);return f}f=[],m=0;for(y in c)f[m++]=c[y];return f}function mE(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var m=0;m<c;m++)f.push(m);return f}f=[],m=0;for(const y in c)f[m++]=y;return f}}}function Bp(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var m=mE(c),y=pE(c),D=y.length,M=0;M<D;M++)f.call(void 0,y[M],m&&m[M],c)}var zp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gE(c,f){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var y=c[m].indexOf("="),D=null;if(0<=y){var M=c[m].substring(0,y);D=c[m].substring(y+1)}else M=c[m];f(M,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Po(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Po){this.h=c.h,al(this,c.j),this.o=c.o,this.g=c.g,ll(this,c.s),this.l=c.l;var f=c.i,m=new bs;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Hp(this,m),this.m=c.m}else c&&(f=String(c).match(zp))?(this.h=!1,al(this,f[1]||"",!0),this.o=ys(f[2]||""),this.g=ys(f[3]||"",!0),ll(this,f[4]),this.l=ys(f[5]||"",!0),Hp(this,f[6]||"",!0),this.m=ys(f[7]||"")):(this.h=!1,this.i=new bs(null,this.h))}Po.prototype.toString=function(){var c=[],f=this.j;f&&c.push(vs(f,Kp,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(vs(f,Kp,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(vs(m,m.charAt(0)=="/"?bE:vE,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",vs(m,wE)),c.join("")};function or(c){return new Po(c)}function al(c,f,m){c.j=m?ys(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function ll(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Hp(c,f,m){f instanceof bs?(c.i=f,EE(c.i,c.h)):(m||(f=vs(f,_E)),c.i=new bs(f,c.h))}function rt(c,f,m){c.i.set(f,m)}function cl(c){return rt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function ys(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function vs(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,yE),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function yE(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Kp=/[#\/\?@]/g,vE=/[#\?:]/g,bE=/[#\?]/g,_E=/[#\?@]/g,wE=/#/g;function bs(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function Ur(c){c.g||(c.g=new Map,c.h=0,c.i&&gE(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=bs.prototype,t.add=function(c,f){Ur(this),this.i=null,c=ui(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function Wp(c,f){Ur(c),f=ui(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function qp(c,f){return Ur(c),f=ui(c,f),c.g.has(f)}t.forEach=function(c,f){Ur(this),this.g.forEach(function(m,y){m.forEach(function(D){c.call(f,D,y,this)},this)},this)},t.na=function(){Ur(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let y=0;y<f.length;y++){const D=c[y];for(let M=0;M<D.length;M++)m.push(f[y])}return m},t.V=function(c){Ur(this);let f=[];if(typeof c=="string")qp(this,c)&&(f=f.concat(this.g.get(ui(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)f=f.concat(c[m])}return f},t.set=function(c,f){return Ur(this),this.i=null,c=ui(this,c),qp(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Gp(c,f,m){Wp(c,f),0<m.length&&(c.i=null,c.g.set(ui(c,f),P(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var y=f[m];const M=encodeURIComponent(String(y)),Y=this.V(y);for(y=0;y<Y.length;y++){var D=M;Y[y]!==""&&(D+="="+encodeURIComponent(String(Y[y]))),c.push(D)}}return this.i=c.join("&")};function ui(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function EE(c,f){f&&!c.j&&(Ur(c),c.i=null,c.g.forEach(function(m,y){var D=y.toLowerCase();y!=D&&(Wp(this,y),Gp(this,D,m))},c)),c.j=f}function IE(c,f){const m=new ms;if(a.Image){const y=new Image;y.onload=g(jr,m,"TestLoadImage: loaded",!0,f,y),y.onerror=g(jr,m,"TestLoadImage: error",!1,f,y),y.onabort=g(jr,m,"TestLoadImage: abort",!1,f,y),y.ontimeout=g(jr,m,"TestLoadImage: timeout",!1,f,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else f(!1)}function TE(c,f){const m=new ms,y=new AbortController,D=setTimeout(()=>{y.abort(),jr(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:y.signal}).then(M=>{clearTimeout(D),M.ok?jr(m,"TestPingServer: ok",!0,f):jr(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),jr(m,"TestPingServer: error",!1,f)})}function jr(c,f,m,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(m)}catch{}}function SE(){this.g=new mn}function AE(c,f,m){const y=m||"";try{Bp(c,function(D,M){let Y=D;u(D)&&(Y=ai(D)),f.push(y+M+"="+encodeURIComponent(Y))})}catch(D){throw f.push(y+"type="+encodeURIComponent("_badmap")),D}}function ul(c){this.l=c.Ub||null,this.j=c.eb||!1}_(ul,li),ul.prototype.g=function(){return new dl(this.l,this.j)},ul.prototype.i=function(c){return function(){return c}}({});function dl(c,f){oe.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(dl,oe),t=dl.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,ws(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_s(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qp(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qp(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?_s(this):ws(this),this.readyState==3&&Qp(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,_s(this))},t.Qa=function(c){this.g&&(this.response=c,_s(this))},t.ga=function(){this.g&&_s(this)};function _s(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ws(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function ws(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(dl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Yp(c){let f="";return q(c,function(m,y){f+=y,f+=":",f+=m,f+=`\r
`}),f}function Du(c,f,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Yp(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):rt(c,f,m))}function ft(c){oe.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(ft,oe);var CE=/^https?$/i,xE=["POST","PUT"];t=ft.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xu.g(),this.v=this.o?Sp(this.o):Sp(xu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(M){Xp(this,M);return}if(c=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)m.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())m.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),D=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(xE,f,void 0))||y||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,Y]of m)this.g.setRequestHeader(M,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{em(this),this.u=!0,this.g.send(c),this.u=!1}catch(M){Xp(this,M)}};function Xp(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Jp(c),fl(c)}function Jp(c){c.A||(c.A=!0,he(c,"complete"),he(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,he(this,"complete"),he(this,"abort"),fl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fl(this,!0)),ft.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zp(this):this.bb())},t.bb=function(){Zp(this)};function Zp(c){if(c.h&&typeof s<"u"&&(!c.v[1]||ir(c)!=4||c.Z()!=2)){if(c.u&&ir(c)==4)De(c.Ea,0,c);else if(he(c,"readystatechange"),ir(c)==4){c.h=!1;try{const Y=c.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var y;if(y=Y===0){var D=String(c.D).match(zp)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),y=!CE.test(D?D.toLowerCase():"")}m=y}if(m)he(c,"complete"),he(c,"success");else{c.m=6;try{var M=2<ir(c)?c.g.statusText:""}catch{M=""}c.l=M+" ["+c.Z()+"]",Jp(c)}}finally{fl(c)}}}}function fl(c,f){if(c.g){em(c);const m=c.g,y=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||he(c,"ready");try{m.onreadystatechange=y}catch{}}}function em(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function ir(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<ir(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),Wt(f)}};function tm(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function PE(c){const f={};c=(c.g&&2<=ir(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(O(c[y]))continue;var m=C(c[y]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=f[D]||[];f[D]=M,M.push(m)}I(f,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Es(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function nm(c){this.Aa=0,this.i=[],this.j=new ms,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Es("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Es("baseRetryDelayMs",5e3,c),this.cb=Es("retryDelaySeedMs",1e4,c),this.Wa=Es("forwardChannelMaxRetries",2,c),this.wa=Es("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Mp(c&&c.concurrentRequestLimit),this.Da=new SE,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=nm.prototype,t.la=8,t.G=1,t.connect=function(c,f,m,y){qt(0),this.W=c,this.H=f||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=dm(this,null,this.W),pl(this)};function Vu(c){if(rm(c),c.G==3){var f=c.U++,m=or(c.I);if(rt(m,"SID",c.K),rt(m,"RID",f),rt(m,"TYPE","terminate"),Is(c,m),f=new Fr(c,c.j,f),f.L=2,f.v=cl(or(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=fm(f.j,null),f.g.ea(f.v)),f.F=Date.now(),sl(f)}um(c)}function hl(c){c.g&&($u(c),c.g.cancel(),c.g=null)}function rm(c){hl(c),c.u&&(a.clearTimeout(c.u),c.u=null),ml(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function pl(c){if(!$p(c.h)&&!c.s){c.s=!0;var f=c.Ga;me||ht(),_e||(me(),_e=!0),mt.add(f,c),c.B=0}}function kE(c,f){return Fp(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=ps(p(c.Ga,c,f),cm(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const D=new Fr(this,this.j,c);let M=this.o;if(this.S&&(M?(M=v(M),T(M,this.S)):M=this.S),this.m!==null||this.O||(D.H=M,M=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=im(this,D,f),m=or(this.I),rt(m,"RID",c),rt(m,"CVER",22),this.D&&rt(m,"X-HTTP-Session-Id",this.D),Is(this,m),M&&(this.O?f="headers="+encodeURIComponent(String(Yp(M)))+"&"+f:this.m&&Du(m,this.m,M)),Lu(this.h,D),this.Ua&&rt(m,"TYPE","init"),this.P?(rt(m,"$req",f),rt(m,"SID","null"),D.T=!0,ku(D,m,null)):ku(D,m,f),this.G=2}}else this.G==3&&(c?om(this,c):this.i.length==0||$p(this.h)||om(this))};function om(c,f){var m;f?m=f.l:m=c.U++;const y=or(c.I);rt(y,"SID",c.K),rt(y,"RID",m),rt(y,"AID",c.T),Is(c,y),c.m&&c.o&&Du(y,c.m,c.o),m=new Fr(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),f&&(c.i=f.D.concat(c.i)),f=im(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Lu(c.h,m),ku(m,y,f)}function Is(c,f){c.H&&q(c.H,function(m,y){rt(f,y,m)}),c.l&&Bp({},function(m,y){rt(f,y,m)})}function im(c,f,m){m=Math.min(c.i.length,m);var y=c.l?p(c.l.Na,c.l,c):null;e:{var D=c.i;let M=-1;for(;;){const Y=["count="+m];M==-1?0<m?(M=D[0].g,Y.push("ofs="+M)):M=0:Y.push("ofs="+M);let Xe=!0;for(let Ct=0;Ct<m;Ct++){let Ve=D[Ct].g;const Dt=D[Ct].map;if(Ve-=M,0>Ve)M=Math.max(0,D[Ct].g-100),Xe=!1;else try{AE(Dt,Y,"req"+Ve+"_")}catch{y&&y(Dt)}}if(Xe){y=Y.join("&");break e}}}return c=c.i.splice(0,m),f.D=c,y}function sm(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;me||ht(),_e||(me(),_e=!0),mt.add(f,c),c.v=0}}function Mu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=ps(p(c.Fa,c),cm(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,am(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=ps(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qt(10),hl(this),am(this))};function $u(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function am(c){c.g=new Fr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=or(c.qa);rt(f,"RID","rpc"),rt(f,"SID",c.K),rt(f,"AID",c.T),rt(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&rt(f,"TO",c.ja),rt(f,"TYPE","xmlhttp"),Is(c,f),c.m&&c.o&&Du(f,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=cl(or(f)),m.m=null,m.P=!0,Lp(m,c)}t.Za=function(){this.C!=null&&(this.C=null,hl(this),Mu(this),qt(19))};function ml(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function lm(c,f){var m=null;if(c.g==f){ml(c),$u(c),c.g=null;var y=2}else if(Nu(c.h,f))m=f.D,Up(c.h,f),y=1;else return;if(c.G!=0){if(f.o)if(y==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var D=c.B;y=rl(),he(y,new kp(y,m)),pl(c)}else sm(c);else if(D=f.s,D==3||D==0&&0<f.X||!(y==1&&kE(c,f)||y==2&&Mu(c)))switch(m&&0<m.length&&(f=c.h,f.i=f.i.concat(m)),D){case 1:ko(c,5);break;case 4:ko(c,10);break;case 3:ko(c,6);break;default:ko(c,2)}}}function cm(c,f){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*f}function ko(c,f){if(c.j.info("Error code "+f),f==2){var m=p(c.fb,c),y=c.Xa;const D=!y;y=new Po(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||al(y,"https"),cl(y),D?IE(y.toString(),m):TE(y.toString(),m)}else qt(2);c.G=0,c.l&&c.l.sa(f),um(c),rm(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),qt(2)):(this.j.info("Failed to ping google.com"),qt(1))};function um(c){if(c.G=0,c.ka=[],c.l){const f=jp(c.h);(f.length!=0||c.i.length!=0)&&(k(c.ka,f),k(c.ka,c.i),c.h.i.length=0,P(c.i),c.i.length=0),c.l.ra()}}function dm(c,f,m){var y=m instanceof Po?or(m):new Po(m);if(y.g!="")f&&(y.g=f+"."+y.g),ll(y,y.s);else{var D=a.location;y=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;var M=new Po(null);y&&al(M,y),f&&(M.g=f),D&&ll(M,D),m&&(M.l=m),y=M}return m=c.D,f=c.ya,m&&f&&rt(y,m,f),rt(y,"VER",c.la),Is(c,y),y}function fm(c,f,m){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new ft(new ul({eb:m})):new ft(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function hm(){}t=hm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function gl(){}gl.prototype.g=function(c,f){return new an(c,f)};function an(c,f){oe.call(this),this.g=new nm(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!O(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!O(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new di(this)}_(an,oe),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){Vu(this.g)},an.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=ai(c),c=m);f.i.push(new hE(f.Ya++,c)),f.G==3&&pl(f)},an.prototype.N=function(){this.g.l=null,delete this.j,Vu(this.g),delete this.g,an.aa.N.call(this)};function pm(c){Au.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const m in f){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}_(pm,Au);function mm(){Cu.call(this),this.status=1}_(mm,Cu);function di(c){this.g=c}_(di,hm),di.prototype.ua=function(){he(this.g,"a")},di.prototype.ta=function(c){he(this.g,new pm(c))},di.prototype.sa=function(c){he(this.g,new mm)},di.prototype.ra=function(){he(this.g,"b")},gl.prototype.createWebChannel=gl.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,z_=function(){return new gl},B_=function(){return rl()},j_=Co,wf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ol.NO_ERROR=0,ol.TIMEOUT=8,ol.HTTP_ERROR=6,Gl=ol,Op.COMPLETE="complete",U_=Op,Ap.EventType=fs,fs.OPEN="a",fs.CLOSE="b",fs.ERROR="c",fs.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Vs=Ap,ft.prototype.listenOnce=ft.prototype.L,ft.prototype.getLastError=ft.prototype.Ka,ft.prototype.getLastErrorCode=ft.prototype.Ba,ft.prototype.getStatus=ft.prototype.Z,ft.prototype.getResponseJson=ft.prototype.Oa,ft.prototype.getResponseText=ft.prototype.oa,ft.prototype.send=ft.prototype.ea,ft.prototype.setWithCredentials=ft.prototype.Ha,F_=ft}).apply(typeof Rl<"u"?Rl:typeof self<"u"?self:typeof window<"u"?window:{});const iv="@firebase/firestore";/**
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
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
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
 */let cs="10.14.0";/**
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
 */const Zo=new xh("@firebase/firestore");function Ps(){return Zo.logLevel}function ie(t,...e){if(Zo.logLevel<=Pe.DEBUG){const n=e.map(Gh);Zo.debug(`Firestore (${cs}): ${t}`,...n)}}function kr(t,...e){if(Zo.logLevel<=Pe.ERROR){const n=e.map(Gh);Zo.error(`Firestore (${cs}): ${t}`,...n)}}function Qi(t,...e){if(Zo.logLevel<=Pe.WARN){const n=e.map(Gh);Zo.warn(`Firestore (${cs}): ${t}`,...n)}}function Gh(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ge(t="Unexpected state"){const e=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: `+t;throw kr(e),new Error(e)}function qe(t,e){t||ge()}function be(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Vr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class H_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class E9{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ft.UNAUTHENTICATED))}shutdown(){}}class I9{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class T9{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){qe(this.o===void 0);let r=this.i;const o=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tr,e.enqueueRetryable(()=>o(this.currentUser))};const s=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await o(this.currentUser)})},a=l=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qe(typeof r.accessToken=="string"),new H_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string"),new Ft(e)}}class S9{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class A9{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new S9(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C9{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x9{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){qe(this.o===void 0);const r=i=>{i.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const s=i.token!==this.R;return this.R=i.token,ie("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const o=i=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>o(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?o(i):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(qe(typeof n.token=="string"),this.R=n.token,new C9(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function P9(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class K_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const o=P9(40);for(let i=0;i<o.length;++i)r.length<20&&o[i]<n&&(r+=e.charAt(o[i]%e.length))}return r}}function Me(t,e){return t<e?-1:t>e?1:0}function Yi(t,e,n){return t.length===e.length&&t.every((r,o)=>n(r,e[o]))}/**
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
 */class bt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new le(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new le(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new le(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return bt.fromMillis(Date.now())}static fromDate(e){return bt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new bt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ye{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ye(e)}static min(){return new ye(new bt(0,0))}static max(){return new ye(new bt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Oa{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(),r===void 0?r=e.length-n:r>e.length-n&&ge(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Oa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Oa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let o=0;o<r;o++){const i=e.get(o),s=n.get(o);if(i<s)return-1;if(i>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class st extends Oa{construct(e,n,r){return new st(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new le(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(o=>o.length>0))}return new st(n)}static emptyPath(){return new st([])}}const k9=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Oa{construct(e,n,r){return new kt(e,n,r)}static isValidIdentifier(e){return k9.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const n=[];let r="",o=0;const i=()=>{if(r.length===0)throw new le(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;o<e.length;){const a=e[o];if(a==="\\"){if(o+1===e.length)throw new le(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[o+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new le(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,o+=2}else a==="`"?(s=!s,o++):a!=="."||s?(r+=a,o++):(i(),o++)}if(i(),s)throw new le(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(n)}static emptyPath(){return new kt([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(st.fromString(e))}static fromName(e){return new fe(st.fromString(e).popFirst(5))}static empty(){return new fe(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new st(e.slice()))}}function O9(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,o=ye.fromTimestamp(r===1e9?new bt(n+1,0):new bt(n,r));return new bo(o,fe.empty(),e)}function R9(t){return new bo(t.readTime,t.key,-1)}class bo{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new bo(ye.min(),fe.empty(),-1)}static max(){return new bo(ye.max(),fe.empty(),-1)}}function N9(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:Me(t.largestBatchId,e.largestBatchId))}/**
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
 */const L9="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class D9{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ya(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==L9)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,o)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,o)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let o=0,i=0,s=!1;e.forEach(a=>{++o,a.next(()=>{++i,s&&i===o&&n()},l=>r(l))}),s=!0,i===o&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(o=>o?z.resolve(o):r());return n}static forEach(e,n){const r=[];return e.forEach((o,i)=>{r.push(n.call(this,o,i))}),this.waitFor(r)}static mapArray(e,n){return new z((r,o)=>{const i=e.length,s=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{s[u]=d,++a,a===i&&r(s)},d=>o(d))}})}static doWhile(e,n){return new z((r,o)=>{const i=()=>{e()===!0?n().next(()=>{i()},o):r()};i()})}}function V9(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xa(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Qh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Qh.oe=-1;function uu(t){return t==null}function Tc(t){return t===0&&1/t==-1/0}function M9(t){return typeof t=="number"&&Number.isInteger(t)&&!Tc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function sv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function W_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class dt{constructor(e,n){this.comparator=e,this.root=n||xt.EMPTY}insert(e,n){return new dt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return n+r.left.size;o<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nl(this.root,e,this.comparator,!0)}}class Nl{constructor(e,n,r,o){this.isReverse=o,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&o&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,n,r,o,i){this.key=e,this.value=n,this.color=r??xt.RED,this.left=o??xt.EMPTY,this.right=i??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,o,i){return new xt(e??this.key,n??this.value,r??this.color,o??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let o=this;const i=r(e,o.key);return o=i<0?o.copy(null,null,null,o.left.insert(e,n,r),null):i===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,n,r,o,i){return this}insert(e,n,r){return new xt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ot{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new av(this.data.getIterator())}getIteratorFrom(e){return new av(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,i=r.getNext().key;if(this.comparator(o,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ot(this.comparator);return n.data=e,n}}class av{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new dn([])}unionWith(e){let n=new Ot(kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class q_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new q_("Invalid base64 string: "+i):i}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(o){let i="";for(let s=0;s<o.length;++s)i+=String.fromCharCode(o[s]);return i}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const $9=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _o(t){if(qe(!!t),typeof t=="string"){let e=0;const n=$9.exec(t);if(qe(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pt(t.seconds),nanos:pt(t.nanos)}}function pt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ei(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
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
 */function Yh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xh(t){const e=t.mapValue.fields.__previous_value__;return Yh(e)?Xh(e):e}function Ra(t){const e=_o(t.mapValue.fields.__local_write_time__.timestampValue);return new bt(e.seconds,e.nanos)}/**
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
 */class F9{constructor(e,n,r,o,i,s,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=o,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Na{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Na("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Na&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ll={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ti(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yh(t)?4:j9(t)?9007199254740991:U9(t)?10:11:ge()}function tr(t,e){if(t===e)return!0;const n=ti(t);if(n!==ti(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ra(t).isEqual(Ra(e));case 3:return function(o,i){if(typeof o.timestampValue=="string"&&typeof i.timestampValue=="string"&&o.timestampValue.length===i.timestampValue.length)return o.timestampValue===i.timestampValue;const s=_o(o.timestampValue),a=_o(i.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(o,i){return ei(o.bytesValue).isEqual(ei(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(o,i){return pt(o.geoPointValue.latitude)===pt(i.geoPointValue.latitude)&&pt(o.geoPointValue.longitude)===pt(i.geoPointValue.longitude)}(t,e);case 2:return function(o,i){if("integerValue"in o&&"integerValue"in i)return pt(o.integerValue)===pt(i.integerValue);if("doubleValue"in o&&"doubleValue"in i){const s=pt(o.doubleValue),a=pt(i.doubleValue);return s===a?Tc(s)===Tc(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return Yi(t.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(o,i){const s=o.mapValue.fields||{},a=i.mapValue.fields||{};if(sv(s)!==sv(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!tr(s[l],a[l])))return!1;return!0}(t,e);default:return ge()}}function La(t,e){return(t.values||[]).find(n=>tr(n,e))!==void 0}function Xi(t,e){if(t===e)return 0;const n=ti(t),r=ti(e);if(n!==r)return Me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Me(t.booleanValue,e.booleanValue);case 2:return function(i,s){const a=pt(i.integerValue||i.doubleValue),l=pt(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return lv(t.timestampValue,e.timestampValue);case 4:return lv(Ra(t),Ra(e));case 5:return Me(t.stringValue,e.stringValue);case 6:return function(i,s){const a=ei(i),l=ei(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const a=i.split("/"),l=s.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=Me(a[u],l[u]);if(d!==0)return d}return Me(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const a=Me(pt(i.latitude),pt(s.latitude));return a!==0?a:Me(pt(i.longitude),pt(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return cv(t.arrayValue,e.arrayValue);case 10:return function(i,s){var a,l,u,d;const h=i.fields||{},p=s.fields||{},g=(a=h.value)===null||a===void 0?void 0:a.arrayValue,_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=Me(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((d=_==null?void 0:_.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:cv(g,_)}(t.mapValue,e.mapValue);case 11:return function(i,s){if(i===Ll.mapValue&&s===Ll.mapValue)return 0;if(i===Ll.mapValue)return 1;if(s===Ll.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=s.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let h=0;h<l.length&&h<d.length;++h){const p=Me(l[h],d[h]);if(p!==0)return p;const g=Xi(a[l[h]],u[d[h]]);if(g!==0)return g}return Me(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ge()}}function lv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Me(t,e);const n=_o(t),r=_o(e),o=Me(n.seconds,r.seconds);return o!==0?o:Me(n.nanos,r.nanos)}function cv(t,e){const n=t.values||[],r=e.values||[];for(let o=0;o<n.length&&o<r.length;++o){const i=Xi(n[o],r[o]);if(i)return i}return Me(n.length,r.length)}function Ji(t){return Ef(t)}function Ef(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_o(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ei(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",o=!0;for(const i of n.values||[])o?o=!1:r+=",",r+=Ef(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let o="{",i=!0;for(const s of r)i?i=!1:o+=",",o+=`${s}:${Ef(n.fields[s])}`;return o+"}"}(t.mapValue):ge()}function If(t){return!!t&&"integerValue"in t}function Jh(t){return!!t&&"arrayValue"in t}function uv(t){return!!t&&"nullValue"in t}function dv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ql(t){return!!t&&"mapValue"in t}function U9(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ea(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ii(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ea(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ea(t.arrayValue.values[n]);return e}return Object.assign({},t)}function j9(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ql(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ea(n)}setAll(e){let n=kt.emptyPath(),r={},o=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,o),r={},o=[],n=a.popLast()}s?r[a.lastSegment()]=ea(s):o.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,o)}delete(e){const n=this.field(e.popLast());Ql(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=n.mapValue.fields[e.get(r)];Ql(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,r){ii(n,(o,i)=>e[o]=i);for(const o of r)delete e[o]}clone(){return new en(ea(this.value))}}function G_(t){const e=[];return ii(t.fields,(n,r)=>{const o=new kt([n]);if(Ql(r)){const i=G_(r.mapValue).fields;if(i.length===0)e.push(o);else for(const s of i)e.push(o.child(s))}else e.push(o)}),new dn(e)}/**
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
 */class jt{constructor(e,n,r,o,i,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=o,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new jt(e,0,ye.min(),ye.min(),ye.min(),en.empty(),0)}static newFoundDocument(e,n,r,o){return new jt(e,1,n,ye.min(),r,o,0)}static newNoDocument(e,n){return new jt(e,2,n,ye.min(),ye.min(),en.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,ye.min(),ye.min(),en.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sc{constructor(e,n){this.position=e,this.inclusive=n}}function fv(t,e,n){let r=0;for(let o=0;o<t.position.length;o++){const i=e[o],s=t.position[o];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(s.referenceValue),n.key):r=Xi(s,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ac{constructor(e,n="asc"){this.field=e,this.dir=n}}function B9(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Q_{}class vt extends Q_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new H9(e,n,r):n==="array-contains"?new q9(e,r):n==="in"?new G9(e,r):n==="not-in"?new Q9(e,r):n==="array-contains-any"?new Y9(e,r):new vt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new K9(e,r):new W9(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xi(n,this.value)):n!==null&&ti(this.value)===ti(n)&&this.matchesComparison(Xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nr extends Q_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new nr(e,n)}matches(e){return Y_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Y_(t){return t.op==="and"}function X_(t){return z9(t)&&Y_(t)}function z9(t){for(const e of t.filters)if(e instanceof nr)return!1;return!0}function Tf(t){if(t instanceof vt)return t.field.canonicalString()+t.op.toString()+Ji(t.value);if(X_(t))return t.filters.map(e=>Tf(e)).join(",");{const e=t.filters.map(n=>Tf(n)).join(",");return`${t.op}(${e})`}}function J_(t,e){return t instanceof vt?function(r,o){return o instanceof vt&&r.op===o.op&&r.field.isEqual(o.field)&&tr(r.value,o.value)}(t,e):t instanceof nr?function(r,o){return o instanceof nr&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce((i,s,a)=>i&&J_(s,o.filters[a]),!0):!1}(t,e):void ge()}function Z_(t){return t instanceof vt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ji(n.value)}`}(t):t instanceof nr?function(n){return n.op.toString()+" {"+n.getFilters().map(Z_).join(" ,")+"}"}(t):"Filter"}class H9 extends vt{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class K9 extends vt{constructor(e,n){super(e,"in",n),this.keys=ew("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class W9 extends vt{constructor(e,n){super(e,"not-in",n),this.keys=ew("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ew(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class q9 extends vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jh(n)&&La(n.arrayValue,this.value)}}class G9 extends vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&La(this.value.arrayValue,n)}}class Q9 extends vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(La(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!La(this.value.arrayValue,n)}}class Y9 extends vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>La(this.value.arrayValue,r))}}/**
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
 */class X9{constructor(e,n=null,r=[],o=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=o,this.limit=i,this.startAt=s,this.endAt=a,this.ue=null}}function pv(t,e=null,n=[],r=[],o=null,i=null,s=null){return new X9(t,e,n,r,o,i,s)}function Zh(t){const e=be(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Tf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),uu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ji(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ji(r)).join(",")),e.ue=n}return e.ue}function ep(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!B9(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!J_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hv(t.startAt,e.startAt)&&hv(t.endAt,e.endAt)}function Sf(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class du{constructor(e,n=null,r=[],o=[],i=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function J9(t,e,n,r,o,i,s,a){return new du(t,e,n,r,o,i,s,a)}function tp(t){return new du(t)}function mv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Z9(t){return t.collectionGroup!==null}function ta(t){const e=be(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new Ot(kt.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ac(i,r))}),n.has(kt.keyField().canonicalString())||e.ce.push(new Ac(kt.keyField(),r))}return e.ce}function Qn(t){const e=be(t);return e.le||(e.le=e3(e,ta(t))),e.le}function e3(t,e){if(t.limitType==="F")return pv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(o=>{const i=o.dir==="desc"?"asc":"desc";return new Ac(o.field,i)});const n=t.endAt?new Sc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Sc(t.startAt.position,t.startAt.inclusive):null;return pv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Af(t,e,n){return new du(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fu(t,e){return ep(Qn(t),Qn(e))&&t.limitType===e.limitType}function tw(t){return`${Zh(Qn(t))}|lt:${t.limitType}`}function _i(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(o=>Z_(o)).join(", ")}]`),uu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(o=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(o)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(o=>Ji(o)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(o=>Ji(o)).join(",")),`Target(${r})`}(Qn(t))}; limitType=${t.limitType})`}function hu(t,e){return e.isFoundDocument()&&function(r,o){const i=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,o){for(const i of ta(r))if(!i.field.isKeyField()&&o.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,o){for(const i of r.filters)if(!i.matches(o))return!1;return!0}(t,e)&&function(r,o){return!(r.startAt&&!function(s,a,l){const u=fv(s,a,l);return s.inclusive?u<=0:u<0}(r.startAt,ta(r),o)||r.endAt&&!function(s,a,l){const u=fv(s,a,l);return s.inclusive?u>=0:u>0}(r.endAt,ta(r),o))}(t,e)}function t3(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function nw(t){return(e,n)=>{let r=!1;for(const o of ta(t)){const i=n3(o,e,n);if(i!==0)return i;r=r||o.field.isKeyField()}return 0}}function n3(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,s,a){const l=s.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Xi(l,u):ge()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
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
 */class us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[o,i]of r)if(this.equalsFn(o,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<o.length;i++)if(this.equalsFn(o[i][0],e))return void(o[i]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[n]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ii(this.inner,(n,r)=>{for(const[o,i]of r)e(o,i)})}isEmpty(){return W_(this.inner)}size(){return this.innerSize}}/**
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
 */const r3=new dt(fe.comparator);function Or(){return r3}const rw=new dt(fe.comparator);function Ms(...t){let e=rw;for(const n of t)e=e.insert(n.key,n);return e}function ow(t){let e=rw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jo(){return na()}function iw(){return na()}function na(){return new us(t=>t.toString(),(t,e)=>t.isEqual(e))}const o3=new dt(fe.comparator),i3=new Ot(fe.comparator);function Ce(...t){let e=i3;for(const n of t)e=e.add(n);return e}const s3=new Ot(Me);function a3(){return s3}/**
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
 */function np(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tc(e)?"-0":e}}function sw(t){return{integerValue:""+t}}function l3(t,e){return M9(e)?sw(e):np(t,e)}/**
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
 */class pu{constructor(){this._=void 0}}function c3(t,e,n){return t instanceof Cc?function(o,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return i&&Yh(i)&&(i=Xh(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Da?lw(t,e):t instanceof Va?cw(t,e):function(o,i){const s=aw(o,i),a=gv(s)+gv(o.Pe);return If(s)&&If(o.Pe)?sw(a):np(o.serializer,a)}(t,e)}function u3(t,e,n){return t instanceof Da?lw(t,e):t instanceof Va?cw(t,e):n}function aw(t,e){return t instanceof xc?function(r){return If(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Cc extends pu{}class Da extends pu{constructor(e){super(),this.elements=e}}function lw(t,e){const n=uw(e);for(const r of t.elements)n.some(o=>tr(o,r))||n.push(r);return{arrayValue:{values:n}}}class Va extends pu{constructor(e){super(),this.elements=e}}function cw(t,e){let n=uw(e);for(const r of t.elements)n=n.filter(o=>!tr(o,r));return{arrayValue:{values:n}}}class xc extends pu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function gv(t){return pt(t.integerValue||t.doubleValue)}function uw(t){return Jh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function d3(t,e){return t.field.isEqual(e.field)&&function(r,o){return r instanceof Da&&o instanceof Da||r instanceof Va&&o instanceof Va?Yi(r.elements,o.elements,tr):r instanceof xc&&o instanceof xc?tr(r.Pe,o.Pe):r instanceof Cc&&o instanceof Cc}(t.transform,e.transform)}class f3{constructor(e,n){this.version=e,this.transformResults=n}}class Yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yn}static exists(e){return new Yn(void 0,e)}static updateTime(e){return new Yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mu{}function dw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hw(t.key,Yn.none()):new Ja(t.key,t.data,Yn.none());{const n=t.data,r=en.empty();let o=new Ot(kt.comparator);for(let i of e.fields)if(!o.has(i)){let s=n.field(i);s===null&&i.length>1&&(i=i.popLast(),s=n.field(i)),s===null?r.delete(i):r.set(i,s),o=o.add(i)}return new Ao(t.key,r,new dn(o.toArray()),Yn.none())}}function h3(t,e,n){t instanceof Ja?function(o,i,s){const a=o.value.clone(),l=vv(o.fieldTransforms,i,s.transformResults);a.setAll(l),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ao?function(o,i,s){if(!Yl(o.precondition,i))return void i.convertToUnknownDocument(s.version);const a=vv(o.fieldTransforms,i,s.transformResults),l=i.data;l.setAll(fw(o)),l.setAll(a),i.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(o,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ra(t,e,n,r){return t instanceof Ja?function(i,s,a,l){if(!Yl(i.precondition,s))return a;const u=i.value.clone(),d=bv(i.fieldTransforms,l,s);return u.setAll(d),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ao?function(i,s,a,l){if(!Yl(i.precondition,s))return a;const u=bv(i.fieldTransforms,l,s),d=s.data;return d.setAll(fw(i)),d.setAll(u),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,s,a){return Yl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function p3(t,e){let n=null;for(const r of t.fieldTransforms){const o=e.data.field(r.field),i=aw(r.transform,o||null);i!=null&&(n===null&&(n=en.empty()),n.set(r.field,i))}return n||null}function yv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&Yi(r,o,(i,s)=>d3(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ja extends mu{constructor(e,n,r,o=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ao extends mu{constructor(e,n,r,o,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=o,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vv(t,e,n){const r=new Map;qe(t.length===n.length);for(let o=0;o<n.length;o++){const i=t[o],s=i.transform,a=e.data.field(i.field);r.set(i.field,u3(s,a,n[o]))}return r}function bv(t,e,n){const r=new Map;for(const o of t){const i=o.transform,s=n.data.field(o.field);r.set(o.field,c3(i,s,e))}return r}class hw extends mu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class m3 extends mu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class g3{constructor(e,n,r,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const i=this.mutations[o];i.key.isEqual(e.key)&&h3(i,e,r[o])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ra(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ra(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=iw();return this.mutations.forEach(o=>{const i=e.get(o.key),s=i.overlayedDocument;let a=this.applyToLocalView(s,i.mutatedFields);a=n.has(o.key)?null:a;const l=dw(s,a);l!==null&&r.set(o.key,l),s.isValidDocument()||s.convertToNoDocument(ye.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ce())}isEqual(e){return this.batchId===e.batchId&&Yi(this.mutations,e.mutations,(n,r)=>yv(n,r))&&Yi(this.baseMutations,e.baseMutations,(n,r)=>yv(n,r))}}class rp{constructor(e,n,r,o){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=o}static from(e,n,r){qe(e.mutations.length===r.length);let o=function(){return o3}();const i=e.mutations;for(let s=0;s<i.length;s++)o=o.insert(i[s].key,r[s].version);return new rp(e,n,r,o)}}/**
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
 */class y3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class v3{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var gt,Re;function b3(t){switch(t){default:return ge();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function pw(t){if(t===void 0)return kr("GRPC error has no .code"),B.UNKNOWN;switch(t){case gt.OK:return B.OK;case gt.CANCELLED:return B.CANCELLED;case gt.UNKNOWN:return B.UNKNOWN;case gt.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case gt.INTERNAL:return B.INTERNAL;case gt.UNAVAILABLE:return B.UNAVAILABLE;case gt.UNAUTHENTICATED:return B.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case gt.NOT_FOUND:return B.NOT_FOUND;case gt.ALREADY_EXISTS:return B.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return B.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case gt.ABORTED:return B.ABORTED;case gt.OUT_OF_RANGE:return B.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return B.UNIMPLEMENTED;case gt.DATA_LOSS:return B.DATA_LOSS;default:return ge()}}(Re=gt||(gt={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function _3(){return new TextEncoder}/**
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
 */const w3=new Wo([4294967295,4294967295],0);function _v(t){const e=_3().encode(t),n=new $_;return n.update(e),new Uint8Array(n.digest())}function wv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wo([n,r],0),new Wo([o,i],0)]}class op{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $s(`Invalid padding: ${n}`);if(r<0)throw new $s(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $s(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $s(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Wo.fromNumber(this.Ie)}Ee(e,n,r){let o=e.add(n.multiply(Wo.fromNumber(r)));return o.compare(w3)===1&&(o=new Wo([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=_v(e),[r,o]=wv(n);for(let i=0;i<this.hashCount;i++){const s=this.Ee(r,o,i);if(!this.de(s))return!1}return!0}static create(e,n,r){const o=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new op(i,o,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=_v(e),[r,o]=wv(n);for(let i=0;i<this.hashCount;i++){const s=this.Ee(r,o,i);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class gu{constructor(e,n,r,o,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const o=new Map;return o.set(e,Za.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gu(ye.min(),o,new dt(Me),Or(),Ce())}}class Za{constructor(e,n,r,o,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Za(r,n,Ce(),Ce(),Ce())}}/**
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
 */class Xl{constructor(e,n,r,o){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=o}}class mw{constructor(e,n){this.targetId=e,this.me=n}}class gw{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=o}}class Ev{constructor(){this.fe=0,this.ge=Tv(),this.pe=Rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ce(),n=Ce(),r=Ce();return this.ge.forEach((o,i)=>{switch(i){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:r=r.add(o);break;default:ge()}}),new Za(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Tv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,qe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class E3{constructor(e){this.Le=e,this.Be=new Map,this.ke=Or(),this.qe=Iv(),this.Qe=new dt(Me)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,o)=>{this.ze(o)&&n(o)})}He(e){const n=e.targetId,r=e.me.count,o=this.Je(n);if(o){const i=o.target;if(Sf(i))if(r===0){const s=new fe(i.path);this.Ue(n,s,jt.newNoDocument(s,ye.min()))}else qe(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),l=a?this.Xe(a,e,s):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:i=0}=n;let s,a;try{s=ei(r).toUint8Array()}catch(l){if(l instanceof q_)return Qi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new op(s,o,i)}catch(l){return Qi(l instanceof $s?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let o=0;return r.forEach(i=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),o++)}),o}rt(e){const n=new Map;this.Be.forEach((i,s)=>{const a=this.Je(s);if(a){if(i.current&&Sf(a.target)){const l=new fe(a.target.path);this.ke.get(l)!==null||this.it(s,l)||this.Ue(s,l,jt.newNoDocument(l,e))}i.be&&(n.set(s,i.ve()),i.Ce())}});let r=Ce();this.qe.forEach((i,s)=>{let a=!0;s.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,s)=>s.setReadTime(e));const o=new gu(e,n,this.Qe,this.ke,r);return this.ke=Or(),this.qe=Iv(),this.Qe=new dt(Me),o}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,n)?o.Fe(n,1):o.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ev,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ot(Me),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ev),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Iv(){return new dt(fe.comparator)}function Tv(){return new dt(fe.comparator)}const I3={asc:"ASCENDING",desc:"DESCENDING"},T3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},S3={and:"AND",or:"OR"};class A3{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cf(t,e){return t.useProto3Json||uu(e)?e:{value:e}}function Pc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function C3(t,e){return Pc(t,e.toTimestamp())}function Xn(t){return qe(!!t),ye.fromTimestamp(function(n){const r=_o(n);return new bt(r.seconds,r.nanos)}(t))}function ip(t,e){return xf(t,e).canonicalString()}function xf(t,e){const n=function(o){return new st(["projects",o.projectId,"databases",o.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vw(t){const e=st.fromString(t);return qe(Iw(e)),e}function Pf(t,e){return ip(t.databaseId,e.path)}function vd(t,e){const n=vw(e);if(n.get(1)!==t.databaseId.projectId)throw new le(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new le(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(_w(n))}function bw(t,e){return ip(t.databaseId,e)}function x3(t){const e=vw(t);return e.length===4?st.emptyPath():_w(e)}function kf(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _w(t){return qe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sv(t,e,n){return{name:Pf(t,e),fields:n.value.mapValue.fields}}function P3(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(qe(d===void 0||typeof d=="string"),Rt.fromBase64String(d||"")):(qe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Rt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(u){const d=u.code===void 0?B.UNKNOWN:pw(u.code);return new le(d,u.message||"")}(s);n=new gw(r,o,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=vd(t,r.document.name),i=Xn(r.document.updateTime),s=r.document.createTime?Xn(r.document.createTime):ye.min(),a=new en({mapValue:{fields:r.document.fields}}),l=jt.newFoundDocument(o,i,s,a),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Xl(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=vd(t,r.document),i=r.readTime?Xn(r.readTime):ye.min(),s=jt.newNoDocument(o,i),a=r.removedTargetIds||[];n=new Xl([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=vd(t,r.document),i=r.removedTargetIds||[];n=new Xl([],i,o,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:i}=r,s=new v3(o,i),a=r.targetId;n=new mw(a,s)}}return n}function k3(t,e){let n;if(e instanceof Ja)n={update:Sv(t,e.key,e.value)};else if(e instanceof hw)n={delete:Pf(t,e.key)};else if(e instanceof Ao)n={update:Sv(t,e.key,e.data),updateMask:F3(e.fieldMask)};else{if(!(e instanceof m3))return ge();n={verify:Pf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const a=s.transform;if(a instanceof Cc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Da)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Va)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xc)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw ge()}(0,r))),e.precondition.isNone||(n.currentDocument=function(o,i){return i.updateTime!==void 0?{updateTime:C3(o,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge()}(t,e.precondition)),n}function O3(t,e){return t&&t.length>0?(qe(e!==void 0),t.map(n=>function(o,i){let s=o.updateTime?Xn(o.updateTime):Xn(i);return s.isEqual(ye.min())&&(s=Xn(i)),new f3(s,o.transformResults||[])}(n,e))):[]}function R3(t,e){return{documents:[bw(t,e.path)]}}function N3(t,e){const n={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=bw(t,o);const i=function(u){if(u.length!==0)return Ew(nr.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(d=>function(p){return{field:wi(p.field),direction:V3(p.dir)}}(d))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=Cf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:o}}function L3(t){let e=x3(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){qe(r===1);const d=n.from[0];d.allDescendants?o=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(h){const p=ww(h);return p instanceof nr&&X_(p)?p.getFilters():[p]}(n.where));let s=[];n.orderBy&&(s=function(h){return h.map(p=>function(_){return new Ac(Ei(_.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,uu(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(h){const p=!!h.before,g=h.values||[];return new Sc(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const p=!h.before,g=h.values||[];return new Sc(g,p)}(n.endAt)),J9(e,o,s,i,a,"F",l,u)}function D3(t,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ww(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ei(n.unaryFilter.field);return vt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=Ei(n.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ei(n.unaryFilter.field);return vt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ei(n.unaryFilter.field);return vt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(t):t.fieldFilter!==void 0?function(n){return vt.create(Ei(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nr.create(n.compositeFilter.filters.map(r=>ww(r)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ge()}}(n.compositeFilter.op))}(t):ge()}function V3(t){return I3[t]}function M3(t){return T3[t]}function $3(t){return S3[t]}function wi(t){return{fieldPath:t.canonicalString()}}function Ei(t){return kt.fromServerFormat(t.fieldPath)}function Ew(t){return t instanceof vt?function(n){if(n.op==="=="){if(dv(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NAN"}};if(uv(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dv(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NAN"}};if(uv(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wi(n.field),op:M3(n.op),value:n.value}}}(t):t instanceof nr?function(n){const r=n.getFilters().map(o=>Ew(o));return r.length===1?r[0]:{compositeFilter:{op:$3(n.op),filters:r}}}(t):ge()}function F3(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Iw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ao{constructor(e,n,r,o,i=ye.min(),s=ye.min(),a=Rt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ao(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ao(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ao(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ao(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class U3{constructor(e){this.ct=e}}function j3(t){const e=L3({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Af(e,e.limit,"L"):e}/**
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
 */class B3{constructor(){this.un=new z3}addToCollectionParentIndex(e,n){return this.un.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(bo.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(bo.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class z3{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),o=this.index[n]||new Ot(st.comparator),i=!o.has(r);return this.index[n]=o.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),o=this.index[n];return o&&o.has(r)}getEntries(e){return(this.index[e]||new Ot(st.comparator)).toArray()}}/**
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
 */class Zi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Zi(0)}static kn(){return new Zi(-1)}}/**
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
 */class H3{constructor(){this.changes=new us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class K3{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class W3{constructor(e,n,r,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(r=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(r!==null&&ra(r.mutation,o,dn.empty(),bt.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ce()){const o=jo();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,r).next(i=>{let s=Ms();return i.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=jo();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ce()))}populateOverlays(e,n,r){const o=[];return r.forEach(i=>{n.has(i)||o.push(i)}),this.documentOverlayCache.getOverlays(e,o).next(i=>{i.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,o){let i=Or();const s=na(),a=function(){return na()}();return n.forEach((l,u)=>{const d=r.get(u.key);o.has(u.key)&&(d===void 0||d.mutation instanceof Ao)?i=i.insert(u.key,u):d!==void 0?(s.set(u.key,d.mutation.getFieldMask()),ra(d.mutation,u,d.mutation.getFieldMask(),bt.now())):s.set(u.key,dn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>s.set(u,d)),n.forEach((u,d)=>{var h;return a.set(u,new K3(d,(h=s.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=na();let o=new dt((s,a)=>s-a),i=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||dn.empty();d=a.applyToLocalView(u,d),r.set(l,d);const h=(o.get(a.batchId)||Ce()).add(l);o=o.insert(a.batchId,h)})}).next(()=>{const s=[],a=o.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,h=iw();d.forEach(p=>{if(!i.has(p)){const g=dw(n.get(p),r.get(p));g!==null&&h.set(p,g),i=i.add(p)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,h))}return z.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,o){return function(s){return fe.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Z9(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,o):this.getDocumentsMatchingCollectionQuery(e,n,r,o)}getNextDocuments(e,n,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,o).next(i=>{const s=o-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,o-i.size):z.resolve(jo());let a=-1,l=i;return s.next(u=>z.forEach(u,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(d)?z.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{l=l.insert(d,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ce())).next(d=>({batchId:a,changes:ow(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let o=Ms();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,r,o){const i=n.collectionGroup;let s=Ms();return this.indexManager.getCollectionParents(e,i).next(a=>z.forEach(a,l=>{const u=function(h,p){return new du(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,o).next(d=>{d.forEach((h,p)=>{s=s.insert(h,p)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,o){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,o))).next(s=>{i.forEach((l,u)=>{const d=u.getKey();s.get(d)===null&&(s=s.insert(d,jt.newInvalidDocument(d)))});let a=Ms();return s.forEach((l,u)=>{const d=i.get(l);d!==void 0&&ra(d.mutation,u,dn.empty(),bt.now()),hu(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class q3{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return z.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:Xn(o.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(o){return{name:o.name,query:j3(o.bundledQuery),readTime:Xn(o.readTime)}}(n)),z.resolve()}}/**
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
 */class G3{constructor(){this.overlays=new dt(fe.comparator),this.Ir=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jo();return z.forEach(n,o=>this.getOverlay(e,o).next(i=>{i!==null&&r.set(o,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((o,i)=>{this.ht(e,n,i)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const o=this.Ir.get(r);return o!==void 0&&(o.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const o=jo(),i=n.length+1,s=new fe(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&o.set(l.getKey(),l)}return z.resolve(o)}getOverlaysForCollectionGroup(e,n,r,o){let i=new dt((u,d)=>u-d);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=jo(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=jo(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=o)););return z.resolve(a)}ht(e,n,r){const o=this.overlays.get(r.key);if(o!==null){const s=this.Ir.get(o.largestBatchId).delete(r.key);this.Ir.set(o.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new y3(n,r));let i=this.Ir.get(n);i===void 0&&(i=Ce(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class Q3{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
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
 */class sp{constructor(){this.Tr=new Ot(wt.Er),this.dr=new Ot(wt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new wt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new wt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new fe(new st([])),r=new wt(n,e),o=new wt(n,e+1),i=[];return this.dr.forEachInRange([r,o],s=>{this.Vr(s),i.push(s.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new fe(new st([])),r=new wt(n,e),o=new wt(n,e+1);let i=Ce();return this.dr.forEachInRange([r,o],s=>{i=i.add(s.key)}),i}containsKey(e){const n=new wt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class wt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return fe.comparator(e.key,n.key)||Me(e.wr,n.wr)}static Ar(e,n){return Me(e.wr,n.wr)||fe.comparator(e.key,n.key)}}/**
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
 */class Y3{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ot(wt.Er)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,o){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new g3(i,n,r,o);this.mutationQueue.push(s);for(const a of o)this.br=this.br.add(new wt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return z.resolve(s)}lookupMutationBatch(e,n){return z.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,o=this.vr(r),i=o<0?0:o;return z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new wt(n,0),o=new wt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,o],s=>{const a=this.Dr(s.wr);i.push(a)}),z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ot(Me);return n.forEach(o=>{const i=new wt(o,0),s=new wt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,s],a=>{r=r.add(a.wr)})}),z.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,o=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const s=new wt(new fe(i),0);let a=new Ot(Me);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===o&&(a=a.add(l.wr)),!0)},s),z.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const o=this.Dr(r);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){qe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return z.forEach(n.mutations,o=>{const i=new wt(o.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new wt(n,0),o=this.br.firstAfterOrEqual(r);return z.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class X3{constructor(e){this.Mr=e,this.docs=function(){return new dt(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,o=this.docs.get(r),i=o?o.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(e,n){let r=Or();return n.forEach(o=>{const i=this.docs.get(o);r=r.insert(o,i?i.document.mutableCopy():jt.newInvalidDocument(o))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,o){let i=Or();const s=n.path,a=new fe(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||N9(R9(d),r)<=0||(o.has(d.key)||hu(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return z.resolve(i)}getAllFromCollectionGroup(e,n,r,o){ge()}Or(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new J3(this)}getSize(e){return z.resolve(this.size)}}class J3 extends H3{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,o)=>{o.isValidDocument()?n.push(this.cr.addEntry(e,o)):this.cr.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class Z3{constructor(e){this.persistence=e,this.Nr=new us(n=>Zh(n),ep),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.Lr=0,this.Br=new sp,this.targetCount=0,this.kr=Zi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,o)=>n(o)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),z.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Zi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.Kn(n),z.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let o=0;const i=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),o++)}),z.waitFor(i).next(()=>o)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const o=this.persistence.referenceDelegate,i=[];return o&&n.forEach(s=>{i.push(o.markPotentiallyOrphaned(e,s))}),z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.Br.containsKey(n))}}/**
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
 */class eN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Qh(0),this.Kr=!1,this.Kr=!0,this.$r=new Q3,this.referenceDelegate=e(this),this.Ur=new Z3(this),this.indexManager=new B3,this.remoteDocumentCache=function(o){return new X3(o)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new U3(n),this.Gr=new q3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new G3,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Y3(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ie("MemoryPersistence","Starting transaction:",e);const o=new tN(this.Qr.next());return this.referenceDelegate.zr(),r(o).next(i=>this.referenceDelegate.jr(o).next(()=>i)).toPromise().then(i=>(o.raiseOnCommittedEvent(),i))}Hr(e,n){return z.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class tN extends D9{constructor(e){super(),this.currentSequenceNumber=e}}class ap{constructor(e){this.persistence=e,this.Jr=new sp,this.Yr=null}static Zr(e){return new ap(e)}get Xr(){if(this.Yr)return this.Yr;throw ge()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),z.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(o=>this.Xr.add(o.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Xr,r=>{const o=fe.fromPath(r);return this.ei(e,o).next(i=>{i||n.removeEntry(o,ye.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return z.or([()=>z.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class lp{constructor(e,n,r,o){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=o}static Wi(e,n){let r=Ce(),o=Ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:o=o.add(i.doc.key)}return new lp(e,n.fromCache,r,o)}}/**
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
 */class nN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ik()?8:V9(Ht())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,o){const i={result:null};return this.Yi(e,n).next(s=>{i.result=s}).next(()=>{if(!i.result)return this.Zi(e,n,o,r).next(s=>{i.result=s})}).next(()=>{if(i.result)return;const s=new nN;return this.Xi(e,n,s).next(a=>{if(i.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>i.result)}es(e,n,r,o){return r.documentReadCount<this.ji?(Ps()<=Pe.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",_i(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),z.resolve()):(Ps()<=Pe.DEBUG&&ie("QueryEngine","Query:",_i(n),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.Hi*o?(Ps()<=Pe.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",_i(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qn(n))):z.resolve())}Yi(e,n){if(mv(n))return z.resolve(null);let r=Qn(n);return this.indexManager.getIndexType(e,r).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Af(n,null,"F"),r=Qn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const s=Ce(...i);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,a);return this.ns(n,u,s,l.readTime)?this.Yi(e,Af(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,o){return mv(n)||o.isEqual(ye.min())?z.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const s=this.ts(n,i);return this.ns(n,s,r,o)?z.resolve(null):(Ps()<=Pe.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),_i(n)),this.rs(e,s,n,O9(o,-1)).next(a=>a))})}ts(e,n){let r=new Ot(nw(e));return n.forEach((o,i)=>{hu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,o){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(o)>0)}Xi(e,n,r){return Ps()<=Pe.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",_i(n)),this.Ji.getDocumentsMatchingQuery(e,n,bo.min(),r)}rs(e,n,r,o){return this.Ji.getDocumentsMatchingQuery(e,r,o).next(i=>(n.forEach(s=>{i=i.insert(s.key,s)}),i))}}/**
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
 */class oN{constructor(e,n,r,o){this.persistence=e,this.ss=n,this.serializer=o,this.os=new dt(Me),this._s=new us(i=>Zh(i),ep),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new W3(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function iN(t,e,n,r){return new oN(t,e,n,r)}async function Tw(t,e){const n=be(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let o;return n.mutationQueue.getAllMutationBatches(r).next(i=>(o=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const s=[],a=[];let l=Ce();for(const u of o){s.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:s,addedBatchIds:a}))})})}function sN(t,e){const n=be(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const o=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,d){const h=u.batch,p=h.keys();let g=z.resolve();return p.forEach(_=>{g=g.next(()=>d.getEntry(l,_)).next(P=>{const k=u.docVersions.get(_);qe(k!==null),P.version.compareTo(k)<0&&(h.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),d.addEntry(P)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Ce();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,o))})}function Sw(t){const e=be(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function aN(t,e){const n=be(t),r=e.snapshotVersion;let o=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});o=n.os;const a=[];e.targetChanges.forEach((d,h)=>{const p=o.get(h);if(!p)return;a.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,h).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,h)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Rt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),o=o.insert(h,g),function(P,k,N){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(p,g,d)&&a.push(n.Ur.updateTargetData(i,g))});let l=Or(),u=Ce();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),a.push(lN(i,s,e.documentUpdates).next(d=>{l=d.Ps,u=d.Is})),!r.isEqual(ye.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(h=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(d)}return z.waitFor(a).next(()=>s.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=o,i))}function lN(t,e,n){let r=Ce(),o=Ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let s=Or();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(o=o.add(a)),l.isNoDocument()&&l.version.isEqual(ye.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):ie("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Ps:s,Is:o}})}function cN(t,e){const n=be(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uN(t,e){const n=be(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let o;return n.Ur.getTargetData(r,e).next(i=>i?(o=i,z.resolve(o)):n.Ur.allocateTargetId(r).next(s=>(o=new ao(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,o).next(()=>o))))}).then(r=>{const o=n.os.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Of(t,e,n){const r=be(t),o=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,s=>r.persistence.referenceDelegate.removeTarget(s,o))}catch(s){if(!Xa(s))throw s;ie("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(o.target)}function Av(t,e,n){const r=be(t);let o=ye.min(),i=Ce();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,u,d){const h=be(l),p=h._s.get(d);return p!==void 0?z.resolve(h.os.get(p)):h.Ur.getTargetData(u,d)}(r,s,Qn(e)).next(a=>{if(a)return o=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?o:ye.min(),n?i:Ce())).next(a=>(dN(r,t3(e),a),{documents:a,Ts:i})))}function dN(t,e,n){let r=t.us.get(e)||ye.min();n.forEach((o,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Cv{constructor(){this.activeTargetIds=a3()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fN{constructor(){this.so=new Cv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Cv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hN{_o(e){}shutdown(){}}/**
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
 */class xv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ie("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ie("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Dl=null;function bd(){return Dl===null?Dl=function(){return 268435456+Math.round(2147483648*Math.random())}():Dl++,"0x"+Dl.toString(16)}/**
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
 */const pN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class mN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const $t="WebChannelConnection";class gN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${o}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${i}`}get Fo(){return!1}Mo(n,r,o,i,s){const a=bd(),l=this.xo(n,r.toUriEncodedString());ie("RestConnection",`Sending RPC '${n}' ${a}:`,l,o);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,s),this.No(n,l,u,o).then(d=>(ie("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Qi("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",o),d})}Lo(n,r,o,i,s,a){return this.Mo(n,r,o,i,s)}Oo(n,r,o){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,s)=>n[s]=i),o&&o.headers.forEach((i,s)=>n[s]=i)}xo(n,r){const o=pN[n];return`${this.Do}/v1/${r}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,o){const i=bd();return new Promise((s,a)=>{const l=new F_;l.setWithCredentials(!0),l.listenOnce(U_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Gl.NO_ERROR:const d=l.getResponseJson();ie($t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),s(d);break;case Gl.TIMEOUT:ie($t,`RPC '${e}' ${i} timed out`),a(new le(B.DEADLINE_EXCEEDED,"Request time out"));break;case Gl.HTTP_ERROR:const h=l.getStatus();if(ie($t,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const _=function(k){const N=k.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(N)>=0?N:B.UNKNOWN}(g.status);a(new le(_,g.message))}else a(new le(B.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new le(B.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{ie($t,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(o);ie($t,`RPC '${e}' ${i} sending request:`,o),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const o=bd(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=z_(),a=B_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");ie($t,`Creating RPC '${e}' stream ${o}: ${d}`,l);const h=s.createWebChannel(d,l);let p=!1,g=!1;const _=new mN({Io:k=>{g?ie($t,`Not sending because RPC '${e}' stream ${o} is closed:`,k):(p||(ie($t,`Opening RPC '${e}' stream ${o} transport.`),h.open(),p=!0),ie($t,`RPC '${e}' stream ${o} sending:`,k),h.send(k))},To:()=>h.close()}),P=(k,N,O)=>{k.listen(N,R=>{try{O(R)}catch(L){setTimeout(()=>{throw L},0)}})};return P(h,Vs.EventType.OPEN,()=>{g||(ie($t,`RPC '${e}' stream ${o} transport opened.`),_.yo())}),P(h,Vs.EventType.CLOSE,()=>{g||(g=!0,ie($t,`RPC '${e}' stream ${o} transport closed`),_.So())}),P(h,Vs.EventType.ERROR,k=>{g||(g=!0,Qi($t,`RPC '${e}' stream ${o} transport errored:`,k),_.So(new le(B.UNAVAILABLE,"The operation could not be completed")))}),P(h,Vs.EventType.MESSAGE,k=>{var N;if(!g){const O=k.data[0];qe(!!O);const R=O,L=R.error||((N=R[0])===null||N===void 0?void 0:N.error);if(L){ie($t,`RPC '${e}' stream ${o} received error:`,L);const W=L.status;let q=function(b){const T=gt[b];if(T!==void 0)return pw(T)}(W),I=L.message;q===void 0&&(q=B.INTERNAL,I="Unknown error status: "+W+" with message "+L.message),g=!0,_.So(new le(q,I)),h.close()}else ie($t,`RPC '${e}' stream ${o} received:`,O),_.bo(O)}}),P(a,j_.STAT_EVENT,k=>{k.stat===wf.PROXY?ie($t,`RPC '${e}' stream ${o} detected buffering proxy`):k.stat===wf.NOPROXY&&ie($t,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{_.wo()},0),_}}function _d(){return typeof document<"u"?document:null}/**
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
 */function yu(t){return new A3(t,!0)}/**
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
 */class Aw{constructor(e,n,r=1e3,o=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=o,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),o=Math.max(0,n-r);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Cw{constructor(e,n,r,o,i,s,a,l){this.ui=e,this.Ho=r,this.Jo=o,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Aw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(kr(n.toString()),kr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,o])=>{this.Yo===n&&this.P_(r,o)},r=>{e(()=>{const o=new le(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(o)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{r(()=>this.I_(o))}),this.stream.onMessage(o=>{r(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ie("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ie("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yN extends Cw{constructor(e,n,r,o,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,o,s),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=P3(this.serializer,e),r=function(i){if(!("targetChange"in i))return ye.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ye.min():s.readTime?Xn(s.readTime):ye.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=kf(this.serializer),n.addTarget=function(i,s){let a;const l=s.target;if(a=Sf(l)?{documents:R3(i,l)}:{query:N3(i,l)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=yw(i,s.resumeToken);const u=Cf(i,s.expectedCount);u!==null&&(a.expectedCount=u)}else if(s.snapshotVersion.compareTo(ye.min())>0){a.readTime=Pc(i,s.snapshotVersion.toTimestamp());const u=Cf(i,s.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=D3(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=kf(this.serializer),n.removeTarget=e,this.a_(n)}}class vN extends Cw{constructor(e,n,r,o,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,o,s),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return qe(!!e.streamToken),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){qe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=O3(e.writeResults,e.commitTime),r=Xn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=kf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>k3(this.serializer,r))};this.a_(n)}}/**
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
 */class bN extends class{}{constructor(e,n,r,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new le(B.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Mo(e,xf(n,r),o,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new le(B.UNKNOWN,i.toString())})}Lo(e,n,r,o,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,xf(n,r),o,s,a,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new le(B.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class _N{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(kr(n),this.D_=!1):ie("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class wN{constructor(e,n,r,o,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(s=>{r.enqueueAndForget(async()=>{si(this)&&(ie("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=be(l);u.L_.add(4),await el(u),u.q_.set("Unknown"),u.L_.delete(4),await vu(u)}(this))})}),this.q_=new _N(r,o)}}async function vu(t){if(si(t))for(const e of t.B_)await e(!0)}async function el(t){for(const e of t.B_)await e(!1)}function xw(t,e){const n=be(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),fp(n)?dp(n):ds(n).r_()&&up(n,e))}function cp(t,e){const n=be(t),r=ds(n);n.N_.delete(e),r.r_()&&Pw(n,e),n.N_.size===0&&(r.r_()?r.o_():si(n)&&n.q_.set("Unknown"))}function up(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ds(t).A_(e)}function Pw(t,e){t.Q_.xe(e),ds(t).R_(e)}function dp(t){t.Q_=new E3({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ds(t).start(),t.q_.v_()}function fp(t){return si(t)&&!ds(t).n_()&&t.N_.size>0}function si(t){return be(t).L_.size===0}function kw(t){t.Q_=void 0}async function EN(t){t.q_.set("Online")}async function IN(t){t.N_.forEach((e,n)=>{up(t,e)})}async function TN(t,e){kw(t),fp(t)?(t.q_.M_(e),dp(t)):t.q_.set("Unknown")}async function SN(t,e,n){if(t.q_.set("Online"),e instanceof gw&&e.state===2&&e.cause)try{await async function(o,i){const s=i.cause;for(const a of i.targetIds)o.N_.has(a)&&(await o.remoteSyncer.rejectListen(a,s),o.N_.delete(a),o.Q_.removeTarget(a))}(t,e)}catch(r){ie("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kc(t,r)}else if(e instanceof Xl?t.Q_.Ke(e):e instanceof mw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ye.min()))try{const r=await Sw(t.localStore);n.compareTo(r)>=0&&await function(i,s){const a=i.Q_.rt(s);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,u)=>{const d=i.N_.get(l);if(!d)return;i.N_.set(l,d.withResumeToken(Rt.EMPTY_BYTE_STRING,d.snapshotVersion)),Pw(i,l);const h=new ao(d.target,l,u,d.sequenceNumber);up(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ie("RemoteStore","Failed to raise snapshot:",r),await kc(t,r)}}async function kc(t,e,n){if(!Xa(e))throw e;t.L_.add(1),await el(t),t.q_.set("Offline"),n||(n=()=>Sw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ie("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await vu(t)})}function Ow(t,e){return e().catch(n=>kc(t,n,e))}async function bu(t){const e=be(t),n=wo(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;AN(e);)try{const o=await cN(e.localStore,r);if(o===null){e.O_.length===0&&n.o_();break}r=o.batchId,CN(e,o)}catch(o){await kc(e,o)}Rw(e)&&Nw(e)}function AN(t){return si(t)&&t.O_.length<10}function CN(t,e){t.O_.push(e);const n=wo(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Rw(t){return si(t)&&!wo(t).n_()&&t.O_.length>0}function Nw(t){wo(t).start()}async function xN(t){wo(t).p_()}async function PN(t){const e=wo(t);for(const n of t.O_)e.m_(n.mutations)}async function kN(t,e,n){const r=t.O_.shift(),o=rp.from(r,e,n);await Ow(t,()=>t.remoteSyncer.applySuccessfulWrite(o)),await bu(t)}async function ON(t,e){e&&wo(t).V_&&await async function(r,o){if(function(s){return b3(s)&&s!==B.ABORTED}(o.code)){const i=r.O_.shift();wo(r).s_(),await Ow(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,o)),await bu(r)}}(t,e),Rw(t)&&Nw(t)}async function Pv(t,e){const n=be(t);n.asyncQueue.verifyOperationInProgress(),ie("RemoteStore","RemoteStore received new credentials");const r=si(n);n.L_.add(3),await el(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await vu(n)}async function RN(t,e){const n=be(t);e?(n.L_.delete(2),await vu(n)):e||(n.L_.add(2),await el(n),n.q_.set("Unknown"))}function ds(t){return t.K_||(t.K_=function(n,r,o){const i=be(n);return i.w_(),new yN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,o)}(t.datastore,t.asyncQueue,{Eo:EN.bind(null,t),Ro:IN.bind(null,t),mo:TN.bind(null,t),d_:SN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),fp(t)?dp(t):t.q_.set("Unknown")):(await t.K_.stop(),kw(t))})),t.K_}function wo(t){return t.U_||(t.U_=function(n,r,o){const i=be(n);return i.w_(),new vN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,o)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:xN.bind(null,t),mo:ON.bind(null,t),f_:PN.bind(null,t),g_:kN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await bu(t)):(await t.U_.stop(),t.O_.length>0&&(ie("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class hp{constructor(e,n,r,o,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=i,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,i){const s=Date.now()+r,a=new hp(e,n,s,o,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pp(t,e){if(kr("AsyncQueue",`${e}: ${t}`),Xa(t))return new le(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Fi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||fe.comparator(n.key,r.key):(n,r)=>fe.comparator(n.key,r.key),this.keyedMap=Ms(),this.sortedSet=new dt(this.comparator)}static emptySet(e){return new Fi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,i=r.getNext().key;if(!o.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class kv{constructor(){this.W_=new dt(fe.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ge():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class es{constructor(e,n,r,o,i,s,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,o,i){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new es(e,n,Fi.emptySet(n),s,r,o,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==r[o].type||!n[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
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
 */class NN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class LN{constructor(){this.queries=Ov(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const o=be(n),i=o.queries;o.queries=Ov(),i.forEach((s,a)=>{for(const l of a.j_)l.onError(r)})})(this,new le(B.ABORTED,"Firestore shutting down"))}}function Ov(){return new us(t=>tw(t),fu)}async function Lw(t,e){const n=be(t);let r=3;const o=e.query;let i=n.queries.get(o);i?!i.H_()&&e.J_()&&(r=2):(i=new NN,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(o,!0);break;case 1:i.z_=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(s){const a=pp(s,`Initialization of query '${_i(e.query)}' failed`);return void e.onError(a)}n.queries.set(o,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&mp(n)}async function Dw(t,e){const n=be(t),r=e.query;let o=3;const i=n.queries.get(r);if(i){const s=i.j_.indexOf(e);s>=0&&(i.j_.splice(s,1),i.j_.length===0?o=e.J_()?0:1:!i.H_()&&e.J_()&&(o=2))}switch(o){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DN(t,e){const n=be(t);let r=!1;for(const o of e){const i=o.query,s=n.queries.get(i);if(s){for(const a of s.j_)a.X_(o)&&(r=!0);s.z_=o}}r&&mp(n)}function VN(t,e,n){const r=be(t),o=r.queries.get(e);if(o)for(const i of o.j_)i.onError(n);r.queries.delete(e)}function mp(t){t.Y_.forEach(e=>{e.next()})}var Rf,Rv;(Rv=Rf||(Rf={})).ea="default",Rv.Cache="cache";class Vw{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Rf.Cache}}/**
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
 */class Mw{constructor(e){this.key=e}}class $w{constructor(e){this.key=e}}class MN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ce(),this.mutatedKeys=Ce(),this.Aa=nw(e),this.Ra=new Fi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new kv,o=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,s=o,a=!1;const l=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,u=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((d,h)=>{const p=o.get(d),g=hu(this.query,h)?h:null,_=!!p&&this.mutatedKeys.has(p.key),P=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;p&&g?p.data.isEqual(g.data)?_!==P&&(r.track({type:3,doc:g}),k=!0):this.ga(p,g)||(r.track({type:2,doc:g}),k=!0,(l&&this.Aa(g,l)>0||u&&this.Aa(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),k=!0):p&&!g&&(r.track({type:1,doc:p}),k=!0,(l||u)&&(a=!0)),k&&(g?(s=s.add(g),i=P?i.add(d):i.delete(d)):(s=s.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const d=this.query.limitType==="F"?s.last():s.first();s=s.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:s,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,o){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((d,h)=>function(g,_){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return P(g)-P(_)}(d.type,h.type)||this.Aa(d.doc,h.doc)),this.pa(r),o=o!=null&&o;const a=n&&!o?this.ya():[],l=this.da.size===0&&this.current&&!o?1:0,u=l!==this.Ea;return this.Ea=l,s.length!==0||u?{snapshot:new es(this.query,e.Ra,i,s,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new kv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ce(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new $w(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Mw(r))}),n}ba(e){this.Ta=e.Ts,this.da=Ce();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return es.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class $N{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FN{constructor(e){this.key=e,this.va=!1}}class UN{constructor(e,n,r,o,i,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=o,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new us(a=>tw(a),fu),this.Ma=new Map,this.xa=new Set,this.Oa=new dt(fe.comparator),this.Na=new Map,this.La=new sp,this.Ba={},this.ka=new Map,this.qa=Zi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function jN(t,e,n=!0){const r=Hw(t);let o;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),o=i.view.Da()):o=await Fw(r,e,n,!0),o}async function BN(t,e){const n=Hw(t);await Fw(n,e,!0,!1)}async function Fw(t,e,n,r){const o=await uN(t.localStore,Qn(e)),i=o.targetId,s=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await zN(t,e,i,s==="current",o.resumeToken)),t.isPrimaryClient&&n&&xw(t.remoteStore,o),a}async function zN(t,e,n,r,o){t.Ka=(h,p,g)=>async function(P,k,N,O){let R=k.view.ma(N);R.ns&&(R=await Av(P.localStore,k.query,!1).then(({documents:I})=>k.view.ma(I,R)));const L=O&&O.targetChanges.get(k.targetId),W=O&&O.targetMismatches.get(k.targetId)!=null,q=k.view.applyChanges(R,P.isPrimaryClient,L,W);return Lv(P,k.targetId,q.wa),q.snapshot}(t,h,p,g);const i=await Av(t.localStore,e,!0),s=new MN(e,i.Ts),a=s.ma(i.documents),l=Za.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",o),u=s.applyChanges(a,t.isPrimaryClient,l);Lv(t,n,u.wa);const d=new $N(e,n,s);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function HN(t,e,n){const r=be(t),o=r.Fa.get(e),i=r.Ma.get(o.targetId);if(i.length>1)return r.Ma.set(o.targetId,i.filter(s=>!fu(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await Of(r.localStore,o.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(o.targetId),n&&cp(r.remoteStore,o.targetId),Nf(r,o.targetId)}).catch(Ya)):(Nf(r,o.targetId),await Of(r.localStore,o.targetId,!0))}async function KN(t,e){const n=be(t),r=n.Fa.get(e),o=n.Ma.get(r.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cp(n.remoteStore,r.targetId))}async function WN(t,e,n){const r=ZN(t);try{const o=await function(s,a){const l=be(s),u=bt.now(),d=a.reduce((g,_)=>g.add(_.key),Ce());let h,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=Or(),P=Ce();return l.cs.getEntries(g,d).next(k=>{_=k,_.forEach((N,O)=>{O.isValidDocument()||(P=P.add(N))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,_)).next(k=>{h=k;const N=[];for(const O of a){const R=p3(O,h.get(O.key).overlayedDocument);R!=null&&N.push(new Ao(O.key,R,G_(R.value.mapValue),Yn.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,N,a)}).next(k=>{p=k;const N=k.applyToLocalDocumentSet(h,P);return l.documentOverlayCache.saveOverlays(g,k.batchId,N)})}).then(()=>({batchId:p.batchId,changes:ow(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),function(s,a,l){let u=s.Ba[s.currentUser.toKey()];u||(u=new dt(Me)),u=u.insert(a,l),s.Ba[s.currentUser.toKey()]=u}(r,o.batchId,n),await tl(r,o.changes),await bu(r.remoteStore)}catch(o){const i=pp(o,"Failed to persist write");n.reject(i)}}async function Uw(t,e){const n=be(t);try{const r=await aN(n.localStore,e);e.targetChanges.forEach((o,i)=>{const s=n.Na.get(i);s&&(qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?s.va=!0:o.modifiedDocuments.size>0?qe(s.va):o.removedDocuments.size>0&&(qe(s.va),s.va=!1))}),await tl(n,r,e)}catch(r){await Ya(r)}}function Nv(t,e,n){const r=be(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const o=[];r.Fa.forEach((i,s)=>{const a=s.view.Z_(e);a.snapshot&&o.push(a.snapshot)}),function(s,a){const l=be(s);l.onlineState=a;let u=!1;l.queries.forEach((d,h)=>{for(const p of h.j_)p.Z_(a)&&(u=!0)}),u&&mp(l)}(r.eventManager,e),o.length&&r.Ca.d_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qN(t,e,n){const r=be(t);r.sharedClientState.updateQueryState(e,"rejected",n);const o=r.Na.get(e),i=o&&o.key;if(i){let s=new dt(fe.comparator);s=s.insert(i,jt.newNoDocument(i,ye.min()));const a=Ce().add(i),l=new gu(ye.min(),new Map,new dt(Me),s,a);await Uw(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),gp(r)}else await Of(r.localStore,e,!1).then(()=>Nf(r,e,n)).catch(Ya)}async function GN(t,e){const n=be(t),r=e.batch.batchId;try{const o=await sN(n.localStore,e);Bw(n,r,null),jw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tl(n,o)}catch(o){await Ya(o)}}async function QN(t,e,n){const r=be(t);try{const o=await function(s,a){const l=be(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(qe(h!==null),d=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);Bw(r,e,n),jw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await tl(r,o)}catch(o){await Ya(o)}}function jw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Bw(t,e,n){const r=be(t);let o=r.Ba[r.currentUser.toKey()];if(o){const i=o.get(e);i&&(n?i.reject(n):i.resolve(),o=o.remove(e)),r.Ba[r.currentUser.toKey()]=o}}function Nf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||zw(t,r)})}function zw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(cp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),gp(t))}function Lv(t,e,n){for(const r of n)r instanceof Mw?(t.La.addReference(r.key,e),YN(t,r)):r instanceof $w?(ie("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||zw(t,r.key)):ge()}function YN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ie("SyncEngine","New document in limbo: "+n),t.xa.add(r),gp(t))}function gp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new fe(st.fromString(e)),r=t.qa.next();t.Na.set(r,new FN(n)),t.Oa=t.Oa.insert(n,r),xw(t.remoteStore,new ao(Qn(tp(n.path)),r,"TargetPurposeLimboResolution",Qh.oe))}}async function tl(t,e,n){const r=be(t),o=[],i=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{s.push(r.Ka(l,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const h=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(u){o.push(u);const h=lp.Wi(l.targetId,u);i.push(h)}}))}),await Promise.all(s),r.Ca.d_(o),await async function(l,u){const d=be(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>z.forEach(u,p=>z.forEach(p.$i,g=>d.persistence.referenceDelegate.addReference(h,p.targetId,g)).next(()=>z.forEach(p.Ui,g=>d.persistence.referenceDelegate.removeReference(h,p.targetId,g)))))}catch(h){if(!Xa(h))throw h;ie("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const p=h.targetId;if(!h.fromCache){const g=d.os.get(p),_=g.snapshotVersion,P=g.withLastLimboFreeSnapshotVersion(_);d.os=d.os.insert(p,P)}}}(r.localStore,i))}async function XN(t,e){const n=be(t);if(!n.currentUser.isEqual(e)){ie("SyncEngine","User change. New user:",e.toKey());const r=await Tw(n.localStore,e);n.currentUser=e,function(i,s){i.ka.forEach(a=>{a.forEach(l=>{l.reject(new le(B.CANCELLED,s))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tl(n,r.hs)}}function JN(t,e){const n=be(t),r=n.Na.get(e);if(r&&r.va)return Ce().add(r.key);{let o=Ce();const i=n.Ma.get(e);if(!i)return o;for(const s of i){const a=n.Fa.get(s);o=o.unionWith(a.view.Va)}return o}}function Hw(t){const e=be(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qN.bind(null,e),e.Ca.d_=DN.bind(null,e.eventManager),e.Ca.$a=VN.bind(null,e.eventManager),e}function ZN(t){const e=be(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QN.bind(null,e),e}class Oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return iN(this.persistence,new rN,e.initialUser,this.serializer)}Ga(e){return new eN(ap.Zr,this.serializer)}Wa(e){return new fN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oc.provider={build:()=>new Oc};class Lf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XN.bind(null,this.syncEngine),await RN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LN}()}createDatastore(e){const n=yu(e.databaseInfo.databaseId),r=function(i){return new gN(i)}(e.databaseInfo);return function(i,s,a,l){return new bN(i,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,o,i,s,a){return new wN(r,o,i,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Nv(this.syncEngine,n,0),function(){return xv.D()?new xv:new hN}())}createSyncEngine(e,n){return function(o,i,s,a,l,u,d){const h=new UN(o,i,s,a,l,u);return d&&(h.Qa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const i=be(o);ie("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await el(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Lf.provider={build:()=>new Lf};/**
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
 */class Kw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):kr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class e5{constructor(e,n,r,o,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=K_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async s=>{ie("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ie("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wd(t,e){t.asyncQueue.verifyOperationInProgress(),ie("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async o=>{r.isEqual(o)||(await Tw(e.localStore,o),r=o)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Dv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await t5(t);ie("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Pv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,o)=>Pv(e.remoteStore,o)),t._onlineComponents=e}async function t5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie("FirestoreClient","Using user provided OfflineComponentProvider");try{await wd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Qi("Error using user provided cache. Falling back to memory cache: "+n),await wd(t,new Oc)}}else ie("FirestoreClient","Using default OfflineComponentProvider"),await wd(t,new Oc);return t._offlineComponents}async function Ww(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie("FirestoreClient","Using user provided OnlineComponentProvider"),await Dv(t,t._uninitializedComponentsProvider._online)):(ie("FirestoreClient","Using default OnlineComponentProvider"),await Dv(t,new Lf))),t._onlineComponents}function n5(t){return Ww(t).then(e=>e.syncEngine)}async function qw(t){const e=await Ww(t),n=e.eventManager;return n.onListen=jN.bind(null,e.syncEngine),n.onUnlisten=HN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=BN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=KN.bind(null,e.syncEngine),n}function r5(t,e,n={}){const r=new Tr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,a,l,u){const d=new Kw({next:p=>{d.Za(),s.enqueueAndForget(()=>Dw(i,h));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new le(B.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&l&&l.source==="server"?u.reject(new le(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new Vw(tp(a.path),d,{includeMetadataChanges:!0,_a:!0});return Lw(i,h)}(await qw(t),t.asyncQueue,e,n,r)),r.promise}function o5(t,e,n={}){const r=new Tr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,a,l,u){const d=new Kw({next:p=>{d.Za(),s.enqueueAndForget(()=>Dw(i,h)),p.fromCache&&l.source==="server"?u.reject(new le(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new Vw(a,d,{includeMetadataChanges:!0,_a:!0});return Lw(i,h)}(await qw(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Gw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Vv=new Map;/**
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
 */function Qw(t,e,n){if(!n)throw new le(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function i5(t,e,n,r){if(e===!0&&r===!0)throw new le(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mv(t){if(!fe.isDocumentKey(t))throw new le(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $v(t){if(fe.isDocumentKey(t))throw new le(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge()}function Rr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new le(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yp(t);throw new le(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Fv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new le(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new le(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}i5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new le(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new le(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new le(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _u{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new E9;switch(r.type){case"firstParty":return new A9(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new le(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Vv.get(n);r&&(ie("ComponentProvider","Removing Datastore"),Vv.delete(n),r.terminate())}(this),Promise.resolve()}}function s5(t,e,n,r={}){var o;const i=(t=Rr(t,_u))._getSettings(),s=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==s&&Qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ft.MOCK_USER;else{a=JP(r.mockUserToken,(o=t._app)===null||o===void 0?void 0:o.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new le(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ft(u)}t._authCredentials=new I9(new H_(a,l))}}/**
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
 */class wu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wu(this.firestore,e,this._query)}}class nn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ho(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nn(this.firestore,e,this._key)}}class ho extends wu{constructor(e,n,r){super(e,n,tp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nn(this.firestore,null,new fe(e))}withConverter(e){return new ho(this.firestore,e,this._path)}}function a5(t,e,...n){if(t=Tt(t),Qw("collection","path",e),t instanceof _u){const r=st.fromString(e,...n);return $v(r),new ho(t,null,r)}{if(!(t instanceof nn||t instanceof ho))throw new le(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return $v(r),new ho(t.firestore,null,r)}}function lo(t,e,...n){if(t=Tt(t),arguments.length===1&&(e=K_.newId()),Qw("doc","path",e),t instanceof _u){const r=st.fromString(e,...n);return Mv(r),new nn(t,null,new fe(r))}{if(!(t instanceof nn||t instanceof ho))throw new le(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return Mv(r),new nn(t.firestore,t instanceof ho?t.converter:null,new fe(r))}}/**
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
 */class Uv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Aw(this,"async_queue_retry"),this.Vu=()=>{const r=_d();r&&ie("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=_d();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=_d();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Tr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xa(e))throw e;ie("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const o=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw kr("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const o=hp.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(o),o}fu(){this.Eu&&ge()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class nl extends _u{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new Uv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Uv(e),this._firestoreClient=void 0,await e}}}function l5(t,e){const n=typeof t=="object"?t:R1(),r=typeof t=="string"?t:"(default)",o=kh(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const i=YP("firestore");i&&s5(o,...i)}return o}function vp(t){if(t._terminated)throw new le(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||c5(t),t._firestoreClient}function c5(t){var e,n,r;const o=t._freezeSettings(),i=function(a,l,u,d){return new F9(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Gw(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,o);t._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),t._firestoreClient=new e5(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ts(Rt.fromBase64String(e))}catch(n){throw new le(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ts(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Eu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new le(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class bp{constructor(e){this._methodName=e}}/**
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
 */class _p{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new le(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new le(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}}/**
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
 */class wp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,o){if(r.length!==o.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==o[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const u5=/^__.*__$/;class d5{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ao(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ja(e,this.data,n,this.fieldTransforms)}}class Yw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ao(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Xw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class Ep{constructor(e,n,r,o,i,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=o,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ep(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Fu({path:r,xu:!1});return o.Ou(e),o}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Fu({path:r,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Rc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Xw(this.Cu)&&u5.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class f5{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yu(e)}Qu(e,n,r,o=!1){return new Ep({Cu:e,methodName:n,qu:r,path:kt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jw(t){const e=t._freezeSettings(),n=yu(t._databaseId);return new f5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function h5(t,e,n,r,o,i={}){const s=t.Qu(i.merge||i.mergeFields?2:0,e,n,o);Ip("Data must be an object, but it was:",s,r);const a=Zw(r,s);let l,u;if(i.merge)l=new dn(s.fieldMask),u=s.fieldTransforms;else if(i.mergeFields){const d=[];for(const h of i.mergeFields){const p=Df(e,h,n);if(!s.contains(p))throw new le(B.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);tE(d,p)||d.push(p)}l=new dn(d),u=s.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=s.fieldTransforms;return new d5(new en(a),l,u)}class Iu extends bp{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Iu}}function p5(t,e,n,r){const o=t.Qu(1,e,n);Ip("Data must be an object, but it was:",o,r);const i=[],s=en.empty();ii(r,(l,u)=>{const d=Tp(e,l,n);u=Tt(u);const h=o.Nu(d);if(u instanceof Iu)i.push(d);else{const p=Tu(u,h);p!=null&&(i.push(d),s.set(d,p))}});const a=new dn(i);return new Yw(s,a,o.fieldTransforms)}function m5(t,e,n,r,o,i){const s=t.Qu(1,e,n),a=[Df(e,r,n)],l=[o];if(i.length%2!=0)throw new le(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Df(e,i[p])),l.push(i[p+1]);const u=[],d=en.empty();for(let p=a.length-1;p>=0;--p)if(!tE(u,a[p])){const g=a[p];let _=l[p];_=Tt(_);const P=s.Nu(g);if(_ instanceof Iu)u.push(g);else{const k=Tu(_,P);k!=null&&(u.push(g),d.set(g,k))}}const h=new dn(u);return new Yw(d,h,s.fieldTransforms)}function Tu(t,e){if(eE(t=Tt(t)))return Ip("Unsupported field value:",e,t),Zw(t,e);if(t instanceof bp)return function(r,o){if(!Xw(o.Cu))throw o.Bu(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(o);i&&o.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,o){const i=[];let s=0;for(const a of r){let l=Tu(a,o.Lu(s));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),s++}return{arrayValue:{values:i}}}(t,e)}return function(r,o){if((r=Tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return l3(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=bt.fromDate(r);return{timestampValue:Pc(o.serializer,i)}}if(r instanceof bt){const i=new bt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pc(o.serializer,i)}}if(r instanceof _p)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ts)return{bytesValue:yw(o.serializer,r._byteString)};if(r instanceof nn){const i=o.databaseId,s=r.firestore._databaseId;if(!s.isEqual(i))throw o.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ip(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof wp)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return np(a.serializer,l)})}}}}}}(r,o);throw o.Bu(`Unsupported field value: ${yp(r)}`)}(t,e)}function Zw(t,e){const n={};return W_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ii(t,(r,o)=>{const i=Tu(o,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function eE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof bt||t instanceof _p||t instanceof ts||t instanceof nn||t instanceof bp||t instanceof wp)}function Ip(t,e,n){if(!eE(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const r=yp(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Df(t,e,n){if((e=Tt(e))instanceof Eu)return e._internalPath;if(typeof e=="string")return Tp(t,e);throw Rc("Field path arguments must be of type string or ",t,!1,void 0,n)}const g5=new RegExp("[~\\*/\\[\\]]");function Tp(t,e,n){if(e.search(g5)>=0)throw Rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Eu(...e.split("."))._internalPath}catch{throw Rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rc(t,e,n,r,o){const i=r&&!r.isEmpty(),s=o!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||s)&&(l+=" (found",i&&(l+=` in field ${r}`),s&&(l+=` in document ${o}`),l+=")"),new le(B.INVALID_ARGUMENT,a+t+l)}function tE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class nE{constructor(e,n,r,o,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=o,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new y5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class y5 extends nE{data(){return super.data()}}function rE(t,e){return typeof e=="string"?Tp(t,e):e instanceof Eu?e._internalPath:e._delegate._internalPath}/**
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
 */function v5(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new le(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class b5{convertValue(e,n="none"){switch(ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ge()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ii(e,(o,i)=>{r[o]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,o;const i=(o=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.map(s=>pt(s.doubleValue));return new wp(i)}convertGeoPoint(e){return new _p(pt(e.latitude),pt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ra(e));default:return null}}convertTimestamp(e){const n=_o(e);return new bt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=st.fromString(e);qe(Iw(r));const o=new Na(r.get(1),r.get(3)),i=new fe(r.popFirst(5));return o.isEqual(n)||kr(`Document ${i} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function _5(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Fs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oE extends nE{constructor(e,n,r,o,i,s){super(e,n,r,o,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Jl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Jl extends oE{data(e={}){return super.data(e)}}class w5{constructor(e,n,r,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Fs(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Jl(this._firestore,this._userDataWriter,r.key,r,new Fs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new le(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,i){if(o._snapshot.oldDocs.isEmpty()){let s=0;return o._snapshot.docChanges.map(a=>{const l=new Jl(o._firestore,o._userDataWriter,a.doc.key,a.doc,new Fs(o._snapshot.mutatedKeys.has(a.doc.key),o._snapshot.fromCache),o.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Jl(o._firestore,o._userDataWriter,a.doc.key,a.doc,new Fs(o._snapshot.mutatedKeys.has(a.doc.key),o._snapshot.fromCache),o.query.converter);let u=-1,d=-1;return a.type!==0&&(u=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),d=s.indexOf(a.doc.key)),{type:E5(a.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function E5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}/**
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
 */function mr(t){t=Rr(t,nn);const e=Rr(t.firestore,nl);return r5(vp(e),t._key).then(n=>S5(e,t,n))}class iE extends b5{constructor(e){super(),this.firestore=e}convertBytes(e){return new ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nn(this.firestore,null,n)}}function I5(t){t=Rr(t,wu);const e=Rr(t.firestore,nl),n=vp(e),r=new iE(e);return v5(t._query),o5(n,t._query).then(o=>new w5(e,r,t,o))}function T5(t,e,n){t=Rr(t,nn);const r=Rr(t.firestore,nl),o=_5(t.converter,e,n);return sE(r,[h5(Jw(r),"setDoc",t._key,o,t.converter!==null,n).toMutation(t._key,Yn.none())])}function Vf(t,e,n,...r){t=Rr(t,nn);const o=Rr(t.firestore,nl),i=Jw(o);let s;return s=typeof(e=Tt(e))=="string"||e instanceof Eu?m5(i,"updateDoc",t._key,e,n,r):p5(i,"updateDoc",t._key,e),sE(o,[s.toMutation(t._key,Yn.exists(!0))])}function sE(t,e){return function(r,o){const i=new Tr;return r.asyncQueue.enqueueAndForget(async()=>WN(await n5(r),o,i)),i.promise}(vp(t),e)}function S5(t,e,n){const r=n.docs.get(e._key),o=new iE(t);return new oE(t,o,e._key,r,new Fs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(o){cs=o})(is),Ki(new Xo("firestore",(r,{instanceIdentifier:o,options:i})=>{const s=r.getProvider("app").getImmediate(),a=new nl(new T9(r.getProvider("auth-internal")),new x9(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new le(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Na(u.options.projectId,d)}(s,o),s);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),fo(iv,"4.7.3",e),fo(iv,"4.7.3","esm2017")})();const A5={apiKey:"AIzaSyA8jYL0_YD1f8lxP4Sv9RXbXckYcB3zUzw",authDomain:"mtc-database-7a3f4.firebaseapp.com",projectId:"mtc-database-7a3f4",storageBucket:"mtc-database-7a3f4.appspot.com",messagingSenderId:"210230014480",appId:"1:210230014480:web:a1d2942088a3e35accd095"},aE=O1(A5),Je=jh(aE),_r=l5(aE),jv=navigator.onLine,Bv="./model3/";let Lo=!0,Ed,An,Id,Td,gi;const C5={data(){return{showPage:!0}},beforeMounted(){window.addEventListener("load",()=>{jv||alert(`No network detected 
 Please connect to a network and reload the page`)})},mounted(){Lo=!0;const t=ri();async function e(){const o=Bv+"model.json",i=Bv+"metadata.json";Ed=await tmImage.load(o,i),Td=Ed.getTotalClasses();const s=!0;An=new tmImage.Webcam(144,144,s),await An.setup(),await An.play(),window.requestAnimationFrame(n),document.getElementById("webcam-container").appendChild(An.canvas),Id=document.getElementById("label-container");for(let a=0;a<Td;a++)Id.appendChild(document.createElement("div.rounded-xl border-4 border-blue-500"))}async function n(){Lo&&(An.update(),jv?(await r(),window.requestAnimationFrame(n)):(An.stop(),alert("Error! No Network Detected!")))}async function r(){gi=await Ed.predict(An.canvas),console.log(gi);for(let o=0;o<Td;o++)if(gi[o].probability.toFixed(2)==1){const i=`Detected ${gi[o].className}'s Face ${gi[o].probability.toFixed(2)*100}%`;Id.innerHTML=`<P class="underline"> ${i}</p>`;const s=lo(_r,"users",gi[o].className);await mr(s).then(a=>{if(a.exists()){console.log("User Exist");const u=a.data().matric.split("-")[4];prompt(`Detected ${a.data().name}. 
 
 Enter the last 4 digits of your matric number to login`,"0123")==u?a.data().verification=="verified"?(t.dispatch("anonSignin",a.data().name),Lo=!1,An.stop()):(Lo=!1,An.stop(),alert("User not verified! Contact Admin."),Ee.push("/")):(Lo=!1,An.stop(),alert("Wrong User detected!"),Ee.push("/"))}else console.log("Name does not exist")})}}e()},methods:{toggleShowProductPage(){Ee.push("/"),Lo=!1,this.showPage=!1},stopVid(){An.stop(),Lo=!1,this.showPage=!1}}},x5={class:"fixed outline-none flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30 text-slate-800"},P5={class:"flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 overflow-x-hidden overflow-y-auto overflow-hidden bg-slate-100 shadow-sm"},k5={class:"flex z-50 my-auto md:py-2 w-full h-full"},O5={class:"m-auto border-blue-400 flex-col py-10 px-4 space-y-10 md:space-y-5"},R5={class:"flex w-full space-x-5 mx-auto"},N5={class:"mx-auto text-center space-y-3"},L5={class:"w-full flex justify-evenly md:justify-between mt-10 text-sm font-normal md:font-semibold border-red-500 md:mx-auto md:w-3/4"};function D5(t,e,n,r,o,i){const s=ke("font-awesome-icon"),a=ke("router-link");return j(),Be(os,{name:"slide-fade"},{default:et(()=>[ut(x("div",x5,[x("div",{onClick:e[0]||(e[0]=l=>i.toggleShowProductPage()),class:"z-50 mx-auto mt-6 -mb-5 w-8 h-8 md:w-12 md:h-12 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100"},[ue(s,{icon:"fa-solid fa-x",size:"sm",style:{color:"#333366"},class:"md:hidden m-auto rounded-full"}),ue(s,{icon:"fa-solid fa-x",size:"lg",style:{color:"#333366"},class:"hidden md:block m-auto rounded-full"})]),x("div",P5,[x("div",k5,[x("div",O5,[e[5]||(e[5]=x("div",{id:"webcam-container",class:"rounded-full w-fit h-fit -scroll-my-10 mx-auto overflow-hidden border-2 border-purple-700"},null,-1)),x("div",R5,[e[4]||(e[4]=x("div",{id:"label-container",class:"rounded-xl text-sm md:text-base"},"Please wait while the system load...",-1)),x("button",{type:"button",onClick:e[1]||(e[1]=l=>i.stopVid()),class:"rounded-lg px-4 py-0 shadow-md border-4 border-purple-900 bg-slate-200 text-sm md:text-base font-semibold"},"Stop Camera")])])]),x("div",N5,[e[7]||(e[7]=x("p",null,"Wrong Face detected?",-1)),x("p",null,[ue(a,{to:"/manualLogin",onClick:e[2]||(e[2]=l=>i.stopVid()),class:"bg-purple-900 text-slate-200 px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:et(()=>e[6]||(e[6]=[it(" Manual LogIn")])),_:1})])]),x("div",L5,[e[9]||(e[9]=x("p",{class:"text-center my-auto"},"New to the system? Proceed to ",-1)),ue(a,{to:"/Signup",onClick:e[3]||(e[3]=l=>i.stopVid()),class:"bg-purple-900 text-slate-200 my-auto px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:et(()=>e[8]||(e[8]=[it(" Sign Up")])),_:1})])])],512),[[Ba,o.showPage]])]),_:1})}const V5=on(C5,[["render",D5]]),M5={components:{camPage:V5}};function $5(t,e,n,r,o,i){const s=ke("camPage");return j(),ne("div",null,[ue(s)])}const F5=on(M5,[["render",$5]]),U5={data(){return{showEye:!0,levelOptions:[{label:"ND 1",value:"nd1"},{label:"ND 2",value:"nd2"},{label:"HND 1",value:"hnd1"},{label:"HND 2",value:"hnd2"}],genderOptions:[{label:"Male",value:"male"},{label:"Female",value:"female"}]}},methods:{eyes(){this.showEye=!this.showEye}},setup(){const t=Er({}),e=ri(),n=Xx(),r=Er(),o=[{label:"Computer Science",value:"computer science"},{label:"Science Laboratory Technology",value:"slt"},{label:"Engineering",value:"engineering"},{label:"Law",value:"law"},{label:"Tourism",value:"tourism"},{label:"Agriculture",value:"agriculture"},{label:"Pharmacy",value:"pharmacy"},{label:"Banking and Finance",value:"banking and finance"},{label:"Education",value:"education"},{label:"Mass Communication",value:"mass communication"},{label:"Business Administration",value:"Business Administration"},{label:"Food Technology",value:"food technology"},{label:"Glass Technology",value:"glass technology"},{label:"Accounting",value:"accounting"},{label:"Taxation",value:"taxation"},{label:"Fisheries",value:"fisheries"},{label:"Civil Engineering",value:"civil engineering"},{label:"Mechanical Engineering",value:"mechanical engineering"},{label:"Electrical Engineering",value:"electrical engineering"},{label:"Estate Management",value:"estate management"},{label:"Statistics",value:"statistics"},{label:"Art and industrial Design",value:"art and industrial design"},{label:"Marketing",value:"marketing"},{label:"Architectural Technology",value:"architectural technology"}],i=()=>{navigator.vibrate([100,50])};return{registerForm:t,showPassword:()=>{const l=document.getElementById("password"),u=document.getElementById("password2");l.type==="password"&&u.type==="password"?(l.type="text",u.type="text"):(l.type="password",u.type="password")},register:()=>{var l=document.getElementById("password"),u=document.getElementById("password2");l.value!=""&&u.value!=""&&(l.value===u.value?e.dispatch("register",t.value):(i(),n.add({severity:"error",summary:"Error!",detail:"Passwords not matched",life:3e3})))},departmentOptions:o,department:r}}},j5={class:"w-full h-full absolute flex"},B5={class:"h-fit m-auto px-2 flex flex-col-reverse rounded-lg md:flex-row w-11/12 md:w-2/3 py-10 bg-slate-50 shadow-2xl"},z5={class:"flex z-50 md:py-2 w-full h-full"},H5={class:"w-full h-full py-2 flex flex-col px-2 md:h-full m-auto md:m-0"},K5={class:"w-full h-full space-y-2 flex flex-col md:space-y-3"},W5={class:"flex flex-col space-y-3 md:flex-col text-sm md:text-base"},q5=["value"],G5=["value"],Q5=["value"],Y5={class:"bg-inherit m-auto w-11/12 md:m-auto md:w-full lg:w-3/4 lg:m-auto border-b-2 flex border-slate-400"},X5={class:"w-full flex justify-evenly md:justify-between mt-10 font-semibold border-red-500 md:mx-auto md:w-2/4"};function J5(t,e,n,r,o,i){const s=ke("font-awesome-icon"),a=ke("router-link");return j(),ne("div",j5,[x("div",B5,[x("div",z5,[x("div",H5,[e[26]||(e[26]=x("img",{src:ls,alt:"Fpa logo",class:"w-16 -mt-2 md:w-28 md:m-auto mx-auto"},null,-1)),x("div",K5,[e[22]||(e[22]=x("h2",{class:"text-slate-800 mx-auto font-bold text-lg uppercase"},"Sign up",-1)),e[23]||(e[23]=x("h4",{class:"text-slate-800 font-bold text-sm md:text-base text-center"},"Enter your details below to signup.",-1)),x("form",{name:"emailAndPassword",onSubmit:e[10]||(e[10]=bh(l=>r.register(),["prevent"])),class:"flex flex-col space-y-3"},[x("div",W5,[e[11]||(e[11]=x("label",{for:"name",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Full Name:",-1)),ut(x("input",{name:"DisplayName",type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>r.registerForm.name=l),placeholder:"Adigun Chibike Hassan",class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},null,512),[[hr,r.registerForm.name,void 0,{trim:!0,lazy:!0}]]),e[12]||(e[12]=x("label",{for:"DOB",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold"},"Date of Birth:",-1)),ut(x("input",{name:"Age",type:"date","onUpdate:modelValue":e[1]||(e[1]=l=>r.registerForm.age=l),class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},null,512),[[hr,r.registerForm.age,void 0,{trim:!0,lazy:!0}]]),e[13]||(e[13]=x("label",{for:"Email",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Email Address:",-1)),ut(x("input",{name:"Email",type:"email","onUpdate:modelValue":e[2]||(e[2]=l=>r.registerForm.email=l),placeholder:"Johndeo@gmail.com",class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},null,512),[[hr,r.registerForm.email,void 0,{trim:!0,lazy:!0}]]),e[14]||(e[14]=x("label",{for:"department",class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Select Your Department.",-1)),ut(x("select",{name:"department","onUpdate:modelValue":e[3]||(e[3]=l=>r.registerForm.department=l),class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},[(j(!0),ne(We,null,Rn(r.departmentOptions,l=>(j(),ne("option",{key:l.label,value:l.value},Oe(l.label),9,q5))),128))],512),[[Gs,r.registerForm.department]]),e[15]||(e[15]=x("label",{for:"level",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"}," Select Your Level. ",-1)),ut(x("select",{name:"level","onUpdate:modelValue":e[4]||(e[4]=l=>r.registerForm.level=l),class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},[(j(!0),ne(We,null,Rn(o.levelOptions,l=>(j(),ne("option",{key:l.label,value:l.value},Oe(l.label),9,G5))),128))],512),[[Gs,r.registerForm.level]]),e[16]||(e[16]=x("label",{for:"gender",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Select Your Gender.",-1)),ut(x("select",{name:"gender","onUpdate:modelValue":e[5]||(e[5]=l=>r.registerForm.gender=l),class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},[(j(!0),ne(We,null,Rn(o.genderOptions,l=>(j(),ne("option",{key:l.label,value:l.value},Oe(l.label),9,Q5))),128))],512),[[Gs,r.registerForm.gender]]),e[17]||(e[17]=x("label",{for:"matric",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Matric Number:",-1)),ut(x("input",{name:"matric",type:"text","onUpdate:modelValue":e[6]||(e[6]=l=>r.registerForm.matric=l),placeholder:"fpa/cs/19/2-0000",class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},null,512),[[hr,r.registerForm.matric,void 0,{trim:!0,lazy:!0}]]),e[18]||(e[18]=x("label",{for:"password",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Password:",-1)),x("div",Y5,[ut(x("input",{id:"password",type:"password","onUpdate:modelValue":e[7]||(e[7]=l=>r.registerForm.password=l),class:"bg-inherit m-auto py-2 w-11/12 indent-1 font-semibold"},null,512),[[hr,r.registerForm.password,void 0,{trim:!0,lazy:!0}]]),o.showEye?(j(),Be(s,{key:0,icon:"fa-solid fa-eye",onClick:e[8]||(e[8]=l=>(r.showPassword(),i.eyes())),class:"p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400"})):(j(),Be(s,{key:1,icon:"fa-solid fa-eye-slash",onClick:e[9]||(e[9]=l=>(r.showPassword(),i.eyes())),class:"p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400"}))]),e[19]||(e[19]=x("label",{for:"password",class:"bg-inherit mx-auto -mb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"}," Confirm Password: ",-1)),e[20]||(e[20]=x("input",{id:"password2",type:"password",placeholder:"Confirm password",class:"bg-inherit m-auto text-xs md:text-sm py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},null,-1))]),e[21]||(e[21]=x("input",{type:"submit",value:"submit",class:"bg-purple-900 font-bold text-slate-200 mx-auto w-fit px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},null,-1))],32)]),x("div",X5,[e[25]||(e[25]=x("p",{class:"text-center text-sm md:text-base my-auto"},"Already verified? Proceed to ",-1)),ue(a,{to:"/login",class:"bg-purple-900 text-slate-200 px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:et(()=>e[24]||(e[24]=[it(" Log In")])),_:1})])])])])])}const Z5=on(U5,[["render",J5]]),eL={data(){return{userName:"waiting..."}},beforeMount(){this.fetchUserName()},methods:{logout(){this.$store.dispatch("logOut")},fetchUserName(){const t=ri();Je.onAuthStateChanged(e=>{e&&(t.state.user==null?this.userName=localStorage.getItem("user"):this.userName=t.state.user)})}}},tL={class:"flex justify-between text-xs mt-2 font-semibold bg-slate-200 border-red-500 px-1 md:px-4 md:w-wd8 md:mx-auto md:py-2 md:text-base rounded-lg"},nL={class:"flex justify-between py-2 w-full text-center h-fit border-blue-500 my-auto"},rL={class:"bg-purple-500 rounded-lg p-2 md:px-4 mx-1 shadow-lg"},oL={class:"font-bold"};function iL(t,e,n,r,o,i){return j(),ne("div",tL,[x("div",nL,[x("p",rL,[e[1]||(e[1]=it("User: ")),x("span",oL,Oe(o.userName),1),e[2]||(e[2]=it("."))]),x("p",{class:"bg-purple-500 rounded-lg p-2 md:px-4 mx-1 shadow-lg cursor-pointer",onClick:e[0]||(e[0]=s=>i.logout())}," Logout")])])}const Su=on(eL,[["render",iL]]),sL={components:{headerComponent:Su},data(){return{userName:""}},mounted(){Je.onAuthStateChanged(t=>{t&&(this.$store.state.user==null?this.userName=localStorage.getItem("user"):this.$store.state.user=="admin"?Ee.push("/admin"):this.userName=this.$store.state.user)})}},aL={class:"w-full h-full absolute flex flex-col border-red-500"},lL={class:"flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 bg-slate-100 shadow-sm"},cL={class:"flex z-50 my-auto md:py-2 w-full h-full"},uL={class:"w-full h-fit py-2 flex flex-col px-2 m-auto space-y-10"},dL={class:"w-full space-y-2 flex flex-col"},fL={class:"text-slate-800 mx-auto font-bold text-lg md:text-2xl"},hL={class:"w-full flex justify-evenly md:justify-between font-semibold border-red-500 md:mx-auto md:w-2/4"};function pL(t,e,n,r,o,i){const s=ke("header-component"),a=ke("router-link");return j(),ne("div",aL,[ue(s),x("div",lL,[x("div",cL,[x("div",uL,[e[3]||(e[3]=x("img",{src:ls,alt:"Fpa logo",class:"w-16 -mt-2 md:w-28 my-auto mx-auto"},null,-1)),x("div",dL,[x("h2",fL,"Welcome "+Oe(o.userName),1),e[0]||(e[0]=x("h4",{class:"text-slate-800 font-bold text-xs md:text-lg text-center"},"Choose an option below to take the exam or check you score.",-1))]),x("div",hL,[ue(a,{to:"/examPage",class:"bg-purple-900 text-slate-200 px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:et(()=>e[1]||(e[1]=[it(" Start Exam")])),_:1}),ue(a,{to:"/scorePage",class:"bg-purple-900 text-slate-200 px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:et(()=>e[2]||(e[2]=[it(" Check Score")])),_:1})])])])])])}const mL=on(sL,[["render",pL]]);var gL=(t,e)=>{const n=t.__vccOpts||t;for(const[r,o]of e)n[r]=o;return n};const yL={name:"FulfillingBouncingCircleSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`,animationDuration:`${this.animationDuration}ms`}},orbitStyle(){return{height:`${this.size}px`,width:`${this.size}px`,borderColor:this.color,borderWidth:`${this.size*.03}px`,animationDuration:`${this.animationDuration}ms`}},circleStyle(){return{height:`${this.size}px`,width:`${this.size}px`,borderColor:this.color,color:this.color,borderWidth:`${this.size*.1}px`,animationDuration:`${this.animationDuration}ms`}}}};function vL(t,e,n,r,o,i){return j(),ne("div",{class:"fulfilling-bouncing-circle-spinner",style:Ho(i.spinnerStyle)},[x("div",{class:"circle",style:Ho(i.circleStyle)},null,4),x("div",{class:"orbit",style:Ho(i.orbitStyle)},null,4)],4)}var bL=gL(yL,[["render",vL]]);const _L={components:{FulfillingBouncingCircleSpinner:bL,headerComponent:Su},computed:{formattedTime(){const t=Math.floor(this.time/60),e=this.time%60;return`${t.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}},data(){return{time:600,selectedAnswers:{},answers:[]}},mounted(){this.startTimer()},beforeUnmounted(){this.stopTimer()},methods:{startTimer(){this.timer=setInterval(()=>{this.time>0?this.time--:(this.stopTimer(),this.handleTimerEnd())},1e3)},stopTimer(){clearInterval(this.timer),this.timer=null},handleTimerEnd(){Ee.push("/scorePage")},submit(){if(confirm("Are you ready to submit answers?")){for(const[t,e]of Object.entries(this.selectedAnswers))this.answers.push(e);this.$store.dispatch("submitQuiz",this.answers),this.selectedAnswers={},this.answers=[],Ee.push("/confirmScore")}else return}}},wL={class:"w-fit border-red-500 mx-auto"},EL={class:"bg-slate-200 flex justify-between my-2 border-black px-2 md:px-8 md:w-wd8 md:mx-auto md:text-base rounded-lg"},IL={class:"cursor-pointer bg-cyan-600 rounded-xl space-x-2 w-fit text-center flex px-2 md:px-4 py-2 my-2 text-xs font-semibold shadow-lg md:text-base"},TL={class:"py-1"},SL={class:"mx-auto"},AL={class:"w-98 flex flex-col mt-5 mb-10 text-xs md:lg capitalize rounded-xl shadow-black shadow-lg -shadow-lg"},CL={class:"h-fitm px-2 md:px-10 w-full flex flex-wrap border-red-500"},xL={class:"text-base font-bold md:text-lg"},PL=["name","onUpdate:modelValue","value"],kL={for:"options",class:"my-auto ml-2 text-base"};function OL(t,e,n,r,o,i){const s=ke("header-component"),a=ke("fulfilling-bouncing-circle-spinner");return j(),ne("div",wL,[ue(s),x("div",EL,[e[1]||(e[1]=x("h2",{class:"py-2 text-base font-semibold md:text-2xl my-auto"},"Course Code: GNS 501",-1)),x("div",IL,[ue(a,{class:"m-auto block md:hidden","animation-duration":4e3,size:15,color:"#ff1d5e"}),ue(a,{class:"m-auto hidden md:block","animation-duration":4e3,size:20,color:"#ff1d5e"}),x("p",TL,"Time : "+Oe(i.formattedTime),1)])]),x("div",SL,[x("div",AL,[e[2]||(e[2]=x("div",{class:"text-lg font-bold text-center underline py-2"},"Answer the following questions",-1)),x("div",CL,[(j(!0),ne(We,null,Rn(this.$store.state.questions,(l,u)=>(j(),ne("div",{key:u,class:"my-3 h-fit w-1/2 lg:w-1/3 border-red-500"},[x("h3",xL,"("+Oe(u+1)+") "+Oe(l.questionDetails.question),1),(j(!0),ne(We,null,Rn(l.questionDetails.options,d=>(j(),ne("div",{key:d,class:"my-2 ml-5 flex"},[ut(x("input",{type:"radio",name:l.questionDetails.name,"onUpdate:modelValue":h=>o.selectedAnswers[l.questionDetails.name]=h,value:d,id:"",required:""},null,8,PL),[[HA,o.selectedAnswers[l.questionDetails.name]]]),x("label",kL,Oe(d),1)]))),128))]))),128))]),x("button",{onClick:e[0]||(e[0]=l=>i.submit()),class:"w-11/12 my-4 mx-auto text-base md:text-lg font-bold bg-purple-900 py-5 text-slate-200 md:w-3/4 md:mx-auto rounded-xl shadow-lg"},"Submit")])])])}const RL=on(_L,[["render",OL]]),NL={components:{headerComponent:Su},data(){return{userName:"",score:"No score yet."}},beforeMount(){this.fetchData()},methods:{async fetchData(){if(this.$store.state.user==null){this.userName=localStorage.getItem("user");const t=lo(_r,"users",this.userName);await mr(t).then(e=>{e.exists()?this.score=e.data().score:this.score="No score yet. Take Exam."})}else{this.userName=this.$store.state.user;const t=lo(_r,"users",this.userName);await mr(t).then(e=>{e.exists()?this.score=e.data().score:this.score="No score yet. Go back and take the test."})}}}},LL={class:"w-full h-full absolute flex flex-col"},DL={class:"flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 bg-slate-100 shadow-sm"},VL={class:"flex z-50 my-auto md:py-2 w-full h-full"},ML={class:"w-full h-fit py-2 flex flex-col px-2 m-auto space-y-10"},$L={class:"w-full space-y-2 flex flex-col"},FL={class:"text-slate-800 mx-auto font-bold text-lg md:text-2xl"},UL={class:"text-slate-800 font-bold text-xs md:text-lg text-center"},jL={class:"bg-purple-900 text-slate-200 px-2 py-1 rounded-lg transition-all shadow-lg"},BL={class:"w-full flex justify-evenly md:justify-between font-semibold border-red-500 md:mx-auto md:w-2/4"};function zL(t,e,n,r,o,i){const s=ke("header-component"),a=ke("router-link");return j(),ne("div",LL,[ue(s),x("div",DL,[x("div",VL,[x("div",ML,[e[2]||(e[2]=x("img",{src:ls,alt:"Fpa logo",class:"w-16 -mt-2 md:w-28 my-auto mx-auto"},null,-1)),x("div",$L,[x("h2",FL,"Welcome "+Oe(o.userName),1),x("h4",UL,[e[0]||(e[0]=it("Your Total Score is: ")),x("span",jL,Oe(o.score),1)])]),x("div",BL,[ue(a,{to:"/home",class:"bg-purple-900 text-slate-200 mx-auto px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:et(()=>e[1]||(e[1]=[it("Go Back")])),_:1})])])])])])}const HL=on(NL,[["render",zL]]),KL={data(){return{timer:20}},mounted(){setInterval(()=>{this.timer=this.timer-1},1e3),setTimeout(()=>{this.$store.dispatch("logOut"),Ee.push("/")},21e3)},unmounted(){clearInterval(),clearTimeout()},setup(){let t=!0;const e=ri();return{toggleShowProductPage:()=>{e.dispatch("logOut"),Ee.push("/")},showPage:t}}},WL={class:"fixed outline-none flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30 text-slate-800"},qL={class:"flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 overflow-x-hidden overflow-y-auto overflow-hidden bg-slate-100 shadow-sm"},GL={class:"flex z-50 my-auto md:py-2 w-full h-full"},QL={class:"m-auto flex flex-col space-y-2 md:space-y-5"},YL={class:"mt-10 mx-auto text-blue-500 font-semibold underline"},XL={class:"font-semibold text-base text-center"},JL={class:"font-extrabold text-lg"};function ZL(t,e,n,r,o,i){const s=ke("font-awesome-icon"),a=ke("router-link");return j(),Be(os,{name:"slide-fade"},{default:et(()=>[ut(x("div",WL,[x("div",{onClick:e[0]||(e[0]=l=>r.toggleShowProductPage()),class:"z-50 mx-auto mt-6 -mb-5 w-8 h-8 md:w-12 md:h-12 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100"},[ue(s,{icon:"fa-solid fa-x",size:"sm",style:{color:"#333366"},class:"md:hidden m-auto rounded-full"}),ue(s,{icon:"fa-solid fa-x",size:"lg",style:{color:"#333366"},class:"hidden md:block m-auto rounded-full"})]),x("div",qL,[x("div",GL,[x("div",QL,[e[8]||(e[8]=x("div",{class:"md:hidden"},[x("svg",{class:"checkmark m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},[x("circle",{class:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),x("path",{class:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})])],-1)),e[9]||(e[9]=x("div",{class:"animation-ctn m-auto hidden md:flex"},[x("div",{class:"icon icon--order-success svg"},[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"154px",height:"154px"},[x("g",{fill:"none",stroke:"#22AE73","stroke-width":"2"},[x("circle",{cx:"77",cy:"77",r:"72",style:{"stroke-dasharray":"480px, 480px","stroke-dashoffset":"960px"}}),x("circle",{id:"colored",fill:"#22AE73",cx:"77",cy:"77",r:"72",style:{"stroke-dasharray":"480px, 480px","stroke-dashoffset":"960px"}}),x("polyline",{class:"st0",stroke:"#fff","stroke-width":"10",points:"43.5,77.8 63.7,97.9 112.2,49.4 ",style:{"stroke-dasharray":"100px, 100px","stroke-dashoffset":"200px"}})])])])],-1)),e[10]||(e[10]=x("h2",{class:"font-bold text-base mx-auto md:text-lg"},"Details Registered Successfully!",-1)),x("div",YL,[ue(a,{to:"/",onClick:e[1]||(e[1]=l=>r.toggleShowProductPage())},{default:et(()=>e[2]||(e[2]=[it(" Go to Home Page.")])),_:1})]),x("h1",XL,[e[3]||(e[3]=it(" Await further instructions for face capturing to complete registration. ")),e[4]||(e[4]=x("br",null,null,-1)),e[5]||(e[5]=x("br",null,null,-1)),e[6]||(e[6]=it(" You will be rediected to Home Page in : ")),x("span",JL,Oe(o.timer),1),e[7]||(e[7]=it(" seconds. "))])])])])],512),[[Ba,r.showPage]])]),_:1})}const eD=on(KL,[["render",ZL],["__scopeId","data-v-3400db96"]]),tD={data(){return{timer:20}},mounted(){setInterval(()=>{this.timer=this.timer-1},1e3),setTimeout(()=>{Ee.push("/home")},21e3)},unmounted(){clearInterval(),clearTimeout()},setup(){return{toggleShowProductPage:()=>{Ee.push("/home")},showPage:!0}}},nD={class:"fixed outline-none flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30 text-slate-800"},rD={class:"flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 overflow-x-hidden overflow-y-auto overflow-hidden bg-slate-100 shadow-sm"},oD={class:"flex z-50 my-auto md:py-2 w-full h-full"},iD={class:"m-auto flex flex-col space-y-2 md:space-y-5"},sD={class:"mt-10 mx-auto text-blue-500 font-semibold underline"},aD={class:"text-center"},lD={class:"font-extrabold text-lg"};function cD(t,e,n,r,o,i){const s=ke("font-awesome-icon"),a=ke("router-link");return j(),Be(os,{name:"slide-fade"},{default:et(()=>[ut(x("div",nD,[x("div",{onClick:e[0]||(e[0]=l=>r.toggleShowProductPage()),class:"z-50 mx-auto mt-6 -mb-5 w-8 h-8 md:w-12 md:h-12 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100"},[ue(s,{icon:"fa-solid fa-x",size:"sm",style:{color:"#333366"},class:"md:hidden m-auto rounded-full"}),ue(s,{icon:"fa-solid fa-x",size:"lg",style:{color:"#333366"},class:"hidden md:block m-auto rounded-full"})]),x("div",rD,[x("div",oD,[x("div",iD,[e[4]||(e[4]=x("div",{class:"md:hidden"},[x("svg",{class:"checkmark m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},[x("circle",{class:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),x("path",{class:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})])],-1)),e[5]||(e[5]=x("div",{class:"animation-ctn m-auto hidden md:flex"},[x("div",{class:"icon icon--order-success svg"},[x("svg",{xmlns:"http://www.w3.org/2000/svg",width:"154px",height:"154px"},[x("g",{fill:"none",stroke:"#22AE73","stroke-width":"2"},[x("circle",{cx:"77",cy:"77",r:"72",style:{"stroke-dasharray":"480px, 480px","stroke-dashoffset":"960px"}}),x("circle",{id:"colored",fill:"#22AE73",cx:"77",cy:"77",r:"72",style:{"stroke-dasharray":"480px, 480px","stroke-dashoffset":"960px"}}),x("polyline",{class:"st0",stroke:"#fff","stroke-width":"10",points:"43.5,77.8 63.7,97.9 112.2,49.4 ",style:{"stroke-dasharray":"100px, 100px","stroke-dashoffset":"200px"}})])])])],-1)),e[6]||(e[6]=x("h2",{class:"font-bold text-base mx-auto md:text-lg"},"Done!",-1)),e[7]||(e[7]=x("h1",{class:"font-semibold text-base text-center"}," Your score has been recorded successfully!",-1)),x("div",sD,[ue(a,{to:"/scorePage"},{default:et(()=>e[1]||(e[1]=[it(" View Your Score.")])),_:1})]),x("h2",aD,[e[2]||(e[2]=it(" You will be rediected to back Home in :")),x("span",lD,Oe(o.timer),1),e[3]||(e[3]=it(" seconds. "))])])])])],512),[[Ba,r.showPage]])]),_:1})}const uD=on(tD,[["render",cD],["__scopeId","data-v-3ef70819"]]),dD={data(){return{showEye:!0}},methods:{eyes(){this.showEye=!this.showEye}},setup(){let t=!0;const e=ri(),n=Er({});return{toggleShowProductPage:()=>{Ee.push("/")},login:()=>{e.dispatch("login",n.value)},registerForm:n,showPassword:()=>{const s=document.getElementById("password");s.type==="password"?s.type="text":s.type="password"},showPage:t}}},fD={class:"fixed outline-none flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30 text-slate-800"},hD={class:"flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 overflow-x-hidden overflow-y-auto overflow-hidden bg-slate-100 shadow-sm"},pD={class:"flex z-50 my-auto md:py-2 w-full h-full"},mD={class:"w-full h-fit py-2 flex flex-col px-2 md:h-full m-auto md:m-0"},gD={class:"w-full h-full space-y-2 flex flex-col md:space-y-3"},yD={class:"flex flex-col space-y-3 md:flex-col text-xs md:text-sm"},vD={class:"bg-inherit m-auto w-11/12 md:m-auto md:w-full lg:w-3/4 lg:m-auto border-b-2 flex border-slate-400"},bD={class:"w-full flex justify-evenly md:justify-between mt-10 text-sm font-normal md:font-semibold border-red-500 md:mx-auto md:w-3/4"};function _D(t,e,n,r,o,i){const s=ke("font-awesome-icon"),a=ke("router-link");return j(),Be(os,{name:"slide-fade"},{default:et(()=>[ut(x("div",fD,[x("div",{onClick:e[0]||(e[0]=l=>r.toggleShowProductPage()),class:"z-50 mx-auto mt-6 -mb-5 w-8 h-8 md:w-12 md:h-12 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100"},[ue(s,{icon:"fa-solid fa-x",size:"sm",style:{color:"#333366"},class:"md:hidden m-auto rounded-full"}),ue(s,{icon:"fa-solid fa-x",size:"lg",style:{color:"#333366"},class:"hidden md:block m-auto rounded-full"})]),x("div",hD,[x("div",pD,[x("div",mD,[e[14]||(e[14]=x("img",{src:ls,alt:"Fpa logo",class:"w-16 -mt-2 md:w-28 md:m-auto mx-auto"},null,-1)),x("div",gD,[e[10]||(e[10]=x("h2",{class:"text-slate-800 mx-auto font-bold text-lg"},"Login",-1)),e[11]||(e[11]=x("h4",{class:"text-slate-800 font-bold text-xs text-center"},"Enter your details below to Login.",-1)),x("form",{name:"emailAndPassword",onSubmit:e[5]||(e[5]=bh(l=>r.login(),["prevent"])),class:"flex flex-col space-y-3"},[x("div",yD,[e[7]||(e[7]=x("label",{for:"Email",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Email Address:",-1)),ut(x("input",{name:"Email",type:"email","onUpdate:modelValue":e[1]||(e[1]=l=>r.registerForm.email=l),placeholder:"Johndeo@gmail.com",class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},null,512),[[hr,r.registerForm.email,void 0,{trim:!0,lazy:!0}]]),e[8]||(e[8]=x("label",{for:"password",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Password:",-1)),x("div",vD,[ut(x("input",{id:"password",type:"password","onUpdate:modelValue":e[2]||(e[2]=l=>r.registerForm.password=l),class:"bg-inherit m-auto py-2 w-11/12 indent-1 font-semibold"},null,512),[[hr,r.registerForm.password,void 0,{trim:!0,lazy:!0}]]),o.showEye?(j(),Be(s,{key:0,icon:"fa-solid fa-eye",onClick:e[3]||(e[3]=l=>(r.showPassword(),i.eyes())),class:"p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400"})):(j(),Be(s,{key:1,icon:"fa-solid fa-eye-slash",onClick:e[4]||(e[4]=l=>(r.showPassword(),i.eyes())),class:"p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400"}))])]),e[9]||(e[9]=x("input",{type:"submit",value:"Login",class:"bg-purple-900 font-bold text-slate-200 mx-auto w-fit px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},null,-1))],32)]),x("div",bD,[e[13]||(e[13]=x("p",{class:"text-center my-auto"},"New to the system? Proceed to ",-1)),ue(a,{to:"/Signup",onClick:e[6]||(e[6]=l=>t.stopVid()),class:"bg-purple-900 text-slate-200 my-auto px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:et(()=>e[12]||(e[12]=[it(" Sign Up")])),_:1})])])])])],512),[[Ba,r.showPage]])]),_:1})}const wD=on(dD,[["render",_D]]),ED={components:{headerComponent:Su},data(){return{userName:"",score:"No score yet. Go back and take the test.",documents:[],verification:""}},mounted(){this.getRoute()},methods:{async updateUser(){if(this.userName!=""&&this.verification!=""){const t=lo(_r,"users",this.userName);await mr(t).then(e=>{e.exists()&&Vf(t,{verification:this.verification}).then(()=>{this.userName="",this.verification="",alert("User Verification Status Updated."),window.location.reload()}).catch(n=>{console.log(n)})})}else alert("Please select the user and verification status.")},getRoute(){const t=c9();console.log(t.name),this.$store.state.user!="admin"&&t.name=="admin"?(console.log("authenticate user not admin"),Ee.push("/home")):localStorage.getItem("user")&&t.name=="admin"?(console.log("local storage user not admin"),Ee.push("/home")):this.fetchData()},async fetchData(){try{(await I5(a5(_r,"users"))).forEach(e=>{this.documents.push({id:e.id,data:e.data()})}),console.log(this.documents)}catch(t){console.log(t)}}}},ID={class:"w-full h-fit absolute flex flex-col"},TD={class:"flex flex-col h-fit rounded-xl my-5 mx-auto pb-2 w-fit md:w-wd7 lg:w-wd8 xl:w-wd45 bg-slate-100 shadow-sm"},SD={class:"flex z-50 my-auto md:py-2 w-full h-full border-blue-500"},AD={class:"w-full h-full py-2 flex flex-col px-2 border-red-500 mx-auto space-y-10"},CD={class:"w-full space-y-2 flex flex-col"},xD={class:""},PD={class:"border-black border-2 md:border-4 w-fit uppercase py-2"},kD={class:"border-black border-2 md:border-4 w-fit lowercase"},OD={class:"border-black border-2 md:border-4 w-fit uppercase"},RD={class:"border-black border-2 md:border-4 w-fit uppercase"},ND={class:"border-black border-2 md:border-4 w-fit uppercase"},LD={class:"border-black border-2 md:border-4 w-fit uppercase"},DD={class:"border-black border-2 md:border-4 w-fit uppercase"},VD={class:"flex flex-col space-y-3"},MD={class:"border-blue-500 flex w-full md:w-3/4 mx-auto"},$D={class:"flex flex-col border-black w-full mx-5"},FD=["value"],UD={class:"flex flex-col border-black w-full"},jD={class:"w-full flex justify-evenly md:justify-between font-semibold border-red-500 md:mx-auto md:w-2/4"};function BD(t,e,n,r,o,i){const s=ke("header-component");return j(),ne("div",ID,[ue(s),x("div",TD,[x("div",SD,[x("div",AD,[x("div",CD,[e[4]||(e[4]=x("h2",{class:"text-slate-800 mx-auto font-bold text-lg md:text-2xl uppercase"},"Admin Page.",-1)),x("table",xD,[e[3]||(e[3]=x("tr",{class:"border-black rounded-t-xl border-2 md:border-4 font-bold text-center text-sm md:text-lg uppercase"},[x("td",null,"Name"),x("td",null,"Email"),x("td",null,"Matric Number"),x("td",null,"Department"),x("td",null,"Level"),x("td",null,"Score"),x("td",null,"Verification")],-1)),(j(!0),ne(We,null,Rn(o.documents,a=>(j(),ne("tr",{key:a.id,class:"border-blue-500 border-2 md:border-4 text-xs md:text-base"},[x("td",PD,Oe(a.data.name),1),x("td",kD,Oe(a.data.email),1),x("td",OD,Oe(a.data.matric),1),x("td",RD,Oe(a.data.department),1),x("td",ND,Oe(a.data.level),1),x("td",LD,Oe(a.data.score),1),x("td",DD,Oe(a.data.verification),1)]))),128))])]),x("div",VD,[e[8]||(e[8]=x("h4",{class:"text-slate-800 font-bold text-base md:text-lg text-center uppercase"},"User Verification.",-1)),x("div",MD,[x("div",$D,[e[5]||(e[5]=x("label",{for:"userName",class:"text-base font-bold md:text-lg md:font-bold"},"User Name:",-1)),ut(x("select",{name:"userName",id:"username","onUpdate:modelValue":e[0]||(e[0]=a=>o.userName=a)},[(j(!0),ne(We,null,Rn(o.documents,a=>(j(),ne("option",{value:a.data.name,key:a.id,class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},Oe(a.data.name),9,FD))),128))],512),[[Gs,o.userName]])]),x("div",UD,[e[7]||(e[7]=x("label",{for:"verification",class:"text-base font-bold md:text-lg md:font-bold"},"Verification Status:",-1)),ut(x("select",{name:"verification",id:"verification","onUpdate:modelValue":e[1]||(e[1]=a=>o.verification=a)},e[6]||(e[6]=[x("option",{value:"verified",class:"bg-inherit indent-1 font-semibold border-b-2 border-slate-400"}," verified ",-1),x("option",{value:"Unverified",class:"bg-inherit indent-1 font-semibold border-b-2 border-slate-400"}," Unverified ",-1)]),512),[[Gs,o.verification]])])])]),x("div",jD,[x("button",{onClick:e[2]||(e[2]=a=>i.updateUser()),class:"bg-purple-900 text-slate-200 mx-auto px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},"Submit Verification.")])])])])])}const zD=on(ED,[["render",BD]]),HD={data(){return{showEye:!0}},methods:{eyes(){this.showEye=!this.showEye}},setup(){let t=!0;const e=ri(),n=Er({});return{toggleShowProductPage:()=>{Ee.push("/")},login:()=>{e.dispatch("AdminLogin",n.value)},registerForm:n,showPassword:()=>{const s=document.getElementById("password");s.type==="password"?s.type="text":s.type="password"},showPage:t}}},KD={class:"fixed outline-none flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30 text-slate-800"},WD={class:"flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 overflow-x-hidden overflow-y-auto overflow-hidden bg-slate-100 shadow-sm"},qD={class:"flex z-50 my-auto md:py-2 w-full h-full"},GD={class:"w-full h-fit py-2 flex flex-col px-2 md:h-full m-auto md:m-0"},QD={class:"w-full h-full space-y-2 flex flex-col md:space-y-3"},YD={class:"flex flex-col space-y-3 md:flex-col text-xs md:text-sm"},XD={class:"bg-inherit m-auto w-11/12 md:m-auto md:w-full lg:w-3/4 lg:m-auto border-b-2 flex border-slate-400"};function JD(t,e,n,r,o,i){const s=ke("font-awesome-icon");return j(),Be(os,{name:"slide-fade"},{default:et(()=>[ut(x("div",KD,[x("div",{onClick:e[0]||(e[0]=a=>r.toggleShowProductPage()),class:"z-50 mx-auto mt-6 -mb-5 w-8 h-8 md:w-12 md:h-12 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100"},[ue(s,{icon:"fa-solid fa-x",size:"sm",style:{color:"#333366"},class:"md:hidden m-auto rounded-full"}),ue(s,{icon:"fa-solid fa-x",size:"lg",style:{color:"#333366"},class:"hidden md:block m-auto rounded-full"})]),x("div",WD,[x("div",qD,[x("div",GD,[e[11]||(e[11]=x("img",{src:ls,alt:"Fpa logo",class:"w-16 -mt-2 md:w-28 md:m-auto mx-auto"},null,-1)),x("div",QD,[e[9]||(e[9]=x("h2",{class:"text-slate-800 mx-auto font-bold text-lg"},"Admin Login.",-1)),e[10]||(e[10]=x("h4",{class:"text-slate-800 font-bold text-xs text-center"},"Provide your details below to as Admin to Login.",-1)),x("form",{name:"emailAndPassword",onSubmit:e[5]||(e[5]=bh(a=>r.login(),["prevent"])),class:"flex flex-col space-y-3"},[x("div",YD,[e[6]||(e[6]=x("label",{for:"Email",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Email Address:",-1)),ut(x("input",{name:"Email",type:"email","onUpdate:modelValue":e[1]||(e[1]=a=>r.registerForm.email=a),placeholder:"Admin@gmail.com",class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},null,512),[[hr,r.registerForm.email,void 0,{trim:!0,lazy:!0}]]),e[7]||(e[7]=x("label",{for:"password",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Password:",-1)),x("div",XD,[ut(x("input",{id:"password",type:"password","onUpdate:modelValue":e[2]||(e[2]=a=>r.registerForm.password=a),class:"bg-inherit m-auto py-2 w-11/12 indent-1 font-semibold"},null,512),[[hr,r.registerForm.password,void 0,{trim:!0,lazy:!0}]]),o.showEye?(j(),Be(s,{key:0,icon:"fa-solid fa-eye",onClick:e[3]||(e[3]=a=>(r.showPassword(),i.eyes())),class:"p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400"})):(j(),Be(s,{key:1,icon:"fa-solid fa-eye-slash",onClick:e[4]||(e[4]=a=>(r.showPassword(),i.eyes())),class:"p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400"}))])]),e[8]||(e[8]=x("input",{type:"submit",value:"Login",class:"bg-purple-900 font-bold text-slate-200 mx-auto w-fit px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},null,-1))],32)])])])])],512),[[Ba,r.showPage]])]),_:1})}const ZD=on(HD,[["render",JD]]),Ee=a9({history:M6("/FPA-E-EXAM"),routes:[{path:"/",name:"landingPage",component:b9},{path:"/adminLogin",name:"adminLogin",component:ZD},{path:"/login",name:"login",component:F5},{path:"/signup",name:"signup",component:Z5},{path:"/manualLogin",name:"manualLogin",component:wD},{path:"/confirmSignup",name:"confirmSignup",component:eD},{path:"/confirmScore",name:"confirmScore",component:uD,meta:{requiresAuth:!0}},{path:"/admin",name:"admin",component:zD,meta:{requiresAuth:!0}},{path:"/home",name:"home",component:mL,meta:{requiresAuth:!0}},{path:"/scorePage",name:"scorePage",component:HL,meta:{requiresAuth:!0}},{path:"/examPage",name:"examPage",component:RL,meta:{requiresAuth:!0}}]});Je.onAuthStateChanged(t=>{if(!t)return Ee.push("/");Ee.beforeEach(async e=>{if(e.path=="/"&&Je.currentUser||e.path=="/login"&&Je.currentUser||e.path=="/adminLogin"&&Je.currentUser||e.path=="/signup"&&Je.currentUser)return Ee.push(Ee.currentRoute);if(e.path=="/admin"&&!Je.currentUser||e.path=="/Home"&&!Je.currentUser||e.path=="/scorePage"&&!Je.currentUser||e.path=="/examPage"&&!Je.currentUser||e.path=="/confirmScore"&&!Je.currentUser)return Ee.push("/")})});const eV={setup(){const t=ri(),e=jh();l0(()=>{t.dispatch("fetchUser")}),qc(()=>{IR(e,n=>{n?(n.getIdToken().then(r=>{document.cookie=`session= ${r}; max-age= ${60*60*24}`}),_R(e,$h)):Ee.push("/")})})}};function tV(t,e,n,r,o,i){const s=ke("router-view");return j(),ne("div",null,[ue(s)])}const nV=on(eV,[["render",tV]]),rV=i6({state:{user:null,correctAnswer:0,userAnswer:[],overallScore:0,questions:[{questionDetails:{name:"Question1",question:"Add 1 + 1 =",options:["(A) 20","(B) 0","(C) 2","(D) 15"],answer:"(C) 2"}},{questionDetails:{name:"Question2",question:"What is your supervisor name?",options:["(A) Mrs Abiodun","(B) A.O Ajao","(C) Dr. Fele","(D) Ms Ogunji"],answer:"(A) Mrs Abiodun"}},{questionDetails:{name:"Question3",question:"What goes up and doesn't come down?",options:["(A) Ball","(B) Age","(C) Naira","(D) Plane"],answer:"(B) Age"}},{questionDetails:{name:"Question4",question:"What is the opposite of the light?",options:["(A) Indigo","(B) Yellow","(C) Brown","(D) Dark"],answer:"(D) Dark"}},{questionDetails:{name:"Question5",question:"Which is the smallest?",options:["(A) Atom","(B) Molecule","(C) Droplet","(D) Stream"],answer:"(A) Atom"}}]},mutations:{setUser(t,e){t.user=e},clearUser(t){t.user=null},calculateAnswers(t,e){t.userAnswer=e,console.log(t.userAnswer);for(let n=0;n<t.questions.length;n++)t.userAnswer[n]==t.questions[n].questionDetails.answer&&t.correctAnswer++;console.log("correct answer:"+t.correctAnswer),t.overallScore=t.correctAnswer/t.questions.length*100,console.log(t.overallScore+" / 100"),t.userAnswer=[],t.correctAnswer=0}},actions:{async submitQuiz({commit:t,state:e},n){if(t("calculateAnswers",n),e.user==null){console.log("Anon user = "+localStorage.getItem("user"));const r=lo(_r,"users",localStorage.getItem("user"));await mr(r).then(o=>{o.exists()&&(console.log("Anon user has data in Firebase"),console.log("User current score :"+o.data().score),Vf(r,{score:e.overallScore}))}),await mr(r).then(o=>{o.exists()?console.log("Updated score: "+o.data().score):console.log("No data")})}else if(e.user!=null){console.log("currently logged in user = "+e.user);const r=lo(_r,"users",e.user);await mr(r).then(o=>{o.exists()?(console.log("User has data in Firebase"),console.log("User current score :"+o.data().score),Vf(r,{score:e.overallScore})):console.log("No data")}),await mr(r).then(o=>{o.exists()?console.log("Updated score: "+o.data().score):console.log("No data")})}},async anonSignin({commit:t},e){try{await hR(Je),t("setUser",e),localStorage.setItem("user",e),console.log(localStorage.getItem("user")),Ee.push("/home")}catch(n){console.log(n)}},async AdminLogin({commit:t},e){const{email:n,password:r}=e;try{await Py(Je,n,r)}catch(o){console.log(o)}t("setUser",Je.currentUser.displayName),Ee.push("/admin")},async login({commit:t},e){const{email:n,password:r}=e;try{await Py(Je,n,r)}catch(i){switch(i.code){case"auth/invalid-email":alert("Invalid email");break;case"auth/user-disabled":alert("User disabled");break;case"auth/user-not-found":alert("User not found");break;case"auth/wrong-password":alert("Wrong password");break;case"auth/missing-password":alert("Missing password");break;case"auth/missing-email":alert("Missing email");break;case"auth/invalid-password":alert("Invalid password");break;case"auth/operation-not-allowed":alert("Operation not allowed");break;case"auth/network-request-failed":alert("Network request failed");break;case"auth/too-many-requests":alert("Too many requests");break;default:alert("Something went wrong");break}return}console.log(Je.currentUser);const o=lo(_r,"users",Je.currentUser.displayName);await mr(o).then(i=>{i.exists()&&(i.data().verification=="Unverified"?(alert("Face not yet captured"),navigator.vibrate([100,50,100]),t("clearUser"),Je.signOut(Je)):(t("setUser",Je.currentUser.displayName),Ee.push("/home")))})},async register({commit:t},e){const{email:n,password:r,name:o,matric:i,age:s,department:a,level:l,gender:u}=e;try{await yR(Je,n,r)}catch(h){switch(h.code){case"auth/email-already-in-use":alert("Email already in use");break;case"auth/invalid-email":alert("Invalid email");break;case"auth/weak-password":alert("Weak password");break;case"auth/missing-password":alert("Missing password");break;case"auth/missing-email":alert("Missing email");break;case"auth/invalid-password":alert("Invalid password");break;case"auth/operation-not-allowed":alert("Operation not allowed");break;case"auth/network-request-failed":alert("Network request failed");break;case"auth/too-many-requests":alert("Too many requests");break;default:alert("Something went wrong");break}return}t("setUser",Je.currentUser.displayName),Ee.push("/confirmSignup");const d=jh().currentUser;bR(d,{displayName:o,matricNumber:i,verification:"Unverified",age:s,score:0,department:a,level:l,gender:u}).then(()=>{console.log("User created successfully")}).catch(h=>{console.log(h)}),T5(lo(_r,"users",o),{email:n,name:o,matric:i,age:s,verification:"Unverified",score:0,department:a,level:l,gender:u},{merge:!0})},async logOut({commit:t}){t("clearUser"),localStorage.removeItem("user"),console.log(localStorage),await Je.signOut(Je),Ee.push("/")},fetchUser({commit:t}){Je.onAuthStateChanged(async e=>{e==null?Ee.push(Ee.currentRoute):(t("setUser",Je.currentUser.displayName),Ee.isReady()&&Ee.currentRoute.value.path=="/"&&Ee.push("/home"))})}}}),$n=QA(nV);$n.use(Ee);$n.use(rV);$n.use(E2,{unstyled:!0});gT.add(dC,uC,fC);$n.use(Jx);$n.component("font-awesome-icon",cC);$n.component("Avatar",u1);$n.component("Select",E1);$n.component("InputText",Ch);$n.component("Toast",f1);$n.component("Button",c1);$n.mount("#app");
