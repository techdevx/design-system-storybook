import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-CHISt2gJ.js";import{S as V}from"./index-BGcWswtl.js";import{c as T}from"./index-CkIaN0ex.js";import{c as a}from"./utils-DCADjnpI.js";import{S as F}from"./separator-F7mA3mvT.js";import{C as M}from"./chevron-right-Bbn_WNoe.js";import{c as q}from"./createLucideIcon-W0-uuUzi.js";import{B as L}from"./button-DCKttsUK.js";import{B as P}from"./bell-uqtozJPH.js";import{S as H}from"./switch-CVrfAj4P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BG9WkkVi.js";import"./index-CHIrpB_0.js";import"./index-fp2UqmYR.js";import"./button.variants-CM5mvIUD.js";import"./spinner-Fek3w9J4.js";import"./index-Df4SqoBz.js";import"./index-9vGS739Q.js";import"./index-Ba3Mue6X.js";import"./index-CuVVNN4Y.js";import"./index-Ch1D9Fwk.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],E=q("file-text",U),k=f.createContext(!1);function D({className:n,...t}){return e.jsx(k.Provider,{value:!0,children:e.jsx("div",{role:"list","data-slot":"item-group",className:a("group/item-group flex flex-col",n),...t})})}function A({className:n,...t}){return e.jsx(F,{"data-slot":"item-separator",orientation:"horizontal",className:a("my-0",n),...t})}const Q=T(["group/item flex flex-wrap items-center rounded-md border border-transparent text-sm","outline-none transition-colors duration-100","focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background","[a]:transition-colors [a]:hover:bg-accent/50"],{variants:{variant:{default:"bg-transparent",outline:"border-border",muted:"bg-muted/50"},size:{md:"gap-4 p-4",sm:"gap-2.5 px-4 py-3"}},defaultVariants:{variant:"default",size:"md"}});function i({className:n,variant:t="default",size:m="md",asChild:x=!1,...G}){const B=x?V:"div",R=f.useContext(k);return e.jsx(B,{role:R&&!x?"listitem":void 0,"data-slot":"item","data-variant":t,"data-size":m,className:a(Q({variant:t,size:m}),n),...G})}const K=T(["flex shrink-0 items-center justify-center gap-2","group-has-[[data-slot=item-description]]/item:translate-y-0.5","group-has-[[data-slot=item-description]]/item:self-start","[&_svg]:pointer-events-none"],{variants:{variant:{default:"bg-transparent",icon:"size-8 rounded-sm border bg-muted [&_svg:not([class*='size-'])]:size-4",image:"size-10 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover"}},defaultVariants:{variant:"default"}});function h({className:n,variant:t="default",...m}){return e.jsx("div",{"data-slot":"item-media","data-variant":t,className:a(K({variant:t}),n),...m})}function r({className:n,...t}){return e.jsx("div",{"data-slot":"item-content",className:a("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",n),...t})}function o({className:n,...t}){return e.jsx("div",{"data-slot":"item-title",className:a("flex w-fit items-center gap-2 text-sm font-medium leading-snug",n),...t})}function u({className:n,...t}){return e.jsx("p",{"data-slot":"item-description",className:a("line-clamp-2 text-balance text-sm font-normal leading-normal text-muted-foreground","[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",n),...t})}function s({className:n,...t}){return e.jsx("div",{"data-slot":"item-actions",className:a("flex items-center gap-2",n),...t})}D.__docgenInfo={description:"Vertical list container for `Item` rows; announces itself as a list, and the `Item`s\ninside it as list items. Keep each `Item` a direct child (use a keyed Fragment, not a\nwrapper `<div>`, when interleaving `ItemSeparator`s).",methods:[],displayName:"ItemGroup"};A.__docgenInfo={description:"Hairline divider between rows in an `ItemGroup`.",methods:[],displayName:"ItemSeparator"};i.__docgenInfo={description:`Generic content row: media + content + actions. Composes settings rows,
pickers, notification entries — anywhere a labeled row with optional
leading/trailing slots is needed. Use \`asChild\` to make the whole row a
link or button.`,methods:[],displayName:"Item",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"Render into the child element (Radix Slot) — e.g. an `<a>` or `<button>` row.",defaultValue:{value:"false",computed:!1}},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1}},composes:["ItemVariantProps"]};h.__docgenInfo={description:"Leading slot for an icon, avatar, or image.",methods:[],displayName:"ItemMedia",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};r.__docgenInfo={description:"Flexible middle slot holding `ItemTitle` and `ItemDescription`.",methods:[],displayName:"ItemContent"};o.__docgenInfo={description:"Row title.",methods:[],displayName:"ItemTitle"};u.__docgenInfo={description:"Supporting text under the title; clamps to two lines.",methods:[],displayName:"ItemDescription"};s.__docgenInfo={description:"Trailing slot for buttons, switches, or chevrons.",methods:[],displayName:"ItemActions"};const he={title:"UI/Item",component:i,tags:["autodocs"]},d={render:()=>e.jsxs(i,{variant:"outline",className:"max-w-md",children:[e.jsx(h,{variant:"icon",children:e.jsx(E,{})}),e.jsxs(r,{children:[e.jsx(o,{children:"Q3 revenue report.pdf"}),e.jsx(u,{children:"Uploaded 2 days ago · 1.4 MB"})]}),e.jsx(s,{children:e.jsx(L,{variant:"outline",size:"sm",children:"Download"})})]})},l={render:()=>e.jsxs(i,{variant:"outline",size:"sm",className:"max-w-md",children:[e.jsx(h,{variant:"icon",children:e.jsx(P,{})}),e.jsxs(r,{children:[e.jsx(o,{children:"Push notifications"}),e.jsx(u,{children:"Get notified when a lead replies."})]}),e.jsx(s,{children:e.jsx(H,{"aria-label":"Toggle push notifications"})})]})},c={render:()=>e.jsx(i,{asChild:!0,variant:"muted",className:"max-w-md",children:e.jsxs("a",{href:"#billing",children:[e.jsxs(r,{children:[e.jsx(o,{children:"Billing"}),e.jsx(u,{children:"Manage your plan and payment methods."})]}),e.jsx(s,{children:e.jsx(M,{className:"size-4 text-muted-foreground"})})]})})},p={render:()=>e.jsx(D,{className:"max-w-md rounded-md border",children:["Profile","Security","Integrations"].map((n,t)=>e.jsxs(f.Fragment,{children:[t>0&&e.jsx(A,{}),e.jsxs(i,{size:"sm",children:[e.jsx(r,{children:e.jsx(o,{children:n})}),e.jsx(s,{children:e.jsx(M,{className:"size-4 text-muted-foreground"})})]})]},n))})};var I,g,v;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(v=(g=d.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var j,w,b;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(b=(w=l.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var y,N,_;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(_=(N=c.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var C,z,S;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <ItemGroup className="max-w-md rounded-md border">
      {["Profile", "Security", "Integrations"].map((section, i) => <React.Fragment key={section}>
          {i > 0 && <ItemSeparator />}
          <Item size="sm">
            <ItemContent>
              <ItemTitle>{section}</ItemTitle>
            </ItemContent>
            <ItemActions>
              <ChevronRight className="size-4 text-muted-foreground" />
            </ItemActions>
          </Item>
        </React.Fragment>)}
    </ItemGroup>
}`,...(S=(z=p.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};const xe=["Default","SettingsRow","AsLink","GroupedList"];export{c as AsLink,d as Default,p as GroupedList,l as SettingsRow,xe as __namedExportsOrder,he as default};
