import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as B}from"./index-DOqdsVs_.js";import{c as C}from"./index-CkIaN0ex.js";import{c as a}from"./utils-DCADjnpI.js";import{S as V}from"./separator-DwF5HJ9m.js";import{C as S}from"./chevron-right-DBiqyVzh.js";import{c as G}from"./createLucideIcon-BBGjgC4Q.js";import{B as R}from"./button-BksSy-NO.js";import{B as q}from"./bell-BH_PoXQ4.js";import{S as L}from"./switch-C6UxVKcJ.js";import"./index-UiW3gZKV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DvGxcuUR.js";import"./index-3b7XovMV.js";import"./index-BA8NevWa.js";import"./button.variants-CM5mvIUD.js";import"./spinner-Fek3w9J4.js";import"./index-Df4SqoBz.js";import"./index-C54PEBdP.js";import"./index-BA8a886m.js";import"./index-DFyD2OK_.js";import"./index-CLXXI_3V.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],P=G("file-text",H);function T({className:n,...t}){return e.jsx("div",{role:"list","data-slot":"item-group",className:a("group/item-group flex flex-col",n),...t})}function M({className:n,...t}){return e.jsx(V,{"data-slot":"item-separator",orientation:"horizontal",className:a("my-0",n),...t})}const U=C(["group/item flex flex-wrap items-center rounded-md border border-transparent text-sm","outline-none transition-colors duration-100","focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background","[a]:transition-colors [a]:hover:bg-accent/50"],{variants:{variant:{default:"bg-transparent",outline:"border-border",muted:"bg-muted/50"},size:{md:"gap-4 p-4",sm:"gap-2.5 px-4 py-3"}},defaultVariants:{variant:"default",size:"md"}});function i({className:n,variant:t="default",size:m="md",asChild:k=!1,...D}){const A=k?B:"div";return e.jsx(A,{"data-slot":"item","data-variant":t,"data-size":m,className:a(U({variant:t,size:m}),n),...D})}const F=C(["flex shrink-0 items-center justify-center gap-2","group-has-[[data-slot=item-description]]/item:translate-y-0.5","group-has-[[data-slot=item-description]]/item:self-start","[&_svg]:pointer-events-none"],{variants:{variant:{default:"bg-transparent",icon:"size-8 rounded-sm border bg-muted [&_svg:not([class*='size-'])]:size-4",image:"size-10 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover"}},defaultVariants:{variant:"default"}});function f({className:n,variant:t="default",...m}){return e.jsx("div",{"data-slot":"item-media","data-variant":t,className:a(F({variant:t}),n),...m})}function o({className:n,...t}){return e.jsx("div",{"data-slot":"item-content",className:a("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",n),...t})}function s({className:n,...t}){return e.jsx("div",{"data-slot":"item-title",className:a("flex w-fit items-center gap-2 text-sm font-medium leading-snug",n),...t})}function u({className:n,...t}){return e.jsx("p",{"data-slot":"item-description",className:a("line-clamp-2 text-balance text-sm font-normal leading-normal text-muted-foreground","[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",n),...t})}function r({className:n,...t}){return e.jsx("div",{"data-slot":"item-actions",className:a("flex items-center gap-2",n),...t})}T.__docgenInfo={description:"Vertical list container for `Item` rows; announces itself as a list.",methods:[],displayName:"ItemGroup"};M.__docgenInfo={description:"Hairline divider between rows in an `ItemGroup`.",methods:[],displayName:"ItemSeparator"};i.__docgenInfo={description:`Generic content row: media + content + actions. Composes settings rows,
pickers, notification entries — anywhere a labeled row with optional
leading/trailing slots is needed. Use \`asChild\` to make the whole row a
link or button.`,methods:[],displayName:"Item",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render into the child element (Radix Slot) — e.g. an `<a>` or `<button>` row.",defaultValue:{value:"false",computed:!1}},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1}},composes:["ItemVariantProps"]};f.__docgenInfo={description:"Leading slot for an icon, avatar, or image.",methods:[],displayName:"ItemMedia",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};o.__docgenInfo={description:"Flexible middle slot holding `ItemTitle` and `ItemDescription`.",methods:[],displayName:"ItemContent"};s.__docgenInfo={description:"Row title.",methods:[],displayName:"ItemTitle"};u.__docgenInfo={description:"Supporting text under the title; clamps to two lines.",methods:[],displayName:"ItemDescription"};r.__docgenInfo={description:"Trailing slot for buttons, switches, or chevrons.",methods:[],displayName:"ItemActions"};const pe={title:"UI/Item",component:i,tags:["autodocs"]},d={render:()=>e.jsxs(i,{variant:"outline",className:"max-w-md",children:[e.jsx(f,{variant:"icon",children:e.jsx(P,{})}),e.jsxs(o,{children:[e.jsx(s,{children:"Q3 revenue report.pdf"}),e.jsx(u,{children:"Uploaded 2 days ago · 1.4 MB"})]}),e.jsx(r,{children:e.jsx(R,{variant:"outline",size:"sm",children:"Download"})})]})},l={render:()=>e.jsxs(i,{variant:"outline",size:"sm",className:"max-w-md",children:[e.jsx(f,{variant:"icon",children:e.jsx(q,{})}),e.jsxs(o,{children:[e.jsx(s,{children:"Push notifications"}),e.jsx(u,{children:"Get notified when a lead replies."})]}),e.jsx(r,{children:e.jsx(L,{"aria-label":"Toggle push notifications"})})]})},c={render:()=>e.jsx(i,{asChild:!0,variant:"muted",className:"max-w-md",children:e.jsxs("a",{href:"#billing",children:[e.jsxs(o,{children:[e.jsx(s,{children:"Billing"}),e.jsx(u,{children:"Manage your plan and payment methods."})]}),e.jsx(r,{children:e.jsx(S,{className:"size-4 text-muted-foreground"})})]})})},p={render:()=>e.jsx(T,{className:"max-w-md rounded-md border",children:["Profile","Security","Integrations"].map((n,t)=>e.jsxs("div",{children:[t>0&&e.jsx(M,{}),e.jsxs(i,{size:"sm",children:[e.jsx(o,{children:e.jsx(s,{children:n})}),e.jsx(r,{children:e.jsx(S,{className:"size-4 text-muted-foreground"})})]})]},n))})};var h,x,I;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Item variant="outline" className="max-w-md">
      <ItemMedia variant="icon">
        <FileText />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Q3 revenue report.pdf</ItemTitle>
        <ItemDescription>Uploaded 2 days ago · 1.4 MB</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Download
        </Button>
      </ItemActions>
    </Item>
}`,...(I=(x=d.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var g,v,j;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Item variant="outline" size="sm" className="max-w-md">
      <ItemMedia variant="icon">
        <Bell />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Push notifications</ItemTitle>
        <ItemDescription>Get notified when a lead replies.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Switch aria-label="Toggle push notifications" />
      </ItemActions>
    </Item>
}`,...(j=(v=l.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var w,b,y;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Item asChild variant="muted" className="max-w-md">
      <a href="#billing">
        <ItemContent>
          <ItemTitle>Billing</ItemTitle>
          <ItemDescription>Manage your plan and payment methods.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRight className="size-4 text-muted-foreground" />
        </ItemActions>
      </a>
    </Item>
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var N,_,z;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <ItemGroup className="max-w-md rounded-md border">
      {["Profile", "Security", "Integrations"].map((section, i) => <div key={section}>
          {i > 0 && <ItemSeparator />}
          <Item size="sm">
            <ItemContent>
              <ItemTitle>{section}</ItemTitle>
            </ItemContent>
            <ItemActions>
              <ChevronRight className="size-4 text-muted-foreground" />
            </ItemActions>
          </Item>
        </div>)}
    </ItemGroup>
}`,...(z=(_=p.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const ue=["Default","SettingsRow","AsLink","GroupedList"];export{c as AsLink,d as Default,p as GroupedList,l as SettingsRow,ue as __namedExportsOrder,pe as default};
