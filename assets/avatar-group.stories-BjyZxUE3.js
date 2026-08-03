import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as l,b as E,a as m}from"./avatar-BADxO_V9.js";import{r as S}from"./index-UiW3gZKV.js";import{c as u}from"./utils-DCADjnpI.js";import"./index-C54PEBdP.js";import"./index-zrl4sMk3.js";import"./index-DFyD2OK_.js";import"./index-DvGxcuUR.js";import"./index-3b7XovMV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BA8NevWa.js";import"./index-DOqdsVs_.js";import"./index-CkIaN0ex.js";const F={sm:"size-8",md:"size-10",lg:"size-12"};function r({max:a,size:i="md",className:G,children:y,...w}){const t=S.Children.toArray(y),d=a!==void 0&&t.length>a?t.slice(0,a):t,v=t.length-d.length;return e.jsxs("div",{"data-slot":"avatar-group",className:u("flex items-center -space-x-2","[&_[data-slot=avatar]]:ring-2 [&_[data-slot=avatar]]:ring-background",G),...w,children:[d,v>0&&e.jsxs("span",{"data-slot":"avatar-group-overflow",className:u("relative flex shrink-0 select-none items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground ring-2 ring-background",F[i]),children:["+",v]})]})}r.__docgenInfo={description:`Overlapping stack of \`Avatar\`s with an optional "+N" overflow chip.

  <AvatarGroup max={3}>
    <Avatar>…</Avatar>
    …
  </AvatarGroup>`,methods:[],displayName:"AvatarGroup",props:{max:{required:!1,tsType:{name:"number"},description:'Render at most this many avatars; the rest collapse into a "+N" chip.'},size:{required:!1,tsType:{name:"union",raw:"keyof typeof overflowSizeClasses",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}]},description:"Size of the overflow chip — match the `size` of the child `Avatar`s.",defaultValue:{value:'"md"',computed:!1}}}};const $={title:"UI/AvatarGroup",component:r,tags:["autodocs"]},c=["Ada Lovelace","Grace Hopper","Alan Turing","Edsger Dijkstra","Barbara Liskov"];function p(a){return a.split(" ").map(i=>i[0]).join("")}const s={render:()=>e.jsx(r,{children:c.slice(0,3).map(a=>e.jsxs(l,{children:[e.jsx(E,{src:`https://i.pravatar.cc/80?u=${encodeURIComponent(a)}`,alt:a}),e.jsx(m,{children:p(a)})]},a))})},o={render:()=>e.jsx(r,{max:3,children:c.map(a=>e.jsx(l,{children:e.jsx(m,{children:p(a)})},a))})},n={render:()=>e.jsx(r,{max:2,size:"sm",children:c.map(a=>e.jsx(l,{size:"sm",children:e.jsx(m,{className:"text-xs",children:p(a)})},a))})};var A,f,h;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <AvatarGroup>
      {TEAM.slice(0, 3).map(name => <Avatar key={name}>
          <AvatarImage src={\`https://i.pravatar.cc/80?u=\${encodeURIComponent(name)}\`} alt={name} />
          <AvatarFallback>{initials(name)}</AvatarFallback>
        </Avatar>)}
    </AvatarGroup>
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,g,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={3}>
      {TEAM.map(name => <Avatar key={name}>
          <AvatarFallback>{initials(name)}</AvatarFallback>
        </Avatar>)}
    </AvatarGroup>
}`,...(j=(g=o.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var k,b,z;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={2} size="sm">
      {TEAM.map(name => <Avatar key={name} size="sm">
          <AvatarFallback className="text-xs">{initials(name)}</AvatarFallback>
        </Avatar>)}
    </AvatarGroup>
}`,...(z=(b=n.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};const B=["Default","WithOverflow","Small"];export{s as Default,n as Small,o as WithOverflow,B as __namedExportsOrder,$ as default};
