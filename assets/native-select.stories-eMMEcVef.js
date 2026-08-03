import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as o}from"./utils-DCADjnpI.js";import{C as y}from"./chevron-down-BhOb8Bji.js";import{L as g}from"./label-C35axE7E.js";import"./createLucideIcon-BBGjgC4Q.js";import"./index-UiW3gZKV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DvGxcuUR.js";import"./index-3b7XovMV.js";import"./index-BA8NevWa.js";import"./index-DOqdsVs_.js";function r({className:m,selectClassName:v,ref:h,children:f,...b}){return e.jsxs("div",{"data-slot":"native-select",className:o("relative w-full",m),children:[e.jsx("select",{ref:h,className:o("h-9 w-full appearance-none rounded-md border border-input bg-background pl-3 pr-8 text-sm shadow-sm outline-none","focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background","disabled:cursor-not-allowed disabled:opacity-50","aria-[invalid=true]:border-destructive",v),...b,children:f}),e.jsx(y,{"aria-hidden":!0,className:"pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 opacity-50"})]})}r.__docgenInfo={description:"A styled native `<select>`. Server-safe (no client boundary) and matched to\n`SelectTrigger`'s look. Prefer this over the Radix `Select` for simple option\nlists and on mobile, where it opens the OS wheel picker. Pass `<option>` /\n`<optgroup>` as children.",methods:[],displayName:"NativeSelect",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLSelectElement>",elements:[{name:"HTMLSelectElement"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"Class for the outer wrapper (controls width)."},selectClassName:{required:!1,tsType:{name:"string"},description:"Class for the `<select>` control itself."}}};const B={title:"UI/NativeSelect",component:r,tags:["autodocs"]},t={render:()=>e.jsx("div",{className:"w-64",children:e.jsxs(r,{defaultValue:"banana","aria-label":"Fruit",children:[e.jsx("option",{value:"apple",children:"Apple"}),e.jsx("option",{value:"banana",children:"Banana"}),e.jsx("option",{value:"cherry",children:"Cherry"})]})})},a={render:()=>e.jsxs("div",{className:"w-64 space-y-2",children:[e.jsx(g,{htmlFor:"country",children:"Country"}),e.jsxs(r,{id:"country",name:"country",defaultValue:"",children:[e.jsx("option",{value:"",disabled:!0,children:"Select a country…"}),e.jsx("option",{value:"us",children:"United States"}),e.jsx("option",{value:"my",children:"Malaysia"}),e.jsx("option",{value:"sg",children:"Singapore"})]})]})};var n,i,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <NativeSelect defaultValue="banana" aria-label="Fruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="cherry">Cherry</option>
      </NativeSelect>
    </div>
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,c,p,d,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="w-64 space-y-2">
      <Label htmlFor="country">Country</Label>
      <NativeSelect id="country" name="country" defaultValue="">
        <option value="" disabled>
          Select a country…
        </option>
        <option value="us">United States</option>
        <option value="my">Malaysia</option>
        <option value="sg">Singapore</option>
      </NativeSelect>
    </div>
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:"As a labelled form field. On mobile this opens the native OS picker.",...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.description}}};const E=["Basic","WithLabel"];export{t as Basic,a as WithLabel,E as __namedExportsOrder,B as default};
