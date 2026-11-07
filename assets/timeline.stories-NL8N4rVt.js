import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{c as t}from"./utils-DCADjnpI.js";function m({className:e,...n}){return i.jsx("ol",{className:t("flex flex-col",e),...n})}function c({className:e,...n}){return i.jsx("li",{className:t("flex gap-4 pb-6 last:pb-0",e),...n})}function d({className:e,connector:n=!0,children:h,...g}){return i.jsxs("div",{className:"flex flex-col items-center",...g,children:[i.jsx("div",{className:t("mt-1 flex size-3 items-center justify-center rounded-full border-2 border-primary bg-background [&>svg]:size-2.5",e),children:h}),n?i.jsx("div",{className:"mt-1 w-px flex-1 bg-border"}):null]})}function T({className:e,...n}){return i.jsx("div",{className:t("flex-1 space-y-1 pb-2",e),...n})}function p({className:e,...n}){return i.jsx("div",{className:t("flex items-center justify-between gap-2",e),...n})}function u({className:e,...n}){return i.jsx("p",{className:t("text-sm font-medium text-foreground",e),...n})}function f({className:e,...n}){return i.jsx("span",{className:t("text-xs text-muted-foreground",e),...n})}function x({className:e,...n}){return i.jsx("p",{className:t("text-sm text-muted-foreground",e),...n})}m.__docgenInfo={description:`Composable vertical timeline:

  <Timeline>
    <TimelineItem>
      <TimelineDot />
      <TimelineContent>
        <TimelineHeader>
          <TimelineTitle>Order placed</TimelineTitle>
          <TimelineTime>2h ago</TimelineTime>
        </TimelineHeader>
        <TimelineDescription>…</TimelineDescription>
      </TimelineContent>
    </TimelineItem>
  </Timeline>`,methods:[],displayName:"Timeline"};c.__docgenInfo={description:"",methods:[],displayName:"TimelineItem"};d.__docgenInfo={description:"",methods:[],displayName:"TimelineDot",props:{connector:{required:!1,tsType:{name:"boolean"},description:"Whether to draw the connector line beneath the dot.",defaultValue:{value:"true",computed:!1}}}};T.__docgenInfo={description:"",methods:[],displayName:"TimelineContent"};p.__docgenInfo={description:"",methods:[],displayName:"TimelineHeader"};u.__docgenInfo={description:"",methods:[],displayName:"TimelineTitle"};f.__docgenInfo={description:"",methods:[],displayName:"TimelineTime"};x.__docgenInfo={description:"",methods:[],displayName:"TimelineDescription"};const _={title:"Data Display/Timeline",component:m,tags:["autodocs"]},s=[{title:"Order placed",time:"2h ago",desc:"Order #1024 was created."},{title:"Payment received",time:"1h ago",desc:"$250.00 via card."},{title:"Shipped",time:"20m ago",desc:"Tracking #ZX-9911."}],l={render:()=>i.jsx(m,{className:"w-96",children:s.map((e,n)=>i.jsxs(c,{children:[i.jsx(d,{connector:n<s.length-1}),i.jsxs(T,{children:[i.jsxs(p,{children:[i.jsx(u,{children:e.title}),i.jsx(f,{children:e.time})]}),i.jsx(x,{children:e.desc})]})]},e.title))})};var o,r,a;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Timeline className="w-96">
      {EVENTS.map((e, i) => <TimelineItem key={e.title}>
          <TimelineDot connector={i < EVENTS.length - 1} />
          <TimelineContent>
            <TimelineHeader>
              <TimelineTitle>{e.title}</TimelineTitle>
              <TimelineTime>{e.time}</TimelineTime>
            </TimelineHeader>
            <TimelineDescription>{e.desc}</TimelineDescription>
          </TimelineContent>
        </TimelineItem>)}
    </Timeline>
}`,...(a=(r=l.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const y=["Default"];export{l as Default,y as __namedExportsOrder,_ as default};
