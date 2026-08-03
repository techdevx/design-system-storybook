import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as t,a as I,b as g,c as d,d as f,e as v,f as y,g as w,h as G,L as A,i as N,j as M,k as B,l as R,m as F,n as L}from"./sidebar-BEfvqi8u.js";import{U as k}from"./users-CD3vSRiu.js";import{C as H}from"./chart-column-BCmL_wW3.js";import{S as P}from"./settings-DOR6zYWK.js";import"./createLucideIcon-BBGjgC4Q.js";import"./index-UiW3gZKV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DOqdsVs_.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";import"./sheet-FkBXWIC-.js";import"./index-Cy11svAx.js";import"./index-Df4SqoBz.js";import"./index-C54PEBdP.js";import"./index-hxPf8f3P.js";import"./index-DFyD2OK_.js";import"./index-BA8a886m.js";import"./index-BEG11rEo.js";import"./index-DvGxcuUR.js";import"./index-3b7XovMV.js";import"./index-BA8NevWa.js";import"./index-zrl4sMk3.js";import"./index-DSIYYQT6.js";import"./index-DM99njto.js";import"./index-DlT2NeN9.js";import"./x-DFvAQ-dX.js";import"./tooltip-CAy3nf-J.js";import"./index-CVEnvSA4.js";import"./index-CLXXI_3V.js";import"./index-DdG3XTBa.js";import"./button-BksSy-NO.js";import"./button.variants-CM5mvIUD.js";import"./spinner-Fek3w9J4.js";const Se={title:"Layouts/Sidebar",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}},C=[{label:"Dashboard",icon:A,active:!0},{label:"Customers",icon:k,badge:"12"},{label:"Analytics",icon:H},{label:"Settings",icon:P}],a={render:()=>e.jsxs(I,{children:[e.jsxs(t,{collapsible:"icon",children:[e.jsxs(g,{className:"flex-row items-center justify-between group-data-[collapsible=icon]:justify-center",children:[e.jsx("span",{className:"text-base font-semibold group-data-[collapsible=icon]:hidden",children:"techdevx"}),e.jsx(d,{})]}),e.jsx(f,{children:e.jsxs(v,{children:[e.jsx(y,{children:"Main"}),e.jsx(w,{children:e.jsx(G,{children:C.map(({label:r,icon:i,active:s,badge:o})=>e.jsxs(N,{children:[e.jsxs(M,{isActive:s,tooltip:r,children:[e.jsx(i,{}),e.jsx("span",{children:r})]}),o&&e.jsx(B,{children:o})]},r))})})]})}),e.jsx(R,{children:e.jsx("span",{className:"text-xs text-muted-foreground group-data-[collapsible=icon]:hidden",children:"v0.3.0"})}),e.jsx(F,{})]}),e.jsxs(L,{children:[e.jsxs("header",{className:"flex h-14 items-center gap-2 border-b border-border px-4",children:[e.jsx(d,{className:"-ml-2"}),e.jsx("span",{className:"text-sm font-medium",children:"Dashboard"})]}),e.jsx("div",{className:"flex-1 p-6 text-sm text-muted-foreground",children:"Resize the preview below 768px to see the mobile sheet behavior."})]})]})},n={render:()=>e.jsx("div",{className:"h-96 overflow-hidden",children:e.jsxs(t,{children:[e.jsx(g,{children:e.jsx("span",{className:"text-base font-semibold",children:"techdevx"})}),e.jsx(f,{children:e.jsx(v,{label:"Main",children:C.map(({label:r,icon:i,active:s})=>e.jsx(N,{children:e.jsxs(M,{isActive:s,children:[e.jsx(i,{}),e.jsx("span",{children:r})]})},r))})})]})})};var l,c,p,b,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader className="flex-row items-center justify-between group-data-[collapsible=icon]:justify-center">
          <span className="text-base font-semibold group-data-[collapsible=icon]:hidden">
            techdevx
          </span>
          {/* A built-in collapse toggle on the sidebar itself; becomes the
              expand button (centered) once the rail is icon-collapsed. */}
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {NAV.map(({
                label,
                icon: Icon,
                active,
                badge
              }) => <SidebarMenuItem key={label}>
                    <SidebarMenuButton isActive={active} tooltip={label}>
                      <Icon />
                      <span>{label}</span>
                    </SidebarMenuButton>
                    {badge && <SidebarMenuBadge>{badge}</SidebarMenuBadge>}
                  </SidebarMenuItem>)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <span className="text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
            v0.3.0
          </span>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b border-border px-4">
          <SidebarTrigger className="-ml-2" />
          <span className="text-sm font-medium">Dashboard</span>
        </header>
        <div className="flex-1 p-6 text-sm text-muted-foreground">
          Resize the preview below 768px to see the mobile sheet behavior.
        </div>
      </SidebarInset>
    </SidebarProvider>
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:`Full chrome: collapsible rail on desktop (toggle with the header button,
the rail edge, or ⌘/Ctrl+B) and an off-canvas sheet on mobile.`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.description}}};var u,h,x,S,j;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="h-96 overflow-hidden">
      <Sidebar>
        <SidebarHeader>
          <span className="text-base font-semibold">techdevx</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup label="Main">
            {NAV.map(({
            label,
            icon: Icon,
            active
          }) => <SidebarMenuItem key={label}>
                <SidebarMenuButton isActive={active}>
                  <Icon />
                  <span>{label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>)}
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Providerless back-compat: a static rail (the pre-0.3 API).",...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.description}}};const je=["FullChrome","StaticRail"];export{a as FullChrome,n as StaticRail,je as __namedExportsOrder,Se as default};
