import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as ce,d as de}from"./chart-utils-B8mCQFRP.js";import{c as P}from"./utils-DCADjnpI.js";const $=100;function me(a){const r=[];for(const s of a){const t=typeof s=="number"?{value:s}:s;Number.isFinite(t.value)&&r.push(t)}return r}function T(a,r=[]){const s=[...a,...r].filter(Number.isFinite);if(s.length===0)return[0,1];let t=Math.min(...s),n=Math.max(...s);if(t===n){const o=Math.abs(t)*.5||1;t-=o,n+=o}return[t,n]}function te(a,r,s,t){const[n,o]=r,l=Math.max(s-t*2,0);return t+(1-(a-n)/(o-n))*l}function ue(a,r,s,t){const n=a.length;return a.map((o,l)=>({x:n===1?$/2:l/(n-1)*$,y:te(o,r,s,t)}))}const p=a=>Math.round(a*100)/100;function ne(a){return a.length<2?"":a.map((r,s)=>`${s===0?"M":"L"}${p(r.x)} ${p(r.y)}`).join(" ")}function pe(a,r){const s=ne(a);if(!s)return"";const t=a[0],n=a[a.length-1];return`${s} L${p(n.x)} ${p(r)} L${p(t.x)} ${p(r)} Z`}function he(a){const[r,s]=T(a,[0]),t=s-r,n=(s-0)/t;return a.map(o=>{const l=(s-o)/t;return{top:Math.min(l,n),height:Math.abs(n-l)}})}function fe(a,r){const s=a.length;if(s===0)return"Trend: no data";const t=a[0],n=a[s-1];if(s===1)return`Trend: 1 point, ${r(t)}`;let o="";if(t===n)o=", unchanged";else if(t!==0){const l=Math.round((n-t)/Math.abs(t)*100);o=`, ${l>=0?"up":"down"} ${Math.abs(l)}%`}return`Trend: ${s} points, from ${r(t)} to ${r(n)}${o}`}const xe=2,ge=5;function m({data:a,type:r="line",color:s="var(--chart-1)",width:t="100%",height:n=32,showLastPoint:o=!1,referenceValue:l,valueFormatter:M=de,"aria-label":re,className:le,style:oe,...ie}){const C=me(a),u=C.map(c=>c.value),F=re??fe(u,M),j=l!==void 0&&Number.isFinite(l);let k=null,h=null;if(r==="bar"){const c=he(u);if(j){const[d,i]=T(u,[0]);l>=d&&l<=i&&(h=(i-l)/(i-d)*n)}k=e.jsx("div",{className:P("absolute inset-0 flex",c.length>40?"gap-px":"gap-0.5"),children:c.map((d,i)=>e.jsx("div",{className:"relative min-w-px flex-1",children:e.jsx("div",{"data-slot":"sparkline-bar",className:"absolute inset-x-0 rounded-t-[2px]",style:{top:`${d.top*100}%`,height:`max(${d.height*100}%, 1px)`,backgroundColor:"var(--sparkline-color)"}})},i))})}else{const c=o||u.length===1?ge:xe,d=T(u,j?[l]:[]),i=ue(u,d,n,c),S=i[i.length-1];j&&(h=te(l,d,n,c)),k=e.jsxs(e.Fragment,{children:[e.jsxs("svg",{viewBox:`0 0 ${$} ${n}`,preserveAspectRatio:"none",className:"absolute inset-0 size-full overflow-visible","aria-hidden":"true",focusable:"false",children:[r==="area"&&i.length>1?e.jsx("path",{"data-slot":"sparkline-area",d:pe(i,n),fill:"var(--sparkline-color)",fillOpacity:.15}):null,e.jsx("path",{"data-slot":"sparkline-line",d:ne(i),fill:"none",stroke:"var(--sparkline-color)",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]}),S&&(o||i.length===1)?e.jsx("span",{"data-slot":"sparkline-dot",className:"-translate-x-1/2 -translate-y-1/2 absolute size-1.5 rounded-full ring-2 ring-background",style:{left:`${S.x}%`,top:S.y,backgroundColor:"var(--sparkline-color)"}}):null]})}return e.jsxs("div",{"data-slot":"sparkline",className:P("relative inline-block shrink-0 align-middle",le),style:{width:t,height:n,"--sparkline-color":s,...oe},...ie,children:[e.jsxs("div",{role:"img","aria-label":F,className:"absolute inset-0",children:[h!==null?e.jsx("div",{"data-slot":"sparkline-reference","aria-hidden":"true",className:"absolute inset-x-0 border-muted-foreground/50 border-t border-dashed",style:{top:h}}):null,k]}),e.jsx(ce,{caption:F,columns:["Point","Value"],rows:C.map((c,d)=>[c.label??String(d+1),M(c.value)])})]})}m.__docgenInfo={description:`A tiny, axis-less inline trend line (or area / bars) for stat cards, table
cells and list rows — "is this going up or down?" at a glance. Hand-written
SVG (no recharts), so it is cheap to render hundreds of times and is
server-safe. Use \`Chart\` instead when the reader needs axes, tooltips or
more than one series.`,methods:[],displayName:"Sparkline",props:{data:{required:!0,tsType:{name:"union",raw:"number[] | SparklineDatum[]",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"Array",elements:[{name:"SparklineDatum"}],raw:"SparklineDatum[]"}]},description:"Plain numbers, or `{ label, value }` points (labels feed the screen-reader table)."},type:{required:!1,tsType:{name:"union",raw:'"line" | "area" | "bar"',elements:[{name:"literal",value:'"line"'},{name:"literal",value:'"area"'},{name:"literal",value:'"bar"'}]},description:'@default "line"',defaultValue:{value:'"line"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:'Any CSS colour. @default "var(--chart-1)"',defaultValue:{value:'"var(--chart-1)"',computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:'CSS width (number = px). @default "100%"',defaultValue:{value:'"100%"',computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Height in px. @default 32",defaultValue:{value:"32",computed:!1}},showLastPoint:{required:!1,tsType:{name:"boolean"},description:"Mark the latest value with a dot (line and area only).",defaultValue:{value:"false",computed:!1}},referenceValue:{required:!1,tsType:{name:"number"},description:"Draw a thin muted baseline at this value, e.g. a target."},valueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Formats values in the aria summary and the screen-reader table.",defaultValue:{value:`(value) =>
Number.isFinite(value) ? value.toLocaleString() : "—"`,computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:'Overrides the auto summary ("Trend: 12 points, from 120 to 180, up 50%").'}},composes:["Omit"]};const L=[42,45,44,48,52,51,55,58,57,61,64,68],be=[3.1,3.4,3.2,3.6,3.9,4.1,3.8,4.4],ve=[12,18,9,22,30,27,35,31,40,38,44,29,47,52],ke={title:"Charts/Sparkline",component:m,tags:["autodocs"],args:{data:L,className:"w-40"}},f={},x={args:{type:"area",showLastPoint:!0}},g={args:{type:"bar",data:ve,color:"var(--chart-3)"}},b={args:{referenceValue:55,showLastPoint:!0,valueFormatter:a=>`$${a}k`}},v={args:{type:"area",data:[{label:"Mon",value:820},{label:"Tue",value:932},{label:"Wed",value:901},{label:"Thu",value:1034},{label:"Fri",value:1290},{label:"Sat",value:1330},{label:"Sun",value:1120}]}},N={render:()=>e.jsxs("div",{className:"flex flex-col gap-3 text-muted-foreground text-xs",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-20",children:"Empty"}),e.jsx(m,{data:[],className:"w-32"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-20",children:"One point"}),e.jsx(m,{data:[42],className:"w-32"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-20",children:"Flat"}),e.jsx(m,{data:[5,5,5,5],className:"w-32"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-20",children:"Negative"}),e.jsx(m,{type:"bar",data:[4,-2,3,-5,6,1],className:"w-32"})]})]})},y={render:()=>e.jsxs("div",{className:"flex w-72 flex-col gap-2 rounded-lg border bg-card p-4",children:[e.jsx("span",{className:"text-muted-foreground text-sm",children:"Monthly churn"}),e.jsxs("div",{className:"flex items-end justify-between gap-4",children:[e.jsx("span",{className:"font-semibold text-2xl text-foreground tabular-nums",children:"4.4%"}),e.jsx(m,{data:be,type:"area",color:"var(--chart-8)",showLastPoint:!0,height:36,className:"w-28"})]})]})},Ne=[{name:"Acme Corp",mrr:"$12.4k",data:L},{name:"Globex",mrr:"$8.1k",data:[...L].reverse()},{name:"Initech",mrr:"$5.6k",data:[30,31,30,32,31,33,32,33,34,33,34,35]}],w={render:()=>e.jsxs("table",{className:"w-96 text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-left text-muted-foreground",children:[e.jsx("th",{className:"py-2 font-medium",children:"Account"}),e.jsx("th",{className:"py-2 font-medium",children:"MRR"}),e.jsx("th",{className:"py-2 font-medium",children:"Last 12 weeks"})]})}),e.jsx("tbody",{children:Ne.map(a=>e.jsxs("tr",{className:"border-t",children:[e.jsx("td",{className:"py-2 text-foreground",children:a.name}),e.jsx("td",{className:"py-2 text-foreground tabular-nums",children:a.mrr}),e.jsx("td",{className:"py-2",children:e.jsx(m,{data:a.data,height:24,className:"w-28"})})]},a.name))})]})};var A,D,q;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(q=(D=f.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var E,I,O;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: "area",
    showLastPoint: true
  }
}`,...(O=(I=x.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var R,W,_;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: "bar",
    data: signups,
    color: "var(--chart-3)"
  }
}`,...(_=(W=g.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var V,z,B;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    referenceValue: 55,
    showLastPoint: true,
    valueFormatter: v => \`$\${v}k\`
  }
}`,...(B=(z=b.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var H,G,U;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    type: "area",
    data: [{
      label: "Mon",
      value: 820
    }, {
      label: "Tue",
      value: 932
    }, {
      label: "Wed",
      value: 901
    }, {
      label: "Thu",
      value: 1034
    }, {
      label: "Fri",
      value: 1290
    }, {
      label: "Sat",
      value: 1330
    }, {
      label: "Sun",
      value: 1120
    }]
  }
}`,...(U=(G=v.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var Y,Z,J;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3 text-muted-foreground text-xs">
      <div className="flex items-center gap-3">
        <span className="w-20">Empty</span>
        <Sparkline data={[]} className="w-32" />
      </div>
      <div className="flex items-center gap-3">
        <span className="w-20">One point</span>
        <Sparkline data={[42]} className="w-32" />
      </div>
      <div className="flex items-center gap-3">
        <span className="w-20">Flat</span>
        <Sparkline data={[5, 5, 5, 5]} className="w-32" />
      </div>
      <div className="flex items-center gap-3">
        <span className="w-20">Negative</span>
        <Sparkline type="bar" data={[4, -2, 3, -5, 6, 1]} className="w-32" />
      </div>
    </div>
}`,...(J=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,Q,X;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="flex w-72 flex-col gap-2 rounded-lg border bg-card p-4">
      <span className="text-muted-foreground text-sm">Monthly churn</span>
      <div className="flex items-end justify-between gap-4">
        <span className="font-semibold text-2xl text-foreground tabular-nums">4.4%</span>
        <Sparkline data={churn} type="area" color="var(--chart-8)" showLastPoint height={36} className="w-28" />
      </div>
    </div>
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,ae,se;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <table className="w-96 text-sm">
      <thead>
        <tr className="text-left text-muted-foreground">
          <th className="py-2 font-medium">Account</th>
          <th className="py-2 font-medium">MRR</th>
          <th className="py-2 font-medium">Last 12 weeks</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map(row => <tr key={row.name} className="border-t">
            <td className="py-2 text-foreground">{row.name}</td>
            <td className="py-2 text-foreground tabular-nums">{row.mrr}</td>
            <td className="py-2">
              <Sparkline data={row.data} height={24} className="w-28" />
            </td>
          </tr>)}
      </tbody>
    </table>
}`,...(se=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const Se=["Line","Area","Bar","WithTarget","Labeled","EdgeCases","InStatCard","InTableCells"];export{x as Area,g as Bar,N as EdgeCases,y as InStatCard,w as InTableCells,v as Labeled,f as Line,b as WithTarget,Se as __namedExportsOrder,ke as default};
