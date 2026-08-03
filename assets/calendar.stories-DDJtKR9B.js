import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-UiW3gZKV.js";import{C as s}from"./calendar-Cq_rJ1BG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./button.variants-CM5mvIUD.js";import"./index-CkIaN0ex.js";import"./chevron-left-CCKJ5hat.js";import"./createLucideIcon-BBGjgC4Q.js";import"./chevron-right-DBiqyVzh.js";const v={title:"Forms/Calendar",component:s,tags:["autodocs"]};function x(){const[o,a]=f.useState(new Date(2026,6,29));return r.jsx(s,{mode:"single",selected:o,onSelect:a,className:"rounded-md border"})}const t={render:()=>r.jsx(x,{})},e={render:function(){const[a,D]=f.useState(new Date(2026,6,29));return r.jsx("div",{className:"w-[40rem] max-w-full",children:r.jsx(s,{mode:"single",fullWidth:!0,selected:a,onSelect:D,className:"rounded-md border"})})}};var d,n,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <CalendarDemo />
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,c,i,u,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function FullWidthDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 6, 29));
    return <div className="w-[40rem] max-w-full">
        <Calendar mode="single" fullWidth selected={date} onSelect={setDate} className="rounded-md border" />
      </div>;
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source},description:{story:"`fullWidth` stretches the grid to fill a wide container (e.g. a card).",...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};const E=["Default","FullWidth"];export{t as Default,e as FullWidth,E as __namedExportsOrder,v as default};
