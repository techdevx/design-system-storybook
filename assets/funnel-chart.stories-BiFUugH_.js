import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as B,C as G}from"./chart-utils-B8mCQFRP.js";import{c as t}from"./utils-DCADjnpI.js";const J=2,N=a=>Number.isFinite(a)&&a>0?a:0;function K(a){var c;const n=N(((c=a[0])==null?void 0:c.value)??0);return a.map((m,i)=>{var p;const o=N(m.value),d=n>0?o/n*100:0,r=i>0?N(((p=a[i-1])==null?void 0:p.value)??0):null;return{stage:m,ofFirst:d,size:o>0?Math.min(100,Math.max(d,J)):0,conversion:r===null||r===0?null:o/r*100,dropOff:r===null?null:Math.max(r-o,0)}})}function h(a){return Number.isFinite(a)?`${Number(a.toFixed(a!==0&&Math.abs(a)<10?1:0))}%`:"0%"}function W({data:a,valueFormatter:n=B,color:c="var(--chart-1)",showConversion:m=!0,orientation:i="vertical",caption:o="Conversion funnel",className:d,style:r,...p}){const j=K(a),s=i==="horizontal";return e.jsxs("div",{"data-slot":"funnel-chart","data-orientation":i,className:t("w-full",d),style:{"--funnel-color":c,...r},...p,children:[e.jsx("ol",{className:t("flex flex-col gap-0.5",s&&"sm:h-64 sm:flex-row sm:items-stretch"),children:j.map(({stage:l,ofFirst:C,size:f,conversion:u,dropOff:S},$)=>e.jsxs("li",{"data-slot":"funnel-chart-stage",className:t("flex flex-col gap-1",s&&"sm:min-w-0 sm:flex-1"),style:{"--funnel-size":`${f}%`},children:[m&&$>0?e.jsxs("p",{"data-slot":"funnel-chart-step",className:t("flex flex-wrap items-center justify-center gap-x-2 py-1 text-muted-foreground text-xs",s&&"sm:min-h-8 sm:justify-start sm:py-0"),children:[e.jsxs("span",{children:[e.jsx("span",{"aria-hidden":"true",children:s?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"sm:hidden",children:"↓ "}),e.jsx("span",{className:"hidden sm:inline",children:"→ "})]}):"↓ "}),u===null?"—":h(u)," conversion"]}),S!==null&&S>0?e.jsxs("span",{children:["−",n(S)," drop-off"]}):null]}):s?e.jsx("div",{"aria-hidden":"true",className:"hidden sm:block sm:min-h-8"}):null,e.jsxs("div",{className:t("flex items-baseline justify-between gap-3 text-sm",s&&"sm:flex-col sm:items-start sm:gap-0"),children:[e.jsx("span",{className:"min-w-0 truncate text-foreground",children:l.name}),e.jsxs("span",{className:"flex shrink-0 items-baseline gap-2 tabular-nums",children:[e.jsx("span",{className:"text-foreground",children:n(l.value)}),e.jsx("span",{className:"text-muted-foreground",children:h(C)})]})]}),e.jsx("div",{className:t("flex h-6 justify-center",s&&"sm:h-auto sm:flex-1 sm:items-end"),children:e.jsx("div",{"data-slot":"funnel-chart-bar",className:t("h-full w-(--funnel-size) rounded-[4px] bg-(--funnel-color)",s&&"sm:h-(--funnel-size) sm:w-full")})})]},l.name))}),e.jsx(G,{caption:o,columns:["Stage","Value","% of first stage","Conversion from previous","Drop-off"],rows:j.map(({stage:l,ofFirst:C,conversion:f,dropOff:u})=>[l.name,n(l.value),h(C),f===null?"—":h(f),u===null?"—":n(u)])})]})}W.__docgenInfo={description:`Conversion funnel (e.g. Visitors → Signups → Trials → Paid): one bar per
stage sized against the first stage, with step-to-step conversion and
drop-off between stages. Server-safe HTML/CSS (no recharts). Use it instead
of \`Chart\` when the data is an ordered sequence of stages where each is a
subset of the previous; use \`Chart\` for unrelated categories or trends over
time.`,methods:[],displayName:"FunnelChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"FunnelStageInput"}],raw:"FunnelChartStage[]"},description:"Stages in funnel order (first = top of funnel)."},valueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Formats stage values, drop-offs and the screen-reader table.",defaultValue:{value:`(value) =>
Number.isFinite(value) ? value.toLocaleString() : "—"`,computed:!1}},color:{required:!1,tsType:{name:"string"},description:'Bar colour, shared by every stage. @default "var(--chart-1)"',defaultValue:{value:'"var(--chart-1)"',computed:!1}},showConversion:{required:!1,tsType:{name:"boolean"},description:'Show the "↓ 42% conversion" step labels between stages. @default true',defaultValue:{value:"true",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:'`"vertical"` stacks stages top to bottom with centred bars; `"horizontal"`\nlays them out as columns from `sm:` up (phones always get vertical).\n@default "vertical"',defaultValue:{value:'"vertical"',computed:!1}},caption:{required:!1,tsType:{name:"string"},description:'Caption for the screen-reader data table. @default "Conversion funnel"',defaultValue:{value:'"Conversion funnel"',computed:!1}}},composes:["Omit"]};const O=[{name:"Visitors",value:48200},{name:"Signups",value:6430},{name:"Trials started",value:2710},{name:"Paid",value:812}],ee={title:"Charts/FunnelChart",component:W,tags:["autodocs"],args:{data:O,className:"max-w-lg",caption:"Signup funnel, last 30 days"}},v={},g={args:{orientation:"horizontal",className:"max-w-3xl"}},x={args:{caption:"Pipeline value by stage",valueFormatter:a=>a.toLocaleString("en-US",{style:"currency",currency:"USD",notation:"compact"}),data:[{name:"Leads",value:24e5},{name:"Qualified",value:138e4},{name:"Proposal",value:72e4},{name:"Negotiation",value:41e4},{name:"Closed won",value:265e3}]}},y={args:{showConversion:!1}},b={args:{color:"var(--chart-7)"}},w={args:{data:[]}};var F,z,_;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(_=(z=v.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var T,P,V;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    className: "max-w-3xl"
  }
}`,...(V=(P=g.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var q,E,L;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    caption: "Pipeline value by stage",
    valueFormatter: v => v.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact"
    }),
    data: [{
      name: "Leads",
      value: 2_400_000
    }, {
      name: "Qualified",
      value: 1_380_000
    }, {
      name: "Proposal",
      value: 720_000
    }, {
      name: "Negotiation",
      value: 410_000
    }, {
      name: "Closed won",
      value: 265_000
    }]
  }
}`,...(L=(E=x.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var M,U,D;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    showConversion: false
  }
}`,...(D=(U=y.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var k,H,I;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    color: "var(--chart-7)"
  }
}`,...(I=(H=b.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var A,Q,R;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...(R=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};const ae=["Vertical","Horizontal","SalesPipeline","WithoutConversion","CustomColor","Empty"];export{b as CustomColor,w as Empty,g as Horizontal,x as SalesPipeline,v as Vertical,y as WithoutConversion,ae as __namedExportsOrder,ee as default};
