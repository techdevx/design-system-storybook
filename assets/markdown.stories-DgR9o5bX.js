import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{M as o}from"./markdown-BFnYPELx.js";import"./utils-DCADjnpI.js";import"./index-UiW3gZKV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./code-block-BGM0BBZi.js";import"./copy-button-C5n897Tw.js";import"./button-BksSy-NO.js";import"./index-DOqdsVs_.js";import"./button.variants-CM5mvIUD.js";import"./index-CkIaN0ex.js";import"./spinner-Fek3w9J4.js";import"./check-CjIdO5i9.js";import"./createLucideIcon-BBGjgC4Q.js";const R={title:"UI/Markdown",component:o,tags:["autodocs"],args:{children:""}},p=`## Release notes

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
