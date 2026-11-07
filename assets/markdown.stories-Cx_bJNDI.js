import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{M as o}from"./markdown-C55kCs7j.js";import"./utils-DCADjnpI.js";import"./index-CHISt2gJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./code-block-CEtjq64O.js";import"./copy-button-DdbjFSKP.js";import"./button-DCKttsUK.js";import"./index-BGcWswtl.js";import"./button.variants-CM5mvIUD.js";import"./index-CkIaN0ex.js";import"./spinner-Fek3w9J4.js";import"./check-DlxM5pN9.js";import"./createLucideIcon-W0-uuUzi.js";const R={title:"UI/Markdown",component:o,tags:["autodocs"],args:{children:""}},p=`## Release notes

The **0.4.0** release adds an AI component layer:

- \`Markdown\` — this renderer
- \`CodeBlock\` with copy support
- \`StreamingText\` for LLM responses

### Install

\`\`\`bash
pnpm add @techdevx/design-system
\`\`\`

| Component | Status |
| --- | --- |
| Markdown | ✅ |
| CodeBlock | ✅ |

> Rendered entirely on design-system tokens — [see the docs](https://example.com).
`,e={render:()=>i.jsx(o,{className:"max-w-xl",children:p})},r={render:()=>i.jsx(o,{className:"max-w-xl",children:"Here's how to memoize the selector:\n\n```tsx\nconst rows = useMemo(() => filter(data), [data]);\n```\n\nThis avoids re-filtering on every render."})};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Markdown className="max-w-xl">{SAMPLE}</Markdown>
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var a,m,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:'{\n  render: () => <Markdown className="max-w-xl">\n      {"Here\'s how to memoize the selector:\\n\\n```tsx\\nconst rows = useMemo(() => filter(data), [data]);\\n```\\n\\nThis avoids re-filtering on every render."}\n    </Markdown>\n}',...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const j=["Default","AiResponse"];export{r as AiResponse,e as Default,j as __namedExportsOrder,R as default};
