import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as i}from"./utils-DCADjnpI.js";import{S as _}from"./index-DOqdsVs_.js";import{c as B}from"./index-CkIaN0ex.js";import{a as q,n as L,c as M,S as N,b as w,d as R,e as C,L as A,i as z,j as V,o as d}from"./sidebar-BEfvqi8u.js";import{B as I}from"./button-BksSy-NO.js";import{U as P}from"./users-CD3vSRiu.js";import{c as G}from"./createLucideIcon-BBGjgC4Q.js";import{S as k}from"./settings-DOR6zYWK.js";import"./index-UiW3gZKV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./sheet-FkBXWIC-.js";import"./index-Cy11svAx.js";import"./index-Df4SqoBz.js";import"./index-C54PEBdP.js";import"./index-hxPf8f3P.js";import"./index-DFyD2OK_.js";import"./index-BA8a886m.js";import"./index-BEG11rEo.js";import"./index-DvGxcuUR.js";import"./index-3b7XovMV.js";import"./index-BA8NevWa.js";import"./index-zrl4sMk3.js";import"./index-DSIYYQT6.js";import"./index-DM99njto.js";import"./index-DlT2NeN9.js";import"./x-DFvAQ-dX.js";import"./tooltip-CAy3nf-J.js";import"./index-CVEnvSA4.js";import"./index-CLXXI_3V.js";import"./index-DdG3XTBa.js";import"./button.variants-CM5mvIUD.js";import"./spinner-Fek3w9J4.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],D=G("package",O);function m({sidebar:a,className:r,children:t,...s}){return e.jsxs("div",{className:i("flex h-dvh w-full overflow-hidden bg-background",r),...s,children:[a?e.jsx("div",{className:"shrink-0",children:a}):null,e.jsx("div",{className:"flex min-w-0 flex-1 flex-col",children:t})]})}function c({className:a,...r}){return e.jsx("main",{className:i("flex-1 overflow-y-auto focus:outline-none",a),tabIndex:-1,...r})}m.__docgenInfo={description:`Top-level page skeleton: an optional fixed sidebar next to a scrollable main
column. Pure structure — it holds no navigation data or app state.`,methods:[],displayName:"AppShell",props:{sidebar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Left navigation rail (typically a <Sidebar />). Omit for a topbar-only app."}}};c.__docgenInfo={description:"Scrollable main region that sits below the header inside the shell.",methods:[],displayName:"ContentArea"};const U=B("mx-auto w-full px-4 sm:px-6 lg:px-8",{variants:{size:{sm:"max-w-3xl",md:"max-w-5xl",lg:"max-w-7xl",full:"max-w-none"}},defaultVariants:{size:"lg"}});function p({className:a,size:r,asChild:t=!1,...s}){const n=t?_:"div";return e.jsx(n,{className:i(U({size:r}),a),...s})}p.__docgenInfo={description:"Horizontally-centered, width-constrained content wrapper.",methods:[],displayName:"Container",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};function H({sidebar:a,header:r,containerSize:t="full",collapsible:s=!1,children:n}){return s?e.jsxs(q,{className:"h-dvh overflow-hidden",children:[a,e.jsxs(L,{className:"min-h-0",children:[e.jsxs("div",{className:"flex min-h-14 shrink-0 items-stretch border-b border-border bg-background [&>*:last-child]:flex-1 [&>*:last-child]:border-b-0",children:[e.jsx("div",{className:"flex items-center pl-2",children:e.jsx(M,{})}),r]}),e.jsx(c,{children:e.jsx(p,{size:t,className:"py-6",children:n})})]})]}):e.jsxs(m,{sidebar:a,children:[r,e.jsx(c,{children:e.jsx(p,{size:t,className:"py-6",children:n})})]})}H.__docgenInfo={description:`Opinionated convenience over AppShell for the common "sidebar + header +
padded content" dashboard. Thin by design — for full control, compose
AppShell / ContentArea / Container yourself (or SidebarProvider /
SidebarInset for the collapsible variant).`,methods:[],displayName:"DashboardLayout",props:{sidebar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Navigation rail — usually a composed <Sidebar />."},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Top bar — usually a composed <Header />."},containerSize:{required:!1,tsType:{name:'ReactComponentProps["size"]',raw:'React.ComponentProps<typeof Container>["size"]'},description:"Constrain the content width. Defaults to a wide dashboard column.",defaultValue:{value:'"full"',computed:!1}},collapsible:{required:!1,tsType:{name:"boolean"},description:"Collapsible sidebar chrome: wraps everything in a `SidebarProvider` and\nauto-adds a `SidebarTrigger` next to the header. The sidebar minimizes to\nan icons-only rail on desktop (toggle button, rail edge, or ⌘/Ctrl+B) and\nbecomes an off-canvas sheet below 768px. Off by default: without it the\nlayout renders the static `AppShell` composition.",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function h({className:a,sticky:r=!0,children:t,...s}){return e.jsx("header",{className:i("flex h-14 items-center gap-4 border-b border-border bg-background px-4",r&&"sticky top-0 z-30",a),...s,children:t})}h.__docgenInfo={description:`App top bar. Presentational shell only — apps drop in their own nav, search,
and user menu as children.`,methods:[],displayName:"Header",props:{sticky:{required:!1,tsType:{name:"boolean"},description:"Render sticky to the top of the scroll container.",defaultValue:{value:"true",computed:!1}}}};function b({title:a,description:r,actions:t,className:s,children:n,...T}){return e.jsxs("div",{className:i("flex flex-col gap-4 pb-6 sm:flex-row sm:items-center sm:justify-between",s),...T,children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h1",{className:"text-2xl font-semibold tracking-tight text-foreground",children:a}),r?e.jsx("p",{className:"text-sm text-muted-foreground",children:r}):null,n]}),t?e.jsx("div",{className:"flex items-center gap-2",children:t}):null]})}b.__docgenInfo={description:`Standard page title block: heading + optional description on the left,
actions on the right. Keeps every page's masthead visually consistent.`,methods:[],displayName:"PageHeader",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Right-aligned actions (buttons, menus)."}},composes:["Omit"]};const Ne={title:"Layouts/AppShell",parameters:{layout:"fullscreen"}},l={render:()=>e.jsxs(m,{sidebar:e.jsxs(N,{children:[e.jsx(w,{children:e.jsx("span",{className:"font-semibold",children:"Acme"})}),e.jsx(R,{children:e.jsxs(C,{label:"Main",children:[e.jsxs(d,{active:!0,children:[e.jsx(A,{}),e.jsx("span",{children:"Dashboard"})]}),e.jsxs(d,{children:[e.jsx(P,{}),e.jsx("span",{children:"Customers"})]}),e.jsxs(d,{children:[e.jsx(D,{}),e.jsx("span",{children:"Products"})]}),e.jsxs(d,{children:[e.jsx(k,{}),e.jsx("span",{children:"Settings"})]})]})})]}),children:[e.jsx(h,{children:e.jsx("span",{className:"text-sm text-muted-foreground",children:"techdevx / dashboard"})}),e.jsxs(c,{className:"p-6",children:[e.jsx(b,{title:"Dashboard",description:"An overview of everything happening today.",actions:e.jsx(I,{children:"New report"})}),e.jsx("div",{className:"rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground",children:"Page content goes here."})]})]})},o={render:()=>e.jsxs(H,{collapsible:!0,sidebar:e.jsxs(N,{children:[e.jsx(w,{children:e.jsx("span",{className:"font-semibold group-data-[collapsible=icon]:hidden",children:"Acme"})}),e.jsx(R,{children:e.jsx(C,{label:"Main",children:[{label:"Dashboard",icon:A,active:!0},{label:"Customers",icon:P},{label:"Products",icon:D},{label:"Settings",icon:k}].map(({label:a,icon:r,active:t})=>e.jsx(z,{children:e.jsxs(V,{isActive:t,tooltip:a,children:[e.jsx(r,{}),e.jsx("span",{children:a})]})},a))})})]}),header:e.jsx(h,{children:e.jsx("span",{className:"text-sm text-muted-foreground",children:"techdevx / dashboard"})}),children:[e.jsx(b,{title:"Dashboard",description:"Collapse the sidebar with the toggle, the rail edge, or ⌘/Ctrl+B.",actions:e.jsx(I,{children:"New report"})}),e.jsx("div",{className:"rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground",children:"Page content goes here."})]})};var u,x,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <AppShell sidebar={<Sidebar>
          <SidebarHeader>
            <span className="font-semibold">Acme</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup label="Main">
              <SidebarItem active>
                <LayoutDashboard />
                <span>Dashboard</span>
              </SidebarItem>
              <SidebarItem>
                <Users />
                <span>Customers</span>
              </SidebarItem>
              <SidebarItem>
                <Package />
                <span>Products</span>
              </SidebarItem>
              <SidebarItem>
                <Settings />
                <span>Settings</span>
              </SidebarItem>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>}>
      <Header>
        <span className="text-sm text-muted-foreground">techdevx / dashboard</span>
      </Header>
      <ContentArea className="p-6">
        <PageHeader title="Dashboard" description="An overview of everything happening today." actions={<Button>New report</Button>} />
        <div className="rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          Page content goes here.
        </div>
      </ContentArea>
    </AppShell>
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,S,v,j,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <DashboardLayout collapsible sidebar={<Sidebar>
          <SidebarHeader>
            <span className="font-semibold group-data-[collapsible=icon]:hidden">Acme</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup label="Main">
              {[{
          label: "Dashboard",
          icon: LayoutDashboard,
          active: true
        }, {
          label: "Customers",
          icon: Users
        }, {
          label: "Products",
          icon: Package
        }, {
          label: "Settings",
          icon: Settings
        }].map(({
          label,
          icon: Icon,
          active
        }) => <SidebarMenuItem key={label}>
                  <SidebarMenuButton isActive={active} tooltip={label}>
                    <Icon />
                    <span>{label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>)}
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>} header={<Header>
          <span className="text-sm text-muted-foreground">techdevx / dashboard</span>
        </Header>}>
      <PageHeader title="Dashboard" description="Collapse the sidebar with the toggle, the rail edge, or ⌘/Ctrl+B." actions={<Button>New report</Button>} />
      <div className="rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
        Page content goes here.
      </div>
    </DashboardLayout>
}`,...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source},description:{story:"DashboardLayout with `collapsible`: the sidebar minimizes to an icons-only\nrail (auto trigger, rail edge, or ⌘/Ctrl+B) and becomes an off-canvas sheet\nbelow 768px. Give menu buttons a `tooltip` so labels survive icon mode.",...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.description}}};const we=["DashboardShell","CollapsibleDashboard"];export{o as CollapsibleDashboard,l as DashboardShell,we as __namedExportsOrder,Ne as default};
