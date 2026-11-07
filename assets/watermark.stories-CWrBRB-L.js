import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as C}from"./utils-DCADjnpI.js";const L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"};function h(e){return e.replace(/[&<>"']/g,t=>L[t]??t)}function H(e){return(typeof e=="string"?e.split(`
`):[...e]).filter(n=>n.length>0)}function O({lines:e,rotate:t,gap:n,fontSize:i,fontFamily:w,fontWeight:k=400,fill:j="#000"}){const l=i*1.4,$=e.reduce((S,W)=>Math.max(S,W.length),0),u=Math.max(1,$*i*.6),d=Math.max(1,e.length*l),m=t*Math.PI/180,p=Math.abs(Math.cos(m)),f=Math.abs(Math.sin(m)),g=u*p+d*f,a=u*f+d*p,s=Math.ceil(g+n[0]),o=Math.ceil(a+n[1]),x=s/2,T=o/2,E=T-d/2+l/2,F=e.map((S,W)=>`<tspan x="${x}" y="${(E+W*l).toFixed(2)}">${h(S)}</tspan>`).join(""),_=`<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${o}"><text transform="rotate(${t} ${x} ${T})" text-anchor="middle" dominant-baseline="middle" font-family="${h(w)}" font-size="${i}" font-weight="${h(String(k))}" fill="${h(j)}">${F}</text></svg>`;return{url:`data:image/svg+xml,${encodeURIComponent(_)}`,width:s,height:o}}function c({content:e,rotate:t=-22,gap:n=[100,100],fontSize:i=16,fontFamily:w="ui-sans-serif, system-ui, sans-serif",fontWeight:k=400,color:j="currentColor",opacity:l=.12,zIndex:$=10,fullscreen:u=!1,className:d,overlayClassName:m,children:p,...f}){const g=H(e),a=g.length>0?O({lines:g,rotate:t,gap:n,fontSize:i,fontFamily:w,fontWeight:k}):null,s=a?`url("${a.url}")`:void 0,o=a?`${a.width}px ${a.height}px`:void 0,x={zIndex:$,opacity:l,backgroundColor:j,maskImage:s,WebkitMaskImage:s,maskRepeat:"repeat",WebkitMaskRepeat:"repeat",maskSize:o,WebkitMaskSize:o};return r.jsxs("div",{"data-slot":"watermark",className:C("relative",d),...f,children:[p,a?r.jsx("div",{"data-slot":"watermark-overlay","aria-hidden":"true",className:C("pointer-events-none select-none print:[print-color-adjust:exact]",u?"fixed inset-0":"absolute inset-0",m),style:x}):null]})}c.__docgenInfo={description:`Repeating, diagonal text watermark over content, e.g. "Confidential – jane@acme.com" on exported
reports, contract previews or screenshots of customer data. Server-safe: the tile is an inline
SVG built at render time, laid over the children on a non-interactive, \`aria-hidden\` layer.

This is a visual deterrent, not security: anyone can remove it via devtools. Never rely on it
to protect data; enforce access on the server.`,methods:[],displayName:"Watermark",props:{content:{required:!0,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Watermark text. Pass an array (or a string with `\\n`) for multiple lines."},rotate:{required:!1,tsType:{name:"number"},description:"Rotation in degrees. @default -22",defaultValue:{value:"-22",computed:!1}},gap:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"Space between repeats `[x, y]` in px. @default [100, 100]",defaultValue:{value:"[100, 100]",computed:!1}},fontSize:{required:!1,tsType:{name:"number"},description:"Font size in px. @default 16",defaultValue:{value:"16",computed:!1}},fontFamily:{required:!1,tsType:{name:"string"},description:'@default "ui-sans-serif, system-ui, sans-serif"',defaultValue:{value:'"ui-sans-serif, system-ui, sans-serif"',computed:!1}},fontWeight:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"@default 400",defaultValue:{value:"400",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Text colour, any CSS colour. Defaults to `currentColor`, so a text class on the component\n(e.g. `text-foreground`) makes it theme-aware in light and dark mode.",defaultValue:{value:'"currentColor"',computed:!1}},opacity:{required:!1,tsType:{name:"number"},description:"Overlay opacity. @default 0.12",defaultValue:{value:"0.12",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"Stacking order of the overlay. @default 10",defaultValue:{value:"10",computed:!1}},fullscreen:{required:!1,tsType:{name:"boolean"},description:"Cover the whole viewport (`position: fixed`) instead of just this wrapper.",defaultValue:{value:"false",computed:!1}},overlayClassName:{required:!1,tsType:{name:"string"},description:"Extra classes for the overlay element."}},composes:["Omit"]};const U={title:"UI/Watermark",component:c,tags:["autodocs"],args:{content:["Confidential","jane.doe@acme.com"]}};function R(){return r.jsxs("div",{className:"space-y-3 p-6",children:[r.jsx("h3",{className:"font-semibold text-lg",children:"Q3 pipeline review"}),r.jsx("p",{className:"text-muted-foreground text-sm",children:"Closed-won revenue grew 18% quarter over quarter, driven by three enterprise renewals and the new partner channel. Average deal cycle shortened from 41 to 34 days."}),r.jsxs("ul",{className:"list-disc space-y-1 pl-5 text-sm",children:[r.jsx("li",{children:"Acme Corp: renewal, $120,000 ARR"}),r.jsx("li",{children:"Globex: expansion, $48,500 ARR"}),r.jsx("li",{children:"Initech: new logo, $36,000 ARR"})]})]})}const y={args:{className:"max-w-xl rounded-lg border border-border text-foreground"},render:e=>r.jsx(c,{...e,children:r.jsx(R,{})})},v={args:{content:"DRAFT",fontSize:32,fontWeight:700,gap:[80,80],opacity:.08,className:"max-w-xl rounded-lg border border-border text-foreground"},render:e=>r.jsx(c,{...e,children:r.jsx(R,{})})},b={args:{color:"var(--destructive)",opacity:.15,rotate:-30,className:"max-w-xl rounded-lg border border-border"},render:e=>r.jsx(c,{...e,children:r.jsx(R,{})})};var N,q,M;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    className: "max-w-xl rounded-lg border border-border text-foreground"
  },
  render: args => <Watermark {...args}>
      <ReportBody />
    </Watermark>
}`,...(M=(q=y.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var V,A,I;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    content: "DRAFT",
    fontSize: 32,
    fontWeight: 700,
    gap: [80, 80],
    opacity: 0.08,
    className: "max-w-xl rounded-lg border border-border text-foreground"
  },
  render: args => <Watermark {...args}>
      <ReportBody />
    </Watermark>
}`,...(I=(A=v.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var z,B,D;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    color: "var(--destructive)",
    opacity: 0.15,
    rotate: -30,
    className: "max-w-xl rounded-lg border border-border"
  },
  render: args => <Watermark {...args}>
      <ReportBody />
    </Watermark>
}`,...(D=(B=b.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const X=["Default","SingleLine","BrandColour"];export{b as BrandColour,y as Default,v as SingleLine,X as __namedExportsOrder,U as default};
