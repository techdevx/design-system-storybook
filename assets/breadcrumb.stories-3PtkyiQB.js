import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as g}from"./index-DOqdsVs_.js";import{c as s}from"./utils-DCADjnpI.js";import{C as j}from"./chevron-right-DBiqyVzh.js";import{c as I}from"./createLucideIcon-BBGjgC4Q.js";import"./index-UiW3gZKV.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],L=I("ellipsis",y);function o(r){return e.jsx("nav",{"aria-label":"Breadcrumb",...r})}function B({className:r,...a}){return e.jsx("ol",{className:s("flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground",r),...a})}function c({className:r,...a}){return e.jsx("li",{className:s("inline-flex items-center gap-1.5",r),...a})}function i({className:r,asChild:a=!1,...t}){const h=a?g:"a";return e.jsx(h,{className:s("transition-colors hover:text-foreground",r),...t})}function f({className:r,...a}){return e.jsx("span",{"aria-current":"page",className:s("font-medium text-foreground",r),...a})}function d({className:r,children:a,...t}){return e.jsx("li",{role:"presentation","aria-hidden":!0,className:s("[&>svg]:size-3.5",r),...t,children:a??e.jsx(j,{})})}function x({className:r,...a}){return e.jsxs("span",{role:"presentation","aria-hidden":!0,className:s("flex size-9 items-center justify-center",r),...a,children:[e.jsx(L,{className:"size-4"}),e.jsx("span",{className:"sr-only",children:"More"})]})}o.__docgenInfo={description:`Composable breadcrumb. Apps supply their own link component via \`asChild\`
(e.g. Next.js \`<Link>\`), so the design system stays router-agnostic.

  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbPage>Orders</BreadcrumbPage></BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>`,methods:[],displayName:"Breadcrumb"};B.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};i.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};f.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};x.__docgenInfo={description:"Collapsed crumb for long trails. Wrap in a DropdownMenu to reveal hidden items.",methods:[],displayName:"BreadcrumbEllipsis"};const P={title:"Layouts/Breadcrumb",component:o,tags:["autodocs"]},n={render:()=>e.jsx(o,{children:e.jsxs(B,{children:[e.jsx(c,{children:e.jsx(i,{href:"#",children:"Home"})}),e.jsx(d,{}),e.jsx(c,{children:e.jsx(x,{})}),e.jsx(d,{}),e.jsx(c,{children:e.jsx(i,{href:"#",children:"Orders"})}),e.jsx(d,{}),e.jsx(c,{children:e.jsx(f,{children:"Invoice #1024"})})]})})};var m,u,l,p,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source},description:{story:"A long trail collapsed with BreadcrumbEllipsis.",...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.description}}};const w=["Collapsed"];export{n as Collapsed,w as __namedExportsOrder,P as default};
