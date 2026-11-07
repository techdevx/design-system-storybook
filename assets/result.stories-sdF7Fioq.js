import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as p}from"./utils-DCADjnpI.js";import{c as i}from"./createLucideIcon-W0-uuUzi.js";import{T as I}from"./triangle-alert-DbmWGjbs.js";import{I as C}from"./info-Ift5Lyrf.js";import{C as E}from"./circle-check-1tSnSViv.js";import{B as t}from"./button-DCKttsUK.js";import"./index-CHISt2gJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BGcWswtl.js";import"./button.variants-CM5mvIUD.js";import"./index-CkIaN0ex.js";import"./spinner-Fek3w9J4.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],M=i("circle-x",F);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],z=i("search-x",A);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]],P=i("server-crash",D);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],G=i("shield-alert",V),$={success:{icon:E,className:"bg-success/10 text-success"},error:{icon:M,className:"bg-destructive/10 text-destructive"},info:{icon:C,className:"bg-info/10 text-info"},warning:{icon:I,className:"bg-warning/10 text-warning"},403:{icon:G,className:"bg-warning/10 text-warning"},404:{icon:z,className:"bg-muted text-muted-foreground"},500:{icon:P,className:"bg-destructive/10 text-destructive"}};function B({status:s="info",title:S,description:c,icon:l,actions:d,className:T,children:u,..._}){const m=$[s],q=m.icon;return e.jsxs("div",{"data-slot":"result","data-status":s,className:p("mx-auto flex w-full max-w-md flex-col items-center px-4 py-10 text-center sm:py-16",T),..._,children:[l!==null&&e.jsx("div",{"data-slot":"result-icon","aria-hidden":!0,className:p("mb-5 flex size-16 items-center justify-center rounded-full [&_svg]:size-8",m.className),children:l??e.jsx(q,{})}),/(403|404|500)/.test(s)&&e.jsx("p",{className:"mb-1 text-sm font-semibold tabular-nums text-muted-foreground",children:s}),e.jsx("h2",{className:"text-balance text-xl font-semibold tracking-tight text-foreground sm:text-2xl",children:S}),c&&e.jsx("p",{className:"mt-2 text-pretty text-sm text-muted-foreground sm:text-base",children:c}),u&&e.jsx("div",{className:"mt-6 w-full text-left",children:u}),d&&e.jsx("div",{"data-slot":"result-actions",className:"mt-6 flex w-full flex-col-reverse gap-2 sm:w-auto sm:flex-row sm:justify-center [&>*]:w-full sm:[&>*]:w-auto",children:d})]})}B.__docgenInfo={description:`Full-section outcome screen: success after a submit, or a 403/404/500 page.
For "nothing here yet" use \`EmptyState\`; for inline notices use \`Alert\`.
Server-safe. Extra detail (error id, receipt…) goes in \`children\`.

  <Result status="404" title="Page not found"
    description="The page you're looking for doesn't exist."
    actions={<Button asChild><a href="/">Back home</a></Button>} />`,methods:[],displayName:"Result",props:{status:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "info" | "warning" | "403" | "404" | "500"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"403"'},{name:"literal",value:'"404"'},{name:"literal",value:'"500"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Replace the status glyph (pass `null` to hide it)."},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Buttons / links. Stack full-width on phones, inline from `sm:`."}},composes:["Omit"]};const se={title:"UI/Result",component:B,tags:["autodocs"],args:{status:"success",title:"Payment received",description:"Invoice INV-2041 has been marked as paid."},argTypes:{status:{control:"select",options:["success","error","info","warning","403","404","500"]}}},a={args:{actions:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",children:"Download receipt"}),e.jsx(t,{children:"Back to invoices"})]})}},o={args:{status:"404",title:"Page not found",description:"The page you're looking for doesn't exist or was moved.",actions:e.jsx(t,{children:"Go home"})}},r={args:{status:"403",title:"You don't have access",description:"Ask a workspace admin to grant you the Billing role.",actions:e.jsx(t,{variant:"outline",children:"Request access"})}},n={args:{status:"500",title:"Something went wrong",description:"We've been notified and are looking into it.",children:e.jsx("p",{className:"rounded-md bg-muted px-3 py-2 font-mono text-xs text-muted-foreground",children:"Error ID: 7f3c9a1e"}),actions:e.jsx(t,{children:"Try again"})}};var h,g,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    actions: <>
        <Button variant="outline">Download receipt</Button>
        <Button>Back to invoices</Button>
      </>
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,y,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: "404",
    title: "Page not found",
    description: "The page you're looking for doesn't exist or was moved.",
    actions: <Button>Go home</Button>
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var k,w,N;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    status: "403",
    title: "You don't have access",
    description: "Ask a workspace admin to grant you the Billing role.",
    actions: <Button variant="outline">Request access</Button>
  }
}`,...(N=(w=r.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var b,R,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    status: "500",
    title: "Something went wrong",
    description: "We've been notified and are looking into it.",
    children: <p className="rounded-md bg-muted px-3 py-2 font-mono text-xs text-muted-foreground">
        Error ID: 7f3c9a1e
      </p>,
    actions: <Button>Try again</Button>
  }
}`,...(j=(R=n.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const ae=["Success","NotFound","Forbidden","ServerError"];export{r as Forbidden,o as NotFound,n as ServerError,a as Success,ae as __namedExportsOrder,se as default};
