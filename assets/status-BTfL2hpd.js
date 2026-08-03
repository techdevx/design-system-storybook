import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{c as s}from"./utils-DCADjnpI.js";import{C as u,I as b}from"./info-DNdnAVWe.js";import{C as c,T as p}from"./triangle-alert-pz-xLPtO.js";import{c as v}from"./createLucideIcon-BBGjgC4Q.js";import{P as h}from"./pencil-CK-lSdGr.js";import{C as x}from"./clock-Dwg6zLXy.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],y=v("archive",w),o={success:{label:"Success",dot:"bg-success",badge:"border-success/30 bg-success/10 text-success",icon:"text-success",Icon:c},error:{label:"Error",dot:"bg-destructive",badge:"border-destructive/30 bg-destructive/10 text-destructive",icon:"text-destructive",Icon:u},warning:{label:"Warning",dot:"bg-warning",badge:"border-warning/40 bg-warning/10 text-warning-foreground dark:text-warning",icon:"text-warning",Icon:p},info:{label:"Info",dot:"bg-info",badge:"border-info/30 bg-info/10 text-info",icon:"text-info",Icon:b},pending:{label:"Pending",dot:"bg-warning",badge:"border-warning/40 bg-warning/10 text-warning-foreground dark:text-warning",icon:"text-warning",Icon:x,pulse:!0},draft:{label:"Draft",dot:"bg-muted-foreground",badge:"border-border bg-muted text-muted-foreground",icon:"text-muted-foreground",Icon:h},archived:{label:"Archived",dot:"bg-muted-foreground",badge:"border-border bg-muted text-muted-foreground",icon:"text-muted-foreground",Icon:y},online:{label:"Online",dot:"bg-success",badge:"border-success/30 bg-success/10 text-success",icon:"text-success",Icon:c,pulse:!0},offline:{label:"Offline",dot:"bg-muted-foreground",badge:"border-border bg-muted text-muted-foreground",icon:"text-muted-foreground",Icon:u}};function m({status:n,pulse:t,label:r,className:l,...a}){const e=o[n],g=t??e.pulse,d=r===void 0?e.label:r,f=d===null?{"aria-hidden":!0}:{role:"status","aria-label":d};return i.jsxs("span",{"data-slot":"status-dot","data-status":n,className:s("relative inline-flex size-2 shrink-0",l),...f,...a,children:[g&&i.jsx("span",{"aria-hidden":!0,className:s("absolute inline-flex size-full animate-ping rounded-full opacity-60 motion-reduce:hidden",e.dot)}),i.jsx("span",{"aria-hidden":!0,className:s("relative inline-flex size-2 rounded-full",e.dot)})]})}function I({status:n,hideDot:t,className:r,children:l,...a}){const e=o[n];return i.jsxs("span",{"data-slot":"status-badge","data-status":n,className:s("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",e.badge,r),...a,children:[!t&&i.jsx(m,{status:n,label:null}),l??e.label]})}function T({status:n,label:t,className:r,...l}){const a=o[n],e=t===void 0?a.label:t;return i.jsx(a.Icon,{"data-slot":"status-icon","data-status":n,role:e===null?void 0:"img","aria-label":e??void 0,"aria-hidden":e===null||void 0,className:s("size-4 shrink-0",a.icon,r),...l})}m.__docgenInfo={description:"Small colored dot — for avatars, list rows, and anywhere space is tight.",methods:[],displayName:"StatusDot",props:{status:{required:!0,tsType:{name:"union",raw:`| "success"
| "error"
| "warning"
| "info"
| "pending"
| "draft"
| "archived"
| "online"
| "offline"`,elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"literal",value:'"pending"'},{name:"literal",value:'"draft"'},{name:"literal",value:'"archived"'},{name:"literal",value:'"online"'},{name:"literal",value:'"offline"'}]},description:""},pulse:{required:!1,tsType:{name:"boolean"},description:"Override the liveness pulse (defaults per status: online/pending pulse)."},label:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Accessible label; defaults to the status name. Pass null to mark decorative."}}};I.__docgenInfo={description:"Tinted pill with a dot and label — the standard status rendering in lists and tables.",methods:[],displayName:"StatusBadge",props:{status:{required:!0,tsType:{name:"union",raw:`| "success"
| "error"
| "warning"
| "info"
| "pending"
| "draft"
| "archived"
| "online"
| "offline"`,elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"literal",value:'"pending"'},{name:"literal",value:'"draft"'},{name:"literal",value:'"archived"'},{name:"literal",value:'"online"'},{name:"literal",value:'"offline"'}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom label; defaults to the status name."},hideDot:{required:!1,tsType:{name:"boolean"},description:"Hide the leading dot."}}};T.__docgenInfo={description:"Semantic icon (check, alert, clock, …) in the status color.",methods:[],displayName:"StatusIcon",props:{status:{required:!0,tsType:{name:"union",raw:`| "success"
| "error"
| "warning"
| "info"
| "pending"
| "draft"
| "archived"
| "online"
| "offline"`,elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"literal",value:'"pending"'},{name:"literal",value:'"draft"'},{name:"literal",value:'"archived"'},{name:"literal",value:'"online"'},{name:"literal",value:'"offline"'}]},description:""},label:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Accessible label; defaults to the status name. Pass null to mark decorative."}}};export{I as S,o as a,m as b,T as c};
