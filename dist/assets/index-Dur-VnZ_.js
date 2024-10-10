(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const rm=()=>{};let Sh={},Cv={},xv=null,Pv={mark:rm,measure:rm};try{typeof window<"u"&&(Sh=window),typeof document<"u"&&(Cv=document),typeof MutationObserver<"u"&&(xv=MutationObserver),typeof performance<"u"&&(Pv=performance)}catch{}const{userAgent:om=""}=Sh.navigator||{},ao=Sh,nt=Cv,im=xv,ul=Pv;ao.document;const Ir=!!nt.documentElement&&!!nt.head&&typeof nt.addEventListener=="function"&&typeof nt.createElement=="function",kv=~om.indexOf("MSIE")||~om.indexOf("Trident/");var st="classic",Ov="duotone",rn="sharp",on="sharp-duotone",pE=[st,Ov,rn,on],mE={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},sm={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},gE=["kit"],yE=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,vE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,bE={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},_E={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},wE={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},EE={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},IE={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},TE={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Rv={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},SE=["solid","regular","light","thin","duotone","brands"],Nv=[1,2,3,4,5,6,7,8,9,10],AE=Nv.concat([11,12,13,14,15,16,17,18,19,20]),Ts={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},CE=[...Object.keys(EE),...SE,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ts.GROUP,Ts.SWAP_OPACITY,Ts.PRIMARY,Ts.SECONDARY].concat(Nv.map(t=>"".concat(t,"x"))).concat(AE.map(t=>"w-".concat(t))),xE={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},PE={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},kE={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},am={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const mr="___FONT_AWESOME___",pd=16,Lv="fa",Vv="svg-inline--fa",zo="data-fa-i2svg",md="data-fa-pseudo-element",OE="data-fa-pseudo-element-pending",Ah="data-prefix",Ch="data-icon",lm="fontawesome-i2svg",RE="async",NE=["HTML","HEAD","STYLE","SCRIPT"],Dv=(()=>{try{return!0}catch{return!1}})(),Mv=[st,rn,on];function ka(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[st]}})}const $v={...Rv};$v[st]={...Rv[st],...sm.kit,...sm["kit-duotone"]};const Mo=ka($v),gd={...TE};gd[st]={...gd[st],...am.kit,...am["kit-duotone"]};const Xs=ka(gd),yd={...IE};yd[st]={...yd[st],...kE.kit};const $o=ka(yd),vd={...wE};vd[st]={...vd[st],...PE.kit};const LE=ka(vd),VE=yE,Fv="fa-layers-text",DE=vE,ME={...mE};ka(ME);const $E=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ku=Ts,ki=new Set;Object.keys(Xs[st]).map(ki.add.bind(ki));Object.keys(Xs[rn]).map(ki.add.bind(ki));Object.keys(Xs[on]).map(ki.add.bind(ki));const FE=[...gE,...CE],Ls=ao.FontAwesomeConfig||{};function UE(t){var e=nt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function jE(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}nt&&typeof nt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const o=jE(UE(n));o!=null&&(Ls[r]=o)});const Uv={styleDefault:"solid",familyDefault:"classic",cssPrefix:Lv,replacementClass:Vv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ls.familyPrefix&&(Ls.cssPrefix=Ls.familyPrefix);const Oi={...Uv,...Ls};Oi.autoReplaceSvg||(Oi.observeMutations=!1);const ie={};Object.keys(Uv).forEach(t=>{Object.defineProperty(ie,t,{enumerable:!0,set:function(e){Oi[t]=e,Vs.forEach(n=>n(ie))},get:function(){return Oi[t]}})});Object.defineProperty(ie,"familyPrefix",{enumerable:!0,set:function(t){Oi.cssPrefix=t,Vs.forEach(e=>e(ie))},get:function(){return Oi.cssPrefix}});ao.FontAwesomeConfig=ie;const Vs=[];function BE(t){return Vs.push(t),()=>{Vs.splice(Vs.indexOf(t),1)}}const Nr=pd,Mn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zE(t){if(!t||!Ir)return;const e=nt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=nt.head.childNodes;let r=null;for(let o=n.length-1;o>-1;o--){const i=n[o],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return nt.head.insertBefore(e,r),t}const HE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Js(){let t=12,e="";for(;t-- >0;)e+=HE[Math.random()*62|0];return e}function Gi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function xh(t){return t.classList?Gi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function jv(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function KE(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(jv(t[n]),'" '),"").trim()}function Ic(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ph(t){return t.size!==Mn.size||t.x!==Mn.x||t.y!==Mn.y||t.rotate!==Mn.rotate||t.flipX||t.flipY}function WE(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:o,inner:l,path:u}}function qE(t){let{transform:e,width:n=pd,height:r=pd,startCentered:o=!1}=t,i="";return o&&kv?i+="translate(".concat(e.x/Nr-n/2,"em, ").concat(e.y/Nr-r/2,"em) "):o?i+="translate(calc(-50% + ".concat(e.x/Nr,"em), calc(-50% + ").concat(e.y/Nr,"em)) "):i+="translate(".concat(e.x/Nr,"em, ").concat(e.y/Nr,"em) "),i+="scale(".concat(e.size/Nr*(e.flipX?-1:1),", ").concat(e.size/Nr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var GE=`:root, :host {
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
}`;function Bv(){const t=Lv,e=Vv,n=ie.cssPrefix,r=ie.replacementClass;let o=GE;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");o=o.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return o}let cm=!1;function Ou(){ie.autoAddCss&&!cm&&(zE(Bv()),cm=!0)}var QE={mixout(){return{dom:{css:Bv,insertCss:Ou}}},hooks(){return{beforeDOMElementCreation(){Ou()},beforeI2svg(){Ou()}}}};const gr=ao||{};gr[mr]||(gr[mr]={});gr[mr].styles||(gr[mr].styles={});gr[mr].hooks||(gr[mr].hooks={});gr[mr].shims||(gr[mr].shims=[]);var $n=gr[mr];const zv=[],Hv=function(){nt.removeEventListener("DOMContentLoaded",Hv),Kl=1,zv.map(t=>t())};let Kl=!1;Ir&&(Kl=(nt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(nt.readyState),Kl||nt.addEventListener("DOMContentLoaded",Hv));function YE(t){Ir&&(Kl?setTimeout(t,0):zv.push(t))}function Oa(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?jv(t):"<".concat(e," ").concat(KE(n),">").concat(r.map(Oa).join(""),"</").concat(e,">")}function um(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ru=function(e,n,r,o){var i=Object.keys(e),s=i.length,a=n,l,u,d;for(r===void 0?(l=1,d=e[i[0]]):(l=0,d=r);l<s;l++)u=i[l],d=a(d,e[u],u,e);return d};function XE(t){const e=[];let n=0;const r=t.length;for(;n<r;){const o=t.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((o&1023)<<10)+(i&1023)+65536):(e.push(o),n--)}else e.push(o)}return e}function bd(t){const e=XE(t);return e.length===1?e[0].toString(16):null}function JE(t,e){const n=t.length;let r=t.charCodeAt(e),o;return r>=55296&&r<=56319&&n>e+1&&(o=t.charCodeAt(e+1),o>=56320&&o<=57343)?(r-55296)*1024+o-56320+65536:r}function dm(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function _d(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,o=dm(e);typeof $n.hooks.addPack=="function"&&!r?$n.hooks.addPack(t,dm(e)):$n.styles[t]={...$n.styles[t]||{},...o},t==="fas"&&_d("fa",e)}const{styles:Oo,shims:ZE}=$n,eI={[st]:Object.values($o[st]),[rn]:Object.values($o[rn]),[on]:Object.values($o[on])};let kh=null,Kv={},Wv={},qv={},Gv={},Qv={};const tI={[st]:Object.keys(Mo[st]),[rn]:Object.keys(Mo[rn]),[on]:Object.keys(Mo[on])};function nI(t){return~FE.indexOf(t)}function rI(t,e){const n=e.split("-"),r=n[0],o=n.slice(1).join("-");return r===t&&o!==""&&!nI(o)?o:null}const Yv=()=>{const t=r=>Ru(Oo,(o,i,s)=>(o[s]=Ru(i,r,{}),o),{});Kv=t((r,o,i)=>(o[3]&&(r[o[3]]=i),o[2]&&o[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),Wv=t((r,o,i)=>(r[i]=i,o[2]&&o[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),Qv=t((r,o,i)=>{const s=o[2];return r[i]=i,s.forEach(a=>{r[a]=i}),r});const e="far"in Oo||ie.autoFetchSvg,n=Ru(ZE,(r,o)=>{const i=o[0];let s=o[1];const a=o[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:a}),r},{names:{},unicodes:{}});qv=n.names,Gv=n.unicodes,kh=Tc(ie.styleDefault,{family:ie.familyDefault})};BE(t=>{kh=Tc(t.styleDefault,{family:ie.familyDefault})});Yv();function Oh(t,e){return(Kv[t]||{})[e]}function oI(t,e){return(Wv[t]||{})[e]}function Xr(t,e){return(Qv[t]||{})[e]}function Xv(t){return qv[t]||{prefix:null,iconName:null}}function iI(t){const e=Gv[t],n=Oh("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function lo(){return kh}const Rh=()=>({prefix:null,iconName:null,rest:[]});function Tc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=st}=e,r=Mo[n][t],o=Xs[n][t]||Xs[n][r],i=t in $n.styles?t:null;return o||i||null}const sI={[st]:Object.keys($o[st]),[rn]:Object.keys($o[rn]),[on]:Object.keys($o[on])};function Sc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[st]:"".concat(ie.cssPrefix,"-").concat(st),[rn]:"".concat(ie.cssPrefix,"-").concat(rn),[on]:"".concat(ie.cssPrefix,"-").concat(on)};let o=null,i=st;const s=pE.filter(l=>l!==Ov);s.forEach(l=>{(t.includes(r[l])||t.some(u=>sI[l].includes(u)))&&(i=l)});const a=t.reduce((l,u)=>{const d=rI(ie.cssPrefix,u);if(Oo[u]?(u=eI[i].includes(u)?LE[i][u]:u,o=u,l.prefix=u):tI[i].indexOf(u)>-1?(o=u,l.prefix=Tc(u,{family:i})):d?l.iconName=d:u!==ie.replacementClass&&!s.some(f=>u===r[f])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const f=o==="fa"?Xv(l.iconName):{},p=Xr(l.prefix,l.iconName);f.prefix&&(o=null),l.iconName=f.iconName||p||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!Oo.far&&Oo.fas&&!ie.autoFetchSvg&&(l.prefix="fas")}return l},Rh());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&i===rn&&(Oo.fass||ie.autoFetchSvg)&&(a.prefix="fass",a.iconName=Xr(a.prefix,a.iconName)||a.iconName),!a.prefix&&i===on&&(Oo.fasds||ie.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Xr(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||o==="fa")&&(a.prefix=lo()||"fas"),a}class aI{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...o[i]},_d(i,o[i]);const s=$o[st][i];s&&_d(s,o[i]),Yv()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(o=>{const{prefix:i,iconName:s,icon:a}=r[o],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][s]=a}),e}}let hm=[],mi={};const bi={},lI=Object.keys(bi);function cI(t,e){let{mixoutsTo:n}=e;return hm=t,mi={},Object.keys(bi).forEach(r=>{lI.indexOf(r)===-1&&delete bi[r]}),hm.forEach(r=>{const o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(i=>{typeof o[i]=="function"&&(n[i]=o[i]),typeof o[i]=="object"&&Object.keys(o[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=o[i][s]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(s=>{mi[s]||(mi[s]=[]),mi[s].push(i[s])})}r.provides&&r.provides(bi)}),n}function wd(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return(mi[t]||[]).forEach(s=>{e=s.apply(null,[e,...r])}),e}function Ho(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(mi[t]||[]).forEach(i=>{i.apply(null,n)})}function co(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return bi[t]?bi[t].apply(null,e):void 0}function Ed(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||lo();if(e)return e=Xr(n,e)||e,um(Jv.definitions,n,e)||um($n.styles,n,e)}const Jv=new aI,uI=()=>{ie.autoReplaceSvg=!1,ie.observeMutations=!1,Ho("noAuto")},dI={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ir?(Ho("beforeI2svg",t),co("pseudoElements2svg",t),co("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ie.autoReplaceSvg===!1&&(ie.autoReplaceSvg=!0),ie.observeMutations=!0,YE(()=>{fI({autoReplaceSvgRoot:e}),Ho("watch",t)})}},hI={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Xr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Tc(t[0]);return{prefix:n,iconName:Xr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ie.cssPrefix,"-"))>-1||t.match(VE))){const e=Sc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||lo(),iconName:Xr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=lo();return{prefix:e,iconName:Xr(e,t)||t}}}},sn={noAuto:uI,config:ie,dom:dI,parse:hI,library:Jv,findIconDefinition:Ed,toHtml:Oa},fI=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=nt}=t;(Object.keys($n.styles).length>0||ie.autoFetchSvg)&&Ir&&ie.autoReplaceSvg&&sn.dom.i2svg({node:e})};function Ac(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Oa(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Ir)return;const n=nt.createElement("div");return n.innerHTML=t.html,n.children}}),t}function pI(t){let{children:e,main:n,mask:r,attributes:o,styles:i,transform:s}=t;if(Ph(s)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};o.style=Ic({...i,"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")})}return[{tag:"svg",attributes:o,children:e}]}function mI(t){let{prefix:e,iconName:n,children:r,attributes:o,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(ie.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...o,id:s},children:r}]}]}function Nh(t){const{icons:{main:e,mask:n},prefix:r,iconName:o,transform:i,symbol:s,title:a,maskId:l,titleId:u,extra:d,watchable:f=!1}=t,{width:p,height:g}=n.found?n:e,_=r==="fak",k=[ie.replacementClass,o?"".concat(ie.cssPrefix,"-").concat(o):""].filter(Y=>d.classes.indexOf(Y)===-1).filter(Y=>Y!==""||!!Y).concat(d.classes).join(" ");let O={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":o,class:k,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(g)}};const R=_&&!~d.classes.indexOf("fa-fw")?{width:"".concat(p/g*16*.0625,"em")}:{};f&&(O.attributes[zo]=""),a&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||Js())},children:[a]}),delete O.attributes.title);const x={...O,prefix:r,iconName:o,main:e,mask:n,maskId:l,transform:i,symbol:s,styles:{...R,...d.styles}},{children:N,attributes:M}=n.found&&e.found?co("generateAbstractMask",x)||{children:[],attributes:{}}:co("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=N,x.attributes=M,s?mI(x):pI(x)}function fm(t){const{content:e,width:n,height:r,transform:o,title:i,extra:s,watchable:a=!1}=t,l={...s.attributes,...i?{title:i}:{},class:s.classes.join(" ")};a&&(l[zo]="");const u={...s.styles};Ph(o)&&(u.transform=qE({transform:o,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const d=Ic(u);d.length>0&&(l.style=d);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function gI(t){const{content:e,title:n,extra:r}=t,o={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=Ic(r.styles);i.length>0&&(o.style=i);const s=[];return s.push({tag:"span",attributes:o,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Nu}=$n;function Id(t){const e=t[0],n=t[1],[r]=t.slice(4);let o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(ie.cssPrefix,"-").concat(ku.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ie.cssPrefix,"-").concat(ku.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ie.cssPrefix,"-").concat(ku.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:o}}const yI={found:!1,width:512,height:512};function vI(t,e){!Dv&&!ie.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Td(t,e){let n=e;return e==="fa"&&ie.styleDefault!==null&&(e=lo()),new Promise((r,o)=>{if(n==="fa"){const i=Xv(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Nu[e]&&Nu[e][t]){const i=Nu[e][t];return r(Id(i))}vI(t,e),r({...yI,icon:ie.showMissingIcons&&t?co("missingIconAbstract")||{}:{}})})}const pm=()=>{},Sd=ie.measurePerformance&&ul&&ul.mark&&ul.measure?ul:{mark:pm,measure:pm},Ss='FA "6.6.0"',bI=t=>(Sd.mark("".concat(Ss," ").concat(t," begins")),()=>Zv(t)),Zv=t=>{Sd.mark("".concat(Ss," ").concat(t," ends")),Sd.measure("".concat(Ss," ").concat(t),"".concat(Ss," ").concat(t," begins"),"".concat(Ss," ").concat(t," ends"))};var Lh={begin:bI,end:Zv};const Cl=()=>{};function mm(t){return typeof(t.getAttribute?t.getAttribute(zo):null)=="string"}function _I(t){const e=t.getAttribute?t.getAttribute(Ah):null,n=t.getAttribute?t.getAttribute(Ch):null;return e&&n}function wI(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ie.replacementClass)}function EI(){return ie.autoReplaceSvg===!0?xl.replace:xl[ie.autoReplaceSvg]||xl.replace}function II(t){return nt.createElementNS("http://www.w3.org/2000/svg",t)}function TI(t){return nt.createElement(t)}function eb(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?II:TI}=e;if(typeof t=="string")return nt.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(eb(i,{ceFn:n}))}),r}function SI(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const xl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(eb(n),e)}),e.getAttribute(zo)===null&&ie.keepOriginalSource){let n=nt.createComment(SI(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~xh(e).indexOf(ie.replacementClass))return xl.replace(t);const r=new RegExp("".concat(ie.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,a)=>(a===ie.replacementClass||a.match(r)?s.toSvg.push(a):s.toNode.push(a),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const o=n.map(i=>Oa(i)).join(`
`);e.setAttribute(zo,""),e.innerHTML=o}};function gm(t){t()}function tb(t,e){const n=typeof e=="function"?e:Cl;if(t.length===0)n();else{let r=gm;ie.mutateApproach===RE&&(r=ao.requestAnimationFrame||gm),r(()=>{const o=EI(),i=Lh.begin("mutate");t.map(o),i(),n()})}}let Vh=!1;function nb(){Vh=!0}function Ad(){Vh=!1}let Wl=null;function ym(t){if(!im||!ie.observeMutations)return;const{treeCallback:e=Cl,nodeCallback:n=Cl,pseudoElementsCallback:r=Cl,observeMutationsRoot:o=nt}=t;Wl=new im(i=>{if(Vh)return;const s=lo();Gi(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!mm(a.addedNodes[0])&&(ie.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&ie.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&mm(a.target)&&~$E.indexOf(a.attributeName))if(a.attributeName==="class"&&_I(a.target)){const{prefix:l,iconName:u}=Sc(xh(a.target));a.target.setAttribute(Ah,l||s),u&&a.target.setAttribute(Ch,u)}else wI(a.target)&&n(a.target)})}),Ir&&Wl.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function AI(){Wl&&Wl.disconnect()}function CI(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,o)=>{const i=o.split(":"),s=i[0],a=i.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function xI(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let o=Sc(xh(t));return o.prefix||(o.prefix=lo()),e&&n&&(o.prefix=e,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=oI(o.prefix,t.innerText)||Oh(o.prefix,bd(t.innerText))),!o.iconName&&ie.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=t.firstChild.data)),o}function PI(t){const e=Gi(t.attributes).reduce((o,i)=>(o.name!=="class"&&o.name!=="style"&&(o[i.name]=i.value),o),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ie.autoA11y&&(n?e["aria-labelledby"]="".concat(ie.replacementClass,"-title-").concat(r||Js()):(e["aria-hidden"]="true",e.focusable="false")),e}function kI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Mn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:o}=xI(t),i=PI(t),s=wd("parseNodeAttributes",{},t);let a=e.styleParser?CI(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Mn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:a,attributes:i},...s}}const{styles:OI}=$n;function rb(t){const e=ie.autoReplaceSvg==="nest"?vm(t,{styleParser:!1}):vm(t);return~e.extra.classes.indexOf(Fv)?co("generateLayersText",t,e):co("generateSvgReplacementMutation",t,e)}let Wn=new Set;Mv.map(t=>{Wn.add("fa-".concat(t))});Object.keys(Mo[st]).map(Wn.add.bind(Wn));Object.keys(Mo[rn]).map(Wn.add.bind(Wn));Object.keys(Mo[on]).map(Wn.add.bind(Wn));Wn=[...Wn];function bm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ir)return Promise.resolve();const n=nt.documentElement.classList,r=d=>n.add("".concat(lm,"-").concat(d)),o=d=>n.remove("".concat(lm,"-").concat(d)),i=ie.autoFetchSvg?Wn:Mv.map(d=>"fa-".concat(d)).concat(Object.keys(OI));i.includes("fa")||i.push("fa");const s=[".".concat(Fv,":not([").concat(zo,"])")].concat(i.map(d=>".".concat(d,":not([").concat(zo,"])"))).join(", ");if(s.length===0)return Promise.resolve();let a=[];try{a=Gi(t.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),o("complete");else return Promise.resolve();const l=Lh.begin("onTree"),u=a.reduce((d,f)=>{try{const p=rb(f);p&&d.push(p)}catch(p){Dv||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise((d,f)=>{Promise.all(u).then(p=>{tb(p,()=>{r("active"),r("complete"),o("pending"),typeof e=="function"&&e(),l(),d()})}).catch(p=>{l(),f(p)})})}function RI(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rb(t).then(n=>{n&&tb([n],e)})}function NI(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Ed(e||{});let{mask:o}=n;return o&&(o=(o||{}).icon?o:Ed(o||{})),t(r,{...n,mask:o})}}const LI=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Mn,symbol:r=!1,mask:o=null,maskId:i=null,title:s=null,titleId:a=null,classes:l=[],attributes:u={},styles:d={}}=e;if(!t)return;const{prefix:f,iconName:p,icon:g}=t;return Ac({type:"icon",...t},()=>(Ho("beforeDOMElementCreation",{iconDefinition:t,params:e}),ie.autoA11y&&(s?u["aria-labelledby"]="".concat(ie.replacementClass,"-title-").concat(a||Js()):(u["aria-hidden"]="true",u.focusable="false")),Nh({icons:{main:Id(g),mask:o?Id(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:p,transform:{...Mn,...n},symbol:r,title:s,maskId:i,titleId:a,extra:{attributes:u,styles:d,classes:l}})))};var VI={mixout(){return{icon:NI(LI)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=bm,t.nodeCallback=RI,t}}},provides(t){t.i2svg=function(e){const{node:n=nt,callback:r=()=>{}}=e;return bm(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:o,titleId:i,prefix:s,transform:a,symbol:l,mask:u,maskId:d,extra:f}=n;return new Promise((p,g)=>{Promise.all([Td(r,s),u.iconName?Td(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[k,O]=_;p([e,Nh({icons:{main:k,mask:O},prefix:s,iconName:r,transform:a,symbol:l,maskId:d,title:o,titleId:i,extra:f,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:o,transform:i,styles:s}=e;const a=Ic(s);a.length>0&&(r.style=a);let l;return Ph(i)&&(l=co("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),n.push(l||o.icon),{children:n,attributes:r}}}},DI={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ac({type:"layer"},()=>{Ho("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(o=>{Array.isArray(o)?o.map(i=>{r=r.concat(i.abstract)}):r=r.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(ie.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},MI={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:o={},styles:i={}}=e;return Ac({type:"counter",content:t},()=>(Ho("beforeDOMElementCreation",{content:t,params:e}),gI({content:t.toString(),title:n,extra:{attributes:o,styles:i,classes:["".concat(ie.cssPrefix,"-layers-counter"),...r]}})))}}}},$I={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Mn,title:r=null,classes:o=[],attributes:i={},styles:s={}}=e;return Ac({type:"text",content:t},()=>(Ho("beforeDOMElementCreation",{content:t,params:e}),fm({content:t,transform:{...Mn,...n},title:r,extra:{attributes:i,styles:s,classes:["".concat(ie.cssPrefix,"-layers-text"),...o]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:o,extra:i}=n;let s=null,a=null;if(kv){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/l,a=u.height/l}return ie.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,fm({content:e.innerHTML,width:s,height:a,transform:o,title:r,extra:i,watchable:!0})])}}};const FI=new RegExp('"',"ug"),_m=[1105920,1112319],wm={FontAwesome:{normal:"fas",400:"fas"},..._E,...bE,...xE},Cd=Object.keys(wm).reduce((t,e)=>(t[e.toLowerCase()]=wm[e],t),{}),UI=Object.keys(Cd).reduce((t,e)=>{const n=Cd[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function jI(t){const e=t.replace(FI,""),n=JE(e,0),r=n>=_m[0]&&n<=_m[1],o=e.length===2?e[0]===e[1]:!1;return{value:bd(o?e[0]:e),isSecondary:r||o}}function BI(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),o=isNaN(r)?"normal":r;return(Cd[n]||{})[o]||UI[n]}function Em(t,e){const n="".concat(OE).concat(e.replace(":","-"));return new Promise((r,o)=>{if(t.getAttribute(n)!==null)return r();const s=Gi(t.children).filter(p=>p.getAttribute(md)===e)[0],a=ao.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(DE),d=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(s&&!u)return t.removeChild(s),r();if(u&&f!=="none"&&f!==""){const p=a.getPropertyValue("content");let g=BI(l,d);const{value:_,isSecondary:k}=jI(p),O=u[0].startsWith("FontAwesome");let R=Oh(g,_),x=R;if(O){const N=iI(_);N.iconName&&N.prefix&&(R=N.iconName,g=N.prefix)}if(R&&!k&&(!s||s.getAttribute(Ah)!==g||s.getAttribute(Ch)!==x)){t.setAttribute(n,x),s&&t.removeChild(s);const N=kI(),{extra:M}=N;M.attributes[md]=e,Td(R,g).then(Y=>{const U=Nh({...N,icons:{main:Y,mask:Rh()},prefix:g,iconName:x,extra:M,watchable:!0}),E=nt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=U.map(v=>Oa(v)).join(`
`),t.removeAttribute(n),r()}).catch(o)}else r()}else r()})}function zI(t){return Promise.all([Em(t,"::before"),Em(t,"::after")])}function HI(t){return t.parentNode!==document.head&&!~NE.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(md)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Im(t){if(Ir)return new Promise((e,n)=>{const r=Gi(t.querySelectorAll("*")).filter(HI).map(zI),o=Lh.begin("searchPseudoElements");nb(),Promise.all(r).then(()=>{o(),Ad(),e()}).catch(()=>{o(),Ad(),n()})})}var KI={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Im,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=nt}=e;ie.searchPseudoElements&&Im(n)}}};let Tm=!1;var WI={mixout(){return{dom:{unwatch(){nb(),Tm=!0}}}},hooks(){return{bootstrap(){ym(wd("mutationObserverCallbacks",{}))},noAuto(){AI()},watch(t){const{observeMutationsRoot:e}=t;Tm?Ad():ym(wd("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Sm=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const o=r.toLowerCase().split("-"),i=o[0];let s=o.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var qI={mixout(){return{parse:{transform:t=>Sm(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Sm(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:o,iconWidth:i}=e;const s={transform:"translate(".concat(o/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(a," ").concat(l," ").concat(u)},f={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:d,path:f};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const Lu={x:0,y:0,width:"100%",height:"100%"};function Am(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function GI(t){return t.tag==="g"?t.children:[t]}var QI={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Sc(n.split(" ").map(o=>o.trim())):Rh();return r.prefix||(r.prefix=lo()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:o,mask:i,maskId:s,transform:a}=e;const{width:l,icon:u}=o,{width:d,icon:f}=i,p=WE({transform:a,containerWidth:d,iconWidth:l}),g={tag:"rect",attributes:{...Lu,fill:"white"}},_=u.children?{children:u.children.map(Am)}:{},k={tag:"g",attributes:{...p.inner},children:[Am({tag:u.tag,attributes:{...u.attributes,...p.path},..._})]},O={tag:"g",attributes:{...p.outer},children:[k]},R="mask-".concat(s||Js()),x="clip-".concat(s||Js()),N={tag:"mask",attributes:{...Lu,id:R,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,O]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:GI(f)},N]};return n.push(M,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(R,")"),...Lu}}),{children:n,attributes:r}}}},YI={provides(t){let e=!1;ao.matchMedia&&(e=ao.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...o,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...o,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},XI={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},JI=[QE,VI,DI,MI,$I,KI,WI,qI,QI,YI,XI];cI(JI,{mixoutsTo:sn});sn.noAuto;sn.config;const ZI=sn.library;sn.dom;const xd=sn.parse;sn.findIconDefinition;sn.toHtml;const eT=sn.icon;sn.layer;sn.text;sn.counter;/**
* @vue/shared v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Dh(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const ot={},_i=[],fn=()=>{},tT=()=>!1,Cc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Mh=t=>t.startsWith("onUpdate:"),gt=Object.assign,$h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},nT=Object.prototype.hasOwnProperty,Ne=(t,e)=>nT.call(t,e),he=Array.isArray,wi=t=>Ra(t)==="[object Map]",xc=t=>Ra(t)==="[object Set]",Cm=t=>Ra(t)==="[object Date]",ve=t=>typeof t=="function",lt=t=>typeof t=="string",qn=t=>typeof t=="symbol",Xe=t=>t!==null&&typeof t=="object",ob=t=>(Xe(t)||ve(t))&&ve(t.then)&&ve(t.catch),ib=Object.prototype.toString,Ra=t=>ib.call(t),rT=t=>Ra(t).slice(8,-1),sb=t=>Ra(t)==="[object Object]",Fh=t=>lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ds=Dh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},oT=/-(\w)/g,An=Pc(t=>t.replace(oT,(e,n)=>n?n.toUpperCase():"")),iT=/\B([A-Z])/g,Xo=Pc(t=>t.replace(iT,"-$1").toLowerCase()),kc=Pc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vu=Pc(t=>t?`on${kc(t)}`:""),uo=(t,e)=>!Object.is(t,e),Pl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ab=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ql=t=>{const e=parseFloat(t);return isNaN(e)?t:e},sT=t=>{const e=lt(t)?Number(t):NaN;return isNaN(e)?t:e};let xm;const lb=()=>xm||(xm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fo(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],o=lt(r)?uT(r):Fo(r);if(o)for(const i in o)e[i]=o[i]}return e}else if(lt(t)||Xe(t))return t}const aT=/;(?![^(]*\))/g,lT=/:([^]+)/,cT=/\/\*[^]*?\*\//g;function uT(t){const e={};return t.replace(cT,"").split(aT).forEach(n=>{if(n){const r=n.split(lT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function pn(t){let e="";if(lt(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=pn(t[n]);r&&(e+=r+" ")}else if(Xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function cb(t){if(!t)return null;let{class:e,style:n}=t;return e&&!lt(e)&&(t.class=pn(e)),n&&(t.style=Fo(n)),t}const dT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hT=Dh(dT);function ub(t){return!!t||t===""}function fT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ri(t[r],e[r]);return n}function Ri(t,e){if(t===e)return!0;let n=Cm(t),r=Cm(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=qn(t),r=qn(e),n||r)return t===e;if(n=he(t),r=he(e),n||r)return n&&r?fT(t,e):!1;if(n=Xe(t),r=Xe(e),n||r){if(!n||!r)return!1;const o=Object.keys(t).length,i=Object.keys(e).length;if(o!==i)return!1;for(const s in t){const a=t.hasOwnProperty(s),l=e.hasOwnProperty(s);if(a&&!l||!a&&l||!Ri(t[s],e[s]))return!1}}return String(t)===String(e)}function pT(t,e){return t.findIndex(n=>Ri(n,e))}const db=t=>!!(t&&t.__v_isRef===!0),xe=t=>lt(t)?t:t==null?"":he(t)||Xe(t)&&(t.toString===ib||!ve(t.toString))?db(t)?xe(t.value):JSON.stringify(t,hb,2):String(t),hb=(t,e)=>db(e)?hb(t,e.value):wi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,o],i)=>(n[Du(r,i)+" =>"]=o,n),{})}:xc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Du(n))}:qn(e)?Du(e):Xe(e)&&!he(e)&&!sb(e)?String(e):e,Du=(t,e="")=>{var n;return qn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wn;class fb{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wn,!e&&wn&&(this.index=(wn.scopes||(wn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=wn;try{return wn=this,e()}finally{wn=n}}}on(){wn=this}off(){wn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function mT(t){return new fb(t)}function gT(t,e=wn){e&&e.active&&e.effects.push(t)}function yT(){return wn}let Uo;class Uh{constructor(e,n,r,o){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,gT(this,o)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,go();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(vT(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),yo()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=to,n=Uo;try{return to=!0,Uo=this,this._runnings++,Pm(this),this.fn()}finally{km(this),this._runnings--,Uo=n,to=e}}stop(){this.active&&(Pm(this),km(this),this.onStop&&this.onStop(),this.active=!1)}}function vT(t){return t.value}function Pm(t){t._trackId++,t._depsLength=0}function km(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)pb(t.deps[e],t);t.deps.length=t._depsLength}}function pb(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let to=!0,Pd=0;const mb=[];function go(){mb.push(to),to=!1}function yo(){const t=mb.pop();to=t===void 0?!0:t}function jh(){Pd++}function Bh(){for(Pd--;!Pd&&kd.length;)kd.shift()()}function gb(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&pb(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const kd=[];function yb(t,e,n){jh();for(const r of t.keys()){let o;r._dirtyLevel<e&&(o??(o=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(o??(o=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&kd.push(r.scheduler)))}Bh()}const vb=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Od=new WeakMap,jo=Symbol(""),Rd=Symbol("");function Qt(t,e,n){if(to&&Uo){let r=Od.get(t);r||Od.set(t,r=new Map);let o=r.get(n);o||r.set(n,o=vb(()=>r.delete(n))),gb(Uo,o)}}function dr(t,e,n,r,o,i){const s=Od.get(t);if(!s)return;let a=[];if(e==="clear")a=[...s.values()];else if(n==="length"&&he(t)){const l=Number(r);s.forEach((u,d)=>{(d==="length"||!qn(d)&&d>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(s.get(n)),e){case"add":he(t)?Fh(n)&&a.push(s.get("length")):(a.push(s.get(jo)),wi(t)&&a.push(s.get(Rd)));break;case"delete":he(t)||(a.push(s.get(jo)),wi(t)&&a.push(s.get(Rd)));break;case"set":wi(t)&&a.push(s.get(jo));break}jh();for(const l of a)l&&yb(l,4);Bh()}const bT=Dh("__proto__,__v_isRef,__isVue"),bb=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qn)),Om=_T();function _T(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=$e(this);for(let i=0,s=this.length;i<s;i++)Qt(r,"get",i+"");const o=r[e](...n);return o===-1||o===!1?r[e](...n.map($e)):o}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){go(),jh();const r=$e(this)[e].apply(this,n);return Bh(),yo(),r}}),t}function wT(t){qn(t)||(t=String(t));const e=$e(this);return Qt(e,"has",t),e.hasOwnProperty(t)}class _b{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const o=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(o?i?LT:Tb:i?Ib:Eb).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const s=he(e);if(!o){if(s&&Ne(Om,n))return Reflect.get(Om,n,r);if(n==="hasOwnProperty")return wT}const a=Reflect.get(e,n,r);return(qn(n)?bb.has(n):bT(n))||(o||Qt(e,"get",n),i)?a:Yt(a)?s&&Fh(n)?a:a.value:Xe(a)?o?Kh(a):Qi(a):a}}class wb extends _b{constructor(e=!1){super(!1,e)}set(e,n,r,o){let i=e[n];if(!this._isShallow){const l=Ko(i);if(!Ni(r)&&!Ko(r)&&(i=$e(i),r=$e(r)),!he(e)&&Yt(i)&&!Yt(r))return l?!1:(i.value=r,!0)}const s=he(e)&&Fh(n)?Number(n)<e.length:Ne(e,n),a=Reflect.set(e,n,r,o);return e===$e(o)&&(s?uo(r,i)&&dr(e,"set",n,r):dr(e,"add",n,r)),a}deleteProperty(e,n){const r=Ne(e,n);e[n];const o=Reflect.deleteProperty(e,n);return o&&r&&dr(e,"delete",n,void 0),o}has(e,n){const r=Reflect.has(e,n);return(!qn(n)||!bb.has(n))&&Qt(e,"has",n),r}ownKeys(e){return Qt(e,"iterate",he(e)?"length":jo),Reflect.ownKeys(e)}}class ET extends _b{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const IT=new wb,TT=new ET,ST=new wb(!0);const zh=t=>t,Oc=t=>Reflect.getPrototypeOf(t);function dl(t,e,n=!1,r=!1){t=t.__v_raw;const o=$e(t),i=$e(e);n||(uo(e,i)&&Qt(o,"get",e),Qt(o,"get",i));const{has:s}=Oc(o),a=r?zh:n?qh:Zs;if(s.call(o,e))return a(t.get(e));if(s.call(o,i))return a(t.get(i));t!==o&&t.get(e)}function hl(t,e=!1){const n=this.__v_raw,r=$e(n),o=$e(t);return e||(uo(t,o)&&Qt(r,"has",t),Qt(r,"has",o)),t===o?n.has(t):n.has(t)||n.has(o)}function fl(t,e=!1){return t=t.__v_raw,!e&&Qt($e(t),"iterate",jo),Reflect.get(t,"size",t)}function Rm(t,e=!1){!e&&!Ni(t)&&!Ko(t)&&(t=$e(t));const n=$e(this);return Oc(n).has.call(n,t)||(n.add(t),dr(n,"add",t,t)),this}function Nm(t,e,n=!1){!n&&!Ni(e)&&!Ko(e)&&(e=$e(e));const r=$e(this),{has:o,get:i}=Oc(r);let s=o.call(r,t);s||(t=$e(t),s=o.call(r,t));const a=i.call(r,t);return r.set(t,e),s?uo(e,a)&&dr(r,"set",t,e):dr(r,"add",t,e),this}function Lm(t){const e=$e(this),{has:n,get:r}=Oc(e);let o=n.call(e,t);o||(t=$e(t),o=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return o&&dr(e,"delete",t,void 0),i}function Vm(){const t=$e(this),e=t.size!==0,n=t.clear();return e&&dr(t,"clear",void 0,void 0),n}function pl(t,e){return function(r,o){const i=this,s=i.__v_raw,a=$e(s),l=e?zh:t?qh:Zs;return!t&&Qt(a,"iterate",jo),s.forEach((u,d)=>r.call(o,l(u),l(d),i))}}function ml(t,e,n){return function(...r){const o=this.__v_raw,i=$e(o),s=wi(i),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,u=o[t](...r),d=n?zh:e?qh:Zs;return!e&&Qt(i,"iterate",l?Rd:jo),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[d(f[0]),d(f[1])]:d(f),done:p}},[Symbol.iterator](){return this}}}}function Lr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function AT(){const t={get(i){return dl(this,i)},get size(){return fl(this)},has:hl,add:Rm,set:Nm,delete:Lm,clear:Vm,forEach:pl(!1,!1)},e={get(i){return dl(this,i,!1,!0)},get size(){return fl(this)},has:hl,add(i){return Rm.call(this,i,!0)},set(i,s){return Nm.call(this,i,s,!0)},delete:Lm,clear:Vm,forEach:pl(!1,!0)},n={get(i){return dl(this,i,!0)},get size(){return fl(this,!0)},has(i){return hl.call(this,i,!0)},add:Lr("add"),set:Lr("set"),delete:Lr("delete"),clear:Lr("clear"),forEach:pl(!0,!1)},r={get(i){return dl(this,i,!0,!0)},get size(){return fl(this,!0)},has(i){return hl.call(this,i,!0)},add:Lr("add"),set:Lr("set"),delete:Lr("delete"),clear:Lr("clear"),forEach:pl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ml(i,!1,!1),n[i]=ml(i,!0,!1),e[i]=ml(i,!1,!0),r[i]=ml(i,!0,!0)}),[t,n,e,r]}const[CT,xT,PT,kT]=AT();function Hh(t,e){const n=e?t?kT:PT:t?xT:CT;return(r,o,i)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?r:Reflect.get(Ne(n,o)&&o in r?n:r,o,i)}const OT={get:Hh(!1,!1)},RT={get:Hh(!1,!0)},NT={get:Hh(!0,!1)};const Eb=new WeakMap,Ib=new WeakMap,Tb=new WeakMap,LT=new WeakMap;function VT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function DT(t){return t.__v_skip||!Object.isExtensible(t)?0:VT(rT(t))}function Qi(t){return Ko(t)?t:Wh(t,!1,IT,OT,Eb)}function Sb(t){return Wh(t,!1,ST,RT,Ib)}function Kh(t){return Wh(t,!0,TT,NT,Tb)}function Wh(t,e,n,r,o){if(!Xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=o.get(t);if(i)return i;const s=DT(t);if(s===0)return t;const a=new Proxy(t,s===2?r:n);return o.set(t,a),a}function Ms(t){return Ko(t)?Ms(t.__v_raw):!!(t&&t.__v_isReactive)}function Ko(t){return!!(t&&t.__v_isReadonly)}function Ni(t){return!!(t&&t.__v_isShallow)}function Ab(t){return t?!!t.__v_raw:!1}function $e(t){const e=t&&t.__v_raw;return e?$e(e):t}function MT(t){return Object.isExtensible(t)&&ab(t,"__v_skip",!0),t}const Zs=t=>Xe(t)?Qi(t):t,qh=t=>Xe(t)?Kh(t):t;class Cb{constructor(e,n,r,o){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Uh(()=>e(this._value),()=>kl(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const e=$e(this);return(!e._cacheable||e.effect.dirty)&&uo(e._value,e._value=e.effect.run())&&kl(e,4),xb(e),e.effect._dirtyLevel>=2&&kl(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function $T(t,e,n=!1){let r,o;const i=ve(t);return i?(r=t,o=fn):(r=t.get,o=t.set),new Cb(r,o,i||!o,n)}function xb(t){var e;to&&Uo&&(t=$e(t),gb(Uo,(e=t.dep)!=null?e:t.dep=vb(()=>t.dep=void 0,t instanceof Cb?t:void 0)))}function kl(t,e=4,n,r){t=$e(t);const o=t.dep;o&&yb(o,e)}function Yt(t){return!!(t&&t.__v_isRef===!0)}function hr(t){return Pb(t,!1)}function FT(t){return Pb(t,!0)}function Pb(t,e){return Yt(t)?t:new UT(t,e)}class UT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:$e(e),this._value=n?e:Zs(e)}get value(){return xb(this),this._value}set value(e){const n=this.__v_isShallow||Ni(e)||Ko(e);e=n?e:$e(e),uo(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Zs(e),kl(this,4))}}function Ei(t){return Yt(t)?t.value:t}const jT={get:(t,e,n)=>Ei(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const o=t[e];return Yt(o)&&!Yt(n)?(o.value=n,!0):Reflect.set(t,e,n,r)}};function kb(t){return Ms(t)?t:new Proxy(t,jT)}/**
* @vue/runtime-core v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function no(t,e,n,r){try{return r?t(...r):t()}catch(o){Rc(o,e,n)}}function gn(t,e,n,r){if(ve(t)){const o=no(t,e,n,r);return o&&ob(o)&&o.catch(i=>{Rc(i,e,n)}),o}if(he(t)){const o=[];for(let i=0;i<t.length;i++)o.push(gn(t[i],e,n,r));return o}}function Rc(t,e,n,r=!0){const o=e?e.vnode:null;if(e){let i=e.parent;const s=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,s,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){go(),no(l,null,10,[t,s,a]),yo();return}}BT(t,n,o,r)}function BT(t,e,n,r=!0){console.error(t)}let ea=!1,Nd=!1;const Dt=[];let Dn=0;const Ii=[];let Ur=null,Ro=0;const Ob=Promise.resolve();let Gh=null;function Nc(t){const e=Gh||Ob;return t?e.then(this?t.bind(this):t):e}function zT(t){let e=Dn+1,n=Dt.length;for(;e<n;){const r=e+n>>>1,o=Dt[r],i=ta(o);i<t||i===t&&o.pre?e=r+1:n=r}return e}function Qh(t){(!Dt.length||!Dt.includes(t,ea&&t.allowRecurse?Dn+1:Dn))&&(t.id==null?Dt.push(t):Dt.splice(zT(t.id),0,t),Rb())}function Rb(){!ea&&!Nd&&(Nd=!0,Gh=Ob.then(Lb))}function HT(t){const e=Dt.indexOf(t);e>Dn&&Dt.splice(e,1)}function KT(t){he(t)?Ii.push(...t):(!Ur||!Ur.includes(t,t.allowRecurse?Ro+1:Ro))&&Ii.push(t),Rb()}function Dm(t,e,n=ea?Dn+1:0){for(;n<Dt.length;n++){const r=Dt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Dt.splice(n,1),n--,r()}}}function Nb(t){if(Ii.length){const e=[...new Set(Ii)].sort((n,r)=>ta(n)-ta(r));if(Ii.length=0,Ur){Ur.push(...e);return}for(Ur=e,Ro=0;Ro<Ur.length;Ro++){const n=Ur[Ro];n.active!==!1&&n()}Ur=null,Ro=0}}const ta=t=>t.id==null?1/0:t.id,WT=(t,e)=>{const n=ta(t)-ta(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Lb(t){Nd=!1,ea=!0,Dt.sort(WT);try{for(Dn=0;Dn<Dt.length;Dn++){const e=Dt[Dn];e&&e.active!==!1&&no(e,e.i,e.i?15:14)}}finally{Dn=0,Dt.length=0,Nb(),ea=!1,Gh=null,(Dt.length||Ii.length)&&Lb()}}let wt=null,Lc=null;function Gl(t){const e=wt;return wt=t,Lc=t&&t.type.__scopeId||null,e}function Vb(t){Lc=t}function Db(){Lc=null}function Qe(t,e=wt,n){if(!e||t._n)return t;const r=(...o)=>{r._d&&Gm(-1);const i=Gl(e);let s;try{s=t(...o)}finally{Gl(i),r._d&&Gm(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function at(t,e){if(wt===null)return t;const n=jc(wt),r=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[i,s,a,l=ot]=e[o];i&&(ve(i)&&(i={mounted:i,updated:i}),i.deep&&Hr(s),r.push({dir:i,instance:n,value:s,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ao(t,e,n,r){const o=t.dirs,i=e&&e.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let l=a.dir[r];l&&(go(),gn(l,n,8,[t.el,a,t,e]),yo())}}const jr=Symbol("_leaveCb"),gl=Symbol("_enterCb");function Mb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Mc(()=>{t.isMounted=!0}),Hb(()=>{t.isUnmounting=!0}),t}const un=[Function,Array],$b={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:un,onEnter:un,onAfterEnter:un,onEnterCancelled:un,onBeforeLeave:un,onLeave:un,onAfterLeave:un,onLeaveCancelled:un,onBeforeAppear:un,onAppear:un,onAfterAppear:un,onAppearCancelled:un},Fb=t=>{const e=t.subTree;return e.component?Fb(e.component):e},qT={name:"BaseTransition",props:$b,setup(t,{slots:e}){const n=sf(),r=Mb();return()=>{const o=e.default&&Yh(e.default(),!0);if(!o||!o.length)return;let i=o[0];if(o.length>1){for(const p of o)if(p.type!==Kt){i=p;break}}const s=$e(t),{mode:a}=s;if(r.isLeaving)return Mu(i);const l=Mm(i);if(!l)return Mu(i);let u=na(l,s,r,n,p=>u=p);Li(l,u);const d=n.subTree,f=d&&Mm(d);if(f&&f.type!==Kt&&!No(l,f)&&Fb(n).type!==Kt){const p=na(f,s,r,n);if(Li(f,p),a==="out-in"&&l.type!==Kt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Mu(i);a==="in-out"&&l.type!==Kt&&(p.delayLeave=(g,_,k)=>{const O=Ub(r,f);O[String(f.key)]=f,g[jr]=()=>{_(),g[jr]=void 0,delete u.delayedLeave},u.delayedLeave=k})}return i}}},GT=qT;function Ub(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function na(t,e,n,r,o){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:_,onLeaveCancelled:k,onBeforeAppear:O,onAppear:R,onAfterAppear:x,onAppearCancelled:N}=e,M=String(t.key),Y=Ub(n,t),U=(b,T)=>{b&&gn(b,r,9,T)},E=(b,T)=>{const A=T[1];U(b,T),he(b)?b.every(S=>S.length<=1)&&A():b.length<=1&&A()},v={mode:s,persisted:a,beforeEnter(b){let T=l;if(!n.isMounted)if(i)T=O||l;else return;b[jr]&&b[jr](!0);const A=Y[M];A&&No(t,A)&&A.el[jr]&&A.el[jr](),U(T,[b])},enter(b){let T=u,A=d,S=f;if(!n.isMounted)if(i)T=R||u,A=x||d,S=N||f;else return;let I=!1;const Ee=b[gl]=Le=>{I||(I=!0,Le?U(S,[b]):U(A,[b]),v.delayedLeave&&v.delayedLeave(),b[gl]=void 0)};T?E(T,[b,Ee]):Ee()},leave(b,T){const A=String(t.key);if(b[gl]&&b[gl](!0),n.isUnmounting)return T();U(p,[b]);let S=!1;const I=b[jr]=Ee=>{S||(S=!0,T(),Ee?U(k,[b]):U(_,[b]),b[jr]=void 0,Y[A]===t&&delete Y[A])};Y[A]=t,g?E(g,[b,I]):I()},clone(b){const T=na(b,e,n,r,o);return o&&o(T),T}};return v}function Mu(t){if(Vc(t))return t=ho(t),t.children=null,t}function Mm(t){if(!Vc(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ve(n.default))return n.default()}}function Li(t,e){t.shapeFlag&6&&t.component?Li(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Yh(t,e=!1,n){let r=[],o=0;for(let i=0;i<t.length;i++){let s=t[i];const a=n==null?s.key:String(n)+String(s.key!=null?s.key:i);s.type===He?(s.patchFlag&128&&o++,r=r.concat(Yh(s.children,e,a))):(e||s.type!==Kt)&&r.push(a!=null?ho(s,{key:a}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Xh(t,e){return ve(t)?gt({name:t.name},e,{setup:t}):t}const $s=t=>!!t.type.__asyncLoader,Vc=t=>t.type.__isKeepAlive;function QT(t,e){jb(t,"a",e)}function YT(t,e){jb(t,"da",e)}function jb(t,e,n=At){const r=t.__wdc||(t.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(Dc(e,r,n),n){let o=n.parent;for(;o&&o.parent;)Vc(o.parent.vnode)&&XT(r,e,n,o),o=o.parent}}function XT(t,e,n,r){const o=Dc(e,t,r,!0);Kb(()=>{$h(r[e],o)},n)}function Dc(t,e,n=At,r=!1){if(n){const o=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...s)=>{go();const a=Na(n),l=gn(e,n,t,s);return a(),yo(),l});return r?o.unshift(i):o.push(i),i}}const Tr=t=>(e,n=At)=>{(!Uc||t==="sp")&&Dc(t,(...r)=>e(...r),n)},Bb=Tr("bm"),Mc=Tr("m"),JT=Tr("bu"),zb=Tr("u"),Hb=Tr("bum"),Kb=Tr("um"),ZT=Tr("sp"),eS=Tr("rtg"),tS=Tr("rtc");function nS(t,e=At){Dc("ec",t,e)}const Jh="components",rS="directives";function Ce(t,e){return ef(Jh,t,!0,e)||t}const Wb=Symbol.for("v-ndc");function Jr(t){return lt(t)?ef(Jh,t,!1)||t:t||Wb}function Zh(t){return ef(rS,t)}function ef(t,e,n=!0,r=!1){const o=wt||At;if(o){const i=o.type;if(t===Jh){const a=QS(i,!1);if(a&&(a===e||a===An(e)||a===kc(An(e))))return i}const s=$m(o[t]||i[t],e)||$m(o.appContext[t],e);return!s&&r?i:s}}function $m(t,e){return t&&(t[e]||t[An(e)]||t[kc(An(e))])}function Sn(t,e,n,r){let o;const i=n;if(he(t)||lt(t)){o=new Array(t.length);for(let s=0,a=t.length;s<a;s++)o[s]=e(t[s],s,void 0,i)}else if(typeof t=="number"){o=new Array(t);for(let s=0;s<t;s++)o[s]=e(s+1,s,void 0,i)}else if(Xe(t))if(t[Symbol.iterator])o=Array.from(t,(s,a)=>e(s,a,void 0,i));else{const s=Object.keys(t);o=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const u=s[a];o[a]=e(t[u],u,a,i)}}else o=[];return o}function oS(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(he(r))for(let o=0;o<r.length;o++)t[r[o].name]=r[o].fn;else r&&(t[r.name]=r.key?(...o)=>{const i=r.fn(...o);return i&&(i.key=r.key),i}:r.fn)}return t}function Be(t,e,n={},r,o){if(wt.isCE||wt.parent&&$s(wt.parent)&&wt.parent.isCE)return e!=="default"&&(n.name=e),ue("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),B();const s=i&&qb(i(n)),a=Ue(He,{key:(n.key||s&&s.key||`_${e}`)+(!s&&r?"_fb":"")},s||(r?r():[]),s&&t._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function qb(t){return t.some(e=>Yl(e)?!(e.type===Kt||e.type===He&&!qb(e.children)):!0)?t:null}const Ld=t=>t?p_(t)?jc(t):Ld(t.parent):null,Fs=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ld(t.parent),$root:t=>Ld(t.root),$emit:t=>t.emit,$options:t=>tf(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Qh(t.update)}),$nextTick:t=>t.n||(t.n=Nc.bind(t.proxy)),$watch:t=>PS.bind(t)}),$u=(t,e)=>t!==ot&&!t.__isScriptSetup&&Ne(t,e),iS={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:o,props:i,accessCache:s,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=s[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return o[e];case 4:return n[e];case 3:return i[e]}else{if($u(r,e))return s[e]=1,r[e];if(o!==ot&&Ne(o,e))return s[e]=2,o[e];if((u=t.propsOptions[0])&&Ne(u,e))return s[e]=3,i[e];if(n!==ot&&Ne(n,e))return s[e]=4,n[e];Vd&&(s[e]=0)}}const d=Fs[e];let f,p;if(d)return e==="$attrs"&&Qt(t.attrs,"get",""),d(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ot&&Ne(n,e))return s[e]=4,n[e];if(p=l.config.globalProperties,Ne(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:o,ctx:i}=t;return $u(o,e)?(o[e]=n,!0):r!==ot&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:o,propsOptions:i}},s){let a;return!!n[s]||t!==ot&&Ne(t,s)||$u(e,s)||(a=i[0])&&Ne(a,s)||Ne(r,s)||Ne(Fs,s)||Ne(o.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Fm(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Vd=!0;function sS(t){const e=tf(t),n=t.proxy,r=t.ctx;Vd=!1,e.beforeCreate&&Um(e.beforeCreate,t,"bc");const{data:o,computed:i,methods:s,watch:a,provide:l,inject:u,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:_,activated:k,deactivated:O,beforeDestroy:R,beforeUnmount:x,destroyed:N,unmounted:M,render:Y,renderTracked:U,renderTriggered:E,errorCaptured:v,serverPrefetch:b,expose:T,inheritAttrs:A,components:S,directives:I,filters:Ee}=e;if(u&&aS(u,r,null),s)for(const ge in s){const we=s[ge];ve(we)&&(r[ge]=we.bind(n))}if(o){const ge=o.call(n,n);Xe(ge)&&(t.data=Qi(ge))}if(Vd=!0,i)for(const ge in i){const we=i[ge],It=ve(we)?we.bind(n,n):ve(we.get)?we.get.bind(n,n):fn,yt=!ve(we)&&ve(we.set)?we.set.bind(n):fn,vt=_t({get:It,set:yt});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>vt.value,set:Je=>vt.value=Je})}if(a)for(const ge in a)Gb(a[ge],r,n,ge);if(l){const ge=ve(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(we=>{Ol(we,ge[we])})}d&&Um(d,t,"c");function Se(ge,we){he(we)?we.forEach(It=>ge(It.bind(n))):we&&ge(we.bind(n))}if(Se(Bb,f),Se(Mc,p),Se(JT,g),Se(zb,_),Se(QT,k),Se(YT,O),Se(nS,v),Se(tS,U),Se(eS,E),Se(Hb,x),Se(Kb,M),Se(ZT,b),he(T))if(T.length){const ge=t.exposed||(t.exposed={});T.forEach(we=>{Object.defineProperty(ge,we,{get:()=>n[we],set:It=>n[we]=It})})}else t.exposed||(t.exposed={});Y&&t.render===fn&&(t.render=Y),A!=null&&(t.inheritAttrs=A),S&&(t.components=S),I&&(t.directives=I)}function aS(t,e,n=fn){he(t)&&(t=Dd(t));for(const r in t){const o=t[r];let i;Xe(o)?"default"in o?i=yn(o.from||r,o.default,!0):i=yn(o.from||r):i=yn(o),Yt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):e[r]=i}}function Um(t,e,n){gn(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Gb(t,e,n,r){const o=r.includes(".")?u_(n,r):()=>n[r];if(lt(t)){const i=e[t];ve(i)&&mn(o,i)}else if(ve(t))mn(o,t.bind(n));else if(Xe(t))if(he(t))t.forEach(i=>Gb(i,e,n,r));else{const i=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(i)&&mn(o,i,t)}}function tf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=t.appContext,a=i.get(e);let l;return a?l=a:!o.length&&!n&&!r?l=e:(l={},o.length&&o.forEach(u=>Ql(l,u,s,!0)),Ql(l,e,s)),Xe(e)&&i.set(e,l),l}function Ql(t,e,n,r=!1){const{mixins:o,extends:i}=e;i&&Ql(t,i,n,!0),o&&o.forEach(s=>Ql(t,s,n,!0));for(const s in e)if(!(r&&s==="expose")){const a=lS[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const lS={data:jm,props:Bm,emits:Bm,methods:As,computed:As,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:As,directives:As,watch:uS,provide:jm,inject:cS};function jm(t,e){return e?t?function(){return gt(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function cS(t,e){return As(Dd(t),Dd(e))}function Dd(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ut(t,e){return t?[...new Set([].concat(t,e))]:e}function As(t,e){return t?gt(Object.create(null),t,e):e}function Bm(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:gt(Object.create(null),Fm(t),Fm(e??{})):e}function uS(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const r in e)n[r]=Ut(t[r],e[r]);return n}function Qb(){return{app:null,config:{isNativeTag:tT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dS=0;function hS(t,e){return function(r,o=null){ve(r)||(r=gt({},r)),o!=null&&!Xe(o)&&(o=null);const i=Qb(),s=new WeakSet;let a=!1;const l=i.app={_uid:dS++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:XS,get config(){return i.config},set config(u){},use(u,...d){return s.has(u)||(u&&ve(u.install)?(s.add(u),u.install(l,...d)):ve(u)&&(s.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,f){if(!a){const p=ue(r,o);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),d&&e?e(p,u):t(p,u,f),a=!0,l._container=u,u.__vue_app__=l,jc(p.component)}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=Ti;Ti=l;try{return u()}finally{Ti=d}}};return l}}let Ti=null;function Ol(t,e){if(At){let n=At.provides;const r=At.parent&&At.parent.provides;r===n&&(n=At.provides=Object.create(r)),n[t]=e}}function yn(t,e,n=!1){const r=At||wt;if(r||Ti){const o=Ti?Ti._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&t in o)return o[t];if(arguments.length>1)return n&&ve(e)?e.call(r&&r.proxy):e}}const Yb={},Xb=()=>Object.create(Yb),Jb=t=>Object.getPrototypeOf(t)===Yb;function fS(t,e,n,r=!1){const o={},i=Xb();t.propsDefaults=Object.create(null),Zb(t,e,o,i);for(const s in t.propsOptions[0])s in o||(o[s]=void 0);n?t.props=r?o:Sb(o):t.type.props?t.props=o:t.props=i,t.attrs=i}function pS(t,e,n,r){const{props:o,attrs:i,vnode:{patchFlag:s}}=t,a=$e(o),[l]=t.propsOptions;let u=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let p=d[f];if($c(t.emitsOptions,p))continue;const g=e[p];if(l)if(Ne(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const _=An(p);o[_]=Md(l,a,_,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{Zb(t,e,o,i)&&(u=!0);let d;for(const f in a)(!e||!Ne(e,f)&&((d=Xo(f))===f||!Ne(e,d)))&&(l?n&&(n[f]!==void 0||n[d]!==void 0)&&(o[f]=Md(l,a,f,void 0,t,!0)):delete o[f]);if(i!==a)for(const f in i)(!e||!Ne(e,f))&&(delete i[f],u=!0)}u&&dr(t.attrs,"set","")}function Zb(t,e,n,r){const[o,i]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Ds(l))continue;const u=e[l];let d;o&&Ne(o,d=An(l))?!i||!i.includes(d)?n[d]=u:(a||(a={}))[d]=u:$c(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,s=!0)}if(i){const l=$e(n),u=a||ot;for(let d=0;d<i.length;d++){const f=i[d];n[f]=Md(o,l,f,u[f],t,!Ne(u,f))}}return s}function Md(t,e,n,r,o,i){const s=t[n];if(s!=null){const a=Ne(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&ve(l)){const{propsDefaults:u}=o;if(n in u)r=u[n];else{const d=Na(o);r=u[n]=l.call(null,e),d()}}else r=l}s[0]&&(i&&!a?r=!1:s[1]&&(r===""||r===Xo(n))&&(r=!0))}return r}const mS=new WeakMap;function e_(t,e,n=!1){const r=n?mS:e.propsCache,o=r.get(t);if(o)return o;const i=t.props,s={},a=[];let l=!1;if(!ve(t)){const d=f=>{l=!0;const[p,g]=e_(f,e,!0);gt(s,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Xe(t)&&r.set(t,_i),_i;if(he(i))for(let d=0;d<i.length;d++){const f=An(i[d]);zm(f)&&(s[f]=ot)}else if(i)for(const d in i){const f=An(d);if(zm(f)){const p=i[d],g=s[f]=he(p)||ve(p)?{type:p}:gt({},p),_=g.type;let k=!1,O=!0;if(he(_))for(let R=0;R<_.length;++R){const x=_[R],N=ve(x)&&x.name;if(N==="Boolean"){k=!0;break}else N==="String"&&(O=!1)}else k=ve(_)&&_.name==="Boolean";g[0]=k,g[1]=O,(k||Ne(g,"default"))&&a.push(f)}}const u=[s,a];return Xe(t)&&r.set(t,u),u}function zm(t){return t[0]!=="$"&&!Ds(t)}const t_=t=>t[0]==="_"||t==="$stable",nf=t=>he(t)?t.map(Vn):[Vn(t)],gS=(t,e,n)=>{if(e._n)return e;const r=Qe((...o)=>nf(e(...o)),n);return r._c=!1,r},n_=(t,e,n)=>{const r=t._ctx;for(const o in t){if(t_(o))continue;const i=t[o];if(ve(i))e[o]=gS(o,i,r);else if(i!=null){const s=nf(i);e[o]=()=>s}}},r_=(t,e)=>{const n=nf(e);t.slots.default=()=>n},o_=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},yS=(t,e,n)=>{const r=t.slots=Xb();if(t.vnode.shapeFlag&32){const o=e._;o?(o_(r,e,n),n&&ab(r,"_",o,!0)):n_(e,r)}else e&&r_(t,e)},vS=(t,e,n)=>{const{vnode:r,slots:o}=t;let i=!0,s=ot;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:o_(o,e,n):(i=!e.$stable,n_(e,o)),s=e}else e&&(r_(t,e),s={default:1});if(i)for(const a in o)!t_(a)&&s[a]==null&&delete o[a]};function $d(t,e,n,r,o=!1){if(he(t)){t.forEach((p,g)=>$d(p,e&&(he(e)?e[g]:e),n,r,o));return}if($s(r)&&!o)return;const i=r.shapeFlag&4?jc(r.component):r.el,s=o?null:i,{i:a,r:l}=t,u=e&&e.r,d=a.refs===ot?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==l&&(lt(u)?(d[u]=null,Ne(f,u)&&(f[u]=null)):Yt(u)&&(u.value=null)),ve(l))no(l,a,12,[s,d]);else{const p=lt(l),g=Yt(l);if(p||g){const _=()=>{if(t.f){const k=p?Ne(f,l)?f[l]:d[l]:l.value;o?he(k)&&$h(k,i):he(k)?k.includes(i)||k.push(i):p?(d[l]=[i],Ne(f,l)&&(f[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else p?(d[l]=s,Ne(f,l)&&(f[l]=s)):g&&(l.value=s,t.k&&(d[t.k]=s))};s?(_.id=-1,zt(_,n)):_()}}}const i_=Symbol("_vte"),bS=t=>t.__isTeleport,Us=t=>t&&(t.disabled||t.disabled===""),Hm=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Km=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Fd=(t,e)=>{const n=t&&t.to;return lt(n)?e?e(n):null:n},_S={name:"Teleport",__isTeleport:!0,process(t,e,n,r,o,i,s,a,l,u){const{mc:d,pc:f,pbc:p,o:{insert:g,querySelector:_,createText:k,createComment:O}}=u,R=Us(e.props);let{shapeFlag:x,children:N,dynamicChildren:M}=e;if(t==null){const Y=e.el=k(""),U=e.anchor=k("");g(Y,n,r),g(U,n,r);const E=e.target=Fd(e.props,_),v=a_(E,e,k,g);E&&(s==="svg"||Hm(E)?s="svg":(s==="mathml"||Km(E))&&(s="mathml"));const b=(T,A)=>{x&16&&d(N,T,A,o,i,s,a,l)};R?b(n,U):E&&b(E,v)}else{e.el=t.el,e.targetStart=t.targetStart;const Y=e.anchor=t.anchor,U=e.target=t.target,E=e.targetAnchor=t.targetAnchor,v=Us(t.props),b=v?n:U,T=v?Y:E;if(s==="svg"||Hm(U)?s="svg":(s==="mathml"||Km(U))&&(s="mathml"),M?(p(t.dynamicChildren,M,b,o,i,s,a),rf(t,e,!0)):l||f(t,e,b,T,o,i,s,a,!1),R)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):yl(e,n,Y,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const A=e.target=Fd(e.props,_);A&&yl(e,A,null,u,0)}else v&&yl(e,U,E,u,1)}s_(e)},remove(t,e,n,{um:r,o:{remove:o}},i){const{shapeFlag:s,children:a,anchor:l,targetStart:u,targetAnchor:d,target:f,props:p}=t;if(f&&(o(u),o(d)),i&&o(l),s&16){const g=i||!Us(p);for(let _=0;_<a.length;_++){const k=a[_];r(k,e,n,g,!!k.dynamicChildren)}}},move:yl,hydrate:wS};function yl(t,e,n,{o:{insert:r},m:o},i=2){i===0&&r(t.targetAnchor,e,n);const{el:s,anchor:a,shapeFlag:l,children:u,props:d}=t,f=i===2;if(f&&r(s,e,n),(!f||Us(d))&&l&16)for(let p=0;p<u.length;p++)o(u[p],e,n,2);f&&r(a,e,n)}function wS(t,e,n,r,o,i,{o:{nextSibling:s,parentNode:a,querySelector:l,insert:u,createText:d}},f){const p=e.target=Fd(e.props,l);if(p){const g=p._lpa||p.firstChild;if(e.shapeFlag&16)if(Us(e.props))e.anchor=f(s(t),e,a(t),n,r,o,i),e.targetStart=g,e.targetAnchor=g&&s(g);else{e.anchor=s(t);let _=g;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")e.targetStart=_;else if(_.data==="teleport anchor"){e.targetAnchor=_,p._lpa=e.targetAnchor&&s(e.targetAnchor);break}}_=s(_)}e.targetAnchor||a_(p,e,d,u),f(g&&s(g),e,p,n,r,o,i)}s_(e)}return e.anchor&&s(e.anchor)}const ES=_S;function s_(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}function a_(t,e,n,r){const o=e.targetStart=n(""),i=e.targetAnchor=n("");return o[i_]=i,t&&(r(o,t),r(i,t)),i}const zt=MS;function IS(t){return TS(t)}function TS(t,e){const n=lb();n.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:s,createText:a,createComment:l,setText:u,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=fn,insertStaticContent:_}=t,k=(w,C,V,j=null,$=null,W=null,X=void 0,q=null,Q=!!C.dynamicChildren)=>{if(w===C)return;w&&!No(w,C)&&(j=F(w),Je(w,$,W,!0),w=null),C.patchFlag===-2&&(Q=!1,C.dynamicChildren=null);const{type:K,ref:ee,shapeFlag:le}=C;switch(K){case Fc:O(w,C,V,j);break;case Kt:R(w,C,V,j);break;case Rl:w==null&&x(C,V,j,X);break;case He:S(w,C,V,j,$,W,X,q,Q);break;default:le&1?Y(w,C,V,j,$,W,X,q,Q):le&6?I(w,C,V,j,$,W,X,q,Q):(le&64||le&128)&&K.process(w,C,V,j,$,W,X,q,Q,re)}ee!=null&&$&&$d(ee,w&&w.ref,W,C||w,!C)},O=(w,C,V,j)=>{if(w==null)r(C.el=a(C.children),V,j);else{const $=C.el=w.el;C.children!==w.children&&u($,C.children)}},R=(w,C,V,j)=>{w==null?r(C.el=l(C.children||""),V,j):C.el=w.el},x=(w,C,V,j)=>{[w.el,w.anchor]=_(w.children,C,V,j,w.el,w.anchor)},N=({el:w,anchor:C},V,j)=>{let $;for(;w&&w!==C;)$=p(w),r(w,V,j),w=$;r(C,V,j)},M=({el:w,anchor:C})=>{let V;for(;w&&w!==C;)V=p(w),o(w),w=V;o(C)},Y=(w,C,V,j,$,W,X,q,Q)=>{C.type==="svg"?X="svg":C.type==="math"&&(X="mathml"),w==null?U(C,V,j,$,W,X,q,Q):b(w,C,$,W,X,q,Q)},U=(w,C,V,j,$,W,X,q)=>{let Q,K;const{props:ee,shapeFlag:le,transition:ae,dirs:se}=w;if(Q=w.el=s(w.type,W,ee&&ee.is,ee),le&8?d(Q,w.children):le&16&&v(w.children,Q,null,j,$,Fu(w,W),X,q),se&&Ao(w,null,j,"created"),E(Q,w,w.scopeId,X,j),ee){for(const Fe in ee)Fe!=="value"&&!Ds(Fe)&&i(Q,Fe,null,ee[Fe],W,j);"value"in ee&&i(Q,"value",null,ee.value,W),(K=ee.onVnodeBeforeMount)&&Nn(K,j,w)}se&&Ao(w,null,j,"beforeMount");const de=SS($,ae);de&&ae.beforeEnter(Q),r(Q,C,V),((K=ee&&ee.onVnodeMounted)||de||se)&&zt(()=>{K&&Nn(K,j,w),de&&ae.enter(Q),se&&Ao(w,null,j,"mounted")},$)},E=(w,C,V,j,$)=>{if(V&&g(w,V),j)for(let W=0;W<j.length;W++)g(w,j[W]);if($){let W=$.subTree;if(C===W){const X=$.vnode;E(w,X,X.scopeId,X.slotScopeIds,$.parent)}}},v=(w,C,V,j,$,W,X,q,Q=0)=>{for(let K=Q;K<w.length;K++){const ee=w[K]=q?Br(w[K]):Vn(w[K]);k(null,ee,C,V,j,$,W,X,q)}},b=(w,C,V,j,$,W,X)=>{const q=C.el=w.el;let{patchFlag:Q,dynamicChildren:K,dirs:ee}=C;Q|=w.patchFlag&16;const le=w.props||ot,ae=C.props||ot;let se;if(V&&Co(V,!1),(se=ae.onVnodeBeforeUpdate)&&Nn(se,V,C,w),ee&&Ao(C,w,V,"beforeUpdate"),V&&Co(V,!0),(le.innerHTML&&ae.innerHTML==null||le.textContent&&ae.textContent==null)&&d(q,""),K?T(w.dynamicChildren,K,q,V,j,Fu(C,$),W):X||we(w,C,q,null,V,j,Fu(C,$),W,!1),Q>0){if(Q&16)A(q,le,ae,V,$);else if(Q&2&&le.class!==ae.class&&i(q,"class",null,ae.class,$),Q&4&&i(q,"style",le.style,ae.style,$),Q&8){const de=C.dynamicProps;for(let Fe=0;Fe<de.length;Fe++){const Re=de[Fe],dt=le[Re],Zt=ae[Re];(Zt!==dt||Re==="value")&&i(q,Re,dt,Zt,$,V)}}Q&1&&w.children!==C.children&&d(q,C.children)}else!X&&K==null&&A(q,le,ae,V,$);((se=ae.onVnodeUpdated)||ee)&&zt(()=>{se&&Nn(se,V,C,w),ee&&Ao(C,w,V,"updated")},j)},T=(w,C,V,j,$,W,X)=>{for(let q=0;q<C.length;q++){const Q=w[q],K=C[q],ee=Q.el&&(Q.type===He||!No(Q,K)||Q.shapeFlag&70)?f(Q.el):V;k(Q,K,ee,null,j,$,W,X,!0)}},A=(w,C,V,j,$)=>{if(C!==V){if(C!==ot)for(const W in C)!Ds(W)&&!(W in V)&&i(w,W,C[W],null,$,j);for(const W in V){if(Ds(W))continue;const X=V[W],q=C[W];X!==q&&W!=="value"&&i(w,W,q,X,$,j)}"value"in V&&i(w,"value",C.value,V.value,$)}},S=(w,C,V,j,$,W,X,q,Q)=>{const K=C.el=w?w.el:a(""),ee=C.anchor=w?w.anchor:a("");let{patchFlag:le,dynamicChildren:ae,slotScopeIds:se}=C;se&&(q=q?q.concat(se):se),w==null?(r(K,V,j),r(ee,V,j),v(C.children||[],V,ee,$,W,X,q,Q)):le>0&&le&64&&ae&&w.dynamicChildren?(T(w.dynamicChildren,ae,V,$,W,X,q),(C.key!=null||$&&C===$.subTree)&&rf(w,C,!0)):we(w,C,V,ee,$,W,X,q,Q)},I=(w,C,V,j,$,W,X,q,Q)=>{C.slotScopeIds=q,w==null?C.shapeFlag&512?$.ctx.activate(C,V,j,X,Q):Ee(C,V,j,$,W,X,Q):Le(w,C,Q)},Ee=(w,C,V,j,$,W,X)=>{const q=w.component=HS(w,j,$);if(Vc(w)&&(q.ctx.renderer=re),KS(q,!1,X),q.asyncDep){if($&&$.registerDep(q,Se,X),!w.el){const Q=q.subTree=ue(Kt);R(null,Q,C,V)}}else Se(q,w,C,V,$,W,X)},Le=(w,C,V)=>{const j=C.component=w.component;if(LS(w,C,V))if(j.asyncDep&&!j.asyncResolved){ge(j,C,V);return}else j.next=C,HT(j.update),j.effect.dirty=!0,j.update();else C.el=w.el,j.vnode=C},Se=(w,C,V,j,$,W,X)=>{const q=()=>{if(w.isMounted){let{next:ee,bu:le,u:ae,parent:se,vnode:de}=w;{const ln=l_(w);if(ln){ee&&(ee.el=de.el,ge(w,ee,X)),ln.asyncDep.then(()=>{w.isUnmounted||q()});return}}let Fe=ee,Re;Co(w,!1),ee?(ee.el=de.el,ge(w,ee,X)):ee=de,le&&Pl(le),(Re=ee.props&&ee.props.onVnodeBeforeUpdate)&&Nn(Re,se,ee,de),Co(w,!0);const dt=Uu(w),Zt=w.subTree;w.subTree=dt,k(Zt,dt,f(Zt.el),F(Zt),w,$,W),ee.el=dt.el,Fe===null&&VS(w,dt.el),ae&&zt(ae,$),(Re=ee.props&&ee.props.onVnodeUpdated)&&zt(()=>Nn(Re,se,ee,de),$)}else{let ee;const{el:le,props:ae}=C,{bm:se,m:de,parent:Fe}=w,Re=$s(C);if(Co(w,!1),se&&Pl(se),!Re&&(ee=ae&&ae.onVnodeBeforeMount)&&Nn(ee,Fe,C),Co(w,!0),le&&We){const dt=()=>{w.subTree=Uu(w),We(le,w.subTree,w,$,null)};Re?C.type.__asyncLoader().then(()=>!w.isUnmounted&&dt()):dt()}else{const dt=w.subTree=Uu(w);k(null,dt,V,j,w,$,W),C.el=dt.el}if(de&&zt(de,$),!Re&&(ee=ae&&ae.onVnodeMounted)){const dt=C;zt(()=>Nn(ee,Fe,dt),$)}(C.shapeFlag&256||Fe&&$s(Fe.vnode)&&Fe.vnode.shapeFlag&256)&&w.a&&zt(w.a,$),w.isMounted=!0,C=V=j=null}},Q=w.effect=new Uh(q,fn,()=>Qh(K),w.scope),K=w.update=()=>{Q.dirty&&Q.run()};K.i=w,K.id=w.uid,Co(w,!0),K()},ge=(w,C,V)=>{C.component=w;const j=w.vnode.props;w.vnode=C,w.next=null,pS(w,C.props,j,V),vS(w,C.children,V),go(),Dm(w),yo()},we=(w,C,V,j,$,W,X,q,Q=!1)=>{const K=w&&w.children,ee=w?w.shapeFlag:0,le=C.children,{patchFlag:ae,shapeFlag:se}=C;if(ae>0){if(ae&128){yt(K,le,V,j,$,W,X,q,Q);return}else if(ae&256){It(K,le,V,j,$,W,X,q,Q);return}}se&8?(ee&16&&jt(K,$,W),le!==K&&d(V,le)):ee&16?se&16?yt(K,le,V,j,$,W,X,q,Q):jt(K,$,W,!0):(ee&8&&d(V,""),se&16&&v(le,V,j,$,W,X,q,Q))},It=(w,C,V,j,$,W,X,q,Q)=>{w=w||_i,C=C||_i;const K=w.length,ee=C.length,le=Math.min(K,ee);let ae;for(ae=0;ae<le;ae++){const se=C[ae]=Q?Br(C[ae]):Vn(C[ae]);k(w[ae],se,V,null,$,W,X,q,Q)}K>ee?jt(w,$,W,!0,!1,le):v(C,V,j,$,W,X,q,Q,le)},yt=(w,C,V,j,$,W,X,q,Q)=>{let K=0;const ee=C.length;let le=w.length-1,ae=ee-1;for(;K<=le&&K<=ae;){const se=w[K],de=C[K]=Q?Br(C[K]):Vn(C[K]);if(No(se,de))k(se,de,V,null,$,W,X,q,Q);else break;K++}for(;K<=le&&K<=ae;){const se=w[le],de=C[ae]=Q?Br(C[ae]):Vn(C[ae]);if(No(se,de))k(se,de,V,null,$,W,X,q,Q);else break;le--,ae--}if(K>le){if(K<=ae){const se=ae+1,de=se<ee?C[se].el:j;for(;K<=ae;)k(null,C[K]=Q?Br(C[K]):Vn(C[K]),V,de,$,W,X,q,Q),K++}}else if(K>ae)for(;K<=le;)Je(w[K],$,W,!0),K++;else{const se=K,de=K,Fe=new Map;for(K=de;K<=ae;K++){const $t=C[K]=Q?Br(C[K]):Vn(C[K]);$t.key!=null&&Fe.set($t.key,K)}let Re,dt=0;const Zt=ae-de+1;let ln=!1,rs=0;const Pr=new Array(Zt);for(K=0;K<Zt;K++)Pr[K]=0;for(K=se;K<=le;K++){const $t=w[K];if(dt>=Zt){Je($t,$,W,!0);continue}let cn;if($t.key!=null)cn=Fe.get($t.key);else for(Re=de;Re<=ae;Re++)if(Pr[Re-de]===0&&No($t,C[Re])){cn=Re;break}cn===void 0?Je($t,$,W,!0):(Pr[cn-de]=K+1,cn>=rs?rs=cn:ln=!0,k($t,C[cn],V,null,$,W,X,q,Q),dt++)}const ni=ln?AS(Pr):_i;for(Re=ni.length-1,K=Zt-1;K>=0;K--){const $t=de+K,cn=C[$t],ri=$t+1<ee?C[$t+1].el:j;Pr[K]===0?k(null,cn,V,ri,$,W,X,q,Q):ln&&(Re<0||K!==ni[Re]?vt(cn,V,ri,2):Re--)}}},vt=(w,C,V,j,$=null)=>{const{el:W,type:X,transition:q,children:Q,shapeFlag:K}=w;if(K&6){vt(w.component.subTree,C,V,j);return}if(K&128){w.suspense.move(C,V,j);return}if(K&64){X.move(w,C,V,re);return}if(X===He){r(W,C,V);for(let le=0;le<Q.length;le++)vt(Q[le],C,V,j);r(w.anchor,C,V);return}if(X===Rl){N(w,C,V);return}if(j!==2&&K&1&&q)if(j===0)q.beforeEnter(W),r(W,C,V),zt(()=>q.enter(W),$);else{const{leave:le,delayLeave:ae,afterLeave:se}=q,de=()=>r(W,C,V),Fe=()=>{le(W,()=>{de(),se&&se()})};ae?ae(W,de,Fe):Fe()}else r(W,C,V)},Je=(w,C,V,j=!1,$=!1)=>{const{type:W,props:X,ref:q,children:Q,dynamicChildren:K,shapeFlag:ee,patchFlag:le,dirs:ae,cacheIndex:se}=w;if(le===-2&&($=!1),q!=null&&$d(q,null,V,w,!0),se!=null&&(C.renderCache[se]=void 0),ee&256){C.ctx.deactivate(w);return}const de=ee&1&&ae,Fe=!$s(w);let Re;if(Fe&&(Re=X&&X.onVnodeBeforeUnmount)&&Nn(Re,C,w),ee&6)Rn(w.component,V,j);else{if(ee&128){w.suspense.unmount(V,j);return}de&&Ao(w,null,C,"beforeUnmount"),ee&64?w.type.remove(w,C,V,re,j):K&&!K.hasOnce&&(W!==He||le>0&&le&64)?jt(K,C,V,!1,!0):(W===He&&le&384||!$&&ee&16)&&jt(Q,C,V),j&&Ze(w)}(Fe&&(Re=X&&X.onVnodeUnmounted)||de)&&zt(()=>{Re&&Nn(Re,C,w),de&&Ao(w,null,C,"unmounted")},V)},Ze=w=>{const{type:C,el:V,anchor:j,transition:$}=w;if(C===He){an(V,j);return}if(C===Rl){M(w);return}const W=()=>{o(V),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:X,delayLeave:q}=$,Q=()=>X(V,W);q?q(w.el,W,Q):Q()}else W()},an=(w,C)=>{let V;for(;w!==C;)V=p(w),o(w),w=V;o(C)},Rn=(w,C,V)=>{const{bum:j,scope:$,update:W,subTree:X,um:q,m:Q,a:K}=w;Wm(Q),Wm(K),j&&Pl(j),$.stop(),W&&(W.active=!1,Je(X,w,C,V)),q&&zt(q,C),zt(()=>{w.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},jt=(w,C,V,j=!1,$=!1,W=0)=>{for(let X=W;X<w.length;X++)Je(w[X],C,V,j,$)},F=w=>{if(w.shapeFlag&6)return F(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=p(w.anchor||w.el),V=C&&C[i_];return V?p(V):C};let ne=!1;const J=(w,C,V)=>{w==null?C._vnode&&Je(C._vnode,null,null,!0):k(C._vnode||null,w,C,null,null,null,V),C._vnode=w,ne||(ne=!0,Dm(),Nb(),ne=!1)},re={p:k,um:Je,m:vt,r:Ze,mt:Ee,mc:v,pc:we,pbc:T,n:F,o:t};let Pe,We;return{render:J,hydrate:Pe,createApp:hS(J,Pe)}}function Fu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Co({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function SS(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function rf(t,e,n=!1){const r=t.children,o=e.children;if(he(r)&&he(o))for(let i=0;i<r.length;i++){const s=r[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=Br(o[i]),a.el=s.el),!n&&a.patchFlag!==-2&&rf(s,a)),a.type===Fc&&(a.el=s.el)}}function AS(t){const e=t.slice(),n=[0];let r,o,i,s,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(o=n[n.length-1],t[o]<u){e[r]=o,n.push(r);continue}for(i=0,s=n.length-1;i<s;)a=i+s>>1,t[n[a]]<u?i=a+1:s=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=e[s];return n}function l_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:l_(e)}function Wm(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const CS=Symbol.for("v-scx"),xS=()=>yn(CS),vl={};function mn(t,e,n){return c_(t,e,n)}function c_(t,e,{immediate:n,deep:r,flush:o,once:i,onTrack:s,onTrigger:a}=ot){if(e&&i){const U=e;e=(...E)=>{U(...E),Y()}}const l=At,u=U=>r===!0?U:Hr(U,r===!1?1:void 0);let d,f=!1,p=!1;if(Yt(t)?(d=()=>t.value,f=Ni(t)):Ms(t)?(d=()=>u(t),f=!0):he(t)?(p=!0,f=t.some(U=>Ms(U)||Ni(U)),d=()=>t.map(U=>{if(Yt(U))return U.value;if(Ms(U))return u(U);if(ve(U))return no(U,l,2)})):ve(t)?e?d=()=>no(t,l,2):d=()=>(g&&g(),gn(t,l,3,[_])):d=fn,e&&r){const U=d;d=()=>Hr(U())}let g,_=U=>{g=N.onStop=()=>{no(U,l,4),g=N.onStop=void 0}},k;if(Uc)if(_=fn,e?n&&gn(e,l,3,[d(),p?[]:void 0,_]):d(),o==="sync"){const U=xS();k=U.__watcherHandles||(U.__watcherHandles=[])}else return fn;let O=p?new Array(t.length).fill(vl):vl;const R=()=>{if(!(!N.active||!N.dirty))if(e){const U=N.run();(r||f||(p?U.some((E,v)=>uo(E,O[v])):uo(U,O)))&&(g&&g(),gn(e,l,3,[U,O===vl?void 0:p&&O[0]===vl?[]:O,_]),O=U)}else N.run()};R.allowRecurse=!!e;let x;o==="sync"?x=R:o==="post"?x=()=>zt(R,l&&l.suspense):(R.pre=!0,l&&(R.id=l.uid),x=()=>Qh(R));const N=new Uh(d,fn,x),M=yT(),Y=()=>{N.stop(),M&&$h(M.effects,N)};return e?n?R():O=N.run():o==="post"?zt(N.run.bind(N),l&&l.suspense):N.run(),k&&k.push(Y),Y}function PS(t,e,n){const r=this.proxy,o=lt(t)?t.includes(".")?u_(r,t):()=>r[t]:t.bind(r,r);let i;ve(e)?i=e:(i=e.handler,n=e);const s=Na(this),a=c_(o,i.bind(r),n);return s(),a}function u_(t,e){const n=e.split(".");return()=>{let r=t;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function Hr(t,e=1/0,n){if(e<=0||!Xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Yt(t))Hr(t.value,e,n);else if(he(t))for(let r=0;r<t.length;r++)Hr(t[r],e,n);else if(xc(t)||wi(t))t.forEach(r=>{Hr(r,e,n)});else if(sb(t)){for(const r in t)Hr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Hr(t[r],e,n)}return t}const kS=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${An(e)}Modifiers`]||t[`${Xo(e)}Modifiers`];function OS(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ot;let o=n;const i=e.startsWith("update:"),s=i&&kS(r,e.slice(7));s&&(s.trim&&(o=n.map(d=>lt(d)?d.trim():d)),s.number&&(o=n.map(ql)));let a,l=r[a=Vu(e)]||r[a=Vu(An(e))];!l&&i&&(l=r[a=Vu(Xo(e))]),l&&gn(l,t,6,o);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gn(u,t,6,o)}}function d_(t,e,n=!1){const r=e.emitsCache,o=r.get(t);if(o!==void 0)return o;const i=t.emits;let s={},a=!1;if(!ve(t)){const l=u=>{const d=d_(u,e,!0);d&&(a=!0,gt(s,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Xe(t)&&r.set(t,null),null):(he(i)?i.forEach(l=>s[l]=null):gt(s,i),Xe(t)&&r.set(t,s),s)}function $c(t,e){return!t||!Cc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,Xo(e))||Ne(t,e))}function Uu(t){const{type:e,vnode:n,proxy:r,withProxy:o,propsOptions:[i],slots:s,attrs:a,emit:l,render:u,renderCache:d,props:f,data:p,setupState:g,ctx:_,inheritAttrs:k}=t,O=Gl(t);let R,x;try{if(n.shapeFlag&4){const M=o||r,Y=M;R=Vn(u.call(Y,M,d,f,g,p,_)),x=a}else{const M=e;R=Vn(M.length>1?M(f,{attrs:a,slots:s,emit:l}):M(f,null)),x=e.props?a:RS(a)}}catch(M){js.length=0,Rc(M,t,1),R=ue(Kt)}let N=R;if(x&&k!==!1){const M=Object.keys(x),{shapeFlag:Y}=N;M.length&&Y&7&&(i&&M.some(Mh)&&(x=NS(x,i)),N=ho(N,x,!1,!0))}return n.dirs&&(N=ho(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),R=N,Gl(O),R}const RS=t=>{let e;for(const n in t)(n==="class"||n==="style"||Cc(n))&&((e||(e={}))[n]=t[n]);return e},NS=(t,e)=>{const n={};for(const r in t)(!Mh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function LS(t,e,n){const{props:r,children:o,component:i}=t,{props:s,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?qm(r,s,u):!!s;if(l&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const p=d[f];if(s[p]!==r[p]&&!$c(u,p))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?qm(r,s,u):!0:!!s;return!1}function qm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(e[i]!==t[i]&&!$c(n,i))return!0}return!1}function VS({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const DS=t=>t.__isSuspense;function MS(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):KT(t)}const He=Symbol.for("v-fgt"),Fc=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),Rl=Symbol.for("v-stc"),js=[];let tn=null;function B(t=!1){js.push(tn=t?null:[])}function $S(){js.pop(),tn=js[js.length-1]||null}let ra=1;function Gm(t){ra+=t,t<0&&tn&&(tn.hasOnce=!0)}function h_(t){return t.dynamicChildren=ra>0?tn||_i:null,$S(),ra>0&&tn&&tn.push(t),t}function te(t,e,n,r,o,i){return h_(P(t,e,n,r,o,i,!0))}function Ue(t,e,n,r,o){return h_(ue(t,e,n,r,o,!0))}function Yl(t){return t?t.__v_isVNode===!0:!1}function No(t,e){return t.type===e.type&&t.key===e.key}const f_=({key:t})=>t??null,Nl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?lt(t)||Yt(t)||ve(t)?{i:wt,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,r=0,o=null,i=t===He?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&f_(e),ref:e&&Nl(e),scopeId:Lc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:wt};return a?(of(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=lt(n)?8:16),ra>0&&!s&&tn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&tn.push(l),l}const ue=FS;function FS(t,e=null,n=null,r=0,o=null,i=!1){if((!t||t===Wb)&&(t=Kt),Yl(t)){const a=ho(t,e,!0);return n&&of(a,n),ra>0&&!i&&tn&&(a.shapeFlag&6?tn[tn.indexOf(t)]=a:tn.push(a)),a.patchFlag=-2,a}if(YS(t)&&(t=t.__vccOpts),e){e=US(e);let{class:a,style:l}=e;a&&!lt(a)&&(e.class=pn(a)),Xe(l)&&(Ab(l)&&!he(l)&&(l=gt({},l)),e.style=Fo(l))}const s=lt(t)?1:DS(t)?128:bS(t)?64:Xe(t)?4:ve(t)?2:0;return P(t,e,n,r,o,s,i,!0)}function US(t){return t?Ab(t)||Jb(t)?gt({},t):t:null}function ho(t,e,n=!1,r=!1){const{props:o,ref:i,patchFlag:s,children:a,transition:l}=t,u=e?Z(o||{},e):o,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&f_(u),ref:e&&e.ref?n&&i?he(i)?i.concat(Nl(e)):[i,Nl(e)]:Nl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ho(t.ssContent),ssFallback:t.ssFallback&&ho(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Li(d,l.clone(d)),d}function rt(t=" ",e=0){return ue(Fc,null,t,e)}function jS(t,e){const n=ue(Rl,null,t);return n.staticCount=e,n}function Ht(t="",e=!1){return e?(B(),Ue(Kt,null,t)):ue(Kt,null,t)}function Vn(t){return t==null||typeof t=="boolean"?ue(Kt):he(t)?ue(He,null,t.slice()):typeof t=="object"?Br(t):ue(Fc,null,String(t))}function Br(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ho(t)}function of(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const o=e.default;o&&(o._c&&(o._d=!1),of(t,o()),o._c&&(o._d=!0));return}else{n=32;const o=e._;!o&&!Jb(e)?e._ctx=wt:o===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ve(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),r&64?(n=16,e=[rt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Z(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const o in r)if(o==="class")e.class!==r.class&&(e.class=pn([e.class,r.class]));else if(o==="style")e.style=Fo([e.style,r.style]);else if(Cc(o)){const i=e[o],s=r[o];s&&i!==s&&!(he(i)&&i.includes(s))&&(e[o]=i?[].concat(i,s):s)}else o!==""&&(e[o]=r[o])}return e}function Nn(t,e,n,r=null){gn(t,e,7,[n,r])}const BS=Qb();let zS=0;function HS(t,e,n){const r=t.type,o=(e?e.appContext:t.appContext)||BS,i={uid:zS++,vnode:t,type:r,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new fb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:e_(r,o),emitsOptions:d_(r,o),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:r.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=OS.bind(null,i),t.ce&&t.ce(i),i}let At=null;const sf=()=>At||wt;let Xl,Ud;{const t=lb(),e=(n,r)=>{let o;return(o=t[n])||(o=t[n]=[]),o.push(r),i=>{o.length>1?o.forEach(s=>s(i)):o[0](i)}};Xl=e("__VUE_INSTANCE_SETTERS__",n=>At=n),Ud=e("__VUE_SSR_SETTERS__",n=>Uc=n)}const Na=t=>{const e=At;return Xl(t),t.scope.on(),()=>{t.scope.off(),Xl(e)}},Qm=()=>{At&&At.scope.off(),Xl(null)};function p_(t){return t.vnode.shapeFlag&4}let Uc=!1;function KS(t,e=!1,n=!1){e&&Ud(e);const{props:r,children:o}=t.vnode,i=p_(t);fS(t,r,i,e),yS(t,o,n);const s=i?WS(t,e):void 0;return e&&Ud(!1),s}function WS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,iS);const{setup:r}=n;if(r){const o=t.setupContext=r.length>1?GS(t):null,i=Na(t);go();const s=no(r,t,0,[t.props,o]);if(yo(),i(),ob(s)){if(s.then(Qm,Qm),e)return s.then(a=>{Ym(t,a,e)}).catch(a=>{Rc(a,t,0)});t.asyncDep=s}else Ym(t,s,e)}else m_(t,e)}function Ym(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Xe(e)&&(t.setupState=kb(e)),m_(t,n)}let Xm;function m_(t,e,n){const r=t.type;if(!t.render){if(!e&&Xm&&!r.render){const o=r.template||tf(t).template;if(o){const{isCustomElement:i,compilerOptions:s}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=gt(gt({isCustomElement:i,delimiters:a},s),l);r.render=Xm(o,u)}}t.render=r.render||fn}{const o=Na(t);go();try{sS(t)}finally{yo(),o()}}}const qS={get(t,e){return Qt(t,"get",""),t[e]}};function GS(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,qS),slots:t.slots,emit:t.emit,expose:e}}function jc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(kb(MT(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fs)return Fs[n](t)},has(e,n){return n in e||n in Fs}})):t.proxy}function QS(t,e=!0){return ve(t)?t.displayName||t.name:t.name||e&&t.__name}function YS(t){return ve(t)&&"__vccOpts"in t}const _t=(t,e)=>$T(t,e,Uc);function Bc(t,e,n){const r=arguments.length;return r===2?Xe(e)&&!he(e)?Yl(e)?ue(t,null,[e]):ue(t,e):ue(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yl(n)&&(n=[n]),ue(t,e,n))}const XS="3.4.37";/**
* @vue/runtime-dom v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const JS="http://www.w3.org/2000/svg",ZS="http://www.w3.org/1998/Math/MathML",tr=typeof document<"u"?document:null,Jm=tr&&tr.createElement("template"),eA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const o=e==="svg"?tr.createElementNS(JS,t):e==="mathml"?tr.createElementNS(ZS,t):n?tr.createElement(t,{is:n}):tr.createElement(t);return t==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:t=>tr.createTextNode(t),createComment:t=>tr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>tr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,o,i){const s=n?n.previousSibling:e.lastChild;if(o&&(o===i||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{Jm.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Jm.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Vr="transition",ys="animation",Vi=Symbol("_vtc"),vo=(t,{slots:e})=>Bc(GT,y_(t),e);vo.displayName="Transition";const g_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tA=vo.props=gt({},$b,g_),xo=(t,e=[])=>{he(t)?t.forEach(n=>n(...e)):t&&t(...e)},Zm=t=>t?he(t)?t.some(e=>e.length>1):t.length>1:!1;function y_(t){const e={};for(const S in t)S in g_||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:o,enterFromClass:i=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=s,appearToClass:d=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,_=nA(o),k=_&&_[0],O=_&&_[1],{onBeforeEnter:R,onEnter:x,onEnterCancelled:N,onLeave:M,onLeaveCancelled:Y,onBeforeAppear:U=R,onAppear:E=x,onAppearCancelled:v=N}=e,b=(S,I,Ee)=>{Fr(S,I?d:a),Fr(S,I?u:s),Ee&&Ee()},T=(S,I)=>{S._isLeaving=!1,Fr(S,f),Fr(S,g),Fr(S,p),I&&I()},A=S=>(I,Ee)=>{const Le=S?E:x,Se=()=>b(I,S,Ee);xo(Le,[I,Se]),eg(()=>{Fr(I,S?l:i),er(I,S?d:a),Zm(Le)||tg(I,r,k,Se)})};return gt(e,{onBeforeEnter(S){xo(R,[S]),er(S,i),er(S,s)},onBeforeAppear(S){xo(U,[S]),er(S,l),er(S,u)},onEnter:A(!1),onAppear:A(!0),onLeave(S,I){S._isLeaving=!0;const Ee=()=>T(S,I);er(S,f),er(S,p),b_(),eg(()=>{S._isLeaving&&(Fr(S,f),er(S,g),Zm(M)||tg(S,r,O,Ee))}),xo(M,[S,Ee])},onEnterCancelled(S){b(S,!1),xo(N,[S])},onAppearCancelled(S){b(S,!0),xo(v,[S])},onLeaveCancelled(S){T(S),xo(Y,[S])}})}function nA(t){if(t==null)return null;if(Xe(t))return[ju(t.enter),ju(t.leave)];{const e=ju(t);return[e,e]}}function ju(t){return sT(t)}function er(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Vi]||(t[Vi]=new Set)).add(e)}function Fr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Vi];n&&(n.delete(e),n.size||(t[Vi]=void 0))}function eg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let rA=0;function tg(t,e,n,r){const o=t._endId=++rA,i=()=>{o===t._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:a,propCount:l}=v_(t,e);if(!s)return r();const u=s+"end";let d=0;const f=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++d>=l&&f()};setTimeout(()=>{d<l&&f()},a+1),t.addEventListener(u,p)}function v_(t,e){const n=window.getComputedStyle(t),r=_=>(n[_]||"").split(", "),o=r(`${Vr}Delay`),i=r(`${Vr}Duration`),s=ng(o,i),a=r(`${ys}Delay`),l=r(`${ys}Duration`),u=ng(a,l);let d=null,f=0,p=0;e===Vr?s>0&&(d=Vr,f=s,p=i.length):e===ys?u>0&&(d=ys,f=u,p=l.length):(f=Math.max(s,u),d=f>0?s>u?Vr:ys:null,p=d?d===Vr?i.length:l.length:0);const g=d===Vr&&/\b(transform|all)(,|$)/.test(r(`${Vr}Property`).toString());return{type:d,timeout:f,propCount:p,hasTransform:g}}function ng(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>rg(n)+rg(t[r])))}function rg(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function b_(){return document.body.offsetHeight}function oA(t,e,n){const r=t[Vi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Jl=Symbol("_vod"),__=Symbol("_vsh"),La={beforeMount(t,{value:e},{transition:n}){t[Jl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):vs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),vs(t,!0),r.enter(t)):r.leave(t,()=>{vs(t,!1)}):vs(t,e))},beforeUnmount(t,{value:e}){vs(t,e)}};function vs(t,e){t.style.display=e?t[Jl]:"none",t[__]=!e}const iA=Symbol(""),sA=/(^|;)\s*display\s*:/;function aA(t,e,n){const r=t.style,o=lt(n);let i=!1;if(n&&!o){if(e)if(lt(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();n[a]==null&&Ll(r,a,"")}else for(const s in e)n[s]==null&&Ll(r,s,"");for(const s in n)s==="display"&&(i=!0),Ll(r,s,n[s])}else if(o){if(e!==n){const s=r[iA];s&&(n+=";"+s),r.cssText=n,i=sA.test(n)}}else e&&t.removeAttribute("style");Jl in t&&(t[Jl]=i?r.display:"",t[__]&&(r.display="none"))}const og=/\s*!important$/;function Ll(t,e,n){if(he(n))n.forEach(r=>Ll(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=lA(t,e);og.test(n)?t.setProperty(Xo(r),n.replace(og,""),"important"):t[r]=n}}const ig=["Webkit","Moz","ms"],Bu={};function lA(t,e){const n=Bu[e];if(n)return n;let r=An(e);if(r!=="filter"&&r in t)return Bu[e]=r;r=kc(r);for(let o=0;o<ig.length;o++){const i=ig[o]+r;if(i in t)return Bu[e]=i}return e}const sg="http://www.w3.org/1999/xlink";function ag(t,e,n,r,o,i=hT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(sg,e.slice(6,e.length)):t.setAttributeNS(sg,e,n):n==null||i&&!ub(n)?t.removeAttribute(e):t.setAttribute(e,i?"":qn(n)?String(n):n)}function cA(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const s=o==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?"":String(n);(s!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const s=typeof t[e];s==="boolean"?n=ub(n):n==null&&s==="string"?(n="",i=!0):s==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Kr(t,e,n,r){t.addEventListener(e,n,r)}function uA(t,e,n,r){t.removeEventListener(e,n,r)}const lg=Symbol("_vei");function dA(t,e,n,r,o=null){const i=t[lg]||(t[lg]={}),s=i[e];if(r&&s)s.value=r;else{const[a,l]=hA(e);if(r){const u=i[e]=mA(r,o);Kr(t,a,u,l)}else s&&(uA(t,a,s,l),i[e]=void 0)}}const cg=/(?:Once|Passive|Capture)$/;function hA(t){let e;if(cg.test(t)){e={};let r;for(;r=t.match(cg);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xo(t.slice(2)),e]}let zu=0;const fA=Promise.resolve(),pA=()=>zu||(fA.then(()=>zu=0),zu=Date.now());function mA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;gn(gA(r,n.value),e,5,[r])};return n.value=t,n.attached=pA(),n}function gA(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>o=>!o._stopped&&r&&r(o))}else return e}const ug=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,yA=(t,e,n,r,o,i)=>{const s=o==="svg";e==="class"?oA(t,r,s):e==="style"?aA(t,n,r):Cc(e)?Mh(e)||dA(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vA(t,e,r,s))?(cA(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ag(t,e,r,s,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ag(t,e,r,s))};function vA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ug(e)&&ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return ug(e)&&lt(n)?!1:e in t}const w_=new WeakMap,E_=new WeakMap,Zl=Symbol("_moveCb"),dg=Symbol("_enterCb"),I_={name:"TransitionGroup",props:gt({},tA,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=sf(),r=Mb();let o,i;return zb(()=>{if(!o.length)return;const s=t.moveClass||`${t.name||"v"}-move`;if(!TA(o[0].el,n.vnode.el,s))return;o.forEach(wA),o.forEach(EA);const a=o.filter(IA);b_(),a.forEach(l=>{const u=l.el,d=u.style;er(u,s),d.transform=d.webkitTransform=d.transitionDuration="";const f=u[Zl]=p=>{p&&p.target!==u||(!p||/transform$/.test(p.propertyName))&&(u.removeEventListener("transitionend",f),u[Zl]=null,Fr(u,s))};u.addEventListener("transitionend",f)})}),()=>{const s=$e(t),a=y_(s);let l=s.tag||He;if(o=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(o.push(d),Li(d,na(d,a,r,n)),w_.set(d,d.el.getBoundingClientRect()))}i=e.default?Yh(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&Li(d,na(d,a,r,n))}return ue(l,null,i)}}},bA=t=>delete t.mode;I_.props;const _A=I_;function wA(t){const e=t.el;e[Zl]&&e[Zl](),e[dg]&&e[dg]()}function EA(t){E_.set(t,t.el.getBoundingClientRect())}function IA(t){const e=w_.get(t),n=E_.get(t),r=e.left-n.left,o=e.top-n.top;if(r||o){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${o}px)`,i.transitionDuration="0s",t}}function TA(t,e,n){const r=t.cloneNode(),o=t[Vi];o&&o.forEach(a=>{a.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=v_(r);return i.removeChild(r),s}const Di=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>Pl(e,n):e};function SA(t){t.target.composing=!0}function hg(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fr=Symbol("_assign"),rr={created(t,{modifiers:{lazy:e,trim:n,number:r}},o){t[fr]=Di(o);const i=r||o.props&&o.props.type==="number";Kr(t,e?"change":"input",s=>{if(s.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ql(a)),t[fr](a)}),n&&Kr(t,"change",()=>{t.value=t.value.trim()}),e||(Kr(t,"compositionstart",SA),Kr(t,"compositionend",hg),Kr(t,"change",hg))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:o,number:i}},s){if(t[fr]=Di(s),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?ql(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||o&&t.value.trim()===l)||(t.value=l))}},AA={created(t,{value:e},n){t.checked=Ri(e,n.props.value),t[fr]=Di(n),Kr(t,"change",()=>{t[fr](oa(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[fr]=Di(r),e!==n&&(t.checked=Ri(e,r.props.value))}},Bs={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const o=xc(e);Kr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,s=>s.selected).map(s=>n?ql(oa(s)):oa(s));t[fr](t.multiple?o?new Set(i):i:i[0]),t._assigning=!0,Nc(()=>{t._assigning=!1})}),t[fr]=Di(r)},mounted(t,{value:e,modifiers:{number:n}}){fg(t,e)},beforeUpdate(t,e,n){t[fr]=Di(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||fg(t,e)}};function fg(t,e,n){const r=t.multiple,o=he(e);if(!(r&&!o&&!xc(e))){for(let i=0,s=t.options.length;i<s;i++){const a=t.options[i],l=oa(a);if(r)if(o){const u=typeof l;u==="string"||u==="number"?a.selected=e.some(d=>String(d)===String(l)):a.selected=pT(e,l)>-1}else a.selected=e.has(l);else if(Ri(oa(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function oa(t){return"_value"in t?t._value:t.value}const CA=["ctrl","shift","alt","meta"],xA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>CA.some(n=>t[`${n}Key`]&&!e.includes(n))},af=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(o,...i)=>{for(let s=0;s<e.length;s++){const a=xA[e[s]];if(a&&a(o,e))return}return t(o,...i)})},PA=gt({patchProp:yA},eA);let pg;function kA(){return pg||(pg=IS(PA))}const OA=(...t)=>{const e=kA().createApp(...t),{mount:n}=e;return e.mount=r=>{const o=NA(r);if(!o)return;const i=e._component;!ve(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,RA(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},e};function RA(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function NA(t){return lt(t)?document.querySelector(t):t}function mg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function or(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mg(Object(n),!0).forEach(function(r){Bt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function LA(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function VA(t){var e=LA(t,"string");return typeof e=="symbol"?e:e+""}function ec(t){"@babel/helpers - typeof";return ec=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ec(t)}function Bt(t,e,n){return e=VA(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function DA(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function MA(t,e){if(t==null)return{};var n=DA(t,e),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var $A=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T_={exports:{}};(function(t){(function(e){var n=function(R,x,N){if(!u(x)||f(x)||p(x)||g(x)||l(x))return x;var M,Y=0,U=0;if(d(x))for(M=[],U=x.length;Y<U;Y++)M.push(n(R,x[Y],N));else{M={};for(var E in x)Object.prototype.hasOwnProperty.call(x,E)&&(M[R(E,N)]=n(R,x[E],N))}return M},r=function(R,x){x=x||{};var N=x.separator||"_",M=x.split||/(?=[A-Z])/;return R.split(M).join(N)},o=function(R){return _(R)?R:(R=R.replace(/[\-_\s]+(.)?/g,function(x,N){return N?N.toUpperCase():""}),R.substr(0,1).toLowerCase()+R.substr(1))},i=function(R){var x=o(R);return x.substr(0,1).toUpperCase()+x.substr(1)},s=function(R,x){return r(R,x).toLowerCase()},a=Object.prototype.toString,l=function(R){return typeof R=="function"},u=function(R){return R===Object(R)},d=function(R){return a.call(R)=="[object Array]"},f=function(R){return a.call(R)=="[object Date]"},p=function(R){return a.call(R)=="[object RegExp]"},g=function(R){return a.call(R)=="[object Boolean]"},_=function(R){return R=R-0,R===R},k=function(R,x){var N=x&&"process"in x?x.process:x;return typeof N!="function"?R:function(M,Y){return N(M,R,Y)}},O={camelize:o,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(R,x){return n(k(o,x),R)},decamelizeKeys:function(R,x){return n(k(s,x),R,x)},pascalizeKeys:function(R,x){return n(k(i,x),R)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=O:e.humps=O})($A)})(T_);var FA=T_.exports,UA=["class","style"];function jA(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),o=FA.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[o]=i,e},{})}function BA(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function S_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return S_(l)}),o=Object.keys(t.attributes||{}).reduce(function(l,u){var d=t.attributes[u];switch(u){case"class":l.class=BA(d);break;case"style":l.style=jA(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,a=MA(n,UA);return Bc(t.tag,or(or(or({},e),{},{class:o.class,style:or(or({},o.style),s)},o.attrs),a),r)}var A_=!1;try{A_=!0}catch{}function zA(){if(!A_&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Hu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Bt({},t,e):{}}function HA(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Bt(Bt(Bt(Bt(Bt(Bt(Bt(Bt(Bt(Bt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Bt(Bt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function gg(t){if(t&&ec(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(xd.icon)return xd.icon(t);if(t===null)return null;if(ec(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var KA=Xh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,o=_t(function(){return gg(e.icon)}),i=_t(function(){return Hu("classes",HA(e))}),s=_t(function(){return Hu("transform",typeof e.transform=="string"?xd.transform(e.transform):e.transform)}),a=_t(function(){return Hu("mask",gg(e.mask))}),l=_t(function(){return eT(o.value,or(or(or(or({},i.value),s.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});mn(l,function(d){if(!d)return zA("Could not find one or more icon(s)",o.value,a.value)},{immediate:!0});var u=_t(function(){return l.value?S_(l.value.abstract[0],{},r):null});return function(){return u.value}}});const WA={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},qA={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},GA={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};var QA=Object.defineProperty,yg=Object.getOwnPropertySymbols,YA=Object.prototype.hasOwnProperty,XA=Object.prototype.propertyIsEnumerable,vg=(t,e,n)=>e in t?QA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,JA=(t,e)=>{for(var n in e||(e={}))YA.call(e,n)&&vg(t,n,e[n]);if(yg)for(var n of yg(e))XA.call(e,n)&&vg(t,n,e[n]);return t};function Sr(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function jd(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),r=Array.isArray(e),o,i,s;if(n&&r){if(i=t.length,i!=e.length)return!1;for(o=i;o--!==0;)if(!jd(t[o],e[o]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==e.toString();var f=Object.keys(t);if(i=f.length,i!==Object.keys(e).length)return!1;for(o=i;o--!==0;)if(!Object.prototype.hasOwnProperty.call(e,f[o]))return!1;for(o=i;o--!==0;)if(s=f[o],!jd(t[s],e[s]))return!1;return!0}return t!==t&&e!==e}function zc(t){return!!(t&&t.constructor&&t.call&&t.apply)}function tt(t){return!Sr(t)}function nr(t,e){if(!t||!e)return null;try{const n=t[e];if(tt(n))return n}catch{}if(Object.keys(t).length){if(zc(e))return e(t);if(e.indexOf(".")===-1)return t[e];{let n=e.split("."),r=t;for(let o=0,i=n.length;o<i;++o){if(r==null)return null;r=r[n[o]]}return r}}return null}function C_(t,e,n){return n?nr(t,n)===nr(e,n):jd(t,e)}function bg(t,e){let n=-1;if(tt(t))try{n=t.findLastIndex(e)}catch{n=t.lastIndexOf([...t].reverse().find(e))}return n}function Gn(t,e=!0){return t instanceof Object&&t.constructor===Object&&(e||Object.keys(t).length!==0)}function Fn(t,...e){return zc(t)?t(...e):t}function qt(t,e=!0){return typeof t=="string"&&(e||t!=="")}function In(t){return qt(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function lf(t,e="",n={}){const r=In(e).split("."),o=r.shift();return o?Gn(t)?lf(Fn(t[Object.keys(t).find(i=>In(i)===o)||""],n),r.join("."),n):void 0:Fn(t,n)}function cf(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}function x_(t){return tt(t)&&!isNaN(t)}function ZA(t=""){return tt(t)&&t.length===1&&!!t.match(/\S| /)}function sr(t,e){if(e){const n=e.test(t);return e.lastIndex=0,n}return!1}function eC(...t){const e=(n={},r={})=>{const o=JA({},n);return Object.keys(r).forEach(i=>{Gn(r[i])&&i in n&&Gn(n[i])?o[i]=e(n[i],r[i]):o[i]=r[i]}),o};return t.reduce((n,r,o)=>o===0?r:e(n,r),{})}function zs(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function dn(t){return t&&t.search(/[\xC0-\xFF]/g)>-1&&(t=t.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),t}function tC(t){return qt(t,!1)?t[0].toUpperCase()+t.slice(1):t}function P_(t){return qt(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,n)=>n===0?e:"-"+e.toLowerCase()).toLowerCase():t}function _g(t){return qt(t)?t.replace(/[A-Z]/g,(e,n)=>n===0?e:"."+e.toLowerCase()).toLowerCase():t}function Hc(){const t=new Map;return{on(e,n){let r=t.get(e);return r?r.push(n):r=[n],t.set(e,r),this},off(e,n){let r=t.get(e);return r&&r.splice(r.indexOf(n)>>>0,1),this},emit(e,n){let r=t.get(e);r&&r.slice().map(o=>{o(n)})},clear(){t.clear()}}}var nC=Object.defineProperty,rC=Object.defineProperties,oC=Object.getOwnPropertyDescriptors,tc=Object.getOwnPropertySymbols,k_=Object.prototype.hasOwnProperty,O_=Object.prototype.propertyIsEnumerable,wg=(t,e,n)=>e in t?nC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,bs=(t,e)=>{for(var n in e||(e={}))k_.call(e,n)&&wg(t,n,e[n]);if(tc)for(var n of tc(e))O_.call(e,n)&&wg(t,n,e[n]);return t},Ku=(t,e)=>rC(t,oC(e)),_s=(t,e)=>{var n={};for(var r in t)k_.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&tc)for(var r of tc(t))e.indexOf(r)<0&&O_.call(t,r)&&(n[r]=t[r]);return n},iC=Hc(),En=iC;function Eg(t,e){cf(t)?t.push(...e||[]):Gn(t)&&Object.assign(t,e)}function sC(t){return Gn(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Ig(t,e=""){return["opacity","z-index","line-height","font-weight","flex","flex-grow","flex-shrink","order"].some(r=>e.endsWith(r))?t:`${t}`.trim().split(" ").map(i=>x_(i)?`${i}px`:i).join(" ")}function aC(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Bd(t="",e=""){return aC(`${qt(t,!1)&&qt(e,!1)?`${t}-`:t}${e}`)}function R_(t="",e=""){return`--${Bd(t,e)}`}function N_(t,e="",n="",r=[],o){if(qt(t)){const i=/{([^}]*)}/g,s=t.trim();if(sr(s,i)){const a=s.replaceAll(i,d=>{const p=d.replace(/{|}/g,"").split(".").filter(g=>!r.some(_=>sr(g,_)));return`var(${R_(n,P_(p.join("-")))}${tt(o)?`, ${o}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,u=/var\([^)]+\)/g;return sr(a.replace(u,"0"),l)?`calc(${a})`:a}return Ig(s,e)}else if(x_(t))return Ig(t,e)}function lC(t,e,n){qt(e,!1)&&t.push(`${e}:${n};`)}function Cs(t,e){return t?`${t}{${e}}`:""}var Wu=(...t)=>cC(ze.getTheme(),...t),cC=(t={},e,n,r="variable")=>{if(e){const{variable:o,options:i}=ze.defaults||{},{prefix:s,transform:a}=(t==null?void 0:t.options)||i||{},u=sr(e,/{([^}]*)}/g)?e:`{${e}}`;return r==="value"||a==="strict"?ze.getTokenValue(e):N_(u,void 0,s,[o.excludedKeyRegex],n)}return""};function uC(t,e={}){const n=ze.defaults.variable,{prefix:r=n.prefix,selector:o=n.selector,excludedKeyRegex:i=n.excludedKeyRegex}=e,s=(u,d="")=>Object.entries(u).reduce((f,[p,g])=>{const _=sr(p,i)?Bd(d):Bd(d,P_(p)),k=sC(g);if(Gn(k)){const{variables:O,tokens:R}=s(k,_);Eg(f.tokens,R),Eg(f.variables,O)}else f.tokens.push((r?_.replace(`${r}-`,""):_).replaceAll("-",".")),lC(f.variables,R_(_),N_(k,_,r,[i]));return f},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(t,r);return{value:a,tokens:l,declarations:a.join(""),css:Cs(o,a.join(""))}}var bn={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){const e=Object.keys(this.rules).filter(n=>n!=="custom").map(n=>this.rules[n]);return[t].flat().map(n=>{var r;return(r=e.map(o=>o.resolve(n)).find(o=>o.matched))!=null?r:this.rules.custom.resolve(n)})}},_toVariables(t,e){return uC(t,{prefix:e==null?void 0:e.prefix})},getCommon({name:t="",theme:e={},params:n,set:r,defaults:o}){var i,s,a,l;const{preset:u,options:d}=e;let f,p,g,_;if(tt(u)){const{primitive:k,semantic:O}=u,R=O||{},{colorScheme:x}=R,N=_s(R,["colorScheme"]),M=x||{},{dark:Y}=M,U=_s(M,["dark"]),E=tt(k)?this._toVariables({primitive:k},d):{},v=tt(N)?this._toVariables({semantic:N},d):{},b=tt(U)?this._toVariables({light:U},d):{},T=tt(Y)?this._toVariables({dark:Y},d):{},[A,S]=[(i=E.declarations)!=null?i:"",E.tokens],[I,Ee]=[(s=v.declarations)!=null?s:"",v.tokens||[]],[Le,Se]=[(a=b.declarations)!=null?a:"",b.tokens||[]],[ge,we]=[(l=T.declarations)!=null?l:"",T.tokens||[]];f=this.transformCSS(t,A,"light","variable",d,r,o),p=S;const It=this.transformCSS(t,`${I}${Le}color-scheme:light`,"light","variable",d,r,o),yt=this.transformCSS(t,`${ge}color-scheme:dark`,"dark","variable",d,r,o);g=`${It}${yt}`,_=[...new Set([...Ee,...Se,...we])]}return{primitive:{css:f,tokens:p},semantic:{css:g,tokens:_}}},getPreset({name:t="",preset:e={},options:n,params:r,set:o,defaults:i,selector:s}){var a,l,u;const d=t.replace("-directive",""),f=e,{colorScheme:p}=f,g=_s(f,["colorScheme"]),_=p||{},{dark:k}=_,O=_s(_,["dark"]),R=tt(g)?this._toVariables({[d]:g},n):{},x=tt(O)?this._toVariables({[d]:O},n):{},N=tt(k)?this._toVariables({[d]:k},n):{},[M,Y]=[(a=R.declarations)!=null?a:"",R.tokens||[]],[U,E]=[(l=x.declarations)!=null?l:"",x.tokens||[]],[v,b]=[(u=N.declarations)!=null?u:"",N.tokens||[]],T=[...new Set([...Y,...E,...b])],A=this.transformCSS(d,`${M}${U}`,"light","variable",n,o,i,s),S=this.transformCSS(d,v,"dark","variable",n,o,i,s);return{css:`${A}${S}`,tokens:T}},getPresetC({name:t="",theme:e={},params:n,set:r,defaults:o}){var i;const{preset:s,options:a}=e,l=(i=s==null?void 0:s.components)==null?void 0:i[t];return this.getPreset({name:t,preset:l,options:a,params:n,set:r,defaults:o})},getPresetD({name:t="",theme:e={},params:n,set:r,defaults:o}){var i;const s=t.replace("-directive",""),{preset:a,options:l}=e,u=(i=a==null?void 0:a.directives)==null?void 0:i[s];return this.getPreset({name:s,preset:u,options:l,params:n,set:r,defaults:o})},getColorSchemeOption(t,e){var n;return this.regex.resolve((n=t.darkModeSelector)!=null?n:e.options.darkModeSelector)},getLayerOrder(t,e={},n,r){const{cssLayer:o}=e;return o?`@layer ${Fn(o.order||"primeui",n)}`:""},getCommonStyleSheet({name:t="",theme:e={},params:n,props:r={},set:o,defaults:i}){const s=this.getCommon({name:t,theme:e,params:n,set:o,defaults:i}),a=Object.entries(r).reduce((l,[u,d])=>l.push(`${u}="${d}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,d])=>{if(d!=null&&d.css){const f=zs(d==null?void 0:d.css),p=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${f}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:e={},params:n,props:r={},set:o,defaults:i}){var s;const a={name:t,theme:e,params:n,set:o,defaults:i},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(r).reduce((d,[f,p])=>d.push(`${f}="${p}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${zs(l)}</style>`:""},createTokens(t={},e,n="",r="",o={}){return Object.entries(t).forEach(([i,s])=>{const a=sr(i,e.variable.excludedKeyRegex)?n:n?`${n}.${_g(i)}`:_g(i),l=r?`${r}.${i}`:i;Gn(s)?this.createTokens(s,e,a,l,o):(o[a]||(o[a]={paths:[],computed(u,d={}){if(u){const f=this.paths.find(p=>p.scheme===u)||this.paths.find(p=>p.scheme==="none");return f==null?void 0:f.computed(u,d.binding)}return this.paths.map(f=>f.computed(f.scheme,d[f.scheme]))}}),o[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(u,d={}){const f=/{([^}]*)}/g;let p=s;if(d.name=this.path,d.binding||(d.binding={}),sr(s,f)){const _=s.trim().replaceAll(f,R=>{var x,N;const M=R.replace(/{|}/g,"");return(N=(x=o[M])==null?void 0:x.computed(u,d))==null?void 0:N.value}),k=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,O=/var\([^)]+\)/g;p=sr(_.replace(O,"0"),k)?`calc(${_})`:_}return Sr(d.binding)&&delete d.binding,{colorScheme:u,path:this.path,paths:d,value:p.includes("undefined")?void 0:p}}}))}),o},getTokenValue(t,e,n){var r;const i=(l=>l.split(".").filter(d=>!sr(d.toLowerCase(),n.variable.excludedKeyRegex)).join("."))(e),s=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,a=[(r=t[i])==null?void 0:r.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},u)=>{const d=u,{colorScheme:f}=d,p=_s(d,["colorScheme"]);return l[f]=p,l},void 0)},transformCSS(t,e,n,r,o={},i,s,a){if(tt(e)){const{cssLayer:l}=o;if(r!=="style"){const u=this.getColorSchemeOption(o,s),d=a?Cs(a,e):e;e=n==="dark"?u.reduce((f,{selector:p})=>(tt(p)&&(f+=p.includes("[CSS]")?p.replace("[CSS]",d):Cs(p,d)),f),""):Cs(a??":root",e)}if(l){const u={name:"primeui",order:"primeui"};Gn(l)&&(u.name=Fn(l.name,{name:t,type:r})),tt(u.name)&&(e=Cs(`@layer ${u.name}`,e),i==null||i.layerNames(u.name))}return e}return""}},ze={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){const{theme:e}=t;e&&(this._theme=Ku(bs({},e),{options:bs(bs({},this.defaults.options),e.options)}),this._tokens=bn.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),En.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Ku(bs({},this.theme),{preset:t}),this._tokens=bn.createTokens(t,this.defaults),this.clearLoadedStyleNames(),En.emit("preset:change",t),En.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Ku(bs({},this.theme),{options:t}),this.clearLoadedStyleNames(),En.emit("options:change",t),En.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return bn.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",e){return bn.getCommon({name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",e){const n={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return bn.getPresetC(n)},getDirective(t="",e){const n={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return bn.getPresetD(n)},getCustomPreset(t="",e,n,r){const o={name:t,preset:e,options:this.options,selector:n,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return bn.getPreset(o)},getLayerOrderCSS(t=""){return bn.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",e,n="style",r){return bn.transformCSS(t,e,r,n,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",e,n={}){return bn.getCommonStyleSheet({name:t,theme:this.theme,params:e,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,e,n={}){return bn.getStyleSheet({name:t,theme:this.theme,params:e,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),En.emit(`theme:${e}:load`,t),!this._loadingStyles.size&&En.emit("theme:load"))}},Rt={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function Tg(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=dC(t))||e){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(u){throw u},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var u=n.next();return s=u.done,u},e:function(u){a=!0,i=u},f:function(){try{s||n.return==null||n.return()}finally{if(a)throw i}}}}function dC(t,e){if(t){if(typeof t=="string")return Sg(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Sg(t,e):void 0}}function Sg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var hC={filter:function(e,n,r,o,i){var s=[];if(!e)return s;var a=Tg(e),l;try{for(a.s();!(l=a.n()).done;){var u=l.value;if(typeof u=="string"){if(this.filters[o](u,r,i)){s.push(u);continue}}else{var d=Tg(n),f;try{for(d.s();!(f=d.n()).done;){var p=f.value,g=nr(u,p);if(this.filters[o](g,r,i)){s.push(u);break}}}catch(_){d.e(_)}finally{d.f()}}}}catch(_){a.e(_)}finally{a.f()}return s},filters:{startsWith:function(e,n,r){if(n==null||n==="")return!0;if(e==null)return!1;var o=dn(n.toString()).toLocaleLowerCase(r),i=dn(e.toString()).toLocaleLowerCase(r);return i.slice(0,o.length)===o},contains:function(e,n,r){if(n==null||n==="")return!0;if(e==null)return!1;var o=dn(n.toString()).toLocaleLowerCase(r),i=dn(e.toString()).toLocaleLowerCase(r);return i.indexOf(o)!==-1},notContains:function(e,n,r){if(n==null||n==="")return!0;if(e==null)return!1;var o=dn(n.toString()).toLocaleLowerCase(r),i=dn(e.toString()).toLocaleLowerCase(r);return i.indexOf(o)===-1},endsWith:function(e,n,r){if(n==null||n==="")return!0;if(e==null)return!1;var o=dn(n.toString()).toLocaleLowerCase(r),i=dn(e.toString()).toLocaleLowerCase(r);return i.indexOf(o,i.length-o.length)!==-1},equals:function(e,n,r){return n==null||n===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():dn(e.toString()).toLocaleLowerCase(r)==dn(n.toString()).toLocaleLowerCase(r)},notEquals:function(e,n,r){return n==null||n===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():dn(e.toString()).toLocaleLowerCase(r)!=dn(n.toString()).toLocaleLowerCase(r)},in:function(e,n){if(n==null||n.length===0)return!0;for(var r=0;r<n.length;r++)if(C_(e,n[r]))return!0;return!1},between:function(e,n){return n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1]},lt:function(e,n){return n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n},lte:function(e,n){return n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n},gt:function(e,n){return n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n},gte:function(e,n){return n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n},dateIs:function(e,n){return n==null?!0:e==null?!1:e.toDateString()===n.toDateString()},dateIsNot:function(e,n){return n==null?!0:e==null?!1:e.toDateString()!==n.toDateString()},dateBefore:function(e,n){return n==null?!0:e==null?!1:e.getTime()<n.getTime()},dateAfter:function(e,n){return n==null?!0:e==null?!1:e.getTime()>n.getTime()}},register:function(e,n){this.filters[e]=n}};function fC(t,e){return t?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}function pC(t,e){if(t&&e){const n=r=>{fC(t,r)||(t.classList?t.classList.add(r):t.className+=" "+r)};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(n))}}function nc(t){for(const e of document==null?void 0:document.styleSheets)try{for(const n of e==null?void 0:e.cssRules)for(const r of n==null?void 0:n.style)if(t.test(r))return{name:r,value:n.style.getPropertyValue(r).trim()}}catch{}return null}function qu(t,e){if(t&&e){const n=r=>{t.classList?t.classList.remove(r):t.className=t.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(n))}}function L_(t){let e={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),e}function V_(){let t=window,e=document,n=e.documentElement,r=e.getElementsByTagName("body")[0],o=t.innerWidth||n.clientWidth||r.clientWidth,i=t.innerHeight||n.clientHeight||r.clientHeight;return{width:o,height:i}}function mC(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function gC(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function yC(t,e,n=!0){var r,o,i,s;if(t){const a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:L_(t),l=a.height,u=a.width,d=e.offsetHeight,f=e.offsetWidth,p=e.getBoundingClientRect(),g=gC(),_=mC(),k=V_();let O,R,x="top";p.top+d+l>k.height?(O=p.top+g-l,x="bottom",O<0&&(O=g)):O=d+p.top+g,p.left+u>k.width?R=Math.max(0,p.left+_+f-u):R=p.left+_,t.style.top=O+"px",t.style.left=R+"px",t.style.transformOrigin=x,n&&(t.style.marginTop=x==="bottom"?`calc(${(o=(r=nc(/-anchor-gutter$/))==null?void 0:r.value)!=null?o:"2px"} * -1)`:(s=(i=nc(/-anchor-gutter$/))==null?void 0:i.value)!=null?s:"")}}function vC(t,e){t&&(typeof e=="string"?t.style.cssText=e:Object.entries(e||{}).forEach(([n,r])=>t.style[n]=r))}function D_(t,e){return t instanceof HTMLElement?t.offsetWidth:0}function bC(t,e,n=!0){var r,o,i,s;if(t){const a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:L_(t),l=e.offsetHeight,u=e.getBoundingClientRect(),d=V_();let f,p,g="top";u.top+l+a.height>d.height?(f=-1*a.height,g="bottom",u.top+f<0&&(f=-1*u.top)):f=l,a.width>d.width?p=u.left*-1:u.left+a.width>d.width?p=(u.left+a.width-d.width)*-1:p=0,t.style.top=f+"px",t.style.left=p+"px",t.style.transformOrigin=g,n&&(t.style.marginTop=g==="bottom"?`calc(${(o=(r=nc(/-anchor-gutter$/))==null?void 0:r.value)!=null?o:"2px"} * -1)`:(s=(i=nc(/-anchor-gutter$/))==null?void 0:i.value)!=null?s:"")}}function Va(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function rc(t,e={}){if(Va(t)){const n=(r,o)=>{var i,s;const a=(i=t==null?void 0:t.$attrs)!=null&&i[r]?[(s=t==null?void 0:t.$attrs)==null?void 0:s[r]]:[];return[o].flat().reduce((l,u)=>{if(u!=null){const d=typeof u;if(d==="string"||d==="number")l.push(u);else if(d==="object"){const f=Array.isArray(u)?n(r,u):Object.entries(u).map(([p,g])=>r==="style"&&(g||g===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${g}`:g?p:void 0);l=f.length?l.concat(f.filter(p=>!!p)):l}}return l},a)};Object.entries(e).forEach(([r,o])=>{if(o!=null){const i=r.match(/^on(.+)/);i?t.addEventListener(i[1].toLowerCase(),o):r==="p-bind"?rc(t,o):(o=r==="class"?[...new Set(n("class",o))].join(" ").trim():r==="style"?n("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=o),t.setAttribute(r,o))}})}}function _C(t,e={},...n){{const r=document.createElement(t);return rc(r,e),r.append(...n),r}}function wC(t,e){return Va(t)?Array.from(t.querySelectorAll(e)):[]}function Kc(t,e){return Va(t)?t.matches(e)?t:t.querySelector(e):null}function Dr(t,e){t&&document.activeElement!==t&&t.focus(e)}function EC(t,e){if(Va(t)){const n=t.getAttribute(e);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}function uf(t,e=""){let n=wC(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),r=[];for(let o of n)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&r.push(o);return r}function IC(t,e){const n=uf(t,e);return n.length>0?n[0]:null}function Lo(t){if(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e}return 0}function M_(t){if(t){let e=t.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function TC(t,e){const n=uf(t,e);return n.length>0?n[n.length-1]:null}function SC(t){if(t){let e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function AC(t,e){return t?t.offsetHeight:0}function $_(t,e=[]){const n=M_(t);return n===null?e:$_(n,e.concat([n]))}function CC(t){let e=[];if(t){let n=$_(t);const r=/(auto|scroll)/,o=i=>{try{let s=window.getComputedStyle(i,null);return r.test(s.getPropertyValue("overflow"))||r.test(s.getPropertyValue("overflowX"))||r.test(s.getPropertyValue("overflowY"))}catch{return!1}};for(let i of n){let s=i.nodeType===1&&i.dataset.scrollselectors;if(s){let a=s.split(",");for(let l of a){let u=Kc(i,l);u&&o(u)&&e.push(u)}}i.nodeType!==9&&o(i)&&e.push(i)}}return e}function xC(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&M_(t))}function Vo(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e}return 0}function PC(){return/(android)/i.test(navigator.userAgent)}function F_(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function oc(t){return!!(t&&t.offsetParent!=null)}function kC(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function U_(t,e="",n){Va(t)&&n!==null&&n!==void 0&&t.setAttribute(e,n)}function ia(t){"@babel/helpers - typeof";return ia=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ia(t)}function Ag(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Cg(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ag(Object(n),!0).forEach(function(r){OC(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ag(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function OC(t,e,n){return(e=RC(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function RC(t){var e=NC(t,"string");return ia(e)=="symbol"?e:e+""}function NC(t,e){if(ia(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ia(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function LC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;sf()?Mc(t):e?t():Nc(t)}var VC=0;function DC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=hr(!1),r=hr(t),o=hr(null),i=F_()?window.document:void 0,s=e.document,a=s===void 0?i:s,l=e.immediate,u=l===void 0?!0:l,d=e.manual,f=d===void 0?!1:d,p=e.name,g=p===void 0?"style_".concat(++VC):p,_=e.id,k=_===void 0?void 0:_,O=e.media,R=O===void 0?void 0:O,x=e.nonce,N=x===void 0?void 0:x,M=e.first,Y=M===void 0?!1:M,U=e.onMounted,E=U===void 0?void 0:U,v=e.onUpdated,b=v===void 0?void 0:v,T=e.onLoad,A=T===void 0?void 0:T,S=e.props,I=S===void 0?{}:S,Ee=function(){},Le=function(we){var It=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var yt=Cg(Cg({},I),It),vt=yt.name||g,Je=yt.id||k,Ze=yt.nonce||N;o.value=a.querySelector('style[data-primevue-style-id="'.concat(vt,'"]'))||a.getElementById(Je)||a.createElement("style"),o.value.isConnected||(r.value=we||t,rc(o.value,{type:"text/css",id:Je,media:R,nonce:Ze}),Y?a.head.prepend(o.value):a.head.appendChild(o.value),U_(o.value,"data-primevue-style-id",vt),rc(o.value,yt),o.value.onload=function(an){return A==null?void 0:A(an,{name:vt})},E==null||E(vt)),!n.value&&(Ee=mn(r,function(an){o.value.textContent=an,b==null||b(vt)},{immediate:!0}),n.value=!0)}},Se=function(){!a||!n.value||(Ee(),xC(o.value)&&a.head.removeChild(o.value),n.value=!1)};return u&&!f&&LC(Le),{id:k,name:g,el:o,css:r,unload:Se,load:Le,isLoaded:Kh(n)}}function sa(t){"@babel/helpers - typeof";return sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sa(t)}function xg(t,e){return UC(t)||FC(t,e)||$C(t,e)||MC()}function MC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $C(t,e){if(t){if(typeof t=="string")return Pg(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Pg(t,e):void 0}}function Pg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function FC(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,s,a=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,e!==0)for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){u=!0,o=d}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw o}}return a}}function UC(t){if(Array.isArray(t))return t}function kg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Gu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?kg(Object(n),!0).forEach(function(r){jC(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function jC(t,e,n){return(e=BC(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function BC(t){var e=zC(t,"string");return sa(e)=="symbol"?e:e+""}function zC(t,e){if(sa(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(sa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var HC=function(e){var n=e.dt;return`
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
`)},KC=function(e){var n=e.dt;return`
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
`)},WC={},qC={},Ke={name:"base",css:KC,theme:HC,classes:WC,inlineStyles:qC,load:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(i){return i},o=r(Fn(e,{dt:Wu}));return o?DC(zs(o),Gu({name:this.name},n)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadTheme:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.theme,n,function(r){return ze.transformCSS(n.name||e.name,r)})},getCommonTheme:function(e){return ze.getCommon(this.name,e)},getComponentTheme:function(e){return ze.getComponent(this.name,e)},getDirectiveTheme:function(e){return ze.getDirective(this.name,e)},getPresetTheme:function(e,n,r){return ze.getCustomPreset(this.name,e,n,r)},getLayerOrderThemeCSS:function(){return ze.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=Fn(this.css,{dt:Wu}),o=zs("".concat(r).concat(e)),i=Object.entries(n).reduce(function(s,a){var l=xg(a,2),u=l[0],d=l[1];return s.push("".concat(u,'="').concat(d,'"'))&&s},[]).join(" ");return'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(i,">").concat(o,"</style>")}return""},getCommonThemeStyleSheet:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ze.getCommonStyleSheet(this.name,e,n)},getThemeStyleSheet:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[ze.getStyleSheet(this.name,e,n)];if(this.theme){var o=this.name==="base"?"global-style":"".concat(this.name,"-style"),i=Fn(this.theme,{dt:Wu}),s=zs(ze.transformCSS(o,i)),a=Object.entries(n).reduce(function(l,u){var d=xg(u,2),f=d[0],p=d[1];return l.push("".concat(f,'="').concat(p,'"'))&&l},[]).join(" ");r.push('<style type="text/css" data-primevue-style-id="'.concat(o,'" ').concat(a,">").concat(s,"</style>"))}return r.join("")},extend:function(e){return Gu(Gu({},this),{},{css:void 0,theme:void 0},e)}},gi=Hc(),bl={};function GC(t="pui_id_"){return bl.hasOwnProperty(t)||(bl[t]=0),bl[t]++,`${t}${bl[t]}`}function QC(){let t=[];const e=(s,a,l=999)=>{const u=o(s,a,l),d=u.value+(u.key===s?0:l)+1;return t.push({key:s,value:d}),d},n=s=>{t=t.filter(a=>a.value!==s)},r=(s,a)=>o(s).value,o=(s,a,l=0)=>[...t].reverse().find(u=>!0)||{key:s,value:l},i=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:i,set:(s,a,l)=>{a&&(a.style.zIndex=String(e(s,!0,l)))},clear:s=>{s&&(n(i(s)),s.style.zIndex="")},getCurrent:s=>r(s)}}var Si=QC();function aa(t){"@babel/helpers - typeof";return aa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},aa(t)}function Og(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Qu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Og(Object(n),!0).forEach(function(r){YC(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Og(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function YC(t,e,n){return(e=XC(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function XC(t){var e=JC(t,"string");return aa(e)=="symbol"?e:e+""}function JC(t,e){if(aa(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(aa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ZC={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[Rt.STARTS_WITH,Rt.CONTAINS,Rt.NOT_CONTAINS,Rt.ENDS_WITH,Rt.EQUALS,Rt.NOT_EQUALS],numeric:[Rt.EQUALS,Rt.NOT_EQUALS,Rt.LESS_THAN,Rt.LESS_THAN_OR_EQUAL_TO,Rt.GREATER_THAN,Rt.GREATER_THAN_OR_EQUAL_TO],date:[Rt.DATE_IS,Rt.DATE_IS_NOT,Rt.DATE_BEFORE,Rt.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},e2=Symbol();function t2(t,e){var n={config:Qi(e)};return t.config.globalProperties.$primevue=n,t.provide(e2,n),n2(),r2(t,n),n}var yi=[];function n2(){En.clear(),yi.forEach(function(t){return t==null?void 0:t()}),yi=[]}function r2(t,e){var n=hr(!1),r=function(){if(!ze.isStyleNameLoaded("common")){var u,d,f=((u=Ke.getCommonTheme)===null||u===void 0?void 0:u.call(Ke))||{},p=f.primitive,g=f.semantic,_={nonce:(d=e.config)===null||d===void 0||(d=d.csp)===null||d===void 0?void 0:d.nonce};Ke.load(p==null?void 0:p.css,Qu({name:"primitive-variables"},_)),Ke.load(g==null?void 0:g.css,Qu({name:"semantic-variables"},_)),Ke.loadTheme(Qu({name:"global-style"},_)),ze.setLoadedStyleName("common")}};En.on("theme:change",function(l){n.value||(t.config.globalProperties.$primevue.config.theme=l,n.value=!0)});var o=mn(e.config,function(l,u){gi.emit("config:change",{newValue:l,oldValue:u})},{immediate:!0,deep:!0}),i=mn(function(){return e.config.ripple},function(l,u){gi.emit("config:ripple:change",{newValue:l,oldValue:u})},{immediate:!0,deep:!0}),s=mn(function(){return e.config.theme},function(l,u){n.value||ze.setTheme(l),e.config.unstyled||r(),n.value=!1,gi.emit("config:theme:change",{newValue:l,oldValue:u})},{immediate:!0,deep:!0}),a=mn(function(){return e.config.unstyled},function(l,u){!l&&e.config.theme&&r(),gi.emit("config:unstyled:change",{newValue:l,oldValue:u})},{immediate:!0,deep:!0});yi.push(o),yi.push(i),yi.push(s),yi.push(a)}var o2={install:function(e,n){var r=eC(ZC,n);t2(e,r)}},Wr={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function la(t){"@babel/helpers - typeof";return la=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},la(t)}function i2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s2(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l2(r.key),r)}}function a2(t,e,n){return e&&s2(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function l2(t){var e=c2(t,"string");return la(e)=="symbol"?e:e+""}function c2(t,e){if(la(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(la(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var u2=function(){function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};i2(this,t),this.element=e,this.listener=n}return a2(t,[{key:"bindScrollListener",value:function(){this.scrollableParents=CC(this.element);for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}();function ca(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return GC(t)}var Rg=Ke.extend({name:"common"});function ua(t){"@babel/helpers - typeof";return ua=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ua(t)}function d2(t){return z_(t)||h2(t)||B_(t)||j_()}function h2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _l(t,e){return z_(t)||f2(t,e)||B_(t,e)||j_()}function j_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B_(t,e){if(t){if(typeof t=="string")return Ng(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ng(t,e):void 0}}function Ng(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function f2(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,s,a=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){u=!0,o=d}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw o}}return a}}function z_(t){if(Array.isArray(t))return t}function Lg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function ke(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Lg(Object(n),!0).forEach(function(r){Vl(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Lg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Vl(t,e,n){return(e=p2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p2(t){var e=m2(t,"string");return ua(e)=="symbol"?e:e+""}function m2(t,e){if(ua(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ua(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Pn={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e){var n=this;e?(this._loadScopedThemeStyles(e),this._themeChangeListener(function(){return n._loadScopedThemeStyles(e)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,beforeCreate:function(){var e,n,r,o,i,s,a,l,u,d,f,p=(e=this.pt)===null||e===void 0?void 0:e._usept,g=p?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,_=p?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(o=_||g)===null||o===void 0||(o=o.hooks)===null||o===void 0||(i=o.onBeforeCreate)===null||i===void 0||i.call(o);var k=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,O=k?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,R=k?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(u=this.$primevue)===null||u===void 0||(u=u.config)===null||u===void 0?void 0:u.pt;(d=R||O)===null||d===void 0||(d=d[this.$.type.name])===null||d===void 0||(d=d.hooks)===null||d===void 0||(f=d.onBeforeCreate)===null||f===void 0||f.call(d)},created:function(){this._hook("onCreated")},beforeMount:function(){this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this.rootEl=Kc(this.$el,'[data-pc-name="'.concat(In(this.$.type.name),'"]')),this.rootEl&&(this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=ke({name:this.$.type.name},this.$params)),this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));n==null||n(),r==null||r()}},_mergeProps:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return zc(e)?e.apply(void 0,r):Z.apply(void 0,r)},_loadStyles:function(){var e=this,n=function(){Wr.isStyleNameLoaded("base")||(Ke.loadCSS(e.$styleOptions),e._loadGlobalStyles(),Wr.setLoadedStyleName("base")),e._loadThemeStyles()};n(),this._themeChangeListener(n)},_loadCoreStyles:function(){var e,n;!Wr.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(n=this.$style)!==null&&n!==void 0&&n.name&&(Rg.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),Wr.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);tt(e)&&Ke.load(e,ke({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,n;if(!this.isUnstyled){if(!ze.isStyleNameLoaded("common")){var r,o,i=((r=this.$style)===null||r===void 0||(o=r.getCommonTheme)===null||o===void 0?void 0:o.call(r))||{},s=i.primitive,a=i.semantic;Ke.load(s==null?void 0:s.css,ke({name:"primitive-variables"},this.$styleOptions)),Ke.load(a==null?void 0:a.css,ke({name:"semantic-variables"},this.$styleOptions)),Ke.loadTheme(ke({name:"global-style"},this.$styleOptions)),ze.setLoadedStyleName("common")}if(!ze.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(n=this.$style)!==null&&n!==void 0&&n.name){var l,u,d,f,p=((l=this.$style)===null||l===void 0||(u=l.getComponentTheme)===null||u===void 0?void 0:u.call(l))||{},g=p.css;(d=this.$style)===null||d===void 0||d.load(g,ke({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(f=this.$style)===null||f===void 0||f.loadTheme(ke({name:"".concat(this.$style.name,"-style")},this.$styleOptions)),ze.setLoadedStyleName(this.$style.name)}if(!ze.isStyleNameLoaded("layer-order")){var _,k,O=(_=this.$style)===null||_===void 0||(k=_.getLayerOrderThemeCSS)===null||k===void 0?void 0:k.call(_);Ke.load(O,ke({name:"layer-order",first:!0},this.$styleOptions)),ze.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var n,r,o,i=((n=this.$style)===null||n===void 0||(r=n.getPresetTheme)===null||r===void 0?void 0:r.call(n,e,"[".concat(this.$attrSelector,"]")))||{},s=i.css,a=(o=this.$style)===null||o===void 0?void 0:o.load(s,ke({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=a.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Wr.clearLoadedStyleNames(),En.on("theme:change",e)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var n;return this[e]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[e])},_getOptionValue:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return lf(e,n,r)},_getPTValue:function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(r)&&!!o[r.split(".")[0]],a=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},l=a.mergeSections,u=l===void 0?!0:l,d=a.mergeProps,f=d===void 0?!1:d,p=i?s?this._useGlobalPT(this._getPTClassValue,r,o):this._useDefaultPT(this._getPTClassValue,r,o):void 0,g=s?void 0:this._getPTSelf(n,this._getPTClassValue,r,ke(ke({},o),{},{global:p||{}})),_=this._getPTDatasets(r);return u||!u&&g?f?this._mergeProps(f,p,g,_):ke(ke(ke({},p),g),_):ke(ke({},g),_)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return Z(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(r)),this._usePT.apply(this,[this.$_attrsPT].concat(r)))},_getPTDatasets:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o="data-pc-",i=r==="root"&&tt((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return r!=="transition"&&ke(ke({},r==="root"&&ke(Vl({},"".concat(o,"name"),In(i?(n=this.pt)===null||n===void 0?void 0:n["data-pc-section"]:this.$.type.name)),i&&Vl({},"".concat(o,"extend"),In(this.$.type.name)))),{},Vl({},"".concat(o,"section"),In(r)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return qt(e)||cf(e)?{class:e}:e},_getPT:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,i=function(a){var l,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=o?o(a):a,f=In(r),p=In(n.$name);return(l=u?f!==p?d==null?void 0:d[f]:void 0:d==null?void 0:d[f])!==null&&l!==void 0?l:d};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e,!0)},_usePT:function(e,n,r,o){var i=function(k){return n(k,r,o)};if(e!=null&&e.hasOwnProperty("_usept")){var s,a=e._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},l=a.mergeSections,u=l===void 0?!0:l,d=a.mergeProps,f=d===void 0?!1:d,p=i(e.originalValue),g=i(e.value);return p===void 0&&g===void 0?void 0:qt(g)?g:qt(p)?p:u||!u&&g?f?this._mergeProps(f,p,g):ke(ke({},p),g):g}return i(e)},_useGlobalPT:function(e,n,r){return this._usePT(this.globalPT,e,n,r)},_useDefaultPT:function(e,n,r){return this._usePT(this.defaultPT,e,n,r)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,ke(ke({},this.$params),n))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Z(this.$_attrsWithoutPT,this.ptm(e,n))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,n,ke({instance:this},r),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,ke(ke({},this.$params),n))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var o=this._getOptionValue(this.$style.inlineStyles,e,ke(ke({},this.$params),r)),i=this._getOptionValue(Rg.inlineStyles,e,ke(ke({},this.$params),r));return[i,o]}}},computed:{globalPT:function(){var e,n=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return Fn(r,{instance:n})})},defaultPT:function(){var e,n=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return n._getOptionValue(r,n.$name,ke({},n.$params))||Fn(r,ke({},n.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return ke(ke({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=_l(e,1),r=n[0];return r==null?void 0:r.startsWith("pt:")}).reduce(function(e,n){var r=_l(n,2),o=r[0],i=r[1],s=o.split(":"),a=d2(s),l=a.slice(1);return l==null||l.reduce(function(u,d,f,p){return!u[d]&&(u[d]=f===p.length-1?i:{}),u[d]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=_l(e,1),r=n[0];return!(r!=null&&r.startsWith("pt:"))}).reduce(function(e,n){var r=_l(n,2),o=r[0],i=r[1];return e[o]=i,e},{})},$attrSelector:function(){return ca("pc")}}},g2=`
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
`,y2=Ke.extend({name:"baseicon",css:g2});function da(t){"@babel/helpers - typeof";return da=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},da(t)}function Vg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Dg(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vg(Object(n),!0).forEach(function(r){v2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function v2(t,e,n){return(e=b2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b2(t){var e=_2(t,"string");return da(e)=="symbol"?e:e+""}function _2(t,e){if(da(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(da(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ar={name:"BaseIcon",extends:Pn,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:y2,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=Sr(this.label);return Dg(Dg({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},Wc={name:"SpinnerIcon",extends:Ar};function w2(t,e,n,r,o,i){return B(),te("svg",Z({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[P("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}Wc.render=w2;var E2=function(e){var n=e.dt;return`
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
`)},I2={root:function(e){var n=e.props,r=e.instance;return["p-badge p-component",{"p-badge-circle":tt(n.value)&&String(n.value).length===1,"p-badge-dot":Sr(n.value)&&!r.$slots.default,"p-badge-sm":n.size==="small","p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warn":n.severity==="warn","p-badge-danger":n.severity==="danger","p-badge-secondary":n.severity==="secondary","p-badge-contrast":n.severity==="contrast"}]}},T2=Ke.extend({name:"badge",theme:E2,classes:I2}),S2={name:"BaseBadge",extends:Pn,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:T2,provide:function(){return{$pcBadge:this,$parentInstance:this}}},H_={name:"Badge",extends:S2,inheritAttrs:!1};function A2(t,e,n,r,o,i){return B(),te("span",Z({class:t.cx("root")},t.ptmi("root")),[Be(t.$slots,"default",{},function(){return[rt(xe(t.value),1)]})],16)}H_.render=A2;function ha(t){"@babel/helpers - typeof";return ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ha(t)}function Mg(t,e){return k2(t)||P2(t,e)||x2(t,e)||C2()}function C2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x2(t,e){if(t){if(typeof t=="string")return $g(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$g(t,e):void 0}}function $g(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function P2(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,s,a=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,e!==0)for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){u=!0,o=d}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw o}}return a}}function k2(t){if(Array.isArray(t))return t}function Fg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function De(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Fg(Object(n),!0).forEach(function(r){zd(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Fg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zd(t,e,n){return(e=O2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O2(t){var e=R2(t,"string");return ha(e)=="symbol"?e:e+""}function R2(t,e){if(ha(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ha(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ie={_getMeta:function(){return[Gn(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],Fn(Gn(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,n){var r,o,i;return(r=(e==null||(o=e.instance)===null||o===void 0?void 0:o.$primevue)||(n==null||(i=n.ctx)===null||i===void 0||(i=i.appContext)===null||i===void 0||(i=i.config)===null||i===void 0||(i=i.globalProperties)===null||i===void 0?void 0:i.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:lf,_getPTValue:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=function(){var x=Ie._getOptionValue.apply(Ie,arguments);return qt(x)||cf(x)?{class:x}:x},u=((e=r.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((n=r.$primevueConfig)===null||n===void 0?void 0:n.ptOptions)||{},d=u.mergeSections,f=d===void 0?!0:d,p=u.mergeProps,g=p===void 0?!1:p,_=a?Ie._useDefaultPT(r,r.defaultPT(),l,i,s):void 0,k=Ie._usePT(r,Ie._getPT(o,r.$name),l,i,De(De({},s),{},{global:_||{}})),O=Ie._getPTDatasets(r,i);return f||!f&&k?g?Ie._mergeProps(r,g,_,k,O):De(De(De({},_),k),O):De(De({},k),O)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r="data-pc-";return De(De({},n==="root"&&zd({},"".concat(r,"name"),In(e.$name))),{},zd({},"".concat(r,"section"),In(n)))},_getPT:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=function(s){var a,l=r?r(s):s,u=In(n);return(a=l==null?void 0:l[u])!==null&&a!==void 0?a:l};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,s=function(O){return r(O,o,i)};if(n!=null&&n.hasOwnProperty("_usept")){var a,l=n._usept||((a=e.$primevueConfig)===null||a===void 0?void 0:a.ptOptions)||{},u=l.mergeSections,d=u===void 0?!0:u,f=l.mergeProps,p=f===void 0?!1:f,g=s(n.originalValue),_=s(n.value);return g===void 0&&_===void 0?void 0:qt(_)?_:qt(g)?g:d||!d&&_?p?Ie._mergeProps(e,p,g,_):De(De({},g),_):_}return s(n)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return Ie._usePT(e,n,r,o,i)},_loadStyles:function(e,n,r){var o,i=Ie._getConfig(n,r),s={nonce:i==null||(o=i.csp)===null||o===void 0?void 0:o.nonce};Ie._loadCoreStyles(e.$instance,s),Ie._loadThemeStyles(e.$instance,s),Ie._loadScopedThemeStyles(e.$instance,s),Ie._themeChangeListener(function(){return Ie._loadThemeStyles(e.$instance,s)})},_loadCoreStyles:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!Wr.isStyleNameLoaded((e=r.$style)===null||e===void 0?void 0:e.name)&&(n=r.$style)!==null&&n!==void 0&&n.name){var i;Ke.loadCSS(o),r.isUnstyled()&&((i=r.$style)===null||i===void 0||i.loadCSS(o)),Wr.setLoadedStyleName(r.$style.name)}},_loadThemeStyles:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(!(r!=null&&r.isUnstyled())){if(!ze.isStyleNameLoaded("common")){var i,s,a=((i=r.$style)===null||i===void 0||(s=i.getCommonTheme)===null||s===void 0?void 0:s.call(i))||{},l=a.primitive,u=a.semantic;Ke.load(l==null?void 0:l.css,De({name:"primitive-variables"},o)),Ke.load(u==null?void 0:u.css,De({name:"semantic-variables"},o)),Ke.loadTheme(De({name:"global-style"},o)),ze.setLoadedStyleName("common")}if(!ze.isStyleNameLoaded((e=r.$style)===null||e===void 0?void 0:e.name)&&(n=r.$style)!==null&&n!==void 0&&n.name){var d,f,p,g,_=((d=r.$style)===null||d===void 0||(f=d.getDirectiveTheme)===null||f===void 0?void 0:f.call(d))||{},k=_.css;(p=r.$style)===null||p===void 0||p.load(k,De({name:"".concat(r.$style.name,"-variables")},o)),(g=r.$style)===null||g===void 0||g.loadTheme(De({name:"".concat(r.$style.name,"-style")},o)),ze.setLoadedStyleName(r.$style.name)}if(!ze.isStyleNameLoaded("layer-order")){var O,R,x=(O=r.$style)===null||O===void 0||(R=O.getLayerOrderThemeCSS)===null||R===void 0?void 0:R.call(O);Ke.load(x,De({name:"layer-order",first:!0},o)),ze.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=e.preset();if(r&&e.$attrSelector){var o,i,s,a=((o=e.$style)===null||o===void 0||(i=o.getPresetTheme)===null||i===void 0?void 0:i.call(o,r,"[".concat(e.$attrSelector,"]")))||{},l=a.css,u=(s=e.$style)===null||s===void 0?void 0:s.load(l,De({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},n));e.scopedStyleEl=u.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Wr.clearLoadedStyleNames(),En.on("theme:change",e)},_hook:function(e,n,r,o,i,s){var a,l,u="on".concat(tC(n)),d=Ie._getConfig(o,i),f=r==null?void 0:r.$instance,p=Ie._usePT(f,Ie._getPT(o==null||(a=o.value)===null||a===void 0?void 0:a.pt,e),Ie._getOptionValue,"hooks.".concat(u)),g=Ie._useDefaultPT(f,d==null||(l=d.pt)===null||l===void 0||(l=l.directives)===null||l===void 0?void 0:l[e],Ie._getOptionValue,"hooks.".concat(u)),_={el:r,binding:o,vnode:i,prevVnode:s};p==null||p(f,_),g==null||g(f,_)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return zc(e)?e.apply(void 0,r):Z.apply(void 0,r)},_extend:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(s,a,l,u,d){var f,p,g;a._$instances=a._$instances||{};var _=Ie._getConfig(l,u),k=a._$instances[e]||{},O=Sr(k)?De(De({},n),n==null?void 0:n.methods):{};a._$instances[e]=De(De({},k),{},{$name:e,$host:a,$binding:l,$modifiers:l==null?void 0:l.modifiers,$value:l==null?void 0:l.value,$el:k.$el||a||void 0,$style:De({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},n==null?void 0:n.style),$primevueConfig:_,$attrSelector:a.$attrSelector,defaultPT:function(){return Ie._getPT(_==null?void 0:_.pt,void 0,function(x){var N;return x==null||(N=x.directives)===null||N===void 0?void 0:N[e]})},isUnstyled:function(){var x,N;return((x=a.$instance)===null||x===void 0||(x=x.$binding)===null||x===void 0||(x=x.value)===null||x===void 0?void 0:x.unstyled)!==void 0?(N=a.$instance)===null||N===void 0||(N=N.$binding)===null||N===void 0||(N=N.value)===null||N===void 0?void 0:N.unstyled:_==null?void 0:_.unstyled},theme:function(){var x;return(x=a.$instance)===null||x===void 0||(x=x.$primevueConfig)===null||x===void 0?void 0:x.theme},preset:function(){var x;return(x=a.$instance)===null||x===void 0||(x=x.$binding)===null||x===void 0||(x=x.value)===null||x===void 0?void 0:x.dt},ptm:function(){var x,N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ie._getPTValue(a.$instance,(x=a.$instance)===null||x===void 0||(x=x.$binding)===null||x===void 0||(x=x.value)===null||x===void 0?void 0:x.pt,N,De({},M))},ptmo:function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Ie._getPTValue(a.$instance,x,N,M,!1)},cx:function(){var x,N,M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",Y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(x=a.$instance)!==null&&x!==void 0&&x.isUnstyled()?void 0:Ie._getOptionValue((N=a.$instance)===null||N===void 0||(N=N.$style)===null||N===void 0?void 0:N.classes,M,De({},Y))},sx:function(){var x,N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,Y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return M?Ie._getOptionValue((x=a.$instance)===null||x===void 0||(x=x.$style)===null||x===void 0?void 0:x.inlineStyles,N,De({},Y)):void 0}},O),a.$instance=a._$instances[e],(f=(p=a.$instance)[s])===null||f===void 0||f.call(p,a,l,u,d),a["$".concat(e)]=a.$instance,Ie._hook(e,s,a,l,u,d),a.$pd||(a.$pd={}),a.$pd[e]=De(De({},(g=a.$pd)===null||g===void 0?void 0:g[e]),{},{name:e,instance:a.$instance})},o=function(s){var a,l,u,d,f,p=(a=s.$instance)===null||a===void 0?void 0:a.watch;p==null||(l=p.config)===null||l===void 0||l.call(s.$instance,(u=s.$instance)===null||u===void 0?void 0:u.$primevueConfig),gi.on("config:change",function(g){var _,k=g.newValue,O=g.oldValue;return p==null||(_=p.config)===null||_===void 0?void 0:_.call(s.$instance,k,O)}),p==null||(d=p["config.ripple"])===null||d===void 0||d.call(s.$instance,(f=s.$instance)===null||f===void 0||(f=f.$primevueConfig)===null||f===void 0?void 0:f.ripple),gi.on("config:ripple:change",function(g){var _,k=g.newValue,O=g.oldValue;return p==null||(_=p["config.ripple"])===null||_===void 0?void 0:_.call(s.$instance,k,O)})};return{created:function(s,a,l,u){r("created",s,a,l,u)},beforeMount:function(s,a,l,u){s.$attrSelector=ca("pd"),Ie._loadStyles(s,a,l),r("beforeMount",s,a,l,u),o(s)},mounted:function(s,a,l,u){Ie._loadStyles(s,a,l),r("mounted",s,a,l,u)},beforeUpdate:function(s,a,l,u){r("beforeUpdate",s,a,l,u)},updated:function(s,a,l,u){Ie._loadStyles(s,a,l),r("updated",s,a,l,u)},beforeUnmount:function(s,a,l,u){r("beforeUnmount",s,a,l,u)},unmounted:function(s,a,l,u){var d;(d=s.$instance)===null||d===void 0||(d=d.scopedStyleEl)===null||d===void 0||(d=d.value)===null||d===void 0||d.remove(),r("unmounted",s,a,l,u)}}},extend:function(){var e=Ie._getMeta.apply(Ie,arguments),n=Mg(e,2),r=n[0],o=n[1];return De({extend:function(){var s=Ie._getMeta.apply(Ie,arguments),a=Mg(s,2),l=a[0],u=a[1];return Ie.extend(l,De(De(De({},o),o==null?void 0:o.methods),u))}},Ie._extend(r,o))}},N2=function(e){var n=e.dt;return`
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
`)},L2={root:"p-ink"},V2=Ke.extend({name:"ripple-directive",theme:N2,classes:L2}),D2=Ie.extend({style:V2});function fa(t){"@babel/helpers - typeof";return fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fa(t)}function M2(t){return j2(t)||U2(t)||F2(t)||$2()}function $2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F2(t,e){if(t){if(typeof t=="string")return Hd(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Hd(t,e):void 0}}function U2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function j2(t){if(Array.isArray(t))return Hd(t)}function Hd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Ug(t,e,n){return(e=B2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function B2(t){var e=z2(t,"string");return fa(e)=="symbol"?e:e+""}function z2(t,e){if(fa(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(fa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var df=D2.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var n=_C("span",Ug(Ug({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));e.appendChild(n),this.$el=n},remove:function(e){var n=this.getInk(e);n&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(e){var n=this,r=e.currentTarget,o=this.getInk(r);if(!(!o||getComputedStyle(o,null).display==="none")){if(!this.isUnstyled()&&qu(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"),!Lo(o)&&!Vo(o)){var i=Math.max(D_(r),AC(r));o.style.height=i+"px",o.style.width=i+"px"}var s=SC(r),a=e.pageX-s.left+document.body.scrollTop-Vo(o)/2,l=e.pageY-s.top+document.body.scrollLeft-Lo(o)/2;o.style.top=l+"px",o.style.left=a+"px",!this.isUnstyled()&&pC(o,"p-ink-active"),o.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){o&&(!n.isUnstyled()&&qu(o,"p-ink-active"),o.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&qu(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?M2(e.children).find(function(n){return EC(n,"data-pc-name")==="ripple"}):void 0}}});function pa(t){"@babel/helpers - typeof";return pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pa(t)}function Ln(t,e,n){return(e=H2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function H2(t){var e=K2(t,"string");return pa(e)=="symbol"?e:e+""}function K2(t,e){if(pa(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(pa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var W2=function(e){var n=e.dt;return`
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
`)},q2={root:function(e){var n=e.instance,r=e.props;return["p-button p-component",Ln(Ln(Ln(Ln(Ln(Ln(Ln(Ln(Ln({"p-button-icon-only":n.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link},"p-button-".concat(r.severity),r.severity),"p-button-raised",r.raised),"p-button-rounded",r.rounded),"p-button-text",r.text),"p-button-outlined",r.outlined),"p-button-sm",r.size==="small"),"p-button-lg",r.size==="large"),"p-button-plain",r.plain),"p-button-fluid",n.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(e){var n=e.props;return["p-button-icon",Ln({},"p-button-icon-".concat(n.iconPos),n.label)]},label:"p-button-label"},G2=Ke.extend({name:"button",theme:W2,classes:q2}),Q2={name:"BaseButton",extends:Pn,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:G2,provide:function(){return{$pcButton:this,$parentInstance:this}}},K_={name:"Button",extends:Q2,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return Z(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return Sr(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:Wc,Badge:H_},directives:{ripple:df}};function Y2(t,e,n,r,o,i){var s=Ce("SpinnerIcon"),a=Ce("Badge"),l=Zh("ripple");return t.asChild?Be(t.$slots,"default",{key:1,class:pn(t.cx("root")),a11yAttrs:i.a11yAttrs}):at((B(),Ue(Jr(t.as),Z({key:0,class:t.cx("root")},i.attrs),{default:Qe(function(){return[Be(t.$slots,"default",{},function(){return[t.loading?Be(t.$slots,"loadingicon",{key:0,class:pn([t.cx("loadingIcon"),t.cx("icon")])},function(){return[t.loadingIcon?(B(),te("span",Z({key:0,class:[t.cx("loadingIcon"),t.cx("icon"),t.loadingIcon]},t.ptm("loadingIcon")),null,16)):(B(),Ue(s,Z({key:1,class:[t.cx("loadingIcon"),t.cx("icon")],spin:""},t.ptm("loadingIcon")),null,16,["class"]))]}):Be(t.$slots,"icon",{key:1,class:pn([t.cx("icon")])},function(){return[t.icon?(B(),te("span",Z({key:0,class:[t.cx("icon"),t.icon,t.iconClass]},t.ptm("icon")),null,16)):Ht("",!0)]}),P("span",Z({class:t.cx("label")},t.ptm("label")),xe(t.label||" "),17),t.badge?(B(),Ue(a,Z({key:2,value:t.badge,class:t.badgeClass,severity:t.badgeSeverity,unstyled:t.unstyled},t.ptm("pcBadge")),null,16,["value","class","severity","unstyled"])):Ht("",!0)]})]}),_:3},16,["class"])),[[l]])}K_.render=Y2;var X2=function(e){var n=e.dt;return`
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
`)},J2={root:function(e){var n=e.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Z2=Ke.extend({name:"avatar",theme:X2,classes:J2}),ex={name:"BaseAvatar",extends:Pn,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Z2,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},W_={name:"Avatar",extends:ex,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}}},tx=["aria-labelledby","aria-label"],nx=["src","alt"];function rx(t,e,n,r,o,i){return B(),te("div",Z({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[Be(t.$slots,"default",{},function(){return[t.label?(B(),te("span",Z({key:0,class:t.cx("label")},t.ptm("label")),xe(t.label),17)):t.$slots.icon?(B(),Ue(Jr(t.$slots.icon),{key:1,class:pn(t.cx("icon"))},null,8,["class"])):t.icon?(B(),te("span",Z({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(B(),te("img",Z({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return i.onError&&i.onError.apply(i,arguments)})},t.ptm("image")),null,16,nx)):Ht("",!0)]})],16,tx)}W_.render=rx;var hf={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=F_()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function ox(t,e,n,r,o,i){return i.inline?Be(t.$slots,"default",{key:0}):o.mounted?(B(),Ue(ES,{key:1,to:n.appendTo},[Be(t.$slots,"default")],8,["to"])):Ht("",!0)}hf.render=ox;var hn=Hc();function ma(t){"@babel/helpers - typeof";return ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ma(t)}function wl(t,e,n){return(e=ix(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ix(t){var e=sx(t,"string");return ma(e)=="symbol"?e:e+""}function sx(t,e){if(ma(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ma(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ax=function(e){var n=e.dt;return`
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
`)},lx={root:function(e){var n=e.position;return{position:"fixed",top:n==="top-right"||n==="top-left"||n==="top-center"?"20px":n==="center"?"50%":null,right:(n==="top-right"||n==="bottom-right")&&"20px",bottom:(n==="bottom-left"||n==="bottom-right"||n==="bottom-center")&&"20px",left:n==="top-left"||n==="bottom-left"?"20px":n==="center"||n==="top-center"||n==="bottom-center"?"50%":null}}},cx={root:function(e){var n=e.props;return["p-toast p-component p-toast-"+n.position]},message:function(e){var n=e.props;return["p-toast-message",{"p-toast-message-info":n.message.severity==="info"||n.message.severity===void 0,"p-toast-message-warn":n.message.severity==="warn","p-toast-message-error":n.message.severity==="error","p-toast-message-success":n.message.severity==="success","p-toast-message-secondary":n.message.severity==="secondary","p-toast-message-contrast":n.message.severity==="contrast"}]},messageContent:"p-toast-message-content",messageIcon:function(e){var n=e.props;return["p-toast-message-icon",wl(wl(wl(wl({},n.infoIcon,n.message.severity==="info"),n.warnIcon,n.message.severity==="warn"),n.errorIcon,n.message.severity==="error"),n.successIcon,n.message.severity==="success")]},messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:"p-toast-close-icon"},ux=Ke.extend({name:"toast",theme:ax,classes:cx,inlineStyles:lx}),ic={name:"CheckIcon",extends:Ar};function dx(t,e,n,r,o,i){return B(),te("svg",Z({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[P("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"},null,-1)]),16)}ic.render=dx;var Kd={name:"ExclamationTriangleIcon",extends:Ar};function hx(t,e,n,r,o,i){return B(),te("svg",Z({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[P("path",{d:"M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",fill:"currentColor"},null,-1),P("path",{d:"M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",fill:"currentColor"},null,-1),P("path",{d:"M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",fill:"currentColor"},null,-1)]),16)}Kd.render=hx;var Wd={name:"InfoCircleIcon",extends:Ar};function fx(t,e,n,r,o,i){return B(),te("svg",Z({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[P("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",fill:"currentColor"},null,-1)]),16)}Wd.render=fx;var ff={name:"TimesIcon",extends:Ar};function px(t,e,n,r,o,i){return B(),te("svg",Z({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[P("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1)]),16)}ff.render=px;var qd={name:"TimesCircleIcon",extends:Ar};function mx(t,e,n,r,o,i){return B(),te("svg",Z({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[P("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1)]),16)}qd.render=mx;var gx={name:"BaseToast",extends:Pn,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},infoIcon:{type:String,default:void 0},warnIcon:{type:String,default:void 0},errorIcon:{type:String,default:void 0},successIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:ux,provide:function(){return{$pcToast:this,$parentInstance:this}}},q_={name:"ToastMessage",hostName:"Toast",extends:Pn,emits:["close"],closeTimeout:null,props:{message:{type:null,default:null},templates:{type:Object,default:null},closeIcon:{type:String,default:null},infoIcon:{type:String,default:null},warnIcon:{type:String,default:null},errorIcon:{type:String,default:null},successIcon:{type:String,default:null},closeButtonProps:{type:null,default:null}},mounted:function(){var e=this;this.message.life&&(this.closeTimeout=setTimeout(function(){e.close({message:e.message,type:"life-end"})},this.message.life))},beforeUnmount:function(){this.clearCloseTimeout()},methods:{close:function(e){this.$emit("close",e)},onCloseClick:function(){this.clearCloseTimeout(),this.close({message:this.message,type:"close"})},clearCloseTimeout:function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{iconComponent:function(){return{info:!this.infoIcon&&Wd,success:!this.successIcon&&ic,warn:!this.warnIcon&&Kd,error:!this.errorIcon&&qd}[this.message.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{TimesIcon:ff,InfoCircleIcon:Wd,CheckIcon:ic,ExclamationTriangleIcon:Kd,TimesCircleIcon:qd},directives:{ripple:df}};function ga(t){"@babel/helpers - typeof";return ga=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ga(t)}function jg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function Bg(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jg(Object(n),!0).forEach(function(r){yx(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function yx(t,e,n){return(e=vx(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vx(t){var e=bx(t,"string");return ga(e)=="symbol"?e:e+""}function bx(t,e){if(ga(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ga(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var _x=["aria-label"];function wx(t,e,n,r,o,i){var s=Zh("ripple");return B(),te("div",Z({class:[t.cx("message"),n.message.styleClass],role:"alert","aria-live":"assertive","aria-atomic":"true"},t.ptm("message")),[n.templates.container?(B(),Ue(Jr(n.templates.container),{key:0,message:n.message,closeCallback:i.onCloseClick},null,8,["message","closeCallback"])):(B(),te("div",Z({key:1,class:[t.cx("messageContent"),n.message.contentStyleClass]},t.ptm("messageContent")),[n.templates.message?(B(),Ue(Jr(n.templates.message),{key:1,message:n.message},null,8,["message"])):(B(),te(He,{key:0},[(B(),Ue(Jr(n.templates.messageicon?n.templates.messageicon:n.templates.icon?n.templates.icon:i.iconComponent&&i.iconComponent.name?i.iconComponent:"span"),Z({class:t.cx("messageIcon")},t.ptm("messageIcon")),null,16,["class"])),P("div",Z({class:t.cx("messageText")},t.ptm("messageText")),[P("span",Z({class:t.cx("summary")},t.ptm("summary")),xe(n.message.summary),17),P("div",Z({class:t.cx("detail")},t.ptm("detail")),xe(n.message.detail),17)],16)],64)),n.message.closable!==!1?(B(),te("div",cb(Z({key:2},t.ptm("buttonContainer"))),[at((B(),te("button",Z({class:t.cx("closeButton"),type:"button","aria-label":i.closeAriaLabel,onClick:e[0]||(e[0]=function(){return i.onCloseClick&&i.onCloseClick.apply(i,arguments)}),autofocus:""},Bg(Bg({},n.closeButtonProps),t.ptm("closeButton"))),[(B(),Ue(Jr(n.templates.closeicon||"TimesIcon"),Z({class:[t.cx("closeIcon"),n.closeIcon]},t.ptm("closeIcon")),null,16,["class"]))],16,_x)),[[s]])],16)):Ht("",!0)],16))],16)}q_.render=wx;function Ex(t){return Ax(t)||Sx(t)||Tx(t)||Ix()}function Ix(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tx(t,e){if(t){if(typeof t=="string")return Gd(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gd(t,e):void 0}}function Sx(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ax(t){if(Array.isArray(t))return Gd(t)}function Gd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var Cx=0,G_={name:"Toast",extends:gx,inheritAttrs:!1,emits:["close","life-end"],data:function(){return{messages:[]}},styleElement:null,mounted:function(){hn.on("add",this.onAdd),hn.on("remove",this.onRemove),hn.on("remove-group",this.onRemoveGroup),hn.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount:function(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&Si.clear(this.$refs.container),hn.off("add",this.onAdd),hn.off("remove",this.onRemove),hn.off("remove-group",this.onRemoveGroup),hn.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add:function(e){e.id==null&&(e.id=Cx++),this.messages=[].concat(Ex(this.messages),[e])},remove:function(e){var n=this.messages.findIndex(function(r){return r.id===e.message.id});n!==-1&&(this.messages.splice(n,1),this.$emit(e.type,{message:e.message}))},onAdd:function(e){this.group==e.group&&this.add(e)},onRemove:function(e){this.remove({message:e,type:"close"})},onRemoveGroup:function(e){this.group===e&&(this.messages=[])},onRemoveAllGroups:function(){this.messages=[]},onEnter:function(){this.$refs.container.setAttribute(this.attributeSelector,""),this.autoZIndex&&Si.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave:function(){var e=this;this.$refs.container&&this.autoZIndex&&Sr(this.messages)&&setTimeout(function(){Si.clear(e.$refs.container)},200)},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",U_(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var n="";for(var r in this.breakpoints){var o="";for(var i in this.breakpoints[r])o+=i+":"+this.breakpoints[r][i]+"!important;";n+=`
                        @media screen and (max-width: `.concat(r,`) {
                            .p-toast[`).concat(this.attributeSelector,`] {
                                `).concat(o,`
                            }
                        }
                    `)}this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{attributeSelector:function(){return ca()}},components:{ToastMessage:q_,Portal:hf}};function ya(t){"@babel/helpers - typeof";return ya=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ya(t)}function zg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function xx(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?zg(Object(n),!0).forEach(function(r){Px(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Px(t,e,n){return(e=kx(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kx(t){var e=Ox(t,"string");return ya(e)=="symbol"?e:e+""}function Ox(t,e){if(ya(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ya(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Rx(t,e,n,r,o,i){var s=Ce("ToastMessage"),a=Ce("Portal");return B(),Ue(a,null,{default:Qe(function(){return[P("div",Z({ref:"container",class:t.cx("root"),style:t.sx("root",!0,{position:t.position})},t.ptmi("root")),[ue(_A,Z({name:"p-toast-message",tag:"div",onEnter:i.onEnter,onLeave:i.onLeave},xx({},t.ptm("transition"))),{default:Qe(function(){return[(B(!0),te(He,null,Sn(o.messages,function(l){return B(),Ue(s,{key:l.id,message:l,templates:t.$slots,closeIcon:t.closeIcon,infoIcon:t.infoIcon,warnIcon:t.warnIcon,errorIcon:t.errorIcon,successIcon:t.successIcon,closeButtonProps:t.closeButtonProps,unstyled:t.unstyled,onClose:e[0]||(e[0]=function(u){return i.remove(u)}),pt:t.pt},null,8,["message","templates","closeIcon","infoIcon","warnIcon","errorIcon","successIcon","closeButtonProps","unstyled","pt"])}),128))]}),_:1},16,["onEnter","onLeave"])],16)]}),_:1})}G_.render=Rx;var Nx=function(e){var n=e.dt;return`
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
`)},Lx={root:function(e){var n=e.instance,r=e.props;return["p-inputtext p-component",{"p-filled":n.filled,"p-inputtext-sm":r.size==="small","p-inputtext-lg":r.size==="large","p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":n.$primevue.config.inputStyle==="filled"||n.$primevue.config.inputVariant==="filled","p-inputtext-fluid":n.hasFluid}]}},Vx=Ke.extend({name:"inputtext",theme:Nx,classes:Lx}),Dx={name:"BaseInputText",extends:Pn,props:{modelValue:null,size:{type:String,default:null},invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:Vx,provide:function(){return{$pcInputText:this,$parentInstance:this}}},pf={name:"InputText",extends:Dx,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}})},onInput:function(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},hasFluid:function(){return Sr(this.fluid)?!!this.$pcFluid:this.fluid}}},Mx=["value","aria-invalid"];function $x(t,e,n,r,o,i){return B(),te("input",Z({type:"text",class:t.cx("root"),value:t.modelValue,"aria-invalid":t.invalid||void 0,onInput:e[0]||(e[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.getPTOptions("root")),null,16,Mx)}pf.render=$x;var Q_=Symbol();function Fx(){var t=yn(Q_);if(!t)throw new Error("No PrimeVue Toast provided!");return t}var Ux={install:function(e){var n={add:function(o){hn.emit("add",o)},remove:function(o){hn.emit("remove",o)},removeGroup:function(o){hn.emit("remove-group",o)},removeAllGroups:function(){hn.emit("remove-all-groups")}};e.config.globalProperties.$toast=n,e.provide(Q_,n)}},Y_={name:"BlankIcon",extends:Ar};function jx(t,e,n,r,o,i){return B(),te("svg",Z({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[P("rect",{width:"1",height:"1",fill:"currentColor","fill-opacity":"0"},null,-1)]),16)}Y_.render=jx;var X_={name:"ChevronDownIcon",extends:Ar};function Bx(t,e,n,r,o,i){return B(),te("svg",Z({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[P("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1)]),16)}X_.render=Bx;var J_={name:"SearchIcon",extends:Ar};function zx(t,e,n,r,o,i){return B(),te("svg",Z({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[P("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",fill:"currentColor"},null,-1)]),16)}J_.render=zx;var Hx=function(e){var n=e.dt;return`
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
`)},Kx={root:"p-iconfield"},Wx=Ke.extend({name:"iconfield",theme:Hx,classes:Kx}),qx={name:"BaseIconField",extends:Pn,style:Wx,provide:function(){return{$pcIconField:this,$parentInstance:this}}},Z_={name:"IconField",extends:qx,inheritAttrs:!1};function Gx(t,e,n,r,o,i){return B(),te("div",Z({class:t.cx("root")},t.ptmi("root")),[Be(t.$slots,"default")],16)}Z_.render=Gx;var Qx={root:"p-inputicon"},Yx=Ke.extend({name:"inputicon",classes:Qx}),Xx={name:"BaseInputIcon",extends:Pn,style:Yx,props:{class:null},provide:function(){return{$pcInputIcon:this,$parentInstance:this}}},e0={name:"InputIcon",extends:Xx,inheritAttrs:!1,computed:{containerClass:function(){return[this.cx("root"),this.class]}}};function Jx(t,e,n,r,o,i){return B(),te("span",Z({class:i.containerClass},t.ptmi("root")),[Be(t.$slots,"default")],16)}e0.render=Jx;var Zx=Hc(),eP=function(e){var n=e.dt;return`
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
    background: `.concat(n("virtualscroller.loader.mask.background"),`;
    color: `).concat(n("virtualscroller.loader.mask.color"),`;
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: `).concat(n("virtualscroller.loader.icon.size"),`;
    width: `).concat(n("virtualscroller.loader.icon.size"),`;
    height: `).concat(n("virtualscroller.loader.icon.size"),`;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`)},Hg=Ke.extend({name:"virtualscroller",theme:eP}),tP={name:"BaseVirtualScroller",extends:Pn,props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},resizeDelay:{type:Number,default:10},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0},inline:{type:Boolean,default:!1},step:{type:Number,default:0},appendOnly:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1}},style:Hg,provide:function(){return{$pcVirtualScroller:this,$parentInstance:this}},beforeMount:function(){var e;Hg.loadCSS({nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})}};function va(t){"@babel/helpers - typeof";return va=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},va(t)}function Kg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function ws(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Kg(Object(n),!0).forEach(function(r){t0(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function t0(t,e,n){return(e=nP(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nP(t){var e=rP(t,"string");return va(e)=="symbol"?e:e+""}function rP(t,e){if(va(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(va(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var n0={name:"VirtualScroller",extends:tP,inheritAttrs:!1,emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],data:function(){var e=this.isBoth();return{first:e?{rows:0,cols:0}:0,last:e?{rows:0,cols:0}:0,page:e?{rows:0,cols:0}:0,numItemsInViewport:e?{rows:0,cols:0}:0,lastScrollPos:e?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,resizeTimeout:null,defaultWidth:0,defaultHeight:0,defaultContentWidth:0,defaultContentHeight:0,isRangeChanged:!1,lazyLoadState:{},resizeListener:null,initialized:!1,watch:{numToleratedItems:function(e){this.d_numToleratedItems=e},loading:function(e,n){this.lazy&&e!==n&&e!==this.d_loading&&(this.d_loading=e)},items:function(e,n){(!n||n.length!==(e||[]).length)&&(this.init(),this.calculateAutoSize())},itemSize:function(){this.init(),this.calculateAutoSize()},orientation:function(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},scrollHeight:function(){this.init(),this.calculateAutoSize()},scrollWidth:function(){this.init(),this.calculateAutoSize()}},mounted:function(){this.viewInit(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0,this.lazyLoadState=this.lazyLoadState||{}},updated:function(){!this.initialized&&this.viewInit()},unmounted:function(){this.unbindResizeListener(),this.initialized=!1},methods:{viewInit:function(){oc(this.element)&&(this.setContentEl(this.content),this.init(),this.calculateAutoSize(),this.bindResizeListener(),this.defaultWidth=Vo(this.element),this.defaultHeight=Lo(this.element),this.defaultContentWidth=Vo(this.content),this.defaultContentHeight=Lo(this.content),this.initialized=!0)},init:function(){this.disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize())},isVertical:function(){return this.orientation==="vertical"},isHorizontal:function(){return this.orientation==="horizontal"},isBoth:function(){return this.orientation==="both"},scrollTo:function(e){this.element&&this.element.scrollTo(e)},scrollToIndex:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",o=this.isBoth(),i=this.isHorizontal(),s=o?e.every(function(E){return E>-1}):e>-1;if(s){var a=this.first,l=this.element,u=l.scrollTop,d=u===void 0?0:u,f=l.scrollLeft,p=f===void 0?0:f,g=this.calculateNumItems(),_=g.numToleratedItems,k=this.getContentPosition(),O=this.itemSize,R=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,b=arguments.length>1?arguments[1]:void 0;return v<=b?0:v},x=function(v,b,T){return v*b+T},N=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.scrollTo({left:v,top:b,behavior:r})},M=o?{rows:0,cols:0}:0,Y=!1,U=!1;o?(M={rows:R(e[0],_[0]),cols:R(e[1],_[1])},N(x(M.cols,O[1],k.left),x(M.rows,O[0],k.top)),U=this.lastScrollPos.top!==d||this.lastScrollPos.left!==p,Y=M.rows!==a.rows||M.cols!==a.cols):(M=R(e,_),i?N(x(M,O,k.left),d):N(p,x(M,O,k.top)),U=this.lastScrollPos!==(i?p:d),Y=M!==a),this.isRangeChanged=Y,U&&(this.first=M)}},scrollInView:function(e,n){var r=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"auto";if(n){var i=this.isBoth(),s=this.isHorizontal(),a=i?e.every(function(O){return O>-1}):e>-1;if(a){var l=this.getRenderedRange(),u=l.first,d=l.viewport,f=function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return r.scrollTo({left:R,top:x,behavior:o})},p=n==="to-start",g=n==="to-end";if(p){if(i)d.first.rows-u.rows>e[0]?f(d.first.cols*this.itemSize[1],(d.first.rows-1)*this.itemSize[0]):d.first.cols-u.cols>e[1]&&f((d.first.cols-1)*this.itemSize[1],d.first.rows*this.itemSize[0]);else if(d.first-u>e){var _=(d.first-1)*this.itemSize;s?f(_,0):f(0,_)}}else if(g){if(i)d.last.rows-u.rows<=e[0]+1?f(d.first.cols*this.itemSize[1],(d.first.rows+1)*this.itemSize[0]):d.last.cols-u.cols<=e[1]+1&&f((d.first.cols+1)*this.itemSize[1],d.first.rows*this.itemSize[0]);else if(d.last-u<=e+1){var k=(d.first+1)*this.itemSize;s?f(k,0):f(0,k)}}}}else this.scrollToIndex(e,o)},getRenderedRange:function(){var e=function(f,p){return Math.floor(f/(p||f))},n=this.first,r=0;if(this.element){var o=this.isBoth(),i=this.isHorizontal(),s=this.element,a=s.scrollTop,l=s.scrollLeft;if(o)n={rows:e(a,this.itemSize[0]),cols:e(l,this.itemSize[1])},r={rows:n.rows+this.numItemsInViewport.rows,cols:n.cols+this.numItemsInViewport.cols};else{var u=i?l:a;n=e(u,this.itemSize),r=n+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:n,last:r}}},calculateNumItems:function(){var e=this.isBoth(),n=this.isHorizontal(),r=this.itemSize,o=this.getContentPosition(),i=this.element?this.element.offsetWidth-o.left:0,s=this.element?this.element.offsetHeight-o.top:0,a=function(p,g){return Math.ceil(p/(g||p))},l=function(p){return Math.ceil(p/2)},u=e?{rows:a(s,r[0]),cols:a(i,r[1])}:a(n?i:s,r),d=this.d_numToleratedItems||(e?[l(u.rows),l(u.cols)]:l(u));return{numItemsInViewport:u,numToleratedItems:d}},calculateOptions:function(){var e=this,n=this.isBoth(),r=this.first,o=this.calculateNumItems(),i=o.numItemsInViewport,s=o.numToleratedItems,a=function(d,f,p){var g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return e.getLast(d+f+(d<p?2:3)*p,g)},l=n?{rows:a(r.rows,i.rows,s[0]),cols:a(r.cols,i.cols,s[1],!0)}:a(r,i,s);this.last=l,this.numItemsInViewport=i,this.d_numToleratedItems=s,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=n?Array.from({length:i.rows}).map(function(){return Array.from({length:i.cols})}):Array.from({length:i})),this.lazy&&Promise.resolve().then(function(){var u;e.lazyLoadState={first:e.step?n?{rows:0,cols:r.cols}:0:r,last:Math.min(e.step?e.step:l,((u=e.items)===null||u===void 0?void 0:u.length)||0)},e.$emit("lazy-load",e.lazyLoadState)})},calculateAutoSize:function(){var e=this;this.autoSize&&!this.d_loading&&Promise.resolve().then(function(){if(e.content){var n=e.isBoth(),r=e.isHorizontal(),o=e.isVertical();e.content.style.minHeight=e.content.style.minWidth="auto",e.content.style.position="relative",e.element.style.contain="none";var i=[Vo(e.element),Lo(e.element)],s=i[0],a=i[1];(n||r)&&(e.element.style.width=s<e.defaultWidth?s+"px":e.scrollWidth||e.defaultWidth+"px"),(n||o)&&(e.element.style.height=a<e.defaultHeight?a+"px":e.scrollHeight||e.defaultHeight+"px"),e.content.style.minHeight=e.content.style.minWidth="",e.content.style.position="",e.element.style.contain=""}})},getLast:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,o=arguments.length>1?arguments[1]:void 0;return this.items?Math.min(o?((e=this.columns||this.items[0])===null||e===void 0?void 0:e.length)||0:((n=this.items)===null||n===void 0?void 0:n.length)||0,r):0},getContentPosition:function(){if(this.content){var e=getComputedStyle(this.content),n=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),r=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),o=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),i=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:n,right:r,top:o,bottom:i,x:n+r,y:o+i}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize:function(){var e=this;if(this.element){var n=this.isBoth(),r=this.isHorizontal(),o=this.element.parentElement,i=this.scrollWidth||"".concat(this.element.offsetWidth||o.offsetWidth,"px"),s=this.scrollHeight||"".concat(this.element.offsetHeight||o.offsetHeight,"px"),a=function(u,d){return e.element.style[u]=d};n||r?(a("height",s),a("width",i)):a("height",s)}},setSpacerSize:function(){var e=this,n=this.items;if(n){var r=this.isBoth(),o=this.isHorizontal(),i=this.getContentPosition(),s=function(l,u,d){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.spacerStyle=ws(ws({},e.spacerStyle),t0({},"".concat(l),(u||[]).length*d+f+"px"))};r?(s("height",n,this.itemSize[0],i.y),s("width",this.columns||n[1],this.itemSize[1],i.x)):o?s("width",this.columns||n,this.itemSize,i.x):s("height",n,this.itemSize,i.y)}},setContentPosition:function(e){var n=this;if(this.content&&!this.appendOnly){var r=this.isBoth(),o=this.isHorizontal(),i=e?e.first:this.first,s=function(d,f){return d*f},a=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.contentStyle=ws(ws({},n.contentStyle),{transform:"translate3d(".concat(d,"px, ").concat(f,"px, 0)")})};if(r)a(s(i.cols,this.itemSize[1]),s(i.rows,this.itemSize[0]));else{var l=s(i,this.itemSize);o?a(l,0):a(0,l)}}},onScrollPositionChange:function(e){var n=this,r=e.target,o=this.isBoth(),i=this.isHorizontal(),s=this.getContentPosition(),a=function(A,S){return A?A>S?A-S:A:0},l=function(A,S){return Math.floor(A/(S||A))},u=function(A,S,I,Ee,Le,Se){return A<=Le?Le:Se?I-Ee-Le:S+Le-1},d=function(A,S,I,Ee,Le,Se,ge){return A<=Se?0:Math.max(0,ge?A<S?I:A-Se:A>S?I:A-2*Se)},f=function(A,S,I,Ee,Le,Se){var ge=S+Ee+2*Le;return A>=Le&&(ge+=Le+1),n.getLast(ge,Se)},p=a(r.scrollTop,s.top),g=a(r.scrollLeft,s.left),_=o?{rows:0,cols:0}:0,k=this.last,O=!1,R=this.lastScrollPos;if(o){var x=this.lastScrollPos.top<=p,N=this.lastScrollPos.left<=g;if(!this.appendOnly||this.appendOnly&&(x||N)){var M={rows:l(p,this.itemSize[0]),cols:l(g,this.itemSize[1])},Y={rows:u(M.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],x),cols:u(M.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],N)};_={rows:d(M.rows,Y.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],x),cols:d(M.cols,Y.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],N)},k={rows:f(M.rows,_.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:f(M.cols,_.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},O=_.rows!==this.first.rows||k.rows!==this.last.rows||_.cols!==this.first.cols||k.cols!==this.last.cols||this.isRangeChanged,R={top:p,left:g}}}else{var U=i?g:p,E=this.lastScrollPos<=U;if(!this.appendOnly||this.appendOnly&&E){var v=l(U,this.itemSize),b=u(v,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,E);_=d(v,b,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,E),k=f(v,_,this.last,this.numItemsInViewport,this.d_numToleratedItems),O=_!==this.first||k!==this.last||this.isRangeChanged,R=U}}return{first:_,last:k,isRangeChanged:O,scrollPos:R}},onScrollChange:function(e){var n=this.onScrollPositionChange(e),r=n.first,o=n.last,i=n.isRangeChanged,s=n.scrollPos;if(i){var a={first:r,last:o};if(this.setContentPosition(a),this.first=r,this.last=o,this.lastScrollPos=s,this.$emit("scroll-index-change",a),this.lazy&&this.isPageChanged(r)){var l,u,d={first:this.step?Math.min(this.getPageByFirst(r)*this.step,(((l=this.items)===null||l===void 0?void 0:l.length)||0)-this.step):r,last:Math.min(this.step?(this.getPageByFirst(r)+1)*this.step:o,((u=this.items)===null||u===void 0?void 0:u.length)||0)},f=this.lazyLoadState.first!==d.first||this.lazyLoadState.last!==d.last;f&&this.$emit("lazy-load",d),this.lazyLoadState=d}}},onScroll:function(e){var n=this;if(this.$emit("scroll",e),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),this.isPageChanged()){if(!this.d_loading&&this.showLoader){var r=this.onScrollPositionChange(e),o=r.isRangeChanged,i=o||(this.step?this.isPageChanged():!1);i&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(function(){n.onScrollChange(e),n.d_loading&&n.showLoader&&(!n.lazy||n.loading===void 0)&&(n.d_loading=!1,n.page=n.getPageByFirst())},this.delay)}}else this.onScrollChange(e)},onResize:function(){var e=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){if(oc(e.element)){var n=e.isBoth(),r=e.isVertical(),o=e.isHorizontal(),i=[Vo(e.element),Lo(e.element)],s=i[0],a=i[1],l=s!==e.defaultWidth,u=a!==e.defaultHeight,d=n?l||u:o?l:r?u:!1;d&&(e.d_numToleratedItems=e.numToleratedItems,e.defaultWidth=s,e.defaultHeight=a,e.defaultContentWidth=Vo(e.content),e.defaultContentHeight=Lo(e.content),e.init())}},this.resizeDelay)},bindResizeListener:function(){this.resizeListener||(this.resizeListener=this.onResize.bind(this),window.addEventListener("resize",this.resizeListener),window.addEventListener("orientationchange",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),window.removeEventListener("orientationchange",this.resizeListener),this.resizeListener=null)},getOptions:function(e){var n=(this.items||[]).length,r=this.isBoth()?this.first.rows+e:this.first+e;return{index:r,count:n,first:r===0,last:r===n-1,even:r%2===0,odd:r%2!==0}},getLoaderOptions:function(e,n){var r=this.loaderArr.length;return ws({index:e,count:r,first:e===0,last:e===r-1,even:e%2===0,odd:e%2!==0},n)},getPageByFirst:function(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this.step||1))},isPageChanged:function(e){return this.step?this.page!==this.getPageByFirst(e??this.first):!0},setContentEl:function(e){this.content=e||this.content||Kc(this.element,'[data-pc-section="content"]')},elementRef:function(e){this.element=e},contentRef:function(e){this.content=e}},computed:{containerClass:function(){return["p-virtualscroller",this.class,{"p-virtualscroller-inline":this.inline,"p-virtualscroller-both p-both-scroll":this.isBoth(),"p-virtualscroller-horizontal p-horizontal-scroll":this.isHorizontal()}]},contentClass:function(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass:function(){return["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!this.$slots.loader}]},loadedItems:function(){var e=this;return this.items&&!this.d_loading?this.isBoth()?this.items.slice(this.appendOnly?0:this.first.rows,this.last.rows).map(function(n){return e.columns?n:n.slice(e.appendOnly?0:e.first.cols,e.last.cols)}):this.isHorizontal()&&this.columns?this.items:this.items.slice(this.appendOnly?0:this.first,this.last):[]},loadedRows:function(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns:function(){if(this.columns){var e=this.isBoth(),n=this.isHorizontal();if(e||n)return this.d_loading&&this.loaderDisabled?e?this.loaderArr[0]:this.loaderArr:this.columns.slice(e?this.first.cols:this.first,e?this.last.cols:this.last)}return this.columns}},components:{SpinnerIcon:Wc}},oP=["tabindex"];function iP(t,e,n,r,o,i){var s=Ce("SpinnerIcon");return t.disabled?(B(),te(He,{key:1},[Be(t.$slots,"default"),Be(t.$slots,"content",{items:t.items,rows:t.items,columns:i.loadedColumns})],64)):(B(),te("div",Z({key:0,ref:i.elementRef,class:i.containerClass,tabindex:t.tabindex,style:t.style,onScroll:e[0]||(e[0]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)})},t.ptmi("root")),[Be(t.$slots,"content",{styleClass:i.contentClass,items:i.loadedItems,getItemOptions:i.getOptions,loading:o.d_loading,getLoaderOptions:i.getLoaderOptions,itemSize:t.itemSize,rows:i.loadedRows,columns:i.loadedColumns,contentRef:i.contentRef,spacerStyle:o.spacerStyle,contentStyle:o.contentStyle,vertical:i.isVertical(),horizontal:i.isHorizontal(),both:i.isBoth()},function(){return[P("div",Z({ref:i.contentRef,class:i.contentClass,style:o.contentStyle},t.ptm("content")),[(B(!0),te(He,null,Sn(i.loadedItems,function(a,l){return Be(t.$slots,"item",{key:l,item:a,options:i.getOptions(l)})}),128))],16)]}),t.showSpacer?(B(),te("div",Z({key:0,class:"p-virtualscroller-spacer",style:o.spacerStyle},t.ptm("spacer")),null,16)):Ht("",!0),!t.loaderDisabled&&t.showLoader&&o.d_loading?(B(),te("div",Z({key:1,class:i.loaderClass},t.ptm("loader")),[t.$slots&&t.$slots.loader?(B(!0),te(He,{key:0},Sn(o.loaderArr,function(a,l){return Be(t.$slots,"loader",{key:l,options:i.getLoaderOptions(l,i.isBoth()&&{numCols:t.d_numItemsInViewport.cols})})}),128)):Ht("",!0),Be(t.$slots,"loadingicon",{},function(){return[ue(s,Z({spin:"",class:"p-virtualscroller-loading-icon"},t.ptm("loadingIcon")),null,16)]})],16)):Ht("",!0)],16,oP))}n0.render=iP;var sP=function(e){var n=e.dt;return`
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

.p-select.p-variant-filled.p-focus {
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
`)},aP={root:function(e){var n=e.instance,r=e.props,o=e.state;return["p-select p-component p-inputwrapper",{"p-disabled":r.disabled,"p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":n.$primevue.config.inputStyle==="filled"||n.$primevue.config.inputVariant==="filled","p-focus":o.focused,"p-inputwrapper-filled":n.hasSelectedOption,"p-inputwrapper-focus":o.focused||o.overlayVisible,"p-select-open":o.overlayVisible,"p-select-fluid":n.hasFluid}]},label:function(e){var n=e.instance,r=e.props;return["p-select-label",{"p-placeholder":!r.editable&&n.label===r.placeholder,"p-select-label-empty":!r.editable&&!n.$slots.value&&(n.label==="p-emptylabel"||n.label.length===0)}]},clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingicon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:function(e){var n=e.instance,r=e.props,o=e.state,i=e.option,s=e.focusedOption;return["p-select-option",{"p-select-option-selected":n.isSelected(i)&&r.highlightOnSelect,"p-focus":o.focusedOptionIndex===s,"p-disabled":n.isOptionDisabled(i)}]},optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},lP=Ke.extend({name:"select",theme:sP,classes:aP}),cP={name:"BaseSelect",extends:Pn,props:{modelValue:null,options:Array,optionLabel:[String,Function],optionValue:[String,Function],optionDisabled:[String,Function],optionGroupLabel:[String,Function],optionGroupChildren:[String,Function],scrollHeight:{type:String,default:"14rem"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},dataKey:null,showClear:{type:Boolean,default:!1},fluid:{type:Boolean,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},labelId:{type:String,default:null},labelClass:{type:[String,Object],default:null},labelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},appendTo:{type:[String,Object],default:"body"},loading:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},resetFilterOnHide:{type:Boolean,default:!1},resetFilterOnClear:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!0},checkmark:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:lP,provide:function(){return{$pcSelect:this,$parentInstance:this}}};function ba(t){"@babel/helpers - typeof";return ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ba(t)}function uP(t){return pP(t)||fP(t)||hP(t)||dP()}function dP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hP(t,e){if(t){if(typeof t=="string")return Qd(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Qd(t,e):void 0}}function fP(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function pP(t){if(Array.isArray(t))return Qd(t)}function Qd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Wg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function qg(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Wg(Object(n),!0).forEach(function(r){r0(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function r0(t,e,n){return(e=mP(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mP(t){var e=gP(t,"string");return ba(e)=="symbol"?e:e+""}function gP(t,e){if(ba(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ba(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var o0={name:"Select",extends:cP,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur","before-show","before-hide","show","hide","filter"],inject:{$pcFluid:{default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,labelClickListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{"$attrs.id":function(e){this.id=e||ca()},modelValue:function(){this.isModelValueChanged=!0},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||ca(),this.autoUpdateModel(),this.bindLabelClickListener()},updated:function(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindLabelClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(Si.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,n){return this.virtualScrollerDisabled?e:n&&n(e).index},getOptionLabel:function(e){return this.optionLabel?nr(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?nr(e,this.optionValue):e},getOptionRenderKey:function(e,n){return(this.dataKey?nr(e,this.dataKey):this.getOptionLabel(e))+"_"+n},getPTItemOptions:function(e,n,r,o){return this.ptm(o,{context:{option:e,index:r,selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(r,n),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?nr(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return nr(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return nr(e,this.optionGroupChildren)},getAriaPosInset:function(e){var n=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(r){return n.isOptionGroup(r)}).length:e)+1},show:function(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex(),e&&Dr(this.$refs.focusInput)},hide:function(e){var n=this,r=function(){n.$emit("before-hide"),n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,n.searchValue="",n.resetFilterOnHide&&(n.filterValue=null),e&&Dr(n.$refs.focusInput)};setTimeout(function(){r()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex(),this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled||PC()){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,this.editable);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!n&&ZA(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked=!1},onEditableInput:function(e){var n=e.target.value;this.searchValue="";var r=this.searchOptions(e,n);!r&&(this.focusedOptionIndex=-1),this.updateModel(e,n),!this.overlayVisible&&tt(n)&&this.show()},onContainerClick:function(e){this.disabled||this.loading||e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]')||((!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.clicked=!0)},onClearClick:function(e){this.updateModel(e,null),this.resetFilterOnClear&&(this.filterValue=null)},onFirstHiddenFocus:function(e){var n=e.relatedTarget===this.$refs.focusInput?IC(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;Dr(n)},onLastHiddenFocus:function(e){var n=e.relatedTarget===this.$refs.focusInput?TC(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;Dr(n)},onOptionSelect:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,o=this.getOptionValue(n);this.updateModel(e,o),r&&this.hide(!0)},onOptionMouseMove:function(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)},onFilterChange:function(e){var n=e.target.value;this.filterValue=n,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:n}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(e){if(!e.isComposing)switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(e){Zx.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n)}e.preventDefault()},onArrowUpKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(e.altKey&&!n)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var r=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,r),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&(this.focusedOptionIndex=-1)},onHomeKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var r=e.currentTarget;e.shiftKey?r.setSelectionRange(0,e.target.selectionStart):(r.setSelectionRange(0,0),this.focusedOptionIndex=-1)}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onEndKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var r=e.currentTarget;if(e.shiftKey)r.setSelectionRange(e.target.selectionStart,r.value.length);else{var o=r.value.length;r.setSelectionRange(o,o),this.focusedOptionIndex=-1}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)),e.preventDefault()},onSpaceKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;!n&&this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault(),e.stopPropagation()},onTabKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n||(this.overlayVisible&&this.hasFocusableElements()?(Dr(this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&!this.overlayVisible&&this.show()},onOverlayEnter:function(e){Si.set("overlay",e,this.$primevue.config.zIndex.overlay),vC(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&Dr(this.$refs.filterInput.$el)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.autoFilterFocus&&Dr(this.$refs.focusInput),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){Si.clear(e)},alignOverlay:function(){this.appendTo==="self"?bC(this.overlay,this.$el):(this.overlay.style.minWidth=D_(this.$el)+"px",yC(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&!e.$el.contains(n.target)&&!e.overlay.contains(n.target)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new u2(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!kC()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindLabelClickListener:function(){var e=this;if(!this.editable&&!this.labelClickListener){var n=document.querySelector('label[for="'.concat(this.inputId,'"]'));n&&oc(n)&&(this.labelClickListener=function(){Dr(e.$refs.focusInput)},n.addEventListener("click",this.labelClickListener))}},unbindLabelClickListener:function(){if(this.labelClickListener){var e=document.querySelector('label[for="'.concat(this.inputId,'"]'));e&&oc(e)&&e.removeEventListener("click",this.labelClickListener)}},hasFocusableElements:function(){return uf(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionMatched:function(e){var n;return this.isValidOption(e)&&typeof this.getOptionLabel(e)=="string"&&((n=this.getOptionLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(e){return tt(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){return this.isValidOption(e)&&C_(this.modelValue,this.getOptionValue(e),this.equalityKey)},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return bg(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,r=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(o){return n.isValidOption(o)}):-1;return r>-1?r+e+1:e},findPrevOptionIndex:function(e){var n=this,r=e>0?bg(this.visibleOptions.slice(0,e),function(o){return n.isValidOption(o)}):-1;return r>-1?r:e},findSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions:function(e,n){var r=this;this.searchValue=(this.searchValue||"")+n;var o=-1,i=!1;return tt(this.searchValue)&&(this.focusedOptionIndex!==-1?(o=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(s){return r.isOptionMatched(s)}),o=o===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(s){return r.isOptionMatched(s)}):o+this.focusedOptionIndex):o=this.visibleOptions.findIndex(function(s){return r.isOptionMatched(s)}),o!==-1&&(i=!0),o===-1&&this.focusedOptionIndex===-1&&(o=this.findFirstFocusedOptionIndex()),o!==-1&&this.changeFocusedOptionIndex(e,o)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){r.searchValue="",r.searchTimeout=null},500),i},changeFocusedOptionIndex:function(e,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[n],!1))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var r=n!==-1?"".concat(e.id,"_").concat(n):e.focusedOptionId,o=Kc(e.list,'li[id="'.concat(r,'"]'));o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"start"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(n!==-1?n:e.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,n){this.$emit("update:modelValue",n),this.$emit("change",{originalEvent:e,value:n})},flatOptions:function(e){var n=this;return(e||[]).reduce(function(r,o,i){r.push({optionGroup:o,group:!0,index:i});var s=n.getOptionGroupChildren(o);return s&&s.forEach(function(a){return r.push(a)}),r},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,n){this.list=e,n&&n(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){var e=this,n=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var r=hC.filter(n,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var o=this.options||[],i=[];return o.forEach(function(s){var a=e.getOptionGroupChildren(s),l=a.filter(function(u){return r.includes(u)});l.length>0&&i.push(qg(qg({},s),{},r0({},typeof e.optionGroupChildren=="string"?e.optionGroupChildren:"items",uP(l))))}),this.flatOptions(i)}return r}return n},hasSelectedOption:function(){return tt(this.modelValue)},label:function(){var e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.placeholder||"p-emptylabel"},editableInputValue:function(){var e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.modelValue||""},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},filterResultMessageText:function(){return tt(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(n){return!e.isOptionGroup(n)}).length},isClearIconVisible:function(){return this.showClear&&this.modelValue!=null&&tt(this.options)},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},hasFluid:function(){return Sr(this.fluid)?!!this.$pcFluid:this.fluid}},directives:{ripple:df},components:{InputText:pf,VirtualScroller:n0,Portal:hf,InputIcon:e0,IconField:Z_,TimesIcon:ff,ChevronDownIcon:X_,SpinnerIcon:Wc,SearchIcon:J_,CheckIcon:ic,BlankIcon:Y_}},yP=["id"],vP=["id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],bP=["id","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-disabled"],_P=["id"],wP=["id"],EP=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focused","data-p-disabled"];function IP(t,e,n,r,o,i){var s=Ce("SpinnerIcon"),a=Ce("InputText"),l=Ce("SearchIcon"),u=Ce("InputIcon"),d=Ce("IconField"),f=Ce("CheckIcon"),p=Ce("BlankIcon"),g=Ce("VirtualScroller"),_=Ce("Portal"),k=Zh("ripple");return B(),te("div",Z({ref:"container",id:o.id,class:t.cx("root"),onClick:e[11]||(e[11]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)})},t.ptmi("root")),[t.editable?(B(),te("input",Z({key:0,ref:"focusInput",id:t.labelId||t.inputId,type:"text",class:[t.cx("label"),t.inputClass,t.labelClass],style:[t.inputStyle,t.labelStyle],value:i.editableInputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":o.overlayVisible,"aria-controls":o.id+"_list","aria-activedescendant":o.focused?i.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)}),onInput:e[3]||(e[3]=function(){return i.onEditableInput&&i.onEditableInput.apply(i,arguments)})},t.ptm("label")),null,16,vP)):(B(),te("span",Z({key:1,ref:"focusInput",id:t.labelId||t.inputId,class:[t.cx("label"),t.inputClass,t.labelClass],style:[t.inputStyle,t.labelStyle],tabindex:t.disabled?-1:t.tabindex,role:"combobox","aria-label":t.ariaLabel||(i.label==="p-emptylabel"?void 0:i.label),"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":o.overlayVisible,"aria-controls":o.id+"_list","aria-activedescendant":o.focused?i.focusedOptionId:void 0,"aria-disabled":t.disabled,onFocus:e[4]||(e[4]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[5]||(e[5]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[6]||(e[6]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},t.ptm("label")),[Be(t.$slots,"value",{value:t.modelValue,placeholder:t.placeholder},function(){return[rt(xe(i.label==="p-emptylabel"?" ":i.label||"empty"),1)]})],16,bP)),i.isClearIconVisible?Be(t.$slots,"clearicon",{key:2,class:pn(t.cx("clearIcon")),clearCallback:i.onClearClick},function(){return[(B(),Ue(Jr(t.clearIcon?"i":"TimesIcon"),Z({ref:"clearIcon",class:[t.cx("clearIcon"),t.clearIcon],onClick:i.onClearClick},t.ptm("clearIcon"),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):Ht("",!0),P("div",Z({class:t.cx("dropdown")},t.ptm("dropdown")),[t.loading?Be(t.$slots,"loadingicon",{key:0,class:pn(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(B(),te("span",Z({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(B(),Ue(s,Z({key:1,class:t.cx("loadingIcon"),spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):Be(t.$slots,"dropdownicon",{key:1,class:pn(t.cx("dropdownIcon"))},function(){return[(B(),Ue(Jr(t.dropdownIcon?"span":"ChevronDownIcon"),Z({class:[t.cx("dropdownIcon"),t.dropdownIcon],"aria-hidden":"true"},t.ptm("dropdownIcon")),null,16,["class"]))]})],16),ue(_,{appendTo:t.appendTo},{default:Qe(function(){return[ue(vo,Z({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},t.ptm("transition")),{default:Qe(function(){return[o.overlayVisible?(B(),te("div",Z({key:0,ref:i.overlayRef,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:[t.panelStyle,t.overlayStyle],onClick:e[9]||(e[9]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:e[10]||(e[10]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)})},t.ptm("overlay")),[P("span",Z({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[7]||(e[7]=function(){return i.onFirstHiddenFocus&&i.onFirstHiddenFocus.apply(i,arguments)})},t.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),Be(t.$slots,"header",{value:t.modelValue,options:i.visibleOptions}),t.filter?(B(),te("div",Z({key:0,class:t.cx("header")},t.ptm("header")),[ue(d,{unstyled:t.unstyled,pt:t.ptm("pcFilterContainer")},{default:Qe(function(){return[ue(a,{ref:"filterInput",type:"text",value:o.filterValue,onVnodeMounted:i.onFilterUpdated,onVnodeUpdated:i.onFilterUpdated,class:pn(t.cx("pcFilter")),placeholder:t.filterPlaceholder,variant:t.variant,unstyled:t.unstyled,role:"searchbox",autocomplete:"off","aria-owns":o.id+"_list","aria-activedescendant":i.focusedOptionId,onKeydown:i.onFilterKeyDown,onBlur:i.onFilterBlur,onInput:i.onFilterChange,pt:t.ptm("pcFilter")},null,8,["value","onVnodeMounted","onVnodeUpdated","class","placeholder","variant","unstyled","aria-owns","aria-activedescendant","onKeydown","onBlur","onInput","pt"]),ue(u,{unstyled:t.unstyled,pt:t.ptm("pcFilterIconContainer")},{default:Qe(function(){return[Be(t.$slots,"filtericon",{},function(){return[t.filterIcon?(B(),te("span",Z({key:0,class:t.filterIcon},t.ptm("filterIcon")),null,16)):(B(),Ue(l,cb(Z({key:1},t.ptm("filterIcon"))),null,16))]})]}),_:3},8,["unstyled","pt"])]}),_:3},8,["unstyled","pt"]),P("span",Z({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),xe(i.filterResultMessageText),17)],16)):Ht("",!0),P("div",Z({class:t.cx("listContainer"),style:{"max-height":i.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("listContainer")),[ue(g,Z({ref:i.virtualScrollerRef},t.virtualScrollerOptions,{items:i.visibleOptions,style:{height:t.scrollHeight},tabindex:-1,disabled:i.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),oS({content:Qe(function(O){var R=O.styleClass,x=O.contentRef,N=O.items,M=O.getItemOptions,Y=O.contentStyle,U=O.itemSize;return[P("ul",Z({ref:function(v){return i.listRef(v,x)},id:o.id+"_list",class:[t.cx("list"),R],style:Y,role:"listbox"},t.ptm("list")),[(B(!0),te(He,null,Sn(N,function(E,v){return B(),te(He,{key:i.getOptionRenderKey(E,i.getOptionIndex(v,M))},[i.isOptionGroup(E)?(B(),te("li",Z({key:0,id:o.id+"_"+i.getOptionIndex(v,M),style:{height:U?U+"px":void 0},class:t.cx("optionGroup"),role:"option",ref_for:!0},t.ptm("optionGroup")),[Be(t.$slots,"optiongroup",{option:E.optionGroup,index:i.getOptionIndex(v,M)},function(){return[P("span",Z({class:t.cx("optionGroupLabel"),ref_for:!0},t.ptm("optionGroupLabel")),xe(i.getOptionGroupLabel(E.optionGroup)),17)]})],16,wP)):at((B(),te("li",Z({key:1,id:o.id+"_"+i.getOptionIndex(v,M),class:t.cx("option",{option:E,focusedOption:i.getOptionIndex(v,M)}),style:{height:U?U+"px":void 0},role:"option","aria-label":i.getOptionLabel(E),"aria-selected":i.isSelected(E),"aria-disabled":i.isOptionDisabled(E),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(v,M)),onClick:function(T){return i.onOptionSelect(T,E)},onMousemove:function(T){return i.onOptionMouseMove(T,i.getOptionIndex(v,M))},"data-p-selected":i.isSelected(E),"data-p-focused":o.focusedOptionIndex===i.getOptionIndex(v,M),"data-p-disabled":i.isOptionDisabled(E),ref_for:!0},i.getPTItemOptions(E,M,v,"option")),[t.checkmark?(B(),te(He,{key:0},[i.isSelected(E)?(B(),Ue(f,Z({key:0,class:t.cx("optionCheckIcon"),ref_for:!0},t.ptm("optionCheckIcon")),null,16,["class"])):(B(),Ue(p,Z({key:1,class:t.cx("optionBlankIcon"),ref_for:!0},t.ptm("optionBlankIcon")),null,16,["class"]))],64)):Ht("",!0),Be(t.$slots,"option",{option:E,selected:i.isSelected(E),index:i.getOptionIndex(v,M)},function(){return[P("span",Z({class:t.cx("optionLabel"),ref_for:!0},t.ptm("optionLabel")),xe(i.getOptionLabel(E)),17)]})],16,EP)),[[k]])],64)}),128)),o.filterValue&&(!N||N&&N.length===0)?(B(),te("li",Z({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[Be(t.$slots,"emptyfilter",{},function(){return[rt(xe(i.emptyFilterMessageText),1)]})],16)):!t.options||t.options&&t.options.length===0?(B(),te("li",Z({key:1,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[Be(t.$slots,"empty",{},function(){return[rt(xe(i.emptyMessageText),1)]})],16)):Ht("",!0)],16,_P)]}),_:2},[t.$slots.loader?{name:"loader",fn:Qe(function(O){var R=O.options;return[Be(t.$slots,"loader",{options:R})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),Be(t.$slots,"footer",{value:t.modelValue,options:i.visibleOptions}),!t.options||t.options&&t.options.length===0?(B(),te("span",Z({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),xe(i.emptyMessageText),17)):Ht("",!0),P("span",Z({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),xe(i.selectedMessageText),17),P("span",Z({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[8]||(e[8]=function(){return i.onLastHiddenFocus&&i.onLastHiddenFocus.apply(i,arguments)})},t.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16)):Ht("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16,yP)}o0.render=IP;var Gg={};/**
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
 */const i0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},TP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const o=t[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=t[n++];e[r++]=String.fromCharCode((o&31)<<6|i&63)}else if(o>239&&o<365){const i=t[n++],s=t[n++],a=t[n++],l=((o&7)<<18|(i&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],s=t[n++];e[r++]=String.fromCharCode((o&15)<<12|(i&63)<<6|s&63)}}return e.join("")},s0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<t.length;o+=3){const i=t[o],s=o+1<t.length,a=s?t[o+1]:0,l=o+2<t.length,u=l?t[o+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(p=64)),r.push(n[d],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<t.length;){const i=n[t.charAt(o++)],a=o<t.length?n[t.charAt(o)]:0;++o;const u=o<t.length?n[t.charAt(o)]:64;++o;const f=o<t.length?n[t.charAt(o)]:64;if(++o,i==null||a==null||u==null||f==null)throw new SP;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AP=function(t){const e=i0(t);return s0.encodeByteArray(e,!0)},sc=function(t){return AP(t).replace(/\./g,"")},a0=function(t){try{return s0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function CP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xP=()=>CP().__FIREBASE_DEFAULTS__,PP=()=>{if(typeof process>"u"||typeof Gg>"u")return;const t=Gg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&a0(t[1]);return e&&JSON.parse(e)},qc=()=>{try{return xP()||PP()||kP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},l0=t=>{var e,n;return(n=(e=qc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},OP=t=>{const e=l0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},c0=()=>{var t;return(t=qc())===null||t===void 0?void 0:t.config},u0=t=>{var e;return(e=qc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class RP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function NP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[sc(JSON.stringify(n)),sc(JSON.stringify(s)),""].join(".")}/**
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
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function VP(){var t;const e=(t=qc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $P(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FP(){const t=Mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UP(){return!VP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jP(){try{return typeof indexedDB=="object"}catch{return!1}}function BP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var i;e(((i=o.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const zP="FirebaseError";class Cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zP,Object.setPrototypeOf(this,Cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Da.prototype.create)}}class Da{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,i=this.errors[e],s=i?HP(i,r):"Error",a=`${this.serviceName}: ${s} (${o}).`;return new Cr(o,a,r)}}function HP(t,e){return t.replace(KP,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const KP=/\{\$([^}]+)}/g;function WP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ac(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const i=t[o],s=e[o];if(Qg(i)&&Qg(s)){if(!ac(i,s))return!1}else if(i!==s)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Qg(t){return t!==null&&typeof t=="object"}/**
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
 */function Ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,i]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(i)}}),e}function Ps(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qP(t,e){const n=new GP(t,e);return n.subscribe.bind(n)}class GP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QP(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=Yu),o.error===void 0&&(o.error=Yu),o.complete===void 0&&(o.complete=Yu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yu(){}/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class Wo{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ko="[DEFAULT]";/**
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
 */class YP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(o)return null;throw i}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JP(e))try{this.getOrInitializeService({instanceIdentifier:ko})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:o});r.resolve(i)}catch{}}}}clearInstance(e=ko){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ko){return this.instances.has(e)}getOptions(e=ko){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&s.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(o,i);const s=this.instances.get(o);return s&&e(s,o),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ko){return this.component?this.component.multipleInstances?e:ko:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XP(t){return t===ko?void 0:t}function JP(t){return t.instantiationMode==="EAGER"}/**
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
 */class ZP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ae||(Ae={}));const ek={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},tk=Ae.INFO,nk={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},rk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),o=nk[e];if(o)console[o](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mf{constructor(e){this.name=e,this._logLevel=tk,this._logHandler=rk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ek[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const ok=(t,e)=>e.some(n=>t instanceof n);let Yg,Xg;function ik(){return Yg||(Yg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sk(){return Xg||(Xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d0=new WeakMap,Yd=new WeakMap,h0=new WeakMap,Xu=new WeakMap,gf=new WeakMap;function ak(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{n(ro(t.result)),o()},s=()=>{r(t.error),o()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&d0.set(n,t)}).catch(()=>{}),gf.set(e,t),e}function lk(t){if(Yd.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{n(),o()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});Yd.set(t,e)}let Xd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||h0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ro(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ck(t){Xd=t(Xd)}function uk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ju(this),e,...n);return h0.set(r,e.sort?e.sort():[e]),ro(r)}:sk().includes(t)?function(...e){return t.apply(Ju(this),e),ro(d0.get(this))}:function(...e){return ro(t.apply(Ju(this),e))}}function dk(t){return typeof t=="function"?uk(t):(t instanceof IDBTransaction&&lk(t),ok(t,ik())?new Proxy(t,Xd):t)}function ro(t){if(t instanceof IDBRequest)return ak(t);if(Xu.has(t))return Xu.get(t);const e=dk(t);return e!==t&&(Xu.set(t,e),gf.set(e,t)),e}const Ju=t=>gf.get(t);function hk(t,e,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(t,e),a=ro(s);return r&&s.addEventListener("upgradeneeded",l=>{r(ro(s.result),l.oldVersion,l.newVersion,ro(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),o&&l.addEventListener("versionchange",u=>o(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const fk=["get","getKey","getAll","getAllKeys","count"],pk=["put","add","delete","clear"],Zu=new Map;function Jg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zu.get(e))return Zu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=pk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||fk.includes(n)))return;const i=async function(s,...a){const l=this.transaction(s,o?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),o&&l.done]))[0]};return Zu.set(e,i),i}ck(t=>({...t,get:(e,n,r)=>Jg(e,n)||t.get(e,n,r),has:(e,n)=>!!Jg(e,n)||t.has(e,n)}));/**
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
 */class mk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jd="@firebase/app",Zg="0.10.11";/**
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
 */const yr=new mf("@firebase/app"),yk="@firebase/app-compat",vk="@firebase/analytics-compat",bk="@firebase/analytics",_k="@firebase/app-check-compat",wk="@firebase/app-check",Ek="@firebase/auth",Ik="@firebase/auth-compat",Tk="@firebase/database",Sk="@firebase/database-compat",Ak="@firebase/functions",Ck="@firebase/functions-compat",xk="@firebase/installations",Pk="@firebase/installations-compat",kk="@firebase/messaging",Ok="@firebase/messaging-compat",Rk="@firebase/performance",Nk="@firebase/performance-compat",Lk="@firebase/remote-config",Vk="@firebase/remote-config-compat",Dk="@firebase/storage",Mk="@firebase/storage-compat",$k="@firebase/firestore",Fk="@firebase/vertexai-preview",Uk="@firebase/firestore-compat",jk="firebase",Bk="10.13.2";/**
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
 */const Zd="[DEFAULT]",zk={[Jd]:"fire-core",[yk]:"fire-core-compat",[bk]:"fire-analytics",[vk]:"fire-analytics-compat",[wk]:"fire-app-check",[_k]:"fire-app-check-compat",[Ek]:"fire-auth",[Ik]:"fire-auth-compat",[Tk]:"fire-rtdb",[Sk]:"fire-rtdb-compat",[Ak]:"fire-fn",[Ck]:"fire-fn-compat",[xk]:"fire-iid",[Pk]:"fire-iid-compat",[kk]:"fire-fcm",[Ok]:"fire-fcm-compat",[Rk]:"fire-perf",[Nk]:"fire-perf-compat",[Lk]:"fire-rc",[Vk]:"fire-rc-compat",[Dk]:"fire-gcs",[Mk]:"fire-gcs-compat",[$k]:"fire-fst",[Uk]:"fire-fst-compat",[Fk]:"fire-vertex","fire-js":"fire-js",[jk]:"fire-js-all"};/**
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
 */const lc=new Map,Hk=new Map,eh=new Map;function ey(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mi(t){const e=t.name;if(eh.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;eh.set(e,t);for(const n of lc.values())ey(n,t);for(const n of Hk.values())ey(n,t);return!0}function yf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tn(t){return t.settings!==void 0}/**
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
 */const Kk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},oo=new Da("app","Firebase",Kk);/**
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
 */class Wk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw oo.create("app-deleted",{appName:this._name})}}/**
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
 */const Yi=Bk;function f0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zd,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw oo.create("bad-app-name",{appName:String(o)});if(n||(n=c0()),!n)throw oo.create("no-options");const i=lc.get(o);if(i){if(ac(n,i.options)&&ac(r,i.config))return i;throw oo.create("duplicate-app",{appName:o})}const s=new ZP(o);for(const l of eh.values())s.addComponent(l);const a=new Wk(n,r,s);return lc.set(o,a),a}function p0(t=Zd){const e=lc.get(t);if(!e&&t===Zd&&c0())return f0();if(!e)throw oo.create("no-app",{appName:t});return e}function io(t,e,n){var r;let o=(r=zk[t])!==null&&r!==void 0?r:t;n&&(o+=`-${n}`);const i=o.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${o}" with version "${e}":`];i&&a.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(a.join(" "));return}Mi(new Wo(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const qk="firebase-heartbeat-database",Gk=1,_a="firebase-heartbeat-store";let ed=null;function m0(){return ed||(ed=hk(qk,Gk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_a)}catch(n){console.warn(n)}}}}).catch(t=>{throw oo.create("idb-open",{originalErrorMessage:t.message})})),ed}async function Qk(t){try{const n=(await m0()).transaction(_a),r=await n.objectStore(_a).get(g0(t));return await n.done,r}catch(e){if(e instanceof Cr)yr.warn(e.message);else{const n=oo.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yr.warn(n.message)}}}async function ty(t,e){try{const r=(await m0()).transaction(_a,"readwrite");await r.objectStore(_a).put(e,g0(t)),await r.done}catch(n){if(n instanceof Cr)yr.warn(n.message);else{const r=oo.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yr.warn(r.message)}}}function g0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Yk=1024,Xk=30*24*60*60*1e3;class Jk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ny();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=Xk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){yr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ny(),{heartbeatsToSend:r,unsentEntries:o}=Zk(this._heartbeatsCache.heartbeats),i=sc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return yr.warn(n),""}}}function ny(){return new Date().toISOString().substring(0,10)}function Zk(t,e=Yk){const n=[];let r=t.slice();for(const o of t){const i=n.find(s=>s.agent===o.agent);if(i){if(i.dates.push(o.date),ry(n)>e){i.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),ry(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jP()?BP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return ty(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return ty(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ry(t){return sc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tO(t){Mi(new Wo("platform-logger",e=>new mk(e),"PRIVATE")),Mi(new Wo("heartbeat",e=>new Jk(e),"PRIVATE")),io(Jd,Zg,t),io(Jd,Zg,"esm2017"),io("fire-js","")}tO("");function vf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}function y0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nO=y0,v0=new Da("auth","Firebase",y0());/**
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
 */const cc=new mf("@firebase/auth");function rO(t,...e){cc.logLevel<=Ae.WARN&&cc.warn(`Auth (${Yi}): ${t}`,...e)}function Dl(t,...e){cc.logLevel<=Ae.ERROR&&cc.error(`Auth (${Yi}): ${t}`,...e)}/**
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
 */function Cn(t,...e){throw bf(t,...e)}function Un(t,...e){return bf(t,...e)}function b0(t,e,n){const r=Object.assign(Object.assign({},nO()),{[e]:n});return new Da("auth","Firebase",r).create(e,{appName:t.name})}function jn(t){return b0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return v0.create(t,...e)}function pe(t,e,...n){if(!t)throw bf(e,...n)}function ar(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dl(e),new Error(e)}function vr(t,e){t||ar(e)}/**
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
 */function th(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oO(){return oy()==="http:"||oy()==="https:"}function oy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function iO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oO()||MP()||"connection"in navigator)?navigator.onLine:!0}function sO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $a{constructor(e,n){this.shortDelay=e,this.longDelay=n,vr(n>e,"Short delay should be less than long delay!"),this.isMobile=LP()||$P()}get(){return iO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _f(t,e){vr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lO=new $a(3e4,6e4);function bo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xr(t,e,n,r,o={}){return w0(t,o,async()=>{let i={},s={};r&&(e==="GET"?s=r:i={body:JSON.stringify(r)});const a=Ma(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return DP()||(u.referrerPolicy="no-referrer"),_0.fetch()(E0(t,t.config.apiHost,n,a),u)})}async function w0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aO),e);try{const o=new uO(t),i=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw El(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const a=i.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw El(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw El(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw El(t,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw b0(t,d,u);Cn(t,d)}}catch(o){if(o instanceof Cr)throw o;Cn(t,"network-request-failed",{message:String(o)})}}async function Fa(t,e,n,r,o={}){const i=await xr(t,e,n,r,o);return"mfaPendingCredential"in i&&Cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function E0(t,e,n,r){const o=`${e}${n}?${r}`;return t.config.emulator?_f(t.config,o):`${t.config.apiScheme}://${o}`}function cO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Un(this.auth,"network-request-failed")),lO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function El(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=Un(t,e,r);return o.customData._tokenResponse=n,o}function iy(t){return t!==void 0&&t.enterprise!==void 0}class dO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return cO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function hO(t,e){return xr(t,"GET","/v2/recaptchaConfig",bo(t,e))}/**
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
 */async function fO(t,e){return xr(t,"POST","/v1/accounts:delete",e)}async function I0(t,e){return xr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pO(t,e=!1){const n=Et(t),r=await n.getIdToken(e),o=wf(r);pe(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const i=typeof o.firebase=="object"?o.firebase:void 0,s=i==null?void 0:i.sign_in_provider;return{claims:o,token:r,authTime:Hs(td(o.auth_time)),issuedAtTime:Hs(td(o.iat)),expirationTime:Hs(td(o.exp)),signInProvider:s||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function td(t){return Number(t)*1e3}function wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dl("JWT malformed, contained fewer than 3 sections"),null;try{const o=a0(n);return o?JSON.parse(o):(Dl("Failed to decode base64 JWT payload"),null)}catch(o){return Dl("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function sy(t){const e=wf(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $i(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cr&&mO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uc(t){var e;const n=t.auth,r=await t.getIdToken(),o=await $i(t,I0(n,{idToken:r}));pe(o==null?void 0:o.users.length,n,"internal-error");const i=o.users[0];t._notifyReloadListener(i);const s=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?T0(i.providerUserInfo):[],a=vO(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new nh(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function yO(t){const e=Et(t);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vO(t,e){return[...t.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function T0(t){return t.map(e=>{var{providerId:n}=e,r=vf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function bO(t,e){const n=await w0(t,{},async()=>{const r=Ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:i}=t.config,s=E0(t,o,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_0.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _O(t,e){return xr(t,"POST","/v2/accounts:revokeToken",bo(t,e))}/**
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
 */class Ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=sy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:i}=await bO(e,n);this.updateTokensAndExpiration(r,o,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:i}=n,s=new Ai;return r&&(pe(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),o&&(pe(typeof o=="string","internal-error",{appName:e}),s.accessToken=o),i&&(pe(typeof i=="number","internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ai,this.toJSON())}_performRefresh(){return ar("not implemented")}}/**
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
 */function Mr(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class lr{constructor(e){var{uid:n,auth:r,stsTokenManager:o}=e,i=vf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $i(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pO(this,e)}reload(){return yO(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await $i(this,fO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,o,i,s,a,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(o=n.email)!==null&&o!==void 0?o:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(s=n.photoURL)!==null&&s!==void 0?s:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:N,emailVerified:M,isAnonymous:Y,providerData:U,stsTokenManager:E}=n;pe(N&&E,e,"internal-error");const v=Ai.fromJSON(this.name,E);pe(typeof N=="string",e,"internal-error"),Mr(f,e.name),Mr(p,e.name),pe(typeof M=="boolean",e,"internal-error"),pe(typeof Y=="boolean",e,"internal-error"),Mr(g,e.name),Mr(_,e.name),Mr(k,e.name),Mr(O,e.name),Mr(R,e.name),Mr(x,e.name);const b=new lr({uid:N,auth:e,email:p,emailVerified:M,displayName:f,isAnonymous:Y,photoURL:_,phoneNumber:g,tenantId:k,stsTokenManager:v,createdAt:R,lastLoginAt:x});return U&&Array.isArray(U)&&(b.providerData=U.map(T=>Object.assign({},T))),O&&(b._redirectEventId=O),b}static async _fromIdTokenResponse(e,n,r=!1){const o=new Ai;o.updateFromServerResponse(n);const i=new lr({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await uc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];pe(o.localId!==void 0,"internal-error");const i=o.providerUserInfo!==void 0?T0(o.providerUserInfo):[],s=!(o.email&&o.passwordHash)&&!(i!=null&&i.length),a=new Ai;a.updateFromIdToken(r);const l=new lr({uid:o.localId,auth:e,stsTokenManager:a,isAnonymous:s}),u={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:i,metadata:new nh(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const ay=new Map;function cr(t){vr(t instanceof Function,"Expected a class definition");let e=ay.get(t);return e?(vr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ay.set(t,e),e)}/**
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
 */class S0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}S0.type="NONE";const ly=S0;/**
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
 */function Ml(t,e,n){return`firebase:${t}:${e}:${n}`}class Ci{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:i}=this.auth;this.fullUserKey=Ml(this.userKey,o.apiKey,i),this.fullPersistenceKey=Ml("persistence",o.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ci(cr(ly),e,r);const o=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=o[0]||cr(ly);const s=Ml(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const f=lr._fromJSON(e,d);u!==i&&(a=f),i=u;break}}catch{}const l=o.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ci(i,e,r):(i=l[0],a&&await i._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(s)}catch{}})),new Ci(i,e,r))}}/**
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
 */function cy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(P0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(A0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O0(e))return"Blackberry";if(R0(e))return"Webos";if(C0(e))return"Safari";if((e.includes("chrome/")||x0(e))&&!e.includes("edge/"))return"Chrome";if(k0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function A0(t=Mt()){return/firefox\//i.test(t)}function C0(t=Mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function x0(t=Mt()){return/crios\//i.test(t)}function P0(t=Mt()){return/iemobile/i.test(t)}function k0(t=Mt()){return/android/i.test(t)}function O0(t=Mt()){return/blackberry/i.test(t)}function R0(t=Mt()){return/webos/i.test(t)}function Ef(t=Mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wO(t=Mt()){var e;return Ef(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EO(){return FP()&&document.documentMode===10}function N0(t=Mt()){return Ef(t)||k0(t)||R0(t)||O0(t)||/windows phone/i.test(t)||P0(t)}/**
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
 */function L0(t,e=[]){let n;switch(t){case"Browser":n=cy(Mt());break;case"Worker":n=`${cy(Mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yi}/${r}`}/**
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
 */class IO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((s,a)=>{try{const l=e(i);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function TO(t,e={}){return xr(t,"GET","/v2/passwordPolicy",bo(t,e))}/**
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
 */const SO=6;class AO{constructor(e){var n,r,o,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:SO,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,o,i,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsLowercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class CO{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uy(this),this.idTokenSubscription=new uy(this),this.beforeStateQueue=new IO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cr(n)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await Ci.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await I0(this,{idToken:e}),r=await lr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=o==null?void 0:o._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(o=l.user,i=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(o)}catch(s){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(jn(this));const n=e?Et(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TO(this),n=new AO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Da("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _O(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cr(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await Ci.create(this,[cr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(a,this,"internal-error"),a.then(()=>{s||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,o);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=L0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _o(t){return Et(t)}class uy{constructor(e){this.auth=e,this.observer=null,this.addObserver=qP(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xO(t){Gc=t}function V0(t){return Gc.loadJS(t)}function PO(){return Gc.recaptchaEnterpriseScript}function kO(){return Gc.gapiScript}function OO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const RO="recaptcha-enterprise",NO="NO_RECAPTCHA";class LO{constructor(e){this.type=RO,this.auth=_o(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(s,a)=>{hO(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new dO(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function o(i,s,a){const l=window.grecaptcha;iy(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{s(u)}).catch(()=>{s(NO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,s)=>{r(this.auth).then(a=>{if(!n&&iy(window.grecaptcha))o(a,i,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=PO();l.length!==0&&(l+=a),V0(l).then(()=>{o(a,i,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function dy(t,e,n,r=!1){const o=new LO(t);let i;try{i=await o.verify(n)}catch{i=await o.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:i}):Object.assign(s,{captchaResponse:i}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function rh(t,e,n,r){var o;if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await dy(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await dy(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(i)})}/**
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
 */function VO(t,e){const n=yf(t,"auth");if(n.isInitialized()){const o=n.getImmediate(),i=n.getOptions();if(ac(i,e??{}))return o;Cn(o,"already-initialized")}return n.initialize({options:e})}function DO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function MO(t,e,n){const r=_o(t);pe(r._canInitEmulator,r,"emulator-config-failed"),pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,i=D0(e),{host:s,port:a}=$O(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),FO()}function D0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $O(t){const e=D0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const i=o[1];return{host:i,port:hy(r.substr(i.length+1))}}else{const[i,s]=r.split(":");return{host:i,port:hy(s)}}}function hy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class If{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ar("not implemented")}_getIdTokenResponse(e){return ar("not implemented")}_linkToIdToken(e,n){return ar("not implemented")}_getReauthenticationResolver(e){return ar("not implemented")}}async function UO(t,e){return xr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function jO(t,e){return Fa(t,"POST","/v1/accounts:signInWithPassword",bo(t,e))}/**
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
 */async function BO(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",bo(t,e))}async function zO(t,e){return Fa(t,"POST","/v1/accounts:signInWithEmailLink",bo(t,e))}/**
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
 */class wa extends If{constructor(e,n,r,o=null){super("password",r),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new wa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rh(e,n,"signInWithPassword",jO);case"emailLink":return BO(e,{email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rh(e,r,"signUpPassword",UO);case"emailLink":return zO(e,{idToken:n,email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xi(t,e){return Fa(t,"POST","/v1/accounts:signInWithIdp",bo(t,e))}/**
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
 */const HO="http://localhost";class qo extends If{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=n,i=vf(n,["providerId","signInMethod"]);if(!r||!o)return null;const s=new qo(r,o);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xi(e,n)}buildRequest(){const e={requestUri:HO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ma(n)}return e}}/**
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
 */function KO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WO(t){const e=xs(Ps(t)).link,n=e?xs(Ps(e)).deep_link_id:null,r=xs(Ps(t)).deep_link_id;return(r?xs(Ps(r)).link:null)||r||n||e||t}class Tf{constructor(e){var n,r,o,i,s,a;const l=xs(Ps(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=KO((o=l.mode)!==null&&o!==void 0?o:null);pe(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=WO(e);try{return new Tf(n)}catch{return null}}}/**
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
 */class Xi{constructor(){this.providerId=Xi.PROVIDER_ID}static credential(e,n){return wa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Tf.parseLink(n);return pe(r,"argument-error"),wa._fromEmailAndCode(e,r.code,r.tenantId)}}Xi.PROVIDER_ID="password";Xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class M0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ua extends M0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qr extends Ua{constructor(){super("facebook.com")}static credential(e){return qo._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";qr.PROVIDER_ID="facebook.com";/**
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
 */class Gr extends Ua{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qo._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gr.credential(n,r)}catch{return null}}}Gr.GOOGLE_SIGN_IN_METHOD="google.com";Gr.PROVIDER_ID="google.com";/**
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
 */class Qr extends Ua{constructor(){super("github.com")}static credential(e){return qo._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
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
 */class Yr extends Ua{constructor(){super("twitter.com")}static credential(e,n){return qo._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yr.credential(n,r)}catch{return null}}}Yr.TWITTER_SIGN_IN_METHOD="twitter.com";Yr.PROVIDER_ID="twitter.com";/**
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
 */async function $0(t,e){return Fa(t,"POST","/v1/accounts:signUp",bo(t,e))}/**
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
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const i=await lr._fromIdTokenResponse(e,r,o),s=fy(r);return new br({user:i,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=fy(r);return new br({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function fy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function qO(t){var e;if(Tn(t.app))return Promise.reject(jn(t));const n=_o(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new br({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await $0(n,{returnSecureToken:!0}),o=await br._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(o.user),o}/**
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
 */class dc extends Cr{constructor(e,n,r,o){var i;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,dc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new dc(e,n,r,o)}}function F0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?dc._fromErrorAndOperation(t,i,e,r):i})}async function GO(t,e,n=!1){const r=await $i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return br._forOperation(t,"link",r)}/**
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
 */async function QO(t,e,n=!1){const{auth:r}=t;if(Tn(r.app))return Promise.reject(jn(r));const o="reauthenticate";try{const i=await $i(t,F0(r,o,e,t),n);pe(i.idToken,r,"internal-error");const s=wf(i.idToken);pe(s,r,"internal-error");const{sub:a}=s;return pe(t.uid===a,r,"user-mismatch"),br._forOperation(t,o,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Cn(r,"user-mismatch"),i}}/**
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
 */async function U0(t,e,n=!1){if(Tn(t.app))return Promise.reject(jn(t));const r="signIn",o=await F0(t,r,e),i=await br._fromIdTokenResponse(t,r,o);return n||await t._updateCurrentUser(i.user),i}async function YO(t,e){return U0(_o(t),e)}/**
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
 */async function j0(t){const e=_o(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function XO(t,e,n){if(Tn(t.app))return Promise.reject(jn(t));const r=_o(t),s=await rh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&j0(t),l}),a=await br._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function py(t,e,n){return Tn(t.app)?Promise.reject(jn(t)):YO(Et(t),Xi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&j0(t),r})}/**
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
 */async function JO(t,e){return xr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ZO(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Et(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await $i(r,JO(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}/**
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
 */function eR(t,e){return Et(t).setPersistence(e)}function tR(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function nR(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}function rR(t,e,n,r){return Et(t).onAuthStateChanged(e,n,r)}const hc="__sak";/**
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
 */class B0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const oR=1e3,iR=10;class z0 extends B0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=N0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},i=this.storage.getItem(r);EO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,iR):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}z0.type="LOCAL";const sR=z0;/**
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
 */class H0 extends B0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}H0.type="SESSION";const Sf=H0;/**
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
 */function aR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new Qc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:i}=n.data,s=this.handlersMap[o];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const a=Array.from(s).map(async u=>u(n.origin,i)),l=await aR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qc.receivers=[];/**
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
 */function Af(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let i,s;return new Promise((a,l)=>{const u=Af("",20);o.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:o,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(s),o.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[o.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Bn(){return window}function cR(t){Bn().location.href=t}/**
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
 */function K0(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function uR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hR(){return K0()?self:null}/**
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
 */const W0="firebaseLocalStorageDb",fR=1,fc="firebaseLocalStorage",q0="fbase_key";class ja{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yc(t,e){return t.transaction([fc],e?"readwrite":"readonly").objectStore(fc)}function pR(){const t=indexedDB.deleteDatabase(W0);return new ja(t).toPromise()}function oh(){const t=indexedDB.open(W0,fR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fc,{keyPath:q0})}catch(o){n(o)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fc)?e(r):(r.close(),await pR(),e(await oh()))})})}async function my(t,e,n){const r=Yc(t,!0).put({[q0]:e,value:n});return new ja(r).toPromise()}async function mR(t,e){const n=Yc(t,!1).get(e),r=await new ja(n).toPromise();return r===void 0?null:r.value}function gy(t,e){const n=Yc(t,!0).delete(e);return new ja(n).toPromise()}const gR=800,yR=3;class G0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return K0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qc._getInstance(hR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uR(),!this.activeServiceWorker)return;this.sender=new lR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oh();return await my(e,hc,"1"),await gy(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>my(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const i=Yc(o,!1).getAll();return new ja(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:i}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(i)&&(this.notifyListeners(o,i),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}G0.type="LOCAL";const vR=G0;new $a(3e4,6e4);/**
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
 */function bR(t,e){return e?cr(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Cf extends If{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _R(t){return U0(t.auth,new Cf(t),t.bypassAuthState)}function wR(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),QO(n,new Cf(t),t.bypassAuthState)}async function ER(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),GO(n,new Cf(t),t.bypassAuthState)}/**
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
 */class Q0{constructor(e,n,r,o,i=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:i,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _R;case"linkViaPopup":case"linkViaRedirect":return ER;case"reauthViaPopup":case"reauthViaRedirect":return wR;default:Cn(this.auth,"internal-error")}}resolve(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IR=new $a(2e3,1e4);class vi extends Q0{constructor(e,n,r,o,i){super(e,n,o,i),this.provider=r,this.authWindow=null,this.pollId=null,vi.currentPopupAction&&vi.currentPopupAction.cancel(),vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){vr(this.filter.length===1,"Popup operations only handle one event");const e=Af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IR.get())};e()}}vi.currentPopupAction=null;/**
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
 */const TR="pendingRedirect",$l=new Map;class SR extends Q0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$l.get(this.auth._key());if(!e){try{const r=await AR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$l.set(this.auth._key(),e)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AR(t,e){const n=PR(e),r=xR(t);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function CR(t,e){$l.set(t._key(),e)}function xR(t){return cr(t._redirectPersistence)}function PR(t){return Ml(TR,t.config.apiKey,t.name)}async function kR(t,e,n=!1){if(Tn(t.app))return Promise.reject(jn(t));const r=_o(t),o=bR(r,e),s=await new SR(r,o,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const OR=10*60*1e3;class RR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Y0(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Un(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OR&&this.cachedEventUids.clear(),this.cachedEventUids.has(yy(e))}saveEventToCache(e){this.cachedEventUids.add(yy(e)),this.lastProcessedEventTime=Date.now()}}function yy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Y0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Y0(t);default:return!1}}/**
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
 */async function LR(t,e={}){return xr(t,"GET","/v1/projects",e)}/**
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
 */const VR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DR=/^https?/;async function MR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LR(t);for(const n of e)try{if($R(n))return}catch{}Cn(t,"unauthorized-domain")}function $R(t){const e=th(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!DR.test(n))return!1;if(VR.test(t))return r===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const FR=new $a(3e4,6e4);function vy(){const t=Bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UR(t){return new Promise((e,n)=>{var r,o,i;function s(){vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vy(),n(Un(t,"network-request-failed"))},timeout:FR.get()})}if(!((o=(r=Bn().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((i=Bn().gapi)===null||i===void 0)&&i.load)s();else{const a=OO("iframefcb");return Bn()[a]=()=>{gapi.load?s():n(Un(t,"network-request-failed"))},V0(`${kO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Fl=null,e})}let Fl=null;function jR(t){return Fl=Fl||UR(t),Fl}/**
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
 */const BR=new $a(5e3,15e3),zR="__/auth/iframe",HR="emulator/auth/iframe",KR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qR(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_f(e,HR):`https://${t.config.authDomain}/${zR}`,r={apiKey:e.apiKey,appName:t.name,v:Yi},o=WR.get(t.config.apiHost);o&&(r.eid=o);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ma(r).slice(1)}`}async function GR(t){const e=await jR(t),n=Bn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:qR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KR,dontclear:!0},r=>new Promise(async(o,i)=>{await r.restyle({setHideOnLeave:!1});const s=Un(t,"network-request-failed"),a=Bn().setTimeout(()=>{i(s)},BR.get());function l(){Bn().clearTimeout(a),o(r)}r.ping(l).then(l,()=>{i(s)})}))}/**
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
 */const QR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YR=500,XR=600,JR="_blank",ZR="http://localhost";class by{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function e4(t,e,n,r=YR,o=XR){const i=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},QR),{width:r.toString(),height:o.toString(),top:i,left:s}),u=Mt().toLowerCase();n&&(a=x0(u)?JR:n),A0(u)&&(e=e||ZR,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if(wO(u)&&a!=="_self")return t4(e||"",a),new by(null);const f=window.open(e||"",a,d);pe(f,t,"popup-blocked");try{f.focus()}catch{}return new by(f)}function t4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const n4="__/auth/handler",r4="emulator/auth/handler",o4=encodeURIComponent("fac");async function _y(t,e,n,r,o,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yi,eventId:o};if(e instanceof M0){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",WP(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))s[d]=f}if(e instanceof Ua){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${o4}=${encodeURIComponent(l)}`:"";return`${i4(t)}?${Ma(a).slice(1)}${u}`}function i4({config:t}){return t.emulator?_f(t,r4):`https://${t.authDomain}/${n4}`}/**
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
 */const nd="webStorageSupport";class s4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sf,this._completeRedirectFn=kR,this._overrideRedirectResult=CR}async _openPopup(e,n,r,o){var i;vr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await _y(e,n,r,th(),o);return e4(e,s,Af())}async _openRedirect(e,n,r,o){await this._originValidation(e);const i=await _y(e,n,r,th(),o);return cR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:i}=this.eventManagers[n];return o?Promise.resolve(o):(vr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GR(e),r=new RR(e);return n.register("authEvent",o=>(pe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nd,{type:nd},o=>{var i;const s=(i=o==null?void 0:o[0])===null||i===void 0?void 0:i[nd];s!==void 0&&n(!!s),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return N0()||C0()||Ef()}}const a4=s4;var wy="@firebase/auth",Ey="1.7.9";/**
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
 */class l4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function c4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function u4(t){Mi(new Wo("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;pe(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:L0(t)},u=new CO(r,o,i,l);return DO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mi(new Wo("auth-internal",e=>{const n=_o(e.getProvider("auth").getImmediate());return(r=>new l4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),io(wy,Ey,c4(t)),io(wy,Ey,"esm2017")}/**
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
 */const d4=5*60,h4=u0("authIdTokenMaxAge")||d4;let Iy=null;const f4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>h4)return;const o=n==null?void 0:n.token;Iy!==o&&(Iy=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function xf(t=p0()){const e=yf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VO(t,{popupRedirectResolver:a4,persistence:[vR,sR,Sf]}),r=u0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const s=f4(i.toString());nR(n,s,()=>s(n.currentUser)),tR(n,a=>s(a))}}const o=l0("auth");return o&&MO(n,`http://${o}`),n}function p4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=o=>{const i=Un("internal-error");i.customData=o,n(i)},r.type="text/javascript",r.charset="UTF-8",p4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});u4("Browser");function m4(){return X0().__VUE_DEVTOOLS_GLOBAL_HOOK__}function X0(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const g4=typeof Proxy=="function",y4="devtools-plugin:setup",v4="plugin:settings:set";let li,ih;function b4(){var t;return li!==void 0||(typeof window<"u"&&window.performance?(li=!0,ih=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(li=!0,ih=globalThis.perf_hooks.performance):li=!1),li}function _4(){return b4()?ih.now():Date.now()}class w4{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const s in e.settings){const a=e.settings[s];r[s]=a.defaultValue}const o=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const s=localStorage.getItem(o),a=JSON.parse(s);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(s){try{localStorage.setItem(o,JSON.stringify(s))}catch{}i=s},now(){return _4()}},n&&n.on(v4,(s,a)=>{s===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(s,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(s,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(u=>{this.targetQueue.push({method:a,args:l,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function E4(t,e){const n=t,r=X0(),o=m4(),i=g4&&n.enableEarlyProxy;if(o&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))o.emit(y4,t,e);else{const s=i?new w4(n,o):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:s}),s&&e(s.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var J0="store";function Jo(t){return t===void 0&&(t=null),yn(t!==null?t:J0)}function Ji(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function I4(t){return t!==null&&typeof t=="object"}function T4(t){return t&&typeof t.then=="function"}function S4(t,e){return function(){return t(e)}}function Z0(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function e1(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Xc(t,n,[],t._modules.root,!0),Pf(t,n,e)}function Pf(t,e,n){var r=t._state,o=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={},a={},l=mT(!0);l.run(function(){Ji(i,function(u,d){s[d]=S4(u,t),a[d]=_t(function(){return s[d]()}),Object.defineProperty(t.getters,d,{get:function(){return a[d].value},enumerable:!0})})}),t._state=Qi({data:e}),t._scope=l,t.strict&&k4(t),r&&n&&t._withCommit(function(){r.data=null}),o&&o.stop()}function Xc(t,e,n,r,o){var i=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!i&&!o){var a=kf(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=r.state})}var u=r.context=A4(t,s,n);r.forEachMutation(function(d,f){var p=s+f;C4(t,p,d,u)}),r.forEachAction(function(d,f){var p=d.root?f:s+f,g=d.handler||d;x4(t,p,g,u)}),r.forEachGetter(function(d,f){var p=s+f;P4(t,p,d,u)}),r.forEachChild(function(d,f){Xc(t,e,n.concat(f),d,o)})}function A4(t,e,n){var r=e==="",o={dispatch:r?t.dispatch:function(i,s,a){var l=pc(i,s,a),u=l.payload,d=l.options,f=l.type;return(!d||!d.root)&&(f=e+f),t.dispatch(f,u)},commit:r?t.commit:function(i,s,a){var l=pc(i,s,a),u=l.payload,d=l.options,f=l.type;(!d||!d.root)&&(f=e+f),t.commit(f,u,d)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return t1(t,e)}},state:{get:function(){return kf(t.state,n)}}}),o}function t1(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function C4(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(s){n.call(t,r.state,s)})}function x4(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(s){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},s);return T4(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function P4(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function k4(t){mn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function kf(t,e){return e.reduce(function(n,r){return n[r]},t)}function pc(t,e,n){return I4(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var O4="vuex bindings",Ty="vuex:mutations",rd="vuex:actions",ci="vuex",R4=0;function N4(t,e){E4({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[O4]},function(n){n.addTimelineLayer({id:Ty,label:"Vuex Mutations",color:Sy}),n.addTimelineLayer({id:rd,label:"Vuex Actions",color:Sy}),n.addInspector({id:ci,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===ci)if(r.filter){var o=[];i1(o,e._modules.root,r.filter,""),r.rootNodes=o}else r.rootNodes=[o1(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===ci){var o=r.nodeId;t1(e,o),r.state=D4($4(e._modules,o),o==="root"?e.getters:e._makeLocalGettersCache,o)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===ci){var o=r.nodeId,i=r.path;o!=="root"&&(i=o.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,o){var i={};r.payload&&(i.payload=r.payload),i.state=o,n.notifyComponentUpdate(),n.sendInspectorTree(ci),n.sendInspectorState(ci),n.addTimelineEvent({layerId:Ty,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,o){var i={};r.payload&&(i.payload=r.payload),r._id=R4++,r._time=Date.now(),i.state=o,n.addTimelineEvent({layerId:rd,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,o){var i={},s=Date.now()-r._time;i.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},r.payload&&(i.payload=r.payload),i.state=o,n.addTimelineEvent({layerId:rd,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Sy=8702998,L4=6710886,V4=16777215,n1={label:"namespaced",textColor:V4,backgroundColor:L4};function r1(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function o1(t,e){return{id:e||"root",label:r1(e),tags:t.namespaced?[n1]:[],children:Object.keys(t._children).map(function(n){return o1(t._children[n],e+n+"/")})}}function i1(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[n1]:[]}),Object.keys(e._children).forEach(function(o){i1(t,e._children[o],n,r+o+"/")})}function D4(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),o={state:Object.keys(t.state).map(function(s){return{key:s,editable:!0,value:t.state[s]}})};if(r.length){var i=M4(e);o.getters=Object.keys(i).map(function(s){return{key:s.endsWith("/")?r1(s):s,editable:!1,value:sh(function(){return i[s]})}})}return o}function M4(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var o=e,i=r.pop();r.forEach(function(s){o[s]||(o[s]={_custom:{value:{},display:s,tooltip:"Module",abstract:!0}}),o=o[s]._custom.value}),o[i]=sh(function(){return t[n]})}else e[n]=sh(function(){return t[n]})}),e}function $4(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,o,i){var s=r[o];if(!s)throw new Error('Missing module "'+o+'" for path "'+e+'".');return i===n.length-1?s:s._children},e==="root"?t:t.root._children)}function sh(t){try{return t()}catch(e){return e}}var kn=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},s1={namespaced:{configurable:!0}};s1.namespaced.get=function(){return!!this._rawModule.namespaced};kn.prototype.addChild=function(e,n){this._children[e]=n};kn.prototype.removeChild=function(e){delete this._children[e]};kn.prototype.getChild=function(e){return this._children[e]};kn.prototype.hasChild=function(e){return e in this._children};kn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};kn.prototype.forEachChild=function(e){Ji(this._children,e)};kn.prototype.forEachGetter=function(e){this._rawModule.getters&&Ji(this._rawModule.getters,e)};kn.prototype.forEachAction=function(e){this._rawModule.actions&&Ji(this._rawModule.actions,e)};kn.prototype.forEachMutation=function(e){this._rawModule.mutations&&Ji(this._rawModule.mutations,e)};Object.defineProperties(kn.prototype,s1);var Zo=function(e){this.register([],e,!1)};Zo.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Zo.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,o){return n=n.getChild(o),r+(n.namespaced?o+"/":"")},"")};Zo.prototype.update=function(e){a1([],this.root,e)};Zo.prototype.register=function(e,n,r){var o=this;r===void 0&&(r=!0);var i=new kn(n,r);if(e.length===0)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}n.modules&&Ji(n.modules,function(a,l){o.register(e.concat(l),a,r)})};Zo.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],o=n.getChild(r);o&&o.runtime&&n.removeChild(r)};Zo.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function a1(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;a1(t.concat(r),e.getChild(r),n.modules[r])}}function F4(t){return new Xt(t)}var Xt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var o=e.strict;o===void 0&&(o=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Zo(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var s=this,a=this,l=a.dispatch,u=a.commit;this.dispatch=function(p,g){return l.call(s,p,g)},this.commit=function(p,g,_){return u.call(s,p,g,_)},this.strict=o;var d=this._modules.root.state;Xc(this,d,[],this._modules.root),Pf(this,d),r.forEach(function(f){return f(n)})},Of={state:{configurable:!0}};Xt.prototype.install=function(e,n){e.provide(n||J0,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&N4(e,this)};Of.state.get=function(){return this._state.data};Of.state.set=function(t){};Xt.prototype.commit=function(e,n,r){var o=this,i=pc(e,n,r),s=i.type,a=i.payload,l={type:s,payload:a},u=this._mutations[s];u&&(this._withCommit(function(){u.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(d){return d(l,o.state)}))};Xt.prototype.dispatch=function(e,n){var r=this,o=pc(e,n),i=o.type,s=o.payload,a={type:i,payload:s},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(d){return d.before}).forEach(function(d){return d.before(a,r.state)})}catch{}var u=l.length>1?Promise.all(l.map(function(d){return d(s)})):l[0](s);return new Promise(function(d,f){u.then(function(p){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,r.state)})}catch{}d(p)},function(p){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,r.state,p)})}catch{}f(p)})})}};Xt.prototype.subscribe=function(e,n){return Z0(e,this._subscribers,n)};Xt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Z0(r,this._actionSubscribers,n)};Xt.prototype.watch=function(e,n,r){var o=this;return mn(function(){return e(o.state,o.getters)},n,Object.assign({},r))};Xt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Xt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Xc(this,this.state,e,this._modules.get(e),r.preserveState),Pf(this,this.state)};Xt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=kf(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),e1(this)};Xt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Xt.prototype.hotUpdate=function(e){this._modules.update(e),e1(this,!0)};Xt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Xt.prototype,Of);/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const di=typeof document<"u";function U4(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const je=Object.assign;function od(t,e){const n={};for(const r in e){const o=e[r];n[r]=xn(o)?o.map(t):t(o)}return n}const Ks=()=>{},xn=Array.isArray,l1=/#/g,j4=/&/g,B4=/\//g,z4=/=/g,H4=/\?/g,c1=/\+/g,K4=/%5B/g,W4=/%5D/g,u1=/%5E/g,q4=/%60/g,d1=/%7B/g,G4=/%7C/g,h1=/%7D/g,Q4=/%20/g;function Rf(t){return encodeURI(""+t).replace(G4,"|").replace(K4,"[").replace(W4,"]")}function Y4(t){return Rf(t).replace(d1,"{").replace(h1,"}").replace(u1,"^")}function ah(t){return Rf(t).replace(c1,"%2B").replace(Q4,"+").replace(l1,"%23").replace(j4,"%26").replace(q4,"`").replace(d1,"{").replace(h1,"}").replace(u1,"^")}function X4(t){return ah(t).replace(z4,"%3D")}function J4(t){return Rf(t).replace(l1,"%23").replace(H4,"%3F")}function Z4(t){return t==null?"":J4(t).replace(B4,"%2F")}function Ea(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const e6=/\/$/,t6=t=>t.replace(e6,"");function id(t,e,n="/"){let r,o={},i="",s="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),o=t(i)),a>-1&&(r=r||e.slice(0,a),s=e.slice(a,e.length)),r=i6(r??e,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:Ea(s)}}function n6(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ay(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function r6(t,e,n){const r=e.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Fi(e.matched[r],n.matched[o])&&f1(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function f1(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!o6(t[n],e[n]))return!1;return!0}function o6(t,e){return xn(t)?Cy(t,e):xn(e)?Cy(e,t):t===e}function Cy(t,e){return xn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function i6(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=n.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s).join("/")}const $r={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ia;(function(t){t.pop="pop",t.push="push"})(Ia||(Ia={}));var Ws;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ws||(Ws={}));function s6(t){if(!t)if(di){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),t6(t)}const a6=/^[^#]+#/;function l6(t,e){return t.replace(a6,"#")+e}function c6(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Jc=()=>({left:window.scrollX,top:window.scrollY});function u6(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;e=c6(o,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function xy(t,e){return(history.state?history.state.position-e:-1)+t}const lh=new Map;function d6(t,e){lh.set(t,e)}function h6(t){const e=lh.get(t);return lh.delete(t),e}let f6=()=>location.protocol+"//"+location.host;function p1(t,e){const{pathname:n,search:r,hash:o}=e,i=t.indexOf("#");if(i>-1){let a=o.includes(t.slice(i))?t.slice(i).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),Ay(l,"")}return Ay(n,t)+r+o}function p6(t,e,n,r){let o=[],i=[],s=null;const a=({state:p})=>{const g=p1(t,location),_=n.value,k=e.value;let O=0;if(p){if(n.value=g,e.value=p,s&&s===_){s=null;return}O=k?p.position-k.position:0}else r(g);o.forEach(R=>{R(n.value,_,{delta:O,type:Ia.pop,direction:O?O>0?Ws.forward:Ws.back:Ws.unknown})})};function l(){s=n.value}function u(p){o.push(p);const g=()=>{const _=o.indexOf(p);_>-1&&o.splice(_,1)};return i.push(g),g}function d(){const{history:p}=window;p.state&&p.replaceState(je({},p.state,{scroll:Jc()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function Py(t,e,n,r=!1,o=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:o?Jc():null}}function m6(t){const{history:e,location:n}=window,r={value:p1(t,n)},o={value:e.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:f6()+t+l;try{e[d?"replaceState":"pushState"](u,"",p),o.value=u}catch(g){console.error(g),n[d?"replace":"assign"](p)}}function s(l,u){const d=je({},e.state,Py(o.value.back,l,o.value.forward,!0),u,{position:o.value.position});i(l,d,!0),r.value=l}function a(l,u){const d=je({},o.value,e.state,{forward:l,scroll:Jc()});i(d.current,d,!0);const f=je({},Py(r.value,l,null),{position:d.position+1},u);i(l,f,!1),r.value=l}return{location:r,state:o,push:a,replace:s}}function g6(t){t=s6(t);const e=m6(t),n=p6(t,e.state,e.location,e.replace);function r(i,s=!0){s||n.pauseListeners(),history.go(i)}const o=je({location:"",base:t,go:r,createHref:l6.bind(null,t)},e,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function y6(t){return typeof t=="string"||t&&typeof t=="object"}function m1(t){return typeof t=="string"||typeof t=="symbol"}const g1=Symbol("");var ky;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ky||(ky={}));function Ui(t,e){return je(new Error,{type:t,[g1]:!0},e)}function Zn(t,e){return t instanceof Error&&g1 in t&&(e==null||!!(t.type&e))}const Oy="[^/]+?",v6={sensitive:!1,strict:!1,start:!0,end:!0},b6=/[.+*?^${}()[\]/\\]/g;function _6(t,e){const n=je({},v6,e),r=[];let o=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let f=0;f<u.length;f++){const p=u[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(o+="/"),o+=p.value.replace(b6,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:k,optional:O,regexp:R}=p;i.push({name:_,repeatable:k,optional:O});const x=R||Oy;if(x!==Oy){g+=10;try{new RegExp(`(${x})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${x}): `+M.message)}}let N=k?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(N=O&&u.length<2?`(?:/${N})`:"/"+N),O&&(N+="?"),o+=N,g+=20,O&&(g+=-8),k&&(g+=-20),x===".*"&&(g+=-50)}d.push(g)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function a(u){const d=u.match(s),f={};if(!d)return null;for(let p=1;p<d.length;p++){const g=d[p]||"",_=i[p-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function l(u){let d="",f=!1;for(const p of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const g of p)if(g.type===0)d+=g.value;else if(g.type===1){const{value:_,repeatable:k,optional:O}=g,R=_ in u?u[_]:"";if(xn(R)&&!k)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const x=xn(R)?R.join("/"):R;if(!x)if(O)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);d+=x}}return d||"/"}return{re:s,score:r,keys:i,parse:a,stringify:l}}function w6(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function y1(t,e){let n=0;const r=t.score,o=e.score;for(;n<r.length&&n<o.length;){const i=w6(r[n],o[n]);if(i)return i;n++}if(Math.abs(o.length-r.length)===1){if(Ry(r))return 1;if(Ry(o))return-1}return o.length-r.length}function Ry(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const E6={type:0,value:""},I6=/[a-zA-Z0-9_]/;function T6(t){if(!t)return[[]];if(t==="/")return[[E6]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a=0,l,u="",d="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),s()):l===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:I6.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),s(),o}function S6(t,e,n){const r=_6(T6(t.path),n),o=je(r,{record:t,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf==!e.record.aliasOf&&e.children.push(o),o}function A6(t,e){const n=[],r=new Map;e=Vy({strict:!1,end:!0,sensitive:!1},e);function o(f){return r.get(f)}function i(f,p,g){const _=!g,k=C6(f);k.aliasOf=g&&g.record;const O=Vy(e,f),R=[k];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const Y of M)R.push(je({},k,{components:g?g.record.components:k.components,path:Y,aliasOf:g?g.record:k}))}let x,N;for(const M of R){const{path:Y}=M;if(p&&Y[0]!=="/"){const U=p.record.path,E=U[U.length-1]==="/"?"":"/";M.path=p.record.path+(Y&&E+Y)}if(x=S6(M,p,O),g?g.alias.push(x):(N=N||x,N!==x&&N.alias.push(x),_&&f.name&&!Ly(x)&&s(f.name)),v1(x)&&l(x),k.children){const U=k.children;for(let E=0;E<U.length;E++)i(U[E],x,g&&g.children[E])}g=g||x}return N?()=>{s(N)}:Ks}function s(f){if(m1(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(s),p.alias.forEach(s))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(s),f.alias.forEach(s))}}function a(){return n}function l(f){const p=k6(f,n);n.splice(p,0,f),f.record.name&&!Ly(f)&&r.set(f.record.name,f)}function u(f,p){let g,_={},k,O;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Ui(1,{location:f});O=g.record.name,_=je(Ny(p.params,g.keys.filter(N=>!N.optional).concat(g.parent?g.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),f.params&&Ny(f.params,g.keys.map(N=>N.name))),k=g.stringify(_)}else if(f.path!=null)k=f.path,g=n.find(N=>N.re.test(k)),g&&(_=g.parse(k),O=g.record.name);else{if(g=p.name?r.get(p.name):n.find(N=>N.re.test(p.path)),!g)throw Ui(1,{location:f,currentLocation:p});O=g.record.name,_=je({},p.params,f.params),k=g.stringify(_)}const R=[];let x=g;for(;x;)R.unshift(x.record),x=x.parent;return{name:O,path:k,params:_,matched:R,meta:P6(R)}}t.forEach(f=>i(f));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:s,clearRoutes:d,getRoutes:a,getRecordMatcher:o}}function Ny(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function C6(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:x6(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function x6(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ly(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function P6(t){return t.reduce((e,n)=>je(e,n.meta),{})}function Vy(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function k6(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;y1(t,e[i])<0?r=i:n=i+1}const o=O6(t);return o&&(r=e.lastIndexOf(o,r-1)),r}function O6(t){let e=t;for(;e=e.parent;)if(v1(e)&&y1(t,e)===0)return e}function v1({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function R6(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(c1," "),s=i.indexOf("="),a=Ea(s<0?i:i.slice(0,s)),l=s<0?null:Ea(i.slice(s+1));if(a in e){let u=e[a];xn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Dy(t){let e="";for(let n in t){const r=t[n];if(n=X4(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(xn(r)?r.map(i=>i&&ah(i)):[r&&ah(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function N6(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=xn(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return e}const L6=Symbol(""),My=Symbol(""),Nf=Symbol(""),Lf=Symbol(""),ch=Symbol("");function Es(){let t=[];function e(r){return t.push(r),()=>{const o=t.indexOf(r);o>-1&&t.splice(o,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zr(t,e,n,r,o,i=s=>s()){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Ui(4,{from:n,to:e})):p instanceof Error?l(p):y6(p)?l(Ui(2,{from:e,to:p})):(s&&r.enterCallbacks[o]===s&&typeof p=="function"&&s.push(p),a())},d=i(()=>t.call(r&&r.instances[o],e,n,u));let f=Promise.resolve(d);t.length<3&&(f=f.then(u)),f.catch(p=>l(p))})}function sd(t,e,n,r,o=i=>i()){const i=[];for(const s of t)for(const a in s.components){let l=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(V6(l)){const d=(l.__vccOpts||l)[e];d&&i.push(zr(d,n,r,s,a,o))}else{let u=l();i.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const f=U4(d)?d.default:d;s.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&zr(g,n,r,s,a,o)()}))}}return i}function V6(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $y(t){const e=yn(Nf),n=yn(Lf),r=_t(()=>{const l=Ei(t.to);return e.resolve(l)}),o=_t(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],f=n.matched;if(!d||!f.length)return-1;const p=f.findIndex(Fi.bind(null,d));if(p>-1)return p;const g=Fy(l[u-2]);return u>1&&Fy(d)===g&&f[f.length-1].path!==g?f.findIndex(Fi.bind(null,l[u-2])):p}),i=_t(()=>o.value>-1&&F6(n.params,r.value.params)),s=_t(()=>o.value>-1&&o.value===n.matched.length-1&&f1(n.params,r.value.params));function a(l={}){return $6(l)?e[Ei(t.replace)?"replace":"push"](Ei(t.to)).catch(Ks):Promise.resolve()}return{route:r,href:_t(()=>r.value.href),isActive:i,isExactActive:s,navigate:a}}const D6=Xh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$y,setup(t,{slots:e}){const n=Qi($y(t)),{options:r}=yn(Nf),o=_t(()=>({[Uy(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Uy(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Bc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),M6=D6;function $6(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function F6(t,e){for(const n in e){const r=e[n],o=t[n];if(typeof r=="string"){if(r!==o)return!1}else if(!xn(o)||o.length!==r.length||r.some((i,s)=>i!==o[s]))return!1}return!0}function Fy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Uy=(t,e,n)=>t??e??n,U6=Xh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=yn(ch),o=_t(()=>t.route||r.value),i=yn(My,0),s=_t(()=>{let u=Ei(i);const{matched:d}=o.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),a=_t(()=>o.value.matched[s.value]);Ol(My,_t(()=>s.value+1)),Ol(L6,a),Ol(ch,o);const l=hr();return mn(()=>[l.value,a.value,t.name],([u,d,f],[p,g,_])=>{d&&(d.instances[f]=u,g&&g!==d&&u&&u===p&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),u&&d&&(!g||!Fi(d,g)||!p)&&(d.enterCallbacks[f]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=o.value,d=t.name,f=a.value,p=f&&f.components[d];if(!p)return jy(n.default,{Component:p,route:u});const g=f.props[d],_=g?g===!0?u.params:typeof g=="function"?g(u):g:null,O=Bc(p,je({},_,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(f.instances[d]=null)},ref:l}));return jy(n.default,{Component:O,route:u})||O}}});function jy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const j6=U6;function B6(t){const e=A6(t.routes,t),n=t.parseQuery||R6,r=t.stringifyQuery||Dy,o=t.history,i=Es(),s=Es(),a=Es(),l=FT($r);let u=$r;di&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=od.bind(null,F=>""+F),f=od.bind(null,Z4),p=od.bind(null,Ea);function g(F,ne){let J,re;return m1(F)?(J=e.getRecordMatcher(F),re=ne):re=F,e.addRoute(re,J)}function _(F){const ne=e.getRecordMatcher(F);ne&&e.removeRoute(ne)}function k(){return e.getRoutes().map(F=>F.record)}function O(F){return!!e.getRecordMatcher(F)}function R(F,ne){if(ne=je({},ne||l.value),typeof F=="string"){const C=id(n,F,ne.path),V=e.resolve({path:C.path},ne),j=o.createHref(C.fullPath);return je(C,V,{params:p(V.params),hash:Ea(C.hash),redirectedFrom:void 0,href:j})}let J;if(F.path!=null)J=je({},F,{path:id(n,F.path,ne.path).path});else{const C=je({},F.params);for(const V in C)C[V]==null&&delete C[V];J=je({},F,{params:f(C)}),ne.params=f(ne.params)}const re=e.resolve(J,ne),Pe=F.hash||"";re.params=d(p(re.params));const We=n6(r,je({},F,{hash:Y4(Pe),path:re.path})),w=o.createHref(We);return je({fullPath:We,hash:Pe,query:r===Dy?N6(F.query):F.query||{}},re,{redirectedFrom:void 0,href:w})}function x(F){return typeof F=="string"?id(n,F,l.value.path):je({},F)}function N(F,ne){if(u!==F)return Ui(8,{from:ne,to:F})}function M(F){return E(F)}function Y(F){return M(je(x(F),{replace:!0}))}function U(F){const ne=F.matched[F.matched.length-1];if(ne&&ne.redirect){const{redirect:J}=ne;let re=typeof J=="function"?J(F):J;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=x(re):{path:re},re.params={}),je({query:F.query,hash:F.hash,params:re.path!=null?{}:F.params},re)}}function E(F,ne){const J=u=R(F),re=l.value,Pe=F.state,We=F.force,w=F.replace===!0,C=U(J);if(C)return E(je(x(C),{state:typeof C=="object"?je({},Pe,C.state):Pe,force:We,replace:w}),ne||J);const V=J;V.redirectedFrom=ne;let j;return!We&&r6(r,re,J)&&(j=Ui(16,{to:V,from:re}),vt(re,re,!0,!1)),(j?Promise.resolve(j):T(V,re)).catch($=>Zn($)?Zn($,2)?$:yt($):we($,V,re)).then($=>{if($){if(Zn($,2))return E(je({replace:w},x($.to),{state:typeof $.to=="object"?je({},Pe,$.to.state):Pe,force:We}),ne||V)}else $=S(V,re,!0,w,Pe);return A(V,re,$),$})}function v(F,ne){const J=N(F,ne);return J?Promise.reject(J):Promise.resolve()}function b(F){const ne=an.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(F):F()}function T(F,ne){let J;const[re,Pe,We]=z6(F,ne);J=sd(re.reverse(),"beforeRouteLeave",F,ne);for(const C of re)C.leaveGuards.forEach(V=>{J.push(zr(V,F,ne))});const w=v.bind(null,F,ne);return J.push(w),jt(J).then(()=>{J=[];for(const C of i.list())J.push(zr(C,F,ne));return J.push(w),jt(J)}).then(()=>{J=sd(Pe,"beforeRouteUpdate",F,ne);for(const C of Pe)C.updateGuards.forEach(V=>{J.push(zr(V,F,ne))});return J.push(w),jt(J)}).then(()=>{J=[];for(const C of We)if(C.beforeEnter)if(xn(C.beforeEnter))for(const V of C.beforeEnter)J.push(zr(V,F,ne));else J.push(zr(C.beforeEnter,F,ne));return J.push(w),jt(J)}).then(()=>(F.matched.forEach(C=>C.enterCallbacks={}),J=sd(We,"beforeRouteEnter",F,ne,b),J.push(w),jt(J))).then(()=>{J=[];for(const C of s.list())J.push(zr(C,F,ne));return J.push(w),jt(J)}).catch(C=>Zn(C,8)?C:Promise.reject(C))}function A(F,ne,J){a.list().forEach(re=>b(()=>re(F,ne,J)))}function S(F,ne,J,re,Pe){const We=N(F,ne);if(We)return We;const w=ne===$r,C=di?history.state:{};J&&(re||w?o.replace(F.fullPath,je({scroll:w&&C&&C.scroll},Pe)):o.push(F.fullPath,Pe)),l.value=F,vt(F,ne,J,w),yt()}let I;function Ee(){I||(I=o.listen((F,ne,J)=>{if(!Rn.listening)return;const re=R(F),Pe=U(re);if(Pe){E(je(Pe,{replace:!0}),re).catch(Ks);return}u=re;const We=l.value;di&&d6(xy(We.fullPath,J.delta),Jc()),T(re,We).catch(w=>Zn(w,12)?w:Zn(w,2)?(E(w.to,re).then(C=>{Zn(C,20)&&!J.delta&&J.type===Ia.pop&&o.go(-1,!1)}).catch(Ks),Promise.reject()):(J.delta&&o.go(-J.delta,!1),we(w,re,We))).then(w=>{w=w||S(re,We,!1),w&&(J.delta&&!Zn(w,8)?o.go(-J.delta,!1):J.type===Ia.pop&&Zn(w,20)&&o.go(-1,!1)),A(re,We,w)}).catch(Ks)}))}let Le=Es(),Se=Es(),ge;function we(F,ne,J){yt(F);const re=Se.list();return re.length?re.forEach(Pe=>Pe(F,ne,J)):console.error(F),Promise.reject(F)}function It(){return ge&&l.value!==$r?Promise.resolve():new Promise((F,ne)=>{Le.add([F,ne])})}function yt(F){return ge||(ge=!F,Ee(),Le.list().forEach(([ne,J])=>F?J(F):ne()),Le.reset()),F}function vt(F,ne,J,re){const{scrollBehavior:Pe}=t;if(!di||!Pe)return Promise.resolve();const We=!J&&h6(xy(F.fullPath,0))||(re||!J)&&history.state&&history.state.scroll||null;return Nc().then(()=>Pe(F,ne,We)).then(w=>w&&u6(w)).catch(w=>we(w,F,ne))}const Je=F=>o.go(F);let Ze;const an=new Set,Rn={currentRoute:l,listening:!0,addRoute:g,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:R,options:t,push:M,replace:Y,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:i.add,beforeResolve:s.add,afterEach:a.add,onError:Se.add,isReady:It,install(F){const ne=this;F.component("RouterLink",M6),F.component("RouterView",j6),F.config.globalProperties.$router=ne,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Ei(l)}),di&&!Ze&&l.value===$r&&(Ze=!0,M(o.location).catch(Pe=>{}));const J={};for(const Pe in $r)Object.defineProperty(J,Pe,{get:()=>l.value[Pe],enumerable:!0});F.provide(Nf,ne),F.provide(Lf,Sb(J)),F.provide(ch,l);const re=F.unmount;an.add(F),F.unmount=function(){an.delete(F),an.size<1&&(u=$r,I&&I(),I=null,l.value=$r,Ze=!1,ge=!1),re()}}};function jt(F){return F.reduce((ne,J)=>ne.then(()=>b(J)),Promise.resolve())}return Rn}function z6(t,e){const n=[],r=[],o=[],i=Math.max(e.matched.length,t.matched.length);for(let s=0;s<i;s++){const a=e.matched[s];a&&(t.matched.find(u=>Fi(u,a))?r.push(a):n.push(a));const l=t.matched[s];l&&(e.matched.find(u=>Fi(u,l))||o.push(l))}return[n,r,o]}function H6(t){return yn(Lf)}const Zi="/FPA-E-EXAM/logo.png",Jt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,o]of e)n[r]=o;return n},K6={},W6={class:"w-full h-full absolute flex"},q6={class:"h-fit m-auto px-2 flex flex-col-reverse rounded-lg md:flex-row w-4/5 md:w-2/3 py-10 bg-slate-50 shadow-2xl"},G6={class:"flex z-50 md:py-2 w-full h-full"},Q6={class:"w-full h-full py-2 flex flex-col px-2 md:h-full m-auto md:m-0"},Y6=P("img",{src:Zi,alt:"Fpa logo",class:"w-16 -mt-2 md:w-28 md:m-auto mx-auto"},null,-1),X6={class:"w-full h-full flex flex-col space-y-6 text-center md:space-y-12"},J6=jS('<h2 class="text-slate-800 mx-auto font-bold text-lg">Welcome to FPA E-exam.</h2><h4 class="text-slate-800 font-semibold text-xs md:text-base">Please select <span class="font-bold">Sign Up</span> if you&#39;re new to the system. <br><span class="font-bold">OR</span><br> Select <span class="font-bold">Log in</span> if you have already registered.</h4>',2),Z6={class:"flex justify-evenly"},e9={class:"underline text-sm md:text-base text-center"};function t9(t,e,n,r,o,i){const s=Ce("router-link");return B(),te("div",W6,[P("div",q6,[P("div",G6,[P("div",Q6,[Y6,P("div",X6,[J6,P("div",Z6,[ue(s,{to:"/signup",class:"bg-purple-900 text-slate-200 px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:Qe(()=>[rt(" Sign Up")]),_:1}),ue(s,{to:"/login",class:"bg-purple-900 text-slate-200 px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:Qe(()=>[rt(" Log In")]),_:1})]),P("p",e9,[ue(s,{to:"/adminLogin",class:"text-blue-500 underline"},{default:Qe(()=>[rt("Login as an admin.")]),_:1})])])])])])])}const n9=Jt(K6,[["render",t9]]);var r9="firebase",o9="10.13.2";/**
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
 */io(r9,o9,"app");var By=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bo,b1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function b(){}b.prototype=v.prototype,E.D=v.prototype,E.prototype=new b,E.prototype.constructor=E,E.C=function(T,A,S){for(var I=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)I[Ee-2]=arguments[Ee];return v.prototype[A].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(E,v,b){b||(b=0);var T=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)T[A]=v.charCodeAt(b++)|v.charCodeAt(b++)<<8|v.charCodeAt(b++)<<16|v.charCodeAt(b++)<<24;else for(A=0;16>A;++A)T[A]=v[b++]|v[b++]<<8|v[b++]<<16|v[b++]<<24;v=E.g[0],b=E.g[1],A=E.g[2];var S=E.g[3],I=v+(S^b&(A^S))+T[0]+3614090360&4294967295;v=b+(I<<7&4294967295|I>>>25),I=S+(A^v&(b^A))+T[1]+3905402710&4294967295,S=v+(I<<12&4294967295|I>>>20),I=A+(b^S&(v^b))+T[2]+606105819&4294967295,A=S+(I<<17&4294967295|I>>>15),I=b+(v^A&(S^v))+T[3]+3250441966&4294967295,b=A+(I<<22&4294967295|I>>>10),I=v+(S^b&(A^S))+T[4]+4118548399&4294967295,v=b+(I<<7&4294967295|I>>>25),I=S+(A^v&(b^A))+T[5]+1200080426&4294967295,S=v+(I<<12&4294967295|I>>>20),I=A+(b^S&(v^b))+T[6]+2821735955&4294967295,A=S+(I<<17&4294967295|I>>>15),I=b+(v^A&(S^v))+T[7]+4249261313&4294967295,b=A+(I<<22&4294967295|I>>>10),I=v+(S^b&(A^S))+T[8]+1770035416&4294967295,v=b+(I<<7&4294967295|I>>>25),I=S+(A^v&(b^A))+T[9]+2336552879&4294967295,S=v+(I<<12&4294967295|I>>>20),I=A+(b^S&(v^b))+T[10]+4294925233&4294967295,A=S+(I<<17&4294967295|I>>>15),I=b+(v^A&(S^v))+T[11]+2304563134&4294967295,b=A+(I<<22&4294967295|I>>>10),I=v+(S^b&(A^S))+T[12]+1804603682&4294967295,v=b+(I<<7&4294967295|I>>>25),I=S+(A^v&(b^A))+T[13]+4254626195&4294967295,S=v+(I<<12&4294967295|I>>>20),I=A+(b^S&(v^b))+T[14]+2792965006&4294967295,A=S+(I<<17&4294967295|I>>>15),I=b+(v^A&(S^v))+T[15]+1236535329&4294967295,b=A+(I<<22&4294967295|I>>>10),I=v+(A^S&(b^A))+T[1]+4129170786&4294967295,v=b+(I<<5&4294967295|I>>>27),I=S+(b^A&(v^b))+T[6]+3225465664&4294967295,S=v+(I<<9&4294967295|I>>>23),I=A+(v^b&(S^v))+T[11]+643717713&4294967295,A=S+(I<<14&4294967295|I>>>18),I=b+(S^v&(A^S))+T[0]+3921069994&4294967295,b=A+(I<<20&4294967295|I>>>12),I=v+(A^S&(b^A))+T[5]+3593408605&4294967295,v=b+(I<<5&4294967295|I>>>27),I=S+(b^A&(v^b))+T[10]+38016083&4294967295,S=v+(I<<9&4294967295|I>>>23),I=A+(v^b&(S^v))+T[15]+3634488961&4294967295,A=S+(I<<14&4294967295|I>>>18),I=b+(S^v&(A^S))+T[4]+3889429448&4294967295,b=A+(I<<20&4294967295|I>>>12),I=v+(A^S&(b^A))+T[9]+568446438&4294967295,v=b+(I<<5&4294967295|I>>>27),I=S+(b^A&(v^b))+T[14]+3275163606&4294967295,S=v+(I<<9&4294967295|I>>>23),I=A+(v^b&(S^v))+T[3]+4107603335&4294967295,A=S+(I<<14&4294967295|I>>>18),I=b+(S^v&(A^S))+T[8]+1163531501&4294967295,b=A+(I<<20&4294967295|I>>>12),I=v+(A^S&(b^A))+T[13]+2850285829&4294967295,v=b+(I<<5&4294967295|I>>>27),I=S+(b^A&(v^b))+T[2]+4243563512&4294967295,S=v+(I<<9&4294967295|I>>>23),I=A+(v^b&(S^v))+T[7]+1735328473&4294967295,A=S+(I<<14&4294967295|I>>>18),I=b+(S^v&(A^S))+T[12]+2368359562&4294967295,b=A+(I<<20&4294967295|I>>>12),I=v+(b^A^S)+T[5]+4294588738&4294967295,v=b+(I<<4&4294967295|I>>>28),I=S+(v^b^A)+T[8]+2272392833&4294967295,S=v+(I<<11&4294967295|I>>>21),I=A+(S^v^b)+T[11]+1839030562&4294967295,A=S+(I<<16&4294967295|I>>>16),I=b+(A^S^v)+T[14]+4259657740&4294967295,b=A+(I<<23&4294967295|I>>>9),I=v+(b^A^S)+T[1]+2763975236&4294967295,v=b+(I<<4&4294967295|I>>>28),I=S+(v^b^A)+T[4]+1272893353&4294967295,S=v+(I<<11&4294967295|I>>>21),I=A+(S^v^b)+T[7]+4139469664&4294967295,A=S+(I<<16&4294967295|I>>>16),I=b+(A^S^v)+T[10]+3200236656&4294967295,b=A+(I<<23&4294967295|I>>>9),I=v+(b^A^S)+T[13]+681279174&4294967295,v=b+(I<<4&4294967295|I>>>28),I=S+(v^b^A)+T[0]+3936430074&4294967295,S=v+(I<<11&4294967295|I>>>21),I=A+(S^v^b)+T[3]+3572445317&4294967295,A=S+(I<<16&4294967295|I>>>16),I=b+(A^S^v)+T[6]+76029189&4294967295,b=A+(I<<23&4294967295|I>>>9),I=v+(b^A^S)+T[9]+3654602809&4294967295,v=b+(I<<4&4294967295|I>>>28),I=S+(v^b^A)+T[12]+3873151461&4294967295,S=v+(I<<11&4294967295|I>>>21),I=A+(S^v^b)+T[15]+530742520&4294967295,A=S+(I<<16&4294967295|I>>>16),I=b+(A^S^v)+T[2]+3299628645&4294967295,b=A+(I<<23&4294967295|I>>>9),I=v+(A^(b|~S))+T[0]+4096336452&4294967295,v=b+(I<<6&4294967295|I>>>26),I=S+(b^(v|~A))+T[7]+1126891415&4294967295,S=v+(I<<10&4294967295|I>>>22),I=A+(v^(S|~b))+T[14]+2878612391&4294967295,A=S+(I<<15&4294967295|I>>>17),I=b+(S^(A|~v))+T[5]+4237533241&4294967295,b=A+(I<<21&4294967295|I>>>11),I=v+(A^(b|~S))+T[12]+1700485571&4294967295,v=b+(I<<6&4294967295|I>>>26),I=S+(b^(v|~A))+T[3]+2399980690&4294967295,S=v+(I<<10&4294967295|I>>>22),I=A+(v^(S|~b))+T[10]+4293915773&4294967295,A=S+(I<<15&4294967295|I>>>17),I=b+(S^(A|~v))+T[1]+2240044497&4294967295,b=A+(I<<21&4294967295|I>>>11),I=v+(A^(b|~S))+T[8]+1873313359&4294967295,v=b+(I<<6&4294967295|I>>>26),I=S+(b^(v|~A))+T[15]+4264355552&4294967295,S=v+(I<<10&4294967295|I>>>22),I=A+(v^(S|~b))+T[6]+2734768916&4294967295,A=S+(I<<15&4294967295|I>>>17),I=b+(S^(A|~v))+T[13]+1309151649&4294967295,b=A+(I<<21&4294967295|I>>>11),I=v+(A^(b|~S))+T[4]+4149444226&4294967295,v=b+(I<<6&4294967295|I>>>26),I=S+(b^(v|~A))+T[11]+3174756917&4294967295,S=v+(I<<10&4294967295|I>>>22),I=A+(v^(S|~b))+T[2]+718787259&4294967295,A=S+(I<<15&4294967295|I>>>17),I=b+(S^(A|~v))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+S&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var b=v-this.blockSize,T=this.B,A=this.h,S=0;S<v;){if(A==0)for(;S<=b;)o(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<v;)if(T[A++]=E.charCodeAt(S++),A==this.blockSize){o(this,T),A=0;break}}else for(;S<v;)if(T[A++]=E[S++],A==this.blockSize){o(this,T),A=0;break}}this.h=A,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var b=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=b&255,b/=256;for(this.u(E),E=Array(16),v=b=0;4>v;++v)for(var T=0;32>T;T+=8)E[b++]=this.g[v]>>>T&255;return E};function i(E,v){var b=a;return Object.prototype.hasOwnProperty.call(b,E)?b[E]:b[E]=v(E)}function s(E,v){this.h=v;for(var b=[],T=!0,A=E.length-1;0<=A;A--){var S=E[A]|0;T&&S==v||(b[A]=S,T=!1)}this.g=b}var a={};function l(E){return-128<=E&&128>E?i(E,function(v){return new s([v|0],0>v?-1:0)}):new s([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return O(u(-E));for(var v=[],b=1,T=0;E>=b;T++)v[T]=E/b|0,b*=4294967296;return new s(v,0)}function d(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return O(d(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=u(Math.pow(v,8)),T=f,A=0;A<E.length;A+=8){var S=Math.min(8,E.length-A),I=parseInt(E.substring(A,A+S),v);8>S?(S=u(Math.pow(v,S)),T=T.j(S).add(u(I))):(T=T.j(b),T=T.add(u(I)))}return T}var f=l(0),p=l(1),g=l(16777216);t=s.prototype,t.m=function(){if(k(this))return-O(this).m();for(var E=0,v=1,b=0;b<this.g.length;b++){var T=this.i(b);E+=(0<=T?T:4294967296+T)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(_(this))return"0";if(k(this))return"-"+O(this).toString(E);for(var v=u(Math.pow(E,6)),b=this,T="";;){var A=M(b,v).g;b=R(b,A.j(v));var S=((0<b.g.length?b.g[0]:b.h)>>>0).toString(E);if(b=A,_(b))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function _(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=R(this,E),k(E)?-1:_(E)?0:1};function O(E){for(var v=E.g.length,b=[],T=0;T<v;T++)b[T]=~E.g[T];return new s(b,~E.h).add(p)}t.abs=function(){return k(this)?O(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),b=[],T=0,A=0;A<=v;A++){var S=T+(this.i(A)&65535)+(E.i(A)&65535),I=(S>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);T=I>>>16,S&=65535,I&=65535,b[A]=I<<16|S}return new s(b,b[b.length-1]&-2147483648?-1:0)};function R(E,v){return E.add(O(v))}t.j=function(E){if(_(this)||_(E))return f;if(k(this))return k(E)?O(this).j(O(E)):O(O(this).j(E));if(k(E))return O(this.j(O(E)));if(0>this.l(g)&&0>E.l(g))return u(this.m()*E.m());for(var v=this.g.length+E.g.length,b=[],T=0;T<2*v;T++)b[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<E.g.length;A++){var S=this.i(T)>>>16,I=this.i(T)&65535,Ee=E.i(A)>>>16,Le=E.i(A)&65535;b[2*T+2*A]+=I*Le,x(b,2*T+2*A),b[2*T+2*A+1]+=S*Le,x(b,2*T+2*A+1),b[2*T+2*A+1]+=I*Ee,x(b,2*T+2*A+1),b[2*T+2*A+2]+=S*Ee,x(b,2*T+2*A+2)}for(T=0;T<v;T++)b[T]=b[2*T+1]<<16|b[2*T];for(T=v;T<2*v;T++)b[T]=0;return new s(b,0)};function x(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function N(E,v){this.g=E,this.h=v}function M(E,v){if(_(v))throw Error("division by zero");if(_(E))return new N(f,f);if(k(E))return v=M(O(E),v),new N(O(v.g),O(v.h));if(k(v))return v=M(E,O(v)),new N(O(v.g),v.h);if(30<E.g.length){if(k(E)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var b=p,T=v;0>=T.l(E);)b=Y(b),T=Y(T);var A=U(b,1),S=U(T,1);for(T=U(T,2),b=U(b,2);!_(T);){var I=S.add(T);0>=I.l(E)&&(A=A.add(b),S=I),T=U(T,1),b=U(b,1)}return v=R(E,A.j(v)),new N(A,v)}for(A=f;0<=E.l(v);){for(b=Math.max(1,Math.floor(E.m()/v.m())),T=Math.ceil(Math.log(b)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=u(b),I=S.j(v);k(I)||0<I.l(E);)b-=T,S=u(b),I=S.j(v);_(S)&&(S=p),A=A.add(S),E=R(E,I)}return new N(A,E)}t.A=function(E){return M(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),b=[],T=0;T<v;T++)b[T]=this.i(T)&E.i(T);return new s(b,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),b=[],T=0;T<v;T++)b[T]=this.i(T)|E.i(T);return new s(b,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),b=[],T=0;T<v;T++)b[T]=this.i(T)^E.i(T);return new s(b,this.h^E.h)};function Y(E){for(var v=E.g.length+1,b=[],T=0;T<v;T++)b[T]=E.i(T)<<1|E.i(T-1)>>>31;return new s(b,E.h)}function U(E,v){var b=v>>5;v%=32;for(var T=E.g.length-b,A=[],S=0;S<T;S++)A[S]=0<v?E.i(S+b)>>>v|E.i(S+b+1)<<32-v:E.i(S+b);return new s(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,b1=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=u,s.fromString=d,Bo=s}).apply(typeof By<"u"?By:typeof self<"u"?self:typeof window<"u"?window:{});var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _1,w1,ks,E1,Ul,uh,I1,T1,S1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,h,m){return c==Array.prototype||c==Object.prototype||(c[h]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Il=="object"&&Il];for(var h=0;h<c.length;++h){var m=c[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function o(c,h){if(h)e:{var m=r;c=c.split(".");for(var y=0;y<c.length-1;y++){var L=c[y];if(!(L in m))break e;m=m[L]}c=c[c.length-1],y=m[c],h=h(y),h!=y&&h!=null&&e(m,c,{configurable:!0,writable:!0,value:h})}}function i(c,h){c instanceof String&&(c+="");var m=0,y=!1,L={next:function(){if(!y&&m<c.length){var D=m++;return{value:h(D,c[D]),done:!1}}return y=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(c){return c||function(){return i(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(c){var h=typeof c;return h=h!="object"?h:c?Array.isArray(c)?"array":h:"null",h=="array"||h=="object"&&typeof c.length=="number"}function u(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function d(c,h,m){return c.call.apply(c.bind,arguments)}function f(c,h,m){if(!c)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,y),c.apply(h,L)}}return function(){return c.apply(h,arguments)}}function p(c,h,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,p.apply(null,arguments)}function g(c,h){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function _(c,h){function m(){}m.prototype=h.prototype,c.aa=h.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(y,L,D){for(var G=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)G[qe-2]=arguments[qe];return h.prototype[L].apply(y,G)}}function k(c){const h=c.length;if(0<h){const m=Array(h);for(let y=0;y<h;y++)m[y]=c[y];return m}return[]}function O(c,h){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(l(y)){const L=c.length||0,D=y.length||0;c.length=L+D;for(let G=0;G<D;G++)c[L+G]=y[G]}else c.push(y)}}class R{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(c){return/^[\s\xa0]*$/.test(c)}function N(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function M(c){return M[" "](c),c}M[" "]=function(){};var Y=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function U(c,h,m){for(const y in c)h.call(m,c[y],y,c)}function E(c,h){for(const m in c)h.call(void 0,c[m],m,c)}function v(c){const h={};for(const m in c)h[m]=c[m];return h}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(c,h){let m,y;for(let L=1;L<arguments.length;L++){y=arguments[L];for(m in y)c[m]=y[m];for(let D=0;D<b.length;D++)m=b[D],Object.prototype.hasOwnProperty.call(y,m)&&(c[m]=y[m])}}function A(c){var h=1;c=c.split(":");const m=[];for(;0<h&&c.length;)m.push(c.shift()),h--;return c.length&&m.push(c.join(":")),m}function S(c){a.setTimeout(()=>{throw c},0)}function I(){var c=It;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class Ee{constructor(){this.h=this.g=null}add(h,m){const y=Le.get();y.set(h,m),this.h?this.h.next=y:this.g=y,this.h=y}}var Le=new R(()=>new Se,c=>c.reset());class Se{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,we=!1,It=new Ee,yt=()=>{const c=a.Promise.resolve(void 0);ge=()=>{c.then(vt)}};var vt=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(m){S(m)}var h=Le;h.j(c),100>h.h&&(h.h++,c.next=h.g,h.g=c)}we=!1};function Je(){this.s=this.s,this.C=this.C}Je.prototype.s=!1,Je.prototype.ma=function(){this.s||(this.s=!0,this.N())},Je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ze(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var an=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return c}();function Rn(c,h){if(Ze.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget){if(Y){e:{try{M(h.nodeName);var L=!0;break e}catch{}L=!1}L||(h=null)}}else m=="mouseover"?h=c.fromElement:m=="mouseout"&&(h=c.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:jt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Rn.aa.h.call(this)}}_(Rn,Ze);var jt={2:"touch",3:"pen",4:"mouse"};Rn.prototype.h=function(){Rn.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),ne=0;function J(c,h,m,y,L){this.listener=c,this.proxy=null,this.src=h,this.type=m,this.capture=!!y,this.ha=L,this.key=++ne,this.da=this.fa=!1}function re(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Pe(c){this.src=c,this.g={},this.h=0}Pe.prototype.add=function(c,h,m,y,L){var D=c.toString();c=this.g[D],c||(c=this.g[D]=[],this.h++);var G=w(c,h,y,L);return-1<G?(h=c[G],m||(h.fa=!1)):(h=new J(h,this.src,D,!!y,L),h.fa=m,c.push(h)),h};function We(c,h){var m=h.type;if(m in c.g){var y=c.g[m],L=Array.prototype.indexOf.call(y,h,void 0),D;(D=0<=L)&&Array.prototype.splice.call(y,L,1),D&&(re(h),c.g[m].length==0&&(delete c.g[m],c.h--))}}function w(c,h,m,y){for(var L=0;L<c.length;++L){var D=c[L];if(!D.da&&D.listener==h&&D.capture==!!m&&D.ha==y)return L}return-1}var C="closure_lm_"+(1e6*Math.random()|0),V={};function j(c,h,m,y,L){if(Array.isArray(h)){for(var D=0;D<h.length;D++)j(c,h[D],m,y,L);return null}return m=ae(m),c&&c[F]?c.K(h,m,u(y)?!!y.capture:!!y,L):$(c,h,m,!1,y,L)}function $(c,h,m,y,L,D){if(!h)throw Error("Invalid event type");var G=u(L)?!!L.capture:!!L,qe=ee(c);if(qe||(c[C]=qe=new Pe(c)),m=qe.add(h,m,y,G,D),m.proxy)return m;if(y=W(),m.proxy=y,y.src=c,y.listener=m,c.addEventListener)an||(L=G),L===void 0&&(L=!1),c.addEventListener(h.toString(),y,L);else if(c.attachEvent)c.attachEvent(Q(h.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function W(){function c(m){return h.call(c.src,c.listener,m)}const h=K;return c}function X(c,h,m,y,L){if(Array.isArray(h))for(var D=0;D<h.length;D++)X(c,h[D],m,y,L);else y=u(y)?!!y.capture:!!y,m=ae(m),c&&c[F]?(c=c.i,h=String(h).toString(),h in c.g&&(D=c.g[h],m=w(D,m,y,L),-1<m&&(re(D[m]),Array.prototype.splice.call(D,m,1),D.length==0&&(delete c.g[h],c.h--)))):c&&(c=ee(c))&&(h=c.g[h.toString()],c=-1,h&&(c=w(h,m,y,L)),(m=-1<c?h[c]:null)&&q(m))}function q(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[F])We(h.i,c);else{var m=c.type,y=c.proxy;h.removeEventListener?h.removeEventListener(m,y,c.capture):h.detachEvent?h.detachEvent(Q(m),y):h.addListener&&h.removeListener&&h.removeListener(y),(m=ee(h))?(We(m,c),m.h==0&&(m.src=null,h[C]=null)):re(c)}}}function Q(c){return c in V?V[c]:V[c]="on"+c}function K(c,h){if(c.da)c=!0;else{h=new Rn(h,this);var m=c.listener,y=c.ha||c.src;c.fa&&q(c),c=m.call(y,h)}return c}function ee(c){return c=c[C],c instanceof Pe?c:null}var le="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(c){return typeof c=="function"?c:(c[le]||(c[le]=function(h){return c.handleEvent(h)}),c[le])}function se(){Je.call(this),this.i=new Pe(this),this.M=this,this.F=null}_(se,Je),se.prototype[F]=!0,se.prototype.removeEventListener=function(c,h,m,y){X(this,c,h,m,y)};function de(c,h){var m,y=c.F;if(y)for(m=[];y;y=y.F)m.push(y);if(c=c.M,y=h.type||h,typeof h=="string")h=new Ze(h,c);else if(h instanceof Ze)h.target=h.target||c;else{var L=h;h=new Ze(y,c),T(h,L)}if(L=!0,m)for(var D=m.length-1;0<=D;D--){var G=h.g=m[D];L=Fe(G,y,!0,h)&&L}if(G=h.g=c,L=Fe(G,y,!0,h)&&L,L=Fe(G,y,!1,h)&&L,m)for(D=0;D<m.length;D++)G=h.g=m[D],L=Fe(G,y,!1,h)&&L}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var c=this.i,h;for(h in c.g){for(var m=c.g[h],y=0;y<m.length;y++)re(m[y]);delete c.g[h],c.h--}}this.F=null},se.prototype.K=function(c,h,m,y){return this.i.add(String(c),h,!1,m,y)},se.prototype.L=function(c,h,m,y){return this.i.add(String(c),h,!0,m,y)};function Fe(c,h,m,y){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();for(var L=!0,D=0;D<h.length;++D){var G=h[D];if(G&&!G.da&&G.capture==m){var qe=G.listener,Tt=G.ha||G.src;G.fa&&We(c.i,G),L=qe.call(Tt,y)!==!1&&L}}return L&&!y.defaultPrevented}function Re(c,h,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(c,h||0)}function dt(c){c.g=Re(()=>{c.g=null,c.i&&(c.i=!1,dt(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class Zt extends Je{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:dt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ln(c){Je.call(this),this.h=c,this.g={}}_(ln,Je);var rs=[];function Pr(c){U(c.g,function(h,m){this.g.hasOwnProperty(m)&&q(h)},c),c.g={}}ln.prototype.N=function(){ln.aa.N.call(this),Pr(this)},ln.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ni=a.JSON.stringify,$t=a.JSON.parse,cn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function ri(){}ri.prototype.h=null;function hp(c){return c.h||(c.h=c.i())}function fp(){}var os={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gu(){Ze.call(this,"d")}_(gu,Ze);function yu(){Ze.call(this,"c")}_(yu,Ze);var Eo={},pp=null;function Ya(){return pp=pp||new se}Eo.La="serverreachability";function mp(c){Ze.call(this,Eo.La,c)}_(mp,Ze);function is(c){const h=Ya();de(h,new mp(h))}Eo.STAT_EVENT="statevent";function gp(c,h){Ze.call(this,Eo.STAT_EVENT,c),this.stat=h}_(gp,Ze);function Ft(c){const h=Ya();de(h,new gp(h,c))}Eo.Ma="timingevent";function yp(c,h){Ze.call(this,Eo.Ma,c),this.size=h}_(yp,Ze);function ss(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},h)}function as(){this.g=!0}as.prototype.xa=function(){this.g=!1};function Kw(c,h,m,y,L,D){c.info(function(){if(c.g)if(D)for(var G="",qe=D.split("&"),Tt=0;Tt<qe.length;Tt++){var Ve=qe[Tt].split("=");if(1<Ve.length){var kt=Ve[0];Ve=Ve[1];var Ot=kt.split("_");G=2<=Ot.length&&Ot[1]=="type"?G+(kt+"="+Ve+"&"):G+(kt+"=redacted&")}}else G=null;else G=D;return"XMLHTTP REQ ("+y+") [attempt "+L+"]: "+h+`
`+m+`
`+G})}function Ww(c,h,m,y,L,D,G){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+L+"]: "+h+`
`+m+`
`+D+" "+G})}function oi(c,h,m,y){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+Gw(c,m)+(y?" "+y:"")})}function qw(c,h){c.info(function(){return"TIMEOUT: "+h})}as.prototype.info=function(){};function Gw(c,h){if(!c.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var y=m[c];if(!(2>y.length)){var L=y[1];if(Array.isArray(L)&&!(1>L.length)){var D=L[0];if(D!="noop"&&D!="stop"&&D!="close")for(var G=1;G<L.length;G++)L[G]=""}}}}return ni(m)}catch{return h}}var Xa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vu;function Ja(){}_(Ja,ri),Ja.prototype.g=function(){return new XMLHttpRequest},Ja.prototype.i=function(){return{}},vu=new Ja;function kr(c,h,m,y){this.j=c,this.i=h,this.l=m,this.R=y||1,this.U=new ln(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bp}function bp(){this.i=null,this.g="",this.h=!1}var _p={},bu={};function _u(c,h,m){c.L=1,c.v=nl(Xn(h)),c.m=m,c.P=!0,wp(c,null)}function wp(c,h){c.F=Date.now(),Za(c),c.A=Xn(c.v);var m=c.A,y=c.R;Array.isArray(y)||(y=[String(y)]),Vp(m.i,"t",y),c.C=0,m=c.j.J,c.h=new bp,c.g=Zp(c.j,m?h:null,!c.m),0<c.O&&(c.M=new Zt(p(c.Y,c,c.g),c.O)),h=c.U,m=c.g,y=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(rs[0]=L.toString()),L=rs);for(var D=0;D<L.length;D++){var G=j(m,L[D],y||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=c.H?v(c.H):{},c.m?(c.u||(c.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,h)):(c.u="GET",c.g.ea(c.A,c.u,null,h)),is(),Kw(c.i,c.u,c.A,c.l,c.R,c.m)}kr.prototype.ca=function(c){c=c.target;const h=this.M;h&&Jn(c)==3?h.j():this.Y(c)},kr.prototype.Y=function(c){try{if(c==this.g)e:{const Ot=Jn(this.g);var h=this.g.Ba();const ai=this.g.Z();if(!(3>Ot)&&(Ot!=3||this.g&&(this.h.h||this.g.oa()||Bp(this.g)))){this.J||Ot!=4||h==7||(h==8||0>=ai?is(3):is(2)),wu(this);var m=this.g.Z();this.X=m;t:if(Ep(this)){var y=Bp(this.g);c="";var L=y.length,D=Jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Io(this),ls(this);var G="";break t}this.h.i=new a.TextDecoder}for(h=0;h<L;h++)this.h.h=!0,c+=this.h.i.decode(y[h],{stream:!(D&&h==L-1)});y.length=0,this.h.g+=c,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=m==200,Ww(this.i,this.u,this.A,this.l,this.R,Ot,m),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Tt=this.g;if((qe=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(qe)){var Ve=qe;break t}}Ve=null}if(m=Ve)oi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Eu(this,m);else{this.o=!1,this.s=3,Ft(12),Io(this),ls(this);break e}}if(this.P){m=!0;let vn;for(;!this.J&&this.C<G.length;)if(vn=Qw(this,G),vn==bu){Ot==4&&(this.s=4,Ft(14),m=!1),oi(this.i,this.l,null,"[Incomplete Response]");break}else if(vn==_p){this.s=4,Ft(15),oi(this.i,this.l,G,"[Invalid Chunk]"),m=!1;break}else oi(this.i,this.l,vn,null),Eu(this,vn);if(Ep(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||G.length!=0||this.h.h||(this.s=1,Ft(16),m=!1),this.o=this.o&&m,!m)oi(this.i,this.l,G,"[Invalid Chunked Response]"),Io(this),ls(this);else if(0<G.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),xu(kt),kt.M=!0,Ft(11))}}else oi(this.i,this.l,G,null),Eu(this,G);Ot==4&&Io(this),this.o&&!this.J&&(Ot==4?Qp(this.j,this):(this.o=!1,Za(this)))}else hE(this.g),m==400&&0<G.indexOf("Unknown SID")?(this.s=3,Ft(12)):(this.s=0,Ft(13)),Io(this),ls(this)}}}catch{}finally{}};function Ep(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Qw(c,h){var m=c.C,y=h.indexOf(`
`,m);return y==-1?bu:(m=Number(h.substring(m,y)),isNaN(m)?_p:(y+=1,y+m>h.length?bu:(h=h.slice(y,y+m),c.C=y+m,h)))}kr.prototype.cancel=function(){this.J=!0,Io(this)};function Za(c){c.S=Date.now()+c.I,Ip(c,c.I)}function Ip(c,h){if(c.B!=null)throw Error("WatchDog timer not null");c.B=ss(p(c.ba,c),h)}function wu(c){c.B&&(a.clearTimeout(c.B),c.B=null)}kr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(qw(this.i,this.A),this.L!=2&&(is(),Ft(17)),Io(this),this.s=2,ls(this)):Ip(this,this.S-c)};function ls(c){c.j.G==0||c.J||Qp(c.j,c)}function Io(c){wu(c);var h=c.M;h&&typeof h.ma=="function"&&h.ma(),c.M=null,Pr(c.U),c.g&&(h=c.g,c.g=null,h.abort(),h.ma())}function Eu(c,h){try{var m=c.j;if(m.G!=0&&(m.g==c||Iu(m.h,c))){if(!c.K&&Iu(m.h,c)&&m.G==3){try{var y=m.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var L=y;if(L[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)al(m),il(m);else break e;Cu(m),Ft(18)}}else m.za=L[1],0<m.za-m.T&&37500>L[2]&&m.F&&m.v==0&&!m.C&&(m.C=ss(p(m.Za,m),6e3));if(1>=Ap(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else So(m,11)}else if((c.K||m.g==c)&&al(m),!x(h))for(L=m.Da.g.parse(h),h=0;h<L.length;h++){let Ve=L[h];if(m.T=Ve[0],Ve=Ve[1],m.G==2)if(Ve[0]=="c"){m.K=Ve[1],m.ia=Ve[2];const kt=Ve[3];kt!=null&&(m.la=kt,m.j.info("VER="+m.la));const Ot=Ve[4];Ot!=null&&(m.Aa=Ot,m.j.info("SVER="+m.Aa));const ai=Ve[5];ai!=null&&typeof ai=="number"&&0<ai&&(y=1.5*ai,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const vn=c.g;if(vn){const cl=vn.g?vn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cl){var D=y.h;D.g||cl.indexOf("spdy")==-1&&cl.indexOf("quic")==-1&&cl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Tu(D,D.h),D.h=null))}if(y.D){const Pu=vn.g?vn.g.getResponseHeader("X-HTTP-Session-Id"):null;Pu&&(y.ya=Pu,et(y.I,y.D,Pu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var G=c;if(y.qa=Jp(y,y.J?y.ia:null,y.W),G.K){Cp(y.h,G);var qe=G,Tt=y.L;Tt&&(qe.I=Tt),qe.B&&(wu(qe),Za(qe)),y.g=G}else qp(y);0<m.i.length&&sl(m)}else Ve[0]!="stop"&&Ve[0]!="close"||So(m,7);else m.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?So(m,7):Au(m):Ve[0]!="noop"&&m.l&&m.l.ta(Ve),m.v=0)}}is(4)}catch{}}var Yw=class{constructor(c,h){this.g=c,this.map=h}};function Tp(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sp(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ap(c){return c.h?1:c.g?c.g.size:0}function Iu(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function Tu(c,h){c.g?c.g.add(h):c.h=h}function Cp(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}Tp.prototype.cancel=function(){if(this.i=xp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function xp(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const m of c.g.values())h=h.concat(m.D);return h}return k(c.i)}function Xw(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var h=[],m=c.length,y=0;y<m;y++)h.push(c[y]);return h}h=[],m=0;for(y in c)h[m++]=c[y];return h}function Jw(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var h=[];c=c.length;for(var m=0;m<c;m++)h.push(m);return h}h=[],m=0;for(const y in c)h[m++]=y;return h}}}function Pp(c,h){if(c.forEach&&typeof c.forEach=="function")c.forEach(h,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,h,void 0);else for(var m=Jw(c),y=Xw(c),L=y.length,D=0;D<L;D++)h.call(void 0,y[D],m&&m[D],c)}var kp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zw(c,h){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var y=c[m].indexOf("="),L=null;if(0<=y){var D=c[m].substring(0,y);L=c[m].substring(y+1)}else D=c[m];h(D,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function To(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof To){this.h=c.h,el(this,c.j),this.o=c.o,this.g=c.g,tl(this,c.s),this.l=c.l;var h=c.i,m=new ds;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),Op(this,m),this.m=c.m}else c&&(h=String(c).match(kp))?(this.h=!1,el(this,h[1]||"",!0),this.o=cs(h[2]||""),this.g=cs(h[3]||"",!0),tl(this,h[4]),this.l=cs(h[5]||"",!0),Op(this,h[6]||"",!0),this.m=cs(h[7]||"")):(this.h=!1,this.i=new ds(null,this.h))}To.prototype.toString=function(){var c=[],h=this.j;h&&c.push(us(h,Rp,!0),":");var m=this.g;return(m||h=="file")&&(c.push("//"),(h=this.o)&&c.push(us(h,Rp,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(us(m,m.charAt(0)=="/"?nE:tE,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",us(m,oE)),c.join("")};function Xn(c){return new To(c)}function el(c,h,m){c.j=m?cs(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function tl(c,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);c.s=h}else c.s=null}function Op(c,h,m){h instanceof ds?(c.i=h,iE(c.i,c.h)):(m||(h=us(h,rE)),c.i=new ds(h,c.h))}function et(c,h,m){c.i.set(h,m)}function nl(c){return et(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function cs(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function us(c,h,m){return typeof c=="string"?(c=encodeURI(c).replace(h,eE),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function eE(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Rp=/[#\/\?@]/g,tE=/[#\?:]/g,nE=/[#\?]/g,rE=/[#\?@]/g,oE=/#/g;function ds(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function Or(c){c.g||(c.g=new Map,c.h=0,c.i&&Zw(c.i,function(h,m){c.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=ds.prototype,t.add=function(c,h){Or(this),this.i=null,c=ii(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(h),this.h+=1,this};function Np(c,h){Or(c),h=ii(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function Lp(c,h){return Or(c),h=ii(c,h),c.g.has(h)}t.forEach=function(c,h){Or(this),this.g.forEach(function(m,y){m.forEach(function(L){c.call(h,L,y,this)},this)},this)},t.na=function(){Or(this);const c=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let y=0;y<h.length;y++){const L=c[y];for(let D=0;D<L.length;D++)m.push(h[y])}return m},t.V=function(c){Or(this);let h=[];if(typeof c=="string")Lp(this,c)&&(h=h.concat(this.g.get(ii(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)h=h.concat(c[m])}return h},t.set=function(c,h){return Or(this),this.i=null,c=ii(this,c),Lp(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},t.get=function(c,h){return c?(c=this.V(c),0<c.length?String(c[0]):h):h};function Vp(c,h,m){Np(c,h),0<m.length&&(c.i=null,c.g.set(ii(c,h),k(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var y=h[m];const D=encodeURIComponent(String(y)),G=this.V(y);for(y=0;y<G.length;y++){var L=D;G[y]!==""&&(L+="="+encodeURIComponent(String(G[y]))),c.push(L)}}return this.i=c.join("&")};function ii(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function iE(c,h){h&&!c.j&&(Or(c),c.i=null,c.g.forEach(function(m,y){var L=y.toLowerCase();y!=L&&(Np(this,y),Vp(this,L,m))},c)),c.j=h}function sE(c,h){const m=new as;if(a.Image){const y=new Image;y.onload=g(Rr,m,"TestLoadImage: loaded",!0,h,y),y.onerror=g(Rr,m,"TestLoadImage: error",!1,h,y),y.onabort=g(Rr,m,"TestLoadImage: abort",!1,h,y),y.ontimeout=g(Rr,m,"TestLoadImage: timeout",!1,h,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else h(!1)}function aE(c,h){const m=new as,y=new AbortController,L=setTimeout(()=>{y.abort(),Rr(m,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:y.signal}).then(D=>{clearTimeout(L),D.ok?Rr(m,"TestPingServer: ok",!0,h):Rr(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),Rr(m,"TestPingServer: error",!1,h)})}function Rr(c,h,m,y,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),y(m)}catch{}}function lE(){this.g=new cn}function cE(c,h,m){const y=m||"";try{Pp(c,function(L,D){let G=L;u(L)&&(G=ni(L)),h.push(y+D+"="+encodeURIComponent(G))})}catch(L){throw h.push(y+"type="+encodeURIComponent("_badmap")),L}}function hs(c){this.l=c.Ub||null,this.j=c.eb||!1}_(hs,ri),hs.prototype.g=function(){return new rl(this.l,this.j)},hs.prototype.i=function(c){return function(){return c}}({});function rl(c,h){se.call(this),this.D=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(rl,se),t=rl.prototype,t.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=h,this.readyState=1,ps(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(h.body=c),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fs(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ps(this)),this.g&&(this.readyState=3,ps(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dp(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dp(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?fs(this):ps(this),this.readyState==3&&Dp(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,fs(this))},t.Qa=function(c){this.g&&(this.response=c,fs(this))},t.ga=function(){this.g&&fs(this)};function fs(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ps(c)}t.setRequestHeader=function(c,h){this.u.append(c,h)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=h.next();return c.join(`\r
`)};function ps(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(rl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Mp(c){let h="";return U(c,function(m,y){h+=y,h+=":",h+=m,h+=`\r
`}),h}function Su(c,h,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Mp(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):et(c,h,m))}function ut(c){se.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(ut,se);var uE=/^https?$/i,dE=["POST","PUT"];t=ut.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,h,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vu.g(),this.v=this.o?hp(this.o):hp(vu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(D){$p(this,D);return}if(c=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var L in y)m.set(L,y[L]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())m.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(D=>D.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(dE,h,void 0))||y||L||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,G]of m)this.g.setRequestHeader(D,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jp(this),this.u=!0,this.g.send(c),this.u=!1}catch(D){$p(this,D)}};function $p(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.m=5,Fp(c),ol(c)}function Fp(c){c.A||(c.A=!0,de(c,"complete"),de(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,de(this,"complete"),de(this,"abort"),ol(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ol(this,!0)),ut.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Up(this):this.bb())},t.bb=function(){Up(this)};function Up(c){if(c.h&&typeof s<"u"&&(!c.v[1]||Jn(c)!=4||c.Z()!=2)){if(c.u&&Jn(c)==4)Re(c.Ea,0,c);else if(de(c,"readystatechange"),Jn(c)==4){c.h=!1;try{const G=c.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var y;if(y=G===0){var L=String(c.D).match(kp)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),y=!uE.test(L?L.toLowerCase():"")}m=y}if(m)de(c,"complete"),de(c,"success");else{c.m=6;try{var D=2<Jn(c)?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.Z()+"]",Fp(c)}}finally{ol(c)}}}}function ol(c,h){if(c.g){jp(c);const m=c.g,y=c.v[0]?()=>{}:null;c.g=null,c.v=null,h||de(c,"ready");try{m.onreadystatechange=y}catch{}}}function jp(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Jn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),$t(h)}};function Bp(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function hE(c){const h={};c=(c.g&&2<=Jn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(x(c[y]))continue;var m=A(c[y]);const L=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const D=h[L]||[];h[L]=D,D.push(m)}E(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(c,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||h}function zp(c){this.Aa=0,this.i=[],this.j=new as,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ms("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ms("baseRetryDelayMs",5e3,c),this.cb=ms("retryDelaySeedMs",1e4,c),this.Wa=ms("forwardChannelMaxRetries",2,c),this.wa=ms("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Tp(c&&c.concurrentRequestLimit),this.Da=new lE,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zp.prototype,t.la=8,t.G=1,t.connect=function(c,h,m,y){Ft(0),this.W=c,this.H=h||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=Jp(this,null,this.W),sl(this)};function Au(c){if(Hp(c),c.G==3){var h=c.U++,m=Xn(c.I);if(et(m,"SID",c.K),et(m,"RID",h),et(m,"TYPE","terminate"),gs(c,m),h=new kr(c,c.j,h),h.L=2,h.v=nl(Xn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=Zp(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Za(h)}Xp(c)}function il(c){c.g&&(xu(c),c.g.cancel(),c.g=null)}function Hp(c){il(c),c.u&&(a.clearTimeout(c.u),c.u=null),al(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function sl(c){if(!Sp(c.h)&&!c.s){c.s=!0;var h=c.Ga;ge||yt(),we||(ge(),we=!0),It.add(h,c),c.B=0}}function fE(c,h){return Ap(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=h.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=ss(p(c.Ga,c,h),Yp(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new kr(this,this.j,c);let D=this.o;if(this.S&&(D?(D=v(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(L.H=D,D=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Wp(this,L,h),m=Xn(this.I),et(m,"RID",c),et(m,"CVER",22),this.D&&et(m,"X-HTTP-Session-Id",this.D),gs(this,m),D&&(this.O?h="headers="+encodeURIComponent(String(Mp(D)))+"&"+h:this.m&&Su(m,this.m,D)),Tu(this.h,L),this.Ua&&et(m,"TYPE","init"),this.P?(et(m,"$req",h),et(m,"SID","null"),L.T=!0,_u(L,m,null)):_u(L,m,h),this.G=2}}else this.G==3&&(c?Kp(this,c):this.i.length==0||Sp(this.h)||Kp(this))};function Kp(c,h){var m;h?m=h.l:m=c.U++;const y=Xn(c.I);et(y,"SID",c.K),et(y,"RID",m),et(y,"AID",c.T),gs(c,y),c.m&&c.o&&Su(y,c.m,c.o),m=new kr(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),h&&(c.i=h.D.concat(c.i)),h=Wp(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Tu(c.h,m),_u(m,y,h)}function gs(c,h){c.H&&U(c.H,function(m,y){et(h,y,m)}),c.l&&Pp({},function(m,y){et(h,y,m)})}function Wp(c,h,m){m=Math.min(c.i.length,m);var y=c.l?p(c.l.Na,c.l,c):null;e:{var L=c.i;let D=-1;for(;;){const G=["count="+m];D==-1?0<m?(D=L[0].g,G.push("ofs="+D)):D=0:G.push("ofs="+D);let qe=!0;for(let Tt=0;Tt<m;Tt++){let Ve=L[Tt].g;const kt=L[Tt].map;if(Ve-=D,0>Ve)D=Math.max(0,L[Tt].g-100),qe=!1;else try{cE(kt,G,"req"+Ve+"_")}catch{y&&y(kt)}}if(qe){y=G.join("&");break e}}}return c=c.i.splice(0,m),h.D=c,y}function qp(c){if(!c.g&&!c.u){c.Y=1;var h=c.Fa;ge||yt(),we||(ge(),we=!0),It.add(h,c),c.v=0}}function Cu(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=ss(p(c.Fa,c),Yp(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Gp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=ss(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ft(10),il(this),Gp(this))};function xu(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function Gp(c){c.g=new kr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var h=Xn(c.qa);et(h,"RID","rpc"),et(h,"SID",c.K),et(h,"AID",c.T),et(h,"CI",c.F?"0":"1"),!c.F&&c.ja&&et(h,"TO",c.ja),et(h,"TYPE","xmlhttp"),gs(c,h),c.m&&c.o&&Su(h,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=nl(Xn(h)),m.m=null,m.P=!0,wp(m,c)}t.Za=function(){this.C!=null&&(this.C=null,il(this),Cu(this),Ft(19))};function al(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Qp(c,h){var m=null;if(c.g==h){al(c),xu(c),c.g=null;var y=2}else if(Iu(c.h,h))m=h.D,Cp(c.h,h),y=1;else return;if(c.G!=0){if(h.o)if(y==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var L=c.B;y=Ya(),de(y,new yp(y,m)),sl(c)}else qp(c);else if(L=h.s,L==3||L==0&&0<h.X||!(y==1&&fE(c,h)||y==2&&Cu(c)))switch(m&&0<m.length&&(h=c.h,h.i=h.i.concat(m)),L){case 1:So(c,5);break;case 4:So(c,10);break;case 3:So(c,6);break;default:So(c,2)}}}function Yp(c,h){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*h}function So(c,h){if(c.j.info("Error code "+h),h==2){var m=p(c.fb,c),y=c.Xa;const L=!y;y=new To(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||el(y,"https"),nl(y),L?sE(y.toString(),m):aE(y.toString(),m)}else Ft(2);c.G=0,c.l&&c.l.sa(h),Xp(c),Hp(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function Xp(c){if(c.G=0,c.ka=[],c.l){const h=xp(c.h);(h.length!=0||c.i.length!=0)&&(O(c.ka,h),O(c.ka,c.i),c.h.i.length=0,k(c.i),c.i.length=0),c.l.ra()}}function Jp(c,h,m){var y=m instanceof To?Xn(m):new To(m);if(y.g!="")h&&(y.g=h+"."+y.g),tl(y,y.s);else{var L=a.location;y=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;var D=new To(null);y&&el(D,y),h&&(D.g=h),L&&tl(D,L),m&&(D.l=m),y=D}return m=c.D,h=c.ya,m&&h&&et(y,m,h),et(y,"VER",c.la),gs(c,y),y}function Zp(c,h,m){if(h&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Ca&&!c.pa?new ut(new hs({eb:m})):new ut(c.pa),h.Ha(c.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function em(){}t=em.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ll(){}ll.prototype.g=function(c,h){return new en(c,h)};function en(c,h){se.call(this),this.g=new zp(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(c?c["X-WebChannel-Client-Profile"]=h.va:c={"X-WebChannel-Client-Profile":h.va}),this.g.S=c,(c=h&&h.Sb)&&!x(c)&&(this.g.m=c),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new si(this)}_(en,se),en.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){Au(this.g)},en.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=ni(c),c=m);h.i.push(new Yw(h.Ya++,c)),h.G==3&&sl(h)},en.prototype.N=function(){this.g.l=null,delete this.j,Au(this.g),delete this.g,en.aa.N.call(this)};function tm(c){gu.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const m in h){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}_(tm,gu);function nm(){yu.call(this),this.status=1}_(nm,yu);function si(c){this.g=c}_(si,em),si.prototype.ua=function(){de(this.g,"a")},si.prototype.ta=function(c){de(this.g,new tm(c))},si.prototype.sa=function(c){de(this.g,new nm)},si.prototype.ra=function(){de(this.g,"b")},ll.prototype.createWebChannel=ll.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,S1=function(){return new ll},T1=function(){return Ya()},I1=Eo,uh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xa.NO_ERROR=0,Xa.TIMEOUT=8,Xa.HTTP_ERROR=6,Ul=Xa,vp.COMPLETE="complete",E1=vp,fp.EventType=os,os.OPEN="a",os.CLOSE="b",os.ERROR="c",os.MESSAGE="d",se.prototype.listen=se.prototype.K,ks=fp,w1=hs,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,_1=ut}).apply(typeof Il<"u"?Il:typeof self<"u"?self:typeof window<"u"?window:{});const zy="@firebase/firestore";/**
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
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */let es="10.13.2";/**
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
 */const Go=new mf("@firebase/firestore");function Is(){return Go.logLevel}function oe(t,...e){if(Go.logLevel<=Ae.DEBUG){const n=e.map(Vf);Go.debug(`Firestore (${es}): ${t}`,...n)}}function _r(t,...e){if(Go.logLevel<=Ae.ERROR){const n=e.map(Vf);Go.error(`Firestore (${es}): ${t}`,...n)}}function ji(t,...e){if(Go.logLevel<=Ae.WARN){const n=e.map(Vf);Go.warn(`Firestore (${es}): ${t}`,...n)}}function Vf(t){if(typeof t=="string")return t;try{/**
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: `+t;throw _r(e),new Error(e)}function Ye(t,e){t||me()}function be(t,e){return t}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class A1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class i9{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Lt.UNAUTHENTICATED))}shutdown(){}}class s9{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class a9{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const o=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pr,e.enqueueRetryable(()=>o(this.currentUser))};const s=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await o(this.currentUser)})},a=l=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ye(typeof r.accessToken=="string"),new A1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string"),new Lt(e)}}class l9{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class c9{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new l9(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class u9{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class d9{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const s=i.token!==this.R;return this.R=i.token,oe("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const o=i=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>o(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?o(i):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ye(typeof n.token=="string"),this.R=n.token,new u9(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function h9(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class C1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const o=h9(40);for(let i=0;i<o.length;++i)r.length<20&&o[i]<n&&(r+=e.charAt(o[i]%e.length))}return r}}function Me(t,e){return t<e?-1:t>e?1:0}function Bi(t,e,n){return t.length===e.length&&t.every((r,o)=>n(r,e[o]))}/**
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
 */class mt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ce(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new mt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ye{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ye(e)}static min(){return new ye(new mt(0,0))}static max(){return new ye(new mt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ta{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ta.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ta?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let o=0;o<r;o++){const i=e.get(o),s=n.get(o);if(i<s)return-1;if(i>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class it extends Ta{construct(e,n,r){return new it(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(o=>o.length>0))}return new it(n)}static emptyPath(){return new it([])}}const f9=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Ta{construct(e,n,r){return new Ct(e,n,r)}static isValidIdentifier(e){return f9.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",o=0;const i=()=>{if(r.length===0)throw new ce(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;o<e.length;){const a=e[o];if(a==="\\"){if(o+1===e.length)throw new ce(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[o+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ce(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,o+=2}else a==="`"?(s=!s,o++):a!=="."||s?(r+=a,o++):(i(),o++)}if(i(),s)throw new ce(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(n)}static emptyPath(){return new Ct([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(it.fromString(e))}static fromName(e){return new fe(it.fromString(e).popFirst(5))}static empty(){return new fe(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return it.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new it(e.slice()))}}function p9(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,o=ye.fromTimestamp(r===1e9?new mt(n+1,0):new mt(n,r));return new fo(o,fe.empty(),e)}function m9(t){return new fo(t.readTime,t.key,-1)}class fo{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fo(ye.min(),fe.empty(),-1)}static max(){return new fo(ye.max(),fe.empty(),-1)}}function g9(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:Me(t.largestBatchId,e.largestBatchId))}/**
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
 */const y9="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class v9{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ba(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==y9)throw t;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,o)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,o)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let o=0,i=0,s=!1;e.forEach(a=>{++o,a.next(()=>{++i,s&&i===o&&n()},l=>r(l))}),s=!0,i===o&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(o=>o?H.resolve(o):r());return n}static forEach(e,n){const r=[];return e.forEach((o,i)=>{r.push(n.call(this,o,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,o)=>{const i=e.length,s=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{s[u]=d,++a,a===i&&r(s)},d=>o(d))}})}static doWhile(e,n){return new H((r,o)=>{const i=()=>{e()===!0?n().next(()=>{i()},o):r()};i()})}}function b9(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function za(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Df{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Df.oe=-1;function Zc(t){return t==null}function mc(t){return t===0&&1/t==-1/0}function _9(t){return typeof t=="number"&&Number.isInteger(t)&&!mc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Hy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ei(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function x1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ct{constructor(e,n){this.comparator=e,this.root=n||St.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return n+r.left.size;o<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tl(this.root,e,this.comparator,!0)}}class Tl{constructor(e,n,r,o){this.isReverse=o,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&o&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,n,r,o,i){this.key=e,this.value=n,this.color=r??St.RED,this.left=o??St.EMPTY,this.right=i??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,o,i){return new St(e??this.key,n??this.value,r??this.color,o??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let o=this;const i=r(e,o.key);return o=i<0?o.copy(null,null,null,o.left.insert(e,n,r),null):i===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return St.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,o,i){return this}insert(e,n,r){return new St(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ky(this.data.getIterator())}getIteratorFrom(e){return new Ky(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,i=r.getNext().key;if(this.comparator(o,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xt(this.comparator);return n.data=e,n}}class Ky{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class nn{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new nn([])}unionWith(e){let n=new xt(Ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class P1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new P1("Invalid base64 string: "+i):i}}(e);return new Pt(n)}static fromUint8Array(e){const n=function(o){let i="";for(let s=0;s<o.length;++s)i+=String.fromCharCode(o[s]);return i}(e);return new Pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const w9=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function po(t){if(Ye(!!t),typeof t=="string"){let e=0;const n=w9.exec(t);if(Ye(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ht(t.seconds),nanos:ht(t.nanos)}}function ht(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qo(t){return typeof t=="string"?Pt.fromBase64String(t):Pt.fromUint8Array(t)}/**
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
 */function Mf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $f(t){const e=t.mapValue.fields.__previous_value__;return Mf(e)?$f(e):e}function Sa(t){const e=po(t.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
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
 */class E9{constructor(e,n,r,o,i,s,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=o,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Aa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Aa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Aa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Sl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mf(t)?4:T9(t)?9007199254740991:I9(t)?10:11:me()}function Qn(t,e){if(t===e)return!0;const n=Yo(t);if(n!==Yo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sa(t).isEqual(Sa(e));case 3:return function(o,i){if(typeof o.timestampValue=="string"&&typeof i.timestampValue=="string"&&o.timestampValue.length===i.timestampValue.length)return o.timestampValue===i.timestampValue;const s=po(o.timestampValue),a=po(i.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(o,i){return Qo(o.bytesValue).isEqual(Qo(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(o,i){return ht(o.geoPointValue.latitude)===ht(i.geoPointValue.latitude)&&ht(o.geoPointValue.longitude)===ht(i.geoPointValue.longitude)}(t,e);case 2:return function(o,i){if("integerValue"in o&&"integerValue"in i)return ht(o.integerValue)===ht(i.integerValue);if("doubleValue"in o&&"doubleValue"in i){const s=ht(o.doubleValue),a=ht(i.doubleValue);return s===a?mc(s)===mc(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return Bi(t.arrayValue.values||[],e.arrayValue.values||[],Qn);case 10:case 11:return function(o,i){const s=o.mapValue.fields||{},a=i.mapValue.fields||{};if(Hy(s)!==Hy(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!Qn(s[l],a[l])))return!1;return!0}(t,e);default:return me()}}function Ca(t,e){return(t.values||[]).find(n=>Qn(n,e))!==void 0}function zi(t,e){if(t===e)return 0;const n=Yo(t),r=Yo(e);if(n!==r)return Me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Me(t.booleanValue,e.booleanValue);case 2:return function(i,s){const a=ht(i.integerValue||i.doubleValue),l=ht(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Wy(t.timestampValue,e.timestampValue);case 4:return Wy(Sa(t),Sa(e));case 5:return Me(t.stringValue,e.stringValue);case 6:return function(i,s){const a=Qo(i),l=Qo(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const a=i.split("/"),l=s.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=Me(a[u],l[u]);if(d!==0)return d}return Me(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const a=Me(ht(i.latitude),ht(s.latitude));return a!==0?a:Me(ht(i.longitude),ht(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qy(t.arrayValue,e.arrayValue);case 10:return function(i,s){var a,l,u,d;const f=i.fields||{},p=s.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=Me(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((d=_==null?void 0:_.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:qy(g,_)}(t.mapValue,e.mapValue);case 11:return function(i,s){if(i===Sl.mapValue&&s===Sl.mapValue)return 0;if(i===Sl.mapValue)return 1;if(s===Sl.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=s.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const p=Me(l[f],d[f]);if(p!==0)return p;const g=zi(a[l[f]],u[d[f]]);if(g!==0)return g}return Me(l.length,d.length)}(t.mapValue,e.mapValue);default:throw me()}}function Wy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Me(t,e);const n=po(t),r=po(e),o=Me(n.seconds,r.seconds);return o!==0?o:Me(n.nanos,r.nanos)}function qy(t,e){const n=t.values||[],r=e.values||[];for(let o=0;o<n.length&&o<r.length;++o){const i=zi(n[o],r[o]);if(i)return i}return Me(n.length,r.length)}function Hi(t){return dh(t)}function dh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=po(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qo(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",o=!0;for(const i of n.values||[])o?o=!1:r+=",",r+=dh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let o="{",i=!0;for(const s of r)i?i=!1:o+=",",o+=`${s}:${dh(n.fields[s])}`;return o+"}"}(t.mapValue):me()}function hh(t){return!!t&&"integerValue"in t}function Ff(t){return!!t&&"arrayValue"in t}function Gy(t){return!!t&&"nullValue"in t}function Qy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jl(t){return!!t&&"mapValue"in t}function I9(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ei(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function T9(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!jl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(n)}setAll(e){let n=Ct.emptyPath(),r={},o=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,o),r={},o=[],n=a.popLast()}s?r[a.lastSegment()]=qs(s):o.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,o)}delete(e){const n=this.field(e.popLast());jl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=n.mapValue.fields[e.get(r)];jl(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,r){ei(n,(o,i)=>e[o]=i);for(const o of r)delete e[o]}clone(){return new Wt(qs(this.value))}}function k1(t){const e=[];return ei(t.fields,(n,r)=>{const o=new Ct([n]);if(jl(r)){const i=k1(r.mapValue).fields;if(i.length===0)e.push(o);else for(const s of i)e.push(o.child(s))}else e.push(o)}),new nn(e)}/**
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
 */class Vt{constructor(e,n,r,o,i,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=o,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Vt(e,0,ye.min(),ye.min(),ye.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,o){return new Vt(e,1,n,ye.min(),r,o,0)}static newNoDocument(e,n){return new Vt(e,2,n,ye.min(),ye.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,ye.min(),ye.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gc{constructor(e,n){this.position=e,this.inclusive=n}}function Yy(t,e,n){let r=0;for(let o=0;o<t.position.length;o++){const i=e[o],s=t.position[o];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(s.referenceValue),n.key):r=zi(s,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class yc{constructor(e,n="asc"){this.field=e,this.dir=n}}function S9(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class O1{}class pt extends O1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new C9(e,n,r):n==="array-contains"?new k9(e,r):n==="in"?new O9(e,r):n==="not-in"?new R9(e,r):n==="array-contains-any"?new N9(e,r):new pt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new x9(e,r):new P9(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zi(n,this.value)):n!==null&&Yo(this.value)===Yo(n)&&this.matchesComparison(zi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yn extends O1{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Yn(e,n)}matches(e){return R1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function R1(t){return t.op==="and"}function N1(t){return A9(t)&&R1(t)}function A9(t){for(const e of t.filters)if(e instanceof Yn)return!1;return!0}function fh(t){if(t instanceof pt)return t.field.canonicalString()+t.op.toString()+Hi(t.value);if(N1(t))return t.filters.map(e=>fh(e)).join(",");{const e=t.filters.map(n=>fh(n)).join(",");return`${t.op}(${e})`}}function L1(t,e){return t instanceof pt?function(r,o){return o instanceof pt&&r.op===o.op&&r.field.isEqual(o.field)&&Qn(r.value,o.value)}(t,e):t instanceof Yn?function(r,o){return o instanceof Yn&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce((i,s,a)=>i&&L1(s,o.filters[a]),!0):!1}(t,e):void me()}function V1(t){return t instanceof pt?function(n){return`${n.field.canonicalString()} ${n.op} ${Hi(n.value)}`}(t):t instanceof Yn?function(n){return n.op.toString()+" {"+n.getFilters().map(V1).join(" ,")+"}"}(t):"Filter"}class C9 extends pt{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class x9 extends pt{constructor(e,n){super(e,"in",n),this.keys=D1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class P9 extends pt{constructor(e,n){super(e,"not-in",n),this.keys=D1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function D1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class k9 extends pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ff(n)&&Ca(n.arrayValue,this.value)}}class O9 extends pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ca(this.value.arrayValue,n)}}class R9 extends pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ca(this.value.arrayValue,n)}}class N9 extends pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ca(this.value.arrayValue,r))}}/**
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
 */class L9{constructor(e,n=null,r=[],o=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=o,this.limit=i,this.startAt=s,this.endAt=a,this.ue=null}}function Jy(t,e=null,n=[],r=[],o=null,i=null,s=null){return new L9(t,e,n,r,o,i,s)}function Uf(t){const e=be(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Zc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hi(r)).join(",")),e.ue=n}return e.ue}function jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!S9(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!L1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xy(t.startAt,e.startAt)&&Xy(t.endAt,e.endAt)}function ph(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class eu{constructor(e,n=null,r=[],o=[],i=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function V9(t,e,n,r,o,i,s,a){return new eu(t,e,n,r,o,i,s,a)}function Bf(t){return new eu(t)}function Zy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function D9(t){return t.collectionGroup!==null}function Gs(t){const e=be(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new xt(Ct.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new yc(i,r))}),n.has(Ct.keyField().canonicalString())||e.ce.push(new yc(Ct.keyField(),r))}return e.ce}function zn(t){const e=be(t);return e.le||(e.le=M9(e,Gs(t))),e.le}function M9(t,e){if(t.limitType==="F")return Jy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(o=>{const i=o.dir==="desc"?"asc":"desc";return new yc(o.field,i)});const n=t.endAt?new gc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new gc(t.startAt.position,t.startAt.inclusive):null;return Jy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function mh(t,e,n){return new eu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tu(t,e){return jf(zn(t),zn(e))&&t.limitType===e.limitType}function M1(t){return`${Uf(zn(t))}|lt:${t.limitType}`}function hi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(o=>V1(o)).join(", ")}]`),Zc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(o=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(o)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(o=>Hi(o)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(o=>Hi(o)).join(",")),`Target(${r})`}(zn(t))}; limitType=${t.limitType})`}function nu(t,e){return e.isFoundDocument()&&function(r,o){const i=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,o){for(const i of Gs(r))if(!i.field.isKeyField()&&o.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,o){for(const i of r.filters)if(!i.matches(o))return!1;return!0}(t,e)&&function(r,o){return!(r.startAt&&!function(s,a,l){const u=Yy(s,a,l);return s.inclusive?u<=0:u<0}(r.startAt,Gs(r),o)||r.endAt&&!function(s,a,l){const u=Yy(s,a,l);return s.inclusive?u>=0:u>0}(r.endAt,Gs(r),o))}(t,e)}function $9(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $1(t){return(e,n)=>{let r=!1;for(const o of Gs(t)){const i=F9(o,e,n);if(i!==0)return i;r=r||o.field.isKeyField()}return 0}}function F9(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,s,a){const l=s.data.field(i),u=a.data.field(i);return l!==null&&u!==null?zi(l,u):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
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
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[o,i]of r)if(this.equalsFn(o,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<o.length;i++)if(this.equalsFn(o[i][0],e))return void(o[i]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[n]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ei(this.inner,(n,r)=>{for(const[o,i]of r)e(o,i)})}isEmpty(){return x1(this.inner)}size(){return this.innerSize}}/**
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
 */const U9=new ct(fe.comparator);function wr(){return U9}const F1=new ct(fe.comparator);function Os(...t){let e=F1;for(const n of t)e=e.insert(n.key,n);return e}function U1(t){let e=F1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Do(){return Qs()}function j1(){return Qs()}function Qs(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const j9=new ct(fe.comparator),B9=new xt(fe.comparator);function Te(...t){let e=B9;for(const n of t)e=e.add(n);return e}const z9=new xt(Me);function H9(){return z9}/**
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
 */function zf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(e)?"-0":e}}function B1(t){return{integerValue:""+t}}function K9(t,e){return _9(e)?B1(e):zf(t,e)}/**
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
 */class ru{constructor(){this._=void 0}}function W9(t,e,n){return t instanceof vc?function(o,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return i&&Mf(i)&&(i=$f(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof xa?H1(t,e):t instanceof Pa?K1(t,e):function(o,i){const s=z1(o,i),a=ev(s)+ev(o.Pe);return hh(s)&&hh(o.Pe)?B1(a):zf(o.serializer,a)}(t,e)}function q9(t,e,n){return t instanceof xa?H1(t,e):t instanceof Pa?K1(t,e):n}function z1(t,e){return t instanceof bc?function(r){return hh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class vc extends ru{}class xa extends ru{constructor(e){super(),this.elements=e}}function H1(t,e){const n=W1(e);for(const r of t.elements)n.some(o=>Qn(o,r))||n.push(r);return{arrayValue:{values:n}}}class Pa extends ru{constructor(e){super(),this.elements=e}}function K1(t,e){let n=W1(e);for(const r of t.elements)n=n.filter(o=>!Qn(o,r));return{arrayValue:{values:n}}}class bc extends ru{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ev(t){return ht(t.integerValue||t.doubleValue)}function W1(t){return Ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function G9(t,e){return t.field.isEqual(e.field)&&function(r,o){return r instanceof xa&&o instanceof xa||r instanceof Pa&&o instanceof Pa?Bi(r.elements,o.elements,Qn):r instanceof bc&&o instanceof bc?Qn(r.Pe,o.Pe):r instanceof vc&&o instanceof vc}(t.transform,e.transform)}class Q9{constructor(e,n){this.version=e,this.transformResults=n}}class Hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Hn}static exists(e){return new Hn(void 0,e)}static updateTime(e){return new Hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ou{}function q1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Q1(t.key,Hn.none()):new Ha(t.key,t.data,Hn.none());{const n=t.data,r=Wt.empty();let o=new xt(Ct.comparator);for(let i of e.fields)if(!o.has(i)){let s=n.field(i);s===null&&i.length>1&&(i=i.popLast(),s=n.field(i)),s===null?r.delete(i):r.set(i,s),o=o.add(i)}return new wo(t.key,r,new nn(o.toArray()),Hn.none())}}function Y9(t,e,n){t instanceof Ha?function(o,i,s){const a=o.value.clone(),l=nv(o.fieldTransforms,i,s.transformResults);a.setAll(l),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof wo?function(o,i,s){if(!Bl(o.precondition,i))return void i.convertToUnknownDocument(s.version);const a=nv(o.fieldTransforms,i,s.transformResults),l=i.data;l.setAll(G1(o)),l.setAll(a),i.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(o,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ys(t,e,n,r){return t instanceof Ha?function(i,s,a,l){if(!Bl(i.precondition,s))return a;const u=i.value.clone(),d=rv(i.fieldTransforms,l,s);return u.setAll(d),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof wo?function(i,s,a,l){if(!Bl(i.precondition,s))return a;const u=rv(i.fieldTransforms,l,s),d=s.data;return d.setAll(G1(i)),d.setAll(u),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,s,a){return Bl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function X9(t,e){let n=null;for(const r of t.fieldTransforms){const o=e.data.field(r.field),i=z1(r.transform,o||null);i!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,i))}return n||null}function tv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&Bi(r,o,(i,s)=>G9(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ha extends ou{constructor(e,n,r,o=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class wo extends ou{constructor(e,n,r,o,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=o,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function G1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function nv(t,e,n){const r=new Map;Ye(t.length===n.length);for(let o=0;o<n.length;o++){const i=t[o],s=i.transform,a=e.data.field(i.field);r.set(i.field,q9(s,a,n[o]))}return r}function rv(t,e,n){const r=new Map;for(const o of t){const i=o.transform,s=n.data.field(o.field);r.set(o.field,W9(i,s,e))}return r}class Q1 extends ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class J9 extends ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Z9{constructor(e,n,r,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const i=this.mutations[o];i.key.isEqual(e.key)&&Y9(i,e,r[o])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=j1();return this.mutations.forEach(o=>{const i=e.get(o.key),s=i.overlayedDocument;let a=this.applyToLocalView(s,i.mutatedFields);a=n.has(o.key)?null:a;const l=q1(s,a);l!==null&&r.set(o.key,l),s.isValidDocument()||s.convertToNoDocument(ye.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Bi(this.mutations,e.mutations,(n,r)=>tv(n,r))&&Bi(this.baseMutations,e.baseMutations,(n,r)=>tv(n,r))}}class Hf{constructor(e,n,r,o){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=o}static from(e,n,r){Ye(e.mutations.length===r.length);let o=function(){return j9}();const i=e.mutations;for(let s=0;s<i.length;s++)o=o.insert(i[s].key,r[s].version);return new Hf(e,n,r,o)}}/**
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
 */class e3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class t3{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ft,Oe;function n3(t){switch(t){default:return me();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function Y1(t){if(t===void 0)return _r("GRPC error has no .code"),z.UNKNOWN;switch(t){case ft.OK:return z.OK;case ft.CANCELLED:return z.CANCELLED;case ft.UNKNOWN:return z.UNKNOWN;case ft.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case ft.INTERNAL:return z.INTERNAL;case ft.UNAVAILABLE:return z.UNAVAILABLE;case ft.UNAUTHENTICATED:return z.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case ft.NOT_FOUND:return z.NOT_FOUND;case ft.ALREADY_EXISTS:return z.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return z.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case ft.ABORTED:return z.ABORTED;case ft.OUT_OF_RANGE:return z.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return z.UNIMPLEMENTED;case ft.DATA_LOSS:return z.DATA_LOSS;default:return me()}}(Oe=ft||(ft={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function r3(){return new TextEncoder}/**
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
 */const o3=new Bo([4294967295,4294967295],0);function ov(t){const e=r3().encode(t),n=new b1;return n.update(e),new Uint8Array(n.digest())}function iv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Bo([n,r],0),new Bo([o,i],0)]}class Kf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Rs(`Invalid padding: ${n}`);if(r<0)throw new Rs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Rs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Rs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Bo.fromNumber(this.Ie)}Ee(e,n,r){let o=e.add(n.multiply(Bo.fromNumber(r)));return o.compare(o3)===1&&(o=new Bo([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ov(e),[r,o]=iv(n);for(let i=0;i<this.hashCount;i++){const s=this.Ee(r,o,i);if(!this.de(s))return!1}return!0}static create(e,n,r){const o=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Kf(i,o,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=ov(e),[r,o]=iv(n);for(let i=0;i<this.hashCount;i++){const s=this.Ee(r,o,i);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Rs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class iu{constructor(e,n,r,o,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const o=new Map;return o.set(e,Ka.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new iu(ye.min(),o,new ct(Me),wr(),Te())}}class Ka{constructor(e,n,r,o,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ka(r,n,Te(),Te(),Te())}}/**
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
 */class zl{constructor(e,n,r,o){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=o}}class X1{constructor(e,n){this.targetId=e,this.me=n}}class J1{constructor(e,n,r=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=o}}class sv{constructor(){this.fe=0,this.ge=lv(),this.pe=Pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Te(),n=Te(),r=Te();return this.ge.forEach((o,i)=>{switch(i){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:r=r.add(o);break;default:me()}}),new Ka(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=lv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class i3{constructor(e){this.Le=e,this.Be=new Map,this.ke=wr(),this.qe=av(),this.Qe=new ct(Me)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,o)=>{this.ze(o)&&n(o)})}He(e){const n=e.targetId,r=e.me.count,o=this.Je(n);if(o){const i=o.target;if(ph(i))if(r===0){const s=new fe(i.path);this.Ue(n,s,Vt.newNoDocument(s,ye.min()))}else Ye(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),l=a?this.Xe(a,e,s):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:i=0}=n;let s,a;try{s=Qo(r).toUint8Array()}catch(l){if(l instanceof P1)return ji("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Kf(s,o,i)}catch(l){return ji(l instanceof Rs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let o=0;return r.forEach(i=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),o++)}),o}rt(e){const n=new Map;this.Be.forEach((i,s)=>{const a=this.Je(s);if(a){if(i.current&&ph(a.target)){const l=new fe(a.target.path);this.ke.get(l)!==null||this.it(s,l)||this.Ue(s,l,Vt.newNoDocument(l,e))}i.be&&(n.set(s,i.ve()),i.Ce())}});let r=Te();this.qe.forEach((i,s)=>{let a=!0;s.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,s)=>s.setReadTime(e));const o=new iu(e,n,this.Qe,this.ke,r);return this.ke=wr(),this.qe=av(),this.Qe=new ct(Me),o}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,n)?o.Fe(n,1):o.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new sv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new xt(Me),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||oe("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new sv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function av(){return new ct(fe.comparator)}function lv(){return new ct(fe.comparator)}const s3={asc:"ASCENDING",desc:"DESCENDING"},a3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},l3={and:"AND",or:"OR"};class c3{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gh(t,e){return t.useProto3Json||Zc(e)?e:{value:e}}function _c(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Z1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function u3(t,e){return _c(t,e.toTimestamp())}function Kn(t){return Ye(!!t),ye.fromTimestamp(function(n){const r=po(n);return new mt(r.seconds,r.nanos)}(t))}function Wf(t,e){return yh(t,e).canonicalString()}function yh(t,e){const n=function(o){return new it(["projects",o.projectId,"databases",o.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ew(t){const e=it.fromString(t);return Ye(iw(e)),e}function vh(t,e){return Wf(t.databaseId,e.path)}function ad(t,e){const n=ew(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(nw(n))}function tw(t,e){return Wf(t.databaseId,e)}function d3(t){const e=ew(t);return e.length===4?it.emptyPath():nw(e)}function bh(t){return new it(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nw(t){return Ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cv(t,e,n){return{name:vh(t,e),fields:n.value.mapValue.fields}}function h3(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Ye(d===void 0||typeof d=="string"),Pt.fromBase64String(d||"")):(Ye(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Pt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(u){const d=u.code===void 0?z.UNKNOWN:Y1(u.code);return new ce(d,u.message||"")}(s);n=new J1(r,o,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=ad(t,r.document.name),i=Kn(r.document.updateTime),s=r.document.createTime?Kn(r.document.createTime):ye.min(),a=new Wt({mapValue:{fields:r.document.fields}}),l=Vt.newFoundDocument(o,i,s,a),u=r.targetIds||[],d=r.removedTargetIds||[];n=new zl(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=ad(t,r.document),i=r.readTime?Kn(r.readTime):ye.min(),s=Vt.newNoDocument(o,i),a=r.removedTargetIds||[];n=new zl([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=ad(t,r.document),i=r.removedTargetIds||[];n=new zl([],i,o,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:i}=r,s=new t3(o,i),a=r.targetId;n=new X1(a,s)}}return n}function f3(t,e){let n;if(e instanceof Ha)n={update:cv(t,e.key,e.value)};else if(e instanceof Q1)n={delete:vh(t,e.key)};else if(e instanceof wo)n={update:cv(t,e.key,e.data),updateMask:E3(e.fieldMask)};else{if(!(e instanceof J9))return me();n={verify:vh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const a=s.transform;if(a instanceof vc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof xa)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Pa)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof bc)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(o,i){return i.updateTime!==void 0?{updateTime:u3(o,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function p3(t,e){return t&&t.length>0?(Ye(e!==void 0),t.map(n=>function(o,i){let s=o.updateTime?Kn(o.updateTime):Kn(i);return s.isEqual(ye.min())&&(s=Kn(i)),new Q9(s,o.transformResults||[])}(n,e))):[]}function m3(t,e){return{documents:[tw(t,e.path)]}}function g3(t,e){const n={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=tw(t,o);const i=function(u){if(u.length!==0)return ow(Yn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(d=>function(p){return{field:fi(p.field),direction:b3(p.dir)}}(d))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=gh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:o}}function y3(t){let e=d3(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){Ye(r===1);const d=n.from[0];d.allDescendants?o=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(f){const p=rw(f);return p instanceof Yn&&N1(p)?p.getFilters():[p]}(n.where));let s=[];n.orderBy&&(s=function(f){return f.map(p=>function(_){return new yc(pi(_.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Zc(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,g=f.values||[];return new gc(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const p=!f.before,g=f.values||[];return new gc(g,p)}(n.endAt)),V9(e,o,s,i,a,"F",l,u)}function v3(t,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function rw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=pi(n.unaryFilter.field);return pt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=pi(n.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=pi(n.unaryFilter.field);return pt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=pi(n.unaryFilter.field);return pt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return pt.create(pi(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yn.create(n.compositeFilter.filters.map(r=>rw(r)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function b3(t){return s3[t]}function _3(t){return a3[t]}function w3(t){return l3[t]}function fi(t){return{fieldPath:t.canonicalString()}}function pi(t){return Ct.fromServerFormat(t.fieldPath)}function ow(t){return t instanceof pt?function(n){if(n.op==="=="){if(Qy(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NAN"}};if(Gy(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qy(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NOT_NAN"}};if(Gy(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fi(n.field),op:_3(n.op),value:n.value}}}(t):t instanceof Yn?function(n){const r=n.getFilters().map(o=>ow(o));return r.length===1?r[0]:{compositeFilter:{op:w3(n.op),filters:r}}}(t):me()}function E3(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function iw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Zr{constructor(e,n,r,o,i=ye.min(),s=ye.min(),a=Pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class I3{constructor(e){this.ct=e}}function T3(t){const e=y3({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mh(e,e.limit,"L"):e}/**
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
 */class S3{constructor(){this.un=new A3}addToCollectionParentIndex(e,n){return this.un.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(fo.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(fo.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class A3{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),o=this.index[n]||new xt(it.comparator),i=!o.has(r);return this.index[n]=o.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),o=this.index[n];return o&&o.has(r)}getEntries(e){return(this.index[e]||new xt(it.comparator)).toArray()}}/**
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
 */class Ki{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ki(0)}static kn(){return new Ki(-1)}}/**
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
 */class C3{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class x3{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class P3{constructor(e,n,r,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(r=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(r!==null&&Ys(r.mutation,o,nn.empty(),mt.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const o=Do();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,r).next(i=>{let s=Os();return i.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Do();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const o=[];return r.forEach(i=>{n.has(i)||o.push(i)}),this.documentOverlayCache.getOverlays(e,o).next(i=>{i.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,o){let i=wr();const s=Qs(),a=function(){return Qs()}();return n.forEach((l,u)=>{const d=r.get(u.key);o.has(u.key)&&(d===void 0||d.mutation instanceof wo)?i=i.insert(u.key,u):d!==void 0?(s.set(u.key,d.mutation.getFieldMask()),Ys(d.mutation,u,d.mutation.getFieldMask(),mt.now())):s.set(u.key,nn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>s.set(u,d)),n.forEach((u,d)=>{var f;return a.set(u,new x3(d,(f=s.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Qs();let o=new ct((s,a)=>s-a),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||nn.empty();d=a.applyToLocalView(u,d),r.set(l,d);const f=(o.get(a.batchId)||Te()).add(l);o=o.insert(a.batchId,f)})}).next(()=>{const s=[],a=o.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,f=j1();d.forEach(p=>{if(!i.has(p)){const g=q1(n.get(p),r.get(p));g!==null&&f.set(p,g),i=i.add(p)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,f))}return H.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,o){return function(s){return fe.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):D9(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,o):this.getDocumentsMatchingCollectionQuery(e,n,r,o)}getNextDocuments(e,n,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,o).next(i=>{const s=o-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,o-i.size):H.resolve(Do());let a=-1,l=i;return s.next(u=>H.forEach(u,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(d)?H.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{l=l.insert(d,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Te())).next(d=>({batchId:a,changes:U1(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let o=Os();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,r,o){const i=n.collectionGroup;let s=Os();return this.indexManager.getCollectionParents(e,i).next(a=>H.forEach(a,l=>{const u=function(f,p){return new eu(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,o).next(d=>{d.forEach((f,p)=>{s=s.insert(f,p)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,o){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,o))).next(s=>{i.forEach((l,u)=>{const d=u.getKey();s.get(d)===null&&(s=s.insert(d,Vt.newInvalidDocument(d)))});let a=Os();return s.forEach((l,u)=>{const d=i.get(l);d!==void 0&&Ys(d.mutation,u,nn.empty(),mt.now()),nu(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class k3{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return H.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:Kn(o.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(o){return{name:o.name,query:T3(o.bundledQuery),readTime:Kn(o.readTime)}}(n)),H.resolve()}}/**
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
 */class O3{constructor(){this.overlays=new ct(fe.comparator),this.Ir=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Do();return H.forEach(n,o=>this.getOverlay(e,o).next(i=>{i!==null&&r.set(o,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((o,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const o=this.Ir.get(r);return o!==void 0&&(o.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const o=Do(),i=n.length+1,s=new fe(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&o.set(l.getKey(),l)}return H.resolve(o)}getOverlaysForCollectionGroup(e,n,r,o){let i=new ct((u,d)=>u-d);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Do(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=Do(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=o)););return H.resolve(a)}ht(e,n,r){const o=this.overlays.get(r.key);if(o!==null){const s=this.Ir.get(o.largestBatchId).delete(r.key);this.Ir.set(o.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new e3(n,r));let i=this.Ir.get(n);i===void 0&&(i=Te(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class R3{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
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
 */class qf{constructor(){this.Tr=new xt(bt.Er),this.dr=new xt(bt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new bt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new bt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new fe(new it([])),r=new bt(n,e),o=new bt(n,e+1),i=[];return this.dr.forEachInRange([r,o],s=>{this.Vr(s),i.push(s.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new fe(new it([])),r=new bt(n,e),o=new bt(n,e+1);let i=Te();return this.dr.forEachInRange([r,o],s=>{i=i.add(s.key)}),i}containsKey(e){const n=new bt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class bt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return fe.comparator(e.key,n.key)||Me(e.wr,n.wr)}static Ar(e,n){return Me(e.wr,n.wr)||fe.comparator(e.key,n.key)}}/**
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
 */class N3{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new xt(bt.Er)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,o){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Z9(i,n,r,o);this.mutationQueue.push(s);for(const a of o)this.br=this.br.add(new bt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return H.resolve(s)}lookupMutationBatch(e,n){return H.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,o=this.vr(r),i=o<0?0:o;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new bt(n,0),o=new bt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,o],s=>{const a=this.Dr(s.wr);i.push(a)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new xt(Me);return n.forEach(o=>{const i=new bt(o,0),s=new bt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,s],a=>{r=r.add(a.wr)})}),H.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,o=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const s=new bt(new fe(i),0);let a=new xt(Me);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===o&&(a=a.add(l.wr)),!0)},s),H.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const o=this.Dr(r);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){Ye(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return H.forEach(n.mutations,o=>{const i=new bt(o.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new bt(n,0),o=this.br.firstAfterOrEqual(r);return H.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class L3{constructor(e){this.Mr=e,this.docs=function(){return new ct(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,o=this.docs.get(r),i=o?o.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let r=wr();return n.forEach(o=>{const i=this.docs.get(o);r=r.insert(o,i?i.document.mutableCopy():Vt.newInvalidDocument(o))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,o){let i=wr();const s=n.path,a=new fe(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||g9(m9(d),r)<=0||(o.has(d.key)||nu(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,o){me()}Or(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new V3(this)}getSize(e){return H.resolve(this.size)}}class V3 extends C3{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,o)=>{o.isValidDocument()?n.push(this.cr.addEntry(e,o)):this.cr.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class D3{constructor(e){this.persistence=e,this.Nr=new ts(n=>Uf(n),jf),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.Lr=0,this.Br=new qf,this.targetCount=0,this.kr=Ki.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,o)=>n(o)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),H.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ki(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Kn(n),H.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let o=0;const i=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),o++)}),H.waitFor(i).next(()=>o)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const o=this.persistence.referenceDelegate,i=[];return o&&n.forEach(s=>{i.push(o.markPotentiallyOrphaned(e,s))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Br.containsKey(n))}}/**
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
 */class M3{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Df(0),this.Kr=!1,this.Kr=!0,this.$r=new R3,this.referenceDelegate=e(this),this.Ur=new D3(this),this.indexManager=new S3,this.remoteDocumentCache=function(o){return new L3(o)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new I3(n),this.Gr=new k3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new O3,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new N3(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){oe("MemoryPersistence","Starting transaction:",e);const o=new $3(this.Qr.next());return this.referenceDelegate.zr(),r(o).next(i=>this.referenceDelegate.jr(o).next(()=>i)).toPromise().then(i=>(o.raiseOnCommittedEvent(),i))}Hr(e,n){return H.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class $3 extends v9{constructor(e){super(),this.currentSequenceNumber=e}}class Gf{constructor(e){this.persistence=e,this.Jr=new qf,this.Yr=null}static Zr(e){return new Gf(e)}get Xr(){if(this.Yr)return this.Yr;throw me()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),H.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(o=>this.Xr.add(o.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,r=>{const o=fe.fromPath(r);return this.ei(e,o).next(i=>{i||n.removeEntry(o,ye.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return H.or([()=>H.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Qf{constructor(e,n,r,o){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=o}static Wi(e,n){let r=Te(),o=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:o=o.add(i.doc.key)}return new Qf(e,n.fromCache,r,o)}}/**
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
 */class F3{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class U3{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return UP()?8:b9(Mt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,o){const i={result:null};return this.Yi(e,n).next(s=>{i.result=s}).next(()=>{if(!i.result)return this.Zi(e,n,o,r).next(s=>{i.result=s})}).next(()=>{if(i.result)return;const s=new F3;return this.Xi(e,n,s).next(a=>{if(i.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>i.result)}es(e,n,r,o){return r.documentReadCount<this.ji?(Is()<=Ae.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",hi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):(Is()<=Ae.DEBUG&&oe("QueryEngine","Query:",hi(n),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.Hi*o?(Is()<=Ae.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",hi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zn(n))):H.resolve())}Yi(e,n){if(Zy(n))return H.resolve(null);let r=zn(n);return this.indexManager.getIndexType(e,r).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=mh(n,null,"F"),r=zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const s=Te(...i);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,a);return this.ns(n,u,s,l.readTime)?this.Yi(e,mh(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,o){return Zy(n)||o.isEqual(ye.min())?H.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const s=this.ts(n,i);return this.ns(n,s,r,o)?H.resolve(null):(Is()<=Ae.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),hi(n)),this.rs(e,s,n,p9(o,-1)).next(a=>a))})}ts(e,n){let r=new xt($1(e));return n.forEach((o,i)=>{nu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,o){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(o)>0)}Xi(e,n,r){return Is()<=Ae.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",hi(n)),this.Ji.getDocumentsMatchingQuery(e,n,fo.min(),r)}rs(e,n,r,o){return this.Ji.getDocumentsMatchingQuery(e,r,o).next(i=>(n.forEach(s=>{i=i.insert(s.key,s)}),i))}}/**
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
 */class j3{constructor(e,n,r,o){this.persistence=e,this.ss=n,this.serializer=o,this.os=new ct(Me),this._s=new ts(i=>Uf(i),jf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new P3(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function B3(t,e,n,r){return new j3(t,e,n,r)}async function sw(t,e){const n=be(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let o;return n.mutationQueue.getAllMutationBatches(r).next(i=>(o=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const s=[],a=[];let l=Te();for(const u of o){s.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:s,addedBatchIds:a}))})})}function z3(t,e){const n=be(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const o=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,d){const f=u.batch,p=f.keys();let g=H.resolve();return p.forEach(_=>{g=g.next(()=>d.getEntry(l,_)).next(k=>{const O=u.docVersions.get(_);Ye(O!==null),k.version.compareTo(O)<0&&(f.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),d.addEntry(k)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,o))})}function aw(t){const e=be(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function H3(t,e){const n=be(t),r=e.snapshotVersion;let o=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});o=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const p=o.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,f)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Pt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),o=o.insert(f,g),function(k,O,R){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(p,g,d)&&a.push(n.Ur.updateTargetData(i,g))});let l=wr(),u=Te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),a.push(K3(i,s,e.documentUpdates).next(d=>{l=d.Ps,u=d.Is})),!r.isEqual(ye.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(f=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(d)}return H.waitFor(a).next(()=>s.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=o,i))}function K3(t,e,n){let r=Te(),o=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let s=wr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(o=o.add(a)),l.isNoDocument()&&l.version.isEqual(ye.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):oe("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Ps:s,Is:o}})}function W3(t,e){const n=be(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function q3(t,e){const n=be(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let o;return n.Ur.getTargetData(r,e).next(i=>i?(o=i,H.resolve(o)):n.Ur.allocateTargetId(r).next(s=>(o=new Zr(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,o).next(()=>o))))}).then(r=>{const o=n.os.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function _h(t,e,n){const r=be(t),o=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,s=>r.persistence.referenceDelegate.removeTarget(s,o))}catch(s){if(!za(s))throw s;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(o.target)}function uv(t,e,n){const r=be(t);let o=ye.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,u,d){const f=be(l),p=f._s.get(d);return p!==void 0?H.resolve(f.os.get(p)):f.Ur.getTargetData(u,d)}(r,s,zn(e)).next(a=>{if(a)return o=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?o:ye.min(),n?i:Te())).next(a=>(G3(r,$9(e),a),{documents:a,Ts:i})))}function G3(t,e,n){let r=t.us.get(e)||ye.min();n.forEach((o,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class dv{constructor(){this.activeTargetIds=H9()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Q3{constructor(){this.so=new dv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new dv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Y3{_o(e){}shutdown(){}}/**
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
 */class hv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Al=null;function ld(){return Al===null?Al=function(){return 268435456+Math.round(2147483648*Math.random())}():Al++,"0x"+Al.toString(16)}/**
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
 */const X3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class J3{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Nt="WebChannelConnection";class Z3 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${o}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${i}`}get Fo(){return!1}Mo(n,r,o,i,s){const a=ld(),l=this.xo(n,r.toUriEncodedString());oe("RestConnection",`Sending RPC '${n}' ${a}:`,l,o);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,s),this.No(n,l,u,o).then(d=>(oe("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw ji("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",o),d})}Lo(n,r,o,i,s,a){return this.Mo(n,r,o,i,s)}Oo(n,r,o){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+es}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,s)=>n[s]=i),o&&o.headers.forEach((i,s)=>n[s]=i)}xo(n,r){const o=X3[n];return`${this.Do}/v1/${r}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,o){const i=ld();return new Promise((s,a)=>{const l=new _1;l.setWithCredentials(!0),l.listenOnce(E1.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ul.NO_ERROR:const d=l.getResponseJson();oe(Nt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),s(d);break;case Ul.TIMEOUT:oe(Nt,`RPC '${e}' ${i} timed out`),a(new ce(z.DEADLINE_EXCEEDED,"Request time out"));break;case Ul.HTTP_ERROR:const f=l.getStatus();if(oe(Nt,`RPC '${e}' ${i} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const _=function(O){const R=O.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(R)>=0?R:z.UNKNOWN}(g.status);a(new ce(_,g.message))}else a(new ce(z.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ce(z.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{oe(Nt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(o);oe(Nt,`RPC '${e}' ${i} sending request:`,o),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const o=ld(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=S1(),a=T1(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new w1({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");oe(Nt,`Creating RPC '${e}' stream ${o}: ${d}`,l);const f=s.createWebChannel(d,l);let p=!1,g=!1;const _=new J3({Io:O=>{g?oe(Nt,`Not sending because RPC '${e}' stream ${o} is closed:`,O):(p||(oe(Nt,`Opening RPC '${e}' stream ${o} transport.`),f.open(),p=!0),oe(Nt,`RPC '${e}' stream ${o} sending:`,O),f.send(O))},To:()=>f.close()}),k=(O,R,x)=>{O.listen(R,N=>{try{x(N)}catch(M){setTimeout(()=>{throw M},0)}})};return k(f,ks.EventType.OPEN,()=>{g||(oe(Nt,`RPC '${e}' stream ${o} transport opened.`),_.yo())}),k(f,ks.EventType.CLOSE,()=>{g||(g=!0,oe(Nt,`RPC '${e}' stream ${o} transport closed`),_.So())}),k(f,ks.EventType.ERROR,O=>{g||(g=!0,ji(Nt,`RPC '${e}' stream ${o} transport errored:`,O),_.So(new ce(z.UNAVAILABLE,"The operation could not be completed")))}),k(f,ks.EventType.MESSAGE,O=>{var R;if(!g){const x=O.data[0];Ye(!!x);const N=x,M=N.error||((R=N[0])===null||R===void 0?void 0:R.error);if(M){oe(Nt,`RPC '${e}' stream ${o} received error:`,M);const Y=M.status;let U=function(b){const T=ft[b];if(T!==void 0)return Y1(T)}(Y),E=M.message;U===void 0&&(U=z.INTERNAL,E="Unknown error status: "+Y+" with message "+M.message),g=!0,_.So(new ce(U,E)),f.close()}else oe(Nt,`RPC '${e}' stream ${o} received:`,x),_.bo(x)}}),k(a,I1.STAT_EVENT,O=>{O.stat===uh.PROXY?oe(Nt,`RPC '${e}' stream ${o} detected buffering proxy`):O.stat===uh.NOPROXY&&oe(Nt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{_.wo()},0),_}}function cd(){return typeof document<"u"?document:null}/**
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
 */function su(t){return new c3(t,!0)}/**
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
 */class lw{constructor(e,n,r=1e3,o=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=o,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),o=Math.max(0,n-r);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class cw{constructor(e,n,r,o,i,s,a,l){this.ui=e,this.Ho=r,this.Jo=o,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new lw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(_r(n.toString()),_r("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,o])=>{this.Yo===n&&this.P_(r,o)},r=>{e(()=>{const o=new ce(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(o)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{r(()=>this.I_(o))}),this.stream.onMessage(o=>{r(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eN extends cw{constructor(e,n,r,o,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,o,s),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=h3(this.serializer,e),r=function(i){if(!("targetChange"in i))return ye.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ye.min():s.readTime?Kn(s.readTime):ye.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=bh(this.serializer),n.addTarget=function(i,s){let a;const l=s.target;if(a=ph(l)?{documents:m3(i,l)}:{query:g3(i,l)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=Z1(i,s.resumeToken);const u=gh(i,s.expectedCount);u!==null&&(a.expectedCount=u)}else if(s.snapshotVersion.compareTo(ye.min())>0){a.readTime=_c(i,s.snapshotVersion.toTimestamp());const u=gh(i,s.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=v3(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=bh(this.serializer),n.removeTarget=e,this.a_(n)}}class tN extends cw{constructor(e,n,r,o,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,o,s),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ye(!!e.streamToken),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=p3(e.writeResults,e.commitTime),r=Kn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=bh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>f3(this.serializer,r))};this.a_(n)}}/**
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
 */class nN extends class{}{constructor(e,n,r,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ce(z.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Mo(e,yh(n,r),o,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce(z.UNKNOWN,i.toString())})}Lo(e,n,r,o,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,yh(n,r),o,s,a,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ce(z.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class rN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(_r(n),this.D_=!1):oe("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class oN{constructor(e,n,r,o,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(s=>{r.enqueueAndForget(async()=>{ti(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=be(l);u.L_.add(4),await Wa(u),u.q_.set("Unknown"),u.L_.delete(4),await au(u)}(this))})}),this.q_=new rN(r,o)}}async function au(t){if(ti(t))for(const e of t.B_)await e(!0)}async function Wa(t){for(const e of t.B_)await e(!1)}function uw(t,e){const n=be(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Zf(n)?Jf(n):ns(n).r_()&&Xf(n,e))}function Yf(t,e){const n=be(t),r=ns(n);n.N_.delete(e),r.r_()&&dw(n,e),n.N_.size===0&&(r.r_()?r.o_():ti(n)&&n.q_.set("Unknown"))}function Xf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ns(t).A_(e)}function dw(t,e){t.Q_.xe(e),ns(t).R_(e)}function Jf(t){t.Q_=new i3({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ns(t).start(),t.q_.v_()}function Zf(t){return ti(t)&&!ns(t).n_()&&t.N_.size>0}function ti(t){return be(t).L_.size===0}function hw(t){t.Q_=void 0}async function iN(t){t.q_.set("Online")}async function sN(t){t.N_.forEach((e,n)=>{Xf(t,e)})}async function aN(t,e){hw(t),Zf(t)?(t.q_.M_(e),Jf(t)):t.q_.set("Unknown")}async function lN(t,e,n){if(t.q_.set("Online"),e instanceof J1&&e.state===2&&e.cause)try{await async function(o,i){const s=i.cause;for(const a of i.targetIds)o.N_.has(a)&&(await o.remoteSyncer.rejectListen(a,s),o.N_.delete(a),o.Q_.removeTarget(a))}(t,e)}catch(r){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wc(t,r)}else if(e instanceof zl?t.Q_.Ke(e):e instanceof X1?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ye.min()))try{const r=await aw(t.localStore);n.compareTo(r)>=0&&await function(i,s){const a=i.Q_.rt(s);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,u)=>{const d=i.N_.get(l);if(!d)return;i.N_.set(l,d.withResumeToken(Pt.EMPTY_BYTE_STRING,d.snapshotVersion)),dw(i,l);const f=new Zr(d.target,l,u,d.sequenceNumber);Xf(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){oe("RemoteStore","Failed to raise snapshot:",r),await wc(t,r)}}async function wc(t,e,n){if(!za(e))throw e;t.L_.add(1),await Wa(t),t.q_.set("Offline"),n||(n=()=>aw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{oe("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await au(t)})}function fw(t,e){return e().catch(n=>wc(t,n,e))}async function lu(t){const e=be(t),n=mo(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;cN(e);)try{const o=await W3(e.localStore,r);if(o===null){e.O_.length===0&&n.o_();break}r=o.batchId,uN(e,o)}catch(o){await wc(e,o)}pw(e)&&mw(e)}function cN(t){return ti(t)&&t.O_.length<10}function uN(t,e){t.O_.push(e);const n=mo(t);n.r_()&&n.V_&&n.m_(e.mutations)}function pw(t){return ti(t)&&!mo(t).n_()&&t.O_.length>0}function mw(t){mo(t).start()}async function dN(t){mo(t).p_()}async function hN(t){const e=mo(t);for(const n of t.O_)e.m_(n.mutations)}async function fN(t,e,n){const r=t.O_.shift(),o=Hf.from(r,e,n);await fw(t,()=>t.remoteSyncer.applySuccessfulWrite(o)),await lu(t)}async function pN(t,e){e&&mo(t).V_&&await async function(r,o){if(function(s){return n3(s)&&s!==z.ABORTED}(o.code)){const i=r.O_.shift();mo(r).s_(),await fw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,o)),await lu(r)}}(t,e),pw(t)&&mw(t)}async function fv(t,e){const n=be(t);n.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const r=ti(n);n.L_.add(3),await Wa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await au(n)}async function mN(t,e){const n=be(t);e?(n.L_.delete(2),await au(n)):e||(n.L_.add(2),await Wa(n),n.q_.set("Unknown"))}function ns(t){return t.K_||(t.K_=function(n,r,o){const i=be(n);return i.w_(),new eN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,o)}(t.datastore,t.asyncQueue,{Eo:iN.bind(null,t),Ro:sN.bind(null,t),mo:aN.bind(null,t),d_:lN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Zf(t)?Jf(t):t.q_.set("Unknown")):(await t.K_.stop(),hw(t))})),t.K_}function mo(t){return t.U_||(t.U_=function(n,r,o){const i=be(n);return i.w_(),new tN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,o)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:dN.bind(null,t),mo:pN.bind(null,t),f_:hN.bind(null,t),g_:fN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await lu(t)):(await t.U_.stop(),t.O_.length>0&&(oe("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class ep{constructor(e,n,r,o,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=i,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,i){const s=Date.now()+r,a=new ep(e,n,s,o,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tp(t,e){if(_r("AsyncQueue",`${e}: ${t}`),za(t))return new ce(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Pi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||fe.comparator(n.key,r.key):(n,r)=>fe.comparator(n.key,r.key),this.keyedMap=Os(),this.sortedSet=new ct(this.comparator)}static emptySet(e){return new Pi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Pi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,i=r.getNext().key;if(!o.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Pi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class pv{constructor(){this.W_=new ct(fe.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):me():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Wi{constructor(e,n,r,o,i,s,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,o,i){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new Wi(e,n,Pi.emptySet(n),s,r,o,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==r[o].type||!n[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
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
 */class gN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class yN{constructor(){this.queries=mv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const o=be(n),i=o.queries;o.queries=mv(),i.forEach((s,a)=>{for(const l of a.j_)l.onError(r)})})(this,new ce(z.ABORTED,"Firestore shutting down"))}}function mv(){return new ts(t=>M1(t),tu)}async function gw(t,e){const n=be(t);let r=3;const o=e.query;let i=n.queries.get(o);i?!i.H_()&&e.J_()&&(r=2):(i=new gN,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(o,!0);break;case 1:i.z_=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(s){const a=tp(s,`Initialization of query '${hi(e.query)}' failed`);return void e.onError(a)}n.queries.set(o,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&np(n)}async function yw(t,e){const n=be(t),r=e.query;let o=3;const i=n.queries.get(r);if(i){const s=i.j_.indexOf(e);s>=0&&(i.j_.splice(s,1),i.j_.length===0?o=e.J_()?0:1:!i.H_()&&e.J_()&&(o=2))}switch(o){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function vN(t,e){const n=be(t);let r=!1;for(const o of e){const i=o.query,s=n.queries.get(i);if(s){for(const a of s.j_)a.X_(o)&&(r=!0);s.z_=o}}r&&np(n)}function bN(t,e,n){const r=be(t),o=r.queries.get(e);if(o)for(const i of o.j_)i.onError(n);r.queries.delete(e)}function np(t){t.Y_.forEach(e=>{e.next()})}var wh,gv;(gv=wh||(wh={})).ea="default",gv.Cache="cache";class vw{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new Wi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==wh.Cache}}/**
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
 */class bw{constructor(e){this.key=e}}class _w{constructor(e){this.key=e}}class _N{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Te(),this.mutatedKeys=Te(),this.Aa=$1(e),this.Ra=new Pi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new pv,o=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,s=o,a=!1;const l=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,u=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((d,f)=>{const p=o.get(d),g=nu(this.query,f)?f:null,_=!!p&&this.mutatedKeys.has(p.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let O=!1;p&&g?p.data.isEqual(g.data)?_!==k&&(r.track({type:3,doc:g}),O=!0):this.ga(p,g)||(r.track({type:2,doc:g}),O=!0,(l&&this.Aa(g,l)>0||u&&this.Aa(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),O=!0):p&&!g&&(r.track({type:1,doc:p}),O=!0,(l||u)&&(a=!0)),O&&(g?(s=s.add(g),i=k?i.add(d):i.delete(d)):(s=s.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const d=this.query.limitType==="F"?s.last():s.first();s=s.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:s,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,o){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((d,f)=>function(g,_){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return k(g)-k(_)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),o=o!=null&&o;const a=n&&!o?this.ya():[],l=this.da.size===0&&this.current&&!o?1:0,u=l!==this.Ea;return this.Ea=l,s.length!==0||u?{snapshot:new Wi(this.query,e.Ra,i,s,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new pv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new _w(r))}),this.da.forEach(r=>{e.has(r)||n.push(new bw(r))}),n}ba(e){this.Ta=e.Ts,this.da=Te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Wi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class wN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EN{constructor(e){this.key=e,this.va=!1}}class IN{constructor(e,n,r,o,i,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=o,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new ts(a=>M1(a),tu),this.Ma=new Map,this.xa=new Set,this.Oa=new ct(fe.comparator),this.Na=new Map,this.La=new qf,this.Ba={},this.ka=new Map,this.qa=Ki.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function TN(t,e,n=!0){const r=Aw(t);let o;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),o=i.view.Da()):o=await ww(r,e,n,!0),o}async function SN(t,e){const n=Aw(t);await ww(n,e,!0,!1)}async function ww(t,e,n,r){const o=await q3(t.localStore,zn(e)),i=o.targetId,s=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await AN(t,e,i,s==="current",o.resumeToken)),t.isPrimaryClient&&n&&uw(t.remoteStore,o),a}async function AN(t,e,n,r,o){t.Ka=(f,p,g)=>async function(k,O,R,x){let N=O.view.ma(R);N.ns&&(N=await uv(k.localStore,O.query,!1).then(({documents:E})=>O.view.ma(E,N)));const M=x&&x.targetChanges.get(O.targetId),Y=x&&x.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(N,k.isPrimaryClient,M,Y);return vv(k,O.targetId,U.wa),U.snapshot}(t,f,p,g);const i=await uv(t.localStore,e,!0),s=new _N(e,i.Ts),a=s.ma(i.documents),l=Ka.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",o),u=s.applyChanges(a,t.isPrimaryClient,l);vv(t,n,u.wa);const d=new wN(e,n,s);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function CN(t,e,n){const r=be(t),o=r.Fa.get(e),i=r.Ma.get(o.targetId);if(i.length>1)return r.Ma.set(o.targetId,i.filter(s=>!tu(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await _h(r.localStore,o.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(o.targetId),n&&Yf(r.remoteStore,o.targetId),Eh(r,o.targetId)}).catch(Ba)):(Eh(r,o.targetId),await _h(r.localStore,o.targetId,!0))}async function xN(t,e){const n=be(t),r=n.Fa.get(e),o=n.Ma.get(r.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yf(n.remoteStore,r.targetId))}async function PN(t,e,n){const r=DN(t);try{const o=await function(s,a){const l=be(s),u=mt.now(),d=a.reduce((g,_)=>g.add(_.key),Te());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=wr(),k=Te();return l.cs.getEntries(g,d).next(O=>{_=O,_.forEach((R,x)=>{x.isValidDocument()||(k=k.add(R))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,_)).next(O=>{f=O;const R=[];for(const x of a){const N=X9(x,f.get(x.key).overlayedDocument);N!=null&&R.push(new wo(x.key,N,k1(N.value.mapValue),Hn.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,R,a)}).next(O=>{p=O;const R=O.applyToLocalDocumentSet(f,k);return l.documentOverlayCache.saveOverlays(g,O.batchId,R)})}).then(()=>({batchId:p.batchId,changes:U1(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),function(s,a,l){let u=s.Ba[s.currentUser.toKey()];u||(u=new ct(Me)),u=u.insert(a,l),s.Ba[s.currentUser.toKey()]=u}(r,o.batchId,n),await qa(r,o.changes),await lu(r.remoteStore)}catch(o){const i=tp(o,"Failed to persist write");n.reject(i)}}async function Ew(t,e){const n=be(t);try{const r=await H3(n.localStore,e);e.targetChanges.forEach((o,i)=>{const s=n.Na.get(i);s&&(Ye(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?s.va=!0:o.modifiedDocuments.size>0?Ye(s.va):o.removedDocuments.size>0&&(Ye(s.va),s.va=!1))}),await qa(n,r,e)}catch(r){await Ba(r)}}function yv(t,e,n){const r=be(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const o=[];r.Fa.forEach((i,s)=>{const a=s.view.Z_(e);a.snapshot&&o.push(a.snapshot)}),function(s,a){const l=be(s);l.onlineState=a;let u=!1;l.queries.forEach((d,f)=>{for(const p of f.j_)p.Z_(a)&&(u=!0)}),u&&np(l)}(r.eventManager,e),o.length&&r.Ca.d_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kN(t,e,n){const r=be(t);r.sharedClientState.updateQueryState(e,"rejected",n);const o=r.Na.get(e),i=o&&o.key;if(i){let s=new ct(fe.comparator);s=s.insert(i,Vt.newNoDocument(i,ye.min()));const a=Te().add(i),l=new iu(ye.min(),new Map,new ct(Me),s,a);await Ew(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),rp(r)}else await _h(r.localStore,e,!1).then(()=>Eh(r,e,n)).catch(Ba)}async function ON(t,e){const n=be(t),r=e.batch.batchId;try{const o=await z3(n.localStore,e);Tw(n,r,null),Iw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qa(n,o)}catch(o){await Ba(o)}}async function RN(t,e,n){const r=be(t);try{const o=await function(s,a){const l=be(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(Ye(f!==null),d=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);Tw(r,e,n),Iw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qa(r,o)}catch(o){await Ba(o)}}function Iw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Tw(t,e,n){const r=be(t);let o=r.Ba[r.currentUser.toKey()];if(o){const i=o.get(e);i&&(n?i.reject(n):i.resolve(),o=o.remove(e)),r.Ba[r.currentUser.toKey()]=o}}function Eh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Sw(t,r)})}function Sw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Yf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),rp(t))}function vv(t,e,n){for(const r of n)r instanceof bw?(t.La.addReference(r.key,e),NN(t,r)):r instanceof _w?(oe("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Sw(t,r.key)):me()}function NN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(oe("SyncEngine","New document in limbo: "+n),t.xa.add(r),rp(t))}function rp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new fe(it.fromString(e)),r=t.qa.next();t.Na.set(r,new EN(n)),t.Oa=t.Oa.insert(n,r),uw(t.remoteStore,new Zr(zn(Bf(n.path)),r,"TargetPurposeLimboResolution",Df.oe))}}async function qa(t,e,n){const r=be(t),o=[],i=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{s.push(r.Ka(l,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){o.push(u);const f=Qf.Wi(l.targetId,u);i.push(f)}}))}),await Promise.all(s),r.Ca.d_(o),await async function(l,u){const d=be(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>H.forEach(u,p=>H.forEach(p.$i,g=>d.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>H.forEach(p.Ui,g=>d.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!za(f))throw f;oe("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const g=d.os.get(p),_=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(_);d.os=d.os.insert(p,k)}}}(r.localStore,i))}async function LN(t,e){const n=be(t);if(!n.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const r=await sw(n.localStore,e);n.currentUser=e,function(i,s){i.ka.forEach(a=>{a.forEach(l=>{l.reject(new ce(z.CANCELLED,s))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qa(n,r.hs)}}function VN(t,e){const n=be(t),r=n.Na.get(e);if(r&&r.va)return Te().add(r.key);{let o=Te();const i=n.Ma.get(e);if(!i)return o;for(const s of i){const a=n.Fa.get(s);o=o.unionWith(a.view.Va)}return o}}function Aw(t){const e=be(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ew.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kN.bind(null,e),e.Ca.d_=vN.bind(null,e.eventManager),e.Ca.$a=bN.bind(null,e.eventManager),e}function DN(t){const e=be(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ON.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RN.bind(null,e),e}class bv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=su(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return B3(this.persistence,new U3,e.initialUser,this.serializer)}createPersistence(e){return new M3(Gf.Zr,this.serializer)}createSharedClientState(e){return new Q3}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class MN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=LN.bind(null,this.syncEngine),await mN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yN}()}createDatastore(e){const n=su(e.databaseInfo.databaseId),r=function(i){return new Z3(i)}(e.databaseInfo);return function(i,s,a,l){return new nN(i,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,o,i,s,a){return new oN(r,o,i,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>yv(this.syncEngine,n,0),function(){return hv.D()?new hv:new Y3}())}createSyncEngine(e,n){return function(o,i,s,a,l,u,d){const f=new IN(o,i,s,a,l,u);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const i=be(o);oe("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Wa(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class Cw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):_r("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class $N{constructor(e,n,r,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=o,this.user=Lt.UNAUTHENTICATED,this.clientId=C1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{oe("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(oe("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ce(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=tp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ud(t,e){t.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async o=>{r.isEqual(o)||(await sw(e.localStore,o),r=o)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _v(t,e){t.asyncQueue.verifyOperationInProgress();const n=await UN(t);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,o)=>fv(e.remoteStore,o)),t._onlineComponents=e}function FN(t){return t.name==="FirebaseError"?t.code===z.FAILED_PRECONDITION||t.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function UN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await ud(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!FN(n))throw n;ji("Error using user provided cache. Falling back to memory cache: "+n),await ud(t,new bv)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await ud(t,new bv);return t._offlineComponents}async function xw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await _v(t,t._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await _v(t,new MN))),t._onlineComponents}function jN(t){return xw(t).then(e=>e.syncEngine)}async function Pw(t){const e=await xw(t),n=e.eventManager;return n.onListen=TN.bind(null,e.syncEngine),n.onUnlisten=CN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=SN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=xN.bind(null,e.syncEngine),n}function BN(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,a,l,u){const d=new Cw({next:p=>{s.enqueueAndForget(()=>yw(i,f));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new ce(z.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&l&&l.source==="server"?u.reject(new ce(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new vw(Bf(a.path),d,{includeMetadataChanges:!0,_a:!0});return gw(i,f)}(await Pw(t),t.asyncQueue,e,n,r)),r.promise}function zN(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,a,l,u){const d=new Cw({next:p=>{s.enqueueAndForget(()=>yw(i,f)),p.fromCache&&l.source==="server"?u.reject(new ce(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new vw(a,d,{includeMetadataChanges:!0,_a:!0});return gw(i,f)}(await Pw(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function kw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const wv=new Map;/**
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
 */function Ow(t,e,n){if(!n)throw new ce(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function HN(t,e,n,r){if(e===!0&&r===!0)throw new ce(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ev(t){if(!fe.isDocumentKey(t))throw new ce(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Iv(t){if(fe.isDocumentKey(t))throw new ce(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function op(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function Er(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=op(t);throw new ce(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Tv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cu{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ce(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ce(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new i9;switch(r.type){case"firstParty":return new c9(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wv.get(n);r&&(oe("ComponentProvider","Removing Datastore"),wv.delete(n),r.terminate())}(this),Promise.resolve()}}function KN(t,e,n,r={}){var o;const i=(t=Er(t,cu))._getSettings(),s=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==s&&ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Lt.MOCK_USER;else{a=NP(r.mockUserToken,(o=t._app)===null||o===void 0?void 0:o.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ce(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Lt(u)}t._authCredentials=new s9(new A1(a,l))}}/**
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
 */class uu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new uu(this.firestore,e,this._query)}}class Gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new so(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}}class so extends uu{constructor(e,n,r){super(e,n,Bf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new fe(e))}withConverter(e){return new so(this.firestore,e,this._path)}}function WN(t,e,...n){if(t=Et(t),Ow("collection","path",e),t instanceof cu){const r=it.fromString(e,...n);return Iv(r),new so(t,null,r)}{if(!(t instanceof Gt||t instanceof so))throw new ce(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(it.fromString(e,...n));return Iv(r),new so(t.firestore,null,r)}}function eo(t,e,...n){if(t=Et(t),arguments.length===1&&(e=C1.newId()),Ow("doc","path",e),t instanceof cu){const r=it.fromString(e,...n);return Ev(r),new Gt(t,null,new fe(r))}{if(!(t instanceof Gt||t instanceof so))throw new ce(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(it.fromString(e,...n));return Ev(r),new Gt(t.firestore,t instanceof so?t.converter:null,new fe(r))}}/**
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
 */class qN{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new lw(this,"async_queue_retry"),this.Eu=()=>{const n=cd();n&&oe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=cd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=cd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new pr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!za(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const o=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw _r("INTERNAL UNHANDLED ERROR: ",o),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const o=ep.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(o),o}du(){this.hu&&me()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class Ga extends cu{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=function(){return new qN}(),this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rw(this),this._firestoreClient.terminate()}}function GN(t,e){const n=typeof t=="object"?t:p0(),r=typeof t=="string"?t:"(default)",o=yf(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const i=OP("firestore");i&&KN(o,...i)}return o}function ip(t){return t._firestoreClient||Rw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Rw(t){var e,n,r;const o=t._freezeSettings(),i=function(a,l,u,d){return new E9(a,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,kw(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,o);t._firestoreClient=new $N(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}/**
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
 */class qi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qi(Pt.fromBase64String(e))}catch(n){throw new ce(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qi(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class du{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sp{constructor(e){this._methodName=e}}/**
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
 */class ap{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}}/**
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
 */class lp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,o){if(r.length!==o.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==o[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const QN=/^__.*__$/;class YN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wo(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ha(e,this.data,n,this.fieldTransforms)}}class Nw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new wo(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Lw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class cp{constructor(e,n,r,o,i,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=o,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new cp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Su({path:r,Du:!1});return o.vu(e),o}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Su({path:r,Du:!1});return o.yu(),o}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Ec(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Lw(this.wu)&&QN.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class XN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||su(e)}Nu(e,n,r,o=!1){return new cp({wu:e,methodName:n,Ou:r,path:Ct.emptyPath(),Du:!1,xu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vw(t){const e=t._freezeSettings(),n=su(t._databaseId);return new XN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function JN(t,e,n,r,o,i={}){const s=t.Nu(i.merge||i.mergeFields?2:0,e,n,o);up("Data must be an object, but it was:",s,r);const a=Dw(r,s);let l,u;if(i.merge)l=new nn(s.fieldMask),u=s.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const p=Ih(e,f,n);if(!s.contains(p))throw new ce(z.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);$w(d,p)||d.push(p)}l=new nn(d),u=s.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=s.fieldTransforms;return new YN(new Wt(a),l,u)}class hu extends sp{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hu}}function ZN(t,e,n,r){const o=t.Nu(1,e,n);up("Data must be an object, but it was:",o,r);const i=[],s=Wt.empty();ei(r,(l,u)=>{const d=dp(e,l,n);u=Et(u);const f=o.Cu(d);if(u instanceof hu)i.push(d);else{const p=fu(u,f);p!=null&&(i.push(d),s.set(d,p))}});const a=new nn(i);return new Nw(s,a,o.fieldTransforms)}function eL(t,e,n,r,o,i){const s=t.Nu(1,e,n),a=[Ih(e,r,n)],l=[o];if(i.length%2!=0)throw new ce(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Ih(e,i[p])),l.push(i[p+1]);const u=[],d=Wt.empty();for(let p=a.length-1;p>=0;--p)if(!$w(u,a[p])){const g=a[p];let _=l[p];_=Et(_);const k=s.Cu(g);if(_ instanceof hu)u.push(g);else{const O=fu(_,k);O!=null&&(u.push(g),d.set(g,O))}}const f=new nn(u);return new Nw(d,f,s.fieldTransforms)}function fu(t,e){if(Mw(t=Et(t)))return up("Unsupported field value:",e,t),Dw(t,e);if(t instanceof sp)return function(r,o){if(!Lw(o.wu))throw o.Mu(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(o);i&&o.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,o){const i=[];let s=0;for(const a of r){let l=fu(a,o.Fu(s));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),s++}return{arrayValue:{values:i}}}(t,e)}return function(r,o){if((r=Et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return K9(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=mt.fromDate(r);return{timestampValue:_c(o.serializer,i)}}if(r instanceof mt){const i=new mt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_c(o.serializer,i)}}if(r instanceof ap)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qi)return{bytesValue:Z1(o.serializer,r._byteString)};if(r instanceof Gt){const i=o.databaseId,s=r.firestore._databaseId;if(!s.isEqual(i))throw o.Mu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wf(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof lp)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(l=>{if(typeof l!="number")throw a.Mu("VectorValues must only contain numeric values.");return zf(a.serializer,l)})}}}}}}(r,o);throw o.Mu(`Unsupported field value: ${op(r)}`)}(t,e)}function Dw(t,e){const n={};return x1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ei(t,(r,o)=>{const i=fu(o,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Mw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof mt||t instanceof ap||t instanceof qi||t instanceof Gt||t instanceof sp||t instanceof lp)}function up(t,e,n){if(!Mw(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const r=op(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function Ih(t,e,n){if((e=Et(e))instanceof du)return e._internalPath;if(typeof e=="string")return dp(t,e);throw Ec("Field path arguments must be of type string or ",t,!1,void 0,n)}const tL=new RegExp("[~\\*/\\[\\]]");function dp(t,e,n){if(e.search(tL)>=0)throw Ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new du(...e.split("."))._internalPath}catch{throw Ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ec(t,e,n,r,o){const i=r&&!r.isEmpty(),s=o!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||s)&&(l+=" (found",i&&(l+=` in field ${r}`),s&&(l+=` in document ${o}`),l+=")"),new ce(z.INVALID_ARGUMENT,a+t+l)}function $w(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Fw{constructor(e,n,r,o,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=o,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Uw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nL extends Fw{data(){return super.data()}}function Uw(t,e){return typeof e=="string"?dp(t,e):e instanceof du?e._internalPath:e._delegate._internalPath}/**
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
 */function rL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oL{convertValue(e,n="none"){switch(Yo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ei(e,(o,i)=>{r[o]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,o;const i=(o=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.map(s=>ht(s.doubleValue));return new lp(i)}convertGeoPoint(e){return new ap(ht(e.latitude),ht(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$f(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Sa(e));default:return null}}convertTimestamp(e){const n=po(e);return new mt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=it.fromString(e);Ye(iw(r));const o=new Aa(r.get(1),r.get(3)),i=new fe(r.popFirst(5));return o.isEqual(n)||_r(`Document ${i} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function iL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ns{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jw extends Fw{constructor(e,n,r,o,i,s){super(e,n,r,o,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Uw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hl extends jw{data(e={}){return super.data(e)}}class sL{constructor(e,n,r,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Ns(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Hl(this._firestore,this._userDataWriter,r.key,r,new Ns(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,i){if(o._snapshot.oldDocs.isEmpty()){let s=0;return o._snapshot.docChanges.map(a=>{const l=new Hl(o._firestore,o._userDataWriter,a.doc.key,a.doc,new Ns(o._snapshot.mutatedKeys.has(a.doc.key),o._snapshot.fromCache),o.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Hl(o._firestore,o._userDataWriter,a.doc.key,a.doc,new Ns(o._snapshot.mutatedKeys.has(a.doc.key),o._snapshot.fromCache),o.query.converter);let u=-1,d=-1;return a.type!==0&&(u=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),d=s.indexOf(a.doc.key)),{type:aL(a.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function aL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}/**
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
 */function ir(t){t=Er(t,Gt);const e=Er(t.firestore,Ga);return BN(ip(e),t._key).then(n=>uL(e,t,n))}class Bw extends oL{constructor(e){super(),this.firestore=e}convertBytes(e){return new qi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,n)}}function lL(t){t=Er(t,uu);const e=Er(t.firestore,Ga),n=ip(e),r=new Bw(e);return rL(t._query),zN(n,t._query).then(o=>new sL(e,r,t,o))}function cL(t,e,n){t=Er(t,Gt);const r=Er(t.firestore,Ga),o=iL(t.converter,e,n);return zw(r,[JN(Vw(r),"setDoc",t._key,o,t.converter!==null,n).toMutation(t._key,Hn.none())])}function Th(t,e,n,...r){t=Er(t,Gt);const o=Er(t.firestore,Ga),i=Vw(o);let s;return s=typeof(e=Et(e))=="string"||e instanceof du?eL(i,"updateDoc",t._key,e,n,r):ZN(i,"updateDoc",t._key,e),zw(o,[s.toMutation(t._key,Hn.exists(!0))])}function zw(t,e){return function(r,o){const i=new pr;return r.asyncQueue.enqueueAndForget(async()=>PN(await jN(r),o,i)),i.promise}(ip(t),e)}function uL(t,e,n){const r=n.docs.get(e._key),o=new Bw(t);return new jw(t,o,e._key,r,new Ns(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(o){es=o})(Yi),Mi(new Wo("firestore",(r,{instanceIdentifier:o,options:i})=>{const s=r.getProvider("app").getImmediate(),a=new Ga(new a9(r.getProvider("auth-internal")),new d9(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Aa(u.options.projectId,d)}(s,o),s);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),io(zy,"4.7.2",e),io(zy,"4.7.2","esm2017")})();const dL={apiKey:"AIzaSyA8jYL0_YD1f8lxP4Sv9RXbXckYcB3zUzw",authDomain:"mtc-database-7a3f4.firebaseapp.com",projectId:"mtc-database-7a3f4",storageBucket:"mtc-database-7a3f4.appspot.com",messagingSenderId:"210230014480",appId:"1:210230014480:web:a1d2942088a3e35accd095"},Hw=f0(dL),Ge=xf(Hw),ur=GN(Hw),Sv=navigator.onLine,Av="./src/model3/";let Po=!0,dd,_n,hd,fd,ui;const hL={data(){return{showPage:!0}},beforeMounted(){window.addEventListener("load",()=>{Sv||alert(`No network detected 
 Please connect to a network and reload the page`)})},mounted(){Po=!0;const t=Jo();async function e(){const o=Av+"model.json",i=Av+"metadata.json";dd=await tmImage.load(o,i),fd=dd.getTotalClasses();const s=!0;_n=new tmImage.Webcam(144,144,s),await _n.setup(),await _n.play(),window.requestAnimationFrame(n),document.getElementById("webcam-container").appendChild(_n.canvas),hd=document.getElementById("label-container");for(let a=0;a<fd;a++)hd.appendChild(document.createElement("div.rounded-xl border-4 border-blue-500"))}async function n(){Po&&(_n.update(),Sv?(await r(),window.requestAnimationFrame(n)):(_n.stop(),alert("Error! No Network Detected!")))}async function r(){ui=await dd.predict(_n.canvas),console.log(ui);for(let o=0;o<fd;o++)if(ui[o].probability.toFixed(2)==1){const i=`Detected ${ui[o].className}'s Face ${ui[o].probability.toFixed(2)*100}%`;hd.innerHTML=`<P class="underline"> ${i}</p>`;const s=eo(ur,"users",ui[o].className);await ir(s).then(a=>{if(a.exists()){console.log("User Exist");const u=a.data().matric.split("-")[4];prompt(`Detected ${a.data().name}. 
 
 Enter the last 4 digits of your matric number to login`,"0123")==u?a.data().verification=="verified"?(t.dispatch("anonSignin",a.data().name),Po=!1,_n.stop()):(Po=!1,_n.stop(),alert("User not verified! Contact Admin."),_e.push("/")):(Po=!1,_n.stop(),alert("Wrong User detected!"),_e.push("/"))}else console.log("Name does not exist")})}}e()},methods:{toggleShowProductPage(){_e.push("/"),Po=!1,this.showPage=!1},stopVid(){_n.stop(),Po=!1,this.showPage=!1}}},fL={class:"fixed outline-none flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30 text-slate-800"},pL={class:"flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 overflow-x-hidden overflow-y-auto overflow-hidden bg-slate-100 shadow-sm"},mL={class:"flex z-50 my-auto md:py-2 w-full h-full"},gL={class:"m-auto border-blue-400 flex-col py-10 px-4 space-y-10 md:space-y-5"},yL=P("div",{id:"webcam-container",class:"rounded-full w-fit h-fit -scroll-my-10 mx-auto overflow-hidden border-2 border-purple-700"},null,-1),vL={class:"flex w-full space-x-5 mx-auto"},bL=P("div",{id:"label-container",class:"rounded-xl text-sm md:text-base"},"Please wait while the system load...",-1),_L={class:"mx-auto text-center space-y-3"},wL=P("p",null,"Wrong Face detected?",-1),EL={class:"w-full flex justify-evenly md:justify-between mt-10 text-sm font-normal md:font-semibold border-red-500 md:mx-auto md:w-3/4"},IL=P("p",{class:"text-center my-auto"},"New to the system? Proceed to ",-1);function TL(t,e,n,r,o,i){const s=Ce("font-awesome-icon"),a=Ce("router-link");return B(),Ue(vo,{name:"slide-fade"},{default:Qe(()=>[at(P("div",fL,[P("div",{onClick:e[0]||(e[0]=l=>i.toggleShowProductPage()),class:"z-50 mx-auto mt-6 -mb-5 w-8 h-8 md:w-12 md:h-12 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100"},[ue(s,{icon:"fa-solid fa-x",size:"sm",style:{color:"#333366"},class:"md:hidden m-auto rounded-full"}),ue(s,{icon:"fa-solid fa-x",size:"lg",style:{color:"#333366"},class:"hidden md:block m-auto rounded-full"})]),P("div",pL,[P("div",mL,[P("div",gL,[yL,P("div",vL,[bL,P("button",{type:"button",onClick:e[1]||(e[1]=l=>i.stopVid()),class:"rounded-lg px-4 py-0 shadow-md border-4 border-purple-900 bg-slate-200 text-sm md:text-base font-semibold"},"Stop Camera")])])]),P("div",_L,[wL,P("p",null,[ue(a,{to:"/manualLogin",onClick:e[2]||(e[2]=l=>i.stopVid()),class:"bg-purple-900 text-slate-200 px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:Qe(()=>[rt(" Manual LogIn")]),_:1})])]),P("div",EL,[IL,ue(a,{to:"/Signup",onClick:e[3]||(e[3]=l=>i.stopVid()),class:"bg-purple-900 text-slate-200 my-auto px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:Qe(()=>[rt(" Sign Up")]),_:1})])])],512),[[La,o.showPage]])]),_:1})}const SL=Jt(hL,[["render",TL]]),AL={components:{camPage:SL}};function CL(t,e,n,r,o,i){const s=Ce("camPage");return B(),te("div",null,[ue(s)])}const xL=Jt(AL,[["render",CL]]),PL={data(){return{showEye:!0,levelOptions:[{label:"ND 1",value:"nd1"},{label:"ND 2",value:"nd2"},{label:"HND 1",value:"hnd1"},{label:"HND 2",value:"hnd2"}],genderOptions:[{label:"Male",value:"male"},{label:"Female",value:"female"}]}},methods:{eyes(){this.showEye=!this.showEye}},setup(){const t=hr({}),e=Jo(),n=Fx(),r=hr(),o=[{label:"Computer Science",value:"computer science"},{label:"Science Laboratory Technology",value:"slt"},{label:"Engineering",value:"engineering"},{label:"Law",value:"law"},{label:"Tourism",value:"tourism"},{label:"Agriculture",value:"agriculture"},{label:"Pharmacy",value:"pharmacy"},{label:"Banking and Finance",value:"banking and finance"},{label:"Education",value:"education"},{label:"Mass Communication",value:"mass communication"},{label:"Business Administration",value:"Business Administration"},{label:"Food Technology",value:"food technology"},{label:"Glass Technology",value:"glass technology"},{label:"Accounting",value:"accounting"},{label:"Taxation",value:"taxation"},{label:"Fisheries",value:"fisheries"},{label:"Civil Engineering",value:"civil engineering"},{label:"Mechanical Engineering",value:"mechanical engineering"},{label:"Electrical Engineering",value:"electrical engineering"},{label:"Estate Management",value:"estate management"},{label:"Statistics",value:"statistics"},{label:"Art and industrial Design",value:"art and industrial design"},{label:"Marketing",value:"marketing"},{label:"Architectural Technology",value:"architectural technology"}],i=()=>{navigator.vibrate([100,50])};return{registerForm:t,showPassword:()=>{const l=document.getElementById("password"),u=document.getElementById("password2");l.type==="password"&&u.type==="password"?(l.type="text",u.type="text"):(l.type="password",u.type="password")},register:()=>{var l=document.getElementById("password"),u=document.getElementById("password2");l.value!=""&&u.value!=""&&(l.value===u.value?e.dispatch("register",t.value):(i(),n.add({severity:"error",summary:"Error!",detail:"Passwords not matched",life:3e3})))},departmentOptions:o,department:r}}},kL={class:"w-full h-full absolute flex"},OL={class:"h-fit m-auto px-2 flex flex-col-reverse rounded-lg md:flex-row w-11/12 md:w-2/3 py-10 bg-slate-50 shadow-2xl"},RL={class:"flex z-50 md:py-2 w-full h-full"},NL={class:"w-full h-full py-2 flex flex-col px-2 md:h-full m-auto md:m-0"},LL=P("img",{src:Zi,alt:"Fpa logo",class:"w-16 -mt-2 md:w-28 md:m-auto mx-auto"},null,-1),VL={class:"w-full h-full space-y-2 flex flex-col md:space-y-3"},DL=P("h2",{class:"text-slate-800 mx-auto font-bold text-lg uppercase"},"Sign up",-1),ML=P("h4",{class:"text-slate-800 font-bold text-sm md:text-base text-center"},"Enter your details below to signup.",-1),$L={class:"flex flex-col space-y-3 md:flex-col text-sm md:text-base"},FL=P("label",{for:"name",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Full Name:",-1),UL=P("label",{for:"DOB",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold"},"Date of Birth:",-1),jL=P("label",{for:"Email",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Email Address:",-1),BL=P("label",{for:"department",class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Select Your Department.",-1),zL=["value"],HL=P("label",{for:"level",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"}," Select Your Level. ",-1),KL=["value"],WL=P("label",{for:"gender",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Select Your Gender.",-1),qL=["value"],GL=P("label",{for:"matric",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Matric Number:",-1),QL=P("label",{for:"password",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Password:",-1),YL={class:"bg-inherit m-auto w-11/12 md:m-auto md:w-full lg:w-3/4 lg:m-auto border-b-2 flex border-slate-400"},XL=P("label",{for:"password",class:"bg-inherit mx-auto -mb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"}," Confirm Password: ",-1),JL=P("input",{id:"password2",type:"password",placeholder:"Confirm password",class:"bg-inherit m-auto text-xs md:text-sm py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},null,-1),ZL=P("input",{type:"submit",value:"submit",class:"bg-purple-900 font-bold text-slate-200 mx-auto w-fit px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},null,-1),e5={class:"w-full flex justify-evenly md:justify-between mt-10 font-semibold border-red-500 md:mx-auto md:w-2/4"},t5=P("p",{class:"text-center text-sm md:text-base my-auto"},"Already verified? Proceed to ",-1);function n5(t,e,n,r,o,i){const s=Ce("font-awesome-icon"),a=Ce("router-link");return B(),te("div",kL,[P("div",OL,[P("div",RL,[P("div",NL,[LL,P("div",VL,[DL,ML,P("form",{name:"emailAndPassword",onSubmit:e[10]||(e[10]=af(l=>r.register(),["prevent"])),class:"flex flex-col space-y-3"},[P("div",$L,[FL,at(P("input",{name:"DisplayName",type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>r.registerForm.name=l),placeholder:"Adigun Chibike Hassan",class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},null,512),[[rr,r.registerForm.name,void 0,{trim:!0,lazy:!0}]]),UL,at(P("input",{name:"Age",type:"date","onUpdate:modelValue":e[1]||(e[1]=l=>r.registerForm.age=l),class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},null,512),[[rr,r.registerForm.age,void 0,{trim:!0,lazy:!0}]]),jL,at(P("input",{name:"Email",type:"email","onUpdate:modelValue":e[2]||(e[2]=l=>r.registerForm.email=l),placeholder:"Johndeo@gmail.com",class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},null,512),[[rr,r.registerForm.email,void 0,{trim:!0,lazy:!0}]]),BL,at(P("select",{name:"department","onUpdate:modelValue":e[3]||(e[3]=l=>r.registerForm.department=l),class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},[(B(!0),te(He,null,Sn(r.departmentOptions,l=>(B(),te("option",{key:l.label,value:l.value},xe(l.label),9,zL))),128))],512),[[Bs,r.registerForm.department]]),HL,at(P("select",{name:"level","onUpdate:modelValue":e[4]||(e[4]=l=>r.registerForm.level=l),class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},[(B(!0),te(He,null,Sn(o.levelOptions,l=>(B(),te("option",{key:l.label,value:l.value},xe(l.label),9,KL))),128))],512),[[Bs,r.registerForm.level]]),WL,at(P("select",{name:"gender","onUpdate:modelValue":e[5]||(e[5]=l=>r.registerForm.gender=l),class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},[(B(!0),te(He,null,Sn(o.genderOptions,l=>(B(),te("option",{key:l.label,value:l.value},xe(l.label),9,qL))),128))],512),[[Bs,r.registerForm.gender]]),GL,at(P("input",{name:"matric",type:"text","onUpdate:modelValue":e[6]||(e[6]=l=>r.registerForm.matric=l),placeholder:"fpa/cs/19/2-0000",class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},null,512),[[rr,r.registerForm.matric,void 0,{trim:!0,lazy:!0}]]),QL,P("div",YL,[at(P("input",{id:"password",type:"password","onUpdate:modelValue":e[7]||(e[7]=l=>r.registerForm.password=l),class:"bg-inherit m-auto py-2 w-11/12 indent-1 font-semibold"},null,512),[[rr,r.registerForm.password,void 0,{trim:!0,lazy:!0}]]),o.showEye?(B(),Ue(s,{key:0,icon:"fa-solid fa-eye",onClick:e[8]||(e[8]=l=>(r.showPassword(),i.eyes())),class:"p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400"})):(B(),Ue(s,{key:1,icon:"fa-solid fa-eye-slash",onClick:e[9]||(e[9]=l=>(r.showPassword(),i.eyes())),class:"p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400"}))]),XL,JL]),ZL],32)]),P("div",e5,[t5,ue(a,{to:"/login",class:"bg-purple-900 text-slate-200 px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:Qe(()=>[rt(" Log In")]),_:1})])])])])])}const r5=Jt(PL,[["render",n5]]),o5={data(){return{userName:"waiting..."}},beforeMount(){this.fetchUserName()},methods:{logout(){this.$store.dispatch("logOut")},fetchUserName(){const t=Jo();Ge.onAuthStateChanged(e=>{e&&(t.state.user==null?this.userName=localStorage.getItem("user"):this.userName=t.state.user)})}}},i5={class:"flex justify-between text-xs mt-2 font-semibold bg-slate-200 border-red-500 px-1 md:px-4 md:w-wd8 md:mx-auto md:py-2 md:text-base rounded-lg"},s5={class:"flex justify-between py-2 w-full text-center h-fit border-blue-500 my-auto"},a5={class:"bg-purple-500 rounded-lg p-2 md:px-4 mx-1 shadow-lg"},l5={class:"font-bold"};function c5(t,e,n,r,o,i){return B(),te("div",i5,[P("div",s5,[P("p",a5,[rt("User: "),P("span",l5,xe(o.userName),1),rt(".")]),P("p",{class:"bg-purple-500 rounded-lg p-2 md:px-4 mx-1 shadow-lg cursor-pointer",onClick:e[0]||(e[0]=s=>i.logout())}," Logout")])])}const pu=Jt(o5,[["render",c5]]),u5={components:{headerComponent:pu},data(){return{userName:""}},mounted(){Ge.onAuthStateChanged(t=>{t&&(this.$store.state.user==null?this.userName=localStorage.getItem("user"):this.$store.state.user=="admin"?_e.push("/admin"):this.userName=this.$store.state.user)})}},d5={class:"w-full h-full absolute flex flex-col border-red-500"},h5={class:"flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 bg-slate-100 shadow-sm"},f5={class:"flex z-50 my-auto md:py-2 w-full h-full"},p5={class:"w-full h-fit py-2 flex flex-col px-2 m-auto space-y-10"},m5=P("img",{src:Zi,alt:"Fpa logo",class:"w-16 -mt-2 md:w-28 my-auto mx-auto"},null,-1),g5={class:"w-full space-y-2 flex flex-col"},y5={class:"text-slate-800 mx-auto font-bold text-lg md:text-2xl"},v5=P("h4",{class:"text-slate-800 font-bold text-xs md:text-lg text-center"},"Choose an option below to take the exam or check you score.",-1),b5={class:"w-full flex justify-evenly md:justify-between font-semibold border-red-500 md:mx-auto md:w-2/4"};function _5(t,e,n,r,o,i){const s=Ce("header-component"),a=Ce("router-link");return B(),te("div",d5,[ue(s),P("div",h5,[P("div",f5,[P("div",p5,[m5,P("div",g5,[P("h2",y5,"Welcome "+xe(o.userName),1),v5]),P("div",b5,[ue(a,{to:"/examPage",class:"bg-purple-900 text-slate-200 px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:Qe(()=>[rt(" Start Exam")]),_:1}),ue(a,{to:"/scorePage",class:"bg-purple-900 text-slate-200 px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:Qe(()=>[rt(" Check Score")]),_:1})])])])])])}const w5=Jt(u5,[["render",_5]]);var E5=(t,e)=>{const n=t.__vccOpts||t;for(const[r,o]of e)n[r]=o;return n};const I5={name:"FulfillingBouncingCircleSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`,animationDuration:`${this.animationDuration}ms`}},orbitStyle(){return{height:`${this.size}px`,width:`${this.size}px`,borderColor:this.color,borderWidth:`${this.size*.03}px`,animationDuration:`${this.animationDuration}ms`}},circleStyle(){return{height:`${this.size}px`,width:`${this.size}px`,borderColor:this.color,color:this.color,borderWidth:`${this.size*.1}px`,animationDuration:`${this.animationDuration}ms`}}}};function T5(t,e,n,r,o,i){return B(),te("div",{class:"fulfilling-bouncing-circle-spinner",style:Fo(i.spinnerStyle)},[P("div",{class:"circle",style:Fo(i.circleStyle)},null,4),P("div",{class:"orbit",style:Fo(i.orbitStyle)},null,4)],4)}var S5=E5(I5,[["render",T5]]);const A5={components:{FulfillingBouncingCircleSpinner:S5,headerComponent:pu},computed:{formattedTime(){const t=Math.floor(this.time/60),e=this.time%60;return`${t.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}},data(){return{time:600,selectedAnswers:{},answers:[]}},mounted(){this.startTimer()},beforeUnmounted(){this.stopTimer()},methods:{startTimer(){this.timer=setInterval(()=>{this.time>0?this.time--:(this.stopTimer(),this.handleTimerEnd())},1e3)},stopTimer(){clearInterval(this.timer),this.timer=null},handleTimerEnd(){_e.push("/scorePage")},submit(){if(confirm("Are you ready to submit answers?")){for(const[t,e]of Object.entries(this.selectedAnswers))this.answers.push(e);this.$store.dispatch("submitQuiz",this.answers),this.selectedAnswers={},this.answers=[],_e.push("/confirmScore")}else return}}},C5={class:"w-fit border-red-500 mx-auto"},x5={class:"bg-slate-200 flex justify-between my-2 border-black px-2 md:px-8 md:w-wd8 md:mx-auto md:text-base rounded-lg"},P5=P("h2",{class:"py-2 text-base font-semibold md:text-2xl my-auto"},"Course Code: GNS 501",-1),k5={class:"cursor-pointer bg-cyan-600 rounded-xl space-x-2 w-fit text-center flex px-2 md:px-4 py-2 my-2 text-xs font-semibold shadow-lg md:text-base"},O5={class:"py-1"},R5={class:"mx-auto"},N5={class:"w-98 flex flex-col mt-5 mb-10 text-xs md:lg capitalize rounded-xl shadow-black shadow-lg -shadow-lg"},L5=P("div",{class:"text-lg font-bold text-center underline py-2"},"Answer the following questions",-1),V5={class:"h-fitm px-2 md:px-10 w-full flex flex-wrap border-red-500"},D5={class:"text-base font-bold md:text-lg"},M5=["name","onUpdate:modelValue","value"],$5={for:"options",class:"my-auto ml-2 text-base"};function F5(t,e,n,r,o,i){const s=Ce("header-component"),a=Ce("fulfilling-bouncing-circle-spinner");return B(),te("div",C5,[ue(s),P("div",x5,[P5,P("div",k5,[ue(a,{class:"m-auto block md:hidden","animation-duration":4e3,size:15,color:"#ff1d5e"}),ue(a,{class:"m-auto hidden md:block","animation-duration":4e3,size:20,color:"#ff1d5e"}),P("p",O5,"Time : "+xe(i.formattedTime),1)])]),P("div",R5,[P("div",N5,[L5,P("div",V5,[(B(!0),te(He,null,Sn(this.$store.state.questions,(l,u)=>(B(),te("div",{key:u,class:"my-3 h-fit w-1/2 lg:w-1/3 border-red-500"},[P("h3",D5,"("+xe(u+1)+") "+xe(l.questionDetails.question),1),(B(!0),te(He,null,Sn(l.questionDetails.options,d=>(B(),te("div",{key:d,class:"my-2 ml-5 flex"},[at(P("input",{type:"radio",name:l.questionDetails.name,"onUpdate:modelValue":f=>o.selectedAnswers[l.questionDetails.name]=f,value:d,id:"",required:""},null,8,M5),[[AA,o.selectedAnswers[l.questionDetails.name]]]),P("label",$5,xe(d),1)]))),128))]))),128))]),P("button",{onClick:e[0]||(e[0]=l=>i.submit()),class:"w-11/12 my-4 mx-auto text-base md:text-lg font-bold bg-purple-900 py-5 text-slate-200 md:w-3/4 md:mx-auto rounded-xl shadow-lg"},"Submit")])])])}const U5=Jt(A5,[["render",F5]]),j5={components:{headerComponent:pu},data(){return{userName:"",score:"No score yet."}},beforeMount(){this.fetchData()},methods:{async fetchData(){if(this.$store.state.user==null){this.userName=localStorage.getItem("user");const t=eo(ur,"users",this.userName);await ir(t).then(e=>{e.exists()?this.score=e.data().score:this.score="No score yet. Take Exam."})}else{this.userName=this.$store.state.user;const t=eo(ur,"users",this.userName);await ir(t).then(e=>{e.exists()?this.score=e.data().score:this.score="No score yet. Go back and take the test."})}}}},B5={class:"w-full h-full absolute flex flex-col"},z5={class:"flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 bg-slate-100 shadow-sm"},H5={class:"flex z-50 my-auto md:py-2 w-full h-full"},K5={class:"w-full h-fit py-2 flex flex-col px-2 m-auto space-y-10"},W5=P("img",{src:Zi,alt:"Fpa logo",class:"w-16 -mt-2 md:w-28 my-auto mx-auto"},null,-1),q5={class:"w-full space-y-2 flex flex-col"},G5={class:"text-slate-800 mx-auto font-bold text-lg md:text-2xl"},Q5={class:"text-slate-800 font-bold text-xs md:text-lg text-center"},Y5={class:"bg-purple-900 text-slate-200 px-2 py-1 rounded-lg transition-all shadow-lg"},X5={class:"w-full flex justify-evenly md:justify-between font-semibold border-red-500 md:mx-auto md:w-2/4"};function J5(t,e,n,r,o,i){const s=Ce("header-component"),a=Ce("router-link");return B(),te("div",B5,[ue(s),P("div",z5,[P("div",H5,[P("div",K5,[W5,P("div",q5,[P("h2",G5,"Welcome "+xe(o.userName),1),P("h4",Q5,[rt("Your Total Score is: "),P("span",Y5,xe(o.score),1)])]),P("div",X5,[ue(a,{to:"/home",class:"bg-purple-900 text-slate-200 mx-auto px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:Qe(()=>[rt("Go Back")]),_:1})])])])])])}const Z5=Jt(j5,[["render",J5]]),eV={data(){return{timer:20}},mounted(){setInterval(()=>{this.timer=this.timer-1},1e3),setTimeout(()=>{this.$store.dispatch("logOut"),_e.push("/")},21e3)},unmounted(){clearInterval(),clearTimeout()},setup(){let t=!0;const e=Jo();return{toggleShowProductPage:()=>{e.dispatch("logOut"),_e.push("/")},showPage:t}}},Qa=t=>(Vb("data-v-3400db96"),t=t(),Db(),t),tV={class:"fixed outline-none flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30 text-slate-800"},nV={class:"flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 overflow-x-hidden overflow-y-auto overflow-hidden bg-slate-100 shadow-sm"},rV={class:"flex z-50 my-auto md:py-2 w-full h-full"},oV={class:"m-auto flex flex-col space-y-2 md:space-y-5"},iV=Qa(()=>P("div",{class:"md:hidden"},[P("svg",{class:"checkmark m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},[P("circle",{class:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),P("path",{class:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})])],-1)),sV=Qa(()=>P("div",{class:"animation-ctn m-auto hidden md:flex"},[P("div",{class:"icon icon--order-success svg"},[P("svg",{xmlns:"http://www.w3.org/2000/svg",width:"154px",height:"154px"},[P("g",{fill:"none",stroke:"#22AE73","stroke-width":"2"},[P("circle",{cx:"77",cy:"77",r:"72",style:{"stroke-dasharray":"480px, 480px","stroke-dashoffset":"960px"}}),P("circle",{id:"colored",fill:"#22AE73",cx:"77",cy:"77",r:"72",style:{"stroke-dasharray":"480px, 480px","stroke-dashoffset":"960px"}}),P("polyline",{class:"st0",stroke:"#fff","stroke-width":"10",points:"43.5,77.8 63.7,97.9 112.2,49.4 ",style:{"stroke-dasharray":"100px, 100px","stroke-dashoffset":"200px"}})])])])],-1)),aV=Qa(()=>P("h2",{class:"font-bold text-base mx-auto md:text-lg"},"Details Registered Successfully!",-1)),lV={class:"mt-10 mx-auto text-blue-500 font-semibold underline"},cV={class:"font-semibold text-base text-center"},uV=Qa(()=>P("br",null,null,-1)),dV=Qa(()=>P("br",null,null,-1)),hV={class:"font-extrabold text-lg"};function fV(t,e,n,r,o,i){const s=Ce("font-awesome-icon"),a=Ce("router-link");return B(),Ue(vo,{name:"slide-fade"},{default:Qe(()=>[at(P("div",tV,[P("div",{onClick:e[0]||(e[0]=l=>r.toggleShowProductPage()),class:"z-50 mx-auto mt-6 -mb-5 w-8 h-8 md:w-12 md:h-12 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100"},[ue(s,{icon:"fa-solid fa-x",size:"sm",style:{color:"#333366"},class:"md:hidden m-auto rounded-full"}),ue(s,{icon:"fa-solid fa-x",size:"lg",style:{color:"#333366"},class:"hidden md:block m-auto rounded-full"})]),P("div",nV,[P("div",rV,[P("div",oV,[iV,sV,aV,P("div",lV,[ue(a,{to:"/",onClick:e[1]||(e[1]=l=>r.toggleShowProductPage())},{default:Qe(()=>[rt(" Go to Home Page.")]),_:1})]),P("h1",cV,[rt(" Await further instructions for face capturing to complete registration. "),uV,dV,rt(" You will be rediected to Home Page in : "),P("span",hV,xe(o.timer),1),rt(" seconds. ")])])])])],512),[[La,r.showPage]])]),_:1})}const pV=Jt(eV,[["render",fV],["__scopeId","data-v-3400db96"]]),mV={data(){return{timer:20}},mounted(){setInterval(()=>{this.timer=this.timer-1},1e3),setTimeout(()=>{_e.push("/home")},21e3)},unmounted(){clearInterval(),clearTimeout()},setup(){return{toggleShowProductPage:()=>{_e.push("/home")},showPage:!0}}},mu=t=>(Vb("data-v-3ef70819"),t=t(),Db(),t),gV={class:"fixed outline-none flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30 text-slate-800"},yV={class:"flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 overflow-x-hidden overflow-y-auto overflow-hidden bg-slate-100 shadow-sm"},vV={class:"flex z-50 my-auto md:py-2 w-full h-full"},bV={class:"m-auto flex flex-col space-y-2 md:space-y-5"},_V=mu(()=>P("div",{class:"md:hidden"},[P("svg",{class:"checkmark m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},[P("circle",{class:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),P("path",{class:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})])],-1)),wV=mu(()=>P("div",{class:"animation-ctn m-auto hidden md:flex"},[P("div",{class:"icon icon--order-success svg"},[P("svg",{xmlns:"http://www.w3.org/2000/svg",width:"154px",height:"154px"},[P("g",{fill:"none",stroke:"#22AE73","stroke-width":"2"},[P("circle",{cx:"77",cy:"77",r:"72",style:{"stroke-dasharray":"480px, 480px","stroke-dashoffset":"960px"}}),P("circle",{id:"colored",fill:"#22AE73",cx:"77",cy:"77",r:"72",style:{"stroke-dasharray":"480px, 480px","stroke-dashoffset":"960px"}}),P("polyline",{class:"st0",stroke:"#fff","stroke-width":"10",points:"43.5,77.8 63.7,97.9 112.2,49.4 ",style:{"stroke-dasharray":"100px, 100px","stroke-dashoffset":"200px"}})])])])],-1)),EV=mu(()=>P("h2",{class:"font-bold text-base mx-auto md:text-lg"},"Done!",-1)),IV=mu(()=>P("h1",{class:"font-semibold text-base text-center"}," Your score has been recorded successfully!",-1)),TV={class:"mt-10 mx-auto text-blue-500 font-semibold underline"},SV={class:"text-center"},AV={class:"font-extrabold text-lg"};function CV(t,e,n,r,o,i){const s=Ce("font-awesome-icon"),a=Ce("router-link");return B(),Ue(vo,{name:"slide-fade"},{default:Qe(()=>[at(P("div",gV,[P("div",{onClick:e[0]||(e[0]=l=>r.toggleShowProductPage()),class:"z-50 mx-auto mt-6 -mb-5 w-8 h-8 md:w-12 md:h-12 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100"},[ue(s,{icon:"fa-solid fa-x",size:"sm",style:{color:"#333366"},class:"md:hidden m-auto rounded-full"}),ue(s,{icon:"fa-solid fa-x",size:"lg",style:{color:"#333366"},class:"hidden md:block m-auto rounded-full"})]),P("div",yV,[P("div",vV,[P("div",bV,[_V,wV,EV,IV,P("div",TV,[ue(a,{to:"/scorePage"},{default:Qe(()=>[rt(" View Your Score.")]),_:1})]),P("h2",SV,[rt(" You will be rediected to back Home in :"),P("span",AV,xe(o.timer),1),rt(" seconds. ")])])])])],512),[[La,r.showPage]])]),_:1})}const xV=Jt(mV,[["render",CV],["__scopeId","data-v-3ef70819"]]),PV={data(){return{showEye:!0}},methods:{eyes(){this.showEye=!this.showEye}},setup(){let t=!0;const e=Jo(),n=hr({});return{toggleShowProductPage:()=>{_e.push("/")},login:()=>{e.dispatch("login",n.value)},registerForm:n,showPassword:()=>{const s=document.getElementById("password");s.type==="password"?s.type="text":s.type="password"},showPage:t}}},kV={class:"fixed outline-none flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30 text-slate-800"},OV={class:"flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 overflow-x-hidden overflow-y-auto overflow-hidden bg-slate-100 shadow-sm"},RV={class:"flex z-50 my-auto md:py-2 w-full h-full"},NV={class:"w-full h-fit py-2 flex flex-col px-2 md:h-full m-auto md:m-0"},LV=P("img",{src:Zi,alt:"Fpa logo",class:"w-16 -mt-2 md:w-28 md:m-auto mx-auto"},null,-1),VV={class:"w-full h-full space-y-2 flex flex-col md:space-y-3"},DV=P("h2",{class:"text-slate-800 mx-auto font-bold text-lg"},"Login",-1),MV=P("h4",{class:"text-slate-800 font-bold text-xs text-center"},"Enter your details below to Login.",-1),$V={class:"flex flex-col space-y-3 md:flex-col text-xs md:text-sm"},FV=P("label",{for:"Email",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Email Address:",-1),UV=P("label",{for:"password",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Password:",-1),jV={class:"bg-inherit m-auto w-11/12 md:m-auto md:w-full lg:w-3/4 lg:m-auto border-b-2 flex border-slate-400"},BV=P("input",{type:"submit",value:"Login",class:"bg-purple-900 font-bold text-slate-200 mx-auto w-fit px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},null,-1),zV={class:"w-full flex justify-evenly md:justify-between mt-10 text-sm font-normal md:font-semibold border-red-500 md:mx-auto md:w-3/4"},HV=P("p",{class:"text-center my-auto"},"New to the system? Proceed to ",-1);function KV(t,e,n,r,o,i){const s=Ce("font-awesome-icon"),a=Ce("router-link");return B(),Ue(vo,{name:"slide-fade"},{default:Qe(()=>[at(P("div",kV,[P("div",{onClick:e[0]||(e[0]=l=>r.toggleShowProductPage()),class:"z-50 mx-auto mt-6 -mb-5 w-8 h-8 md:w-12 md:h-12 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100"},[ue(s,{icon:"fa-solid fa-x",size:"sm",style:{color:"#333366"},class:"md:hidden m-auto rounded-full"}),ue(s,{icon:"fa-solid fa-x",size:"lg",style:{color:"#333366"},class:"hidden md:block m-auto rounded-full"})]),P("div",OV,[P("div",RV,[P("div",NV,[LV,P("div",VV,[DV,MV,P("form",{name:"emailAndPassword",onSubmit:e[5]||(e[5]=af(l=>r.login(),["prevent"])),class:"flex flex-col space-y-3"},[P("div",$V,[FV,at(P("input",{name:"Email",type:"email","onUpdate:modelValue":e[1]||(e[1]=l=>r.registerForm.email=l),placeholder:"Johndeo@gmail.com",class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},null,512),[[rr,r.registerForm.email,void 0,{trim:!0,lazy:!0}]]),UV,P("div",jV,[at(P("input",{id:"password",type:"password","onUpdate:modelValue":e[2]||(e[2]=l=>r.registerForm.password=l),class:"bg-inherit m-auto py-2 w-11/12 indent-1 font-semibold"},null,512),[[rr,r.registerForm.password,void 0,{trim:!0,lazy:!0}]]),o.showEye?(B(),Ue(s,{key:0,icon:"fa-solid fa-eye",onClick:e[3]||(e[3]=l=>(r.showPassword(),i.eyes())),class:"p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400"})):(B(),Ue(s,{key:1,icon:"fa-solid fa-eye-slash",onClick:e[4]||(e[4]=l=>(r.showPassword(),i.eyes())),class:"p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400"}))])]),BV],32)]),P("div",zV,[HV,ue(a,{to:"/Signup",onClick:e[6]||(e[6]=l=>t.stopVid()),class:"bg-purple-900 text-slate-200 my-auto px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},{default:Qe(()=>[rt(" Sign Up")]),_:1})])])])])],512),[[La,r.showPage]])]),_:1})}const WV=Jt(PV,[["render",KV]]),qV={components:{headerComponent:pu},data(){return{userName:"",score:"No score yet. Go back and take the test.",documents:[],verification:""}},mounted(){this.getRoute()},methods:{async updateUser(){if(this.userName!=""&&this.verification!=""){const t=eo(ur,"users",this.userName);await ir(t).then(e=>{e.exists()&&Th(t,{verification:this.verification}).then(()=>{this.userName="",this.verification="",alert("User Verification Status Updated."),window.location.reload()}).catch(n=>{console.log(n)})})}else alert("Please select the user and verification status.")},getRoute(){const t=H6();console.log(t.name),this.$store.state.user!="admin"&&t.name=="admin"?(console.log("authenticate user not admin"),_e.push("/home")):localStorage.getItem("user")&&t.name=="admin"?(console.log("local storage user not admin"),_e.push("/home")):this.fetchData()},async fetchData(){try{(await lL(WN(ur,"users"))).forEach(e=>{this.documents.push({id:e.id,data:e.data()})}),console.log(this.documents)}catch(t){console.log(t)}}}},GV={class:"w-full h-fit absolute flex flex-col"},QV={class:"flex flex-col h-fit rounded-xl my-5 mx-auto pb-2 w-fit md:w-wd7 lg:w-wd8 xl:w-wd45 bg-slate-100 shadow-sm"},YV={class:"flex z-50 my-auto md:py-2 w-full h-full border-blue-500"},XV={class:"w-full h-full py-2 flex flex-col px-2 border-red-500 mx-auto space-y-10"},JV={class:"w-full space-y-2 flex flex-col"},ZV=P("h2",{class:"text-slate-800 mx-auto font-bold text-lg md:text-2xl uppercase"},"Admin Page.",-1),eD={class:""},tD=P("tr",{class:"border-black rounded-t-xl border-2 md:border-4 font-bold text-center text-sm md:text-lg uppercase"},[P("td",null,"Name"),P("td",null,"Email"),P("td",null,"Matric Number"),P("td",null,"Department"),P("td",null,"Level"),P("td",null,"Score"),P("td",null,"Verification")],-1),nD={class:"border-black border-2 md:border-4 w-fit uppercase py-2"},rD={class:"border-black border-2 md:border-4 w-fit lowercase"},oD={class:"border-black border-2 md:border-4 w-fit uppercase"},iD={class:"border-black border-2 md:border-4 w-fit uppercase"},sD={class:"border-black border-2 md:border-4 w-fit uppercase"},aD={class:"border-black border-2 md:border-4 w-fit uppercase"},lD={class:"border-black border-2 md:border-4 w-fit uppercase"},cD={class:"flex flex-col space-y-3"},uD=P("h4",{class:"text-slate-800 font-bold text-base md:text-lg text-center uppercase"},"User Verification.",-1),dD={class:"border-blue-500 flex w-full md:w-3/4 mx-auto"},hD={class:"flex flex-col border-black w-full mx-5"},fD=P("label",{for:"userName",class:"text-base font-bold md:text-lg md:font-bold"},"User Name:",-1),pD=["value"],mD={class:"flex flex-col border-black w-full"},gD=P("label",{for:"verification",class:"text-base font-bold md:text-lg md:font-bold"},"Verification Status:",-1),yD=P("option",{value:"verified",class:"bg-inherit indent-1 font-semibold border-b-2 border-slate-400"}," verified ",-1),vD=P("option",{value:"Unverified",class:"bg-inherit indent-1 font-semibold border-b-2 border-slate-400"}," Unverified ",-1),bD=[yD,vD],_D={class:"w-full flex justify-evenly md:justify-between font-semibold border-red-500 md:mx-auto md:w-2/4"};function wD(t,e,n,r,o,i){const s=Ce("header-component");return B(),te("div",GV,[ue(s),P("div",QV,[P("div",YV,[P("div",XV,[P("div",JV,[ZV,P("table",eD,[tD,(B(!0),te(He,null,Sn(o.documents,a=>(B(),te("tr",{key:a.id,class:"border-blue-500 border-2 md:border-4 text-xs md:text-base"},[P("td",nD,xe(a.data.name),1),P("td",rD,xe(a.data.email),1),P("td",oD,xe(a.data.matric),1),P("td",iD,xe(a.data.department),1),P("td",sD,xe(a.data.level),1),P("td",aD,xe(a.data.score),1),P("td",lD,xe(a.data.verification),1)]))),128))])]),P("div",cD,[uD,P("div",dD,[P("div",hD,[fD,at(P("select",{name:"userName",id:"username","onUpdate:modelValue":e[0]||(e[0]=a=>o.userName=a)},[(B(!0),te(He,null,Sn(o.documents,a=>(B(),te("option",{value:a.data.name,key:a.id,class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},xe(a.data.name),9,pD))),128))],512),[[Bs,o.userName]])]),P("div",mD,[gD,at(P("select",{name:"verification",id:"verification","onUpdate:modelValue":e[1]||(e[1]=a=>o.verification=a)},bD,512),[[Bs,o.verification]])])])]),P("div",_D,[P("button",{onClick:e[2]||(e[2]=a=>i.updateUser()),class:"bg-purple-900 text-slate-200 mx-auto px-2 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},"Submit Verification.")])])])])])}const ED=Jt(qV,[["render",wD]]),ID={data(){return{showEye:!0}},methods:{eyes(){this.showEye=!this.showEye}},setup(){let t=!0;const e=Jo(),n=hr({});return{toggleShowProductPage:()=>{_e.push("/")},login:()=>{e.dispatch("AdminLogin",n.value)},registerForm:n,showPassword:()=>{const s=document.getElementById("password");s.type==="password"?s.type="text":s.type="password"},showPage:t}}},TD={class:"fixed outline-none flex flex-col bottom-0 h-full w-full bg-black z-40 bg-opacity-30 text-slate-800"},SD={class:"flex flex-col h-5/6 rounded-xl m-auto pt-2 pb-5 w-wd9 md:w-wd7 lg:w-wd45 xl:w-wd45 overflow-x-hidden overflow-y-auto overflow-hidden bg-slate-100 shadow-sm"},AD={class:"flex z-50 my-auto md:py-2 w-full h-full"},CD={class:"w-full h-fit py-2 flex flex-col px-2 md:h-full m-auto md:m-0"},xD=P("img",{src:Zi,alt:"Fpa logo",class:"w-16 -mt-2 md:w-28 md:m-auto mx-auto"},null,-1),PD={class:"w-full h-full space-y-2 flex flex-col md:space-y-3"},kD=P("h2",{class:"text-slate-800 mx-auto font-bold text-lg"},"Admin Login.",-1),OD=P("h4",{class:"text-slate-800 font-bold text-xs text-center"},"Provide your details below to as Admin to Login.",-1),RD={class:"flex flex-col space-y-3 md:flex-col text-xs md:text-sm"},ND=P("label",{for:"Email",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Email Address:",-1),LD=P("label",{for:"password",class:"bg-inherit mx-auto -yb-10 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-bold"},"Enter Password:",-1),VD={class:"bg-inherit m-auto w-11/12 md:m-auto md:w-full lg:w-3/4 lg:m-auto border-b-2 flex border-slate-400"},DD=P("input",{type:"submit",value:"Login",class:"bg-purple-900 font-bold text-slate-200 mx-auto w-fit px-6 py-1 hover:px-7 hover:py-2 rounded-lg transition-all shadow-lg"},null,-1);function MD(t,e,n,r,o,i){const s=Ce("font-awesome-icon");return B(),Ue(vo,{name:"slide-fade"},{default:Qe(()=>[at(P("div",TD,[P("div",{onClick:e[0]||(e[0]=a=>r.toggleShowProductPage()),class:"z-50 mx-auto mt-6 -mb-5 w-8 h-8 md:w-12 md:h-12 shadow-md cursor-pointer p-2 hover:bg-slate-300 transition-all rounded-full flex bg-gray-100"},[ue(s,{icon:"fa-solid fa-x",size:"sm",style:{color:"#333366"},class:"md:hidden m-auto rounded-full"}),ue(s,{icon:"fa-solid fa-x",size:"lg",style:{color:"#333366"},class:"hidden md:block m-auto rounded-full"})]),P("div",SD,[P("div",AD,[P("div",CD,[xD,P("div",PD,[kD,OD,P("form",{name:"emailAndPassword",onSubmit:e[5]||(e[5]=af(a=>r.login(),["prevent"])),class:"flex flex-col space-y-3"},[P("div",RD,[ND,at(P("input",{name:"Email",type:"email","onUpdate:modelValue":e[1]||(e[1]=a=>r.registerForm.email=a),placeholder:"Admin@gmail.com",class:"bg-inherit m-auto py-2 w-11/12 md:w-full lg:w-3/4 lg:mx-auto indent-1 font-semibold border-b-2 border-slate-400"},null,512),[[rr,r.registerForm.email,void 0,{trim:!0,lazy:!0}]]),LD,P("div",VD,[at(P("input",{id:"password",type:"password","onUpdate:modelValue":e[2]||(e[2]=a=>r.registerForm.password=a),class:"bg-inherit m-auto py-2 w-11/12 indent-1 font-semibold"},null,512),[[rr,r.registerForm.password,void 0,{trim:!0,lazy:!0}]]),o.showEye?(B(),Ue(s,{key:0,icon:"fa-solid fa-eye",onClick:e[3]||(e[3]=a=>(r.showPassword(),i.eyes())),class:"p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400"})):(B(),Ue(s,{key:1,icon:"fa-solid fa-eye-slash",onClick:e[4]||(e[4]=a=>(r.showPassword(),i.eyes())),class:"p-1 m-auto md:p-2 -mr-0 text-gray-600 border-2 rounded-md border-slate-400"}))])]),DD],32)])])])])],512),[[La,r.showPage]])]),_:1})}const $D=Jt(ID,[["render",MD]]),_e=B6({history:g6("/FPA-E-EXAM"),routes:[{path:"/",name:"landingPage",component:n9},{path:"/adminLogin",name:"adminLogin",component:$D},{path:"/login",name:"login",component:xL},{path:"/signup",name:"signup",component:r5},{path:"/manualLogin",name:"manualLogin",component:WV},{path:"/confirmSignup",name:"confirmSignup",component:pV},{path:"/confirmScore",name:"confirmScore",component:xV,meta:{requiresAuth:!0}},{path:"/admin",name:"admin",component:ED,meta:{requiresAuth:!0}},{path:"/home",name:"home",component:w5,meta:{requiresAuth:!0}},{path:"/scorePage",name:"scorePage",component:Z5,meta:{requiresAuth:!0}},{path:"/examPage",name:"examPage",component:U5,meta:{requiresAuth:!0}}]});Ge.onAuthStateChanged(t=>{if(!t)return _e.push("/");_e.beforeEach(async e=>{if(e.path=="/"&&Ge.currentUser||e.path=="/login"&&Ge.currentUser||e.path=="/adminLogin"&&Ge.currentUser||e.path=="/signup"&&Ge.currentUser)return _e.push(_e.currentRoute);if(e.path=="/admin"&&!Ge.currentUser||e.path=="/Home"&&!Ge.currentUser||e.path=="/scorePage"&&!Ge.currentUser||e.path=="/examPage"&&!Ge.currentUser||e.path=="/confirmScore"&&!Ge.currentUser)return _e.push("/")})});const FD={setup(){const t=Jo(),e=xf();Bb(()=>{t.dispatch("fetchUser")}),Mc(()=>{rR(e,n=>{n?(n.getIdToken().then(r=>{document.cookie=`session= ${r}; max-age= ${60*60*24}`}),eR(e,Sf)):_e.push("/")})})}};function UD(t,e,n,r,o,i){const s=Ce("router-view");return B(),te("div",null,[ue(s)])}const jD=Jt(FD,[["render",UD]]),BD=F4({state:{user:null,correctAnswer:0,userAnswer:[],overallScore:0,questions:[{questionDetails:{name:"Question1",question:"Add 1 + 1 =",options:["(A) 20","(B) 0","(C) 2","(D) 15"],answer:"(C) 2"}},{questionDetails:{name:"Question2",question:"What is your supervisor name?",options:["(A) Mrs Abiodun","(B) A.O Ajao","(C) Dr. Fele","(D) Ms Ogunji"],answer:"(A) Mrs Abiodun"}},{questionDetails:{name:"Question3",question:"What goes up and doesn't come down?",options:["(A) Ball","(B) Age","(C) Naira","(D) Plane"],answer:"(B) Age"}},{questionDetails:{name:"Question4",question:"What is the opposite of the light?",options:["(A) Indigo","(B) Yellow","(C) Brown","(D) Dark"],answer:"(D) Dark"}},{questionDetails:{name:"Question5",question:"Which is the smallest?",options:["(A) Atom","(B) Molecule","(C) Droplet","(D) Stream"],answer:"(A) Atom"}}]},mutations:{setUser(t,e){t.user=e},clearUser(t){t.user=null},calculateAnswers(t,e){t.userAnswer=e,console.log(t.userAnswer);for(let n=0;n<t.questions.length;n++)t.userAnswer[n]==t.questions[n].questionDetails.answer&&t.correctAnswer++;console.log("correct answer:"+t.correctAnswer),t.overallScore=t.correctAnswer/t.questions.length*100,console.log(t.overallScore+" / 100"),t.userAnswer=[],t.correctAnswer=0}},actions:{async submitQuiz({commit:t,state:e},n){if(t("calculateAnswers",n),e.user==null){console.log("Anon user = "+localStorage.getItem("user"));const r=eo(ur,"users",localStorage.getItem("user"));await ir(r).then(o=>{o.exists()&&(console.log("Anon user has data in Firebase"),console.log("User current score :"+o.data().score),Th(r,{score:e.overallScore}))}),await ir(r).then(o=>{o.exists()?console.log("Updated score: "+o.data().score):console.log("No data")})}else if(e.user!=null){console.log("currently logged in user = "+e.user);const r=eo(ur,"users",e.user);await ir(r).then(o=>{o.exists()?(console.log("User has data in Firebase"),console.log("User current score :"+o.data().score),Th(r,{score:e.overallScore})):console.log("No data")}),await ir(r).then(o=>{o.exists()?console.log("Updated score: "+o.data().score):console.log("No data")})}},async anonSignin({commit:t},e){try{await qO(Ge),t("setUser",e),localStorage.setItem("user",e),console.log(localStorage.getItem("user")),_e.push("/home")}catch(n){console.log(n)}},async AdminLogin({commit:t},e){const{email:n,password:r}=e;try{await py(Ge,n,r)}catch(o){console.log(o)}t("setUser",Ge.currentUser.displayName),_e.push("/admin")},async login({commit:t},e){const{email:n,password:r}=e;try{await py(Ge,n,r)}catch(i){switch(i.code){case"auth/invalid-email":alert("Invalid email");break;case"auth/user-disabled":alert("User disabled");break;case"auth/user-not-found":alert("User not found");break;case"auth/wrong-password":alert("Wrong password");break;case"auth/missing-password":alert("Missing password");break;case"auth/missing-email":alert("Missing email");break;case"auth/invalid-password":alert("Invalid password");break;case"auth/operation-not-allowed":alert("Operation not allowed");break;case"auth/network-request-failed":alert("Network request failed");break;case"auth/too-many-requests":alert("Too many requests");break;default:alert("Something went wrong");break}return}console.log(Ge.currentUser);const o=eo(ur,"users",Ge.currentUser.displayName);await ir(o).then(i=>{i.exists()&&(i.data().verification=="Unverified"?(alert("Face not yet captured"),navigator.vibrate([100,50,100]),t("clearUser"),Ge.signOut(Ge)):(t("setUser",Ge.currentUser.displayName),_e.push("/home")))})},async register({commit:t},e){const{email:n,password:r,name:o,matric:i,age:s,department:a,level:l,gender:u}=e;try{await XO(Ge,n,r)}catch(f){switch(f.code){case"auth/email-already-in-use":alert("Email already in use");break;case"auth/invalid-email":alert("Invalid email");break;case"auth/weak-password":alert("Weak password");break;case"auth/missing-password":alert("Missing password");break;case"auth/missing-email":alert("Missing email");break;case"auth/invalid-password":alert("Invalid password");break;case"auth/operation-not-allowed":alert("Operation not allowed");break;case"auth/network-request-failed":alert("Network request failed");break;case"auth/too-many-requests":alert("Too many requests");break;default:alert("Something went wrong");break}return}t("setUser",Ge.currentUser.displayName),_e.push("/confirmSignup");const d=xf().currentUser;ZO(d,{displayName:o,matricNumber:i,verification:"Unverified",age:s,score:0,department:a,level:l,gender:u}).then(()=>{console.log("User created successfully")}).catch(f=>{console.log(f)}),cL(eo(ur,"users",o),{email:n,name:o,matric:i,age:s,verification:"Unverified",score:0,department:a,level:l,gender:u},{merge:!0})},async logOut({commit:t}){t("clearUser"),localStorage.removeItem("user"),console.log(localStorage),await Ge.signOut(Ge),_e.push("/")},fetchUser({commit:t}){Ge.onAuthStateChanged(async e=>{e==null?_e.push(_e.currentRoute):(t("setUser",Ge.currentUser.displayName),_e.isReady()&&_e.currentRoute.value.path=="/"&&_e.push("/home"))})}}}),On=OA(jD);On.use(_e);On.use(BD);On.use(o2,{unstyled:!0});ZI.add(qA,WA,GA);On.use(Ux);On.component("font-awesome-icon",KA);On.component("Avatar",W_);On.component("Select",o0);On.component("InputText",pf);On.component("Toast",G_);On.component("Button",K_);On.mount("#app");
