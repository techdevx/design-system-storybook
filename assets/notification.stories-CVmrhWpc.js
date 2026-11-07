import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{N as a,a as t}from"./notification-CVQ66qLm.js";import{B as n}from"./bell-uqtozJPH.js";import{T as m}from"./triangle-alert-DbmWGjbs.js";import{C as s}from"./circle-check-1tSnSViv.js";import"./utils-DCADjnpI.js";import"./createLucideIcon-W0-uuUzi.js";import"./index-CHISt2gJ.js";import"./_commonjsHelpers-CqkleIqs.js";const b={title:"Composite/Notification",component:a,tags:["autodocs"]},i={render:()=>e.jsx("div",{className:"w-80 overflow-hidden rounded-lg border border-border",children:e.jsxs(a,{children:[e.jsx(t,{unread:!0,media:e.jsx(n,{}),title:"New comment",description:"Ada mentioned you in “Q3 roadmap”.",time:"2m"}),e.jsx(t,{unread:!0,media:e.jsx(m,{}),title:"Payment failed",description:"Invoice #1042 could not be charged.",time:"1h"}),e.jsx(t,{media:e.jsx(s,{}),title:"Deploy succeeded",description:"techdevx-web is live.",time:"3h"})]})})};var o,r,d;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="w-80 overflow-hidden rounded-lg border border-border">
      <NotificationList>
        <NotificationItem unread media={<Bell />} title="New comment" description="Ada mentioned you in “Q3 roadmap”." time="2m" />
        <NotificationItem unread media={<TriangleAlert />} title="Payment failed" description="Invoice #1042 could not be charged." time="1h" />
        <NotificationItem media={<CircleCheck />} title="Deploy succeeded" description="techdevx-web is live." time="3h" />
      </NotificationList>
    </div>
}`,...(d=(r=i.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const j=["Default"];export{i as Default,j as __namedExportsOrder,b as default};
