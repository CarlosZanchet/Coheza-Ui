var W=Object.defineProperty;var l=(e,t)=>W(e,"name",{value:t,configurable:!0});import{r as p}from"./index.66d252c7.js";import{c as y,A as Q,C as Z,S as B,M as G}from"./Props.ffbd7919.js";import{a as _,j as b}from"./jsx-runtime.708b5a7f.js";import"./iframe.07749892.js";import{c as J}from"./clsx.m.256e9345.js";import{F as ee,a as te,b as ae,c as oe,d as re,e as se}from"./index.esm.f66f5c4f.js";import"./string.adafb20a.js";import"./index.aeab1f26.js";import"./es.map.constructor.83a6495f.js";import"./es.number.to-fixed.7548f6c3.js";import"./iconBase.1b22b61f.js";let ne={data:""},ie=l(e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ne,"t"),le=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ce=/\/\*[^]*?\*\/|  +/g,K=/\n+/g,T=l((e,t)=>{let a="",n="",o="";for(let r in e){let i=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+i+";":n+=r[1]=="f"?T(i,r):r+"{"+T(i,r[1]=="k"?"":t)+"}":typeof i=="object"?n+=T(i,t?t.replace(/([^,])+/g,s=>r.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,s):s?s+" "+c:c)):r):i!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=T.p?T.p(r,i):r+":"+i+";")}return a+(t&&o?t+"{"+o+"}":o)+n},"o"),h={},V=l(e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+V(e[a]);return t}return e},"s"),de=l((e,t,a,n,o)=>{let r=V(e),i=h[r]||(h[r]=(c=>{let d=0,u=11;for(;d<c.length;)u=101*u+c.charCodeAt(d++)>>>0;return"go"+u})(r));if(!h[i]){let c=r!==e?e:(d=>{let u,g,f=[{}];for(;u=le.exec(d.replace(ce,""));)u[4]?f.shift():u[3]?(g=u[3].replace(K," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][u[1]]=u[2].replace(K," ").trim();return f[0]})(e);h[i]=T(o?{["@keyframes "+i]:c}:c,a?"":"."+i)}let s=a&&h.g?h.g:null;return a&&(h.g=h[i]),((c,d,u,g)=>{g?d.data=d.data.replace(g,c):d.data.indexOf(c)===-1&&(d.data=u?c+d.data:d.data+c)})(h[i],t,n,s),i},"i"),pe=l((e,t,a)=>e.reduce((n,o,r)=>{let i=t[r];if(i&&i.call){let s=i(a),c=s&&s.props&&s.props.className||/^go/.test(s)&&s;i=c?"."+c:s&&typeof s=="object"?s.props?"":T(s,""):s===!1?"":s}return n+o+(i==null?"":i)},""),"p");function I(e){let t=this||{},a=e.call?e(t.p):e;return de(a.unshift?a.raw?pe(a,[].slice.call(arguments,1),t.p):a.reduce((n,o)=>Object.assign(n,o&&o.call?o(t.p):o),{}):a,ie(t.target),t.g,t.o,t.k)}l(I,"u$1");let H,M,R;I.bind({g:1});let v=I.bind({k:1});function ue(e,t,a,n){T.p=t,H=e,M=a,R=n}l(ue,"m");function w(e,t){let a=this||{};return function(){let n=arguments;function o(r,i){let s=Object.assign({},r),c=s.className||o.className;a.p=Object.assign({theme:M&&M()},s),a.o=/ *go\d+/.test(c),s.className=I.apply(a,n)+(c?" "+c:""),t&&(s.ref=i);let d=e;return e[0]&&(d=s.as||e,delete s.as),R&&d[0]&&R(s),H(d,s)}return l(o,"a"),t?t(o):o}}l(w,"j");var me=l(e=>typeof e=="function","W"),j=l((e,t)=>me(e)?e(t):e,"T"),fe=(()=>{let e=0;return()=>(++e).toString()})(),X=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ge=20,A=new Map,xe=1e3,Y=l(e=>{if(A.has(e))return;let t=setTimeout(()=>{A.delete(e),C({type:4,toastId:e})},xe);A.set(e,t)},"$"),be=l(e=>{let t=A.get(e);t&&clearTimeout(t)},"J"),F=l((e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ge)};case 1:return t.toast.id&&be(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return e.toasts.find(r=>r.id===a.id)?F(e,{type:1,toast:a}):F(e,{type:0,toast:a});case 3:let{toastId:n}=t;return n?Y(n):e.toasts.forEach(r=>{Y(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+o}))}}},"v"),$=[],P={toasts:[],pausedAt:void 0},C=l(e=>{P=F(P,e),$.forEach(t=>{t(P)})},"u"),ye={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},he=l((e={})=>{let[t,a]=p.exports.useState(P);p.exports.useEffect(()=>($.push(a),()=>{let o=$.indexOf(a);o>-1&&$.splice(o,1)}),[t]);let n=t.toasts.map(o=>{var r,i;return{...e,...e[o.type],...o,duration:o.duration||((r=e[o.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||ye[o.type],style:{...e.style,...(i=e[o.type])==null?void 0:i.style,...o.style}}});return{...t,toasts:n}},"I"),ve=l((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||fe()}),"G"),O=l(e=>(t,a)=>{let n=ve(t,e,a);return C({type:2,toast:n}),n.id},"h"),m=l((e,t)=>O("blank")(e,t),"n");m.error=O("error");m.success=O("success");m.loading=O("loading");m.custom=O("custom");m.dismiss=e=>{C({type:3,toastId:e})};m.remove=e=>C({type:4,toastId:e});m.promise=(e,t,a)=>{let n=m.loading(t.loading,{...a,...a==null?void 0:a.loading});return e.then(o=>(m.success(j(t.success,o),{id:n,...a,...a==null?void 0:a.success}),o)).catch(o=>{m.error(j(t.error,o),{id:n,...a,...a==null?void 0:a.error})}),e};var Te=l((e,t)=>{C({type:1,toast:{id:e,height:t}})},"Z"),we=l(()=>{C({type:5,time:Date.now()})},"ee"),Ce=l(e=>{let{toasts:t,pausedAt:a}=he(e);p.exports.useEffect(()=>{if(a)return;let r=Date.now(),i=t.map(s=>{if(s.duration===1/0)return;let c=(s.duration||0)+s.pauseDuration-(r-s.createdAt);if(c<0){s.visible&&m.dismiss(s.id);return}return setTimeout(()=>m.dismiss(s.id),c)});return()=>{i.forEach(s=>s&&clearTimeout(s))}},[t,a]);let n=p.exports.useCallback(()=>{a&&C({type:6,time:Date.now()})},[a]),o=p.exports.useCallback((r,i)=>{let{reverseOrder:s=!1,gutter:c=8,defaultPosition:d}=i||{},u=t.filter(x=>(x.position||d)===(r.position||d)&&x.height),g=u.findIndex(x=>x.id===r.id),f=u.filter((x,D)=>D<g&&x.visible).length;return u.filter(x=>x.visible).slice(...s?[f+1]:[0,f]).reduce((x,D)=>x+(D.height||0)+c,0)},[t]);return{toasts:t,handlers:{updateHeight:Te,startPause:we,endPause:n,calculateOffset:o}}},"D"),_e=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Se=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ee=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Oe=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_e} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Se} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Ee} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ne=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ae=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Ne} 1s linear infinite;
`,$e=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Pe=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ke=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$e} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Pe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,je=w("div")`
  position: absolute;
`,Ie=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,De=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Me=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${De} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Re=l(({toast:e})=>{let{icon:t,type:a,iconTheme:n}=e;return t!==void 0?typeof t=="string"?p.exports.createElement(Me,null,t):t:a==="blank"?null:p.exports.createElement(Ie,null,p.exports.createElement(Ae,{...n}),a!=="loading"&&p.exports.createElement(je,null,a==="error"?p.exports.createElement(Oe,{...n}):p.exports.createElement(ke,{...n})))},"M"),Fe=l(e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,"ye"),Le=l(e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,"ge"),ze="0%{opacity:0;} 100%{opacity:1;}",qe="0%{opacity:1;} 100%{opacity:0;}",Be=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ke=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ye=l((e,t)=>{let a=e.includes("top")?1:-1,[n,o]=X()?[ze,qe]:[Fe(a),Le(a)];return{animation:t?`${v(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},"Ae"),Ve=p.exports.memo(({toast:e,position:t,style:a,children:n})=>{let o=e.height?Ye(e.position||t||"top-center",e.visible):{opacity:0},r=p.exports.createElement(Re,{toast:e}),i=p.exports.createElement(Ke,{...e.ariaProps},j(e.message,e));return p.exports.createElement(Be,{className:e.className,style:{...o,...a,...e.style}},typeof n=="function"?n({icon:r,message:i}):p.exports.createElement(p.exports.Fragment,null,r,i))});ue(p.exports.createElement);var He=l(({id:e,className:t,style:a,onHeightUpdate:n,children:o})=>{let r=p.exports.useCallback(i=>{if(i){let s=l(()=>{let c=i.getBoundingClientRect().height;n(e,c)},"i");s(),new MutationObserver(s).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return p.exports.createElement("div",{ref:r,className:t,style:a},o)},"Ee"),Xe=l((e,t)=>{let a=e.includes("top"),n=a?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:X()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...n,...o}},"Re"),Ue=I`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,N=16,We=l(({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:n,children:o,containerStyle:r,containerClassName:i})=>{let{toasts:s,handlers:c}=Ce(a);return p.exports.createElement("div",{style:{position:"fixed",zIndex:9999,top:N,left:N,right:N,bottom:N,pointerEvents:"none",...r},className:i,onMouseEnter:c.startPause,onMouseLeave:c.endPause},s.map(d=>{let u=d.position||t,g=c.calculateOffset(d,{reverseOrder:e,gutter:n,defaultPosition:t}),f=Xe(u,g);return p.exports.createElement(He,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?Ue:"",style:f},d.type==="custom"?j(d.message,d):o?o(d):p.exports.createElement(Ve,{toast:d,position:u}))}))},"Ie");const k=p.exports.createContext({}),S=l(({children:e,position:t="top-center",duration:a})=>{function n(o,r,i){m.custom(s=>_("div",{className:J("flex flex-row gap-2 w-96 bg-gray-900 px-2 py-3 shadow-sm hover:shadow-none transform-gpu translate-y-0 hover:translate-y-1 rounded relative transition-all duration-500 ease-in-out",{"right-0":s.visible===!0&&(t==="bottom-right"||t==="top-right"),"-right-[410px]":s.visible===!1&&(t==="bottom-right"||t==="top-right"),"left-0":s.visible===!0&&(t==="bottom-left"||t==="top-left"),"-left-[410px]":s.visible===!1&&(t==="bottom-left"||t==="top-left"),"top-0":s.visible===!0&&t==="top-center","-top-[96px]":s.visible===!1&&t==="top-center","bottom-0":s.visible===!0&&t==="bottom-center","-bottom-[96px]":s.visible===!1&&t==="bottom-center","bg-success-background text-success-color":o==="success","bg-danger-background text-danger-color":o==="danger","bg-warning-background text-warning-color":o==="warning","bg-info-background text-info-color":o==="info","bg-default-background text-default-color":o==="default"}),children:[_("div",{className:"flex items-start",children:[o==="success"&&b(ee,{className:"w-5 h-5"}),o==="warning"&&b(te,{className:"w-5 h-5"}),o==="danger"&&b(ae,{className:"w-5 h-5"}),o==="info"&&b(oe,{className:"w-5 h-5"}),o==="default"&&b(re,{className:"w-5 h-5"})]}),_("div",{className:"flex justify-between w-full",children:[_("div",{className:"flex flex-col",children:[!!i&&b("span",{className:"text-xs font-bold",children:i}),b("span",{className:"text-sm",children:r})]}),b("button",{className:"w-3 h-3",onClick:()=>m.dismiss(s.id),type:"button",children:b(se,{size:12,className:"mt-1"})})]})]}))}return l(n,"showNotification"),_(k.Provider,{value:{showNotification:n,position:t,duration:a},children:[b(We,{position:t,toastOptions:{duration:a}}),e]})},"ToastProvider");try{S.displayName="ToastProvider",S.__docgenInfo={description:"",displayName:"ToastProvider",props:{position:{defaultValue:{value:"top-center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom-left"'},{value:'"bottom-center"'},{value:'"bottom-right"'},{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'}]}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/context/Toast/ToastContext.tsx#ToastProvider"]={docgenInfo:S.__docgenInfo,name:"ToastProvider",path:"src/context/Toast/ToastContext.tsx#ToastProvider"})}catch{}try{k.displayName="ToastContext",k.__docgenInfo={description:"",displayName:"ToastContext",props:{position:{defaultValue:{value:"top-center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom-left"'},{value:'"bottom-center"'},{value:'"bottom-right"'},{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'}]}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/context/Toast/ToastContext.tsx#ToastContext"]={docgenInfo:k.__docgenInfo,name:"ToastContext",path:"src/context/Toast/ToastContext.tsx#ToastContext"})}catch{}try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{position:{defaultValue:{value:"top-center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom-left"'},{value:'"bottom-center"'},{value:'"bottom-right"'},{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'}]}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/context/Toast/index.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/context/Toast/index.tsx#Toast"})}catch{}function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},L.apply(this,arguments)}l(L,"_extends");const Qe={},Ze="wrapper";function U({components:e,...t}){return y(Ze,L({},Qe,t,{components:e,mdxType:"MDXLayout"}),y(G,{title:"Components/Toast",component:S,mdxType:"Meta"}),y("h1",null,"Badge"),y("p",null,"Para configurar o toast, \xE9 necessario implementar o ",y("inlineCode",{parentName:"p"},"ToastProvider")," no arquivo main ou app da aplica\xE7\xE3o."),y(B,{name:"Default",args:{status:"positive",label:"Positive"},mdxType:"Story"},Template.bind({})),y(Z,{mdxType:"Canvas"},y(B,{name:"warning",args:{status:"warning",label:"Warning"},mdxType:"Story"},Template.bind({}))))}l(U,"MDXContent");U.isMDXComponent=!0;const z=Template.bind({});z.storyName="Default";z.args={status:"positive",label:"Positive"};z.parameters={storySource:{source:"Template.bind({})"}};const q=Template.bind({});q.storyName="warning";q.args={status:"warning",label:"Warning"};q.parameters={storySource:{source:"Template.bind({})"}};const E={title:"Components/Toast",component:S,includeStories:["defaultStory","warning"]},Ge={Default:"defaultStory",warning:"warning"};E.parameters=E.parameters||{};E.parameters.docs={...E.parameters.docs||{},page:()=>y(Q,{mdxStoryNameToKey:Ge,mdxComponentAnnotations:E},y(U,null))};const pt=["defaultStory","warning"];export{pt as __namedExportsOrder,E as default,z as defaultStory,q as warning};
//# sourceMappingURL=index.stories.4aaf7882.js.map
