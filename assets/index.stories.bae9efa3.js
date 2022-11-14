var x=Object.defineProperty;var n=(s,t)=>x(s,"name",{value:t,configurable:!0});import{c as o}from"./clsx.m.256e9345.js";import{B as f,R as u,F as p}from"./index.esm.1fe59807.js";import{I as h}from"./index.esm.d1a86f1c.js";import{j as e,a as c}from"./jsx-runtime.708b5a7f.js";import"./iconBase.1b22b61f.js";import"./index.66d252c7.js";import"./iframe.07749892.js";function a({size:s="sm",type:t="success",children:m,icon:l=!1,align:i="left"}){return e("div",{className:o("flex flex-row w-full items-start justify-between rounded-sm",{"py-1 px-2 text-xs":s==="xs","py-2 px-2 text-[0.875rem]":s==="sm","py-3 px-2 text-md":s==="md","py-3 px-2 text-lg":s==="lg","bg-success-background text-success-color ":t==="success","bg-warning-background text-warning-color":t==="warning","bg-danger-background text-danger-color":t==="danger","bg-info-background text-info-color":t==="info","":i==="left","text-center":i==="center","text-right":i==="right"}),children:c("div",{className:o("flex flex-row w-full",{}),children:[c("div",{children:[l&&t==="success"&&e(f,{className:"text-xl mr-3"}),l&&t==="warning"&&e(h,{className:"text-xl mr-3"}),l&&t==="danger"&&e(u,{className:"text-xl mr-3"}),l&&t==="info"&&e(p,{className:"text-xl mr-3"})]}),e("div",{className:"w-full",children:e("div",{className:"flex flex-col",children:m})})]})})}n(a,"AlertRoot");a.displayName="Alert.Root";function d({children:s}){return e("strong",{children:s})}n(d,"AlertTitle$1");d.displayName="Alert.Title";function g({children:s}){return e("span",{children:s})}n(g,"AlertMessage");g.displayName="Alert.Message";const A={Root:a,Title:d,Message:g},r=A,v={title:"Components/Alert",component:r.Root,args:{size:"sm",children:[e(r.Message,{children:"My Message"})],type:"success",align:"left"},argTypes:{size:{options:["xs","sm","md","lg"],description:"Define o tamanho do alerta",control:{type:"inline-radio"}},align:{options:["left","center","right"],control:{type:"inline-radio"}},type:{options:["success","warning","danger","info"],description:"Define a severidade do alerta",control:{type:"inline-radio"}},children:{table:{disable:!0}}}},k={},j={args:{icon:!0,type:"success",size:"sm"}},C={args:{icon:!1,type:"success",size:"sm",children:[e(r.Title,{children:"Title"}),e(r.Message,{children:"My Message"})]}},D={args:{icon:!0,type:"success",size:"sm",children:[e(r.Title,{children:"Title"}),e(r.Message,{children:"My Message"})]}},z={args:{icon:!0,type:"success",size:"sm",children:[e(r.Title,{children:"Title"}),e(r.Message,{children:"My Message"})]}},_=["Default","AlertIcon","AlertTitle","AlertTitleIcon","AlertRight"];export{j as AlertIcon,z as AlertRight,C as AlertTitle,D as AlertTitleIcon,k as Default,_ as __namedExportsOrder,v as default};
//# sourceMappingURL=index.stories.bae9efa3.js.map
