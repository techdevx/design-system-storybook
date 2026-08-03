import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{S as j}from"./index-DOqdsVs_.js";import{c as s}from"./utils-DCADjnpI.js";import{b as y}from"./button.variants-CM5mvIUD.js";import{C as I}from"./chevron-left-CCKJ5hat.js";import{C as N}from"./chevron-right-DBiqyVzh.js";import"./index-UiW3gZKV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CkIaN0ex.js";import"./createLucideIcon-BBGjgC4Q.js";function r({className:e,...i}){return n.jsx("nav",{"aria-label":"pagination",className:s("mx-auto flex w-full justify-center",e),...i})}function m({className:e,...i}){return n.jsx("ul",{className:s("flex flex-row items-center gap-1",e),...i})}function a(e){return n.jsx("li",{...e})}function t({className:e,asChild:i=!1,isActive:l,size:P="icon",...h}){const x=i?j:"a";return n.jsx(x,{"aria-current":l?"page":void 0,className:s(y({variant:l?"outline":"ghost",size:P}),e),...h})}function g({className:e,...i}){return n.jsxs(t,{"aria-label":"Go to previous page",size:"md",className:s("gap-1 pl-2.5",e),...i,children:[n.jsx(I,{className:"size-4"}),n.jsx("span",{children:"Previous"})]})}function u({className:e,...i}){return n.jsxs(t,{"aria-label":"Go to next page",size:"md",className:s("gap-1 pr-2.5",e),...i,children:[n.jsx("span",{children:"Next"}),n.jsx(N,{className:"size-4"})]})}function f({className:e,...i}){return n.jsxs("span",{"aria-hidden":!0,className:s("flex size-9 items-center justify-center",e),...i,children:["…",n.jsx("span",{className:"sr-only",children:"More pages"})]})}r.__docgenInfo={description:"Composable pagination. Router-agnostic: pass your own link via `asChild`\n(e.g. Next.js `<Link>`), or use plain buttons with `onClick`.",methods:[],displayName:"Pagination"};m.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};a.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:'VariantProps["size"]',raw:'ButtonVariantProps["size"]'},description:"",defaultValue:{value:'"icon"',computed:!1}}}};g.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:'VariantProps["size"]',raw:'ButtonVariantProps["size"]'},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"PaginationNext",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:'VariantProps["size"]',raw:'ButtonVariantProps["size"]'},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};const w={title:"Data Display/Pagination",component:r,tags:["autodocs"]},o={render:()=>n.jsx(r,{children:n.jsxs(m,{children:[n.jsx(a,{children:n.jsx(g,{href:"#"})}),n.jsx(a,{children:n.jsx(t,{href:"#",children:"1"})}),n.jsx(a,{children:n.jsx(t,{href:"#",isActive:!0,children:"2"})}),n.jsx(a,{children:n.jsx(t,{href:"#",children:"3"})}),n.jsx(a,{children:n.jsx(f,{})}),n.jsx(a,{children:n.jsx(u,{href:"#"})})]})})};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const E=["Default"];export{o as Default,E as __namedExportsOrder,w as default};
