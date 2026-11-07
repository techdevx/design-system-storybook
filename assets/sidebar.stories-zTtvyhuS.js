import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as s,a as I,b as g,c as d,d as f,e as v,f as y,g as w,h as G,L as A,i as N,j as M,k as B,l as R,m as F,n as L}from"./sidebar-C9WppH4B.js";import{U as k}from"./users-D-MgXAB1.js";import{C as H}from"./chart-column-CWh6bUOo.js";import{S as P}from"./settings-B6h7RodP.js";import"./createLucideIcon-W0-uuUzi.js";import"./index-CHISt2gJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BGcWswtl.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";import"./use-is-mobile-vUYNYGKX.js";import"./sheet-C-nN7oZc.js";import"./index-Dz2xeh97.js";import"./index-Df4SqoBz.js";import"./index-9vGS739Q.js";import"./index-LbuuwEcL.js";import"./index-CuVVNN4Y.js";import"./index-Ba3Mue6X.js";import"./index-Dy-eJbCI.js";import"./index-BG9WkkVi.js";import"./index-CHIrpB_0.js";import"./index-fp2UqmYR.js";import"./index-sAPDUP7t.js";import"./index-CAnhap8Q.js";import"./index-Ct-STqd6.js";import"./index-NsNLUv-l.js";import"./x-DKtb7ZIX.js";import"./tooltip-DPBvXFis.js";import"./index-Bw7PhfqB.js";import"./index-Ch1D9Fwk.js";import"./index-CLqgXlaU.js";import"./button-DCKttsUK.js";import"./button.variants-CM5mvIUD.js";import"./spinner-Fek3w9J4.js";const je={title:"Layouts/Sidebar",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"}},C=[{label:"Dashboard",icon:A,active:!0},{label:"Customers",icon:k,badge:"12"},{label:"Analytics",icon:H},{label:"Settings",icon:P}],a={render:()=>e.jsxs(I,{children:[e.jsxs(s,{collapsible:"icon",children:[e.jsxs(g,{className:"flex-row items-center justify-between group-data-[collapsible=icon]:justify-center",children:[e.jsx("span",{className:"text-base font-semibold group-data-[collapsible=icon]:hidden",children:"techdevx"}),e.jsx(d,{})]}),e.jsx(f,{children:e.jsxs(v,{children:[e.jsx(y,{children:"Main"}),e.jsx(w,{children:e.jsx(G,{children:C.map(({label:r,icon:i,active:t,badge:o})=>e.jsxs(N,{children:[e.jsxs(M,{isActive:t,tooltip:r,children:[e.jsx(i,{}),e.jsx("span",{children:r})]}),o&&e.jsx(B,{children:o})]},r))})})]})}),e.jsx(R,{children:e.jsx("span",{className:"text-xs text-muted-foreground group-data-[collapsible=icon]:hidden",children:"v0.3.0"})}),e.jsx(F,{})]}),e.jsxs(L,{children:[e.jsxs("header",{className:"flex h-14 items-center gap-2 border-b border-border px-4",children:[e.jsx(d,{className:"-ml-2"}),e.jsx("span",{className:"text-sm font-medium",children:"Dashboard"})]}),e.jsx("div",{className:"flex-1 p-6 text-sm text-muted-foreground",children:"Resize the preview below 768px to see the mobile sheet behavior."})]})]})},n={render:()=>e.jsx("div",{className:"h-96 overflow-hidden",children:e.jsxs(s,{children:[e.jsx(g,{children:e.jsx("span",{className:"text-base font-semibold",children:"techdevx"})}),e.jsx(f,{children:e.jsx(v,{label:"Main",children:C.map(({label:r,icon:i,active:t})=>e.jsx(N,{children:e.jsxs(M,{isActive:t,children:[e.jsx(i,{}),e.jsx("span",{children:r})]})},r))})})]})})};var l,c,p,b,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Providerless back-compat: a static rail (the pre-0.3 API).",...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.description}}};const ge=["FullChrome","StaticRail"];export{a as FullChrome,n as StaticRail,ge as __namedExportsOrder,je as default};
