import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-CHISt2gJ.js";import{T as c}from"./tree-view-BmENL7zy.js";import{F as s}from"./file-BNiQZwet.js";import{c as w}from"./createLucideIcon-W0-uuUzi.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./tree-view.utils-BkBv8mcj.js";import"./chevron-right-Bbn_WNoe.js";import"./check-DlxM5pN9.js";import"./minus-BQnQEcer.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],l=w("folder",C),f=[{id:"src",label:"src",icon:e.jsx(l,{}),children:[{id:"components",label:"components",icon:e.jsx(l,{}),children:[{id:"button",label:"button.tsx",icon:e.jsx(s,{})},{id:"dialog",label:"dialog.tsx",icon:e.jsx(s,{})},{id:"legacy",label:"legacy.tsx",icon:e.jsx(s,{}),disabled:!0}]},{id:"app",label:"app.tsx",icon:e.jsx(s,{})},{id:"main",label:"main.tsx",icon:e.jsx(s,{})}]},{id:"pkg",label:"package.json",icon:e.jsx(s,{})},{id:"readme",label:"README.md",icon:e.jsx(s,{})}],A={title:"UI/TreeView",component:c,tags:["autodocs"],args:{items:f,"aria-label":"Files",defaultExpanded:["src"]}};function S(a){const[n,h]=k.useState(["button"]);return e.jsxs("div",{className:"grid w-72 gap-3",children:[e.jsx(c,{...a,items:f,checkable:!0,defaultExpanded:["src","components"],checked:n,onCheckedChange:h}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:["Checked leaves: ",n.join(", ")||"none"]})]})}const r={render:a=>e.jsx(c,{...a,className:"w-72"})},o={render:a=>e.jsx(S,{...a})},t={args:{leafOnlySelect:!0},render:a=>e.jsx(c,{...a,className:"w-72"})};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <TreeView {...args} className="w-72" />
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,x,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <CheckableDemo {...args} />
}`,...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,b,j;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    leafOnlySelect: true
  },
  render: args => <TreeView {...args} className="w-72" />
}`,...(j=(b=t.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const I=["Default","Checkable","LeafOnlySelect"];export{o as Checkable,r as Default,t as LeafOnlySelect,I as __namedExportsOrder,A as default};
