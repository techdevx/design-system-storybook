import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-UiW3gZKV.js";import{c as _}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";function c({orientation:e="vertical",size:a=24,className:w,children:k,...N}){const i=t.useRef(null),[m,p]=t.useState(!0),[u,h]=t.useState(!0),s=t.useCallback(()=>{const r=i.current;r&&(e==="vertical"?(p(r.scrollTop<=1),h(r.scrollTop+r.clientHeight>=r.scrollHeight-1)):(p(r.scrollLeft<=1),h(r.scrollLeft+r.clientWidth>=r.scrollWidth-1)))},[e]);t.useEffect(()=>{s();const r=i.current;if(!r)return;const f=new ResizeObserver(s);return f.observe(r),()=>f.disconnect()},[s]);const $=e==="vertical"?"to bottom":"to right",j=m?"black":"transparent, black",z=u?"black":`black calc(100% - ${a}px), transparent`,d=m&&u?void 0:`linear-gradient(${$}, ${j} ${a}px, black calc(100% - ${a}px), ${z})`;return o.jsx("div",{ref:i,"data-slot":"scroll-shadow",onScroll:s,style:d?{maskImage:d,WebkitMaskImage:d}:void 0,className:_(e==="vertical"?"overflow-y-auto":"overflow-x-auto",w),...N,children:k})}c.__docgenInfo={description:`Scroll container that fades its clipped edges, signalling there's more
content — long menus, chat logs, horizontally scrolling toolbars. The
fades are CSS masks driven by scroll position, so they work on any
background.`,methods:[],displayName:"ScrollShadow",props:{orientation:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},size:{required:!1,tsType:{name:"number"},description:"Shadow size in pixels.",defaultValue:{value:"24",computed:!1}}}};const I={title:"UI/ScrollShadow",component:c,tags:["autodocs"]},l={render:()=>o.jsx(c,{className:"h-48 max-w-xs rounded-md border border-border p-3",children:o.jsx("ul",{className:"space-y-2 text-sm",children:Array.from({length:20},(e,a)=>`Notification ${a+1}`).map(e=>o.jsx("li",{children:e},e))})})},n={render:()=>o.jsx(c,{orientation:"horizontal",className:"max-w-sm rounded-md border border-border p-3",children:o.jsx("div",{className:"flex w-max gap-2 text-sm",children:Array.from({length:15},(e,a)=>`Filter ${a+1}`).map(e=>o.jsx("span",{className:"rounded-full bg-secondary px-3 py-1 text-secondary-foreground",children:e},e))})})};var x,b,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <ScrollShadow className="h-48 max-w-xs rounded-md border border-border p-3">
      <ul className="space-y-2 text-sm">
        {Array.from({
        length: 20
      }, (_, i) => \`Notification \${i + 1}\`).map(item => <li key={item}>{item}</li>)}
      </ul>
    </ScrollShadow>
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var S,v,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ScrollShadow orientation="horizontal" className="max-w-sm rounded-md border border-border p-3">
      <div className="flex w-max gap-2 text-sm">
        {Array.from({
        length: 15
      }, (_, i) => \`Filter \${i + 1}\`).map(chip => <span key={chip} className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
            {chip}
          </span>)}
      </div>
    </ScrollShadow>
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const V=["Vertical","Horizontal"];export{n as Horizontal,l as Vertical,V as __namedExportsOrder,I as default};
