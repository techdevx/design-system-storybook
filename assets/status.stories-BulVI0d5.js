import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{S as a,a as A,b as h,c as B}from"./status-Kil5vsBh.js";import"./utils-DCADjnpI.js";import"./circle-alert-DDF2xc0B.js";import"./createLucideIcon-W0-uuUzi.js";import"./index-CHISt2gJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./circle-check-1tSnSViv.js";import"./pencil-Iq1pDAwy.js";import"./clock-vtPk_orD.js";import"./info-Ift5Lyrf.js";import"./triangle-alert-DbmWGjbs.js";const C={title:"UI/Status",component:a,tags:["autodocs"],args:{status:"success"}},c=Object.keys(A),t={render:()=>s.jsx("div",{className:"flex flex-wrap gap-2",children:c.map(e=>s.jsx(a,{status:e},e))})},r={render:()=>s.jsx("div",{className:"flex flex-col gap-2 text-sm",children:c.map(e=>s.jsxs("span",{className:"flex items-center gap-2",children:[s.jsx(h,{status:e}),A[e].label]},e))})},n={render:()=>s.jsx("div",{className:"flex items-center gap-3",children:c.map(e=>s.jsx(B,{status:e},e))})},o={render:()=>s.jsxs("div",{className:"flex gap-2",children:[s.jsx(a,{status:"online",children:"Agent available"}),s.jsx(a,{status:"pending",children:"Awaiting review"}),s.jsx(a,{status:"error",hideDot:!0,children:"Sync failed"})]})};var i,d,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      {ALL.map(status => <StatusBadge key={status} status={status} />)}
    </div>
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 text-sm">
      {ALL.map(status => <span key={status} className="flex items-center gap-2">
          <StatusDot status={status} />
          {STATUS_META[status].label}
        </span>)}
    </div>
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,x,S;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      {ALL.map(status => <StatusIcon key={status} status={status} />)}
    </div>
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var f,v,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <StatusBadge status="online">Agent available</StatusBadge>
      <StatusBadge status="pending">Awaiting review</StatusBadge>
      <StatusBadge status="error" hideDot>
        Sync failed
      </StatusBadge>
    </div>
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const M=["Badges","Dots","Icons","CustomLabel"];export{t as Badges,o as CustomLabel,r as Dots,n as Icons,M as __namedExportsOrder,C as default};
