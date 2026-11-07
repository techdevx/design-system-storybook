import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{b as d,C as m,c,d as p,e as h,f as C}from"./chart-Cy-tvb3G.js";import{r as e}from"./index-CHISt2gJ.js";import{C as f,a as x,X as b,B as r}from"./CartesianChart-JF9t4PJl.js";import"./utils-DCADjnpI.js";import"./index-CHIrpB_0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fp2UqmYR.js";import"./getZIndexFromUnknown-w2oUeQi6.js";import"./tiny-invariant-CopsF_GD.js";var k=["axis","item"],v=e.forwardRef((n,l)=>e.createElement(f,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:k,tooltipPayloadSearcher:d,categoricalChartProps:n,ref:l}));const N={title:"Charts/Chart",tags:["autodocs"]},j=[{month:"Jan",desktop:186,mobile:80},{month:"Feb",desktop:305,mobile:200},{month:"Mar",desktop:237,mobile:120},{month:"Apr",desktop:173,mobile:190},{month:"May",desktop:209,mobile:130}],u={desktop:{label:"Desktop",color:"var(--chart-1)"},mobile:{label:"Mobile",color:"var(--chart-2)"}},t={render:()=>a.jsx(m,{config:u,className:"h-64 w-[40rem]",children:a.jsxs(v,{data:j,children:[a.jsx(x,{vertical:!1}),a.jsx(b,{dataKey:"month",tickLine:!1,axisLine:!1}),a.jsx(c,{content:a.jsx(p,{})}),a.jsx(h,{content:a.jsx(C,{})}),a.jsx(r,{dataKey:"desktop",fill:"var(--color-desktop)",radius:4}),a.jsx(r,{dataKey:"mobile",fill:"var(--color-mobile)",radius:4})]})})};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <ChartContainer config={config} className="h-64 w-[40rem]">
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const S=["Bars"];export{t as Bars,S as __namedExportsOrder,N as default};
