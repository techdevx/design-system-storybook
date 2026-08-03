import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-UiW3gZKV.js";import{c as f}from"./utils-DCADjnpI.js";import{c}from"./createLucideIcon-BBGjgC4Q.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],g=c("eye-off",b);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],h=c("eye",x);function o({className:t,ref:l,...a}){const[s,u]=m.useState(!1);return e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:l,type:s?"text":"password",className:f("flex h-9 w-full rounded-md border border-input bg-background px-3 pr-9 text-sm shadow-sm transition-colors","placeholder:text-muted-foreground","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background","disabled:cursor-not-allowed disabled:opacity-50","aria-[invalid=true]:border-destructive",t),...a}),e.jsx("button",{type:"button","aria-label":s?"Hide password":"Show password","aria-pressed":s,onClick:()=>u(p=>!p),disabled:a.disabled,className:"absolute right-2 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",children:s?e.jsx(g,{className:"size-4"}):e.jsx(h,{className:"size-4"})})]})}o.__docgenInfo={description:"Password field with a show/hide toggle.",methods:[],displayName:"PasswordInput",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""}},composes:["Omit"]};const k={title:"Forms/PasswordInput",component:o,tags:["autodocs"],args:{placeholder:"••••••••"}},r={render:t=>e.jsx("div",{className:"w-64",children:e.jsx(o,{...t})})};var i,n,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <div className="w-64">
      <PasswordInput {...args} />
    </div>
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const I=["Default"];export{r as Default,I as __namedExportsOrder,k as default};
