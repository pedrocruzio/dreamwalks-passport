/*! For license information please see 883.c0594dcd.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdreamwalks_app=self.webpackChunkdreamwalks_app||[]).push([[883],{883:(e,t,n)=>{n.d(t,{c:()=>m});var i=n(811),o=n(437);let a;const r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=e=>{if(void 0===a){const t=void 0!==e.style.animationName,n=void 0!==e.style.webkitAnimationName;a=!t&&n?"-webkit-":""}return a},l=(e,t,n)=>{const i=t.startsWith("animation")?s(e):"";e.style.setProperty(i+t,n)},f=(e,t)=>{const n=t.startsWith("animation")?s(e):"";e.style.removeProperty(n+t)},d=[],c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e},m=e=>{let t,n,a,m,h,u,g,p,v,y,E,$,A,b=[],w=[],k=[],C=!1,T={},S=[],D=[],L={},P=0,R=!1,F=!1,N=!0,O=!1,W=!0,K=!1;const x=e,I=[],j=[],M=[],_=[],q=[],z=[],Z=[],B=[],G=[],H=[],J="function"===typeof AnimationEffect||void 0!==o.w&&"function"===typeof o.w.AnimationEffect,Q="function"===typeof Element&&"function"===typeof Element.prototype.animate&&J,U=()=>H,V=e=>{ee(),e&&te()},X=(e,t)=>(((null===t||void 0===t?void 0:t.oneTimeCallback)?j:I).push({c:e,o:t}),A),Y=()=>(I.length=0,j.length=0,A),ee=()=>{if(Q)H.forEach((e=>{e.cancel()})),H.length=0;else{const e=M.slice();(0,i.r)((()=>{e.forEach((e=>{f(e,"animation-name"),f(e,"animation-duration"),f(e,"animation-timing-function"),f(e,"animation-iteration-count"),f(e,"animation-delay"),f(e,"animation-play-state"),f(e,"animation-fill-mode"),f(e,"animation-direction")}))}))}},te=()=>{q.forEach((e=>{(null===e||void 0===e?void 0:e.parentNode)&&e.parentNode.removeChild(e)})),q.length=0},ne=()=>void 0!==h?h:g?g.getFill():"both",ie=()=>void 0!==v?v:void 0!==u?u:g?g.getDirection():"normal",oe=()=>R?"linear":void 0!==a?a:g?g.getEasing():"linear",ae=()=>F?0:void 0!==y?y:void 0!==n?n:g?g.getDuration():0,re=()=>void 0!==m?m:g?g.getIterations():1,se=()=>void 0!==E?E:void 0!==t?t:g?g.getDelay():0,le=e=>{Q?U().forEach((t=>{if(t.effect.setKeyframes)t.effect.setKeyframes(e);else{const n=new KeyframeEffect(t.effect.target,e,t.effect.getTiming());t.effect=n}})):de()},fe=()=>{0!==P&&(P--,0===P&&((()=>{ye(),B.forEach((e=>e())),G.forEach((e=>e()));const e=N?1:0,t=S,n=D,i=L;M.forEach((e=>{const o=e.classList;t.forEach((e=>o.add(e))),n.forEach((e=>o.remove(e)));for(const t in i)i.hasOwnProperty(t)&&l(e,t,i[t])})),I.forEach((t=>t.c(e,A))),j.forEach((t=>t.c(e,A))),j.length=0,W=!0,N&&(O=!0),N=!0})(),g&&g.animationFinish()))},de=function(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];te();const n=(e=>(e.forEach((e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t)e["animation-timing-function"]=n,delete e[t];else{const i=r(t);i!==t&&(e[i]=n,delete e[t])}}})),e))(b);M.forEach((o=>{if(n.length>0){const a=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((e=>{const t=e.offset,n=[];for(const i in e)e.hasOwnProperty(i)&&"offset"!==i&&n.push(`${i}: ${e[i]};`);return`${100*t}% { ${n.join(" ")} }`})).join(" ")}(n);$=void 0!==e?e:(e=>{let t=d.indexOf(e);return t<0&&(t=d.push(e)-1),`ion-animation-${t}`})(a);const r=((e,t,n)=>{var i;const o=(e=>{const t=void 0!==e.getRootNode?e.getRootNode():e;return t.head||t})(n),a=s(n),r=o.querySelector("#"+e);if(r)return r;const l=(null!==(i=n.ownerDocument)&&void 0!==i?i:document).createElement("style");return l.id=e,l.textContent=`@${a}keyframes ${e} { ${t} } @${a}keyframes ${e}-alt { ${t} }`,o.appendChild(l),l})($,a,o);q.push(r),l(o,"animation-duration",`${ae()}ms`),l(o,"animation-timing-function",oe()),l(o,"animation-delay",`${se()}ms`),l(o,"animation-fill-mode",ne()),l(o,"animation-direction",ie());const f=re()===1/0?"infinite":re().toString();l(o,"animation-iteration-count",f),l(o,"animation-play-state","paused"),t&&l(o,"animation-name",`${r.id}-alt`),(0,i.r)((()=>{l(o,"animation-name",r.id||null)}))}}))},ce=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];(()=>{z.forEach((e=>e())),Z.forEach((e=>e()));const e=w,t=k,n=T;M.forEach((i=>{const o=i.classList;e.forEach((e=>o.add(e))),t.forEach((e=>o.remove(e)));for(const e in n)n.hasOwnProperty(e)&&l(i,e,n[e])}))})(),b.length>0&&(Q?(M.forEach((e=>{const t=e.animate(b,{id:x,delay:se(),duration:ae(),easing:oe(),iterations:re(),fill:ne(),direction:ie()});t.pause(),H.push(t)})),H.length>0&&(H[0].onfinish=()=>{fe()})):de(e)),C=!0},me=e=>{if(e=Math.min(Math.max(e,0),.9999),Q)H.forEach((t=>{t.currentTime=t.effect.getComputedTiming().delay+ae()*e,t.pause()}));else{const t=`-${ae()*e}ms`;M.forEach((e=>{b.length>0&&(l(e,"animation-delay",t),l(e,"animation-play-state","paused"))}))}},he=e=>{H.forEach((e=>{e.effect.updateTiming({delay:se(),duration:ae(),easing:oe(),iterations:re(),fill:ne(),direction:ie()})})),void 0!==e&&me(e)},ue=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;(0,i.r)((()=>{M.forEach((n=>{l(n,"animation-name",$||null),l(n,"animation-duration",`${ae()}ms`),l(n,"animation-timing-function",oe()),l(n,"animation-delay",void 0!==t?`-${t*ae()}ms`:`${se()}ms`),l(n,"animation-fill-mode",ne()||null),l(n,"animation-direction",ie()||null);const o=re()===1/0?"infinite":re().toString();l(n,"animation-iteration-count",o),e&&l(n,"animation-name",`${$}-alt`),(0,i.r)((()=>{l(n,"animation-name",$||null)}))}))}))},ge=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;return e&&_.forEach((i=>{i.update(e,t,n)})),Q?he(n):ue(t,n),A},pe=()=>{C&&(Q?H.forEach((e=>{e.pause()})):M.forEach((e=>{l(e,"animation-play-state","paused")})),K=!0)},ve=()=>{p=void 0,fe()},ye=()=>{p&&clearTimeout(p)},Ee=()=>{M.forEach((e=>{f(e,"animation-duration"),f(e,"animation-delay"),f(e,"animation-play-state")}))},$e=e=>new Promise((t=>{(null===e||void 0===e?void 0:e.sync)&&(F=!0,X((()=>F=!1),{oneTimeCallback:!0})),C||ce(),O&&(Q?(me(0),he()):ue(),O=!1),W&&(P=_.length+1,W=!1),X((()=>t()),{oneTimeCallback:!0}),_.forEach((e=>{e.play()})),Q?(H.forEach((e=>{e.play()})),0!==b.length&&0!==M.length||fe()):(()=>{if(ye(),(0,i.r)((()=>{M.forEach((e=>{b.length>0&&l(e,"animation-play-state","running")}))})),0===b.length||0===M.length)fe();else{const e=se()||0,t=ae()||0,n=re()||1;isFinite(n)&&(p=setTimeout(ve,e+t*n+100)),((e,t)=>{let n;const i={passive:!0},o=()=>{n&&n()},a=n=>{e===n.target&&(o(),t(n))};e&&(e.addEventListener("webkitAnimationEnd",a,i),e.addEventListener("animationend",a,i),n=()=>{e.removeEventListener("webkitAnimationEnd",a,i),e.removeEventListener("animationend",a,i)})})(M[0],(()=>{ye(),(0,i.r)((()=>{Ee(),(0,i.r)(fe)}))}))}})(),K=!1})),Ae=(e,t)=>{const n=b[0];return void 0===n||void 0!==n.offset&&0!==n.offset?b=[{offset:0,[e]:t},...b]:n[e]=t,A};return A={parentAnimation:g,elements:M,childAnimations:_,id:x,animationFinish:fe,from:Ae,to:(e,t)=>{const n=b[b.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?b=[...b,{offset:1,[e]:t}]:n[e]=t,A},fromTo:(e,t,n)=>Ae(e,t).to(e,n),parent:e=>(g=e,A),play:$e,pause:()=>(_.forEach((e=>{e.pause()})),pe(),A),stop:()=>{_.forEach((e=>{e.stop()})),C&&(ee(),C=!1),R=!1,F=!1,W=!0,v=void 0,y=void 0,E=void 0,P=0,O=!1,N=!0,K=!1},destroy:e=>(_.forEach((t=>{t.destroy(e)})),V(e),M.length=0,_.length=0,b.length=0,Y(),C=!1,W=!0,A),keyframes:e=>{const t=b!==e;return b=e,t&&le(b),A},addAnimation:e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(A),_.push(t);else e.parent(A),_.push(e);return A},addElement:e=>{if(null!=e)if(1===e.nodeType)M.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)M.push(e[t]);else console.error("Invalid addElement value");return A},update:ge,fill:e=>(h=e,ge(!0),A),direction:e=>(u=e,ge(!0),A),iterations:e=>(m=e,ge(!0),A),duration:e=>(Q||0!==e||(e=1),n=e,ge(!0),A),easing:e=>(a=e,ge(!0),A),delay:e=>(t=e,ge(!0),A),getWebAnimations:U,getKeyframes:()=>b,getFill:ne,getDirection:ie,getDelay:se,getIterations:re,getEasing:oe,getDuration:ae,afterAddRead:e=>(B.push(e),A),afterAddWrite:e=>(G.push(e),A),afterClearStyles:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];for(const t of e)L[t]="";return A},afterStyles:function(){return L=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},A},afterRemoveClass:e=>(D=c(D,e),A),afterAddClass:e=>(S=c(S,e),A),beforeAddRead:e=>(z.push(e),A),beforeAddWrite:e=>(Z.push(e),A),beforeClearStyles:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];for(const t of e)T[t]="";return A},beforeStyles:function(){return T=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},A},beforeRemoveClass:e=>(k=c(k,e),A),beforeAddClass:e=>(w=c(w,e),A),onFinish:X,isRunning:()=>0!==P&&!K,progressStart:function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return _.forEach((n=>{n.progressStart(e,t)})),pe(),R=e,C||ce(),ge(!1,!0,t),A},progressStep:e=>(_.forEach((t=>{t.progressStep(e)})),me(e),A),progressEnd:(e,t,n)=>(R=!1,_.forEach((i=>{i.progressEnd(e,t,n)})),void 0!==n&&(y=n),O=!1,N=!0,0===e?(v="reverse"===ie()?"normal":"reverse","reverse"===v&&(N=!1),Q?(ge(),me(1-t)):(E=(1-t)*ae()*-1,ge(!1,!1))):1===e&&(Q?(ge(),me(t)):(E=t*ae()*-1,ge(!1,!1))),void 0!==e&&(X((()=>{y=void 0,v=void 0,E=void 0}),{oneTimeCallback:!0}),g||$e()),A)}}}}]);
//# sourceMappingURL=883.c0594dcd.chunk.js.map