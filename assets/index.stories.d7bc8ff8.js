var y=Object.defineProperty;var l=(o,a)=>y(o,"name",{value:a,configurable:!0});import{$ as x,a as D,b as h,c as v,d as b,e as _}from"./index.module.a0b090c1.js";import{c as d}from"./clsx.m.256e9345.js";import{B as i}from"./Button.ee2c5648.js";import{H as C}from"./index.f9645059.js";import{T as O}from"./index.1fd291e2.js";import{G as S}from"./iconBase.1b22b61f.js";import{a as r,j as e,F as p}from"./jsx-runtime.708b5a7f.js";import{ap as c}from"./iframe.07749892.js";import"./index.66d252c7.js";import"./index.module.363db6e6.js";import"./index.module.5e27bb64.js";import"./index.98eeef8d.js";import"./index.608ecd65.js";import"./index.module.73c63b5d.js";import"./index.module.2b42ddfb.js";function A(o){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}}]})(o)}l(A,"IoClose");const t=l(({open:o,handleClose:a,size:n="sm",title:u,description:m,btnClose:f=!0,overlay:g=!0})=>r(x,{open:o,onOpenChange:a,children:[e(D,{}),e(h,{children:e(v,{className:d(" inset-0 fixed z-10",{"bg-black/90":g===!0}),children:e(b,{className:d("fixed bg-default-800 py-6 px-8 w-full rounded-md shadow-lg shadow-black/25  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",{"max-w-sm":n==="xs","max-w-lg":n==="sm","max-w-2xl":n==="md","max-w-4xl":n==="lg","max-w-6xl":n==="xl"}),children:r(_,{className:"text-default-100 flex flex-col",children:[e(C,{size:"sm",children:u}),e(O,{size:"sm",children:m}),e("footer",{className:"flex justify-end",children:f&&e(i,{onClick:a,size:"sm",leftIcon:e(A,{}),children:"Sair"})})]})})})})]}),"Dialog$1"),s=t;try{t.displayName="Dialog",t.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},btnClose:{defaultValue:{value:"true"},description:"",name:"btnClose",required:!1,type:{name:"boolean"}},overlay:{defaultValue:{value:"true"},description:"",name:"overlay",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/Dialog.tsx#Dialog"]={docgenInfo:t.__docgenInfo,name:"Dialog",path:"src/components/Dialog/Dialog.tsx#Dialog"})}catch{}try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},btnClose:{defaultValue:{value:"true"},description:"",name:"btnClose",required:!1,type:{name:"boolean"}},overlay:{defaultValue:{value:"true"},description:"",name:"overlay",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/index.tsx#Dialog"]={docgenInfo:Dialog.__docgenInfo,name:"Dialog",path:"src/components/Dialog/index.tsx#Dialog"})}catch{}const P={parameters:{storySource:{source:`import React from 'react'
import { useArgs } from "@storybook/client-api";
import { Meta, StoryObj, Story } from "@storybook/react";
import  Dialog from ".";
import Button from "../Button";
import { DialogProps } from './Dialog';

export default {
  title: "Overlay/Dialog",
  component: Dialog,
  args: {
    open: false,
    title: "Dialog",
    description: "Dialog description",
    handleClose: (): void => {},
    size: 'md'
  },
  argTypes: {
    open: { control: "boolean" },
  },
} as Meta<DialogProps>;

export const Default: Story<DialogProps> = (args) => {
  const [, updateArgs] = useArgs();


  return (
    <>
      <Button onClick={() => updateArgs({ open: true })}>Open Modal</Button>
      <Dialog {...args}  handleClose={() => updateArgs({ open: false})} />
    </>
  );
};


export const WithoutOverlay: Story<DialogProps> = (args) => {
  const [, updateArgs] = useArgs();


  return (
    <>
      <Button onClick={() => updateArgs({ open: true })}>Open Modal</Button>
      <Dialog {...args} overlay={false}  handleClose={() => updateArgs({ open: false})} />
    </>
  );
};
`,locationsMap:{default:{startLoc:{col:43,line:23},endLoc:{col:1,line:33},startBody:{col:43,line:23},endBody:{col:1,line:33}},"without-overlay":{startLoc:{col:50,line:36},endLoc:{col:1,line:46},startBody:{col:50,line:36},endBody:{col:1,line:46}}}}},title:"Overlay/Dialog",component:s,args:{open:!1,title:"Dialog",description:"Dialog description",handleClose:()=>{},size:"md"},argTypes:{open:{control:"boolean"}}},Y=l(o=>{const[,a]=c();return r(p,{children:[e(i,{onClick:()=>a({open:!0}),children:"Open Modal"}),e(s,{...o,handleClose:()=>a({open:!1})})]})},"Default"),W=l(o=>{const[,a]=c();return r(p,{children:[e(i,{onClick:()=>a({open:!0}),children:"Open Modal"}),e(s,{...o,overlay:!1,handleClose:()=>a({open:!1})})]})},"WithoutOverlay"),F=["Default","WithoutOverlay"];export{Y as Default,W as WithoutOverlay,F as __namedExportsOrder,P as default};
//# sourceMappingURL=index.stories.d7bc8ff8.js.map
