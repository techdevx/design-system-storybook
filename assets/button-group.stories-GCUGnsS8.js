import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{S as R}from"./index-DOqdsVs_.js";import{c as V}from"./index-CkIaN0ex.js";import{c as p}from"./utils-DCADjnpI.js";import{S as w}from"./separator-DwF5HJ9m.js";import{B as o}from"./button-BksSy-NO.js";import{C as D}from"./chevron-down-BhOb8Bji.js";import"./index-UiW3gZKV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DvGxcuUR.js";import"./index-3b7XovMV.js";import"./index-BA8NevWa.js";import"./button.variants-CM5mvIUD.js";import"./spinner-Fek3w9J4.js";import"./createLucideIcon-BBGjgC4Q.js";const U=V(["flex w-fit items-stretch","[&>*]:focus-visible:relative [&>*]:focus-visible:z-10","has-[>[data-slot=button-group]]:gap-2","[&>input]:flex-1"],{variants:{orientation:{horizontal:"[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",vertical:"flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"}},defaultVariants:{orientation:"horizontal"}});function e({className:r,orientation:n,...a}){return t.jsx("div",{role:"group","data-slot":"button-group","data-orientation":n??"horizontal",className:p(U({orientation:n}),r),...a})}function T({className:r,asChild:n=!1,...a}){const N=n?R:"div";return t.jsx(N,{"data-slot":"button-group-text",className:p("flex items-center gap-2 rounded-md border border-input bg-muted px-4 text-sm font-medium shadow-sm","[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",r),...a})}function _({className:r,orientation:n="vertical",...a}){return t.jsx(w,{"data-slot":"button-group-separator",orientation:n,className:p("!m-0 relative self-stretch bg-input data-[orientation=vertical]:h-auto",r),...a})}e.__docgenInfo={description:"Attaches adjacent buttons (or inputs/selects) into one segmented control:\nshared borders, collapsed inner radii. Nest multiple `ButtonGroup`s to get\nspaced clusters. Purely presentational — selection state belongs to\n`ToggleGroup`.",methods:[],displayName:"ButtonGroup"};T.__docgenInfo={description:'Static text segment inside a `ButtonGroup` (e.g. a prefix like "https://").',methods:[],displayName:"ButtonGroupText",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render into the child element (Radix Slot) for polymorphic composition.",defaultValue:{value:"false",computed:!1}}}};_.__docgenInfo={description:"Divider between attached segments, stretching the group's full height.",methods:[],displayName:"ButtonGroupSeparator",props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};const X={title:"UI/ButtonGroup",component:e,tags:["autodocs"]},i={render:()=>t.jsxs(e,{children:[t.jsx(o,{variant:"outline",children:"Archive"}),t.jsx(o,{variant:"outline",children:"Report"}),t.jsx(o,{variant:"outline",children:"Snooze"})]})},s={render:()=>t.jsxs(e,{children:[t.jsx(o,{children:"Save"}),t.jsx(_,{}),t.jsx(o,{size:"icon","aria-label":"More save options",children:t.jsx(D,{})})]})},u={render:()=>t.jsxs(e,{children:[t.jsx(T,{children:"https://"}),t.jsx(o,{variant:"outline",children:"Copy URL"})]})},l={render:()=>t.jsxs(e,{orientation:"vertical",children:[t.jsx(o,{variant:"outline",children:"Top"}),t.jsx(o,{variant:"outline",children:"Middle"}),t.jsx(o,{variant:"outline",children:"Bottom"})]})},d={render:()=>t.jsxs(e,{children:[t.jsxs(e,{children:[t.jsx(o,{variant:"outline",children:"Cut"}),t.jsx(o,{variant:"outline",children:"Copy"}),t.jsx(o,{variant:"outline",children:"Paste"})]}),t.jsxs(e,{children:[t.jsx(o,{variant:"outline",children:"Undo"}),t.jsx(o,{variant:"outline",children:"Redo"})]})]})};var c,m,B;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button variant="outline">Archive</Button>
      <Button variant="outline">Report</Button>
      <Button variant="outline">Snooze</Button>
    </ButtonGroup>
}`,...(B=(m=i.parameters)==null?void 0:m.docs)==null?void 0:B.source}}};var h,v,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button>Save</Button>
      <ButtonGroupSeparator />
      <Button size="icon" aria-label="More save options">
        <ChevronDown />
      </Button>
    </ButtonGroup>
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,g,j;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <ButtonGroupText>https://</ButtonGroupText>
      <Button variant="outline">Copy URL</Button>
    </ButtonGroup>
}`,...(j=(g=u.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var G,b,S;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
}`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var C,y,z;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Cut</Button>
        <Button variant="outline">Copy</Button>
        <Button variant="outline">Paste</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Undo</Button>
        <Button variant="outline">Redo</Button>
      </ButtonGroup>
    </ButtonGroup>
}`,...(z=(y=d.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};const Y=["Default","SplitButton","WithText","Vertical","NestedClusters"];export{i as Default,d as NestedClusters,s as SplitButton,l as Vertical,u as WithText,Y as __namedExportsOrder,X as default};
