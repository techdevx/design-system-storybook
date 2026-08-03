import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{S as a,a as A,b as h,c as B}from"./status-BTfL2hpd.js";import"./utils-DCADjnpI.js";import"./info-DNdnAVWe.js";import"./createLucideIcon-BBGjgC4Q.js";import"./index-UiW3gZKV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./triangle-alert-pz-xLPtO.js";import"./pencil-CK-lSdGr.js";import"./clock-Dwg6zLXy.js";const _={title:"UI/Status",component:a,tags:["autodocs"],args:{status:"success"}},c=Object.keys(A),t={render:()=>s.jsx("div",{className:"flex flex-wrap gap-2",children:c.map(e=>s.jsx(a,{status:e},e))})},r={render:()=>s.jsx("div",{className:"flex flex-col gap-2 text-sm",children:c.map(e=>s.jsxs("span",{className:"flex items-center gap-2",children:[s.jsx(h,{status:e}),A[e].label]},e))})},n={render:()=>s.jsx("div",{className:"flex items-center gap-3",children:c.map(e=>s.jsx(B,{status:e},e))})},o={render:()=>s.jsxs("div",{className:"flex gap-2",children:[s.jsx(a,{status:"online",children:"Agent available"}),s.jsx(a,{status:"pending",children:"Awaiting review"}),s.jsx(a,{status:"error",hideDot:!0,children:"Sync failed"})]})};var d,i,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      {ALL.map(status => <StatusBadge key={status} status={status} />)}
    </div>
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,p,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 text-sm">
      {ALL.map(status => <span key={status} className="flex items-center gap-2">
          <StatusDot status={status} />
          {STATUS_META[status].label}
        </span>)}
    </div>
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,x,S;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const U=["Badges","Dots","Icons","CustomLabel"];export{t as Badges,o as CustomLabel,r as Dots,n as Icons,U as __namedExportsOrder,_ as default};
