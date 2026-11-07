import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{N as o}from"./native-select-B-pgS4k0.js";import{L as u}from"./label-OrgRrHS3.js";import"./utils-DCADjnpI.js";import"./chevron-down-BDzeEG0O.js";import"./createLucideIcon-W0-uuUzi.js";import"./index-CHISt2gJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BG9WkkVi.js";import"./index-CHIrpB_0.js";import"./index-fp2UqmYR.js";import"./index-BGcWswtl.js";const w={title:"UI/NativeSelect",component:o,tags:["autodocs"]},t={render:()=>e.jsx("div",{className:"w-64",children:e.jsxs(o,{defaultValue:"banana","aria-label":"Fruit",children:[e.jsx("option",{value:"apple",children:"Apple"}),e.jsx("option",{value:"banana",children:"Banana"}),e.jsx("option",{value:"cherry",children:"Cherry"})]})})},a={render:()=>e.jsxs("div",{className:"w-64 space-y-2",children:[e.jsx(u,{htmlFor:"country",children:"Country"}),e.jsxs(o,{id:"country",name:"country",defaultValue:"",children:[e.jsx("option",{value:"",disabled:!0,children:"Select a country…"}),e.jsx("option",{value:"us",children:"United States"}),e.jsx("option",{value:"my",children:"Malaysia"}),e.jsx("option",{value:"sg",children:"Singapore"})]})]})};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <NativeSelect defaultValue="banana" aria-label="Fruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="cherry">Cherry</option>
      </NativeSelect>
    </div>
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var s,l,p,c,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source},description:{story:"As a labelled form field. On mobile this opens the native OS picker.",...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.description}}};const B=["Basic","WithLabel"];export{t as Basic,a as WithLabel,B as __namedExportsOrder,w as default};
