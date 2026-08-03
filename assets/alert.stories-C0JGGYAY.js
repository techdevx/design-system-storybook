import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as l}from"./utils-DCADjnpI.js";import{c as g}from"./index-CkIaN0ex.js";import{I as o,C as A}from"./info-DNdnAVWe.js";import{C as m,T as v}from"./triangle-alert-pz-xLPtO.js";import"./createLucideIcon-BBGjgC4Q.js";import"./index-UiW3gZKV.js";import"./_commonjsHelpers-CqkleIqs.js";const x=g(["relative w-full rounded-lg border px-4 py-3 text-sm","[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:size-4","[&>svg+div]:translate-y-[-2px] [&>svg~*]:pl-7"],{variants:{variant:{default:"border-border bg-card text-card-foreground",info:"border-info/40 bg-info/10 text-foreground [&>svg]:text-info",success:"border-success/40 bg-success/10 text-foreground [&>svg]:text-success",warning:"border-warning/40 bg-warning/10 text-foreground [&>svg]:text-warning",destructive:"border-destructive/40 bg-destructive/10 text-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}});function r({className:i,variant:s,...p}){return e.jsx("div",{role:"alert",className:l(x({variant:s}),i),...p})}function t({className:i,...s}){return e.jsx("h5",{className:l("mb-1 font-medium leading-none tracking-tight",i),...s})}function n({className:i,...s}){return e.jsx("div",{className:l("text-sm [&_p]:leading-relaxed",i),...s})}r.__docgenInfo={description:`Inline callout banner. Put an icon as the first child for the leading glyph:

  <Alert variant="warning">
    <TriangleAlert />
    <AlertTitle>Heads up</AlertTitle>
    <AlertDescription>Your trial ends in 3 days.</AlertDescription>
  </Alert>`,methods:[],displayName:"Alert",composes:["AlertVariantProps"]};t.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};n.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const C={title:"UI/Alert",component:r,tags:["autodocs"]},a={render:()=>e.jsxs("div",{className:"grid w-[28rem] gap-4",children:[e.jsxs(r,{children:[e.jsx(o,{}),e.jsx(t,{children:"Heads up"}),e.jsx(n,{children:"This is a default informational alert."})]}),e.jsxs(r,{variant:"info",children:[e.jsx(o,{}),e.jsx(t,{children:"New feature"}),e.jsx(n,{children:"Command palette is now available with ⌘K."})]}),e.jsxs(r,{variant:"success",children:[e.jsx(m,{}),e.jsx(t,{children:"Saved"}),e.jsx(n,{children:"Your changes have been published."})]}),e.jsxs(r,{variant:"warning",children:[e.jsx(v,{}),e.jsx(t,{children:"Trial ending"}),e.jsx(n,{children:"Your trial ends in 3 days."})]}),e.jsxs(r,{variant:"destructive",children:[e.jsx(A,{}),e.jsx(t,{children:"Payment failed"}),e.jsx(n,{children:"We were unable to charge your card."})]})]})};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="grid w-[28rem] gap-4">
      <Alert>
        <Info />
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>This is a default informational alert.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <Info />
        <AlertTitle>New feature</AlertTitle>
        <AlertDescription>Command palette is now available with ⌘K.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CircleCheck />
        <AlertTitle>Saved</AlertTitle>
        <AlertDescription>Your changes have been published.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <TriangleAlert />
        <AlertTitle>Trial ending</AlertTitle>
        <AlertDescription>Your trial ends in 3 days.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlert />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>We were unable to charge your card.</AlertDescription>
      </Alert>
    </div>
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const N=["Variants"];export{a as Variants,N as __namedExportsOrder,C as default};
