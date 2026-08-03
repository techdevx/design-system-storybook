import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as M}from"./index-CkIaN0ex.js";import{r as U}from"./index-UiW3gZKV.js";import{c as o}from"./utils-DCADjnpI.js";import{L as H}from"./label-C35axE7E.js";import{S as P}from"./separator-DwF5HJ9m.js";import{I as g}from"./input-CTFdAh1p.js";import{C as w}from"./checkbox-B6_V2kJ1.js";import{S as O}from"./switch-C6UxVKcJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DvGxcuUR.js";import"./index-3b7XovMV.js";import"./index-BA8NevWa.js";import"./index-DOqdsVs_.js";import"./index-C54PEBdP.js";import"./index-Df4SqoBz.js";import"./index-BA8a886m.js";import"./index-DFyD2OK_.js";import"./index-CLXXI_3V.js";import"./index-DlT2NeN9.js";import"./check-CjIdO5i9.js";import"./createLucideIcon-BBGjgC4Q.js";function q({className:a,...i}){return e.jsx("fieldset",{"data-slot":"field-set",className:o("flex flex-col gap-6",a),...i})}function G({className:a,variant:i="legend",...l}){return e.jsx("legend",{"data-slot":"field-legend","data-variant":i,className:o("mb-3 font-medium","data-[variant=legend]:text-base data-[variant=label]:text-sm",a),...l})}function x({className:a,...i}){return e.jsx("div",{"data-slot":"field-group",className:o("group/field-group @container/field-group flex w-full flex-col gap-7 [&>[data-slot=field-group]]:gap-4",a),...i})}const B=M("group/field flex w-full gap-3 data-[invalid=true]:text-destructive",{variants:{orientation:{vertical:"flex-col [&>*]:w-full [&>.sr-only]:w-auto",horizontal:["flex-row items-center","[&>[data-slot=field-label]]:flex-auto","has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"],responsive:["flex-col [&>*]:w-full [&>.sr-only]:w-auto","@md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto","@md/field-group:[&>[data-slot=field-label]]:flex-auto","@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"]}},defaultVariants:{orientation:"vertical"}});function n({className:a,orientation:i="vertical",...l}){return e.jsx("div",{role:"group","data-slot":"field","data-orientation":i,className:o(B({orientation:i}),a),...l})}function d({className:a,...i}){return e.jsx("div",{"data-slot":"field-content",className:o("group/field-content flex flex-1 flex-col gap-1.5 leading-snug",a),...i})}function r({className:a,...i}){return e.jsx(H,{"data-slot":"field-label",className:o("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50","has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>[data-slot=field]]:p-4","has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5",a),...i})}function s({className:a,...i}){return e.jsx("p",{"data-slot":"field-description",className:o("text-sm font-normal leading-normal text-muted-foreground","last:mt-0 [&:nth-last-child(2)]:-mt-1 [[data-variant=legend]+&]:-mt-1.5","[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",a),...i})}function T({children:a,className:i,...l}){return e.jsxs("div",{"data-slot":"field-separator","data-content":!!a,className:o("relative -my-2 h-5 text-sm",i),...l,children:[e.jsx(P,{className:"absolute inset-0 top-1/2"}),a&&e.jsx("span",{"data-slot":"field-separator-content",className:"relative mx-auto block w-fit bg-background px-2 text-muted-foreground",children:a})]})}function V({className:a,children:i,errors:l,...A}){const F=U.useMemo(()=>{var b;if(i)return i;if(!l)return null;const c=l.filter(t=>!!(t!=null&&t.message));return c.length===0?null:c.length===1?(b=c[0])==null?void 0:b.message:e.jsx("ul",{className:"ml-4 flex list-disc flex-col gap-1",children:c.map(t=>e.jsx("li",{children:t==null?void 0:t.message},t==null?void 0:t.message))})},[i,l]);return F?e.jsx("div",{role:"alert","data-slot":"field-error",className:o("text-sm font-normal text-destructive",a),...A,children:F}):null}q.__docgenInfo={description:"Semantic `<fieldset>` wrapper for a group of related fields.",methods:[],displayName:"FieldSet"};G.__docgenInfo={description:"Caption for a `FieldSet`.",methods:[],displayName:"FieldLegend",props:{variant:{required:!1,tsType:{name:"union",raw:'"legend" | "label"',elements:[{name:"literal",value:'"legend"'},{name:"literal",value:'"label"'}]},description:"`legend` renders at base size for section headings; `label` matches field labels.",defaultValue:{value:'"legend"',computed:!1}}}};x.__docgenInfo={description:'Stacks multiple `Field`s with consistent rhythm. Registers a container so\n`orientation="responsive"` fields can switch layout on the group\'s width.',methods:[],displayName:"FieldGroup"};n.__docgenInfo={description:"Form-library-agnostic field row: label + control + description + error.\nUnlike the `Form` primitives (which require React Hook Form), `Field` is\nplain markup — wire ids/aria yourself or from any form state.",methods:[],displayName:"Field",props:{"data-invalid":{required:!1,tsType:{name:"boolean"},description:"Marks the whole field invalid (tints label/description); mirror it on the control via `aria-invalid`."},orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}},composes:["FieldVariantProps"]};d.__docgenInfo={description:"Groups label + description when the control sits beside them (e.g. checkbox rows).",methods:[],displayName:"FieldContent"};r.__docgenInfo={description:"`Label` bound to the field; can wrap a nested `Field` to make selectable cards.",methods:[],displayName:"FieldLabel"};s.__docgenInfo={description:"Helper text under the label or control.",methods:[],displayName:"FieldDescription"};T.__docgenInfo={description:'Divider between field groups, with optional centered content ("or").',methods:[],displayName:"FieldSeparator",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};V.__docgenInfo={description:'Validation message slot, announced assertively via `role="alert"`.',methods:[],displayName:"FieldError",props:{errors:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"{ message?: string } | undefined",elements:[{name:"signature",type:"object",raw:"{ message?: string }",signature:{properties:[{key:"message",value:{name:"string",required:!1}}]}},{name:"undefined"}]}],raw:"Array<{ message?: string } | undefined>"},description:`Error objects to render (shape-compatible with React Hook Form / Zod
issues). One error renders inline; several render as a list. Renders
nothing when there is no content, so it can be wired unconditionally.`}}};const he={title:"UI/Field",component:n,tags:["autodocs"]},m={render:()=>e.jsxs(n,{className:"max-w-sm",children:[e.jsx(r,{htmlFor:"field-name",children:"Workspace name"}),e.jsx(g,{id:"field-name",placeholder:"Acme Inc."}),e.jsx(s,{children:"Shown in invoices and shared links."})]})},p={render:()=>e.jsxs(n,{"data-invalid":!0,className:"max-w-sm",children:[e.jsx(r,{htmlFor:"field-email",children:"Email"}),e.jsx(g,{id:"field-email","aria-invalid":!0,defaultValue:"not-an-email"}),e.jsx(V,{errors:[{message:"Enter a valid email address."}]})]})},f={render:()=>e.jsxs(n,{orientation:"horizontal",className:"max-w-sm",children:[e.jsxs(d,{children:[e.jsx(r,{htmlFor:"field-2fa",children:"Two-factor authentication"}),e.jsx(s,{children:"Require a code on every sign-in."})]}),e.jsx(O,{id:"field-2fa"})]})},u={render:()=>e.jsxs(x,{className:"max-w-sm",children:[e.jsxs(q,{children:[e.jsx(G,{children:"Notifications"}),e.jsxs(n,{orientation:"horizontal",children:[e.jsx(w,{id:"field-mentions",defaultChecked:!0}),e.jsxs(d,{children:[e.jsx(r,{htmlFor:"field-mentions",children:"Mentions"}),e.jsx(s,{children:"When someone @mentions you."})]})]}),e.jsxs(n,{orientation:"horizontal",children:[e.jsx(w,{id:"field-digest"}),e.jsxs(d,{children:[e.jsx(r,{htmlFor:"field-digest",children:"Weekly digest"}),e.jsx(s,{children:"A summary every Monday morning."})]})]})]}),e.jsx(T,{children:"or"}),e.jsxs(n,{children:[e.jsx(r,{htmlFor:"field-webhook",children:"Webhook URL"}),e.jsx(g,{id:"field-webhook",placeholder:"https://"}),e.jsx(s,{children:"We POST every event here instead."})]})]})},h={render:()=>e.jsx(x,{className:"max-w-lg",children:e.jsxs(n,{orientation:"responsive",children:[e.jsxs(d,{children:[e.jsx(r,{htmlFor:"field-slug",children:"Public URL slug"}),e.jsx(s,{children:"Stacks on narrow containers, rows on wide ones."})]}),e.jsx(g,{id:"field-slug",placeholder:"acme",className:"@md/field-group:max-w-48"})]})})};var v,j,y;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Field className="max-w-sm">
      <FieldLabel htmlFor="field-name">Workspace name</FieldLabel>
      <Input id="field-name" placeholder="Acme Inc." />
      <FieldDescription>Shown in invoices and shared links.</FieldDescription>
    </Field>
}`,...(y=(j=m.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var N,k,S;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Field data-invalid className="max-w-sm">
      <FieldLabel htmlFor="field-email">Email</FieldLabel>
      <Input id="field-email" aria-invalid defaultValue="not-an-email" />
      <FieldError errors={[{
      message: "Enter a valid email address."
    }]} />
    </Field>
}`,...(S=(k=p.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var L,_,R;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Field orientation="horizontal" className="max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="field-2fa">Two-factor authentication</FieldLabel>
        <FieldDescription>Require a code on every sign-in.</FieldDescription>
      </FieldContent>
      <Switch id="field-2fa" />
    </Field>
}`,...(R=(_=f.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var I,C,D;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <FieldGroup className="max-w-sm">
      <FieldSet>
        <FieldLegend>Notifications</FieldLegend>
        <Field orientation="horizontal">
          <Checkbox id="field-mentions" defaultChecked />
          <FieldContent>
            <FieldLabel htmlFor="field-mentions">Mentions</FieldLabel>
            <FieldDescription>When someone @mentions you.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="field-digest" />
          <FieldContent>
            <FieldLabel htmlFor="field-digest">Weekly digest</FieldLabel>
            <FieldDescription>A summary every Monday morning.</FieldDescription>
          </FieldContent>
        </Field>
      </FieldSet>
      <FieldSeparator>or</FieldSeparator>
      <Field>
        <FieldLabel htmlFor="field-webhook">Webhook URL</FieldLabel>
        <Input id="field-webhook" placeholder="https://" />
        <FieldDescription>We POST every event here instead.</FieldDescription>
      </Field>
    </FieldGroup>
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var W,E,z;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <FieldGroup className="max-w-lg">
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="field-slug">Public URL slug</FieldLabel>
          <FieldDescription>Stacks on narrow containers, rows on wide ones.</FieldDescription>
        </FieldContent>
        <Input id="field-slug" placeholder="acme" className="@md/field-group:max-w-48" />
      </Field>
    </FieldGroup>
}`,...(z=(E=h.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const ge=["Default","WithError","HorizontalSwitchRow","GroupWithFieldSet","Responsive"];export{m as Default,u as GroupWithFieldSet,f as HorizontalSwitchRow,h as Responsive,p as WithError,ge as __namedExportsOrder,he as default};
