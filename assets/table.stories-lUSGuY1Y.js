import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as i,a as c,b as r,c as s,d as m,e as l}from"./table-DTtGCQ5w.js";import{B as T}from"./badge-CI4wR6Ju.js";import"./utils-DCADjnpI.js";import"./index-DOqdsVs_.js";import"./index-UiW3gZKV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CkIaN0ex.js";const g={title:"Data Display/Table",component:i,tags:["autodocs"]},b=[{id:"INV-001",customer:"Acme",status:"Paid",total:"$250.00"},{id:"INV-002",customer:"Globex",status:"Pending",total:"$150.00"},{id:"INV-003",customer:"Initech",status:"Overdue",total:"$350.00"}],t={render:()=>e.jsxs(i,{children:[e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(s,{children:"Invoice"}),e.jsx(s,{children:"Customer"}),e.jsx(s,{children:"Status"}),e.jsx(s,{className:"text-right",children:"Total"})]})}),e.jsx(m,{children:b.map(a=>e.jsxs(r,{children:[e.jsx(l,{className:"font-medium",children:a.id}),e.jsx(l,{children:a.customer}),e.jsx(l,{children:e.jsx(T,{variant:a.status==="Paid"?"success":"secondary",children:a.status})}),e.jsx(l,{className:"text-right",children:a.total})]},a.id))})]})};var n,d,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {INVOICES.map(inv => <TableRow key={inv.id}>
            <TableCell className="font-medium">{inv.id}</TableCell>
            <TableCell>{inv.customer}</TableCell>
            <TableCell>
              <Badge variant={inv.status === "Paid" ? "success" : "secondary"}>{inv.status}</Badge>
            </TableCell>
            <TableCell className="text-right">{inv.total}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(o=(d=t.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const I=["Default"];export{t as Default,I as __namedExportsOrder,g as default};
