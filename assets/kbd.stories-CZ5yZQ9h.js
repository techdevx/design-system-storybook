import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{K as r,a as l}from"./kbd-C6lYeCj3.js";import"./utils-DCADjnpI.js";const j={title:"UI/Kbd",component:r,tags:["autodocs"]},s={render:()=>e.jsx(r,{children:"⌘"})},t={render:()=>e.jsxs(l,{children:[e.jsx(r,{children:"⌘"}),e.jsx(r,{children:"Shift"}),e.jsx(r,{children:"P"})]})},o={render:()=>e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Press ",e.jsx(r,{children:"⌘"})," ",e.jsx(r,{children:"K"})," to open the command palette, or ",e.jsx(r,{children:"Esc"})," to dismiss."]})};var d,a,n;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Kbd>⌘</Kbd>
}`,...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>P</Kbd>
    </KbdGroup>
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,u,K;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <p className="text-sm text-muted-foreground">
      Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette, or <Kbd>Esc</Kbd> to dismiss.
    </p>
}`,...(K=(u=o.parameters)==null?void 0:u.docs)==null?void 0:K.source}}};const f=["Default","Shortcut","InText"];export{s as Default,o as InText,t as Shortcut,f as __namedExportsOrder,j as default};
