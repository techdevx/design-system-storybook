import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{A as n,a as b,b as m}from"./avatar-Crhq93o8.js";import{A as o}from"./avatar-group-6cnmJq9V.js";import"./index-CHISt2gJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-9vGS739Q.js";import"./index-sAPDUP7t.js";import"./index-CuVVNN4Y.js";import"./index-BG9WkkVi.js";import"./index-CHIrpB_0.js";import"./index-fp2UqmYR.js";import"./index-BGcWswtl.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";const U={title:"UI/AvatarGroup",component:o,tags:["autodocs"]},i=["Ada Lovelace","Grace Hopper","Alan Turing","Edsger Dijkstra","Barbara Liskov"];function c(a){return a.split(" ").map(k=>k[0]).join("")}const e={render:()=>r.jsx(o,{children:i.slice(0,3).map(a=>r.jsxs(n,{children:[r.jsx(b,{src:`https://i.pravatar.cc/80?u=${encodeURIComponent(a)}`,alt:a}),r.jsx(m,{children:c(a)})]},a))})},t={render:()=>r.jsx(o,{max:3,children:i.map(a=>r.jsx(n,{children:r.jsx(m,{children:c(a)})},a))})},s={render:()=>r.jsx(o,{max:2,size:"sm",children:i.map(a=>r.jsx(n,{size:"sm",children:r.jsx(m,{className:"text-xs",children:c(a)})},a))})};var p,l,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <AvatarGroup>
      {TEAM.slice(0, 3).map(name => <Avatar key={name}>
          <AvatarImage src={\`https://i.pravatar.cc/80?u=\${encodeURIComponent(name)}\`} alt={name} />
          <AvatarFallback>{initials(name)}</AvatarFallback>
        </Avatar>)}
    </AvatarGroup>
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var A,v,u;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={3}>
      {TEAM.map(name => <Avatar key={name}>
          <AvatarFallback>{initials(name)}</AvatarFallback>
        </Avatar>)}
    </AvatarGroup>
}`,...(u=(v=t.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var x,j,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={2} size="sm">
      {TEAM.map(name => <Avatar key={name} size="sm">
          <AvatarFallback className="text-xs">{initials(name)}</AvatarFallback>
        </Avatar>)}
    </AvatarGroup>
}`,...(h=(j=s.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};const w=["Default","WithOverflow","Small"];export{e as Default,s as Small,t as WithOverflow,w as __namedExportsOrder,U as default};
