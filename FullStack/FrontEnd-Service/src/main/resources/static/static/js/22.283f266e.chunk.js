/*! For license information please see 22.283f266e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcurso1FullStack=self.webpackChunkcurso1FullStack||[]).push([[22,909],{909:(t,e,r)=>{r.r(e),r.d(e,{GESTURE_CONTROLLER:()=>n.G,createGesture:()=>i});var n=r(503);const o=(t,e,r,n)=>{const o=s(t)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;let c,a;return t.__zone_symbol__addEventListener?(c="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(c="addEventListener",a="removeEventListener"),t[c](e,r,o),()=>{t[a](e,r,o)}},s=t=>{if(void 0===c)try{const e=Object.defineProperty({},"passive",{get:()=>{c=!0}});t.addEventListener("optsTest",(()=>{}),e)}catch(e){c=!1}return!!c};let c;const a=t=>t instanceof Document?t:t.ownerDocument,i=t=>{let e=!1,r=!1,s=!0,c=!1;const i=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),v=i.canStart,m=i.onWillStart,h=i.onStart,p=i.onEnd,X=i.notCaptured,y=i.onMove,Y=i.threshold,g=i.passive,b=i.blurOnStart,f={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},_=((t,e,r)=>{const n=r*(Math.PI/180),o="x"===t,s=Math.cos(n),c=e*e;let a=0,i=0,u=!1,l=0;return{start(t,e){a=t,i=e,l=0,u=!0},detect(t,e){if(!u)return!1;const r=t-a,n=e-i,d=r*r+n*n;if(d<c)return!1;const v=Math.sqrt(d),m=(o?r:n)/v;return l=m>s?1:m<-s?-1:0,u=!1,!0},isGesture:()=>0!==l,getDirection:()=>l}})(i.direction,i.threshold,i.maxAngle),S=n.G.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),E=()=>{e&&(c=!1,y&&y(f))},T=()=>!!S.capture()&&(e=!0,s=!1,f.startX=f.currentX,f.startY=f.currentY,f.startTime=f.currentTime,m?m(f).then(w):w(),!0),w=()=>{b&&(()=>{if("undefined"!==typeof document){const t=document.activeElement;(null===t||void 0===t?void 0:t.blur)&&t.blur()}})(),h&&h(f),s=!0},G=()=>{e=!1,r=!1,c=!1,s=!0,S.release()},k=t=>{const r=e,n=s;G(),n&&(u(f,t),r?p&&p(f):X&&X(f))},L=((t,e,r,n,s)=>{let c,i,u,l,d,v,m,h=0;const p=n=>{h=Date.now()+2e3,e(n)&&(!i&&r&&(i=o(t,"touchmove",r,s)),u||(u=o(n.target,"touchend",y,s)),l||(l=o(n.target,"touchcancel",y,s)))},X=n=>{h>Date.now()||e(n)&&(!v&&r&&(v=o(a(t),"mousemove",r,s)),m||(m=o(a(t),"mouseup",Y,s)))},y=t=>{g(),n&&n(t)},Y=t=>{b(),n&&n(t)},g=()=>{i&&i(),u&&u(),l&&l(),i=u=l=void 0},b=()=>{v&&v(),m&&m(),v=m=void 0},f=()=>{g(),b()},_=function(){arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?(c&&c(),d&&d(),c=d=void 0,f()):(c||(c=o(t,"touchstart",p,s)),d||(d=o(t,"mousedown",X,s)))};return{enable:_,stop:f,destroy:()=>{_(!1),n=r=e=void 0}}})(i.el,(t=>{const e=d(t);return!(r||!s)&&(l(t,f),f.startX=f.currentX,f.startY=f.currentY,f.startTime=f.currentTime=e,f.velocityX=f.velocityY=f.deltaX=f.deltaY=0,f.event=t,(!v||!1!==v(f))&&(S.release(),!!S.start()&&(r=!0,0===Y?T():(_.start(f.startX,f.startY),!0))))}),(t=>{e?!c&&s&&(c=!0,u(f,t),requestAnimationFrame(E)):(u(f,t),_.detect(f.currentX,f.currentY)&&(_.isGesture()&&T()||D()))}),k,{capture:!1,passive:g}),D=()=>{G(),L.stop(),X&&X(f)};return{enable(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t||(e&&k(void 0),G()),L.enable(t)},destroy(){S.destroy(),L.destroy()}}},u=(t,e)=>{if(!e)return;const r=t.currentX,n=t.currentY,o=t.currentTime;l(e,t);const s=t.currentX,c=t.currentY,a=(t.currentTime=d(e))-o;if(a>0&&a<100){const e=(s-r)/a,o=(c-n)/a;t.velocityX=.7*e+.3*t.velocityX,t.velocityY=.7*o+.3*t.velocityY}t.deltaX=s-t.startX,t.deltaY=c-t.startY,t.event=e},l=(t,e)=>{let r=0,n=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];r=t.clientX,n=t.clientY}else void 0!==t.pageX&&(r=t.pageX,n=t.pageY)}e.currentX=r,e.currentY=n},d=t=>t.timeStamp||Date.now()},22:(t,e,r)=>{r.r(e),r.d(e,{createSwipeBackGesture:()=>c});var n=r(811),o=r(507),s=r(909);const c=(t,e,r,c,a)=>{const i=t.ownerDocument.defaultView;let u=(0,o.i)(t);const l=t=>u?-t.deltaX:t.deltaX;return(0,s.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:r=>(u=(0,o.i)(t),(t=>{const{startX:e}=t;return u?e>=i.innerWidth-50:e<=50})(r)&&e()),onStart:r,onMove:t=>{const e=l(t)/i.innerWidth;c(e)},onEnd:t=>{const e=l(t),r=i.innerWidth,o=e/r,s=(t=>u?-t.velocityX:t.velocityX)(t),c=s>=0&&(s>.2||e>r/2),d=(c?1-o:o)*r;let v=0;if(d>5){const t=d/Math.abs(s);v=Math.min(t,540)}a(c,o<=0?.01:(0,n.h)(0,o,.9999),v)}})}}}]);
//# sourceMappingURL=22.283f266e.chunk.js.map