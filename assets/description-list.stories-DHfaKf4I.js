import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as l}from"./utils-DCADjnpI.js";import{B as T}from"./badge-CI4wR6Ju.js";import"./index-DOqdsVs_.js";import"./index-UiW3gZKV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CkIaN0ex.js";function n({orientation:r="stacked",className:i,...d}){return e.jsx("dl",{"data-slot":"description-list","data-orientation":r,className:l("group/description-list text-sm",r==="stacked"&&"flex flex-col gap-4",r==="horizontal"&&"grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-[minmax(8rem,auto)_1fr] sm:gap-y-3",i),...d})}function s({className:r,...i}){return e.jsx("div",{"data-slot":"description-group",className:l("flex flex-col gap-1","group-data-[orientation=horizontal]/description-list:grid group-data-[orientation=horizontal]/description-list:grid-cols-subgrid group-data-[orientation=horizontal]/description-list:sm:col-span-2",r),...i})}function t({className:r,...i}){return e.jsx("dt",{"data-slot":"description-term",className:l("font-medium text-muted-foreground",r),...i})}function o({className:r,...i}){return e.jsx("dd",{"data-slot":"description-details",className:l("text-foreground [&:not(:last-child)]:mb-0",r),...i})}n.__docgenInfo={description:"Semantic `<dl>` for label/value pairs — record detail panels, order\nsummaries, metadata blocks. Compose with `DescriptionTerm` +\n`DescriptionDetails` pairs (or `DescriptionGroup` when styling rows).",methods:[],displayName:"DescriptionList",props:{orientation:{required:!1,tsType:{name:"union",raw:'"stacked" | "horizontal"',elements:[{name:"literal",value:'"stacked"'},{name:"literal",value:'"horizontal"'}]},description:"`stacked` puts terms above details (mobile-friendly default);\n`horizontal` puts them side by side from `sm:` up while staying stacked\non narrow screens.",defaultValue:{value:'"stacked"',computed:!1}}}};s.__docgenInfo={description:"Optional wrapper for one term/details pair (useful for row borders).",methods:[],displayName:"DescriptionGroup"};t.__docgenInfo={description:"The label of a pair.",methods:[],displayName:"DescriptionTerm"};o.__docgenInfo={description:"The value of a pair.",methods:[],displayName:"DescriptionDetails"};const L={title:"UI/DescriptionList",component:n,tags:["autodocs"]},a={render:()=>e.jsxs(n,{className:"max-w-sm",children:[e.jsxs(s,{children:[e.jsx(t,{children:"Customer"}),e.jsx(o,{children:"Acme Corp"})]}),e.jsxs(s,{children:[e.jsx(t,{children:"Status"}),e.jsx(o,{children:e.jsx(T,{children:"Active"})})]}),e.jsxs(s,{children:[e.jsx(t,{children:"ARR"}),e.jsx(o,{children:"$48,000"})]})]})},c={render:()=>e.jsxs(n,{orientation:"horizontal",className:"max-w-lg",children:[e.jsxs(s,{children:[e.jsx(t,{children:"Order"}),e.jsx(o,{children:"#10422"})]}),e.jsxs(s,{children:[e.jsx(t,{children:"Placed"}),e.jsx(o,{children:"Aug 1, 2026"})]}),e.jsxs(s,{children:[e.jsx(t,{children:"Shipping address"}),e.jsx(o,{children:"1 Infinite Loop, Cupertino, CA 95014"})]})]})},p={render:()=>e.jsx(n,{orientation:"horizontal",className:"max-w-lg gap-y-0",children:["Plan|Pro","Seats|12","Renewal|Sep 30, 2026"].map(r=>{const[i,d]=r.split("|");return e.jsxs(s,{className:"border-b border-border py-3 last:border-0",children:[e.jsx(t,{children:i}),e.jsx(o,{children:d})]},i)})})};var m,D,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <DescriptionList className="max-w-sm">
      <DescriptionGroup>
        <DescriptionTerm>Customer</DescriptionTerm>
        <DescriptionDetails>Acme Corp</DescriptionDetails>
      </DescriptionGroup>
      <DescriptionGroup>
        <DescriptionTerm>Status</DescriptionTerm>
        <DescriptionDetails>
          <Badge>Active</Badge>
        </DescriptionDetails>
      </DescriptionGroup>
      <DescriptionGroup>
        <DescriptionTerm>ARR</DescriptionTerm>
        <DescriptionDetails>$48,000</DescriptionDetails>
      </DescriptionGroup>
    </DescriptionList>
}`,...(u=(D=a.parameters)==null?void 0:D.docs)==null?void 0:u.source}}};var h,x,g;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <DescriptionList orientation="horizontal" className="max-w-lg">
      <DescriptionGroup>
        <DescriptionTerm>Order</DescriptionTerm>
        <DescriptionDetails>#10422</DescriptionDetails>
      </DescriptionGroup>
      <DescriptionGroup>
        <DescriptionTerm>Placed</DescriptionTerm>
        <DescriptionDetails>Aug 1, 2026</DescriptionDetails>
      </DescriptionGroup>
      <DescriptionGroup>
        <DescriptionTerm>Shipping address</DescriptionTerm>
        <DescriptionDetails>1 Infinite Loop, Cupertino, CA 95014</DescriptionDetails>
      </DescriptionGroup>
    </DescriptionList>
}`,...(g=(x=c.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,j,w;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <DescriptionList orientation="horizontal" className="max-w-lg gap-y-0">
      {["Plan|Pro", "Seats|12", "Renewal|Sep 30, 2026"].map(row => {
      const [term, details] = row.split("|");
      return <DescriptionGroup key={term} className="border-b border-border py-3 last:border-0">
            <DescriptionTerm>{term}</DescriptionTerm>
            <DescriptionDetails>{details}</DescriptionDetails>
          </DescriptionGroup>;
    })}
    </DescriptionList>
}`,...(w=(j=p.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const _=["Stacked","Horizontal","WithRowBorders"];export{c as Horizontal,a as Stacked,p as WithRowBorders,_ as __namedExportsOrder,L as default};
