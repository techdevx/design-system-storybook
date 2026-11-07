import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as z,C as A}from"./chart-utils-B8mCQFRP.js";import{c as Q}from"./utils-DCADjnpI.js";import{U as $}from"./users-D-MgXAB1.js";import{M as H}from"./mail-Dx3nRnov.js";import{S as G}from"./search-D0u1fD4z.js";import{S as J}from"./send-CgTrkYD5.js";import"./createLucideIcon-W0-uuUzi.js";import"./index-CHISt2gJ.js";import"./_commonjsHelpers-CqkleIqs.js";const K=2,t=a=>Number.isFinite(a)&&a>0?a:0;function W(a,{sort:o="desc",maxItems:c}={}){const l=[...a];o==="desc"?l.sort((n,s)=>t(s.value)-t(n.value)):o==="asc"&&l.sort((n,s)=>t(n.value)-t(s.value));const i=a.reduce((n,s)=>n+t(s.value),0),u=a.reduce((n,s)=>Math.max(n,t(s.value)),0);return(c!==void 0&&c>=0?l.slice(0,c):l).map(n=>{const s=t(n.value),g=u>0?s/u*100:0;return{item:n,width:s>0?Math.max(g,K):0,share:i>0?s/i*100:0}})}function w(a){return Number.isFinite(a)?`${Number(a.toFixed(a!==0&&Math.abs(a)<10?1:0))}%`:"0%"}function U({data:a,valueFormatter:o=z,sort:c="desc",color:l="var(--chart-1)",showPercent:i=!1,maxItems:u,caption:b="Bar list",className:n,style:s,...g}){const y=W(a,{sort:c,maxItems:u});return e.jsxs("div",{"data-slot":"bar-list",className:Q("w-full",n),style:{"--bar-list-color":l,...s},...g,children:[e.jsx("ul",{className:"flex flex-col gap-0.5",children:y.map(({item:r,width:x,share:D})=>e.jsxs("li",{"data-slot":"bar-list-item",className:"flex min-h-9 items-center gap-3",children:[e.jsxs("div",{className:"relative flex min-h-9 min-w-0 flex-1 items-center",children:[e.jsx("div",{"data-slot":"bar-list-bar",className:"absolute inset-y-0 left-0 rounded-[4px] bg-[color-mix(in_oklab,var(--bar-list-color)_22%,transparent)]",style:{width:`${x}%`}}),e.jsxs("div",{className:"relative flex min-w-0 items-center gap-2 px-2 text-foreground text-sm",children:[r.icon?e.jsx("span",{className:"flex size-4 shrink-0 items-center justify-center text-muted-foreground [&_svg]:size-4",children:r.icon}):null,r.href?e.jsx("a",{href:r.href,className:"flex min-h-9 min-w-0 touch-manipulation items-center underline-offset-4 rounded-[4px] outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50",children:e.jsx("span",{className:"truncate",children:r.name})}):e.jsx("span",{className:"truncate",children:r.name})]})]}),e.jsxs("div",{className:"flex shrink-0 items-baseline gap-2 text-sm tabular-nums",children:[e.jsx("span",{className:"text-foreground",children:o(r.value)}),i?e.jsx("span",{className:"w-12 text-right text-muted-foreground",children:w(D)}):null]})]},r.key??r.name))}),e.jsx(A,{caption:b,columns:i?["Name","Value","Share"]:["Name","Value"],rows:y.map(({item:r,share:x})=>i?[r.name,o(r.value),w(x)]:[r.name,o(r.value)])})]})}U.__docgenInfo={description:`Ranked horizontal bars with the label inside each bar and the value
right-aligned beside it — for "top pages", "revenue by source", "deals by
owner" style lists. Server-safe HTML/CSS (no recharts). Use it instead of
\`Chart\` when you have a single measure across named categories and want a
compact, scannable ranking; reach for \`Chart\` when you need axes, multiple
series or time on the x-axis.`,methods:[],displayName:"BarList",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"BarListItem"}],raw:"BarListItem[]"},description:""},valueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Formats the value column and the screen-reader table.",defaultValue:{value:`(value) =>
Number.isFinite(value) ? value.toLocaleString() : "—"`,computed:!1}},sort:{required:!1,tsType:{name:"union",raw:'"desc" | "asc" | "none"',elements:[{name:"literal",value:'"desc"'},{name:"literal",value:'"asc"'},{name:"literal",value:'"none"'}]},description:'Row order. `"none"` keeps the input order. @default "desc"',defaultValue:{value:'"desc"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:'Bar colour (rendered as a ~22% tint). @default "var(--chart-1)"',defaultValue:{value:'"var(--chart-1)"',computed:!1}},showPercent:{required:!1,tsType:{name:"boolean"},description:"Show each row's share of the total next to the value.",defaultValue:{value:"false",computed:!1}},maxItems:{required:!1,tsType:{name:"number"},description:"Only render the first N rows (after sorting). Percentages still use the full total."},caption:{required:!1,tsType:{name:"string"},description:'Caption for the screen-reader data table. @default "Bar list"',defaultValue:{value:'"Bar list"',computed:!1}}},composes:["Omit"]};const X=[{name:"/pricing",value:8420,href:"#pricing"},{name:"/",value:12904,href:"#home"},{name:"/blog/crm-migration-guide",value:3110,href:"#blog"},{name:"/integrations/hubspot",value:1876,href:"#hubspot"},{name:"/contact-sales",value:964,href:"#contact"},{name:"/careers",value:212,href:"#careers"}],Y=a=>a.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}),ce={title:"Charts/BarList",component:U,tags:["autodocs"],args:{data:X,className:"max-w-md",caption:"Top pages by views"}},m={},d={args:{caption:"Revenue by lead source",valueFormatter:Y,showPercent:!0,data:[{name:"Referral",value:184500,icon:e.jsx($,{})},{name:"Outbound",value:96200,icon:e.jsx(H,{})},{name:"Organic search",value:142750,icon:e.jsx(G,{})},{name:"Paid campaigns",value:58300,icon:e.jsx(J,{})}]}},p={args:{maxItems:3,showPercent:!0}},f={args:{sort:"none",caption:"Deals by stage",data:[{name:"Qualified",value:48},{name:"Proposal",value:21},{name:"Negotiation",value:9},{name:"Closed won",value:6}]}},h={args:{color:"var(--chart-3)"}},v={args:{data:[]}};var N,S,j;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(j=(S=m.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,B,T;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    caption: "Revenue by lead source",
    valueFormatter: usd,
    showPercent: true,
    data: [{
      name: "Referral",
      value: 184_500,
      icon: <Users />
    }, {
      name: "Outbound",
      value: 96_200,
      icon: <Mail />
    }, {
      name: "Organic search",
      value: 142_750,
      icon: <Search />
    }, {
      name: "Paid campaigns",
      value: 58_300,
      icon: <Send />
    }]
  }
}`,...(T=(B=d.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var _,P,R;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    maxItems: 3,
    showPercent: true
  }
}`,...(R=(P=p.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var M,I,L;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    sort: "none",
    caption: "Deals by stage",
    data: [{
      name: "Qualified",
      value: 48
    }, {
      name: "Proposal",
      value: 21
    }, {
      name: "Negotiation",
      value: 9
    }, {
      name: "Closed won",
      value: 6
    }]
  }
}`,...(L=(I=f.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var O,F,k;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    color: "var(--chart-3)"
  }
}`,...(k=(F=h.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var q,V,E;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...(E=(V=v.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const ue=["TopPages","RevenueBySource","MaxItems","InputOrder","CustomColor","Empty"];export{h as CustomColor,v as Empty,f as InputOrder,p as MaxItems,d as RevenueBySource,m as TopPages,ue as __namedExportsOrder,ce as default};
