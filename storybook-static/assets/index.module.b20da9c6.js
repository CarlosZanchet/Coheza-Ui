var P=Object.defineProperty;var c=(e,t)=>P(e,"name",{value:t,configurable:!0});import{r as s}from"./index.d7b398fd.js";function w(e,t){const o=s.exports.createContext(t);function n(u){const{children:f,...a}=u,i=s.exports.useMemo(()=>a,Object.values(a));return s.exports.createElement(o.Provider,{value:i},f)}c(n,"Provider");function r(u){const f=s.exports.useContext(o);if(f)return f;if(t!==void 0)return t;throw new Error(`\`${u}\` must be used within \`${e}\``)}return c(r,"useContext"),n.displayName=e+"Provider",[n,r]}c(w,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function M(e,t=[]){let o=[];function n(u,f){const a=s.exports.createContext(f),i=o.length;o=[...o,f];function l(d){const{scope:p,children:v,...x}=d,h=(p==null?void 0:p[e][i])||a,m=s.exports.useMemo(()=>x,Object.values(x));return s.exports.createElement(h.Provider,{value:m},v)}c(l,"Provider");function $(d,p){const v=(p==null?void 0:p[e][i])||a,x=s.exports.useContext(v);if(x)return x;if(f!==void 0)return f;throw new Error(`\`${d}\` must be used within \`${u}\``)}return c($,"useContext"),l.displayName=u+"Provider",[l,$]}c(n,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const r=c(()=>{const u=o.map(f=>s.exports.createContext(f));return c(function(a){const i=(a==null?void 0:a[e])||u;return s.exports.useMemo(()=>({[`__scope${e}`]:{...a,[e]:i}}),[a,i])},"useScope")},"createScope");return r.scopeName=e,[n,C(r,...t)]}c(M,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function C(...e){const t=e[0];if(e.length===1)return t;const o=c(()=>{const n=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return c(function(u){const f=n.reduce((a,{useScope:i,scopeName:l})=>{const d=i(u)[`__scope${l}`];return{...a,...d}},{});return s.exports.useMemo(()=>({[`__scope${t.scopeName}`]:f}),[f])},"useComposedScopes")},"createScope1");return o.scopeName=t.scopeName,o}c(C,"$c512c27ab02ef895$var$composeContextScopes");function R(e,t,{checkForDefaultPrevented:o=!0}={}){return c(function(r){if(e==null||e(r),o===!1||!r.defaultPrevented)return t==null?void 0:t(r)},"handleEvent")}c(R,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function b(e){const t=s.exports.useRef(e);return s.exports.useEffect(()=>{t.current=e}),s.exports.useMemo(()=>(...o)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...o)},[])}c(b,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function k({prop:e,defaultProp:t,onChange:o=c(()=>{},"onChange")}){const[n,r]=S({defaultProp:t,onChange:o}),u=e!==void 0,f=u?e:n,a=b(o),i=s.exports.useCallback(l=>{if(u){const d=typeof l=="function"?l(e):l;d!==e&&a(d)}else r(l)},[u,e,r,a]);return[f,i]}c(k,"$71cd76cc60e0454e$export$6f32135080cb4c3");function S({defaultProp:e,onChange:t}){const o=s.exports.useState(e),[n]=o,r=s.exports.useRef(n),u=b(t);return s.exports.useEffect(()=>{r.current!==n&&(u(n),r.current=n)},[n,r,u]),o}c(S,"$71cd76cc60e0454e$var$useUncontrolledState");const y=Boolean(globalThis==null?void 0:globalThis.document)?s.exports.useLayoutEffect:()=>{};export{y as $,w as a,M as b,k as c,R as d,b as e};
//# sourceMappingURL=index.module.b20da9c6.js.map
