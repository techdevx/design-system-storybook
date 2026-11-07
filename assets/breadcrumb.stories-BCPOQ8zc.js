import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as g}from"./index-BGcWswtl.js";import{c as s}from"./utils-DCADjnpI.js";import{C as j}from"./chevron-right-Bbn_WNoe.js";import{E as I}from"./ellipsis-DXPItHoJ.js";import"./index-CHISt2gJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-W0-uuUzi.js";function c(r){return e.jsx("nav",{"aria-label":"Breadcrumb",...r})}function B({className:r,...a}){return e.jsx("ol",{className:s("flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground",r),...a})}function d({className:r,...a}){return e.jsx("li",{className:s("inline-flex items-center gap-1.5",r),...a})}function o({className:r,asChild:a=!1,...m}){const x=a?g:"a";return e.jsx(x,{className:s("transition-colors hover:text-foreground",r),...m})}function f({className:r,...a}){return e.jsx("span",{"aria-current":"page",className:s("font-medium text-foreground",r),...a})}function t({className:r,children:a,...m}){return e.jsx("li",{role:"presentation","aria-hidden":!0,className:s("[&>svg]:size-3.5",r),...m,children:a??e.jsx(j,{})})}function h({className:r,...a}){return e.jsxs("span",{role:"presentation","aria-hidden":!0,className:s("flex size-9 items-center justify-center",r),...a,children:[e.jsx(I,{className:"size-4"}),e.jsx("span",{className:"sr-only",children:"More"})]})}c.__docgenInfo={description:`Composable breadcrumb. Apps supply their own link component via \`asChild\`
(e.g. Next.js \`<Link>\`), so the design system stays router-agnostic.

  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbPage>Orders</BreadcrumbPage></BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>`,methods:[],displayName:"Breadcrumb"};B.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};o.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};f.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};t.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};h.__docgenInfo={description:"Collapsed crumb for long trails. Wrap in a DropdownMenu to reveal hidden items.",methods:[],displayName:"BreadcrumbEllipsis"};const E={title:"Layouts/Breadcrumb",component:c,tags:["autodocs"]},n={render:()=>e.jsx(c,{children:e.jsxs(B,{children:[e.jsx(d,{children:e.jsx(o,{href:"#",children:"Home"})}),e.jsx(t,{}),e.jsx(d,{children:e.jsx(h,{})}),e.jsx(t,{}),e.jsx(d,{children:e.jsx(o,{href:"#",children:"Orders"})}),e.jsx(t,{}),e.jsx(d,{children:e.jsx(f,{children:"Invoice #1024"})})]})})};var i,u,l,p,b;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Orders</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Invoice #1024</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source},description:{story:"A long trail collapsed with BreadcrumbEllipsis.",...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.description}}};const P=["Collapsed"];export{n as Collapsed,P as __namedExportsOrder,E as default};
